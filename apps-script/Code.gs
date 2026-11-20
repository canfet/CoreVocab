/**
 * CoreVocab 核心詞彙學習｜雲端同步後端（Google Apps Script + Google 試算表）
 *
 * 使用方式見 README.md。重點：
 *  1. 在「試算表」→ 擴充功能 → Apps Script，貼上本檔與 appsscript.json。
 *  2. 部署 → 新增部署作業 → 網頁應用程式（執行身分：我／存取：所有人）。
 *  3. 先執行一次 setup()（建立工作表、安裝每日清理）。
 *  4. 把網址（…/exec）設為 GitHub repo 的 Actions Repository variable「APPS_SCRIPT_URL」，重新部署。
 *
 * 安全設計：
 *  - 使用者不需登入。每位使用者有一組 16 碼隨機「同步碼」（約 79 bits），等同密碼。
 *  - 試算表只存「同步碼的 SHA-256 雜湊（含隨機 salt）」，不存同步碼本身；
 *    就算試算表外流，也無法反推同步碼。
 *  - 所有輸入在伺服器端重新驗證、清理、限制大小，前端傳什麼都不會直接寫入。
 *  - 全域限流：建立同步碼、猜錯同步碼都有次數上限，所有寫入使用 LockService 序列化。
 */

var VERSION = '1.0.0';
var SHEET_NAME = 'Sync';
var HEADERS = ['code_hash', 'data_json', 'created_at', 'updated_at', 'sync_count', 'last_seen'];
var COL_COUNT = 5, COL_SEEN = 6;

var CODE_ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'; // 去掉容易混淆的 I L O 0 1
var CODE_LEN = 16;

var MAX_BODY = 80000;         // 單次請求大小上限（字元）
var MAX_DATA = 45000;         // 單一使用者資料上限（試算表一格上限 50000）
var MAX_SET = 600;            // 每個單字集合（收藏／已精熟）最多幾筆（含「已移除」記錄）
var MAX_PROGRESS_WORDS = 1000;
var MAX_ROWS = 20000;         // 最多幾位使用者
var STALE_DAYS = 180;         // 超過幾天沒連線就清除
var UNUSED_DAYS = 30;         // 建立後只用過一次、超過幾天沒再連線就清除（多半是垃圾資料）
var CREATE_LIMIT = 100;       // 每小時最多建立幾組同步碼（全域）
var FAIL_LIMIT = 60;          // 每 10 分鐘最多幾次錯誤同步碼（全域）

var WORD_RE = /^[a-z][a-z-]{0,39}$/;
var LWW_SECTIONS = ['progress', 'audio', 'lastWord']; // 整塊以時間戳較新者為準：{ v, t }
var SET_SECTIONS = ['saved', 'mastered'];             // 每個單字各自合併：{ 單字: ±時間戳 }，正 = 加入、負 = 移除

/* ========== 進入點 ========== */

function doGet() {
  return json_({ ok: true, service: 'corevocab-sync', version: VERSION });
}

function doPost(e) {
  try {
    var raw = (e && e.postData && e.postData.contents) || '';
    if (raw.length > MAX_BODY) throw err_('TOO_LARGE', '資料太大，無法同步');
    var body;
    try { body = JSON.parse(raw); } catch (_) { throw err_('BAD_REQUEST', '請求格式錯誤'); }
    if (!body || typeof body !== 'object') throw err_('BAD_REQUEST', '請求格式錯誤');

    switch (body.action) {
      case 'ping':   return json_({ ok: true, version: VERSION });
      case 'create': return withLock_(function () { return create_(body); });
      case 'sync':   return withLock_(function () { return sync_(body); });
      case 'remove': return withLock_(function () { return remove_(body); });
      default:       throw err_('BAD_ACTION', '不支援的操作');
    }
  } catch (e2) {
    if (e2 && e2.syncCode) return json_({ ok: false, code: e2.syncCode, error: e2.message });
    console.error(e2 && e2.stack ? e2.stack : e2);
    return json_({ ok: false, code: 'SERVER_ERROR', error: '伺服器發生錯誤，請稍後再試' });
  }
}

/* ========== 動作 ========== */

/** 建立新的同步碼；data 為此裝置目前的資料（可省略） */
function create_(body) {
  var sheet = sheet_();
  if (sheet.getLastRow() - 1 >= MAX_ROWS) throw err_('FULL', '同步名額已滿，請聯絡管理者');
  bump_('create', CREATE_LIMIT, 3600, '建立同步碼太頻繁，請稍後再試');

  var data = sanitize_(body.data || {});
  var json = JSON.stringify(data);
  if (json.length > MAX_DATA) throw err_('TOO_LARGE', '資料太大，無法同步');

  var code = newCode_();
  var now = new Date();
  sheet.appendRow([hash_(code), json, now, now, 1, now]);
  return json_({ ok: true, code: formatCode_(code), data: data, server_time: now.getTime() });
}

/** 合併並回傳：每個區塊以時間戳較新者為準 */
function sync_(body) {
  var sheet = sheet_();
  var code = normalizeCode_(body.code);
  var row = findRow_(sheet, hash_(code));
  if (!row) {
    bump_('fail', FAIL_LIMIT, 600, '嘗試次數過多，請 10 分鐘後再試');
    throw err_('NOT_FOUND', '找不到這組同步碼，請確認是否輸入正確');
  }

  var cell = sheet.getRange(row, 2);
  var stored;
  try { stored = JSON.parse(cell.getValue() || '{}'); } catch (_) { stored = {}; }

  var incoming = sanitize_(body.data || {});
  var changed = false;
  LWW_SECTIONS.forEach(function (name) {
    if (incoming[name] && (!stored[name] || incoming[name].t > stored[name].t)) {
      stored[name] = incoming[name];
      changed = true;
    }
  });
  SET_SECTIONS.forEach(function (name) {
    if (!incoming[name]) return;
    var merged = mergeStamps_(stored[name] || {}, incoming[name]); // 時間相同時以雲端為準
    merged = capStamps_(merged);
    if (JSON.stringify(merged) !== JSON.stringify(stored[name] || {})) {
      stored[name] = merged;
      changed = true;
    }
  });

  if (changed) {
    var json = JSON.stringify(stored);
    if (json.length > MAX_DATA) throw err_('TOO_LARGE', '資料太大，無法同步');
    var now = new Date();
    cell.setValue(json);
    sheet.getRange(row, 4).setValue(now);
    sheet.getRange(row, COL_COUNT).setValue((Number(sheet.getRange(row, COL_COUNT).getValue()) || 0) + 1);
  }
  touch_(sheet, row);
  return json_({ ok: true, data: stored, server_time: Date.now() });
}

/** 記錄最後連線時間（一天最多寫一次，避免每次同步都寫試算表） */
function touch_(sheet, row) {
  var seen = sheet.getRange(row, COL_SEEN).getValue();
  var now = new Date();
  if (!(seen instanceof Date) || now.getTime() - seen.getTime() > 24 * 3600 * 1000) {
    sheet.getRange(row, COL_SEEN).setValue(now);
  }
}

/** 刪除這組同步碼在雲端的全部資料 */
function remove_(body) {
  var sheet = sheet_();
  var row = findRow_(sheet, hash_(normalizeCode_(body.code)));
  if (!row) {
    bump_('fail', FAIL_LIMIT, 600, '嘗試次數過多，請 10 分鐘後再試');
    throw err_('NOT_FOUND', '找不到這組同步碼');
  }
  sheet.deleteRow(row);
  return json_({ ok: true });
}

/* ========== 驗證與清理（不信任前端） ========== */

/** 回傳 { progress:{v,t}, audio:{v,t}, lastWord:{v,t}, saved:{單字:時間戳}, mastered:{…} }，只含有傳入的區塊 */
function sanitize_(data) {
  if (!data || typeof data !== 'object' || Array.isArray(data)) throw err_('BAD_DATA', '資料格式錯誤');
  var out = {};
  var now = Date.now();

  LWW_SECTIONS.forEach(function (s) {
    var sec = data[s];
    if (sec === undefined || sec === null) return;
    if (typeof sec !== 'object' || !('v' in sec)) throw err_('BAD_DATA', '資料格式錯誤');
    var t = Number(sec.t);
    if (!isFinite(t) || t < 0) t = 0;
    out[s] = { v: cleanSection_(s, sec.v), t: Math.min(Math.floor(t), now) };
  });

  SET_SECTIONS.forEach(function (s) {
    var set = data[s];
    if (set === undefined || set === null) return;
    out[s] = cleanStamps_(set, now);
  });
  return out;
}

/** 單字集合：key 必須是合法單字，值是非零整數時間戳（不可超過現在） */
function cleanStamps_(set, now) {
  if (typeof set !== 'object' || Array.isArray(set)) throw err_('BAD_DATA', '單字清單格式錯誤');
  var keys = Object.keys(set);
  if (keys.length > MAX_SET) throw err_('TOO_LARGE', '單字數量超過上限');
  var out = {};
  keys.forEach(function (w) {
    var t = Number(set[w]);
    if (!WORD_RE.test(w) || !isFinite(t) || t === 0) return; // 不合法的項目直接丟掉
    var abs = Math.min(Math.floor(Math.abs(t)), now);
    if (abs < 1) abs = 1;
    out[w] = t > 0 ? abs : -abs;
  });
  return out;
}

/** 每個單字取時間較新（絕對值較大）的；相同時以 a 為準 */
function mergeStamps_(a, b) {
  var out = {};
  Object.keys(a).forEach(function (w) { out[w] = a[w]; });
  Object.keys(b).forEach(function (w) {
    if (!(w in out) || Math.abs(b[w]) > Math.abs(out[w])) out[w] = b[w];
  });
  return out;
}

/** 超過上限時，先丟最舊的「已移除」記錄；還是太多就拒絕 */
function capStamps_(st) {
  var keys = Object.keys(st);
  if (keys.length <= MAX_SET) return st;
  var removed = keys.filter(function (w) { return st[w] < 0; })
    .sort(function (x, y) { return Math.abs(st[x]) - Math.abs(st[y]); });
  var excess = keys.length - MAX_SET;
  for (var i = 0; i < removed.length && excess > 0; i++, excess--) delete st[removed[i]];
  if (excess > 0) throw err_('TOO_LARGE', '單字數量超過上限');
  return st;
}

function cleanSection_(name, v) {
  switch (name) {
    case 'lastWord':
      if (typeof v !== 'string' || !WORD_RE.test(v)) return '';
      return v;
    case 'audio':
      if (!v || typeof v !== 'object') throw err_('BAD_DATA', '音訊設定格式錯誤');
      return {
        lang: v.lang === 'en-GB' ? 'en-GB' : 'en-US',
        rate: clamp_(Number(v.rate), 0.5, 2, 0.85),
        autoPlayOnSearch: v.autoPlayOnSearch === true
      };
    case 'progress':
      if (!v || typeof v !== 'object') throw err_('BAD_DATA', '學習進度格式錯誤');
      var date = String(v.lastStudyDate || '');
      if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw err_('BAD_DATA', '學習進度日期格式錯誤');
      var level = String(v.currentLevel || '');
      if (!/^[A-Za-z0-9_-]{1,30}$/.test(level)) throw err_('BAD_DATA', '學習進度等級格式錯誤');
      return {
        currentLevel: level,
        dailyGoal: Math.round(clamp_(Number(v.dailyGoal), 1, 100, 5)),
        todayStudiedWords: words_(v.todayStudiedWords, MAX_PROGRESS_WORDS),
        lastStudyDate: date,
        streakDays: Math.round(clamp_(Number(v.streakDays), 0, 100000, 1))
      };
  }
  throw err_('BAD_DATA', '未知的資料區塊');
}

function words_(arr, max) {
  if (!Array.isArray(arr)) throw err_('BAD_DATA', '單字清單格式錯誤');
  var seen = {}, out = [];
  for (var i = 0; i < arr.length && out.length < max; i++) {
    var w = arr[i];
    if (typeof w === 'string' && WORD_RE.test(w) && !seen[w]) { seen[w] = true; out.push(w); }
  }
  return out;
}

function clamp_(n, lo, hi, dflt) {
  if (!isFinite(n)) return dflt;
  return Math.min(hi, Math.max(lo, n));
}

/* ========== 同步碼與雜湊 ========== */

function normalizeCode_(c) {
  var s = String(c || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
  if (s.length !== CODE_LEN) throw err_('BAD_CODE', '同步碼格式不正確（應為 16 碼）');
  for (var i = 0; i < s.length; i++) {
    if (CODE_ALPHABET.indexOf(s.charAt(i)) < 0) throw err_('BAD_CODE', '同步碼格式不正確');
  }
  return s;
}

function formatCode_(s) {
  return s.match(/.{4}/g).join('-');
}

/** 用 UUID v4（密碼學隨機）產生；略過 UUID 中固定的版本／變體位元 */
function newCode_() {
  var hex = '';
  for (var k = 0; k < 3; k++) {
    var u = Utilities.getUuid().replace(/-/g, '');
    hex += u.substr(0, 12) + u.substr(13, 3) + u.substr(17);
  }
  var out = '';
  for (var i = 0; i < CODE_LEN; i++) {
    var b = parseInt(hex.substr(i * 2, 2), 16);
    out += CODE_ALPHABET.charAt(b % CODE_ALPHABET.length);
  }
  return out;
}

function salt_() {
  var props = PropertiesService.getScriptProperties();
  var salt = props.getProperty('SALT');
  if (!salt) {
    salt = Utilities.getUuid() + Utilities.getUuid();
    props.setProperty('SALT', salt);
  }
  return salt;
}

function hash_(code) {
  var bytes = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, salt_() + ':' + code, Utilities.Charset.UTF_8);
  return bytes.map(function (b) { return ('0' + (b & 0xff).toString(16)).slice(-2); }).join('');
}

/* ========== 試算表 ========== */

function sheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight('bold');
    sh.setFrozenRows(1);
    sh.getRange(1, 1, sh.getMaxRows(), 2).setNumberFormat('@'); // 純文字，避免被當成公式或數字
  }
  return sh;
}

function findRow_(sheet, hash) {
  var last = sheet.getLastRow();
  if (last < 2) return 0;
  var hit = sheet.getRange(2, 1, last - 1, 1).createTextFinder(hash).matchEntireCell(true).matchCase(true).findNext();
  return hit ? hit.getRow() : 0;
}

/** 手動執行一次，建立工作表並授權；同時安裝每日清理 */
function setup() {
  sheet_();
  salt_();
  installCleanupTrigger();
  Logger.log('完成。請到「部署 → 新增部署作業 → 網頁應用程式」。');
}

/**
 * 清除過期資料，避免試算表被垃圾資料塞滿（每天自動執行一次）：
 *  - 超過 STALE_DAYS 天沒連線的資料
 *  - 建立後只同步過一次、超過 UNUSED_DAYS 天沒再連線的資料
 */
function cleanup() {
  return withLock_(function () {
    var sheet = sheet_();
    var last = sheet.getLastRow();
    if (last < 2) return 0;
    var now = Date.now(), day = 24 * 3600 * 1000;
    var vals = sheet.getRange(2, 1, last - 1, HEADERS.length).getValues();
    var removed = 0;
    for (var i = vals.length - 1; i >= 0; i--) { // 由下往上刪，列號才不會位移
      var seen = vals[i][COL_SEEN - 1] || vals[i][3] || vals[i][2];
      var t = seen instanceof Date ? seen.getTime() : 0;
      var idle = (now - t) / day;
      var count = Number(vals[i][COL_COUNT - 1]) || 0;
      if (idle > STALE_DAYS || (count <= 1 && idle > UNUSED_DAYS)) {
        sheet.deleteRow(i + 2);
        removed++;
      }
    }
    console.log('cleanup removed ' + removed);
    return removed;
  });
}

/** 安裝每日清理觸發器（重複執行不會重複安裝） */
function installCleanupTrigger() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === 'cleanup') ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger('cleanup').timeBased().everyDays(1).atHour(3).create();
}

/* ========== 工具 ========== */

function err_(code, msg) {
  var e = new Error(msg);
  e.syncCode = code;
  return e;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function withLock_(fn) {
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(20000)) throw err_('BUSY', '目前人數較多，請稍後再試');
  try { return fn(); } finally { lock.releaseLock(); }
}

/** 全域計數限流（需在 lock 內呼叫）；超過上限就丟 RATE_LIMIT */
function bump_(key, limit, ttlSec, msg) {
  var cache = CacheService.getScriptCache();
  var now = Date.now();
  var st;
  try { st = JSON.parse(cache.get('rl:' + key) || 'null'); } catch (_) { st = null; }
  if (!st || now - st.t0 > ttlSec * 1000) st = { n: 0, t0: now };
  if (st.n >= limit) throw err_('RATE_LIMIT', msg);
  st.n++;
  cache.put('rl:' + key, JSON.stringify(st), ttlSec);
}

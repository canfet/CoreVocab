// 在 Node/Bun 裡載入 apps-script/Code.gs，並用假的 Google 服務取代 SpreadsheetApp 等全域物件。
import vm from 'node:vm';
import fs from 'node:fs';
import crypto from 'node:crypto';

export function loadBackend() {
  const rows = [['code_hash', 'data_json', 'created_at', 'updated_at', 'sync_count', 'last_seen']];
  const props = {};
  const cacheMap = {};
  let triggers = [];

  const range = (r, c, nr = 1, nc = 1) => ({
    getValues: () => rows.slice(r - 1, r - 1 + nr).map((x) => x.slice(c - 1, c - 1 + nc)),
    getValue: () => rows[r - 1][c - 1],
    setValue(v) { rows[r - 1][c - 1] = v; return this; },
    createTextFinder: (h) => ({
      matchEntireCell() { return this; },
      matchCase() { return this; },
      findNext() {
        for (let i = 1; i < rows.length; i++) if (rows[i][0] === h) return { getRow: () => i + 1 };
        return null;
      },
    }),
  });
  const sheet = {
    getLastRow: () => rows.length,
    getRange: range,
    appendRow: (a) => rows.push(a),
    deleteRow: (r) => rows.splice(r - 1, 1),
  };

  const ctx = {
    console, Date, JSON, Math, parseInt, isFinite, Number, String, Array, Error, Object,
    SpreadsheetApp: { getActiveSpreadsheet: () => ({ getSheetByName: () => sheet }) },
    PropertiesService: { getScriptProperties: () => ({ getProperty: (k) => props[k] || null, setProperty: (k, v) => { props[k] = v; } }) },
    CacheService: { getScriptCache: () => ({ get: (k) => cacheMap[k] || null, put: (k, v) => { cacheMap[k] = v; } }) },
    LockService: { getScriptLock: () => ({ tryLock: () => true, releaseLock() {} }) },
    ContentService: { createTextOutput: (s) => ({ s, setMimeType() { return this; } }), MimeType: { JSON: 1 } },
    ScriptApp: {
      getProjectTriggers: () => triggers,
      deleteTrigger: (t) => { triggers = triggers.filter((x) => x !== t); },
      newTrigger: (f) => ({
        timeBased() { return this; }, everyDays() { return this; }, atHour() { return this; },
        create() { triggers.push({ getHandlerFunction: () => f }); },
      }),
    },
    Utilities: {
      getUuid: () => crypto.randomUUID(),
      computeDigest: (a, s) => [...crypto.createHash('sha256').update(s).digest()].map((b) => (b > 127 ? b - 256 : b)),
      DigestAlgorithm: { SHA_256: 1 }, Charset: { UTF_8: 1 },
    },
  };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(new URL('../apps-script/Code.gs', import.meta.url), 'utf8'), ctx);

  const post = (o) => JSON.parse(ctx.doPost({ postData: { contents: JSON.stringify(o) } }).s);
  return { ctx, rows, post, triggers: () => triggers };
}

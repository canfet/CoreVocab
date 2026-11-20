import { test, expect } from 'bun:test';
import { loadBackend } from './gas-harness.mjs';

const lww = (t) => ({
  progress: { v: { currentLevel: 'RE', dailyGoal: 5, todayStudiedWords: [], lastStudyDate: '2026-11-20', streakDays: 2 }, t },
  audio: { v: { lang: 'en-GB', rate: 0.9, autoPlayOnSearch: true, evil: 1 }, t },
  lastWord: { v: 'abduct', t },
});

// 產生 n 個互不相同的合法單字（只含 a-z）
const words = (n) => Array.from({ length: n }, (_, i) => 'w' + [i % 26, Math.floor(i / 26) % 26, Math.floor(i / 676)].map((k) => String.fromCharCode(97 + k)).join(''));
const stampsOf = (n, sign) => Object.fromEntries(words(n).map((w, i) => [w, sign * (1000 + i)]));

test('建立同步碼：只存雜湊、不存同步碼；輸入清理', () => {
  const { post, rows } = loadBackend();
  const now = Date.now();
  const r = post({ action: 'create', data: { ...lww(now - 1000), saved: { abduct: now - 500, 'Bad!!': now, x: 0 } } });
  expect(r.ok).toBe(true);
  expect(r.code).toMatch(/^[A-HJKMNP-Z2-9]{4}(-[A-HJKMNP-Z2-9]{4}){3}$/);
  expect(Object.keys(r.data.saved)).toEqual(['abduct']); // 非法單字、0 時間戳被丟掉
  expect(r.data.audio.v).toEqual({ lang: 'en-GB', rate: 0.9, autoPlayOnSearch: true }); // 多餘欄位被丟掉
  expect(rows[1][0]).toHaveLength(64);
  expect(rows[1][1]).not.toContain(r.code);
});

test('同步碼格式容錯，錯誤格式與不存在分別回報', () => {
  const { post } = loadBackend();
  const { code } = post({ action: 'create', data: {} });
  expect(post({ action: 'sync', code: code.toLowerCase().replace(/-/g, ' '), data: {} }).ok).toBe(true);
  expect(post({ action: 'sync', code: 'ABCD', data: {} }).code).toBe('BAD_CODE');
  expect(post({ action: 'sync', code: 'AAAA-AAAA-AAAA-AAAA', data: {} }).code).toBe('NOT_FOUND');
});

test('整塊區塊：較新的時間戳勝出；未來時間會被壓回現在', () => {
  const { post } = loadBackend();
  const now = Date.now();
  const { code } = post({ action: 'create', data: lww(now - 1000) });
  let r = post({ action: 'sync', code, data: { lastWord: { v: 'older', t: now - 5000 } } });
  expect(r.data.lastWord.v).toBe('abduct');
  r = post({ action: 'sync', code, data: { lastWord: { v: 'newer', t: now + 99999999 } } });
  expect(r.data.lastWord.v).toBe('newer');
  expect(r.data.lastWord.t).toBeLessThanOrEqual(Date.now());
});

test('單字集合：兩台裝置各自增減，合併後兩邊的修改都保留', () => {
  const { post } = loadBackend();
  const T = Date.now() - 100000;
  const { code } = post({ action: 'create', data: { saved: { alpha: T, beta: T } } });
  post({ action: 'sync', code, data: { saved: { alpha: -(T + 10), gamma: T + 20 } } }); // A：移除 alpha、新增 gamma
  const r = post({ action: 'sync', code, data: { saved: { delta: T + 15 } } }); // B：新增 delta
  const present = Object.keys(r.data.saved).filter((w) => r.data.saved[w] > 0).sort();
  expect(present).toEqual(['beta', 'delta', 'gamma']);
  expect(r.data.saved.alpha).toBeLessThan(0); // 保留「已移除」記錄，避免舊裝置把它加回來
});

test('單字集合：舊的加入不能蓋掉較新的移除', () => {
  const { post } = loadBackend();
  const now = Date.now();
  const { code } = post({ action: 'create', data: { mastered: { word: now - 1000 } } });
  post({ action: 'sync', code, data: { mastered: { word: -(now - 500) } } });
  const r = post({ action: 'sync', code, data: { mastered: { word: now - 900 } } });
  expect(r.data.mastered.word).toBeLessThan(0);
});

test('單字集合超過上限會被拒絕', () => {
  const { post } = loadBackend();
  expect(post({ action: 'create', data: { saved: stampsOf(601, 1) } }).code).toBe('TOO_LARGE');
  const { code } = post({ action: 'create', data: { saved: stampsOf(600, 1) } });
  // 已經 600 筆、且沒有「已移除」記錄可丟，再加一個就要拒絕
  expect(post({ action: 'sync', code, data: { saved: { zzzz: Date.now() } } }).code).toBe('TOO_LARGE');
});

test('超過上限時，先丟最舊的「已移除」記錄', () => {
  const { post } = loadBackend();
  const base = stampsOf(600, 1);
  const first = Object.keys(base)[0];
  base[first] = -1000; // 其中一筆是「已移除」
  const { code } = post({ action: 'create', data: { saved: base } });
  const r = post({ action: 'sync', code, data: { saved: { zzzz: Date.now() } } });
  expect(r.ok).toBe(true);
  expect(r.data.saved[first]).toBeUndefined();
  expect(r.data.saved.zzzz).toBeGreaterThan(0);
});

test('不合法的資料、操作、過大請求', () => {
  const { post, ctx } = loadBackend();
  const { code } = post({ action: 'create', data: {} });
  expect(post({ action: 'sync', code, data: { progress: { v: { lastStudyDate: 'x' }, t: 1 } } }).code).toBe('BAD_DATA');
  expect(post({ action: 'sync', code, data: { saved: ['a'] } }).code).toBe('BAD_DATA');
  expect(post({ action: 'nope' }).code).toBe('BAD_ACTION');
  expect(ctx.doPost({ postData: { contents: 'x'.repeat(90000) } }).s).toContain('TOO_LARGE');
  expect(ctx.doPost({ postData: { contents: 'not json' } }).s).toContain('BAD_REQUEST');
});

test('音訊設定被限縮在合理範圍', () => {
  const { post } = loadBackend();
  const { code } = post({ action: 'create', data: {} });
  const r = post({ action: 'sync', code, data: { audio: { v: { lang: 'xx', rate: 99 }, t: Date.now() } } });
  expect(r.data.audio.v).toEqual({ lang: 'en-US', rate: 2, autoPlayOnSearch: false });
});

test('刪除雲端資料；猜錯同步碼有全域上限', () => {
  const { post } = loadBackend();
  const { code } = post({ action: 'create', data: {} });
  expect(post({ action: 'remove', code }).ok).toBe(true);
  expect(post({ action: 'sync', code, data: {} }).code).toBe('NOT_FOUND');
  for (let i = 0; i < 60; i++) post({ action: 'sync', code: 'AAAA-AAAA-AAAA-AAAA', data: {} });
  expect(post({ action: 'sync', code: 'AAAA-AAAA-AAAA-AAAA', data: {} }).code).toBe('RATE_LIMIT');
});

test('每日清理：刪除垃圾與過期資料，保留活躍資料；觸發器不重複安裝', () => {
  const { ctx, rows, triggers } = loadBackend();
  const old = (n) => new Date(Date.now() - n * 86400000);
  rows.push(['spam', '{}', old(40), old(40), 1, old(40)]);
  rows.push(['new', '{}', old(5), old(5), 1, old(5)]);
  rows.push(['active', '{}', old(100), old(1), 9, old(1)]);
  rows.push(['stale', '{}', old(400), old(300), 9, old(200)]);
  rows.push(['used', '{}', old(100), old(40), 5, old(40)]);
  expect(ctx.cleanup()).toBe(2);
  expect(rows.slice(1).map((r) => r[0])).toEqual(['new', 'active', 'used']);
  ctx.installCleanupTrigger();
  ctx.installCleanupTrigger();
  expect(triggers()).toHaveLength(1);
});

test('last_seen 一天最多更新一次', () => {
  const { post, rows } = loadBackend();
  const { code } = post({ action: 'create', data: {} });
  const fresh = rows[1][5];
  post({ action: 'sync', code, data: {} });
  expect(rows[1][5]).toBe(fresh);
  rows[1][5] = new Date(Date.now() - 3 * 86400000);
  post({ action: 'sync', code, data: {} });
  expect(Date.now() - rows[1][5].getTime()).toBeLessThan(5000);
});

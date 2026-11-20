import { test, expect } from 'bun:test';
import { presentWords, mergeStamps, diffStamps, seedStamps, sameWordSet } from '../src/lib/syncMerge.ts';

test('presentWords：只列存在的單字，新的在前', () => {
  expect(presentWords({ a: 5, b: -9, c: 7 })).toEqual(['c', 'a']);
});

test('mergeStamps：取較新者；時間相同以第一個參數為準', () => {
  expect(mergeStamps({ a: 5, b: -9 }, { a: -6, b: 8, c: 1 })).toEqual({ a: -6, b: -9, c: 1 });
  expect(mergeStamps({ a: 5 }, { a: -5 })).toEqual({ a: 5 });
});

test('diffStamps：新增記 +now、移除記 -now，沒變動不動', () => {
  const st = { a: 10, b: 10 };
  expect(diffStamps(['a', 'b'], st, 100)).toBe(false);
  expect(diffStamps(['a', 'c'], st, 100)).toBe(true);
  expect(st).toEqual({ a: 10, b: -100, c: 100 });
  expect(diffStamps(['a', 'b', 'c'], st, 200)).toBe(true); // 移除後再加回來
  expect(st.b).toBe(200);
});

test('diffStamps：時鐘倒退時仍保證時間戳遞增', () => {
  const st = { a: 1000 };
  diffStamps([], st, 500);
  expect(st.a).toBe(-1001);
});

test('seedStamps：啟用前就存在的單字給最小正數，不會蓋掉別台的移除記錄', () => {
  const st = { x: -50 };
  seedStamps(['a', 'x'], st);
  expect(st).toEqual({ x: -50, a: 1 });
  expect(mergeStamps({ a: -20 }, st).a).toBe(-20);
});

test('兩台裝置離線各自修改，經過「伺服器」合併後收斂到同一結果', () => {
  let server = { a: 1, b: 1 };
  const A = { ...server };
  const B = { ...server };
  diffStamps(['a', 'c'], A, 100); // A：移除 b、新增 c
  diffStamps(['a', 'b', 'd'], B, 110); // B：新增 d
  const sync = (dev) => {
    server = mergeStamps(server, dev);
    return mergeStamps(server, dev);
  };
  const A2 = sync(A);
  const B2 = sync(B);
  const A3 = sync(A2);
  expect(presentWords(A3).sort()).toEqual(presentWords(B2).sort());
  expect(presentWords(B2).sort()).toEqual(['a', 'c', 'd']);
  expect(sameWordSet(['a', 'b'], ['b', 'a'])).toBe(true);
});

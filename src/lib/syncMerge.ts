/**
 * 「單字集合」的合併規則（收藏單字、已精熟單字）。
 * 每個單字一個帶正負號的時間戳：正數 = 在該時間加入，負數 = 在該時間移除。
 * 兩邊合併時，每個單字取時間較新（絕對值較大）的一邊。
 * 這樣兩台裝置離線時各自增減單字，合併後不會互相覆蓋，而是兩邊的修改都保留。
 */
export type WordStamps = Record<string, number>;

/** 目前「存在」的單字，新的在前 */
export function presentWords(st: WordStamps): string[] {
  return Object.keys(st)
    .filter((w) => st[w] > 0)
    .sort((a, b) => st[b] - st[a] || a.localeCompare(b));
}

/** 合併：每個單字取較新的；時間相同時以 a 為準（a 放權威方，例如伺服器） */
export function mergeStamps(a: WordStamps, b: WordStamps): WordStamps {
  const out: WordStamps = { ...a };
  for (const w of Object.keys(b)) {
    if (!(w in out) || Math.abs(b[w]) > Math.abs(out[w])) out[w] = b[w];
  }
  return out;
}

/** 本機單字清單改變後，更新時間戳：新增的記 +now，被移除的記 -now。回傳是否有變動。 */
export function diffStamps(current: string[], stamps: WordStamps, now: number): boolean {
  const cur = new Set(current);
  let changed = false;
  for (const w of cur) {
    if (!(stamps[w] > 0)) {
      stamps[w] = Math.max(now, Math.abs(stamps[w] || 0) + 1);
      changed = true;
    }
  }
  for (const w of Object.keys(stamps)) {
    if (stamps[w] > 0 && !cur.has(w)) {
      stamps[w] = -Math.max(now, stamps[w] + 1);
      changed = true;
    }
  }
  return changed;
}

/** 啟用同步前就存在的單字沒有時間戳：給最小的正數 1（比任何真正的編輯都舊），避免蓋掉別台的移除記錄 */
export function seedStamps(current: string[], stamps: WordStamps): void {
  for (const w of current) if (!(w in stamps)) stamps[w] = 1;
}

export function sameWordSet(a: string[], b: string[]): boolean {
  if (a.length !== b.length) return false;
  const s = new Set(a);
  return b.every((w) => s.has(w));
}

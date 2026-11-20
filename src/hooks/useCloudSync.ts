import { useCallback, useEffect, useRef, useState } from 'react';
import {
  LWW_SECTIONS,
  SET_SECTIONS,
  SyncError,
  createSync,
  isSyncConfigured,
  parseSyncCode,
  removeSync,
  syncNow,
  type LwwSection,
  type SetSection,
  type SyncPayload,
  type Wire,
} from '../lib/cloudSync';
import { diffStamps, mergeStamps, presentWords, sameWordSet, seedStamps, type WordStamps } from '../lib/syncMerge';

const CODE_KEY = 'morpho_sync_code';
const TIMES_KEY = 'morpho_sync_times';
const STAMPS_KEY = 'morpho_sync_stamps';
const DEBOUNCE_MS = 2500;
const FOCUS_THROTTLE_MS = 30000;

export type SyncStatus = 'off' | 'idle' | 'syncing' | 'ok' | 'offline' | 'error';
type Times = Record<LwwSection, number>;
type Stamps = Record<SetSection, WordStamps>;

const readJson = <T,>(key: string, fallback: T): T => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? { ...fallback, ...JSON.parse(raw) } : fallback;
  } catch {
    return fallback;
  }
};
const writeJson = (key: string, v: unknown) => {
  try { localStorage.setItem(key, JSON.stringify(v)); } catch { /* 容量滿或被禁用：忽略，資料仍在記憶體 */ }
};
const readCode = (): string | null => {
  try { return localStorage.getItem(CODE_KEY); } catch { return null; }
};

interface Options {
  /** 目前各區塊的值（已轉成可同步的格式）；每次 render 傳入即可 */
  values: SyncPayload;
  /** 雲端資料較新時，用這個把資料套用到 App 狀態 */
  apply: (patch: Partial<SyncPayload>) => void;
}

/**
 * 不登入的雲端同步。合併規則：
 *  - 收藏單字、已精熟單字：每個單字各自記「加入／移除」時間，兩邊合併後修改都保留。
 *  - 學習進度、發音設定、最後查詢單字：整塊以最後修改的裝置為準。
 * 資料永遠先存在 localStorage，同步失敗不影響使用，連上線後會補同步。
 */
export function useCloudSync({ values, apply }: Options) {
  const configured = isSyncConfigured();
  const [code, setCode] = useState<string | null>(() => (configured ? readCode() : null));
  const [status, setStatus] = useState<SyncStatus>(code ? 'idle' : 'off');
  const [lastSyncedAt, setLastSyncedAt] = useState<number | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const valuesRef = useRef(values);
  valuesRef.current = values;
  const applyRef = useRef(apply);
  applyRef.current = apply;
  const codeRef = useRef(code);
  codeRef.current = code;

  const timesRef = useRef<Times>(readJson<Times>(TIMES_KEY, { progress: 0, audio: 0, lastWord: 0 }));
  const snapRef = useRef<Record<LwwSection, string>>(
    Object.fromEntries(LWW_SECTIONS.map((s) => [s, JSON.stringify(values[s])])) as Record<LwwSection, string>
  );
  const stampsRef = useRef<Stamps>(
    (() => {
      const st = readJson<Stamps>(STAMPS_KEY, { saved: {}, mastered: {} });
      for (const s of SET_SECTIONS) seedStamps(values[s], st[s]);
      return st;
    })()
  );
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const busyRef = useRef(false);
  const pendingRef = useRef(false);
  const lastRunRef = useRef(0);

  const persist = () => {
    writeJson(TIMES_KEY, timesRef.current);
    writeJson(STAMPS_KEY, stampsRef.current);
  };

  const buildWire = (): Wire => {
    const out: Wire = {};
    for (const s of LWW_SECTIONS) {
      // 時間戳 0 = 從未編輯（例如剛連結的新裝置），不上傳，避免用預設值蓋掉雲端
      if (timesRef.current[s] > 0) (out as Record<string, unknown>)[s] = { v: valuesRef.current[s], t: timesRef.current[s] };
    }
    for (const s of SET_SECTIONS) {
      if (Object.keys(stampsRef.current[s]).length) out[s] = stampsRef.current[s];
    }
    return out;
  };

  /**
   * 套用雲端資料。
   * replace = true（輸入同步碼連結時）：完全以雲端為準；否則以「較新者」為準，
   * 這樣同步途中使用者的新修改不會被舊的雲端資料蓋掉。
   */
  const applyRemote = useCallback((remote: Wire, replace: boolean) => {
    const patch: Partial<SyncPayload> = {};

    for (const s of LWW_SECTIONS) {
      const sec = remote[s];
      if (!sec) continue;
      if (!replace && sec.t <= timesRef.current[s]) continue;
      timesRef.current[s] = sec.t;
      const ser = JSON.stringify(sec.v);
      if (ser !== snapRef.current[s]) {
        snapRef.current[s] = ser; // 先更新快照，避免之後的 setState 被誤判成使用者編輯
        (patch as Record<string, unknown>)[s] = sec.v;
      }
    }

    for (const s of SET_SECTIONS) {
      const incoming = remote[s] || {};
      stampsRef.current[s] = replace ? { ...incoming } : mergeStamps(incoming, stampsRef.current[s]);
      const next = presentWords(stampsRef.current[s]);
      if (!sameWordSet(next, valuesRef.current[s])) (patch as Record<string, unknown>)[s] = next;
    }

    persist();
    if (Object.keys(patch).length) applyRef.current(patch);
  }, []);

  const runSync = useCallback(async (): Promise<boolean> => {
    const c = codeRef.current;
    if (!c) return false;
    if (busyRef.current) { pendingRef.current = true; return false; }
    busyRef.current = true;
    lastRunRef.current = Date.now();
    setStatus('syncing');
    try {
      const res = await syncNow(c, buildWire());
      applyRemote(res.data, false);
      setLastSyncedAt(Date.now());
      setErrorMsg(null);
      setStatus('ok');
      return true;
    } catch (e) {
      const err = e as SyncError;
      setErrorMsg(err.message);
      setStatus(err.code === 'NETWORK' && !navigator.onLine ? 'offline' : 'error');
      // 同步碼在雲端已不存在（被刪除或過期清除）：停止同步，保留本機資料
      if (err.code === 'NOT_FOUND') unlink();
      return false;
    } finally {
      busyRef.current = false;
      if (pendingRef.current) { pendingRef.current = false; schedule(); }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [applyRemote]);

  const schedule = useCallback(() => {
    if (!codeRef.current) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => { void runSync(); }, DEBOUNCE_MS);
  }, [runSync]);

  /** 偵測本機資料變動 → 記時間戳 → 排程同步 */
  useEffect(() => {
    let dirty = false;
    const now = Date.now();
    for (const s of LWW_SECTIONS) {
      const ser = JSON.stringify(values[s]);
      if (ser !== snapRef.current[s]) {
        snapRef.current[s] = ser;
        timesRef.current[s] = now;
        dirty = true;
      }
    }
    for (const s of SET_SECTIONS) {
      if (diffStamps(values[s], stampsRef.current[s], now)) dirty = true;
    }
    if (dirty) { persist(); schedule(); }
  }, [values, schedule]);

  /** 開啟頁面、回到分頁、重新連上網路時同步 */
  useEffect(() => {
    if (!code) return;
    void runSync();
    const trigger = () => {
      if (document.visibilityState === 'hidden') return;
      if (Date.now() - lastRunRef.current < FOCUS_THROTTLE_MS) return;
      void runSync();
    };
    const onOnline = () => void runSync();
    document.addEventListener('visibilitychange', trigger);
    window.addEventListener('online', onOnline);
    return () => {
      document.removeEventListener('visibilitychange', trigger);
      window.removeEventListener('online', onOnline);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [code, runSync]);

  const saveCode = (c: string | null) => {
    codeRef.current = c;
    setCode(c);
    try {
      if (c) localStorage.setItem(CODE_KEY, c);
      else localStorage.removeItem(CODE_KEY);
    } catch { /* ignore */ }
  };

  /** 以這台裝置目前的資料建立同步碼 */
  const create = async (): Promise<string> => {
    const now = Date.now();
    for (const s of LWW_SECTIONS) timesRef.current[s] = now;
    for (const s of SET_SECTIONS) {
      const st: WordStamps = {};
      for (const w of valuesRef.current[s]) st[w] = now;
      stampsRef.current[s] = st;
    }
    persist();
    const res = await createSync(buildWire());
    saveCode(res.code);
    setStatus('ok');
    setLastSyncedAt(Date.now());
    setErrorMsg(null);
    return res.code;
  };

  /** 輸入既有同步碼：以雲端資料為準覆蓋本機 */
  const join = async (input: string): Promise<void> => {
    const parsed = parseSyncCode(input);
    if (!parsed) throw new SyncError('BAD_CODE', '同步碼格式不正確（應為 16 碼英數字）');
    const res = await syncNow(parsed, {}); // 空資料 = 只讀取
    for (const s of LWW_SECTIONS) timesRef.current[s] = 0;
    applyRemote(res.data, true);
    saveCode(parsed);
    setStatus('ok');
    setLastSyncedAt(Date.now());
    setErrorMsg(null);
  };

  /** 中斷連結：保留本機資料，雲端資料不動 */
  function unlink() {
    if (timerRef.current) clearTimeout(timerRef.current);
    saveCode(null);
    setStatus('off');
    setErrorMsg(null);
    setLastSyncedAt(null);
  }

  /** 刪除雲端資料並中斷連結（本機資料保留） */
  const removeCloud = async (): Promise<void> => {
    const c = codeRef.current;
    if (!c) return;
    await removeSync(c);
    unlink();
  };

  return { configured, code, status, lastSyncedAt, errorMsg, create, join, unlink, removeCloud, syncNow: runSync };
}

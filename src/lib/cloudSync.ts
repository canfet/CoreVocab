/**
 * 雲端同步 API（Google Apps Script）。
 * 以 text/plain 送 POST，避免瀏覽器的 CORS 預檢；Apps Script 不需另外設定。
 */
import type { AudioSettings, DailyStudyProgress } from '../types';
import type { WordStamps } from './syncMerge';

export type ProgressCore = Omit<DailyStudyProgress, 'masteredWords'>;

/** 這台裝置目前的資料 */
export interface SyncPayload {
  saved: string[];
  mastered: string[];
  progress: ProgressCore;
  audio: Pick<AudioSettings, 'lang' | 'rate' | 'autoPlayOnSearch'>;
  lastWord: string;
}

/** 以「最後修改者為準」的區塊（附一個時間戳） */
export type LwwSection = 'progress' | 'audio' | 'lastWord';
/** 以「每個單字各自合併」的集合區塊 */
export type SetSection = 'saved' | 'mastered';
export const LWW_SECTIONS: LwwSection[] = ['progress', 'audio', 'lastWord'];
export const SET_SECTIONS: SetSection[] = ['saved', 'mastered'];

/** 傳輸格式 */
export type Wire = { [K in LwwSection]?: { v: SyncPayload[K]; t: number } } & { [K in SetSection]?: WordStamps };

export class SyncError extends Error {
  code: string;
  constructor(code: string, message: string) {
    super(message);
    this.code = code;
  }
}

declare global {
  interface Window {
    APP_CONFIG?: { API_URL?: string };
  }
}

const TIMEOUT_MS = 30000;
const MAX_RETRY_BUSY = 3;

export function getApiUrl(): string {
  const url = (typeof window !== 'undefined' && window.APP_CONFIG?.API_URL) || '';
  return /^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(url.trim()) ? url.trim() : '';
}

export function isSyncConfigured(): boolean {
  return getApiUrl() !== '';
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function call<T>(action: string, payload: Record<string, unknown>): Promise<T> {
  const url = getApiUrl();
  if (!url) {
    throw new SyncError('NO_CONFIG', '尚未設定同步後端網址（Actions 變數 APPS_SCRIPT_URL）');
  }
  for (let attempt = 0; ; attempt++) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
    let data: { ok: boolean; code?: string; error?: string } & Record<string, unknown>;
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action, ...payload }),
        signal: ctrl.signal,
        redirect: 'follow',
        credentials: 'omit',
      });
      data = await res.json();
    } catch {
      throw new SyncError('NETWORK', navigator.onLine ? '連線逾時或失敗，請稍後再試' : '目前離線，連上網路後會自動同步');
    } finally {
      clearTimeout(timer);
    }
    if (data?.ok) return data as unknown as T;
    // BUSY：後端排隊太久、動作尚未執行，等一下再試
    if (data?.code === 'BUSY' && attempt < MAX_RETRY_BUSY) {
      await sleep(800 * (attempt + 1));
      continue;
    }
    throw new SyncError(data?.code || 'SERVER_ERROR', data?.error || '同步失敗，請稍後再試');
  }
}

/** 建立新的同步碼，並把這台裝置目前的資料當成雲端初始內容 */
export async function createSync(data: Wire): Promise<{ code: string; data: Wire }> {
  return call('create', { data });
}

/** 合併後回傳雲端最新資料；data 留空代表「只讀取」 */
export async function syncNow(code: string, data: Wire): Promise<{ data: Wire }> {
  return call('sync', { code, data });
}

export async function removeSync(code: string): Promise<void> {
  await call('remove', { code });
}

/** 輸入框容錯：轉大寫、去掉空白與分隔符號；格式正確回傳 XXXX-XXXX-XXXX-XXXX，否則回傳 null */
export function parseSyncCode(input: string): string | null {
  const s = input.toUpperCase().replace(/[^A-Z0-9]/g, '');
  if (!/^[A-HJKMNP-Z2-9]{16}$/.test(s)) return null;
  return s.match(/.{4}/g)!.join('-');
}

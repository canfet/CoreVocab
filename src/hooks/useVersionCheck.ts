import { useEffect, useState } from 'react';

const CHECK_INTERVAL_MS = 10 * 60 * 1000;

/**
 * 偵測網站是否已部署新版本：build 時會輸出 version.json，
 * 啟動時、回到分頁時、每 10 分鐘比對一次，不同就回傳 true，由畫面提示使用者重新整理。
 */
export function useVersionCheck(): boolean {
  const [stale, setStale] = useState(false);

  useEffect(() => {
    if (__APP_VERSION__ === 'dev') return;
    let stopped = false;
    let last = 0;

    const check = async () => {
      if (stopped || document.visibilityState === 'hidden') return;
      if (Date.now() - last < 30000) return;
      last = Date.now();
      try {
        const res = await fetch(`${import.meta.env.BASE_URL}version.json?t=${Date.now()}`, { cache: 'no-store' });
        if (!res.ok) return;
        const data = await res.json();
        if (typeof data?.version === 'string' && data.version !== __APP_VERSION__) setStale(true);
      } catch {
        /* 離線或暫時失敗：下次再檢查 */
      }
    };

    void check();
    const timer = setInterval(check, CHECK_INTERVAL_MS);
    document.addEventListener('visibilitychange', check);
    return () => {
      stopped = true;
      clearInterval(timer);
      document.removeEventListener('visibilitychange', check);
    };
  }, []);

  return stale;
}

/**
 * 離線快取（Service Worker）
 *  - /assets/ 下的檔案檔名含雜湊值，內容不會變 → 快取優先。
 *  - 首頁、config.js 等 → 網路優先，離線時才用快取（確保上線時一定拿到最新版）。
 *  - version.json 與跨網域請求（Apps Script 同步）→ 完全不攔截。
 */
const CACHE = 'corevocab-runtime';
const MAX_ENTRIES = 80;

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

async function trim(cache) {
  const keys = await cache.keys();
  for (let i = 0; i < keys.length - MAX_ENTRIES; i++) await cache.delete(keys[i]);
}

// 注意：res 必須是「已經 clone 過的副本」。回應交給頁面後本體就被讀走，之後再 clone 會失敗。
async function put(req, copy) {
  const cache = await caches.open(CACHE);
  await cache.put(req, copy);
  await trim(cache);
}

/** 先同步 clone，再非同步寫入快取；只快取成功的同源回應 */
function remember(e, req, res) {
  if (res && res.ok && res.type === 'basic') e.waitUntil(put(req, res.clone()));
  return res;
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.endsWith('/version.json')) return;

  if (url.pathname.includes('/assets/')) {
    e.respondWith(
      caches.match(req).then(
        (hit) => hit || fetch(req).then((res) => remember(e, req, res))
      )
    );
    return;
  }

  // cache: 'no-cache' = 每次都向伺服器確認有沒有更新（沒變動時只回 304，很快）。
  // 否則 GitHub Pages 的 max-age=600 會讓首頁與 config.js 最多 10 分鐘拿到舊內容。
  e.respondWith(
    fetch(req, { cache: 'no-cache' })
      .then((res) => remember(e, req, res))
      .catch(() => caches.match(req).then((hit) => hit || caches.match(self.registration.scope)))
  );
});

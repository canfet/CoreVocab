import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';

// GitHub Pages 無法設定 HTTP header，改用 <meta> 限制可載入的來源。
// 只在 build 時加入（開發模式的 HMR 需要 inline script / websocket）。
const cspPlugin = (): Plugin => ({
  name: 'inject-csp',
  apply: 'build',
  transformIndexHtml: () => [
    {
      tag: 'meta',
      attrs: {
        'http-equiv': 'Content-Security-Policy',
        content: [
          "default-src 'self'",
          "script-src 'self'",
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data:",
          "font-src 'self' data:",
          // Apps Script 會先回 302 到 script.googleusercontent.com
          "connect-src 'self' https://script.google.com https://script.googleusercontent.com https://api.dictionaryapi.dev",
          // 手機沒有 TTS 語音時的備援：播放 dictionaryapi.dev 的真人發音
          "media-src 'self' https://api.dictionaryapi.dev",
          "object-src 'none'",
          "base-uri 'self'",
          "form-action 'none'",
        ].join('; '),
      },
      injectTo: 'head-prepend',
    },
  ],
});

// 每次建置的版本代碼；前端比對 version.json 就知道網站是否有新版本
const BUILD_ID = Date.now().toString(36);

// config.js 是部署時才產生的，GitHub Pages 會讓瀏覽器快取 10 分鐘。
// 在網址後面加上本次建置的版本代碼，每次部署就一定會抓到新的 config.js。
const configCacheBustPlugin = (): Plugin => ({
  name: 'config-cache-bust',
  apply: 'build',
  transformIndexHtml: (html) => html.replace(/(config\.js)(["'])/, `$1?v=${BUILD_ID}$2`),
});

const versionPlugin = (): Plugin => ({
  name: 'emit-version-json',
  apply: 'build',
  generateBundle() {
    this.emitFile({ type: 'asset', fileName: 'version.json', source: JSON.stringify({ version: BUILD_ID }) });
  },
});

export default defineConfig(({ command }) => ({
  define: { __APP_VERSION__: JSON.stringify(command === 'build' ? BUILD_ID : 'dev') },
  // 相對路徑：不論部署在 https://帳號.github.io/任何專案名/ 或自訂網域，資源都能載入
  base: './',
  plugins: [react(), tailwindcss(), cspPlugin(), versionPlugin(), configCacheBustPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Large static Chinese-language dictionaries rarely change together with app
          // code - splitting them out keeps the app-code chunk cacheable independently.
          'vocab-data': [
            './src/data/presetWords.ts',
            './src/data/rulesData.ts',
            './src/data/curriculum.ts',
          ],
        },
      },
    },
  },
}));

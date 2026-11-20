// 部署時把 Actions 變數 APPS_SCRIPT_URL 寫進 <dir>/config.js（預設 dist）。
// 用法：APPS_SCRIPT_URL=https://script.google.com/macros/s/xxx/exec bun scripts/write-config.mjs [dir]
//
// ‧ 變數未設定或空白：config.js 的 API_URL 留空，網站會停用雲端同步（仍可正常使用）。
// ‧ 變數有設定但格式不對：直接讓部署失敗，避免上線後才發現同步壞掉。
import fs from 'node:fs';
import path from 'node:path';

const url = (process.env.APPS_SCRIPT_URL || '').trim();
const dir = process.argv[2] || 'dist';

if (url && !/^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(url)) {
  console.error('APPS_SCRIPT_URL 格式不正確。應為 https://script.google.com/macros/s/<部署ID>/exec');
  process.exit(1);
}

const out = `/* 由 scripts/write-config.mjs 在部署時產生，請勿手動修改 */
window.APP_CONFIG = { API_URL: ${JSON.stringify(url)} };
`;
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, 'config.js'), out);
console.log(url ? `已寫入 ${dir}/config.js（雲端同步：啟用）` : `已寫入 ${dir}/config.js（雲端同步：未設定，停用）`);

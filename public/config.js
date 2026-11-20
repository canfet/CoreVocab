/**
 * 前端設定檔（開發用預設值）
 *
 * 正式部署時，這個檔案會在 GitHub Actions 由 scripts/write-config.mjs 依
 * Repository variable「APPS_SCRIPT_URL」重新產生並覆蓋，所以不需要在這裡填網址、
 * 也請不要把網址 commit 進來。
 *
 * 本機開發想測試雲端同步時，可暫時填入你的網址（…/exec），但請不要 commit。
 */
window.APP_CONFIG = {
  API_URL: ''
};

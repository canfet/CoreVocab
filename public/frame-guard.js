/**
 * 防點擊劫持（clickjacking）：GitHub Pages 無法設定 X-Frame-Options，
 * 所以由頁面自己檢查。被嵌進別人的 iframe 時保持隱藏並跳出框架。
 * index.html 一開始先把頁面藏起來，確認沒被嵌入才顯示。
 */
(function () {
  var style = document.getElementById('frame-guard-style');
  if (window.top === window.self) {
    if (style) style.parentNode.removeChild(style);
    return;
  }
  try { window.top.location = window.self.location; } catch (e) { /* 跨網域被擋就維持隱藏 */ }
})();

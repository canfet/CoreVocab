# 核心詞彙學習 (CoreVocab)

英文單字的構詞拆解（前綴／字根／字尾）、音變規則與字根家族學習工具。
純前端（React + Vite），部署在 **GitHub Pages**；跨裝置同步使用 **Google Apps Script + Google 試算表**，使用者**不需登入**。

## 架構

```
手機／電腦瀏覽器 ──(靜態網頁)──> GitHub Pages
        │
        └──(背景 fetch，選用)──> Apps Script ──> Google 試算表「Sync」
```

- 所有單字資料都在前端，不呼叫任何 AI 服務、不需要任何金鑰。
- 收藏單字、學習進度、發音設定、最後查詢單字先存在 `localStorage`；有設定後端時，可用「同步碼」在不同裝置同步。
- 沒設定後端也能完整使用，只是資料只存在這台裝置。

## 本機開發

```bash
bun install
bun run dev      # http://localhost:5173
bun run lint     # 型別檢查
bun test         # 後端（Code.gs）與合併規則測試
bun run build    # 輸出到 dist/
```

## 部署到 GitHub Pages

1. 推到 GitHub，**Settings → Pages → Source** 選 **GitHub Actions**。
2. 推送到 `main` 時，[.github/workflows/deploy.yml](.github/workflows/deploy.yml) 會先型別檢查、跑測試、再建置、再部署。
3. 部署後網站可離線開啟（Service Worker 快取）；之後再部署新版本時，已開啟的頁面會提示「網站有新版本」。

## 啟用雲端同步（選用）

1. 建立一份新的 Google 試算表（用**個人 Gmail**最保險）。
2. 擴充功能 → Apps Script，把 [apps-script/Code.gs](apps-script/Code.gs) 貼進去；
   專案設定勾選「顯示 appsscript.json」，貼上 [apps-script/appsscript.json](apps-script/appsscript.json)。
3. 執行一次 `setup` 函式並授權（會建立 `Sync` 工作表、隨機 salt，並安裝每日清理）。
   清理會刪除 180 天沒連線、或建立後 30 天內只用過一次的資料，避免被垃圾資料塞滿。
4. 部署 → 新增部署作業 → 類型選「網頁應用程式」：**執行身分：我**、**存取：所有人**。
5. 複製產生的網址（`…/exec`），到 GitHub repo 的 **Settings → Secrets and variables → Actions → Variables**，
   新增一個 **Repository variable**：名稱 `APPS_SCRIPT_URL`，值為剛複製的網址。
   （是 Variables 分頁，不是 Secrets；網址本身不是機密，部署後任何人都看得到。）
6. 到 Actions 重新執行部署（或推一個 commit）。部署時 [scripts/write-config.mjs](scripts/write-config.mjs) 會把網址寫進網站的 `config.js`；
   變數沒設定就停用同步，格式不對則部署會直接失敗並說明原因。
7. 修改 Code.gs 後，要「部署 → 管理部署作業 → 編輯 → 新版本」才會生效。

### 使用方式

- 網頁上方「同步」→「建立同步碼」，會以這台裝置目前的資料建立雲端資料，並得到一組 16 碼同步碼。
- 另一台裝置按「同步」→ 輸入同步碼 → 連結（這台裝置的資料會被雲端取代）。
- 之後兩邊的變動會自動合併：
  - **收藏單字、已精熟單字**：每個單字各自記「加入／移除」時間，兩台裝置離線時各自增減，合併後兩邊的修改**都保留**。
  - **學習進度（等級、目標、今日進度、連續天數）、發音設定、最後查詢單字**：整塊以最後修改的裝置為準。
- 離線時照常使用，連上網路後自動補同步。

## 安全設計

| 項目 | 做法 |
|---|---|
| 身分 | 16 碼隨機同步碼（約 79 bits），等同密碼；不登入、不收集個資 |
| 儲存 | 試算表只存同步碼的 SHA-256 雜湊（含隨機 salt），試算表外流也無法反推同步碼 |
| 輸入驗證 | 後端重新驗證所有欄位：單字只收 `[a-z-]`、設定值限縮範圍、大小上限；前端傳什麼都不會原樣寫入 |
| 限流 | 建立同步碼每小時、猜錯同步碼每 10 分鐘都有全域上限；寫入以 LockService 序列化 |
| 公開 repo | 程式碼公開沒關係：repo 裡沒有任何密鑰；Apps Script 網址不是機密，但**同步碼不可公開** |
| 前端 | build 時加入 CSP（只允許自己的腳本，連線只允許 `script.google.com`）；React 預設轉義輸出 |
| 刪除 | 使用者可在「同步」視窗刪除自己的雲端資料；過期資料每日自動清除 |
| 防嵌入 | 頁面被放進別人的 iframe 時保持隱藏並跳出（Pages 無法設 X-Frame-Options） |
| 供應鏈 | Actions 釘到 commit SHA、安裝用 `--frozen-lockfile`、Dependabot 每週更新 |

隱私：同步的資料存放在管理者的 Google 試算表，管理者技術上可看到收藏與進度（看不到同步碼）。同步視窗內已有說明。

限制：同步碼外洩者可讀寫該份資料（內容只有收藏與學習進度）。拿不到同步碼就無法存取任何人的資料。

## 檔案結構

```
├── src/                     前端
│   ├── lib/cloudSync.ts     呼叫 Apps Script 的 API
│   ├── lib/syncMerge.ts     單字集合的合併規則
│   ├── components/ErrorBoundary.tsx 出錯時顯示說明而非白屏
│   ├── hooks/useCloudSync.ts 同步邏輯（變動偵測、合併、離線補送）
│   └── components/SyncModal.tsx 同步視窗
├── public/config.js         開發用預設值（正式網址由 Actions 變數注入）
├── scripts/write-config.mjs 部署時寫入 config.js
├── public/sw.js             離線快取
├── tests/                   後端與合併規則測試（bun test）
├── apps-script/Code.gs      ★ 貼到試算表的 Apps Script
└── .github/workflows/       GitHub Pages 部署
```

## GitHub 帳號與儲存庫建議設定（需手動）

- 帳號開啟 2FA。
- Settings → Branches：對 `main` 設分支保護（要求 PR 或至少禁止 force push）。
- Settings → Actions → General：Workflow permissions 設為 Read；部署工作所需權限已在 workflow 內個別宣告。
- 試算表**不要分享給別人**，只有你自己可編輯。

import React, { useState } from 'react';
import { X, Cloud, Copy, Check, Eye, EyeOff, RefreshCw, Link2, Unlink, Trash2, AlertCircle } from 'lucide-react';
import type { SyncStatus } from '../hooks/useCloudSync';

interface SyncModalProps {
  isOpen: boolean;
  onClose: () => void;
  configured: boolean;
  code: string | null;
  status: SyncStatus;
  lastSyncedAt: number | null;
  errorMsg: string | null;
  onCreate: () => Promise<string>;
  onJoin: (code: string) => Promise<void>;
  onSyncNow: () => Promise<boolean>;
  onUnlink: () => void;
  onRemoveCloud: () => Promise<void>;
}

const STATUS_TEXT: Record<SyncStatus, string> = {
  off: '尚未啟用',
  idle: '等待同步',
  syncing: '同步中…',
  ok: '已同步',
  offline: '離線中（連上網路後自動同步）',
  error: '同步失敗',
};

export const SyncModal: React.FC<SyncModalProps> = ({
  isOpen, onClose, configured, code, status, lastSyncedAt, errorMsg,
  onCreate, onJoin, onSyncNow, onUnlink, onRemoveCloud,
}) => {
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [localErr, setLocalErr] = useState<string | null>(null);
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [confirmJoin, setConfirmJoin] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  if (!isOpen) return null;

  const run = async (fn: () => Promise<unknown>) => {
    setBusy(true);
    setLocalErr(null);
    try {
      await fn();
    } catch (e) {
      setLocalErr(e instanceof Error ? e.message : '發生未知錯誤');
    } finally {
      setBusy(false);
    }
  };

  const handleCreate = () => run(async () => { await onCreate(); setShowCode(true); });
  const handleJoin = () => run(async () => {
    await onJoin(input);
    setInput('');
    setConfirmJoin(false);
  });
  const handleDelete = () => run(async () => { await onRemoveCloud(); setConfirmDelete(false); });

  const handleCopy = async () => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setShowCode(true); // 無法複製時，至少讓使用者看得到、可手動選取
    }
  };

  const shownError = localErr || (status === 'error' ? errorMsg : null);
  const btn = 'inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold rounded border-2 border-slate-900 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white border-2 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] rounded-xl w-full max-w-md overflow-hidden flex flex-col my-auto animate-in fade-in zoom-in-95">
        <div className="px-5 py-4 bg-slate-900 text-white flex items-center justify-between border-b-2 border-slate-900">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-yellow-400 text-slate-900 rounded font-black">
              <Cloud className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold font-serif">雲端同步</h3>
              <p className="text-xs text-slate-400 font-mono">Sync across devices · 免登入</p>
            </div>
          </div>
          <button onClick={onClose} aria-label="關閉" className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-4 text-slate-800 text-sm">
          {!configured ? (
            <div className="p-3 rounded border-2 border-amber-500 bg-amber-50 text-amber-900 text-xs leading-relaxed">
              這個網站還沒有設定同步後端，目前資料只會存在這台裝置。管理者請參考 README，在 GitHub 的 Actions Variables 設定 <code className="font-mono">APPS_SCRIPT_URL</code> 後重新部署。
            </div>
          ) : !code ? (
            <>
              <p className="text-xs text-slate-600 leading-relaxed">
                收藏單字、學習進度、發音設定可以同步到不同裝置。<b>不需要登入</b>，用一組同步碼連結即可。
              </p>

              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-700">第一次使用：建立同步碼</p>
                <button onClick={handleCreate} disabled={busy} className={`${btn} w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900`}>
                  <Cloud className="w-3.5 h-3.5" /> {busy ? '建立中…' : '用這台裝置的資料建立'}
                </button>
              </div>

              <div className="border-t border-slate-200 pt-4 space-y-2">
                <p className="text-xs font-bold text-slate-700">已有同步碼：連結這台裝置</p>
                <input
                  value={input}
                  onChange={(e) => { setInput(e.target.value); setConfirmJoin(false); }}
                  placeholder="XXXX-XXXX-XXXX-XXXX"
                  autoComplete="off" autoCapitalize="characters" spellCheck={false} maxLength={24}
                  className="w-full px-3 py-2 font-mono text-sm tracking-wider border-2 border-slate-300 rounded focus:border-slate-900 outline-none"
                />
                {confirmJoin ? (
                  <div className="p-3 rounded border-2 border-rose-500 bg-rose-50 text-xs text-rose-900 space-y-2">
                    <p>連結後，這台裝置的收藏與進度會<b>被雲端資料取代</b>。確定嗎？</p>
                    <div className="flex gap-2">
                      <button onClick={handleJoin} disabled={busy} className={`${btn} bg-rose-600 text-white`}>{busy ? '連結中…' : '確定取代'}</button>
                      <button onClick={() => setConfirmJoin(false)} disabled={busy} className={`${btn} bg-white`}>取消</button>
                    </div>
                  </div>
                ) : (
                  <button onClick={() => setConfirmJoin(true)} disabled={busy || input.trim().length < 16} className={`${btn} w-full bg-white hover:bg-slate-100`}>
                    <Link2 className="w-3.5 h-3.5" /> 連結
                  </button>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-700">狀態</span>
                <span className={status === 'error' ? 'text-rose-600 font-bold' : status === 'ok' ? 'text-emerald-600 font-bold' : 'text-slate-600'}>
                  {STATUS_TEXT[status]}
                  {lastSyncedAt && status === 'ok' ? `・${new Date(lastSyncedAt).toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' })}` : ''}
                </span>
              </div>

              <div className="space-y-1.5">
                <p className="text-xs font-bold text-slate-700">你的同步碼（請當成密碼保管）</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 px-3 py-2 font-mono text-sm tracking-wider bg-slate-100 border-2 border-slate-300 rounded select-all break-all">
                    {showCode ? code : code.replace(/[A-Z0-9]/g, '•')}
                  </div>
                  <button onClick={() => setShowCode((v) => !v)} aria-label={showCode ? '隱藏同步碼' : '顯示同步碼'} className={`${btn} px-2 bg-white hover:bg-slate-100`}>
                    {showCode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                  <button onClick={handleCopy} aria-label="複製同步碼" className={`${btn} px-2 bg-white hover:bg-slate-100`}>
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  在另一台裝置按「輸入同步碼」即可接續。拿到同步碼的人就能讀寫你的資料，請勿公開分享；遺失同步碼無法找回。
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <button onClick={() => run(async () => { await onSyncNow(); })} disabled={busy || status === 'syncing'} className={`${btn} bg-yellow-400 hover:bg-yellow-500 text-slate-900`}>
                  <RefreshCw className={`w-3.5 h-3.5 ${status === 'syncing' ? 'animate-spin' : ''}`} /> 立即同步
                </button>
                <button onClick={onUnlink} disabled={busy} className={`${btn} bg-white hover:bg-slate-100`}>
                  <Unlink className="w-3.5 h-3.5" /> 中斷連結
                </button>
              </div>

              <div className="border-t border-slate-200 pt-3">
                {confirmDelete ? (
                  <div className="p-3 rounded border-2 border-rose-500 bg-rose-50 text-xs text-rose-900 space-y-2">
                    <p>會永久刪除雲端上的資料，其他裝置也無法再同步（本機資料保留）。確定嗎？</p>
                    <div className="flex gap-2">
                      <button onClick={handleDelete} disabled={busy} className={`${btn} bg-rose-600 text-white`}>{busy ? '刪除中…' : '確定刪除'}</button>
                      <button onClick={() => setConfirmDelete(false)} disabled={busy} className={`${btn} bg-white`}>取消</button>
                    </div>
                  </div>
                ) : (
                  <button onClick={() => setConfirmDelete(true)} className="inline-flex items-center gap-1 text-[11px] text-rose-600 hover:underline cursor-pointer">
                    <Trash2 className="w-3 h-3" /> 刪除雲端資料
                  </button>
                )}
              </div>
            </>
          )}

          {configured && (
            <p className="text-[11px] text-slate-500 leading-relaxed border-t border-slate-200 pt-3">
              隱私說明：同步的資料（收藏單字、學習進度、發音設定）會存放在網站管理者的 Google 試算表，
              管理者技術上可以看到這些內容，但看不到你的同步碼（只存雜湊）。不會收集姓名、信箱或任何個人資料。
            </p>
          )}

          {shownError && (
            <div role="alert" className="p-2.5 rounded border-2 border-rose-600 bg-rose-50 text-rose-900 text-xs flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span>{shownError}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

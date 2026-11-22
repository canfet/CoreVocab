import React, { useEffect, useState } from 'react';
import { Download, Share, X } from 'lucide-react';
import { isInAppBrowser } from '../utils/speech';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const DISMISS_KEY = 'corevocab-install-dismissed';

const isStandalone = () =>
  window.matchMedia?.('(display-mode: standalone)').matches ||
  (navigator as unknown as { standalone?: boolean }).standalone === true;

const isIOSDevice = () =>
  /iPad|iPhone|iPod/i.test(navigator.userAgent) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

/** 提示「加到手機主畫面」：Android / 桌面 Chrome 直接安裝，iOS 顯示操作步驟 */
export const InstallPrompt: React.FC = () => {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [showIOSHelp, setShowIOSHelp] = useState(false);
  const [visible, setVisible] = useState(false);
  const ios = typeof navigator !== 'undefined' && isIOSDevice();

  useEffect(() => {
    if (isStandalone()) return;
    try {
      if (localStorage.getItem(DISMISS_KEY)) return;
    } catch {
      // 無痕模式等無法存取 localStorage：照常顯示
    }

    const onPrompt = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
      setVisible(true);
    };
    const onInstalled = () => setVisible(false);

    window.addEventListener('beforeinstallprompt', onPrompt);
    window.addEventListener('appinstalled', onInstalled);

    // iOS 沒有 beforeinstallprompt，只能教使用者從分享選單加入
    if (isIOSDevice()) setVisible(true);

    return () => {
      window.removeEventListener('beforeinstallprompt', onPrompt);
      window.removeEventListener('appinstalled', onInstalled);
    };
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(DISMISS_KEY, '1');
    } catch {
      // ignore
    }
  };

  const install = async () => {
    if (!deferred) return;
    await deferred.prompt();
    await deferred.userChoice.catch(() => undefined);
    setDeferred(null);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed top-3 inset-x-3 z-40 flex justify-center pointer-events-none">
      <div className="pointer-events-auto w-full max-w-md bg-slate-900 text-white border-2 border-yellow-400 rounded-xl shadow-lg p-3 text-xs">
        <div className="flex items-start gap-3">
          <div className="p-1.5 bg-yellow-400 text-slate-900 rounded shrink-0">
            <Download className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-bold text-sm">加到手機主畫面</div>
            <div className="text-slate-300 mt-0.5 leading-relaxed">
              像 App 一樣一鍵開啟，不用每次都打開瀏覽器。
            </div>

            {ios || !deferred ? (
              isInAppBrowser() ? (
                <div className="mt-2 text-yellow-300 leading-relaxed">
                  請先用右上角選單「以瀏覽器開啟」（Safari / Chrome），再加入主畫面。
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowIOSHelp((v) => !v)}
                  className="mt-2 px-3 py-1.5 bg-yellow-400 text-slate-900 font-bold rounded-lg cursor-pointer"
                >
                  {showIOSHelp ? '收起步驟' : '查看加入步驟'}
                </button>
              )
            ) : (
              <button
                type="button"
                onClick={install}
                className="mt-2 px-3 py-1.5 bg-yellow-400 text-slate-900 font-bold rounded-lg cursor-pointer"
              >
                立即安裝
              </button>
            )}

            {showIOSHelp && (
              <ol className="mt-2 space-y-1 text-slate-200 list-decimal pl-4 leading-relaxed">
                <li>
                  點瀏覽器下方（或右上角）的 <Share className="inline w-3.5 h-3.5 -mt-0.5" /> 分享按鈕
                </li>
                <li>往下滑，選「加入主畫面」</li>
                <li>按右上角「新增」，桌面就會出現 CoreVocab 圖示</li>
              </ol>
            )}
          </div>
          <button
            type="button"
            onClick={dismiss}
            aria-label="不再提示"
            className="p-1 text-slate-400 hover:text-white cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

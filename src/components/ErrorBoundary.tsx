import React from 'react';

interface State {
  error: Error | null;
}

/** 任何元件出錯時顯示說明與重新整理按鈕，而不是整頁白屏。學習資料存在 localStorage，不會因此遺失。 */
export class ErrorBoundary extends React.Component<{ children: React.ReactNode }, State> {
  // 專案未安裝 @types/react，這裡手動宣告 props 型別
  declare readonly props: { children: React.ReactNode };
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('App crashed:', error, info.componentStack);
  }

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div role="alert" className="min-h-screen bg-[#F1F5F9] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white border-2 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] rounded-xl p-6 space-y-3 text-slate-800">
          <h1 className="text-lg font-bold font-serif">哎呀，畫面出了點問題</h1>
          <p className="text-sm leading-relaxed">
            請重新整理頁面再試一次。你的收藏與學習進度都存在這台裝置上，不會因此消失。
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 text-sm font-bold bg-yellow-400 hover:bg-yellow-500 border-2 border-slate-900 rounded cursor-pointer"
            >
              重新整理
            </button>
          </div>
          <details className="text-xs text-slate-500">
            <summary className="cursor-pointer">技術細節</summary>
            <pre className="mt-2 whitespace-pre-wrap break-words">{this.state.error.message}</pre>
          </details>
        </div>
      </div>
    );
  }
}

import React, { useState } from 'react';
import { X, Bookmark, Trash2, ArrowRight, Search } from 'lucide-react';
import { WordAnalysis } from '../types';
import { capitalizeWord } from '../utils/format';

interface SavedWordsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedWords: WordAnalysis[];
  onSelectWord: (word: string) => void;
  onRemoveWord: (word: string) => void;
  onClearAll: () => void;
}

export const SavedWordsDrawer: React.FC<SavedWordsDrawerProps> = ({
  isOpen,
  onClose,
  savedWords = [],
  onSelectWord,
  onRemoveWord,
  onClearAll
}) => {
  const [search, setSearch] = useState('');
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  if (!isOpen) return null;

  const wordList = Array.isArray(savedWords) ? savedWords : [];

  const filtered = wordList.filter(
    (w) =>
      w.word?.toLowerCase().includes(search.toLowerCase()) ||
      w.chineseMeaning?.toLowerCase().includes(search.toLowerCase())
  );

  const handleConfirmClear = () => {
    onClearAll();
    setShowClearConfirm(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xs flex justify-end">
      <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col border-l border-slate-200">
        {/* Header */}
        <div className="px-5 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-violet-400" />
            <div>
              <h3 className="text-base font-bold font-serif">我的詞源筆記本</h3>
              <p className="text-xs text-slate-400">
                已收藏 {wordList.length} 個形態解構單詞
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Actions bar */}
        <div className="p-3 bg-slate-50 border-b border-slate-200 flex flex-col gap-2.5">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="搜尋收藏單詞或釋義..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between gap-1.5 pt-0.5">
            <span className="text-[11px] text-slate-500 font-mono">
              顯示 {filtered.length} / {wordList.length} 詞
            </span>

            {wordList.length > 0 && !showClearConfirm && (
              <button
                id="btn-clear-notebook"
                onClick={() => setShowClearConfirm(true)}
                className="text-xs text-rose-600 hover:text-rose-700 font-semibold flex items-center gap-1 px-2 py-1 rounded hover:bg-rose-50 transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                清空筆記本
              </button>
            )}
          </div>

          {/* Inline Clear Confirmation Alert */}
          {showClearConfirm && (
            <div className="mt-1 p-2.5 bg-rose-50 border border-rose-200 rounded-lg flex items-center justify-between gap-2 text-xs">
              <span className="text-rose-800 font-medium">
                確定清空全部 {wordList.length} 個單詞？
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  id="btn-confirm-clear-all"
                  onClick={handleConfirmClear}
                  className="px-2.5 py-1 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded text-[11px] transition-colors"
                >
                  確認清空
                </button>
                <button
                  id="btn-cancel-clear-all"
                  onClick={() => setShowClearConfirm(false)}
                  className="px-2.5 py-1 bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium rounded text-[11px] transition-colors"
                >
                  取消
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Word List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-slate-400 space-y-2">
              <Bookmark className="w-10 h-10 mx-auto text-slate-300 stroke-1" />
              <p className="text-xs">尚無收藏的單詞，點擊「收藏單詞」即可加入筆記本</p>
            </div>
          ) : (
            filtered.map((w) => (
              <div
                key={w.word}
                className="group p-3.5 rounded-xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-xs transition-all flex items-start justify-between gap-3"
              >
                <div
                  className="flex-1 cursor-pointer"
                  onClick={() => {
                    onSelectWord(w.word);
                    onClose();
                  }}
                >
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold font-serif text-base text-slate-900 group-hover:text-indigo-600">
                      {capitalizeWord(w.word)}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {w.ipa}
                    </span>
                  </div>
                  <div className="text-xs text-slate-600 mt-1 line-clamp-1">
                    {w.chineseMeaning}
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {(w.morphemes || []).map((m, mIdx) => (
                      <span
                        key={mIdx}
                        className="text-[10px] font-mono bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded"
                      >
                        {m.morpheme}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-1 self-center">
                  <button
                    onClick={() => {
                      onSelectWord(w.word);
                      onClose();
                    }}
                    className="p-1.5 text-indigo-600 hover:bg-indigo-50 rounded-lg"
                    title="載入解析"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onRemoveWord(w.word)}
                    className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg"
                    title="從生詞本移除"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

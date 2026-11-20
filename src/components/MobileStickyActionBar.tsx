import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Volume2,
  Bookmark,
  BookmarkCheck,
  CheckCircle2,
  Circle,
  Settings2
} from 'lucide-react';
import { WordAnalysis, AudioSettings } from '../types';
import { capitalizeWord } from '../utils/format';
import { speakWord } from '../utils/speech';

interface MobileStickyActionBarProps {
  analysis: WordAnalysis;
  isSaved: boolean;
  isMastered: boolean;
  onToggleSave: () => void;
  onToggleMastered: () => void;
  onNextWord?: () => void;
  onPrevWord?: () => void;
  audioSettings?: AudioSettings;
  wordIndexInfo?: { current: number; total: number };
  onOpenAudioSettings?: () => void;
}

export const MobileStickyActionBar: React.FC<MobileStickyActionBarProps> = ({
  analysis,
  isSaved,
  isMastered,
  onToggleSave,
  onToggleMastered,
  onNextWord,
  onPrevWord,
  audioSettings = { lang: 'en-US', rate: 0.85 },
  wordIndexInfo,
  onOpenAudioSettings
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handlePronounce = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!analysis?.word) return;
    setIsPlayingAudio(true);
    speakWord(
      analysis.word,
      {
        lang: audioSettings.lang || 'en-US',
        rate: audioSettings.rate || 0.85
      },
      {
        onStart: () => setIsPlayingAudio(true),
        onEnd: () => setIsPlayingAudio(false),
        onError: () => setIsPlayingAudio(false)
      }
    );
  };

  return (
    <div
      id="mobile-sticky-action-bar"
      className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-white/95 backdrop-blur-md border-t-2 border-slate-900 shadow-[0_-4px_16px_rgba(0,0,0,0.12)] px-2.5 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] flex items-center justify-between gap-1.5 transition-transform duration-200"
    >
      {/* 1. Prev Word Button */}
      <button
        id="mobile-sticky-prev-btn"
        type="button"
        onClick={onPrevWord}
        disabled={!onPrevWord}
        className={`px-2 py-1.5 rounded-md border border-slate-300 font-bold text-xs flex items-center justify-center gap-0.5 transition-colors shrink-0 ${
          onPrevWord
            ? 'bg-slate-100 active:bg-slate-200 text-slate-800 cursor-pointer'
            : 'bg-slate-50 text-slate-300 cursor-not-allowed border-slate-200'
        }`}
        title="上一詞"
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="text-[11px] hidden xs:inline">上一詞</span>
      </button>

      {/* 2. Core Interactive Center: Pronounce + Target Word + Mastery/Save */}
      <div className="flex-1 min-w-0 flex items-center justify-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md border border-slate-200">
        {/* Audio Pronounce Button */}
        <button
          id="mobile-sticky-pronounce-btn"
          type="button"
          onClick={handlePronounce}
          className={`p-1.5 rounded-full border transition-all cursor-pointer shrink-0 ${
            isPlayingAudio
              ? 'bg-indigo-600 border-indigo-700 text-white animate-pulse'
              : 'bg-white border-slate-300 text-indigo-700 active:bg-indigo-50 shadow-2xs'
          }`}
          title="朗讀發音"
        >
          <Volume2 className="w-3.5 h-3.5" />
        </button>

        {onOpenAudioSettings && (
          <button
            id="mobile-sticky-audio-settings-btn"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenAudioSettings();
            }}
            className="p-1.5 rounded-full border border-slate-300 bg-white text-slate-500 active:bg-slate-100 transition-colors cursor-pointer shrink-0"
            title="發音與語速設定"
          >
            <Settings2 className="w-3.5 h-3.5" />
          </button>
        )}

        {/* Word Info with Index */}
        <div className="min-w-0 flex-1 text-center truncate">
          <div className="font-mono font-black text-xs text-slate-900 truncate leading-tight">
            {analysis?.word ? capitalizeWord(analysis.word) : ''}
          </div>
          {wordIndexInfo && (
            <div className="text-[9px] font-mono font-bold text-slate-500 leading-none">
              {wordIndexInfo.current} / {wordIndexInfo.total}
            </div>
          )}
        </div>

        {/* Action: Mastery Toggle */}
        <button
          id="mobile-sticky-mastery-btn"
          type="button"
          onClick={onToggleMastered}
          className={`px-1.5 py-1 rounded text-[10px] font-bold flex items-center gap-0.5 transition-colors cursor-pointer shrink-0 border ${
            isMastered
              ? 'bg-emerald-100 border-emerald-300 text-emerald-800'
              : 'bg-white border-slate-300 text-slate-600 active:bg-slate-100'
          }`}
          title={isMastered ? '已掌握（點擊取消）' : '標記為已掌握'}
        >
          {isMastered ? (
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
          ) : (
            <Circle className="w-3 h-3 text-slate-400" />
          )}
          <span className="hidden xs:inline">{isMastered ? '已掌握' : '未掌握'}</span>
        </button>

        {/* Action: Bookmark Save Toggle */}
        <button
          id="mobile-sticky-save-btn"
          type="button"
          onClick={onToggleSave}
          className={`p-1 rounded transition-colors cursor-pointer shrink-0 ${
            isSaved ? 'text-amber-600' : 'text-slate-400 active:text-slate-600'
          }`}
          title={isSaved ? '已加入筆記收藏' : '加入筆記收藏'}
        >
          {isSaved ? (
            <BookmarkCheck className="w-4 h-4 fill-amber-400 text-amber-600" />
          ) : (
            <Bookmark className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* 3. Next Word Button */}
      <button
        id="mobile-sticky-next-btn"
        type="button"
        onClick={onNextWord}
        disabled={!onNextWord}
        className={`px-2.5 py-1.5 rounded-md font-bold text-xs flex items-center justify-center gap-0.5 transition-colors shrink-0 shadow-2xs ${
          onNextWord
            ? 'bg-indigo-600 active:bg-indigo-700 text-white cursor-pointer'
            : 'bg-slate-200 text-slate-400 cursor-not-allowed'
        }`}
        title="下一詞"
      >
        <span className="text-[11px] hidden xs:inline">下一詞</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

import React, { useState } from 'react';
import { Volume2, ChevronLeft, ChevronRight, Layers, Settings2 } from 'lucide-react';
import { WordAnalysis, AudioSettings } from '../types';
import { capitalizeWord } from '../utils/format';
import { speakWord } from '../utils/speech';

interface HeaderCardProps {
  analysis: WordAnalysis;
  isSaved?: boolean;
  onToggleSave?: () => void;
  audioSettings?: AudioSettings;
  onNextWord?: () => void;
  onPrevWord?: () => void;
  wordIndexInfo?: { current: number; total: number };
  onOpenAudioSettings?: () => void;
}

export const HeaderCard: React.FC<HeaderCardProps> = ({
  analysis,
  audioSettings = { lang: 'en-US', rate: 0.85 },
  onNextWord,
  onPrevWord,
  wordIndexInfo,
  onOpenAudioSettings
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const isAssembled = analysis.isAssembled || analysis.source === 'assembled' || analysis.source === 'heuristic';

  const handlePlayAudio = () => {
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
    <header className="bg-white border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] sm:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] p-3.5 sm:p-5 rounded-lg w-full flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-3.5 sm:gap-4">
      {/* Target Word, IPA & POS Meaning */}
      <div className="space-y-2 min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 font-mono">
            {capitalizeWord(analysis.word)}
          </span>
          <span className="text-slate-500 font-mono text-sm sm:text-lg font-medium">
            {analysis.ipa.startsWith('/') ? analysis.ipa : `/${analysis.ipa}/`}
          </span>

          <button
            id="audio-pronounce-btn"
            onClick={handlePlayAudio}
            className={`px-2.5 py-1 rounded border border-slate-300 hover:border-slate-900 transition-colors cursor-pointer flex items-center gap-1 text-xs font-bold ${
              isPlayingAudio ? 'bg-indigo-600 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
            title={`朗讀發音 (${audioSettings.lang === 'en-GB' ? '英音' : '美音'})`}
          >
            <Volume2 className={`w-3.5 h-3.5 ${isPlayingAudio ? 'animate-pulse' : ''}`} />
            <span className="text-[10px] font-mono">{audioSettings.lang === 'en-GB' ? 'UK' : 'US'}</span>
          </button>

          {onOpenAudioSettings && (
            <button
              id="audio-settings-btn"
              onClick={onOpenAudioSettings}
              className="p-1.5 rounded border border-slate-300 hover:border-slate-900 bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
              title="語音發音與朗讀速度設定"
            >
              <Settings2 className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Prompt indicating word is assembled from root dictionary or un-affixed simplex */}
          {analysis.isNotFound ? (
            <span
              id="badge-not-found-analysis"
              className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-slate-100 text-slate-700 border border-slate-300 rounded-full text-xs font-bold shadow-2xs animate-fade-in"
              title="本單字為單純詞或未包含古典拉丁/希臘前後綴"
            >
              <span>🔍 查無古典詞素 (單純詞)</span>
            </span>
          ) : isAssembled ? (
            <span
              id="badge-assembled-analysis"
              className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-amber-50 text-amber-900 border border-amber-300 rounded-full text-xs font-bold shadow-2xs animate-fade-in"
              title="此單字非預設詞庫，由字根字典庫模糊比對與形態演算法自動拼裝推導"
            >
              <Layers className="w-3.5 h-3.5 text-amber-700 shrink-0" />
              <span>該字為自動拼裝分析</span>
            </span>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-2 items-center text-xs sm:text-sm">
          <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 text-xs font-bold rounded uppercase tracking-wide">
            {analysis.partOfSpeech}
          </span>
          <span className="text-slate-700 font-medium">
            {analysis.chineseMeaning}
          </span>
        </div>
      </div>

      {/* Action Controls & Navigation (Fills full width without overflow-x drag) */}
      <div className="flex flex-col sm:flex-row lg:flex-row items-stretch sm:items-center gap-2 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-200 w-full lg:w-auto">
        {/* Prev / Next Word Quick Navigation Controls */}
        {(onPrevWord || onNextWord) && (
          <div className="flex items-center justify-between sm:justify-center gap-1 bg-slate-100 p-1 rounded-md border border-slate-300 w-full sm:w-auto">
            {onPrevWord && (
              <button
                id="header-prev-word-btn"
                onClick={onPrevWord}
                className="flex-1 sm:flex-initial px-2.5 py-1 bg-white hover:bg-slate-200 border border-slate-300 text-slate-800 text-xs font-bold rounded flex items-center justify-center gap-0.5 transition-colors cursor-pointer"
                title="切換至上一個詞"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>上一詞</span>
              </button>
            )}

            {wordIndexInfo && (
              <span className="px-2 text-xs font-mono font-bold text-slate-700 text-center whitespace-nowrap">
                {wordIndexInfo.current} / {wordIndexInfo.total}
              </span>
            )}

            {onNextWord && (
              <button
                id="header-next-word-btn"
                onClick={onNextWord}
                className="flex-1 sm:flex-initial px-2.5 py-1 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded flex items-center justify-center gap-0.5 transition-colors cursor-pointer shadow-2xs"
                title="切換至下一個詞"
              >
                <span>下一詞</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

import React from 'react';
import { todayLocal } from '../utils/date';
import { CheckCircle2 } from 'lucide-react';
import { DailyStudyProgress } from '../types';
import { CURRICULUM_STAGES } from '../data/curriculum';

interface DailyStudyBannerProps {
  progress?: DailyStudyProgress;
  onOpenModal: () => void;
  onOpenQuiz?: () => void;
  onSelectWord?: (word: string) => void;
  currentWord?: string;
  isCurrentMastered: boolean;
  onToggleCurrentMastered: () => void;
}

export const DailyStudyBanner: React.FC<DailyStudyBannerProps> = ({
  progress: rawProgress,
  onOpenModal,
  onOpenQuiz,
  isCurrentMastered,
  onToggleCurrentMastered
}) => {
  const progress: DailyStudyProgress = rawProgress || {
    currentLevel: 'RE',
    dailyGoal: 5,
    masteredWords: [],
    todayStudiedWords: [],
    lastStudyDate: todayLocal(),
    streakDays: 1
  };

  const currentStage = CURRICULUM_STAGES.find((s) => s.id === progress.currentLevel) || CURRICULUM_STAGES[0];
  const currentStageWords = currentStage.words || [];

  // Mastery count in current level
  const stageMasteredCount = currentStageWords.filter((w) =>
    (progress.masteredWords || []).includes(w.word.toLowerCase())
  ).length;

  return (
    <div className="bg-white border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] rounded-lg p-2.5 sm:p-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
      {/* Left: L1, L2 Level Badge & Stage Progress */}
      <div className="flex items-center justify-start gap-2.5 sm:gap-3 flex-1 min-w-0">
        {/* Clickable Level Pill */}
        <button
          onClick={onOpenModal}
          className="cursor-pointer px-2.5 py-1.5 bg-slate-900 text-yellow-400 hover:bg-slate-800 rounded-lg border-2 border-slate-900 flex items-center gap-1.5 transition-colors shrink-0 shadow-2xs"
          title="點擊切換或檢視 L1~L5 學習階梯"
        >
          <span className="font-mono font-black text-xs">L{currentStage.levelNumber}</span>
          <span className="text-[11px] font-bold text-white border-l border-slate-700 pl-1.5 hidden xs:inline sm:inline">
            {currentStage.name.split(':')[1]?.trim() || currentStage.name}
          </span>
        </button>

        {/* Level Details & Progress */}
        <div className="flex flex-col min-w-0 flex-1 sm:flex-initial">
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-xs sm:text-sm font-bold text-slate-900 font-serif truncate">
              {currentStage.name}
            </span>
          </div>

          <div className="text-[11px] text-slate-500 mt-0.5 flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
            <span>階梯掌握：</span>
            <div className="flex items-center gap-1.5">
              <span className="font-mono font-bold text-indigo-600">
                {stageMasteredCount}/{currentStageWords.length} 詞
              </span>
              <span className="text-slate-300">•</span>
              <span className="font-mono text-emerald-600 font-bold text-[10px]">
                {Math.round((stageMasteredCount / (currentStageWords.length || 1)) * 100)}% 完成
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Quick Stage Quiz Trigger */}
      {onOpenQuiz && (
        <div className="flex items-center justify-end shrink-0">
          <button
            type="button"
            onClick={onOpenQuiz}
            className="w-full sm:w-auto px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-950 text-xs font-bold rounded-lg border border-indigo-200 shadow-2xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            title="進行當前主修階梯測驗"
          >
            <span>✍️</span>
            <span>階梯測驗 (Quiz)</span>
          </button>
        </div>
      )}
    </div>
  );
};
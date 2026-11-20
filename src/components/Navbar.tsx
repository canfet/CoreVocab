import React from 'react';
import { GraduationCap, BookMarked } from 'lucide-react';

interface NavbarProps {
  onOpenSaved?: () => void;
  onOpenDailyStudy: () => void;
  onOpenRules: () => void;
  onOpenQuiz?: () => void;
  savedCount?: number;
  currentLevelNumber?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenDailyStudy,
  onOpenRules,
  currentLevelNumber = 1,
}) => {
  return (
    <header className="border-b-2 border-slate-900 bg-white sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 h-12 sm:h-14 flex items-center justify-between">
         
         <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Level Study Program (L1, L2, L3...) */}                  
          <button
            id="nav-daily-btn"
            onClick={onOpenDailyStudy}
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 sm:py-1 text-xs font-bold text-slate-900 bg-yellow-400 hover:bg-yellow-500 rounded border-2 border-slate-900 shadow-2xs transition-colors cursor-pointer whitespace-nowrap"
            title="階梯式構詞學習進度（點擊切換 L1~L5 階梯）"
          >
            <GraduationCap className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
            <span className="hidden sm:inline">學習階梯</span>
            <span className="px-1.5 py-0.2 bg-slate-900 text-yellow-300 font-mono font-black rounded text-[10px]">
              L{currentLevelNumber}
            </span>
          </button>          
          
          {/* Rules Library */}
          <button
            id="nav-rules-btn"
            onClick={onOpenRules}
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 sm:py-1 text-xs font-bold text-slate-800 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded border border-slate-300 transition-colors cursor-pointer whitespace-nowrap"
            title="核心規則庫"
          >
            <BookMarked className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-indigo-600" />
            <span className="hidden sm:inline">規則庫</span>
          </button>          
        </div>
      </div>
    </header>
  );
};
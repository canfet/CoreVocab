import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  X,
  Calendar,
  CheckCircle2,
  Circle,
  ArrowRight,
  Sparkles,
  BookOpen,
  ChevronRight,
  ChevronLeft,
  Zap,
  HelpCircle,
  Search,
  Check,
  LayoutGrid,
  Layers,
  Volume2,
  FolderOpen,
  Target,
  Flame,
  Award,
  ExternalLink,
  Cpu
} from 'lucide-react';
import { DailyStudyProgress, StudyLevel, WordAnalysis, PrefixDimension, CurriculumStage } from '../types';
import { CURRICULUM_STAGES } from '../data/curriculum';
import { PRESET_WORDS } from '../data/presetWords';
import { generateFallbackAnalysis } from '../utils/fallbackGenerator';
import { speakWord } from '../utils/speech';
import { capitalizeWord } from '../utils/format';
import { StageQuizView } from './StageQuizView';

interface DailyStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  progress: DailyStudyProgress;
  savedWords?: WordAnalysis[];
  onSelectWord: (word: string) => void;
  onUpdateDailyGoal?: (goal: number) => void;
  onToggleMastered: (word: string) => void;
  onChangeLevel: (level: StudyLevel) => void;
  onResetToday?: () => void;
  onOpenFlashcards?: () => void;
}

const DIMENSION_CONFIG: { id: 'ALL' | PrefixDimension; label: string; shortLabel: string; count: number }[] = [
  { id: 'ALL', label: '全部階梯 (39 級)', shortLabel: '全部 39 級', count: 39 },
  { id: 'foundation', label: '基礎零音變 (L1-5)', shortLabel: '基礎零音變', count: 5 },
  { id: 'time', label: '時間前綴 (L6-9)', shortLabel: '時間前綴', count: 4 },
  { id: 'space', label: '空間與同化 (L10-22, 38-39)', shortLabel: '空間同化', count: 15 },
  { id: 'negation', label: '否定反向 (L23-25)', shortLabel: '否定反向', count: 3 },
  { id: 'degree', label: '程度超越 (L26-28)', shortLabel: '程度超越', count: 3 },
  { id: 'relation', label: '關係同源 (L29-31, 36)', shortLabel: '關係同源', count: 4 },
  { id: 'number', label: '數字計數 (L32-35, 37)', shortLabel: '數字計數', count: 5 }
];

export const DailyStudyModal: React.FC<DailyStudyModalProps> = ({
  isOpen,
  onClose,
  progress,
  onSelectWord,
  onToggleMastered,
  onChangeLevel,
  onOpenFlashcards
}) => {
  const [activeTabLevel, setActiveTabLevel] = useState<StudyLevel>(progress.currentLevel);
  const [viewMode, setViewMode] = useState<'LIST' | 'QUIZ'>('LIST');
  const [filterMode, setFilterMode] = useState<'ALL' | 'UNMASTERED' | 'MASTERED'>('ALL');
  const [dimensionFilter, setDimensionFilter] = useState<'ALL' | PrefixDimension>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [stageSearchQuery, setStageSearchQuery] = useState('');
  const [isMobileLevelDrawerOpen, setIsMobileLevelDrawerOpen] = useState(false);
  const [playingWord, setPlayingWord] = useState<string | null>(null);
  const [previewWordAnalysis, setPreviewWordAnalysis] = useState<WordAnalysis | null>(null);

  const tabsScrollRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);
  const sidebarActiveRef = useRef<HTMLButtonElement>(null);

  // When modal is opened, always reset activeTabLevel to the user's current major level (progress.currentLevel)
  useEffect(() => {
    if (isOpen) {
      setActiveTabLevel(progress.currentLevel);
      setPreviewWordAnalysis(null);
      setViewMode('LIST');
      setSearchQuery('');
      setStageSearchQuery('');
      setDimensionFilter('ALL');
    }
  }, [isOpen, progress.currentLevel]);

  const currentStage = useMemo(() => {
    return CURRICULUM_STAGES.find((s) => s.id === activeTabLevel) || CURRICULUM_STAGES[0];
  }, [activeTabLevel]);

  const masteredWords = Array.isArray(progress?.masteredWords) ? progress.masteredWords : [];

  // Current stage stats
  const totalStageWords = currentStage.words.length;
  const stageMasteredCount = useMemo(() => {
    return currentStage.words.filter((w) => masteredWords.includes(w.word.toLowerCase())).length;
  }, [currentStage.words, masteredWords]);
  const stagePercent = Math.round((stageMasteredCount / (totalStageWords || 1)) * 100);

  // Total curriculum overall stats
  const overallStats = useMemo(() => {
    let totalWords = 0;
    let totalMastered = 0;
    CURRICULUM_STAGES.forEach((stage) => {
      totalWords += stage.words.length;
      totalMastered += stage.words.filter((w) => masteredWords.includes(w.word.toLowerCase())).length;
    });
    return {
      totalWords,
      totalMastered,
      percent: Math.round((totalMastered / (totalWords || 1)) * 100)
    };
  }, [masteredWords]);

  // Filter stages by selected dimension & search query
  const visibleStages = useMemo(() => {
    return CURRICULUM_STAGES.filter((s) => {
      if (dimensionFilter !== 'ALL' && s.dimension !== dimensionFilter) return false;
      if (stageSearchQuery.trim()) {
        const q = stageSearchQuery.toLowerCase().trim();
        const matchName = s.name.toLowerCase().includes(q);
        const matchSubtitle = s.subtitle.toLowerCase().includes(q);
        const matchEng = s.englishTitle.toLowerCase().includes(q);
        const matchLevel = `l${s.levelNumber}`.includes(q) || `level ${s.levelNumber}`.includes(q);
        if (!matchName && !matchSubtitle && !matchEng && !matchLevel) return false;
      }
      return true;
    });
  }, [dimensionFilter, stageSearchQuery]);

  // Filter words inside current stage
  const filteredWords = useMemo(() => {
    return (currentStage.words || []).filter((item) => {
      const isMastered = masteredWords.includes(item.word.toLowerCase());
      if (filterMode === 'UNMASTERED' && isMastered) return false;
      if (filterMode === 'MASTERED' && !isMastered) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchWord = item.word.toLowerCase().includes(q);
        const matchMeaning = item.meaning.toLowerCase().includes(q);
        const matchFocus = item.focus.toLowerCase().includes(q);
        if (!matchWord && !matchMeaning && !matchFocus) return false;
      }
      return true;
    });
  }, [currentStage.words, masteredWords, filterMode, searchQuery]);

  // Pronounce word using speech utils
  const handlePronounce = (e: React.MouseEvent | undefined, word: string) => {
    if (e) e.stopPropagation();
    if (!word) return;
    setPlayingWord(word);
    speakWord(word, { lang: 'en-US', rate: 0.85 }, {
      onEnd: () => setPlayingWord(null),
      onError: () => setPlayingWord(null)
    });
  };

  // Preview word in-situ inside daily study modal without closing
  const handleOpenWordPreview = (rawWord: string) => {
    const clean = rawWord.split(/[\s(/,]/)[0].replace(/[^a-zA-Z]/g, '').toLowerCase();
    if (!clean) return;
    const analysis = PRESET_WORDS[clean] || generateFallbackAnalysis(clean);
    setPreviewWordAnalysis(analysis);
  };

  // Scroll active tab into view in horizontal mobile tab bar
  useEffect(() => {
    if (activeTabRef.current) {
      activeTabRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeTabLevel, dimensionFilter]);

  // Scroll active item in desktop sidebar into view
  useEffect(() => {
    if (sidebarActiveRef.current) {
      sidebarActiveRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [activeTabLevel]);

  if (!isOpen) return null;

  const isCurrentStageActive = progress.currentLevel === currentStage.id;

  const handleScrollTabs = (direction: 'left' | 'right') => {
    if (tabsScrollRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      tabsScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleSelectLevel = (levelId: StudyLevel) => {
    setActiveTabLevel(levelId);
    setPreviewWordAnalysis(null);
    const targetStage = CURRICULUM_STAGES.find((s) => s.id === levelId);
    if (targetStage && dimensionFilter !== 'ALL' && targetStage.dimension !== dimensionFilter) {
      setDimensionFilter('ALL');
    }
    setIsMobileLevelDrawerOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-0 sm:p-3 md:p-5">
      <div className="bg-white border-0 sm:border-2 border-slate-900 shadow-none sm:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] rounded-none sm:rounded-2xl w-full max-w-6xl h-full sm:h-auto sm:max-h-[94vh] flex flex-col overflow-hidden relative">
        
        {/* ================= TOP MODAL HEADER ================= */}
        <div className="px-4 sm:px-6 py-3 bg-slate-900 text-white flex items-center justify-between border-b-2 border-slate-900 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="p-2 bg-yellow-400 text-slate-950 rounded-xl font-black shrink-0 shadow-xs">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-base sm:text-lg font-black font-serif tracking-tight truncate">
                  學習階梯計劃
                </h2>              
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Overall curriculum progress pill (Desktop) */}
            <div className="hidden md:flex items-center gap-2 bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-700 text-xs text-slate-300 font-mono">
              <Award className="w-3.5 h-3.5 text-yellow-400" />
              <span>全課程進度:</span>
              <span className="font-bold text-yellow-300">
                {overallStats.totalMastered}/{overallStats.totalWords}
              </span>
              <span className="text-[10px] text-slate-400">({overallStats.percent}%)</span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0 cursor-pointer"
              title="關閉視窗"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ================= MAIN SPLIT CONTAINER (DESKTOP SIDEBAR + RIGHT DETAIL) ================= */}
        <div className="flex-1 flex overflow-hidden min-h-0">
          
          {/* ================= LEFT SIDEBAR: 39 LEVELS DIRECTORY (DESKTOP) ================= */}
          <aside className="hidden lg:flex flex-col w-72 bg-slate-50 border-r-2 border-slate-900 shrink-0 overflow-hidden">
            {/* Sidebar Header & Search */}
            <div className="p-3 border-b border-slate-200 bg-white space-y-2 shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-black text-slate-900 uppercase tracking-wider">
                  <LayoutGrid className="w-3.5 h-3.5 text-indigo-600" />
                  <span>39 階梯目錄</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-400">
                  {visibleStages.length} 階梯
                </span>
              </div>

              {/* Dimension Filter Dropdown / Select */}
              <div className="space-y-1">
                <select
                  value={dimensionFilter}
                  onChange={(e) => setDimensionFilter(e.target.value as any)}
                  aria-label="選擇語義維度分類"
                  className="w-full text-xs font-bold py-1.5 px-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-700 focus:outline-none focus:border-indigo-600 cursor-pointer"
                >
                  {DIMENSION_CONFIG.map((dim) => (
                    <option key={dim.id} value={dim.id}>
                      {dim.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Fast Search input */}
              <div className="relative">
                <Search className="w-3 h-3 text-slate-400 absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={stageSearchQuery}
                  onChange={(e) => setStageSearchQuery(e.target.value)}
                  placeholder="搜尋階梯名稱、字首..."
                  className="w-full pl-6 pr-2 py-1 bg-slate-50 border border-slate-300 rounded-md text-[11px] font-medium text-slate-800 focus:bg-white focus:outline-none focus:border-indigo-600"
                />
                {stageSearchQuery && (
                  <button
                    onClick={() => setStageSearchQuery('')}
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            {/* Scrollable Levels List */}
            <div className="flex-1 overflow-y-auto p-2 space-y-1 scrollbar-thin scrollbar-thumb-slate-300">
              {visibleStages.map((stg) => {
                const isSelected = activeTabLevel === stg.id;
                const isMainActive = progress.currentLevel === stg.id;
                const mCount = stg.words.filter((w) => masteredWords.includes(w.word.toLowerCase())).length;
                const isAllDone = mCount === stg.words.length && stg.words.length > 0;
                const pct = Math.round((mCount / (stg.words.length || 1)) * 100);

                return (
                  <button
                    key={stg.id}
                    ref={isSelected ? sidebarActiveRef : null}
                    onClick={() => handleSelectLevel(stg.id)}
                    className={`w-full text-left p-2.5 rounded-xl border transition-all cursor-pointer flex flex-col gap-1 ${
                      isSelected
                        ? 'bg-indigo-600 text-white border-indigo-700 shadow-xs'
                        : 'bg-white hover:bg-slate-100/80 text-slate-700 border-slate-200/80 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span
                          className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-black ${
                            isSelected ? 'bg-white/20 text-white border border-white/30' : stg.badgeBg
                          }`}
                        >
                          L{stg.levelNumber}
                        </span>
                        <span className={`text-xs font-bold truncate ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                          {stg.name.split(':')[1] || stg.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        {isMainActive && (
                          <span
                            className={`px-1 py-0.2 text-[9px] font-bold rounded ${
                              isSelected ? 'bg-yellow-400 text-slate-950' : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                            }`}
                          >
                            主修
                          </span>
                        )}
                        {isAllDone && (
                          <CheckCircle2
                            className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-emerald-300' : 'text-emerald-600'}`}
                          />
                        )}
                      </div>
                    </div>

                    {/* Progress micro-bar & counts */}
                    <div className="flex items-center justify-between text-[10px] font-mono opacity-80 pt-0.5">
                      <span className={isSelected ? 'text-indigo-100' : 'text-slate-500'}>
                        {stg.words.length} 單詞
                      </span>
                      <span className={`font-bold ${isSelected ? 'text-yellow-200' : 'text-slate-600'}`}>
                        {mCount}/{stg.words.length} ({pct}%)
                      </span>
                    </div>

                    {/* Mini progress line */}
                    <div className={`w-full h-1 rounded-full overflow-hidden ${isSelected ? 'bg-indigo-900/60' : 'bg-slate-200'}`}>
                      <div
                        className={`h-full transition-all duration-300 rounded-full ${
                          isSelected ? 'bg-yellow-300' : 'bg-indigo-600'
                        }`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* ================= RIGHT MAIN DETAIL VIEW ================= */}
          <main className="flex-1 flex flex-col min-w-0 bg-slate-50 overflow-hidden">
            
            {/* Mobile / Tablet Horizontal Level Navigation Bar */}
            <div className="lg:hidden bg-white border-b-2 border-slate-900 p-2 space-y-2 shrink-0">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className={`px-2 py-0.5 text-xs font-black rounded border font-mono shrink-0 ${currentStage.badgeBg}`}>
                    LEVEL {currentStage.levelNumber} / 39
                  </span>
                  <span className="text-xs sm:text-sm font-black text-slate-900 truncate font-serif">
                    {currentStage.name.split(':')[1] || currentStage.name}
                  </span>
                </div>

                {/* Mobile Drawer Trigger Button */}
                <button
                  onClick={() => setIsMobileLevelDrawerOpen(!isMobileLevelDrawerOpen)}
                  className="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-lg border border-slate-300 flex items-center gap-1 shrink-0 cursor-pointer shadow-2xs"
                >
                  <LayoutGrid className="w-3.5 h-3.5 text-indigo-600" />
                  <span>39 階梯清單</span>
                </button>
              </div>

              {/* Horizontal Scrollable Tabs */}
              <div className="relative flex items-center">
                <button
                  onClick={() => handleScrollTabs('left')}
                  className="p-1 bg-white hover:bg-slate-100 text-slate-600 border border-slate-200 rounded-l shrink-0 cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <div
                  ref={tabsScrollRef}
                  className="flex-1 flex overflow-x-auto gap-1 px-1 py-0.5 no-scrollbar scroll-smooth"
                >
                  {CURRICULUM_STAGES.map((stg) => {
                    const isTabActive = activeTabLevel === stg.id;
                    const mCount = stg.words.filter((w) => masteredWords.includes(w.word.toLowerCase())).length;
                    return (
                      <button
                        key={stg.id}
                        ref={isTabActive ? activeTabRef : null}
                        onClick={() => setActiveTabLevel(stg.id)}
                        className={`px-2 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1 shrink-0 cursor-pointer border ${
                          isTabActive
                            ? 'bg-slate-900 text-yellow-300 border-slate-900 shadow-2xs'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-400'
                        }`}
                      >
                        <span>L{stg.levelNumber}</span>
                        {mCount === stg.words.length && stg.words.length > 0 && (
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        )}
                      </button>
                    );
                  })}
                </div>
                <button
                  onClick={() => handleScrollTabs('right')}
                  className="p-1 bg-white hover:bg-slate-100 text-slate-600 border border-slate-200 rounded-r shrink-0 cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Mobile 39-Level Full Screen Drawer Overlay */}
            {isMobileLevelDrawerOpen && (
              <div className="lg:hidden absolute inset-0 z-40 bg-slate-900/60 backdrop-blur-xs p-3 sm:p-4 flex flex-col">
                <div className="bg-white border-2 border-slate-900 rounded-xl shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] p-3.5 flex-1 flex flex-col overflow-hidden space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2.5 shrink-0">
                    <div className="flex items-center gap-2">
                      <LayoutGrid className="w-4 h-4 text-indigo-600" />
                      <h3 className="font-bold text-sm text-slate-900">選擇學習階梯 (全部 39 級)</h3>
                    </div>
                    <button
                      onClick={() => setIsMobileLevelDrawerOpen(false)}
                      className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Dimension Filter for mobile drawer */}
                  <div className="flex items-center gap-1 overflow-x-auto no-scrollbar pb-1 shrink-0">
                    {DIMENSION_CONFIG.map((dim) => (
                      <button
                        key={dim.id}
                        onClick={() => setDimensionFilter(dim.id)}
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold whitespace-nowrap border cursor-pointer ${
                          dimensionFilter === dim.id
                            ? 'bg-slate-900 text-yellow-300 border-slate-900'
                            : 'bg-white text-slate-600 border-slate-200'
                        }`}
                      >
                        {dim.shortLabel}
                      </button>
                    ))}
                  </div>

                  {/* Grid of levels */}
                  <div className="flex-1 overflow-y-auto pr-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {visibleStages.map((stg) => {
                      const isSelected = activeTabLevel === stg.id;
                      const isMain = progress.currentLevel === stg.id;
                      const mCount = stg.words.filter((w) => masteredWords.includes(w.word.toLowerCase())).length;

                      return (
                        <button
                          key={stg.id}
                          onClick={() => handleSelectLevel(stg.id)}
                          className={`p-2.5 rounded-xl border text-left flex items-center justify-between gap-2 transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-indigo-50 border-indigo-600 ring-2 ring-indigo-500/20'
                              : 'bg-white border-slate-200 hover:border-slate-400'
                          }`}
                        >
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className={`px-1.5 py-0.2 rounded text-[10px] font-mono font-black ${stg.badgeBg}`}>
                                L{stg.levelNumber}
                              </span>
                              <span className="text-xs font-bold text-slate-900 truncate">
                                {stg.name.split(':')[1] || stg.name}
                              </span>
                            </div>
                            <div className="text-[10px] text-slate-500 font-mono mt-1">
                              已掌握: {mCount}/{stg.words.length}
                            </div>
                          </div>
                          {isMain && (
                            <span className="px-1.5 py-0.5 bg-indigo-600 text-white text-[9px] font-bold rounded shrink-0">
                              主修
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* ================= HERO STAGE HEADER BANNER ================= */}
            <div className="bg-white border-b-2 border-slate-900 p-3 sm:p-4 shrink-0 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
                
                {/* Left: Stage Title & Description */}
                <div className="min-w-0 flex-1 space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`px-2.5 py-0.5 text-xs font-black rounded-lg border font-mono shrink-0 shadow-2xs ${currentStage.badgeBg}`}>
                      LEVEL {currentStage.levelNumber} / 39
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 font-serif tracking-tight truncate">
                      {currentStage.name}
                    </h3>
                    <span className="text-xs text-indigo-700 font-semibold hidden sm:inline">
                      • {currentStage.subtitle}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed max-w-2xl line-clamp-2">
                    {currentStage.description}
                  </p>

                  {/* Stage Progress Bar */}
                  <div className="flex items-center gap-2 pt-0.5 max-w-md">
                    <div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden border border-slate-300">
                      <div
                        className="bg-indigo-600 h-full transition-all duration-500 rounded-full"
                        style={{ width: `${stagePercent}%` }}
                      />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-700 shrink-0">
                      已掌握 {stageMasteredCount}/{totalStageWords} ({stagePercent}%)
                    </span>
                  </div>
                </div>

                {/* Right: Stage Main Action Buttons */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                  {/* Primary Level Switcher */}
                  {isCurrentStageActive ? (
                    <span className="px-2.5 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold rounded-lg flex items-center gap-1.5 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>目前主修階梯</span>
                    </span>
                  ) : (
                    <button
                      onClick={() => onChangeLevel(currentStage.id)}
                      className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-yellow-300 text-xs font-bold rounded-lg border-2 border-slate-900 flex items-center gap-1.5 shadow-xs transition-all active:translate-y-0.5 cursor-pointer"
                      title="將此階梯設為每日主修階梯"
                    >
                      <Zap className="w-3.5 h-3.5" />
                      <span>設為目前主修</span>
                    </button>
                  )}

                  {/* Flashcards Trigger */}
                  {onOpenFlashcards && (
                    <button
                      onClick={() => {
                        onChangeLevel(currentStage.id);
                        onOpenFlashcards();
                      }}
                      className="px-2.5 py-1.5 bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold rounded-lg border border-slate-300 hover:border-slate-900 flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer"
                      title="開啟此階梯的形態小卡記憶模式"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                      <span className="hidden sm:inline">形態小卡</span>
                    </button>
                  )}

                  {/* Mode Switcher Button (Quiz vs List) */}
                  <button
                    onClick={() => setViewMode(viewMode === 'QUIZ' ? 'LIST' : 'QUIZ')}
                    className={`px-3 py-1.5 text-xs font-black rounded-lg border-2 border-slate-900 flex items-center gap-1.5 shadow-xs transition-all cursor-pointer ${
                      viewMode === 'QUIZ'
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                        : 'bg-yellow-400 hover:bg-yellow-300 text-slate-950'
                    }`}
                  >
                    {viewMode === 'QUIZ' ? (
                      <>
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>返回單詞清單</span>
                      </>
                    ) : (
                      <>
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>階梯實戰測驗</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* ================= SCROLLABLE CONTENT BODY ================= */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-5 space-y-3.5 min-h-0">
              {viewMode === 'QUIZ' ? (
                /* Stage Quiz View Component */
                <StageQuizView
                  stage={currentStage}
                  masteredWords={masteredWords}
                  onToggleMastered={onToggleMastered}
                  onSelectWord={onSelectWord}
                  onClose={onClose}
                />
              ) : (
                /* Word List View */
                <div className="space-y-3">
                  
                  {/* Filter & Instant Search Toolbar */}
                  <div className="flex flex-wrap items-center justify-between gap-2.5 bg-white p-2.5 rounded-xl border border-slate-300 shadow-2xs">
                    {/* Status Filter Chips */}
                    <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-xs">
                      <button
                        onClick={() => setFilterMode('ALL')}
                        className={`px-2.5 py-1 rounded-md font-bold transition-all cursor-pointer ${
                          filterMode === 'ALL'
                            ? 'bg-white text-slate-900 shadow-2xs'
                            : 'text-slate-500 hover:text-slate-800'
                        }`}
                      >
                        全部 ({currentStage.words.length})
                      </button>
                      <button
                        onClick={() => setFilterMode('UNMASTERED')}
                        className={`px-2.5 py-1 rounded-md font-bold transition-all cursor-pointer ${
                          filterMode === 'UNMASTERED'
                            ? 'bg-white text-amber-800 shadow-2xs'
                            : 'text-slate-500 hover:text-slate-800'
                        }`}
                      >
                        待掌握 ({currentStage.words.length - stageMasteredCount})
                      </button>
                      <button
                        onClick={() => setFilterMode('MASTERED')}
                        className={`px-2.5 py-1 rounded-md font-bold transition-all cursor-pointer ${
                          filterMode === 'MASTERED'
                            ? 'bg-white text-emerald-800 shadow-2xs'
                            : 'text-slate-500 hover:text-slate-800'
                        }`}
                      >
                        已掌握 ({stageMasteredCount})
                      </button>
                    </div>

                    {/* Search Field */}
                    <div className="relative flex-1 sm:w-56 sm:flex-initial">
                      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="篩選單字、字根或含義..."
                        className="w-full pl-8 pr-6 py-1 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-900 focus:bg-white focus:outline-none focus:border-indigo-600"
                      />
                      {searchQuery && (
                        <button
                          onClick={() => setSearchQuery('')}
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 text-xs font-bold cursor-pointer"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Words Grid (2 columns on desktop) */}
                  {filteredWords.length === 0 ? (
                    <div className="bg-white border-2 border-slate-300 rounded-xl p-8 text-center space-y-2">
                      <p className="text-slate-600 font-bold text-sm">沒有符合條件的單詞</p>
                      <button
                        onClick={() => {
                          setFilterMode('ALL');
                          setSearchQuery('');
                        }}
                        className="text-xs font-bold text-indigo-600 hover:underline cursor-pointer"
                      >
                        清除所有篩選條件
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3">
                      {filteredWords.map((item, idx) => {
                        const isMastered = masteredWords.includes(item.word.toLowerCase());
                        const isSpeaking = playingWord === item.word;

                        return (
                          <div
                            key={item.word}
                            className={`bg-white border-2 rounded-xl p-3 sm:p-3.5 transition-all flex flex-col justify-between gap-2.5 shadow-2xs hover:shadow-xs ${
                              isMastered
                                ? 'border-emerald-400 bg-emerald-50/20'
                                : 'border-slate-300 hover:border-slate-900'
                            }`}
                          >
                            {/* Card Top: Index, Word, Pronounce & Mastered Switch */}
                            <div className="flex items-start justify-between gap-2">
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-2">
                                  <span className="font-mono text-xs text-slate-400 font-bold">
                                    #{idx + 1}
                                  </span>
                                  
                                  {/* Word Clickable to Preview In-situ */}
                                  <button
                                    type="button"
                                    onClick={() => handleOpenWordPreview(item.word)}
                                    className="font-serif font-black text-base sm:text-lg text-slate-900 hover:text-indigo-600 transition-colors tracking-tight cursor-pointer text-left"
                                    title="點擊原位展開 3D 形態語素速覽"
                                  >
                                    {capitalizeWord(item.word)}
                                  </button>

                                  {/* Pronounce Button */}
                                  <button
                                    type="button"
                                    onClick={(e) => handlePronounce(e, item.word)}
                                    className={`p-1 rounded-md border transition-all cursor-pointer ${
                                      isSpeaking
                                        ? 'bg-indigo-600 text-white border-indigo-700'
                                        : 'bg-slate-100 hover:bg-slate-200 text-slate-600 border-slate-200'
                                    }`}
                                    title="朗讀單字發音"
                                  >
                                    <Volume2 className={`w-3.5 h-3.5 ${isSpeaking ? 'animate-pulse' : ''}`} />
                                  </button>
                                </div>

                                <p className="text-xs text-slate-700 font-medium mt-1 leading-snug">
                                  {item.meaning}
                                </p>
                              </div>

                              {/* Master Toggle Pill Button */}
                              <button
                                type="button"
                                onClick={() => onToggleMastered(item.word)}
                                className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 border transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                                  isMastered
                                    ? 'bg-emerald-600 text-white border-emerald-700 shadow-2xs hover:bg-emerald-700'
                                    : 'bg-slate-100 text-slate-600 border-slate-300 hover:border-slate-800 hover:text-slate-900'
                                }`}
                                title={isMastered ? '已掌握（點擊取消）' : '標記為已掌握'}
                              >
                                {isMastered ? (
                                  <>
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                    <span>已掌握</span>
                                  </>
                                ) : (
                                  <>
                                    <Circle className="w-3.5 h-3.5 text-slate-400" />
                                    <span>待掌握</span>
                                  </>
                                )}
                              </button>
                            </div>

                            {/* Card Bottom: Formula Block & Deconstruct Action */}
                            <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                              <div className="font-mono text-[11px] text-indigo-900 font-bold bg-indigo-50/70 border border-indigo-200/80 px-2 py-0.5 rounded truncate max-w-[180px] sm:max-w-[240px]">
                                {`{ ${item.focus} }`}
                              </div>

                              <button
                                type="button"
                                onClick={() => handleOpenWordPreview(item.word)}
                                className="text-[11px] font-bold text-indigo-600 hover:text-indigo-900 flex items-center gap-0.5 cursor-pointer hover:underline"
                              >
                                <span>深度分析</span>
                                <ArrowRight className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* In-situ Word Preview Drawer inside Daily Study Modal */}
            {previewWordAnalysis && (
              <div className="absolute inset-x-0 bottom-0 z-30 bg-slate-950/70 backdrop-blur-xs p-2 sm:p-4 flex items-end justify-center animate-in fade-in duration-200">
                <div className="bg-white border-2 border-slate-900 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-200">
                  {/* Header */}
                  <div className="bg-slate-900 text-white px-4 py-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-yellow-400 text-slate-950 font-black text-[11px] rounded uppercase tracking-wider">
                        單字表
                      </span>
                      <span className="text-xs text-slate-400">
                        Level {currentStage.levelNumber} 浸潤學習
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setPreviewWordAnalysis(null)}
                      className="p-1 hover:bg-slate-800 rounded-md text-slate-400 hover:text-white transition-colors cursor-pointer"
                      title="關閉單字表"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Body */}
                  <div className="p-4 sm:p-5 space-y-3.5 max-h-[60vh] overflow-y-auto">
                    <div className="flex items-baseline justify-between gap-3 flex-wrap">
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-xl sm:text-2xl font-black text-slate-950 font-mono tracking-tight">
                          {previewWordAnalysis.word}
                        </h3>
                        {previewWordAnalysis.ipa && (
                          <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                            {previewWordAnalysis.ipa}
                          </span>
                        )}
                        <button
                          type="button"
                          onClick={() => handlePronounce(undefined, previewWordAnalysis.word)}
                          disabled={playingWord === previewWordAnalysis.word}
                          className={`p-1.5 rounded-lg border border-slate-200 transition-colors cursor-pointer ${
                            playingWord === previewWordAnalysis.word ? 'bg-amber-100 text-amber-900 animate-pulse' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                          }`}
                          title="發音播放"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded border border-indigo-200">
                          {previewWordAnalysis.partOfSpeech}
                        </span>
                        <span className="text-sm font-bold text-slate-900">
                          {previewWordAnalysis.chineseMeaning}
                        </span>
                      </div>
                    </div>

                    {/* Master Switch inside in-situ card */}
                    <div className="flex items-center justify-between p-2.5 bg-slate-50 border border-slate-200 rounded-xl">
                      <div className="text-xs font-bold text-slate-700">
                        當前掌握狀態：
                        <span className={`ml-1 font-mono font-black ${masteredWords.includes(previewWordAnalysis.word.toLowerCase()) ? 'text-emerald-700' : 'text-amber-700'}`}>
                          {masteredWords.includes(previewWordAnalysis.word.toLowerCase()) ? '已掌握 ✓' : '待掌握 ⏳'}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => onToggleMastered(previewWordAnalysis.word)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1 border transition-all cursor-pointer ${
                          masteredWords.includes(previewWordAnalysis.word.toLowerCase())
                            ? 'bg-emerald-600 text-white border-emerald-700 hover:bg-emerald-700'
                            : 'bg-slate-900 text-yellow-300 border-slate-900 hover:bg-slate-800'
                        }`}
                      >
                        {masteredWords.includes(previewWordAnalysis.word.toLowerCase()) ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>標記為待掌握</span>
                          </>
                        ) : (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>標記為已掌握</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Morphemes Breakdown Row */}
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-2">
                      <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
                        <span>語素積木拆解表</span>
                        {previewWordAnalysis.source === 'assembled' && (
                          <span className="text-[10px] text-amber-700 font-mono font-bold flex items-center gap-1">
                            <Cpu className="w-3 h-3" /> 字根庫拼裝
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {previewWordAnalysis.morphemes.map((m, mIdx) => (
                          <div
                            key={mIdx}
                            className={`p-2 rounded-lg border text-xs flex-1 min-w-[120px] ${
                              m.type === 'prefix'
                                ? 'bg-blue-50/80 border-blue-200 text-blue-950'
                                : m.type === 'root'
                                ? 'bg-amber-50/80 border-amber-200 text-amber-950'
                                : 'bg-purple-50/80 border-purple-200 text-purple-950'
                            }`}
                          >
                            <div className="flex items-center justify-between text-[10px] font-bold opacity-75 mb-0.5">
                              <span>{m.label}</span>
                              <span className="font-mono">{m.originalForm}</span>
                            </div>
                            <div className="font-mono font-black text-sm">{m.morpheme}</div>
                            <div className="text-[11px] mt-0.5 leading-snug">{m.meaning}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Semantic Formula & Logic */}
                    {previewWordAnalysis.semantic && (
                      <div className="bg-indigo-50/60 border border-indigo-200/80 rounded-xl p-3 text-xs space-y-1">
                        <div className="font-mono font-bold text-indigo-900">
                          {previewWordAnalysis.semantic.formulaDisplay}
                        </div>
                        {previewWordAnalysis.semantic.literalLogic && (
                          <div className="text-slate-600 text-[11px] leading-relaxed">
                            <span className="font-bold text-slate-800">直譯解釋：</span>
                            {previewWordAnalysis.semantic.literalLogic}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="bg-slate-50 border-t border-slate-200 px-4 py-2.5 flex items-center justify-between gap-2">
                    {/* Previous / Next word switcher in current stage */}
                    <div className="flex items-center gap-1.5">
                      {(() => {
                        const currentIdx = currentStage.words.findIndex(
                          (w) => w.word.toLowerCase() === previewWordAnalysis.word.toLowerCase()
                        );
                        const prevWord = currentIdx > 0 ? currentStage.words[currentIdx - 1] : null;
                        const nextWord = currentIdx >= 0 && currentIdx < currentStage.words.length - 1 ? currentStage.words[currentIdx + 1] : null;

                        return (
                          <>
                            <button
                              type="button"
                              disabled={!prevWord}
                              onClick={() => prevWord && handleOpenWordPreview(prevWord.word)}
                              className="px-2 py-1 rounded border border-slate-300 bg-white text-slate-700 disabled:opacity-30 text-xs font-bold flex items-center gap-1 hover:bg-slate-100 cursor-pointer"
                              title={prevWord ? `上一個: ${prevWord.word}` : '無上一個'}
                            >
                              <ChevronLeft className="w-3.5 h-3.5" />
                              <span>上一個</span>
                            </button>
                            <button
                              type="button"
                              disabled={!nextWord}
                              onClick={() => nextWord && handleOpenWordPreview(nextWord.word)}
                              className="px-2 py-1 rounded border border-slate-300 bg-white text-slate-700 disabled:opacity-30 text-xs font-bold flex items-center gap-1 hover:bg-slate-100 cursor-pointer"
                              title={nextWord ? `下一個: ${nextWord.word}` : '無下一個'}
                            >
                              <span>下一個</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          </>
                        );
                      })()}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setPreviewWordAnalysis(null)}
                        className="px-3.5 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-700 font-bold text-xs hover:bg-slate-100 transition-colors cursor-pointer"
                      >
                        關閉單字表
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ================= FOOTER ================= */}
            <div className="p-2.5 sm:p-3.5 bg-white border-t-2 border-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shrink-0">
              <div className="text-xs text-slate-500 items-center gap-1.5 truncate hidden sm:flex">
                <Sparkles className="w-4 h-4 text-yellow-500 shrink-0" />                
              </div>

              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 w-full sm:w-auto justify-end">
                {/* Fast Launch First Unstudied Word in Current Stage */}
                {filteredWords.length > 0 && (
                  <button
                    onClick={() => {
                      const unmastered = filteredWords.find(
                        (w) => !masteredWords.includes(w.word.toLowerCase())
                      );
                      const targetWord = unmastered ? unmastered.word : filteredWords[0].word;
                      handleOpenWordPreview(targetWord);
                    }}
                    className="px-3 py-1.5 sm:px-3.5 sm:py-2 bg-slate-900 hover:bg-slate-800 text-yellow-300 font-bold text-xs rounded-lg border-2 border-slate-900 flex items-center gap-1 shadow-xs transition-all cursor-pointer whitespace-nowrap ml-auto sm:ml-0"
                  >
                    <span>原位學習本階梯單字</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

          </main>
        </div>

      </div>
    </div>
  );
};

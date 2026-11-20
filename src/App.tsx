import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { HeaderCard } from './components/HeaderCard';
import { MorphemeDeconstructionCard } from './components/MorphemeDeconstructionCard';
import { DailyStudyBanner } from './components/DailyStudyBanner';
import { MobileStickyActionBar } from './components/MobileStickyActionBar';

// Modals/drawers are only ever shown after a user action (button click), so they're
// code-split out of the initial bundle instead of being loaded eagerly on first paint.
const SavedWordsDrawer = lazy(() => import('./components/SavedWordsDrawer').then((m) => ({ default: m.SavedWordsDrawer })));
const DailyStudyModal = lazy(() => import('./components/DailyStudyModal').then((m) => ({ default: m.DailyStudyModal })));
const AudioSettingsModal = lazy(() => import('./components/AudioSettingsModal').then((m) => ({ default: m.AudioSettingsModal })));
const RulesReferenceModal = lazy(() => import('./components/RulesReferenceModal').then((m) => ({ default: m.RulesReferenceModal })));
const VocabularyQuizModal = lazy(() => import('./components/VocabularyQuizModal').then((m) => ({ default: m.VocabularyQuizModal })));
import { PRESET_WORDS } from './data/presetWords';
import { INITIAL_STUDY_PROGRESS, CURRICULUM_STAGES } from './data/curriculum';
import { generateFallbackAnalysis } from './utils/fallbackGenerator';
import { WordAnalysis, DailyStudyProgress, StudyLevel, AudioSettings } from './types';
import { initSpeechEngine, speakWord } from './utils/speech';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

// Helper to determine initial word based on user's last viewed word or current study level
const getInitialWordAnalysis = (): WordAnalysis => {
  try {
    // 1. Prioritize restoring the user's last viewed word
    const storedLastWord = localStorage.getItem('morpho_last_active_word');
    if (storedLastWord) {
      const clean = storedLastWord.toLowerCase().trim();
      if (PRESET_WORDS[clean]) return PRESET_WORDS[clean];
      return generateFallbackAnalysis(clean);
    }

    // 2. Otherwise load the first unmastered (or first) word of their saved study level
    const storedProgress = localStorage.getItem('morpho_daily_progress_v2');
    let currentLevel: StudyLevel = INITIAL_STUDY_PROGRESS.currentLevel;
    let masteredWords: string[] = [];

    if (storedProgress) {
      const parsed = JSON.parse(storedProgress);
      if (parsed.currentLevel) currentLevel = parsed.currentLevel;
      if (Array.isArray(parsed.masteredWords)) masteredWords = parsed.masteredWords;
    }

    const stage = CURRICULUM_STAGES.find((s) => s.id === currentLevel) || CURRICULUM_STAGES[0];
    const unmastered = stage.words?.find((w) => !masteredWords.includes(w.word.toLowerCase()));
    const targetWord = (unmastered || stage.words?.[0])?.word || 'relocate';
    const cleanTarget = targetWord.toLowerCase().trim();

    if (PRESET_WORDS[cleanTarget]) return PRESET_WORDS[cleanTarget];
    return generateFallbackAnalysis(cleanTarget);
  } catch {
    return PRESET_WORDS['relocate'] || generateFallbackAnalysis('relocate');
  }
};

export default function App() {
  const [currentAnalysis, setCurrentAnalysis] = useState<WordAnalysis>(getInitialWordAnalysis);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [notificationMsg, setNotificationMsg] = useState<string | null>(null);

  // Modals & Drawers state
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const [rulesInitialTab, setRulesInitialTab] = useState<'prefixes' | 'assimilation' | 'dualStems' | 'phonology' | 'suffixes' | 'strata'>('prefixes');
  const [rulesInitialQuery, setRulesInitialQuery] = useState<string>('');
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);
  const [isDailyStudyOpen, setIsDailyStudyOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isAudioSettingsOpen, setIsAudioSettingsOpen] = useState(false);

  const handleOpenRules = (options?: {
    tab?: 'prefixes' | 'assimilation' | 'dualStems' | 'phonology' | 'suffixes' | 'strata';
    query?: string;
  }) => {
    if (options?.tab) {
      setRulesInitialTab(options.tab);
    } else {
      setRulesInitialTab('prefixes');
    }
    if (options?.query !== undefined) {
      setRulesInitialQuery(options.query);
    }
    setIsRulesOpen(true);
  };

  // Initialize Speech Synthesis Engine
  useEffect(() => {
    initSpeechEngine();
  }, []);

  // Audio Speech Settings
  const [audioSettings, setAudioSettings] = useState<AudioSettings>(() => {
    try {
      const stored = localStorage.getItem('morpho_audio_settings');
      return stored ? JSON.parse(stored) : { lang: 'en-US', rate: 0.85, autoPlayOnSearch: false };
    } catch {
      return { lang: 'en-US', rate: 0.85, autoPlayOnSearch: false };
    }
  });

  const handleSaveAudioSettings = (newSettings: AudioSettings) => {
    setAudioSettings(newSettings);
    localStorage.setItem('morpho_audio_settings', JSON.stringify(newSettings));
    setNotificationMsg('✅ 語音發音設定已更新！');
    setTimeout(() => setNotificationMsg(null), 2500);
  };

  // Saved / Bookmarked Words stored in localStorage
  const [savedWords, setSavedWords] = useState<WordAnalysis[]>(() => {
    try {
      const stored = localStorage.getItem('morpho_saved_words');
      return stored ? JSON.parse(stored) : [PRESET_WORDS['allocate'], PRESET_WORDS['sympathy']];
    } catch {
      return [PRESET_WORDS['allocate']];
    }
  });

  // Daily Progressive Study Progress stored in localStorage
  const [studyProgress, setStudyProgress] = useState<DailyStudyProgress>(() => {
    try {
      const stored = localStorage.getItem('morpho_daily_progress_v2');
      if (stored) {
        const parsed: DailyStudyProgress = JSON.parse(stored);
        const todayStr = new Date().toISOString().slice(0, 10);
        // Check date for streak calculation
        if (parsed.lastStudyDate !== todayStr) {
          const lastDate = new Date(parsed.lastStudyDate);
          const nowDate = new Date(todayStr);
          const diffDays = Math.round((nowDate.getTime() - lastDate.getTime()) / (1000 * 3600 * 24));
          return {
            ...parsed,
            todayStudiedWords: [],
            lastStudyDate: todayStr,
            streakDays: diffDays === 1 ? parsed.streakDays + 1 : (diffDays === 0 ? parsed.streakDays : 1)
          };
        }
        return parsed;
      }
      return INITIAL_STUDY_PROGRESS;
    } catch {
      return INITIAL_STUDY_PROGRESS;
    }
  });

  // Save to LocalStorage
  useEffect(() => {
    if (currentAnalysis?.word) {
      try {
        localStorage.setItem('morpho_last_active_word', currentAnalysis.word.toLowerCase().trim());
      } catch (e) {
        console.error('Failed to save last active word to localStorage:', e);
      }
    }
  }, [currentAnalysis]);

  useEffect(() => {
    try {
      localStorage.setItem('morpho_saved_words', JSON.stringify(savedWords));
    } catch (e) {
      console.error('Failed to save words to localStorage:', e);
    }
  }, [savedWords]);

  useEffect(() => {
    try {
      localStorage.setItem('morpho_daily_progress_v2', JSON.stringify(studyProgress));
    } catch (e) {
      console.error('Failed to save daily study progress to localStorage:', e);
    }
  }, [studyProgress]);

  // Track studied word
  const recordWordStudied = (word: string) => {
    const clean = word.toLowerCase();
    setStudyProgress((prev) => {
      if (prev.todayStudiedWords.includes(clean)) return prev;
      return {
        ...prev,
        todayStudiedWords: [...prev.todayStudiedWords, clean]
      };
    });
  };

  const handleSearchWord = async (wordToSearch: string) => {
    const cleanWord = wordToSearch.trim().toLowerCase().replace(/[^a-z-]/g, '');
    if (!cleanWord) return;

    setErrorMessage(null);
    recordWordStudied(cleanWord);

    // 1. Check if it's already in our preset cache for instant display
    if (PRESET_WORDS[cleanWord]) {
      setCurrentAnalysis(PRESET_WORDS[cleanWord]);
      if (audioSettings.autoPlayOnSearch) {
        speakWord(cleanWord, { lang: audioSettings.lang || 'en-US', rate: audioSettings.rate || 0.85 });
      }
      return;
    }

    // 2. 完全走本機構詞資料庫拆解，不呼叫任何外部 AI 服務
    const fallback = generateFallbackAnalysis(cleanWord);
    setCurrentAnalysis(fallback);
    if (audioSettings.autoPlayOnSearch) {
      speakWord(cleanWord, { lang: audioSettings.lang || 'en-US', rate: audioSettings.rate || 0.85 });
    }
  };

  const handleToggleSave = () => {
    const isAlreadySaved = savedWords.some(
      (w) => w.word.toLowerCase() === currentAnalysis.word.toLowerCase()
    );

    if (isAlreadySaved) {
      setSavedWords((prev) =>
        prev.filter((w) => w.word.toLowerCase() !== currentAnalysis.word.toLowerCase())
      );
    } else {
      setSavedWords((prev) => [currentAnalysis, ...prev]);
    }
  };

  const handleRemoveSavedWord = (word: string) => {
    setSavedWords((prev) => prev.filter((w) => w.word.toLowerCase() !== word.toLowerCase()));
  };

  const handleClearAllSaved = () => {
    setSavedWords([]);
  };

  // Study Progress Handlers
  const handleUpdateDailyGoal = (goal: number) => {
    setStudyProgress((prev) => ({ ...prev, dailyGoal: goal }));
  };

  const handleToggleMasteredWord = (word: string) => {
    const clean = word.toLowerCase();
    setStudyProgress((prev) => {
      const isMastered = prev.masteredWords.includes(clean);
      const newMastered = isMastered
        ? prev.masteredWords.filter((w) => w !== clean)
        : [...prev.masteredWords, clean];
      
      const newStudied = prev.todayStudiedWords.includes(clean)
        ? prev.todayStudiedWords
        : [...prev.todayStudiedWords, clean];

      return {
        ...prev,
        masteredWords: newMastered,
        todayStudiedWords: newStudied
      };
    });
  };

  const handleChangeStudyLevel = (level: StudyLevel) => {
    setStudyProgress((prev) => ({ ...prev, currentLevel: level }));
    const stage = CURRICULUM_STAGES.find((s) => s.id === level);
    const unmastered = stage?.words?.find((w) => !studyProgress.masteredWords.includes(w.word.toLowerCase()));
    const targetWord = (unmastered || stage?.words?.[0])?.word;
    if (targetWord) {
      handleSearchWord(targetWord);
    }
  };

  const handleResetTodayStudy = () => {
    setStudyProgress((prev) => ({ ...prev, todayStudiedWords: [] }));
  };

  const isCurrentSaved = savedWords.some(
    (w) => w.word.toLowerCase() === currentAnalysis.word.toLowerCase()
  );

  const isCurrentMastered = studyProgress.masteredWords.includes(
    currentAnalysis.word.toLowerCase()
  );

  // Navigation helpers for sequential Prev / Next word across the stage list
  const currentStage = CURRICULUM_STAGES.find((s) => s.id === studyProgress.currentLevel) || CURRICULUM_STAGES[0];
  const stageWords = currentStage.words || [];
  const currentStageIndex = stageWords.findIndex(
    (w) => w.word.toLowerCase() === currentAnalysis.word.toLowerCase()
  );

  const handleNextWord = () => {
    if (stageWords.length === 0) return;
    const nextIdx = currentStageIndex >= 0 ? (currentStageIndex + 1) % stageWords.length : 0;
    handleSearchWord(stageWords[nextIdx].word);
  };

  const handlePrevWord = () => {
    if (stageWords.length === 0) return;
    const prevIdx = currentStageIndex > 0 ? currentStageIndex - 1 : stageWords.length - 1;
    handleSearchWord(stageWords[prevIdx].word);
  };

  return (
    <div className="min-h-screen bg-[#F1F5F9] text-slate-900 flex flex-col font-sans selection:bg-slate-900 selection:text-yellow-300">
      {/* Top Navbar */}
      <Navbar
        onOpenSaved={() => setIsSavedDrawerOpen(true)}
        onOpenDailyStudy={() => setIsDailyStudyOpen(true)}
        onOpenRules={() => handleOpenRules({ tab: 'prefixes', query: '' })}
        savedCount={savedWords.length}
        currentLevelNumber={currentStage.levelNumber || 1}
      />

      {/* Notification Toast */}
      {notificationMsg && (
        <div className="bg-slate-900 text-yellow-400 text-xs sm:text-sm font-bold py-2 px-4 border-b-2 border-slate-900 flex items-center justify-center gap-2 shadow-xs transition-all animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{notificationMsg}</span>
        </div>
      )}

      {/* Main High-Density Workspace Container */}
      <div className="max-w-7xl w-full mx-auto p-3 sm:p-6 pb-24 sm:pb-6 flex-1 flex flex-col space-y-3.5 sm:space-y-5">
        {/* Daily Progressive Study Track Banner */}
        <DailyStudyBanner
          progress={studyProgress}
          onOpenModal={() => setIsDailyStudyOpen(true)}
          onOpenQuiz={() => setIsQuizOpen(true)}
          onSelectWord={handleSearchWord}
          currentWord={currentAnalysis.word}
          isCurrentMastered={isCurrentMastered}
          onToggleCurrentMastered={() => handleToggleMasteredWord(currentAnalysis.word)}
        />

        {/* Error Notification Alert if any */}
        {errorMessage && (
          <div className="p-3 sm:p-3.5 rounded border-2 border-rose-600 bg-rose-50 text-rose-900 text-xs sm:text-sm flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <div className="font-bold uppercase tracking-wide">系統提示</div>
              <p>{errorMessage}</p>
            </div>
          </div>
        )}

        {/* Header Card (Target Word, IPA, POS, Meaning & Action Controls) */}
        <HeaderCard
          analysis={currentAnalysis}
          isSaved={isCurrentSaved}
          onToggleSave={handleToggleSave}
          audioSettings={audioSettings}
          onNextWord={handleNextWord}
          onPrevWord={handlePrevWord}
          wordIndexInfo={{
            current: currentStageIndex >= 0 ? currentStageIndex + 1 : 1,
            total: stageWords.length || 1,
            stageName: currentStage.name,
            levelNumber: currentStage.levelNumber || 1
          }}
          onOpenAudioSettings={() => setIsAudioSettingsOpen(true)}
          onOpenDailyStudy={() => setIsDailyStudyOpen(true)}
          isCurrentMastered={isCurrentMastered}
          onToggleMastered={() => handleToggleMasteredWord(currentAnalysis.word)}
        />

        {/* 3D Deep Morpheme Deconstruction Card */}
        <MorphemeDeconstructionCard
          analysis={currentAnalysis}
          audioSettings={audioSettings}
          onOpenRuleTag={(tab, query) => handleOpenRules({ tab, query })}
        />
      </div>

      {/* Code-Split Lazy Modals & Drawers */}
      <Suspense fallback={null}>
        <RulesReferenceModal
          isOpen={isRulesOpen}
          onClose={() => setIsRulesOpen(false)}
          initialTab={rulesInitialTab}
          initialQuery={rulesInitialQuery}
          onSelectWord={handleSearchWord}
        />

        <DailyStudyModal
          isOpen={isDailyStudyOpen}
          onClose={() => setIsDailyStudyOpen(false)}
          progress={studyProgress}
          savedWords={savedWords}
          onSelectWord={handleSearchWord}
          onUpdateDailyGoal={handleUpdateDailyGoal}
          onToggleMastered={handleToggleMasteredWord}
          onChangeLevel={handleChangeStudyLevel}
          onResetToday={handleResetTodayStudy}
        />

        <AudioSettingsModal
          isOpen={isAudioSettingsOpen}
          onClose={() => setIsAudioSettingsOpen(false)}
          settings={audioSettings}
          onSaveSettings={handleSaveAudioSettings}
        />

        <SavedWordsDrawer
          isOpen={isSavedDrawerOpen}
          onClose={() => setIsSavedDrawerOpen(false)}
          savedWords={savedWords}
          onSelectWord={handleSearchWord}
          onRemoveWord={handleRemoveSavedWord}
          onClearAll={handleClearAllSaved}
        />

        <VocabularyQuizModal
          isOpen={isQuizOpen}
          onClose={() => setIsQuizOpen(false)}
          currentStage={currentStage}
          studyProgress={studyProgress}
          onToggleMastered={handleToggleMasteredWord}
          onSelectWord={handleSearchWord}
        />
      </Suspense>

      {/* Mobile-Only Sticky Floating Action Bar */}
      <MobileStickyActionBar
        analysis={currentAnalysis}
        isSaved={isCurrentSaved}
        isMastered={isCurrentMastered}
        onToggleSave={handleToggleSave}
        onToggleMastered={() => handleToggleMasteredWord(currentAnalysis.word)}
        onNextWord={stageWords.length > 0 ? handleNextWord : undefined}
        onPrevWord={stageWords.length > 0 ? handlePrevWord : undefined}
        audioSettings={audioSettings}
        onOpenAudioSettings={() => setIsAudioSettingsOpen(true)}
        wordIndexInfo={
          stageWords.length > 0
            ? {
                current: currentStageIndex >= 0 ? currentStageIndex + 1 : 1,
                total: stageWords.length
              }
            : undefined
        }
      />
    </div>
  );
}

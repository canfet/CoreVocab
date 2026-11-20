import React, { useState, useMemo } from 'react';
import {
  X,
  Sparkles,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Trophy,
  ArrowRight,
  BrainCircuit,
  Volume2
} from 'lucide-react';
import { CurriculumStage, WordAnalysis, DailyStudyProgress } from '../types';
import { PRESET_WORDS } from '../data/presetWords';
import { generateFallbackAnalysis } from '../utils/fallbackGenerator';
import { speakWord } from '../utils/speech';

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export interface VocabularyQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentStage: CurriculumStage;
  studyProgress: DailyStudyProgress;
  onToggleMastered: (word: string) => void;
  onSelectWord: (word: string) => void;
}

type QuizQuestionType = 'definition' | 'morpheme_meaning' | 'root_identification' | 'word_from_morphemes';

interface QuizQuestion {
  id: string;
  type: QuizQuestionType;
  word: string;
  analysis: WordAnalysis;
  prompt: string;
  contextNote?: string;
  correctAnswer: string;
  options: string[];
  explanation: string;
}

export const VocabularyQuizModal: React.FC<VocabularyQuizModalProps> = ({
  isOpen,
  onClose,
  currentStage,
  studyProgress,
  onToggleMastered,
  onSelectWord
}) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, { selected: string; isCorrect: boolean }>>({});
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Generate quiz questions dynamically from current stage words
  const generateQuiz = () => {
    const stageWords = currentStage.words || [];
    if (stageWords.length === 0) return;

    // Load full analysis for all words in current stage
    const analyses: { item: typeof stageWords[0]; analysis: WordAnalysis }[] = stageWords.map((item) => {
      const clean = item.word.toLowerCase();
      const analysis = PRESET_WORDS[clean] || generateFallbackAnalysis(clean);
      return { item, analysis };
    });

    const generated: QuizQuestion[] = [];

    analyses.forEach(({ item, analysis }, idx) => {
      // Question 1: Definition test (Match word to definition/meaning)
      const otherMeanings = analyses
        .filter((_, i) => i !== idx)
        .map((a) => a.analysis.chineseMeaning)
        .filter(Boolean);
      const randomDistractors = shuffleArray(otherMeanings).slice(0, 3);
      
      // Fallback distractors if stage has few words
      while (randomDistractors.length < 3) {
        const fallbacks = ['共同、聚集', '向後、返回', '在...之前、向前', '移至另一處', '共同感受、同理', '預先分配、撥出'];
        const randomF = fallbacks[Math.floor(Math.random() * fallbacks.length)];
        if (!randomDistractors.includes(randomF) && randomF !== analysis.chineseMeaning) {
          randomDistractors.push(randomF);
        }
      }

      generated.push({
        id: `def-${item.word}-${idx}`,
        type: 'definition',
        word: analysis.word,
        analysis,
        prompt: `單字【 ${analysis.word} 】的精確中文核心含義為何？`,
        contextNote: analysis.partOfSpeech ? `詞性：${analysis.partOfSpeech}` : undefined,
        correctAnswer: analysis.chineseMeaning,
        options: shuffleArray([analysis.chineseMeaning, ...randomDistractors]),
        explanation: `【${analysis.word}】字義為「${analysis.chineseMeaning}」。${analysis.semantic?.literalLogic || ''}`
      });

      // Question 2: Morpheme Breakdown & Understanding test
      const primaryRoot = analysis.morphemes.find((m) => m.type === 'root') || analysis.morphemes[0];
      if (primaryRoot) {
        const otherRootMeanings = [
          'loc (地方/放置)',
          'path / pass (感受/痛苦)',
          'tract (拉/牽引)',
          'dict (說/言)',
          'spec / spic (看/觀察)',
          'port (攜帶/運送)',
          'mit / miss (送/放)'
        ].filter((m) => !m.includes(primaryRoot.morpheme));

        const correctRootDisplay = `${primaryRoot.morpheme} (${primaryRoot.meaning})`;
        const distractors = shuffleArray(otherRootMeanings).slice(0, 3);

        generated.push({
          id: `morpheme-${item.word}-${idx}`,
          type: 'morpheme_meaning',
          word: analysis.word,
          analysis,
          prompt: `在單字【 ${analysis.word} 】中，字根【 ${primaryRoot.morpheme} 】的構詞語意為何？`,
          contextNote: `構詞拆解：${analysis.semantic?.formulaDisplay || `{ ${item.focus} }`}`,
          correctAnswer: correctRootDisplay,
          options: shuffleArray([correctRootDisplay, ...distractors]),
          explanation: `在「${analysis.word}」中，字根 ${primaryRoot.morpheme} (原型: ${primaryRoot.originalForm}) 代表「${primaryRoot.meaning}」。`
        });
      }
    });

    // Pick a well-balanced set of up to 6-8 questions
    const finalSet = shuffleArray(generated).slice(0, Math.min(8, generated.length));
    setQuestions(finalSet);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setUserAnswers({});
    setIsQuizCompleted(false);
  };

  // Re-generate when modal opens
  React.useEffect(() => {
    if (isOpen) {
      generateQuiz();
    }
  }, [isOpen, currentStage.id]);

  const currentQ = questions[currentIndex];

  const handleSelectOption = (option: string) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(option);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer || !currentQ || isAnswerSubmitted) return;
    const isCorrect = selectedAnswer === currentQ.correctAnswer;
    setIsAnswerSubmitted(true);
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    setUserAnswers((prev) => ({
      ...prev,
      [currentIndex]: { selected: selectedAnswer, isCorrect }
    }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const handlePlayAudio = (word: string) => {
    setIsPlayingAudio(true);
    speakWord(word, { lang: 'en-US', rate: 0.85 }, {
      onEnd: () => setIsPlayingAudio(false),
      onError: () => setIsPlayingAudio(false)
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        id="vocabulary-quiz-modal"
        className="relative bg-white border-2 border-slate-900 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-150"
      >
        {/* Top Header */}
        <div className="bg-slate-900 text-white px-4 sm:px-6 py-3.5 flex items-center justify-between shrink-0 border-b-2 border-slate-900">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="p-1.5 bg-yellow-400 text-slate-950 rounded-lg shadow-xs">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black tracking-tight text-white">
                  階梯構詞測驗 (Vocabulary Quiz)
                </h2>
                <span className="px-2 py-0.5 bg-yellow-400/20 text-yellow-300 font-mono font-bold text-[11px] rounded border border-yellow-400/40">
                  Level {currentStage.levelNumber}
                </span>
              </div>
              <p className="text-[11px] text-slate-300">
                {currentStage.name} • 語素拆解與核心語意檢測
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            title="關閉測驗"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quiz Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
          {!isQuizCompleted && currentQ ? (
            <div className="space-y-4">
              {/* Progress & Question Tracker */}
              <div className="flex items-center justify-between text-xs font-bold text-slate-600">
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded border border-indigo-200 font-mono">
                    第 {currentIndex + 1} / {questions.length} 題
                  </span>
                  {currentQ.contextNote && (
                    <span className="text-[11px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      {currentQ.contextNote}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1 text-slate-700 font-mono">
                  <span>得分:</span>
                  <span className="text-emerald-600 font-black">{score}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden border border-slate-200">
                <div
                  className="bg-yellow-400 h-full transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                />
              </div>

              {/* Question Card */}
              <div className="bg-slate-50 border-2 border-slate-900 rounded-xl p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
                    {currentQ.type === 'definition' ? '語意辨析題' : '構詞語素題'}
                  </span>
                  <button
                    type="button"
                    onClick={() => handlePlayAudio(currentQ.word)}
                    disabled={isPlayingAudio}
                    className={`p-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 transition-all cursor-pointer ${
                      isPlayingAudio ? 'bg-amber-100 text-amber-900 animate-pulse' : ''
                    }`}
                    title="播放單字發音"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {currentQ.prompt}
                </h3>
              </div>

              {/* Multiple Choice Options */}
              <div className="grid grid-cols-1 gap-2.5">
                {currentQ.options.map((option, oIdx) => {
                  const isSelected = selectedAnswer === option;
                  const isCorrect = option === currentQ.correctAnswer;
                  
                  let btnStyle = 'bg-white border-slate-300 text-slate-800 hover:border-slate-900 hover:bg-slate-50';
                  if (isSelected && !isAnswerSubmitted) {
                    btnStyle = 'bg-indigo-50 border-indigo-600 text-indigo-950 ring-2 ring-indigo-500/20';
                  } else if (isAnswerSubmitted) {
                    if (isCorrect) {
                      btnStyle = 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold';
                    } else if (isSelected && !isCorrect) {
                      btnStyle = 'bg-rose-50 border-rose-500 text-rose-950 line-through';
                    } else {
                      btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      type="button"
                      disabled={isAnswerSubmitted}
                      onClick={() => handleSelectOption(option)}
                      className={`p-3 sm:p-3.5 rounded-xl border-2 text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center font-mono font-bold text-xs text-slate-600 shrink-0">
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        <span>{option}</span>
                      </div>
                      {isAnswerSubmitted && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      )}
                      {isAnswerSubmitted && isSelected && !isCorrect && (
                        <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Reveal after submit */}
              {isAnswerSubmitted && (
                <div className="p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-200 text-xs text-slate-700 space-y-1.5 animate-in fade-in duration-150">
                  <div className="font-bold text-indigo-950 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-indigo-600" />
                    <span>解析與形態邏輯：</span>
                  </div>
                  <p className="leading-relaxed">{currentQ.explanation}</p>
                </div>
              )}
            </div>
          ) : isQuizCompleted ? (
            /* Quiz Results Screen */
            <div className="py-6 text-center space-y-5">
              <div className="inline-flex p-4 bg-yellow-100 text-slate-950 rounded-2xl border-2 border-slate-900 shadow-sm animate-in zoom-in-75">
                <Trophy className="w-12 h-12 text-yellow-600" />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  測驗完成！
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  {currentStage.name} • 階段學習檢測成果
                </p>
              </div>

              <div className="inline-block bg-slate-900 text-white px-6 py-3.5 rounded-xl border-2 border-slate-900">
                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">總得分</div>
                <div className="text-3xl sm:text-4xl font-mono font-black text-yellow-400">
                  {score} / {questions.length}
                </div>
                <div className="text-[11px] text-slate-300 mt-0.5">
                  正確率 {Math.round((score / (questions.length || 1)) * 100)}%
                </div>
              </div>

              {/* Review Word List */}
              <div className="text-left bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                <div className="text-xs font-bold text-slate-700">階梯單字掌握回顧：</div>
                <div className="flex flex-wrap gap-2">
                  {currentStage.words.map((item, wIdx) => {
                    const isMastered = studyProgress.masteredWords.includes(item.word.toLowerCase());
                    return (
                      <div
                        key={wIdx}
                        className="inline-flex items-center gap-1.5 bg-white border border-slate-200 px-2.5 py-1 rounded-lg text-xs"
                      >
                        <span className="font-mono font-bold text-slate-900">{item.word}</span>
                        <button
                          type="button"
                          onClick={() => onToggleMastered(item.word)}
                          className={`text-[10px] font-bold px-1.5 py-0.5 rounded cursor-pointer transition-colors ${
                            isMastered
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-slate-100 text-slate-600 hover:bg-yellow-300'
                          }`}
                        >
                          {isMastered ? '已掌握 ✓' : '標記掌握'}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : null}
        </div>

        {/* Bottom Actions */}
        <div className="bg-slate-50 border-t-2 border-slate-900 px-4 sm:px-6 py-3 flex items-center justify-between shrink-0">
          {!isQuizCompleted ? (
            <>
              <button
                type="button"
                onClick={onClose}
                className="px-3.5 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-700 font-bold text-xs hover:bg-slate-100 transition-colors cursor-pointer"
              >
                結束測驗
              </button>

              {!isAnswerSubmitted ? (
                <button
                  type="button"
                  disabled={!selectedAnswer}
                  onClick={handleSubmitAnswer}
                  className="px-5 py-2 rounded-lg bg-slate-900 text-yellow-300 disabled:opacity-40 font-bold text-xs border border-slate-900 hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  確認答案
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs border border-indigo-700 flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <span>{currentIndex < questions.length - 1 ? '下一題' : '查看成績'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </>
          ) : (
            <div className="flex items-center justify-between w-full">
              <button
                type="button"
                onClick={generateQuiz}
                className="px-4 py-2 rounded-lg border-2 border-slate-900 bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>重新測驗</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-yellow-400 font-bold text-xs border border-slate-900 transition-colors cursor-pointer"
              >
                完成
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

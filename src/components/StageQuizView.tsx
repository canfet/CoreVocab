import React, { useState, useEffect, useMemo } from 'react';
import {
  CheckCircle2,
  XCircle,
  Shuffle,
  Volume2,
  ArrowRight,
  Sparkles,
  Zap,
  Award,
  RotateCcw,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { CurriculumStage, CurriculumWordItem } from '../types';
import { capitalizeWord } from '../utils/format';
import { speakWord } from '../utils/speech';

interface StageQuizViewProps {
  stage: CurriculumStage;
  masteredWords: string[];
  onToggleMastered: (word: string) => void;
  onSelectWord: (word: string) => void;
  onClose?: () => void;
}

type QuestionType = 'MEANING' | 'REVERSE_MEANING' | 'SYNTHESIS' | 'FORMULA';

interface GeneratedQuestion {
  id: string;
  type: QuestionType;
  typeLabel: string;
  typeBadgeColor: string;
  wordItem: CurriculumWordItem;
  questionText: string;
  subPrompt?: string;
  options: { id: string; text: string; isCorrect: boolean }[];
  correctOptionId: string;
  explanation: {
    formula: string;
    meaning: string;
    note?: string;
  };
}

const MAX_QUESTIONS_PER_ROUND = 20;

export const StageQuizView: React.FC<StageQuizViewProps> = ({
  stage,
  masteredWords,
  onToggleMastered,
  onSelectWord,
  onClose
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [stats, setStats] = useState({ totalAnswered: 0, correctCount: 0, currentStreak: 0, bestStreak: 0 });
  const [randomSeed, setRandomSeed] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Generate randomized question pool focusing strictly on practical vocabulary skills
  // (Meaning, Reverse Meaning, Word Synthesis, Morpheme Formula) - NO linguistics/family trivia questions
  const questions = useMemo<GeneratedQuestion[]>(() => {
    if (!stage.words || stage.words.length === 0) return [];

    const qTypes: QuestionType[] = ['MEANING', 'REVERSE_MEANING', 'SYNTHESIS', 'FORMULA'];
    const generated: GeneratedQuestion[] = [];

    // Shuffle stage words and limit to MAX_QUESTIONS_PER_ROUND
    const shuffledWords = [...stage.words]
      .sort(() => Math.random() - 0.5)
      .slice(0, MAX_QUESTIONS_PER_ROUND);

    shuffledWords.forEach((wordObj, idx) => {
      const qType = qTypes[idx % qTypes.length];
      const otherWords = stage.words.filter((w) => w.word.toLowerCase() !== wordObj.word.toLowerCase());

      if (qType === 'MEANING') {
        // 1. 單詞看字選釋義
        const distractors = otherWords
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
          .map((w) => w.meaning);

        const allOptions = [wordObj.meaning, ...distractors]
          .sort(() => Math.random() - 0.5)
          .map((m, oIdx) => ({
            id: `opt-${oIdx}`,
            text: m,
            isCorrect: m === wordObj.meaning
          }));

        generated.push({
          id: `q-${stage.id}-${wordObj.word}-mean`,
          type: 'MEANING',
          typeLabel: '📖 詞義理解題',
          typeBadgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
          wordItem: wordObj,
          questionText: `單詞「${capitalizeWord(wordObj.word)}」的正確中文涵義是？`,
          subPrompt: `語素線索：${wordObj.focus}`,
          options: allOptions,
          correctOptionId: allOptions.find((o) => o.isCorrect)!.id,
          explanation: {
            formula: wordObj.focus,
            meaning: wordObj.meaning,
            note: `單詞「${capitalizeWord(wordObj.word)}」透過語素積木「${wordObj.focus}」合成現代語意「${wordObj.meaning}」。`
          }
        });
      } else if (qType === 'REVERSE_MEANING') {
        // 2. 中文釋義選英文單詞
        const distractors = otherWords
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
          .map((w) => capitalizeWord(w.word));

        const allOptions = [capitalizeWord(wordObj.word), ...distractors]
          .sort(() => Math.random() - 0.5)
          .map((w, oIdx) => ({
            id: `opt-${oIdx}`,
            text: w,
            isCorrect: w.toLowerCase() === wordObj.word.toLowerCase()
          }));

        generated.push({
          id: `q-${stage.id}-${wordObj.word}-rev`,
          type: 'REVERSE_MEANING',
          typeLabel: '🎯 單詞識別題',
          typeBadgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
          wordItem: wordObj,
          questionText: `中文涵義為「${wordObj.meaning}」，對應的英文單詞是？`,
          subPrompt: `構詞積木提示：${wordObj.focus}`,
          options: allOptions,
          correctOptionId: allOptions.find((o) => o.isCorrect)!.id,
          explanation: {
            formula: wordObj.focus,
            meaning: wordObj.meaning,
            note: `「${wordObj.meaning}」對應的單詞為 ${capitalizeWord(wordObj.word)}（${wordObj.focus}）。`
          }
        });
      } else if (qType === 'SYNTHESIS') {
        // 3. 語素拼裝合成單詞
        const distractors = otherWords
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
          .map((w) => capitalizeWord(w.word));

        const allOptions = [capitalizeWord(wordObj.word), ...distractors]
          .sort(() => Math.random() - 0.5)
          .map((w, oIdx) => ({
            id: `opt-${oIdx}`,
            text: w,
            isCorrect: w.toLowerCase() === wordObj.word.toLowerCase()
          }));

        generated.push({
          id: `q-${stage.id}-${wordObj.word}-syn`,
          type: 'SYNTHESIS',
          typeLabel: '🧩 構詞合成題',
          typeBadgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
          wordItem: wordObj,
          questionText: `根據語素積木「{ ${wordObj.focus} }」，合成後的正確英文單詞是？`,
          subPrompt: `釋義提示：${wordObj.meaning}`,
          options: allOptions,
          correctOptionId: allOptions.find((o) => o.isCorrect)!.id,
          explanation: {
            formula: wordObj.focus,
            meaning: wordObj.meaning,
            note: `將語素 { ${wordObj.focus} } 組合即為 ${capitalizeWord(wordObj.word)}（${wordObj.meaning}）。`
          }
        });
      } else {
        // 4. 語素拆解還原題
        const distractors = otherWords
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
          .map((w) => w.focus);

        const allOptions = [wordObj.focus, ...distractors]
          .sort(() => Math.random() - 0.5)
          .map((f, oIdx) => ({
            id: `opt-${oIdx}`,
            text: `{ ${f} }`,
            isCorrect: f === wordObj.focus
          }));

        generated.push({
          id: `q-${stage.id}-${wordObj.word}-form`,
          type: 'FORMULA',
          typeLabel: '🔬 語素拆解題',
          typeBadgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
          wordItem: wordObj,
          questionText: `單詞「${capitalizeWord(wordObj.word)}」（${wordObj.meaning}）的語素構成方式是？`,
          subPrompt: `提示：觀察前綴與核心字根的組合`,
          options: allOptions,
          correctOptionId: allOptions.find((o) => o.isCorrect)!.id,
          explanation: {
            formula: wordObj.focus,
            meaning: wordObj.meaning,
            note: `單詞 ${capitalizeWord(wordObj.word)} 由語素積木 { ${wordObj.focus} } 構成。`
          }
        });
      }
    });

    return generated;
  }, [stage, randomSeed]);

  // Reset question state when stage changes
  useEffect(() => {
    setCurrentQuestionIndex(0);
    setSelectedOptionId(null);
    setIsAnswerSubmitted(false);
    setIsQuizFinished(false);
    setStats({ totalAnswered: 0, correctCount: 0, currentStreak: 0, bestStreak: 0 });
  }, [stage.id]);

  const currentQ = questions[currentQuestionIndex] || questions[0];

  if (!currentQ && !isQuizFinished) {
    return (
      <div className="bg-white border-2 border-slate-900 rounded-xl p-8 text-center space-y-3">
        <p className="text-slate-600 font-bold">目前階梯尚無題庫資料</p>
      </div>
    );
  }

  const handleSelectOption = (optId: string) => {
    if (isAnswerSubmitted) return;
    setSelectedOptionId(optId);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOptionId || isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);

    const isCorrect = selectedOptionId === currentQ.correctOptionId;
    setStats((prev) => {
      const newStreak = isCorrect ? prev.currentStreak + 1 : 0;
      return {
        totalAnswered: prev.totalAnswered + 1,
        correctCount: isCorrect ? prev.correctCount + 1 : prev.correctCount,
        currentStreak: newStreak,
        bestStreak: Math.max(prev.bestStreak, newStreak)
      };
    });

    handlePronounce();
  };

  const handleNextQuestion = () => {
    setSelectedOptionId(null);
    setIsAnswerSubmitted(false);
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setRandomSeed((s) => s + 1);
    setCurrentQuestionIndex(0);
    setStats({ totalAnswered: 0, correctCount: 0, currentStreak: 0, bestStreak: 0 });
    setIsQuizFinished(false);
    setSelectedOptionId(null);
    setIsAnswerSubmitted(false);
  };

  const handlePronounce = () => {
    if (currentQ) {
      setIsPlayingAudio(true);
      speakWord(
        currentQ.wordItem.word,
        { lang: 'en-US', rate: 0.85 },
        {
          onStart: () => setIsPlayingAudio(true),
          onEnd: () => setIsPlayingAudio(false),
          onError: () => setIsPlayingAudio(false)
        }
      );
    }
  };

  const accuracy = stats.totalAnswered > 0 ? Math.round((stats.correctCount / stats.totalAnswered) * 100) : 0;

  // 結算畫面
  if (isQuizFinished) {
    return (
      <div className="bg-white border-2 border-slate-900 rounded-xl p-6 sm:p-8 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] text-center space-y-6">
        <div className="mx-auto w-16 h-16 bg-yellow-400 border-2 border-slate-900 rounded-full flex items-center justify-center shadow-xs">
          <Award className="w-8 h-8 text-slate-900" />
        </div>
        
        <div className="space-y-1.5">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-serif">測驗完成！</h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium">
            您已完成 LEVEL {stage.levelNumber} 隨機抽取的 {questions.length} 題構詞測驗
          </p>
        </div>

        <div className="bg-slate-50 border-2 border-slate-900 rounded-xl p-4 flex justify-center divide-x-2 divide-slate-200">
          <div className="px-4 sm:px-8 text-center space-y-1">
            <div className="text-[11px] sm:text-xs font-bold text-slate-500">答對題數</div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-600">
              {stats.correctCount} <span className="text-sm sm:text-base text-slate-400 font-normal">/ {questions.length}</span>
            </div>
            <div className="text-[10px] sm:text-xs font-bold text-slate-500">正確率 {accuracy}%</div>
          </div>
          <div className="px-4 sm:px-8 text-center space-y-1">
            <div className="text-[11px] sm:text-xs font-bold text-slate-500">最高連對</div>
            <div className="text-2xl sm:text-3xl font-black text-amber-500 flex items-center justify-center gap-1">
              <Zap className="w-5 h-5 fill-amber-500 text-amber-500" />
              {stats.bestStreak}
            </div>
            <div className="text-[10px] sm:text-xs font-bold text-slate-500">連對紀錄</div>
          </div>
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleRestartQuiz}
            className="inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 bg-slate-900 hover:bg-slate-800 text-yellow-300 rounded-lg border-2 border-slate-900 font-bold text-xs sm:text-sm shadow-xs transition-transform active:translate-y-0.5 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>再測一次 (隨機重抽)</span>
          </button>
        </div>
      </div>
    );
  }

  const isMastered = currentQ ? masteredWords.includes(currentQ.wordItem.word.toLowerCase()) : false;
  const progressPercent = Math.round(((currentQuestionIndex + 1) / (questions.length || 1)) * 100);

  return (
    <div className="space-y-3.5">
      {/* Quiz Top Status & Score Bar */}
      <div className="bg-white border-2 border-slate-900 rounded-xl p-3 sm:p-4 shadow-xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="p-1.5 bg-yellow-400 text-slate-950 rounded-lg font-black border border-slate-900 shrink-0">
            <Award className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold text-slate-900">
                LEVEL {stage.levelNumber} 隨機實戰測驗
              </span>
              <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-300">
                {currentQuestionIndex + 1} / {questions.length}
              </span>
            </div>
            {/* Progress bar */}
            <div className="w-32 sm:w-48 bg-slate-100 h-1.5 rounded-full overflow-hidden border border-slate-200 mt-1">
              <div
                className="bg-indigo-600 h-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Live Score Counter */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="text-right">
            <div className="text-[10px] text-slate-400 font-bold uppercase">答對率</div>
            <div className="text-xs sm:text-sm font-mono font-black text-emerald-600">
              {stats.correctCount} / {stats.totalAnswered} ({accuracy}%)
            </div>
          </div>

          <div className="h-6 w-px bg-slate-200" />

          <div className="text-right">
            <div className="text-[10px] text-slate-400 font-bold uppercase">連對</div>
            <div className="text-xs sm:text-sm font-mono font-black text-amber-600 flex items-center gap-0.5 justify-end">
              <Zap className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>{stats.currentStreak}</span>
            </div>
          </div>

          <button
            onClick={handleRestartQuiz}
            className="p-1.5 rounded-lg border border-slate-300 hover:border-slate-900 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-all cursor-pointer flex items-center gap-1"
            title="重新洗牌題庫並重新開始"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">重抽</span>
          </button>
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-white border-2 border-slate-900 rounded-xl p-4 sm:p-5 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] space-y-4">
        {/* Question Header & Type Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${currentQ.typeBadgeColor}`}>
              {currentQ.typeLabel}
            </span>
            <span className="text-xs font-mono font-bold text-slate-400">
              第 {currentQuestionIndex + 1} 題
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePronounce}
              className={`px-2 py-1 rounded border border-slate-300 hover:border-slate-900 transition-colors cursor-pointer flex items-center gap-1 text-xs font-bold ${
                isPlayingAudio ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
              title="朗讀關聯單字發音"
            >
              <Volume2 className={`w-3.5 h-3.5 ${isPlayingAudio ? 'animate-pulse' : ''}`} />
              <span className="text-[11px] font-mono">發音</span>
            </button>

            <button
              onClick={() => onToggleMastered(currentQ.wordItem.word)}
              className={`px-2.5 py-1 rounded text-xs font-bold border transition-colors cursor-pointer flex items-center gap-1 ${
                isMastered
                  ? 'bg-emerald-100 border-emerald-400 text-emerald-800'
                  : 'bg-slate-100 border-slate-300 text-slate-600 hover:border-slate-800'
              }`}
              title="切換此詞的已掌握狀態"
            >
              <CheckCircle2 className={`w-3.5 h-3.5 ${isMastered ? 'text-emerald-600' : 'text-slate-400'}`} />
              <span>{isMastered ? '已掌握' : '標記掌握'}</span>
            </button>
          </div>
        </div>

        {/* Question Prompt */}
        <div className="space-y-1.5">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
            {currentQ.questionText}
          </h3>
          {currentQ.subPrompt && (
            <p className="text-xs text-slate-500">
              {currentQ.subPrompt}
            </p>
          )}
        </div>

        {/* 4 Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          {currentQ.options.map((opt, idx) => {
            const letter = ['A', 'B', 'C', 'D'][idx];
            const isSelected = selectedOptionId === opt.id;
            const isCorrect = opt.isCorrect;

            let buttonStyle = 'bg-white border-slate-300 text-slate-800 hover:border-slate-900 hover:bg-slate-50';
            let badgeStyle = 'bg-slate-100 text-slate-600 border-slate-300';

            if (isAnswerSubmitted) {
              if (isCorrect) {
                buttonStyle = 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold ring-2 ring-emerald-500/20';
                badgeStyle = 'bg-emerald-600 text-white border-emerald-600';
              } else if (isSelected && !isCorrect) {
                buttonStyle = 'bg-red-50 border-red-500 text-red-900 font-medium line-through';
                badgeStyle = 'bg-red-500 text-white border-red-500';
              } else {
                buttonStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                badgeStyle = 'bg-slate-200 text-slate-500 border-slate-300';
              }
            } else if (isSelected) {
              buttonStyle = 'bg-indigo-50 border-indigo-600 text-indigo-950 font-bold ring-2 ring-indigo-500/30';
              badgeStyle = 'bg-indigo-600 text-white border-indigo-600';
            }

            return (
              <button
                key={opt.id}
                onClick={() => handleSelectOption(opt.id)}
                disabled={isAnswerSubmitted}
                className={`p-3 rounded-xl border-2 text-left text-xs sm:text-sm flex items-start gap-2.5 transition-all cursor-pointer ${buttonStyle}`}
              >
                <span className={`w-6 h-6 rounded-md font-mono font-black text-xs flex items-center justify-center shrink-0 border ${badgeStyle}`}>
                  {letter}
                </span>
                <span className="mt-0.5 leading-snug flex-1 break-words">
                  {opt.text}
                </span>
                {isAnswerSubmitted && isCorrect && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                )}
                {isAnswerSubmitted && isSelected && !isCorrect && (
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                )}
              </button>
            );
          })}
        </div>

        {/* Action Controls: Submit or Next */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-slate-100">
          <div className="text-xs text-slate-500">
            {!isAnswerSubmitted ? (
              <span>點選最適切的答案，然後點擊「確認送出」</span>
            ) : (
              <span className="font-bold flex items-center gap-1.5">
                {selectedOptionId === currentQ.correctOptionId ? (
                  <span className="text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    太棒了！回答正確！
                  </span>
                ) : (
                  <span className="text-red-600 flex items-center gap-1">
                    <XCircle className="w-4 h-4 text-red-500" />
                    回答錯誤，請參考下方解析鞏固記憶。
                  </span>
                )}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {!isAnswerSubmitted ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={!selectedOptionId}
                className={`px-5 py-2 rounded-lg border-2 border-slate-900 font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-1.5 ${
                  selectedOptionId
                    ? 'bg-yellow-400 hover:bg-yellow-300 text-slate-950 cursor-pointer'
                    : 'bg-slate-200 text-slate-400 border-slate-300 cursor-not-allowed'
                }`}
              >
                <span>確認送出</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-yellow-300 rounded-lg border-2 border-slate-900 font-bold text-xs shadow-xs transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>{currentQuestionIndex < questions.length - 1 ? '下一題' : '查看結算'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Detailed Explanation Drawer after answer is submitted */}
        {isAnswerSubmitted && (
          <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 sm:p-4 space-y-2.5 animate-fade-in">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <div className="flex items-center gap-2">
                <span className="font-mono font-black text-xs sm:text-sm text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                  {capitalizeWord(currentQ.wordItem.word)}
                </span>
                <span className="text-xs font-bold text-slate-800">
                  {currentQ.explanation.meaning}
                </span>
              </div>

              <button
                onClick={() => {
                  onSelectWord(currentQ.wordItem.word);
                  if (onClose) onClose();
                }}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-900 hover:underline flex items-center gap-1 cursor-pointer"
                title="在主視窗中展開此單詞的完整形態學解析"
              >
                <span>主畫面完整解構</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="bg-white p-2.5 rounded-lg border border-slate-200 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">語素拆解</span>
                <div className="font-mono font-bold text-indigo-900">
                  {`{ ${currentQ.explanation.formula} }`}
                </div>
              </div>

              <div className="bg-white p-2.5 rounded-lg border border-slate-200 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">語意推導</span>
                <div className="text-slate-800 font-medium leading-relaxed">
                  {currentQ.explanation.note || currentQ.explanation.meaning}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
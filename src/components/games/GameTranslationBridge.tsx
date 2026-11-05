import React, { useState, useEffect } from 'react';
import { DifficultyLevel } from '../../types';
import { useLanguage } from '../../hooks/useLanguage';
import { useProgress } from '../../hooks/useProgress';
import { MascotXolida } from '../common/MascotXolida';
import { Clock, Zap, RotateCcw, CheckCircle2, ArrowRight } from 'lucide-react';

interface BridgeTask {
  id: string;
  russian: string;
  correctWords: string[];
  options: string[];
  grammarTipUz: string;
  grammarTipRu: string;
}

const BRIDGE_TASKS: Record<DifficultyLevel, BridgeTask[]> = {
  oson: [
    {
      id: 'b1',
      russian: 'Я студент.',
      correctWords: ['Men', 'talabaman.'],
      options: ['talabaman.', 'Men', 'talaba', 'talabamiz.'],
      grammarTipUz: 'Ot-kesimda -man shart: Men talabaman.',
      grammarTipRu: 'Именное сказуемое с -man: Men talabaman.',
    },
    {
      id: 'b2',
      russian: 'Мама дома.',
      correctWords: ['Ona', 'uyda.'],
      options: ['uyda.', 'Ona', 'uy', 'uydalar'],
      grammarTipUz: 'Ona (ega) uyda (kesim).',
      grammarTipRu: 'Ona (подлежащее) uyda (сказуемое).',
    },
    {
      id: 'b3',
      russian: 'Он читал книгу.',
      correctWords: ['U', 'kitobni', 'o‘qidi.'],
      options: ['o‘qidi.', 'kitobni', 'U', 'kitobga'],
      grammarTipUz: 'Fe’l (o‘qidi) gap oxirida keladi.',
      grammarTipRu: 'Глагол (o‘qidi) замыкает предложение.',
    },
  ],
  orta: [
    {
      id: 'b4',
      russian: 'Мы завтра пойдём в театр.',
      correctWords: ['Biz', 'ertaga', 'teatrga', 'boramiz.'],
      options: ['boramiz.', 'teatrga', 'ertaga', 'Biz', 'teatrda', 'boryapmiz.'],
      grammarTipUz: 'Ega + payt holi + o‘rin holi + kesim oxirida.',
      grammarTipRu: 'Подлежащее + время + место + сказуемое в конце.',
    },
    {
      id: 'b5',
      russian: 'Анвар написал другу письмо.',
      correctWords: ['Anvar', 'do‘stiga', 'xat', 'yozdi.'],
      options: ['yozdi.', 'xat', 'do‘stiga', 'Anvar', 'xatni', 'yozmoqda.'],
      grammarTipUz: 'Do‘stiga (kimga?) va xat (nimani?) so‘zlari fe’ldan oldin keladi.',
      grammarTipRu: 'Дополнения предшествуют сказуемому yozdi.',
    },
  ],
  qiyin: [
    {
      id: 'b6',
      russian: 'Если погода будет хорошей, мы пойдём гулять.',
      correctWords: ['Havo', 'yaxshi', 'bo‘lsa,', 'sayrga', 'chiqamiz.'],
      options: ['chiqamiz.', 'bo‘lsa,', 'yaxshi', 'Havo', 'sayrga', 'bo‘ladi', 'agar'],
      grammarTipUz: '-sa shart mayli orqali ifodalanadi.',
      grammarTipRu: 'Условие образуется аффиксом -sa.',
    },
    {
      id: 'b7',
      russian: 'Ребёнок, который читал интересную книгу, получил пятёрку.',
      correctWords: ['Qiziqarli', 'kitob', 'o‘qigan', 'bola', 'a’lo', 'baho', 'oldi.'],
      options: ['oldi.', 'baho', 'a’lo', 'bola', 'o‘qigan', 'kitob', 'Qiziqarli', 'qaysiki'],
      grammarTipUz: '«Который читал» o‘rniga «kitob o‘qigan bola» sifatdosh birikmasi keladi.',
      grammarTipRu: 'Причастный оборот «kitob o‘qigan bola» вместо придаточного.',
    },
  ],
};

export const GameTranslationBridge: React.FC = () => {
  const { language } = useLanguage();
  const { addXP, updateGameScore } = useProgress();

  const [difficulty, setDifficulty] = useState<DifficultyLevel>('oson');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [assembledWords, setAssembledWords] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(40);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [streak, setStreak] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const currentTasks = BRIDGE_TASKS[difficulty];
  const task = currentTasks[currentIdx % currentTasks.length];

  // Timer logic
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isTimerActive && timeLeft > 0 && !isSubmitted) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && !isSubmitted && isTimerActive) {
      handleTimeUp();
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isTimerActive, timeLeft, isSubmitted]);

  const handleTimeUp = () => {
    setIsSubmitted(true);
    setIsCorrect(false);
    setStreak(0);
  };

  const startChallenge = () => {
    setIsTimerActive(true);
    setTimeLeft(difficulty === 'oson' ? 40 : difficulty === 'orta' ? 35 : 30);
    setAssembledWords([]);
    setIsSubmitted(false);
    setIsCorrect(false);
  };

  const handleDifficultyChange = (diff: DifficultyLevel) => {
    setDifficulty(diff);
    setCurrentIdx(0);
    setAssembledWords([]);
    setIsTimerActive(false);
    setIsSubmitted(false);
    setTimeLeft(diff === 'oson' ? 40 : diff === 'orta' ? 35 : 30);
  };

  const handlePickWord = (w: string) => {
    if (isSubmitted) return;
    if (!isTimerActive) setIsTimerActive(true);
    setAssembledWords((prev) => [...prev, w]);
  };

  const handleRemoveWord = (index: number) => {
    if (isSubmitted) return;
    setAssembledWords((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCheck = () => {
    const isRight = assembledWords.join(' ') === task.correctWords.join(' ');
    setIsSubmitted(true);
    setIsCorrect(isRight);

    if (isRight) {
      const basePoints = difficulty === 'oson' ? 20 : difficulty === 'orta' ? 35 : 50;
      const speedBonus = Math.floor(timeLeft / 2);
      const earnedXP = basePoints + speedBonus;
      const nextStreak = streak + 1;
      setStreak(nextStreak);
      const newScore = totalScore + earnedXP;
      setTotalScore(newScore);
      addXP(earnedXP);
      updateGameScore('translation_bridge', newScore);
    } else {
      setStreak(0);
    }
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % currentTasks.length);
    setAssembledWords([]);
    setIsSubmitted(false);
    setIsCorrect(false);
    setTimeLeft(difficulty === 'oson' ? 40 : difficulty === 'orta' ? 35 : 30);
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span>«Tarjima ko‘prigi»</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300">
              Vaqtli sinov
            </span>
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            {language === 'uz'
              ? 'Ruscha gapni o‘zbekcha SOV tartibida tez va to‘g‘ri yig‘ing'
              : 'Быстро соберите перевод русского предложения в узбекском порядке SOV'}
          </p>
        </div>

        {/* Difficulty Selector */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl self-start sm:self-auto">
          {(['oson', 'orta', 'qiyin'] as DifficultyLevel[]).map((d) => (
            <button
              key={d}
              onClick={() => handleDifficultyChange(d)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors capitalize ${
                difficulty === d
                  ? 'bg-white dark:bg-slate-900 text-teal-600 dark:text-teal-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              {language === 'uz' ? (d === 'oson' ? 'Oson' : d === 'orta' ? 'O‘rta' : 'Qiyin') : (d === 'oson' ? 'Лёгкий' : d === 'orta' ? 'Средний' : 'Сложный')}
            </button>
          ))}
        </div>
      </div>

      {/* Timer & Streak Status Bar */}
      <div className="flex items-center justify-between my-4 px-1 text-xs font-bold">
        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
          <Clock className="w-4 h-4 text-teal-600" />
          <span>
            {language === 'uz' ? 'Qolgan vaqt:' : 'Время:'}{' '}
            <span className={`tabular-nums font-extrabold ${timeLeft < 10 ? 'text-red-500 animate-pulse' : 'text-teal-600'}`}>
              {timeLeft} soniya
            </span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
            <Zap className="w-4 h-4 fill-amber-500" />
            <span>Streak: {streak}x</span>
          </div>
          <div className="text-teal-700 dark:text-teal-400 font-extrabold">
            {totalScore} XP
          </div>
        </div>
      </div>

      {/* Russian Challenge Sentence */}
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
        <span className="text-[11px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block mb-1">
          {language === 'uz' ? 'Ruscha gap:' : 'Русское предложение:'}
        </span>
        <div className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
          «{task.russian}»
        </div>
      </div>

      {/* Assembled Uzbek Sentence Area */}
      <div className="my-5 min-h-[64px] p-3 rounded-2xl border-2 border-dashed border-teal-300 dark:border-teal-700/80 bg-teal-50/30 dark:bg-teal-950/20 flex flex-wrap items-center gap-2">
        {assembledWords.length === 0 ? (
          <span className="text-xs text-slate-400 italic">
            {language === 'uz'
              ? 'Pastdagi so‘zlarni bosing...'
              : 'Нажимайте слова ниже, чтобы собрать перевод...'}
          </span>
        ) : (
          assembledWords.map((w, idx) => (
            <button
              key={idx}
              onClick={() => handleRemoveWord(idx)}
              disabled={isSubmitted}
              className="px-3 py-1.5 rounded-xl bg-teal-600 text-white font-bold text-xs sm:text-sm shadow-xs hover:bg-teal-700 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer disabled:cursor-default"
            >
              <span>{w}</span>
              <span className="text-teal-200">×</span>
            </button>
          ))
        )}
      </div>

      {/* Word Options */}
      <div className="my-4">
        <span className="text-xs font-bold text-slate-500 mb-2 block">
          {language === 'uz' ? 'So‘zlar:' : 'Слова для выбора:'}
        </span>
        <div className="flex flex-wrap gap-2">
          {task.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handlePickWord(opt)}
              disabled={isSubmitted}
              className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold text-xs sm:text-sm border border-slate-200 dark:border-slate-700 active:scale-95 transition-transform cursor-pointer"
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Feedback & Mascot */}
      {isSubmitted && (
        <div className="mt-5 p-4 rounded-xl border bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 animate-in fade-in duration-200">
          <MascotXolida
            mood={isCorrect ? 'celebrating' : 'thinking'}
            message={
              isCorrect
                ? language === 'uz'
                  ? `Ofarin! Gap SOV tartibida a’lo darajada yig‘ildi: ${task.grammarTipUz}`
                  : `Блестяще! Предложение собрано точно: ${task.grammarTipRu}`
                : language === 'uz'
                ? `Vaqt tugadi yoki tartibda noaniqlik bor. Qoida: ${task.grammarTipUz}`
                : `Время истекло или порядок слов неверен. Правило: ${task.grammarTipRu}`
            }
            size="md"
          />
        </div>
      )}

      {/* Controls */}
      <div className="mt-6 flex items-center justify-end gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
        <button
          onClick={startChallenge}
          className="px-3 py-2 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{language === 'uz' ? 'Qayta urinish' : 'Сброс'}</span>
        </button>

        {!isSubmitted ? (
          <button
            onClick={handleCheck}
            disabled={assembledWords.length === 0}
            className="px-4 py-2 text-xs font-bold rounded-lg bg-teal-600 text-white hover:bg-teal-700 disabled:opacity-50 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{language === 'uz' ? 'Tekshirish' : 'Проверить'}</span>
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-4 py-2 text-xs font-bold rounded-lg bg-amber-500 text-slate-900 hover:bg-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <span>{language === 'uz' ? 'Keyingi topshiriq' : 'Следующее'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

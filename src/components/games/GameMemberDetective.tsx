import React, { useState } from 'react';
import { SentencePartType, DifficultyLevel } from '../../types';
import { SENTENCE_PARTS_META } from '../../i18n/translations';
import { useLanguage } from '../../hooks/useLanguage';
import { useProgress } from '../../hooks/useProgress';
import { MascotXolida } from '../common/MascotXolida';
import { CheckCircle2, RotateCcw, ArrowRight, Trophy, HelpCircle } from 'lucide-react';

interface DetectiveItem {
  id: string;
  difficulty: DifficultyLevel;
  sentenceWords: { word: string; correctPart: SentencePartType }[];
  translationRu: string;
  explanationUz: string;
  explanationRu: string;
}

const DETECTIVE_DATA: DetectiveItem[] = [
  {
    id: 'det1',
    difficulty: 'oson',
    sentenceWords: [
      { word: 'Bola', correctPart: 'ega' },
      { word: 'kitobni', correctPart: 'toldiruvchi' },
      { word: 'o‘qidi.', correctPart: 'kesim' },
    ],
    translationRu: 'Ребёнок прочитал книгу.',
    explanationUz: 'Bola — kim? (ega, —), kitobni — nimani? (to‘ldiruvchi, - - -), o‘qidi — nima qildi? (kesim, ═).',
    explanationRu: 'Bola — подлежащее (—), kitobni — дополнение (- - -), o‘qidi — сказуемое (═).',
  },
  {
    id: 'det2',
    difficulty: 'oson',
    sentenceWords: [
      { word: 'Yangi', correctPart: 'aniqlovchi' },
      { word: 'maktab', correctPart: 'ega' },
      { word: 'ochildi.', correctPart: 'kesim' },
    ],
    translationRu: 'Открылась новая школа.',
    explanationUz: 'Yangi — qanday? (aniqlovchi, 〜〜〜), maktab — nima? (ega), ochildi — nima qildi? (kesim).',
    explanationRu: 'Yangi — определение (〜〜〜), maktab — подлежащее, ochildi — сказуемое.',
  },
  {
    id: 'det3',
    difficulty: 'orta',
    sentenceWords: [
      { word: 'Biz', correctPart: 'ega' },
      { word: 'ertalab', correctPart: 'hol' },
      { word: 'bog‘da', correctPart: 'hol' },
      { word: 'yugurdik.', correctPart: 'kesim' },
    ],
    translationRu: 'Мы утром бегали в саду.',
    explanationUz: 'Biz — ega, ertalab — payt holi (- · -), bog‘da — o‘rin holi (- · -), yugurdik — kesim.',
    explanationRu: 'Biz — подлежащее, ertalab — обст. времени, bog‘da — обст. места, yugurdik — сказуемое.',
  },
  {
    id: 'det4',
    difficulty: 'orta',
    sentenceWords: [
      { word: 'Ustoz', correctPart: 'ega' },
      { word: 'o‘quvchilarga', correctPart: 'toldiruvchi' },
      { word: 'qiziqarli', correctPart: 'aniqlovchi' },
      { word: 'qoidani', correctPart: 'toldiruvchi' },
      { word: 'tushuntirdi.', correctPart: 'kesim' },
    ],
    translationRu: 'Учитель объяснил ученикам интересное правило.',
    explanationUz: 'Ustoz (ega), o‘quvchilarga (to‘ldiruvchi), qiziqarli (aniqlovchi), qoidani (to‘ldiruvchi), tushuntirdi (kesim).',
    explanationRu: 'Ustoz (подлежащее), o‘quvchilarga (дополнение), qiziqarli (определение), qoidani (дополнение), tushuntirdi (сказуемое).',
  },
  {
    id: 'det5',
    difficulty: 'qiyin',
    sentenceWords: [
      { word: 'Mohir', correctPart: 'aniqlovchi' },
      { word: 'usta', correctPart: 'ega' },
      { word: 'dutorga', correctPart: 'toldiruvchi' },
      { word: 'ipak', correctPart: 'aniqlovchi' },
      { word: 'torlarni', correctPart: 'toldiruvchi' },
      { word: 'mahorat', correctPart: 'hol' },
      { word: 'bilan', correctPart: 'hol' },
      { word: 'taqdi.', correctPart: 'kesim' },
    ],
    translationRu: 'Искусный мастер с мастерством натянул шелковые струны на дутар.',
    explanationUz: 'Mohir (aniqlovchi), usta (ega), dutorga (to‘ldiruvchi), ipak (aniqlovchi), torlarni (to‘ldiruvchi), mahorat bilan (tarz holi), taqdi (kesim).',
    explanationRu: 'Разбор всех членов сложного предложения выполнен безупречно!',
  },
];

export const GameMemberDetective: React.FC = () => {
  const { language } = useLanguage();
  const { addXP, updateGameScore } = useProgress();

  const [difficulty, setDifficulty] = useState<DifficultyLevel>('oson');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [activeTool, setActiveTool] = useState<SentencePartType>('ega');
  const [userTags, setUserTags] = useState<Record<number, SentencePartType>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);

  const filteredItems = DETECTIVE_DATA.filter((item) => item.difficulty === difficulty);
  const currentItem = filteredItems[currentIdx % filteredItems.length];

  const handleDifficultyChange = (diff: DifficultyLevel) => {
    setDifficulty(diff);
    setCurrentIdx(0);
    setUserTags({});
    setIsSubmitted(false);
  };

  const handleWordClick = (wordIdx: number) => {
    if (isSubmitted) return;
    setUserTags((prev) => ({
      ...prev,
      [wordIdx]: activeTool,
    }));
  };

  const handleCheck = () => {
    let allRight = true;
    for (let i = 0; i < currentItem.sentenceWords.length; i++) {
      if (userTags[i] !== currentItem.sentenceWords[i].correctPart) {
        allRight = false;
        break;
      }
    }

    setIsSubmitted(true);
    setIsCorrect(allRight);

    if (allRight) {
      const earnedXP = difficulty === 'oson' ? 20 : difficulty === 'orta' ? 30 : 50;
      addXP(earnedXP);
      const newScore = score + earnedXP;
      setScore(newScore);
      updateGameScore('member_detective', newScore);
    }
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % filteredItems.length);
    setUserTags({});
    setIsSubmitted(false);
    setIsCorrect(false);
  };

  const handleReset = () => {
    setUserTags({});
    setIsSubmitted(false);
    setIsCorrect(false);
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-sm">
      {/* Header & Difficulty */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span>«Bo‘lak detektivi»</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
              Sintaksis
            </span>
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            {language === 'uz'
              ? 'Pastdagi asbobni tanlang va gapdagi so‘zlarni mos bo‘lak sifatida belgilang'
              : 'Выберите член предложения и кликайте по словам для их разметки'}
          </p>
        </div>

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

      {/* Detective Tool Selector */}
      <div className="my-4">
        <span className="text-xs font-bold text-slate-600 dark:text-slate-300 block mb-2">
          {language === 'uz' ? 'Belgilash uchun bo‘lakni tanlang:' : 'Выберите инструмент для разметки:'}
        </span>
        <div className="flex flex-wrap gap-2">
          {Object.values(SENTENCE_PARTS_META).map((p) => {
            const isCurrent = activeTool === p.type;
            return (
              <button
                key={p.type}
                onClick={() => setActiveTool(p.type)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 cursor-pointer ${
                  isCurrent
                    ? `${p.bgClass} ${p.borderClass} ${p.colorClass} ring-2 ring-teal-500/30 scale-105`
                    : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                }`}
              >
                <span className={`px-1 rounded ${p.underlineStyle}`}>{p.symbol}</span>
                <span>{language === 'uz' ? p.nameUz : p.nameRu}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Sentence Board */}
      <div className="my-6 p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-center">
        <span className="text-xs text-slate-400 mb-3 block">
          {language === 'uz' ? 'Gap ustiga bosing:' : 'Нажимайте на слова:'}
        </span>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xl sm:text-2xl font-bold">
          {currentItem.sentenceWords.map((item, idx) => {
            const currentTag = userTags[idx];
            const meta = currentTag ? SENTENCE_PARTS_META[currentTag] : null;

            return (
              <button
                key={idx}
                onClick={() => handleWordClick(idx)}
                disabled={isSubmitted}
                className={`relative px-3 py-2 rounded-xl transition-all cursor-pointer active:scale-95 ${
                  meta
                    ? `${meta.bgClass} ${meta.colorClass} ${meta.underlineStyle} shadow-xs`
                    : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-teal-400'
                }`}
              >
                <span>{item.word}</span>
                {meta && (
                  <span className="block text-[10px] font-semibold opacity-75 mt-0.5">
                    {language === 'uz' ? meta.nameUz : meta.nameRu}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-4 text-xs text-slate-500 dark:text-slate-400 italic">
          «{currentItem.translationRu}»
        </div>
      </div>

      {/* Feedback & Mascot */}
      {isSubmitted && (
        <div className="mt-5 p-4 rounded-xl border bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700">
          <MascotXolida
            mood={isCorrect ? 'celebrating' : 'thinking'}
            message={
              isCorrect
                ? language === 'uz'
                  ? `Ofarin! Barcha bo‘laklar bekamu ko‘st aniqlandi: ${currentItem.explanationUz}`
                  : `Блестяще! Все члены предложения определены верно: ${currentItem.explanationRu}`
                : language === 'uz'
                ? `Ba’zi bo‘laklar adashdi. Qayta tekshiring: ${currentItem.explanationUz}`
                : `Есть неточности. Попробуйте еще раз: ${currentItem.explanationRu}`
            }
            size="md"
          />
        </div>
      )}

      {/* Controls */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2 text-xs font-bold text-teal-700 dark:text-teal-400">
          <Trophy className="w-4 h-4 text-amber-500" />
          <span>{language === 'uz' ? 'To‘plangan ball:' : 'Счёт:'} {score} XP</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="px-3 py-2 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{language === 'uz' ? 'Tozalash' : 'Сбросить'}</span>
          </button>

          {!isSubmitted ? (
            <button
              onClick={handleCheck}
              disabled={Object.keys(userTags).length === 0}
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
              <span>{language === 'uz' ? 'Keyingi gap' : 'Следующее'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

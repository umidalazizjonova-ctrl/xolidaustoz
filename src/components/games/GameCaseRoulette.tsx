import React, { useState } from 'react';
import { DifficultyLevel } from '../../types';
import { useLanguage } from '../../hooks/useLanguage';
import { useProgress } from '../../hooks/useProgress';
import { MascotXolida } from '../common/MascotXolida';
import { RotateCw, CheckCircle2, ArrowRight, Trophy } from 'lucide-react';

interface CaseRouletteItem {
  id: string;
  targetCaseNameUz: string;
  targetCaseNameRu: string;
  stem: string;
  correctAffix: string;
  russianContext: string;
  meaningRu: string;
  meaningUz: string;
  options: string[];
}

const CASES = [
  { nameUz: 'Bosh kelishik', nameRu: 'Именительный', color: 'bg-blue-500' },
  { nameUz: 'Qaratqich (-ning)', nameRu: 'Родительный (-ning)', color: 'bg-indigo-500' },
  { nameUz: 'Tushum (-ni)', nameRu: 'Винительный (-ni)', color: 'bg-teal-500' },
  { nameUz: 'Jo‘nalish (-ga)', nameRu: 'Дательный (-ga)', color: 'bg-emerald-500' },
  { nameUz: 'O‘rin-payt (-da)', nameRu: 'Предложный (-da)', color: 'bg-amber-500' },
  { nameUz: 'Chiqish (-dan)', nameRu: 'Исходный (-dan)', color: 'bg-rose-500' },
];

const ROULETTE_DATA: CaseRouletteItem[] = [
  {
    id: 'r1',
    targetCaseNameUz: 'Jo‘nalish kelishigi (-ga)',
    targetCaseNameRu: 'Дательно-направительный (-ga)',
    stem: 'maktab',
    correctAffix: '-ga',
    russianContext: 'идти в школу (куда?)',
    meaningRu: 'Направление движения: maktabga (в школу).',
    meaningUz: 'Harakat yo‘nalishi: maktabga bormoq.',
    options: ['-ga', '-da', '-dan', '-ni'],
  },
  {
    id: 'r2',
    targetCaseNameUz: 'Tushum kelishigi (-ni)',
    targetCaseNameRu: 'Винительный падеж (-ni)',
    stem: 'kitob',
    correctAffix: '-ni',
    russianContext: 'читать книгу (что? прям. объект)',
    meaningRu: 'Прямой объект действия: kitobni o‘qimoq.',
    meaningUz: 'Harakat qaratilgan vositasiz obyekt: kitobni o‘qimoq.',
    options: ['-ni', '-ning', '-da', '-ga'],
  },
  {
    id: 'r3',
    targetCaseNameUz: 'O‘rin-payt kelishigi (-da)',
    targetCaseNameRu: 'Местно-временной (-da)',
    stem: 'shahar',
    correctAffix: '-da',
    russianContext: 'жить в городе (где?)',
    meaningRu: 'Место нахождения: shaharda yashamoq.',
    meaningUz: 'Harakat sodir bo‘layotgan o‘rin: shaharda yashamoq.',
    options: ['-da', '-dan', '-ga', '-ning'],
  },
  {
    id: 'r4',
    targetCaseNameUz: 'Chiqish kelishigi (-dan)',
    targetCaseNameRu: 'Исходный падеж (-dan)',
    stem: 'Toshkent',
    correctAffix: '-dan',
    russianContext: 'приехать из Ташкента (откуда?)',
    meaningRu: 'Исходный пункт движения: Toshkentdan kelmoq.',
    meaningUz: 'Harakatning boshlanish o‘rni: Toshkentdan kelmoq.',
    options: ['-dan', '-da', '-ga', '-ni'],
  },
  {
    id: 'r5',
    targetCaseNameUz: 'Qaratqich kelishigi (-ning)',
    targetCaseNameRu: 'Родительный принадлежности (-ning)',
    stem: 'sinf',
    correctAffix: '-ning',
    russianContext: 'комната этого класса (чей?)',
    meaningRu: 'Принадлежность предмета: sinfning xonasi.',
    meaningUz: 'Qarashlilik: sinfning xonasi.',
    options: ['-ning', '-ni', '-ga', '-da'],
  },
  {
    id: 'r6',
    targetCaseNameUz: 'Bosh kelishik (nol shakl)',
    targetCaseNameRu: 'Именительный падеж (без окончания)',
    stem: 'o‘quvchi',
    correctAffix: 'nol qo‘shimcha (—)',
    russianContext: 'ученик читает (кто? подлежащее)',
    meaningRu: 'Именительный падеж подлежащего: o‘quvchi o‘qiydi.',
    meaningUz: 'Bosh kelishikdagi ega: o‘quvchi o‘qiydi.',
    options: ['nol qo‘shimcha (—)', '-ni', '-ning', '-da'],
  },
];

export const GameCaseRoulette: React.FC = () => {
  const { language } = useLanguage();
  const { addXP, updateGameScore } = useProgress();

  const [currentIdx, setCurrentIdx] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const currentItem = ROULETTE_DATA[currentIdx % ROULETTE_DATA.length];

  const handleSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setIsSubmitted(false);
    setSelectedOption(null);

    const extraSpins = 4 * 360;
    const randomCaseIdx = Math.floor(Math.random() * ROULETTE_DATA.length);
    const stepAngle = 360 / CASES.length;
    const targetAngle = rotationAngle + extraSpins + randomCaseIdx * stepAngle;

    setRotationAngle(targetAngle);

    setTimeout(() => {
      setIsSpinning(false);
      setCurrentIdx(randomCaseIdx);
    }, 1200);
  };

  const handleSelectOption = (opt: string) => {
    if (isSubmitted) return;
    setSelectedOption(opt);
    setIsSubmitted(true);

    const isRight = opt === currentItem.correctAffix;
    if (isRight) {
      addXP(20);
      const newScore = score + 20;
      setScore(newScore);
      updateGameScore('case_roulette', newScore);
    }
  };

  const isCorrect = selectedOption === currentItem.correctAffix;

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-sm">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span>«Kelishik ruleti»</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300">
              6 ta kelishik
            </span>
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            {language === 'uz'
              ? 'Ruletkani aylantiring va tushgan kelishikning to‘g‘ri qo‘shimchasini toping'
              : 'Вращайте рулетку и подбирайте верное окончание выпавшего падежа'}
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-3 py-1.5 rounded-xl border border-amber-200 dark:border-amber-800">
          <Trophy className="w-4 h-4 text-amber-500" />
          <span>{language === 'uz' ? 'To‘plangan XP:' : 'XP:'} {score}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-6">
        {/* Roulette Wheel Visual */}
        <div className="flex flex-col items-center">
          <div className="relative w-52 h-52 sm:w-60 sm:h-60 flex items-center justify-center">
            {/* Outer pointer arrow */}
            <div className="absolute -top-3 z-20 w-0 h-0 border-x-8 border-x-transparent border-t-[18px] border-t-red-600 drop-shadow-md" />

            {/* Rotating Disc */}
            <div
              style={{
                transform: `rotate(${rotationAngle}deg)`,
                transition: isSpinning ? 'transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)' : 'none',
              }}
              className="w-full h-full rounded-full border-4 border-slate-800 shadow-xl overflow-hidden relative"
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {CASES.map((c, i) => {
                  const angle = (360 / CASES.length) * i;
                  return (
                    <g key={i} transform={`rotate(${angle} 100 100)`}>
                      <path
                        d="M100 100 L100 0 A100 100 0 0 1 186.6 50 Z"
                        fill={['#3b82f6', '#6366f1', '#0d9488', '#10b981', '#f59e0b', '#f43f5e'][i]}
                        stroke="#ffffff"
                        strokeWidth="1.5"
                      />
                      <text
                        x="130"
                        y="45"
                        transform="rotate(30 130 45)"
                        fill="#ffffff"
                        fontSize="9"
                        fontWeight="bold"
                        textAnchor="middle"
                      >
                        {c.nameUz.split(' ')[0]}
                      </text>
                    </g>
                  );
                })}
              </svg>
              {/* Center knob */}
              <div className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-slate-900 border-2 border-white shadow-md flex items-center justify-center text-white text-[10px] font-bold">
                6 ta
              </div>
            </div>
          </div>

          <button
            onClick={handleSpin}
            disabled={isSpinning}
            className="mt-4 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 active:scale-95 text-white font-bold text-xs flex items-center gap-2 shadow-sm cursor-pointer disabled:opacity-50"
          >
            <RotateCw className={`w-4 h-4 ${isSpinning ? 'animate-spin' : ''}`} />
            <span>{language === 'uz' ? 'Ruletkani aylantirish' : 'Вращать рулетку'}</span>
          </button>
        </div>

        {/* Challenge Box */}
        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block">
              {language === 'uz' ? 'Tushgan kelishik:' : 'Выпавший падеж:'}
            </span>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
              {language === 'uz' ? currentItem.targetCaseNameUz : currentItem.targetCaseNameRu}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {language === 'uz' ? 'Ruscha ma’nosi:' : 'Русский аналог:'} <span className="font-semibold text-slate-700 dark:text-slate-200">{currentItem.russianContext}</span>
            </p>
          </div>

          {/* Word stem prompt */}
          <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-xs text-slate-400 block mb-1">
              {language === 'uz' ? 'Asos so‘z:' : 'Основа слова:'}
            </span>
            <div className="text-xl font-extrabold text-teal-700 dark:text-teal-400 flex items-center gap-2">
              <span>{currentItem.stem}</span>
              <span className="text-slate-300 dark:text-slate-600">+ [ ? ]</span>
            </div>
          </div>

          {/* Option buttons */}
          <div>
            <span className="text-xs font-semibold text-slate-500 mb-2 block">
              {language === 'uz' ? 'To‘g‘ri qo‘shimchani tanlang:' : 'Выберите верное окончание:'}
            </span>
            <div className="grid grid-cols-2 gap-2">
              {currentItem.options.map((opt, i) => {
                const isThisSelected = selectedOption === opt;
                let btnStyle = 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 hover:border-teal-400';
                if (isSubmitted) {
                  if (opt === currentItem.correctAffix) {
                    btnStyle = 'bg-emerald-500 text-white border-emerald-500 font-bold';
                  } else if (isThisSelected) {
                    btnStyle = 'bg-rose-500 text-white border-rose-500 font-bold';
                  }
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(opt)}
                    disabled={isSubmitted || isSpinning}
                    className={`p-2.5 rounded-xl border text-sm font-bold transition-all cursor-pointer ${btnStyle}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Feedback & Mascot */}
          {isSubmitted && (
            <div className="pt-2 animate-in fade-in duration-200">
              <MascotXolida
                mood={isCorrect ? 'celebrating' : 'teaching'}
                message={
                  isCorrect
                    ? language === 'uz'
                      ? `To‘g‘ri! ${currentItem.meaningUz}`
                      : `Верно! ${currentItem.meaningRu}`
                    : language === 'uz'
                    ? `Noto‘g‘ri tanlandi. Eslab qoling: ${currentItem.meaningUz}`
                    : `Не совсем. Запомните: ${currentItem.meaningRu}`
                }
                size="sm"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

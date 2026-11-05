import React, { useState } from 'react';
import { DifficultyLevel } from '../../types';
import { useLanguage } from '../../hooks/useLanguage';
import { useProgress } from '../../hooks/useProgress';
import { MascotXolida } from '../common/MascotXolida';
import { AlertCircle, CheckCircle2, ArrowRight, Trophy } from 'lucide-react';

interface ErrorDetectiveItem {
  id: string;
  difficulty: DifficultyLevel;
  errorSentence: string;
  faultyWord: string;
  correctedSentence: string;
  errorCategoryUz: string;
  errorCategoryRu: string;
  explanationUz: string;
  explanationRu: string;
  options: string[];
  correctOptionIndex: number;
}

const ERROR_ITEMS: ErrorDetectiveItem[] = [
  {
    id: 'err1',
    difficulty: 'oson',
    errorSentence: 'Dadam do‘kondan qizillar olmalar sotib oldilar.',
    faultyWord: 'qizillar',
    correctedSentence: 'Dadam do‘kondan qizil olmalar sotib oldilar.',
    errorCategoryUz: 'Sifatning ko‘plikda kelishi (ruscha moslashuv xatosi)',
    errorCategoryRu: 'Согласование прилагательного во множественном числе',
    explanationUz: 'O‘zbek tilida sifat ot bilan sonda moslashmaydi: faqat «qizil olmalar» (qizillar emas!).',
    explanationRu: 'В узбекском языке прилагательное неизменно: qizil olmalar (не *qizillar olmalar!).',
    options: ['qizil olmalar', 'qizillar olmalar', 'qizillardan olmalar'],
    correctOptionIndex: 0,
  },
  {
    id: 'err2',
    difficulty: 'oson',
    errorSentence: 'Men o‘quvchi, 7-sinfda o‘qiyman.',
    faultyWord: 'o‘quvchi',
    correctedSentence: 'Men o‘quvchiman, 7-sinfda o‘qiyman.',
    errorCategoryUz: 'Ot-kesimda shaxs bog‘lamasining tushib qolishi',
    errorCategoryRu: 'Пропуск личного окончания (связки) в сказуемом',
    explanationUz: 'Ruscha «Я ученик» kabi bog‘lamasiz qoldirish xato. O‘zbek tilida -man shart: «Men o‘quvchiman».',
    explanationRu: 'В русском связка «есть» опускается. В узбекском обязательно окончание: Men o‘quvchiman.',
    options: ['Men o‘quvchiman', 'Men o‘quvchi', 'Men o‘quvchidan'],
    correctOptionIndex: 0,
  },
  {
    id: 'err3',
    difficulty: 'orta',
    errorSentence: 'Biz o‘qiymiz qiziqarli kitoblarni kutubxonada.',
    faultyWord: 'o‘qiymiz',
    correctedSentence: 'Biz kutubxonada qiziqarli kitoblarni o‘qiymiz.',
    errorCategoryUz: 'SVO tartibi (fe’lning o‘rtaga qo‘yilishi)',
    errorCategoryRu: 'Русский порядок SVO вместо узбекского SOV',
    explanationUz: 'O‘zbek tilida kesim gap oxirida keladi: «Biz kutubxonada qiziqarli kitoblarni o‘qiymiz».',
    explanationRu: 'Сказуемое должно стоять строго в самом конце: ... kitoblarni o‘qiymiz.',
    options: [
      'Biz kutubxonada qiziqarli kitoblarni o‘qiymiz.',
      'Biz o‘qiymiz qiziqarli kitoblarni kutubxonada.',
      'O‘qiymiz biz kutubxonada qiziqarli kitoblarni.',
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'err4',
    difficulty: 'orta',
    errorSentence: 'Toshkent shahar juda chiroyli va qadimiy.',
    faultyWord: 'shahar',
    correctedSentence: 'Toshkent shahri juda chiroyli va qadimiy.',
    errorCategoryUz: 'Izofatdagi -i egalik qo‘shimchasining yo‘qotilishi',
    errorCategoryRu: 'Потеря аффикса принадлежности -i в изафете',
    explanationUz: 'Shahar nomlarida ikkinchi so‘zga egalik qo‘shilishi shart: «Toshkent shahri».',
    explanationRu: 'В относительном изафете обязателен аффикс: Toshkent shahri (не Toshkent shahar!).',
    options: ['Toshkent shahri', 'Toshkent shahar', 'Toshkentning shahar'],
    correctOptionIndex: 0,
  },
  {
    id: 'err5',
    difficulty: 'qiyin',
    errorSentence: 'Sen bugun darsga bording?',
    faultyWord: 'bording?',
    correctedSentence: 'Sen bugun darsga bordingmi?',
    errorCategoryUz: 'So‘roq gapda -mi yuklamasining ishlatilmasligi',
    errorCategoryRu: 'Отсутствие вопросительной частицы -mi',
    explanationUz: 'O‘zbek tilida umumiy so‘roq -mi yuklamasisiz yasalmaydi: «bordingmi?».',
    explanationRu: 'Вопрос в узбекском оформляется частицей -mi, а не одной интонацией: bordingmi?',
    options: ['bordingmi?', 'bording?', 'bording-mi?'],
    correctOptionIndex: 0,
  },
  {
    id: 'err6',
    difficulty: 'qiyin',
    errorSentence: 'Bola, qaysiki kecha keldi, a’lochi ekan.',
    faultyWord: 'qaysiki',
    correctedSentence: 'Kecha kelgan bola a’lochi ekan.',
    errorCategoryUz: 'Ruscha «который»li ergash gapni noo‘rin kalka qilish',
    errorCategoryRu: 'Калька сложного предложения со словом «который»',
    explanationUz: 'O‘zbek tili sifatdoshli sodda qurilmani afzal ko‘radi: «Kecha kelgan bola».',
    explanationRu: 'Вместо сложного оборота узбекский использует причастие: «Kecha kelgan bola».',
    options: ['Kecha kelgan bola a’lochi ekan.', 'Bola, qaysiki kecha keldi...', 'Bola qaysi kelgan...'],
    correctOptionIndex: 0,
  },
];

export const GameErrorDetective: React.FC = () => {
  const { language } = useLanguage();
  const { addXP, updateGameScore } = useProgress();

  const [difficulty, setDifficulty] = useState<DifficultyLevel>('oson');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const filteredItems = ERROR_ITEMS.filter((item) => item.difficulty === difficulty);
  const currentItem = filteredItems[currentIdx % filteredItems.length];

  const handleDifficultyChange = (diff: DifficultyLevel) => {
    setDifficulty(diff);
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsSubmitted(false);
  };

  const handleSelectOption = (idx: number) => {
    if (isSubmitted) return;
    setSelectedOption(idx);
    setIsSubmitted(true);

    const isRight = idx === currentItem.correctOptionIndex;
    if (isRight) {
      const earnedXP = difficulty === 'oson' ? 20 : difficulty === 'orta' ? 30 : 45;
      addXP(earnedXP);
      const newScore = score + earnedXP;
      setScore(newScore);
      updateGameScore('error_detective', newScore);
    }
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % filteredItems.length);
    setSelectedOption(null);
    setIsSubmitted(false);
  };

  const isCorrect = selectedOption === currentItem.correctOptionIndex;

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span>«Xato detektivi»</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300">
              Tipik xatolar
            </span>
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            {language === 'uz'
              ? 'Rusiyzabon o‘quvchilarga xos sintaktik xatoni fosh qiling va to‘g‘ri variantni toping'
              : 'Разоблачите типичную ошибку русскоязычных учеников и выберите верный вариант'}
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

      {/* Target Problem Sentence */}
      <div className="my-5 p-4 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/60">
        <div className="flex items-center gap-2 text-xs font-bold text-rose-700 dark:text-rose-400 mb-1.5">
          <AlertCircle className="w-4 h-4" />
          <span>{language === 'uz' ? 'Xatoli gap:' : 'Предложение с ошибкой:'}</span>
          <span className="text-slate-400 dark:text-slate-500">·</span>
          <span className="text-[11px] font-normal text-rose-600/90 dark:text-rose-400/90">
            {language === 'uz' ? currentItem.errorCategoryUz : currentItem.errorCategoryRu}
          </span>
        </div>
        <div className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100">
          «{currentItem.errorSentence}»
        </div>
      </div>

      {/* Options for correction */}
      <div className="space-y-2.5 my-4">
        <span className="text-xs font-bold text-slate-600 dark:text-slate-300 block mb-1">
          {language === 'uz' ? 'Ushbu xatoni qanday to‘g‘rilash kerak?' : 'Как правильно исправить эту ошибку?'}
        </span>
        {currentItem.options.map((opt, i) => {
          const isSelected = selectedOption === i;
          let style = 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-teal-400';
          if (isSubmitted) {
            if (i === currentItem.correctOptionIndex) {
              style = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-800 dark:text-emerald-300 font-bold';
            } else if (isSelected) {
              style = 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-800 dark:text-rose-300 font-bold';
            }
          }

          return (
            <button
              key={i}
              onClick={() => handleSelectOption(i)}
              disabled={isSubmitted}
              className={`w-full p-3 rounded-xl border text-left text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${style}`}
            >
              <span>{opt}</span>
              {isSubmitted && i === currentItem.correctOptionIndex && (
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* Feedback & Mascot */}
      {isSubmitted && (
        <div className="mt-5 p-4 rounded-xl border bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 animate-in fade-in duration-200">
          <MascotXolida
            mood={isCorrect ? 'celebrating' : 'teaching'}
            message={
              isCorrect
                ? language === 'uz'
                  ? `To‘g‘ri! ${currentItem.explanationUz}`
                  : `Верно! ${currentItem.explanationRu}`
                : language === 'uz'
                ? `E’tibor bering: ${currentItem.explanationUz}`
                : `Обратите внимание: ${currentItem.explanationRu}`
            }
            size="md"
          />
        </div>
      )}

      {/* Controls */}
      <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2 text-xs font-bold text-teal-700 dark:text-teal-400">
          <Trophy className="w-4 h-4 text-amber-500" />
          <span>{language === 'uz' ? 'To‘plangan XP:' : 'XP:'} {score}</span>
        </div>

        {isSubmitted && (
          <button
            onClick={handleNext}
            className="px-4 py-2 text-xs font-bold rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <span>{language === 'uz' ? 'Keyingi vazifa' : 'Следующая'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

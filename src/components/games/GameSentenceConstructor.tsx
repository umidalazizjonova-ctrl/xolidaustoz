import React, { useState } from 'react';
import { DifficultyLevel } from '../../types';
import { useLanguage } from '../../hooks/useLanguage';
import { useProgress } from '../../hooks/useProgress';
import { MascotXolida } from '../common/MascotXolida';
import { CheckCircle2, RotateCcw, ArrowRight, Trophy } from 'lucide-react';

interface SentenceItem {
  id: string;
  difficulty: DifficultyLevel;
  words: string[];
  correctOrder: string[];
  translationRu: string;
  translationUz: string;
  explanationUz: string;
  explanationRu: string;
}

const GAME_DATA: SentenceItem[] = [
  // Oson (3 so‘z)
  {
    id: 'sc1',
    difficulty: 'oson',
    words: ['o‘qiydi', 'kitobni', 'bola'],
    correctOrder: ['bola', 'kitobni', 'o‘qiydi'],
    translationRu: 'Ребёнок читает книгу.',
    translationUz: 'Bola kitobni o‘qiydi.',
    explanationUz: 'SOV qoidasi: Bola (Ega) + kitobni (To‘ldiruvchi) + o‘qiydi (Kesim oxirida).',
    explanationRu: 'Порядок SOV: Подлежащее (Bola) + Дополнение (kitobni) + Сказуемое (o‘qiydi).',
  },
  {
    id: 'sc2',
    difficulty: 'oson',
    words: ['ichyapti', 'suv', 'Anvar'],
    correctOrder: ['Anvar', 'suv', 'ichyapti'],
    translationRu: 'Анвар пьёт воду.',
    translationUz: 'Anvar suv ichyapti.',
    explanationUz: 'Fe’l-kesim (ichyapti) o‘zbek tilida gapni yakunlaydi.',
    explanationRu: 'Глагол ichyapti в узбекском ставится в конец предложения.',
  },
  {
    id: 'sc3',
    difficulty: 'oson',
    words: ['boryapmiz', 'maktabga', 'biz'],
    correctOrder: ['biz', 'maktabga', 'boryapmiz'],
    translationRu: 'Мы идём в школу.',
    translationUz: 'Biz maktabga boryapmiz.',
    explanationUz: 'Harakat yo‘nalishi (maktabga) fe’ldan oldin keladi.',
    explanationRu: 'Направление движения (maktabga) предшествует глаголу boryapmiz.',
  },
  // O‘rta (4-5 so‘z)
  {
    id: 'sc4',
    difficulty: 'orta',
    words: ['yozdi', 'do‘stiga', 'chiroyli', 'xat', 'Malika'],
    correctOrder: ['Malika', 'do‘stiga', 'chiroyli', 'xat', 'yozdi'],
    translationRu: 'Малика написала красивое письмо другу.',
    translationUz: 'Malika do‘stiga chiroyli xat yozdi.',
    explanationUz: 'Malika (Ega) + do‘stiga (To‘ldiruvchi) + chiroyli xat (Aniqlovchi va to‘ldiruvchi) + yozdi (Kesim).',
    explanationRu: 'Подлежащее → Косвенное дополнение → Прямое дополнение → Сказуемое.',
  },
  {
    id: 'sc5',
    difficulty: 'orta',
    words: ['tomosha', 'kecha', 'qildik', 'biz', 'kinoni'],
    correctOrder: ['biz', 'kecha', 'kinoni', 'tomosha', 'qildik'],
    translationRu: 'Мы вчера посмотрели фильм.',
    translationUz: 'Biz kecha kinoni tomosha qildik.',
    explanationUz: 'Payt holi (kecha) va to‘ldiruvchi (kinoni) kesimdan oldin joylashadi.',
    explanationRu: 'Обстоятельство времени (kecha) и объект (kinoni) стоят перед составным сказуемым.',
  },
  // Qiyin (6+ so‘z)
  {
    id: 'sc6',
    difficulty: 'qiyin',
    words: ['o‘qishdi', 'yangi', 'o‘quvchilar', 'qiziqib', 'kutubxonada', 'kitoblarni'],
    correctOrder: ['o‘quvchilar', 'kutubxonada', 'yangi', 'kitoblarni', 'qiziqib', 'o‘qishdi'],
    translationRu: 'Ученики в библиотеке с интересом читали новые книги.',
    translationUz: 'O‘quvchilar kutubxonada yangi kitoblarni qiziqib o‘qishdi.',
    explanationUz: 'Ega (o‘quvchilar) + o‘rin holi + to‘ldiruvchi + tarz holi (qiziqib) + kesim (o‘qishdi).',
    explanationRu: 'Подлежащее → Обстоятельство места → Дополнение с определением → Обстоятельство образа действия → Сказуемое.',
  },
  {
    id: 'sc7',
    difficulty: 'qiyin',
    words: ['sayrga', 'bo‘lsa', 'yaxshi', 'chiqamiz', 'havo', 'ertalab'],
    correctOrder: ['ertalab', 'havo', 'yaxshi', 'bo‘lsa', 'sayrga', 'chiqamiz'],
    translationRu: 'Если утром погода будет хорошей, мы пойдём гулять.',
    translationUz: 'Ertalab havo yaxshi bo‘lsa, sayrga chiqamiz.',
    explanationUz: 'Shart ergash gap (-sa) bosh gapdan oldin keladi va harakat fe’li oxirida turadi.',
    explanationRu: 'Придаточная часть с -sa предшествует главной части.',
  },
];

export const GameSentenceConstructor: React.FC = () => {
  const { language } = useLanguage();
  const { addXP, updateGameScore } = useProgress();

  const [difficulty, setDifficulty] = useState<DifficultyLevel>('oson');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [availableWords, setAvailableWords] = useState<string[]>(() => {
    const list = GAME_DATA.filter((item) => item.difficulty === 'oson');
    return [...list[0].words].sort(() => Math.random() - 0.5);
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);

  const filteredItems = GAME_DATA.filter((item) => item.difficulty === difficulty);
  const currentItem = filteredItems[currentIdx % filteredItems.length];

  const handleDifficultyChange = (diff: DifficultyLevel) => {
    setDifficulty(diff);
    setCurrentIdx(0);
    setSelectedWords([]);
    setIsSubmitted(false);
    const newItems = GAME_DATA.filter((item) => item.difficulty === diff);
    setAvailableWords([...newItems[0].words].sort(() => Math.random() - 0.5));
  };

  const handlePickWord = (word: string, indexInAvailable: number) => {
    if (isSubmitted) return;
    setSelectedWords((prev) => [...prev, word]);
    setAvailableWords((prev) => prev.filter((_, idx) => idx !== indexInAvailable));
  };

  const handleRemoveWord = (word: string, indexInSelected: number) => {
    if (isSubmitted) return;
    setSelectedWords((prev) => prev.filter((_, idx) => idx !== indexInSelected));
    setAvailableWords((prev) => [...prev, word]);
  };

  const handleCheck = () => {
    if (selectedWords.length !== currentItem.correctOrder.length) return;
    const correct = selectedWords.join(' ') === currentItem.correctOrder.join(' ');
    setIsSubmitted(true);
    setIsCorrect(correct);

    if (correct) {
      const earnedXP = difficulty === 'oson' ? 15 : difficulty === 'orta' ? 25 : 40;
      addXP(earnedXP);
      const newScore = score + earnedXP;
      setScore(newScore);
      updateGameScore('sentence_constructor', newScore);
    }
  };

  const handleNext = () => {
    const nextIdx = (currentIdx + 1) % filteredItems.length;
    setCurrentIdx(nextIdx);
    setSelectedWords([]);
    setIsSubmitted(false);
    setIsCorrect(false);
    setAvailableWords([...filteredItems[nextIdx].words].sort(() => Math.random() - 0.5));
  };

  const handleReset = () => {
    setSelectedWords([]);
    setIsSubmitted(false);
    setIsCorrect(false);
    setAvailableWords([...currentItem.words].sort(() => Math.random() - 0.5));
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-sm">
      {/* Header & Difficulty selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span>«Gap konstruktori»</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300">
              SOV
            </span>
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            {language === 'uz'
              ? 'So‘zlarni to‘g‘ri tartibda bosib, o‘zbekcha gap tuzing (kesim oxirida bo‘lsin!)'
              : 'Соберите узбекское предложение в порядке SOV (глагол строго в конце!)'}
          </p>
        </div>

        {/* Difficulty buttons */}
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

      {/* Target translation prompt */}
      <div className="my-5 p-3.5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
        <span className="text-[11px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block mb-1">
          {language === 'uz' ? 'Tuzilishi kerak bo‘lgan ma’no:' : 'Целевое предложение:'}
        </span>
        <div className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100">
          «{language === 'uz' ? currentItem.translationRu : currentItem.translationRu}»
        </div>
        <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          {language === 'uz' ? 'O‘zbekcha tarjimasi:' : 'Перевод на узбекский:'} <span className="italic">{currentItem.translationUz}</span>
        </div>
      </div>

      {/* Construction Slot */}
      <div className="min-h-[70px] p-3 rounded-xl border-2 border-dashed border-teal-300 dark:border-teal-700/80 bg-teal-50/40 dark:bg-teal-950/20 flex flex-wrap items-center gap-2">
        {selectedWords.length === 0 ? (
          <span className="text-xs text-slate-400 italic">
            {language === 'uz'
              ? 'Pastdagi so‘zlarni ketma-ket bosing...'
              : 'Нажимайте слова снизу для сборки предложения...'}
          </span>
        ) : (
          selectedWords.map((word, idx) => (
            <button
              key={idx}
              onClick={() => handleRemoveWord(word, idx)}
              disabled={isSubmitted}
              className="px-3 py-2 rounded-lg bg-teal-600 text-white font-bold text-sm shadow-xs hover:bg-teal-700 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer disabled:cursor-default"
              title={language === 'uz' ? 'O‘chirish uchun bosing' : 'Нажмите, чтобы убрать'}
            >
              <span>{word}</span>
              <span className="text-teal-200 text-xs">×</span>
            </button>
          ))
        )}
      </div>

      {/* Available word fragments */}
      <div className="mt-5">
        <div className="text-xs font-semibold text-slate-500 mb-2">
          {language === 'uz' ? 'Mavjud so‘zlar:' : 'Доступные слова:'}
        </div>
        <div className="flex flex-wrap gap-2.5">
          {availableWords.map((word, idx) => (
            <button
              key={idx}
              onClick={() => handlePickWord(word, idx)}
              disabled={isSubmitted}
              className="px-3.5 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold text-sm border border-slate-200 dark:border-slate-700 transition-transform active:scale-95 cursor-pointer"
            >
              {word}
            </button>
          ))}
        </div>
      </div>

      {/* Feedback & Mascot */}
      {isSubmitted && (
        <div className="mt-6 p-4 rounded-xl border animate-in fade-in duration-200 bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700">
          <MascotXolida
            mood={isCorrect ? 'celebrating' : 'thinking'}
            message={
              isCorrect
                ? language === 'uz'
                  ? `${currentItem.explanationUz} Barakalla!`
                  : `${currentItem.explanationRu} Отлично!`
                : language === 'uz'
                ? `Biroz noaniq. Qoidani eslang: ${currentItem.explanationUz}`
                : `Не совсем точно. Помните: ${currentItem.explanationRu}`
            }
            size="md"
          />
        </div>
      )}

      {/* Actions */}
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
            <span>{language === 'uz' ? 'Qayta yig‘ish' : 'Сброс'}</span>
          </button>

          {!isSubmitted ? (
            <button
              onClick={handleCheck}
              disabled={selectedWords.length === 0}
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

import React, { useState, useEffect } from 'react';
import { DifficultyLevel } from '../../types';
import { useLanguage } from '../../hooks/useLanguage';
import { useProgress } from '../../hooks/useProgress';
import { MascotXolida } from '../common/MascotXolida';
import { RotateCcw, Trophy, CheckCircle2 } from 'lucide-react';

interface CardItem {
  id: string;
  pairKey: string;
  text: string;
  lang: 'uz' | 'ru';
}

const ALL_PAIRS = [
  { key: 'p1', uz: 'yangi kitob', ru: 'новая книга' },
  { key: 'p2', uz: 'kitobni o‘qimoq', ru: 'читать книгу' },
  { key: 'p3', uz: 'maktabning bog‘i', ru: 'сад школы' },
  { key: 'p4', uz: 'Toshkent shahri', ru: 'город Ташкент' },
  { key: 'p5', uz: 'Men talabaman', ru: 'Я студент' },
  { key: 'p6', uz: 'kitoblarimizdan', ru: 'из наших книг' },
  { key: 'p7', uz: 'U o‘qidi', ru: 'Он (она) читал(а)' },
  { key: 'p8', uz: 'maktabga bormoq', ru: 'идти в школу' },
  { key: 'p9', uz: 'do‘stim bilan', ru: 'с моим другом' },
  { key: 'p10', uz: 'suv ichmoq', ru: 'пить воду' },
];

export const GameMemoryPairs: React.FC = () => {
  const { language } = useLanguage();
  const { addXP, updateGameScore } = useProgress();

  const [difficulty, setDifficulty] = useState<DifficultyLevel>('oson');
  const [cards, setCards] = useState<CardItem[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [matchedKeys, setMatchedKeys] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);

  const pairCount = difficulty === 'oson' ? 4 : difficulty === 'orta' ? 6 : 8;

  const initGame = (diff: DifficultyLevel = difficulty) => {
    const count = diff === 'oson' ? 4 : diff === 'orta' ? 6 : 8;
    const selectedPairs = ALL_PAIRS.slice(0, count);

    const cardList: CardItem[] = [];
    selectedPairs.forEach((p, idx) => {
      cardList.push({ id: `uz_${idx}`, pairKey: p.key, text: p.uz, lang: 'uz' });
      cardList.push({ id: `ru_${idx}`, pairKey: p.key, text: p.ru, lang: 'ru' });
    });

    setCards(cardList.sort(() => Math.random() - 0.5));
    setFlippedIndices([]);
    setMatchedKeys([]);
    setMoves(0);
    setGameFinished(false);
  };

  useEffect(() => {
    initGame(difficulty);
  }, [difficulty]);

  const handleCardClick = (idx: number) => {
    if (flippedIndices.length === 2) return;
    if (flippedIndices.includes(idx)) return;
    if (matchedKeys.includes(cards[idx].pairKey)) return;

    const newFlipped = [...flippedIndices, idx];
    setFlippedIndices(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      const [first, second] = newFlipped;
      if (cards[first].pairKey === cards[second].pairKey) {
        const nextMatched = [...matchedKeys, cards[first].pairKey];
        setMatchedKeys(nextMatched);
        setFlippedIndices([]);

        if (nextMatched.length === pairCount) {
          setGameFinished(true);
          const earnedXP = difficulty === 'oson' ? 25 : difficulty === 'orta' ? 40 : 60;
          addXP(earnedXP);
          updateGameScore('memory_pairs', earnedXP);
        }
      } else {
        setTimeout(() => {
          setFlippedIndices([]);
        }, 900);
      }
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span>«Juftlik topish» (Memory)</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
              O‘zbekcha — Ruscha
            </span>
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            {language === 'uz'
              ? 'Kartalarni oching va o‘zbekcha birikmani ruscha ma’nosi bilan juftlang'
              : 'Открывайте карточки и находите соответствие узбекских и русских словосочетаний'}
          </p>
        </div>

        {/* Difficulty controls */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl self-start sm:self-auto">
          {(['oson', 'orta', 'qiyin'] as DifficultyLevel[]).map((d) => (
            <button
              key={d}
              onClick={() => {
                setDifficulty(d);
                initGame(d);
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors capitalize ${
                difficulty === d
                  ? 'bg-white dark:bg-slate-900 text-teal-600 dark:text-teal-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              {language === 'uz'
                ? (d === 'oson' ? '4 juft' : d === 'orta' ? '6 juft' : '8 juft')
                : (d === 'oson' ? '4 пары' : d === 'orta' ? '6 пар' : '8 пар')}
            </button>
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div className="flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-300 my-4 px-1">
        <div>
          {language === 'uz' ? 'Harakatlar soni:' : 'Ходов:'} <span className="text-teal-600 font-extrabold">{moves}</span>
        </div>
        <div>
          {language === 'uz' ? 'Topilgan:' : 'Найдено:'}{' '}
          <span className="text-emerald-600 font-extrabold">
            {matchedKeys.length} / {pairCount}
          </span>
        </div>
      </div>

      {/* Cards Grid */}
      <div
        className={`grid gap-2.5 sm:gap-3 my-4 ${
          pairCount === 4
            ? 'grid-cols-2 sm:grid-cols-4'
            : pairCount === 6
            ? 'grid-cols-3 sm:grid-cols-4'
            : 'grid-cols-4'
        }`}
      >
        {cards.map((card, idx) => {
          const isFlipped = flippedIndices.includes(idx) || matchedKeys.includes(card.pairKey);
          const isMatched = matchedKeys.includes(card.pairKey);

          return (
            <button
              key={card.id}
              onClick={() => handleCardClick(idx)}
              disabled={isMatched}
              className={`h-24 sm:h-28 p-2 rounded-xl text-xs sm:text-sm font-bold flex flex-col items-center justify-center text-center transition-all duration-200 select-none cursor-pointer border ${
                isMatched
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300 scale-95 opacity-80'
                  : isFlipped
                  ? card.lang === 'uz'
                    ? 'bg-teal-50 dark:bg-teal-950/60 border-teal-400 text-teal-800 dark:text-teal-200 shadow-sm'
                    : 'bg-blue-50 dark:bg-blue-950/60 border-blue-400 text-blue-800 dark:text-blue-200 shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 text-transparent'
              }`}
            >
              {isFlipped ? (
                <>
                  <span className="text-[10px] font-semibold uppercase opacity-60 mb-1">
                    {card.lang === 'uz' ? 'O‘zbekcha' : 'Русский'}
                  </span>
                  <span className="line-clamp-2">{card.text}</span>
                  {isMatched && <CheckCircle2 className="w-3.5 h-3.5 mt-1 text-emerald-500" />}
                </>
              ) : (
                <span className="text-slate-400 dark:text-slate-500 text-lg">?</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Completion Dialog */}
      {gameFinished && (
        <div className="mt-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 animate-in fade-in duration-300">
          <MascotXolida
            mood="celebrating"
            message={
              language === 'uz'
                ? `Ajoyib g‘alaba! Barcha ${pairCount} ta juftlikni ${moves} ta urinishda topdingiz! Barakalla!`
                : `Великолепно! Вы нашли все ${pairCount} пар за ${moves} ходов! Молодец!`
            }
            size="md"
          />
        </div>
      )}

      {/* Footer controls */}
      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
        <button
          onClick={() => initGame(difficulty)}
          className="px-4 py-2 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{language === 'uz' ? 'Qayta boshlash' : 'Начать заново'}</span>
        </button>
      </div>
    </div>
  );
};

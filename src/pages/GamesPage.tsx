import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { useProgress } from '../hooks/useProgress';
import { GameSentenceConstructor } from '../components/games/GameSentenceConstructor';
import { GameMemberDetective } from '../components/games/GameMemberDetective';
import { GameCaseRoulette } from '../components/games/GameCaseRoulette';
import { GameMemoryPairs } from '../components/games/GameMemoryPairs';
import { GameErrorDetective } from '../components/games/GameErrorDetective';
import { GameTranslationBridge } from '../components/games/GameTranslationBridge';
import { Gamepad2, Layers, RotateCw, Grid, ShieldAlert, Timer, Trophy } from 'lucide-react';

export const GamesPage: React.FC = () => {
  const { language, t } = useLanguage();
  const { progress } = useProgress();
  const [activeTab, setActiveTab] = useState<string>('constructor');

  const games = [
    {
      id: 'constructor',
      nameUz: 'Gap konstruktori',
      nameRu: 'Конструктор предложений',
      descUz: 'SOV tartibida so‘zlarni yig‘ish',
      descRu: 'Сборка предложения в порядке SOV',
      icon: Gamepad2,
      color: 'text-teal-600',
    },
    {
      id: 'detective',
      nameUz: 'Bo‘lak detektivi',
      nameRu: 'Детектив членов',
      descUz: 'Ega, kesim va boshqa bo‘laklarni ajratish',
      descRu: 'Разметка подлежащего, сказуемого и др.',
      icon: Layers,
      color: 'text-blue-600',
    },
    {
      id: 'roulette',
      nameUz: 'Kelishik ruleti',
      nameRu: 'Рулетка падежей',
      descUz: '6 ta kelishik va ularning ruscha ekvivalentlari',
      descRu: '6 узбекских падежей и их значения',
      icon: RotateCw,
      color: 'text-amber-600',
    },
    {
      id: 'memory',
      nameUz: 'Juftlik topish',
      nameRu: 'Поиск пар (Memory)',
      descUz: 'O‘zbekcha va ruscha birikmalarni juftlash',
      descRu: 'Сопоставление узбекских и русских фраз',
      icon: Grid,
      color: 'text-emerald-600',
    },
    {
      id: 'error_hunt',
      nameUz: 'Xato detektivi',
      nameRu: 'Детектив ошибок',
      descUz: 'Rusiyzabonlar xatolarini fosh etish',
      descRu: 'Устранение типичных ошибок',
      icon: ShieldAlert,
      color: 'text-rose-600',
    },
    {
      id: 'bridge',
      nameUz: 'Tarjima ko‘prigi',
      nameRu: 'Мост перевода (Таймер)',
      descUz: 'Vaqtga qarshi tezkor tarjima yig‘ish',
      descRu: 'Быстрая сборка перевода на время',
      icon: Timer,
      color: 'text-indigo-600',
    },
  ];

  return (
    <div className="py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
      {/* Header */}
      <div className="pb-6 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1">
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>{t.games}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {language === 'uz' ? 'Sintaktik o‘yinlar maydoni' : 'Игровая площадка синтаксиса'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            {language === 'uz'
              ? 'Grammatika zerikarli bo‘lmasligi uchun 6 ta qiziqarli ta’limiy o‘yin. Har bir o‘yinda 3 ta qiyinlik darajasi mavjud.'
              : '6 увлекательных образовательных игр для закрепления синтаксиса на практике с 3 уровнями сложности.'}
          </p>
        </div>

        {/* Global XP summary */}
        <div className="flex items-center gap-2 bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/80 px-4 py-2 rounded-2xl text-xs font-bold text-amber-800 dark:text-amber-300">
          <Trophy className="w-4 h-4 text-amber-500" />
          <span>{language === 'uz' ? 'Jami to‘plangan:' : 'Всего набрано:'} {progress.xp} XP</span>
        </div>
      </div>

      {/* Game Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {games.map((g) => {
          const Icon = g.icon;
          const isActive = activeTab === g.id;

          return (
            <button
              key={g.id}
              onClick={() => setActiveTab(g.id)}
              className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-teal-50 dark:bg-teal-950/60 border-teal-500 ring-2 ring-teal-500/30 shadow-xs'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-teal-300'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className={`w-5 h-5 ${isActive ? 'text-teal-600 dark:text-teal-400' : 'text-slate-400'}`} />
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />}
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                  {language === 'uz' ? g.nameUz : g.nameRu}
                </h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                  {language === 'uz' ? g.descUz : g.descRu}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Render Active Game */}
      <div>
        {activeTab === 'constructor' && <GameSentenceConstructor />}
        {activeTab === 'detective' && <GameMemberDetective />}
        {activeTab === 'roulette' && <GameCaseRoulette />}
        {activeTab === 'memory' && <GameMemoryPairs />}
        {activeTab === 'error_hunt' && <GameErrorDetective />}
        {activeTab === 'bridge' && <GameTranslationBridge />}
      </div>
    </div>
  );
};

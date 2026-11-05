import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { LINGUISTIC_FACTS } from '../data/facts';
import { Sparkles, Lightbulb, ExternalLink, Bookmark } from 'lucide-react';

export const FactsPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { key: 'all', labelUz: 'Barchasi (20)', labelRu: 'Все (20)' },
    { key: 'sintaksis', labelUz: 'Sintaksis', labelRu: 'Синтаксис' },
    { key: 'morfologiya', labelUz: 'Morfologiya', labelRu: 'Морфология' },
    { key: 'lugat', labelUz: 'Lug‘at boyligi', labelRu: 'Лексика' },
    { key: 'tarix', labelUz: 'Tarixiy faktlar', labelRu: 'История' },
    { key: 'madaniyat', labelUz: 'Madaniyat', labelRu: 'Культура' },
  ];

  const filtered = LINGUISTIC_FACTS.filter((fact) => {
    if (selectedCategory !== 'all' && fact.category !== selectedCategory) return false;
    return true;
  });

  return (
    <div className="py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
      {/* Title */}
      <div className="pb-6 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.facts}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {language === 'uz' ? 'O‘zbek tili haqida qiziqarli ilmiy faktlar' : 'Интересные научные факты об узбекском языке'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            {language === 'uz'
              ? 'Faqat tekshirilgan va ishonchli manbalarga asoslangan 20 ta qiyosiy lingvistik fakt.'
              : '20 проверенных научных фактов о структуре, истории и удивительных законах узбекского языка.'}
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isSelected
                  ? 'bg-amber-500 text-slate-950 shadow-xs'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-amber-400'
              }`}
            >
              {language === 'uz' ? cat.labelUz : cat.labelRu}
            </button>
          );
        })}
      </div>

      {/* Facts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((fact) => (
          <div
            key={fact.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-amber-300 dark:hover:border-amber-700 transition-colors"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 text-[11px] font-bold uppercase tracking-wider">
                  {fact.category}
                </span>
                <Lightbulb className="w-4 h-4 text-amber-500" />
              </div>

              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                {language === 'uz' ? fact.titleUz : fact.titleRu}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'uz' ? fact.contentUz : fact.contentRu}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
              <div>
                <span className="font-semibold text-slate-500">Manba:</span> {fact.source}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

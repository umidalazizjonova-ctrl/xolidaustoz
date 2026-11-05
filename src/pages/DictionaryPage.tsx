import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { DICTIONARY_DATA } from '../data/dictionary';
import { BookMarked, Search, Filter, BookOpen } from 'lucide-react';

export const DictionaryPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPOS, setSelectedPOS] = useState<string>('all');

  const filteredEntries = DICTIONARY_DATA.filter((entry) => {
    // POS filter
    if (selectedPOS !== 'all' && entry.partOfSpeech !== selectedPOS) return false;

    // Search term
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return (
      entry.uz.toLowerCase().includes(term) ||
      entry.ru.toLowerCase().includes(term) ||
      entry.exampleSentenceUz.toLowerCase().includes(term) ||
      entry.exampleSentenceRu.toLowerCase().includes(term) ||
      entry.grammarNoteUz.toLowerCase().includes(term)
    );
  });

  const posList = [
    { key: 'all', labelUz: 'Barchasi', labelRu: 'Все' },
    { key: 'ot', labelUz: 'Ot (Сущ.)', labelRu: 'Существительное' },
    { key: 'sifat', labelUz: 'Sifat (Прил.)', labelRu: 'Прилагательное' },
    { key: 'fe’l', labelUz: 'Fe’l (Глагол)', labelRu: 'Глагол' },
    { key: 'ravish', labelUz: 'Ravish (Наречие)', labelRu: 'Наречие' },
    { key: 'olmosh', labelUz: 'Olmosh (Мест.)', labelRu: 'Местоимение' },
    { key: 'ko‘makchi', labelUz: 'Ko‘makchi (Послелог)', labelRu: 'Послелог' },
    { key: 'bog‘lovchi', labelUz: 'Bog‘lovchi (Союз)', labelRu: 'Союз' },
  ];

  return (
    <div className="py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
      {/* Title */}
      <div className="pb-6 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1">
            <BookMarked className="w-3.5 h-3.5" />
            <span>{t.dictionary}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {language === 'uz' ? 'Ruscha–o‘zbekcha sintaktik mini-lug‘at' : 'Русско-узбекский синтаксический мини-словарь'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            {language === 'uz'
              ? 'Sintaksisda eng ko‘p qo‘llanadigan so‘zlar, ularning kelishik shakllari, predlogsiz ruscha ekvivalentlari va namunaviy gaplari.'
              : 'Ключевые слова синтаксиса, их падежные формы, соответствия русским предлогам и примеры употребления.'}
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* POS pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {posList.map((p) => {
            const isSelected = selectedPOS === p.key;
            return (
              <button
                key={p.key}
                onClick={() => setSelectedPOS(p.key)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {language === 'uz' ? p.labelUz : p.labelRu}
              </button>
            );
          })}
        </div>
      </div>

      {/* Dictionary Entries List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredEntries.length === 0 ? (
          <div className="col-span-full p-12 text-center text-slate-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl">
            {language === 'uz' ? 'Qidiruv bo‘yicha so‘z topilmadi.' : 'Слов не найдено.'}
          </div>
        ) : (
          filteredEntries.map((entry) => (
            <div
              key={entry.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs space-y-3"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-teal-700 dark:text-teal-300">
                    {entry.uz}
                  </h3>
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                    {entry.ru}
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-bold uppercase tracking-wider">
                  {entry.partOfSpeech}
                </span>
              </div>

              {/* Case Affix / Russian notes */}
              {entry.caseAffix && (
                <div className="text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-xl space-y-1">
                  <div>
                    <span className="font-bold text-slate-700 dark:text-slate-300">
                      {language === 'uz' ? 'Kelishik shakllari:' : 'Формы:'}
                    </span>{' '}
                    <span>{entry.caseAffix}</span>
                  </div>
                  {entry.russianEquivalentCase && (
                    <div className="text-[11px] text-blue-600 dark:text-blue-400">
                      → {entry.russianEquivalentCase}
                    </div>
                  )}
                </div>
              )}

              {/* Sample sentence */}
              <div className="space-y-1 text-xs border-l-2 border-teal-500 pl-3 py-0.5">
                <div className="font-semibold text-slate-800 dark:text-slate-200">
                  {entry.exampleSentenceUz}
                </div>
                <div className="text-slate-500 dark:text-slate-400 italic">
                  {entry.exampleSentenceRu}
                </div>
              </div>

              {/* Grammar rule note */}
              <div className="text-[11px] text-amber-700 dark:text-amber-400 bg-amber-50/70 dark:bg-amber-950/30 p-2 rounded-xl">
                💡 {language === 'uz' ? entry.grammarNoteUz : entry.grammarNoteRu}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

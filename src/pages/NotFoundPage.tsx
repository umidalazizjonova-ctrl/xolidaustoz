import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { MascotXolida } from '../components/common/MascotXolida';
import { Home, BookOpen, Compass } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12 px-4 sm:px-6">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 max-w-lg w-full text-center space-y-6 shadow-sm">
        <MascotXolida
          mood="thinking"
          size="lg"
          message={
            language === 'uz'
              ? 'Kechirasiz, siz qidirgan sahifa topilmadi yoki boshqa manzilga ko‘chirilgan. Keling, bosh sahifaga qaytamiz!'
              : 'К сожалению, запрашиваемая страница не найдена. Давайте вернёмся на главную!'
          }
        />

        <div className="space-y-2">
          <div className="text-4xl sm:text-5xl font-black text-teal-600 dark:text-teal-400">
            404
          </div>
          <h1 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
            {language === 'uz' ? 'Sahifa topilmadi' : 'Страница не найдена'}
          </h1>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-xs transition-colors flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>{language === 'uz' ? 'Bosh sahifa' : 'Главная'}</span>
          </Link>
          <Link
            to="/darslar"
            className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-xs transition-colors flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>{language === 'uz' ? 'Darslar' : 'Уроки'}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

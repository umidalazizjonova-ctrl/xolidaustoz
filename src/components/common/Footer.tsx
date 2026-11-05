import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';

export const Footer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-950 py-10 pb-24 md:pb-10 text-xs text-slate-500 dark:text-slate-400 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <p className="font-semibold text-slate-700 dark:text-slate-200 text-sm">
              «Xolida ustoz bilan o‘zbek tilini o‘rganamiz»
            </p>
            <p className="text-slate-500 dark:text-slate-400 max-w-md">
              {language === 'uz'
                ? 'Rus tilida o‘qitiladigan umumta’lim maktablari 5–9-sinf o‘quvchilari uchun qiyosiy sintaksis bo‘yicha interaktiv qo‘llanma.'
                : 'Интерактивное пособие по сравнительному синтаксису узбекского языка для 5–9 классов школ с русским языком обучения.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 font-medium text-slate-600 dark:text-slate-300">
            <Link to="/darslar" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              {language === 'uz' ? 'Darslar' : 'Уроки'}
            </Link>
            <Link to="/qiyoslash" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              {language === 'uz' ? 'Sintaksis ko‘prigi' : 'Мост синтаксиса'}
            </Link>
            <Link to="/lugat" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              {language === 'uz' ? 'Lug‘at' : 'Словарь'}
            </Link>
            <Link to="/faktlar" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              {language === 'uz' ? 'Faktlar' : 'Факты'}
            </Link>
            <Link to="/darsliklar" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              {language === 'uz' ? 'Darsliklar' : 'Учебники'}
            </Link>
            <Link to="/ustoz" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors text-amber-600 dark:text-amber-400 font-semibold">
              {language === 'uz' ? 'O‘qituvchiga' : 'Учителю'}
            </Link>
          </div>
        </div>

        {/* Author / Creator Attribution Block */}
        <div className="mt-8 p-4 rounded-2xl bg-teal-50/80 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="space-y-0.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
              {language === 'uz' ? 'Muallif va metodist:' : 'Автор и разработчик проекта:'}
            </span>
            <p className="text-xs font-bold text-slate-800 dark:text-slate-100">
              Toshkent shahar Mirzo Ulug‘bek tumani 54-maktab oliy toifali o‘zbek tili fani o‘qituvchisi Karakuziyeva Xolida Nigmatillayevna
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              {language === 'uz'
                ? 'Ushbu ta’limiy veb-platforma muallifning ko‘p yillik metodik tajribasi asosida ishlab chiqilgan.'
                : 'Учитель узбекского языка высшей категории школы №54 Мирзо-Улугбекского района города Ташкента Каракузиева Холида Нигматиллаевна.'}
            </p>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 font-bold text-[11px] shadow-2xs">
              ★ Oliy toifali o‘qituvchi
            </span>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-3">
          <p>
            © {new Date().getFullYear()} Karakuziyeva Xolida Nigmatillayevna. Barcha huquqlar himoyalangan.
          </p>
          <p>
            Toshkent shahar Mirzo Ulug‘bek tumani 54-maktab
          </p>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { TEXTBOOKS_DATA, OFFICIAL_EDUCATION_PORTALS } from '../data/textbooks';
import { BookOpen, ExternalLink, ShieldCheck, GraduationCap, AlertCircle } from 'lucide-react';

export const TextbooksPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
      {/* Title */}
      <div className="pb-6 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t.textbooks}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {language === 'uz' ? 'Darsliklar va rasmiy ta’lim manbalari' : 'Учебники и официальные образовательные ресурсы'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            {language === 'uz'
              ? 'O‘zbekiston Respublikasi Maktabgacha va maktab ta’limi vazirligi tasdiqlagan dasturiy darsliklar va rasmiy elektron portallar.'
              : 'Утверждённые Министерством дошкольного и школьного образования РУз учебники и официальные образовательные порталы.'}
          </p>
        </div>
      </div>

      {/* Teacher notice callout */}
      <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
          <p className="font-bold mb-0.5">
            {language === 'uz' ? 'O‘qituvchi va metodistlar diqqatiga:' : 'Вниманию учителей и методистов:'}
          </p>
          <p>
            {language === 'uz'
              ? 'Darsliklar bo‘yicha ma’lumotlar amaldagi o‘quv yili uchun tasdiqlangan rasmiy o‘quv rejasi asosida o‘qituvchi tomonidan to‘ldirilishi uchun shablon holatida keltirilgan (uydirma mualliflar kiritilmagan).'
              : 'Сведения об учебниках оформлены в виде официального шаблона для заполнения преподавателем в строгом соответствии с действующей учебной программой конкретного учебного года.'}
          </p>
        </div>
      </div>

      {/* Official Portals Grid */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-teal-600" />
          <span>{language === 'uz' ? 'Rasmiy ta’lim portallari' : 'Официальные образовательные порталы'}</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {OFFICIAL_EDUCATION_PORTALS.map((portal, idx) => (
            <a
              key={idx}
              href={portal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-teal-400 dark:hover:border-teal-600 transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors">
                    {language === 'uz' ? portal.nameUz : portal.nameRu}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-teal-600 transition-colors shrink-0" />
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {language === 'uz' ? portal.descUz : portal.descRu}
                </p>
              </div>

              <span className="text-[11px] font-semibold text-teal-600 dark:text-teal-400 mt-3 block">
                {portal.url}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Textbooks Template Grid */}
      <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-teal-600" />
          <span>{language === 'uz' ? 'Darsliklar ro‘yxati (5–9-sinflar)' : 'Список учебников (5–9 классы)'}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TEXTBOOKS_DATA.map((tb) => (
            <div
              key={tb.id}
              className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="px-2.5 py-1 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-400 text-xs font-bold border border-teal-200 dark:border-teal-800">
                  {tb.grade}
                </span>
                <span className="text-[11px] font-semibold text-slate-400">
                  {tb.publisher}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {tb.title}
              </h3>

              <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                <div>
                  <span className="font-bold text-slate-700 dark:text-slate-300">
                    {language === 'uz' ? 'Mualliflar:' : 'Авторы:'}
                  </span>{' '}
                  <span className="text-amber-700 dark:text-amber-400 italic">{tb.authors}</span>
                </div>
                <div>
                  <span className="font-bold text-slate-700 dark:text-slate-300">
                    {language === 'uz' ? 'Nashr yili:' : 'Год издания:'}
                  </span>{' '}
                  <span className="text-amber-700 dark:text-amber-400 italic">{tb.year}</span>
                </div>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {language === 'uz' ? tb.descriptionUz : tb.descriptionRu}
              </p>

              {tb.teacherNote && (
                <div className="text-[11px] text-teal-700 dark:text-teal-400 pt-1 border-t border-slate-100 dark:border-slate-800">
                  📌 {tb.teacherNote}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

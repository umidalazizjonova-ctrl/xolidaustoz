import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { useProgress } from '../hooks/useProgress';
import { MODULES } from '../data/modules';
import { BookOpen, CheckCircle2, Clock, ArrowRight, Sparkles } from 'lucide-react';

export const LessonsPage: React.FC = () => {
  const { language, t } = useLanguage();
  const { progress } = useProgress();

  const completedCount = progress.completedLessonIds.length;
  const progressPercent = Math.round((completedCount / MODULES.length) * 100);

  return (
    <div className="py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
      {/* Page Title & Overview */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t.allLessons}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {language === 'uz' ? 'Qiyosiy sintaksis darslari' : 'Уроки сравнительного синтаксиса'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            {language === 'uz'
              ? '5–9-sinflar uchun tuzilgan 10 ta maxsus o‘quv moduli. Har bir dars o‘zbek va rus tillari qiyosiga asoslangan.'
              : '10 учебных модулей для 5–9 классов. Каждый урок построен на наглядном сравнении законов узбекского и русского языков.'}
          </p>
        </div>

        {/* Global progress meter */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs min-w-[220px]">
          <div className="flex items-center justify-between text-xs font-bold mb-1.5">
            <span className="text-slate-600 dark:text-slate-300">{t.progress}</span>
            <span className="text-teal-600 dark:text-teal-400 tabular-nums">{progressPercent}%</span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
            <div
              className="bg-teal-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="text-[11px] text-slate-400 mt-1.5 flex justify-between">
            <span>{completedCount} {language === 'uz' ? 'o‘tildi' : 'пройдено'}</span>
            <span>{MODULES.length - completedCount} {language === 'uz' ? 'qoldi' : 'осталось'}</span>
          </div>
        </div>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {MODULES.map((module) => {
          const isCompleted = progress.completedLessonIds.includes(module.id);

          return (
            <Link
              key={module.id}
              to={`/dars/${module.slug}`}
              className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-teal-400 dark:hover:border-teal-500 rounded-3xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-400 text-xs font-extrabold flex items-center justify-center border border-teal-200 dark:border-teal-800">
                      {module.id}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      {module.levelGrade}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{module.durationMinutes} {language === 'uz' ? 'daq' : 'мин'}</span>
                    </span>

                    {isCompleted ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{t.completed}</span>
                      </span>
                    ) : (
                      <span className="text-[11px] font-medium text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">
                        +50 XP
                      </span>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {language === 'uz' ? module.titleUz : module.titleRu}
                </h2>

                {/* Short Desc */}
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {language === 'uz' ? module.shortDescUz : module.shortDescRu}
                </p>

                {/* Objective */}
                <div className="mt-4 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-300">
                  <span className="font-bold text-teal-700 dark:text-teal-400 block mb-0.5">
                    {language === 'uz' ? 'Dars maqsadi:' : 'Цель урока:'}
                  </span>
                  <span>{language === 'uz' ? module.targetUz : module.targetRu}</span>
                </div>
              </div>

              {/* Action link */}
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-teal-600 dark:text-teal-400">
                <span>{language === 'uz' ? 'Darsga kirish' : 'Перейти к уроку'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

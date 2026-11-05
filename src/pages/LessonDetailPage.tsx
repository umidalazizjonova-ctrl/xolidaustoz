import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { useProgress } from '../hooks/useProgress';
import { MODULES } from '../data/modules';
import { EXERCISES } from '../data/exercises';
import { MascotXolida } from '../components/common/MascotXolida';
import { CulturalImage } from '../components/common/CulturalImage';
import { SentenceHighlight } from '../components/common/SentenceHighlight';
import {
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Compass,
  Lightbulb,
  CheckSquare,
  HelpCircle,
  Clock,
  Sparkles,
} from 'lucide-react';

export const LessonDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const { progress, completeLesson } = useProgress();

  const currentModule = MODULES.find((m) => m.slug === slug) || MODULES[0];
  const moduleIndex = MODULES.findIndex((m) => m.id === currentModule.id);
  const prevModule = moduleIndex > 0 ? MODULES[moduleIndex - 1] : null;
  const nextModule = moduleIndex < MODULES.length - 1 ? MODULES[moduleIndex + 1] : null;

  const isCompleted = progress.completedLessonIds.includes(currentModule.id);

  // Mini-exercise for this module
  const moduleExercises = EXERCISES.filter((e) => e.moduleId === currentModule.id);
  const miniExercise = moduleExercises[0] || null;

  const [miniAnswer, setMiniAnswer] = useState<string | null>(null);
  const [miniSubmitted, setMiniSubmitted] = useState(false);

  const handleMiniCheck = (selected: string) => {
    if (miniSubmitted) return;
    setMiniAnswer(selected);
    setMiniSubmitted(true);
  };

  const isMiniCorrect = miniExercise && miniAnswer === miniExercise.correctAnswer;

  const handleFinishLesson = () => {
    completeLesson(currentModule.id);
  };

  return (
    <div className="py-6 sm:py-10 max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
      {/* Top Navigation Back link */}
      <div className="flex items-center justify-between">
        <Link
          to="/darslar"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-teal-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === 'uz' ? 'Barcha darslar' : 'Ко всем урокам'}</span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 font-semibold">{currentModule.levelGrade}</span>
          <span className="text-xs text-slate-400">·</span>
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{currentModule.durationMinutes} {language === 'uz' ? 'daq' : 'мин'}</span>
          </span>
        </div>
      </div>

      {/* Header & Title */}
      <div className="space-y-3 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-bold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Modul {currentModule.id} / 10</span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
          {language === 'uz' ? currentModule.titleUz : currentModule.titleRu}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
          {language === 'uz' ? currentModule.shortDescUz : currentModule.shortDescRu}
        </p>

        {/* Target objective */}
        <div className="p-4 rounded-2xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800 text-xs sm:text-sm text-teal-900 dark:text-teal-200">
          <span className="font-bold block mb-1">
            {language === 'uz' ? 'Darsning bosh maqsadi:' : 'Цель данного занятия:'}
          </span>
          <p className="leading-relaxed">
            {language === 'uz' ? currentModule.targetUz : currentModule.targetRu}
          </p>
        </div>
      </div>

      {/* Cultural vignette if present */}
      {currentModule.culturalImageKey && (
        <div className="max-w-lg mx-auto">
          <CulturalImage imageKey={currentModule.culturalImageKey} aspectRatio="16:9" />
        </div>
      )}

      {/* 1. Concise Theory Lecture (<200 words) */}
      <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-sm font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider">
          <BookOpen className="w-4 h-4" />
          <span>{t.theory}</span>
        </div>

        <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed whitespace-pre-line font-normal">
          {language === 'uz' ? currentModule.lectureUz : currentModule.lectureRu}
        </div>
      </section>

      {/* 2. Uzbek vs Russian Comparison Table */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
          <Compass className="w-4 h-4 text-teal-600" />
          <span>{t.comparison}</span>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold">
                <th className="p-3.5 sm:p-4 w-1/4">
                  {language === 'uz' ? 'Xususiyat / Qoida' : 'Признак / Правило'}
                </th>
                <th className="p-3.5 sm:p-4 w-3/8 text-teal-700 dark:text-teal-300">
                  {language === 'uz' ? 'O‘zbek tili qoidasi' : 'Узбекский язык'}
                </th>
                <th className="p-3.5 sm:p-4 w-3/8 text-blue-700 dark:text-blue-300">
                  {language === 'uz' ? 'Rus tili bilan qiyosi' : 'Русский язык (Сравнение)'}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {currentModule.comparisonTable.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-800 dark:text-slate-200">
                    {language === 'uz' ? row.featureUz : row.featureRu}
                  </td>
                  <td className="p-3.5 sm:p-4 text-slate-700 dark:text-slate-300 space-y-1">
                    <p>{row.uzbekRule}</p>
                    <div className="font-semibold text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 p-1.5 rounded-lg text-xs">
                      {row.uzbekExample}
                    </div>
                  </td>
                  <td className="p-3.5 sm:p-4 text-slate-700 dark:text-slate-300 space-y-1">
                    <p>{row.russianRule}</p>
                    <div className="font-semibold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 p-1.5 rounded-lg text-xs">
                      {row.russianExample}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Key Model Examples */}
      <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{t.examples}</span>
        </div>

        <div className="space-y-4">
          {currentModule.keyExamples.map((ex, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700 space-y-2"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <span className="text-base sm:text-lg font-bold text-teal-700 dark:text-teal-300">
                  {ex.uz}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-500">
                  = {ex.ru}
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                {language === 'uz' ? ex.breakdownUz : ex.breakdownRu}
              </p>
              <div className="text-[11px] font-medium text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 p-2 rounded-lg">
                💡 {ex.ruleHighlight}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. "Bilasizmi?" Fact Card */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/20 border border-amber-200 dark:border-amber-800/60 rounded-3xl p-6 sm:p-8 space-y-3">
        <div className="flex items-center gap-2 text-sm font-bold text-amber-800 dark:text-amber-400">
          <Lightbulb className="w-5 h-5" />
          <span>{t.didYouKnow}</span>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
          {language === 'uz' ? currentModule.didYouKnow.factUz : currentModule.didYouKnow.factRu}
        </p>

        <div className="text-[11px] text-slate-500 pt-1">
          <span className="font-semibold">Manba:</span> {currentModule.didYouKnow.source}
        </div>
      </section>

      {/* 5. Interactive Mini-Exercise */}
      {miniExercise && (
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
            <CheckSquare className="w-4 h-4 text-teal-600" />
            <span>{t.miniExercise}</span>
          </div>

          <p className="text-xs text-slate-500">
            {language === 'uz' ? miniExercise.instructionUz : miniExercise.instructionRu}
          </p>

          <div className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100">
            {miniExercise.questionUz}
          </div>

          {miniExercise.options && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {miniExercise.options.map((opt, i) => {
                const isThis = miniAnswer === opt;
                let btnStyle = 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-teal-400';
                if (miniSubmitted) {
                  if (opt === miniExercise.correctAnswer) {
                    btnStyle = 'bg-emerald-50 dark:bg-emerald-950 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-bold';
                  } else if (isThis) {
                    btnStyle = 'bg-rose-50 dark:bg-rose-950 border-rose-500 text-rose-800 dark:text-rose-200 font-bold';
                  }
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleMiniCheck(opt)}
                    disabled={miniSubmitted}
                    className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-medium transition-colors cursor-pointer ${btnStyle}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          )}

          {miniSubmitted && (
            <div className="mt-4 animate-in fade-in duration-200">
              <MascotXolida
                mood={isMiniCorrect ? 'celebrating' : 'thinking'}
                message={
                  isMiniCorrect
                    ? language === 'uz'
                      ? `To‘g‘ri! ${miniExercise.explanationUz}`
                      : `Верно! ${miniExercise.explanationRu}`
                    : language === 'uz'
                    ? `Qayta o‘ylab ko‘ring: ${miniExercise.explanationUz}`
                    : `Попробуйте еще раз: ${miniExercise.explanationRu}`
                }
                size="sm"
              />
            </div>
          )}
        </section>
      )}

      {/* 6. Summary */}
      <section className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-3">
        <h3 className="text-sm font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
          {t.summary}
        </h3>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          {(language === 'uz' ? currentModule.summaryUz : currentModule.summaryRu).map((s, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-teal-500 font-bold">✓</span>
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Bottom Completion Button & Prev/Next Navigation */}
      <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Complete Lesson CTA */}
          <button
            onClick={handleFinishLesson}
            disabled={isCompleted}
            className={`w-full sm:w-auto px-6 py-3 rounded-2xl font-bold text-sm shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
              isCompleted
                ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700'
                : 'bg-teal-600 hover:bg-teal-700 text-white active:scale-95'
            }`}
          >
            <CheckCircle2 className="w-5 h-5" />
            <span>
              {isCompleted
                ? language === 'uz'
                  ? 'Dars tamomlangan (+50 XP)'
                  : 'Урок успешно завершён (+50 XP)'
                : language === 'uz'
                ? 'Darsni tamomlash (+50 XP)'
                : 'Завершить урок (+50 XP)'}
            </span>
          </button>

          {/* Quick link to practice */}
          <Link
            to="/mashqlar"
            className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 flex items-center gap-1"
          >
            <span>{language === 'uz' ? 'Mavzuga oid barcha mashqlar' : 'Все упражнения темы'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Prev / Next module paging */}
        <div className="grid grid-cols-2 gap-3 pt-4">
          {prevModule ? (
            <Link
              to={`/dars/${prevModule.slug}`}
              className="p-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-teal-400 transition-colors text-left"
            >
              <span className="text-[10px] text-slate-400 font-semibold block">← {t.previous}</span>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate block mt-0.5">
                {language === 'uz' ? prevModule.titleUz : prevModule.titleRu}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextModule ? (
            <Link
              to={`/dars/${nextModule.slug}`}
              className="p-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-teal-400 transition-colors text-right"
            >
              <span className="text-[10px] text-slate-400 font-semibold block">{t.next} →</span>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate block mt-0.5">
                {language === 'uz' ? nextModule.titleUz : nextModule.titleRu}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
};

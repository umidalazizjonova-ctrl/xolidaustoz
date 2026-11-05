import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { useProgress } from '../hooks/useProgress';
import { getUserLevel } from '../lib/gamification';
import { MODULES } from '../data/modules';
import { MascotXolida } from '../components/common/MascotXolida';
import { CulturalImage } from '../components/common/CulturalImage';
import { SentenceHighlight } from '../components/common/SentenceHighlight';
import {
  BookOpen,
  Compass,
  Gamepad2,
  CheckCircle2,
  ArrowRight,
  Flame,
  Sparkles,
  Trophy,
  GraduationCap,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { language, t } = useLanguage();
  const { progress, completeDailyQuest } = useProgress();
  const userLevel = getUserLevel(progress.xp);

  const completedCount = progress.completedLessonIds.length;
  const totalLessons = MODULES.length;
  const progressPercent = Math.round((completedCount / totalLessons) * 100);

  return (
    <div className="space-y-12 py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-600 via-teal-700 to-slate-900 text-white p-6 sm:p-10 lg:p-12 shadow-lg">
        {/* Subtle decorative vector overlay */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-white/5 pointer-events-none blur-2xl" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            {/* Audience Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold text-teal-100">
              <GraduationCap className="w-3.5 h-3.5 text-amber-300" />
              <span>
                {language === 'uz'
                  ? '5–9-sinf rusiyzabon o‘quvchilari uchun maxsus'
                  : 'Специально для 5–9 классов школ с русским языком обучения'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
              {language === 'uz'
                ? 'Xolida ustoz bilan o‘zbek tilini qiziqarli o‘rganamiz!'
                : 'Изучаем узбекский язык с учителем Холидой!'}
            </h1>

            <p className="text-sm sm:text-base text-teal-50 max-w-2xl leading-relaxed">
              {language === 'uz'
                ? 'Zerikarli qoidalar o‘rniga o‘yinlar, jonli qiyoslash va interaktiv ko‘prik orqali so‘z birikmasi va gap sintaksisini oson o‘zlashtiring.'
                : 'Осваивайте синтаксис словосочетания и предложения без скучной зубрёжки: через интерактивные игры, сравнение с русским языком и живую практику.'}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/darslar"
                className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 active:scale-95 text-slate-950 font-bold text-sm shadow-md transition-all flex items-center gap-2"
              >
                <span>{completedCount > 0 ? t.continueLearning : t.startLearning}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/qiyoslash"
                className="px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-semibold text-sm transition-colors flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-teal-200" />
                <span>{language === 'uz' ? 'Sintaksis ko‘prigi' : 'Мост синтаксиса'}</span>
              </Link>
            </div>
          </div>

          {/* Mascot in Hero */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <MascotXolida
              mood="greeting"
              size="xl"
              message={
                language === 'uz'
                  ? 'Salom, aziz o‘quvchim! Bugun o‘zbek tili sintaksisining ajoyib sirlarini birgalikda kashf etamiz!'
                  : 'Здравствуй, дорогой ученик! Давай вместе раскроем секреты узбекского языка и победим все типичные ошибки!'
              }
            />
          </div>
        </div>
      </section>

      {/* Quick Dashboard Grid: Progress + Daily Quest + Streak */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Progress Card */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
              <span>{t.progress}</span>
              <span className="text-teal-600 dark:text-teal-400 tabular-nums">{progressPercent}%</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-teal-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-3">
              {completedCount} / {totalLessons} {language === 'uz' ? 'modul tamomlandi' : 'модулей пройдено'}
            </p>
          </div>
          <Link
            to="/darslar"
            className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 mt-4 flex items-center gap-1"
          >
            <span>{language === 'uz' ? 'Darslar ro‘yxati' : 'К списку уроков'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Daily Streak Card */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
            <Flame className="w-6 h-6 fill-amber-500" />
          </div>
          <div>
            <span className="text-xs text-slate-500 font-semibold">{t.dailyStreak}</span>
            <div className="text-2xl font-extrabold text-slate-900 dark:text-white tabular-nums">
              {progress.streakDays} {language === 'uz' ? 'kun' : 'дня'}
            </div>
            <p className="text-[11px] text-slate-500 mt-0.5">
              {language === 'uz' ? 'Bilim olishni uzluksiz davom ettiring!' : 'Занимайтесь каждый день!'}
            </p>
          </div>
        </div>

        {/* Daily Quest Card */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.dailyQuest} (+30 XP)</span>
            </div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              {language === 'uz'
                ? '«Gap konstruktori» o‘yinida 1 ta gap yig‘ing'
                : 'Соберите 1 предложение в конструкторе'}
            </h4>
          </div>

          <div className="mt-3 flex items-center justify-between">
            {progress.dailyQuestCompleted ? (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>{language === 'uz' ? 'Bajarildi!' : 'Выполнено!'}</span>
              </span>
            ) : (
              <button
                onClick={completeDailyQuest}
                className="px-3 py-1.5 rounded-lg bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 text-xs font-bold hover:bg-teal-100 transition-colors cursor-pointer"
              >
                {language === 'uz' ? 'Bajarish' : 'Выполнить'}
              </button>
            )}
            <span className="text-xs text-slate-400 tabular-nums">
              {progress.xp} XP
            </span>
          </div>
        </div>
      </section>

      {/* Comparative Syntax Golden Rule Spotlight */}
      <section className="bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/60 rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              {language === 'uz' ? 'Sintaksisning Oltin Qoidasi' : 'Золотое правило узбекского синтаксиса'}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {language === 'uz'
                ? 'Bola kitobni o‘qiydi (SOV) vs Ребёнок читает книгу (SVO)'
                : 'Порядок слов: SOV в узбекском и SVO в русском'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'uz'
                ? 'O‘zbek tilida harakat bildiruvchi kesim (fe’l) doimo gapning eng oxirida turadi. Ruscha tartibni ko‘chirib fe’lni o‘rtaga qo‘yish xatodir!'
                : 'В узбекском языке сказуемое строго завершает предложение. Перенос глагола в середину — главная типичная ошибка русскоязычных учеников.'}
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-amber-200 dark:border-amber-800 shadow-xs shrink-0 w-full lg:w-auto">
            <SentenceHighlight
              words={[
                { text: 'Bola', part: 'ega', noteUz: 'Ega (kim?)', noteRu: 'Подлежащее' },
                { text: 'kitobni', part: 'toldiruvchi', noteUz: 'To‘ldiruvchi (nimani?)', noteRu: 'Дополнение' },
                { text: 'o‘qiydi.', part: 'kesim', noteUz: 'Kesim (oxirida!)', noteRu: 'Сказуемое (в конце!)' },
              ]}
              showLegend
            />
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {language === 'uz' ? 'Mashhur interaktiv o‘yinlar' : 'Интерактивные игры'}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {language === 'uz' ? 'Qoidalarni zerikmasdan, o‘yin orqali o‘zlashtiring' : 'Осваивайте правила легко и в игровой форме'}
            </p>
          </div>
          <Link
            to="/oyinlar"
            className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 flex items-center gap-1"
          >
            <span>{language === 'uz' ? 'Barcha 6 ta o‘yin' : 'Все 6 игр'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            to="/oyinlar"
            className="group p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-teal-400 dark:hover:border-teal-600 rounded-2xl shadow-xs transition-all hover:scale-[1.01]"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-3 group-hover:bg-teal-600 group-hover:text-white transition-colors">
              <Gamepad2 className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white text-base">
              «Gap konstruktori»
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
              {language === 'uz'
                ? 'Aralash so‘zlarni to‘g‘ri SOV tartibida joylashtirib, mukammal gap tuzing.'
                : 'Соберите рассыпанные слова в правильное узбекское предложение.'}
            </p>
          </Link>

          <Link
            to="/oyinlar"
            className="group p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-teal-400 dark:hover:border-teal-600 rounded-2xl shadow-xs transition-all hover:scale-[1.01]"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white text-base">
              «Bo‘lak detektivi»
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
              {language === 'uz'
                ? 'Gapdagi ega, kesim, to‘ldiruvchi, aniqlovchi va holni topib, ranglarga bo‘yang.'
                : 'Определите и раскрасьте члены предложения: подлежащее, сказуемое, дополнение.'}
            </p>
          </Link>

          <Link
            to="/oyinlar"
            className="group p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-teal-400 dark:hover:border-teal-600 rounded-2xl shadow-xs transition-all hover:scale-[1.01]"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-3 group-hover:bg-rose-600 group-hover:text-white transition-colors">
              <Trophy className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white text-base">
              «Xato detektivi»
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
              {language === 'uz'
                ? 'Rusiyzabon o‘quvchilar yo‘l qo‘yadigan 5 ta tipik xatoni toping va tuzating.'
                : 'Найдите и исправьте типичные ошибки, возникающие под влиянием русского языка.'}
            </p>
          </Link>
        </div>
      </section>

      {/* Cultural Heritage Vignettes */}
      <section className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {language === 'uz' ? 'Madaniy kontekst va merosimiz' : 'Культурный контекст'}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {language === 'uz' ? 'Tilni uning boy madaniyati bilan birga o‘rganamiz' : 'Изучаем язык через его богатую культуру'}
            </p>
          </div>
          <Link
            to="/faktlar"
            className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 flex items-center gap-1"
          >
            <span>{language === 'uz' ? 'Qiziqarli faktlar' : 'Факты о языке'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <CulturalImage imageKey="registan" showCaption aspectRatio="4:3" />
          <CulturalImage imageKey="buxoro" showCaption aspectRatio="4:3" />
          <CulturalImage imageKey="non" showCaption aspectRatio="4:3" />
          <CulturalImage imageKey="atlas" showCaption aspectRatio="4:3" />
        </div>
      </section>
    </div>
  );
};

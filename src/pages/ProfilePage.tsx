import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { useTheme } from '../hooks/useTheme';
import { useProgress } from '../hooks/useProgress';
import { getUserLevel, BADGES, LEVEL_THRESHOLDS } from '../lib/gamification';
import { MascotXolida } from '../components/common/MascotXolida';
import {
  User,
  Sparkles,
  Flame,
  Award,
  CheckCircle2,
  RotateCcw,
  BookOpen,
  CheckSquare,
  FileText,
  Lock,
  Moon,
  Sun,
  Globe,
} from 'lucide-react';

export const ProfilePage: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const { progress, resetProgress } = useProgress();

  const [showResetModal, setShowResetModal] = useState(false);

  const userLevel = getUserLevel(progress.xp);

  const handleConfirmReset = () => {
    resetProgress();
    setShowResetModal(false);
  };

  return (
    <div className="py-6 sm:py-10 max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
      {/* Page Title */}
      <div className="pb-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1">
            <User className="w-3.5 h-3.5" />
            <span>{t.profile}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {language === 'uz' ? 'O‘quvchi profili va yutuqlari' : 'Профиль ученика и достижения'}
          </h1>
        </div>
      </div>

      {/* Main Profile Header Card */}
      <div className="bg-gradient-to-br from-teal-600 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-md relative overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <MascotXolida mood="celebrating" size="lg" showBubble={false} />

          <div className="flex-1 text-center sm:text-left space-y-3 w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs font-bold text-teal-100">
              <Award className="w-3.5 h-3.5 text-amber-300" />
              <span>
                {language === 'uz' ? `Daraja ${userLevel.rank}` : `Ранг ${userLevel.rank}`} :{' '}
                {language === 'uz' ? userLevel.nameUz : userLevel.nameRu}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black">
              {progress.xp} XP
            </h2>

            {/* Level progress bar */}
            <div className="space-y-1.5 max-w-md">
              <div className="flex justify-between text-xs font-semibold text-teal-100">
                <span>{language === 'uz' ? 'Keyingi darajagacha' : 'До следующего ранга'}</span>
                <span>{userLevel.progressPercent}%</span>
              </div>
              <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-amber-400 h-full rounded-full transition-all duration-300"
                  style={{ width: `${userLevel.progressPercent}%` }}
                />
              </div>
              {userLevel.nextLevelXP && (
                <div className="text-[11px] text-teal-200 text-right">
                  {userLevel.nextLevelXP - progress.xp} XP {language === 'uz' ? 'qoldi' : 'осталось'}
                </div>
              )}
            </div>
          </div>

          {/* Streak badge */}
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 flex flex-col items-center justify-center shrink-0 min-w-[110px]">
            <Flame className="w-8 h-8 text-amber-400 fill-amber-400 mb-1" />
            <span className="text-xl font-black">{progress.streakDays}</span>
            <span className="text-[11px] text-teal-100 font-semibold">
              {language === 'uz' ? 'kunlik streak' : 'дня серии'}
            </span>
          </div>
        </div>
      </div>

      {/* Stats Counter Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
          <BookOpen className="w-5 h-5 text-teal-600 mx-auto mb-1.5" />
          <div className="text-xl font-extrabold text-slate-900 dark:text-white tabular-nums">
            {progress.completedLessonIds.length} / 10
          </div>
          <div className="text-xs text-slate-500">
            {language === 'uz' ? 'Tugatilgan modullar' : 'Пройдено модулей'}
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
          <CheckSquare className="w-5 h-5 text-emerald-600 mx-auto mb-1.5" />
          <div className="text-xl font-extrabold text-slate-900 dark:text-white tabular-nums">
            {progress.completedExerciseIds.length}
          </div>
          <div className="text-xs text-slate-500">
            {language === 'uz' ? 'Bajarilgan mashqlar' : 'Решено упражнений'}
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
          <FileText className="w-5 h-5 text-blue-600 mx-auto mb-1.5" />
          <div className="text-xl font-extrabold text-slate-900 dark:text-white tabular-nums">
            {progress.completedTestIds.length}
          </div>
          <div className="text-xs text-slate-500">
            {language === 'uz' ? 'Topshirilgan testlar' : 'Сдано тестов'}
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
          <Award className="w-5 h-5 text-amber-500 mx-auto mb-1.5" />
          <div className="text-xl font-extrabold text-slate-900 dark:text-white tabular-nums">
            {progress.unlockedBadgeIds.length} / {BADGES.length}
          </div>
          <div className="text-xs text-slate-500">
            {language === 'uz' ? 'Ochilgan nishonlar' : 'Получено значков'}
          </div>
        </div>
      </div>

      {/* 12 Badges Showcase */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-500" />
          <span>{t.badges} (12 ta)</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {BADGES.map((badge) => {
            const isUnlocked = progress.unlockedBadgeIds.includes(badge.id);

            return (
              <div
                key={badge.id}
                className={`p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                  isUnlocked
                    ? 'bg-white dark:bg-slate-900 border-amber-300 dark:border-amber-700/80 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 opacity-60'
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${
                    isUnlocked
                      ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-400'
                  }`}
                >
                  {isUnlocked ? <Award className="w-6 h-6" /> : <Lock className="w-5 h-5" />}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                      {language === 'uz' ? badge.titleUz : badge.titleRu}
                    </h4>
                    {isUnlocked && (
                      <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                        ✓
                      </span>
                    )}
                  </div>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2">
                    {language === 'uz' ? badge.descriptionUz : badge.descriptionRu}
                  </p>

                  <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-2">
                    {language === 'uz' ? badge.conditionDescriptionUz : badge.conditionDescriptionRu}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Settings & Reset Progress */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
        <h2 className="text-base font-bold text-slate-900 dark:text-white">
          {language === 'uz' ? 'Dastur sozlamalari' : 'Настройки приложения'}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Language Switch */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 dark:text-slate-300 flex items-center gap-2">
              <Globe className="w-4 h-4 text-teal-600" />
              <span>{language === 'uz' ? 'Interfeys tili:' : 'Язык интерфейса:'}</span>
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage('uz')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer border ${
                  language === 'uz'
                    ? 'bg-teal-600 text-white border-teal-600'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                }`}
              >
                O‘zbekcha (UZ)
              </button>
              <button
                onClick={() => setLanguage('ru')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer border ${
                  language === 'ru'
                    ? 'bg-teal-600 text-white border-teal-600'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                }`}
              >
                Русский (RU)
              </button>
            </div>
          </div>

          {/* Theme Switch */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 dark:text-slate-300 flex items-center gap-2">
              <Sun className="w-4 h-4 text-amber-500" />
              <span>{language === 'uz' ? 'Mavzu rejimi:' : 'Тема оформления:'}</span>
            </label>
            <div className="flex gap-2">
              {(['light', 'dark', 'system'] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setTheme(m)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-colors capitalize cursor-pointer border ${
                    theme === m
                      ? 'bg-teal-600 text-white border-teal-600'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {m === 'light' ? t.themeLight : m === 'dark' ? t.themeDark : t.themeSystem}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Reset Progress Action */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200">
              {t.resetProgress}
            </h3>
            <p className="text-[11px] text-slate-500 mt-0.5">
              {language === 'uz'
                ? 'Barcha to‘plangan XP, ochilgan nishonlar va o‘tilgan darslarni boshlang‘ich holatga qaytarish.'
                : 'Сброс всех очков опыта, полученных значков и истории уроков к начальному состоянию.'}
            </p>
          </div>

          <button
            onClick={() => setShowResetModal(true)}
            className="px-4 py-2 text-xs font-bold rounded-xl border border-rose-300 dark:border-rose-800 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950 transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t.resetProgress}</span>
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showResetModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 max-w-sm w-full space-y-4 shadow-xl animate-in zoom-in-95 duration-150">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {t.resetProgress}?
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {t.resetConfirm}
            </p>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setShowResetModal(false)}
                className="px-4 py-2 text-xs font-semibold rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Bekor qilish
              </button>
              <button
                onClick={handleConfirmReset}
                className="px-4 py-2 text-xs font-bold rounded-xl bg-rose-600 hover:bg-rose-700 text-white transition-colors cursor-pointer"
              >
                Ha, nollash
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

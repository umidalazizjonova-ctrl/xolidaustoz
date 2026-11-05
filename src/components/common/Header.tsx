import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { useTheme } from '../../hooks/useTheme';
import { useProgress } from '../../hooks/useProgress';
import { getUserLevel } from '../../lib/gamification';
import { Sun, Moon, Sparkles, User, GraduationCap } from 'lucide-react';

export const Header: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const { effectiveTheme, toggleTheme } = useTheme();
  const { progress } = useProgress();
  const location = useLocation();

  const userLevel = getUserLevel(progress.xp);

  const navLinks = [
    { to: '/darslar', label: t.lessons },
    { to: '/qiyoslash', label: language === 'uz' ? 'Qiyoslash' : 'Мост' },
    { to: '/oyinlar', label: t.games },
    { to: '/mashqlar', label: t.exercises },
    { to: '/test', label: t.tests },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4 md:gap-8">
        
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <Link
          to="/"
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-lg p-1"
        >
          <div className="w-8 h-8 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-base shadow-sm group-hover:bg-teal-700 transition-colors">
            X
          </div>
          <div className="leading-tight">
            <span className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
              Xolida ustoz
            </span>
            <span className="hidden sm:inline text-xs text-teal-600 dark:text-teal-400 font-medium ml-1.5">
              · {language === 'uz' ? 'O‘zbek tili' : 'Узбекский'}
            </span>
          </div>
        </Link>

        {/* Zone 2: 4–5 Concise Single-Line Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`whitespace-nowrap shrink-0 transition-colors hover:text-teal-600 dark:hover:text-teal-400 py-1 border-b-2 ${
                  isActive
                    ? 'border-teal-600 text-teal-700 dark:text-teal-400 dark:border-teal-400 font-bold'
                    : 'border-transparent'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/ustoz"
            className="whitespace-nowrap shrink-0 text-xs font-semibold text-amber-700 dark:text-amber-400 hover:text-amber-800 flex items-center gap-1 bg-amber-50 dark:bg-amber-950/40 px-2.5 py-1 rounded-md"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{language === 'uz' ? 'O‘qituvchiga' : 'Учителю'}</span>
          </Link>
        </nav>

        {/* Zone 3: Primary Actions (Language, Theme, XP & Profile) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="h-9 px-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1 whitespace-nowrap shrink-0 cursor-pointer"
            aria-label="Tilni almashtirish"
            title="O‘zbekcha / Русский"
          >
            <span className={language === 'uz' ? 'text-teal-600 dark:text-teal-400 font-extrabold' : 'opacity-60'}>UZ</span>
            <span className="opacity-40">/</span>
            <span className={language === 'ru' ? 'text-teal-600 dark:text-teal-400 font-extrabold' : 'opacity-60'}>RU</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="h-9 w-9 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center shrink-0 cursor-pointer"
            aria-label="Mavzuni almashtirish"
            title="Yorug‘ / Tungi rejim"
          >
            {effectiveTheme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600" />
            )}
          </button>

          {/* XP & Profile link */}
          <Link
            to="/profil"
            className="h-9 px-3 rounded-lg bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800/80 hover:bg-teal-100 dark:hover:bg-teal-900/60 transition-colors flex items-center gap-2 text-xs font-bold text-teal-800 dark:text-teal-300 shrink-0"
            title={language === 'uz' ? 'Mening profilim' : 'Мой профиль'}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span className="tabular-nums">{progress.xp} XP</span>
            <span className="hidden sm:inline opacity-40">|</span>
            <span className="hidden sm:inline font-medium text-[11px] max-w-[80px] truncate">
              {language === 'uz' ? userLevel.nameUz : userLevel.nameRu}
            </span>
            <User className="w-3.5 h-3.5 ml-0.5 opacity-70" />
          </Link>
        </div>
      </div>
    </header>
  );
};

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { Home, BookOpen, Compass, Gamepad2, User } from 'lucide-react';

export const BottomNav: React.FC = () => {
  const { language, t } = useLanguage();

  const links = [
    { to: '/', label: t.home, icon: Home },
    { to: '/darslar', label: t.lessons, icon: BookOpen },
    { to: '/qiyoslash', label: language === 'uz' ? 'Ko‘prik' : 'Мост', icon: Compass },
    { to: '/oyinlar', label: t.games, icon: Gamepad2 },
    { to: '/profil', label: language === 'uz' ? 'Profil' : 'Профиль', icon: User },
  ];

  return (
    <nav
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 no-print"
      aria-label="Mobil pastki menyu"
    >
      <div className="flex items-center justify-around h-14 max-w-lg mx-auto px-2">
        {links.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center w-full h-full text-[10px] font-semibold transition-colors ${
                  isActive
                    ? 'text-teal-600 dark:text-teal-400 font-bold'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`
              }
            >
              <Icon className="w-4 h-4 mb-0.5" />
              <span className="truncate max-w-[64px]">{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

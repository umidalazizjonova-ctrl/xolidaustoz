import React from 'react';
import { useProgress } from '../../hooks/useProgress';
import { useLanguage } from '../../hooks/useLanguage';
import { BADGES } from '../../lib/gamification';
import { Award, X } from 'lucide-react';

export const BadgeNotification: React.FC = () => {
  const { latestUnlockedBadge, clearLatestBadge } = useProgress();
  const { language } = useLanguage();

  if (!latestUnlockedBadge) return null;

  const badge = BADGES.find((b) => b.id === latestUnlockedBadge);
  if (!badge) return null;

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 z-50 max-w-sm w-full bg-white dark:bg-slate-900 border-2 border-amber-400 dark:border-amber-500 rounded-2xl p-4 shadow-xl animate-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-start gap-3">
        <div className="p-2.5 bg-amber-100 dark:bg-amber-950/60 rounded-xl text-amber-600 dark:text-amber-400 shrink-0">
          <Award className="w-6 h-6" />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            {language === 'uz' ? 'Yangi nishon ochildi!' : 'Новый значок открыт!'}
          </span>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">
            {language === 'uz' ? badge.titleUz : badge.titleRu}
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 line-clamp-2">
            {language === 'uz' ? badge.descriptionUz : badge.descriptionRu}
          </p>
        </div>
        <button
          onClick={clearLatestBadge}
          className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
          aria-label="Yopish"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

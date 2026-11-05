import React from 'react';
import { MascotMood } from '../../types';

interface MascotProps {
  mood?: MascotMood;
  message?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBubble?: boolean;
}

export const MascotXolida: React.FC<MascotProps> = ({
  mood = 'greeting',
  message,
  className = '',
  size = 'md',
  showBubble = true,
}) => {
  const sizeMap = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24 md:w-28 md:h-28',
    lg: 'w-36 h-36 md:w-44 md:h-44',
    xl: 'w-48 h-48 md:w-60 md:h-60',
  };

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* SVG Avatar */}
      <div className={`relative shrink-0 ${sizeMap[size]} transition-transform hover:scale-105 duration-200`}>
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-md select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Xolida ustoz qahramoni"
        >
          {/* Background circle badge */}
          <circle cx="100" cy="100" r="92" className="fill-teal-100 dark:fill-teal-950/70 stroke-teal-500/30" strokeWidth="3" />
          
          {/* Hair / Headscarf background */}
          <path
            d="M50 120 C45 60 70 30 100 30 C130 30 155 60 150 120 C145 155 130 170 100 170 C70 170 55 155 50 120 Z"
            fill="#1e3a5f"
          />

          {/* Shoulders / Dress (Teal blazer with white collar) */}
          <path
            d="M45 185 C45 150 75 140 100 140 C125 140 155 150 155 185 C145 195 55 195 45 185 Z"
            fill="#0d9488"
          />
          {/* White inner blouse */}
          <path d="M85 142 L100 162 L115 142 Z" fill="#ffffff" />
          {/* Elegant gold broach */}
          <circle cx="100" cy="164" r="3.5" fill="#f59e0b" />

          {/* Face */}
          <ellipse cx="100" cy="98" rx="42" ry="46" fill="#fde68a" />

          {/* Hair fringe */}
          <path
            d="M60 85 C75 65 95 65 100 70 C105 65 125 65 140 85 C130 75 115 70 100 72 C85 70 70 75 60 85 Z"
            fill="#1e293b"
          />

          {/* Cheeks */}
          <circle cx="75" cy="110" r="7" fill="#fca5a5" opacity="0.6" />
          <circle cx="125" cy="110" r="7" fill="#fca5a5" opacity="0.6" />

          {/* Glasses */}
          <rect x="68" y="88" width="24" height="18" rx="6" fill="rgba(255,255,255,0.4)" stroke="#78350f" strokeWidth="2.5" />
          <rect x="108" y="88" width="24" height="18" rx="6" fill="rgba(255,255,255,0.4)" stroke="#78350f" strokeWidth="2.5" />
          <path d="M92 97 L108 97" stroke="#78350f" strokeWidth="2.5" />

          {/* Eyes depending on mood */}
          {mood === 'celebrating' ? (
            <>
              {/* Happy squint eyes */}
              <path d="M74 97 Q80 91 86 97" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" fill="none" />
              <path d="M114 97 Q120 91 126 97" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" fill="none" />
            </>
          ) : mood === 'thinking' ? (
            <>
              {/* Looking up thoughtfully */}
              <circle cx="80" cy="94" r="3.5" fill="#1e293b" />
              <circle cx="120" cy="94" r="3.5" fill="#1e293b" />
            </>
          ) : (
            <>
              {/* Kind normal eyes with sparkle */}
              <circle cx="80" cy="97" r="3.5" fill="#1e293b" />
              <circle cx="120" cy="97" r="3.5" fill="#1e293b" />
              <circle cx="81.5" cy="95.5" r="1.2" fill="#ffffff" />
              <circle cx="121.5" cy="95.5" r="1.2" fill="#ffffff" />
            </>
          )}

          {/* Eyebrows */}
          <path d="M72 84 Q80 80 88 84" stroke="#475569" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M112 84 Q120 80 128 84" stroke="#475569" strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* Nose */}
          <path d="M100 102 Q102 108 98 111" stroke="#d97706" strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* Mouth according to mood */}
          {mood === 'celebrating' ? (
            <path d="M88 120 Q100 134 112 120 Z" fill="#dc2626" />
          ) : mood === 'thinking' ? (
            <path d="M92 122 Q100 120 108 123" stroke="#991b1b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          ) : mood === 'teaching' ? (
            <path d="M89 120 Q100 129 111 120" stroke="#991b1b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          ) : (
            <path d="M88 120 Q100 130 112 120" stroke="#991b1b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          )}

          {/* Mood specific props */}
          {mood === 'teaching' && (
            <g transform="translate(142, 85) rotate(-20)">
              {/* Pointer / book in hand */}
              <rect x="0" y="0" width="16" height="24" rx="2" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.5" />
              <line x1="4" y1="6" x2="12" y2="6" stroke="#ffffff" strokeWidth="1.5" />
              <line x1="4" y1="11" x2="12" y2="11" stroke="#ffffff" strokeWidth="1.5" />
            </g>
          )}

          {mood === 'greeting' && (
            <g transform="translate(140, 115) rotate(15)">
              {/* Friendly waving hand */}
              <circle cx="8" cy="8" r="7" fill="#fde68a" />
              <rect x="3" y="1" width="3" height="8" rx="1.5" fill="#fde68a" />
              <rect x="7" y="0" width="3" height="9" rx="1.5" fill="#fde68a" />
              <rect x="11" y="2" width="3" height="8" rx="1.5" fill="#fde68a" />
            </g>
          )}

          {mood === 'celebrating' && (
            <g>
              {/* Sparkle stars */}
              <path d="M35 45 L38 52 L45 55 L38 58 L35 65 L32 58 L25 55 L32 52 Z" fill="#f59e0b" />
              <path d="M165 45 L168 52 L175 55 L168 58 L165 65 L162 58 L155 55 L162 52 Z" fill="#10b981" />
            </g>
          )}

          {mood === 'thinking' && (
            <g transform="translate(138, 30)">
              {/* Idea lightbulb */}
              <circle cx="10" cy="10" r="9" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
              <path d="M7 19 L13 19 L11 23 L9 23 Z" fill="#94a3b8" />
              <path d="M10 6 L10 2 M16 7 L19 5 M4 7 L1 5" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
            </g>
          )}
        </svg>
      </div>

      {/* Speech Bubble */}
      {showBubble && message && (
        <div className="relative bg-white dark:bg-slate-900 border border-teal-200 dark:border-teal-800/80 rounded-2xl p-3 md:p-4 text-xs md:text-sm text-slate-700 dark:text-slate-200 shadow-sm max-w-sm">
          {/* Speech bubble pointer arrow */}
          <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-0 h-0 border-y-8 border-y-transparent border-r-8 border-r-teal-200 dark:border-r-teal-800" />
          <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-0 h-0 border-y-7 border-y-transparent border-r-7 border-r-white dark:border-r-slate-900" />
          <div className="font-semibold text-teal-700 dark:text-teal-400 mb-0.5 text-xs">
            Xolida ustoz
          </div>
          <p className="leading-relaxed">{message}</p>
        </div>
      )}
    </div>
  );
};

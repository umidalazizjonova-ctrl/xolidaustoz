import React, { useState } from 'react';
import { CULTURAL_IMAGES } from '../../data/culturalImages';
import { useLanguage } from '../../hooks/useLanguage';
import { Info } from 'lucide-react';

interface CulturalImageProps {
  imageKey: string;
  className?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1';
  showCaption?: boolean;
}

export const CulturalImage: React.FC<CulturalImageProps> = ({
  imageKey,
  className = '',
  aspectRatio = '16:9',
  showCaption = true,
}) => {
  const { language } = useLanguage();
  const [showMeta, setShowMeta] = useState(false);
  const data = CULTURAL_IMAGES[imageKey] || CULTURAL_IMAGES['registan'];

  const ratioClass = {
    '16:9': 'aspect-[16/9]',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square',
  }[aspectRatio];

  // Rich themed artistic SVG illustrations for offline & sandboxed reliability
  const renderIllustration = () => {
    switch (imageKey) {
      case 'registan':
        return (
          <svg viewBox="0 0 400 225" className="w-full h-full object-cover">
            <defs>
              <linearGradient id="skyReg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="60%" stopColor="#bae6fd" />
                <stop offset="100%" stopColor="#fef08a" />
              </linearGradient>
              <linearGradient id="tileReg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#0369a1" />
              </linearGradient>
            </defs>
            <rect width="400" height="225" fill="url(#skyReg)" />
            {/* Ground */}
            <rect y="170" width="400" height="55" fill="#e2e8f0" />
            <rect y="175" width="400" height="50" fill="#cbd5e1" />
            {/* Center Madrassah Portal (Peshtak) */}
            <rect x="140" y="55" width="120" height="120" rx="4" fill="#d97706" />
            <path d="M140 55 Q200 20 260 55" fill="#b45309" />
            {/* Arch */}
            <path d="M165 175 V105 Q200 65 235 105 V175 Z" fill="#1e293b" />
            {/* Mosaic Inlay */}
            <rect x="150" y="65" width="100" height="15" fill="url(#tileReg)" rx="2" />
            <circle cx="200" cy="90" r="14" fill="#38bdf8" />
            {/* Minarets */}
            <rect x="122" y="30" width="15" height="145" fill="#f59e0b" rx="2" />
            <path d="M120 30 L137 30 L129.5 15 Z" fill="#0284c7" />
            <rect x="263" y="30" width="15" height="145" fill="#f59e0b" rx="2" />
            <path d="M261 30 L278 30 L270.5 15 Z" fill="#0284c7" />
            {/* Left and Right Madrasah Wings */}
            <rect x="40" y="80" width="80" height="95" fill="#d97706" />
            <path d="M55 175 V120 Q80 100 105 120 V175 Z" fill="#334155" />
            <rect x="280" y="80" width="80" height="95" fill="#d97706" />
            <path d="M295 175 V120 Q320 100 345 120 V175 Z" fill="#334155" />
            {/* Domes */}
            <path d="M60 80 Q80 50 100 80 Z" fill="#0284c7" />
            <path d="M300 80 Q320 50 340 80 Z" fill="#0284c7" />
          </svg>
        );
      case 'buxoro':
        return (
          <svg viewBox="0 0 400 225" className="w-full h-full object-cover">
            <defs>
              <linearGradient id="skyBux" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0284c7" />
                <stop offset="60%" stopColor="#7dd3fc" />
                <stop offset="100%" stopColor="#fed7aa" />
              </linearGradient>
            </defs>
            <rect width="400" height="225" fill="url(#skyBux)" />
            {/* Ground */}
            <rect y="170" width="400" height="55" fill="#d97706" opacity="0.3" />
            <rect y="175" width="400" height="50" fill="#b45309" opacity="0.4" />
            {/* Kalon Minaret */}
            <polygon points="180,175 186,40 214,40 220,175" fill="#d97706" />
            {/* Decorative brick rings */}
            <rect x="185" y="60" width="30" height="6" fill="#92400e" />
            <rect x="184" y="80" width="32" height="7" fill="#b45309" />
            <rect x="183" y="105" width="34" height="8" fill="#92400e" />
            <rect x="182" y="135" width="36" height="8" fill="#b45309" />
            {/* Minaret Crown */}
            <rect x="182" y="32" width="36" height="10" fill="#78350f" rx="1" />
            <path d="M188 32 Q200 18 212 32 Z" fill="#92400e" />
            {/* Kalon Mosque Arch on Left */}
            <path d="M60 175 V100 Q120 70 180 100 V175 Z" fill="#b45309" />
            <path d="M90 175 V125 Q120 105 150 125 V175 Z" fill="#1e293b" />
            <path d="M95 90 Q120 60 145 90 Z" fill="#0284c7" />
            {/* Mir Arab Madrasah on Right */}
            <path d="M220 175 V100 Q280 70 340 100 V175 Z" fill="#b45309" />
            <path d="M250 175 V125 Q280 105 310 125 V175 Z" fill="#1e293b" />
            <path d="M255 90 Q280 60 305 90 Z" fill="#0284c7" />
          </svg>
        );
      case 'non':
        return (
          <svg viewBox="0 0 400 225" className="w-full h-full object-cover">
            <rect width="400" height="225" fill="#fef3c7" className="dark:fill-slate-900" />
            {/* Decorative tablecloth */}
            <circle cx="200" cy="112" r="95" fill="#fde68a" stroke="#d97706" strokeWidth="2" strokeDasharray="6,4" />
            {/* Bread base */}
            <circle cx="200" cy="112" r="75" fill="#f59e0b" stroke="#b45309" strokeWidth="4" />
            {/* Inner toasted ring */}
            <circle cx="200" cy="112" r="58" fill="#fbbf24" stroke="#d97706" strokeWidth="3" />
            {/* Center depressed pattern with chekich (stamp) */}
            <circle cx="200" cy="112" r="38" fill="#d97706" />
            <circle cx="200" cy="112" r="34" fill="#b45309" />
            {/* Chekich needle points */}
            <circle cx="200" cy="112" r="6" fill="#78350f" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <circle
                key={i}
                cx={200 + 18 * Math.cos((angle * Math.PI) / 180)}
                cy={112 + 18 * Math.sin((angle * Math.PI) / 180)}
                r="3"
                fill="#78350f"
              />
            ))}
            {/* Sesame seeds */}
            <rect x="180" y="70" width="4" height="2" rx="1" fill="#78350f" transform="rotate(25 180 70)" />
            <rect x="215" y="72" width="4" height="2" rx="1" fill="#78350f" transform="rotate(-30 215 72)" />
            <rect x="160" y="110" width="4" height="2" rx="1" fill="#78350f" transform="rotate(15 160 110)" />
            <rect x="235" y="115" width="4" height="2" rx="1" fill="#78350f" transform="rotate(-40 235 115)" />
            <rect x="185" y="150" width="4" height="2" rx="1" fill="#78350f" transform="rotate(45 185 150)" />
            <rect x="210" y="152" width="4" height="2" rx="1" fill="#78350f" transform="rotate(-20 210 152)" />
          </svg>
        );
      case 'atlas':
        return (
          <svg viewBox="0 0 400 225" className="w-full h-full object-cover">
            <defs>
              <linearGradient id="atlasGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#f43f5e" />
                <stop offset="20%" stopColor="#eab308" />
                <stop offset="40%" stopColor="#10b981" />
                <stop offset="60%" stopColor="#06b6d4" />
                <stop offset="80%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#f43f5e" />
              </linearGradient>
            </defs>
            <rect width="400" height="225" fill="#18181b" />
            {/* Ikat feathered cloud bands */}
            <path
              d="M0 40 Q50 10 100 40 T200 40 T300 40 T400 40 V90 Q350 120 300 90 T200 90 T100 90 T0 90 Z"
              fill="url(#atlasGrad)"
              opacity="0.9"
            />
            <path
              d="M0 120 Q50 90 100 120 T200 120 T300 120 T400 120 V170 Q350 200 300 170 T200 170 T100 170 T0 170 Z"
              fill="url(#atlasGrad)"
              opacity="0.85"
            />
            {/* Silk weave lines */}
            <g stroke="#ffffff" strokeWidth="0.5" opacity="0.4">
              {[...Array(20)].map((_, i) => (
                <line key={i} x1={i * 20} y1="0" x2={i * 20} y2="225" />
              ))}
            </g>
          </svg>
        );
      case 'anor':
        return (
          <svg viewBox="0 0 400 225" className="w-full h-full object-cover">
            <rect width="400" height="225" fill="#fff1f2" className="dark:fill-slate-900" />
            {/* Pomegranate */}
            <circle cx="170" cy="115" r="55" fill="#e11d48" stroke="#9f1239" strokeWidth="3" />
            <path d="M155 60 L160 50 L170 56 L180 50 L185 60 Z" fill="#9f1239" />
            {/* Sliced Half */}
            <circle cx="255" cy="120" r="48" fill="#fda4af" stroke="#e11d48" strokeWidth="3" />
            <circle cx="255" cy="120" r="40" fill="#fff1f2" />
            {/* Seeds cluster */}
            {[
              [245, 105], [265, 105], [240, 120], [255, 120], [270, 120],
              [245, 135], [265, 135]
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="6" fill="#be123c" />
            ))}
            {/* Green leaf */}
            <path d="M185 55 Q210 35 215 55 Q195 65 185 55 Z" fill="#15803d" />
          </svg>
        );
      case 'dutor':
        return (
          <svg viewBox="0 0 400 225" className="w-full h-full object-cover">
            <rect width="400" height="225" fill="#fdf4ff" className="dark:fill-slate-900" />
            {/* Dutor body (Pear shape) */}
            <g transform="rotate(-30 200 112)">
              <ellipse cx="140" cy="112" rx="45" ry="32" fill="#78350f" stroke="#451a03" strokeWidth="2" />
              <ellipse cx="142" cy="112" rx="38" ry="26" fill="#b45309" />
              {/* Neck */}
              <rect x="180" y="108" width="130" height="8" rx="2" fill="#78350f" />
              {/* Head & Tuning pegs */}
              <rect x="310" y="105" width="22" height="14" rx="2" fill="#451a03" />
              <circle cx="316" cy="102" r="3" fill="#f59e0b" />
              <circle cx="324" cy="102" r="3" fill="#f59e0b" />
              {/* Strings */}
              <line x1="140" y1="110" x2="310" y2="110" stroke="#fef08a" strokeWidth="1.2" />
              <line x1="140" y1="114" x2="310" y2="114" stroke="#fef08a" strokeWidth="1.2" />
            </g>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 400 225" className="w-full h-full object-cover">
            <rect width="400" height="225" fill="#ecfdf5" className="dark:fill-slate-900" />
            <circle cx="200" cy="112" r="60" fill="#10b981" opacity="0.2" />
            <text x="200" y="118" textAnchor="middle" className="text-xl font-bold fill-teal-700 dark:fill-teal-300">
              O‘zbekiston durdonasi
            </text>
          </svg>
        );
    }
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 group ${ratioClass} ${className}`}>
      {renderIllustration()}

      {/* Info attribution overlay trigger button */}
      <button
        onClick={() => setShowMeta(!showMeta)}
        className="absolute top-2 right-2 p-1.5 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white backdrop-blur-xs transition-colors"
        aria-label="Litsenziya va manba ma’lumotlari"
        title="Manba va litsenziya"
      >
        <Info className="w-3.5 h-3.5" />
      </button>

      {/* Meta modal / drawer */}
      {showMeta && (
        <div className="absolute inset-0 bg-slate-950/90 text-white p-3 md:p-4 flex flex-col justify-center text-xs animate-in fade-in duration-200">
          <p className="font-bold text-sm text-teal-300 mb-1">
            {language === 'uz' ? data.nameUz : data.nameRu}
          </p>
          <p className="text-slate-300 mb-2 leading-relaxed">
            {language === 'uz' ? data.descriptionUz : data.descriptionRu}
          </p>
          <div className="text-[11px] text-slate-400 space-y-0.5 border-t border-slate-700 pt-2">
            <div><span className="text-slate-300">Manba:</span> {data.source}</div>
            <div><span className="text-slate-300">Litsenziya:</span> {data.license}</div>
          </div>
          <button
            onClick={() => setShowMeta(false)}
            className="mt-3 self-end px-2.5 py-1 text-[11px] font-medium bg-teal-600 hover:bg-teal-500 rounded-md text-white transition-colors"
          >
            Yopish
          </button>
        </div>
      )}

      {showCaption && (
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-2.5 text-white">
          <p className="font-semibold text-xs truncate">
            {language === 'uz' ? data.nameUz : data.nameRu}
          </p>
          <p className="text-[10px] text-slate-300 line-clamp-1">
            {language === 'uz' ? data.descriptionUz : data.descriptionRu}
          </p>
        </div>
      )}
    </div>
  );
};

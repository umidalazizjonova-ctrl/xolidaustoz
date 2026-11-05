import React, { useState } from 'react';
import { SentencePartType } from '../../types';
import { SENTENCE_PARTS_META } from '../../i18n/translations';
import { useLanguage } from '../../hooks/useLanguage';

interface SentenceHighlightProps {
  words: {
    text: string;
    part?: SentencePartType;
    suffix?: string;
    noteUz?: string;
    noteRu?: string;
  }[];
  className?: string;
  showLegend?: boolean;
}

export const SentenceHighlight: React.FC<SentenceHighlightProps> = ({
  words,
  className = '',
  showLegend = false,
}) => {
  const { language } = useLanguage();
  const [activeWordIdx, setActiveWordIdx] = useState<number | null>(null);

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-3 text-lg md:text-xl font-medium">
        {words.map((item, idx) => {
          const meta = item.part ? SENTENCE_PARTS_META[item.part] : null;
          const isSelected = activeWordIdx === idx;

          return (
            <span
              key={idx}
              onClick={() => setActiveWordIdx(isSelected ? null : idx)}
              className={`relative cursor-pointer transition-all duration-150 select-none inline-block ${
                meta ? `${meta.underlineStyle} ${meta.colorClass}` : 'text-slate-800 dark:text-slate-200'
              } ${isSelected ? 'scale-105 font-bold' : ''}`}
            >
              <span>{item.text}</span>
              {item.suffix && (
                <span className="opacity-90 font-semibold text-amber-600 dark:text-amber-400">
                  {item.suffix}
                </span>
              )}

              {/* Tooltip on click or focus */}
              {isSelected && meta && (
                <span className="absolute -top-14 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap bg-slate-900 text-white text-[11px] px-2.5 py-1.5 rounded-lg shadow-lg pointer-events-none animate-in fade-in zoom-in-95 duration-150">
                  <span className="font-bold text-teal-300">
                    {language === 'uz' ? meta.nameUz : meta.nameRu} ({meta.symbol})
                  </span>
                  <div className="text-[10px] text-slate-300">
                    {language === 'uz' ? meta.questionUz : meta.questionRu}
                  </div>
                  {(item.noteUz || item.noteRu) && (
                    <div className="text-[9px] text-amber-300 mt-0.5">
                      {language === 'uz' ? item.noteUz : item.noteRu}
                    </div>
                  )}
                </span>
              )}
            </span>
          );
        })}
      </div>

      {showLegend && (
        <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-200 dark:border-slate-800 text-xs">
          <span className="text-slate-500 font-medium">
            {language === 'uz' ? 'Bo‘laklar shartli belgisi:' : 'Условные обозначения:'}
          </span>
          {Object.values(SENTENCE_PARTS_META).map((p) => (
            <span key={p.type} className={`inline-flex items-center gap-1.5 ${p.colorClass} font-semibold`}>
              <span className={`px-1 rounded ${p.underlineStyle}`}>{p.symbol}</span>
              <span>{language === 'uz' ? p.nameUz : p.nameRu}</span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

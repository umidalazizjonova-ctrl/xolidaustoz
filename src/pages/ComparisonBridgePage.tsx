import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { SentencePartType } from '../types';
import { SENTENCE_PARTS_META } from '../i18n/translations';
import { MascotXolida } from '../components/common/MascotXolida';
import { Compass, ArrowDownUp, CheckCircle2, Lightbulb, Sparkles } from 'lucide-react';

interface BridgeSentenceModel {
  id: string;
  titleUz: string;
  titleRu: string;
  ruleCategoryUz: string;
  ruleCategoryRu: string;
  uzbekTokens: {
    text: string;
    part: SentencePartType;
    roleUz: string;
    roleRu: string;
  }[];
  russianTokens: {
    text: string;
    part: SentencePartType;
    roleUz: string;
    roleRu: string;
  }[];
  structuralShiftExplanationUz: string;
  structuralShiftExplanationRu: string;
  keyTakeawayUz: string;
  keyTakeawayRu: string;
}

const BRIDGE_MODELS: BridgeSentenceModel[] = [
  {
    id: 'sov_svo',
    titleUz: '1. Asosiy so‘z tartibi: SOV va SVO',
    titleRu: '1. Базовый порядок слов: SOV против SVO',
    ruleCategoryUz: 'Fe’l-kesimning joylashuvi',
    ruleCategoryRu: 'Позиция глагола-сказуемого',
    uzbekTokens: [
      { text: 'Bola', part: 'ega', roleUz: 'Ega (S)', roleRu: 'Подлежащее (S)' },
      { text: 'kitobni', part: 'toldiruvchi', roleUz: 'To‘ldiruvchi (O)', roleRu: 'Дополнение (O)' },
      { text: 'o‘qiydi.', part: 'kesim', roleUz: 'Kesim (V, oxirida!)', roleRu: 'Сказуемое (V, в конце!)' },
    ],
    russianTokens: [
      { text: 'Ребёнок', part: 'ega', roleUz: 'Ega (S)', roleRu: 'Подлежащее (S)' },
      { text: 'читает', part: 'kesim', roleUz: 'Kesim (V, o‘rtada)', roleRu: 'Сказуемое (V, в центре)' },
      { text: 'книгу.', part: 'toldiruvchi', roleUz: 'To‘ldiruvchi (O)', roleRu: 'Дополнение (O)' },
    ],
    structuralShiftExplanationUz:
      'Rus tilida fe’l «читает» gap o‘rtasida (SVO). O‘zbek tilida esa to‘ldiruvchi «kitobni» oldinga chiqadi va fe’l «o‘qiydi» gapning eng oxiriga suriladi (SOV).',
    structuralShiftExplanationRu:
      'В русском глагол «читает» стоит в середине (SVO). В узбекском дополнение «kitobni» выходит вперёд, а глагол «o‘qiydi» строго замыкает предложение (SOV).',
    keyTakeawayUz: 'Kesim o‘zbek tilida gap oxirida keladi.',
    keyTakeawayRu: 'Узбекское сказуемое всегда стоит на последнем месте.',
  },
  {
    id: 'adjective_agreement',
    titleUz: '2. Sifatlarning moslashmasligi',
    titleRu: '2. Неизменяемость узбекских прилагательных',
    ruleCategoryUz: 'Sifat va ot birikmasi',
    ruleCategoryRu: 'Согласование в числе',
    uzbekTokens: [
      { text: 'Biz', part: 'ega', roleUz: 'Ega', roleRu: 'Подлежащее' },
      { text: 'yangi', part: 'aniqlovchi', roleUz: 'Sifat (o‘zgarmas!)', roleRu: 'Прилагательное (без -lar)' },
      { text: 'kitoblarni', part: 'toldiruvchi', roleUz: 'Ot (ko‘plikda)', roleRu: 'Существительное (мн. число)' },
      { text: 'oldik.', part: 'kesim', roleUz: 'Kesim', roleRu: 'Сказуемое' },
    ],
    russianTokens: [
      { text: 'Мы', part: 'ega', roleUz: 'Ega', roleRu: 'Подлежащее' },
      { text: 'взяли', part: 'kesim', roleUz: 'Kesim', roleRu: 'Сказуемое' },
      { text: 'новые', part: 'aniqlovchi', roleUz: 'Sifat (ko‘plikda)', roleRu: 'Прил. во мн. числе (-ые)' },
      { text: 'книги.', part: 'toldiruvchi', roleUz: 'Ot (ko‘plikda)', roleRu: 'Сущ. во мн. числе (-и)' },
    ],
    structuralShiftExplanationUz:
      'Rus tilida sifat ot bilan birga ko‘plik qo‘shimchasini oladi («новые книги»). O‘zbek tilida sifat hech qachon ko‘plik qo‘shimchasini olmaydi: faqat «yangi kitoblar».',
    structuralShiftExplanationRu:
      'В русском языке прилагательное согласуется в числе («новые книги»). В узбекском языке прилагательное неизменно: yangi kitoblar (никогда не *yangilar kitoblar!).',
    keyTakeawayUz: 'O‘zbek tilida sifatlar jinsda ham, sonda ham o‘zgarmaydi.',
    keyTakeawayRu: 'Прилагательные в узбекском не согласуются по родам и числам.',
  },
  {
    id: 'izofet_order',
    titleUz: '3. Qaratqich-qaralmish (Izofa) tartibi',
    titleRu: '3. Изафет: обратный порядок принадлежности',
    ruleCategoryUz: 'Qarashlilik zanjiri',
    ruleCategoryRu: 'Порядок слов в изафете',
    uzbekTokens: [
      { text: 'Maktabning', part: 'aniqlovchi', roleUz: 'Qaratqich (egasining nomi)', roleRu: 'Обладатель (-ning)' },
      { text: 'bog‘i', part: 'ega', roleUz: 'Qaralmish (qarashli narsa +i)', roleRu: 'Предмет обладания (+i)' },
      { text: 'katta.', part: 'kesim', roleUz: 'Kesim', roleRu: 'Сказуемое' },
    ],
    russianTokens: [
      { text: 'Сад', part: 'ega', roleUz: 'Qarashli narsa (boshida)', roleRu: 'Предмет (в начале)' },
      { text: 'школы', part: 'aniqlovchi', roleUz: 'Egasining nomi (orqada)', roleRu: 'Обладатель (позади)' },
      { text: 'большой.', part: 'kesim', roleUz: 'Kesim', roleRu: 'Сказуемое' },
    ],
    structuralShiftExplanationUz:
      'Rus tilida qarashli narsa oldinda keladi («сад школы»). O‘zbek tilida esa butun mantiq teskari: avval kimga tegishli ekani (maktabning), so‘ng narsa va unga egalik qo‘shimchasi (bog‘i) keladi.',
    structuralShiftExplanationRu:
      'В русском «сад» стоит первым, а «школы» вторым. В узбекском обладатель ВСЕГДА впереди, а предмет получает аффикс принадлежности: maktab-ning bog‘-i.',
    keyTakeawayUz: 'Qaratqich birinchi, qaralmish ikkinchi keladi.',
    keyTakeawayRu: 'В изафете обладатель всегда предшествует определяемому слову.',
  },
  {
    id: 'predicate_copula',
    titleUz: '4. Ot-kesimda shaxs bog‘lamasi',
    titleRu: '4. Обязательная личная связка в сказуемом',
    ruleCategoryUz: 'Kesimlik ko‘rsatkichlari',
    ruleCategoryRu: 'Личное согласование сказуемого',
    uzbekTokens: [
      { text: 'Men', part: 'ega', roleUz: 'Ega (1-shaxs)', roleRu: 'Подлежащее (1 лицо)' },
      { text: 'iqtidorli', part: 'aniqlovchi', roleUz: 'Aniqlovchi', roleRu: 'Определение' },
      { text: 'talabaman.', part: 'kesim', roleUz: 'Ot-kesim + shaxs bog‘lamasi (-man)', roleRu: 'Сказуемое + связка (-man)' },
    ],
    russianTokens: [
      { text: 'Я', part: 'ega', roleUz: 'Ega', roleRu: 'Подлежащее' },
      { text: 'способный', part: 'aniqlovchi', roleUz: 'Aniqlovchi', roleRu: 'Определение' },
      { text: 'студент.', part: 'kesim', roleUz: 'Ot-kesim (bog‘lama yo‘q)', roleRu: 'Именное сказуемое (нулевая связка)' },
    ],
    structuralShiftExplanationUz:
      'Rus tilida «Я студент» shaklida bog‘lama tushib qoladi. O‘zbek tilida esa 1-shaxsda -man bog‘lamasi majburiydir: «Men talabaman». Busiz gap tugallanmagan hisoblanadi.',
    structuralShiftExplanationRu:
      'Русский использует нулевую связку в настоящем времени. В узбекском личное окончание строго обязательно: talabaman (буквально «я есть студент»).',
    keyTakeawayUz: 'Men uchun -man, Sen uchun -san, Biz uchun -miz, Siz uchun -siz qo‘shiladi.',
    keyTakeawayRu: 'Именное сказуемое обязано согласоваться с подлежащим личным суффиксом.',
  },
  {
    id: 'relative_clause_participle',
    titleUz: '5. «Который» o‘rniga sifatdosh',
    titleRu: '5. Замена придаточного с «который» причастным оборотом',
    ruleCategoryUz: 'Murakkab sintaktik ixchamlik',
    ruleCategoryRu: 'Причастная трансформация',
    uzbekTokens: [
      { text: 'Kecha', part: 'hol', roleUz: 'Payt holi', roleRu: 'Обст. времени' },
      { text: 'kelgan', part: 'aniqlovchi', roleUz: 'Sifatdosh aniqlovchi (-gan)', roleRu: 'Причастие на -gan' },
      { text: 'mehmon', part: 'ega', roleUz: 'Ega', roleRu: 'Подлежащее' },
      { text: 'Samarqanddan.', part: 'kesim', roleUz: 'Kesim', roleRu: 'Сказуемое' },
    ],
    russianTokens: [
      { text: 'Гость,', part: 'ega', roleUz: 'Ega', roleRu: 'Подлежащее' },
      { text: 'который', part: 'aniqlovchi', roleUz: 'Bog‘lovchi so‘z', roleRu: 'Союзное слово' },
      { text: 'пришёл', part: 'kesim', roleUz: 'Ergash kesim', roleRu: 'Придаточный глагол' },
      { text: 'вчера,', part: 'hol', roleUz: 'Payt holi', roleRu: 'Обст. времени' },
      { text: 'из Самарканда.', part: 'kesim', roleUz: 'Bosh gap kesimi', roleRu: 'Главное сказуемое' },
    ],
    structuralShiftExplanationUz:
      'Rus tilidagi murakkab «который»li ergash gap o‘zbek tilida -gan sifatdoshi yordamida bitta sodda aniqlovchili birikmaga aylanadi: «Kecha kelgan mehmon».',
    structuralShiftExplanationRu:
      'Громоздкое русское придаточное со словом «который» в узбекском легко и естественно упаковывается в простое предложение с причастием на -gan: Kecha kelgan mehmon.',
    keyTakeawayUz: 'O‘zbek tili fikrni ixcham sifatdosh bilan ifodalashni yoqtiradi.',
    keyTakeawayRu: 'Причастия на -gan / -digan делают узбекскую речь чистой и лаконичной.',
  },
];

export const ComparisonBridgePage: React.FC = () => {
  const { language } = useLanguage();
  const [selectedModelId, setSelectedModelId] = useState<string>(BRIDGE_MODELS[0].id);
  const [activePartHighlight, setActivePartHighlight] = useState<SentencePartType | null>(null);

  const model = BRIDGE_MODELS.find((m) => m.id === selectedModelId) || BRIDGE_MODELS[0];

  return (
    <div className="py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
      {/* Title */}
      <div className="pb-6 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1">
            <Compass className="w-3.5 h-3.5" />
            <span>{language === 'uz' ? 'Qiyosiy tahlil paneli' : 'Панель сравнительного анализа'}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {language === 'uz' ? 'Sintaksis ko‘prigi' : 'Мост синтаксиса'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            {language === 'uz'
              ? 'Bitta gap ikki tilda. Bo‘laklar bir xil rang va belgilarda berilgan bo‘lib, so‘z tartibi va qo‘shimchalar farqini yaqqol ko‘rsatadi.'
              : 'Одно и то же предложение на двух языках. Одинаковые цвета и условные подчёркивания наглядно демонстрируют разницу порядка слов.'}
          </p>
        </div>

        {/* Model Selector dropdown/tabs */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl max-w-md">
          {BRIDGE_MODELS.map((m, idx) => (
            <button
              key={m.id}
              onClick={() => {
                setSelectedModelId(m.id);
                setActivePartHighlight(null);
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                selectedModelId === m.id
                  ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-300 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              № {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Main Bridge Interactive Stage */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
            {language === 'uz' ? model.ruleCategoryUz : model.ruleCategoryRu}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
            {language === 'uz' ? model.titleUz : model.titleRu}
          </h2>
        </div>

        {/* Visual Dual-Language Bridge Stage */}
        <div className="space-y-6 p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800">
          
          {/* Top Row: Uzbek Structure */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-teal-700 dark:text-teal-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-teal-500" />
              <span>O‘ZBEK TILI (SOV / Sintaktik tartib):</span>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 text-lg sm:text-2xl font-bold">
              {model.uzbekTokens.map((token, idx) => {
                const meta = SENTENCE_PARTS_META[token.part];
                const isHovered = activePartHighlight === token.part;

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setActivePartHighlight(token.part)}
                    onMouseLeave={() => setActivePartHighlight(null)}
                    className={`p-3 rounded-2xl border transition-all cursor-pointer select-none ${
                      meta ? `${meta.bgClass} ${meta.borderClass} ${meta.colorClass} ${meta.underlineStyle}` : ''
                    } ${isHovered ? 'scale-105 shadow-md ring-2 ring-teal-500/50' : 'shadow-2xs'}`}
                  >
                    <span>{token.text}</span>
                    <span className="block text-[11px] font-semibold text-slate-500 mt-1">
                      {language === 'uz' ? token.roleUz : token.roleRu}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Bridge Connector Indicator */}
          <div className="flex items-center justify-center gap-3 py-2 text-xs font-bold text-slate-400 dark:text-slate-500">
            <div className="h-px bg-slate-300 dark:bg-slate-800 flex-1" />
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs text-teal-600 dark:text-teal-400">
              <ArrowDownUp className="w-3.5 h-3.5" />
              <span>{language === 'uz' ? 'Qiyosiy ko‘prik' : 'Сравнительный мост'}</span>
            </div>
            <div className="h-px bg-slate-300 dark:bg-slate-800 flex-1" />
          </div>

          {/* Bottom Row: Russian Structure */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-700 dark:text-blue-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>РУССКИЙ ЯЗЫК (SVO / Соответствие):</span>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 text-lg sm:text-2xl font-bold">
              {model.russianTokens.map((token, idx) => {
                const meta = SENTENCE_PARTS_META[token.part];
                const isHovered = activePartHighlight === token.part;

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setActivePartHighlight(token.part)}
                    onMouseLeave={() => setActivePartHighlight(null)}
                    className={`p-3 rounded-2xl border transition-all cursor-pointer select-none ${
                      meta ? `${meta.bgClass} ${meta.borderClass} ${meta.colorClass} ${meta.underlineStyle}` : ''
                    } ${isHovered ? 'scale-105 shadow-md ring-2 ring-blue-500/50' : 'shadow-2xs'}`}
                  >
                    <span>{token.text}</span>
                    <span className="block text-[11px] font-semibold text-slate-500 mt-1">
                      {language === 'uz' ? token.roleUz : token.roleRu}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Detailed Comparative Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <span>{language === 'uz' ? 'Qurilish farqi tahlili:' : 'Анализ различий:'}</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'uz' ? model.structuralShiftExplanationUz : model.structuralShiftExplanationRu}
            </p>
            <div className="p-3 bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 rounded-xl text-xs font-semibold text-teal-800 dark:text-teal-300">
              ✓ {language === 'uz' ? model.keyTakeawayUz : model.keyTakeawayRu}
            </div>
          </div>

          {/* Mascot Guidance */}
          <div className="flex items-center justify-center p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200/80 dark:border-slate-700">
            <MascotXolida
              mood="teaching"
              message={
                language === 'uz'
                  ? `Diqqat qiling: ranglar va chiziqlar har ikkala tilda bir xil bo‘laklarni ko‘rsatmoqda. Bo‘laklar ustiga sichqonchani olib borib, ularning qanday ko‘chishini kuzating!`
                  : `Обратите внимание: одинаковые цвета и линии связывают эквивалентные члены. Наведите курсор на слово, чтобы увидеть его параллель в другом языке!`
              }
              size="md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { useProgress } from '../hooks/useProgress';
import { EXERCISES } from '../data/exercises';
import { MODULES } from '../data/modules';
import { ExerciseItem, ExerciseType, DifficultyLevel } from '../types';
import { MascotXolida } from '../components/common/MascotXolida';
import {
  CheckSquare,
  Filter,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';

export const ExercisesPage: React.FC = () => {
  const { language, t } = useLanguage();
  const { progress, completeExercise } = useProgress();

  const [selectedModule, setSelectedModule] = useState<number | 'all'>('all');
  const [selectedType, setSelectedType] = useState<ExerciseType | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | 'all'>('all');
  const [currentIdx, setCurrentIdx] = useState(0);

  // Interaction states for current exercise
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [matchingSelections, setMatchingSelections] = useState<Record<string, string>>({});
  const [activeMatchingKey, setActiveMatchingKey] = useState<string | null>(null);
  const [orderedWords, setOrderedWords] = useState<string[]>([]);
  const [availableWords, setAvailableWords] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Filter exercises
  const filtered = EXERCISES.filter((ex) => {
    if (selectedModule !== 'all' && ex.moduleId !== selectedModule) return false;
    if (selectedType !== 'all' && ex.type !== selectedType) return false;
    if (selectedDifficulty !== 'all' && ex.difficulty !== selectedDifficulty) return false;
    return true;
  });

  const currentExercise: ExerciseItem | undefined = filtered[currentIdx % (filtered.length || 1)];

  // Reset interaction state on change
  const resetInteraction = (ex?: ExerciseItem) => {
    setSelectedOption(null);
    setMatchingSelections({});
    setActiveMatchingKey(null);
    setIsSubmitted(false);
    setIsCorrect(false);

    if (ex && ex.type === 'word_order' && ex.words) {
      setAvailableWords([...ex.words].sort(() => Math.random() - 0.5));
      setOrderedWords([]);
    }
  };

  const handleNextExercise = () => {
    const next = (currentIdx + 1) % filtered.length;
    setCurrentIdx(next);
    resetInteraction(filtered[next]);
  };

  const handlePrevExercise = () => {
    const prev = (currentIdx - 1 + filtered.length) % filtered.length;
    setCurrentIdx(prev);
    resetInteraction(filtered[prev]);
  };

  const handleCheck = () => {
    if (!currentExercise || isSubmitted) return;

    let right = false;
    if (
      currentExercise.type === 'multiple_choice' ||
      currentExercise.type === 'fill_blank' ||
      currentExercise.type === 'true_false' ||
      currentExercise.type === 'error_hunt' ||
      currentExercise.type === 'translation' ||
      currentExercise.type === 'sentence_parts'
    ) {
      right = selectedOption === currentExercise.correctAnswer;
    } else if (currentExercise.type === 'word_order') {
      right = orderedWords.join(' ') === currentExercise.correctAnswer;
    } else if (currentExercise.type === 'matching') {
      const correctMap = currentExercise.correctAnswer as Record<string, string>;
      right = Object.keys(correctMap).every(
        (key) => matchingSelections[key] === correctMap[key]
      );
    }

    setIsSubmitted(true);
    setIsCorrect(right);

    if (right) {
      completeExercise(currentExercise.id);
    }
  };

  return (
    <div className="py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
      {/* Page Header */}
      <div className="pb-6 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1">
            <CheckSquare className="w-3.5 h-3.5" />
            <span>{t.exercises}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {language === 'uz' ? '8 xil turdagi amaliy mashqlar' : '8 типов практических упражнений'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            {language === 'uz'
              ? 'Barcha 10 ta modul bo‘yicha 100 dan ortiq interaktiv mashqlar. Har bir savoldan so‘ng Xolida ustoz tushuntirish beradi.'
              : 'Свыше 100 упражнений по всем 10 модулям. С пояснениями учителя Холиды после каждого ответа.'}
          </p>
        </div>

        <div className="text-xs font-bold text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-2xl">
          {language === 'uz' ? 'Bajarilgan mashqlar:' : 'Выполнено упражнений:'}{' '}
          <span className="text-teal-600 dark:text-teal-400 font-extrabold">
            {progress.completedExerciseIds.length} / {EXERCISES.length}
          </span>
        </div>
      </div>

      {/* Filter Ribbon */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200">
          <Filter className="w-3.5 h-3.5 text-teal-600" />
          <span>{language === 'uz' ? 'Filtrlar:' : 'Фильтры:'}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Module Selector */}
          <div>
            <label className="text-[11px] font-semibold text-slate-400 block mb-1">
              {language === 'uz' ? 'Modul bo‘yicha' : 'По модулю'}
            </label>
            <select
              value={selectedModule}
              onChange={(e) => {
                const val = e.target.value === 'all' ? 'all' : Number(e.target.value);
                setSelectedModule(val);
                setCurrentIdx(0);
                resetInteraction();
              }}
              className="w-full text-xs font-semibold p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
            >
              <option value="all">{language === 'uz' ? 'Barcha 10 ta modul' : 'Все 10 модулей'}</option>
              {MODULES.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.id}-modul: {language === 'uz' ? m.titleUz.split(':')[1] || m.titleUz : m.titleRu.split(':')[1] || m.titleRu}
                </option>
              ))}
            </select>
          </div>

          {/* Exercise Type */}
          <div>
            <label className="text-[11px] font-semibold text-slate-400 block mb-1">
              {language === 'uz' ? 'Mashq turi' : 'Тип упражнения'}
            </label>
            <select
              value={selectedType}
              onChange={(e) => {
                setSelectedType(e.target.value as ExerciseType | 'all');
                setCurrentIdx(0);
                resetInteraction();
              }}
              className="w-full text-xs font-semibold p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
            >
              <option value="all">{language === 'uz' ? 'Barcha turlar' : 'Все типы'}</option>
              <option value="multiple_choice">{language === 'uz' ? 'To‘g‘ri variantni tanlash' : 'Выбор варианта'}</option>
              <option value="fill_blank">{language === 'uz' ? 'Bo‘sh joyni to‘ldirish' : 'Заполнение пропуска'}</option>
              <option value="matching">{language === 'uz' ? 'Moslashtirish (juftlash)' : 'Сопоставление'}</option>
              <option value="word_order">{language === 'uz' ? 'Gap tuzish' : 'Сборка предложения'}</option>
              <option value="error_hunt">{language === 'uz' ? 'Xatoni topish' : 'Поиск ошибки'}</option>
              <option value="translation">{language === 'uz' ? 'Tarjima qilish' : 'Перевод'}</option>
              <option value="sentence_parts">{language === 'uz' ? 'Bo‘laklarini ajratish' : 'Члены предложения'}</option>
              <option value="true_false">{language === 'uz' ? 'To‘g‘ri / Noto‘g‘ri' : 'Верно / Неверно'}</option>
            </select>
          </div>

          {/* Difficulty */}
          <div>
            <label className="text-[11px] font-semibold text-slate-400 block mb-1">
              {language === 'uz' ? 'Murakkablik' : 'Сложность'}
            </label>
            <select
              value={selectedDifficulty}
              onChange={(e) => {
                setSelectedDifficulty(e.target.value as DifficultyLevel | 'all');
                setCurrentIdx(0);
                resetInteraction();
              }}
              className="w-full text-xs font-semibold p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
            >
              <option value="all">{language === 'uz' ? 'Barcha darajalar' : 'Все уровни'}</option>
              <option value="oson">{language === 'uz' ? 'Oson' : 'Лёгкий'}</option>
              <option value="orta">{language === 'uz' ? 'O‘rta' : 'Средний'}</option>
              <option value="qiyin">{language === 'uz' ? 'Qiyin' : 'Сложный'}</option>
            </select>
          </div>
        </div>
      </div>

      {/* Exercise Card */}
      {!currentExercise ? (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-12 text-center text-slate-500">
          {language === 'uz' ? 'Tanlangan filtrlar bo‘yicha mashq topilmadi.' : 'По выбранным фильтрам упражнений не найдено.'}
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
          {/* Card Meta */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 text-xs font-bold border border-teal-200 dark:border-teal-800">
                {currentExercise.moduleId}-modul
              </span>
              <span className="text-xs font-semibold text-slate-500 capitalize">
                {currentExercise.difficulty}
              </span>
            </div>

            <div className="text-xs font-semibold text-slate-400">
              {currentIdx + 1} / {filtered.length}
            </div>
          </div>

          {/* Question / Instruction */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
              {language === 'uz' ? currentExercise.instructionUz : currentExercise.instructionRu}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-relaxed">
              {currentExercise.questionUz}
            </h3>
            {currentExercise.questionRu && (
              <p className="text-xs text-slate-500 dark:text-slate-400">
                «{currentExercise.questionRu}»
              </p>
            )}
          </div>

          {/* Input / Option Controls based on Exercise Type */}
          <div className="pt-2">
            {/* Multiple Choice, Fill Blank, Error Hunt, Translation, Sentence Parts, True/False */}
            {currentExercise.options && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentExercise.options.map((opt, i) => {
                  const isThis = selectedOption === opt;
                  let btnStyle = 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-teal-400';
                  if (isSubmitted) {
                    if (opt === currentExercise.correctAnswer) {
                      btnStyle = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-800 dark:text-emerald-300 font-bold';
                    } else if (isThis) {
                      btnStyle = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-800 dark:text-rose-300 font-bold';
                    }
                  } else if (isThis) {
                    btnStyle = 'bg-teal-50 dark:bg-teal-950 border-teal-500 text-teal-800 dark:text-teal-200 ring-2 ring-teal-500/20 font-bold';
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => !isSubmitted && setSelectedOption(opt)}
                      disabled={isSubmitted}
                      className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all cursor-pointer ${btnStyle}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Word Order Type */}
            {currentExercise.type === 'word_order' && (
              <div className="space-y-4">
                <div className="min-h-[56px] p-3 rounded-xl border-2 border-dashed border-teal-300 dark:border-teal-700/80 bg-teal-50/30 dark:bg-teal-950/20 flex flex-wrap gap-2 items-center">
                  {orderedWords.length === 0 ? (
                    <span className="text-xs text-slate-400">
                      {language === 'uz' ? 'So‘zlarni pastdan bosing...' : 'Нажимайте слова ниже...'}
                    </span>
                  ) : (
                    orderedWords.map((w, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          if (isSubmitted) return;
                          setOrderedWords((prev) => prev.filter((_, i) => i !== idx));
                          setAvailableWords((prev) => [...prev, w]);
                        }}
                        disabled={isSubmitted}
                        className="px-3 py-1.5 rounded-lg bg-teal-600 text-white font-bold text-xs flex items-center gap-1 cursor-pointer"
                      >
                        <span>{w}</span>
                        <span className="text-teal-200">×</span>
                      </button>
                    ))
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {availableWords.map((w, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        if (isSubmitted) return;
                        setOrderedWords((prev) => [...prev, w]);
                        setAvailableWords((prev) => prev.filter((_, i) => i !== idx));
                      }}
                      disabled={isSubmitted}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 cursor-pointer"
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Matching Type */}
            {currentExercise.type === 'matching' && currentExercise.pairs && (
              <div className="space-y-3">
                <p className="text-xs text-slate-400">
                  {language === 'uz' ? 'Mos juftliklarni bosing:' : 'Нажимайте на пары для сопоставления:'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentExercise.pairs.map((p, idx) => {
                    const isMatched = matchingSelections[p.uz] !== undefined;

                    return (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl border flex items-center justify-between text-xs font-bold ${
                          isMatched
                            ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-400 text-emerald-800 dark:text-emerald-300'
                            : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700'
                        }`}
                      >
                        <span className="text-teal-700 dark:text-teal-300">{p.uz}</span>
                        <button
                          onClick={() => {
                            if (isSubmitted) return;
                            setMatchingSelections((prev) => ({
                              ...prev,
                              [p.uz]: p.ru,
                            }));
                          }}
                          disabled={isSubmitted || isMatched}
                          className="px-2 py-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-[11px] hover:border-teal-400 cursor-pointer disabled:cursor-default"
                        >
                          {isMatched ? '✓ ' + p.ru : p.ru}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Feedback & Mascot */}
          {isSubmitted && (
            <div className="mt-4 p-4 rounded-xl border bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 animate-in fade-in duration-200">
              <MascotXolida
                mood={isCorrect ? 'celebrating' : 'thinking'}
                message={
                  isCorrect
                    ? language === 'uz'
                      ? `To‘g‘ri javob! ${currentExercise.explanationUz}`
                      : `Верно! ${currentExercise.explanationRu}`
                    : language === 'uz'
                    ? `Noto‘g‘ri. Izoh: ${currentExercise.explanationUz}`
                    : `Не совсем точно. Пояснение: ${currentExercise.explanationRu}`
                }
                size="md"
              />
            </div>
          )}

          {/* Action buttons */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevExercise}
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Oldingi mashq"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextExercise}
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Keyingi mashq"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => resetInteraction(currentExercise)}
                className="px-3 py-2 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{language === 'uz' ? 'Qayta urinish' : 'Сброс'}</span>
              </button>

              {!isSubmitted ? (
                <button
                  onClick={handleCheck}
                  className="px-5 py-2 text-xs font-bold rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{language === 'uz' ? 'Tekshirish' : 'Проверить'}</span>
                </button>
              ) : (
                <button
                  onClick={handleNextExercise}
                  className="px-5 py-2 text-xs font-bold rounded-lg bg-amber-500 text-slate-900 hover:bg-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>{language === 'uz' ? 'Keyingisi' : 'Следующее'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

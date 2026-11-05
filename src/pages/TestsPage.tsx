import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { useProgress } from '../hooks/useProgress';
import { TEST_QUESTIONS } from '../data/tests';
import { MODULES } from '../data/modules';
import { TestQuestion, DifficultyLevel } from '../types';
import { MascotXolida } from '../components/common/MascotXolida';
import {
  FileText,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Trophy,
  ArrowRight,
  Sparkles,
  HelpCircle,
  BookOpen,
} from 'lucide-react';

export const TestsPage: React.FC = () => {
  const { language, t } = useLanguage();
  const { addXP, completeTest } = useProgress();

  const [testMode, setTestMode] = useState<'idle' | 'running' | 'completed'>('idle');
  const [selectedModule, setSelectedModule] = useState<number | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | 'all'>('all');

  const [questions, setQuestions] = useState<TestQuestion[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});

  const startTest = () => {
    let pool = TEST_QUESTIONS.filter((q) => {
      if (selectedModule !== 'all' && q.moduleId !== selectedModule) return false;
      if (selectedDifficulty !== 'all' && q.difficulty !== selectedDifficulty) return false;
      return true;
    });

    // Shuffle questions
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const count = selectedModule === 'all' ? 15 : 10;
    const finalSet = shuffled.slice(0, Math.min(count, shuffled.length));

    setQuestions(finalSet);
    setCurrentQIndex(0);
    setUserAnswers({});
    setTestMode('running');
  };

  const handleSelectOption = (optionIndex: number) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQIndex]: optionIndex,
    }));
  };

  const handleNext = () => {
    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex((prev) => prev + 1);
    } else {
      finishTest();
    }
  };

  const finishTest = () => {
    setTestMode('completed');

    // Calculate score
    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctIndex) {
        correctCount++;
      }
    });

    const percent = Math.round((correctCount / questions.length) * 100);
    const earnedXP = percent >= 80 ? 60 : percent >= 60 ? 40 : 20;
    addXP(earnedXP);

    if (selectedModule !== 'all') {
      completeTest(`mod_${selectedModule}`);
    }
  };

  // Analysis
  const currentQ = questions[currentQIndex];
  const answeredCount = Object.keys(userAnswers).length;

  let correctCount = 0;
  const incorrectQuestions: { q: TestQuestion; userIdx: number }[] = [];
  if (testMode === 'completed') {
    questions.forEach((q, idx) => {
      const uAns = userAnswers[idx];
      if (uAns === q.correctIndex) {
        correctCount++;
      } else {
        incorrectQuestions.push({ q, userIdx: uAns });
      }
    });
  }

  const scorePercent = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0;

  // Recommendations: which modules were failed
  const failedModuleIds = Array.from(new Set(incorrectQuestions.map((item) => item.q.moduleId)));

  return (
    <div className="py-6 sm:py-10 max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
      {/* Title */}
      <div className="pb-6 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1">
            <FileText className="w-3.5 h-3.5" />
            <span>{t.tests}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {language === 'uz' ? 'Darajali sintaksis testlari' : 'Тесты по сравнительному синтаксису'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            {language === 'uz'
              ? '100 dan ortiq savollardan iborat sinov banki. Test yakunida to‘liq xatolar tahlili va takrorlash bo‘yicha tavsiyalar beriladi.'
              : 'Банк из 100+ вопросов с 3 уровнями сложности. Детальный разбор ошибок и рекомендации по повторению.'}
          </p>
        </div>
      </div>

      {/* IDLE: Setup and Start */}
      {testMode === 'idle' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Module Picker */}
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-200 block mb-1.5">
                {language === 'uz' ? 'Qaysi mavzudan test topshirasiz?' : 'Выберите модуль для теста:'}
              </label>
              <select
                value={selectedModule}
                onChange={(e) => setSelectedModule(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                className="w-full text-xs font-semibold p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
              >
                <option value="all">
                  {language === 'uz' ? 'Umumiy yakuniy test (Barcha modullardan 15 savol)' : 'Общий итоговый тест (15 вопросов)'}
                </option>
                {MODULES.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.id}-modul: {language === 'uz' ? m.titleUz.split(':')[1] || m.titleUz : m.titleRu.split(':')[1] || m.titleRu}
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulty Picker */}
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-200 block mb-1.5">
                {language === 'uz' ? 'Qiyinlik darajasi:' : 'Уровень сложности:'}
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value as DifficultyLevel | 'all')}
                className="w-full text-xs font-semibold p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
              >
                <option value="all">{language === 'uz' ? 'Aralash (barcha darajalar)' : 'Смешанный (все уровни)'}</option>
                <option value="oson">{language === 'uz' ? 'Oson (5-sinf darajasi)' : 'Лёгкий'}</option>
                <option value="orta">{language === 'uz' ? 'O‘rta (6–7-sinf darajasi)' : 'Средний'}</option>
                <option value="qiyin">{language === 'uz' ? 'Qiyin (8–9-sinf darajasi)' : 'Сложный'}</option>
              </select>
            </div>
          </div>

          <div className="p-4 bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 rounded-2xl flex items-center justify-between">
            <div className="text-xs text-teal-800 dark:text-teal-300">
              💡 {language === 'uz' ? 'Savollar tasodifiy aralashtiriladi va har bir urinish yangilanadi.' : 'Вопросы перемешиваются случайным образом при каждом запуске.'}
            </div>
            <button
              onClick={startTest}
              className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 active:scale-95 text-white font-bold text-sm shadow-sm transition-all cursor-pointer"
            >
              {language === 'uz' ? 'Testni boshlash' : 'Начать тест'}
            </button>
          </div>
        </div>
      )}

      {/* RUNNING: Active Test Card */}
      {testMode === 'running' && currentQ && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
          {/* Progress Indicator */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500">
              <span>
                {language === 'uz' ? 'Savol:' : 'Вопрос:'} {currentQIndex + 1} / {questions.length}
              </span>
              <span className="capitalize text-teal-600 dark:text-teal-400">
                {currentQ.difficulty}
              </span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
              <div
                className="bg-teal-500 h-full rounded-full transition-all duration-200"
                style={{ width: `${((currentQIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Text */}
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-relaxed">
              {currentQ.questionUz}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              «{currentQ.questionRu}»
            </p>
          </div>

          {/* Options */}
          <div className="space-y-2.5 pt-2">
            {currentQ.options.map((opt, i) => {
              const isSelected = userAnswers[currentQIndex] === i;

              return (
                <button
                  key={i}
                  onClick={() => handleSelectOption(i)}
                  className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-teal-50 dark:bg-teal-950/80 border-teal-500 text-teal-800 dark:text-teal-200 ring-2 ring-teal-500/20 font-bold'
                      : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-teal-400'
                  }`}
                >
                  <span>{opt}</span>
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                      isSelected
                        ? 'border-teal-600 bg-teal-600 text-white'
                        : 'border-slate-300 dark:border-slate-600'
                    }`}
                  >
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Nav buttons */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <button
              onClick={() => setCurrentQIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentQIndex === 0}
              className="px-4 py-2 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 disabled:opacity-30 cursor-pointer"
            >
              {t.previous}
            </button>

            <button
              onClick={handleNext}
              disabled={userAnswers[currentQIndex] === undefined}
              className="px-5 py-2 text-xs font-bold rounded-lg bg-teal-600 text-white hover:bg-teal-700 disabled:opacity-50 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>{currentQIndex === questions.length - 1 ? (language === 'uz' ? 'Yakunlash' : 'Завершить') : t.next}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* COMPLETED: Score & Detailed Error Analysis */}
      {testMode === 'completed' && (
        <div className="space-y-6 animate-in fade-in duration-300">
          {/* Result Card */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm text-center space-y-4">
            <div className="inline-flex p-4 rounded-3xl bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 mx-auto">
              <Trophy className="w-10 h-10 text-amber-500" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {scorePercent >= 80
                ? language === 'uz' ? 'A’lo natija! Barakalla!' : 'Превосходный результат!'
                : scorePercent >= 60
                ? language === 'uz' ? 'Yaxshi natija!' : 'Хороший результат!'
                : language === 'uz' ? 'Yana ozroq takrorlash kerak' : 'Нужно немного повторить'}
            </h2>

            <div className="text-4xl sm:text-5xl font-black text-teal-600 dark:text-teal-400 tabular-nums">
              {scorePercent}%
            </div>

            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              {language === 'uz'
                ? `${questions.length} ta savoldan ${correctCount} tasiga to‘g‘ri javob berdingiz.`
                : `Вы правильно ответили на ${correctCount} из ${questions.length} вопросов.`}
            </p>

            <div className="pt-2">
              <button
                onClick={startTest}
                className="px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
              >
                {language === 'uz' ? 'Qayta topshirish' : 'Пройти заново'}
              </button>
            </div>
          </div>

          {/* Recommendations for failed modules */}
          {failedModuleIds.length > 0 && (
            <div className="p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800 dark:text-amber-400">
                <BookOpen className="w-4 h-4" />
                <span>
                  {language === 'uz'
                    ? 'Xolida ustozdan takrorlash uchun tavsiyalar:'
                    : 'Рекомендации учителя Холиды по повторению:'}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {failedModuleIds.map((modId) => {
                  const m = MODULES.find((item) => item.id === modId);
                  if (!m) return null;
                  return (
                    <Link
                      key={modId}
                      to={`/dars/${m.slug}`}
                      className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-700 text-xs font-bold text-amber-900 dark:text-amber-300 hover:border-amber-500 transition-colors"
                    >
                      📖 {m.id}-modul: {language === 'uz' ? m.titleUz.split(':')[1] || m.titleUz : m.titleRu.split(':')[1] || m.titleRu}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Detailed Error Breakdown */}
          {incorrectQuestions.length > 0 && (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {language === 'uz' ? 'Xatolar tahlili va to‘g‘ri javoblar:' : 'Разбор ошибок:'}
              </h3>

              <div className="space-y-4">
                {incorrectQuestions.map(({ q, userIdx }, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-2 text-xs"
                  >
                    <p className="font-bold text-slate-800 dark:text-slate-100 text-sm">
                      {q.questionUz}
                    </p>
                    <div className="text-rose-600 dark:text-rose-400 font-semibold">
                      ✕ {language === 'uz' ? 'Sizning javobingiz:' : 'Ваш ответ:'}{' '}
                      <span>{userIdx !== undefined ? q.options[userIdx] : 'Javob berilmagan'}</span>
                    </div>
                    <div className="text-emerald-600 dark:text-emerald-400 font-bold">
                      ✓ {language === 'uz' ? 'To‘g‘ri javob:' : 'Правильный ответ:'}{' '}
                      <span>{q.options[q.correctIndex]}</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-200 dark:border-slate-700">
                      💡 {language === 'uz' ? q.explanationUz : q.explanationRu}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

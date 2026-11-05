import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { MODULES } from '../data/modules';
import { EXERCISES } from '../data/exercises';
import { ExerciseItem } from '../types';
import { GraduationCap, Printer, CheckSquare, Settings2, FileText } from 'lucide-react';

export const TeacherPage: React.FC = () => {
  const { language, t } = useLanguage();

  const [selectedModules, setSelectedModules] = useState<number[]>([1, 2, 8, 10]);
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [includeAnswers, setIncludeAnswers] = useState<boolean>(true);
  const [worksheetTitle, setWorksheetTitle] = useState<string>(
    'O‘zbek tili qiyosiy sintaksisi bo‘yicha nazorat / amaliy ish'
  );

  const toggleModule = (id: number) => {
    setSelectedModules((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  // Generate worksheet tasks from selected modules
  const candidateExercises = EXERCISES.filter((ex) => selectedModules.includes(ex.moduleId));
  const selectedExercises = candidateExercises.slice(0, questionCount);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-6 sm:py-10 max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
      {/* Title (Hidden in print) */}
      <div className="no-print pb-6 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{t.teacherMode}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {language === 'uz' ? 'O‘qituvchi rejimi: Tarqatma varaq yaratgich' : 'Режим учителя: Генератор раздаточных карточек'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            {language === 'uz'
              ? 'Dars va nazorat ishlari uchun mashqlarni tanlang, sozlang va qog‘ozga yoki PDF shaklida chop eting.'
              : 'Создавайте индивидуальные раздаточные материалы для контрольных и самостоятельных работ с готовыми ключами.'}
          </p>
        </div>

        <button
          onClick={handlePrint}
          className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-sm transition-colors flex items-center gap-2 cursor-pointer self-start md:self-auto"
        >
          <Printer className="w-4 h-4" />
          <span>{language === 'uz' ? 'Chop etish (Print / PDF)' : 'Печать / Сохранить в PDF'}</span>
        </button>
      </div>

      {/* Teacher Configuration Controls (Hidden in print) */}
      <div className="no-print bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xs space-y-5">
        <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Settings2 className="w-4 h-4 text-teal-600" />
          <span>{language === 'uz' ? 'Tarqatma varaq sozlamalari:' : 'Настройки материала:'}</span>
        </h2>

        {/* Modules Checkboxes */}
        <div>
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">
            {language === 'uz' ? 'Mavzularni tanlang:' : 'Выберите модули:'}
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {MODULES.map((m) => {
              const isChecked = selectedModules.includes(m.id);
              return (
                <button
                  key={m.id}
                  onClick={() => toggleModule(m.id)}
                  className={`p-2 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer flex items-center justify-between ${
                    isChecked
                      ? 'bg-teal-50 dark:bg-teal-950/60 border-teal-500 text-teal-800 dark:text-teal-200'
                      : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <span className="truncate">{m.id}-modul</span>
                  {isChecked && <span className="text-teal-600 text-xs font-bold">✓</span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Options Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
              {language === 'uz' ? 'Topshiriqlar soni:' : 'Количество заданий:'}
            </label>
            <select
              value={questionCount}
              onChange={(e) => setQuestionCount(Number(e.target.value))}
              className="w-full text-xs font-semibold p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
            >
              <option value={5}>5 ta mashq</option>
              <option value={10}>10 ta mashq</option>
              <option value={15}>15 ta mashq</option>
              <option value={20}>20 ta mashq</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
              {language === 'uz' ? 'Varaq sarlavhasi:' : 'Заголовок работы:'}
            </label>
            <input
              type="text"
              value={worksheetTitle}
              onChange={(e) => setWorksheetTitle(e.target.value)}
              className="w-full text-xs font-semibold p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
            />
          </div>

          <div className="flex items-center gap-2 pt-6">
            <input
              type="checkbox"
              id="includeKeys"
              checked={includeAnswers}
              onChange={(e) => setIncludeAnswers(e.target.checked)}
              className="w-4 h-4 text-teal-600 rounded cursor-pointer"
            />
            <label htmlFor="includeKeys" className="text-xs font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
              {language === 'uz' ? 'Varaq oxirida javoblar kalitini qo‘shish' : 'Добавить ключи ответов в конце'}
            </label>
          </div>
        </div>
      </div>

      {/* Printable Sheet Viewport (This is what prints and displays in preview) */}
      <div className="bg-white text-slate-900 border border-slate-300 rounded-3xl p-8 sm:p-12 shadow-md print:border-none print:shadow-none print:p-0 print:m-0 space-y-8">
        
        {/* Printable Header Strip */}
        <div className="border-b-2 border-slate-900 pb-5 space-y-3">
          <div className="text-center space-y-1">
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-wide">
              {worksheetTitle}
            </h2>
            <p className="text-xs font-semibold text-slate-600">
              «Xolida ustoz bilan o‘zbek tilini o‘rganamiz» ta’limiy dasturi asosida
            </p>
          </div>

          {/* Student metadata fields */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold pt-4">
            <div>
              <span className="text-slate-500">Maktab:</span> ___________________
            </div>
            <div>
              <span className="text-slate-500">Sinf:</span> _______
            </div>
            <div>
              <span className="text-slate-500">O‘quvchi:</span> ___________________
            </div>
            <div>
              <span className="text-slate-500">Sana:</span> _______________
            </div>
          </div>
        </div>

        {/* Selected Exercises List */}
        <div className="space-y-6">
          {selectedExercises.map((ex, idx) => (
            <div key={ex.id} className="text-xs sm:text-sm space-y-2 border-b border-slate-100 pb-4">
              <div className="flex items-start gap-2">
                <span className="font-extrabold text-teal-700 shrink-0">
                  {idx + 1}.
                </span>
                <div className="space-y-1 w-full">
                  <p className="font-bold text-slate-900">
                    {ex.questionUz}
                  </p>
                  <p className="text-slate-500 text-xs italic">
                    {ex.instructionUz}
                  </p>

                  {/* Options if MC */}
                  {ex.options && (
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      {ex.options.map((opt, oIdx) => (
                        <div key={oIdx} className="flex items-center gap-2">
                          <span className="w-3.5 h-3.5 rounded-full border border-slate-400 inline-block shrink-0" />
                          <span className="text-xs text-slate-700">{opt}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Write in lines for other types */}
                  {!ex.options && (
                    <div className="pt-2">
                      <div className="text-xs text-slate-400 border-b border-dotted border-slate-400 h-6" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Answer Keys at the bottom if toggled */}
        {includeAnswers && (
          <div className="pt-8 border-t-2 border-dashed border-slate-300 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              O‘qituvchi uchun javoblar kaliti (Answer Keys):
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs font-semibold text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200">
              {selectedExercises.map((ex, idx) => (
                <div key={ex.id}>
                  <span className="font-bold text-teal-700">{idx + 1}:</span>{' '}
                  <span>
                    {typeof ex.correctAnswer === 'string'
                      ? ex.correctAnswer
                      : 'Kalit ilovada'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

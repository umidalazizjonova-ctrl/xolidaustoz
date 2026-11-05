import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './hooks/useLanguage';
import { ThemeProvider } from './hooks/useTheme';
import { ProgressProvider } from './hooks/useProgress';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { BottomNav } from './components/common/BottomNav';
import { BadgeNotification } from './components/common/BadgeNotification';

// Pages
import { HomePage } from './pages/HomePage';
import { LessonsPage } from './pages/LessonsPage';
import { LessonDetailPage } from './pages/LessonDetailPage';
import { ComparisonBridgePage } from './pages/ComparisonBridgePage';
import { GamesPage } from './pages/GamesPage';
import { ExercisesPage } from './pages/ExercisesPage';
import { TestsPage } from './pages/TestsPage';
import { DictionaryPage } from './pages/DictionaryPage';
import { FactsPage } from './pages/FactsPage';
import { TextbooksPage } from './pages/TextbooksPage';
import { ProfilePage } from './pages/ProfilePage';
import { TeacherPage } from './pages/TeacherPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ProgressProvider>
          <BrowserRouter>
            <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-200">
              <Header />

              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/darslar" element={<LessonsPage />} />
                  <Route path="/dars/:slug" element={<LessonDetailPage />} />
                  <Route path="/qiyoslash" element={<ComparisonBridgePage />} />
                  <Route path="/oyinlar" element={<GamesPage />} />
                  <Route path="/mashqlar" element={<ExercisesPage />} />
                  <Route path="/test" element={<TestsPage />} />
                  <Route path="/lugat" element={<DictionaryPage />} />
                  <Route path="/faktlar" element={<FactsPage />} />
                  <Route path="/darsliklar" element={<TextbooksPage />} />
                  <Route path="/profil" element={<ProfilePage />} />
                  <Route path="/ustoz" element={<TeacherPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </main>

              <Footer />
              <BottomNav />
              <BadgeNotification />
            </div>
          </BrowserRouter>
        </ProgressProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

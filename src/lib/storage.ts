import { UserProgress, Language, ThemeMode } from '../types';

const STORAGE_KEYS = {
  PROGRESS: 'xolida_progress_v1',
  LANGUAGE: 'xolida_lang_v1',
  THEME: 'xolida_theme_v1',
};

export const INITIAL_PROGRESS: UserProgress = {
  xp: 0,
  streakDays: 1,
  lastActiveDate: new Date().toISOString().slice(0, 10),
  completedLessonIds: [],
  completedExerciseIds: [],
  completedTestIds: [],
  unlockedBadgeIds: ['welcome_learner'],
  gameHighScores: {},
  dailyQuestCompleted: false,
  dailyQuestDate: new Date().toISOString().slice(0, 10),
};

export function loadUserProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    if (!raw) return INITIAL_PROGRESS;
    const parsed = JSON.parse(raw);
    
    // Check daily streak
    const today = new Date().toISOString().slice(0, 10);
    const lastDate = parsed.lastActiveDate || today;
    
    // Day calculation
    const lastDay = new Date(lastDate).getTime();
    const currentDay = new Date(today).getTime();
    const diffDays = Math.round((currentDay - lastDay) / (1000 * 3600 * 24));
    
    let streak = parsed.streakDays || 1;
    if (diffDays === 1) {
      streak += 1;
    } else if (diffDays > 1) {
      streak = 1;
    }

    const resetDailyQuest = parsed.dailyQuestDate !== today;

    const updated: UserProgress = {
      ...INITIAL_PROGRESS,
      ...parsed,
      streakDays: streak,
      lastActiveDate: today,
      dailyQuestCompleted: resetDailyQuest ? false : (parsed.dailyQuestCompleted || false),
      dailyQuestDate: today,
    };
    
    saveUserProgress(updated);
    return updated;
  } catch (e) {
    console.warn('localStorage error, using memory fallback:', e);
    return INITIAL_PROGRESS;
  }
}

export function saveUserProgress(progress: UserProgress): void {
  try {
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
  } catch (e) {
    console.warn('Failed to save progress to localStorage:', e);
  }
}

export function loadLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.LANGUAGE) as Language;
    if (saved === 'uz' || saved === 'ru') return saved;
    // Default to 'ru' since audience is Russian-speaking students learning Uzbek!
    return 'ru';
  } catch {
    return 'ru';
  }
}

export function saveLanguage(lang: Language): void {
  try {
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, lang);
  } catch (e) {
    console.warn('Failed to save language:', e);
  }
}

export function loadTheme(): ThemeMode {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.THEME) as ThemeMode;
    if (saved === 'light' || saved === 'dark' || saved === 'system') return saved;
    return 'system';
  } catch {
    return 'system';
  }
}

export function saveTheme(theme: ThemeMode): void {
  try {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  } catch (e) {
    console.warn('Failed to save theme:', e);
  }
}

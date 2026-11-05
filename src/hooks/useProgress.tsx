import React, { createContext, useContext, useState } from 'react';
import { UserProgress } from '../types';
import { loadUserProgress, saveUserProgress, INITIAL_PROGRESS } from '../lib/storage';
import { checkAndAwardBadges, fireShortConfetti } from '../lib/gamification';

interface ProgressContextType {
  progress: UserProgress;
  addXP: (amount: number, reason?: string) => void;
  completeLesson: (lessonId: number) => void;
  completeExercise: (exerciseId: string) => void;
  completeTest: (testId: string) => void;
  updateGameScore: (gameKey: string, score: number) => void;
  completeDailyQuest: () => void;
  resetProgress: () => void;
  latestUnlockedBadge: string | null;
  clearLatestBadge: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<UserProgress>(() => loadUserProgress());
  const [latestUnlockedBadge, setLatestUnlockedBadge] = useState<string | null>(null);

  const applyProgressUpdate = (updater: (prev: UserProgress) => UserProgress) => {
    setProgress((prev) => {
      const next = updater(prev);
      const newBadges = checkAndAwardBadges(next);
      if (newBadges.length > 0) {
        next.unlockedBadgeIds = [...next.unlockedBadgeIds, ...newBadges];
        setLatestUnlockedBadge(newBadges[0]);
        fireShortConfetti();
      }
      saveUserProgress(next);
      return next;
    });
  };

  const addXP = (amount: number) => {
    applyProgressUpdate((prev) => ({
      ...prev,
      xp: prev.xp + amount,
    }));
  };

  const completeLesson = (lessonId: number) => {
    applyProgressUpdate((prev) => {
      if (prev.completedLessonIds.includes(lessonId)) return prev;
      return {
        ...prev,
        xp: prev.xp + 50,
        completedLessonIds: [...prev.completedLessonIds, lessonId],
      };
    });
    fireShortConfetti();
  };

  const completeExercise = (exerciseId: string) => {
    applyProgressUpdate((prev) => {
      if (prev.completedExerciseIds.includes(exerciseId)) return prev;
      return {
        ...prev,
        xp: prev.xp + 15,
        completedExerciseIds: [...prev.completedExerciseIds, exerciseId],
      };
    });
  };

  const completeTest = (testId: string) => {
    applyProgressUpdate((prev) => {
      if (prev.completedTestIds.includes(testId)) return prev;
      return {
        ...prev,
        xp: prev.xp + 40,
        completedTestIds: [...prev.completedTestIds, testId],
      };
    });
  };

  const updateGameScore = (gameKey: string, score: number) => {
    applyProgressUpdate((prev) => {
      const currentHigh = prev.gameHighScores[gameKey] || 0;
      if (score > currentHigh) {
        return {
          ...prev,
          xp: prev.xp + Math.max(10, Math.floor(score / 5)),
          gameHighScores: {
            ...prev.gameHighScores,
            [gameKey]: score,
          },
        };
      }
      return {
        ...prev,
        xp: prev.xp + 10,
      };
    });
  };

  const completeDailyQuest = () => {
    applyProgressUpdate((prev) => {
      if (prev.dailyQuestCompleted) return prev;
      return {
        ...prev,
        xp: prev.xp + 30,
        dailyQuestCompleted: true,
      };
    });
    fireShortConfetti();
  };

  const resetProgress = () => {
    saveUserProgress(INITIAL_PROGRESS);
    setProgress(INITIAL_PROGRESS);
  };

  const clearLatestBadge = () => {
    setLatestUnlockedBadge(null);
  };

  return (
    <ProgressContext.Provider
      value={{
        progress,
        addXP,
        completeLesson,
        completeExercise,
        completeTest,
        updateGameScore,
        completeDailyQuest,
        resetProgress,
        latestUnlockedBadge,
        clearLatestBadge,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = (): ProgressContextType => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

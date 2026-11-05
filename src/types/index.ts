export type Language = 'uz' | 'ru';
export type ThemeMode = 'light' | 'dark' | 'system';

export type SentencePartType = 'ega' | 'kesim' | 'toldiruvchi' | 'aniqlovchi' | 'hol';

export interface SentencePartInfo {
  type: SentencePartType;
  nameUz: string;
  nameRu: string;
  questionUz: string;
  questionRu: string;
  underlineStyle: string;
  colorClass: string;
  borderClass: string;
  bgClass: string;
  symbol: string;
}

export interface LessonModule {
  id: number;
  slug: string;
  titleUz: string;
  titleRu: string;
  shortDescUz: string;
  shortDescRu: string;
  targetUz: string;
  targetRu: string;
  durationMinutes: number;
  levelGrade: string; // e.g., "5–6-sinf"
  lectureUz: string;
  lectureRu: string;
  comparisonTable: {
    featureUz: string;
    featureRu: string;
    uzbekRule: string;
    uzbekExample: string;
    russianRule: string;
    russianExample: string;
    notesUz?: string;
    notesRu?: string;
  }[];
  keyExamples: {
    uz: string;
    ru: string;
    breakdownUz: string;
    breakdownRu: string;
    ruleHighlight: string;
  }[];
  didYouKnow: {
    factUz: string;
    factRu: string;
    source: string;
  };
  summaryUz: string[];
  summaryRu: string[];
  culturalImageKey?: string;
}

export type ExerciseType = 
  | 'fill_blank'
  | 'multiple_choice'
  | 'matching'
  | 'word_order'
  | 'error_hunt'
  | 'translation'
  | 'sentence_parts'
  | 'true_false';

export type DifficultyLevel = 'oson' | 'orta' | 'qiyin';

export interface ExerciseItem {
  id: string;
  moduleId: number;
  type: ExerciseType;
  difficulty: DifficultyLevel;
  instructionUz: string;
  instructionRu: string;
  questionUz: string;
  questionRu?: string;
  options?: string[]; // for multiple choice or word fragments
  correctAnswer: string | string[] | Record<string, string>;
  explanationUz: string;
  explanationRu: string;
  words?: string[]; // for word ordering or sentence parts
  pairs?: { uz: string; ru: string }[]; // for matching
  sentenceWords?: { word: string; part: SentencePartType | 'none' }[]; // for sentence_parts
}

export interface TestQuestion {
  id: string;
  moduleId: number;
  difficulty: DifficultyLevel;
  questionUz: string;
  questionRu: string;
  options: string[];
  correctIndex: number;
  explanationUz: string;
  explanationRu: string;
}

export interface DictionaryEntry {
  id: string;
  uz: string;
  ru: string;
  partOfSpeech: 'ot' | 'sifat' | 'fe’l' | 'ravish' | 'olmosh' | 'ko‘makchi' | 'bog‘lovchi';
  caseAffix?: string;
  russianEquivalentCase?: string;
  exampleSentenceUz: string;
  exampleSentenceRu: string;
  grammarNoteUz: string;
  grammarNoteRu: string;
}

export interface LinguisticFact {
  id: string;
  titleUz: string;
  titleRu: string;
  contentUz: string;
  contentRu: string;
  category: 'morfologiya' | 'sintaksis' | 'tarix' | 'madaniyat' | 'lugat';
  source: string;
}

export interface TextbookResource {
  id: string;
  title: string;
  grade: string;
  authors: string;
  year: string;
  publisher: string;
  isOfficialCurriculum: boolean;
  link?: string;
  descriptionUz: string;
  descriptionRu: string;
  teacherNote?: string;
}

export interface Badge {
  id: string;
  titleUz: string;
  titleRu: string;
  descriptionUz: string;
  descriptionRu: string;
  iconName: string;
  requiredXP: number;
  conditionDescriptionUz: string;
  conditionDescriptionRu: string;
}

export interface UserProgress {
  xp: number;
  streakDays: number;
  lastActiveDate: string;
  completedLessonIds: number[];
  completedExerciseIds: string[];
  completedTestIds: string[];
  unlockedBadgeIds: string[];
  gameHighScores: Record<string, number>;
  dailyQuestCompleted: boolean;
  dailyQuestDate: string;
}

export type MascotMood = 'greeting' | 'teaching' | 'celebrating' | 'thinking';

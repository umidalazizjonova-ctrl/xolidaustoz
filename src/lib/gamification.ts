import confetti from 'canvas-confetti';
import { Badge, UserProgress } from '../types';

export const LEVEL_THRESHOLDS = [
  { minXP: 0, levelNameUz: 'Yangi o‘quvchi', levelNameRu: 'Новичок', rank: 1, icon: 'BookOpen' },
  { minXP: 200, levelNameUz: 'Birikmalar bilimdoni', levelNameRu: 'Знаток словосочетаний', rank: 2, icon: 'Layers' },
  { minXP: 500, levelNameUz: 'Gap ustasi', levelNameRu: 'Мастер предложений', rank: 3, icon: 'CheckCircle2' },
  { minXP: 1000, levelNameUz: 'Qiyosiy tahlilchi', levelNameRu: 'Сравнительный аналитик', rank: 4, icon: 'Compass' },
  { minXP: 2000, levelNameUz: 'Sintaksis ustasi', levelNameRu: 'Мастер синтаксиса', rank: 5, icon: 'Award' },
];

export const BADGES: Badge[] = [
  {
    id: 'welcome_learner',
    titleUz: 'Xush kelibsiz!',
    titleRu: 'Добро пожаловать!',
    descriptionUz: 'O‘zbek tili sintaksisini o‘rganish sayohatingizni boshladingiz.',
    descriptionRu: 'Начали путь изучения узбекского синтаксиса.',
    iconName: 'Sparkles',
    requiredXP: 0,
    conditionDescriptionUz: 'Platformaga ilk bor kirish',
    conditionDescriptionRu: 'Первый вход на платформу',
  },
  {
    id: 'first_lesson',
    titleUz: 'Ilk qadam',
    titleRu: 'Первый шаг',
    descriptionUz: 'Birinchi darsni to‘liq yakunladingiz.',
    descriptionRu: 'Успешно завершили первый урок.',
    iconName: 'BookMarked',
    requiredXP: 50,
    conditionDescriptionUz: '1-darsni tamomlash',
    conditionDescriptionRu: 'Завершить 1-й урок',
  },
  {
    id: 'phrase_master',
    titleUz: 'Hokim va Tobe',
    titleRu: 'Хозяин и Слуга',
    descriptionUz: 'So‘z birikmasidagi hokim va tobe so‘zni to‘liq o‘zlashtirdingiz.',
    descriptionRu: 'Освоили главное и зависимое слово в словосочетании.',
    iconName: 'Layers',
    requiredXP: 150,
    conditionDescriptionUz: '2- va 3-darslarni yakunlash',
    conditionDescriptionRu: 'Завершить 2-й и 3-й уроки',
  },
  {
    id: 'case_champion',
    titleUz: 'Kelishiklar sarvari',
    titleRu: 'Повелитель падежей',
    descriptionUz: 'Barcha 6 ta kelishik va ularning ruscha ekvivalentlarini to‘g‘ri qo‘lladingiz.',
    descriptionRu: 'Освоили 6 узбекских падежей и их параллели с русскими.',
    iconName: 'RotateCw',
    requiredXP: 300,
    conditionDescriptionUz: 'Kelishik ruletida g‘olib bo‘lish',
    conditionDescriptionRu: 'Победа в рулетке падежей',
  },
  {
    id: 'sov_expert',
    titleUz: 'SOV tartib ustasi',
    titleRu: 'Мастер порядка SOV',
    descriptionUz: 'Kesim har doim oxirida kelishini isbotladingiz.',
    descriptionRu: 'Доказали, что узбекское сказуемое всегда в конце.',
    iconName: 'MoveRight',
    requiredXP: 450,
    conditionDescriptionUz: 'Gap konstruktorida 5 ta gap yig‘ish',
    conditionDescriptionRu: 'Собрать 5 предложений в конструкторе',
  },
  {
    id: 'error_hunter',
    titleUz: 'Xato ovchisi',
    titleRu: 'Охотник за ошибками',
    descriptionUz: 'Rusiyzabonlarning 5 ta tipik xatosini fosh qildingiz.',
    descriptionRu: 'Разоблачили 5 типичных ошибок русскоязычных учеников.',
    iconName: 'ShieldAlert',
    requiredXP: 600,
    conditionDescriptionUz: 'Xato detektivida g‘alaba',
    conditionDescriptionRu: 'Победа в детективе ошибок',
  },
  {
    id: 'streak_3',
    titleUz: 'Sabrli o‘quvchi',
    titleRu: 'Стойкий ученик',
    descriptionUz: '3 kun ketma-ket platformada bilim oldingiz.',
    descriptionRu: '3 дня подряд занимались на платформе.',
    iconName: 'Flame',
    requiredXP: 700,
    conditionDescriptionUz: '3 kunlik streakka erishish',
    conditionDescriptionRu: 'Достичь серии из 3 дней',
  },
  {
    id: 'bridge_builder',
    titleUz: 'Ko‘prik bunyodkori',
    titleRu: 'Мостостроитель',
    descriptionUz: 'Sintaksis ko‘prigida 10 ta gapni tahlil qildingiz.',
    descriptionRu: 'Проанализировали 10 предложений в интерактивном мосте.',
    iconName: 'GitFork',
    requiredXP: 850,
    conditionDescriptionUz: 'Qiyoslash panelidan faol foydalanish',
    conditionDescriptionRu: 'Активная работа в панели сравнения',
  },
  {
    id: 'quiz_ace',
    titleUz: 'Test a’lochisi',
    titleRu: 'Отличник тестов',
    descriptionUz: 'Testda 90% dan yuqori natija ko‘rsatdingiz.',
    descriptionRu: 'Набрали более 90% правильных ответов в тесте.',
    iconName: 'Target',
    requiredXP: 1000,
    conditionDescriptionUz: 'Sintaksis testini a’lo bahoga topshirish',
    conditionDescriptionRu: 'Сдать тест на отлично',
  },
  {
    id: 'memory_genius',
    titleUz: 'Zukko xotira',
    titleRu: 'Острая память',
    descriptionUz: 'Juftlik topish o‘yinida barcha kartalarni ochdingiz.',
    descriptionRu: 'Нашли все пары словосочетаний в игре на память.',
    iconName: 'Grid',
    requiredXP: 1200,
    conditionDescriptionUz: 'Juftlik topish o‘yinini yakunlash',
    conditionDescriptionRu: 'Завершить игру «Поиск пар»',
  },
  {
    id: 'diligent_student',
    titleUz: 'Mehnatkash o‘quvchi',
    titleRu: 'Прилежный ученик',
    descriptionUz: 'Barcha 10 ta o‘quv modulini muvaffaqiyatli tamomladingiz.',
    descriptionRu: 'Успешно прошли все 10 учебных модулей.',
    iconName: 'GraduationCap',
    requiredXP: 1500,
    conditionDescriptionUz: '10 ta modulni tugatish',
    conditionDescriptionRu: 'Завершить все 10 модулей',
  },
  {
    id: 'syntax_grandmaster',
    titleUz: 'Sintaksis dahosi',
    titleRu: 'Гроссмейстер синтаксиса',
    descriptionUz: '2000 XP to‘plab, eng oliy darajaga erishdingiz!',
    descriptionRu: 'Набрали 2000 XP и достигли высшего ранга!',
    iconName: 'Crown',
    requiredXP: 2000,
    conditionDescriptionUz: '2000 XP to‘plash',
    conditionDescriptionRu: 'Набрать 2000 XP',
  },
];

export function getUserLevel(xp: number) {
  let currentLevel = LEVEL_THRESHOLDS[0];
  let nextThreshold = LEVEL_THRESHOLDS[1];
  
  for (let i = 0; i < LEVEL_THRESHOLDS.length; i++) {
    if (xp >= LEVEL_THRESHOLDS[i].minXP) {
      currentLevel = LEVEL_THRESHOLDS[i];
      nextThreshold = LEVEL_THRESHOLDS[i + 1] || null;
    }
  }

  const currentLevelMin = currentLevel.minXP;
  const nextLevelMin = nextThreshold ? nextThreshold.minXP : currentLevelMin + 1000;
  const xpInCurrentLevel = xp - currentLevelMin;
  const xpNeededForNext = nextLevelMin - currentLevelMin;
  const progressPercent = Math.min(100, Math.round((xpInCurrentLevel / xpNeededForNext) * 100));

  return {
    rank: currentLevel.rank,
    nameUz: currentLevel.levelNameUz,
    nameRu: currentLevel.levelNameRu,
    icon: currentLevel.icon,
    progressPercent,
    currentXP: xp,
    nextLevelXP: nextThreshold ? nextThreshold.minXP : null,
  };
}

export function fireShortConfetti() {
  try {
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.75 },
      colors: ['#0d9488', '#2563eb', '#f59e0b', '#10b981'],
      disableForReducedMotion: true,
    });
  } catch {
    // fallback gracefully
  }
}

export function checkAndAwardBadges(progress: UserProgress): string[] {
  const newBadgeIds: string[] = [];
  const existing = new Set(progress.unlockedBadgeIds);

  for (const badge of BADGES) {
    if (!existing.has(badge.id)) {
      let qualified = false;
      if (badge.id === 'welcome_learner') qualified = true;
      if (badge.id === 'first_lesson' && progress.completedLessonIds.length >= 1) qualified = true;
      if (badge.id === 'phrase_master' && progress.completedLessonIds.includes(2) && progress.completedLessonIds.includes(3)) qualified = true;
      if (badge.id === 'diligent_student' && progress.completedLessonIds.length >= 10) qualified = true;
      if (badge.id === 'streak_3' && progress.streakDays >= 3) qualified = true;
      if (progress.xp >= badge.requiredXP && badge.requiredXP > 0) {
        qualified = true;
      }

      if (qualified) {
        newBadgeIds.push(badge.id);
      }
    }
  }

  return newBadgeIds;
}

// Data Schemas based on PRD

export interface Vocabulary {
  id: string;
  kana: string;
  kanji: string;
  romaji: string;
  type: string;
  meaning: string;
}

export interface Example {
  jp: string;
  cn: string;
}

export interface Grammar {
  id: string;
  pattern: string; // Used for Bunkei
  explanation: string; // Markdown supported in theory, plain text for now
  examples: Example[]; // Used for Reibun
}

export interface Sentence {
  id: string;
  role?: string; // 'A' | 'B' or specific names
  japanese: string;
  chinese: string;
}

export interface ReadingSection {
  id: string;
  title: string;
  type: 'dialogue' | 'essay';
  content: Sentence[];
}

export interface QuizOption {
  id: string;
  label: string;
  isCorrect: boolean;
}

export interface Quiz {
  id: string;
  question: string; // Can be a sentence with a blank usually
  options: QuizOption[];
  explanation?: string;
}

export interface Lesson {
  id: number;
  title: string;
  description: string;
  vocabularies: Vocabulary[];
  grammars: Grammar[]; // Maps to Bunkei (Patterns) & Grammar Points
  readings: ReadingSection[]; // Maps to Kaiwa
  quizzes: Quiz[]; // Maps to Mondai/Renchuu
}

export interface UserProgress {
  user_id: string;
  item_id: string;
  status: 'new' | 'learning' | 'mastered';
  updated_at: string;
}

// Navigation Types
export type TabType = 'vocab' | 'grammar' | 'reading' | 'quiz';
import { N5_LESSONS } from '../constants';
import { DrillQuestion, DrillQuestionType } from '../types';

const POOL_SIZE = 2000;

const hashString = (value: string) => {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
};

const seededSort = <T,>(items: T[], seed: string) => (
  [...items].sort((left, right) => {
    const leftHash = hashString(`${seed}:${JSON.stringify(left)}`);
    const rightHash = hashString(`${seed}:${JSON.stringify(right)}`);
    return leftHash - rightHash;
  })
);

const buildOptions = (correct: string, candidates: string[], seed: string) => {
  const distractors = seededSort(
    [...new Set(candidates.filter(candidate => candidate && candidate !== correct))],
    seed
  ).slice(0, 3);
  const options = seededSort([correct, ...distractors], `${seed}:options`);

  return {
    options,
    correctIndex: options.indexOf(correct)
  };
};

const addQuestion = (
  questions: DrillQuestion[],
  data: Omit<DrillQuestion, 'options' | 'correctIndex'>,
  correct: string,
  candidates: string[]
) => {
  const { options, correctIndex } = buildOptions(correct, candidates, data.id);
  if (options.length === 4 && correctIndex >= 0) {
    questions.push({ ...data, options, correctIndex });
  }
};

export const generateQuestionPool = () => {
  const questions: DrillQuestion[] = [];
  const vocabularies = N5_LESSONS.flatMap(lesson => (
    lesson.vocabularies.map(item => ({ lessonId: lesson.id, item }))
  ));
  const meanings = vocabularies.map(({ item }) => item.meaning);
  const japaneseTerms = vocabularies.map(({ item }) => item.kanji || item.kana);
  const readings = vocabularies.map(({ item }) => item.kana);

  vocabularies.forEach(({ lessonId, item }) => {
    const term = item.kanji || item.kana;
    addQuestion(questions, {
      id: `vocab-meaning-${lessonId}-${item.id}`,
      lessonId,
      type: 'vocabulary',
      prompt: `「${term}」的中文意思是？`,
      explanation: `${term}（${item.kana}）：${item.meaning}`
    }, item.meaning, meanings);

    addQuestion(questions, {
      id: `vocab-reverse-${lessonId}-${item.id}`,
      lessonId,
      type: 'vocabulary',
      prompt: `“${item.meaning}”对应的日语是？`,
      explanation: `${item.meaning}：${term}（${item.kana}）`
    }, term, japaneseTerms);

    if (item.kanji && item.kana && item.kanji !== item.kana) {
      addQuestion(questions, {
        id: `vocab-reading-${lessonId}-${item.id}`,
        lessonId,
        type: 'vocabulary',
        prompt: `「${item.kanji}」的正确读音是？`,
        explanation: `${item.kanji}读作「${item.kana}」，意思是“${item.meaning}”。`
      }, item.kana, readings);
    }
  });

  const grammarPatterns = N5_LESSONS.flatMap(lesson => lesson.grammars.map(grammar => grammar.pattern));
  const grammarExamples = N5_LESSONS.flatMap(lesson => (
    lesson.grammars.flatMap(grammar => grammar.examples.map(example => ({
      lessonId: lesson.id,
      grammarId: grammar.id,
      pattern: grammar.pattern,
      example
    })))
  ));
  const grammarTranslations = grammarExamples.map(({ example }) => example.cn);

  N5_LESSONS.forEach(lesson => {
    lesson.grammars.forEach(grammar => {
      addQuestion(questions, {
        id: `grammar-pattern-${lesson.id}-${grammar.id}`,
        lessonId: lesson.id,
        type: 'grammar',
        prompt: `第${lesson.id}课的语法说明对应哪个文型？\n${grammar.explanation}`,
        explanation: `${grammar.pattern}\n${grammar.explanation}`
      }, grammar.pattern, grammarPatterns);
    });
  });

  grammarExamples.forEach(({ lessonId, grammarId, pattern, example }, index) => {
    addQuestion(questions, {
      id: `grammar-example-${lessonId}-${grammarId}-${index}`,
      lessonId,
      type: 'grammar',
      prompt: `例句「${example.jp}」的正确意思是？`,
      explanation: `${example.jp}\n${example.cn}\n文型：${pattern}`
    }, example.cn, grammarTranslations);
  });

  const sentences = N5_LESSONS.flatMap(lesson => (
    lesson.readings.flatMap(section => section.content.map(sentence => ({
      lessonId: lesson.id,
      sectionId: section.id,
      sentence
    })))
  ));
  const japaneseSentences = sentences.map(({ sentence }) => sentence.japanese);
  const chineseSentences = sentences.map(({ sentence }) => sentence.chinese);

  sentences.forEach(({ lessonId, sectionId, sentence }) => {
    addQuestion(questions, {
      id: `reading-cn-${lessonId}-${sectionId}-${sentence.id}`,
      lessonId,
      type: 'reading',
      prompt: `「${sentence.japanese}」的中文意思是？`,
      explanation: `${sentence.japanese}\n${sentence.chinese}`
    }, sentence.chinese, chineseSentences);

    addQuestion(questions, {
      id: `reading-jp-${lessonId}-${sectionId}-${sentence.id}`,
      lessonId,
      type: 'reading',
      prompt: `“${sentence.chinese}”对应的日语表达是？`,
      explanation: `${sentence.chinese}\n${sentence.japanese}`
    }, sentence.japanese, japaneseSentences);
  });

  N5_LESSONS.forEach(lesson => {
    lesson.quizzes.forEach(quiz => {
      const correct = quiz.options.find(option => option.isCorrect);
      if (!correct) return;
      questions.push({
        id: `quiz-${lesson.id}-${quiz.id}`,
        lessonId: lesson.id,
        type: 'quiz',
        prompt: quiz.question,
        options: quiz.options.map(option => option.label),
        correctIndex: quiz.options.findIndex(option => option.isCorrect),
        explanation: quiz.explanation ?? `正确答案：${correct.label}`
      });
    });
  });

  const ordered = seededSort(questions, 'n5-master-question-pool-v1');
  if (ordered.length >= POOL_SIZE) return ordered.slice(0, POOL_SIZE);

  const expanded: DrillQuestion[] = [];
  for (let index = 0; index < POOL_SIZE; index += 1) {
    const source = ordered[index % ordered.length];
    const cycle = Math.floor(index / ordered.length);
    const options = seededSort(source.options, `${source.id}:cycle:${cycle}`);
    expanded.push({
      ...source,
      id: `${source.id}-set-${cycle}`,
      options,
      correctIndex: options.indexOf(source.options[source.correctIndex])
    });
  }
  return expanded;
};

export const QUESTION_POOL = generateQuestionPool();

export const QUESTION_TYPE_LABELS: Record<DrillQuestionType | 'all', string> = {
  all: '全部',
  vocabulary: '词汇',
  grammar: '语法',
  reading: '课文',
  quiz: '课内练习'
};

import React, { useMemo, useState } from 'react';
import { DrillQuestion, DrillQuestionType } from '../types';
import { QUESTION_POOL, QUESTION_TYPE_LABELS } from '../utils/questionPool';
import { IconArrowLeft } from './ui/Icons';

const WRONG_KEY = 'n5_wrong_question_ids';
const STATS_KEY = 'n5_drill_stats';

interface DrillStats {
  answered: number;
  correct: number;
}

interface Props {
  onBack: () => void;
}

const readWrongIds = () => {
  try {
    const value = JSON.parse(localStorage.getItem(WRONG_KEY) ?? '[]');
    return Array.isArray(value) ? value.filter(id => typeof id === 'string') : [];
  } catch {
    return [];
  }
};

const readStats = (): DrillStats => {
  try {
    const value = JSON.parse(localStorage.getItem(STATS_KEY) ?? '{}');
    return {
      answered: Number.isFinite(value.answered) ? value.answered : 0,
      correct: Number.isFinite(value.correct) ? value.correct : 0
    };
  } catch {
    return { answered: 0, correct: 0 };
  }
};

const randomize = <T,>(items: T[]) => {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
};

export const DrillCenter: React.FC<Props> = ({ onBack }) => {
  const [filter, setFilter] = useState<DrillQuestionType | 'all'>('all');
  const [wrongIds, setWrongIds] = useState<string[]>(readWrongIds);
  const [stats, setStats] = useState<DrillStats>(readStats);
  const [session, setSession] = useState<DrillQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [reviewMode, setReviewMode] = useState(false);
  const [finished, setFinished] = useState(false);

  const filteredPool = useMemo(() => (
    filter === 'all' ? QUESTION_POOL : QUESTION_POOL.filter(question => question.type === filter)
  ), [filter]);
  const wrongQuestions = useMemo(() => {
    const ids = new Set(wrongIds);
    return QUESTION_POOL.filter(question => ids.has(question.id));
  }, [wrongIds]);
  const currentQuestion = session[currentIndex];
  const accuracy = stats.answered > 0 ? Math.round((stats.correct / stats.answered) * 100) : 0;

  const persistWrongIds = (nextIds: string[]) => {
    setWrongIds(nextIds);
    localStorage.setItem(WRONG_KEY, JSON.stringify(nextIds));
  };

  const startSession = (count: number, useWrongQuestions = false) => {
    const source = useWrongQuestions ? wrongQuestions : filteredPool;
    if (source.length === 0) return;
    setSession(randomize(source).slice(0, Math.min(count, source.length)));
    setCurrentIndex(0);
    setSelectedIndex(null);
    setSubmitted(false);
    setCorrectCount(0);
    setReviewMode(useWrongQuestions);
    setFinished(false);
  };

  const submitAnswer = () => {
    if (selectedIndex === null || !currentQuestion) return;
    const isCorrect = selectedIndex === currentQuestion.correctIndex;
    const nextStats = {
      answered: stats.answered + 1,
      correct: stats.correct + (isCorrect ? 1 : 0)
    };
    setStats(nextStats);
    localStorage.setItem(STATS_KEY, JSON.stringify(nextStats));

    if (isCorrect) {
      setCorrectCount(value => value + 1);
      if (reviewMode && wrongIds.includes(currentQuestion.id)) {
        persistWrongIds(wrongIds.filter(id => id !== currentQuestion.id));
      }
    } else if (!wrongIds.includes(currentQuestion.id)) {
      persistWrongIds([...wrongIds, currentQuestion.id]);
    }
    setSubmitted(true);
  };

  const nextQuestion = () => {
    if (currentIndex >= session.length - 1) {
      setFinished(true);
      return;
    }
    setCurrentIndex(value => value + 1);
    setSelectedIndex(null);
    setSubmitted(false);
  };

  if (session.length > 0 && !finished && currentQuestion) {
    const answeredCorrectly = selectedIndex === currentQuestion.correctIndex;
    return (
      <div className="flex flex-col h-screen bg-surface">
        <header className="h-12 px-4 bg-white border-b border-gray-100 flex items-center gap-3 shrink-0">
          <button onClick={() => setSession([])} className="p-2 -ml-2 text-gray-600 rounded-full active:bg-gray-100" aria-label="退出刷题">
            <IconArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>{reviewMode ? '错题复习' : QUESTION_TYPE_LABELS[filter]}</span>
              <span>{currentIndex + 1}/{session.length}</span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-primary transition-all" style={{ width: `${((currentIndex + 1) / session.length) * 100}%` }} />
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 pb-28">
          <div className="text-xs text-primary font-bold mb-2">第 {currentQuestion.lessonId} 课 · {QUESTION_TYPE_LABELS[currentQuestion.type]}</div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h2 className="text-xl font-bold leading-relaxed whitespace-pre-line">{currentQuestion.prompt}</h2>
            <div className="mt-6 space-y-3">
              {currentQuestion.options.map((option, index) => {
                let style = 'border-gray-200 text-gray-700 bg-white';
                if (submitted) {
                  if (index === currentQuestion.correctIndex) style = 'border-success bg-success/10 text-success';
                  else if (index === selectedIndex) style = 'border-danger bg-danger/10 text-danger';
                  else style = 'border-gray-100 text-gray-300 bg-gray-50';
                } else if (index === selectedIndex) {
                  style = 'border-primary bg-primary/5 text-primary ring-1 ring-primary';
                }
                return (
                  <button
                    key={`${currentQuestion.id}-${index}`}
                    onClick={() => !submitted && setSelectedIndex(index)}
                    disabled={submitted}
                    className={`w-full border-2 rounded-xl p-4 text-left font-medium transition-all ${style}`}
                  >
                    <span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-black/5 mr-2 text-xs">{String.fromCharCode(65 + index)}</span>
                    {option}
                  </button>
                );
              })}
            </div>
            {submitted && (
              <div className={`mt-5 rounded-xl p-4 ${answeredCorrectly ? 'bg-success/10' : 'bg-danger/10'}`}>
                <div className={`font-bold ${answeredCorrectly ? 'text-success' : 'text-danger'}`}>
                  {answeredCorrectly ? '回答正确' : '已加入错题本'}
                </div>
                <div className="text-sm text-gray-600 mt-2 whitespace-pre-line leading-relaxed">{currentQuestion.explanation}</div>
              </div>
            )}
          </div>
        </main>

        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/95 backdrop-blur border-t border-gray-100 p-4">
          {!submitted ? (
            <button onClick={submitAnswer} disabled={selectedIndex === null} className="w-full py-3.5 rounded-xl bg-primary text-white font-bold disabled:opacity-40">确认答案</button>
          ) : (
            <button onClick={nextQuestion} className="w-full py-3.5 rounded-xl bg-gray-900 text-white font-bold">{currentIndex === session.length - 1 ? '查看结果' : '下一题'}</button>
          )}
        </div>
      </div>
    );
  }

  if (finished) {
    const sessionAccuracy = session.length > 0 ? Math.round((correctCount / session.length) * 100) : 0;
    return (
      <div className="flex flex-col h-screen bg-surface">
        <header className="h-12 bg-white border-b border-gray-100 flex items-center px-4"><h1 className="font-bold">练习结果</h1></header>
        <main className="flex-1 p-4 flex items-center">
          <div className="w-full bg-white rounded-3xl p-8 text-center shadow-sm border border-gray-100">
            <div className="text-5xl mb-4">{sessionAccuracy >= 80 ? '🎉' : '💪'}</div>
            <div className="text-4xl font-bold text-primary">{sessionAccuracy}%</div>
            <p className="text-gray-500 mt-2">答对 {correctCount} / {session.length} 题</p>
            <div className="grid grid-cols-2 gap-3 mt-8">
              <button onClick={() => startSession(session.length, reviewMode)} className="py-3 rounded-xl bg-primary text-white font-bold">再来一组</button>
              <button onClick={() => { setSession([]); setFinished(false); }} className="py-3 rounded-xl bg-gray-100 text-gray-700 font-bold">返回题库</button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-surface">
      <header className="h-12 px-4 bg-white border-b border-gray-100 flex items-center shrink-0">
        <button onClick={onBack} className="p-2 -ml-2 text-gray-600 rounded-full active:bg-gray-100" aria-label="返回课程">
          <IconArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="font-bold flex-1 text-center">刷题中心</h1>
        <div className="w-8" />
      </header>
      <main className="flex-1 overflow-y-auto p-4 pb-10">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl p-3 text-center border border-gray-100"><div className="text-xl font-bold text-primary">{QUESTION_POOL.length}</div><div className="text-[11px] text-gray-400">题库总量</div></div>
          <div className="bg-white rounded-xl p-3 text-center border border-gray-100"><div className="text-xl font-bold text-danger">{wrongQuestions.length}</div><div className="text-[11px] text-gray-400">待复习错题</div></div>
          <div className="bg-white rounded-xl p-3 text-center border border-gray-100"><div className="text-xl font-bold text-success">{accuracy}%</div><div className="text-[11px] text-gray-400">累计正确率</div></div>
        </div>

        <section className="mt-6">
          <h2 className="font-bold mb-3">选择题型</h2>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(QUESTION_TYPE_LABELS) as Array<DrillQuestionType | 'all'>).map(type => (
              <button key={type} onClick={() => setFilter(type)} className={`px-4 py-2 rounded-full text-sm ${filter === type ? 'bg-primary text-white font-bold' : 'bg-white text-gray-600 border border-gray-100'}`}>
                {QUESTION_TYPE_LABELS[type]}
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-2">当前可练习 {filteredPool.length} 题</p>
        </section>

        <section className="mt-6">
          <h2 className="font-bold mb-3">随机组卷</h2>
          <div className="grid grid-cols-3 gap-3">
            {[20, 50, 100].map(count => (
              <button key={count} onClick={() => startSession(count)} className="bg-white rounded-xl py-5 border border-gray-100 shadow-sm active:scale-95 transition-transform">
                <div className="text-xl font-bold text-primary">{count}</div><div className="text-xs text-gray-400 mt-1">题</div>
              </button>
            ))}
          </div>
        </section>

        <section className="mt-6 bg-gradient-to-br from-orange-500 to-rose-500 rounded-2xl p-5 text-white shadow-lg">
          <div className="flex justify-between items-center gap-4">
            <div><div className="text-xs font-bold text-white/70">错题复习</div><h2 className="text-xl font-bold mt-1">巩固 {wrongQuestions.length} 道错题</h2><p className="text-xs text-white/70 mt-1">复习中答对后自动移出错题本</p></div>
            <button onClick={() => startSession(wrongQuestions.length, true)} disabled={wrongQuestions.length === 0} className="px-4 py-2.5 bg-white text-rose-500 rounded-xl font-bold text-sm disabled:opacity-50 shrink-0">开始复习</button>
          </div>
        </section>
      </main>
    </div>
  );
};

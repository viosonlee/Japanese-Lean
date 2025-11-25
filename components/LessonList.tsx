import React, { useEffect, useState } from 'react';
import { N5_LESSONS } from '../constants';
import { IconChevronDown } from './ui/Icons';

interface Props {
  onSelect: (id: number) => void;
}

export const LessonList: React.FC<Props> = ({ onSelect }) => {
  const [lastLessonId, setLastLessonId] = useState<number>(1);
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    const storedId = localStorage.getItem('n5_last_lesson_id');
    const id = storedId ? parseInt(storedId, 10) : 1;
    setLastLessonId(id);
    setProgressPercent(Math.round((id / N5_LESSONS.length) * 100));
  }, []);

  const lastLesson = N5_LESSONS.find(l => l.id === lastLessonId) || N5_LESSONS[0];

  return (
    <div className="p-4 pb-12 space-y-4">
      {/* Interactive Progress Card */}
      <div 
        onClick={() => onSelect(lastLessonId)}
        className="bg-blue-600 rounded-2xl p-6 text-white shadow-lg mb-6 cursor-pointer active:scale-[0.98] transition-transform relative overflow-hidden"
      >
        <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-1">N5 进阶</h2>
            <p className="opacity-90 text-sm">
                {lastLessonId > 1 ? `继续学习：${lastLesson.title}` : '开始你的学习之旅'}
            </p>
            <div className="mt-4 bg-black/20 h-2 rounded-full overflow-hidden backdrop-blur-sm">
                <div 
                    className="bg-white h-full transition-all duration-1000 ease-out" 
                    style={{ width: `${Math.max(5, progressPercent)}%` }}
                ></div>
            </div>
            <p className="text-xs mt-2 text-right opacity-80">{lastLessonId}/{N5_LESSONS.length} 课</p>
        </div>
        
        {/* Decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400/20 rounded-full -ml-10 -mb-10 blur-xl"></div>
      </div>

      <h3 className="text-lg font-bold text-gray-800 ml-1">课程目录</h3>
      
      {N5_LESSONS.map((lesson) => {
        const isCurrent = lesson.id === lastLessonId;
        const isPast = lesson.id < lastLessonId;
        
        return (
            <div 
            key={lesson.id}
            onClick={() => onSelect(lesson.id)}
            className={`rounded-xl p-4 shadow-sm border flex items-center justify-between active:scale-[0.98] transition-transform cursor-pointer ${
                isCurrent 
                ? 'bg-white border-primary/30 ring-1 ring-primary/20' 
                : 'bg-white border-gray-100'
            }`}
            >
            <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${
                    isCurrent ? 'bg-primary text-white shadow-md shadow-primary/30' : 
                    isPast ? 'bg-success/10 text-success' : 
                    'bg-gray-50 text-gray-400'
                }`}>
                {isPast ? '✓' : lesson.id}
                </div>
                <div>
                <h4 className={`font-bold ${isCurrent ? 'text-primary' : 'text-gray-800'}`}>{lesson.title}</h4>
                <p className="text-xs text-gray-500 mt-0.5">{lesson.description}</p>
                </div>
            </div>
            <IconChevronDown className={`w-5 h-5 -rotate-90 ${isCurrent ? 'text-primary' : 'text-gray-300'}`} />
            </div>
        );
      })}
    </div>
  );
};

import React, { useState } from 'react';
import { Quiz } from '../types';

interface Props {
  data: Quiz[];
}

export const LessonPractice: React.FC<Props> = ({ data }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const currentQuiz = data[currentIdx];
  const isLast = currentIdx === data.length - 1;

  if (!data || data.length === 0) {
      return <div className="p-8 text-center text-gray-400">本课暂无练习题</div>;
  }

  const handleSelect = (id: string) => {
      if (isSubmitted) return;
      setSelectedOptionId(id);
  };

  const handleSubmit = () => {
      if (!selectedOptionId) return;
      setIsSubmitted(true);
  };

  const handleNext = () => {
      setSelectedOptionId(null);
      setIsSubmitted(false);
      setCurrentIdx(prev => prev + 1);
  };

  const isCorrect = currentQuiz.options.find(o => o.id === selectedOptionId)?.isCorrect;

  return (
    <div className="p-4 pb-24 h-full flex flex-col">
       {/* Progress Bar */}
       <div className="flex items-center gap-2 mb-6">
           <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
               <div 
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${((currentIdx + 1) / data.length) * 100}%` }}
               />
           </div>
           <span className="text-xs text-gray-400 font-medium">{currentIdx + 1}/{data.length}</span>
       </div>

       {/* Question Card */}
       <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-gray-800 mb-8 leading-relaxed">
                {currentQuiz.question}
            </h3>

            <div className="space-y-3">
                {currentQuiz.options.map(option => {
                    let btnClass = "border-gray-200 hover:bg-gray-50 text-gray-700";
                    
                    if (isSubmitted) {
                        if (option.isCorrect) btnClass = "bg-success/10 border-success text-success";
                        else if (option.id === selectedOptionId) btnClass = "bg-danger/10 border-danger text-danger";
                        else btnClass = "border-gray-100 text-gray-300";
                    } else if (selectedOptionId === option.id) {
                        btnClass = "border-primary bg-primary/5 text-primary ring-1 ring-primary";
                    }

                    return (
                        <button
                            key={option.id}
                            onClick={() => handleSelect(option.id)}
                            disabled={isSubmitted}
                            className={`w-full p-4 rounded-xl border-2 text-left font-medium transition-all ${btnClass}`}
                        >
                            {option.label}
                        </button>
                    );
                })}
            </div>

            {isSubmitted && (
                <div className={`mt-6 p-4 rounded-lg text-sm ${isCorrect ? 'bg-success/5 text-success' : 'bg-danger/5 text-danger'}`}>
                    <div className="font-bold mb-1">
                        {isCorrect ? '🎉 回答正确 (正解)' : '🤔 再想一想 (残念)'}
                    </div>
                    {currentQuiz.explanation && (
                        <div className="text-gray-600 mt-2">
                            {currentQuiz.explanation}
                        </div>
                    )}
                </div>
            )}
       </div>

       {/* Bottom Button */}
       <div className="mt-6">
           {!isSubmitted ? (
               <button 
                onClick={handleSubmit}
                disabled={!selectedOptionId}
                className="w-full bg-primary text-white font-bold py-3.5 rounded-xl shadow-lg shadow-primary/30 disabled:opacity-50 disabled:shadow-none transition-all active:scale-[0.98]"
               >
                   确认
               </button>
           ) : (
                <button 
                onClick={isLast ? () => alert('练习结束！') : handleNext}
                className="w-full bg-white text-gray-800 border-2 border-gray-100 font-bold py-3.5 rounded-xl transition-all active:scale-[0.98]"
               >
                   {isLast ? '完成' : '下一题'}
               </button>
           )}
       </div>
    </div>
  );
};
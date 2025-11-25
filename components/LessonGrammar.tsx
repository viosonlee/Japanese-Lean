import React, { useState } from 'react';
import { Grammar } from '../types';
import { useTTS } from '../hooks/useTTS';
import { IconVolume, IconChevronDown } from './ui/Icons';

interface Props {
  data: Grammar[];
}

export const LessonGrammar: React.FC<Props> = ({ data }) => {
  const { speak } = useTTS();
  const [activeId, setActiveId] = useState<string | null>(data[0]?.id || null);

  return (
    <div className="flex flex-col gap-4 p-4 pb-24">
      {/* Introduction Card */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
        <h3 className="text-primary font-bold text-sm uppercase tracking-wider mb-2">文型 (Sentence Patterns)</h3>
        <ul className="space-y-2">
            {data.map(g => (
                <li key={g.id} className="text-gray-800 text-sm font-medium flex items-start gap-2">
                    <span className="text-primary">•</span>
                    {g.pattern}
                </li>
            ))}
        </ul>
      </div>

      <h3 className="font-bold text-gray-800 ml-1 mt-2">语法详解</h3>

      {data.map((item) => (
        <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <button 
            onClick={() => setActiveId(activeId === item.id ? null : item.id)}
            className="w-full flex items-center justify-between p-4 bg-white active:bg-gray-50 transition-colors"
          >
            <div className="flex flex-col items-start text-left">
                 <span className="font-bold text-gray-800 text-lg">{item.pattern}</span>
            </div>
            <IconChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${activeId === item.id ? 'rotate-180' : ''}`} />
          </button>
          
          {activeId === item.id && (
            <div className="p-4 pt-0 bg-white border-t border-gray-50">
              <div className="text-gray-600 mb-4 text-sm leading-relaxed whitespace-pre-line mt-4">
                {item.explanation}
              </div>
              
              <div className="space-y-3">
                <div className="text-xs font-bold text-gray-400 uppercase">例文 (Examples)</div>
                {item.examples.map((ex, idx) => (
                  <div key={idx} className="bg-surface rounded-lg p-3 border border-gray-100">
                    <div className="flex items-start justify-between">
                      <div className="text-gray-800 font-medium pr-2">{ex.jp}</div>
                      <button 
                        onClick={() => speak(ex.jp)}
                        className="p-1 -mr-1 -mt-1 text-primary active:opacity-60"
                      >
                        <IconVolume className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="text-gray-500 text-sm mt-1">{ex.cn}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
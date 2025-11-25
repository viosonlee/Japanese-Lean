import React, { useState } from 'react';
import { Vocabulary } from '../types';
import { useTTS } from '../hooks/useTTS';
import { IconVolume } from './ui/Icons';

interface Props {
  data: Vocabulary[];
  lessonId: number;
}

export const LessonVocabulary: React.FC<Props> = ({ data, lessonId }) => {
  const { speak, state } = useTTS();
  
  return (
    <div className="grid grid-cols-1 gap-4 p-4 pb-24">
      {data.map((item) => (
        <VocabCard 
            key={item.id} 
            item={item} 
            lessonId={lessonId}
            isPlaying={state.currentId === item.id}
            onSpeak={(text, id, filename) => speak(text, id, filename)} 
        />
      ))}
    </div>
  );
};

const VocabCard: React.FC<{ 
    item: Vocabulary; 
    lessonId: number;
    isPlaying: boolean;
    onSpeak: (t: string, id: string, f: string) => void 
}> = ({ item, lessonId, isPlaying, onSpeak }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const audioFilename = `L${lessonId}_${item.id}`;

  return (
    <div 
      className="relative h-32 w-full perspective-1000 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* Front */}
        <div className={`absolute w-full h-full backface-hidden bg-white rounded-xl shadow-sm border flex flex-col items-center justify-center p-4 ${isPlaying ? 'border-primary ring-2 ring-primary/20' : 'border-gray-100'}`}>
          <span className="text-3xl font-bold text-gray-800 mb-1">{item.kanji || item.kana}</span>
          {item.kanji && <span className="text-sm text-gray-500">{item.kana}</span>}
          <div className="absolute top-2 right-2 p-2 rounded-full active:bg-gray-100" onClick={(e) => {
            e.stopPropagation();
            onSpeak(item.kana, item.id, audioFilename);
          }}>
            <IconVolume className={`w-5 h-5 ${isPlaying ? 'text-primary animate-pulse' : 'text-gray-400'}`} />
          </div>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden bg-primary/5 rounded-xl border border-primary/20 rotate-y-180 flex flex-col items-center justify-center p-4">
          <span className="text-lg font-bold text-primary mb-1">{item.meaning}</span>
          <span className="text-xs text-gray-500 uppercase tracking-wider">{item.type}</span>
          <span className="text-sm text-gray-400 mt-1">{item.romaji}</span>
        </div>

      </div>
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
};
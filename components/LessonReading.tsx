import React, { useState, useEffect } from 'react';
import { ReadingSection, Sentence } from '../types';
import { useTTS } from '../hooks/useTTS';
import { IconTranslate, IconPlay, IconStop, IconVolume } from './ui/Icons';

interface Props {
  data: ReadingSection[];
}

export const LessonReading: React.FC<Props> = ({ data }) => {
  const [activeSectionId, setActiveSectionId] = useState<string>(data[0].id);
  const activeSection = data.find(d => d.id === activeSectionId) || data[0];

  return (
    <div className="flex flex-col pb-32 min-h-full">
        {/* Section Switcher - Sticky to the top of the scrolling main container */}
        <div className="flex overflow-x-auto p-2 space-x-2 bg-white sticky top-0 z-20 border-b border-gray-100 no-scrollbar shrink-0">
            {data.map(section => (
                <button
                    key={section.id}
                    onClick={() => setActiveSectionId(section.id)}
                    className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${
                        activeSectionId === section.id 
                        ? 'bg-primary text-white font-medium shadow-sm' 
                        : 'bg-gray-100 text-gray-600'
                    }`}
                >
                    {section.title}
                </button>
            ))}
        </div>

        <ReadingPlayer key={activeSectionId} section={activeSection} />
    </div>
  );
};

const ReadingPlayer: React.FC<{ section: ReadingSection }> = ({ section }) => {
    const { speak, speakSequence, stop, state } = useTTS();
    const [rate, setRate] = useState(0.8);
    const [showAllTranslations, setShowAllTranslations] = useState(false);
    const [isPlayerExpanded, setIsPlayerExpanded] = useState(false);

    // Auto-scroll to active sentence
    useEffect(() => {
        if (state.currentSentenceId) {
            const el = document.getElementById(`sentence-${state.currentSentenceId}`);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }, [state.currentSentenceId]);

    // Cleanup on unmount
    useEffect(() => {
        return () => stop();
    }, [stop]);

    const handlePlayAll = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (state.isPlaying) {
            stop();
        } else {
            const sequence = section.content.map(s => ({ id: s.id, text: s.japanese }));
            speakSequence(sequence, rate);
        }
    };

    return (
        <div className="flex-1 flex flex-col relative">
            {/* Content Area */}
            <div className="flex-1 p-4 space-y-6">
                {section.content.map((sentence) => (
                    <SentenceItem 
                        key={sentence.id}
                        sentence={sentence}
                        type={section.type}
                        isActive={state.currentSentenceId === sentence.id}
                        globalShowTranslation={showAllTranslations}
                        onPlay={() => speak(sentence.japanese, sentence.id, rate)}
                    />
                ))}
            </div>

            {/* Floating Player Control */}
            <div className={`fixed z-30 transition-all duration-300 ease-out ${
                isPlayerExpanded 
                ? 'bottom-0 left-0 right-0 max-w-md mx-auto p-4' 
                : 'bottom-6 right-6'
            }`}>
                {isPlayerExpanded ? (
                    // Expanded Player
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 animate-in slide-in-from-bottom-5">
                        <div className="flex items-center justify-between gap-4">
                            {/* Collapse Button (Invisible click area on bg strictly, but here we use an icon or tap outside logic usually. simplified here) */}
                            <button 
                                onClick={() => setIsPlayerExpanded(false)}
                                className="text-gray-400 p-2 hover:bg-gray-100 rounded-full"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>

                            {/* Rate Control */}
                            <div className="flex items-center space-x-2 bg-gray-50 px-3 py-1.5 rounded-lg flex-1">
                                <span className="text-xs text-gray-500 font-bold whitespace-nowrap">语速</span>
                                <input 
                                    type="range" 
                                    min="0.5" 
                                    max="1.2" 
                                    step="0.1" 
                                    value={rate}
                                    onChange={(e) => setRate(parseFloat(e.target.value))}
                                    className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                                />
                                <span className="text-xs text-gray-700 w-8 text-right">{rate}x</span>
                            </div>

                            {/* Toggle Translation */}
                            <button 
                                onClick={() => setShowAllTranslations(!showAllTranslations)}
                                className={`p-2 rounded-full ${showAllTranslations ? 'text-primary bg-primary/10' : 'text-gray-400'}`}
                            >
                                <IconTranslate className="w-6 h-6" />
                            </button>

                            {/* Play Button */}
                            <button 
                                onClick={handlePlayAll}
                                className={`flex items-center justify-center w-12 h-12 rounded-full text-white shadow-lg transition-transform active:scale-95 ${
                                    state.isPlaying ? 'bg-danger' : 'bg-primary'
                                }`}
                            >
                                {state.isPlaying ? <IconStop className="w-6 h-6" /> : <IconPlay className="w-6 h-6 ml-1" />}
                            </button>
                        </div>
                    </div>
                ) : (
                    // Collapsed FAB
                    <button 
                        onClick={() => setIsPlayerExpanded(true)}
                        className={`flex items-center justify-center w-14 h-14 rounded-full text-white shadow-xl shadow-primary/30 transition-transform active:scale-90 ${
                            state.isPlaying ? 'bg-white text-primary border-2 border-primary animate-pulse' : 'bg-primary'
                        }`}
                    >
                        {state.isPlaying ? (
                            <div className="flex gap-1 h-4 items-end">
                                <div className="w-1 bg-current animate-[bounce_1s_infinite]"></div>
                                <div className="w-1 bg-current animate-[bounce_1.2s_infinite]"></div>
                                <div className="w-1 bg-current animate-[bounce_0.8s_infinite]"></div>
                            </div>
                        ) : (
                           <IconVolume className="w-7 h-7" />
                        )}
                    </button>
                )}
            </div>
            
            {/* Backdrop for expanded state */}
            {isPlayerExpanded && (
                <div 
                    className="fixed inset-0 bg-black/20 z-20 backdrop-blur-[1px]" 
                    onClick={() => setIsPlayerExpanded(false)}
                />
            )}
        </div>
    );
};

const SentenceItem: React.FC<{ 
    sentence: Sentence; 
    type: 'dialogue' | 'essay'; 
    isActive: boolean;
    globalShowTranslation: boolean;
    onPlay: () => void;
}> = ({ sentence, type, isActive, globalShowTranslation, onPlay }) => {
    const [localShowTranslation, setLocalShowTranslation] = useState(false);
    const showTrans = globalShowTranslation || localShowTranslation;

    if (type === 'dialogue') {
        const isLeft = sentence.role !== 'ミラー'; 
        
        return (
            <div id={`sentence-${sentence.id}`} className={`flex flex-col ${isLeft ? 'items-start' : 'items-end'}`}>
                {sentence.role && <span className="text-xs text-gray-400 mb-1 px-1">{sentence.role}</span>}
                <div className="flex items-end gap-2 max-w-[90%]">
                   {!isLeft && (
                         <button 
                            onClick={(e) => { e.stopPropagation(); setLocalShowTranslation(!localShowTranslation); }}
                            className="text-gray-300 p-1 shrink-0"
                        >
                            <span className="text-[10px] border border-current px-1 rounded">译</span>
                        </button>
                   )}
                    <div 
                        onClick={onPlay}
                        className={`p-3 rounded-2xl text-[17px] leading-loose cursor-pointer transition-colors border shadow-sm ${
                            isActive 
                            ? 'bg-warning/20 border-warning text-gray-900' 
                            : isLeft 
                                ? 'bg-white border-gray-100 text-gray-800 rounded-tl-sm' 
                                : 'bg-blue-50 border-blue-100 text-gray-800 rounded-tr-sm'
                        }`}
                    >
                        {sentence.japanese}
                        {showTrans && (
                            <div className="text-sm text-gray-500 mt-1 border-t border-gray-200/50 pt-1 leading-normal">
                                {sentence.chinese}
                            </div>
                        )}
                    </div>
                     {isLeft && (
                         <button 
                            onClick={(e) => { e.stopPropagation(); setLocalShowTranslation(!localShowTranslation); }}
                            className="text-gray-300 p-1 shrink-0"
                        >
                            <span className="text-[10px] border border-current px-1 rounded">译</span>
                        </button>
                   )}
                </div>
            </div>
        );
    }

    // Essay Style
    return (
        <div 
            id={`sentence-${sentence.id}`}
            onClick={onPlay}
            className={`p-4 rounded-lg transition-colors cursor-pointer border-l-4 ${
                isActive 
                ? 'bg-warning/10 border-warning' 
                : 'bg-white border-transparent hover:bg-gray-50'
            }`}
        >
            <div className="flex justify-between items-start">
                <p className="text-lg text-gray-800 leading-loose flex-1">{sentence.japanese}</p>
                <button 
                    onClick={(e) => { e.stopPropagation(); setLocalShowTranslation(!localShowTranslation); }}
                    className={`ml-2 p-2 shrink-0 ${showTrans ? 'text-primary' : 'text-gray-300'}`}
                >
                    <IconTranslate className="w-5 h-5" />
                </button>
            </div>
            {showTrans && (
                <p className="mt-2 text-gray-500 text-sm">{sentence.chinese}</p>
            )}
        </div>
    );
};

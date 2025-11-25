import React, { useState } from 'react';
import { Lesson, TabType } from '../types';
import { LessonVocabulary } from './LessonVocabulary';
import { LessonGrammar } from './LessonGrammar';
import { LessonReading } from './LessonReading';
import { LessonPractice } from './LessonPractice';
import { IconArrowLeft } from './ui/Icons';

interface Props {
  lesson: Lesson;
  onBack: () => void;
}

export const LessonDetailView: React.FC<Props> = ({ lesson, onBack }) => {
  const [activeTab, setActiveTab] = useState<TabType>('vocab');

  return (
    <div className="flex flex-col h-screen bg-surface">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 h-12 flex items-center justify-between shrink-0">
        <button 
            onClick={onBack}
            className="p-2 -ml-2 text-gray-600 active:bg-gray-100 rounded-full"
        >
            <IconArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="font-bold text-gray-800 truncate flex-1 text-center mx-2">{lesson.title}</h1>
        <div className="w-8"></div> {/* Spacer for center alignment */}
      </header>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-100 shrink-0">
        <div className="flex">
          {['vocab', 'grammar', 'reading', 'quiz'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as TabType)}
              className={`flex-1 py-3 text-sm font-medium relative ${
                activeTab === tab ? 'text-primary' : 'text-gray-500'
              }`}
            >
              {tab === 'vocab' && '单词'}
              {tab === 'grammar' && '语法'}
              {tab === 'reading' && '课文'}
              {tab === 'quiz' && '练习'}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto no-scrollbar relative">
        {activeTab === 'vocab' && <LessonVocabulary data={lesson.vocabularies} />}
        {activeTab === 'grammar' && <LessonGrammar data={lesson.grammars} />}
        {activeTab === 'reading' && <LessonReading data={lesson.readings} />}
        {activeTab === 'quiz' && <LessonPractice data={lesson.quizzes} />}
      </main>
    </div>
  );
};
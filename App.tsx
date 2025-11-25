import React, { useState, useEffect } from 'react';
import { N5_LESSONS } from './constants';
import { LessonList } from './components/LessonList';
import { LessonDetailView } from './components/LessonDetailView';
import { LoginView } from './components/LoginView';
import { downloadAudioConfig } from './utils/audioGenerator';
import { IconDownload } from './components/ui/Icons';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [selectedLessonId, setSelectedLessonId] = useState<number | null>(null);

  // Check auth on mount
  useEffect(() => {
    const auth = localStorage.getItem('n5_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem('n5_auth', 'true');
    setIsAuthenticated(true);
  };

  // Helper to resolve which data to show. 
  const currentLessonData = selectedLessonId 
    ? N5_LESSONS.find(l => l.id === selectedLessonId) 
    : null;

  const handleLessonSelect = (id: number) => {
    setSelectedLessonId(id);
    // Save progress
    localStorage.setItem('n5_last_lesson_id', id.toString());
    window.scrollTo(0, 0);
  };

  const handleBackToList = () => {
    setSelectedLessonId(null);
  };

  if (!isAuthenticated) {
    return <LoginView onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-surface flex justify-center text-gray-800">
      {/* Mobile Container Simulator */}
      <div className="w-full max-w-md bg-surface shadow-2xl min-h-screen relative flex flex-col">
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
            {!selectedLessonId && (
                <>
                     <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 px-4 h-12 flex items-center justify-between shrink-0">
                        <div className="w-8"></div> {/* Spacer for alignment */}
                        <h1 className="font-bold text-gray-800">日语 N5 学习</h1>
                        <button 
                            onClick={downloadAudioConfig}
                            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-primary active:bg-gray-100 rounded-full transition-colors"
                            title="下载音频生成配置"
                        >
                            <IconDownload className="w-5 h-5" />
                        </button>
                    </header>
                    <main className="flex-1 overflow-y-auto no-scrollbar">
                        <LessonList onSelect={handleLessonSelect} />
                    </main>
                </>
            )}

            {selectedLessonId && currentLessonData && (
                <LessonDetailView lesson={currentLessonData} onBack={handleBackToList} />
            )}
        </div>
      </div>
    </div>
  );
}

export default App;
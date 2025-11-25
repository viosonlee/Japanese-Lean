import { useState, useEffect, useRef, useCallback } from 'react';

interface TTSState {
  isPlaying: boolean;
  isPaused: boolean;
  currentSentenceId: string | null;
}

export const useTTS = () => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [state, setState] = useState<TTSState>({
    isPlaying: false,
    isPaused: false,
    currentSentenceId: null,
  });
  
  const synthesisRef = useRef<SpeechSynthesis>(window.speechSynthesis);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Initialize Voices
  useEffect(() => {
    const loadVoices = () => {
      const availVoices = synthesisRef.current.getVoices();
      setVoices(availVoices);
      
      // Filter for Japanese voices
      const jaVoice = availVoices.find(v => v.lang.includes('ja') || v.lang.includes('JP'));
      if (jaVoice) {
        setSelectedVoice(jaVoice);
      } else {
        // Fallback or warning could happen here
        console.warn("Japanese voice not found. Using default.");
      }
    };

    loadVoices();
    if (synthesisRef.current.onvoiceschanged !== undefined) {
      synthesisRef.current.onvoiceschanged = loadVoices;
    }
  }, []);

  const stop = useCallback(() => {
    synthesisRef.current.cancel();
    setState(prev => ({ ...prev, isPlaying: false, isPaused: false, currentSentenceId: null }));
  }, []);

  const speak = useCallback((text: string, id: string | null = null, rate: number = 0.8) => {
    // Cancel any existing speech
    synthesisRef.current.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utteranceRef.current = utterance;

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }
    utterance.lang = 'ja-JP';
    utterance.rate = rate; // 0.5 to 1.2

    utterance.onstart = () => {
      setState({ isPlaying: true, isPaused: false, currentSentenceId: id });
    };

    utterance.onend = () => {
      setState(prev => ({ ...prev, isPlaying: false, isPaused: false, currentSentenceId: null }));
    };

    utterance.onerror = (e) => {
      console.error("TTS Error:", e);
      setState(prev => ({ ...prev, isPlaying: false, isPaused: false, currentSentenceId: null }));
    };

    synthesisRef.current.speak(utterance);
  }, [selectedVoice]);

  // For sequential playback
  const speakSequence = useCallback(async (
    items: { id: string, text: string }[], 
    rate: number = 0.8
  ) => {
    // Stop anything currently playing
    synthesisRef.current.cancel();

    let currentIndex = 0;

    const playNext = () => {
      if (currentIndex >= items.length) {
        setState(prev => ({ ...prev, isPlaying: false, currentSentenceId: null }));
        return;
      }

      const item = items[currentIndex];
      const utterance = new SpeechSynthesisUtterance(item.text);
      
      if (selectedVoice) utterance.voice = selectedVoice;
      utterance.lang = 'ja-JP';
      utterance.rate = rate;

      utterance.onstart = () => {
        setState({ isPlaying: true, isPaused: false, currentSentenceId: item.id });
      };

      utterance.onend = () => {
        currentIndex++;
        // Small delay between sentences for natural feel
        setTimeout(() => {
            // Check if user cancelled during the break
            if (!synthesisRef.current.speaking && currentIndex < items.length) { 
                playNext();
            }
        }, 500); 
      };

      synthesisRef.current.speak(utterance);
    };

    playNext();
  }, [selectedVoice]);

  return {
    voices,
    selectedVoice,
    state,
    speak,
    speakSequence,
    stop,
    setSelectedVoice
  };
};
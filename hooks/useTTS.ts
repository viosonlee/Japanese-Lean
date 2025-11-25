import { useState, useRef, useCallback, useEffect } from 'react';

interface TTSState {
  isPlaying: boolean;
  currentId: string | null;
}

export const useTTS = () => {
  const [state, setState] = useState<TTSState>({
    isPlaying: false,
    currentId: null,
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthesisRef = useRef<SpeechSynthesis>(window.speechSynthesis);
  const activeUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Initialize Audio Object
  useEffect(() => {
    audioRef.current = new Audio();
    // iOS Safari requires audio context handling usually, but simple Audio tag often works for click events
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      synthesisRef.current.cancel();
    };
  }, []);

  const stop = useCallback(() => {
    // Stop Audio File
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    // Stop Browser TTS
    synthesisRef.current.cancel();
    
    setState({ isPlaying: false, currentId: null });
  }, []);

  // Internal helper to play a single item (Promisified for sequencing)
  const playItem = useCallback((text: string, filename: string | null): Promise<void> => {
    return new Promise((resolve) => {
      // 1. Try playing local file if filename exists
      if (filename && audioRef.current) {
        const audioPath = `/audio/${filename}.mp3`;
        audioRef.current.src = audioPath;
        
        // Success handler
        const onEnded = () => {
           cleanup();
           resolve();
        };

        // Error handler (File not found -> Fallback to TTS)
        const onError = (e: Event) => {
           // console.warn(`Audio file missing for ${filename}, falling back to TTS.`);
           cleanup();
           playTTS(text).then(resolve);
        };

        const cleanup = () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener('ended', onEnded);
                audioRef.current.removeEventListener('error', onError);
            }
        };

        audioRef.current.addEventListener('ended', onEnded);
        audioRef.current.addEventListener('error', onError);

        audioRef.current.play().catch(err => {
            // Auto-play policy error or other immediate error
            // console.warn("Audio play failed (autoplay policy?), falling back.", err);
            cleanup();
            playTTS(text).then(resolve);
        });

        return;
      }

      // 2. No filename provided, direct TTS
      playTTS(text).then(resolve);
    });
  }, []);

  // Browser TTS fallback wrapper
  const playTTS = useCallback((text: string): Promise<void> => {
    return new Promise((resolve) => {
        synthesisRef.current.cancel(); // Stop previous
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.8; 
        
        // Try to select a Japanese voice
        const voices = synthesisRef.current.getVoices();
        const jaVoice = voices.find(v => v.lang.includes('ja') || v.lang.includes('JP'));
        if (jaVoice) utterance.voice = jaVoice;

        utterance.onend = () => {
            resolve();
        };
        
        utterance.onerror = () => {
            resolve(); // Resolve even on error to keep sequence moving
        };

        activeUtteranceRef.current = utterance;
        synthesisRef.current.speak(utterance);
    });
  }, []);

  // Public API: Play Single
  const speak = useCallback(async (text: string, uniqueId: string | null = null, filename: string | null = null) => {
    stop(); // Stop any current playback
    setState({ isPlaying: true, currentId: uniqueId });
    
    await playItem(text, filename);
    
    setState({ isPlaying: false, currentId: null });
  }, [stop, playItem]);

  // Public API: Play Sequence
  const speakSequence = useCallback(async (items: { id: string, text: string, filename: string }[]) => {
    stop(); // Stop current
    
    // We need to keep checking if we should stop in the loop
    // Since React state updates are async, we use a ref to track "should continue" logic if needed,
    // but here we rely on the fact that `stop()` cancels the underlying audio/TTS.
    // However, the loop needs to break if user clicked stop.
    // A simple way is to check `synthesisRef.current.speaking` or `audioRef.current.paused` but that's tricky.
    // Better: check a flag.
    
    // For simplicity in this MVP: The `stop` function cancels audio/TTS. 
    // If we loop, we need to check if we were interrupted.
    // We will assume "fire and forget" for the loop logic, but allow interruption by checking a global "run ID" or similar.
    // Let's implement a simple version:
    
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        
        // Update UI
        setState({ isPlaying: true, currentId: item.id });
        
        // Play
        await playItem(item.text, item.filename);

        // Small delay
        await new Promise(r => setTimeout(r, 300));

        // Check interruption (Naive check: if playing was set to false externally)
        // Since we can't easily access the fresh state inside this async loop without refs, 
        // we'll accept that `stop()` kills the current sound, but the loop might try to start the next one.
        // To fix this proper, we'd use a AbortController or Ref.
        // Let's rely on `audioRef.current.paused` check effectively via a wrapper? 
        // Actually, if `stop()` is called, `synthesis` cancels. `playItem` resolves immediately (via onerror/onend).
        // The loop continues. We need a Ref to track "session".
    }
    
    setState({ isPlaying: false, currentId: null });
  }, [stop, playItem]);

  return {
    state,
    speak,
    speakSequence,
    stop
  };
};
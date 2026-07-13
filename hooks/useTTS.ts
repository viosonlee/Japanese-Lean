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
  const playbackControllerRef = useRef<AbortController | null>(null);

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
    playbackControllerRef.current?.abort();
    playbackControllerRef.current = null;

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
  const playTTS = useCallback((text: string, signal: AbortSignal): Promise<void> => {
    return new Promise((resolve) => {
        if (signal.aborted) {
          resolve();
          return;
        }

        synthesisRef.current.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.8;

        const voices = synthesisRef.current.getVoices();
        const jaVoice = voices.find(v => v.lang.includes('ja') || v.lang.includes('JP'));
        if (jaVoice) utterance.voice = jaVoice;

        const finish = () => {
          signal.removeEventListener('abort', handleAbort);
          resolve();
        };
        const handleAbort = () => {
          synthesisRef.current.cancel();
          finish();
        };

        signal.addEventListener('abort', handleAbort, { once: true });
        utterance.onend = finish;
        utterance.onerror = finish;
        synthesisRef.current.speak(utterance);
    });
  }, []);

  const playItem = useCallback((text: string, filename: string | null, signal: AbortSignal): Promise<void> => {
    return new Promise((resolve) => {
      if (signal.aborted) {
        resolve();
        return;
      }

      // 1. Try playing local file if filename exists
      if (filename && audioRef.current) {
        const audioPath = `${import.meta.env.BASE_URL}audio/${filename}.mp3`;
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
           playTTS(text, signal).then(resolve);
        };

        const onAbort = () => {
          audioRef.current?.pause();
          cleanup();
          resolve();
        };

        const cleanup = () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener('ended', onEnded);
                audioRef.current.removeEventListener('error', onError);
            }
            signal.removeEventListener('abort', onAbort);
        };

        audioRef.current.addEventListener('ended', onEnded);
        audioRef.current.addEventListener('error', onError);
        signal.addEventListener('abort', onAbort, { once: true });

        audioRef.current.play().catch(err => {
            // Auto-play policy error or other immediate error
            // console.warn("Audio play failed (autoplay policy?), falling back.", err);
            cleanup();
            playTTS(text, signal).then(resolve);
        });

        return;
      }

      // 2. No filename provided, direct TTS
      playTTS(text, signal).then(resolve);
    });
  }, [playTTS]);

  // Public API: Play Single
  const speak = useCallback(async (text: string, uniqueId: string | null = null, filename: string | null = null) => {
    stop(); // Stop any current playback
    const controller = new AbortController();
    playbackControllerRef.current = controller;
    setState({ isPlaying: true, currentId: uniqueId });
    
    await playItem(text, filename, controller.signal);
    
    if (playbackControllerRef.current === controller && !controller.signal.aborted) {
      playbackControllerRef.current = null;
      setState({ isPlaying: false, currentId: null });
    }
  }, [stop, playItem]);

  // Public API: Play Sequence
  const speakSequence = useCallback(async (items: { id: string, text: string, filename: string }[]) => {
    stop(); // Stop current
    const controller = new AbortController();
    playbackControllerRef.current = controller;
    
    for (let i = 0; i < items.length; i++) {
        if (controller.signal.aborted) break;

        const item = items[i];
        
        // Update UI
        setState({ isPlaying: true, currentId: item.id });
        
        // Play
        await playItem(item.text, item.filename, controller.signal);

        if (!controller.signal.aborted && i < items.length - 1) {
          await new Promise<void>((resolve) => {
            const timeoutId = window.setTimeout(resolve, 300);
            controller.signal.addEventListener('abort', () => {
              window.clearTimeout(timeoutId);
              resolve();
            }, { once: true });
          });
        }
    }
    
    if (playbackControllerRef.current === controller && !controller.signal.aborted) {
      playbackControllerRef.current = null;
      setState({ isPlaying: false, currentId: null });
    }
  }, [stop, playItem]);

  return {
    state,
    speak,
    speakSequence,
    stop
  };
};

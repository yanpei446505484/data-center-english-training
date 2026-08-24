import { useCallback, useEffect, useRef, useState } from 'react';
import {
  loadAccent,
  saveAccent,
  speakWithPlugin,
  stopAllSpeech,
  warmupAudio,
  type TTSAccent,
} from '@/lib/ttsPlugin';

export type TTSEngine = 'local' | 'plugin';
export type { TTSAccent };

interface UseTTSReturn {
  play: (text: string, times?: number, rate?: number) => void;
  playPlugin: (text: string, times?: number) => void;
  stop: () => void;
  isPlaying: boolean;
  isGenerating: boolean;
  currentRepeat: number;
  totalRepeat: number;
  engine: TTSEngine;
  setEngine: (engine: TTSEngine) => void;
  accent: TTSAccent;
  setAccent: (accent: TTSAccent) => void;
  isLocalSupported: boolean;
}

export function useTTS(): UseTTSReturn {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentRepeat, setCurrentRepeat] = useState(0);
  const [totalRepeat, setTotalRepeat] = useState(1);
  const [accent, setAccentState] = useState<TTSAccent>(loadAccent);
  const stopRef = useRef<() => void>(() => undefined);

  const stop = useCallback(() => {
    stopRef.current();
    stopAllSpeech();
    setIsPlaying(false);
    setCurrentRepeat(0);
  }, []);

  useEffect(() => stop, [stop]);

  const play = useCallback((text: string, times = 1) => {
    const normalizedTimes = Math.max(1, Math.min(15, times));
    stop();
    warmupAudio();
    setIsPlaying(true);
    setTotalRepeat(normalizedTimes);
    setCurrentRepeat(1);

    let played = 0;
    const playNext = () => {
      played += 1;
      setCurrentRepeat(played);
      stopRef.current = speakWithPlugin(text, () => {
        if (played < normalizedTimes) {
          window.setTimeout(playNext, 260);
        } else {
          setIsPlaying(false);
          setCurrentRepeat(0);
        }
      }, accent);
    };
    playNext();
  }, [accent, stop]);

  const setAccent = useCallback((next: TTSAccent) => {
    setAccentState(next);
    saveAccent(next);
  }, []);

  return {
    play,
    playPlugin: play,
    stop,
    isPlaying,
    isGenerating: false,
    currentRepeat,
    totalRepeat,
    engine: 'local',
    setEngine: () => undefined,
    accent,
    setAccent,
    isLocalSupported: true,
  };
}

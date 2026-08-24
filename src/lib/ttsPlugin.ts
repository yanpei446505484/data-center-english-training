import { audioEngine, type Accent } from '@/lib/audioEngine';
import { storage } from '@/lib/storage';
import { toast } from 'sonner';

export type TTSAccent = Accent;

const ACCENT_KEY = 'tts_accent_preference';
const activeStops = new Set<() => void>();

export function loadAccent(): TTSAccent {
  try {
    return storage.getItem(ACCENT_KEY) === 'american' ? 'american' : 'british';
  } catch {
    return 'british';
  }
}

export function saveAccent(accent: TTSAccent): void {
  try {
    storage.setItem(ACCENT_KEY, accent);
  } catch {
    // Storage can be unavailable in private browsing; pronunciation still works.
  }
}

export function stripChinese(text: string): string {
  return text
    .replace(/[\u3400-\u9fff\uf900-\ufaff]+/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function registerStop(stop: () => void): void {
  activeStops.add(stop);
}

export function unregisterStop(stop: () => void): void {
  activeStops.delete(stop);
}

export function stopAllSpeech(): void {
  const stops = [...activeStops];
  activeStops.clear();
  for (const stop of stops) {
    try {
      stop();
    } catch {
      // A stale component must not prevent global stop.
    }
  }
  audioEngine.stop();
  try {
    window.speechSynthesis?.cancel();
  } catch {
    // Web Speech is not the primary engine, but cancel any legacy utterance.
  }
}

export function warmupAudio(): HTMLAudioElement | null {
  void audioEngine.unlock().catch(() => undefined);
  return null;
}

export function isWebSpeechAvailable(): boolean {
  return typeof window !== 'undefined'
    && 'speechSynthesis' in window
    && typeof window.SpeechSynthesisUtterance === 'function';
}

export async function preloadTTS(_texts: string[], _accent?: TTSAccent): Promise<void> {
  await audioEngine.preload().catch(() => undefined);
}

/**
 * The original component API is retained, but every button now uses one
 * same-origin engine: pre-generated Kokoro WAV when available, otherwise the
 * bundled meSpeak engine. No remote TTS, browser voice or cross-region URL is
 * required.
 */
export function speakWithPlugin(
  sourceText: string,
  onDone: () => void,
  accent?: TTSAccent,
): () => void {
  const text = stripChinese(sourceText) || sourceText.trim();
  if (!text) {
    onDone();
    return () => undefined;
  }

  stopAllSpeech();
  let stopped = false;
  let finished = false;
  const selectedAccent = accent ?? loadAccent();

  const complete = () => {
    if (finished || stopped) return;
    finished = true;
    unregisterStop(stop);
    onDone();
  };

  const stop = () => {
    if (stopped) return;
    stopped = true;
    unregisterStop(stop);
    audioEngine.stop();
  };
  registerStop(stop);

  void audioEngine.speak(text, {
    accent: selectedAccent,
    language: 'en',
    speed: 145,
    onFinish: reason => {
      if (reason === 'ended') complete();
      if (reason === 'error' && !stopped) complete();
    },
  }).catch(error => {
    if (stopped) return;
    toast.error(error instanceof Error ? error.message : '朗读失败');
    complete();
  });

  return stop;
}

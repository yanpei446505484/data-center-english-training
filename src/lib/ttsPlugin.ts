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
}

export function warmupAudio(): HTMLAudioElement | null {
  void audioEngine.unlock().catch(() => undefined);
  return null;
}

export async function preloadTTS(texts: string[], accent?: TTSAccent): Promise<void> {
  await audioEngine.preload().catch(() => undefined);
  await audioEngine.prepare(texts.slice(0, 2), {
    accent: accent ?? loadAccent(),
    language: 'en',
    speed: 145,
  }).catch(() => undefined);
}

/**
 * The original component API is retained, but every button now uses one
 * one same-origin Kokoro engine: pre-generated WAV when available, otherwise
 * Kokoro runs directly in the browser. No legacy synthesizer, remote TTS API,
 * or cross-region audio request is used.
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
  let loadingToast: string | number | undefined;
  const selectedAccent = accent ?? loadAccent();

  const complete = () => {
    if (finished || stopped) return;
    finished = true;
    if (loadingToast !== undefined) toast.dismiss(loadingToast);
    unregisterStop(stop);
    onDone();
  };

  const stop = () => {
    if (stopped) return;
    stopped = true;
    if (loadingToast !== undefined) toast.dismiss(loadingToast);
    unregisterStop(stop);
    audioEngine.stop();
  };
  registerStop(stop);

  void audioEngine.speak(text, {
    accent: selectedAccent,
    language: 'en',
    speed: 145,
    onPreparing: needsModelDownload => {
      if (needsModelDownload && !stopped) {
        loadingToast = toast.loading('首次启用 Kokoro，正在加载离线语音模型…');
      }
    },
    onStart: () => {
      if (loadingToast !== undefined) toast.dismiss(loadingToast);
      loadingToast = undefined;
    },
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

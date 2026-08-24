import { audioEngine } from '@/lib/audioEngine';
import { registerStop, stopAllSpeech, unregisterStop } from '@/lib/ttsPlugin';
import { toast } from 'sonner';

export function speakChinese(text: string, onDone: () => void): () => void {
  const normalized = text.trim();
  if (!normalized) {
    onDone();
    return () => undefined;
  }

  stopAllSpeech();
  let stopped = false;
  let finished = false;

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

  void audioEngine.speak(normalized, {
    language: 'zh',
    speed: 155,
    onFinish: reason => {
      if (reason === 'ended' || reason === 'error') complete();
    },
  }).catch(error => {
    if (stopped) return;
    toast.error(error instanceof Error ? error.message : '中文朗读失败');
    complete();
  });

  return stop;
}

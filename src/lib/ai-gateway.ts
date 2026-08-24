// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { offlineAiChat, offlineTranslate } from '@/lib/offlineAi';

const AI_API_BASE = String(import.meta.env.VITE_AI_API_BASE ?? '').trim();
const hasRemoteAi = AI_API_BASE.length > 0;

export const axiosForBackend = axios.create({
  baseURL: AI_API_BASE || undefined,
  headers: { 'Content-Type': 'application/json' },
});

interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export async function aiChat(
  messages: ChatMessage[],
  options?: { model?: string; temperature?: number },
): Promise<string> {
  if (!hasRemoteAi) return offlineAiChat(messages);
  const res = await axiosForBackend.post('/api/ai/chat', {
    messages,
    model: options?.model,
    temperature: options?.temperature,
  });
  return res.data?.content || '';
}

export function aiChatStream(
  messages: ChatMessage[],
  onChunk: (text: string) => void,
  onDone: () => void,
  options?: { model?: string },
): AbortController {
  const controller = new AbortController();

  if (!hasRemoteAi) {
    void offlineAiChat(messages).then(content => {
      if (controller.signal.aborted) return;
      const chunks = content.match(/[\s\S]{1,80}/g) ?? [];
      for (const chunk of chunks) {
        if (controller.signal.aborted) return;
        onChunk(chunk);
      }
      onDone();
    }).catch(() => onDone());
    return controller;
  }

  (async () => {
    try {
      // eslint-disable-next-line no-restricted-syntax -- fetch required for SSE ReadableStream
      const response = await fetch('/api/ai/chat/stream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages, model: options?.model }),
        signal: controller.signal,
      });

      const reader = response.body?.getReader();
      if (!reader) { onDone(); return; }

      const decoder = new TextDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const text = decoder.decode(value, { stream: true });
        const lines = text.split('\n');
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6).trim();
            if (data === '[DONE]') { onDone(); return; }
            try {
              const parsed = JSON.parse(data);
              if (parsed.content) onChunk(parsed.content);
            } catch { /* skip malformed */ }
          }
        }
      }
      onDone();
    } catch (err) {
      if ((err as Error).name !== 'AbortError') {
        onDone();
      }
    }
  })();

  return controller;
}

export async function aiVision(
  imageUrl: string,
  prompt: string,
  options?: { model?: string },
): Promise<string> {
  if (!hasRemoteAi) throw new Error('当前免费静态版未配置图片识别服务');
  const res = await axiosForBackend.post('/api/ai/vision', {
    imageUrl,
    prompt,
    model: options?.model,
  });
  return res.data?.content || '';
}

export async function aiTranscribe(
  audioBlob: Blob,
  filename?: string,
): Promise<string> {
  if (!hasRemoteAi) throw new Error('当前免费静态版未配置音频转写服务');
  const arrayBuffer = await audioBlob.arrayBuffer();
  const base64 = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
  const res = await axiosForBackend.post('/api/ai/transcribe', {
    audio: base64,
    filename: filename || 'audio.webm',
  });
  return res.data?.text || '';
}

export async function aiTranslate(
  text: string,
  targetLang?: string,
): Promise<string> {
  if (!hasRemoteAi) return offlineTranslate(text);
  const res = await axiosForBackend.post('/api/ai/translate', {
    text,
    targetLang,
  });
  return res.data?.content || '';
}

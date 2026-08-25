// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { offlineAiChat, offlineTranslate } from '@/lib/offlineAi';

const AI_API_BASE = String(import.meta.env.VITE_AI_API_BASE ?? '').trim();
const hasRemoteAi = AI_API_BASE.length > 0;

export type TranslationLanguage = 'zh' | 'en';

interface BrowserTranslator {
  translate: (text: string) => Promise<string>;
  destroy?: () => void;
}

interface BrowserTranslatorFactory {
  availability: (options: { sourceLanguage: string; targetLanguage: string }) => Promise<string>;
  create: (options: {
    sourceLanguage: string;
    targetLanguage: string;
    monitor?: (monitor: EventTarget) => void;
  }) => Promise<BrowserTranslator>;
}

const browserTranslators = new Map<string, Promise<BrowserTranslator>>();

/** Detect the direction requested by the English assistant. */
export function detectTranslationDirection(text: string): {
  sourceLanguage: TranslationLanguage;
  targetLanguage: TranslationLanguage;
} {
  const sourceLanguage: TranslationLanguage = /[\u3400-\u9fff]/u.test(text) ? 'zh' : 'en';
  return {
    sourceLanguage,
    targetLanguage: sourceLanguage === 'zh' ? 'en' : 'zh',
  };
}

function getBrowserTranslatorFactory(): BrowserTranslatorFactory | null {
  const candidate = (globalThis as typeof globalThis & {
    Translator?: BrowserTranslatorFactory;
  }).Translator;
  return candidate ?? null;
}

async function translateInBrowser(
  text: string,
  sourceLanguage: TranslationLanguage,
  targetLanguage: TranslationLanguage,
): Promise<string> {
  const factory = getBrowserTranslatorFactory();
  if (!factory) throw new Error('Browser Translator API unavailable');

  const availability = await factory.availability({ sourceLanguage, targetLanguage });
  // Do not make the user wait while Chrome downloads a large language model.
  // The free web API is the immediate fallback for downloadable/downloading pairs.
  if (availability !== 'available' && availability !== 'readily') {
    throw new Error(`Language pair is not immediately available: ${availability}`);
  }

  const cacheKey = `${sourceLanguage}-${targetLanguage}`;
  let translatorPromise = browserTranslators.get(cacheKey);
  if (!translatorPromise) {
    translatorPromise = factory.create({ sourceLanguage, targetLanguage });
    browserTranslators.set(cacheKey, translatorPromise);
  }
  const translator = await translatorPromise;
  return (await translator.translate(text)).trim();
}

/** MyMemory limits each query to 500 UTF-8 bytes. Keep chunks below that limit. */
export function splitTranslationText(text: string, maxBytes = 450): string[] {
  const encoder = new TextEncoder();
  const chunks: string[] = [];
  let current = '';

  for (const character of text) {
    const next = current + character;
    if (current && encoder.encode(next).byteLength > maxBytes) {
      chunks.push(current);
      current = character;
    } else {
      current = next;
    }
  }
  if (current) chunks.push(current);
  return chunks;
}

async function translateWithPublicFallback(
  text: string,
  sourceLanguage: TranslationLanguage,
  targetLanguage: TranslationLanguage,
): Promise<string> {
  const chunks = splitTranslationText(text);
  const translated: string[] = [];

  for (const chunk of chunks) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12_000);
    try {
      const url = new URL('https://api.mymemory.translated.net/get');
      url.searchParams.set('q', chunk);
      url.searchParams.set('langpair', `${sourceLanguage}|${targetLanguage}`);
      // eslint-disable-next-line no-restricted-syntax -- public fallback for static GitHub Pages
      const response = await fetch(url, { signal: controller.signal });
      if (!response.ok) throw new Error(`Translation request failed: ${response.status}`);
      const data = await response.json() as {
        responseStatus?: number;
        responseData?: { translatedText?: string };
      };
      const value = data.responseData?.translatedText?.trim();
      if (!value || (data.responseStatus && data.responseStatus >= 400)) {
        throw new Error('Empty translation response');
      }
      translated.push(value);
    } finally {
      clearTimeout(timeout);
    }
  }

  return translated.join('').trim();
}

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
  const cleaned = text.trim();
  if (!cleaned) return '';
  const detected = detectTranslationDirection(cleaned);
  const targetLanguage: TranslationLanguage = targetLang === 'en' || targetLang === 'zh'
    ? targetLang
    : detected.targetLanguage;
  const sourceLanguage: TranslationLanguage = targetLanguage === 'en' ? 'zh' : 'en';

  if (hasRemoteAi) {
    try {
      const res = await axiosForBackend.post('/api/ai/translate', {
        text: cleaned,
        sourceLang: sourceLanguage,
        targetLang: targetLanguage,
      });
      const translated = String(res.data?.content ?? '').trim();
      if (translated) return translated;
    } catch {
      // Continue with browser/static fallbacks.
    }
  }

  // Prefer the free web service because it responds immediately on desktop and mobile.
  // Chrome's on-device Translator may report "downloadable" and otherwise hang while
  // silently fetching its language model.
  try {
    const translated = await translateWithPublicFallback(cleaned, sourceLanguage, targetLanguage);
    if (translated) return translated;
  } catch {
    // Continue with the on-device browser translator when it is already installed.
  }

  try {
    const translated = await translateInBrowser(cleaned, sourceLanguage, targetLanguage);
    if (translated) return translated;
  } catch {
    // Preserve the existing local glossary as the last, offline-only fallback.
  }

  const local = offlineTranslate(cleaned);
  if (local && local !== cleaned) return local;
  throw new Error('Translation unavailable');
}

// EXPORTS: IAiWordEntry, aiBatchLookup, clearAiCache

import { storage } from '@/lib/storage';
import { logger } from '@/lib/app-logger';
import { aiChat } from '@/lib/ai-gateway';

export interface IAiWordEntry {
  word: string;
  lemma: string;
  ipa: string;
  pos: string;
  chinese: string;
  simpleEnglish: string;
  workMeaning: string;
  examples: string[];
  phrases: string[];
  grammarNote: string;
  source: 'cache' | 'ai';
}

const AI_CACHE_KEY = 'skill_ai_word_cache';

function loadCache(): Record<string, IAiWordEntry> {
  try {
    const raw = storage.getItem(AI_CACHE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveCache(cache: Record<string, IAiWordEntry>) {
  try {
    storage.setItem(AI_CACHE_KEY, JSON.stringify(cache));
  } catch {
    logger.warn('AI word cache full, dropping oldest entries');
  }
}

export function clearAiCache() {
  try {
    storage.removeItem(AI_CACHE_KEY);
  } catch {
    logger.warn('Failed to clear AI word cache');
  }
}

function buildBatchPrompt(words: string[]): string {
  return `You are a bilingual dictionary API for data center operations staff.
Analyze these English words and return a JSON array.
Each object MUST have these exact fields:
- "word": the original word (lowercase)
- "lemma": the base/dictionary form
- "ipa": British IPA pronunciation
- "pos": part of speech (noun/verb/adj/adv/prep/conj)
- "chinese": Chinese translation (concise, 1-6 characters)
- "simpleEnglish": short English definition (under 15 words)
- "workMeaning": how this word is used in data center operations context (Chinese, 10-30 characters)
- "examples": array of 2 example sentences (data center context, English)
- "phrases": array of 2-3 common collocations/phrases
- "grammarNote": brief grammar note if applicable (Chinese, empty string if N/A)

Words: ${words.join(', ')}

Return ONLY a valid JSON array, no markdown, no explanation.`;
}

function normalizeEntry(raw: Record<string, unknown>, fallbackWord: string): IAiWordEntry {
  const examples = Array.isArray(raw.examples)
    ? raw.examples.filter((e): e is string => typeof e === 'string').slice(0, 3)
    : [];
  const phrases = Array.isArray(raw.phrases)
    ? raw.phrases.filter((p): p is string => typeof p === 'string').slice(0, 4)
    : [];

  return {
    word: String(raw.word ?? fallbackWord).toLowerCase().trim(),
    lemma: String(raw.lemma ?? raw.word ?? fallbackWord).toLowerCase().trim(),
    ipa: String(raw.ipa ?? ''),
    pos: String(raw.pos ?? 'noun'),
    chinese: String(raw.chinese ?? '(未找到释义)'),
    simpleEnglish: String(raw.simpleEnglish ?? raw.en ?? ''),
    workMeaning: String(raw.workMeaning ?? raw.dcContext ?? ''),
    examples: examples.length > 0 ? examples : [`Example sentence for "${fallbackWord}"`],
    phrases: phrases.length > 0 ? phrases : [],
    grammarNote: String(raw.grammarNote ?? ''),
    source: 'ai',
  };
}

function parseAiResponse(content: string, words: string[]): IAiWordEntry[] {
  const entries: IAiWordEntry[] = [];

  // Try to find JSON array in the response
  const jsonMatch = content.match(/\[[\s\S]*\]/);
  if (!jsonMatch) {
    logger.error('AI response missing JSON array', content.slice(0, 200));
    return words.map(w => normalizeEntry({ word: w, chinese: '(AI 未返回)' }, w));
  }

  try {
    const parsed = JSON.parse(jsonMatch[0]);
    if (!Array.isArray(parsed)) {
      throw new Error('Expected array');
    }

    const parsedMap = new Map<string, Record<string, unknown>>();
    for (const item of parsed) {
      if (item && typeof item === 'object' && 'word' in item) {
        const key = String(item.word).toLowerCase().trim();
        parsedMap.set(key, item as Record<string, unknown>);
      }
    }

    for (const w of words) {
      const raw = parsedMap.get(w.toLowerCase());
      entries.push(raw ? normalizeEntry(raw, w) : normalizeEntry({ word: w, chinese: '(AI 未返回)' }, w));
    }

    return entries;
  } catch (err) {
    logger.error('AI response JSON parse failed:', String(err));
    return words.map(w => normalizeEntry({ word: w, chinese: '(AI 解析失败)' }, w));
  }
}

function makeFallback(word: string, message: string): IAiWordEntry {
  return normalizeEntry({ word, chinese: message }, word);
}

export async function aiBatchLookup(
  words: string[],
  onProgress?: (current: number, total: number) => void,
): Promise<IAiWordEntry[]> {
  if (words.length === 0) return [];

  const cache = loadCache();
  const results: IAiWordEntry[] = [];
  const toLookup: string[] = [];

  // Phase 1: Check cache
  for (const w of words) {
    const key = w.toLowerCase().trim();
    if (cache[key]) {
      results.push({ ...cache[key], source: 'cache' });
    } else {
      toLookup.push(w);
    }
  }

  onProgress?.(words.length - toLookup.length, words.length);

  if (toLookup.length === 0) return results;

  // Phase 2: Batch AI call
  try {
    const content = await aiChat([
      { role: 'system', content: 'You are a dictionary API. Return only JSON, no other text.' },
      { role: 'user', content: buildBatchPrompt(toLookup) },
    ]);

    if (content) {
      const aiEntries = parseAiResponse(content, toLookup);

      for (const entry of aiEntries) {
        results.push(entry);
        cache[entry.word] = { ...entry, source: 'cache' };
      }

      saveCache(cache);
      onProgress?.(words.length, words.length);
    } else {
      logger.warn('AI returned empty response');
      for (const w of toLookup) {
        results.push(makeFallback(w, '(AI 未返回)'));
      }
    }
  } catch (err) {
    logger.error('AI batch lookup failed:', String(err));
    for (const w of toLookup) {
      results.push(makeFallback(w, '(AI 服务不可用)'));
    }
  }

  return results;
}

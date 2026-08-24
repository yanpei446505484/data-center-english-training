import { useState, useCallback } from 'react';
import { storage } from '@/lib/storage';
import { userStorageKey } from '@/lib/userStorage';

// EXPORTS: IFavorite, ISentencePair, useFavorites, addSentenceFavorite, extractSentencesFromResponse, extractSentencePairsFromResponse

export type FavoriteType = 'word' | 'phrase' | 'sentence' | 'scenario';

export interface IFavorite {
  id: string;
  query: string;
  aiResponse: string;
  type: FavoriteType;
  createdAt: string;
  inPractice?: boolean;
}

const STORAGE_KEY = '__app_dc_english_favorites';

function loadFavorites(): IFavorite[] {
  try {
    const raw = storage.getItem(userStorageKey(STORAGE_KEY));
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed;
    return [];
  } catch {
    return [];
  }
}

function saveFavorites(favorites: IFavorite[]) {
  storage.setItem(userStorageKey(STORAGE_KEY), JSON.stringify(favorites));
}

function detectType(query: string): FavoriteType {
  const words = query.trim().split(/\s+/);
  if (words.length === 1) return 'word';
  if (words.length <= 4) return 'phrase';
  return 'sentence';
}

/**
 * Extract English sentences from AI markdown response for practice use.
 * Targets dialogue lines (numbered with role prefix) and standalone English sentences.
 */
export function extractSentencesFromResponse(response: string): string[] {
  const lines = response.split('\n').map(l => l.trim()).filter(Boolean);
  const result: string[] = [];

  for (const line of lines) {
    // Skip markdown headers
    if (line.startsWith('#')) continue;
    // Skip pure Chinese lines
    const chineseChars = (line.match(/[\u4e00-\u9fff]/g) || []).length;
    if (chineseChars / Math.max(line.length, 1) > 0.6) continue;
    // Skip lines that are too short
    if (line.length < 10) continue;

    let cleaned = line;

    // Pattern: numbered dialogue "- 1. **Role**: English text"
    const dialogueMatch = line.match(/^-?\s*\d+\.\s*\*{0,2}[A-Z][a-zA-Z\s]*\*{0,2}[：:]\s*(.+?)\s*(?:（|\(|$)/);
    if (dialogueMatch) {
      cleaned = dialogueMatch[1].replace(/[.。!！?？]\s*$/, '');
      if (cleaned.length >= 10) {
        result.push(cleaned);
        continue;
      }
    }

    // Pattern: "- **Role**: English text"
    const roleMatch = line.match(/^-?\s*\*{0,2}[A-Z][a-zA-Z\s]*\*{0,2}[：:]\s*(.+?)\s*(?:（|\(|$)/);
    if (roleMatch) {
      cleaned = roleMatch[1].replace(/[.。!！?？]\s*$/, '');
      if (cleaned.length >= 10) {
        result.push(cleaned);
        continue;
      }
    }

    // Pattern: numbered English sentence "1. Some English text"
    const numberedMatch = line.match(/^-?\s*\d+\.\s+([A-Z].+)/);
    if (numberedMatch) {
      cleaned = numberedMatch[1].replace(/\*{1,2}/g, '').replace(/[（(][^)）]*[)）]\s*$/, '').trim();
      if (cleaned.length >= 10 && /[A-Z]/.test(cleaned)) {
        result.push(cleaned);
        continue;
      }
    }
  }

  // Deduplicate
  return [...new Set(result)].slice(0, 10);
}

export interface ISentencePair {
  en: string;
  cn: string;
}

/**
 * Extract English-Chinese sentence pairs from AI scenario response.
 * Used for flashcards and quiz where both English and Chinese are needed.
 */
export function extractSentencePairsFromResponse(response: string): ISentencePair[] {
  const lines = response.split('\n').map(l => l.trim()).filter(Boolean);
  const pairs: ISentencePair[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('#')) continue;
    if (line.length < 10) continue;

    let en = '';
    let cn = '';

    // Pattern: "**Role**: English text (中文翻译)" or "**Role**: English text\n中文翻译"
    const roleMatch = line.match(/^-?\s*\d*\.?\s*\*{0,2}([A-Z][a-zA-Z\s]*)\*{0,2}[：:]\s*(.+)/);
    if (roleMatch) {
      const content = roleMatch[2].trim();
      // Check for inline Chinese in parentheses
      const inlineMatch = content.match(/^(.+?)\s*[（(]([^)）]+)[)）]\s*$/);
      if (inlineMatch) {
        en = inlineMatch[1].replace(/\*{1,2}/g, '').trim();
        cn = inlineMatch[2].trim();
      } else {
        en = content.replace(/\*{1,2}/g, '').trim();
        // Look for Chinese translation on the next line
        if (i + 1 < lines.length) {
          const nextLine = lines[i + 1];
          const nextChinese = (nextLine.match(/[\u4e00-\u9fff]/g) || []).length;
          if (nextChinese / Math.max(nextLine.length, 1) > 0.4) {
            cn = nextLine.replace(/^[\s\-·•*]+/, '').replace(/\*{1,2}/g, '').trim();
            i++; // skip next line
          }
        }
      }
    }

    // Pattern: numbered English sentence with Chinese on next line
    if (!en) {
      const numMatch = line.match(/^-?\s*\d+\.\s+([A-Z].+)/);
      if (numMatch) {
        const content = numMatch[1].replace(/\*{1,2}/g, '').trim();
        const chineseInLine = (content.match(/[\u4e00-\u9fff]/g) || []).length;
        if (chineseInLine / Math.max(content.length, 1) < 0.3 && content.length >= 10) {
          en = content;
          // Look for Chinese on next line
          if (i + 1 < lines.length) {
            const nextLine = lines[i + 1];
            const nextChinese = (nextLine.match(/[\u4e00-\u9fff]/g) || []).length;
            if (nextChinese / Math.max(nextLine.length, 1) > 0.3) {
              cn = nextLine.replace(/^[\s\-·•*]+/, '').replace(/\*{1,2}/g, '').trim();
              i++;
            }
          }
        }
      }
    }

    // Fallback: standalone English line followed by Chinese line
    if (!en) {
      const chineseRatio = (line.match(/[\u4e00-\u9fff]/g) || []).length / Math.max(line.length, 1);
      if (chineseRatio < 0.2 && /[A-Z]/.test(line) && line.length >= 15) {
        en = line.replace(/\*{1,2}/g, '').replace(/^[\-·•]\s*/, '').trim();
        if (i + 1 < lines.length) {
          const nextLine = lines[i + 1];
          const nextChinese = (nextLine.match(/[\u4e00-\u9fff]/g) || []).length;
          if (nextChinese / Math.max(nextLine.length, 1) > 0.3) {
            cn = nextLine.replace(/^[\s\-·•*]+/, '').replace(/\*{1,2}/g, '').trim();
            i++;
          }
        }
      }
    }

    if (en && en.length >= 8) {
      pairs.push({ en, cn: cn || '(待补充翻译)' });
    }
  }

  // Deduplicate by English sentence
  const seen = new Set<string>();
  return pairs.filter(p => {
    const key = p.en.toLowerCase().replace(/[^a-z\s]/g, '').trim();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, 10);
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<IFavorite[]>(() => loadFavorites());

  const addFavorite = useCallback((query: string, aiResponse: string) => {
    const existing = loadFavorites();
    if (existing.some((f) => f.query.toLowerCase() === query.toLowerCase())) {
      return false;
    }
    const newFav: IFavorite = {
      id: `fav_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      query,
      aiResponse,
      type: detectType(query),
      createdAt: new Date().toISOString(),
    };
    const updated = [newFav, ...existing];
    saveFavorites(updated);
    setFavorites(updated);
    return true;
  }, []);

  const addScenarioFavorite = useCallback((title: string, aiResponse: string) => {
    const existing = loadFavorites();
    if (existing.some((f) => f.type === 'scenario' && f.query.toLowerCase() === title.toLowerCase())) {
      return false;
    }
    const newFav: IFavorite = {
      id: `scenario_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      query: title,
      aiResponse,
      type: 'scenario',
      createdAt: new Date().toISOString(),
      inPractice: true,
    };
    const updated = [newFav, ...existing];
    saveFavorites(updated);
    setFavorites(updated);
    return true;
  }, []);

  const removeFavorite = useCallback((id: string) => {
    const updated = loadFavorites().filter((f) => f.id !== id);
    saveFavorites(updated);
    setFavorites(updated);
  }, []);

  const clearAll = useCallback(() => {
    saveFavorites([]);
    setFavorites([]);
  }, []);

  const togglePractice = useCallback((id: string) => {
    const existing = loadFavorites();
    const updated = existing.map((f) =>
      f.id === id && f.type === 'scenario' ? { ...f, inPractice: !f.inPractice } : f
    );
    saveFavorites(updated);
    setFavorites(updated);
  }, []);

  const isFavorited = useCallback(
    (query: string) => favorites.some((f) => f.query.toLowerCase() === query.toLowerCase()),
    [favorites]
  );

  const getFavoriteId = useCallback(
    (query: string) => {
      const found = favorites.find((f) => f.query.toLowerCase() === query.toLowerCase());
      return found?.id ?? null;
    },
    [favorites]
  );

  const addSentenceFavorite = useCallback((en: string, cn: string) => {
    const existing = loadFavorites();
    if (existing.some((f) => f.query.toLowerCase() === en.toLowerCase())) {
      return false;
    }
    const newFav: IFavorite = {
      id: `fav_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      query: en,
      aiResponse: cn || en,
      type: 'sentence',
      createdAt: new Date().toISOString(),
    };
    const updated = [newFav, ...existing];
    saveFavorites(updated);
    setFavorites(updated);
    return true;
  }, []);

  return {
    favorites,
    addFavorite,
    addScenarioFavorite,
    addSentenceFavorite,
    removeFavorite,
    clearAll,
    togglePractice,
    isFavorited,
    getFavoriteId,
  };
}

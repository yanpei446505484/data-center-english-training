/**
 * Skill Engine — Orchestrates the full text analysis pipeline
 *
 * Flow: clean → tokenize → lemmatize → phrase detect → dictionary lookup → AI fallback → cache
 *
 * Each stage is a separate skill module. The engine chains them together
 * and reports progress via callback.
 */

import { cleanText, tokenize } from './cleaningSkill';
import { lemmatize, lemmatizeAll, isStopWord } from './lemmatizeSkill';
import { detectPhrases, type IPhraseEntry } from './phraseSkill';
import { lookupDictionary, lookupEnglishDict, lookupBatchFromServer, lookupWordRemote, type DictionaryEntry } from './dictionarySkill';
import { aiBatchLookup, type IAiWordEntry } from './aiFallbackSkill';

// ─── Types ───

export type SkillStage =
  | 'idle'
  | 'cleaning'
  | 'tokenizing'
  | 'lemmatizing'
  | 'phraseDetecting'
  | 'dictionaryLookup'
  | 'checking'
  | 'aiFallback'
  | 'generating'
  | 'complete';

export interface IAnalyzedWord {
  word: string;
  lemma: string;
  chinese: string;
  englishDef: string;
  pos: string;
  ipa: string;
  source: 'professional' | 'basic' | 'phrase' | 'ai' | 'cache';
  domain?: string;
  count: number;
  dataCenterMeaning?: string;
  phrases?: string[];
  examples?: string[];
  workMeaning?: string;
  grammarNote?: string;
  simpleEnglish?: string;
}

export interface IAnalysisResult {
  originalText: string;
  cleanedText: string;
  words: IAnalyzedWord[];
  phrases: IPhraseEntry[];
  totalWords: number;
  uniqueWords: number;
  foundCount: number;
  aiCount: number;
  stage: SkillStage;
}

export const STAGE_LABELS: Record<SkillStage, string> = {
  idle: 'Ready',
  cleaning: 'Cleaning text...',
  tokenizing: 'Tokenizing...',
  lemmatizing: 'Lemmatizing...',
  phraseDetecting: 'Detecting phrases...',
  dictionaryLookup: 'Dictionary lookup...',
  checking: 'Checking unknowns...',
  aiFallback: 'AI batch lookup...',
  generating: 'Generating course...',
  complete: 'Complete',
};

// ─── Main Pipeline ───

export async function analyzeText(
  text: string,
  onStage?: (stage: SkillStage) => void,
): Promise<IAnalysisResult> {
  const notify = (s: SkillStage) => onStage?.(s);

  // Stage 1: Clean
  notify('cleaning');
  await delay(80);
  const cleaned = cleanText(text);

  // Stage 2: Tokenize
  notify('tokenizing');
  await delay(80);
  const tokens = tokenize(text);

  // Stage 3: Lemmatize (skip stopwords)
  notify('lemmatizing');
  await delay(80);
  const wordFreq = new Map<string, { count: number; originals: Set<string> }>();
  for (const token of tokens) {
    const lower = token.toLowerCase();
    if (lower.length < 2 || isStopWord(lower)) continue;
    const lemma = lemmatize(lower);
    const existing = wordFreq.get(lemma);
    if (existing) {
      existing.count++;
      existing.originals.add(lower);
    } else {
      wordFreq.set(lemma, { count: 1, originals: new Set([lower]) });
    }
  }

  // Stage 4: Detect phrases
  notify('phraseDetecting');
  await delay(80);
  const phrases = detectPhrases(cleaned);

  // Stage 5: Dictionary lookup (DC terms → English dict → basic → lemma → phrase)
  notify('dictionaryLookup');
  // Preload English dictionary JSON (async, cached after first load)
  await lookupEnglishDict('__preload__', '__preload__');
  await delay(120);
  const entries = new Map<string, IAnalyzedWord>();
  const notFound: string[] = [];

  for (const [lemma, info] of wordFreq) {
    const original = [...info.originals][0];

    // Try original form first, then lemma
    const dictHit = lookupDictionary(original, lemma);

    if (dictHit) {
      entries.set(lemma, {
        word: original,
        lemma,
        chinese: dictHit.chinese,
        englishDef: dictHit.englishDef,
        pos: dictHit.pos,
        ipa: dictHit.ipa ?? '',
        source: dictHit.source as IAnalyzedWord['source'],
        domain: dictHit.domain,
        count: info.count,
        dataCenterMeaning: dictHit.dataCenterMeaning,
        phrases: dictHit.phrases ?? phrases.filter(p => p.phrase.includes(lemma)).map(p => p.phrase),
        examples: dictHit.example ? [dictHit.example] : undefined,
      });
    } else {
      notFound.push(lemma);
    }
  }

  // Stage 6: Check unfound
  notify('checking');
  await delay(60);

  // Stage 6.5: Server dictionary database lookup for unfound words
  if (notFound.length > 0) {
    try {
      const serverResults = await lookupBatchFromServer(notFound);
      const stillNotFound: string[] = [];
      for (const lemma of notFound) {
        const serverHit = serverResults.get(lemma.toLowerCase());
        if (serverHit) {
          const freq = wordFreq.get(lemma);
          const original = freq ? [...freq.originals][0] : lemma;
          entries.set(lemma, {
            word: original,
            lemma,
            chinese: serverHit.chinese,
            englishDef: serverHit.englishDef,
            pos: serverHit.pos,
            ipa: serverHit.ipa ?? '',
            source: serverHit.source as IAnalyzedWord['source'],
            count: freq?.count ?? 1,
            phrases: phrases.filter(p => p.phrase.includes(lemma)).map(p => p.phrase),
            examples: serverHit.example ? [serverHit.example] : undefined,
          });
        } else {
          stillNotFound.push(lemma);
        }
      }
      notFound.length = 0;
      notFound.push(...stillNotFound);
    } catch {
      // Server batch lookup failed, proceed to AI fallback
    }
  }

  // Stage 6.8: Free Dictionary API fallback for remaining unfound words
  if (notFound.length > 0) {
    const stillNotFound: string[] = [];
    for (const lemma of notFound) {
      try {
        const remoteResult = await lookupWordRemote(lemma);
        if (remoteResult && (remoteResult.englishDef || remoteResult.chinese)) {
          const freq = wordFreq.get(lemma);
          const original = freq ? [...freq.originals][0] : lemma;
          entries.set(lemma, {
            word: original,
            lemma,
            chinese: remoteResult.chinese,
            englishDef: remoteResult.englishDef,
            pos: remoteResult.pos,
            ipa: remoteResult.ipa,
            source: 'basic',
            count: freq?.count ?? 1,
            examples: remoteResult.example ? [remoteResult.example] : undefined,
          });
        } else {
          stillNotFound.push(lemma);
        }
      } catch {
        stillNotFound.push(lemma);
      }
    }
    notFound.length = 0;
    notFound.push(...stillNotFound);
  }

  // Stage 7: AI fallback for unknown words
  let aiCount = 0;
  if (notFound.length > 0) {
    notify('aiFallback');
    const aiResults = await aiBatchLookup(notFound);
    for (const aiEntry of aiResults) {
      const freq = wordFreq.get(aiEntry.lemma) ?? wordFreq.get(aiEntry.word);
      entries.set(aiEntry.lemma || aiEntry.word, {
        word: aiEntry.word,
        lemma: aiEntry.lemma || aiEntry.word,
        chinese: aiEntry.chinese,
        englishDef: aiEntry.simpleEnglish || aiEntry.chinese,
        pos: aiEntry.pos,
        ipa: aiEntry.ipa || '',
        source: 'ai',
        count: freq?.count ?? 1,
        dataCenterMeaning: aiEntry.workMeaning,
        phrases: aiEntry.phrases,
        examples: aiEntry.examples,
        workMeaning: aiEntry.workMeaning,
        grammarNote: aiEntry.grammarNote,
        simpleEnglish: aiEntry.simpleEnglish,
      });
      aiCount++;
    }
  }

  // Stage 8: Generate results
  notify('generating');
  await delay(100);

  const words = [...entries.values()].sort((a, b) => b.count - a.count);
  const foundCount = words.filter(w => w.source !== 'ai').length;

  notify('complete');

  return {
    originalText: text,
    cleanedText: cleaned,
    words,
    phrases,
    totalWords: tokens.length,
    uniqueWords: words.length,
    foundCount,
    aiCount,
    stage: 'complete',
  };
}

// ─── Utility ───

function delay(ms: number): Promise<void> {
  return new Promise(r => setTimeout(r, ms));
}

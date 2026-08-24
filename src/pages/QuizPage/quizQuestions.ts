import {
  Brain, ToggleLeft, Type, Headphones, Link2,
  Languages, MessageSquareText, HelpCircle, ListChecks,
} from 'lucide-react';
import { storage } from '@/lib/storage';
import { userStorageKey } from '@/lib/userStorage';
import type { ISentence } from '@/data/sentenceLearning';

export type QuestionType = 'choice' | 'truefalse' | 'fillblank' | 'listen' | 'matching' | 'word_choice' | 'phrase_choice' | 'grammar_choice';

export interface IBaseQ { type: QuestionType; sentence: ISentence; }
export interface IChoiceQ extends IBaseQ {
  type: 'choice';
  prompt: string;
  options: string[];
  correctIdx: number;
}
export interface ITrueFalseQ extends IBaseQ {
  type: 'truefalse';
  en: string;
  cn: string;
  isCorrect: boolean;
}
export interface IFillBlankQ extends IBaseQ {
  type: 'fillblank';
  display: string;
  answer: string;
  hint: string;
}
export interface IListenQ extends IBaseQ {
  type: 'listen';
  answer: string;
}
export interface IMatchingQ extends IBaseQ {
  type: 'matching';
  pairs: { en: string; cn: string }[];
}
export interface IWordChoiceQ extends IBaseQ {
  type: 'word_choice';
  word: string;
  pos?: string;
  context: string;
  options: string[];
  correctIdx: number;
  explanation: string;
}
export interface IPhraseChoiceQ extends IBaseQ {
  type: 'phrase_choice';
  phrase: string;
  context: string;
  options: string[];
  correctIdx: number;
  explanation: string;
}
export interface IGrammarChoiceQ extends IBaseQ {
  type: 'grammar_choice';
  grammarQuestion: string;
  options: string[];
  correctIdx: number;
  explanation: string;
}

export type IQuestion = IChoiceQ | ITrueFalseQ | IFillBlankQ | IListenQ | IMatchingQ | IWordChoiceQ | IPhraseChoiceQ | IGrammarChoiceQ;

export interface IAnswerRecord {
  questionType: QuestionType;
  question: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  sentenceEn: string;
  sentenceCn: string;
}

export interface IQuizResult {
  topicLabel: string;
  score: number;
  total: number;
  timeSeconds: number;
  date: string;
}

export type Phase = 'select' | 'quiz' | 'result';

const QUIZ_STORAGE_KEY = 'quiz_history';

function getQuizHistory(): IQuizResult[] {
  try {
    const raw = storage.getItem(userStorageKey(QUIZ_STORAGE_KEY));
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveQuizResult(result: IQuizResult) {
  try {
    const history = getQuizHistory();
    history.unshift(result);
    storage.setItem(userStorageKey(QUIZ_STORAGE_KEY), JSON.stringify(history.slice(0, 50)));
  } catch {
    // silently fail
  }
}

export function getBestScore(topicLabel: string): number | null {
  const history = getQuizHistory().filter(r => r.topicLabel === topicLabel);
  if (history.length === 0) return null;
  return Math.max(...history.map(r => Math.round((r.score / r.total) * 100)));
}

export function normalizeAnswer(s: string): string {
  return s.trim().toLowerCase().replace(/[.,!?;:'"]/g, '').replace(/\s+/g, ' ');
}

export function checkAnswer(user: string, correct: string): boolean {
  const u = normalizeAnswer(user);
  const c = normalizeAnswer(correct);
  if (u === c) return true;
  if (u.length < 2) return false;
  const cWords = c.split(' ').filter(w => w.length > 2);
  if (cWords.length === 0) return u === c;
  const uWords = new Set(u.split(' '));
  const matchCount = cWords.filter(w => uWords.has(w)).length;
  return matchCount / cWords.length >= 0.7;
}

export function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return m > 0 ? `${m}分${s}秒` : `${s}秒`;
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const TYPE_META: Record<QuestionType, { label: string; icon: typeof Brain; color: string }> = {
  choice:    { label: '选择题', icon: ListChecks, color: 'text-blue-400 bg-blue-400/10' },
  truefalse: { label: '判断题', icon: ToggleLeft, color: 'text-amber-400 bg-amber-400/10' },
  fillblank: { label: '填空题', icon: Type, color: 'text-purple-400 bg-purple-400/10' },
  listen:    { label: '听力题', icon: Headphones, color: 'text-teal-400 bg-teal-400/10' },
  matching:  { label: '连线题', icon: Link2, color: 'text-rose-400 bg-rose-400/10' },
  word_choice:    { label: '单词题', icon: Languages, color: 'text-emerald-400 bg-emerald-400/10' },
  phrase_choice:  { label: '词组句型', icon: MessageSquareText, color: 'text-cyan-400 bg-cyan-400/10' },
  grammar_choice: { label: '语法题', icon: HelpCircle, color: 'text-orange-400 bg-orange-400/10' },
};

export function generateQuestions(sentences: ISentence[], count?: number): IQuestion[] {
  if (sentences.length === 0) return [];
  const pool = shuffle(sentences);
  const result: IQuestion[] = [];
  let phraseGrammarToggle = 0;
  for (const s of pool) {
    const hasWords = s.words && s.words.length > 0;
    const hasPhrases = s.phrases && s.phrases.length > 0;
    const hasGrammar = s.grammar && s.grammar.length > 0;
    if (hasWords) {
      result.push(genWordChoice(s, pool));
    } else {
      result.push(genChoice(s, pool));
    }
    if (hasPhrases || hasGrammar) {
      if (phraseGrammarToggle % 2 === 0 && hasPhrases) {
        result.push(genPhraseChoice(s, pool));
      } else if (hasGrammar) {
        result.push(genGrammarChoice(s, pool));
      } else if (hasPhrases) {
        result.push(genPhraseChoice(s, pool));
      }
      phraseGrammarToggle++;
    } else {
      result.push(genTrueFalse(s, pool));
    }
  }
  return result;
}

function genChoice(s: ISentence, all: ISentence[]): IChoiceQ {
  const wrongs = shuffle(all.filter(x => x.id !== s.id)).slice(0, 3);
  const options = shuffle([s.en, ...wrongs.map(w => w.en)]);
  return {
    type: 'choice', sentence: s,
    prompt: `选出「${s.cn}」的正确英文表达`,
    options, correctIdx: options.indexOf(s.en),
  };
}

function genTrueFalse(s: ISentence, all: ISentence[]): ITrueFalseQ {
  const showCorrect = Math.random() > 0.5;
  if (showCorrect) {
    return { type: 'truefalse', sentence: s, en: s.en, cn: s.cn, isCorrect: true };
  }
  const other = shuffle(all.filter(x => x.id !== s.id))[0];
  return { type: 'truefalse', sentence: s, en: other?.en ?? s.en, cn: s.cn, isCorrect: false };
}

function genFillBlank(s: ISentence): IFillBlankQ {
  const words = s.en.split(' ');
  const candidates = words
    .map((w, i) => ({ w, i }))
    .filter(({ w, i }) => w.replace(/[^a-zA-Z]/g, '').length >= 3 && i > 0 && i < words.length - 1);
  const pick = candidates.length > 0
    ? candidates[Math.floor(Math.random() * candidates.length)]
    : { w: words[words.length - 1], i: words.length - 1 };
  const cleanWord = pick.w.replace(/[^a-zA-Z'-]/g, '');
  const display = words.map((w, i) => i === pick.i ? '______' : w).join(' ');
  return { type: 'fillblank', sentence: s, display, answer: cleanWord, hint: s.cn };
}

function genListen(s: ISentence): IListenQ {
  return { type: 'listen', sentence: s, answer: s.en };
}

function genMatching(sentences: ISentence[]): IMatchingQ {
  const pairs = sentences.map(s => ({ en: s.en, cn: s.cn }));
  return { type: 'matching', sentence: sentences[0], pairs };
}

function getWordText(w: { w?: string; word?: string }): string {
  return w.w || w.word || '';
}

function getPhraseText(p: { p?: string; phrase?: string }): string {
  return p.p || p.phrase || '';
}

function genWordChoice(s: ISentence, all: ISentence[]): IWordChoiceQ {
  const word = s.words[Math.floor(Math.random() * s.words.length)];
  const wordText = getWordText(word);
  const otherCns = all
    .filter(x => x.id !== s.id)
    .flatMap(x => x.words || [])
    .map(w => w.cn)
    .filter(cn => cn && cn !== word.cn);
  const uniqueCns = [...new Set(otherCns)];
  const wrongCns = shuffle(uniqueCns).slice(0, 3);
  while (wrongCns.length < 3) {
    wrongCns.push(`非正确选项${wrongCns.length + 1}`);
  }
  const options = shuffle([word.cn, ...wrongCns]);
  return {
    type: 'word_choice', sentence: s,
    word: wordText, pos: word.pos, context: s.en,
    options, correctIdx: options.indexOf(word.cn),
    explanation: word.memory || word.phonics || '',
  };
}

function genPhraseChoice(s: ISentence, all: ISentence[]): IPhraseChoiceQ {
  const phrase = s.phrases[Math.floor(Math.random() * s.phrases.length)];
  const phraseText = getPhraseText(phrase);
  const otherCns = all
    .filter(x => x.id !== s.id)
    .flatMap(x => x.phrases || [])
    .map(p => p.cn)
    .filter(cn => cn && cn !== phrase.cn);
  const uniqueCns = [...new Set(otherCns)];
  const wrongCns = shuffle(uniqueCns).slice(0, 3);
  while (wrongCns.length < 3) {
    wrongCns.push(`非正确选项${wrongCns.length + 1}`);
  }
  const options = shuffle([phrase.cn, ...wrongCns]);
  return {
    type: 'phrase_choice', sentence: s,
    phrase: phraseText, context: s.en,
    options, correctIdx: options.indexOf(phrase.cn),
    explanation: phrase.why,
  };
}

function genGrammarChoice(s: ISentence, all: ISentence[]): IGrammarChoiceQ {
  const grammar = s.grammar![Math.floor(Math.random() * s.grammar!.length)];
  const otherAnswers = all
    .filter(x => x.id !== s.id)
    .flatMap(x => x.grammar || [])
    .map(g => g.a)
    .filter(a => a && a !== grammar.a);
  const uniqueAnswers = [...new Set(otherAnswers)];
  const wrongAnswers = shuffle(uniqueAnswers).slice(0, 3);
  while (wrongAnswers.length < 3) {
    wrongAnswers.push(`非正确解释${wrongAnswers.length + 1}`);
  }
  const truncateOpt = (t: string) => t.length > 120 ? t.slice(0, 117) + '...' : t;
  const allOptions = shuffle([grammar.a, ...wrongAnswers]).map(truncateOpt);
  const correctTruncated = truncateOpt(grammar.a);
  return {
    type: 'grammar_choice', sentence: s,
    grammarQuestion: grammar.q,
    options: allOptions, correctIdx: allOptions.indexOf(correctTruncated),
    explanation: grammar.a,
  };
}

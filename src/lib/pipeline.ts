/**
 * Text Analysis Pipeline
 * clean → tokenize → lemmatize → dictionary lookup → AI fallback → structured results
 */

import { storage } from '@/lib/storage';
import { logger } from '@/lib/app-logger';
import { aiChat } from '@/lib/ai-gateway';
import { lookupTerm, type ITermEntry } from '@/data/dcTermsDictionary';

// ─── Exports ───
export interface IWordEntry {
  word: string;
  lemma: string;
  pos?: string;
  cn: string;
  en_meaning?: string;
  ipa?: string;
  source: 'professional' | 'basic' | 'ai';
  domain?: string;
  inText: boolean;
}

export interface IPhraseEntry {
  phrase: string;
  cn: string;
  source: 'professional' | 'basic';
  domain?: string;
  positions: number[];
}

export type PipelineStage =
  | 'idle'
  | 'cleaning'
  | 'tokenizing'
  | 'lemmatizing'
  | 'basic_lookup'
  | 'professional_lookup'
  | 'checking'
  | 'ai_fallback'
  | 'caching'
  | 'generating'
  | 'complete';

export interface IPipelineResult {
  originalText: string;
  cleanedText: string;
  words: IWordEntry[];
  phrases: IPhraseEntry[];
  unknownWords: string[];
  totalTokens: number;
  foundCount: number;
  aiCount: number;
  stage: PipelineStage;
}

// ─── Basic Dictionary (~80 common English words) ───
const BASIC_DICTIONARY: IWordEntry[] = [
  { word: 'the', lemma: 'the', pos: 'art.', cn: '这/那', source: 'basic', inText: false },
  { word: 'is', lemma: 'be', pos: 'v.', cn: '是', source: 'basic', inText: false },
  { word: 'are', lemma: 'be', pos: 'v.', cn: '是(复数)', source: 'basic', inText: false },
  { word: 'was', lemma: 'be', pos: 'v.', cn: '是(过去)', source: 'basic', inText: false },
  { word: 'were', lemma: 'be', pos: 'v.', cn: '是(过去复数)', source: 'basic', inText: false },
  { word: 'has', lemma: 'have', pos: 'v.', cn: '有(三单)', source: 'basic', inText: false },
  { word: 'have', lemma: 'have', pos: 'v.', cn: '有', source: 'basic', inText: false },
  { word: 'had', lemma: 'have', pos: 'v.', cn: '有(过去)', source: 'basic', inText: false },
  { word: 'do', lemma: 'do', pos: 'v.', cn: '做', source: 'basic', inText: false },
  { word: 'does', lemma: 'do', pos: 'v.', cn: '做(三单)', source: 'basic', inText: false },
  { word: 'did', lemma: 'do', pos: 'v.', cn: '做(过去)', source: 'basic', inText: false },
  { word: 'will', lemma: 'will', pos: 'modal', cn: '将', source: 'basic', inText: false },
  { word: 'would', lemma: 'would', pos: 'modal', cn: '将会/愿意', source: 'basic', inText: false },
  { word: 'can', lemma: 'can', pos: 'modal', cn: '能/可以', source: 'basic', inText: false },
  { word: 'could', lemma: 'could', pos: 'modal', cn: '能够(过去)', source: 'basic', inText: false },
  { word: 'should', lemma: 'should', pos: 'modal', cn: '应该', source: 'basic', inText: false },
  { word: 'must', lemma: 'must', pos: 'modal', cn: '必须', source: 'basic', inText: false },
  { word: 'shall', lemma: 'shall', pos: 'modal', cn: '将/应', source: 'basic', inText: false },
  { word: 'may', lemma: 'may', pos: 'modal', cn: '可能/可以', source: 'basic', inText: false },
  { word: 'not', lemma: 'not', pos: 'adv.', cn: '不', source: 'basic', inText: false },
  { word: 'all', lemma: 'all', pos: 'det.', cn: '所有', source: 'basic', inText: false },
  { word: 'some', lemma: 'some', pos: 'det.', cn: '一些', source: 'basic', inText: false },
  { word: 'any', lemma: 'any', pos: 'det.', cn: '任何', source: 'basic', inText: false },
  { word: 'this', lemma: 'this', pos: 'det.', cn: '这个', source: 'basic', inText: false },
  { word: 'that', lemma: 'that', pos: 'det.', cn: '那个', source: 'basic', inText: false },
  { word: 'these', lemma: 'these', pos: 'det.', cn: '这些', source: 'basic', inText: false },
  { word: 'those', lemma: 'those', pos: 'det.', cn: '那些', source: 'basic', inText: false },
  { word: 'each', lemma: 'each', pos: 'det.', cn: '每个', source: 'basic', inText: false },
  { word: 'every', lemma: 'every', pos: 'det.', cn: '每个', source: 'basic', inText: false },
  { word: 'with', lemma: 'with', pos: 'prep.', cn: '和/用', source: 'basic', inText: false },
  { word: 'from', lemma: 'from', pos: 'prep.', cn: '从', source: 'basic', inText: false },
  { word: 'into', lemma: 'into', pos: 'prep.', cn: '进入', source: 'basic', inText: false },
  { word: 'about', lemma: 'about', pos: 'prep.', cn: '关于/大约', source: 'basic', inText: false },
  { word: 'between', lemma: 'between', pos: 'prep.', cn: '在...之间', source: 'basic', inText: false },
  { word: 'through', lemma: 'through', pos: 'prep.', cn: '通过/穿过', source: 'basic', inText: false },
  { word: 'during', lemma: 'during', pos: 'prep.', cn: '在...期间', source: 'basic', inText: false },
  { word: 'before', lemma: 'before', pos: 'prep.', cn: '在...之前', source: 'basic', inText: false },
  { word: 'after', lemma: 'after', pos: 'prep.', cn: '在...之后', source: 'basic', inText: false },
  { word: 'above', lemma: 'above', pos: 'prep.', cn: '在...上方', source: 'basic', inText: false },
  { word: 'below', lemma: 'below', pos: 'prep.', cn: '在...下方', source: 'basic', inText: false },
  { word: 'under', lemma: 'under', pos: 'prep.', cn: '在...下面', source: 'basic', inText: false },
  { word: 'over', lemma: 'over', pos: 'prep.', cn: '超过/在上方', source: 'basic', inText: false },
  { word: 'and', lemma: 'and', pos: 'conj.', cn: '和', source: 'basic', inText: false },
  { word: 'but', lemma: 'but', pos: 'conj.', cn: '但是', source: 'basic', inText: false },
  { word: 'because', lemma: 'because', pos: 'conj.', cn: '因为', source: 'basic', inText: false },
  { word: 'although', lemma: 'although', pos: 'conj.', cn: '虽然', source: 'basic', inText: false },
  { word: 'however', lemma: 'however', pos: 'adv.', cn: '然而', source: 'basic', inText: false },
  { word: 'therefore', lemma: 'therefore', pos: 'adv.', cn: '因此', source: 'basic', inText: false },
  { word: 'also', lemma: 'also', pos: 'adv.', cn: '也', source: 'basic', inText: false },
  { word: 'then', lemma: 'then', pos: 'adv.', cn: '然后/那么', source: 'basic', inText: false },
  { word: 'here', lemma: 'here', pos: 'adv.', cn: '这里', source: 'basic', inText: false },
  { word: 'there', lemma: 'there', pos: 'adv.', cn: '那里', source: 'basic', inText: false },
  { word: 'now', lemma: 'now', pos: 'adv.', cn: '现在', source: 'basic', inText: false },
  { word: 'still', lemma: 'still', pos: 'adv.', cn: '仍然', source: 'basic', inText: false },
  { word: 'please', lemma: 'please', pos: 'adv.', cn: '请', source: 'basic', inText: false },
  { word: 'make', lemma: 'make', pos: 'v.', cn: '制作/使', source: 'basic', inText: false },
  { word: 'made', lemma: 'make', pos: 'v.', cn: '制作(过去)', source: 'basic', inText: false },
  { word: 'take', lemma: 'take', pos: 'v.', cn: '拿/取', source: 'basic', inText: false },
  { word: 'took', lemma: 'take', pos: 'v.', cn: '拿(过去)', source: 'basic', inText: false },
  { word: 'give', lemma: 'give', pos: 'v.', cn: '给', source: 'basic', inText: false },
  { word: 'gave', lemma: 'give', pos: 'v.', cn: '给(过去)', source: 'basic', inText: false },
  { word: 'come', lemma: 'come', pos: 'v.', cn: '来', source: 'basic', inText: false },
  { word: 'came', lemma: 'come', pos: 'v.', cn: '来(过去)', source: 'basic', inText: false },
  { word: 'see', lemma: 'see', pos: 'v.', cn: '看见', source: 'basic', inText: false },
  { word: 'saw', lemma: 'see', pos: 'v.', cn: '看见(过去)', source: 'basic', inText: false },
  { word: 'go', lemma: 'go', pos: 'v.', cn: '去', source: 'basic', inText: false },
  { word: 'went', lemma: 'go', pos: 'v.', cn: '去(过去)', source: 'basic', inText: false },
  { word: 'say', lemma: 'say', pos: 'v.', cn: '说', source: 'basic', inText: false },
  { word: 'said', lemma: 'say', pos: 'v.', cn: '说(过去)', source: 'basic', inText: false },
  { word: 'know', lemma: 'know', pos: 'v.', cn: '知道', source: 'basic', inText: false },
  { word: 'knew', lemma: 'know', pos: 'v.', cn: '知道(过去)', source: 'basic', inText: false },
  { word: 'get', lemma: 'get', pos: 'v.', cn: '得到', source: 'basic', inText: false },
  { word: 'got', lemma: 'get', pos: 'v.', cn: '得到(过去)', source: 'basic', inText: false },
  { word: 'think', lemma: 'think', pos: 'v.', cn: '想/认为', source: 'basic', inText: false },
  { word: 'thought', lemma: 'think', pos: 'v.', cn: '想(过去)', source: 'basic', inText: false },
  { word: 'find', lemma: 'find', pos: 'v.', cn: '找到', source: 'basic', inText: false },
  { word: 'found', lemma: 'find', pos: 'v.', cn: '找到(过去)', source: 'basic', inText: false },
  { word: 'run', lemma: 'run', pos: 'v.', cn: '运行/跑', source: 'basic', inText: false },
  { word: 'running', lemma: 'run', pos: 'v.', cn: '运行中', source: 'basic', inText: false },
  { word: 'good', lemma: 'good', pos: 'adj.', cn: '好的', source: 'basic', inText: false },
  { word: 'new', lemma: 'new', pos: 'adj.', cn: '新的', source: 'basic', inText: false },
  { word: 'old', lemma: 'old', pos: 'adj.', cn: '旧的/老的', source: 'basic', inText: false },
  { word: 'high', lemma: 'high', pos: 'adj.', cn: '高的', source: 'basic', inText: false },
  { word: 'low', lemma: 'low', pos: 'adj.', cn: '低的', source: 'basic', inText: false },
  { word: 'big', lemma: 'big', pos: 'adj.', cn: '大的', source: 'basic', inText: false },
  { word: 'small', lemma: 'small', pos: 'adj.', cn: '小的', source: 'basic', inText: false },
  { word: 'same', lemma: 'same', pos: 'adj.', cn: '相同的', source: 'basic', inText: false },
  { word: 'different', lemma: 'different', pos: 'adj.', cn: '不同的', source: 'basic', inText: false },
  { word: 'time', lemma: 'time', pos: 'n.', cn: '时间/次', source: 'basic', inText: false },
  { word: 'year', lemma: 'year', pos: 'n.', cn: '年', source: 'basic', inText: false },
  { word: 'day', lemma: 'day', pos: 'n.', cn: '天', source: 'basic', inText: false },
  { word: 'hour', lemma: 'hour', pos: 'n.', cn: '小时', source: 'basic', inText: false },
  { word: 'work', lemma: 'work', pos: 'n./v.', cn: '工作', source: 'basic', inText: false },
  { word: 'system', lemma: 'system', pos: 'n.', cn: '系统', source: 'basic', inText: false },
  { word: 'need', lemma: 'need', pos: 'v.', cn: '需要', source: 'basic', inText: false },
  { word: 'use', lemma: 'use', pos: 'v.', cn: '使用', source: 'basic', inText: false },
  { word: 'using', lemma: 'use', pos: 'v.', cn: '使用中', source: 'basic', inText: false },
  { word: 'check', lemma: 'check', pos: 'v.', cn: '检查', source: 'basic', inText: false },
  { word: 'report', lemma: 'report', pos: 'n./v.', cn: '报告', source: 'basic', inText: false },
  { word: 'issue', lemma: 'issue', pos: 'n.', cn: '问题/议题', source: 'basic', inText: false },
  { word: 'team', lemma: 'team', pos: 'n.', cn: '团队', source: 'basic', inText: false },
  { word: 'site', lemma: 'site', pos: 'n.', cn: '站点/现场', source: 'basic', inText: false },
  { word: 'room', lemma: 'room', pos: 'n.', cn: '房间', source: 'basic', inText: false },
  { word: 'area', lemma: 'area', pos: 'n.', cn: '区域', source: 'basic', inText: false },
  { word: 'power', lemma: 'power', pos: 'n.', cn: '电力/功率', source: 'basic', inText: false },
  { word: 'data', lemma: 'data', pos: 'n.', cn: '数据', source: 'basic', inText: false },
];

const BASIC_INDEX = new Map<string, IWordEntry>();
for (const w of BASIC_DICTIONARY) {
  BASIC_INDEX.set(w.word.toLowerCase(), w);
  if (w.lemma !== w.word) BASIC_INDEX.set(w.lemma.toLowerCase(), w);
}

const STOPWORDS = new Set([
  'a', 'an', 'the', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
  'am', 'has', 'have', 'had', 'do', 'does', 'did', 'will', 'would',
  'could', 'should', 'may', 'might', 'shall', 'can', 'need', 'dare',
  'to', 'of', 'in', 'for', 'on', 'with', 'at', 'by', 'from', 'as',
  'into', 'through', 'during', 'before', 'after', 'above', 'below',
  'between', 'out', 'off', 'up', 'down', 'over', 'under', 'again',
  'further', 'then', 'once', 'and', 'but', 'or', 'nor', 'not', 'so',
  'yet', 'both', 'either', 'neither', 'each', 'every', 'all', 'any',
  'few', 'more', 'most', 'other', 'some', 'such', 'no', 'only', 'own',
  'same', 'than', 'too', 'very', 'just', 'because', 'if', 'when',
  'while', 'although', 'though', 'that', 'this', 'these', 'those',
  'i', 'me', 'my', 'we', 'us', 'our', 'you', 'your', 'he', 'him',
  'his', 'she', 'her', 'it', 'its', 'they', 'them', 'their', 'what',
  'which', 'who', 'whom', 'how', 'where', 'here', 'there', 'about',
  'also', 'now', 'still', 'please', 'okay', 'ok',
]);

// ─── Stage 1: Cleaning ───
function normalizeText(text: string): string {
  return text
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
    .replace(/```[\s\S]*?```/g, '').replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\*([^*]+)\*/g, '$1')
    .replace(/#{1,6}\s+/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\r\n/g, '\n').replace(/\s+/g, ' ').trim();
}

// ─── Stage 2: Tokenize ───
function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s'-]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 0 && w.length < 40 && !/^\d+$/.test(w));
}

// ─── Stage 3: Lemmatize (rule-based) ───
const IRREGULAR: Record<string, string> = {
  running: 'run', ran: 'run', went: 'go', gone: 'go', took: 'take', taken: 'take',
  gave: 'give', given: 'give', came: 'come', saw: 'see', seen: 'see',
  made: 'make', did: 'do', done: 'do', said: 'say', got: 'get', gotten: 'get',
  thought: 'think', found: 'find', knew: 'know', known: 'know', told: 'tell',
  put: 'put', cut: 'cut', set: 'set', shut: 'shut', let: 'let',
  began: 'begin', begun: 'begin', wrote: 'write', written: 'write',
  drove: 'drive', driven: 'drive', spoke: 'speak', spoken: 'speak',
  broke: 'break', broken: 'break', chose: 'choose', chosen: 'choose',
  grew: 'grow', grown: 'grow', threw: 'throw', thrown: 'throw',
  flew: 'fly', flown: 'fly', drew: 'draw', drawn: 'draw',
  wore: 'wear', worn: 'wear', froze: 'freeze', frozen: 'freeze',
  rose: 'rise', risen: 'rise', fell: 'fall', fallen: 'fall',
  kept: 'keep', left: 'leave', lost: 'lose', paid: 'pay', sent: 'send',
  spent: 'spend', stood: 'stand', understood: 'understand', won: 'win',
  held: 'hold', led: 'lead', met: 'meet', read: 'read', cost: 'cost',
  brought: 'bring', bought: 'buy', caught: 'catch', taught: 'teach',
  built: 'build', dealt: 'deal', fed: 'feed', felt: 'feel', fought: 'fight',
  forgot: 'forget', forgotten: 'forget', hid: 'hide', hidden: 'hide',
  hurt: 'hurt', laid: 'lay', lit: 'light', meant: 'mean',
  rode: 'ride', ridden: 'ride', shone: 'shine', shown: 'show',
  sang: 'sing', sung: 'sing', sat: 'sit', slept: 'sleep',
  slid: 'slide', stuck: 'stick', stung: 'sting', struck: 'strike',
  swung: 'swing', tore: 'tear', torn: 'tear', woke: 'wake', woken: 'wake',
};

function lemmatize(word: string): string {
  const w = word.toLowerCase();
  if (IRREGULAR[w]) return IRREGULAR[w];
  if (w.endsWith('ies') && w.length > 4) return w.slice(0, -3) + 'y';
  if (w.endsWith('ves')) return w.slice(0, -3) + 'f';
  if (w.endsWith('ses') || w.endsWith('xes') || w.endsWith('zes') || w.endsWith('ches') || w.endsWith('shes')) return w.slice(0, -2);
  if (w.endsWith('ing')) {
    if (w.length > 5 && w[w.length - 4] === w[w.length - 5]) return w.slice(0, -4);
    if (w.length > 4) return w.slice(0, -3);
  }
  if (w.endsWith('ed')) {
    if (w.length > 5 && w[w.length - 3] === w[w.length - 4]) return w.slice(0, -4);
    if (w.length > 4) return w.slice(0, -2);
  }
  if (w.endsWith('ly') && w.length > 4) return w.slice(0, -2);
  if (w.endsWith('s') && !w.endsWith('ss') && !w.endsWith('us') && w.length > 3) return w.slice(0, -1);
  return w;
}

// ─── Phrase Detection ───
const COMMON_PHRASES = [
  'power supply', 'power failure', 'power outage', 'power distribution',
  'air conditioning', 'fire alarm', 'fire suppression', 'access control',
  'preventive maintenance', 'corrective maintenance', 'routine maintenance',
  'root cause', 'corrective action', 'preventive action',
  'load balancing', 'failover test', 'disaster recovery', 'business continuity',
  'temperature monitoring', 'humidity control', 'environmental monitoring',
  'security camera', 'cctv system', 'intrusion detection',
  'network switch', 'fiber optic', 'patch panel', 'cable management',
  'hot swap', 'cold standby', 'redundant power', 'dual power',
  'mean time', 'service level', 'key performance indicator',
  'standard operating procedure', 'emergency response', 'incident management',
  'change management', 'capacity planning', 'asset management',
];

function detectPhrases(text: string): IPhraseEntry[] {
  const lower = text.toLowerCase();
  const result: IPhraseEntry[] = [];
  for (const phrase of COMMON_PHRASES) {
    const positions: number[] = [];
    let idx = lower.indexOf(phrase);
    while (idx !== -1) {
      positions.push(idx);
      idx = lower.indexOf(phrase, idx + 1);
    }
    if (positions.length > 0) {
      const glossaryHit = lookupTerm(phrase);
      result.push({
        phrase,
        cn: glossaryHit?.cn ?? phrase,
        source: glossaryHit ? 'professional' : 'basic',
        domain: glossaryHit?.domain,
        positions,
      });
    }
  }
  return result.sort((a, b) => b.phrase.length - a.phrase.length);
}

// ─── Dictionary Lookup ───
function lookupInProfessional(word: string): IWordEntry | null {
  const term = lookupTerm(word);
  if (!term) return null;
  return {
    word, lemma: word, pos: term.pos ?? undefined, cn: term.cn,
    source: 'professional', domain: term.domain, inText: true, ipa: term.ipa,
  };
}

function lookupInBasic(word: string): IWordEntry | null {
  const entry = BASIC_INDEX.get(word.toLowerCase());
  if (!entry) return null;
  return { ...entry, inText: true, word };
}

// ─── AI Batch Fallback ───
const AI_CACHE_KEY = 'pipeline_ai_word_cache';

function loadAiCache(): Record<string, IWordEntry> {
  try {
    const raw = storage.getItem(AI_CACHE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

function saveAiCache(cache: Record<string, IWordEntry>) {
    try { storage.setItem(AI_CACHE_KEY, JSON.stringify(cache)); } catch { /* full */ }
}

function buildAiPrompt(words: string[]): string {
  return `Analyze these English words from a data center operations context. Return a JSON array. Each item: {"word":"...","cn":"中文释义","en":"short English definition","pos":"part of speech"}.
Words: ${words.join(', ')}`;
}

function parseAiResponse(content: string, words: string[]): IWordEntry[] {
  try {
    const jsonMatch = content.match(/\[[\s\S]*\]/);
    if (!jsonMatch) return [];
    const parsed = JSON.parse(jsonMatch[0]) as Array<Record<string, string>>;
    return parsed
      .filter((item: Record<string, string>) => item.word && item.cn)
      .map((item: Record<string, string>) => ({
        word: item.word.toLowerCase(), lemma: lemmatize(item.word),
        pos: item.pos, cn: item.cn, en_meaning: item.en,
        source: 'ai' as const, inText: true,
      }));
  } catch {
    return words.map(w => ({
      word: w, lemma: lemmatize(w), cn: '(AI解析失败)',
      source: 'ai' as const, inText: true,
    }));
  }
}

async function aiBatchLookup(words: string[]): Promise<IWordEntry[]> {
  if (words.length === 0) return [];
  const cache = loadAiCache();
  const toLookup = words.filter(w => !cache[w.toLowerCase()]);
  const results: IWordEntry[] = words
    .filter(w => cache[w.toLowerCase()])
    .map(w => ({ ...cache[w.toLowerCase()], inText: true }));

  if (toLookup.length === 0) return results;

  try {
    const content = await aiChat([
      { role: 'system', content: 'You are an English teacher assistant for data center operations.' },
      { role: 'user', content: buildAiPrompt(toLookup) },
    ]);

    if (content) {
      const aiEntries = parseAiResponse(content, toLookup);
      for (const entry of aiEntries) {
        cache[entry.word.toLowerCase()] = entry;
        results.push(entry);
      }
      saveAiCache(cache);
    } else {
      for (const w of toLookup) {
        results.push({
          word: w, lemma: lemmatize(w), cn: '(未找到释义)',
          source: 'ai', inText: true,
        });
      }
    }
  } catch (err) {
    logger.error('Pipeline AI batch lookup failed:', String(err));
    for (const w of toLookup) {
      results.push({
        word: w, lemma: lemmatize(w), cn: '(AI服务不可用)',
        source: 'ai', inText: true,
      });
    }
  }
  return results;
}

// ─── Main Pipeline ───
export async function analyzeText(
  text: string,
  onStage?: (stage: PipelineStage) => void,
): Promise<IPipelineResult> {
  const notify = (s: PipelineStage) => onStage?.(s);

  // Stage 1: Clean
  notify('cleaning');
  const cleaned = normalizeText(text);

  // Stage 2: Tokenize
  notify('tokenizing');
  const tokens = tokenize(cleaned);
  const uniqueTokens = [...new Set(tokens)];

  // Stage 3: Detect phrases + Lemmatize
  notify('lemmatizing');
  const phrases = detectPhrases(cleaned);
  const lemmaMap = new Map<string, string>();
  for (const t of uniqueTokens) {
    if (!STOPWORDS.has(t)) lemmaMap.set(t, lemmatize(t));
  }

  // Stage 4: Professional glossary lookup
  notify('professional_lookup');
  const entryMap = new Map<string, IWordEntry>();
  for (const [original, lemma] of lemmaMap) {
    const profHit = lookupInProfessional(original) ?? lookupInProfessional(lemma);
    if (profHit) entryMap.set(original, profHit);
  }

  // Stage 5: Basic dictionary lookup
  notify('basic_lookup');
  for (const [original, lemma] of lemmaMap) {
    if (!entryMap.has(original)) {
      const basicHit = lookupInBasic(original) ?? lookupInBasic(lemma);
      if (basicHit) entryMap.set(original, basicHit);
    }
  }

  // Stage 6: Check unfound
  notify('checking');
  const unknownWords = [...lemmaMap.keys()].filter(w => !entryMap.has(w));

  // Stage 7: AI fallback
  let aiCount = 0;
  if (unknownWords.length > 0) {
    notify('ai_fallback');
    const aiEntries = await aiBatchLookup(unknownWords);
    notify('caching');
    for (const entry of aiEntries) {
      entryMap.set(entry.word, entry);
      aiCount++;
    }
  }

  // Stage 8: Generate results
  notify('generating');
  const words = [...entryMap.values()];
  const foundCount = words.filter(w => w.source !== 'ai').length;

  notify('complete');
  return {
    originalText: text, cleanedText: cleaned, words, phrases,
    unknownWords, totalTokens: tokens.length,
    foundCount, aiCount, stage: 'complete',
  };
}

/** Stage display labels for UI */
export const STAGE_LABELS: Record<PipelineStage, string> = {
  idle: '准备就绪',
  cleaning: '文本清洗中...',
  tokenizing: '分词处理中...',
  lemmatizing: '词形还原中...',
  basic_lookup: '查询基础词典...',
  professional_lookup: '查询专业词库...',
  checking: '检查未识别词...',
  ai_fallback: 'AI 解析生词中...',
  caching: '写入缓存...',
  generating: '生成学习内容...',
  complete: '分析完成 ✓',
};

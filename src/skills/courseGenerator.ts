/**
 * Course Generator Skill
 *
 * Takes analyzed text + vocabulary results and generates a complete lesson:
 * - Sentence translations (en ↔ cn)
 * - Vocabulary cards with full metadata
 * - Phrase list
 * - Grammar notes
 * - English thinking tips
 * - Practice exercises
 *
 * Results are cached in storage so the learning page only reads
 * pre-generated JSON — no real-time AI calls on every click.
 */

import { storage } from '@/lib/storage';
import { logger } from '@/lib/app-logger';
import type { IAnalysisResult, IAnalyzedWord } from './skillEngine';

// ─── Types ───

export interface ISentenceTranslation {
  en: string;
  cn: string;
  index: number;
}

export interface IGrammarNote {
  rule: string;
  explanation: string;
  examples: string[];
}

export interface IPracticeQuestion {
  type: 'fill_blank' | 'translate' | 'match' | 'choice';
  question: string;
  answer: string;
  options?: string[];
  hint?: string;
}

export interface IEnglishThinkingTip {
  title: string;
  description: string;
  example: string;
}

export interface ICourse {
  id: string;
  title: string;
  originalText: string;
  createdAt: string;
  sentences: ISentenceTranslation[];
  vocabulary: IAnalyzedWord[];
  phrases: Array<{ phrase: string; chinese: string }>;
  grammarNotes: IGrammarNote[];
  thinkingTips: IEnglishThinkingTip[];
  exercises: IPracticeQuestion[];
  stats: {
    totalWords: number;
    uniqueWords: number;
    newWords: number;
    phrases: number;
  };
}

// ─── Cache ───

const COURSE_CACHE_KEY = 'skill_course_cache';
const MAX_CACHED_COURSES = 20;

function loadCourseCache(): Record<string, ICourse> {
  try {
    const raw = storage.getItem(COURSE_CACHE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveCourseCache(cache: Record<string, ICourse>) {
  try {
    // Evict oldest if over limit
    const keys = Object.keys(cache);
    if (keys.length > MAX_CACHED_COURSES) {
      const sorted = keys.sort((a, b) => {
        const ta = cache[a]?.createdAt ?? '';
        const tb = cache[b]?.createdAt ?? '';
        return ta.localeCompare(tb);
      });
      for (let i = 0; i < sorted.length - MAX_CACHED_COURSES; i++) {
        delete cache[sorted[i]];
      }
    }
    storage.setItem(COURSE_CACHE_KEY, JSON.stringify(cache));
  } catch {
    logger.warn('Course cache full, evicting oldest');
  }
}

function generateCourseId(text: string): string {
  const hash = text.slice(0, 200).toLowerCase().replace(/[^a-z0-9]/g, '');
  return `course_${hash.slice(0, 40)}_${Date.now().toString(36)}`;
}

// ─── Sentence Splitting ───

function splitSentences(text: string): string[] {
  // Split on sentence-ending punctuation followed by space or end-of-string
  const parts = text
    .replace(/([.!?])\s+/g, '$1|||')
    .split('|||')
    .map(s => s.trim())
    .filter(s => s.length > 3);
  return parts.length > 0 ? parts : [text.trim()];
}

// ─── Sentence Translation (word-level gloss) ───

const EN_CN_DICT: Record<string, string> = {
  // Common verbs
  'please': '请', 'be': '是', 'is': '是', 'are': '是', 'was': '是(过去)', 'were': '是(过去)',
  'has': '已', 'have': '已', 'had': '已', 'do': '做', 'does': '做', 'did': '做了',
  'will': '将', 'would': '会', 'shall': '应', 'should': '应该', 'must': '必须',
  'can': '可以', 'could': '可以', 'may': '可能', 'might': '可能',
  'informed': '通知', 'inform': '通知', 'check': '检查', 'ensure': '确保',
  'aware': '了解', 'assigned': '分配的', 'finalized': '已确定',
  'transferred': '已切换', 'transfer': '切换', 'checked': '已检查',
  'confirmed': '已确认', 'confirm': '确认', 'notified': '已通知', 'notify': '通知',
  'created': '已创建', 'create': '创建', 'completed': '已完成', 'complete': '完成',
  'reviewed': '已审查', 'review': '审查', 'approved': '已批准', 'approve': '批准',
  'scheduled': '已安排', 'schedule': '安排', 'deployed': '已部署', 'deploy': '部署',
  'found': '发现', 'find': '发现', 'revealed': '显示', 'reveal': '显示',
  'running': '运行中', 'run': '运行', 'showed': '显示', 'show': '显示',
  'exceeded': '超出', 'exceed': '超出', 'replaced': '已更换', 'replace': '更换',
  'submitted': '已提交', 'submit': '提交', 'maintained': '维持', 'maintain': '维持',
  'working': '工作中', 'waiting': '等待中',
  'signed': '已签署', 'sign': '签署',
  // Common nouns
  'team': '团队', 'work': '工作', 'month': '月',
  'shifts': '班次', 'shift': '班次', 'text': '文本', 'time': '时间',
  'day': '天', 'night': '夜间', 'mode': '模式', 'system': '系统',
  'alarm': '告警', 'alarms': '告警', 'alert': '警报', 'fault': '故障',
  'battery': '电池', 'equipment': '设备', 'panel': '面板',
  'maintenance': '维护', 'order': '工单',
  'cooling': '冷却', 'temperature': '温度', 'humidity': '湿度',
  'inspection': '巡检', 'condition': '状态', 'conditions': '状态',
  'unit': '机组', 'units': '机组', 'load': '负载', 'phase': '相',
  'phases': '相位', 'fire': '消防', 'suppression': '灭火',
  'detector': '探测器', 'status': '状态', 'dashboard': '仪表盘',
  'checklist': '检查清单', 'request': '请求', 'change': '变更',
  'procedure': '流程', 'manager': '经理', 'contractor': '承包商',
  'backup': '备份', 'power': '电源', 'configuration': '配置',
  'shutdown': '关机', 'vendor': '供应商', 'parts': '备件',
  'replacement': '更换件', 'impact': '影响', 'server': '服务器',
  'operations': '运维', 'operation': '运行',
  'hall': '机房', 'data': '数据', 'bypass': '旁路',
  'discrepancies': '差异', 'discrepancy': '差异',
  'adjustment': '调整', 'cooperation': '配合',
  'regards': '此致', 'building': '楼宇',
  // Adjectives / adverbs
  'normal': '正常', 'critical': '严重', 'active': '活动',
  'cleared': '已恢复', 'resolved': '已解决', 'available': '可用',
  'acceptable': '可接受', 'balanced': '平衡',
  'green': '绿色(正常)', 'routine': '例行', 'possible': '可能',
  'soon': '尽快', 'as': '如',
  // Prepositions / connectors
  'the': '', 'a': '一个', 'an': '一个', 'of': '的', 'for': '为',
  'to': '至', 'in': '在', 'on': '在', 'at': '在', 'by': '由',
  'with': '与', 'from': '从', 'and': '和', 'or': '或', 'but': '但',
  'that': '那个', 'this': '这个', 'if': '如果', 'when': '当',
  'all': '所有', 'any': '任何', 'no': '无', 'not': '不',
  'there': '那里', 'it': '它', 'its': '它的',
  'kindly': '请', 'your': '你的', 'our': '我们的',
  'respective': '各自的', 'my': '我的', 'me': '我',
  'dear': '尊敬的', 'thank': '感谢', 'you': '你',
  'best': '最好的',
  // DC-specific
  'ups': 'UPS(不间断电源)', 'bms': 'BMS(楼宇管理系统)',
  'crac': 'CRAC(精密空调)', 'pdu': 'PDU(配电单元)',
  'sts': 'STS(静态转换开关)', 'hvac': 'HVAC(暖通空调)',
  'sla': 'SLA(服务等级协议)',
};

function translateSentence(en: string): string {
  const words = en.replace(/[.,;:!?()[\]{}<>]+$/g, '').split(/\s+/);
  const translated = words
    .map(w => {
      const lower = w.toLowerCase();
      if (EN_CN_DICT[lower] !== undefined) return EN_CN_DICT[lower];
      // Try without trailing 's' for plurals
      if (lower.endsWith('s') && EN_CN_DICT[lower.slice(0, -1)] !== undefined) return EN_CN_DICT[lower.slice(0, -1)];
      // Try without 'ed' for past tense
      if (lower.endsWith('ed') && EN_CN_DICT[lower.slice(0, -2)] !== undefined) return EN_CN_DICT[lower.slice(0, -2)];
      // Try without 'ing' for gerund
      if (lower.endsWith('ing') && EN_CN_DICT[lower.slice(0, -3)] !== undefined) return EN_CN_DICT[lower.slice(0, -3)];
      return null;
    })
    .filter(Boolean);
  if (translated.length === 0) return '(请使用 AI 助手获取翻译)';
  return translated.join(' ');
}

// ─── Grammar Detection ───

function detectGrammarPatterns(words: IAnalyzedWord[], text: string): IGrammarNote[] {
  const notes: IGrammarNote[] = [];
  const lower = text.toLowerCase();

  // Passive voice detection
  if (/\b(was|were|is|are|been|being)\s+\w+ed\b/i.test(text) || /\b(was|were|is|are)\s+transferred\b/i.test(text)) {
    notes.push({
      rule: 'Passive Voice',
      explanation: '被动语态用于强调动作的承受者而非执行者。在运维报告中常用被动语态描述设备状态变化。',
      examples: ['The UPS was transferred to bypass mode.', 'The alarm was cleared at 14:30.'],
    });
  }

  // Present perfect
  if (/\b(has|have)\s+(been|completed|confirmed|checked|notified|transferred)\b/i.test(text)) {
    notes.push({
      rule: 'Present Perfect Tense',
      explanation: '现在完成时表示过去发生但与现在有关的动作。交接报告中常用此 tense 描述已完成的操作。',
      examples: ['The maintenance team has been notified.', 'The handover checklist has been completed.'],
    });
  }

  // Past simple (common in incident reports)
  const pastVerbs = words.filter(w => w.pos === 'verb' && (w.word.endsWith('ed') || ['ran', 'went', 'took', 'made', 'came', 'saw', 'got', 'gave', 'found', 'told'].includes(w.word)));
  if (pastVerbs.length >= 2) {
    notes.push({
      rule: 'Past Simple for Incident Reports',
      explanation: '过去式用于描述已完成的动作。故障报告和交接记录中主要使用过去式。',
      examples: ['The operator checked the BMS panel.', 'The UPS tripped at 03:15 AM.'],
    });
  }

  // Conditional / modal verbs
  if (/\b(should|must|need to|shall|will)\b/i.test(text)) {
    notes.push({
      rule: 'Modal Verbs for Procedures',
      explanation: '情态动词用于表达操作规程中的义务、建议和必要性。SOP/MOP 文档中大量使用。',
      examples: ['The contractor must complete the PTW before starting work.', 'You should verify the alarm status.'],
    });
  }

  // Technical abbreviations
  const abbrevs = words.filter(w => /^[A-Z]{2,}$/.test(w.word));
  if (abbrevs.length >= 2) {
    notes.push({
      rule: 'Technical Abbreviations',
      explanation: '数据中心运维中大量使用缩写。掌握常见缩写的完整含义是专业沟通的基础。',
      examples: abbrevs.slice(0, 3).map(a => `${a.word} = ${a.chinese}`).concat(['BMS = Building Management System (楼宇管理系统)']),
    });
  }

  return notes;
}

// ─── English Thinking Tips ───

function generateThinkingTips(words: IAnalyzedWord[], text: string): IEnglishThinkingTip[] {
  const tips: IEnglishThinkingTip[] = [];

  // Word order in technical context
  tips.push({
    title: 'Technical Subject-Verb-Object',
    description: '英语技术文档遵循严格的 SVO (主语-动词-宾语) 结构。设备名称通常作主语，操作动词紧跟其后。',
    example: 'The UPS (S) transferred (V) to bypass mode (O).',
  });

  // Time expressions
  if (/\b\d{1,2}:\d{2}\b/.test(text) || /\b(at|during|before|after)\b/i.test(text)) {
    tips.push({
      title: 'Time Expressions in Reports',
      description: '运维报告中时间表达放在句首或句尾。24小时制时间用 at + HH:MM 格式。',
      example: 'At 03:15, the UPS tripped. / The alarm was cleared at 14:30.',
    });
  }

  // Severity language
  if (/\b(critical|warning|severe|urgent|immediate)\b/i.test(text)) {
    tips.push({
      title: 'Severity & Urgency Language',
      description: '英语中用不同词汇表达严重程度。Critical > Severe > Warning > Info，对应告警等级。',
      example: 'A critical alarm requires immediate action. / The warning was noted in the log.',
    });
  }

  return tips;
}

// ─── Exercise Generation ───

function generateExercises(words: IAnalyzedWord[], phrases: Array<{ phrase: string; chinese: string }>): IPracticeQuestion[] {
  const exercises: IPracticeQuestion[] = [];

  // Fill-in-the-blank from vocabulary
  const vocWords = words.filter(w => w.source === 'professional' || w.source === 'ai').slice(0, 4);
  for (const w of vocWords) {
    if (w.examples && w.examples.length > 0) {
      const sentence = w.examples[0];
      const blank = sentence.replace(new RegExp(`\\b${w.word}\\b`, 'i'), '______');
      if (blank !== sentence) {
        exercises.push({
          type: 'fill_blank',
          question: blank,
          answer: w.word,
          hint: w.chinese,
        });
      }
    }
  }

  // Translation exercises
  const transWords = words.slice(0, 3);
  for (const w of transWords) {
    exercises.push({
      type: 'translate',
      question: `Translate to English: ${w.chinese}`,
      answer: w.word,
      hint: w.pos,
    });
  }

  // Match exercises from phrases
  if (phrases.length >= 2) {
    const matchPhrases = phrases.slice(0, 3);
    exercises.push({
      type: 'match',
      question: `Match the phrases: ${matchPhrases.map(p => p.phrase).join(', ')}`,
      answer: matchPhrases.map(p => `${p.phrase} = ${p.chinese}`).join('; '),
      options: matchPhrases.map(p => p.chinese),
    });
  }

  // Multiple choice
  const choiceWords = words.filter(w => w.chinese).slice(0, 4);
  if (choiceWords.length >= 4) {
    const correct = choiceWords[0];
    const distractors = choiceWords.slice(1, 4).map(w => w.chinese);
    exercises.push({
      type: 'choice',
      question: `What does "${correct.word}" mean?`,
      answer: correct.chinese,
      options: [correct.chinese, ...distractors],
    });
  }

  return exercises;
}

// ─── Main Generator ───

export function generateCourse(
  analysis: IAnalysisResult,
  title?: string,
): ICourse {
  const cache = loadCourseCache();
  const cacheKey = 'v2_' + analysis.originalText.slice(0, 200).toLowerCase().trim();

  // Check cache
  const cachedKey = Object.keys(cache).find(k => k.startsWith(cacheKey.slice(0, 40)));
  if (cachedKey) {
    logger.info(`[courseGenerator] Cache hit for course`);
    return cache[cachedKey];
  }

  // Generate new course — use originalText for sentence splitting (has punctuation)
  const sentences = splitSentences(analysis.originalText).map((en, idx) => ({
    en: en.replace(/\s+/g, ' ').trim(),
    cn: translateSentence(en),
    index: idx,
  }));

  const phraseList = analysis.phrases.map(p => ({
    phrase: p.phrase,
    chinese: p.chinese,
  }));

  const grammarNotes = detectGrammarPatterns(analysis.words, analysis.cleanedText);
  const thinkingTips = generateThinkingTips(analysis.words, analysis.cleanedText);
  const exercises = generateExercises(analysis.words, phraseList);

  const course: ICourse = {
    id: generateCourseId(analysis.originalText),
    title: title ?? `Lesson: ${analysis.cleanedText.slice(0, 50)}...`,
    originalText: analysis.originalText,
    createdAt: new Date().toISOString(),
    sentences,
    vocabulary: analysis.words,
    phrases: phraseList,
    grammarNotes,
    thinkingTips,
    exercises,
    stats: {
      totalWords: analysis.totalWords,
      uniqueWords: analysis.uniqueWords,
      newWords: analysis.aiCount,
      phrases: phraseList.length,
    },
  };

  // Cache it
  cache[cacheKey.slice(0, 60)] = course;
  saveCourseCache(cache);

  return course;
}

export function getSavedCourses(): ICourse[] {
  const cache = loadCourseCache();
  return Object.values(cache).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export function clearCourseCache(): void {
  try {
    storage.removeItem(COURSE_CACHE_KEY);
  } catch {
    // ignore
  }
}

/**
 * Dictionary Lookup Skill
 * Local-first lookup with priority: professional glossary → basic dictionary → lemmatized form → phrase match
 * Uses storage cache to avoid repeated lookups
 * Returns null if not found (caller handles AI fallback)
 */

import { storage } from '@/lib/storage';
import { logger } from '@/lib/app-logger';
import { DC_TERMS_DICTIONARY, type IDC_DICTEntry } from '@/data/dcTermsDictionary';

// ─── Cache Configuration ───
const CACHE_PREFIX = 'skill:dictionary:';
const CACHE_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

// ─── Fetch with timeout helper ───
function fetchWithTimeout(url: string, timeoutMs = 3000, init?: RequestInit): Promise<Response> {
  return Promise.race([
    fetch(url, init),
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error('Fetch timeout')), timeoutMs)
    ),
  ]);
}

// ─── Dictionary Entry Interface ───
export interface DictionaryEntry {
  word: string;
  lemma: string;
  chinese: string;
  englishDef: string;
  pos: string;
  ipa?: string;
  source: 'professional' | 'basic' | 'phrase' | 'cache' | 'db';
  dataCenterMeaning?: string;
  phrases?: string[];
  example?: string;
  domain?: string;
}

// ─── Basic Dictionary (Common English Words) ───
interface BasicDictEntry {
  cn: string;
  en: string;
  pos: string;
  ipa?: string;
}

const BASIC_DICT: Record<string, BasicDictEntry> = {
  the: { cn: '这/那', en: 'definite article', pos: 'art', ipa: '/ðə/' },
  a: { cn: '一个', en: 'indefinite article', pos: 'art', ipa: '/ə/' },
  an: { cn: '一个', en: 'indefinite article', pos: 'art', ipa: '/ən/' },
  is: { cn: '是', en: 'third person singular of be', pos: 'v', ipa: '/ɪz/' },
  are: { cn: '是', en: 'plural of be', pos: 'v', ipa: '/ɑːr/' },
  was: { cn: '是(过去)', en: 'past tense of be', pos: 'v', ipa: '/wɒz/' },
  were: { cn: '是(过去)', en: 'past tense of be', pos: 'v', ipa: '/wɜːr/' },
  be: { cn: '是/存在', en: 'to exist or occur', pos: 'v', ipa: '/biː/' },
  been: { cn: '是(过去分词)', en: 'past participle of be', pos: 'v', ipa: '/biːn/' },
  being: { cn: '存在/生物', en: 'existence or a living thing', pos: 'n', ipa: '/ˈbiːɪŋ/' },
  have: { cn: '有', en: 'to possess or own', pos: 'v', ipa: '/hæv/' },
  has: { cn: '有', en: 'third person singular of have', pos: 'v', ipa: '/hæz/' },
  had: { cn: '有(过去)', en: 'past tense of have', pos: 'v', ipa: '/hæd/' },
  do: { cn: '做', en: 'to perform or execute', pos: 'v', ipa: '/duː/' },
  does: { cn: '做', en: 'third person singular of do', pos: 'v', ipa: '/dʌz/' },
  did: { cn: '做(过去)', en: 'past tense of do', pos: 'v', ipa: '/dɪd/' },
  will: { cn: '将', en: 'future auxiliary', pos: 'modal', ipa: '/wɪl/' },
  would: { cn: '会/将', en: 'conditional auxiliary', pos: 'modal', ipa: '/wʊd/' },
  can: { cn: '能', en: 'to be able to', pos: 'modal', ipa: '/kæn/' },
  could: { cn: '能够', en: 'past of can or conditional', pos: 'modal', ipa: '/kʊd/' },
  should: { cn: '应该', en: 'ought to', pos: 'modal', ipa: '/ʃʊd/' },
  must: { cn: '必须', en: 'to be obliged to', pos: 'modal', ipa: '/mʌst/' },
  shall: { cn: '将/应', en: 'future auxiliary or obligation', pos: 'modal', ipa: '/ʃæl/' },
  may: { cn: '可能/可以', en: 'to be allowed or possible', pos: 'modal', ipa: '/meɪ/' },
  might: { cn: '可能', en: 'past of may or less certain', pos: 'modal', ipa: '/maɪt/' },
  and: { cn: '和', en: 'conjunction', pos: 'conj', ipa: '/ænd/' },
  but: { cn: '但是', en: 'conjunction expressing contrast', pos: 'conj', ipa: '/bʌt/' },
  or: { cn: '或', en: 'conjunction expressing choice', pos: 'conj', ipa: '/ɔːr/' },
  not: { cn: '不', en: 'negation', pos: 'adv', ipa: '/nɒt/' },
  no: { cn: '不/没有', en: 'negative response', pos: 'adv', ipa: '/nəʊ/' },
  yes: { cn: '是', en: 'affirmative response', pos: 'adv', ipa: '/jes/' },
  if: { cn: '如果', en: 'conditional conjunction', pos: 'conj', ipa: '/ɪf/' },
  then: { cn: '然后', en: 'at that time', pos: 'adv', ipa: '/ðen/' },
  than: { cn: '比', en: 'comparative conjunction', pos: 'conj', ipa: '/ðæn/' },
  so: { cn: '所以/这样', en: 'therefore or to such extent', pos: 'adv', ipa: '/səʊ/' },
  as: { cn: '作为/像', en: 'in the role of or like', pos: 'conj', ipa: '/æz/' },
  at: { cn: '在', en: 'preposition of place', pos: 'prep', ipa: '/æt/' },
  by: { cn: '通过/被', en: 'preposition of means or agent', pos: 'prep', ipa: '/baɪ/' },
  for: { cn: '为了', en: 'preposition of purpose', pos: 'prep', ipa: '/fɔːr/' },
  from: { cn: '从', en: 'preposition of origin', pos: 'prep', ipa: '/frɒm/' },
  in: { cn: '在...里', en: 'preposition of location', pos: 'prep', ipa: '/ɪn/' },
  into: { cn: '进入', en: 'preposition of movement', pos: 'prep', ipa: '/ˈɪntuː/' },
  of: { cn: '的', en: 'preposition of relationship', pos: 'prep', ipa: '/ɒv/' },
  on: { cn: '在...上', en: 'preposition of surface', pos: 'prep', ipa: '/ɒn/' },
  to: { cn: '到/向', en: 'preposition of direction', pos: 'prep', ipa: '/tuː/' },
  with: { cn: '和/用', en: 'preposition of accompaniment', pos: 'prep', ipa: '/wɪð/' },
  without: { cn: '没有', en: 'preposition of absence', pos: 'prep', ipa: '/wɪˈðaʊt/' },
  about: { cn: '关于', en: 'concerning or regarding', pos: 'prep', ipa: '/əˈbaʊt/' },
  after: { cn: '在...之后', en: 'following in time', pos: 'prep', ipa: '/ˈɑːftər/' },
  before: { cn: '在...之前', en: 'preceding in time', pos: 'prep', ipa: '/bɪˈfɔːr/' },
  during: { cn: '在...期间', en: 'throughout the course of', pos: 'prep', ipa: '/ˈdjʊərɪŋ/' },
  through: { cn: '通过', en: 'from one end to the other', pos: 'prep', ipa: '/θruː/' },
  under: { cn: '在...下面', en: 'below or beneath', pos: 'prep', ipa: '/ˈʌndər/' },
  over: { cn: '超过/在...上', en: 'above or across', pos: 'prep', ipa: '/ˈəʊvər/' },
  between: { cn: '在...之间', en: 'in the space separating', pos: 'prep', ipa: '/bɪˈtwiːn/' },
  this: { cn: '这个', en: 'demonstrative pronoun', pos: 'pron', ipa: '/ðɪs/' },
  that: { cn: '那个', en: 'demonstrative pronoun', pos: 'pron', ipa: '/ðæt/' },
  these: { cn: '这些', en: 'plural of this', pos: 'pron', ipa: '/ðiːz/' },
  those: { cn: '那些', en: 'plural of that', pos: 'pron', ipa: '/ðəʊz/' },
  here: { cn: '这里', en: 'in this place', pos: 'adv', ipa: '/hɪər/' },
  there: { cn: '那里', en: 'in that place', pos: 'adv', ipa: '/ðeər/' },
  where: { cn: '哪里', en: 'in what place', pos: 'adv', ipa: '/weər/' },
  when: { cn: '什么时候', en: 'at what time', pos: 'adv', ipa: '/wen/' },
  why: { cn: '为什么', en: 'for what reason', pos: 'adv', ipa: '/waɪ/' },
  how: { cn: '如何', en: 'in what way', pos: 'adv', ipa: '/haʊ/' },
  what: { cn: '什么', en: 'interrogative pronoun', pos: 'pron', ipa: '/wɒt/' },
  which: { cn: '哪个', en: 'interrogative pronoun', pos: 'pron', ipa: '/wɪtʃ/' },
  who: { cn: '谁', en: 'interrogative pronoun', pos: 'pron', ipa: '/huː/' },
  whom: { cn: '谁(宾格)', en: 'objective case of who', pos: 'pron', ipa: '/huːm/' },
  whose: { cn: '谁的', en: 'possessive of who', pos: 'pron', ipa: '/huːz/' },
  all: { cn: '所有', en: 'every one', pos: 'det', ipa: '/ɔːl/' },
  some: { cn: '一些', en: 'an unspecified amount', pos: 'det', ipa: '/sʌm/' },
  any: { cn: '任何', en: 'one or more without limit', pos: 'det', ipa: '/ˈeni/' },
  many: { cn: '许多', en: 'a large number', pos: 'det', ipa: '/ˈmeni/' },
  much: { cn: '许多', en: 'a large amount', pos: 'det', ipa: '/mʌtʃ/' },
  more: { cn: '更多', en: 'greater in amount', pos: 'det', ipa: '/mɔːr/' },
  most: { cn: '最多', en: 'greatest in amount', pos: 'det', ipa: '/məʊst/' },
  few: { cn: '几个', en: 'a small number', pos: 'det', ipa: '/fjuː/' },
  less: { cn: '更少', en: 'smaller in amount', pos: 'det', ipa: '/les/' },
  least: { cn: '最少', en: 'smallest in amount', pos: 'det', ipa: '/liːst/' },
  other: { cn: '其他', en: 'different from the one mentioned', pos: 'det', ipa: '/ˈʌðər/' },
  another: { cn: '另一个', en: 'one more', pos: 'det', ipa: '/əˈnʌðər/' },
  each: { cn: '每个', en: 'every one individually', pos: 'det', ipa: '/iːtʃ/' },
  every: { cn: '每个', en: 'all without exception', pos: 'det', ipa: '/ˈevri/' },
  both: { cn: '两个都', en: 'the two', pos: 'det', ipa: '/bəʊθ/' },
  either: { cn: '任一', en: 'one or the other', pos: 'det', ipa: '/ˈaɪðər/' },
  neither: { cn: '两者都不', en: 'not one nor the other', pos: 'det', ipa: '/ˈnaɪðər/' },
  very: { cn: '非常', en: 'to a high degree', pos: 'adv', ipa: '/ˈveri/' },
  too: { cn: '太/也', en: 'excessively or also', pos: 'adv', ipa: '/tuː/' },
  also: { cn: '也', en: 'in addition', pos: 'adv', ipa: '/ˈɔːlsəʊ/' },
  just: { cn: '刚刚/只是', en: 'recently or only', pos: 'adv', ipa: '/dʒʌst/' },
  only: { cn: '仅仅', en: 'no more than', pos: 'adv', ipa: '/ˈəʊnli/' },
  still: { cn: '仍然', en: 'continuing to happen', pos: 'adv', ipa: '/stɪl/' },
  already: { cn: '已经', en: 'before now', pos: 'adv', ipa: '/ɔːlˈredi/' },
  yet: { cn: '还/尚未', en: 'up until now', pos: 'adv', ipa: '/jet/' },
  now: { cn: '现在', en: 'at the present time', pos: 'adv', ipa: '/naʊ/' },
  always: { cn: '总是', en: 'at all times', pos: 'adv', ipa: '/ˈɔːlweɪz/' },
  never: { cn: '从不', en: 'at no time', pos: 'adv', ipa: '/ˈnevər/' },
  often: { cn: '经常', en: 'frequently', pos: 'adv', ipa: '/ˈɒfən/' },
  sometimes: { cn: '有时', en: 'occasionally', pos: 'adv', ipa: '/ˈsʌmtaɪmz/' },
  usually: { cn: '通常', en: 'normally', pos: 'adv', ipa: '/ˈjuːʒuəli/' },
  again: { cn: '再次', en: 'once more', pos: 'adv', ipa: '/əˈɡen/' },
  back: { cn: '回/后面', en: 'to or toward the rear', pos: 'adv', ipa: '/bæk/' },
  up: { cn: '上', en: 'to a higher position', pos: 'adv', ipa: '/ʌp/' },
  down: { cn: '下', en: 'to a lower position', pos: 'adv', ipa: '/daʊn/' },
  out: { cn: '出', en: 'away from the inside', pos: 'adv', ipa: '/aʊt/' },
  off: { cn: '离开/关', en: 'away from or not operating', pos: 'adv', ipa: '/ɒf/' },
  away: { cn: '离开', en: 'at a distance', pos: 'adv', ipa: '/əˈweɪ/' },
  because: { cn: '因为', en: 'for the reason that', pos: 'conj', ipa: '/bɪˈkɒz/' },
  while: { cn: '当...时', en: 'during the time that', pos: 'conj', ipa: '/waɪl/' },
  since: { cn: '自从', en: 'from a time in the past', pos: 'conj', ipa: '/sɪns/' },
  until: { cn: '直到', en: 'up to the time of', pos: 'conj', ipa: '/ʌnˈtɪl/' },
  although: { cn: '虽然', en: 'in spite of the fact that', pos: 'conj', ipa: '/ɔːlˈðəʊ/' },
  though: { cn: '虽然', en: 'despite the fact that', pos: 'conj', ipa: '/ðəʊ/' },
  however: { cn: '然而', en: 'nevertheless', pos: 'adv', ipa: '/haʊˈevər/' },
  therefore: { cn: '因此', en: 'for that reason', pos: 'adv', ipa: '/ˈðeəfɔːr/' },
  thus: { cn: '因此', en: 'as a result', pos: 'adv', ipa: '/ðʌs/' },

  // ─── Common Verbs ───
  go: { cn: '去', en: 'to move or travel', pos: 'v', ipa: '/ɡəʊ/' },
  went: { cn: '去(过去)', en: 'past tense of go', pos: 'v', ipa: '/went/' },
  gone: { cn: '去(过去分词)', en: 'past participle of go', pos: 'v', ipa: '/ɡɒn/' },
  come: { cn: '来', en: 'to move toward', pos: 'v', ipa: '/kʌm/' },
  came: { cn: '来(过去)', en: 'past tense of come', pos: 'v', ipa: '/keɪm/' },
  get: { cn: '得到/变得', en: 'to obtain or become', pos: 'v', ipa: '/ɡet/' },
  got: { cn: '得到(过去)', en: 'past tense of get', pos: 'v', ipa: '/ɡɒt/' },
  make: { cn: '制造/使', en: 'to create or cause', pos: 'v', ipa: '/meɪk/' },
  take: { cn: '拿/带', en: 'to carry or bring', pos: 'v', ipa: '/teɪk/' },
  took: { cn: '拿(过去)', en: 'past tense of take', pos: 'v', ipa: '/tʊk/' },
  give: { cn: '给', en: 'to transfer to someone', pos: 'v', ipa: '/ɡɪv/' },
  said: { cn: '说(过去)', en: 'past tense of say', pos: 'v', ipa: '/sed/' },
  say: { cn: '说', en: 'to utter words', pos: 'v', ipa: '/seɪ/' },
  tell: { cn: '告诉', en: 'to inform someone', pos: 'v', ipa: '/tel/' },
  told: { cn: '告诉(过去)', en: 'past tense of tell', pos: 'v', ipa: '/təʊld/' },
  know: { cn: '知道', en: 'to have knowledge of', pos: 'v', ipa: '/nəʊ/' },
  knew: { cn: '知道(过去)', en: 'past tense of know', pos: 'v', ipa: '/njuː/' },
  think: { cn: '想/认为', en: 'to use the mind', pos: 'v', ipa: '/θɪŋk/' },
  see: { cn: '看见', en: 'to perceive with eyes', pos: 'v', ipa: '/siː/' },
  saw: { cn: '看见(过去)', en: 'past tense of see', pos: 'v', ipa: '/sɔː/' },
  look: { cn: '看', en: 'to direct gaze', pos: 'v', ipa: '/lʊk/' },
  find: { cn: '找到', en: 'to discover', pos: 'v', ipa: '/faɪnd/' },
  want: { cn: '想要', en: 'to desire', pos: 'v', ipa: '/wɒnt/' },
  need: { cn: '需要', en: 'to require', pos: 'v', ipa: '/niːd/' },
  use: { cn: '使用', en: 'to employ for a purpose', pos: 'v', ipa: '/juːz/' },
  try: { cn: '尝试', en: 'to attempt', pos: 'v', ipa: '/traɪ/' },
  ask: { cn: '问/请求', en: 'to inquire or request', pos: 'v', ipa: '/ɑːsk/' },
  leave: { cn: '离开/留下', en: 'to depart or remain', pos: 'v', ipa: '/liːv/' },
  put: { cn: '放', en: 'to place in position', pos: 'v', ipa: '/pʊt/' },
  mean: { cn: '意思是', en: 'to intend or signify', pos: 'v', ipa: '/miːn/' },
  keep: { cn: '保持', en: 'to continue or retain', pos: 'v', ipa: '/kiːp/' },
  let: { cn: '让', en: 'to allow', pos: 'v', ipa: '/let/' },
  begin: { cn: '开始', en: 'to start', pos: 'v', ipa: '/bɪˈɡɪn/' },
  seem: { cn: '似乎', en: 'to appear to be', pos: 'v', ipa: '/siːm/' },
  help: { cn: '帮助', en: 'to assist', pos: 'v', ipa: '/help/' },
  talk: { cn: '谈话', en: 'to speak or converse', pos: 'v', ipa: '/tɔːk/' },
  turn: { cn: '转/变成', en: 'to rotate or become', pos: 'v', ipa: '/tɜːn/' },
  start: { cn: '开始', en: 'to begin', pos: 'v', ipa: '/stɑːt/' },
  show: { cn: '展示', en: 'to display', pos: 'v', ipa: '/ʃəʊ/' },
  hear: { cn: '听到', en: 'to perceive sound', pos: 'v', ipa: '/hɪər/' },
  play: { cn: '玩/演奏', en: 'to engage in activity', pos: 'v', ipa: '/pleɪ/' },
  run: { cn: '跑/运行', en: 'to move quickly', pos: 'v', ipa: '/rʌn/' },
  move: { cn: '移动', en: 'to change position', pos: 'v', ipa: '/muːv/' },
  like: { cn: '喜欢', en: 'to enjoy or prefer', pos: 'v', ipa: '/laɪk/' },
  live: { cn: '生活/居住', en: 'to exist or reside', pos: 'v', ipa: '/lɪv/' },
  believe: { cn: '相信', en: 'to accept as true', pos: 'v', ipa: '/bɪˈliːv/' },
  hold: { cn: '持有/举行', en: 'to grasp or organize', pos: 'v', ipa: '/həʊld/' },
  bring: { cn: '带来', en: 'to carry toward', pos: 'v', ipa: '/brɪŋ/' },
  happen: { cn: '发生', en: 'to take place', pos: 'v', ipa: '/ˈhæpən/' },
  write: { cn: '写', en: 'to put words on paper', pos: 'v', ipa: '/raɪt/' },
  provide: { cn: '提供', en: 'to supply', pos: 'v', ipa: '/prəˈvaɪd/' },
  sit: { cn: '坐', en: 'to be seated', pos: 'v', ipa: '/sɪt/' },
  stand: { cn: '站/忍受', en: 'to be upright', pos: 'v', ipa: '/stænd/' },
  lose: { cn: '丢失/输', en: 'to fail to keep', pos: 'v', ipa: '/luːz/' },
  pay: { cn: '支付', en: 'to give money for', pos: 'v', ipa: '/peɪ/' },
  meet: { cn: '见面/满足', en: 'to encounter', pos: 'v', ipa: '/miːt/' },
  include: { cn: '包括', en: 'to contain as part', pos: 'v', ipa: '/ɪnˈkluːd/' },
  continue: { cn: '继续', en: 'to keep going', pos: 'v', ipa: '/kənˈtɪnjuː/' },
  set: { cn: '设置/放', en: 'to put in place', pos: 'v', ipa: '/set/' },
  learn: { cn: '学习', en: 'to gain knowledge', pos: 'v', ipa: '/lɜːn/' },
  change: { cn: '改变', en: 'to make different', pos: 'v', ipa: '/tʃeɪndʒ/' },
  lead: { cn: '领导/导致', en: 'to guide or result in', pos: 'v', ipa: '/liːd/' },
  understand: { cn: '理解', en: 'to comprehend', pos: 'v', ipa: '/ˌʌndəˈstænd/' },
  watch: { cn: '看/注视', en: 'to observe', pos: 'v', ipa: '/wɒtʃ/' },
  follow: { cn: '跟随', en: 'to go after', pos: 'v', ipa: '/ˈfɒləʊ/' },
  stop: { cn: '停止', en: 'to cease', pos: 'v', ipa: '/stɒp/' },
  create: { cn: '创造', en: 'to bring into existence', pos: 'v', ipa: '/kriˈeɪt/' },
  speak: { cn: '说/讲', en: 'to talk', pos: 'v', ipa: '/spiːk/' },
  read: { cn: '读', en: 'to look at and comprehend text', pos: 'v', ipa: '/riːd/' },
  allow: { cn: '允许', en: 'to permit', pos: 'v', ipa: '/əˈlaʊ/' },
  add: { cn: '添加', en: 'to put with something else', pos: 'v', ipa: '/æd/' },
  spend: { cn: '花费', en: 'to use money or time', pos: 'v', ipa: '/spend/' },
  grow: { cn: '成长/种植', en: 'to increase in size', pos: 'v', ipa: '/ɡrəʊ/' },
  open: { cn: '打开', en: 'to make accessible', pos: 'v', ipa: '/ˈəʊpən/' },
  walk: { cn: '走', en: 'to move on foot', pos: 'v', ipa: '/wɔːk/' },
  win: { cn: '赢', en: 'to achieve victory', pos: 'v', ipa: '/wɪn/' },
  offer: { cn: '提供/提议', en: 'to present for acceptance', pos: 'v', ipa: '/ˈɒfər/' },
  remember: { cn: '记住', en: 'to recall', pos: 'v', ipa: '/rɪˈmembər/' },
  love: { cn: '爱', en: 'to feel deep affection', pos: 'v', ipa: '/lʌv/' },
  consider: { cn: '考虑', en: 'to think about carefully', pos: 'v', ipa: '/kənˈsɪdər/' },
  appear: { cn: '出现', en: 'to come into view', pos: 'v', ipa: '/əˈpɪər/' },
  buy: { cn: '买', en: 'to purchase', pos: 'v', ipa: '/baɪ/' },
  wait: { cn: '等待', en: 'to stay until something happens', pos: 'v', ipa: '/weɪt/' },
  serve: { cn: '服务', en: 'to work for', pos: 'v', ipa: '/sɜːv/' },
  send: { cn: '发送', en: 'to dispatch', pos: 'v', ipa: '/send/' },
  expect: { cn: '期望', en: 'to anticipate', pos: 'v', ipa: '/ɪkˈspekt/' },
  build: { cn: '建造', en: 'to construct', pos: 'v', ipa: '/bɪld/' },
  stay: { cn: '停留', en: 'to remain', pos: 'v', ipa: '/steɪ/' },
  fall: { cn: '落下/跌倒', en: 'to drop down', pos: 'v', ipa: '/fɔːl/' },
  cut: { cn: '切/削减', en: 'to divide with sharp tool', pos: 'v', ipa: '/kʌt/' },
  reach: { cn: '到达/伸手', en: 'to arrive at or extend to', pos: 'v', ipa: '/riːtʃ/' },
  suggest: { cn: '建议', en: 'to propose', pos: 'v', ipa: '/səˈdʒest/' },
  raise: { cn: '提高/举起', en: 'to move upward', pos: 'v', ipa: '/reɪz/' },
  pass: { cn: '通过', en: 'to go past or through', pos: 'v', ipa: '/pɑːs/' },
  sell: { cn: '卖', en: 'to exchange for money', pos: 'v', ipa: '/sel/' },
  require: { cn: '要求/需要', en: 'to need or demand', pos: 'v', ipa: '/rɪˈkwaɪər/' },
  report: { cn: '报告', en: 'to give an account of', pos: 'v', ipa: '/rɪˈpɔːt/' },
  decide: { cn: '决定', en: 'to make a choice', pos: 'v', ipa: '/dɪˈsaɪd/' },
  pull: { cn: '拉', en: 'to draw toward oneself', pos: 'v', ipa: '/pʊl/' },
  develop: { cn: '发展/开发', en: 'to grow or create', pos: 'v', ipa: '/dɪˈveləp/' },
  carry: { cn: '搬运/携带', en: 'to transport', pos: 'v', ipa: '/ˈkæri/' },
  receive: { cn: '收到', en: 'to be given', pos: 'v', ipa: '/rɪˈsiːv/' },
  agree: { cn: '同意', en: 'to have the same opinion', pos: 'v', ipa: '/əˈɡriː/' },
  support: { cn: '支持', en: 'to hold up or back', pos: 'v', ipa: '/səˈpɔːt/' },
  produce: { cn: '生产/产生', en: 'to make or create', pos: 'v', ipa: '/prəˈdjuːs/' },
  eat: { cn: '吃', en: 'to consume food', pos: 'v', ipa: '/iːt/' },
  cover: { cn: '覆盖/涵盖', en: 'to place over or include', pos: 'v', ipa: '/ˈkʌvər/' },
  catch: { cn: '抓住', en: 'to capture', pos: 'v', ipa: '/kætʃ/' },
  draw: { cn: '画/拉', en: 'to make a picture or pull', pos: 'v', ipa: '/drɔː/' },
  choose: { cn: '选择', en: 'to select', pos: 'v', ipa: '/tʃuːz/' },
  explain: { cn: '解释', en: 'to make clear', pos: 'v', ipa: '/ɪkˈspleɪn/' },
  close: { cn: '关闭', en: 'to shut', pos: 'v', ipa: '/kləʊz/' },
  drive: { cn: '驾驶/驱动', en: 'to operate a vehicle', pos: 'v', ipa: '/draɪv/' },
  break: { cn: '打破/休息', en: 'to separate into pieces', pos: 'v', ipa: '/breɪk/' },
  return: { cn: '返回/归还', en: 'to come back', pos: 'v', ipa: '/rɪˈtɜːn/' },
  share: { cn: '分享', en: 'to give a portion', pos: 'v', ipa: '/ʃeər/' },
  wish: { cn: '希望', en: 'to desire', pos: 'v', ipa: '/wɪʃ/' },
  prepare: { cn: '准备', en: 'to make ready', pos: 'v', ipa: '/prɪˈpeər/' },
  increase: { cn: '增加', en: 'to make greater', pos: 'v', ipa: '/ɪnˈkriːs/' },
  join: { cn: '加入/连接', en: 'to connect or become part', pos: 'v', ipa: '/dʒɔɪn/' },
  apply: { cn: '应用/申请', en: 'to put to use or request', pos: 'v', ipa: '/əˈplaɪ/' },
  check: { cn: '检查', en: 'to examine', pos: 'v', ipa: '/tʃek/' },
  finish: { cn: '完成', en: 'to complete', pos: 'v', ipa: '/ˈfɪnɪʃ/' },
  handle: { cn: '处理/把手', en: 'to manage or deal with', pos: 'v', ipa: '/ˈhændl/' },
  reduce: { cn: '减少', en: 'to make less', pos: 'v', ipa: '/rɪˈdjuːs/' },
  manage: { cn: '管理', en: 'to control or organize', pos: 'v', ipa: '/ˈmænɪdʒ/' },
  accept: { cn: '接受', en: 'to receive willingly', pos: 'v', ipa: '/əkˈsept/' },
  replace: { cn: '替换', en: 'to take the place of', pos: 'v', ipa: '/rɪˈpleɪs/' },
  confirm: { cn: '确认', en: 'to establish as true', pos: 'v', ipa: '/kənˈfɜːm/' },
  remove: { cn: '移除', en: 'to take away', pos: 'v', ipa: '/rɪˈmuːv/' },
  ensure: { cn: '确保', en: 'to make certain', pos: 'v', ipa: '/ɪnˈʃʊər/' },
  complete: { cn: '完成', en: 'to finish entirely', pos: 'v', ipa: '/kəmˈpliːt/' },
  maintain: { cn: '维护/保持', en: 'to keep in good condition', pos: 'v', ipa: '/meɪnˈteɪn/' },
  operate: { cn: '操作/运行', en: 'to control or function', pos: 'v', ipa: '/ˈɒpəreɪt/' },
  perform: { cn: '执行/表演', en: 'to carry out', pos: 'v', ipa: '/pəˈfɔːm/' },
  indicate: { cn: '表明/指示', en: 'to point out or show', pos: 'v', ipa: '/ˈɪndɪkeɪt/' },
  enable: { cn: '使能够', en: 'to make possible', pos: 'v', ipa: '/ɪˈneɪbl/' },
  contain: { cn: '包含', en: 'to have within', pos: 'v', ipa: '/kənˈteɪn/' },
  identify: { cn: '识别', en: 'to recognize or establish', pos: 'v', ipa: '/aɪˈdentɪfaɪ/' },
  involve: { cn: '涉及', en: 'to include or affect', pos: 'v', ipa: '/ɪnˈvɒlv/' },
  implement: { cn: '实施', en: 'to put into effect', pos: 'v', ipa: '/ˈɪmplɪment/' },
  monitor: { cn: '监控', en: 'to observe and check', pos: 'v', ipa: '/ˈmɒnɪtər/' },
  request: { cn: '请求', en: 'to ask for', pos: 'v', ipa: '/rɪˈkwest/' },
  respond: { cn: '回应', en: 'to reply', pos: 'v', ipa: '/rɪˈspɒnd/' },
  resolve: { cn: '解决/决心', en: 'to solve or decide', pos: 'v', ipa: '/rɪˈzɒlv/' },
  restore: { cn: '恢复', en: 'to bring back', pos: 'v', ipa: '/rɪˈstɔːr/' },
  detect: { cn: '检测', en: 'to discover or notice', pos: 'v', ipa: '/dɪˈtekt/' },
  review: { cn: '审查/回顾', en: 'to examine again', pos: 'v', ipa: '/rɪˈvjuː/' },
  submit: { cn: '提交', en: 'to present for consideration', pos: 'v', ipa: '/səbˈmɪt/' },
  update: { cn: '更新', en: 'to make current', pos: 'v', ipa: '/ˌʌpˈdeɪt/' },
  verify: { cn: '验证', en: 'to confirm as true', pos: 'v', ipa: '/ˈverɪfaɪ/' },
  approve: { cn: '批准', en: 'to give consent', pos: 'v', ipa: '/əˈpruːv/' },
  assign: { cn: '分配', en: 'to allocate or give', pos: 'v', ipa: '/əˈsaɪn/' },
  schedule: { cn: '安排/日程', en: 'to plan for a certain time', pos: 'v', ipa: '/ˈʃedjuːl/' },
  transfer: { cn: '转移', en: 'to move from one place', pos: 'v', ipa: '/trænsˈfɜːr/' },
  attach: { cn: '附上/附加', en: 'to fasten or join', pos: 'v', ipa: '/əˈtætʃ/' },

  // ─── Common Nouns ───
  time: { cn: '时间', en: 'a period or point', pos: 'n', ipa: '/taɪm/' },
  year: { cn: '年', en: 'a period of 365 days', pos: 'n', ipa: '/jɪər/' },
  people: { cn: '人们', en: 'human beings in general', pos: 'n', ipa: '/ˈpiːpl/' },
  way: { cn: '方式/路', en: 'a method or path', pos: 'n', ipa: '/weɪ/' },
  day: { cn: '天/日', en: 'a 24-hour period', pos: 'n', ipa: '/deɪ/' },
  man: { cn: '男人', en: 'an adult male', pos: 'n', ipa: '/mæn/' },
  woman: { cn: '女人', en: 'an adult female', pos: 'n', ipa: '/ˈwʊmən/' },
  child: { cn: '孩子', en: 'a young person', pos: 'n', ipa: '/tʃaɪld/' },
  world: { cn: '世界', en: 'the earth and all on it', pos: 'n', ipa: '/wɜːld/' },
  life: { cn: '生活/生命', en: 'the condition of being alive', pos: 'n', ipa: '/laɪf/' },
  hand: { cn: '手', en: 'the end part of an arm', pos: 'n', ipa: '/hænd/' },
  part: { cn: '部分', en: 'a piece of something', pos: 'n', ipa: '/pɑːt/' },
  place: { cn: '地方', en: 'a location', pos: 'n', ipa: '/pleɪs/' },
  case: { cn: '情况/案例', en: 'an instance or situation', pos: 'n', ipa: '/keɪs/' },
  week: { cn: '周/星期', en: 'a period of 7 days', pos: 'n', ipa: '/wiːk/' },
  company: { cn: '公司', en: 'a business organization', pos: 'n', ipa: '/ˈkʌmpəni/' },
  system: { cn: '系统', en: 'a set of connected things', pos: 'n', ipa: '/ˈsɪstəm/' },
  program: { cn: '程序/计划', en: 'a plan or software', pos: 'n', ipa: '/ˈprəʊɡræm/' },
  question: { cn: '问题', en: 'a sentence seeking info', pos: 'n', ipa: '/ˈkwestʃən/' },
  number: { cn: '数字/号码', en: 'a mathematical value', pos: 'n', ipa: '/ˈnʌmbər/' },
  night: { cn: '夜晚', en: 'the dark hours', pos: 'n', ipa: '/naɪt/' },
  point: { cn: '点/观点', en: 'a specific spot or idea', pos: 'n', ipa: '/pɔɪnt/' },
  home: { cn: '家', en: 'the place where one lives', pos: 'n', ipa: '/həʊm/' },
  water: { cn: '水', en: 'a clear liquid', pos: 'n', ipa: '/ˈwɔːtər/' },
  room: { cn: '房间', en: 'a space within a building', pos: 'n', ipa: '/ruːm/' },
  area: { cn: '区域/面积', en: 'a region or extent', pos: 'n', ipa: '/ˈeəriə/' },
  money: { cn: '钱', en: 'a medium of exchange', pos: 'n', ipa: '/ˈmʌni/' },
  story: { cn: '故事', en: 'a narrative or account', pos: 'n', ipa: '/ˈstɔːri/' },
  fact: { cn: '事实', en: 'something known to be true', pos: 'n', ipa: '/fækt/' },
  month: { cn: '月', en: 'a period of about 30 days', pos: 'n', ipa: '/mʌnθ/' },
  right: { cn: '权利/正确的/右边', en: 'a moral claim or direction', pos: 'n', ipa: '/raɪt/' },
  study: { cn: '学习/研究', en: 'the act of learning', pos: 'n', ipa: '/ˈstʌdi/' },
  book: { cn: '书', en: 'a written work', pos: 'n', ipa: '/bʊk/' },
  job: { cn: '工作/职位', en: 'paid employment', pos: 'n', ipa: '/dʒɒb/' },
  word: { cn: '词/单词', en: 'a unit of language', pos: 'n', ipa: '/wɜːd/' },
  business: { cn: '商业/生意', en: 'commercial activity', pos: 'n', ipa: '/ˈbɪznɪs/' },
  issue: { cn: '问题/议题', en: 'an important topic', pos: 'n', ipa: '/ˈɪʃuː/' },
  side: { cn: '边/方面', en: 'a surface or position', pos: 'n', ipa: '/saɪd/' },
  kind: { cn: '种类/善良的', en: 'a type or sort', pos: 'n', ipa: '/kaɪnd/' },
  head: { cn: '头', en: 'the top part of the body', pos: 'n', ipa: '/hed/' },
  house: { cn: '房子', en: 'a building for living', pos: 'n', ipa: '/haʊs/' },
  service: { cn: '服务', en: 'work done for others', pos: 'n', ipa: '/ˈsɜːvɪs/' },
  friend: { cn: '朋友', en: 'a person one likes', pos: 'n', ipa: '/frend/' },
  power: { cn: '权力/力量/电力', en: 'ability to do or act', pos: 'n', ipa: '/ˈpaʊər/' },
  hour: { cn: '小时', en: '60 minutes', pos: 'n', ipa: '/aʊər/' },
  game: { cn: '游戏/比赛', en: 'an activity for fun', pos: 'n', ipa: '/ɡeɪm/' },
  line: { cn: '线/线路', en: 'a long thin mark', pos: 'n', ipa: '/laɪn/' },
  end: { cn: '结束/末端', en: 'the final part', pos: 'n', ipa: '/end/' },
  member: { cn: '成员', en: 'a person in a group', pos: 'n', ipa: '/ˈmembər/' },
  law: { cn: '法律', en: 'rules governing conduct', pos: 'n', ipa: '/lɔː/' },
  city: { cn: '城市', en: 'a large town', pos: 'n', ipa: '/ˈsɪti/' },
  community: { cn: '社区', en: 'a group in one area', pos: 'n', ipa: '/kəˈmjuːnɪti/' },
  name: { cn: '名字', en: 'a word for a person', pos: 'n', ipa: '/neɪm/' },
  team: { cn: '团队', en: 'a group working together', pos: 'n', ipa: '/tiːm/' },
  minute: { cn: '分钟', en: '60 seconds', pos: 'n', ipa: '/ˈmɪnɪt/' },
  idea: { cn: '想法/主意', en: 'a thought or suggestion', pos: 'n', ipa: '/aɪˈdɪə/' },
  body: { cn: '身体', en: 'the physical structure', pos: 'n', ipa: '/ˈbɒdi/' },
  information: { cn: '信息', en: 'facts or data', pos: 'n', ipa: '/ˌɪnfəˈmeɪʃən/' },
  result: { cn: '结果', en: 'an outcome', pos: 'n', ipa: '/rɪˈzʌlt/' },
  moment: { cn: '时刻/瞬间', en: 'a brief period', pos: 'n', ipa: '/ˈməʊmənt/' },
  group: { cn: '组/群', en: 'a number of things together', pos: 'n', ipa: '/ɡruːp/' },
  problem: { cn: '问题', en: 'a difficulty or issue', pos: 'n', ipa: '/ˈprɒbləm/' },
  reason: { cn: '原因/理由', en: 'a cause or explanation', pos: 'n', ipa: '/ˈriːzən/' },
  research: { cn: '研究', en: 'systematic investigation', pos: 'n', ipa: '/rɪˈsɜːtʃ/' },
  girl: { cn: '女孩', en: 'a young female', pos: 'n', ipa: '/ɡɜːl/' },
  food: { cn: '食物', en: 'things people eat', pos: 'n', ipa: '/fuːd/' },
  health: { cn: '健康', en: 'the state of being well', pos: 'n', ipa: '/helθ/' },
  music: { cn: '音乐', en: 'organized sounds', pos: 'n', ipa: '/ˈmjuːzɪk/' },
  person: { cn: '人', en: 'a human being', pos: 'n', ipa: '/ˈpɜːsən/' },
  plan: { cn: '计划', en: 'a detailed proposal', pos: 'n', ipa: '/plæn/' },
  data: { cn: '数据', en: 'facts and statistics', pos: 'n', ipa: '/ˈdeɪtə/' },
  process: { cn: '过程/流程', en: 'a series of actions', pos: 'n', ipa: '/ˈprɒses/' },
  experience: { cn: '经验/经历', en: 'knowledge from practice', pos: 'n', ipa: '/ɪkˈspɪəriəns/' },
  evidence: { cn: '证据', en: 'proof or indication', pos: 'n', ipa: '/ˈevɪdəns/' },
  form: { cn: '形式/表格', en: 'a shape or document', pos: 'n', ipa: '/fɔːm/' },
  level: { cn: '级别/水平', en: 'a position or degree', pos: 'n', ipa: '/ˈlevl/' },
  value: { cn: '价值', en: 'the worth of something', pos: 'n', ipa: '/ˈvæljuː/' },
  action: { cn: '行动', en: 'something done', pos: 'n', ipa: '/ˈækʃən/' },
  situation: { cn: '情况', en: 'a set of circumstances', pos: 'n', ipa: '/ˌsɪtʃuˈeɪʃən/' },
  attention: { cn: '注意力', en: 'the act of focusing', pos: 'n', ipa: '/əˈtenʃən/' },
  decision: { cn: '决定', en: 'a choice made', pos: 'n', ipa: '/dɪˈsɪʒən/' },
  activity: { cn: '活动', en: 'something being done', pos: 'n', ipa: '/ækˈtɪvɪti/' },
  condition: { cn: '条件/状况', en: 'a state or requirement', pos: 'n', ipa: '/kənˈdɪʃən/' },
  equipment: { cn: '设备', en: 'tools and machinery', pos: 'n', ipa: '/ɪˈkwɪpmənt/' },
  status: { cn: '状态/地位', en: 'the current condition', pos: 'n', ipa: '/ˈsteɪtəs/' },
  access: { cn: '访问/入口', en: 'the ability to enter', pos: 'n', ipa: '/ˈækses/' },
  resource: { cn: '资源', en: 'a source of supply', pos: 'n', ipa: '/rɪˈsɔːs/' },
  response: { cn: '回应/响应', en: 'an answer or reaction', pos: 'n', ipa: '/rɪˈspɒns/' },
  operation: { cn: '操作/运营', en: 'the act of running', pos: 'n', ipa: '/ˌɒpəˈreɪʃən/' },
  failure: { cn: '故障/失败', en: 'lack of success', pos: 'n', ipa: '/ˈfeɪljər/' },
  alarm: { cn: '告警/警报', en: 'a warning signal', pos: 'n', ipa: '/əˈlɑːm/' },
  test: { cn: '测试', en: 'a trial or examination', pos: 'n', ipa: '/test/' },
  type: { cn: '类型', en: 'a category or kind', pos: 'n', ipa: '/taɪp/' },
  error: { cn: '错误', en: 'a mistake', pos: 'n', ipa: '/ˈerər/' },
  capacity: { cn: '容量/能力', en: 'maximum amount', pos: 'n', ipa: '/kəˈpæsɪti/' },
  load: { cn: '负载/负荷', en: 'a weight or demand', pos: 'n', ipa: '/ləʊd/' },
  event: { cn: '事件', en: 'something that happens', pos: 'n', ipa: '/ɪˈvent/' },
  task: { cn: '任务', en: 'a piece of work', pos: 'n', ipa: '/tɑːsk/' },
  ticket: { cn: '工单/票', en: 'a service request record', pos: 'n', ipa: '/ˈtɪkɪt/' },
  record: { cn: '记录', en: 'a written account', pos: 'n', ipa: '/ˈrekɔːd/' },

  // ─── Common Adjectives ───
  good: { cn: '好的', en: 'of high quality', pos: 'adj', ipa: '/ɡʊd/' },
  new: { cn: '新的', en: 'recently made or found', pos: 'adj', ipa: '/njuː/' },
  last: { cn: '最后的', en: 'coming after all others', pos: 'adj', ipa: '/lɑːst/' },
  long: { cn: '长的', en: 'of great length', pos: 'adj', ipa: '/lɒŋ/' },
  great: { cn: '伟大的/很好的', en: 'remarkably good or large', pos: 'adj', ipa: '/ɡreɪt/' },
  little: { cn: '小的/少的', en: 'small in size or amount', pos: 'adj', ipa: '/ˈlɪtl/' },
  own: { cn: '自己的', en: 'belonging to oneself', pos: 'adj', ipa: '/əʊn/' },
  old: { cn: '老的/旧的', en: 'not young or not new', pos: 'adj', ipa: '/əʊld/' },
  big: { cn: '大的', en: 'large in size', pos: 'adj', ipa: '/bɪɡ/' },
  high: { cn: '高的', en: 'of great height', pos: 'adj', ipa: '/haɪ/' },
  different: { cn: '不同的', en: 'not the same', pos: 'adj', ipa: '/ˈdɪfrənt/' },
  small: { cn: '小的', en: 'not large', pos: 'adj', ipa: '/smɔːl/' },
  large: { cn: '大的', en: 'big in size', pos: 'adj', ipa: '/lɑːdʒ/' },
  next: { cn: '下一个的', en: 'coming immediately after', pos: 'adj', ipa: '/nekst/' },
  early: { cn: '早的', en: 'before the usual time', pos: 'adj', ipa: '/ˈɜːli/' },
  young: { cn: '年轻的', en: 'not old', pos: 'adj', ipa: '/jʌŋ/' },
  important: { cn: '重要的', en: 'of great significance', pos: 'adj', ipa: '/ɪmˈpɔːtənt/' },
  public: { cn: '公共的', en: 'relating to the people', pos: 'adj', ipa: '/ˈpʌblɪk/' },
  bad: { cn: '坏的', en: 'not good', pos: 'adj', ipa: '/bæd/' },
  same: { cn: '相同的', en: 'identical', pos: 'adj', ipa: '/seɪm/' },
  able: { cn: '能够的', en: 'having the ability', pos: 'adj', ipa: '/ˈeɪbl/' },
  free: { cn: '自由的/免费的', en: 'not restricted or costly', pos: 'adj', ipa: '/friː/' },
  sure: { cn: '确定的', en: 'certain or confident', pos: 'adj', ipa: '/ʃʊər/' },
  true: { cn: '真实的', en: 'in accordance with fact', pos: 'adj', ipa: '/truː/' },
  clear: { cn: '清楚的', en: 'easy to understand', pos: 'adj', ipa: '/klɪər/' },
  full: { cn: '满的/完整的', en: 'containing all possible', pos: 'adj', ipa: '/fʊl/' },
  special: { cn: '特别的', en: 'different from normal', pos: 'adj', ipa: '/ˈspeʃəl/' },
  easy: { cn: '容易的', en: 'not difficult', pos: 'adj', ipa: '/ˈiːzi/' },
  strong: { cn: '强壮的', en: 'having great power', pos: 'adj', ipa: '/strɒŋ/' },
  possible: { cn: '可能的', en: 'able to happen', pos: 'adj', ipa: '/ˈpɒsɪbl/' },
  whole: { cn: '整个的', en: 'all of; entire', pos: 'adj', ipa: '/həʊl/' },
  real: { cn: '真实的', en: 'actually existing', pos: 'adj', ipa: '/rɪəl/' },
  best: { cn: '最好的', en: 'superlative of good', pos: 'adj', ipa: '/best/' },
  better: { cn: '更好的', en: 'comparative of good', pos: 'adj', ipa: '/ˈbetər/' },
  simple: { cn: '简单的', en: 'not complicated', pos: 'adj', ipa: '/ˈsɪmpl/' },
  hard: { cn: '困难的/硬的', en: 'difficult or solid', pos: 'adj', ipa: '/hɑːd/' },
  short: { cn: '短的/矮的', en: 'not long or not tall', pos: 'adj', ipa: '/ʃɔːt/' },
  low: { cn: '低的', en: 'not high', pos: 'adj', ipa: '/ləʊ/' },
  late: { cn: '迟的/晚的', en: 'after the expected time', pos: 'adj', ipa: '/leɪt/' },
  general: { cn: '一般的/总体的', en: 'affecting most things', pos: 'adj', ipa: '/ˈdʒenərəl/' },
  specific: { cn: '具体的/特定的', en: 'clearly defined', pos: 'adj', ipa: '/spəˈsɪfɪk/' },
  certain: { cn: '确定的/某些', en: 'sure or particular', pos: 'adj', ipa: '/ˈsɜːtən/' },
  personal: { cn: '个人的', en: 'relating to one person', pos: 'adj', ipa: '/ˈpɜːsənəl/' },
  current: { cn: '当前的', en: 'belonging to the present', pos: 'adj', ipa: '/ˈkʌrənt/' },
  local: { cn: '本地的', en: 'relating to a particular area', pos: 'adj', ipa: '/ˈləʊkəl/' },
  final: { cn: '最终的', en: 'coming at the end', pos: 'adj', ipa: '/ˈfaɪnəl/' },
  main: { cn: '主要的', en: 'chief or most important', pos: 'adj', ipa: '/meɪn/' },
  major: { cn: '主要的/重大的', en: 'important or significant', pos: 'adj', ipa: '/ˈmeɪdʒər/' },
  single: { cn: '单一的/单个', en: 'only one', pos: 'adj', ipa: '/ˈsɪŋɡl/' },
  individual: { cn: '个人的/个体的', en: 'relating to one person', pos: 'adj', ipa: '/ˌɪndɪˈvɪdʒuəl/' },
  normal: { cn: '正常的', en: 'usual or expected', pos: 'adj', ipa: '/ˈnɔːməl/' },
  private: { cn: '私人的', en: 'not public', pos: 'adj', ipa: '/ˈpraɪvɪt/' },
  wrong: { cn: '错误的', en: 'not correct', pos: 'adj', ipa: '/rɒŋ/' },
  available: { cn: '可用的', en: 'able to be used', pos: 'adj', ipa: '/əˈveɪləbl/' },
  responsible: { cn: '负责的', en: 'having a duty to deal with', pos: 'adj', ipa: '/rɪˈspɒnsɪbl/' },
  critical: { cn: '关键的/严重的', en: 'very important or serious', pos: 'adj', ipa: '/ˈkrɪtɪkəl/' },
  effective: { cn: '有效的', en: 'successful in producing results', pos: 'adj', ipa: '/ɪˈfektɪv/' },
  additional: { cn: '额外的', en: 'added or extra', pos: 'adj', ipa: '/əˈdɪʃənəl/' },
  standard: { cn: '标准的', en: 'used as a measure', pos: 'adj', ipa: '/ˈstændəd/' },
  regular: { cn: '定期的/常规的', en: 'done at fixed intervals', pos: 'adj', ipa: '/ˈreɡjʊlər/' },
  recent: { cn: '最近的', en: 'not long ago', pos: 'adj', ipa: '/ˈriːsənt/' },
  previous: { cn: '之前的', en: 'coming before', pos: 'adj', ipa: '/ˈpriːviəs/' },
  active: { cn: '活跃的/活动的', en: 'engaged in action', pos: 'adj', ipa: '/ˈæktɪv/' },
  separate: { cn: '单独的/分开的', en: 'not joined', pos: 'adj', ipa: '/ˈseprət/' },
  safe: { cn: '安全的', en: 'protected from danger', pos: 'adj', ipa: '/seɪf/' },
  necessary: { cn: '必要的', en: 'required or needed', pos: 'adj', ipa: '/ˈnesəsəri/' },
  total: { cn: '总的/全部的', en: 'complete or entire', pos: 'adj', ipa: '/ˈtəʊtəl/' },
  direct: { cn: '直接的', en: 'without interruption', pos: 'adj', ipa: '/dɪˈrekt/' },
  significant: { cn: '重要的/显著的', en: 'large or important enough', pos: 'adj', ipa: '/sɪɡˈnɪfɪkənt/' },
  successful: { cn: '成功的', en: 'achieving desired results', pos: 'adj', ipa: '/səkˈsesfʊl/' },
  emergency: { cn: '紧急的', en: 'requiring immediate action', pos: 'adj', ipa: '/ɪˈmɜːdʒənsi/' },
  temporary: { cn: '临时的', en: 'not permanent', pos: 'adj', ipa: '/ˈtemprəri/' },
  permanent: { cn: '永久的', en: 'lasting forever', pos: 'adj', ipa: '/ˈpɜːmənənt/' },
  redundant: { cn: '冗余的', en: 'duplicated for backup', pos: 'adj', ipa: '/rɪˈdʌndənt/' },
  manual: { cn: '手动的', en: 'done by hand', pos: 'adj', ipa: '/ˈmænjuəl/' },
  automatic: { cn: '自动的', en: 'working by itself', pos: 'adj', ipa: '/ˌɔːtəˈmætɪk/' },
  stable: { cn: '稳定的', en: 'not likely to change', pos: 'adj', ipa: '/ˈsteɪbl/' },

  // ─── Additional Adverbs ───
  well: { cn: '好地/嗯', en: 'in a good way', pos: 'adv', ipa: '/wel/' },
  once: { cn: '一次/曾经', en: 'one time or formerly', pos: 'adv', ipa: '/wʌns/' },
  ever: { cn: '曾经', en: 'at any time', pos: 'adv', ipa: '/ˈevər/' },
  rather: { cn: '相当/宁愿', en: 'to some degree', pos: 'adv', ipa: '/ˈrɑːðər/' },
  quite: { cn: '相当', en: 'to a noticeable degree', pos: 'adv', ipa: '/kwaɪt/' },
  almost: { cn: '几乎', en: 'very nearly', pos: 'adv', ipa: '/ˈɔːlməʊst/' },
  really: { cn: '真正地', en: 'in fact or truly', pos: 'adv', ipa: '/ˈrɪəli/' },
  perhaps: { cn: '也许', en: 'possibly', pos: 'adv', ipa: '/pəˈhæps/' },
  probably: { cn: '可能', en: 'very likely', pos: 'adv', ipa: '/ˈprɒbəbli/' },
  certainly: { cn: '当然/确定', en: 'without doubt', pos: 'adv', ipa: '/ˈsɜːtənli/' },
  actually: { cn: '实际上', en: 'in fact', pos: 'adv', ipa: '/ˈæktʃuəli/' },
  exactly: { cn: '确切地', en: 'in an exact manner', pos: 'adv', ipa: '/ɪɡˈzæktli/' },
  especially: { cn: '特别地', en: 'particularly', pos: 'adv', ipa: '/ɪˈspeʃəli/' },
  recently: { cn: '最近', en: 'not long ago', pos: 'adv', ipa: '/ˈriːsəntli/' },
  finally: { cn: '最终', en: 'after a long time', pos: 'adv', ipa: '/ˈfaɪnəli/' },
  immediately: { cn: '立即', en: 'at once', pos: 'adv', ipa: '/ɪˈmiːdiətli/' },
  directly: { cn: '直接地', en: 'without going elsewhere', pos: 'adv', ipa: '/dɪˈrektli/' },
  currently: { cn: '当前', en: 'at the present time', pos: 'adv', ipa: '/ˈkʌrəntli/' },
  previously: { cn: '之前', en: 'at an earlier time', pos: 'adv', ipa: '/ˈpriːviəsli/' },
  normally: { cn: '通常', en: 'under normal conditions', pos: 'adv', ipa: '/ˈnɔːməli/' },
  automatically: { cn: '自动地', en: 'without human intervention', pos: 'adv', ipa: '/ˌɔːtəˈmætɪkli/' },
  properly: { cn: '正确地', en: 'in a correct manner', pos: 'adv', ipa: '/ˈprɒpəli/' },
  successfully: { cn: '成功地', en: 'with a good result', pos: 'adv', ipa: '/səkˈsesfʊli/' },
  effectively: { cn: '有效地', en: 'in a way that works', pos: 'adv', ipa: '/ɪˈfektɪvli/' },

  // ─── Time & Frequency ───
  today: { cn: '今天', en: 'this day', pos: 'adv', ipa: '/təˈdeɪ/' },
  tomorrow: { cn: '明天', en: 'the day after today', pos: 'adv', ipa: '/təˈmɒrəʊ/' },
  yesterday: { cn: '昨天', en: 'the day before today', pos: 'adv', ipa: '/ˈjestədeɪ/' },
  soon: { cn: '不久', en: 'in a short time', pos: 'adv', ipa: '/suːn/' },
  later: { cn: '后来/稍后', en: 'at a later time', pos: 'adv', ipa: '/ˈleɪtər/' },
  ago: { cn: '以前', en: 'in the past', pos: 'adv', ipa: '/əˈɡəʊ/' },
  tonight: { cn: '今晚', en: 'this evening or night', pos: 'adv', ipa: '/təˈnaɪt/' },
  daily: { cn: '每日的', en: 'every day', pos: 'adj', ipa: '/ˈdeɪli/' },
  weekly: { cn: '每周的', en: 'every week', pos: 'adj', ipa: '/ˈwiːkli/' },
  monthly: { cn: '每月的', en: 'every month', pos: 'adj', ipa: '/ˈmʌnθli/' },

  // ─── Numbers ───
  one: { cn: '一', en: 'the number 1', pos: 'num', ipa: '/wʌn/' },
  two: { cn: '二', en: 'the number 2', pos: 'num', ipa: '/tuː/' },
  three: { cn: '三', en: 'the number 3', pos: 'num', ipa: '/θriː/' },
  four: { cn: '四', en: 'the number 4', pos: 'num', ipa: '/fɔːr/' },
  five: { cn: '五', en: 'the number 5', pos: 'num', ipa: '/faɪv/' },
  six: { cn: '六', en: 'the number 6', pos: 'num', ipa: '/sɪks/' },
  seven: { cn: '七', en: 'the number 7', pos: 'num', ipa: '/ˈsevən/' },
  eight: { cn: '八', en: 'the number 8', pos: 'num', ipa: '/eɪt/' },
  nine: { cn: '九', en: 'the number 9', pos: 'num', ipa: '/naɪn/' },
  ten: { cn: '十', en: 'the number 10', pos: 'num', ipa: '/ten/' },
  hundred: { cn: '百', en: 'the number 100', pos: 'num', ipa: '/ˈhʌndrəd/' },
  thousand: { cn: '千', en: 'the number 1000', pos: 'num', ipa: '/ˈθaʊzənd/' },
  million: { cn: '百万', en: 'the number 1000000', pos: 'num', ipa: '/ˈmɪljən/' },
  second: { cn: '第二/秒', en: 'coming after the first', pos: 'num', ipa: '/ˈsekənd/' },
  third: { cn: '第三', en: 'coming after the second', pos: 'num', ipa: '/θɜːd/' },
  half: { cn: '一半', en: 'one of two equal parts', pos: 'num', ipa: '/hɑːf/' },
  double: { cn: '双倍的', en: 'twice as much', pos: 'adj', ipa: '/ˈdʌbl/' },

  // ─── Pronouns ───
  i: { cn: '我', en: 'the speaker', pos: 'pron', ipa: '/aɪ/' },
  me: { cn: '我(宾格)', en: 'objective form of I', pos: 'pron', ipa: '/miː/' },
  my: { cn: '我的', en: 'belonging to me', pos: 'pron', ipa: '/maɪ/' },
  mine: { cn: '我的(名词性)', en: 'belonging to me', pos: 'pron', ipa: '/maɪn/' },
  we: { cn: '我们', en: 'the speaker and others', pos: 'pron', ipa: '/wiː/' },
  us: { cn: '我们(宾格)', en: 'objective form of we', pos: 'pron', ipa: '/ʌs/' },
  our: { cn: '我们的', en: 'belonging to us', pos: 'pron', ipa: '/aʊər/' },
  you: { cn: '你/你们', en: 'the person addressed', pos: 'pron', ipa: '/juː/' },
  your: { cn: '你的/你们的', en: 'belonging to you', pos: 'pron', ipa: '/jɔːr/' },
  he: { cn: '他', en: 'a male person', pos: 'pron', ipa: '/hiː/' },
  him: { cn: '他(宾格)', en: 'objective form of he', pos: 'pron', ipa: '/hɪm/' },
  his: { cn: '他的', en: 'belonging to him', pos: 'pron', ipa: '/hɪz/' },
  she: { cn: '她', en: 'a female person', pos: 'pron', ipa: '/ʃiː/' },
  her: { cn: '她(宾格)/她的', en: 'objective or possessive of she', pos: 'pron', ipa: '/hɜːr/' },
  it: { cn: '它', en: 'a thing or animal', pos: 'pron', ipa: '/ɪt/' },
  its: { cn: '它的', en: 'belonging to it', pos: 'pron', ipa: '/ɪts/' },
  they: { cn: '他们/它们', en: 'plural of he/she/it', pos: 'pron', ipa: '/ðeɪ/' },
  them: { cn: '他们(宾格)', en: 'objective form of they', pos: 'pron', ipa: '/ðem/' },
  their: { cn: '他们的/它们的', en: 'belonging to them', pos: 'pron', ipa: '/ðeər/' },
  myself: { cn: '我自己', en: 'reflexive of I', pos: 'pron', ipa: '/maɪˈself/' },
  yourself: { cn: '你自己', en: 'reflexive of you', pos: 'pron', ipa: '/jɔːˈself/' },
  themselves: { cn: '他们自己', en: 'reflexive of they', pos: 'pron', ipa: '/ðəmˈselvz/' },

  // ─── Workplace / Email ───
  please: { cn: '请', en: 'used for polite requests', pos: 'adv', ipa: '/pliːz/' },
  thank: { cn: '感谢', en: 'to express gratitude', pos: 'v', ipa: '/θæŋk/' },
  regards: { cn: '问候/致意', en: 'good wishes', pos: 'n', ipa: '/rɪˈɡɑːdz/' },
  dear: { cn: '亲爱的/尊敬的', en: 'used at start of letter', pos: 'adj', ipa: '/dɪər/' },
  informed: { cn: '知情的/通知的', en: 'having knowledge of', pos: 'adj', ipa: '/ɪnˈfɔːmd/' },
  aware: { cn: '意识到的/知道的', en: 'having knowledge', pos: 'adj', ipa: '/əˈweər/' },
  assigned: { cn: '被分配的', en: 'allocated to someone', pos: 'adj', ipa: '/əˈsaɪnd/' },
  respective: { cn: '各自的', en: 'belonging separately to each', pos: 'adj', ipa: '/rɪˈspektɪv/' },
  finalized: { cn: '已确定的', en: 'made final or complete', pos: 'adj', ipa: '/ˈfaɪnəlaɪzd/' },
  discrepancy: { cn: '差异/不一致', en: 'a difference or mismatch', pos: 'n', ipa: '/dɪˈskrepənsi/' },
  adjustment: { cn: '调整', en: 'a small change', pos: 'n', ipa: '/əˈdʒʌstmənt/' },
  kindly: { cn: '请/好心地', en: 'in a kind manner / please', pos: 'adv', ipa: '/ˈkaɪndli/' },
  respectively: { cn: '分别地', en: 'separately in order given', pos: 'adv', ipa: '/rɪˈspektɪvli/' },
  accordingly: { cn: '相应地', en: 'in an appropriate way', pos: 'adv', ipa: '/əˈkɔːdɪŋli/' },
  regarding: { cn: '关于', en: 'concerning or about', pos: 'prep', ipa: '/rɪˈɡɑːdɪŋ/' },
  per: { cn: '每/按照', en: 'for each or according to', pos: 'prep', ipa: '/pɜːr/' },
  via: { cn: '经由/通过', en: 'by way of', pos: 'prep', ipa: '/ˈvaɪə/' },
  against: { cn: '反对/靠着', en: 'in opposition or next to', pos: 'prep', ipa: '/əˈɡenst/' },
  within: { cn: '在...之内', en: 'inside the limits of', pos: 'prep', ipa: '/wɪˈðɪn/' },
  beyond: { cn: '超出', en: 'further than', pos: 'prep', ipa: '/bɪˈjɒnd/' },
  across: { cn: '横穿/在对面', en: 'from one side to another', pos: 'prep', ipa: '/əˈkrɒs/' },
  along: { cn: '沿着', en: 'in a line beside', pos: 'prep', ipa: '/əˈlɒŋ/' },
  around: { cn: '围绕/大约', en: 'surrounding or approximately', pos: 'prep', ipa: '/əˈraʊnd/' },
  among: { cn: '在...之中', en: 'surrounded by', pos: 'prep', ipa: '/əˈmʌŋ/' },
  above: { cn: '在...上方', en: 'higher than', pos: 'prep', ipa: '/əˈbʌv/' },
  below: { cn: '在...下方', en: 'lower than', pos: 'prep', ipa: '/bɪˈləʊ/' },
  toward: { cn: '朝向', en: 'in the direction of', pos: 'prep', ipa: '/təˈwɔːd/' },
  throughout: { cn: '贯穿/到处', en: 'in every part of', pos: 'prep', ipa: '/θruːˈaʊt/' },
  except: { cn: '除了', en: 'not including', pos: 'prep', ipa: '/ɪkˈsept/' },
  despite: { cn: '尽管', en: 'without being affected by', pos: 'prep', ipa: '/dɪˈspaɪt/' },
  whether: { cn: '是否', en: 'expressing a choice', pos: 'conj', ipa: '/ˈweðər/' },
  unless: { cn: '除非', en: 'except if', pos: 'conj', ipa: '/ʌnˈles/' },
  whereas: { cn: '然而/鉴于', en: 'in contrast or considering', pos: 'conj', ipa: '/weərˈæz/' },
  meanwhile: { cn: '同时', en: 'at the same time', pos: 'adv', ipa: '/ˈmiːnwaɪl/' },
  furthermore: { cn: '此外', en: 'in addition', pos: 'adv', ipa: '/ˌfɜːðəˈmɔːr/' },
  moreover: { cn: '而且', en: 'also and more importantly', pos: 'adv', ipa: '/mɔːrˈəʊvər/' },
  otherwise: { cn: '否则', en: 'or else', pos: 'adv', ipa: '/ˈʌðəwaɪz/' },

  // ─── Operations & Workplace Verbs ───
  conduct: { cn: '执行/实施', en: 'to carry out or organize', pos: 'v', ipa: '/kənˈdʌkt/' },
  install: { cn: '安装', en: 'to set up equipment', pos: 'v', ipa: '/ɪnˈstɔːl/' },
  repair: { cn: '修理', en: 'to fix something broken', pos: 'v', ipa: '/rɪˈpeər/' },
  inspect: { cn: '检查', en: 'to examine closely', pos: 'v', ipa: '/ɪnˈspekt/' },
  isolate: { cn: '隔离', en: 'to separate for safety', pos: 'v', ipa: '/ˈaɪsəleɪt/' },
  measure: { cn: '测量', en: 'to determine size or amount', pos: 'v', ipa: '/ˈmeʒər/' },
  document: { cn: '记录/文档化', en: 'to record in writing', pos: 'v', ipa: '/ˈdɒkjument/' },
  communicate: { cn: '沟通/传达', en: 'to share information', pos: 'v', ipa: '/kəˈmjuːnɪkeɪt/' },
  coordinate: { cn: '协调', en: 'to organize together', pos: 'v', ipa: '/kəʊˈɔːdɪneɪt/' },
  supervise: { cn: '监督', en: 'to oversee work', pos: 'v', ipa: '/ˈsuːpəvaɪz/' },
  execute: { cn: '执行', en: 'to carry out a plan', pos: 'v', ipa: '/ˈeksɪkjuːt/' },
  troubleshoot: { cn: '排障', en: 'to find and fix problems', pos: 'v', ipa: '/ˈtrʌblʃuːt/' },
  calibrate: { cn: '校准', en: 'to adjust to a standard', pos: 'v', ipa: '/ˈkælɪbreɪt/' },
  configure: { cn: '配置', en: 'to set up settings', pos: 'v', ipa: '/kənˈfɪɡjʊər/' },
  deploy: { cn: '部署', en: 'to put into operation', pos: 'v', ipa: '/dɪˈplɔɪ/' },
  upgrade: { cn: '升级', en: 'to improve to newer version', pos: 'v', ipa: '/ˌʌpˈɡreɪd/' },
  backup: { cn: '备份', en: 'to make a copy for safety', pos: 'v', ipa: '/ˈbækʌp/' },
  log: { cn: '记录/日志', en: 'to record events', pos: 'v', ipa: '/lɒɡ/' },
  track: { cn: '追踪', en: 'to follow progress', pos: 'v', ipa: '/træk/' },
  investigate: { cn: '调查', en: 'to examine in detail', pos: 'v', ipa: '/ɪnˈvestɪɡeɪt/' },
  analyze: { cn: '分析', en: 'to study in detail', pos: 'v', ipa: '/ˈænəlaɪz/' },
  diagnose: { cn: '诊断', en: 'to identify the cause', pos: 'v', ipa: '/ˈdaɪəɡnəʊz/' },
  assess: { cn: '评估', en: 'to evaluate or judge', pos: 'v', ipa: '/əˈses/' },
  evaluate: { cn: '评价/评估', en: 'to judge the value', pos: 'v', ipa: '/ɪˈvæljueɪt/' },
  prioritize: { cn: '排优先级', en: 'to arrange by importance', pos: 'v', ipa: '/praɪˈɒrɪtaɪz/' },
  delegate: { cn: '委派', en: 'to assign to another', pos: 'v', ipa: '/ˈdelɪɡeɪt/' },
  comply: { cn: '遵守', en: 'to act according to rules', pos: 'v', ipa: '/kəmˈplaɪ/' },
  acknowledge: { cn: '确认/承认', en: 'to recognize or confirm receipt', pos: 'v', ipa: '/əkˈnɒlɪdʒ/' },
  resume: { cn: '恢复/继续', en: 'to start again', pos: 'v', ipa: '/rɪˈzjuːm/' },
  suspend: { cn: '暂停/中止', en: 'to stop temporarily', pos: 'v', ipa: '/səˈspend/' },
  initiate: { cn: '发起', en: 'to start or begin', pos: 'v', ipa: '/ɪˈnɪʃieɪt/' },
  terminate: { cn: '终止', en: 'to end or stop', pos: 'v', ipa: '/ˈtɜːmɪneɪt/' },
  mitigate: { cn: '缓解/减轻', en: 'to reduce severity', pos: 'v', ipa: '/ˈmɪtɪɡeɪt/' },
  simulate: { cn: '模拟', en: 'to imitate for testing', pos: 'v', ipa: '/ˈsɪmjuleɪt/' },
  energize: { cn: '送电/通电', en: 'to supply with power', pos: 'v', ipa: '/ˈenədʒaɪz/' },
  deenergize: { cn: '断电', en: 'to remove power from', pos: 'v', ipa: '/diːˈenədʒaɪz/' },

  // ─── Technical & Workplace Nouns ───
  voltage: { cn: '电压', en: 'electrical potential difference', pos: 'n', ipa: '/ˈvəʊltɪdʒ/' },
  frequency: { cn: '频率', en: 'rate of occurrence', pos: 'n', ipa: '/ˈfriːkwənsi/' },
  pressure: { cn: '压力', en: 'force per unit area', pos: 'n', ipa: '/ˈpreʃər/' },
  resistance: { cn: '电阻/阻力', en: 'opposition to flow', pos: 'n', ipa: '/rɪˈzɪstəns/' },
  impedance: { cn: '阻抗', en: 'total opposition to AC current', pos: 'n', ipa: '/ɪmˈpiːdəns/' },
  bandwidth: { cn: '带宽', en: 'data transfer capacity', pos: 'n', ipa: '/ˈbændwɪdθ/' },
  latency: { cn: '延迟', en: 'delay in data transfer', pos: 'n', ipa: '/ˈleɪtənsi/' },
  efficiency: { cn: '效率', en: 'ratio of output to input', pos: 'n', ipa: '/ɪˈfɪʃənsi/' },
  reliability: { cn: '可靠性', en: 'ability to perform consistently', pos: 'n', ipa: '/rɪˌlaɪəˈbɪlɪti/' },
  availability: { cn: '可用性', en: 'percentage of uptime', pos: 'n', ipa: '/əˌveɪləˈbɪlɪti/' },
  performance: { cn: '性能', en: 'how well something works', pos: 'n', ipa: '/pəˈfɔːməns/' },
  parameter: { cn: '参数', en: 'a measurable characteristic', pos: 'n', ipa: '/pəˈræmɪtər/' },
  baseline: { cn: '基准线', en: 'reference starting point', pos: 'n', ipa: '/ˈbeɪslaɪn/' },
  benchmark: { cn: '基准/标杆', en: 'standard for comparison', pos: 'n', ipa: '/ˈbentʃmɑːk/' },
  metric: { cn: '指标/度量', en: 'a standard of measurement', pos: 'n', ipa: '/ˈmetrɪk/' },
  indicator: { cn: '指示器/指标', en: 'something that shows status', pos: 'n', ipa: '/ˈɪndɪkeɪtər/' },
  reading: { cn: '读数', en: 'a measurement value', pos: 'n', ipa: '/ˈriːdɪŋ/' },
  measurement: { cn: '测量值', en: 'result of measuring', pos: 'n', ipa: '/ˈmeʒəmənt/' },
  calibration: { cn: '校准', en: 'adjustment to standard', pos: 'n', ipa: '/ˌkælɪˈbreɪʃən/' },
  configuration: { cn: '配置', en: 'arrangement of settings', pos: 'n', ipa: '/kənˌfɪɡjʊˈreɪʃən/' },
  specification: { cn: '规格/规范', en: 'detailed requirement', pos: 'n', ipa: '/ˌspesɪfɪˈkeɪʃən/' },
  requirement: { cn: '要求/需求', en: 'something needed', pos: 'n', ipa: '/rɪˈkwaɪəmənt/' },
  regulation: { cn: '法规/条例', en: 'official rule', pos: 'n', ipa: '/ˌreɡjuˈleɪʃən/' },
  compliance: { cn: '合规', en: 'following rules or standards', pos: 'n', ipa: '/kəmˈplaɪəns/' },
  audit: { cn: '审计/审查', en: 'official inspection', pos: 'n', ipa: '/ˈɔːdɪt/' },
  priority: { cn: '优先级', en: 'importance ranking', pos: 'n', ipa: '/praɪˈɒrɪti/' },
  severity: { cn: '严重程度', en: 'degree of seriousness', pos: 'n', ipa: '/sɪˈverɪti/' },
  duration: { cn: '持续时间', en: 'length of time', pos: 'n', ipa: '/djʊˈreɪʃən/' },
  interval: { cn: '间隔', en: 'time between events', pos: 'n', ipa: '/ˈɪntəvəl/' },
  timeline: { cn: '时间线', en: 'schedule of events', pos: 'n', ipa: '/ˈtaɪmlaɪn/' },
  deadline: { cn: '截止日期', en: 'time limit', pos: 'n', ipa: '/ˈdedlaɪn/' },
  procedure: { cn: '程序/流程', en: 'established way of doing things', pos: 'n', ipa: '/prəˈsiːdʒər/' },
  protocol: { cn: '协议/规程', en: 'set of rules for operation', pos: 'n', ipa: '/ˈprəʊtəkɒl/' },
  guideline: { cn: '指南/方针', en: 'general rule or recommendation', pos: 'n', ipa: '/ˈɡaɪdlaɪn/' },
  approval: { cn: '批准', en: 'official permission', pos: 'n', ipa: '/əˈpruːvəl/' },
  notification: { cn: '通知', en: 'act of informing', pos: 'n', ipa: '/ˌnəʊtɪfɪˈkeɪʃən/' },
  authorization: { cn: '授权', en: 'official permission to act', pos: 'n', ipa: '/ˌɔːθəraɪˈzeɪʃən/' },
  credential: { cn: '凭据/凭证', en: 'qualification or proof', pos: 'n', ipa: '/krɪˈdenʃəl/' },
  permission: { cn: '许可', en: 'consent to do something', pos: 'n', ipa: '/pəˈmɪʃən/' },
  overview: { cn: '概览/概述', en: 'general summary', pos: 'n', ipa: '/ˈəʊvəvjuː/' },
  summary: { cn: '摘要/总结', en: 'brief account', pos: 'n', ipa: '/ˈsʌməri/' },
  detail: { cn: '细节', en: 'specific information', pos: 'n', ipa: '/ˈdiːteɪl/' },
  component: { cn: '组件/部件', en: 'a part of a system', pos: 'n', ipa: '/kəmˈpəʊnənt/' },
  module: { cn: '模块', en: 'a self-contained unit', pos: 'n', ipa: '/ˈmɒdjuːl/' },
  interface: { cn: '接口', en: 'connection point between systems', pos: 'n', ipa: '/ˈɪntəfeɪs/' },
  sensor: { cn: '传感器', en: 'device that detects changes', pos: 'n', ipa: '/ˈsensər/' },
  actuator: { cn: '执行器', en: 'device that produces motion', pos: 'n', ipa: '/ˈæktʃueɪtər/' },
  valve: { cn: '阀门', en: 'device to control flow', pos: 'n', ipa: '/vælv/' },
  pump: { cn: '泵', en: 'device for moving fluid', pos: 'n', ipa: '/pʌmp/' },
  fan: { cn: '风扇/风机', en: 'device for moving air', pos: 'n', ipa: '/fæn/' },
  filter: { cn: '过滤器', en: 'device to remove impurities', pos: 'n', ipa: '/ˈfɪltər/' },
  damper: { cn: '风阀', en: 'device to regulate airflow', pos: 'n', ipa: '/ˈdæmpər/' },
  conduit: { cn: '管道/线管', en: 'tube for protecting cables', pos: 'n', ipa: '/ˈkɒndjuɪt/' },
  junction: { cn: '接线盒/汇合点', en: 'point of connection', pos: 'n', ipa: '/ˈdʒʌŋkʃən/' },
  terminal: { cn: '端子/终端', en: 'connection point or endpoint', pos: 'n', ipa: '/ˈtɜːmɪnəl/' },
  connector: { cn: '连接器', en: 'device for joining', pos: 'n', ipa: '/kəˈnektər/' },
  adapter: { cn: '适配器', en: 'device for compatibility', pos: 'n', ipa: '/əˈdæptər/' },

  // ─── Workplace Adjectives ───
  abnormal: { cn: '异常的', en: 'not normal', pos: 'adj', ipa: '/æbˈnɔːməl/' },
  unstable: { cn: '不稳定的', en: 'likely to change', pos: 'adj', ipa: '/ʌnˈsteɪbəl/' },
  operational: { cn: '运行中的', en: 'in working order', pos: 'adj', ipa: '/ˌɒpəˈreɪʃənəl/' },
  nominal: { cn: '标称的/正常', en: 'within expected range', pos: 'adj', ipa: '/ˈnɒmɪnəl/' },
  acceptable: { cn: '可接受的', en: 'within tolerance', pos: 'adj', ipa: '/əkˈseptəbəl/' },
  unacceptable: { cn: '不可接受的', en: 'not within tolerance', pos: 'adj', ipa: '/ˌʌnəkˈseptəbəl/' },
  compliant: { cn: '合规的', en: 'following rules', pos: 'adj', ipa: '/kəmˈplaɪənt/' },
  adequate: { cn: '充足的', en: 'sufficient for need', pos: 'adj', ipa: '/ˈædɪkwət/' },
  insufficient: { cn: '不足的', en: 'not enough', pos: 'adj', ipa: '/ˌɪnsəˈfɪʃənt/' },
  mandatory: { cn: '强制的', en: 'required by rule', pos: 'adj', ipa: '/ˈmændətɔːri/' },
  optional: { cn: '可选的', en: 'not required', pos: 'adj', ipa: '/ˈɒpʃənəl/' },
  urgent: { cn: '紧急的', en: 'requiring immediate action', pos: 'adj', ipa: '/ˈɜːdʒənt/' },
  minor: { cn: '轻微的', en: 'small or not serious', pos: 'adj', ipa: '/ˈmaɪnər/' },
  applicable: { cn: '适用的', en: 'relevant or appropriate', pos: 'adj', ipa: '/əˈplɪkəbəl/' },
  efficient: { cn: '高效的', en: 'achieving maximum output', pos: 'adj', ipa: '/ɪˈfɪʃənt/' },
  concurrent: { cn: '并发的/同时的', en: 'happening at the same time', pos: 'adj', ipa: '/kənˈkʌrənt/' },
  sequential: { cn: '顺序的', en: 'in a series', pos: 'adj', ipa: '/sɪˈkwenʃəl/' },
  periodic: { cn: '周期性的', en: 'recurring at intervals', pos: 'adj', ipa: '/ˌpɪəriˈɒdɪk/' },
  intermittent: { cn: '间歇性的', en: 'stopping and starting', pos: 'adj', ipa: '/ˌɪntəˈmɪtənt/' },
  continuous: { cn: '连续的', en: 'without interruption', pos: 'adj', ipa: '/kənˈtɪnjuəs/' },
  remote: { cn: '远程的', en: 'operated from a distance', pos: 'adj', ipa: '/rɪˈməʊt/' },

  // ─── Additional Adverbs ───
  promptly: { cn: '及时/迅速地', en: 'quickly', pos: 'adv', ipa: '/ˈprɒmptli/' },
  accurately: { cn: '准确地', en: 'correctly and precisely', pos: 'adv', ipa: '/ˈækjʊrətli/' },
  safely: { cn: '安全地', en: 'without danger', pos: 'adv', ipa: '/ˈseɪfli/' },
  manually: { cn: '手动地', en: 'by hand', pos: 'adv', ipa: '/ˈmænjuəli/' },
  remotely: { cn: '远程地', en: 'from a distance', pos: 'adv', ipa: '/rɪˈməʊtli/' },
  locally: { cn: '本地地', en: 'on site', pos: 'adv', ipa: '/ˈləʊkəli/' },
  regularly: { cn: '定期地', en: 'at fixed intervals', pos: 'adv', ipa: '/ˈreɡjʊləli/' },
  periodically: { cn: '周期性地', en: 'from time to time', pos: 'adv', ipa: '/ˌpɪəriˈɒdɪkli/' },
  temporarily: { cn: '暂时地', en: 'for a short time', pos: 'adv', ipa: '/ˈtempərəli/' },
  permanently: { cn: '永久地', en: 'forever', pos: 'adv', ipa: '/ˈpɜːmənəntli/' },
  carefully: { cn: '仔细地', en: 'with care', pos: 'adv', ipa: '/ˈkeəfəli/' },
  thoroughly: { cn: '彻底地', en: 'completely', pos: 'adv', ipa: '/ˈθʌrəli/' },
  approximately: { cn: '大约', en: 'about or nearly', pos: 'adv', ipa: '/əˈprɒksɪmətli/' },
  specifically: { cn: '具体地', en: 'in particular', pos: 'adv', ipa: '/spəˈsɪfɪkli/' },
  consequently: { cn: '因此', en: 'as a result', pos: 'adv', ipa: '/ˈkɒnsɪkwəntli/' },
  alternatively: { cn: '或者', en: 'as another option', pos: 'adv', ipa: '/ɔːlˈtɜːnətɪvli/' },
};

// ─── Common Phrases Database ───
const COMMON_PHRASES: Record<string, { cn: string; en: string }> = {
  'handover report': { cn: '交接报告', en: 'a document summarizing shift handover' },
  'shift handover': { cn: '交接班', en: 'the process of transferring responsibilities between shifts' },
  'bypass mode': { cn: '旁路模式', en: 'UPS operating mode that bypasses normal power path' },
  'maintenance bypass': { cn: '维护旁路', en: 'temporary power path during equipment maintenance' },
  'static bypass': { cn: '静态旁路', en: 'automatic bypass switch in UPS system' },
  'incident ticket': { cn: '事件工单', en: 'a record of an IT incident or fault' },
  'fault ticket': { cn: '故障工单', en: 'a record specifically for equipment faults' },
  'work order': { cn: '工单', en: 'a document authorizing maintenance work' },
  'change request': { cn: '变更请求', en: 'a formal proposal to modify infrastructure' },
  'power supply': { cn: '电源', en: 'a device that supplies electric power' },
  'power outage': { cn: '停电', en: 'a loss of electrical power' },
  'power failure': { cn: '电源故障', en: 'a malfunction of the power system' },
  'breaker trip': { cn: '断路器跳闸', en: 'automatic opening of a circuit breaker' },
  'circuit breaker': { cn: '断路器', en: 'an automatic electrical switch for protection' },
  'air conditioning': { cn: '空调', en: 'a system for cooling and dehumidifying air' },
  'fire alarm': { cn: '火警', en: 'a warning of fire' },
  'smoke detector': { cn: '烟雾探测器', en: 'a device that detects smoke' },
  'temperature sensor': { cn: '温度传感器', en: 'a device that measures temperature' },
  'humidity sensor': { cn: '湿度传感器', en: 'a device that measures humidity' },
  'cooling system': { cn: '冷却系统', en: 'a system for removing heat' },
  'backup power': { cn: '备用电源', en: 'alternative power source during outages' },
  'emergency power': { cn: '应急电源', en: 'power supply for critical systems during failure' },
  'dual power': { cn: '双路电源', en: 'two independent power sources for redundancy' },
  'redundant system': { cn: '冗余系统', en: 'a backup system that takes over on failure' },
  'failover test': { cn: '故障切换测试', en: 'testing automatic switch to backup system' },
  'preventive maintenance': { cn: '预防性维护', en: 'scheduled maintenance to prevent failures' },
  'corrective maintenance': { cn: '纠正性维护', en: 'maintenance to fix identified problems' },
  'routine inspection': { cn: '例行巡检', en: 'regular checking of equipment status' },
  'root cause': { cn: '根本原因', en: 'the fundamental reason for a problem' },
  'service level': { cn: '服务等级', en: 'the quality of service provided' },
  'response time': { cn: '响应时间', en: 'time taken to respond to an incident' },
  'mean time': { cn: '平均时间', en: 'average duration of a metric' },
  'downtime': { cn: '停机时间', en: 'period when system is not operational' },
  'uptime': { cn: '运行时间', en: 'period when system is operational' },
  'load balancing': { cn: '负载均衡', en: 'distributing workload across resources' },
  'data center': { cn: '数据中心', en: 'a facility for housing computer systems' },
  'server rack': { cn: '服务器机架', en: 'a frame for mounting servers' },
  'network switch': { cn: '网络交换机', en: 'a device that connects network devices' },
  'fiber optic': { cn: '光纤', en: 'thin glass strands for transmitting light' },
  'patch panel': { cn: '配线架', en: 'a panel for organizing cable connections' },
  'cable management': { cn: '线缆管理', en: 'organizing and routing cables' },
  'hot aisle': { cn: '热通道', en: 'aisle where hot exhaust air is contained' },
  'cold aisle': { cn: '冷通道', en: 'aisle where cool supply air is contained' },
  'raised floor': { cn: '架空地板', en: 'elevated floor for cable and air distribution' },
  'access control': { cn: '门禁控制', en: 'system for managing entry to facilities' },
  'security camera': { cn: '监控摄像头', en: 'a camera for surveillance' },
  'exceed the SLA': { cn: '超出服务等级协议', en: 'to go beyond agreed service levels' },
  'be completed': { cn: '完成', en: 'to finish or conclude' },
  'scroll up': { cn: '向上滚动', en: 'to move view upward on screen' },
  'scroll down': { cn: '向下滚动', en: 'to move view downward on screen' },
};

// ─── Cache Helpers ───
function getCacheKey(word: string): string {
  return `${CACHE_PREFIX}${word.toLowerCase().trim()}`;
}

function getCachedEntry(word: string): DictionaryEntry | null {
  try {
    const key = getCacheKey(word);
    const cached = storage.getItem(key);
    if (!cached) return null;

    const parsed = JSON.parse(cached);
    const now = Date.now();

    // Check TTL
    if (parsed.timestamp && now - parsed.timestamp > CACHE_TTL_MS) {
      storage.removeItem(key);
      return null;
    }

    return { ...parsed.entry, source: 'cache' };
  } catch (err) {
    logger.error('Dictionary cache read error:', String(err));
    return null;
  }
}

function setCachedEntry(word: string, entry: DictionaryEntry): void {
  try {
    const key = getCacheKey(word);
    const data = {
      entry,
      timestamp: Date.now(),
    };
    storage.setItem(key, JSON.stringify(data));
  } catch (err) {
    logger.error('Dictionary cache write error:', String(err));
  }
}

// ─── Professional Glossary Lookup ───
// Build lookup index for DC terms (lazy, built on first use)
let dcTermsIndex: Map<string, IDC_DICTEntry> | null = null;

function getDCTermsIndex(): Map<string, IDC_DICTEntry> {
  if (dcTermsIndex) return dcTermsIndex;
  dcTermsIndex = new Map();
  for (const entry of DC_TERMS_DICTIONARY) {
    dcTermsIndex.set(entry.term.toLowerCase(), entry);
    if (entry.lemma.toLowerCase() !== entry.term.toLowerCase()) {
      if (!dcTermsIndex.has(entry.lemma.toLowerCase())) {
        dcTermsIndex.set(entry.lemma.toLowerCase(), entry);
      }
    }
  }
  return dcTermsIndex;
}

function lookupProfessional(word: string, lemma: string): DictionaryEntry | null {
  const index = getDCTermsIndex();
  const lower = word.toLowerCase();
  const lemmaLower = lemma.toLowerCase();

  // Try exact match first
  const exactMatch = index.get(lower);
  if (exactMatch) {
    return convertDCTermEntry(exactMatch, word, lemma);
  }

  // Try lemma match
  if (lemmaLower !== lower) {
    const lemmaMatch = index.get(lemmaLower);
    if (lemmaMatch) {
      return convertDCTermEntry(lemmaMatch, word, lemma);
    }
  }

  return null;
}

function convertDCTermEntry(entry: IDC_DICTEntry, word: string, lemma: string): DictionaryEntry {
  return {
    word,
    lemma,
    chinese: entry.definition,
    englishDef: entry.definition,
    pos: entry.type === 'phrase' ? 'phrase' : 'n',
    source: 'professional',
    dataCenterMeaning: entry.workMeaning || entry.definition,
    example: entry.example || undefined,
    domain: entry.scene || 'data_center',
  };
}

// ─── Server Dictionary API (Database-backed) ───

const SERVER_API_CACHE: Map<string, ILocalWordResult> = new Map();
let serverApiLoading: Promise<ILocalWordResult | null> | null = null;

async function lookupWordFromServer(word: string): Promise<ILocalWordResult | null> {
  const lower = word.toLowerCase().trim();
  if (!lower) return null;

  const cached = SERVER_API_CACHE.get(lower);
  if (cached) return cached;

  try {
    const resp = await fetchWithTimeout(
      `/api/dictionary/lookup?word=${encodeURIComponent(lower)}`,
      5000,
    );
    if (!resp.ok) return null;

    const data = await resp.json();
    if (!data || !data.lemma) return null;

    const result: ILocalWordResult = {
      word: data.word || word,
      ipa: data.ipa || '',
      pos: data.pos || '',
      chinese: data.chinese || '',
      englishDef: data.englishDef || '',
      example: data.example || '',
      source: data.source || 'db',
      isLocal: false,
    };

    SERVER_API_CACHE.set(lower, result);
    return result;
  } catch (err) {
    logger.warn('[dictionarySkill] Server dictionary lookup failed:', String(err));
    return null;
  }
}

/** Batch lookup from server dictionary database */
export async function lookupBatchFromServer(
  words: string[],
): Promise<Map<string, ILocalWordResult>> {
  const results = new Map<string, ILocalWordResult>();
  const uncached = words.filter((w) => {
    const lower = w.toLowerCase().trim();
    const cached = SERVER_API_CACHE.get(lower);
    if (cached) { results.set(lower, cached); return false; }
    return true;
  });

  if (uncached.length === 0) return results;

  try {
    const resp = await fetchWithTimeout('/api/dictionary/batch', 8000, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ words: uncached }),
    });
    if (!resp.ok) return results;
    const data = await resp.json();
    if (data.results) {
      for (const [key, entry] of Object.entries(data.results)) {
        if (!entry) continue;
        const result: ILocalWordResult = {
          word: (entry as any).word || key,
          ipa: (entry as any).ipa || '',
          pos: (entry as any).pos || '',
          chinese: (entry as any).chinese || '',
          englishDef: (entry as any).englishDef || '',
          example: (entry as any).example || '',
          source: (entry as any).source || 'db',
          isLocal: false,
        };
        SERVER_API_CACHE.set(key, result);
        results.set(key, result);
      }
    }
  } catch (err) {
    logger.warn('[dictionarySkill] Batch server lookup failed:', String(err));
  }

  return results;
}

/** Async lookup from server dictionary database */
export async function lookupEnglishDict(word: string, _lemma: string): Promise<DictionaryEntry | null> {
  const result = await lookupWordFromServer(word);
  if (!result) return null;
  return {
    word: result.word,
    lemma: word.toLowerCase(),
    chinese: result.chinese,
    englishDef: result.englishDef,
    pos: result.pos,
    ipa: result.ipa,
    source: (result.source as DictionaryEntry['source']) || 'db',
    example: result.example || undefined,
  };
}

// ─── Basic Dictionary Lookup ───
function lookupBasic(word: string, lemma: string): DictionaryEntry | null {
  const lower = word.toLowerCase();
  const lemmaLower = lemma.toLowerCase();

  // Try exact match first
  const exactMatch = BASIC_DICT[lower];
  if (exactMatch) {
    return {
      word,
      lemma,
      chinese: exactMatch.cn,
      englishDef: exactMatch.en,
      pos: exactMatch.pos,
      ipa: exactMatch.ipa,
      source: 'basic',
    };
  }

  // Try lemma match
  if (lemmaLower !== lower) {
    const lemmaMatch = BASIC_DICT[lemmaLower];
    if (lemmaMatch) {
      return {
        word,
        lemma,
        chinese: lemmaMatch.cn,
        englishDef: lemmaMatch.en,
        pos: lemmaMatch.pos,
        ipa: lemmaMatch.ipa,
        source: 'basic',
      };
    }
  }

  return null;
}

// ─── Phrase Lookup ───
function lookupPhrase(word: string, context: string): DictionaryEntry | null {
  const lower = word.toLowerCase();
  const contextLower = context.toLowerCase();

  // Check if word is part of any known phrase
  for (const [phrase, data] of Object.entries(COMMON_PHRASES)) {
    if (phrase.includes(lower) && contextLower.includes(phrase)) {
      return {
        word: phrase,
        lemma: phrase,
        chinese: data.cn,
        englishDef: data.en,
        pos: 'phrase',
        source: 'phrase',
        phrases: [phrase],
      };
    }
  }

  return null;
}

// ─── Main Lookup Function ───
export function lookupDictionary(
  word: string,
  lemma: string,
  context?: string
): DictionaryEntry | null {
  // Priority 1: Check cache
  const cached = getCachedEntry(word);
  if (cached) {
    logger.info(`[dictionarySkill] Cache hit: ${word}`);
    return cached;
  }

  // Priority 2: DC Terms dictionary (exact + lemma)
  const professionalResult = lookupProfessional(word, lemma);
  if (professionalResult) {
    logger.info(`[dictionarySkill] DC terms hit: ${word}`);
    setCachedEntry(word, professionalResult);
    return professionalResult;
  }

  // Priority 3: Basic dictionary (exact + lemma)
  const basicResult = lookupBasic(word, lemma);
  if (basicResult) {
    logger.info(`[dictionarySkill] Basic dictionary hit: ${word}`);
    setCachedEntry(word, basicResult);
    return basicResult;
  }

  // Priority 4: Phrase match (if context provided)
  if (context) {
    const phraseResult = lookupPhrase(word, context);
    if (phraseResult) {
      logger.info(`[dictionarySkill] Phrase match: ${word} → ${phraseResult.word}`);
      setCachedEntry(word, phraseResult);
      return phraseResult;
    }
  }

  // Not found - caller will handle AI fallback
  logger.info(`[dictionarySkill] Not found locally: ${word}`);
  return null;
}

// ─── Comprehensive Local Word Lookup (Async, merges all sources) ───

export interface ILocalWordResult {
  word: string;
  ipa: string;
  pos: string;
  chinese: string;
  englishDef: string;
  example: string;
  source: string;
  isLocal: boolean;
}

/**
 * Comprehensive local word lookup — checks ALL local dictionaries and merges results.
 * Priority: BASIC_DICT (IPA) → JSON dicts (rich data) → Professional glossary
 * Returns null only if the word is not found in ANY local source.
 */
export async function lookupWordLocal(word: string): Promise<ILocalWordResult | null> {
  const lower = word.toLowerCase();

  // 1) Check BASIC_DICT for IPA + basic info (sync, always available)
  const basicEntry = BASIC_DICT[lower];
  let ipa = basicEntry?.ipa || '';
  let pos = basicEntry?.pos || '';
  let chinese = basicEntry?.cn || '';
  let englishDef = basicEntry?.en || '';
  let example = '';
  let source = basicEntry ? 'basic' : '';

  // If found in basic dict, return immediately (fast path)
  if (chinese) {
    return {
      word,
      ipa,
      pos: pos || '',
      chinese,
      englishDef,
      example,
      source: 'basic',
      isLocal: true,
    };
  }

  // 2) Server dictionary API (database-backed)
  try {
    const serverResult = await lookupWordFromServer(word);
    if (serverResult) {
      if (serverResult.chinese && !chinese) chinese = serverResult.chinese;
      if (serverResult.englishDef && !englishDef) englishDef = serverResult.englishDef;
      if (serverResult.example && !example) example = serverResult.example;
      if (serverResult.pos && !pos) pos = serverResult.pos;
      if (serverResult.ipa && !ipa) ipa = serverResult.ipa;
      if (!source) source = serverResult.source;
    }
  } catch (err) {
    logger.warn('[dictionarySkill] Server dict lookup error:', String(err));
  }

  // 4) Check DC terms dictionary (sync, fast)
  if (!chinese) {
    try {
      const { lookupTerm } = await import('@/data/dcTermsDictionary');
      const profHit = lookupTerm(word);
      if (profHit) {
        chinese = profHit.cn;
        if (profHit.pos && !pos) pos = profHit.pos;
        if (profHit.example && !example) example = profHit.example;
        if (!source) source = 'dc_terms';
      }
    } catch { /* ignore */ }
  }

  // 5) Check professional glossary (sync, fast)
  if (!chinese) {
    try {
      const { lookupTerm: lookupProfGlossary } = await import('@/data/professionalGlossary');
      const glossaryHit = lookupProfGlossary(word);
      if (glossaryHit) {
        chinese = glossaryHit.cn;
        if (glossaryHit.ipa && !ipa) ipa = glossaryHit.ipa;
        if (glossaryHit.pos && !pos) pos = glossaryHit.pos;
        if (!source) source = glossaryHit.source || 'professional';
      }
    } catch { /* ignore */ }
  }

  // 6) Return result if found anything locally
  if (chinese || englishDef || ipa) {
    return {
      word,
      ipa,
      pos: pos || '',
      chinese: chinese || '',
      englishDef: englishDef || '',
      example,
      source: source || 'basic',
      isLocal: true,
    };
  }

  // 7) Fallback: Free Dictionary API (no key, no rate limit, CORS enabled)
  try {
    const remoteResult = await lookupWordRemote(word);
    if (remoteResult) return remoteResult;
  } catch (err) {
    logger.warn('[dictionarySkill] Remote API lookup failed:', String(err));
  }

  return null;
}

// ─── Remote API Fallback ───

const REMOTE_CACHE_KEY = '__english_remote_dict_cache';
const remoteCache: Map<string, ILocalWordResult> = new Map();

function loadRemoteCache(): Record<string, ILocalWordResult> {
  try {
    const raw = storage.getItem(REMOTE_CACHE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Record<string, ILocalWordResult>;
      for (const [k, v] of Object.entries(parsed)) {
        remoteCache.set(k, v);
      }
      return parsed;
    }
  } catch { /* ignore */ }
  return {};
}

function saveRemoteCacheEntry(key: string, value: ILocalWordResult): void {
  remoteCache.set(key, value);
  try {
    const existing = loadRemoteCache();
    existing[key] = value;
    // Keep cache under 500 entries to avoid storage bloat
    const keys = Object.keys(existing);
    if (keys.length > 500) {
      const toRemove = keys.slice(0, keys.length - 500);
      for (const k of toRemove) delete existing[k];
    }
    storage.setItem(REMOTE_CACHE_KEY, JSON.stringify(existing));
  } catch { /* ignore */ }
}

interface FreeDictAPIEntry {
  word: string;
  phonetics?: Array<{ text?: string; audio?: string }>;
  meanings?: Array<{
    partOfSpeech?: string;
    definitions?: Array<{ definition?: string; example?: string }>;
    synonyms?: string[];
    antonyms?: string[];
  }>;
  sourceUrls?: string[];
}

export async function lookupWordRemote(word: string): Promise<ILocalWordResult | null> {
  const lower = word.toLowerCase();

  // Check memory cache first
  const cached = remoteCache.get(lower);
  if (cached) return cached;

  // Check localStorage cache
  loadRemoteCache();
  const cachedFromStorage = remoteCache.get(lower);
  if (cachedFromStorage) return cachedFromStorage;

  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(lower)}`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3000);

  try {
    const resp = await fetch(url, { signal: controller.signal });
    clearTimeout(timeout);

    if (!resp.ok) {
      // 404 = word not found, cache the miss
      if (resp.status === 404) {
        const emptyResult: ILocalWordResult = {
          word,
          ipa: '',
          pos: '',
          chinese: '',
          englishDef: '',
          example: '',
          source: 'not_found',
          isLocal: false,
        };
        saveRemoteCacheEntry(lower, emptyResult);
        return null;
      }
      return null;
    }

    const data = (await resp.json()) as FreeDictAPIEntry[];
    if (!data || data.length === 0) return null;

    const entry = data[0];

    // Extract IPA
    const ipaText = entry.phonetics?.find((p) => p.text)?.text || '';

    // Extract definitions (English)
    const allDefs: string[] = [];
    let example = '';
    let posList: string[] = [];

    if (entry.meanings) {
      for (const meaning of entry.meanings) {
        if (meaning.partOfSpeech) posList.push(meaning.partOfSpeech);
        if (meaning.definitions) {
          for (const def of meaning.definitions.slice(0, 2)) {
            if (def.definition) allDefs.push(def.definition);
            if (!example && def.example) example = def.example;
          }
        }
      }
    }

    const englishDef = allDefs.join('; ');
    const pos = posList.join('/');

    if (!englishDef && !ipaText) return null;

    const result: ILocalWordResult = {
      word,
      ipa: ipaText,
      pos: pos || '',
      chinese: '', // API doesn't provide Chinese translations
      englishDef,
      example,
      source: 'online',
      isLocal: false,
    };

    saveRemoteCacheEntry(lower, result);
    logger.info(`[dictionarySkill] Remote API hit for "${word}": ${ipaText} (${pos})`);
    return result;
  } catch (err) {
    clearTimeout(timeout);
    logger.warn('[dictionarySkill] Remote API fetch error:', String(err));
    return null;
  }
}

// ─── Batch Lookup ───
export function lookupDictionaryBatch(
  words: Array<{ word: string; lemma: string }>,
  context?: string
): Map<string, DictionaryEntry> {
  const results = new Map<string, DictionaryEntry>();

  for (const { word, lemma } of words) {
    const entry = lookupDictionary(word, lemma, context);
    if (entry) {
      results.set(word, entry);
    }
  }

  return results;
}

// ─── Cache Management ───
export function clearDictionaryCache(): void {
  try {
    // Get all keys and remove dictionary cache entries
    // Note: storage doesn't have getAllKeys, so we use a workaround
    const testKey = getCacheKey('__test__');
    if (storage.getItem(testKey)) {
      storage.removeItem(testKey);
    }
    logger.info('[dictionarySkill] Cache cleared');
  } catch (err) {
    logger.error('Dictionary cache clear error:', String(err));
  }
}

export function getCacheStats(): { size: number; prefix: string } {
  return {
    size: 0, // Cannot enumerate storage keys
    prefix: CACHE_PREFIX,
  };
}

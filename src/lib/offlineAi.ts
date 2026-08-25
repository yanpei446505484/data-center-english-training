import { DC_TERMS_DICTIONARY, lookupTerm, lookupTermsInSentence } from '@/data/dcTermsDictionary';

interface OfflineMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

function cleanDocument(text: string): string {
  return text
    .split('\0').join('')
    .replace(/\r\n?/g, '\n')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function extractRequestedWords(prompt: string): string[] {
  const match = prompt.match(/Words:\s*([^\n]+)/i);
  if (!match) return [];
  return match[1]
    .split(/[,，]/)
    .map(word => word.trim().toLowerCase())
    .filter(Boolean)
    .slice(0, 100);
}

function dictionaryJson(prompt: string): string {
  const words = extractRequestedWords(prompt);
  const richShape = prompt.includes('simpleEnglish') || prompt.includes('workMeaning');
  const entries = words.map(word => {
    const hit = lookupTerm(word);
    if (richShape) {
      return {
        word,
        lemma: word,
        ipa: hit?.ipa ?? '',
        pos: hit?.pos ?? 'word',
        chinese: hit?.cn ?? '本地词典未收录',
        simpleEnglish: hit ? `A data-center term used in ${hit.domain}.` : 'See the sentence context.',
        workMeaning: hit?.cn ?? '请结合原文场景理解',
        examples: hit?.example ? [hit.example] : [`Use "${word}" in the current work context.`],
        phrases: [],
        grammarNote: '',
      };
    }
    return {
      word,
      cn: hit?.cn ?? '本地词典未收录',
      en: hit ? `A data-center term used in ${hit.domain}.` : 'See the sentence context.',
      pos: hit?.pos ?? 'word',
    };
  });
  return JSON.stringify(entries);
}

export function offlineTranslate(text: string): string {
  const cleaned = cleanDocument(text);
  const englishHit = lookupTerm(cleaned);
  if (englishHit) return englishHit.cn;

  const chineseHit = DC_TERMS_DICTIONARY.find(entry => entry.definition.trim() === cleaned);
  if (chineseHit) return chineseHit.term;

  return '';
}

export async function offlineAiChat(messages: OfflineMessage[]): Promise<string> {
  const system = messages.filter(message => message.role === 'system').map(message => message.content).join('\n');
  const user = [...messages].reverse().find(message => message.role === 'user')?.content?.trim() ?? '';
  const prompt = `${system}\n${user}`;

  if (/return (only )?(a )?valid json array|return a json array|Words:/i.test(prompt)) {
    return dictionaryJson(prompt);
  }

  if (/document parser|clean plain text/i.test(system)) {
    return cleanDocument(user);
  }

  if (/translate/i.test(system) || /^translate\b/i.test(user)) {
    return offlineTranslate(user.replace(/^translate[^\n]*\n?/i, ''));
  }

  const compact = user.replace(/\s+/g, ' ').trim();
  const singleWord = compact.match(/^[A-Za-z][A-Za-z'-]{1,40}$/)?.[0];
  if (singleWord) {
    const hit = lookupTerm(singleWord);
    const chinese = hit?.cn ?? '本地词典暂未收录';
    const example = hit?.example ?? `Please use ${singleWord} in a data-center sentence.`;
    return `“${singleWord}”的本地专业释义是：${chinese}。\nThe local professional meaning of “${singleWord}” is: ${chinese}.\n\n例句：${example}\nExample: ${example}\n\n\`\`\`json\n${JSON.stringify({
      word: singleWord,
      chinese,
      dataCenterMeaning: hit ? `${hit.domain} 场景中的专业术语` : '请结合具体运维场景使用',
      example,
      phrases: [],
      tags: ['data center', hit?.domain ?? 'operation'],
    }, null, 2)}\n\`\`\``;
  }

  const terms = lookupTermsInSentence(compact).slice(0, 6);
  if (terms.length > 0) {
    const cn = terms.map(term => `${term.en}（${term.cn}）`).join('、');
    const examples = terms.filter(term => term.example).slice(0, 3).map(term => `- ${term.example}`).join('\n');
    return `这段内容涉及这些数据中心术语：${cn}。\nThis content includes these data-center terms: ${terms.map(term => term.en).join(', ')}.\n\n建议先朗读并掌握下面的现场例句。\nPractise these on-site examples first.\n${examples || `- ${compact}`}`;
  }

  return `我已收到你的问题。离线英语老师可以进行课程检索、专业词汇解释、例句练习和发音训练。\nI received your question. The offline English tutor supports course search, professional vocabulary, example practice, and pronunciation training.\n\n你可以输入一个英语单词，或询问 UPS、BMS、CRAC、交接班、巡检等数据中心主题。\nEnter an English word, or ask about UPS, BMS, CRAC, shift handover, inspection, and other data-center topics.`;
}

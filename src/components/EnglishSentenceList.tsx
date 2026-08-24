import { useState, useMemo, useCallback, memo } from 'react';
import { Star, ChevronDown, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';
import { useFavorites } from '@/hooks/useFavorites';

/**
 * Extract English-Chinese sentence pairs from bilingual AI response.
 * Format: Chinese line followed by English line (alternating).
 */
function extractEnCnPairs(markdown: string): { en: string; cn: string }[] {
  const clean = markdown
    .replace(/```[\s\S]*?```/g, '')  // code blocks (word card JSON)
    .replace(/\*\*([^*]+)\*\*/g, '$1') // bold
    .replace(/\*([^*]+)\*/g, '$1')     // italic
    .replace(/#{1,6}\s+/g, '')         // headers
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // links
    .replace(/`([^`]+)`/g, '$1')       // inline code
    .replace(/^>\s+/gm, '')            // blockquotes
    .trim();

  const lines = clean.split('\n').map(l => l.trim()).filter(Boolean);
  const pairs: { en: string; cn: string }[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check if this is an English-dominant line
    const chineseChars = (line.match(/[\u4e00-\u9fff]/g) || []).length;
    const totalChars = line.replace(/\s/g, '').length;
    const isEnglish = totalChars > 0 && chineseChars / totalChars < 0.3;

    if (!isEnglish || line.length < 8) continue;

    // Strip numbered list markers and role prefixes
    let en = line
      .replace(/^\d+\.\s*/, '')              // "1. " → ""
      .replace(/^[-•*]\s*/, '')               // "- " → ""
      .replace(/^Study suggestions:\s*/i, '')  // "Study suggestions:" → ""
      .trim();

    // Strip inline Chinese annotations: （中文）、(中文)
    en = en.replace(/[（(]\s*[\u4e00-\u9fff][\u4e00-\u9fff\u3000-\u303f\uff00-\uffef，。！？；：、""''\s]*[）)]/g, '').trim();

    if (en.length < 8 || !/[A-Za-z]/.test(en)) continue;

    // Find the Chinese counterpart: previous line or next line
    let cn = '';
    if (i > 0) {
      const prevLine = lines[i - 1];
      const prevChinese = (prevLine.match(/[\u4e00-\u9fff]/g) || []).length;
      const prevTotal = prevLine.replace(/\s/g, '').length;
      if (prevTotal > 0 && prevChinese / prevTotal > 0.4) {
        cn = prevLine.replace(/\*{1,2}/g, '').replace(/^[\-·•*\d.]+\s*/, '').trim();
      }
    }
    if (!cn && i + 1 < lines.length) {
      const nextLine = lines[i + 1];
      const nextChinese = (nextLine.match(/[\u4e00-\u9fff]/g) || []).length;
      const nextTotal = nextLine.replace(/\s/g, '').length;
      if (nextTotal > 0 && nextChinese / nextTotal > 0.4) {
        cn = nextLine.replace(/\*{1,2}/g, '').replace(/^[\-·•*\d.]+\s*/, '').trim();
      }
    }

    pairs.push({ en, cn: cn || '' });
  }

  // Deduplicate by English text
  const seen = new Set<string>();
  return pairs.filter(p => {
    const key = p.en.toLowerCase().trim();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

interface EnglishSentenceListProps {
  content: string;
}

const EnglishSentenceList = memo(function EnglishSentenceList({ content }: EnglishSentenceListProps) {
  const [expanded, setExpanded] = useState(false);
  const { favorites, addSentenceFavorite, removeFavorite, getFavoriteId } = useFavorites();

  const sentences = useMemo(() => extractEnCnPairs(content), [content]);

  const handleToggle = useCallback((en: string) => {
    const existingId = getFavoriteId(en);
    if (existingId) {
      removeFavorite(existingId);
      toast.success('已取消收藏');
    } else {
      const pair = sentences.find(s => s.en === en);
      const added = addSentenceFavorite(en, pair?.cn || '');
      if (added) {
        toast.success('已收藏');
      } else {
        toast.info('已在收藏中');
      }
    }
  }, [getFavoriteId, removeFavorite, addSentenceFavorite, sentences]);

  if (sentences.length === 0) return null;

  return (
    <div className="mt-2">
      <button
        type="button"
        onClick={() => setExpanded(prev => !prev)}
        className="flex items-center gap-1 text-[11px] text-muted-foreground hover:text-primary transition-colors"
      >
        {expanded ? <ChevronDown className="size-3" /> : <ChevronRight className="size-3" />}
        英文句子收藏 ({sentences.length})
      </button>

      {expanded && (
        <div className="mt-1.5 space-y-0.5">
          {sentences.map((s, i) => {
            const isFav = favorites.some(f => f.query.toLowerCase() === s.en.toLowerCase());
            return (
              <div
                key={i}
                className="flex items-start gap-2 py-1 group"
              >
                <span className="text-[10px] text-muted-foreground/50 tabular-nums w-3 shrink-0 mt-0.5 text-right">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-foreground leading-relaxed">{s.en}</p>
                  {s.cn && (
                    <p className="text-[11px] text-muted-foreground/70 leading-relaxed mt-0.5">{s.cn}</p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => handleToggle(s.en)}
                  className={`shrink-0 p-1 rounded transition-colors ${
                    isFav
                      ? 'text-primary hover:text-primary/70'
                      : 'text-muted-foreground/40 hover:text-primary group-hover:text-muted-foreground'
                  }`}
                  title={isFav ? '取消收藏' : '收藏此句'}
                >
                  <Star className={`size-3.5 ${isFav ? 'fill-current' : ''}`} />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
});

export default EnglishSentenceList;

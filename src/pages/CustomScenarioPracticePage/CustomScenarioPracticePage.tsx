import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PracticeReportView from '../ScenarioPracticePage/PracticeReportView';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Volume2,
  Mic,
  MicOff,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Home,
  Clapperboard,
  Bookmark,
  BookmarkCheck,
  SkipForward,
  Square,
  Loader2,
  Globe,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import { storage } from '@/lib/storage';
import { aiChat } from '@/lib/ai-gateway';
import { logger } from '@/lib/app-logger';
import { userStorageKey } from '@/lib/userStorage';
import { speakWithPlugin, stopAllSpeech, stripChinese, warmupAudio } from '@/lib/ttsPlugin';
import { lookupWordLocal, type ILocalWordResult } from '@/skills/dictionarySkill';
import { lookupTermsInSentence, lookupTerm, DICTIONARY_SOURCES } from '@/data/dcTermsDictionary';
import { toast } from 'sonner';
import {
  useFavorites,
  extractSentencePairsFromResponse,
  type ISentencePair,
} from '@/hooks/useFavorites';

const PASS_SCORE = 60;

// Module-level cache for AI-fetched word definitions
const aiWordCache = new Map<string, { cn: string; ipa: string; pos?: string }>();

// Module-level cache for AI sentence translations (en → cn)
const sentenceTranslationCache = new Map<string, string>();

// Module-level cache for scenario title translations
const scenarioTitleTranslationCache = new Map<string, string>();

/* ─── Score Result ─── */
interface ScoreResult {
  score: number;
  missedWords: string[];
  extraWords: string[];
  matchedWords: string[];
  totalWords: number;
}

function computeScore(target: string, spoken: string): ScoreResult {
  const normalize = (s: string) =>
    s.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, ' ').trim();

  const targetWords = normalize(target).split(' ').filter(Boolean);
  const spokenWords = normalize(spoken).split(' ').filter(Boolean);

  if (targetWords.length === 0) {
    return { score: 100, missedWords: [], extraWords: [], matchedWords: targetWords, totalWords: 0 };
  }
  if (spokenWords.length === 0) {
    return { score: 0, missedWords: targetWords, extraWords: [], matchedWords: [], totalWords: targetWords.length };
  }

  const matchedWords: string[] = [];
  const missedWords: string[] = [];
  const spokenCopy = [...spokenWords];

  for (const tw of targetWords) {
    const idx = spokenCopy.findIndex((sw) => sw === tw);
    if (idx !== -1) {
      matchedWords.push(tw);
      spokenCopy.splice(idx, 1);
    } else {
      missedWords.push(tw);
    }
  }

  const extraWords = spokenCopy.filter((w) => !targetWords.includes(w));
  const score = Math.round((matchedWords.length / targetWords.length) * 100);
  return { score, missedWords, extraWords, matchedWords, totalWords: targetWords.length };
}

/* ─── Word Popover ─── */
function WordPopover({
  children,
  word,
  onFavorite,
  isFavorited,
}: {
  children: React.ReactNode;
  word: string;
  onFavorite: (data?: { cn: string; ipa: string; pos?: string }) => void;
  isFavorited: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [aiData, setAiData] = useState<{ cn: string; ipa: string; pos?: string; example?: string; englishDef?: string; source?: string } | null>(null);
  const [isLocalLoading, setIsLocalLoading] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!open) return;

    const wordKey = word.toLowerCase();
    const cached = aiWordCache.get(wordKey) as typeof aiData;
    if (cached) {
      setAiData(cached);
      return;
    }

    // Prevent duplicate loading for the same word
    if (isLocalLoading) return;

    const controller = new AbortController();
    abortRef.current = controller;

    // Set loading state immediately
    setIsLocalLoading(true);

    // Hard timeout to ensure we never stay in loading state
    const hardTimeout = setTimeout(() => {
      if (!controller.signal.aborted) {
        const emptyResult = { cn: '', ipa: '', pos: undefined, example: undefined, englishDef: undefined, source: undefined };
        aiWordCache.set(wordKey, emptyResult);
        setAiData(emptyResult);
        setIsLocalLoading(false);
      }
    }, 5000);

    (async () => {
      try {
        const localHit: ILocalWordResult | null = await lookupWordLocal(word);
        if (controller.signal.aborted) return;

        const parsed = localHit
          ? {
              cn: localHit.chinese || '',
              ipa: localHit.ipa,
              pos: localHit.pos || undefined,
              example: localHit.example || undefined,
              englishDef: localHit.englishDef || undefined,
              source: localHit.source || undefined,
            }
          : { cn: '', ipa: '', pos: undefined, example: undefined, englishDef: undefined, source: undefined };
        aiWordCache.set(wordKey, parsed);
        setAiData(parsed);
      } catch {
        // On error, show empty result
        const emptyResult = { cn: '', ipa: '', pos: undefined, example: undefined, englishDef: undefined, source: undefined };
        aiWordCache.set(wordKey, emptyResult);
        setAiData(emptyResult);
      } finally {
        clearTimeout(hardTimeout);
        setIsLocalLoading(false);
      }
    })();

    return () => {
      controller.abort();
      clearTimeout(hardTimeout);
    };
  }, [open, word, isLocalLoading]);

  const [isWordSpeaking, setIsWordSpeaking] = useState(false);
  const wordSpeakStopRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    return () => {
      if (wordSpeakStopRef.current) {
        wordSpeakStopRef.current();
        wordSpeakStopRef.current = null;
      }
    };
  }, []);

  const speakWord = () => {
    if (!word?.trim()) return;
    warmupAudio();
    if (wordSpeakStopRef.current) {
      wordSpeakStopRef.current();
      wordSpeakStopRef.current = null;
    }
    setIsWordSpeaking(true);
    const stopFn = speakWithPlugin(word, () => {
      if (wordSpeakStopRef.current === stopFn) {
        wordSpeakStopRef.current = null;
      }
      setIsWordSpeaking(false);
    }, 'british');
    wordSpeakStopRef.current = stopFn;
  };

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen && abortRef.current) {
      abortRef.current.abort();
      setIsLocalLoading(false);
    }
    if (!nextOpen && wordSpeakStopRef.current) {
      wordSpeakStopRef.current();
      wordSpeakStopRef.current = null;
      setIsWordSpeaking(false);
    }
    setOpen(nextOpen);
  };

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <span
          role="button"
          tabIndex={0}
          className="cursor-pointer hover:text-primary hover:underline decoration-primary/40 underline-offset-4 transition-colors rounded-sm"
          onKeyDown={(e) => { if (e.key === 'Enter') setOpen(true); }}
        >
          {children}
        </span>
      </PopoverTrigger>
      <PopoverContent className="w-auto max-w-[260px] p-3" side="top" align="center" sideOffset={8}>
        <div className="space-y-2.5">
          {isLocalLoading ? (
            <div className="flex items-center gap-2 py-3 justify-center">
              <Loader2 className="size-4 animate-spin text-primary" />
              <span className="text-xs text-muted-foreground">词典查询中…</span>
            </div>
          ) : (
            <>
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="font-bold text-base text-foreground">{word}</span>
                {aiData?.ipa && (
                  <span className="text-xs text-muted-foreground font-mono">{aiData.ipa}</span>
                )}
                {aiData?.pos && (
                  <Badge variant="outline" className="text-[10px] py-0">{aiData.pos}</Badge>
                )}
              </div>
              {aiData?.cn ? (
                <p className="text-sm text-foreground leading-relaxed">{aiData.cn}</p>
              ) : (
                <p className="text-sm text-muted-foreground italic">暂无中文释义</p>
              )}
              {aiData?.source === 'online' && (
                <span className="inline-flex items-center gap-0.5 text-[9px] text-blue-400 bg-blue-400/10 px-1.5 py-0.5 rounded-full">
                  <Globe className="size-2.5" />在线词典
                </span>
              )}
              {aiData?.example && (
                <p className="text-xs text-muted-foreground italic border-l-2 border-primary/30 pl-2">
                  {aiData.example}
                </p>
              )}
            </>
          )}
          <div className="flex gap-2 pt-1">
            <Button size="sm" variant="outline" onClick={speakWord} disabled={isWordSpeaking} className="flex-1 h-8 text-xs">
              <Volume2 className={`size-3.5 mr-1.5 ${isWordSpeaking ? 'animate-pulse text-primary' : ''}`} />
              朗读
            </Button>
            <Button
              size="sm"
              variant={isFavorited ? 'secondary' : 'default'}
              onClick={() => { onFavorite(aiData || undefined); setOpen(false); }}
              className="flex-1 h-8 text-xs"
              disabled={isFavorited || isLocalLoading}
            >
              {isFavorited ? (
                <><BookmarkCheck className="size-3.5 mr-1.5" />已收藏</>
              ) : (
                <><Bookmark className="size-3.5 mr-1.5" />收藏</>
              )}
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

/* ─── Save practice record ─── */
function saveCustomPracticeRecord(record: {
  scenarioId: string;
  scenarioLabel: string;
  totalSentences: number;
  scores: number[];
  averageScore: number;
  bestScore: number;
  worstScore: number;
  completedAt: string;
}) {
  try {
    const raw = storage.getItem(userStorageKey('scenario_practice_history'));
    const history = raw ? JSON.parse(raw) : [];
    history.push(record);
    if (history.length > 50) history.shift();
    storage.setItem(userStorageKey('scenario_practice_history'), JSON.stringify(history));
  } catch {
    // silently fail
  }
}

/* ─── Main Component ─── */
export default function CustomScenarioPracticePage() {
  const { favId } = useParams<{ favId: string }>();
  const navigate = useNavigate();
  const { favorites, addFavorite, isFavorited } = useFavorites();

  const scenario = useMemo(
    () => favorites.find((f) => f.id === favId && f.type === 'scenario'),
    [favorites, favId]
  );

  // Extract sentence pairs (en + cn) from AI response
  const sentencePairs = useMemo<ISentencePair[]>(() => {
    if (!scenario) return [];
    return extractSentencePairsFromResponse(scenario.aiResponse);
  }, [scenario]);

  // Auto-translate scenario title to Chinese
  const [translatedTitle, setTranslatedTitle] = useState<string>('');
  useEffect(() => {
    if (!scenario) return;
    const title = scenario.query;
    // Skip if already Chinese or too short
    const chineseChars = (title.match(/[\u4e00-\u9fff]/g) || []).length;
    if (chineseChars / title.length > 0.3 || title.length < 5) {
      setTranslatedTitle('');
      return;
    }
    // Check cache
    if (scenarioTitleTranslationCache.has(title)) {
      setTranslatedTitle(scenarioTitleTranslationCache.get(title)!);
      return;
    }
    let cancelled = false;
    (async () => {
      try {
        const prompt = `Translate the following scenario description into natural Chinese. Output ONLY the translation, no explanations.
${title}`;
        const full = await aiChat([
          { role: 'user', content: prompt },
        ]);
        if (cancelled) return;
        const cn = full.replace(/[#*_`]/g, '').trim();
        if (cn && !cancelled) {
          scenarioTitleTranslationCache.set(title, cn);
          setTranslatedTitle(cn);
        }
      } catch (err) {
        logger.error('Title translation failed:', String(err));
      }
    })();
    return () => { cancelled = true; };
  }, [scenario]);

  // Auto-translate missing Chinese for sentence pairs
  const [translatedPairs, setTranslatedPairs] = useState<ISentencePair[]>(sentencePairs);
  useEffect(() => {
    // Reset to original when source changes
    setTranslatedPairs(sentencePairs);

    // Find pairs needing translation (cn is empty or placeholder)
    const pending = sentencePairs.filter(
      (p) => !p.cn || p.cn === '(待补充翻译)'
    );
    if (pending.length === 0) return;

    let cancelled = false;
    (async () => {
      for (const pair of pending) {
        if (cancelled) return;
        const cacheKey = pair.en.slice(0, 200);
        // Check cache first
        if (sentenceTranslationCache.has(cacheKey)) {
          const cached = sentenceTranslationCache.get(cacheKey)!;
          setTranslatedPairs((prev) =>
            prev.map((p) => p.en === pair.en ? { ...p, cn: cached } : p)
          );
          continue;
        }
        try {
          // 从专业词典中提取句子中包含的术语作为翻译参考
          const terms = lookupTermsInSentence(pair.en);
          const glossaryRef = terms.length > 0
            ? `\nProfessional terminology reference (use these exact translations):\n${terms.map(t => `- ${t.en} = ${t.cn}`).join('\n')}`
            : '';
          const prompt = `Translate the following English sentence into natural Chinese. Output ONLY the translation, no explanations.${glossaryRef}
${pair.en}`;
          const full = await aiChat([
            { role: 'user', content: prompt },
          ]);
          if (cancelled) return;
          const cn = full.replace(/[#*_`]/g, '').trim();
          if (cn) {
            sentenceTranslationCache.set(cacheKey, cn);
            if (!cancelled) {
              setTranslatedPairs((prev) =>
                prev.map((p) => p.en === pair.en ? { ...p, cn } : p)
              );
            }
          }
        } catch (err) {
          logger.error('Sentence translation failed:', String(err));
        }
      }
    })();

    return () => { cancelled = true; };
  }, [sentencePairs]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [currentScore, setCurrentScore] = useState<number | null>(null);
  const [scoreDetails, setScoreDetails] = useState<{ missedWords: string[]; extraWords: string[] } | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  // Single playback only (no repeat)
  const repeatCount = 1;
  const [speakRound, setSpeakRound] = useState(0);
  const [speakPhase, setSpeakPhase] = useState<'en' | ''>('');
  const speakAbortRef = useRef(false);
  const pluginStopRef = useRef<(() => void) | null>(null);

  const recognitionRef = useRef<any>(null);
  const currentPair = translatedPairs[currentIndex] || sentencePairs[currentIndex];

  // Initialize speech recognition
  useEffect(() => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) return;

    const rec = new SR();
    rec.lang = 'en-US';
    rec.continuous = false;
    rec.interimResults = false;
    recognitionRef.current = rec;

    return () => { rec.abort(); };
  }, []);

  // 页面卸载时停止所有语音（切换页面/导航时自动停读）
  useEffect(() => {
    return () => {
      stopAllSpeech();
    };
  }, []);

  const stopSpeakingFn = useCallback(() => {
    speakAbortRef.current = true;
    stopAllSpeech();
    pluginStopRef.current?.();
    pluginStopRef.current = null;
    setIsSpeaking(false);
    setSpeakRound(0);
    setSpeakPhase('');
  }, []);

  const speakOne = useCallback((text: string, _lang: string, _rate: number): Promise<void> => {
    return new Promise((resolve) => {
      const done = () => setTimeout(resolve, 100);
      pluginStopRef.current = speakWithPlugin(text, done);
    });
  }, []);

  const speak = useCallback(async () => {
    if (!currentPair) return;
    const enText = stripChinese(currentPair.en);
    if (!enText.trim()) return;
    // 🔒 Mobile iOS: unlock audio in user gesture BEFORE async
    warmupAudio();
    // stopAllSpeech 由 speakWithPlugin 内部调用，此处不再重复
    pluginStopRef.current?.();
    pluginStopRef.current = null;
    speakAbortRef.current = false;
    setIsSpeaking(true);

    setSpeakRound(1);
    setSpeakPhase('en');
    await speakOne(enText, 'en-US', 0.85);

    setIsSpeaking(false);
    setSpeakRound(0);
    setSpeakPhase('');
  }, [currentPair, repeatCount, speakOne]);



  const startRecording = useCallback(() => {
    if (!recognitionRef.current || !currentPair) return;

    setRecognizedText('');
    setCurrentScore(null);
    setScoreDetails(null);
    setIsRecording(true);

    const rec = recognitionRef.current;
    rec.onresult = (event: any) => {
      const text = event.results[0]?.[0]?.transcript ?? '';
      setRecognizedText(text);
      const result = computeScore(currentPair.en, text);
      setCurrentScore(result.score);
      setScoreDetails({ missedWords: result.missedWords, extraWords: result.extraWords });
      setScores((prev) => [...prev, result.score]);
      setIsRecording(false);
    };
    rec.onerror = () => setIsRecording(false);
    rec.onend = () => setIsRecording(false);

    try {
      rec.start();
    } catch (e) {
      logger.error('Speech recognition error:', String(e));
      setIsRecording(false);
    }
  }, [currentPair]);

  const stopRecording = useCallback(() => {
    recognitionRef.current?.stop();
    setIsRecording(false);
  }, []);

  const nextSentence = useCallback(() => {
    speakAbortRef.current = true;
    stopAllSpeech();
    pluginStopRef.current?.();
    pluginStopRef.current = null;
    setIsSpeaking(false);
    setSpeakRound(0);
    setSpeakPhase('');
    if (currentIndex < sentencePairs.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCurrentScore(null);
      setScoreDetails(null);
      setRecognizedText('');
    } else {
      const avgScore = scores.length > 0
        ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
        : 0;
      saveCustomPracticeRecord({
        scenarioId: scenario?.id || '',
        scenarioLabel: scenario?.query || '自定义场景',
        totalSentences: sentencePairs.length,
        scores,
        averageScore: avgScore,
        bestScore: Math.max(...scores, 0),
        worstScore: Math.min(...scores, 100),
        completedAt: new Date().toISOString(),
      });
      setIsComplete(true);
    }
  }, [currentIndex, sentencePairs.length, scores, scenario]);

  const retrySentence = useCallback(() => {
    speakAbortRef.current = true;
    stopAllSpeech();
    pluginStopRef.current?.();
    pluginStopRef.current = null;
    setIsSpeaking(false);
    setSpeakRound(0);
    setSpeakPhase('');
    setCurrentScore(null);
    setScoreDetails(null);
    setRecognizedText('');
  }, []);

  // ─── Not found state ───
  if (!scenario) {
    return (
      <div className="space-y-6">
        <Card className="border-border/40">
          <CardContent className="p-12 flex flex-col items-center justify-center text-center">
            <div className="size-14 rounded-full bg-secondary/50 flex items-center justify-center mb-4">
              <Clapperboard className="size-6 text-muted-foreground" />
            </div>
            <p className="text-sm font-medium text-foreground mb-1">未找到该场景</p>
            <p className="text-xs text-muted-foreground mb-4">
              该场景可能已被删除或尚未添加到练习中
            </p>
            <Button variant="outline" size="sm" onClick={() => navigate('/')}>
              <Home className="size-4 mr-1.5" />
              返回首页
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // ─── No sentences state ───
  if (sentencePairs.length === 0) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
            <ArrowLeft className="size-5" />
          </Button>
          <div className="flex-1 min-w-0">
            <h1 className="text-xl font-bold text-foreground truncate">{scenario.query}</h1>
            {translatedTitle && (
              <p className="text-sm text-muted-foreground truncate">{translatedTitle}</p>
            )}
            {!translatedTitle && <p className="text-sm text-muted-foreground">自定义场景练习</p>}
          </div>
        </div>
        <Card className="border-border/40">
          <CardContent className="p-12 flex flex-col items-center justify-center text-center">
            <div className="size-14 rounded-full bg-secondary/50 flex items-center justify-center mb-4">
              <Clapperboard className="size-6 text-muted-foreground" />
            </div>
            <p className="text-sm font-medium text-foreground mb-1">未提取到练习句子</p>
            <p className="text-xs text-muted-foreground mb-4">
              AI 生成的内容中未能解析出英文句子，请尝试重新生成场景
            </p>
            <Button variant="outline" size="sm" onClick={() => navigate('/')}>
              <Home className="size-4 mr-1.5" />
              返回首页
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // ─── Practice Mode ───
  if (!isComplete && currentPair) {
    const progressPercent = ((currentIndex + 1) / sentencePairs.length) * 100;

    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
            <ArrowLeft className="size-5" />
          </Button>
          <div className="flex-1 min-w-0">
            <h1 className="text-xl font-bold text-foreground truncate">{scenario.query}</h1>
            {translatedTitle && (
              <p className="text-sm text-muted-foreground truncate">{translatedTitle}</p>
            )}
            {!translatedTitle && (
              <p className="text-sm text-muted-foreground">
                第 {currentIndex + 1} / {sentencePairs.length} 句
              </p>
            )}
          </div>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <Progress value={progressPercent} className="h-2" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>进度</span>
            <span>{Math.round(progressPercent)}%</span>
          </div>
        </div>

        {/* Sentence Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-border/40">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <Badge variant="outline" className="text-xs mb-3 border-primary/30 text-primary">
                      句子 {currentIndex + 1}
                    </Badge>
                    {/* English sentence with clickable words */}
                    <CardTitle className="text-2xl font-bold text-foreground leading-relaxed mb-2">
                      {currentPair.en.split(/(\s+)/).map((part, idx) => {
                        if (/^\s+$/.test(part)) return <span key={idx}>{part}</span>;
                        // Only extract Latin-letter English word
                        const rawWord = part.replace(/[^a-zA-Z'-]/g, '');
                        if (!rawWord || !/[a-zA-Z]/.test(rawWord)) return <span key={idx}>{part}</span>;
                        // If the part contains non-English characters (Chinese etc.), split visually
                        const hasNonEnglish = /[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef]/.test(part);
                        if (hasNonEnglish) {
                          // Find the English word portion and non-English prefix/suffix
                          const enMatch = part.match(/([a-zA-Z'-]+)/);
                          const prefix = part.slice(0, enMatch!.index!);
                          const suffix = part.slice(enMatch!.index! + enMatch![0].length);
                          return (
                            <span key={idx}>
                              {prefix}
                              <WordPopover
                                word={rawWord}
                                isFavorited={isFavorited(rawWord)}
                                onFavorite={(popData) => {
                                  const meaning = popData?.cn || '';
                                  const response = meaning
                                    ? `**${rawWord}** ${popData?.ipa || ''}\n\n${popData?.pos ? `*${popData.pos}* ` : ''}${meaning}`
                                    : `**${rawWord}**`;
                                  const saved = addFavorite(rawWord, response);
                                  if (saved) toast.success(`已收藏单词: ${rawWord}`);
                                  else toast.info(`"${rawWord}" 已收藏`);
                                }}
                              >
                                {enMatch![0]}
                              </WordPopover>
                              {suffix}
                            </span>
                          );
                        }
                        return (
                          <WordPopover
                            key={idx}
                            word={rawWord}
                            isFavorited={isFavorited(rawWord)}
                            onFavorite={(popData) => {
                              const meaning = popData?.cn || '';
                              const response = meaning
                                ? `**${rawWord}** ${popData?.ipa || ''}\n\n${popData?.pos ? `*${popData.pos}* ` : ''}${meaning}`
                                : `**${rawWord}**`;
                              const saved = addFavorite(rawWord, response);
                              if (saved) toast.success(`已收藏单词: ${rawWord}`);
                              else toast.info(`"${rawWord}" 已收藏`);
                            }}
                          >
                            {part}
                          </WordPopover>
                        );
                      })}
                    </CardTitle>

                    {/* Bookmark sentence */}
                    <button
                      type="button"
                      onClick={() => {
                        const response = `**${currentPair.en}**\n\n${currentPair.cn}`;
                        const saved = addFavorite(currentPair.en, response);
                        if (saved) toast.success('已收藏整句');
                        else toast.info('该句已收藏');
                      }}
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mt-1 mb-2"
                    >
                      {isFavorited(currentPair.en) ? (
                        <><BookmarkCheck className="size-3.5 text-primary" /><span>已收藏</span></>
                      ) : (
                        <><Bookmark className="size-3.5" /><span>收藏整句</span></>
                      )}
                    </button>

                    {/* Chinese translation */}
                    {currentPair.cn && currentPair.cn !== '(待补充翻译)' && (
                      <p className="text-base text-muted-foreground">{currentPair.cn}</p>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Listen / Stop + Next Buttons */}
                <div className="flex gap-2">
                  {isSpeaking ? (
                    <Button
                      variant="destructive"
                      onClick={stopSpeakingFn}
                      className="flex-1"
                    >
                      <Square className="size-4 mr-2 fill-current" />
                      停止播放

                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      onClick={speak}
                      disabled={isRecording}
                      className="flex-1"
                    >
                      <Volume2 className="size-4 mr-2" />
                      听标准发音
                    </Button>
                  )}
                  {/* Skip / Next button - always visible */}
                  <Button
                    variant="outline"
                    onClick={nextSentence}
                    disabled={isRecording || (currentScore !== null && currentScore < PASS_SCORE)}
                    className="shrink-0"
                    title={
                      currentScore !== null && currentScore < PASS_SCORE
                        ? `得分需达到 ${PASS_SCORE} 分才能进入下一句`
                        : currentIndex < sentencePairs.length - 1
                          ? '进入下一句'
                          : '完成练习'
                    }
                  >
                    {currentScore === null ? (
                      <><SkipForward className="size-4 mr-1" />跳过</>
                    ) : (
                      <><ArrowRight className="size-4 mr-1" />{currentIndex < sentencePairs.length - 1 ? '下一句' : '完成'}</>
                    )}
                  </Button>
                </div>

                {/* Pass threshold warning */}
                {currentScore !== null && currentScore < PASS_SCORE && (
                  <p className="text-xs text-orange-500 text-center">
                    得分需达到 {PASS_SCORE} 分以上才能进入下一句，请重试
                  </p>
                )}

                {/* Record Section */}
                <div className="space-y-3">
                  {!isRecording ? (
                    <Button
                      variant={currentScore !== null ? 'secondary' : 'default'}
                      onClick={startRecording}
                      disabled={isSpeaking}
                      className="w-full"
                      size="lg"
                    >
                      <Mic className="size-5 mr-2" />
                      {currentScore !== null ? '重新跟读' : '点击跟读'}
                    </Button>
                  ) : (
                    <Button
                      variant="destructive"
                      onClick={stopRecording}
                      className="w-full"
                      size="lg"
                    >
                      <MicOff className="size-5 mr-2" />
                      停止录音
                    </Button>
                  )}

                  {recognizedText && (
                    <div className="p-3 bg-secondary/50 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">识别结果:</p>
                      <p className="text-sm text-foreground">{recognizedText}</p>
                    </div>
                  )}

                  {currentScore !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                        <div className="flex items-center gap-2">
                          {currentScore >= 80 ? (
                            <CheckCircle2 className="size-5 text-green-500" />
                          ) : (
                            <XCircle className="size-5 text-orange-500" />
                          )}
                          <span className="font-semibold text-foreground">
                            {currentScore >= 80 ? '优秀' : currentScore >= 60 ? '良好' : '需要加强'}
                          </span>
                        </div>
                        <span className="text-2xl font-bold text-foreground tabular-nums">
                          {currentScore}
                        </span>
                      </div>

                      {/* Detailed feedback */}
                      {scoreDetails && currentScore < 100 && (
                        <div className="p-3 bg-secondary/20 rounded-lg space-y-2">
                          {scoreDetails.missedWords.length > 0 && (
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">
                                未正确读出的词 ({scoreDetails.missedWords.length} 个):
                              </p>
                              <div className="flex flex-wrap gap-1.5">
                                {scoreDetails.missedWords.map((w, i) => (
                                  <span
                                    key={`miss-${i}`}
                                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-mono bg-destructive/15 text-destructive border border-destructive/20"
                                  >
                                    <XCircle className="size-3" />
                                    {w}
                                  </span>
                                ))}
                              </div>
                              <p className="text-xs text-muted-foreground mt-1.5">
                                请重点练习以上单词的发音，注意每个音节清晰读出。
                              </p>
                            </div>
                          )}
                          {scoreDetails.extraWords.length > 0 && (
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">
                                多读的词 ({scoreDetails.extraWords.length} 个):
                              </p>
                              <div className="flex flex-wrap gap-1.5">
                                {scoreDetails.extraWords.map((w, i) => (
                                  <span
                                    key={`extra-${i}`}
                                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-mono bg-warning/15 text-warning border border-warning/20"
                                  >
                                    {w}
                                  </span>
                                ))}
                              </div>
                              <p className="text-xs text-muted-foreground mt-1.5">
                                这些词不在原句中，跟读时请严格按原文朗读。
                              </p>
                            </div>
                          )}
                          {scoreDetails.missedWords.length === 0 && scoreDetails.extraWords.length === 0 && currentScore < 100 && (
                            <p className="text-xs text-muted-foreground">
                              单词基本匹配，注意语调和连贯性可以进一步提升。
                            </p>
                          )}
                        </div>
                      )}

                      {/* Retry button */}
                      <Button variant="outline" onClick={retrySentence} className="w-full">
                        <RotateCcw className="size-4 mr-2" />
                        再试一次
                      </Button>
                    </motion.div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  // ─── Report Mode — lazy-load echarts chart component ───
  if (isComplete && scores.length > 0) {
    return (
      <PracticeReportView
        scores={scores}
        totalSentences={sentencePairs.length}
        sectionLabel={scenario.query}
        onRestart={() => {
          speakAbortRef.current = true;
          stopAllSpeech();
          pluginStopRef.current?.();
          pluginStopRef.current = null;
          setIsSpeaking(false);
          setSpeakRound(0);
          setSpeakPhase('');
          setCurrentIndex(0);
          setScores([]);
          setCurrentScore(null);
          setScoreDetails(null);
          setRecognizedText('');
          setIsComplete(false);
        }}
      />
    );
  }

  // Loading fallback
  return (
    <div className="space-y-6">
      <Card className="border-border/40">
        <CardContent className="p-12 text-center">
          <p className="text-muted-foreground">加载场景中...</p>
        </CardContent>
      </Card>
    </div>
  );
}

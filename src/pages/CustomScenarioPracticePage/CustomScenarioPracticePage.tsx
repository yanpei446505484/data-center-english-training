import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Volume2,
  CheckCircle2,
  Home,
  Clapperboard,
  Bookmark,
  BookmarkCheck,
  Square,
  Loader2,
  Globe,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import { aiChat } from '@/lib/ai-gateway';
import { logger } from '@/lib/app-logger';
import { preloadTTS, speakWithPlugin, stopAllSpeech, stripChinese, warmupAudio } from '@/lib/ttsPlugin';
import { lookupWordLocal, type ILocalWordResult } from '@/skills/dictionarySkill';
import { lookupTermsInSentence, lookupTerm, DICTIONARY_SOURCES } from '@/data/dcTermsDictionary';
import { toast } from 'sonner';
import {
  useFavorites,
  extractSentencePairsFromResponse,
  type ISentencePair,
} from '@/hooks/useFavorites';

// Module-level cache for AI-fetched word definitions
const aiWordCache = new Map<string, { cn: string; ipa: string; pos?: string }>();

// Module-level cache for AI sentence translations (en → cn)
const sentenceTranslationCache = new Map<string, string>();

// Module-level cache for scenario title translations
const scenarioTitleTranslationCache = new Map<string, string>();

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
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const speakAbortRef = useRef(false);
  const pluginStopRef = useRef<(() => void) | null>(null);
  const currentPair = translatedPairs[currentIndex] || sentencePairs[currentIndex];

  useEffect(() => {
    const nextPair = translatedPairs[currentIndex + 1] || sentencePairs[currentIndex + 1];
    if (!currentPair?.en) return;
    // Render the next sentence before doing any audio preparation.
    const timer = window.setTimeout(() => {
      void preloadTTS([currentPair.en, nextPair?.en || ''], 'british');
    }, 120);
    return () => window.clearTimeout(timer);
  }, [currentIndex, currentPair?.en, sentencePairs, translatedPairs]);

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

    await speakOne(enText, 'en-US', 0.85);

    setIsSpeaking(false);
  }, [currentPair, speakOne]);

  const nextSentence = useCallback(() => {
    speakAbortRef.current = true;
    stopAllSpeech();
    pluginStopRef.current?.();
    pluginStopRef.current = null;
    setIsSpeaking(false);
    if (currentIndex < sentencePairs.length - 1) {
      setCurrentIndex((value) => value + 1);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, sentencePairs.length]);

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
        <div key={currentIndex}>
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
                      className="flex-1"
                    >
                      <Volume2 className="size-4 mr-2" />
                      听标准发音
                    </Button>
                  )}
                  {/* Next button switches immediately; audio preloads afterwards. */}
                  <Button
                    variant="outline"
                    onClick={nextSentence}
                    className="shrink-0"
                    title={currentIndex < sentencePairs.length - 1 ? '进入下一句' : '完成学习'}
                  >
                    <ArrowRight className="size-4 mr-1" />
                    {currentIndex < sentencePairs.length - 1 ? '下一句' : '完成'}
                  </Button>
                </div>

              </CardContent>
            </Card>
        </div>
      </div>
    );
  }

  // Completion view: follow-reading scores and reports have been removed.
  if (isComplete) {
    return (
      <Card className="border-border/40">
        <CardContent className="p-12 text-center space-y-4">
          <CheckCircle2 className="size-12 text-primary mx-auto" />
          <div>
            <h1 className="text-xl font-bold text-foreground">本场景学习完成</h1>
            <p className="text-sm text-muted-foreground mt-1">已完成 {sentencePairs.length} 句学习</p>
          </div>
          <div className="flex justify-center gap-2">
            <Button variant="outline" onClick={() => navigate('/')}>返回首页</Button>
            <Button onClick={() => {
              setCurrentIndex(0);
              setIsComplete(false);
            }}>重新学习</Button>
          </div>
        </CardContent>
      </Card>
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

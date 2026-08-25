import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Shuffle,
  Check,
  X,
  BookOpen,
  Layers,
  Clapperboard,
  Volume2,
  Star,
} from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  SENTENCE_SECTIONS,
  MOCK_SENTENCES,
  type ISentence,
} from '@/data/sentenceLearning';
import { speakWithPlugin, stopAllSpeech, warmupAudio } from '@/lib/ttsPlugin';
import { storage } from '@/lib/storage';
import { userStorageKey } from '@/lib/userStorage';
import { useFavorites, extractSentencePairsFromResponse } from '@/hooks/useFavorites';
import { useHiddenScenarios } from '@/hooks/useHiddenScenarios';
import { recordFlashcardResult } from '@/hooks/useStudyProgress';

const STORAGE_KEY = 'flashcard_progress';

interface IFlashcardProgress {
  [sentenceId: number]: 'known' | 'unknown';
}

function loadProgress(): IFlashcardProgress {
  try {
    const raw = storage.getItem(userStorageKey(STORAGE_KEY));
    return raw ? (JSON.parse(raw) as IFlashcardProgress) : {};
  } catch {
    return {};
  }
}

function saveProgress(data: IFlashcardProgress) {
  storage.setItem(userStorageKey(STORAGE_KEY), JSON.stringify(data));
}

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

interface ICustomCard {
  en: string;
  cn: string;
  id: string; // unique per card
}

export default function FlashcardPage() {
  const { favorites, addSentenceFavorite } = useFavorites();
  const customScenarios = favorites.filter(f => f.type === 'scenario' && f.inPractice);
  const speakStopRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    return () => {
      if (speakStopRef.current) {
        speakStopRef.current();
        speakStopRef.current = null;
      }
      stopAllSpeech();
    };
  }, []);

  const speak = useCallback((text: string) => {
    if (!text?.trim()) return;
    warmupAudio();
    if (speakStopRef.current) {
      speakStopRef.current();
      speakStopRef.current = null;
    }
    const stopFn = speakWithPlugin(text, () => {
      if (speakStopRef.current === stopFn) {
        speakStopRef.current = null;
      }
    }, 'british');
    speakStopRef.current = stopFn;
  }, []);
  const [sectionIndex, setSectionIndex] = useState<number>(-1);
  const [customScenarioId, setCustomScenarioId] = useState<string | null>(null);
  const [customCards, setCustomCards] = useState<ICustomCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [shuffled, setShuffled] = useState(false);
  const [progress, setProgress] = useState<IFlashcardProgress>(loadProgress);
  const [displaySentences, setDisplaySentences] = useState<ISentence[]>([]);

  const { hiddenScenarios } = useHiddenScenarios();

  const allSections = useMemo(() => {
    return SENTENCE_SECTIONS.map((s, i) => ({ ...s, idx: i }))
      .filter((s) => !hiddenScenarios.includes(s.idx));
  }, [hiddenScenarios]);

  const startSection = useCallback(
    (idx: number) => {
      setSectionIndex(idx);
      setCustomScenarioId(null);
      setCustomCards([]);
      const sec = SENTENCE_SECTIONS[idx];
      if (!sec) return;
      const filtered = MOCK_SENTENCES.filter(
        (s) => s.id >= sec.range[0] && s.id <= sec.range[1],
      );
      setDisplaySentences(filtered);
      setCurrentIndex(0);
      setFlipped(false);
      setShuffled(false);
    },
    [],
  );

  const startCustomScenario = useCallback(
    (favId: string) => {
      const scenario = favorites.find(f => f.id === favId);
      if (!scenario) return;
      const pairs = extractSentencePairsFromResponse(scenario.aiResponse);
      if (pairs.length === 0) return;
      const cards: ICustomCard[] = pairs.map((p, i) => ({
        en: p.en,
        cn: p.cn,
        id: `${favId}_${i}`,
      }));
      setCustomScenarioId(favId);
      setCustomCards(cards);
      setSectionIndex(-1); // special mode
      setDisplaySentences([]);
      setCurrentIndex(0);
      setFlipped(false);
      setShuffled(false);
    },
    [favorites],
  );

  const handleShuffle = useCallback(() => {
    setDisplaySentences((prev) => shuffleArray(prev));
    setCurrentIndex(0);
    setFlipped(false);
    setShuffled(true);
  }, []);

  const handleReset = useCallback(() => {
    if (sectionIndex < 0) return;
    const sec = SENTENCE_SECTIONS[sectionIndex];
    const filtered = MOCK_SENTENCES.filter(
      (s) => s.id >= sec.range[0] && s.id <= sec.range[1],
    );
    setDisplaySentences(filtered);
    setCurrentIndex(0);
    setFlipped(false);
    setShuffled(false);
  }, [sectionIndex]);

  const current = displaySentences[currentIndex];
  const total = displaySentences.length;

  const sectionStats = useMemo(() => {
    let known = 0;
    let unknown = 0;
    displaySentences.forEach((s) => {
      const v = progress[s.id];
      if (v === 'known') known++;
      else if (v === 'unknown') unknown++;
    });
    return { known, unknown, total };
  }, [displaySentences, progress]);

  const markCard = useCallback(
    (status: 'known' | 'unknown') => {
      if (!current) return;
      const next = { ...progress, [current.id]: status };
      setProgress(next);
      saveProgress(next);
      recordFlashcardResult(current.id, status === 'known');
      if (status === 'unknown') {
        const added = addSentenceFavorite(current.en, current.cn);
        if (added) {
          toast.success('已自动收藏到「我的收藏」', {
            icon: <Star className="size-4 text-primary" />,
            duration: 2000,
          });
        }
      }
      setFlipped(false);
      if (currentIndex < total - 1) {
        setTimeout(() => setCurrentIndex((i) => i + 1), 200);
      }
    },
    [current, progress, currentIndex, total, addSentenceFavorite],
  );

  const goNext = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex((i) => i + 1);
      setFlipped(false);
    }
  };
  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      setFlipped(false);
    }
  };

  const overallKnown = Object.values(progress).filter((v) => v === 'known').length;
  const overallUnknown = Object.values(progress).filter((v) => v === 'unknown').length;
  const overallTotal = MOCK_SENTENCES.length;

  // ── Custom scenario flashcard view ──
  if (customScenarioId && customCards.length > 0) {
    const currentCustom = customCards[currentIndex];
    const scenarioTitle = favorites.find(f => f.id === customScenarioId)?.query || '自定义场景';
    const totalCustom = customCards.length;
    const customPct = totalCustom > 0 ? ((currentIndex + 1) / totalCustom) * 100 : 0;

    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => { setCustomScenarioId(null); setCustomCards([]); setCurrentIndex(0); setFlipped(false); }}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors shrink-0"
          >
            ← 返回
          </button>
          <div className="flex-1 min-w-0 text-center">
            <h2 className="text-sm font-semibold text-foreground truncate flex items-center justify-center gap-1.5">
              <Clapperboard className="size-4 text-primary" />
              {scenarioTitle}
            </h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              const shuffled = [...customCards].sort(() => Math.random() - 0.5);
              setCustomCards(shuffled);
              setCurrentIndex(0);
              setFlipped(false);
            }}
            className="text-muted-foreground"
          >
            <Shuffle className="size-4 mr-1" />
            打乱
          </Button>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-muted-foreground tabular-nums">
            <span>{currentIndex + 1} / {totalCustom}</span>
            <Badge variant="outline" className="text-xs border-primary/30 text-primary">自定义场景</Badge>
          </div>
          <Progress value={customPct} className="h-1.5" />
        </div>

        {/* Card */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl" style={{ perspective: '1200px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCustom.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={() => setFlipped(f => !f)}
                className="cursor-pointer select-none"
              >
                <motion.div
                  animate={{ rotateY: flipped ? 180 : 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front: English */}
                  <Card className="bg-card border-border/40 overflow-hidden" style={{ backfaceVisibility: 'hidden' }}>
                    <CardContent className="p-8 md:p-12 flex flex-col items-center justify-center min-h-[320px]">
                      <Badge variant="outline" className="mb-6 text-xs border-primary/30 text-primary">
                        <Clapperboard className="size-3 mr-1" />
                        场景对话
                      </Badge>
                      <p className="text-2xl md:text-3xl font-semibold text-foreground text-center leading-relaxed">
                        {currentCustom.en}
                      </p>
                      <p className="text-xs text-muted-foreground/60 mt-8">点击卡片翻转查看中文</p>
                    </CardContent>
                  </Card>

                  {/* Back: Chinese */}
                  <Card
                    className="bg-card border-border/40 overflow-hidden"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', position: 'absolute', top: 0, left: 0, right: 0 }}
                  >
                    <CardContent className="p-8 md:p-12 flex flex-col items-center justify-center min-h-[320px]">
                      <Badge variant="outline" className="mb-6 text-xs">中文释义</Badge>
                      <p className="text-xl md:text-2xl font-semibold text-foreground text-center leading-relaxed mb-4">
                        {currentCustom.cn}
                      </p>
                      <p className="text-sm text-muted-foreground text-center mt-4">{currentCustom.en}</p>
                      <p className="text-xs text-muted-foreground/60 mt-8">点击卡片翻回英文</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Nav buttons */}
        <div className="flex items-center justify-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => { if (currentIndex > 0) { setCurrentIndex(i => i - 1); setFlipped(false); } }} disabled={currentIndex <= 0} className="text-muted-foreground">
            <ChevronLeft className="size-5" />
          </Button>
          <span className="text-xs text-muted-foreground tabular-nums">{currentIndex + 1} / {totalCustom}</span>
          <Button variant="ghost" size="icon" onClick={() => { if (currentIndex < totalCustom - 1) { setCurrentIndex(i => i + 1); setFlipped(false); } }} disabled={currentIndex >= totalCustom - 1} className="text-muted-foreground">
            <ChevronRight className="size-5" />
          </Button>
        </div>
      </div>
    );
  }

  // ── 主题选择视图 ──
  if (sectionIndex < 0) {
    return (
      <div className="space-y-6">
        {/* 总览统计 */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="bg-card border-border/40">
            <CardContent className="flex items-center gap-3 p-4">
              <div className="size-9 rounded-md bg-primary/15 flex items-center justify-center shrink-0">
                <BookOpen className="size-4 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">总句子数</p>
                <p className="text-xl font-bold text-foreground tabular-nums">
                  {overallTotal}
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border/40">
            <CardContent className="flex items-center gap-3 p-4">
              <div className="size-9 rounded-md bg-success/15 flex items-center justify-center shrink-0">
                <Check className="size-4 text-success" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">已掌握</p>
                <p className="text-xl font-bold text-success tabular-nums">
                  {overallKnown}
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border/40">
            <CardContent className="flex items-center gap-3 p-4">
              <div className="size-9 rounded-md bg-destructive/15 flex items-center justify-center shrink-0">
                <X className="size-4 text-destructive" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">待加强</p>
                <p className="text-xl font-bold text-destructive tabular-nums">
                  {overallUnknown}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 主题选择 */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Layers className="size-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">选择学习主题</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {allSections.map((sec) => {
              const secSentences = MOCK_SENTENCES.filter(
                (s) => s.id >= sec.range[0] && s.id <= sec.range[1],
              );
              const secKnown = secSentences.filter(
                (s) => progress[s.id] === 'known',
              ).length;
              const secUnknown = secSentences.filter(
                (s) => progress[s.id] === 'unknown',
              ).length;
              const pct =
                secSentences.length > 0
                  ? Math.round((secKnown / secSentences.length) * 100)
                  : 0;

              return (
                <button
                  key={sec.idx}
                  onClick={() => startSection(sec.idx)}
                  className="text-left rounded-lg border border-border/40 bg-card p-4 hover-elevate transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-sm font-medium text-foreground line-clamp-2">
                      {sec.label}
                    </span>
                    <Badge variant="outline" className="shrink-0 text-xs tabular-nums">
                      {secSentences.length}
                    </Badge>
                  </div>
                  {pct > 0 && (
                    <div className="space-y-1">
                      <Progress value={pct} className="h-1.5" />
                      <div className="flex justify-between text-xs text-muted-foreground tabular-nums">
                        <span>
                          {secKnown} 掌握 · {secUnknown} 待加强
                        </span>
                        <span>{pct}%</span>
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Custom scenarios from favorites */}
        {customScenarios.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clapperboard className="size-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">我的场景</h2>
              <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                {customScenarios.length}
              </Badge>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {customScenarios.map((fav) => {
                const pairs = extractSentencePairsFromResponse(fav.aiResponse);
                return (
                  <button
                    key={fav.id}
                    onClick={() => startCustomScenario(fav.id)}
                    className="text-left rounded-lg border border-primary/20 bg-primary/5 p-4 hover-elevate transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                        {fav.query}
                      </span>
                      <Badge variant="outline" className="shrink-0 text-xs tabular-nums border-primary/30 text-primary">
                        {pairs.length}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">AI 生成场景 · {pairs.length} 句</p>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  // ── 闪卡学习视图 ──
  if (!current || total === 0) {
    return (
      <div className="space-y-6">
        <button
          onClick={() => setSectionIndex(-1)}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← 返回主题列表
        </button>
        <Card className="bg-card border-border/40">
          <CardContent className="flex flex-col items-center justify-center py-20">
            <BookOpen className="size-10 text-muted-foreground mb-3" />
            <p className="text-muted-foreground">该主题暂无句子</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const sec = SENTENCE_SECTIONS[sectionIndex];
  const cardStatus = progress[current.id];
  const progressPct = total > 0 ? ((currentIndex + 1) / total) * 100 : 0;

  return (
    <div className="space-y-6">
      {/* 顶部导航 */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={() => setSectionIndex(-1)}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors shrink-0"
        >
          ← 返回
        </button>
        <div className="flex-1 min-w-0 text-center">
          <h2 className="text-sm font-semibold text-foreground truncate">
            {sec.label}
          </h2>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleShuffle}
            className="text-muted-foreground"
          >
            <Shuffle className="size-4 mr-1" />
            打乱
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleReset}
            className="text-muted-foreground"
          >
            <RotateCcw className="size-4 mr-1" />
            重置
          </Button>
        </div>
      </div>

      {/* 进度条 */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-muted-foreground tabular-nums">
          <span>
            {currentIndex + 1} / {total}
            {shuffled && (
              <Badge variant="secondary" className="ml-2 text-[10px]">
                已打乱
              </Badge>
            )}
          </span>
          <span>
            掌握 {sectionStats.known} · 待加强 {sectionStats.unknown}
          </span>
        </div>
        <Progress value={progressPct} className="h-1.5" />
      </div>

      {/* 闪卡 */}
      <div className="flex justify-center">
        <div className="w-full max-w-2xl" style={{ perspective: '1200px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={() => setFlipped((f) => !f)}
              className="cursor-pointer select-none"
            >
              <motion.div
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* 正面：英文 */}
                <Card
                  className="bg-card border-border/40 overflow-hidden"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <CardContent className="p-8 md:p-12 flex flex-col items-center justify-center min-h-[320px]">

                    <div className="flex items-center gap-3 mb-4">
                      <p className="text-2xl md:text-3xl font-semibold text-foreground text-center leading-relaxed">
                        {current.en}
                      </p>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="shrink-0 size-10"
                        onClick={(e) => {
                          e.stopPropagation();
                          speak(current.en);
                        }}
                        aria-label="朗读英文"
                      >
                        <Volume2 className="size-5" />
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground font-mono tabular-nums">
                      {current.ipa}
                    </p>
                    {cardStatus && (
                      <Badge
                        variant={cardStatus === 'known' ? 'default' : 'destructive'}
                        className="mt-6"
                      >
                        {cardStatus === 'known' ? '✓ 已掌握' : '✗ 待加强'}
                      </Badge>
                    )}
                    <p className="text-xs text-muted-foreground/60 mt-8">
                      点击卡片翻转查看中文
                    </p>
                  </CardContent>
                </Card>

                {/* 背面：中文 */}
                <Card
                  className="bg-card border-border/40 overflow-hidden"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                  }}
                  aria-hidden={!flipped}
                >
                  {/* 占位层：与背面内容结构一致但 invisible，确保父容器高度适配 */}
                  <div aria-hidden className="invisible">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs">#</span>
                      <span className="text-[10px]">中文释义</span>
                    </div>
                    <p className="text-xl md:text-2xl font-semibold mb-2">占位</p>
                    <p className="text-sm mb-4">占位</p>
                    {current.when && (
                      <div className="rounded-md p-3 mb-4"><p className="text-xs leading-relaxed">占位场景</p></div>
                    )}

                    {current.words && current.words.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-auto"><span className="text-xs">占位词汇</span></div>
                    )}
                    <p className="text-xs mt-4 text-center">占位</p>
                  </div>
                  <CardContent className="p-8 md:p-12 flex flex-col min-h-[320px] absolute inset-0">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="outline" className="text-xs">
                        #{current.id}
                      </Badge>
                      <Badge variant="secondary" className="text-[10px]">
                        中文释义
                      </Badge>
                    </div>

                    {/* 中文翻译 */}
                    <p className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                      {current.cn}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {current.en}
                    </p>

                    {/* 使用场景 */}
                    {current.when && (
                      <div className="rounded-md bg-muted/30 border border-border/20 p-3 mb-4">
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          📋 {current.when}
                        </p>
                      </div>
                    )}


                    {/* 重点词汇 */}
                    {current.words?.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {current.words.slice(0, 5).map((w) => (
                          <Badge
                            key={w.w}
                            variant="outline"
                            className="text-xs"
                          >
                            {w.w} · {w.cn}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <p className="text-xs text-muted-foreground/60 mt-4 text-center">
                      点击卡片翻回英文
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 操作按钮 */}
      <div className="flex items-center justify-center gap-4">
        <Button
          variant="outline"
          size="lg"
          onClick={() => markCard('unknown')}
          className="gap-2 border-destructive/40 text-destructive hover:bg-destructive/10"
        >
          <X className="size-5" />
          不认识
        </Button>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={goPrev}
            disabled={currentIndex <= 0}
            className="text-muted-foreground"
          >
            <ChevronLeft className="size-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={goNext}
            disabled={currentIndex >= total - 1}
            className="text-muted-foreground"
          >
            <ChevronRight className="size-5" />
          </Button>
        </div>

        <Button
          variant="outline"
          size="lg"
          onClick={() => markCard('known')}
          className="gap-2 border-success/40 text-success hover:bg-success/10"
        >
          <Check className="size-5" />
          认识
        </Button>
      </div>

      {/* 底部提示 */}
      <div className="text-center text-xs text-muted-foreground/50">
        点击卡片翻转 · 左右箭头切换 · 快捷键：← → 切换 · 空格翻转
      </div>
    </div>
  );
}

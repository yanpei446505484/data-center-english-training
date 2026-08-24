import { useState, useMemo, useCallback, memo, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  Star,
  Trash2,
  BookOpen,
  MessageSquare,
  Type,
  Clock,
  Search,
  X,
  ArrowLeft,
  Clapperboard,
  Play,
  PlayCircle,
  Headphones,
  StopCircle,
  Volume2,
} from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useFavorites, type IFavorite } from '@/hooks/useFavorites';
import { speakWithPlugin, stopAllSpeech, warmupAudio } from '@/lib/ttsPlugin';

type FilterType = 'all' | 'word' | 'phrase' | 'sentence';

const TYPE_CONFIG: Record<string, { label: string; icon: typeof Type; color: string }> = {
  word: { label: '单词', icon: Type, color: 'bg-info/15 text-info border-info/30' },
  phrase: { label: '短语', icon: MessageSquare, color: 'bg-warning/15 text-warning border-warning/30' },
  sentence: { label: '句子', icon: BookOpen, color: 'bg-success/15 text-success border-success/30' },
  scenario: { label: '场景', icon: Clapperboard, color: 'bg-primary/15 text-primary border-primary/30' },
};

function formatTime(iso: string): string {
  const d = new Date(iso);
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffMin = Math.floor(diffMs / 60000);
  if (diffMin < 1) return '刚刚';
  if (diffMin < 60) return `${diffMin} 分钟前`;
  const diffHour = Math.floor(diffMin / 60);
  if (diffHour < 24) return `${diffHour} 小时前`;
  const diffDay = Math.floor(diffHour / 24);
  if (diffDay < 7) return `${diffDay} 天前`;
  return d.toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' });
}

function getExcerpt(text: string, maxLen: number): string {
  const plain = text
    .replace(/#{1,6}\s/g, '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/`(.*?)`/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\n+/g, ' ')
    .trim();
  return plain.length > maxLen ? plain.slice(0, maxLen) + '…' : plain;
}

export default function FavoritesPage() {
  const navigate = useNavigate();
  const { favorites, removeFavorite, clearAll, togglePractice } = useFavorites();
  const [activeTab, setActiveTab] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [intensivePlayingId, setIntensivePlayingId] = useState<string | null>(null);
  const intensiveAbortRef = useRef<(() => void) | null>(null);

  const filtered = useMemo(() => {
    // 过滤掉已从练习列表移除的自定义场景 (inPractice === false)
    let list = favorites.filter(f => f.type !== 'scenario' || f.inPractice);
    if (activeTab !== 'all') {
      list = list.filter((f) => f.type === activeTab);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      list = list.filter(
        (f) =>
          f.query.toLowerCase().includes(q) ||
          f.aiResponse.toLowerCase().includes(q)
      );
    }
    return list.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }, [favorites, activeTab, searchQuery]);

  const counts = useMemo(() => {
    // 统计时也排除已从练习列表移除的场景
    const activeFavs = favorites.filter(f => f.type !== 'scenario' || f.inPractice);
    const all = activeFavs.length;
    const word = activeFavs.filter((f) => f.type === 'word').length;
    const phrase = activeFavs.filter((f) => f.type === 'phrase').length;
    const sentence = activeFavs.filter((f) => f.type === 'sentence').length;
    return { all, word, phrase, sentence };
  }, [favorites]);

  const handleRemove = useCallback(
    (id: string) => {
      removeFavorite(id);
      if (expandedId === id) setExpandedId(null);
    },
    [removeFavorite, expandedId]
  );

  const handleClearAll = useCallback(() => {
    clearAll();
    setExpandedId(null);
  }, [clearAll]);

  const toggleExpand = useCallback((id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  }, []);

  // Intensive listening/reading (暴力听读) - loops infinitely until manually stopped
  const playIntensive = useCallback(async (favorite: IFavorite) => {
    // 手势上下文同步解锁音频（iOS），首轮 speakOnce 在同步段内发声
    warmupAudio();
    // Stop any current intensive playback
    if (intensiveAbortRef.current) {
      intensiveAbortRef.current();
      intensiveAbortRef.current = null;
    }

    if (intensivePlayingId === favorite.id) {
      setIntensivePlayingId(null);
      stopAllSpeech();
      return;
    }

    const textToPlay = favorite.type === 'sentence'
      ? favorite.query
      : favorite.query;

    if (!textToPlay?.trim()) return;

    setIntensivePlayingId(favorite.id);
    toast.info(`开始暴力听读: ${textToPlay.slice(0, 30)}... (点击停止按钮结束)`, { duration: 3000 });

    let aborted = false;
    let resolveSpeak: (() => void) | null = null;
    intensiveAbortRef.current = () => {
      aborted = true;
      stopAllSpeech();
      if (resolveSpeak) {
        resolveSpeak();
        resolveSpeak = null;
      }
    };

    const speakOnce = (): Promise<void> => {
      return new Promise((resolve) => {
        if (aborted) {
          resolve();
          return;
        }
        resolveSpeak = () => resolve();
        speakWithPlugin(textToPlay, () => {
          resolveSpeak = null;
          resolve();
        }, 'british');
      });
    };

    const wait = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

    let fastFailCount = 0;
    try {
      while (!aborted) {
        const startAt = Date.now();
        await speakOnce();
        if (aborted) break;
        if (Date.now() - startAt < 300) {
          fastFailCount++;
          if (fastFailCount >= 3) {
            toast.error('当前环境无法朗读，请检查语音插件配置');
            break;
          }
        } else {
          fastFailCount = 0;
        }
        await wait(800);
      }
    } catch (err) {
      // silently handle errors
    } finally {
      stopAllSpeech();
      setIntensivePlayingId(null);
      intensiveAbortRef.current = null;
    }
  }, [intensivePlayingId]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intensiveAbortRef.current) {
        intensiveAbortRef.current();
      }
      stopAllSpeech();
    };
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <Button variant="ghost" size="icon" className="shrink-0" onClick={() => navigate('/')}>
            <ArrowLeft className="size-5" />
          </Button>
          <div className="min-w-0">
            <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Star className="size-5 text-primary" />
              我的收藏
            </h1>
            <p className="text-sm text-muted-foreground mt-0.5 truncate">
              AI 查询的单词、短语、句子和场景
            </p>
          </div>
        </div>
        {favorites.length > 0 && (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" size="sm" className="shrink-0 text-destructive border-destructive/30 hover:bg-destructive/10">
                <Trash2 className="size-3.5 mr-1.5" />
                清空全部
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>确认清空所有收藏？</AlertDialogTitle>
                <AlertDialogDescription>
                  此操作将删除全部 {favorites.length} 条收藏记录，且无法恢复。
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>取消</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleClearAll}
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                  确认清空
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="搜索收藏内容…"
          className="pl-9 bg-background"
        />
        {searchQuery && (
          <Button
            size="icon"
            variant="ghost"
            className="!absolute right-1.5 top-1/2 z-20 h-7 w-7 -translate-y-1/2"
            onClick={() => setSearchQuery('')}
            aria-label="清除"
          >
            <X className="size-4" />
          </Button>
        )}
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as FilterType)}>
        <TabsList className="bg-secondary/50">
          <TabsTrigger value="all">
            全部
            <Badge variant="secondary" className="ml-1.5 text-xs px-1.5 py-0 h-4">
              {counts.all}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="word">
            单词
            <Badge variant="secondary" className="ml-1.5 text-xs px-1.5 py-0 h-4">
              {counts.word}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="phrase">
            短语
            <Badge variant="secondary" className="ml-1.5 text-xs px-1.5 py-0 h-4">
              {counts.phrase}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="sentence">
            句子
            <Badge variant="secondary" className="ml-1.5 text-xs px-1.5 py-0 h-4">
              {counts.sentence}
            </Badge>
          </TabsTrigger>

        </TabsList>

        <TabsContent value={activeTab} className="mt-4">
          {filtered.length === 0 ? null : (
            <div className="space-y-3">
              {filtered.map((fav) => (
                <FavoriteCard
                  key={fav.id}
                  favorite={fav}
                  isExpanded={expandedId === fav.id}
                  isIntensivePlaying={intensivePlayingId === fav.id}
                  onToggle={() => toggleExpand(fav.id)}
                  onRemove={() => handleRemove(fav.id)}
                  onTogglePractice={() => {
                    togglePractice(fav.id);
                    toast.success(fav.inPractice ? '已从练习列表移除' : '已添加到场景练习');
                  }}
                  onPractice={() => navigate(`/custom-practice/${fav.id}`)}
                  onIntensivePlay={() => playIntensive(fav)}
                />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

const FavoriteCard = memo(function FavoriteCard({
  favorite,
  isExpanded,
  isIntensivePlaying,
  onToggle,
  onRemove,
  onTogglePractice,
  onPractice,
  onIntensivePlay,
}: {
  favorite: IFavorite;
  isExpanded: boolean;
  isIntensivePlaying?: boolean;
  onToggle: () => void;
  onRemove: () => void;
  onTogglePractice?: () => void;
  onPractice?: () => void;
  onIntensivePlay?: () => void;
}) {
  const config = TYPE_CONFIG[favorite.type] || TYPE_CONFIG.word;
  const Icon = config.icon;

  return (
    <Card className="border-border/40 hover:border-border/60 transition-colors">
      <CardContent className="p-4">
        {/* Top row: type badge + query + actions */}
        <div className="flex items-start gap-3 min-w-0">
          <Badge variant="outline" className={`shrink-0 text-xs ${config.color}`}>
            <Icon className="size-3 mr-1" />
            {config.label}
          </Badge>
          <div className="flex-1 min-w-0">
            <button
              className="w-full text-left group"
              onClick={onToggle}
            >
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
                {favorite.query}
              </p>
              {!isExpanded && (
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                  {getExcerpt(favorite.aiResponse, 120)}
                </p>
              )}
            </button>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            {/* Intensive listening button for word/phrase/sentence */}
            {favorite.type !== 'scenario' && onIntensivePlay && (
              <Button
                variant="ghost"
                size="icon"
                className={`h-7 w-7 ${isIntensivePlaying ? 'text-primary animate-pulse' : 'text-muted-foreground hover:text-primary'}`}
                onClick={onIntensivePlay}
                title={isIntensivePlaying ? '停止听读' : '暴力听读 (无限循环)'}
              >
                {isIntensivePlaying ? <StopCircle className="size-3.5" /> : <Headphones className="size-3.5" />}
              </Button>
            )}
            {favorite.type === 'scenario' && (
              <>
                {favorite.inPractice ? (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 text-primary hover:text-primary"
                    onClick={onPractice}
                    title="开始练习"
                  >
                    <PlayCircle className="size-3.5" />
                  </Button>
                ) : null}
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-7 w-7 ${favorite.inPractice ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
                  onClick={onTogglePractice}
                  title={favorite.inPractice ? '从练习列表移除' : '添加到场景练习'}
                >
                  <Play className="size-3.5" />
                </Button>
              </>
            )}
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="size-3" />
              {formatTime(favorite.createdAt)}
            </span>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 text-muted-foreground hover:text-destructive"
                >
                  <Trash2 className="size-3.5" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>删除收藏？</AlertDialogTitle>
                  <AlertDialogDescription>
                    将删除「{favorite.query}」的收藏记录。
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>取消</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={onRemove}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  >
                    删除
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>

        {/* Expanded: full AI response */}
        {isExpanded && (
          <div className="mt-3 pt-3 border-t border-border/20 space-y-3">
            <div className="prose prose-sm max-w-none prose-invert prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-foreground prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1 prose-code:rounded">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {favorite.aiResponse}
              </ReactMarkdown>
            </div>
            {favorite.type === 'scenario' && favorite.inPractice && (
              <div className="pt-2">
                <Button size="sm" className="gap-1.5" onClick={onPractice}>
                  <PlayCircle className="size-3.5" />
                  开始练习
                </Button>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
});

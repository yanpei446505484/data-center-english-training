import { useState, useMemo, useCallback } from 'react';
import {
  BookX,
  Trash2,
  CheckCircle2,
  XCircle,
  Search,
  ListChecks,
  ToggleLeft,
  Type,
  Headphones,
  Link2,
  RotateCcw,
  Eye,
  EyeOff,
  Languages,
  MessageSquareText,
  HelpCircle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
import { toast } from 'sonner';
import { useWrongBook, type IWrongBookItem, type WrongBookQuestionType } from '@/hooks/useWrongBook';

const TYPE_META: Record<WrongBookQuestionType, { label: string; icon: typeof ListChecks; color: string }> = {
  choice:    { label: '选择题', icon: ListChecks, color: 'text-blue-400 bg-blue-400/10' },
  truefalse: { label: '判断题', icon: ToggleLeft, color: 'text-amber-400 bg-amber-400/10' },
  fillblank: { label: '填空题', icon: Type,         color: 'text-purple-400 bg-purple-400/10' },
  listen:    { label: '听力题', icon: Headphones,   color: 'text-teal-400 bg-teal-400/10' },
  matching:  { label: '连线题', icon: Link2,        color: 'text-rose-400 bg-rose-400/10' },
  word_choice:    { label: '单词题', icon: Languages, color: 'text-emerald-400 bg-emerald-400/10' },
  phrase_choice:  { label: '词组句型', icon: MessageSquareText, color: 'text-cyan-400 bg-cyan-400/10' },
  grammar_choice: { label: '语法题', icon: HelpCircle, color: 'text-orange-400 bg-orange-400/10' },
};

type FilterType = 'all' | WrongBookQuestionType;

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

export default function WrongBookPage() {
  const {
    wrongAnswers,
    removeWrongAnswer,
    toggleMastered,
    clearAll,
    clearMastered,
  } = useWrongBook();

  const [activeTab, setActiveTab] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showMastered, setShowMastered] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Filtered list
  const filtered = useMemo(() => {
    let list = wrongAnswers;
    if (!showMastered) {
      list = list.filter(i => !i.mastered);
    }
    if (activeTab !== 'all') {
      list = list.filter(i => i.questionType === activeTab);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      list = list.filter(i =>
        i.question.toLowerCase().includes(q) ||
        i.sentenceEn.toLowerCase().includes(q) ||
        i.sentenceCn.includes(searchQuery.trim()) ||
        i.correctAnswer.toLowerCase().includes(q) ||
        i.topicLabel.toLowerCase().includes(q)
      );
    }
    return list.sort((a, b) => {
      if (a.mastered !== b.mastered) return a.mastered ? 1 : -1;
      return new Date(b.lastWrongAt).getTime() - new Date(a.lastWrongAt).getTime();
    });
  }, [wrongAnswers, activeTab, searchQuery, showMastered]);

  // Stats
  const stats = useMemo(() => {
    const total = wrongAnswers.length;
    const mastered = wrongAnswers.filter(i => i.mastered).length;
    return { total, mastered, unmastered: total - mastered };
  }, [wrongAnswers]);

  // Type counts
  const typeCounts = useMemo(() => {
    const counts: Record<string, number> = { all: wrongAnswers.length };
    for (const item of wrongAnswers) {
      counts[item.questionType] = (counts[item.questionType] || 0) + 1;
    }
    return counts;
  }, [wrongAnswers]);

  const handleDelete = useCallback((id: string) => {
    removeWrongAnswer(id);
    if (expandedId === id) setExpandedId(null);
    toast.success('已从错题本移除');
  }, [removeWrongAnswer, expandedId]);

  const handleToggleMastered = useCallback((id: string) => {
    const item = wrongAnswers.find(i => i.id === id);
    toggleMastered(id);
    if (item) {
      toast.success(item.mastered ? '已移回未掌握' : '已标记为掌握');
    }
  }, [wrongAnswers, toggleMastered]);

  const handleClearAll = useCallback(() => {
    clearAll();
    setExpandedId(null);
    toast.success('错题本已清空');
  }, [clearAll]);

  const handleClearMastered = useCallback(() => {
    const count = wrongAnswers.filter(i => i.mastered).length;
    clearMastered();
    setExpandedId(null);
    toast.success(`已清除 ${count} 条已掌握记录`);
  }, [wrongAnswers, clearMastered]);

  const toggleExpand = useCallback((id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  }, []);

  // ── Empty State ──
  if (wrongAnswers.length === 0) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <BookX className="size-6 text-primary" />
          <div>
            <h1 className="text-xl font-bold text-foreground">错题本</h1>
            <p className="text-sm text-muted-foreground mt-0.5">自测挑战中答错的题目会自动收录</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="size-20 rounded-full bg-secondary/50 flex items-center justify-center mb-5">
            <CheckCircle2 className="size-10 text-muted-foreground/50" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">错题本为空</h3>
          <p className="text-sm text-muted-foreground max-w-xs">
            还没有错题记录。完成自测挑战后，答错的题目会自动加入错题本。
          </p>
        </div>
      </div>
    );
  }

  // ── Main Content ──
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3 min-w-0">
          <BookX className="size-6 text-primary shrink-0" />
          <div className="min-w-0">
            <h1 className="text-xl font-bold text-foreground">错题本</h1>
            <p className="text-sm text-muted-foreground mt-0.5 truncate">
              共 {stats.total} 题 · {stats.unmastered} 待巩固 · {stats.mastered} 已掌握
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowMastered(!showMastered)}
            className="gap-1.5"
          >
            {showMastered ? <Eye className="size-3.5" /> : <EyeOff className="size-3.5" />}
            {showMastered ? '隐藏已掌握' : '显示已掌握'}
          </Button>
          {stats.mastered > 0 && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" size="sm" className="gap-1.5 text-muted-foreground">
                  <RotateCcw className="size-3.5" />
                  清除已掌握
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>清除已掌握记录？</AlertDialogTitle>
                  <AlertDialogDescription>
                    将移除 {stats.mastered} 条已标记为掌握的错题记录，未掌握的题目不受影响。
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>取消</AlertDialogCancel>
                  <AlertDialogAction onClick={handleClearMastered}>
                    确认清除
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1.5 text-destructive border-destructive/30 hover:bg-destructive/10">
                <Trash2 className="size-3.5" />
                清空全部
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>确认清空错题本？</AlertDialogTitle>
                <AlertDialogDescription>
                  此操作将删除全部 {stats.total} 条错题记录，且无法恢复。
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
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="搜索题目、句子、主题…"
          className="pl-9 bg-background"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2 size-7"
            onClick={() => setSearchQuery('')}
          >
            <XCircle className="size-3.5" />
          </Button>
        )}
      </div>

      {/* Type Filter Tabs */}
      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as FilterType)}>
        <TabsList className="bg-secondary/40">
          <TabsTrigger value="all" className="text-xs gap-1">
            全部
            <span className="text-[10px] opacity-60">({typeCounts.all || 0})</span>
          </TabsTrigger>
          {(Object.keys(TYPE_META) as WrongBookQuestionType[]).map(type => {
            const meta = TYPE_META[type];
            const count = typeCounts[type] || 0;
            if (count === 0) return null;
            return (
              <TabsTrigger key={type} value={type} className="text-xs gap-1">
                {meta.label}
                <span className="text-[10px] opacity-60">({count})</span>
              </TabsTrigger>
            );
          })}
        </TabsList>
      </Tabs>

      {/* List */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <XCircle className="size-10 text-muted-foreground/40 mx-auto mb-3" />
          <p className="text-sm text-muted-foreground">
            {searchQuery ? '没有找到匹配的错题' : showMastered ? '该分类下暂无错题' : '所有错题都已掌握 🎉'}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => {
              const meta = TYPE_META[item.questionType];
              const TIcon = meta.icon;
              const isExpanded = expandedId === item.id;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2, delay: Math.min(idx * 0.03, 0.15) }}
                >
                  <Card
                    className={`border-border/40 transition-colors ${
                      item.mastered
                        ? 'opacity-60 border-success/20'
                        : 'hover:border-primary/30'
                    }`}
                  >
                    <CardContent className="p-0">
                      {/* Collapsed Row */}
                      <button
                        type="button"
                        className="w-full text-left p-4 flex items-start gap-3 cursor-pointer"
                        onClick={() => toggleExpand(item.id)}
                      >
                        <div className={`size-8 shrink-0 rounded-md flex items-center justify-center mt-0.5 ${
                          item.mastered ? 'bg-success/15' : 'bg-destructive/15'
                        }`}>
                          {item.mastered
                            ? <CheckCircle2 className="size-4 text-success" />
                            : <XCircle className="size-4 text-destructive" />
                          }
                        </div>

                        <div className="flex-1 min-w-0 space-y-1.5">
                          <div className="flex items-center gap-2 flex-wrap">
                            <Badge variant="outline" className={`text-[10px] px-1.5 ${meta.color}`}>
                              <TIcon className="size-2.5 mr-0.5" />
                              {meta.label}
                            </Badge>
                            <span className="text-[10px] text-muted-foreground">{item.topicLabel}</span>
                            {item.wrongCount > 1 && (
                              <Badge variant="outline" className="text-[10px] px-1.5 text-destructive border-destructive/30">
                                错 {item.wrongCount} 次
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-foreground truncate">{item.question}</p>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span className="truncate max-w-[200px]">{item.sentenceEn}</span>
                            <span className="shrink-0">·</span>
                            <span className="shrink-0">{formatTime(item.lastWrongAt)}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1 shrink-0" onClick={(e) => e.stopPropagation()}>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-8"
                            onClick={() => handleToggleMastered(item.id)}
                            title={item.mastered ? '取消掌握' : '标记已掌握'}
                          >
                            {item.mastered
                              ? <RotateCcw className="size-3.5 text-muted-foreground" />
                              : <CheckCircle2 className="size-3.5 text-success" />
                            }
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-8 text-destructive hover:text-destructive"
                            onClick={() => handleDelete(item.id)}
                            title="删除"
                          >
                            <Trash2 className="size-3.5" />
                          </Button>
                        </div>
                      </button>

                      {/* Expanded Detail */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 pb-4 space-y-3 border-t border-border/20">
                              <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="p-3 rounded-md bg-destructive/5 border border-destructive/15">
                                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">你的答案</p>
                                  <p className="text-sm text-destructive">{item.userAnswer || '（未作答）'}</p>
                                </div>
                                <div className="p-3 rounded-md bg-success/5 border border-success/15">
                                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">正确答案</p>
                                  <p className="text-sm text-success">{item.correctAnswer}</p>
                                </div>
                              </div>

                              <div className="p-3 rounded-md bg-secondary/30 space-y-1">
                                <p className="text-sm text-foreground">{item.sentenceEn}</p>
                                <p className="text-sm text-muted-foreground">{item.sentenceCn}</p>
                              </div>

                              <div className="flex items-center gap-4 text-[10px] text-muted-foreground">
                                <span>首次错误: {formatTime(item.createdAt)}</span>
                                <span>最近错误: {formatTime(item.lastWrongAt)}</span>
                                <span>累计错误: {item.wrongCount} 次</span>
                                {item.masteredAt && <span>掌握时间: {formatTime(item.masteredAt)}</span>}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

import { useState, useMemo, useCallback } from 'react';
import {
  Calendar,
  Flame,
  Target,
  TrendingUp,
  BookOpen,
  AlertTriangle,
  RotateCcw,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ReactECharts from 'echarts-for-react';
import { toast } from 'sonner';
import { dbClearUserData } from '@/lib/db';
import type { EChartsOption } from 'echarts';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
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
import { SENTENCE_SECTIONS, MOCK_SENTENCES, type ISentence } from '@/data/sentenceLearning';
import { storage } from '@/lib/storage';
import { userStorageKey } from '@/lib/userStorage';

// ── Progress data loader (returns empty when no real learning data exists) ──
function getOrCreateProgress() {
  const key = userStorageKey('dc_english_progress');
  const raw = storage.getItem(key);
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') return parsed;
    } catch { /* fall through */ }
  }
  // Return clean empty state — no mock data; real learning activities will populate this
  const empty = {
    learned: {} as Record<number, { correct: number; wrong: number; lastReview: string }>,
    streakDays: 0,
    checkinDates: [] as string[],
  };
  storage.setItem(key, JSON.stringify(empty));
  return empty;
}

interface IProgressData {
  learned: Record<number, { correct: number; wrong: number; lastReview: string }>;
  streakDays: number;
  checkinDates: string[];
}

export default function ProgressPage() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState<IProgressData>(() => getOrCreateProgress());
  const [activeTab, setActiveTab] = useState('overview');

  const stats = useMemo(() => {
    const entries = Object.values(progress.learned) as { correct: number; wrong: number }[];
    const totalLearned = entries.length;
    const totalCorrect = entries.reduce((s, e) => s + e.correct, 0);
    const totalWrong = entries.reduce((s, e) => s + e.wrong, 0);
    const totalAttempts = totalCorrect + totalWrong;
    const accuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
    return { totalLearned, totalCorrect, totalWrong, totalAttempts, accuracy };
  }, [progress]);

  // Per-section progress
  const sectionProgress = useMemo(() => {
    return SENTENCE_SECTIONS.map((sec) => {
      const [start, end] = sec.range;
      const sectionSentences = MOCK_SENTENCES.filter(
        (s: ISentence) => s.id >= start && s.id <= end
      );
      const learnedInSection = sectionSentences.filter(
        (s: ISentence) => progress.learned[s.id]
      );
      const total = sectionSentences.length || 1;
      const learned = learnedInSection.length;
      const pct = Math.round((learned / total) * 100);
      return { ...sec, total, learned, pct };
    }).filter((s) => s.total > 0);
  }, [progress]);

  // Weak sentences (wrong > correct or high error rate)
  const weakSentences = useMemo(() => {
    const weak: { sentence: ISentence; correct: number; wrong: number; rate: number }[] = [];
    for (const [idStr, rec] of Object.entries(progress.learned)) {
      const r = rec as { correct: number; wrong: number };
      const total = r.correct + r.wrong;
      if (r.wrong > 0 && total >= 2) {
        const rate = Math.round((r.correct / total) * 100);
        if (rate < 70) {
          const s = MOCK_SENTENCES.find((ms: ISentence) => ms.id === Number(idStr));
          if (s) weak.push({ sentence: s, correct: r.correct, wrong: r.wrong, rate });
        }
      }
    }
    return weak.sort((a, b) => a.rate - b.rate).slice(0, 10);
  }, [progress]);

  // Calendar data for current month
  const calendarDays = useMemo(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const checkinSet = new Set(progress.checkinDates);
    const days: { day: number; checked: boolean; today: boolean }[] = [];
    for (let i = 0; i < firstDay; i++) {
      days.push({ day: 0, checked: false, today: false });
    }
    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      days.push({
        day: d,
        checked: checkinSet.has(dateStr),
        today: d === now.getDate(),
      });
    }
    return { year, month, days };
  }, [progress]);

  const monthNames = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

  const handleResetProgress = useCallback(() => {
    // Clear ALL learning-related storage keys so everything starts fresh
    const keysToClear = [
      'dc_english_progress',                     // ProgressPage progress
      '__app_dc_english_progress',                // HomePage study progress
      '__app_dc_english_favorites',               // Favorites (word + scenario)
      '__app_dc_english_wrong_book',              // Wrong book
      'flashcard_progress',                       // Flashcard review data
      'quiz_history',                             // Quiz history
      '__app_dc_english_scenario_practice',       // Scenario practice sessions
      'scenario_practice_history',                // Scenario practice history
      'scenario_repeat_count',                    // Scenario repeat counts
      'browse_repeat_count',                      // Browse/sentence detail repeat counts
      '__app_dc_handover_progress',               // BMS handover progress
    ];
    for (const baseKey of keysToClear) {
      storage.removeItem(userStorageKey(baseKey));
    }
    // Also clear any per-sentence notes (browse_notes_*)
    // These use dynamic keys, so we iterate all scoped storage keys
    try {
      const currentUsername = storage.getItem('__app_dc_auth_session');
      if (currentUsername) {
        const prefix = `u:${currentUsername}:browse_notes_`;
        for (let i = 0; i < localStorage.length; i++) {
          const k = localStorage.key(i);
          if (k && k.startsWith(prefix)) {
            storage.removeItem(k);
            i--; // adjust index after removal
          }
        }
      }
    } catch {
      // Ignore cleanup errors
    }
    // Reset state in-place — no page reload
    const empty: IProgressData = {
      learned: {},
      streakDays: 0,
      checkinDates: [],
    };
    setProgress(empty);
    // Also clear IndexedDB
    dbClearUserData().catch(() => { /* best-effort */ });
    toast.success('所有学习数据已重置');
  }, []);

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-foreground">学习记录</h1>
          <p className="text-sm text-muted-foreground mt-1">跟踪学习进度，发现薄弱环节</p>
        </div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" size="sm">
              <RotateCcw className="size-3.5 mr-1.5" />
              重置数据
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>确认重置所有学习数据？</AlertDialogTitle>
              <AlertDialogDescription>
                此操作将清除所有学习记录，包括：已学句子、打卡天数、正确率、练习次数、收藏、错题本、闪卡记录和测验历史。重置后所有数据归零，只有真正学习后才会重新计入。
                <br /><br />
                <strong>此操作不可撤销。</strong>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>取消</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleResetProgress}
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              >
                确认重置
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="size-9 rounded-md bg-primary/15 flex items-center justify-center shrink-0">
                <Flame className="size-4 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold tabular-nums text-foreground">{progress.streakDays}</div>
                <div className="text-xs text-muted-foreground">连续打卡天数</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="size-9 rounded-md bg-info/15 flex items-center justify-center shrink-0">
                <BookOpen className="size-4 text-info" />
              </div>
              <div>
                <div className="text-2xl font-bold tabular-nums text-foreground">{stats.totalLearned}</div>
                <div className="text-xs text-muted-foreground">已学句子</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="size-9 rounded-md bg-success/15 flex items-center justify-center shrink-0">
                <Target className="size-4 text-success" />
              </div>
              <div>
                <div className="text-2xl font-bold tabular-nums text-foreground">{stats.accuracy}%</div>
                <div className="text-xs text-muted-foreground">正确率</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="size-9 rounded-md bg-warning/15 flex items-center justify-center shrink-0">
                <TrendingUp className="size-4 text-warning" />
              </div>
              <div>
                <div className="text-2xl font-bold tabular-nums text-foreground">{stats.totalAttempts}</div>
                <div className="text-xs text-muted-foreground">总练习次数</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Ability Radar Chart */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Sparkles className="size-4 text-primary" />
            五维能力评估
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <ReactECharts
                option={useMemo((): EChartsOption => {
                  const totalLearned = stats.totalLearned || 1;
                  const vocabulary = Math.min(100, Math.round((totalLearned / MOCK_SENTENCES.length) * 100 * 1.2));
                  const accuracy = stats.accuracy || 0;
                  const fluency = Math.min(100, Math.round(stats.totalAttempts / Math.max(totalLearned, 1) * 30));
                  const consistency = Math.min(100, progress.streakDays * 8);
                  const comprehension = Math.round((accuracy + vocabulary) / 2);
                  return {
                    tooltip: { trigger: 'item' },
                    radar: {
                      indicator: [
                        { name: '词汇掌握' },
                        { name: '发音/测验' },
                        { name: '理解能力' },
                        { name: '流利程度' },
                        { name: '学习连贯性' },
                      ],
                      shape: 'circle',
                      splitNumber: 4,
                      axisName: { color: '#94a3b8', fontSize: 12 },
                      splitArea: { areaStyle: { color: ['rgba(245,158,11,0.02)', 'rgba(245,158,11,0.05)'] } },
                      splitLine: { lineStyle: { color: 'rgba(255,255,255,0.08)' } },
                      axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } },
                    },
                    series: [{
                      type: 'radar',
                      data: [{
                        value: [vocabulary, accuracy, comprehension, fluency, consistency],
                        name: '能力评估',
                        areaStyle: { color: 'rgba(245,158,11,0.15)' },
                        lineStyle: { color: '#f59e0b', width: 2 },
                        itemStyle: { color: '#f59e0b' },
                        symbol: 'circle',
                        symbolSize: 6,
                      }],
                    }],
                  };
                }, [stats, progress.streakDays])}
                theme="ud"
                className="h-[300px]"
              />
            </div>
            <div className="space-y-4 flex flex-col justify-center">
              {([
                { label: '词汇掌握', value: Math.min(100, Math.round((stats.totalLearned / Math.max(MOCK_SENTENCES.length, 1)) * 100 * 1.2)), desc: '已学句子覆盖度' },
                { label: '发音/测验', value: stats.accuracy, desc: '测验正确率' },
                { label: '理解能力', value: Math.round((stats.accuracy + Math.min(100, Math.round((stats.totalLearned / Math.max(MOCK_SENTENCES.length, 1)) * 100 * 1.2))) / 2), desc: '词汇+测验综合' },
                { label: '流利程度', value: Math.min(100, Math.round(stats.totalAttempts / Math.max(stats.totalLearned, 1) * 30)), desc: '复习频率' },
                { label: '学习连贯性', value: Math.min(100, progress.streakDays * 8), desc: '连续打卡天数' },
              ] as const).map((dim) => (
                <div key={dim.label} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">{dim.label}</span>
                    <span className="text-sm font-bold tabular-nums text-foreground">{dim.value}%</span>
                  </div>
                  <Progress value={dim.value} className="h-1.5" />
                  <span className="text-xs text-muted-foreground">{dim.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="w-full justify-start">
          <TabsTrigger value="overview">
            <Calendar className="size-3.5 mr-1.5" />
            打卡日历
          </TabsTrigger>
          <TabsTrigger value="topics">
            <BookOpen className="size-3.5 mr-1.5" />
            主题进度
          </TabsTrigger>
          <TabsTrigger value="weak">
            <AlertTriangle className="size-3.5 mr-1.5" />
            薄弱句子
          </TabsTrigger>
        </TabsList>

        {/* Calendar tab */}
        <TabsContent value="overview" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">
                {calendarDays.year}年 {monthNames[calendarDays.month]} 打卡记录
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1 text-center">
                {['日', '一', '二', '三', '四', '五', '六'].map((d) => (
                  <div key={d} className="text-xs text-muted-foreground py-1 font-medium">
                    {d}
                  </div>
                ))}
                {calendarDays.days.map((d, i) => (
                  <div
                    key={i}
                    className={`
                      aspect-square flex items-center justify-center text-xs rounded-md
                      ${d.day === 0 ? 'opacity-0' : ''}
                      ${d.checked ? 'bg-primary/20 text-primary font-semibold' : 'text-muted-foreground'}
                      ${d.today ? 'ring-1 ring-primary' : ''}
                    `}
                  >
                    {d.day > 0 ? d.day : ''}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <div className="size-3 rounded-sm bg-primary/20" />
                  <span>已打卡</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="size-3 rounded-sm ring-1 ring-primary" />
                  <span>今天</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Topics progress tab */}
        <TabsContent value="topics" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
            {sectionProgress.map((sec, i) => (
              <Card key={i} className="hover-elevate cursor-pointer" onClick={() => navigate('/browse')}>
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-center justify-between min-w-0">
                    <span className="text-sm font-medium truncate flex-1">{sec.label}</span>
                    <Badge variant="outline" className="shrink-0 text-xs ml-2">
                      {sec.learned}/{sec.total}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={sec.pct} className="h-1.5 flex-1" />
                    <span className="text-xs tabular-nums text-muted-foreground shrink-0 w-8 text-right">
                      {sec.pct}%
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Weak sentences tab */}
        <TabsContent value="weak" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <AlertTriangle className="size-4 text-warning" />
                薄弱句子（正确率低于 70%）
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {weakSentences.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
                  <CheckCircle2 className="size-8 mb-2 text-success" />
                  <p className="text-sm">暂无薄弱句子，继续保持！</p>
                </div>
              ) : (
                <div className="divide-y divide-border">
                  {weakSentences.map((ws) => (
                    <div
                      key={ws.sentence.id}
                      className="flex items-start gap-3 p-4 hover-elevate cursor-pointer"
                      onClick={() => navigate('/browse')}
                    >
                      <div className="size-8 rounded-md bg-destructive/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-destructive tabular-nums">{ws.rate}%</span>
                      </div>
                      <div className="flex-1 min-w-0 space-y-1">
                        <div className="text-sm font-medium text-foreground truncate">
                          {ws.sentence.en}
                        </div>
                        <div className="text-xs text-muted-foreground truncate">
                          {ws.sentence.cn}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="text-success">✓ {ws.correct}</span>
                          <span className="text-destructive">✗ {ws.wrong}</span>
                          <Badge variant="outline" className="text-xs">
                            {ws.sentence.tags?.[1] || ws.sentence.tags?.[0] || ''}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

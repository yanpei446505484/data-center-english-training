import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactECharts from 'echarts-for-react';
import type { EChartsOption } from 'echarts';
import {
  ArrowLeft,
  Award,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  Volume2,
  BookOpen,
  Target,
  Sparkles,
  ChevronRight,
} from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

import { storage } from '@/lib/storage';
import { userStorageKey } from '@/lib/userStorage';

// ── Types ──

interface ISentenceResult {
  id: number;
  en: string;
  cn: string;
  score: number;
  pronunciationScore: number;
  attempts: number;
  feedback: string;
}

interface IPracticeSession {
  scenarioId: number;
  topicLabel: string;
  practicedAt: string;
  totalTimeSeconds: number;
  sentences: ISentenceResult[];
}

// ── Storage helpers ──

const STORAGE_KEY = '__app_dc_english_scenario_practice';

function loadSessions(): IPracticeSession[] {
  try {
    const raw = storage.getItem(userStorageKey(STORAGE_KEY));
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed as IPracticeSession[];
    return [];
  } catch {
    return [];
  }
}



// ── Ability dimension calculation ──

interface IAbilityDimensions {
  vocabulary: number;
  pronunciation: number;
  comprehension: number;
  fluency: number;
  consistency: number;
}

function computeAbilities(sessions: IPracticeSession[]): IAbilityDimensions {
  if (sessions.length === 0) {
    return { vocabulary: 0, pronunciation: 0, comprehension: 0, fluency: 0, consistency: 0 };
  }

  const allSentences = sessions.flatMap((s) => s.sentences);
  const avgScore =
    allSentences.reduce((sum, s) => sum + s.score, 0) / allSentences.length;
  const avgPronunciation =
    allSentences.reduce((sum, s) => sum + s.pronunciationScore, 0) /
    allSentences.length;
  const avgAttempts =
    allSentences.reduce((sum, s) => sum + s.attempts, 0) / allSentences.length;

  // Vocabulary: based on average score, weighted toward higher scores
  const vocabulary = Math.min(100, Math.round(avgScore * 1.05));

  // Pronunciation: direct average
  const pronunciation = Math.round(avgPronunciation);

  // Comprehension: average of score and pronunciation
  const comprehension = Math.round((avgScore + avgPronunciation) / 2);

  // Fluency: fewer attempts = more fluent (1 attempt = 100, 3 attempts = 40)
  const fluency = Math.max(20, Math.min(100, Math.round(130 - avgAttempts * 30)));

  // Consistency: based on number of sessions and spread of practice dates
  const uniqueDays = new Set(
    sessions.map((s) => s.practicedAt.slice(0, 10))
  ).size;
  const consistency = Math.min(100, Math.round(uniqueDays * 18 + sessions.length * 5));

  return { vocabulary, pronunciation, comprehension, fluency, consistency };
}

// ── Component ──

export default function PracticeReportPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const sessions = useMemo(() => loadSessions(), []);

  const abilities = useMemo(() => computeAbilities(sessions), [sessions]);

  const allSentences = useMemo(
    () => sessions.flatMap((s) => s.sentences),
    [sessions]
  );

  const overallStats = useMemo(() => {
    const total = allSentences.length;
    const avgScore =
      total > 0
        ? Math.round(allSentences.reduce((sum, s) => sum + s.score, 0) / total)
        : 0;
    const avgPronunciation =
      total > 0
        ? Math.round(
            allSentences.reduce((sum, s) => sum + s.pronunciationScore, 0) /
              total
          )
        : 0;
    const totalTime = sessions.reduce((sum, s) => sum + s.totalTimeSeconds, 0);
    return { total, avgScore, avgPronunciation, totalTime };
  }, [allSentences, sessions]);

  // Best performing sentences (score >= 85)
  const excellentSentences = useMemo(
    () =>
      [...allSentences]
        .filter((s) => s.score >= 85)
        .sort((a, b) => b.score - a.score)
        .slice(0, 5),
    [allSentences]
  );

  // Weakest sentences (score < 70)
  const weakSentences = useMemo(
    () =>
      [...allSentences]
        .filter((s) => s.score < 70)
        .sort((a, b) => a.score - b.score)
        .slice(0, 5),
    [allSentences]
  );

  // Per-scenario progress
  const scenarioProgress = useMemo(() => {
    return sessions.map((session) => {
      const avg =
        session.sentences.length > 0
          ? Math.round(
              session.sentences.reduce((sum, s) => sum + s.score, 0) /
                session.sentences.length
            )
          : 0;
      const minScore =
        session.sentences.length > 0
          ? Math.min(...session.sentences.map((s) => s.score))
          : 0;
      return { ...session, avgScore: avg, minScore };
    });
  }, [sessions]);

  // ── Radar chart option ──
  const radarOption: EChartsOption = {
    tooltip: {
      trigger: 'item',
    },
    radar: {
      indicator: [
        { name: '词汇掌握' },
        { name: '发音准确度' },
        { name: '理解能力' },
        { name: '流利程度' },
        { name: '学习连贯性' },
      ],
      shape: 'circle',
      splitNumber: 4,
      axisName: {
        color: '#94a3b8',
        fontSize: 12,
      },
      splitArea: {
        areaStyle: {
          color: ['rgba(232, 168, 24, 0.02)', 'rgba(232, 168, 24, 0.05)'],
        },
      },
      splitLine: {
        lineStyle: { color: 'rgba(255,255,255,0.08)' },
      },
      axisLine: {
        lineStyle: { color: 'rgba(255,255,255,0.1)' },
      },
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: [
              abilities.vocabulary,
              abilities.pronunciation,
              abilities.comprehension,
              abilities.fluency,
              abilities.consistency,
            ],
            name: '能力评估',
            areaStyle: {
              color: 'rgba(232, 168, 24, 0.15)',
            },
            lineStyle: {
              color: '#e8a818',
              width: 2,
            },
            itemStyle: {
              color: '#e8a818',
            },
            symbol: 'circle',
            symbolSize: 6,
          },
        ],
      },
    ],
  };

  // ── Session timeline chart ──
  const timelineOption: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '15%',
      top: '10%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: scenarioProgress.map((s) =>
        s.topicLabel.length > 6
          ? s.topicLabel.slice(0, 6) + '…'
          : s.topicLabel
      ),
      axisLabel: {
        color: '#94a3b8',
        fontSize: 11,
        rotate: 30,
      },
      axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } },
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 100,
      axisLabel: { color: '#94a3b8', fontSize: 11 },
      splitLine: { lineStyle: { color: 'rgba(255,255,255,0.06)' } },
    },
    series: [
      {
        type: 'bar',
        data: scenarioProgress.map((s) => ({
          value: s.avgScore,
          itemStyle: {
            color: s.avgScore >= 80 ? '#22c55e' : s.avgScore >= 60 ? '#e8a818' : '#ef4444',
            borderRadius: [4, 4, 0, 0],
          },
        })),
        barWidth: '40%',
      },
    ],
  };

  // ── Improvement suggestions ──
  const suggestions = useMemo(() => {
    const tips: { icon: typeof Volume2; title: string; detail: string; priority: 'high' | 'medium' | 'low' }[] = [];

    if (abilities.pronunciation < 70) {
      tips.push({
        icon: Volume2,
        title: '加强发音训练',
        detail: '发音得分偏低，建议每天选择 5-10 句进行跟读练习，重点关注连读、弱读和语调变化。',
        priority: 'high',
      });
    }

    if (abilities.vocabulary < 75) {
      tips.push({
        icon: BookOpen,
        title: '扩充场景词汇',
        detail: '词汇掌握度有提升空间，建议使用闪卡模式复习薄弱主题，每个单词配合例句加深记忆。',
        priority: 'high',
      });
    }

    if (abilities.fluency < 70) {
      tips.push({
        icon: Target,
        title: '提升表达流利度',
        detail: '练习时尝试次数偏多，建议先默读 2-3 遍再开口，熟悉句子节奏后再进行跟读。',
        priority: 'medium',
      });
    }

    if (abilities.consistency < 60) {
      tips.push({
        icon: Sparkles,
        title: '保持学习连续性',
        detail: '练习天数较少，建议每天至少完成 1 个场景练习，连续打卡 7 天效果最佳。',
        priority: 'medium',
      });
    }

    if (weakSentences.length > 0) {
      tips.push({
        icon: AlertTriangle,
        title: '重点攻克薄弱句',
        detail: `有 ${weakSentences.length} 句得分低于 70 分，建议优先复习这些句子，理解语法结构后反复练习。`,
        priority: 'high',
      });
    }

    if (tips.length === 0) {
      tips.push({
        icon: Award,
        title: '继续保持优秀表现',
        detail: '各项能力指标均处于良好水平，建议尝试更高难度的场景练习，挑战更长的句子和更复杂的语法结构。',
        priority: 'low',
      });
    }

    return tips;
  }, [abilities, weakSentences]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="size-4" />
          返回
        </Button>
        <div>
          <h1 className="text-xl font-bold text-foreground">练习报告</h1>
          <p className="text-sm text-muted-foreground">
            场景练习能力分析与改进建议
          </p>
        </div>
      </div>

      {/* Empty state when no real practice data */}
      {sessions.length === 0 && (
        <Card className="border-border/40">
          <CardContent className="py-16 flex flex-col items-center justify-center text-center">
            <div className="size-14 rounded-full bg-secondary flex items-center justify-center mb-4">
              <BookOpen className="size-6 text-muted-foreground" />
            </div>
            <h2 className="text-lg font-semibold text-foreground mb-2">暂无练习记录</h2>
            <p className="text-sm text-muted-foreground max-w-sm mb-6">
              完成场景练习后，这里会自动生成您的能力分析报告与改进建议。
            </p>
            <Button onClick={() => navigate('/scenarios')}>
              开始场景练习
              <ChevronRight className="size-4 ml-1" />
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Summary Cards */}
      {sessions.length > 0 && <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="border-border/40">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="size-10 shrink-0 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
              <BookOpen className="size-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-2xl font-bold tabular-nums text-foreground">
                {overallStats.total}
              </div>
              <div className="text-xs text-muted-foreground">练习句数</div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/40">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="size-10 shrink-0 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
              <Target className="size-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-2xl font-bold tabular-nums text-foreground">
                {overallStats.avgScore}
                <span className="text-sm text-muted-foreground">%</span>
              </div>
              <div className="text-xs text-muted-foreground">平均得分</div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/40">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="size-10 shrink-0 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
              <Volume2 className="size-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-2xl font-bold tabular-nums text-foreground">
                {overallStats.avgPronunciation}
                <span className="text-sm text-muted-foreground">%</span>
              </div>
              <div className="text-xs text-muted-foreground">发音得分</div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/40">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="size-10 shrink-0 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
              <TrendingUp className="size-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-2xl font-bold tabular-nums text-foreground">
                {Math.floor(overallStats.totalTime / 60)}
                <span className="text-sm text-muted-foreground">min</span>
              </div>
              <div className="text-xs text-muted-foreground">总练习时长</div>
            </div>
          </CardContent>
        </Card>
      </div>}

      {/* Tabs */}
      {sessions.length > 0 && <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="bg-secondary/50">
          <TabsTrigger value="overview">能力总览</TabsTrigger>
          <TabsTrigger value="excellent">优秀表现</TabsTrigger>
          <TabsTrigger value="weak">薄弱环节</TabsTrigger>
          <TabsTrigger value="suggestions">改进建议</TabsTrigger>
        </TabsList>

        {/* ── Overview Tab ── */}
        <TabsContent value="overview" className="space-y-6 mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Radar Chart */}
            <Card className="border-border/40">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <Sparkles className="size-4 text-primary" />
                  五维能力评估
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ReactECharts
                  option={radarOption}
                  theme="ud"
                  className="h-[300px]"
                />
              </CardContent>
            </Card>

            {/* Score by Scenario */}
            <Card className="border-border/40">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <TrendingUp className="size-4 text-primary" />
                  各场景得分
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ReactECharts
                  option={timelineOption}
                  theme="ud"
                  className="h-[300px]"
                />
              </CardContent>
            </Card>
          </div>

          {/* Dimension Details */}
          <Card className="border-border/40">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">各维度能力详析</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {([
                { label: '词汇掌握', value: abilities.vocabulary, desc: '句子中单词的准确使用与理解程度' },
                { label: '发音准确度', value: abilities.pronunciation, desc: '语音识别与原句的匹配程度' },
                { label: '理解能力', value: abilities.comprehension, desc: '对句子含义和语法结构的综合掌握' },
                { label: '流利程度', value: abilities.fluency, desc: '一次性完成练习的效率（尝试次数越少越流利）' },
                { label: '学习连贯性', value: abilities.consistency, desc: '练习频率与持续天数' },
              ] as const).map((dim) => (
                <div key={dim.label} className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-medium text-foreground">{dim.label}</span>
                      <span className="text-xs text-muted-foreground ml-2">{dim.desc}</span>
                    </div>
                    <span className="text-sm font-bold tabular-nums text-foreground">
                      {dim.value}%
                    </span>
                  </div>
                  <Progress value={dim.value} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* ── Excellent Tab ── */}
        <TabsContent value="excellent" className="space-y-4 mt-4">
          <Card className="border-border/40">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Award className="size-4 text-primary" />
                优秀表现
                <Badge variant="secondary" className="ml-2 text-xs">
                  {excellentSentences.length} 句
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {excellentSentences.length === 0 ? (
                <div className="py-8 text-center text-muted-foreground text-sm">
                  暂无得分 85 以上的句子，继续加油！
                </div>
              ) : (
                excellentSentences.map((s, i) => (
                  <div
                    key={`${s.id}-${i}`}
                    className="rounded-lg border border-border/40 p-4 space-y-2"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1 space-y-1">
                        <p className="text-sm font-medium text-foreground">
                          {s.en}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {s.cn}
                        </p>
                      </div>
                      <Badge
                        variant="secondary"
                        className="shrink-0 bg-green-500/15 text-green-400 border-green-500/30"
                      >
                        {s.score}分
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>发音: {s.pronunciationScore}%</span>
                      <span>尝试: {s.attempts}次</span>
                    </div>
                    <p className="text-xs text-muted-foreground/80 italic">
                      {s.feedback}
                    </p>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* ── Weak Tab ── */}
        <TabsContent value="weak" className="space-y-4 mt-4">
          <Card className="border-border/40">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <AlertTriangle className="size-4 text-primary" />
                薄弱环节
                <Badge variant="secondary" className="ml-2 text-xs">
                  {weakSentences.length} 句
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {weakSentences.length === 0 ? (
                <div className="py-8 text-center text-muted-foreground text-sm">
                  太棒了！没有得分低于 70 的句子 🎉
                </div>
              ) : (
                weakSentences.map((s, i) => (
                  <div
                    key={`${s.id}-${i}`}
                    className="rounded-lg border border-red-500/20 bg-red-500/5 p-4 space-y-2"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1 space-y-1">
                        <p className="text-sm font-medium text-foreground">
                          {s.en}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {s.cn}
                        </p>
                      </div>
                      <Badge
                        variant="secondary"
                        className="shrink-0 bg-red-500/15 text-red-400 border-red-500/30"
                      >
                        {s.score}分
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>发音: {s.pronunciationScore}%</span>
                      <span>尝试: {s.attempts}次</span>
                    </div>
                    <p className="text-xs text-muted-foreground/80 italic">
                      {s.feedback}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary h-7 text-xs"
                      onClick={() => navigate(`/browse`)}
                    >
                      去复习
                      <ChevronRight className="size-3 ml-1" />
                    </Button>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* ── Suggestions Tab ── */}
        <TabsContent value="suggestions" className="space-y-4 mt-4">
          <Card className="border-border/40">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Lightbulb className="size-4 text-primary" />
                AI 改进建议
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {suggestions.map((tip, i) => {
                const Icon = tip.icon;
                const priorityColor =
                  tip.priority === 'high'
                    ? 'bg-red-500/15 text-red-400 border-red-500/30'
                    : tip.priority === 'medium'
                    ? 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30'
                    : 'bg-green-500/15 text-green-400 border-green-500/30';
                const priorityLabel =
                  tip.priority === 'high'
                    ? '高优先'
                    : tip.priority === 'medium'
                    ? '中优先'
                    : '建议';

                return (
                  <div
                    key={i}
                    className="rounded-lg border border-border/40 p-4 space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <div className="size-8 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <Icon className="size-4" />
                      </div>
                      <span className="text-sm font-medium text-foreground flex-1">
                        {tip.title}
                      </span>
                      <Badge
                        variant="secondary"
                        className={`text-xs ${priorityColor}`}
                      >
                        {priorityLabel}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground pl-10">
                      {tip.detail}
                    </p>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Quick actions */}
          <Card className="border-border/40">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">快速行动</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/browse')}
              >
                <BookOpen className="size-4 mr-1.5" />
                浏览句子
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/flashcard')}
              >
                <Sparkles className="size-4 mr-1.5" />
                闪卡复习
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/quiz')}
              >
                <Target className="size-4 mr-1.5" />
                自测挑战
              </Button>
              <Button
                size="sm"
                onClick={() => navigate('/')}
              >
                <Award className="size-4 mr-1.5" />
                开始新场景
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>}
    </div>
  );
}

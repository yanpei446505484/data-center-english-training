import ReactECharts from 'echarts-for-react';
import type { EChartsOption } from 'echarts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Home, RotateCcw, Target, Trophy, TrendingUp, CheckCircle2,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PracticeReportViewProps {
  scores: number[];
  totalSentences: number;
  sectionLabel?: string;
  onRestart: () => void;
}

export default function PracticeReportView({
  scores,
  totalSentences,
  sectionLabel,
  onRestart,
}: PracticeReportViewProps) {
  const navigate = useNavigate();

  const avgScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  const bestScore = Math.max(...scores);
  const excellentCount = scores.filter((s) => s >= 80).length;
  const goodCount = scores.filter((s) => s >= 60 && s < 80).length;
  const needsWorkCount = scores.filter((s) => s < 60).length;

  const radarOption: EChartsOption = {
    tooltip: {},
    radar: {
      indicator: [
        { name: '优秀 (≥80)' },
        { name: '良好 (60-79)' },
        { name: '需加强 (＜60)' },
      ],
      shape: 'circle',
      splitNumber: 4,
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: [excellentCount, goodCount, needsWorkCount],
            name: '得分分布',
            areaStyle: { color: 'rgba(245, 158, 11, 0.3)' },
            lineStyle: { color: '#f59e0b', width: 2 },
            itemStyle: { color: '#f59e0b' },
          },
        ],
      },
    ],
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/')}
        >
          <Home className="size-5" />
        </Button>
        <div className="flex-1">
          <h1 className="text-xl font-bold text-foreground">练习报告</h1>
          <p className="text-sm text-muted-foreground">{sectionLabel}</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="border-border/40">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="size-10 shrink-0 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
              <Target className="size-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-2xl font-bold tabular-nums text-foreground">{avgScore}</div>
              <div className="text-xs text-muted-foreground">平均分</div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/40">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="size-10 shrink-0 rounded-lg bg-green-500/15 text-green-500 flex items-center justify-center">
              <Trophy className="size-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-2xl font-bold tabular-nums text-foreground">{bestScore}</div>
              <div className="text-xs text-muted-foreground">最高分</div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/40">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="size-10 shrink-0 rounded-lg bg-secondary text-secondary-foreground flex items-center justify-center">
              <TrendingUp className="size-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-2xl font-bold tabular-nums text-foreground">{totalSentences}</div>
              <div className="text-xs text-muted-foreground">练习句数</div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/40">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="size-10 shrink-0 rounded-lg bg-orange-500/15 text-orange-500 flex items-center justify-center">
              <CheckCircle2 className="size-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-2xl font-bold tabular-nums text-foreground">{excellentCount}</div>
              <div className="text-xs text-muted-foreground">优秀句数</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Score Distribution Chart */}
      <Card className="border-border/40">
        <CardHeader>
          <CardTitle>得分分布</CardTitle>
        </CardHeader>
        <CardContent>
          <ReactECharts option={radarOption} theme="ud" className="h-[300px]" />
        </CardContent>
      </Card>

      {/* Score Breakdown */}
      <Card className="border-border/40">
        <CardHeader>
          <CardTitle>得分明细</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-full bg-green-500" />
              <span className="text-sm font-medium text-foreground">优秀 (≥80分)</span>
            </div>
            <span className="text-sm font-bold tabular-nums text-foreground">
              {excellentCount} 句 ({Math.round((excellentCount / scores.length) * 100)}%)
            </span>
          </div>
          <div className="flex items-center justify-between p-3 bg-orange-500/10 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-full bg-orange-500" />
              <span className="text-sm font-medium text-foreground">良好 (60-79分)</span>
            </div>
            <span className="text-sm font-bold tabular-nums text-foreground">
              {goodCount} 句 ({Math.round((goodCount / scores.length) * 100)}%)
            </span>
          </div>
          <div className="flex items-center justify-between p-3 bg-red-500/10 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-full bg-red-500" />
              <span className="text-sm font-medium text-foreground">需加强 (＜60分)</span>
            </div>
            <span className="text-sm font-bold tabular-nums text-foreground">
              {needsWorkCount} 句 ({Math.round((needsWorkCount / scores.length) * 100)}%)
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex gap-3">
        <Button variant="outline" onClick={() => navigate('/')} className="flex-1">
          <Home className="size-4 mr-2" />
          返回首页
        </Button>
        <Button onClick={onRestart} className="flex-1">
          <RotateCcw className="size-4 mr-2" />
          再练一次
        </Button>
      </div>
    </div>
  );
}

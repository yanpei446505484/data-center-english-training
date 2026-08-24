import {
  ArrowLeft, Clock, Trophy, RotateCcw, BookOpen, Zap, Target,
  CheckCircle2, XCircle, Sparkles,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  TYPE_META, formatTime,
  type IAnswerRecord, type QuestionType,
} from './quizQuestions';
import { SENTENCE_SECTIONS } from '@/data/sentenceLearning';

interface QuizResultsViewProps {
  answers: IAnswerRecord[];
  elapsed: number;
  selectedTopicIdx: number;
  customScenarioId: string | null;
  favorites: Array<{ id: string; query: string; aiResponse: string }>;
  topicLabel: string;
  onReset: () => void;
  onRetry: () => void;
  onNavigateWrongBook: () => void;
}

export default function QuizResultsView({
  answers, elapsed, selectedTopicIdx, customScenarioId,
  favorites, topicLabel, onReset, onRetry, onNavigateWrongBook,
}: QuizResultsViewProps) {
  const correctCount = answers.filter(a => a.isCorrect).length;
  const totalCount = answers.length;
  const percentage = Math.round((correctCount / totalCount) * 100);
  const weakItems = answers.filter(a => !a.isCorrect);

  const typeBreakdown = (Object.keys(TYPE_META) as QuestionType[]).map(type => {
    const items = answers.filter(a => a.questionType === type);
    if (items.length === 0) return null;
    const correct = items.filter(a => a.isCorrect).length;
    return { type, total: items.length, correct, meta: TYPE_META[type] };
  }).filter(Boolean);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={onReset} className="gap-1.5 text-muted-foreground">
          <ArrowLeft className="size-4" />
          返回主题
        </Button>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <CardContent className="p-6 text-center space-y-4">
            <div className="flex justify-center">
              <div className={`size-16 rounded-full flex items-center justify-center ${percentage >= 80 ? 'bg-green-500/15' : percentage >= 50 ? 'bg-primary/15' : 'bg-destructive/15'}`}>
                {percentage >= 80 ? (
                  <Trophy className="size-8 text-green-400" />
                ) : percentage >= 50 ? (
                  <Sparkles className="size-8 text-primary" />
                ) : (
                  <Target className="size-8 text-destructive" />
                )}
              </div>
            </div>

            <div>
              <div className={`text-4xl font-black tabular-nums tracking-tight ${percentage >= 80 ? 'text-green-400' : percentage >= 50 ? 'text-primary' : 'text-destructive'}`}>
                {percentage}%
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {correctCount} / {totalCount} 题正确
              </div>
            </div>

            {typeBreakdown.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2">
                {typeBreakdown.map(tb => {
                  if (!tb) return null;
                  const Icon = tb.meta.icon;
                  return (
                    <div key={tb.type} className={`flex items-center gap-1 px-2 py-1 rounded text-[10px] ${tb.meta.color}`}>
                      <Icon className="size-3" />
                      {tb.correct}/{tb.total}
                    </div>
                  );
                })}
              </div>
            )}

            <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="size-3.5" />
                用时 {formatTime(elapsed)}
              </span>
              <span className="flex items-center gap-1.5">
                <BookOpen className="size-3.5" />
                {topicLabel}
              </span>
            </div>

            <div className="flex gap-2 justify-center pt-2">
              <Button variant="outline" size="sm" onClick={onReset} className="gap-1.5">
                <RotateCcw className="size-3.5" />
                换个主题
              </Button>
              <Button size="sm" onClick={onRetry} className="gap-1.5">
                <Zap className="size-3.5" />
                再做一次
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {weakItems.length > 0 && (
        <Card className="border-border/40">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <XCircle className="size-4 text-destructive" />
              薄弱项复习 ({weakItems.length} 题)
              <span className="text-[10px] text-muted-foreground font-normal ml-auto">
                已自动加入
                <button
                  type="button"
                  onClick={onNavigateWrongBook}
                  className="text-primary hover:underline mx-1"
                >错题本</button>
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border/30">
              {weakItems.map((item, idx) => {
                const tMeta = TYPE_META[item.questionType];
                const TIcon = tMeta.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-4 space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className={`text-[10px] px-1.5 ${tMeta.color}`}>
                        <TIcon className="size-2.5 mr-0.5" />
                        {tMeta.label}
                      </Badge>
                      <span className="text-sm text-foreground">{item.question}</span>
                    </div>
                    <div className="flex items-start gap-4 text-xs">
                      <div className="flex-1 min-w-0">
                        <span className="text-muted-foreground">你的答案：</span>
                        <span className="text-destructive ml-1">{item.userAnswer || '（未作答）'}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-muted-foreground">正确答案：</span>
                        <span className="text-green-400 ml-1">{item.correctAnswer}</span>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground border-t border-border/20 pt-2">
                      <span className="text-foreground/70">{item.sentenceEn}</span>
                      <span className="mx-2">·</span>
                      <span>{item.sentenceCn}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {weakItems.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center py-8"
        >
          <CheckCircle2 className="size-12 text-green-400 mx-auto mb-3" />
          <p className="text-sm text-muted-foreground">全部答对！这个主题你已经完全掌握了</p>
        </motion.div>
      )}
    </div>
  );
}

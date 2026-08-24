import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, Volume2, Clock, Trophy, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import {
  TYPE_META, type IQuestion, type IAnswerRecord, formatTime,
} from './quizQuestions';

interface QuizPlayViewProps {
  currentQ: IQuestion;
  currentIdx: number;
  questionsCount: number;
  progressValue: number;
  elapsed: number;
  showAnswer: boolean;
  currentAnswer: IAnswerRecord | undefined;
  answers: IAnswerRecord[];
  choiceIdx: number;
  setChoiceIdx: (idx: number) => void;
  tfAnswer: boolean | null;
  setTfAnswer: (val: boolean | null) => void;
  textInput: string;
  setTextInput: (val: string) => void;
  textInputRef: React.RefObject<HTMLInputElement | null>;
  matchPairs: Record<number, number>;
  matchSelected: number;
  matchRightOrder: number[];
  shuffledRightOrder: number[];
  handleKeyDown: (e: React.KeyboardEvent) => void;
  handleSubmit: () => void;
  handleMatchLeftClick: (idx: number) => void;
  handleMatchRightClick: (idx: number) => void;
  speakSentence: (text: string) => void;
  isQuizSpeaking: boolean;
  nextQuestion: () => void;
  resetQuiz: () => void;
  getQuestionPrompt: (q: IQuestion) => string;
}

export default function QuizPlayView({
  currentQ, currentIdx, questionsCount, progressValue, elapsed,
  showAnswer, currentAnswer, answers,
  choiceIdx, setChoiceIdx, tfAnswer, setTfAnswer,
  textInput, setTextInput, textInputRef,
  matchPairs, matchSelected, matchRightOrder, shuffledRightOrder,
  handleKeyDown, handleSubmit, handleMatchLeftClick, handleMatchRightClick,
  speakSentence, isQuizSpeaking, nextQuestion, resetQuiz, getQuestionPrompt,
}: QuizPlayViewProps) {
  const meta = TYPE_META[currentQ.type];
  const TypeIcon = meta.icon;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={resetQuiz} className="gap-1.5 text-muted-foreground">
          <ArrowLeft className="size-4" />
          退出
        </Button>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="size-3.5" />
            {formatTime(elapsed)}
          </div>
          <Badge variant="outline" className="text-xs">
            {currentIdx + 1} / {questionsCount}
          </Badge>
        </div>
      </div>

      <Progress value={progressValue} className="h-1.5" />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
        >
          <Card className="border-border/40">
            <CardHeader className="pb-3">
              <div className="flex items-start gap-3">
                <div className={`size-8 rounded-md flex items-center justify-center shrink-0 ${meta.color}`}>
                  <TypeIcon className="size-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className={`text-[10px] px-1.5 ${meta.color}`}>
                      {meta.label}
                    </Badge>
                  </div>
                  <CardTitle className="text-base font-medium text-foreground leading-relaxed">
                    {getQuestionPrompt(currentQ)}
                  </CardTitle>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Choice */}
              {currentQ.type === 'choice' && (
                <div className="space-y-2">
                  {currentQ.options.map((opt, oi) => {
                    const isSelected = choiceIdx === oi;
                    const isCorrectOpt = oi === currentQ.correctIdx;
                    let optClass = 'border-border/40 hover:border-primary/50 cursor-pointer';
                    if (showAnswer) {
                      if (isCorrectOpt) optClass = 'border-green-500/60 bg-green-500/10';
                      else if (isSelected && !isCorrectOpt) optClass = 'border-destructive/60 bg-destructive/10';
                      else optClass = 'border-border/20 opacity-50';
                    } else if (isSelected) {
                      optClass = 'border-primary bg-primary/10';
                    }
                    return (
                      <button
                        key={oi}
                        type="button"
                        disabled={showAnswer}
                        onClick={() => !showAnswer && setChoiceIdx(oi)}
                        className={`w-full text-left p-3 rounded-lg border transition-colors ${optClass}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`size-6 rounded-full border flex items-center justify-center text-xs font-medium shrink-0 ${
                            showAnswer && isCorrectOpt ? 'border-green-500 text-green-400' :
                            showAnswer && isSelected && !isCorrectOpt ? 'border-destructive text-destructive' :
                            isSelected ? 'border-primary text-primary' : 'border-border text-muted-foreground'
                          }`}>
                            {String.fromCharCode(65 + oi)}
                          </span>
                          <span className="text-sm text-foreground">{opt}</span>
                          {showAnswer && isCorrectOpt && <CheckCircle2 className="size-4 text-green-400 ml-auto shrink-0" />}
                          {showAnswer && isSelected && !isCorrectOpt && <XCircle className="size-4 text-destructive ml-auto shrink-0" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* True/False */}
              {currentQ.type === 'truefalse' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-muted/30 border border-border/30 space-y-2 text-center">
                    <p className="text-base font-medium text-foreground">{currentQ.en}</p>
                    <p className="text-sm text-muted-foreground">{currentQ.cn}</p>
                  </div>
                  <p className="text-sm text-center text-muted-foreground">以上英文与中文翻译是否匹配？</p>
                  <div className="flex gap-3">
                    {[true, false].map(val => {
                      const isSelected = tfAnswer === val;
                      const isRight = val === currentQ.isCorrect;
                      let btnClass = 'flex-1 py-3 rounded-lg border text-sm font-medium transition-colors cursor-pointer';
                      if (showAnswer) {
                        if (isRight) btnClass += ' border-green-500/60 bg-green-500/10 text-green-400';
                        else if (isSelected && !isRight) btnClass += ' border-destructive/60 bg-destructive/10 text-destructive';
                        else btnClass += ' border-border/20 opacity-50 text-muted-foreground';
                      } else {
                        btnClass += isSelected
                          ? ' border-primary bg-primary/10 text-primary'
                          : ' border-border/40 text-foreground hover:border-primary/50';
                      }
                      return (
                        <button
                          key={String(val)}
                          type="button"
                          disabled={showAnswer}
                          onClick={() => !showAnswer && setTfAnswer(val)}
                          className={btnClass}
                        >
                          {val ? '✓ 正确' : '✗ 错误'}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Fill in the blank */}
              {currentQ.type === 'fillblank' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-muted/30 border border-border/30 text-center">
                    <p className="text-lg font-mono text-foreground tracking-wide leading-relaxed">
                      {currentQ.display.split('______').map((part, i, arr) => (
                        <span key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <span className="inline-block mx-1 px-3 py-0.5 rounded border-2 border-dashed border-primary/50 text-primary min-w-[60px]">
                              {showAnswer ? currentQ.answer : (textInput ? '?' : '')}
                            </span>
                          )}
                        </span>
                      ))}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">提示：{currentQ.hint}</p>
                  </div>
                  <div className="relative">
                    <Input
                      ref={textInputRef}
                      value={textInput}
                      onChange={(e) => setTextInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="输入缺少的单词..."
                      className="pr-20 h-11 bg-background border-border/60"
                      disabled={showAnswer}
                    />
                    {!showAnswer && (
                      <Button
                        size="sm"
                        onClick={handleSubmit}
                        disabled={!textInput.trim()}
                        className="absolute right-1.5 top-1/2 -translate-y-1/2 h-8"
                      >
                        提交
                      </Button>
                    )}
                  </div>
                </div>
              )}

              {/* Listen */}
              {currentQ.type === 'listen' && (
                <div className="space-y-4">
                  <div className="flex flex-col items-center gap-3 py-4">
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => speakSentence(currentQ.answer)}
                      disabled={isQuizSpeaking}
                      className="size-16 rounded-full border-primary/40 hover:bg-primary/10"
                    >
                      <Volume2 className={`size-7 text-primary ${isQuizSpeaking ? 'animate-pulse' : ''}`} />
                    </Button>
                    <p className="text-xs text-muted-foreground">点击播放录音，写出完整的英文句子</p>
                  </div>
                  <div className="relative">
                    <Input
                      ref={textInputRef}
                      value={textInput}
                      onChange={(e) => setTextInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="输入你听到的句子..."
                      className="pr-20 h-11 bg-background border-border/60"
                      disabled={showAnswer}
                    />
                    {!showAnswer && (
                      <Button
                        size="sm"
                        onClick={handleSubmit}
                        disabled={!textInput.trim()}
                        className="absolute right-1.5 top-1/2 -translate-y-1/2 h-8"
                      >
                        提交
                      </Button>
                    )}
                  </div>
                </div>
              )}

              {/* Matching */}
              {currentQ.type === 'matching' && (
                <div className="space-y-3">
                  <p className="text-xs text-muted-foreground text-center">
                    先点击左侧英文，再点击右侧对应的中文进行配对
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">English</div>
                      {currentQ.pairs.map((pair, li) => {
                        const isMatched = matchPairs[li] !== undefined;
                        const isSelected = matchSelected === li;
                        const isCorrectPair = showAnswer && matchPairs[li] === li;
                        const isWrongPair = showAnswer && matchPairs[li] !== undefined && matchPairs[li] !== li;
                        let cls = 'p-2.5 rounded-lg border text-xs transition-colors cursor-pointer';
                        if (showAnswer) {
                          cls += isCorrectPair ? ' border-green-500/50 bg-green-500/10' : isWrongPair ? ' border-destructive/50 bg-destructive/10' : ' border-border/20 opacity-50';
                        } else {
                          cls += isSelected ? ' border-primary bg-primary/10' : isMatched ? ' border-green-500/30 bg-green-500/5 opacity-60' : ' border-border/40 hover:border-primary/40';
                        }
                        return (
                          <button
                            key={`l-${li}`}
                            type="button"
                            disabled={showAnswer || isMatched}
                            onClick={() => handleMatchLeftClick(li)}
                            className={cls}
                          >
                            <span className="text-foreground line-clamp-2">{pair.en}</span>
                          </button>
                        );
                      })}
                    </div>
                    <div className="space-y-2">
                      <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">中文</div>
                      {shuffledRightOrder.map(ri => {
                          const pair = currentQ.pairs[ri];
                          const isMatched = matchRightOrder.includes(ri);
                          const isWaiting = matchSelected >= 0 && !isMatched;
                          const matchedLeftIdx = Object.entries(matchPairs).find(([, r]) => r === ri)?.[0];
                          const isCorrectPair = showAnswer && matchedLeftIdx !== undefined && Number(matchedLeftIdx) === ri;
                          const isWrongPair = showAnswer && matchedLeftIdx !== undefined && Number(matchedLeftIdx) !== ri;

                          let cls = 'p-2.5 rounded-lg border text-xs transition-colors';
                          if (showAnswer) {
                            cls += isCorrectPair ? ' border-green-500/50 bg-green-500/10' : isWrongPair ? ' border-destructive/50 bg-destructive/10' : ' border-border/20 opacity-50';
                          } else {
                            cls += isMatched ? ' border-green-500/30 bg-green-500/5 opacity-60' : isWaiting ? ' border-primary/60 bg-primary/5 cursor-pointer hover:bg-primary/10' : ' border-border/40';
                          }
                          return (
                            <button
                              key={`r-${ri}`}
                              type="button"
                              disabled={showAnswer || isMatched || matchSelected < 0}
                              onClick={() => handleMatchRightClick(ri)}
                              className={cls}
                            >
                              <span className="text-foreground line-clamp-2">{pair.cn}</span>
                            </button>
                          );
                      })}
                    </div>
                  </div>
                  {!showAnswer && (
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs text-muted-foreground">
                        已配对 {Object.keys(matchPairs).length} / {currentQ.pairs.length}
                      </span>
                      <Button
                        size="sm"
                        onClick={handleSubmit}
                        disabled={Object.keys(matchPairs).length < currentQ.pairs.length}
                      >
                        提交
                      </Button>
                    </div>
                  )}
                </div>
              )}

              {/* Word Choice */}
              {(currentQ.type === 'word_choice') && (
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-muted/30 border border-border/30 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-semibold text-foreground font-mono">{currentQ.word}</span>
                      {currentQ.pos && <Badge variant="secondary" className="text-[10px]">{currentQ.pos}</Badge>}
                    </div>
                    <p className="text-xs text-muted-foreground italic">"{currentQ.context}"</p>
                  </div>
                  <div className="space-y-2">
                    {currentQ.options.map((opt, oi) => {
                      const isSelected = choiceIdx === oi;
                      const isCorrectOpt = oi === currentQ.correctIdx;
                      let optClass = 'border-border/40 hover:border-emerald-500/50 cursor-pointer';
                      if (showAnswer) {
                        if (isCorrectOpt) optClass = 'border-green-500/60 bg-green-500/10';
                        else if (isSelected && !isCorrectOpt) optClass = 'border-destructive/60 bg-destructive/10';
                        else optClass = 'border-border/20 opacity-50';
                      } else if (isSelected) {
                        optClass = 'border-emerald-500 bg-emerald-500/10';
                      }
                      return (
                        <button key={oi} type="button" disabled={showAnswer}
                          onClick={() => !showAnswer && setChoiceIdx(oi)}
                          className={`w-full text-left p-3 rounded-lg border transition-colors ${optClass}`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`size-6 rounded-full border flex items-center justify-center text-xs font-medium shrink-0 ${
                              showAnswer && isCorrectOpt ? 'border-green-500 text-green-400' :
                              showAnswer && isSelected && !isCorrectOpt ? 'border-destructive text-destructive' :
                              isSelected ? 'border-emerald-500 text-emerald-400' : 'border-border text-muted-foreground'
                            }`}>{String.fromCharCode(65 + oi)}</span>
                            <span className="text-sm text-foreground">{opt}</span>
                            {showAnswer && isCorrectOpt && <CheckCircle2 className="size-4 text-green-400 ml-auto shrink-0" />}
                            {showAnswer && isSelected && !isCorrectOpt && <XCircle className="size-4 text-destructive ml-auto shrink-0" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Phrase Choice */}
              {(currentQ.type === 'phrase_choice') && (
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-muted/30 border border-border/30 space-y-1.5">
                    <span className="text-base font-semibold text-foreground font-mono">{currentQ.phrase}</span>
                    <p className="text-xs text-muted-foreground italic">"{currentQ.context}"</p>
                  </div>
                  <div className="space-y-2">
                    {currentQ.options.map((opt, oi) => {
                      const isSelected = choiceIdx === oi;
                      const isCorrectOpt = oi === currentQ.correctIdx;
                      let optClass = 'border-border/40 hover:border-cyan-500/50 cursor-pointer';
                      if (showAnswer) {
                        if (isCorrectOpt) optClass = 'border-green-500/60 bg-green-500/10';
                        else if (isSelected && !isCorrectOpt) optClass = 'border-destructive/60 bg-destructive/10';
                        else optClass = 'border-border/20 opacity-50';
                      } else if (isSelected) {
                        optClass = 'border-cyan-500 bg-cyan-500/10';
                      }
                      return (
                        <button key={oi} type="button" disabled={showAnswer}
                          onClick={() => !showAnswer && setChoiceIdx(oi)}
                          className={`w-full text-left p-3 rounded-lg border transition-colors ${optClass}`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`size-6 rounded-full border flex items-center justify-center text-xs font-medium shrink-0 ${
                              showAnswer && isCorrectOpt ? 'border-green-500 text-green-400' :
                              showAnswer && isSelected && !isCorrectOpt ? 'border-destructive text-destructive' :
                              isSelected ? 'border-cyan-500 text-cyan-400' : 'border-border text-muted-foreground'
                            }`}>{String.fromCharCode(65 + oi)}</span>
                            <span className="text-sm text-foreground">{opt}</span>
                            {showAnswer && isCorrectOpt && <CheckCircle2 className="size-4 text-green-400 ml-auto shrink-0" />}
                            {showAnswer && isSelected && !isCorrectOpt && <XCircle className="size-4 text-destructive ml-auto shrink-0" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Grammar Choice */}
              {(currentQ.type === 'grammar_choice') && (
                <div className="space-y-3">
                  <div className="space-y-2">
                    {currentQ.options.map((opt, oi) => {
                      const isSelected = choiceIdx === oi;
                      const isCorrectOpt = oi === currentQ.correctIdx;
                      let optClass = 'border-border/40 hover:border-orange-500/50 cursor-pointer';
                      if (showAnswer) {
                        if (isCorrectOpt) optClass = 'border-green-500/60 bg-green-500/10';
                        else if (isSelected && !isCorrectOpt) optClass = 'border-destructive/60 bg-destructive/10';
                        else optClass = 'border-border/20 opacity-50';
                      } else if (isSelected) {
                        optClass = 'border-orange-500 bg-orange-500/10';
                      }
                      return (
                        <button key={oi} type="button" disabled={showAnswer}
                          onClick={() => !showAnswer && setChoiceIdx(oi)}
                          className={`w-full text-left p-3 rounded-lg border transition-colors ${optClass}`}
                        >
                          <div className="flex items-start gap-3">
                            <span className={`size-6 rounded-full border flex items-center justify-center text-xs font-medium shrink-0 mt-0.5 ${
                              showAnswer && isCorrectOpt ? 'border-green-500 text-green-400' :
                              showAnswer && isSelected && !isCorrectOpt ? 'border-destructive text-destructive' :
                              isSelected ? 'border-orange-500 text-orange-400' : 'border-border text-muted-foreground'
                            }`}>{String.fromCharCode(65 + oi)}</span>
                            <span className="text-sm text-foreground leading-relaxed">{opt}</span>
                            {showAnswer && isCorrectOpt && <CheckCircle2 className="size-4 text-green-400 shrink-0 mt-1" />}
                            {showAnswer && isSelected && !isCorrectOpt && <XCircle className="size-4 text-destructive shrink-0 mt-1" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Submit button (for types that don't have inline submit) */}
              {(currentQ.type === 'choice' || currentQ.type === 'truefalse' || currentQ.type === 'word_choice' || currentQ.type === 'phrase_choice' || currentQ.type === 'grammar_choice') && !showAnswer && (
                <Button
                  onClick={handleSubmit}
                  disabled={currentQ.type === 'truefalse' ? tfAnswer === null : choiceIdx < 0}
                  className="w-full gap-2"
                >
                  提交答案
                </Button>
              )}

              {/* Answer Reveal */}
              {showAnswer && currentAnswer && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  <div className={`flex items-center gap-2 p-3 rounded-md ${currentAnswer.isCorrect ? 'bg-green-500/10 border border-green-500/20' : 'bg-destructive/10 border border-destructive/20'}`}>
                    {currentAnswer.isCorrect ? (
                      <CheckCircle2 className="size-5 text-green-400 shrink-0" />
                    ) : (
                      <XCircle className="size-5 text-destructive shrink-0" />
                    )}
                    <div className="flex-1 min-w-0">
                      <span className={`text-sm font-medium ${currentAnswer.isCorrect ? 'text-green-400' : 'text-destructive'}`}>
                        {currentAnswer.isCorrect ? '回答正确！' : '回答有误'}
                      </span>
                      {!currentAnswer.isCorrect && (
                        <div className="mt-1 space-y-1">
                          <div className="text-xs text-muted-foreground">
                            你的答案：<span className="text-foreground">{currentAnswer.userAnswer || '（未作答）'}</span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            正确答案：<span className="text-green-400 font-medium">{currentAnswer.correctAnswer}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-3 rounded-md bg-muted/30 border border-border/30 space-y-1.5">
                    <div className="text-xs text-muted-foreground font-medium">原句参考</div>
                    <div className="text-sm text-foreground">{currentQ.sentence.en}</div>
                    <div className="text-xs text-muted-foreground">{currentQ.sentence.cn}</div>
                  </div>

                  {(currentQ.type === 'word_choice' || currentQ.type === 'phrase_choice' || currentQ.type === 'grammar_choice') && currentQ.explanation && (
                    <div className="p-3 rounded-md bg-primary/5 border border-primary/20 space-y-1.5">
                      <div className="text-xs text-primary font-medium flex items-center gap-1">
                        <Sparkles className="size-3" />
                        {currentQ.type === 'word_choice' ? '记忆提示' : currentQ.type === 'phrase_choice' ? '用法解析' : '语法详解'}
                      </div>
                      <div className="text-xs text-foreground/80 leading-relaxed whitespace-pre-line">
                        {currentQ.explanation}
                      </div>
                    </div>
                  )}

                  <Button onClick={nextQuestion} className="w-full gap-2">
                    {currentIdx < questionsCount - 1 ? (
                      <>下一题 <ArrowRight className="size-4" /></>
                    ) : (
                      <><Trophy className="size-4" /> 查看结果</>
                    )}
                  </Button>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      {answers.length > 0 && (
        <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="size-3.5 text-green-400" />
            {answers.filter(a => a.isCorrect).length} 正确
          </span>
          <span className="flex items-center gap-1">
            <XCircle className="size-3.5 text-destructive" />
            {answers.filter(a => !a.isCorrect).length} 错误
          </span>
        </div>
      )}
    </div>
  );
}

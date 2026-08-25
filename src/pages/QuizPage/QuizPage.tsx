import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Brain, Clock, Clapperboard, ChevronRight,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import { speakWithPlugin, stopAllSpeech, warmupAudio } from '@/lib/ttsPlugin';
import { SENTENCE_SECTIONS, MOCK_SENTENCES, type ISentence } from '@/data/sentenceLearning';
import { useFavorites, extractSentencePairsFromResponse } from '@/hooks/useFavorites';
import { useWrongBook } from '@/hooks/useWrongBook';
import { useHiddenScenarios } from '@/hooks/useHiddenScenarios';
import { recordQuizResult } from '@/hooks/useStudyProgress';
import {
  generateQuestions, getBestScore, saveQuizResult,
  normalizeAnswer, checkAnswer,
  type IQuestion, type IAnswerRecord, type Phase,
} from './quizQuestions';
import QuizPlayView from './QuizPlayView';
import QuizResultsView from './QuizResultsView';

export default function QuizPage() {
  const navigate = useNavigate();
  const { favorites } = useFavorites();
  const { addWrongAnswersBatch } = useWrongBook();
  const { hiddenScenarios } = useHiddenScenarios();
  const customScenarios = favorites.filter(f => f.type === 'scenario' && f.inPractice);

  const [phase, setPhase] = useState<Phase>('select');
  const [selectedTopicIdx, setSelectedTopicIdx] = useState<number>(-1);
  const [customScenarioId, setCustomScenarioId] = useState<string | null>(null);

  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<IAnswerRecord[]>([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [choiceIdx, setChoiceIdx] = useState<number>(-1);
  const [tfAnswer, setTfAnswer] = useState<boolean | null>(null);
  const [textInput, setTextInput] = useState('');
  const [matchSelected, setMatchSelected] = useState<number>(-1);
  const [matchPairs, setMatchPairs] = useState<Record<number, number>>({});
  const [matchRightOrder, setMatchRightOrder] = useState<number[]>([]);

  const textInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (phase === 'quiz') {
      timerRef.current = setInterval(() => {
        setElapsed(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
      return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [phase, startTime]);

  const topicQuestions = useMemo(() => {
    if (selectedTopicIdx < 0) return [];
    const section = SENTENCE_SECTIONS[selectedTopicIdx];
    const [minId, maxId] = section.range;
    const sectionSentences = MOCK_SENTENCES.filter(
      (s: ISentence) => s.id >= minId && s.id <= maxId
    );
    return generateQuestions(sectionSentences);
  }, [selectedTopicIdx]);

  const startQuiz = useCallback((topicIdx: number) => {
    setSelectedTopicIdx(topicIdx);
    setCustomScenarioId(null);
    setCurrentIdx(0);
    setAnswers([]);
    setShowAnswer(false);
    resetInteractionState();
    setStartTime(Date.now());
    setElapsed(0);
  }, []);

  const startCustomQuiz = useCallback((favId: string) => {
    const scenario = favorites.find(f => f.id === favId);
    if (!scenario) return;
    const pairs = extractSentencePairsFromResponse(scenario.aiResponse);
    if (pairs.length === 0) return;

    const allFake: ISentence[] = pairs.map((p, i) => ({
      id: i, en: p.en, cn: p.cn, ipa: '', tags: [], when: '', words: [], phrases: [],
    }));
    const qs = generateQuestions(allFake);

    setCustomScenarioId(favId);
    setSelectedTopicIdx(-1);
    setQuestions(qs);
    setCurrentIdx(0);
    setAnswers([]);
    setShowAnswer(false);
    resetInteractionState();
    setStartTime(Date.now());
    setElapsed(0);
    setPhase('quiz');
  }, [favorites]);

  const resetInteractionState = useCallback(() => {
    setChoiceIdx(-1);
    setTfAnswer(null);
    setTextInput('');
    setMatchSelected(-1);
    setMatchPairs({});
    setMatchRightOrder([]);
  }, []);

  useEffect(() => {
    if (selectedTopicIdx >= 0 && topicQuestions.length > 0 && phase === 'select') {
      setQuestions(topicQuestions);
      setPhase('quiz');
    }
  }, [selectedTopicIdx, topicQuestions, phase]);

  useEffect(() => {
    if (phase === 'quiz' && !showAnswer) {
      setTimeout(() => textInputRef.current?.focus(), 150);
    }
  }, [currentIdx, phase, showAnswer]);

  const currentQ = questions[currentIdx];

  const recordAnswer = useCallback((isCorrect: boolean, userAns: string, correctAns: string, q: IQuestion) => {
    setAnswers(prev => [...prev, {
      questionType: q.type,
      question: getQuestionPrompt(q),
      userAnswer: userAns,
      correctAnswer: correctAns,
      isCorrect,
      sentenceEn: q.sentence.en,
      sentenceCn: q.sentence.cn,
      sentenceId: q.sentence.id,
    }]);
    setShowAnswer(true);
  }, []);

  const handleSubmit = useCallback(() => {
    if (!currentQ || showAnswer) return;

    switch (currentQ.type) {
      case 'choice': {
        if (choiceIdx < 0) return;
        const correct = choiceIdx === currentQ.correctIdx;
        recordAnswer(correct, currentQ.options[choiceIdx], currentQ.options[currentQ.correctIdx], currentQ);
        break;
      }
      case 'truefalse': {
        if (tfAnswer === null) return;
        const correct = tfAnswer === currentQ.isCorrect;
        recordAnswer(correct, tfAnswer ? '正确' : '错误', currentQ.isCorrect ? '正确' : '错误', currentQ);
        break;
      }
      case 'fillblank': {
        if (!textInput.trim()) return;
        const correct = normalizeAnswer(textInput) === normalizeAnswer(currentQ.answer);
        recordAnswer(correct, textInput, currentQ.answer, currentQ);
        break;
      }
      case 'listen': {
        if (!textInput.trim()) return;
        const correct = checkAnswer(textInput, currentQ.answer);
        recordAnswer(correct, textInput, currentQ.answer, currentQ);
        break;
      }
      case 'matching': {
        if (Object.keys(matchPairs).length < currentQ.pairs.length) return;
        const correctCount = currentQ.pairs.filter((_, i) => matchPairs[i] === i).length;
        const allCorrect = correctCount === currentQ.pairs.length;
        const userStr = Object.entries(matchPairs).map(([l, r]) => `${currentQ.pairs[Number(l)].en}→${currentQ.pairs[Number(r)].cn}`).join('; ');
        const correctStr = currentQ.pairs.map(p => `${p.en}→${p.cn}`).join('; ');
        recordAnswer(allCorrect, `${correctCount}/${currentQ.pairs.length} 正确`, correctStr, currentQ);
        break;
      }
      case 'word_choice':
      case 'phrase_choice':
      case 'grammar_choice': {
        if (choiceIdx < 0) return;
        const correct = choiceIdx === currentQ.correctIdx;
        recordAnswer(correct, currentQ.options[choiceIdx], currentQ.options[currentQ.correctIdx], currentQ);
        break;
      }
    }
  }, [currentQ, showAnswer, choiceIdx, tfAnswer, textInput, matchPairs, recordAnswer]);

  const nextQuestion = useCallback(() => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setShowAnswer(false);
      resetInteractionState();
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
      const totalTime = Math.floor((Date.now() - startTime) / 1000);
      const score = answers.filter(a => a.isCorrect).length;
      const topicLabel = customScenarioId
        ? (favorites.find(f => f.id === customScenarioId)?.query || '自定义场景')
        : (SENTENCE_SECTIONS[selectedTopicIdx]?.label || '未知主题');
      saveQuizResult({ topicLabel, score, total: questions.length, timeSeconds: totalTime, date: new Date().toISOString() });
      recordQuizResult(
        score,
        questions.length,
        answers.map((answer) => ({
          sentenceId: answer.sentenceId,
          correct: answer.isCorrect,
        })),
      );

      const wrongItems = answers.filter(a => !a.isCorrect).map(a => ({
        questionType: a.questionType,
        question: a.question,
        userAnswer: a.userAnswer,
        correctAnswer: a.correctAnswer,
        sentenceEn: a.sentenceEn,
        sentenceCn: a.sentenceCn,
        topicLabel,
      }));
      if (wrongItems.length > 0) {
        addWrongAnswersBatch(wrongItems);
      }

      setPhase('result');
    }
  }, [currentIdx, questions.length, startTime, answers, selectedTopicIdx, customScenarioId, favorites, resetInteractionState]);

  const resetQuiz = useCallback(() => {
    setPhase('select');
    setSelectedTopicIdx(-1);
    setCustomScenarioId(null);
    setQuestions([]);
    setCurrentIdx(0);
    setAnswers([]);
    setShowAnswer(false);
    setElapsed(0);
    resetInteractionState();
  }, [resetInteractionState]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (showAnswer) nextQuestion();
      else handleSubmit();
    }
  }, [showAnswer, nextQuestion, handleSubmit]);

  const shuffledRightOrder = useMemo(() => {
    if (!currentQ || currentQ.type !== 'matching') return [];
    const indices = currentQ.pairs.map((_, i) => i);
    return indices.sort((a, b) => currentQ.pairs[a].cn.localeCompare(currentQ.pairs[b].cn));
  }, [currentQ]);

  const speakStopRef = useRef<(() => void) | null>(null);
  const [isQuizSpeaking, setIsQuizSpeaking] = useState(false);

  useEffect(() => {
    return () => {
      if (speakStopRef.current) {
        speakStopRef.current();
        speakStopRef.current = null;
      }
      stopAllSpeech();
    };
  }, []);

  const speakSentence = useCallback((text: string) => {
    if (!text?.trim()) return;
    warmupAudio();
    if (speakStopRef.current) {
      speakStopRef.current();
      speakStopRef.current = null;
    }
    setIsQuizSpeaking(true);
    const stopFn = speakWithPlugin(text, () => {
      if (speakStopRef.current === stopFn) {
        speakStopRef.current = null;
      }
      setIsQuizSpeaking(false);
    });
    speakStopRef.current = stopFn;
  }, []);

  const handleMatchLeftClick = useCallback((leftIdx: number) => {
    if (showAnswer) return;
    if (matchPairs[leftIdx] !== undefined) return;
    setMatchSelected(leftIdx);
  }, [showAnswer, matchPairs]);

  const handleMatchRightClick = useCallback((rightIdx: number) => {
    if (showAnswer || matchSelected < 0) return;
    if (matchRightOrder.includes(rightIdx)) return;
    setMatchPairs(prev => ({ ...prev, [matchSelected]: rightIdx }));
    setMatchRightOrder(prev => [...prev, rightIdx]);
    setMatchSelected(-1);
  }, [showAnswer, matchSelected, matchRightOrder]);

  function getQuestionPrompt(q: IQuestion): string {
    switch (q.type) {
      case 'choice': return q.prompt;
      case 'truefalse': return `判断: ${q.en} = ${q.cn}`;
      case 'fillblank': return `填空: ${q.display}`;
      case 'listen': return '听录音，写出完整句子';
      case 'matching': return `连线配对 ${q.pairs.length} 组`;
      case 'word_choice': return `单词「${q.word}」${q.pos ? `(${q.pos})` : ''} 的正确中文意思是？`;
      case 'phrase_choice': return `词组「${q.phrase}」的正确中文意思是？`;
      case 'grammar_choice': return q.grammarQuestion;
    }
  }

  const handleRetry = useCallback(() => {
    if (customScenarioId) {
      startCustomQuiz(customScenarioId);
    } else {
      setCurrentIdx(0);
      setAnswers([]);
      setShowAnswer(false);
      resetInteractionState();
      setStartTime(Date.now());
      setElapsed(0);
      setQuestions(topicQuestions);
      setPhase('quiz');
    }
  }, [customScenarioId, startCustomQuiz, resetInteractionState, topicQuestions]);

  // ── Phase: Topic Selection ──
  if (phase === 'select') {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Brain className="size-5 text-primary" />
              自测挑战
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              选择主题与题型，全面测试你的数据中心英语
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
          {SENTENCE_SECTIONS.map((section, idx) => ({ section, idx }))
            .filter(({ idx }) => !hiddenScenarios.includes(idx))
            .map(({ section, idx }) => {
            const [minId, maxId] = section.range;
            const sentenceCount = maxId - minId + 1;
            const bestScore = getBestScore(section.label);
            return (
              <motion.div
                key={`${section.label}-${idx}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.02 }}
              >
                <Card
                  className="cursor-pointer border-border/40 hover:border-primary/50 transition-colors group"
                  onClick={() => startQuiz(idx)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                          {section.label}
                        </div>
                        <div className="flex items-center gap-3 mt-1.5">
                          <span className="text-xs text-muted-foreground">{sentenceCount} 句 · {sentenceCount * 2} 题</span>
                          {bestScore !== null && (
                            <span className={`text-xs font-medium ${bestScore >= 80 ? 'text-green-400' : bestScore >= 50 ? 'text-primary' : 'text-destructive'}`}>
                              最佳 {bestScore}%
                            </span>
                          )}
                        </div>
                      </div>
                      <ChevronRight className="size-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-0.5" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {customScenarios.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4 mt-6">
              <Clapperboard className="size-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">我的场景</h2>
              <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                {customScenarios.length}
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {customScenarios.map((fav) => {
                const pairs = extractSentencePairsFromResponse(fav.aiResponse);
                const bestScore = getBestScore(fav.query);
                return (
                  <motion.div
                    key={fav.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card
                      className="cursor-pointer border-primary/20 bg-primary/5 hover:border-primary/50 transition-colors group"
                      onClick={() => pairs.length > 0 && startCustomQuiz(fav.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors flex items-center gap-1.5">
                              <Clapperboard className="size-3.5 text-primary shrink-0" />
                              {fav.query}
                            </div>
                            <div className="flex items-center gap-3 mt-1.5">
                              <span className="text-xs text-muted-foreground">{pairs.length} 句</span>
                              {bestScore !== null && (
                                <span className={`text-xs font-medium ${bestScore >= 80 ? 'text-green-400' : bestScore >= 50 ? 'text-primary' : 'text-destructive'}`}>
                                  最佳 {bestScore}%
                                </span>
                              )}
                            </div>
                          </div>
                          <ChevronRight className="size-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-0.5" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  // ── Phase: Quiz ──
  if (phase === 'quiz' && questions.length > 0 && currentQ) {
    const currentAnswer = answers[answers.length - 1];
    const progressValue = ((currentIdx + (showAnswer ? 1 : 0)) / questions.length) * 100;

    return (
      <QuizPlayView
        currentQ={currentQ}
        currentIdx={currentIdx}
        questionsCount={questions.length}
        progressValue={progressValue}
        elapsed={elapsed}
        showAnswer={showAnswer}
        currentAnswer={currentAnswer}
        answers={answers}
        choiceIdx={choiceIdx}
        setChoiceIdx={setChoiceIdx}
        tfAnswer={tfAnswer}
        setTfAnswer={setTfAnswer}
        textInput={textInput}
        setTextInput={setTextInput}
        textInputRef={textInputRef}
        matchPairs={matchPairs}
        matchSelected={matchSelected}
        matchRightOrder={matchRightOrder}
        shuffledRightOrder={shuffledRightOrder}
        handleKeyDown={handleKeyDown}
        handleSubmit={handleSubmit}
        handleMatchLeftClick={handleMatchLeftClick}
        handleMatchRightClick={handleMatchRightClick}
        speakSentence={speakSentence}
        isQuizSpeaking={isQuizSpeaking}
        nextQuestion={nextQuestion}
        resetQuiz={resetQuiz}
        getQuestionPrompt={getQuestionPrompt}
      />
    );
  }

  // ── Phase: Result ──
  if (phase === 'result') {
    const topicLabel = customScenarioId
      ? (favorites.find(f => f.id === customScenarioId)?.query || '自定义场景')
      : (SENTENCE_SECTIONS[selectedTopicIdx]?.label || '未知主题');
    return (
      <QuizResultsView
        answers={answers}
        elapsed={elapsed}
        selectedTopicIdx={selectedTopicIdx}
        customScenarioId={customScenarioId}
        favorites={favorites}
        topicLabel={topicLabel}
        onReset={resetQuiz}
        onRetry={handleRetry}
        onNavigateWrongBook={() => navigate('/wrong-book')}
      />
    );
  }

  return null;
}

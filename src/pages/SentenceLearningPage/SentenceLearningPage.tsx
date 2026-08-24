import { useState, useMemo, useCallback, useRef, useEffect, type ChangeEvent } from 'react';
import {
  Volume2, Square, ChevronLeft, ChevronRight, BookOpen, MessageSquare,
  GraduationCap, Lightbulb, Mic, HelpCircle, StickyNote, Layers,
} from 'lucide-react';
import { storage } from '@/lib/storage';
import { userStorageKey } from '@/lib/userStorage';

import { SENTENCE_SECTIONS, MOCK_SENTENCES } from '@/data/sentenceLearning';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
} from '@/components/ui/select';
import {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
} from '@/components/ui/accordion';
import { Textarea } from '@/components/ui/textarea';
import { speakWithPlugin, stopAllSpeech, warmupAudio } from '@/lib/ttsPlugin';
import { recordSentenceStudied } from '@/hooks/useStudyProgress';

const NOTES_KEY = 'dc_sentence_notes';

function loadNotes(): Record<string, string> {
  try {
    const raw = storage.getItem(userStorageKey(NOTES_KEY));
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveNotes(all: Record<string, string>) {
  storage.setItem(userStorageKey(NOTES_KEY), JSON.stringify(all));
}

export default function SentenceLearningPage() {
  const [currentId, setCurrentId] = useState(1);
  const [quizOpen, setQuizOpen] = useState<Record<number, boolean>>({});
  const [allNotes, setAllNotes] = useState(loadNotes);
  const [accordionValue, setAccordionValue] = useState<string[]>([
    'words', 'phrases', 'grammar', 'pattern', 'thinking', 'pronunciation', 'quiz', 'notes',
  ]);
  const notesRef = useRef<HTMLTextAreaElement>(null);
  const repeatCount = 1;
  const [isSpeaking, setIsSpeaking] = useState(false);
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
    setIsSpeaking(true);
    const stopFn = speakWithPlugin(text, () => {
      if (speakStopRef.current === stopFn) {
        speakStopRef.current = null;
      }
      setIsSpeaking(false);
    }, 'british');
    speakStopRef.current = stopFn;
  }, []);

  const stopSpeak = useCallback(() => {
    if (speakStopRef.current) {
      speakStopRef.current();
      speakStopRef.current = null;
    }
    stopAllSpeech();
    setIsSpeaking(false);
  }, []);

  const sentence = useMemo(
    () => MOCK_SENTENCES.find((s) => s.id === currentId) ?? MOCK_SENTENCES[0],
    [currentId],
  );

  const currentNote = allNotes[String(sentence.id)] ?? '';

  useEffect(() => {
    if (accordionValue.includes('notes') && notesRef.current) {
      notesRef.current.focus();
    }
  }, [currentId, accordionValue]);

  // Record sentence as studied when user views it
  useEffect(() => {
    recordSentenceStudied(currentId);
  }, [currentId]);

  const handleSpeak = useCallback(() => {
    speak(sentence.en);
  }, [sentence.en, speak]);

  const handleSectionChange = useCallback((sectionIdx: number) => {
    const sec = SENTENCE_SECTIONS[sectionIdx];
    if (sec) setCurrentId(sec.range[0]);
  }, []);

  const handleSentenceChange = useCallback((val: string) => {
    setCurrentId(Number(val));
    setQuizOpen({});
  }, []);

  const handleNoteChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setAllNotes((prev) => {
      const next = { ...prev, [String(sentence.id)]: val };
      saveNotes(next);
      return next;
    });
  }, [sentence.id]);

  const maxId = MOCK_SENTENCES[MOCK_SENTENCES.length - 1]?.id ?? 2400;

  const goPrev = useCallback(() => {
    if (currentId <= 1) return;
    if (currentId === 1201) { setCurrentId(500); return; }
    if (currentId === 2001) { setCurrentId(1840); return; }
    setCurrentId((p) => p - 1);
  }, [currentId]);

  const goNext = useCallback(() => {
    if (currentId >= maxId) return;
    if (currentId === 500) { setCurrentId(1201); return; }
    if (currentId === 1840) { setCurrentId(2001); return; }
    setCurrentId((p) => p + 1);
  }, [currentId, maxId]);

  const sectionIdx = useMemo(
    () => SENTENCE_SECTIONS.findIndex(
      (s) => sentence.id >= s.range[0] && sentence.id <= s.range[1],
    ),
    [sentence.id],
  );

  return (
    <div className="space-y-6">
      {/* ===== 顶部控制栏 ===== */}
      <Card className="sticky top-0 z-10 border-border">
        <CardContent className="p-3">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
            <Select value={String(sectionIdx)} onValueChange={(v) => handleSectionChange(Number(v))}>
              <SelectTrigger className="w-full lg:w-44 shrink-0">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {SENTENCE_SECTIONS.map((sec, i) => (
                  <SelectItem key={sec.label} value={String(i)}>
                    {sec.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={String(sentence.id)} onValueChange={handleSentenceChange}>
              <SelectTrigger className="flex-1 min-w-0">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {MOCK_SENTENCES.map((s) => (
                  <SelectItem key={s.id} value={String(s.id)}>
                    第{s.id}句 · {s.en.slice(0, 36)}{s.en.length > 36 ? '…' : ''}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* 朗读控制区：第一行翻页 + 第二行朗读参数 + 按钮 */}
            <div className="flex items-center gap-2 shrink-0 flex-wrap">
              {/* 翻页 */}
              <Button variant="outline" size="icon" onClick={goPrev} disabled={currentId <= 1}>
                <ChevronLeft className="size-4" />
              </Button>
              <span className="text-sm text-muted-foreground tabular-nums min-w-[4.5rem] text-center">
                {currentId} / {maxId}
              </span>
              <Button variant="outline" size="icon" onClick={goNext} disabled={currentId >= maxId}>
                <ChevronRight className="size-4" />
              </Button>

              <div className="w-full lg:w-auto" />

              {/* 朗读按钮 */}
              <div className="flex items-center gap-2">
                <Button size="sm" onClick={handleSpeak} disabled={isSpeaking} className="shrink-0">
                  <Volume2 className="size-4 mr-1" />
                  {isSpeaking ? '朗读中' : '朗读'}
                </Button>
                <Button
                  size="sm"
                  variant={isSpeaking ? 'destructive' : 'outline'}
                  onClick={stopSpeak}
                  disabled={!isSpeaking}
                  className="shrink-0"
                >
                  <Square className="size-3 mr-1" />
                  停止
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ===== 主句子卡片 ===== */}
      <Card className="border-primary/30">
        <CardContent className="p-6 md:p-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            {sentence.speaker && (
              <Badge variant="secondary" className="text-xs shrink-0">
                {sentence.speaker}
              </Badge>
            )}
            {sentence.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs shrink-0">{tag}</Badge>
            ))}
          </div>

          <p className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed">
            {sentence.en}
          </p>

          <p className="text-base md:text-lg text-muted-foreground">{sentence.cn}</p>

          <p className="text-sm text-muted-foreground/70 font-mono tabular-nums">{sentence.ipa}</p>

          <div className="pt-3 border-t border-border/50">
            <p className="text-sm text-accent-foreground leading-relaxed">{sentence.when}</p>
          </div>
        </CardContent>
      </Card>

      {/* ===== 学习模块手风琴 ===== */}
      <Accordion type="multiple" value={accordionValue} onValueChange={setAccordionValue}>
        {/* 单词拆解 */}
        <AccordionItem value="words" className="border-border">
          <AccordionTrigger className="px-4 py-3 hover:no-underline">
            <span className="flex items-center gap-2 text-sm font-semibold">
              <BookOpen className="size-4 text-primary" />
              单词拆解
              <Badge variant="secondary" className="text-xs">{sentence.words.length}</Badge>
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <div className="grid gap-3 md:grid-cols-2">
              {sentence.words.map((word, wi) => (
                <Card key={wi} className="border-border/60">
                  <CardContent className="p-4 space-y-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-lg font-semibold text-primary shrink-0">{word.w}</span>
                      <span className="text-xs text-muted-foreground font-mono shrink-0">{word.ipa}</span>
                      <Badge variant="secondary" className="text-xs shrink-0">{word.pos}</Badge>
                      <Button variant="ghost" size="icon" className="shrink-0 size-7" onClick={() => speak(word.w)} aria-label={`朗读 ${word.w}`}>
                        <Volume2 className="size-3.5" />
                      </Button>
                    </div>

                    <p className="text-sm font-medium text-foreground">{word.cn}</p>

                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground font-medium">记忆提示</p>
                      <p className="text-sm text-accent-foreground whitespace-pre-line leading-relaxed">{word.memory}</p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground font-medium">发音要领</p>
                      <p className="text-sm text-accent-foreground whitespace-pre-line leading-relaxed">{word.phonics}</p>
                    </div>

                    {word.collocations.length > 0 && (
                      <div className="space-y-1.5">
                        <p className="text-xs text-muted-foreground font-medium">常用搭配</p>
                        <div className="flex flex-wrap gap-1.5">
                          {word.collocations.map(([col, colCn], ci) => (
                            <button key={ci} type="button" className="inline-flex items-center gap-1 rounded-md border border-border/50 bg-secondary/40 px-2 py-0.5 text-xs hover:bg-secondary/70 transition-colors cursor-pointer" onClick={() => speak(col)}>
                              <span className="text-foreground">{col}</span>
                              <span className="text-muted-foreground">{colCn}</span>
                              <Volume2 className="size-3 text-muted-foreground/60 shrink-0" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {word.examples.length > 0 && (
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground font-medium">例句</p>
                        {word.examples.map(([enEx, cnEx], ei) => (
                          <div key={ei} className="text-sm space-y-0.5">
                            <div className="flex items-start gap-1.5">
                              <Button variant="ghost" size="icon" className="shrink-0 size-6 mt-0.5" onClick={() => speak(enEx)} aria-label="朗读例句">
                                <Volume2 className="size-3" />
                              </Button>
                              <div>
                                <p className="text-foreground">{enEx}</p>
                                <p className="text-muted-foreground text-xs">{cnEx}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 词组 */}
        <AccordionItem value="phrases" className="border-border">
          <AccordionTrigger className="px-4 py-3 hover:no-underline">
            <span className="flex items-center gap-2 text-sm font-semibold">
              <Layers className="size-4 text-primary" />
              词组与搭配
              <Badge variant="secondary" className="text-xs">{sentence.phrases.length}</Badge>
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <div className="space-y-3">
              {sentence.phrases.map((phrase, pi) => (
                <Card key={pi} className="border-border/60">
                  <CardContent className="p-4 space-y-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-base font-semibold text-primary">{phrase.p}</span>
                      {phrase.ipa && (
                        <span className="text-xs text-muted-foreground font-mono">{phrase.ipa}</span>
                      )}
                      <span className="text-sm text-foreground">{phrase.cn}</span>
                      <Button variant="ghost" size="icon" className="shrink-0 size-7" onClick={() => speak(phrase.p)} aria-label={`朗读 ${phrase.p}`}>
                        <Volume2 className="size-3.5" />
                      </Button>
                    </div>
                    <p className="text-sm text-accent-foreground leading-relaxed">{phrase.why}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 语法 */}
        <AccordionItem value="grammar" className="border-border">
          <AccordionTrigger className="px-4 py-3 hover:no-underline">
            <span className="flex items-center gap-2 text-sm font-semibold">
              <GraduationCap className="size-4 text-primary" />
              语法解析
              <Badge variant="secondary" className="text-xs">{sentence.grammar.length}</Badge>
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <div className="space-y-3">
              {sentence.grammar.map((g, gi) => (
                <Card key={gi} className="border-border/60">
                  <CardContent className="p-4 space-y-2">
                    <p className="text-sm font-medium text-primary flex items-start gap-2">
                      <HelpCircle className="size-4 shrink-0 mt-0.5" />
                      {g.q}
                    </p>
                    <p className="text-sm text-accent-foreground whitespace-pre-line leading-relaxed pl-6">
                      {g.a}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 句型 */}
        <AccordionItem value="pattern" className="border-border">
          <AccordionTrigger className="px-4 py-3 hover:no-underline">
            <span className="flex items-center gap-2 text-sm font-semibold">
              <MessageSquare className="size-4 text-primary" />
              句型模板
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <div className="space-y-4">
              <Card className="border-primary/30 bg-primary/5">
                <CardContent className="p-4">
                  <p className="text-base font-semibold text-primary">{sentence.pattern}</p>
                </CardContent>
              </Card>

              {sentence.patternExamples && sentence.patternExamples.length > 0 && (
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground font-medium">举一反三</p>
                {sentence.patternExamples.map((ex, ei) => {
                  const exEn = Array.isArray(ex) ? ex[0] : ex.en;
                  const exCn = Array.isArray(ex) ? ex[1] : ex.cn;
                  const exWords = !Array.isArray(ex) && 'words' in ex ? ex.words : [];
                  return (
                  <Card key={ei} className="border-border/60">
                    <CardContent className="p-3 space-y-2">
                      <div className="flex items-start gap-1.5">
                        <Button variant="ghost" size="icon" className="shrink-0 size-6 mt-0.5" onClick={() => speak(exEn)} aria-label="朗读例句">
                          <Volume2 className="size-3" />
                        </Button>
                        <div>
                          <p className="text-sm text-foreground">{exEn}</p>
                          <p className="text-xs text-muted-foreground">{exCn}</p>
                        </div>
                      </div>
                      {exWords.length > 0 && (
                        <div className="ml-7.5 space-y-1.5 border-t border-border/40 pt-2">
                          {exWords.map((w, wi) => (
                            <div key={wi} className="flex items-start gap-1.5">
                              <Button variant="ghost" size="icon" className="shrink-0 size-5 mt-0.5" onClick={() => speak(w.w)} aria-label="朗读单词">
                                <Volume2 className="size-2.5" />
                              </Button>
                              <div className="min-w-0">
                                <div className="flex items-baseline gap-2 flex-wrap">
                                  <span className="text-xs font-medium text-foreground">{w.w}</span>
                                  <span className="text-[10px] text-muted-foreground font-mono">{w.ipa}</span>
                                  <span className="text-[10px] text-primary/80">{w.cn}</span>
                                </div>
                                {w.phonics && (
                                  <p className="text-[10px] text-muted-foreground/70 mt-0.5">{w.phonics}</p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                  );
                })}
              </div>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 英语思维 */}
        <AccordionItem value="thinking" className="border-border">
          <AccordionTrigger className="px-4 py-3 hover:no-underline">
            <span className="flex items-center gap-2 text-sm font-semibold">
              <Lightbulb className="size-4 text-primary" />
              英语思维
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <Card className="border-border/60">
              <CardContent className="p-4">
                <div className="text-sm text-accent-foreground whitespace-pre-line leading-relaxed">
                  {sentence.thinking?.split(/(\n)/).map((line, lineIdx) => {
                    if (line === '\n') return <br key={lineIdx} />;
                    // Split by English words/phrases (including contractions and hyphens)
                    const parts = line.split(/([a-zA-Z]+(?:[''-][a-zA-Z]+)*)/g);
                    return (
                      <span key={lineIdx}>
                        {parts.map((part, partIdx) => {
                          // Check if part is an English word (at least 2 letters)
                          if (/^[a-zA-Z]+(?:[''-][a-zA-Z]+)*$/.test(part) && part.length >= 2) {
                            return (
                              <span key={partIdx} className="inline-flex items-center gap-1 mx-0.5">
                                <span className="font-medium text-primary">{part}</span>
                                <button
                                  type="button"
                                  onClick={() => speak(part)}
                                  className="inline-flex items-center justify-center rounded-full p-0.5 hover:bg-primary/10 transition-colors"
                                  aria-label={`朗读 ${part}`}
                                >
                                  <Volume2 className="size-3 text-primary/70" />
                                </button>
                              </span>
                            );
                          }
                          return <span key={partIdx}>{part}</span>;
                        })}
                      </span>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        {/* 发音提示 */}
        <AccordionItem value="pronunciation" className="border-border">
          <AccordionTrigger className="px-4 py-3 hover:no-underline">
            <span className="flex items-center gap-2 text-sm font-semibold">
              <Mic className="size-4 text-primary" />
              发音提示
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <Card className="border-border/60">
              <CardContent className="p-4">
                <p className="text-sm text-accent-foreground whitespace-pre-line leading-relaxed">
                  {sentence.pronunciation}
                </p>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        {/* 测验 */}
        <AccordionItem value="quiz" className="border-border">
          <AccordionTrigger className="px-4 py-3 hover:no-underline">
            <span className="flex items-center gap-2 text-sm font-semibold">
              <HelpCircle className="size-4 text-primary" />
              小测验
              <Badge variant="secondary" className="text-xs">{sentence.quiz.length}</Badge>
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <div className="space-y-3">
              {sentence.quiz.map((qItem, qi) => {
                const isOpen = quizOpen[qi] === true;
                return (
                  <Card key={qi} className="border-border/60">
                    <CardContent className="p-4 space-y-3">
                      <p className="text-sm font-medium text-foreground">{qItem.q}</p>
                      {!isOpen ? (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setQuizOpen((prev) => ({ ...prev, [qi]: true }))}
                        >
                          查看答案
                        </Button>
                      ) : (
                        <div className="rounded-md border border-primary/20 bg-primary/5 p-3">
                          <p className="text-sm text-accent-foreground whitespace-pre-line leading-relaxed">
                            {qItem.a}
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 笔记 */}
        <AccordionItem value="notes" className="border-border">
          <AccordionTrigger className="px-4 py-3 hover:no-underline">
            <span className="flex items-center gap-2 text-sm font-semibold">
              <StickyNote className="size-4 text-primary" />
              学习笔记
              {currentNote && (
                <Badge variant="secondary" className="text-xs">已保存</Badge>
              )}
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <Textarea
              ref={notesRef}
              value={currentNote}
              onChange={handleNoteChange}
              placeholder="在这里记录你的学习心得、疑问或补充笔记…（自动保存）"
              className="min-h-[120px] resize-y bg-card border-border/60"
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* ===== 底部导航 ===== */}
      <div className="flex items-center justify-between pt-2">
        <Button variant="outline" size="sm" onClick={goPrev} disabled={currentId <= 1}>
          <ChevronLeft className="size-4 mr-1" />
          上一句
        </Button>
        <span className="text-xs text-muted-foreground tabular-nums">
          第 {sentence.id} 句 / 共 1120 句
        </span>
        <Button variant="outline" size="sm" onClick={goNext} disabled={currentId >= maxId}>
          下一句
          <ChevronRight className="size-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}

import { useState, useCallback, useRef, useMemo, useEffect, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wand2,
  Loader2,
  Check,
  RotateCcw,
  Sparkles,
  BookOpen,
  Languages,
  Atom,
  Search,
  Database,
  Brain,
  Layers,
  Volume2,
  Square,
  GraduationCap,
  PenTool,
  ClipboardList,
  FileText,
  ImagePlus,
  X,
  Repeat,
} from 'lucide-react';

import { logger } from '@/lib/app-logger';
import { aiChat, aiVision, aiTranscribe, aiTranslate } from '@/lib/ai-gateway';
import { toast } from 'sonner';
import { speakWithPlugin, stopAllSpeech, warmupAudio } from '@/lib/ttsPlugin';
import {
  analyzeText,
  STAGE_LABELS,
  type SkillStage,
  type IAnalyzedWord,
} from '@/skills/skillEngine';
import { generateCourse, type ICourse, type IPracticeQuestion } from '@/skills/courseGenerator';
import type { IPhraseEntry } from '@/skills/phraseSkill';
import { Button } from '@/components/ui/button';

// ─── Pipeline Step Metadata ───

const PIPELINE_STEPS: { key: SkillStage; label: string; icon: typeof Wand2 }[] = [
  { key: 'cleaning', label: '文本清洗', icon: Wand2 },
  { key: 'tokenizing', label: '分词识别', icon: Atom },
  { key: 'lemmatizing', label: '词形还原', icon: Layers },
  { key: 'phraseDetecting', label: '短语识别', icon: BookOpen },
  { key: 'dictionaryLookup', label: '词典查询', icon: Search },
  { key: 'checking', label: '检查未识别', icon: Database },
  { key: 'aiFallback', label: 'AI 兜底', icon: Brain },
  { key: 'generating', label: '生成课程', icon: Sparkles },
];

// ─── Sample Texts ───

const SAMPLE_TEXTS = [
  {
    label: 'UPS 故障交接',
    text: 'During the night shift, the UPS system transferred to bypass mode due to a critical battery fault alarm. The operator checked the BMS panel and confirmed the affected equipment was on rack A-12. The maintenance team was notified and a work order was created for battery replacement. The cooling system maintained normal temperature at 22°C throughout the incident.',
  },
  {
    label: '巡检报告',
    text: 'The routine inspection of the data hall revealed normal operating conditions. All CRAC units were running within acceptable temperature and humidity parameters. The power distribution units showed balanced load across all phases. The fire suppression system detector status was confirmed green. No active alarms were found on the BMS dashboard. The handover checklist was completed and signed off by both shifts.',
  },
  {
    label: '变更管理',
    text: 'A change request was submitted to replace the static transfer switch on PDU-3B. The maintenance operating procedure was reviewed and approved by the facility manager. The contractor was scheduled for Saturday night to minimize impact on server operations. A backup power configuration was deployed before the shutdown. The vendor confirmed all replacement parts were available and the SLA was not exceeded.',
  },
];

// ─── Component ───

export default function TextAnalysisPage() {
  const [inputText, setInputText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentStage, setCurrentStage] = useState<SkillStage>('idle');
  const [resultWords, setResultWords] = useState<IAnalyzedWord[]>([]);
  const [resultPhrases, setResultPhrases] = useState<IPhraseEntry[]>([]);
  const [stats, setStats] = useState({ totalWords: 0, uniqueWords: 0, foundCount: 0, aiCount: 0 });
  const [course, setCourse] = useState<ICourse | null>(null);
  const [filterSource, setFilterSource] = useState<'all' | 'professional' | 'basic' | 'ai' | 'cache'>('all');
  const [activeTab, setActiveTab] = useState<'vocabulary' | 'sentences' | 'grammar' | 'exercises'>('vocabulary');
  const [expandedExercise, setExpandedExercise] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState<Set<number>>(new Set());
  const abortRef = useRef(false);

  // ─── Sentence TTS ───
  const [playingSentenceIdx, setPlayingSentenceIdx] = useState<number | null>(null);

  // ─── Live Translation ───
  const [translationText, setTranslationText] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);
  const translateTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const translateAbortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (translateTimerRef.current) clearTimeout(translateTimerRef.current);
    if (translateAbortRef.current) translateAbortRef.current.abort();

    const trimmed = inputText.trim();
    if (!trimmed || trimmed.length < 5) {
      setTranslationText('');
      setIsTranslating(false);
      return;
    }

    setIsTranslating(true);
    translateTimerRef.current = setTimeout(async () => {
      const controller = new AbortController();
      translateAbortRef.current = controller;
      try {
        setTranslationText('');
        const result = await aiTranslate(trimmed, 'zh');
        if (!controller.signal.aborted) {
          setTranslationText(result);
        }
      } catch (err) {
        if (!controller.signal.aborted) {
          logger.error('Translation failed:', String(err));
          setTranslationText('');
        }
      } finally {
        if (!controller.signal.aborted) setIsTranslating(false);
      }
    }, 1500);

    return () => {
      if (translateTimerRef.current) clearTimeout(translateTimerRef.current);
    };
  }, [inputText]);

  // ─── Voice Input (Web Speech API) ───
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const toggleVoiceInput = useCallback(() => {
    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
      return;
    }

    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognitionAPI) {
      logger.error('SpeechRecognition not supported in this browser');
      return;
    }

    const recognition = new SpeechRecognitionAPI();
    recognition.lang = 'en-US';
    recognition.interimResults = true;
    recognition.continuous = true;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript + ' ';
        }
      }
      if (finalTranscript) {
        setInputText(prev => (prev ? prev + ' ' : '') + finalTranscript.trim());
      }
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      if (event.error !== 'aborted') {
        logger.error('Speech recognition error:', event.error);
      }
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
    setIsListening(true);
  }, [isListening]);
  const resultRef = useRef<HTMLDivElement>(null);

  // ─── File / Image Upload ───
  const [isUploadingFile, setIsUploadingFile] = useState(false);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [isUploadingAudio, setIsUploadingAudio] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const audioInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    e.target.value = '';
    setIsUploadingImage(true);
    try {
      const imageUrl = URL.createObjectURL(file);
      const full = await aiVision(
        imageUrl,
        'Extract all English text from this image. Output only the extracted text.',
      );
      URL.revokeObjectURL(imageUrl);
      if (full.trim()) {
        setInputText(prev => (prev ? prev + '\n\n' : '') + full.trim());
        toast.success('图片文字已提取');
      } else {
        toast.error('未能从图片中识别到英文内容');
      }
    } catch {
      toast.error('图片识别失败，请重试');
    } finally {
      setIsUploadingImage(false);
    }
  }, []);

  const handleFileUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    e.target.value = '';
    setIsUploadingFile(true);
    try {
      const text = await file.text();
      const result = await aiChat([
        { role: 'system', content: 'You are a document parser. Convert the following document content into clean plain text, removing any formatting markers.' },
        { role: 'user', content: text },
      ]);
      if (result.trim()) {
        const plainText = result.replace(/[#*_~`>|\[\]()-]/g, '').trim();
        setInputText(prev => (prev ? prev + '\n\n' : '') + plainText);
        toast.success('文档已解析');
      } else {
        toast.error('未能从文档中提取到有效内容');
      }
    } catch {
      toast.error('文档解析失败，请重试');
    } finally {
      setIsUploadingFile(false);
    }
  }, []);

  const handleAudioUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    e.target.value = '';
    setIsUploadingAudio(true);
    try {
      const result = await aiTranscribe(file, file.name);
      if (result.trim()) {
        setInputText(prev => (prev ? prev + '\n\n' : '') + result.trim());
        toast.success('音频已转录为文本');
      } else {
        toast.error('未能从音频中识别到有效内容');
      }
    } catch {
      toast.error('音频转录失败，请重试');
    } finally {
      setIsUploadingAudio(false);
    }
  }, []);

  // TTS state
  const [playingWord, setPlayingWord] = useState<string | null>(null);
  const stopFnRef = useRef<(() => void) | null>(null);
  // 统一播放器以插件 TTS 优先，Web Speech 不可用时仍可插件朗读，故始终视为支持
  const ttsSupported = true;

  const stopSpeak = useCallback(() => {
    if (stopFnRef.current) {
      stopFnRef.current();
      stopFnRef.current = null;
    }
    stopAllSpeech();
  }, []);

  useEffect(() => {
    return () => {
      stopAllSpeech();
    };
  }, []);

  // ─── Analyze ───

  const handleAnalyze = useCallback(async () => {
    const text = inputText.trim();
    if (!text || isAnalyzing) return;

    abortRef.current = false;
    setIsAnalyzing(true);
    setResultWords([]);
    setResultPhrases([]);
    setCourse(null);
    setCurrentStage('cleaning');

    try {
      const result = await analyzeText(text, (stage) => {
        if (!abortRef.current) setCurrentStage(stage);
      });

      if (!abortRef.current) {
        setResultWords(result.words);
        setResultPhrases(result.phrases);
        setStats({
          totalWords: result.totalWords,
          uniqueWords: result.uniqueWords,
          foundCount: result.foundCount,
          aiCount: result.aiCount,
        });

        // Generate course from analysis
        const generatedCourse = generateCourse(result);
        setCourse(generatedCourse);
        setActiveTab('vocabulary');

        setTimeout(() => {
          resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } catch (err) {
      logger.error('Analysis failed:', String(err));
    } finally {
      setIsAnalyzing(false);
    }
  }, [inputText, isAnalyzing]);

  const handleReset = useCallback(() => {
    abortRef.current = true;
    setIsAnalyzing(false);
    setResultWords([]);
    setResultPhrases([]);
    setCourse(null);
    setCurrentStage('idle');
    setInputText('');
    setTranslationText('');
    setIsTranslating(false);
    if (translateAbortRef.current) translateAbortRef.current.abort();
    setPlayingSentenceIdx(null);
    stopSpeak();
    setPlayingWord(null);
  }, []);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    handleAnalyze();
  }, [handleAnalyze]);

  const handleSampleClick = useCallback((text: string) => {
    setInputText(text);
    setResultWords([]);
    setCourse(null);
    setCurrentStage('idle');
  }, []);

  // ─── Filtered words ───

  const filteredWords = useMemo(() => {
    if (filterSource === 'all') return resultWords;
    return resultWords.filter(w => w.source === filterSource);
  }, [resultWords, filterSource]);

  const isAllDone = resultWords.length > 0;

  // ─── TTS ───

  const handlePlayWord = useCallback((word: IAnalyzedWord) => {
    if (!word.word?.trim()) return;
    stopSpeak();
    warmupAudio();
    setPlayingWord(word.lemma);

    const example = word.examples?.[0];
    const textToRead = example ? `${word.word}. ${example}` : word.word;
    const stop = speakWithPlugin(textToRead, () => {
      setPlayingWord(null);
      stopFnRef.current = null;
    }, 'british');
    stopFnRef.current = stop;
  }, [stopSpeak]);

  const handleStopWord = useCallback(() => {
    stopSpeak();
    setPlayingWord(null);
  }, [stopSpeak]);

  // ─── Sentence Playback ───

  const handlePlaySentence = useCallback((idx: number, text: string) => {
    if (!text?.trim()) return;
    stopSpeak();
    if (playingSentenceIdx === idx) {
      setPlayingSentenceIdx(null);
      return;
    }
    warmupAudio();
    setPlayingSentenceIdx(idx);
    const stop = speakWithPlugin(text, () => {
      if (stopFnRef.current === stop) stopFnRef.current = null;
      setPlayingSentenceIdx(null);
    }, 'british');
    stopFnRef.current = stop;
  }, [playingSentenceIdx, stopSpeak]);

  // ─── Exercise toggle ───

  const toggleAnswer = useCallback((idx: number) => {
    setShowAnswer(prev => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  }, []);

  // ─── Source counts ───

  const sourceCounts = useMemo(() => ({
    all: resultWords.length,
    professional: resultWords.filter(w => w.source === 'professional').length,
    basic: resultWords.filter(w => w.source === 'basic' || w.source === 'phrase').length,
    ai: resultWords.filter(w => w.source === 'ai').length,
    cache: resultWords.filter(w => w.source === 'cache').length,
  }), [resultWords]);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-sm bg-primary/15 flex items-center justify-center">
            <Wand2 className="size-4.5 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-foreground font-['Space_Grotesk'] tracking-tight">
              文本分析学习
            </h1>

          </div>
        </div>
        {(inputText || isAllDone) && (
          <Button variant="ghost" size="sm" onClick={handleReset} className="text-muted-foreground gap-1.5">
            <RotateCcw className="size-3.5" />
            Reset
          </Button>
        )}
      </div>

      {/* Input Section */}
      <div className="rounded-sm border border-border/50 bg-card/80 overflow-hidden">
        <div className="px-4 py-3 border-b border-border/30">
          <div className="flex items-center gap-2">
            <Languages className="size-3.5 text-muted-foreground" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Input Text
            </span>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            placeholder="Paste or type English text, e.g.: During the night shift, the UPS system transferred to bypass mode..."
            className="w-full h-32 px-4 py-3 bg-background/60 text-sm text-foreground placeholder:text-muted-foreground/40 resize-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring/30 font-mono leading-relaxed"
            disabled={isAnalyzing}
          />
          {/* Live Translation Bar */}
          {(translationText || isTranslating) && (
            <div className="px-4 py-2.5 border-t border-border/20 bg-primary/[0.03]">
              <div className="flex items-start gap-2">
                <span className="text-[10px] font-mono text-primary/60 uppercase tracking-wider mt-0.5 shrink-0">
                  CN
                </span>
                <div className="flex-1 min-w-0">
                  {isTranslating && !translationText ? (
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Loader2 className="size-3 animate-spin" />
                      <span>翻译中...</span>
                    </div>
                  ) : (
                    <p className="text-xs text-foreground/80 leading-relaxed">
                      {translationText}
                      {isTranslating && <Loader2 className="size-3 animate-spin inline-block ml-1.5 align-middle text-primary/50" />}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
          <div className="flex items-center justify-between px-4 py-2.5 border-t border-border/20">
            <div className="flex items-center gap-2">
              <input
                ref={imageInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt"
                className="hidden"
                onChange={handleFileUpload}
              />

              <Button
                type="button"
                variant="outline"
                size="sm"
                className="rounded-sm gap-1.5 h-8 px-3 text-xs"
                disabled={isUploadingImage || isAnalyzing}
                onClick={() => imageInputRef.current?.click()}
              >
                {isUploadingImage ? (
                  <><Loader2 className="size-3.5 animate-spin" /> 识别中...</>
                ) : (
                  <><ImagePlus className="size-3.5" /> 导入图片</>
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="rounded-sm gap-1.5 h-8 px-3 text-xs"
                disabled={isUploadingFile || isAnalyzing}
                onClick={() => fileInputRef.current?.click()}
              >
                {isUploadingFile ? (
                  <><Loader2 className="size-3.5 animate-spin" /> 解析中...</>
                ) : (
                  <><FileText className="size-3.5" /> 导入文件</>
                )}
              </Button>

            </div>
            <Button
              type="submit"
              size="sm"
              disabled={!inputText.trim() || isAnalyzing}
              className="rounded-sm gap-1.5 h-8 px-4 text-xs"
            >
              {isAnalyzing ? (
                <><Loader2 className="size-3.5 animate-spin" /> Analyzing...</>
              ) : (
                <><Wand2 className="size-3.5" /> Analyze</>
              )}
            </Button>
          </div>
        </form>
      </div>

      {/* Results */}
      {isAllDone && (
        <div ref={resultRef} className="space-y-4">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3"
          >
            <StatCard label="总词数" value={stats.totalWords} sublabel="Total" />
            <StatCard label="识别词汇" value={stats.uniqueWords} sublabel="Unique" />
            <StatCard label="词典命中" value={stats.foundCount} sublabel="Dictionary" accent="primary" />
            <StatCard label="AI 补充" value={stats.aiCount} sublabel="AI Fallback" accent="warning" />
          </motion.div>

          {/* Phrases */}
          {resultPhrases.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="rounded-sm border border-border/50 bg-card/80 overflow-hidden"
            >
              <div className="px-4 py-2.5 border-b border-border/30 flex items-center gap-2">
                <BookOpen className="size-3.5 text-muted-foreground" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Detected Phrases
                </span>
                <span className="text-[10px] text-muted-foreground/60 ml-auto">
                  {resultPhrases.length} found
                </span>
              </div>
              <div className="px-4 py-3 flex flex-wrap gap-2">
                {resultPhrases.map(p => (
                  <span
                    key={p.phrase}
                    className="text-xs px-2.5 py-1.5 rounded-sm border border-primary/30 bg-primary/8 text-foreground/90 font-mono"
                    title={p.chinese}
                  >
                    {p.phrase}
                    <span className="text-muted-foreground/50 ml-1.5 text-[10px]">{p.chinese}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-sm border border-border/50 bg-card/80 overflow-hidden"
          >
            <div className="px-4 py-2 border-b border-border/30 flex items-center gap-1 overflow-x-auto">
              {([
                { key: 'vocabulary' as const, label: '词汇', icon: GraduationCap, count: stats.uniqueWords },
                { key: 'sentences' as const, label: '句子', icon: Languages, count: course?.sentences.length ?? 0 },
                { key: 'grammar' as const, label: '语法', icon: PenTool, count: course?.grammarNotes.length ?? 0 },
{ key: 'exercises' as const, label: '练习', icon: ClipboardList, count: course?.exercises.length ?? 0 },
              ]).map(tab => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab.key
                      ? 'bg-primary/15 text-primary border border-primary/40'
                      : 'text-muted-foreground hover:text-foreground border border-transparent'
                  }`}
                >
                  <tab.icon className="size-3" />
                  {tab.label}
                  {tab.count > 0 && (
                    <span className="text-[9px] px-1 py-0.5 rounded bg-muted/30 text-muted-foreground">{tab.count}</span>
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-4">
              {/* Vocabulary Tab */}
              {activeTab === 'vocabulary' && (
                <div className="space-y-3">
                  {/* Source filter */}
                  <div className="flex items-center gap-1 flex-wrap">
                    {(['all', 'professional', 'basic', 'ai'] as const).map(src => {
                      const labels: Record<string, string> = { all: '全部', professional: '专业词库', basic: '基础词典', ai: 'AI 补充' };
                      return (
                        <button
                          key={src}
                          type="button"
                          onClick={() => setFilterSource(src)}
                          className={`text-[10px] px-2 py-1 rounded-sm border transition-colors ${
                            filterSource === src
                              ? 'bg-primary/15 border-primary/40 text-primary'
                              : 'bg-muted/10 border-border/30 text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          {labels[src]} ({sourceCounts[src]})
                        </button>
                      );
                    })}
                  </div>

                  {/* Word cards grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    <AnimatePresence mode="popLayout">
                      {filteredWords.map((word, idx) => (
                        <WordCardItem
                          key={word.lemma}
                          word={word}
                          isPlaying={playingWord === word.lemma}
                          onPlay={() => handlePlayWord(word)}
                          onStop={handleStopWord}
                          ttsSupported={ttsSupported}
                          delay={idx * 0.02}
                        />
                      ))}
                    </AnimatePresence>
                  </div>

                  {filteredWords.length === 0 && (
                    <div className="py-8 text-center text-sm text-muted-foreground">
                      No words match this filter
                    </div>
                  )}
                </div>
              )}

              {/* Sentences Tab */}
              {activeTab === 'sentences' && course && (
                <div className="space-y-3">
                  {course.sentences.map((s, idx) => {
                    const isPlayingSentence = playingSentenceIdx === idx;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="rounded-sm border border-border/40 bg-background/60 overflow-hidden"
                      >
                        {/* Sentence content */}
                        <div className="px-4 py-3 space-y-1.5">
                          <div className="flex items-start gap-2">
                            <span className="text-[10px] font-mono text-muted-foreground/40 mt-0.5 tabular-nums shrink-0">
                              {String(s.index + 1).padStart(2, '0')}
                            </span>
                            <p className="text-sm text-foreground leading-relaxed font-mono flex-1 min-w-0">{s.en}</p>
                            {/* Action buttons */}
                            {ttsSupported && (
                              <div className="flex items-center gap-1 shrink-0">
                                <button
                                  type="button"
                                  onClick={() => handlePlaySentence(idx, s.en)}
                                  className={`size-6 rounded-sm flex items-center justify-center transition-colors border ${
                                    isPlayingSentence
                                      ? 'bg-primary/15 border-primary/40 text-primary'
                                      : 'border-border/30 text-muted-foreground hover:text-primary hover:border-primary/30'
                                  }`}
                                  title={isPlayingSentence ? 'Stop' : 'Listen'}
                                >
                                  {isPlayingSentence ? (
                                    <Square className="size-2.5 fill-current" />
                                  ) : (
                                    <Volume2 className="size-2.5" />
                                  )}
                                </button>
                              </div>
                            )}
                          </div>
                          <div className="flex items-start gap-2 pl-6">
                            <p className="text-xs text-muted-foreground leading-relaxed">{s.cn}</p>
                          </div>
                        </div>

                      </motion.div>
                    );
                  })}
                </div>
              )}

              {/* Grammar Tab */}
              {activeTab === 'grammar' && course && (
                <div className="space-y-4">
                  {course.grammarNotes.length === 0 ? (
                    <div className="py-8 text-center text-sm text-muted-foreground">
                      No grammar patterns detected in this text
                    </div>
                  ) : (
                    course.grammarNotes.map((note, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        className="rounded-sm border border-border/40 bg-background/60 overflow-hidden"
                      >
                        <div className="px-4 py-2.5 border-b border-border/20 bg-primary/5">
                          <span className="text-sm font-semibold text-primary font-['Space_Grotesk']">{note.rule}</span>
                        </div>
                        <div className="px-4 py-3 space-y-2">
                          <p className="text-xs text-foreground/90 leading-relaxed">{note.explanation}</p>
                          <div className="space-y-1">
                            <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Examples:</span>
                            {note.examples.map((ex, i) => (
                              <p key={i} className="text-xs text-foreground/80 font-mono pl-3 border-l-2 border-primary/20">
                                {ex}
                              </p>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>
              )}

              {/* Exercises Tab */}
              {activeTab === 'exercises' && course && (
                <div className="space-y-4">
                  {course.exercises.length === 0 ? (
                    <div className="py-8 text-center text-sm text-muted-foreground">
                      Not enough vocabulary to generate exercises
                    </div>
                  ) : (
                    course.exercises.map((ex, idx) => (
                      <ExerciseCard
                        key={idx}
                        exercise={ex}
                        index={idx}
                        showAnswer={showAnswer.has(idx)}
                        onToggle={() => toggleAnswer(idx)}
                        delay={idx * 0.06}
                      />
                    ))
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}

      {/* Empty State */}
      {!isAllDone && !isAnalyzing && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center py-20"
        >

          {!ttsSupported && (
            <p className="text-[10px] text-muted-foreground/40 mt-3">
              Browser TTS not supported — speech features disabled
            </p>
          )}
        </motion.div>
      )}
    </div>
  );
}

// ─── Sub-components ───

function StatCard({ label, value, sublabel, accent }: { label: string; value: number; sublabel: string; accent?: 'primary' | 'warning' }) {
  return (
    <div className="rounded-sm border border-border/50 bg-card/80 px-4 py-3">
      <div className="flex items-baseline justify-between">
        <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{sublabel}</span>
        <span className={`text-2xl font-bold tabular-nums font-mono ${
          accent === 'primary' ? 'text-primary' : accent === 'warning' ? 'text-warning' : 'text-foreground'
        }`}>
          {value}
        </span>
      </div>
      <p className="text-xs text-muted-foreground mt-1">{label}</p>
    </div>
  );
}

function WordCardItem({ word, isPlaying, onPlay, onStop, ttsSupported, delay }: {
  word: IAnalyzedWord;
  isPlaying: boolean;
  onPlay: () => void;
  onStop: () => void;
  ttsSupported: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25, delay }}
      className="rounded-sm border border-border/50 bg-background/60 overflow-hidden"
    >
      {/* Word Header */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-border/20">
        <span className="text-base font-semibold text-foreground tracking-tight font-['Space_Grotesk']">
          {word.word}
        </span>
        {word.ipa && (
          <span className="text-xs font-mono text-primary/70 tabular-nums">
            {word.ipa}
          </span>
        )}
        <span className="text-[10px] font-medium text-muted-foreground italic">
          {word.pos}
        </span>
        <div className="flex items-center gap-1 ml-auto">
          {word.count > 1 && (
            <span className="text-[9px] px-1 py-0.5 rounded-sm bg-muted/30 text-muted-foreground border border-border/20">
              ×{word.count}
            </span>
          )}
          <SourceBadge source={word.source} />
          {ttsSupported && (
            <button
              type="button"
              onClick={isPlaying ? onStop : onPlay}
              className={`size-6 rounded-sm flex items-center justify-center transition-colors border ${
                isPlaying
                  ? 'bg-primary/15 border-primary/40 text-primary'
                  : 'border-border/30 text-muted-foreground hover:text-primary hover:border-primary/30'
              }`}
            >
              {isPlaying ? (
                <Square className="size-2.5 fill-current" />
              ) : (
                <Volume2 className="size-2.5" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Definitions */}
      <div className="px-3 py-2 space-y-1.5">
        <div className="flex items-start gap-2">
          <span className="text-sm text-foreground">{word.chinese}</span>
          {word.englishDef !== word.chinese && (
            <span className="text-xs text-muted-foreground mt-0.5">— {word.englishDef}</span>
          )}
        </div>
        {word.dataCenterMeaning && (
          <div className="rounded-sm bg-primary/6 border border-primary/15 px-2 py-1.5">
            <p className="text-[11px] text-primary/80 leading-relaxed">
              <span className="text-[9px] font-medium uppercase tracking-wider text-primary/50 mr-1">DC</span>
              {word.dataCenterMeaning}
            </p>
          </div>
        )}
        {word.simpleEnglish && word.simpleEnglish !== word.englishDef && (
          <p className="text-[10px] text-muted-foreground/70 italic">{word.simpleEnglish}</p>
        )}
        {word.phrases && word.phrases.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-1">
            {word.phrases.slice(0, 4).map(p => (
              <span key={p} className="text-[10px] px-1.5 py-0.5 rounded-sm border border-border/30 bg-muted/15 text-muted-foreground font-mono">
                {p}
              </span>
            ))}
          </div>
        )}
        {word.examples && word.examples.length > 0 && (
          <p className="text-[10px] text-foreground/60 font-mono mt-1 border-l-2 border-border/20 pl-2">
            {word.examples[0]}
          </p>
        )}
      </div>
    </motion.div>
  );
}

function SourceBadge({ source }: { source: string }) {
  const config: Record<string, { label: string; color: string }> = {
    professional: { label: 'PRO', color: 'bg-success/15 text-success border-success/30' },
    basic: { label: 'DICT', color: 'bg-muted/30 text-muted-foreground border-border/30' },
    phrase: { label: 'PHR', color: 'bg-primary/10 text-primary/80 border-primary/20' },
    ai: { label: 'AI', color: 'bg-warning/15 text-warning border-warning/30' },
    cache: { label: 'CACHE', color: 'bg-muted/20 text-muted-foreground/60 border-border/20' },
  };
  const c = config[source] ?? { label: source.toUpperCase(), color: 'bg-muted/20 text-muted-foreground border-border/30' };
  return (
    <span className={`text-[8px] px-1 py-0.5 rounded-sm border font-mono ${c.color}`}>
      {c.label}
    </span>
  );
}

function ExerciseCard({ exercise, index, showAnswer, onToggle, delay }: {
  exercise: IPracticeQuestion;
  index: number;
  showAnswer: boolean;
  onToggle: () => void;
  delay: number;
}) {
  const typeLabels: Record<string, string> = {
    fill_blank: 'Fill in the Blank',
    translate: 'Translate',
    match: 'Match',
    choice: 'Multiple Choice',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="rounded-sm border border-border/40 bg-background/60 overflow-hidden"
    >
      <div className="px-4 py-2.5 border-b border-border/20 flex items-center gap-2">
        <span className="text-[10px] font-mono text-muted-foreground/40">#{index + 1}</span>
        <span className="text-[10px] px-1.5 py-0.5 rounded-sm bg-primary/10 text-primary/80 border border-primary/20 font-medium">
          {typeLabels[exercise.type] ?? exercise.type}
        </span>
        {exercise.hint && (
          <span className="text-[10px] text-muted-foreground/50 ml-auto">Hint: {exercise.hint}</span>
        )}
      </div>
      <div className="px-4 py-3 space-y-2">
        <p className="text-sm text-foreground leading-relaxed">{exercise.question}</p>
        {exercise.options && (
          <div className="flex flex-wrap gap-2">
            {exercise.options.map((opt, i) => (
              <span
                key={i}
                className={`text-xs px-2.5 py-1 rounded-sm border font-mono ${
                  showAnswer && opt === exercise.answer
                    ? 'bg-success/15 border-success/40 text-success'
                    : 'bg-muted/10 border-border/30 text-foreground/70'
                }`}
              >
                {opt}
              </span>
            ))}
          </div>
        )}
        <button
          type="button"
          onClick={onToggle}
          className="text-xs text-primary/80 hover:text-primary transition-colors"
        >
          {showAnswer ? 'Hide Answer' : 'Show Answer'}
        </button>
        {showAnswer && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="rounded-sm bg-success/8 border border-success/20 px-3 py-2"
          >
            <p className="text-xs text-success font-mono">{exercise.answer}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

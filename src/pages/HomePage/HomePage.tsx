import { useState, useMemo, useCallback, useRef, useEffect, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Search, BookOpen, Mic, Volume2, Flame, Trophy, Target,
  ArrowRight, Star, Play, Square, X, Sparkles, ChevronRight, RotateCcw,
  Loader2, Send, Bot, Bookmark, BookmarkCheck, Clapperboard, Plus,
  ImagePlus, Camera,
} from 'lucide-react';
import { SENTENCE_SECTIONS, MOCK_SENTENCES, type ISentence } from '@/data/sentenceLearning';
import { storage } from '@/lib/storage';
import { aiChat, aiChatStream, aiVision } from '@/lib/ai-gateway';
import { speakWithPlugin, stopAllSpeech, warmupAudio, preloadTTS } from '@/lib/ttsPlugin';
import { toast } from 'sonner';
import { useFavorites, extractSentencesFromResponse } from '@/hooks/useFavorites';
import { userStorageKey } from '@/lib/userStorage';
import { useHiddenScenarios } from '@/hooks/useHiddenScenarios';
import { Image } from '@/components/ui/image';

const STORAGE_KEY = '__app_dc_english_progress';

interface IStudyProgress {
  studiedIds: number[];
  masteredIds: number[];
  quizCorrect: number;
  quizTotal: number;
  dailyLog: Record<string, number>;
  lastDate: string;
  streak: number;
}

const DEFAULT_PROGRESS: IStudyProgress = {
  studiedIds: [],
  masteredIds: [],
  quizCorrect: 0,
  quizTotal: 0,
  dailyLog: {},
  lastDate: '',
  streak: 0,
};

function loadProgress(): IStudyProgress {
  try {
    const raw = storage.getItem(userStorageKey(STORAGE_KEY));
    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw) as Partial<IStudyProgress>;
    return { ...DEFAULT_PROGRESS, ...parsed };
  } catch {
    return DEFAULT_PROGRESS;
  }
}

function computeStreak(log: Record<string, number>): number {
  const today = new Date().toISOString().slice(0, 10);
  let streak = 0;
  const d = new Date();
  while (true) {
    const key = d.toISOString().slice(0, 10);
    if (log[key] && log[key] > 0) {
      streak++;
      d.setDate(d.getDate() - 1);
    } else if (key === today) {
      d.setDate(d.getDate() - 1);
    } else {
      break;
    }
  }
  return streak;
}

/* ─── Stats Card ─── */
function StatCard({ icon: Icon, label, value, accent }: {
  icon: typeof BookOpen;
  label: string;
  value: string | number;
  accent?: boolean;
}) {
  return (
    <Card className={`border-border/40 ${accent ? 'border-primary/30 bg-primary/5' : ''}`}>
      <CardContent className="p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className={`size-9 shrink-0 rounded-lg flex items-center justify-center ${accent ? 'bg-primary/15 text-primary' : 'bg-secondary text-secondary-foreground'}`}>
            <Icon className="size-4" />
          </div>
        </div>
        <div className="text-3xl font-bold tabular-nums tracking-tight text-foreground leading-none">{value}</div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </CardContent>
    </Card>
  );
}

/* ─── AI English Tutor ─── */
type AiMode = 'word' | 'scenario' | 'translate';

function SentenceSearchSection() {
  const [inputValue, setInputValue] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiContent, setAiContent] = useState('');
  const [hasQueried, setHasQueried] = useState(false);
  const [mode, setMode] = useState<AiMode>('word');
  const contentRef = useRef<HTMLDivElement>(null);
  const { addFavorite, addScenarioFavorite, isFavorited } = useFavorites();
  // Image upload state
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isAnalyzingImage, setIsAnalyzingImage] = useState(false);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  // ─── Voice Input (Web Speech API) ───
  const [isListening, setIsListening] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const voiceRecogRef = useRef<any>(null);

  const toggleVoiceInput = useCallback(() => {
    if (isListening && voiceRecogRef.current) {
      voiceRecogRef.current.stop();
      setIsListening(false);
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) {
      toast.error('当前浏览器不支持语音输入');
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rec = new SR() as any;
    rec.lang = mode === 'word' ? 'en-US' : 'zh-CN';
    rec.interimResults = false;
    rec.continuous = false;
    rec.maxAlternatives = 1;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rec.onresult = (event: any) => {
      const text = event.results[0]?.[0]?.transcript ?? '';
      if (text) {
        setInputValue(prev => (prev ? prev + ' ' : '') + text);
      }
    };
    rec.onerror = () => {
      setIsListening(false);
    };
    rec.onend = () => {
      setIsListening(false);
    };
    voiceRecogRef.current = rec;
    rec.start();
    setIsListening(true);
  }, [isListening, mode]);

  /** 处理图片选择 */
  const handleImageSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      toast.error('请选择图片文件');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      toast.error('图片大小不能超过 10MB');
      return;
    }
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
    // Reset input so same file can be selected again
    e.target.value = '';
  }, []);

  /** 移除已选图片 */
  const handleRemoveImage = useCallback(() => {
    if (imagePreview) URL.revokeObjectURL(imagePreview);
    setImageFile(null);
    setImagePreview(null);
  }, [imagePreview]);

  /** 图片翻译：提取英文句子并翻译成中文 */
  const translateImage = useCallback(async (file: File) => {
    setIsAnalyzingImage(true);
    setAiContent('');
    setHasQueried(true);

    setInputValue('[图片翻译] ' + (file.name || '图片英文提取'));

    try {
      setAiContent('📷 正在识别图片中的英文…\n\n');
      const imageUrl = URL.createObjectURL(file);
      const full = await aiVision(
        imageUrl,
        'Extract all English text from this image and translate each sentence into Chinese. Output each English sentence followed by its Chinese translation.',
      );
      URL.revokeObjectURL(imageUrl);

      if (full.trim()) {
        setAiContent(full);
      } else {
        setAiContent('抱歉，未能从图片中识别到英文内容，请尝试拍摄更清晰的图片。');
      }
    } catch {
      setAiContent('抱歉，图片翻译功能暂时无法使用，请稍后再试。');
    } finally {
      setIsAnalyzingImage(false);
      setIsGenerating(false);
    }
  }, []);

  /** 分析图片并生成场景描述 */
  const analyzeImageAndGenerate = useCallback(async (file: File) => {
    setIsAnalyzingImage(true);
    setAiContent('');
    setHasQueried(true);

    try {
      // Step 1: 调用 AI 视觉分析场景
      setAiContent('📷 正在分析图片中的场景…\n\n');
      const imageUrl = URL.createObjectURL(file);
      const sceneDescription = await aiVision(
        imageUrl,
        'Describe the scene in this image in detail. What is happening? What equipment or environment is visible?',
      );
      URL.revokeObjectURL(imageUrl);

      if (!sceneDescription.trim()) {
        setAiContent('抱歉，无法从图片中识别出有效的场景信息，请尝试其他图片。');
        setIsAnalyzingImage(false);
        return;
      }

      // Step 2: 用场景描述生成英语对话
      setAiContent('📷 **图片场景分析**\n\n' + sceneDescription + '\n\n---\n\n🎬 **正在生成英语对话练习…**\n\n');
      setInputValue('[图片场景] ' + sceneDescription.slice(0, 60).replace(/\n/g, ' '));

      // Step 2: 用场景描述生成英语对话
      setAiContent('📷 **图片场景分析**\n\n' + sceneDescription + '\n\n---\n\n🎬 **正在生成英语对话练习…**\n\n');
      setInputValue('[图片场景] ' + sceneDescription.slice(0, 60).replace(/\n/g, ' '));

      let dialogueContent = '';
      await new Promise<void>((resolve) => {
        aiChatStream(
          [{ role: 'user', content: sceneDescription }],
          (chunk: string) => {
            dialogueContent += chunk;
            setAiContent('📷 **图片场景分析**\n\n' + sceneDescription + '\n\n---\n\n🎬 **英语对话练习**\n\n' + dialogueContent);
          },
          () => { resolve(); },
        );
      });
    } catch {
      setAiContent('抱歉，图片分析或场景生成暂时无法使用，请稍后再试。');
    } finally {
      setIsAnalyzingImage(false);
      setIsGenerating(false);
    }
  }, []);

  const handleSubmit = useCallback(async (e?: React.FormEvent) => {
    e?.preventDefault();

    // 图片翻译模式 → 提取并翻译
    if (mode === 'translate' && imageFile) {
      if (isGenerating || isAnalyzingImage) return;
      setIsGenerating(true);
      await translateImage(imageFile);
      return;
    }

    // 场景模式 + 有图片 → 先分析图片再生成对话
    if (mode === 'scenario' && imageFile) {
      if (isGenerating || isAnalyzingImage) return;
      setIsGenerating(true);
      await analyzeImageAndGenerate(imageFile);
      return;
    }

    const query = inputValue.trim();
    if (!query || isGenerating) return;

    setIsGenerating(true);
    setHasQueried(true);
    // Don't clear aiContent here — keep old content visible until new stream starts

    try {
      let full = '';
      let firstChunk = true;

      await new Promise<void>((resolve) => {
        aiChatStream(
          [{ role: 'user', content: query }],
          (chunk: string) => {
            if (firstChunk) {
              full = chunk;
              firstChunk = false;
            } else {
              full += chunk;
            }
            setAiContent(full);
          },
          () => { resolve(); },
        );
      });
    } catch {
      setAiContent('抱歉，英语助手暂时无法响应，请稍后再试。');
    } finally {
      setIsGenerating(false);
    }
  }, [inputValue, isGenerating, mode, imageFile, isAnalyzingImage, analyzeImageAndGenerate, translateImage]);

  const handleModeChange = useCallback((newMode: AiMode) => {
    setMode(newMode);
    setAiContent('');
    setHasQueried(false);
    // 切换模式时清除图片
    if (imagePreview) URL.revokeObjectURL(imagePreview);
    setImageFile(null);
    setImagePreview(null);
  }, [imagePreview]);

  const wordPrompts: string[] = [];

  const scenarioPrompts: string[] = [];

  const currentPrompts = mode === 'scenario' ? scenarioPrompts : wordPrompts;

  const handleSave = useCallback(() => {
    const query = inputValue.trim();
    if (!query || !aiContent) return;

    if (mode === 'scenario') {
      const saved = addScenarioFavorite(query, aiContent);
      if (saved) {
        toast.success('场景已收藏，已自动添加到场景练习、闪卡学习和自测挑战');
      } else {
        toast.info('该场景已收藏');
      }
    } else {
      const saved = addFavorite(query, aiContent);
      if (saved) {
        toast.success('已收藏到「我的收藏」');
      } else {
        toast.info('该词条已收藏');
      }
    }
  }, [inputValue, aiContent, mode, addFavorite, addScenarioFavorite]);

  const isCurrentFavorited = mode === 'scenario'
    ? isFavorited(inputValue.trim()) && inputValue.trim() !== ''
    : isFavorited(inputValue.trim());

  return (
    <Card className="border-border/40 border-primary/20">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm flex items-center gap-2">
          <Bot className="size-4 text-primary" />
          英语助手
        </CardTitle>
        <CardDescription className="text-xs">
          {mode === 'translate'
            ? '上传或拍摄包含英文的图片，自动提取句子并翻译成中文'
            : mode === 'scenario'
              ? '描述一个数据中心工作场景，生成英语对话练习内容'
              : '输入英文词汇或句子，AI 为你提供释义、发音、例句和语法解析'}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* Mode toggle */}
        <div className="flex gap-1.5 p-1 bg-secondary/50 rounded-lg">
          <button
            className={`flex-1 text-xs py-1.5 px-3 rounded-md transition-all flex items-center justify-center gap-1.5 ${
              mode === 'word'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => handleModeChange('word')}
          >
            <BookOpen className="size-3.5" />
            词汇查询
          </button>
          <button
            className={`flex-1 text-xs py-1.5 px-3 rounded-md transition-all flex items-center justify-center gap-1.5 ${
              mode === 'scenario'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => handleModeChange('scenario')}
          >
            <Clapperboard className="size-3.5" />
            场景生成
          </button>
          <button
            className={`flex-1 text-xs py-1.5 px-3 rounded-md transition-all flex items-center justify-center gap-1.5 ${
              mode === 'translate'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => handleModeChange('translate')}
          >
            <ImagePlus className="size-3.5" />
            图片翻译
          </button>
        </div>

        {/* Image preview (scenario & translate mode) */}
        {(mode === 'scenario' || mode === 'translate') && imagePreview && (
          <div className="relative inline-block">
            <Image
              src={imagePreview}
              alt="场景图片预览"
              className="h-20 w-auto rounded-md border border-border/40 object-cover"
            />
            <button
              type="button"
              className="!absolute -right-1.5 -top-1.5 z-20 flex size-5 items-center justify-center rounded-full bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 transition-colors"
              onClick={handleRemoveImage}
              aria-label="移除图片"
            >
              <X className="size-3" />
            </button>
          </div>
        )}

        {/* Hidden file inputs */}
        <input
          ref={imageInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageSelect}
        />
        <input
          ref={cameraInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          className="hidden"
          onChange={handleImageSelect}
        />

        {/* Input form */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <div className="relative flex-1">
            {mode === 'scenario' ? (
              <Clapperboard className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            ) : mode === 'translate' ? (
              <ImagePlus className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            ) : (
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            )}
            <Input
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              placeholder={mode === 'translate'
                ? imageFile
                  ? '已选择图片，点击发送开始翻译…'
                  : '上传或拍摄包含英文的图片…'
                : mode === 'scenario'
                  ? imageFile
                    ? '已选择图片，可直接发送或补充文字描述…'
                    : '描述一个数据中心工作场景，或上传场景照片…'
                  : '输入英文词汇、短语或句子…'}
              className="pl-9 bg-background"
              disabled={isGenerating || isAnalyzingImage}
            />
          </div>
          {/* Image upload buttons (scenario & translate mode) */}
          {(mode === 'scenario' || mode === 'translate') && !imageFile && (
            <>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="shrink-0"
                onClick={() => imageInputRef.current?.click()}
                disabled={isGenerating || isAnalyzingImage}
                title={mode === 'translate' ? '上传图片翻译' : '上传场景照片'}
              >
                <ImagePlus className="size-4" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="shrink-0"
                onClick={() => cameraInputRef.current?.click()}
                disabled={isGenerating || isAnalyzingImage}
                title={mode === 'translate' ? '拍照翻译' : '拍照生成场景'}
              >
                <Camera className="size-4" />
              </Button>
            </>
          )}
          <Button
            type="submit"
            size="icon"
            disabled={(mode === 'translate' ? !imageFile : (!inputValue.trim() && !imageFile)) || isGenerating || isAnalyzingImage}
          >
            {isGenerating || isAnalyzingImage ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <Send className="size-4" />
            )}
          </Button>
        </form>

        {/* Quick prompts */}
        {!hasQueried && currentPrompts.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            <span className="text-xs text-muted-foreground leading-6">试试：</span>
            {currentPrompts.map((p) => (
              <button
                key={p}
                className="text-xs px-2.5 py-1 rounded-md border border-border/40 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-colors truncate max-w-[180px]"
                onClick={() => {
                  setInputValue(p);
                }}
              >
                {p}
              </button>
            ))}
          </div>
        )}

        {/* AI Response */}
        {hasQueried && (
          <div
            ref={contentRef}
            className="rounded-lg border border-border/30 bg-card/50 p-4 max-h-[400px] overflow-y-auto"
          >
            {isGenerating && !aiContent && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground py-4">
                <Loader2 className="size-4 animate-spin text-primary" />
                {mode === 'translate'
                  ? '正在识别并翻译图片中的英文…'
                  : isAnalyzingImage
                    ? '正在分析图片中的场景…'
                    : mode === 'scenario'
                      ? '正在生成场景对话…'
                      : '正在分析中…'}
              </div>
            )}
            {aiContent && (
              <div className="prose prose-sm max-w-none prose-invert prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-foreground prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1 prose-code:rounded">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{aiContent}</ReactMarkdown>
              </div>
            )}
            {isGenerating && aiContent && (
              <div className="flex items-center gap-2 text-xs text-muted-foreground mt-3 pt-3 border-t border-border/20">
                <Loader2 className="size-3 animate-spin" />
                生成中…
              </div>
            )}
            {/* Save to favorites */}
            {!isGenerating && aiContent && inputValue.trim() && (
              <div className="flex items-center justify-end gap-2 mt-3 pt-3 border-t border-border/20">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs gap-1.5"
                  disabled={isCurrentFavorited}
                  onClick={handleSave}
                >
                  {isCurrentFavorited ? (
                    <>
                      <BookmarkCheck className="size-3.5 text-primary" />
                      已收藏
                    </>
                  ) : (
                    <>
                      <Bookmark className="size-3.5" />
                      {mode === 'translate' ? '收藏翻译' : mode === 'scenario' ? '收藏场景' : '收藏'}
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

/* ─── Read-Aloud Practice ─── */
function ReadAloudSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recognized, setRecognized] = useState('');
  const [score, setScore] = useState<number | null>(null);
  const [supported, setSupported] = useState(true);
  const recognitionRef = useRef<ReturnType<typeof createRecognition> | null>(null);
  const speakStopRef = useRef<(() => void) | null>(null);

  const practiceSentences = useMemo(() => {
    const seed = new Date().getDate();
    const shuffled = [...MOCK_SENTENCES].sort((a, b) => {
      const ha = ((a.id * 2654435761 + seed) >>> 0) % 1000;
      const hb = ((b.id * 2654435761 + seed) >>> 0) % 1000;
      return ha - hb;
    });
    return shuffled.slice(0, 5);
  }, []);

  // Preload TTS audio for all practice sentences on mount (mobile optimization)
  useEffect(() => {
    if (practiceSentences.length > 0) {
      preloadTTS(practiceSentences.map(s => s.en));
    }
  }, [practiceSentences]);

  const sentence = practiceSentences[currentIdx];

  function createRecognition(): { lang: string; continuous: boolean; interimResults: boolean; onresult: unknown; onerror: unknown; onend: unknown; start: () => void; stop: () => void; abort: () => void } | null {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) return null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rec = new SR() as any;
    rec.lang = 'en-US';
    rec.continuous = false;
    rec.interimResults = false;
    return rec;
  }

  useEffect(() => {
    const rec = createRecognition();
    if (!rec) {
      setSupported(false);
      return;
    }
    recognitionRef.current = rec;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rec.onresult = (event: any) => {
      const text = event.results[0]?.[0]?.transcript ?? '';
      setRecognized(text);
      const s = computeScore(sentence.en, text);
      setScore(s);
      setIsRecording(false);
    };
    rec.onerror = () => {
      setIsRecording(false);
    };
    rec.onend = () => {
      setIsRecording(false);
    };
    return () => {
      rec.abort();
    };
  }, []);

  // 页面卸载时停止语音并清理 stop 函数
  useEffect(() => {
    return () => {
      if (speakStopRef.current) {
        speakStopRef.current();
        speakStopRef.current = null;
      }
      stopAllSpeech();
    };
  }, []);

  const speak = useCallback(() => {
    if (!sentence) return;
    // 🔒 Mobile iOS: unlock audio in user gesture BEFORE async
    warmupAudio();
    stopAllSpeech();
    setIsSpeaking(true);
    const stopFn = speakWithPlugin(sentence.en, () => {
      if (speakStopRef.current === stopFn) {
        speakStopRef.current = null;
      }
      setIsSpeaking(false);
    });
    speakStopRef.current = stopFn;
  }, [sentence]);

  const startRecord = useCallback(() => {
    setRecognized('');
    setScore(null);
    const rec = createRecognition();
    if (!rec) {
      setSupported(false);
      return;
    }
    recognitionRef.current = rec;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rec.onresult = (event: any) => {
      const text = event.results[0]?.[0]?.transcript ?? '';
      setRecognized(text);
      setScore(computeScore(sentence.en, text));
      setIsRecording(false);
    };
    rec.onerror = () => setIsRecording(false);
    rec.onend = () => setIsRecording(false);
    rec.start();
    setIsRecording(true);
  }, [sentence]);

  const stopRecord = useCallback(() => {
    recognitionRef.current?.stop();
    setIsRecording(false);
  }, []);

  const nextSentence = useCallback(() => {
    if (speakStopRef.current) {
      speakStopRef.current();
      speakStopRef.current = null;
    }
    stopAllSpeech();
    setIsSpeaking(false);
    setRecognized('');
    setScore(null);
    setCurrentIdx(prev => (prev + 1) % practiceSentences.length);
  }, [practiceSentences.length]);

  return (
    <Card className="border-border/40">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-sm flex items-center gap-2">
              <Mic className="size-4 text-primary" />
              跟读打分
            </CardTitle>
            <CardDescription className="text-xs mt-1">
              听发音 → 跟读 → AI 评分（{currentIdx + 1}/{practiceSentences.length}）
            </CardDescription>
          </div>
          <Button variant="outline" size="sm" onClick={nextSentence}>
            <RotateCcw className="size-3.5 mr-1" />
            换一句
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Target sentence */}
        <div className="p-4 rounded-lg bg-secondary/40 border border-border/30 space-y-2">
          <div className="text-base font-medium text-foreground leading-relaxed">{sentence.en}</div>
          <div className="text-sm text-muted-foreground">{sentence.cn}</div>
          <div className="text-xs text-muted-foreground font-mono">{sentence.ipa}</div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={speak}
            disabled={isSpeaking}
            className="gap-1.5"
          >
            {isSpeaking ? <Volume2 className="size-4 animate-pulse" /> : <Play className="size-4" />}
            听发音
          </Button>
          {supported ? (
            isRecording ? (
              <Button variant="destructive" size="sm" onClick={stopRecord} className="gap-1.5">
                <Square className="size-3.5" />
                停止录音
              </Button>
            ) : (
              <Button size="sm" onClick={startRecord} className="gap-1.5">
                <Mic className="size-4" />
                开始跟读
              </Button>
            )
          ) : (
            <Badge variant="outline" className="text-xs text-muted-foreground">
              浏览器不支持语音识别
            </Badge>
          )}
        </div>

        {/* Results */}
        {(recognized || score !== null) && (
          <div className="space-y-3 p-4 rounded-lg border border-border/30">
            {recognized && (
              <div>
                <div className="text-xs text-muted-foreground mb-1">你的发音：</div>
                <div className="text-sm text-foreground">{recognized}</div>
              </div>
            )}
            {score !== null && (
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <Progress value={score} className="h-2" />
                </div>
                <div className={`text-lg font-bold tabular-nums shrink-0 ${score >= 80 ? 'text-primary' : score >= 60 ? 'text-warning' : 'text-destructive'}`}>
                  {score}分
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function computeScore(original: string, recognized: string): number {
  const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();
  const a = norm(original);
  const b = norm(recognized);
  if (!a || !b) return 0;
  const aWords = a.split(' ');
  const bWords = b.split(' ');
  let matches = 0;
  for (const aw of aWords) {
    if (bWords.includes(aw)) matches++;
  }
  const precision = aWords.length > 0 ? matches / aWords.length : 0;
  const recall = bWords.length > 0 ? matches / bWords.length : 0;
  const f1 = precision + recall > 0 ? (2 * precision * recall) / (precision + recall) : 0;
  return Math.round(f1 * 100);
}

/* ─── Today's Recommendations ─── */
function TodaysSentencesSection() {
  const navigate = useNavigate();
  const recommendations = useMemo(() => {
    const seed = new Date().getDate() + new Date().getMonth() * 31;
    const shuffled = [...MOCK_SENTENCES].sort((a, b) => {
      const ha = ((a.id * 2654435761 + seed) >>> 0) % 1000;
      const hb = ((b.id * 2654435761 + seed) >>> 0) % 1000;
      return ha - hb;
    });
    return shuffled.slice(0, 4);
  }, []);

  const getSectionLabel = (id: number) => {
    for (const sec of SENTENCE_SECTIONS) {
      if (id >= sec.range[0] && id <= sec.range[1]) return sec.label;
    }
    return '';
  };

  return (
    <Card className="border-border/40">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm flex items-center gap-2">
            <Star className="size-4 text-primary" />
            今日推荐句子
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={() => navigate('/browse')} className="text-xs gap-1">
            查看全部 <ChevronRight className="size-3.5" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {recommendations.map(s => (
          <button
            key={s.id}
            className="w-full text-left p-3 rounded-lg hover:bg-accent/50 transition-colors border border-border/20 hover:border-border/40 group"
            onClick={() => navigate(`/browse/${s.id}`)}
          >
            <div className="flex items-start gap-3 min-w-0">
              <span className="shrink-0 size-7 rounded-md bg-primary/10 text-primary flex items-center justify-center text-xs font-bold font-mono tabular-nums">
                {s.id}
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-sm text-foreground leading-relaxed">{s.en}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{s.cn}</div>
                <div className="flex items-center gap-2 mt-1.5">
                  <Badge variant="outline" className="text-xs shrink-0">{getSectionLabel(s.id)}</Badge>
                  {s.tags.filter(t => t.startsWith('★')).map((t, i) => (
                    <span key={i} className="text-xs text-primary">{t}</span>
                  ))}
                </div>
              </div>
              <ArrowRight className="size-4 text-muted-foreground shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </button>
        ))}
      </CardContent>
    </Card>
  );
}

/* ─── Scenario Practice ─── */
const SCENARIO_ITEMS = [
  { index: 0, label: '开始交班', desc: '交接班开场问候与基础确认', icon: '📝', sentences: 30 },
  { index: 6, label: 'DCIM 交接', desc: '数据中心监控系统交接', icon: '🖥️', sentences: 30 },
  { index: 20, label: 'UPS运行与维护', desc: 'UPS 系统日常运维英语', icon: '🔋', sentences: 40 },
  { index: 29, label: '柴油发电机', desc: '发电机故障与维护英语', icon: '⚡', sentences: 40 },
  { index: 33, label: '客户审计', desc: '客户来访审计英语接待', icon: '👥', sentences: 40 },
  { index: 44, label: '早晨问候与寒暄', desc: '日常问候与小聊英语', icon: '☀️', sentences: 40 },
];

function ScenarioPracticeSection() {
  const navigate = useNavigate();
  const { favorites } = useFavorites();
  const { hiddenScenarios } = useHiddenScenarios();
  const customScenarios = favorites.filter(f => f.type === 'scenario' && f.inPractice);
  const visiblePresets = SCENARIO_ITEMS.filter(item => !hiddenScenarios.includes(item.index));

  return (
    <Card className="border-border/40 border-primary/20">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm flex items-center gap-2">
            <Play className="size-4 text-primary" />
            场景练习
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={() => navigate('/report')} className="text-xs gap-1">
            练习报告 <ChevronRight className="size-3.5" />
          </Button>
        </div>
        <CardDescription className="text-xs mt-1">
          选择工作场景，逐句跟读练习，完成后查看能力分析报告
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Preset scenarios */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {visiblePresets.map((item) => (
            <button
              key={item.index}
              className="flex flex-col gap-2 p-3 rounded-lg border border-border/30 hover:border-primary/40 hover:bg-primary/5 transition-all text-left group"
              onClick={() => navigate(`/scenario/${item.index}`)}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                  {item.label}
                </span>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                {item.desc}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-muted-foreground tabular-nums">{item.sentences} 句</span>
                <ArrowRight className="size-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </button>
          ))}
        </div>

        {/* Custom scenarios from favorites */}
        {customScenarios.length > 0 && (
          <div className="pt-3 border-t border-border/20">
            <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1.5">
              <Clapperboard className="size-3" />
              我的自定义场景
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {customScenarios.map((s) => {
                const sentenceCount = extractSentencesFromResponse(s.aiResponse).length;
                return (
                  <button
                    key={s.id}
                    className="flex flex-col gap-2 p-3 rounded-lg border border-primary/20 bg-primary/5 hover:border-primary/40 hover:bg-primary/10 transition-all text-left group"
                    onClick={() => navigate(`/custom-practice/${s.id}`)}
                  >
                    <div className="flex items-center gap-2">
                      <Clapperboard className="size-4 text-primary shrink-0" />
                      <span className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                        {s.query}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                        {sentenceCount} 句
                      </Badge>
                      <ArrowRight className="size-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

      </CardContent>
    </Card>
  );
}

/* ─── Quick Actions ─── */
function QuickActionsSection() {
  const navigate = useNavigate();
  const actions = [
    { label: '句子浏览', desc: '按主题分类浏览', icon: BookOpen, path: '/browse', color: 'bg-primary/15 text-primary' },
    { label: '闪卡学习', desc: '翻转记忆卡片', icon: Star, path: '/flashcard', color: 'bg-success/15 text-success' },
    { label: '自测挑战', desc: 'Quiz 测试掌握度', icon: Target, path: '/quiz', color: 'bg-warning/15 text-warning' },
    { label: '学习记录', desc: '进度与统计', icon: Trophy, path: '/progress', color: 'bg-info/15 text-info' },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {actions.map(a => (
        <button
          key={a.path}
          className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border/30 hover:border-primary/40 hover:bg-primary/5 transition-all group"
          onClick={() => navigate(a.path)}
        >
          <div className={`size-10 rounded-lg flex items-center justify-center ${a.color} group-hover:scale-110 transition-transform`}>
            <a.icon className="size-5" />
          </div>
          <div className="text-sm font-medium text-foreground">{a.label}</div>
          <div className="text-xs text-muted-foreground">{a.desc}</div>
        </button>
      ))}
    </div>
  );
}

/* ─── Main Page ─── */
export default function HomePage() {
  const progress = useMemo(() => loadProgress(), []);
  const streak = useMemo(() => computeStreak(progress.dailyLog), [progress.dailyLog]);
  const totalSentences = MOCK_SENTENCES.length;
  const studied = progress.studiedIds.length;
  const mastered = progress.masteredIds.length;
  const accuracy = progress.quizTotal > 0 ? Math.round((progress.quizCorrect / progress.quizTotal) * 100) : 0;
  const progressPercent = totalSentences > 0 ? Math.round((studied / totalSentences) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground tracking-tight">学习首页</h1>
        <p className="text-sm text-muted-foreground mt-1.5">
          数据中心英语培训 · 共 {totalSentences} 句 · {SENTENCE_SECTIONS.length} 个主题
        </p>
        <div className="mt-3 flex items-center gap-3">
          <Progress value={progressPercent} className="h-1.5 flex-1" />
          <span className="text-xs text-muted-foreground tabular-nums shrink-0">{progressPercent}%</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <StatCard icon={BookOpen} label="已学句子" value={studied} />
        <StatCard icon={Flame} label="连续打卡" value={streak} accent />
        <StatCard icon={Trophy} label="已掌握" value={mastered} />
        <StatCard icon={Target} label="正确率" value={`${accuracy}%`} />
      </div>

      {/* Quick actions */}
      <QuickActionsSection />

      {/* Scenario Practice */}
      <ScenarioPracticeSection />

      {/* Sentence search */}
      <SentenceSearchSection />

      {/* Read-aloud */}
      <ReadAloudSection />

      {/* Today's recommendations */}
      <TodaysSentencesSection />
    </div>
  );
}

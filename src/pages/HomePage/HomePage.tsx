import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Search, BookOpen, Volume2, Flame, Trophy, Target,
  ArrowRight, Star, Play, Square, X, ChevronRight, RotateCcw,
  Loader2, Send, Bot, Bookmark, BookmarkCheck, Clapperboard,
  ImagePlus, Camera, CheckCircle2, Clock3,
} from 'lucide-react';
import { SENTENCE_SECTIONS, MOCK_SENTENCES } from '@/data/sentenceLearning';
import { aiTranslate, detectTranslationDirection } from '@/lib/ai-gateway';
import { speakWithPlugin, warmupAudio, preloadTTS } from '@/lib/ttsPlugin';
import { toast } from 'sonner';
import { useFavorites, extractSentencesFromResponse } from '@/hooks/useFavorites';
import { useHiddenScenarios } from '@/hooks/useHiddenScenarios';
import {
  buildLearningPlan,
  loadStudyProgress,
  loadStudyProgressAsync,
  type IStudyProgress,
} from '@/hooks/useStudyProgress';
import { Image } from '@/components/ui/image';

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
type AiMode = 'text' | 'image';
type TranslationResult = {
  sourceText: string;
  translatedText: string;
  sourceLanguage: 'zh' | 'en';
  targetLanguage: 'zh' | 'en';
};

function SentenceSearchSection() {
  const [inputValue, setInputValue] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiContent, setAiContent] = useState('');
  const [hasQueried, setHasQueried] = useState(false);
  const [translationResult, setTranslationResult] = useState<TranslationResult | null>(null);
  const [mode, setMode] = useState<AiMode>('text');
  const contentRef = useRef<HTMLDivElement>(null);
  const { addTranslationFavorite, isFavorited } = useFavorites();
  // Image upload state
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isAnalyzingImage, setIsAnalyzingImage] = useState(false);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const translationSpeechStopRef = useRef<(() => void) | null>(null);
  const [playingTranslationVoice, setPlayingTranslationVoice] = useState<string | null>(null);

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

  /** 图片翻译：浏览器端 OCR 提取中英文，再自动双向翻译。 */
  const translateImage = useCallback(async (file: File) => {
    setIsAnalyzingImage(true);
    setAiContent('');
    setTranslationResult(null);
    setHasQueried(true);

    setInputValue('[图片翻译] ' + (file.name || '图片文字提取'));

    let worker: Awaited<ReturnType<typeof import('tesseract.js')['createWorker']>> | null = null;
    try {
      setAiContent('📷 正在加载中英文识别模型，首次使用需要下载语言包…\n\n');
      const { createWorker } = await import('tesseract.js');
      worker = await createWorker(['eng', 'chi_sim'], 1, {
        logger: message => {
          if (message.status === 'recognizing text') {
            const progress = Math.round((message.progress ?? 0) * 100);
            setAiContent(`📷 正在识别图片文字：${progress}%\n\n`);
          }
        },
      });
      const result = await worker.recognize(file);
      const extracted = result.data.text.replace(/\n{3,}/g, '\n\n').trim();
      if (!extracted) {
        setAiContent('未识别到清晰文字。请裁剪图片、保持画面端正并提高文字对比度后重试。');
        return;
      }

      const { sourceLanguage, targetLanguage } = detectTranslationDirection(extracted);
      setAiContent(`📷 已识别文字，正在翻译成${targetLanguage === 'zh' ? '中文' : '英文'}…\n\n`);
      const translated = await aiTranslate(extracted, targetLanguage);
      const englishText = sourceLanguage === 'en' ? extracted : translated;
      void preloadTTS([englishText], 'british');
      void preloadTTS([englishText], 'american');
      setTranslationResult({ sourceText: extracted, translatedText: translated, sourceLanguage, targetLanguage });
      setAiContent(`**识别原文（${sourceLanguage === 'zh' ? '中文' : '英文'}）**\n\n${extracted}\n\n---\n\n**${targetLanguage === 'zh' ? '中文' : '英文'}翻译**\n\n${translated}`);
    } catch (error) {
      const detail = error instanceof Error ? error.message : '';
      setAiContent(`图片翻译失败。请检查网络后重试，或换一张更清晰的图片。${detail ? `\n\n错误：${detail}` : ''}`);
    } finally {
      await worker?.terminate();
      setIsAnalyzingImage(false);
      setIsGenerating(false);
    }
  }, []);

  const handleSubmit = useCallback(async (e?: React.FormEvent) => {
    e?.preventDefault();

    // 图片翻译模式 → 提取并翻译
    if (mode === 'image' && imageFile) {
      if (isGenerating || isAnalyzingImage) return;
      setIsGenerating(true);
      await translateImage(imageFile);
      return;
    }

    const query = inputValue.trim();
    if (!query || isGenerating) return;

    setIsGenerating(true);
    setHasQueried(true);
    setTranslationResult(null);
    // Don't clear aiContent here — keep old content visible until new stream starts

    try {
      const { sourceLanguage, targetLanguage } = detectTranslationDirection(query);
      const translated = await aiTranslate(query, targetLanguage);
      const englishText = sourceLanguage === 'en' ? query : translated;
      void preloadTTS([englishText], 'british');
      void preloadTTS([englishText], 'american');
      setTranslationResult({ sourceText: query, translatedText: translated, sourceLanguage, targetLanguage });
      setAiContent(`**原文（${sourceLanguage === 'zh' ? '中文' : '英文'}）**\n\n${query}\n\n---\n\n**${targetLanguage === 'zh' ? '中文' : '英文'}翻译**\n\n${translated}`);
    } catch {
      setAiContent('翻译暂时不可用。请检查网络后重试；桌面版 Chrome 首次使用也可能需要下载翻译语言包。');
    } finally {
      setIsGenerating(false);
    }
  }, [inputValue, isGenerating, mode, imageFile, isAnalyzingImage, translateImage]);

  const handleModeChange = useCallback((newMode: AiMode) => {
    setMode(newMode);
    setAiContent('');
    setTranslationResult(null);
    setHasQueried(false);
    // 切换模式时清除图片
    if (imagePreview) URL.revokeObjectURL(imagePreview);
    setImageFile(null);
    setImagePreview(null);
  }, [imagePreview]);

  const handleSave = useCallback(() => {
    if (!translationResult) return;
    const saved = addTranslationFavorite(
      translationResult.sourceText,
      translationResult.translatedText,
      translationResult.sourceLanguage,
      translationResult.targetLanguage,
    );
    if (saved) {
      toast.success('翻译已收藏到「我的收藏」');
    } else {
      toast.info('该翻译已收藏');
    }
  }, [translationResult, addTranslationFavorite]);

  const isCurrentFavorited = translationResult
    ? isFavorited(translationResult.sourceText)
    : false;

  const playTranslationText = useCallback((
    text: string,
    voiceKey: string,
    accent: 'british' | 'american' = 'british',
  ) => {
    warmupAudio();
    translationSpeechStopRef.current?.();
    if (playingTranslationVoice === voiceKey) {
      translationSpeechStopRef.current = null;
      setPlayingTranslationVoice(null);
      return;
    }
    setPlayingTranslationVoice(voiceKey);
    let stopFn: () => void = () => undefined;
    const done = () => {
      if (translationSpeechStopRef.current === stopFn) {
        translationSpeechStopRef.current = null;
        setPlayingTranslationVoice(null);
      }
    };
    stopFn = speakWithPlugin(text, done, accent);
    translationSpeechStopRef.current = stopFn;
  }, [playingTranslationVoice]);

  useEffect(() => () => {
    translationSpeechStopRef.current?.();
    translationSpeechStopRef.current = null;
  }, []);

  return (
    <Card className="border-border/40 border-primary/20">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm flex items-center gap-2">
          <Bot className="size-4 text-primary" />
          英语助手
        </CardTitle>
        <CardDescription className="text-xs">
          {mode === 'image'
            ? '上传或拍摄图片，提取中文或英文并自动翻译成另一种语言'
            : '输入中文或英文，自动识别语言并进行中英互译'}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* Mode toggle */}
        <div className="flex gap-1.5 p-1 bg-secondary/50 rounded-lg">
          <button
            className={`flex-1 text-xs py-1.5 px-3 rounded-md transition-all flex items-center justify-center gap-1.5 ${
              mode === 'text'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => handleModeChange('text')}
          >
            <BookOpen className="size-3.5" />
            文字互译
          </button>
          <button
            className={`flex-1 text-xs py-1.5 px-3 rounded-md transition-all flex items-center justify-center gap-1.5 ${
              mode === 'image'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => handleModeChange('image')}
          >
            <ImagePlus className="size-3.5" />
            图片翻译
          </button>
        </div>

        {/* Image preview (scenario & translate mode) */}
        {mode === 'image' && imagePreview && (
          <div className="relative inline-block">
            <Image
              src={imagePreview}
              alt="待翻译图片预览"
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
            {mode === 'image' ? (
              <ImagePlus className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            ) : (
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            )}
            <Input
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              placeholder={mode === 'image'
                ? imageFile
                  ? '已选择图片，点击发送开始翻译…'
                  : '上传或拍摄包含中文或英文的图片…'
                : '输入中文或英文，自动互译…'}
              className="pl-9 bg-background"
              disabled={isGenerating || isAnalyzingImage}
            />
          </div>
          {/* Image upload buttons (scenario & translate mode) */}
          {mode === 'image' && !imageFile && (
            <>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="shrink-0"
                onClick={() => imageInputRef.current?.click()}
                disabled={isGenerating || isAnalyzingImage}
                title="上传图片翻译"
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
                title="拍照翻译"
              >
                <Camera className="size-4" />
              </Button>
            </>
          )}
          <Button
            type="submit"
            size="icon"
            disabled={(mode === 'image' ? !imageFile : !inputValue.trim()) || isGenerating || isAnalyzingImage}
          >
            {isGenerating || isAnalyzingImage ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <Send className="size-4" />
            )}
          </Button>
        </form>

        {/* AI Response */}
        {hasQueried && (
          <div
            ref={contentRef}
            className="rounded-lg border border-border/30 bg-card/50 p-4 max-h-[400px] overflow-y-auto"
          >
            {isGenerating && !aiContent && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground py-4">
                <Loader2 className="size-4 animate-spin text-primary" />
                {mode === 'image' ? '正在识别并翻译图片中的文字…' : '正在翻译…'}
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
            {!isGenerating && translationResult && (
              <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-border/20">
                {translationResult.sourceLanguage === 'en' && (
                  <>
                    <Button type="button" variant="outline" size="sm" className="text-xs gap-1.5" onClick={() => playTranslationText(translationResult.sourceText, 'source-uk', 'british')}>
                      {playingTranslationVoice === 'source-uk' ? <Square className="size-3.5" /> : <Volume2 className="size-3.5" />}
                      原文·英音
                    </Button>
                    <Button type="button" variant="outline" size="sm" className="text-xs gap-1.5" onClick={() => playTranslationText(translationResult.sourceText, 'source-us', 'american')}>
                      {playingTranslationVoice === 'source-us' ? <Square className="size-3.5" /> : <Volume2 className="size-3.5" />}
                      原文·美音
                    </Button>
                  </>
                )}
                {translationResult.targetLanguage === 'en' && (
                  <>
                    <Button type="button" variant="outline" size="sm" className="text-xs gap-1.5" onClick={() => playTranslationText(translationResult.translatedText, 'target-uk', 'british')}>
                      {playingTranslationVoice === 'target-uk' ? <Square className="size-3.5" /> : <Volume2 className="size-3.5" />}
                      译文·英音
                    </Button>
                    <Button type="button" variant="outline" size="sm" className="text-xs gap-1.5" onClick={() => playTranslationText(translationResult.translatedText, 'target-us', 'american')}>
                      {playingTranslationVoice === 'target-us' ? <Square className="size-3.5" /> : <Volume2 className="size-3.5" />}
                      译文·美音
                    </Button>
                  </>
                )}
              </div>
            )}
            {/* Save to favorites */}
            {!isGenerating && translationResult && (
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
                      收藏翻译
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
        </div>
        <CardDescription className="text-xs mt-1">
          选择工作场景，逐句学习并收听标准英文发音
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

function DailyLearningPlan({ progress }: { progress: IStudyProgress }) {
  const navigate = useNavigate();
  const plan = useMemo(
    () => buildLearningPlan(progress, MOCK_SENTENCES.length, 20),
    [progress],
  );
  const goalReached = plan.todayActivities >= plan.dailyGoal;

  return (
    <Card className="overflow-hidden border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card">
      <CardContent className="p-5">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0 flex-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                {goalReached ? <CheckCircle2 className="size-5" /> : <Clock3 className="size-5" />}
              </div>
              <div>
                <h2 className="text-base font-semibold text-foreground">今日学习计划</h2>
                <p className="text-xs text-muted-foreground">
                  {goalReached ? '今日目标已完成，可以复习薄弱句子' : `再完成 ${Math.max(0, plan.dailyGoal - plan.todayActivities)} 次学习活动即可达标`}
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">今日进度</span>
                <span className="font-semibold tabular-nums text-foreground">
                  {plan.todayActivities}/{plan.dailyGoal}
                </span>
              </div>
              <Progress value={plan.dailyPercent} className="h-2" />
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
              <Badge variant="outline">下一句 #{plan.nextSentenceId}</Badge>
              <Badge variant="outline">待巩固 {plan.reinforcementCount} 句</Badge>
              <span>学习、闪卡或测验都会自动计入</span>
            </div>
          </div>
          <div className="grid shrink-0 grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            <Button onClick={() => navigate(`/browse/${plan.nextSentenceId}`)} className="gap-1.5">
              <Play className="size-4" />
              继续学习
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate(plan.reinforcementIds[0] ? `/browse/${plan.reinforcementIds[0]}` : '/flashcard')}
              className="gap-1.5"
            >
              <RotateCcw className="size-4" />
              巩固薄弱项
            </Button>
            <Button variant="outline" onClick={() => navigate('/quiz')} className="gap-1.5">
              <Target className="size-4" />
              开始测验
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

/* ─── Main Page ─── */
export default function HomePage() {
  const [progress, setProgress] = useState<IStudyProgress>(loadStudyProgress);
  useEffect(() => {
    let active = true;
    const refresh = () => {
      loadStudyProgressAsync().then(latest => {
        if (active) setProgress(latest);
      });
    };
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') refresh();
    };
    refresh();
    window.addEventListener('focus', refresh);
    window.addEventListener('storage', refresh);
    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      active = false;
      window.removeEventListener('focus', refresh);
      window.removeEventListener('storage', refresh);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);
  const streak = progress.streak;
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

      {/* Actionable daily learning loop */}
      <DailyLearningPlan progress={progress} />

      {/* Quick actions */}
      <QuickActionsSection />

      {/* Scenario Practice */}
      <ScenarioPracticeSection />

      {/* Sentence search */}
      <SentenceSearchSection />

      {/* Today's recommendations */}
      <TodaysSentencesSection />
    </div>
  );
}

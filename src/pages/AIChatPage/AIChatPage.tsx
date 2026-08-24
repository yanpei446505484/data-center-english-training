import { useState, useCallback, useRef, useEffect, useMemo, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Bot,
  User,
  Loader2,
  RotateCcw,
  Mic,
  MicOff,
  Volume2,
  Square,
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { speakWithPlugin, stopAllSpeech, warmupAudio } from '@/lib/ttsPlugin';
import { aiChatStream } from '@/lib/ai-gateway';
import { Button } from '@/components/ui/button';
import WordCard from '@/components/WordCard';
import EnglishSentenceList from '@/components/EnglishSentenceList';


interface IChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  createdAt: string;
}

/** Parse assistant message content into text segments and word card objects */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseMessageWithWordCards(content: string): Array<{ type: 'text'; text: string } | { type: 'wordcard'; data: Record<string, any> }> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const parts: Array<{ type: 'text'; text: string } | { type: 'wordcard'; data: Record<string, any> }> = [];
  const regex = /```json\s*\n([\s\S]*?)```/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      const before = content.slice(lastIndex, match.index).trim();
      if (before) parts.push({ type: 'text', text: before });
    }

    try {
      const json = JSON.parse(match[1].trim());
      // Word card: must have word + example + chinese
      if (json.word && json.example && json.chinese) {
        parts.push({ type: 'wordcard', data: json });
      } else {
        parts.push({ type: 'text', text: match[0] });
      }
    } catch {
      parts.push({ type: 'text', text: match[0] });
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < content.length) {
    const remaining = content.slice(lastIndex).trim();
    if (remaining) parts.push({ type: 'text', text: remaining });
  }

  if (parts.length === 0) {
    parts.push({ type: 'text', text: content });
  }

  return parts;
}

export default function AIChatPage() {
  const [messages, setMessages] = useState<IChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [streamingContent, setStreamingContent] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef(false);

  // TTS (Text-to-Speech) state
  const [autoRead, setAutoRead] = useState(true);
  const [, setIsSpeaking] = useState(false);
  const [speakingMsgId, setSpeakingMsgId] = useState<string | null>(null);
  const [speakingLineIdx, setSpeakingLineIdx] = useState(-1);
  const speakingQueueRef = useRef<{ text: string; lang: string }[]>([]);
  const speakingIdxRef = useRef(0);
  const speakStopRef = useRef<(() => void) | null>(null);
  const stopTTSRef = useRef(false);
  // Track how many English sentences have been queued during streaming
  const streamSpokenCountRef = useRef(0);
  const streamSpeakingActiveRef = useRef(false);

  // Parse markdown response — extract ONLY English sentences for TTS, skip all Chinese
  const parseSentencesForTTS = useCallback((markdown: string): { text: string; lang: string }[] => {
    // Strip markdown formatting
    const clean = markdown
      .replace(/```[\s\S]*?```/g, '')  // code blocks (including word card JSON)
      .replace(/\*\*([^*]+)\*\*/g, '$1') // bold
      .replace(/\*([^*]+)\*/g, '$1')     // italic
      .replace(/#{1,6}\s+/g, '')         // headers
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // links
      .replace(/`([^`]+)`/g, '$1')       // inline code
      .replace(/^>\s+/gm, '')            // blockquotes
      .trim();

    const lines = clean.split('\n').map(l => l.trim()).filter(Boolean);
    const queue: { text: string; lang: string }[] = [];

    for (const rawLine of lines) {
      let line = rawLine;

      // ── Step 1: Strip all Chinese-annotated content ──
      // Remove Chinese text inside any brackets: （中文）、(中文)、【中文】
      line = line.replace(/[（(]\s*[\u4e00-\u9fff\u3000-\u303f，。！？；：、][\u4e00-\u9fff\u3000-\u303f\uff00-\uffef，。！？；：、""''\s]*[）)]/g, '');
      // Remove Chinese text inside square brackets
      line = line.replace(/\[\s*[\u4e00-\u9fff\u3000-\u303f][\u4e00-\u9fff\u3000-\u303f\uff00-\uffef\s]*\]/g, '');

      // ── Step 2: Strip standalone Chinese runs ──
      // Remove sequences of Chinese chars + Chinese punctuation (with optional surrounding spaces)
      line = line.replace(/\s*[\u4e00-\u9fff\u3000-\u303f\uff01-\uff0c\uff1a\uff1b\uff1f，。！？；：、]+\s*/g, ' ');

      // ── Step 3: Strip list markers & Chinese punctuation remnants ──
      line = line.replace(/^\d+\.\s*/, '');   // numbered list: "1. ", "2. "
      line = line.replace(/^[-•*]\s*/, '');   // bullet list
      line = line.replace(/[，。！？；：、]/g, ''); // Chinese punctuation chars

      // Collapse multiple spaces and trim
      line = line.replace(/\s{2,}/g, ' ').trim();

      // ── Step 4: Skip if still predominantly Chinese ──
      const chineseChars = (line.match(/[\u4e00-\u9fff]/g) || []).length;
      const totalChars = line.replace(/\s/g, '').length;
      if (totalChars === 0 || chineseChars / totalChars > 0.15) continue;

      // ── Step 5: Split into English sentences ──
      const sentences = line.match(/[^.!?]+[.!?]+/g) || [line];
      for (const s of sentences) {
        const trimmed = s.trim();
        if (trimmed.length >= 3) {
          queue.push({ text: trimmed, lang: 'en-US' });
        }
      }
    }
    return queue;
  }, []);

  const stopSpeaking = useCallback(() => {
    stopTTSRef.current = true;
    stopAllSpeech();
    if (speakStopRef.current) {
      speakStopRef.current();
      speakStopRef.current = null;
    }
    speakingQueueRef.current = [];
    speakingIdxRef.current = 0;
    streamSpokenCountRef.current = 0;
    streamSpeakingActiveRef.current = false;
    setIsSpeaking(false);
    setSpeakingMsgId(null);
    setSpeakingLineIdx(-1);
  }, []);

  /** 所有朗读统一走同源 Kokoro WAV / 内置 meSpeak，不请求远程 TTS。 */
  const speakLocal = useCallback((text: string, _lang: string, onDone: () => void) => {
    if (speakStopRef.current) {
      speakStopRef.current();
      speakStopRef.current = null;
    }
    const stopFn = speakWithPlugin(text, () => {
      if (speakStopRef.current === stopFn) {
        speakStopRef.current = null;
      }
      onDone();
    }, 'british');
    speakStopRef.current = stopFn;
  }, []);

  const speakNextInQueue = useCallback(async (autoMode = false) => {
    const queue = speakingQueueRef.current;
    const idx = speakingIdxRef.current;
    if (stopTTSRef.current || idx >= queue.length) {
      setIsSpeaking(false);
      setSpeakingMsgId(null);
      setSpeakingLineIdx(-1);
      return;
    }

    const item = queue[idx];
    setSpeakingLineIdx(idx);

    const advance = () => {
      if (stopTTSRef.current) {
        setIsSpeaking(false);
        setSpeakingMsgId(null);
        setSpeakingLineIdx(-1);
        return;
      }
      speakingIdxRef.current = idx + 1;
      // 句间停顿 120ms，更流畅连贯的节奏
      setTimeout(() => speakNextInQueue(autoMode), 120);
    };

    speakLocal(item.text, 'en-GB', advance);
  }, [speakLocal]);

  const startSpeaking = useCallback((msgId: string, content: string) => {
    // 🔒 Mobile iOS: unlock audio in user gesture BEFORE async
    warmupAudio();
    // Stop any current speech
    stopAllSpeech();
    stopTTSRef.current = false;

    const queue = parseSentencesForTTS(content);
    if (queue.length === 0) return;

    speakingQueueRef.current = queue;
    speakingIdxRef.current = 0;
    setSpeakingMsgId(msgId);
    setIsSpeaking(true);
    speakNextInQueue();
  }, [parseSentencesForTTS, speakNextInQueue]);

  // Auto-read remaining unsaid sentences when streaming completes
  useEffect(() => {
    if (!autoRead || isLoading) return;
    const lastMsg = messages[messages.length - 1];
    if (!lastMsg || lastMsg.role !== 'assistant') return;

    const allSentences = parseSentencesForTTS(lastMsg.content);
    const spoken = streamSpokenCountRef.current;

    // If there are unsaid sentences after streaming, speak them
    if (allSentences.length > spoken) {
      const remaining = allSentences.slice(spoken);
      stopTTSRef.current = false;
      speakingQueueRef.current = remaining;
      speakingIdxRef.current = 0;
      setSpeakingMsgId(lastMsg.id);
      setIsSpeaking(true);
      speakNextInQueue(true);
    }

    // Reset stream spoken counter
    streamSpokenCountRef.current = 0;
    streamSpeakingActiveRef.current = false;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  // Cleanup TTS on unmount
  useEffect(() => {
    return () => {
      stopAllSpeech();
      stopTTSRef.current = true;
    };
  }, []);

  // Voice input state
  const [isRecording, setIsRecording] = useState(false);
  const [voiceSupported, setVoiceSupported] = useState(true);
  const [interimText, setInterimText] = useState('');
  const [voiceLang, setVoiceLang] = useState<'en-US' | 'zh-CN'>('en-US');
  const recognitionRef = useRef<{ start: () => void; stop: () => void; abort: () => void } | null>(null);

  // Initialize speech recognition
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) {
      setVoiceSupported(false);
      return;
    }
  }, []);

  const startRecording = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) {
      setVoiceSupported(false);
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rec = new SR() as any;
    rec.lang = voiceLang;
    rec.continuous = true;
    rec.interimResults = true;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rec.onresult = (event: any) => {
      let interim = '';
      let finalText = '';
      for (let i = 0; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalText += transcript;
        } else {
          interim += transcript;
        }
      }
      if (finalText) {
        setInputValue((prev) => (prev ? prev + ' ' + finalText : finalText));
        setInterimText('');
      } else {
        setInterimText(interim);
      }
    };
    rec.onerror = () => {
      setIsRecording(false);
      setInterimText('');
    };
    rec.onend = () => {
      setIsRecording(false);
      setInterimText('');
    };

    recognitionRef.current = rec;
    rec.start();
    setIsRecording(true);
  }, [voiceLang]);

  const stopRecording = useCallback(() => {
    recognitionRef.current?.stop();
    setIsRecording(false);
    setInterimText('');
  }, []);

  const toggleRecording = useCallback(() => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  }, [isRecording, startRecording, stopRecording]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      recognitionRef.current?.abort();
    };
  }, []);

  const scrollToBottom = useCallback(() => {
    setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    }, 50);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingContent, scrollToBottom]);

  const buildContext = useCallback((msgs: IChatMessage[]): string => {
    return msgs
      .slice(-10)
      .map((m) => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`)
      .join('\n');
  }, []);

  const handleSend = useCallback(
    async (text?: string) => {
      const content = (text ?? inputValue).trim();
      if (!content || isLoading) return;

      abortRef.current = false;
      const userMsg: IChatMessage = {
        id: `msg_${Date.now()}`,
        role: 'user',
        content,
        createdAt: new Date().toISOString(),
      };

      const updatedMessages = [...messages, userMsg];
      setMessages(updatedMessages);
      setInputValue('');
      setIsLoading(true);
      setStreamingContent('');

      // Reset streaming TTS tracking
      streamSpokenCountRef.current = 0;
      streamSpeakingActiveRef.current = false;

      try {
        const context = buildContext(updatedMessages.slice(0, -1));
        const bilingualInstruction = `【重要格式要求】你的每一句回复都必须中英文交替输出：先写一句中文，紧接着写对应的英文翻译。包括所有模块（对话回复、纠错、学习建议）都必须遵守此格式。例如：
"你好！很高兴认识你。
Hello! Nice to meet you.
你今天想练习什么主题？
What topic would you like to practice today?"

【单词卡片】当用户询问单词含义、单词用法、或发送单个英语单词/中文词时，除了正常的中英文解释对话外，你必须在回复中包含一个单词卡片，用以下JSON格式放在\`\`\`json代码块中：
\`\`\`json
{
  "word": "单词(英文)",
  "chinese": "中文释义",
  "dataCenterMeaning": "该词在数据中心运维场景中的具体含义和用法解释(中文，20-40字)",
  "example": "例句(必须是数据中心运维场景的真实例句，英文)",
  "phrases": ["常用短语1", "常用短语2", "常用短语3"],
  "tags": ["data center", "operation", "其他相关标签"]
}
\`\`\`
要求：
- dataCenterMeaning 必须解释该词在数据中心值班/运维中的具体含义
- phrases 列出2-4个常见搭配短语
- example 例句必须贴近数据中心运维工作场景(如BMS监控、UPS告警、交接班、巡检等)
- 每条消息最多输出2个单词卡片
- 如果用户发送的是中文词汇，也要生成对应的英文单词卡片`;
        const chatMessages = [
          { role: 'system' as const, content: bilingualInstruction },
          ...(context
            ? [{ role: 'user' as const, content: context }]
            : [{ role: 'user' as const, content: '（这是对话的开始）' }]),
          { role: 'user' as const, content },
        ];

        let full = '';
        let lastSpokenCount = 0;

        await new Promise<void>((resolve) => {
          const controller = aiChatStream(
            chatMessages,
            (chunk: string) => {
              if (abortRef.current) { controller.abort(); return; }
              full += chunk;
              setStreamingContent(full);

              // Stream-aware TTS: speak complete English sentences as they appear
              if (autoRead && !abortRef.current) {
                const sentences = parseSentencesForTTS(full);
                if (sentences.length > lastSpokenCount) {
                  const newSentences = sentences.slice(lastSpokenCount);
                  lastSpokenCount = sentences.length;
                  streamSpokenCountRef.current = sentences.length;

                  if (!streamSpeakingActiveRef.current) {
                    streamSpeakingActiveRef.current = true;
                    stopTTSRef.current = false;
                    speakingQueueRef.current = newSentences;
                    speakingIdxRef.current = 0;
                    setIsSpeaking(true);
                    speakNextInQueue(true);
                  } else {
                    speakingQueueRef.current = [...speakingQueueRef.current, ...newSentences];
                  }
                }
              }
            },
            () => {
              if (!abortRef.current && full) {
                const assistantMsg: IChatMessage = {
                  id: `msg_${Date.now()}_ai`,
                  role: 'assistant',
                  content: full,
                  createdAt: new Date().toISOString(),
                };
                setMessages((prev) => [...prev, assistantMsg]);
              }
              resolve();
            },
          );
        });
      } catch {
        const errorMsg: IChatMessage = {
          id: `msg_${Date.now()}_err`,
          role: 'assistant',
          content: '抱歉，网络连接出现问题，请稍后再试。',
          createdAt: new Date().toISOString(),
        };
        setMessages((prev) => [...prev, errorMsg]);
      } finally {
        setIsLoading(false);
        setStreamingContent('');
        inputRef.current?.focus();
      }
    },
    [inputValue, isLoading, messages, buildContext, autoRead, parseSentencesForTTS, speakNextInQueue],
  );

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      handleSend();
    },
    [handleSend],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend],
  );

  const handleReset = useCallback(() => {
    abortRef.current = true;
    setMessages([]);
    setStreamingContent('');
    setIsLoading(false);
    setInputValue('');
    inputRef.current?.focus();
  }, []);

  const isEmpty = messages.length === 0 && !isLoading;

  const textareaHeight = useMemo(() => {
    const lines = inputValue.split('\n').length;
    return Math.min(Math.max(lines, 1) * 24 + 16, 120);
  }, [inputValue]);

  return (
    <div className="flex flex-col h-[calc(100vh-2rem)] max-h-[calc(100vh-2rem)]">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 pb-3 border-b border-border/40 shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="size-8 rounded-md bg-primary/15 flex items-center justify-center">
            <Bot className="size-4 text-primary" />
          </div>
          <div>
            <h1 className="text-base font-semibold text-foreground flex items-center gap-1.5">
              英语老师
            </h1>
            <p className="text-xs text-muted-foreground">
              练习英语对话，纠正语法和词汇错误
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* Auto-read toggle */}
          <button
            type="button"
            onClick={() => {
              const next = !autoRead;
              setAutoRead(next);
              if (!next) stopSpeaking();
            }}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors border ${
              autoRead
                ? 'bg-primary/10 text-primary border-primary/30'
                : 'bg-transparent text-muted-foreground border-border/40 hover:text-foreground'
            }`}
            title={autoRead ? '自动朗读已开启' : '自动朗读已关闭'}
          >
            <Volume2 className="size-3.5" />
            {autoRead ? '朗读开' : '朗读关'}
          </button>
          {messages.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleReset}
              className="text-muted-foreground gap-1.5"
            >
              <RotateCcw className="size-3.5" />
              新对话
            </Button>
          )}
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 min-h-0 overflow-y-auto">
        <div className="py-4 space-y-4 pr-2">
          {/* Empty state */}
          {isEmpty && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center py-16"
            >
              <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Bot className="size-8 text-primary" />
              </div>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                Hi! I'm your English tutor 👋
              </h2>
              <p className="text-sm text-muted-foreground text-center max-w-md mb-6">
                用英语和我聊天吧！我会帮你纠正语法、词汇错误，还会教你数据中心常用的英语表达。也可以直接用中文提问。
              </p>
            </motion.div>
          )}

          {/* Message list */}
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'assistant' && (
                <div className="size-7 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="size-3.5 text-primary" />
                </div>
              )}

              <div
                className={`max-w-[80%] min-w-0 ${
                  msg.role === 'user'
                    ? 'bg-primary text-primary-foreground rounded-2xl rounded-br-sm px-4 py-2.5'
                    : 'bg-card border border-border/40 rounded-2xl rounded-bl-sm px-4 py-3'
                }`}
              >
                {msg.role === 'assistant' ? (
                  <div>
                    <div className="prose prose-sm prose-invert max-w-none [&_p]:my-1 [&_ul]:my-1 [&_ol]:my-1 [&_li]:my-0.5 [&_code]:text-xs [&_code]:bg-muted/50 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_strong]:text-primary [&_h1]:text-base [&_h2]:text-sm [&_h3]:text-sm">
                      {(() => {
                        const parts = parseMessageWithWordCards(msg.content);
                        const firstWCIdx = parts.findIndex(p => p.type === 'wordcard');
                        return parts.map((part, idx) =>
                          part.type === 'wordcard' ? (
                            <WordCard key={`wc-${msg.id}-${idx}`} data={part.data as never} autoPlay={idx === firstWCIdx} />
                          ) : (
                            <ReactMarkdown key={`txt-${msg.id}-${idx}`} remarkPlugins={[remarkGfm]}>
                              {part.text}
                            </ReactMarkdown>
                          )
                        );
                      })()}
                    </div>
                    {/* English sentence favorites */}
                    <EnglishSentenceList content={msg.content} />
                    {/* Speak / Stop controls */}
                    <div className="flex items-center gap-2 mt-2 pt-2 border-t border-border/20">
                      {speakingMsgId === msg.id ? (
                        <button
                          type="button"
                          onClick={stopSpeaking}
                          className="flex items-center gap-1 text-xs text-destructive hover:text-destructive/80 transition-colors"
                        >
                          <Square className="size-3 fill-current" />
                          停止朗读
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => startSpeaking(msg.id, msg.content)}
                          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Volume2 className="size-3" />
                          朗读
                        </button>
                      )}
                      {speakingMsgId === msg.id && (
                        <span className="text-[10px] text-muted-foreground/60">
                          第 {speakingLineIdx + 1} / {speakingQueueRef.current.length} 句
                        </span>
                      )}
                    </div>
                  </div>
                ) : (
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {msg.content}
                  </p>
                )}
              </div>

              {msg.role === 'user' && (
                <div className="size-7 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                  <User className="size-3.5 text-secondary-foreground" />
                </div>
              )}
            </motion.div>
          ))}

          {/* Streaming message */}
          {isLoading && streamingContent && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-3 justify-start"
            >
              <div className="size-7 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                <Bot className="size-3.5 text-primary" />
              </div>
              <div className="max-w-[80%] min-w-0 bg-card border border-border/40 rounded-2xl rounded-bl-sm px-4 py-3">
                <div className="prose prose-sm prose-invert max-w-none [&_p]:my-1 [&_ul]:my-1 [&_ol]:my-1 [&_li]:my-0.5 [&_code]:text-xs [&_code]:bg-muted/50 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_strong]:text-primary [&_h1]:text-base [&_h2]:text-sm [&_h3]:text-sm">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {streamingContent}
                  </ReactMarkdown>
                </div>
                <span className="inline-block w-1.5 h-4 bg-primary/60 animate-pulse ml-0.5 rounded-sm" />
              </div>
            </motion.div>
          )}

          {/* Loading indicator */}
          {isLoading && !streamingContent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-3 justify-start"
            >
              <div className="size-7 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                <Bot className="size-3.5 text-primary" />
              </div>
              <div className="bg-card border border-border/40 rounded-2xl rounded-bl-sm px-4 py-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Loader2 className="size-3.5 animate-spin" />
                  思考中...
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Input */}
      <div className="pt-3 border-t border-border/40 shrink-0">
        {/* Interim speech text */}
        {isRecording && interimText && (
          <div className="mb-2 px-3 py-2 rounded-lg bg-primary/5 border border-primary/20 text-xs text-muted-foreground">
            <span className="inline-block w-2 h-2 rounded-full bg-destructive animate-pulse mr-2 align-middle" />
            {interimText}
          </div>
        )}
        <form onSubmit={handleSubmit} className="flex items-end gap-2">
          <div className="flex-1 relative">
            <textarea
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={isRecording ? '正在聆听...' : '输入英语或中文开始对话... (Shift+Enter 换行)'}
              className="w-full rounded-xl border border-border/50 bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 resize-none"
              style={{ height: textareaHeight }}
              disabled={isLoading}
            />
          </div>
          {/* Voice input button */}
          {voiceSupported && (
            <div className="flex items-center gap-1 shrink-0">
              {/* Language toggle */}
              <button
                type="button"
                onClick={() => setVoiceLang((prev) => (prev === 'en-US' ? 'zh-CN' : 'en-US'))}
                className="h-10 px-2 rounded-xl border border-border/50 bg-card text-xs font-medium text-muted-foreground hover:text-foreground hover:border-border transition-colors"
                title={`当前: ${voiceLang === 'en-US' ? '英语' : '中文'}识别，点击切换`}
              >
                {voiceLang === 'en-US' ? 'EN' : '中'}
              </button>
              {/* Mic button */}
              <Button
                type="button"
                size="icon"
                variant={isRecording ? 'destructive' : 'outline'}
                onClick={toggleRecording}
                disabled={isLoading}
                className={`size-10 rounded-xl shrink-0 ${isRecording ? 'animate-pulse' : ''}`}
                title={isRecording ? '停止录音' : '语音输入'}
              >
                {isRecording ? <MicOff className="size-4" /> : <Mic className="size-4" />}
              </Button>
            </div>
          )}
          <Button
            type="submit"
            size="icon"
            disabled={!inputValue.trim() || isLoading}
            className="size-10 rounded-xl shrink-0"
          >
            <Send className="size-4" />
          </Button>
        </form>
        <div className="flex items-center justify-center gap-3 mt-2">
          <p className="text-[10px] text-muted-foreground/50">
            帮你纠正英语错误并给出学习建议 · 数据中心英语场景优化
          </p>
          {!voiceSupported && (
            <p className="text-[10px] text-muted-foreground/50">
              当前浏览器不支持语音识别
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

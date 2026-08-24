import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { Search, Volume2, BookText, Tag, MessageSquare, ChevronRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DC_TERMS_DICTIONARY, type IDC_DICTEntry } from '@/data/dcTermsDictionary';
import { YOUDAO_DICTIONARY, type IYoudaoEntry } from '@/data/youdaoDictionary';
import { speakWithPlugin, stopAllSpeech, warmupAudio } from '@/lib/ttsPlugin';

type DictEntry =
  | { kind: 'dc'; entry: IDC_DICTEntry }
  | { kind: 'youdao'; entry: IYoudaoEntry };

const SCENE_LABELS: Record<string, string> = {
  electrical: '电气',
  UPS: 'UPS',
  HVAC: '暖通空调',
  protection: '保护',
  generator: '发电机',
  fire: '消防',
  facility: '设施',
  safety: '安全',
  BMS: 'BMS',
  DCIM: 'DCIM',
  operation: '运维',
  security: '安保',
  construction: '施工',
  water: '给排水',
};

const SCENES = Object.keys(SCENE_LABELS);

function getTopScene(scene: string): string {
  return scene.split('/')[0];
}

export default function DictionaryPage() {
  const [query, setQuery] = useState('');
  const [activeScene, setActiveScene] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
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

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const results: DictEntry[] = [];

    for (const entry of DC_TERMS_DICTIONARY) {
      if (activeScene && getTopScene(entry.scene) !== activeScene) continue;
      if (q && !entry.term.toLowerCase().includes(q) && !entry.definition.includes(q) && !entry.workMeaning.includes(q)) continue;
      results.push({ kind: 'dc', entry });
    }

    if (!activeScene) {
      for (const entry of YOUDAO_DICTIONARY) {
        if (q && !entry.term.toLowerCase().includes(q) && !entry.definition.includes(q)) continue;
        if (!q) continue;
        results.push({ kind: 'youdao', entry });
      }
    }

    if (!q && !activeScene) {
      return results.slice(0, 200);
    }

    return results.slice(0, 100);
  }, [query, activeScene]);

  const selected = filtered[selectedIndex] ?? null;

  const handlePlay = useCallback(() => {
    if (!selected) return;
    warmupAudio();
    if (speakStopRef.current) {
      speakStopRef.current();
      speakStopRef.current = null;
    }
    setIsPlaying(true);
    const text = selected.kind === 'dc' && selected.entry.example
      ? `${selected.entry.term}. ${selected.entry.example}`
      : selected.entry.term;
    if (!text.trim()) return;
    const stopFn = speakWithPlugin(text, () => {
      if (speakStopRef.current === stopFn) {
        speakStopRef.current = null;
      }
      setIsPlaying(false);
    }, 'british');
    speakStopRef.current = stopFn;
  }, [selected]);

  const handleSelect = useCallback((idx: number) => {
    setSelectedIndex(idx);
  }, []);

  const handleSceneClick = useCallback((scene: string | null) => {
    setActiveScene(scene);
    setSelectedIndex(0);
  }, []);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setSelectedIndex(0);
  }, []);

  const sceneCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const entry of DC_TERMS_DICTIONARY) {
      const top = getTopScene(entry.scene);
      counts[top] = (counts[top] || 0) + 1;
    }
    return counts;
  }, []);

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="border-b border-border/40 px-4 py-3 space-y-3">
        <div className="flex items-center gap-2">
          <BookText className="size-5 text-primary" />
          <h1 className="text-lg font-semibold">专业词典</h1>
          <Badge variant="secondary" className="text-xs ml-1">
            {DC_TERMS_DICTIONARY.length + YOUDAO_DICTIONARY.length} 词条
          </Badge>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            placeholder="搜索英文术语或中文释义..."
            value={query}
            onChange={handleSearchChange}
            className="pl-9 bg-background/50"
          />
        </div>

        {/* Scene tabs */}
        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => handleSceneClick(null)}
            className={`shrink-0 px-2.5 py-1 rounded-sm text-xs transition-colors ${
              activeScene === null
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted/50 text-muted-foreground hover:bg-muted'
            }`}
          >
            全部
          </button>
          {SCENES.map((scene) => (
            <button
              key={scene}
              onClick={() => handleSceneClick(scene)}
              className={`shrink-0 px-2.5 py-1 rounded-sm text-xs transition-colors ${
                activeScene === scene
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted'
              }`}
            >
              {SCENE_LABELS[scene]}
              <span className="ml-1 opacity-60">{sceneCounts[scene] || 0}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content: split view */}
      <div className="flex-1 flex min-h-0">
        {/* Left: term list */}
        <div className="w-full md:w-[340px] lg:w-[380px] shrink-0 border-r border-border/30 overflow-y-auto">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
              <Search className="size-8 mb-2 opacity-40" />
              <p className="text-sm">未找到匹配词条</p>
            </div>
          ) : (
            <div>
              {filtered.map((item, idx) => {
                const isSelected = idx === selectedIndex;
                const term = item.kind === 'dc' ? item.entry.term : item.entry.term;
                const def = item.kind === 'dc' ? item.entry.definition : '';
                const scene = item.kind === 'dc' ? item.entry.scene : '';
                const type = item.kind === 'dc' ? item.entry.type : item.entry.type;

                return (
                  <button
                    key={`${item.kind}-${idx}`}
                    onClick={() => handleSelect(idx)}
                    className={`w-full text-left px-4 py-2.5 border-b border-border/20 transition-colors flex items-center gap-2 ${
                      isSelected
                        ? 'bg-accent border-l-2 border-l-primary'
                        : 'hover:bg-muted/30'
                    }`}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm truncate">{term}</span>
                        {type === 'phrase' && (
                          <Badge variant="outline" className="text-[10px] px-1 py-0 shrink-0">
                            短语
                          </Badge>
                        )}
                        {item.kind === 'youdao' && (
                          <Badge variant="outline" className="text-[10px] px-1 py-0 shrink-0 text-muted-foreground">
                            辨析
                          </Badge>
                        )}
                      </div>
                      {def && (
                        <p className="text-xs text-muted-foreground mt-0.5 truncate">{def}</p>
                      )}
                      {scene && (
                        <div className="flex items-center gap-1 mt-1">
                          <Tag className="size-3 text-muted-foreground/60" />
                          <span className="text-[10px] text-muted-foreground/60">
                            {SCENE_LABELS[getTopScene(scene)] || scene}
                          </span>
                        </div>
                      )}
                    </div>
                    <ChevronRight className="size-4 text-muted-foreground/40 shrink-0" />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Right: detail panel */}
        <div className="hidden md:flex flex-1 overflow-y-auto">
          {selected ? (
            <DetailPanel
              item={selected}
              isPlaying={isPlaying}
              onPlay={handlePlay}
            />
          ) : (
            <div className="flex-1 flex items-center justify-center text-muted-foreground">
              <p className="text-sm">选择词条查看详情</p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile detail overlay */}
      {selected && (
        <div className="md:hidden border-t border-border/40 max-h-[45vh] overflow-y-auto">
          <DetailPanel
            item={selected}
            isPlaying={isPlaying}
            onPlay={handlePlay}
          />
        </div>
      )}
    </div>
  );
}

function DetailPanel({
  item,
  isPlaying,
  onPlay,
}: {
  item: DictEntry;
  isPlaying: boolean;
  onPlay: () => void;
}) {
  if (item.kind === 'dc') {
    const { entry } = item;
    return (
      <div className="p-5 space-y-4 w-full">
        {/* Term header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold">{entry.term}</h2>
            {entry.term !== entry.lemma && (
              <p className="text-sm text-muted-foreground mt-0.5">
                词根: {entry.lemma}
              </p>
            )}
            <div className="flex items-center gap-2 mt-1.5">
              <Badge variant="outline" className="text-xs">
                {entry.type === 'phrase' ? '短语' : '单词'}
              </Badge>
              <Badge variant="outline" className="text-xs">
                <Tag className="size-3 mr-1" />
                {SCENE_LABELS[getTopScene(entry.scene)] || entry.scene}
              </Badge>
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={onPlay}
            disabled={isPlaying}
            className="shrink-0"
          >
            <Volume2 className={`size-4 ${isPlaying ? 'animate-pulse text-primary' : ''}`} />
          </Button>
        </div>

        {/* Chinese definition */}
        <div className="border border-border/30 rounded-sm p-3 space-y-2">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <BookText className="size-3.5" />
            <span>中文释义</span>
          </div>
          <p className="text-base font-medium">{entry.definition}</p>
        </div>

        {/* Work meaning */}
        {entry.workMeaning && (
          <div className="border border-border/30 rounded-sm p-3 space-y-2">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <MessageSquare className="size-3.5" />
              <span>工作含义</span>
            </div>
            <p className="text-sm leading-relaxed">{entry.workMeaning}</p>
          </div>
        )}

        {/* Example sentence */}
        {entry.example && (
          <div className="border border-border/30 rounded-sm p-3 space-y-2">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span>例句</span>
            </div>
            <p className="text-sm font-mono leading-relaxed text-foreground/90">
              {entry.example}
            </p>
          </div>
        )}

        {/* Scene path */}
        {entry.scene.includes('/') && (
          <div className="text-xs text-muted-foreground">
            场景路径: {entry.scene}
          </div>
        )}
      </div>
    );
  }

  // Youdao entry
  const { entry } = item;
  return (
    <div className="p-5 space-y-4 w-full">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold">{entry.term}</h2>
          <div className="flex items-center gap-2 mt-1.5">
            <Badge variant="outline" className="text-xs">
              {entry.type === 'phrase' ? '短语' : '单词'}
            </Badge>
            <Badge variant="outline" className="text-xs text-muted-foreground">
              词语辨析
            </Badge>
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={onPlay}
          disabled={isPlaying}
          className="shrink-0"
        >
          <Volume2 className={`size-4 ${isPlaying ? 'animate-pulse text-primary' : ''}`} />
        </Button>
      </div>

      <div className="border border-border/30 rounded-sm p-3 space-y-2">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <BookText className="size-3.5" />
          <span>词语辨析</span>
        </div>
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{entry.definition}</p>
      </div>
    </div>
  );
}

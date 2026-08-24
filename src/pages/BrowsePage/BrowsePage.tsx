import { useState, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, BookOpen, Clapperboard } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SENTENCE_SECTIONS, MOCK_SENTENCES, type ISentence } from '@/data/sentenceLearning';
import { useHiddenScenarios } from '@/hooks/useHiddenScenarios';
import { useFavorites, extractSentencePairsFromResponse } from '@/hooks/useFavorites';

export default function BrowsePage() {
  const navigate = useNavigate();
  const { hiddenScenarios } = useHiddenScenarios();
  const { favorites } = useFavorites();
  const [selectedSection, setSelectedSection] = useState<number | null>(null);
  const [selectedCustomId, setSelectedCustomId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const customScenarios = useMemo(
    () => favorites.filter(f => f.type === 'scenario' && f.inPractice),
    [favorites]
  );

  const customPairs = useMemo(() => {
    if (!selectedCustomId) return [];
    const fav = favorites.find(f => f.id === selectedCustomId);
    if (!fav) return [];
    return extractSentencePairsFromResponse(fav.aiResponse);
  }, [selectedCustomId, favorites]);

  // Build visible sections (exclude hidden scenarios)
  const visibleSections = useMemo(() => {
    return SENTENCE_SECTIONS.map((s, idx) => ({ ...s, idx })).filter(
      (s) => !hiddenScenarios.includes(s.idx)
    );
  }, [hiddenScenarios]);

  // Filter sentences based on selected section and search
  // Collect sentence ID ranges that belong to hidden scenarios
  const hiddenRanges = useMemo(() => {
    return hiddenScenarios.map((idx) => SENTENCE_SECTIONS[idx]?.range).filter(Boolean) as [number, number][];
  }, [hiddenScenarios]);

  const filteredSentences = useMemo(() => {
    let sentences = MOCK_SENTENCES;

    // Filter by section
    if (selectedSection !== null) {
      const section = SENTENCE_SECTIONS[selectedSection];
      const [start, end] = section.range;
      sentences = sentences.filter((s) => s.id >= start && s.id <= end);
    } else {
      // When showing all, exclude sentences from hidden scenarios
      if (hiddenRanges.length > 0) {
        sentences = sentences.filter(
          (s) => !hiddenRanges.some(([start, end]) => s.id >= start && s.id <= end)
        );
      }
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      sentences = sentences.filter(
        (s) =>
          s.en.toLowerCase().includes(query) ||
          s.cn.includes(query) ||
          s.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return sentences;
  }, [selectedSection, searchQuery, hiddenRanges]);

  const resultsRef = useRef<HTMLDivElement>(null);

  const scrollToResults = () => {
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  const handleSectionClick = (idx: number | null) => {
    setSelectedSection(idx);
    setSelectedCustomId(null);
    scrollToResults();
  };

  const handleCustomClick = (id: string) => {
    setSelectedCustomId(id);
    setSelectedSection(null);
    scrollToResults();
  };

  const handleSentenceClick = (sentenceId: number) => {
    navigate(`/browse/${sentenceId}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-foreground">句子浏览</h1>
        <p className="text-sm text-muted-foreground mt-1">
          按主题分类浏览句子，含 {customScenarios.length} 个自定义场景
        </p>
      </div>

      {/* Main content */}
      <div className="space-y-4">
        {/* Category dropdown selector */}
        <Card>
          <CardContent className="p-4">
            <Select
              value={selectedCustomId ?? (selectedSection !== null ? String(selectedSection) : 'all')}
              onValueChange={(value) => {
                if (value === 'all') {
                  handleSectionClick(null);
                } else if (value.startsWith('custom:')) {
                  handleCustomClick(value.replace('custom:', ''));
                } else {
                  handleSectionClick(Number(value));
                }
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="选择主题分类">
                  <span className="flex items-center gap-2">
                    <BookOpen className="size-4 text-primary" />
                    {selectedCustomId
                      ? customScenarios.find(f => f.id === selectedCustomId)?.query ?? '自定义场景'
                      : selectedSection !== null
                        ? SENTENCE_SECTIONS[selectedSection]?.label
                        : '全部主题'}
                  </span>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {/* All topics option */}
                <SelectItem value="all">
                  <span className="flex items-center justify-between w-full">
                    <span>全部主题</span>
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {MOCK_SENTENCES.filter((s) => !hiddenRanges.some(([a, b]) => s.id >= a && s.id <= b)).length}
                    </Badge>
                  </span>
                </SelectItem>

                {/* Topic list */}
                {visibleSections.map((section) => {
                  const [start, end] = section.range;
                  const count = MOCK_SENTENCES.filter((s) => s.id >= start && s.id <= end).length;
                  return (
                    <SelectItem key={section.idx} value={String(section.idx)}>
                      <span className="flex items-center justify-between w-full">
                        <span>{section.label}</span>
                        <Badge variant="secondary" className="ml-2 text-xs">{count}</Badge>
                      </span>
                    </SelectItem>
                  );
                })}

                {/* Custom scenarios from favorites */}
                {customScenarios.length > 0 && (
                  <>
                    <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground bg-muted/30">
                      自定义场景
                    </div>
                    {customScenarios.map((fav) => {
                      const pairCount = extractSentencePairsFromResponse(fav.aiResponse).length;
                      return (
                        <SelectItem key={fav.id} value={`custom:${fav.id}`}>
                          <span className="flex items-center justify-between w-full">
                            <span>{fav.query}</span>
                            <Badge variant="secondary" className="ml-2 text-xs">{pairCount}</Badge>
                          </span>
                        </SelectItem>
                      );
                    })}
                  </>
                )}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Sentences */}
        <div ref={resultsRef} className="space-y-4 scroll-mt-4">
          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
            <Input
              type="search"
              placeholder="搜索英文、中文或标签..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 h-11"
            />
          </div>

          {/* Results count */}
          <div className="text-sm text-muted-foreground">
            {selectedCustomId ? (
              <span>自定义场景 · {customPairs.length} 句对话</span>
            ) : (
              <>
                找到 {filteredSentences.length} 句
                {selectedSection !== null && (
                  <span className="ml-2">
                    · 主题：{SENTENCE_SECTIONS[selectedSection].label}
                  </span>
                )}
              </>
            )}
          </div>

          {/* Custom scenario sentence pairs */}
          {selectedCustomId && customPairs.length > 0 && (
            <div className="grid gap-3">
              {customPairs.map((pair, idx) => (
                <Card key={idx} className="hover-elevate transition-colors">
                  <CardContent className="p-4 space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <Badge variant="outline" className="text-xs font-mono shrink-0">#{idx + 1}</Badge>
                      <Badge variant="secondary" className="text-xs">自定义场景</Badge>
                    </div>
                    <p className="text-base font-medium text-foreground leading-relaxed">{pair.en}</p>
                    <p className="text-sm text-muted-foreground">{pair.cn}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Custom scenario empty state */}
          {selectedCustomId && customPairs.length === 0 && (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                <Clapperboard className="size-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">该场景暂无可浏览的句子</p>
              </CardContent>
            </Card>
          )}

          {/* Preset sentence cards */}
          {!selectedCustomId && filteredSentences.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                <BookOpen className="size-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">未找到匹配的句子</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedSection(null);
                    setSelectedCustomId(null);
                  }}
                >
                  清除筛选
                </Button>
              </CardContent>
            </Card>
          ) : !selectedCustomId ? (
            <div className="grid gap-3">
              {filteredSentences.slice(0, 50).map((sentence) => (
                <SentenceCard
                  key={sentence.id}
                  sentence={sentence}
                  onClick={() => handleSentenceClick(sentence.id)}
                />
              ))}
              {filteredSentences.length > 50 && (
                <div className="text-center text-sm text-muted-foreground py-4">
                  显示前 50 句，共 {filteredSentences.length} 句。请使用搜索缩小范围。
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

// Sentence card component
function SentenceCard({ sentence, onClick }: { sentence: ISentence; onClick: () => void }) {
  return (
    <Card
      className="hover-elevate cursor-pointer transition-colors"
      onClick={onClick}
    >
      <CardContent className="p-4 space-y-3">
        {/* Top: ID + tags */}
        <div className="flex items-start justify-between gap-3">
          <Badge variant="outline" className="text-xs font-mono shrink-0">
            #{sentence.id}
          </Badge>
          <div className="flex flex-wrap gap-1 justify-end">
            {sentence.tags.slice(0, 2).map((tag, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* English sentence */}
        <div className="space-y-1">
          <p className="text-base font-medium text-foreground leading-relaxed">
            {sentence.en}
          </p>
          <p className="text-xs text-muted-foreground font-mono">{sentence.ipa}</p>
        </div>

        {/* Chinese translation */}
        <p className="text-sm text-muted-foreground">{sentence.cn}</p>

        {/* Context hint */}
        {sentence.when && (
          <p className="text-xs text-muted-foreground line-clamp-2 pt-1 border-t border-border/50">
            💡 {sentence.when}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

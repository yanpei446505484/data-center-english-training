import { useState, useCallback, useMemo } from 'react';
import {
  Play, ArrowRight, Clapperboard, X, RotateCcw, Search, Filter,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import { SENTENCE_SECTIONS } from '@/data/sentenceLearning';
import { useFavorites, extractSentencesFromResponse } from '@/hooks/useFavorites';
import { useHiddenScenarios } from '@/hooks/useHiddenScenarios';

// ── Category mapping for scenario sections ──
const CATEGORY_CONFIG: { key: string; label: string; icon: string; match: (label: string, idx: number) => boolean }[] = [
  { key: 'handover', label: '交接班', icon: '📝', match: (_, i) => i <= 5 },
  { key: 'dcim-event', label: 'DCIM与事件管理', icon: '🖥️', match: (_, i) => i >= 6 && i <= 13 },
  { key: 'advanced-ops', label: '高级操作', icon: '⚙️', match: (_, i) => i >= 14 && i <= 17 },
  { key: 'client-mgmt', label: '客户与管理', icon: '👥', match: (l, i) => i >= 18 && i <= 23 },
  { key: 'electrical', label: '电气系统', icon: '🔋', match: (l, i) => i >= 24 && i <= 27 },
  { key: 'mechanical', label: '暖通与消防', icon: '🌡️', match: (l, i) => i >= 28 && i <= 32 },
  { key: 'security-net', label: '安防与网络', icon: '🔒', match: (l, i) => i >= 33 && i <= 35 },
  { key: 'supervisor', label: '值班经理与高管', icon: '📋', match: (l, i) => i >= 36 && i <= 46 },
  { key: 'emergency', label: '应急与故障', icon: '⚡', match: (l, i) => i >= 47 && i <= 48 },
  { key: 'office-daily', label: '办公室日常', icon: '☀️', match: (l, i) => i >= 49 && i <= 59 },
  { key: 'site-comm', label: '现场与供应商', icon: '🏗️', match: (l, i) => i >= 60 && i <= 62 },
  { key: 'dcim-detail', label: 'DCIM 操作详解', icon: '💻', match: (l, i) => i >= 63 },
];

function getCategory(sectionIndex: number, label: string) {
  return CATEGORY_CONFIG.find(c => c.match(label, sectionIndex)) ?? CATEGORY_CONFIG[CATEGORY_CONFIG.length - 1];
}

export default function ScenarioListPage() {
  const navigate = useNavigate();
  const { favorites, togglePractice } = useFavorites();
  const { hiddenScenarios, hideScenario, restoreAll } = useHiddenScenarios();

  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const customScenarios = useMemo(
    () => favorites.filter(f => f.type === 'scenario' && f.inPractice),
    [favorites]
  );

  // Build full scenario list from SENTENCE_SECTIONS
  const allPresets = useMemo(() => {
    return SENTENCE_SECTIONS.map((section, idx) => {
      const cat = getCategory(idx, section.label);
      const sentenceCount = section.range[1] - section.range[0] + 1;
      return {
        index: idx,
        label: section.label,
        icon: cat.icon,
        category: cat.key,
        categoryLabel: cat.label,
        sentences: sentenceCount,
      };
    });
  }, []);

  // Filter presets by search + category + hidden
  const filteredPresets = useMemo(() => {
    const keyword = search.trim().toLowerCase();
    return allPresets.filter(s => {
      if (hiddenScenarios.includes(s.index)) return false;
      if (activeCategory !== 'all' && s.category !== activeCategory) return false;
      if (keyword && !s.label.toLowerCase().includes(keyword) && !s.categoryLabel.includes(keyword)) return false;
      return true;
    });
  }, [allPresets, search, activeCategory, hiddenScenarios]);

  // Filter custom scenarios by search
  const filteredCustom = useMemo(() => {
    const keyword = search.trim().toLowerCase();
    if (!keyword) return customScenarios;
    return customScenarios.filter(s => s.query.toLowerCase().includes(keyword));
  }, [customScenarios, search]);

  const handleHidePreset = useCallback((e: React.MouseEvent, index: number, label: string) => {
    e.stopPropagation();
    e.preventDefault();
    hideScenario(index);
    toast.success(`已隐藏「${label}」`);
  }, [hideScenario]);

  const handleRestoreAll = useCallback(() => {
    restoreAll();
    toast.success('已恢复所有预设场景');
  }, [restoreAll]);

  const handleRemoveCustom = useCallback((e: React.MouseEvent, favId: string, label: string) => {
    e.stopPropagation();
    e.preventDefault();
    togglePractice(favId);
    toast.success(`已移除「${label}」`);
  }, [togglePractice]);

  const totalVisible = filteredPresets.length + filteredCustom.length;
  const totalAll = allPresets.length + customScenarios.length;

  // Category counts (for filter chips)
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: allPresets.length - hiddenScenarios.length };
    for (const cat of CATEGORY_CONFIG) {
      counts[cat.key] = allPresets.filter(s => s.category === cat.key && !hiddenScenarios.includes(s.index)).length;
    }
    return counts;
  }, [allPresets, hiddenScenarios]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3 min-w-0">
          <div className="size-10 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
            <Play className="size-5 text-primary" />
          </div>
          <div className="min-w-0">
            <h1 className="text-xl font-bold text-foreground">场景练习</h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              共 {totalAll} 个场景 · 选择工作场景，逐句学习并收听标准英文发音
            </p>
          </div>
        </div>
      </div>

      {/* Search + Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="搜索场景名称或分类…"
            className="bg-card pl-9"
          />
        </div>
        <Select value={activeCategory} onValueChange={setActiveCategory}>
          <SelectTrigger className="w-full sm:w-[200px] bg-card">
            <Filter className="size-3.5 mr-2 shrink-0 text-muted-foreground" />
            <SelectValue placeholder="选择分类" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">全部分类 ({categoryCounts.all})</SelectItem>
            {CATEGORY_CONFIG.map(cat => (
              <SelectItem key={cat.key} value={cat.key}>
                {cat.icon} {cat.label} ({categoryCounts[cat.key] ?? 0})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Custom Scenarios */}
      {customScenarios.length > 0 && (
        <div>
          {filteredCustom.length === 0 ? (
            <p className="text-xs text-muted-foreground py-2">
              无匹配「{search}」的自定义场景
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredCustom.map((s) => {
                const sentenceCount = extractSentencesFromResponse(s.aiResponse).length;
                return (
                  <div key={s.id} className="group relative">
                    <Card
                      className="border-primary/20 bg-primary/5 hover:border-primary/40 hover:bg-primary/10 transition-all cursor-pointer h-full"
                      onClick={() => navigate(`/custom-practice/${s.id}`)}
                    >
                      <CardContent className="p-3 space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2 min-w-0">
                            <Clapperboard className="size-4 text-primary shrink-0" />
                            <h3 className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                              {s.query}
                            </h3>
                          </div>
                          <ArrowRight className="size-3.5 shrink-0 text-muted-foreground group-hover:text-primary transition-colors mt-0.5" />
                        </div>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-[10px] border-primary/30 text-primary tabular-nums">
                            {sentenceCount} 句
                          </Badge>
                          <span className="text-[10px] text-muted-foreground">
                            {new Date(s.createdAt).toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' })}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-1.5 right-1.5 size-6 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-destructive/10 text-muted-foreground hover:text-destructive"
                      onClick={(e) => handleRemoveCustom(e, s.id, s.query)}
                      title={`移除「${s.query}」`}
                    >
                      <X className="size-3" />
                    </Button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Preset Scenarios */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-foreground">
            {activeCategory === 'all' ? '全部预设场景' : CATEGORY_CONFIG.find(c => c.key === activeCategory)?.label ?? '预设场景'}
            <span className="text-xs text-muted-foreground font-normal ml-1.5">
              ({filteredPresets.length})
            </span>
          </h2>
          {hiddenScenarios.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleRestoreAll}
              className="gap-1.5 text-xs text-muted-foreground"
            >
              <RotateCcw className="size-3" />
              恢复 {hiddenScenarios.length} 个已隐藏
            </Button>
          )}
        </div>

        {filteredPresets.length === 0 ? (
          <div className="text-center py-12 rounded-lg border border-dashed border-border/40">
            <p className="text-sm text-muted-foreground">
              {search ? `无匹配「${search}」的场景` : '当前分类暂无可见场景'}
            </p>
            {hiddenScenarios.length > 0 && (
              <Button variant="ghost" size="sm" onClick={handleRestoreAll} className="mt-2 text-primary">
                恢复全部已隐藏
              </Button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5">
            {filteredPresets.map((item) => (
              <div key={item.index} className="group relative">
                <Card
                  className="border-border/40 hover:border-primary/40 hover:bg-primary/5 transition-all cursor-pointer h-full"
                  onClick={() => navigate(`/scenario/${item.index}`)}
                >
                  <CardContent className="p-3 space-y-1.5">
                    <div className="flex items-start justify-between gap-1.5">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-base shrink-0">{item.icon}</span>
                        <h3 className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                          {item.label}
                        </h3>
                      </div>
                      <ArrowRight className="size-3.5 shrink-0 text-muted-foreground/50 group-hover:text-primary transition-colors mt-0.5" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-[10px] tabular-nums">
                        {item.sentences} 句
                      </Badge>
                      <span className="text-[10px] text-muted-foreground/60">
                        {item.categoryLabel}
                      </span>
                    </div>
                  </CardContent>
                </Card>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1 right-1 size-6 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-destructive/10 text-muted-foreground hover:text-destructive"
                  onClick={(e) => handleHidePreset(e, item.index, item.label)}
                  title={`隐藏「${item.label}」`}
                >
                  <X className="size-3" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Summary */}
      {totalVisible > 0 && (
        <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground pt-2 border-t border-border/20">
          <span className="flex items-center gap-1.5">
            <Play className="size-3" />
            显示 {totalVisible} / {totalAll} 个场景
          </span>
          {hiddenScenarios.length > 0 && (
            <>
              <span className="text-border">|</span>
              <span>{hiddenScenarios.length} 个已隐藏</span>
            </>
          )}
        </div>
      )}
    </div>
  );
}

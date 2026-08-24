// EXPORTS: useHiddenScenarios
import { useState, useCallback } from 'react';
import { storage } from '@/lib/storage';
import { userStorageKey } from '@/lib/userStorage';

const HIDDEN_SCENARIOS_KEY = '__app_dc_hidden_scenarios';

function loadHidden(): number[] {
  try {
    const raw = storage.getItem(userStorageKey(HIDDEN_SCENARIOS_KEY));
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveHidden(indices: number[]) {
  storage.setItem(userStorageKey(HIDDEN_SCENARIOS_KEY), JSON.stringify(indices));
}

/**
 * 共享 hook：管理场景练习中被隐藏的场景索引。
 * 场景练习页隐藏某场景后，句子浏览、闪卡学习等页面也会自动过滤掉对应场景的内容。
 */
export function useHiddenScenarios() {
  const [hiddenScenarios, setHiddenScenarios] = useState<number[]>(loadHidden);

  const hideScenario = useCallback((index: number) => {
    setHiddenScenarios(prev => {
      const next = prev.includes(index) ? prev : [...prev, index];
      saveHidden(next);
      return next;
    });
  }, []);

  const restoreScenario = useCallback((index: number) => {
    setHiddenScenarios(prev => {
      const next = prev.filter(i => i !== index);
      saveHidden(next);
      return next;
    });
  }, []);

  const restoreAll = useCallback(() => {
    setHiddenScenarios([]);
    saveHidden([]);
  }, []);

  const isHidden = useCallback(
    (index: number) => hiddenScenarios.includes(index),
    [hiddenScenarios],
  );

  return {
    hiddenScenarios,
    hideScenario,
    restoreScenario,
    restoreAll,
    isHidden,
  };
}

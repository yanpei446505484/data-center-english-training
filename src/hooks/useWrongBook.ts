import { useState, useCallback, useMemo } from 'react';
import { storage } from '@/lib/storage';
import { userStorageKey } from '@/lib/userStorage';

// EXPORTS: IWrongBookItem, WrongBookQuestionType, useWrongBook

export type WrongBookQuestionType = 'choice' | 'truefalse' | 'fillblank' | 'listen' | 'matching' | 'word_choice' | 'phrase_choice' | 'grammar_choice';

export interface IWrongBookItem {
  id: string;
  questionType: WrongBookQuestionType;
  question: string;
  userAnswer: string;
  correctAnswer: string;
  sentenceEn: string;
  sentenceCn: string;
  topicLabel: string;
  createdAt: string;
  lastWrongAt: string;
  wrongCount: number;
  mastered: boolean;
  masteredAt?: string;
}

const STORAGE_KEY = '__app_dc_english_wrong_book';

function loadWrongBook(): IWrongBookItem[] {
  try {
    const raw = storage.getItem(userStorageKey(STORAGE_KEY));
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed;
    return [];
  } catch {
    return [];
  }
}

function saveWrongBook(items: IWrongBookItem[]) {
  storage.setItem(userStorageKey(STORAGE_KEY), JSON.stringify(items));
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

export function useWrongBook() {
  const [wrongAnswers, setWrongAnswers] = useState<IWrongBookItem[]>(loadWrongBook);

  /**
   * Batch-add wrong answers from a quiz session.
   * Deduplicates by sentenceEn + questionType: increments wrongCount if exists.
   */
  const addWrongAnswersBatch = useCallback((items: {
    questionType: WrongBookQuestionType;
    question: string;
    userAnswer: string;
    correctAnswer: string;
    sentenceEn: string;
    sentenceCn: string;
    topicLabel: string;
  }[]) => {
    setWrongAnswers(prev => {
      const merged = [...prev];
      const now = new Date().toISOString();

      for (const input of items) {
        const existIdx = merged.findIndex(
          a => a.sentenceEn === input.sentenceEn && a.questionType === input.questionType
        );
        if (existIdx !== -1) {
          merged[existIdx] = {
            ...merged[existIdx],
            userAnswer: input.userAnswer,
            correctAnswer: input.correctAnswer,
            question: input.question,
            topicLabel: input.topicLabel,
            lastWrongAt: now,
            wrongCount: merged[existIdx].wrongCount + 1,
            mastered: false,
            masteredAt: undefined,
          };
        } else {
          merged.unshift({
            id: generateId(),
            questionType: input.questionType,
            question: input.question,
            userAnswer: input.userAnswer,
            correctAnswer: input.correctAnswer,
            sentenceEn: input.sentenceEn,
            sentenceCn: input.sentenceCn,
            topicLabel: input.topicLabel,
            createdAt: now,
            lastWrongAt: now,
            wrongCount: 1,
            mastered: false,
          });
        }
      }

      const result = merged.slice(0, 200);
      saveWrongBook(result);
      return result;
    });
  }, []);

  const removeWrongAnswer = useCallback((id: string) => {
    setWrongAnswers(prev => {
      const next = prev.filter(a => a.id !== id);
      saveWrongBook(next);
      return next;
    });
  }, []);

  const toggleMastered = useCallback((id: string) => {
    setWrongAnswers(prev => {
      const next = prev.map(a => {
        if (a.id !== id) return a;
        const mastered = !a.mastered;
        return { ...a, mastered, masteredAt: mastered ? new Date().toISOString() : undefined };
      });
      saveWrongBook(next);
      return next;
    });
  }, []);

  const clearAll = useCallback(() => {
    setWrongAnswers([]);
    saveWrongBook([]);
  }, []);

  const clearMastered = useCallback(() => {
    setWrongAnswers(prev => {
      const next = prev.filter(a => !a.mastered);
      saveWrongBook(next);
      return next;
    });
  }, []);

  const totalCount = useMemo(() => wrongAnswers.length, [wrongAnswers]);

  return {
    wrongAnswers,
    totalCount,
    addWrongAnswersBatch,
    removeWrongAnswer,
    toggleMastered,
    clearAll,
    clearMastered,
  };
}

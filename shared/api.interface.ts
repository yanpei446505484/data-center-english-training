/* 前后端共享的类型写在这里 */

export interface DictionaryLookupResponse {
  word: string;
  lemma: string;
  chinese: string;
  englishDef: string;
  pos: string;
  ipa: string;
  example: string;
  source: string;
  domain: string;
}

export interface DictionaryBatchRequest {
  words: string[];
}

export interface DictionaryBatchResponse {
  results: Record<string, DictionaryLookupResponse | null>;
}

export interface DictionaryStatsResponse {
  totalEntries: number;
  sources: Array<{ source: string; count: number }>;
}

export interface TtsSynthesisRequest {
  text: string;
  voice?: string;
  model?: string;
  speed?: number;
}

export interface TtsSynthesisResponse {
  audioBase64?: string;
  mimeType?: string;
  audioUrl?: string;
}

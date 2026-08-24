// ---- plugin:english_learning_speech_synthesis_1 ----
// ============================================================
// 插件 english_learning_speech_synthesis_1 (英语学习语音合成) 的类型定义
// 由 get_plugin_ai_json 自动生成
// ============================================================

export interface EnglishLearningSpeechSynthesisOneInput {
  /** 要合成的英文文本内容，支持单词、词组、句子、例句等，最多3000字符 */
  english_text: string;
}

/**
 * capabilityClient.load('english_learning_speech_synthesis_1').call<EnglishLearningSpeechSynthesisOneOutput>('speechSynthesis', input)
 * 直接返回此类型，无 .data 包装，直接解构使用：
 * const { audioUrl } = result;
 * 返回值形如：
 *   {"audioUrl":"示例文本"}
 */
export interface EnglishLearningSpeechSynthesisOneOutput {
  /** [object Object] */
  audioUrl: string;
}
// ---- end:english_learning_speech_synthesis_1 ----

// ---- plugin:datacenter_english_training_assistant_1 ----
// ============================================================
// 插件 datacenter_english_training_assistant_1 (数据中心英语培训AI助手) 的类型定义
// 由 get_plugin_ai_json 自动生成
// ============================================================

export interface DatacenterEnglishTrainingAssistantOneInput {
  /** 用户输入的英文词汇、短语或句子 */
  english_content: string;
}

/**
 * capabilityClient.load('datacenter_english_training_assistant_1').call<DatacenterEnglishTrainingAssistantOneOutput>('textGenerate', input)
 * 直接返回此类型，无 .data 包装，直接解构使用：
 * const { content, response } = result;
 */
export interface DatacenterEnglishTrainingAssistantOneOutput {
  /** [object Object] */
  content: string;
  /** [object Object] */
  response?: string;
}
// ---- end:datacenter_english_training_assistant_1 ----

// ---- plugin:datacenter_english_dialogue_generate_1 ----
// ============================================================
// 插件 datacenter_english_dialogue_generate_1 (英语场景对话生成) 的类型定义
// 由 get_plugin_ai_json 自动生成
// ============================================================

export interface DatacenterEnglishDialogueGenerateOneInput {
  /** 任意场景描述，如"UPS电池低告警夜班交接"、"约会搭讪"、"餐厅点餐"等 */
  scene_description: string;
}

/**
 * capabilityClient.load('datacenter_english_dialogue_generate_1').call<DatacenterEnglishDialogueGenerateOneOutput>('textGenerate', input)
 * 直接返回此类型，无 .data 包装，直接解构使用：
 * const { content, response } = result;
 */
export interface DatacenterEnglishDialogueGenerateOneOutput {
  /** [object Object] */
  content: string;
  /** [object Object] */
  response?: string;
}
// ---- end:datacenter_english_dialogue_generate_1 ----

// ---- plugin:ai_english_teacher_assistant_1 ----
// ============================================================
// 插件 ai_english_teacher_assistant_1 (AI英语教师助手) 的类型定义
// 由 get_plugin_ai_json 自动生成
// ============================================================

export interface AiEnglishTeacherAssistantOneInput {
  /** 用户输入的英语对话内容或问题 */
  user_input: string;
  /** 对话历史上下文（可选） */
  conversation_context?: string;
}

/**
 * capabilityClient.load('ai_english_teacher_assistant_1').call<AiEnglishTeacherAssistantOneOutput>('textGenerate', input)
 * 直接返回此类型，无 .data 包装，直接解构使用：
 * const { content, response } = result;
 */
export interface AiEnglishTeacherAssistantOneOutput {
  /** [object Object] */
  content: string;
  /** [object Object] */
  response?: string;
}
// ---- end:ai_english_teacher_assistant_1 ----

// ---- plugin:american_english_learning_speech_synthesis_1 ----
// ============================================================
// 插件 american_english_learning_speech_synthesis_1 (美式英语学习语音合成) 的类型定义
// 由 get_plugin_ai_json 自动生成
// ============================================================

export interface AmericanEnglishLearningSpeechSynthesisOneInput {
  /** 要合成的美式英语文本内容，最多支持3000个字符 */
  text: string;
}

/**
 * capabilityClient.load('american_english_learning_speech_synthesis_1').call<AmericanEnglishLearningSpeechSynthesisOneOutput>('speechSynthesis', input)
 * 直接返回此类型，无 .data 包装，直接解构使用：
 * const { audioUrl } = result;
 */
export interface AmericanEnglishLearningSpeechSynthesisOneOutput {
  /** [object Object] */
  audioUrl: string;
}
// ---- end:american_english_learning_speech_synthesis_1 ----

// ---- plugin:british_english_learning_tts_1 ----
// ============================================================
// 插件 british_english_learning_tts_1 (英式英语学习语音合成) 的类型定义
// 由 get_plugin_ai_json 自动生成
// ============================================================

export interface BritishEnglishLearningTtsOneInput {
  /** 要合成的英式英语文本内容，最多支持3000个字符 */
  text_content: string;
}

/**
 * capabilityClient.load('british_english_learning_tts_1').call<BritishEnglishLearningTtsOneOutput>('speechSynthesis', input)
 * 直接返回此类型，无 .data 包装，直接解构使用：
 * const { audioUrl } = result;
 * 返回值形如：
 *   {"audioUrl":"示例文本"}
 */
export interface BritishEnglishLearningTtsOneOutput {
  /** [object Object] */
  audioUrl: string;
}
// ---- end:british_english_learning_tts_1 ----

// ---- plugin:work_scene_image_understanding_1 ----
// ============================================================
// 插件 work_scene_image_understanding_1 (工作场景图片理解) 的类型定义
// 由 get_plugin_ai_json 自动生成
// ============================================================

export interface WorkSceneImageUnderstandingOneInput {
  /** 待分析的工作场景图片 */
  scene_image: string[];
}

/**
 * capabilityClient.load('work_scene_image_understanding_1').call<WorkSceneImageUnderstandingOneOutput>('imageUnderstanding', input)
 * 直接返回此类型，无 .data 包装，直接解构使用：
 * const { content, reasoningContent, response } = result;
 */
export interface WorkSceneImageUnderstandingOneOutput {
  /** [object Object] */
  content: string;
  /** [object Object] */
  reasoningContent?: string;
  /** [object Object] */
  response?: string;
}
// ---- end:work_scene_image_understanding_1 ----

// ---- plugin:image_text_extract_translate_language_learning_1 ----
// ============================================================
// 插件 image_text_extract_translate_language_learning_1 (图片英文提取与翻译（语言学习用）) 的类型定义
// 由 get_plugin_ai_json 自动生成
// ============================================================

export interface ImageTextExtractTranslateLanguageLearningOneInput {
  /** 包含英文文本的图片（文档、标识、手册、标签等） */
  english_text_image: string[];
}

/**
 * capabilityClient.load('image_text_extract_translate_language_learning_1').call<ImageTextExtractTranslateLanguageLearningOneOutput>('imageUnderstanding', input)
 * 直接返回此类型，无 .data 包装，直接解构使用：
 * const { content, reasoningContent, response } = result;
 */
export interface ImageTextExtractTranslateLanguageLearningOneOutput {
  /** [object Object] */
  content: string;
  /** [object Object] */
  reasoningContent?: string;
  /** [object Object] */
  response?: string;
}
// ---- end:image_text_extract_translate_language_learning_1 ----

// ---- plugin:english_learning_document_parser_1 ----
// ============================================================
// 插件 english_learning_document_parser_1 (英语学习文档解析器) 的类型定义
// 由 get_plugin_ai_json 自动生成
// ============================================================

export interface EnglishLearningDocumentParserOneInput {
  /** 待解析的文档文件（支持PDF/DOC/DOCX/PPTX/XLSX等格式） */
  document_file: string[];
}

/**
 * capabilityClient.load('english_learning_document_parser_1').call<EnglishLearningDocumentParserOneOutput>('parseDocToMarkdown', input)
 * 直接返回此类型，无 .data 包装，直接解构使用：
 * const { content } = result;
 */
export interface EnglishLearningDocumentParserOneOutput {
  /** [object Object] */
  content: string;
}
// ---- end:english_learning_document_parser_1 ----

// ---- plugin:english_learning_audio_transcription_1 ----
// ============================================================
// 插件 english_learning_audio_transcription_1 (英语学习音频转文本) 的类型定义
// 由 get_plugin_ai_json 自动生成
// ============================================================

export interface EnglishLearningAudioTranscriptionOneInput {
  /** 待转录的英语音频文件（支持wav/mp3/ogg格式） */
  audio_file: string[];
}

/**
 * capabilityClient.load('english_learning_audio_transcription_1').call<EnglishLearningAudioTranscriptionOneOutput>('speechToText', input)
 * 直接返回此类型，无 .data 包装，直接解构使用：
 * const { text } = result;
 */
export interface EnglishLearningAudioTranscriptionOneOutput {
  /** [object Object] */
  text: string;
}
// ---- end:english_learning_audio_transcription_1 ----

// ---- plugin:english_learning_text_en_to_zh_translate_1 ----
// ============================================================
// 插件 english_learning_text_en_to_zh_translate_1 (英语学习文本英译中实时翻译) 的类型定义
// 由 get_plugin_ai_json 自动生成
// ============================================================

export interface EnglishLearningTextEnToZhTranslateOneInput {
  /** 待翻译的英文文本内容 */
  english_text: string;
}

/**
 * capabilityClient.load('english_learning_text_en_to_zh_translate_1').call<EnglishLearningTextEnToZhTranslateOneOutput>('translate', input)
 * 直接返回此类型，无 .data 包装，直接解构使用：
 * const { translation } = result;
 */
export interface EnglishLearningTextEnToZhTranslateOneOutput {
  /** [object Object] */
  translation: string;
}
// ---- end:english_learning_text_en_to_zh_translate_1 ----
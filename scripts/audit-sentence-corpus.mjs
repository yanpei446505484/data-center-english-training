import { mkdtemp, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { rolldown } from 'rolldown'

const projectRoot = resolve(import.meta.dirname, '..')
const tempDir = await mkdtemp(join(tmpdir(), 'sentence-audit-'))
const bundlePath = join(tempDir, 'sentence-learning.mjs')

try {
  const bundle = await rolldown({ input: join(projectRoot, 'src/data/sentenceLearning.ts') })
  await bundle.write({ file: bundlePath, format: 'esm' })
  const { MOCK_SENTENCES, SENTENCE_SECTIONS } = await import(pathToFileURL(bundlePath).href)

  const duplicateGroups = [...Map.groupBy(MOCK_SENTENCES, item => item.en.trim()).entries()]
    .filter(([, items]) => items.length > 1)
    .map(([text, items]) => ({ text, ids: items.map(item => item.id) }))

  const rules = [
    ['chinese-in-english', /[\u3400-\u9fff]/u, '英文主句包含中文字符'],
    ['space-before-punctuation', /\s+[,.!?;:]/u, '英文标点前存在多余空格'],
    ['double-space', / {2,}/u, '英文主句包含连续空格'],
    ['repeated-word', /\b([a-z]+)\s+\1\b/iu, '英文主句存在相邻重复单词'],
    ['information-alarm', /\binformation alarms?\b/iu, '告警级别通常用 informational 或 info 更自然'],
    ['alarm-disappeared', /\balarm disappeared\b/iu, '专业运维语境通常用 alarm cleared'],
    ['came-back-again', /\bcame back again\b/iu, '正式表达可用 recurred 或 came back，避免冗余'],
    ['monitor-continuously', /\bmonitor\b.+\bcontinuously\b/iu, '通常用 continue to monitor 更自然'],
  ]

  const candidates = []
  for (const sentence of MOCK_SENTENCES) {
    for (const [rule, pattern, reason] of rules) {
      if (pattern.test(sentence.en)) {
        candidates.push({ id: sentence.id, sourceId: sentence.sourceId, rule, en: sentence.en, cn: sentence.cn, reason })
      }
    }
  }

  const structural = {
    sentenceCount: MOCK_SENTENCES.length,
    uniqueIds: new Set(MOCK_SENTENCES.map(item => item.id)).size,
    firstId: MOCK_SENTENCES[0]?.id,
    lastId: MOCK_SENTENCES.at(-1)?.id,
    sectionCount: SENTENCE_SECTIONS.length,
    uniqueEnglish: new Set(MOCK_SENTENCES.map(item => item.en.trim())).size,
    uniqueChinese: new Set(MOCK_SENTENCES.map(item => item.cn.trim())).size,
    emptyEnglish: MOCK_SENTENCES.filter(item => !item.en.trim()).map(item => item.id),
    emptyChinese: MOCK_SENTENCES.filter(item => !item.cn.trim()).map(item => item.id),
  }

  const report = {
    generatedAt: new Date().toISOString(),
    scope: 'All 2,600 normalized sentence records',
    structural,
    duplicateGroups,
    ruleCandidates: candidates,
    caveat: 'Rule candidates are triage only. Native/professional quality requires manual sentence-by-sentence review.',
  }

  const reportDir = join(projectRoot, 'docs')
  await writeFile(join(reportDir, '2600-sentence-audit-baseline.json'), `${JSON.stringify(report, null, 2)}\n`)

  const markdown = [
    '# 2600句英语表达审校基线',
    '',
    `生成时间：${report.generatedAt}`,
    '',
    '## 完整性',
    '',
    `- 句子：${structural.sentenceCount} 条（ID ${structural.firstId}-${structural.lastId}，唯一 ID ${structural.uniqueIds}）`,
    `- 主题：${structural.sectionCount} 个`,
    `- 唯一英文主句：${structural.uniqueEnglish} 条`,
    `- 唯一中文主句：${structural.uniqueChinese} 条`,
    `- 重复英文组：${duplicateGroups.length} 组`,
    `- 规则初筛候选：${candidates.length} 条`,
    '',
    '## 说明',
    '',
    '规则扫描只用于定位明显格式问题、重复项和已知中式搭配，不能替代逐句人工审校。最终报告只有在 26 个百句批次全部核对并通过测试后才会标记完成。',
    '',
    '## 规则初筛候选',
    '',
    '| ID | 英文 | 原因 |',
    '| ---: | --- | --- |',
    ...candidates.map(item => `| ${item.id} | ${item.en.replaceAll('|', '\\|')} | ${item.reason} |`),
    '',
  ].join('\n')
  await writeFile(join(reportDir, '2600-sentence-audit-baseline.md'), markdown)

  console.log(JSON.stringify({ structural, duplicateGroups: duplicateGroups.length, candidates: candidates.length }))
} finally {
  await rm(tempDir, { recursive: true, force: true })
}

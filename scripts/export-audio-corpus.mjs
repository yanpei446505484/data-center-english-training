import { mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { rolldown } from 'rolldown'

const root = path.resolve(import.meta.dirname, '..')
const outputPath = process.argv[2]
if (!outputPath) throw new Error('Usage: node scripts/export-audio-corpus.mjs OUTPUT.json')

const tempDir = mkdtempSync(path.join(tmpdir(), 'dc-audio-corpus-'))
try {
  const bundlePath = path.join(tempDir, 'sentences.mjs')
  const bundle = await rolldown({ input: path.join(root, 'src', 'data', 'sentenceLearning.ts') })
  await bundle.write({ file: bundlePath, format: 'esm' })
  await bundle.close()
  const { MOCK_SENTENCES } = await import(pathToFileURL(bundlePath).href)

  const english = new Set()
  const chinese = new Set()
  for (const sentence of MOCK_SENTENCES) {
    if (sentence.en?.trim()) english.add(sentence.en.trim())
    if (sentence.cn?.trim()) chinese.add(sentence.cn.trim())
    for (const word of sentence.words || []) {
      const text = (word.word || word.w || '').trim()
      if (text) english.add(text)
    }
    for (const phrase of sentence.phrases || []) {
      const text = (phrase.phrase || phrase.p || '').trim()
      if (text) english.add(text)
    }
  }

  writeFileSync(outputPath, JSON.stringify({
    sentenceCount: MOCK_SENTENCES.length,
    english: [...english],
    chinese: [...chinese],
  }))
  console.log(`Exported ${english.size} English and ${chinese.size} Chinese pronunciation texts.`)
} finally {
  rmSync(tempDir, { recursive: true, force: true })
}

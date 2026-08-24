const fs = require('node:fs')
const path = require('node:path')

const root = path.resolve(__dirname, '..')
const baseManifestPath = path.join(root, 'public', 'audio', 'manifest.json')
const chineseManifestPath = path.join(root, 'public', 'audio', 'zh-manifest.json')
if (!fs.existsSync(baseManifestPath)) throw new Error('Static audio manifest is missing')

const baseManifest = JSON.parse(fs.readFileSync(baseManifestPath, 'utf8'))
const chineseManifest = fs.existsSync(chineseManifestPath)
  ? JSON.parse(fs.readFileSync(chineseManifestPath, 'utf8'))
  : null
for (const manifest of [baseManifest, chineseManifest].filter(Boolean)) {
  if (manifest.engine !== 'kokoro-multi-lang-v1_0') throw new Error(`Unexpected audio engine: ${manifest.engine}`)
}
const entries = Object.entries({ ...baseManifest.items, ...chineseManifest?.items })
if (entries.length < 600) throw new Error(`Static audio manifest is incomplete: ${entries.length} entries`)
const chineseEntries = entries.filter(([key]) => key.startsWith('zh\0'))
if (process.env.REQUIRE_KOKORO_ZH === '1' && chineseEntries.length < 2_500) {
  throw new Error(`Kokoro Chinese audio is incomplete: ${chineseEntries.length} entries`)
}

const validatedFiles = new Set()
for (const [key, item] of entries) {
  const relative = typeof item === 'string' ? item : item.path
  if (typeof item !== 'string' && (!(item.start >= 0) || !(item.duration > 0))) {
    throw new Error(`Invalid audio sprite range for ${JSON.stringify(key)}`)
  }
  if (validatedFiles.has(relative)) continue
  validatedFiles.add(relative)
  const file = path.join(root, 'public', relative)
  if (!fs.existsSync(file)) throw new Error(`Missing audio file for ${JSON.stringify(key)}: ${relative}`)
  const audio = fs.readFileSync(file)
  if (relative.endsWith('.wav') && (
    audio.length <= 44
    || audio.toString('ascii', 0, 4) !== 'RIFF'
    || audio.toString('ascii', 8, 12) !== 'WAVE'
  )) throw new Error(`Invalid WAV file: ${relative}`)
  if (relative.endsWith('.mp3') && audio.length <= 1_000) throw new Error(`Invalid MP3 file: ${relative}`)
}

const workflow = fs.readFileSync(path.join(root, '.github', 'workflows', 'deploy.yml'), 'utf8')
if (!workflow.includes('model_quantized.onnx')) throw new Error('Pages build does not install the Kokoro q8 model')
if (!workflow.includes('ort-wasm-simd-threaded.jsep.wasm')) throw new Error('Pages build does not install the ONNX WebAssembly runtime')

function walkFiles(target) {
  if (!fs.statSync(target).isDirectory()) return [target]
  return fs.readdirSync(target, { withFileTypes: true }).flatMap(entry => {
    const child = path.join(target, entry.name)
    return entry.isDirectory() ? walkFiles(child) : [child]
  })
}

for (const forbidden of ['mespeak', 'speechSynthesis', 'SpeechSynthesisUtterance']) {
  for (const relative of ['src', 'public', 'scripts', 'package.json', 'package-lock.json']) {
    const target = path.join(root, relative)
    if (!fs.existsSync(target)) continue
    for (const file of walkFiles(target)) {
      if (file === __filename) continue
      if (fs.readFileSync(file).includes(forbidden)) throw new Error(`Forbidden fallback ${forbidden} found in ${file}`)
    }
  }
}

console.log(`Validated ${entries.length} static Kokoro clips (${chineseEntries.length} Chinese) and the browser-side Kokoro runtime.`)

const fs = require('node:fs')
const path = require('node:path')

const root = path.resolve(__dirname, '..')
const audioRoot = path.join(root, 'public', 'audio')
const manifestPath = path.join(audioRoot, 'manifest.json')

if (!fs.existsSync(manifestPath)) throw new Error('Static audio manifest is missing')
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
const entries = Object.entries(manifest.items || {})
if (manifest.engine !== 'kokoro-multi-lang-v1_0') throw new Error(`Unexpected audio engine: ${manifest.engine}`)
if (entries.length < 300) throw new Error(`Static audio manifest is incomplete: ${entries.length} entries`)

for (const [key, relative] of entries) {
  const file = path.join(root, 'public', relative)
  if (!fs.existsSync(file)) throw new Error(`Missing audio file for ${JSON.stringify(key)}: ${relative}`)
  const wav = fs.readFileSync(file)
  if (wav.length <= 44 || wav.toString('ascii', 0, 4) !== 'RIFF' || wav.toString('ascii', 8, 12) !== 'WAVE') {
    throw new Error(`Invalid WAV file: ${relative}`)
  }
}

console.log(`Validated ${entries.length} static Kokoro WAV files.`)

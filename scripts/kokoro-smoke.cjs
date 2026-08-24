const fs = require('node:fs')
const path = require('node:path')

const root = path.resolve(__dirname, '..')
const runtimePath = path.join(root, 'public', 'kokoro', 'kokoro.web.js')
const runtime = fs.readFileSync(runtimePath, 'utf8')

if (!runtime.includes('KokoroTTS')) throw new Error('Kokoro browser runtime is invalid')
if (!runtime.includes('new URL(`voices/${e}.bin`,import.meta.url).href')) {
  throw new Error('Kokoro voices are not configured as same-origin assets')
}
if (!runtime.includes('allowLocalModels:!0,localModelPath:h?n.join(m,b):new URL(".",import.meta.url).href')) {
  throw new Error('Kokoro model files are not configured as same-origin assets')
}
if (runtime.includes('huggingface.co/onnx-community/Kokoro-82M-v1.0-ONNX/resolve/main/voices/')) {
  throw new Error('Kokoro runtime still contains a cross-origin voice request')
}

for (const voice of ['bf_emma', 'af_sarah']) {
  const voicePath = path.join(root, 'public', 'kokoro', 'voices', `${voice}.bin`)
  if (fs.statSync(voicePath).size !== 522240) throw new Error(`Invalid Kokoro voice: ${voice}`)
}

console.log('Validated same-origin Kokoro browser runtime and both accent voices.')

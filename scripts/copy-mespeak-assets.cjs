const fs = require('node:fs')
const path = require('node:path')

const root = path.resolve(__dirname, '..')
const source = path.join(root, 'node_modules', 'mespeak')
const target = path.join(root, 'public', 'mespeak')
const copies = [
  ['src/ESpeak.js', 'ESpeak.js'],
  ['src/index.js', 'mespeak.js'],
  ['src/mespeak_config.json', 'mespeak_config.json'],
  ['voices/en/en-rp.json', 'voices/en/en-rp.json'],
  ['voices/en/en-us.json', 'voices/en/en-us.json'],
  ['voices/zh.json', 'voices/zh.json'],
  ['README.md', 'LICENSE-README.md'],
]

for (const [from, to] of copies) {
  const destination = path.join(target, to)
  fs.mkdirSync(path.dirname(destination), { recursive: true })
  fs.copyFileSync(path.join(source, from), destination)
}

console.log(`Prepared ${copies.length} offline speech assets.`)

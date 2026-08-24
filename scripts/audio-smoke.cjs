const meSpeak = require('mespeak')

meSpeak.loadConfig(require('mespeak/src/mespeak_config.json'))
const voices = [
  ['en/en-rp', require('mespeak/voices/en/en-rp.json')],
  ['en/en-us', require('mespeak/voices/en/en-us.json')],
]

for (const [name, voice] of voices) {
  meSpeak.loadVoice(voice)
  const wav = meSpeak.speak('Good morning, everyone.', { voice: name, speed: 145, rawdata: 'buffer' })
  const valid = Buffer.isBuffer(wav) && wav.length > 44 && wav.toString('ascii', 0, 4) === 'RIFF' && wav.toString('ascii', 8, 12) === 'WAVE'
  if (!valid) throw new Error(`${name} did not generate a valid WAV`)
  console.log(`${name}: ${wav.length} bytes RIFF/WAVE`)
}

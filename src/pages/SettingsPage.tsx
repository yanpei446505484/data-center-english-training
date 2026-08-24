import { AlertTriangle, CheckCircle2, Gauge, RefreshCw, Volume2 } from 'lucide-react'
import { useState } from 'react'
import { AudioButton } from '../components/AudioButton'
import { PageHeader } from '../components/PageHeader'
import { useApp } from '../context/AppContext'
import { audioEngine, type AudioSelfTestResult } from '../lib/audioEngine'

export function SettingsPage() {
  const { settings, updateSettings, resetLocalData } = useApp()
  const [results, setResults] = useState<AudioSelfTestResult[]>([])
  const [testing, setTesting] = useState(false)
  const [error, setError] = useState('')

  const runTest = async () => {
    setTesting(true); setError('')
    try { setResults(await audioEngine.selfTest()) }
    catch (cause) { setError(cause instanceof Error ? cause.message : '语音自检失败') }
    finally { setTesting(false) }
  }

  return (
    <div className="page settings-page">
      <PageHeader title="学习设置" subtitle="调整本地发音和学习偏好" />
      <section className="settings-card"><h2><Volume2 />默认口音</h2><div className="segmented"><button type="button" className={settings.accent === 'british' ? 'active' : ''} onClick={() => updateSettings({ accent: 'british' })}>英式 en-rp</button><button type="button" className={settings.accent === 'american' ? 'active' : ''} onClick={() => updateSettings({ accent: 'american' })}>美式 en-us</button></div><AudioButton text="Good morning, everyone." label="试听当前口音" /></section>
      <section className="settings-card"><h2><Gauge />发音速度</h2><input type="range" min="95" max="210" step="5" value={settings.speed} onChange={(event) => updateSettings({ speed: Number(event.target.value) })} /><div className="range-labels"><span>慢速跟读</span><strong>{settings.speed} 词/分钟</strong><span>自然速度</span></div></section>
      <section className="settings-card"><h2>离线语音自检</h2><p>直接检查随网站部署的英式和美式WAV生成及浏览器解码，不调用网络TTS。</p><button type="button" onClick={runTest} disabled={testing}><RefreshCw className={testing ? 'spin' : ''} />{testing ? '正在检测' : '开始自检'}</button>{results.map((result) => <div className="test-result" key={result.accent}>{result.riff && result.wave && result.decodable ? <CheckCircle2 /> : <AlertTriangle />}<span>{result.accent === 'british' ? '英式' : '美式'}：{result.bytes.toLocaleString()} bytes · {result.decodable ? '可解码' : '失败'}</span></div>)}{error && <div className="error-banner">{error}</div>}</section>
      <section className="settings-card danger-zone"><h2>重置本机数据</h2><p>会清除本浏览器中的收藏、进度、设置和导入课程，无法自动恢复。</p><button type="button" onClick={() => window.confirm('确定清除本机学习数据吗？') && resetLocalData()}>清除本机数据</button></section>
    </div>
  )
}

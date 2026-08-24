import { Mic, Play, RotateCcw, Square } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { audioEngine } from '../lib/audioEngine'

export function FollowPractice({ sentence, onRecorded }: { sentence: string; onRecorded?: () => void }) {
  const [state, setState] = useState<'idle' | 'recording' | 'ready'>('idle')
  const [error, setError] = useState('')
  const [url, setUrl] = useState('')
  const urlRef = useRef('')
  const recorder = useRef<MediaRecorder | null>(null)
  const stream = useRef<MediaStream | null>(null)
  const chunks = useRef<Blob[]>([])
  const timer = useRef<number | null>(null)

  const clearRecording = () => {
    if (urlRef.current) URL.revokeObjectURL(urlRef.current)
    urlRef.current = ''
    setUrl('')
    setState('idle')
  }

  const stop = () => {
    if (timer.current) window.clearTimeout(timer.current)
    timer.current = null
    if (recorder.current?.state === 'recording') recorder.current.stop()
  }

  const start = async () => {
    setError('')
    clearRecording()
    audioEngine.stop()
    try {
      if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) throw new Error('当前浏览器不支持本地录音')
      stream.current = await navigator.mediaDevices.getUserMedia({ audio: true })
      chunks.current = []
      recorder.current = new MediaRecorder(stream.current)
      recorder.current.ondataavailable = (event) => event.data.size && chunks.current.push(event.data)
      recorder.current.onstop = () => {
        const blob = new Blob(chunks.current, { type: recorder.current?.mimeType || 'audio/webm' })
        const nextUrl = URL.createObjectURL(blob)
        urlRef.current = nextUrl
        setUrl(nextUrl)
        setState('ready')
        onRecorded?.()
        stream.current?.getTracks().forEach((track) => track.stop())
        stream.current = null
      }
      recorder.current.start()
      setState('recording')
      timer.current = window.setTimeout(stop, 12_000)
    } catch (cause) {
      stream.current?.getTracks().forEach((track) => track.stop())
      stream.current = null
      setState('idle')
      setError(cause instanceof Error ? cause.message : '无法使用麦克风，请检查浏览器权限')
    }
  }

  useEffect(() => () => {
    if (timer.current) window.clearTimeout(timer.current)
    if (recorder.current?.state === 'recording') recorder.current.stop()
    stream.current?.getTracks().forEach((track) => track.stop())
    if (urlRef.current) URL.revokeObjectURL(urlRef.current)
  }, [])

  return (
    <div className="follow-practice">
      <button className={`follow-btn ${state === 'recording' ? 'is-recording' : ''}`} type="button" onClick={state === 'recording' ? stop : start} aria-label={`跟读：${sentence}`}>
        {state === 'recording' ? <Square /> : <Mic />}{state === 'recording' ? '停止录音' : state === 'ready' ? '重新跟读' : '点击跟读'}
      </button>
      {state === 'ready' && url && <div className="recording-review"><span><Play />回听本次跟读</span><audio src={url} controls /><button type="button" onClick={clearRecording} aria-label="删除本次录音"><RotateCcw /></button></div>}
      {error && <span className="inline-error" role="alert">{error}。GitHub Pages 使用 HTTPS，可在地址栏重新允许麦克风。</span>}
    </div>
  )
}

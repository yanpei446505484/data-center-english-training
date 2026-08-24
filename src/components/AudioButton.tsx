import { LoaderCircle, Square, Volume2 } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useApp } from '../context/AppContext'
import { audioEngine } from '../lib/audioEngine'
import type { Accent } from '../types'

interface AudioButtonProps {
  text: string
  accent?: Accent
  language?: 'en' | 'zh'
  repeat?: number
  label?: string
  className?: string
  onEnded?: () => void
}

export function AudioButton({ text, accent, language = 'en', repeat = 1, label = '朗读', className = '', onEnded }: AudioButtonProps) {
  const { settings } = useApp()
  const [state, setState] = useState<'idle' | 'loading' | 'playing'>('idle')
  const [error, setError] = useState('')
  const mounted = useRef(true)

  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
      audioEngine.stop()
    }
  }, [])

  const play = async () => {
    if (state === 'playing' || state === 'loading') {
      audioEngine.stop()
      setState('idle')
      return
    }
    setError('')
    setState('loading')
    const safety = window.setTimeout(() => mounted.current && setState('idle'), 6000)
    try {
      await audioEngine.speak(text, {
        accent: accent || settings.accent,
        language,
        speed: settings.speed,
        repeat,
        onStart: () => {
          window.clearTimeout(safety)
          if (mounted.current) setState('playing')
        },
        onFinish: (reason) => {
          window.clearTimeout(safety)
          if (mounted.current) setState('idle')
          if (reason === 'ended') onEnded?.()
        },
      })
    } catch (cause) {
      window.clearTimeout(safety)
      if (mounted.current) {
        setState('idle')
        setError(cause instanceof Error ? cause.message : '本地发音失败')
      }
    }
  }

  return (
    <div className="audio-control">
      <button type="button" className={`audio-btn ${state === 'playing' ? 'is-playing' : ''} ${className}`} onClick={play} disabled={!text.trim()}>
        {state === 'loading' ? <LoaderCircle className="spin" /> : state === 'playing' ? <Square /> : <Volume2 />}
        <span>{state === 'loading' ? '准备发音' : state === 'playing' ? '停止播放' : label}</span>
      </button>
      {error && <span className="inline-error" role="alert">{error}</span>}
    </div>
  )
}

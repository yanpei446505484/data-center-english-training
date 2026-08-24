import { Download, FileSpreadsheet, FileUp, ShieldCheck } from 'lucide-react'
import { useRef, useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { useApp } from '../context/AppContext'
import { exportUserData } from '../lib/storage'
import type { ImportedRow, Scenario } from '../types'

function toScenario(rows: ImportedRow[], sheetName: string, index: number): Scenario | null {
  const clean = rows.filter((row) => String(row.en || '').trim() && String(row.zh || '').trim())
  if (!clean.length) return null
  const id = String(clean[0].scenarioId || sheetName || `import-${index + 1}`).trim().toLowerCase().replace(/[^a-z0-9\u4e00-\u9fff]+/g, '-')
  return {
    id: `imported-${id}-${index}`,
    title: String(clean[0].scenarioTitle || sheetName || `导入场景${index + 1}`),
    subtitle: 'Imported Training Scenario',
    category: clean[0].category || 'handover',
    level: clean[0].level || '基础',
    description: '从本地课程文件导入。',
    source: 'imported',
    sentences: clean.map((row, rowIndex) => ({
      id: `imported-${id}-${index}-${rowIndex}`,
      en: String(row.en).trim(),
      zh: String(row.zh).trim(),
      ipa: row.ipa ? String(row.ipa).trim() : undefined,
    })),
  }
}

export function ImportPage() {
  const { favorites, progress, settings, scenarios, importScenarios } = useApp()
  const inputRef = useRef<HTMLInputElement>(null)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const importFile = async (file?: File) => {
    if (!file) return
    setError(''); setMessage('正在读取课程文件…')
    try {
      const XLSX = await import('xlsx')
      const buffer = await file.arrayBuffer()
      const workbook = XLSX.read(buffer)
      const imported = workbook.SheetNames.map((sheetName, index) => {
        const sheet = workbook.Sheets[sheetName]
        const raw = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet, { defval: '' })
        const rows: ImportedRow[] = raw.map((row) => ({
          scenarioId: String(row.scenarioId || row['场景ID'] || ''),
          scenarioTitle: String(row.scenarioTitle || row['场景'] || row['场景名称'] || sheetName),
          category: (row.category || row['分类'] || 'handover') as Scenario['category'],
          level: (row.level || row['难度'] || '基础') as Scenario['level'],
          en: String(row.en || row.english || row['英文'] || row['英语'] || ''),
          zh: String(row.zh || row.chinese || row['中文'] || row['翻译'] || ''),
          ipa: String(row.ipa || row['音标'] || ''),
        }))
        return toScenario(rows, sheetName, index)
      }).filter((scenario): scenario is Scenario => Boolean(scenario))
      if (!imported.length) throw new Error('没有找到有效课程行。请确认文件包含“英文/en”和“中文/zh”列。')
      importScenarios(imported)
      setMessage(`导入成功：${imported.length}个场景，共${imported.reduce((sum, item) => sum + item.sentences.length, 0)}句。`)
    } catch (cause) {
      setMessage('')
      setError(cause instanceof Error ? cause.message : '课程文件导入失败')
    }
  }

  const downloadBackup = () => {
    const blob = new Blob([exportUserData(favorites, progress, settings, scenarios)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `dc-english-backup-${new Date().toISOString().slice(0, 10)}.json`
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="page">
      <PageHeader title="导入与备份" subtitle="课程和学习数据只在本地处理，不上传服务器" />
      <div className="import-grid">
        <article className="import-card"><FileSpreadsheet /><h2>导入课程表</h2><p>支持 XLSX、XLS、CSV。每个工作表可作为一个场景，至少需要英文和中文两列。</p><button className="primary-button" type="button" onClick={() => inputRef.current?.click()}><FileUp />选择课程文件</button><input ref={inputRef} type="file" accept=".xlsx,.xls,.csv" hidden onChange={(event) => importFile(event.target.files?.[0])} /></article>
        <article className="import-card"><ShieldCheck /><h2>备份学习数据</h2><p>导出收藏、进度、设置和课程数据。可保存到网盘后在其他设备使用。</p><button type="button" onClick={downloadBackup}><Download />下载JSON备份</button></article>
      </div>
      {message && <div className="success-banner">{message}</div>}
      {error && <div className="error-banner" role="alert">{error}</div>}
      <section className="section-block format-help"><h2>推荐表头</h2><div className="code-row">场景ID ｜ 场景名称 ｜ 分类 ｜ 难度 ｜ 英文 ｜ 中文 ｜ 音标</div><p>分类可填：handover、electrical、cooling、life；难度可填：基础、进阶、专业。</p></section>
    </div>
  )
}

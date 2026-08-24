# 验证记录

验证日期：2026-08-24

## 自动检查

- Oxc lint：通过，无警告
- Vitest：4/4 测试通过
- 英式语音：生成 89,814 bytes RIFF/WAVE
- 美式语音：生成 91,362 bytes RIFF/WAVE
- TypeScript 项目构建：通过
- Vite 生产构建：通过

## 发布资源检查

生产目录中的下列资源均通过本地 HTTP 请求并返回 200：

- `index.html`
- `manifest.webmanifest`
- `sw.js`
- `mespeak/cjs-shim.js`
- `mespeak/ESpeak.js`
- `mespeak/mespeak.js`
- `mespeak/mespeak_config.json`
- `mespeak/voices/en/en-rp.json`
- `mespeak/voices/en/en-us.json`
- `mespeak/voices/zh.json`

项目内未调用 `speechSynthesis`、妙搭音频接口或外部 TTS URL。

## 发音入口覆盖

- 场景整句标准发音与循环播放
- 每个句子的逐词发音
- 重点词解释卡发音
- 收藏句子发音
- 课程词典发音
- 听力测验题目发音
- 设置页口音试听和解码自检

所有入口复用 `src/components/AudioButton.tsx` 和 `src/lib/audioEngine.ts`。

浏览器兼容修复：meSpeak 浏览器版本显式输出字节数组，再统一转换为当前页面作用域的 `ArrayBuffer`，兼容跨作用域、普通数组和 TypedArray 返回值。服务工作线程升级为 v2，页面导航改为网络优先，确保修复版本不会被旧首页缓存阻挡。

## 响应式断点

- 桌面端：大于 900px，固定侧栏和宽内容区
- 平板端：721–900px，缩窄侧栏和内容留白
- 手机端：不大于 720px，底部导航与折叠菜单
- 小屏手机：不大于 480px，按钮、录音回听和单词区重新排版

CSS 设置 `min-width: 320px`，主要网格在手机断点切换为单列，长格式内容使用局部横向滚动。

## 已知数据边界

妙搭没有提供可用的源码/课程数据导出入口，且其发布页受登录限制。因此当前内置内容是明确标注的重建种子课程；没有把重建内容冒充原始完整课程。用户可在“导入”页补充 XLSX、XLS 或 CSV 课程表。

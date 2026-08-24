# 验证记录

验证日期：2026-08-24

## 自动检查

- Oxc lint：通过，无警告
- Vitest：4/4 测试通过
- Kokoro 训练文本：58 条完整句子、315 个不重复句子/单词
- Kokoro 静态音频：英式 315 个、美式 315 个，共 630 个
- 静态音频格式：全部通过 RIFF/WAVE 校验，合计约 30.7 MiB
- 后备英式语音：生成 89,814 bytes RIFF/WAVE
- 后备美式语音：生成 91,362 bytes RIFF/WAVE
- TypeScript 项目构建：通过
- Vite 生产构建：通过

## 发布资源检查

生产目录包含下列核心资源：

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
- `audio/manifest.json`
- `audio/en-rp/*.wav`（315 个）
- `audio/en-us/*.wav`（315 个）

网站运行时未调用 `speechSynthesis`、妙搭音频接口或外部 TTS URL。Kokoro 模型只在 GitHub Actions 构建阶段下载，不发送给浏览器。

## 发音入口覆盖

- 场景整句标准发音与循环播放
- 每个句子的逐词发音
- 重点词解释卡发音
- 收藏句子发音
- 课程词典发音
- 听力测验题目发音
- 设置页口音试听和解码自检

所有入口复用 `src/components/AudioButton.tsx` 和 `src/lib/audioEngine.ts`。

可靠性修复：所有内置发音优先从同域静态清单加载 Kokoro PCM WAV，经 RIFF/WAVE 头检查和 Web Audio 解码后播放；语速通过本地 `playbackRate` 调节，重复播放复用已解码音频。服务工作线程升级为 v4，页面导航使用网络优先，并清除旧版本缓存。

## 响应式断点

- 桌面端：大于 900px，固定侧栏和宽内容区
- 平板端：721–900px，缩窄侧栏和内容留白
- 手机端：不大于 720px，底部导航与折叠菜单
- 小屏手机：不大于 480px，按钮、录音回听和单词区重新排版

CSS 设置 `min-width: 320px`，主要网格在手机断点切换为单列，长格式内容使用局部横向滚动。

## 已知数据边界

妙搭没有提供可用的源码/课程数据导出入口，且其发布页受登录限制。因此当前内置内容是明确标注的重建种子课程；没有把重建内容冒充原始完整课程。用户可在“导入”页补充 XLSX、XLS 或 CSV 课程表。

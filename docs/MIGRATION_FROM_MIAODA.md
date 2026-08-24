# 妙搭源码迁移记录

## 源码来源

本分支由妙搭后台的 `Download All` 导出包迁移，不是根据截图重写。导出包包含 React 客户端、Nest 服务端、课程数据、预设场景、专业词典及原项目文档。

## GitHub Pages 改造

- 移除妙搭容器、平台 CSS 和运行时依赖
- 使用标准 Vite + React 入口
- `BrowserRouter` 改为 `HashRouter`，保证 GitHub Pages 深层页面刷新可用
- 账号、进度、收藏、错题和报告继续使用 IndexedDB/localStorage
- 远程 TTS 全部替换为同源 Kokoro WAV + 浏览器内置 meSpeak 后备引擎
- 未配置 AI 后端时启用本地专业词典和规则助手，避免请求不存在的 `/api`
- 图片、图标、词典和语音文件全部改为仓库内同源静态资源

## 数据修正

原导出数据共有 81 个章节和 2600 条记录，但 2001–2400 这 400 个 ID 被重复使用。新版保留 `sourceId` 以便追溯，同时将运行时 `id` 规范化为 1–2600，并按原章节长度重新计算范围。

## 安全与部署

- 导出的 `.env`、密钥、日志、数据库文件和大模型本体不提交
- GitHub Actions 只安装依赖、执行检查并发布 `dist`
- 站点不需要付费域名，默认使用 GitHub Pages 免费 HTTPS 地址

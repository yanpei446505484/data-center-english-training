# 数据中心英语培训

独立、响应式的数据中心英语学习网站。可部署到 GitHub Pages，使用免费的 `github.io` 地址在手机和电脑访问。

## 主要功能

- 工作与生活场景逐句学习
- 整句、重点单词、听力测验统一使用本地离线发音
- 英式 `en-rp` / 美式 `en-us` 切换与语速调节
- 1、5、10、15 遍重复播放和立即停止
- 收藏、进度、测验记录保存在浏览器本地
- XLSX、XLS、CSV 课程表导入和 JSON 数据备份
- PWA 清单与离线缓存，适配桌面端和手机端

## 语音方案

发音使用随站点一起部署的 meSpeak/eSpeak 资源，在浏览器内生成 WAV 并通过 Web Audio 播放。不请求妙搭接口，也不依赖任何跨区域在线 TTS 服务。构建脚本会从锁定的 npm 依赖中复制语音资源到生产包；首次点击由用户手势解锁浏览器音频，之后可连续播放。

## 本地开发

```bash
npm install
npm run dev
```

完整检查：

```bash
npm run check
```

检查包括代码规范、单元测试、英式和美式 WAV 冒烟测试，以及生产构建。

## GitHub Pages

仓库包含 `.github/workflows/deploy.yml`。推送 `main` 分支后，在仓库 **Settings → Pages → Source** 选择 **GitHub Actions**，工作流会构建并发布 `dist`。

免费地址通常是：

```text
https://你的GitHub用户名.github.io/data-center-english-training/
```

## 课程数据说明

当前内置的是根据已确认界面重建的首批种子课程。其中截图明确显示的第一句为原样录入，其余内容属于用于验证完整功能的重建课程，不冒充妙搭中的完整原始课程。可在“导入”页把原课程表导入，词典和训练场景会自动扩展。

## 许可证

应用代码可按仓库许可证使用。离线语音组件的许可证说明保留在 `public/mespeak/LICENSE-README.md`。

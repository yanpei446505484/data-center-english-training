// EXPORTS: MOCK_SENTENCES_PART15A

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART15A: ISentence[] = [
  {
    id: 1201,
    en: "Good morning, everyone. Let's start the bridge call.",
    cn: "大家早上好，我们开始电话会议。",
    ipa: "/ɡʊd ˈmɔːr.nɪŋ ˈɛv.ri.wʌn lɛts stɑːrt ðə brɪdʒ kɔːl/",
    tags: ["第1201句", "客户电话会议", "★★★★★"],
    when: "客户电话会议（bridge call）开始时，由主持人（通常是值班经理或客户经理）开场。bridge call 是数据中心与客户之间的实时沟通会议，用于汇报系统状态、事件进展和故障处理情况。",
    words: [
      { w: "bridge call", ipa: "/brɪdʒ kɔːl/", pos: "名词", cn: "电话会议；多方通话", memory: "① bridge = 桥梁；② call = 通话。\nbridge call = 桥接通话，即多方电话会议，将客户、运维团队、管理层等多方连接在一起沟通。\n数据中心常用术语，区别于普通 conference call（电话会议），bridge call 更强调'桥接'各方实时协作。", phonics: "bridge 读 /brɪdʒ/，dge 读 /dʒ/；call 读 /kɔːl/。", collocations: [["start the bridge call", "开始电话会议"], ["join the bridge call", "加入电话会议"], ["bridge call number", "电话会议号码"]], examples: [["Let's start the bridge call now.", "我们现在开始电话会议。"], ["Please join the bridge call at 3 PM.", "请在下午3点加入电话会议。"]] },
      { w: "everyone", ipa: "/ˈɛv.ri.wʌn/", pos: "代词", cn: "大家；每个人", memory: "① every = 每个；② one = 一个人。\neveryone = 所有人/大家。会议开场常用 Good morning, everyone 表示对与会者的问候。", phonics: "ev 读 /ɛv/，ry 读 /ri/，one 读 /wʌn/。注意重音在第一音节。", collocations: [["Good morning, everyone", "大家早上好"], ["Thank you, everyone", "谢谢大家"], ["everyone is here", "大家都到了"]], examples: [["Good afternoon, everyone.", "大家下午好。"], ["Is everyone on the call?", "大家都在电话会议中吗？"]] },
    ],
    phrases: [
      { p: "start the bridge call", ipa: "/stɑːrt ðə brɪdʒ kɔːl/", cn: "开始电话会议", why: "start + the + bridge call = 启动电话会议。Let's start 是开场的标准用语，表示'让我们开始'。" },
    ],
    grammar: [
      { q: "Let's start 和 Shall we start 有什么区别？", a: "Let's start = 让我们开始（直接、果断，适合主持人）\nShall we start = 我们开始好吗？（更委婉，征求意见）\n✅ Let's start the bridge call.（我们开始电话会议 → 主持人直接宣布开始）\n✅ Shall we start the meeting?（我们开始会议好吗？→ 征求与会者意见）\n数据中心电话会议中，主持人通常用 Let's，因为需要高效推进。" },
    ],
    pattern: "Good morning/afternoon, everyone. Let's start the + 会议类型",
    patternExamples: [
      { en: "Good afternoon, everyone. Let's start the incident review.", cn: "大家下午好，我们开始故障复盘。", words: [{ w: "everyone", ipa: "/ˈɛvriwʌn/", cn: "大家", phonics: "every 读 /ɛvri/，one 读 /wʌn/" }, { w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }, { w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
      { en: "Good morning, everyone. Let's start the daily standup.", cn: "大家早上好，我们开始每日站会。", words: [{ w: "everyone", ipa: "/ˈɛvriwʌn/", cn: "大家", phonics: "every 读 /ɛvri/，one 读 /wʌn/" }, { w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "Good evening, everyone. Let's start the escalation call.", cn: "大家晚上好，我们开始升级电话会议。", words: [{ w: "everyone", ipa: "/ˈɛvriwʌn/", cn: "大家", phonics: "every 读 /ɛvri/，one 读 /wʌn/" }, { w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
    ],
    thinking: "客户电话会议是数据中心与客户之间的重要沟通渠道。\n会议流程：① 开场问候（本句）→ ② 感谢参加（1202）→ ③ 确认通讯（1203-1204）→ ④ 系统状态汇报（1205-1210）→ ⑤ 事件描述（1211-1215）→ ⑥ 后续计划（1216-1219）→ ⑦ Q&A（1220）→ ⑧ 致谢与结束（1221-1230）。\nbridge call 的关键原则：简洁、准确、透明、及时。",
    pronunciation: "bridge 的 dge 读 /dʒ/，不要读成 /dʒɪ/。\ncall 的 a 读长音 /ɔː/。\n节奏：Good MORN-ing ｜ EV-ery-one ｜ Let's START ｜ the BRIDGE CALL.",
    quiz: [
      { q: "大家下午好，我们开始故障复盘，怎么说？", a: "Good afternoon, everyone. Let's start the incident review." },
      { q: "bridge call 和 conference call 有什么区别？", a: "bridge call = 桥接通话（多方实时协作，常用于数据中心与客户之间的紧急沟通）；conference call = 电话会议（更通用的多方通话）。数据中心更常用 bridge call，强调各方'桥接'在一起协作解决问题。" },
    ],
  },
  {
    id: 1202,
    en: "Thank you for joining today's incident meeting.",
    cn: "感谢大家参加今天的故障会议。",
    ipa: "/θæŋk juː fɔːr ˈdʒɔɪ.nɪŋ təˈdeɪz ˈɪn.sɪ.dənt ˈmiː.tɪŋ/",
    tags: ["第1202句", "会议开场", "★★★★★"],
    when: "开场问候后，感谢与会者（特别是客户和管理层）参加本次会议。incident meeting = 故障会议，是针对已发生事件的专项沟通会。",
    words: [
      { w: "joining", ipa: "/ˈdʒɔɪ.nɪŋ/", pos: "动词（现在分词）", cn: "参加；加入", memory: "① join = 加入/参加；② joining = 正在加入。\nfor + joining = 感谢参加（for 后接动名词）。", phonics: "join 读 /dʒɔɪn/，ing 读 /ɪŋ/。oi 读 /ɔɪ/。", collocations: [["joining the meeting", "参加会议"], ["joining the call", "加入通话"], ["joining us today", "今天加入我们"]], examples: [["Thank you for joining the call.", "感谢加入通话。"], ["Thank you for joining us today.", "感谢今天参加。"]] },
      { w: "incident", ipa: "/ˈɪn.sɪ.dənt/", pos: "名词", cn: "事件；故障", memory: "① in- = 进入；② cid = 落下（拉丁语 cadere）；③ -ent = 名词后缀。\nincident = 发生的事 → 事件/故障。\n数据中心中 incident 指影响服务的非计划事件，区别于普通 event（计划内事件）。", phonics: "in 读 /ɪn/，ci 读 /sɪ/，dent 读 /dənt/，重音在第一音节。", collocations: [["incident meeting", "故障会议"], ["incident report", "故障报告"], ["incident manager", "故障经理"]], examples: [["The incident lasted two hours.", "故障持续了两个小时。"], ["Please join the incident meeting.", "请参加故障会议。"]] },
    ],
    phrases: [
      { p: "Thank you for joining", ipa: "/θæŋk juː fɔːr ˈdʒɔɪ.nɪŋ/", cn: "感谢参加", why: "Thank you for + 动名词 = 感谢做某事。这是会议开场的标准致谢用语，表达对与会者时间的尊重。" },
    ],
    grammar: [
      { q: "为什么用 for joining 而不是 for join？", a: "for 是介词，后面必须接名词或动名词（-ing 形式）。\n✅ Thank you for joining the meeting.（感谢参加会议 → joining 是动名词）\n❌ Thank you for join the meeting.（语法错误 → for 后不能接动词原形）\n✅ Thank you for your help.（感谢你的帮助 → your help 是名词短语）" },
    ],
    pattern: "Thank you for + 动名词 + 名词",
    patternExamples: [
      { en: "Thank you for attending today's meeting.", cn: "感谢出席今天的会议。", words: [{ w: "thank", ipa: "/θæŋk/", cn: "感谢", phonics: "th 读 /θ/，ank 读 /æŋk/" }, { w: "meeting", ipa: "/ˈmiːtɪŋ/", cn: "会议", phonics: "meet 读 /miːt/，ing 读 /ɪŋ/" }] },
      { en: "Thank you for your patience.", cn: "感谢您的耐心。", words: [{ w: "thank", ipa: "/θæŋk/", cn: "感谢", phonics: "th 读 /θ/，ank 读 /æŋk/" }] },
      { en: "Thank you for your understanding.", cn: "感谢您的理解。", words: [{ w: "thank", ipa: "/θæŋk/", cn: "感谢", phonics: "th 读 /θ/，ank 读 /æŋk/" }] },
    ],
    thinking: "会议开场致谢是专业礼仪。\n致谢对象：① 客户（最重要）② 管理层 ③ 技术团队。\n致谢内容：① 感谢参加 ② 感谢耐心 ③ 感谢理解。\n致谢时机：会议开场时 + 会议结束时。\n良好的开场能建立信任氛围，为后续的事件汇报奠定基调。",
    pronunciation: "thank 的 th 读 /θ/，咬舌尖。\njoining 的 oi 读 /ɔɪ/。\nincident 重音在第一音节：/ˈɪn.sɪ.dənt/。\n节奏：THANK you ｜ for JOIN-ing ｜ to-DAY'S ｜ IN-ci-dent MEET-ing.",
    quiz: [
      { q: "感谢出席今天的会议，怎么说？", a: "Thank you for attending today's meeting." },
      { q: "incident 和 event 在数据中心语境中有什么区别？", a: "incident = 故障/事件（非计划，影响服务，需要响应）；event = 事件（可以是计划内的，如维护窗口、测试）。incident meeting 是针对已发生故障的专项会议，event meeting 是针对计划内活动的协调会议。" },
    ],
  },
  {
    id: 1203,
    en: "Can everyone hear me clearly?",
    cn: "大家都能清楚听到我的声音吗？",
    ipa: "/kæn ˈɛv.ri.wʌn hɪr miː ˈklɪr.li/",
    tags: ["第1203句", "通讯确认", "★★★★★"],
    when: "开始正式内容前，确认所有与会者的通讯质量正常。这是电话会议的标准检查步骤，避免因通讯问题导致信息遗漏。",
    words: [
      { w: "clearly", ipa: "/ˈklɪr.li/", pos: "副词", cn: "清楚地；清晰地", memory: "① clear = 清楚的；② clearly = 清楚地。\nhear clearly = 听得清楚，是确认通讯质量的标准用语。", phonics: "clear 读 /klɪr/，ly 读 /li/。cl 读 /kl/。", collocations: [["hear clearly", "听清楚"], ["speak clearly", "说清楚"], ["see clearly", "看清楚"]], examples: [["Can you hear me clearly?", "你能清楚听到我的声音吗？"], ["Please speak more clearly.", "请说得更清楚一些。"]] },
    ],
    phrases: [
      { p: "hear me clearly", ipa: "/hɪr miː ˈklɪr.li/", cn: "清楚听到我的声音", why: "hear + 宾语 + clearly = 清楚听到…。这是电话会议中确认通讯质量的标准问句。" },
    ],
    grammar: [
      { q: "Can everyone hear me 和 Can you hear me 有什么区别？", a: "Can everyone hear me = 大家都能听到我吗？（面向所有人确认）\nCan you hear me = 你能听到我吗？（面向特定人确认）\n✅ Can everyone hear me clearly?（大家都能清楚听到吗？→ 开场时面向全体确认）\n✅ John, can you hear me?（John，你能听到吗？→ 针对特定人确认）\n会议开场用 everyone，因为需要确认所有与会者的通讯状态。" },
    ],
    pattern: "Can everyone + 动词 + 宾语 + 副词?",
    patternExamples: [
      { en: "Can everyone see the screen?", cn: "大家都能看到屏幕吗？", words: [{ w: "everyone", ipa: "/ˈɛvriwʌn/", cn: "大家", phonics: "every 读 /ɛvri/，one 读 /wʌn/" }] },
      { en: "Can everyone access the document?", cn: "大家都能访问文档吗？", words: [{ w: "everyone", ipa: "/ˈɛvriwʌn/", cn: "大家", phonics: "every 读 /ɛvri/，one 读 /wʌn/" }, { w: "access", ipa: "/ˈæksɛs/", cn: "门禁", phonics: "ac 读 /æk/，cess 读 /sɛs/" }] },
      { en: "Can everyone join the chat?", cn: "大家都能加入聊天吗？", words: [{ w: "everyone", ipa: "/ˈɛvriwʌn/", cn: "大家", phonics: "every 读 /ɛvri/，one 读 /wʌn/" }] },
    ],
    thinking: "通讯确认是电话会议的第一步技术检查。\n检查顺序：① 能否听到（本句）→ ② 是否需要静音（1204）→ ③ 是否能看到共享屏幕。\n如果有人说听不清楚，需要：① 检查自己的麦克风 ② 让对方检查扬声器 ③ 必要时重拨入会。\n通讯问题是电话会议最常见的技术障碍，必须在正式开始前解决。",
    pronunciation: "clearly 的 ear 读 /ɪr/，不是 /ɛr/。\ncan 在问句中弱读为 /kən/。\n节奏：Can EV-ery-one ｜ HEAR me ｜ CLEAR-ly?",
    quiz: [
      { q: "大家都能看到屏幕吗？", a: "Can everyone see the screen?" },
      { q: "如果有人说听不清楚，应该怎么处理？", a: "① 先检查自己的麦克风是否正常工作；② 请对方检查扬声器或耳机连接；③ 让对方重新拨入电话会议；④ 如果问题持续，切换到备用通讯方式（如 Teams/Zoom）。" },
    ],
  },
  {
    id: 1204,
    en: "Please mute your microphone when you are not speaking.",
    cn: "不发言时请关闭麦克风。",
    ipa: "/pliːz mjuːt jɔːr ˈmaɪ.kroʊ.foʊn wɛn juː ɑːr nɑːt ˈspiː.kɪŋ/",
    tags: ["第1204句", "会议礼仪", "★★★★★"],
    when: "确认通讯正常后，提醒与会者遵守会议礼仪：不发言时保持静音，避免背景噪音干扰会议。",
    words: [
      { w: "mute", ipa: "/mjuːt/", pos: "动词", cn: "静音；关闭麦克风", memory: "① mute = 静音/无声的（形容词）；② mute = 使静音（动词）。\n在会议语境中，mute your microphone = 关闭你的麦克风 = 静音。", phonics: "m 读 /m/，ute 读 /juːt/。注意 u 读 /juː/ 不读 /uː/。", collocations: [["mute your microphone", "关闭麦克风"], ["mute yourself", "把自己静音"], ["please mute", "请静音"]], examples: [["Please mute your microphone.", "请关闭你的麦克风。"], ["You are on mute.", "你处于静音状态。"]] },
      { w: "microphone", ipa: "/ˈmaɪ.kroʊ.foʊn/", pos: "名词", cn: "麦克风；话筒", memory: "① micro- = 微小；② phone = 声音。\nmicrophone = 把微小声音放大的设备 → 麦克风。\n口语中常缩写为 mic /maɪk/。", phonics: "mi 读 /maɪ/，cro 读 /kroʊ/，phone 读 /foʊn/。重音在第一音节。", collocations: [["microphone", "麦克风"], ["turn on the microphone", "打开麦克风"], ["microphone check", "麦克风检查"]], examples: [["Please check your microphone.", "请检查你的麦克风。"], ["Your microphone is not working.", "你的麦克风没有工作。"]] },
    ],
    phrases: [
      { p: "mute your microphone", ipa: "/mjuːt jɔːr ˈmaɪ.kroʊ.foʊn/", cn: "关闭麦克风", why: "mute + 宾语 = 使…静音。when you are not speaking = 当你不发言时。这是电话会议的基本礼仪要求。" },
    ],
    grammar: [
      { q: "when you are not speaking 是什么从句？", a: "when you are not speaking = 时间状语从句，修饰主句的动作时机。\nwhen = 当…时；you are not speaking = 你没有在说话。\n✅ Please mute your microphone when you are not speaking.（不发言时请静音 → 条件性要求）\n✅ Please mute your microphone now.（现在请静音 → 即时要求）\n用 when 从句更礼貌，因为它给了对方选择权（发言时可以打开）。" },
    ],
    pattern: "Please mute + 宾语 + when + 条件",
    patternExamples: [
      { en: "Please mute your phone when not in use.", cn: "不使用时请将手机静音。", words: [] },
      { en: "Please mute notifications during the meeting.", cn: "会议期间请关闭通知。", words: [{ w: "meeting", ipa: "/ˈmiːtɪŋ/", cn: "会议", phonics: "meet 读 /miːt/，ing 读 /ɪŋ/" }] },
      { en: "Please turn off your camera when not presenting.", cn: "不演示时请关闭摄像头。", words: [] },
    ],
    thinking: "静音礼仪是电话会议的基本规范。\n为什么需要静音：① 减少背景噪音（键盘声、空调声、谈话声）② 避免打断发言者 ③ 提高会议效率。\n静音规则：① 不发言时保持静音 ② 需要发言时先 unmute ③ 发言完毕后立即 re-mute。\n主持人职责：开场时提醒静音规则，会议中如发现噪音来源可点名要求静音。",
    pronunciation: "mute 的 u 读 /juː/，不是 /uː/。\nmicrophone 的 mi 读 /maɪ/，cro 读 /kroʊ/。\n节奏：Please MUTE ｜ your MI-cro-phone ｜ when you are NOT SPEAK-ing.",
    quiz: [
      { q: "不使用时请将手机静音，怎么说？", a: "Please mute your phone when not in use." },
      { q: "mute 和 silence 在会议语境中有什么区别？", a: "mute = 静音（特指关闭麦克风或扬声器，可逆操作）；silence = 安静/沉默（更广泛，可以指停止说话或消除声音）。会议中说 mute your microphone（关闭麦克风），不说 silence your microphone。" },
    ],
  },
  {
    id: 1205,
    en: "Let's begin with the current system status.",
    cn: "我们先介绍当前系统状态。",
    ipa: "/lɛts bɪˈɡɪn wɪð ðə ˈkʌr.ənt ˈsɪs.təm ˈsteɪ.təs/",
    tags: ["第1205句", "会议流程", "★★★★★"],
    when: "通讯确认和礼仪提醒完成后，正式进入会议内容。第一部分是系统状态汇报，这是客户最关心的内容。",
    words: [
      { w: "begin with", ipa: "/bɪˈɡɪn wɪð/", pos: "动词短语", cn: "以…开始；先从…开始", memory: "① begin = 开始；② with = 用/以。\nbegin with = 以…为起点，表示会议内容的第一个议题。\n对比：start with = 从…开始（更口语化）。", phonics: "begin 读 /bɪˈɡɪn/，with 读 /wɪð/。重音在第二音节。", collocations: [["begin with", "以…开始"], ["start with", "从…开始"], ["let's begin", "让我们开始"]], examples: [["Let's begin with the overview.", "我们从概述开始。"], ["We'll begin with the incident summary.", "我们从故障摘要开始。"]] },
      { w: "current", ipa: "/ˈkʌr.ənt/", pos: "形容词", cn: "当前的；现在的", memory: "① curr = 跑（拉丁语 currere）；② current = 正在跑的 → 当前的。\ncurrent system status = 当前系统状态，区别于 historical status（历史状态）。", phonics: "cur 读 /kʌr/，rent 读 /ənt/。重音在第一音节。", collocations: [["current status", "当前状态"], ["current situation", "当前情况"], ["current load", "当前负载"]], examples: [["What is the current system status?", "当前系统状态是什么？"], ["The current load is 45%.", "当前负载是45%。"]] },
    ],
    phrases: [
      { p: "begin with the current system status", ipa: "/bɪˈɡɪn wɪð ðə ˈkʌr.ənt ˈsɪs.təm ˈsteɪ.təs/", cn: "先从当前系统状态开始", why: "begin with + 议题 = 以某个议题为起点。system status = 系统状态，是客户电话会议的首要汇报内容。" },
    ],
    grammar: [
      { q: "Let's begin 和 Let's start 有什么区别？", a: "begin 和 start 在很多场景中可以互换，但有细微差别：\nbegin = 开始（更正式，常用于书面和正式场合）\nstart = 开始（更口语化，也用于启动机器/设备）\n✅ Let's begin with the agenda.（我们从议程开始 → 正式会议用语）\n✅ Let's start the generator.（启动发电机 → 启动设备用 start）\n电话会议中 begin 和 start 都可以，begin 稍显正式。" },
    ],
    pattern: "Let's begin with + 议题名称",
    patternExamples: [
      { en: "Let's begin with the incident summary.", cn: "我们从故障摘要开始。", words: [{ w: "begin", ipa: "/bɪˈɡɪn/", cn: "开始", phonics: "be 读 /bɪ/，gin 读 /ɡɪn/" }] },
      { en: "Let's begin with the action items.", cn: "我们从行动项开始。", words: [{ w: "begin", ipa: "/bɪˈɡɪn/", cn: "开始", phonics: "be 读 /bɪ/，gin 读 /ɡɪn/" }] },
      { en: "Let's begin with a quick round of introductions.", cn: "我们先快速做一轮自我介绍。", words: [{ w: "begin", ipa: "/bɪˈɡɪn/", cn: "开始", phonics: "be 读 /bɪ/，gin 读 /ɡɪn/" }] },
    ],
    thinking: "会议内容的标准顺序：\n① 系统状态（本句，1205-1210）→ ② 事件描述（1211-1215）→ ③ 后续计划（1216-1219）→ ④ Q&A（1220）→ ⑤ 致谢与结束（1221-1230）。\n先报系统状态是因为客户最关心'现在系统好不好'，再解释'发生了什么'和'接下来怎么办'。\n这个顺序遵循'先结论后过程'的沟通原则。",
    pronunciation: "begin 的重音在第二音节：/bɪˈɡɪn/。\ncurrent 的 ur 读 /ʌr/。\nstatus 读 /ˈsteɪ.təs/，重音在第一音节。\n节奏：Let's be-GIN ｜ with the CUR-rent ｜ SYS-tem STA-tus.",
    quiz: [
      { q: "我们先从故障摘要开始，怎么说？", a: "Let's begin with the incident summary." },
      { q: "begin 和 start 在会议语境中有什么区别？", a: "begin = 开始（更正式，常用于会议和书面语）；start = 开始（更口语化，也用于启动设备）。会议中说 Let's begin with... 或 Let's start with... 都可以，begin 稍显正式。但启动设备（如发电机）只能用 start，不能用 begin。" },
    ],
  },
  {
    id: 1206,
    en: "All critical systems are operating normally.",
    cn: "所有关键系统运行正常。",
    ipa: "/ɔːl ˈkrɪt.ɪ.kəl ˈsɪs.təmz ɑːr ˈɑː.pə.reɪ.tɪŋ ˈnɔːr.mə.li/",
    tags: ["第1206句", "系统状态", "★★★★★"],
    when: "汇报系统状态的第一句话，给出总体结论。critical systems = 关键系统（UPS、发电机、精密空调、消防等），是客户最关心的核心基础设施。",
    words: [
      { w: "critical", ipa: "/ˈkrɪt.ɪ.kəl/", pos: "形容词", cn: "关键的；严重的", memory: "① critic = 批评家/评论家；② critical = 关键的/严重的/批评的。\n在数据中心语境中，critical systems = 关键系统（对业务连续性至关重要的系统）。\ncritical alarm = 严重告警（最高级别的告警）。", phonics: "crit 读 /krɪt/，i 读 /ɪ/，cal 读 /kəl/。重音在第一音节。", collocations: [["critical systems", "关键系统"], ["critical alarm", "严重告警"], ["critical infrastructure", "关键基础设施"]], examples: [["All critical systems are online.", "所有关键系统在线。"], ["We have a critical alarm.", "我们有一个严重告警。"]] },
    ],
    phrases: [
      { p: "operating normally", ipa: "/ˈɑː.pə.reɪ.tɪŋ ˈnɔːr.mə.li/", cn: "运行正常", why: "operating + normally = 正常运行。这是系统状态汇报的标准用语，表示一切按计划运行，无异常。" },
    ],
    grammar: [
      { q: "为什么用 are operating 而不是 operate？", a: "are operating = 正在运行（现在进行时，强调当前实时状态）\noperate = 运行（一般现在时，强调常态/设计参数）\n✅ All systems are operating normally.（所有系统正在正常运行 → 汇报当前实时状态）\n✅ These systems operate 24/7.（这些系统全天候运行 → 描述设计特性）\n电话会议中汇报当前状态用进行时 are operating。" },
    ],
    pattern: "All + 系统类型 + are operating normally",
    patternExamples: [
      { en: "All UPS systems are operating normally.", cn: "所有UPS系统运行正常。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "systems", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "All generators are operating normally.", cn: "所有发电机运行正常。", words: [{ w: "generators", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "All cooling systems are operating normally.", cn: "所有冷却系统运行正常。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "systems", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
    ],
    thinking: "系统状态汇报的黄金法则：先报好消息，再报坏消息。\n汇报顺序：① 总体结论（本句：所有关键系统正常）→ ② 例外情况（1207：一台UPS维护中）→ ③ 影响评估（1208-1209：不影响客户）→ ④ 监控状态（1210：密切监控中）。\n如果系统有故障，也需要先说'大部分系统正常'，再说'但有一个问题'，避免一上来就制造恐慌。",
    pronunciation: "critical 的重音在第一音节：/ˈkrɪt.ɪ.kəl/。\noperating 的 er 读 /ə/。\nnormally 的 or 读 /ɔːr/。\n节奏：ALL CRIT-i-cal SYS-tems ｜ are OP-er-a-ting ｜ NOR-mal-ly.",
    quiz: [
      { q: "所有UPS系统运行正常，怎么说？", a: "All UPS systems are operating normally." },
      { q: "系统状态汇报的顺序原则是什么？", a: "先报好消息，再报坏消息：① 总体结论（大部分系统正常）→ ② 例外情况（某个设备维护/故障）→ ③ 影响评估（是否影响客户）→ ④ 监控状态（正在密切监控）。这样避免一上来就制造恐慌，让客户先安心再了解细节。" },
    ],
  },
  {
    id: 1207,
    en: "One UPS is under maintenance.",
    cn: "一台UPS正在维护。",
    ipa: "/wʌn ˌjuː piː ˈɛs ɪz ˈʌn.dər ˈmeɪn.tən.əns/",
    tags: ["第1207句", "系统状态", "★★★★★"],
    when: "总体正常后，汇报例外情况。under maintenance = 正在维护中，是计划内的维护工作，不是故障。",
    words: [
      { w: "under maintenance", ipa: "/ˈʌn.dər ˈmeɪn.tən.əns/", pos: "介词短语", cn: "在维护中；正在维护", memory: "① under = 在…下/处于…状态；② maintenance = 维护/保养。\nunder maintenance = 处于维护状态，表示设备正在进行计划内的维护工作。\n对比：under repair = 在维修中（通常是故障后的修复）。", phonics: "under 读 /ˈʌn.dər/，maintenance 读 /ˈmeɪn.tən.əns/。注意 maintenance 不是 maintain + ance。", collocations: [["under maintenance", "在维护中"], ["under repair", "在维修中"], ["scheduled maintenance", "计划维护"]], examples: [["UPS No.1 is under maintenance.", "1号UPS正在维护。"], ["The system is under scheduled maintenance.", "系统正在按计划维护。"]] },
    ],
    phrases: [
      { p: "under maintenance", ipa: "/ˈʌn.dər ˈmeɪn.tən.əns/", cn: "在维护中", why: "under + 名词 = 处于某种状态。under maintenance 强调维护是计划内的、受控的活动，不是突发故障。" },
    ],
    grammar: [
      { q: "under maintenance 和 being maintained 有什么区别？", a: "under maintenance = 在维护中（强调状态，更正式）\nbeing maintained = 正在被维护（强调动作正在进行，更口语化）\n✅ One UPS is under maintenance.（一台UPS在维护中 → 正式汇报用语）\n✅ One UPS is being maintained.（一台UPS正在被维护 → 更口语化）\n电话会议中用 under maintenance 更简洁专业。" },
    ],
    pattern: "数量 + 设备 + is/are under maintenance",
    patternExamples: [
      { en: "Two generators are under maintenance.", cn: "两台发电机正在维护。", words: [{ w: "generators", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "One CRAC unit is under maintenance.", cn: "一台精密空调正在维护。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "No systems are under maintenance.", cn: "没有系统在维护。", words: [{ w: "systems", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
    ],
    thinking: "维护状态汇报需要区分两种情况：\n① under maintenance = 计划维护（提前通知客户，有冗余保障）\n② under repair = 故障维修（突发事件，可能影响服务）\n电话会议中如果是计划维护，用 under maintenance 让客户知道这是受控的；如果是故障后维修，用 under repair 并说明影响。\n本句是计划维护场景，后续 1208-1209 句说明不影响客户。",
    pronunciation: "UPS 逐字母读 /ˌjuː piː ˈɛs/。\nmaintenance 读 /ˈmeɪn.tən.əns/，注意不是 /meɪnˈteɪnəns/。\n节奏：One U-P-S ｜ is UN-der ｜ MAIN-te-nance.",
    quiz: [
      { q: "两台发电机正在维护，怎么说？", a: "Two generators are under maintenance." },
      { q: "under maintenance 和 under repair 有什么区别？", a: "under maintenance = 在维护中（计划内的预防性维护，受控状态）；under repair = 在维修中（故障后的修复，非计划状态）。电话会议中如果是计划维护用 under maintenance，故障维修用 under repair。" },
    ],
  },
  {
    id: 1208,
    en: "The maintenance does not affect customer services.",
    cn: "本次维护不会影响客户业务。",
    ipa: "/ðə ˈmeɪn.tən.əns dʌz nɑːt əˈfɛkt ˈkʌs.tə.mər ˈsɜːr.vɪ.sɪz/",
    tags: ["第1208句", "影响评估", "★★★★★"],
    when: "汇报维护状态后，立即说明对客户的影响。这是客户最关心的问题：维护会不会导致我的业务中断？",
    words: [
      { w: "affect", ipa: "/əˈfɛkt/", pos: "动词", cn: "影响", memory: "① af- = ad-（朝向）；② fect = 做（拉丁语 facere）。\naffect = 对…产生影响（动词）。\n注意区分：effect = 影响/效果（名词）。", phonics: "af 读 /ə/，fect 读 /fɛkt/。重音在第二音节。", collocations: [["affect services", "影响业务"], ["affect performance", "影响性能"], ["no affect", "无影响"]], examples: [["The maintenance will not affect services.", "维护不会影响业务。"], ["How does this affect our SLA?", "这如何影响我们的SLA？"]] },
      { w: "customer services", ipa: "/ˈkʌs.tə.mər ˈsɜːr.vɪ.sɪz/", pos: "名词", cn: "客户业务；客户服务", memory: "① customer = 客户；② services = 服务/业务。\ncustomer services 在数据中心语境中指客户托管在数据中心的 IT 业务（服务器、网络、存储等）。", phonics: "customer 读 /ˈkʌs.tə.mər/，services 读 /ˈsɜːr.vɪ.sɪz/。", collocations: [["customer services", "客户业务"], ["customer impact", "客户影响"], ["no customer impact", "无客户影响"]], examples: [["Customer services are not affected.", "客户业务不受影响。"], ["We must protect customer services.", "我们必须保护客户业务。"]] },
    ],
    phrases: [
      { p: "does not affect customer services", ipa: "/dʌz nɑːt əˈfɛkt ˈkʌs.tə.mər ˈsɜːr.vɪ.sɪz/", cn: "不影响客户业务", why: "does not affect = 不影响。customer services = 客户业务。这是电话会议中最重要的 reassurance（ reassurance），让客户放心。" },
    ],
    grammar: [
      { q: "affect 和 effect 怎么区分？", a: "affect = 影响（动词，表示'对…产生作用'）\neffect = 影响/效果（名词，表示'产生的结果'）\n✅ The maintenance does not affect services.（维护不影响业务 → affect 是动词）\n✅ What is the effect of the maintenance?（维护的效果是什么？→ effect 是名词）\n记忆技巧：affect 以 a 开头 = action（动作）；effect 以 e 开头 = end result（最终结果）。" },
    ],
    pattern: "The + 活动 + does not affect + 受影响对象",
    patternExamples: [
      { en: "The maintenance does not affect IT load.", cn: "维护不影响IT负载。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
      { en: "The test does not affect production systems.", cn: "测试不影响生产系统。", words: [{ w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }, { w: "systems", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "The upgrade does not affect network connectivity.", cn: "升级不影响网络连接。", words: [{ w: "network", ipa: "/ˈnɛtwɜːrk/", cn: "网络", phonics: "net 读 /nɛt/，work 读 /wɜːrk/" }] },
    ],
    thinking: "影响评估是客户电话会议的核心内容。\n客户最关心的三个问题：① 我的业务受影响了吗？② 如果受影响，影响程度多大？③ 什么时候恢复？\n汇报顺序：① 明确说不影响（本句）→ ② 补充观察结果（1209：没有发现影响）→ ③ 说明监控状态（1210：密切监控中）。\n如果有影响，需要诚实说明：影响范围、影响程度、预计恢复时间。",
    pronunciation: "affect 的重音在第二音节：/əˈfɛkt/。\nservices 的 ser 读 /sɜːr/。\n节奏：The MAIN-te-nance ｜ does NOT af-FECT ｜ CUS-to-mer SER-vi-ces.",
    quiz: [
      { q: "维护不影响IT负载，怎么说？", a: "The maintenance does not affect IT load." },
      { q: "affect 和 effect 怎么区分？", a: "affect = 影响（动词）：The issue affects performance.（这个问题影响性能）；effect = 影响/效果（名词）：What is the effect?（效果是什么？）。记忆：affect 是 action（动作），effect 是 end result（结果）。" },
    ],
  },
  {
    id: 1209,
    en: "No customer impact has been observed.",
    cn: "目前没有发现客户业务受到影响。",
    ipa: "/noʊ ˈkʌs.tə.mər ˈɪm.pækt hæz biːn əbˈzɜːrvd/",
    tags: ["第1209句", "影响评估", "★★★★★"],
    when: "从理论层面说明不影响（1208）后，从实际观察层面补充确认：到目前为止没有发现任何客户影响。",
    words: [
      { w: "impact", ipa: "/ˈɪm.pækt/", pos: "名词", cn: "影响；冲击", memory: "① im- = in-（进入）；② pact = 压紧（拉丁语 pactus）。\nimpact = 冲击/影响（名词，比 affect 更强调严重性和可感知性）。\ncustomer impact = 客户影响，是电话会议中的关键指标。", phonics: "im 读 /ɪm/，pact 读 /pækt/。重音在第一音节。", collocations: [["customer impact", "客户影响"], ["no impact", "无影响"], ["business impact", "业务影响"]], examples: [["There is no customer impact.", "没有客户影响。"], ["What is the business impact?", "业务影响是什么？"]] },
      { w: "observed", ipa: "/əbˈzɜːrvd/", pos: "动词（过去分词）", cn: "观察到；发现", memory: "① ob- = 朝向；② serve = 服务/观察（拉丁语 servare = 看守）。\nobserve = 观察/注意到。\nhas been observed = 已经被观察到（现在完成时被动语态）。", phonics: "ob 读 /əb/，serve 读 /zɜːrv/，d 读 /d/。重音在第二音节。", collocations: [["has been observed", "已被观察到"], ["no issues observed", "未发现问题"], ["observed during inspection", "巡检中发现"]], examples: [["No issues have been observed.", "没有发现问题。"], ["Anomaly was observed at 3 AM.", "凌晨3点发现异常。"]] },
    ],
    phrases: [
      { p: "has been observed", ipa: "/hæz biːn əbˈzɜːrvd/", cn: "已被观察到", why: "has been + 过去分词 = 现在完成时被动语态，表示从过去到现在的观察结果。No impact has been observed = 到目前为止没有观察到影响。" },
    ],
    grammar: [
      { q: "为什么用 has been observed 而不是 was observed？", a: "has been observed = 已经被观察到（现在完成时，强调从过去到现在的结果）\nwas observed = 被观察到（一般过去时，强调过去某个时间点的事实）\n✅ No impact has been observed.（到目前为止没有发现影响 → 强调截止到说话时的结果）\n✅ An issue was observed at 3 AM.（凌晨3点发现了一个问题 → 强调过去特定时间的事实）\n电话会议中汇报当前状态用 has been observed，因为它覆盖从事件发生到现在的全部时间段。" },
    ],
    pattern: "No + 问题类型 + has been observed",
    patternExamples: [
      { en: "No data loss has been observed.", cn: "没有发现数据丢失。", words: [{ w: "data", ipa: "/ˈdeɪtə/", cn: "数据", phonics: "da 读 /deɪ/，ta 读 /tə/" }] },
      { en: "No performance degradation has been observed.", cn: "没有发现性能下降。", words: [] },
      { en: "No security breach has been observed.", cn: "没有发现安全漏洞。", words: [{ w: "security", ipa: "/sɪˈkjʊrɪti/", cn: "安防", phonics: "se 读 /sɪ/，curity 读 /kjʊrɪti/" }] },
    ],
    thinking: "观察结果的汇报需要严谨：\n① 用 has been observed 而不是 is（强调经过检查确认）\n② 用 no impact 而不是 nothing wrong（更专业）\n③ 如果确实发现了影响，必须诚实汇报：'Some customer impact has been observed' 并说明具体情况。\n诚实透明是建立客户信任的基础。",
    pronunciation: "impact 的重音在第一音节：/ˈɪm.pækt/。\nobserved 的 serve 读 /zɜːrv/。\n节奏：No CUS-to-mer IM-pact ｜ has been ｜ ob-SERVED.",
    quiz: [
      { q: "没有发现性能下降，怎么说？", a: "No performance degradation has been observed." },
      { q: "has been observed 和 was observed 有什么区别？", a: "has been observed = 已被观察到（现在完成时，覆盖从过去到现在的时段）；was observed = 被观察到（一般过去时，指过去某个时间点）。电话会议中用 has been observed，因为汇报的是从事件发生到现在的观察结果。" },
    ],
  },
  {
    id: 1210,
    en: "We are closely monitoring the system.",
    cn: "我们正在密切监控系统。",
    ipa: "/wiː ɑːr ˈkloʊs.li ˈmɑː.nɪ.tər.ɪŋ ðə ˈsɪs.təm/",
    tags: ["第1210句", "监控状态", "★★★★★"],
    when: "系统状态汇报的最后一句，告知客户我们正在密切关注，给客户信心。",
    words: [
      { w: "closely", ipa: "/ˈkloʊs.li/", pos: "副词", cn: "密切地；紧密地", memory: "① close = 近的/紧密的；② closely = 密切地。\nclosely monitoring = 密切监控，表示高度关注和持续跟踪。", phonics: "close 读 /kloʊs/，ly 读 /li/。o 读 /oʊ/。", collocations: [["closely monitoring", "密切监控"], ["closely watching", "密切关注"], ["working closely", "紧密合作"]], examples: [["We are closely monitoring the situation.", "我们正在密切关注情况。"], ["We are working closely with the vendor.", "我们正在与供应商紧密合作。"]] },
      { w: "monitoring", ipa: "/ˈmɑː.nɪ.tər.ɪŋ/", pos: "动词（现在分词）", cn: "监控；监测", memory: "① monitor = 监控/监测；② monitoring = 正在监控。\n数据中心运维的核心工作之一就是 24/7 monitoring（全天候监控）。", phonics: "mon 读 /mɑː/，i 读 /nɪ/，tor 读 /tər/，ing 读 /ɪŋ/。重音在第一音节。", collocations: [["system monitoring", "系统监控"], ["24/7 monitoring", "全天候监控"], ["alarm monitoring", "告警监控"]], examples: [["We monitor all critical systems.", "我们监控所有关键系统。"], ["The monitoring system detected an issue.", "监控系统发现了一个问题。"]] },
    ],
    phrases: [
      { p: "closely monitoring", ipa: "/ˈkloʊs.li ˈmɑː.nɪ.tər.ɪŋ/", cn: "密切监控", why: "closely + monitoring = 密切监控。这是给客户 reassurance 的关键用语，表示我们高度关注并持续跟踪系统状态。" },
    ],
    grammar: [
      { q: "为什么用 are monitoring 而不是 monitor？", a: "are monitoring = 正在监控（现在进行时，强调当前持续进行的动作）\nmonitor = 监控（一般现在时，强调常规工作/职责）\n✅ We are closely monitoring the system.（我们正在密切监控系统 → 强调当前特别关注）\n✅ We monitor all systems 24/7.（我们全天候监控所有系统 → 描述常规职责）\n电话会议中用进行时，因为它强调'此刻正在做'的特别关注。" },
    ],
    pattern: "We are closely monitoring + 监控对象",
    patternExamples: [
      { en: "We are closely monitoring the generators.", cn: "我们正在密切监控发电机。", words: [{ w: "monitoring", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "generators", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "We are closely monitoring the weather.", cn: "我们正在密切关注天气。", words: [{ w: "monitoring", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }] },
      { en: "We are closely monitoring the load.", cn: "我们正在密切监控负载。", words: [{ w: "monitoring", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
    ],
    thinking: "监控状态的汇报给客户信心：\n① 告诉客户'我们在看着'（We are monitoring）\n② 强调'密切'（closely）表示高度关注\n③ 如果需要，可以补充监控频率：'We check every 15 minutes'（我们每15分钟检查一次）\n这是系统状态汇报部分的收尾句，给客户一个安心的结尾。",
    pronunciation: "closely 的 o 读 /oʊ/。\nmonitoring 的重音在第一音节：/ˈmɑː.nɪ.tər.ɪŋ/。\n节奏：We are CLOSE-ly ｜ MON-i-tor-ing ｜ the SYS-tem.",
    quiz: [
      { q: "我们正在密切监控发电机，怎么说？", a: "We are closely monitoring the generators." },
      { q: "are monitoring 和 monitor 在电话会议中有什么区别？", a: "are monitoring = 正在监控（进行时，强调当前特别关注，电话会议中常用）；monitor = 监控（一般现在时，描述常规职责）。电话会议中说 We are closely monitoring 强调'此刻正在特别关注'，比 We monitor 更能给客户信心。" },
    ],
  },
  {
    id: 1211,
    en: "The incident started at 2:15 p.m.",
    cn: "事件发生于下午2点15分。",
    ipa: "/ðə ˈɪn.sɪ.dənt ˈstɑːr.tɪd æt tuː ˈfɪf.tiːn ˌpiː ˈɛm/",
    tags: ["第1211句", "事件描述", "★★★★★"],
    when: "系统状态汇报完成后，进入事件描述环节。第一句话说明事件发生的时间，这是事件报告的基本要素。",
    words: [
      { w: "started", ipa: "/ˈstɑːr.tɪd/", pos: "动词（过去式）", cn: "开始；发生", memory: "① start = 开始；② started = 开始了（过去式）。\nThe incident started = 事件发生了，指故障开始的时间点。", phonics: "start 读 /stɑːrt/，ed 读 /ɪd/。ar 读 /ɑːr/。", collocations: [["incident started", "事件发生"], ["started at", "开始于"], ["when it started", "何时开始"]], examples: [["The incident started at midnight.", "事件发生在午夜。"], ["When did the incident start?", "事件什么时候发生的？"]] },
    ],
    phrases: [
      { p: "started at + 时间", ipa: "/ˈstɑːr.tɪd æt/", cn: "开始于…时间", why: "start + at + 时间点 = 在某个时间点开始。事件汇报中必须明确说明发生时间，便于追溯和分析。" },
    ],
    grammar: [
      { q: "为什么用 started 而不是 has started？", a: "started = 发生了（一般过去时，指过去某个确定的时间点）\nhas started = 已经发生了（现在完成时，强调对现在的影响）\n✅ The incident started at 2:15 PM.（事件发生在下午2:15 → 明确时间点）\n✅ The incident has started.（事件已经发生了 → 强调现在处于事件状态中）\n汇报已知时间点的事件用一般过去时 started，因为重点是'什么时候发生的'。" },
    ],
    pattern: "The incident started at + 时间",
    patternExamples: [
      { en: "The incident started at 3:30 AM.", cn: "事件发生在凌晨3:30。", words: [{ w: "started", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "The alarm started at midnight.", cn: "告警发生在午夜。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "started", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "The outage started at 14:00.", cn: "停电发生在14:00。", words: [{ w: "started", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
    ],
    thinking: "事件时间线（timeline）是电话会议汇报的核心内容之一。\n时间线要素：① 发生时间（本句）→ ② 发现时间 → ③ 响应时间 → ④ 恢复时间 → ⑤ 当前状态。\n时间格式：24小时制（14:15）或12小时制（2:15 PM），数据中心内部用24小时制，对客户用12小时制更友好。\n精确到分钟，不要说'around 2 PM'（大约2点），要确切说'2:15 PM'。",
    pronunciation: "2:15 PM 读 /tuː ˈfɪf.tiːn ˌpiː ˈɛm/。\nstarted 的 ed 读 /ɪd/。\n节奏：The IN-ci-dent ｜ STAR-ted ｜ at TWO FIF-teen P-M.",
    quiz: [
      { q: "事件发生在凌晨3:30，怎么说？", a: "The incident started at 3:30 AM." },
      { q: "汇报事件时间时，应该精确到什么程度？", a: "精确到分钟。不要说 around 2 PM（大约2点），要确切说 2:15 PM。精确的时间便于事后分析和追溯，模糊的时间会导致时间线不准确。" },
    ],
  },
  {
    id: 1212,
    en: "The root cause is still under investigation.",
    cn: "根本原因仍在调查中。",
    ipa: "/ðə ruːt kɔːz ɪz stɪl ˈʌn.dər ˌɪn.vɛs.tɪˈɡeɪ.ʃən/",
    tags: ["第1212句", "事件描述", "★★★★★"],
    when: "说明事件发生时间后，客户通常会问'为什么会发生？'。如果根因尚未确定，需要诚实告知正在调查中。",
    words: [
      { w: "root cause", ipa: "/ruːt kɔːz/", pos: "名词", cn: "根本原因；根因", memory: "① root = 根/根源；② cause = 原因。\nroot cause = 根本原因（不是表面原因，而是导致问题的最深层原因）。\nRCA = Root Cause Analysis（根因分析），是事件后的标准流程。", phonics: "root 读 /ruːt/，cause 读 /kɔːz/。oo 读 /uː/。", collocations: [["root cause", "根本原因"], ["root cause analysis", "根因分析"], ["identify the root cause", "确定根本原因"]], examples: [["We need to find the root cause.", "我们需要找到根本原因。"], ["The root cause is unknown.", "根本原因未知。"]] },
      { w: "investigation", ipa: "/ˌɪn.vɛs.tɪˈɡeɪ.ʃən/", pos: "名词", cn: "调查；研究", memory: "① in- = 进入；② vestig = 追踪（拉丁语 vestigium = 脚印）；③ -ation = 名词后缀。\ninvestigation = 追踪脚印 → 调查。\nunder investigation = 在调查中。", phonics: "in 读 /ɪn/，ves 读 /vɛs/，ti 读 /tɪ/，ga 读 /ɡeɪ/，tion 读 /ʃən/。重音在第四音节。", collocations: [["under investigation", "在调查中"], ["ongoing investigation", "正在进行的调查"], ["investigation report", "调查报告"]], examples: [["The issue is under investigation.", "问题正在调查中。"], ["The investigation is ongoing.", "调查正在进行中。"]] },
    ],
    phrases: [
      { p: "under investigation", ipa: "/ˈʌn.dər ˌɪn.vɛs.tɪˈɡeɪ.ʃən/", cn: "在调查中", why: "under + investigation = 处于调查状态。still under investigation = 仍在调查中，表示还没有得出结论。" },
    ],
    grammar: [
      { q: "为什么用 is still 而不是 is？", a: "still = 仍然/还在（强调持续性，暗示客户在等待结果）\n✅ The root cause is still under investigation.（根因仍在调查中 → 暗示'我们知道你在等，还在查'）\n✅ The root cause is under investigation.（根因在调查中 → 中性陈述）\n加 still 更有同理心，表示理解客户的关切和等待。" },
    ],
    pattern: "The root cause is + 状态",
    patternExamples: [
      { en: "The root cause has been identified.", cn: "根本原因已确定。", words: [{ w: "root", ipa: "/ruːt/", cn: "根因", phonics: "root 读 /ruːt/" }, { w: "cause", ipa: "/kɔːz/", cn: "原因", phonics: "cause 读 /kɔːz/" }] },
      { en: "The root cause is still unknown.", cn: "根本原因仍未知。", words: [{ w: "root", ipa: "/ruːt/", cn: "根因", phonics: "root 读 /ruːt/" }, { w: "cause", ipa: "/kɔːz/", cn: "原因", phonics: "cause 读 /kɔːz/" }] },
      { en: "The root cause was a faulty component.", cn: "根本原因是一个故障部件。", words: [{ w: "root", ipa: "/ruːt/", cn: "根因", phonics: "root 读 /ruːt/" }, { w: "cause", ipa: "/kɔːz/", cn: "原因", phonics: "cause 读 /kɔːz/" }] },
    ],
    thinking: "根因汇报的原则：\n① 如果已知 → 直接说明（The root cause is X）\n② 如果未知 → 诚实说明正在调查（本句），并给出预计时间\n③ 如果有初步猜测 → 可以说明但标注为'初步'（Preliminary findings suggest...）\n④ 绝不能编造根因或回避问题\n\n客户可以理解'还在调查'，但不能接受'不说'或'说谎'。\n诚实透明是维护客户信任的基石。",
    pronunciation: "root 的 oo 读 /uː/。\ninvestigation 重音在第四音节：/ˌɪn.vɛs.tɪˈɡeɪ.ʃən/。\n节奏：The ROOT CAUSE ｜ is STILL ｜ un-der IN-ves-ti-GA-tion.",
    quiz: [
      { q: "根本原因已确定，怎么说？", a: "The root cause has been identified." },
      { q: "如果根因还不确定，应该怎么向客户汇报？", a: "诚实说明正在调查：The root cause is still under investigation. 可以补充预计完成时间：The RCA report will be ready within 24 hours. 绝不能编造根因或回避问题。客户可以接受'还在调查'，但不能接受不说或说谎。" },
    ],
  },
  {
    id: 1213,
    en: "We have isolated the affected equipment.",
    cn: "我们已经隔离了受影响的设备。",
    ipa: "/wiː hæv ˈaɪ.sə.leɪ.tɪd ðə əˈfɛk.tɪd ɪˈkwɪp.mənt/",
    tags: ["第1213句", "处置措施", "★★★★★"],
    when: "汇报根因状态后，说明已经采取的处置措施。隔离受影响设备是防止问题扩散的关键步骤。",
    words: [
      { w: "isolated", ipa: "/ˈaɪ.sə.leɪ.tɪd/", pos: "动词（过去分词）", cn: "隔离；隔离开", memory: "① isol = 岛（拉丁语 insula）；② -ate = 动词后缀。\nisolate = 使成为孤岛 → 隔离。\n在数据中心语境中，isolate equipment = 将故障设备从系统中隔离出来，防止影响扩散。", phonics: "i 读 /aɪ/，so 读 /sə/，la 读 /leɪ/，ted 读 /tɪd/。重音在第一音节。", collocations: [["isolate equipment", "隔离设备"], ["isolate the fault", "隔离故障"], ["electrically isolated", "电气隔离"]], examples: [["We have isolated the faulty UPS.", "我们已经隔离了故障UPS。"], ["Please isolate the affected circuit.", "请隔离受影响的电路。"]] },
      { w: "affected", ipa: "/əˈfɛk.tɪd/", pos: "形容词（过去分词）", cn: "受影响的", memory: "① affect = 影响；② affected = 被影响的。\naffected equipment = 受影响的设备，指因故障而无法正常运行的设备。", phonics: "af 读 /ə/，fect 读 /fɛk/，ed 读 /tɪd/。重音在第二音节。", collocations: [["affected equipment", "受影响的设备"], ["affected area", "受影响的区域"], ["affected services", "受影响的服务"]], examples: [["The affected equipment has been replaced.", "受影响的设备已更换。"], ["Which services are affected?", "哪些服务受影响？"]] },
    ],
    phrases: [
      { p: "isolated the affected equipment", ipa: "/ˈaɪ.sə.leɪ.tɪd ðə əˈfɛk.tɪd ɪˈkwɪp.mənt/", cn: "隔离了受影响的设备", why: "isolate + 宾语 = 隔离某物。affected equipment = 受影响的设备。隔离是防止故障扩散的第一步。" },
    ],
    grammar: [
      { q: "为什么用 have isolated 而不是 isolated？", a: "have isolated = 已经隔离了（现在完成时，强调动作已完成且对现在有影响）\nisolated = 隔离了（一般过去时，只说明过去发生了这个动作）\n✅ We have isolated the equipment.（我们已经隔离了设备 → 强调'现在已经隔离好了'，客户可以安心）\n✅ We isolated the equipment at 3 PM.（我们在下午3点隔离了设备 → 强调过去的动作时间）\n电话会议中用 have isolated，因为重点是'现在的状态是已隔离'。" },
    ],
    pattern: "We have + 过去分词 + the affected + 对象",
    patternExamples: [
      { en: "We have replaced the affected component.", cn: "我们已经更换了受影响的部件。", words: [] },
      { en: "We have bypassed the affected circuit.", cn: "我们已经旁路了受影响的电路。", words: [{ w: "circuit", ipa: "/ˈsɜːrkɪt/", cn: "电路", phonics: "cir 读 /sɜːr/，cuit 读 /kɪt/" }] },
      { en: "We have restarted the affected system.", cn: "我们已经重启了受影响的系统。", words: [{ w: "restarted", ipa: "/riːˈstɑːrt/", cn: "重启", phonics: "re 读 /riː/，start 读 /stɑːrt/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
    ],
    thinking: "处置措施的汇报需要清晰有序：\n① 隔离（本句：防止扩散）→ ② 恢复（1214：恢复服务）→ ③ 稳定（1215：系统稳定）。\n隔离的类型：① 电气隔离（断开电源）② 网络隔离（断开网络连接）③ 逻辑隔离（从系统中移除）。\n汇报时说明已隔离，让客户知道问题已被控制，不会扩散到其他系统。",
    pronunciation: "isolated 的重音在第一音节：/ˈaɪ.sə.leɪ.tɪd/。\naffected 的重音在第二音节：/əˈfɛk.tɪd/。\nequipment 读 /ɪˈkwɪp.mənt/。\n节奏：We have I-so-la-ted ｜ the af-FECT-ed ｜ e-QUIP-ment.",
    quiz: [
      { q: "我们已经更换了受影响的部件，怎么说？", a: "We have replaced the affected component." },
      { q: "处置措施的汇报顺序是什么？", a: "① 隔离（Isolate）：防止故障扩散 → ② 恢复（Restore）：恢复受影响的服务 → ③ 稳定（Stabilize）：确认系统恢复稳定。按这个顺序汇报让客户知道问题已被控制并正在解决。" },
    ],
  },
  {
    id: 1214,
    en: "All affected services have been restored.",
    cn: "所有受影响的业务已经恢复。",
    ipa: "/ɔːl əˈfɛk.tɪd ˈsɜːr.vɪ.sɪz hæv biːn rɪˈstɔːrd/",
    tags: ["第1214句", "恢复状态", "★★★★★"],
    when: "隔离设备后，汇报服务恢复情况。这是客户最关心的结果：我的业务恢复了吗？",
    words: [
      { w: "restored", ipa: "/rɪˈstɔːrd/", pos: "动词（过去分词）", cn: "恢复；修复", memory: "① re- = 再次；② store = 储存/恢复（拉丁语 restaurare）。\nrestore = 恢复到原来的状态 → 恢复/修复。\nservices have been restored = 服务已经恢复。", phonics: "re 读 /rɪ/，store 读 /stɔːr/，d 读 /d/。重音在第二音节。", collocations: [["services restored", "服务恢复"], ["power restored", "电力恢复"], ["fully restored", "完全恢复"]], examples: [["Power has been restored.", "电力已恢复。"], ["All services are now restored.", "所有服务现已恢复。"]] },
    ],
    phrases: [
      { p: "have been restored", ipa: "/hæv biːn rɪˈstɔːrd/", cn: "已经恢复", why: "have been + 过去分词 = 现在完成时被动语态，表示动作已完成。services have been restored = 服务已经被恢复了。" },
    ],
    grammar: [
      { q: "为什么用 have been restored 而不是 are restored？", a: "have been restored = 已经恢复了（现在完成时被动，强调'恢复'这个动作已完成）\nare restored = 处于恢复状态（一般现在时被动，强调当前状态）\n✅ All services have been restored.（所有服务已经恢复 → 强调恢复动作已完成，好消息）\n✅ All services are now in normal state.（所有服务现在处于正常状态 → 强调当前状态）\n电话会议中用 have been restored，因为它传达了'恢复完成'这个好消息。" },
    ],
    pattern: "All affected + 对象 + have been restored",
    patternExamples: [
      { en: "All affected circuits have been restored.", cn: "所有受影响的电路已恢复。", words: [{ w: "circuits", ipa: "/ˈsɜːrkɪt/", cn: "电路", phonics: "cir 读 /sɜːr/，cuit 读 /kɪt/" }] },
      { en: "All affected servers have been restored.", cn: "所有受影响的服务器已恢复。", words: [{ w: "servers", ipa: "/ˈsɜːrvər/", cn: "服务器", phonics: "serv 读 /sɜːrv/，er 读 /ər/" }] },
      { en: "All affected connections have been restored.", cn: "所有受影响的连接已恢复。", words: [] },
    ],
    thinking: "服务恢复是客户最关心的结果。\n汇报要点：① 所有受影响的（All affected）→ ② 已经恢复（have been restored）→ ③ 如果部分恢复需要说明哪些恢复了、哪些还没有。\n如果服务没有完全恢复：'Most services have been restored. One service is still being recovered.'（大部分服务已恢复，一个服务仍在恢复中）。\n诚实汇报恢复进度，不要夸大或隐瞒。",
    pronunciation: "restored 的 ore 读 /ɔːr/。\naffected 的重音在第二音节。\n节奏：All af-FECT-ed SER-vi-ces ｜ have been ｜ re-STORED.",
    quiz: [
      { q: "所有受影响的电路已恢复，怎么说？", a: "All affected circuits have been restored." },
      { q: "如果服务没有完全恢复，应该怎么汇报？", a: "诚实说明恢复进度：Most services have been restored. One service is still being recovered, and we expect full restoration within 30 minutes.（大部分服务已恢复，一个服务仍在恢复中，预计30分钟内完全恢复。）不要夸大或隐瞒。" },
    ],
  },
  {
    id: 1215,
    en: "The system is stable now.",
    cn: "目前系统已经恢复稳定。",
    ipa: "/ðə ˈsɪs.təm ɪz ˈsteɪ.bəl naʊ/",
    tags: ["第1215句", "稳定确认", "★★★★★"],
    when: "服务恢复后，确认系统整体已经稳定运行。这是事件描述环节的总结性结论，给客户最终的信心。",
    words: [
      { w: "stable", ipa: "/ˈsteɪ.bəl/", pos: "形容词", cn: "稳定的；平稳的", memory: "① sta = 站立（拉丁语 stare）；② -ble = 能够的。\nstable = 能够站得住 → 稳定的。\n系统 stable = 系统运行平稳，无波动、无异常。", phonics: "sta 读 /steɪ/，ble 读 /bəl/。a 读 /eɪ/。", collocations: [["system stable", "系统稳定"], ["stable operation", "稳定运行"], ["stable power", "稳定电力"]], examples: [["The system is now stable.", "系统现在稳定了。"], ["Power supply is stable.", "电力供应稳定。"]] },
    ],
    phrases: [
      { p: "is stable now", ipa: "/ɪz ˈsteɪ.bəl naʊ/", cn: "现在稳定了", why: "is + stable + now = 现在处于稳定状态。now 强调当前时刻的状态，与之前的不稳定形成对比。" },
    ],
    grammar: [
      { q: "stable 和 normal 有什么区别？", a: "stable = 稳定的（强调没有波动、没有变化）\nnormal = 正常的（强调符合标准、在设计范围内）\n✅ The system is stable.（系统稳定 → 没有波动，不再变化）\n✅ The system is normal.（系统正常 → 各项参数在正常范围内）\n✅ The system is stable and normal.（系统既稳定又正常 → 最完整的汇报）\n事件后先说 stable（不再恶化），再说 normal（参数正常）。" },
    ],
    pattern: "The system is stable + 时间/补充",
    patternExamples: [
      { en: "The system is stable now.", cn: "系统现在稳定了。", words: [{ w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "stable", ipa: "/ˈsteɪbl/", cn: "稳定", phonics: "sta 读 /steɪ/，ble 读 /bl/" }] },
      { en: "The system has been stable for two hours.", cn: "系统已经稳定运行两个小时了。", words: [{ w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "stable", ipa: "/ˈsteɪbl/", cn: "稳定", phonics: "sta 读 /steɪ/，ble 读 /bl/" }] },
      { en: "The system is stable and operating normally.", cn: "系统稳定并正常运行。", words: [{ w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "stable", ipa: "/ˈsteɪbl/", cn: "稳定", phonics: "sta 读 /steɪ/，ble 读 /bl/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
    ],
    thinking: "稳定确认是事件描述环节的收尾：\n① 先说 stable（稳定，不再恶化）\n② 再说 normal（正常，参数在设计范围内）\n③ 如果可以，给出稳定持续时间（stable for 2 hours）增加可信度\n\n这是给客户信心的最后一句，之后进入后续计划（1216-1219）和 Q&A（1220）环节。",
    pronunciation: "stable 的 a 读 /eɪ/：/ˈsteɪ.bəl/。\nsystem 的 y 读 /ɪ/。\n节奏：The SYS-tem ｜ is STA-ble NOW.",
    quiz: [
      { q: "系统已经稳定运行两个小时了，怎么说？", a: "The system has been stable for two hours." },
      { q: "stable 和 normal 在事件汇报中有什么区别？", a: "stable = 稳定（没有波动，不再恶化）；normal = 正常（参数在设计范围内）。事件后先说 stable（确认不再恶化），再说 normal（确认参数正常）。最完整的汇报是 The system is stable and operating normally.（系统稳定并正常运行。）" },
    ],
  },
];

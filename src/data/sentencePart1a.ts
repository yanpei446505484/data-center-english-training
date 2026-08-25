// EXPORTS: ISentence, MOCK_SENTENCES_PART1A

import type { ISentence } from './sentenceLearning';

export type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART1A: ISentence[] = [
  {
    id: 1,
    en: "Good morning, everyone.",
    cn: "大家早上好。",
    ipa: "/ɡʊd ˈmɔːr.nɪŋ ˈɛv.ri.wʌn/",
    tags: ["第1句", "开场问候", "★★★★★"],
    when: "交接班开始的第一句话，向在场所有人问好。适用于面对面交接、视频会议或对讲机通话。",
    words: [
      { w: "morning", ipa: "/ˈmɔːr.nɪŋ/", pos: "名词", cn: "早晨；上午", memory: "① morn = 早晨（古英语）；② morning = 早晨的时间。\nGood morning = 早上好，最正式的日常问候。", phonics: "mor 读 /mɔːr/，ning 读 /nɪŋ/，重音在第一音节。", collocations: [["good morning", "早上好"], ["this morning", "今天早上"], ["in the morning", "在早上"]], examples: [["Good morning, team.", "早上好，团队。"], ["I saw the alarm this morning.", "我今天早上看到了那条告警。"]] },
      { w: "everyone", ipa: "/ˈɛv.ri.wʌn/", pos: "代词", cn: "每个人；大家", memory: "① every = 每一个；② one = 一个人；③ everyone = 每一个人 = 大家。", phonics: "ev 读 /ɛv/，ry 读 /ri/，one 读 /wʌn/，重音在第一音节。注意 one 读 /wʌn/ 不读 /oʊn/。", collocations: [["everyone here", "在座的各位"], ["thank you everyone", "谢谢大家"]], examples: [["Is everyone ready?", "大家都准备好了吗？"], ["Thank you, everyone.", "谢谢大家。"]] },
    ],
    phrases: [
      { p: "Good morning", ipa: "/ɡʊd ˈmɔːr.nɪŋ/", cn: "早上好", why: "最标准的英语早间问候语，适用于正式和非正式场合。交接时用于开场，表示礼貌和专业。" },
    ],
    grammar: [
      { q: "为什么用 everyone 而不是 everybody？", a: "everyone 和 everybody 意思相同，都表示「每个人/大家」，可以互换。\n✅ Good morning, everyone.（更常见于正式场合）\n✅ Good morning, everybody.（稍口语化）\n两者在交接班场景中都可以用，everyone 略显正式。" },
    ],
    pattern: "Good morning / afternoon / evening + 称呼对象",
    patternExamples: [
      { en: "Good afternoon, team.", cn: "大家下午好。", words: [] },
      { en: "Good evening, colleagues.", cn: "大家晚上好，同事们。", words: [] },
      { en: "Good morning, shift team.", cn: "早上好，班组。", words: [{ w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }] },
    ],
    thinking: "英语问候习惯：先说问候语（Good morning），再说对象（everyone）。\n中文说「大家早上好」，把对象放前面。英语把问候放前面：Good morning, everyone.\n记住：英语先问好，再叫人。",
    pronunciation: "Good morning 的 d 几乎不发音：goo-morning /ɡʊmɔːrnɪŋ/。\neveryone 连读快：ev-ry-one /ˈɛvriwʌn/。\n节奏：Good MOR-ning ｜ EV-ry-one.",
    quiz: [
      { q: "下午交接班怎么打招呼？", a: "Good afternoon, everyone." },
      { q: "everyone 和 everybody 有什么区别？", a: "意思一样，everyone 稍正式，everybody 稍口语。交接场景两者都可以。" },
    ],
  },
  {
    id: 2,
    en: "Let's start the shift handover.",
    cn: "我们开始交接班。",
    ipa: "/lɛts stɑːrt ðə ʃɪft ˈhændˌoʊ.vər/",
    tags: ["第2句", "开场指令", "★★★★★"],
    when: "问好后立即宣布交接正式开始。这是交接流程的启动句，让所有人进入工作状态。",
    words: [
      { w: "shift", ipa: "/ʃɪft/", pos: "名词", cn: "班次；轮班", memory: "① shift = 转换/换班；② night shift = 夜班；③ day shift = 白班。\n在数据中心：shift handover = 交接班。", phonics: "sh 读 /ʃ/，i 读 /ɪ/，ft 读 /ft/。注意 sh 和 f 不要吞音。", collocations: [["shift handover", "交接班"], ["night shift", "夜班"], ["day shift", "白班"], ["shift report", "交班记录"]], examples: [["This is the night shift.", "这是夜班。"], ["The shift starts at 8 AM.", "班次早上8点开始。"]] },
      { w: "handover", ipa: "/ˈhændˌoʊ.vər/", pos: "名词", cn: "交接；移交", memory: "① hand = 手；② over = 过去；③ handover = 把手上的东西交过去 = 交接/移交。", phonics: "hand 读 /hænd/，o 读 /oʊ/，ver 读 /vər/，重音在第一音节。", collocations: [["shift handover", "交接班"], ["handover meeting", "交接会议"], ["handover checklist", "交接清单"]], examples: [["The handover is complete.", "交接完成了。"], ["Please prepare the handover report.", "请准备交接报告。"]] },
    ],
    phrases: [
      { p: "shift handover", ipa: "/ʃɪft ˈhændˌoʊ.vər/", cn: "交接班", why: "shift = 班次，handover = 交接。合在一起就是数据中心最核心的日常流程——班次交接。" },
      { p: "Let's start", ipa: "/lɛts stɑːrt/", cn: "我们开始", why: "Let's = Let us 的缩写，表示提议。Let's start = 让我们开始。交接时用这句宣布流程启动。" },
    ],
    grammar: [
      { q: "Let's 后面跟什么？", a: "Let's 后面跟动词原形（不带 to）。\n✅ Let's start.（让我们开始。）\n✅ Let's review.（让我们检查。）\n✅ Let's go.（让我们走。）\n❌ Let's to start.（错，不要加 to）\n❌ Let's starting.（错，不要用 -ing）" },
    ],
    pattern: "Let's + 动词原形 + 名词",
    patternExamples: [
      { en: "Let's begin the meeting.", cn: "我们开始会议。", words: [{ w: "begin", ipa: "/bɪˈɡɪn/", cn: "开始", phonics: "be 读 /bɪ/，gin 读 /ɡɪn/" }, { w: "meeting", ipa: "/ˈmiːtɪŋ/", cn: "会议", phonics: "meet 读 /miːt/，ing 读 /ɪŋ/" }] },
      { en: "Let's check the system status.", cn: "我们检查系统状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Let's review the report.", cn: "我们回顾报告。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
      { en: "Let's discuss the issue.", cn: "我们讨论这个问题。", words: [{ w: "discuss", ipa: "/dɪˈskʌs/", cn: "讨论", phonics: "dis 读 /dɪs/，cuss 读 /kʌs/" }, { w: "issue", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
    ],
    thinking: "英语提议句型：Let's + 动词原形。\n中文说「我们开始交接班吧」，把动作和对象混在一起。\n英语结构清晰：Let's（提议）+ start（动作）+ the shift handover（对象）。\n记住：Let's 后面永远跟动词原形。",
    pronunciation: "Let's 的 t 几乎不发音：less /lɛts/。\nshift handover 连读：shif-tandover /ʃɪfˈtændoʊvər/。\n节奏：Let's START ｜ the SHIFT ｜ HAND-over.",
    quiz: [
      { q: "「我们检查告警」用 Let's 怎么说？", a: "Let's check the alarms." },
      { q: "Let's 后面能不能加 to？", a: "不能。Let's 后面直接跟动词原形：Let's start（对），Let's to start（错）。" },
    ],
  },
  {
    id: 3,
    en: "Please mirror my laptop to the main display.",
    cn: "请把我的电脑投屏到主显示屏。",
    ipa: "/pliːz ˈmɪr.ər maɪ ˈlæp.tɒp tuː ðə meɪn dɪˈspleɪ/",
    tags: ["第3句", "设备操作", "★★★★"],
    when: "交接时需要投屏展示 BMS/DCIM 界面，这句话用于请求技术人员帮忙设置投屏。",
    words: [
      { w: "mirror", ipa: "/ˈmɪr.ər/", pos: "动词", cn: "镜像；投屏", memory: "① mirror = 镜子（名词）；② 作动词 = 像镜子一样反射 = 投屏/镜像显示。\n在 IT 场景：mirror my screen = 把我的屏幕镜像到另一个显示器。", phonics: "mir 读 /mɪr/，ror 读 /ər/，重音在第一音节。", collocations: [["mirror display", "镜像显示"], ["mirror screen", "屏幕镜像"], ["mirror mode", "镜像模式"]], examples: [["Please mirror my screen.", "请镜像我的屏幕。"], ["The display is not mirroring.", "显示没有镜像成功。"]] },
      { w: "laptop", ipa: "/ˈlæp.tɒp/", pos: "名词", cn: "笔记本电脑", memory: "① lap = 膝盖；② top = 上面；③ laptop = 放在膝盖上面的电脑 = 笔记本。", phonics: "lap 读 /læp/，top 读 /tɒp/，重音在第一音节。", collocations: [["my laptop", "我的笔记本"], ["laptop screen", "笔记本屏幕"], ["connect laptop", "连接笔记本"]], examples: [["My laptop is connected.", "我的笔记本已连接。"], ["Please bring your laptop.", "请带上你的笔记本。"]] },
      { w: "display", ipa: "/dɪˈspleɪ/", pos: "名词", cn: "显示屏；显示器", memory: "① dis = 向外；② play = 播放/展示；③ display = 向外展示 = 显示/显示器。", phonics: "dis 读 /dɪ/，play 读 /spleɪ/，重音在第二音节。", collocations: [["main display", "主显示屏"], ["display screen", "显示屏"], ["display settings", "显示设置"]], examples: [["Switch to the main display.", "切换到主显示屏。"], ["The display is blank.", "显示屏是空白的。"]] },
    ],
    phrases: [
      { p: "mirror my laptop", ipa: "/ˈmɪr.ər maɪ ˈlæp.tɒp/", cn: "投屏我的笔记本", why: "mirror 作动词表示「镜像/投屏」，my laptop 是投屏的来源设备。" },
      { p: "main display", ipa: "/meɪn dɪˈspleɪ/", cn: "主显示屏", why: "main = 主要的，display = 显示器。交接会议室通常有一块大屏作为主显示器。" },
    ],
    grammar: [
      { q: "Please 后面的动词用什么形式？", a: "Please 后面跟动词原形，表示礼貌的请求。\n✅ Please mirror my laptop.（请投屏我的笔记本。）\n✅ Please open the page.（请打开页面。）\n❌ Please mirrors.（错，不要加 s）\n❌ Please to mirror.（错，不要加 to）" },
    ],
    pattern: "Please + 动词原形 + 对象 + to + 目标位置",
    patternExamples: [
      { en: "Please connect my laptop to the projector.", cn: "请把我的笔记本连到投影仪。", words: [] },
      { en: "Please send the report to the team.", cn: "请把报告发给团队。", words: [{ w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
      { en: "Please switch the display to HDMI.", cn: "请把显示切到HDMI。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
    ],
    thinking: "英语请求句型：Please + 动词 + 来源 + to + 目标。\n中文说「把我的电脑投屏到主显示屏」，用「把」字句。\n英语用 mirror A to B 结构：mirror（动作）+ my laptop（来源A）+ to（方向）+ the main display（目标B）。\n记住：英语用 to 表示方向/目标。",
    pronunciation: "mirror 的 rr 只发一个 r 音：/ˈmɪr.ər/。\nlaptop 的 p 轻微爆破：lap-top。\n节奏：Please MIR-ror ｜ my LAP-top ｜ to the MAIN dis-PLAY.",
    quiz: [
      { q: "「请投屏我的笔记本」怎么说？", a: "Please mirror my laptop to the main display." },
      { q: "mirror 作动词是什么意思？", a: "镜像/投屏，把一台设备的屏幕内容同步显示到另一台设备上。" },
    ],
  },
  {
    id: 4,
    en: "Can everyone see the screen clearly?",
    cn: "大家都能清楚地看到屏幕吗？",
    ipa: "/kæn ˈɛv.ri.wʌn siː ðə skriːn ˈklɪr.li/",
    tags: ["第4句", "确认沟通", "★★★★"],
    when: "投屏后确认所有人都能看清内容，确保交接信息传达无遗漏。",
    words: [
      { w: "clearly", ipa: "/ˈklɪr.li/", pos: "副词", cn: "清楚地；清晰地", memory: "① clear = 清楚的（形容词）；② clear + ly = 清楚地（副词）。\nsee clearly = 看得清楚。", phonics: "clear 读 /klɪr/，ly 读 /li/，重音在第一音节。", collocations: [["see clearly", "看清楚"], ["hear clearly", "听清楚"], ["speak clearly", "说清楚"]], examples: [["Can you hear me clearly?", "你能听清我说话吗？"], ["Please speak more clearly.", "请说得更清楚一些。"]] },
      { w: "screen", ipa: "/skriːn/", pos: "名词", cn: "屏幕；荧幕", memory: "① screen = 遮挡物/屏幕；② computer screen = 电脑屏幕。\n在数据中心：BMS screen = BMS 界面/屏幕。", phonics: "scr 读 /skr/，een 读 /iːn/。注意 ee 发长音 /iː/。", collocations: [["main screen", "主屏幕"], ["touch screen", "触摸屏"], ["screen sharing", "屏幕共享"]], examples: [["Look at the screen.", "看屏幕。"], ["The screen is frozen.", "屏幕卡住了。"]] },
    ],
    phrases: [
      { p: "see the screen clearly", ipa: "/siː ðə skriːn ˈklɪr.li/", cn: "清楚地看到屏幕", why: "see = 看到，the screen = 屏幕，clearly = 清楚地。副词 clearly 放在句末修饰 see。" },
    ],
    grammar: [
      { q: "Can 问句怎么用？", a: "Can + 主语 + 动词原形，表示「能不能做某事」。\n✅ Can everyone see?（大家能看到吗？）\n✅ Can you hear me?（你能听到我吗？）\n回答：Yes, I can. / No, I can't.\n注意：Can 问句不需要 Do/Does 辅助。" },
    ],
    pattern: "Can + 主语 + 动词原形 + 副词？",
    patternExamples: [
      { en: "Can you hear me clearly?", cn: "你能听清我说话吗？", words: [{ w: "clearly", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
      { en: "Can everyone read this?", cn: "大家能看清这个吗？", words: [{ w: "everyone", ipa: "/ˈɛvriwʌn/", cn: "大家", phonics: "every 读 /ɛvri/，one 读 /wʌn/" }] },
      { en: "Can you see the alarm details?", cn: "你能看到告警详情吗？", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "英语能力确认：Can + 人 + 动作 + 程度？\n中文说「大家能看清楚吗」，把「清楚」放在「看到」前面。\n英语把副词放后面：see（动作）+ the screen（对象）+ clearly（程度）。\n记住：英语副词通常在动词后面。",
    pronunciation: "Can 弱读为 /kən/，不强调时几乎听不到。\nclearly 的 r 要卷舌：/ˈklɪr.li/。\n节奏：Can EV-ry-one ｜ SEE the SCREEN ｜ CLEAR-ly?",
    quiz: [
      { q: "「大家能听到我吗」怎么说？", a: "Can everyone hear me?" },
      { q: "clearly 是什么词性？", a: "副词（adverb），由形容词 clear + 后缀 -ly 构成，表示「清楚地」。" },
    ],
  },
  {
    id: 5,
    en: "Please switch to the BMS dashboard.",
    cn: "请切换到BMS监控页面。",
    ipa: "/pliːz swɪtʃ tuː ðə ˌbiː.ɛmˈɛs ˈdæʃ.bɔːrd/",
    tags: ["第5句", "页面导航", "★★★★★"],
    when: "投屏确认后，指示切换到 BMS（楼宇管理系统）监控界面，这是交接的核心系统。",
    words: [
      { w: "switch", ipa: "/swɪtʃ/", pos: "动词", cn: "切换；转换", memory: "① switch = 开关（名词）/ 切换（动词）；② switch to = 切换到。\n在 IT 场景：switch to the dashboard = 切换到仪表盘页面。", phonics: "sw 读 /sw/，i 读 /ɪ/，tch 读 /tʃ/。注意 tch 发 /tʃ/ 音。", collocations: [["switch to", "切换到"], ["switch between", "在…之间切换"], ["switch off", "关闭"]], examples: [["Switch to the alarm page.", "切换到告警页面。"], ["Please switch between the two screens.", "请在两个屏幕间切换。"]] },
      { w: "dashboard", ipa: "/ˈdæʃ.bɔːrd/", pos: "名词", cn: "仪表盘；控制面板", memory: "① dash = 猛冲/仪表板；② board = 板；③ dashboard = 汽车仪表板 → 引申为数据控制面板。\nBMS dashboard = BMS 系统的总览页面。", phonics: "dash 读 /dæʃ/，board 读 /bɔːrd/，重音在第一音节。", collocations: [["BMS dashboard", "BMS仪表盘"], ["main dashboard", "主仪表盘"], ["alarm dashboard", "告警仪表盘"]], examples: [["Open the BMS dashboard.", "打开BMS仪表盘。"], ["The dashboard shows 10 alarms.", "仪表盘显示10条告警。"]] },
    ],
    phrases: [
      { p: "switch to", ipa: "/swɪtʃ tuː/", cn: "切换到", why: "switch = 切换，to = 到（方向）。switch to + 目标 = 切换到某个页面/系统/视图。" },
      { p: "BMS dashboard", ipa: "/ˌbiː.ɛmˈɛs ˈdæʃ.bɔːrd/", cn: "BMS监控页面", why: "BMS 逐字母读 B-M-S，dashboard 是监控系统的总览页面，展示关键指标和告警。" },
    ],
    grammar: [
      { q: "switch 和 change 有什么区别？", a: "switch 强调「快速切换」（A→B），change 强调「改变」（A 变成 B）。\n✅ Switch to the BMS page.（切换到BMS页面——换一个页面看）\n✅ Change the settings.（改变设置——修改内容）\n在交接场景中，切换页面用 switch，修改配置用 change。" },
    ],
    pattern: "Please switch to + 目标系统/页面",
    patternExamples: [
      { en: "Please switch to the DCIM page.", cn: "请切换到DCIM页面。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "Please switch to the alarm list.", cn: "请切换到告警列表。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Please switch to the power overview.", cn: "请切换到供电总览。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }] },
      { en: "Please switch to the network map.", cn: "请切换到网络拓扑图。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "network", ipa: "/ˈnɛtwɜːrk/", cn: "网络", phonics: "net 读 /nɛt/，work 读 /wɜːrk/" }] },
    ],
    thinking: "英语切换指令：switch to + 目标。\n中文说「切换到BMS监控页面」，结构一样。\n英语特点：switch 表示「从一个切到另一个」，to 指明目标方向。\n记住：switch to 是交接中最常用的页面导航指令。",
    pronunciation: "switch 的 w 要发音：/swɪtʃ/，不要读成 /sɪtʃ/。\nBMS 逐字母读：B-M-S /biː.ɛm.ɛs/。\n节奏：Please SWITCH ｜ to the BMS ｜ DASH-board.",
    quiz: [
      { q: "「请切换到告警列表」怎么说？", a: "Please switch to the alarm list." },
      { q: "switch 和 change 在交接场景中怎么区分？", a: "switch = 切换页面/视图（换到另一个看），change = 修改设置/配置（改变内容）。" },
    ],
  },
  {
    id: 6,
    en: "Please switch to the DCIM dashboard.",
    cn: "请切换到DCIM监控页面。",
    ipa: "/pliːz swɪtʃ tuː ðə ˌdiː.siː.aɪˈɛm ˈdæʃ.bɔːrd/",
    tags: ["第6句", "页面导航", "★★★★★"],
    when: "查看完 BMS 后，切换到 DCIM（数据中心基础设施管理）系统，继续交接基础设施状态。",
    words: [
      { w: "DCIM", ipa: "/ˌdiː.siː.aɪˈɛm/", pos: "缩写", cn: "数据中心基础设施管理 (Data Center Infrastructure Management)", memory: "① D = Data（数据）；② C = Center（中心）；③ I = Infrastructure（基础设施）；④ M = Management（管理）。\nDCIM 是数据中心运维的核心管理系统。", phonics: "逐字母读 D-C-I-M。注意 I 读 /aɪ/，M 读 /ɛm/。", collocations: [["DCIM dashboard", "DCIM仪表盘"], ["DCIM alarm", "DCIM告警"], ["DCIM report", "DCIM报告"]], examples: [["Check the DCIM for temperature.", "查看DCIM的温度数据。"], ["The DCIM shows normal status.", "DCIM显示状态正常。"]] },
    ],
    phrases: [
      { p: "DCIM dashboard", ipa: "/ˌdiː.siː.aɪˈɛm ˈdæʃ.bɔːrd/", cn: "DCIM监控页面", why: "DCIM 逐字母读，dashboard 是总览页面。DCIM 管理供电、制冷、空间等基础设施。" },
    ],
    grammar: [
      { q: "这句和第5句有什么区别？", a: "结构完全相同：Please switch to + 系统名 + dashboard。\n唯一区别是系统名：BMS（楼宇管理）vs DCIM（基础设施管理）。\n交接时两个系统都要查看，先 BMS 再 DCIM 是常见顺序。" },
    ],
    pattern: "Please switch to + 系统缩写 + dashboard",
    patternExamples: [
      { en: "Please switch to the EPMS dashboard.", cn: "请切换到EPMS仪表盘。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "dashboard", ipa: "/ˈdæʃbɔːrd/", cn: "仪表盘", phonics: "dash 读 /dæʃ/，board 读 /bɔːrd/" }] },
      { en: "Please switch to the NMS dashboard.", cn: "请切换到NMS仪表盘。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "dashboard", ipa: "/ˈdæʃbɔːrd/", cn: "仪表盘", phonics: "dash 读 /dæʃ/，board 读 /bɔːrd/" }] },
      { en: "Please switch to the CCTV system.", cn: "请切换到CCTV系统。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "cctv", ipa: "/ˌsiːˌsiːˈtiːˈviː/", cn: "监控", phonics: "C-C-T-V 逐字母读" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
    ],
    thinking: "这句和第5句是同一个句型，只是替换了系统名。\n掌握 Please switch to X dashboard 这个模板，你可以切换到任何系统：\nBMS / DCIM / EPMS / NMS / CCTV 等。\n交接时按系统重要性依次切换。",
    pronunciation: "DCIM 逐字母读：D-C-I-M /diː.siː.aɪ.ɛm/。\n节奏同第5句：Please SWITCH ｜ to the DCIM ｜ DASH-board.",
    quiz: [
      { q: "DCIM 的全称是什么？", a: "Data Center Infrastructure Management（数据中心基础设施管理）。" },
      { q: "交接时先看BMS还是先看DCIM？", a: "通常先看 BMS（告警优先），再看 DCIM（基础设施详情）。" },
    ],
  },
  {
    id: 7,
    en: "Please scroll up.",
    cn: "请向上翻。",
    ipa: "/pliːz skroʊl ʌp/",
    tags: ["第7句", "屏幕操作", "★★★★"],
    when: "查看告警列表时需要向上滚动查看更早的告警记录。",
    words: [
      { w: "scroll", ipa: "/skroʊl/", pos: "动词", cn: "滚动；翻页", memory: "① scroll = 卷轴（名词）；② 作动词 = 像展开卷轴一样滚动页面。\nscroll up = 向上翻，scroll down = 向下翻。", phonics: "scr 读 /skr/，oll 读 /oʊl/。注意 scr 三个辅音连读。", collocations: [["scroll up", "向上翻"], ["scroll down", "向下翻"], ["scroll through", "翻阅"]], examples: [["Scroll up to see earlier alarms.", "向上翻看更早的告警。"], ["Please scroll through the list.", "请翻阅列表。"]] },
    ],
    phrases: [
      { p: "scroll up", ipa: "/skroʊl ʌp/", cn: "向上翻页", why: "scroll = 滚动，up = 向上。在屏幕上向上滚动，查看列表上方（更早）的内容。" },
    ],
    grammar: [
      { q: "scroll up 和 scroll down 的方向？", a: "scroll up = 向上翻（看更早/上面的内容），scroll down = 向下翻（看更多/下面的内容）。\n✅ Scroll up to see the first alarm.（向上翻看第一条告警。）\n✅ Scroll down to see more details.（向下翻看更多详情。）\n记忆：up = 往上看（过去），down = 往下看（更多）。" },
    ],
    pattern: "Please scroll + 方向",
    patternExamples: [
      { en: "Please scroll down.", cn: "请向下翻。", words: [{ w: "scroll", ipa: "/skroʊl/", cn: "滚动", phonics: "scr 读 /skr/，oll 读 /oʊl/" }] },
      { en: "Please scroll up a little.", cn: "请往上翻一点。", words: [{ w: "scroll", ipa: "/skroʊl/", cn: "滚动", phonics: "scr 读 /skr/，oll 读 /oʊl/" }] },
      { en: "Please scroll to the top.", cn: "请翻到最上面。", words: [{ w: "scroll", ipa: "/skroʊl/", cn: "滚动", phonics: "scr 读 /skr/，oll 读 /oʊl/" }] },
      { en: "Please scroll to the bottom.", cn: "请翻到最下面。", words: [{ w: "scroll", ipa: "/skroʊl/", cn: "滚动", phonics: "scr 读 /skr/，oll 读 /oʊl/" }] },
    ],
    thinking: "英语滚动指令：scroll + 方向副词。\n中文说「向上翻」，英语说 scroll up，结构完全对应。\nscroll 来自「卷轴」的概念——像展开古卷轴一样滚动页面。\n记住：scroll up/down 是查看列表时最高频的操作指令。",
    pronunciation: "scroll 的 scr 三辅音连读：/skroʊl/。\nup 短促有力：/ʌp/。\n节奏：Please SCROLL ｜ UP.",
    quiz: [
      { q: "「请向下翻」怎么说？", a: "Please scroll down." },
      { q: "scroll up 看到的是什么内容？", a: "列表上方/更早的内容（比如更早的告警记录）。" },
    ],
  },
  {
    id: 8,
    en: "Please scroll down.",
    cn: "请向下翻。",
    ipa: "/pliːz skroʊl daʊn/",
    tags: ["第8句", "屏幕操作", "★★★★"],
    when: "查看告警列表中需要向下滚动查看后续告警或更多详情。",
    words: [
      { w: "down", ipa: "/daʊn/", pos: "副词", cn: "向下；往下", memory: "① down = 向下（与 up 相对）；② scroll down = 向下翻。\n反义词对比：up ↔ down。", phonics: "d 读 /d/，ow 读 /aʊ/。双元音 /aʊ/ 从 /a/ 滑向 /ʊ/。", collocations: [["scroll down", "向下翻"], ["go down", "往下走"], ["shut down", "关闭"]], examples: [["Scroll down for more details.", "向下翻查看更多详情。"], ["The system is going down.", "系统正在关闭。"]] },
    ],
    phrases: [
      { p: "scroll down", ipa: "/skroʊl daʊn/", cn: "向下翻页", why: "与 scroll up 相对，向下滚动查看列表下方（更多/更新）的内容。" },
    ],
    grammar: [
      { q: "up 和 down 在滚动场景中的区别？", a: "scroll up = 向上翻 = 查看列表上方内容（时间更早的记录）。\nscroll down = 向下翻 = 查看列表下方内容（时间更晚的记录）。\n记忆技巧：想象一个时间轴，上面是过去（up），下面是未来（down）。" },
    ],
    pattern: "Please scroll + 方向 + 补充说明",
    patternExamples: [
      { en: "Please scroll down a bit.", cn: "请往下翻一点。", words: [{ w: "scroll", ipa: "/skroʊl/", cn: "滚动", phonics: "scr 读 /skr/，oll 读 /oʊl/" }] },
      { en: "Please scroll down to the next section.", cn: "请翻到下一部分。", words: [{ w: "scroll", ipa: "/skroʊl/", cn: "滚动", phonics: "scr 读 /skr/，oll 读 /oʊl/" }] },
      { en: "Please scroll down to see the chart.", cn: "请向下翻查看图表。", words: [{ w: "scroll", ipa: "/skroʊl/", cn: "滚动", phonics: "scr 读 /skr/，oll 读 /oʊl/" }] },
    ],
    thinking: "这句和第7句（scroll up）是一对反义词指令。\n交接中经常需要上下翻阅列表，掌握 scroll up / scroll down 就能应对所有翻页场景。\n英语方向词直接放在动词后面：scroll UP / scroll DOWN。",
    pronunciation: "down 的双元音要饱满：/daʊn/。\n节奏：Please SCROLL ｜ DOWN.",
    quiz: [
      { q: "「请往下翻一点」怎么说？", a: "Please scroll down a bit." },
      { q: "scroll up 和 scroll down 哪个看更早的内容？", a: "scroll up 看更早/上面的内容，scroll down 看更多/下面的内容。" },
    ],
  },
  {
    id: 9,
    en: "Please zoom in.",
    cn: "请放大一点。",
    ipa: "/pliːz zuːm ɪn/",
    tags: ["第9句", "屏幕操作", "★★★★"],
    when: "当屏幕上的文字或图表太小看不清时，请求放大显示以便所有人看清细节。",
    words: [
      { w: "zoom", ipa: "/zuːm/", pos: "动词", cn: "缩放；放大/缩小", memory: "① zoom = 急速移动（原义）；② 在屏幕上 = 缩放视图。\nzoom in = 放大，zoom out = 缩小。", phonics: "z 读 /z/，oom 读 /uːm/。注意 z 是浊辅音，声带要振动。", collocations: [["zoom in", "放大"], ["zoom out", "缩小"], ["zoom level", "缩放级别"]], examples: [["Zoom in on the alarm details.", "放大告警详情。"], ["The zoom level is too small.", "缩放级别太小了。"]] },
    ],
    phrases: [
      { p: "zoom in", ipa: "/zuːm ɪn/", cn: "放大", why: "zoom = 缩放，in = 向内（靠近）。zoom in = 向内缩放 = 放大视图，让细节更清晰。" },
    ],
    grammar: [
      { q: "zoom in 和 zoom out 的方向？", a: "zoom in = 放大（靠近看细节），in 表示「向内/靠近」。\nzoom out = 缩小（看全局），out 表示「向外/远离」。\n✅ Zoom in to see the details.（放大看细节。）\n✅ Zoom out to see the full picture.（缩小看全貌。）" },
    ],
    pattern: "Please zoom + 方向",
    patternExamples: [
      { en: "Please zoom out.", cn: "请缩小一点。", words: [] },
      { en: "Please zoom in on this part.", cn: "请放大这部分。", words: [] },
      { en: "Please zoom in a little more.", cn: "请再放大一点。", words: [] },
    ],
    thinking: "英语缩放指令：zoom + 方向副词。\nin = 向内 = 放大（像走进去看细节）。\nout = 向外 = 缩小（像退出来看全貌）。\n记忆：in 靠近 = 放大，out 远离 = 缩小。",
    pronunciation: "zoom 的 z 要振动声带：/zuːm/。\nin 短促：/ɪn/。\n节奏：Please ZOOM ｜ IN.",
    quiz: [
      { q: "「请缩小一点」怎么说？", a: "Please zoom out." },
      { q: "zoom in 中的 in 表示什么方向？", a: "in = 向内/靠近，zoom in = 靠近看 = 放大。" },
    ],
  },
  {
    id: 10,
    en: "Please zoom out.",
    cn: "请缩小一点。",
    ipa: "/pliːz zuːm aʊt/",
    tags: ["第10句", "屏幕操作", "★★★★"],
    when: "当视图放得太大需要退回全局视图时，请求缩小显示以看到完整画面。",
    words: [
      { w: "out", ipa: "/aʊt/", pos: "副词", cn: "向外；出去", memory: "① out = 向外（与 in 相对）；② zoom out = 缩小视图。\n反义词对比：in ↔ out。", phonics: "ou 读 /aʊ/，t 读 /t/。双元音 /aʊ/ 饱满。", collocations: [["zoom out", "缩小"], ["go out", "出去"], ["log out", "退出登录"]], examples: [["Zoom out to see the full list.", "缩小看完整列表。"], ["Please log out when done.", "完成后请退出登录。"]] },
    ],
    phrases: [
      { p: "zoom out", ipa: "/zuːm aʊt/", cn: "缩小", why: "与 zoom in 相对。out = 向外/远离，zoom out = 远离看全貌 = 缩小视图。" },
    ],
    grammar: [
      { q: "zoom in 和 zoom out 能加 on 吗？", a: "zoom in 可以加 on 指定放大的目标区域。\n✅ Zoom in on the alarm.（放大看这条告警。）\n✅ Zoom in on this chart.（放大看这个图表。）\nzoom out 一般不加 on，因为缩小是看全局，不需要指定目标。" },
    ],
    pattern: "Please zoom out + 补充说明",
    patternExamples: [
      { en: "Please zoom out to see the full dashboard.", cn: "请缩小看完整仪表盘。", words: [{ w: "dashboard", ipa: "/ˈdæʃbɔːrd/", cn: "仪表盘", phonics: "dash 读 /dæʃ/，board 读 /bɔːrd/" }] },
      { en: "Please zoom out a bit.", cn: "请缩小一点。", words: [] },
      { en: "Please zoom out to show everything.", cn: "请缩小展示所有内容。", words: [] },
    ],
    thinking: "这句和第9句（zoom in）是一对反义词指令。\n交接中根据内容密度调整缩放：细节多用 zoom in，全局多用 zoom out。\nin/out 这对方向副词在很多短语中都表示「进入/退出」：log in/out, plug in/out。",
    pronunciation: "out 的双元音要饱满：/aʊt/。\n节奏：Please ZOOM ｜ OUT.",
    quiz: [
      { q: "「请放大看这条告警」怎么说？", a: "Please zoom in on this alarm." },
      { q: "zoom out 一般加 on 吗？", a: "一般不加。zoom out 是看全局，不需要指定目标；zoom in on 才需要指定放大区域。" },
    ],
  },
  {
    id: 11,
    en: "Please open the active alarm page.",
    cn: "请打开当前告警页面。",
    ipa: "/pliːz ˈoʊ.pən ðə ˈæk.tɪv əˈlɑːm peɪdʒ/",
    tags: ["第11句", "页面操作", "★★★★★"],
    when: "交接正式开始后，第一个要打开的页面——活动告警列表，用于逐条审查当前未恢复的告警。",
    words: [
      { w: "open", ipa: "/ˈoʊ.pən/", pos: "动词", cn: "打开；开启", memory: "① open = 打开（动词）/ 开着的（形容词）；② open the page = 打开页面。\n反义词：close = 关闭。", phonics: "o 读 /oʊ/，pen 读 /pən/，重音在第一音节。", collocations: [["open the page", "打开页面"], ["open the report", "打开报告"], ["open the ticket", "打开工单"]], examples: [["Please open the alarm list.", "请打开告警列表。"], ["The ticket is still open.", "工单还没关闭。"]] },
      { w: "active", ipa: "/ˈæk.tɪv/", pos: "形容词", cn: "活动的；正在运行的", memory: "① act = 行动；② active = 正在行动的 → 告警还没消失，还在响。", phonics: "act 读 /ækt/，ive 读 /ɪv/，重音在第一音节。", collocations: [["active alarm", "活动告警"], ["active issue", "活动问题"], ["active ticket", "活动工单"]], examples: [["There are 5 active alarms.", "有5条活动告警。"], ["Is the alarm still active?", "这条告警还是活动状态吗？"]] },
    ],
    phrases: [
      { p: "active alarm page", ipa: "/ˈæk.tɪv əˈlɑːm peɪdʒ/", cn: "活动告警页面", why: "active = 活动的，alarm = 告警，page = 页面。这是 BMS 中最重要的页面，展示所有未恢复的告警。" },
    ],
    grammar: [
      { q: "open 和 switch to 的区别？", a: "open = 打开一个新页面（可能之前没打开过）。\nswitch to = 切换到一个已打开的页面/标签。\n✅ Open the alarm page.（打开告警页面——可能还没打开）\n✅ Switch to the BMS dashboard.（切到BMS——已经打开了，切换过去看）" },
    ],
    pattern: "Please open + 页面/功能名称",
    patternExamples: [
      { en: "Please open the alarm history.", cn: "请打开告警历史。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Please open the equipment list.", cn: "请打开设备列表。", words: [{ w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }] },
      { en: "Please open the maintenance log.", cn: "请打开维护日志。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "Please open the network topology.", cn: "请打开网络拓扑图。", words: [{ w: "network", ipa: "/ˈnɛtwɜːrk/", cn: "网络", phonics: "net 读 /nɛt/，work 读 /wɜːrk/" }] },
    ],
    thinking: "英语打开指令：open + 目标页面。\n中文说「打开当前告警页面」，active alarm 修饰 page。\n英语修饰顺序：形容词（active）+ 名词修饰名词（alarm）+ 中心名词（page）。\n记忆：active alarm page = 活动告警的页面。",
    pronunciation: "open 的 o 发双元音 /oʊ/。\nactive alarm 连读：ac-tivalarm /æk.tɪ.və.lɑːm/。\n节奏：Please O-pen ｜ the AC-tive ｜ ALARM PAGE.",
    quiz: [
      { q: "「请打开告警历史」怎么说？", a: "Please open the alarm history." },
      { q: "open 和 switch to 什么时候用哪个？", a: "open 用于打开一个新页面，switch to 用于切换到已打开的页面。" },
    ],
  },
  {
    id: 12,
    en: "Please open yesterday's shift report.",
    cn: "请打开昨天的交班记录。",
    ipa: "/pliːz ˈoʊ.pən ˈjɛs.tər.deɪz ʃɪft ˈrɪ.pɔːrt/",
    tags: ["第12句", "文件操作", "★★★★"],
    when: "交接时需要回顾上一班的交接记录，了解遗留问题和待办事项。",
    words: [
      { w: "yesterday", ipa: "/ˈjɛs.tər.deɪ/", pos: "名词/副词", cn: "昨天", memory: "① yester = 昨（古英语）；② day = 天；③ yesterday = 昨天。\n相关：today = 今天，tomorrow = 明天。", phonics: "yes 读 /jɛs/，ter 读 /tər/，day 读 /deɪ/，重音在第一音节。", collocations: [["yesterday's report", "昨天的报告"], ["yesterday morning", "昨天早上"], ["yesterday's shift", "昨天的班次"]], examples: [["Check yesterday's log.", "检查昨天的日志。"], ["Yesterday's handover noted 3 issues.", "昨天的交接记录了3个问题。"]] },
      { w: "report", ipa: "/rɪˈpɔːrt/", pos: "名词", cn: "报告；记录", memory: "① re = 再次；② port = 携带/报告；③ report = 再次汇报 = 报告。\nshift report = 交班记录/交班报告。", phonics: "re 读 /rɪ/，port 读 /pɔːrt/，重音在第二音节。", collocations: [["shift report", "交班记录"], ["incident report", "事件报告"], ["daily report", "日报"]], examples: [["Read the shift report.", "阅读交班记录。"], ["Write the incident report.", "撰写事件报告。"]] },
    ],
    phrases: [
      { p: "yesterday's shift report", ipa: "/ˈjɛs.tər.deɪz ʃɪft ˈrɪ.pɔːrt/", cn: "昨天的交班记录", why: "yesterday's = 昨天的（所有格），shift report = 交班记录。交接时回顾上一班的记录是标准流程。" },
    ],
    grammar: [
      { q: "yesterday's 的 's 是什么？", a: "'s 是名词所有格，表示「……的」。\n✅ yesterday's report = 昨天的报告\n✅ today's alarm = 今天的告警\n✅ the shift's summary = 这个班次的汇总\n注意：时间名词也可以加 's 表示所属关系。" },
    ],
    pattern: "Please open + 时间's + 文档名称",
    patternExamples: [
      { en: "Please open today's shift report.", cn: "请打开今天的交班记录。", words: [{ w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }, { w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
      { en: "Please open last week's summary.", cn: "请打开上周的汇总。", words: [] },
      { en: "Please open this month's incident log.", cn: "请打开本月的事件日志。", words: [] },
    ],
    thinking: "英语所有格结构：时间名词 + 's + 文档。\n中文说「昨天的交班记录」，用「的」连接。\n英语用 's 表示「的」：yesterday's shift report。\n记住：时间 + 's + 名词 = 某时间的某物。",
    pronunciation: "yesterday's 的 s 读 /z/：/ˈjɛs.tər.deɪz/。\nshift report 的 t 和 r 分开读。\n节奏：Please O-pen ｜ YES-ter-day's ｜ SHIFT RE-port.",
    quiz: [
      { q: "「请打开今天的交班记录」怎么说？", a: "Please open today's shift report." },
      { q: "yesterday's 中的 's 表示什么？", a: "所有格，表示「昨天的」，相当于中文的「的」。" },
    ],
  },
  {
    id: 13,
    en: "Please open today's shift report.",
    cn: "请打开今天的交班记录。",
    ipa: "/pliːz ˈoʊ.pən təˈdeɪz ʃɪft ˈrɪ.pɔːrt/",
    tags: ["第13句", "文件操作", "★★★★"],
    when: "查看完昨天的记录后，打开今天的交班记录，准备填写本次交接内容。",
    words: [
      { w: "today", ipa: "/təˈdeɪ/", pos: "名词/副词", cn: "今天", memory: "① to = 这（古英语）；② day = 天；③ today = 今天。\n三兄弟：yesterday（昨天）→ today（今天）→ tomorrow（明天）。", phonics: "to 读 /tə/，day 读 /deɪ/，重音在第二音节。", collocations: [["today's report", "今天的报告"], ["today's alarm", "今天的告警"], ["today's tasks", "今天的任务"]], examples: [["Review today's events.", "回顾今天的事件。"], ["Today's shift has 3 new alarms.", "今天的班次有3条新告警。"]] },
    ],
    phrases: [
      { p: "today's shift report", ipa: "/təˈdeɪz ʃɪft ˈrɪ.pɔːrt/", cn: "今天的交班记录", why: "与 yesterday's shift report 结构相同，只是时间从「昨天」换成「今天」。交接时需要同时查看两个记录。" },
    ],
    grammar: [
      { q: "today's 和 today 的区别？", a: "today 是名词/副词（今天），today's 是所有格（今天的）。\n✅ Today is Monday.（名词：今天是周一。）\n✅ Today's report is ready.（所有格：今天的报告准备好了。）\n✅ I'll check it today.（副词：我今天检查。）" },
    ],
    pattern: "Please open + 时间's + 文档名称",
    patternExamples: [
      { en: "Please open yesterday's log.", cn: "请打开昨天的日志。", words: [] },
      { en: "Please open this week's report.", cn: "请打开本周的报告。", words: [{ w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
      { en: "Please open last night's alarm log.", cn: "请打开昨晚的告警日志。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "这句和第12句是配对句：yesterday's → today's。\n交接流程：先看昨天的记录（了解遗留问题）→ 再开今天的记录（准备填写新内容）。\n掌握 today's / yesterday's / tomorrow's 三个时间所有格。",
    pronunciation: "today's 的 s 读 /z/：/təˈdeɪz/。\n节奏：Please O-pen ｜ to-DAY'S ｜ SHIFT RE-port.",
    quiz: [
      { q: "「请打开本周的报告」怎么说？", a: "Please open this week's report." },
      { q: "today 和 today's 有什么区别？", a: "today = 今天（名词/副词），today's = 今天的（所有格，后面跟名词）。" },
    ],
  },
  {
    id: 14,
    en: "Let's review today's operational status.",
    cn: "我们来看一下今天的运行状态。",
    ipa: "/lɛts rɪˈvjuː təˈdeɪz ˌɒp.əˈreɪ.ʃən.əl ˈstæt.əs/",
    tags: ["第14句", "流程引导", "★★★★★"],
    when: "打开交班记录后，宣布开始逐项回顾今天的运行状态。这是交接正式内容的总启动句。",
    words: [
      { w: "review", ipa: "/rɪˈvjuː/", pos: "动词", cn: "回顾；检查；审查", memory: "① re = 再次；② view = 看；③ review = 再看一遍 = 回顾/审查。\n交接中的 review = 逐项检查确认。", phonics: "re 读 /rɪ/，view 读 /vjuː/，重音在第二音节。", collocations: [["review the status", "检查状态"], ["review the alarms", "审查告警"], ["review the report", "回顾报告"]], examples: [["Let's review the alarms.", "我们来审查告警。"], ["Please review this ticket.", "请检查这个工单。"]] },
      { w: "operational", ipa: "/ˌɒp.əˈreɪ.ʃən.əl/", pos: "形容词", cn: "运行的；运营的", memory: "operate = 运行；operational = 与运行有关的。\noperational status = 运行状态，是交接班中更自然、正式的搭配。", phonics: "op-er-A-tion-al，重音在 A。", collocations: [["operational status", "运行状态"], ["operational issue", "运行问题"], ["fully operational", "全面正常运行"]], examples: [["All systems are fully operational.", "所有系统均正常运行。"], ["Please confirm the operational status.", "请确认运行状态。"]] },
      { w: "status", ipa: "/ˈstæt.əs/", pos: "名词", cn: "状态；状况", memory: "status 表示某一时刻的状态。\noperational status = 运行状态。", phonics: "stat 读 /stæt/，us 读 /əs/，重音在第一音节。", collocations: [["system status", "系统状态"], ["alarm status", "告警状态"], ["status update", "状态更新"]], examples: [["What's the system status?", "系统状态怎么样？"], ["The alarm is still active.", "告警仍处于活动状态。"]] },
    ],
    phrases: [
      { p: "operational status", ipa: "/ˌɒp.əˈreɪ.ʃən.əl ˈstæt.əs/", cn: "运行状态", why: "operational 是形容词，直接修饰 status；这是描述系统总体运行情况时更自然的搭配。" },
      { p: "Let's review", ipa: "/lɛts rɪˈvjuː/", cn: "我们来检查/回顾", why: "Let's = 让我们，review = 回顾检查。交接中用 Let's review 宣布开始逐项审查。" },
    ],
    grammar: [
      { q: "review 和 check 有什么区别？", a: "review = 系统性回顾/审查（全面、仔细地看一遍）。\ncheck = 快速检查/核实（确认某个具体点）。\n✅ Let's review the operational status.（全面回顾运行状态。）\n✅ Please check this alarm.（快速核实这条告警。）\n交接中：大范围用 review，具体项用 check。" },
    ],
    pattern: "Let's review + 范围/主题",
    patternExamples: [
      { en: "Let's review the alarm summary.", cn: "我们回顾告警汇总。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Let's review the maintenance log.", cn: "我们检查维护日志。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "Let's review the power system status.", cn: "我们检查供电系统状态。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Let's review today's incidents.", cn: "我们回顾今天的事件。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
    ],
    thinking: "英语回顾指令：Let's review + 审查范围。\n中文说「看一下今天的运行状态」，用「看一下」比较随意。\n英语用 review 表示正式的「系统性回顾」，比 look at 更专业。\n交接场景用 review 体现专业性和严谨性。",
    pronunciation: "review 重音在第二音节：re-VIEW /rɪˈvjuː/。\noperational 五个音节：op-er-A-tion-al /ˌɒp.əˈreɪ.ʃən.əl/。\nstatus 重音在第一音节：STA-tus /ˈstæt.əs/。\n节奏：Let's re-VIEW ｜ to-DAY'S ｜ op-er-A-tion-al STA-tus.",
    quiz: [
      { q: "「我们检查供电系统状态」怎么说？", a: "Let's review the power system status." },
      { q: "review 和 check 在交接中怎么选用？", a: "review 用于系统性全面回顾（大范围），check 用于快速核实具体项（小范围）。" },
    ],
  },
  {
    id: 15,
    en: "Let's begin with the alarm summary.",
    cn: "我们先从告警汇总开始。",
    ipa: "/lɛts bɪˈɡɪn wɪð ðə əˈlɑːm ˈsʌm.ər.i/",
    tags: ["第15句", "流程引导", "★★★★★"],
    when: "宣布交接回顾的第一个议题——告警汇总。这是交接的标准起始点，先总览再深入。",
    words: [
      { w: "begin", ipa: "/bɪˈɡɪn/", pos: "动词", cn: "开始；起始", memory: "① be = 处于；② gin = 开始（古英语）；③ begin = 开始。\n近义词：start（开始），begin 更正式。", phonics: "be 读 /bɪ/，gin 读 /ɡɪn/，重音在第二音节。", collocations: [["begin with", "从…开始"], ["begin the review", "开始回顾"], ["let's begin", "我们开始"]], examples: [["Let's begin the handover.", "我们开始交接。"], ["We'll begin with the alarms.", "我们从告警开始。"]] },
      { w: "summary", ipa: "/ˈsʌm.ər.i/", pos: "名词", cn: "汇总；摘要", memory: "① sum = 总和；② summary = 把内容加总 = 汇总/摘要。\nalarm summary = 告警汇总（总数 + 分类）。", phonics: "sum 读 /sʌm/，ma 读 /mə/，ry 读 /ri/，重音在第一音节。", collocations: [["alarm summary", "告警汇总"], ["shift summary", "交班汇总"], ["executive summary", "执行摘要"]], examples: [["Give me the alarm summary.", "给我告警汇总。"], ["The summary shows 10 active alarms.", "汇总显示10条活动告警。"]] },
    ],
    phrases: [
      { p: "begin with", ipa: "/bɪˈɡɪn wɪð/", cn: "从…开始", why: "begin = 开始，with = 用/以。begin with X = 以X作为开始 = 从X开始。交接中用于指定第一个审查议题。" },
      { p: "alarm summary", ipa: "/əˈlɑːm ˈsʌm.ər.i/", cn: "告警汇总", why: "alarm = 告警，summary = 汇总。告警汇总包括：总数、各级别数量、关键告警概要。" },
    ],
    grammar: [
      { q: "begin with 和 start with 的区别？", a: "意思几乎一样，begin 稍正式，start 稍口语。\n✅ Let's begin with the alarm summary.（稍正式）\n✅ Let's start with the alarm summary.（稍口语）\n交接场景中两者都可以，begin 显得更专业。" },
    ],
    pattern: "Let's begin with + 第一项议题",
    patternExamples: [
      { en: "Let's begin with the power status.", cn: "我们从供电状态开始。", words: [{ w: "begin", ipa: "/bɪˈɡɪn/", cn: "开始", phonics: "be 读 /bɪ/，gin 读 /ɡɪn/" }, { w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Let's begin with the critical alarms.", cn: "我们从严重告警开始。", words: [{ w: "begin", ipa: "/bɪˈɡɪn/", cn: "开始", phonics: "be 读 /bɪ/，gin 读 /ɡɪn/" }, { w: "critical", ipa: "/ˈkrɪtɪkəl/", cn: "严重", phonics: "crit 读 /krɪt/，ical 读 /ɪkəl/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Let's begin with yesterday's incidents.", cn: "我们从昨天的事件开始。", words: [{ w: "begin", ipa: "/bɪˈɡɪn/", cn: "开始", phonics: "be 读 /bɪ/，gin 读 /ɡɪn/" }] },
      { en: "Let's begin with the equipment overview.", cn: "我们从设备总览开始。", words: [{ w: "begin", ipa: "/bɪˈɡɪn/", cn: "开始", phonics: "be 读 /bɪ/，gin 读 /ɡɪn/" }, { w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }] },
    ],
    thinking: "英语起始指令：Let's begin with + 第一项。\n中文说「先从告警汇总开始」，结构一样：先（begin with）+ 内容（alarm summary）。\nbegin with 暗示后面还有其他议题，这是一个有序列表的开始。\n交接标准流程：告警汇总 → 严重告警 → 历史记录 → 工单 → 维护 → 施工。",
    pronunciation: "begin 重音在第二音节：be-GIN /bɪˈɡɪn/。\nwith 弱读为 /wɪð/ 或 /wɪθ/。\nsummary 重音在第一音节：SUM-ma-ry /ˈsʌm.ər.i/。\n节奏：Let's be-GIN ｜ with the ALARM ｜ SUM-ma-ry.",
    quiz: [
      { q: "「我们从严重告警开始」怎么说？", a: "Let's begin with the critical alarms." },
      { q: "begin with 暗示什么？", a: "暗示这是一个有序列表的第一项，后面还有其他议题要逐项审查。" },
    ],
  },
];

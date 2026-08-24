// EXPORTS: MOCK_SENTENCES_PART15C

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART15C: ISentence[] = [
  {
    id: 1231,
    en: "Please confirm the current service status.",
    cn: "请确认当前业务状态。",
    ipa: "/pliːz kənˈfɜːrm ðə ˈkʌr.ənt ˈsɜːr.vɪs ˈstæt.əs/",
    tags: ["第1231句", "客户电话会议", "★★★★★"],
    when: "电话会议进入系统状态确认环节，主持人请相关工程师确认当前客户业务运行状态。这是交接中最关键的信息点之一。",
    words: [
      { w: "confirm", ipa: "/kənˈfɜːrm/", pos: "动词", cn: "确认；核实", memory: "① con- = 加强；② firm = 坚定/确定。\nconfirm = 确认（使确定）。\n在电话会议中，confirm 表示正式核实并报告状态，比 check 更正式。", phonics: "con 读 /kən/，firm 读 /fɜːrm/，重音在第二音节。", collocations: [["confirm the status", "确认状态"], ["confirm the result", "确认结果"], ["confirm receipt", "确认收到"]], examples: [["Please confirm the alarm status.", "请确认告警状态。"], ["I confirm the system is stable.", "我确认系统稳定。"]] },
      { w: "service", ipa: "/ˈsɜːr.vɪs/", pos: "名词", cn: "业务；服务", memory: "① service = 服务/业务。\n数据中心语境中 service 指客户业务（IT 服务），不是数据中心自身运维。", phonics: "ser 读 /sɜːr/，vice 读 /vɪs/，重音在第一音节。", collocations: [["service status", "业务状态"], ["service outage", "业务中断"], ["service restoration", "业务恢复"]], examples: [["All services are running.", "所有业务运行中。"], ["One service is affected.", "一项业务受影响。"]] },
    ],
    phrases: [
      { p: "current service status", ipa: "/ˈkʌr.ənt ˈsɜːr.vɪs ˈstæt.əs/", cn: "当前业务状态", why: "current + service + status = 当前业务状态。电话会议中确认客户业务是否正常运行是最重要的汇报内容。" },
    ],
    grammar: [
      { q: "confirm 和 check 有什么区别？", a: "confirm = 确认（正式核实，通常用于电话会议/报告中）\ncheck = 检查（日常查看，不一定有正式结论）\n✅ Please confirm the service status.（请确认业务状态 → 正式汇报）\n✅ Please check the alarm panel.（请查看告警面板 → 日常检查）\n电话会议用 confirm，因为需要正式记录和汇报。" },
    ],
    pattern: "Please confirm the + 信息项",
    patternExamples: [
      { en: "Please confirm the equipment status.", cn: "请确认设备状态。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }, { w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Please confirm the maintenance schedule.", cn: "请确认维护计划。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }, { w: "schedule", ipa: "/ˈʃɛdjuːl/", cn: "安排", phonics: "sched 读 /ʃɛd/，ule 读 /juːl/" }] },
      { en: "Please confirm the incident timeline.", cn: "请确认事件时间线。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }] },
    ],
    thinking: "电话会议中，主持人需要逐项确认各系统状态。\n确认顺序：① 客户业务状态（本句）→ ② 系统运行状态（1232-1235）→ ③ 现场处理情况（1236-1240）→ ④ 后续安排（1241-1243）→ ⑤ 恢复确认（1244-1245）。\n每次确认都要有明确的结论，不能含糊其辞。",
    pronunciation: "confirm 的 ir 读 /ɜːr/，不是 /aɪ/。\ncurrent 的 u 读 /ʌ/：/ˈkʌr.ənt/。\n节奏：Please con-FIRM ｜ the CUR-rent ｜ SER-vice STA-tus.",
    quiz: [
      { q: "请确认当前告警状态，怎么说？", a: "Please confirm the current alarm status." },
      { q: "confirm 和 check 在电话会议中哪个更合适？", a: "confirm 更合适。confirm = 正式核实并报告（电话会议/书面报告），check = 日常查看（巡检/操作）。电话会议需要正式记录和结论，所以用 confirm。" },
    ],
  },
  {
    id: 1232,
    en: "All customer services are running normally.",
    cn: "所有客户业务运行正常。",
    ipa: "/ɔːl ˈkʌs.tə.mər ˈsɜːr.vɪ.sɪz ɑːr ˈrʌn.ɪŋ ˈnɔːr.mə.li/",
    tags: ["第1232句", "业务状态", "★★★★★"],
    when: "确认业务状态后，汇报结果：所有客户业务正常运行。这是最好的消息，表明当前无服务影响。",
    words: [
      { w: "customer", ipa: "/ˈkʌs.tə.mər/", pos: "名词", cn: "客户", memory: "① customer = 客户/用户。\n数据中心语境中 customer 指托管客户（colocation customer），他们在数据中心放置服务器。", phonics: "cus 读 /kʌs/，to 读 /tə/，mer 读 /mər/，重音在第一音节。", collocations: [["customer services", "客户业务"], ["customer impact", "客户影响"], ["customer notification", "客户通知"]], examples: [["No customer impact.", "无客户影响。"], ["The customer has been notified.", "已通知客户。"]] },
    ],
    phrases: [
      { p: "running normally", ipa: "/ˈrʌn.ɪŋ ˈnɔːr.mə.li/", cn: "运行正常", why: "running + normally = 运行正常。running 是现在分词，强调当前正在运行的状态。这是电话会议中最常汇报的正面结论。" },
    ],
    grammar: [
      { q: "are running normally 和 run normally 有什么区别？", a: "are running = 正在运行（现在进行时，强调此刻状态）\nrun = 运行（一般现在时，强调常态/事实）\n✅ All services are running normally.（所有业务正在正常运行 → 汇报当前状态）\n✅ Services run 24/7.（业务24小时运行 → 描述常态）\n电话会议用进行时，因为关心的是'此刻的运行状态'。" },
    ],
    pattern: "All + 对象 + are running normally",
    patternExamples: [
      { en: "All UPS systems are running normally.", cn: "所有UPS系统运行正常。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "systems", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "All cooling units are running normally.", cn: "所有冷却设备运行正常。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "All generators are running normally.", cn: "所有发电机运行正常。", words: [{ w: "generators", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "汇报业务状态时的三种结论：\n① All services running normally（全部正常 → 最佳）\n② One service affected（一项受影响 → 需说明）\n③ Multiple services impacted（多项受影响 → 紧急）\n本句是第一种，也是交接中最常见的情况。",
    pronunciation: "customer 的 to 弱读 /tə/：/ˈkʌs.tə.mər/。\nnormally 的 al 读 /ə/：/ˈnɔːr.mə.li/。\n节奏：ALL CUS-to-mer SER-vi-ces ｜ are RUN-ning NOR-mal-ly.",
    quiz: [
      { q: "所有冷却设备运行正常，怎么说？", a: "All cooling units are running normally." },
      { q: "running normally 为什么用进行时？", a: "因为电话会议汇报的是'此刻的运行状态'，不是描述常态。are running = 正在运行（现在进行时），强调当前的实时状态。" },
    ],
  },
  {
    id: 1233,
    en: "One service is experiencing intermittent issues.",
    cn: "有一项业务出现间歇性问题。",
    ipa: "/wʌn ˈsɜːr.vɪs ɪz ɪkˈspɪr.i.ən.sɪŋ ˌɪn.tərˈmɪt.ənt ˈɪʃ.uːz/",
    tags: ["第1233句", "业务异常", "★★★★★"],
    when: "如果业务不是全部正常，需要如实汇报异常情况。intermittent = 间歇性的，表示问题时有时无，不是持续性故障。",
    words: [
      { w: "intermittent", ipa: "/ˌɪn.tərˈmɪt.ənt/", pos: "形容词", cn: "间歇性的；断断续续的", memory: "① inter- = 之间；② mit = 发送（拉丁语 mittere）；③ -tent = 形容词后缀。\nintermittent = 间歇发送的 → 断断续续的。\n间歇性问题比持续性故障更难排查，因为不容易复现。", phonics: "in 读 /ɪn/，ter 读 /tər/，mit 读 /mɪt/，tent 读 /tənt/，重音在第三音节。", collocations: [["intermittent issue", "间歇性问题"], ["intermittent failure", "间歇性故障"], ["intermittent alarm", "间歇性告警"]], examples: [["The alarm is intermittent.", "告警是间歇性的。"], ["We found an intermittent power issue.", "我们发现一个间歇性电源问题。"]] },
      { w: "experiencing", ipa: "/ɪkˈspɪr.i.ən.sɪŋ/", pos: "动词（现在分词）", cn: "经历；出现", memory: "① experience = 经历/体验。\nexperiencing = 正在经历（现在进行时）。\n在技术语境中，experiencing issues = 出现问题，比 having issues 更正式。", phonics: "ex 读 /ɪk/，peri 读 /spɪr.i/，enc 读 /ən/，ing 读 /sɪŋ/，重音在第二音节。", collocations: [["experiencing issues", "出现问题"], ["experiencing delays", "出现延迟"], ["experiencing downtime", "出现停机"]], examples: [["The server is experiencing high CPU usage.", "服务器CPU使用率过高。"], ["We are experiencing a network issue.", "我们遇到网络问题。"]] },
    ],
    phrases: [
      { p: "intermittent issues", ipa: "/ˌɪn.tərˈmɪt.ənt ˈɪʃ.uːz/", cn: "间歇性问题", why: "intermittent + issues = 间歇性问题。issues 用复数，因为间歇性问题通常会反复出现多次。" },
    ],
    grammar: [
      { q: "issue 和 problem 有什么区别？", a: "issue = 问题/事项（较中性，可能正在解决中）\nproblem = 问题/难题（偏负面，强调困难）\n✅ intermittent issues（间歇性问题 → 中性描述）\n✅ a serious problem（严重问题 → 强调困难）\n电话会议中用 issue 更合适，因为语气更中性、更专业。" },
    ],
    pattern: "对象 + is experiencing + 问题类型",
    patternExamples: [
      { en: "The server is experiencing high load.", cn: "服务器负载过高。", words: [{ w: "server", ipa: "/ˈsɜːrvər/", cn: "服务器", phonics: "serv 读 /sɜːrv/，er 读 /ər/" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
      { en: "The network is experiencing packet loss.", cn: "网络出现丢包。", words: [{ w: "network", ipa: "/ˈnɛtwɜːrk/", cn: "网络", phonics: "net 读 /nɛt/，work 读 /wɜːrk/" }] },
      { en: "The UPS is experiencing battery issues.", cn: "UPS出现电池问题。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "battery", ipa: "/ˈbætəri/", cn: "电池", phonics: "bat 读 /bæt/，tery 读 /təri/" }, { w: "issues", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
    ],
    thinking: "业务异常汇报要包含三个要素：\n① 影响范围（one service / multiple services）\n② 问题性质（intermittent / continuous / degraded）\n③ 当前处理状态（investigating / isolated / resolved）\n本句包含①②，后续句子补充③。",
    pronunciation: "intermittent 重音在第三音节：/ˌɪn.tərˈmɪt.ənt/。\nexperiencing 的 x 读 /ks/：/ɪkˈspɪr.i.ən.sɪŋ/。\n节奏：ONE SER-vice ｜ is ex-PER-i-enc-ing ｜ in-ter-MIT-tent IS-sues.",
    quiz: [
      { q: "网络出现间歇性丢包，怎么说？", a: "The network is experiencing intermittent packet loss." },
      { q: "issue 和 problem 在电话会议中哪个更合适？", a: "issue 更合适。issue 语气中性专业，problem 偏负面。电话会议面向客户和管理层，用 issue 更得体。" },
    ],
  },
  {
    id: 1234,
    en: "We are working to restore full service.",
    cn: "我们正在恢复全部业务。",
    ipa: "/wiː ɑːr ˈwɜːr.kɪŋ tuː rɪˈstɔːr fʊl ˈsɜːr.vɪs/",
    tags: ["第1234句", "恢复行动", "★★★★★"],
    when: "汇报异常后，立即说明正在采取的恢复行动。restore full service = 恢复全部业务，给客户信心。",
    words: [
      { w: "restore", ipa: "/rɪˈstɔːr/", pos: "动词", cn: "恢复；还原", memory: "① re- = 再次；② store = 储存。\nrestore = 恢复到原来状态。\n数据中心中 restore 常用于：restore service（恢复业务）、restore power（恢复供电）、restore from backup（从备份恢复）。", phonics: "re 读 /rɪ/，store 读 /stɔːr/，重音在第二音节。", collocations: [["restore service", "恢复业务"], ["restore power", "恢复供电"], ["restore normal operation", "恢复正常运行"]], examples: [["Power has been restored.", "供电已恢复。"], ["We are working to restore the system.", "我们正在恢复系统。"]] },
    ],
    phrases: [
      { p: "working to restore", ipa: "/ˈwɜːr.kɪŋ tuː rɪˈstɔːr/", cn: "正在恢复", why: "working to + 动词 = 正在努力做某事。强调团队正在积极行动，给客户信心。" },
    ],
    grammar: [
      { q: "restore 和 recover 有什么区别？", a: "restore = 恢复（主动操作，人为恢复到原来状态）\nrecover = 恢复（可以是自动恢复，也可以指数据恢复）\n✅ We are working to restore service.（我们正在恢复业务 → 主动操作）\n✅ The system recovered automatically.（系统自动恢复了 → 自动过程）\n✅ Data recovery is in progress.（数据恢复进行中 → 数据恢复专用）" },
    ],
    pattern: "We are working to + 动词",
    patternExamples: [
      { en: "We are working to identify the root cause.", cn: "我们正在查找根本原因。", words: [{ w: "root", ipa: "/ruːt/", cn: "根因", phonics: "root 读 /ruːt/" }, { w: "cause", ipa: "/kɔːz/", cn: "原因", phonics: "cause 读 /kɔːz/" }] },
      { en: "We are working to isolate the issue.", cn: "我们正在隔离问题。", words: [{ w: "issue", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
      { en: "We are working to replace the failed component.", cn: "我们正在更换故障部件。", words: [{ w: "replace", ipa: "/rɪˈpleɪs/", cn: "更换", phonics: "re 读 /rɪ/，place 读 /pleɪs/" }] },
    ],
    thinking: "汇报恢复行动时要传达三个信息：\n① 正在行动（working to）\n② 目标明确（restore full service）\n③ 预计时间（下一句补充）\n让客户知道团队在积极处理，不是被动等待。",
    pronunciation: "restore 的 ore 读 /ɔːr/：/rɪˈstɔːr/。\nfull 的 u 读 /ʊ/：/fʊl/。\n节奏：We are WORK-ing ｜ to re-STORE ｜ FULL SER-vice.",
    quiz: [
      { q: "我们正在恢复供电，怎么说？", a: "We are working to restore power." },
      { q: "restore 和 recover 有什么区别？", a: "restore = 恢复（主动操作，人为恢复到原来状态）；recover = 恢复（可自动恢复，或指数据恢复）。'We are working to restore' 强调人为主动操作。" },
    ],
  },
  {
    id: 1235,
    en: "The estimated recovery time is thirty minutes.",
    cn: "预计恢复时间为三十分钟。",
    ipa: "/ði ˈɛs.tɪ.meɪ.tɪd rɪˈkʌv.ər.i taɪm ɪz ˈθɜːr.ti ˈmɪn.ɪts/",
    tags: ["第1235句", "恢复时间", "★★★★★"],
    when: "说明恢复行动后，给出预计恢复时间。这是客户最关心的问题之一，必须给出明确的时间估计。",
    words: [
      { w: "estimated", ipa: "/ˈɛs.tɪ.meɪ.tɪd/", pos: "形容词", cn: "预计的；估计的", memory: "① estimate = 估计/估算；② estimated = 预计的（过去分词作形容词）。\nestimated recovery time = 预计恢复时间，缩写为 ETR（Estimated Time of Recovery）。", phonics: "es 读 /ɛs/，ti 读 /tɪ/，mat 读 /meɪ/，ed 读 /tɪd/，重音在第一音节。", collocations: [["estimated time", "预计时间"], ["estimated recovery", "预计恢复"], ["estimated completion", "预计完成"]], examples: [["The estimated downtime is one hour.", "预计停机时间为一小时。"], ["What is the estimated recovery time?", "预计恢复时间是多久？"]] },
    ],
    phrases: [
      { p: "recovery time", ipa: "/rɪˈkʌv.ər.i taɪm/", cn: "恢复时间", why: "recovery + time = 恢复时间。recovery time 是从故障发生到完全恢复所需的总时间，区别于 repair time（维修时间，仅指修理部分）。" },
    ],
    grammar: [
      { q: "estimated recovery time 和 repair time 有什么区别？", a: "estimated recovery time (ETR) = 预计恢复时间（从故障到完全恢复的总时间）\nrepair time = 维修时间（仅指修理故障部件的时间）\n✅ ETR = 30 minutes（30分钟后业务完全恢复）\n✅ Repair time = 20 minutes（20分钟修好设备，但恢复还需10分钟验证）\n客户关心 ETR，因为他们只在乎业务什么时候恢复。" },
    ],
    pattern: "The estimated + 名词 + is + 时间",
    patternExamples: [
      { en: "The estimated arrival time is fifteen minutes.", cn: "预计到达时间为十五分钟。", words: [] },
      { en: "The estimated completion time is two hours.", cn: "预计完成时间为两小时。", words: [] },
      { en: "The estimated downtime is one hour.", cn: "预计停机时间为一小时。", words: [] },
    ],
    thinking: "给客户时间估计的原则：\n① 宁可多估不少给（保守估计）\n② 提前完成是惊喜，延迟是失信\n③ 如果无法估计，说'we will update as soon as we have an estimate'\n④ 每次更新都要修正时间估计",
    pronunciation: "estimated 的 ed 读 /tɪd/：/ˈɛs.tɪ.meɪ.tɪd/。\nthirty 的 th 读 /θ/（咬舌尖）：/ˈθɜːr.ti/。\n节奏：The ES-ti-ma-ted ｜ re-COV-er-y TIME ｜ is THIR-ty MIN-utes.",
    quiz: [
      { q: "预计到达时间为二十分钟，怎么说？", a: "The estimated arrival time is twenty minutes." },
      { q: "为什么给客户时间估计要保守？", a: "因为提前完成是惊喜，延迟是失信。保守估计可以建立信任。如果无法估计，应该说'we will update as soon as we have an estimate'。" },
    ],
  },
  {
    id: 1236,
    en: "The engineering team is on site now.",
    cn: "工程团队已经到达现场。",
    ipa: "/ði ˌɛn.dʒɪˈnɪr.ɪŋ tiːm ɪz ɒn saɪt naʊ/",
    tags: ["第1236句", "现场支持", "★★★★★"],
    when: "汇报恢复行动时，说明已有专业团队在现场处理。on site = 在现场，给客户信心。",
    words: [
      { w: "engineering", ipa: "/ˌɛn.dʒɪˈnɪr.ɪŋ/", pos: "名词/形容词", cn: "工程的；工程团队", memory: "① engineer = 工程师；② engineering = 工程的/工程团队。\nengineering team = 工程团队，通常指设施工程师（Facility Engineer），负责电气、暖通等基础设施。", phonics: "en 读 /ɛn/，gi 读 /dʒɪ/，neer 读 /nɪr/，ing 读 /ɪŋ/，重音在第三音节。", collocations: [["engineering team", "工程团队"], ["engineering support", "工程支持"], ["engineering review", "工程评审"]], examples: [["The engineering team is investigating.", "工程团队正在调查。"], ["We need engineering support.", "我们需要工程支持。"]] },
      { w: "on site", ipa: "/ɒn saɪt/", pos: "介词短语", cn: "在现场", memory: "on + site = 在现场。\nsite = 现场/场地。\non site 表示人员已到达数据中心现场，可以开始工作。", phonics: "on 读 /ɒn/，site 读 /saɪt/。", collocations: [["on site", "在现场"], ["on-site inspection", "现场检查"], ["on-site support", "现场支持"]], examples: [["The vendor is on site.", "供应商在现场。"], ["We have on-site engineers.", "我们有现场工程师。"]] },
    ],
    phrases: [
      { p: "on site now", ipa: "/ɒn saɪt naʊ/", cn: "现在在现场", why: "on site + now = 现在在现场。强调团队已经到位，可以立即开展工作。这是给客户信心的关键信息。" },
    ],
    grammar: [
      { q: "on site 和 at the site 有什么区别？", a: "on site = 在现场（更简洁、更常用，专业用语）\nat the site = 在那个场地（更口语化）\n✅ The team is on site now.（团队在现场 → 简洁专业）\n✅ The team is at the site now.（团队在那个场地 → 口语化）\n电话会议中用 on site，因为更简洁专业。" },
    ],
    pattern: "The + 团队 + is on site + 时间",
    patternExamples: [
      { en: "The vendor team is on site now.", cn: "供应商团队现在在现场。", words: [{ w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }, { w: "site", ipa: "/saɪt/", cn: "场地", phonics: "site 读 /saɪt/" }] },
      { en: "The maintenance crew is on site.", cn: "维护人员在现场。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }, { w: "site", ipa: "/saɪt/", cn: "场地", phonics: "site 读 /saɪt/" }] },
      { en: "Emergency response team is on site.", cn: "应急响应团队在现场。", words: [{ w: "emergency", ipa: "/ɪˈmɜːrdʒənsi/", cn: "紧急", phonics: "e 读 /ɪ/，mergency 读 /mɜːrdʒənsi/" }, { w: "site", ipa: "/saɪt/", cn: "场地", phonics: "site 读 /saɪt/" }] },
    ],
    thinking: "现场支持汇报要说明：\n① 谁在现场（engineering team / vendor / management）\n② 什么时候到的（now / since 2 PM / just arrived）\n③ 正在做什么（investigating / repairing / monitoring）\n让客户知道有专业人员在处理。",
    pronunciation: "engineering 重音在第三音节：/ˌɛn.dʒɪˈnɪr.ɪŋ/。\non site 连读：/ɒn saɪt/。\n节奏：The EN-gi-NEER-ing TEAM ｜ is ON SITE NOW.",
    quiz: [
      { q: "供应商工程师已经在现场了，怎么说？", a: "The vendor engineer is on site now." },
      { q: "on site 和 at the site 哪个更专业？", a: "on site 更专业、更简洁，是电话会议和书面报告中的标准用语。at the site 更口语化。" },
    ],
  },
  {
    id: 1237,
    en: "The vendor engineer has also arrived.",
    cn: "供应商工程师也已经到达现场。",
    ipa: "/ðə ˈvɛn.dər ˌɛn.dʒɪˈnɪr hæz ˈɔːl.soʊ əˈraɪvd/",
    tags: ["第1237句", "供应商到场", "★★★★★"],
    when: "补充说明供应商工程师也已到达。also = 也，表示除了内部工程团队外，供应商专家也已到场。",
    words: [
      { w: "vendor", ipa: "/ˈvɛn.dər/", pos: "名词", cn: "供应商；厂商", memory: "① vend = 出售（拉丁语 vendere）；② -or = 人。\nvendor = 供应商/厂商。\n数据中心常见供应商：UPS厂商、发电机厂商、精密空调厂商、消防系统厂商等。", phonics: "ven 读 /vɛn/，dor 读 /dər/，重音在第一音节。", collocations: [["vendor engineer", "供应商工程师"], ["vendor support", "供应商支持"], ["vendor notification", "供应商通知"]], examples: [["The vendor has been notified.", "已通知供应商。"], ["We need vendor support.", "我们需要供应商支持。"]] },
      { w: "arrived", ipa: "/əˈraɪvd/", pos: "动词（过去分词）", cn: "到达", memory: "① arrive = 到达。\nhas arrived = 已经到达（现在完成时，强调'已经到了'这个结果）。", phonics: "ar 读 /ə/，rive 读 /raɪv/，d 读 /d/。", collocations: [["has arrived", "已到达"], ["arrived on time", "准时到达"], ["arrived safely", "安全到达"]], examples: [["The spare parts have arrived.", "备件已到。"], ["The team arrived at 3 PM.", "团队下午3点到达。"]] },
    ],
    phrases: [
      { p: "has also arrived", ipa: "/hæz ˈɔːl.soʊ əˈraɪvd/", cn: "也已经到达", why: "has + also + arrived = 也已经到达。also 表示'也'，强调除了前面提到的人之外，又有人到场。" },
    ],
    grammar: [
      { q: "为什么用 has arrived 而不是 arrived？", a: "has arrived = 已经到达（现在完成时，强调'现在已经到了'这个结果）\narrived = 到达了（一般过去时，强调过去发生的动作）\n✅ The vendor has arrived.（供应商已经到了 → 强调现在的状态）\n✅ The vendor arrived at 3 PM.（供应商3点到的 → 强调过去的时间点）\n电话会议中用现在完成时，因为关心的是'现在是否已到'。" },
    ],
    pattern: "The + 人物 + has also arrived",
    patternExamples: [
      { en: "The manager has also arrived.", cn: "经理也已经到了。", words: [] },
      { en: "The spare parts have also arrived.", cn: "备件也已经到了。", words: [] },
      { en: "The safety officer has also arrived.", cn: "安全员也已经到了。", words: [{ w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }] },
    ],
    thinking: "供应商到场是好消息，因为：\n① 供应商有专业工具和备件\n② 供应商了解设备内部构造\n③ 供应商可以更快定位和解决问题\n汇报供应商到场可以增加客户信心。",
    pronunciation: "vendor 的 en 读 /ɛn/：/ˈvɛn.dər/。\nalso 的 l 读 /l/：/ˈɔːl.soʊ/。\n节奏：The VEN-dor EN-gi-NEER ｜ has AL-so ar-RIVED.",
    quiz: [
      { q: "备件也已经到了，怎么说？", a: "The spare parts have also arrived." },
      { q: "has arrived 和 arrived 在电话会议中哪个更合适？", a: "has arrived 更合适（现在完成时），因为电话会议关心的是'现在是否已到'这个结果，不是'什么时候到的'这个过去动作。" },
    ],
  },
  {
    id: 1238,
    en: "We have identified the affected system.",
    cn: "我们已经确认受影响的系统。",
    ipa: "/wiː hæv aɪˈdɛn.tɪ.faɪd ðə əˈfɛk.tɪd ˈsɪs.təm/",
    tags: ["第1238句", "故障确认", "★★★★★"],
    when: "供应商到场后，汇报故障排查进展：已经定位到受影响的系统。identify = 确认/识别，是故障排查的关键步骤。",
    words: [
      { w: "identified", ipa: "/aɪˈdɛn.tɪ.faɪd/", pos: "动词（过去分词）", cn: "确认；识别", memory: "① i- = 使；② dent = 牙齿（拉丁语 dens）→ identity = 身份；③ -fy = 使成为。\nidentify = 识别/确认（确定是哪个系统/设备出了问题）。\n故障排查步骤：detect（检测）→ identify（确认）→ isolate（隔离）→ repair（修复）。", phonics: "i 读 /aɪ/，den 读 /dɛn/，ti 读 /tɪ/，fied 读 /faɪd/，重音在第二音节。", collocations: [["identified the issue", "确认了问题"], ["identified the cause", "确认了原因"], ["identified the system", "确认了系统"]], examples: [["We identified a faulty UPS.", "我们确认了一台故障UPS。"], ["The root cause has been identified.", "根因已确认。"]] },
      { w: "affected", ipa: "/əˈfɛk.tɪd/", pos: "形容词", cn: "受影响的", memory: "① affect = 影响；② affected = 受影响的。\naffected system = 受影响的系统，指因故障而不能正常运行的设备或业务。", phonics: "af 读 /ə/，fect 读 /fɛk/，ed 读 /tɪd/。", collocations: [["affected system", "受影响的系统"], ["affected equipment", "受影响的设备"], ["affected area", "受影响的区域"]], examples: [["The affected equipment has been isolated.", "受影响的设备已隔离。"], ["No customers are affected.", "没有客户受影响。"]] },
    ],
    phrases: [
      { p: "the affected system", ipa: "/ði əˈfɛk.tɪd ˈsɪs.təm/", cn: "受影响的系统", why: "affected + system = 受影响的系统。the 表示特指，因为已经确认是哪个系统了。" },
    ],
    grammar: [
      { q: "identify 和 find 有什么区别？", a: "identify = 确认/识别（专业用语，经过分析后确定）\nfind = 发现/找到（一般用语，可能偶然发现）\n✅ We identified the affected system.（我们确认了受影响的系统 → 经过分析排查后确定）\n✅ We found a problem.（我们发现了一个问题 → 可能是偶然发现）\n电话会议中用 identify，因为表示经过专业排查后的确认结果。" },
    ],
    pattern: "We have identified the + 对象",
    patternExamples: [
      { en: "We have identified the root cause.", cn: "我们已确认根因。", words: [{ w: "root", ipa: "/ruːt/", cn: "根因", phonics: "root 读 /ruːt/" }, { w: "cause", ipa: "/kɔːz/", cn: "原因", phonics: "cause 读 /kɔːz/" }] },
      { en: "We have identified the faulty component.", cn: "我们已确认故障部件。", words: [] },
      { en: "We have identified the affected customers.", cn: "我们已确认受影响的客户。", words: [] },
    ],
    thinking: "故障排查的四个步骤：\n① detect = 检测到告警\n② identify = 确认受影响的系统（本句）\n③ isolate = 隔离故障设备\n④ repair = 修复或更换\n每一步完成后都要向客户汇报进展。",
    pronunciation: "identified 重音在第二音节：/aɪˈdɛn.tɪ.faɪd/。\naffected 的 fect 读 /fɛk/：/əˈfɛk.tɪd/。\n节奏：We have i-DEN-ti-fied ｜ the af-FECT-ed SYS-tem.",
    quiz: [
      { q: "我们已经确认了根因，怎么说？", a: "We have identified the root cause." },
      { q: "identify 和 find 在故障排查中哪个更专业？", a: "identify 更专业。identify = 经过分析后确认（故障排查的标准用语），find = 发现/找到（可能是偶然的）。电话会议中用 identify。" },
    ],
  },
  {
    id: 1239,
    en: "The affected equipment has been isolated safely.",
    cn: "受影响设备已经安全隔离。",
    ipa: "/ði əˈfɛk.tɪd ɪˈkwɪp.mənt hæz biːn ˈaɪ.sə.leɪ.tɪd ˈseɪf.li/",
    tags: ["第1239句", "设备隔离", "★★★★★"],
    when: "确认受影响系统后，汇报隔离措施。isolate = 隔离，将故障设备从系统中断开，防止故障扩散到其他设备。",
    words: [
      { w: "isolated", ipa: "/ˈaɪ.sə.leɪ.tɪd/", pos: "动词（过去分词）", cn: "隔离；断开", memory: "① isle = 岛屿（拉丁语 insula）；② isolate = 使孤立/隔离。\n设备隔离 = 将故障设备从供电/网络/管道中断开，防止故障扩散。\n常见隔离方式：电气隔离（断开断路器）、管道隔离（关闭阀门）、网络隔离（断开网线）。", phonics: "i 读 /aɪ/，so 读 /sə/，lat 读 /leɪ/，ed 读 /tɪd/，重音在第一音节。", collocations: [["isolated safely", "安全隔离"], ["isolated the equipment", "隔离了设备"], ["isolated from the grid", "从电网隔离"]], examples: [["The faulty UPS has been isolated.", "故障UPS已隔离。"], ["Please isolate the affected breaker.", "请隔离受影响的断路器。"]] },
      { w: "safely", ipa: "/ˈseɪf.li/", pos: "副词", cn: "安全地", memory: "① safe = 安全的；② safely = 安全地。\nsafely 强调隔离操作是按照安全规程执行的，没有造成额外风险。", phonics: "safe 读 /seɪf/，ly 读 /li/。", collocations: [["isolated safely", "安全隔离"], ["operated safely", "安全操作"], ["stored safely", "安全存放"]], examples: [["The equipment was safely isolated.", "设备被安全隔离。"], ["Work safely at all times.", "始终安全作业。"]] },
    ],
    phrases: [
      { p: "isolated safely", ipa: "/ˈaɪ.sə.leɪ.tɪd ˈseɪf.li/", cn: "安全隔离", why: "isolated + safely = 安全隔离。safely 强调操作符合安全规程，这对客户来说是重要的安全保证。" },
    ],
    grammar: [
      { q: "has been isolated 是什么时态？", a: "has been isolated = 已经被隔离（现在完成时被动语态）。\n现在完成时 = 强调'已经完成'这个结果。\n被动语态 = 设备被（人）隔离。\n✅ The equipment has been isolated.（设备已被隔离 → 强调结果）\n✅ We isolated the equipment.（我们隔离了设备 → 强调动作执行者）\n电话会议中用被动语态，因为客户关心的是'设备是否已隔离'，不是'谁隔离的'。" },
    ],
    pattern: "The + 设备 + has been isolated + 方式",
    patternExamples: [
      { en: "The faulty transformer has been isolated.", cn: "故障变压器已隔离。", words: [{ w: "transformer", ipa: "/trænsˈfɔːrmər/", cn: "变压器", phonics: "trans 读 /træns/，former 读 /fɔːrmər/" }] },
      { en: "The leaking pipe has been isolated safely.", cn: "漏水管道已安全隔离。", words: [{ w: "pipe", ipa: "/paɪp/", cn: "管道", phonics: "pipe 读 /paɪp/" }] },
      { en: "The affected circuit has been isolated from the main bus.", cn: "受影响的电路已从主母线隔离。", words: [{ w: "circuit", ipa: "/ˈsɜːrkɪt/", cn: "电路", phonics: "cir 读 /sɜːr/，cuit 读 /kɪt/" }] },
    ],
    thinking: "隔离操作是故障处理的关键步骤：\n① 隔离 = 防止故障扩散\n② safely = 按安全规程操作\n③ 隔离后其他设备不受影响\n汇报安全隔离可以让客户放心，故障不会扩散。",
    pronunciation: "isolated 重音在第一音节：/ˈaɪ.sə.leɪ.tɪd/。\nsafely 的 a 读长音 /eɪ/：/ˈseɪf.li/。\n节奏：The af-FECT-ed e-QUIP-ment ｜ has been I-so-la-ted SAFE-ly.",
    quiz: [
      { q: "故障变压器已安全隔离，怎么说？", a: "The faulty transformer has been isolated safely." },
      { q: "has been isolated 为什么要用被动语态？", a: "因为客户关心的是'设备是否已隔离'这个结果，不是'谁隔离的'。被动语态强调结果，主动语态强调执行者。电话会议中用被动语态更聚焦于结果。" },
    ],
  },
  {
    id: 1240,
    en: "We are verifying the repair results.",
    cn: "我们正在确认维修结果。",
    ipa: "/wiː ɑːr ˈvɛr.ɪ.faɪ.ɪŋ ðə rɪˈpeər rɪˈzʌlts/",
    tags: ["第1240句", "维修验证", "★★★★★"],
    when: "隔离和修复完成后，需要验证维修结果是否达标。verify = 验证/确认，是修复后的最后一步。",
    words: [
      { w: "verifying", ipa: "/ˈvɛr.ɪ.faɪ.ɪŋ/", pos: "动词（现在分词）", cn: "验证；确认", memory: "① ver = 真实（拉丁语 verus）；② -ify = 使成为。\nverify = 使真实 → 验证/确认（确认结果是否符合预期）。\n验证步骤：检查读数 → 测试运行 → 确认稳定。", phonics: "ver 读 /vɛr/，i 读 /ɪ/，fy 读 /faɪ/，ing 读 /ɪŋ/，重音在第一音节。", collocations: [["verify the results", "验证结果"], ["verify the reading", "确认读数"], ["verify the repair", "确认维修"]], examples: [["Please verify the voltage reading.", "请确认电压读数。"], ["We are verifying the test results.", "我们正在验证测试结果。"]] },
      { w: "repair", ipa: "/rɪˈpeər/", pos: "名词/动词", cn: "维修；修理", memory: "① re- = 再次；② pair = 配对/使完好。\nrepair = 修复/维修。\nrepair results = 维修结果（修完后的效果）。", phonics: "re 读 /rɪ/，pair 读 /peər/。", collocations: [["repair results", "维修结果"], ["repair work", "维修工作"], ["emergency repair", "紧急维修"]], examples: [["The repair is complete.", "维修已完成。"], ["Repair work is in progress.", "维修工作正在进行。"]] },
    ],
    phrases: [
      { p: "verifying the repair results", ipa: "/ˈvɛr.ɪ.faɪ.ɪŋ ðə rɪˈpeər rɪˈzʌlts/", cn: "确认维修结果", why: "verifying + repair results = 确认维修结果。修复后必须验证，确认设备运行正常、参数达标，才能宣布恢复。" },
    ],
    grammar: [
      { q: "verify 和 confirm 有什么区别？", a: "verify = 验证（通过测试/检查来确认，更强调过程）\nconfirm = 确认（正式宣布结果，更强调结论）\n✅ We are verifying the repair results.（我们正在验证维修结果 → 正在测试检查）\n✅ I confirm the system is stable.（我确认系统稳定 → 已验证完毕，正式宣布）\n流程：先 verify（验证），再 confirm（确认）。" },
    ],
    pattern: "We are verifying the + 对象",
    patternExamples: [
      { en: "We are verifying the test results.", cn: "我们正在验证测试结果。", words: [{ w: "verifying", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "We are verifying the system parameters.", cn: "我们正在确认系统参数。", words: [{ w: "verifying", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "We are verifying the alarm settings.", cn: "我们正在确认告警设置。", words: [{ w: "verifying", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "维修验证的标准流程：\n① 检查关键参数（电压/温度/压力等）\n② 测试运行（至少运行15-30分钟观察稳定性）\n③ 确认告警已清除\n④ 向客户汇报验证结果\n验证通过后才能宣布恢复。",
    pronunciation: "verifying 重音在第一音节：/ˈvɛr.ɪ.faɪ.ɪŋ/。\nrepair 的 pair 读 /peər/。\n节奏：We are VER-i-fy-ing ｜ the re-PAIR re-SULTS.",
    quiz: [
      { q: "我们正在确认系统参数，怎么说？", a: "We are verifying the system parameters." },
      { q: "verify 和 confirm 在维修流程中的先后顺序是什么？", a: "先 verify 后 confirm。verify = 验证（测试检查的过程），confirm = 确认（正式宣布结果）。先验证通过，再正式确认恢复。" },
    ],
  },
  {
    id: 1241,
    en: "Please keep this bridge call open.",
    cn: "请保持本次电话会议不要结束。",
    ipa: "/pliːz kiːp ðɪs brɪdʒ kɔːl ˈoʊ.pən/",
    tags: ["第1241句", "保持通话", "★★★★★"],
    when: "维修验证期间，需要保持电话会议不结束，以便随时汇报进展。keep open = 保持开启/不要挂断。",
    words: [
      { w: "keep", ipa: "/kiːp/", pos: "动词", cn: "保持；维持", memory: "① keep = 保持/维持（某种状态）。\nkeep + 宾语 + 形容词 = 保持某物处于某状态。\nkeep this bridge call open = 保持电话会议开启。", phonics: "k 读 /k/，ee 读 /iː/，p 读 /p/。", collocations: [["keep open", "保持开启"], ["keep monitoring", "保持监控"], ["keep informed", "保持知情"]], examples: [["Please keep the line open.", "请保持线路畅通。"], ["Keep monitoring the system.", "继续监控系统。"]] },
    ],
    phrases: [
      { p: "keep this bridge call open", ipa: "/kiːp ðɪs brɪdʒ kɔːl ˈoʊ.pən/", cn: "保持电话会议不结束", why: "keep + bridge call + open = 保持电话会议开启。在故障处理过程中，保持通话可以让各方随时沟通最新进展。" },
    ],
    grammar: [
      { q: "keep + 宾语 + 形容词 的结构怎么用？", a: "keep + 宾语 + 形容词 = 保持某物处于某状态\n✅ keep the door open（保持门开着）\n✅ keep the bridge call open（保持电话会议开着）\n✅ keep the system running（保持系统运行 → 形容词换成现在分词）\n✅ keep everyone informed（让大家保持知情 → 形容词换成过去分词）\n这个结构非常灵活，形容词可以是普通形容词、现在分词或过去分词。" },
    ],
    pattern: "Please keep + 对象 + 状态",
    patternExamples: [
      { en: "Please keep the line open.", cn: "请保持线路畅通。", words: [] },
      { en: "Please keep the system in automatic mode.", cn: "请保持系统处于自动模式。", words: [{ w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "mode", ipa: "/moʊd/", cn: "模式", phonics: "mode 读 /moʊd/" }] },
      { en: "Please keep us informed of any changes.", cn: "如有变化请随时通知我们。", words: [] },
    ],
    thinking: "保持电话会议不结束的原因：\n① 维修验证需要时间（15-30分钟）\n② 验证期间可能出现新问题\n③ 需要随时向客户汇报进展\n④ 验证通过后才能正式宣布恢复\n如果挂断电话后出问题，重新召集更困难。",
    pronunciation: "keep 的 ee 读长音 /iː/：/kiːp/。\nopen 的 o 读 /oʊ/：/ˈoʊ.pən/。\n节奏：Please KEEP ｜ this BRIDGE CALL O-pen.",
    quiz: [
      { q: "请保持线路畅通，怎么说？", a: "Please keep the line open." },
      { q: "keep + 宾语 + 形容词 可以用哪些形式的形容词？", a: "三种：① 普通形容词 keep the door open（开着）；② 现在分词 keep the system running（运行中）；③ 过去分词 keep everyone informed（被通知的/知情的）。" },
    ],
  },
  {
    id: 1242,
    en: "We will provide the next update in fifteen minutes.",
    cn: "十五分钟后我们提供下一次更新。",
    ipa: "/wiː wɪl prəˈvaɪd ðə nɛkst ˈʌp.deɪt ɪn ˈfɪf.tiːn ˈmɪn.ɪts/",
    tags: ["第1242句", "更新承诺", "★★★★★"],
    when: "保持通话的同时，承诺下一次更新的时间。定期更新是电话会议的重要规范，避免客户焦虑等待。",
    words: [
      { w: "provide", ipa: "/prəˈvaɪd/", pos: "动词", cn: "提供", memory: "① pro- = 向前；② vide = 看（拉丁语 videre）。\nprovide = 向前看 → 提前准备 → 提供。\nprovide + update = 提供更新（汇报最新进展）。", phonics: "pro 读 /prə/，vide 读 /vaɪd/，重音在第二音节。", collocations: [["provide an update", "提供更新"], ["provide support", "提供支持"], ["provide details", "提供详情"]], examples: [["We will provide regular updates.", "我们将提供定期更新。"], ["Please provide more details.", "请提供更多详情。"]] },
      { w: "update", ipa: "/ˈʌp.deɪt/", pos: "名词", cn: "更新；进展汇报", memory: "① up = 向上；② date = 日期/更新。\nupdate = 更新（最新信息/进展）。\n在电话会议中，update 指定期向客户汇报最新情况。", phonics: "up 读 /ʌp/，date 读 /deɪt/，重音在第一音节。", collocations: [["provide an update", "提供更新"], ["next update", "下次更新"], ["regular updates", "定期更新"]], examples: [["Here is the latest update.", "这是最新进展。"], ["We will update you every 30 minutes.", "我们每30分钟更新一次。"]] },
    ],
    phrases: [
      { p: "next update in fifteen minutes", ipa: "/nɛkst ˈʌp.deɪt ɪn ˈfɪf.tiːn ˈmɪn.ɪts/", cn: "十五分钟后下一次更新", why: "next update + in + 时间 = 多长时间后下一次更新。明确告知下次更新时间，让客户心里有数。" },
    ],
    grammar: [
      { q: "in fifteen minutes 和 after fifteen minutes 有什么区别？", a: "in fifteen minutes = 十五分钟后（从现在算起，15分钟后发生）\nafter fifteen minutes = 十五分钟后（从某个时间点算起，15分钟后）\n✅ We will update in fifteen minutes.（我们15分钟后更新 → 从现在算）\n✅ After fifteen minutes, the system recovered.（15分钟后系统恢复了 → 从某个过去时间点算）\n承诺下次更新时间用 in。" },
    ],
    pattern: "We will provide the next update in + 时间",
    patternExamples: [
      { en: "We will provide the next update in thirty minutes.", cn: "我们三十分钟后提供下一次更新。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }] },
      { en: "We will provide the next update in one hour.", cn: "我们一小时后提供下一次更新。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }] },
      { en: "We will update you in fifteen minutes.", cn: "我们十五分钟后更新您。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }] },
    ],
    thinking: "电话会议更新频率的建议：\n① 紧急情况：每15分钟更新\n② 一般情况：每30分钟更新\n③ 稳定监控：每1小时更新\n④ 无论有无进展，都要按时更新（'no change' 也是有效更新）\n定时更新建立信任，失联让客户恐慌。",
    pronunciation: "provide 的 vide 读 /vaɪd/：/prəˈvaɪd/。\nfifteen 的 f 读 /f/：/ˈfɪf.tiːn/。\n节奏：We will pro-VIDE ｜ the NEXT UP-date ｜ in FIF-teen MIN-utes.",
    quiz: [
      { q: "我们三十分钟后提供下一次更新，怎么说？", a: "We will provide the next update in thirty minutes." },
      { q: "为什么即使没有进展也要按时更新？", a: "因为定时更新建立信任。如果到了更新时间没有消息，客户会恐慌，以为出了更严重的问题。即使没有进展，'no change, system stable' 也是有效的更新。" },
    ],
  },
  {
    id: 1243,
    en: "Please inform us immediately if anything changes.",
    cn: "如果有任何变化，请立即通知我们。",
    ipa: "/pliːz ɪnˈfɔːrm ʌs ɪˈmiː.di.ət.li ɪf ˈɛn.i.θɪŋ ˈtʃeɪn.dʒɪz/",
    tags: ["第1243句", "变化通知", "★★★★★"],
    when: "在等待下次定期更新期间，要求各方如有任何变化立即通知。这是双向沟通的重要保障。",
    words: [
      { w: "inform", ipa: "/ɪnˈfɔːrm/", pos: "动词", cn: "通知；告知", memory: "① in- = 进入；② form = 形态/信息。\ninform = 传入信息 → 通知/告知。\ninform + 人 + of/about + 事 = 通知某人某事。", phonics: "in 读 /ɪn/，form 读 /fɔːrm/，重音在第二音节。", collocations: [["inform us", "通知我们"], ["inform immediately", "立即通知"], ["inform the customer", "通知客户"]], examples: [["Please inform us of any changes.", "如有变化请通知我们。"], ["The customer has been informed.", "已通知客户。"]] },
      { w: "immediately", ipa: "/ɪˈmiː.di.ət.li/", pos: "副词", cn: "立即；马上", memory: "① immediate = 立即的；② immediately = 立即地。\nimmediately 强调不要等待，第一时间通知。", phonics: "im 读 /ɪ/，me 读 /miː/，di 读 /di/，ate 读 /ət/，ly 读 /li/，重音在第二音节。", collocations: [["immediately", "立即"], ["inform immediately", "立即通知"], ["respond immediately", "立即响应"]], examples: [["Call me immediately.", "立即给我打电话。"], ["Please respond immediately.", "请立即响应。"]] },
    ],
    phrases: [
      { p: "if anything changes", ipa: "/ɪf ˈɛn.i.θɪŋ ˈtʃeɪn.dʒɪz/", cn: "如果有任何变化", why: "if + anything + changes = 如果有任何变化。anything 用于条件句中，表示'任何事'。" },
    ],
    grammar: [
      { q: "inform 和 tell 和 notify 有什么区别？", a: "inform = 通知（正式用语，常用于商务/技术场景）\ntell = 告诉（日常用语，非正式）\nnotify = 通知（更正式，常用于书面/法律场景）\n✅ Please inform us of any changes.（请通知我们任何变化 → 正式电话会议）\n✅ Please tell us what happened.（请告诉我们发生了什么 → 日常对话）\n✅ The customer was formally notified.（客户已正式通知 → 书面/法律）\n电话会议中用 inform，正式但不过于生硬。" },
    ],
    pattern: "Please inform us immediately if + 条件",
    patternExamples: [
      { en: "Please inform us immediately if the situation worsens.", cn: "如果情况恶化请立即通知我们。", words: [{ w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Please inform us immediately if new alarms appear.", cn: "如果出现新告警请立即通知我们。", words: [{ w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Please inform us immediately if the vendor arrives.", cn: "如果供应商到了请立即通知我们。", words: [{ w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }, { w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }] },
    ],
    thinking: "双向沟通是电话会议的关键：\n① 运维团队 → 客户：定期更新\n② 客户/各方 → 运维团队：变化即通知\n两个方向都要保持畅通，确保信息对称。\n如果任何一方发现新情况，都要立即通报。",
    pronunciation: "inform 重音在第二音节：/ɪnˈfɔːrm/。\nimmediately 重音在第二音节：/ɪˈmiː.di.ət.li/。\n节奏：Please in-FORM us ｜ im-ME-di-ate-ly ｜ if EN-y-thing CHANG-es.",
    quiz: [
      { q: "如果出现新告警请立即通知我们，怎么说？", a: "Please inform us immediately if new alarms appear." },
      { q: "inform、tell、notify 哪个最适合电话会议？", a: "inform 最合适。inform = 正式但不过于生硬（电话会议标准用语）；tell = 太口语化；notify = 太正式（偏书面/法律）。" },
    ],
  },
  {
    id: 1244,
    en: "The system performance has returned to normal.",
    cn: "系统性能已经恢复正常。",
    ipa: "/ðə ˈsɪs.təm pərˈfɔːr.məns hæz rɪˈtɜːrnd tuː ˈnɔːr.məl/",
    tags: ["第1244句", "性能恢复", "★★★★★"],
    when: "维修验证完成后，正式宣布系统性能已恢复正常。return to normal = 恢复正常，是故障处理的最终目标。",
    words: [
      { w: "performance", ipa: "/pərˈfɔːr.məns/", pos: "名词", cn: "性能；表现", memory: "① perform = 执行/表现；② performance = 性能/表现。\nsystem performance = 系统性能（运行效率、响应速度、稳定性等综合指标）。", phonics: "per 读 /pər/，for 读 /fɔːr/，mance 读 /məns/，重音在第二音节。", collocations: [["system performance", "系统性能"], ["performance monitoring", "性能监控"], ["performance degradation", "性能下降"]], examples: [["System performance is good.", "系统性能良好。"], ["We noticed performance degradation.", "我们发现性能下降。"]] },
      { w: "returned", ipa: "/rɪˈtɜːrnd/", pos: "动词（过去分词）", cn: "恢复；返回", memory: "① return = 返回/恢复。\nreturn to normal = 恢复正常（从异常状态回到正常状态）。\nhas returned = 已经恢复（现在完成时，强调'已经'）。", phonics: "re 读 /rɪ/，turn 读 /tɜːrn/，ed 读 /d/。", collocations: [["returned to normal", "恢复正常"], ["returned to service", "恢复服务"], ["returned to operation", "恢复运行"]], examples: [["Power has returned to normal.", "供电已恢复正常。"], ["The temperature has returned to normal.", "温度已恢复正常。"]] },
    ],
    phrases: [
      { p: "returned to normal", ipa: "/rɪˈtɜːrnd tuː ˈnɔːr.məl/", cn: "恢复正常", why: "returned + to + normal = 恢复正常。这是电话会议中最令人期待的汇报，表示故障影响已完全消除。" },
    ],
    grammar: [
      { q: "has returned to normal 和 is normal 有什么区别？", a: "has returned to normal = 已经恢复正常（强调从异常到正常的变化过程）\nis normal = 是正常的（描述当前状态）\n✅ The system has returned to normal.（系统已恢复正常 → 之前异常，现在恢复了）\n✅ The system is normal.（系统正常 → 只是描述当前状态，不强调变化）\n电话会议中用 has returned to normal，因为需要明确告知客户'从异常恢复到正常'这个变化。" },
    ],
    pattern: "The + 对象 + has returned to normal",
    patternExamples: [
      { en: "The temperature has returned to normal.", cn: "温度已恢复正常。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The voltage has returned to normal.", cn: "电压已恢复正常。", words: [{ w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The network performance has returned to normal.", cn: "网络性能已恢复正常。", words: [{ w: "network", ipa: "/ˈnɛtwɜːrk/", cn: "网络", phonics: "net 读 /nɛt/，work 读 /wɜːrk/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "宣布恢复正常的条件：\n① 所有关键参数回到正常范围\n② 持续稳定运行至少15-30分钟\n③ 无新告警触发\n④ 维修验证通过\n只有全部满足才能宣布'恢复正常'。",
    pronunciation: "performance 重音在第二音节：/pərˈfɔːr.məns/。\nreturned 的 urn 读 /ɜːrn/：/rɪˈtɜːrnd/。\n节奏：The SYS-tem per-FOR-mance ｜ has re-TURNED ｜ to NOR-mal.",
    quiz: [
      { q: "温度已恢复正常，怎么说？", a: "The temperature has returned to normal." },
      { q: "has returned to normal 和 is normal 在电话会议中哪个更好？", a: "has returned to normal 更好，因为它明确告知客户'之前异常，现在已经恢复'这个变化过程。is normal 只是描述当前状态，不能传达恢复的信息。" },
    ],
  },
  {
    id: 1245,
    en: "No new alarms have been reported.",
    cn: "目前没有新的告警。",
    ipa: "/noʊ njuː ˈɑːr.mz hæv biːn rɪˈpɔːr.tɪd/",
    tags: ["第1245句", "告警状态", "★★★★★"],
    when: "确认系统性能恢复后，补充说明没有新告警。这是恢复确认的最后一条关键信息。",
    words: [
      { w: "reported", ipa: "/rɪˈpɔːr.tɪd/", pos: "动词（过去分词）", cn: "报告；报告出现", memory: "① report = 报告。\nhave been reported = 已经被报告（现在完成时被动语态）。\nNo new alarms have been reported = 没有新告警被报告 → 没有新告警出现。", phonics: "re 读 /rɪ/，port 读 /pɔːr/，ed 读 /tɪd/。", collocations: [["reported alarms", "报告的告警"], ["no alarms reported", "无告警报告"], ["report an issue", "报告问题"]], examples: [["No issues have been reported.", "没有问题被报告。"], ["Three new alarms were reported.", "报告了三条新告警。"]] },
    ],
    phrases: [
      { p: "no new alarms", ipa: "/noʊ njuː ˈɑːr.mz/", cn: "没有新告警", why: "no + new + alarms = 没有新告警。new 强调是'新出现的'告警，区别于之前已知的告警。" },
    ],
    grammar: [
      { q: "have been reported 和 were reported 有什么区别？", a: "have been reported = 已经被报告（现在完成时，强调到现在为止的情况）\nwere reported = 被报告了（一般过去时，强调过去某个时间点）\n✅ No new alarms have been reported.（到现在为止没有新告警 → 电话会议汇报用这个）\n✅ Three alarms were reported at 2 PM.（下午2点报告了三条告警 → 描述过去事件）\n电话会议用现在完成时，因为关心的是'到目前为止'的整体情况。" },
    ],
    pattern: "No new + 名词 + have been + 过去分词",
    patternExamples: [
      { en: "No new issues have been found.", cn: "没有发现新问题。", words: [{ w: "issues", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
      { en: "No new risks have been identified.", cn: "没有发现新风险。", words: [] },
      { en: "No new incidents have been reported.", cn: "没有新事件被报告。", words: [{ w: "reported", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
    ],
    thinking: "恢复确认的完整汇报：\n① 系统性能恢复正常（1244句）\n② 没有新告警（本句）\n③ 后续监控安排（后续句子）\n三条信息缺一不可，才能让客户放心。",
    pronunciation: "alarms 的 ar 读 /ɑːr/：/ˈɑːr.mz/。\nreported 重音在第二音节：/rɪˈpɔːr.tɪd/。\n节奏：No NEW AL-arms ｜ have been re-PORT-ed.",
    quiz: [
      { q: "没有发现新问题，怎么说？", a: "No new issues have been found." },
      { q: "为什么电话会议用 have been reported 而不是 were reported？", a: "因为 have been reported（现在完成时）关心的是'到目前为止'的整体情况，而 were reported（一般过去时）只描述过去某个时间点。电话会议需要汇报的是截至当前的状态。" },
    ],
  },
];

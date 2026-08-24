// EXPORTS: MOCK_SENTENCES_PART4A

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART4A: ISentence[] = [
  {
    id: 91,
    en: "There are twelve open event tickets.",
    cn: "目前共有12个未关闭的事件单。",
    ipa: "/ðeər ɑːr twɛlv ˈoʊ.pən ɪˈvɛnt ˈtɪk.ɪts/",
    tags: ["第91句", "事件单统计", "★★★★★"],
    when: "DCIM交接完成后，转入事件单交接。第一句话先汇报未关闭事件单总数，让对方快速了解待处理工作量。",
    words: [
      { w: "open", ipa: "/ˈoʊ.pən/", pos: "形容词", cn: "未关闭的；待处理的", memory: "① open = 打开/开放的；② 工单语境中 = 未关闭/待处理。\nopen ticket = 未关闭工单；open issue = 未关闭问题。", phonics: "o 读 /oʊ/，pen 读 /pən/，重音在第一音节。", collocations: [["open ticket", "未关闭工单"], ["open issue", "未关闭问题"], ["open alarm", "未关闭告警"]], examples: [["There are 5 open tickets.", "有5个未关闭工单。"], ["How many tickets are still open?", "还有多少工单未关闭？"]] },
      { w: "event ticket", ipa: "/ɪˈvɛnt ˈtɪk.ɪt/", pos: "名词", cn: "事件单", memory: "① event = 事件/活动；② ticket = 工单/票据。\n数据中心事件单记录日常运维中发现的问题，区别于 fault ticket（故障单）。", phonics: "event 读 /ɪˈvɛnt/，ticket 读 /ˈtɪk.ɪt/。", collocations: [["event ticket", "事件单"], ["open event ticket", "未关闭事件单"], ["event ticket dashboard", "事件单页面"]], examples: [["Please check the event tickets.", "请检查事件单。"], ["This is a new event ticket.", "这是一个新的事件单。"]] },
    ],
    phrases: [
      { p: "open event tickets", ipa: "/ˈoʊ.pən ɪˈvɛnt ˈtɪk.ɪts/", cn: "未关闭的事件单", why: "open = 未关闭的，event ticket = 事件单。汇报工单时先说状态（open/closed），再说类型（event/fault）。" },
    ],
    grammar: [
      { q: "为什么用 open 而不用 active？", a: "两者都可以，但语义不同：\nopen = 未关闭（工单状态，强调还没结单）\nactive = 活动中的（告警状态，强调还在发生）\n✅ open ticket（工单未关闭）\n✅ active alarm（告警还在响）" },
    ],
    pattern: "There are + 数量 + open event tickets",
    patternExamples: [
      { en: "There are five open event tickets.", cn: "有5个未关闭事件单。", words: [{ w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "There are no open event tickets.", cn: "没有未关闭的事件单。", words: [{ w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "There are twenty open event tickets.", cn: "有20个未关闭事件单。", words: [{ w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
    ],
    thinking: "事件单交接和告警交接用同一个句型：There are + 数量 + 状态 + 类型。\n告警说 active alarms，工单说 open tickets。\n交接顺序：告警（BMS → DCIM）→ 事件单 → 故障单。",
    pronunciation: "twelve 的 l 和 v 要清晰：/twɛlv/。\nopen 的 o 发双元音 /oʊ/，不要读成 /ɑː/。\n节奏：There are TWELVE ｜ O-pen ｜ E-vent TICK-ets.",
    quiz: [
      { q: "目前有8个未关闭事件单，怎么说？", a: "There are eight open event tickets." },
      { q: "open ticket 和 active alarm 有什么区别？", a: "open ticket = 工单未关闭（还没结单，但问题可能在处理中）；active alarm = 告警还在响（问题还在发生）。" },
    ],
  },
  {
    id: 92,
    en: "Three new event tickets were created today.",
    cn: "今天新建了3个事件单。",
    ipa: "/θriː njuː ɪˈvɛnt ˈtɪk.ɪts wɜːr kriˈeɪ.tɪd təˈdeɪ/",
    tags: ["第92句", "工单统计", "★★★★★"],
    when: "汇报完未关闭总数后，接着说明今天新建了多少个，让对方了解本日增量。",
    words: [
      { w: "created", ipa: "/kriˈeɪ.tɪd/", pos: "动词(过去分词)", cn: "被创建", memory: "① create = 创建（动词）；② created = 被创建的（被动语态）。\nwere created = 被创建了（过去时被动）。", phonics: "cre 读 /kri/，a 读 /eɪ/，ted 读 /tɪd/，重音在第二音节。", collocations: [["created today", "今天创建的"], ["newly created", "新创建的"], ["auto-created", "自动创建的"]], examples: [["The ticket was created yesterday.", "这个工单是昨天创建的。"], ["Three tickets were created today.", "今天创建了3个工单。"]] },
    ],
    phrases: [
      { p: "were created today", ipa: "/wɜːr kriˈeɪ.tɪd təˈdeɪ/", cn: "今天被创建的", why: "were + 过去分词 = 被动语态过去时。工单不会自己创建，是人或系统创建的，所以用被动。" },
    ],
    grammar: [
      { q: "为什么用 were created 而不用 created？", a: "被动语态：be + 过去分词。\n✅ Tickets were created today.（工单今天被创建了 → 被动）\n❌ Tickets created today.（缺少 be 动词，语法不完整）\n工单是被创建的，不是自己创建的，所以必须用被动。" },
    ],
    pattern: "数量 + new event tickets + were created + 时间",
    patternExamples: [
      { en: "Five new tickets were created yesterday.", cn: "昨天新建了5个工单。", words: [{ w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "No new tickets were created this week.", cn: "本周没有新建工单。", words: [{ w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "Two new tickets were created this morning.", cn: "今天上午新建了2个工单。", words: [{ w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
    ],
    thinking: "交接时工单统计三板斧：\n① 未关闭总数 → There are X open tickets.\n② 今天新建 → X new tickets were created today.\n③ 今天关闭 → X tickets were closed today.\n三个数字一报，对方立刻知道工作量和趋势。",
    pronunciation: "three 的 th 咬舌尖：/θriː/。\ncreated 重音在第二音节：cre-A-ted /kriˈeɪ.tɪd/。\n节奏：THREE NEW ｜ E-vent TICK-ets ｜ were cre-A-ted ｜ to-DAY.",
    quiz: [
      { q: "今天新建了5个工单，怎么说？", a: "Five new event tickets were created today." },
      { q: "被动语态怎么判断？", a: "主语是动作的承受者（不是执行者）就用被动。工单不会自己创建 → 被动。句式：be + 过去分词。" },
    ],
  },
  {
    id: 93,
    en: "Two event tickets were closed today.",
    cn: "今天关闭了2个事件单。",
    ipa: "/tuː ɪˈvɛnt ˈtɪk.ɪts wɜːr kloʊzd təˈdeɪ/",
    tags: ["第93句", "工单统计", "★★★★"],
    when: "报完新建数，接着报关闭数。新建数减关闭数等于净增量，让对方快速评估积压趋势。",
    words: [
      { w: "closed", ipa: "/kloʊzd/", pos: "动词(过去分词)", cn: "被关闭的；已关闭", memory: "① close = 关闭（动词）；② closed = 已关闭的。\n工单生命周期：open（打开）→ in progress（处理中）→ closed（关闭）。", phonics: "close 读 /kloʊz/（动词），closed 读 /kloʊzd/，末尾加 /d/ 音。", collocations: [["closed ticket", "已关闭工单"], ["ticket closed", "工单已关闭"], ["close a ticket", "关闭工单"]], examples: [["The ticket was closed yesterday.", "这个工单昨天关闭了。"], ["Please close this ticket.", "请关闭这个工单。"]] },
    ],
    phrases: [
      { p: "were closed today", ipa: "/wɜːr kloʊzd təˈdeɪ/", cn: "今天被关闭的", why: "与 were created today 结构完全一致：be(were) + 过去分词 + today。区别只是动词：created → closed。" },
    ],
    grammar: [
      { q: "created 和 closed 在交接中怎么搭配使用？", a: "交接时先报新建再报关闭：\n✅ Three tickets were created today.（新建3个）\n✅ Two tickets were closed today.（关闭2个）\n→ 净增1个，积压在增加。\n如果关闭数 ≥ 新建数，说明积压在减少。" },
    ],
    pattern: "数量 + event tickets + were closed + 时间",
    patternExamples: [
      { en: "Five tickets were closed yesterday.", cn: "昨天关闭了5个工单。", words: [{ w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "No tickets were closed this week.", cn: "本周没有关闭工单。", words: [{ w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "One ticket was closed this afternoon.", cn: "今天下午关闭了1个工单。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
    ],
    thinking: "三个统计数字是事件单交接的核心：\n① open（未关闭总数）= 当前积压\n② created today（今天新建）= 新增压力\n③ closed today（今天关闭）= 处理速度\n三个数字组合 = 完整的工单健康度快照。",
    pronunciation: "closed 的 se 读 /zd/，不是 /st/。\ntoday 重音在第二音节：to-DAY /təˈdeɪ/。\n节奏：TWO ｜ E-vent TICK-ets ｜ were CLOSED ｜ to-DAY.",
    quiz: [
      { q: "今天关闭了4个事件单，怎么说？", a: "Four event tickets were closed today." },
      { q: "如果新建5个、关闭3个，积压趋势是什么？", a: "净增2个（5-3=2），积压在增加。需要关注处理速度是否跟得上。" },
    ],
  },
  {
    id: 94,
    en: "Seven event tickets are still in progress.",
    cn: "目前还有7个事件单正在处理中。",
    ipa: "/ˈsɛv.ən ɪˈvɛnt ˈtɪk.ɪts ɑːr stɪl ɪn ˈprɑː.ɡrɛs/",
    tags: ["第94句", "工单状态", "★★★★★"],
    when: "报完新建和关闭数后，说明当前有多少工单正在处理中（in progress），区别于已解决待确认和等待第三方的工单。",
    words: [
      { w: "still", ipa: "/stɪl/", pos: "副词", cn: "仍然；还在", memory: "① still = 仍然/还；② 表示状态持续未改变。\nstill open = 还没关闭；still in progress = 还在处理中。", phonics: "s 读 /s/，till 读 /tɪl/，整体 /stɪl/。", collocations: [["still open", "仍未关闭"], ["still in progress", "仍在处理中"], ["still waiting", "仍在等待"]], examples: [["The ticket is still open.", "工单仍未关闭。"], ["We are still working on it.", "我们仍在处理中。"]] },
      { w: "progress", ipa: "/ˈprɑː.ɡrɛs/", pos: "名词", cn: "进展；进度", memory: "① pro = 向前；② gress = 走 → progress = 向前走 = 进展。\nin progress = 正在进行中（固定搭配）。", phonics: "pro 读 /prɑː/，gress 读 /ɡrɛs/，重音在第一音节。", collocations: [["in progress", "进行中"], ["work in progress", "进行中的工作"], ["progress report", "进展报告"]], examples: [["The repair is in progress.", "维修正在进行中。"], ["Check the progress of the ticket.", "查看工单进展。"]] },
    ],
    phrases: [
      { p: "still in progress", ipa: "/stɪl ɪn ˈprɑː.ɡrɛs/", cn: "仍在处理中", why: "still = 仍然，in progress = 进行中。工单状态：open → in progress → resolved → closed。in progress 是正在处理但尚未解决的阶段。" },
    ],
    grammar: [
      { q: "still 放在句中什么位置？", a: "still 通常放在 be 动词之后、主要动词之前：\n✅ Tickets ARE still in progress.（be + still + 状态）\n✅ We are STILL waiting.（be + still + 动词ing）\n✅ The alarm is STILL active.（be + still + 形容词）" },
    ],
    pattern: "数量 + event tickets + are still in progress",
    patternExamples: [
      { en: "Three tickets are still in progress.", cn: "3个工单仍在处理中。", words: [{ w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "All tickets are still in progress.", cn: "所有工单仍在处理中。", words: [{ w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "No tickets are in progress.", cn: "没有工单在处理中。", words: [{ w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
    ],
    thinking: "工单状态分类汇报：\n① open = 待处理（还没开始）\n② in progress = 处理中（正在做）\n③ waiting for = 等待第三方\n④ resolved = 已解决（待关闭）\n⑤ closed = 已关闭\n交接时按状态分类报，对方一目了然。",
    pronunciation: "seven 的 v 咬下唇：/ˈsɛv.ən/。\nprogress 重音在第一音节：PRO-gress /ˈprɑː.ɡrɛs/。\n节奏：SE-ven ｜ E-vent TICK-ets ｜ are STILL ｜ in PRO-gress.",
    quiz: [
      { q: "目前还有3个工单在处理中，怎么说？", a: "Three event tickets are still in progress." },
      { q: "in progress 和 open 有什么区别？", a: "open = 待处理（可能还没分配人）；in progress = 正在处理中（已有人在做了）。in progress 是 open 的子状态。" },
    ],
  },
  {
    id: 95,
    en: "One event ticket has been converted into a fault ticket.",
    cn: "其中1个事件单已经转成故障单。",
    ipa: "/wʌn ɪˈvɛnt ˈtɪk.ɪt hæz bɪn kənˈvɜːr.tɪd ˈɪn.tuː ə fɔːlt ˈtɪk.ɪt/",
    tags: ["第95句", "工单转换", "★★★★★"],
    when: "汇报完基本统计后，重点说明哪些事件单已升级为故障单。事件单转故障单意味着问题严重程度升级，需要更高级别关注。",
    words: [
      { w: "converted", ipa: "/kənˈvɜːr.tɪd/", pos: "动词(过去分词)", cn: "被转换；被转化", memory: "① con = 一起；② vert = 转 → convert = 转变/转换。\nconverted into = 被转换为（固定搭配）。", phonics: "con 读 /kən/，vert 读 /vɜːrt/，ed 读 /ɪd/，重音在第二音节。", collocations: [["converted into", "转换为"], ["converted to", "转为"], ["auto-converted", "自动转换"]], examples: [["The event was converted into a fault.", "事件已转为故障。"], ["This ticket was converted yesterday.", "这个工单昨天被转换了。"]] },
      { w: "fault ticket", ipa: "/fɔːlt ˈtɪk.ɪt/", pos: "名词", cn: "故障单", memory: "① fault = 故障/缺陷；② fault ticket = 故障工单。\n事件单（event ticket）升级为故障单（fault ticket）= 问题严重度升级。", phonics: "fault 读 /fɔːlt/，au 发 /ɔː/ 长音。", collocations: [["fault ticket", "故障单"], ["major fault", "重大故障"], ["fault investigation", "故障调查"]], examples: [["A fault ticket was created.", "创建了一个故障单。"], ["This is a critical fault ticket.", "这是一个严重故障单。"]] },
    ],
    phrases: [
      { p: "converted into a fault ticket", ipa: "/kənˈvɜːr.tɪd ˈɪn.tuː ə fɔːlt ˈtɪk.ɪt/", cn: "被转换为故障单", why: "convert into = 转换为。事件单 → 故障单 是数据中心工单升级的标准流程，表示问题从「一般事件」升级为「正式故障」。" },
    ],
    grammar: [
      { q: "has been converted 是什么时态？", a: "现在完成时被动语态：has/have been + 过去分词。\n表示动作已经发生，对现在有影响。\n✅ One ticket HAS BEEN converted.（一个工单已经被转换了 → 现在完成被动）\n对比：One ticket WAS converted.（一个工单被转换了 → 一般过去被动，不强调对现在的影响）" },
    ],
    pattern: "数量 + event ticket(s) + has/have been converted into + a fault ticket",
    patternExamples: [
      { en: "Two event tickets have been converted into fault tickets.", cn: "2个事件单已转成故障单。", words: [{ w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }, { w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }] },
      { en: "No event tickets have been converted.", cn: "没有事件单被转换。", words: [{ w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "This event ticket was converted into a fault ticket yesterday.", cn: "这个事件单昨天转成了故障单。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }, { w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }] },
    ],
    thinking: "事件单 vs 故障单：\nevent ticket = 一般事件（影响较小，日常运维）\nfault ticket = 正式故障（影响较大，需要 RCA）\n当 event ticket 的影响升级（例如导致业务中断），就 convert into fault ticket。\n交接时必须单独汇报转换情况，因为故障单需要更高关注度。",
    pronunciation: "converted 重音在第二音节：con-VERT-ed /kənˈvɜːr.tɪd/。\ninto 连读：in-to /ˈɪn.tuː/。\nfault 的 l 不发音太重，轻带过：/fɔːlt/。\n节奏：One E-vent TICK-et ｜ has been con-VERT-ed ｜ IN-to ｜ a FAULT TICK-et.",
    quiz: [
      { q: "3个事件单已转成故障单，怎么说？", a: "Three event tickets have been converted into fault tickets." },
      { q: "事件单和故障单的区别是什么？", a: "事件单（event ticket）= 一般运维事件，影响较小；故障单（fault ticket）= 正式故障记录，影响较大，通常需要根因分析（RCA）报告。" },
    ],
  },
  {
    id: 96,
    en: "Please open the event ticket dashboard.",
    cn: "请打开事件单页面。",
    ipa: "/pliːz ˈoʊ.pən ðə ɪˈvɛnt ˈtɪk.ɪt ˈdæʃ.bɔːrd/",
    tags: ["第96句", "系统操作", "★★★★"],
    when: "统计汇报完成后，请接班人员打开事件单管理页面，准备逐单检查。",
    words: [
      { w: "dashboard", ipa: "/ˈdæʃ.bɔːrd/", pos: "名词", cn: "仪表盘；管理页面", memory: "① dash = 猛冲/仪表板；② board = 板 → dashboard = 仪表盘/管理面板。\n在 IT 系统中 = 数据总览页面。", phonics: "dash 读 /dæʃ/，board 读 /bɔːrd/，重音在第一音节。", collocations: [["ticket dashboard", "工单页面"], ["alarm dashboard", "告警页面"], ["monitoring dashboard", "监控页面"]], examples: [["Open the dashboard.", "打开管理页面。"], ["Check the dashboard for updates.", "在页面上查看更新。"]] },
    ],
    phrases: [
      { p: "event ticket dashboard", ipa: "/ɪˈvɛnt ˈtɪk.ɪt ˈdæʃ.bɔːrd/", cn: "事件单管理页面", why: "dashboard = 仪表盘/总览页面。各系统都有自己的 dashboard：BMS dashboard、DCIM dashboard、event ticket dashboard。" },
    ],
    grammar: [
      { q: "open 和 display 在操作指令中有什么区别？", a: "两者几乎同义，可以互换：\n✅ Please open the dashboard.（请打开页面）\n✅ Please display the dashboard.（请显示页面）\nopen 更口语化，display 更正式。交接时两者都可以用。" },
    ],
    pattern: "Please open the + 系统/功能 + dashboard",
    patternExamples: [
      { en: "Please open the BMS dashboard.", cn: "请打开BMS页面。", words: [{ w: "bms", ipa: "/ˌbiːˈɛmˈɛs/", cn: "楼控", phonics: "B-M-S 逐字母读" }, { w: "dashboard", ipa: "/ˈdæʃbɔːrd/", cn: "仪表盘", phonics: "dash 读 /dæʃ/，board 读 /bɔːrd/" }] },
      { en: "Please open the alarm dashboard.", cn: "请打开告警页面。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "dashboard", ipa: "/ˈdæʃbɔːrd/", cn: "仪表盘", phonics: "dash 读 /dæʃ/，board 读 /bɔːrd/" }] },
      { en: "Please open the monitoring dashboard.", cn: "请打开监控页面。", words: [{ w: "monitoring", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "dashboard", ipa: "/ˈdæʃbɔːrd/", cn: "仪表盘", phonics: "dash 读 /dæʃ/，board 读 /bɔːrd/" }] },
    ],
    thinking: "交接操作指令：Please + 动词 + 对象。\nopen = 打开；display = 显示；check = 查看。\n先说 Please open... 让对方准备好页面，再开始逐单检查。",
    pronunciation: "dashboard 重音在第一音节：DASH-board /ˈdæʃ.bɔːrd/。\nopen 的 o 发双元音 /oʊ/。\n节奏：Please O-pen ｜ the E-vent TICK-et ｜ DASH-board.",
    quiz: [
      { q: "请打开故障单页面，怎么说？", a: "Please open the fault ticket dashboard." },
      { q: "dashboard 在日常英语中是什么意思？", a: "dashboard 原意是汽车仪表盘（显示速度、油量等）。在 IT 中借指数据总览页面，因为它像仪表盘一样集中展示关键指标。" },
    ],
  },
  {
    id: 97,
    en: "Please sort the tickets by priority.",
    cn: "请按优先级排序工单。",
    ipa: "/pliːz sɔːrt ðə ˈtɪk.ɪts baɪ praɪˈɒr.ɪ.ti/",
    tags: ["第97句", "工单排序", "★★★★"],
    when: "打开页面后，先按优先级排序，确保高优先级工单排在最前面，优先检查。",
    words: [
      { w: "sort", ipa: "/sɔːrt/", pos: "动词", cn: "排序；分类", memory: "① sort = 分类/排序（动词）；② sort by = 按...排序。\nsort by priority = 按优先级排序；sort by date = 按日期排序。", phonics: "s 读 /s/，ort 读 /ɔːrt/，整体 /sɔːrt/。", collocations: [["sort by", "按...排序"], ["sort by priority", "按优先级排序"], ["sort by date", "按日期排序"]], examples: [["Sort the list by name.", "按名称排序列表。"], ["Please sort by due date.", "请按到期日排序。"]] },
      { w: "priority", ipa: "/praɪˈɒr.ɪ.ti/", pos: "名词", cn: "优先级；优先权", memory: "① prior = 先前的/优先的；② priority = 优先权/优先级。\n数据中心工单优先级：P1（紧急）> P2（高）> P3（中）> P4（低）。", phonics: "pri 读 /praɪ/，or 读 /ɒr/，i 读 /ɪ/，ty 读 /ti/，重音在第二音节。共4个音节。", collocations: [["high priority", "高优先级"], ["low priority", "低优先级"], ["priority ticket", "优先级工单"]], examples: [["This is a high-priority ticket.", "这是高优先级工单。"], ["Sort by priority.", "按优先级排序。"]] },
    ],
    phrases: [
      { p: "sort by priority", ipa: "/sɔːrt baɪ praɪˈɒr.ɪ.ti/", cn: "按优先级排序", why: "sort by + 排序依据。交接时先按优先级排序，再按到期日排序，确保紧急工单优先检查。" },
    ],
    grammar: [
      { q: "sort by 后面可以接什么？", a: "sort by + 排序字段：\n✅ sort by priority（按优先级）\n✅ sort by due date（按到期日）\n✅ sort by status（按状态）\n✅ sort by created date（按创建日期）\n✅ sort by severity（按严重程度）" },
    ],
    pattern: "Please sort the tickets by + 排序字段",
    patternExamples: [
      { en: "Please sort the tickets by status.", cn: "请按状态排序工单。", words: [{ w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Please sort the alarms by severity.", cn: "请按严重程度排序告警。", words: [{ w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Please sort the list by date.", cn: "请按日期排序列表。", words: [] },
    ],
    thinking: "交接排序逻辑：\n① 先按 priority 排序 → 高优先级排前面\n② 再按 due date 排序 → 快到期的排前面\n③ 最后按 status 排序 → 紧急状态优先\n排序的目的是让对方按重要程度逐项检查，不遗漏关键工单。",
    pronunciation: "sort 的 or 发 /ɔːr/，带卷舌。\npriority 重音在第二音节：pri-OR-i-ty /praɪˈɒr.ɪ.ti/。\n节奏：Please SORT ｜ the TICK-ets ｜ by pri-OR-i-ty.",
    quiz: [
      { q: "请按到期时间排序工单，怎么说？", a: "Please sort the tickets by due date." },
      { q: "数据中心工单优先级一般分几级？", a: "通常4级：P1（Critical/紧急）、P2（High/高）、P3（Medium/中）、P4（Low/低）。P1 必须在最短时间内响应。" },
    ],
  },
  {
    id: 98,
    en: "Please sort the tickets by due date.",
    cn: "请按到期时间排序工单。",
    ipa: "/pliːz sɔːrt ðə ˈtɪk.ɪts baɪ djuː deɪt/",
    tags: ["第98句", "工单排序", "★★★★"],
    when: "优先级排序后，再按到期时间排序。即将到期的工单需要优先处理，避免超期。",
    words: [
      { w: "due date", ipa: "/djuː deɪt/", pos: "名词", cn: "到期日；截止日期", memory: "① due = 到期的/应付的；② date = 日期 → due date = 到期日。\n工单必须在 due date 之前完成，否则算超期（overdue）。", phonics: "due 读 /djuː/，date 读 /deɪt/。", collocations: [["due date", "到期日"], ["overdue", "超期的"], ["past due", "逾期的"]], examples: [["The due date is tomorrow.", "到期日是明天。"], ["This ticket is overdue.", "这个工单超期了。"]] },
    ],
    phrases: [
      { p: "sort by due date", ipa: "/sɔːrt baɪ djuː deɪt/", cn: "按到期日排序", why: "due date = 到期日。按到期日排序后，快到期的工单排前面，确保不会遗漏即将超期的工单。" },
    ],
    grammar: [
      { q: "due、overdue、past due 有什么区别？", a: "due = 到期的（还没到或刚好到）\noverdue = 超期的（已经过了到期日）\npast due = 逾期的（同 overdue）\n✅ The ticket is due tomorrow.（工单明天到期）\n✅ The ticket is overdue.（工单已超期）" },
    ],
    pattern: "Please sort the + 对象 + by due date",
    patternExamples: [
      { en: "Please sort the tasks by due date.", cn: "请按到期日排序任务。", words: [] },
      { en: "Please sort the contracts by due date.", cn: "请按到期日排序合同。", words: [] },
      { en: "Please sort the alarms by due date.", cn: "请按到期日排序告警。", words: [{ w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "交接时排序优先级：\n① priority（优先级）→ 重要程度\n② due date（到期日）→ 时间紧迫度\n两个维度交叉，才能判断哪些工单最需要关注：高优先级 + 即将到期 = 最紧急。",
    pronunciation: "due 读 /djuː/，不要读成 /duː/。\ndue date 两个 d 开头，快速连读：/djuː deɪt/。\n节奏：Please SORT ｜ the TICK-ets ｜ by DUE DATE.",
    quiz: [
      { q: "这个工单超期了，怎么说？", a: "This ticket is overdue." },
      { q: "为什么要按到期日排序？", a: "避免工单超期（overdue）。超期工单会影响 SLA（服务等级协议）达标率，交接时必须重点关注即将到期的工单。" },
    ],
  },
  {
    id: 99,
    en: "Let's review the high-priority tickets first.",
    cn: "我们先检查高优先级工单。",
    ipa: "/lɛts rɪˈvjuː ðə haɪ praɪˈɒr.ɪ.ti ˈtɪk.ɪts fɜːrst/",
    tags: ["第99句", "检查策略", "★★★★★"],
    when: "排序完成后，明确检查策略——从高优先级开始，确保最重要的工单优先被接班人员了解。",
    words: [
      { w: "review", ipa: "/rɪˈvjuː/", pos: "动词", cn: "检查；审查；回顾", memory: "① re = 再；② view = 看 → review = 再看一遍 = 检查/审查。\n交接中的 review = 逐项检查确认。", phonics: "re 读 /rɪ/，view 读 /vjuː/，重音在第二音节。", collocations: [["review tickets", "检查工单"], ["review alarms", "检查告警"], ["review progress", "检查进展"]], examples: [["Let's review the tickets.", "我们检查工单。"], ["Please review this alarm.", "请检查这条告警。"]] },
      { w: "high-priority", ipa: "/haɪ praɪˈɒr.ɪ.ti/", pos: "形容词", cn: "高优先级的", memory: "① high = 高的；② priority = 优先级 → high-priority = 高优先级的。\n通常用连字符连接：high-priority ticket。", phonics: "high 读 /haɪ/，priority 读 /praɪˈɒr.ɪ.ti/。", collocations: [["high-priority ticket", "高优先级工单"], ["high-priority alarm", "高优先级告警"], ["high-priority task", "高优先级任务"]], examples: [["This is a high-priority issue.", "这是高优先级问题。"], ["Focus on high-priority items.", "聚焦高优先级事项。"]] },
    ],
    phrases: [
      { p: "Let's review...first", ipa: "/lɛts rɪˈvjuː...fɜːrst/", cn: "我们先检查...", why: "Let's + 动词 + first = 我们先做...。交接中用来确定检查顺序，确保重要事项优先处理。" },
    ],
    grammar: [
      { q: "Let's review 和 Please review 有什么区别？", a: "Let's review = 我们一起检查（包含说话人和听话人）\nPlease review = 请你检查（只要求对方做）\n✅ Let's review the tickets first.（我们一起先检查工单。）\n✅ Please review this ticket.（请你检查这个工单。）\n交接时通常用 Let's，表示双方一起确认。" },
    ],
    pattern: "Let's review the + 类型 + tickets/alarms + first",
    patternExamples: [
      { en: "Let's review the critical alarms first.", cn: "我们先检查严重告警。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "critical", ipa: "/ˈkrɪtɪkəl/", cn: "严重", phonics: "crit 读 /krɪt/，ical 读 /ɪkəl/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Let's review the overdue tickets first.", cn: "我们先检查超期工单。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "Let's review the new tickets first.", cn: "我们先检查新工单。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
    ],
    thinking: "交接检查策略：先重要后一般。\n① high-priority tickets first（高优先级工单先查）\n② then medium-priority（然后中优先级）\n③ finally low-priority（最后低优先级）\n这个策略确保有限时间内最重要的事项不遗漏。",
    pronunciation: "review 重音在第二音节：re-VIEW /rɪˈvjuː/。\nfirst 的 ir 发 /ɜːr/，带卷舌。\n节奏：Let's re-VIEW ｜ the HIGH-pri-OR-i-ty ｜ TICK-ets FIRST.",
    quiz: [
      { q: "我们先检查超期工单，怎么说？", a: "Let's review the overdue tickets first." },
      { q: "Let's 和 Please 在交接中分别怎么用？", a: "Let's = 我们一起做（协作语气），适合双方共同确认的事项；Please = 请你做（指令语气），适合请对方单独操作的事项。" },
    ],
  },
  {
    id: 100,
    en: "Ticket EVT-2026-001 is still open.",
    cn: "事件单 EVT-2026-001 仍未关闭。",
    ipa: "/ˈtɪk.ɪt ˌiː.viːˈtiː twɛn.ti twɛn.ti sɪks wʌn ɪz stɪl ˈoʊ.pən/",
    tags: ["第100句", "逐单汇报", "★★★★★"],
    when: "开始逐单汇报。先报工单号和状态，这是最基本的工单交接句式。",
    words: [
      { w: "ticket", ipa: "/ˈtɪk.ɪt/", pos: "名词", cn: "工单", memory: "① ticket 原意 = 票/票据；② IT 运维中 = 工单/服务请求。\n工单编号格式通常为：类型-年份-序号，如 EVT-2026-001。", phonics: "tick 读 /tɪk/，et 读 /ɪt/，重音在第一音节。", collocations: [["event ticket", "事件单"], ["fault ticket", "故障单"], ["ticket number", "工单号"]], examples: [["Ticket EVT-001 is open.", "工单EVT-001未关闭。"], ["Please check this ticket.", "请检查这个工单。"]] },
      { w: "EVT", ipa: "/ˌiː.viːˈtiː/", pos: "缩写", cn: "事件 (Event)", memory: "EVT = Event 的缩写，用于工单编号前缀。\nEVT = 事件单；FLT = 故障单；CHG = 变更单。", phonics: "逐字母读 E-V-T。", collocations: [["EVT ticket", "事件单"], ["EVT number", "事件单号"]], examples: [["EVT-2026-001 is open.", "事件单EVT-2026-001未关闭。"], ["Check EVT-2026-005.", "检查事件单EVT-2026-005。"]] },
    ],
    phrases: [
      { p: "is still open", ipa: "/ɪz stɪl ˈoʊ.pən/", cn: "仍未关闭", why: "is + still + open = 仍未关闭。still 强调状态持续，暗示需要关注。" },
    ],
    grammar: [
      { q: "工单编号怎么读？", a: "EVT-2026-001 读作：E-V-T twenty twenty-six oh-oh-one。\n也可以逐数字读：E-V-T two-zero-two-six zero-zero-one。\n交接时通常用简化读法，双方都知道编号格式。" },
    ],
    pattern: "Ticket + 编号 + is still + 状态",
    patternExamples: [
      { en: "Ticket EVT-002 is still in progress.", cn: "工单EVT-002仍在处理中。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "Ticket FLT-003 is still open.", cn: "故障单FLT-003仍未关闭。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "Ticket CHG-001 is still pending.", cn: "变更单CHG-001仍在等待中。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
    ],
    thinking: "逐单汇报模板：Ticket + 编号 + is + 状态。\n状态选项：open / in progress / resolved / closed / waiting for...\n逐单汇报时，每单一句话，简洁高效。",
    pronunciation: "EVT 逐字母读：E-V-T /iː.viː.tiː/。\n2026 读 twenty twenty-six 或 two-zero-two-six。\n001 读 oh-oh-one 或 zero-zero-one。\n节奏：TICK-et E-V-T ｜ TWEN-ty TWEN-ty SIX ｜ OH-OH-ONE ｜ is STILL O-pen.",
    quiz: [
      { q: "工单EVT-2026-005仍在处理中，怎么说？", a: "Ticket EVT-2026-005 is still in progress." },
      { q: "EVT、FLT、CHG 分别代表什么？", a: "EVT = Event（事件单）；FLT = Fault（故障单）；CHG = Change（变更单）。这是数据中心常见的三种工单类型。" },
    ],
  },
  {
    id: 101,
    en: "Ticket EVT-2026-002 is waiting for vendor feedback.",
    cn: "事件单 EVT-2026-002 正在等待供应商反馈。",
    ipa: "/ˈtɪk.ɪt ˌiː.viːˈtiː twɛn.ti twɛn.ti sɪks tuː ɪz ˈweɪ.tɪŋ fɔːr ˈvɛn.dər ˈfiːd.bæk/",
    tags: ["第101句", "等待状态", "★★★★★"],
    when: "逐单汇报中，说明该工单当前卡在等待供应商反馈的阶段，接班人员需要跟进催促。",
    words: [
      { w: "waiting for", ipa: "/ˈweɪ.tɪŋ fɔːr/", pos: "动词短语", cn: "等待", memory: "① wait = 等待；② wait for = 等待（某人/某事）。\nis waiting for = 正在等待（现在进行时）。", phonics: "wait 读 /weɪt/，ing 读 /ɪŋ/，for 读 /fɔːr/。", collocations: [["waiting for feedback", "等待反馈"], ["waiting for parts", "等待备件"], ["waiting for approval", "等待审批"]], examples: [["We are waiting for the vendor.", "我们在等供应商。"], ["The ticket is waiting for parts.", "工单在等备件。"]] },
      { w: "vendor", ipa: "/ˈvɛn.dər/", pos: "名词", cn: "供应商；厂商", memory: "① vend = 出售；② vendor = 出售者 = 供应商。\n数据中心常见供应商：设备厂商（华为/施耐德）、空调厂商（维谛/STULZ）。", phonics: "ven 读 /vɛn/，dor 读 /dər/，重音在第一音节。", collocations: [["vendor feedback", "供应商反馈"], ["vendor support", "供应商支持"], ["vendor contract", "供应商合同"]], examples: [["Contact the vendor.", "联系供应商。"], ["The vendor is on-site.", "供应商在现场。"]] },
      { w: "feedback", ipa: "/ˈfiːd.bæk/", pos: "名词", cn: "反馈；回复", memory: "① feed = 喂/提供；② back = 回 → feedback = 回馈 = 反馈。\nwaiting for vendor feedback = 等供应商回复。", phonics: "feed 读 /fiːd/，back 读 /bæk/，重音在第一音节。", collocations: [["vendor feedback", "供应商反馈"], ["customer feedback", "客户反馈"], ["positive feedback", "正面反馈"]], examples: [["We need vendor feedback.", "我们需要供应商反馈。"], ["Any feedback from the vendor?", "供应商有反馈吗？"]] },
    ],
    phrases: [
      { p: "waiting for vendor feedback", ipa: "/ˈweɪ.tɪŋ fɔːr ˈvɛn.dər ˈfiːd.bæk/", cn: "等待供应商反馈", why: "waiting for = 等待，vendor = 供应商，feedback = 反馈。这是工单最常见的等待状态之一。" },
    ],
    grammar: [
      { q: "is waiting for 和 waits for 有什么区别？", a: "is waiting for = 正在等待（现在进行时，强调当前状态）\nwaits for = 等待（一般现在时，强调习惯/事实）\n✅ The ticket IS WAITING FOR feedback.（工单正在等反馈 → 当前状态）\n交接时用进行时，因为描述的是当前正在发生的状态。" },
    ],
    pattern: "Ticket + 编号 + is waiting for + 等待对象",
    patternExamples: [
      { en: "Ticket EVT-003 is waiting for customer approval.", cn: "工单EVT-003在等客户批准。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "Ticket EVT-004 is waiting for spare parts.", cn: "工单EVT-004在等备件。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "Ticket EVT-005 is waiting for engineering support.", cn: "工单EVT-005在等工程师支持。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }, { w: "engineering", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }, { w: "support", ipa: "/səˈpɔːrt/", cn: "支持", phonics: "sup 读 /sə/，port 读 /pɔːrt/" }] },
    ],
    thinking: "waiting for 是交接中最高频的等待状态句式。\n常见等待对象：\n① vendor feedback（供应商反馈）\n② customer confirmation（客户确认）\n③ spare parts（备件）\n④ engineering support（工程师支持）\n⑤ management approval（管理层审批）\n知道等的是什么，接班人员才能有针对性地催促。",
    pronunciation: "waiting 的 t 轻读：/ˈweɪ.tɪŋ/。\nvendor 重音在第一音节：VEN-dor /ˈvɛn.dər/。\nfeedback 重音在第一音节：FEED-back /ˈfiːd.bæk/。\n节奏：TICK-et E-V-T ｜ is WAIT-ing for ｜ VEN-dor FEED-back.",
    quiz: [
      { q: "工单EVT-006在等管理层审批，怎么说？", a: "Ticket EVT-2026-006 is waiting for management approval." },
      { q: "交接时为什么要说明等待对象？", a: "因为不同的等待对象需要不同的跟进行动。等供应商 → 催促供应商；等备件 → 查物流；等审批 → 找审批人。知道等什么，才能推进。" },
    ],
  },
  {
    id: 102,
    en: "Ticket EVT-2026-003 is waiting for customer confirmation.",
    cn: "事件单 EVT-2026-003 正在等待客户确认。",
    ipa: "/ˈtɪk.ɪt ˌiː.viːˈtiː twɛn.ti twɛn.ti sɪks θriː ɪz ˈweɪ.tɪŋ fɔːr ˈkʌs.tə.mər ˌkɒn.fərˈmeɪ.ʃən/",
    tags: ["第102句", "等待状态", "★★★★"],
    when: "继续逐单汇报。该工单等待客户确认，通常是客户需要确认问题是否已解决或确认维修方案。",
    words: [
      { w: "customer", ipa: "/ˈkʌs.tə.mər/", pos: "名词", cn: "客户", memory: "① custom = 习惯/定制；② customer = 客户/顾客。\n数据中心客户 = 租用机柜空间的企业（租户）。", phonics: "cus 读 /kʌs/，to 读 /tə/，mer 读 /mər/，重音在第一音节。", collocations: [["customer confirmation", "客户确认"], ["customer approval", "客户批准"], ["customer notification", "客户通知"]], examples: [["Notify the customer.", "通知客户。"], ["The customer confirmed the fix.", "客户确认了修复。"]] },
      { w: "confirmation", ipa: "/ˌkɒn.fərˈmeɪ.ʃən/", pos: "名词", cn: "确认；证实", memory: "① confirm = 确认（动词）；② confirmation = 确认（名词）。\nwaiting for confirmation = 等待确认。", phonics: "con 读 /kɒn/，fir 读 /fər/，ma 读 /meɪ/，tion 读 /ʃən/，重音在第三音节。共4个音节。", collocations: [["customer confirmation", "客户确认"], ["email confirmation", "邮件确认"], ["verbal confirmation", "口头确认"]], examples: [["We need customer confirmation.", "我们需要客户确认。"], ["Send a confirmation email.", "发送确认邮件。"]] },
    ],
    phrases: [
      { p: "waiting for customer confirmation", ipa: "/ˈweɪ.tɪŋ fɔːr ˈkʌs.tə.mər ˌkɒn.fərˈmeɪ.ʃən/", cn: "等待客户确认", why: "客户确认是工单关闭前的最后一步。运维团队完成修复后，需要客户确认问题已解决才能关闭工单。" },
    ],
    grammar: [
      { q: "confirmation 和 approval 有什么区别？", a: "confirmation = 确认（确认某事是真的/已完成的）\napproval = 批准（授权某人做某事）\n✅ customer confirmation = 客户确认问题已解决\n✅ customer approval = 客户批准维修方案\n确认是事后，批准是事前。" },
    ],
    pattern: "Ticket + 编号 + is waiting for customer + 动作名词",
    patternExamples: [
      { en: "Ticket EVT-003 is waiting for customer confirmation.", cn: "工单在等客户确认。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "Ticket EVT-010 is waiting for customer approval.", cn: "工单在等客户批准。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "Ticket EVT-011 is waiting for customer sign-off.", cn: "工单在等客户签收。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
    ],
    thinking: "客户相关的等待：\n① customer confirmation = 客户确认（问题解决了没？）\n② customer approval = 客户批准（可以做这个操作吗？）\n③ customer sign-off = 客户签收（正式确认完成）\n交接时区分清楚，接班人员才知道该催什么。",
    pronunciation: "customer 重音在第一音节：CUS-to-mer /ˈkʌs.tə.mər/。\nconfirmation 重音在第三音节：con-fir-MA-tion /ˌkɒn.fərˈmeɪ.ʃən/。\n节奏：TICK-et E-V-T ｜ is WAIT-ing for ｜ CUS-to-mer ｜ con-fir-MA-tion.",
    quiz: [
      { q: "工单在等客户批准，怎么说？", a: "The ticket is waiting for customer approval." },
      { q: "confirmation 和 approval 在工单流程中分别出现在哪个阶段？", a: "approval 在操作前（客户批准维修方案 → 开始维修）；confirmation 在操作后（维修完成 → 客户确认已解决 → 关闭工单）。" },
    ],
  },
  {
    id: 103,
    en: "Ticket EVT-2026-004 is waiting for spare parts.",
    cn: "事件单 EVT-2026-004 正在等待备件。",
    ipa: "/ˈtɪk.ɪt ˌiː.viːˈtiː twɛn.ti twɛn.ti sɪks fɔːr ɪz ˈweɪ.tɪŋ fɔːr speɪr pɑːrts/",
    tags: ["第103句", "等待状态", "★★★★"],
    when: "继续逐单汇报。该工单卡在等待备件，通常是因为设备故障需要更换零件，备件正在运输中。",
    words: [
      { w: "spare parts", ipa: "/speɪr pɑːrts/", pos: "名词", cn: "备件；零配件", memory: "① spare = 备用的；② parts = 零件 → spare parts = 备件。\n数据中心常见备件：硬盘、电源模块、风扇、网线、光模块。", phonics: "spare 读 /speɪr/，parts 读 /pɑːrts/。", collocations: [["spare parts", "备件"], ["spare hard drive", "备用硬盘"], ["spare power supply", "备用电源"]], examples: [["We need spare parts.", "我们需要备件。"], ["The spare parts arrived.", "备件到了。"]] },
    ],
    phrases: [
      { p: "waiting for spare parts", ipa: "/ˈweɪ.tɪŋ fɔːr speɪr pɑːrts/", cn: "等待备件", why: "设备故障需要更换零件时，如果备件库存不足或需要供应商发货，工单就会进入 waiting for spare parts 状态。" },
    ],
    grammar: [
      { q: "spare parts 和 replacement parts 有什么区别？", a: "两者几乎同义：\nspare parts = 备件（预备好的替换件）\nreplacement parts = 替换件（用于替换的零件）\n✅ waiting for spare parts（等备件）\n✅ waiting for replacement parts（等替换件）\n日常交接中 spare parts 更常用。" },
    ],
    pattern: "Ticket + 编号 + is waiting for spare parts",
    patternExamples: [
      { en: "Ticket EVT-004 is waiting for a spare hard drive.", cn: "工单在等备用硬盘。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "Ticket EVT-005 is waiting for spare power modules.", cn: "工单在等备用电源模块。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }, { w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }] },
      { en: "Ticket EVT-006 is waiting for a spare fan.", cn: "工单在等备用风扇。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
    ],
    thinking: "备件等待是数据中心工单最常见的延迟原因之一。\n交接时需要补充：\n① 什么备件？（硬盘/电源/风扇/光模块）\n② 备件在哪？（仓库有/供应商发货中/已到货）\n③ 预计什么时候到？（ETA）\n这三个信息决定工单能否推进。",
    pronunciation: "spare 的 are 发 /eɪr/，带卷舌。\nparts 的 ar 发 /ɑːr/，带卷舌。\n节奏：TICK-et E-V-T ｜ is WAIT-ing for ｜ SPARE PARTS.",
    quiz: [
      { q: "工单在等备用硬盘，怎么说？", a: "The ticket is waiting for a spare hard drive." },
      { q: "数据中心常见的备件有哪些？", a: "硬盘（hard drive）、电源模块（power supply/module）、风扇（fan）、网线（cable）、光模块（SFP/transceiver）、内存条（RAM）。" },
    ],
  },
  {
    id: 104,
    en: "Ticket EVT-2026-005 is waiting for engineering support.",
    cn: "事件单 EVT-2026-005 正在等待工程师支持。",
    ipa: "/ˈtɪk.ɪt ˌiː.viːˈtiː twɛn.ti twɛn.ti sɪks faɪv ɪz ˈweɪ.tɪŋ fɔːr ˌɛn.dʒɪˈnɪr.ɪŋ səˈpɔːrt/",
    tags: ["第104句", "等待状态", "★★★★"],
    when: "继续逐单汇报。该工单需要更高级别的工程师支持，当前值班人员无法独立解决。",
    words: [
      { w: "engineering", ipa: "/ˌɛn.dʒɪˈnɪr.ɪŋ/", pos: "名词/形容词", cn: "工程的；工程师的", memory: "① engineer = 工程师；② engineering = 工程/工程的。\nengineering support = 工程师支持（技术专家介入）。", phonics: "en 读 /ɛn/，gi 读 /dʒɪ/，neer 读 /nɪr/，ing 读 /ɪŋ/，重音在第三音节。", collocations: [["engineering support", "工程师支持"], ["engineering team", "工程团队"], ["engineering change", "工程变更"]], examples: [["We need engineering support.", "我们需要工程师支持。"], ["The engineering team is investigating.", "工程团队在调查中。"]] },
      { w: "support", ipa: "/səˈpɔːrt/", pos: "名词", cn: "支持；支援", memory: "① sup = 下面；② port = 承载 → support = 从下面支撑 = 支持。\nIT support = IT支持；engineering support = 工程师支持。", phonics: "sup 读 /sə/，port 读 /pɔːrt/，重音在第二音节。", collocations: [["engineering support", "工程师支持"], ["vendor support", "供应商支持"], ["remote support", "远程支持"]], examples: [["Request engineering support.", "请求工程师支持。"], ["Support is on the way.", "支持人员在路上。"]] },
    ],
    phrases: [
      { p: "waiting for engineering support", ipa: "/ˈweɪ.tɪŋ fɔːr ˌɛn.dʒɪˈnɪr.ɪŋ səˈpɔːrt/", cn: "等待工程师支持", why: "当问题超出值班人员能力范围时，需要 escalation 到工程师团队。engineering support 通常指 L2/L3 级别的技术专家。" },
    ],
    grammar: [
      { q: "engineering support 和 vendor support 有什么区别？", a: "engineering support = 内部工程师支持（公司自己的技术专家）\nvendor support = 供应商支持（设备厂商的技术人员）\n✅ waiting for engineering support（等内部工程师）\n✅ waiting for vendor support（等供应商）\n通常先找内部工程师，内部解决不了再找供应商。" },
    ],
    pattern: "Ticket + 编号 + is waiting for + 支持类型 + support",
    patternExamples: [
      { en: "Ticket EVT-005 is waiting for engineering support.", cn: "工单在等工程师支持。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }, { w: "engineering", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }, { w: "support", ipa: "/səˈpɔːrt/", cn: "支持", phonics: "sup 读 /sə/，port 读 /pɔːrt/" }] },
      { en: "Ticket EVT-006 is waiting for vendor support.", cn: "工单在等供应商支持。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }, { w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }, { w: "support", ipa: "/səˈpɔːrt/", cn: "支持", phonics: "sup 读 /sə/，port 读 /pɔːrt/" }] },
      { en: "Ticket EVT-007 is waiting for remote support.", cn: "工单在等远程支持。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }, { w: "support", ipa: "/səˈpɔːrt/", cn: "支持", phonics: "sup 读 /sə/，port 读 /pɔːrt/" }] },
    ],
    thinking: "支持层级：\nL1 = 值班人员（一线运维）\nL2 = 内部工程师（技术专家）\nL3 = 高级工程师/架构师\nVendor = 设备供应商\n交接时说明等什么级别的支持，对方才知道该找谁推进。",
    pronunciation: "engineering 重音在第三音节：en-gi-NEER-ing /ˌɛn.dʒɪˈnɪr.ɪŋ/。\nsupport 重音在第二音节：sup-PORT /səˈpɔːrt/。\n节奏：TICK-et E-V-T ｜ is WAIT-ing for ｜ en-gi-NEER-ing ｜ sup-PORT.",
    quiz: [
      { q: "工单在等供应商支持，怎么说？", a: "The ticket is waiting for vendor support." },
      { q: "L1、L2、L3 支持分别是什么？", a: "L1 = 一线值班人员（日常监控和基础处理）；L2 = 内部工程师（复杂问题排查）；L3 = 高级专家（架构级问题）。逐级升级叫 escalation。" },
    ],
  },
  {
    id: 105,
    en: "Ticket EVT-2026-006 has been resolved.",
    cn: "事件单 EVT-2026-006 已经解决。",
    ipa: "/ˈtɪk.ɪt ˌiː.viːˈtiː twɛn.ti twɛn.ti sɪks sɪks hæz bɪn rɪˈzɒlvd/",
    tags: ["第105句", "工单状态", "★★★★★"],
    when: "继续逐单汇报。该工单已解决，但可能还未正式关闭（需要客户确认后才能关闭）。",
    words: [
      { w: "resolved", ipa: "/rɪˈzɒlvd/", pos: "动词(过去分词)", cn: "已解决的", memory: "① re = 再；② solve = 解决 → resolve = 解决（更正式）。\nresolved = 已解决的。工单状态：open → in progress → resolved → closed。", phonics: "re 读 /rɪ/，solve 读 /zɒlv/，ed 读 /d/，重音在第二音节。", collocations: [["resolved ticket", "已解决工单"], ["issue resolved", "问题已解决"], ["resolve a problem", "解决问题"]], examples: [["The ticket has been resolved.", "工单已解决。"], ["The issue was resolved yesterday.", "问题昨天解决了。"]] },
    ],
    phrases: [
      { p: "has been resolved", ipa: "/hæz bɪn rɪˈzɒlvd/", cn: "已经被解决", why: "has been + 过去分词 = 现在完成时被动语态。表示问题已经被解决，对现在有影响（可以进入关闭流程了）。" },
    ],
    grammar: [
      { q: "resolved 和 closed 有什么区别？", a: "resolved = 已解决（问题修好了，但工单还没正式关闭）\nclosed = 已关闭（工单流程全部完成）\n工单生命周期：open → in progress → RESOLVED → 客户确认 → CLOSED\nresolved 是技术层面解决，closed 是流程层面完结。" },
    ],
    pattern: "Ticket + 编号 + has been resolved",
    patternExamples: [
      { en: "Ticket EVT-006 has been resolved.", cn: "工单EVT-006已解决。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "Ticket FLT-001 has been resolved.", cn: "故障单FLT-001已解决。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "All tickets have been resolved.", cn: "所有工单都已解决。", words: [{ w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
    ],
    thinking: "resolved vs closed 是交接中必须区分的两个状态：\nresolved = 技术解决（运维团队确认问题修好了）\nclosed = 流程关闭（客户确认 + 文档归档 + 正式关闭）\n交接时如果只说 resolved，对方知道还需要跟进客户确认才能 close。",
    pronunciation: "resolved 的 solve 读 /zɒlv/，v 咬下唇，ed 读 /d/。\nhas been 快速连读：/hæz bɪn/。\n节奏：TICK-et E-V-T ｜ has been re-SOLVED.",
    quiz: [
      { q: "工单EVT-2026-007已解决，怎么说？", a: "Ticket EVT-2026-007 has been resolved." },
      { q: "resolved 的工单为什么还没 closed？", a: "因为 resolved 只是技术解决，还需要：① 客户确认问题已解决；② 补充处理记录；③ 正式关闭工单。交接时 resolved 的工单需要提醒接班人员跟进关闭流程。" },
    ],
  },
];

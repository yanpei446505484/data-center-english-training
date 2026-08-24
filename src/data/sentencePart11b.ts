// EXPORTS: MOCK_SENTENCES_PART11B

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART11B: ISentence[] = [
  {
    id: 326,
    en: "Filter the critical alarms only.",
    cn: "只显示严重告警。",
    ipa: "/ˈfɪl.tər ðə ˈkrɪt.ɪ.kəl əˈlɑːrmz ˈoʊn.li/",
    tags: ["第326句", "BMS告警筛选", "★★★★★"],
    when: "进入BMS告警管理页面后，第一步通常是筛选严重告警，快速聚焦需要优先处理的问题。",
    words: [
      { w: "filter", ipa: "/ˈfɪl.tər/", pos: "动词", cn: "筛选；过滤", memory: "① filter = 过滤器（名词）/ 过滤（动词）。\n② BMS 语境中 filter = 按条件筛选显示，隐藏不符合条件的条目。\n对比：sort = 排序（改变顺序），filter = 筛选（改变显示范围）。", phonics: "fil 读 /fɪl/，ter 读 /tər/，重音在第一音节。", collocations: [["filter alarms", "筛选告警"], ["filter by severity", "按严重等级筛选"], ["filter results", "筛选结果"]], examples: [["Filter the active alarms.", "筛选活动告警。"], ["Please filter by building.", "请按楼栋筛选。"]] },
      { w: "critical", ipa: "/ˈkrɪt.ɪ.kəl/", pos: "形容词", cn: "严重的；关键的", memory: "① critic = 批评家；② critical = 批评的 / 严重的 / 关键的。\nBMS 告警等级：Critical（严重）> Warning（警告）> Info（信息）。\nCritical 告警意味着设备故障或系统中断风险，必须立即处理。", phonics: "crit 读 /krɪt/，i 读 /ɪ/，cal 读 /kəl/，重音在第一音节。", collocations: [["critical alarm", "严重告警"], ["critical issue", "严重问题"], ["critical system", "关键系统"]], examples: [["There are two critical alarms.", "有两个严重告警。"], ["This is a critical failure.", "这是一个严重故障。"]] },
    ],
    phrases: [
      { p: "filter the critical alarms only", ipa: "/ˈfɪl.tər ðə ˈkrɪt.ɪ.kəl əˈlɑːrmz ˈoʊn.li/", cn: "只显示严重告警", why: "filter + 条件 + only = 只显示满足条件的。only 放在末尾强调'仅此一项'，排除其他等级的告警。" },
    ],
    grammar: [
      { q: "filter 和 show 有什么区别？", a: "filter = 筛选（从全部中按条件过滤，隐含'隐藏其他'）\nshow = 显示（展示某类内容，不强调隐藏其他）\n✅ Filter the critical alarms only.（只显示严重告警 → 隐藏 Warning 和 Info）\n✅ Show the critical alarms.（显示严重告警 → 也可能同时显示其他）\nBMS 操作中 filter 更精确，表示'只看这个等级'。" },
    ],
    pattern: "Filter the + 条件 + alarms + only",
    patternExamples: [
      { en: "Filter the warning alarms only.", cn: "只显示警告告警。", words: [{ w: "filter", ipa: "/ˈfɪltər/", cn: "过滤器", phonics: "fil 读 /fɪl/，ter 读 /tər/" }, { w: "warning", ipa: "/ˈwɔːrnɪŋ/", cn: "警告", phonics: "warn 读 /wɔːrn/，ing 读 /ɪŋ/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Filter the active alarms only.", cn: "只显示活动告警。", words: [{ w: "filter", ipa: "/ˈfɪltər/", cn: "过滤器", phonics: "fil 读 /fɪl/，ter 读 /tər/" }, { w: "active", ipa: "/ˈæktɪv/", cn: "活动", phonics: "act 读 /ækt/，ive 读 /ɪv/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Filter today's alarms only.", cn: "只显示今天的告警。", words: [{ w: "filter", ipa: "/ˈfɪltər/", cn: "过滤器", phonics: "fil 读 /fɪl/，ter 读 /tər/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "BMS 告警筛选是高效交接的第一步。\n筛选逻辑：① 按等级（Critical / Warning / Info）→ ② 按状态（Active / Cleared）→ ③ 按时间（Today / Last 24h / This Week）→ ④ 按确认状态（Acknowledged / Unacknowledged）。\n交接时先 filter critical，快速确认有没有严重问题需要立即处理。",
    pronunciation: "filter 的 i 读短音 /ɪ/，不是 /aɪ/。\ncritical 的 i 也读短音 /ɪ/：/ˈkrɪt.ɪ.kəl/。\n节奏：FIL-ter ｜ the CRIT-i-cal ｜ ALARMS ｜ ON-ly.",
    quiz: [
      { q: "只显示警告告警，怎么说？", a: "Filter the warning alarms only." },
      { q: "filter 和 sort 在 BMS 操作中有什么区别？", a: "filter = 筛选（按条件过滤，隐藏不满足条件的）；sort = 排序（改变显示顺序，不隐藏任何条目）。✅ Filter the critical alarms only.（只显示严重告警）；✅ Sort by severity.（按严重等级排序，所有告警仍然显示）。" },
    ],
  },
  {
    id: 327,
    en: "Show all active alarms.",
    cn: "显示所有活动告警。",
    ipa: "/ʃoʊ ɔːl ˈæk.tɪv əˈlɑːrmz/",
    tags: ["第327句", "BMS告警筛选", "★★★★★"],
    when: "筛选完严重告警后，切换到查看所有仍在活动的告警（未恢复的），了解当前所有需要关注的问题。",
    words: [
      { w: "active", ipa: "/ˈæk.tɪv/", pos: "形容词", cn: "活动的；未恢复的", memory: "① act = 行动；② active = 活跃的/进行中的。\nBMS 告警状态：active（活动中/未恢复）vs cleared（已恢复/已清除）。\nactive alarm = 故障仍在持续，需要处理。", phonics: "ac 读 /æk/，tive 读 /tɪv/，重音在第一音节。", collocations: [["active alarm", "活动告警"], ["active fault", "活动故障"], ["active issue", "活动问题"]], examples: [["How many active alarms are there?", "有多少活动告警？"], ["This alarm is still active.", "这个告警仍未恢复。"]] },
    ],
    phrases: [
      { p: "all active alarms", ipa: "/ɔːl ˈæk.tɪv əˈlɑːrmz/", cn: "所有活动告警", why: "all + active + alarms = 所有未恢复的告警。交接时需要看到全部活动告警，评估整体系统健康度。" },
    ],
    grammar: [
      { q: "active 和 cleared 在 BMS 中怎么区分？", a: "active = 活动中/未恢复（故障仍在持续，需要处理）\ncleared = 已清除/已恢复（故障已自动或手动恢复）\n✅ Show all active alarms.（显示所有活动告警 → 当前需要关注的）\n✅ Show all cleared alarms.（显示所有已恢复告警 → 历史参考）\n交接时先看 active（现在的问题），再看 cleared（过去的问题）。" },
    ],
    pattern: "Show all + 状态 + alarms",
    patternExamples: [
      { en: "Show all cleared alarms.", cn: "显示所有已恢复告警。", words: [{ w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Show all acknowledged alarms.", cn: "显示所有已确认告警。", words: [{ w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Show all unacknowledged alarms.", cn: "显示所有未确认告警。", words: [{ w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "BMS 告警状态矩阵：\n| 维度 | 状态A | 状态B |\n|---|---|---|\n| 故障状态 | active（活动） | cleared（已恢复） |\n| 确认状态 | acknowledged（已确认） | unacknowledged（未确认） |\n交接时优先看：active + unacknowledged（未恢复且未确认 = 最需要关注）。",
    pronunciation: "active 的 a 读 /æ/，不是 /eɪ/。\nalarms 的 ar 读 /ɑːr/，ms 轻声。\n节奏：SHOW ALL ｜ AC-tive ｜ ALARMS.",
    quiz: [
      { q: "显示所有已恢复告警，怎么说？", a: "Show all cleared alarms." },
      { q: "交接时应该先看 active 还是 cleared？", a: "先看 active（活动告警），因为 active 表示故障仍在持续，需要立即关注和处理。cleared（已恢复）是历史信息，作为参考。交接顺序：active + critical → active + unacknowledged → cleared（历史趋势）。" },
    ],
  },
  {
    id: 328,
    en: "Show today's alarms.",
    cn: "显示今天的告警。",
    ipa: "/ʃoʊ təˈdeɪz əˈlɑːrmz/",
    tags: ["第328句", "BMS时间筛选", "★★★★"],
    when: "查看今天一天内发生的所有告警（包括已恢复的），了解本日的告警频次和模式。",
    words: [
      { w: "today's", ipa: "/təˈdeɪz/", pos: "名词所有格", cn: "今天的", memory: "① today = 今天；② today's = 今天的（所有格）。\nBMS 中常用时间筛选：today's（今天的）、this week's（本周的）、last 24 hours（过去24小时）。", phonics: "to 读 /tə/，day 读 /ˈdeɪ/，s 读 /z/。", collocations: [["today's alarms", "今天的告警"], ["today's events", "今天的事件"], ["today's report", "今天的报表"]], examples: [["Show today's events.", "显示今天的事件。"], ["How many alarms were there today?", "今天有多少告警？"]] },
    ],
    phrases: [
      { p: "today's alarms", ipa: "/təˈdeɪz əˈlɑːrmz/", cn: "今天的告警", why: "today's + 名词 = 今天的…。时间所有格简洁地限定范围，不需要 from…to… 的复杂表达。" },
    ],
    grammar: [
      { q: "today's alarms 和 alarms from today 有区别吗？", a: "意思相同，但 today's 更简洁：\n✅ Show today's alarms.（显示今天的告警 → 简洁自然）\n✅ Show alarms from today.（显示来自今天的告警 → 正确但稍冗长）\n口语和 BMS 操作中优先用 today's，更快更直接。" },
    ],
    pattern: "Show + 时间范围 + alarms",
    patternExamples: [
      { en: "Show this week's alarms.", cn: "显示本周的告警。", words: [{ w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Show yesterday's alarms.", cn: "显示昨天的告警。", words: [{ w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Show the last 24 hours' alarms.", cn: "显示过去24小时的告警。", words: [{ w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "BMS 时间筛选层级：\n① today's alarms（今天 → 最常用，交接必看）\n② this week's alarms（本周 → 趋势分析）\n③ last 24 hours（过去24小时 → 跨班次回顾）\n④ custom range（自定义范围 → 深度排查）\n交接时主要用 today's，快速回顾本日告警全貌。",
    pronunciation: "today's 的 s 读 /z/，不是 /s/。\n节奏：SHOW ｜ to-DAY'S ｜ ALARMS.",
    quiz: [
      { q: "显示本周的告警，怎么说？", a: "Show this week's alarms." },
      { q: "交接时为什么常看 today's alarms？", a: "因为交接发生在班次切换时，需要回顾本日（或本班次）发生的所有告警，包括已恢复的。today's alarms 能让你了解：① 今天发生了多少次告警 ② 哪些告警反复触发 ③ 哪些已经恢复、哪些仍在活动。" },
    ],
  },
  {
    id: 329,
    en: "Show acknowledged alarms.",
    cn: "显示已经确认的告警。",
    ipa: "/ʃoʊ əkˈnɒl.ɪdʒd əˈlɑːrmz/",
    tags: ["第329句", "BMS确认状态", "★★★★"],
    when: "查看已被操作员确认过的告警，了解哪些告警已经有人在关注和处理。",
    words: [
      { w: "acknowledged", ipa: "/əkˈnɒl.ɪdʒd/", pos: "形容词(过去分词)", cn: "已确认的", memory: "① acknowledge = 确认/承认（操作员点击'确认'按钮，表示'我知道了'）。\n② acknowledged = 已确认的（过去分词作形容词）。\nBMS 中确认告警 ≠ 解决告警，只是表示'有人看到了'。", phonics: "ac 读 /ək/，know 读 /nɒl/，ledged 读 /ɪdʒd/，重音在第二音节。注意 k 和 n 连读。", collocations: [["acknowledged alarm", "已确认告警"], ["acknowledge the alarm", "确认告警"], ["unacknowledged alarm", "未确认告警"]], examples: [["Please acknowledge this alarm.", "请确认这个告警。"], ["All critical alarms have been acknowledged.", "所有严重告警已确认。"]] },
    ],
    phrases: [
      { p: "acknowledged alarms", ipa: "/əkˈnɒl.ɪdʒd əˈlɑːrmz/", cn: "已确认的告警", why: "acknowledged 作前置定语，表示'已被操作员确认的'。交接时查看已确认告警，了解上一班的处理进度。" },
    ],
    grammar: [
      { q: "acknowledge 和 resolve 在 BMS 中有什么区别？", a: "acknowledge = 确认（点击按钮表示'我看到了'，告警仍然 active）\nresolve = 解决（故障已修复，告警变为 cleared）\n✅ Show acknowledged alarms.（显示已确认但未解决的告警）\n✅ Show resolved alarms.（显示已解决的告警）\n交接流程：unacknowledged alarms（没人管的）→ acknowledged alarms（有人在管的）→ resolved alarms（已完成的）。" },
    ],
    pattern: "Show + 确认状态 + alarms",
    patternExamples: [
      { en: "Show unacknowledged alarms.", cn: "显示未确认告警。", words: [{ w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Show acknowledged critical alarms.", cn: "显示已确认的严重告警。", words: [{ w: "critical", ipa: "/ˈkrɪtɪkəl/", cn: "严重", phonics: "crit 读 /krɪt/，ical 读 /ɪkəl/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Show all acknowledged alarms from today.", cn: "显示今天所有已确认告警。", words: [{ w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "告警确认状态是交接的关键维度：\n① unacknowledged = 没人确认 → 可能是新发生的，需要立即关注\n② acknowledged = 已确认 → 有人知道了，但要确认是否在跟进\n③ cleared/resolved = 已恢复 → 作为历史记录\n交接时重点看 unacknowledged，然后确认 acknowledged 的跟进状态。",
    pronunciation: "acknowledged 是 BMS 中最难读的单词之一：/əkˈnɒl.ɪdʒd/。\n注意：ac-know-ledge-d，四个音节，k 和 n 连读。\n节奏：SHOW ｜ ac-KNOW-ledged ｜ ALARMS.",
    quiz: [
      { q: "显示未确认告警，怎么说？", a: "Show unacknowledged alarms." },
      { q: "确认告警（acknowledge）等于解决告警吗？", a: "不等于。acknowledge = 确认（'我看到了，我知道了'），告警仍然是 active 状态。resolve / clear = 解决（故障已修复），告警变为 cleared 状态。交接时看到 acknowledged 的告警，还需要确认'是否有人在跟进处理'。" },
    ],
  },
  {
    id: 330,
    en: "Show unacknowledged alarms.",
    cn: "显示未确认告警。",
    ipa: "/ʃoʊ ˌʌn.əkˈnɒl.ɪdʒd əˈlɑːrmz/",
    tags: ["第330句", "BMS确认状态", "★★★★★"],
    when: "查看还没有被任何人确认的告警——这些是最需要关注的，因为可能没有人知道它们的存在。",
    words: [
      { w: "unacknowledged", ipa: "/ˌʌn.əkˈnɒl.ɪdʒd/", pos: "形容词", cn: "未确认的", memory: "① un- = 不/未（否定前缀）；② acknowledged = 已确认的。\nunacknowledged = 未确认的 = 没有人点击过'确认'按钮。\nunacknowledged alarm 是交接中最需要优先检查的告警类型。", phonics: "un 读 /ʌn/，ac 读 /ək/，know 读 /nɒl/，ledged 读 /ɪdʒd/。五个音节，重音在第三音节。", collocations: [["unacknowledged alarm", "未确认告警"], ["unacknowledged event", "未确认事件"], ["unacknowledged alert", "未确认警报"]], examples: [["There are three unacknowledged alarms.", "有三个未确认告警。"], ["Please check all unacknowledged alarms.", "请检查所有未确认告警。"]] },
    ],
    phrases: [
      { p: "unacknowledged alarms", ipa: "/ˌʌn.əkˈnɒl.ɪdʒd əˈlɑːrmz/", cn: "未确认告警", why: "un- + acknowledged = 未确认的。交接时 unacknowledged alarms 意味着上一班可能没有注意到这些告警，需要接班人立即关注。" },
    ],
    grammar: [
      { q: "unacknowledged 和 new 告警有什么区别？", a: "unacknowledged = 未被确认（可能已经存在很久，只是没人点确认）\nnew = 新发生的（刚刚触发，可能还没来得及确认）\n✅ Show unacknowledged alarms.（所有未确认的 → 可能是新的也可能是旧的）\n✅ Show new alarms.（新发生的 → 可能已确认也可能未确认）\n交接时 unacknowledged 更重要，因为它涵盖了'被遗漏的告警'。" },
    ],
    pattern: "Show + unacknowledged + 名词",
    patternExamples: [
      { en: "Show unacknowledged events.", cn: "显示未确认事件。", words: [] },
      { en: "Show unacknowledged critical alarms.", cn: "显示未确认的严重告警。", words: [{ w: "critical", ipa: "/ˈkrɪtɪkəl/", cn: "严重", phonics: "crit 读 /krɪt/，ical 读 /ɪkəl/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Show all unacknowledged alarms from the night shift.", cn: "显示夜班所有未确认告警。", words: [{ w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }] },
    ],
    thinking: "交接检查告警的优先级排序：\n① unacknowledged + critical（未确认的严重告警 → 最高优先）\n② unacknowledged + active（未确认的活动告警 → 高优先）\n③ acknowledged + active（已确认但仍活动 → 确认跟进状态）\n④ cleared（已恢复 → 历史参考）\n这个优先级适用于所有交接场景。",
    pronunciation: "unacknowledged 有五个音节：un-ac-know-ledged。\n重音在第三音节 know 上：/ˌʌn.əkˈnɒl.ɪdʒd/。\n节奏：SHOW ｜ un-ac-KNOW-ledged ｜ ALARMS.",
    quiz: [
      { q: "有两个未确认的严重告警，怎么说？", a: "There are two unacknowledged critical alarms." },
      { q: "交接时应该优先看哪种告警？", a: "优先看 unacknowledged + critical（未确认的严重告警），因为这意味着：① 严重告警 = 可能影响系统运行 ② 未确认 = 上一班可能没有注意到。这是最需要立即关注和行动的类型。" },
    ],
  },
  {
    id: 331,
    en: "Sort by alarm time.",
    cn: "按告警时间排序。",
    ipa: "/sɔːrt baɪ əˈlɑːrm taɪm/",
    tags: ["第331句", "BMS告警排序", "★★★★"],
    when: "查看告警列表时，按时间排序可以看到告警发生的先后顺序，帮助识别故障的时间线和关联性。",
    words: [
      { w: "sort", ipa: "/sɔːrt/", pos: "动词", cn: "排序", memory: "① sort = 分类/排序（动词）；② 种类/类型（名词）。\nBMS 中 sort = 按某个字段排列列表顺序。\n常见排序字段：alarm time（告警时间）、severity（严重等级）、source（来源设备）。", phonics: "s 读 /s/，or 读 /ɔːr/，t 读 /t/。注意 or 读长音。", collocations: [["sort by time", "按时间排序"], ["sort by severity", "按严重等级排序"], ["sort order", "排序方式"]], examples: [["Sort by severity.", "按严重等级排序。"], ["Sort in descending order.", "按降序排列。"]] },
    ],
    phrases: [
      { p: "sort by alarm time", ipa: "/sɔːrt baɪ əˈlɑːrm taɪm/", cn: "按告警时间排序", why: "sort by + 字段名 = 按…排序。alarm time 是排序的键值，默认通常为降序（最新的在前）。" },
    ],
    grammar: [
      { q: "sort by 和 filter by 有什么区别？", a: "sort by = 按…排序（改变显示顺序，所有条目仍然可见）\nfilter by = 按…筛选（只显示满足条件的，隐藏其他）\n✅ Sort by alarm time.（按时间排序 → 所有告警都在，只是换了顺序）\n✅ Filter by alarm time.（按时间筛选 → 只显示某个时间段的告警）\n交接时经常先 filter（缩小范围），再 sort（排列顺序）。" },
    ],
    pattern: "Sort by + 排序字段",
    patternExamples: [
      { en: "Sort by severity.", cn: "按严重等级排序。", words: [] },
      { en: "Sort by source.", cn: "按来源设备排序。", words: [] },
      { en: "Sort by status.", cn: "按状态排序。", words: [{ w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
    ],
    thinking: "BMS 告警排序常用字段：\n① alarm time（时间）→ 查看故障时间线，识别关联故障\n② severity（严重等级）→ 优先处理 Critical\n③ source（来源设备）→ 查看某个设备的所有告警\n④ status（状态）→ 区分 active / cleared\n交接时常用组合：先 filter critical → 再 sort by time → 看严重告警的时间线。",
    pronunciation: "sort 的 or 读 /ɔːr/，不是 /ɑːr/。\n节奏：SORT ｜ by ALARM TIME.",
    quiz: [
      { q: "按严重等级排序，怎么说？", a: "Sort by severity." },
      { q: "sort 和 filter 的区别是什么？", a: "sort = 排序（改变顺序，不改变显示范围）；filter = 筛选（改变显示范围，隐藏不满足条件的）。交接时常用组合：先 filter critical（只看严重告警），再 sort by time（按时间排列），快速了解严重告警的时间线。" },
    ],
  },
  {
    id: 332,
    en: "Sort by severity.",
    cn: "按严重等级排序。",
    ipa: "/sɔːrt baɪ sɪˈvɛr.ɪ.ti/",
    tags: ["第332句", "BMS告警排序", "★★★★★"],
    when: "按严重等级排序后，Critical 告警排在最前面，可以优先处理最严重的问题。",
    words: [
      { w: "severity", ipa: "/sɪˈvɛr.ɪ.ti/", pos: "名词", cn: "严重等级；严重性", memory: "① severe = 严重的；② severity = 严重性/严重等级。\nBMS 告警等级：Critical（严重）> Warning（警告）> Info（信息）。\nsort by severity 默认 Critical 排最前。", phonics: "se 读 /sɪ/，ver 读 /vɛr/，i 读 /ɪ/，ty 读 /ti/。重音在第二音节。", collocations: [["sort by severity", "按严重等级排序"], ["severity level", "严重等级"], ["severity classification", "严重等级分类"]], examples: [["What is the severity of this alarm?", "这个告警的严重等级是什么？"], ["The severity levels are Critical, Warning, and Info.", "严重等级分为严重、警告和信息。"]] },
    ],
    phrases: [
      { p: "sort by severity", ipa: "/sɔːrt baɪ sɪˈvɛr.ɪ.ti/", cn: "按严重等级排序", why: "sort by severity 是交接中最常用的排序方式，确保 Critical 告警排在最前面，优先被看到和处理。" },
    ],
    grammar: [
      { q: "severity 和 priority 在 BMS 中有什么区别？", a: "severity = 严重等级（告警对系统的影响程度：Critical / Warning / Info）\npriority = 优先级（处理的紧迫程度：P1 / P2 / P3 / P4）\n✅ Sort by severity.（按严重等级排 → Critical 在前）\n✅ Sort by priority.（按处理优先级排 → P1 在前）\n通常 Critical 告警 = P1 优先级，但不总是如此（比如一个 Critical 告警可能已有备件等待，优先级降为 P2）。" },
    ],
    pattern: "Sort by + severity / priority / time",
    patternExamples: [
      { en: "Sort by severity in ascending order.", cn: "按严重等级升序排列。", words: [] },
      { en: "Sort by priority.", cn: "按优先级排序。", words: [] },
      { en: "Sort by alarm count.", cn: "按告警数量排序。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "BMS 排序最佳实践：\n① 日常交接：sort by severity（看最严重的）\n② 故障排查：sort by time（看时间线）\n③ 设备巡检：sort by source（按设备分组）\n④ 交班前汇总：sort by status（区分 active / cleared）\n不同场景用不同排序字段，提高效率。",
    pronunciation: "severity 有四个音节：se-ver-i-ty，重音在第二音节：/sɪˈvɛr.ɪ.ti/。\n节奏：SORT ｜ by se-VER-i-ty.",
    quiz: [
      { q: "按优先级排序，怎么说？", a: "Sort by priority." },
      { q: "severity 和 priority 有什么区别？", a: "severity = 严重等级（告警本身的影响程度：Critical/Warning/Info）；priority = 处理优先级（处理紧迫程度：P1/P2/P3/P4）。一个 Critical 告警通常是 P1，但如果已有备件等待，可能降为 P2。交接时先 sort by severity 看影响面，再结合 priority 决定处理顺序。" },
    ],
  },
  {
    id: 333,
    en: "Please acknowledge this alarm.",
    cn: "请确认这个告警。",
    ipa: "/pliːz əkˈnɒl.ɪdʒ ðɪs əˈlɑːrm/",
    tags: ["第333句", "BMS告警操作", "★★★★★"],
    when: "发现未确认的告警后，执行确认操作，表示'我已看到并知晓此告警'。这是 BMS 操作中最基本的动作。",
    words: [
      { w: "acknowledge", ipa: "/əkˈnɒl.ɪdʒ/", pos: "动词", cn: "确认（告警）", memory: "① acknowledge = 承认/确认/告知收到。\n② BMS 语境 = 点击'确认'按钮，表示操作员已知晓此告警。\nacknowledge ≠ fix（修复），只是'标记为已读'。", phonics: "ac 读 /ək/，know 读 /nɒl/，ledge 读 /ɪdʒ/。三个音节，重音在第二音节。", collocations: [["acknowledge alarm", "确认告警"], ["acknowledge event", "确认事件"], ["auto-acknowledge", "自动确认"]], examples: [["Please acknowledge all critical alarms.", "请确认所有严重告警。"], ["This alarm has not been acknowledged.", "这个告警还没有被确认。"]] },
    ],
    phrases: [
      { p: "acknowledge this alarm", ipa: "/əkˈnɒl.ɪdʒ ðɪs əˈlɑːrm/", cn: "确认这个告警", why: "acknowledge + 告警对象 = 确认某个告警。this alarm 指当前选中/指向的告警。" },
    ],
    grammar: [
      { q: "acknowledge 后面可以接哪些对象？", a: "acknowledge 后面可以接：\n① this alarm（这个告警 → 单个）\n② all alarms（所有告警 → 批量）\n③ all critical alarms（所有严重告警 → 按条件批量）\n④ the alarm from UPS-01（来自UPS-01的告警 → 指定来源）\n交接时通常批量确认：Please acknowledge all unacknowledged alarms." },
    ],
    pattern: "Please acknowledge + 告警对象",
    patternExamples: [
      { en: "Please acknowledge all unacknowledged alarms.", cn: "请确认所有未确认告警。", words: [{ w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Please acknowledge the critical alarms.", cn: "请确认严重告警。", words: [{ w: "critical", ipa: "/ˈkrɪtɪkəl/", cn: "严重", phonics: "crit 读 /krɪt/，ical 读 /ɪkəl/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Please acknowledge alarm ID 2847.", cn: "请确认告警ID 2847。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "BMS 告警操作三部曲：\n① acknowledge（确认）→ '我知道了'\n② silence / mute（静音）→ '别再响了'（暂时关闭声音告警）\n③ reset / clear（复位）→ '问题已解决'（告警状态变为 cleared）\n交接时必须先 acknowledge 所有未确认告警，确保'有人在关注'。",
    pronunciation: "acknowledge 是 BMS 高频词，必须熟练：/əkˈnɒl.ɪdʒ/。\n注意 k 和 n 连读，不要读成 /ək.nɒl.ɪdʒ/。\n节奏：Please ac-KNOW-ledge ｜ this ALARM.",
    quiz: [
      { q: "请确认所有未确认告警，怎么说？", a: "Please acknowledge all unacknowledged alarms." },
      { q: "acknowledge 告警后，告警就解决了吗？", a: "没有。acknowledge 只是'标记为已读'，表示操作员已知晓此告警。告警仍然是 active 状态。解决告警需要实际修复故障，然后告警会自动或手动变为 cleared。acknowledge 是第一步，不是最后一步。" },
    ],
  },
  {
    id: 334,
    en: "Please silence this alarm.",
    cn: "请将这个告警静音。",
    ipa: "/pliːz ˈsaɪ.ləns ðɪs əˈlɑːrm/",
    tags: ["第334句", "BMS告警操作", "★★★★"],
    when: "告警声音持续响起影响沟通时，执行静音操作暂时关闭声音，但告警状态不变。",
    words: [
      { w: "silence", ipa: "/ˈsaɪ.ləns/", pos: "动词", cn: "静音；消除声音", memory: "① silence = 沉默/安静（名词）；② silence = 使安静/静音（动词）。\nBMS 语境 = 关闭告警的声音提示，但告警仍在活动状态。\nsilence ≠ acknowledge（静音 ≠ 确认），两者需要分别操作。", phonics: "si 读 /saɪ/，lence 读 /ləns/。注意 i 读长音 /aɪ/。", collocations: [["silence alarm", "静音告警"], ["silence the buzzer", "静音蜂鸣器"], ["auto-silence", "自动静音"]], examples: [["Please silence the buzzer.", "请静音蜂鸣器。"], ["The alarm has been silenced.", "告警已静音。"]] },
    ],
    phrases: [
      { p: "silence this alarm", ipa: "/ˈsaɪ.ləns ðɪs əˈlɑːrm/", cn: "将这个告警静音", why: "silence + 告警对象 = 将某告警静音。静音后告警仍然 active，只是不再发出声音。" },
    ],
    grammar: [
      { q: "silence 和 mute 在 BMS 中有什么区别？", a: "两者意思相近，但用法略有不同：\nsilence = 静音（更常用，正式 BMS 术语）\nmute = 消音（更口语化，部分 BMS 系统使用）\n✅ Please silence this alarm.（请静音这个告警 → 标准用语）\n✅ Please mute the alarm sound.（请消除告警声音 → 也能理解）\n建议使用 silence，因为它是大多数 BMS 系统的标准按钮标签。" },
    ],
    pattern: "Please silence + 告警对象",
    patternExamples: [
      { en: "Please silence all alarms.", cn: "请将所有告警静音。", words: [{ w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Please silence the buzzer.", cn: "请静音蜂鸣器。", words: [] },
      { en: "Please silence the audible alarm.", cn: "请将声音告警静音。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "告警声音管理：\n① 告警声音响起 → 说明有新的或未确认的告警\n② silence（静音）→ 暂时关闭声音，方便沟通\n③ acknowledge（确认）→ 标记为'已知晓'\n④ 两个操作都要做：先 acknowledge，再 silence\n注意：silence 不等于解决问题，只是关闭声音。",
    pronunciation: "silence 的 i 读长音 /aɪ/：/ˈsaɪ.ləns/。\n不要读成 /ˈsɪ.ləns/。\n节奏：Please SI-lence ｜ this ALARM.",
    quiz: [
      { q: "请将所有告警静音，怎么说？", a: "Please silence all alarms." },
      { q: "silence 和 acknowledge 的区别是什么？", a: "silence = 静音（关闭告警声音，但告警状态不变）；acknowledge = 确认（标记为'已知晓'，告警状态也不变）。两个操作独立进行，交接时通常需要：① 先 acknowledge（确认告警）② 再 silence（关闭声音）。两者都不等于解决告警。" },
    ],
  },
  {
    id: 335,
    en: "Please reset this alarm.",
    cn: "请复位这个告警。",
    ipa: "/pliːz riːˈsɛt ðɪs əˈlɑːrm/",
    tags: ["第335句", "BMS告警操作", "★★★★★"],
    when: "确认故障已经修复后，执行复位操作将告警状态从 active 变为 cleared，恢复正常监控。",
    words: [
      { w: "reset", ipa: "/riːˈsɛt/", pos: "动词", cn: "复位；重置", memory: "① re- = 再次；② set = 设置。\nreset = 重新设置/复位。\nBMS 语境中 reset = 将告警状态重置为正常/清除，前提是故障确实已经修复。", phonics: "re 读 /riː/，set 读 /sɛt/。注意 re 读长音。", collocations: [["reset alarm", "复位告警"], ["reset breaker", "复位断路器"], ["factory reset", "出厂重置"]], examples: [["Please reset the alarm after repair.", "修复后请复位告警。"], ["The breaker has been reset.", "断路器已复位。"]] },
    ],
    phrases: [
      { p: "reset this alarm", ipa: "/riːˈsɛt ðɪs əˈlɑːrm/", cn: "复位这个告警", why: "reset + 告警对象 = 将某告警复位/清除。复位前必须确认故障已修复，否则告警会再次触发。" },
    ],
    grammar: [
      { q: "reset 和 clear 在 BMS 中有什么区别？", a: "两者在很多 BMS 中是同义的：\nreset = 复位（将告警状态重置，需要操作员手动执行）\nclear = 清除（告警自动或手动变为已恢复状态）\n✅ Please reset this alarm.（请复位告警 → 手动操作）\n✅ The alarm has cleared automatically.（告警已自动清除 → 自动恢复）\n手动操作用 reset，自动恢复用 clear。" },
    ],
    pattern: "Please reset + 设备/告警对象",
    patternExamples: [
      { en: "Please reset the breaker.", cn: "请复位断路器。", words: [{ w: "reset", ipa: "/riːˈsɛt/", cn: "重置", phonics: "re 读 /riː/，set 读 /sɛt/" }, { w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
      { en: "Please reset the UPS alarm.", cn: "请复位UPS告警。", words: [{ w: "reset", ipa: "/riːˈsɛt/", cn: "重置", phonics: "re 读 /riː/，set 读 /sɛt/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Please reset the system after maintenance.", cn: "维护后请复位系统。", words: [{ w: "reset", ipa: "/riːˈsɛt/", cn: "重置", phonics: "re 读 /riː/，set 读 /sɛt/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
    ],
    thinking: "BMS 告警操作完整流程：\n① 告警触发（alarm triggered）→ 声音响起\n② acknowledge（确认）→ '我知道了'\n③ silence（静音）→ 关闭声音\n④ 排查和修复故障\n⑤ reset / clear（复位）→ 告警状态变为 cleared\n交接时必须按这个流程确认每个告警处于正确的处理阶段。",
    pronunciation: "reset 的 re 读长音 /riː/，不是 /rɪ/。\n节奏：Please re-SET ｜ this ALARM.",
    quiz: [
      { q: "修复后请复位断路器，怎么说？", a: "Please reset the breaker after repair." },
      { q: "告警处理的完整流程是什么？", a: "① alarm triggered（告警触发）→ ② acknowledge（确认：'我知道了'）→ ③ silence（静音：关闭声音）→ ④ 排查和修复故障 → ⑤ reset（复位：告警变为 cleared）。交接时需确认每个告警处于正确阶段：新告警需要 acknowledge，已修复的需要 reset。" },
    ],
  },
  {
    id: 336,
    en: "Show alarms from the last 24 hours.",
    cn: "显示过去24小时的告警。",
    ipa: "/ʃoʊ əˈlɑːrmz frɒm ðə lɑːst ˈtwɛn.ti fɔːr aʊərz/",
    tags: ["第336句", "BMS时间筛选", "★★★★"],
    when: "需要跨班次查看告警时，用过去24小时作为时间范围，覆盖白班和夜班的完整周期。",
    words: [
      { w: "last", ipa: "/lɑːst/", pos: "形容词", cn: "过去的；上一个的", memory: "① last = 最后的/上一个的。\n② the last 24 hours = 过去的24小时（从现在往前推24小时）。\n注意：last 24 hours ≠ yesterday（昨天）。last 24 hours 是滚动时间窗口。", phonics: "l 读 /l/，a 读 /ɑː/，st 读 /st/。", collocations: [["last 24 hours", "过去24小时"], ["last shift", "上一班"], ["last week", "上周"]], examples: [["Show alarms from the last shift.", "显示上一班的告警。"], ["How many alarms in the last 24 hours?", "过去24小时有多少告警？"]] },
    ],
    phrases: [
      { p: "from the last 24 hours", ipa: "/frɒm ðə lɑːst ˈtwɛn.ti fɔːr aʊərz/", cn: "来自过去24小时的", why: "from + the last + 时间段 = 从过去某段时间内的。24 hours 覆盖两个班次，适合跨班次交接查看。" },
    ],
    grammar: [
      { q: "last 24 hours 和 today 有什么区别？", a: "last 24 hours = 过去24小时（滚动窗口，例如现在下午3点 → 看昨天下午3点到现在）\ntoday = 今天（固定窗口，从午夜0点到现在）\n✅ Show alarms from the last 24 hours.（过去24小时 → 跨日查看）\n✅ Show today's alarms.（今天 → 本日内）\n如果交接在早上8点，last 24 hours 会包含昨天早8点到今天早8点的数据。" },
    ],
    pattern: "Show alarms from the last + 时间段",
    patternExamples: [
      { en: "Show alarms from the last 12 hours.", cn: "显示过去12小时的告警。", words: [{ w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Show alarms from the last shift.", cn: "显示上一班的告警。", words: [{ w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }] },
      { en: "Show alarms from the last 7 days.", cn: "显示过去7天的告警。", words: [{ w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "BMS 时间范围选择指南：\n① today's alarms → 本日内，交接最常用\n② last 24 hours → 跨日，适合夜班/白班交接\n③ last shift → 上一班，精确到班次\n④ last 7 days → 周趋势，分析重复告警\n⑤ custom range → 自定义，深度排查\n交接时最常用 today's 和 last shift。",
    pronunciation: "24 hours 读作 twenty-four hours：/ˈtwɛn.ti fɔːr aʊərz/。\n节奏：SHOW ALARMS ｜ from the LAST ｜ TWEN-ty-FOUR HOURS.",
    quiz: [
      { q: "显示过去12小时的告警，怎么说？", a: "Show alarms from the last 12 hours." },
      { q: "last 24 hours 和 today 在什么场景下分别使用？", a: "today = 从今天0点到现在，适合白班交接看本日数据。last 24 hours = 从24小时前到现在，适合跨日查看，比如夜班交接时想看包含前一天夜班的数据。如果交接在早上8点，today 只有8小时数据，last 24 hours 有完整的两个班次数据。" },
    ],
  },
  {
    id: 337,
    en: "Please check the equipment status.",
    cn: "请检查设备状态。",
    ipa: "/pliːz tʃɛk ði ɪˈkwɪp.mənt ˈsteɪ.təs/",
    tags: ["第337句", "BMS设备状态", "★★★★★"],
    when: "在 BMS 上查看特定设备或所有设备的当前运行状态，确认是否正常。",
    words: [
      { w: "equipment", ipa: "/ɪˈkwɪp.mənt/", pos: "名词", cn: "设备", memory: "① equip = 装备/配备；② equipment = 设备/装备（不可数名词）。\n注意：equipment 是不可数名词，不加 s。❌ equipments → ✅ equipment。\n一件设备 = a piece of equipment。", phonics: "e 读 /ɪ/，quip 读 /kwɪp/，ment 读 /mənt/。重音在第二音节。", collocations: [["equipment status", "设备状态"], ["electrical equipment", "电气设备"], ["mechanical equipment", "机械设备"]], examples: [["Check the equipment status.", "检查设备状态。"], ["All equipment is operating normally.", "所有设备运行正常。"]] },
      { w: "status", ipa: "/ˈsteɪ.təs/", pos: "名词", cn: "状态", memory: "① status = 状态/状况（拉丁语原义'站立'）。\n② BMS 中 status 指设备的当前运行状态。\n常见状态：normal（正常）、alarm（告警）、offline（离线）、maintenance（维护中）。", phonics: "sta 读 /steɪ/，tus 读 /təs/。重音在第一音节。", collocations: [["equipment status", "设备状态"], ["system status", "系统状态"], ["alarm status", "告警状态"]], examples: [["What is the status of UPS-01?", "UPS-01的状态是什么？"], ["The system status is normal.", "系统状态正常。"]] },
    ],
    phrases: [
      { p: "equipment status", ipa: "/ɪˈkwɪp.mənt ˈsteɪ.təs/", cn: "设备状态", why: "equipment + status = 设备的当前运行状态。BMS 交接中需要逐一确认关键设备的状态。" },
    ],
    grammar: [
      { q: "equipment 为什么不能加 s？", a: "equipment 是不可数名词（uncountable noun），表示'设备'的总称，不加 s。\n❌ Check the equipments.（错误）\n✅ Check the equipment.（正确）\n✅ Check a piece of equipment.（检查一件设备）\n如果要表示多件设备，用 equipment（不加 s）或 devices / units。" },
    ],
    pattern: "Please check the + 设备/系统 + status",
    patternExamples: [
      { en: "Please check the UPS status.", cn: "请检查UPS状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Please check the generator status.", cn: "请检查发电机状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Please check the system status.", cn: "请检查系统状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
    ],
    thinking: "BMS 设备状态检查清单：\n① 电气设备：UPS / 变压器 / 发电机 / 开关柜 / ATS / STS\n② 暖通设备：CRAC / CRAH / 冷水机 / 冷却塔 / 风墙\n③ 消防设备：烟感 / 温感 / 气体灭火 / 喷淋\n④ 安防设备：门禁 / CCTV / 围栏\n交接时按系统逐一 check status，确认全部 normal。",
    pronunciation: "equipment 的重音在第二音节：/ɪˈkwɪp.mənt/。\nstatus 的重音在第一音节：/ˈsteɪ.təs/。\n节奏：Please CHECK ｜ the E-quip-ment ｜ STA-tus.",
    quiz: [
      { q: "请检查UPS状态，怎么说？", a: "Please check the UPS status." },
      { q: "equipment 能加 s 吗？", a: "不能。equipment 是不可数名词，不加 s。❌ Check the equipments. ✅ Check the equipment. 如果要表示多件设备，用 equipment（不加s）或 devices / units。这是英语中常见的不可数名词，类似的还有 information（信息）、furniture（家具）。" },
    ],
  },
  {
    id: 338,
    en: "What is the current status of UPS-01?",
    cn: "UPS-01的当前状态是什么？",
    ipa: "/wɒt ɪz ðə ˈkʌr.ənt ˈsteɪ.təs ɒv ˌjuː.piːˈɛs zɪr wʌn/",
    tags: ["第338句", "BMS设备查询", "★★★★★"],
    when: "需要查看特定设备的当前状态时，直接询问或查询某个设备编号的运行状况。",
    words: [
      { w: "current", ipa: "/ˈkʌr.ənt/", pos: "形容词", cn: "当前的；现在的", memory: "① current = 水流/电流（名词）；② current = 当前的（形容词）。\nBMS 语境中 current status = 当前状态，强调'此刻'的状态，不是历史的。\n对比：previous status = 之前的状态。", phonics: "cur 读 /kʌr/，rent 读 /ənt/。重音在第一音节。注意 u 读短音 /ʌ/。", collocations: [["current status", "当前状态"], ["current load", "当前负载"], ["current reading", "当前读数"]], examples: [["What is the current load?", "当前负载是多少？"], ["The current temperature is 22°C.", "当前温度是22°C。"]] },
    ],
    phrases: [
      { p: "current status of + 设备", ipa: "/ˈkʌr.ənt ˈsteɪ.təs ɒv/", cn: "…的当前状态", why: "current status of + 设备名 = 某设备的当前运行状态。of 引出询问对象，是 BMS 查询的标准句式。" },
    ],
    grammar: [
      { q: "current 和 real-time 有什么区别？", a: "current = 当前的（强调'现在'这个时刻的状态）\nreal-time = 实时的（强调持续更新、无延迟）\n✅ What is the current status?（当前状态是什么？→ 问此刻的值）\n✅ Show the real-time monitoring.（显示实时监控 → 持续刷新的画面）\n交接时问 current status（某个时刻的快照），日常监控看 real-time（持续流动的数据）。" },
    ],
    pattern: "What is the current status of + 设备?",
    patternExamples: [
      { en: "What is the current status of Generator No.1?", cn: "1号发电机的当前状态是什么？", words: [{ w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "What is the current status of CRAC-05?", cn: "5号精密空调的当前状态是什么？", words: [{ w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "What is the current load of Transformer No.2?", cn: "2号变压器的当前负载是多少？", words: [{ w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }, { w: "transformer", ipa: "/trænsˈfɔːrmər/", cn: "变压器", phonics: "trans 读 /træns/，former 读 /fɔːrmər/" }] },
    ],
    thinking: "BMS 设备查询常用句式：\n① What is the current status of [设备]?（状态查询）\n② What is the current [参数] of [设备]?（参数查询）\n③ Is [设备] operating normally?（是否正常查询）\n④ Show me the [设备] details.（详情查看）\n交接时结合 BMS 画面，边看边问，确保状态正确。",
    pronunciation: "current 的 u 读短音 /ʌ/：/ˈkʌr.ənt/，不是 /ˈkjʊr.ənt/。\n节奏：What is the ｜ CUR-rent ｜ STA-tus ｜ of UPS-ZERO-ONE?",
    quiz: [
      { q: "1号变压器的当前负载是多少？", a: "What is the current load of Transformer No.1?" },
      { q: "current 在 BMS 中有哪些常见搭配？", a: "current status（当前状态）、current load（当前负载）、current reading（当前读数）、current temperature（当前温度）、current alarm count（当前告警数）。current 强调'此刻'的值，与 previous（之前的）、historical（历史的）相对。" },
    ],
  },
  {
    id: 339,
    en: "Please adjust the temperature setpoint.",
    cn: "请调整温度设定值。",
    ipa: "/pliːz əˈdʒʌst ðə ˈtɛm.prə.tʃər ˈsɛt.pɔɪnt/",
    tags: ["第339句", "BMS设定值", "★★★★"],
    when: "需要修改 BMS 中设备的运行参数设定值时，例如调整空调的目标温度。",
    words: [
      { w: "adjust", ipa: "/əˈdʒʌst/", pos: "动词", cn: "调整；调节", memory: "① ad- = 朝向；② just = 正确/恰好。\nadjust = 使…恰好 → 调整/调节。\nBMS 中 adjust = 修改设备的运行参数，如温度、湿度、压力等设定值。", phonics: "ad 读 /ə/，just 读 /dʒʌst/。重音在第二音节。", collocations: [["adjust setpoint", "调整设定值"], ["adjust temperature", "调整温度"], ["adjust threshold", "调整阈值"]], examples: [["Please adjust the setpoint to 22°C.", "请将设定值调整为22°C。"], ["The threshold needs to be adjusted.", "阈值需要调整。"]] },
      { w: "setpoint", ipa: "/ˈsɛt.pɔɪnt/", pos: "名词", cn: "设定值", memory: "① set = 设置；② point = 点/值。\nsetpoint = 设定值/目标值（设备应该达到的目标参数）。\n例：空调 setpoint = 22°C，意思是空调要维持室温在22°C。", phonics: "set 读 /sɛt/，point 读 /pɔɪnt/。重音在第一音节。", collocations: [["temperature setpoint", "温度设定值"], ["humidity setpoint", "湿度设定值"], ["pressure setpoint", "压力设定值"]], examples: [["The temperature setpoint is 22°C.", "温度设定值是22°C。"], ["Please change the setpoint.", "请更改设定值。"]] },
    ],
    phrases: [
      { p: "adjust the temperature setpoint", ipa: "/əˈdʒʌst ðə ˈtɛm.prə.tʃər ˈsɛt.pɔɪnt/", cn: "调整温度设定值", why: "adjust + the + 参数 + setpoint = 调整某参数的设定值。setpoint 是 BMS 的核心概念，指设备应该维持的目标值。" },
    ],
    grammar: [
      { q: "setpoint 和 reading 有什么区别？", a: "setpoint = 设定值/目标值（设备应该达到的值，由操作员设置）\nreading = 读数/实测值（传感器实际测量到的值）\n✅ Adjust the setpoint to 22°C.（把目标设为22°C）\n✅ The current reading is 23.5°C.（实际测量值是23.5°C）\n如果 reading 持续偏离 setpoint，说明设备可能有问题。" },
    ],
    pattern: "Please adjust the + 参数 + setpoint + to + 值",
    patternExamples: [
      { en: "Please adjust the humidity setpoint to 50%.", cn: "请将湿度设定值调整为50%。", words: [{ w: "adjust", ipa: "/əˈdʒʌst/", cn: "调整", phonics: "ad 读 /ə/，just 读 /dʒʌst/" }, { w: "humidity", ipa: "/hjuːˈmɪdɪti/", cn: "湿度", phonics: "hu 读 /hjuː/，midity 读 /mɪdɪti/" }] },
      { en: "Please adjust the pressure setpoint.", cn: "请调整压力设定值。", words: [{ w: "adjust", ipa: "/əˈdʒʌst/", cn: "调整", phonics: "ad 读 /ə/，just 读 /dʒʌst/" }, { w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }] },
      { en: "Please adjust the alarm threshold to 30°C.", cn: "请将告警阈值调整为30°C。", words: [{ w: "adjust", ipa: "/əˈdʒʌst/", cn: "调整", phonics: "ad 读 /ə/，just 读 /dʒʌst/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "BMS 参数调整注意事项：\n① 调整 setpoint 前必须确认权限（部分参数需要工程师级别）\n② 调整后需要观察 reading 是否逐渐趋近 setpoint\n③ 记录调整原因和调整前后的值\n④ 交接时必须告知下一班已做的调整\n数据中心温度通常设定在 22±2°C，湿度 45-55%。",
    pronunciation: "adjust 的重音在第二音节：/əˈdʒʌst/。\nsetpoint 的重音在第一音节：/ˈsɛt.pɔɪnt/。\n节奏：Please ad-JUST ｜ the TEM-per-a-ture ｜ SET-point.",
    quiz: [
      { q: "请将湿度设定值调整为50%，怎么说？", a: "Please adjust the humidity setpoint to 50%." },
      { q: "setpoint 和 reading 有什么区别？", a: "setpoint = 设定值/目标值（设备应该达到的值，由操作员设置）；reading = 读数/实测值（传感器实际测量的值）。例：空调 setpoint = 22°C（目标），reading = 23.5°C（实际）。如果 reading 持续偏离 setpoint，需要检查设备是否正常。" },
    ],
  },
  {
    id: 340,
    en: "Show the trend chart for this sensor.",
    cn: "显示这个传感器的趋势图。",
    ipa: "/ʃoʊ ðə trɛnd tʃɑːrt fɔːr ðɪs ˈsɛn.sər/",
    tags: ["第340句", "BMS趋势图", "★★★★★"],
    when: "需要分析某个参数的历史变化趋势时，打开趋势图查看数据波动模式，判断是否存在异常。",
    words: [
      { w: "trend", ipa: "/trɛnd/", pos: "名词", cn: "趋势", memory: "① trend = 趋势/走向。\n② BMS 中 trend chart = 趋势图（显示参数随时间变化的折线图）。\ntrend 分析是数据中心运维的核心技能，通过趋势判断设备是否劣化。", phonics: "tr 读 /tr/，end 读 /ɛnd/。", collocations: [["trend chart", "趋势图"], ["trend analysis", "趋势分析"], ["temperature trend", "温度趋势"]], examples: [["Show the temperature trend.", "显示温度趋势。"], ["The trend shows gradual increase.", "趋势显示逐渐升高。"]] },
      { w: "chart", ipa: "/tʃɑːrt/", pos: "名词", cn: "图表", memory: "① chart = 图表/曲线图。\n② BMS 中 chart = 数据可视化图表，常见类型有 trend chart（趋势图）、bar chart（柱状图）、pie chart（饼图）。", phonics: "ch 读 /tʃ/，art 读 /ɑːrt/。", collocations: [["trend chart", "趋势图"], ["bar chart", "柱状图"], ["pie chart", "饼图"]], examples: [["Open the trend chart.", "打开趋势图。"], ["Export the chart as PDF.", "将图表导出为PDF。"]] },
      { w: "sensor", ipa: "/ˈsɛn.sər/", pos: "名词", cn: "传感器", memory: "① sense = 感觉/感知；② sensor = 传感器（感知物理量的设备）。\n数据中心常见传感器：温度、湿度、烟感、漏水、气压、振动。", phonics: "sen 读 /sɛn/，sor 读 /sər/。重音在第一音节。", collocations: [["temperature sensor", "温度传感器"], ["smoke sensor", "烟感传感器"], ["water leak sensor", "漏水传感器"]], examples: [["Check the sensor reading.", "检查传感器读数。"], ["The sensor is offline.", "传感器离线。"]] },
    ],
    phrases: [
      { p: "trend chart for this sensor", ipa: "/trɛnd tʃɑːrt fɔːr ðɪs ˈsɛn.sər/", cn: "这个传感器的趋势图", why: "trend chart for + 对象 = 某对象的趋势图。for 引出图表的数据来源。" },
    ],
    grammar: [
      { q: "trend chart 和 real-time display 有什么区别？", a: "trend chart = 趋势图（显示过去一段时间的历史数据，用于分析变化模式）\nreal-time display = 实时显示（显示当前值，持续刷新）\n✅ Show the trend chart.（显示趋势图 → 看历史变化）\n✅ Show the real-time value.（显示实时值 → 看当前数值）\n交接时先看 real-time（现在怎么样），再看 trend（过去怎么变的）。" },
    ],
    pattern: "Show the trend chart for + 设备/传感器",
    patternExamples: [
      { en: "Show the trend chart for UPS-01 output voltage.", cn: "显示UPS-01输出电压的趋势图。", words: [{ w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }] },
      { en: "Show the trend chart for the data hall temperature.", cn: "显示机房温度的趋势图。", words: [{ w: "data", ipa: "/ˈdeɪtə/", cn: "数据", phonics: "da 读 /deɪ/，ta 读 /tə/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
      { en: "Show the trend chart for the last 7 days.", cn: "显示过去7天的趋势图。", words: [] },
    ],
    thinking: "BMS 趋势分析要点：\n① 正常趋势：平稳波动在 setpoint 附近（±1-2°C）\n② 异常趋势：持续上升/下降、突然跳变、周期性大幅波动\n③ 交接时关注的趋势：温度趋势（暖通健康度）、负载趋势（容量规划）、告警频次趋势（系统稳定性）\n趋势分析是从'被动响应'到'主动预防'的关键技能。",
    pronunciation: "trend 的 tr 读 /tr/，不要读成 /tʃr/。\nchart 的 ch 读 /tʃ/，ar 读 /ɑːr/。\n节奏：SHOW ｜ the TREND CHART ｜ for this SEN-sor.",
    quiz: [
      { q: "显示机房温度的趋势图，怎么说？", a: "Show the trend chart for the data hall temperature." },
      { q: "交接时为什么要看趋势图？", a: "因为趋势图能揭示实时数值看不到的信息：① 设备是否在劣化（温度逐渐升高）② 是否有周期性异常（每天固定时间波动）③ 故障前兆（跳变前通常有渐变）。交接时看趋势图，可以从'现在正常'中发现'即将出问题'的信号。" },
    ],
  },
  {
    id: 341,
    en: "Please export the alarm report.",
    cn: "请导出告警报表。",
    ipa: "/pliːz ɪkˈspɔːrt ði əˈlɑːrm ˈrɪ.pɔːrt/",
    tags: ["第341句", "BMS报表", "★★★★"],
    when: "交接结束前，导出告警报表作为交接记录，供下一班参考和存档。",
    words: [
      { w: "export", ipa: "/ɪkˈspɔːrt/", pos: "动词", cn: "导出", memory: "① ex- = 向外；② port = 港口/搬运。\nexport = 向外搬运 → 导出（将系统内的数据输出为文件）。\n对比：import = 导入（将外部数据输入系统）。", phonics: "ex 读 /ɪk/，port 读 /spɔːrt/。重音在第二音节。", collocations: [["export report", "导出报表"], ["export data", "导出数据"], ["export to Excel", "导出为Excel"]], examples: [["Export the report to PDF.", "将报表导出为PDF。"], ["Please export today's alarm data.", "请导出今天的告警数据。"]] },
      { w: "report", ipa: "/rɪˈpɔːrt/", pos: "名词", cn: "报表；报告", memory: "① re- = 再次；② port = 搬运/报告。\nreport = 报告/报表（汇总信息的文档）。\nBMS 常见报表：alarm report（告警报表）、event report（事件报表）、trend report（趋势报表）。", phonics: "re 读 /rɪ/，port 读 /pɔːrt/。重音在第二音节。", collocations: [["alarm report", "告警报表"], ["daily report", "日报"], ["shift report", "交接报表"]], examples: [["Generate the daily report.", "生成日报。"], ["The report is ready for download.", "报表已可下载。"]] },
    ],
    phrases: [
      { p: "export the alarm report", ipa: "/ɪkˈspɔːrt ði əˈlɑːrm ˈrɪ.pɔːrt/", cn: "导出告警报表", why: "export + the + 报表类型 + report = 导出某类型的报表。告警报表是交接存档的重要文件。" },
    ],
    grammar: [
      { q: "export 和 download 有什么区别？", a: "export = 导出（将系统数据转换为文件格式输出，如 CSV/Excel/PDF）\ndownload = 下载（从服务器获取文件到本地）\n✅ Export the alarm report.（导出告警报表 → 系统生成并输出文件）\n✅ Download the exported file.（下载已导出的文件 → 保存到本地）\n通常是先 export（系统生成），再 download（保存到电脑）。" },
    ],
    pattern: "Please export the + 报表类型",
    patternExamples: [
      { en: "Please export the shift report.", cn: "请导出交接报表。", words: [{ w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }, { w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
      { en: "Please export the daily alarm summary.", cn: "请导出每日告警摘要。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Please export the trend data to Excel.", cn: "请将趋势数据导出为Excel。", words: [{ w: "data", ipa: "/ˈdeɪtə/", cn: "数据", phonics: "da 读 /deɪ/，ta 读 /tə/" }] },
    ],
    thinking: "BMS 报表类型：\n① alarm report（告警报表）→ 交接必备，记录所有告警及处理状态\n② event report（事件报表）→ 记录所有操作事件\n③ trend report（趋势报表）→ 参数历史变化数据\n④ shift report（交接报表）→ 汇总本班次所有关键信息\n交接时至少导出 alarm report 和 shift report 作为交接凭证。",
    pronunciation: "export 的重音在第二音节：/ɪkˈspɔːrt/。\nreport 的重音也在第二音节：/rɪˈpɔːrt/。\n节奏：Please ex-PORT ｜ the ALARM ｜ RE-port.",
    quiz: [
      { q: "请导出交接报表，怎么说？", a: "Please export the shift report." },
      { q: "交接时需要导出哪些报表？", a: "至少两类：① alarm report（告警报表）→ 记录所有告警及处理状态，下一班可快速了解遗留问题 ② shift report（交接报表）→ 汇总本班次所有关键事件、操作、告警和处理结果。如果有异常趋势，还需导出 trend report 供分析。" },
    ],
  },
  {
    id: 342,
    en: "Please switch to the fire protection system.",
    cn: "请切换到消防系统。",
    ipa: "/pliːz swɪtʃ tuː ðə faɪər prəˈtɛk.ʃən ˈsɪs.təm/",
    tags: ["第342句", "BMS系统切换", "★★★★★"],
    when: "在 BMS 中从一个子系统切换到另一个子系统查看，例如从电气系统切换到消防系统。",
    words: [
      { w: "switch to", ipa: "/swɪtʃ tuː/", pos: "动词短语", cn: "切换到", memory: "① switch = 切换/开关；② to = 到/向。\nswitch to + 目标 = 切换到某个系统/页面/视图。\nBMS 中有多个子系统需要切换查看：electrical（电气）、mechanical（暖通）、fire protection（消防）、security（安防）。", phonics: "switch 读 /swɪtʃ/，to 读 /tuː/。", collocations: [["switch to", "切换到"], ["switch between", "在…之间切换"], ["system switch", "系统切换"]], examples: [["Switch to the electrical system.", "切换到电气系统。"], ["Switch between the two views.", "在两个视图之间切换。"]] },
      { w: "fire protection", ipa: "/faɪər prəˈtɛk.ʃən/", pos: "名词", cn: "消防系统", memory: "① fire = 火；② protection = 保护。\nfire protection system = 消防系统（包含烟感、温感、气体灭火、喷淋等）。\n数据中心消防系统至关重要，误触发可能导致设备损坏。", phonics: "fire 读 /faɪər/，protection 读 /prəˈtɛk.ʃən/。", collocations: [["fire protection system", "消防系统"], ["fire alarm", "火灾报警"], ["fire suppression", "灭火系统"]], examples: [["Check the fire protection system.", "检查消防系统。"], ["The fire alarm was triggered.", "火灾报警被触发了。"]] },
    ],
    phrases: [
      { p: "switch to the fire protection system", ipa: "/swɪtʃ tuː ðə faɪər prəˈtɛk.ʃən ˈsɪs.təm/", cn: "切换到消防系统", why: "switch to + the + 系统名 + system = 切换到某系统。BMS 交接需要逐一检查各个子系统。" },
    ],
    grammar: [
      { q: "switch to 和 open 在 BMS 中有什么区别？", a: "switch to = 切换到（从当前系统/页面转到另一个，强调转换动作）\nopen = 打开（直接打开某个系统/页面，不强调从哪来）\n✅ Switch to the fire protection system.（切换到消防系统 → 从当前系统转过去）\n✅ Open the fire protection system.（打开消防系统 → 直接打开）\n两者效果相同，switch to 更适合在多个系统间来回查看的场景。" },
    ],
    pattern: "Please switch to the + 系统名 + system",
    patternExamples: [
      { en: "Please switch to the electrical system.", cn: "请切换到电气系统。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "electrical", ipa: "/ɪˈlɛktrɪkəl/", cn: "电气", phonics: "e 读 /ɪ/，lectrical 读 /lɛktrɪkəl/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please switch to the HVAC system.", cn: "请切换到暖通系统。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "hvac", ipa: "/ˌeɪtʃˈviːˈeɪˈsiː/", cn: "暖通", phonics: "H-V-A-C 逐字母读" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please switch to the security system.", cn: "请切换到安防系统。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "security", ipa: "/sɪˈkjʊrɪti/", cn: "安防", phonics: "se 读 /sɪ/，curity 读 /kjʊrɪti/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
    ],
    thinking: "BMS 子系统切换顺序（交接推荐）：\n① Electrical（电气系统）→ UPS/变压器/发电机/开关柜\n② Mechanical / HVAC（暖通系统）→ CRAC/冷水机/冷却塔\n③ Fire Protection（消防系统）→ 烟感/温感/灭火\n④ Security（安防系统）→ 门禁/CCTV\n⑤ Environmental（环境系统）→ 温湿度/漏水\n按固定顺序切换检查，不遗漏任何子系统。",
    pronunciation: "fire 读 /faɪər/，两个音节。\nprotection 的重音在第二音节：/prəˈtɛk.ʃən/。\n节奏：Please SWITCH TO ｜ the FIRE pro-TEC-tion ｜ SYS-tem.",
    quiz: [
      { q: "请切换到暖通系统，怎么说？", a: "Please switch to the HVAC system." },
      { q: "交接时需要检查哪些 BMS 子系统？", a: "按顺序：① Electrical（电气：UPS/变压器/发电机/开关柜）→ ② HVAC/Mechanical（暖通：CRAC/冷水机/冷却塔）→ ③ Fire Protection（消防：烟感/温感/灭火）→ ④ Security（安防：门禁/CCTV）→ ⑤ Environmental（环境：温湿度/漏水）。按固定顺序检查，确保不遗漏。" },
    ],
  },
  {
    id: 343,
    en: "Open the HVAC overview page.",
    cn: "打开暖通系统总览页面。",
    ipa: "/ˈoʊ.pən ðə ˌeɪtʃ.eɪˈsiːˈviː ˈoʊ.vər.vjuː peɪdʒ/",
    tags: ["第343句", "BMS页面操作", "★★★★"],
    when: "需要查看暖通系统的整体状态总览时，打开 HVAC 概览页面一次性看到所有暖通设备状态。",
    words: [
      { w: "HVAC", ipa: "/ˌeɪtʃ.eɪˈsiːˈviː/", pos: "名词(缩写)", cn: "暖通空调系统", memory: "① H = Heating（供暖）；② V = Ventilation（通风）；③ A = Air Conditioning（空调）；④ C = Conditioning（调节）。\nHVAC = 暖通空调系统的总称，包括 CRAC、冷水机、冷却塔、风墙等所有温控设备。", phonics: "逐字母读：H-A-C-V → /ˌeɪtʃ.eɪˈsiːˈviː/。不要读成一个单词。", collocations: [["HVAC system", "暖通系统"], ["HVAC overview", "暖通总览"], ["HVAC maintenance", "暖通维护"]], examples: [["Check the HVAC system.", "检查暖通系统。"], ["The HVAC overview shows all units.", "暖通总览显示所有设备。"]] },
      { w: "overview", ipa: "/ˈoʊ.vər.vjuː/", pos: "名词", cn: "总览；概览", memory: "① over = 上方；② view = 视图。\noverview = 从上方看的视图 → 总览/概览（一览全局的页面）。\nBMS 中 overview page = 总览页面，一次性看到整个系统的关键指标。", phonics: "o 读 /oʊ/，ver 读 /vər/，view 读 /vjuː/。重音在第一音节。", collocations: [["overview page", "总览页面"], ["system overview", "系统总览"], ["alarm overview", "告警总览"]], examples: [["Open the overview page.", "打开总览页面。"], ["The overview shows all alarms.", "总览页面显示所有告警。"]] },
    ],
    phrases: [
      { p: "HVAC overview page", ipa: "/ˌeɪtʃ.eɪˈsiːˈviː ˈoʊ.vər.vjuː peɪdʒ/", cn: "暖通系统总览页面", why: "系统名 + overview + page = 某系统的总览页面。overview page 是 BMS 中最高效的查看方式，一页看到整个系统的状态。" },
    ],
    grammar: [
      { q: "overview 和 detail 页面有什么区别？", a: "overview = 总览/概览页面（一页看整个系统的关键指标和状态摘要）\ndetail = 详情页面（查看单个设备/告警的完整信息）\n✅ Open the HVAC overview page.（打开暖通总览 → 看所有暖通设备状态）\n✅ Open the CRAC-05 detail page.（打开CRAC-05详情 → 看这台空调的全部参数）\n交接时先看 overview（全局状态），发现异常再进 detail（深入排查）。" },
    ],
    pattern: "Open the + 系统 + overview page",
    patternExamples: [
      { en: "Open the electrical overview page.", cn: "打开电气系统总览页面。", words: [{ w: "electrical", ipa: "/ɪˈlɛktrɪkəl/", cn: "电气", phonics: "e 读 /ɪ/，lectrical 读 /lɛktrɪkəl/" }] },
      { en: "Open the alarm overview page.", cn: "打开告警总览页面。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Open the fire protection overview page.", cn: "打开消防系统总览页面。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "protection", ipa: "/prəˈtɛkʃən/", cn: "保护", phonics: "pro 读 /prə/，tection 读 /tɛkʃən/" }] },
    ],
    thinking: "BMS 页面层级：\n① Dashboard（仪表盘）→ 最高层，所有系统概览\n② System Overview（系统总览）→ 单个系统的全局视图\n③ Equipment Detail（设备详情）→ 单个设备的完整参数\n④ Trend / History（趋势/历史）→ 数据分析页面\n交接时按 Dashboard → 各系统 Overview 的顺序检查，发现问题再进 Detail。",
    pronunciation: "HVAC 逐字母读：H-A-C-V → /ˌeɪtʃ.eɪˈsiːˈviː/。\noverview 的重音在第一音节：/ˈoʊ.vər.vjuː/。\n节奏：O-pen ｜ the H-A-C-V ｜ O-ver-view ｜ PAGE.",
    quiz: [
      { q: "打开电气系统总览页面，怎么说？", a: "Open the electrical overview page." },
      { q: "交接时应该先看 overview 还是 detail？", a: "先看 overview（总览），因为 overview 一页就能看到整个系统的关键状态，效率高。发现异常后再进入 detail（详情）深入排查。交接流程：Dashboard（仪表盘）→ 各系统 Overview（总览）→ 异常设备的 Detail（详情）。" },
    ],
  },
  {
    id: 344,
    en: "Show the alarm history for UPS-01.",
    cn: "显示UPS-01的告警历史。",
    ipa: "/ʃoʊ ði əˈlɑːrm ˈhɪs.tər.i fɔːr ˌjuː.piːˈɛs zɪr wʌn/",
    tags: ["第344句", "BMS历史查询", "★★★★★"],
    when: "需要查看某台设备的历史告警记录时，打开告警历史页面分析该设备是否频繁出问题。",
    words: [
      { w: "history", ipa: "/ˈhɪs.tər.i/", pos: "名词", cn: "历史；历史记录", memory: "① history = 历史/历史记录。\n② BMS 中 alarm history = 告警历史（过去发生的所有告警记录）。\nhistory 与 real-time（实时）相对，查看历史数据用于趋势分析和故障诊断。", phonics: "his 读 /hɪs/，to 读 /tər/，ry 读 /i/。重音在第一音节。", collocations: [["alarm history", "告警历史"], ["event history", "事件历史"], ["operation history", "操作历史"]], examples: [["Check the alarm history.", "检查告警历史。"], ["This alarm has a long history.", "这个告警有很长的历史记录。"]] },
    ],
    phrases: [
      { p: "alarm history for + 设备", ipa: "/əˈlɑːrm ˈhɪs.tər.i fɔːr/", cn: "某设备的告警历史", why: "alarm history for + 设备名 = 查看某设备过去的所有告警记录。for 引出查询对象。" },
    ],
    grammar: [
      { q: "alarm history 和 alarm log 有什么区别？", a: "两者在 BMS 中常互换使用，但严格来说：\nhistory = 历史（侧重时间线视图，可筛选/排序）\nlog = 日志（侧重原始记录，按时间顺序的流水账）\n✅ Show the alarm history for UPS-01.（显示UPS-01的告警历史 → 可视化视图）\n✅ Export the alarm log.（导出告警日志 → 原始数据文件）\n日常交接说 history 更自然，技术排查说 log 更精确。" },
    ],
    pattern: "Show the alarm history for + 设备",
    patternExamples: [
      { en: "Show the alarm history for Generator No.1.", cn: "显示1号发电机的告警历史。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "Show the alarm history for CRAC-05.", cn: "显示5号精密空调的告警历史。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Show the alarm history for the last 30 days.", cn: "显示过去30天的告警历史。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "告警历史分析要点：\n① 频次：这个告警过去触发了多少次？（频繁触发 = 可能是慢性问题）\n② 模式：是否每天固定时间触发？（周期性 = 可能与负载模式或环境有关）\n③ 持续时间：每次触发持续多久？（持续时间长 = 恢复慢）\n④ 关联性：是否和其他告警同时出现？（关联告警 = 可能是同一根因）\n交接时查看关键设备的历史，帮助接班人了解'老毛病'。",
    pronunciation: "history 的重音在第一音节：/ˈhɪs.tər.i/。\n节奏：SHOW ｜ the ALARM ｜ HIS-to-ry ｜ for UPS-ZERO-ONE.",
    quiz: [
      { q: "显示1号变压器的告警历史，怎么说？", a: "Show the alarm history for Transformer No.1." },
      { q: "查看告警历史时应该关注什么？", a: "关注四点：① 频次（触发了多少次 → 频繁=慢性问题）② 模式（是否周期性触发 → 可能与负载/环境有关）③ 持续时间（每次多久 → 长=恢复慢）④ 关联性（是否和其他告警同时出现 → 可能是同一根因）。交接时查看历史，让接班人了解设备的'老毛病'。" },
    ],
  },
  {
    id: 345,
    en: "Zoom in on the trend chart.",
    cn: "放大趋势图。",
    ipa: "/zuːm ɪn ɒn ðə trɛnd tʃɑːrt/",
    tags: ["第345句", "BMS图表操作", "★★★"],
    when: "趋势图中需要查看某个时间段的细节时，放大图表以看到更精确的数据变化。",
    words: [
      { w: "zoom in", ipa: "/zuːm ɪn/", pos: "动词短语", cn: "放大", memory: "① zoom = 快速移动/变焦；② in = 向内。\nzoom in = 放大（看到更多细节）。\n对比：zoom out = 缩小（看到更大范围）。\nBMS 图表中 zoom in 可以聚焦到某个时间段的细节。", phonics: "zoom 读 /zuːm/，in 读 /ɪn/。oo 读长音 /uː/。", collocations: [["zoom in", "放大"], ["zoom out", "缩小"], ["zoom in on", "放大查看…"]], examples: [["Zoom in on this area.", "放大这个区域。"], ["Zoom out to see the full range.", "缩小以查看完整范围。"]] },
    ],
    phrases: [
      { p: "zoom in on the trend chart", ipa: "/zuːm ɪn ɒn ðə trɛnd tʃɑːrt/", cn: "放大趋势图", why: "zoom in on + 对象 = 放大查看某对象。on 引出放大的目标。" },
    ],
    grammar: [
      { q: "zoom in 和 zoom out 在 BMS 图表中怎么用？", a: "zoom in = 放大（看细节，时间范围变小）\nzoom out = 缩小（看全局，时间范围变大）\n✅ Zoom in on the last hour.（放大看过去一小时 → 精确到分钟级）\n✅ Zoom out to see the full day.（缩小看整天 → 看整体趋势）\n交接时先 zoom out 看整体趋势，发现异常再 zoom in 看细节。" },
    ],
    pattern: "Zoom in on + 区域/时间段",
    patternExamples: [
      { en: "Zoom in on the last hour.", cn: "放大看过去一小时。", words: [] },
      { en: "Zoom in on the spike at 3 AM.", cn: "放大看凌晨3点的尖峰。", words: [] },
      { en: "Zoom in on this section.", cn: "放大看这一段。", words: [] },
    ],
    thinking: "BMS 图表操作技巧：\n① zoom out（缩小）→ 看整体趋势（24小时/7天/30天）\n② zoom in（放大）→ 看异常细节（某小时/某分钟）\n③ pan（平移）→ 左右移动查看不同时间段\n④ select range（选择范围）→ 精确选择起止时间\n交接时常用操作：先看24小时总览，发现异常后 zoom in 看具体时间。",
    pronunciation: "zoom 的 oo 读长音 /uː/：/zuːm/。\n节奏：ZOOM IN ｜ on the TREND CHART.",
    quiz: [
      { q: "缩小以查看完整范围，怎么说？", a: "Zoom out to see the full range." },
      { q: "交接时如何使用趋势图的缩放功能？", a: "先 zoom out（缩小）看整体趋势（24小时/整周），发现异常波动后 zoom in（放大）看具体时间段的细节。例如：zoom out 看到下午2点有个温度尖峰 → zoom in 看2点前后的精确变化 → 判断是瞬时干扰还是持续问题。" },
    ],
  },
  {
    id: 346,
    en: "Please confirm the alarm threshold settings.",
    cn: "请确认告警阈值设置。",
    ipa: "/pliːz kənˈfɜːrm ði əˈlɑːrm ˈθrɛʃ.hoʊld ˈsɛt.ɪŋz/",
    tags: ["第346句", "BMS阈值", "★★★★★"],
    when: "交接时确认各告警的触发阈值是否正确，避免因阈值设置不当导致漏报或误报。",
    words: [
      { w: "threshold", ipa: "/ˈθrɛʃ.hoʊld/", pos: "名词", cn: "阈值；门槛", memory: "① thresh = 脱粒/打谷；② hold = 持有/保持。\nthreshold = 门槛（原义：门口的横木）→ 引申为阈值/临界值。\nBMS 中 alarm threshold = 告警阈值（超过这个值就触发告警）。", phonics: "thresh 读 /θrɛʃ/，hold 读 /hoʊld/。th 咬舌尖。", collocations: [["alarm threshold", "告警阈值"], ["temperature threshold", "温度阈值"], ["threshold setting", "阈值设置"]], examples: [["The temperature threshold is 30°C.", "温度阈值是30°C。"], ["Adjust the alarm threshold.", "调整告警阈值。"]] },
      { w: "setting", ipa: "/ˈsɛt.ɪŋ/", pos: "名词", cn: "设置", memory: "① set = 设置；② setting = 设置/配置。\nBMS 中 settings = 系统设置/配置参数，包括阈值、告警等级、通知方式等。", phonics: "set 读 /sɛt/，ting 读 /tɪŋ/。", collocations: [["alarm settings", "告警设置"], ["system settings", "系统设置"], ["threshold settings", "阈值设置"]], examples: [["Check the alarm settings.", "检查告警设置。"], ["The settings have been updated.", "设置已更新。"]] },
    ],
    phrases: [
      { p: "alarm threshold settings", ipa: "/əˈlɑːrm ˈθrɛʃ.hoʊld ˈsɛt.ɪŋz/", cn: "告警阈值设置", why: "alarm + threshold + settings = 告警的阈值配置。交接时确认阈值设置正确，是防止误报和漏报的关键步骤。" },
    ],
    grammar: [
      { q: "threshold 和 setpoint 有什么区别？", a: "threshold = 告警阈值（超过这个值就触发告警，是安全边界）\nsetpoint = 运行设定值（设备应该维持的目标值，是运行目标）\n✅ Temperature setpoint = 22°C（空调目标是维持22°C）\n✅ Temperature alarm threshold = 30°C（超过30°C就报警）\nsetpoint 是'我希望的温度'，threshold 是'不能接受的温度'。" },
    ],
    pattern: "Please confirm the + 参数 + threshold settings",
    patternExamples: [
      { en: "Please confirm the temperature threshold settings.", cn: "请确认温度阈值设置。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
      { en: "Please confirm the humidity threshold settings.", cn: "请确认湿度阈值设置。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }, { w: "humidity", ipa: "/hjuːˈmɪdɪti/", cn: "湿度", phonics: "hu 读 /hjuː/，midity 读 /mɪdɪti/" }] },
      { en: "Please confirm all alarm threshold settings.", cn: "请确认所有告警阈值设置。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "BMS 阈值管理要点：\n① threshold 不能太敏感（频繁误报 → 运维疲劳 → 忽视真正的告警）\n② threshold 不能太宽松（漏报 → 问题发现太晚 → 扩大损失）\n③ 交接时确认阈值是否被上一班修改过\n④ 任何阈值修改都应该记录在交接日志中\n常见阈值：温度 Critical > 30°C，Warning > 26°C；湿度 Critical < 30% 或 > 70%。",
    pronunciation: "threshold 的 th 咬舌尖：/ˈθrɛʃ.hoʊld/。\nsettings 的重音在第一音节：/ˈsɛt.ɪŋz/。\n节奏：Please con-FIRM ｜ the ALARM ｜ THRESH-hold ｜ SET-tings.",
    quiz: [
      { q: "请确认温度阈值设置，怎么说？", a: "Please confirm the temperature threshold settings." },
      { q: "threshold 和 setpoint 有什么区别？", a: "threshold = 告警阈值（超过就报警，是安全边界）；setpoint = 运行设定值（设备目标值，是运行目标）。例：空调 setpoint = 22°C（目标温度），alarm threshold = 30°C（超过就报警）。setpoint 是'我希望的'，threshold 是'不能接受的'。" },
    ],
  },
  {
    id: 347,
    en: "Filter alarms by building.",
    cn: "按楼栋筛选告警。",
    ipa: "/ˈfɪl.tər əˈlɑːrmz baɪ ˈbɪl.dɪŋ/",
    tags: ["第347句", "BMS多维度筛选", "★★★★"],
    when: "管理多个楼栋时，需要按楼栋筛选告警，分别查看每栋楼的告警情况。",
    words: [
      { w: "building", ipa: "/ˈbɪl.dɪŋ/", pos: "名词", cn: "楼栋；建筑", memory: "① build = 建造；② building = 建筑物/楼栋。\nBridge Data Centres MY06C2 园区包含 B5、B7、C2 三栋楼。\nBMS 中按 building 筛选可以快速定位问题楼栋。", phonics: "build 读 /bɪld/，ing 读 /ɪŋ/。", collocations: [["filter by building", "按楼栋筛选"], ["building overview", "楼栋总览"], ["building management", "楼栋管理"]], examples: [["Show alarms for Building B5.", "显示B5楼的告警。"], ["Switch to Building C2.", "切换到C2楼。"]] },
    ],
    phrases: [
      { p: "filter alarms by building", ipa: "/ˈfɪl.tər əˈlɑːrmz baɪ ˈbɪl.dɪŋ/", cn: "按楼栋筛选告警", why: "filter + alarms + by + 维度 = 按某维度筛选告警。building 是 BMS 中最常用的筛选维度之一。" },
    ],
    grammar: [
      { q: "filter by 后面可以接哪些维度？", a: "BMS 常用筛选维度：\n① building（楼栋）→ B5 / B7 / C2\n② floor / level（楼层）→ L1 / L2 / L3\n③ room（房间）→ UPS Room / MV Room\n④ severity（严重等级）→ Critical / Warning / Info\n⑤ status（状态）→ Active / Cleared\n⑥ time（时间）→ Today / Last 24h\n⑦ equipment type（设备类型）→ UPS / CRAC / Generator" },
    ],
    pattern: "Filter alarms by + 筛选维度",
    patternExamples: [
      { en: "Filter alarms by floor.", cn: "按楼层筛选告警。", words: [{ w: "filter", ipa: "/ˈfɪltər/", cn: "过滤器", phonics: "fil 读 /fɪl/，ter 读 /tər/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "floor", ipa: "/flɔːr/", cn: "楼层", phonics: "floor 读 /flɔːr/" }] },
      { en: "Filter alarms by equipment type.", cn: "按设备类型筛选告警。", words: [{ w: "filter", ipa: "/ˈfɪltər/", cn: "过滤器", phonics: "fil 读 /fɪl/，ter 读 /tər/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }] },
      { en: "Filter alarms by severity and status.", cn: "按严重等级和状态筛选告警。", words: [{ w: "filter", ipa: "/ˈfɪltər/", cn: "过滤器", phonics: "fil 读 /fɪl/，ter 读 /tər/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
    ],
    thinking: "BMS 多维度筛选策略：\n① 先看全局（不筛选）→ 了解告警总量\n② 按 severity 筛选 → 聚焦 Critical\n③ 按 building 筛选 → 定位问题楼栋\n④ 按 floor 筛选 → 定位问题楼层\n⑤ 按 room 筛选 → 定位问题房间\n⑥ 组合筛选 → severity + building + time = 精确定位\n多栋楼管理时，按 building 筛选是第一步。",
    pronunciation: "building 的 ui 读 /ɪl/：/ˈbɪl.dɪŋ/。\n节奏：FIL-ter ALARMS ｜ by BUILD-ing.",
    quiz: [
      { q: "按设备类型筛选告警，怎么说？", a: "Filter alarms by equipment type." },
      { q: "管理多栋楼时，筛选的最佳顺序是什么？", a: "① 先看全局（不筛选）→ 了解总量 ② 按 severity 筛选 → 聚焦 Critical ③ 按 building 筛选 → 定位哪栋楼 ④ 按 floor/room 筛选 → 定位具体位置 ⑤ 组合筛选 → 精确定位。多栋楼管理时 building 是第一层筛选维度。" },
    ],
  },
  {
    id: 348,
    en: "Show the power monitoring dashboard.",
    cn: "显示电力监控仪表盘。",
    ipa: "/ʃoʊ ðə ˈpaʊ.ər ˈmɒn.ɪ.tər.ɪŋ ˈdæʃ.bɔːrd/",
    tags: ["第348句", "BMS仪表盘", "★★★★★"],
    when: "需要查看电力系统整体运行状态时，打开电力监控仪表盘，一目了然地看到供电链路的关键参数。",
    words: [
      { w: "power monitoring", ipa: "/ˈpaʊ.ər ˈmɒn.ɪ.tər.ɪŋ/", pos: "名词短语", cn: "电力监控", memory: "① power = 电力/功率；② monitoring = 监控。\npower monitoring = 电力系统监控（监控供电链路的电压、电流、功率、频率等参数）。\n数据中心电力监控是核心功能，任何供电异常都可能影响IT负载。", phonics: "power 读 /paʊər/，monitoring 读 /mɒn.ɪ.tər.ɪŋ/。", collocations: [["power monitoring", "电力监控"], ["power distribution", "配电"], ["power quality", "电能质量"]], examples: [["Check the power monitoring system.", "检查电力监控系统。"], ["The power monitoring shows normal operation.", "电力监控显示运行正常。"]] },
      { w: "dashboard", ipa: "/ˈdæʃ.bɔːrd/", pos: "名词", cn: "仪表盘", memory: "① dash = 猛冲/仪表板（汽车）；② board = 板。\ndashboard = 仪表盘（将关键指标集中显示的页面）。\nBMS dashboard 用图表、数字、状态灯集中展示系统关键指标。", phonics: "dash 读 /dæʃ/，board 读 /bɔːrd/。重音在第一音节。", collocations: [["power dashboard", "电力仪表盘"], ["alarm dashboard", "告警仪表盘"], ["main dashboard", "主仪表盘"]], examples: [["Open the main dashboard.", "打开主仪表盘。"], ["The dashboard shows all KPIs.", "仪表盘显示所有关键指标。"]] },
    ],
    phrases: [
      { p: "power monitoring dashboard", ipa: "/ˈpaʊ.ər ˈmɒn.ɪ.tər.ɪŋ ˈdæʃ.bɔːrd/", cn: "电力监控仪表盘", why: "系统名 + monitoring + dashboard = 某系统的监控仪表盘。dashboard 是 BMS 中最直观的查看方式。" },
    ],
    grammar: [
      { q: "dashboard 和 overview page 有什么区别？", a: "dashboard = 仪表盘（用图表、仪表盘指针、状态灯等可视化元素展示，更直观）\noverview page = 总览页面（用列表、表格、文字展示，更详细）\n✅ Show the power monitoring dashboard.（电力仪表盘 → 图表化，一眼看全）\n✅ Open the electrical overview page.（电气总览 → 列表化，信息更全）\n快速巡检用 dashboard，交接检查用 overview page。" },
    ],
    pattern: "Show the + 系统 + monitoring dashboard",
    patternExamples: [
      { en: "Show the environmental monitoring dashboard.", cn: "显示环境监控仪表盘。", words: [{ w: "monitoring", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "dashboard", ipa: "/ˈdæʃbɔːrd/", cn: "仪表盘", phonics: "dash 读 /dæʃ/，board 读 /bɔːrd/" }] },
      { en: "Show the cooling monitoring dashboard.", cn: "显示制冷监控仪表盘。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "monitoring", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "dashboard", ipa: "/ˈdæʃbɔːrd/", cn: "仪表盘", phonics: "dash 读 /dæʃ/，board 读 /bɔːrd/" }] },
      { en: "Show the main dashboard.", cn: "显示主仪表盘。", words: [{ w: "dashboard", ipa: "/ˈdæʃbɔːrd/", cn: "仪表盘", phonics: "dash 读 /dæʃ/，board 读 /bɔːrd/" }] },
    ],
    thinking: "BMS 仪表盘类型：\n① Main Dashboard（主仪表盘）→ 所有系统状态汇总\n② Power Monitoring Dashboard（电力监控仪表盘）→ 供电链路、负载、频率\n③ Environmental Dashboard（环境仪表盘）→ 温湿度、漏水、空气质量\n④ Alarm Dashboard（告警仪表盘）→ 告警统计、趋势、TOP 告警\n⑤ Energy Dashboard（能源仪表盘）→ PUE、能耗分布\n交接时通常先看 Main Dashboard，再根据需要切换。",
    pronunciation: "dashboard 的重音在第一音节：/ˈdæʃ.bɔːrd/。\npower 的 ow 读 /aʊ/：/ˈpaʊ.ər/。\n节奏：SHOW ｜ the POW-er ｜ MON-i-tor-ing ｜ DASH-board.",
    quiz: [
      { q: "显示环境监控仪表盘，怎么说？", a: "Show the environmental monitoring dashboard." },
      { q: "dashboard 和 overview page 各适合什么场景？", a: "dashboard（仪表盘）适合快速巡检，用图表和状态灯直观展示关键指标；overview page（总览页面）适合交接检查，用列表和表格展示详细信息。交接时通常先打开 dashboard 快速扫一遍全局状态，再进入各 overview page 逐项检查。" },
    ],
  },
  {
    id: 349,
    en: "Please add a note to this alarm.",
    cn: "请给这个告警添加备注。",
    ipa: "/pliːz æd ə noʊt tuː ðɪs əˈlɑːrm/",
    tags: ["第349句", "BMS备注操作", "★★★★"],
    when: "在告警记录中添加操作备注，记录处理进度、排查发现或交接信息，方便后续人员了解情况。",
    words: [
      { w: "note", ipa: "/noʊt/", pos: "名词", cn: "备注；注释", memory: "① note = 笔记/备注/注释。\n② BMS 中 add a note = 给告警/事件添加文字备注，记录处理信息。\nnote 是交接的重要工具，确保信息传递给下一班。", phonics: "n 读 /n/，ote 读 /oʊt/。o 读长音。", collocations: [["add a note", "添加备注"], ["alarm note", "告警备注"], ["operator note", "操作员备注"]], examples: [["Add a note about the vendor visit.", "添加关于供应商来访的备注。"], ["There is a note from the last shift.", "上一班留了一条备注。"]] },
    ],
    phrases: [
      { p: "add a note to this alarm", ipa: "/æd ə noʊt tuː ðɪs əˈlɑːrm/", cn: "给这个告警添加备注", why: "add a note to + 对象 = 给某对象添加备注。to 引出备注的目标对象。" },
    ],
    grammar: [
      { q: "note 和 comment 在 BMS 中有什么区别？", a: "两者在很多 BMS 中是同义的：\nnote = 备注（更正式，通常是操作员记录的处理信息）\ncomment = 评论（更随意，可能是多人讨论）\n✅ Add a note to this alarm.（给告警添加备注 → 标准用语）\n✅ Add a comment.（添加评论 → 部分系统使用）\n大多数 BMS 使用 note 或 remarks 作为标签。" },
    ],
    pattern: "Please add a note to + 对象",
    patternExamples: [
      { en: "Please add a note to the shift log.", cn: "请在交接日志中添加备注。", words: [{ w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }] },
      { en: "Please add a note about the repair status.", cn: "请添加关于维修状态的备注。", words: [{ w: "repair", ipa: "/rɪˈpeər/", cn: "维修", phonics: "re 读 /rɪ/，pair 读 /peər/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Please add a note for the next shift.", cn: "请给下一班留一条备注。", words: [{ w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }] },
    ],
    thinking: "BMS 备注最佳实践：\n① 每个 active 告警都应该有备注说明当前处理状态\n② 备注内容应包括：发现时间、排查结果、当前状态、下一步行动\n③ 交接时在关键告警上添加备注：'Handover note: vendor coming tomorrow at 10AM'\n④ 备注是交接信息传递的重要工具，比口头沟通更可靠\n好的备注 = 谁 + 做了什么 + 结果 + 下一步。",
    pronunciation: "note 的 o 读长音 /oʊ/：/noʊt/。\n节奏：Please ADD a NOTE ｜ to this ALARM.",
    quiz: [
      { q: "请给下一班留一条备注，怎么说？", a: "Please add a note for the next shift." },
      { q: "BMS 备注应该包含哪些内容？", a: "好的备注应包含四要素：① 谁做的（I / vendor / L2 support）② 做了什么（checked / repaired / replaced）③ 结果如何（normal / still active / waiting for parts）④ 下一步行动（vendor coming tomorrow / continue monitoring / escalate if worsens）。例如：'Vendor visited at 2PM, replaced faulty sensor. Alarm cleared. Continue monitoring for 24h.'" },
    ],
  },
  {
    id: 350,
    en: "Please log out of the BMS system.",
    cn: "请退出BMS系统。",
    ipa: "/pliːz lɒɡ aʊt ɒv ðə ˌbiː.ɛmˈɛs ˈsɪs.təm/",
    tags: ["第350句", "BMS系统操作", "★★★★"],
    when: "交接完成后，退出 BMS 系统，让接班人用自己的账号登录，确保操作可追溯。",
    words: [
      { w: "log out", ipa: "/lɒɡ aʊt/", pos: "动词短语", cn: "退出；注销", memory: "① log = 日志/记录；② out = 出去。\nlog out = 退出系统（与 log in 相对）。\nBMS 交接要求：每人使用自己的账号登录，操作记录可追溯到个人。\n对比：log in / sign in = 登录；log out / sign out = 退出。", phonics: "log 读 /lɒɡ/，out 读 /aʊt/。", collocations: [["log out", "退出"], ["log in", "登录"], ["log out of", "退出…系统"]], examples: [["Please log out when you finish.", "完成后请退出系统。"], ["Log in with your own account.", "用你自己的账号登录。"]] },
    ],
    phrases: [
      { p: "log out of the BMS system", ipa: "/lɒɡ aʊt ɒv ðə ˌbiː.ɛmˈɛs ˈsɪs.təm/", cn: "退出BMS系统", why: "log out of + 系统名 = 退出某个系统。of 引出退出的系统对象。" },
    ],
    grammar: [
      { q: "log out 和 close 有什么区别？", a: "log out = 退出/注销（安全退出账号，系统记录退出时间）\nclose = 关闭（直接关闭窗口，可能没有正确退出）\n✅ Please log out of the BMS.（请退出BMS → 正确注销，释放账号）\n✅ Close the browser.（关闭浏览器 → 可能没有正确退出系统）\n交接时应该 log out（正确退出），不能只 close（关闭窗口）。" },
    ],
    pattern: "Please log out of + 系统",
    patternExamples: [
      { en: "Please log out of the DCIM system.", cn: "请退出DCIM系统。", words: [{ w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please log out before handing over.", cn: "交接前请退出系统。", words: [] },
      { en: "Log out and let the next shift log in.", cn: "退出让下一班登录。", words: [{ w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }] },
    ],
    thinking: "BMS 账号管理规范：\n① 每人使用自己的账号（操作可追溯）\n② 交接时：交班人 log out → 接班人 log in\n③ 不要共享账号（违反审计要求）\n④ 离开控制台时必须 log out（防止未授权操作）\n⑤ 定期修改密码（通常每90天）\nlog out 是交接流程的最后一步操作。",
    pronunciation: "log out 的 log 读 /lɒɡ/，out 读 /aʊt/。\nBMS 逐字母读：B-M-S → /ˌbiː.ɛmˈɛs/。\n节奏：Please LOG OUT ｜ of the B-M-S ｜ SYS-tem.",
    quiz: [
      { q: "退出DCIM系统，怎么说？", a: "Please log out of the DCIM system." },
      { q: "交接时为什么要各自用自己的账号登录？", a: "因为：① 操作可追溯（每个操作都记录了是谁做的）② 审计合规（数据中心审计要求每人独立账号）③ 责任明确（出问题时可以查到是谁操作的）④ 安全性（防止未授权操作）。交接流程：交班人 log out → 接班人用自己的账号 log in。" },
    ],
  },
];

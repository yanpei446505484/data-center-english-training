// EXPORTS: MOCK_SENTENCES_PART5A

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART5A: ISentence[] = [
  {
    id: 121,
    en: "There are six open fault tickets.",
    cn: "目前共有6个未关闭的故障单。",
    ipa: "/ðeər ɑːr sɪks ˈoʊ.pən fɔːlt ˈtɪk.ɪts/",
    tags: ["第121句", "故障单统计", "★★★★★"],
    when: "事件单交接完成后，转入故障单交接。第一句话汇报未关闭故障单总数，故障单比事件单更严重，需要单独汇报。",
    words: [
      { w: "fault ticket", ipa: "/fɔːlt ˈtɪk.ɪt/", pos: "名词", cn: "故障单", memory: "① fault = 故障/过错；② ticket = 工单。\nfault ticket 比 event ticket 严重，记录的是影响业务运行的重大故障。\n对比：event ticket = 事件单（一般问题），fault ticket = 故障单（严重问题）。", phonics: "fault 读 /fɔːlt/，注意 l 和 t 连读；ticket 读 /ˈtɪk.ɪt/。", collocations: [["fault ticket", "故障单"], ["open fault ticket", "未关闭故障单"], ["fault ticket dashboard", "故障单页面"]], examples: [["There are three open fault tickets.", "有3个未关闭故障单。"], ["This fault ticket was created last week.", "这个故障单是上周创建的。"]] },
      { w: "open", ipa: "/ˈoʊ.pən/", pos: "形容词", cn: "未关闭的；待处理的", memory: "① open = 打开/开放的；② 工单语境 = 未关闭/待处理。\nopen 同时适用于 event ticket 和 fault ticket。", phonics: "o 读 /oʊ/，pen 读 /pən/，重音在第一音节。", collocations: [["open ticket", "未关闭工单"], ["open fault", "未关闭故障"], ["open issue", "未关闭问题"]], examples: [["How many fault tickets are open?", "有多少故障单未关闭？"], ["All fault tickets are still open.", "所有故障单都还没关闭。"]] },
    ],
    phrases: [
      { p: "open fault tickets", ipa: "/ˈoʊ.pən fɔːlt ˈtɪk.ɪts/", cn: "未关闭的故障单", why: "与 open event tickets 结构一致，只是 ticket 类型从 event 变为 fault。故障单优先级更高，需要单独统计。" },
    ],
    grammar: [
      { q: "fault ticket 和 event ticket 的区别？", a: "严重程度不同：\nevent ticket = 事件单（一般问题，如告警、巡检发现）\nfault ticket = 故障单（严重问题，影响业务运行）\n交接顺序：先事件单（轻）→ 再故障单（重）。\n交接时分别报各自的未关闭数、新建数、关闭数。" },
    ],
    pattern: "There are + 数量 + open fault tickets",
    patternExamples: [
      { en: "There are three open fault tickets.", cn: "有3个未关闭故障单。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "There are no open fault tickets.", cn: "没有未关闭的故障单。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "There are ten open fault tickets.", cn: "有10个未关闭故障单。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
    ],
    thinking: "故障单交接和事件单交接完全同构，只是类型词从 event 换成 fault。\n统计三板斧相同：① 未关闭总数 ② 今天新建 ③ 今天关闭。\n但故障单多一个维度：SLA 合规性（后面 141-150 句）。",
    pronunciation: "six 的 x 发 /ks/：/sɪks/。\nfault 的 au 读 /ɔː/，不是 /ɑː/：/fɔːlt/。\n节奏：There are SIX ｜ O-pen ｜ FAULT TICK-ets.",
    quiz: [
      { q: "目前有4个未关闭故障单，怎么说？", a: "There are four open fault tickets." },
      { q: "fault ticket 和 event ticket 哪个更严重？", a: "fault ticket 更严重。event ticket = 事件单（一般问题）；fault ticket = 故障单（影响业务的重大故障）。交接时先报事件单，再报故障单。" },
    ],
  },
  {
    id: 122,
    en: "Two fault tickets were created today.",
    cn: "今天新建了2个故障单。",
    ipa: "/tuː fɔːlt ˈtɪk.ɪts wɜːr kriˈeɪ.tɪd təˈdeɪ/",
    tags: ["第122句", "故障单统计", "★★★★★"],
    when: "报完故障单未关闭总数后，说明今天新建了多少个，让接班人了解本日新增故障量。",
    words: [
      { w: "created", ipa: "/kriˈeɪ.tɪd/", pos: "动词(过去分词)", cn: "被创建", memory: "① create = 创建；② created = 被创建（被动语态）。\n故障单通常由事件单升级而来，或由监控系统自动生成。", phonics: "cre 读 /kri/，a 读 /eɪ/，ted 读 /tɪd/，重音在第二音节。", collocations: [["created today", "今天创建的"], ["newly created", "新创建的"], ["auto-created", "自动创建的"]], examples: [["A new fault ticket was created.", "新建了一个故障单。"], ["This ticket was created by the system.", "这个工单是系统自动创建的。"]] },
    ],
    phrases: [
      { p: "were created today", ipa: "/wɜːr kriˈeɪ.tɪd təˈdeɪ/", cn: "今天被创建的", why: "与事件单汇报完全同构：X fault tickets were created today。被动语态强调结果，不关心谁创建的。" },
    ],
    grammar: [
      { q: "事件单和故障单的新建汇报有什么区别？", a: "句型完全一样，只是类型词不同：\n✅ Two event tickets were created today.（事件单）\n✅ Two fault tickets were created today.（故障单）\n故障单新建通常意味着有重大故障发生，数量一般比事件单少。" },
    ],
    pattern: "数量 + fault tickets + were created + 时间",
    patternExamples: [
      { en: "One fault ticket was created yesterday.", cn: "昨天新建了1个故障单。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "No fault tickets were created this week.", cn: "本周没有新建故障单。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "Three fault tickets were created last night.", cn: "昨晚新建了3个故障单。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
    ],
    thinking: "故障单统计三板斧（与事件单同构）：\n① 未关闭总数 → There are X open fault tickets.\n② 今天新建 → X fault tickets were created today.\n③ 今天关闭 → X fault tickets were closed today.",
    pronunciation: "two 和 fault 之间连读：/tuː fɔːlt/。\ncreated 重音在第二音节：/kriˈeɪ.tɪd/。\n节奏：TWO FAULT TICK-ets ｜ were cre-A-ted ｜ to-DAY.",
    quiz: [
      { q: "今天新建了4个故障单，怎么说？", a: "Four fault tickets were created today." },
      { q: "was created 和 were created 什么时候用？", a: "看主语单复数：\nOne ticket was created.（单数用 was）\nTwo tickets were created.（复数用 were）" },
    ],
  },
  {
    id: 123,
    en: "One fault ticket was closed today.",
    cn: "今天关闭了1个故障单。",
    ipa: "/wʌn fɔːlt ˈtɪk.ɪt wɒz kloʊzd təˈdeɪ/",
    tags: ["第123句", "故障单统计", "★★★★"],
    when: "报完新建数后报关闭数。故障单关闭意味着故障已经彻底解决并确认，是好消息。",
    words: [
      { w: "closed", ipa: "/kloʊzd/", pos: "动词(过去分词)", cn: "被关闭的；已关闭", memory: "① close = 关闭；② closed = 已关闭。\n故障单关闭条件：故障已修复 + 验证通过 + 客户确认。", phonics: "close 读 /kloʊz/（动词），closed 末尾加 /d/ 音：/kloʊzd/。", collocations: [["closed ticket", "已关闭工单"], ["close a ticket", "关闭工单"], ["ticket closed", "工单已关闭"]], examples: [["The fault ticket was closed after verification.", "故障单验证后关闭了。"], ["We closed two tickets today.", "我们今天关闭了2个工单。"]] },
    ],
    phrases: [
      { p: "was closed today", ipa: "/wɒz kloʊzd təˈdeɪ/", cn: "今天被关闭", why: "注意主语是 One（单数），所以用 was 不是 were。One ticket was closed（单数）vs Two tickets were closed（复数）。" },
    ],
    grammar: [
      { q: "was closed 和 were closed 怎么选？", a: "取决于主语单复数：\nOne fault ticket was closed today.（单数 → was）\nTwo fault tickets were closed today.（复数 → were）\n交接中数量变化时注意切换 was/were。" },
    ],
    pattern: "数量 + fault ticket(s) + was/were closed + 时间",
    patternExamples: [
      { en: "Two fault tickets were closed yesterday.", cn: "昨天关闭了2个故障单。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "No fault tickets were closed this week.", cn: "本周没有关闭故障单。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "One fault ticket was closed this morning.", cn: "今天上午关闭了1个故障单。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
    ],
    thinking: "故障单统计完整流程：\n① There are 6 open fault tickets.（未关闭6个）\n② 2 were created today.（新建2个）\n③ 1 was closed today.（关闭1个）\n→ 净增1个，积压微增。故障单积压需要特别关注 SLA。",
    pronunciation: "one 的 o 读 /wʌn/，不是 /wɒn/。\nwas 弱读 /wəz/，在快速语流中几乎听不到。\n节奏：ONE FAULT TICK-et ｜ was CLOSED ｜ to-DAY.",
    quiz: [
      { q: "今天关闭了3个故障单，怎么说？", a: "Three fault tickets were closed today." },
      { q: "One ticket was closed 和 Two tickets were closed 语法区别？", a: "单数用 was，复数用 were。One → was closed；Two/Three → were closed。" },
    ],
  },
  {
    id: 124,
    en: "Three fault tickets are still under investigation.",
    cn: "目前有3个故障单仍在调查中。",
    ipa: "/θriː fɔːlt ˈtɪk.ɪts ɑːr stɪl ˈʌn.dər ˌɪn.vɛs.tɪˈɡeɪ.ʃən/",
    tags: ["第124句", "故障单状态", "★★★★★"],
    when: "报完统计总数后，开始按状态分类汇报。under investigation 是最常见的故障单进行中状态，表示还在查根因。",
    words: [
      { w: "under investigation", ipa: "/ˈʌn.dər ˌɪn.vɛs.tɪˈɡeɪ.ʃən/", pos: "介词短语", cn: "在调查中", memory: "① under = 在...之下/处于...状态；② investigation = 调查/研究。\nunder investigation = 正在调查中（固定搭配）。\n类似结构：under review（审核中）、under observation（观察中）。", phonics: "under 读 /ˈʌn.dər/，investigation 重音在第四音节：in-ves-ti-GA-tion。", collocations: [["under investigation", "在调查中"], ["under review", "在审核中"], ["under observation", "在观察中"]], examples: [["The incident is under investigation.", "事件正在调查中。"], ["This fault is still under investigation.", "这个故障仍在调查中。"]] },
      { w: "still", ipa: "/stɪl/", pos: "副词", cn: "仍然；还在", memory: "① still = 仍然（表示状态持续没变）；② 放在 be 动词后面。\nare still = 仍然在（强调延续性）。", phonics: "still 读 /stɪl/，i 读短音 /ɪ/。", collocations: [["still open", "仍未关闭"], ["still active", "仍然活动"], ["still waiting", "仍在等待"]], examples: [["The ticket is still open.", "工单仍未关闭。"], ["The alarm is still active.", "告警仍然活动。"]] },
    ],
    phrases: [
      { p: "still under investigation", ipa: "/stɪl ˈʌn.dər ˌɪn.vɛs.tɪˈɡeɪ.ʃən/", cn: "仍在调查中", why: "still 强调这个状态已经持续一段时间但还没结束。under investigation 是故障单最常见状态之一，表示还在找根因。" },
    ],
    grammar: [
      { q: "under investigation 和 in progress 有什么区别？", a: "两者都表示'在处理中'，但侧重点不同：\nunder investigation = 在调查中（还在找原因，不确定根因）\nin progress = 在处理中（原因已知，正在修复）\n故障单流程：under investigation → in progress → resolved → closed。" },
    ],
    pattern: "数量 + fault tickets + are still under investigation",
    patternExamples: [
      { en: "Two fault tickets are still under investigation.", cn: "有2个故障单仍在调查中。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "One fault ticket is still under investigation.", cn: "有1个故障单仍在调查中。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "All fault tickets are still under investigation.", cn: "所有故障单都仍在调查中。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
    ],
    thinking: "故障单状态分类汇报：\n① under investigation（调查中）→ 还没找到根因\n② waiting for vendor/parts/approval（等待中）→ 卡在某环节\n③ resolved but pending confirmation（已修复待确认）→ 快关单了\n按状态分类让接班人一眼看出哪些需要关注。",
    pronunciation: "investigation 重音在第四音节，五音节词：in-ves-ti-GA-tion。\nstill 不要读成 /staɪl/，是 /stɪl/。\n节奏：THREE FAULT TICK-ets ｜ are STILL ｜ un-der IN-ves-ti-GA-tion.",
    quiz: [
      { q: "有5个故障单仍在调查中，怎么说？", a: "Five fault tickets are still under investigation." },
      { q: "under investigation 和 in progress 哪个更早？", a: "under investigation 更早（还在找原因）→ in progress（已知原因在修复）。故障单流程：investigation → progress → resolved → closed。" },
    ],
  },
  {
    id: 125,
    en: "One fault ticket has been resolved but is waiting for customer confirmation.",
    cn: "有1个故障单已经修复，正在等待客户确认。",
    ipa: "/wʌn fɔːlt ˈtɪk.ɪt hæz bɪn rɪˈzɒlvd bʌt ɪz ˈweɪ.tɪŋ fɔːr ˈkʌs.tə.mər ˌkɒn.fərˈmeɪ.ʃən/",
    tags: ["第125句", "故障单状态", "★★★★★"],
    when: "汇报快关单的故障单状态：已修复但还没关，卡在客户确认环节。这种状态需要接班人知道——不需要再修，只需跟进确认。",
    words: [
      { w: "resolved", ipa: "/rɪˈzɒlvd/", pos: "动词(过去分词)", cn: "已修复；已解决", memory: "① resolve = 解决/修复；② resolved = 已解决的。\n故障单状态：open → under investigation → resolved → closed。\nresolved 不等于 closed，resolved 是修好了，closed 是确认关闭。", phonics: "re 读 /rɪ/，solved 读 /zɒlvd/，重音在第二音节。", collocations: [["resolved ticket", "已修复工单"], ["resolve a fault", "修复故障"], ["issue resolved", "问题已解决"]], examples: [["The fault has been resolved.", "故障已修复。"], ["We resolved this issue yesterday.", "我们昨天解决了这个问题。"]] },
      { w: "customer confirmation", ipa: "/ˈkʌs.tə.mər ˌkɒn.fərˈmeɪ.ʃən/", pos: "名词", cn: "客户确认", memory: "① customer = 客户；② confirmation = 确认/证实。\n数据中心故障修复后需要客户确认业务恢复正常，才能关单。", phonics: "customer 读 /ˈkʌs.tə.mər/，confirmation 重音在第三音节：con-fir-MA-tion。", collocations: [["customer confirmation", "客户确认"], ["pending confirmation", "待确认"], ["awaiting confirmation", "等待确认"]], examples: [["We need customer confirmation to close the ticket.", "我们需要客户确认才能关闭工单。"], ["The ticket is waiting for confirmation.", "工单在等待确认。"]] },
    ],
    phrases: [
      { p: "has been resolved but is waiting for", ipa: "/hæz bɪn rɪˈzɒlvd bʌt ɪz ˈweɪ.tɪŋ fɔːr/", cn: "已经修复但正在等待", why: "but 连接两个状态：前半句说好消息（已修复），后半句说还需要什么（客户确认）。这是故障单交接中常见的'快关单但还差一步'状态。" },
    ],
    grammar: [
      { q: "has been resolved 和 was resolved 有什么区别？", a: "has been resolved = 现在完成时被动（强调'现在已经修好了'，结果对现在有影响）\nwas resolved = 一般过去时被动（强调'在过去某个时间修的'）\n交接中用 has been resolved 更合适，因为重点是'现在状态是已修复'。" },
    ],
    pattern: "数量 + fault ticket + has/have been resolved but is/are waiting for + 等待对象",
    patternExamples: [
      { en: "Two fault tickets have been resolved but are waiting for vendor confirmation.", cn: "有2个故障单已修复但在等供应商确认。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }, { w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }] },
      { en: "One fault ticket has been resolved but is waiting for testing.", cn: "有1个故障单已修复但在等待测试。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }, { w: "testing", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "The fault ticket has been resolved but is waiting for management sign-off.", cn: "故障单已修复但在等管理层签字。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
    ],
    thinking: "故障单生命周期：\nopen → under investigation → in progress → resolved → closed\nresolved 到 closed 之间经常卡在确认环节：\n- customer confirmation（客户确认）\n- vendor confirmation（供应商确认）\n- management approval（管理层批准）\n交接时要特别说明卡在哪个环节，接班人只需跟进不需重做。",
    pronunciation: "resolved 的 v 和 d 要清晰：/rɪˈzɒlvd/。\nconfirmation 五音节：con-fir-MA-tion，重音在第三音节。\n节奏：ONE FAULT TICK-et ｜ has been re-SOLVED ｜ BUT ｜ is WAIT-ing ｜ for CUS-to-mer con-fir-MA-tion.",
    quiz: [
      { q: "有2个故障单已修复但在等供应商确认，怎么说？", a: "Two fault tickets have been resolved but are waiting for vendor confirmation." },
      { q: "resolved 和 closed 有什么区别？", a: "resolved = 已修复（技术层面解决了，但还没正式关单）；closed = 已关闭（确认修复有效，正式结单）。流程：resolved → 确认 → closed。" },
    ],
  },
  {
    id: 126,
    en: "Please open the fault ticket dashboard.",
    cn: "请打开故障单页面。",
    ipa: "/pliːz ˈoʊ.pən ðə fɔːlt ˈtɪk.ɪt ˈdæʃ.bɔːrd/",
    tags: ["第126句", "故障单操作", "★★★★"],
    when: "统计汇报完成后，引导接班人打开故障单管理页面，准备逐单详细交接。",
    words: [
      { w: "dashboard", ipa: "/ˈdæʃ.bɔːrd/", pos: "名词", cn: "仪表板；管理页面", memory: "① dash = 猛冲/仪表板；② board = 板/面板。\ndashboard 原指汽车仪表板，IT 中指数据概览页面。\n故障单 dashboard = 故障单管理总览页面。", phonics: "dash 读 /dæʃ/，board 读 /bɔːrd/，重音在第一音节。", collocations: [["fault ticket dashboard", "故障单页面"], ["alarm dashboard", "告警页面"], ["open the dashboard", "打开管理页面"]], examples: [["Please check the dashboard.", "请查看管理页面。"], ["The dashboard shows all open tickets.", "页面显示所有未关闭工单。"]] },
    ],
    phrases: [
      { p: "open the fault ticket dashboard", ipa: "/ˈoʊ.pən ðə fɔːlt ˈtɪk.ɪt ˈdæʃ.bɔːrd/", cn: "打开故障单管理页面", why: "这里的 open 是动词'打开'（页面），和前面 open ticket（形容词'未关闭的工单'）词性不同。" },
    ],
    grammar: [
      { q: "dashboard 和 list 有什么区别？", a: "dashboard = 管理总览页面（有图表、统计、筛选功能）\nlist = 列表（纯数据排列）\n✅ Please open the dashboard.（打开管理页面 → 有图表和统计）\n✅ Please check the list.（查看列表 → 纯数据）\n交接时通常说 open the dashboard，因为需要看整体状态。" },
    ],
    pattern: "Please open the + 系统/页面 + dashboard",
    patternExamples: [
      { en: "Please open the alarm dashboard.", cn: "请打开告警页面。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "dashboard", ipa: "/ˈdæʃbɔːrd/", cn: "仪表盘", phonics: "dash 读 /dæʃ/，board 读 /bɔːrd/" }] },
      { en: "Please open the event ticket dashboard.", cn: "请打开事件单页面。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }, { w: "dashboard", ipa: "/ˈdæʃbɔːrd/", cn: "仪表盘", phonics: "dash 读 /dæʃ/，board 读 /bɔːrd/" }] },
      { en: "Please open the SLA dashboard.", cn: "请打开SLA管理页面。", words: [{ w: "dashboard", ipa: "/ˈdæʃbɔːrd/", cn: "仪表盘", phonics: "dash 读 /dæʃ/，board 读 /bɔːrd/" }] },
    ],
    thinking: "交接中'打开页面'是操作指令，不是状态汇报。\n交接流程：状态汇报（There are X tickets...）→ 操作指令（Please open the dashboard）→ 逐单详细交接。\n操作指令用 Please + 动词原形，语气礼貌但明确。",
    pronunciation: "dashboard 重音在第一音节：DASH-board /ˈdæʃ.bɔːrd/。\nfault 的 au 读 /ɔː/，不是 /aʊ/。\n节奏：Please O-pen ｜ the FAULT TICK-et ｜ DASH-board.",
    quiz: [
      { q: "请打开事件单页面，怎么说？", a: "Please open the event ticket dashboard." },
      { q: "open 在 open ticket 和 open the dashboard 中词性一样吗？", a: "不一样。open ticket 中 open 是形容词（未关闭的）；open the dashboard 中 open 是动词（打开）。" },
    ],
  },
  {
    id: 127,
    en: "Please sort the fault tickets by priority.",
    cn: "请按优先级排序故障单。",
    ipa: "/pliːz sɔːrt ðə fɔːlt ˈtɪk.ɪts baɪ praɪˈɒr.ə.ti/",
    tags: ["第127句", "故障单操作", "★★★★"],
    when: "打开页面后，指导接班人按优先级排序，确保先看最紧急的故障单。",
    words: [
      { w: "sort", ipa: "/sɔːrt/", pos: "动词", cn: "排序；分类", memory: "① sort = 排序/整理；② sort by = 按...排序。\n常用排序维度：priority（优先级）、date（日期）、severity（严重程度）。", phonics: "sort 读 /sɔːrt/，or 读长音 /ɔːr/。", collocations: [["sort by priority", "按优先级排序"], ["sort by date", "按日期排序"], ["sort by severity", "按严重程度排序"]], examples: [["Please sort by priority.", "请按优先级排序。"], ["The tickets are sorted by date.", "工单按日期排列。"]] },
      { w: "priority", ipa: "/praɪˈɒr.ə.ti/", pos: "名词", cn: "优先级", memory: "① prior = 优先的；② priority = 优先级。\nIT 常用优先级：P1（紧急）、P2（高）、P3（中）、P4（低）。", phonics: "pri 读 /praɪ/，or 读 /ɒr/，ity 读 /əti/，重音在第二音节。", collocations: [["high priority", "高优先级"], ["by priority", "按优先级"], ["priority ticket", "高优先级工单"]], examples: [["This is a high-priority ticket.", "这是一个高优先级工单。"], ["Please check the priority first.", "请先检查优先级。"]] },
    ],
    phrases: [
      { p: "sort by priority", ipa: "/sɔːrt baɪ praɪˈɒr.ə.ti/", cn: "按优先级排序", why: "sort by + 排序维度 是固定搭配。交接时先按优先级排序，确保最紧急的故障单最先检查。" },
    ],
    grammar: [
      { q: "sort by priority 和 sort by severity 有什么区别？", a: "priority = 优先级（P1/P2/P3/P4，业务影响程度）\nseverity = 严重程度（Critical/Warning/Info，技术层面严重度）\n✅ sort by priority（按业务优先级排 → 先处理 P1）\n✅ sort by severity（按技术严重度排 → 先处理 Critical）\n故障单通常按 priority 排，告警通常按 severity 排。" },
    ],
    pattern: "Please sort the + 对象 + by + 排序维度",
    patternExamples: [
      { en: "Please sort the tickets by due date.", cn: "请按到期时间排序工单。", words: [{ w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "Please sort the alarms by severity.", cn: "请按严重程度排序告警。", words: [{ w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Please sort the tasks by status.", cn: "请按状态排序任务。", words: [{ w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
    ],
    thinking: "排序是交接操作的基础步骤：\n告警排序 → sort by severity（技术严重度）\n事件单排序 → sort by priority/due date（优先级/到期时间）\n故障单排序 → sort by priority（业务优先级）\n先排序再逐单检查，确保最重要的先看。",
    pronunciation: "sort 的 or 读 /ɔːr/，不是 /ɒr/。\npriority 重音在第二音节：pri-OR-i-ty /praɪˈɒr.ə.ti/。\n节奏：Please SORT ｜ the FAULT TICK-ets ｜ by pri-OR-i-ty.",
    quiz: [
      { q: "请按到期时间排序事件单，怎么说？", a: "Please sort the event tickets by due date." },
      { q: "priority 和 severity 在什么场景用？", a: "priority（优先级 P1-P4）用于工单/故障单，反映业务紧急度；severity（严重程度 Critical/Warning）用于告警，反映技术严重度。" },
    ],
  },
  {
    id: 128,
    en: "Please review all critical fault tickets first.",
    cn: "请先检查所有严重故障单。",
    ipa: "/pliːz rɪˈvjuː ɔːl ˈkrɪt.ɪ.kəl fɔːlt ˈtɪk.ɪts fɜːrst/",
    tags: ["第128句", "故障单操作", "★★★★★"],
    when: "排序完成后，指示接班人优先检查 Critical 级别的故障单，这些是影响最大的。",
    words: [
      { w: "review", ipa: "/rɪˈvjuː/", pos: "动词", cn: "检查；审查", memory: "① re = 再次；② view = 看。\nreview = 重新查看/审查。交接中 review = 逐条检查确认。", phonics: "re 读 /rɪ/，view 读 /vjuː/，重音在第二音节。", collocations: [["review tickets", "检查工单"], ["review alarms", "检查告警"], ["review progress", "检查进展"]], examples: [["Let's review the tickets.", "我们检查一下工单。"], ["Please review the alarm list.", "请检查告警列表。"]] },
      { w: "critical", ipa: "/ˈkrɪt.ɪ.kəl/", pos: "形容词", cn: "严重的；关键的", memory: "① critical = 严重的/关键的/批评的；② 在 IT 中 = 最高严重级别。\nCritical fault = 严重故障（影响核心业务）。", phonics: "crit 读 /krɪt/，ical 读 /ɪkəl/，重音在第一音节。", collocations: [["critical fault", "严重故障"], ["critical ticket", "严重工单"], ["critical alarm", "严重告警"]], examples: [["This is a critical fault.", "这是一个严重故障。"], ["All critical tickets must be reviewed first.", "所有严重工单必须优先检查。"]] },
    ],
    phrases: [
      { p: "review all critical fault tickets first", ipa: "/rɪˈvjuː ɔːl ˈkrɪt.ɪ.kəl fɔːlt ˈtɪk.ɪts fɜːrst/", cn: "先检查所有严重故障单", why: "first 放句末强调'最先做这件事'。交接时按严重程度分层检查：Critical → High → Medium → Low。" },
    ],
    grammar: [
      { q: "review 和 check 有什么区别？", a: "review = 系统性审查（逐条仔细看，常用于交接场景）\ncheck = 简单检查（快速看一下状态）\n✅ Let's review all tickets.（我们逐条审查所有工单 → 交接用语）\n✅ Please check this alarm.（请检查一下这个告警 → 快速确认）\n交接中用 review 更专业。" },
    ],
    pattern: "Please review all + 级别 + 对象 + first",
    patternExamples: [
      { en: "Please review all critical alarms first.", cn: "请先检查所有严重告警。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "critical", ipa: "/ˈkrɪtɪkəl/", cn: "严重", phonics: "crit 读 /krɪt/，ical 读 /ɪkəl/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Please review all high-priority tickets first.", cn: "请先检查所有高优先级工单。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "Please review all pending items first.", cn: "请先检查所有待处理事项。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
    ],
    thinking: "交接检查顺序原则：\n① 先 Critical/High priority → 影响最大的先看\n② 再 Warning/Medium → 次要的\n③ 最后 Info/Low → 最轻的\n这个优先级分层在告警、事件单、故障单交接中通用。",
    pronunciation: "review 重音在第二音节：re-VIEW /rɪˈvjuː/。\ncritical 重音在第一音节：CRIT-i-cal /ˈkrɪt.ɪ.kəl/。\n节奏：Please re-VIEW ｜ ALL CRIT-i-cal ｜ FAULT TICK-ets ｜ FIRST.",
    quiz: [
      { q: "请先检查所有严重告警，怎么说？", a: "Please review all critical alarms first." },
      { q: "review 和 check 在交接中怎么用？", a: "review = 逐条系统审查（交接用语）：Let's review all tickets.；check = 快速检查（日常用语）：Please check this alarm." },
    ],
  },
  {
    id: 129,
    en: "Fault Ticket FT-2026-001 is assigned to the electrical team.",
    cn: "故障单 FT-2026-001 已分配给电气团队。",
    ipa: "/fɔːlt ˈtɪk.ɪt ˌɛf.tiː-twɛn.ti.twɛn.ti.sɪks-ˈwʌn ɪz əˈsaɪnd tuː ðə ɪˈlɛk.trɪ.kəl tiːm/",
    tags: ["第129句", "故障单分配", "★★★★★"],
    when: "开始逐单详细交接。先报故障单编号，再说分配给哪个团队，让接班人知道该找谁跟进。",
    words: [
      { w: "assigned", ipa: "/əˈsaɪnd/", pos: "动词(过去分词)", cn: "已分配", memory: "① assign = 分配/指派；② assigned to = 被分配给。\n工单分配是交接关键信息，接班人需要知道谁在负责。", phonics: "as 读 /ə/，signed 读 /saɪnd/，重音在第二音节。", collocations: [["assigned to", "分配给"], ["assign a ticket", "分配工单"], ["unassigned", "未分配的"]], examples: [["This ticket is assigned to John.", "这个工单分配给了John。"], ["The ticket hasn't been assigned yet.", "工单还没分配。"]] },
      { w: "electrical team", ipa: "/ɪˈlɛk.trɪ.kəl tiːm/", pos: "名词", cn: "电气团队", memory: "① electrical = 电气的；② team = 团队。\n数据中心常见团队：electrical（电气）、mechanical/HVAC（暖通）、IT（信息技术）、security（安保）。", phonics: "electrical 读 /ɪˈlɛk.trɪ.kəl/，重音在第二音节。", collocations: [["electrical team", "电气团队"], ["electrical fault", "电气故障"], ["electrical system", "电气系统"]], examples: [["The electrical team is handling this.", "电气团队在处理这个。"], ["Contact the electrical team.", "联系电气团队。"]] },
    ],
    phrases: [
      { p: "is assigned to", ipa: "/ɪz əˈsaɪnd tuː/", cn: "已分配给", why: "is assigned to = 被动语态，表示工单已经被分配给了某个团队/个人。交接时必须说明分配对象，便于接班人跟进。" },
    ],
    grammar: [
      { q: "assigned to 后面接什么？", a: "assigned to + 团队/人名：\n✅ assigned to the electrical team（分配给电气团队）\n✅ assigned to John（分配给John）\n✅ assigned to the vendor（分配给供应商）\n❌ assigned for（错误介词）\n注意：to 是固定搭配，不能换成 for。" },
    ],
    pattern: "Fault Ticket + 编号 + is assigned to + 团队/人员",
    patternExamples: [
      { en: "Fault Ticket FT-002 is assigned to the HVAC team.", cn: "故障单 FT-002 已分配给暖通团队。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }, { w: "hvac", ipa: "/ˌeɪtʃˈviːˈeɪˈsiː/", cn: "暖通", phonics: "H-V-A-C 逐字母读" }] },
      { en: "Fault Ticket FT-003 is assigned to the vendor.", cn: "故障单 FT-003 已分配给供应商。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }, { w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }] },
      { en: "Fault Ticket FT-004 is assigned to the IT team.", cn: "故障单 FT-004 已分配给IT团队。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
    ],
    thinking: "逐单交接模板：\n① 报编号 → Fault Ticket FT-xxx\n② 报分配 → is assigned to + 团队\n③ 报状态 → is waiting for / is under investigation / has been resolved\n④ 报下一步 → needs / requires + 下一步行动\n按这个模板逐单过，条理清晰不遗漏。",
    pronunciation: "assigned 重音在第二音节：as-SIGNED /əˈsaɪnd/。\nelectrical 五音节：e-LEC-tri-cal，重音在第二音节。\n节奏：FAULT TICK-et FT-001 ｜ is as-SIGNED ｜ to the e-LEC-tri-cal TEAM.",
    quiz: [
      { q: "故障单 FT-005 已分配给IT团队，怎么说？", a: "Fault Ticket FT-005 is assigned to the IT team." },
      { q: "assigned to 和 assigned for 哪个正确？", a: "assigned to 是正确的。to 是固定搭配：This ticket is assigned to the team.（这个工单分配给团队。）不能用 for。" },
    ],
  },
  {
    id: 130,
    en: "Fault Ticket FT-2026-002 is assigned to the mechanical team.",
    cn: "故障单 FT-2026-002 已分配给暖通团队。",
    ipa: "/fɔːlt ˈtɪk.ɪt ˌɛf.tiː-twɛn.ti.twɛn.ti.sɪks-ˈtuː ɪz əˈsaɪnd tuː ðə məˈkæn.ɪ.kəl tiːm/",
    tags: ["第130句", "故障单分配", "★★★★★"],
    when: "继续逐单交接，这张故障单涉及暖通（HVAC/精密空调）系统，分配给了机械/暖通团队。",
    words: [
      { w: "mechanical team", ipa: "/məˈkæn.ɪ.kəl tiːm/", pos: "名词", cn: "暖通团队；机械团队", memory: "① mechanical = 机械的/暖通的；② team = 团队。\n数据中心中 mechanical team 通常负责 HVAC（暖通空调）、冷却系统、管道等。\n也叫 HVAC team 或 cooling team。", phonics: "mechanical 读 /məˈkæn.ɪ.kəl/，重音在第二音节。注意 ch 读 /k/ 不是 /tʃ/。", collocations: [["mechanical team", "暖通/机械团队"], ["mechanical fault", "机械故障"], ["mechanical system", "机械系统"]], examples: [["The mechanical team fixed the cooling issue.", "暖通团队修复了冷却问题。"], ["Contact the mechanical team for HVAC issues.", "暖通问题联系暖通团队。"]] },
    ],
    phrases: [
      { p: "the mechanical team", ipa: "/ðə məˈkæn.ɪ.kəl tiːm/", cn: "暖通团队", why: "mechanical 在数据中心语境中专指暖通/机械系统团队，负责精密空调、冷却塔、冷冻水系统等。和 electrical team（电气团队）是两大基础设施团队。" },
    ],
    grammar: [
      { q: "数据中心常见团队英文名？", a: "electrical team = 电气团队（UPS、配电、发电机）\nmechanical team = 暖通团队（空调、冷却、管道）\nIT team = 信息技术团队（服务器、网络、存储）\nsecurity team = 安保团队（门禁、监控、消防）\nvendor = 供应商（外部技术支持）" },
    ],
    pattern: "Fault Ticket + 编号 + is assigned to the mechanical team",
    patternExamples: [
      { en: "Fault Ticket FT-010 is assigned to the mechanical team.", cn: "故障单 FT-010 已分配给暖通团队。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }, { w: "mechanical", ipa: "/mɪˈkænɪkəl/", cn: "机械", phonics: "me 读 /mɪ/，chanical 读 /kænɪkəl/" }] },
      { en: "The cooling fault is assigned to the mechanical team.", cn: "冷却故障已分配给暖通团队。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "mechanical", ipa: "/mɪˈkænɪkəl/", cn: "机械", phonics: "me 读 /mɪ/，chanical 读 /kænɪkəl/" }] },
      { en: "This HVAC issue is assigned to the mechanical team.", cn: "这个暖通问题已分配给暖通团队。", words: [{ w: "hvac", ipa: "/ˌeɪtʃˈviːˈeɪˈsiː/", cn: "暖通", phonics: "H-V-A-C 逐字母读" }, { w: "issue", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }, { w: "mechanical", ipa: "/mɪˈkænɪkəl/", cn: "机械", phonics: "me 读 /mɪ/，chanical 读 /kænɪkəl/" }] },
    ],
    thinking: "数据中心两大基础设施团队：\nelectrical team → 管电（UPS、发电机、PDU、配电柜）\nmechanical team → 管冷（精密空调、冷却塔、冷冻水、温湿度）\n交接时说清楚分配给哪个团队，接班人就知道该找谁对接。\n其他团队：IT team（管网络/服务器）、security team（管门禁/消防）。",
    pronunciation: "mechanical 的 ch 读 /k/，不是 /tʃ/：me-KAN-i-cal /məˈkæn.ɪ.kəl/。\n不要读成 me-CHAN-i-cal（错误）。\n节奏：FAULT TICK-et FT-002 ｜ is as-SIGNED ｜ to the me-KAN-i-cal TEAM.",
    quiz: [
      { q: "故障单 FT-008 已分配给暖通团队，怎么说？", a: "Fault Ticket FT-008 is assigned to the mechanical team." },
      { q: "electrical team 和 mechanical team 各管什么？", a: "electrical team 管电（UPS、发电机、PDU）；mechanical team 管冷（精密空调、冷却塔、冷冻水）。数据中心基础设施两大核心。" },
    ],
  },
  {
    id: 131,
    en: "Fault Ticket FT-2026-003 is waiting for vendor support.",
    cn: "故障单 FT-2026-003 正在等待供应商支持。",
    ipa: "/fɔːlt ˈtɪk.ɪt ˌɛf.tiː-twɛn.ti.twɛn.ti.sɪks-ˈθriː ɪz ˈweɪ.tɪŋ fɔːr ˈvɛn.dər səˈpɔːrt/",
    tags: ["第131句", "故障单等待状态", "★★★★★"],
    when: "这张故障单卡在等待供应商环节，内部团队无法独立解决，需要外部技术支持介入。",
    words: [
      { w: "vendor support", ipa: "/ˈvɛn.dər səˈpɔːrt/", pos: "名词", cn: "供应商支持", memory: "① vendor = 供应商/厂商；② support = 支持/技术支持。\n当内部团队无法解决时，需要联系设备供应商提供技术支持。\n常见供应商：UPS厂商、空调厂商、发电机厂商。", phonics: "vendor 读 /ˈvɛn.dər/，support 读 /səˈpɔːrt/。", collocations: [["vendor support", "供应商支持"], ["contact the vendor", "联系供应商"], ["vendor response", "供应商响应"]], examples: [["We need vendor support for this issue.", "这个问题需要供应商支持。"], ["The vendor is on-site now.", "供应商现在在现场。"]] },
    ],
    phrases: [
      { p: "is waiting for vendor support", ipa: "/ɪz ˈweɪ.tɪŋ fɔːr ˈvɛn.dər səˈpɔːrt/", cn: "正在等待供应商支持", why: "waiting for + 等待对象 是交接中高频句型。vendor support 表示需要外部厂商介入，通常意味着问题比较复杂或需要专用备件。" },
    ],
    grammar: [
      { q: "waiting for vendor support 和 waiting for vendor 有什么区别？", a: "waiting for vendor = 等供应商（泛指，可能是等回复/等人到场）\nwaiting for vendor support = 等供应商技术支持（明确是技术层面）\nwaiting for vendor feedback = 等供应商反馈（明确是等信息）\n交接时说得越具体越好，让对方知道具体在等什么。" },
    ],
    pattern: "Fault Ticket + 编号 + is waiting for vendor support",
    patternExamples: [
      { en: "Fault Ticket FT-007 is waiting for vendor support.", cn: "故障单 FT-007 正在等待供应商支持。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }, { w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }] },
      { en: "The UPS fault is waiting for vendor support.", cn: "UPS故障在等供应商支持。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }] },
      { en: "This ticket is waiting for the vendor's engineer.", cn: "这个工单在等供应商的工程师。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }, { w: "vendors", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }, { w: "engineer", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }] },
    ],
    thinking: "故障单等待状态汇总（waiting for 系列）：\n① waiting for vendor support（等供应商支持）→ 需要外部技术\n② waiting for spare parts（等备件）→ 需要换零件\n③ waiting for customer approval（等客户批准）→ 需要客户同意\n④ waiting for management approval（等管理层批准）→ 需要上级审批\n这四种等待状态在故障单交接中最高频。",
    pronunciation: "vendor 读 /ˈvɛn.dər/，不是 /ˈvɒn.dər/。\nsupport 重音在第二音节：sup-PORT /səˈpɔːrt/。\n节奏：FAULT TICK-et FT-003 ｜ is WAIT-ing ｜ for VEN-dor sup-PORT.",
    quiz: [
      { q: "故障单 FT-011 正在等待供应商支持，怎么说？", a: "Fault Ticket FT-011 is waiting for vendor support." },
      { q: "vendor support 和 vendor feedback 有什么区别？", a: "vendor support = 供应商技术支持（需要人来修/指导）；vendor feedback = 供应商反馈（等信息/回复）。support 更紧急，feedback 偏沟通。" },
    ],
  },
  {
    id: 132,
    en: "Fault Ticket FT-2026-004 is waiting for spare parts.",
    cn: "故障单 FT-2026-004 正在等待备件。",
    ipa: "/fɔːlt ˈtɪk.ɪt ˌɛf.tiː-twɛn.ti.twɛn.ti.sɪks-ˈfɔːr ɪz ˈweɪ.tɪŋ fɔːr speər pɑːrts/",
    tags: ["第132句", "故障单等待状态", "★★★★★"],
    when: "这张故障单需要更换零件，但备件还没到货。交接时说明备件预计到货时间很重要。",
    words: [
      { w: "spare parts", ipa: "/speər pɑːrts/", pos: "名词", cn: "备件；零配件", memory: "① spare = 备用的；② parts = 零件/部件。\nspare parts = 备用零件，用于替换故障设备的部件。\n数据中心常见备件：UPS电池、空调压缩机、风扇、传感器。", phonics: "spare 读 /speər/，parts 读 /pɑːrts/。", collocations: [["spare parts", "备件"], ["spare part inventory", "备件库存"], ["order spare parts", "订购备件"]], examples: [["We need to order spare parts.", "我们需要订购备件。"], ["The spare parts will arrive tomorrow.", "备件明天到货。"]] },
    ],
    phrases: [
      { p: "waiting for spare parts", ipa: "/ˈweɪ.tɪŋ fɔːr speər pɑːrts/", cn: "正在等待备件", why: "这是故障单常见的等待原因之一。设备坏了需要换零件，但备件还没到货，工单就卡在这个环节。交接时最好补充预计到货时间。" },
    ],
    grammar: [
      { q: "spare parts 和 replacement parts 有什么区别？", a: "两者意思接近，但使用场景略有不同：\nspare parts = 备件（库存中备用的零件，随时可换）\nreplacement parts = 替换件（专门订购来替换的零件）\n交接中常用 spare parts，因为数据中心通常有自己的备件库。" },
    ],
    pattern: "Fault Ticket + 编号 + is waiting for spare parts",
    patternExamples: [
      { en: "Fault Ticket FT-009 is waiting for spare parts.", cn: "故障单 FT-009 正在等待备件。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "The UPS ticket is waiting for a new battery.", cn: "UPS工单在等新电池。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }, { w: "battery", ipa: "/ˈbætəri/", cn: "电池", phonics: "bat 读 /bæt/，tery 读 /təri/" }] },
      { en: "This fault is waiting for replacement parts from the vendor.", cn: "这个故障在等供应商的替换件。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "replacement", ipa: "/rɪˈpleɪs/", cn: "更换", phonics: "re 读 /rɪ/，place 读 /pleɪs/" }, { w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }] },
    ],
    thinking: "故障单等待备件时的交接要点：\n① 什么备件 → spare parts for what equipment\n② 预计到货时间 → ETA (Estimated Time of Arrival)\n③ 备件到了之后谁安装 → which team will install\n接班人需要知道这三个信息才能继续跟进。",
    pronunciation: "spare 读 /speər/，are 发 /eər/ 双元音。\nparts 读 /pɑːrts/，ar 发 /ɑːr/。\n节奏：FAULT TICK-et FT-004 ｜ is WAIT-ing ｜ for SPARE PARTS.",
    quiz: [
      { q: "故障单 FT-012 正在等待备件，怎么说？", a: "Fault Ticket FT-012 is waiting for spare parts." },
      { q: "等待备件时交接要补充哪些信息？", a: "① 什么备件（spare parts for what）② 预计到货时间（ETA）③ 到货后谁安装（which team）。这三个信息让接班人能有效跟进。" },
    ],
  },
  {
    id: 133,
    en: "Fault Ticket FT-2026-005 is waiting for customer approval.",
    cn: "故障单 FT-2026-005 正在等待客户批准。",
    ipa: "/fɔːlt ˈtɪk.ɪt ˌɛf.tiː-twɛn.ti.twɛn.ti.sɪks-ˈfaɪv ɪz ˈweɪ.tɪŋ fɔːr ˈkʌs.tə.mər əˈpruː.vəl/",
    tags: ["第133句", "故障单等待状态", "★★★★★"],
    when: "这张故障单修复方案需要客户同意才能执行（比如需要停机维护），目前卡在客户审批环节。",
    words: [
      { w: "customer approval", ipa: "/ˈkʌs.tə.mər əˈpruː.vəl/", pos: "名词", cn: "客户批准", memory: "① customer = 客户；② approval = 批准/同意。\n某些操作（如停机维护、系统重启）需要客户批准才能执行。\napproval 来自动词 approve（批准）。", phonics: "customer 读 /ˈkʌs.tə.mər/，approval 重音在第二音节：ap-PROV-al。", collocations: [["customer approval", "客户批准"], ["pending approval", "待批准"], ["get approval", "获得批准"]], examples: [["We need customer approval for the shutdown.", "停机需要客户批准。"], ["The approval is still pending.", "批准还在等待中。"]] },
    ],
    phrases: [
      { p: "waiting for customer approval", ipa: "/ˈweɪ.tɪŋ fɔːr ˈkʌs.tə.mər əˈpruː.vəl/", cn: "正在等待客户批准", why: "故障修复如果需要影响客户业务（如短暂停机），必须先获得客户批准。这是合规要求，不能自行决定。" },
    ],
    grammar: [
      { q: "approval 和 confirmation 在故障单中有什么区别？", a: "approval = 批准（事前，允许你执行某个操作）\nconfirmation = 确认（事后，确认结果是否符合预期）\n✅ waiting for customer approval（等客户批准 → 还没开始做）\n✅ waiting for customer confirmation（等客户确认 → 已经做完了，确认结果）\n时序：approval → 执行 → confirmation → closed。" },
    ],
    pattern: "Fault Ticket + 编号 + is waiting for customer approval",
    patternExamples: [
      { en: "Fault Ticket FT-006 is waiting for customer approval.", cn: "故障单 FT-006 正在等待客户批准。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "The shutdown requires customer approval.", cn: "停机需要客户批准。", words: [] },
      { en: "We can't proceed without customer approval.", cn: "没有客户批准我们不能继续。", words: [] },
    ],
    thinking: "故障单等待状态完整对比：\n① waiting for vendor support → 等技术（外部）\n② waiting for spare parts → 等物料（备件）\n③ waiting for customer approval → 等许可（事前）\n④ waiting for customer confirmation → 等验收（事后）\n⑤ waiting for management approval → 等内部审批\n交接时说清楚'等什么'，接班人就知道该推哪个环节。",
    pronunciation: "approval 重音在第二音节：ap-PROV-al /əˈpruː.vəl/。\n不要读成 ap-PRO-val（缺少 /əl/ 尾音）。\n节奏：FAULT TICK-et FT-005 ｜ is WAIT-ing ｜ for CUS-to-mer ap-PROV-al.",
    quiz: [
      { q: "故障单 FT-013 正在等待客户批准，怎么说？", a: "Fault Ticket FT-013 is waiting for customer approval." },
      { q: "customer approval 和 customer confirmation 哪个在前？", a: "approval 在前（事前批准，允许执行操作），confirmation 在后（事后确认，验证结果正常）。流程：approval → 执行 → confirmation。" },
    ],
  },
  {
    id: 134,
    en: "Fault Ticket FT-2026-006 is waiting for management approval.",
    cn: "故障单 FT-2026-006 正在等待管理层批准。",
    ipa: "/fɔːlt ˈtɪk.ɪt ˌɛf.tiː-twɛn.ti.twɛn.ti.sɪks-ˈsɪks ɪz ˈweɪ.tɪŋ fɔːr ˈmæn.ɪdʒ.mənt əˈpruː.vəl/",
    tags: ["第134句", "故障单等待状态", "★★★★★"],
    when: "这张故障单的修复方案需要内部管理层审批（如涉及大额费用或重大风险），目前卡在内部审批流程。",
    words: [
      { w: "management approval", ipa: "/ˈmæn.ɪdʒ.mənt əˈpruː.vəl/", pos: "名词", cn: "管理层批准", memory: "① management = 管理层；② approval = 批准。\n涉及大额费用（如紧急采购备件）或重大风险（如全机房停机）的操作需要管理层批准。", phonics: "management 读 /ˈmæn.ɪdʒ.mənt/，三音节，重音在第一音节。", collocations: [["management approval", "管理层批准"], ["senior management", "高级管理层"], ["escalate to management", "上报管理层"]], examples: [["This requires management approval.", "这需要管理层批准。"], ["Please escalate to management.", "请上报管理层。"]] },
    ],
    phrases: [
      { p: "waiting for management approval", ipa: "/ˈweɪ.tɪŋ fɔːr ˈmæn.ɪdʒ.mənt əˈpruː.vəl/", cn: "正在等待管理层批准", why: "内部审批和客户审批是不同的等待环节：management approval = 内部领导批；customer approval = 外部客户批。两者可能同时存在。" },
    ],
    grammar: [
      { q: "customer approval 和 management approval 什么时候需要？", a: "customer approval = 影响客户业务时（如停机维护、切换线路）\nmanagement approval = 涉及大额费用或重大风险时（如紧急采购、全面停机）\n有些操作两个都需要：先 management approval（内部批）→ 再 customer approval（客户批）→ 才能执行。" },
    ],
    pattern: "Fault Ticket + 编号 + is waiting for management approval",
    patternExamples: [
      { en: "Fault Ticket FT-015 is waiting for management approval.", cn: "故障单 FT-015 正在等待管理层批准。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "The budget increase needs management approval.", cn: "预算增加需要管理层批准。", words: [{ w: "increase", ipa: "/ɪnˈkriːs/", cn: "增加", phonics: "in 读 /ɪn/，crease 读 /kriːs/" }] },
      { en: "This change requires management approval.", cn: "这个变更需要管理层批准。", words: [] },
    ],
    thinking: "故障单审批链：\n① 内部：management approval（管理层批 → 费用/风险）\n② 外部：customer approval（客户批 → 业务影响）\n完整审批流程：提交方案 → management approval → customer approval → 执行 → customer confirmation → 关单。\n交接时说清楚卡在审批链的哪个环节。",
    pronunciation: "management 三音节：MAN-age-ment /ˈmæn.ɪdʒ.mənt/。\n不要读成 ma-NAGE-ment（重音错误）。\n节奏：FAULT TICK-et FT-006 ｜ is WAIT-ing ｜ for MAN-age-ment ap-PROV-al.",
    quiz: [
      { q: "故障单 FT-014 正在等待管理层批准，怎么说？", a: "Fault Ticket FT-014 is waiting for management approval." },
      { q: "management approval 和 customer approval 的区别？", a: "management approval = 内部管理层批准（费用/风险决策）；customer approval = 外部客户批准（业务影响决策）。有些操作两个都需要。" },
    ],
  },
  {
    id: 135,
    en: "The root cause has already been identified.",
    cn: "根本原因已经确认。",
    ipa: "/ðə ruːt kɔːz hæz ɔːlˈrɛd.i bɪn aɪˈdɛn.tɪ.faɪd/",
    tags: ["第135句", "故障根因", "★★★★★"],
    when: "逐单交接时，对已经找到根因的故障单，先汇报根因已确认，再说明是什么根因。这是故障处理的关键里程碑。",
    words: [
      { w: "root cause", ipa: "/ruːt kɔːz/", pos: "名词", cn: "根本原因", memory: "① root = 根/根源；② cause = 原因。\nroot cause = 根本原因（不是表面现象，是深层原因）。\nroot cause analysis (RCA) = 根因分析报告。\n数据中心故障处理的核心就是找到 root cause。", phonics: "root 读 /ruːt/，cause 读 /kɔːz/。", collocations: [["root cause", "根本原因"], ["root cause analysis", "根因分析"], ["identify the root cause", "确认根因"]], examples: [["The root cause is a faulty capacitor.", "根因是一个故障电容。"], ["We need to do a root cause analysis.", "我们需要做根因分析。"]] },
      { w: "identified", ipa: "/aɪˈdɛn.tɪ.faɪd/", pos: "动词(过去分词)", cn: "已确认；已识别", memory: "① identify = 识别/确认；② identified = 已确认的。\nhas been identified = 已经被确认了（现在完成时被动）。", phonics: "i 读 /aɪ/，den 读 /dɛn/，ti 读 /tɪ/，fied 读 /faɪd/。重音在第二音节。", collocations: [["identified the cause", "确认了原因"], ["issue identified", "问题已确认"], ["identified and resolved", "已确认并修复"]], examples: [["The issue has been identified.", "问题已确认。"], ["We identified three root causes.", "我们确认了三个根因。"]] },
    ],
    phrases: [
      { p: "has already been identified", ipa: "/hæz ɔːlˈrɛd.i bɪn aɪˈdɛn.tɪ.faɪd/", cn: "已经被确认", why: "already 强调'已经完成了，不需要再花时间找'。has been identified = 现在完成时被动，强调结果（根因已经找到了）。" },
    ],
    grammar: [
      { q: "为什么用 has been identified 而不用 was identified？", a: "has been identified = 现在完成时（强调'到现在为止已经确认了'，结果对现在有影响）\nwas identified = 一般过去时（强调'在过去某个时间确认的'）\n交接中用 has been 更合适，因为重点是'现在的状态是根因已知'，不需要再查了。\nalready 进一步加强这个语气：早就确认了。" },
    ],
    pattern: "The root cause + has/have + already been + identified",
    patternExamples: [
      { en: "The root cause has been identified as a faulty UPS module.", cn: "根因已确认是UPS模块故障。", words: [{ w: "root", ipa: "/ruːt/", cn: "根因", phonics: "root 读 /ruːt/" }, { w: "cause", ipa: "/kɔːz/", cn: "原因", phonics: "cause 读 /kɔːz/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }] },
      { en: "The root causes have already been identified.", cn: "根本原因已经全部确认。", words: [{ w: "root", ipa: "/ruːt/", cn: "根因", phonics: "root 读 /ruːt/" }, { w: "causes", ipa: "/kɔːz/", cn: "原因", phonics: "cause 读 /kɔːz/" }] },
      { en: "The issue has been identified and the fix is in progress.", cn: "问题已确认，修复正在进行中。", words: [{ w: "issue", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
    ],
    thinking: "故障根因汇报是交接的核心内容之一：\n① 根因是否已确认 → has the root cause been identified?\n② 根因是什么 → the root cause is + 具体原因\n③ 基于根因的修复方案 → corrective/preventive actions\nRCA（Root Cause Analysis）是故障单关单的必备文档。\n交接顺序：根因确认 → 纠正措施 → 预防措施。",
    pronunciation: "root cause 两个词都要清晰：/ruːt kɔːz/。\nidentified 五音节：i-DEN-ti-fied，重音在第二音节。\nalready 读 /ɔːlˈrɛd.i/，重音在第二音节。\n节奏：The ROOT CAUSE ｜ has al-READ-y ｜ been i-DEN-ti-fied.",
    quiz: [
      { q: "根因已确认是空调压缩机故障，怎么说？", a: "The root cause has been identified as a faulty AC compressor." },
      { q: "RCA 是什么的缩写？", a: "RCA = Root Cause Analysis（根因分析）。故障单关单前必须提交 RCA 报告，说明故障原因、影响范围、纠正措施和预防措施。" },
    ],
  },
];

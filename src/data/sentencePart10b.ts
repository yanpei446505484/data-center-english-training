// EXPORTS: MOCK_SENTENCES_PART10B

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART10B: ISentence[] = [
  {
    id: 286,
    en: "Have all inspection records been completed?",
    cn: "所有巡检记录都填写完成了吗？",
    ipa: "/hæv ɔːl ɪnˈspɛk.ʃən ˈrɛk.ərdz bɪn kəmˈpliː.tɪd/",
    tags: ["第286句", "最终确认", "★★★★★"],
    when: "暖通系统检查完毕后，进入最终确认环节。交接前必须逐项确认所有记录、工单、施工、通知都已完成或交接，防止遗漏。",
    words: [
      { w: "inspection record", ipa: "/ɪnˈspɛk.ʃən ˈrɛk.ərd/", pos: "名词", cn: "巡检记录", memory: "① inspection = 检查/巡检；② record = 记录。\ninspection record = 巡检过程中填写的书面记录，包括巡检路线、发现异常、处理措施等。\n数据中心每次巡检都必须留记录，作为交接和审计的依据。", phonics: "in 读 /ɪn/，spec 读 /spɛk/，tion 读 /ʃən/。record 重音在第一音节。", collocations: [["inspection record", "巡检记录"], ["complete the record", "完成记录"], ["sign the record", "签字确认记录"]], examples: [["Please complete all inspection records.", "请完成所有巡检记录。"], ["The inspection record shows no issues.", "巡检记录显示无异常。"]] },
      { w: "completed", ipa: "/kəmˈpliː.tɪd/", pos: "动词(过去分词)", cn: "完成", memory: "① complete = 完成（强调全部做完）；② completed = 已完成的。\n完成 vs 做完：complete 强调'全部做完、没有遗漏'，finish 更口语化。", phonics: "com 读 /kəm/，ple 读 /pliː/，ted 读 /tɪd/，重音在第二音节。", collocations: [["completed successfully", "成功完成"], ["completed on time", "按时完成"], ["not yet completed", "尚未完成"]], examples: [["All tasks have been completed.", "所有任务已完成。"], ["The report is not yet completed.", "报告尚未完成。"]] },
    ],
    phrases: [
      { p: "Have all ... been completed?", ipa: "/hæv ɔːl ... bɪn kəmˈpliː.tɪd/", cn: "所有…都完成了吗？", why: "Have + 主语 + been + 过去分词 = 现在完成时被动语态。交接确认环节大量使用此句型，逐项核实。" },
    ],
    grammar: [
      { q: "为什么用 Have ... been completed 而不是 Did ... complete？", a: "Have been completed = 现在完成时被动（强调'到目前为止是否已完成'的状态）\nDid complete = 一般过去时（强调'过去是否做过'这个动作）\n✅ Have all records been completed?（记录都填完了吗？→ 关心当前状态）\n✅ Did you complete the records?（你填完记录了吗？→ 关心过去的动作）\n交接确认用 Have been，因为关心的是'现在是否已就绪'。" },
    ],
    pattern: "Have all + 名词 + been completed?",
    patternExamples: [
      { en: "Have all checklists been completed?", cn: "所有检查表都完成了吗？", words: [] },
      { en: "Have all reports been completed?", cn: "所有报告都完成了吗？", words: [{ w: "reports", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
      { en: "Have all tests been completed?", cn: "所有测试都完成了吗？", words: [{ w: "tests", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
    ],
    thinking: "最终确认是交接的收尾环节，逐项核实确保没有遗漏。\n确认清单：① 巡检记录（本句）→ ② 交接日志（287）→ ③ 未关闭工单（288）→ ④ 维护工作（289）→ ⑤ 施工交接（290）→ ⑥ 客户通知（291）→ ⑦ 经理通知（292）→ ⑧ 下一班理解（293）→ ⑨ 额外风险（294）。\n全部确认后，给出后续指令（295-297），最后感谢+结束（298-300）。",
    pronunciation: "inspection 重音在第二音节：/ɪnˈspɛk.ʃən/。\nrecords 的 or 读 /ɔːr/：/ˈrɛk.ərdz/。\n节奏：Have ALL ｜ in-SPEC-tion RE-cords ｜ been com-PLE-ted?",
    quiz: [
      { q: "所有检查表都完成了吗？", a: "Have all checklists been completed?" },
      { q: "Have been completed 和 Did complete 在交接时有什么区别？", a: "Have been completed = 现在完成时被动（关心'到现在是否已完成'的状态）；Did complete = 一般过去时（关心'过去是否做了'这个动作）。交接确认用 Have been completed。" },
    ],
  },
  {
    id: 287,
    en: "Has the shift logbook been updated?",
    cn: "交接班日志更新了吗？",
    ipa: "/hæz ðə ʃɪft ˈlɒɡ.bʊk bɪn ˈʌp.deɪ.tɪd/",
    tags: ["第287句", "最终确认", "★★★★★"],
    when: "确认巡检记录后，检查交接班日志是否已更新。日志是交接的法律依据，必须完整记录本班次所有重要事项。",
    words: [
      { w: "logbook", ipa: "/ˈlɒɡ.bʊk/", pos: "名词", cn: "日志；值班记录本", memory: "① log = 记录/日志；② book = 本子。\nlogbook = 值班记录本（纸质或电子），记录每个班次的所有重要事件、告警、操作、交接内容。\n数据中心 logbook 是审计和追溯的法律依据。", phonics: "log 读 /lɒɡ/，book 读 /bʊk/，重音在第一音节。", collocations: [["shift logbook", "交接班日志"], ["update the logbook", "更新日志"], ["sign the logbook", "在日志上签字"]], examples: [["Please update the logbook before handover.", "请在交接前更新日志。"], ["The logbook shows three alarms today.", "日志显示今天有3个告警。"]] },
      { w: "updated", ipa: "/ˈʌp.deɪ.tɪd/", pos: "动词(过去分词)", cn: "更新", memory: "① up = 向上；② date = 日期 → update = 使日期更新 → 更新。\nupdate 强调把信息更新到最新状态，不是重新创建。", phonics: "up 读 /ʌp/，date 读 /deɪt/，ed 读 /tɪd/，重音在第一音节。", collocations: [["logbook updated", "日志已更新"], ["system updated", "系统已更新"], ["record updated", "记录已更新"]], examples: [["Has the record been updated?", "记录更新了吗？"], ["Please update the status.", "请更新状态。"]] },
    ],
    phrases: [
      { p: "shift logbook", ipa: "/ʃɪft ˈlɒɡ.bʊk/", cn: "交接班日志", why: "shift + logbook = 班次日志。交接时必须确保 logbook 记录了本班次所有重要事项：告警、操作、施工、人员变动等。" },
    ],
    grammar: [
      { q: "Has ... been updated 和 Is ... updated 有什么区别？", a: "Has been updated = 现在完成时（强调'更新'这个动作是否已经发生）\nIs updated = 一般现在时（强调当前状态是否'是最新的'）\n✅ Has the logbook been updated?（日志更新了吗？→ 关心'更新'这个动作做了没）\n✅ Is the logbook up to date?（日志是最新的吗？→ 关心当前状态）\n交接时用 Has been updated，因为关心的是'你有没有做更新这个动作'。" },
    ],
    pattern: "Has the + 名词 + been updated?",
    patternExamples: [
      { en: "Has the schedule been updated?", cn: "排班表更新了吗？", words: [{ w: "schedule", ipa: "/ˈʃɛdjuːl/", cn: "安排", phonics: "sched 读 /ʃɛd/，ule 读 /juːl/" }] },
      { en: "Has the contact list been updated?", cn: "联系人列表更新了吗？", words: [{ w: "contact", ipa: "/ˈkɒntækt/", cn: "联系", phonics: "con 读 /kɒn/，tact 读 /tækt/" }] },
      { en: "Has the maintenance plan been updated?", cn: "维护计划更新了吗？", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
    ],
    thinking: "交接班日志是运维管理的基础文档。\n日志内容：① 本班次告警汇总 ② 重要操作记录 ③ 施工情况 ④ 人员变动 ⑤ 待交接事项。\n交接时双方都要在日志上签字，作为责任转移的法律依据。",
    pronunciation: "logbook 重音在第一音节：/ˈlɒɡ.bʊk/。\nupdated 重音在第一音节：/ˈʌp.deɪ.tɪd/。\n节奏：Has the SHIFT LOG-book ｜ been UP-da-ted?",
    quiz: [
      { q: "排班表更新了吗？", a: "Has the schedule been updated?" },
      { q: "Has been updated 和 Is updated 在交接时有什么区别？", a: "Has been updated = 关心'更新动作做了没'；Is updated / Is up to date = 关心'当前是不是最新的'。交接确认动作完成度用 Has been。" },
    ],
  },
  {
    id: 288,
    en: "Have all open tickets been handed over to the next shift?",
    cn: "所有未关闭工单都已经交接给下一班了吗？",
    ipa: "/hæv ɔːl ˈoʊ.pən ˈtɪk.ɪts bɪn ˈhæn.dɪd ˈoʊ.vər tu ðə nɛkst ʃɪft/",
    tags: ["第288句", "工单交接", "★★★★★"],
    when: "确认日志后，核实所有未关闭工单是否已交接给下一班，确保下一班知道每个工单的状态和后续行动。",
    words: [
      { w: "hand over", ipa: "/hænd ˈoʊ.vər/", pos: "动词短语", cn: "交接；移交", memory: "① hand = 手/递交；② over = 转交。\nhand over = 交接/移交（把责任或任务转交给下一个人）。\nhandover 作名词 = 交接（The handover is complete.）", phonics: "hand 读 /hænd/，over 读 /ˈoʊ.vər/。", collocations: [["hand over to", "交接给"], ["hand over the shift", "交班"], ["handover report", "交接报告"]], examples: [["Please hand over all pending tasks.", "请交接所有待处理任务。"], ["The handover is complete.", "交接已完成。"]] },
      { w: "open tickets", ipa: "/ˈoʊ.pən ˈtɪk.ɪts/", pos: "名词", cn: "未关闭工单", memory: "open = 未关闭的/待处理的。open tickets 包括 open event tickets + open fault tickets。\n交接时必须逐一说明每个未关闭工单的当前状态和下一步行动。", phonics: "o 读 /oʊ/，pen 读 /pən/。", collocations: [["open tickets", "未关闭工单"], ["hand over tickets", "交接工单"], ["ticket status", "工单状态"]], examples: [["How many open tickets are there?", "有多少未关闭工单？"], ["All open tickets have been handed over.", "所有未关闭工单已交接。"]] },
    ],
    phrases: [
      { p: "handed over to the next shift", ipa: "/ˈhæn.dɪd ˈoʊ.vər tu ðə nɛkst ʃɪft/", cn: "交接给下一班", why: "hand over + to + 接收方 = 交接给…。next shift = 下一班。交接的核心就是把未完成的工单和责任转交给下一班。" },
    ],
    grammar: [
      { q: "hand over 和 hand in 有什么区别？", a: "hand over = 交接/移交（把责任转交给另一个人）\nhand in = 上交（把东西交给上级/管理部门）\n✅ Hand over the tickets to the next shift.（把工单交接给下一班）\n✅ Hand in the report to the manager.（把报告上交给经理）\n交接场景用 hand over，不是 hand in。" },
    ],
    pattern: "Have all + 名词 + been handed over to + 接收方?",
    patternExamples: [
      { en: "Have all tasks been handed over to David?", cn: "所有任务都交接给David了吗？", words: [] },
      { en: "Have all issues been handed over to the team?", cn: "所有问题都交接给团队了吗？", words: [{ w: "issues", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
      { en: "Has the project been handed over to the client?", cn: "项目交接给客户了吗？", words: [] },
    ],
    thinking: "工单交接是交班的核心内容之一。\n交接要求：① 逐一说明每个未关闭工单的编号 ② 当前状态 ③ 下一步行动 ④ 预计完成时间 ⑤ SLA 时限。\n下一班必须确认理解并签字/电子确认，才算完成交接。",
    pronunciation: "handed 的 d 和 over 的 o 连读：/ˈhæn.dɪd ˈoʊ.vər/。\nnext 的 x 发 /ks/：/nɛkst/。\n节奏：Have all O-pen TICK-ets ｜ been HAN-ded O-ver ｜ to the NEXT SHIFT?",
    quiz: [
      { q: "所有任务都交接给David了吗？", a: "Have all tasks been handed over to David?" },
      { q: "hand over 和 hand in 有什么区别？", a: "hand over = 交接/移交（责任转交，如交班）；hand in = 上交（东西交给上级，如交报告）。交接场景用 hand over。" },
    ],
  },
  {
    id: 289,
    en: "Have all maintenance activities been completed or properly handed over?",
    cn: "所有维护工作都已经完成或交接了吗？",
    ipa: "/hæv ɔːl ˈmeɪn.tə.nəns ækˈtɪv.ə.tiz bɪn kəmˈpliː.tɪd ɔːr ˈprɒp.ər.li ˈhæn.dɪd ˈoʊ.vər/",
    tags: ["第289句", "维护交接", "★★★★★"],
    when: "工单交接后，确认所有维护工作（施工/巡检/保养）是否已完成，未完成的必须交接给下一班继续跟进。",
    words: [
      { w: "maintenance activity", ipa: "/ˈmeɪn.tə.nəns ækˈtɪv.ə.ti/", pos: "名词", cn: "维护工作；维护活动", memory: "① maintenance = 维护/保养；② activity = 活动/工作项。\nmaintenance activity 包括：预防性维护、纠正性维护、巡检、测试等所有维护相关的工作。", phonics: "main 读 /meɪn/，te 读 /tə/，nance 读 /nəns/。activity 重音在第二音节。", collocations: [["maintenance activity", "维护活动"], ["planned maintenance", "计划维护"], ["preventive maintenance", "预防性维护"]], examples: [["How many maintenance activities are scheduled today?", "今天安排了几项维护工作？"], ["The maintenance activity was completed on time.", "维护工作按时完成。"]] },
      { w: "properly", ipa: "/ˈprɒp.ər.li/", pos: "副词", cn: "正确地；妥善地", memory: "① proper = 正确的/适当的；② properly = 正确地/妥善地。\nproperly handed over = 妥善交接（不是随便说一句就完，要确保对方理解并能继续跟进）。", phonics: "prop 读 /prɒp/，er 读 /ər/，ly 读 /li/，重音在第一音节。", collocations: [["properly handed over", "妥善交接"], ["properly documented", "妥善记录"], ["properly completed", "正确完成"]], examples: [["Make sure it's properly documented.", "确保妥善记录。"], ["The task was properly completed.", "任务已正确完成。"]] },
    ],
    phrases: [
      { p: "completed or properly handed over", ipa: "/kəmˈpliː.tɪd ɔːr ˈprɒp.ər.li ˈhæn.dɪd ˈoʊ.vər/", cn: "完成或妥善交接", why: "维护工作只有两种结局：① 已完成 → 记录结果 ② 未完成 → 妥善交接给下一班。or 连接两种可能，确保没有遗漏。" },
    ],
    grammar: [
      { q: "completed or properly handed over 的 or 是什么意思？", a: "or = 或者（二选一）。\n维护工作只有两种结局：\n① completed = 已完成（不需要交接）\n② properly handed over = 未完成但已妥善交接\n用 or 连接确保覆盖了所有可能，不留死角。" },
    ],
    pattern: "Have all + 名词 + been completed or properly handed over?",
    patternExamples: [
      { en: "Have all tasks been completed or handed over?", cn: "所有任务都完成或交接了吗？", words: [] },
      { en: "Have all inspections been completed or rescheduled?", cn: "所有巡检都完成或重新安排了吗？", words: [] },
      { en: "Have all issues been resolved or escalated?", cn: "所有问题都解决或升级了吗？", words: [{ w: "issues", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
    ],
    thinking: "维护工作交接要点：\n① 已完成的：记录结果、签字确认、关闭 PTW\n② 未完成的：说明进度、剩余工作、注意事项、预计完成时间\n③ 取消的：说明原因、是否需要重新安排\n所有维护工作必须有明确结局，不能'不了了之'。",
    pronunciation: "maintenance 重音在第一音节：/ˈmeɪn.tə.nəns/。\nproperly 重音在第一音节：/ˈprɒp.ər.li/。\n节奏：Have all MAIN-te-nance ac-TI-vi-ties ｜ been com-PLE-ted ｜ or PROP-er-ly ｜ HAN-ded O-ver?",
    quiz: [
      { q: "所有任务都完成或交接了吗？", a: "Have all tasks been completed or handed over?" },
      { q: "completed or properly handed over 的 or 覆盖哪些情况？", a: "or 覆盖两种结局：① completed = 已完成 ② properly handed over = 未完成但已妥善交接。确保维护工作没有'不了了之'的情况。" },
    ],
  },
  {
    id: 290,
    en: "Has today's construction work been handed over?",
    cn: "今天的施工情况已经交接了吗？",
    ipa: "/hæz təˈdeɪz kənˈstrʌk.ʃən wɜːrk bɪn ˈhæn.dɪd ˈoʊ.vər/",
    tags: ["第290句", "施工交接", "★★★★"],
    when: "维护工作确认后，特别检查今天的施工情况是否已交接。施工涉及外部供应商，交接内容更复杂。",
    words: [
      { w: "construction work", ipa: "/kənˈstrʌk.ʃən wɜːrk/", pos: "名词", cn: "施工工作", memory: "① construction = 建设/施工；② work = 工作。\nconstruction work 在数据中心语境中指所有现场施工，包括设备安装、线路布设、土建改造等。\n这里泛指所有供应商的现场施工活动。", phonics: "con 读 /kən/，struc 读 /strʌk/，tion 读 /ʃən/。work 读 /wɜːrk/。", collocations: [["construction work", "施工工作"], ["construction site", "施工现场"], ["construction schedule", "施工计划"]], examples: [["Today's construction work is complete.", "今天的施工已完成。"], ["The construction work will continue tomorrow.", "施工明天继续。"]] },
    ],
    phrases: [
      { p: "today's construction work", ipa: "/təˈdeɪz kənˈstrʌk.ʃən wɜːrk/", cn: "今天的施工工作", why: "today's + 名词 = 今天的…。用 today's 限定时间范围，确保只交接今天的施工情况。" },
    ],
    grammar: [
      { q: "construction work 和 maintenance work 有什么区别？", a: "construction work = 施工工作（通常指外部供应商的现场施工，涉及 PTW/MOP/SOP）\nmaintenance work = 维护工作（通常指内部工程师的日常维护、巡检、保养）\n交接时分别确认：maintenance activities（289句）+ construction work（本句）。\n施工交接更复杂，涉及供应商离场、PTW 关闭、现场恢复等。" },
    ],
    pattern: "Has + 名词 + been handed over?",
    patternExamples: [
      { en: "Has the project been handed over?", cn: "项目交接了吗？", words: [] },
      { en: "Has the equipment been handed over?", cn: "设备交接了吗？", words: [{ w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }] },
      { en: "Has the report been handed over?", cn: "报告交接了吗？", words: [{ w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
    ],
    thinking: "施工交接要点：\n① 哪些施工已完成 → 记录结果、关闭 PTW、供应商离场\n② 哪些施工未完成 → 说明进度、注意事项、明天继续\n③ 现场恢复 → 施工区域是否清理干净、设备是否归位\n④ 安全检查 → LOTO 是否解除、隔离点是否恢复",
    pronunciation: "construction 重音在第二音节：/kənˈstrʌk.ʃən/。\ntoday's 的 s 读 /z/：/təˈdeɪz/。\n节奏：Has to-DAY'S ｜ con-STRUC-tion WORK ｜ been HAN-ded O-ver?",
    quiz: [
      { q: "设备交接了吗？", a: "Has the equipment been handed over?" },
      { q: "construction work 和 maintenance work 在交接时有什么区别？", a: "construction work = 外部供应商施工（涉及 PTW/MOP，交接更复杂）；maintenance work = 内部工程师维护（日常巡检保养）。交接时分别确认。" },
    ],
  },
  {
    id: 291,
    en: "Has the customer been updated on all critical issues?",
    cn: "所有重要问题都已经通知客户了吗？",
    ipa: "/hæz ðə ˈkʌs.tə.mər bɪn ˈʌp.deɪ.tɪd ɑːn ɔːl ˈkrɪt.ɪ.kəl ˈɪʃ.uːz/",
    tags: ["第291句", "客户通知", "★★★★★"],
    when: "施工交接后，确认所有重要问题是否已通知客户。客户有权了解影响其业务的所有事件。",
    words: [
      { w: "customer", ipa: "/ˈkʌs.tə.mər/", pos: "名词", cn: "客户", memory: "① custom = 习惯/定制；② customer = 客户/顾客。\n数据中心客户 = 租用机柜/空间的企业，有权了解影响其设备的所有事件。", phonics: "cus 读 /kʌs/，to 读 /tə/，mer 读 /mər/，重音在第一音节。", collocations: [["customer notification", "客户通知"], ["customer update", "客户更新"], ["customer approval", "客户批准"]], examples: [["Please notify the customer immediately.", "请立即通知客户。"], ["The customer has been informed.", "客户已收到通知。"]] },
      { w: "critical issue", ipa: "/ˈkrɪt.ɪ.kəl ˈɪʃ.uː/", pos: "名词", cn: "重要问题；严重问题", memory: "① critical = 严重的/关键的；② issue = 问题/事项。\ncritical issue = 影响客户业务的严重问题，必须及时通知客户。\n注意：critical 这里不是告警级别，而是'对客户业务有重大影响'的意思。", phonics: "crit 读 /krɪt/，i 读 /ɪ/，cal 读 /kəl/。issue 读 /ˈɪʃ.uː/。", collocations: [["critical issue", "严重问题"], ["urgent issue", "紧急问题"], ["resolve the issue", "解决问题"]], examples: [["There are two critical issues to report.", "有两个严重问题要汇报。"], ["The critical issue has been resolved.", "严重问题已解决。"]] },
    ],
    phrases: [
      { p: "updated on all critical issues", ipa: "/ˈʌp.deɪ.tɪd ɑːn ɔːl ˈkrɪt.ɪ.kəl ˈɪʃ.uːz/", cn: "就所有重要问题进行了更新通知", why: "update someone on something = 就某事向某人更新/通报。客户需要知道所有影响其业务的严重问题。" },
    ],
    grammar: [
      { q: "update on 和 inform about 有什么区别？", a: "update on = 更新通报（强调'把最新情况告知'，之前可能已通知过）\ninform about = 通知（强调'首次告知'）\n✅ Has the customer been updated on all critical issues?（客户收到所有重要问题的最新通报了吗？）\n✅ Has the customer been informed about the outage?（客户被告知停电事件了吗？）\n交接用 update on，因为客户可能之前已知道，现在需要更新最新进展。" },
    ],
    pattern: "Has the customer been updated on + 事项?",
    patternExamples: [
      { en: "Has the customer been updated on the outage?", cn: "停电事件通知客户了吗？", words: [] },
      { en: "Has the customer been updated on the delay?", cn: "延迟情况通知客户了吗？", words: [] },
      { en: "Has the customer been updated on the SLA breach?", cn: "SLA违规通知客户了吗？", words: [] },
    ],
    thinking: "客户通知是交接中不可遗漏的环节。\n通知原则：① 影响客户业务的必须通知 ② SLA 违规的必须通知 ③ 计划停机的提前通知。\n通知方式：邮件（正式）+ 电话（紧急）+ 系统通知（实时）。\n交接时确认：所有需要通知的事项是否已完成。",
    pronunciation: "customer 重音在第一音节：/ˈkʌs.tə.mər/。\ncritical 重音在第一音节：/ˈkrɪt.ɪ.kəl/。\n节奏：Has the CUS-to-mer ｜ been UP-da-ted ｜ on all CRI-ti-cal IS-sues?",
    quiz: [
      { q: "停电事件通知客户了吗？", a: "Has the customer been updated on the outage?" },
      { q: "update on 和 inform about 在客户通知时有什么区别？", a: "update on = 更新通报（把最新进展告知，可能之前已通知过）；inform about = 首次通知。交接时用 update on，因为客户可能之前已知。" },
    ],
  },
  {
    id: 292,
    en: "Has the manager been informed of all major incidents?",
    cn: "所有重大事件都已经通知经理了吗？",
    ipa: "/hæz ðə ˈmæn.ɪ.dʒər bɪn ɪnˈfɔːrmd ɒv ɔːl ˈmeɪ.dʒər ˈɪn.sɪ.dənts/",
    tags: ["第292句", "经理通知", "★★★★★"],
    when: "客户通知确认后，检查所有重大事件是否已通知管理层。管理层需要了解可能影响运营的重大事件。",
    words: [
      { w: "manager", ipa: "/ˈmæn.ɪ.dʒər/", pos: "名词", cn: "经理；管理层", memory: "① manage = 管理；② manager = 管理者/经理。\n数据中心语境中 manager 可以是值班经理、运营经理、技术经理等。", phonics: "man 读 /mæn/，a 读 /ə/，ger 读 /dʒər/，重音在第一音节。", collocations: [["operations manager", "运营经理"], ["duty manager", "值班经理"], ["escalate to manager", "升级给经理"]], examples: [["Please inform the manager.", "请通知经理。"], ["The manager has been notified.", "经理已收到通知。"]] },
      { w: "major incident", ipa: "/ˈmeɪ.dʒər ˈɪn.sɪ.dənt/", pos: "名词", cn: "重大事件", memory: "① major = 重大的/主要的；② incident = 事件/事故。\nmajor incident = 影响范围广、影响程度深的重大事件，如大面积停电、核心系统宕机等。\n区别于一般的 event（事件）和 alarm（告警）。", phonics: "ma 读 /meɪ/，jor 读 /dʒər/。incident 重音在第一音节：/ˈɪn.sɪ.dənt/。", collocations: [["major incident", "重大事件"], ["incident report", "事件报告"], ["incident response", "事件响应"]], examples: [["A major incident occurred last night.", "昨晚发生了重大事件。"], ["The incident has been resolved.", "事件已解决。"]] },
    ],
    phrases: [
      { p: "informed of all major incidents", ipa: "/ɪnˈfɔːrmd ɒv ɔːl ˈmeɪ.dʒər ˈɪn.sɪ.dənts/", cn: "就所有重大事件进行了通知", why: "inform someone of something = 就某事通知某人。manager 需要知道所有重大事件，以便做出管理决策。" },
    ],
    grammar: [
      { q: "inform of 和 notify about 有什么区别？", a: "inform of = 通知（正式用语，常用于管理层通知）\nnotify about = 通知（中性用语，适用于各种场景）\n✅ Has the manager been informed of all major incidents?（经理收到所有重大事件通知了吗？→ 正式）\n✅ Has the team been notified about the change?（团队被告知变更了吗？→ 通用）\n通知管理层用 inform of，更正式。" },
    ],
    pattern: "Has the manager been informed of + 事项?",
    patternExamples: [
      { en: "Has the manager been informed of the outage?", cn: "停电事件通知经理了吗？", words: [] },
      { en: "Has the manager been informed of the SLA breach?", cn: "SLA违规通知经理了吗？", words: [] },
      { en: "Has the manager been informed of the staff shortage?", cn: "人员不足通知经理了吗？", words: [] },
    ],
    thinking: "管理层通知的触发条件：\n① 重大事件（major incident）→ 必须立即通知\n② SLA 违规 → 必须通知\n③ 客户投诉 → 必须通知\n④ 人员严重不足 → 必须通知\n⑤ 安全隐患 → 必须通知\n交接时确认：所有触发条件对应的事件是否已通知管理层。",
    pronunciation: "manager 重音在第一音节：/ˈmæn.ɪ.dʒər/。\nincidents 重音在第一音节：/ˈɪn.sɪ.dənts/。\n节奏：Has the MAN-a-ger ｜ been in-FORMED ｜ of all MA-jor IN-ci-dents?",
    quiz: [
      { q: "停电事件通知经理了吗？", a: "Has the manager been informed of the outage?" },
      { q: "inform of 和 notify about 在通知管理层时有什么区别？", a: "inform of = 正式通知（用于管理层）；notify about = 通用通知（用于各种场景）。通知管理层用 inform of 更正式。" },
    ],
  },
  {
    id: 293,
    en: "Does the next shift understand all pending issues?",
    cn: "下一班是否已经了解所有待处理事项？",
    ipa: "/dʌz ðə nɛkst ʃɪft ˌʌn.dərˈstænd ɔːl ˈpɛn.dɪŋ ˈɪʃ.uːz/",
    tags: ["第293句", "下一班理解", "★★★★★"],
    when: "通知确认后，直接问下一班是否理解了所有待处理事项。交接的最终目标是确保下一班能独立处理所有待办。",
    words: [
      { w: "pending issue", ipa: "/ˈpɛn.dɪŋ ˈɪʃ.uː/", pos: "名词", cn: "待处理事项", memory: "① pending = 待处理的/未决的（源自 pend = 悬挂 → 悬而未决）；② issue = 问题/事项。\npending issues = 所有尚未解决的问题，包括未关闭工单、未完成施工、待确认结果等。", phonics: "pend 读 /pɛnd/，ing 读 /ɪŋ/。issue 读 /ˈɪʃ.uː/。", collocations: [["pending issue", "待处理事项"], ["pending ticket", "待处理工单"], ["pending approval", "待批准"]], examples: [["Are there any pending issues?", "有待处理事项吗？"], ["All pending issues have been listed.", "所有待处理事项已列出。"]] },
      { w: "understand", ipa: "/ˌʌn.dərˈstænd/", pos: "动词", cn: "理解；了解", memory: "① under = 在…之间；② stand = 站立 → 原义'站在中间理解'。\n交接时用 understand 而不是 know，因为不仅要知道'有什么'，还要理解'为什么'和'怎么做'。", phonics: "un 读 /ʌn/，der 读 /dər/，stand 读 /stænd/，重音在末音节。", collocations: [["fully understand", "完全理解"], ["clearly understand", "清楚了解"], ["make sure they understand", "确保他们理解"]], examples: [["Do you understand the procedure?", "你理解这个流程吗？"], ["Make sure everyone understands.", "确保每个人都理解。"]] },
    ],
    phrases: [
      { p: "all pending issues", ipa: "/ɔːl ˈpɛn.dɪŋ ˈɪʃ.uːz/", cn: "所有待处理事项", why: "pending issues 是交接的核心内容。交接不仅是'告诉'下一班有什么，更要确认他们'理解'并能处理。" },
    ],
    grammar: [
      { q: "Does ... understand 和 Has ... been informed 有什么区别？", a: "Does understand = 理解了吗？（关心接收方的理解程度）\nHas been informed = 被通知了吗？（关心通知动作是否完成）\n✅ Does the next shift understand all pending issues?（下一班理解了吗？→ 关心理解深度）\n✅ Has the next shift been informed?（下一班被通知了吗？→ 关心通知动作）\n交接最终目标是 ensure understanding（确保理解），不只是 inform（通知）。" },
    ],
    pattern: "Does the next shift understand + 事项?",
    patternExamples: [
      { en: "Does the next shift understand the SLA deadlines?", cn: "下一班理解SLA时限吗？", words: [{ w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }] },
      { en: "Does the next shift understand the escalation procedure?", cn: "下一班理解升级流程吗？", words: [{ w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }, { w: "procedure", ipa: "/prəˈsiːdʒər/", cn: "流程", phonics: "pro 读 /prə/，cedure 读 /siːdʒər/" }] },
      { en: "Does the next shift understand the emergency plan?", cn: "下一班理解应急方案吗？", words: [{ w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }, { w: "emergency", ipa: "/ɪˈmɜːrdʒənsi/", cn: "紧急", phonics: "e 读 /ɪ/，mergency 读 /mɜːrdʒənsi/" }] },
    ],
    thinking: "交接质量的核心指标不是'说了多少'，而是'对方理解了多少'。\n确保理解的方法：\n① 让下一班复述关键事项\n② 问'你还有什么问题吗？'\n③ 对复杂事项做书面说明\n④ 让下一班签字确认理解\n交接不是单向输出，是双向确认。",
    pronunciation: "understand 重音在末音节：/ˌʌn.dərˈstænd/。\npending 重音在第一音节：/ˈpɛn.dɪŋ/。\n节奏：Does the NEXT SHIFT ｜ un-der-STAND ｜ all PEN-ding IS-sues?",
    quiz: [
      { q: "下一班理解升级流程吗？", a: "Does the next shift understand the escalation procedure?" },
      { q: "交接时 Does understand 和 Has been informed 哪个更重要？", a: "Does understand 更重要。Has been informed = 通知了（单向）；Does understand = 理解了（双向确认）。交接的最终目标是 ensure understanding，不只是 inform。" },
    ],
  },
  {
    id: 294,
    en: "Are there any additional risks we should pay attention to?",
    cn: "还有没有需要特别关注的风险？",
    ipa: "/ɑːr ðeər ˈɛn.i əˈdɪʃ.ən.əl rɪks wi ʃʊd peɪ əˈtɛn.ʃən tu/",
    tags: ["第294句", "额外风险", "★★★★★"],
    when: "逐项确认后，最后问一句'还有没有遗漏的风险'。这是安全网，防止遗漏未归类的重要事项。",
    words: [
      { w: "additional", ipa: "/əˈdɪʃ.ən.əl/", pos: "形容词", cn: "额外的；附加的", memory: "① add = 添加；② additional = 额外的/附加的。\nadditional risks = 之前没有提到的、额外的风险。交接末尾问这句，作为安全网。", phonics: "ad 读 /ə/，di 读 /dɪ/，tion 读 /ʃən/，al 读 /əl/，重音在第二音节。", collocations: [["additional risk", "额外风险"], ["additional cost", "额外费用"], ["additional information", "附加信息"]], examples: [["Is there any additional risk?", "有额外风险吗？"], ["No additional action is required.", "不需要额外行动。"]] },
      { w: "pay attention to", ipa: "/peɪ əˈtɛn.ʃən tu/", pos: "动词短语", cn: "关注；注意", memory: "① pay = 付出；② attention = 注意力；③ to = 朝向。\npay attention to = 把注意力投向 → 关注/注意。比 notice（注意到）更主动、更持续。", phonics: "pay 读 /peɪ/，at 读 /ə/，ten 读 /tɛn/，tion 读 /ʃən/。", collocations: [["pay attention to", "关注"], ["pay close attention", "密切关注"], ["pay special attention", "特别关注"]], examples: [["Please pay attention to this alarm.", "请关注这个告警。"], ["Pay close attention to the temperature.", "密切关注温度变化。"]] },
    ],
    phrases: [
      { p: "pay attention to", ipa: "/peɪ əˈtɛn.ʃən tu/", cn: "关注；注意", why: "pay attention to 比 watch / notice 更强调'持续、主动的关注'。交接时用这个短语，要求下一班持续留意特定风险。" },
    ],
    grammar: [
      { q: "Are there any 和 Is there any 什么时候用？", a: "Are there any + 复数名词 → Are there any additional risks?\nIs there any + 不可数名词 → Is there any additional information?\n✅ Are there any additional risks?（有额外风险吗？→ risks 可数复数）\n✅ Is there any additional information?（有附加信息吗？→ information 不可数）\n看名词的可数性决定用 Are there 还是 Is there。" },
    ],
    pattern: "Are there any additional + 名词 + we should + 动词?",
    patternExamples: [
      { en: "Are there any additional tasks we should complete?", cn: "有我们需要完成的额外任务吗？", words: [] },
      { en: "Are there any additional alarms we should check?", cn: "有我们需要检查的额外告警吗？", words: [{ w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Are there any additional documents we should prepare?", cn: "有我们需要准备的额外文件吗？", words: [] },
    ],
    thinking: "这是交接确认环节的'安全网'问题。\n即使前面的逐项确认都通过了，仍可能有遗漏：\n① 不属于任何类别的特殊情况\n② 刚刚发现的异常\n③ 个人判断但还没汇报的风险\n交接末尾主动问一句，确保万无一失。",
    pronunciation: "additional 重音在第二音节：/əˈdɪʃ.ən.əl/。\nattention 重音在第二音节：/əˈtɛn.ʃən/。\n节奏：Are there any ad-DI-tion-al RISKS ｜ we should ｜ PAY at-TEN-tion to?",
    quiz: [
      { q: "有我们需要检查的额外告警吗？", a: "Are there any additional alarms we should check?" },
      { q: "Are there any 和 Is there any 怎么区分？", a: "Are there any + 复数名词（Are there any risks?）；Is there any + 不可数名词（Is there any information?）。看名词可数性。" },
    ],
  },
  {
    id: 295,
    en: "Please continue monitoring the critical alarms.",
    cn: "请继续关注严重告警。",
    ipa: "/pliːz kənˈtɪn.juː ˈmɒn.ɪ.tər.ɪŋ ðə ˈkrɪt.ɪ.kəl ɑːrmz/",
    tags: ["第295句", "后续指令", "★★★★★"],
    when: "所有确认项完成后，给出后续指令。第一条指令是继续关注严重告警，确保不会遗漏任何重要变化。",
    words: [
      { w: "continue", ipa: "/kənˈtɪn.juː/", pos: "动词", cn: "继续", memory: "① con- = 一起/持续；② tinue = 持有（拉丁语 tenere）。\ncontinue = 持续做某事，不中断。\ncontinue + 动名词（monitoring）= 继续做某事。", phonics: "con 读 /kən/，tin 读 /tɪn/，ue 读 /juː/，重音在第二音节。", collocations: [["continue monitoring", "继续监控"], ["continue following up", "继续跟进"], ["continue working", "继续工作"]], examples: [["Please continue monitoring.", "请继续监控。"], ["We will continue the investigation.", "我们将继续调查。"]] },
      { w: "monitoring", ipa: "/ˈmɒn.ɪ.tər.ɪŋ/", pos: "动名词", cn: "监控", memory: "① monitor = 监控/监视器；② monitoring = 监控（动名词）。\ncontinue monitoring = 继续监控（保持对…的观察和关注）。\nmonitor 作名词 = 显示器/监控器。", phonics: "mon 读 /mɒn/，i 读 /ɪ/，tor 读 /tər/，ing 读 /ɪŋ/，重音在第一音节。", collocations: [["alarm monitoring", "告警监控"], ["continuous monitoring", "持续监控"], ["remote monitoring", "远程监控"]], examples: [["Continue monitoring the temperature.", "继续监控温度。"], ["The monitoring system is active.", "监控系统运行中。"]] },
    ],
    phrases: [
      { p: "continue monitoring", ipa: "/kənˈtɪn.juː ˈmɒn.ɪ.tər.ɪŋ/", cn: "继续监控", why: "continue + 动名词 = 继续做某事。交接后要求下一班继续保持对严重告警的关注，不能因为交接完成就放松警惕。" },
    ],
    grammar: [
      { q: "continue monitoring 和 continue to monitor 有什么区别？", a: "continue monitoring = 继续监控（动名词，强调动作的延续性）\ncontinue to monitor = 继续去监控（不定式，强调目的）\n两者在交接场景中可以互换，但 continue monitoring 更自然。\n✅ Please continue monitoring the critical alarms.（请继续监控严重告警 → 自然）\n✅ Please continue to monitor the critical alarms.（请继续监控严重告警 → 也正确）" },
    ],
    pattern: "Please continue + 动名词 + 对象",
    patternExamples: [
      { en: "Please continue monitoring the temperature.", cn: "请继续监控温度。", words: [{ w: "continue", ipa: "/kənˈtɪnjuː/", cn: "继续", phonics: "con 读 /kən/，tinue 读 /tɪnjuː/" }, { w: "monitoring", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
      { en: "Please continue following up on this ticket.", cn: "请继续跟进这个工单。", words: [{ w: "continue", ipa: "/kənˈtɪnjuː/", cn: "继续", phonics: "con 读 /kən/，tinue 读 /tɪnjuː/" }, { w: "following", ipa: "/ˈfɒloʊ/", cn: "跟踪", phonics: "fol 读 /fɒl/，low 读 /loʊ/" }, { w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "Please continue checking the sump pit.", cn: "请继续检查集水井。", words: [{ w: "continue", ipa: "/kənˈtɪnjuː/", cn: "继续", phonics: "con 读 /kən/，tinue 读 /tɪnjuː/" }, { w: "checking", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "后续指令是交接的'行动指南'。\n告诉下一班'接下来要特别做什么'：\n① 继续监控严重告警（本句）\n② 继续跟进未关闭工单（296句）\n③ 紧急情况立即联系（297句）\n这三条指令确保下一班有明确的行动方向。",
    pronunciation: "continue 重音在第二音节：/kənˈtɪn.juː/。\nmonitoring 重音在第一音节：/ˈmɒn.ɪ.tər.ɪŋ/。\n节奏：Please con-TIN-ue ｜ MON-i-tor-ing ｜ the CRI-ti-cal ALARMS.",
    quiz: [
      { q: "请继续监控温度。", a: "Please continue monitoring the temperature." },
      { q: "continue monitoring 和 continue to monitor 在交接时有什么区别？", a: "两者几乎可以互换。continue monitoring（动名词）更自然、更强调延续性；continue to monitor（不定式）也正确。交接场景用 continue monitoring 更常见。" },
    ],
  },
  {
    id: 296,
    en: "Please continue following up on the open tickets.",
    cn: "请继续跟进未关闭工单。",
    ipa: "/pliːz kənˈtɪn.juː ˈfɒl.oʊ.ɪŋ ʌp ɑːn ðə ˈoʊ.pən ˈtɪk.ɪts/",
    tags: ["第296句", "后续指令", "★★★★★"],
    when: "第一条后续指令（监控告警）之后，给出第二条：继续跟进未关闭工单。工单不会因为交接就自动关闭，需要持续跟进。",
    words: [
      { w: "follow up", ipa: "/ˈfɒl.oʊ ʌp/", pos: "动词短语", cn: "跟进", memory: "① follow = 跟随；② up = 向上/完成。\nfollow up = 跟进/追踪（持续关注某事的进展直到完成）。\nfollow up on something = 跟进某事。", phonics: "fol 读 /fɒl/，low 读 /loʊ/，up 读 /ʌp/。", collocations: [["follow up on", "跟进"], ["follow up with", "与…跟进"], ["follow-up action", "后续行动"]], examples: [["Please follow up on this ticket.", "请跟进这个工单。"], ["I will follow up with the vendor.", "我会跟供应商跟进。"]] },
    ],
    phrases: [
      { p: "following up on", ipa: "/ˈfɒl.oʊ.ɪŋ ʌp ɑːn/", cn: "跟进", why: "continue + following up on = 继续跟进。follow up 是不及物动词短语，需要 on 连接宾语。" },
    ],
    grammar: [
      { q: "follow up on 和 follow up with 有什么区别？", a: "follow up on + 事项 = 跟进某事（跟进工单、问题、任务）\nfollow up with + 人 = 与某人跟进（跟供应商、客户、同事确认进展）\n✅ Please continue following up on the open tickets.（请继续跟进未关闭工单 → on + 事项）\n✅ Please follow up with the vendor.（请跟供应商跟进 → with + 人）" },
    ],
    pattern: "Please continue following up on + 事项",
    patternExamples: [
      { en: "Please continue following up on this issue.", cn: "请继续跟进这个问题。", words: [{ w: "continue", ipa: "/kənˈtɪnjuː/", cn: "继续", phonics: "con 读 /kən/，tinue 读 /tɪnjuː/" }, { w: "following", ipa: "/ˈfɒloʊ/", cn: "跟踪", phonics: "fol 读 /fɒl/，low 读 /loʊ/" }, { w: "issue", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
      { en: "Please continue following up on the vendor response.", cn: "请继续跟进供应商回复。", words: [{ w: "continue", ipa: "/kənˈtɪnjuː/", cn: "继续", phonics: "con 读 /kən/，tinue 读 /tɪnjuː/" }, { w: "following", ipa: "/ˈfɒloʊ/", cn: "跟踪", phonics: "fol 读 /fɒl/，low 读 /loʊ/" }, { w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }] },
      { en: "Please continue following up on the repair status.", cn: "请继续跟进维修状态。", words: [{ w: "continue", ipa: "/kənˈtɪnjuː/", cn: "继续", phonics: "con 读 /kən/，tinue 读 /tɪnjuː/" }, { w: "following", ipa: "/ˈfɒloʊ/", cn: "跟踪", phonics: "fol 读 /fɒl/，low 读 /loʊ/" }, { w: "repair", ipa: "/rɪˈpeər/", cn: "维修", phonics: "re 读 /rɪ/，pair 读 /peər/" }] },
    ],
    thinking: "未关闭工单的跟进要点：\n① 查看工单最新状态和备注\n② 联系相关人员确认进展\n③ 更新工单记录\n④ 评估是否临近 SLA 时限\n⑤ 必要时升级处理\n交接后下一班的首要任务之一就是跟进这些工单。",
    pronunciation: "follow 的 ow 读 /oʊ/：/ˈfɒl.oʊ/。\nopen 的 o 读 /oʊ/：/ˈoʊ.pən/。\n节奏：Please con-TIN-ue ｜ FOL-low-ing UP ｜ on the O-pen TICK-ets.",
    quiz: [
      { q: "请继续跟进这个问题。", a: "Please continue following up on this issue." },
      { q: "follow up on 和 follow up with 在工单跟进时有什么区别？", a: "follow up on + 事项（follow up on the ticket = 跟进工单）；follow up with + 人（follow up with the vendor = 跟供应商跟进）。" },
    ],
  },
  {
    id: 297,
    en: "Call me immediately if any emergency occurs.",
    cn: "如果发生任何紧急情况，请立即联系我。",
    ipa: "/kɔːl mi ɪˈmiː.di.ət.li ɪf ˈɛn.i ɪˈmɜːr.dʒən.si əˈkɜːrz/",
    tags: ["第297句", "应急联系", "★★★★★"],
    when: "给出最后一条后续指令：紧急情况的联系方式。即使交班完成，交班方仍需为紧急情况保持可达。",
    words: [
      { w: "immediately", ipa: "/ɪˈmiː.di.ət.li/", pos: "副词", cn: "立即；马上", memory: "① im- = 不；② mediate = 中间/调解 → immediate = 没有中间环节的 → 立即的。\nimmediately = 立即/马上（比 right away / at once 更正式）。", phonics: "im 读 /ɪ/，me 读 /miː/，di 读 /di/，ate 读 /ət/，ly 读 /li/，重音在第二音节。", collocations: [["call immediately", "立即联系"], ["respond immediately", "立即响应"], ["act immediately", "立即行动"]], examples: [["Please call me immediately.", "请立即联系我。"], ["The team responded immediately.", "团队立即响应。"]] },
      { w: "emergency", ipa: "/ɪˈmɜːr.dʒən.si/", pos: "名词", cn: "紧急情况", memory: "① e- = 出；② merge = 出现 → emerge = 突然出现 → emergency = 突然出现的状况 → 紧急情况。\nemergency 比 incident 更严重，需要立即行动。", phonics: "e 读 /ɪ/，mer 读 /mɜːr/，gen 读 /dʒən/，cy 读 /si/，重音在第二音节。", collocations: [["emergency contact", "紧急联系人"], ["emergency plan", "应急方案"], ["emergency response", "应急响应"]], examples: [["Call 911 in case of emergency.", "紧急情况请拨打911。"], ["The emergency plan has been activated.", "应急方案已启动。"]] },
    ],
    phrases: [
      { p: "if any emergency occurs", ipa: "/ɪf ˈɛn.i ɪˈmɜːr.dʒən.si əˈkɜːrz/", cn: "如果发生任何紧急情况", why: "if + any + 名词 + occurs = 如果发生任何…。occurs 是正式用语，比 happens 更适合工作场景。" },
    ],
    grammar: [
      { q: "occurs 和 happens 有什么区别？", a: "occurs = 发生（正式用语，常用于工作/技术场景）\nhappens = 发生（通用/口语）\n✅ Call me immediately if any emergency occurs.（如果发生紧急情况请立即联系我 → 正式）\n✅ Call me if anything happens.（如果发生什么就联系我 → 口语）\n交接场景用 occurs，更正式专业。" },
    ],
    pattern: "Call me immediately if + 条件",
    patternExamples: [
      { en: "Call me immediately if the power goes out.", cn: "如果停电请立即联系我。", words: [{ w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }, { w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }] },
      { en: "Call me immediately if the alarm triggers.", cn: "如果告警触发请立即联系我。", words: [{ w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Call me immediately if the customer complains.", cn: "如果客户投诉请立即联系我。", words: [{ w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
    ],
    thinking: "应急联系是交班方的责任延伸。\n即使交接完成，交班方仍需：\n① 保持手机畅通（至少交班后2-4小时）\n② 告诉下一班自己的联系方式\n③ 明确什么情况下需要联系自己（emergency = 紧急情况）\n这不是'甩手不管'，是'负责任的移交'。",
    pronunciation: "immediately 重音在第二音节：/ɪˈmiː.di.ət.li/。\nemergency 重音在第二音节：/ɪˈmɜːr.dʒən.si/。\n节奏：CALL me ｜ im-ME-di-ate-ly ｜ if any E-mer-gen-cy ｜ oc-CURS.",
    quiz: [
      { q: "如果停电请立即联系我。", a: "Call me immediately if the power goes out." },
      { q: "occurs 和 happens 在交接场景有什么区别？", a: "occurs = 正式用语（工作/技术场景）；happens = 通用/口语。交接用 occurs 更专业：'if any emergency occurs'。" },
    ],
  },
  {
    id: 298,
    en: "Thank you everyone for today's work.",
    cn: "感谢大家今天的工作。",
    ipa: "/θæŋk juː ˈɛv.ri.wʌn fər təˈdeɪz wɜːrk/",
    tags: ["第298句", "感谢", "★★★★"],
    when: "所有确认和后续指令完成后，表达感谢。团队认可和感谢是良好交接文化的一部分。",
    words: [
      { w: "everyone", ipa: "/ˈɛv.ri.wʌn/", pos: "代词", cn: "所有人；大家", memory: "① every = 每个；② one = 一个 → everyone = 每一个人/大家。\neveryone 是单数代词，语法上谓语用单数：Everyone is here.\n但在 Thank you everyone 中，everyone 是呼语（直接称呼），不影响谓语。", phonics: "ev 读 /ɛv/，ry 读 /ri/，one 读 /wʌn/，重音在第一音节。", collocations: [["thank you everyone", "感谢大家"], ["everyone is here", "所有人都在"], ["everyone understands", "所有人都理解"]], examples: [["Thank you everyone for your hard work.", "感谢大家的辛勤工作。"], ["Is everyone ready?", "大家都准备好了吗？"]] },
    ],
    phrases: [
      { p: "Thank you everyone for + 名词", ipa: "/θæŋk juː ˈɛv.ri.wʌn fər/", cn: "感谢大家…", why: "Thank you + 称呼 + for + 感谢原因。交接结束时表达对团队工作的认可和感谢。" },
    ],
    grammar: [
      { q: "Thank you everyone 和 Thank you all 有什么区别？", a: "两者意思相同，都是'感谢大家'。\nThank you everyone = 感谢大家（everyone 更正式、更强调'每一个人'）\nThank you all = 感谢大家（all 更简洁）\n✅ Thank you everyone for today's work.（感谢大家今天的工作 → 正式）\n✅ Thank you all for your help.（感谢大家的帮助 → 简洁）\n交接场景两者都可以用。" },
    ],
    pattern: "Thank you everyone for + 原因",
    patternExamples: [
      { en: "Thank you everyone for your cooperation.", cn: "感谢大家的配合。", words: [{ w: "thank", ipa: "/θæŋk/", cn: "感谢", phonics: "th 读 /θ/，ank 读 /æŋk/" }, { w: "everyone", ipa: "/ˈɛvriwʌn/", cn: "大家", phonics: "every 读 /ɛvri/，one 读 /wʌn/" }] },
      { en: "Thank you everyone for your patience.", cn: "感谢大家的耐心。", words: [{ w: "thank", ipa: "/θæŋk/", cn: "感谢", phonics: "th 读 /θ/，ank 读 /æŋk/" }, { w: "everyone", ipa: "/ˈɛvriwʌn/", cn: "大家", phonics: "every 读 /ɛvri/，one 读 /wʌn/" }] },
      { en: "Thank you everyone for the great teamwork.", cn: "感谢大家的出色团队合作。", words: [{ w: "thank", ipa: "/θæŋk/", cn: "感谢", phonics: "th 读 /θ/，ank 读 /æŋk/" }, { w: "everyone", ipa: "/ˈɛvriwʌn/", cn: "大家", phonics: "every 读 /ɛvri/，one 读 /wʌn/" }] },
    ],
    thinking: "团队认可是运维管理的重要组成部分。\n交接结束时表达感谢：\n① 认可团队的努力和贡献\n② 营造积极的工作氛围\n③ 鼓励下一班保持良好的工作状态\n一句简单的 Thank you 可以大大提升团队凝聚力。",
    pronunciation: "thank 的 th 咬舌尖：/θæŋk/。\neveryone 重音在第一音节：/ˈɛv.ri.wʌn/。\n节奏：THANK you ｜ EV-ery-one ｜ for to-DAY'S WORK.",
    quiz: [
      { q: "感谢大家的配合。", a: "Thank you everyone for your cooperation." },
      { q: "Thank you everyone 和 Thank you all 在交接时有什么区别？", a: "两者意思相同。Thank you everyone 更正式、更强调'每一个人'；Thank you all 更简洁。交接场景都可以用。" },
    ],
  },
  {
    id: 299,
    en: "The shift handover is now complete.",
    cn: "本次交接班结束。",
    ipa: "/ðə ʃɪft ˈhænd.oʊ.vər ɪz naʊ kəmˈpliːt/",
    tags: ["第299句", "交接结束", "★★★★★"],
    when: "感谢之后，正式宣布交接班结束。这是交接流程的正式终结点，标志着责任从交班方转移到接班方。",
    words: [
      { w: "handover", ipa: "/ˈhænd.oʊ.vər/", pos: "名词", cn: "交接；交接班", memory: "① hand = 手/递交；② over = 转交 → handover = 交接（名词形式）。\n注意区分：hand over（动词短语，两个词）vs handover（名词，一个词）。\n✅ Please hand over the tickets.（动词：请交接工单）\n✅ The handover is complete.（名词：交接已完成）", phonics: "hand 读 /hænd/，o 读 /oʊ/，ver 读 /vər/，重音在第一音节。", collocations: [["shift handover", "交接班"], ["handover complete", "交接完成"], ["handover procedure", "交接流程"]], examples: [["The handover is complete.", "交接已完成。"], ["Please follow the handover procedure.", "请遵循交接流程。"]] },
      { w: "complete", ipa: "/kəmˈpliːt/", pos: "形容词", cn: "完成的；结束的", memory: "① complete 作形容词 = 完成的/完整的；② 作动词 = 完成。\n这里作形容词：The handover is complete = 交接已完成（状态）。\n比较：The handover has been completed = 交接已经被完成（动作）。", phonics: "com 读 /kəm/，plete 读 /pliːt/，重音在第二音节。", collocations: [["now complete", "现已完成"], ["fully complete", "完全完成"], ["project complete", "项目完成"]], examples: [["The inspection is now complete.", "巡检现已完成。"], ["The task is complete.", "任务已完成。"]] },
    ],
    phrases: [
      { p: "is now complete", ipa: "/ɪz naʊ kəmˈpliːt/", cn: "现已完成", why: "now = 现在/正式地。is now complete = 正式宣布完成。now 增加了'从此刻起'的正式感，标志着责任的正式转移。" },
    ],
    grammar: [
      { q: "is complete 和 has been completed 有什么区别？", a: "is complete = 形容词状态（交接'是完成的'，描述当前状态）\nhas been completed = 动词动作（交接'已经被完成'，强调动作过程）\n✅ The handover is now complete.（交接现已完成 → 正式宣告状态）\n✅ The handover has been completed.（交接已被完成 → 强调动作）\n交接结束时用 is now complete，更正式、更有宣告感。" },
    ],
    pattern: "The + 名词 + is now complete",
    patternExamples: [
      { en: "The inspection is now complete.", cn: "巡检现已完成。", words: [] },
      { en: "The maintenance is now complete.", cn: "维护现已完成。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "The training is now complete.", cn: "培训现已完成。", words: [] },
    ],
    thinking: "正式宣布交接结束的意义：\n① 明确责任转移的时间点（从宣布时刻起，责任在接班方）\n② 交接流程的正式终结（所有确认项已完成）\n③ 法律/审计依据（logbook 记录交接完成时间）\n④ 仪式感（让双方都意识到责任的转换）",
    pronunciation: "handover 重音在第一音节：/ˈhænd.oʊ.vər/。\ncomplete 重音在第二音节：/kəmˈpliːt/。\n节奏：The SHIFT HAND-o-ver ｜ is NOW ｜ com-PLETE.",
    quiz: [
      { q: "巡检现已完成。", a: "The inspection is now complete." },
      { q: "is complete 和 has been completed 在宣布交接结束时有什么区别？", a: "is now complete = 形容词状态（正式宣告'交接已完成'）；has been completed = 动词动作（强调'交接被完成了'）。交接结束用 is now complete 更正式、更有宣告感。" },
    ],
  },
  {
    id: 300,
    en: "Have a safe shift and have a good day.",
    cn: "祝大家值班顺利，今天工作愉快。",
    ipa: "/hæv ə seɪf ʃɪft ænd hæv ə ɡʊd deɪ/",
    tags: ["第300句", "祝福", "★★★★★"],
    when: "交接的最后一句话，表达对下一班的祝福。安全祝福（safe shift）体现数据中心对安全的高度重视。",
    words: [
      { w: "safe", ipa: "/seɪf/", pos: "形容词", cn: "安全的；顺利的", memory: "① safe = 安全的/无危险的。\nsafe shift = 安全的值班/顺利的值班。\n在工业/运维场景，安全永远是第一位的，所以祝福时先说 safe，再说 good。", phonics: "s 读 /s/，a 读 /eɪ/，fe 读 /f/。", collocations: [["safe shift", "安全值班"], ["stay safe", "保持安全"], ["safe operation", "安全运行"]], examples: [["Have a safe shift!", "祝你值班顺利！"], ["Stay safe out there.", "注意安全。"]] },
      { w: "shift", ipa: "/ʃɪft/", pos: "名词", cn: "值班；班次", memory: "① shift = 值班/班次。在本句中，shift 指接班方即将开始的12小时值班。\nHave a safe shift = 祝你值班安全顺利（数据中心特有的祝福语）。", phonics: "sh 读 /ʃ/，i 读 /ɪ/，ft 读 /ft/。", collocations: [["safe shift", "安全值班"], ["night shift", "夜班"], ["day shift", "白班"]], examples: [["Enjoy your shift!", "祝你值班愉快！"], ["Good luck with the night shift.", "夜班顺利。"]] },
    ],
    phrases: [
      { p: "Have a safe shift", ipa: "/hæv ə seɪf ʃɪft/", cn: "祝你值班安全顺利", why: "Have a + 形容词 + 名词 = 祝你…（祝福语句型）。safe shift 是数据中心/工业场景特有的祝福，体现安全文化。" },
    ],
    grammar: [
      { q: "为什么先说 safe 再说 good？", a: "在工业/运维文化中，安全是第一位的：\n① safe shift = 安全（首要）\n② good day = 愉快（次要）\n顺序体现优先级：先保安全，再求愉快。\n这也是数据中心安全文化的体现——Safety First（安全第一）。" },
    ],
    pattern: "Have a + 形容词 + 名词",
    patternExamples: [
      { en: "Have a great weekend!", cn: "祝你周末愉快！", words: [] },
      { en: "Have a safe trip!", cn: "祝你旅途平安！", words: [] },
      { en: "Have a productive day!", cn: "祝你今天高效！", words: [] },
    ],
    thinking: "这是300句交接班英语的最后一句。\n整个交接流程总结：\n① 开始交班（1-30）→ ② 告警状态（31-60）→ ③ DCIM交接（61-90）→ ④ 事件单（91-120）→ ⑤ 故障单（121-150）→ ⑥ SLA与施工（151-180）→ ⑦ 供应商与随工（181-210）→ ⑧ 人员与培训（211-240）→ ⑨ 天气与巡检（241-270）→ ⑩ 电气暖通+结束（271-300）。\n最后一句以安全祝福收尾，呼应数据中心'Safety First'的核心文化。",
    pronunciation: "safe 的 a 读 /eɪ/：/seɪf/。\nshift 的 sh 读 /ʃ/：/ʃɪft/。\n节奏：Have a SAFE SHIFT ｜ and have a GOOD DAY.",
    quiz: [
      { q: "祝你旅途平安！", a: "Have a safe trip!" },
      { q: "为什么交接祝福先说 safe 再说 good？", a: "安全是第一位的（Safety First）。safe shift = 安全值班（首要）；good day = 愉快（次要）。顺序体现优先级，呼应数据中心安全文化。" },
    ],
  },
];

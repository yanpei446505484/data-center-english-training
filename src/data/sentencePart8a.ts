// EXPORTS: MOCK_SENTENCES_PART8A

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART8A: ISentence[] = [
  {
    id: 211,
    en: "We have eight engineers on duty today.",
    cn: "今天共有八名工程师值班。",
    ipa: "/wi hæv eɪt ˌɛn.dʒɪˈnɪrz ɑːn ˈdjuː.ti təˈdeɪ/",
    tags: ["第211句", "人员安排", "★★★★★"],
    when: "随工监督检查完成后，转入人员安排环节。第一句话汇报今天值班总人数，让接班人了解团队规模。",
    words: [
      { w: "engineer", ipa: "/ˌɛn.dʒɪˈnɪr/", pos: "名词", cn: "工程师", memory: "① engine = 引擎；② engineer = 操作/设计引擎的人 → 工程师。\n数据中心语境中 engineer 泛指运维技术人员，不限于机械/电气。", phonics: "en 读 /ɛn/，gi 读 /dʒɪ/，neer 读 /ˈnɪr/，重音在末音节。", collocations: [["duty engineer", "值班工程师"], ["senior engineer", "高级工程师"], ["field engineer", "现场工程师"]], examples: [["The engineer checked the UPS.", "工程师检查了UPS。"], ["How many engineers are on duty?", "有多少工程师在值班？"]] },
      { w: "on duty", ipa: "/ɑːn ˈdjuː.ti/", pos: "介词短语", cn: "值班中", memory: "① on = 在…状态中；② duty = 职责/值班。\non duty = 正在值班/在岗，与 off duty（下班）相对。", phonics: "on 读 /ɑːn/，duty 读 /ˈdjuː.ti/（英式）或 /ˈduː.ti/（美式）。", collocations: [["on duty today", "今天值班"], ["on duty engineer", "值班工程师"], ["24/7 on duty", "全天候值班"]], examples: [["Who is on duty tonight?", "今晚谁值班？"], ["I'm on duty until 6 PM.", "我值班到下午6点。"]] },
    ],
    phrases: [
      { p: "on duty today", ipa: "/ɑːn ˈdjuː.ti təˈdeɪ/", cn: "今天值班", why: "on duty 表示当前在岗状态，today 限定时间范围。交接时先报总人数，再分白班/夜班。" },
    ],
    grammar: [
      { q: "为什么用 We have 而不是 There are？", a: "We have = 我们有（强调团队归属感）\nThere are = 有（客观存在）\n✅ We have eight engineers on duty.（我们的团队有8人值班 → 交接时自然说法）\n✅ There are eight engineers on duty.（有8人在值班 → 也正确，但少了'我们团队'的归属感）\n交接场景用 We have 更自然，因为是在介绍自己的团队。" },
    ],
    pattern: "We have + 数量 + engineers + on duty + 时间",
    patternExamples: [
      { en: "We have six engineers on duty today.", cn: "今天有6名工程师值班。", words: [{ w: "engineers", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }] },
      { en: "We have ten engineers on duty during the shutdown.", cn: "停机期间有10名工程师值班。", words: [{ w: "engineers", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }] },
      { en: "We have four engineers on duty tonight.", cn: "今晚有4名工程师值班。", words: [{ w: "engineers", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }] },
    ],
    thinking: "人员安排是交接的倒数第二个大环节（仅次于天气/巡检收尾）。\n交接顺序：① 报总人数（本句）→ ② 分白班/夜班（212-213）→ ③ 报请假/缺席（214-220）→ ④ 排班确认（221-230）→ ⑤ 培训（231-239）。\n人员安排的核心问题：谁在 + 谁不在 + 工作怎么分。",
    pronunciation: "eight 的 ei 读 /eɪ/，gh 不发音：/eɪt/。\nengineers 重音在末音节：/ˌɛn.dʒɪˈnɪrz/。\n节奏：We have EIGHT EN-gi-NEERS ｜ on DU-ty ｜ to-DAY.",
    quiz: [
      { q: "今天有10名工程师值班，怎么说？", a: "We have ten engineers on duty today." },
      { q: "on duty 和 off duty 分别是什么意思？", a: "on duty = 值班中/在岗；off duty = 下班/不在岗。交接时说 Who is on duty today?（今天谁值班），不说 Who is working today?（虽然意思接近但不够专业）。" },
    ],
  },
  {
    id: 212,
    en: "Four engineers are on the day shift.",
    cn: "四名工程师上白班。",
    ipa: "/fɔːr ˌɛn.dʒɪˈnɪrz ɑːr ɑːn ðə deɪ ʃɪft/",
    tags: ["第212句", "排班", "★★★★★"],
    when: "报完总人数后，说明白班人数，让接班人了解白天可用人力。",
    words: [
      { w: "day shift", ipa: "/deɪ ʃɪft/", pos: "名词", cn: "白班", memory: "① day = 白天；② shift = 班次/轮班。\nday shift = 白班（通常 8AM-8PM 或 7AM-7PM），与 night shift 相对。", phonics: "day 读 /deɪ/，shift 读 /ʃɪft/，sh 读 /ʃ/。", collocations: [["day shift", "白班"], ["day shift engineer", "白班工程师"], ["day shift handover", "白班交接"]], examples: [["I'm on the day shift this week.", "这周我上白班。"], ["The day shift starts at 8 AM.", "白班早上8点开始。"]] },
    ],
    phrases: [
      { p: "on the day shift", ipa: "/ɑːn ðə deɪ ʃɪft/", cn: "上白班", why: "on + the + shift = 在某个班次上。注意 day shift 前有定冠词 the，因为特指今天这个白班。" },
    ],
    grammar: [
      { q: "day shift 和 morning shift 有什么区别？", a: "day shift = 白班（通常12小时制，8AM-8PM）\nmorning shift = 早班（通常8小时三班倒中的早班，6AM-2PM）\n数据中心多用12小时两班倒（day shift + night shift），不用三班倒。\n交接时说 day shift / night shift，不说 morning shift / evening shift。" },
    ],
    pattern: "数量 + engineers + are on the day shift",
    patternExamples: [
      { en: "Six engineers are on the day shift.", cn: "六名工程师上白班。", words: [{ w: "engineers", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }, { w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }] },
      { en: "Three engineers are on the day shift today.", cn: "今天三名工程师上白班。", words: [{ w: "engineers", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }, { w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }] },
      { en: "All engineers are on the day shift.", cn: "所有工程师都上白班。", words: [{ w: "engineers", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }, { w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }] },
    ],
    thinking: "白班/夜班人数分配是交接基本信息。\n数据中心通常12小时两班倒：白班（8AM-8PM）+ 夜班（8PM-8AM）。\n交接时先报白班人数（本句），再报夜班人数（下句），总和应等于211句的总人数。",
    pronunciation: "four 的 or 读 /ɔːr/。\nshift 的 sh 读 /ʃ/，不要读成 /s/。\n节奏：FOUR EN-gi-NEERS ｜ are on the DAY SHIFT.",
    quiz: [
      { q: "五名工程师上白班，怎么说？", a: "Five engineers are on the day shift." },
      { q: "数据中心通常怎么排班？", a: "12小时两班倒：day shift（白班，8AM-8PM）+ night shift（夜班，8PM-8AM）。不用 morning shift / evening shift（那是工厂三班倒的说法）。" },
    ],
  },
  {
    id: 213,
    en: "Four engineers are on the night shift.",
    cn: "四名工程师上夜班。",
    ipa: "/fɔːr ˌɛn.dʒɪˈnɪrz ɑːr ɑːn ðə naɪt ʃɪft/",
    tags: ["第213句", "排班", "★★★★★"],
    when: "报完白班人数后，紧接着报夜班人数，两数之和等于总人数。",
    words: [
      { w: "night shift", ipa: "/naɪt ʃɪft/", pos: "名词", cn: "夜班", memory: "① night = 夜晚；② shift = 班次。\nnight shift = 夜班（通常 8PM-8AM），与 day shift 相对。夜班人力通常比白班少。", phonics: "night 读 /naɪt/，gh 不发音；shift 读 /ʃɪft/。", collocations: [["night shift", "夜班"], ["night shift handover", "夜班交接"], ["night shift engineer", "夜班工程师"]], examples: [["The night shift starts at 8 PM.", "夜班晚上8点开始。"], ["Who is on the night shift tonight?", "今晚谁上夜班？"]] },
    ],
    phrases: [
      { p: "on the night shift", ipa: "/ɑːn ðə naɪt ʃɪft/", cn: "上夜班", why: "与 on the day shift 完全对称。交接时白班和夜班人数一起报，让接班人快速核对总人数。" },
    ],
    grammar: [
      { q: "白班和夜班人数分配有什么规律？", a: "白班人数通常 ≥ 夜班人数，因为白天维护/施工/供应商来访多。\n典型分配：\n✅ 8人总值班 → 白班5 + 夜班3（白天忙）\n✅ 8人总值班 → 白班4 + 夜班4（均等）\n交接时白班+夜班人数之和必须等于总人数，否则数据有误。" },
    ],
    pattern: "数量 + engineers + are on the night shift",
    patternExamples: [
      { en: "Three engineers are on the night shift.", cn: "三名工程师上夜班。", words: [{ w: "engineers", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }, { w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }] },
      { en: "Two engineers are on the night shift tonight.", cn: "今晚两名工程师上夜班。", words: [{ w: "engineers", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }, { w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }] },
      { en: "Five engineers are on the night shift.", cn: "五名工程师上夜班。", words: [{ w: "engineers", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }, { w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }] },
    ],
    thinking: "白班+夜班人数汇报形成完整的排班画面：\n211句：总人数 → 212句：白班 → 213句：夜班。\n三句组合 = 完整排班概览。\n如果白班+夜班 ≠ 总人数，说明有人请假/缺席（接下来214-220句会解释）。",
    pronunciation: "night 的 igh 读 /aɪ/：/naɪt/。\nshift 的 sh 读 /ʃ/。\n节奏：FOUR EN-gi-NEERS ｜ are on the NIGHT SHIFT.",
    quiz: [
      { q: "三名工程师上夜班，怎么说？", a: "Three engineers are on the night shift." },
      { q: "如果白班5人+夜班3人=8人，但总人数报的是10人，说明什么？", a: "说明有2人不在排班中——可能请假（annual leave / medical leave / personal leave）、出差（business trip）、培训（training）或加班（overtime）。接下来214-220句会逐一说明。" },
    ],
  },
  {
    id: 214,
    en: "One engineer is on annual leave today.",
    cn: "今天有一名工程师休年假。",
    ipa: "/wʌn ˌɛn.dʒɪˈnɪr ɪz ɑːn ˈæn.ju.əl liːv təˈdeɪ/",
    tags: ["第214句", "请假", "★★★★★"],
    when: "排班人数报完后，逐一说明不在岗人员的原因。先说年假（最常见的请假类型）。",
    words: [
      { w: "annual leave", ipa: "/ˈæn.ju.əl liːv/", pos: "名词", cn: "年假", memory: "① annual = 年度的（annual report = 年报）；② leave = 休假。\nannual leave = 年假（带薪年休假），区别于 medical leave（病假）和 personal leave（事假）。", phonics: "an 读 /æn/，nu 读 /ju/，al 读 /əl/，重音在第一音节。leave 读 /liːv/。", collocations: [["annual leave", "年假"], ["on annual leave", "休年假中"], ["apply for annual leave", "申请年假"]], examples: [["She is on annual leave this week.", "她这周休年假。"], ["I have five days of annual leave left.", "我还剩5天年假。"]] },
      { w: "leave", ipa: "/liːv/", pos: "名词", cn: "休假；假期", memory: "① leave 作动词 = 离开；② leave 作名词 = 休假/假期。\n请假类型：annual leave（年假）、medical leave（病假）、personal leave（事假）、maternity leave（产假）。", phonics: "leave 读 /liːv/，长元音 /iː/。", collocations: [["on leave", "休假中"], ["leave application", "请假申请"], ["leave balance", "假期余额"]], examples: [["He is on leave today.", "他今天休假。"], ["Please submit your leave request.", "请提交你的请假申请。"]] },
    ],
    phrases: [
      { p: "on annual leave", ipa: "/ɑːn ˈæn.ju.əl liːv/", cn: "休年假", why: "on + leave 类型 = 正在休某种假。annual leave 是带薪年假，每个员工每年有固定天数。" },
    ],
    grammar: [
      { q: "三种常见请假类型怎么区分？", a: "annual leave = 年假（计划性休假，需提前申请）\nmedical leave = 病假（因病请假，通常需要医生证明）\npersonal leave = 事假（个人事务，通常无薪或扣假）\n✅ One engineer is on annual leave.（年假 → 提前计划好的）\n✅ One engineer is on medical leave.（病假 → 突发疾病）\n✅ One engineer is on personal leave.（事假 → 个人原因）\n交接时按常见度排序：年假 → 病假 → 事假。" },
    ],
    pattern: "数量 + engineer(s) + is/are on + leave类型 + 时间",
    patternExamples: [
      { en: "Two engineers are on annual leave this week.", cn: "这周有两名工程师休年假。", words: [{ w: "engineers", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }] },
      { en: "One engineer is on annual leave until Friday.", cn: "有一名工程师休年假到周五。", words: [{ w: "engineer", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }] },
      { en: "No one is on annual leave today.", cn: "今天没有人休年假。", words: [] },
    ],
    thinking: "请假类型是数据中心交接的固定汇报项。\n常见请假类型优先级：annual leave > medical leave > personal leave > training > business trip。\n交接时逐一报出不在岗人员及其原因，让接班人知道谁不在、为什么不在。",
    pronunciation: "annual 的 an 读 /æn/，不是 /ɑːn/。\nleave 读 /liːv/，长元音。\n节奏：ONE EN-gi-NEER ｜ is on AN-nual LEAVE ｜ to-DAY.",
    quiz: [
      { q: "今天有两名工程师休年假，怎么说？", a: "Two engineers are on annual leave today." },
      { q: "annual leave、medical leave、personal leave 分别是什么？", a: "annual leave = 年假（带薪年休假，提前计划）；medical leave = 病假（因病请假，需医生证明）；personal leave = 事假（个人原因，通常无薪）。交接时按这个顺序汇报。" },
    ],
  },
  {
    id: 215,
    en: "One engineer is on medical leave today.",
    cn: "今天有一名工程师请病假。",
    ipa: "/wʌn ˌɛn.dʒɪˈnɪr ɪz ɑːn ˈmɛd.ɪ.kəl liːv təˈdeɪ/",
    tags: ["第215句", "请假", "★★★★★"],
    when: "报完年假人员后，说明病假人员。病假通常是突发的，需要特别关注对排班的影响。",
    words: [
      { w: "medical leave", ipa: "/ˈmɛd.ɪ.kəl liːv/", pos: "名词", cn: "病假", memory: "① medical = 医疗的（medicine = 药物）；② leave = 休假。\nmedical leave = 病假，通常需要医生证明（medical certificate / MC）。", phonics: "med 读 /mɛd/，i 读 /ɪ/，cal 读 /kəl/，重音在第一音节。", collocations: [["medical leave", "病假"], ["on medical leave", "请病假中"], ["medical certificate", "医生证明"]], examples: [["He is on medical leave for three days.", "他请了三天病假。"], ["Please submit your medical certificate.", "请提交你的医生证明。"]] },
    ],
    phrases: [
      { p: "on medical leave", ipa: "/ɑːn ˈmɛd.ɪ.kəl liːv/", cn: "请病假", why: "medical leave 通常需要医生证明（MC），与 annual leave（提前计划）不同，病假往往是突发的。" },
    ],
    grammar: [
      { q: "病假和年假在交接时有什么不同？", a: "年假（annual leave）= 提前计划，排班已考虑，不影响当天人力。\n病假（medical leave）= 突发，可能需要临时替班或重新分配工作。\n交接时如果病假导致人力不足，需要说明替班安排（226句）。\n✅ One engineer is on annual leave.（计划好的，不用担心）\n✅ One engineer is on medical leave.（突发的，可能需要调整）" },
    ],
    pattern: "数量 + engineer(s) + is/are on medical leave + 时间",
    patternExamples: [
      { en: "Two engineers are on medical leave this week.", cn: "这周有两名工程师请病假。", words: [{ w: "engineers", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }] },
      { en: "One engineer is on medical leave until Monday.", cn: "有一名工程师请病假到下周一。", words: [{ w: "engineer", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }] },
      { en: "No one is on medical leave today.", cn: "今天没有人请病假。", words: [] },
    ],
    thinking: "病假是交接中最需要关注的请假类型，因为：\n1. 突发 → 排班未预留 → 可能人力不足\n2. 需要替班安排（covering / replacement）\n3. 可能影响当天维护/施工的监督安排\n如果病假导致人力不足，后续需要说 227句（We are short of one engineer）。",
    pronunciation: "medical 的 med 读 /mɛd/，不是 /miː/。\nleave 读 /liːv/。\n节奏：ONE EN-gi-NEER ｜ is on MED-i-cal LEAVE ｜ to-DAY.",
    quiz: [
      { q: "今天有两名工程师请病假，怎么说？", a: "Two engineers are on medical leave today." },
      { q: "病假为什么比年假更需要关注？", a: "病假是突发的，排班没有预留，可能导致人力不足。交接时需要说明：① 谁请了病假 ② 有没有替班安排 ③ 是否影响当天的维护/施工监督。年假是提前计划的，排班已考虑，不需要额外关注。" },
    ],
  },
  {
    id: 216,
    en: "One engineer is on personal leave today.",
    cn: "今天有一名工程师请事假。",
    ipa: "/wʌn ˌɛn.dʒɪˈnɪr ɪz ɑːn ˈpɜːr.sən.əl liːv təˈdeɪ/",
    tags: ["第216句", "请假", "★★★★"],
    when: "报完年假和病假后，说明事假人员。事假是第三种常见请假类型。",
    words: [
      { w: "personal leave", ipa: "/ˈpɜːr.sən.əl liːv/", pos: "名词", cn: "事假", memory: "① personal = 个人的（person = 人）；② leave = 休假。\npersonal leave = 事假（因个人事务请假），通常无薪或扣年假余额。", phonics: "per 读 /pɜːr/，son 读 /sən/，al 读 /əl/，重音在第一音节。", collocations: [["personal leave", "事假"], ["on personal leave", "请事假中"], ["personal matter", "个人事务"]], examples: [["She took personal leave for a family matter.", "她因家庭事务请了事假。"], ["I need to apply for personal leave tomorrow.", "我明天需要请事假。"]] },
    ],
    phrases: [
      { p: "on personal leave", ipa: "/ɑːn ˈpɜːr.sən.əl liːv/", cn: "请事假", why: "personal leave 涵盖所有非年假、非病假的个人原因请假，如家庭事务、搬家、考试等。" },
    ],
    grammar: [
      { q: "三种请假类型在英语中怎么统一表达？", a: "统一结构：X engineer(s) + is/are + on + [leave类型] + 时间\n✅ One engineer is on annual leave today.（年假）\n✅ One engineer is on medical leave today.（病假）\n✅ One engineer is on personal leave today.（事假）\n三种类型的句型完全一致，只需替换 leave 类型词。\n交接时按固定顺序逐一报出即可。" },
    ],
    pattern: "数量 + engineer(s) + is/are on personal leave + 时间",
    patternExamples: [
      { en: "Two engineers are on personal leave this week.", cn: "这周有两名工程师请事假。", words: [{ w: "engineers", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }] },
      { en: "One engineer is on personal leave for two days.", cn: "有一名工程师请两天事假。", words: [{ w: "engineer", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }] },
      { en: "No one is on personal leave today.", cn: "今天没有人请事假。", words: [] },
    ],
    thinking: "三种请假类型汇报完毕（214-216），形成完整的请假汇报：\n214句：年假 → 215句：病假 → 216句：事假。\n如果某种类型没有人请假，可以说 No one is on XX leave today 或直接跳过。\n交接目标是让接班人清楚'谁不在 + 为什么不在'。",
    pronunciation: "personal 的 per 读 /pɜːr/，不要读成 /pɪər/。\nleave 读 /liːv/。\n节奏：ONE EN-gi-NEER ｜ is on PER-son-al LEAVE ｜ to-DAY.",
    quiz: [
      { q: "今天没有人请事假，怎么说？", a: "No one is on personal leave today." },
      { q: "用统一句型说'三名工程师今天休年假'？", a: "Three engineers are on annual leave today. 句型：数量 + engineers + are on + leave类型 + today。三种请假类型（annual/medical/personal）用完全相同的句型。" },
    ],
  },
  {
    id: 217,
    en: "One engineer is attending training today.",
    cn: "今天有一名工程师参加培训。",
    ipa: "/wʌn ˌɛn.dʒɪˈnɪr ɪz əˈtɛn.dɪŋ ˈtreɪ.nɪŋ təˈdeɪ/",
    tags: ["第217句", "人员状态", "★★★★"],
    when: "请假类型报完后，说明其他不在岗原因——培训。培训虽不是请假，但同样影响当天可用人力。",
    words: [
      { w: "attending", ipa: "/əˈtɛn.dɪŋ/", pos: "动词(现在分词)", cn: "参加", memory: "① attend = 出席/参加；② attending = 正在参加（现在进行时）。\nattend training = 参加培训，attend meeting = 参加会议。", phonics: "at 读 /ə/，ten 读 /ˈtɛn/，ding 读 /dɪŋ/，重音在第二音节。", collocations: [["attend training", "参加培训"], ["attend a meeting", "参加会议"], ["attend a course", "参加课程"]], examples: [["She is attending a safety course.", "她正在参加安全课程。"], ["All engineers must attend the briefing.", "所有工程师必须参加说明会。"]] },
      { w: "training", ipa: "/ˈtreɪ.nɪŋ/", pos: "名词", cn: "培训", memory: "① train = 训练/培训；② training = 培训（名词/动名词）。\n数据中心常见培训：safety training（安全培训）、electrical training（电气培训）、fire training（消防培训）。", phonics: "train 读 /treɪn/，ing 读 /ɪŋ/，重音在第一音节。", collocations: [["safety training", "安全培训"], ["online training", "线上培训"], ["training schedule", "培训安排"]], examples: [["Monthly safety training is at 2 PM.", "每月安全培训下午2点。"], ["Please complete the online training.", "请完成线上培训。"]] },
    ],
    phrases: [
      { p: "is attending training", ipa: "/ɪz əˈtɛn.dɪŋ ˈtreɪ.nɪŋ/", cn: "正在参加培训", why: "现在进行时 is attending 表示今天正在进行的动作。培训虽不是请假，但该工程师当天无法参与值班工作。" },
    ],
    grammar: [
      { q: "为什么培训不算请假但也要汇报？", a: "培训（training）和出差（business trip）虽然不是 leave（请假），但工程师当天不在岗位，同样影响可用人力。\n交接时需要区分：\n✅ on leave = 请假（年假/病假/事假）→ 不计入出勤\n✅ attending training / on a business trip = 因公不在 → 计入出勤但不在现场\n两者都导致'当天可用人力减少'，所以都要汇报。" },
    ],
    pattern: "数量 + engineer(s) + is/are attending training + 时间",
    patternExamples: [
      { en: "Two engineers are attending training this week.", cn: "这周有两名工程师参加培训。", words: [{ w: "engineers", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }] },
      { en: "One engineer is attending safety training today.", cn: "今天有一名工程师参加安全培训。", words: [{ w: "engineer", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }, { w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }] },
      { en: "No one is attending training today.", cn: "今天没有人参加培训。", words: [] },
    ],
    thinking: "不在岗原因扩展：请假（214-216）→ 培训（217）→ 出差（218）→ 加班（219）→ 代班（220）。\n每种原因都影响当天可用人力，交接时逐一报出。\n汇报顺序逻辑：请假（最常见）→ 培训（计划性）→ 出差（计划性）→ 加班（补充人力）→ 代班（替代人力）。",
    pronunciation: "attending 的 at 读轻声 /ə/，ten 读 /ˈtɛn/。\ntraining 的 ai 读 /eɪ/。\n节奏：ONE EN-gi-NEER ｜ is at-TEND-ing TRAIN-ing ｜ to-DAY.",
    quiz: [
      { q: "今天有两名工程师参加培训，怎么说？", a: "Two engineers are attending training today." },
      { q: "培训不算请假，为什么交接时也要汇报？", a: "因为培训的工程师当天不在岗位，无法参与值班工作，同样影响可用人力。交接时需要区分 on leave（请假）和 attending training（因公不在），但两者都要汇报，让接班人知道谁不在、为什么不在。" },
    ],
  },
  {
    id: 218,
    en: "One engineer is on a business trip today.",
    cn: "今天有一名工程师出差。",
    ipa: "/wʌn ˌɛn.dʒɪˈnɪr ɪz ɑːn ə ˈbɪz.nɪs trɪp təˈdeɪ/",
    tags: ["第218句", "人员状态", "★★★★"],
    when: "报完培训人员后，说明出差人员。出差同样是因公不在现场。",
    words: [
      { w: "business trip", ipa: "/ˈbɪz.nɪs trɪp/", pos: "名词", cn: "出差", memory: "① business = 商务/公务；② trip = 旅行/出行。\nbusiness trip = 出差（因公外出），区别于 personal trip（个人旅行）。", phonics: "bus 读 /bɪz/，i 读 /ɪ/，ness 读 /nəs/；trip 读 /trɪp/。", collocations: [["business trip", "出差"], ["on a business trip", "出差中"], ["business travel", "公务出行"]], examples: [["He is on a business trip to Singapore.", "他出差去新加坡了。"], ["The business trip lasts three days.", "出差持续三天。"]] },
    ],
    phrases: [
      { p: "on a business trip", ipa: "/ɑːn ə ˈbɪz.nɪs trɪp/", cn: "出差中", why: "on a + trip = 在出行中。注意 business trip 前有不定冠词 a，与 on annual leave（无冠词）不同。" },
    ],
    grammar: [
      { q: "on a business trip 和 on leave 的冠词用法有什么不同？", a: "on annual leave / on medical leave / on personal leave → 无冠词（leave 是不可数名词）\non a business trip → 有冠词 a（trip 是可数名词）\non training → 无冠词（training 是不可数名词）\n✅ She is on annual leave.（无 a）\n✅ She is on a business trip.（有 a）\n✅ She is attending training.（无 a，且用动词 attend）" },
    ],
    pattern: "数量 + engineer(s) + is/are on a business trip + 时间",
    patternExamples: [
      { en: "Two engineers are on a business trip this week.", cn: "这周有两名工程师出差。", words: [{ w: "engineers", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }] },
      { en: "One engineer is on a business trip to KL.", cn: "有一名工程师出差去吉隆坡了。", words: [{ w: "engineer", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }] },
      { en: "No one is on a business trip today.", cn: "今天没有人出差。", words: [] },
    ],
    thinking: "不在岗原因汇总（214-218）：\n请假：annual leave / medical leave / personal leave\n因公不在：attending training / on a business trip\n所有原因报完后，接班人可以计算出：总人数 - 请假 - 培训 - 出差 = 实际在岗人数。",
    pronunciation: "business 读 /ˈbɪz.nɪs/，只有两个音节，不要读成三音节。\ntrip 读 /trɪp/，短元音。\n节奏：ONE EN-gi-NEER ｜ is on a BUS-iness TRIP ｜ to-DAY.",
    quiz: [
      { q: "今天有两名工程师出差，怎么说？", a: "Two engineers are on a business trip today." },
      { q: "on a business trip 和 on annual leave 的冠词用法有什么不同？", a: "on a business trip 有不定冠词 a（trip 是可数名词）；on annual leave 无冠词（leave 是不可数名词）。记忆：trip 可数要加 a，leave 不可数不加 a。" },
    ],
  },
  {
    id: 219,
    en: "One engineer is working overtime today.",
    cn: "今天有一名工程师加班。",
    ipa: "/wʌn ˌɛn.dʒɪˈnɪr ɪz ˈwɜːr.kɪŋ ˈoʊ.vərˌtaɪm təˈdeɪ/",
    tags: ["第219句", "人员状态", "★★★★"],
    when: "报完不在岗人员后，说明加班人员——加班是增加人力的情况，与请假相反。",
    words: [
      { w: "overtime", ipa: "/ˈoʊ.vərˌtaɪm/", pos: "名词/副词", cn: "加班", memory: "① over = 超过；② time = 时间。\novertime = 超过正常工作时间 → 加班。可作名词（work overtime）或形容词（overtime pay = 加班费）。", phonics: "o 读 /oʊ/，ver 读 /vər/，time 读 /taɪm/，重音在第一音节。", collocations: [["work overtime", "加班"], ["overtime pay", "加班费"], ["overtime hours", "加班时长"]], examples: [["He is working overtime tonight.", "他今晚加班。"], ["Please submit your overtime claim.", "请提交你的加班申请。"]] },
    ],
    phrases: [
      { p: "working overtime", ipa: "/ˈwɜːr.kɪŋ ˈoʊ.vərˌtaɪm/", cn: "正在加班", why: "现在进行时 working overtime 表示今天正在进行的加班。加班通常是因为人力不足或有紧急任务。" },
    ],
    grammar: [
      { q: "加班在交接中为什么需要汇报？", a: "加班意味着：\n1. 当天有额外人力可用（正面信息）\n2. 可能是因为人力不足需要补充（与215句病假关联）\n3. 加班人员可能需要第二天补休（影响后续排班）\n✅ One engineer is working overtime.（加班 → 今天多一个人）\n交接时加班通常紧跟在请假/出差之后报，因为加班往往是为了弥补人力缺口。" },
    ],
    pattern: "数量 + engineer(s) + is/are working overtime + 时间",
    patternExamples: [
      { en: "Two engineers are working overtime tonight.", cn: "今晚有两名工程师加班。", words: [{ w: "engineers", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }] },
      { en: "One engineer is working overtime to cover the shortage.", cn: "有一名工程师加班来弥补人力不足。", words: [{ w: "engineer", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }] },
      { en: "No one is working overtime today.", cn: "今天没有人加班。", words: [] },
    ],
    thinking: "加班与请假形成对比：\n请假（214-216）= 人力减少\n加班（219）= 人力增加\n代班（220）= 人力替代\n交接时先报减少的（请假），再报增加的（加班），最后报替代的（代班），形成完整的人力变化画面。",
    pronunciation: "overtime 的 o 读 /oʊ/，ver 读 /vər/。\nworking 的 or 读 /ɜːr/。\n节奏：ONE EN-gi-NEER ｜ is WORK-ing ｜ O-ver-TIME ｜ to-DAY.",
    quiz: [
      { q: "今晚有两名工程师加班，怎么说？", a: "Two engineers are working overtime tonight." },
      { q: "加班和请假在交接中的汇报顺序是什么？", a: "先报请假（人力减少）→ 再报加班（人力增加）→ 最后报代班（人力替代）。这样接班人可以先了解缺口，再了解补充，最后了解替代方案。" },
    ],
  },
  {
    id: 220,
    en: "One engineer is covering the night shift.",
    cn: "今天有一名工程师代上夜班。",
    ipa: "/wʌn ˌɛn.dʒɪˈnɪr ɪz ˈkʌv.ər.ɪŋ ðə naɪt ʃɪft/",
    tags: ["第220句", "人员状态", "★★★★★"],
    when: "报完加班后，说明代班安排。代班通常是因为有人请假，需要其他人顶上。",
    words: [
      { w: "covering", ipa: "/ˈkʌv.ər.ɪŋ/", pos: "动词(现在分词)", cn: "代替；顶替", memory: "① cover = 覆盖/代替；② covering = 正在代替（现在进行时）。\ncover the shift = 代替上班/顶班，cover for someone = 替某人。", phonics: "cov 读 /kʌv/，er 读 /ər/，ing 读 /ɪŋ/，重音在第一音节。", collocations: [["cover the shift", "代班"], ["cover for someone", "替某人"], ["cover the night shift", "代上夜班"]], examples: [["David is covering for John today.", "David 今天替 John。"], ["Can you cover my shift tomorrow?", "你明天能替我的班吗？"]] },
    ],
    phrases: [
      { p: "covering the night shift", ipa: "/ˈkʌv.ər.ɪŋ ðə naɪt ʃɪft/", cn: "代上夜班", why: "cover + the + shift = 代替上某个班次。cover 在排班语境中专门指'顶替别人的班'。" },
    ],
    grammar: [
      { q: "cover 和 replace 在代班语境中有什么区别？", a: "cover = 临时顶替（短期，通常一天或一个班次）\nreplace = 永久替换（长期，如岗位调动）\n✅ One engineer is covering the night shift.（临时顶替今天夜班）\n✅ He replaced the previous engineer.（永久替换了之前的工程师）\n交接场景用 cover，因为代班是临时的。" },
    ],
    pattern: "数量 + engineer(s) + is/are covering + 班次",
    patternExamples: [
      { en: "Two engineers are covering the day shift.", cn: "两名工程师代上白班。", words: [{ w: "engineers", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }, { w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }] },
      { en: "One engineer is covering for the sick colleague.", cn: "有一名工程师替生病的同事。", words: [{ w: "engineer", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }] },
      { en: "David is covering the night shift for Alex.", cn: "David 替 Alex 上夜班。", words: [{ w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }] },
    ],
    thinking: "代班是人员安排的最后一块拼图：\n211-213：正常排班（总数+白班+夜班）\n214-216：减少（请假）\n217-218：不在（培训/出差）\n219：增加（加班）\n220：替代（代班）\n至此，人员变化的完整画面已呈现。接下来221-230是排班确认和工作分配。",
    pronunciation: "covering 的 cov 读 /kʌv/，短元音 /ʌ/。\nnight shift 读 /naɪt ʃɪft/。\n节奏：ONE EN-gi-NEER ｜ is COV-er-ing ｜ the NIGHT SHIFT.",
    quiz: [
      { q: "David 替 Alex 上夜班，怎么说？", a: "David is covering the night shift for Alex." },
      { q: "cover 和 replace 在代班语境中有什么区别？", a: "cover = 临时顶替（短期，一天或一个班次）；replace = 永久替换（长期，岗位调动）。交接场景用 cover，因为代班是临时的。例：One engineer is covering the night shift.（临时顶替）" },
    ],
  },
  {
    id: 221,
    en: "Please confirm today's duty roster.",
    cn: "请确认今天的值班表。",
    ipa: "/pliːz kənˈfɜːrm təˈdeɪz ˈdjuː.ti ˈrɒs.tər/",
    tags: ["第221句", "排班确认", "★★★★★"],
    when: "人员状态全部报完后，进入排班确认环节。请接班人确认值班表是否正确。",
    words: [
      { w: "duty roster", ipa: "/ˈdjuː.ti ˈrɒs.tər/", pos: "名词", cn: "值班表", memory: "① duty = 值班/职责；② roster = 轮值表/排班表。\nduty roster = 值班表（排定谁在什么时间值班），是数据中心交接的核心文件。", phonics: "duty 读 /ˈdjuː.ti/；roster 读 /ˈrɒs.tər/（英式）或 /ˈrɑː.stər/（美式），注意 r 音。", collocations: [["duty roster", "值班表"], ["check the roster", "查看排班表"], ["roster schedule", "排班计划"]], examples: [["Please check the duty roster for next week.", "请查看下周的值班表。"], ["The duty roster has been updated.", "值班表已更新。"]] },
      { w: "confirm", ipa: "/kənˈfɜːrm/", pos: "动词", cn: "确认", memory: "① con- = 完全；② firm = 坚定 → 使之确定 → 确认。\nconfirm 在交接语境中表示'核实并认可'。", phonics: "con 读 /kən/，firm 读 /ˈfɜːrm/，重音在第二音节。", collocations: [["confirm the roster", "确认排班表"], ["confirm attendance", "确认出勤"], ["please confirm", "请确认"]], examples: [["Please confirm your shift.", "请确认你的班次。"], ["I confirm the schedule is correct.", "我确认时间表正确。"]] },
    ],
    phrases: [
      { p: "today's duty roster", ipa: "/təˈdeɪz ˈdjuː.ti ˈrɒs.tər/", cn: "今天的值班表", why: "today's + duty roster = 今天的值班表。用所有格 today's 限定是当天的排班。" },
    ],
    grammar: [
      { q: "confirm 和 check 在交接中有什么区别？", a: "check = 检查（查看是否有问题，可能发现错误）\nconfirm = 确认（认可无误，表示同意）\n✅ Please check the duty roster.（请检查值班表 → 看看有没有问题）\n✅ Please confirm the duty roster.（请确认值班表 → 认可没问题）\n交接流程：先 check（检查）→ 再 confirm（确认）。" },
    ],
    pattern: "Please confirm + 名词",
    patternExamples: [
      { en: "Please confirm the schedule.", cn: "请确认时间表。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }, { w: "schedule", ipa: "/ˈʃɛdjuːl/", cn: "安排", phonics: "sched 读 /ʃɛd/，ule 读 /juːl/" }] },
      { en: "Please confirm the attendance list.", cn: "请确认出勤名单。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }] },
      { en: "Please confirm tomorrow's duty roster.", cn: "请确认明天的值班表。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }] },
    ],
    thinking: "排班确认（221-230）是人员安排的核心环节。\n交接顺序：① 确认值班表（221）→ ② 检查签到（222）→ ③ 处理未到岗（223-226）→ ④ 人力评估（227-230）。\nconfirm 是交接中的高频动词，表示'我确认过了，没问题'。",
    pronunciation: "roster 的 r 读 /r/，o 读 /ɒ/（英式）或 /ɑː/（美式）。\nconfirm 重音在第二音节：/kənˈfɜːrm/。\n节奏：Please con-FIRM ｜ to-DAY'S ｜ DU-ty ROS-ter.",
    quiz: [
      { q: "请确认明天的值班表，怎么说？", a: "Please confirm tomorrow's duty roster." },
      { q: "check 和 confirm 在交接流程中的顺序是什么？", a: "先 check（检查，看有没有问题）→ 再 confirm（确认，认可无误）。例：Please check the duty roster first, then confirm it.（先检查值班表，然后确认。）" },
    ],
  },
  {
    id: 222,
    en: "Please check whether everyone has signed in.",
    cn: "请确认所有人员都已签到。",
    ipa: "/pliːz tʃɛk ˈwɛð.ər ˈɛv.ri.wʌn hæz saɪnd ɪn/",
    tags: ["第222句", "签到确认", "★★★★★"],
    when: "确认值班表后，检查所有人是否已签到到岗。",
    words: [
      { w: "whether", ipa: "/ˈwɛð.ər/", pos: "连词", cn: "是否", memory: "① whether = 是否（引导间接疑问句）；② 与 if 类似但更正式。\ncheck whether = 检查是否，confirm whether = 确认是否。", phonics: "wheth 读 /wɛð/，er 读 /ər/，重音在第一音节。th 读 /ð/，咬舌尖。", collocations: [["check whether", "检查是否"], ["whether or not", "是否"], ["confirm whether", "确认是否"]], examples: [["Please check whether the alarm is cleared.", "请检查告警是否已恢复。"], ["I'm not sure whether he is on duty.", "我不确定他是否在值班。"]] },
      { w: "signed in", ipa: "/saɪnd ɪn/", pos: "动词短语(过去分词)", cn: "已签到", memory: "① sign = 签名；② sign in = 签到（到达时签名登记）。\nsign in 与 sign out（签退）相对。数据中心通常要求进出都签名。", phonics: "sign 读 /saɪn/，ed 读 /d/；in 读 /ɪn/。", collocations: [["sign in", "签到"], ["sign out", "签退"], ["sign-in sheet", "签到表"]], examples: [["Please sign in when you arrive.", "到达时请签到。"], ["Has everyone signed in?", "所有人都签到了吗？"]] },
    ],
    phrases: [
      { p: "has signed in", ipa: "/hæz saɪnd ɪn/", cn: "已经签到", why: "现在完成时 has signed in 表示'到目前为止已经签到'，强调签到的结果状态。" },
    ],
    grammar: [
      { q: "whether 和 if 在这里可以互换吗？", a: "在 check/confirm 后面，whether 和 if 可以互换：\n✅ Please check whether everyone has signed in.（更正式）\n✅ Please check if everyone has signed in.（更口语）\n交接场景两者都可以，whether 稍正式。\n但在句首引导主语从句时只能用 whether：\n✅ Whether he comes is uncertain.（他是否来还不确定）\n❌ If he comes is uncertain." },
    ],
    pattern: "Please check whether + 从句",
    patternExamples: [
      { en: "Please check whether the PTW is approved.", cn: "请检查作业许可证是否已批准。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check whether all doors are locked.", cn: "请检查所有门是否已锁。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "doors", ipa: "/dɔːr/", cn: "门", phonics: "door 读 /dɔːr/" }] },
      { en: "Please check whether the UPS is running normally.", cn: "请检查UPS是否运行正常。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "签到确认是排班确认的第一步：\n221句：确认值班表 → 222句：检查签到 → 223句：发现未到岗。\n如果所有人已签到，可以直接跳到229句（工作确认）。\n如果有人未签到，需要223-226句处理。",
    pronunciation: "whether 的 th 读 /ð/，咬舌尖。\nsigned 的 gn 读 /n/，ed 读 /d/：/saɪnd/。\n节奏：Please CHECK ｜ WHETH-er EV-ery-one ｜ has SIGND IN.",
    quiz: [
      { q: "请检查告警是否已恢复，怎么说？", a: "Please check whether the alarm has been cleared." },
      { q: "whether 和 if 在交接中可以互换吗？", a: "在 check/confirm 后面可以互换：check whether = check if（检查是否）。whether 稍正式，if 更口语。但在句首引导主语从句时只能用 whether，不能用 if。" },
    ],
  },
  {
    id: 223,
    en: "One engineer has not arrived yet.",
    cn: "有一名工程师还没有到岗。",
    ipa: "/wʌn ˌɛn.dʒɪˈnɪr hæz nɑːt əˈraɪvd jɛt/",
    tags: ["第223句", "缺勤处理", "★★★★★"],
    when: "签到检查发现有人未到岗，立即报告。这是需要紧急处理的情况。",
    words: [
      { w: "arrived", ipa: "/əˈraɪvd/", pos: "动词(过去分词)", cn: "已到达", memory: "① arrive = 到达；② arrived = 已到达（完成时）。\nhas not arrived = 还没有到达 → 未到岗。", phonics: "ar 读 /ə/，rive 读 /ˈraɪv/，d 读 /d/，重音在第二音节。", collocations: [["arrive on time", "准时到达"], ["arrive late", "迟到"], ["not arrived yet", "还没到"]], examples: [["The contractor has arrived.", "承包商已到达。"], ["Has the vendor arrived yet?", "供应商到了吗？"]] },
      { w: "yet", ipa: "/jɛt/", pos: "副词", cn: "还（未）", memory: "① yet = 还/尚（用于否定句和疑问句）；② 表示'到目前为止还没有，但预期会有'。\nnot...yet = 还没有（但预期会到）。", phonics: "yet 读 /jɛt/，短元音。", collocations: [["not yet", "还没有"], ["hasn't arrived yet", "还没到"], ["not completed yet", "还没完成"]], examples: [["He hasn't come yet.", "他还没来。"], ["The work is not finished yet.", "工作还没完成。"]] },
    ],
    phrases: [
      { p: "has not arrived yet", ipa: "/hæz nɑːt əˈraɪvd jɛt/", cn: "还没有到达", why: "现在完成时否定 + yet = 到目前为止还没有。yet 暗示'预期会到但还没到'，不是永远不到。" },
    ],
    grammar: [
      { q: "yet 和 already 在完成时中怎么区分？", a: "yet = 还（未），用于否定句和疑问句，放在句末\nalready = 已经，用于肯定句，放在 have/has 后面或句末\n✅ He has not arrived yet.（他还没到 → 否定句 + yet）\n✅ He has already arrived.（他已经到了 → 肯定句 + already）\n✅ Has he arrived yet?（他到了吗？ → 疑问句 + yet）" },
    ],
    pattern: "数量 + engineer(s) + has/have not arrived yet",
    patternExamples: [
      { en: "Two engineers have not arrived yet.", cn: "有两名工程师还没到岗。", words: [{ w: "engineers", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }] },
      { en: "The contractor has not arrived yet.", cn: "承包商还没到。", words: [{ w: "contractor", ipa: "/ˈkɒntræktər/", cn: "承包商", phonics: "con 读 /kɒn/，tractor 读 /træktər/" }] },
      { en: "No one has failed to arrive.", cn: "所有人都已到达。（没有人未到）", words: [] },
    ],
    thinking: "未到岗是交接中需要立即处理的情况：\n223句：发现未到 → 224句：立即联系 → 225句：收到回复（迟到通知）→ 226句：安排替班。\n如果联系不上，可能需要升级到管理层。\n如果收到迟到通知，需要评估影响并安排临时替班。",
    pronunciation: "arrived 的 ar 读 /ə/，rive 读 /ˈraɪv/。\nyet 读 /jɛt/，短促。\n节奏：ONE EN-gi-NEER ｜ has NOT ar-RIVED YET.",
    quiz: [
      { q: "有两名工程师还没到岗，怎么说？", a: "Two engineers have not arrived yet." },
      { q: "yet 和 already 在完成时中怎么区分？", a: "yet 用于否定句和疑问句，放在句末：He has not arrived yet.（他还没到）Has he arrived yet?（他到了吗？）\nalready 用于肯定句，放在 have/has 后面：He has already arrived.（他已经到了）" },
    ],
  },
  {
    id: 224,
    en: "Please call him immediately.",
    cn: "请立即联系他。",
    ipa: "/pliːz kɔːl hɪm ɪˈmiː.di.ət.li/",
    tags: ["第224句", "紧急联系", "★★★★"],
    when: "发现有人未到岗后，立即指示联系该工程师，确认情况。",
    words: [
      { w: "immediately", ipa: "/ɪˈmiː.di.ət.li/", pos: "副词", cn: "立即；马上", memory: "① im- = 不；② mediate = 中间 → 没有中间延迟 → 立即。\nimmediately 是交接中表达紧迫性的常用副词。", phonics: "im 读 /ɪ/，me 读 /ˈmiː/，di 读 /di/，ate 读 /ət/，ly 读 /li/，重音在第二音节。", collocations: [["immediately", "立即"], ["contact immediately", "立即联系"], ["respond immediately", "立即响应"]], examples: [["Please escalate this immediately.", "请立即升级这个问题。"], ["Stop the work immediately.", "立即停止工作。"]] },
    ],
    phrases: [
      { p: "call him immediately", ipa: "/kɔːl hɪm ɪˈmiː.di.ət.li/", cn: "立即联系他", why: "call + 人 + immediately = 立即联系某人。call 在这里指打电话，也可以泛指任何形式的联系。" },
    ],
    grammar: [
      { q: "immediately 和 right now 有什么区别？", a: "immediately = 立即（正式，书面/口语均可）\nright now = 马上（口语化）\nas soon as possible (ASAP) = 尽快（稍弱，允许短暂延迟）\n✅ Please call him immediately.（立即打 → 最紧迫）\n✅ Please call him right now.（马上打 → 口语）\n✅ Please call him as soon as possible.（尽快打 → 稍弱）\n交接中未到岗属于紧急情况，用 immediately。" },
    ],
    pattern: "Please + 动词 + 宾语 + immediately",
    patternExamples: [
      { en: "Please escalate this immediately.", cn: "请立即升级这个问题。", words: [{ w: "escalate", ipa: "/ˈɛskəleɪt/", cn: "升级", phonics: "es 读 /ɛs/，calate 读 /kəleɪt/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Please stop the work immediately.", cn: "请立即停止工作。", words: [{ w: "stop", ipa: "/stɒp/", cn: "停止", phonics: "stop 读 /stɒp/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Please notify the manager immediately.", cn: "请立即通知经理。", words: [{ w: "notify", ipa: "/ˈnoʊtɪfaɪ/", cn: "通知", phonics: "not 读 /noʊt/，ify 读 /ɪfaɪ/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
    ],
    thinking: "未到岗处理流程：\n223句：发现未到 → 224句：立即联系（本句）→ 225句：收到回复 → 226句：安排替班。\nimmediately 体现紧迫性——未到岗可能影响当天的维护和施工监督安排。",
    pronunciation: "immediately 四个音节，重音在第二音节：/ɪˈmiː.di.ət.li/。\ncall 读 /kɔːl/，长元音。\n节奏：Please CALL him ｜ im-ME-di-ate-ly.",
    quiz: [
      { q: "请立即通知经理，怎么说？", a: "Please notify the manager immediately." },
      { q: "immediately、right now、as soon as possible 哪个最紧迫？", a: "immediately = 立即（最紧迫，正式）；right now = 马上（口语化，同样紧迫）；as soon as possible = 尽快（稍弱，允许短暂延迟）。交接中未到岗属于紧急情况，用 immediately。" },
    ],
  },
  {
    id: 225,
    en: "He informed us that he will be thirty minutes late.",
    cn: "他通知我们将迟到三十分钟。",
    ipa: "/hiː ɪnˈfɔːrmd ʌs ðæt hiː wɪl biː ˈθɜːr.ti ˈmɪn.ɪts leɪt/",
    tags: ["第225句", "迟到通知", "★★★★★"],
    when: "联系到该工程师后，他回复了迟到原因和时间。需要向接班人说明情况。",
    words: [
      { w: "informed", ipa: "/ɪnˈfɔːrmd/", pos: "动词(过去式)", cn: "通知了", memory: "① inform = 通知/告知；② informed = 已通知（过去式）。\ninform someone that... = 通知某人…，比 tell 更正式。", phonics: "in 读 /ɪn/，form 读 /ˈfɔːrm/，ed 读 /d/，重音在第二音节。", collocations: [["inform someone", "通知某人"], ["be informed", "被告知"], ["inform in advance", "提前通知"]], examples: [["He informed us about the delay.", "他通知我们延误的情况。"], ["Please inform me of any changes.", "请通知我任何变更。"]] },
      { w: "late", ipa: "/leɪt/", pos: "形容词/副词", cn: "迟到的/晚", memory: "① late = 迟到的/晚的；② be late = 迟到。\nX minutes late = 迟到X分钟。", phonics: "late 读 /leɪt/，长元音 /eɪ/。", collocations: [["minutes late", "迟到几分钟"], ["arrive late", "迟到"], ["running late", "要迟到了"]], examples: [["The train is 10 minutes late.", "火车晚点10分钟。"], ["I'm running late today.", "我今天要迟到了。"]] },
    ],
    phrases: [
      { p: "informed us that", ipa: "/ɪnˈfɔːrmd ʌs ðæt/", cn: "通知我们", why: "inform + 人 + that + 从句 = 通知某人某事。that 引导的是通知的具体内容。" },
      { p: "will be thirty minutes late", ipa: "/wɪl biː ˈθɜːr.ti ˈmɪn.ɪts leɪt/", cn: "将迟到三十分钟", why: "will be + 时间 + late = 将迟到多久。will 表示将来，late 表示迟到状态。" },
    ],
    grammar: [
      { q: "inform 和 tell 在交接中有什么区别？", a: "inform = 通知（正式，书面/口语均可）\ntell = 告诉（口语化）\n✅ He informed us that he will be late.（他通知我们他将迟到 → 正式）\n✅ He told us he will be late.（他告诉我们他将迟到 → 口语）\n交接记录中用 inform，口语中两者都可以。\n注意：inform 后面必须接宾语（inform someone），不能省略。" },
    ],
    pattern: "主语 + informed + 人 + that + 从句",
    patternExamples: [
      { en: "She informed us that she will be on leave tomorrow.", cn: "她通知我们她明天休假。", words: [] },
      { en: "The vendor informed us that the parts will arrive Friday.", cn: "供应商通知我们备件周五到货。", words: [{ w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }] },
      { en: "He informed the team that the maintenance is postponed.", cn: "他通知团队维护已延期。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
    ],
    thinking: "迟到通知是未到岗处理流程的中间环节：\n223句：发现未到 → 224句：联系 → 225句：收到迟到通知（本句）→ 226句：安排替班。\n迟到30分钟通常影响不大，但如果涉及关键维护的监督，需要安排临时替班。\n下一步（226句）是安排临时替班人员。",
    pronunciation: "informed 的 in 读 /ɪn/，form 读 /ˈfɔːrm/。\nthirty 的 th 读 /θ/，咬舌尖送气。\n节奏：He in-FORMED us ｜ that he will be ｜ THIR-ty MIN-utes LATE.",
    quiz: [
      { q: "她通知我们她明天休假，怎么说？", a: "She informed us that she will be on leave tomorrow." },
      { q: "inform 和 tell 在交接中有什么区别？", a: "inform = 通知（正式，书面/口语均可）；tell = 告诉（口语化）。交接记录中用 inform，口语中两者都可以。注意 inform 后面必须接宾语：inform someone that...，不能省略 someone。" },
    ],
  },
];

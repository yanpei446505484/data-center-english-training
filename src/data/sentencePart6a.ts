// EXPORTS: MOCK_SENTENCES_PART6A

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART6A: ISentence[] = [
  {
    id: 151,
    en: "There are four tickets that will expire today.",
    cn: "今天有4张工单即将到期。",
    ipa: "/ðeər ɑːr fɔːr ˈtɪk.ɪts ðæt wɪl ɪkˈspaɪər təˈdeɪ/",
    tags: ["第151句", "SLA到期", "★★★★★"],
    when: "故障单交接完成后，转入SLA检查。先汇报今天到期的工单总数，让接班人知道时间压力。",
    words: [
      { w: "expire", ipa: "/ɪkˈspaɪər/", pos: "动词", cn: "到期；过期", memory: "① ex- = 出/离开，spire = 呼吸 → 原义'呼出最后一口气'；② 引申为到期/过期。\nexpire 用于工单/许可证/合同等到期，不用 die。", phonics: "ex 读 /ɪk/，pire 读 /ˈspaɪər/，重音在第二音节。", collocations: [["expire today", "今天到期"], ["expire tomorrow", "明天到期"], ["ticket expires", "工单到期"]], examples: [["This ticket will expire at 5 PM.", "这张工单下午5点到期。"], ["The contract expires next month.", "合同下个月到期。"]] },
      { w: "tickets", ipa: "/ˈtɪk.ɪts/", pos: "名词", cn: "工单", memory: "① ticket = 工单/票据；② 这里泛指所有类型的工单（event ticket + fault ticket）。\nSLA 检查时不区分事件单/故障单，统一用 ticket。", phonics: "tick 读 /tɪk/，ets 读 /ɪts/，复数 s 轻声。", collocations: [["expire today", "今天到期"], ["urgent tickets", "紧急工单"], ["overdue tickets", "超期工单"]], examples: [["How many tickets expire today?", "今天有多少工单到期？"], ["These tickets need immediate action.", "这些工单需要立即处理。"]] },
    ],
    phrases: [
      { p: "will expire today", ipa: "/wɪl ɪkˈspaɪər təˈdeɪ/", cn: "今天将到期", why: "will + expire = 将来时，强调今天之内会到期的紧迫感。交接时用 will expire 而不是 expired（已过期）。" },
    ],
    grammar: [
      { q: "will expire 和 have expired 有什么区别？", a: "will expire = 即将到期（还没到，但快了）\nhave expired = 已经过期（已经超了）\n✅ There are tickets that will expire today.（今天将到期 → 还有时间处理）\n✅ There are tickets that have expired.（已经过期 → 需要补救）\n交接时先报将到期的，再报已超期的。" },
    ],
    pattern: "There are + 数量 + tickets that will expire + 时间",
    patternExamples: [
      { en: "There are two tickets that will expire tomorrow.", cn: "有2张工单明天到期。", words: [{ w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "There are six tickets that will expire this week.", cn: "有6张工单本周到期。", words: [{ w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "There are no tickets that will expire today.", cn: "今天没有工单到期。", words: [{ w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
    ],
    thinking: "SLA 检查和故障单检查是前后衔接的。\n故障单关注'有没有解决'，SLA 检查关注'有没有超时'。\n交接顺序：故障单 → SLA到期 → 施工计划 → PTW/MOP/SOP/EOP → 随工监督。\nSLA 三板斧：① 今天到期 ② 已超期 ③ 有风险的。",
    pronunciation: "four 的 or 读 /ɔːr/，不是 /ɑː/。\nexpire 重音在第二音节：/ɪkˈspaɪər/。\n节奏：There are FOUR TICK-ets ｜ that will ex-PIRE ｜ to-DAY.",
    quiz: [
      { q: "有3张工单明天到期，怎么说？", a: "There are three tickets that will expire tomorrow." },
      { q: "will expire 和 have expired 在交接时怎么区分？", a: "will expire = 即将到期，还有时间处理；have expired = 已经超期，需要补救。交接时先报将到期的，再报已超期的。" },
    ],
  },
  {
    id: 152,
    en: "Two tickets will expire within the next two hours.",
    cn: "有2张工单将在两小时内到期。",
    ipa: "/tuː ˈtɪk.ɪts wɪl ɪkˈspaɪər wɪˈðɪn ðə nɛkst tuː aʊərz/",
    tags: ["第152句", "SLA紧急", "★★★★★"],
    when: "说完今天到期总数后，进一步说明最紧急的——两小时内就要到期的工单，需要立即行动。",
    words: [
      { w: "within", ipa: "/wɪˈðɪn/", pos: "介词", cn: "在…之内", memory: "① with + in = 在…范围之内；② 强调时间界限内。\nwithin 2 hours = 2小时之内（紧迫感强于 in 2 hours）。", phonics: "with 读 /wɪð/，in 读 /ɪn/，重音在第二音节。", collocations: [["within two hours", "两小时内"], ["within the deadline", "在截止日期内"], ["within SLA", "在SLA范围内"]], examples: [["Please reply within 24 hours.", "请在24小时内回复。"], ["The ticket will expire within one hour.", "工单将在一小时内到期。"]] },
    ],
    phrases: [
      { p: "within the next two hours", ipa: "/wɪˈðɪn ðə nɛkst tuː aʊərz/", cn: "在接下来的两小时内", why: "within + the next + 时间 = 在未来某段时间内。next two hours 强调从'现在'开始算的两小时，不是任意两小时。" },
    ],
    grammar: [
      { q: "within 和 in 表示时间有什么区别？", a: "within = 在…之内（强调不超过界限）\nin = 在…之后（强调经过一段时间）\n✅ within two hours = 两小时内的某个时刻（可能30分钟就到了）\n✅ in two hours = 两小时之后（精确两小时后）\n交接用 within，因为工单可能在两小时内任何时刻到期。" },
    ],
    pattern: "数量 + tickets + will expire + within + 时间",
    patternExamples: [
      { en: "One ticket will expire within the next hour.", cn: "有1张工单将在一小时内到期。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }, { w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }] },
      { en: "Three tickets will expire within 30 minutes.", cn: "有3张工单将在30分钟内到期。", words: [{ w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }, { w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }] },
      { en: "No tickets will expire within the next shift.", cn: "下一班没有工单到期。", words: [{ w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }, { w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }, { w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }] },
    ],
    thinking: "SLA 汇报的紧迫度递进：\n① 今天到期（宏观）→ ② 两小时内到期（紧急）→ ③ 已超期（需要补救）。\n交接时按紧迫度排序，最紧急的先报。",
    pronunciation: "within 重音在第二音节：/wɪˈðɪn/，th 咬舌尖。\nhours 的 h 轻声，our 读 /aʊər/。\n节奏：TWO TICK-ets ｜ will ex-PIRE ｜ with-IN ｜ the NEXT TWO HOURS.",
    quiz: [
      { q: "有1张工单将在30分钟内到期，怎么说？", a: "One ticket will expire within 30 minutes." },
      { q: "交接时为什么用 within 而不用 in？", a: "within 强调'不超过某个界限'，工单可能在两小时内任何时刻到期；in 表示'两小时后'，不够精确。" },
    ],
  },
  {
    id: 153,
    en: "Please prioritize these tickets.",
    cn: "请优先处理这些工单。",
    ipa: "/pliːz praɪˈɒr.ɪ.taɪz ðiːz ˈtɪk.ɪts/",
    tags: ["第153句", "SLA行动", "★★★★★"],
    when: "报完到期工单后，立即给出行动指令——优先处理这些即将到期的工单。",
    words: [
      { w: "prioritize", ipa: "/praɪˈɒr.ɪ.taɪz/", pos: "动词", cn: "优先处理；排列优先级", memory: "① prior = 优先的/在先的；② prioritize = 按优先级排序/优先处理。\n数据中心语境：prioritize tickets = 把即将到期的工单排到最前面处理。", phonics: "pri 读 /praɪ/，or 读 /ɒr/，i 读 /ɪ/，tize 读 /taɪz/，重音在第二音节。", collocations: [["prioritize tickets", "优先处理工单"], ["prioritize tasks", "优先安排任务"], ["prioritize by urgency", "按紧急程度排序"]], examples: [["Please prioritize the critical tickets.", "请优先处理严重工单。"], ["We need to prioritize today's expiring tickets.", "我们需要优先处理今天到期的工单。"]] },
    ],
    phrases: [
      { p: "prioritize these tickets", ipa: "/praɪˈɒr.ɪ.taɪz ðiːz ˈtɪk.ɪts/", cn: "优先处理这些工单", why: "prioritize 直接加宾语，不需要 to 或 for。these 指代刚才提到的即将到期的工单。" },
    ],
    grammar: [
      { q: "prioritize 和 handle first 有什么区别？", a: "prioritize = 排列优先级（不一定马上去做，但排在前面）\nhandle first = 首先处理（立即去做）\n✅ Please prioritize these tickets.（把这些工单排在最前面处理）\n✅ Please handle these tickets first.（请立即处理这些工单）\n交接时用 prioritize 更专业，表示'排优先级'这个动作。" },
    ],
    pattern: "Please prioritize + 对象",
    patternExamples: [
      { en: "Please prioritize the expiring tickets.", cn: "请优先处理即将到期的工单。", words: [{ w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "Please prioritize the critical alarms.", cn: "请优先处理严重告警。", words: [{ w: "critical", ipa: "/ˈkrɪtɪkəl/", cn: "严重", phonics: "crit 读 /krɪt/，ical 读 /ɪkəl/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Please prioritize customer-facing issues.", cn: "请优先处理影响客户的问题。", words: [{ w: "issues", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
    ],
    thinking: "交接中的行动指令三连：\n① 报问题 → There are X tickets that will expire.\n② 给指令 → Please prioritize these tickets.\n③ 说原因 → Because they will breach the SLA.\n三步走：报 → 指 → 释。",
    pronunciation: "prioritize 四个音节：pri-OR-i-tize，重音在第二音节。\nthese 的 th 咬舌尖：/ðiːz/。\n节奏：Please PRI-or-i-TIZE ｜ these TICK-ets.",
    quiz: [
      { q: "请优先处理今天到期的工单，怎么说？", a: "Please prioritize today's expiring tickets." },
      { q: "prioritize 和 handle first 哪个更专业？", a: "prioritize 更专业。它表示'排列优先级'，是管理术语；handle first 是口语化的'先做'。交接时用 prioritize。" },
    ],
  },
  {
    id: 154,
    en: "One ticket has already exceeded the SLA target.",
    cn: "有1张工单已经超过SLA目标时间。",
    ipa: "/wʌn ˈtɪk.ɪt hæz ˈɔːl.rɛd.i ɪkˈsiː.dɪd ðə ˌɛs.ɛlˈeɪ ˈtɑːr.ɡɪt/",
    tags: ["第154句", "SLA超期", "★★★★★"],
    when: "报完即将到期的工单后，接着汇报已经超期的——这是最严重的情况，需要特别关注。",
    words: [
      { w: "exceeded", ipa: "/ɪkˈsiː.dɪd/", pos: "动词(过去分词)", cn: "超过；超出", memory: "① ex- = 超出，ceed = 走 → 走出来 = 超出界限；② exceed the target = 超过目标。\nexceed 比 go over 更正式，SLA 语境常用。", phonics: "ex 读 /ɪk/，ceed 读 /siːd/，重音在第二音节。", collocations: [["exceeded the target", "超过目标"], ["exceeded the deadline", "超过截止日期"], ["exceeded the SLA", "违反SLA"]], examples: [["This ticket has exceeded the SLA target.", "这张工单已超过SLA目标。"], ["The response time exceeded 4 hours.", "响应时间超过了4小时。"]] },
      { w: "SLA target", ipa: "/ˌɛs.ɛlˈeɪ ˈtɑːr.ɡɪt/", pos: "名词", cn: "SLA目标时间", memory: "① SLA = Service Level Agreement（服务等级协议）；② target = 目标/指标。\nSLA target = 协议规定的目标完成时间。不同类型工单有不同 SLA target。\n例：Critical = 4小时，Warning = 24小时。", phonics: "SLA 逐字母读 S-L-A /ˌɛs.ɛlˈeɪ/，target 读 /ˈtɑːr.ɡɪt/。", collocations: [["SLA target", "SLA目标"], ["SLA deadline", "SLA截止时间"], ["meet the SLA", "达到SLA"]], examples: [["The SLA target for critical tickets is 4 hours.", "严重工单的SLA目标是4小时。"], ["We missed the SLA target.", "我们没有达到SLA目标。"]] },
    ],
    phrases: [
      { p: "has already exceeded", ipa: "/hæz ˈɔːl.rɛd.i ɪkˈsiː.dɪd/", cn: "已经超过", why: "has + already + 过去分词 = 现在完成时，强调'已经发生了'。already 加强语气，表示超期是不可逆的事实。" },
    ],
    grammar: [
      { q: "exceeded the SLA target 和 breached the SLA 有什么区别？", a: "两者含义接近但有细微差别：\nexceeded the SLA target = 超过了SLA目标时间（偏中性描述）\nbreached the SLA = 违反了SLA协议（偏严重，有后果）\n✅ One ticket has exceeded the SLA target.（超期了）\n✅ One ticket has breached the SLA.（违反了，可能需要报告管理层）\n交接时先用 exceeded 报事实，再说 breached 报后果。" },
    ],
    pattern: "数量 + ticket + has/have + already exceeded + the SLA target",
    patternExamples: [
      { en: "Two tickets have already exceeded the SLA target.", cn: "有2张工单已超过SLA目标。", words: [{ w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "No tickets have exceeded the SLA target.", cn: "没有工单超过SLA目标。", words: [{ w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "One fault ticket has exceeded the SLA target.", cn: "有1张故障单已超过SLA目标。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
    ],
    thinking: "SLA 汇报三段式：\n① 即将到期 → tickets that will expire today\n② 紧急到期 → tickets that will expire within hours\n③ 已经超期 → tickets that have exceeded the SLA target\n从'还可以救'到'已经晚了'，紧迫度递增。",
    pronunciation: "SLA 逐字母：S-L-A /ˌɛs.ɛlˈeɪ/，不要连读成 /slæ/。\nexceeded 重音在第二音节：/ɪkˈsiː.dɪd/。\n节奏：ONE TICK-et ｜ has AL-read-y ｜ ex-CEED-ed ｜ the S-L-A TAR-get.",
    quiz: [
      { q: "有2张工单已经超过SLA目标时间，怎么说？", a: "Two tickets have already exceeded the SLA target." },
      { q: "exceeded the SLA target 和 breached the SLA 哪个更严重？", a: "breached the SLA 更严重。exceeded = 超过（描述事实），breached = 违反（有后果，可能要报告管理层）。交接时先用 exceeded，严重时再升级到 breached。" },
    ],
  },
  {
    id: 155,
    en: "This ticket is at risk of breaching the SLA.",
    cn: "这张工单有违反SLA的风险。",
    ipa: "/ðɪs ˈtɪk.ɪt ɪz æt rɪsk əv briː.tʃɪŋ ðə ˌɛs.ɛlˈeɪ/",
    tags: ["第155句", "SLA风险", "★★★★★"],
    when: "说完已超期的工单后，再指出有风险的——还没超期但很可能会超，需要提前干预。",
    words: [
      { w: "at risk of", ipa: "/æt rɪsk əv/", pos: "介词短语", cn: "有…的风险", memory: "① at risk = 处于危险中；② at risk of + 名词/动名词 = 有…的风险。\nat risk of breaching = 有违反的风险。", phonics: "at 读 /æt/，risk 读 /rɪsk/，of 读 /əv/。", collocations: [["at risk of breaching", "有违反的风险"], ["at risk of delay", "有延误的风险"], ["at risk of failure", "有失败的风险"]], examples: [["This ticket is at risk of breaching the SLA.", "这张工单有违反SLA的风险。"], ["The project is at risk of delay.", "项目有延误的风险。"]] },
      { w: "breaching", ipa: "/briː.tʃɪŋ/", pos: "动词(现在分词)", cn: "违反；突破", memory: "① breach = 违反/突破（动词/名词）；② breaching = 正在违反。\nbreach the SLA = 违反SLA协议（比 exceed 更严重，有法律/合同含义）。", phonics: "breach 读 /briːtʃ/，ing 读 /ɪŋ/。注意 ea 读长音 /iː/。", collocations: [["breach the SLA", "违反SLA"], ["breach the contract", "违反合同"], ["security breach", "安全漏洞"]], examples: [["We must avoid breaching the SLA.", "我们必须避免违反SLA。"], ["A security breach was reported.", "报告了一起安全漏洞。"]] },
    ],
    phrases: [
      { p: "at risk of breaching the SLA", ipa: "/æt rɪsk əv briː.tʃɪŋ ðə ˌɛs.ɛlˈeɪ/", cn: "有违反SLA的风险", why: "at risk of + 动名词 = 有做某事的风险。breaching the SLA 是可能发生的后果。这个表达用来预警，还没发生但要警惕。" },
    ],
    grammar: [
      { q: "at risk of 和 going to 都表示将来，有什么区别？", a: "at risk of = 有风险（不一定会发生，但有倾向）\ngoing to = 将要发生（比较确定）\n✅ This ticket is at risk of breaching the SLA.（有风险，还能救）\n✅ This ticket is going to breach the SLA.（几乎确定了）\n交接时用 at risk of，因为还有时间采取行动避免。" },
    ],
    pattern: "This ticket + is at risk of + 动名词",
    patternExamples: [
      { en: "This ticket is at risk of delay.", cn: "这张工单有延误的风险。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "These tickets are at risk of breaching the SLA.", cn: "这些工单有违反SLA的风险。", words: [{ w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "The project is at risk of missing the deadline.", cn: "项目有错过截止日期的风险。", words: [] },
    ],
    thinking: "SLA 完整汇报链：\n① 今天到期 → will expire today\n② 紧急到期 → will expire within hours\n③ 已超期 → has exceeded the SLA target\n④ 有风险 → is at risk of breaching the SLA\n四种状态覆盖所有工单的 SLA 情况。",
    pronunciation: "risk 的 sk 连读：/rɪsk/。\nbreaching 的 ea 读长音 /iː/：/briː.tʃɪŋ/。\n节奏：This TICK-et ｜ is at RISK ｜ of BREACH-ing ｜ the S-L-A.",
    quiz: [
      { q: "这张工单有延误的风险，怎么说？", a: "This ticket is at risk of delay." },
      { q: "交接时为什么说 at risk of 而不说 going to？", a: "at risk of 表示'有风险但还能救'，给人行动空间；going to 表示'几乎确定会发生'，太悲观。交接时用 at risk of 更准确。" },
    ],
  },
  {
    id: 156,
    en: "Please escalate this issue immediately.",
    cn: "请立即升级处理这个问题。",
    ipa: "/pliːz ˈɛs.kə.leɪt ðɪs ˈɪʃ.uː ɪˈmiː.di.ət.li/",
    tags: ["第156句", "SLA升级", "★★★★★"],
    when: "发现有SLA风险的工单后，立即发出升级指令——把问题推给更高层级的人处理。",
    words: [
      { w: "escalate", ipa: "/ˈɛs.kə.leɪt/", pos: "动词", cn: "升级；上报", memory: "① escalator = 自动扶梯 → escalate = 往上走/升级；② 运维语境 = 把问题推给更高层级处理。\nescalate from L1 to L2 = 从L1升级到L2。", phonics: "es 读 /ɛs/，ca 读 /kə/，late 读 /leɪt/，重音在第一音节。", collocations: [["escalate the issue", "升级问题"], ["escalate to L2", "升级到L2"], ["escalate immediately", "立即升级"]], examples: [["Please escalate this to the manager.", "请把这个升级给经理。"], ["We need to escalate this immediately.", "我们需要立即升级处理。"]] },
      { w: "immediately", ipa: "/ɪˈmiː.di.ət.li/", pos: "副词", cn: "立即；马上", memory: "① im- = 不，mediate = 中间 → 没有中间等待 = 立即；② 比 right now 更正式。\n交接时用 immediately 表示紧迫性。", phonics: "im 读 /ɪm/，me 读 /miː/，di 读 /di/，ate 读 /ət/，ly 读 /li/，重音在第二音节。", collocations: [["immediately", "立即"], ["take action immediately", "立即行动"], ["respond immediately", "立即回复"]], examples: [["Please handle this immediately.", "请立即处理这个。"], ["The alarm requires immediate attention.", "告警需要立即关注。"]] },
    ],
    phrases: [
      { p: "escalate this issue", ipa: "/ˈɛs.kə.leɪt ðɪs ˈɪʃ.uː/", cn: "升级处理这个问题", why: "escalate + 宾语 = 升级某事。this issue 指代当前讨论的有SLA风险的工单/问题。" },
    ],
    grammar: [
      { q: "escalate 和 report 有什么区别？", a: "escalate = 升级（推给更高层级的人去处理，要求对方行动）\nreport = 报告（告知某人情况，不一定要求行动）\n✅ Please escalate this to L2.（升级给L2处理 → L2要接管）\n✅ Please report this to the manager.（报告给经理 → 经理知道即可）\nSLA 风险用 escalate，因为需要更高级别的人立即介入处理。" },
    ],
    pattern: "Please escalate + 对象 + immediately",
    patternExamples: [
      { en: "Please escalate this ticket immediately.", cn: "请立即升级处理这张工单。", words: [{ w: "escalate", ipa: "/ˈɛskəleɪt/", cn: "升级", phonics: "es 读 /ɛs/，calate 读 /kəleɪt/" }, { w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Please escalate this to the vendor.", cn: "请把这个升级给供应商。", words: [{ w: "escalate", ipa: "/ˈɛskəleɪt/", cn: "升级", phonics: "es 读 /ɛs/，calate 读 /kəleɪt/" }, { w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }] },
      { en: "Please escalate the critical issue immediately.", cn: "请立即升级处理这个严重问题。", words: [{ w: "escalate", ipa: "/ˈɛskəleɪt/", cn: "升级", phonics: "es 读 /ɛs/，calate 读 /kəleɪt/" }, { w: "critical", ipa: "/ˈkrɪtɪkəl/", cn: "严重", phonics: "crit 读 /krɪt/，ical 读 /ɪkəl/" }, { w: "issue", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
    ],
    thinking: "升级指令和前面的风险评估紧密相连：\n① This ticket is at risk of breaching the SLA.（有风险）\n② Please escalate this issue immediately.（所以立即升级）\n因果链条：风险 → 行动 → 升级。\n交接时不能只报风险不给方案。",
    pronunciation: "escalate 重音在第一音节：/ˈɛs.kə.leɪt/，不是 /ɪˈskæleɪt/。\nimmediately 五个音节：im-ME-di-ate-ly，重音在第二音节。\n节奏：Please ES-ca-late ｜ this IS-sue ｜ im-ME-di-ate-ly.",
    quiz: [
      { q: "请立即把这个问题升级给供应商，怎么说？", a: "Please escalate this issue to the vendor immediately." },
      { q: "escalate 和 report 在交接中什么时候用？", a: "escalate = 需要更高级别介入处理（有风险/已超期）；report = 只是告知情况（信息同步）。SLA 问题用 escalate，日常信息用 report。" },
    ],
  },
  {
    id: 157,
    en: "The customer has already been informed.",
    cn: "客户已经收到通知。",
    ipa: "/ðə ˈkʌs.tə.mər hæz ˈɔːl.rɛd.i bɪn ɪnˈfɔːrmd/",
    tags: ["第157句", "SLA通知", "★★★★★"],
    when: "升级处理后，需要说明客户是否已经知情——SLA 超期通常需要通知客户。",
    words: [
      { w: "informed", ipa: "/ɪnˈfɔːrmd/", pos: "动词(过去分词)", cn: "被通知；被告知", memory: "① inform = 通知/告知；② informed = 被通知的。\nhas been informed = 已经被通知了（被动语态完成时）。\ninform 比 tell 更正式，商务/运维语境常用。", phonics: "in 读 /ɪn/，form 读 /fɔːrm/，d 轻声。重音在第二音节。", collocations: [["be informed", "被通知"], ["keep informed", "保持通知"], ["well informed", "充分了解"]], examples: [["The customer has been informed.", "客户已经收到通知。"], ["Please keep me informed.", "请随时通知我。"]] },
    ],
    phrases: [
      { p: "has already been informed", ipa: "/hæz ˈɔːl.rɛd.i bɪn ɪnˈfɔːrmd/", cn: "已经被通知", why: "has been + 过去分词 = 被动语态完成时。already 强调'已经做过了'，让接班人放心。" },
    ],
    grammar: [
      { q: "has been informed 和 was informed 有什么区别？", a: "has been informed = 已经被通知了（现在完成时被动，强调现在的状态：客户现在知道了）\nwas informed = 当时被通知了（过去时被动，强调过去某个时刻的动作）\n✅ The customer has already been informed.（客户现在知道了 → 不用再通知）\n✅ The customer was informed yesterday.（昨天通知了 → 可能还需要更新）\n交接用 has been informed，强调'当前状态是已通知'。" },
    ],
    pattern: "The + 对象 + has/have already been informed",
    patternExamples: [
      { en: "The management has already been informed.", cn: "管理层已经收到通知。", words: [] },
      { en: "The vendor has already been informed.", cn: "供应商已经收到通知。", words: [{ w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }] },
      { en: "All stakeholders have been informed.", cn: "所有相关方都已经收到通知。", words: [] },
    ],
    thinking: "SLA 超期的通知链：\n① 通知客户 → The customer has been informed.\n② 通知管理层 → Management has been informed.\n③ 通知供应商 → The vendor has been informed.\n交接时需要逐一确认每个相关方是否已经通知到位。",
    pronunciation: "customer 的 cus 读 /kʌs/，to 读 /tə/，mer 读 /mər/。\ninformed 重音在第二音节：/ɪnˈfɔːrmd/。\n节奏：The CUS-to-mer ｜ has AL-read-y ｜ been in-FORMED.",
    quiz: [
      { q: "供应商已经收到通知，怎么说？", a: "The vendor has already been informed." },
      { q: "交接时为什么说 has been informed 而不说 was informed？", a: "has been informed 强调'现在客户已经知道了'（当前状态）；was informed 只说'过去某个时刻通知过'（过去动作）。交接关心的是当前状态。" },
    ],
  },
  {
    id: 158,
    en: "Management has been informed as well.",
    cn: "管理层也已经收到通知。",
    ipa: "/ˈmæn.ɪdʒ.mənt hæz bɪn ɪnˈfɔːrmd æz wɛl/",
    tags: ["第158句", "SLA通知", "★★★★★"],
    when: "确认客户已通知后，接着确认管理层是否也已通知——SLA 超期通常需要双重通知。",
    words: [
      { w: "management", ipa: "/ˈmæn.ɪdʒ.mənt/", pos: "名词", cn: "管理层", memory: "① manage = 管理；② management = 管理层/管理团队。\ninformed management = 通知管理层。注意 management 作'管理层'时通常不加 the。", phonics: "man 读 /mæn/，age 读 /ɪdʒ/，ment 读 /mənt/，重音在第一音节。", collocations: [["inform management", "通知管理层"], ["senior management", "高级管理层"], ["management approval", "管理层批准"]], examples: [["Management has been informed.", "管理层已收到通知。"], ["We need management approval.", "我们需要管理层批准。"]] },
      { w: "as well", ipa: "/æz wɛl/", pos: "副词短语", cn: "也；同样", memory: "① as well = 也/同样（放句末）；② 与 too 同义但更正式。\nManagement has been informed as well = 管理层也被通知了。", phonics: "as 读 /æz/，well 读 /wɛl/。", collocations: [["as well", "也"], ["as well as", "以及"], ["might as well", "不妨"]], examples: [["The vendor has been informed as well.", "供应商也已经收到通知。"], ["We need to check the backup as well.", "我们还需要检查备份。"]] },
    ],
    phrases: [
      { p: "as well", ipa: "/æz wɛl/", cn: "也", why: "放在句末表示'也'，比 too 更正式。Management has been informed as well = 管理层'也'已经收到通知（除了客户之外）。" },
    ],
    grammar: [
      { q: "as well / too / also 在交接中怎么用？", a: "三者都表示'也'，但位置不同：\nas well → 句末（正式）：Management has been informed as well.\ntoo → 句末（通用）：Management has been informed too.\nalso → 动词前/句中：Management has also been informed.\n交接时用 as well 最自然，放在句末清晰不突兀。" },
    ],
    pattern: "对象 + has been informed + as well",
    patternExamples: [
      { en: "The vendor has been informed as well.", cn: "供应商也已经收到通知。", words: [{ w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }] },
      { en: "The engineering team has been informed as well.", cn: "工程师团队也已经收到通知。", words: [{ w: "engineering", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }] },
      { en: "The site manager has been informed as well.", cn: "现场经理也已经收到通知。", words: [{ w: "site", ipa: "/saɪt/", cn: "场地", phonics: "site 读 /saɪt/" }] },
    ],
    thinking: "通知确认链（逐一确认）：\n① The customer has already been informed. → 客户 ✅\n② Management has been informed as well. → 管理层 ✅\n③ The vendor has been informed as well. → 供应商 ✅\n每个相关方确认到位，交接才算完整。",
    pronunciation: "management 三个音节：MAN-age-ment，重音在第一音节。\nas well 连读：/æz wɛl/。\n节奏：MAN-age-ment ｜ has been in-FORMED ｜ as WELL.",
    quiz: [
      { q: "工程师团队也已经收到通知，怎么说？", a: "The engineering team has been informed as well." },
      { q: "as well 和 also 在句中的位置有什么不同？", a: "as well 放句末：X has been informed as well.；also 放动词前：X has also been informed.。交接用 as well 更自然。" },
    ],
  },
  {
    id: 159,
    en: "Please continue following up until the ticket is closed.",
    cn: "请持续跟进，直到工单关闭。",
    ipa: "/pliːz kənˈtɪn.juː ˈfɒl.oʊ.ɪŋ ʌp ʌnˈtɪl ðə ˈtɪk.ɪt ɪz kloʊzd/",
    tags: ["第159句", "SLA跟进", "★★★★★"],
    when: "SLA检查和通知确认后，给出持续跟进的指令——确保下一班不会遗漏。",
    words: [
      { w: "continue following up", ipa: "/kənˈtɪn.juː ˈfɒl.oʊ.ɪŋ ʌp/", pos: "动词短语", cn: "持续跟进", memory: "① continue = 继续；② follow up = 跟进/追踪；③ continue following up = 持续跟进。\nfollow up 是运维高频词，表示持续关注某个问题的进展。", phonics: "continue 读 /kənˈtɪn.juː/，following 读 /ˈfɒl.oʊ.ɪŋ/，up 读 /ʌp/。", collocations: [["follow up on", "跟进"], ["continue following up", "持续跟进"], ["follow up with the vendor", "跟进供应商"]], examples: [["Please continue following up on this ticket.", "请继续跟进这张工单。"], ["I will follow up with the vendor tomorrow.", "我明天会跟进供应商。"]] },
      { w: "until", ipa: "/ʌnˈtɪl/", pos: "连词", cn: "直到", memory: "① until = 直到…为止；② 引导时间状语从句。\nuntil the ticket is closed = 直到工单关闭。", phonics: "un 读 /ʌn/，til 读 /tɪl/，重音在第二音节。", collocations: [["until closed", "直到关闭"], ["until resolved", "直到解决"], ["until further notice", "直到另行通知"]], examples: [["Please monitor until the alarm is cleared.", "请监控直到告警恢复。"], ["Stay on site until the vendor arrives.", "待在现场直到供应商到达。"]] },
    ],
    phrases: [
      { p: "following up until the ticket is closed", ipa: "/ˈfɒl.oʊ.ɪŋ ʌp ʌnˈtɪl ðə ˈtɪk.ɪt ɪz kloʊzd/", cn: "跟进直到工单关闭", why: "follow up + until = 跟进直到某个条件达成。the ticket is closed 是终止条件——工单关闭后就不用跟进了。" },
    ],
    grammar: [
      { q: "continue following up 和 keep following up 有什么区别？", a: "两者几乎同义，但语气略有不同：\ncontinue following up = 继续跟进（正式，指令性）\nkeep following up = 一直跟进（口语化，强调持续性）\n✅ Please continue following up.（请继续跟进 → 正式指令）\n✅ Keep following up until it's done.（一直跟进到完成 → 口语强调）\n交接用 continue 更正式。" },
    ],
    pattern: "Please continue following up + until + 条件",
    patternExamples: [
      { en: "Please continue following up until the issue is resolved.", cn: "请持续跟进，直到问题解决。", words: [{ w: "continue", ipa: "/kənˈtɪnjuː/", cn: "继续", phonics: "con 读 /kən/，tinue 读 /tɪnjuː/" }, { w: "following", ipa: "/ˈfɒloʊ/", cn: "跟踪", phonics: "fol 读 /fɒl/，low 读 /loʊ/" }, { w: "issue", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
      { en: "Please continue following up until the vendor responds.", cn: "请持续跟进，直到供应商回复。", words: [{ w: "continue", ipa: "/kənˈtɪnjuː/", cn: "继续", phonics: "con 读 /kən/，tinue 读 /tɪnjuː/" }, { w: "following", ipa: "/ˈfɒloʊ/", cn: "跟踪", phonics: "fol 读 /fɒl/，low 读 /loʊ/" }, { w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }] },
      { en: "Please continue following up until the alarm is cleared.", cn: "请持续跟进，直到告警恢复。", words: [{ w: "continue", ipa: "/kənˈtɪnjuː/", cn: "继续", phonics: "con 读 /kən/，tinue 读 /tɪnjuː/" }, { w: "following", ipa: "/ˈfɒloʊ/", cn: "跟踪", phonics: "fol 读 /fɒl/，low 读 /loʊ/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "SLA 交接的完整闭环：\n① 报到期情况 → tickets that will expire / have exceeded\n② 给行动指令 → Please prioritize / escalate\n③ 确认通知 → customer/management informed\n④ 要求跟进 → Please continue following up until closed\n四步走：报 → 指 → 确 → 跟。",
    pronunciation: "continue 重音在第二音节：/kənˈtɪn.juː/。\nfollowing up 连读：/ˈfɒl.oʊ.ɪŋ ʌp/。\nuntil 重音在第二音节：/ʌnˈtɪl/。\n节奏：Please con-TIN-ue ｜ FOL-low-ing UP ｜ un-TIL ｜ the TICK-et is CLOSED.",
    quiz: [
      { q: "请持续跟进，直到问题解决，怎么说？", a: "Please continue following up until the issue is resolved." },
      { q: "交接时 follow up 和 monitor 有什么区别？", a: "follow up = 跟进（主动追踪进展、催促对方）；monitor = 监控（被动观察状态变化）。SLA 工单用 follow up（需要主动推进），告警用 monitor（观察状态）。" },
    ],
  },
  {
    id: 160,
    en: "Now let's review today's maintenance schedule.",
    cn: "现在我们开始检查今天的维护计划。",
    ipa: "/naʊ lɛts rɪˈvjuː təˈdeɪz ˈmeɪn.tə.nəns ˈʃɛd.juːl/",
    tags: ["第160句", "转场句", "★★★★★"],
    when: "SLA检查完成后，转入下一个交接板块——今天的维护/施工计划。这是转场句，标志话题切换。",
    words: [
      { w: "maintenance", ipa: "/ˈmeɪn.tə.nəns/", pos: "名词", cn: "维护；保养", memory: "① maintain = 维护/保持；② maintenance = 维护/保养（名词）。\n数据中心 maintenance 包括：UPS维护、空调维护、发电机检查、消防检查等。", phonics: "main 读 /meɪn/，te 读 /tə/，nance 读 /nəns/，重音在第一音节。注意不是 /meɪnˈtɛnəns/。", collocations: [["maintenance schedule", "维护计划"], ["preventive maintenance", "预防性维护"], ["maintenance activity", "维护活动"]], examples: [["The UPS maintenance is scheduled for today.", "UPS维护安排在今天。"], ["We have five maintenance activities today.", "我们今天有5项维护活动。"]] },
      { w: "schedule", ipa: "/ˈʃɛd.juːl/", pos: "名词", cn: "计划；时间表", memory: "① schedule = 计划/时间表/日程；② maintenance schedule = 维护计划。\n英式读 /ˈʃɛd.juːl/，美式读 /ˈskɛd.juːl/。数据中心用英式读法居多。", phonics: "sche 读 /ʃɛ/，dule 读 /djuːl/，重音在第一音节。", collocations: [["maintenance schedule", "维护计划"], ["today's schedule", "今天的计划"], ["on schedule", "按计划"]], examples: [["Let me check the maintenance schedule.", "让我检查一下维护计划。"], ["Is everything on schedule?", "一切都按计划进行吗？"]] },
    ],
    phrases: [
      { p: "review the maintenance schedule", ipa: "/rɪˈvjuː ðə ˈmeɪn.tə.nəns ˈʃɛd.juːl/", cn: "检查维护计划", why: "review = 检查/审查，schedule = 计划。review the schedule = 逐项检查今天的计划安排。" },
    ],
    grammar: [
      { q: "为什么这里用 Now let's review？", a: "Now 表示转入下一个交接板块；let's review 表示邀请团队一起逐项检查。\n✅ Now let's review today's maintenance schedule.（现在我们来检查今天的维护计划。）\n这种表达比把 now 放在句末更自然，也与中文含义完全对应。" },
    ],
    pattern: "Now let's review + 今天的计划/状态",
    patternExamples: [
      { en: "We will review the SLA status now.", cn: "现在我们开始检查SLA状态。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "We will review the site supervision plan now.", cn: "现在我们开始检查随工监督安排。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "site", ipa: "/saɪt/", cn: "场地", phonics: "site 读 /saɪt/" }] },
      { en: "We will review the emergency contacts now.", cn: "现在我们开始检查紧急联系人。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "emergency", ipa: "/ɪˈmɜːrdʒənsi/", cn: "紧急", phonics: "e 读 /ɪ/，mergency 读 /mɜːrdʒənsi/" }, { w: "contacts", ipa: "/ˈkɒntækt/", cn: "联系", phonics: "con 读 /kɒn/，tact 读 /tækt/" }] },
    ],
    thinking: "交接板块转场常用 Now let's review...，先说明开始新板块，再说检查对象。\n这里加 today's，使英文与中文的“今天的维护计划”完全对应。",
    pronunciation: "today's 重音在第二音节：to-DAY'S。\nmaintenance 重音在第一音节：MAIN-te-nance。\nschedule 英式 /ˈʃed.juːl/，美式 /ˈskedʒ.uːl/。\n节奏：NOW let's re-VIEW ｜ to-DAY'S MAIN-te-nance SCHED-ule.",
    quiz: [
      { q: "现在我们开始检查SLA状态，怎么说？", a: "We will review the SLA status now." },
      { q: "转场句用 We will review 和 Now let's review 哪个好？", a: "都可以。We will review 更正式（宣告式），Now let's review 更亲切（邀请式）。交接中两者交替使用避免单调。" },
    ],
  },
  {
    id: 161,
    en: "There are five maintenance activities scheduled today.",
    cn: "今天安排了5项维护工作。",
    ipa: "/ðeər ɑːr faɪv ˈmeɪn.tə.nəns ækˈtɪv.ɪ.tiz ˈʃɛd.juːld təˈdeɪ/",
    tags: ["第161句", "施工计划", "★★★★★"],
    when: "转场到施工计划后，第一句话汇报今天安排的维护工作总数，让接班人了解工作量。",
    words: [
      { w: "activities", ipa: "/ækˈtɪv.ɪ.tiz/", pos: "名词", cn: "活动；工作项", memory: "① activity = 活动/工作项；② activities = 多项活动。\nmaintenance activities = 维护工作项。每一项维护工作算一个 activity。", phonics: "ac 读 /æk/，tiv 读 /tɪv/，i 读 /ɪ/，ties 读 /tiz/，重音在第二音节。", collocations: [["maintenance activities", "维护工作"], ["scheduled activities", "计划内活动"], ["ongoing activities", "进行中的活动"]], examples: [["There are five maintenance activities today.", "今天有5项维护工作。"], ["List all scheduled activities.", "列出所有计划内活动。"]] },
      { w: "scheduled", ipa: "/ˈʃɛd.juːld/", pos: "动词(过去分词)", cn: "被安排的；计划好的", memory: "① schedule = 安排/计划（动词）；② scheduled = 被安排好的。\nscheduled today = 今天被安排好的。\n注意 scheduled 发音：/ˈʃɛd.juːld/（英式）。", phonics: "sche 读 /ʃɛ/，duled 读 /djuːld/，重音在第一音节。", collocations: [["scheduled for today", "安排在今天"], ["scheduled maintenance", "计划内维护"], ["scheduled activity", "计划内活动"]], examples: [["The UPS maintenance is scheduled for 2 PM.", "UPS维护安排在下午2点。"], ["Is this activity scheduled today?", "这项活动安排在今天吗？"]] },
    ],
    phrases: [
      { p: "scheduled today", ipa: "/ˈʃɛd.juːld təˈdeɪ/", cn: "安排在今天", why: "scheduled = 被安排好的，today = 今天。scheduled today 作后置定语修饰 activities：today 安排的维护工作。" },
    ],
    grammar: [
      { q: "scheduled 和 planned 有什么区别？", a: "scheduled = 排进时间表的（有具体时间点/时间段）\nplanned = 计划好的（可能有时间也可能没有）\n✅ Five activities are scheduled today.（今天时间表上有5项）\n✅ Five activities are planned for this week.（本周计划了5项）\n交接用 scheduled，因为维护工作都有具体时间。" },
    ],
    pattern: "There are + 数量 + maintenance activities + scheduled + 时间",
    patternExamples: [
      { en: "There are three maintenance activities scheduled tomorrow.", cn: "明天安排了3项维护工作。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "There are no maintenance activities scheduled today.", cn: "今天没有安排维护工作。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "There are eight maintenance activities scheduled this week.", cn: "本周安排了8项维护工作。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
    ],
    thinking: "施工计划汇报和工单汇报同构：\n① 总数 → There are X maintenance activities scheduled today.\n② 逐项 → The first starts at..., The second starts at...\n③ 变更 → postponed / completed / cancelled\n先总后分，和工单/故障单汇报逻辑一致。",
    pronunciation: "activities 四个音节：ac-TIV-i-ties，重音在第二音节。\nscheduled 英式 /ˈʃɛd.juːld/，不要读成 /ˈskɛd.juːld/。\n节奏：There are FIVE ｜ MAIN-te-nance ac-TIV-i-ties ｜ SCHED-uled ｜ to-DAY.",
    quiz: [
      { q: "今天安排了3项维护工作，怎么说？", a: "There are three maintenance activities scheduled today." },
      { q: "scheduled 和 planned 在交接中用哪个？", a: "用 scheduled。scheduled = 排进时间表的（有具体时间），planned = 计划好的（可能没定时间）。维护工作都有具体时间安排，用 scheduled。" },
    ],
  },
  {
    id: 162,
    en: "The first maintenance starts at 9:00 a.m.",
    cn: "第一项维护上午9点开始。",
    ipa: "/ðə fɜːrst ˈmeɪn.tə.nəns stɑːrts æt naɪn eɪ.ˈɛm/",
    tags: ["第162句", "施工时间", "★★★★★"],
    when: "报完总数后，开始逐项汇报，从第一项开始——说清楚开始时间和工作内容。",
    words: [
      { w: "first", ipa: "/fɜːrst/", pos: "序数词", cn: "第一", memory: "① first = 第一（序数词）；② 用于逐项汇报时的排序。\nthe first maintenance = 第一项维护。\n后续：second（第二）、third（第三）、fourth（第四）。", phonics: "fir 读 /fɜːr/，st 读 /st/。", collocations: [["the first maintenance", "第一项维护"], ["first shift", "第一班"], ["first priority", "最优先"]], examples: [["The first maintenance starts at 9 AM.", "第一项维护上午9点开始。"], ["This is the first priority.", "这是最优先事项。"]] },
    ],
    phrases: [
      { p: "starts at 9:00 a.m.", ipa: "/stɑːrts æt naɪn eɪ.ˈɛm/", cn: "上午9点开始", why: "start at + 时间 = 在某个时间开始。a.m. = 上午（ante meridiem），p.m. = 下午（post meridiem）。" },
    ],
    grammar: [
      { q: "时间表达用 a.m./p.m. 还是 morning/afternoon？", a: "正式交接用 a.m./p.m.，精确且无歧义：\n✅ The maintenance starts at 9:00 a.m.（精确）\n✅ The maintenance starts in the morning.（模糊）\n口语中可以混用：\n✅ The maintenance starts at 9 this morning.\n交接记录中必须用 a.m./p.m.。" },
    ],
    pattern: "The + 序数词 + maintenance + starts at + 时间",
    patternExamples: [
      { en: "The second maintenance starts at 11:00 a.m.", cn: "第二项维护上午11点开始。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }, { w: "starts", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "The third maintenance starts at 2:00 p.m.", cn: "第三项维护下午2点开始。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }, { w: "starts", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "The last maintenance starts at 6:00 p.m.", cn: "最后一项维护下午6点开始。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }, { w: "starts", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
    ],
    thinking: "逐项汇报的排列模式：\n① The first maintenance starts at 9:00 a.m.\n② The second maintenance starts at 11:00 a.m.\n③ The third maintenance starts at 2:00 p.m.\n用序数词 + 时间，清晰有序。",
    pronunciation: "first 的 ir 读 /ɜːr/，不是 /ɪr/。\na.m. 逐字母读：/eɪ.ˈɛm/。\n节奏：The FIRST ｜ MAIN-te-nance ｜ STARTS AT ｜ NINE A.M.",
    quiz: [
      { q: "第三项维护下午2点开始，怎么说？", a: "The third maintenance starts at 2:00 p.m." },
      { q: "交接记录中时间用 a.m./p.m. 还是 morning/afternoon？", a: "用 a.m./p.m.，精确且无歧义。morning/afternoon 太模糊，不适合交接记录。口语中可以混用。" },
    ],
  },
  {
    id: 163,
    en: "The second maintenance starts at 11:00 a.m.",
    cn: "第二项维护上午11点开始。",
    ipa: "/ðə ˈsɛk.ənd ˈmeɪn.tə.nəns stɑːrts æt ɪˈlɛv.ən eɪ.ˈɛm/",
    tags: ["第163句", "施工时间", "★★★★"],
    when: "汇报完第一项维护后，继续报第二项的时间和内容。",
    words: [
      { w: "second", ipa: "/ˈsɛk.ənd/", pos: "序数词", cn: "第二", memory: "① second = 第二（序数词）；② 也可作名词表示'秒'。\nthe second maintenance = 第二项维护。", phonics: "sec 读 /sɛk/，ond 读 /ənd/，重音在第一音节。", collocations: [["the second maintenance", "第二项维护"], ["second shift", "第二班"], ["second priority", "第二优先"]], examples: [["The second maintenance starts at 11 AM.", "第二项维护上午11点开始。"], ["This is the second priority.", "这是第二优先事项。"]] },
    ],
    phrases: [
      { p: "the second maintenance", ipa: "/ðə ˈsɛk.ənd ˈmeɪn.tə.nəns/", cn: "第二项维护", why: "the + 序数词 + maintenance = 第N项维护。逐项汇报时按 first → second → third 排列。" },
    ],
    grammar: [
      { q: "11:00 a.m. 怎么读？", a: "两种读法都可以：\n✅ eleven a.m. /ɪˈlɛv.ən eɪ.ˈɛm/（常用）\n✅ eleven o'clock in the morning（更正式）\n交接中用 eleven a.m. 更简洁。注意 11:00 a.m. 是上午11点，不是晚上。" },
    ],
    pattern: "The second maintenance starts at + 时间",
    patternExamples: [
      { en: "The second maintenance starts at 10:00 a.m.", cn: "第二项维护上午10点开始。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }, { w: "starts", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "The second maintenance starts at 1:00 p.m.", cn: "第二项维护下午1点开始。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }, { w: "starts", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "The second maintenance starts at 3:30 p.m.", cn: "第二项维护下午3点半开始。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }, { w: "starts", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
    ],
    thinking: "逐项汇报时保持句式统一：\nThe first maintenance starts at...\nThe second maintenance starts at...\nThe UPS maintenance is scheduled for...\n句式可以微调，但序数词/设备名 + 时间的结构不变。",
    pronunciation: "second 重音在第一音节：/ˈsɛk.ənd/。\neleven 重音在第二音节：/ɪˈlɛv.ən/。\n节奏：The SEC-ond ｜ MAIN-te-nance ｜ STARTS AT ｜ e-LEV-en A.M.",
    quiz: [
      { q: "第二项维护下午1点开始，怎么说？", a: "The second maintenance starts at 1:00 p.m." },
      { q: "11:00 a.m. 怎么读最简洁？", a: "读 eleven a.m. /ɪˈlɛv.ən eɪ.ˈɛm/。交接中避免 eleven o'clock in the morning，太长。" },
    ],
  },
  {
    id: 164,
    en: "The UPS maintenance is scheduled for this afternoon.",
    cn: "UPS维护安排在今天下午。",
    ipa: "/ðə ˌjuː.piːˈɛs ˈmeɪn.tə.nəns ɪz ˈʃɛd.juːld fɔːr ðɪs ˌæf.tərˈnuːn/",
    tags: ["第164句", "施工设备", "★★★★★"],
    when: "从第三项开始可以换一种汇报方式——用设备名代替序数词，说明具体设备的维护时间。",
    words: [
      { w: "is scheduled for", ipa: "/ɪz ˈʃɛd.juːld fɔːr/", pos: "动词短语", cn: "被安排在", memory: "① is scheduled = 被安排的（被动语态）；② for + 时间 = 在某个时间段。\nis scheduled for this afternoon = 被安排在今天下午。\n注意和 starts at 的区别：starts at 是精确时间点，scheduled for 是时间段。", phonics: "scheduled 读 /ˈʃɛd.juːld/，for 读 /fɔːr/。", collocations: [["scheduled for today", "安排在今天"], ["scheduled for tomorrow", "安排在明天"], ["scheduled for next week", "安排在下周"]], examples: [["The inspection is scheduled for Friday.", "检查安排在周五。"], ["The UPS maintenance is scheduled for 2 PM.", "UPS维护安排在下午2点。"]] },
    ],
    phrases: [
      { p: "scheduled for this afternoon", ipa: "/ˈʃɛd.juːld fɔːr ðɪs ˌæf.tərˈnuːn/", cn: "安排在今天下午", why: "scheduled for + 时间段 = 安排在某个时间段。this afternoon 是下午的某个时间，不需要精确到几点。" },
    ],
    grammar: [
      { q: "starts at 和 is scheduled for 什么时候用哪个？", a: "starts at + 精确时间 = 在某个时刻开始（有具体几点）\nis scheduled for + 时间段 = 安排在某个时段（可能还没定具体时刻）\n✅ The first maintenance starts at 9:00 a.m.（精确到9点）\n✅ The UPS maintenance is scheduled for this afternoon.（下午，具体时间可能待定）\n交接中两种都常用，按已知信息的精确度选择。" },
    ],
    pattern: "The + 设备名 + maintenance + is scheduled for + 时间",
    patternExamples: [
      { en: "The generator maintenance is scheduled for tomorrow.", cn: "发电机维护安排在明天。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "The CRAC maintenance is scheduled for next Monday.", cn: "精密空调维护安排在下周一。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "The fire system maintenance is scheduled for this week.", cn: "消防系统维护安排在本周。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
    ],
    thinking: "汇报维护计划的两种句式交替使用：\n① 用序数词：The first/second maintenance starts at...\n② 用设备名：The UPS/CRAC maintenance is scheduled for...\n交替使用避免单调，也让听众更容易定位到具体设备。",
    pronunciation: "UPS 逐字母读：U-P-S /ˌjuː.piːˈɛs/。\nafternoon 重音在第三音节：/ˌæf.tərˈnuːn/。\n节奏：The U-P-S ｜ MAIN-te-nance ｜ is SCHED-uled ｜ for THIS AF-ter-NOON.",
    quiz: [
      { q: "发电机维护安排在明天，怎么说？", a: "The generator maintenance is scheduled for tomorrow." },
      { q: "starts at 和 is scheduled for 怎么选？", a: "有精确时间用 starts at（如 9:00 a.m.），只知道时段用 is scheduled for（如 this afternoon）。按已知信息的精确度选择。" },
    ],
  },
  {
    id: 165,
    en: "The CRAC maintenance will start after lunch.",
    cn: "精密空调维护将在午饭后开始。",
    ipa: "/ðə kræk ˈmeɪn.tə.nəns wɪl stɑːrt ˈæf.tər lʌntʃ/",
    tags: ["第165句", "施工设备", "★★★★★"],
    when: "继续汇报下一项维护——精密空调（CRAC），用相对时间描述（午饭后）。",
    words: [
      { w: "CRAC", ipa: "/kræk/", pos: "名词", cn: "精密空调（Computer Room Air Conditioning）", memory: "① CRAC = Computer Room Air Conditioning（机房精密空调）；② 读作单词 /kræk/。\nCRAC 是数据中心冷却系统的核心设备，维护频率高。\n有时也写 CRAH（Computer Room Air Handler）。", phonics: "读作一个词 /kræk/，不是逐字母 C-R-A-C。", collocations: [["CRAC unit", "精密空调机组"], ["CRAC maintenance", "精密空调维护"], ["CRAC alarm", "精密空调告警"]], examples: [["The CRAC maintenance is today.", "精密空调维护在今天。"], ["CRAC-03 has an active alarm.", "3号精密空调有活动告警。"]] },
      { w: "after lunch", ipa: "/ˈæf.tər lʌntʃ/", pos: "介词短语", cn: "午饭后", memory: "① after = 在…之后；② lunch = 午餐/午饭时间。\nafter lunch = 午饭后（大约12:30-13:30）。数据中心通常12:00-13:00午休。", phonics: "after 读 /ˈæf.tər/，lunch 读 /lʌntʃ/。", collocations: [["after lunch", "午饭后"], ["after the shift change", "换班后"], ["after the inspection", "检查后"]], examples: [["The maintenance will start after lunch.", "维护将在午饭后开始。"], ["We will review after the shift change.", "我们将在换班后检查。"]] },
    ],
    phrases: [
      { p: "will start after lunch", ipa: "/wɪl stɑːrt ˈæf.tər lʌntʃ/", cn: "将在午饭后开始", why: "will start + after + 事件 = 在某个事件之后开始。用相对时间（午饭后）比精确时间更口语化，但交接中双方都知道午休时间。" },
    ],
    grammar: [
      { q: "after lunch 和 at 1:00 p.m. 在交接中用哪个？", a: "两者都可以，取决于语境：\n✅ The CRAC maintenance will start after lunch.（口语化，双方都知道午休时间）\n✅ The CRAC maintenance will start at 1:00 p.m.（精确，适合记录）\n口头交接用 after lunch 更自然，书面记录用 at 1:00 p.m. 更准确。" },
    ],
    pattern: "The + 设备名 + maintenance + will start + after + 事件",
    patternExamples: [
      { en: "The generator maintenance will start after the UPS maintenance.", cn: "发电机维护将在UPS维护之后开始。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }, { w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "The inspection will start after the vendor arrives.", cn: "检查将在供应商到达后开始。", words: [{ w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }, { w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }] },
      { en: "The fire drill will start after the briefing.", cn: "消防演练将在简报后开始。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
    ],
    thinking: "维护时间表达的多种方式：\n① 精确时间：starts at 9:00 a.m.\n② 时段：is scheduled for this afternoon\n③ 相对时间：will start after lunch\n④ 条件时间：will start after the vendor arrives\n四种方式交替使用，让汇报更生动。",
    pronunciation: "CRAC 读作一个词 /kræk/，不是逐字母。\nafter 的 t 和 lunch 的 l 之间有轻微停顿。\n节奏：The CRAC ｜ MAIN-te-nance ｜ will START ｜ AF-ter LUNCH.",
    quiz: [
      { q: "精密空调维护将在UPS维护之后开始，怎么说？", a: "The CRAC maintenance will start after the UPS maintenance." },
      { q: "CRAC 怎么读？", a: "读作一个词 /kræk/（像 crack），不是逐字母 C-R-A-C。CRAC = Computer Room Air Conditioning（机房精密空调）。" },
    ],
  },
];

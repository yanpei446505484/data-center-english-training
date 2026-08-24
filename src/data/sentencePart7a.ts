// EXPORTS: MOCK_SENTENCES_PART7A

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART7A: ISentence[] = [
  {
    id: 181,
    en: "We have three vendors working on site today.",
    cn: "今天有三家供应商在现场施工。",
    ipa: "/wi hæv θri ˈvɛn.dərz ˈwɜːr.kɪŋ ɑːn saɪt təˈdeɪ/",
    tags: ["第181句", "供应商管理", "★★★★★"],
    when: "PTW文档检查完成后，转入供应商管理环节。先汇报今天有多少家供应商在现场，让接班人了解现场人员密度。",
    words: [
      { w: "vendor", ipa: "/ˈvɛn.dər/", pos: "名词", cn: "供应商；厂商", memory: "① vend = 出售（拉丁语 vendere）；② vendor = 卖东西的人 → 供应商。\n数据中心语境中，vendor 指外部来施工/维护的专业公司，区别于内部员工。", phonics: "ven 读 /vɛn/，dor 读 /dər/，重音在第一音节。", collocations: [["on-site vendor", "现场供应商"], ["vendor management", "供应商管理"], ["approved vendor", "合格供应商"]], examples: [["We have two vendors on site.", "有两家供应商在现场。"], ["This vendor is not on the approved list.", "这家供应商不在合格名单上。"]] },
      { w: "on site", ipa: "/ɑːn saɪt/", pos: "介词短语", cn: "在现场", memory: "① on = 在…上；② site = 现场/场地。\non site 强调物理在场，与 remote（远程）相对。数据中心交接中特指供应商/承包商物理到达机房。", phonics: "on 读 /ɑːn/，site 读 /saɪt/。注意 site 和 sight（视力）同音。", collocations: [["working on site", "在现场施工"], ["on-site inspection", "现场检查"], ["on-site maintenance", "现场维护"]], examples: [["The contractor is on site now.", "承包商现在在现场。"], ["On-site work requires a PTW.", "现场工作需要作业许可证。"]] },
    ],
    phrases: [
      { p: "vendors working on site", ipa: "/ˈvɛn.dərz ˈwɜːr.kɪŋ ɑːn saɪt/", cn: "在现场施工的供应商", why: "working 作后置定语修饰 vendors，表示正在进行的动作。交接时先报总数，再逐家介绍。" },
    ],
    grammar: [
      { q: "为什么用 working 而不是 work？", a: "have + 名词 + 现在分词（working）= 让/有…正在做…\n✅ We have three vendors working on site.（三家供应商正在现场施工 → 强调进行中）\n❌ We have three vendors work on site.（语法不对）\n✅ Three vendors are working on site.（同样正确，但没有 have 的'我们拥有/管理'感）" },
    ],
    pattern: "We have + 数量 + vendors + working on site + 时间",
    patternExamples: [
      { en: "We have two vendors working on site today.", cn: "今天有两家供应商在现场施工。", words: [{ w: "vendors", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }, { w: "site", ipa: "/saɪt/", cn: "场地", phonics: "site 读 /saɪt/" }] },
      { en: "We have no vendors working on site this weekend.", cn: "本周末没有供应商在现场施工。", words: [{ w: "vendors", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }, { w: "site", ipa: "/saɪt/", cn: "场地", phonics: "site 读 /saɪt/" }] },
      { en: "We have five vendors working on site during the shutdown.", cn: "停机期间有五家供应商在现场施工。", words: [{ w: "vendors", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }, { w: "site", ipa: "/saɪt/", cn: "场地", phonics: "site 读 /saɪt/" }] },
    ],
    thinking: "供应商管理是交接中独立且重要的环节。\n交接顺序：① 报总数（本句）→ ② 逐家报到场时间（182-184）→ ③ 白名单核对（185-190）→ ④ 门禁与入场（191-195）→ ⑤ 随工监督（196-200）→ ⑥ 安全检查（201-209）。\n供应商管理 = 谁来了 + 能不能进 + 谁来盯。",
    pronunciation: "vendors 的 d 几乎不发音：/ˈvɛn.ərz/。\nworking 的 or 读 /ɜːr/，不是 /ɔːr/。\n节奏：We have THREE VEN-dors ｜ WORK-ing ｜ on SITE to-DAY.",
    quiz: [
      { q: "今天有5家供应商在现场，怎么说？", a: "We have five vendors working on site today." },
      { q: "have vendors working 和 vendors are working 有什么区别？", a: "have vendors working = 有供应商在施工（强调'我们管理/安排'的主动感）；vendors are working = 供应商在施工（客观描述）。交接时用 have，因为交班方是在介绍自己安排的施工。" },
    ],
  },
  {
    id: 182,
    en: "One electrical contractor will arrive at 9:00 a.m.",
    cn: "一家电气承包商将于上午9点到场。",
    ipa: "/wʌn ɪˈlɛk.trɪ.kəl kənˈtræk.tər wɪl əˈraɪv æt naɪn eɪ.ˈɛm/",
    tags: ["第182句", "供应商到场", "★★★★"],
    when: "报完供应商总数后，按时间顺序逐一介绍每家承包商的到场时间和专业领域。",
    words: [
      { w: "electrical", ipa: "/ɪˈlɛk.trɪ.kəl/", pos: "形容词", cn: "电气的", memory: "① electric = 电的；② electrical = 与电有关的（更广义）。\nelectrical contractor = 电气承包商，负责 UPS、配电柜、变压器等电气系统维护。", phonics: "e 读 /ɪ/，lec 读 /lɛk/，tri 读 /trɪ/，cal 读 /kəl/，重音在第二音节。", collocations: [["electrical contractor", "电气承包商"], ["electrical maintenance", "电气维护"], ["electrical system", "电气系统"]], examples: [["The electrical contractor will check the UPS.", "电气承包商会检查UPS。"], ["Electrical work requires special certification.", "电气工作需要特殊资质。"]] },
      { w: "contractor", ipa: "/kənˈtræk.tər/", pos: "名词", cn: "承包商；施工方", memory: "① contract = 合同；② contractor = 签合同来做工的人 → 承包商。\ncontractor 比 vendor 更强调'按合同执行具体工程任务'，在施工语境中两者可互换。", phonics: "con 读 /kən/，trac 读 /træk/，tor 读 /tər/，重音在第二音节。注意 stress 在第二个音节。", collocations: [["approved contractor", "合格承包商"], ["sub-contractor", "分包商"], ["main contractor", "总承包商"]], examples: [["The contractor needs a PTW.", "承包商需要作业许可证。"], ["Which contractor is doing the UPS maintenance?", "哪家承包商做UPS维护？"]] },
      { w: "arrive", ipa: "/əˈraɪv/", pos: "动词", cn: "到达；到场", memory: "① ar- = ad-（朝向）；② rive = 岸边（拉丁语 ripa）→ 到达岸边 → 到达。\narrive at + 时间/地点。", phonics: "a 读 /ə/，rive 读 /raɪv/，重音在第二音节。", collocations: [["arrive at 9:00", "9点到达"], ["arrive on site", "到达现场"], ["arrive late", "迟到"]], examples: [["The vendor will arrive at 10 a.m.", "供应商上午10点到。"], ["Has the contractor arrived yet?", "承包商到了吗？"]] },
    ],
    phrases: [
      { p: "will arrive at", ipa: "/wɪl əˈraɪv æt/", cn: "将于…到达", why: "will arrive = 将来时到达。at 后接具体时间（9:00 a.m.）或地点。交接时预报尚未到场的承包商。" },
    ],
    grammar: [
      { q: "electrical 和 electric 有什么区别？", a: "electric = 电动的/发电的（直接通电的物体）\nelectrical = 与电有关的（更广义的领域）\n✅ electric motor = 电动机（直接通电运转）\n✅ electrical contractor = 电气承包商（从事电气领域的人）\n✅ electrical system = 电气系统（广义）\n简单记：描述人/行业用 electrical，描述具体电器用 electric。" },
    ],
    pattern: "专业领域 + contractor + will arrive at + 时间",
    patternExamples: [
      { en: "The mechanical contractor will arrive at 10:00 a.m.", cn: "暖通承包商上午10点到。", words: [{ w: "mechanical", ipa: "/mɪˈkænɪkəl/", cn: "机械", phonics: "me 读 /mɪ/，chanical 读 /kænɪkəl/" }, { w: "contractor", ipa: "/ˈkɒntræktər/", cn: "承包商", phonics: "con 读 /kɒn/，tractor 读 /træktər/" }] },
      { en: "The fire protection contractor will arrive at 2:00 p.m.", cn: "消防承包商下午2点到。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "protection", ipa: "/prəˈtɛkʃən/", cn: "保护", phonics: "pro 读 /prə/，tection 读 /tɛkʃən/" }, { w: "contractor", ipa: "/ˈkɒntræktər/", cn: "承包商", phonics: "con 读 /kɒn/，tractor 读 /træktər/" }] },
      { en: "The security contractor will arrive at 8:00 a.m.", cn: "安保承包商上午8点到。", words: [{ w: "security", ipa: "/sɪˈkjʊrɪti/", cn: "安防", phonics: "se 读 /sɪ/，curity 读 /kjʊrɪti/" }, { w: "contractor", ipa: "/ˈkɒntræktər/", cn: "承包商", phonics: "con 读 /kɒn/，tractor 读 /træktər/" }] },
    ],
    thinking: "逐家汇报供应商时，固定句式：专业领域 + contractor + will arrive at + 时间。\n专业领域词汇：electrical（电气）、mechanical（暖通/机械）、fire protection（消防）、security（安保）、CCTV（监控）。\n已到场的用 is already on site（句184），未到场的用 will arrive at。",
    pronunciation: "electrical 四个音节，重音在第二音节：/ɪˈlɛk.trɪ.kəl/。\ncontractor 重音也在第二音节：/kənˈtræk.tər/。\na.m. 读字母：/eɪ.ˈɛm/。\n节奏：One e-LEC-tri-cal con-TRAC-tor ｜ will ar-RIVE ｜ at NINE A-M.",
    quiz: [
      { q: "一家消防承包商下午3点到，怎么说？", a: "One fire protection contractor will arrive at 3:00 p.m." },
      { q: "contractor 和 vendor 在交接语境中有什么区别？", a: "交接语境中两者可互换。严格来说：vendor = 供应商（卖设备/服务的公司），contractor = 承包商（按合同执行具体施工的人/团队）。日常交接说 vendor 更常见，正式文档用 contractor。" },
    ],
  },
  {
    id: 183,
    en: "One mechanical contractor will arrive at 10:00 a.m.",
    cn: "一家暖通承包商将于上午10点到场。",
    ipa: "/wʌn məˈkæn.ɪ.kəl kənˈtræk.tər wɪl əˈraɪv æt tɛn eɪ.ˈɛm/",
    tags: ["第183句", "供应商到场", "★★★★"],
    when: "继续按时间顺序介绍下一家承包商的到场信息。",
    words: [
      { w: "mechanical", ipa: "/məˈkæn.ɪ.kəl/", pos: "形容词", cn: "暖通/机械的", memory: "① mechanic = 机械师；② mechanical = 机械的/暖通的。\n数据中心语境中，mechanical = HVAC（暖通空调）系统，包括 CRAC（精密空调）、冷水机组、风机等。", phonics: "me 读 /mə/，chan 读 /kæn/，i 读 /ɪ/，cal 读 /kəl/，重音在第二音节。", collocations: [["mechanical contractor", "暖通承包商"], ["mechanical system", "暖通系统"], ["mechanical maintenance", "暖通维护"]], examples: [["The mechanical contractor will service the CRAC units.", "暖通承包商会维护精密空调。"], ["Mechanical issues can affect cooling.", "机械问题可能影响制冷。"]] },
    ],
    phrases: [
      { p: "mechanical contractor", ipa: "/məˈkæn.ɪ.kəl kənˈtræk.tər/", cn: "暖通承包商", why: "数据中心两大核心系统：electrical（电气）和 mechanical（暖通）。mechanical 专指 HVAC 制冷/通风相关设备维护。" },
    ],
    grammar: [
      { q: "mechanical 和 HVAC 是什么关系？", a: "HVAC = Heating, Ventilation, and Air Conditioning（供暖、通风和空调）。\nmechanical 是更广义的术语，在数据中心语境中通常等同于 HVAC。\n交接时说 mechanical contractor，对方能理解是来做空调/冷水机/风机等暖通设备的维护。\n日常口语中也可以说 HVAC contractor。" },
    ],
    pattern: "One mechanical contractor + will arrive at + 时间",
    patternExamples: [
      { en: "The mechanical contractor will arrive at 11:00 a.m.", cn: "暖通承包商上午11点到。", words: [{ w: "mechanical", ipa: "/mɪˈkænɪkəl/", cn: "机械", phonics: "me 读 /mɪ/，chanical 读 /kænɪkəl/" }, { w: "contractor", ipa: "/ˈkɒntræktər/", cn: "承包商", phonics: "con 读 /kɒn/，tractor 读 /træktər/" }] },
      { en: "A mechanical contractor is scheduled for this afternoon.", cn: "暖通承包商安排在今天下午。", words: [{ w: "mechanical", ipa: "/mɪˈkænɪkəl/", cn: "机械", phonics: "me 读 /mɪ/，chanical 读 /kænɪkəl/" }, { w: "contractor", ipa: "/ˈkɒntræktər/", cn: "承包商", phonics: "con 读 /kɒn/，tractor 读 /træktər/" }] },
      { en: "The mechanical contractor will inspect the chiller.", cn: "暖通承包商会检查冷水机组。", words: [{ w: "mechanical", ipa: "/mɪˈkænɪkəl/", cn: "机械", phonics: "me 读 /mɪ/，chanical 读 /kænɪkəl/" }, { w: "contractor", ipa: "/ˈkɒntræktər/", cn: "承包商", phonics: "con 读 /kɒn/，tractor 读 /træktər/" }, { w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }] },
    ],
    thinking: "数据中心维护的两大承包商类型：\n① electrical contractor → UPS、配电柜、变压器、发电机\n② mechanical contractor → CRAC、冷水机组、风机、冷却塔\n交接时按专业领域 + 到场时间逐一汇报，让接班人清楚谁来做哪个系统。",
    pronunciation: "mechanical 重音在第二音节：/məˈkæn.ɪ.kəl/，注意 ch 读 /k/ 不是 /tʃ/。\n节奏：One me-CHAN-i-cal con-TRAC-tor ｜ will ar-RIVE ｜ at TEN A-M.",
    quiz: [
      { q: "暖通承包商上午11点到，怎么说？", a: "One mechanical contractor will arrive at 11:00 a.m." },
      { q: "数据中心机械系统主要包括哪些设备？", a: "mechanical 系统 = HVAC 暖通系统，主要包括：CRAC（精密空调）、chiller（冷水机组）、cooling tower（冷却塔）、fan（风机）、humidifier（加湿器）。这些设备的维护由 mechanical contractor 负责。" },
    ],
  },
  {
    id: 184,
    en: "One fire protection contractor is already on site.",
    cn: "一家消防承包商已经到达现场。",
    ipa: "/wʌn faɪər prəˈtɛk.ʃən kənˈtræk.tər ɪz ɔːlˈrɛ.di ɑːn saɪt/",
    tags: ["第184句", "供应商到场", "★★★★"],
    when: "介绍已到场的承包商。与 will arrive 不同，用 is already on site 表示已经在现场。",
    words: [
      { w: "fire protection", ipa: "/faɪər prəˈtɛk.ʃən/", pos: "名词", cn: "消防；消防系统", memory: "① fire = 火；② protection = 保护 → 消防保护。\n数据中心消防系统包括：烟感/温感探测器、气体灭火系统（FM-200/Novec）、消防栓、灭火器。", phonics: "fire 读 /faɪər/，protection 重音在第二音节 /prəˈtɛk.ʃən/。", collocations: [["fire protection contractor", "消防承包商"], ["fire protection system", "消防系统"], ["fire protection inspection", "消防检查"]], examples: [["The fire protection system was tested last week.", "消防系统上周测试过。"], ["Fire protection is critical in data centers.", "消防在数据中心至关重要。"]] },
      { w: "already", ipa: "/ɔːlˈrɛ.di/", pos: "副词", cn: "已经", memory: "① all + ready = 全都准备好了 → 已经。\nalready 强调比预期更早完成，与 yet（还没有）相对。", phonics: "al 读 /ɔːl/，rea 读 /rɛ/，dy 读 /di/。", collocations: [["already on site", "已在现场"], ["already completed", "已完成"], ["already approved", "已批准"]], examples: [["The contractor is already here.", "承包商已经到了。"], ["The PTW has already been signed.", "作业许可证已经签了。"]] },
    ],
    phrases: [
      { p: "is already on site", ipa: "/ɪz ɔːlˈrɛ.di ɑːn saɪt/", cn: "已经在现场", why: "is already = 已经在（强调比预期早或已到位）。与 will arrive 对比：will arrive = 还没到，is already on site = 已经在了。交接时需要区分。" },
    ],
    grammar: [
      { q: "will arrive 和 is already on site 什么时候分别用？", a: "取决于承包商当前状态：\n✅ will arrive at 9:00 = 还没到，预报到场时间（句182-183）\n✅ is already on site = 已经到了，正在现场（句184）\n交接时先报还没到的（will arrive），再报已经在了的（already on site），或者反过来都可以，但要明确区分状态。" },
    ],
    pattern: "专业领域 + contractor + is already on site",
    patternExamples: [
      { en: "The security contractor is already on site.", cn: "安保承包商已经到现场了。", words: [{ w: "security", ipa: "/sɪˈkjʊrɪti/", cn: "安防", phonics: "se 读 /sɪ/，curity 读 /kjʊrɪti/" }, { w: "contractor", ipa: "/ˈkɒntræktər/", cn: "承包商", phonics: "con 读 /kɒn/，tractor 读 /træktər/" }, { w: "site", ipa: "/saɪt/", cn: "场地", phonics: "site 读 /saɪt/" }] },
      { en: "The CCTV contractor is already here.", cn: "监控承包商已经到了。", words: [{ w: "cctv", ipa: "/ˌsiːˌsiːˈtiːˈviː/", cn: "监控", phonics: "C-C-T-V 逐字母读" }, { w: "contractor", ipa: "/ˈkɒntræktər/", cn: "承包商", phonics: "con 读 /kɒn/，tractor 读 /træktər/" }] },
      { en: "Two contractors are already on site.", cn: "两家承包商已经在现场了。", words: [{ w: "contractors", ipa: "/ˈkɒntræktər/", cn: "承包商", phonics: "con 读 /kɒn/，tractor 读 /træktər/" }, { w: "site", ipa: "/saɪt/", cn: "场地", phonics: "site 读 /saɪt/" }] },
    ],
    thinking: "汇报供应商到场状态的两种句式：\n① 未到场：X contractor will arrive at 时间（预报）\n② 已到场：X contractor is already on site（确认）\n交接时混合使用，让接班人完整了解每家供应商的状态。",
    pronunciation: "fire 的 ire 读 /aɪər/，注意和 far 区分。\nprotection 重音在第二音节：/prəˈtɛk.ʃən/。\nalready 重音在第二音节：/ɔːlˈrɛ.di/。\n节奏：One FIRE pro-TEC-tion con-TRAC-tor ｜ is al-REA-dy ｜ on SITE.",
    quiz: [
      { q: "一家电气承包商已经在现场了，怎么说？", a: "One electrical contractor is already on site." },
      { q: "交接时怎么区分已到场和未到场的供应商？", a: "未到场的用 will arrive at + 时间（预报）；已到场的用 is already on site（确认）。例如：One electrical contractor will arrive at 9:00（还没到）；One fire protection contractor is already on site（已经在了）。" },
    ],
  },
  {
    id: 185,
    en: "Are all vendors on today's whitelist?",
    cn: "所有供应商都已经在今天的白名单上了吗？",
    ipa: "/ɑːr ɔːl ˈvɛn.dərz ɑːn təˈdeɪz ˈwaɪt.lɪst/",
    tags: ["第185句", "白名单核对", "★★★★★"],
    when: "供应商到场情况汇报完后，进入白名单核对环节。白名单是数据中心安全的第一道防线，必须逐人核对。",
    words: [
      { w: "whitelist", ipa: "/ˈwaɪt.lɪst/", pos: "名词", cn: "白名单；准入名单", memory: "① white = 白色（允许/通过）；② list = 名单 → 允许进入的名单。\n数据中心白名单 = 预先审批的访客/承包商名单，不在名单上的人不允许进入。\n对比：blacklist = 黑名单（禁止进入的）。", phonics: "white 读 /waɪt/，list 读 /lɪst/，重音在第一音节。", collocations: [["on the whitelist", "在白名单上"], ["whitelist application", "白名单申请"], ["submit a whitelist", "提交白名单申请"]], examples: [["Is this contractor on the whitelist?", "这个承包商在白名单上吗？"], ["Please add them to today's whitelist.", "请把他们加入今天的白名单。"]] },
    ],
    phrases: [
      { p: "on today's whitelist", ipa: "/ɑːn təˈdeɪz ˈwaɪt.lɪst/", cn: "在今天的白名单上", why: "today's whitelist = 今天有效的白名单。白名单通常按天审批，每天需要重新确认。交接时必须核对当天白名单是否包含所有在场供应商。" },
    ],
    grammar: [
      { q: "为什么白名单要每天核对？", a: "数据中心安全要求：\n① 白名单按天审批，昨天的白名单今天无效\n② 新来的承包商需要提前提交申请\n③ 交接时交班方需确认所有在场人员都在当天白名单上\n④ 如果有人不在，必须立即补办申请（句188）\n这是物理安全（physical security）的基本要求。" },
    ],
    pattern: "Are all + 人员 + on today's whitelist?",
    patternExamples: [
      { en: "Are all contractors on today's whitelist?", cn: "所有承包商都在今天的白名单上吗？", words: [{ w: "contractors", ipa: "/ˈkɒntræktər/", cn: "承包商", phonics: "con 读 /kɒn/，tractor 读 /træktər/" }] },
      { en: "Are all visitors on the whitelist?", cn: "所有访客都在白名单上吗？", words: [] },
      { en: "Is everyone on today's whitelist?", cn: "所有人都在今天的白名单上吗？", words: [{ w: "everyone", ipa: "/ˈɛvriwʌn/", cn: "大家", phonics: "every 读 /ɛvri/，one 读 /wʌn/" }] },
    ],
    thinking: "白名单核对 = 数据中心物理安全的核心流程。\n交接核对顺序：① 问总数（都在吗？）→ ② 发现遗漏（谁不在？）→ ③ 补办申请 → ④ 核对个人信息（姓名、证件号）。\nwhitelist 在科技行业也叫 allowlist（更中性的说法），但数据中心传统仍用 whitelist。",
    pronunciation: "whitelist 的 wh 读 /w/（不读 /hw/），list 的 t 清晰。\ntoday's 的 s 读 /z/。\n节奏：Are ALL VEN-dors ｜ on to-DAY'S ｜ WHITE-list?",
    quiz: [
      { q: "所有承包商都在今天的白名单上吗？", a: "Are all contractors on today's whitelist?" },
      { q: "为什么白名单要每天核对而不是用长期名单？", a: "数据中心安全要求白名单按天审批：① 施工内容可能每天不同；② 人员可能更换；③ 安全责任需要每天确认。交接时交班方必须确认当天白名单覆盖所有在场人员，遗漏的需要立即补办。" },
    ],
  },
  {
    id: 186,
    en: "Please verify the whitelist before they enter the site.",
    cn: "请在他们进入现场前核对白名单。",
    ipa: "/pliːz ˈvɛr.ɪ.faɪ ðə ˈwaɪt.lɪst bɪˈfɔːr ðeɪ ˈɛn.tər ðə saɪt/",
    tags: ["第186句", "白名单核对", "★★★★"],
    when: "确认白名单的重要性后，给出操作指令：必须在承包商进入现场之前完成核对。",
    words: [
      { w: "verify", ipa: "/ˈvɛr.ɪ.faɪ/", pos: "动词", cn: "核实；验证", memory: "① ver- = 真实的（拉丁语 verus）；② -ify = 使…化 → 使真实化 → 核实。\nverify 比 check 更正式，强调通过对比原始数据确认准确性。\n对比：check = 检查（一般性），verify = 核实（与标准对比确认）。", phonics: "ve 读 /vɛ/，ri 读 /rɪ/，fy 读 /faɪ/，重音在第一音节。", collocations: [["verify the whitelist", "核对白名单"], ["verify identity", "核实身份"], ["verify before entry", "进入前核实"]], examples: [["Please verify their names against the whitelist.", "请对照白名单核实他们的姓名。"], ["We need to verify all documents.", "我们需要核实所有文件。"]] },
      { w: "enter", ipa: "/ˈɛn.tər/", pos: "动词", cn: "进入", memory: "① en- = 使进入；② ter = 领地 → 进入领地 → 进入。\nenter the site = 进入现场（数据中心园区/机房区域）。", phonics: "en 读 /ɛn/，ter 读 /tər/，重音在第一音节。", collocations: [["enter the site", "进入现场"], ["enter the data hall", "进入机房"], ["no entry", "禁止进入"]], examples: [["Contractors must sign in before entering.", "承包商进入前必须登记。"], ["No unauthorized entry.", "未经授权禁止进入。"]] },
    ],
    phrases: [
      { p: "before they enter the site", ipa: "/bɪˈfɔːr ðeɪ ˈɛn.tər ðə saɪt/", cn: "在他们进入现场之前", why: "before + 从句 = 在…之前。强调核对白名单是进入的前置条件，不能先进入再核对。这是安全合规的硬性要求。" },
    ],
    grammar: [
      { q: "verify 和 check 有什么区别？", a: "check = 一般性检查（看看有没有问题）\nverify = 与标准/原始数据对比核实（确认准确无误）\n✅ Please check the equipment.（检查一下设备 → 看看有没有异常）\n✅ Please verify the whitelist.（核对白名单 → 与审批名单逐一对比）\n✅ Please verify their passport numbers.（核对护照号 → 与系统记录对比确认）\n白名单、证件、权限等需要精确对比的场景用 verify。" },
    ],
    pattern: "Please verify + 对象 + before + 条件",
    patternExamples: [
      { en: "Please verify their IDs before entry.", cn: "请在进入前核实他们的证件。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
      { en: "Please verify the PTW before work starts.", cn: "请在开工前核实作业许可证。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "starts", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "Please verify the access permissions before activating the cards.", cn: "请在开通门禁卡前核实权限。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "access", ipa: "/ˈæksɛs/", cn: "门禁", phonics: "ac 读 /æk/，cess 读 /sɛs/" }] },
    ],
    thinking: "安全前置条件句式：Please verify X before Y。\n数据中心的安全原则：先核实、后放行。\n交接时的核对顺序：白名单 → 证件 → 门禁权限 → 陪同入场。\n每一步都是前一步的 verify before 关系。",
    pronunciation: "verify 重音在第一音节：/ˈvɛr.ɪ.faɪ/，v 咬下唇。\nbefore 的 fore 读 /fɔːr/。\n节奏：Please VE-ri-fy ｜ the WHITE-list ｜ be-FORE ｜ they EN-ter the SITE.",
    quiz: [
      { q: "请在他们进入机房前核实证件，怎么说？", a: "Please verify their IDs before they enter the data hall." },
      { q: "交接中什么时候用 verify 而不是 check？", a: "需要与原始数据/标准逐一对比确认时用 verify：核对白名单（verify whitelist）、核对护照号（verify passport numbers）、核对门禁权限（verify access permissions）。一般性巡视/查看用 check：检查安全帽（check safety helmet）、检查设备状态（check equipment status）。" },
    ],
  },
  {
    id: 187,
    en: "One contractor is not on the whitelist yet.",
    cn: "有一名承包商还没有加入白名单。",
    ipa: "/wʌn kənˈtræk.tər ɪz nɑːt ɑːn ðə ˈwaɪt.lɪst jɛt/",
    tags: ["第187句", "白名单遗漏", "★★★★"],
    when: "核对白名单时发现有人不在名单上，立即报告遗漏情况，需要补办申请。",
    words: [
      { w: "yet", ipa: "/jɛt/", pos: "副词", cn: "还（没有）", memory: "① yet 用于否定句末尾 = 还没有（但预期会有）。\nnot...yet = 还没有…（暗示即将处理）。\n对比：already = 已经（肯定句），yet = 还没有（否定句/疑问句）。", phonics: "yet 读 /jɛt/，y 读 /j/。", collocations: [["not yet", "还没有"], ["not approved yet", "还没批准"], ["not added yet", "还没加入"]], examples: [["The PTW hasn't been approved yet.", "作业许可证还没批准。"], ["They haven't arrived yet.", "他们还没到。"]] },
    ],
    phrases: [
      { p: "not on the whitelist yet", ipa: "/nɑːt ɑːn ðə ˈwaɪt.lɪst jɛt/", cn: "还没有加入白名单", why: "not...yet 表示预期应该加入但目前还没加入。交接时报告遗漏，暗示需要立即补办。" },
    ],
    grammar: [
      { q: "yet 放在句末和 already 放在句中的区别？", a: "already = 已经（肯定句，放在句中）\nyet = 还没有（否定句，放在句末）\n✅ One contractor is already on site.（一个承包商已经在现场了 → 肯定）\n✅ One contractor is not on the whitelist yet.（一个承包商还没在白名单上 → 否定）\n✅ Has the PTW been approved yet?（作业许可证批准了吗？→ 疑问）" },
    ],
    pattern: "数量 + contractor + is not on the whitelist yet",
    patternExamples: [
      { en: "Two contractors are not on the whitelist yet.", cn: "两名承包商还没加入白名单。", words: [{ w: "contractors", ipa: "/ˈkɒntræktər/", cn: "承包商", phonics: "con 读 /kɒn/，tractor 读 /træktər/" }] },
      { en: "The new contractor is not on the list yet.", cn: "新承包商还没加入名单。", words: [{ w: "contractor", ipa: "/ˈkɒntræktər/", cn: "承包商", phonics: "con 读 /kɒn/，tractor 读 /træktər/" }] },
      { en: "Their names are not on the whitelist yet.", cn: "他们的名字还没在白名单上。", words: [] },
    ],
    thinking: "发现白名单遗漏是交接中的常见场景。\n处理流程：① 报告遗漏（本句）→ ② 立即补办申请（句188）→ ③ 等待审批通过 → ④ 重新核对确认。\nnot...yet 的语感 = '虽然还没有，但应该马上处理'，比单纯的 not 更暗示紧迫性。",
    pronunciation: "yet 读 /jɛt/，注意 y 发 /j/ 音，不是元音。\n节奏：One con-TRAC-tor ｜ is NOT ｜ on the WHITE-list ｜ YET.",
    quiz: [
      { q: "两名承包商还没加入白名单，怎么说？", a: "Two contractors are not on the whitelist yet." },
      { q: "yet 和 already 分别在什么句型中使用？", a: "already 用于肯定句（已发生）：The PTW has already been approved.（已经批准了）\nyet 用于否定句和疑问句（未发生/询问是否发生）：The PTW hasn't been approved yet.（还没批准）/ Has the PTW been approved yet?（批准了吗？）" },
    ],
  },
  {
    id: 188,
    en: "Please submit a new whitelist application immediately.",
    cn: "请立即提交新的白名单申请。",
    ipa: "/pliːz səbˈmɪt ə njuː ˈwaɪt.lɪst ˌæp.lɪˈkeɪ.ʃən ɪˈmiː.di.ət.li/",
    tags: ["第188句", "白名单补办", "★★★★★"],
    when: "发现白名单遗漏后，立即指示补办申请。白名单遗漏是安全违规风险，必须马上处理。",
    words: [
      { w: "submit", ipa: "/səbˈmɪt/", pos: "动词", cn: "提交；呈交", memory: "① sub- = 在下面；② mit = 发送（拉丁语 mittere）→ 从下往上发送 → 提交。\nsubmit an application = 提交申请。数据中心常见搭配：submit a PTW / submit a whitelist application。", phonics: "sub 读 /səb/，mit 读 /mɪt/，重音在第二音节。", collocations: [["submit an application", "提交申请"], ["submit a request", "提交请求"], ["submit for approval", "提交审批"]], examples: [["Please submit the whitelist application now.", "请现在提交白名单申请。"], ["The PTW was submitted yesterday.", "作业许可证昨天已提交。"]] },
      { w: "application", ipa: "/ˌæp.lɪˈkeɪ.ʃən/", pos: "名词", cn: "申请；申请表", memory: "① apply = 申请；② application = 申请（名词形式）。\nwhitelist application = 白名单申请表，需填写承包商信息、施工内容、预计时间等。", phonics: "ap 读 /æp/，pli 读 /lɪ/，ca 读 /keɪ/，tion 读 /ʃən/，重音在第三音节。注意这是4个音节。", collocations: [["whitelist application", "白名单申请"], ["application form", "申请表"], ["pending application", "待审批申请"]], examples: [["Fill out the application form.", "填写申请表。"], ["The application is under review.", "申请正在审核中。"]] },
      { w: "immediately", ipa: "/ɪˈmiː.di.ət.li/", pos: "副词", cn: "立即；马上", memory: "① im- = 不；② medi = 中间（拉丁语 medius）→ 没有中间间隔 → 立即。\nimmediately 比 right now / as soon as possible 更正式，常用于工作指令。", phonics: "im 读 /ɪm/，me 读 /miː/，di 读 /di/，ate 读 /ət/，ly 读 /li/，重音在第二音节。5个音节。", collocations: [["immediately", "立即"], ["take action immediately", "立即采取行动"], ["notify immediately", "立即通知"]], examples: [["Please stop work immediately.", "请立即停止工作。"], ["Report any incident immediately.", "立即报告任何事故。"]] },
    ],
    phrases: [
      { p: "submit a new whitelist application", ipa: "/səbˈmɪt ə njuː ˈwaɪt.lɪst ˌæp.lɪˈkeɪ.ʃən/", cn: "提交新的白名单申请", why: "a new application = 新的申请（因为原申请遗漏了此人）。submit 搭配 application 是固定用法。" },
    ],
    grammar: [
      { q: "immediately 放在句末和句首有什么区别？", a: "句末 = 标准位置，语气自然：\n✅ Please submit the application immediately.（请立即提交申请）\n句首 = 强调紧迫感：\n✅ Immediately submit the application!（马上提交申请！→ 更紧急）\n交接中通常放句末，语气正式但不夸张。" },
    ],
    pattern: "Please submit + 申请类型 + immediately",
    patternExamples: [
      { en: "Please submit a PTW application immediately.", cn: "请立即提交作业许可证申请。", words: [{ w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Please submit a change request immediately.", cn: "请立即提交变更申请。", words: [{ w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Please submit the access application now.", cn: "请现在提交门禁申请。", words: [{ w: "access", ipa: "/ˈæksɛs/", cn: "门禁", phonics: "ac 读 /æk/，cess 读 /sɛs/" }] },
    ],
    thinking: "白名单遗漏的应急处理句式。\n处理优先级：白名单遗漏 → 立即提交申请 → 等待审批 → 核对通过后允许入场。\n在等待审批期间，该承包商不得进入现场（句195：禁止单独作业）。\nimmediately 在工作指令中表示'不要拖延，现在就做'。",
    pronunciation: "submit 重音在第二音节：/səbˈmɪt/。\napplication 5个音节，重音在第三音节：/ˌæp.lɪˈkeɪ.ʃən/。\nimmediately 重音在第二音节：/ɪˈmiː.di.ət.li/。\n节奏：Please sub-MIT ｜ a NEW WHITE-list ap-pli-CA-tion ｜ im-ME-di-ate-ly.",
    quiz: [
      { q: "请立即提交作业许可证申请，怎么说？", a: "Please submit a PTW application immediately." },
      { q: "发现白名单遗漏后的完整处理流程是什么？", a: "① 报告遗漏：One contractor is not on the whitelist yet.\n② 立即补办：Please submit a new whitelist application immediately.\n③ 等待审批期间不得入场：No entry until approved.\n④ 审批通过后重新核对：Verify the updated whitelist.\n⑤ 确认无误后陪同入场：Escort the contractor to the work area." },
    ],
  },
  {
    id: 189,
    en: "Please verify all contractor names.",
    cn: "请核对所有承包商的姓名。",
    ipa: "/pliːz ˈvɛr.ɪ.faɪ ɔːl kənˈtræk.tər neɪmz/",
    tags: ["第189句", "身份核对", "★★★★"],
    when: "白名单申请补办完成后，进入身份核对环节。第一步核对姓名，确保白名单上的人与实际到场的人一致。",
    words: [
      { w: "names", ipa: "/neɪmz/", pos: "名词", cn: "姓名", memory: "① name = 姓名/名字；② 这里用复数因为有多名承包商。\n身份核对的第一步：核对姓名是否与白名单/证件一致。", phonics: "name 读 /neɪm/，复数 s 读 /z/。", collocations: [["contractor names", "承包商姓名"], ["full name", "全名"], ["verify names", "核对姓名"]], examples: [["Please confirm your full name.", "请确认您的全名。"], ["The names don't match the whitelist.", "姓名与白名单不匹配。"]] },
    ],
    phrases: [
      { p: "verify all contractor names", ipa: "/ˈvɛr.ɪ.faɪ ɔːl kənˈtræk.tər neɪmz/", cn: "核对所有承包商的姓名", why: "verify + 对象 = 核实…all 强调一个都不能漏。交接时逐人核对姓名，确保白名单上的名字与实际到场人员一一对应。" },
    ],
    grammar: [
      { q: "身份核对的完整顺序是什么？", a: "数据中心入场身份核对三步：\n① 核对姓名（verify names）→ 本句\n② 核对证件号（verify passport numbers）→ 句190\n③ 核对门禁权限（verify access permissions）→ 句191\n每一步都需要与白名单/系统记录逐一对比，全部通过才能放行。" },
    ],
    pattern: "Please verify all + 对象",
    patternExamples: [
      { en: "Please verify all passport numbers.", cn: "请核对所有护照号码。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
      { en: "Please verify all access cards.", cn: "请核对所有门禁卡。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "access", ipa: "/ˈæksɛs/", cn: "门禁", phonics: "ac 读 /æk/，cess 读 /sɛs/" }] },
      { en: "Please verify all safety equipment.", cn: "请核对所有安全设备。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }, { w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }] },
    ],
    thinking: "身份核对是白名单流程的执行环节。\n白名单审批通过后，还需要现场确认：白名单上的人 = 实际到场的人。\n核对顺序：姓名 → 证件号 → 门禁权限 → 陪同入场。\n用 verify 而不是 check，因为需要与原始记录精确对比。",
    pronunciation: "contractor 重音在第二音节：/kənˈtræk.tər/。\nnames 的 s 读 /z/，不是 /s/。\n节奏：Please VE-ri-fy ｜ ALL ｜ con-TRAC-tor NAMES.",
    quiz: [
      { q: "请核对所有护照号码，怎么说？", a: "Please verify all passport numbers." },
      { q: "入场身份核对的三步是什么？", a: "① 核对姓名：Please verify all contractor names.\n② 核对证件号：Please verify all passport numbers.\n③ 核对门禁权限：Please verify their access permissions.\n三步全部通过才能开通门禁、陪同入场。" },
    ],
  },
  {
    id: 190,
    en: "Please verify all passport numbers.",
    cn: "请核对所有护照号码。",
    ipa: "/pliːz ˈvɛr.ɪ.faɪ ɔːl ˈpæs.pɔːrt ˈnʌm.bərz/",
    tags: ["第190句", "身份核对", "★★★★"],
    when: "姓名核对完成后，继续核对护照号码，确保身份信息精确匹配。",
    words: [
      { w: "passport", ipa: "/ˈpæs.pɔːrt/", pos: "名词", cn: "护照", memory: "① pass = 通过；② port = 港口 → 通过港口的证件 → 护照。\n马来西亚数据中心的外籍承包商使用护照作为主要身份证件。本地员工可能使用 IC（身份证）或 work permit（工作准证）。", phonics: "pass 读 /pæs/，port 读 /pɔːrt/，重音在第一音节。", collocations: [["passport number", "护照号码"], ["passport copy", "护照复印件"], ["valid passport", "有效护照"]], examples: [["Please provide your passport number.", "请提供您的护照号码。"], ["The passport number doesn't match.", "护照号码不匹配。"]] },
      { w: "numbers", ipa: "/ˈnʌm.bərz/", pos: "名词", cn: "号码", memory: "① number = 数字/号码；② passport number = 护照号码。\n核对号码时需要逐字符对比，因为相似数字容易混淆（如 6 和 8，0 和 O）。", phonics: "num 读 /nʌm/，ber 读 /bər/，复数 s 读 /z/。", collocations: [["passport number", "护照号码"], ["ID number", "身份证号"], ["contact number", "联系电话"]], examples: [["Read the passport number carefully.", "仔细读取护照号码。"], ["The numbers are correct.", "号码正确。"]] },
    ],
    phrases: [
      { p: "passport numbers", ipa: "/ˈpæs.pɔːrt ˈnʌm.bərz/", cn: "护照号码", why: "passport number 是承包商入场身份验证的核心证件号。核对时需要逐字符确认，避免因相似字符导致的错误。" },
    ],
    grammar: [
      { q: "为什么核对号码比核对姓名更重要？", a: "姓名可能重复或有拼写差异，但证件号是唯一的：\n① passport number = 唯一标识（全球不重复）\n② 姓名可能同名同姓（verify names 可能不够）\n③ 证件号与白名单系统精确匹配\n所以身份核对必须姓名 + 证件号双重确认。\n马来西亚场景：外籍用 passport，本地用 NRIC（身份证）或 work permit number。" },
    ],
    pattern: "Please verify all + 证件类型 + numbers",
    patternExamples: [
      { en: "Please verify all IC numbers.", cn: "请核对所有身份证号码。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
      { en: "Please verify all work permit numbers.", cn: "请核对所有工作准证号码。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
      { en: "Please verify all badge numbers.", cn: "请核对所有工号。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
    ],
    thinking: "身份核对第二步：证件号比对。\n姓名核对（句189）+ 证件号核对（本句）= 双重身份确认。\n数据中心安全要求：人 = 名 = 证 三者一致才能放行。\n马来西亚语境中，常见证件类型：passport（护照）、NRIC（马来西亚身份证）、work permit（工作准证）。",
    pronunciation: "passport 重音在第一音节：/ˈpæs.pɔːrt/，注意 ss 读 /s/。\nnumbers 的 b 轻声，几乎不发音：/ˈnʌm.bərz/。\n节奏：Please VE-ri-fy ｜ ALL ｜ PASS-port NUM-bers.",
    quiz: [
      { q: "请核对所有工作准证号码，怎么说？", a: "Please verify all work permit numbers." },
      { q: "马来西亚数据中心常见的承包商证件类型有哪些？", a: "① passport = 护照（外籍承包商）\n② NRIC (National Registration Identity Card) = 身份证（马来西亚公民）\n③ work permit = 工作准证（外籍劳工）\n④ CIDB Green Card = 建筑工业发展局绿卡（施工安全卡）\n交接时根据承包商国籍/身份核对对应证件。" },
    ],
  },
  {
    id: 191,
    en: "Please verify their access permissions.",
    cn: "请确认他们的门禁权限。",
    ipa: "/pliːz ˈvɛr.ɪ.faɪ ðeər ˈæk.sɛs pərˈmɪʃ.ənz/",
    tags: ["第191句", "门禁权限", "★★★★★"],
    when: "身份核对（姓名+证件号）完成后，进入门禁权限确认环节。确认承包商有权进入哪些区域。",
    words: [
      { w: "access", ipa: "/ˈæk.sɛs/", pos: "名词", cn: "门禁；进入权限", memory: "① ac- = ad-（朝向）；② cess = 走（拉丁语 cedere）→ 走向 → 进入。\naccess permission = 进入权限/门禁权限。数据中心按区域分级授权。", phonics: "ac 读 /æk/，cess 读 /sɛs/，重音在第一音节。", collocations: [["access permission", "门禁权限"], ["access card", "门禁卡"], ["access control", "门禁控制"]], examples: [["Do they have access to the data hall?", "他们有进入机房的权限吗？"], ["Access is restricted to authorized personnel.", "仅限授权人员进入。"]] },
      { w: "permissions", ipa: "/pərˈmɪʃ.ənz/", pos: "名词", cn: "权限；许可", memory: "① per- = 通过；② miss = 发送（拉丁语 mittere）→ 允许通过 → 许可/权限。\npermission 通常不可数，但 permissions（复数）指多项具体权限。", phonics: "per 读 /pər/，mis 读 /mɪ/，sions 读 /ʃənz/，重音在第二音节。", collocations: [["access permissions", "门禁权限"], ["write permissions", "写入权限"], ["revoke permissions", "撤销权限"]], examples: [["Check their permissions before granting access.", "授权前检查他们的权限。"], ["The permissions have been updated.", "权限已更新。"]] },
    ],
    phrases: [
      { p: "access permissions", ipa: "/ˈæk.sɛs pərˈmɪʃ.ənz/", cn: "门禁权限", why: "access + permissions = 进入权限。数据中心门禁按区域分级：大堂（lobby）、机房（data hall）、配电间（electrical room）、冷通道（cold aisle）等。承包商只被授予工作所需区域的权限。" },
    ],
    grammar: [
      { q: "为什么需要核实门禁权限？", a: "白名单 ≠ 门禁权限：\n① 白名单 = 允许进入园区（物理安全第一层）\n② 门禁权限 = 允许进入特定区域（物理安全第二层）\n承包商可能在白名单上，但没有数据机房的门禁权限（只有大堂权限）。\n交接时必须确认：白名单 ✓ + 门禁权限 ✓ → 才能开通门禁卡。" },
    ],
    pattern: "Please verify + 人员 + access permissions",
    patternExamples: [
      { en: "Please verify the new contractor's access permissions.", cn: "请确认新承包商的门禁权限。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "contractors", ipa: "/ˈkɒntræktər/", cn: "承包商", phonics: "con 读 /kɒn/，tractor 读 /træktər/" }, { w: "access", ipa: "/ˈæksɛs/", cn: "门禁", phonics: "ac 读 /æk/，cess 读 /sɛs/" }] },
      { en: "Please verify access permissions for all visitors.", cn: "请确认所有访客的门禁权限。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "access", ipa: "/ˈæksɛs/", cn: "门禁", phonics: "ac 读 /æk/，cess 读 /sɛs/" }] },
      { en: "Please verify that they have data hall access.", cn: "请确认他们有进入机房的权限。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "data", ipa: "/ˈdeɪtə/", cn: "数据", phonics: "da 读 /deɪ/，ta 读 /tə/" }, { w: "access", ipa: "/ˈæksɛs/", cn: "门禁", phonics: "ac 读 /æk/，cess 读 /sɛs/" }] },
    ],
    thinking: "门禁权限核实是入场前的最后一步安全检查。\n完整入场流程：① 白名单核对 ✓ → ② 身份核实（姓名+证件号）✓ → ③ 门禁权限确认 ✓ → ④ 开通门禁卡（句192）→ ⑤ 陪同入场（句194）。\n权限范围要精确到区域，不能给超出工作需要的权限。",
    pronunciation: "access 重音在第一音节：/ˈæk.sɛs/，两个 s 都读 /s/。\npermissions 重音在第二音节：/pərˈmɪʃ.ənz/。\n节奏：Please VE-ri-fy ｜ their AC-cess ｜ per-MIS-sions.",
    quiz: [
      { q: "请确认访客的门禁权限，怎么说？", a: "Please verify the visitors' access permissions." },
      { q: "白名单和门禁权限有什么区别？", a: "白名单 = 允许进入园区/大楼（物理安全第一层，由安保部门审批）\n门禁权限 = 允许进入特定区域（物理安全第二层，由IT/设施部门授权）\n一个承包商可能在白名单上但没有机房门禁权限。交接时两层都要核实：白名单 ✓ + 门禁权限 ✓ → 开通门禁卡。" },
    ],
  },
  {
    id: 192,
    en: "Their access cards have been activated.",
    cn: "他们的门禁卡已经开通。",
    ipa: "/ðeər ˈæk.sɛs kɑːrdz hæv biːn ˈæk.tɪ.veɪ.tɪd/",
    tags: ["第192句", "门禁开通", "★★★★"],
    when: "门禁权限核实通过后，确认门禁卡已经开通，承包商可以刷卡进入。",
    words: [
      { w: "activated", ipa: "/ˈæk.tɪ.veɪ.tɪd/", pos: "动词(过去分词)", cn: "已激活；已开通", memory: "① active = 活跃的；② activate = 激活/开通；③ activated = 已激活的（被动语态）。\naccess card activated = 门禁卡已开通，可以刷卡进入。\n对比：deactivated = 已停用/已注销。", phonics: "ac 读 /æk/，ti 读 /tɪ/，va 读 /veɪ/，ted 读 /tɪd/，重音在第一音节。", collocations: [["card activated", "卡已开通"], ["account activated", "账户已激活"], ["activate a card", "开通一张卡"]], examples: [["The access card has been activated.", "门禁卡已开通。"], ["Please activate their cards.", "请开通他们的卡。"]] },
      { w: "access cards", ipa: "/ˈæk.sɛs kɑːrdz/", pos: "名词", cn: "门禁卡", memory: "① access card = 门禁卡/出入卡。\n数据中心常用 RFID/NFC 门禁卡，按权限等级分色：红色（全区）、黄色（限定区域）、绿色（访客临时）。", phonics: "access 读 /ˈæk.sɛs/，cards 读 /kɑːrdz/。", collocations: [["access card", "门禁卡"], ["temporary card", "临时卡"], ["return the card", "归还卡"]], examples: [["Please return your access card before leaving.", "请在离开前归还门禁卡。"], ["Lost access cards must be reported immediately.", "丢失门禁卡必须立即报告。"]] },
    ],
    phrases: [
      { p: "have been activated", ipa: "/hæv biːn ˈæk.tɪ.veɪ.tɪd/", cn: "已经被开通", why: "have been + 过去分词 = 现在完成时被动语态，表示动作已完成且结果持续。门禁卡已经开通，现在可以使用。" },
    ],
    grammar: [
      { q: "have been activated 和 are activated 有什么区别？", a: "have been activated = 已经开通了（强调开通这个动作在过去完成，现在卡是可用的）\nare activated = 是激活状态的（描述当前状态，不强调动作）\n✅ Their access cards have been activated.（已经开通好了 → 可以用了）\n✅ Their access cards are active.（卡是激活状态的 → 描述状态）\n交接时用 have been activated，因为重点是'开通这个步骤已经做完了'。" },
    ],
    pattern: "门禁卡 + have been activated",
    patternExamples: [
      { en: "All access cards have been activated.", cn: "所有门禁卡已开通。", words: [{ w: "access", ipa: "/ˈæksɛs/", cn: "门禁", phonics: "ac 读 /æk/，cess 读 /sɛs/" }] },
      { en: "The temporary card has been activated.", cn: "临时卡已开通。", words: [] },
      { en: "Their badges have been activated for the data hall.", cn: "他们的证件已开通机房权限。", words: [{ w: "data", ipa: "/ˈdeɪtə/", cn: "数据", phonics: "da 读 /deɪ/，ta 读 /tə/" }] },
    ],
    thinking: "门禁卡开通 = 入场前的最后技术步骤。\n完整入场流程：白名单 ✓ → 身份核实 ✓ → 权限确认 ✓ → 门禁卡开通（本句）→ 陪同入场。\n开通后要提醒：① 不得借给他人 ② 离开时归还 ③ 丢失立即报告。",
    pronunciation: "activated 重音在第一音节：/ˈæk.tɪ.veɪ.tɪd/，注意 a 读 /æ/ 不是 /ə/。\n节奏：Their AC-cess CARDS ｜ have been AC-ti-VA-ted.",
    quiz: [
      { q: "所有门禁卡已经开通了，怎么说？", a: "All access cards have been activated." },
      { q: "activated 和 active 有什么区别？", a: "activated = 已开通的（强调动作已完成）：The card has been activated.（卡已经开通了）\nactive = 激活状态的（描述当前状态）：The card is active.（卡是激活状态的）\n交接时用 activated，因为重点是'开通步骤已完成'。" },
    ],
  },
  {
    id: 193,
    en: "One contractor is waiting for access approval.",
    cn: "有一名承包商正在等待门禁批准。",
    ipa: "/wʌn kənˈtræk.tər ɪz ˈweɪ.tɪŋ fɔːr ˈæk.sɛs əˈpruː.vəl/",
    tags: ["第193句", "门禁等待", "★★★★"],
    when: "如果承包商的门禁权限还没审批通过，报告等待状态，接班人需要继续跟进。",
    words: [
      { w: "waiting for", ipa: "/ˈweɪ.tɪŋ fɔːr/", pos: "动词短语", cn: "正在等待", memory: "① wait = 等待；② wait for + 对象 = 等待某事/某人。\nwaiting for approval = 等待审批。交接时表示某个流程还没完成，需要跟进。", phonics: "wait 读 /weɪt/，ing 读 /ɪŋ/，for 读 /fɔːr/。", collocations: [["waiting for approval", "等待审批"], ["waiting for confirmation", "等待确认"], ["waiting for the vendor", "等供应商"]], examples: [["We are waiting for the PTW approval.", "我们在等作业许可证审批。"], ["The contractor is waiting outside.", "承包商在外面等。"]] },
      { w: "approval", ipa: "/əˈpruː.vəl/", pos: "名词", cn: "批准；审批", memory: "① approve = 批准；② approval = 批准（名词形式）。\naccess approval = 门禁审批。数据中心门禁审批通常需要设施经理 + 安全经理双重签字。", phonics: "ap 读 /ə/，prov 读 /pruː/，al 读 /əl/，重音在第二音节。", collocations: [["access approval", "门禁审批"], ["pending approval", "待审批"], ["approval process", "审批流程"]], examples: [["The approval takes about 30 minutes.", "审批大约需要30分钟。"], ["We need management approval.", "我们需要管理层审批。"]] },
    ],
    phrases: [
      { p: "waiting for access approval", ipa: "/ˈweɪ.tɪŋ fɔːr ˈæk.sɛs əˈpruː.vəl/", cn: "正在等待门禁审批", why: "is waiting for = 正在等待（现在进行时）。access approval = 门禁权限的审批。交接时报告未完成的审批，接班人需要跟进。" },
    ],
    grammar: [
      { q: "is waiting for 和 is pending 有什么区别？", a: "is waiting for = 正在等待（主语是等待的人）\nis pending = 处于待审批状态（主语是待审批的事项）\n✅ One contractor is waiting for access approval.（承包商在等 → 人是主语）\n✅ The access approval is pending.（审批在等 → 事项是主语）\n交接时用 is waiting for 更直观，因为关注的是'谁在等什么'。" },
    ],
    pattern: "数量 + contractor + is waiting for + 审批类型",
    patternExamples: [
      { en: "Two contractors are waiting for PTW approval.", cn: "两名承包商在等作业许可证审批。", words: [{ w: "contractors", ipa: "/ˈkɒntræktər/", cn: "承包商", phonics: "con 读 /kɒn/，tractor 读 /træktər/" }] },
      { en: "One contractor is waiting for badge printing.", cn: "一名承包商在等证件打印。", words: [{ w: "contractor", ipa: "/ˈkɒntræktər/", cn: "承包商", phonics: "con 读 /kɒn/，tractor 读 /træktər/" }] },
      { en: "The vendor is waiting for security clearance.", cn: "供应商在等安全审查。", words: [{ w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }, { w: "security", ipa: "/sɪˈkjʊrɪti/", cn: "安防", phonics: "se 读 /sɪ/，curity 读 /kjʊrɪti/" }] },
    ],
    thinking: "等待审批是交接中常见的未完成事项。\n交接时的处理：① 报告等待状态（本句）→ ② 接班人继续跟进 → ③ 审批通过后执行后续步骤（开通门禁卡、陪同入场）。\n未完成的审批不能跳过，必须等审批通过才能继续。",
    pronunciation: "waiting 的 ai 读 /eɪ/：/ˈweɪ.tɪŋ/。\napproval 重音在第二音节：/əˈpruː.vəl/，oo 读 /uː/。\n节奏：One con-TRAC-tor ｜ is WAIT-ing ｜ for AC-cess ap-PROV-al.",
    quiz: [
      { q: "两名承包商在等作业许可证审批，怎么说？", a: "Two contractors are waiting for PTW approval." },
      { q: "交接时发现承包商在等审批，应该怎么做？", a: "① 报告等待状态：One contractor is waiting for access approval.\n② 交代跟进事项：Please follow up on this approval.\n③ 说明后续步骤：Once approved, activate their card and escort them in.\n④ 在等待期间：The contractor must wait in the lobby.（承包商必须在大堂等候）" },
    ],
  },
  {
    id: 194,
    en: "Please escort the contractor to the work area.",
    cn: "请带领承包商进入施工区域。",
    ipa: "/pliːz ɪˈskɔːrt ðə kənˈtræk.tər tuː ðə wɜːrk ˈɛr.i.ə/",
    tags: ["第194句", "陪同入场", "★★★★★"],
    when: "门禁卡开通后，安排内部人员陪同承包商进入指定施工区域。全程陪同是数据中心的安全硬性要求。",
    words: [
      { w: "escort", ipa: "/ɪˈskɔːrt/", pos: "动词", cn: "陪同；护送", memory: "① es- = ex-（出去）；② cort = 队伍（拉丁语 cohors）→ 随队出行 → 陪同/护送。\nescort 在数据中心语境中 = 全程陪同外部人员，确保他们只在授权区域活动。", phonics: "es 读 /ɪ/，cort 读 /skɔːrt/，重音在第二音节。注意 e 读 /ɪ/ 不是 /ɛ/。", collocations: [["escort to the work area", "陪同到施工区域"], ["escort the visitor", "陪同访客"], ["escort required", "需要陪同"]], examples: [["Please escort them to the server room.", "请带他们去服务器机房。"], ["All visitors must be escorted at all times.", "所有访客必须全程陪同。"]] },
      { w: "work area", ipa: "/wɜːrk ˈɛr.i.ə/", pos: "名词", cn: "施工区域；工作区域", memory: "① work = 工作/施工；② area = 区域。\nwork area = 承包商被授权工作的特定区域，不是整个数据中心。超出 work area 的活动属于安全违规。", phonics: "work 读 /wɜːrk/，area 读 /ˈɛr.i.ə/，重音在第一音节。", collocations: [["work area", "施工区域"], ["designated area", "指定区域"], ["restricted area", "限制区域"]], examples: [["The work area is limited to Bay 3.", "施工区域仅限于3号区。"], ["Do not leave the designated work area.", "不要离开指定施工区域。"]] },
    ],
    phrases: [
      { p: "escort the contractor to the work area", ipa: "/ɪˈskɔːrt ðə kənˈtræk.tər tuː ðə wɜːrk ˈɛr.i.ə/", cn: "带领承包商进入施工区域", why: "escort...to...= 陪同…到…。work area 是承包商被授权工作的限定区域。陪同入场是安全合规要求，不能让承包商自行进入。" },
    ],
    grammar: [
      { q: "escort 和 guide/lead 有什么区别？", a: "escort = 陪同/护送（安全目的，全程跟随监督）\nguide = 引导/带路（介绍性质，可以不全程跟随）\nlead = 带领（走在前面带路）\n✅ Please escort the contractor.（全程陪同监督 → 安全要求）\n✅ Please guide the visitor.（给访客带路介绍 → 接待性质）\n数据中心对承包商必须用 escort，不是 guide。escort 意味着全程监督，不能离开。" },
    ],
    pattern: "Please escort + 人员 + to + 目的地",
    patternExamples: [
      { en: "Please escort the vendor to the data hall.", cn: "请带供应商去机房。", words: [{ w: "escort", ipa: "/ɪˈskɔːrt/", cn: "陪同", phonics: "es 读 /ɪs/，cort 读 /kɔːrt/" }, { w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }, { w: "data", ipa: "/ˈdeɪtə/", cn: "数据", phonics: "da 读 /deɪ/，ta 读 /tə/" }] },
      { en: "Please escort the inspector to the electrical room.", cn: "请带检查员去配电间。", words: [{ w: "escort", ipa: "/ɪˈskɔːrt/", cn: "陪同", phonics: "es 读 /ɪs/，cort 读 /kɔːrt/" }, { w: "electrical", ipa: "/ɪˈlɛktrɪkəl/", cn: "电气", phonics: "e 读 /ɪ/，lectrical 读 /lɛktrɪkəl/" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "Please escort them to the loading bay.", cn: "请带他们去装卸区。", words: [{ w: "escort", ipa: "/ɪˈskɔːrt/", cn: "陪同", phonics: "es 读 /ɪs/，cort 读 /kɔːrt/" }, { w: "loading", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
    ],
    thinking: "陪同入场 = 数据中心安全管理的核心要求。\nescort ≠ 简单带路，而是全程监督：\n① 确保承包商只在授权区域活动\n② 监督施工过程符合安全规范\n③ 发现异常立即制止\n④ 施工结束后陪同离场\n句199-200进一步强调：全程随工监督，不得让承包商单独留在机房。",
    pronunciation: "escort 重音在第二音节：/ɪˈskɔːrt/，sc 读 /sk/。\narea 三个音节：/ˈɛr.i.ə/，不是两个音节。\n节奏：Please es-CORT ｜ the con-TRAC-tor ｜ to the WORK ARE-a.",
    quiz: [
      { q: "请带检查员去配电间，怎么说？", a: "Please escort the inspector to the electrical room." },
      { q: "escort 和 guide 在数据中心语境中有什么区别？", a: "escort = 全程陪同监督（安全要求，不能离开承包商）：Please escort the contractor to the work area.（带承包商去施工区域并全程监督）\nguide = 引导带路（接待性质，不需要全程跟随）：Please guide the visitor to the meeting room.（带访客去会议室）\n对承包商必须 escort，不能只是 guide。" },
    ],
  },
  {
    id: 195,
    en: "No contractor is allowed to work alone.",
    cn: "任何承包商都不得单独作业。",
    ipa: "/noʊ kənˈtræk.tər ɪz əˈlaʊd tuː wɜːrk əˈloʊn/",
    tags: ["第195句", "安全规定", "★★★★★"],
    when: "陪同入场后，强调最重要的安全规定：承包商任何时候都不能单独作业，必须有内部人员全程监督。",
    words: [
      { w: "allowed", ipa: "/əˈlaʊd/", pos: "动词(过去分词)", cn: "被允许", memory: "① allow = 允许；② allowed = 被允许的（被动语态）。\nis allowed to = 被允许做…\nis NOT allowed to = 不被允许做…（禁止）。", phonics: "al 读 /ə/，low 读 /laʊ/，ed 读 /d/。注意 ow 读 /aʊ/。", collocations: [["not allowed", "不允许"], ["allowed to enter", "允许进入"], ["strictly not allowed", "严格禁止"]], examples: [["Smoking is not allowed on site.", "现场禁止吸烟。"], ["Photography is not allowed in the data hall.", "机房内禁止拍照。"]] },
      { w: "alone", ipa: "/əˈloʊn/", pos: "副词", cn: "单独；独自", memory: "① all + one = 全部一个人 → 独自/单独。\nwork alone = 单独作业。数据中心安全规定：承包商不得单独作业，必须有内部人员监督。", phonics: "a 读 /ə/，lone 读 /loʊn/。注意 lone 和 loan（贷款）同音。", collocations: [["work alone", "单独作业"], ["leave alone", "单独留下"], ["never alone", "绝不单独"]], examples: [["Contractors must never work alone.", "承包商绝不能单独作业。"], ["Do not leave them alone in the server room.", "不要让他们单独留在服务器机房。"]] },
    ],
    phrases: [
      { p: "no contractor is allowed to", ipa: "/noʊ kənˈtræk.tər ɪz əˈlaʊd tuː/", cn: "任何承包商都不允许…", why: "No + 名词 + is allowed to = 任何…都不允许…（强禁止句式）。比 must not 更正式，常用于安全规定的书面表达。" },
    ],
    grammar: [
      { q: "is not allowed to 和 must not 有什么区别？", a: "两者都表示禁止，但语气和用法不同：\n✅ No contractor is allowed to work alone.（任何承包商都不被允许单独作业 → 客观规定）\n✅ Contractors must not work alone.（承包商禁止单独作业 → 主观命令）\nis not allowed to = 规定不允许（引用规则）\nmust not = 绝对不可以（直接命令）\n安全规定中两者都可以用，is not allowed to 更正式。" },
    ],
    pattern: "No + 人员 + is allowed to + 动作",
    patternExamples: [
      { en: "No visitor is allowed to enter the data hall.", cn: "任何访客都不允许进入机房。", words: [{ w: "data", ipa: "/ˈdeɪtə/", cn: "数据", phonics: "da 读 /deɪ/，ta 读 /tə/" }] },
      { en: "No one is allowed to take photos.", cn: "任何人都不允许拍照。", words: [] },
      { en: "No unauthorized personnel is allowed on site.", cn: "任何未授权人员都不允许进入现场。", words: [{ w: "site", ipa: "/saɪt/", cn: "场地", phonics: "site 读 /saɪt/" }] },
    ],
    thinking: "安全红线条款：承包商不得单独作业。\n这是数据中心物理安全的核心规定之一，与句199-200（全程监督、不得单独留在机房）形成完整的安全链：\n① 陪同入场（escort）→ ② 全程监督（stay with）→ ③ 不得单独作业（no work alone）→ ④ 不得单独留在机房（never leave unattended）。\n违反此规定 = 安全事件（security incident），需要立即报告。",
    pronunciation: "allowed 的 ow 读 /aʊ/：/əˈlaʊd/。\nalone 重音在第二音节：/əˈloʊn/。\n节奏：No con-TRAC-tor ｜ is al-LOWED ｜ to WORK a-LONE.",
    quiz: [
      { q: "任何人都不允许进入配电间，怎么说？", a: "No one is allowed to enter the electrical room." },
      { q: "承包商安全管理的四步链条是什么？", a: "① 陪同入场：Escort the contractor to the work area.（带进施工区域）\n② 全程监督：Stay with the contractor during the entire maintenance.（全程随工监督）\n③ 不得单独作业：No contractor is allowed to work alone.（禁止单独施工）\n④ 不得单独留下：Never leave the contractor unattended in the data hall.（不得单独留在机房）\n四步缺一不可，违反任何一步都是安全事件。" },
    ],
  },
];

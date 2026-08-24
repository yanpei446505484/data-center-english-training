// EXPORTS: MOCK_SENTENCES_PART16A

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART16A: ISentence[] = [
  {
    id: 1801,
    en: "Hello, this is the data center duty manager speaking.",
    cn: "您好，我是数据中心值班经理。",
    ipa: "/həˈloʊ ðɪs ɪz ðə ˈdeɪ.tə sɛn.tər ˈdjuː.ti ˈmæn.ɪ.dʒər ˈspiː.kɪŋ/",
    tags: ["第1801句", "供应商沟通", "★★★★★"],
    when: "拨通供应商电话后，第一句话必须自报身份。数据中心值班经理（duty manager）负责现场运营，是联系供应商的主要接口人。",
    words: [
      { w: "duty manager", ipa: "/ˈdjuː.ti ˈmæn.ɪ.dʒər/", pos: "名词", cn: "值班经理", memory: "① duty = 值班/职责；② manager = 经理。\nduty manager = 值班经理，是数据中心现场最高指挥人。\n值班经理负责：告警响应、供应商协调、客户沟通、应急决策。", phonics: "duty 读 /ˈdjuː.ti/，manager 读 /ˈmæn.ɪ.dʒər/。", collocations: [["duty manager", "值班经理"], ["on duty", "值班中"], ["off duty", "下班"]], examples: [["I am the duty manager today.", "我是今天的值班经理。"], ["Please contact the duty manager.", "请联系值班经理。"]] },
      { w: "speaking", ipa: "/ˈspiː.kɪŋ/", pos: "动词（现在分词）", cn: "（电话用语）讲话", memory: "① speak = 讲话；② speaking = 正在讲话。\n电话用语：This is [姓名/职位] speaking = 我是[姓名/职位]（在讲话）。\n这是电话自我介绍的标准格式。", phonics: "speak 读 /spiːk/，ing 读 /ɪŋ/。", collocations: [["this is ... speaking", "（电话用语）我是…"], ["speaking on the phone", "在打电话"]], examples: [["This is the engineer speaking.", "我是工程师（在讲话）。"], ["Hello, this is John speaking.", "你好，我是John。"]] },
    ],
    phrases: [
      { p: "this is ... speaking", ipa: "/ðɪs ɪz ... ˈspiː.kɪŋ/", cn: "（电话用语）我是…", why: "电话中的标准自我介绍格式。This is + 身份/姓名 + speaking。比 I am 更正式、更符合电话礼仪。" },
    ],
    grammar: [
      { q: "为什么用 This is ... speaking 而不是 I am？", a: "This is ... speaking = 电话标准用语（正式、专业）\nI am = 普通自我介绍（日常、面对面）\n✅ This is the duty manager speaking.（我是值班经理 → 电话中）\n✅ I am the duty manager.（我是值班经理 → 面对面）\n电话中用 This is ... speaking，这是英语电话礼仪的固定格式。" },
    ],
    pattern: "Hello, this is + 职位 + speaking",
    patternExamples: [
      { en: "Hello, this is the shift supervisor speaking.", cn: "你好，我是值班主管。", words: [{ w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }] },
      { en: "Hello, this is the operations engineer speaking.", cn: "你好，我是运维工程师。", words: [{ w: "operations", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }, { w: "engineer", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }] },
      { en: "Hello, this is the facility manager speaking.", cn: "你好，我是设施经理。", words: [] },
    ],
    thinking: "电话沟通是数据中心日常运营的重要环节。\n电话开场三要素：① 问候（Hello）→ ② 身份（this is ... speaking）→ ③ 目的（We have ...）。\n值班经理联系供应商时，第一句话必须清晰表明身份和职位，让对方知道沟通的层级和紧急程度。",
    pronunciation: "Hello 的 o 读 /oʊ/：/həˈloʊ/。\nduty 的 u 读 /juː/：/ˈdjuː.ti/。\nspeaking 的 ea 读长音 /iː/：/ˈspiː.kɪŋ/。\n节奏：HEL-lo ｜ THIS is ｜ the DA-ta CEN-ter ｜ DU-ty MAN-a-ger ｜ SPEAK-ing.",
    quiz: [
      { q: "电话中自我介绍'我是值班工程师'，怎么说？", a: "Hello, this is the duty engineer speaking." },
      { q: "电话中为什么用 This is ... speaking 而不是 I am？", a: "This is ... speaking 是英语电话礼仪的固定格式，比 I am 更正式、更专业。面对面用 I am，打电话用 This is ... speaking。" },
    ],
  },
  {
    id: 1802,
    en: "Are you the vendor engineer on duty today?",
    cn: "您是今天值班的供应商工程师吗？",
    ipa: "/ɑːr juː ðə ˈvɛn.dər ˈɛn.dʒɪ.nɪr ɒn ˈdjuː.ti təˈdeɪ/",
    tags: ["第1802句", "供应商沟通", "★★★★★"],
    when: "自我介绍后，确认对方身份——是否是今天值班的供应商工程师。确保跟对的人沟通，避免信息传达给非相关人员。",
    words: [
      { w: "vendor", ipa: "/ˈvɛn.dər/", pos: "名词", cn: "供应商；厂商", memory: "① vend = 出售（拉丁语 vendere）；② vendor = 出售者 → 供应商/厂商。\n数据中心常见供应商：UPS厂商、发电机厂商、空调厂商、消防厂商、IT厂商。", phonics: "ven 读 /vɛn/，dor 读 /dər/。注意 v 咬唇。", collocations: [["vendor engineer", "供应商工程师"], ["vendor support", "供应商支持"], ["vendor contact", "供应商联系人"]], examples: [["The vendor engineer is on the way.", "供应商工程师正在路上。"], ["Contact the vendor for support.", "联系供应商获取支持。"]] },
      { w: "on duty", ipa: "/ɒn ˈdjuː.ti/", pos: "介词短语", cn: "值班中", memory: "① on = 在…状态；② duty = 值班/职责。\non duty = 值班中（正在上班）。\noff duty = 下班（不在班）。", phonics: "on 读 /ɒn/，duty 读 /ˈdjuː.ti/。", collocations: [["on duty", "值班中"], ["off duty", "下班"], ["on duty manager", "值班经理"]], examples: [["Who is on duty today?", "今天谁值班？"], ["The engineer on duty is John.", "值班的工程师是John。"]] },
    ],
    phrases: [
      { p: "vendor engineer on duty", ipa: "/ˈvɛn.dər ˈɛn.dʒɪ.nɪr ɒn ˈdjuː.ti/", cn: "值班的供应商工程师", why: "vendor engineer = 供应商工程师；on duty = 值班中。确认对方是值班人员，确保沟通有效。" },
    ],
    grammar: [
      { q: "Are you ... ? 和 Is this ... ? 在电话中有什么区别？", a: "Are you ... ? = 你是…吗？（直接问对方身份）\nIs this ... ? = 这是…吗？（电话中更常用，this 指电话那头的人）\n✅ Are you the vendor engineer?（你是供应商工程师吗？）\n✅ Is this the vendor support line?（这是供应商支持热线吗？）\n两种都可以，面对面或视频通话用 Are you，纯电话中 Is this 更自然。" },
    ],
    pattern: "Are you the + 职位 + on duty + 时间?",
    patternExamples: [
      { en: "Are you the engineer on duty today?", cn: "你是今天值班的工程师吗？", words: [{ w: "engineer", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }] },
      { en: "Are you the supervisor on duty this week?", cn: "你是这周值班的主管吗？", words: [] },
      { en: "Are you the electrician on duty tonight?", cn: "你是今晚值班的电工吗？", words: [] },
    ],
    thinking: "电话沟通中确认对方身份非常重要。\n如果对方不是值班人员，可能需要：① 请对方转接值班工程师 ② 直接拨打值班手机 ③ 通过供应商调度中心联系。\n确认身份后再说明问题，避免信息泄露或传达错误。",
    pronunciation: "vendor 的 v 咬下唇：/ˈvɛn.dər/。\nengineer 的重音在最后音节：/ˈɛn.dʒɪˈnɪr/。\non duty 连读 /ɒn ˈdjuː.ti/。\n节奏：ARE you ｜ the VEN-dor EN-gi-NEER ｜ on DU-ty to-DAY?",
    quiz: [
      { q: "你是今天值班的电气工程师吗？", a: "Are you the electrical engineer on duty today?" },
      { q: "on duty 和 off duty 分别什么意思？", a: "on duty = 值班中（正在上班）；off duty = 下班（不在班）。数据中心通常两班倒：day shift（白班）和 night shift（夜班），随时都有人 on duty。" },
    ],
  },
  {
    id: 1803,
    en: "When will you arrive at the site?",
    cn: "您什么时候到现场？",
    ipa: "/wɛn wɪl juː əˈraɪv æt ðə saɪt/",
    tags: ["第1803句", "供应商沟通", "★★★★★"],
    when: "确认对方身份后，询问到达时间。对于严重告警，供应商到达时间是关键信息，需要据此安排现场等待和应急措施。",
    words: [
      { w: "arrive", ipa: "/əˈraɪv/", pos: "动词", cn: "到达", memory: "① ar- = 到（拉丁语 ad）；② rive = 河岸（拉丁语 ripa）。\narrive = 到达河岸 → 到达目的地。\narrive at + 小地点（site/office/airport）；arrive in + 大地点（city/country）。", phonics: "ar 读 /ə/，rive 读 /raɪv/，重音在第二音节。", collocations: [["arrive at the site", "到达现场"], ["arrive on time", "准时到达"], ["arrive shortly", "即将到达"]], examples: [["When will you arrive?", "你什么时候到？"], ["The engineer arrived at 3 PM.", "工程师下午3点到了。"]] },
      { w: "site", ipa: "/saɪt/", pos: "名词", cn: "现场；场地", memory: "① site = 场地/现场/站点。\n数据中心语境中 site = 数据中心现场/园区。\non-site = 在现场；off-site = 远程。", phonics: "s 读 /s/，ite 读 /aɪt/。注意 site 和 sight（视力）同音。", collocations: [["on site", "在现场"], ["site visit", "现场访问"], ["site manager", "现场经理"]], examples: [["Please come to the site immediately.", "请立刻到现场。"], ["The vendor is on site now.", "供应商现在在现场。"]] },
    ],
    phrases: [
      { p: "arrive at the site", ipa: "/əˈraɪv æt ðə saɪt/", cn: "到达现场", why: "arrive at + 地点 = 到达某处。site = 数据中心现场。问到达时间是供应商沟通的核心信息。" },
    ],
    grammar: [
      { q: "When will you arrive 和 What time will you arrive 有什么区别？", a: "When will you arrive = 你什么时候到？（泛指，可能是'半小时后'）\nWhat time will you arrive = 你几点到？（具体时间点，如'3:30 PM'）\n✅ When will you arrive at the site?（你什么时候到现场？→ 想知道大概多久）\n✅ What time will you arrive?（你几点到？→ 想知道精确时间）\n紧急情况下用 When，因为更关心'多久能到'而不是'几点几分到'。" },
    ],
    pattern: "When will you arrive at + 地点?",
    patternExamples: [
      { en: "When will you arrive at the building?", cn: "你什么时候到大楼？", words: [{ w: "building", ipa: "/ˈbɪldɪŋ/", cn: "建筑", phonics: "build 读 /bɪld/，ing 读 /ɪŋ/" }] },
      { en: "When will you arrive at the equipment room?", cn: "你什么时候到设备间？", words: [{ w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "When will the spare parts arrive?", cn: "备件什么时候到？", words: [] },
    ],
    thinking: "供应商到达时间直接影响应急决策：\n① 30分钟内到 → 现场等待，保持电话畅通\n② 1-2小时到 → 安排临时措施，定期更新\n③ 2小时以上 → 考虑备用供应商或远程指导\n记录到达时间，作为后续服务评估的依据。",
    pronunciation: "arrive 的重音在第二音节：/əˈraɪv/。\nat 的 a 读短音 /æ/：/æt/。\nsite 的 i 读长音 /aɪ/：/saɪt/。\n节奏：WHEN will you ar-RIVE ｜ at the SITE?",
    quiz: [
      { q: "备件什么时候到？", a: "When will the spare parts arrive?" },
      { q: "arrive at 和 arrive in 有什么区别？", a: "arrive at + 小地点（site/office/airport/building）；arrive in + 大地点（city/country）。数据中心用 arrive at the site。" },
    ],
  },
  {
    id: 1804,
    en: "How long will it take you to get here?",
    cn: "您到这里大约需要多久？",
    ipa: "/haʊ lɒŋ wɪl ɪt teɪk juː tuː ɡɛt hɪr/",
    tags: ["第1804句", "供应商沟通", "★★★★★"],
    when: "追问到达时间，用 how long 强调需要多长时间（而非几点几分）。这比 When will you arrive 更直接地询问路程耗时。",
    words: [
      { w: "how long", ipa: "/haʊ lɒŋ/", pos: "疑问短语", cn: "多长时间", memory: "① how = 如何/多少；② long = 长/久。\nhow long = 多长时间（询问时长）。\n区别于 how far（多远，询问距离）和 how often（多频繁，询问频率）。", phonics: "how 读 /haʊ/，long 读 /lɒŋ/。", collocations: [["how long will it take", "需要多久"], ["how long ago", "多久以前"], ["no matter how long", "不管多久"]], examples: [["How long will it take?", "需要多久？"], ["How long have you been working here?", "你在这里工作多久了？"]] },
      { w: "take", ipa: "/teɪk/", pos: "动词", cn: "花费（时间）", memory: "① take 本义 = 拿/取；② 时间语境 = 花费（时间）。\nIt takes + 时间 + to do = 做某事需要花费多长时间。", phonics: "t 读 /t/，ake 读 /eɪk/。", collocations: [["it takes time", "需要时间"], ["take long", "花很久"], ["take a while", "花一会儿"]], examples: [["It takes 30 minutes to get there.", "到那里需要30分钟。"], ["How long does it take?", "需要多久？"]] },
    ],
    phrases: [
      { p: "how long will it take", ipa: "/haʊ lɒŋ wɪl ɪt teɪk/", cn: "需要多长时间", why: "how long + will it take = 需要多久。It 是形式主语，真正的主语是后面的 to get here（到这里）。" },
    ],
    grammar: [
      { q: "How long will it take 和 When will you arrive 有什么不同？", a: "How long will it take = 需要多久？（问耗时，回答如 '30 minutes'）\nWhen will you arrive = 什么时候到？（问时间点，回答如 'at 3:30'）\n✅ How long will it take you to get here?（你到这里需要多久？→ 回答：About 30 minutes）\n✅ When will you arrive?（你什么时候到？→ 回答：At 3:30 PM）\n两个问题经常一起问，先问耗时再确认具体到达时间。" },
    ],
    pattern: "How long will it take + 人 + to + 动词?",
    patternExamples: [
      { en: "How long will it take to fix the issue?", cn: "修复这个问题需要多久？", words: [{ w: "issue", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
      { en: "How long will it take to replace the part?", cn: "更换零件需要多久？", words: [{ w: "replace", ipa: "/rɪˈpleɪs/", cn: "更换", phonics: "re 读 /rɪ/，place 读 /pleɪs/" }] },
      { en: "How long will it take you to finish?", cn: "你完成需要多久？", words: [] },
    ],
    thinking: "时间预估的追问策略：\n① When will you arrive?（什么时候到？）→ 得到时间点\n② How long will it take?（需要多久？）→ 得到耗时\n③ Is there any traffic?（有堵车吗？）→ 确认是否有延误因素\n三个问题组合使用，确保获得准确的时间信息。",
    pronunciation: "how 读 /haʊ/，ow 读 /aʊ/。\nlong 的 o 读短音 /ɒ/：/lɒŋ/。\ntake 的 a 读长音 /eɪ/：/teɪk/。\n节奏：HOW LONG ｜ will it TAKE you ｜ to GET HERE?",
    quiz: [
      { q: "修复这个问题需要多久？", a: "How long will it take to fix the issue?" },
      { q: "How long 和 How far 有什么区别？", a: "How long = 多长时间（问时长）；How far = 多远（问距离）。数据中心关心的是供应商到达需要多久（how long），而不是距离多远（how far）。" },
    ],
  },
  {
    id: 1805,
    en: "We have a critical alarm that requires your support.",
    cn: "我们有一条严重告警需要您的支持。",
    ipa: "/wiː hæv ə ˈkrɪt.ɪ.kəl əˈlɑːrm ðæt rɪˈkwaɪərz jɔːr səˈpɔːrt/",
    tags: ["第1805句", "供应商沟通", "★★★★★"],
    when: "确认对方身份和到达时间后，说明打电话的原因——有一条严重告警需要供应商支持。critical alarm 表明紧急程度，促使对方优先响应。",
    words: [
      { w: "critical", ipa: "/ˈkrɪt.ɪ.kəl/", pos: "形容词", cn: "严重的；关键的", memory: "① critic = 批评者；② critical = 批评的 → 关键的 → 严重的。\n告警分级中 critical = 最严重级别，表示可能导致服务中断或设备损坏。", phonics: "crit 读 /krɪt/，i 读 /ɪ/，cal 读 /kəl/，重音在第一音节。", collocations: [["critical alarm", "严重告警"], ["critical system", "关键系统"], ["critical issue", "严重问题"]], examples: [["We have a critical alarm on UPS-01.", "UPS-01有一条严重告警。"], ["This is a critical situation.", "这是紧急情况。"]] },
      { w: "requires", ipa: "/rɪˈkwaɪərz/", pos: "动词", cn: "需要；要求", memory: "① re- = 再/回；② quire = 寻求（拉丁语 quaerere）。\nrequire = 需要/要求（比 need 更正式，带有'必须'的含义）。\nrequires 是第三人称单数形式。", phonics: "re 读 /rɪ/，quire 读 /kwaɪər/，重音在第二音节。", collocations: [["requires support", "需要支持"], ["requires attention", "需要关注"], ["requires immediate action", "需要立即行动"]], examples: [["This issue requires your attention.", "这个问题需要您的关注。"], ["The repair requires special tools.", "维修需要专用工具。"]] },
    ],
    phrases: [
      { p: "requires your support", ipa: "/rɪˈkwaɪərz jɔːr səˈpɔːrt/", cn: "需要您的支持", why: "require + your + support = 需要您的支持。用 requires 而不是 needs，更正式、更强调紧迫性。" },
    ],
    grammar: [
      { q: "为什么用 that requires 而不是 which requires？", a: "that requires = 限制性定语从句（必须用 that，不能用逗号隔开）\nwhich requires = 非限制性定语从句（可以用 which，前面有逗号）\n✅ We have a critical alarm that requires your support.（我们有一条需要您支持的严重告警 → that 限定是哪条告警）\n✅ The alarm, which was triggered at 2 PM, requires attention.（这条告警在下午2点触发的，需要关注 → which 补充信息）\n口语中 that 和 which 经常混用，但书面语中 that 更常见于限制性从句。" },
    ],
    pattern: "We have a + 告警级别 + alarm that requires + 支持内容",
    patternExamples: [
      { en: "We have a warning alarm that requires your attention.", cn: "我们有一条警告告警需要您关注。", words: [{ w: "warning", ipa: "/ˈwɔːrnɪŋ/", cn: "警告", phonics: "warn 读 /wɔːrn/，ing 读 /ɪŋ/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "We have a critical issue that requires immediate action.", cn: "我们有一个严重问题需要立即处理。", words: [{ w: "critical", ipa: "/ˈkrɪtɪkəl/", cn: "严重", phonics: "crit 读 /krɪt/，ical 读 /ɪkəl/" }, { w: "issue", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
      { en: "We have an equipment failure that requires on-site repair.", cn: "我们有一个设备故障需要现场维修。", words: [{ w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }, { w: "repair", ipa: "/rɪˈpeər/", cn: "维修", phonics: "re 读 /rɪ/，pair 读 /peər/" }] },
    ],
    thinking: "向供应商描述问题时，必须包含三要素：\n① 告警级别（critical/warning）→ 决定紧急程度\n② 设备名称（UPS/Generator/CRAC）→ 决定需要哪个专业\n③ 需要支持（support/repair/replacement）→ 决定带什么工具和备件",
    pronunciation: "critical 的重音在第一音节：/ˈkrɪt.ɪ.kəl/。\nalarm 的重音在第二音节：/əˈlɑːrm/。\nrequires 的重音在第二音节：/rɪˈkwaɪərz/。\n节奏：We HAVE ｜ a CRIT-i-cal A-LARM ｜ that re-QUIRES ｜ your sup-PORT.",
    quiz: [
      { q: "我们有一个需要立即处理的严重问题，怎么说？", a: "We have a critical issue that requires immediate action." },
      { q: "requires 和 needs 有什么区别？", a: "requires = 需要/要求（更正式，带有'必须'的含义，常用于工作/法律场景）；needs = 需要（更通用，日常用语）。向供应商请求支持时用 requires，更正式更紧迫。" },
    ],
  },
  {
    id: 1806,
    en: "Can you come immediately?",
    cn: "您能马上过来吗？",
    ipa: "/kæn juː kʌm ɪˈmiː.di.ət.li/",
    tags: ["第1806句", "供应商沟通", "★★★★★"],
    when: "说明严重告警后，直接要求供应商马上到场。immediately 强调紧迫性，不等、不拖。",
    words: [
      { w: "immediately", ipa: "/ɪˈmiː.di.ət.li/", pos: "副词", cn: "立即；马上", memory: "① im- = 不；② mediate = 中间/调解；③ -ly = 副词后缀。\nimmediately = 不经过中间环节 → 立即/马上。\n比 right away 更正式，比 as soon as possible 更直接。", phonics: "im 读 /ɪ/，me 读 /miː/，di 读 /di/，ate 读 /ət/，ly 读 /li/，重音在第二音节。", collocations: [["come immediately", "马上过来"], ["respond immediately", "立即响应"], ["contact immediately", "立即联系"]], examples: [["Please come immediately.", "请马上过来。"], ["We need support immediately.", "我们需要立即支持。"]] },
    ],
    phrases: [
      { p: "come immediately", ipa: "/kʌm ɪˈmiː.di.ət.li/", cn: "马上过来", why: "come + immediately = 马上过来。紧急情况下最直接的请求，不需要委婉。" },
    ],
    grammar: [
      { q: "Can you come immediately 和 Could you come as soon as possible 有什么区别？", a: "Can you come immediately = 你能马上来吗？（直接、紧急）\nCould you come as soon as possible = 你能尽快来吗？（委婉、礼貌）\n✅ Can you come immediately?（你能马上过来吗？→ 严重告警，需要立刻到场）\n✅ Could you come as soon as possible?（你能尽快过来吗？→ 一般故障，越快越好）\n紧急程度决定用词：critical 用 immediately，非紧急用 as soon as possible。" },
    ],
    pattern: "Can you + 动词 + immediately?",
    patternExamples: [
      { en: "Can you respond immediately?", cn: "你能立即响应吗？", words: [{ w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Can you send an engineer immediately?", cn: "你能立即派工程师来吗？", words: [{ w: "engineer", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Can you start the repair immediately?", cn: "你能立即开始维修吗？", words: [{ w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }, { w: "repair", ipa: "/rɪˈpeər/", cn: "维修", phonics: "re 读 /rɪ/，pair 读 /peər/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
    ],
    thinking: "请求紧急程度用词分级：\n① immediately = 立即（最紧急，critical 告警）\n② as soon as possible = 尽快（紧急，但允许合理延迟）\n③ at your earliest convenience = 在您方便时尽早（不紧急，礼貌用语）\n④ when you have time = 有空时（完全不紧急）",
    pronunciation: "immediately 有四个音节，重音在第二音节：/ɪˈmiː.di.ət.li/。\n注意不要读成 /ɪˈmiː.djət.li/。\n节奏：CAN you ｜ COME ｜ im-ME-di-ate-ly?",
    quiz: [
      { q: "你能立即派工程师来吗？", a: "Can you send an engineer immediately?" },
      { q: "immediately 和 as soon as possible 哪个更紧急？", a: "immediately 更紧急，表示'立刻、马上、不等待'；as soon as possible（尽快）允许合理的时间安排。严重告警用 immediately，一般故障用 as soon as possible。" },
    ],
  },
  {
    id: 1807,
    en: "Please bring the required spare parts.",
    cn: "请带上需要的备件。",
    ipa: "/pliːz brɪŋ ðə rɪˈkwaɪəd spɛr pɑːrts/",
    tags: ["第1807句", "供应商沟通", "★★★★★"],
    when: "要求供应商到场时，同时提醒带上备件。没有备件到现场等于白跑一趟，浪费时间。",
    words: [
      { w: "spare parts", ipa: "/spɛr pɑːrts/", pos: "名词", cn: "备件；零配件", memory: "① spare = 备用的；② parts = 零件/部件。\nspare parts = 备件（用于替换损坏的零件）。\n数据中心常见备件：保险丝、继电器、风扇、控制板、电池模块。", phonics: "spare 读 /spɛr/，parts 读 /pɑːrts/。", collocations: [["spare parts", "备件"], ["spare parts inventory", "备件库存"], ["order spare parts", "订购备件"]], examples: [["Do you have the spare parts?", "你有备件吗？"], ["We need to order spare parts.", "我们需要订购备件。"]] },
      { w: "required", ipa: "/rɪˈkwaɪəd/", pos: "形容词", cn: "需要的；规定的", memory: "① require = 需要/要求；② required = 被要求的/需要的（过去分词作形容词）。\nthe required spare parts = 需要的备件（特指本次维修所需的特定备件）。", phonics: "re 读 /rɪ/，quired 读 /kwaɪəd/，重音在第二音节。", collocations: [["required parts", "需要的零件"], ["required documents", "需要的文件"], ["as required", "按要求"]], examples: [["Bring the required tools.", "带上需要的工具。"], ["All required documents are ready.", "所有需要的文件已准备好。"]] },
    ],
    phrases: [
      { p: "bring the required spare parts", ipa: "/brɪŋ ðə rɪˈkwaɪəd spɛr pɑːrts/", cn: "带上需要的备件", why: "bring + the required + spare parts = 带上需要的备件。the required 特指本次维修所需的备件，不是随便带。" },
    ],
    grammar: [
      { q: "bring 和 take 有什么区别？", a: "bring = 带来（朝说话人方向移动）\ntake = 带走（离开说话人方向移动）\n✅ Please bring the spare parts to the site.（请带备件到现场 → 到现场来，用 bring）\n✅ Please take the damaged parts back.（请把损坏的零件带回去 → 离开，用 take）\n电话中说 bring，因为你要对方'带来'你所在的地方。" },
    ],
    pattern: "Please bring the required + 物品",
    patternExamples: [
      { en: "Please bring the required tools.", cn: "请带上需要的工具。", words: [] },
      { en: "Please bring the required documents.", cn: "请带上需要的文件。", words: [] },
      { en: "Please bring the required testing equipment.", cn: "请带上需要的测试设备。", words: [{ w: "testing", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }, { w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }] },
    ],
    thinking: "备件提醒是供应商沟通的重要环节。\n常见备件沟通流程：\n① 告知故障设备型号 → ② 供应商判断需要什么备件 → ③ 确认备件是否库存 → ④ 如果没有，确认备件到货时间。\n提前沟通备件可以避免供应商到场后才发现缺少零件。",
    pronunciation: "spare 的 a 读 /ɛ/：/spɛr/。\nparts 的 ar 读 /ɑːr/：/pɑːrts/。\nrequired 重音在第二音节：/rɪˈkwaɪəd/。\n节奏：Please BRING ｜ the re-QUIRED ｜ SPARE PARTS.",
    quiz: [
      { q: "请带上需要的工具，怎么说？", a: "Please bring the required tools." },
      { q: "bring 和 take 有什么区别？", a: "bring = 带来（朝说话人方向移动，到你这来）；take = 带走（离开说话人方向移动）。电话中要求供应商带东西到现场，用 bring。" },
    ],
  },
  {
    id: 1808,
    en: "Please bring your testing equipment.",
    cn: "请带上您的测试设备。",
    ipa: "/pliːz brɪŋ jɔːr ˈtɛs.tɪŋ ɪˈkwɪp.mənt/",
    tags: ["第1808句", "供应商沟通", "★★★★★"],
    when: "除了备件，还提醒供应商带上测试设备。某些故障需要专业仪器（万用表、红外热像仪、网络分析仪等）才能诊断和验证。",
    words: [
      { w: "testing", ipa: "/ˈtɛs.tɪŋ/", pos: "名词/形容词", cn: "测试", memory: "① test = 测试/检验；② testing = 测试（名词）/测试用的（形容词）。\ntesting equipment = 测试设备/检测仪器。", phonics: "test 读 /tɛst/，ing 读 /ɪŋ/。", collocations: [["testing equipment", "测试设备"], ["testing tools", "测试工具"], ["testing procedure", "测试流程"]], examples: [["Bring your testing equipment.", "带上你的测试设备。"], ["The testing results are normal.", "测试结果正常。"]] },
      { w: "equipment", ipa: "/ɪˈkwɪp.mənt/", pos: "名词", cn: "设备；装备", memory: "① equip = 装备/配备；② -ment = 名词后缀。\nequipment = 设备/装备（不可数名词，不加 s）。\n注意：equipment 是不可数名词，不能说 equipments。", phonics: "e 读 /ɪ/，quip 读 /kwɪp/，ment 读 /mənt/，重音在第二音节。", collocations: [["testing equipment", "测试设备"], ["safety equipment", "安全设备"], ["electrical equipment", "电气设备"]], examples: [["All equipment is operating normally.", "所有设备运行正常。"], ["We need special equipment for this repair.", "这个维修需要专用设备。"]] },
    ],
    phrases: [
      { p: "testing equipment", ipa: "/ˈtɛs.tɪŋ ɪˈkwɪp.mənt/", cn: "测试设备", why: "testing + equipment = 测试设备。数据中心常见测试设备：万用表、钳形电流表、红外热像仪、网络测试仪、电能质量分析仪。" },
    ],
    grammar: [
      { q: "equipment 为什么不能加 s？", a: "equipment 是不可数名词（uncountable noun），表示'设备'的总称，不加 s。\n✅ Please bring your testing equipment.（请带上你的测试设备）\n❌ Please bring your testing equipments.（错误！）\n如果要表示'一件设备'，用 a piece of equipment。\n类似的不可数名词：information（信息）、furniture（家具）、software（软件）。" },
    ],
    pattern: "Please bring your + 设备/工具",
    patternExamples: [
      { en: "Please bring your safety tools.", cn: "请带上你的安全工具。", words: [{ w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }] },
      { en: "Please bring your laptop for diagnostics.", cn: "请带上你的笔记本电脑做诊断。", words: [] },
      { en: "Please bring your calibration tools.", cn: "请带上你的校准工具。", words: [] },
    ],
    thinking: "常见数据中心测试设备：\n① 万用表（multimeter）→ 测量电压/电流/电阻\n② 红外热像仪（thermal camera）→ 检查过热点\n③ 电能质量分析仪（power quality analyzer）→ 检查电源质量\n④ 网络测试仪（network tester）→ 检查网络连接\n⑤ 振动分析仪（vibration analyzer）→ 检查机械振动\n根据故障类型提醒供应商带对应的测试设备。",
    pronunciation: "equipment 的重音在第二音节：/ɪˈkwɪp.mənt/。\n注意 qu 读 /kw/，不是 /k/。\ntesting 的重音在第一音节：/ˈtɛs.tɪŋ/。\n节奏：Please BRING ｜ your TEST-ing ｜ e-QUIP-ment.",
    quiz: [
      { q: "请带上你的校准工具，怎么说？", a: "Please bring your calibration tools." },
      { q: "equipment 能加 s 吗？", a: "不能。equipment 是不可数名词，表示'设备'的总称，不加 s。一件设备 = a piece of equipment；多件设备 = pieces of equipment。类似不可数名词：information、furniture、software。" },
    ],
  },
  {
    id: 1809,
    en: "Please register at the security gate first.",
    cn: "请先到门岗登记。",
    ipa: "/pliːz ˈrɛdʒ.ɪ.stər æt ðə sɪˈkjʊr.ɪ.ti ɡeɪt fɜːrst/",
    tags: ["第1809句", "供应商沟通", "★★★★★"],
    when: "供应商到达后，第一步必须到门岗登记。数据中心是高安全等级场所，所有外来人员必须登记身份信息才能进入。",
    words: [
      { w: "register", ipa: "/ˈrɛdʒ.ɪ.stər/", pos: "动词", cn: "登记；注册", memory: "① re- = 再；② gister = 携带（拉丁语 gerere）。\nregister = 再次携带信息 → 登记/注册。\n数据中心访客登记包括：姓名、公司、目的、进入时间、离开时间。", phonics: "reg 读 /rɛdʒ/，is 读 /ɪ/，ter 读 /tər/，重音在第一音节。", collocations: [["register at the gate", "在门岗登记"], ["visitor registration", "访客登记"], ["register your ID", "登记你的证件"]], examples: [["Please register at the reception.", "请在前台登记。"], ["All visitors must register.", "所有访客必须登记。"]] },
      { w: "security gate", ipa: "/sɪˈkjʊr.ɪ.ti ɡeɪt/", pos: "名词", cn: "门岗；安检口", memory: "① security = 安全/安保；② gate = 大门/门岗。\nsecurity gate = 安保门岗，是数据中心的第一道防线。\n访客必须在 security gate 出示证件、登记信息、获取访客证。", phonics: "security 读 /sɪˈkjʊr.ɪ.ti/，gate 读 /ɡeɪt/。", collocations: [["security gate", "门岗"], ["security guard", "保安"], ["security check", "安检"]], examples: [["Please go to the security gate first.", "请先去门岗。"], ["The security guard will check your ID.", "保安会检查你的证件。"]] },
    ],
    phrases: [
      { p: "register at the security gate", ipa: "/ˈrɛdʒ.ɪ.stər æt ðə sɪˈkjʊr.ɪ.ti ɡeɪt/", cn: "在门岗登记", why: "register + at + the security gate = 在门岗登记。first 强调这是第一步，不能跳过。" },
    ],
    grammar: [
      { q: "first 放在句尾和句首有什么区别？", a: "Please register first.（请先登记 → first 在句尾，强调动作顺序）\nFirst, please register.（首先，请登记 → first 在句首，强调步骤编号）\n✅ Please register at the security gate first.（请先到门岗登记 → 告诉对方第一步做什么）\n✅ First, please register at the security gate.（第一步，请到门岗登记 → 列举步骤时用）\n口语中两种都可以，句尾更自然。" },
    ],
    pattern: "Please register at + 地点 + first",
    patternExamples: [
      { en: "Please register at the reception first.", cn: "请先到前台登记。", words: [] },
      { en: "Please register at the main entrance first.", cn: "请先到主入口登记。", words: [] },
      { en: "Please register at the visitor center first.", cn: "请先到访客中心登记。", words: [] },
    ],
    thinking: "数据中心访客管理流程：\n① 门岗登记（本句）→ ② 白名单确认（1270）→ ③ 证件检查（1271）→ ④ 门禁卡发放（1272）→ ⑤ 值班经理接引（1274）→ ⑥ 陪同进入（1275）。\n每个步骤都有安全管控要求，不能跳过。",
    pronunciation: "register 的重音在第一音节：/ˈrɛdʒ.ɪ.stər/。\nsecurity 的重音在第二音节：/sɪˈkjʊr.ɪ.ti/。\nfirst 的 ir 读 /ɜːr/：/fɜːrst/。\n节奏：Please REG-is-ter ｜ at the se-CU-ri-ty GATE ｜ FIRST.",
    quiz: [
      { q: "请先到前台登记，怎么说？", a: "Please register at the reception first." },
      { q: "数据中心访客管理有哪些步骤？", a: "① 门岗登记 → ② 白名单确认 → ③ 证件检查 → ④ 门禁卡发放 → ⑤ 值班经理接引 → ⑥ 陪同进入设备区。每个步骤都有安全管控要求。" },
    ],
  },
  {
    id: 1810,
    en: "Your name has already been added to the whitelist.",
    cn: "您的名字已经加入白名单。",
    ipa: "/jɔːr neɪm hæz ɔːlˈrɛd.i biːn ˈæd.ɪd tuː ðə ˈwaɪt.lɪst/",
    tags: ["第1810句", "供应商沟通", "★★★★★"],
    when: "告知供应商其名字已在白名单中，门岗会放行。白名单（whitelist）是预审批的访客名单，提前添加可以加速入场流程。",
    words: [
      { w: "whitelist", ipa: "/ˈwaɪt.lɪst/", pos: "名词", cn: "白名单", memory: "① white = 白色（允许）；② list = 名单。\nwhitelist = 白名单（预先批准的访客/供应商名单）。\n黑名单 = blacklist（禁止进入的名单）。\n在白名单上的人员可以快速通过门岗。", phonics: "white 读 /waɪt/，list 读 /lɪst/。", collocations: [["whitelist", "白名单"], ["add to the whitelist", "加入白名单"], ["remove from the whitelist", "从白名单移除"]], examples: [["Your name is on the whitelist.", "你的名字在白名单上。"], ["Please add the vendor to the whitelist.", "请把供应商加入白名单。"]] },
      { w: "added", ipa: "/ˈæd.ɪd/", pos: "动词（过去分词）", cn: "已添加", memory: "① add = 添加；② added = 已添加（过去分词）。\nhas been added = 已经被添加（现在完成被动语态）。\n表示动作已完成，结果有效。", phonics: "add 读 /æd/，ed 读 /ɪd/。", collocations: [["added to", "添加到"], ["newly added", "新添加的"], ["has been added", "已经被添加"]], examples: [["Your name has been added.", "你的名字已经添加了。"], ["The item was added to the list.", "该项目已添加到列表中。"]] },
    ],
    phrases: [
      { p: "added to the whitelist", ipa: "/ˈæd.ɪd tuː ðə ˈwaɪt.lɪst/", cn: "加入白名单", why: "add + to + the whitelist = 添加到白名单。has already been added 是现在完成被动语态，强调'已经完成了'。" },
    ],
    grammar: [
      { q: "has been added 是什么时态和语态？", a: "has been added = 现在完成时 + 被动语态。\n① 现在完成时（has been）→ 动作发生在过去，但对现在有影响\n② 被动语态（been added）→ 主语是动作的接受者\n✅ Your name has already been added.（你的名字已经被添加了 → 强调结果：现在名单上有了你的名字）\n✅ I added your name.（我添加了你的名字 → 主动语态，强调谁做的）" },
    ],
    pattern: "Your + 信息 + has already been + 过去分词",
    patternExamples: [
      { en: "Your access has already been approved.", cn: "你的访问权限已经批准了。", words: [{ w: "access", ipa: "/ˈæksɛs/", cn: "门禁", phonics: "ac 读 /æk/，cess 读 /sɛs/" }] },
      { en: "Your request has already been submitted.", cn: "你的申请已经提交了。", words: [] },
      { en: "Your appointment has already been confirmed.", cn: "你的预约已经确认了。", words: [{ w: "confirmed", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }] },
    ],
    thinking: "白名单管理是数据中心安全的重要环节。\n白名单通常包含：姓名、公司、证件号码、有效期、进入区域。\n提前添加白名单的好处：① 加速入场 ② 减少门岗沟通时间 ③ 确保紧急情况时供应商能快速进入。",
    pronunciation: "whitelist 的 wh 读 /w/：/ˈwaɪt.lɪst/。\nalready 的重音在第二音节：/ɔːlˈrɛd.i/。\nbeen 读 /biːn/（强读）或 /bɪn/（弱读）。\n节奏：Your NAME ｜ has AL-read-y been AD-ded ｜ to the WHITE-list.",
    quiz: [
      { q: "你的访问权限已经批准了，怎么说？", a: "Your access has already been approved." },
      { q: "whitelist 和 blacklist 分别什么意思？", a: "whitelist = 白名单（预先批准可以进入的人员名单）；blacklist = 黑名单（禁止进入的人员名单）。在白名单上的人员可以快速通过门岗。" },
    ],
  },
  {
    id: 1811,
    en: "Please show your passport at the entrance.",
    cn: "请在入口出示护照。",
    ipa: "/pliːz ʃoʊ jɔːr ˈpæs.pɔːrt æt ðə ˈɛn.trəns/",
    tags: ["第1811句", "供应商沟通", "★★★★★"],
    when: "告知供应商在入口需要出示护照（或身份证）进行身份验证。马来西亚数据中心的访客可能是外籍工程师，护照是最常用的身份证件。",
    words: [
      { w: "passport", ipa: "/ˈpæs.pɔːrt/", pos: "名词", cn: "护照", memory: "① pass = 通过；② port = 港口。\npassport = 通过港口的证件 → 护照。\n数据中心访客常用证件：护照（passport）、身份证（ID card）、工作证（work permit）。", phonics: "pass 读 /pæs/，port 读 /pɔːrt/。", collocations: [["show your passport", "出示护照"], ["passport number", "护照号码"], ["passport copy", "护照复印件"]], examples: [["Please show your passport.", "请出示你的护照。"], ["I need a copy of your passport.", "我需要你的护照复印件。"]] },
      { w: "entrance", ipa: "/ˈɛn.trəns/", pos: "名词", cn: "入口", memory: "① enter = 进入；② -ance = 名词后缀。\nentrance = 入口（进入的地方）。\nexit = 出口（反义词）。", phonics: "en 读 /ɛn/，trance 读 /trəns/，重音在第一音节。", collocations: [["at the entrance", "在入口"], ["main entrance", "主入口"], ["entrance gate", "入口大门"]], examples: [["Please wait at the entrance.", "请在入口等待。"], ["The main entrance is on the left.", "主入口在左边。"]] },
    ],
    phrases: [
      { p: "show your passport at the entrance", ipa: "/ʃoʊ jɔːr ˈpæs.pɔːrt æt ðə ˈɛn.trəns/", cn: "在入口出示护照", why: "show + your passport + at the entrance = 在入口出示护照。门岗保安会核对护照信息与白名单是否一致。" },
    ],
    grammar: [
      { q: "show 和 present 在出示证件时有什么区别？", a: "show = 出示/展示（通用，口语化）\npresent = 出示/呈递（更正式，常用于官方场合）\n✅ Please show your passport.（请出示你的护照 → 日常用语）\n✅ Please present your identification.（请出示您的证件 → 正式用语）\n电话沟通中用 show，更自然。书面通知或正式场合用 present。" },
    ],
    pattern: "Please show your + 证件 + at + 地点",
    patternExamples: [
      { en: "Please show your ID card at the gate.", cn: "请在门岗出示身份证。", words: [] },
      { en: "Please show your work permit at the reception.", cn: "请在前台出示工作证。", words: [] },
      { en: "Please show your access badge at the checkpoint.", cn: "请在检查站出示门禁证。", words: [{ w: "access", ipa: "/ˈæksɛs/", cn: "门禁", phonics: "ac 读 /æk/，cess 读 /sɛs/" }] },
    ],
    thinking: "身份证件验证是安全管控的关键步骤。\n常见证件类型：\n① 护照（passport）→ 外籍工程师\n② 身份证（ID card / MyKad）→ 马来西亚本地工程师\n③ 工作证（work permit）→ 外籍长期工作人员\n④ 公司证件（company ID）→ 供应商公司发放的证件",
    pronunciation: "passport 的重音在第一音节：/ˈpæs.pɔːrt/。\nentrance 的重音在第一音节：/ˈɛn.trəns/。\n注意 entrance（名词）和 entrance（动词，迷住）发音不同。\n节奏：Please SHOW ｜ your PASS-port ｜ at the EN-trance.",
    quiz: [
      { q: "请在门岗出示身份证，怎么说？", a: "Please show your ID card at the gate." },
      { q: "show 和 present 在出示证件时有什么区别？", a: "show = 出示（通用，口语化，电话中常用）；present = 出示/呈递（更正式，官方场合用）。电话沟通用 show，书面通知用 present。" },
    ],
  },
  {
    id: 1812,
    en: "Your access card will be ready when you arrive.",
    cn: "您到达后门禁卡就会准备好。",
    ipa: "/jɔːr ˈæk.sɛs kɑːrd wɪl biː ˈrɛd.i wɛn juː əˈraɪv/",
    tags: ["第1812句", "供应商沟通", "★★★★★"],
    when: "告知供应商门禁卡（access card）已提前准备好，到达后可以直接领取使用。这减少了现场等待时间。",
    words: [
      { w: "access card", ipa: "/ˈæk.sɛs kɑːrd/", pos: "名词", cn: "门禁卡", memory: "① access = 进入/访问权限；② card = 卡片。\naccess card = 门禁卡（用于进入受控区域的电子卡片）。\n数据中心门禁卡通常分级：公共区域卡、设备区域卡、核心区域卡。", phonics: "access 读 /ˈæk.sɛs/，card 读 /kɑːrd/。", collocations: [["access card", "门禁卡"], ["access control", "门禁控制"], ["access level", "访问级别"]], examples: [["Your access card is ready.", "你的门禁卡准备好了。"], ["Please return the access card when you leave.", "离开时请归还门禁卡。"]] },
      { w: "ready", ipa: "/ˈrɛd.i/", pos: "形容词", cn: "准备好的", memory: "① ready = 准备好的/就绪的。\nwill be ready = 将会准备好（将来时，表示到达时已经准备完毕）。", phonics: "read 读 /rɛd/，y 读 /i/。", collocations: [["will be ready", "将会准备好"], ["ready to use", "可以使用"], ["ready for inspection", "准备好检查"]], examples: [["Everything is ready.", "一切准备好了。"], ["The equipment will be ready by noon.", "设备中午前会准备好。"]] },
    ],
    phrases: [
      { p: "access card will be ready", ipa: "/ˈæk.sɛs kɑːrd wɪl biː ˈrɛd.i/", cn: "门禁卡将准备好", why: "access card + will be ready = 门禁卡会准备好。when you arrive 是时间状语从句，表示'当你到达时'。" },
    ],
    grammar: [
      { q: "when you arrive 中为什么用现在时 arrive 而不是将来时 will arrive？", a: "时间状语从句（when/after/before/until 引导）中，即使表示将来的动作，也用现在时。\n✅ Your access card will be ready when you arrive.（你到达时门禁卡会准备好 → when 从句用 arrive，不用 will arrive）\n❌ Your access card will be ready when you will arrive.（错误！）\n这是英语语法的重要规则：时间从句中不用将来时。" },
    ],
    pattern: "Your + 物品 + will be ready when you + 动词",
    patternExamples: [
      { en: "Your tools will be ready when you arrive.", cn: "你的工具到达时会准备好。", words: [] },
      { en: "Your badge will be ready when you check in.", cn: "你的胸卡登记时会准备好。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "The room will be ready when you need it.", cn: "你需要时房间会准备好。", words: [{ w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
    ],
    thinking: "提前准备门禁卡的好处：\n① 减少供应商在门岗等待时间\n② 避免临时制卡延误\n③ 确保门禁权限已正确配置（区域、时段）\n值班经理通常在通知供应商后，立即联系安保部门准备门禁卡。",
    pronunciation: "access 的重音在第一音节：/ˈæk.sɛs/。\ncard 的 ar 读 /ɑːr/：/kɑːrd/。\nready 的 ea 读 /ɛ/：/ˈrɛd.i/。\n节奏：Your AC-cess CARD ｜ will be READ-y ｜ WHEN you ar-RIVE.",
    quiz: [
      { q: "你的工具到达时会准备好，怎么说？", a: "Your tools will be ready when you arrive." },
      { q: "when you arrive 中为什么不用 will arrive？", a: "英语语法规定：时间状语从句（when/after/before/until 引导）中，即使表示将来的动作，也用现在时。所以 when you arrive（正确），不用 when you will arrive（错误）。" },
    ],
  },
  {
    id: 1813,
    en: "Please call me when you arrive.",
    cn: "到达后请给我打电话。",
    ipa: "/pliːz kɔːl miː wɛn juː əˈraɪv/",
    tags: ["第1813句", "供应商沟通", "★★★★★"],
    when: "要求供应商到达后第一时间联系你，这样你可以亲自去门岗接引，避免供应商在门口无人接待。",
    words: [
      { w: "call", ipa: "/kɔːl/", pos: "动词", cn: "打电话", memory: "① call = 呼叫/打电话。\ncall me = 给我打电话。\n比 phone me 更口语化，比 ring me 更通用（ring 英式用法）。", phonics: "c 读 /k/，all 读 /ɔːl/。", collocations: [["call me", "给我打电话"], ["call back", "回电"], ["call for help", "求助"]], examples: [["Please call me when you arrive.", "到了给我打电话。"], ["I will call you back in 5 minutes.", "我5分钟后回电。"]] },
    ],
    phrases: [
      { p: "call me when you arrive", ipa: "/kɔːl miː wɛn juː əˈraɪv/", cn: "到达后给我打电话", why: "call + me + when you arrive = 到达后给我打电话。when 引导时间状语从句，表示'当…的时候'。" },
    ],
    grammar: [
      { q: "call me 和 give me a call 有什么区别？", a: "call me = 给我打电话（简洁直接）\ngive me a call = 给我打个电话（稍微更礼貌/口语化）\n✅ Please call me when you arrive.（到了给我打电话 → 直接指令）\n✅ Please give me a call when you arrive.（到了给我打个电话 → 稍微更客气）\n两种都可以，工作场景中 call me 更简洁高效。" },
    ],
    pattern: "Please call me when you + 动作",
    patternExamples: [
      { en: "Please call me when you finish.", cn: "完成后请给我打电话。", words: [] },
      { en: "Please call me when the repair is done.", cn: "维修完成后请给我打电话。", words: [{ w: "repair", ipa: "/rɪˈpeər/", cn: "维修", phonics: "re 读 /rɪ/，pair 读 /peər/" }] },
      { en: "Please call me when you leave the site.", cn: "离开现场时请给我打电话。", words: [{ w: "site", ipa: "/saɪt/", cn: "场地", phonics: "site 读 /saɪt/" }] },
    ],
    thinking: "到达通知是供应商管理的重要环节。\n供应商到达后，值班经理需要：\n① 亲自到门岗接引 → ② 确认身份和白名单 → ③ 发放门禁卡 → ④ 陪同进入设备区 → ⑤ 安全交底。\n提前告知'到了打电话'可以确保这个流程顺畅。",
    pronunciation: "call 的 a 读长音 /ɔː/：/kɔːl/。\nwhen 的 wh 读 /w/：/wɛn/。\narrive 的重音在第二音节：/əˈraɪv/。\n节奏：Please CALL ME ｜ WHEN you ar-RIVE.",
    quiz: [
      { q: "维修完成后请给我打电话，怎么说？", a: "Please call me when the repair is done." },
      { q: "call me 和 give me a call 有什么区别？", a: "call me = 给我打电话（简洁直接）；give me a call = 给我打个电话（稍微更礼貌）。工作场景中 call me 更简洁高效。" },
    ],
  },
  {
    id: 1814,
    en: "I will meet you at the reception.",
    cn: "我会在前台接您。",
    ipa: "/aɪ wɪl miːt juː æt ðə rɪˈsɛp.ʃən/",
    tags: ["第1814句", "供应商沟通", "★★★★★"],
    when: "告诉供应商你会亲自到前台（reception）接他。这表示重视，也确保供应商不会独自在大楼内走动。",
    words: [
      { w: "meet", ipa: "/miːt/", pos: "动词", cn: "接；会面", memory: "① meet = 遇见/接人/会面。\nmeet you at the reception = 在前台接你。\n注意：meet 不只是'遇见'，也有'去接'的意思（主动去某个地点等人）。", phonics: "m 读 /m/，ee 读 /iː/，t 读 /t/。", collocations: [["meet at the reception", "在前台接"], ["meet in person", "亲自见面"], ["meet the deadline", "赶上截止日期"]], examples: [["I will meet you at the gate.", "我在门岗接你。"], ["Let's meet at 3 PM.", "我们下午3点见面。"]] },
      { w: "reception", ipa: "/rɪˈsɛp.ʃən/", pos: "名词", cn: "前台；接待处", memory: "① re- = 再/回；② cept = 拿/取（拉丁语 capere）；③ -ion = 名词后缀。\nreception = 接待处/前台（接待访客的地方）。\n数据中心的前台通常在主入口附近，负责访客登记和引导。", phonics: "re 读 /rɪ/，cep 读 /sɛp/，tion 读 /ʃən/，重音在第二音节。", collocations: [["at the reception", "在前台"], ["reception desk", "接待台"], ["reception area", "接待区"]], examples: [["Please wait at the reception.", "请在前台等待。"], ["The reception is on the ground floor.", "前台在一楼。"]] },
    ],
    phrases: [
      { p: "meet you at the reception", ipa: "/miːt juː æt ðə rɪˈsɛp.ʃən/", cn: "在前台接你", why: "meet + you + at the reception = 在前台接你。I will meet you 表示主动去接，不是碰巧遇到。" },
    ],
    grammar: [
      { q: "I will meet you 和 I will see you 有什么区别？", a: "I will meet you = 我会去接你/和你会面（主动去某个地点）\nI will see you = 我会见到你（更通用，不一定去接）\n✅ I will meet you at the reception.（我在前台接你 → 主动去前台等你）\n✅ I will see you later.（稍后见 → 通用告别用语）\n接引访客用 meet，因为表示'主动去某个地点等人'。" },
    ],
    pattern: "I will meet you at + 地点",
    patternExamples: [
      { en: "I will meet you at the main entrance.", cn: "我在主入口接你。", words: [] },
      { en: "I will meet you at the security gate.", cn: "我在门岗接你。", words: [{ w: "security", ipa: "/sɪˈkjʊrɪti/", cn: "安防", phonics: "se 读 /sɪ/，curity 读 /kjʊrɪti/" }] },
      { en: "I will meet you at the parking lot.", cn: "我在停车场接你。", words: [] },
    ],
    thinking: "接引供应商体现了专业的访客管理。\n值班经理亲自接引的好处：\n① 确保安全管控（不让外来人员独自进入）\n② 加快入场速度（避免门岗反复确认）\n③ 建立良好关系（显示重视和尊重）\n④ 现场交代安全注意事项",
    pronunciation: "meet 的 ee 读长音 /iː/：/miːt/。\nreception 的重音在第二音节：/rɪˈsɛp.ʃən/。\n节奏：I will MEET you ｜ at the re-CEP-tion.",
    quiz: [
      { q: "我在门岗接你，怎么说？", a: "I will meet you at the security gate." },
      { q: "meet 和 see 在'见面'语境中有什么区别？", a: "meet = 去接/会面（主动去某个地点等人）；see = 见到（更通用，不一定去接）。接引访客用 meet，表示'主动去前台/门岗等人'。" },
    ],
  },
  {
    id: 1815,
    en: "We will escort you to the equipment room.",
    cn: "我们会陪同您进入设备间。",
    ipa: "/wiː wɪl ɪˈskɔːrt juː tuː ðə ɪˈkwɪp.mənt ruːm/",
    tags: ["第1815句", "供应商沟通", "★★★★★"],
    when: "告诉供应商会有人陪同（escort）他进入设备区域。数据中心安全规定：外来人员不得独自在设备区域活动，必须有内部人员全程陪同。",
    words: [
      { w: "escort", ipa: "/ɪˈskɔːrt/", pos: "动词", cn: "陪同；护送", memory: "① es- = 出（拉丁语 ex）；② cort = 队伍（拉丁语 cohors）。\nescort = 陪同/护送（确保安全地从一个地方到另一个地方）。\n数据中心安全规定：所有访客必须由内部人员 escort 进入设备区域。", phonics: "es 读 /ɪ/，cort 读 /skɔːrt/，重音在第二音节。", collocations: [["escort to", "陪同到"], ["escort service", "陪同服务"], ["security escort", "安保陪同"]], examples: [["We will escort you to the server room.", "我们陪同你去服务器机房。"], ["All visitors must be escorted.", "所有访客必须有人陪同。"]] },
      { w: "equipment room", ipa: "/ɪˈkwɪp.mənt ruːm/", pos: "名词", cn: "设备间", memory: "① equipment = 设备；② room = 房间。\nequipment room = 设备间（放置设备的专用房间）。\n常见设备间：UPS room（UPS间）、MV room（中压配电室）、generator room（发电机房）。", phonics: "equipment 读 /ɪˈkwɪp.mənt/，room 读 /ruːm/。", collocations: [["equipment room", "设备间"], ["electrical room", "配电间"], ["mechanical room", "机械间"]], examples: [["The equipment room is on Level 1.", "设备间在一楼。"], ["Access to the equipment room is restricted.", "设备间限制进入。"]] },
    ],
    phrases: [
      { p: "escort you to the equipment room", ipa: "/ɪˈskɔːrt juː tuː ðə ɪˈkwɪp.mənt ruːm/", cn: "陪同你到设备间", why: "escort + you + to + 地点 = 陪同你到某处。数据中心安全规定要求全程陪同，不能让访客单独行动。" },
    ],
    grammar: [
      { q: "escort 和 accompany 有什么区别？", a: "escort = 陪同/护送（强调安全管控，有'护送到目的地'的含义）\naccompany = 陪伴（强调同行，更通用/礼貌）\n✅ We will escort you to the equipment room.（我们陪同你到设备间 → 安全管控场景）\n✅ I will accompany you to the meeting room.（我陪你去会议室 → 一般陪同）\n数据中心安全语境用 escort，因为有安全管控的含义。" },
    ],
    pattern: "We will escort you to + 地点",
    patternExamples: [
      { en: "We will escort you to the UPS room.", cn: "我们陪同你去UPS间。", words: [{ w: "escort", ipa: "/ɪˈskɔːrt/", cn: "陪同", phonics: "es 读 /ɪs/，cort 读 /kɔːrt/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "We will escort you to the data hall.", cn: "我们陪同你去数据机房。", words: [{ w: "escort", ipa: "/ɪˈskɔːrt/", cn: "陪同", phonics: "es 读 /ɪs/，cort 读 /kɔːrt/" }, { w: "data", ipa: "/ˈdeɪtə/", cn: "数据", phonics: "da 读 /deɪ/，ta 读 /tə/" }] },
      { en: "We will escort you to the generator area.", cn: "我们陪同你去发电机区域。", words: [{ w: "escort", ipa: "/ɪˈskɔːrt/", cn: "陪同", phonics: "es 读 /ɪs/，cort 读 /kɔːrt/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "area", ipa: "/ˈeəriə/", cn: "区域", phonics: "a 读 /eə/，rea 读 /riə/" }] },
    ],
    thinking: "陪同制度是数据中心安全的基本要求。\n陪同人员的职责：\n① 确保访客只进入授权区域\n② 监督访客的操作行为\n③ 防止拍照/录像（如有限制）\n④ 紧急情况时引导访客撤离\n⑤ 记录访客的进出时间",
    pronunciation: "escort 的重音在第二音节：/ɪˈskɔːrt/。\nequipment 的重音在第二音节：/ɪˈkwɪp.mənt/。\nroom 的 oo 读长音 /uː/：/ruːm/。\n节奏：We will es-CORT you ｜ to the e-QUIP-ment ROOM.",
    quiz: [
      { q: "我们陪同你去数据机房，怎么说？", a: "We will escort you to the data hall." },
      { q: "escort 和 accompany 有什么区别？", a: "escort = 陪同/护送（强调安全管控，有'护送到目的地'的含义，数据中心安全场景用）；accompany = 陪伴（强调同行，更通用/礼貌，一般场景用）。" },
    ],
  },
  {
    id: 1816,
    en: "Please review the PTW before starting work.",
    cn: "开始工作前请阅读作业许可证。",
    ipa: "/pliːz rɪˈvjuː ðə ˌpiː tiː ˈdʌb.əl.juː bɪˈfɔːr ˈstɑːr.tɪŋ wɜːrk/",
    tags: ["第1816句", "供应商沟通", "★★★★★"],
    when: "供应商进入设备间后，开始工作前必须阅读并签署作业许可证（PTW）。PTW 是高风险作业的安全管控文件，包含风险评估和安全措施。",
    words: [
      { w: "PTW", ipa: "/ˌpiː tiː ˈdʌb.əl.juː/", pos: "名词", cn: "作业许可证", memory: "PTW = Permit to Work（作业许可证）。\n高风险作业（带电作业、高空作业、热工作业）必须有 PTW。\nPTW 包含：作业内容、风险评估、安全措施、审批签字、有效时间。", phonics: "逐字母读 P-T-W：/ˌpiː tiː ˈdʌb.əl.juː/。不要读成单词。", collocations: [["PTW approval", "PTW审批"], ["PTW document", "PTW文件"], ["issue a PTW", "签发PTW"]], examples: [["Please sign the PTW before starting.", "开始前请签署PTW。"], ["The PTW has been approved.", "PTW已获批准。"]] },
      { w: "review", ipa: "/rɪˈvjuː/", pos: "动词", cn: "审核；阅读", memory: "① re- = 再；② view = 看。\nreview = 再看一遍 → 审核/审阅。\nreview the PTW = 审核作业许可证（仔细阅读并确认内容）。", phonics: "re 读 /rɪ/，view 读 /vjuː/，重音在第二音节。", collocations: [["review the document", "审核文件"], ["review the procedure", "审核流程"], ["under review", "审核中"]], examples: [["Please review the safety plan.", "请审核安全计划。"], ["The document is under review.", "文件正在审核中。"]] },
    ],
    phrases: [
      { p: "review the PTW", ipa: "/rɪˈvjuː ðə ˌpiː tiː ˈdʌb.əl.juː/", cn: "审核作业许可证", why: "review + the PTW = 审核作业许可证。before starting work 强调必须在开工前完成审核。" },
    ],
    grammar: [
      { q: "before starting work 中为什么用 starting 而不是 start？", a: "before 在此处是介词，后面必须接名词或动名词（-ing 形式）。\n✅ before starting work（开始工作前 → before + 动名词）\n✅ before you start work（你开始工作前 → before + 从句）\n❌ before start work（错误！before 后不能接动词原形）\n两种正确形式：before starting work 或 before you start work。" },
    ],
    pattern: "Please review the + 文件 + before + 动名词",
    patternExamples: [
      { en: "Please review the MOP before starting the operation.", cn: "开始操作前请审核MOP。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "starting", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }, { w: "operation", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }] },
      { en: "Please review the safety plan before entering.", cn: "进入前请审核安全计划。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }] },
      { en: "Please review the drawings before installation.", cn: "安装前请审核图纸。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
    ],
    thinking: "PTW（作业许可证）是数据中心安全管理的核心文件。\nPTW 类型：\n① 电气作业许可证（Electrical PTW）→ 带电作业/断电作业\n② 热工作业许可证（Hot Work PTW）→ 焊接/切割\n③ 高空作业许可证（Working at Height PTW）→ 高处作业\n④ 密闭空间作业许可证（Confined Space PTW）→ 水箱/管道\n每种高风险作业都有对应的 PTW 要求。",
    pronunciation: "PTW 逐字母读 P-T-W：/ˌpiː tiː ˈdʌb.əl.juː/。\nreview 的重音在第二音节：/rɪˈvjuː/。\nbefore 的重音在第二音节：/bɪˈfɔːr/。\n节奏：Please re-VIEW ｜ the P-T-W ｜ be-FORE ｜ START-ing WORK.",
    quiz: [
      { q: "进入前请审核安全计划，怎么说？", a: "Please review the safety plan before entering." },
      { q: "PTW 代表什么？有哪些类型？", a: "PTW = Permit to Work（作业许可证）。常见类型：电气作业PTW、热工作业PTW、高空作业PTW、密闭空间PTW。每种高风险作业都有对应的PTW要求。" },
    ],
  },
  {
    id: 1817,
    en: "Please attend the safety briefing first.",
    cn: "请先参加安全交底。",
    ipa: "/pliːz əˈtɛnd ðə ˈseɪf.ti ˈbriː.fɪŋ fɜːrst/",
    tags: ["第1817句", "供应商沟通", "★★★★★"],
    when: "在开始工作前，供应商必须参加安全交底（safety briefing）。安全交底告知现场风险、应急程序、安全规定等。",
    words: [
      { w: "attend", ipa: "/əˈtɛnd/", pos: "动词", cn: "参加；出席", memory: "① at- = 到（拉丁语 ad）；② tend = 伸展/注意（拉丁语 tendere）。\nattend = 到场注意 → 参加/出席。\n比 join 更正式，强调'到场参与'。", phonics: "at 读 /ə/，tend 读 /tɛnd/，重音在第二音节。", collocations: [["attend the meeting", "参加会议"], ["attend the briefing", "参加交底"], ["attend the training", "参加培训"]], examples: [["Please attend the safety briefing.", "请参加安全交底。"], ["All workers must attend the induction.", "所有工人必须参加入职培训。"]] },
      { w: "safety briefing", ipa: "/ˈseɪf.ti ˈbriː.fɪŋ/", pos: "名词", cn: "安全交底", memory: "① safety = 安全；② briefing = 简报/交底。\nsafety briefing = 安全交底（向工作人员说明现场安全风险和注意事项）。\n通常在开工前进行，由值班经理或安全员主持。", phonics: "safety 读 /ˈseɪf.ti/，briefing 读 /ˈbriː.fɪŋ/。", collocations: [["safety briefing", "安全交底"], ["pre-work briefing", "工前交底"], ["daily briefing", "每日交底"]], examples: [["The safety briefing takes 10 minutes.", "安全交底需要10分钟。"], ["Please attend the briefing before starting.", "开始前请参加交底。"]] },
    ],
    phrases: [
      { p: "attend the safety briefing", ipa: "/əˈtɛnd ðə ˈseɪf.ti ˈbriː.fɪŋ/", cn: "参加安全交底", why: "attend + the safety briefing = 参加安全交底。first 强调这是开工前的必要步骤。" },
    ],
    grammar: [
      { q: "attend 和 join 在'参加'语境中有什么区别？", a: "attend = 出席/参加（正式，强调到场）\njoin = 加入/参加（更口语化，强调成为一部分）\n✅ Please attend the safety briefing.（请参加安全交底 → 正式，强调必须到场）\n✅ Please join the meeting.（请加入会议 → 更口语化，强调参与）\n安全交底用 attend，因为强调'到场参加'这个义务。" },
    ],
    pattern: "Please attend the + 活动 + first",
    patternExamples: [
      { en: "Please attend the induction training first.", cn: "请先参加入职培训。", words: [] },
      { en: "Please attend the site tour first.", cn: "请先参加现场参观。", words: [{ w: "site", ipa: "/saɪt/", cn: "场地", phonics: "site 读 /saɪt/" }] },
      { en: "Please attend the risk assessment first.", cn: "请先参加风险评估。", words: [] },
    ],
    thinking: "安全交底（safety briefing）通常包含以下内容：\n① 现场风险识别（电气、高空、化学品等）\n② 个人防护用品要求（PPE）\n③ 应急逃生路线\n④ 紧急联系方式\n⑤ 现场禁止行为（拍照、吸烟等）\n⑥ 作业区域限制\n交底后通常需要签字确认。",
    pronunciation: "attend 的重音在第二音节：/əˈtɛnd/。\nsafety 的重音在第一音节：/ˈseɪf.ti/。\nbriefing 的重音在第一音节：/ˈbriː.fɪŋ/。\n节奏：Please at-TEND ｜ the SAFE-ty BRIEF-ing ｜ FIRST.",
    quiz: [
      { q: "请先参加风险评估，怎么说？", a: "Please attend the risk assessment first." },
      { q: "安全交底通常包含哪些内容？", a: "① 现场风险识别 ② PPE要求 ③ 应急逃生路线 ④ 紧急联系方式 ⑤ 现场禁止行为 ⑥ 作业区域限制。交底后通常需要签字确认。" },
    ],
  },
  {
    id: 1818,
    en: "Please wear all required PPE.",
    cn: "请穿戴所有规定的个人防护用品。",
    ipa: "/pliːz wɛr ɔːl rɪˈkwaɪəd ˌpiː piː ˈiː/",
    tags: ["第1818句", "供应商沟通", "★★★★★"],
    when: "提醒供应商必须穿戴所有规定的个人防护用品（PPE）。数据中心常见的PPE包括安全帽、安全鞋、护目镜、绝缘手套等。",
    words: [
      { w: "PPE", ipa: "/ˌpiː piː ˈiː/", pos: "名词", cn: "个人防护用品", memory: "PPE = Personal Protective Equipment（个人防护用品）。\n数据中心常见PPE：安全帽（hard hat）、安全鞋（safety shoes）、护目镜（safety glasses）、绝缘手套（insulated gloves）、耳塞（ear plugs）、反光背心（reflective vest）。", phonics: "逐字母读 P-P-E：/ˌpiː piː ˈiː/。不要读成单词。", collocations: [["wear PPE", "穿戴PPE"], ["PPE requirements", "PPE要求"], ["PPE inspection", "PPE检查"]], examples: [["Please wear all required PPE.", "请穿戴所有规定的PPE。"], ["PPE must be worn at all times.", "PPE必须随时穿戴。"]] },
      { w: "wear", ipa: "/wɛr/", pos: "动词", cn: "穿戴", memory: "① wear = 穿戴/佩戴。\nwear PPE = 穿戴个人防护用品。\n注意 wear 是状态（穿着），put on 是动作（穿上）。", phonics: "w 读 /w/，ear 读 /ɛr/。", collocations: [["wear PPE", "穿戴PPE"], ["wear safety glasses", "戴护目镜"], ["wear a hard hat", "戴安全帽"]], examples: [["Please wear your safety shoes.", "请穿上安全鞋。"], ["All workers must wear hard hats.", "所有工人必须戴安全帽。"]] },
    ],
    phrases: [
      { p: "wear all required PPE", ipa: "/wɛr ɔːl rɪˈkwaɪəd ˌpiː piː ˈiː/", cn: "穿戴所有规定的PPE", why: "wear + all + required + PPE = 穿戴所有规定的个人防护用品。all 强调'全部'，不能少穿任何一件。" },
    ],
    grammar: [
      { q: "wear 和 put on 有什么区别？", a: "wear = 穿戴（状态，表示正在穿着）\nput on = 穿上（动作，表示穿的动作）\n✅ Please wear your safety shoes.（请穿安全鞋 → 要求保持穿着状态）\n✅ Please put on your safety shoes.（请穿上安全鞋 → 要求执行穿的动作）\n安全规定中用 wear，因为强调的是'保持穿戴状态'，不只是'穿上'这个动作。" },
    ],
    pattern: "Please wear + 防护装备",
    patternExamples: [
      { en: "Please wear your hard hat.", cn: "请戴安全帽。", words: [] },
      { en: "Please wear safety glasses in this area.", cn: "请在此区域戴护目镜。", words: [{ w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }, { w: "area", ipa: "/ˈeəriə/", cn: "区域", phonics: "a 读 /eə/，rea 读 /riə/" }] },
      { en: "Please wear insulated gloves for electrical work.", cn: "电气作业请戴绝缘手套。", words: [{ w: "electrical", ipa: "/ɪˈlɛktrɪkəl/", cn: "电气", phonics: "e 读 /ɪ/，lectrical 读 /lɛktrɪkəl/" }] },
    ],
    thinking: "数据中心常见PPE要求：\n① 安全帽（hard hat）→ 所有设备区域\n② 安全鞋（safety shoes）→ 所有设备区域\n③ 护目镜（safety glasses）→ 电气作业/化学品区域\n④ 绝缘手套（insulated gloves）→ 带电作业\n⑤ 耳塞（ear plugs）→ 发电机房/冷水机组区域\n⑥ 反光背心（reflective vest）→ 室外区域/施工区域\n根据作业类型选择对应的PPE。",
    pronunciation: "PPE 逐字母读 P-P-E：/ˌpiː piː ˈiː/。\nwear 的 ea 读 /ɛ/：/wɛr/。\nrequired 的重音在第二音节：/rɪˈkwaɪəd/。\n节奏：Please WEAR ｜ ALL re-QUIRED ｜ P-P-E.",
    quiz: [
      { q: "电气作业请戴绝缘手套，怎么说？", a: "Please wear insulated gloves for electrical work." },
      { q: "wear 和 put on 有什么区别？", a: "wear = 穿戴（状态，保持穿着）；put on = 穿上（动作，穿的过程）。安全规定用 wear，强调'保持穿戴状态'。" },
    ],
  },
  {
    id: 1819,
    en: "Please let us know if you need any assistance.",
    cn: "如果需要帮助，请随时告诉我们。",
    ipa: "/pliːz lɛt ʌs noʊ ɪf juː niːd ˈɛn.i əˈsɪs.təns/",
    tags: ["第1819句", "供应商沟通", "★★★★★"],
    when: "安全交底和PPE检查完成后，表达友好的支持态度。让供应商知道如果需要任何帮助可以随时找你们。",
    words: [
      { w: "let us know", ipa: "/lɛt ʌs noʊ/", pos: "动词短语", cn: "告诉我们", memory: "① let = 让；② us = 我们；③ know = 知道。\nlet us know = 让我们知道 → 告诉我们/通知我们。\n这是英语中非常常用的表达，比 tell us 更礼貌。", phonics: "let 读 /lɛt/，us 读 /ʌs/，know 读 /noʊ/。", collocations: [["let us know", "告诉我们"], ["please let me know", "请告诉我"], ["let them know", "通知他们"]], examples: [["Please let us know if you need help.", "如果需要帮助请告诉我们。"], ["Let me know when you are ready.", "准备好了告诉我。"]] },
      { w: "assistance", ipa: "/əˈsɪs.təns/", pos: "名词", cn: "帮助；协助", memory: "① as- = 到（拉丁语 ad）；② sist = 站（拉丁语 sistere）；③ -ance = 名词后缀。\nassistance = 站到旁边 → 帮助/协助。\n比 help 更正式，常用于专业/商务场景。", phonics: "as 读 /ə/，sis 读 /sɪs/，tance 读 /təns/，重音在第二音节。", collocations: [["need assistance", "需要帮助"], ["technical assistance", "技术协助"], ["provide assistance", "提供帮助"]], examples: [["Do you need any assistance?", "你需要帮助吗？"], ["We provide 24/7 technical assistance.", "我们提供24/7技术协助。"]] },
    ],
    phrases: [
      { p: "let us know if you need any assistance", ipa: "/lɛt ʌs noʊ ɪf juː niːd ˈɛn.i əˈsɪs.təns/", cn: "如果需要帮助请告诉我们", why: "let us know + if 条件句 = 如果…请告诉我们。这是一种礼貌的支持表达，让对方感到被关心。" },
    ],
    grammar: [
      { q: "let us know 和 tell us 有什么区别？", a: "let us know = 让我们知道（更礼貌、更委婉）\ntell us = 告诉我们（更直接）\n✅ Please let us know if you need help.（如果需要帮助请告诉我们 → 礼貌）\n✅ Please tell us what happened.（请告诉我们发生了什么 → 直接）\n服务场景中用 let us know，更友好、更专业。" },
    ],
    pattern: "Please let us know if you need + 支持内容",
    patternExamples: [
      { en: "Please let us know if you need any tools.", cn: "如果需要任何工具请告诉我们。", words: [] },
      { en: "Please let us know if you need access to other areas.", cn: "如果需要进入其他区域请告诉我们。", words: [{ w: "access", ipa: "/ˈæksɛs/", cn: "门禁", phonics: "ac 读 /æk/，cess 读 /sɛs/" }, { w: "areas", ipa: "/ˈeəriə/", cn: "区域", phonics: "a 读 /eə/，rea 读 /riə/" }] },
      { en: "Please let us know if you have any questions.", cn: "如果有任何问题请告诉我们。", words: [] },
    ],
    thinking: "表达支持态度是供应商关系管理的重要环节。\n友好的支持表达可以：\n① 建立良好的工作关系\n② 让供应商感到被尊重和重视\n③ 鼓励供应商在遇到困难时主动沟通\n④ 减少因沟通不畅导致的安全风险",
    pronunciation: "let 的 e 读短音 /ɛ/：/lɛt/。\nassistance 的重音在第二音节：/əˈsɪs.təns/。\nany 读 /ˈɛn.i/。\n节奏：Please LET us KNOW ｜ IF you NEED ｜ AN-y as-SIS-tance.",
    quiz: [
      { q: "如果有任何问题请告诉我们，怎么说？", a: "Please let us know if you have any questions." },
      { q: "assistance 和 help 有什么区别？", a: "assistance = 帮助/协助（更正式，专业/商务场景用）；help = 帮助（更通用，日常用语）。服务场景中用 assistance 更专业。" },
    ],
  },
  {
    id: 1820,
    en: "Thank you for your prompt support.",
    cn: "感谢您的快速支持。",
    ipa: "/θæŋk juː fɔːr jɔːr prɑːmpt səˈpɔːrt/",
    tags: ["第1820句", "供应商沟通", "★★★★★"],
    when: "供应商沟通结束时的感谢用语。prompt 强调感谢对方的'快速响应'，这是数据中心对供应商最看重的品质。",
    words: [
      { w: "prompt", ipa: "/prɑːmpt/", pos: "形容词", cn: "快速的；及时的", memory: "① prompt = 快速的/及时的/迅速的。\nprompt support = 快速支持（强调响应速度快）。\n比 fast/quick 更正式、更专业。", phonics: "pr 读 /pr/，ompt 读 /ɑːmpt/。注意 p 不发音在词首的 pt 组合中。", collocations: [["prompt support", "快速支持"], ["prompt response", "快速响应"], ["prompt action", "及时行动"]], examples: [["Thank you for your prompt response.", "感谢你的快速响应。"], ["We appreciate your prompt action.", "我们感谢你的及时行动。"]] },
      { w: "support", ipa: "/səˈpɔːrt/", pos: "名词", cn: "支持；支援", memory: "① sup- = 从下面（拉丁语 sub）；② port = 携带（拉丁语 portare）。\nsupport = 从下面支撑 → 支持/支援。\n供应商 support 包括：技术支持、现场维修、远程指导、备件供应。", phonics: "sup 读 /sə/，port 读 /pɔːrt/，重音在第二音节。", collocations: [["technical support", "技术支持"], ["vendor support", "供应商支持"], ["24/7 support", "全天候支持"]], examples: [["We need your support.", "我们需要你的支持。"], ["Thank you for your support.", "感谢你的支持。"]] },
    ],
    phrases: [
      { p: "prompt support", ipa: "/prɑːmpt səˈpɔːrt/", cn: "快速支持", why: "prompt + support = 快速支持。Thank you for your prompt support 是感谢供应商快速响应的标准用语。" },
    ],
    grammar: [
      { q: "Thank you for + 名词 和 Thank you for + 动名词 有什么区别？", a: "Thank you for + 名词 = 感谢某物/某事\nThank you for + 动名词 = 感谢做了某事\n✅ Thank you for your prompt support.（感谢你的快速支持 → 名词）\n✅ Thank you for coming so quickly.（感谢你这么快赶来 → 动名词）\n两种都正确，选择取决于你想感谢的是'事物'还是'行为'。" },
    ],
    pattern: "Thank you for your + 形容词 + 名词",
    patternExamples: [
      { en: "Thank you for your quick response.", cn: "感谢你的快速响应。", words: [{ w: "thank", ipa: "/θæŋk/", cn: "感谢", phonics: "th 读 /θ/，ank 读 /æŋk/" }] },
      { en: "Thank you for your professional service.", cn: "感谢你的专业服务。", words: [{ w: "thank", ipa: "/θæŋk/", cn: "感谢", phonics: "th 读 /θ/，ank 读 /æŋk/" }] },
      { en: "Thank you for your continued support.", cn: "感谢你的持续支持。", words: [{ w: "thank", ipa: "/θæŋk/", cn: "感谢", phonics: "th 读 /θ/，ank 读 /æŋk/" }, { w: "support", ipa: "/səˈpɔːrt/", cn: "支持", phonics: "sup 读 /sə/，port 读 /pɔːrt/" }] },
    ],
    thinking: "供应商沟通的完整流程回顾：\n① 自我介绍（1261）→ ② 确认对方身份（1262）→ ③ 询问到达时间（1263-1264）→ ④ 说明问题（1265）→ ⑤ 要求紧急到场（1266）→ ⑥ 提醒带备件和工具（1267-1268）→ ⑦ 入场流程（1269-1275）→ ⑧ 安全要求（1276-1278）→ ⑨ 表达支持（1279）→ ⑩ 感谢（本句）。\n每次供应商沟通都应该遵循这个流程，确保信息传达完整、安全管控到位。",
    pronunciation: "prompt 的 o 读 /ɑː/：/prɑːmpt/。\nsupport 的重音在第二音节：/səˈpɔːrt/。\n节奏：THANK you ｜ for your PROMPT ｜ sup-PORT.",
    quiz: [
      { q: "感谢你的快速响应，怎么说？", a: "Thank you for your quick response." },
      { q: "prompt 和 fast/quick 有什么区别？", a: "prompt = 快速的/及时的（更正式、更专业，强调'按时、不拖延'）；fast/quick = 快的（更通用、更口语化）。感谢供应商用 prompt，更专业。" },
    ],
  },
];

// EXPORTS: MOCK_SENTENCES_PART7B

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART7B: ISentence[] = [
  {
    id: 196,
    en: "Who is assigned to supervise today's work?",
    cn: "今天由谁负责现场随工监督？",
    ipa: "/huː ɪz əˈsaɪnd tə suːˈpɜːrvz təˈdeɪz wɜːrk/",
    tags: ["第196句", "随工监督", "★★★★★"],
    when: "白名单和门禁确认后，交班人需要明确随工监督的责任人。这是施工安全的核心环节，每项施工都必须有专人全程监督。",
    words: [
      { w: "assigned", ipa: "/əˈsaɪnd/", pos: "动词(过去分词)", cn: "被分配；被指派", memory: "① assign = 分配/指派；② assigned = 被分配的（被动语态）。\n指上级把任务分配给某人，比 tell 更正式。\n对比：assign = 分配（任务），appoint = 任命（职位）。", phonics: "as 读 /ə/，signed 读 /saɪnd/，重音在第二音节。", collocations: [["be assigned to", "被分配去…"], ["assign a task", "分配任务"], ["assign someone", "指派某人"]], examples: [["Who is assigned to this project?", "谁被分配负责这个项目？"], ["You are assigned to night shift.", "你被安排值夜班。"]] },
      { w: "supervise", ipa: "/ˈsuː.pər.vaɪz/", pos: "动词", cn: "监督；看管", memory: "① super- = 上面，vise = 看 → 从上面看着 → 监督。\nsupervise 在数据中心语境 = 随工监督，即全程陪同承包商施工并监控安全。\nnoun: supervision（监督），supervisor（监督人/随工）。", phonics: "su 读 /suː/，per 读 /pər/，vise 读 /vaɪz/，重音在第一音节。", collocations: [["supervise the work", "监督施工"], ["supervise the contractor", "监督承包商"], ["supervise maintenance", "监督维护"]], examples: [["Who will supervise the vendor today?", "今天谁负责监督供应商？"], ["I supervised the UPS maintenance.", "我负责了UPS维护的随工监督。"]] },
    ],
    phrases: [
      { p: "is assigned to supervise", ipa: "/ɪz əˈsaɪnd tə suːˈpɜːrvz/", cn: "被指派去监督", why: "be assigned to + 动词 = 被分配去做某事。supervise 在这里指随工监督，是数据中心运维的专用术语，不是泛指'管理'。" },
    ],
    grammar: [
      { q: "Who is assigned 和 Who will supervise 有什么区别？", a: "Who is assigned to supervise = 谁被指派去监督（已经安排好了，确认是谁）\nWho will supervise = 谁会监督（未来时，可能还没安排）\n交接时问 'Who is assigned' 是因为排班已经定好，需要确认交接对象。\n如果还没安排，才问 'Who will supervise'。" },
    ],
    pattern: "Who + is assigned + to + 动词 + 时间/范围",
    patternExamples: [
      { en: "Who is assigned to cover the night shift?", cn: "谁被安排值夜班？", words: [{ w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }] },
      { en: "Who is assigned to handle the escalation?", cn: "谁被指派处理这次升级？", words: [{ w: "handle", ipa: "/ˈhændl/", cn: "处理", phonics: "han 读 /hæn/，dle 读 /dl/" }] },
      { en: "Who is assigned to inspect the fire system?", cn: "谁被安排检查消防系统？", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
    ],
    thinking: "随工监督是数据中心施工安全的核心要求。\n交接时必须明确：① 谁监督什么施工 ② 监督人是否已在现场 ③ 是否全程陪同。\n英语中 'supervise' 在运维语境 ≈ 随工，不是日常意义上的'管理/领导'。",
    pronunciation: "assigned 的 gn 不发音，直接读 /saɪnd/。\nsupervise 的 per 弱读 /pər/，不要读成 /pɛr/。\n节奏：WHO is as-SIGNED ｜ to su-per-VISE ｜ to-DAY'S WORK?",
    quiz: [
      { q: "谁被安排监督今天的消防检查？", a: "Who is assigned to supervise today's fire protection inspection?" },
      { q: "supervise 在数据中心语境指什么？", a: "随工监督——全程陪同承包商施工并监控安全，不是泛指管理。noun: supervision（监督）、supervisor（随工/监督人）。" },
    ],
  },
  {
    id: 197,
    en: "David will supervise the UPS maintenance.",
    cn: "David 将负责UPS维护的现场监督。",
    ipa: "/ˈdeɪ.vɪd wɪl suːˈpɜːrvz ðə ˈʌps ˈmeɪn.tən.əns/",
    tags: ["第197句", "随工监督", "★★★★★"],
    when: "回答上一个问题，逐项确认每项施工的随工监督人。先说UPS维护的监督人。",
    words: [
      { w: "maintenance", ipa: "/ˈmeɪn.tən.əns/", pos: "名词", cn: "维护；保养", memory: "① maintain = 维护/保养（动词）；② maintenance = 维护/保养（名词）。\n注意拼写：maintain → maintenance（不是 maintainance）。\n数据中心常见：preventive maintenance（预防性维护）、corrective maintenance（纠正性维护）。", phonics: "main 读 /meɪn/，ten 读 /tən/，ance 读 /əns/，重音在第一音节。", collocations: [["UPS maintenance", "UPS维护"], ["preventive maintenance", "预防性维护"], ["maintenance schedule", "维护计划"]], examples: [["The UPS maintenance starts at 2 PM.", "UPS维护下午2点开始。"], ["We schedule maintenance quarterly.", "我们按季度安排维护。"]] },
    ],
    phrases: [
      { p: "will supervise the UPS maintenance", ipa: "/wɪl suːˈpɜːrvz ðə ˈʌps ˈmeɪn.tən.əns/", cn: "将负责UPS维护的现场监督", why: "will + supervise + the + 设备 + maintenance = 将负责某设备的维护监督。UPS maintenance 是数据中心最常见的维护项目之一。" },
    ],
    grammar: [
      { q: "David will supervise 和 David is supervising 有什么区别？", a: "will supervise = 将要监督（还没开始，交代安排）\nis supervising = 正在监督（已经在现场执行）\n交接时：\n✅ David will supervise the UPS maintenance.（安排告知，维护还没开始）\n✅ David is supervising the UPS maintenance right now.（当前状态，维护正在进行）" },
    ],
    pattern: "人名 + will supervise + the + 设备/系统 + maintenance",
    patternExamples: [
      { en: "John will supervise the generator test.", cn: "John 将负责发电机测试的监督。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "Lisa will supervise the CRAC filter replacement.", cn: "Lisa 将负责精密空调滤网更换的监督。", words: [{ w: "filter", ipa: "/ˈfɪltər/", cn: "过滤器", phonics: "fil 读 /fɪl/，ter 读 /tər/" }, { w: "replacement", ipa: "/rɪˈpleɪs/", cn: "更换", phonics: "re 读 /rɪ/，place 读 /pleɪs/" }] },
      { en: "Mike will supervise the fire drill.", cn: "Mike 将负责消防演练的监督。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }] },
    ],
    thinking: "交接随工监督时，按施工项目逐项确认监督人：\n① UPS维护 → David\n② CRAC维护 → Alex\n③ 变压器检查 → …\n确保每项施工都有明确的监督责任人。",
    pronunciation: "UPS 逐字母读：/juː-piː-ɛs/。\nmaintenance 三音节，重音在第一音节：/ˈmeɪn.tən.əns/。\n节奏：DA-vid ｜ will su-per-VISE ｜ the UPS MAIN-te-nance.",
    quiz: [
      { q: "Sarah 将负责消防系统检查的监督，怎么说？", a: "Sarah will supervise the fire protection inspection." },
      { q: "maintenance 的正确拼写是什么？", a: "m-a-i-n-t-e-n-a-n-c-e。注意不是 maintainance。动词 maintain → 名词 maintenance。" },
    ],
  },
  {
    id: 198,
    en: "Alex will supervise the CRAC maintenance.",
    cn: "Alex 将负责CRAC维护的现场监督。",
    ipa: "/ˈæl.ɪks wɪl suːˈpɜːrvz ðə kræk ˈmeɪn.tən.əns/",
    tags: ["第198句", "随工监督", "★★★★★"],
    when: "确认完UPS维护监督人后，继续确认下一项——CRAC（精密空调）维护的监督人。",
    words: [
      { w: "CRAC", ipa: "/kræk/", pos: "缩写", cn: "精密空调（Computer Room Air Conditioning）", memory: "① CRAC = Computer Room Air Conditioning = 机房精密空调。\n② 发音同 crack（裂缝），/kræk/。\n数据中心温控核心设备，维护频率高（滤网更换、制冷剂检查、压缩机检测）。", phonics: "读作一个单词 /kræk/，不是逐字母 C-R-A-C。", collocations: [["CRAC maintenance", "精密空调维护"], ["CRAC unit", "精密空调机组"], ["CRAC filter", "精密空调滤网"]], examples: [["The CRAC unit is showing high return temperature.", "精密空调回风温度偏高。"], ["CRAC maintenance is scheduled for this afternoon.", "精密空调维护安排在下午。"]] },
    ],
    phrases: [
      { p: "the CRAC maintenance", ipa: "/ðə kræk ˈmeɪn.tən.əns/", cn: "精密空调维护", why: "CRAC 在口语中读 /kræk/（同 crack），不逐字母念。CRAC maintenance 包括滤网清洗、制冷剂压力检测、风机轴承润滑等。" },
    ],
    grammar: [
      { q: "这句话和第197句结构一样，为什么重复？", a: "交接时需要逐项确认，每个施工项目都要单独说明监督人：\n✅ David will supervise the UPS maintenance.（UPS维护 → David）\n✅ Alex will supervise the CRAC maintenance.（CRAC维护 → Alex）\n逐项列出确保没有遗漏，不是冗余。" },
    ],
    pattern: "人名 + will supervise + the + 设备缩写 + maintenance",
    patternExamples: [
      { en: "Tom will supervise the PDU maintenance.", cn: "Tom 将负责PDU维护的监督。", words: [{ w: "pdu", ipa: "/ˌpiːˈdiːˈjuː/", cn: "配电单元", phonics: "P-D-U 逐字母读" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "Jenny will supervise the BMS calibration.", cn: "Jenny 将负责BMS校准的监督。", words: [{ w: "bms", ipa: "/ˌbiːˈɛmˈɛs/", cn: "楼控", phonics: "B-M-S 逐字母读" }] },
      { en: "Kevin will supervise the generator load test.", cn: "Kevin 将负责发电机负载测试的监督。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
    ],
    thinking: "逐项确认随工监督人，确保每项施工都有专人负责。\nUPS和CRAC是数据中心最高频的两项维护，监督人通常是运维团队的资深工程师。",
    pronunciation: "Alex 的 x 读 /ks/：/ˈæl.ɪks/。\nCRAC 读 /kræk/，不是逐字母。\n节奏：A-lex ｜ will su-per-VISE ｜ the CRAC MAIN-te-nance.",
    quiz: [
      { q: "Kevin 将负责PDU维护的监督，怎么说？", a: "Kevin will supervise the PDU maintenance." },
      { q: "CRAC 怎么读？全称是什么？", a: "CRAC 读 /kræk/（同 crack），不逐字母。全称 Computer Room Air Conditioning（机房精密空调）。" },
    ],
  },
  {
    id: 199,
    en: "Please stay with the contractor during the entire maintenance.",
    cn: "请在整个维护过程中全程随工监督。",
    ipa: "/pliːz steɪ wɪð ðə kənˈtræk.tər ˈdʊr.ɪŋ ðə ɪnˈtaɪər ˈmeɪn.tən.əns/",
    tags: ["第199句", "随工监督", "★★★★★"],
    when: "确认完监督人后，强调随工监督的核心要求——全程陪同，不能离开。",
    words: [
      { w: "entire", ipa: "/ɪnˈtaɪər/", pos: "形容词", cn: "整个的；全部的", memory: "① entire = 完整的/全部的，强调从头到尾没有遗漏。\n② the entire maintenance = 整个维护过程（从开始到结束）。\n比 all 更强调完整性：all the maintenance = 所有维护（可能指多项），the entire maintenance = 整个维护（一项的完整过程）。", phonics: "en 读 /ɪn/，tire 读 /taɪər/，重音在第二音节。", collocations: [["the entire process", "整个过程"], ["the entire shift", "整个班次"], ["entire maintenance", "整个维护"]], examples: [["Stay here for the entire day.", "在这里待一整天。"], ["I reviewed the entire log.", "我检查了整份日志。"]] },
      { w: "during", ipa: "/ˈdʊr.ɪŋ/", pos: "介词", cn: "在…期间", memory: "① during + 名词 = 在某个时间段内。\n② 后面接事件/时段名词，不接具体时间点。\n对比：during the maintenance（维护期间），at 9 AM（9点，具体时间点）。", phonics: "dur 读 /dʊr/，ing 读 /ɪŋ/，重音在第一音节。", collocations: [["during the maintenance", "维护期间"], ["during the shift", "值班期间"], ["during the inspection", "检查期间"]], examples: [["No one entered during the maintenance.", "维护期间没人进入。"], ["Please stay alert during your shift.", "值班期间请保持警觉。"]] },
    ],
    phrases: [
      { p: "stay with the contractor", ipa: "/steɪ wɪð ðə kənˈtræk.tər/", cn: "陪同承包商", why: "stay with = 和…待在一起，在随工语境 = 全程陪同监督。不是字面上的'留下'，而是安全要求的'全程陪护'。" },
      { p: "during the entire maintenance", ipa: "/ˈdʊr.ɪŋ ðə ɪnˈtaɪər ˈmeɪn.tən.əns/", cn: "在整个维护过程中", why: "during + the entire + 事件 = 在整个事件期间。强调从开始到结束，一秒都不能离开。" },
    ],
    grammar: [
      { q: "stay with 和 stay near 有什么区别？", a: "stay with = 和…在一起（贴身陪同，能看到承包商做的每一步）\nstay near = 在…附近（可能隔一段距离，看不到细节）\n随工监督要求 stay with，因为必须亲眼确认承包商的每个操作是否合规。\n❌ Stay near the contractor.（不够近，可能看不到操作细节）\n✅ Stay with the contractor.（全程贴身陪同）" },
    ],
    pattern: "Please stay with + 人 + during the entire + 事件",
    patternExamples: [
      { en: "Please stay with the vendor during the entire inspection.", cn: "请全程陪同供应商完成检查。", words: [{ w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }] },
      { en: "Please stay with the electrician during the entire test.", cn: "请全程陪同电工完成测试。", words: [{ w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "Stay with the team during the entire drill.", cn: "全程和团队在一起完成演练。", words: [] },
    ],
    thinking: "随工监督的黄金规则：人在、眼在、心在。\nstay with the contractor during the entire maintenance = 从开工到收工，监督人不能离开承包商。\n这是数据中心安全的基本底线，违反可能导致安全事故。",
    pronunciation: "entire 重音在第二音节：/ɪnˈtaɪər/。\nduring 的 u 读 /ʊ/，不是 /juː/：/ˈdʊr.ɪŋ/。\n节奏：STAY with the con-TRAC-tor ｜ DU-ring the en-TIRE MAIN-te-nance.",
    quiz: [
      { q: "请在整个检查过程中全程陪同供应商，怎么说？", a: "Please stay with the vendor during the entire inspection." },
      { q: "stay with 和 stay near 在随工语境的区别？", a: "stay with = 贴身陪同（能看到每个操作）；stay near = 在附近（可能看不到细节）。随工监督要求 stay with，不是 stay near。" },
    ],
  },
  {
    id: 200,
    en: "Never leave the contractor unattended in the data hall.",
    cn: "任何时候都不要让承包商单独留在机房内。",
    ipa: "/ˈnɛv.ər liːv ðə kənˈtræk.tər ʌn.əˈtɛn.dɪd ɪn ðə ˈdeɪ.tə hɔːl/",
    tags: ["第200句", "随工监督", "★★★★★"],
    when: "强调随工监督的红线——绝对不能让承包商单独留在机房。这是安全底线，没有例外。",
    words: [
      { w: "never", ipa: "/ˈnɛv.ər/", pos: "副词", cn: "从不；绝不", memory: "① never = 永远不，表示绝对禁止。\n② 在安全规则中 never 是最强语气，没有例外。\n比 don't 更强：Don't leave = 不要离开（一般要求），Never leave = 绝不离开（安全红线）。", phonics: "nev 读 /nɛv/，er 读 /ər/。", collocations: [["never leave", "绝不离开"], ["never allow", "绝不允许"], ["never ignore", "绝不忽视"]], examples: [["Never leave the server room unlocked.", "绝不让机房不锁门。"], ["Never bypass the safety system.", "绝不绕过安全系统。"]] },
      { w: "unattended", ipa: "/ʌn.əˈtɛn.dɪd/", pos: "形容词", cn: "无人看管的；无人陪护的", memory: "① un- = 不/没有，attended = 被看管的/被陪同的。\n② unattended = 没人看着/没人陪。\nleave + 某人 + unattended = 让某人处于无人看管状态。", phonics: "un 读 /ʌn/，a 读 /ə/，tten 读 /tɛn/，ded 读 /dɪd/，重音在第三音节。", collocations: [["leave unattended", "让…无人看管"], ["unattended equipment", "无人看管的设备"], ["unattended bag", "无人看管的包"]], examples: [["Never leave the laptop unattended.", "绝不让笔记本电脑无人看管。"], ["The fire exit was left unattended.", "消防出口无人看管。"]] },
      { w: "data hall", ipa: "/ˈdeɪ.tə hɔːl/", pos: "名词", cn: "机房；数据中心大厅", memory: "① data hall = 数据大厅 = 机房主体区域（服务器机柜所在区域）。\n② 也叫 server room / data center floor。\ndata hall 是数据中心的标准术语，比 server room 更正式。", phonics: "data 读 /deɪtə/，hall 读 /hɔːl/。", collocations: [["data hall", "机房"], ["enter the data hall", "进入机房"], ["data hall temperature", "机房温度"]], examples: [["The data hall is kept at 22°C.", "机房温度保持在22度。"], ["Contractors need escort to enter the data hall.", "承包商进入机房需要陪同。"]] },
    ],
    phrases: [
      { p: "leave the contractor unattended", ipa: "/liːv ðə kənˈtræk.tər ʌn.əˈtɛn.dɪd/", cn: "让承包商无人看管", why: "leave + 宾语 + 形容词 = 让某人处于某种状态。\nunattended = 没人看着。leave the contractor unattended = 让承包商处于无人监督状态。" },
    ],
    grammar: [
      { q: "Never leave 和 Don't leave 在语气上有什么区别？", a: "Never leave = 绝不（安全红线，违反可能出事）\nDon't leave = 不要（一般要求，可能有例外）\n安全规则用 never，强调零容忍：\n✅ Never leave the contractor unattended.（红线：任何情况都不行）\n⚠️ Don't leave the door open.（一般要求：最好别开，但偶尔忘了不至于出事故）" },
    ],
    pattern: "Never leave + 人 + unattended + in + 地点",
    patternExamples: [
      { en: "Never leave a visitor unattended in the building.", cn: "绝不让访客在楼内无人陪同。", words: [{ w: "building", ipa: "/ˈbɪldɪŋ/", cn: "建筑", phonics: "build 读 /bɪld/，ing 读 /ɪŋ/" }] },
      { en: "Never leave equipment unattended in the staging area.", cn: "绝不让设备在暂存区无人看管。", words: [{ w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }, { w: "area", ipa: "/ˈeəriə/", cn: "区域", phonics: "a 读 /eə/，rea 读 /riə/" }] },
      { en: "Never leave the control panel unattended during maintenance.", cn: "维护期间绝不让控制面板无人看管。", words: [{ w: "control", ipa: "/kənˈtroʊl/", cn: "控制", phonics: "con 读 /kən/，trol 读 /troʊl/" }, { w: "panel", ipa: "/ˈpænl/", cn: "面板", phonics: "pan 读 /pæn/，el 读 /l/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
    ],
    thinking: "这是数据中心安全的绝对红线：\n承包商在机房内必须始终有人监督，原因：\n① 防止误操作（触碰不该碰的设备）\n② 防止信息泄露（拍照/记录敏感信息）\n③ 安全合规（审计要求）\nNever 开头 = 命令式否定 = 最强语气。",
    pronunciation: "never 的 v 咬唇：/nɛvər/。\nunattended 重音在第三音节：/ʌnəˈtɛndɪd/。\n节奏：NE-ver LEAVE ｜ the con-TRAC-tor ｜ un-a-TTEN-ded ｜ in the DA-ta HALL.",
    quiz: [
      { q: "绝不让访客在楼内无人陪同，怎么说？", a: "Never leave a visitor unattended in the building." },
      { q: "Never leave 和 Don't leave 的语气区别？", a: "Never leave = 绝不（安全红线，零容忍）；Don't leave = 不要（一般要求，可能有例外）。安全规则用 Never 开头。" },
    ],
  },
  {
    id: 201,
    en: "Has the toolbox meeting been completed?",
    cn: "班前安全会议完成了吗？",
    ipa: "/hæz ðə ˈtuːl.bɒks ˈmiː.tɪŋ biːn kəmˈpliː.tɪd/",
    tags: ["第201句", "安全检查", "★★★★★"],
    when: "随工监督安排确认后，进入安全检查环节。第一项：班前安全会议（toolbox meeting）是否已召开。",
    words: [
      { w: "toolbox meeting", ipa: "/ˈtuːl.bɒks ˈmiː.tɪŋ/", pos: "名词", cn: "班前安全会议", memory: "① toolbox = 工具箱；② toolbox meeting = 开工前的安全会议（也叫 toolbox talk）。\n起源于工人围着工具箱开安全会议，现在泛指任何开工前的安全交底会。\n内容包括：今日作业风险、安全措施、应急程序。", phonics: "tool 读 /tuːl/，box 读 /bɒks/，meeting 读 /miːtɪŋ/。", collocations: [["toolbox meeting", "班前安全会议"], ["toolbox talk", "班前安全会议（英式）"], ["hold a toolbox meeting", "召开班前安全会议"]], examples: [["We held the toolbox meeting at 8 AM.", "我们上午8点召开了班前安全会议。"], ["All workers must attend the toolbox meeting.", "所有工人必须参加班前安全会议。"]] },
      { w: "completed", ipa: "/kəmˈpliː.tɪd/", pos: "动词(过去分词)", cn: "已完成", memory: "① complete = 完成（动词/形容词）；② completed = 已完成的。\n安全检查中常用 has ... been completed? 确认某项检查是否完成。\n比 finished 更正式，更常用于流程和程序。", phonics: "com 读 /kəm/，ple 读 /pliː/，ted 读 /tɪd/，重音在第二音节。", collocations: [["task completed", "任务完成"], ["inspection completed", "检查完成"], ["form completed", "表格填完"]], examples: [["Has the form been completed?", "表格填完了吗？"], ["The inspection was completed on time.", "检查按时完成。"]] },
    ],
    phrases: [
      { p: "has ... been completed", ipa: "/hæz ... biːn kəmˈpliː.tɪd/", cn: "…已经完成了吗", why: "Has + 名词 + been + completed = 现在完成被动疑问句。安全检查时逐项确认的标准句型。比 Did you complete 更客观——关注结果，不追究谁做的。" },
    ],
    grammar: [
      { q: "Has the toolbox meeting been completed 和 Did you do the toolbox meeting 有什么区别？", a: "Has ... been completed = 完成了吗（关注结果，客观）\nDid you do = 你做了吗（关注行为，指向具体人）\n安全检查用 has ... been completed，因为：\n① 关注的是'这件事做完没有'，不是'谁做的'\n② 更正式，符合检查流程语气\n③ 回答是 yes/no，清晰明确" },
    ],
    pattern: "Has + the + 检查项 + been completed?",
    patternExamples: [
      { en: "Has the risk assessment been completed?", cn: "风险评估完成了吗？", words: [] },
      { en: "Has the equipment test been completed?", cn: "设备测试完成了吗？", words: [{ w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "Has the safety inspection been completed?", cn: "安全检查完成了吗？", words: [{ w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }] },
    ],
    thinking: "Toolbox meeting 是施工前的最后一道安全关口：\n① 告知作业人员今日风险点\n② 确认个人防护装备（PPE）\n③ 明确应急程序\n交接时确认 toolbox meeting 已完成，是安全检查的第一步。",
    pronunciation: "toolbox 的 oo 读长音 /uː/：/tuːlbɒks/。\ncompleted 重音在第二音节：/kəmˈpliːtɪd/。\n节奏：HAS the TOOL-box MEET-ing ｜ been com-PLE-ted?",
    quiz: [
      { q: "风险评估完成了吗？", a: "Has the risk assessment been completed?" },
      { q: "toolbox meeting 是什么？", a: "班前安全会议，开工前对所有作业人员的安全交底。内容包括：今日风险、安全措施、应急程序。也叫 toolbox talk（英式用法）。" },
    ],
  },
  {
    id: 202,
    en: "Has the safety briefing been completed?",
    cn: "安全交底完成了吗？",
    ipa: "/hæz ðə ˈseɪf.ti ˈbriː.fɪŋ biːn kəmˈpliː.tɪd/",
    tags: ["第202句", "安全检查", "★★★★★"],
    when: "toolbox meeting 确认后，继续确认安全交底（safety briefing）是否完成。两者有区别：toolbox meeting 是班前会，safety briefing 是更详细的安全说明。",
    words: [
      { w: "safety briefing", ipa: "/ˈseɪf.ti ˈbriː.fɪŋ/", pos: "名词", cn: "安全交底", memory: "① safety = 安全；② briefing = 说明会/交底（来自 brief = 简报）。\n③ safety briefing = 详细的安全交底，比 toolbox meeting 更正式、更全面。\n通常包含：作业许可条件、隔离措施、应急联系人、逃生路线。", phonics: "safe 读 /seɪf/，ty 读 /ti/；brief 读 /briːf/，ing 读 /ɪŋ/。", collocations: [["safety briefing", "安全交底"], ["pre-work briefing", "工前说明"], ["briefing session", "交底会议"]], examples: [["The safety briefing takes 15 minutes.", "安全交底需要15分钟。"], ["All contractors must attend the safety briefing.", "所有承包商必须参加安全交底。"]] },
    ],
    phrases: [
      { p: "safety briefing", ipa: "/ˈseɪf.ti ˈbriː.fɪŋ/", cn: "安全交底", why: "briefing 来自 brief（简报），加 -ing 变成名词。safety briefing 是施工前对作业人员的详细安全说明，比 toolbox meeting 更全面。" },
    ],
    grammar: [
      { q: "toolbox meeting 和 safety briefing 有什么区别？", a: "toolbox meeting = 班前安全会议（简短、每日例行、5-10分钟）\nsafety briefing = 安全交底（详细、针对性强、15-30分钟）\n关系：\n① toolbox meeting 每天开工前都开\n② safety briefing 针对特定作业（如高压作业、高空作业）\n交接时两者都要确认。\n简单作业可能只需要 toolbox meeting，复杂作业两者都需要。" },
    ],
    pattern: "Has the + safety + 名词 + been completed?",
    patternExamples: [
      { en: "Has the safety inspection been completed?", cn: "安全检查完成了吗？", words: [{ w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }] },
      { en: "Has the safety training been completed?", cn: "安全培训完成了吗？", words: [{ w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }] },
      { en: "Has the safety audit been completed?", cn: "安全审计完成了吗？", words: [{ w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }] },
    ],
    thinking: "安全检查的前两步：\n① toolbox meeting（班前会）→ 简短告知今日风险\n② safety briefing（安全交底）→ 详细说明安全措施\n两者确认完成后，才能进入 PPE 检查环节。",
    pronunciation: "briefing 的 ie 读长音 /iː/：/briːfɪŋ/。\n节奏：HAS the SAFE-ty BRIEF-ing ｜ been com-PLE-ted?",
    quiz: [
      { q: "安全培训完成了吗？", a: "Has the safety training been completed?" },
      { q: "toolbox meeting 和 safety briefing 的区别？", a: "toolbox meeting = 班前安全会议（简短，每日例行，5-10分钟）；safety briefing = 安全交底（详细，针对特定作业，15-30分钟）。简单作业只需 toolbox meeting，复杂作业两者都需要。" },
    ],
  },
  {
    id: 203,
    en: "Is everyone wearing the required PPE?",
    cn: "所有人都穿戴规定的个人防护用品了吗？",
    ipa: "/ɪz ˈɛv.ri.wən ˈwɛr.ɪŋ ðə rɪˈkwaɪərd ˌpiː.piːˈiː/",
    tags: ["第203句", "安全检查", "★★★★★"],
    when: "安全会议和交底确认后，检查个人防护装备（PPE）。这是进入施工现场的基本要求。",
    words: [
      { w: "wearing", ipa: "/ˈwɛr.ɪŋ/", pos: "动词(现在分词)", cn: "穿戴着", memory: "① wear = 穿戴（动词）；② wearing = 正在穿戴（进行时）。\nPPE 语境中 wear = 正确穿戴，不只是'带着'。\nwearing ≠ carrying（带着但没穿）。\n✅ wearing a helmet = 头上戴着头盔\n❌ carrying a helmet = 手里拿着头盔（没戴）", phonics: "wear 读 /wɛr/，ing 读 /ɪŋ/。", collocations: [["wearing PPE", "穿戴防护用品"], ["wearing a helmet", "戴安全帽"], ["wearing safety shoes", "穿安全鞋"]], examples: [["Is everyone wearing a helmet?", "每个人都戴安全帽了吗？"], ["Workers must wear high-vis vests.", "工人必须穿反光背心。"]] },
      { w: "required", ipa: "/rɪˈkwaɪərd/", pos: "形容词", cn: "规定的；必需的", memory: "① require = 要求（动词）；② required = 被要求的/规定的。\n③ the required PPE = 规定的个人防护装备（不是随便什么PPE，是规程要求的那些）。\n数据中心常见 required PPE：安全帽、安全鞋、反光背心、护目镜（特定作业）。", phonics: "re 读 /rɪ/，quire 读 /kwaɪər/，d 轻声，重音在第二音节。", collocations: [["required PPE", "规定的防护用品"], ["required documents", "必需文件"], ["as required", "按要求"]], examples: [["All required PPE must be worn.", "所有规定的防护用品必须穿戴。"], ["The required tools are in the toolbox.", "所需的工具在工具箱里。"]] },
      { w: "PPE", ipa: "/ˌpiː.piːˈiː/", pos: "缩写", cn: "个人防护用品（Personal Protective Equipment）", memory: "① PPE = Personal Protective Equipment = 个人防护装备。\n② 逐字母读 P-P-E，不读成单词。\n数据中心常见 PPE：safety helmet（安全帽）、safety shoes（安全鞋）、safety vest（反光背心）、safety glasses（护目镜）。", phonics: "逐字母读 /piː-piː-iː/。", collocations: [["wear PPE", "穿戴防护用品"], ["PPE check", "防护用品检查"], ["required PPE", "规定的防护用品"]], examples: [["PPE is mandatory in the data hall.", "机房内必须穿戴防护用品。"], ["Please check your PPE before entering.", "进入前请检查防护用品。"]] },
    ],
    phrases: [
      { p: "the required PPE", ipa: "/ðə rɪˈkwaɪərd ˌpiː.piːˈiː/", cn: "规定的个人防护用品", why: "required 强调'规程规定的'，不是可选的。PPE 是缩写，逐字母读 P-P-E。the required PPE = 今天作业需要穿戴的那几样防护装备。" },
    ],
    grammar: [
      { q: "Is everyone wearing 和 Has everyone worn 有什么区别？", a: "Is everyone wearing = 每个人都正穿着吗（检查当前状态）\nHas everyone worn = 每个人都穿过了吗（关注动作是否发生）\nPPE 检查用 is wearing，因为关注的是'现在身上有没有穿'：\n✅ Is everyone wearing the required PPE?（看看大家现在穿了没）\n❌ Has everyone worn the PPE?（意思变成了'有没有穿过'，不关心现在）" },
    ],
    pattern: "Is everyone wearing + the required + 装备",
    patternExamples: [
      { en: "Is everyone wearing safety glasses?", cn: "每个人都戴护目镜了吗？", words: [{ w: "everyone", ipa: "/ˈɛvriwʌn/", cn: "大家", phonics: "every 读 /ɛvri/，one 读 /wʌn/" }, { w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }] },
      { en: "Is everyone wearing the correct uniform?", cn: "每个人都穿对制服了吗？", words: [{ w: "everyone", ipa: "/ˈɛvriwʌn/", cn: "大家", phonics: "every 读 /ɛvri/，one 读 /wʌn/" }] },
      { en: "Is everyone wearing their ID badge?", cn: "每个人都戴工牌了吗？", words: [{ w: "everyone", ipa: "/ˈɛvriwʌn/", cn: "大家", phonics: "every 读 /ɛvri/，one 读 /wʌn/" }] },
    ],
    thinking: "PPE 检查是进入施工现场的最后一道个人关卡：\n① 安全帽（head protection）\n② 安全鞋（foot protection）\n③ 反光背心（visibility）\n④ 特定作业可能还需要：护目镜、手套、耳塞\n交接时逐项确认，缺一不可。",
    pronunciation: "PPE 逐字母读，重音在最后一个字母：/piː-piː-Iː/。\nrequired 重音在第二音节：/rɪˈkwaɪərd/。\n节奏：IS EV-ry-one WEAR-ing ｜ the re-QUIRED P-P-E?",
    quiz: [
      { q: "每个人都戴护目镜了吗？", a: "Is everyone wearing safety glasses?" },
      { q: "PPE 怎么读？全称是什么？", a: "PPE 逐字母读 /piː-piː-iː/，全称 Personal Protective Equipment（个人防护装备）。" },
    ],
  },
  {
    id: 204,
    en: "Please check everyone's safety helmet.",
    cn: "请检查每个人的安全帽。",
    ipa: "/pliːz tʃɛk ˈɛv.ri.wənz ˈseɪf.ti ˈhɛl.mɪt/",
    tags: ["第204句", "安全检查", "★★★★★"],
    when: "PPE 总体确认后，逐项检查。第一项：安全帽。",
    words: [
      { w: "safety helmet", ipa: "/ˈseɪf.ti ˈhɛl.mɪt/", pos: "名词", cn: "安全帽", memory: "① safety = 安全；② helmet = 头盔/安全帽。\n③ safety helmet = 安全帽，数据中心施工区域的强制要求。\n注意：helmet 不是 hat（帽子），helmet 有防护功能，hat 没有。\n对比：hard hat = 安全帽（美式口语），safety helmet = 安全帽（正式用语）。", phonics: "safe 读 /seɪf/，ty 读 /ti/；hel 读 /hɛl/，met 读 /mɪt/。", collocations: [["safety helmet", "安全帽"], ["wear a helmet", "戴安全帽"], ["helmet inspection", "安全帽检查"]], examples: [["Everyone must wear a safety helmet.", "每个人必须戴安全帽。"], ["Check that the helmet is properly fastened.", "检查安全帽是否系好。"]] },
      { w: "everyone's", ipa: "/ˈɛv.ri.wənz/", pos: "代词(所有格)", cn: "每个人的", memory: "① everyone = 每个人；② everyone's = 每个人的（所有格，加 's）。\n注意：everyone's 后面接单数名词（每个人的安全帽，不是每个人们的安全帽）。\n✅ everyone's helmet = 每个人的安全帽\n❌ everyone's helmets（错误）", phonics: "ev 读 /ɛv/，ry 读 /ri/，one 读 /wən/，'s 读 /z/。", collocations: [["everyone's name", "每个人的名字"], ["everyone's ID", "每个人的证件"], ["everyone's signature", "每个人的签名"]], examples: [["Check everyone's ID card.", "检查每个人的证件。"], ["Verify everyone's signature.", "核实每个人的签名。"]] },
    ],
    phrases: [
      { p: "check everyone's safety helmet", ipa: "/tʃɛk ˈɛv.ri.wənz ˈseɪf.ti ˈhɛl.mɪt/", cn: "检查每个人的安全帽", why: "check + everyone's + 装备 = 逐项检查每个人是否正确穿戴。安全帽检查要点：① 是否佩戴 ② 下颚带是否系紧 ③ 是否有损坏。" },
    ],
    grammar: [
      { q: "everyone's 后面为什么用单数 helmet 而不是 helmets？", a: "everyone 是单数代词（每个人），所以：\n✅ everyone's helmet = 每个人的安全帽（语法正确）\n❌ everyone's helmets = 每个人的安全帽们（语法错误）\n同理：\n✅ everyone's safety shoes（shoes 本身就是复数名词，一双鞋 = shoes）\n✅ everyone's safety vest（vest 单数）" },
    ],
    pattern: "Please check everyone's + PPE 装备",
    patternExamples: [
      { en: "Please check everyone's safety glasses.", cn: "请检查每个人的护目镜。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "everyones", ipa: "/ˈɛvriwʌn/", cn: "大家", phonics: "every 读 /ɛvri/，one 读 /wʌn/" }, { w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }] },
      { en: "Please check everyone's ID badge.", cn: "请检查每个人的工牌。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "everyones", ipa: "/ˈɛvriwʌn/", cn: "大家", phonics: "every 读 /ɛvri/，one 读 /wʌn/" }] },
      { en: "Please check everyone's ear protection.", cn: "请检查每个人的耳部防护。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "everyones", ipa: "/ˈɛvriwʌn/", cn: "大家", phonics: "every 读 /ɛvri/，one 读 /wʌn/" }, { w: "protection", ipa: "/prəˈtɛkʃən/", cn: "保护", phonics: "pro 读 /prə/，tection 读 /tɛkʃən/" }] },
    ],
    thinking: "PPE 逐项检查顺序：\n① 安全帽（头）→ ② 安全鞋（脚）→ ③ 反光背心（身）\n从上到下检查，确保不遗漏。\n每项都检查 everyone's，不能只看一两个人。",
    pronunciation: "helmet 的 h 发音：/hɛlmɪt/。\neveryone's 的 's 读 /z/：/ɛvriwənz/。\n节奏：CHECK ｜ EV-ry-one's SAFE-ty HEL-met.",
    quiz: [
      { q: "请检查每个人的工牌，怎么说？", a: "Please check everyone's ID badge." },
      { q: "everyone's 后面接单数还是复数？", a: "接单数。everyone 是单数代词，所以 everyone's helmet（不是 helmets）。例外：shoes/glasses 本身就是复数名词，用 everyone's safety shoes / everyone's safety glasses。" },
    ],
  },
  {
    id: 205,
    en: "Please check everyone's safety shoes.",
    cn: "请检查每个人的安全鞋。",
    ipa: "/pliːz tʃɛk ˈɛv.ri.wənz ˈseɪf.ti ʃuːz/",
    tags: ["第205句", "安全检查", "★★★★★"],
    when: "安全帽检查完成后，继续检查安全鞋。安全鞋防砸防穿刺，是数据中心施工的基本防护。",
    words: [
      { w: "safety shoes", ipa: "/ˈseɪf.ti ʃuːz/", pos: "名词", cn: "安全鞋", memory: "① safety shoes = 安全鞋，鞋头有钢头保护，防砸防穿刺。\n② shoes 本身是复数（一双鞋），所以用 safety shoes，不用 safety shoe。\n也叫 steel-toe boots（钢头靴）或 safety boots（安全靴）。\n数据中心要求：进入施工区域必须穿安全鞋。", phonics: "safe 读 /seɪf/，ty 读 /ti/；shoes 读 /ʃuːz/。", collocations: [["safety shoes", "安全鞋"], ["steel-toe boots", "钢头靴"], ["wear safety shoes", "穿安全鞋"]], examples: [["Safety shoes are required in the construction area.", "施工区域必须穿安全鞋。"], ["Check that safety shoes are in good condition.", "检查安全鞋是否完好。"]] },
    ],
    phrases: [
      { p: "everyone's safety shoes", ipa: "/ˈɛv.ri.wənz ˈseɪf.ti ʃuːz/", cn: "每个人的安全鞋", why: "shoes 是复数名词（一双鞋 = two shoes），所以 everyone's safety shoes 是正确的（不是 helmet 那种单数用法）。同理：glasses、gloves 也是复数。" },
    ],
    grammar: [
      { q: "为什么 safety shoes 用复数，safety helmet 用单数？", a: "因为物品本身的特性：\n✅ safety helmet = 一顶安全帽（单数）\n✅ safety shoes = 一双安全鞋（复数，因为鞋是成双的）\n✅ safety glasses = 一副护目镜（复数，因为镜片是两个）\n✅ safety vest = 一件反光背心（单数）\n✅ safety gloves = 一副安全手套（复数，手套成双）" },
    ],
    pattern: "Please check everyone's + PPE 装备（复数）",
    patternExamples: [
      { en: "Please check everyone's safety gloves.", cn: "请检查每个人的安全手套。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "everyones", ipa: "/ˈɛvriwʌn/", cn: "大家", phonics: "every 读 /ɛvri/，one 读 /wʌn/" }, { w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }] },
      { en: "Please check everyone's ear plugs.", cn: "请检查每个人的耳塞。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "everyones", ipa: "/ˈɛvriwʌn/", cn: "大家", phonics: "every 读 /ɛvri/，one 读 /wʌn/" }] },
      { en: "Please check everyone's knee pads.", cn: "请检查每个人的护膝。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "everyones", ipa: "/ˈɛvriwʌn/", cn: "大家", phonics: "every 读 /ɛvri/，one 读 /wʌn/" }] },
    ],
    thinking: "安全鞋检查要点：\n① 是否穿着（不是普通运动鞋）\n② 鞋头钢片是否完好\n③ 鞋底是否防滑\n数据中心施工区域地面可能有电缆、工具，安全鞋防砸防穿刺。",
    pronunciation: "shoes 的 sh 读 /ʃ/：/ʃuːz/。\n节奏：CHECK ｜ EV-ry-one's SAFE-ty SHOES.",
    quiz: [
      { q: "请检查每个人的安全手套，怎么说？", a: "Please check everyone's safety gloves." },
      { q: "哪些 PPE 用复数？", a: "成双/成对的物品用复数：safety shoes（鞋）、safety glasses（护目镜）、safety gloves（手套）、ear plugs（耳塞）。单件物品用单数：safety helmet（安全帽）、safety vest（反光背心）。" },
    ],
  },
  {
    id: 206,
    en: "Please check everyone's safety vest.",
    cn: "请检查每个人的反光背心。",
    ipa: "/pliːz tʃɛk ˈɛv.ri.wənz ˈseɪf.ti vɛst/",
    tags: ["第206句", "安全检查", "★★★★★"],
    when: "安全鞋检查完成后，检查最后一项 PPE——反光背心。确保所有人在施工现场可见。",
    words: [
      { w: "safety vest", ipa: "/ˈseɪf.ti vɛst/", pos: "名词", cn: "反光背心；安全背心", memory: "① vest = 背心；② safety vest = 反光背心（high-visibility vest / hi-vis vest）。\n③ 反光背心让工人在昏暗环境中可见，防止被叉车/设备撞到。\n也叫 high-vis vest（高可见度背心）或 reflective vest（反光背心）。", phonics: "safe 读 /seɪf/，ty 读 /ti/；vest 读 /vɛst/。", collocations: [["safety vest", "反光背心"], ["high-vis vest", "高可见度背心"], ["reflective vest", "反光背心"]], examples: [["Please wear your safety vest at all times.", "请始终穿好反光背心。"], ["The safety vest must be fluorescent yellow.", "反光背心必须是荧光黄色。"]] },
    ],
    phrases: [
      { p: "everyone's safety vest", ipa: "/ˈɛv.ri.wənz ˈseɪf.ti vɛst/", cn: "每个人的反光背心", why: "vest 是单数名词（一件背心），所以 everyone's safety vest。检查要点：① 是否穿着 ② 反光条是否完好 ③ 颜色是否符合要求（通常荧光黄或橙）。" },
    ],
    grammar: [
      { q: "PPE 检查三件套的标准说法？", a: "数据中心施工常见 PPE 三件套：\n① Please check everyone's safety helmet.（安全帽）\n② Please check everyone's safety shoes.（安全鞋）\n③ Please check everyone's safety vest.（反光背心）\n交接时从上到下逐项确认。\n特定作业可能还需要：safety glasses（护目镜）、safety gloves（手套）、ear protection（听力防护）。" },
    ],
    pattern: "Please check everyone's + 装备（单数）",
    patternExamples: [
      { en: "Please check everyone's harness.", cn: "请检查每个人的安全带。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "everyones", ipa: "/ˈɛvriwʌn/", cn: "大家", phonics: "every 读 /ɛvri/，one 读 /wʌn/" }] },
      { en: "Please check everyone's face shield.", cn: "请检查每个人的面罩。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "everyones", ipa: "/ˈɛvriwʌn/", cn: "大家", phonics: "every 读 /ɛvri/，one 读 /wʌn/" }] },
      { en: "Please check everyone's respirator.", cn: "请检查每个人的呼吸器。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "everyones", ipa: "/ˈɛvriwʌn/", cn: "大家", phonics: "every 读 /ɛvri/，one 读 /wʌn/" }] },
    ],
    thinking: "PPE 三件套检查完成 → 可以进入下一步安全检查。\n从上到下：helmet（头）→ shoes（脚）→ vest（身）。\n全部确认后才能允许承包商进入施工区域。",
    pronunciation: "vest 的 v 咬唇：/vɛst/。\n节奏：CHECK ｜ EV-ry-one's SAFE-ty VEST.",
    quiz: [
      { q: "请检查每个人的面罩，怎么说？", a: "Please check everyone's face shield." },
      { q: "PPE 三件套是哪三件？", a: "① safety helmet（安全帽）② safety shoes（安全鞋）③ safety vest（反光背心）。交接时从上到下逐项检查。特定作业可能还需要护目镜、手套、耳部防护。" },
    ],
  },
  {
    id: 207,
    en: "Has the LOTO procedure been completed?",
    cn: "锁定挂牌（LOTO）程序完成了吗？",
    ipa: "/hæz ðə ˈloʊ.toʊ ˈprɒs.ə.dʒər biːn kəmˈpliː.tɪd/",
    tags: ["第207句", "安全检查", "★★★★★"],
    when: "PPE 检查完成后，确认 LOTO（锁定挂牌）程序。这是电气/机械维护前最重要的安全程序。",
    words: [
      { w: "LOTO", ipa: "/ˈloʊ.toʊ/", pos: "缩写", cn: "锁定挂牌（Lock Out Tag Out）", memory: "① LO = Lock Out（锁定）；TO = Tag Out（挂牌）。\n② LOTO = 在维护前将设备能源隔离并上锁挂牌，防止他人误开。\n③ 这是数据中心最严格的安全程序之一，违反可能导致致命事故。\n流程：断电 → 上锁 → 挂牌 → 验电 → 开工。", phonics: "读作 /loʊtoʊ/（两个音节），不逐字母。", collocations: [["LOTO procedure", "锁定挂牌程序"], ["LOTO lock", "LOTO锁"], ["perform LOTO", "执行LOTO"]], examples: [["LOTO must be completed before any electrical work.", "电气作业前必须完成LOTO。"], ["Each worker applies their own LOTO lock.", "每个工人都挂自己的LOTO锁。"]] },
      { w: "procedure", ipa: "/ˈprɒs.ə.dʒər/", pos: "名词", cn: "程序；规程", memory: "① procedure = 按步骤执行的程序/规程。\n② 比 process（过程）更强调有序步骤。\nLOTO procedure = LOTO 标准操作程序（断电→上锁→挂牌→验电→开工）。\n对比：process = 过程（不强调步骤），procedure = 程序（有明确步骤）。", phonics: "pro 读 /prɒ/，ce 读 /sə/，dure 读 /dʒər/，重音在第一音节。", collocations: [["standard procedure", "标准程序"], ["safety procedure", "安全规程"], ["emergency procedure", "应急程序"]], examples: [["Follow the standard procedure.", "按照标准程序执行。"], ["The emergency procedure is posted on the wall.", "应急程序贴在墙上。"]] },
    ],
    phrases: [
      { p: "the LOTO procedure", ipa: "/ðə ˈloʊ.toʊ ˈprɒs.ə.dʒər/", cn: "锁定挂牌程序", why: "LOTO 读 /loʊtoʊ/（两个音节），不逐字母。LOTO procedure 是维护前必须完成的安全程序：将设备能源隔离、上锁、挂牌，防止他人误开导致触电或机械伤害。" },
    ],
    grammar: [
      { q: "LOTO 的完整流程是什么？", a: "LOTO 五步法：\n① Identify（识别）— 确认需要隔离的能源点\n② Isolate（隔离）— 断开电源/阀门\n③ Lock（上锁）— 每个作业人员各挂一把锁\n④ Tag（挂牌）— 挂上标识牌（谁锁的、什么时候锁的）\n⑤ Verify（验证）— 尝试启动设备，确认能源已完全隔离\n交接时确认 LOTO 已完成 = 五步都已执行。" },
    ],
    pattern: "Has the + 安全程序 + been completed?",
    patternExamples: [
      { en: "Has the isolation procedure been completed?", cn: "隔离程序完成了吗？", words: [{ w: "procedure", ipa: "/prəˈsiːdʒər/", cn: "流程", phonics: "pro 读 /prə/，cedure 读 /siːdʒər/" }] },
      { en: "Has the permit-to-work procedure been completed?", cn: "作业许可程序完成了吗？", words: [{ w: "procedure", ipa: "/prəˈsiːdʒər/", cn: "流程", phonics: "pro 读 /prə/，cedure 读 /siːdʒər/" }] },
      { en: "Has the emergency drill been completed?", cn: "应急演练完成了吗？", words: [{ w: "emergency", ipa: "/ɪˈmɜːrdʒənsi/", cn: "紧急", phonics: "e 读 /ɪ/，mergency 读 /mɜːrdʒənsi/" }] },
    ],
    thinking: "LOTO 是数据中心维护中最关键的安全程序：\n未执行 LOTO 的风险：\n① 有人误开电源 → 触电\n② 有人误开阀门 → 高压液体喷出\n③ 设备突然启动 → 机械伤害\n交接时必须确认 LOTO 已完整执行。",
    pronunciation: "LOTO 读两个音节 /loʊ-toʊ/，像 low-toe。\nprocedure 重音在第一音节：/prɒsədʒər/。\n节奏：HAS the LO-to ｜ PRO-ce-dure ｜ been com-PLE-ted?",
    quiz: [
      { q: "隔离程序完成了吗？", a: "Has the isolation procedure been completed?" },
      { q: "LOTO 的五步法是什么？", a: "① Identify（识别能源点）② Isolate（隔离能源）③ Lock（上锁）④ Tag（挂牌）⑤ Verify（验证能源已隔离）。每个作业人员各挂一把锁，确保只有自己才能解锁。" },
    ],
  },
  {
    id: 208,
    en: "Please verify all isolation points before work starts.",
    cn: "请在开工前确认所有隔离点。",
    ipa: "/pliːz ˈvɛr.ɪ.faɪ ɔːl ˌaɪ.səˈleɪ.ʃən pɔɪnts bɪˈfɔːr wɜːrk stɑːrts/",
    tags: ["第208句", "安全检查", "★★★★★"],
    when: "LOTO 程序确认后，进一步确认所有隔离点。隔离点是指被断开/锁定的能源接入点。",
    words: [
      { w: "verify", ipa: "/ˈvɛr.ɪ.faɪ/", pos: "动词", cn: "确认；核实", memory: "① verify = 验证/确认（确保信息正确）。\n② 比 check 更正式，强调'确认无误'。\ncheck = 检查（可能只是看一眼），verify = 核实（需要确认结果正确）。\nLOTO 语境中 verify = 尝试启动设备确认能源已断开。", phonics: "ver 读 /vɛr/，i 读 /ɪ/，fy 读 /faɪ/，重音在第一音节。", collocations: [["verify the result", "确认结果"], ["verify the isolation", "确认隔离"], ["verify before work", "开工前确认"]], examples: [["Please verify the power is off.", "请确认电源已断开。"], ["Verify all connections before testing.", "测试前确认所有连接。"]] },
      { w: "isolation points", ipa: "/ˌaɪ.səˈleɪ.ʃən pɔɪnts/", pos: "名词", cn: "隔离点", memory: "① isolation = 隔离（动词 isolate 的名词形式）。\n② isolation points = 隔离点 = 被断开/锁定的能源接入位置。\n③ 包括：电源开关、阀门、断路器。\nLOTO 中的 I（Isolate）就是指在隔离点断开能源。", phonics: "i 读 /aɪ/，so 读 /sə/，la 读 /leɪ/，tion 读 /ʃən/，重音在第三音节。", collocations: [["isolation point", "隔离点"], ["electrical isolation", "电气隔离"], ["mechanical isolation", "机械隔离"]], examples: [["There are three isolation points for this UPS.", "这台UPS有三个隔离点。"], ["All isolation points must be locked.", "所有隔离点必须上锁。"]] },
    ],
    phrases: [
      { p: "before work starts", ipa: "/bɪˈfɔːr wɜːrk stɑːrts/", cn: "在开工前", why: "before + 从句 = 在…之前。work starts = 施工开始。before work starts = 开工之前（时间条件），强调必须在动工前完成确认。" },
    ],
    grammar: [
      { q: "verify 和 check 在安全检查中有什么区别？", a: "check = 检查（看一看）\nverify = 核实（确认结果正确）\n安全检查中的层次：\n① check = 看看有没有做（表面检查）\n② verify = 确认做到了且正确（深层确认）\n✅ Please check the LOTO lock.（看看锁在不在）\n✅ Please verify the isolation points.（确认每个隔离点确实断开了）\nLOTO 要求 verify，不能只 check。" },
    ],
    pattern: "Please verify all + 检查对象 + before + 时间条件",
    patternExamples: [
      { en: "Please verify all connections before powering on.", cn: "上电前请确认所有连接。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "powering", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }] },
      { en: "Please verify all parameters before starting the test.", cn: "测试前请确认所有参数。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "starting", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "Please verify all permits before work begins.", cn: "开工前请确认所有许可证。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "begins", ipa: "/bɪˈɡɪn/", cn: "开始", phonics: "be 读 /bɪ/，gin 读 /ɡɪn/" }] },
    ],
    thinking: "隔离点确认是 LOTO 的延伸：\nLOTO 完成后，需要逐一确认每个隔离点：\n① 电气隔离点（断路器/开关）→ 确认已断开\n② 机械隔离点（阀门）→ 确认已关闭\n③ 液压/气压隔离点 → 确认已泄压\n遗漏一个隔离点 = 致命风险。",
    pronunciation: "isolation 重音在第三音节：/aɪsəˈleɪʃən/。\nverify 重音在第一音节：/vɛrɪfaɪ/。\n节奏：VE-ri-fy ｜ ALL i-so-LA-tion POINTS ｜ be-FORE WORK STARTS.",
    quiz: [
      { q: "上电前请确认所有连接，怎么说？", a: "Please verify all connections before powering on." },
      { q: "verify 和 check 在安全检查中的区别？", a: "check = 检查（看看有没有做，表面）；verify = 核实（确认做到且正确，深层）。LOTO 要求 verify，因为必须确认每个隔离点确实断开了，不能只是'看一眼'。" },
    ],
  },
  {
    id: 209,
    en: "Stop the work immediately if any unsafe condition is found.",
    cn: "如果发现任何不安全情况，请立即停止施工。",
    ipa: "/stɒp ðə wɜːrk ɪˈmiː.di.ət.li ɪf ˈɛn.i ʌnˈseɪf kənˈdɪʃ.ən ɪz faʊnd/",
    tags: ["第209句", "安全检查", "★★★★★"],
    when: "所有安全检查项确认后，交代安全红线——发现不安全情况立即停工。这是安全监督的最终授权。",
    words: [
      { w: "immediately", ipa: "/ɪˈmiː.di.ət.li/", pos: "副词", cn: "立即；马上", memory: "① immediate = 立即的（形容词）；② immediately = 立即地（副词）。\n③ 在安全语境中 immediately = 零延迟，一发现就停。\n比 right now / at once 更正式，常用于安全规程。\n口语中可简化为 right away，但正式文件用 immediately。", phonics: "im 读 /ɪm/，me 读 /miː/，di 读 /di/，ate 读 /ət/，ly 读 /li/，重音在第二音节。", collocations: [["stop immediately", "立即停止"], ["report immediately", "立即报告"], ["evacuate immediately", "立即撤离"]], examples: [["Stop work immediately if you smell gas.", "闻到气体立即停工。"], ["Report any incident immediately.", "立即报告任何事故。"]] },
      { w: "unsafe condition", ipa: "/ʌnˈseɪf kənˈdɪʃ.ən/", pos: "名词", cn: "不安全情况；不安全状态", memory: "① unsafe = 不安全的；② condition = 状态/情况。\n③ unsafe condition = 任何可能导致事故的不安全因素。\n包括：设备异常、防护措施缺失、环境危险（水/火/气体泄漏）、人员违规操作。\n对比：unsafe act = 不安全行为（人的错误），unsafe condition = 不安全状态（物的问题）。", phonics: "un 读 /ʌn/，safe 读 /seɪf/；con 读 /kən/，di 读 /dɪ/，tion 读 /ʃən/。", collocations: [["unsafe condition", "不安全情况"], ["unsafe act", "不安全行为"], ["unsafe practice", "不安全做法"]], examples: [["Report any unsafe condition to your supervisor.", "向主管报告任何不安全情况。"], ["Wet floor is an unsafe condition.", "湿滑地面是不安全情况。"]] },
    ],
    phrases: [
      { p: "stop the work immediately", ipa: "/stɒp ðə wɜːrk ɪˈmiː.di.ət.li/", cn: "立即停止施工", why: "stop + the work + immediately = 命令式 + 立即。安全规程中 stop 不用 please 软化，因为是紧急命令，不是请求。" },
      { p: "if any unsafe condition is found", ipa: "/ɪf ˈɛn.i ʌnˈseɪf kənˈdɪʃ.ən ɪz faʊnd/", cn: "如果发现任何不安全情况", why: "if + any + 名词 + is found = 如果发现任何…。any 表示'任何一个'，is found = 被发现（被动语态，不指定谁发现的）。" },
    ],
    grammar: [
      { q: "这句话为什么 Stop 开头不用 Please？", a: "安全命令 vs 日常请求：\n✅ Stop the work immediately!（安全命令：紧急、零延迟）\n✅ Please stop the work.（日常请求：礼貌，允许短暂延迟）\n安全红线用祈使句（Stop / Never / Do not），不用 please 软化：\n✅ Stop immediately if gas is detected.（气体泄漏 → 立刻跑）\n⚠️ Please stop if gas is detected.（太礼貌了，可能耽误几秒）" },
    ],
    pattern: "Stop + 动作 + immediately + if + 条件",
    patternExamples: [
      { en: "Stop the test immediately if the temperature exceeds 80°C.", cn: "温度超过80度立即停止测试。", words: [{ w: "stop", ipa: "/stɒp/", cn: "停止", phonics: "stop 读 /stɒp/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Stop the generator immediately if abnormal noise is heard.", cn: "听到异常噪音立即停止发电机。", words: [{ w: "stop", ipa: "/stɒp/", cn: "停止", phonics: "stop 读 /stɒp/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Stop all work immediately if the fire alarm sounds.", cn: "火警响起立即停止所有作业。", words: [{ w: "stop", ipa: "/stɒp/", cn: "停止", phonics: "stop 读 /stɒp/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }, { w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }] },
    ],
    thinking: "这是安全监督的最终授权——停工权：\n随工监督人有权（也有义务）在任何时候叫停施工：\n① 发现不安全情况 → 立即停工\n② 承包商违规操作 → 立即停工\n③ 天气/环境突变 → 立即停工\n停工后：报告主管 → 评估风险 → 确认安全后才能复工。",
    pronunciation: "immediately 五音节，重音在第二音节：/ɪˈmiːdiətli/。\ncondition 的 ti 读 /ʃ/（颚化）：/kənˈdɪʃən/。\n节奏：STOP the WORK ｜ im-ME-di-ate-ly ｜ if AN-y ｜ un-SAFE con-DI-tion ｜ is FOUND.",
    quiz: [
      { q: "温度超过80度立即停止测试，怎么说？", a: "Stop the test immediately if the temperature exceeds 80°C." },
      { q: "安全命令为什么不用 Please 开头？", a: "安全红线用祈使句（Stop / Never / Do not），不用 please 软化语气。紧急情况需要零延迟执行，please 的礼貌语气会让指令显得'可选'。安全命令 = 必须执行，不是请求。" },
    ],
  },
  {
    id: 210,
    en: "Now let's review today's staffing and leave arrangements.",
    cn: "现在我们开始检查今天的值班人员和请假情况。",
    ipa: "/naʊ lɛts rɪˈvjuː təˈdeɪz ˈstæf.ɪŋ ənd liːv əˈreɪndʒ.mənts/",
    tags: ["第210句", "转场句", "★★★★★"],
    when: "安全检查全部完成后，转入下一个交接环节——值班人员和请假安排。这是从'施工安全'到'人员管理'的转场。",
    words: [
      { w: "staffing", ipa: "/ˈstæf.ɪŋ/", pos: "名词", cn: "人员配置；值班安排", memory: "① staff = 员工/人员（名词）；② staffing = 人员配置/排班（名词化）。\n③ staffing = 今天安排了哪些人值班，各岗位是否有人。\n交接时 staffing review = 确认今天谁值班、哪些岗位有人、有没有空缺。", phonics: "staff 读 /stæf/，ing 读 /ɪŋ/。", collocations: [["staffing plan", "值班安排"], ["staffing level", "人员配置水平"], ["adequate staffing", "人员充足"]], examples: [["Today's staffing is adequate.", "今天人员配置充足。"], ["We need to review the staffing for tonight.", "我们需要检查今晚的值班安排。"]] },
      { w: "leave arrangements", ipa: "/liːv əˈreɪndʒ.mənts/", pos: "名词", cn: "请假安排", memory: "① leave = 请假/休假（名词）；② arrangements = 安排（复数）。\n③ leave arrangements = 谁请假了、请了多久、有没有人替补。\n交接时必须知道谁不在，因为缺人可能影响应急响应能力。\n注意：leave 这里读 /liːv/（请假），不是 /liːf/（叶子）。", phonics: "leave 读 /liːv/，ar 读 /ə/，range 读 /reɪndʒ/，ments 读 /mənts/。", collocations: [["leave arrangement", "请假安排"], ["annual leave", "年假"], ["sick leave", "病假"]], examples: [["Three staff are on leave today.", "今天有三个人请假。"], ["Check the leave arrangements for next week.", "检查下周的请假安排。"]] },
      { w: "review", ipa: "/rɪˈvjuː/", pos: "动词", cn: "检查；审查", memory: "① re- = 再次，view = 看 → review = 再次查看 = 审查/检查。\n② 交接中 review = 逐项检查确认，不是'写评论'。\n前面用了 review 多次：review the alarm status、review the maintenance schedule、review the SLA status。", phonics: "re 读 /rɪ/，view 读 /vjuː/，重音在第二音节。", collocations: [["review the plan", "检查计划"], ["review the status", "检查状态"], ["review the schedule", "检查排程"]], examples: [["Let's review the handover checklist.", "我们检查交接清单。"], ["I reviewed the log before my shift.", "我值班前检查了日志。"]] },
    ],
    phrases: [
      { p: "staffing and leave arrangements", ipa: "/ˈstæf.ɪŋ ənd liːv əˈreɪndʒ.mənts/", cn: "值班人员和请假安排", why: "staffing = 谁在值班（在岗人员），leave arrangements = 谁请假了（缺勤人员）。两者放在一起检查，就能全面了解今天的人力资源。" },
    ],
    grammar: [
      { q: "Now let's review 这个转场句在交接中用了多少次？", a: "Now let's review 是整个交接流程的标准转场句型，已出现多次：\n① Now let's review the maintenance schedule.（转施工计划）\n② Now let's review today's site supervision plan.（转随工监督）\n③ Now let's review the SLA status.（转SLA）\n④ Now let's review today's staffing and leave arrangements.（转人员安排）\n每次 Now let's review = 上一个环节结束，进入下一个环节。" },
    ],
    pattern: "Now let's review + 下一个交接环节",
    patternExamples: [
      { en: "Now let's review the incident log.", cn: "现在我们检查事件日志。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
      { en: "Now let's review the equipment status.", cn: "现在我们检查设备状态。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Now let's review the environmental readings.", cn: "现在我们检查环境读数。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "readings", ipa: "/ˈriːdɪŋ/", cn: "读数", phonics: "read 读 /riːd/，ing 读 /ɪŋ/" }] },
    ],
    thinking: "转场句标志着从'施工安全'环节进入'人员管理'环节。\n交接的完整流程：\n① 开始交班 → ② 告警 → ③ DCIM → ④ 事件单 → ⑤ 故障单 → ⑥ SLA → ⑦ 施工/PTW → ⑧ 供应商/随工/安全 → ⑨ 人员/请假 → ⑩ 结束交班\n目前到了第⑨步。",
    pronunciation: "staffing 的 a 读 /æ/：/stæfɪŋ/。\nleave 读 /liːv/（请假），不是 /liːf/。\narrangements 四音节，重音在第二音节：/əˈreɪndʒmənts/。\n节奏：NOW let's re-VIEW ｜ to-DAY'S STAFF-ing ｜ and LEAVE ar-RANGE-ments.",
    quiz: [
      { q: "现在我们检查设备状态，怎么说？", a: "Now let's review the equipment status." },
      { q: "staffing 和 leave arrangements 分别指什么？", a: "staffing = 值班安排（谁在岗），leave arrangements = 请假安排（谁不在）。两者一起检查 = 全面了解今天的人力资源。" },
    ],
  },
];

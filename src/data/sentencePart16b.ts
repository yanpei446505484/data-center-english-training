// EXPORTS: MOCK_SENTENCES_PART16B

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART16B: ISentence[] = [
  {
    id: 1821,
    en: "Please confirm the scope of work before starting.",
    cn: "开始工作前请确认工作范围。",
    ipa: "/pliːz kənˈfɜːrm ðə skoʊp ɒv wɜːrk bɪˈfɔːr ˈstɑːrtɪŋ/",
    tags: ["第1821句", "工作范围确认"],
    when: "供应商电话沟通场景。",
    words: [
      { w: "scope", ipa: "/skoʊp/", pos: "名词", cn: "范围", memory: "scope of work = 工作范围（SOW），明确本次维修/维护的具体内容、设备、区域、时间。\n运维中必须在开工前确认scope，防止供应商做超出许可范围的操作。", phonics: "sc 读 /sk/，ope 读 /oʊp/", collocations: [["scope of work", "工作范围"], ["project scope", "项目范围"], ["out of scope", "超出范围"]], examples: [["What is the scope of today's work?", "今天的工作范围是什么？"], ["This task is out of scope.", "这项任务超出范围。"]] },
      { w: "confirm", ipa: "/kənˈfɜːrm/", pos: "动词", cn: "确认", memory: "con- = together, firm = 坚固 → 使确定。\n数据中心操作中，confirm 是最常用的确认动词：confirm alarm / confirm isolation / confirm scope。", phonics: "con 读 /kən/，firm 读 /fɜːrm/", collocations: [["confirm the scope", "确认范围"], ["confirm completion", "确认完成"], ["confirm isolation", "确认隔离"]], examples: [["Please confirm the alarm has cleared.", "请确认告警已恢复。"], ["We need to confirm the LOTO.", "我们需要确认LOTO。"]] },
    ],
    phrases: [
      { p: "scope of work", ipa: "/skoʊp ɒv wɜːrk/", cn: "工作范围", why: "scope of work (SOW) 是供应商管理的关键术语，明确本次工作的边界。超出scope的工作必须重新申请PTW。" },
    ],
    grammar: [
      { q: "before starting 和 before you start 有什么区别？", a: "两者意思相同，before starting 更简洁正式。\n✅ Please confirm the scope before starting.（开始前请确认范围）\n✅ Please confirm the scope before you start.（你开始前请确认范围）\n书面/正式场景用 before + 动名词。" },
    ],
    pattern: "Please confirm + 名词 + before + 动名词",
    patternExamples: [
      { en: "Please confirm the LOTO before working.", cn: "工作前请确认LOTO。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }] },
      { en: "Please confirm the isolation before proceeding.", cn: "继续前请确认隔离。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }] },
      { en: "Please confirm the tools before entering.", cn: "进入前请确认工具。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }] },
    ],
    thinking: "供应商到场后、开工前，值班经理必须与供应商工程师当面确认工作范围（scope of work）。这一步防止供应商误操作其他设备或进入非授权区域。scope 通常写在PTW（作业许可证）上。",
    pronunciation: "scope 的 o 读长音 /oʊ/。work 的 or 读 /ɜːr/，不要读成 /ɔːr/。",
    quiz: [
      { q: "开始工作前请确认隔离措施，怎么说？", a: "Please confirm the isolation measures before starting work." },
    ],
  },
  {
    id: 1822,
    en: "The estimated work duration is two hours.",
    cn: "预计工作时长为两小时。",
    ipa: "/ði ˈɛstɪmeɪtɪd wɜːrk djʊˈreɪʃən ɪz tuː aʊərz/",
    tags: ["第1822句", "工作时间预估"],
    when: "供应商电话沟通场景。",
    words: [
      { w: "estimated", ipa: "/ˈɛstɪmeɪtɪd/", pos: "形容词", cn: "预计的；估计的", memory: "estimate (v.) → estimated (adj.)。数据中心常用 estimated time / estimated duration / ETR (Estimated Time of Repair)。", phonics: "es 读 /ɛs/，ti 读 /tɪ/，ma 读 /meɪ/", collocations: [["estimated time", "预计时间"], ["estimated duration", "预计时长"], ["ETR", "预计修复时间"]], examples: [["The estimated repair time is one hour.", "预计修复时间为一小时。"], ["What is the ETR?", "预计修复时间是多少？"]] },
      { w: "duration", ipa: "/djʊˈreɪʃən/", pos: "名词", cn: "时长；持续时间", memory: "dur(e) = 持续 + -ation = 持续的时间。\nPTW上必须写明estimated duration，超时需申请延期。", phonics: "du 读 /djʊ/，ra 读 /reɪ/，tion 读 /ʃən/", collocations: [["work duration", "工作时长"], ["short duration", "短时长"], ["for the duration of", "在…期间"]], examples: [["What is the estimated duration?", "预计时长是多少？"], ["The outage lasted for a short duration.", "停电持续了很短时间。"]] },
    ],
    phrases: [
      { p: "estimated work duration", ipa: "/ˈɛstɪmeɪtɪd wɜːrk djʊˈreɪʃən/", cn: "预计工作时长", why: "在PTW和交接记录中必须写明预计时长，超时需重新评估风险并申请延期。" },
    ],
    grammar: [
      { q: "为什么用 is two hours 而不是 is for two hours？", a: "is two hours 直接说明时长等于两小时，简洁自然。\nis for two hours 强调'持续两小时'，多用于计划/安排语境。\n✅ The duration is two hours.（时长为两小时）\n✅ The work is scheduled for two hours.（工作计划持续两小时）" },
    ],
    pattern: "The estimated + 名词 + is + 时间",
    patternExamples: [
      { en: "The estimated repair time is thirty minutes.", cn: "预计修复时间为三十分钟。", words: [{ w: "repair", ipa: "/rɪˈpeər/", cn: "维修", phonics: "re 读 /rɪ/，pair 读 /peər/" }] },
      { en: "The estimated arrival time is 3 PM.", cn: "预计到达时间为下午3点。", words: [] },
      { en: "The estimated downtime is four hours.", cn: "预计停机时间为四小时。", words: [] },
    ],
    thinking: "工作时长直接影响系统冗余窗口。值班经理需要知道供应商预计多久完成，以评估风险敞口时间。如果实际超时，必须立即评估是否继续还是中止。",
    pronunciation: "duration 的 u 读 /djʊ/，不要读成 /duː/。hours 的 h 不发音，读 /aʊərz/。",
    quiz: [
      { q: "预计停机时间为四小时，怎么说？", a: "The estimated downtime is four hours." },
    ],
  },
  {
    id: 1823,
    en: "Please verify the LOTO is properly applied.",
    cn: "请确认LOTO已正确执行。",
    ipa: "/pliːz ˈvɛrɪfaɪ ðə ˈloʊtoʊ ɪz ˈprɒpərli əˈplaɪd/",
    tags: ["第1823句", "LOTO确认"],
    when: "供应商电话沟通场景。",
    words: [
      { w: "verify", ipa: "/ˈvɛrɪfaɪ/", pos: "动词", cn: "核实；验证", memory: "ver(y) = 真实 + -ify = 使真实 → 核实确认。\nverify 比 confirm 更强调'通过检查来确认'，常用于安全关键步骤。", phonics: "ver 读 /vɛr/，i 读 /ɪ/，fy 读 /faɪ/", collocations: [["verify the LOTO", "确认LOTO"], ["verify isolation", "确认隔离"], ["verify completion", "确认完成"]], examples: [["Please verify the breaker is locked out.", "请确认断路器已锁定。"], ["We need to verify the test results.", "我们需要核实测试结果。"]] },
      { w: "properly", ipa: "/ˈprɒpərli/", pos: "副词", cn: "正确地；适当地", memory: "proper (adj.) → properly (adv.)。安全操作中强调'正确地'执行，不是随便做做。", phonics: "prop 读 /prɒp/，er 读 /ər/，ly 读 /li/", collocations: [["properly applied", "正确执行"], ["properly installed", "正确安装"], ["properly documented", "正确记录"]], examples: [["Is the LOTO properly applied?", "LOTO已正确执行了吗？"], ["Please ensure all PPE is properly worn.", "请确保所有PPE正确穿戴。"]] },
    ],
    phrases: [
      { p: "LOTO is properly applied", ipa: "/ˈloʊtoʊ ɪz ˈprɒpərli əˈplaɪd/", cn: "LOTO已正确执行", why: "LOTO (Lock Out Tag Out) 是数据中心最核心的安全程序。properly applied 强调不是'做了'就行，而是'正确地做了'——锁定、挂牌、测试三步缺一不可。" },
    ],
    grammar: [
      { q: "verify 和 confirm 有什么区别？", a: "verify = 核实（通过检查/测试来确认）\nconfirm = 确认（口头或书面认可）\n✅ Verify the LOTO.（核实LOTO → 去现场检查锁和标签）\n✅ Confirm the scope.（确认范围 → 口头/文件确认）\n安全关键步骤用 verify，一般确认用 confirm。" },
    ],
    pattern: "Please verify + 名词 + is + 过去分词",
    patternExamples: [
      { en: "Please verify the breaker is locked out.", cn: "请确认断路器已锁定。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
      { en: "Please verify the valve is closed.", cn: "请确认阀门已关闭。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "valve", ipa: "/vælv/", cn: "阀门", phonics: "valve 读 /vælv/" }] },
      { en: "Please verify the grounding is connected.", cn: "请确认接地已连接。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
    ],
    thinking: "LOTO 是数据中心安全红线。值班经理必须在供应商开工前亲自核实LOTO已正确执行：锁定(Lock)、挂牌(Tag)、测试零能量(Verify zero energy)。这是保护供应商工程师生命安全的最后一道防线。",
    pronunciation: "verify 的 e 读 /ɛ/。properly 的 o 读 /ɒ/。applied 的 a 读 /ə/。",
    quiz: [
      { q: "请确认阀门已关闭，怎么说？", a: "Please verify the valve is closed." },
    ],
  },
  {
    id: 1824,
    en: "Do you have all the required tools and spare parts?",
    cn: "您是否带齐了所有必需的工具和备件？",
    ipa: "/duː jʊ hæv ɔːl ðə rɪˈkwaɪərd tuːlz ænd speər pɑːrts/",
    tags: ["第1824句", "工具备件检查"],
    when: "供应商电话沟通场景。",
    words: [
      { w: "required", ipa: "/rɪˈkwaɪərd/", pos: "形容词", cn: "必需的；要求的", memory: "require (v.) → required (adj.)。required tools = 必需工具，required PPE = 必需防护装备。PTW上会列出required items清单。", phonics: "re 读 /rɪ/，qui 读 /kwaɪ/，red 读 /ərd/", collocations: [["required tools", "必需工具"], ["required PPE", "必需防护装备"], ["required documents", "必需文件"]], examples: [["Do you have all required tools?", "您带齐所有必需工具了吗？"], ["Please bring the required spare parts.", "请带上必需的备件。"]] },
      { w: "spare parts", ipa: "/speər pɑːrts/", pos: "名词", cn: "备件", memory: "spare = 备用的，parts = 零件。数据中心必须储备关键备件（如断路器、保险丝、传感器），供应商也应自带备件以缩短修复时间。", phonics: "spare 的 a 读 /eɪ/，parts 的 ar 读 /ɑːr/", collocations: [["spare parts inventory", "备件库存"], ["critical spare parts", "关键备件"], ["order spare parts", "订购备件"]], examples: [["Do we have spare breakers in stock?", "我们有备用断路器库存吗？"], ["The spare parts will arrive tomorrow.", "备件明天到货。"]] },
    ],
    phrases: [
      { p: "required tools and spare parts", ipa: "/rɪˈkwaɪərd tuːlz ænd speər pɑːrts/", cn: "必需的工具和备件", why: "开工前必须确认供应商带齐了工具和备件。缺少工具=无法开工=浪费时间；缺少备件=无法修复=延长停机。" },
    ],
    grammar: [
      { q: "Do you have...? 和 Have you brought...? 有什么区别？", a: "Do you have = 你带了…吗？（一般疑问句，问状态）\nHave you brought = 你带来了…吗？（现在完成时，强调动作）\n✅ Do you have all the tools?（你带齐工具了吗？）\n✅ Have you brought the spare parts?（你带备件来了吗？）\n口语中两者可互换，Do you have 更简洁。" },
    ],
    pattern: "Do you have all the required + 名词？",
    patternExamples: [
      { en: "Do you have all the required PPE?", cn: "您带齐所有必需防护装备了吗？", words: [] },
      { en: "Do you have all the required documents?", cn: "您带齐所有必需文件了吗？", words: [] },
      { en: "Do you have all the required permits?", cn: "您带齐所有必需许可证了吗？", words: [] },
    ],
    thinking: "供应商到场后、开工前，值班经理应检查供应商是否带齐工具和备件。这是PTW审批的前提条件之一。如果缺少关键工具或备件，应拒绝开工，避免无效占用PTW窗口。",
    pronunciation: "required 的 qui 读 /kwaɪ/，不要读成 /kwiː/。spare 的 a 读长音 /eɪ/。",
    quiz: [
      { q: "您带齐所有必需防护装备了吗？怎么说？", a: "Do you have all the required PPE?" },
    ],
  },
  {
    id: 1825,
    en: "Please wear your safety helmet and gloves at all times.",
    cn: "请全程佩戴安全帽和手套。",
    ipa: "/pliːz weər jɔːr ˈseɪfti ˈhɛlmɪt ænd ɡlʌvz æt ɔːl taɪmz/",
    tags: ["第1825句", "安全装备要求"],
    when: "供应商电话沟通场景。",
    words: [
      { w: "safety helmet", ipa: "/ˈseɪfti ˈhɛlmɪt/", pos: "名词", cn: "安全帽", memory: "safety = 安全，helmet = 头盔。数据中心机房内（特别是施工区域）必须佩戴安全帽，防止头部碰撞桥架/管道。", phonics: "helmet 的 e 读 /ɛ/，不要读成 /ɪ/", collocations: [["wear a safety helmet", "佩戴安全帽"], ["hard hat", "安全帽（美式）"], ["helmet inspection", "安全帽检查"]], examples: [["Please put on your safety helmet.", "请戴上安全帽。"], ["All visitors must wear hard hats.", "所有访客必须戴安全帽。"]] },
      { w: "at all times", ipa: "/æt ɔːl taɪmz/", pos: "副词短语", cn: "始终；全程", memory: "at all times = 在所有时间 = 始终。安全规程中常用，强调'没有例外'。", phonics: "at 读 /æt/，all 读 /ɔːl/，times 读 /taɪmz/", collocations: [["at all times", "始终"], ["wear PPE at all times", "始终佩戴PPE"], ["remain vigilant at all times", "始终保持警惕"]], examples: [["Please keep your badge visible at all times.", "请始终佩戴工牌可见。"], ["Supervision is required at all times.", "全程需要监督。"]] },
    ],
    phrases: [
      { p: "wear ... at all times", ipa: "/weər æt ɔːl taɪmz/", cn: "全程佩戴…", why: "安全规程用语，强调'从进入现场到离开现场的全程'都必须佩戴，不允许任何时间取下。" },
    ],
    grammar: [
      { q: "at all times 和 always 有什么区别？", a: "at all times = 在所有时间（正式用语，强调规章/制度）\nalways = 总是（通用词）\n✅ Wear PPE at all times.（全程佩戴PPE → 安全规程用语）\n✅ He always wears his helmet.（他总是戴安全帽 → 描述习惯）\n规章制度用 at all times，日常描述用 always。" },
    ],
    pattern: "Please wear + 防护装备 + at all times",
    patternExamples: [
      { en: "Please wear your safety glasses at all times.", cn: "请全程佩戴安全眼镜。", words: [{ w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }] },
      { en: "Please wear your ear protection at all times.", cn: "请全程佩戴耳部防护。", words: [{ w: "protection", ipa: "/prəˈtɛkʃən/", cn: "保护", phonics: "pro 读 /prə/，tection 读 /tɛkʃən/" }] },
      { en: "Please wear your high-visibility vest at all times.", cn: "请全程穿反光背心。", words: [] },
    ],
    thinking: "数据中心机房内存在多种头部和手部伤害风险：低矮桥架、锐利边角、高温管道、带电设备。安全帽和手套是最基本的PPE，值班经理必须在供应商进入机房前明确要求。",
    pronunciation: "helmet 的 e 读 /ɛ/，不要读成 /eɪ/。gloves 的 o 读 /ʌ/，不要读成 /oʊ/。",
    quiz: [
      { q: "请全程穿反光背心，怎么说？", a: "Please wear your high-visibility vest at all times." },
    ],
  },
  {
    id: 1826,
    en: "I will supervise your work throughout the process.",
    cn: "我将全程监督您的工作。",
    ipa: "/aɪ wɪl ˈsuːpərvaɪz jɔːr wɜːrk θruːˈaʊt ðə ˈprɒsɛs/",
    tags: ["第1826句", "工作监督"],
    when: "供应商电话沟通场景。",
    words: [
      { w: "supervise", ipa: "/ˈsuːpərvaɪz/", pos: "动词", cn: "监督；监管", memory: "super- = 在上，vise = 看 → 从上方看着 → 监督。数据中心要求供应商工作全程有值班人员监督（escort/supervision），防止误操作。", phonics: "su 读 /suː/，per 读 /pər/，vise 读 /vaɪz/", collocations: [["supervise the work", "监督工作"], ["supervise the vendor", "监督供应商"], ["unsupervised work", "无监督工作"]], examples: [["All vendor work must be supervised.", "所有供应商工作必须被监督。"], ["I will supervise the maintenance.", "我将监督维护工作。"]] },
      { w: "throughout", ipa: "/θruːˈaʊt/", pos: "介词/副词", cn: "贯穿；全程", memory: "through + out = 从头到尾。throughout the process = 贯穿整个过程。", phonics: "through 读 /θruː/，out 读 /aʊt/", collocations: [["throughout the process", "全程"], ["throughout the day", "全天"], ["throughout the year", "全年"]], examples: [["We monitored the system throughout the night.", "我们整夜监控系统。"], ["Supervision is required throughout.", "全程需要监督。"]] },
    ],
    phrases: [
      { p: "throughout the process", ipa: "/θruːˈaʊt ðə ˈprɒsɛs/", cn: "全程；贯穿整个过程", why: "强调监督不是'看一眼就走'，而是从开工到收工的全程在场。这是数据中心安全管理的基本要求。" },
    ],
    grammar: [
      { q: "supervise 和 monitor 有什么区别？", a: "supervise = 监督（管人，确保人按规程操作）\nmonitor = 监控（管设备/数据，观察状态变化）\n✅ Supervise the vendor.（监督供应商 → 管人）\n✅ Monitor the alarms.（监控告警 → 管设备）\n供应商工作用 supervise，系统状态用 monitor。" },
    ],
    pattern: "I will supervise + 名词 + throughout + 时间/过程",
    patternExamples: [
      { en: "I will supervise the testing throughout.", cn: "我将全程监督测试。", words: [{ w: "testing", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "I will supervise the installation throughout the process.", cn: "我将全程监督安装。", words: [] },
      { en: "We will escort you throughout your visit.", cn: "我们将全程陪同您的访问。", words: [{ w: "escort", ipa: "/ɪˈskɔːrt/", cn: "陪同", phonics: "es 读 /ɪs/，cort 读 /kɔːrt/" }] },
    ],
    thinking: "数据中心安全管理规定：供应商在机房内的所有工作必须有值班人员全程监督。值班经理需要明确告知供应商这一要求，既是安全需要，也是合规需要。",
    pronunciation: "supervise 的 su 读 /suː/，不要读成 /sjuː/。throughout 的 th 读 /θ/。",
    quiz: [
      { q: "所有供应商工作必须被监督，怎么说？", a: "All vendor work must be supervised." },
    ],
  },
  {
    id: 1827,
    en: "The work has been completed successfully.",
    cn: "工作已顺利完成。",
    ipa: "/ðə wɜːrk hæz biːn kəmˈpliːtɪd səkˈsɛsfəli/",
    tags: ["第1827句", "工作完成确认"],
    when: "供应商电话沟通场景。",
    words: [
      { w: "completed", ipa: "/kəmˈpliːtɪd/", pos: "动词过去分词", cn: "完成", memory: "complete (v.) → completed (过去分词)。数据中心中，complete 用于正式确认工作/操作已完成。", phonics: "com 读 /kəm/，plete 读 /pliːt/", collocations: [["work completed", "工作完成"], ["successfully completed", "顺利完成"], ["MOP completed", "MOP完成"]], examples: [["The MOP has been completed.", "MOP已完成。"], ["All steps have been completed.", "所有步骤已完成。"]] },
      { w: "successfully", ipa: "/səkˈsɛsfəli/", pos: "副词", cn: "成功地", memory: "success (n.) → successful (adj.) → successfully (adv.)。强调工作不仅'做了'，而且'做成功了'——达到预期效果。", phonics: "suc 读 /sək/，cess 读 /sɛs/，ful 读 /fəl/，ly 读 /li/", collocations: [["completed successfully", "顺利完成"], ["tested successfully", "测试成功"], ["restored successfully", "恢复成功"]], examples: [["The repair was completed successfully.", "维修顺利完成。"], ["The load transfer was successful.", "负载切换成功。"]] },
    ],
    phrases: [
      { p: "completed successfully", ipa: "/kəmˈpliːtɪd səkˈsɛsfəli/", cn: "顺利完成", why: "不仅确认'完成了'，还确认'成功了'。在数据中心语境中，完成≠成功——可能完成了但没达到预期效果。successfully 是关键确认词。" },
    ],
    grammar: [
      { q: "has been completed 和 is completed 有什么区别？", a: "has been completed = 已完成（现在完成时被动，强调动作刚完成）\nis completed = 已完成（一般现在时被动，强调状态）\n✅ The work has been completed.（工作已完成 → 刚刚完成）\n✅ The work is completed.（工作是已完成的状态）\n汇报刚完成的工作用 has been completed。" },
    ],
    pattern: "The + 名词 + has been completed successfully",
    patternExamples: [
      { en: "The repair has been completed successfully.", cn: "维修已顺利完成。", words: [{ w: "repair", ipa: "/rɪˈpeər/", cn: "维修", phonics: "re 读 /rɪ/，pair 读 /peər/" }] },
      { en: "The testing has been completed successfully.", cn: "测试已顺利完成。", words: [{ w: "testing", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "The installation has been completed successfully.", cn: "安装已顺利完成。", words: [] },
    ],
    thinking: "供应商完成工作后，值班经理需要确认工作已顺利完成。这是后续步骤（测试、清理、归还PTW）的前提。如果工作没有成功完成，需要评估是否重试、回退或升级。",
    pronunciation: "completed 的 plete 读 /pliːt/，不要读成 /pleɪt/。successfully 重音在第二音节。",
    quiz: [
      { q: "测试已顺利完成，怎么说？", a: "The testing has been completed successfully." },
    ],
  },
  {
    id: 1828,
    en: "Please show me the test results.",
    cn: "请给我看一下测试结果。",
    ipa: "/pliːz ʃoʊ miː ðə tɛst rɪˈzʌlts/",
    tags: ["第1828句", "测试结果查看"],
    when: "供应商电话沟通场景。",
    words: [
      { w: "test results", ipa: "/tɛst rɪˈzʌlts/", pos: "名词", cn: "测试结果", memory: "test = 测试，results = 结果。数据中心维修/维护后必须进行功能测试，确认设备恢复正常。测试结果需记录并存档。", phonics: "test 读 /tɛst/，results 的 u 读 /ʌ/", collocations: [["test results", "测试结果"], ["pass the test", "通过测试"], ["test report", "测试报告"]], examples: [["The test results look good.", "测试结果看起来不错。"], ["Please record the test results.", "请记录测试结果。"]] },
      { w: "show", ipa: "/ʃoʊ/", pos: "动词", cn: "展示；给…看", memory: "show = 展示。值班经理需要亲眼看到测试结果（仪表读数、指示灯状态、屏幕截图），而非仅听口头汇报。", phonics: "sh 读 /ʃ/，ow 读 /oʊ/", collocations: [["show the results", "展示结果"], ["show the reading", "展示读数"], ["show the evidence", "展示证据"]], examples: [["Please show me the meter reading.", "请给我看仪表读数。"], ["Can you show me the alarm log?", "能给我看告警日志吗？"]] },
    ],
    phrases: [
      { p: "show me the test results", ipa: "/ʃoʊ miː ðə tɛst rɪˈzʌlts/", cn: "给我看测试结果", why: "值班经理需要亲眼验证测试结果，这是'see it yourself'原则。不能仅凭供应商口头说'修好了'就签字放行。" },
    ],
    grammar: [
      { q: "show me 和 show to me 有什么区别？", a: "show me = 给我看（双宾语结构，更自然）\nshow to me = 展示给我（介词结构，稍正式）\n✅ Please show me the results.（请给我看结果 → 自然口语）\n✅ Please show the results to me.（请把结果展示给我 → 稍正式）\n口语中 show me 更常用。" },
    ],
    pattern: "Please show me the + 名词",
    patternExamples: [
      { en: "Please show me the meter reading.", cn: "请给我看仪表读数。", words: [{ w: "reading", ipa: "/ˈriːdɪŋ/", cn: "读数", phonics: "read 读 /riːd/，ing 读 /ɪŋ/" }] },
      { en: "Please show me the isolation certificate.", cn: "请给我看隔离证明。", words: [] },
      { en: "Please show me the completion report.", cn: "请给我看完工报告。", words: [{ w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
    ],
    thinking: "维修完成后，值班经理必须亲自查看测试结果。这包括：设备运行指示灯、仪表读数、BMS/DCIM状态显示、功能测试记录。只有确认测试结果正常，才能进入下一步（清理现场）。",
    pronunciation: "results 的 u 读 /ʌ/，不要读成 /uː/。show 的 ow 读 /oʊ/。",
    quiz: [
      { q: "请给我看仪表读数，怎么说？", a: "Please show me the meter reading." },
    ],
  },
  {
    id: 1829,
    en: "Please clean up the work area before leaving.",
    cn: "离开前请清理工作区域。",
    ipa: "/pliːz kliːn ʌp ðə wɜːrk ˈɛəriə bɪˈfɔːr ˈliːvɪŋ/",
    tags: ["第1829句", "清理现场"],
    when: "供应商电话沟通场景。",
    words: [
      { w: "clean up", ipa: "/kliːn ʌp/", pos: "动词短语", cn: "清理；打扫", memory: "clean = 清洁，up = 完成 → clean up = 彻底清理。数据中心要求供应商完工后清理现场，包括工具、废料、包装等。", phonics: "clean 的 ea 读 /iː/，up 读 /ʌp/", collocations: [["clean up the area", "清理区域"], ["clean up after work", "工作后清理"], ["site cleanup", "现场清理"]], examples: [["Please clean up before you leave.", "离开前请清理。"], ["The site must be cleaned up.", "现场必须清理干净。"]] },
      { w: "work area", ipa: "/wɜːrk ˈɛəriə/", pos: "名词", cn: "工作区域", memory: "work = 工作，area = 区域。指供应商实际操作的那个具体区域，需要恢复原状。", phonics: "area 的 ea 读 /ɛə/，不要读成 /iːə/", collocations: [["work area", "工作区域"], ["restricted area", "限制区域"], ["clear the area", "清理区域"]], examples: [["Please keep the work area tidy.", "请保持工作区域整洁。"], ["No food or drinks in the work area.", "工作区域禁止饮食。"]] },
    ],
    phrases: [
      { p: "clean up the work area", ipa: "/kliːn ʌp ðə wɜːrk ˈɛəriə/", cn: "清理工作区域", why: "数据中心是洁净环境，遗留的工具、废料、包装可能造成安全隐患（绊倒、短路、堵塞）。清理现场是供应商的基本责任。" },
    ],
    grammar: [
      { q: "before leaving 和 before you leave 哪个更正式？", a: "before leaving（before + 动名词）更正式简洁，常用于书面/规章。\nbefore you leave 更口语化。\n✅ Clean up before leaving.（离开前清理 → 规章用语）\n✅ Clean up before you leave.（你离开前清理 → 口语）\n两者意思相同，书面用 leaving。" },
    ],
    pattern: "Please clean up + 名词 + before + 动名词",
    patternExamples: [
      { en: "Please clean up the site before departure.", cn: "离开前请清理现场。", words: [{ w: "site", ipa: "/saɪt/", cn: "场地", phonics: "site 读 /saɪt/" }] },
      { en: "Please clean up the equipment room before closing the PTW.", cn: "关闭PTW前请清理设备间。", words: [{ w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "Please tidy up the area before handing over.", cn: "交接前请整理区域。", words: [{ w: "area", ipa: "/ˈeəriə/", cn: "区域", phonics: "a 读 /eə/，rea 读 /riə/" }] },
    ],
    thinking: "清理现场（housekeeping）是数据中心5S管理的基本要求。供应商离开前必须：收走所有工具、清除废料包装、恢复设备柜门关闭、擦拭可能的手印/脚印。值班经理应现场验收。",
    pronunciation: "clean 的 ea 读长音 /iː/。area 读 /ˈɛəriə/，三个音节。",
    quiz: [
      { q: "离开前请清理现场，怎么说？", a: "Please clean up the site before leaving." },
    ],
  },
  {
    id: 1830,
    en: "Please return the PTW to the control room.",
    cn: "请将作业许可证归还至中控室。",
    ipa: "/pliːz rɪˈtɜːrn ðə ˌpiː tiː ˈdʌbljuː tuː ðə kənˈtroʊl ruːm/",
    tags: ["第1830句", "PTW归还"],
    when: "供应商电话沟通场景。",
    words: [
      { w: "return", ipa: "/rɪˈtɜːrn/", pos: "动词", cn: "归还；返回", memory: "re- = 再次，turn = 转 → 转回 → 归还。PTW完工后必须归还至中控室存档，这是安全闭环管理的最后一步。", phonics: "re 读 /rɪ/，turn 读 /tɜːrn/", collocations: [["return the PTW", "归还PTW"], ["return the access card", "归还门禁卡"], ["return the tools", "归还工具"]], examples: [["Please return the PTW after completion.", "完工后请归还PTW。"], ["Don't forget to return your badge.", "别忘了归还工牌。"]] },
      { w: "control room", ipa: "/kənˈtroʊl ruːm/", pos: "名词", cn: "中控室", memory: "control = 控制，room = 房间。中控室是数据中心的大脑，负责监控、调度、存档。所有PTW的签发和归还都在中控室完成。", phonics: "control 的 o 读 /oʊ/，room 读 /ruːm/", collocations: [["control room", "中控室"], ["NOC", "网络运营中心"], ["security control room", "安保中控室"]], examples: [["Please report to the control room.", "请到中控室报到。"], ["The control room monitors all alarms.", "中控室监控所有告警。"]] },
    ],
    phrases: [
      { p: "return the PTW", ipa: "/rɪˈtɜːrn ðə ˌpiː tiː ˈdʌbljuː/", cn: "归还作业许可证", why: "PTW闭环管理：签发→执行→完工确认→归还存档。归还PTW意味着本次作业正式结束，系统可以恢复正常运行状态。" },
    ],
    grammar: [
      { q: "return to 和 return back 哪个正确？", a: "return to = 归还到（正确用法）\nreturn back = ❌ 冗余错误（return 本身已含'回'的意思）\n✅ Return the PTW to the control room.（正确）\n❌ Return the PTW back to the control room.（冗余）\nreturn 不要加 back。" },
    ],
    pattern: "Please return + 名词 + to + 地点",
    patternExamples: [
      { en: "Please return the access card to security.", cn: "请将门禁卡归还至安保处。", words: [{ w: "access", ipa: "/ˈæksɛs/", cn: "门禁", phonics: "ac 读 /æk/，cess 读 /sɛs/" }, { w: "security", ipa: "/sɪˈkjʊrɪti/", cn: "安防", phonics: "se 读 /sɪ/，curity 读 /kjʊrɪti/" }] },
      { en: "Please return the keys to the control room.", cn: "请将钥匙归还至中控室。", words: [{ w: "control", ipa: "/kənˈtroʊl/", cn: "控制", phonics: "con 读 /kən/，trol 读 /troʊl/" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "Please return the tools to the storeroom.", cn: "请将工具归还至仓库。", words: [] },
    ],
    thinking: "PTW归还是安全闭环管理的最后一步。供应商完工后必须将PTW交回中控室，值班经理签字确认完工，PTW存档备查。未归还PTW意味着作业未正式关闭，系统仍处于'作业中'状态。",
    pronunciation: "PTW 逐字母读 /ˌpiː tiː ˈdʌbljuː/。control 的 o 读 /oʊ/。",
    quiz: [
      { q: "请将门禁卡归还至安保处，怎么说？", a: "Please return the access card to security." },
    ],
  },
  {
    id: 1831,
    en: "Please sign out at the security gate when you leave.",
    cn: "离开时请在门岗签退。",
    ipa: "/pliːz saɪn aʊt æt ðə sɪˈkjʊrɪti ɡeɪt wɛn jʊ liːv/",
    tags: ["第1831句", "离开登记"],
    when: "供应商电话沟通场景。",
    words: [
      { w: "sign out", ipa: "/saɪn aʊt/", pos: "动词短语", cn: "签退；登记离开", memory: "sign = 签名，out = 出 → 签名出去 = 签退。进入时 sign in，离开时 sign out，形成完整的访客记录闭环。", phonics: "sign 的 i 读 /aɪ/，out 读 /aʊt/", collocations: [["sign out", "签退"], ["sign in", "签到"], ["sign-out sheet", "签退表"]], examples: [["Please sign out before leaving.", "离开前请签退。"], ["Did the vendor sign out?", "供应商签退了吗？"]] },
      { w: "security gate", ipa: "/sɪˈkjʊrɪti ɡeɪt/", pos: "名词", cn: "门岗；安保岗亭", memory: "security = 安保，gate = 门。数据中心园区入口设有门岗，负责访客登记、身份验证、物品检查。", phonics: "security 的 u 读 /jʊ/，gate 的 a 读 /eɪ/", collocations: [["security gate", "门岗"], ["main gate", "大门"], ["gate pass", "通行证"]], examples: [["Please register at the security gate.", "请在门岗登记。"], ["The security guard is at the main gate.", "保安在大门处。"]] },
    ],
    phrases: [
      { p: "sign out at the security gate", ipa: "/saɪn aʊt æt ðə sɪˈkjʊrɪti ɡeɪt/", cn: "在门岗签退", why: "访客管理闭环：sign in → work → sign out。签退记录用于审计追踪，确认供应商已离开园区。" },
    ],
    grammar: [
      { q: "when you leave 和 before you leave 有什么区别？", a: "when you leave = 你离开时（离开的那一刻）\nbefore you leave = 你离开前（离开之前）\n✅ Sign out when you leave.（离开时签退 → 离开时做）\n✅ Clean up before you leave.（离开前清理 → 离开之前做）\n签退是离开时的动作，用 when。" },
    ],
    pattern: "Please sign out + 地点/方式 + when + 从句",
    patternExamples: [
      { en: "Please sign out at reception when you leave.", cn: "离开时请在前台签退。", words: [{ w: "sign", ipa: "/saɪn/", cn: "签字", phonics: "sign 读 /saɪn/" }] },
      { en: "Please return your badge when you exit.", cn: "出去时请归还工牌。", words: [] },
      { en: "Please check out at the front desk when you finish.", cn: "完成时请在前台办理离开。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "数据中心访客管理要求：进入签到、离开签退。签退记录用于确认供应商已离开园区，防止人员滞留。值班经理应提醒供应商签退，并确认安保已记录。",
    pronunciation: "sign 的 gn 不发音，读 /saɪn/。security 的重音在第二音节 /sɪˈkjʊrɪti/。",
    quiz: [
      { q: "离开时请在前台签退，怎么说？", a: "Please sign out at reception when you leave." },
    ],
  },
  {
    id: 1832,
    en: "The vendor engineer has left the site.",
    cn: "供应商工程师已离开现场。",
    ipa: "/ðə ˈvɛndər ˈɛndʒɪnɪər hæz lɛft ðə saɪt/",
    tags: ["第1832句", "供应商离开确认"],
    when: "供应商电话沟通场景。",
    words: [
      { w: "left", ipa: "/lɛft/", pos: "动词过去分词", cn: "离开（leave的过去分词）", memory: "leave → left → left。has left = 已经离开（现在完成时）。值班经理需要在交接记录中确认供应商已离开。", phonics: "left 的 e 读 /ɛ/，ft 读 /ft/", collocations: [["has left the site", "已离开现场"], ["left the building", "离开大楼"], ["left the premises", "离开场所"]], examples: [["The vendor has left the site.", "供应商已离开现场。"], ["When did the engineer leave?", "工程师什么时候离开的？"]] },
      { w: "site", ipa: "/saɪt/", pos: "名词", cn: "现场；站点", memory: "site = 地点/现场。data center site = 数据中心现场。on site = 在现场，off site = 不在现场。", phonics: "site 的 i 读 /aɪ/，不要和 sight（视力）混淆", collocations: [["on site", "在现场"], ["off site", "不在现场"], ["site visit", "现场访问"]], examples: [["The engineer is on site now.", "工程师现在在现场。"], ["We need an on-site inspection.", "我们需要现场检查。"]] },
    ],
    phrases: [
      { p: "has left the site", ipa: "/hæz lɛft ðə saɪt/", cn: "已离开现场", why: "交接记录中需要明确记录供应商离开时间，确认园区内无外部人员滞留。这是安全管理的闭环要求。" },
    ],
    grammar: [
      { q: "has left 和 left 有什么区别？", a: "has left = 已经离开（现在完成时，强调对现在的影响）\nleft = 离开了（一般过去时，只说过去的事）\n✅ The vendor has left the site.（供应商已离开 → 现在不在现场了）\n✅ The vendor left at 5 PM.（供应商5点离开了 → 只说过去的事实）\n汇报当前状态用 has left，说过去的事用 left。" },
    ],
    pattern: "The + 人 + has left + 地点",
    patternExamples: [
      { en: "The inspector has left the building.", cn: "检查员已离开大楼。", words: [{ w: "building", ipa: "/ˈbɪldɪŋ/", cn: "建筑", phonics: "build 读 /bɪld/，ing 读 /ɪŋ/" }] },
      { en: "The visitor has left the premises.", cn: "访客已离开场所。", words: [] },
      { en: "The team has left the data hall.", cn: "团队已离开机房。", words: [{ w: "data", ipa: "/ˈdeɪtə/", cn: "数据", phonics: "da 读 /deɪ/，ta 读 /tə/" }] },
    ],
    thinking: "供应商离开后，值班经理需要在交接记录中确认：供应商已离开、已签退、已归还门禁卡/PTW、现场已清理。这是完整的供应商管理闭环。",
    pronunciation: "left 的 e 读 /ɛ/，不要读成 /iː/。site 读 /saɪt/，不要读成 /sɪt/。",
    quiz: [
      { q: "检查员已离开大楼，怎么说？", a: "The inspector has left the building." },
    ],
  },
  {
    id: 1833,
    en: "Please record the work details in the logbook.",
    cn: "请将工作详情记录在日志中。",
    ipa: "/pliːz rɪˈkɔːrd ðə wɜːrk dɪˈteɪlz ɪn ðə ˈlɒɡbʊk/",
    tags: ["第1833句", "工作记录"],
    when: "供应商电话沟通场景。",
    words: [
      { w: "record", ipa: "/rɪˈkɔːrd/", pos: "动词", cn: "记录", memory: "re- = 再次，cord = 心/记忆 → 再次记住 → 记录。数据中心所有操作必须记录在案，用于审计追踪和事后分析。", phonics: "re 读 /rɪ/，cord 读 /kɔːrd/", collocations: [["record the details", "记录详情"], ["record the time", "记录时间"], ["record the findings", "记录发现"]], examples: [["Please record all findings.", "请记录所有发现。"], ["Record the alarm time.", "记录告警时间。"]] },
      { w: "logbook", ipa: "/ˈlɒɡbʊk/", pos: "名词", cn: "日志；值班记录本", memory: "log = 日志/记录，book = 本子。logbook = 值班日志，记录当班期间所有事件、操作、异常。是交接班的核心文件。", phonics: "log 读 /lɒɡ/，book 读 /bʊk/", collocations: [["shift logbook", "值班日志"], ["update the logbook", "更新日志"], ["logbook entry", "日志条目"]], examples: [["Please update the logbook.", "请更新日志。"], ["Check the logbook for details.", "查看日志了解详情。"]] },
    ],
    phrases: [
      { p: "record in the logbook", ipa: "/rɪˈkɔːrd ɪn ðə ˈlɒɡbʊk/", cn: "记录在日志中", why: "值班日志是数据中心的法律文件，记录所有重要事件。供应商工作内容、时间、结果都必须记录在案。" },
    ],
    grammar: [
      { q: "record 作动词和名词时读音一样吗？", a: "不一样！\nrecord (v.) = /rɪˈkɔːrd/（重音在第二音节）\nrecord (n.) = /ˈrɛkɔːrd/（重音在第一音节）\n✅ Please record the time.（请记录时间 → 动词 /rɪˈkɔːrd/）\n✅ Check the records.（查看记录 → 名词 /ˈrɛkɔːrdz/）\n注意根据词性调整重音。" },
    ],
    pattern: "Please record + 名词 + in + 记录载体",
    patternExamples: [
      { en: "Please record the incident in the logbook.", cn: "请将事件记录在日志中。", words: [] },
      { en: "Please record the findings in the report.", cn: "请将发现记录在报告中。", words: [{ w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
      { en: "Please record the time in the system.", cn: "请将时间记录在系统中。", words: [{ w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
    ],
    thinking: "值班日志（logbook）是数据中心最重要的记录文件之一。供应商工作的详细信息必须记录：工作内容、时间、人员、结果、遗留问题。这些记录用于交接班、审计和事后分析。",
    pronunciation: "record 作动词时重音在第二音节 /rɪˈkɔːrd/。logbook 的 o 读 /ɒ/。",
    quiz: [
      { q: "请将事件记录在日志中，怎么说？", a: "Please record the incident in the logbook." },
    ],
  },
  {
    id: 1834,
    en: "Please update the handover notes for the next shift.",
    cn: "请更新交接记录给下一班。",
    ipa: "/pliːz ˌʌpˈdeɪt ðə ˈhændoʊvər noʊts fɔːr ðə nɛkst ʃɪft/",
    tags: ["第1834句", "交接记录更新"],
    when: "供应商电话沟通场景。",
    words: [
      { w: "update", ipa: "/ˌʌpˈdeɪt/", pos: "动词", cn: "更新", memory: "up = 向上，date = 日期 → 更新到最新。数据中心要求交接记录及时更新，确保下一班掌握最新情况。", phonics: "up 读 /ʌp/，date 读 /deɪt/", collocations: [["update the notes", "更新记录"], ["update the status", "更新状态"], ["update the logbook", "更新日志"]], examples: [["Please update the handover notes.", "请更新交接记录。"], ["The status needs to be updated.", "状态需要更新。"]] },
      { w: "handover notes", ipa: "/ˈhændoʊvər noʊts/", pos: "名词", cn: "交接记录", memory: "handover = 交接，notes = 笔记/记录。handover notes = 交接记录，记录当班期间需要告知下一班的重要事项。", phonics: "hand 读 /hænd/，over 读 /oʊvər/，notes 读 /noʊts/", collocations: [["handover notes", "交接记录"], ["shift handover", "班次交接"], ["handover checklist", "交接清单"]], examples: [["Please read the handover notes.", "请阅读交接记录。"], ["The handover notes are on the desk.", "交接记录在桌上。"]] },
    ],
    phrases: [
      { p: "handover notes for the next shift", ipa: "/ˈhændoʊvər noʊts fɔːr ðə nɛkst ʃɪft/", cn: "给下一班的交接记录", why: "交接记录是班次之间信息传递的桥梁。供应商工作的所有细节都必须写入交接记录，确保下一班完全了解情况。" },
    ],
    grammar: [
      { q: "update 和 upgrade 有什么区别？", a: "update = 更新（信息、数据、软件版本）\nupgrade = 升级（硬件、系统、等级）\n✅ Update the handover notes.（更新交接记录 → 信息更新）\n✅ Upgrade the UPS firmware.（升级UPS固件 → 系统升级）\n信息用 update，硬件/系统用 upgrade。" },
    ],
    pattern: "Please update + 名词 + for + 对象",
    patternExamples: [
      { en: "Please update the status for the team.", cn: "请为团队更新状态。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Please update the schedule for next week.", cn: "请更新下周的排程。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "schedule", ipa: "/ˈʃɛdjuːl/", cn: "安排", phonics: "sched 读 /ʃɛd/，ule 读 /juːl/" }] },
      { en: "Please update the contact list for emergencies.", cn: "请更新应急联系人列表。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "contact", ipa: "/ˈkɒntækt/", cn: "联系", phonics: "con 读 /kɒn/，tact 读 /tækt/" }, { w: "emergencies", ipa: "/ɪˈmɜːrdʒənsi/", cn: "紧急", phonics: "e 读 /ɪ/，mergency 读 /mɜːrdʒənsi/" }] },
    ],
    thinking: "交接班时，当班人员必须将供应商工作的完整信息写入交接记录：工作内容、时间、结果、遗留问题、注意事项。下一班接班时首先阅读交接记录，了解上一班发生了什么。",
    pronunciation: "update 的重音在第一音节 /ˌʌpˈdeɪt/。handover 的重音也在第一音节。",
    quiz: [
      { q: "请更新应急联系人列表，怎么说？", a: "Please update the contact list for emergencies." },
    ],
  },
  {
    id: 1835,
    en: "When is the next scheduled maintenance?",
    cn: "下次计划维护是什么时候？",
    ipa: "/wɛn ɪz ðə nɛkst ˈʃɛdjuːld ˈmeɪntənəns/",
    tags: ["第1835句", "下次维护时间"],
    when: "供应商电话沟通场景。",
    words: [
      { w: "scheduled", ipa: "/ˈʃɛdjuːld/", pos: "形容词", cn: "计划的；预定的", memory: "schedule (n./v.) → scheduled (adj.)。scheduled maintenance = 计划维护，区别于 emergency maintenance（应急维护）。", phonics: "sched 读 /ʃɛd/，uled 读 /juːld/", collocations: [["scheduled maintenance", "计划维护"], ["scheduled outage", "计划停电"], ["as scheduled", "按计划"]], examples: [["The next scheduled maintenance is in June.", "下次计划维护在六月。"], ["Is the work on schedule?", "工作按计划进行吗？"]] },
      { w: "maintenance", ipa: "/ˈmeɪntənəns/", pos: "名词", cn: "维护；保养", memory: "main(tain) = 保持 + -tenance = 保持的行为 → 维护。数据中心设备需要定期维护以确保可靠性。", phonics: "main 读 /meɪn/，te 读 /tə/，nance 读 /nəns/", collocations: [["preventive maintenance", "预防性维护"], ["corrective maintenance", "纠正性维护"], ["maintenance window", "维护窗口"]], examples: [["The UPS needs annual maintenance.", "UPS需要年度维护。"], ["Maintenance is scheduled for tonight.", "维护安排在今晚。"]] },
    ],
    phrases: [
      { p: "next scheduled maintenance", ipa: "/nɛkst ˈʃɛdjuːld ˈmeɪntənəns/", cn: "下次计划维护", why: "了解下次维护时间有助于值班经理提前安排资源、评估系统冗余窗口、通知相关方。" },
    ],
    grammar: [
      { q: "When is...? 和 When will...be? 有什么区别？", a: "When is...? = …是什么时候？（问已安排的时间）\nWhen will...be? = …将是什么时候？（问未来安排）\n✅ When is the next maintenance?（下次维护是什么时候？→ 已有安排）\n✅ When will the maintenance be?（维护将是什么时候？→ 尚未确定）\n已安排好的用 When is，未确定的用 When will。" },
    ],
    pattern: "When is the next + 形容词 + 名词？",
    patternExamples: [
      { en: "When is the next scheduled inspection?", cn: "下次计划检查是什么时候？", words: [] },
      { en: "When is the next planned outage?", cn: "下次计划停电是什么时候？", words: [] },
      { en: "When is the next battery test?", cn: "下次电池测试是什么时候？", words: [{ w: "battery", ipa: "/ˈbætəri/", cn: "电池", phonics: "bat 读 /bæt/，tery 读 /təri/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
    ],
    thinking: "供应商完成本次维护后，值班经理应询问下次计划维护时间，以便在维护日历中标记，提前准备资源和安排系统冗余。",
    pronunciation: "scheduled 的 sch 读 /ʃ/，不要读成 /sk/。maintenance 的重音在第一音节。",
    quiz: [
      { q: "下次电池测试是什么时候？怎么说？", a: "When is the next battery test?" },
    ],
  },
  {
    id: 1836,
    en: "Please contact us immediately if you find any issues.",
    cn: "如果发现任何问题请立即联系我们。",
    ipa: "/pliːz kənˈtækt ʌs ɪˈmiːdiətli ɪf jʊ faɪnd ˈɛni ˈɪʃuːz/",
    tags: ["第1836句", "紧急联系"],
    when: "供应商电话沟通场景。",
    words: [
      { w: "contact", ipa: "/kənˈtækt/", pos: "动词", cn: "联系；接触", memory: "con- = 一起，tact = 触摸 → 接触 → 联系。contact us = 联系我们。数据中心常用 contact 而非 call，因为联系方式可能包括电话、邮件、短信等。", phonics: "con 读 /kən/，tact 读 /tækt/", collocations: [["contact us", "联系我们"], ["contact the vendor", "联系供应商"], ["emergency contact", "紧急联系人"]], examples: [["Please contact the duty manager.", "请联系值班经理。"], ["Who is the emergency contact?", "紧急联系人是谁？"]] },
      { w: "immediately", ipa: "/ɪˈmiːdiətli/", pos: "副词", cn: "立即；马上", memory: "im- = 不，mediate = 中间 → 没有中间间隔 → 立即。安全相关事件中，immediately 强调'不要延迟'。", phonics: "im 读 /ɪm/，me 读 /miː/，di 读 /di/，ate 读 /ət/，ly 读 /li/", collocations: [["contact immediately", "立即联系"], ["respond immediately", "立即响应"], ["evacuate immediately", "立即疏散"]], examples: [["Please report any issues immediately.", "请立即报告任何问题。"], ["Evacuate immediately if you hear the alarm.", "听到警报请立即疏散。"]] },
    ],
    phrases: [
      { p: "contact us immediately", ipa: "/kənˈtækt ʌs ɪˈmiːdiətli/", cn: "立即联系我们", why: "供应商离开后，如果后续发现任何问题（如设备异常、遗留物品、安全隐患），应立即联系数据中心。这是供应商的责任承诺。" },
    ],
    grammar: [
      { q: "if you find 和 if you found 有什么区别？", a: "if you find = 如果你发现（真实条件句，可能发生）\nif you found = 如果你发现了（虚拟条件句，假设不太可能）\n✅ Contact us if you find any issues.（发现问题就联系 → 真实可能）\n✅ We would help if you found issues.（如果你发现了问题我们会帮忙 → 假设）\n实际场景用 if you find。" },
    ],
    pattern: "Please contact + 人 + immediately if + 条件",
    patternExamples: [
      { en: "Please contact the duty manager immediately if you notice any alarms.", cn: "如果注意到任何告警请立即联系值班经理。", words: [{ w: "contact", ipa: "/ˈkɒntækt/", cn: "联系", phonics: "con 读 /kɒn/，tact 读 /tækt/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Please contact security immediately if you see any suspicious activity.", cn: "如果看到可疑活动请立即联系安保。", words: [{ w: "contact", ipa: "/ˈkɒntækt/", cn: "联系", phonics: "con 读 /kɒn/，tact 读 /tækt/" }, { w: "security", ipa: "/sɪˈkjʊrɪti/", cn: "安防", phonics: "se 读 /sɪ/，curity 读 /kjʊrɪti/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Please contact us immediately if the issue recurs.", cn: "如果问题再次发生请立即联系我们。", words: [{ w: "contact", ipa: "/ˈkɒntækt/", cn: "联系", phonics: "con 读 /kɒn/，tact 读 /tækt/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }, { w: "issue", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
    ],
    thinking: "供应商离开前，值班经理应明确要求：如果后续发现任何问题，必须立即联系数据中心。这既是对供应商的要求，也是对数据中心的保护。联系方式通常是值班经理的手机或中控室电话。",
    pronunciation: "contact 的重音在第二音节 /kənˈtækt/。immediately 有五个音节，重音在第二音节。",
    quiz: [
      { q: "如果问题再次发生请立即联系我们，怎么说？", a: "Please contact us immediately if the issue recurs." },
    ],
  },
  {
    id: 1837,
    en: "Thank you for your professional service today.",
    cn: "感谢您今天的专业服务。",
    ipa: "/θæŋk jʊ fɔːr jɔːr prəˈfɛʃənəl ˈsɜːrvɪs təˈdeɪ/",
    tags: ["第1837句", "感谢服务"],
    when: "供应商电话沟通场景。",
    words: [
      { w: "professional", ipa: "/prəˈfɛʃənəl/", pos: "形容词", cn: "专业的", memory: "profession = 职业 + -al = …的 → 职业的/专业的。赞扬供应商工程师的专业素养，是良好的商务礼仪。", phonics: "pro 读 /prə/，fes 读 /fɛʃ/，sion 读 /ən/，al 读 /əl/", collocations: [["professional service", "专业服务"], ["professional engineer", "专业工程师"], ["professional conduct", "专业行为"]], examples: [["Thank you for your professional work.", "感谢您的专业工作。"], ["The engineer was very professional.", "工程师非常专业。"]] },
      { w: "service", ipa: "/ˈsɜːrvɪs/", pos: "名词", cn: "服务", memory: "serv(e) = 服务 + -ice = 服务的行为。供应商提供的维修/维护工作统称为 service。", phonics: "serv 读 /sɜːrv/，ice 读 /ɪs/", collocations: [["professional service", "专业服务"], ["after-sales service", "售后服务"], ["service level agreement (SLA)", "服务级别协议"]], examples: [["Thank you for your service.", "感谢您的服务。"], ["The service was excellent.", "服务很出色。"]] },
    ],
    phrases: [
      { p: "professional service", ipa: "/prəˈfɛʃənəl ˈsɜːrvɪs/", cn: "专业服务", why: "对供应商工作的肯定和感谢。professional 强调工程师的技术水平和职业素养，比单纯说 good 更具体、更有分量。" },
    ],
    grammar: [
      { q: "Thank you for... 后面接什么？", a: "Thank you for + 名词/动名词\n✅ Thank you for your service.（感谢您的服务 → 名词）\n✅ Thank you for coming.（感谢您的到来 → 动名词）\n✅ Thank you for your prompt support.（感谢您的快速支持 → 名词短语）\nfor 后面接名词或动名词，不接动词原形。" },
    ],
    pattern: "Thank you for your + 形容词 + 名词 + 时间",
    patternExamples: [
      { en: "Thank you for your excellent work today.", cn: "感谢您今天的出色工作。", words: [{ w: "thank", ipa: "/θæŋk/", cn: "感谢", phonics: "th 读 /θ/，ank 读 /æŋk/" }] },
      { en: "Thank you for your quick response this morning.", cn: "感谢您今早的快速响应。", words: [{ w: "thank", ipa: "/θæŋk/", cn: "感谢", phonics: "th 读 /θ/，ank 读 /æŋk/" }] },
      { en: "Thank you for your thorough inspection today.", cn: "感谢您今天的彻底检查。", words: [{ w: "thank", ipa: "/θæŋk/", cn: "感谢", phonics: "th 读 /θ/，ank 读 /æŋk/" }] },
    ],
    thinking: "供应商完成工作离开前，值班经理应表达感谢。这不仅是商务礼仪，也有助于维护良好的供应商关系。professional service 是对工程师专业能力的肯定。",
    pronunciation: "professional 的重音在第二音节 /prəˈfɛʃənəl/。service 的 er 读 /ɜːr/。",
    quiz: [
      { q: "感谢您今天的出色工作，怎么说？", a: "Thank you for your excellent work today." },
    ],
  },
  {
    id: 1838,
    en: "We look forward to working with you again.",
    cn: "期待再次与您合作。",
    ipa: "/wiː lʊk ˈfɔːrwərd tuː ˈwɜːrkɪŋ wɪð jʊ əˈɡɛn/",
    tags: ["第1838句", "期待合作"],
    when: "供应商电话沟通场景。",
    words: [
      { w: "look forward to", ipa: "/lʊk ˈfɔːrwərd tuː/", pos: "动词短语", cn: "期待", memory: "look = 看，forward = 向前，to = 向 → 向前看向 → 期待。商务用语，表达对未来的积极期待。注意 to 后面接动名词。", phonics: "look 读 /lʊk/，forward 读 /ˈfɔːrwərd/", collocations: [["look forward to", "期待"], ["look forward to hearing", "期待收到回复"], ["look forward to meeting", "期待见面"]], examples: [["We look forward to your reply.", "期待您的回复。"], ["I look forward to seeing you.", "期待见到您。"]] },
      { w: "again", ipa: "/əˈɡɛn/", pos: "副词", cn: "再次", memory: "again = 再次。working with you again = 再次与您合作。表达对长期合作关系的期待。", phonics: "a 读 /ə/，gain 读 /ɡɛn/", collocations: [["again", "再次"], ["once again", "再一次"], ["time and again", "一次又一次"]], examples: [["Please try again.", "请再试一次。"], ["See you again soon.", "很快再见。"]] },
    ],
    phrases: [
      { p: "look forward to working with you", ipa: "/lʊk ˈfɔːrwərd tuː ˈwɜːrkɪŋ wɪð jʊ/", cn: "期待与您合作", why: "商务告别用语，表达对供应商的认可和未来合作的期待。比简单的 goodbye 更正式、更有温度。" },
    ],
    grammar: [
      { q: "look forward to 后面为什么用 working 而不是 work？", a: "look forward to 中的 to 是介词，不是不定式标记！\n介词后面必须接名词或动名词。\n✅ I look forward to working with you.（正确 → to 是介词）\n❌ I look forward to work with you.（错误 → 把 to 当不定式了）\n记住：look forward to + 动名词/名词。" },
    ],
    pattern: "We look forward to + 动名词 + 其他",
    patternExamples: [
      { en: "We look forward to receiving your report.", cn: "期待收到您的报告。", words: [{ w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
      { en: "We look forward to our next collaboration.", cn: "期待下次合作。", words: [] },
      { en: "We look forward to hearing from you.", cn: "期待您的回复。", words: [] },
    ],
    thinking: "供应商告别时，使用 look forward to working with you again 表达对未来合作的期待。这是专业的商务用语，比简单的 goodbye 更能维护良好的供应商关系。",
    pronunciation: "forward 的 or 读 /ɔːr/。again 的 a 读 /ə/，不要读成 /eɪ/。",
    quiz: [
      { q: "期待收到您的报告，怎么说？", a: "We look forward to receiving your report." },
    ],
  },
  {
    id: 1839,
    en: "Now let's review the electrical systems.",
    cn: "现在我们开始检查电气系统。",
    ipa: "/naʊ lɛts rɪˈvjuː ðə ɪˈlɛktrɪkəl ˈsɪstəmz/",
    tags: ["第1839句", "转场-电气系统"],
    when: "供应商电话沟通场景。",
    words: [
      { w: "review", ipa: "/rɪˈvjuː/", pos: "动词", cn: "检查；回顾", memory: "re- = 再次，view = 看 → 再看一遍 → 检查/回顾。review the systems = 检查系统状态。交接中常用 review 表示逐项检查。", phonics: "re 读 /rɪ/，view 读 /vjuː/", collocations: [["review the systems", "检查系统"], ["review the alarms", "回顾告警"], ["review the handover", "回顾交接"]], examples: [["Let's review the status.", "我们来检查状态。"], ["Please review the logbook.", "请回顾日志。"]] },
      { w: "electrical systems", ipa: "/ɪˈlɛktrɪkəl ˈsɪstəmz/", pos: "名词", cn: "电气系统", memory: "electrical = 电气的，systems = 系统。数据中心电气系统包括：中压/低压配电、UPS、发电机、ATS/STS、电池等。", phonics: "elec 读 /ɪˈlɛk/，tri 读 /trɪ/，cal 读 /kəl/", collocations: [["electrical systems", "电气系统"], ["electrical room", "电气间"], ["electrical maintenance", "电气维护"]], examples: [["The electrical systems are stable.", "电气系统稳定。"], ["Check the electrical room.", "检查电气间。"]] },
    ],
    phrases: [
      { p: "review the electrical systems", ipa: "/rɪˈvjuː ðə ɪˈlɛktrɪkəl ˈsɪstəmz/", cn: "检查电气系统", why: "供应商电话沟通结束后，转场回到交接班流程。电气系统是数据中心最核心的基础设施，交接时必须逐项检查。" },
    ],
    grammar: [
      { q: "review 和 check 有什么区别？", a: "review = 回顾/检查（系统性、全面地查看）\ncheck = 检查（快速确认某个具体项目）\n✅ Let's review the electrical systems.（我们来检查电气系统 → 全面检查）\n✅ Please check the UPS status.（请检查UPS状态 → 具体项目）\n全面检查用 review，单项确认用 check。" },
    ],
    pattern: "Now let's review the + 系统/设备",
    patternExamples: [
      { en: "Now let's review the HVAC systems.", cn: "现在我们检查暖通系统。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "hvac", ipa: "/ˌeɪtʃˈviːˈeɪˈsiː/", cn: "暖通", phonics: "H-V-A-C 逐字母读" }, { w: "systems", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Now let's review the fire protection systems.", cn: "现在我们检查消防系统。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "protection", ipa: "/prəˈtɛkʃən/", cn: "保护", phonics: "pro 读 /prə/，tection 读 /tɛkʃən/" }] },
      { en: "Now let's review the security systems.", cn: "现在我们检查安防系统。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "security", ipa: "/sɪˈkjʊrɪti/", cn: "安防", phonics: "se 读 /sɪ/，curity 读 /kjʊrɪti/" }, { w: "systems", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
    ],
    thinking: "供应商电话沟通场景结束后，交接班流程继续。下一站是电气系统检查。这句话起到'转场'作用，将话题从供应商沟通切换回交接班主线。",
    pronunciation: "review 的重音在第二音节 /rɪˈvjuː/。electrical 的重音在第二音节 /ɪˈlɛktrɪkəl/。",
    quiz: [
      { q: "现在我们检查暖通系统，怎么说？", a: "Now let's review the HVAC systems." },
    ],
  },
  {
    id: 1840,
    en: "The vendor communication section is complete. Let's move on.",
    cn: "供应商沟通部分结束，我们继续。",
    ipa: "/ðə ˈvɛndər kəˌmjuːnɪˈkeɪʃən ˈsɛkʃən ɪz kəmˈpliːt lɛts muːv ɒn/",
    tags: ["第1840句", "场景收尾"],
    when: "供应商电话沟通场景。",
    words: [
      { w: "communication", ipa: "/kəˌmjuːnɪˈkeɪʃən/", pos: "名词", cn: "沟通；通信", memory: "communicate (v.) → communication (n.)。vendor communication = 供应商沟通，涵盖电话通知、现场协调、工作监督等。", phonics: "com 读 /kə/，mu 读 /mjuː/，ni 读 /nɪ/，ca 读 /keɪ/，tion 读 /ʃən/", collocations: [["vendor communication", "供应商沟通"], ["effective communication", "有效沟通"], ["communication log", "沟通记录"]], examples: [["Good communication is essential.", "良好的沟通很重要。"], ["Please log all communications.", "请记录所有沟通。"]] },
      { w: "move on", ipa: "/muːv ɒn/", pos: "动词短语", cn: "继续；进入下一步", memory: "move = 移动，on = 向前 → 向前移动 → 继续。Let's move on = 我们继续（进入下一个话题/环节）。", phonics: "move 的 o 读 /uː/，on 读 /ɒn/", collocations: [["move on", "继续"], ["move on to", "转到"], ["move forward", "前进"]], examples: [["Let's move on to the next topic.", "我们进入下一个话题。"], ["We need to move forward.", "我们需要继续前进。"]] },
    ],
    phrases: [
      { p: "section is complete", ipa: "/ˈsɛkʃən ɪz kəmˈpliːt/", cn: "部分结束", why: "明确标记当前学习场景（供应商电话沟通）已结束，准备进入下一个场景。" },
    ],
    grammar: [
      { q: "move on 和 move on to 有什么区别？", a: "move on = 继续（不指定去向）\nmove on to = 转到（指定去向）\n✅ Let's move on.（我们继续 → 不指定）\n✅ Let's move on to electrical systems.（我们转到电气系统 → 指定去向）\n指定下一个话题用 move on to。" },
    ],
    pattern: "The + 名词 + is complete. Let's move on (to + 下一个)",
    patternExamples: [
      { en: "The alarm review is complete. Let's move on.", cn: "告警回顾结束，我们继续。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
      { en: "The handover is complete. Let's move on to the inspection.", cn: "交接结束，我们开始巡检。", words: [{ w: "handover", ipa: "/ˈhændoʊvər/", cn: "交接", phonics: "hand 读 /hænd/，over 读 /oʊvər/" }] },
      { en: "This section is complete. Let's move on to the next.", cn: "这部分结束，我们进入下一部分。", words: [] },
    ],
    thinking: "供应商电话沟通场景（1261-1300）共40句已全部完成。这个场景涵盖了：电话通知供应商、到场登记、安全交底、工作监督、完工确认、清理现场、签退离开、工作记录等完整流程。下一站将进入电气系统检查。",
    pronunciation: "communication 有六个音节，重音在第四音节。section 读 /ˈsɛkʃən/。",
    quiz: [
      { q: "交接结束，我们开始巡检，怎么说？", a: "The handover is complete. Let's move on to the inspection." },
    ],
  },
];

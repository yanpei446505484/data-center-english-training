// EXPORTS: MOCK_SENTENCES_PART4B

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART4B: ISentence[] = [
  {
    id: 106,
    en: "Ticket EVT-2026-007 is under observation.",
    cn: "事件单 EVT-2026-007 正在观察中。",
    ipa: "/ˈtɪk.ɪt ˌiː.viːˈtiː ˌtwɛn.ti ˌtwɛn.ti ˈsɪks sɛv.ən ɪz ˈʌn.dər ˌɒb.zəˈveɪ.ʃən/",
    tags: ["第106句", "事件单", "★★★★"],
    when: "逐条过事件单时，某些告警已恢复但仍需观察是否复发。under observation 是运维交接中常用的状态描述，表示「暂不处理但持续留意」。",
    words: [
      { w: "observation", ipa: "/ˌɒb.zəˈveɪ.ʃən/", pos: "名词", cn: "观察；观测", memory: "① observe = 观察（动词）；② observation = 观察（名词）。\nunder observation = 正在被观察中，类似 under repair（正在维修中）。", phonics: "ob 读 /ɒb/，ser 读 /zə/，va 读 /veɪ/，tion 读 /ʃən/，重音在第三音节。共4个音节。", collocations: [["under observation", "在观察中"], ["close observation", "密切观察"], ["clinical observation", "临床观察"]], examples: [["The patient is under observation.", "病人正在观察中。"], ["Keep the server under observation.", "持续观察这台服务器。"]] },
    ],
    phrases: [
      { p: "under observation", ipa: "/ˈʌn.dər ˌɒb.zəˈveɪ.ʃən/", cn: "在观察中", why: "under + 名词 表示「处于某种状态中」。under observation = 正在观察，under repair = 正在维修，under review = 正在审核。" },
    ],
    grammar: [
      { q: "under + 名词 还有哪些常见搭配？", a: "under + 名词 表示「正在…中」：\n✅ under observation = 在观察中\n✅ under repair = 在维修中\n✅ under review = 在审核中\n✅ under investigation = 在调查中\n✅ under maintenance = 在维护中\n❌ under working（×）→ in progress（√）" },
    ],
    pattern: "Ticket + 编号 + is under + 状态名词",
    patternExamples: [
      { en: "Ticket EVT-001 is under review.", cn: "事件单 EVT-001 正在审核中。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }, { w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
      { en: "Ticket EVT-002 is under investigation.", cn: "事件单 EVT-002 正在调查中。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "Ticket EVT-003 is under maintenance.", cn: "事件单 EVT-003 正在维护中。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
    ],
    thinking: "under + 名词 是英语中表达「处于某种处理状态」的经典结构。\n中文说「正在观察中」，英语用 is under observation。\n交接时，under observation 的工单意味着：告警已恢复，但还没到可以关闭的程度，需要继续留意。",
    pronunciation: "observation 重音在第三音节：ob-ser-VA-tion /ˌɒb.zəˈveɪ.ʃən/。\nunder 连读：un-der /ˈʌn.dər/。\n节奏：TICK-et ｜ EVT-ZERO-ZERO-SEVEN ｜ is UN-der ｜ ob-ser-VA-tion.",
    quiz: [
      { q: "「事件单EVT-005正在调查中」怎么说？", a: "Ticket EVT-005 is under investigation." },
      { q: "under observation 和 monitoring 有什么区别？", a: "under observation = 被动观察状态（人盯着看）；monitoring = 主动监控（系统自动跟踪数据）。observation 更偏人工留意，monitoring 更偏自动化。" },
    ],
  },
  {
    id: 107,
    en: "Ticket EVT-2026-008 requires continuous monitoring.",
    cn: "事件单 EVT-2026-008 需要持续监控。",
    ipa: "/ˈtɪk.ɪt ˌiː.viːˈtiː ˌtwɛn.ti ˌtwɛn.ti ˈsɪks eɪt rɪˈkwaɪəz kənˈtɪn.ju.əs ˈmɒn.ɪ.tər.ɪŋ/",
    tags: ["第107句", "持续监控", "★★★★★"],
    when: "某些工单关联的问题虽然暂时稳定，但存在复发风险，需要下一班值班人员持续监控关键指标。",
    words: [
      { w: "requires", ipa: "/rɪˈkwaɪəz/", pos: "动词", cn: "需要；要求", memory: "① re = 再次；② quire = 寻求（= quest）。\nrequire = 再次寻求 → 有需求 → 需要。比 need 更正式。", phonics: "re 读 /rɪ/，quire 读 /kwaɪəz/，重音在第二音节。注意第三人称单数加 s。", collocations: [["requires attention", "需要关注"], ["requires approval", "需要审批"], ["requires action", "需要处理"]], examples: [["This ticket requires immediate attention.", "这张工单需要立即关注。"], ["The task requires two engineers.", "这项任务需要两名工程师。"]] },
      { w: "continuous", ipa: "/kənˈtɪn.ju.əs/", pos: "形容词", cn: "持续的；不间断的", memory: "① continue = 继续（动词）；② continuous = 持续的（形容词）。\ncontinuous = 不间断的（无中断）；continual = 反复的（有间隔）。\n数据中心监控用 continuous（24/7 不间断）。", phonics: "con 读 /kən/，tin 读 /tɪn/，u 读 /ju/，ous 读 /əs/，重音在第二音节。", collocations: [["continuous monitoring", "持续监控"], ["continuous improvement", "持续改进"], ["continuous operation", "持续运行"]], examples: [["We need continuous monitoring.", "我们需要持续监控。"], ["The system requires continuous power.", "系统需要不间断供电。"]] },
      { w: "monitoring", ipa: "/ˈmɒn.ɪ.tər.ɪŋ/", pos: "名词", cn: "监控；监测", memory: "① monitor = 监控/显示器；② monitoring = 监控（动名词/名词）。\n数据中心：environmental monitoring = 环境监控，network monitoring = 网络监控。", phonics: "mon 读 /mɒn/，i 读 /ɪ/，tor 读 /tər/，ing 读 /ɪŋ/，重音在第一音节。", collocations: [["continuous monitoring", "持续监控"], ["real-time monitoring", "实时监控"], ["environmental monitoring", "环境监控"]], examples: [["Start monitoring the temperature.", "开始监控温度。"], ["Monitoring shows normal status.", "监控显示状态正常。"]] },
    ],
    phrases: [
      { p: "requires continuous monitoring", ipa: "/rɪˈkwaɪəz kənˈtɪn.ju.əs ˈmɒn.ɪ.tər.ɪŋ/", cn: "需要持续监控", why: "requires = 需要，continuous = 持续的，monitoring = 监控。这是交接中给下一班布置任务的标准用语。" },
    ],
    grammar: [
      { q: "require + 名词 vs require + to do 怎么用？", a: "require + 名词：This requires attention.（这需要关注。）\nrequire + to do：You are required to check every hour.（你被要求每小时检查一次。）\nrequire + that 从句：We require that all alarms be acknowledged.（我们要求所有告警都要被确认。）\n交接中常用 require + 名词 结构，简洁直接。" },
    ],
    pattern: "Ticket + 编号 + requires + 名词（处理要求）",
    patternExamples: [
      { en: "Ticket EVT-001 requires immediate action.", cn: "事件单 EVT-001 需要立即处理。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "Ticket EVT-002 requires vendor support.", cn: "事件单 EVT-002 需要供应商支持。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }, { w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }, { w: "support", ipa: "/səˈpɔːrt/", cn: "支持", phonics: "sup 读 /sə/，port 读 /pɔːrt/" }] },
      { en: "Ticket EVT-003 requires management approval.", cn: "事件单 EVT-003 需要管理层批准。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
    ],
    thinking: "require 比 need 更正式，适合工单和交接场景。\ncontinuous monitoring 是数据中心运维的核心概念——24/7 不间断监控。\n交接时告诉下一班「这个工单需要持续监控」= 提醒他们不能忽视。",
    pronunciation: "requires 第二音节重读：re-QUIRES /rɪˈkwaɪəz/。\ncontinuous 第二音节重读：con-TIN-u-ous /kənˈtɪn.ju.əs/。\nmonitoring 第一音节重读：MON-i-tor-ing /ˈmɒn.ɪ.tər.ɪŋ/。\n节奏：TICK-et ｜ re-QUIRES ｜ con-TIN-u-ous ｜ MON-i-tor-ing.",
    quiz: [
      { q: "「事件单EVT-003需要立即关注」怎么说？", a: "Ticket EVT-003 requires immediate attention." },
      { q: "continuous 和 continual 有什么区别？", a: "continuous = 不间断的（中间没有停顿），如 continuous monitoring = 24/7不停监控。\ncontinual = 反复的（中间有间隔），如 continual problems = 反复出现的问题（出现-消失-又出现）。" },
    ],
  },
  {
    id: 108,
    en: "Ticket EVT-2026-009 requires an RCA report.",
    cn: "事件单 EVT-2026-009 需要提交根因分析报告。",
    ipa: "/ˈtɪk.ɪt ˌiː.viːˈtiː ˌtwɛn.ti ˌtwɛn.ti ˈsɪks naɪn rɪˈkwaɪəz ən ˌɑːr.siːˈeɪ rɪˈpɔːrt/",
    tags: ["第108句", "RCA报告", "★★★★★"],
    when: "严重故障或反复出现的问题需要提交根因分析报告（Root Cause Analysis）。RCA 是数据中心运维的标准流程，用于找出问题的根本原因并制定预防措施。",
    words: [
      { w: "RCA", ipa: "/ˌɑːr.siːˈeɪ/", pos: "缩写", cn: "根因分析 (Root Cause Analysis)", memory: "① R = Root（根本）；② C = Cause（原因）；③ A = Analysis（分析）。\nRCA 是找出问题根本原因的系统方法，是数据中心严重故障后的标准流程。", phonics: "逐字母读 R-C-A。R 读 /ɑːr/，C 读 /siː/，A 读 /eɪ/。", collocations: [["RCA report", "RCA报告"], ["RCA process", "RCA流程"], ["conduct an RCA", "进行RCA"]], examples: [["We need to complete the RCA.", "我们需要完成RCA。"], ["The RCA report is due Friday.", "RCA报告周五前提交。"]] },
      { w: "report", ipa: "/rɪˈpɔːrt/", pos: "名词", cn: "报告", memory: "① re = 回/再；② port = 携带/传送。\nreport = 把信息传送回来 = 报告。", phonics: "re 读 /rɪ/，port 读 /pɔːrt/，重音在第二音节。", collocations: [["RCA report", "RCA报告"], ["incident report", "事件报告"], ["daily report", "日报"], ["shift report", "交班报告"]], examples: [["Please submit the report.", "请提交报告。"], ["The report is due tomorrow.", "报告明天到期。"]] },
    ],
    phrases: [
      { p: "an RCA report", ipa: "/ən ˌɑːr.siːˈeɪ rɪˈpɔːrt/", cn: "一份RCA报告", why: "RCA 以元音 /ɑːr/ 开头，所以用 an 而不是 a。an RCA report = 一份根因分析报告。" },
    ],
    grammar: [
      { q: "什么时候用 a，什么时候用 an？", a: "取决于后面单词的**发音**（不是字母）：\n✅ an RCA report（R 发音 /ɑːr/，元音开头）\n✅ a PUE report（P 发音 /piː/，辅音开头）\n✅ an SLA（S 发音 /ɛs/，元音开头）\n✅ a UPS（U 发音 /juː/，辅音开头）\n关键：听发音首音，不看字母。" },
    ],
    pattern: "Ticket + 编号 + requires + a/an + 文档类型",
    patternExamples: [
      { en: "Ticket EVT-001 requires an incident report.", cn: "事件单 EVT-001 需要提交事件报告。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }, { w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
      { en: "Ticket EVT-002 requires a shift handover report.", cn: "事件单 EVT-002 需要提交交班报告。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }, { w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }, { w: "handover", ipa: "/ˈhændoʊvər/", cn: "交接", phonics: "hand 读 /hænd/，over 读 /oʊvər/" }] },
      { en: "Ticket EVT-003 requires a change request.", cn: "事件单 EVT-003 需要提交变更申请。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
    ],
    thinking: "RCA 是数据中心运维的核心术语之一。\n严重故障后，团队必须完成 RCA 流程：收集数据 → 分析时间线 → 找出根因 → 制定预防措施。\n交接时说 requires an RCA report = 提醒下一班这个工单还没完成根因分析。",
    pronunciation: "RCA 逐字母读：R-C-A /ɑːr.siː.eɪ/。\nreport 重音在第二音节：re-PORT /rɪˈpɔːrt/。\n连读：an RCA → /ən ɑːr.siː.eɪ/。\n节奏：TICK-et ｜ re-QUIRES ｜ an R-C-A ｜ re-PORT.",
    quiz: [
      { q: "「事件单EVT-005需要提交事件报告」怎么说？", a: "Ticket EVT-005 requires an incident report." },
      { q: "RCA报告通常包含哪些内容？", a: "事件时间线、影响范围、根本原因、已采取的修复措施、预防改进计划。通常要求在故障发生后 3-5 个工作日内完成。" },
    ],
  },
  {
    id: 109,
    en: "Ticket EVT-2026-010 requires customer approval.",
    cn: "事件单 EVT-2026-010 需要客户批准。",
    ipa: "/ˈtɪk.ɪt ˌiː.viːˈtiː ˌtwɛn.ti ˌtwɛn.ti ˈsɪks tɛn rɪˈkwaɪəz ˈkʌs.tə.mər əˈpruː.vəl/",
    tags: ["第109句", "客户审批", "★★★★★"],
    when: "涉及客户设备或客户业务的变更操作，需要获得客户正式批准后才能执行。这是数据中心托管业务中的标准流程。",
    words: [
      { w: "customer", ipa: "/ˈkʌs.tə.mər/", pos: "名词", cn: "客户", memory: "① custom = 习惯/定制；② customer = 习惯性来购买的人 = 客户。\n数据中心场景中，customer = 托管客户（租用机柜空间的公司）。", phonics: "cus 读 /kʌs/，to 读 /tə/，mer 读 /mər/，重音在第一音节。", collocations: [["customer approval", "客户批准"], ["customer equipment", "客户设备"], ["customer notification", "客户通知"]], examples: [["We need customer approval first.", "我们需要先获得客户批准。"], ["Notify the customer immediately.", "立即通知客户。"]] },
      { w: "approval", ipa: "/əˈpruː.vəl/", pos: "名词", cn: "批准；审批", memory: "① approve = 批准（动词）；② approval = 批准（名词）。\nap-prove → ap-prov-al。注意词性变化。", phonics: "ap 读 /ə/，prov 读 /pruː/，al 读 /vəl/，重音在第二音节。", collocations: [["customer approval", "客户批准"], ["management approval", "管理层批准"], ["pending approval", "等待审批"]], examples: [["The change is pending approval.", "该变更正在等待审批。"], ["We received approval.", "我们已获得批准。"]] },
    ],
    phrases: [
      { p: "requires customer approval", ipa: "/rɪˈkwaɪəz ˈkʌs.tə.mər əˈpruː.vəl/", cn: "需要客户批准", why: "在数据中心托管环境中，涉及客户设备的任何操作（重启、迁移、断电等）都必须获得客户书面批准。" },
    ],
    grammar: [
      { q: "approval 和 approve 怎么区分？", a: "approve = 动词（批准）：Please approve this request.（请批准这个请求。）\napproval = 名词（批准）：We need your approval.（我们需要你的批准。）\n✅ This requires approval.（这需要批准 → 名词）\n✅ Please approve this.（请批准这个 → 动词）\n交接中常用名词形式：requires approval。" },
    ],
    pattern: "Ticket + 编号 + requires + 谁 + approval",
    patternExamples: [
      { en: "Ticket EVT-001 requires vendor approval.", cn: "事件单 EVT-001 需要供应商批准。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }, { w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }] },
      { en: "Ticket EVT-002 requires management approval.", cn: "事件单 EVT-002 需要管理层批准。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "Ticket EVT-003 requires engineering approval.", cn: "事件单 EVT-003 需要工程部批准。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }, { w: "engineering", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }] },
    ],
    thinking: "数据中心托管业务中，客户拥有设备的所有权。\n运营商（我们）在操作客户设备前，必须获得 customer approval。\n这是合同义务，未经批准操作客户设备可能导致合同纠纷。\n交接时说 requires customer approval = 提醒下一班：等客户回复才能动。",
    pronunciation: "customer 第一音节重读：CUS-to-mer /ˈkʌs.tə.mər/。\napproval 第二音节重读：ap-PROV-al /əˈpruː.vəl/。\n节奏：TICK-et ｜ re-QUIRES ｜ CUS-to-mer ｜ ap-PROV-al.",
    quiz: [
      { q: "「事件单EVT-003需要管理层批准」怎么说？", a: "Ticket EVT-003 requires management approval." },
      { q: "为什么操作客户设备需要客户批准？", a: "因为数据中心是托管模式：客户拥有设备，我们提供空间和电力。操作客户设备属于越权行为，必须获得书面授权，否则可能面临法律和合同责任。" },
    ],
  },
  {
    id: 110,
    en: "Ticket EVT-2026-011 requires management approval.",
    cn: "事件单 EVT-2026-011 需要管理层批准。",
    ipa: "/ˈtɪk.ɪt ˌiː.viːˈtiː ˌtwɛn.ti ˌtwɛn.ti ˈsɪks ɪˈlɛv.ən rɪˈkwaɪəz ˈmæn.ɪdʒ.mənt əˈpruː.vəl/",
    tags: ["第110句", "管理审批", "★★★★"],
    when: "涉及重大变更、预算支出或超出值班经理权限的操作，需要上报管理层审批。这是公司内部治理流程的要求。",
    words: [
      { w: "management", ipa: "/ˈmæn.ɪdʒ.mənt/", pos: "名词", cn: "管理层；管理", memory: "① manage = 管理（动词）；② management = 管理层（名词）。\nmanagement approval = 管理层批准，指上级领导或管理委员会的审批。", phonics: "man 读 /mæn/，age 读 /ɪdʒ/，ment 读 /mənt/，重音在第一音节。共3个音节。", collocations: [["management approval", "管理层批准"], ["senior management", "高级管理层"], ["management review", "管理评审"]], examples: [["Escalate to management.", "上报管理层。"], ["Management has approved the change.", "管理层已批准变更。"]] },
    ],
    phrases: [
      { p: "requires management approval", ipa: "/rɪˈkwaɪəz ˈmæn.ɪdʒ.mənt əˈpruː.vəl/", cn: "需要管理层批准", why: "management = 管理层，approval = 批准。涉及重大决策或超出值班权限的操作需要管理层审批。" },
    ],
    grammar: [
      { q: "审批流程中的层级怎么用英语表达？", a: "从低到高：\n① team lead approval = 组长审批\n② manager approval = 经理审批\n③ management approval = 管理层审批\n④ senior management approval = 高级管理层审批\n⑤ board approval = 董事会审批\n交接中常用 management approval 作为「需要上级审批」的统称。" },
    ],
    pattern: "requires + 审批层级 + approval",
    patternExamples: [
      { en: "This requires team lead approval.", cn: "这需要组长审批。", words: [] },
      { en: "This requires director approval.", cn: "这需要总监审批。", words: [] },
      { en: "This requires board approval.", cn: "这需要董事会审批。", words: [] },
    ],
    thinking: "数据中心值班经理有一定的决策权限（如常规维护、紧急恢复操作）。\n但涉及大额支出、架构变更、客户合同修改等事项，超出值班权限，需要 management approval。\n交接时明确说 requires management approval = 下一班不要自己决定，等上级批复。",
    pronunciation: "management 第一音节重读：MAN-age-ment /ˈmæn.ɪdʒ.mənt/。\napproval 第二音节重读：ap-PROV-al /əˈpruː.vəl/。\n节奏：TICK-et ｜ re-QUIRES ｜ MAN-age-ment ｜ ap-PROV-al.",
    quiz: [
      { q: "「这需要总监审批」怎么说？", a: "This requires director approval." },
      { q: "值班经理通常有哪些决策权限？", a: "常规操作（重启、切换）、紧急恢复（消防、断电）、告警处理（通知供应商、创建工单）。但架构变更、大额采购、客户合同修改通常需要上报管理层。" },
    ],
  },
  {
    id: 111,
    en: "Please update each ticket with the latest progress.",
    cn: "请更新每张工单的最新处理进展。",
    ipa: "/pliːz ˌʌpˈdeɪt iːtʃ ˈtɪk.ɪt wɪð ðə ˈleɪ.tɪst ˈprɒɡ.rɛs/",
    tags: ["第111句", "工单更新", "★★★★★"],
    when: "交班前最重要的动作之一——确保每张工单都有最新的处理进展记录。这是交接质量的关键，下一班需要通过工单记录了解当前状态。",
    words: [
      { w: "update", ipa: "/ˌʌpˈdeɪt/", pos: "动词", cn: "更新", memory: "① up = 向上；② date = 日期。\nupdate = 使日期更新 → 更新到最新状态。", phonics: "up 读 /ʌp/，date 读 /deɪt/，重音在第二音节。", collocations: [["update progress", "更新进展"], ["update status", "更新状态"], ["update the ticket", "更新工单"]], examples: [["Please update the ticket.", "请更新工单。"], ["I updated the status yesterday.", "我昨天更新了状态。"]] },
      { w: "latest", ipa: "/ˈleɪ.tɪst/", pos: "形容词", cn: "最新的；最近的", memory: "① late = 晚的；② later = 更晚的；③ latest = 最晚的 → 最新的。\nlatest = 时间线上最后发生的 = 最新的。", phonics: "late 读 /leɪt/，est 读 /ɪst/，重音在第一音节。", collocations: [["latest progress", "最新进展"], ["latest update", "最新更新"], ["latest news", "最新消息"]], examples: [["What's the latest status?", "最新状态是什么？"], ["Please share the latest update.", "请分享最新更新。"]] },
      { w: "progress", ipa: "/ˈprɒɡ.rɛs/", pos: "名词", cn: "进展；进度", memory: "① pro = 向前；② gress = 走（= grade/step）。\nprogress = 向前走 → 进展/进度。", phonics: "prog 读 /prɒɡ/，ress 读 /rɛs/，重音在第一音节。注意英式读 /ˈprɒɡ.rɛs/，美式读 /ˈprɑː.ɡrɛs/。", collocations: [["make progress", "取得进展"], ["progress report", "进度报告"], ["work in progress", "进行中的工作"]], examples: [["What's the progress?", "进展如何？"], ["No progress yet.", "还没有进展。"]] },
    ],
    phrases: [
      { p: "update each ticket with", ipa: "/ˌʌpˈdeɪt iːtʃ ˈtɪk.ɪt wɪð/", cn: "把……更新到每张工单中", why: "update + 对象 + with + 新内容，是表达“用最新信息更新某个记录”的自然结构。" },
      { p: "the latest progress", ipa: "/ðə ˈleɪ.tɪst ˈprɒɡ.rɛs/", cn: "最新进展", why: "指截至交班时的最新处理状态和已完成行动。" },
    ],
    grammar: [
      { q: "update 后面接什么？", a: "update + 名词（直接宾语）：\n✅ update the ticket（更新工单）\n✅ update the progress（更新进展）\n✅ update the status（更新状态）\n\nupdate + 名词 + in/on + 位置：\n✅ update the progress in the ticket（在工单中更新进展）\n✅ update the information on the dashboard（在仪表盘上更新信息）" },
    ],
    pattern: "Please update + 记录/系统 + with + 最新内容",
    patternExamples: [
      { en: "Please update the status in DCIM.", cn: "请在DCIM中更新状态。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Please update the notes in the log.", cn: "请在日志中更新备注。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }] },
      { en: "Please update the contact info on the board.", cn: "请在看板上更新联系人信息。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "contact", ipa: "/ˈkɒntækt/", cn: "联系", phonics: "con 读 /kɒn/，tact 读 /tækt/" }] },
    ],
    thinking: "工单更新是交班前最重要的动作之一。\n下一班通过工单记录了解当前状态、已完成行动和下一步计划。\nupdate each ticket with the latest progress 明确表示每张工单都要写入最新进展，不能遗漏。",
    pronunciation: "update 第二音节重读：up-DATE /ˌʌpˈdeɪt/。\neach ticket 连读时注意清楚发出 /tʃ/ 和 /t/。\nprogress 第一音节重读：PROG-ress。\n节奏：Please UP-DATE ｜ each TICK-et ｜ with the LA-test PROG-ress.",
    quiz: [
      { q: "「请在DCIM中更新状态」怎么说？", a: "Please update the status in DCIM." },
      { q: "为什么交班前必须更新工单？", a: "因为工单是值班记录的载体。下一班人员通过工单了解当前状态、已采取的措施和待办事项。如果工单没更新，信息链断裂，可能导致处理延误或重复操作。" },
    ],
  },
  {
    id: 112,
    en: "Please check whether all tickets have been assigned.",
    cn: "请确认所有工单都已经分配负责人。",
    ipa: "/pliːz tʃɛk ˈwɛð.ər ɔːl ˈtɪk.ɪts hæv biːn əˈsaɪnd/",
    tags: ["第112句", "工单分配", "★★★★★"],
    when: "确认每张工单都有明确的负责人（owner）。没有负责人的工单 = 没人跟进 = 问题可能被遗漏。这是交接检查的关键项。",
    words: [
      { w: "whether", ipa: "/ˈwɛð.ər/", pos: "连词", cn: "是否", memory: "whether = 是否，用于引出间接疑问句。\nwhether ≈ if，但 whether 更正式，常用于书面和正式场合。", phonics: "wheth 读 /wɛð/，er 读 /ər/，重音在第一音节。注意 th 发浊音 /ð/。", collocations: [["check whether", "检查是否"], ["whether or not", "是否"], ["regardless of whether", "无论是否"]], examples: [["Check whether the alarm is cleared.", "检查告警是否已恢复。"], ["I'm not sure whether it works.", "我不确定它是否有效。"]] },
      { w: "assigned", ipa: "/əˈsaɪnd/", pos: "动词（过去分词）", cn: "已分配的", memory: "① assign = 分配（动词）；② assigned = 已分配的（过去分词/形容词）。\nassign = as（去）+ sign（签名）→ 签上名字指派给某人。", phonics: "as 读 /ə/，signed 读 /saɪnd/，重音在第二音节。注意 s 不发音。", collocations: [["assigned to", "分配给"], ["ticket owner", "工单负责人"], ["assign a task", "分配任务"]], examples: [["The ticket has been assigned to John.", "这张工单已分配给John。"], ["Who is this assigned to?", "这张工单分配给谁了？"]] },
    ],
    phrases: [
      { p: "check whether", ipa: "/tʃɛk ˈwɛð.ər/", cn: "确认是否", why: "check = 检查，whether = 是否。check whether = 确认某事是否成立。比 check if 更正式。" },
      { p: "have been assigned", ipa: "/hæv biːn əˈsaɪnd/", cn: "已经被分配", why: "现在完成时被动语态：have/has + been + 过去分词。表示「已经被分配」——动作已完成，状态持续。" },
    ],
    grammar: [
      { q: "have been assigned 是什么时态？", a: "现在完成时 + 被动语态：\n结构：have/has + been + 过去分词\n✅ Tickets have been assigned.（工单已经被分配了。）→ 现在完成被动\n✅ The ticket was assigned yesterday.（工单昨天被分配了。）→ 一般过去被动\n✅ The ticket is being assigned.（工单正在被分配。）→ 现在进行被动\n交接中常用现在完成时，强调「到目前为止已经完成的事」。" },
    ],
    pattern: "Please check whether + 主语 + have/has been + 过去分词",
    patternExamples: [
      { en: "Please check whether all alarms have been acknowledged.", cn: "请确认所有告警都已被确认。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Please check whether the report has been submitted.", cn: "请确认报告是否已提交。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
      { en: "Please check whether the vendor has been notified.", cn: "请确认供应商是否已被通知。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }, { w: "notified", ipa: "/ˈnoʊtɪfaɪ/", cn: "通知", phonics: "not 读 /noʊt/，ify 读 /ɪfaɪ/" }] },
    ],
    thinking: "whether 比 if 更正式，适合工单和交接场景。\nhave been assigned = 现在完成被动语态 = 「已经被分配」。\n交接时确认所有工单都有 owner 是最基本的检查——没有负责人的工单 = 无人跟进 = 潜在风险。",
    pronunciation: "whether 的 th 发浊音 /ð/：WHE-ther /ˈwɛð.ər/。\nassigned 的 s 不发音：a-SIGNED /əˈsaɪnd/。\nhave been 弱读：/həv biːn/。\n节奏：Please CHECK ｜ WHE-ther ｜ all TICK-ets ｜ have been a-SIGNED.",
    quiz: [
      { q: "「请确认所有告警都已被确认」怎么说？", a: "Please check whether all alarms have been acknowledged." },
      { q: "whether 和 if 有什么区别？", a: "在 check whether/if 中可以互换，但 whether 更正式。\n另外 whether 可以用于介词后（depend on whether），if 不行。\nwhether 可以搭配 or not（whether or not），if 不行。" },
    ],
  },
  {
    id: 113,
    en: "Please verify the ticket owner.",
    cn: "请确认工单负责人。",
    ipa: "/pliːz ˈvɛr.ɪ.faɪ ðə ˈtɪk.ɪt ˈoʊ.nər/",
    tags: ["第113句", "确认负责人", "★★★★"],
    when: "交接时逐张确认工单的负责人是谁，确保下一班知道遇到问题该找谁。ticket owner 是工单的第一责任人。",
    words: [
      { w: "verify", ipa: "/ˈvɛr.ɪ.faɪ/", pos: "动词", cn: "确认；核实", memory: "① ver = 真实（拉丁语 verus）；② ify = 使成为。\nverify = 使其为真 → 确认/核实。\n比 check 更正式，强调「验证真实性」。", phonics: "ver 读 /vɛr/，i 读 /ɪ/，fy 读 /faɪ/，重音在第一音节。", collocations: [["verify the owner", "确认负责人"], ["verify the status", "确认状态"], ["verify the information", "核实信息"]], examples: [["Please verify the ticket details.", "请核实工单详情。"], ["Verify that the alarm is cleared.", "确认告警已恢复。"]] },
      { w: "owner", ipa: "/ˈoʊ.nər/", pos: "名词", cn: "负责人；所有者", memory: "① own = 拥有（动词/形容词）；② owner = 拥有者（名词）。\nticket owner = 工单负责人（对工单全权负责的人）。", phonics: "own 读 /oʊn/，er 读 /ər/，重音在第一音节。", collocations: [["ticket owner", "工单负责人"], ["system owner", "系统负责人"], ["process owner", "流程负责人"]], examples: [["Who is the ticket owner?", "谁是工单负责人？"], ["The owner should update the ticket.", "负责人应该更新工单。"]] },
    ],
    phrases: [
      { p: "ticket owner", ipa: "/ˈtɪk.ɪt ˈoʊ.nər/", cn: "工单负责人", why: "owner = 拥有者/负责人。ticket owner 是工单的第一责任人，负责跟进直到工单关闭。不同于 assignee（执行人），owner 是最终责任人。" },
    ],
    grammar: [
      { q: "verify 和 check 有什么区别？", a: "check = 检查（看看状态如何），比较随意。\nverify = 核实（验证是否正确/属实），更正式更严谨。\n✅ Check the temperature.（看看温度。）→ 简单查看\n✅ Verify the ticket owner.（核实工单负责人。）→ 确认是否正确\n交接中 verify 用于需要确认准确性的场景。" },
    ],
    pattern: "Please verify the + 核实对象",
    patternExamples: [
      { en: "Please verify the alarm source.", cn: "请确认告警来源。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Please verify the equipment serial number.", cn: "请确认设备序列号。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }] },
      { en: "Please verify the contact information.", cn: "请确认联系方式。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "contact", ipa: "/ˈkɒntækt/", cn: "联系", phonics: "con 读 /kɒn/，tact 读 /tækt/" }] },
    ],
    thinking: "verify 比 check 更正式——check 是「看一眼」，verify 是「确认无误」。\nticket owner 是工单的第一责任人，交接时必须确认：\n① 每张工单都有 owner\n② owner 知道自己是负责人\n③ 下一班知道有事找谁",
    pronunciation: "verify 第一音节重读：VER-i-fy /ˈvɛr.ɪ.faɪ/。\nowner 第一音节重读：OWN-er /ˈoʊ.nər/。\n节奏：Please VER-i-fy ｜ the TICK-et ｜ OWN-er.",
    quiz: [
      { q: "「请确认设备序列号」怎么说？", a: "Please verify the equipment serial number." },
      { q: "ticket owner 和 assignee 有什么区别？", a: "owner = 工单最终责任人，对工单全权负责直到关闭。\nassignee = 具体执行人，可能被 owner 指派去完成某个具体任务。\n一个工单只有一个 owner，但可以有多个 assignee。" },
    ],
  },
  {
    id: 114,
    en: "Please verify the current ticket status.",
    cn: "请确认工单当前状态。",
    ipa: "/pliːz ˈvɛr.ɪ.faɪ ðə ˈkʌr.ənt ˈtɪk.ɪt ˈsteɪ.təs/",
    tags: ["第114句", "确认状态", "★★★★"],
    when: "逐张核实工单的当前状态：open / in progress / pending / resolved / closed。确保工单系统中的状态与实际处理进展一致。",
    words: [
      { w: "status", ipa: "/ˈsteɪ.təs/", pos: "名词", cn: "状态", memory: "① status = 状态（拉丁语，原意「站立的位置」）。\n常见状态：open / in progress / pending / resolved / closed。", phonics: "sta 读 /steɪ/，tus 读 /təs/，重音在第一音节。注意不要读成 /ˈstæ.təs/。", collocations: [["ticket status", "工单状态"], ["alarm status", "告警状态"], ["current status", "当前状态"]], examples: [["What's the ticket status?", "工单状态是什么？"], ["Update the status to resolved.", "把状态更新为已解决。"]] },
    ],
    phrases: [
      { p: "current ticket status", ipa: "/ˈkʌr.ɪnt ˈtɪk.ɪt ˈsteɪ.təs/", cn: "工单当前状态", why: "current = 当前的，ticket = 工单，status = 状态。交接时需要确认工单系统中的状态是否反映了实际处理进展。" },
    ],
    grammar: [
      { q: "工单常见的状态有哪些？", a: "标准工单生命周期：\n① Open = 待处理（新建，尚未开始）\n② In Progress = 处理中（正在解决）\n③ Pending = 挂起（等待外部条件）\n④ Resolved = 已解决（问题修复，待确认）\n⑤ Closed = 已关闭（确认修复，归档）\n\n交接时重点关注 Open 和 In Progress 的工单。" },
    ],
    pattern: "Please verify the current + 对象 + status",
    patternExamples: [
      { en: "Please verify the current alarm status.", cn: "请确认当前告警状态。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Please verify the current system status.", cn: "请确认当前系统状态。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Please verify the current vendor status.", cn: "请确认当前供应商处理状态。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
    ],
    thinking: "status 是运维中最常用的词之一。\n交接时 verify the current ticket status = 确保工单系统里的状态和实际一致。\n常见不一致：工单还显示 open，但实际上已经解决了 → 需要更新状态。",
    pronunciation: "status 第一音节重读：STA-tus /ˈsteɪ.təs/。\ncurrent 第一音节重读：CUR-rent /ˈkʌr.ənt/。\n节奏：Please VER-i-fy ｜ the CUR-rent ｜ TICK-et ｜ STA-tus.",
    quiz: [
      { q: "「请确认当前系统状态」怎么说？", a: "Please verify the current system status." },
      { q: "Resolved 和 Closed 有什么区别？", a: "Resolved = 技术团队已修复问题，但还没有得到最终确认。\nClosed = 确认修复有效，工单正式关闭归档。\n流程：Open → In Progress → Resolved → Closed。" },
    ],
  },
  {
    id: 115,
    en: "Please verify the next action.",
    cn: "请确认下一步处理措施。",
    ipa: "/pliːz ˈvɛr.ɪ.faɪ ðə nɛkst ˈæk.ʃən/",
    tags: ["第115句", "下一步措施", "★★★★★"],
    when: "交接时不仅要告知当前状态，还要明确「下一步该做什么」。next action 是交接的核心信息——告诉下一班值班人员接下来该怎么处理。",
    words: [
      { w: "next", ipa: "/nɛkst/", pos: "形容词", cn: "下一步的；接下来的", memory: "next = 紧邻的下一个。\nnext action = 下一步行动，next shift = 下一班，next week = 下周。", phonics: "n 读 /n/，ex 读 /ɛks/，t 读 /t/。单音节词。", collocations: [["next action", "下一步措施"], ["next shift", "下一班"], ["next step", "下一步"]], examples: [["What's the next action?", "下一步措施是什么？"], ["Inform the next shift.", "通知下一班。"]] },
      { w: "action", ipa: "/ˈæk.ʃən/", pos: "名词", cn: "措施；行动", memory: "① act = 行动（动词）；② action = 行动（名词）。\naction item = 行动项/待办事项，在会议和交接中常用。", phonics: "ac 读 /æk/，tion 读 /ʃən/，重音在第一音节。", collocations: [["next action", "下一步措施"], ["action item", "行动项"], ["corrective action", "纠正措施"]], examples: [["What action should we take?", "我们应该采取什么措施？"], ["Log the action in the ticket.", "把措施记录在工单中。"]] },
    ],
    phrases: [
      { p: "next action", ipa: "/nɛkst ˈæk.ʃən/", cn: "下一步措施", why: "next = 下一个，action = 措施/行动。交接的核心不仅是告知现状，更要明确「接下来该做什么」。" },
    ],
    grammar: [
      { q: "交接中常见的 action 相关表达？", a: "① next action = 下一步措施\n② action item = 行动项（具体待办）\n③ corrective action = 纠正措施（修复问题的动作）\n④ preventive action = 预防措施（防止复发的动作）\n⑤ no action required = 无需处理\n交接时必须明确 next action，不能留下模糊地带。" },
    ],
    pattern: "Please verify the next + 名词",
    patternExamples: [
      { en: "Please verify the next maintenance window.", cn: "请确认下一个维护窗口。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "Please verify the next scheduled task.", cn: "请确认下一个计划任务。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
      { en: "Please verify the next shift schedule.", cn: "请确认下一班排班。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }, { w: "schedule", ipa: "/ˈʃɛdjuːl/", cn: "安排", phonics: "sched 读 /ʃɛd/，ule 读 /juːl/" }] },
    ],
    thinking: "好的交接 = 现状 + 下一步。\n只说「当前状态是 XX」不够，必须说「下一步该做 XX」。\nnext action 让下一班值班人员知道接手后第一件事是什么。\nverify the next action = 确认双方对下一步的理解一致。",
    pronunciation: "next 单音节：/nɛkst/，注意 x 发 /ks/ 音。\naction 第一音节重读：AC-tion /ˈæk.ʃən/。\n节奏：Please VER-i-fy ｜ the NEXT ｜ AC-tion.",
    quiz: [
      { q: "「请确认下一个维护窗口」怎么说？", a: "Please verify the next maintenance window." },
      { q: "交接时为什么必须明确 next action？", a: "因为值班人员换班后，如果不知道下一步该做什么，可能导致：① 处理延误 ② 重复操作 ③ 遗漏关键步骤。明确的 next action 确保工作连续性。" },
    ],
  },
  {
    id: 116,
    en: "Please verify the expected completion time.",
    cn: "请确认预计完成时间。",
    ipa: "/pliːz ˈvɛr.ɪ.faɪ ði ɪkˈspɛk.tɪd kəmˈpliː.ʃən taɪm/",
    tags: ["第116句", "预计时间", "★★★★"],
    when: "确认每张工单的预计完成时间（ETA），让下一班知道什么时候可以期望问题解决。这也是向客户和管理层汇报时的必要信息。",
    words: [
      { w: "expected", ipa: "/ɪkˈspɛk.tɪd/", pos: "形容词", cn: "预计的；预期的", memory: "① expect = 期望/预计（动词）；② expected = 预计的（形容词/过去分词）。\nex = 向外 + spect = 看 → 向外看 → 期待/预计。", phonics: "ex 读 /ɪk/，pect 读 /spɛk/，ed 读 /tɪd/，重音在第二音节。", collocations: [["expected time", "预计时间"], ["expected completion", "预计完成"], ["expected result", "预期结果"]], examples: [["The expected completion is tomorrow.", "预计明天完成。"], ["What's the expected arrival time?", "预计什么时候到？"]] },
      { w: "completion", ipa: "/kəmˈpliː.ʃən/", pos: "名词", cn: "完成", memory: "① complete = 完成（动词/形容词）；② completion = 完成（名词）。\ncompletion time = 完成时间。", phonics: "com 读 /kəm/，ple 读 /pliː/，tion 读 /ʃən/，重音在第二音节。共3个音节。", collocations: [["completion time", "完成时间"], ["estimated completion", "预计完成"], ["project completion", "项目完成"]], examples: [["What's the expected completion time?", "预计什么时候完成？"], ["Completion is scheduled for Friday.", "计划周五完成。"]] },
    ],
    phrases: [
      { p: "expected completion time", ipa: "/ɪkˈspɛk.tɪd kəmˈpliː.ʃən taɪm/", cn: "预计完成时间", why: "expected = 预计的，completion = 完成，time = 时间。即 ECT (Expected Completion Time)，类似 ETA (Estimated Time of Arrival)。" },
    ],
    grammar: [
      { q: "expected 和 estimated 有什么区别？", a: "expected = 预期的（基于经验的判断）。\nestimated = 估算的（基于数据/计算）。\n✅ expected completion time = 预计完成时间（一般预期）\n✅ estimated completion time = 估算完成时间（更精确的计算）\n两者在日常交接中可以互换，estimated 略更正式。" },
    ],
    pattern: "Please verify the expected + 名词 + time",
    patternExamples: [
      { en: "Please verify the expected arrival time.", cn: "请确认预计到达时间。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
      { en: "Please verify the expected delivery time.", cn: "请确认预计交付时间。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
      { en: "Please verify the expected recovery time.", cn: "请确认预计恢复时间。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
    ],
    thinking: "completion time 是工单管理的关键字段。\n下一班需要知道：这个问题大概什么时候能解决？\n如果 expected completion time 已过但工单还没关闭 → 需要升级。\n交接时确认 expected completion time = 给下一班一个时间锚点。",
    pronunciation: "expected 第二音节重读：ex-PECT-ed /ɪkˈspɛk.tɪd/。\ncompletion 第二音节重读：com-PLE-tion /kəmˈpliː.ʃən/。\n连读：expected + completion → ex-pected-com-pletion。\n节奏：Please VER-i-fy ｜ the ex-PECT-ed ｜ com-PLE-tion ｜ TIME.",
    quiz: [
      { q: "「请确认预计恢复时间」怎么说？", a: "Please verify the expected recovery time." },
      { q: "ETA 和 ECT 有什么区别？", a: "ETA = Estimated Time of Arrival（预计到达时间），通常用于物理移动。\nECT = Expected Completion Time（预计完成时间），通常用于任务/工单。\n在工单场景中用 ECT，在物流运输中用 ETA。" },
    ],
  },
  {
    id: 117,
    en: "Please add today's update to the ticket.",
    cn: "请把今天的处理情况写入工单。",
    ipa: "/pliːz æd təˈdeɪz ˌʌpˈdeɪt tuː ðə ˈtɪk.ɪt/",
    tags: ["第117句", "写入工单", "★★★★★"],
    when: "交班前的最后一步——把本班次做了什么、发现了什么、采取了什么措施，全部写入工单。这是信息传递的核心动作。",
    words: [
      { w: "add", ipa: "/æd/", pos: "动词", cn: "添加；写入", memory: "add = 添加。\nadd to = 添加到…里面。\n在工单场景中 add = 写入/添加记录。", phonics: "a 读 /æ/，dd 读 /d/。单音节词，发短音 /æ/。", collocations: [["add to the ticket", "写入工单"], ["add a comment", "添加评论"], ["add a note", "添加备注"]], examples: [["Add a comment to the ticket.", "在工单中添加评论。"], ["Please add today's findings.", "请写入今天的发现。"]] },
      { w: "today's", ipa: "/təˈdeɪz/", pos: "形容词（所有格）", cn: "今天的", memory: "today + 's = 今天的（所有格）。\ntoday's update = 今天的更新，today's progress = 今天的进展。", phonics: "to 读 /tə/，day 读 /deɪ/，s 读 /z/。注意 's 发 /z/ 音。", collocations: [["today's update", "今天的更新"], ["today's progress", "今天的进展"], ["today's incidents", "今天的事件"]], examples: [["What's today's update?", "今天的更新是什么？"], ["Log today's activities.", "记录今天的活动。"]] },
    ],
    phrases: [
      { p: "add to the ticket", ipa: "/æd tuː ðə ˈtɪk.ɪt/", cn: "写入工单", why: "add = 添加，to = 到，ticket = 工单。在工单系统中添加记录/评论/更新。" },
      { p: "today's update", ipa: "/təˈdeɪz ˌʌpˈdeɪt/", cn: "今天的更新/处理情况", why: "today's = 今天的（所有格），update = 更新。指本班次内的所有处理进展和发现。" },
    ],
    grammar: [
      { q: "名词所有格 's 在交接中怎么用？", a: "'s 表示「的」（所属关系）：\n✅ today's update = 今天的更新\n✅ yesterday's report = 昨天的报告\n✅ this week's tickets = 本周的工单\n✅ the vendor's response = 供应商的回复\n注意：'s 后面如果是 s 音，发 /ɪz/（如 James's）；其他情况发 /z/。" },
    ],
    pattern: "Please add + 内容 + to the + 位置",
    patternExamples: [
      { en: "Please add the findings to the report.", cn: "请把发现写入报告。", words: [{ w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
      { en: "Please add the notes to the log.", cn: "请把备注写入日志。", words: [] },
      { en: "Please add the screenshot to the ticket.", cn: "请把截图附到工单中。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
    ],
    thinking: "add to the ticket = 把信息写入工单系统。\n交接最重要的动作之一就是确保本班次的处理记录完整写入工单。\ntoday's update 包括：做了什么、发现了什么、采取了什么措施、当前什么状态。\n这些信息是下一班了解情况的第一手资料。",
    pronunciation: "add 短音 /æd/，不要读成 /eɪd/。\ntoday's 的 's 发 /z/：to-DAY-z /təˈdeɪz/。\nupdate 第二音节重读：up-DATE /ˌʌpˈdeɪt/。\n节奏：Please ADD ｜ to-DAY'S UP-date ｜ to the TICK-et.",
    quiz: [
      { q: "「请把截图附到工单中」怎么说？", a: "Please add the screenshot to the ticket." },
      { q: "工单更新应该包含哪些内容？", a: "① 本班次做了什么（action taken）② 发现了什么（findings）③ 当前状态（current status）④ 下一步计划（next action）⑤ 预计时间（expected completion time）。" },
    ],
  },
  {
    id: 118,
    en: "Please attach the supporting evidence.",
    cn: "请上传相关证明材料。",
    ipa: "/pliːz əˈtætʃ ðə səˈpɔːr.tɪŋ ˈɛv.ɪ.dəns/",
    tags: ["第118句", "上传材料", "★★★★"],
    when: "工单处理过程中产生的证据（截图、日志、照片、测试报告）需要作为附件上传到工单中，作为处理记录和 RCA 的依据。",
    words: [
      { w: "attach", ipa: "/əˈtætʃ/", pos: "动词", cn: "附上；附加", memory: "① at = 在；② tach = 钉/固定（法语 attacher）。\nattach = 固定在一起 → 附加/附上。\n邮件中 attachment = 附件。", phonics: "a 读 /ə/，ttach 读 /tætʃ/，重音在第二音节。注意 ch 发 /tʃ/。", collocations: [["attach a file", "附上文件"], ["attach a screenshot", "附上截图"], ["attach evidence", "附上证据"]], examples: [["Please attach the screenshot.", "请附上截图。"], ["Attach the log file to the ticket.", "把日志文件附到工单中。"]] },
      { w: "supporting", ipa: "/səˈpɔːr.tɪŋ/", pos: "形容词", cn: "支持性的；辅助的", memory: "① support = 支持（动词）；② supporting = 支持性的（形容词/现在分词）。\nsupporting evidence = 支持性证据 = 用来证明/支撑某个结论的材料。", phonics: "sup 读 /sə/，port 读 /pɔːr/，ing 读 /tɪŋ/，重音在第二音节。", collocations: [["supporting evidence", "支持性证据"], ["supporting document", "支持文件"], ["supporting data", "支持数据"]], examples: [["Attach the supporting documents.", "附上支持文件。"], ["We need supporting evidence.", "我们需要支持性证据。"]] },
      { w: "evidence", ipa: "/ˈɛv.ɪ.dəns/", pos: "名词", cn: "证据；证明", memory: "① e = 出；② vid = 看（= video）；③ ence = 名词后缀。\nevidence = 能看出来/展示的东西 = 证据。", phonics: "ev 读 /ɛv/，i 读 /ɪ/，dence 读 /dəns/，重音在第一音节。", collocations: [["supporting evidence", "支持性证据"], ["documentary evidence", "书面证据"], ["physical evidence", "物证"]], examples: [["We need evidence of the fix.", "我们需要修复的证据。"], ["Attach evidence to the RCA report.", "把证据附到RCA报告中。"]] },
    ],
    phrases: [
      { p: "supporting evidence", ipa: "/səˈpɔːr.tɪŋ ˈɛv.ɪ.dəns/", cn: "相关证明材料", why: "supporting = 支持性的，evidence = 证据。指能够支撑/证明工单处理过程的材料，如截图、日志、测试报告等。" },
    ],
    grammar: [
      { q: "attach 和 upload 有什么区别？", a: "attach = 附加（强调「附在某物上」）：attach to the ticket = 附到工单上。\nupload = 上传（强调「从本地传到服务器」）：upload the file = 上传文件。\n✅ Please attach the screenshot to the ticket.（请把截图附到工单中。）\n✅ Please upload the file to the server.（请把文件上传到服务器。）\n在工单场景中两者经常互换使用。" },
    ],
    pattern: "Please attach the + 附件类型 + to + 目标",
    patternExamples: [
      { en: "Please attach the screenshot to the ticket.", cn: "请把截图附到工单中。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "Please attach the log file to the report.", cn: "请把日志文件附到报告中。", words: [{ w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
      { en: "Please attach the photo to the incident record.", cn: "请把照片附到事件记录中。", words: [] },
    ],
    thinking: "supporting evidence 是工单和 RCA 的重要组成部分。\n没有证据的工单 = 口说无凭。\n常见的 supporting evidence：\n① 截图（告警界面、监控数据）\n② 日志文件（系统日志、操作日志）\n③ 照片（设备损坏、现场状况）\n④ 测试报告（验证修复是否有效）",
    pronunciation: "attach 第二音节重读：a-TTACH /əˈtætʃ/。\nsupporting 第二音节重读：sup-PORT-ing /səˈpɔːr.tɪŋ/。\nevidence 第一音节重读：EV-i-dence /ˈɛv.ɪ.dəns/。\n节奏：Please a-TTACH ｜ the sup-PORT-ing ｜ EV-i-dence.",
    quiz: [
      { q: "「请把日志文件附到报告中」怎么说？", a: "Please attach the log file to the report." },
      { q: "工单中常见的 supporting evidence 有哪些？", a: "① 告警截图 ② 系统日志 ③ 设备照片 ④ 测试验证报告 ⑤ 供应商回复邮件 ⑥ 变更记录。这些材料是 RCA 和审计的重要依据。" },
    ],
  },
  {
    id: 119,
    en: "Please notify the next shift about these tickets.",
    cn: "请把这些工单交接给下一班继续跟进。",
    ipa: "/pliːz ˈnoʊ.tɪ.faɪ ðə nɛkst ʃɪft əˈbaʊt ðiːz ˈtɪk.ɪts/",
    tags: ["第119句", "交接通知", "★★★★★"],
    when: "交班的核心动作——把未关闭的工单信息传递给下一班值班人员。notify the next shift = 通知下一班，确保工作的连续性。",
    words: [
      { w: "notify", ipa: "/ˈnoʊ.tɪ.faɪ/", pos: "动词", cn: "通知；告知", memory: "① not = 标记（= note）；② ify = 使成为。\nnotify = 使其注意到 → 通知/告知。\n比 tell 更正式，常用于工作流程。", phonics: "no 读 /noʊ/，ti 读 /tɪ/，fy 读 /faɪ/，重音在第一音节。", collocations: [["notify the team", "通知团队"], ["notify the vendor", "通知供应商"], ["notify the customer", "通知客户"]], examples: [["Please notify the next shift.", "请通知下一班。"], ["Notify the vendor immediately.", "立即通知供应商。"]] },
      { w: "shift", ipa: "/ʃɪft/", pos: "名词", cn: "班次；轮班", memory: "① shift = 移动/转换；② 在排班场景中 = 班次/轮班。\nnext shift = 下一班，day shift = 白班，night shift = 夜班。", phonics: "sh 读 /ʃ/，i 读 /ɪ/，ft 读 /ft/。单音节词。", collocations: [["next shift", "下一班"], ["day shift", "白班"], ["night shift", "夜班"], ["shift handover", "交班"]], examples: [["The next shift starts at 8 AM.", "下一班早上8点开始。"], ["Inform the next shift.", "通知下一班。"]] },
    ],
    phrases: [
      { p: "notify the next shift", ipa: "/ˈnoʊ.tɪ.faɪ ðə nɛkst ʃɪft/", cn: "通知下一班", why: "notify = 通知，next shift = 下一班。这是交接的核心动作——确保下一班了解当前情况。" },
      { p: "about these tickets", ipa: "/əˈbaʊt ðiːz ˈtɪk.ɪts/", cn: "关于这些工单", why: "about = 关于，these tickets = 这些工单。指明通知的内容范围。" },
    ],
    grammar: [
      { q: "notify 的常见搭配？", a: "notify + 人 + about/of + 事：\n✅ notify the next shift about the tickets（通知下一班关于这些工单）\n✅ notify the vendor of the issue（通知供应商关于这个问题）\n✅ notify the customer about the maintenance（通知客户关于维护）\n\n也可以 notify + 人 + that 从句：\n✅ notify them that the alarm is cleared（通知他们告警已恢复）" },
    ],
    pattern: "Please notify + 对象 + about + 内容",
    patternExamples: [
      { en: "Please notify the team about the outage.", cn: "请通知团队关于这次中断。", words: [{ w: "notify", ipa: "/ˈnoʊtɪfaɪ/", cn: "通知", phonics: "not 读 /noʊt/，ify 读 /ɪfaɪ/" }] },
      { en: "Please notify the customer about the maintenance.", cn: "请通知客户关于维护计划。", words: [{ w: "notify", ipa: "/ˈnoʊtɪfaɪ/", cn: "通知", phonics: "not 读 /noʊt/，ify 读 /ɪfaɪ/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "Please notify the vendor about the issue.", cn: "请通知供应商关于这个问题。", words: [{ w: "notify", ipa: "/ˈnoʊtɪfaɪ/", cn: "通知", phonics: "not 读 /noʊt/，ify 读 /ɪfaɪ/" }, { w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }, { w: "issue", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
    ],
    thinking: "notify the next shift 是交接的最后一环。\n交班不仅是口头告知，还要确保：\n① 口头交接（face to face）\n② 工单记录更新（written record）\n③ 系统状态同步（system update）\n三者缺一不可，才能保证工作的连续性。",
    pronunciation: "notify 第一音节重读：NO-ti-fy /ˈnoʊ.tɪ.faɪ/。\nshift 单音节：/ʃɪft/。\nabout 弱读：/əˈbaʊt/。\nthese 发长音 /ðiːz/。\n节奏：Please NO-ti-fy ｜ the NEXT SHIFT ｜ a-BOUT ｜ these TICK-ets.",
    quiz: [
      { q: "「请通知供应商关于这个问题」怎么说？", a: "Please notify the vendor about the issue." },
      { q: "交班时需要通过哪些方式传递信息？", a: "① 口头交接（面对面说明关键事项）② 工单记录（在系统中更新处理进展）③ 系统同步（确保 BMS/DCIM 状态准确）。三者缺一不可。" },
    ],
  },
  {
    id: 120,
    en: "Now let's review the fault tickets.",
    cn: "现在我们开始检查故障单。",
    ipa: "/naʊ lɛts rɪˈvjuː ðə fɔːlt ˈtɪk.ɪts/",
    tags: ["第120句", "转场句", "★★★★★"],
    when: "事件单交接完毕，转场进入故障单交接。这是交接流程中的又一个重要转场——从 event tickets（事件单）过渡到 fault tickets（故障单）。",
    words: [
      { w: "review", ipa: "/rɪˈvjuː/", pos: "动词", cn: "检查；审查", memory: "① re = 再次；② view = 看。\nreview = 再看一遍 → 检查/审查。\n交接中 review = 逐项检查确认。", phonics: "re 读 /rɪ/，view 读 /vjuː/，重音在第二音节。", collocations: [["review the tickets", "检查工单"], ["review the alarms", "检查告警"], ["review the report", "审查报告"]], examples: [["Let's review the tickets.", "我们检查一下工单。"], ["Review the alarm history.", "检查告警历史。"]] },
      { w: "fault", ipa: "/fɔːlt/", pos: "名词", cn: "故障", memory: "① fault = 过错/故障/断层。\n在数据中心：fault ticket = 故障单，fault diagnosis = 故障诊断。\nfault 比 alarm 更严重——alarm 是告警（可能自动恢复），fault 是故障（需要人工修复）。", phonics: "f 读 /f/，ault 读 /ɔːlt/。单音节词。注意 l 要发音。", collocations: [["fault ticket", "故障单"], ["fault diagnosis", "故障诊断"], ["fault tolerance", "容错"]], examples: [["Create a fault ticket.", "创建故障单。"], ["The fault has been resolved.", "故障已解决。"]] },
    ],
    phrases: [
      { p: "fault tickets", ipa: "/fɔːlt ˈtɪk.ɪts/", cn: "故障单", why: "fault = 故障，tickets = 工单。fault tickets = 故障单。区别于 event tickets（事件单）——故障单记录的是需要修复的实际故障。" },
      { p: "let's review", ipa: "/lɛts rɪˈvjuː/", cn: "我们检查一下", why: "let's = let us = 让我们。let's review = 我们一起检查。这是交接中常用的引导句。" },
    ],
    grammar: [
      { q: "event ticket 和 fault ticket 有什么区别？", a: "event ticket（事件单）= 记录一个事件（可能是告警、请求、变更等）。\nfault ticket（故障单）= 专门记录一个故障（设备坏了、服务中断了）。\n\n关系：\n① 事件单可能升级为故障单（event → fault）\n② 故障单一定是从事件单来的\n③ 故障单优先级更高，处理流程更严格\n\n交接顺序：event tickets → fault tickets → change requests。" },
    ],
    pattern: "Now let's review the + 下一类交接内容",
    patternExamples: [
      { en: "Now let's review the change requests.", cn: "现在我们开始检查变更申请。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
      { en: "Now let's review the maintenance schedule.", cn: "现在我们开始检查维护计划。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }, { w: "schedule", ipa: "/ˈʃɛdjuːl/", cn: "安排", phonics: "sched 读 /ʃɛd/，ule 读 /juːl/" }] },
      { en: "Now let's review the pending items.", cn: "现在我们开始检查待处理事项。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
    ],
    thinking: "交接的完整流程：\n① BMS 告警交接\n② DCIM 交接\n③ 事件单交接（event tickets）\n④ 故障单交接（fault tickets）← 我们现在在这\n⑤ 变更申请（change requests）\n⑥ 维护计划（maintenance schedule）\n\n每个模块交接完毕都用 Now let's review/move on to... 来转场。\n这是交接的骨架，掌握转场句就能串起整个交接流程。",
    pronunciation: "review 第二音节重读：re-VIEW /rɪˈvjuː/。\nfault 单音节：/fɔːlt/，注意 l 要发音。\nlet's 弱读：/lɛts/。\n节奏：Now let's re-VIEW ｜ the FAULT ｜ TICK-ets.",
    quiz: [
      { q: "「现在我们开始检查变更申请」怎么说？", a: "Now let's review the change requests." },
      { q: "event ticket 什么时候会变成 fault ticket？", a: "当事件单涉及实际设备故障或服务中断，且需要专门修复时，事件单会 converted（转换）为故障单。例如：告警显示 UPS 异常（event）→ 确认 UPS 模块损坏（fault）→ 创建故障单跟踪维修。" },
    ],
  },
];

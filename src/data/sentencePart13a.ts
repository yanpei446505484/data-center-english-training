// EXPORTS: MOCK_SENTENCES_PART13A

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART13A: ISentence[] = [
  {
    id: 401,
    en: "Start the MOP.",
    cn: "开始执行MOP。",
    ipa: "/stɑːrt ðə ˌɛm oʊ ˈpiː/",
    tags: ["第401句", "MOP执行", "★★★★★"],
    when: "进入MOP执行环节。MOP = Method of Procedure（维护操作方案），是经过审批的标准化操作步骤。交接时演示如何在BMS/DCIM中启动MOP流程。",
    words: [
      { w: "MOP", ipa: "/ˌɛm oʊ ˈpiː/", pos: "名词", cn: "维护操作方案", memory: "MOP = Method of Procedure（操作方案）。\n数据中心任何高风险操作（倒闸、UPS维护、发电机测试）都必须有审批过的MOP。\nMOP 包含：步骤清单、风险评估、回退方案、审批签字。", phonics: "逐字母读 M-O-P，不要读成单词 'mop'（拖把）。", collocations: [["start the MOP", "开始执行MOP"], ["MOP approval", "MOP审批"], ["MOP document", "MOP文件"]], examples: [["The MOP has been approved.", "MOP已获批准。"], ["Please review the MOP before starting.", "开始前请审核MOP。"]] },
      { w: "start", ipa: "/stɑːrt/", pos: "动词", cn: "开始；启动", memory: "① start = 开始/启动。\n② 在MOP语境中，start 意味着正式启动操作流程，开始按步骤执行。", phonics: "st 读 /st/，art 读 /ɑːrt/。", collocations: [["start the MOP", "开始MOP"], ["start the operation", "开始操作"], ["start the procedure", "开始流程"]], examples: [["Let's start the MOP now.", "现在开始执行MOP。"], ["Start the procedure at 9 AM.", "9点开始执行流程。"]] },
    ],
    phrases: [
      { p: "Start the MOP", ipa: "/stɑːrt ðə ˌɛm oʊ ˈpiː/", cn: "开始执行MOP", why: "祈使句，直接下达指令。Start + the + MOP = 启动MOP流程。交接时由值班经理发出此指令。" },
    ],
    grammar: [
      { q: "MOP 前面为什么用 the？", a: "the MOP = 特指这一次操作的MOP（已经审批过的那份）。\n✅ Start the MOP.（开始执行这份MOP → 特指已审批的方案）\n✅ We need a MOP for this work.（这个工作需要一个MOP → 泛指，还没有）\n执行时一定是 the MOP，因为MOP已经提前审批好了。" },
    ],
    pattern: "Start the + 流程/操作",
    patternExamples: [
      { en: "Start the procedure.", cn: "开始执行流程。", words: [{ w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }, { w: "procedure", ipa: "/prəˈsiːdʒər/", cn: "流程", phonics: "pro 读 /prə/，cedure 读 /siːdʒər/" }] },
      { en: "Start the switching operation.", cn: "开始倒闸操作。", words: [{ w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }, { w: "switching", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "operation", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }] },
      { en: "Start the maintenance.", cn: "开始维护工作。", words: [{ w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
    ],
    thinking: "MOP 执行是数据中心最严肃的操作环节。\n执行顺序：① 启动MOP（本句）→ ② 逐步阅读（402-403）→ ③ 执行步骤（404-407）→ ④ 确认/记录（408-413）→ ⑤ 暂停/恢复（414-417）→ ⑥ 回退/终止（418-420）→ ⑦ 完成（421-425）。\n每一步都必须严格按MOP文件执行，不得跳步。",
    pronunciation: "MOP 逐字母读 /ˌɛm oʊ ˈpiː/，不要读成 /mɒp/。\nstart 的 ar 读 /ɑːr/。\n节奏：START ｜ the M-O-P.",
    quiz: [
      { q: "MOP 怎么读？代表什么？", a: "MOP 逐字母读 /ˌɛm oʊ ˈpiː/，不要读成单词 mop。MOP = Method of Procedure（维护操作方案），是经过审批的标准化操作步骤。" },
      { q: "开始执行MOP，怎么说？", a: "Start the MOP." },
    ],
  },
  {
    id: 402,
    en: "Read Step One.",
    cn: "阅读第一步。",
    ipa: "/riːd stɛp wʌn/",
    tags: ["第402句", "MOP执行", "★★★★★"],
    when: "MOP启动后，操作员需要先阅读第一步的内容，确认理解后再执行。Read 强调先读后做，不要盲目执行。",
    words: [
      { w: "step", ipa: "/stɛp/", pos: "名词", cn: "步骤", memory: "① step = 步骤/台阶。\n② MOP中的每个步骤都有编号：Step One / Step Two / Step Three。\n每个步骤必须按顺序执行，不得跳步。", phonics: "st 读 /st/，ep 读 /ɛp/。", collocations: [["Step One", "第一步"], ["next step", "下一步"], ["previous step", "上一步"]], examples: [["Read Step Two carefully.", "仔细阅读第二步。"], ["This step requires two people.", "这一步需要两个人。"]] },
    ],
    phrases: [
      { p: "Step One", ipa: "/stɛp wʌn/", cn: "第一步", why: "Step + 数字 = 第几步。MOP中步骤用英文数字或阿拉伯数字编号。交接时按顺序逐步阅读和执行。" },
    ],
    grammar: [
      { q: "为什么先 Read 再 Perform？", a: "MOP 执行的核心原则：先读后做（Read → Understand → Perform → Verify）。\n✅ Read Step One.（阅读第一步 → 理解内容）\n✅ Perform Step One.（执行第一步 → 按内容操作）\n先读后做可以避免误操作。如果读完不理解，必须先问清楚再执行。" },
    ],
    pattern: "Read Step + 数字",
    patternExamples: [
      { en: "Read Step Two.", cn: "阅读第二步。", words: [{ w: "step", ipa: "/stɛp/", cn: "步骤", phonics: "step 读 /stɛp/" }] },
      { en: "Read Step Three.", cn: "阅读第三步。", words: [{ w: "step", ipa: "/stɛp/", cn: "步骤", phonics: "step 读 /stɛp/" }] },
      { en: "Please read Step Four carefully.", cn: "请仔细阅读第四步。", words: [{ w: "step", ipa: "/stɛp/", cn: "步骤", phonics: "step 读 /stɛp/" }] },
    ],
    thinking: "MOP执行的黄金流程：Read → Understand → Perform → Verify → Record。\n每一步都要先读（Read），理解（Understand）后再执行（Perform），执行后确认（Verify），最后记录（Record）。\n这个流程确保操作零失误。",
    pronunciation: "read 在此处读现在时 /riːd/，不是过去式 /rɛd/。\nstep 的 e 读短音 /ɛ/。\n节奏：READ ｜ STEP ONE.",
    quiz: [
      { q: "阅读第三步，怎么说？", a: "Read Step Three." },
      { q: "MOP执行的核心原则是什么？", a: "先读后做（Read → Understand → Perform → Verify → Record）。每一步必须先阅读理解，再执行操作，执行后确认结果，最后记录时间和数据。" },
    ],
  },
  {
    id: 403,
    en: "Please perform Step Two.",
    cn: "执行第二步。",
    ipa: "/pliːz pərˈfɔːrm stɛp tuː/",
    tags: ["第403句", "MOP执行", "★★★★★"],
    when: "阅读完第二步内容后，值班经理指示操作员执行该步骤。perform 比 do 更正式，强调按规范执行。",
    words: [
      { w: "perform", ipa: "/pərˈfɔːrm/", pos: "动词", cn: "执行；实施", memory: "① per- = 完全；② form = 形成。\nperform = 完全按照要求去做 → 执行/实施。\nperform 比 do 更正式，强调按规范、按流程执行。\n数据中心操作用 perform，不用 do。", phonics: "per 读 /pər/，form 读 /fɔːrm/，重音在第二音节。", collocations: [["perform the step", "执行步骤"], ["perform the operation", "执行操作"], ["perform the test", "执行测试"]], examples: [["Please perform Step Three.", "请执行第三步。"], ["The engineer performed the switching.", "工程师执行了倒闸。"]] },
    ],
    phrases: [
      { p: "perform Step Two", ipa: "/pərˈfɔːrm stɛp tuː/", cn: "执行第二步", why: "perform + Step + 数字 = 执行第几步。perform 强调按MOP文件规范操作，不是随意执行。" },
    ],
    grammar: [
      { q: "perform 和 do 在操作中有什么区别？", a: "perform = 按规范执行（正式用语，强调流程合规）\ndo = 做（日常用语，无规范感）\n✅ Please perform Step Two.（请按规范执行第二步 → MOP语境）\n❌ Please do Step Two.（做第二步 → 太随意，不适合MOP场景）\n数据中心操作必须用 perform，因为强调合规性和可追溯性。" },
    ],
    pattern: "Please perform Step + 数字",
    patternExamples: [
      { en: "Please perform Step One.", cn: "请执行第一步。", words: [{ w: "perform", ipa: "/pərˈfɔːrm/", cn: "执行", phonics: "per 读 /pər/，form 读 /fɔːrm/" }, { w: "step", ipa: "/stɛp/", cn: "步骤", phonics: "step 读 /stɛp/" }] },
      { en: "Please perform Step Three.", cn: "请执行第三步。", words: [{ w: "perform", ipa: "/pərˈfɔːrm/", cn: "执行", phonics: "per 读 /pər/，form 读 /fɔːrm/" }, { w: "step", ipa: "/stɛp/", cn: "步骤", phonics: "step 读 /stɛp/" }] },
      { en: "Please perform Step Four now.", cn: "请现在执行第四步。", words: [{ w: "perform", ipa: "/pərˈfɔːrm/", cn: "执行", phonics: "per 读 /pər/，form 读 /fɔːrm/" }, { w: "step", ipa: "/stɛp/", cn: "步骤", phonics: "step 读 /stɛp/" }] },
    ],
    thinking: "perform 是数据中心操作的标配动词。\n常见搭配：perform the step（执行步骤）、perform the switching（执行倒闸）、perform the test（执行测试）、perform the inspection（执行巡检）。\n任何正式操作都用 perform，体现专业性和合规性。",
    pronunciation: "perform 重音在第二音节：/pərˈfɔːrm/。\nstep 的 e 读短音 /ɛ/。\n节奏：Please per-FORM ｜ STEP TWO.",
    quiz: [
      { q: "执行第五步，怎么说？", a: "Please perform Step Five." },
      { q: "perform 和 do 有什么区别？", a: "perform = 按规范执行（正式用语，MOP/操作场景必用）；do = 做（日常用语，太随意）。数据中心操作用 perform，强调合规性和可追溯性。" },
    ],
  },
  {
    id: 404,
    en: "Please verify the switching sequence.",
    cn: "确认倒闸顺序。",
    ipa: "/pliːz ˈvɛr.ɪ.faɪ ðə ˈswɪtʃ.ɪŋ ˈsiː.kwəns/",
    tags: ["第404句", "MOP执行", "★★★★★"],
    when: "倒闸操作是数据中心最高风险的电气操作之一。执行前必须确认倒闸顺序正确，防止误操作导致停电。",
    words: [
      { w: "verify", ipa: "/ˈvɛr.ɪ.faɪ/", pos: "动词", cn: "确认；核实", memory: "① ver- = 真实（拉丁语 verus）；② verify = 确认真实性/正确性。\nverify 比 check 更严格，意味着逐项核对、确保无误。\n数据中心操作中，verify 用于关键步骤的确认。", phonics: "ver 读 /vɛr/，i 读 /ɪ/，fy 读 /faɪ/，重音在第一音节。", collocations: [["verify the sequence", "确认顺序"], ["verify the result", "确认结果"], ["verify before proceeding", "确认后继续"]], examples: [["Verify the switching sequence.", "确认倒闸顺序。"], ["Please verify the readings.", "请确认读数。"]] },
      { w: "switching sequence", ipa: "/ˈswɪtʃ.ɪŋ ˈsiː.kwəns/", pos: "名词", cn: "倒闸顺序", memory: "① switching = 倒闸/切换（电气操作）；② sequence = 顺序/序列。\nswitching sequence = 倒闸顺序（先断哪个、后合哪个）。\n倒闸顺序错误可能导致弧光短路、设备损坏甚至人员伤亡。", phonics: "switching 读 /swɪtʃɪŋ/，sequence 读 /siːkwəns/。", collocations: [["switching sequence", "倒闸顺序"], ["switching operation", "倒闸操作"], ["switching order", "倒闸指令"]], examples: [["The switching sequence is critical.", "倒闸顺序至关重要。"], ["Follow the switching sequence exactly.", "严格按照倒闸顺序执行。"]] },
    ],
    phrases: [
      { p: "verify the switching sequence", ipa: "/ˈvɛr.ɪ.faɪ ðə ˈswɪtʃ.ɪŋ ˈsiː.kwəns/", cn: "确认倒闸顺序", why: "倒闸前必须确认顺序：先断负载侧 → 再断电源侧；合闸时反过来。顺序错误 = 重大安全事故。" },
    ],
    grammar: [
      { q: "verify 和 check 有什么区别？", a: "verify = 逐项核实、确保无误（更严格，用于关键操作）\ncheck = 快速检查（日常用语）\n✅ Please verify the switching sequence.（请逐项确认倒闸顺序 → 关键操作）\n✅ Please check the alarm.（请看一下告警 → 日常检查）\n倒闸、MOP执行等关键步骤用 verify，日常巡检用 check。" },
    ],
    pattern: "Please verify the + 关键内容",
    patternExamples: [
      { en: "Please verify the readings.", cn: "请确认读数。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "readings", ipa: "/ˈriːdɪŋ/", cn: "读数", phonics: "read 读 /riːd/，ing 读 /ɪŋ/" }] },
      { en: "Please verify the isolation points.", cn: "请确认隔离点。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
      { en: "Please verify the breaker status.", cn: "请确认断路器状态。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
    ],
    thinking: "倒闸操作的安全铁律：\n① 断电顺序：先断负载侧 → 再断电源侧（从上到下）\n② 合闸顺序：先合电源侧 → 再合负载侧（从下到上）\n③ 每步操作前必须 verify（确认），不能凭记忆操作\n④ 倒闸必须两人操作：一人操作、一人监护",
    pronunciation: "verify 重音在第一音节：/ˈvɛr.ɪ.faɪ/。\nswitching 的 sw 读 /sw/，不要读成 /s/。\nsequence 的 se 读 /siː/，qu 读 /kw/。\n节奏：Please VER-i-fy ｜ the SWITCH-ing SE-quence.",
    quiz: [
      { q: "确认断路器状态，怎么说？", a: "Please verify the breaker status." },
      { q: "verify 和 check 在操作中有什么区别？", a: "verify = 逐项核实确保无误（关键操作必用）；check = 快速检查（日常巡检用）。倒闸、MOP等关键步骤用 verify，日常巡检用 check。" },
    ],
  },
  {
    id: 405,
    en: "Please confirm the breaker position before switching.",
    cn: "请在倒闸前确认断路器位置。",
    ipa: "/pliːz kənˈfɜːrm ðə ˈbreɪ.kər pəˈzɪʃ.ən bɪˈfɔːr ˈswɪtʃ.ɪŋ/",
    tags: ["第405句", "MOP执行", "★★★★★"],
    when: "倒闸操作前，必须确认断路器当前是合闸（closed）还是分闸（open）位置，防止带负荷操作。",
    words: [
      { w: "breaker", ipa: "/ˈbreɪ.kər/", pos: "名词", cn: "断路器", memory: "① break = 断开；② breaker = 断路器（自动切断电路的保护装置）。\n断路器 = 电路的'开关+保险'，正常时通断电路，故障时自动跳闸保护。\n常见类型：MCB（微型）、MCCB（塑壳）、ACB（框架）、VCB（真空）。", phonics: "break 读 /breɪk/，er 读 /ər/，重音在第一音节。", collocations: [["breaker position", "断路器位置"], ["breaker status", "断路器状态"], ["trip the breaker", "跳闸断路器"]], examples: [["Check the breaker position.", "检查断路器位置。"], ["The breaker is in the open position.", "断路器在分闸位置。"]] },
      { w: "position", ipa: "/pəˈzɪʃ.ən/", pos: "名词", cn: "位置；状态", memory: "① position = 位置/状态。\n② 断路器位置：open（分闸/断开）/ closed（合闸/闭合）/ tripped（跳闸）。\n操作前必须确认当前位置，才能执行下一步。", phonics: "po 读 /pə/，si 读 /zɪ/，tion 读 /ʃən/，重音在第二音节。", collocations: [["open position", "分闸位置"], ["closed position", "合闸位置"], ["breaker position", "断路器位置"]], examples: [["The breaker is in the closed position.", "断路器在合闸位置。"], ["Confirm the position before operating.", "操作前确认位置。"]] },
    ],
    phrases: [
      { p: "before switching", ipa: "/bɪˈfɔːr ˈswɪtʃ.ɪŋ/", cn: "在倒闸之前", why: "before + 动名词 = 在做某事之前。强调操作前的确认步骤，是安全操作的关键。" },
    ],
    grammar: [
      { q: "断路器有哪些位置状态？", a: "open position = 分闸位置（电路断开，无电流）\nclosed position = 合闸位置（电路闭合，有电流）\ntripped position = 跳闸位置（故障自动断开）\nrack-out position = 摇出位置（物理隔离，最安全）\n操作前必须确认当前位置，才能决定下一步操作。" },
    ],
    pattern: "Please confirm the + 设备状态 + before + 操作",
    patternExamples: [
      { en: "Please confirm the voltage before closing.", cn: "合闸前请确认电压。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }, { w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }] },
      { en: "Please confirm the load before switching.", cn: "倒闸前请确认负载。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }, { w: "switching", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "Please confirm the isolation before working.", cn: "施工前请确认隔离。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }] },
    ],
    thinking: "倒闸操作的安全确认清单：\n① 确认断路器当前位置（open/closed/tripped）\n② 确认负载侧无电流\n③ 确认操作工具（绝缘手套/绝缘杆）就绪\n④ 确认监护人到位\n⑤ 确认MOP步骤编号\n全部确认后才能执行操作。",
    pronunciation: "breaker 的 ea 读 /eɪ/：/ˈbreɪ.kər/。\nposition 重音在第二音节：/pəˈzɪʃ.ən/。\n节奏：Please con-FIRM ｜ the BREAK-er po-SI-tion ｜ be-FORE SWITCH-ing.",
    quiz: [
      { q: "断路器有哪几种位置状态？", a: "open position（分闸/断开）、closed position（合闸/闭合）、tripped position（跳闸）、rack-out position（摇出/物理隔离）。操作前必须确认当前位置。" },
      { q: "合闸前请确认电压，怎么说？", a: "Please confirm the voltage before closing." },
    ],
  },
  {
    id: 406,
    en: "Please execute the switching operation now.",
    cn: "请现在执行倒闸操作。",
    ipa: "/pliːz ˈɛk.sɪ.kjuːt ðə ˈswɪtʃ.ɪŋ ˌɑː.pəˈreɪ.ʃən naʊ/",
    tags: ["第406句", "MOP执行", "★★★★★"],
    when: "所有确认完成后，值班经理下达执行指令。execute 是正式的执行指令，表示所有前置条件已满足。",
    words: [
      { w: "execute", ipa: "/ˈɛk.sɪ.kjuːt/", pos: "动词", cn: "执行；实施", memory: "① ex- = 出；② ecute = 跟随（拉丁语 exsequi）。\nexecute = 正式执行（比 perform 更强调'按指令执行'）。\nexecute / perform / do 正式度递减：execute > perform > do。", phonics: "ex 读 /ɛk/，e 读 /sɪ/，cute 读 /kjuːt/，重音在第一音节。", collocations: [["execute the operation", "执行操作"], ["execute the command", "执行指令"], ["execute the plan", "执行计划"]], examples: [["Execute the switching now.", "现在执行倒闸。"], ["Execute Step Three.", "执行第三步。"]] },
    ],
    phrases: [
      { p: "execute the switching operation", ipa: "/ˈɛk.sɪ.kjuːt ðə ˈswɪtʃ.ɪŋ ˌɑː.pəˈreɪ.ʃən/", cn: "执行倒闸操作", why: "execute + the + operation = 执行操作。switching operation 是倒闸操作的完整说法。加 now 表示立即执行。" },
    ],
    grammar: [
      { q: "execute、perform、do 在操作中的区别？", a: "execute = 按指令正式执行（最高正式度，用于关键操作指令）\nperform = 按规范执行（高正式度，用于MOP步骤）\ndo = 做（日常用语，不适合正式操作）\n✅ Execute the switching operation now.（现在正式执行倒闸 → 最终指令）\n✅ Perform Step Three.（执行第三步 → MOP步骤）\n❌ Do the switching.（做倒闸 → 太随意）" },
    ],
    pattern: "Please execute the + 操作 + now",
    patternExamples: [
      { en: "Please execute the transfer now.", cn: "请现在执行切换。", words: [] },
      { en: "Please execute the test now.", cn: "请现在执行测试。", words: [{ w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "Please execute the isolation now.", cn: "请现在执行隔离。", words: [] },
    ],
    thinking: "倒闸操作的指令层级：\n① Read（阅读步骤）→ ② Verify（确认条件）→ ③ Execute（正式执行）\nExecute 是最终的执行指令，只有在所有前置确认完成后才能发出。\n一旦说出 Execute，操作员立即执行，不得犹豫。",
    pronunciation: "execute 重音在第一音节：/ˈɛk.sɪ.kjuːt/。\noperation 重音在第三音节：/ˌɑː.pəˈreɪ.ʃən/。\n节奏：Please EX-e-cute ｜ the SWITCH-ing op-e-RA-tion ｜ NOW.",
    quiz: [
      { q: "请现在执行测试，怎么说？", a: "Please execute the test now." },
      { q: "execute、perform、do 哪个最正式？", a: "execute 最正式（按指令正式执行，用于关键操作指令）；perform 次之（按规范执行，用于MOP步骤）；do 最随意（不适合正式操作场景）。" },
    ],
  },
  {
    id: 407,
    en: "Please read the meter reading aloud.",
    cn: "请大声读出仪表读数。",
    ipa: "/pliːz riːd ðə ˈmiː.tər ˈriː.dɪŋ əˈlaʊd/",
    tags: ["第407句", "MOP执行", "★★★★★"],
    when: "操作执行后，需要读取仪表数值并大声报出，让监护人和值班经理同时确认数据正确。",
    words: [
      { w: "meter", ipa: "/ˈmiː.tər/", pos: "名词", cn: "仪表；电表", memory: "① meter = 仪表/计量器（测量电压、电流、功率等）。\n② 数据中心常见仪表：电压表（voltmeter）、电流表（ammeter）、功率表（wattmeter）。\n读仪表是MOP执行中的关键步骤。", phonics: "me 读 /miː/，ter 读 /tər/，重音在第一音节。", collocations: [["meter reading", "仪表读数"], ["power meter", "功率表"], ["voltage meter", "电压表"]], examples: [["Check the meter reading.", "检查仪表读数。"], ["The meter shows 230V.", "仪表显示230V。"]] },
      { w: "aloud", ipa: "/əˈlaʊd/", pos: "副词", cn: "大声地", memory: "① a- = 处于…状态；② loud = 大声的。\naloud = 大声地（让别人能听到）。\n操作中要求 read aloud，是为了让监护人同时确认数据。", phonics: "a 读 /ə/，loud 读 /laʊd/。", collocations: [["read aloud", "大声读出"], ["count aloud", "大声数"], ["say aloud", "大声说"]], examples: [["Please read the voltage aloud.", "请大声读出电压值。"], ["Read the number aloud.", "大声读出数字。"]] },
    ],
    phrases: [
      { p: "read the meter reading aloud", ipa: "/riːd ðə ˈmiː.tər ˈriː.dɪŋ əˈlaʊd/", cn: "大声读出仪表读数", why: "read aloud = 大声读出。要求操作员大声报出读数，让监护人和值班经理同时听到并确认，防止看错或记错。" },
    ],
    grammar: [
      { q: "为什么要 read aloud 而不是自己看？", a: "read aloud = 大声读出（多人同时确认）\nread silently = 默读（只有自己能确认）\n✅ Read the meter reading aloud.（大声读出读数 → 监护人也听到，双重确认）\n❌ Read the meter reading silently.（默读 → 只有操作员自己看到，容易出错）\n关键操作必须 read aloud，实现'双人确认'原则。" },
    ],
    pattern: "Please read the + 数据 + aloud",
    patternExamples: [
      { en: "Please read the voltage aloud.", cn: "请大声读出电压值。", words: [{ w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }] },
      { en: "Please read the current aloud.", cn: "请大声读出电流值。", words: [] },
      { en: "Please read the temperature aloud.", cn: "请大声读出温度值。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
    ],
    thinking: "双人确认原则（Two-Person Rule）：\n关键操作必须两人执行：一人操作（Operator）+ 一人监护（Supervisor）。\n操作员大声读出读数 → 监护人确认 → 值班经理记录。\n三重确认确保数据准确无误。",
    pronunciation: "meter 的 ee 读长音 /iː/：/ˈmiː.tər/。\naloud 重音在第二音节：/əˈlaʊd/。\n节奏：Please READ ｜ the ME-ter READ-ing ｜ a-LOUD.",
    quiz: [
      { q: "请大声读出电流值，怎么说？", a: "Please read the current aloud." },
      { q: "为什么操作中要 read aloud？", a: "为了实现'双人确认'原则。操作员大声读出读数，监护人同时听到并确认，防止看错或记错。关键操作必须 read aloud，不能默读。" },
    ],
  },
  {
    id: 408,
    en: "Please record the operation time.",
    cn: "请记录操作时间。",
    ipa: "/pliːz rɪˈkɔːrd ðə ˌɑː.pəˈreɪ.ʃən taɪm/",
    tags: ["第408句", "MOP执行", "★★★★★"],
    when: "每步操作完成后，必须记录精确的操作时间，用于追溯和审计。时间是MOP执行的核心记录项。",
    words: [
      { w: "record", ipa: "/rɪˈkɔːrd/", pos: "动词", cn: "记录", memory: "① re- = 再次；② cord = 心/记忆（拉丁语 cor）。\nrecord = 再次记住 → 记录下来。\nrecord 作动词时重音在第二音节 /rɪˈkɔːrd/；作名词时重音在第一音节 /ˈrɛk.ərd/。", phonics: "re 读 /rɪ/，cord 读 /kɔːrd/，动词重音在第二音节。", collocations: [["record the time", "记录时间"], ["record the reading", "记录读数"], ["record the result", "记录结果"]], examples: [["Record the switching time.", "记录倒闸时间。"], ["Please record the voltage.", "请记录电压值。"]] },
      { w: "operation time", ipa: "/ˌɑː.pəˈreɪ.ʃən taɪm/", pos: "名词", cn: "操作时间", memory: "operation = 操作；time = 时间。\noperation time = 操作执行时间（精确到分钟）。\nMOP要求每步操作都记录精确时间，用于事后审计和追溯。", phonics: "operation 重音在第三音节：/ˌɑː.pəˈreɪ.ʃən/。", collocations: [["operation time", "操作时间"], ["operation log", "操作日志"], ["operation record", "操作记录"]], examples: [["What was the operation time?", "操作时间是几点？"], ["Record the operation time in the log.", "在日志中记录操作时间。"]] },
    ],
    phrases: [
      { p: "record the operation time", ipa: "/rɪˈkɔːrd ðə ˌɑː.pəˈreɪ.ʃən taɪm/", cn: "记录操作时间", why: "每步操作完成后必须记录时间。MOP文件中有专门的时间记录栏，操作员填写实际执行时间，监护人签字确认。" },
    ],
    grammar: [
      { q: "record 作动词和名词时读音一样吗？", a: "不一样！\n动词 record = /rɪˈkɔːrd/（重音在第二音节）：Please record the time.（请记录时间）\n名词 record = /ˈrɛk.ərd/（重音在第一音节）：Check the record.（查看记录）\n这是英语中常见的'动词-名词重音移位'现象。" },
    ],
    pattern: "Please record the + 数据",
    patternExamples: [
      { en: "Please record the switching time.", cn: "请记录倒闸时间。", words: [{ w: "switching", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "Please record the meter reading.", cn: "请记录仪表读数。", words: [{ w: "reading", ipa: "/ˈriːdɪŋ/", cn: "读数", phonics: "read 读 /riːd/，ing 读 /ɪŋ/" }] },
      { en: "Please record the breaker status.", cn: "请记录断路器状态。", words: [{ w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
    ],
    thinking: "MOP记录的核心要素：\n① 操作时间（operation time）— 每步操作的精确时间\n② 倒闸时间（switching time）— 倒闸操作的时间\n③ 仪表读数（meter reading）— 操作前后的电压/电流值\n④ 操作人签字（operator signature）— 谁执行的\n⑤ 监护人签字（supervisor signature）— 谁确认的\n所有记录必须当场填写，不得事后补填。",
    pronunciation: "record 作动词重音在第二音节：/rɪˈkɔːrd/。\noperation 重音在第三音节：/ˌɑː.pəˈreɪ.ʃən/。\n节奏：Please re-CORD ｜ the op-e-RA-tion TIME.",
    quiz: [
      { q: "请记录仪表读数，怎么说？", a: "Please record the meter reading." },
      { q: "record 作动词和名词时读音有什么不同？", a: "动词 record = /rɪˈkɔːrd/（重音在第二音节）；名词 record = /ˈrɛk.ərd/（重音在第一音节）。这是英语中常见的'动词-名词重音移位'。" },
    ],
  },
  {
    id: 409,
    en: "Record the switching time.",
    cn: "记录倒闸时间。",
    ipa: "/rɪˈkɔːrd ðə ˈswɪtʃ.ɪŋ taɪm/",
    tags: ["第409句", "MOP执行", "★★★★★"],
    when: "倒闸操作完成后，立即记录精确的倒闸时间。倒闸时间是电气操作的关键记录项，用于追溯和审计。",
    words: [
      { w: "switching time", ipa: "/ˈswɪtʃ.ɪŋ taɪm/", pos: "名词", cn: "倒闸时间", memory: "switching = 倒闸；time = 时间。\nswitching time = 倒闸操作的时间（精确到分钟）。\n倒闸时间必须记录，因为供电切换会影响整个数据中心的电力供应。", phonics: "switching 读 /swɪtʃɪŋ/，time 读 /taɪm/。", collocations: [["switching time", "倒闸时间"], ["switching log", "倒闸日志"], ["switching record", "倒闸记录"]], examples: [["Record the switching time.", "记录倒闸时间。"], ["What was the switching time?", "倒闸时间是几点？"]] },
    ],
    phrases: [
      { p: "switching time", ipa: "/ˈswɪtʃ.ɪŋ taɪm/", cn: "倒闸时间", why: "倒闸时间是MOP记录中最重要的时间数据之一。从倒闸开始到供电恢复的时长直接影响IT设备运行。" },
    ],
    grammar: [
      { q: "switching time 和 operation time 有什么区别？", a: "switching time = 倒闸时间（特指电气倒闸操作的时间点）\noperation time = 操作时间（泛指任何操作的执行时间）\n✅ Record the switching time.（记录倒闸时间 → 特指倒闸）\n✅ Record the operation time.（记录操作时间 → 泛指任何操作）\nswitching time 是 operation time 的一种，但更具体。" },
    ],
    pattern: "Record the + 时间类型",
    patternExamples: [
      { en: "Record the start time.", cn: "记录开始时间。", words: [{ w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "Record the completion time.", cn: "记录完成时间。", words: [] },
      { en: "Record the restoration time.", cn: "记录恢复时间。", words: [] },
    ],
    thinking: "倒闸操作的时间记录要求：\n① 断电时间（power-off time）— 何时断开\n② 操作时间（operation time）— 何时执行操作\n③ 合闸时间（power-on time）— 何时合闸\n④ 恢复时间（restoration time）— 供电何时恢复\n⑤ 总停电时长（total outage duration）— 从断电到恢复的总时间\n所有时间精确到分钟，用于事后审计。",
    pronunciation: "switching 的 sw 读 /sw/。\ntime 的 i 读长音 /aɪ/。\n节奏：Re-CORD ｜ the SWITCH-ing TIME.",
    quiz: [
      { q: "记录恢复时间，怎么说？", a: "Record the restoration time." },
      { q: "switching time 和 operation time 有什么区别？", a: "switching time = 倒闸时间（特指电气倒闸操作的时间点）；operation time = 操作时间（泛指任何操作的执行时间）。switching time 是 operation time 的一种，但更具体。" },
    ],
  },
  {
    id: 410,
    en: "Please take a photo of the meter display.",
    cn: "请拍摄仪表显示的照片。",
    ipa: "/pliːz teɪk ə ˈfoʊ.toʊ əv ðə ˈmiː.tər dɪˈspleɪ/",
    tags: ["第410句", "MOP执行", "★★★★"],
    when: "除了文字记录，还需要拍照留存仪表读数，作为操作的影像证据。照片是MOP执行的重要附件。",
    words: [
      { w: "take a photo", ipa: "/teɪk ə ˈfoʊ.toʊ/", pos: "动词短语", cn: "拍照", memory: "① take = 拍；② photo = 照片。\ntake a photo = 拍一张照片。\nMOP执行中，关键步骤需要拍照留存：仪表读数、断路器位置、标签状态等。", phonics: "take 读 /teɪk/，photo 读 /ˈfoʊ.toʊ/。", collocations: [["take a photo", "拍照"], ["take a picture", "拍照"], ["photo evidence", "照片证据"]], examples: [["Take a photo of the breaker.", "拍一张断路器的照片。"], ["Please take a photo of the label.", "请拍摄标签照片。"]] },
    ],
    phrases: [
      { p: "take a photo of", ipa: "/teɪk ə ˈfoʊ.toʊ əv/", cn: "拍摄…的照片", why: "take a photo of + 对象 = 拍摄某物的照片。MOP执行中要求拍照留存关键数据，作为操作证据。" },
    ],
    grammar: [
      { q: "为什么MOP执行中要拍照？", a: "拍照的目的：\n① 证据留存 — 证明操作确实执行了\n② 数据备份 — 防止手抄读数出错\n③ 审计追溯 — 事后可以回看照片确认\n④ 培训记录 — 新人可以学习操作流程\n关键步骤（仪表读数、断路器位置、标签状态）必须拍照。" },
    ],
    pattern: "Please take a photo of the + 对象",
    patternExamples: [
      { en: "Please take a photo of the breaker.", cn: "请拍摄断路器的照片。", words: [{ w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
      { en: "Please take a photo of the label.", cn: "请拍摄标签的照片。", words: [] },
      { en: "Please take a photo of the panel.", cn: "请拍摄配电盘的照片。", words: [{ w: "panel", ipa: "/ˈpænl/", cn: "面板", phonics: "pan 读 /pæn/，el 读 /l/" }] },
    ],
    thinking: "MOP拍照要求：\n① 仪表读数 — 操作前后的电压/电流/功率值\n② 断路器位置 — 分闸/合闸的物理指示\n③ 设备标签 — 确认操作的是正确设备\n④ 操作面板 — 整体状态概览\n照片要求：清晰可读、包含设备编号、有时间水印。",
    pronunciation: "photo 的 ph 读 /f/：/ˈfoʊ.toʊ/。\ndisplay 重音在第二音节：/dɪˈspleɪ/。\n节奏：Please TAKE ｜ a PHO-to ｜ of the ME-ter dis-PLAY.",
    quiz: [
      { q: "请拍摄断路器的照片，怎么说？", a: "Please take a photo of the breaker." },
      { q: "MOP执行中为什么需要拍照？", a: "四个原因：① 证据留存（证明操作执行了）；② 数据备份（防止手抄出错）；③ 审计追溯（事后可回看）；④ 培训记录（新人可学习）。" },
    ],
  },
  {
    id: 411,
    en: "Please sign the MOP checklist.",
    cn: "请在MOP检查表上签字。",
    ipa: "/pliːz saɪn ðə ˌɛm oʊ ˈpiː ˈtʃɛk.lɪst/",
    tags: ["第411句", "MOP执行", "★★★★★"],
    when: "每步操作完成后，操作员和监护人需要在MOP检查表上签字确认。签字是法律效力的确认，不可代签。",
    words: [
      { w: "sign", ipa: "/saɪn/", pos: "动词", cn: "签字；签名", memory: "① sign = 签字/签名。\n② MOP中的签字具有法律效力，表示'我确认此步骤已正确执行'。\n签字不可代签，必须本人亲自签。", phonics: "s 读 /s/，ign 读 /aɪn/，注意 g 不发音。", collocations: [["sign the checklist", "在检查表上签字"], ["sign the MOP", "在MOP上签字"], ["signature", "签名（名词）"]], examples: [["Please sign here.", "请在这里签字。"], ["Both operators must sign.", "两名操作员都必须签字。"]] },
      { w: "checklist", ipa: "/ˈtʃɛk.lɪst/", pos: "名词", cn: "检查表；清单", memory: "① check = 检查；② list = 列表。\nchecklist = 检查表（逐项打勾确认的清单）。\nMOP checklist = MOP检查表，每步操作后在对应行打勾并签字。", phonics: "check 读 /tʃɛk/，list 读 /lɪst/。", collocations: [["MOP checklist", "MOP检查表"], ["safety checklist", "安全检查表"], ["pre-flight checklist", "飞行前检查表"]], examples: [["Complete the checklist.", "完成检查表。"], ["Check each item on the checklist.", "逐项检查清单。"]] },
    ],
    phrases: [
      { p: "sign the MOP checklist", ipa: "/saɪn ðə ˌɛm oʊ ˈpiː ˈtʃɛk.lɪst/", cn: "在MOP检查表上签字", why: "签字确认是MOP执行的法律效力环节。操作员签字 = 我确认已执行；监护人签字 = 我确认已监督。" },
    ],
    grammar: [
      { q: "MOP中谁需要签字？", a: "MOP中需要签字的人员：\n① Operator（操作员）— 执行操作的人，签字确认'我已执行'\n② Supervisor（监护人）— 监督操作的人，签字确认'我已监督'\n③ Manager（经理）— 审批操作的人，签字确认'我已批准'\n三类签字不可互相代替，必须本人亲自签。" },
    ],
    pattern: "Please sign the + 文件",
    patternExamples: [
      { en: "Please sign the work permit.", cn: "请在作业许可证上签字。", words: [{ w: "sign", ipa: "/saɪn/", cn: "签字", phonics: "sign 读 /saɪn/" }] },
      { en: "Please sign the logbook.", cn: "请在日志上签字。", words: [{ w: "sign", ipa: "/saɪn/", cn: "签字", phonics: "sign 读 /saɪn/" }] },
      { en: "Please sign the handover form.", cn: "请在交接表上签字。", words: [{ w: "sign", ipa: "/saɪn/", cn: "签字", phonics: "sign 读 /saɪn/" }, { w: "handover", ipa: "/ˈhændoʊvər/", cn: "交接", phonics: "hand 读 /hænd/，over 读 /oʊvər/" }] },
    ],
    thinking: "签字 = 法律责任。\n签字意味着：'我确认此步骤已正确执行/监督/审批，如有问题我愿意承担责任。'\n签字三铁律：\n① 不可代签（No proxy signing）\n② 不可补签（No retroactive signing）\n③ 不可空签（No blank signing — 必须先确认再签字）",
    pronunciation: "sign 的 g 不发音：/saɪn/，不要读成 /sɪgn/。\nchecklist 的 ch 读 /tʃ/。\n节奏：Please SIGN ｜ the M-O-P CHECK-list.",
    quiz: [
      { q: "请在作业许可证上签字，怎么说？", a: "Please sign the work permit." },
      { q: "MOP中哪三类人需要签字？", a: "① Operator（操作员）— 确认已执行；② Supervisor（监护人）— 确认已监督；③ Manager（经理）— 确认已批准。三类签字不可互相代替，必须本人亲自签。" },
    ],
  },
  {
    id: 412,
    en: "Has the supervisor confirmed this step?",
    cn: "监护人确认这一步了吗？",
    ipa: "/hæz ðə suː.pərˈvaɪ.zər kənˈfɜːrmd ðɪs stɛp/",
    tags: ["第412句", "MOP执行", "★★★★★"],
    when: "操作员完成一步后，需要确认监护人是否已经检查并确认。没有监护人确认，不能进入下一步。",
    words: [
      { w: "supervisor", ipa: "/ˈsuː.pər.vaɪ.zər/", pos: "名词", cn: "监护人；主管", memory: "① super- = 在上；② vise = 看（拉丁语 videre）；③ -or = 人。\nsupervisor = 在上面看着的人 → 监护人/主管。\nMOP执行中，supervisor 是监护操作安全的人，不直接操作。", phonics: "su 读 /suː/，per 读 /pər/，vi 读 /vaɪ/，sor 读 /zər/，重音在第一音节。", collocations: [["supervisor confirmation", "监护人确认"], ["site supervisor", "现场主管"], ["shift supervisor", "值班主管"]], examples: [["The supervisor must confirm.", "监护人必须确认。"], ["Ask the supervisor for approval.", "请主管批准。"]] },
      { w: "confirm", ipa: "/kənˈfɜːrm/", pos: "动词", cn: "确认", memory: "① con- = 完全；② firm = 坚定。\nconfirm = 完全确认 → 核实无误后确认。\nconfirm 比 verify 更偏向'最终确认'，verify 更偏向'逐项核实'。", phonics: "con 读 /kən/，firm 读 /fɜːrm/，重音在第二音节。", collocations: [["confirm the step", "确认步骤"], ["confirm the result", "确认结果"], ["confirm completion", "确认完成"]], examples: [["Has the supervisor confirmed?", "监护人确认了吗？"], ["Please confirm the reading.", "请确认读数。"]] },
    ],
    phrases: [
      { p: "supervisor confirmed", ipa: "/ˈsuː.pər.vaɪ.zər kənˈfɜːrmd/", cn: "监护人确认", why: "supervisor + confirmed = 监护人已确认。MOP中每步操作都需要监护人确认后才能进入下一步。" },
    ],
    grammar: [
      { q: "Has...confirmed 是什么句型？", a: "Has + 主语 + 过去分词 = 现在完成时疑问句（询问是否已经完成）。\n✅ Has the supervisor confirmed?（监护人确认了吗？→ 问是否已经完成确认）\n✅ Did the supervisor confirm?（监护人确认了吗？→ 问过去是否确认了）\nHas confirmed 更强调'到目前为止是否已经确认'，适合操作中实时询问。" },
    ],
    pattern: "Has the + 角色 + confirmed + 对象",
    patternExamples: [
      { en: "Has the manager approved the MOP?", cn: "经理批准MOP了吗？", words: [] },
      { en: "Has the operator signed?", cn: "操作员签字了吗？", words: [{ w: "signed", ipa: "/saɪn/", cn: "签字", phonics: "sign 读 /saɪn/" }] },
      { en: "Has the customer confirmed?", cn: "客户确认了吗？", words: [{ w: "confirmed", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }] },
    ],
    thinking: "MOP执行中的确认链：\n操作员执行 → 操作员自检 → 监护人确认 → 进入下一步\n监护人确认的内容：\n① 操作是否正确执行\n② 仪表读数是否在正常范围\n③ 设备状态是否正确\n④ 操作时间是否已记录\n全部确认后才能签字并进入下一步。",
    pronunciation: "supervisor 重音在第一音节：/ˈsuː.pər.vaɪ.zər/。\nconfirm 重音在第二音节：/kənˈfɜːrm/。\n节奏：HAS ｜ the SU-per-VI-sor ｜ con-FIRMED ｜ this STEP?",
    quiz: [
      { q: "操作员签字了吗？怎么说？", a: "Has the operator signed?" },
      { q: "Has confirmed 和 Did confirm 有什么区别？", a: "Has confirmed = 现在完成时（到目前为止是否已经确认，适合实时询问）；Did confirm = 一般过去时（过去是否确认了，适合事后回顾）。操作中用 Has confirmed。" },
    ],
  },
  {
    id: 413,
    en: "Please initial each step after completion.",
    cn: "请在每步完成后签上姓名缩写。",
    ipa: "/pliːz ɪˈnɪʃ.əl iːtʃ stɛp ˈæf.tər kəmˈpliː.ʃən/",
    tags: ["第413句", "MOP执行", "★★★★"],
    when: "除了正式签字，MOP中每步完成后还需要签上姓名缩写（initial），作为快速确认标记。",
    words: [
      { w: "initial", ipa: "/ɪˈnɪʃ.əl/", pos: "动词", cn: "签姓名缩写", memory: "① initial 作名词 = 姓名首字母；② 作动词 = 签上姓名首字母。\ninitial 比 sign（正式签字）更快，用于每步操作的快速确认。\n例如：张三的 initial = ZS，李四的 initial = LS。", phonics: "i 读 /ɪ/，ni 读 /nɪ/，tial 读 /ʃəl/，重音在第二音节。", collocations: [["initial the step", "在步骤上签缩写"], ["initial each page", "在每页签缩写"], ["initials", "姓名缩写（名词）"]], examples: [["Please initial here.", "请在这里签上姓名缩写。"], ["Initial each completed step.", "在每步完成后签上缩写。"]] },
    ],
    phrases: [
      { p: "after completion", ipa: "/ˈæf.tər kəmˈpliː.ʃən/", cn: "完成后", why: "after + completion = 完成之后。强调必须先完成操作，再签缩写，不能先签后做。" },
    ],
    grammar: [
      { q: "initial 和 sign 有什么区别？", a: "initial = 签姓名缩写（快速标记，每步用）\nsign = 正式签字（法律效力，关键节点用）\n✅ Initial each step after completion.（每步完成后签缩写 → 快速标记）\n✅ Sign the MOP at the end.（最后正式签字 → 法律效力）\ninitial 用于过程中的快速确认，sign 用于最终的正式确认。" },
    ],
    pattern: "Please initial + 对象 + after + 事件",
    patternExamples: [
      { en: "Please initial each page after review.", cn: "审核完每页后签上缩写。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
      { en: "Please initial the drawing after checking.", cn: "检查完图纸后签上缩写。", words: [{ w: "checking", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please initial the log after each entry.", cn: "每条记录后签上缩写。", words: [] },
    ],
    thinking: "MOP中的签字层级：\n① Initial（签缩写）— 每步操作后快速标记，表示'我做了'\n② Sign（正式签字）— 关键节点和最终确认，表示'我承担法律责任'\n③ Witness（见证签字）— 第三方见证关键操作，表示'我亲眼看到了'\n三种签字各有用途，不能互相替代。",
    pronunciation: "initial 重音在第二音节：/ɪˈnɪʃ.əl/。\ncompletion 重音在第二音节：/kəmˈpliː.ʃən/。\n节奏：Please i-NI-tial ｜ EACH STEP ｜ AF-ter com-PLE-tion.",
    quiz: [
      { q: "initial 和 sign 有什么区别？", a: "initial = 签姓名缩写（快速标记，每步用）；sign = 正式签字（法律效力，关键节点用）。initial 用于过程中的快速确认，sign 用于最终的正式确认。" },
      { q: "审核完每页后签上缩写，怎么说？", a: "Please initial each page after review." },
    ],
  },
  {
    id: 414,
    en: "Stop the MOP.",
    cn: "暂停MOP。",
    ipa: "/stɑːp ðə ˌɛm oʊ ˈpiː/",
    tags: ["第414句", "MOP执行", "★★★★★"],
    when: "操作过程中遇到异常情况，需要暂停MOP。Stop 意味着暂停当前操作，等待问题解决后决定是否继续。",
    words: [
      { w: "stop", ipa: "/stɑːp/", pos: "动词", cn: "停止；暂停", memory: "① stop = 停止/暂停。\n② 在MOP语境中，stop = 暂停操作（不是终止）。\n暂停后需要评估情况，决定是继续（Resume）还是终止（Abort）。", phonics: "st 读 /st/，op 读 /ɑːp/。", collocations: [["stop the MOP", "暂停MOP"], ["stop the operation", "暂停操作"], ["stop immediately", "立即停止"]], examples: [["Stop the MOP now.", "立即暂停MOP。"], ["Stop and check the reading.", "停下来检查读数。"]] },
    ],
    phrases: [
      { p: "Stop the MOP", ipa: "/stɑːp ðə ˌɛm oʊ ˈpiː/", cn: "暂停MOP", why: "祈使句，紧急情况下值班经理下达暂停指令。暂停 ≠ 终止，暂停后可以恢复继续。" },
    ],
    grammar: [
      { q: "stop、pause、abort 在MOP中有什么区别？", a: "stop = 暂停（停下来等待，可能恢复）\npause = 暂停（更温和，短暂停顿）\nabort = 终止（彻底放弃，不可恢复）\n✅ Stop the MOP.（暂停MOP → 等待评估后决定）\n✅ Pause the MOP for 5 minutes.（暂停5分钟 → 短暂休息）\n✅ Abort the MOP.（终止MOP → 彻底放弃本次操作）" },
    ],
    pattern: "Stop the + 操作",
    patternExamples: [
      { en: "Stop the switching.", cn: "暂停倒闸。", words: [{ w: "stop", ipa: "/stɒp/", cn: "停止", phonics: "stop 读 /stɒp/" }, { w: "switching", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "Stop the test.", cn: "暂停测试。", words: [{ w: "stop", ipa: "/stɒp/", cn: "停止", phonics: "stop 读 /stɒp/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "Stop the maintenance.", cn: "暂停维护。", words: [{ w: "stop", ipa: "/stɒp/", cn: "停止", phonics: "stop 读 /stɒp/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
    ],
    thinking: "MOP暂停的触发条件：\n① 发现异常读数（电压/电流超出预期范围）\n② 设备状态与MOP描述不符\n③ 操作人员不确定下一步\n④ 外部干扰（紧急告警、人员进入等）\n⑤ 监护人要求暂停\n暂停后必须评估情况，决定 Resume（恢复）或 Abort（终止）。",
    pronunciation: "stop 的 o 读短音 /ɑː/。\n节奏：STOP ｜ the M-O-P.",
    quiz: [
      { q: "暂停测试，怎么说？", a: "Stop the test." },
      { q: "stop、pause、abort 在MOP中有什么区别？", a: "stop = 暂停（等待评估后决定）；pause = 短暂停顿（更温和）；abort = 终止（彻底放弃，不可恢复）。暂停后可以 Resume（恢复）或 Abort（终止）。" },
    ],
  },
  {
    id: 415,
    en: "Resume the MOP.",
    cn: "恢复MOP。",
    ipa: "/rɪˈzuːm ðə ˌɛm oʊ ˈpiː/",
    tags: ["第415句", "MOP执行", "★★★★★"],
    when: "暂停原因解决后，值班经理确认安全，下达恢复指令。Resume 表示从暂停处继续执行。",
    words: [
      { w: "resume", ipa: "/rɪˈzuːm/", pos: "动词", cn: "恢复；继续", memory: "① re- = 再次；② sume = 拿（拉丁语 sumere）。\nresume = 重新拿起 → 恢复/继续。\nresume 特指从暂停处继续，不是从头开始。", phonics: "re 读 /rɪ/，sume 读 /zuːm/，重音在第二音节。注意不是 /rɪˈsjuːm/。", collocations: [["resume the MOP", "恢复MOP"], ["resume the operation", "恢复操作"], ["resume from Step", "从第几步恢复"]], examples: [["Resume the MOP from Step Five.", "从第五步恢复MOP。"], ["We can resume now.", "我们现在可以恢复了。"]] },
    ],
    phrases: [
      { p: "Resume the MOP", ipa: "/rɪˈzuːm ðə ˌɛm oʊ ˈpiː/", cn: "恢复MOP", why: "Resume = 从暂停处继续。恢复前必须确认暂停原因已解决，安全条件已满足。" },
    ],
    grammar: [
      { q: "resume 和 continue 有什么区别？", a: "resume = 从暂停处恢复继续（之前停过）\ncontinue = 继续（可能没停过）\n✅ Resume the MOP.（恢复MOP → 之前暂停过，现在继续）\n✅ Continue to Step Five.（继续到第五步 → 可能没暂停过）\nMOP语境中，暂停后恢复用 resume，正常推进用 continue。" },
    ],
    pattern: "Resume the + 操作 + from + 位置",
    patternExamples: [
      { en: "Resume the MOP from Step Three.", cn: "从第三步恢复MOP。", words: [{ w: "step", ipa: "/stɛp/", cn: "步骤", phonics: "step 读 /stɛp/" }] },
      { en: "Resume the test from the beginning.", cn: "从头恢复测试。", words: [{ w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "Resume the operation after verification.", cn: "确认后恢复操作。", words: [{ w: "operation", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }] },
    ],
    thinking: "恢复MOP的前提条件：\n① 暂停原因已完全解决\n② 设备状态已重新确认\n③ 监护人确认可以继续\n④ 从暂停的步骤重新开始（不能跳步）\n⑤ 记录暂停和恢复的时间",
    pronunciation: "resume 重音在第二音节：/rɪˈzuːm/，不要读成 /rɪˈsjuːm/。\n节奏：Re-ZUME ｜ the M-O-P.",
    quiz: [
      { q: "从第五步恢复MOP，怎么说？", a: "Resume the MOP from Step Five." },
      { q: "resume 和 continue 有什么区别？", a: "resume = 从暂停处恢复继续（之前停过）；continue = 继续（可能没停过）。MOP暂停后恢复用 resume，正常推进用 continue。" },
    ],
  },
  {
    id: 416,
    en: "Repeat the previous step.",
    cn: "重复上一操作。",
    ipa: "/rɪˈpiːt ðə ˈpriː.vi.əs stɛp/",
    tags: ["第416句", "MOP执行", "★★★★"],
    when: "上一步操作结果不确定或有疑问，需要重新执行一次以确保正确。Repeat 表示重新执行同一步骤。",
    words: [
      { w: "repeat", ipa: "/rɪˈpiːt/", pos: "动词", cn: "重复", memory: "① re- = 再次；② peat = 请求（拉丁语 petere）。\nrepeat = 再次做 → 重复。\nMOP中 repeat 用于对某一步操作结果有疑问时，重新执行该步骤。", phonics: "re 读 /rɪ/，peat 读 /piːt/，重音在第二音节。", collocations: [["repeat the step", "重复步骤"], ["repeat the test", "重复测试"], ["repeat the reading", "重新读数"]], examples: [["Repeat Step Three.", "重复第三步。"], ["Please repeat the measurement.", "请重新测量。"]] },
      { w: "previous", ipa: "/ˈpriː.vi.əs/", pos: "形容词", cn: "上一个的；之前的", memory: "① pre- = 在…之前；② vious = 路（拉丁语 via）。\nprevious = 在之前的 → 上一个的。\nprevious step = 上一步，next step = 下一步。", phonics: "pre 读 /priː/，vi 读 /vi/，ous 读 /əs/，重音在第一音节。", collocations: [["previous step", "上一步"], ["previous reading", "上次读数"], ["previous operation", "上次操作"]], examples: [["Go back to the previous step.", "回到上一步。"], ["The previous reading was 230V.", "上次读数是230V。"]] },
    ],
    phrases: [
      { p: "the previous step", ipa: "/ðə ˈpriː.vi.əs stɛp/", cn: "上一步操作", why: "previous + step = 上一步。Repeat the previous step = 重新执行上一步，确保结果正确。" },
    ],
    grammar: [
      { q: "什么时候需要 repeat a step？", a: "需要重复步骤的情况：\n① 读数异常或不确定（需要重新测量）\n② 操作结果与预期不符（需要重新执行）\n③ 监护人要求重复（需要再次确认）\n④ 设备状态不稳定（需要再次操作确认）\n重复时必须从步骤开头重新执行，不能只重复后半段。" },
    ],
    pattern: "Repeat + 步骤/操作",
    patternExamples: [
      { en: "Repeat Step Four.", cn: "重复第四步。", words: [{ w: "step", ipa: "/stɛp/", cn: "步骤", phonics: "step 读 /stɛp/" }] },
      { en: "Repeat the measurement.", cn: "重复测量。", words: [] },
      { en: "Repeat the switching.", cn: "重复倒闸。", words: [{ w: "switching", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
    ],
    thinking: "重复操作的注意事项：\n① 必须先分析为什么需要重复（是操作错误还是读数异常？）\n② 重复前确认设备状态安全\n③ 重复时必须完整执行整个步骤\n④ 如果重复两次结果仍异常，应暂停MOP并报告",
    pronunciation: "repeat 重音在第二音节：/rɪˈpiːt/。\nprevious 重音在第一音节：/ˈpriː.vi.əs/。\n节奏：Re-PEAT ｜ the PRE-vi-ous STEP.",
    quiz: [
      { q: "重复测量，怎么说？", a: "Repeat the measurement." },
      { q: "什么时候需要 repeat a step？", a: "四种情况：① 读数异常或不确定；② 操作结果与预期不符；③ 监护人要求重复；④ 设备状态不稳定。如果重复两次仍异常，应暂停MOP并报告。" },
    ],
  },
  {
    id: 417,
    en: "Please recheck the connection.",
    cn: "请重新检查连接。",
    ipa: "/pliːz ˌriːˈtʃɛk ðə kəˈnɛk.ʃən/",
    tags: ["第417句", "MOP执行", "★★★★"],
    when: "操作完成后对连接状态有疑虑，需要重新检查确认。recheck 表示再次检查，比 check 更强调'二次确认'。",
    words: [
      { w: "recheck", ipa: "/ˌriːˈtʃɛk/", pos: "动词", cn: "重新检查", memory: "① re- = 再次；② check = 检查。\nrecheck = 再次检查（二次确认）。\nrecheck 比 check 更严格，表示对之前的检查结果不完全放心，需要再看一次。", phonics: "re 读 /riː/，check 读 /tʃɛk/，重音在第二音节。", collocations: [["recheck the connection", "重新检查连接"], ["recheck the reading", "重新检查读数"], ["recheck the status", "重新检查状态"]], examples: [["Recheck all connections.", "重新检查所有连接。"], ["Please recheck the breaker.", "请重新检查断路器。"]] },
      { w: "connection", ipa: "/kəˈnɛk.ʃən/", pos: "名词", cn: "连接", memory: "① con- = 共同；② nect = 绑（拉丁语 nectere）；③ -ion = 名词后缀。\nconnection = 连接（电气连接、线缆连接、网络连接等）。\n数据中心操作中，connection 检查是防止松动、接触不良的关键步骤。", phonics: "con 读 /kə/，nec 读 /nɛk/，tion 读 /ʃən/，重音在第二音节。", collocations: [["electrical connection", "电气连接"], ["cable connection", "线缆连接"], ["loose connection", "松动连接"]], examples: [["Check the cable connection.", "检查线缆连接。"], ["The connection is loose.", "连接松动了。"]] },
    ],
    phrases: [
      { p: "recheck the connection", ipa: "/ˌriːˈtʃɛk ðə kəˈnɛk.ʃən/", cn: "重新检查连接", why: "recheck = 再次检查。电气操作后重新检查连接，防止松动或接触不良导致的故障。" },
    ],
    grammar: [
      { q: "recheck 和 check 有什么区别？", a: "recheck = 重新检查（二次确认，对之前结果不完全放心）\ncheck = 检查（首次检查）\n✅ Recheck the connection.（重新检查连接 → 之前检查过，再确认一次）\n✅ Check the connection.（检查连接 → 首次检查）\n关键操作后用 recheck，日常巡检用 check。" },
    ],
    pattern: "Please recheck the + 对象",
    patternExamples: [
      { en: "Please recheck the breaker.", cn: "请重新检查断路器。", words: [{ w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
      { en: "Please recheck the voltage.", cn: "请重新检查电压。", words: [{ w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }] },
      { en: "Please recheck all terminals.", cn: "请重新检查所有端子。", words: [] },
    ],
    thinking: "recheck 的使用场景：\n① 倒闸后重新检查断路器位置\n② 接线后重新检查连接紧固度\n③ 读数异常时重新检查仪表\n④ 操作完成后重新检查所有状态\nrecheck 是防止人为疏忽的最后一道防线。",
    pronunciation: "recheck 重音在第二音节：/ˌriːˈtʃɛk/。\nconnection 重音在第二音节：/kəˈnɛk.ʃən/。\n节奏：Please re-CHECK ｜ the con-NEC-tion.",
    quiz: [
      { q: "请重新检查所有端子，怎么说？", a: "Please recheck all terminals." },
      { q: "recheck 和 check 有什么区别？", a: "recheck = 重新检查（二次确认，对之前结果不完全放心）；check = 检查（首次检查）。关键操作后用 recheck，日常巡检用 check。" },
    ],
  },
  {
    id: 418,
    en: "Rollback immediately.",
    cn: "立即回退。",
    ipa: "/ˈroʊl.bæk ɪˈmiː.di.ət.li/",
    tags: ["第418句", "MOP执行", "★★★★★"],
    when: "操作过程中发现严重问题，需要立即将系统恢复到操作前的状态。Rollback 是紧急回退指令，必须立即执行。",
    words: [
      { w: "rollback", ipa: "/ˈroʊl.bæk/", pos: "动词/名词", cn: "回退；回滚", memory: "① roll = 滚动；② back = 回去。\nrollback = 滚回去 → 回退/回滚（恢复到操作前的状态）。\nrollback 是MOP中的紧急操作，表示操作失败或不安全，需要撤销已执行的步骤。", phonics: "roll 读 /roʊl/，back 读 /bæk/，重音在第一音节。", collocations: [["rollback the operation", "回退操作"], ["rollback procedure", "回退程序"], ["rollback plan", "回退方案"]], examples: [["Rollback to the previous state.", "回退到之前的状态。"], ["The rollback was successful.", "回退成功了。"]] },
      { w: "immediately", ipa: "/ɪˈmiː.di.ət.li/", pos: "副词", cn: "立即", memory: "① im- = 不；② mediate = 中间有间隔的。\nimmediately = 没有间隔 → 立即/马上。\nimmediately 比 now 更紧急，表示零延迟执行。", phonics: "i 读 /ɪ/，mme 读 /miː/，di 读 /di/，ate 读 /ət/，ly 读 /li/，重音在第二音节。", collocations: [["immediately", "立即"], ["stop immediately", "立即停止"], ["rollback immediately", "立即回退"]], examples: [["Stop immediately.", "立即停止。"], ["Notify the manager immediately.", "立即通知经理。"]] },
    ],
    phrases: [
      { p: "Rollback immediately", ipa: "/ˈroʊl.bæk ɪˈmiː.di.ət.li/", cn: "立即回退", why: "紧急指令，表示操作出现严重问题，必须立即撤销已执行的步骤，恢复到操作前的安全状态。" },
    ],
    grammar: [
      { q: "rollback 和 abort 有什么区别？", a: "rollback = 回退（撤销已执行步骤，恢复到操作前状态）\nabort = 终止（停止操作，但不一定回退）\n✅ Rollback immediately.（立即回退 → 撤销已做的，恢复原状）\n✅ Abort the MOP.（终止MOP → 停止继续，但已做的可能需要单独处理）\nrollback 更彻底，abort 更侧重'停止'。" },
    ],
    pattern: "Rollback + 范围/状态",
    patternExamples: [
      { en: "Rollback to the original state.", cn: "回退到原始状态。", words: [] },
      { en: "Rollback the last two steps.", cn: "回退最后两步。", words: [{ w: "steps", ipa: "/stɛp/", cn: "步骤", phonics: "step 读 /stɛp/" }] },
      { en: "Rollback the switching.", cn: "回退倒闸操作。", words: [{ w: "switching", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
    ],
    thinking: "rollback 的触发条件：\n① 操作后设备状态异常（电压/电流不正常）\n② 发现操作了错误的设备\n③ 操作顺序与MOP不符\n④ 监护人判断操作不安全\nrollback 必须按MOP中的'回退方案'执行，不能随意回退。\n每份MOP都必须包含预定义的回退方案（Rollback Plan）。",
    pronunciation: "rollback 重音在第一音节：/ˈroʊl.bæk/。\nimmediately 重音在第二音节：/ɪˈmiː.di.ət.li/。\n节奏：ROLL-back ｜ im-ME-di-ate-ly.",
    quiz: [
      { q: "回退最后两步，怎么说？", a: "Rollback the last two steps." },
      { q: "rollback 和 abort 有什么区别？", a: "rollback = 回退（撤销已执行步骤，恢复到操作前状态）；abort = 终止（停止操作，但不一定回退）。rollback 更彻底，abort 更侧重'停止'。每份MOP都必须包含预定义的回退方案。" },
    ],
  },
  {
    id: 419,
    en: "Abort the MOP.",
    cn: "终止MOP。",
    ipa: "/əˈbɔːrt ðə ˌɛm oʊ ˈpiː/",
    tags: ["第419句", "MOP执行", "★★★★★"],
    when: "操作过程中发现无法解决的问题，或安全条件不再满足，需要彻底终止MOP。Abort 是最严重的操作指令。",
    words: [
      { w: "abort", ipa: "/əˈbɔːrt/", pos: "动词", cn: "终止；中止", memory: "① ab- = 离开；② ort = 出生（拉丁语 oriri）。\nabort = 中途终止（不再继续）。\nabort 是MOP中最严重的指令，表示操作彻底失败或不再安全，必须停止。", phonics: "a 读 /ə/，bort 读 /bɔːrt/，重音在第二音节。", collocations: [["abort the MOP", "终止MOP"], ["abort the operation", "终止操作"], ["abort the test", "终止测试"]], examples: [["Abort the MOP immediately.", "立即终止MOP。"], ["The MOP was aborted due to safety concerns.", "因安全问题MOP被终止。"]] },
    ],
    phrases: [
      { p: "Abort the MOP", ipa: "/əˈbɔːrt ðə ˌɛm oʊ ˈpiː/", cn: "终止MOP", why: "Abort = 彻底终止。终止后需要评估是否需要 rollback（回退），并将设备恢复到安全状态。" },
    ],
    grammar: [
      { q: "MOP终止后需要做什么？", a: "MOP终止后的处理流程：\n① 立即停止所有操作\n② 评估设备当前状态是否安全\n③ 如不安全，执行 rollback（回退）\n④ 记录终止原因和时间\n⑤ 通知管理层和客户\n⑥ 填写事故/异常报告\n⑦ 重新评估后才能再次申请MOP" },
    ],
    pattern: "Abort the + 操作",
    patternExamples: [
      { en: "Abort the switching operation.", cn: "终止倒闸操作。", words: [{ w: "switching", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "operation", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }] },
      { en: "Abort the test immediately.", cn: "立即终止测试。", words: [{ w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Abort the maintenance.", cn: "终止维护工作。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
    ],
    thinking: "abort 的触发条件（必须立即终止）：\n① 发现危及人身安全的状况\n② 设备出现未预期的故障\n③ 操作了错误的设备\n④ 外部紧急情况（消防报警、停电等）\n⑤ 监护人或值班经理判断不安全\nabort 后必须填写异常报告，重新评估后才能再次申请。",
    pronunciation: "abort 重音在第二音节：/əˈbɔːrt/。\n节奏：a-BORT ｜ the M-O-P.",
    quiz: [
      { q: "立即终止测试，怎么说？", a: "Abort the test immediately." },
      { q: "MOP终止后需要做什么？", a: "七步处理：① 立即停止操作；② 评估设备安全状态；③ 如不安全执行回退；④ 记录终止原因和时间；⑤ 通知管理层和客户；⑥ 填写异常报告；⑦ 重新评估后才能再次申请。" },
    ],
  },
  {
    id: 420,
    en: "The MOP has been aborted due to an unexpected alarm.",
    cn: "由于出现意外告警，MOP已被终止。",
    ipa: "/ðə ˌɛm oʊ ˈpiː hæz biːn əˈbɔːrtɪd djuː tuː ən ˌʌn.ɪkˈspɛk.tɪd əˈlɑːrm/",
    tags: ["第420句", "MOP执行", "★★★★"],
    when: "MOP终止后，需要向团队和管理层通报终止原因。本句是标准的终止通报格式。",
    words: [
      { w: "aborted", ipa: "/əˈbɔːr.tɪd/", pos: "动词(被动)", cn: "被终止", memory: "aborted = 被终止（被动语态）。\nThe MOP has been aborted = MOP已经被终止。\n使用被动语态强调结果，不强调谁终止的。", phonics: "a 读 /ə/，bor 读 /bɔːr/，ted 读 /tɪd/。", collocations: [["was aborted", "被终止"], ["has been aborted", "已经被终止"], ["aborted due to", "因…而终止"]], examples: [["The operation was aborted.", "操作被终止了。"], ["The MOP has been aborted.", "MOP已被终止。"]] },
      { w: "unexpected", ipa: "/ˌʌn.ɪkˈspɛk.tɪd/", pos: "形容词", cn: "意外的；未预料到的", memory: "① un- = 不；② expected = 预期的。\nunexpected = 未预料到的 → 意外的。\nunexpected alarm = 意外告警（MOP执行中突然出现的告警）。", phonics: "un 读 /ʌn/，ex 读 /ɪk/，pect 读 /spɛk/，ed 读 /tɪd/，重音在第三音节。", collocations: [["unexpected alarm", "意外告警"], ["unexpected event", "意外事件"], ["unexpected result", "意外结果"]], examples: [["An unexpected alarm occurred.", "出现了意外告警。"], ["The result was unexpected.", "结果出乎意料。"]] },
    ],
    phrases: [
      { p: "due to", ipa: "/djuː tuː/", cn: "由于；因为", why: "due to + 原因 = 由于某原因。用于说明MOP终止的原因，是正式通报的标准格式。" },
    ],
    grammar: [
      { q: "due to 和 because of 有什么区别？", a: "due to = 由于（更正式，用于书面报告和正式通报）\nbecause of = 因为（更口语化）\n✅ The MOP was aborted due to an unexpected alarm.（由于意外告警，MOP被终止 → 正式通报）\n✅ We stopped because of the alarm.（因为告警我们停了 → 口语）\n正式报告和通报用 due to。" },
    ],
    pattern: "The + 操作 + has been aborted + due to + 原因",
    patternExamples: [
      { en: "The test has been aborted due to equipment failure.", cn: "由于设备故障，测试已被终止。", words: [{ w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }, { w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }] },
      { en: "The operation was aborted due to safety concerns.", cn: "由于安全问题，操作被终止。", words: [{ w: "operation", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }, { w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }] },
      { en: "The switching was aborted due to an alarm.", cn: "由于告警，倒闸被终止。", words: [{ w: "switching", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "MOP终止通报的标准格式：\n① 什么被终止（The MOP has been aborted）\n② 为什么终止（due to + 原因）\n③ 当前设备状态（Equipment is in safe state）\n④ 下一步行动（We will reassess and reschedule）\n通报必须及时、准确、完整。",
    pronunciation: "aborted 重音在第二音节：/əˈbɔːr.tɪd/。\nunexpected 重音在第三音节：/ˌʌn.ɪkˈspɛk.tɪd/。\n节奏：The M-O-P ｜ has been a-BOR-ted ｜ due TO ｜ an un-ex-PEC-ted a-LARM.",
    quiz: [
      { q: "由于设备故障，测试被终止了，怎么说？", a: "The test has been aborted due to equipment failure." },
      { q: "due to 和 because of 有什么区别？", a: "due to = 由于（更正式，用于书面报告和正式通报）；because of = 因为（更口语化）。正式报告和MOP终止通报用 due to。" },
    ],
  },
  {
    id: 421,
    en: "Complete the MOP.",
    cn: "完成MOP。",
    ipa: "/kəmˈpliːt ðə ˌɛm oʊ ˈpiː/",
    tags: ["第421句", "MOP执行", "★★★★★"],
    when: "所有步骤执行完毕，每步都已确认和签字，值班经理宣布MOP完成。Complete 表示成功完成全部操作。",
    words: [
      { w: "complete", ipa: "/kəmˈpliːt/", pos: "动词", cn: "完成", memory: "① com- = 完全；② plete = 充满（拉丁语 plere）。\ncomplete = 完全做到 → 完成。\ncomplete 比 finish 更正式，强调'所有要求都已满足'。", phonics: "com 读 /kəm/，plete 读 /pliːt/，重音在第二音节。", collocations: [["complete the MOP", "完成MOP"], ["complete the operation", "完成操作"], ["complete all steps", "完成所有步骤"]], examples: [["The MOP is complete.", "MOP已完成。"], ["All steps have been completed.", "所有步骤已完成。"]] },
    ],
    phrases: [
      { p: "Complete the MOP", ipa: "/kəmˈpliːt ðə ˌɛm oʊ ˈpiː/", cn: "完成MOP", why: "Complete = 成功完成。MOP完成意味着所有步骤已执行、确认、签字，设备处于预期状态。" },
    ],
    grammar: [
      { q: "complete 和 finish 在MOP中有什么区别？", a: "complete = 完成（所有要求都已满足，正式用语）\nfinish = 做完（侧重动作结束，日常用语）\n✅ Complete the MOP.（完成MOP → 所有步骤已执行+确认+签字）\n✅ I finished Step Five.（我做完了第五步 → 单个步骤做完）\nMOP整体完成用 complete，单个步骤做完可以用 finish。" },
    ],
    pattern: "Complete the + 操作/流程",
    patternExamples: [
      { en: "Complete the procedure.", cn: "完成流程。", words: [{ w: "procedure", ipa: "/prəˈsiːdʒər/", cn: "流程", phonics: "pro 读 /prə/，cedure 读 /siːdʒər/" }] },
      { en: "Complete the inspection.", cn: "完成巡检。", words: [] },
      { en: "Complete the handover.", cn: "完成交接。", words: [{ w: "handover", ipa: "/ˈhændoʊvər/", cn: "交接", phonics: "hand 读 /hænd/，over 读 /oʊvər/" }] },
    ],
    thinking: "MOP完成的标志：\n① 所有步骤已执行（All steps performed）\n② 所有步骤已确认（All steps verified）\n③ 所有时间已记录（All times recorded）\n④ 所有签字已完成（All signatures collected）\n⑤ 设备状态符合预期（Equipment in expected state）\n⑥ 照片证据已保存（Photo evidence saved）\n全部满足后才能宣布 Complete。",
    pronunciation: "complete 重音在第二音节：/kəmˈpliːt/。\n节奏：Com-PLETE ｜ the M-O-P.",
    quiz: [
      { q: "完成巡检，怎么说？", a: "Complete the inspection." },
      { q: "MOP完成的标志有哪些？", a: "六个标志：① 所有步骤已执行；② 所有步骤已确认；③ 所有时间已记录；④ 所有签字已完成；⑤ 设备状态符合预期；⑥ 照片证据已保存。全部满足后才能宣布 Complete。" },
    ],
  },
  {
    id: 422,
    en: "All MOP steps have been completed successfully.",
    cn: "MOP所有步骤已成功完成。",
    ipa: "/ɔːl ˌɛm oʊ ˈpiː stɛps hæv biːn kəmˈpliː.tɪd səkˈsɛs.fə.li/",
    tags: ["第422句", "MOP执行", "★★★★★"],
    when: "MOP完成后，向团队和管理层通报完成情况。successfully 强调所有步骤都成功执行，没有异常。",
    words: [
      { w: "successfully", ipa: "/səkˈsɛs.fə.li/", pos: "副词", cn: "成功地", memory: "① success = 成功；② -ful = 充满…的；③ -ly = 副词后缀。\nsuccessfully = 成功地（没有异常、没有回退、没有终止）。\nMOP完成时加 successfully，表示操作圆满成功。", phonics: "suc 读 /sək/，cess 读 /sɛs/，ful 读 /fə/，ly 读 /li/，重音在第二音节。", collocations: [["completed successfully", "成功完成"], ["operating successfully", "成功运行"], ["executed successfully", "成功执行"]], examples: [["The MOP was completed successfully.", "MOP已成功完成。"], ["The switching was successful.", "倒闸成功了。"]] },
    ],
    phrases: [
      { p: "have been completed successfully", ipa: "/hæv biːn kəmˈpliː.tɪd səkˈsɛs.fə.li/", cn: "已成功完成", why: "have been completed = 已经被完成（现在完成时被动语态）；successfully = 成功地。完整通报格式。" },
    ],
    grammar: [
      { q: "have been completed 是什么语态？", a: "have been completed = 现在完成时 + 被动语态。\n结构：have/has + been + 过去分词 = 已经被…\n✅ All steps have been completed.（所有步骤已被完成 → 强调结果）\n✅ We completed all steps.（我们完成了所有步骤 → 强调执行者）\n正式通报用被动语态，强调结果而非执行者。" },
    ],
    pattern: "All + 对象 + have been + 过去分词 + successfully",
    patternExamples: [
      { en: "All tests have been completed successfully.", cn: "所有测试已成功完成。", words: [{ w: "tests", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "All inspections have been completed successfully.", cn: "所有巡检已成功完成。", words: [] },
      { en: "All switching operations have been completed successfully.", cn: "所有倒闸操作已成功完成。", words: [{ w: "switching", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "operations", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }] },
    ],
    thinking: "MOP完成通报的标准格式：\n① 结果：All steps completed successfully（所有步骤成功完成）\n② 时间：Completed at [time]（完成时间）\n③ 设备状态：Equipment in expected state（设备状态符合预期）\n④ 后续：No further action required（无需后续操作）或 Continue monitoring（继续监控）",
    pronunciation: "successfully 重音在第二音节：/səkˈsɛs.fə.li/。\n节奏：ALL M-O-P STEPS ｜ have been com-PLE-ted ｜ suc-CESS-ful-ly.",
    quiz: [
      { q: "所有测试已成功完成，怎么说？", a: "All tests have been completed successfully." },
      { q: "have been completed 是什么语态？", a: "现在完成时 + 被动语态。结构：have/has + been + 过去分词。正式通报用被动语态，强调结果（已被完成）而非执行者（谁完成的）。" },
    ],
  },
  {
    id: 423,
    en: "Please file the completed MOP document.",
    cn: "请归档已完成的MOP文件。",
    ipa: "/pliːz faɪl ðə kəmˈpliː.tɪd ˌɛm oʊ ˈpiː ˈdɑːk.jə.mənt/",
    tags: ["第423句", "MOP执行", "★★★★"],
    when: "MOP完成后，需要将文件归档保存。归档包括：MOP原件、签字页、照片、时间记录等所有附件。",
    words: [
      { w: "file", ipa: "/faɪl/", pos: "动词", cn: "归档；存档", memory: "① file 作名词 = 文件/档案；② 作动词 = 归档/存档。\nfile = 将文件放入档案系统保存。\nMOP完成后必须归档，用于日后审计和追溯。", phonics: "f 读 /f/，ile 读 /aɪl/。", collocations: [["file the document", "归档文件"], ["file the report", "归档报告"], ["filing system", "档案系统"]], examples: [["File the completed MOP.", "归档已完成的MOP。"], ["Please file the report.", "请归档报告。"]] },
      { w: "document", ipa: "/ˈdɑːk.jə.mənt/", pos: "名词", cn: "文件；文档", memory: "① docu- = 教导（拉丁语 docere）；② -ment = 名词后缀。\ndocument = 文件/文档（正式记录）。\nMOP document = MOP文件（包含步骤、签字、照片、时间记录等）。", phonics: "doc 读 /dɑːk/，u 读 /jə/，ment 读 /mənt/，重音在第一音节。", collocations: [["MOP document", "MOP文件"], ["official document", "正式文件"], ["document control", "文件管控"]], examples: [["Review the MOP document.", "审核MOP文件。"], ["Sign the document.", "在文件上签字。"]] },
    ],
    phrases: [
      { p: "file the completed MOP document", ipa: "/faɪl ðə kəmˈpliː.tɪd ˌɛm oʊ ˈpiː ˈdɑːk.jə.mənt/", cn: "归档已完成的MOP文件", why: "归档是MOP流程的最后一步。完成的MOP文件必须妥善保存，通常保存至少3-5年。" },
    ],
    grammar: [
      { q: "MOP归档需要包含哪些内容？", a: "MOP归档的完整内容：\n① MOP审批原件（含审批签字）\n② 执行记录（含每步时间和签字）\n③ 照片证据（仪表读数、设备状态等）\n④ 异常记录（如有暂停、回退、终止）\n⑤ 完成确认（最终签字页）\n⑥ 相关工单编号\n所有文件必须完整归档，不得遗漏。" },
    ],
    pattern: "Please file the + 文件类型",
    patternExamples: [
      { en: "Please file the inspection report.", cn: "请归档巡检报告。", words: [{ w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
      { en: "Please file the incident report.", cn: "请归档事件报告。", words: [{ w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
      { en: "Please file the handover record.", cn: "请归档交接记录。", words: [{ w: "handover", ipa: "/ˈhændoʊvər/", cn: "交接", phonics: "hand 读 /hænd/，over 读 /oʊvər/" }] },
    ],
    thinking: "MOP归档的重要性：\n① 法律合规 — 监管机构可能要求查阅操作记录\n② 事故追溯 — 如果后续出现问题，可以回溯操作过程\n③ 经验积累 — 同类操作可以参考历史MOP\n④ 培训素材 — 新人可以学习标准操作流程\n归档保存期限通常为3-5年，关键操作永久保存。",
    pronunciation: "file 的 i 读长音 /aɪ/。\ndocument 重音在第一音节：/ˈdɑːk.jə.mənt/。\n节奏：Please FILE ｜ the com-PLE-ted ｜ M-O-P DOC-u-ment.",
    quiz: [
      { q: "请归档事件报告，怎么说？", a: "Please file the incident report." },
      { q: "MOP归档需要包含哪些内容？", a: "六项内容：① MOP审批原件；② 执行记录（含时间和签字）；③ 照片证据；④ 异常记录（如有）；⑤ 完成确认签字页；⑥ 相关工单编号。所有文件必须完整归档。" },
    ],
  },
  {
    id: 424,
    en: "Please update the logbook with the MOP completion.",
    cn: "请在日志中记录MOP完成情况。",
    ipa: "/pliːz ˈʌp.deɪt ðə ˈlɑːg.bʊk wɪð ðə ˌɛm oʊ ˈpiː kəmˈpliː.ʃən/",
    tags: ["第424句", "MOP执行", "★★★★★"],
    when: "MOP完成并归档后，还需要在交接班日志中记录完成情况，确保下一班了解操作已执行。",
    words: [
      { w: "logbook", ipa: "/ˈlɑːg.bʊk/", pos: "名词", cn: "日志；值班记录本", memory: "① log = 记录/日志；② book = 本子。\nlogbook = 值班日志（记录值班期间所有重要事件）。\n数据中心每班次必须维护logbook，是交接的核心文件。", phonics: "log 读 /lɑːg/，book 读 /bʊk/。", collocations: [["update the logbook", "更新日志"], ["logbook entry", "日志条目"], ["shift logbook", "值班日志"]], examples: [["Update the logbook.", "更新日志。"], ["Write it in the logbook.", "写在日志里。"]] },
      { w: "update", ipa: "/ˈʌp.deɪt/", pos: "动词", cn: "更新", memory: "① up = 向上；② date = 日期。\nupdate = 更新到最新状态。\nupdate the logbook = 在日志中添加最新信息。", phonics: "up 读 /ʌp/，date 读 /deɪt/。", collocations: [["update the logbook", "更新日志"], ["update the status", "更新状态"], ["update the record", "更新记录"]], examples: [["Please update the logbook.", "请更新日志。"], ["Update the alarm status.", "更新告警状态。"]] },
    ],
    phrases: [
      { p: "update the logbook with", ipa: "/ˈʌp.deɪt ðə ˈlɑːg.bʊk wɪð/", cn: "在日志中记录…", why: "update + logbook + with + 内容 = 在日志中记录某事。with 引出记录的具体内容。" },
    ],
    grammar: [
      { q: "with 在这里是什么意思？", a: "with = 用…内容（引出记录的具体内容）。\n✅ Update the logbook with the MOP completion.（在日志中记录MOP完成情况）\n✅ Update the logbook with the alarm details.（在日志中记录告警详情）\nwith 后面接的是要写入日志的具体信息。" },
    ],
    pattern: "Please update the logbook with + 内容",
    patternExamples: [
      { en: "Please update the logbook with the alarm details.", cn: "请在日志中记录告警详情。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Please update the logbook with the maintenance result.", cn: "请在日志中记录维护结果。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "Please update the logbook with the incident report.", cn: "请在日志中记录事件报告。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
    ],
    thinking: "日志记录是交接的核心环节。\nlogbook 记录内容包括：\n① 告警状态变化\n② MOP执行情况\n③ 设备维护进展\n④ 供应商来访\n⑤ 异常事件\n⑥ 交接事项\n下一班接班后第一件事就是读logbook。",
    pronunciation: "logbook 的 o 读 /ɑː/：/ˈlɑːg.bʊk/。\nupdate 重音在第一音节：/ˈʌp.deɪt/。\n节奏：Please UP-date ｜ the LOG-book ｜ with the M-O-P com-PLE-tion.",
    quiz: [
      { q: "请在日志中记录告警详情，怎么说？", a: "Please update the logbook with the alarm details." },
      { q: "日志中应该记录哪些内容？", a: "六类内容：① 告警状态变化；② MOP执行情况；③ 设备维护进展；④ 供应商来访；⑤ 异常事件；⑥ 交接事项。下一班接班后第一件事就是读logbook。" },
    ],
  },
  {
    id: 425,
    en: "Now let's move on to the next MOP.",
    cn: "现在我们开始执行下一个MOP。",
    ipa: "/naʊ lɛts muːv ɑːn tuː ðə nɛkst ˌɛm oʊ ˈpiː/",
    tags: ["第425句", "MOP执行", "★★★★"],
    when: "一个MOP完成并记录后，如果有多个MOP需要执行，转入下一个MOP。move on to 表示顺利过渡到下一个任务。",
    words: [
      { w: "move on to", ipa: "/muːv ɑːn tuː/", pos: "动词短语", cn: "转入；进入下一个", memory: "① move = 移动；② on = 继续；③ to = 到。\nmove on to = 继续前进到 → 转入下一个。\nmove on to 表示当前任务已完成，顺利过渡到下一个任务。", phonics: "move 读 /muːv/，on 读 /ɑːn/，to 读 /tuː/。", collocations: [["move on to", "转入"], ["move to the next", "进入下一个"], ["move forward", "向前推进"]], examples: [["Move on to the next task.", "转入下一个任务。"], ["Let's move on to the EOP.", "我们开始进入EOP。"]] },
    ],
    phrases: [
      { p: "move on to the next", ipa: "/muːv ɑːn tuː ðə nɛkst/", cn: "转入下一个", why: "move on to + the next + 名词 = 转入下一个…。表示当前任务已圆满完成，可以进入下一个。" },
    ],
    grammar: [
      { q: "move on to 和 go to 有什么区别？", a: "move on to = 转入（当前任务完成后自然过渡到下一个）\ngo to = 去到（直接跳转，无过渡感）\n✅ Now let's move on to the next MOP.（转入下一个MOP → 当前已完成，自然过渡）\n✅ Go to the next MOP.（跳到下一个MOP → 可能当前没完成）\nmove on to 暗示当前任务已成功完成。" },
    ],
    pattern: "Now let's move on to the next + 任务",
    patternExamples: [
      { en: "Now let's move on to the next inspection.", cn: "现在我们开始下一次巡检。", words: [] },
      { en: "Now let's move on to the EOP review.", cn: "现在我们开始EOP审查。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
      { en: "Now let's move on to the handover.", cn: "现在我们开始交接。", words: [{ w: "handover", ipa: "/ˈhændoʊvər/", cn: "交接", phonics: "hand 读 /hænd/，over 读 /oʊvər/" }] },
    ],
    thinking: "多个MOP的执行顺序：\n① 按风险等级排序：高风险先执行（因为操作员精力最集中）\n② 按依赖关系排序：有依赖的先执行（例如先倒闸再维护）\n③ 按时间窗口排序：有时间限制的先执行\n每个MOP完成后归档、记录日志，然后 move on to the next。",
    pronunciation: "move 的 o 读长音 /uː/。\nnext 的 e 读短音 /ɛ/。\n节奏：NOW let's MOVE ON ｜ to the NEXT M-O-P.",
    quiz: [
      { q: "现在我们开始EOP审查，怎么说？", a: "Now let's move on to the EOP review." },
      { q: "move on to 和 go to 有什么区别？", a: "move on to = 转入（当前任务完成后自然过渡，暗示已完成）；go to = 去到（直接跳转，无过渡感）。move on to 更专业，暗示当前任务已成功完成。" },
    ],
  },
];

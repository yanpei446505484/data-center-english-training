// EXPORTS: MOCK_SENTENCES_PART27A

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART27A: ISentence[] = [
  // ── 场景001：安防系统 - 系统状态检查 (1721-1730) ──
  {
    id: 1721,
    en: "Please check the security system status.",
    cn: "请检查安防系统状态。",
    ipa: "/pliːz tʃɛk ðə sɪˈkjʊrɪti ˈsɪstəm ˈstætəs/",
    tags: ["第1721句", "安防系统", "★★★★★"],
    when: "安防系统是数据中心物理安全的核心保障，包括门禁、监控、入侵报警等子系统。交接时首先检查安防系统整体运行状态。",
    words: [
      { w: "security system", ipa: "/sɪˈkjʊrɪti ˈsɪstəm/", pos: "名词短语", cn: "安防系统", memory: "security = 安全/安保；system = 系统。\nsecurity system = 安防系统，保护数据中心的物理安全。\n包括门禁、视频监控、入侵报警等多个子系统。", phonics: "se 读 /sɪ/，curity 读 /ˈkjʊrɪti/，system 读 /ˈsɪstəm/。", collocations: [["security system", "安防系统"], ["security check", "安全检查"], ["security guard", "安保人员"]], examples: [["Check the security system.", "检查安防系统。"], ["The security system is online.", "安防系统在线。"]] },
      { w: "status", ipa: "/ˈstætəs/", pos: "名词", cn: "状态", memory: "status = 状态/情况。\n在工程领域，status 指设备当前的工作状况。\n交接时必须确认所有系统的 status。", phonics: "sta 读 /ˈstæ/，tus 读 /təs/，重音在第一音节。", collocations: [["system status", "系统状态"], ["current status", "当前状态"], ["check status", "检查状态"]], examples: [["What is the current status?", "当前状态是什么？"], ["Check the system status.", "检查系统状态。"]] },
    ],
    phrases: [
      { p: "security system status", ipa: "/sɪˈkjʊrɪti ˈsɪstəm ˈstætəs/", cn: "安防系统状态", why: "security system + status = 安防系统状态。交接时必须首先确认安防系统的整体运行状况，确保所有子系统正常工作。" },
    ],
    grammar: [
      { q: "check 和 inspect 有什么区别？", a: "check = 检查/查看（快速确认状态）\ninspect = 检验/检查（详细的物理检查）\n✅ Please check the security system status.（请检查安防系统状态 → 查看监控面板）\n✅ Please inspect the security equipment.（请检查安防设备 → 现场巡检设备）\n交接时用 check，因为是通过安防控制主机远程查看。" },
    ],
    pattern: "Please check the + 系统 + status",
    patternExamples: [
      { en: "Please check the fire protection system status.", cn: "请检查消防系统状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "protection", ipa: "/prəˈtɛkʃən/", cn: "保护", phonics: "pro 读 /prə/，tection 读 /tɛkʃən/" }] },
      { en: "Please check the access control system status.", cn: "请检查门禁系统状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "access", ipa: "/ˈæksɛs/", cn: "门禁", phonics: "ac 读 /æk/，cess 读 /sɛs/" }, { w: "control", ipa: "/kənˈtroʊl/", cn: "控制", phonics: "con 读 /kən/，trol 读 /troʊl/" }] },
      { en: "Please check the HVAC system status.", cn: "请检查暖通系统状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "hvac", ipa: "/ˌeɪtʃˈviːˈeɪˈsiː/", cn: "暖通", phonics: "H-V-A-C 逐字母读" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
    ],
    thinking: "安防系统是数据中心物理安全的第一道防线。交接检查顺序：① 整体状态（本句）→ ② 门禁系统（1723-1724）→ ③ 视频监控（1725-1726）→ ④ 入侵报警（1727-1728）→ ⑤ 门状态（1729-1730）。\n数据中心安防系统必须24小时不间断运行，确保人员和设备安全。",
    pronunciation: "security 的 se 读 /sɪ/，不是 /siː/。\nstatus 的 a 读 /æ/，不是 /eɪ/。",
    quiz: [
      { q: "请检查消防系统状态，怎么说？", a: "Please check the fire protection system status." },
      { q: "数据中心安防系统包括哪些子系统？", a: "数据中心安防系统通常包括：① 门禁系统（Access Control）② 视频监控系统（CCTV）③ 入侵报警系统（Intrusion Alarm）④ 访客管理系统（Visitor Management）⑤ 周界防护系统（Perimeter Protection）。" },
    ],
  },
  {
    id: 1722,
    en: "The security system is operating normally.",
    cn: "安防系统运行正常。",
    ipa: "/ðə sɪˈkjʊrɪti ˈsɪstəm ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1722句", "安防系统状态", "★★★★★"],
    when: "确认安防系统整体运行状态正常。这是交接时最期望得到的汇报结果。",
    words: [
      { w: "security system", ipa: "/sɪˈkjʊrɪti ˈsɪstəm/", pos: "名词短语", cn: "安防系统", memory: "security = 安全/安保；system = 系统。\nsecurity system = 安防系统，保护数据中心的物理安全。\n包括门禁、视频监控、入侵报警等多个子系统。", phonics: "se 读 /sɪ/，curity 读 /ˈkjʊrɪti/，system 读 /ˈsɪstəm/。", collocations: [["security system", "安防系统"], ["security check", "安全检查"], ["security guard", "安保人员"]], examples: [["Check the security system.", "检查安防系统。"], ["The security system is online.", "安防系统在线。"]] },
      { w: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", pos: "动词短语", cn: "运行正常", memory: "operating = 运行中；normally = 正常地。\noperating normally = 正常运行，表示设备在正常参数范围内工作。\n这是交接时最期望的状态汇报。", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/，normally 读 /ˈnɔːrməli/。", collocations: [["operating normally", "正常运行"], ["functioning normally", "正常运作"], ["running normally", "正常运转"]], examples: [["All systems are operating normally.", "所有系统正常运行。"], ["The equipment is operating normally.", "设备运行正常。"]] },
    ],
    phrases: [
      { p: "security system", ipa: "/sɪˈkjʊrɪti ˈsɪstəm/", cn: "安防系统", why: "security + system = 安防系统。这是数据中心物理安全的核心保障系统。" },
      { p: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "运行正常", why: "operating + normally = 正常运行。这是汇报系统状态的标准用语，表明所有子系统都在正常工作。" },
    ],
    grammar: [
      { q: "is operating 和 operates 有什么区别？", a: "is operating = 正在运行（现在进行时，强调当前状态）\noperates = 运行（一般现在时，描述常态）\n✅ The security system is operating normally.（安防系统正在正常运行 → 汇报当前状态）\n✅ The security system operates 24/7.（安防系统24小时运行 → 描述常态）\n交接用进行时，关注'此刻的运行状态'。" },
    ],
    pattern: "系统 + is operating normally",
    patternExamples: [
      { en: "The fire protection system is operating normally.", cn: "消防系统运行正常。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "protection", ipa: "/prəˈtɛkʃən/", cn: "保护", phonics: "pro 读 /prə/，tection 读 /tɛkʃən/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "The HVAC system is operating normally.", cn: "暖通系统运行正常。", words: [{ w: "hvac", ipa: "/ˌeɪtʃˈviːˈeɪˈsiː/", cn: "暖通", phonics: "H-V-A-C 逐字母读" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "The power system is operating normally.", cn: "电力系统运行正常。", words: [{ w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
    ],
    thinking: "汇报安防系统状态的三种结论：\n① Operating normally（正常运行 → 最佳）\n② Has an alarm（有告警 → 需进一步排查）\n③ Has a fault（有故障 → 需维修处理）\n交接时最期望听到'operating normally'。",
    pronunciation: "normally 的 or 读 /ɔːr/，不是 /ɒr/。",
    quiz: [
      { q: "消防系统运行正常，怎么说？", a: "The fire protection system is operating normally." },
    ],
  },
  {
    id: 1723,
    en: "Please check the access control system.",
    cn: "请检查门禁系统。",
    ipa: "/pliːz tʃɛk ðə ˈæksɛs kənˈtroʊl ˈsɪstəm/",
    tags: ["第1723句", "门禁系统", "★★★★★"],
    when: "门禁系统（Access Control System）控制人员进出数据中心各区域，是物理安全的核心。交接时检查门禁系统运行状态。",
    words: [
      { w: "access control", ipa: "/ˈæksɛs kənˈtroʊl/", pos: "名词短语", cn: "门禁", memory: "access = 进入/访问；control = 控制。\naccess control = 门禁/访问控制，控制谁可以进入哪些区域。\n数据中心采用分级门禁管理，不同区域有不同权限。", phonics: "ac 读 /ˈæk/，cess 读 /sɛs/，con 读 /kən/，trol 读 /troʊl/。", collocations: [["access control system", "门禁系统"], ["access card", "门禁卡"], ["access permission", "门禁权限"]], examples: [["Check the access control system.", "检查门禁系统。"], ["Swipe your access card.", "刷门禁卡。"]] },
      { w: "system", ipa: "/ˈsɪstəm/", pos: "名词", cn: "系统", memory: "system = 系统。\nsystem 指由多个组件协同工作的整体。\naccess control system = 门禁系统，由读卡器、控制器、门锁等组成。", phonics: "sys 读 /ˈsɪs/，tem 读 /təm/。", collocations: [["control system", "控制系统"], ["alarm system", "报警系统"], ["monitoring system", "监控系统"]], examples: [["Check the system.", "检查系统。"], ["The system is online.", "系统在线。"]] },
    ],
    phrases: [
      { p: "access control system", ipa: "/ˈæksɛs kənˈtroʊl ˈsɪstəm/", cn: "门禁系统", why: "access control + system = 门禁系统。这是数据中心物理安全的核心，控制人员进出各区域。" },
    ],
    grammar: [
      { q: "access 作为名词和动词有什么不同？", a: "名词 access = 进入权/访问权\n动词 access = 进入/访问\n✅ Check the access control system.（检查门禁系统 → 名词）\n✅ Please access the server room.（请进入服务器机房 → 动词）\naccess control 中的 access 是名词。" },
    ],
    pattern: "Please check the + 设备/系统",
    patternExamples: [
      { en: "Please check the CCTV system.", cn: "请检查视频监控系统。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "cctv", ipa: "/ˌsiːˌsiːˈtiːˈviː/", cn: "监控", phonics: "C-C-T-V 逐字母读" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please check the intrusion alarm system.", cn: "请检查入侵报警系统。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please check the fire alarm system.", cn: "请检查火灾报警系统。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "门禁系统检查要点：① 系统在线状态 ② 读卡器通信状态 ③ 门锁电磁铁状态 ④ 门磁传感器状态 ⑤ 控制器运行状态。\n数据中心通常分为公共区、办公区、机房区三级门禁权限。",
    pronunciation: "access 的 ac 读 /ˈæk/，不是 /əˈkɛs/。",
    quiz: [
      { q: "请检查视频监控系统，怎么说？", a: "Please check the CCTV system." },
    ],
  },
  {
    id: 1724,
    en: "The access control system is operating normally.",
    cn: "门禁系统运行正常。",
    ipa: "/ðə ˈæksɛs kənˈtroʊl ˈsɪstəm ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1724句", "门禁系统状态", "★★★★★"],
    when: "确认门禁系统运行状态正常，所有读卡器、门锁、门磁工作正常。",
    words: [
      { w: "access control system", ipa: "/ˈæksɛs kənˈtroʊl ˈsɪstəm/", pos: "名词短语", cn: "门禁系统", memory: "access = 进入/访问；control = 控制；system = 系统。\naccess control system = 门禁系统，控制人员进出数据中心各区域。\n是物理安全的核心，采用分级权限管理。", phonics: "ac 读 /ˈæk/，cess 读 /sɛs/，con 读 /kən/，trol 读 /troʊl/，system 读 /ˈsɪstəm/。", collocations: [["access control system", "门禁系统"], ["access card", "门禁卡"], ["access permission", "门禁权限"]], examples: [["Check the access control system.", "检查门禁系统。"], ["The access control system is online.", "门禁系统在线。"]] },
      { w: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", pos: "动词短语", cn: "运行正常", memory: "operating = 运行中；normally = 正常地。\noperating normally = 正常运行，表示设备在正常参数范围内工作。\n这是交接时最期望的状态汇报。", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/，normally 读 /ˈnɔːrməli/。", collocations: [["operating normally", "正常运行"], ["functioning normally", "正常运作"], ["running normally", "正常运转"]], examples: [["All systems are operating normally.", "所有系统正常运行。"], ["The equipment is operating normally.", "设备运行正常。"]] },
    ],
    phrases: [
      { p: "access control system", ipa: "/ˈæksɛs kənˈtroʊl ˈsɪstəm/", cn: "门禁系统", why: "access control + system = 门禁系统。这是数据中心物理安全的核心，控制人员进出各区域。" },
      { p: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "运行正常", why: "operating + normally = 正常运行。表明门禁系统所有组件都在正常工作。" },
    ],
    grammar: [
      { q: "is operating 和 operates 有什么区别？", a: "is operating = 正在运行（现在进行时，强调当前状态）\noperates = 运行（一般现在时，描述常态）\n✅ The access control system is operating normally.（门禁系统正在正常运行 → 汇报当前状态）\n✅ The access control system operates 24/7.（门禁系统24小时运行 → 描述常态）\n交接用进行时，关注'此刻的运行状态'。" },
    ],
    pattern: "系统 + is operating normally",
    patternExamples: [
      { en: "The CCTV system is operating normally.", cn: "视频监控系统运行正常。", words: [{ w: "cctv", ipa: "/ˌsiːˌsiːˈtiːˈviː/", cn: "监控", phonics: "C-C-T-V 逐字母读" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "The intrusion alarm system is operating normally.", cn: "入侵报警系统运行正常。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "The fire protection system is operating normally.", cn: "消防系统运行正常。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "protection", ipa: "/prəˈtɛkʃən/", cn: "保护", phonics: "pro 读 /prə/，tection 读 /tɛkʃən/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
    ],
    thinking: "门禁系统正常的标志：① 所有读卡器在线 ② 所有门锁正常工作 ③ 所有门磁状态正常 ④ 控制器无告警 ⑤ 刷卡记录正常上传。",
    pronunciation: "operating 的 op 读 /ɒp/，不是 /oʊp/。",
    quiz: [
      { q: "视频监控系统运行正常，怎么说？", a: "The CCTV system is operating normally." },
    ],
  },
  {
    id: 1725,
    en: "Please check the CCTV system.",
    cn: "请检查视频监控系统。",
    ipa: "/pliːz tʃɛk ðə ˌsiː siː tiː ˈviː ˈsɪstəm/",
    tags: ["第1725句", "视频监控", "★★★★★"],
    when: "CCTV（Closed Circuit Television）是闭路电视监控系统，实时监视数据中心各区域。交接时检查CCTV系统运行状态。",
    words: [
      { w: "CCTV", ipa: "/ˌsiː siː tiː ˈviː/", pos: "名词缩写", cn: "视频监控", memory: "CCTV = Closed Circuit Television\nCCTV = 闭路电视/视频监控，用于实时监视和录像回放。\n数据中心通常部署数十到上百个摄像头，覆盖所有关键区域。", phonics: "CCTV 按字母拼读 C-C-T-V。", collocations: [["CCTV system", "视频监控系统"], ["CCTV camera", "监控摄像头"], ["CCTV recording", "监控录像"]], examples: [["Check the CCTV system.", "检查视频监控系统。"], ["All CCTV cameras are online.", "所有监控摄像头在线。"]] },
      { w: "system", ipa: "/ˈsɪstəm/", pos: "名词", cn: "系统", memory: "system = 系统。\nCCTV system = 视频监控系统，由摄像头、录像机、存储、显示器等组成。\n是安防系统的重要组成部分。", phonics: "sys 读 /ˈsɪs/，tem 读 /təm/。", collocations: [["CCTV system", "视频监控系统"], ["alarm system", "报警系统"], ["monitoring system", "监控系统"]], examples: [["Check the system.", "检查系统。"], ["The system is recording.", "系统在录像。"]] },
    ],
    phrases: [
      { p: "CCTV system", ipa: "/ˌsiː siː tiː ˈviː ˈsɪstəm/", cn: "视频监控系统", why: "CCTV + system = 视频监控系统。CCTV是Closed Circuit Television的缩写。" },
    ],
    grammar: [
      { q: "CCTV的全称是什么？", a: "CCTV = Closed Circuit Television（闭路电视）\n✅ Closed = 闭路的（信号不对外公开）\n✅ Circuit = 电路/回路\n✅ Television = 电视\nCCTV 是安防监控的标准术语，全球通用。" },
    ],
    pattern: "Please check the + 系统名称",
    patternExamples: [
      { en: "Please check the intrusion alarm system.", cn: "请检查入侵报警系统。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please check the access control system.", cn: "请检查门禁系统。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "access", ipa: "/ˈæksɛs/", cn: "门禁", phonics: "ac 读 /æk/，cess 读 /sɛs/" }, { w: "control", ipa: "/kənˈtroʊl/", cn: "控制", phonics: "con 读 /kən/，trol 读 /troʊl/" }] },
      { en: "Please check the fire alarm system.", cn: "请检查火灾报警系统。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "CCTV系统检查要点：① 所有摄像头在线 ② 录像功能正常 ③ 存储容量充足 ④ 画面清晰无遮挡 ⑤ 夜视功能正常。\n数据中心CCTV通常需要保存90天以上的录像。",
    pronunciation: "CCTV 按字母拼读，不要读成单词。",
    quiz: [
      { q: "请检查入侵报警系统，怎么说？", a: "Please check the intrusion alarm system." },
    ],
  },
  {
    id: 1726,
    en: "All CCTV cameras are online.",
    cn: "所有监控摄像头均在线。",
    ipa: "/ɔːl ˌsiː siː tiː ˈviː ˈkæmərəz ɑːr ˈɒnˌlaɪn/",
    tags: ["第1726句", "摄像头状态", "★★★★★"],
    when: "确认所有监控摄像头均在线工作，无离线或故障摄像头。",
    words: [
      { w: "cameras", ipa: "/ˈkæmərəz/", pos: "名词复数", cn: "摄像头", memory: "camera = 摄像头/相机。\ncameras 是复数形式。\nCCTV cameras = 监控摄像头。\n数据中心通常部署大量摄像头实现全覆盖监控。", phonics: "cam 读 /ˈkæm/，era 读 /ərə/，s 读 /z/。", collocations: [["CCTV cameras", "监控摄像头"], ["IP cameras", "网络摄像头"], ["PTZ cameras", "云台摄像头"]], examples: [["All cameras are online.", "所有摄像头在线。"], ["Check the camera status.", "检查摄像头状态。"]] },
      { w: "online", ipa: "/ˈɒnˌlaɪn/", pos: "形容词", cn: "在线", memory: "online = 在线/联网。\n在设备语境中，online 表示设备正常工作并连接到系统。\noffline = 离线/断线，表示设备故障或断开连接。", phonics: "on 读 /ɒn/，line 读 /laɪn/。", collocations: [["online status", "在线状态"], ["go online", "上线"], ["stay online", "保持在线"]], examples: [["The device is online.", "设备在线。"], ["The camera went offline.", "摄像头离线了。"]] },
    ],
    phrases: [
      { p: "are online", ipa: "/ɑːr ˈɒnˌlaɪn/", cn: "在线", why: "are + online = 在线。表示所有摄像头都正常连接到监控系统并工作。" },
    ],
    grammar: [
      { q: "online 和 offline 有什么区别？", a: "online = 在线/联网（设备正常工作）\noffline = 离线/断线（设备故障或断开）\n✅ All cameras are online.（所有摄像头在线 → 正常）\n✅ One camera is offline.（一台摄像头离线 → 需排查）\n交接时最期望听到'all online'。" },
    ],
    pattern: "All + 设备 + are online",
    patternExamples: [
      { en: "All access readers are online.", cn: "所有读卡器在线。", words: [{ w: "access", ipa: "/ˈæksɛs/", cn: "门禁", phonics: "ac 读 /æk/，cess 读 /sɛs/" }] },
      { en: "All sensors are online.", cn: "所有传感器在线。", words: [{ w: "sensors", ipa: "/ˈsɛnsər/", cn: "传感器", phonics: "sens 读 /sɛns/，or 读 /ər/" }] },
      { en: "All controllers are online.", cn: "所有控制器在线。", words: [] },
    ],
    thinking: "摄像头离线是常见告警，可能原因：① 网络故障 ② 电源故障 ③ 设备硬件故障 ④ 线路损坏。\n交接时如果发现摄像头离线，需要记录并跟进维修。",
    pronunciation: "cameras 的 s 读 /z/，不是 /s/。",
    quiz: [
      { q: "所有读卡器在线，怎么说？", a: "All access readers are online." },
    ],
  },
  {
    id: 1727,
    en: "Please check the intrusion alarm system.",
    cn: "请检查入侵报警系统。",
    ipa: "/pliːz tʃɛk ðə ɪnˈtruːʒən əˈlɑːrm ˈsɪstəm/",
    tags: ["第1727句", "入侵报警", "★★★★★"],
    when: "入侵报警系统（Intrusion Alarm System）检测非法入侵行为，如门窗被强行打开、红外探测到异常移动等。交接时检查入侵报警系统。",
    words: [
      { w: "intrusion", ipa: "/ɪnˈtruːʒən/", pos: "名词", cn: "入侵", memory: "intrusion = 入侵/侵入。\nintrude = 入侵（动词）；intrusion = 入侵（名词）。\nintrusion alarm = 入侵报警，检测非法进入行为。", phonics: "in 读 /ɪn/，tru 读 /ˈtruː/，sion 读 /ʒən/。", collocations: [["intrusion alarm", "入侵报警"], ["intrusion detection", "入侵检测"], ["intrusion attempt", "入侵企图"]], examples: [["Check the intrusion alarm.", "检查入侵报警。"], ["No intrusion detected.", "未检测到入侵。"]] },
      { w: "alarm system", ipa: "/əˈlɑːrm ˈsɪstəm/", pos: "名词短语", cn: "报警系统", memory: "alarm = 报警/警报；system = 系统。\nalarm system = 报警系统，用于检测和发出警报。\n入侵报警系统通过红外、门磁等传感器检测异常。", phonics: "a 读 /ə/，larm 读 /ˈlɑːrm/，system 读 /ˈsɪstəm/。", collocations: [["alarm system", "报警系统"], ["fire alarm", "火灾报警"], ["alarm sensor", "报警传感器"]], examples: [["Check the alarm system.", "检查报警系统。"], ["The alarm system is armed.", "报警系统已布防。"]] },
    ],
    phrases: [
      { p: "intrusion alarm system", ipa: "/ɪnˈtruːʒən əˈlɑːrm ˈsɪstəm/", cn: "入侵报警系统", why: "intrusion + alarm + system = 入侵报警系统。这是检测非法入侵的安全系统。" },
      { p: "alarm system", ipa: "/əˈlɑːrm ˈsɪstəm/", cn: "报警系统", why: "alarm + system = 报警系统。入侵报警是安防系统的重要组成部分。" },
    ],
    grammar: [
      { q: "intrusion 和 access 有什么区别？", a: "intrusion = 入侵（非法进入）\naccess = 进入/访问（合法进入）\n✅ Intrusion alarm detected unauthorized entry.（入侵报警检测到未授权进入）\n✅ Access granted for authorized personnel.（授权人员进入已批准）\nintrusion 强调'非法'，access 强调'合法'。" },
    ],
    pattern: "Please check the + 系统名称",
    patternExamples: [
      { en: "Please check the fire alarm system.", cn: "请检查火灾报警系统。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Please check the CCTV system.", cn: "请检查视频监控系统。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "cctv", ipa: "/ˌsiːˌsiːˈtiːˈviː/", cn: "监控", phonics: "C-C-T-V 逐字母读" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please check the access control system.", cn: "请检查门禁系统。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "access", ipa: "/ˈæksɛs/", cn: "门禁", phonics: "ac 读 /æk/，cess 读 /sɛs/" }, { w: "control", ipa: "/kənˈtroʊl/", cn: "控制", phonics: "con 读 /kən/，trol 读 /troʊl/" }] },
    ],
    thinking: "入侵报警系统检查要点：① 红外探测器状态 ② 门窗磁传感器状态 ③ 报警主机状态 ④ 布防/撤防状态 ⑤ 历史告警记录。\n数据中心通常24小时布防，任何非法进入都会触发报警。",
    pronunciation: "intrusion 的 tru 读 /ˈtruː/，重音在 tru 上。",
    quiz: [
      { q: "请检查火灾报警系统，怎么说？", a: "Please check the fire alarm system." },
    ],
  },
  {
    id: 1728,
    en: "The intrusion alarm system is operating normally.",
    cn: "入侵报警系统运行正常。",
    ipa: "/ðə ɪnˈtruːʒən əˈlɑːrm ˈsɪstəm ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1728句", "入侵报警状态", "★★★★★"],
    when: "确认入侵报警系统运行状态正常，所有探测器和传感器工作正常。",
    words: [
      { w: "intrusion alarm", ipa: "/ɪnˈtruːʒən əˈlɑːrm/", pos: "名词短语", cn: "入侵报警", memory: "intrusion = 入侵；alarm = 报警。\nintrusion alarm = 入侵报警，检测非法进入行为并触发警报。\n数据中心通常24小时布防，任何非法进入都会触发报警。", phonics: "in 读 /ɪn/，tru 读 /ˈtruː/，sion 读 /ʒən/，a 读 /ə/，larm 读 /ˈlɑːrm/。", collocations: [["intrusion alarm", "入侵报警"], ["intrusion detection", "入侵检测"], ["intrusion attempt", "入侵企图"]], examples: [["Check the intrusion alarm.", "检查入侵报警。"], ["No intrusion detected.", "未检测到入侵。"]] },
      { w: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", pos: "动词短语", cn: "运行正常", memory: "operating = 运行中；normally = 正常地。\noperating normally = 正常运行，表示设备在正常参数范围内工作。\n这是交接时最期望的状态汇报。", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/，normally 读 /ˈnɔːrməli/。", collocations: [["operating normally", "正常运行"], ["functioning normally", "正常运作"], ["running normally", "正常运转"]], examples: [["All systems are operating normally.", "所有系统正常运行。"], ["The equipment is operating normally.", "设备运行正常。"]] },
    ],
    phrases: [
      { p: "intrusion alarm system", ipa: "/ɪnˈtruːʒən əˈlɑːrm ˈsɪstəm/", cn: "入侵报警系统", why: "intrusion + alarm + system = 入侵报警系统。这是检测非法入侵的安全系统。" },
      { p: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "运行正常", why: "operating + normally = 正常运行。表明入侵报警系统所有组件都在正常工作。" },
    ],
    grammar: [
      { q: "is operating 和 operates 有什么区别？", a: "is operating = 正在运行（现在进行时，强调当前状态）\noperates = 运行（一般现在时，描述常态）\n✅ The intrusion alarm system is operating normally.（入侵报警系统正在正常运行 → 汇报当前状态）\n✅ The intrusion alarm system operates 24/7.（入侵报警系统24小时运行 → 描述常态）\n交接用进行时，关注'此刻的运行状态'。" },
    ],
    pattern: "系统 + is operating normally",
    patternExamples: [
      { en: "The CCTV system is operating normally.", cn: "视频监控系统运行正常。", words: [{ w: "cctv", ipa: "/ˌsiːˌsiːˈtiːˈviː/", cn: "监控", phonics: "C-C-T-V 逐字母读" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "The access control system is operating normally.", cn: "门禁系统运行正常。", words: [{ w: "access", ipa: "/ˈæksɛs/", cn: "门禁", phonics: "ac 读 /æk/，cess 读 /sɛs/" }, { w: "control", ipa: "/kənˈtroʊl/", cn: "控制", phonics: "con 读 /kən/，trol 读 /troʊl/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "The fire protection system is operating normally.", cn: "消防系统运行正常。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "protection", ipa: "/prəˈtɛkʃən/", cn: "保护", phonics: "pro 读 /prə/，tection 读 /tɛkʃən/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
    ],
    thinking: "入侵报警系统正常的标志：① 所有探测器在线 ② 无异常告警 ③ 布防状态正确 ④ 通信链路正常 ⑤ 电池电量充足。",
    pronunciation: "intrusion 的 tru 读 /ˈtruː/，重音在 tru 上。",
    quiz: [
      { q: "门禁系统运行正常，怎么说？", a: "The access control system is operating normally." },
    ],
  },
  {
    id: 1729,
    en: "Please check the door status.",
    cn: "请检查门状态。",
    ipa: "/pliːz tʃɛk ðə dɔːr ˈstætəs/",
    tags: ["第1729句", "门状态", "★★★★★"],
    when: "检查数据中心所有门的开关状态，确保所有门处于安全关闭状态。",
    words: [
      { w: "door status", ipa: "/dɔːr ˈstætəs/", pos: "名词短语", cn: "门状态", memory: "door = 门；status = 状态。\ndoor status = 门状态，指门是开启还是关闭。\n数据中心要求所有门保持关闭状态，防止未授权进入。", phonics: "door 读 /dɔːr/，status 读 /ˈstætəs/。", collocations: [["door status", "门状态"], ["door sensor", "门磁传感器"], ["door lock", "门锁"]], examples: [["Check the door status.", "检查门状态。"], ["The door is closed.", "门已关闭。"]] },
      { w: "check", ipa: "/tʃɛk/", pos: "动词", cn: "检查/查看", memory: "check = 检查/查看（快速确认状态）。\n在交接场景中，check 是最常用的动作动词。\ncheck the door status = 检查门状态。", phonics: "ch 读 /tʃ/，eck 读 /ɛk/。", collocations: [["check status", "检查状态"], ["check equipment", "检查设备"], ["check system", "检查系统"]], examples: [["Please check the door.", "请检查门。"], ["Check the alarm.", "检查告警。"]] },
    ],
    phrases: [
      { p: "door status", ipa: "/dɔːr ˈstætəs/", cn: "门状态", why: "door + status = 门状态。交接时需要确认所有门是否处于安全关闭状态。" },
    ],
    grammar: [
      { q: "door status 和 door state 有什么区别？", a: "status = 状态（偏向工作状况/运行状态）\nstate = 状态（偏向物理状态/条件）\n✅ Check the door status.（检查门状态 → 关注是否正常工作）\n✅ The door is in a closed state.（门处于关闭状态 → 描述物理状态）\n工程领域更常用 status。" },
    ],
    pattern: "Please check the + 设备/参数",
    patternExamples: [
      { en: "Please check the camera status.", cn: "请检查摄像头状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Please check the sensor status.", cn: "请检查传感器状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "sensor", ipa: "/ˈsɛnsər/", cn: "传感器", phonics: "sens 读 /sɛns/，or 读 /ər/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Please check the alarm status.", cn: "请检查告警状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
    ],
    thinking: "门状态检查要点：① 所有门是否关闭 ② 门磁传感器是否正常 ③ 是否有门长时间未关闭 ④ 是否有异常开门记录。\n数据中心要求'门随人走'，人员离开后门必须自动关闭。",
    pronunciation: "door 的 oo 读 /ɔː/，不是 /ʊ/。",
    quiz: [
      { q: "请检查摄像头状态，怎么说？", a: "Please check the camera status." },
    ],
  },
  {
    id: 1730,
    en: "All doors are closed and secure.",
    cn: "所有门均已关闭并处于安全状态。",
    ipa: "/ɔːl dɔːrz ɑːr kloʊzd ænd sɪˈkjʊr/",
    tags: ["第1730句", "门状态汇报", "★★★★★"],
    when: "确认所有门均已关闭并锁好，处于安全状态。这是交接时最期望的门状态汇报。",
    words: [
      { w: "closed", ipa: "/kloʊzd/", pos: "形容词", cn: "关闭的", memory: "closed = 关闭的（close的过去分词作形容词）。\nclose = 关闭（动词）；closed = 已关闭（状态）。\n所有门保持 closed 是数据中心安全的基本要求。", phonics: "clos 读 /kloʊz/，ed 读 /d/。", collocations: [["door closed", "门已关闭"], ["keep closed", "保持关闭"], ["automatically closed", "自动关闭"]], examples: [["The door is closed.", "门已关闭。"], ["Keep the door closed.", "保持门关闭。"]] },
      { w: "secure", ipa: "/sɪˈkjʊr/", pos: "形容词", cn: "安全的", memory: "secure = 安全的/牢固的。\nsecure 强调'安全且受到保护'。\n在门禁语境中，secure 表示门已锁好，无法被未授权人员打开。", phonics: "se 读 /sɪ/，cure 读 /ˈkjʊr/。", collocations: [["secure area", "安全区域"], ["secure access", "安全进入"], ["secure the door", "锁好门"]], examples: [["The area is secure.", "该区域安全。"], ["Please secure the door.", "请锁好门。"]] },
    ],
    phrases: [
      { p: "closed and secure", ipa: "/kloʊzd ænd sɪˈkjʊr/", cn: "关闭并安全", why: "closed + and + secure = 关闭并安全。表示门不仅关闭，而且已锁好，处于安全受控状态。" },
    ],
    grammar: [
      { q: "closed 和 locked 有什么区别？", a: "closed = 关闭（门关上，但不一定锁）\nlocked = 锁定（门上锁，无法打开）\n✅ The door is closed.（门已关闭 → 只是关上）\n✅ The door is locked.（门已锁定 → 关上且上锁）\nsecure 更接近 locked，强调'安全且无法被未授权打开'。" },
    ],
    pattern: "All + 设备/部件 + are + 状态描述",
    patternExamples: [
      { en: "All cameras are online and recording.", cn: "所有摄像头在线并录像。", words: [] },
      { en: "All sensors are active and calibrated.", cn: "所有传感器激活并校准。", words: [{ w: "sensors", ipa: "/ˈsɛnsər/", cn: "传感器", phonics: "sens 读 /sɛns/，or 读 /ər/" }, { w: "active", ipa: "/ˈæktɪv/", cn: "活动", phonics: "act 读 /ækt/，ive 读 /ɪv/" }] },
      { en: "All systems are operational and monitored.", cn: "所有系统运行并受监控。", words: [{ w: "systems", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "monitored", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }] },
    ],
    thinking: "门状态汇报的三种情况：\n① All doors closed and secure（全部关闭安全 → 最佳）\n② One door is open（一门开启 → 需确认是否有人在工作）\n③ One door has been open for 5 minutes（一门开启5分钟 → 需立即检查）\n交接时最期望听到'all closed and secure'。",
    pronunciation: "secure 的 se 读 /sɪ/，不是 /siː/。",
    quiz: [
      { q: "所有摄像头在线并录像，怎么说？", a: "All cameras are online and recording." },
    ],
  },

  // ── 场景001：安防系统 - 门禁管理 (1731-1740) ──
  {
    id: 1731,
    en: "Please scan your access card.",
    cn: "请刷门禁卡。",
    ipa: "/pliːz skæn jɔːr ˈæksɛs kɑːrd/",
    tags: ["第1731句", "门禁操作", "★★★★★"],
    when: "提示人员刷门禁卡进入。scan 表示将卡片靠近读卡器进行识别。",
    words: [
      { w: "scan", ipa: "/skæn/", pos: "动词", cn: "扫描/刷（卡）", memory: "scan = 扫描/刷。\n在门禁语境中，scan your card = 刷卡。\nscan 强调'读取卡片信息'的动作。", phonics: "scan 读 /skæn/，a 读 /æ/。", collocations: [["scan card", "刷卡"], ["scan badge", "刷证件"], ["scan fingerprint", "扫描指纹"]], examples: [["Please scan your card.", "请刷卡。"], ["Scan your badge to enter.", "刷证件进入。"]] },
      { w: "access card", ipa: "/ˈæksɛs kɑːrd/", pos: "名词短语", cn: "门禁卡", memory: "access = 进入/访问；card = 卡片。\naccess card = 门禁卡，用于身份验证和门禁授权。\n数据中心员工必须随身携带门禁卡。", phonics: "ac 读 /ˈæk/，cess 读 /sɛs/，card 读 /kɑːrd/。", collocations: [["access card", "门禁卡"], ["swipe card", "刷卡"], ["lost card", "遗失的卡"]], examples: [["Show your access card.", "出示门禁卡。"], ["I lost my access card.", "我遗失了门禁卡。"]] },
    ],
    phrases: [
      { p: "scan your access card", ipa: "/skæn jɔːr ˈæksɛs kɑːrd/", cn: "刷门禁卡", why: "scan + your + access card = 刷门禁卡。这是进入数据中心时的标准操作提示。" },
    ],
    grammar: [
      { q: "scan 和 swipe 有什么区别？", a: "scan = 扫描（非接触式，靠近读卡器）\nswipe = 刷（接触式，划过读卡器）\n✅ Please scan your card.（请刷卡 → 非接触式RFID卡）\n✅ Please swipe your card.（请刷卡 → 磁条卡需要划过）\n现代门禁多用非接触式，用 scan 更准确。" },
    ],
    pattern: "Please scan your + 证件/卡片",
    patternExamples: [
      { en: "Please scan your badge.", cn: "请刷证件。", words: [] },
      { en: "Please scan your ID card.", cn: "请刷身份证。", words: [] },
      { en: "Please scan your visitor pass.", cn: "请刷访客证。", words: [] },
    ],
    thinking: "门禁操作基本流程：① 靠近读卡器 ② 刷卡/扫脸 ③ 等待授权 ④ 门开进入 ⑤ 门自动关闭。\n如果刷卡后没有反应，可能需要重新刷卡或联系安保。",
    pronunciation: "scan 的 a 读 /æ/，不是 /ɑː/。",
    quiz: [
      { q: "请刷证件，怎么说？", a: "Please scan your badge." },
    ],
  },
  {
    id: 1732,
    en: "Please swipe your access card again.",
    cn: "请重新刷一次门禁卡。",
    ipa: "/pliːz swaɪp jɔːr ˈæksɛs kɑːrd əˈɡɛn/",
    tags: ["第1732句", "重新刷卡", "★★★★★"],
    when: "第一次刷卡未成功时，提示人员重新刷卡。可能是刷卡速度太快或卡片位置不对。",
    words: [
      { w: "swipe", ipa: "/swaɪp/", pos: "动词", cn: "刷（卡）/滑动", memory: "swipe = 刷/滑动。\nswipe your card = 刷卡（划过读卡器）。\nswipe 也可以指在触摸屏上滑动。", phonics: "swipe 读 /swaɪp/，i 读 /aɪ/。", collocations: [["swipe card", "刷卡"], ["swipe left", "向左滑"], ["swipe right", "向右滑"]], examples: [["Swipe your card here.", "在这里刷卡。"], ["Swipe to unlock.", "滑动解锁。"]] },
      { w: "again", ipa: "/əˈɡɛn/", pos: "副词", cn: "再次", memory: "again = 再次/重新。\nagain 表示重复之前的动作。\nswipe again = 重新刷一次。", phonics: "a 读 /ə/，gain 读 /ɡɛn/。", collocations: [["try again", "重试"], ["scan again", "重新扫描"], ["read again", "重新读取"]], examples: [["Please try again.", "请重试。"], ["Swipe again.", "重新刷。"]] },
    ],
    phrases: [
      { p: "swipe again", ipa: "/swaɪp əˈɡɛn/", cn: "重新刷卡", why: "swipe + again = 重新刷卡。当第一次刷卡未成功时的提示语。" },
    ],
    grammar: [
      { q: "again 放在句子的什么位置？", a: "again 通常放在句末或动词后。\n✅ Please swipe your card again.（请重新刷卡 → 句末）\n✅ Please swipe again.（请重新刷 → 动词后）\n✅ Again, please swipe your card.（再次，请刷卡 → 句首强调）\n最常用的是放在句末。" },
    ],
    pattern: "Please + 动词 + again",
    patternExamples: [
      { en: "Please try again.", cn: "请重试。", words: [] },
      { en: "Please scan again.", cn: "请重新扫描。", words: [] },
      { en: "Please verify again.", cn: "请重新验证。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
    ],
    thinking: "刷卡失败的常见原因：① 刷卡速度太快 ② 卡片位置不对 ③ 卡片消磁 ④ 读卡器故障 ⑤ 权限问题。\n如果多次刷卡仍失败，需要联系安保或更换卡片。",
    pronunciation: "swipe 的 i 读 /aɪ/，不是 /ɪ/。",
    quiz: [
      { q: "请重试，怎么说？", a: "Please try again." },
    ],
  },
  {
    id: 1733,
    en: "Access has been granted.",
    cn: "门禁已授权。",
    ipa: "/ˈæksɛs hæz biːn ˈɡræntɪd/",
    tags: ["第1733句", "门禁授权", "★★★★★"],
    when: "刷卡成功后，系统提示门禁已授权，可以进入。这是门禁系统的标准提示音。",
    words: [
      { w: "access", ipa: "/ˈæksɛs/", pos: "名词", cn: "进入/访问", memory: "access = 进入/访问。\n在门禁语境中，access 指'进入权限'。\nAccess granted = 进入权限已授权。", phonics: "ac 读 /ˈæk/，cess 读 /sɛs/。", collocations: [["access granted", "门禁已授权"], ["access denied", "门禁被拒绝"], ["access control", "门禁控制"]], examples: [["Access granted.", "门禁已授权。"], ["No access.", "无权限。"]] },
      { w: "granted", ipa: "/ˈɡræntɪd/", pos: "动词过去分词", cn: "已授权/已批准", memory: "grant = 授予/批准。\ngranted = 已授权（过去分词）。\nAccess granted = 门禁已授权，可以进入。\nAccess denied = 门禁被拒绝，无法进入。", phonics: "grant 读 /ɡrænt/，ed 读 /ɪd/。", collocations: [["access granted", "门禁已授权"], ["permission granted", "权限已批准"], ["request granted", "请求已批准"]], examples: [["Access granted.", "门禁已授权。"], ["Permission granted.", "权限已批准。"]] },
    ],
    phrases: [
      { p: "has been granted", ipa: "/hæz biːn ˈɡræntɪd/", cn: "已授权", why: "has been + granted = 已授权（现在完成时被动语态）。表示授权动作已完成。" },
    ],
    grammar: [
      { q: "has been granted 是什么时态？", a: "has been granted = 现在完成时被动语态\n✅ has been = 现在完成时的被动结构\n✅ granted = grant 的过去分词\n✅ Access has been granted. = 门禁已经被授权。\n强调'授权'这个动作已经完成。" },
    ],
    pattern: "名词 + has been + 过去分词",
    patternExamples: [
      { en: "Permission has been granted.", cn: "权限已批准。", words: [] },
      { en: "Request has been approved.", cn: "请求已批准。", words: [] },
      { en: "Card has been activated.", cn: "卡片已激活。", words: [] },
    ],
    thinking: "门禁授权成功后：① 门锁释放 ② 可以推门进入 ③ 门会自动关闭 ④ 进入后需要再次刷卡才能从里面出来。\n授权记录会保存在系统中，用于安全审计。",
    pronunciation: "granted 的 a 读 /æ/，不是 /ɑː/。",
    quiz: [
      { q: "权限已批准，怎么说？", a: "Permission has been granted." },
    ],
  },
  {
    id: 1734,
    en: "Access has been denied.",
    cn: "门禁被拒绝。",
    ipa: "/ˈæksɛs hæz biːn dɪˈnaɪd/",
    tags: ["第1734句", "门禁拒绝", "★★★★★"],
    when: "刷卡后系统拒绝授权，无法进入。可能原因包括权限不足、卡片过期、区域限制等。",
    words: [
      { w: "access", ipa: "/ˈæksɛs/", pos: "名词", cn: "进入/访问", memory: "access = 进入/访问。\n在门禁语境中，access 指'进入权限'。\nAccess denied = 进入权限被拒绝。", phonics: "ac 读 /ˈæk/，cess 读 /sɛs/。", collocations: [["access granted", "门禁已授权"], ["access denied", "门禁被拒绝"], ["access control", "门禁控制"]], examples: [["Access denied.", "门禁被拒绝。"], ["No access.", "无权限。"]] },
      { w: "denied", ipa: "/dɪˈnaɪd/", pos: "动词过去分词", cn: "被拒绝", memory: "deny = 拒绝/否认。\ndenied = 被拒绝（过去分词）。\nAccess denied = 门禁被拒绝，无法进入。\n这是与 Access granted 相反的状态。", phonics: "de 读 /dɪ/，nied 读 /ˈnaɪd/。", collocations: [["access denied", "门禁被拒绝"], ["request denied", "请求被拒绝"], ["permission denied", "权限被拒绝"]], examples: [["Access denied.", "门禁被拒绝。"], ["Permission denied.", "权限被拒绝。"]] },
    ],
    phrases: [
      { p: "has been denied", ipa: "/hæz biːn dɪˈnaɪd/", cn: "被拒绝", why: "has been + denied = 被拒绝（现在完成时被动语态）。表示拒绝动作已完成。" },
    ],
    grammar: [
      { q: "granted 和 denied 是什么关系？", a: "granted = 已授权/已批准（反义词：denied）\ndenied = 被拒绝（反义词：granted）\n✅ Access granted.（门禁已授权 → 可以进入）\n✅ Access denied.（门禁被拒绝 → 无法进入）\n这是门禁系统的两种相反结果。" },
    ],
    pattern: "名词 + has been + 过去分词",
    patternExamples: [
      { en: "Request has been denied.", cn: "请求被拒绝。", words: [] },
      { en: "Permission has been revoked.", cn: "权限已撤销。", words: [] },
      { en: "Card has been deactivated.", cn: "卡片已停用。", words: [] },
    ],
    thinking: "门禁被拒绝的常见原因：① 权限不足（没有该区域的进入权限）② 卡片过期 ③ 时段限制（非工作时间）④ 卡片被挂失 ⑤ 系统故障。\n被拒绝后需要联系安保或管理员确认原因。",
    pronunciation: "denied 的 ie 读 /aɪ/，不是 /iː/。",
    quiz: [
      { q: "请求被拒绝，怎么说？", a: "Request has been denied." },
    ],
  },
  {
    id: 1735,
    en: "Please verify your identity.",
    cn: "请确认您的身份。",
    ipa: "/pliːz ˈvɛrɪfaɪ jɔːr aɪˈdɛntɪti/",
    tags: ["第1735句", "身份验证", "★★★★★"],
    when: "要求人员进行身份验证，可能是刷卡后需要二次验证（如输入密码、指纹、人脸识别）。",
    words: [
      { w: "verify", ipa: "/ˈvɛrɪfaɪ/", pos: "动词", cn: "验证/核实", memory: "verify = 验证/核实。\nverify 强调'确认某事是否真实或正确'。\nverify your identity = 验证你的身份。", phonics: "ver 读 /ˈvɛr/，ify 读 /ɪfaɪ/。", collocations: [["verify identity", "验证身份"], ["verify information", "核实信息"], ["verify access", "验证权限"]], examples: [["Please verify your identity.", "请验证身份。"], ["Verify the information.", "核实信息。"]] },
      { w: "identity", ipa: "/aɪˈdɛntɪti/", pos: "名词", cn: "身份", memory: "identity = 身份。\nidentity 指'一个人是谁'的信息。\nidentity verification = 身份验证。\nidentity card = 身份证。", phonics: "i 读 /aɪ/，den 读 /ˈdɛn/，tity 读 /tɪti/。", collocations: [["identity verification", "身份验证"], ["identity card", "身份证"], ["identity theft", "身份盗用"]], examples: [["Verify your identity.", "验证你的身份。"], ["Show your identity card.", "出示身份证。"]] },
    ],
    phrases: [
      { p: "verify your identity", ipa: "/ˈvɛrɪfaɪ jɔːr aɪˈdɛntɪti/", cn: "验证身份", why: "verify + your + identity = 验证身份。这是安全系统中的标准提示语。" },
    ],
    grammar: [
      { q: "verify 和 confirm 有什么区别？", a: "verify = 验证（检查是否真实/正确）\nconfirm = 确认（确认某事已发生/已完成）\n✅ Please verify your identity.（请验证身份 → 检查你是否是本人）\n✅ Please confirm the alarm.（请确认告警 → 确认告警已收到）\nverify 更强调'核实真伪'，confirm 更强调'确认事实'。" },
    ],
    pattern: "Please verify + 名词",
    patternExamples: [
      { en: "Please verify your identity.", cn: "请验证身份。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
      { en: "Please verify the information.", cn: "请核实信息。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
      { en: "Please verify the alarm.", cn: "请确认告警。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "身份验证方式：① 门禁卡 ② 密码/PIN ③ 指纹识别 ④ 人脸识别 ⑤ 虹膜识别。\n数据中心通常采用双因素认证（卡+密码 或 卡+生物识别）。",
    pronunciation: "verify 的 ver 读 /ˈvɛr/，不是 /vɪr/。",
    quiz: [
      { q: "请核实信息，怎么说？", a: "Please verify the information." },
    ],
  },
  {
    id: 1736,
    en: "Your access card has expired.",
    cn: "您的门禁卡已过期。",
    ipa: "/jɔːr ˈæksɛs kɑːrd hæz ɪkˈspaɪərd/",
    tags: ["第1736句", "卡片过期", "★★★★★"],
    when: "系统提示门禁卡已过期，需要续期或更换。临时访客卡通常有有效期限制。",
    words: [
      { w: "access card", ipa: "/ˈæksɛs kɑːrd/", pos: "名词短语", cn: "门禁卡", memory: "access = 进入/访问；card = 卡片。\naccess card = 门禁卡，用于身份验证和门禁授权。\n临时访客卡通常有有效期限制。", phonics: "ac 读 /ˈæk/，cess 读 /sɛs/，card 读 /kɑːrd/。", collocations: [["access card", "门禁卡"], ["swipe card", "刷卡"], ["lost card", "遗失的卡"]], examples: [["Show your access card.", "出示门禁卡。"], ["I lost my access card.", "我遗失了门禁卡。"]] },
      { w: "expired", ipa: "/ɪkˈspaɪərd/", pos: "形容词", cn: "已过期的", memory: "expire = 过期/到期。\nexpired = 已过期的（过去分词作形容词）。\naccess card expired = 门禁卡已过期。\n临时卡、访客卡通常有有效期。", phonics: "ex 读 /ɪkˈs/，pire 读 /paɪərd/。", collocations: [["card expired", "卡片过期"], ["license expired", "执照过期"], ["certificate expired", "证书过期"]], examples: [["Your card has expired.", "你的卡已过期。"], ["The license expired.", "执照已过期。"]] },
    ],
    phrases: [
      { p: "has expired", ipa: "/hæz ɪkˈspaɪərd/", cn: "已过期", why: "has + expired = 已过期（现在完成时）。表示过期状态已经发生。" },
    ],
    grammar: [
      { q: "expired 和 invalid 有什么区别？", a: "expired = 已过期的（曾经有效，现在到期）\ninvalid = 无效的（从未有效或被作废）\n✅ Your card has expired.（你的卡已过期 → 曾经有效，现在到期了）\n✅ Your card is invalid.（你的卡无效 → 可能是假卡或被作废）\nexpired 强调'时间到期'，invalid 强调'不合法'。" },
    ],
    pattern: "名词 + has expired",
    patternExamples: [
      { en: "Your card has expired.", cn: "你的卡已过期。", words: [] },
      { en: "The certificate has expired.", cn: "证书已过期。", words: [] },
      { en: "The license has expired.", cn: "执照已过期。", words: [] },
    ],
    thinking: "卡片过期后的处理：① 联系安保部门续期 ② 提供身份证明 ③ 缴纳续期费用（如有）④ 领取新卡或激活原卡。\n临时访客卡通常在访问结束后自动过期。",
    pronunciation: "expired 的 ex 读 /ɪkˈs/，不是 /ɛks/。",
    quiz: [
      { q: "证书已过期，怎么说？", a: "The certificate has expired." },
    ],
  },
  {
    id: 1737,
    en: "Your access permission has been updated.",
    cn: "您的门禁权限已经更新。",
    ipa: "/jɔːr ˈæksɛs pərˈmɪʃən hæz biːn ˈʌpˌdeɪtɪd/",
    tags: ["第1737句", "权限更新", "★★★★★"],
    when: "通知用户门禁权限已更新，可能是新增区域权限或修改权限级别。",
    words: [
      { w: "permission", ipa: "/pərˈmɪʃən/", pos: "名词", cn: "权限/许可", memory: "permission = 权限/许可。\naccess permission = 门禁权限，决定可以进入哪些区域。\npermission 由 permit（允许）派生而来。", phonics: "per 读 /pər/，mis 读 /ˈmɪ/，sion 读 /ʃən/。", collocations: [["access permission", "门禁权限"], ["get permission", "获得许可"], ["without permission", "未经许可"]], examples: [["Check your permission.", "检查你的权限。"], ["You need permission.", "你需要许可。"]] },
      { w: "updated", ipa: "/ˈʌpˌdeɪtɪd/", pos: "动词过去分词", cn: "已更新", memory: "update = 更新。\nupdated = 已更新（过去分词）。\npermission updated = 权限已更新。\n系统会通知用户权限变更。", phonics: "up 读 /ʌp/，date 读 /ˌdeɪtɪd/。", collocations: [["updated information", "更新的信息"], ["updated version", "更新版本"], ["recently updated", "最近更新"]], examples: [["The system is updated.", "系统已更新。"], ["Permission updated.", "权限已更新。"]] },
    ],
    phrases: [
      { p: "has been updated", ipa: "/hæz biːn ˈʌpˌdeɪtɪd/", cn: "已更新", why: "has been + updated = 已更新（现在完成时被动语态）。表示更新动作已完成。" },
    ],
    grammar: [
      { q: "permission 和 access 有什么区别？", a: "permission = 权限/许可（抽象概念）\naccess = 进入/访问（具体动作）\n✅ Your access permission has been updated.（你的门禁权限已更新 → 权限信息）\n✅ You now have access to the server room.（你现在可以进入服务器机房 → 具体权限）\npermission 是'规则'，access 是'能力'。" },
    ],
    pattern: "名词 + has been updated",
    patternExamples: [
      { en: "Your permission has been updated.", cn: "你的权限已更新。", words: [] },
      { en: "The system has been updated.", cn: "系统已更新。", words: [{ w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "The record has been updated.", cn: "记录已更新。", words: [] },
    ],
    thinking: "权限更新的场景：① 新员工入职 ② 岗位调动 ③ 项目需要临时权限 ④ 权限到期续期 ⑤ 安全审查后调整。\n权限更新后通常会收到系统通知。",
    pronunciation: "permission 的 per 读 /pər/，不是 /pɜːr/。",
    quiz: [
      { q: "系统已更新，怎么说？", a: "The system has been updated." },
    ],
  },
  {
    id: 1738,
    en: "Please activate the new access card.",
    cn: "请启用新的门禁卡。",
    ipa: "/pliːz ˈæktɪveɪt ðə njuː ˈæksɛs kɑːrd/",
    tags: ["第1738句", "卡片启用", "★★★★★"],
    when: "新门禁卡发放后，需要激活才能使用。通常在安保办公室或自助终端进行。",
    words: [
      { w: "activate", ipa: "/ˈæktɪveɪt/", pos: "动词", cn: "启用/激活", memory: "activate = 启用/激活。\nactivate 使某物开始工作或生效。\nactivate a card = 启用卡片。\n反义词：deactivate = 停用。", phonics: "ac 读 /ˈæk/，tive 读 /tɪveɪt/。", collocations: [["activate card", "启用卡片"], ["activate account", "激活账户"], ["activate alarm", "激活报警"]], examples: [["Activate your card.", "启用你的卡片。"], ["Activate the alarm.", "激活报警。"]] },
      { w: "access card", ipa: "/ˈæksɛs kɑːrd/", pos: "名词短语", cn: "门禁卡", memory: "access = 进入/访问；card = 卡片。\naccess card = 门禁卡，用于身份验证和门禁授权。\n数据中心员工必须随身携带门禁卡。", phonics: "ac 读 /ˈæk/，cess 读 /sɛs/，card 读 /kɑːrd/。", collocations: [["access card", "门禁卡"], ["swipe card", "刷卡"], ["lost card", "遗失的卡"]], examples: [["Show your access card.", "出示门禁卡。"], ["I lost my access card.", "我遗失了门禁卡。"]] },
    ],
    phrases: [
      { p: "activate the card", ipa: "/ˈæktɪveɪt ðə kɑːrd/", cn: "启用卡片", why: "activate + the + card = 启用卡片。新卡需要激活后才能使用。" },
      { p: "access card", ipa: "/ˈæksɛs kɑːrd/", cn: "门禁卡", why: "access + card = 门禁卡。这是进入数据中心各区域的必备凭证。" },
    ],
    grammar: [
      { q: "activate 和 enable 有什么区别？", a: "activate = 激活（使开始工作，一次性动作）\nenable = 启用（使能够使用，可以是持续状态）\n✅ Please activate the new card.（请激活新卡 → 一次性激活）\n✅ Enable the access function.（启用门禁功能 → 开启功能）\nactivate 更强调'从无到有'，enable 更强调'允许使用'。" },
    ],
    pattern: "Please activate + 名词",
    patternExamples: [
      { en: "Please activate the card.", cn: "请启用卡片。", words: [] },
      { en: "Please activate the account.", cn: "请激活账户。", words: [] },
      { en: "Please activate the system.", cn: "请启用系统。", words: [{ w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
    ],
    thinking: "新卡启用流程：① 领取新卡 ② 到安保办公室 ③ 身份验证 ④ 系统录入 ⑤ 刷卡测试。\n启用后卡片立即可用，旧卡同时失效。",
    pronunciation: "activate 的 ac 读 /ˈæk/，不是 /əˈk/。",
    quiz: [
      { q: "请激活账户，怎么说？", a: "Please activate the account." },
    ],
  },
  {
    id: 1739,
    en: "Please deactivate the lost access card.",
    cn: "请停用遗失的门禁卡。",
    ipa: "/pliːz diːˈæktɪveɪt ðə lɒst ˈæksɛs kɑːrd/",
    tags: ["第1739句", "卡片停用", "★★★★★"],
    when: "门禁卡遗失后，需要立即停用，防止被他人拾到后非法使用。",
    words: [
      { w: "deactivate", ipa: "/diːˈæktɪveɪt/", pos: "动词", cn: "停用/禁用", memory: "deactivate = 停用/禁用。\nde- = 取消/去除（前缀）；activate = 激活。\ndeactivate = 取消激活 = 停用。\n这是 activate 的反义词。", phonics: "de 读 /diː/，ac 读 /ˈæk/，tivate 读 /tɪveɪt/。", collocations: [["deactivate card", "停用卡片"], ["deactivate account", "停用账户"], ["deactivate alarm", "解除报警"]], examples: [["Deactivate the lost card.", "停用遗失的卡片。"], ["Deactivate the alarm.", "解除报警。"]] },
      { w: "lost", ipa: "/lɒst/", pos: "形容词", cn: "遗失的", memory: "lost = 遗失的/丢失的。\nlost 是 lose（丢失）的过去分词作形容词。\nlost card = 遗失的卡。\nreport lost = 报失。", phonics: "lost 读 /lɒst/，o 读 /ɒ/。", collocations: [["lost card", "遗失的卡"], ["lost property", "失物"], ["report lost", "报失"]], examples: [["I lost my card.", "我丢了卡。"], ["Report the lost card.", "报失卡片。"]] },
    ],
    phrases: [
      { p: "deactivate the lost card", ipa: "/diːˈæktɪveɪt ðə lɒst kɑːrd/", cn: "停用遗失的卡片", why: "deactivate + the + lost + card = 停用遗失的卡片。遗失卡片后必须立即停用。" },
    ],
    grammar: [
      { q: "activate 和 deactivate 是什么关系？", a: "activate = 启用/激活（反义词：deactivate）\ndeactivate = 停用/禁用（反义词：activate）\n✅ Activate the new card.（启用新卡）\n✅ Deactivate the lost card.（停用遗失的卡）\nde- 是表示'取消/去除'的前缀。" },
    ],
    pattern: "Please deactivate + 名词",
    patternExamples: [
      { en: "Please deactivate the card.", cn: "请停用卡片。", words: [] },
      { en: "Please deactivate the account.", cn: "请停用账户。", words: [] },
      { en: "Please deactivate the alarm.", cn: "请解除报警。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "卡片遗失处理流程：① 立即报失 ② 停用遗失卡片 ③ 申请补办新卡 ④ 领取并启用新卡 ⑤ 旧卡自动失效。\n发现卡片遗失后应立即处理，避免安全风险。",
    pronunciation: "deactivate 的 de 读 /diː/，不是 /dɪ/。",
    quiz: [
      { q: "请停用账户，怎么说？", a: "Please deactivate the account." },
    ],
  },
  {
    id: 1740,
    en: "A temporary access card has been issued.",
    cn: "已发放临时门禁卡。",
    ipa: "/ə ˈtɛmpərəri ˈæksɛs kɑːrd hæz biːn ˈɪʃuːd/",
    tags: ["第1740句", "临时卡发放", "★★★★★"],
    when: "为访客或临时工作人员发放临时门禁卡。临时卡通常有使用期限和区域限制。",
    words: [
      { w: "temporary", ipa: "/ˈtɛmpərəri/", pos: "形容词", cn: "临时的", memory: "temporary = 临时的/暂时的。\ntemporary 表示'非永久的，有一定期限的'。\ntemporary card = 临时卡。\n反义词：permanent = 永久的。", phonics: "tem 读 /ˈtɛm/，po 读 /pə/，rary 读 /rəri/。", collocations: [["temporary card", "临时卡"], ["temporary access", "临时权限"], ["temporary staff", "临时员工"]], examples: [["Get a temporary card.", "领取临时卡。"], ["Temporary access only.", "仅临时权限。"]] },
      { w: "issued", ipa: "/ˈɪʃuːd/", pos: "动词过去分词", cn: "已发放/已签发", memory: "issue = 发放/签发。\nissued = 已发放（过去分词）。\ncard issued = 卡片已发放。\nissue 也可以表示'问题'，但在门禁语境中是'发放'。", phonics: "is 读 /ˈɪ/，sued 读 /ʃuːd/。", collocations: [["card issued", "卡片已发放"], ["permit issued", "许可证已签发"], ["badge issued", "证件已发放"]], examples: [["Card has been issued.", "卡片已发放。"], ["Permit issued.", "许可证已签发。"]] },
    ],
    phrases: [
      { p: "has been issued", ipa: "/hæz biːn ˈɪʃuːd/", cn: "已发放", why: "has been + issued = 已发放（现在完成时被动语态）。表示发放动作已完成。" },
    ],
    grammar: [
      { q: "temporary 和 permanent 有什么区别？", a: "temporary = 临时的/暂时的（反义词：permanent）\npermanent = 永久的/长期的（反义词：temporary）\n✅ Temporary access card（临时门禁卡 → 有使用期限）\n✅ Permanent access card（永久门禁卡 → 长期使用）\n访客通常领取 temporary card，员工使用 permanent card。" },
    ],
    pattern: "名词 + has been issued",
    patternExamples: [
      { en: "A temporary card has been issued.", cn: "临时卡已发放。", words: [] },
      { en: "A visitor badge has been issued.", cn: "访客证已发放。", words: [] },
      { en: "A work permit has been issued.", cn: "工作许可证已签发。", words: [] },
    ],
    thinking: "临时卡管理要点：① 登记身份信息 ② 设定有效期 ③ 限定访问区域 ④ 要求全程陪同 ⑤ 离场时归还。\n临时卡到期自动失效，需要续期或归还。",
    pronunciation: "temporary 的 tem 读 /ˈtɛm/，不是 /tɪm/。",
    quiz: [
      { q: "访客证已发放，怎么说？", a: "A visitor badge has been issued." },
    ],
  },
];

// EXPORTS: MOCK_SENTENCES_PART26A

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART26A: ISentence[] = [
  // ── 场景001：消防系统 - 系统状态检查 (1681-1690) ──
  {
    id: 1681,
    en: "Please check the fire protection system status.",
    cn: "请检查消防系统状态。",
    ipa: "/pliːz tʃɛk ðə faɪər prəˈtɛkʃən ˈsɪstəm ˈstætəs/",
    tags: ["第1681句", "消防系统", "★★★★★"],
    when: "消防系统是数据中心安全基础设施的核心，包括火灾探测、报警、灭火三大子系统。交接时首先检查消防系统整体运行状态。",
    words: [
      { w: "fire protection", ipa: "/faɪər prəˈtɛkʃən/", pos: "名词短语", cn: "消防", memory: "fire = 火灾/火；protection = 保护。\nfire protection = 消防，包括火灾探测、报警和灭火。\n数据中心的消防系统必须24小时不间断运行。", phonics: "fire 读 /faɪər/，protection 读 /prəˈtɛkʃən/，重音在 tec 上。", collocations: [["fire protection system", "消防系统"], ["fire protection plan", "消防方案"], ["fire protection equipment", "消防设备"]], examples: [["Check the fire protection system.", "检查消防系统。"], ["The fire protection plan is updated.", "消防方案已更新。"]] },
      { w: "status", ipa: "/ˈstætəs/", pos: "名词", cn: "状态", memory: "status = 状态/情况。\n在工程领域，status 指设备当前的工作状况。\n交接时必须确认所有系统的 status。", phonics: "sta 读 /ˈstæ/，tus 读 /təs/，重音在第一音节。", collocations: [["system status", "系统状态"], ["current status", "当前状态"], ["check status", "检查状态"]], examples: [["What is the current status?", "当前状态是什么？"], ["Check the system status.", "检查系统状态。"]] },
      { w: "check", ipa: "/tʃɛk/", pos: "动词", cn: "检查；查看", memory: "check = 检查/查看（快速确认状态）。\n在交接场景中，check 是最常用的动作动词。\n与 inspect（详细物理检查）不同，check 侧重远程查看。", phonics: "ch 读 /tʃ/，eck 读 /ɛk/。", collocations: [["check status", "检查状态"], ["check equipment", "检查设备"], ["check system", "检查系统"]], examples: [["Please check the system.", "请检查系统。"], ["Check the alarm status.", "检查告警状态。"]] },
    ],
    phrases: [
      { p: "fire protection system status", ipa: "/faɪər prəˈtɛkʃən ˈsɪstəm ˈstætəs/", cn: "消防系统状态", why: "fire protection + system + status = 消防系统状态。交接时必须首先确认消防系统的整体运行状况，确保所有子系统正常工作。" },
      { p: "check the fire protection system", ipa: "/tʃɛk ðə faɪər prəˈtɛkʃən ˈsɪstəm/", cn: "检查消防系统", why: "check + the + fire protection system = 检查消防系统。交接时的标准检查指令。" },
    ],
    grammar: [
      { q: "check 和 inspect 有什么区别？", a: "check = 检查/查看（快速确认状态）\ninspect = 检验/检查（详细的物理检查）\n✅ Please check the fire system status.（请检查消防系统状态 → 查看监控面板）\n✅ Please inspect the fire equipment.（请检查消防设备 → 现场巡检设备）\n交接时用 check，因为是通过消防控制盘远程查看。" },
    ],
    pattern: "Please check the + 系统 + status",
    patternExamples: [
      { en: "Please check the security system status.", cn: "请检查安防系统状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "security", ipa: "/sɪˈkjʊrɪti/", cn: "安防", phonics: "se 读 /sɪ/，curity 读 /kjʊrɪti/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please check the access control system status.", cn: "请检查门禁系统状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "access", ipa: "/ˈæksɛs/", cn: "门禁", phonics: "ac 读 /æk/，cess 读 /sɛs/" }, { w: "control", ipa: "/kənˈtroʊl/", cn: "控制", phonics: "con 读 /kən/，trol 读 /troʊl/" }] },
      { en: "Please check the HVAC system status.", cn: "请检查暖通系统状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "hvac", ipa: "/ˌeɪtʃˈviːˈeɪˈsiː/", cn: "暖通", phonics: "H-V-A-C 逐字母读" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
    ],
    thinking: "消防系统是数据中心安全的最后一道防线。交接检查顺序：① 整体状态（本句）→ ② 火灾报警控制器（1683-1684）→ ③ 烟雾探测器（1685-1686）→ ④ 温度探测器（1687-1688）→ ⑤ 手动报警按钮（1689-1690）。\n数据中心消防系统包括：火灾探测、声光报警、气体灭火、消防水系统等多个子系统。",
    pronunciation: "fire 的 i 读 /aɪ/，不是 /ɪ/。\nprotection 的 pro 读 /prə/，不是 /proʊ/。",
    quiz: [
      { q: "请检查安防系统状态，怎么说？", a: "Please check the security system status." },
      { q: "数据中心消防系统包括哪些子系统？", a: "数据中心消防系统通常包括：① 火灾探测系统（烟雾/温度探测器）② 火灾报警系统（报警控制器/声光报警器）③ 气体灭火系统（清洁气体钢瓶）④ 消防水系统（消防泵/喷淋系统）⑤ 消防广播系统。" },
    ],
  },
  {
    id: 1682,
    en: "The fire protection system is operating normally.",
    cn: "消防系统运行正常。",
    ipa: "/ðə faɪər prəˈtɛkʃən ˈsɪstəm ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1682句", "消防系统状态", "★★★★★"],
    when: "确认消防系统整体运行状态正常。这是交接时最期望得到的汇报结果。",
    words: [
      { w: "fire protection", ipa: "/faɪər prəˈtɛkʃən/", pos: "名词短语", cn: "消防", memory: "fire = 火灾/火；protection = 保护。\nfire protection = 消防，包括火灾探测、报警和灭火。\n数据中心的消防系统必须24小时不间断运行。", phonics: "fire 读 /faɪər/，protection 读 /prəˈtɛkʃən/，重音在 tec 上。", collocations: [["fire protection system", "消防系统"], ["fire protection plan", "消防方案"], ["fire protection equipment", "消防设备"]], examples: [["Check the fire protection system.", "检查消防系统。"], ["The fire protection plan is updated.", "消防方案已更新。"]] },
      { w: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", pos: "动词短语", cn: "运行正常", memory: "operating = 运行中；normally = 正常地。\noperating normally = 正常运行，表示设备在正常参数范围内工作。\n这是交接时最期望的状态汇报。", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/，normally 读 /ˈnɔːrməli/。", collocations: [["operating normally", "正常运行"], ["functioning normally", "正常运作"], ["running normally", "正常运转"]], examples: [["All systems are operating normally.", "所有系统正常运行。"], ["The equipment is operating normally.", "设备运行正常。"]] },
    ],
    phrases: [
      { p: "fire protection system", ipa: "/faɪər prəˈtɛkʃən ˈsɪstəm/", cn: "消防系统", why: "fire protection + system = 消防系统。包括火灾探测、报警和灭火三大子系统。" },
      { p: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "运行正常", why: "operating + normally = 正常运行。这是汇报系统状态的标准用语，表明所有子系统都在正常工作。" },
    ],
    grammar: [
      { q: "is operating 和 operates 有什么区别？", a: "is operating = 正在运行（现在进行时，强调当前状态）\noperates = 运行（一般现在时，描述常态）\n✅ The fire system is operating normally.（消防系统正在正常运行 → 汇报当前状态）\n✅ The fire system operates 24/7.（消防系统24小时运行 → 描述常态）\n交接用进行时，关注'此刻的运行状态'。" },
    ],
    pattern: "系统 + is operating normally",
    patternExamples: [
      { en: "The security system is operating normally.", cn: "安防系统运行正常。", words: [{ w: "security", ipa: "/sɪˈkjʊrɪti/", cn: "安防", phonics: "se 读 /sɪ/，curity 读 /kjʊrɪti/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "The HVAC system is operating normally.", cn: "暖通系统运行正常。", words: [{ w: "hvac", ipa: "/ˌeɪtʃˈviːˈeɪˈsiː/", cn: "暖通", phonics: "H-V-A-C 逐字母读" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "The power system is operating normally.", cn: "电力系统运行正常。", words: [{ w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
    ],
    thinking: "汇报消防系统状态的三种结论：\n① Operating normally（正常运行 → 最佳）\n② Has an alarm（有告警 → 需进一步排查）\n③ Has a fault（有故障 → 需立即处理）\n消防系统必须保持24小时正常运行，任何故障都需要立即处理。",
    pronunciation: "normally 的 r 在美式英语中发音，英式中不发音。\noperating 的重音在 op 上。",
    quiz: [
      { q: "安防系统运行正常，怎么说？", a: "The security system is operating normally." },
    ],
  },
  {
    id: 1683,
    en: "Please check the fire alarm control panel.",
    cn: "请检查火灾报警控制器。",
    ipa: "/pliːz tʃɛk ðə faɪər əˈlɑːrm kənˈtroʊl ˈpænəl/",
    tags: ["第1683句", "火灾报警控制器", "★★★★★"],
    when: "火灾报警控制器（FACP）是消防系统的核心设备，接收所有探测器和手动报警按钮的信号。交接时检查控制器状态。",
    words: [
      { w: "fire alarm control panel", ipa: "/faɪər əˈlɑːrm kənˈtroʊl ˈpænəl/", pos: "名词短语", cn: "火灾报警控制器", memory: "fire alarm = 火灾报警；control = 控制；panel = 面板。\nFACP = Fire Alarm Control Panel = 火灾报警控制器。\n这是消防系统的大脑，接收所有火灾探测信号并发出报警。", phonics: "fire 读 /faɪər/，alarm 读 /əˈlɑːrm/，control 读 /kənˈtroʊl/，panel 读 /ˈpænəl/。", collocations: [["FACP", "火灾报警控制器（缩写）"], ["alarm panel", "报警面板"], ["control panel display", "控制盘显示屏"]], examples: [["Check the FACP display.", "检查火灾报警控制器显示屏。"], ["The alarm panel shows no faults.", "报警面板无故障显示。"]] },
      { w: "panel", ipa: "/ˈpænəl/", pos: "名词", cn: "面板；控制盘", memory: "panel = 面板/控制盘。\n在消防领域，panel 通常指控制器面板。\ncontrol panel = 控制盘；discharge panel = 灭火控制盘。", phonics: "pan 读 /pæn/，el 读 /əl/。", collocations: [["control panel", "控制盘"], ["alarm panel", "报警面板"], ["display panel", "显示面板"]], examples: [["Check the control panel.", "检查控制盘。"], ["The panel shows an alarm.", "面板显示告警。"]] },
      { w: "check", ipa: "/tʃɛk/", pos: "动词", cn: "检查；查看", memory: "check = 检查/查看（快速确认状态）。\ncheck 是交接中最常用的动词。\ncheck 比 inspect 更偏向快速确认。", phonics: "ch 读 /tʃ/，e 读 /ɛ/，ck 读 /k/。", collocations: [["check the panel", "检查控制盘"], ["check the status", "检查状态"], ["routine check", "例行检查"]], examples: [["Check the panel.", "检查控制盘。"], ["Please check the FACP.", "请检查火灾报警控制器。"]] },
    ],
    phrases: [
      { p: "fire alarm control panel", ipa: "/faɪər əˈlɑːrm kənˈtroʊl ˈpænəl/", cn: "火灾报警控制器", why: "fire alarm + control panel = 火灾报警控制器。缩写为 FACP，是消防系统的核心设备，接收所有探测器的信号。" },
      { p: "check the fire alarm control panel", ipa: "/tʃɛk ðə faɪər əˈlɑːrm kənˈtroʊl ˈpænəl/", cn: "检查火灾报警控制器", why: "check + the + fire alarm control panel = 检查火灾报警控制器。交接时的标准检查指令。" },
    ],
    grammar: [
      { q: "FACP 怎么读？", a: "FACP = Fire Alarm Control Panel\n读法一：字母拼读 F-A-C-P /ˌɛf eɪ siː piː/\n读法二：全称 Fire Alarm Control Panel\n✅ 工程场合通常用缩写 FACP，但对外行用全称。\n✅ Please check the FACP.（请检查火灾报警控制器）" },
    ],
    pattern: "Please check the + 控制器/面板",
    patternExamples: [
      { en: "Please check the UPS control panel.", cn: "请检查UPS控制盘。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "control", ipa: "/kənˈtroʊl/", cn: "控制", phonics: "con 读 /kən/，trol 读 /troʊl/" }] },
      { en: "Please check the generator controller.", cn: "请检查发电机控制器。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "Please check the BMS control panel.", cn: "请检查BMS控制盘。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "bms", ipa: "/ˌbiːˈɛmˈɛs/", cn: "楼控", phonics: "B-M-S 逐字母读" }, { w: "control", ipa: "/kənˈtroʊl/", cn: "控制", phonics: "con 读 /kən/，trol 读 /troʊl/" }] },
    ],
    thinking: "FACP 是消防系统的大脑：\n① 接收所有烟雾/温度探测器信号\n② 接收手动报警按钮信号\n③ 触发声光报警器\n④ 启动气体灭火系统\n⑤ 联动消防广播\n交接时检查 FACP 是否有告警、故障显示或屏蔽点。",
    pronunciation: "alarm 的 a 读 /ə/，不是 /æ/。\npanel 的 a 读 /æ/，不是 /eɪ/。",
    quiz: [
      { q: "请检查UPS控制盘，怎么说？", a: "Please check the UPS control panel." },
    ],
  },
  {
    id: 1684,
    en: "The fire alarm control panel is operating normally.",
    cn: "火灾报警控制器运行正常。",
    ipa: "/ðə faɪər əˈlɑːrm kənˈtroʊl ˈpænəl ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1684句", "控制器状态", "★★★★★"],
    when: "确认火灾报警控制器运行正常，无告警、无故障、无屏蔽点。",
    words: [
      { w: "fire alarm control panel", ipa: "/faɪər əˈlɑːrm kənˈtroʊl ˈpænəl/", pos: "名词短语", cn: "火灾报警控制器", memory: "fire alarm = 火灾报警；control = 控制；panel = 面板。\nFACP = Fire Alarm Control Panel = 火灾报警控制器。\n这是消防系统的大脑，接收所有火灾探测信号。", phonics: "fire 读 /faɪər/，alarm 读 /əˈlɑːrm/，control 读 /kənˈtroʊl/，panel 读 /ˈpænəl/。", collocations: [["FACP", "火灾报警控制器（缩写）"], ["alarm panel", "报警面板"], ["control panel display", "控制盘显示屏"]], examples: [["Check the FACP display.", "检查火灾报警控制器显示屏。"], ["The alarm panel shows no faults.", "报警面板无故障显示。"]] },
      { w: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", pos: "动词短语", cn: "运行正常", memory: "operating = 运行中；normally = 正常地。\noperating normally = 正常运行，表示设备在正常参数范围内工作。\nFACP 运行正常意味着无告警、无故障、无屏蔽点。", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/，normally 读 /ˈnɔːrməli/。", collocations: [["operating normally", "正常运行"], ["functioning normally", "正常运作"], ["running normally", "正常运转"]], examples: [["The panel is operating normally.", "控制盘运行正常。"], ["All controllers are operating normally.", "所有控制器运行正常。"]] },
    ],
    phrases: [
      { p: "fire alarm control panel", ipa: "/faɪər əˈlɑːrm kənˈtroʊl ˈpænəl/", cn: "火灾报警控制器", why: "fire alarm + control panel = 火灾报警控制器（FACP）。消防系统的核心设备，接收所有探测器信号。" },
      { p: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "运行正常", why: "operating + normally = 正常运行。确认 FACP 无任何告警或故障显示。" },
    ],
    grammar: [
      { q: "如何描述 FACP 的不同状态？", a: "① Operating normally = 运行正常（无告警、无故障）\n② Has an active alarm = 有活动告警（检测到火灾信号）\n③ Has a fault = 有故障（设备自身问题）\n④ Has disabled points = 有屏蔽点（某些探测器被手动关闭）\n✅ The FACP is operating normally.（FACP 运行正常）\n✅ The FACP has one active alarm.（FACP 有一个活动告警）" },
    ],
    pattern: "控制器 + is operating normally",
    patternExamples: [
      { en: "The UPS controller is operating normally.", cn: "UPS控制器运行正常。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The generator controller is operating normally.", cn: "发电机控制器运行正常。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The BMS control panel is operating normally.", cn: "BMS控制盘运行正常。", words: [{ w: "bms", ipa: "/ˌbiːˈɛmˈɛs/", cn: "楼控", phonics: "B-M-S 逐字母读" }, { w: "control", ipa: "/kənˈtroʊl/", cn: "控制", phonics: "con 读 /kən/，trol 读 /troʊl/" }, { w: "panel", ipa: "/ˈpænl/", cn: "面板", phonics: "pan 读 /pæn/，el 读 /l/" }] },
    ],
    thinking: "FACP 正常状态意味着：\n① 无火灾告警（No fire alarm）\n② 无设备故障（No system fault）\n③ 无屏蔽点（No disabled points）\n④ 电源正常（Power supply normal）\n⑤ 通信正常（Communication normal）",
    pronunciation: "control 的 o 读 /oʊ/，不是 /ɒ/。\npanel 的 a 读 /æ/。",
    quiz: [
      { q: "UPS控制器运行正常，怎么说？", a: "The UPS controller is operating normally." },
    ],
  },
  {
    id: 1685,
    en: "Please check the smoke detectors.",
    cn: "请检查烟雾探测器。",
    ipa: "/pliːz tʃɛk ðə smoʊk dɪˈtɛktərz/",
    tags: ["第1685句", "烟雾探测器", "★★★★★"],
    when: "烟雾探测器是火灾探测的第一道防线，能检测到空气中的烟雾颗粒。交接时检查所有烟雾探测器状态。",
    words: [
      { w: "smoke detector", ipa: "/smoʊk dɪˈtɛktər/", pos: "名词短语", cn: "烟雾探测器", memory: "smoke = 烟雾；detector = 探测器。\nsmoke detector = 烟雾探测器，检测空气中的烟雾颗粒。\n数据中心机房、走廊、配电室都安装烟雾探测器。", phonics: "smoke 读 /smoʊk/，de 读 /dɪ/，tec 读 /tɛk/，tor 读 /tər/。", collocations: [["smoke detector", "烟雾探测器"], ["optical smoke detector", "光电烟雾探测器"], ["aspirating smoke detector", "吸气式烟雾探测器"]], examples: [["Check the smoke detectors.", "检查烟雾探测器。"], ["The smoke detector is activated.", "烟雾探测器被触发。"]] },
      { w: "detector", ipa: "/dɪˈtɛktər/", pos: "名词", cn: "探测器", memory: "detect = 探测/检测；-or = 设备。\ndetector = 探测器/检测设备。\nsmoke detector = 烟雾探测器；heat detector = 温度探测器。", phonics: "de 读 /dɪ/，tec 读 /tɛk/，tor 读 /tər/，重音在 tec 上。", collocations: [["smoke detector", "烟雾探测器"], ["heat detector", "温度探测器"], ["gas detector", "气体探测器"]], examples: [["The detector is working.", "探测器正在工作。"], ["Replace the detector.", "更换探测器。"]] },
      { w: "check", ipa: "/tʃɛk/", pos: "动词", cn: "检查；查看", memory: "check = 检查/查看（快速确认状态）。\ncheck 是交接中最常用的动词。\ncheck 比 inspect 更偏向快速确认。", phonics: "ch 读 /tʃ/，e 读 /ɛ/，ck 读 /k/。", collocations: [["check the detectors", "检查探测器"], ["check the status", "检查状态"], ["routine check", "例行检查"]], examples: [["Check the detectors.", "检查探测器。"], ["Please check the panel.", "请检查面板。"]] },
    ],
    phrases: [
      { p: "smoke detectors", ipa: "/smoʊk dɪˈtɛktərz/", cn: "烟雾探测器（复数）", why: "smoke + detectors = 烟雾探测器。数据中心通常安装数十个烟雾探测器，覆盖所有关键区域。" },
      { p: "check the smoke detectors", ipa: "/tʃɛk ðə smoʊk dɪˈtɛktərz/", cn: "检查烟雾探测器", why: "check + the + smoke detectors = 检查烟雾探测器。交接时的标准检查指令。" },
    ],
    grammar: [
      { q: "smoke detector 和 heat detector 有什么区别？", a: "smoke detector = 烟雾探测器（检测烟雾）\nheat detector = 温度探测器（检测温度）\n✅ Smoke detector 检测到烟雾颗粒时报警（火灾初期）。\n✅ Heat detector 检测到温度异常升高时报警（火灾中期）。\n✅ 数据中心通常两者配合使用，实现早期预警。" },
    ],
    pattern: "Please check the + 探测器/传感器",
    patternExamples: [
      { en: "Please check the temperature sensors.", cn: "请检查温度传感器。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "sensors", ipa: "/ˈsɛnsər/", cn: "传感器", phonics: "sens 读 /sɛns/，or 读 /ər/" }] },
      { en: "Please check the humidity sensors.", cn: "请检查湿度传感器。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "humidity", ipa: "/hjuːˈmɪdɪti/", cn: "湿度", phonics: "hu 读 /hjuː/，midity 读 /mɪdɪti/" }, { w: "sensors", ipa: "/ˈsɛnsər/", cn: "传感器", phonics: "sens 读 /sɛns/，or 读 /ər/" }] },
      { en: "Please check the water leakage sensors.", cn: "请检查漏水传感器。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "sensors", ipa: "/ˈsɛnsər/", cn: "传感器", phonics: "sens 读 /sɛns/，or 读 /ər/" }] },
    ],
    thinking: "数据中心常用的烟雾探测器类型：\n① 光电式（Optical）：检测烟雾散射光\n② 离子式（Ionization）：检测烟雾电离\n③ 吸气式（Aspirating/ASD）：主动抽取空气分析\n吸气式灵敏度最高，常用于机房和配电室。",
    pronunciation: "smoke 的 o 读 /oʊ/，不是 /ɒ/。\ndetector 的重音在 tec 上。",
    quiz: [
      { q: "请检查温度传感器，怎么说？", a: "Please check the temperature sensors." },
    ],
  },
  {
    id: 1686,
    en: "All smoke detectors are operating normally.",
    cn: "所有烟雾探测器运行正常。",
    ipa: "/ɔːl smoʊk dɪˈtɛktərz ɑːr ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1686句", "探测器状态", "★★★★★"],
    when: "确认所有烟雾探测器运行正常，无故障、无屏蔽、无告警。",
    words: [
      { w: "smoke detector", ipa: "/smoʊk dɪˈtɛktər/", pos: "名词短语", cn: "烟雾探测器", memory: "smoke = 烟雾；detector = 探测器。\nsmoke detector = 烟雾探测器，检测空气中的烟雾颗粒。\n数据中心机房、走廊、配电室都安装烟雾探测器。", phonics: "smoke 读 /smoʊk/，de 读 /dɪ/，tec 读 /tɛk/，tor 读 /tər/。", collocations: [["smoke detector", "烟雾探测器"], ["optical smoke detector", "光电烟雾探测器"], ["aspirating smoke detector", "吸气式烟雾探测器"]], examples: [["Check the smoke detectors.", "检查烟雾探测器。"], ["The smoke detector is activated.", "烟雾探测器被触发。"]] },
      { w: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", pos: "动词短语", cn: "运行正常", memory: "operating = 运行中；normally = 正常地。\noperating normally = 正常运行，表示设备在正常参数范围内工作。\n所有探测器都正常意味着无故障、无屏蔽、无告警。", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/，normally 读 /ˈnɔːrməli/。", collocations: [["operating normally", "正常运行"], ["functioning normally", "正常运作"], ["running normally", "正常运转"]], examples: [["All detectors are operating normally.", "所有探测器运行正常。"], ["The sensors are operating normally.", "传感器运行正常。"]] },
      { w: "all", ipa: "/ɔːl/", pos: "限定词", cn: "所有的", memory: "all = 所有的/全部。\n用于强调所有设备都正常，没有例外。\nAll detectors = 所有探测器（无一例外）。", phonics: "a 读 /ɔː/，ll 读 /l/。", collocations: [["all systems", "所有系统"], ["all detectors", "所有探测器"], ["all units", "所有机组"]], examples: [["All systems are online.", "所有系统在线。"], ["All detectors are working.", "所有探测器在工作。"]] },
    ],
    phrases: [
      { p: "all smoke detectors", ipa: "/ɔːl smoʊk dɪˈtɛktərz/", cn: "所有烟雾探测器", why: "all + smoke detectors = 所有烟雾探测器。强调每一个探测器都正常，没有故障或被屏蔽的。" },
      { p: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "运行正常", why: "operating + normally = 正常运行。确认所有烟雾探测器都在正常工作。" },
    ],
    grammar: [
      { q: "all ... are 和 all ... is 有什么区别？", a: "all + 复数名词 + are（复数谓语）\nall + 不可数名词 + is（单数谓语）\n✅ All detectors are operating normally.（所有探测器运行正常 → 复数）\n✅ All equipment is operating normally.（所有设备运行正常 → 不可数）\n注意：equipment 是不可数名词，用 is；detectors 是复数，用 are。" },
    ],
    pattern: "All + 设备 + are operating normally",
    patternExamples: [
      { en: "All heat detectors are operating normally.", cn: "所有温度探测器运行正常。", words: [{ w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "All UPS units are operating normally.", cn: "所有UPS机组运行正常。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "All generators are operating normally.", cn: "所有发电机运行正常。", words: [{ w: "generators", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "汇报探测器状态时：\n① All detectors operating normally = 全部正常（最佳）\n② One detector has a fault = 一个探测器故障（需维修）\n③ One detector is disabled = 一个探测器被屏蔽（需确认原因）\n注意：屏蔽探测器需要记录原因，并在维护完成后恢复。",
    pronunciation: "all 的 a 读 /ɔː/，不是 /æ/。\ndetectors 的 s 读 /z/，因为前面是元音。",
    quiz: [
      { q: "所有温度探测器运行正常，怎么说？", a: "All heat detectors are operating normally." },
    ],
  },
  {
    id: 1687,
    en: "Please check the heat detectors.",
    cn: "请检查温度探测器。",
    ipa: "/pliːz tʃɛk ðə hiːt dɪˈtɛktərz/",
    tags: ["第1687句", "温度探测器", "★★★★★"],
    when: "温度探测器是火灾探测的第二道防线，检测到温度异常升高时报警。交接时检查所有温度探测器状态。",
    words: [
      { w: "heat detector", ipa: "/hiːt dɪˈtɛktər/", pos: "名词短语", cn: "温度探测器", memory: "heat = 热量/温度；detector = 探测器。\nheat detector = 温度探测器，检测温度异常升高。\n与烟雾探测器配合使用，实现多层次火灾探测。", phonics: "heat 读 /hiːt/，de 读 /dɪ/，tec 读 /tɛk/，tor 读 /tər/。", collocations: [["heat detector", "温度探测器"], ["rate-of-rise heat detector", "差温探测器"], ["fixed temperature detector", "定温探测器"]], examples: [["Check the heat detectors.", "检查温度探测器。"], ["The heat detector is activated.", "温度探测器被触发。"]] },
      { w: "check", ipa: "/tʃɛk/", pos: "动词", cn: "检查；查看", memory: "check = 检查/查看（快速确认状态）。\ncheck 是交接中最常用的动词。\ncheck 比 inspect 更偏向快速确认。", phonics: "ch 读 /tʃ/，e 读 /ɛ/，ck 读 /k/。", collocations: [["check the status", "检查状态"], ["check the equipment", "检查设备"], ["routine check", "例行检查"]], examples: [["Check the detectors.", "检查探测器。"], ["Please check the panel.", "请检查面板。"]] },
    ],
    phrases: [
      { p: "heat detectors", ipa: "/hiːt dɪˈtɛktərz/", cn: "温度探测器（复数）", why: "heat + detectors = 温度探测器。数据中心在厨房、锅炉房等可能产生烟雾的区域安装温度探测器，避免误报。" },
      { p: "check the heat detectors", ipa: "/tʃɛk ðə hiːt dɪˈtɛktərz/", cn: "检查温度探测器", why: "check + the + heat detectors = 检查温度探测器。交接时的标准检查指令。" },
    ],
    grammar: [
      { q: "heat detector 的类型有哪些？", a: "① Fixed temperature detector = 定温探测器（温度达到阈值时报警）\n② Rate-of-rise heat detector = 差温探测器（温度快速升高时报警）\n③ Combination = 复合型（同时具备定温和差温功能）\n✅ 数据中心常用复合型，提高探测可靠性。" },
    ],
    pattern: "Please check the + 探测器类型",
    patternExamples: [
      { en: "Please check the flame detectors.", cn: "请检查火焰探测器。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the gas detectors.", cn: "请检查气体探测器。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "gas", ipa: "/ɡæs/", cn: "气体", phonics: "gas 读 /ɡæs/" }] },
      { en: "Please check the water detectors.", cn: "请检查水浸探测器。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }] },
    ],
    thinking: "温度探测器安装位置：\n① 厨房/餐厅（可能产生油烟）\n② 锅炉房（高温环境）\n③ 发电机房（高温环境）\n④ 配电室（温度监控）\n不适合安装在有烟雾但非火灾的区域（如厨房）。",
    pronunciation: "heat 的 ea 读 /iː/，不是 /ɛ/。\ndetector 的重音在 tec 上。",
    quiz: [
      { q: "请检查火焰探测器，怎么说？", a: "Please check the flame detectors." },
    ],
  },
  {
    id: 1688,
    en: "All heat detectors are operating normally.",
    cn: "所有温度探测器运行正常。",
    ipa: "/ɔːl hiːt dɪˈtɛktərz ɑːr ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1688句", "探测器状态", "★★★★★"],
    when: "确认所有温度探测器运行正常，无故障、无屏蔽、无告警。",
    words: [
      { w: "heat detector", ipa: "/hiːt dɪˈtɛktər/", pos: "名词短语", cn: "温度探测器", memory: "heat = 热量/温度；detector = 探测器。\nheat detector = 温度探测器，检测温度异常升高。\n与烟雾探测器配合使用，实现多层次火灾探测。", phonics: "heat 读 /hiːt/，de 读 /dɪ/，tec 读 /tɛk/，tor 读 /tər/。", collocations: [["heat detector", "温度探测器"], ["heat source", "热源"], ["heat dissipation", "散热"]], examples: [["Check the heat detectors.", "检查温度探测器。"], ["Heat dissipation is important.", "散热很重要。"]] },
      { w: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", pos: "动词短语", cn: "运行正常", memory: "operating = 运行中；normally = 正常地。\noperating normally = 正常运行，表示设备在正常参数范围内工作。\n所有温度探测器正常意味着无故障、无屏蔽。", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/，normally 读 /ˈnɔːrməli/。", collocations: [["operating normally", "正常运行"], ["functioning normally", "正常运作"], ["running normally", "正常运转"]], examples: [["All detectors are operating normally.", "所有探测器运行正常。"], ["The sensors are operating normally.", "传感器运行正常。"]] },
      { w: "all", ipa: "/ɔːl/", pos: "限定词", cn: "所有的", memory: "all = 所有的/全部。\n用于强调所有设备都正常，没有例外。\nAll heat detectors = 所有温度探测器（无一例外）。", phonics: "a 读 /ɔː/，ll 读 /l/。", collocations: [["all systems", "所有系统"], ["all detectors", "所有探测器"], ["all units", "所有机组"]], examples: [["All systems are online.", "所有系统在线。"], ["All detectors are working.", "所有探测器在工作。"]] },
    ],
    phrases: [
      { p: "all heat detectors", ipa: "/ɔːl hiːt dɪˈtɛktərz/", cn: "所有温度探测器", why: "all + heat detectors = 所有温度探测器。确认每一个温度探测器都正常工作。" },
      { p: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "运行正常", why: "operating + normally = 正常运行。确认所有温度探测器都在正常工作。" },
    ],
    grammar: [
      { q: "如何区分烟雾探测器和温度探测器的汇报？", a: "✅ All smoke detectors are operating normally.（所有烟雾探测器运行正常）\n✅ All heat detectors are operating normally.（所有温度探测器运行正常）\n✅ All fire detectors are operating normally.（所有火灾探测器运行正常 → 包括烟雾+温度）\n用具体的探测器类型更精确。" },
    ],
    pattern: "All + 探测器 + are operating normally",
    patternExamples: [
      { en: "All smoke detectors are operating normally.", cn: "所有烟雾探测器运行正常。", words: [{ w: "smoke", ipa: "/smoʊk/", cn: "烟雾", phonics: "smoke 读 /smoʊk/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "All gas detectors are operating normally.", cn: "所有气体探测器运行正常。", words: [{ w: "gas", ipa: "/ɡæs/", cn: "气体", phonics: "gas 读 /ɡæs/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "All water detectors are operating normally.", cn: "所有水浸探测器运行正常。", words: [{ w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "火灾探测器的维护要点：\n① 定期测试（每月一次）\n② 定期清洁（每季度一次）\n③ 定期校准（每年一次）\n④ 记录测试结果\n⑤ 发现故障及时更换",
    pronunciation: "heat 的 ea 读 /iː/，与 meat 同韵。\nall 的 a 读 /ɔː/。",
    quiz: [
      { q: "所有气体探测器运行正常，怎么说？", a: "All gas detectors are operating normally." },
    ],
  },
  {
    id: 1689,
    en: "Please check the manual call points.",
    cn: "请检查手动报警按钮。",
    ipa: "/pliːz tʃɛk ðə ˈmænjuəl kɔːl pɔɪnts/",
    tags: ["第1689句", "手动报警按钮", "★★★★★"],
    when: "手动报警按钮（MCP）是人工触发火灾报警的设备，通常安装在出口和走廊。交接时检查所有手动报警按钮状态。",
    words: [
      { w: "manual call point", ipa: "/ˈmænjuəl kɔːl pɔɪnt/", pos: "名词短语", cn: "手动报警按钮", memory: "manual = 手动的；call = 呼叫；point = 点。\nMCP = Manual Call Point = 手动报警按钮。\n发现火灾时，按下 MCP 可以手动触发火灾报警。", phonics: "man 读 /mæn/，ual 读 /juəl/，call 读 /kɔːl/，point 读 /pɔɪnt/。", collocations: [["MCP", "手动报警按钮（缩写）"], ["break glass MCP", "碎玻璃手动报警按钮"], ["reset key", "复位钥匙"]], examples: [["Press the manual call point.", "按下手动报警按钮。"], ["The MCP has been activated.", "手动报警按钮已被触发。"]] },
      { w: "manual", ipa: "/ˈmænjuəl/", pos: "形容词", cn: "手动的；人工的", memory: "manual = 手动的/人工的。\n与 automatic（自动的）相对。\nmanual mode = 手动模式；automatic mode = 自动模式。", phonics: "man 读 /mæn/，ual 读 /juəl/，重音在 man 上。", collocations: [["manual mode", "手动模式"], ["manual operation", "手动操作"], ["manual override", "手动超控"]], examples: [["Switch to manual mode.", "切换到手动模式。"], ["Manual operation is required.", "需要手动操作。"]] },
      { w: "check", ipa: "/tʃɛk/", pos: "动词", cn: "检查；查看", memory: "check = 检查/查看（快速确认状态）。\ncheck 是交接中最常用的动词。\ncheck 比 inspect 更偏向快速确认。", phonics: "ch 读 /tʃ/，e 读 /ɛ/，ck 读 /k/。", collocations: [["check the MCP", "检查手动报警按钮"], ["check the status", "检查状态"], ["routine check", "例行检查"]], examples: [["Check the call points.", "检查报警按钮。"], ["Please check the panel.", "请检查面板。"]] },
    ],
    phrases: [
      { p: "manual call points", ipa: "/ˈmænjuəl kɔːl pɔɪnts/", cn: "手动报警按钮（复数）", why: "manual + call + points = 手动报警按钮。缩写为 MCP，安装在出口、走廊等显眼位置。" },
      { p: "check the manual call points", ipa: "/tʃɛk ðə ˈmænjuəl kɔːl pɔɪnts/", cn: "检查手动报警按钮", why: "check + the + manual call points = 检查手动报警按钮。交接时的标准检查指令。" },
    ],
    grammar: [
      { q: "MCP 怎么使用？", a: "使用方法：\n① 发现火灾 → 按下 MCP 的玻璃面板（或碎玻璃）\n② MCP 触发 → FACP 收到报警信号\n③ FACP 触发声光报警器\n④ 使用复位钥匙将 MCP 复位\n注意：只有在确认发生火灾时才按下 MCP，避免误报。" },
    ],
    pattern: "Please check the + 消防设备",
    patternExamples: [
      { en: "Please check the fire extinguishers.", cn: "请检查灭火器。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }] },
      { en: "Please check the fire hydrants.", cn: "请检查消防栓。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }] },
      { en: "Please check the emergency exits.", cn: "请检查紧急出口。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "emergency", ipa: "/ɪˈmɜːrdʒənsi/", cn: "紧急", phonics: "e 读 /ɪ/，mergency 读 /mɜːrdʒənsi/" }] },
    ],
    thinking: "MCP 安装位置要求：\n① 每个出口旁边\n② 走廊每隔30米\n③ 高度1.4米左右（便于操作）\n④ 显眼位置（红色外壳）\n⑤ 远离可能误触的位置",
    pronunciation: "manual 的 a 读 /æ/，不是 /eɪ/。\ncall 的 a 读 /ɔː/，不是 /æ/。",
    quiz: [
      { q: "请检查灭火器，怎么说？", a: "Please check the fire extinguishers." },
    ],
  },
  {
    id: 1690,
    en: "All manual call points are in good condition.",
    cn: "所有手动报警按钮状态良好。",
    ipa: "/ɔːl ˈmænjuəl kɔːl pɔɪnts ɑːr ɪn gʊd kənˈdɪʃən/",
    tags: ["第1690句", "按钮状态", "★★★★★"],
    when: "确认所有手动报警按钮状态良好，玻璃面板完好、未被触发、标志清晰。",
    words: [
      { w: "manual call point", ipa: "/ˈmænjuəl kɔːl pɔɪnt/", pos: "名词短语", cn: "手动报警按钮", memory: "manual = 手动的；call = 呼叫；point = 点。\nMCP = Manual Call Point = 手动报警按钮。\n发现火灾时，按下 MCP 可以手动触发火灾报警。", phonics: "man 读 /mæn/，ual 读 /juəl/，call 读 /kɔːl/，point 读 /pɔɪnt/。", collocations: [["MCP", "手动报警按钮（缩写）"], ["break glass MCP", "碎玻璃手动报警按钮"], ["reset key", "复位钥匙"]], examples: [["Press the manual call point.", "按下手动报警按钮。"], ["The MCP has been activated.", "手动报警按钮已被触发。"]] },
      { w: "in good condition", ipa: "/ɪn gʊd kənˈdɪʃən/", pos: "介词短语", cn: "状态良好", memory: "in good condition = 状态良好/完好。\ncondition = 状况/条件。\nin good condition = 完好无损，可以正常使用。", phonics: "in 读 /ɪn/，good 读 /gʊd/，con 读 /kən/，di 读 /dɪ/，tion 读 /ʃən/。", collocations: [["in good condition", "状态良好"], ["in poor condition", "状态差"], ["in working condition", "工作状态"]], examples: [["The equipment is in good condition.", "设备状态良好。"], ["The building is in poor condition.", "建筑状态差。"]] },
      { w: "all", ipa: "/ɔːl/", pos: "限定词", cn: "所有的", memory: "all = 所有的/全部。\n用于强调所有设备都正常，没有例外。\nAll manual call points = 所有手动报警按钮（无一例外）。", phonics: "a 读 /ɔː/，ll 读 /l/。", collocations: [["all systems", "所有系统"], ["all detectors", "所有探测器"], ["all units", "所有机组"]], examples: [["All systems are online.", "所有系统在线。"], ["All detectors are working.", "所有探测器在工作。"]] },
    ],
    phrases: [
      { p: "all manual call points", ipa: "/ɔːl ˈmænjuəl kɔːl pɔɪnts/", cn: "所有手动报警按钮", why: "all + manual call points = 所有手动报警按钮。确认每一个 MCP 都状态良好。" },
      { p: "in good condition", ipa: "/ɪn gʊd kənˈdɪʃən/", cn: "状态良好", why: "in + good + condition = 状态良好。用于描述设备完好无损，可以正常使用。" },
    ],
    grammar: [
      { q: "in good condition 和 operating normally 有什么区别？", a: "in good condition = 状态良好（物理状态完好）\noperating normally = 运行正常（功能正常工作）\n✅ MCP is in good condition.（MCP 状态良好 → 玻璃完好、标志清晰）\n✅ FACP is operating normally.（FACP 运行正常 → 功能正常、无告警）\n静态设备用 condition，动态设备用 operating。" },
    ],
    pattern: "All + 设备 + are in good condition",
    patternExamples: [
      { en: "All fire extinguishers are in good condition.", cn: "所有灭火器状态良好。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }] },
      { en: "All emergency exits are in good condition.", cn: "所有紧急出口状态良好。", words: [{ w: "emergency", ipa: "/ɪˈmɜːrdʒənsi/", cn: "紧急", phonics: "e 读 /ɪ/，mergency 读 /mɜːrdʒənsi/" }] },
      { en: "All fire doors are in good condition.", cn: "所有防火门状态良好。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "doors", ipa: "/dɔːr/", cn: "门", phonics: "door 读 /dɔːr/" }] },
    ],
    thinking: "MCP 状态良好的标准：\n① 玻璃面板完好（未碎裂）\n② 未被触发（未按下）\n③ 标志清晰（红色、有标识）\n④ 安装牢固（不松动）\n⑤ 复位钥匙可用",
    pronunciation: "condition 的重音在 di 上。\ngood 的 oo 读 /ʊ/，不是 /uː/。",
    quiz: [
      { q: "所有灭火器状态良好，怎么说？", a: "All fire extinguishers are in good condition." },
    ],
  },
  // ── 场景001：消防系统 - 声光报警 (1691-1694) ──
  {
    id: 1691,
    en: "Please test the horn and strobe.",
    cn: "请测试声光报警器。",
    ipa: "/pliːz tɛst ðə hɔːrn ænd stroʊb/",
    tags: ["第1691句", "声光报警器", "★★★★★"],
    when: "声光报警器（Horn and Strobe）在火灾发生时发出声音和闪光警告。交接时定期测试声光报警器功能。",
    words: [
      { w: "horn and strobe", ipa: "/hɔːrn ænd stroʊb/", pos: "名词短语", cn: "声光报警器", memory: "horn = 喇叭/号角（声音）；strobe = 频闪灯（闪光）。\nhorn and strobe = 声光报警器，发出声音和闪光双重警告。\n火灾发生时，声光报警器自动启动。", phonics: "horn 读 /hɔːrn/，and 读 /ænd/，strobe 读 /stroʊb/。", collocations: [["horn and strobe", "声光报警器"], ["strobe light", "频闪灯"], ["alarm horn", "报警喇叭"]], examples: [["Test the horn and strobe.", "测试声光报警器。"], ["The strobe light is flashing.", "频闪灯在闪烁。"]] },
      { w: "test", ipa: "/tɛst/", pos: "动词", cn: "测试；检验", memory: "test = 测试/检验。\ntesting = 测试中。\ntest result = 测试结果。\n定期测试消防设备是维护计划的一部分。", phonics: "t 读 /t/，e 读 /ɛ/，st 读 /st/。", collocations: [["test the equipment", "测试设备"], ["test result", "测试结果"], ["routine test", "例行测试"]], examples: [["Test the alarm system.", "测试报警系统。"], ["The test was successful.", "测试成功。"]] },
    ],
    phrases: [
      { p: "horn and strobe", ipa: "/hɔːrn ænd stroʊb/", cn: "声光报警器", why: "horn（声音）+ and + strobe（闪光）= 声光报警器。双重警告方式，确保所有人员都能感知火灾。" },
      { p: "test the horn and strobe", ipa: "/tɛst ðə hɔːrn ænd stroʊb/", cn: "测试声光报警器", why: "test + the + horn and strobe = 测试声光报警器。验证声光报警器是否能正常发出声音和闪光。" },
    ],
    grammar: [
      { q: "test 和 check 有什么区别？", a: "test = 测试（验证功能是否正常）\ncheck = 检查（确认状态）\n✅ Please test the horn and strobe.（请测试声光报警器 → 验证是否能响和闪）\n✅ Please check the horn and strobe.（请检查声光报警器 → 确认外观状态）\ntest 是主动验证功能，check 是被动确认状态。" },
    ],
    pattern: "Please test the + 设备",
    patternExamples: [
      { en: "Please test the fire alarm.", cn: "请测试火灾报警。", words: [{ w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }, { w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Please test the emergency lighting.", cn: "请测试应急照明。", words: [{ w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }, { w: "emergency", ipa: "/ɪˈmɜːrdʒənsi/", cn: "紧急", phonics: "e 读 /ɪ/，mergency 读 /mɜːrdʒənsi/" }] },
      { en: "Please test the generator.", cn: "请测试发电机。", words: [{ w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
    ],
    thinking: "声光报警器测试注意事项：\n① 提前通知所有人员（避免恐慌）\n② 选择非工作时间\n③ 测试时间不宜过长（30秒）\n④ 记录测试结果\n⑤ 确认所有报警器都能响",
    pronunciation: "horn 的 or 读 /ɔːr/，不是 /ɒ/。\nstrobe 的 o 读 /oʊ/，不是 /ɒ/。",
    quiz: [
      { q: "请测试应急照明，怎么说？", a: "Please test the emergency lighting." },
    ],
  },
  {
    id: 1692,
    en: "The horn and strobe are operating normally.",
    cn: "声光报警器运行正常。",
    ipa: "/ðə hɔːrn ænd stroʊb ɑːr ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1692句", "报警器状态", "★★★★★"],
    when: "确认声光报警器运行正常，声音响亮、闪光明亮、安装牢固。",
    words: [
      { w: "horn", ipa: "/hɔːrn/", pos: "名词", cn: "喇叭；号角", memory: "horn = 喇叭/号角。\n在消防系统中指报警喇叭。\n发出高分贝声音警告人员疏散。", phonics: "h 读 /h/，or 读 /ɔːr/，n 读 /n/。", collocations: [["alarm horn", "报警喇叭"], ["car horn", "汽车喇叭"], ["sound the horn", "鸣笛"]], examples: [["The horn is sounding.", "喇叭在响。"], ["Sound the horn.", "鸣笛。"]] },
      { w: "strobe", ipa: "/stroʊb/", pos: "名词", cn: "频闪灯", memory: "strobe = 频闪灯/闪光灯。\nstrobe light = 频闪灯。\n在消防系统中发出强烈闪光警告。", phonics: "str 读 /str/，o 读 /oʊ/，be 读 /b/。", collocations: [["strobe light", "频闪灯"], ["strobe alarm", "闪光报警"], ["flash strobe", "闪烁频闪灯"]], examples: [["The strobe is flashing.", "频闪灯在闪烁。"], ["Check the strobe light.", "检查频闪灯。"]] },
      { w: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", pos: "动词短语", cn: "运行正常", memory: "operating = 运行中；normally = 正常地。\noperating normally = 正常运行，表示设备在正常参数范围内工作。\n声光报警器正常意味着声音响亮、闪光明亮。", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/，normally 读 /ˈnɔːrməli/。", collocations: [["operating normally", "正常运行"], ["functioning normally", "正常运作"], ["running normally", "正常运转"]], examples: [["All systems are operating normally.", "所有系统正常运行。"], ["The equipment is operating normally.", "设备运行正常。"]] },
    ],
    phrases: [
      { p: "horn and strobe", ipa: "/hɔːrn ænd stroʊb/", cn: "声光报警器", why: "horn（声音）+ and + strobe（闪光）= 声光报警器。确认两者都能正常工作。" },
      { p: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "运行正常", why: "operating + normally = 正常运行。确认声光报警器声音响亮、闪光明亮。" },
    ],
    grammar: [
      { q: "horn and strobe 是单数还是复数？", a: "horn and strobe = 两个设备（喇叭 + 频闪灯）\n但作为一个整体单元，可以用单数或复数：\n✅ The horn and strobe is operating normally.（视为整体 → 单数）\n✅ The horn and strobe are operating normally.（视为两个 → 复数）\n工程场合常用复数 are。" },
    ],
    pattern: "设备 + are operating normally",
    patternExamples: [
      { en: "The alarm and strobe are operating normally.", cn: "报警器和频闪灯运行正常。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The pump and motor are operating normally.", cn: "水泵和电机运行正常。", words: [{ w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The sensor and transmitter are operating normally.", cn: "传感器和变送器运行正常。", words: [{ w: "sensor", ipa: "/ˈsɛnsər/", cn: "传感器", phonics: "sens 读 /sɛns/，or 读 /ər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "声光报警器的维护要点：\n① 定期测试（每季度一次）\n② 检查灯泡/LED（每年更换）\n③ 检查声音分贝（≥85dB）\n④ 清洁外壳（保持可见）\n⑤ 检查安装支架（牢固）",
    pronunciation: "horn 的 or 读 /ɔːr/，与 corn 同韵。\nstrobe 的 o 读 /oʊ/，与 robe 同韵。",
    quiz: [
      { q: "水泵和电机运行正常，怎么说？", a: "The pump and motor are operating normally." },
    ],
  },
  {
    id: 1693,
    en: "Please verify the emergency broadcast system.",
    cn: "请确认消防广播系统。",
    ipa: "/pliːz ˈvɛrɪfaɪ ðə ɪˈmɜːrdʒənsi ˈbrɔːdkæst ˈsɪstəm/",
    tags: ["第1693句", "消防广播", "★★★★★"],
    when: "消防广播系统在火灾发生时播放疏散指令，引导人员安全撤离。交接时确认消防广播系统正常。",
    words: [
      { w: "emergency broadcast", ipa: "/ɪˈmɜːrdʒənsi ˈbrɔːdkæst/", pos: "名词短语", cn: "紧急广播", memory: "emergency = 紧急/应急；broadcast = 广播。\nemergency broadcast = 紧急广播/消防广播。\n火灾时播放疏散指令，引导人员撤离。", phonics: "e 读 /ɪ/，mer 读 /mɜːr/，gency 读 /dʒənsi/，broad 读 /brɔːd/，cast 读 /kæst/。", collocations: [["emergency broadcast system", "紧急广播系统"], ["broadcast message", "广播消息"], ["evacuation announcement", "疏散广播"]], examples: [["The broadcast system is ready.", "广播系统已就绪。"], ["Listen to the broadcast.", "听广播。"]] },
      { w: "verify", ipa: "/ˈvɛrɪfaɪ/", pos: "动词", cn: "确认；验证", memory: "verify = 确认/验证。\n比 check 更正式，强调验证正确性。\nverification = 验证（名词）。", phonics: "ver 读 /vɛr/，i 读 /ɪ/，fy 读 /faɪ/，重音在 ver 上。", collocations: [["verify the status", "确认状态"], ["verify the result", "验证结果"], ["verify the operation", "确认操作"]], examples: [["Verify the alarm is cleared.", "确认告警已恢复。"], ["Please verify the result.", "请验证结果。"]] },
    ],
    phrases: [
      { p: "emergency broadcast system", ipa: "/ɪˈmɜːrdʒənsi ˈbrɔːdkæst ˈsɪstəm/", cn: "消防广播系统", why: "emergency + broadcast + system = 消防广播系统。火灾时播放预录的疏散指令。" },
      { p: "verify the emergency broadcast system", ipa: "/ˈvɛrɪfaɪ ðə ɪˈmɜːrdʒənsi ˈbrɔːdkæst ˈsɪstəm/", cn: "确认消防广播系统", why: "verify + the + emergency broadcast system = 确认消防广播系统。交接时的标准确认指令。" },
    ],
    grammar: [
      { q: "verify 和 check 有什么区别？", a: "verify = 确认/验证（更正式，强调验证正确性）\ncheck = 检查（日常用语，确认状态）\n✅ Please verify the broadcast system.（请确认广播系统 → 验证功能正常）\n✅ Please check the broadcast system.（请检查广播系统 → 查看状态）\n交接时用 verify 更专业。" },
    ],
    pattern: "Please verify the + 系统",
    patternExamples: [
      { en: "Please verify the PA system.", cn: "请确认公共广播系统。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please verify the access control system.", cn: "请确认门禁系统。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "access", ipa: "/ˈæksɛs/", cn: "门禁", phonics: "ac 读 /æk/，cess 读 /sɛs/" }, { w: "control", ipa: "/kənˈtroʊl/", cn: "控制", phonics: "con 读 /kən/，trol 读 /troʊl/" }] },
      { en: "Please verify the CCTV system.", cn: "请确认监控系统。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "cctv", ipa: "/ˌsiːˌsiːˈtiːˈviː/", cn: "监控", phonics: "C-C-T-V 逐字母读" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
    ],
    thinking: "消防广播系统功能：\n① 播放预录疏散指令\n② 支持人工话筒广播\n③ 分区广播（按楼层/区域）\n④ 与 FACP 联动\n⑤ 备用电源供电",
    pronunciation: "emergency 的重音在 mer 上。\nbroadcast 的 broad 读 /brɔːd/。",
    quiz: [
      { q: "请确认门禁系统，怎么说？", a: "Please verify the access control system." },
    ],
  },
  {
    id: 1694,
    en: "The emergency broadcast system is working properly.",
    cn: "消防广播系统工作正常。",
    ipa: "/ðə ɪˈmɜːrdʒənsi ˈbrɔːdkæst ˈsɪstəm ɪz ˈwɜːrkɪŋ ˈprɒpərli/",
    tags: ["第1694句", "广播系统状态", "★★★★★"],
    when: "确认消防广播系统工作正常，音质清晰、音量足够、覆盖全区域。",
    words: [
      { w: "emergency broadcast", ipa: "/ɪˈmɜːrdʒənsi ˈbrɔːdkæst/", pos: "名词短语", cn: "紧急广播", memory: "emergency = 紧急/应急；broadcast = 广播。\nemergency broadcast = 紧急广播/消防广播。\n火灾时播放疏散指令，引导人员撤离。", phonics: "e 读 /ɪ/，mer 读 /mɜːr/，gency 读 /dʒənsi/，broad 读 /brɔːd/，cast 读 /kæst/。", collocations: [["emergency broadcast system", "紧急广播系统"], ["broadcast message", "广播消息"], ["evacuation announcement", "疏散广播"]], examples: [["The broadcast system is ready.", "广播系统已就绪。"], ["Listen to the broadcast.", "听广播。"]] },
      { w: "working properly", ipa: "/ˈwɜːrkɪŋ ˈprɒpərli/", pos: "动词短语", cn: "工作正常", memory: "working = 工作中；properly = 正确地/适当地。\nworking properly = 工作正常/运作良好。\n与 operating normally 意思相近。", phonics: "work 读 /wɜːrk/，ing 读 /ɪŋ/，prop 读 /prɒp/，erly 读 /ərli/。", collocations: [["working properly", "工作正常"], ["functioning properly", "正常运作"], ["running properly", "正常运转"]], examples: [["The system is working properly.", "系统工作正常。"], ["Everything is working properly.", "一切正常。"]] },
      { w: "properly", ipa: "/ˈprɒpərli/", pos: "副词", cn: "正确地；适当地", memory: "proper = 正确的/适当的；-ly = 副词后缀。\nproperly = 正确地/适当地。\nworking properly = 正常工作。", phonics: "prop 读 /prɒp/，er 读 /ər/，ly 读 /li/，重音在 prop 上。", collocations: [["properly installed", "正确安装"], ["properly maintained", "正确维护"], ["working properly", "工作正常"]], examples: [["Is it working properly?", "它工作正常吗？"], ["Install it properly.", "正确安装。"]] },
    ],
    phrases: [
      { p: "emergency broadcast system", ipa: "/ɪˈmɜːrdʒənsi ˈbrɔːdkæst ˈsɪstəm/", cn: "消防广播系统", why: "emergency + broadcast + system = 消防广播系统。火灾时播放预录的疏散指令。" },
      { p: "working properly", ipa: "/ˈwɜːrkɪŋ ˈprɒpərli/", cn: "工作正常", why: "working + properly = 工作正常。与 operating normally 意思相近，可以互换使用。" },
    ],
    grammar: [
      { q: "working properly 和 operating normally 有什么区别？", a: "两者意思相近，可以互换：\n✅ The system is working properly.（系统工作正常）\n✅ The system is operating normally.（系统运行正常）\n细微差别：\n- properly 强调'正确地'（符合预期）\n- normally 强调'正常地'（在正常范围内）\n工程场合两者通用。" },
    ],
    pattern: "系统 + is working properly",
    patternExamples: [
      { en: "The PA system is working properly.", cn: "公共广播系统工作正常。", words: [{ w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "The access control is working properly.", cn: "门禁系统工作正常。", words: [{ w: "access", ipa: "/ˈæksɛs/", cn: "门禁", phonics: "ac 读 /æk/，cess 读 /sɛs/" }, { w: "control", ipa: "/kənˈtroʊl/", cn: "控制", phonics: "con 读 /kən/，trol 读 /troʊl/" }] },
      { en: "The CCTV system is working properly.", cn: "监控系统工作正常。", words: [{ w: "cctv", ipa: "/ˌsiːˌsiːˈtiːˈviː/", cn: "监控", phonics: "C-C-T-V 逐字母读" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
    ],
    thinking: "消防广播系统正常标准：\n① 音质清晰（无杂音）\n② 音量足够（≥65dB）\n③ 覆盖全区域（无死角）\n④ 备用电源正常\n⑤ 话筒功能正常",
    pronunciation: "properly 的 o 读 /ɒ/，不是 /oʊ/。\nworking 的 or 读 /ɜːr/。",
    quiz: [
      { q: "门禁系统工作正常，怎么说？", a: "The access control is working properly." },
    ],
  },
  // ── 场景001：消防系统 - 预作用系统 (1695-1698) ──
  {
    id: 1695,
    en: "Please check the pre-action sprinkler system.",
    cn: "请检查预作用喷淋系统。",
    ipa: "/pliːz tʃɛk ðə priː ˈækʃən ˈsprɪŋklər ˈsɪstəm/",
    tags: ["第1695句", "预作用系统", "★★★★★"],
    when: "预作用喷淋系统是数据中心常用的灭火系统，需要两个信号同时触发才喷水，避免误喷造成水损。交接时检查预作用系统状态。",
    words: [
      { w: "pre-action sprinkler", ipa: "/priː ˈækʃən ˈsprɪŋklər/", pos: "名词短语", cn: "预作用喷淋", memory: "pre-action = 预作用（预先动作）；sprinkler = 喷淋头。\npre-action sprinkler = 预作用喷淋系统。\n需要两个独立信号（如烟雾+温度）同时触发才喷水。", phonics: "pre 读 /priː/，ac 读 /æk/，tion 读 /ʃən/，sprin 读 /sprɪŋ/，kler 读 /klər/。", collocations: [["pre-action system", "预作用系统"], ["sprinkler head", "喷淋头"], ["water sprinkler", "水喷淋"]], examples: [["Check the pre-action system.", "检查预作用系统。"], ["The sprinkler is activated.", "喷淋头被触发。"]] },
      { w: "sprinkler", ipa: "/ˈsprɪŋklər/", pos: "名词", cn: "喷淋头", memory: "sprinkle = 喷洒；-er = 设备。\nsprinkler = 喷淋头/洒水器。\nfire sprinkler = 消防喷淋头。", phonics: "sprin 读 /sprɪŋ/，kler 读 /klər/，重音在 sprin 上。", collocations: [["fire sprinkler", "消防喷淋头"], ["sprinkler system", "喷淋系统"], ["sprinkler head", "喷淋头"]], examples: [["The sprinkler is working.", "喷淋头在工作。"], ["Check the sprinkler system.", "检查喷淋系统。"]] },
      { w: "check", ipa: "/tʃɛk/", pos: "动词", cn: "检查；查看", memory: "check = 检查/查看（快速确认状态）。\ncheck 是交接中最常用的动词。\ncheck 比 inspect 更偏向快速确认。", phonics: "ch 读 /tʃ/，e 读 /ɛ/，ck 读 /k/。", collocations: [["check the system", "检查系统"], ["check the status", "检查状态"], ["routine check", "例行检查"]], examples: [["Check the sprinkler system.", "检查喷淋系统。"], ["Please check the valve.", "请检查阀门。"]] },
    ],
    phrases: [
      { p: "pre-action sprinkler system", ipa: "/priː ˈækʃən ˈsprɪŋklər ˈsɪstəm/", cn: "预作用喷淋系统", why: "pre-action + sprinkler + system = 预作用喷淋系统。数据中心专用，需要双重确认才喷水，避免误喷。" },
      { p: "check the pre-action sprinkler system", ipa: "/tʃɛk ðə priː ˈækʃən ˈsprɪŋklər ˈsɪstəm/", cn: "检查预作用喷淋系统", why: "check + the + pre-action sprinkler system = 检查预作用喷淋系统。交接时的标准检查指令。" },
    ],
    grammar: [
      { q: "pre-action 和普通喷淋有什么区别？", a: "pre-action sprinkler = 预作用喷淋（需要双重确认）\nwet sprinkler = 湿式喷淋（管道常充水）\ndry sprinkler = 干式喷淋（管道常充气）\n✅ 预作用：烟雾探测器报警 + 温度探测器报警 → 阀门打开 → 喷水\n✅ 湿式：温度达到阈值 → 喷淋头玻璃球碎裂 → 直接喷水\n数据中心用预作用，避免误喷造成设备损坏。" },
    ],
    pattern: "Please check the + 喷淋系统",
    patternExamples: [
      { en: "Please check the wet sprinkler system.", cn: "请检查湿式喷淋系统。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please check the dry sprinkler system.", cn: "请检查干式喷淋系统。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please check the deluge system.", cn: "请检查雨淋系统。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
    ],
    thinking: "预作用系统工作原理：\n① 烟雾探测器检测到烟雾 → 第一信号\n② 温度探测器检测到高温 → 第二信号\n③ 两个信号同时 → 预作用阀打开\n④ 水流入管道 → 喷淋头喷水\n双重确认机制，大幅降低误喷风险。",
    pronunciation: "pre 读 /priː/，与 tree 同韵。\naction 的 a 读 /æ/。",
    quiz: [
      { q: "请检查湿式喷淋系统，怎么说？", a: "Please check the wet sprinkler system." },
    ],
  },
  {
    id: 1696,
    en: "The pre-action system is in normal condition.",
    cn: "预作用系统状态正常。",
    ipa: "/ðə priː ˈækʃən ˈsɪstəm ɪz ɪn ˈnɔːrməl kənˈdɪʃən/",
    tags: ["第1696句", "系统状态", "★★★★★"],
    when: "确认预作用系统状态正常，阀门关闭、管道充气、压力正常。",
    words: [
      { w: "pre-action system", ipa: "/priː ˈækʃən ˈsɪstəm/", pos: "名词短语", cn: "预作用系统", memory: "pre-action = 预作用；system = 系统。\npre-action system = 预作用系统。\n是 pre-action sprinkler system 的简称。", phonics: "pre 读 /priː/，ac 读 /æk/，tion 读 /ʃən/。", collocations: [["pre-action valve", "预作用阀"], ["pre-action panel", "预作用控制盘"], ["pre-action test", "预作用测试"]], examples: [["Check the pre-action system.", "检查预作用系统。"], ["The pre-action valve is closed.", "预作用阀关闭。"]] },
      { w: "normal condition", ipa: "/ˈnɔːrməl kənˈdɪʃən/", pos: "名词短语", cn: "正常状态", memory: "normal = 正常的；condition = 状况/条件。\nnormal condition = 正常状态/正常工况。\n表示系统所有参数都在正常范围内。", phonics: "nor 读 /nɔːr/，mal 读 /məl/，con 读 /kən/，di 读 /dɪ/，tion 读 /ʃən/。", collocations: [["normal condition", "正常状态"], ["abnormal condition", "异常状态"], ["operating condition", "运行状态"]], examples: [["The system is in normal condition.", "系统处于正常状态。"], ["Check the operating condition.", "检查运行状态。"]] },
    ],
    phrases: [
      { p: "pre-action system", ipa: "/priː ˈækʃən ˈsɪstəm/", cn: "预作用系统", why: "pre-action + system = 预作用系统。数据中心专用的喷淋系统，需要双重确认才喷水。" },
      { p: "in normal condition", ipa: "/ɪn ˈnɔːrməl kənˈdɪʃən/", cn: "状态正常", why: "in + normal + condition = 状态正常。与 in good condition 意思相近，强调在正常参数范围内。" },
    ],
    grammar: [
      { q: "in normal condition 和 in good condition 有什么区别？", a: "in normal condition = 状态正常（在正常参数范围内）\nin good condition = 状态良好（物理状态完好）\n✅ The system is in normal condition.（系统状态正常 → 压力正常、阀门关闭）\n✅ The equipment is in good condition.（设备状态良好 → 无损坏、可使用）\n正常 condition 更强调参数，good condition 更强调外观。" },
    ],
    pattern: "系统 + is in normal condition",
    patternExamples: [
      { en: "The fire system is in normal condition.", cn: "消防系统状态正常。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The water system is in normal condition.", cn: "水系统状态正常。", words: [{ w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The gas system is in normal condition.", cn: "气体系统状态正常。", words: [{ w: "gas", ipa: "/ɡæs/", cn: "气体", phonics: "gas 读 /ɡæs/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "预作用系统正常状态标准：\n① 预作用阀关闭（正常位置）\n② 管道充气压力正常（0.3-0.5 bar）\n③ 供水阀门打开\n④ 控制面板无告警\n⑤ 无漏水迹象",
    pronunciation: "normal 的 or 读 /ɔːr/。\ncondition 的重音在 di 上。",
    quiz: [
      { q: "消防系统状态正常，怎么说？", a: "The fire system is in normal condition." },
    ],
  },
  {
    id: 1697,
    en: "Please verify the pre-action valve.",
    cn: "请确认预作用阀状态。",
    ipa: "/pliːz ˈvɛrɪfaɪ ðə priː ˈækʃən vælv/",
    tags: ["第1697句", "预作用阀", "★★★★★"],
    when: "预作用阀是预作用系统的核心部件，控制水流进入喷淋管道。交接时确认预作用阀处于正常位置。",
    words: [
      { w: "valve", ipa: "/vælv/", pos: "名词", cn: "阀门", memory: "valve = 阀门/阀。\n控制流体（水/气）流动的装置。\npre-action valve = 预作用阀；safety valve = 安全阀。", phonics: "v 读 /v/，al 读 /æ/，ve 读 /v/。", collocations: [["pre-action valve", "预作用阀"], ["safety valve", "安全阀"], ["check valve", "止回阀"]], examples: [["Open the valve.", "打开阀门。"], ["Close the valve.", "关闭阀门。"]] },
      { w: "verify", ipa: "/ˈvɛrɪfaɪ/", pos: "动词", cn: "确认；验证", memory: "verify = 确认/验证。\nverification = 验证（名词）。\nverified = 已验证（形容词）。", phonics: "ver 读 /vɛr/，i 读 /ɪ/，fy 读 /faɪ/。", collocations: [["verify the status", "确认状态"], ["verify the position", "确认位置"], ["verify the operation", "确认操作"]], examples: [["Verify the valve position.", "确认阀门位置。"], ["Please verify the result.", "请验证结果。"]] },
      { w: "pre-action", ipa: "/priː ˈækʃən/", pos: "形容词", cn: "预作用的", memory: "pre = 预先；action = 动作/作用。\npre-action = 预作用的。\npre-action valve = 预作用阀。", phonics: "pre 读 /priː/，ac 读 /æk/，tion 读 /ʃən/。", collocations: [["pre-action valve", "预作用阀"], ["pre-action system", "预作用系统"], ["pre-action panel", "预作用控制盘"]], examples: [["Check the pre-action valve.", "检查预作用阀。"], ["The pre-action system is ready.", "预作用系统已就绪。"]] },
    ],
    phrases: [
      { p: "pre-action valve", ipa: "/priː ˈækʃən vælv/", cn: "预作用阀", why: "pre-action + valve = 预作用阀。控制水流进入喷淋管道的核心部件。" },
      { p: "verify the pre-action valve", ipa: "/ˈvɛrɪfaɪ ðə priː ˈækʃən vælv/", cn: "确认预作用阀", why: "verify + the + pre-action valve = 确认预作用阀。交接时的标准确认指令。" },
    ],
    grammar: [
      { q: "valve 有哪些类型？", a: "① Gate valve = 闸阀（全开/全关）\n② Ball valve = 球阀（快速开关）\n③ Butterfly valve = 蝶阀（调节流量）\n④ Check valve = 止回阀（单向流动）\n⑤ Pre-action valve = 预作用阀（双重触发）\n⑥ Safety valve = 安全阀（超压保护）" },
    ],
    pattern: "Please verify the + 阀门",
    patternExamples: [
      { en: "Please verify the isolation valve.", cn: "请确认隔离阀。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "valve", ipa: "/vælv/", cn: "阀门", phonics: "valve 读 /vælv/" }] },
      { en: "Please verify the bypass valve.", cn: "请确认旁通阀。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "valve", ipa: "/vælv/", cn: "阀门", phonics: "valve 读 /vælv/" }] },
      { en: "Please verify the drain valve.", cn: "请确认排水阀。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "valve", ipa: "/vælv/", cn: "阀门", phonics: "valve 读 /vælv/" }] },
    ],
    thinking: "预作用阀状态检查：\n① 阀门位置：关闭（正常）\n② 信号压力：正常\n③ 供水压力：正常\n④ 控制面板：无告警\n⑤ 手动操作：可用",
    pronunciation: "valve 的 a 读 /æ/，不是 /ɔː/。\nverify 的重音在 ver 上。",
    quiz: [
      { q: "请确认隔离阀，怎么说？", a: "Please verify the isolation valve." },
    ],
  },
  {
    id: 1698,
    en: "The pre-action valve is in the normal position.",
    cn: "预作用阀处于正常位置。",
    ipa: "/ðə priː ˈækʃən vælv ɪz ɪn ðə ˈnɔːrməl pəˈzɪʃən/",
    tags: ["第1698句", "阀门位置", "★★★★★"],
    when: "确认预作用阀处于正常位置（关闭状态），等待火灾信号触发。",
    words: [
      { w: "pre-action valve", ipa: "/priː ˈækʃən vælv/", pos: "名词短语", cn: "预作用阀", memory: "pre-action = 预作用；valve = 阀门。\npre-action valve = 预作用阀，控制水流进入喷淋管道。\n正常位置为关闭状态，等待火灾信号触发。", phonics: "pre 读 /priː/，ac 读 /æk/，tion 读 /ʃən/，valve 读 /vælv/。", collocations: [["pre-action valve", "预作用阀"], ["valve position", "阀门位置"], ["valve status", "阀门状态"]], examples: [["Check the pre-action valve.", "检查预作用阀。"], ["The valve is closed.", "阀门关闭。"]] },
      { w: "position", ipa: "/pəˈzɪʃən/", pos: "名词", cn: "位置", memory: "position = 位置/姿势。\nvalve position = 阀门位置。\nnormal position = 正常位置。\nopen position = 打开位置；closed position = 关闭位置。", phonics: "po 读 /pə/，si 读 /zɪ/，tion 读 /ʃən/，重音在 si 上。", collocations: [["valve position", "阀门位置"], ["normal position", "正常位置"], ["open position", "打开位置"]], examples: [["Check the valve position.", "检查阀门位置。"], ["The position is correct.", "位置正确。"]] },
    ],
    phrases: [
      { p: "pre-action valve", ipa: "/priː ˈækʃən vælv/", cn: "预作用阀", why: "pre-action + valve = 预作用阀。控制水流进入喷淋管道的核心部件，正常位置为关闭。" },
      { p: "in the normal position", ipa: "/ɪn ðə ˈnɔːrməl pəˈzɪʃən/", cn: "处于正常位置", why: "in + the + normal + position = 处于正常位置。对于预作用阀，正常位置是关闭状态。" },
    ],
    grammar: [
      { q: "如何描述阀门位置？", a: "① in normal position = 正常位置（预作用阀=关闭）\n② in open position = 打开位置\n③ in closed position = 关闭位置\n④ partially open = 部分打开\n✅ The valve is in the normal position.（阀门处于正常位置）\n✅ The valve is fully open.（阀门完全打开）" },
    ],
    pattern: "阀门 + is in the + 位置",
    patternExamples: [
      { en: "The isolation valve is in the open position.", cn: "隔离阀处于打开位置。", words: [{ w: "valve", ipa: "/vælv/", cn: "阀门", phonics: "valve 读 /vælv/" }] },
      { en: "The drain valve is in the closed position.", cn: "排水阀处于关闭位置。", words: [{ w: "valve", ipa: "/vælv/", cn: "阀门", phonics: "valve 读 /vælv/" }] },
      { en: "The bypass valve is in the normal position.", cn: "旁通阀处于正常位置。", words: [{ w: "valve", ipa: "/vælv/", cn: "阀门", phonics: "valve 读 /vælv/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "预作用阀正常位置说明：\n- 正常 = 关闭（等待触发信号）\n- 触发 = 打开（允许水流）\n- 复位 = 手动恢复关闭\n注意：阀门位置必须与系统状态一致。",
    pronunciation: "position 的重音在 si 上。\nnormal 的 or 读 /ɔːr/。",
    quiz: [
      { q: "隔离阀处于打开位置，怎么说？", a: "The isolation valve is in the open position." },
    ],
  },
  // ── 场景001：消防系统 - 气体灭火 (1699-1700) ──
  {
    id: 1699,
    en: "Please check the clean agent fire suppression system.",
    cn: "请检查气体灭火系统。",
    ipa: "/pliːz tʃɛk ðə kliːn ˈeɪdʒənt faɪər səˈprɛʃən ˈsɪstəm/",
    tags: ["第1699句", "气体灭火", "★★★★★"],
    when: "气体灭火系统使用清洁气体（如FM-200、Novec 1230）扑灭火灾，不会损坏电子设备。交接时检查气体灭火系统状态。",
    words: [
      { w: "clean agent", ipa: "/kliːn ˈeɪdʒənt/", pos: "名词短语", cn: "清洁气体", memory: "clean = 清洁的；agent = 药剂/介质。\nclean agent = 清洁气体灭火剂。\n不会留下残留物，不损坏电子设备。", phonics: "clean 读 /kliːn/，a 读 /eɪ/，gent 读 /dʒənt/。", collocations: [["clean agent system", "清洁气体系统"], ["FM-200", "七氟丙烷"], ["Novec 1230", "氟化酮"]], examples: [["The clean agent is FM-200.", "清洁气体是七氟丙烷。"], ["Check the clean agent system.", "检查清洁气体系统。"]] },
      { w: "fire suppression", ipa: "/faɪər səˈprɛʃən/", pos: "名词短语", cn: "灭火", memory: "fire = 火灾；suppression = 抑制/扑灭。\nfire suppression = 灭火/消防。\nsuppression system = 灭火系统。", phonics: "fire 读 /faɪər/，sup 读 /sə/，pres 读 /prɛs/，sion 读 /ʃən/。", collocations: [["fire suppression system", "灭火系统"], ["gas suppression", "气体灭火"], ["water suppression", "水灭火"]], examples: [["The suppression system is activated.", "灭火系统被触发。"], ["Check the suppression system.", "检查灭火系统。"]] },
      { w: "check", ipa: "/tʃɛk/", pos: "动词", cn: "检查；查看", memory: "check = 检查/查看（快速确认状态）。\ncheck 是交接中最常用的动词。\ncheck 比 inspect 更偏向快速确认。", phonics: "ch 读 /tʃ/，e 读 /ɛ/，ck 读 /k/。", collocations: [["check the system", "检查系统"], ["check the status", "检查状态"], ["routine check", "例行检查"]], examples: [["Check the suppression system.", "检查灭火系统。"], ["Please check the cylinders.", "请检查钢瓶。"]] },
    ],
    phrases: [
      { p: "clean agent fire suppression system", ipa: "/kliːn ˈeɪdʒənt faɪər səˈprɛʃən ˈsɪstəm/", cn: "气体灭火系统", why: "clean agent + fire suppression + system = 气体灭火系统。使用清洁气体扑灭火灾，保护电子设备。" },
      { p: "check the clean agent fire suppression system", ipa: "/tʃɛk ðə kliːn ˈeɪdʒənt faɪər səˈprɛʃən ˈsɪstəm/", cn: "检查气体灭火系统", why: "check + the + clean agent fire suppression system = 检查气体灭火系统。交接时的标准检查指令。" },
    ],
    grammar: [
      { q: "clean agent 有哪些类型？", a: "① FM-200 (HFC-227ea) = 七氟丙烷（常用）\n② Novec 1230 (FK-5-1-12) = 氟化酮（环保）\n③ Inergen (IG-541) = 惰性气体混合物\n④ CO2 = 二氧化碳（有毒，慎用）\n✅ 数据中心常用 FM-200 或 Novec 1230。" },
    ],
    pattern: "Please check the + 灭火系统",
    patternExamples: [
      { en: "Please check the water mist system.", cn: "请检查水雾灭火系统。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please check the foam system.", cn: "请检查泡沫灭火系统。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please check the CO2 system.", cn: "请检查二氧化碳系统。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
    ],
    thinking: "气体灭火系统特点：\n① 不损坏电子设备\n② 灭火后无残留\n③ 人员安全（设计浓度下）\n④ 快速灭火（10秒内）\n⑤ 需要密闭空间（门窗关闭）",
    pronunciation: "clean 的 ea 读 /iː/。\nagent 的 a 读 /eɪ/，不是 /æ/。",
    quiz: [
      { q: "请检查水雾灭火系统，怎么说？", a: "Please check the water mist system." },
    ],
  },
  {
    id: 1700,
    en: "The clean agent cylinders are fully charged.",
    cn: "气体灭火钢瓶压力正常。",
    ipa: "/ðə kliːn ˈeɪdʒənt ˈsɪlɪndərz ɑːr ˈfʊli tʃɑːrdʒd/",
    tags: ["第1700句", "钢瓶压力", "★★★★★"],
    when: "确认气体灭火钢瓶压力正常（充满状态），确保火灾时有足够的灭火剂。",
    words: [
      { w: "cylinder", ipa: "/ˈsɪlɪndər/", pos: "名词", cn: "钢瓶；气瓶", memory: "cylinder = 圆柱体/钢瓶。\n在消防中指灭火剂钢瓶。\nclean agent cylinder = 气体灭火钢瓶。", phonics: "cy 读 /sɪ/，lin 读 /lɪn/，der 读 /dər/，重音在 cy 上。", collocations: [["gas cylinder", "气瓶"], ["fire cylinder", "消防钢瓶"], ["cylinder pressure", "钢瓶压力"]], examples: [["Check the cylinder pressure.", "检查钢瓶压力。"], ["Replace the cylinder.", "更换钢瓶。"]] },
      { w: "fully charged", ipa: "/ˈfʊli tʃɑːrdʒd/", pos: "形容词短语", cn: "充满的", memory: "fully = 完全地；charged = 充装的。\nfully charged = 充满的/充装完毕的。\n用于描述电池充满或钢瓶充满。", phonics: "full 读 /fʊl/，ly 读 /li/，charge 读 /tʃɑːrdʒ/，d 读 /d/。", collocations: [["fully charged", "充满的"], ["partially charged", "部分充装"], ["discharged", "已释放"]], examples: [["The battery is fully charged.", "电池已充满。"], ["The cylinder is fully charged.", "钢瓶已充满。"]] },
      { w: "clean agent", ipa: "/kliːn ˈeɪdʒənt/", pos: "名词短语", cn: "清洁气体", memory: "clean = 清洁的；agent = 药剂/介质。\nclean agent = 清洁气体灭火剂。\n不会留下残留物，不损坏电子设备。", phonics: "clean 读 /kliːn/，a 读 /eɪ/，gent 读 /dʒənt/。", collocations: [["clean agent system", "清洁气体系统"], ["FM-200", "七氟丙烷"], ["Novec 1230", "氟化酮"]], examples: [["The clean agent is FM-200.", "清洁气体是七氟丙烷。"], ["Check the clean agent system.", "检查清洁气体系统。"]] },
    ],
    phrases: [
      { p: "clean agent cylinders", ipa: "/kliːn ˈeɪdʒənt ˈsɪlɪndərz/", cn: "气体灭火钢瓶", why: "clean agent + cylinders = 气体灭火钢瓶。存储清洁气体灭火剂的钢瓶。" },
      { p: "fully charged", ipa: "/ˈfʊli tʃɑːrdʒd/", cn: "充满的", why: "fully + charged = 充满的。用于描述钢瓶压力正常，灭火剂充足。" },
    ],
    grammar: [
      { q: "如何描述钢瓶状态？", a: "① fully charged = 充满的（正常状态）\n② partially charged = 部分充装（需要补充）\n③ discharged = 已释放（需要更换）\n④ low pressure = 低压（需要检查）\n✅ The cylinder is fully charged.（钢瓶已充满）\n✅ The cylinder needs recharging.（钢瓶需要补充）" },
    ],
    pattern: "钢瓶 + are fully charged",
    patternExamples: [
      { en: "The FM-200 cylinders are fully charged.", cn: "FM-200钢瓶已充满。", words: [] },
      { en: "The CO2 cylinders are fully charged.", cn: "CO2钢瓶已充满。", words: [] },
      { en: "The fire extinguishers are fully charged.", cn: "灭火器已充满。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }] },
    ],
    thinking: "气体灭火钢瓶维护要点：\n① 定期检查压力（每月）\n② 定期称重（每年）\n③ 检查泄漏（压力表）\n④ 记录检查结果\n⑤ 低于90%需补充",
    pronunciation: "cylinder 的重音在 cy 上。\ncharged 的 a 读 /ɑː/，不是 /æ/。",
    quiz: [
      { q: "FM-200钢瓶已充满，怎么说？", a: "The FM-200 cylinders are fully charged." },
    ],
  },
];

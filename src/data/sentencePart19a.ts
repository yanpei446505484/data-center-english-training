// EXPORTS: MOCK_SENTENCES_PART19A

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART19A: ISentence[] = [
  {
    id: 1401,
    en: "Please check the lithium battery system status.",
    cn: "请检查锂电池系统状态。",
    ipa: "/pliːz tʃɛk ðə ˈlɪθ.i.əm ˈbæt.ər.i ˈsɪs.təm ˈstæt.əs/",
    tags: ["第1401句", "锂电池系统", "★★★★★"],
    when: "锂电池系统是数据中心新型储能设备，交接时需首先确认整体运行状态。锂电池相比传统铅酸电池能量密度更高，管理要求更严格。",
    words: [
      { w: "lithium", ipa: "/ˈlɪθ.i.əm/", pos: "名词/形容词", cn: "锂", memory: "lithium = 锂（化学元素）。\nlithium battery = 锂电池，是现代数据中心储能的主流技术。\n锂电池优势：能量密度高、循环寿命长、充电速度快。", phonics: "lith 读 /lɪθ/，ium 读 /i.əm/，重音在第一音节。", collocations: [["lithium battery", "锂电池"], ["lithium-ion", "锂离子"], ["lithium system", "锂系统"]], examples: [["The lithium battery is fully charged.", "锂电池已充满电。"], ["Please check the lithium system.", "请检查锂系统。"]] },
      { w: "status", ipa: "/ˈstæt.əs/", pos: "名词", cn: "状态", memory: "status = 状态/状况。\n数据中心常用：system status / alarm status / battery status。\n交接时必须逐项确认各系统 status。", phonics: "stat 读 /stæt/，us 读 /əs/，重音在第一音节。", collocations: [["system status", "系统状态"], ["operating status", "运行状态"], ["alarm status", "告警状态"]], examples: [["What is the system status?", "系统状态是什么？"], ["Please confirm the status.", "请确认状态。"]] },
    ],
    phrases: [
      { p: "lithium battery system", ipa: "/ˈlɪθ.i.əm ˈbæt.ər.i ˈsɪs.təm/", cn: "锂电池系统", why: "lithium + battery + system = 锂电池系统。这是数据中心储能系统的核心组成部分，包括电池柜、BMS、冷却系统等。" },
    ],
    grammar: [
      { q: "check 和 inspect 有什么区别？", a: "check = 检查/查看（快速确认状态）\ninspect = 检验/检查（详细的物理检查）\n✅ Please check the system status.（请检查系统状态 → 查看监控数据）\n✅ Please inspect the battery cabinet.（请检查电池柜 → 现场检查设备）\n交接时用 check，因为是通过监控系统远程查看。" },
    ],
    pattern: "Please check the + 系统/设备 + status",
    patternExamples: [
      { en: "Please check the UPS status.", cn: "请检查UPS状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Please check the cooling system status.", cn: "请检查冷却系统状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please check the generator status.", cn: "请检查发电机状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
    ],
    thinking: "锂电池系统是数据中心UPS的重要组成部分。交接时检查顺序：① 整体系统状态（本句）→ ② 各电池柜状态（1402）→ ③ BMS通信（1403-1404）→ ④ SOC/SOH（1405-1408）→ ⑤ 温度（1409-1410）。\n锂电池需要BMS（电池管理系统）持续监控每个电芯的电压、温度、电流，确保安全运行。",
    pronunciation: "lithium 的 th 读清音 /θ/，不是 /ð/。\nbattery 的 t 读 /t/，不要吞音。\n节奏：Please CHECK ｜ the LITH-i-um ｜ BAT-ter-y ｜ SYS-tem STA-tus.",
    quiz: [
      { q: "请检查UPS系统状态，怎么说？", a: "Please check the UPS system status." },
      { q: "锂电池相比铅酸电池有什么优势？", a: "锂电池优势：① 能量密度高（同样容量体积更小、重量更轻）② 循环寿命长（可达5000-10000次循环）③ 充电速度快 ④ 自放电率低。缺点是成本较高，需要更严格的BMS管理。" },
    ],
  },
  {
    id: 1402,
    en: "All lithium battery cabinets are operating normally.",
    cn: "所有锂电池柜运行正常。",
    ipa: "/ɔːl ˈlɪθ.i.əm ˈbæt.ər.i ˈkæb.ɪ.nɪts ɑːr ˈɒp.ər.eɪ.tɪŋ ˈnɔːr.mə.li/",
    tags: ["第1402句", "电池柜状态", "★★★★★"],
    when: "确认整体系统状态后，逐个确认每台电池柜的运行状态。battery cabinet 是电池柜的标准术语。",
    words: [
      { w: "cabinet", ipa: "/ˈkæb.ɪ.nɪt/", pos: "名词", cn: "柜子；机柜", memory: "cabinet = 柜子/机柜。\n数据中心常用：battery cabinet（电池柜）/ server cabinet（服务器机柜）/ network cabinet（网络柜）。\n电池柜内放置多个电池模组和BMS。", phonics: "cab 读 /kæb/，i 读 /ɪ/，net 读 /nɪt/，重音在第一音节。", collocations: [["battery cabinet", "电池柜"], ["server cabinet", "服务器机柜"], ["cabinet door", "柜门"]], examples: [["The battery cabinet is locked.", "电池柜已锁定。"], ["Please open the cabinet door.", "请打开柜门。"]] },
    ],
    phrases: [
      { p: "operating normally", ipa: "/ˈɒp.ər.eɪ.tɪŋ ˈnɔːr.mə.li/", cn: "运行正常", why: "operating + normally = 正常运行。这是汇报设备状态的标准用语，表明设备在正常参数范围内工作。" },
    ],
    grammar: [
      { q: "are operating 和 operate 有什么区别？", a: "are operating = 正在运行（现在进行时，强调当前状态）\noperate = 运行（一般现在时，描述常态）\n✅ All cabinets are operating normally.（所有柜子正在正常运行 → 汇报当前状态）\n✅ The cabinets operate 24/7.（柜子24小时运行 → 描述常态）\n交接用进行时，关注'此刻的运行状态'。" },
    ],
    pattern: "All + 设备 + are operating normally",
    patternExamples: [
      { en: "All UPS systems are operating normally.", cn: "所有UPS系统运行正常。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "systems", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "All cooling units are operating normally.", cn: "所有冷却设备运行正常。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "All generators are operating normally.", cn: "所有发电机运行正常。", words: [{ w: "generators", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "汇报电池柜状态时的三种结论：\n① All cabinets operating normally（全部正常 → 最佳）\n② One cabinet has an alarm（一台有告警 → 需说明）\n③ Multiple cabinets affected（多台受影响 → 紧急）\n本句是第一种情况，也是交接中最常见的。",
    pronunciation: "cabinet 的 a 读 /æ/，不是 /eɪ/。\nnormally 的 or 读 /ɔːr/。\n节奏：All LITH-i-um ｜ BAT-ter-y ｜ CAB-i-nets ｜ are OP-er-a-ting ｜ NOR-mal-ly.",
    quiz: [
      { q: "所有UPS系统运行正常，怎么说？", a: "All UPS systems are operating normally." },
      { q: "battery cabinet 里通常包含什么？", a: "电池柜通常包含：① 多个电池模组（battery modules）② 电池管理系统（BMS）③ 温度传感器 ④ 电池断路器 ⑤ 冷却/通风系统。BMS负责监控每个电芯的电压、温度、电流。" },
    ],
  },
  {
    id: 1403,
    en: "Please check the battery management system.",
    cn: "请检查电池管理系统（BMS）。",
    ipa: "/pliːz tʃɛk ðə ˈbæt.ər.i ˈmæn.ɪdʒ.mənt ˈsɪs.təm/",
    tags: ["第1403句", "BMS检查", "★★★★★"],
    when: "BMS（Battery Management System）是锂电池的核心安全系统，负责监控每个电芯的电压、温度、电流，防止过充、过放、过热。",
    words: [
      { w: "management", ipa: "/ˈmæn.ɪdʒ.mənt/", pos: "名词", cn: "管理", memory: "① manage = 管理；② -ment = 名词后缀。\nmanagement = 管理/管理系统。\nBMS = Battery Management System = 电池管理系统。", phonics: "man 读 /mæn/，age 读 /ɪdʒ/，ment 读 /mənt/，重音在第一音节。", collocations: [["battery management", "电池管理"], ["system management", "系统管理"], ["energy management", "能源管理"]], examples: [["The BMS is working properly.", "BMS工作正常。"], ["Please check the management system.", "请检查管理系统。"]] },
    ],
    phrases: [
      { p: "battery management system (BMS)", ipa: "/ˈbæt.ər.i ˈmæn.ɪdʒ.mənt ˈsɪs.təm/", cn: "电池管理系统", why: "BMS 是锂电池系统的'大脑'，负责：① 监控每个电芯电压 ② 监控温度 ③ 控制充放电电流 ④ 均衡充电 ⑤ 故障保护。BMS异常时必须立即停止使用电池。" },
    ],
    grammar: [
      { q: "BMS 的全称是什么？", a: "BMS = Battery Management System = 电池管理系统。\n这是锂电池的核心安全组件，负责实时监控电池状态，防止过充、过放、过热、短路等危险情况。\nBMS通常包括：主控制器（master controller）+ 从控制器（slave controllers）+ 传感器（sensors）。" },
    ],
    pattern: "Please check the + 管理系统",
    patternExamples: [
      { en: "Please check the energy management system.", cn: "请检查能源管理系统。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please check the building management system.", cn: "请检查楼宇管理系统。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "building", ipa: "/ˈbɪldɪŋ/", cn: "建筑", phonics: "build 读 /bɪld/，ing 读 /ɪŋ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please check the network management system.", cn: "请检查网络管理系统。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "network", ipa: "/ˈnɛtwɜːrk/", cn: "网络", phonics: "net 读 /nɛt/，work 读 /wɜːrk/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
    ],
    thinking: "BMS是锂电池安全运行的关键。BMS的主要功能：\n① 电压监控：防止过充（overcharge）和过放（over-discharge）\n② 温度监控：防止热失控（thermal runaway）\n③ 电流监控：防止过流（over-current）\n④ 电芯均衡：确保所有电芯电压一致\n⑤ 故障保护：异常时自动断开电池。\nBMS通信中断 = 严重告警，必须立即处理。",
    pronunciation: "management 的 a 读 /æ/，不是 /eɪ/。\nBMS 读作字母 B-M-S：/biː ɛm ɛs/。\n节奏：Please CHECK ｜ the BAT-ter-y ｜ MAN-age-ment SYS-tem.",
    quiz: [
      { q: "BMS 的全称是什么？", a: "BMS = Battery Management System = 电池管理系统。" },
      { q: "BMS 的主要功能有哪些？", a: "BMS主要功能：① 电压监控（防止过充/过放）② 温度监控（防止热失控）③ 电流监控（防止过流）④ 电芯均衡（确保电压一致）⑤ 故障保护（异常时断开）。BMS是锂电池安全运行的'大脑'。" },
    ],
  },
  {
    id: 1404,
    en: "The battery management system is communicating normally.",
    cn: "电池管理系统通信正常。",
    ipa: "/ðə ˈbæt.ər.i ˈmæn.ɪdʒ.mənt ˈsɪs.təm ɪz kəˈmjuː.nɪ.keɪ.tɪŋ ˈnɔːr.mə.li/",
    tags: ["第1404句", "BMS通信", "★★★★★"],
    when: "确认BMS与监控系统之间的通信链路正常。BMS通信中断意味着无法获取电池实时数据，是严重安全隐患。",
    words: [
      { w: "communicating", ipa: "/kəˈmjuː.nɪ.keɪ.tɪŋ/", pos: "动词（现在分词）", cn: "通信；通讯", memory: "① communicate = 通信/沟通；② -ing = 正在进行。\ncommunicating = 正在通信。\nBMS communicating = BMS正在与监控系统交换数据。", phonics: "com 读 /kə/，mu 读 /mjuː/，ni 读 /nɪ/，cat 读 /keɪt/，ing 读 /ɪŋ/，重音在第二音节。", collocations: [["communicating normally", "通信正常"], ["communication link", "通信链路"], ["communication alarm", "通信告警"]], examples: [["The BMS is communicating with the UPS.", "BMS正在与UPS通信。"], ["Communication has been lost.", "通信已中断。"]] },
    ],
    phrases: [
      { p: "communicating normally", ipa: "/kəˈmjuː.nɪ.keɪ.tɪŋ ˈnɔːr.mə.li/", cn: "通信正常", why: "communicating + normally = 正常通信。BMS必须与UPS、监控系统保持实时通信，才能确保电池安全运行。通信中断 = 严重告警。" },
    ],
    grammar: [
      { q: "is communicating 和 communicates 有什么区别？", a: "is communicating = 正在通信（现在进行时，强调当前状态）\ncommunicates = 通信（一般现在时，描述功能/能力）\n✅ The BMS is communicating normally.（BMS正在正常通信 → 汇报当前状态）\n✅ The BMS communicates via CAN bus.（BMS通过CAN总线通信 → 描述通信方式）\n交接用进行时，确认'此刻通信是否正常'。" },
    ],
    pattern: "The + 系统 + is communicating normally",
    patternExamples: [
      { en: "The UPS is communicating normally.", cn: "UPS通信正常。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The monitoring system is communicating normally.", cn: "监控系统通信正常。", words: [{ w: "monitoring", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The controller is communicating normally.", cn: "控制器通信正常。", words: [{ w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "BMS通信是锂电池安全的第一道防线。通信中断的后果：\n① 无法获取电池实时数据（电压、温度、电流）\n② 无法远程控制电池（切入/切出）\n③ 无法及时发现异常\n④ 可能导致电池在无人监控状态下运行。\nBMS通信告警 = Critical Alarm，必须立即处理。\n常见通信方式：CAN总线 / Modbus / Ethernet。",
    pronunciation: "communicating 的重音在第二音节 /kəˈmjuː/。\nnormally 的 or 读 /ɔːr/。\n节奏：The BAT-ter-y ｜ MAN-age-ment SYS-tem ｜ is com-MU-ni-ca-ting ｜ NOR-mal-ly.",
    quiz: [
      { q: "UPS通信正常，怎么说？", a: "The UPS is communicating normally." },
      { q: "BMS通信中断为什么是严重告警？", a: "BMS通信中断是严重告警，因为：① 无法获取电池实时数据 ② 无法远程控制电池 ③ 无法及时发现过充/过放/过热 ④ 电池可能在无人监控状态下运行，存在热失控风险。必须立即排查通信链路。" },
    ],
  },
  {
    id: 1405,
    en: "Please check the battery state of charge.",
    cn: "请检查电池荷电状态（SOC）。",
    ipa: "/pliːz tʃɛk ðə ˈbæt.ər.i steɪt ɒv tʃɑːrdʒ/",
    tags: ["第1405句", "SOC检查", "★★★★★"],
    when: "SOC（State of Charge）是电池荷电状态，表示当前剩余电量百分比。交接时确认SOC是否在合理范围内（通常80%-100%）。",
    words: [
      { w: "state of charge", ipa: "/steɪt ɒv tʃɑːrdʒ/", pos: "名词短语", cn: "荷电状态（SOC）", memory: "state = 状态；charge = 充电/电荷。\nstate of charge = 荷电状态 = SOC = 电池剩余电量百分比。\nSOC 100% = 满电；SOC 0% = 完全放电。\n数据中心UPS电池SOC通常保持在90%以上。", phonics: "state 读 /steɪt/，charge 读 /tʃɑːrdʒ/。", collocations: [["state of charge (SOC)", "荷电状态"], ["charge level", "电量水平"], ["full charge", "满电"]], examples: [["The SOC is 95%.", "SOC是95%。"], ["Please check the charge level.", "请检查电量水平。"]] },
    ],
    phrases: [
      { p: "state of charge (SOC)", ipa: "/steɪt ɒv tʃɑːrdʒ/", cn: "荷电状态", why: "SOC是电池最重要的运行参数之一，表示电池当前剩余容量占总容量的百分比。数据中心UPS电池SOC应保持在80%-100%范围内，低于80%需要关注。" },
    ],
    grammar: [
      { q: "SOC 的全称是什么？", a: "SOC = State of Charge = 荷电状态 = 电池剩余电量百分比。\nSOC是电池管理系统（BMS）实时监控的核心参数。\nSOC 100% = 满电\nSOC 50% = 半电\nSOC 0% = 完全放电\n数据中心UPS电池通常保持在90%以上，确保有足够的备用时间。" },
    ],
    pattern: "Please check the + 参数",
    patternExamples: [
      { en: "Please check the voltage.", cn: "请检查电压。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }] },
      { en: "Please check the current.", cn: "请检查电流。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the temperature.", cn: "请检查温度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
    ],
    thinking: "SOC是电池健康运行的关键指标。SOC管理要点：\n① SOC > 90%：正常，备用时间充足\n② SOC 80%-90%：可接受，但需关注充电状态\n③ SOC < 80%：需要关注，可能充电系统有问题\n④ SOC < 50%：严重，备用时间不足，需立即处理\nSOC过低会导致：市电中断时UPS无法提供足够的备用时间。\nSOC估算方法：开路电压法 / 库仑计数法 / 阻抗法。",
    pronunciation: "state 的 a 读 /eɪ/，charge 的 ar 读 /ɑːr/。\nSOC 读作字母 S-O-C：/ɛs oʊ siː/。\n节奏：Please CHECK ｜ the BAT-ter-y ｜ STATE of CHARGE.",
    quiz: [
      { q: "SOC 的全称是什么？", a: "SOC = State of Charge = 荷电状态 = 电池剩余电量百分比。" },
      { q: "数据中心UPS电池的SOC应该保持在什么范围？", a: "数据中心UPS电池SOC应保持在80%-100%范围内。低于80%需要关注充电系统，低于50%是严重问题，备用时间不足。通常保持在90%以上，确保市电中断时有足够的备用时间。" },
    ],
  },
  {
    id: 1406,
    en: "The battery state of charge is ninety-eight percent.",
    cn: "当前电池荷电状态为98%。",
    ipa: "/ðə ˈbæt.ər.i steɪt ɒv tʃɑːrdʒ ɪz ˈnaɪn.ti eɪt pərˈsɛnt/",
    tags: ["第1406句", "SOC数值", "★★★★★"],
    when: "报告SOC具体数值。98%表示电池几乎满电，处于最佳备用状态。",
    words: [
      { w: "percent", ipa: "/pərˈsɛnt/", pos: "名词/副词", cn: "百分比", memory: "① per = 每；② cent = 百（拉丁语centum）。\npercent = 每百 = 百分比。\nSOC用百分比表示：98% = 98 percent。", phonics: "per 读 /pər/，cent 读 /sɛnt/，重音在第二音节。", collocations: [["percent", "百分比"], ["percentage", "百分率"], ["100 percent", "百分之百"]], examples: [["The SOC is 95 percent.", "SOC是95%。"], ["Load is at 80 percent.", "负载在80%。"]] },
    ],
    phrases: [
      { p: "ninety-eight percent", ipa: "/ˈnaɪn.ti eɪt pərˈsɛnt/", cn: "98%", why: "ninety-eight = 98；percent = 百分比。SOC 98%表示电池几乎满电，备用时间充足。这是交接中最常听到的理想数值。" },
    ],
    grammar: [
      { q: "如何用英语读百分比数字？", a: "百分比读法：数字 + percent\n98% = ninety-eight percent\n85% = eighty-five percent\n100% = one hundred percent 或 a hundred percent\n50% = fifty percent\n小数：98.5% = ninety-eight point five percent" },
    ],
    pattern: "The + 参数 + is + 数值 + percent",
    patternExamples: [
      { en: "The load is 65 percent.", cn: "负载是65%。", words: [{ w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
      { en: "The efficiency is 95 percent.", cn: "效率是95%。", words: [{ w: "efficiency", ipa: "/ɪˈfɪʃənsi/", cn: "效率", phonics: "ef 读 /ɪ/，ficiency 读 /fɪʃənsi/" }] },
      { en: "The capacity is 80 percent.", cn: "容量是80%。", words: [{ w: "capacity", ipa: "/kəˈpæsɪti/", cn: "容量", phonics: "ca 读 /kə/，pacity 读 /pæsɪti/" }] },
    ],
    thinking: "SOC 98%是理想状态，表明：\n① 电池充电系统正常工作\n② 电池备用时间充足（通常可支撑10-15分钟）\n③ 市电中断时UPS可以提供足够的过渡时间\n④ 发电机有足够时间启动并接管负载。\nSOC数值交接时，要同时确认充电电流是否正常，确保SOC能维持在高位。",
    pronunciation: "ninety 读 /ˈnaɪn.ti/，eight 读 /eɪt/，percent 读 /pərˈsɛnt/。\n节奏：The BAT-ter-y ｜ STATE of CHARGE ｜ is NINE-ty EIGHT ｜ per-CENT.",
    quiz: [
      { q: "负载是70%，怎么说？", a: "The load is seventy percent." },
      { q: "SOC 98%意味着什么？", a: "SOC 98%意味着：① 电池几乎满电 ② 备用时间充足（通常10-15分钟）③ 充电系统正常 ④ 市电中断时UPS可以提供足够的过渡时间，等待发电机启动。这是交接中最理想的SOC数值。" },
    ],
  },
  {
    id: 1407,
    en: "Please check the battery state of health.",
    cn: "请检查电池健康状态（SOH）。",
    ipa: "/pliːz tʃɛk ðə ˈbæt.ər.i steɪt ɒv hɛlθ/",
    tags: ["第1407句", "SOH检查", "★★★★★"],
    when: "SOH（State of Health）是电池健康状态，表示电池当前容量相对于新电池容量的百分比。SOH反映电池的老化程度。",
    words: [
      { w: "state of health", ipa: "/steɪt ɒv hɛlθ/", pos: "名词短语", cn: "健康状态（SOH）", memory: "state = 状态；health = 健康。\nstate of health = 健康状态 = SOH = 电池当前容量/新电池容量 × 100%。\nSOH 100% = 全新电池；SOH 80% = 容量衰减到80%。\nSOH < 80% 通常需要考虑更换电池。", phonics: "state 读 /steɪt/，health 读 /hɛlθ/。", collocations: [["state of health (SOH)", "健康状态"], ["battery health", "电池健康"], ["health check", "健康检查"]], examples: [["The SOH is 95%.", "SOH是95%。"], ["Please check the battery health.", "请检查电池健康状态。"]] },
    ],
    phrases: [
      { p: "state of health (SOH)", ipa: "/steɪt ɒv hɛlθ/", cn: "健康状态", why: "SOH是评估电池老化程度的关键指标。SOH = 当前容量/新电池容量 × 100%。SOH随使用时间逐渐下降，低于80%时电池性能明显下降，需要考虑更换。" },
    ],
    grammar: [
      { q: "SOC 和 SOH 有什么区别？", a: "SOC = State of Charge = 荷电状态 = 当前剩余电量（会随充放电变化）\nSOH = State of Health = 健康状态 = 电池老化程度（随时间缓慢下降）\n✅ SOC 98%：当前电量98%（可以充满也可以放空）\n✅ SOH 95%：电池容量衰减到原来的95%（不可逆）\nSOC是'今天吃了多少饭'，SOH是'身体还健不健康'。" },
    ],
    pattern: "Please check the + 健康/状态参数",
    patternExamples: [
      { en: "Please check the equipment health.", cn: "请检查设备健康状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }] },
      { en: "Please check the system health.", cn: "请检查系统健康状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please check the battery condition.", cn: "请检查电池状况。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "battery", ipa: "/ˈbætəri/", cn: "电池", phonics: "bat 读 /bæt/，tery 读 /təri/" }] },
    ],
    thinking: "SOH是电池生命周期管理的关键指标。SOH变化规律：\n① SOH 100%-90%：电池状态良好，性能接近新电池\n② SOH 90%-80%：电池开始老化，但仍可正常使用\n③ SOH 80%-70%：电池性能明显下降，需要加强监控\n④ SOH < 70%：电池严重老化，建议更换\n锂电池SOH下降原因：循环次数增加 / 高温运行 / 过充过放 / 自然老化。\n数据中心锂电池通常要求SOH > 80%。",
    pronunciation: "health 的 ea 读 /ɛ/，th 读清音 /θ/。\nSOH 读作字母 S-O-H：/ɛs oʊ eɪtʃ/。\n节奏：Please CHECK ｜ the BAT-ter-y ｜ STATE of HEALTH.",
    quiz: [
      { q: "SOC 和 SOH 有什么区别？", a: "SOC = State of Charge = 当前剩余电量（可变化）；SOH = State of Health = 电池老化程度（缓慢下降，不可逆）。SOC是'今天充了多少电'，SOH是'电池还能用多久'。" },
      { q: "SOH低于多少需要考虑更换电池？", a: "SOH低于80%时需要考虑更换电池。SOH 80%意味着电池容量已衰减到新电池的80%，性能明显下降。数据中心通常要求SOH > 80%，低于70%必须更换。" },
    ],
  },
  {
    id: 1408,
    en: "The battery state of health is normal.",
    cn: "电池健康状态正常。",
    ipa: "/ðə ˈbæt.ər.i steɪt ɒv hɛlθ ɪz ˈnɔːr.məl/",
    tags: ["第1408句", "SOH正常", "★★★★★"],
    when: "确认SOH在正常范围内（通常>80%），表明电池老化程度可接受，不需要更换。",
    words: [
      { w: "normal", ipa: "/ˈnɔːr.məl/", pos: "形容词", cn: "正常的", memory: "normal = 正常的/标准的。\nnormal range = 正常范围。\n电池SOH normal = SOH在可接受范围内（通常>80%）。", phonics: "nor 读 /nɔːr/，mal 读 /məl/，重音在第一音节。", collocations: [["normal range", "正常范围"], ["normal operation", "正常运行"], ["normal condition", "正常状态"]], examples: [["Everything is normal.", "一切正常。"], ["The parameters are within normal range.", "参数在正常范围内。"]] },
    ],
    phrases: [
      { p: "state of health is normal", ipa: "/steɪt ɒv hɛlθ ɪz ˈnɔːr.məl/", cn: "健康状态正常", why: "SOH normal = 电池健康状态在可接受范围内。这是交接中最理想的SOH结论，表明电池老化程度可控，不需要更换计划。" },
    ],
    grammar: [
      { q: "normal 和 good 有什么区别？", a: "normal = 正常的（在标准范围内）\ngood = 好的（优于平均）\n✅ SOH is normal.（SOH正常 → 在80%-100%范围内）\n✅ SOH is good.（SOH良好 → 可能在90%以上）\n交接用 normal，因为关注的是'是否在标准范围内'，而不是'有多好'。\nnormal 是工程术语，good 是日常用语。" },
    ],
    pattern: "The + 参数 + is normal",
    patternExamples: [
      { en: "The voltage is normal.", cn: "电压正常。", words: [{ w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The temperature is normal.", cn: "温度正常。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The current is normal.", cn: "电流正常。", words: [{ w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "SOH正常的含义：\n① 电池容量衰减在可接受范围内\n② 电池性能满足UPS备用时间要求\n③ 不需要立即更换电池\n④ 可以继续按计划使用。\nSOH异常时的处理：\n① SOH < 80%：加强监控，制定更换计划\n② SOH < 70%：立即安排更换\n③ SOH快速下降：调查原因（高温？过充？）。\n交接时SOH正常是最放心的消息。",
    pronunciation: "normal 的 or 读 /ɔːr/，不要读成 /ɒ/。\n节奏：The BAT-ter-y ｜ STATE of HEALTH ｜ is NOR-mal.",
    quiz: [
      { q: "电压正常，怎么说？", a: "The voltage is normal." },
      { q: "SOH正常意味着什么？", a: "SOH正常意味着：① 电池容量衰减在可接受范围内（通常>80%）② 电池性能满足UPS备用时间要求 ③ 不需要立即更换电池 ④ 可以继续按计划使用。这是交接中最理想的SOH结论。" },
    ],
  },
  {
    id: 1409,
    en: "Please check the battery temperature.",
    cn: "请检查电池温度。",
    ipa: "/pliːz tʃɛk ðə ˈbæt.ər.i ˈtɛm.pər.ə.tʃər/",
    tags: ["第1409句", "温度检查", "★★★★★"],
    when: "温度是锂电池安全运行的关键参数。锂电池对温度非常敏感，过高或过低都会影响性能和寿命。",
    words: [
      { w: "temperature", ipa: "/ˈtɛm.pər.ə.tʃər/", pos: "名词", cn: "温度", memory: "temperature = 温度。\n锂电池最佳工作温度：20°C-25°C。\n温度过高（>45°C）：加速老化，存在热失控风险。\n温度过低（<0°C）：充电困难，容量下降。", phonics: "tem 读 /tɛm/，per 读 /pər/，a 读 /ə/，ture 读 /tʃər/，重音在第一音节。", collocations: [["battery temperature", "电池温度"], ["ambient temperature", "环境温度"], ["temperature alarm", "温度告警"]], examples: [["The temperature is 25°C.", "温度是25°C。"], ["Please check the ambient temperature.", "请检查环境温度。"]] },
    ],
    phrases: [
      { p: "battery temperature", ipa: "/ˈbæt.ər.i ˈtɛm.pər.ə.tʃər/", cn: "电池温度", why: "电池温度是锂电池安全运行的关键参数。温度过高会加速老化、增加热失控风险；温度过低会影响充放电性能。BMS会实时监控每个电芯的温度。" },
    ],
    grammar: [
      { q: "温度单位怎么读？", a: "温度读法：数字 + degrees + Celsius/Fahrenheit\n25°C = twenty-five degrees Celsius\n77°F = seventy-seven degrees Fahrenheit\n数据中心通常使用摄氏度（Celsius）。\n口语中也可以省略 degrees：25°C = twenty-five Celsius。" },
    ],
    pattern: "Please check the + 温度类型",
    patternExamples: [
      { en: "Please check the ambient temperature.", cn: "请检查环境温度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
      { en: "Please check the inlet temperature.", cn: "请检查进风温度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
      { en: "Please check the outlet temperature.", cn: "请检查出风温度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
    ],
    thinking: "锂电池温度管理要点：\n① 最佳工作温度：20°C-25°C\n② 允许范围：0°C-45°C\n③ 温度过高（>45°C）：加速老化，BMS会降功率保护\n④ 温度过高（>60°C）：存在热失控风险，必须立即停止使用\n⑤ 温度过低（<0°C）：不能充电，容量下降\n⑥ 温差过大（>5°C）：电芯不均衡，需要关注。\n温度监控是BMS最重要的功能之一，防止热失控。",
    pronunciation: "temperature 的 tem 读 /tɛm/，不是 /tɪm/。\n节奏：Please CHECK ｜ the BAT-ter-y ｜ TEM-per-a-ture.",
    quiz: [
      { q: "请检查环境温度，怎么说？", a: "Please check the ambient temperature." },
      { q: "锂电池的最佳工作温度是多少？", a: "锂电池的最佳工作温度是20°C-25°C。允许范围是0°C-45°C。温度过高（>45°C）会加速老化，>60°C存在热失控风险。温度过低（<0°C）不能充电，容量下降。" },
    ],
  },
  {
    id: 1410,
    en: "All battery temperatures are within the normal range.",
    cn: "所有电池温度均在正常范围内。",
    ipa: "/ɔːl ˈbæt.ər.i ˈtɛm.pər.ə.tʃərz ɑːr ˈwɪð.ɪn ðə ˈnɔːr.məl reɪndʒ/",
    tags: ["第1410句", "温度正常", "★★★★★"],
    when: "确认所有电池电芯温度都在安全范围内。这是交接中最理想的温度结论。",
    words: [
      { w: "within", ipa: "/wɪðˈɪn/", pos: "介词", cn: "在…范围内", memory: "① with = 在…中；② in = 在…里。\nwithin = 在…范围内/不超过。\nwithin the normal range = 在正常范围内。", phonics: "with 读 /wɪð/，in 读 /ɪn/，重音在第二音节。", collocations: [["within range", "在范围内"], ["within limits", "在限制内"], ["within specification", "在规格内"]], examples: [["Temperature is within range.", "温度在范围内。"], ["Voltage is within limits.", "电压在限制内。"]] },
      { w: "range", ipa: "/reɪndʒ/", pos: "名词", cn: "范围", memory: "range = 范围/区间。\nnormal range = 正常范围。\n电池温度正常范围：20°C-25°C（最佳），0°C-45°C（允许）。", phonics: "range 读 /reɪndʒ/，a 读 /eɪ/。", collocations: [["normal range", "正常范围"], ["operating range", "工作范围"], ["temperature range", "温度范围"]], examples: [["The voltage is in the normal range.", "电压在正常范围内。"], ["Check the operating range.", "检查工作范围。"]] },
    ],
    phrases: [
      { p: "within the normal range", ipa: "/wɪðˈɪn ðə ˈnɔːr.məl reɪndʒ/", cn: "在正常范围内", why: "within + the + normal + range = 在正常范围内。这是工程领域描述参数状态的标准用语，表示数值在可接受的安全区间内。" },
    ],
    grammar: [
      { q: "within 和 in 有什么区别？", a: "within = 在…范围内（强调不超过边界）\nin = 在…里面（强调位置）\n✅ Temperature is within the normal range.（温度在正常范围内 → 强调不超标）\n✅ The sensor is in the cabinet.（传感器在柜子里 → 强调位置）\n描述参数时用 within，因为关注的是'是否在安全边界内'。" },
    ],
    pattern: "All + 参数 + are within the normal range",
    patternExamples: [
      { en: "All voltages are within the normal range.", cn: "所有电压在正常范围内。", words: [{ w: "voltages", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }, { w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "All currents are within the normal range.", cn: "所有电流在正常范围内。", words: [{ w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }, { w: "range", ipa: "/reɪndʒ/", cn: "范围", phonics: "range 读 /reɪndʒ/" }] },
      { en: "All pressures are within the normal range.", cn: "所有压力在正常范围内。", words: [{ w: "pressures", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }, { w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "电池温度正常的含义：\n① 所有电芯温度在安全范围内（20°C-25°C最佳）\n② 电芯之间温差小（<5°C），均衡良好\n③ 冷却系统工作正常\n④ 环境温度适宜\n⑤ 不存在热失控风险。\n温度异常的处理：\n① 单个电芯温度高：检查该电芯是否过充/内阻增大\n② 整体温度高：检查冷却系统/环境温度\n③ 温差大：检查电芯均衡状态。",
    pronunciation: "within 的 th 读浊音 /ð/，range 的 a 读 /eɪ/。\n节奏：All BAT-ter-y ｜ TEM-per-a-tures ｜ are with-IN ｜ the NOR-mal RANGE.",
    quiz: [
      { q: "所有电压在正常范围内，怎么说？", a: "All voltages are within the normal range." },
      { q: "电池温度正常意味着什么？", a: "电池温度正常意味着：① 所有电芯温度在安全范围内 ② 电芯之间温差小，均衡良好 ③ 冷却系统工作正常 ④ 环境温度适宜 ⑤ 不存在热失控风险。这是交接中最理想的温度结论。" },
    ],
  },
  {
    id: 1411,
    en: "Please connect Battery Cabinet No.1 to the system.",
    cn: "请将1号电池柜接入系统。",
    ipa: "/pliːz kəˈnɛkt ˈbæt.ər.i ˈkæb.ɪ.nɪt ˈnʌm.bər wʌn tuː ðə ˈsɪs.təm/",
    tags: ["第1411句", "电池切入", "★★★★★"],
    when: "将指定电池柜接入UPS系统，使其参与供电。接入前必须确认电池柜状态正常、BMS通信正常。",
    words: [
      { w: "connect", ipa: "/kəˈnɛkt/", pos: "动词", cn: "连接；接入", memory: "① con- = 一起；② nect = 绑定（拉丁语nectere）。\nconnect = 连接/接入。\n电池柜接入系统 = connect battery cabinet to the system。", phonics: "con 读 /kə/，nect 读 /nɛkt/，重音在第二音节。", collocations: [["connect to", "连接到"], ["connect the cable", "连接电缆"], ["connect the system", "接入系统"]], examples: [["Connect the battery to the UPS.", "将电池连接到UPS。"], ["Please connect the cable.", "请连接电缆。"]] },
    ],
    phrases: [
      { p: "connect ... to the system", ipa: "/kəˈnɛkt ... tuː ðə ˈsɪs.təm/", cn: "将…接入系统", why: "connect + 设备 + to + the + system = 将设备接入系统。电池柜接入系统后，会参与UPS的充放电，提供备用电源。" },
    ],
    grammar: [
      { q: "connect 和 plug in 有什么区别？", a: "connect = 连接/接入（正式，可以是电气连接或系统接入）\nplug in = 插上（口语，指物理插头插入插座）\n✅ Connect the battery cabinet to the system.（将电池柜接入系统 → 正式操作）\n✅ Plug in the power cable.（插上电源线 → 物理连接）\n电池柜接入是正式操作，用 connect。" },
    ],
    pattern: "Please connect + 设备 + to + 目标",
    patternExamples: [
      { en: "Please connect the generator to the bus.", cn: "请将发电机接入母线。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "Please connect the load to the UPS.", cn: "请将负载连接到UPS。", words: [{ w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }] },
      { en: "Please connect the sensor to the controller.", cn: "请将传感器连接到控制器。", words: [{ w: "sensor", ipa: "/ˈsɛnsər/", cn: "传感器", phonics: "sens 读 /sɛns/，or 读 /ər/" }] },
    ],
    thinking: "电池柜接入系统的操作流程：\n① 确认电池柜状态正常（SOC、SOH、温度、BMS通信）\n② 确认电池断路器处于分闸状态\n③ 合上电池断路器\n④ 确认BMS通信正常\n⑤ 确认电池开始充放电\n⑥ 记录接入时间。\n接入前必须逐项检查，确保电池柜健康状态良好。",
    pronunciation: "connect 的 c 读 /k/，nect 读 /nɛkt/。\nNo.1 读作 number one：/ˈnʌm.bər wʌn/。\n节奏：Please con-NECT ｜ BAT-ter-y CAB-i-net ｜ NUM-ber ONE ｜ to the SYS-tem.",
    quiz: [
      { q: "请将发电机接入母线，怎么说？", a: "Please connect the generator to the bus." },
      { q: "电池柜接入系统前需要确认哪些条件？", a: "电池柜接入前需确认：① 电池柜状态正常 ② SOC充足（>80%）③ SOH正常（>80%）④ 温度正常（20°C-25°C）⑤ BMS通信正常 ⑥ 电池断路器处于分闸状态。所有条件满足后才能接入。" },
    ],
  },
  {
    id: 1412,
    en: "Battery Cabinet No.1 has been connected successfully.",
    cn: "1号电池柜已成功接入系统。",
    ipa: "/ˈbæt.ər.i ˈkæb.ɪ.nɪt ˈnʌm.bər wʌn hæz biːn kəˈnɛk.tɪd səkˈsɛs.fəl.i/",
    tags: ["第1412句", "接入成功", "★★★★★"],
    when: "确认电池柜已成功接入系统，开始参与UPS充放电。这是操作完成的确认用语。",
    words: [
      { w: "successfully", ipa: "/səkˈsɛs.fəl.i/", pos: "副词", cn: "成功地", memory: "① success = 成功；② -ful = 充满的；③ -ly = 副词后缀。\nsuccessfully = 成功地。\nhas been connected successfully = 已成功接入。", phonics: "suc 读 /sək/，cess 读 /sɛs/，ful 读 /fəl/，ly 读 /li/，重音在第二音节。", collocations: [["connected successfully", "成功接入"], ["completed successfully", "成功完成"], ["operating successfully", "成功运行"]], examples: [["The operation was completed successfully.", "操作已成功完成。"], ["The system is running successfully.", "系统正在成功运行。"]] },
    ],
    phrases: [
      { p: "has been connected successfully", ipa: "/hæz biːn kəˈnɛk.tɪd səkˈsɛs.fəl.i/", cn: "已成功接入", why: "has been + 过去分词 + successfully = 已成功被…。这是现在完成时被动语态，表示操作已经完成，当前状态是'已接入'。" },
    ],
    grammar: [
      { q: "has been connected 是什么语法？", a: "has been connected = 已经被接入（现在完成时被动语态）\n结构：has/have + been + 过去分词\n✅ The cabinet has been connected.（电池柜已被接入 → 强调结果）\n✅ We connected the cabinet.（我们接入了电池柜 → 强调动作）\n交接中用被动语态，关注'操作完成了没有'，而不是'谁做的'。" },
    ],
    pattern: "设备 + has been + 操作 + successfully",
    patternExamples: [
      { en: "The UPS has been started successfully.", cn: "UPS已成功启动。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "started", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "The generator has been tested successfully.", cn: "发电机已成功测试。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "tested", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "The system has been restored successfully.", cn: "系统已成功恢复。", words: [{ w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
    ],
    thinking: "电池柜接入成功后的确认步骤：\n① 确认电池断路器已合闸\n② 确认BMS通信正常\n③ 确认电池开始充电（充电电流正常）\n④ 确认电池状态显示'在线'\n⑤ 记录接入时间和操作人员\n⑥ 通知控制室操作完成。\n接入成功后，电池柜会参与UPS的充放电循环，提供备用电源。",
    pronunciation: "successfully 的重音在第二音节 /səkˈsɛs/。\n节奏：BAT-ter-y CAB-i-net ｜ NUM-ber ONE ｜ has been con-NEC-ted ｜ suc-CESS-ful-ly.",
    quiz: [
      { q: "UPS已成功启动，怎么说？", a: "The UPS has been started successfully." },
      { q: "电池柜接入成功后需要确认哪些事项？", a: "接入成功后需确认：① 电池断路器已合闸 ② BMS通信正常 ③ 电池开始充电（充电电流正常）④ 电池状态显示'在线' ⑤ 记录接入时间和操作人员 ⑥ 通知控制室操作完成。" },
    ],
  },
  {
    id: 1413,
    en: "Please disconnect Battery Cabinet No.1 from the system.",
    cn: "请将1号电池柜退出系统。",
    ipa: "/pliːz ˌdɪs.kəˈnɛkt ˈbæt.ər.i ˈkæb.ɪ.nɪt ˈnʌm.bər wʌn frɒm ðə ˈsɪs.təm/",
    tags: ["第1413句", "电池切出", "★★★★★"],
    when: "将指定电池柜从UPS系统中断开，停止参与充放电。通常在维护、更换或隔离故障电池时执行。",
    words: [
      { w: "disconnect", ipa: "/ˌdɪs.kəˈnɛkt/", pos: "动词", cn: "断开；退出", memory: "① dis- = 不/分离；② connect = 连接。\ndisconnect = 断开连接/退出。\n电池柜退出系统 = disconnect battery cabinet from the system。\ndisconnect 是 connect 的反义词。", phonics: "dis 读 /dɪs/，con 读 /kə/，nect 读 /nɛkt/，重音在第三音节。", collocations: [["disconnect from", "从…断开"], ["disconnect the power", "断开电源"], ["disconnect the cable", "断开电缆"]], examples: [["Disconnect the battery from the system.", "将电池从系统中断开。"], ["Please disconnect the power.", "请断开电源。"]] },
    ],
    phrases: [
      { p: "disconnect ... from the system", ipa: "/ˌdɪs.kəˈnɛkt ... frɒm ðə ˈsɪs.təm/", cn: "将…从系统中退出", why: "disconnect + 设备 + from + the + system = 将设备从系统中退出。电池柜退出后，不再参与UPS充放电，可以安全维护。" },
    ],
    grammar: [
      { q: "disconnect 和 unplug 有什么区别？", a: "disconnect = 断开/退出（正式，可以是电气断开或系统退出）\nunplug = 拔掉（口语，指物理拔出插头）\n✅ Disconnect the battery cabinet from the system.（将电池柜退出系统 → 正式操作）\n✅ Unplug the power cable.（拔掉电源线 → 物理断开）\n电池柜退出是正式操作，用 disconnect。" },
    ],
    pattern: "Please disconnect + 设备 + from + 目标",
    patternExamples: [
      { en: "Please disconnect the generator from the bus.", cn: "请将发电机从母线断开。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "Please disconnect the load from the UPS.", cn: "请将负载从UPS断开。", words: [{ w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }] },
      { en: "Please disconnect the sensor from the controller.", cn: "请将传感器从控制器断开。", words: [{ w: "sensor", ipa: "/ˈsɛnsər/", cn: "传感器", phonics: "sens 读 /sɛns/，or 读 /ər/" }] },
    ],
    thinking: "电池柜退出系统的操作流程：\n① 确认其他电池柜可以承担负载\n② 分闸电池断路器\n③ 确认电池停止充放电\n④ 确认BMS仍然通信（监控离线电池）\n⑤ 执行LOTO（锁定挂牌）\n⑥ 记录退出时间和原因。\n退出后电池柜处于隔离状态，可以安全维护或更换。",
    pronunciation: "disconnect 的重音在第三音节 /kəˈnɛkt/。\nfrom 读 /frɒm/，不要读成 /frʌm/。\n节奏：Please dis-con-NECT ｜ BAT-ter-y CAB-i-net ｜ NUM-ber ONE ｜ from the SYS-tem.",
    quiz: [
      { q: "请将发电机从母线断开，怎么说？", a: "Please disconnect the generator from the bus." },
      { q: "电池柜退出系统后需要执行什么安全措施？", a: "电池柜退出后需执行：① 确认电池断路器已分闸 ② 执行LOTO（锁定挂牌）③ 确认电池停止充放电 ④ 记录退出时间和原因。LOTO是防止误操作的关键安全措施。" },
    ],
  },
  {
    id: 1414,
    en: "Battery Cabinet No.1 has been disconnected successfully.",
    cn: "1号电池柜已成功退出系统。",
    ipa: "/ˈbæt.ər.i ˈkæb.ɪ.nɪt ˈnʌm.bər wʌn hæz biːn ˌdɪs.kəˈnɛk.tɪd səkˈsɛs.fəl.i/",
    tags: ["第1414句", "退出成功", "★★★★★"],
    when: "确认电池柜已成功从系统中断开，处于隔离状态。可以开始维护或更换操作。",
    words: [
      { w: "disconnected", ipa: "/ˌdɪs.kəˈnɛk.tɪd/", pos: "动词（过去分词）", cn: "已断开；已退出", memory: "① disconnect = 断开；② -ed = 过去分词。\ndisconnected = 已断开/已退出。\nhas been disconnected = 已被退出。", phonics: "dis 读 /dɪs/，con 读 /kə/，nect 读 /nɛkt/，ed 读 /ɪd/。", collocations: [["disconnected successfully", "成功退出"], ["disconnected from power", "断开电源"], ["safely disconnected", "安全断开"]], examples: [["The cabinet has been disconnected.", "柜子已退出。"], ["Power has been disconnected.", "电源已断开。"]] },
    ],
    phrases: [
      { p: "has been disconnected successfully", ipa: "/hæz biːn ˌdɪs.kəˈnɛk.tɪd səkˈsɛs.fəl.i/", cn: "已成功退出", why: "has been + disconnected + successfully = 已成功被退出。现在完成时被动语态，表示退出操作已完成，电池柜处于隔离状态。" },
    ],
    grammar: [
      { q: "disconnected 和 offline 有什么区别？", a: "disconnected = 已断开（物理断开连接）\noffline = 离线（不在运行状态，但不一定物理断开）\n✅ The cabinet has been disconnected.（电池柜已断开 → 物理隔离）\n✅ The cabinet is offline.（电池柜离线 → 不在运行，可能只是软件状态）\n维护时用 disconnected，因为需要物理隔离确保安全。" },
    ],
    pattern: "设备 + has been disconnected successfully",
    patternExamples: [
      { en: "The UPS has been disconnected successfully.", cn: "UPS已成功断开。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }] },
      { en: "The generator has been disconnected successfully.", cn: "发电机已成功断开。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "The load has been disconnected successfully.", cn: "负载已成功断开。", words: [{ w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
    ],
    thinking: "电池柜退出成功后的下一步：\n① 执行LOTO（锁定挂牌）→ 防止误合闸\n② 确认电池柜处于安全隔离状态\n③ 可以开始维护/更换操作\n④ 维护完成后，按流程重新接入\n⑤ 记录退出时间、原因、操作人员。\n退出成功 = 电池柜已安全隔离，可以开始下一步工作。",
    pronunciation: "disconnected 的重音在第三音节 /kəˈnɛk/。\n节奏：BAT-ter-y CAB-i-net ｜ NUM-ber ONE ｜ has been dis-con-NEC-ted ｜ suc-CESS-ful-ly.",
    quiz: [
      { q: "UPS已成功断开，怎么说？", a: "The UPS has been disconnected successfully." },
      { q: "电池柜退出成功后可以做什么？", a: "退出成功后可以：① 执行LOTO（锁定挂牌）② 确认电池柜处于安全隔离状态 ③ 开始维护/更换操作 ④ 维护完成后按流程重新接入。退出成功意味着电池柜已安全隔离，可以开始下一步工作。" },
    ],
  },
  {
    id: 1415,
    en: "Please verify the battery cabinet status.",
    cn: "请确认电池柜状态。",
    ipa: "/pliːz ˈvɛr.ɪ.faɪ ðə ˈbæt.ər.i ˈkæb.ɪ.nɪt ˈstæt.əs/",
    tags: ["第1415句", "状态确认", "★★★★★"],
    when: "在切入/切出操作前后，都需要确认电池柜的当前状态。verify 比 check 更正式，强调核实确认。",
    words: [
      { w: "verify", ipa: "/ˈvɛr.ɪ.faɪ/", pos: "动词", cn: "确认；核实", memory: "① ver = 真实（拉丁语verus）；② -ify = 使成为。\nverify = 确认真实性/核实。\nverify 比 check 更正式，强调'确认无误'。\n数据中心操作中常用 verify 表示正式确认。", phonics: "ver 读 /vɛr/，i 读 /ɪ/，fy 读 /faɪ/，重音在第一音节。", collocations: [["verify the status", "确认状态"], ["verify the result", "确认结果"], ["verify the operation", "确认操作"]], examples: [["Please verify the alarm status.", "请确认告警状态。"], ["Verify the isolation.", "确认隔离。"]] },
    ],
    phrases: [
      { p: "verify the status", ipa: "/ˈvɛr.ɪ.faɪ ðə ˈstæt.əs/", cn: "确认状态", why: "verify + the + status = 确认状态。verify 强调'核实确认无误'，比 check 更正式，用于关键操作的确认环节。" },
    ],
    grammar: [
      { q: "verify 和 check 有什么区别？", a: "verify = 确认/核实（正式，强调确认无误）\ncheck = 检查/查看（日常，查看状态）\n✅ Please verify the cabinet status.（请确认电池柜状态 → 正式确认）\n✅ Please check the cabinet status.（请查看电池柜状态 → 日常查看）\n关键操作（切入/切出/LOTO）用 verify，日常巡检用 check。" },
    ],
    pattern: "Please verify the + 对象",
    patternExamples: [
      { en: "Please verify the isolation points.", cn: "请确认隔离点。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
      { en: "Please verify the LOTO.", cn: "请确认锁定挂牌。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
      { en: "Please verify the calibration.", cn: "请确认校准。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
    ],
    thinking: "verify 在数据中心操作中的使用场景：\n① 操作前确认：verify the status / verify the isolation\n② 操作中确认：verify each step / verify the result\n③ 操作后确认：verify completion / verify restoration\nverify 是双人确认制度（two-person rule）的关键环节：一人操作，另一人 verify。\nverify 的结果必须记录在操作日志中。",
    pronunciation: "verify 的 ver 读 /vɛr/，不是 /vɪr/。\n节奏：Please VER-i-fy ｜ the BAT-ter-y ｜ CAB-i-net STA-tus.",
    quiz: [
      { q: "请确认隔离点，怎么说？", a: "Please verify the isolation points." },
      { q: "verify 和 check 在操作中有什么区别？", a: "verify = 确认/核实（正式，强调确认无误）；check = 检查/查看（日常，查看状态）。关键操作（切入/切出/LOTO）用 verify，日常巡检用 check。verify 是双人确认制度的关键环节。" },
    ],
  },
  {
    id: 1416,
    en: "The battery cabinet is now isolated safely.",
    cn: "电池柜已经安全隔离。",
    ipa: "/ðə ˈbæt.ər.i ˈkæb.ɪ.nɪt ɪz naʊ ˈaɪ.sə.leɪ.tɪd ˈseɪf.li/",
    tags: ["第1416句", "安全隔离", "★★★★★"],
    when: "确认电池柜已安全隔离，可以开始维护操作。isolate 是电气操作的关键安全步骤。",
    words: [
      { w: "isolated", ipa: "/ˈaɪ.sə.leɪ.tɪd/", pos: "动词（过去分词）", cn: "已隔离", memory: "① isolate = 隔离；② -ed = 过去分词。\nisolated = 已隔离的。\n电池柜隔离 = 断开所有电气连接 + LOTO + 确认无电压。\nisolate 是电气安全操作的核心步骤。", phonics: "i 读 /aɪ/，so 读 /sə/，late 读 /leɪt/，ed 读 /ɪd/，重音在第一音节。", collocations: [["isolated safely", "安全隔离"], ["electrically isolated", "电气隔离"], ["isolation point", "隔离点"]], examples: [["The equipment has been isolated.", "设备已隔离。"], ["Verify the isolation.", "确认隔离。"]] },
      { w: "safely", ipa: "/ˈseɪf.li/", pos: "副词", cn: "安全地", memory: "① safe = 安全的；② -ly = 副词后缀。\nsafely = 安全地。\nisolated safely = 安全地隔离。", phonics: "safe 读 /seɪf/，ly 读 /li/。", collocations: [["safely isolated", "安全隔离"], ["safely removed", "安全移除"], ["operate safely", "安全操作"]], examples: [["The equipment is safely isolated.", "设备已安全隔离。"], ["Work safely.", "安全工作。"]] },
    ],
    phrases: [
      { p: "isolated safely", ipa: "/ˈaɪ.sə.leɪ.tɪd ˈseɪf.li/", cn: "安全隔离", why: "isolated + safely = 安全隔离。安全隔离是电气操作的必要前提，包括：断开电源 + LOTO + 确认无电压。只有安全隔离后才能开始维护工作。" },
    ],
    grammar: [
      { q: "is now isolated 是什么语法？", a: "is now isolated = 现在已经被隔离（被动语态 + 时间副词）\n结构：is + now + 过去分词\n✅ The cabinet is now isolated.（电池柜现在已隔离 → 当前状态）\n✅ We isolated the cabinet.（我们隔离了电池柜 → 动作）\nnow 强调'从此刻起'的状态变化。" },
    ],
    pattern: "设备 + is now isolated safely",
    patternExamples: [
      { en: "The UPS is now isolated safely.", cn: "UPS已安全隔离。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }] },
      { en: "The generator is now isolated safely.", cn: "发电机已安全隔离。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "The circuit is now isolated safely.", cn: "电路已安全隔离。", words: [{ w: "circuit", ipa: "/ˈsɜːrkɪt/", cn: "电路", phonics: "cir 读 /sɜːr/，cuit 读 /kɪt/" }] },
    ],
    thinking: "安全隔离（isolation）的完整步骤：\n① 断开电源（分闸断路器）\n② 执行LOTO（锁定挂牌）\n③ 确认无电压（用验电器测试）\n④ 接地（合上接地开关）\n⑤ 设置安全围栏和警示牌。\n安全隔离是电气操作的'黄金法则'，任何维护工作前必须完成。未安全隔离的设备严禁接触。",
    pronunciation: "isolated 的 i 读 /aɪ/，不是 /ɪ/。\nsafely 的 a 读 /eɪ/。\n节奏：The BAT-ter-y CAB-i-net ｜ is NOW ｜ I-so-la-ted SAFE-ly.",
    quiz: [
      { q: "UPS已安全隔离，怎么说？", a: "The UPS is now isolated safely." },
      { q: "安全隔离的完整步骤是什么？", a: "安全隔离步骤：① 断开电源（分闸断路器）② 执行LOTO（锁定挂牌）③ 确认无电压（验电器测试）④ 接地（合接地开关）⑤ 设置安全围栏和警示牌。任何维护工作前必须完成安全隔离。" },
    ],
  },
  {
    id: 1417,
    en: "Please confirm that the battery breaker is open.",
    cn: "请确认电池断路器已经分闸。",
    ipa: "/pliːz kənˈfɜːrm ðæt ðə ˈbæt.ər.i ˈbreɪ.kər ɪz ˈoʊ.pən/",
    tags: ["第1417句", "断路器分闸", "★★★★★"],
    when: "确认电池断路器处于分闸（断开）状态，是安全隔离的关键确认步骤。breaker open = 断路器分闸 = 电路断开。",
    words: [
      { w: "breaker", ipa: "/ˈbreɪ.kər/", pos: "名词", cn: "断路器", memory: "① break = 断开；② -er = 名词后缀。\nbreaker = 断路器（circuit breaker 的简称）。\n断路器是电路的保护开关，可以手动或自动断开电路。\nbreaker open = 断路器分闸 = 电路断开。", phonics: "break 读 /breɪk/，er 读 /ər/，重音在第一音节。", collocations: [["circuit breaker", "断路器"], ["breaker open", "断路器分闸"], ["breaker closed", "断路器合闸"]], examples: [["The breaker is open.", "断路器已分闸。"], ["Please close the breaker.", "请合上断路器。"]] },
      { w: "open", ipa: "/ˈoʊ.pən/", pos: "形容词", cn: "断开的；分闸的", memory: "open = 打开的/断开的。\n在电气领域：breaker open = 断路器分闸 = 电路断开 = 无电流流过。\nopen 是 close 的反义词。", phonics: "o 读 /oʊ/，pen 读 /pən/，重音在第一音节。", collocations: [["breaker open", "断路器分闸"], ["switch open", "开关断开"], ["circuit open", "电路断开"]], examples: [["The breaker is open.", "断路器已分闸。"], ["Confirm the switch is open.", "确认开关已断开。"]] },
    ],
    phrases: [
      { p: "breaker is open", ipa: "/ˈbreɪ.kər ɪz ˈoʊ.pən/", cn: "断路器已分闸", why: "breaker + is + open = 断路器已分闸。分闸意味着电路断开，无电流流过，是安全隔离的必要条件。" },
    ],
    grammar: [
      { q: "open 在电气领域是什么意思？", a: "open = 断开的/分闸的（电气领域专用含义）\n✅ Breaker is open.（断路器已分闸 → 电路断开）\n✅ Switch is open.（开关已断开 → 电路断开）\n注意：open 在日常英语中是'打开的'，但在电气领域是'断开的'，意思相反。\n关门 = close the door；分闸 = open the breaker。" },
    ],
    pattern: "Please confirm that the + 设备 + is open",
    patternExamples: [
      { en: "Please confirm that the switch is open.", cn: "请确认开关已断开。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }, { w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "Please confirm that the valve is open.", cn: "请确认阀门已打开。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }, { w: "valve", ipa: "/vælv/", cn: "阀门", phonics: "valve 读 /vælv/" }] },
      { en: "Please confirm that the contact is open.", cn: "请确认触点已断开。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }, { w: "contact", ipa: "/ˈkɒntækt/", cn: "联系", phonics: "con 读 /kɒn/，tact 读 /tækt/" }] },
    ],
    thinking: "断路器状态是电气操作的核心确认项：\n① Breaker open = 断路器分闸 = 电路断开 = 无电流\n② Breaker closed = 断路器合闸 = 电路接通 = 有电流\n安全隔离要求：breaker must be open + LOTO applied。\n断路器位置指示：通常有机械指示器（红/绿标志）。\n确认断路器状态必须'看指示器 + 看电流表'双重确认。",
    pronunciation: "breaker 的 ea 读 /eɪ/，open 的 o 读 /oʊ/。\n节奏：Please con-FIRM ｜ that the BAT-ter-y ｜ BREAK-er ｜ is O-pen.",
    quiz: [
      { q: "请确认开关已断开，怎么说？", a: "Please confirm that the switch is open." },
      { q: "breaker open 和 breaker closed 分别是什么意思？", a: "Breaker open = 断路器分闸 = 电路断开 = 无电流流过；Breaker closed = 断路器合闸 = 电路接通 = 有电流流过。安全隔离要求 breaker must be open。" },
    ],
  },
  {
    id: 1418,
    en: "Please confirm that the battery breaker is closed.",
    cn: "请确认电池断路器已经合闸。",
    ipa: "/pliːz kənˈfɜːrm ðæt ðə ˈbæt.ər.i ˈbreɪ.kər ɪz kloʊzd/",
    tags: ["第1418句", "断路器合闸", "★★★★★"],
    when: "确认电池断路器处于合闸（接通）状态，通常在电池柜接入系统后确认。breaker closed = 断路器合闸 = 电路接通。",
    words: [
      { w: "closed", ipa: "/kloʊzd/", pos: "形容词", cn: "合闸的；闭合的", memory: "① close = 关闭/闭合；② -d = 过去分词/形容词。\nclosed = 闭合的/合闸的。\n在电气领域：breaker closed = 断路器合闸 = 电路接通 = 有电流流过。\nclosed 是 open 的反义词。", phonics: "close 读 /kloʊz/，d 读 /d/。", collocations: [["breaker closed", "断路器合闸"], ["switch closed", "开关闭合"], ["circuit closed", "电路闭合"]], examples: [["The breaker is closed.", "断路器已合闸。"], ["Confirm the breaker is closed.", "确认断路器已合闸。"]] },
    ],
    phrases: [
      { p: "breaker is closed", ipa: "/ˈbreɪ.kər ɪz kloʊzd/", cn: "断路器已合闸", why: "breaker + is + closed = 断路器已合闸。合闸意味着电路接通，电流可以流过，电池柜参与系统充放电。" },
    ],
    grammar: [
      { q: "closed 和 open 在电气领域的区别？", a: "closed = 合闸的/闭合的（电路接通，有电流）\nopen = 分闸的/断开的（电路断开，无电流）\n✅ Breaker is closed.（断路器已合闸 → 电路接通）\n✅ Breaker is open.（断路器已分闸 → 电路断开）\n注意：close the door = 关门；close the breaker = 合闸断路器。\n电气领域的 open/close 与日常用语含义相反。" },
    ],
    pattern: "Please confirm that the + 设备 + is closed",
    patternExamples: [
      { en: "Please confirm that the switch is closed.", cn: "请确认开关已闭合。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }, { w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "Please confirm that the valve is closed.", cn: "请确认阀门已关闭。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }, { w: "valve", ipa: "/vælv/", cn: "阀门", phonics: "valve 读 /vælv/" }] },
      { en: "Please confirm that the contact is closed.", cn: "请确认触点已闭合。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }, { w: "contact", ipa: "/ˈkɒntækt/", cn: "联系", phonics: "con 读 /kɒn/，tact 读 /tækt/" }] },
    ],
    thinking: "断路器合闸是电池柜接入系统的最后一步：\n① 确认电池柜状态正常（SOC、SOH、温度、BMS）\n② 确认安全隔离已解除（LOTO已移除）\n③ 合闸断路器（close the breaker）\n④ 确认断路器已合闸（本句）\n⑤ 确认电池开始充放电\n⑥ 确认BMS通信正常。\n合闸后电池柜正式参与系统运行。",
    pronunciation: "closed 的 close 读 /kloʊz/，d 读 /d/。\n节奏：Please con-FIRM ｜ that the BAT-ter-y ｜ BREAK-er ｜ is CLOSED.",
    quiz: [
      { q: "请确认开关已闭合，怎么说？", a: "Please confirm that the switch is closed." },
      { q: "断路器合闸后需要确认哪些事项？", a: "合闸后需确认：① 断路器已合闸（位置指示）② 电池开始充放电（电流表有读数）③ BMS通信正常 ④ 电池状态显示'在线' ⑤ 无异常告警。所有确认完成后，电池柜正式参与系统运行。" },
    ],
  },
  {
    id: 1419,
    en: "No abnormal battery alarms have been reported.",
    cn: "没有发现异常电池告警。",
    ipa: "/noʊ æbˈnɔːr.məl ˈbæt.ər.i əˈlɑːrmz hæv biːn rɪˈpɔːr.tɪd/",
    tags: ["第1419句", "无告警", "★★★★★"],
    when: "确认电池系统没有异常告警，是交接中最理想的结论之一。abnormal alarm 指非预期的、异常的告警。",
    words: [
      { w: "abnormal", ipa: "/æbˈnɔːr.məl/", pos: "形容词", cn: "异常的", memory: "① ab- = 不/远离；② normal = 正常的。\nabnormal = 不正常的/异常的。\nabnormal alarm = 异常告警（非预期的告警）。\nabnormal 是 normal 的反义词。", phonics: "ab 读 /æb/，nor 读 /nɔːr/，mal 读 /məl/，重音在第二音节。", collocations: [["abnormal alarm", "异常告警"], ["abnormal condition", "异常状态"], ["abnormal temperature", "异常温度"]], examples: [["No abnormal alarms.", "没有异常告警。"], ["Abnormal temperature detected.", "检测到异常温度。"]] },
      { w: "reported", ipa: "/rɪˈpɔːr.tɪd/", pos: "动词（过去分词）", cn: "已报告", memory: "① report = 报告；② -ed = 过去分词。\nreported = 已报告的。\nhave been reported = 已经被报告。", phonics: "re 读 /rɪ/，port 读 /pɔːrt/，ed 读 /ɪd/，重音在第二音节。", collocations: [["reported alarm", "已报告告警"], ["no alarms reported", "无告警报告"], ["report the issue", "报告问题"]], examples: [["No issues have been reported.", "没有问题被报告。"], ["The alarm was reported.", "告警已报告。"]] },
    ],
    phrases: [
      { p: "no abnormal alarms", ipa: "/noʊ æbˈnɔːr.məl əˈlɑːrmz/", cn: "没有异常告警", why: "no + abnormal + alarms = 没有异常告警。这是交接中最理想的告警状态结论，表明电池系统运行正常，无需关注。" },
    ],
    grammar: [
      { q: "have been reported 是什么语法？", a: "have been reported = 已经被报告（现在完成时被动语态）\n结构：have/has + been + 过去分词\n✅ No alarms have been reported.（没有告警被报告 → 强调结果）\n✅ We reported the alarm.（我们报告了告警 → 强调动作）\nNo + 主语 + have been reported = 没有…被报告。" },
    ],
    pattern: "No abnormal + 对象 + have been reported",
    patternExamples: [
      { en: "No abnormal temperatures have been reported.", cn: "没有异常温度被报告。", words: [{ w: "abnormal", ipa: "/æbˈnɔːrməl/", cn: "异常", phonics: "ab 读 /æb/，normal 读 /nɔːrməl/" }, { w: "temperatures", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "reported", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
      { en: "No abnormal currents have been reported.", cn: "没有异常电流被报告。", words: [{ w: "abnormal", ipa: "/æbˈnɔːrməl/", cn: "异常", phonics: "ab 读 /æb/，normal 读 /nɔːrməl/" }, { w: "reported", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
      { en: "No abnormal vibrations have been reported.", cn: "没有异常振动被报告。", words: [{ w: "abnormal", ipa: "/æbˈnɔːrməl/", cn: "异常", phonics: "ab 读 /æb/，normal 读 /nɔːrməl/" }, { w: "reported", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
    ],
    thinking: "电池告警管理要点：\n① 无异常告警 = 系统正常，可以继续运行\n② 有告警 = 需要确认告警类型、严重程度、处理措施\n③ 告警分类：Critical（严重）/ Warning（警告）/ Info（信息）\n④ 告警处理流程：确认 → 调查 → 处理 → 恢复 → 记录\n⑤ 异常告警必须记录在交接日志中。\n'No abnormal alarms' 是交接中最常听到的理想结论。",
    pronunciation: "abnormal 的 ab 读 /æb/，不是 /əb/。\nreported 的 or 读 /ɔːr/。\n节奏：No ab-NOR-mal ｜ BAT-ter-y a-LARMS ｜ have been re-POR-ted.",
    quiz: [
      { q: "没有异常温度被报告，怎么说？", a: "No abnormal temperatures have been reported." },
      { q: "电池告警分为哪几类？", a: "电池告警分为三类：① Critical（严重）：必须立即处理，如热失控、通信中断 ② Warning（警告）：需要关注，如温度偏高、SOC偏低 ③ Info（信息）：仅供参考，如充电完成、自检通过。" },
    ],
  },
  {
    id: 1420,
    en: "The battery cabinet is ready for maintenance.",
    cn: "电池柜已经可以进行维护。",
    ipa: "/ðə ˈbæt.ər.i ˈkæb.ɪ.nɪt ɪz ˈrɛd.i fɔːr ˈmeɪn.tən.əns/",
    tags: ["第1420句", "准备维护", "★★★★★"],
    when: "确认电池柜已完成所有安全准备工作，可以开始维护操作。这是切入切出流程的最终确认。",
    words: [
      { w: "ready", ipa: "/ˈrɛd.i/", pos: "形容词", cn: "准备好的", memory: "ready = 准备好的/就绪的。\nbe ready for = 为…做好准备。\nready for maintenance = 可以进行维护。", phonics: "read 读 /rɛd/，y 读 /i/，重音在第一音节。", collocations: [["ready for", "为…准备好"], ["ready to start", "准备开始"], ["ready for use", "可以使用"]], examples: [["The equipment is ready for use.", "设备可以使用。"], ["We are ready to start.", "我们准备开始。"]] },
      { w: "maintenance", ipa: "/ˈmeɪn.tən.əns/", pos: "名词", cn: "维护", memory: "① maintain = 维护；② -ance = 名词后缀。\nmaintenance = 维护/保养。\n电池柜维护包括：检查、清洁、更换部件等。", phonics: "main 读 /meɪn/，ten 读 /tən/，ance 读 /əns/，重音在第一音节。", collocations: [["preventive maintenance", "预防性维护"], ["corrective maintenance", "纠正性维护"], ["maintenance schedule", "维护计划"]], examples: [["Maintenance is scheduled.", "维护已安排。"], ["Please update the maintenance record.", "请更新维护记录。"]] },
    ],
    phrases: [
      { p: "ready for maintenance", ipa: "/ˈrɛd.i fɔːr ˈmeɪn.tən.əns/", cn: "可以进行维护", why: "ready + for + maintenance = 可以进行维护。这是安全准备工作完成后的最终确认，表明电池柜已安全隔离，可以开始维护操作。" },
    ],
    grammar: [
      { q: "ready for 和 ready to 有什么区别？", a: "ready for + 名词 = 为某事做好准备\nready to + 动词 = 准备好做某事\n✅ The cabinet is ready for maintenance.（电池柜可以进行维护 → for + 名词）\n✅ We are ready to start maintenance.（我们准备开始维护 → to + 动词）\n两种表达都可以，ready for 更简洁。" },
    ],
    pattern: "设备 + is ready for + 操作",
    patternExamples: [
      { en: "The UPS is ready for testing.", cn: "UPS可以进行测试。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "testing", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "The generator is ready for inspection.", cn: "发电机可以进行检查。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "The system is ready for operation.", cn: "系统可以运行。", words: [{ w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operation", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }] },
    ],
    thinking: "电池柜'可以进行维护'的前提条件：\n① 电池柜已退出系统（disconnected）\n② 断路器已分闸（breaker open）\n③ LOTO已执行（locked and tagged）\n④ 已确认无电压（verified no voltage）\n⑤ 接地已连接（grounded）\n⑥ 安全围栏已设置（barriers installed）\n⑦ 无异常告警（no abnormal alarms）。\n所有条件满足后，才能宣布'ready for maintenance'。",
    pronunciation: "ready 的 ea 读 /ɛ/，maintenance 的 ain 读 /eɪ/。\n节奏：The BAT-ter-y CAB-i-net ｜ is READ-y ｜ for MAIN-te-nance.",
    quiz: [
      { q: "UPS可以进行测试，怎么说？", a: "The UPS is ready for testing." },
      { q: "电池柜'可以进行维护'需要满足哪些条件？", a: "需要满足：① 电池柜已退出系统 ② 断路器已分闸 ③ LOTO已执行 ④ 已确认无电压 ⑤ 接地已连接 ⑥ 安全围栏已设置 ⑦ 无异常告警。所有条件满足后才能宣布'ready for maintenance'。" },
    ],
  },
];

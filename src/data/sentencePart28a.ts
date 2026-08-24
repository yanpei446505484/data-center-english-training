// EXPORTS: MOCK_SENTENCES_PART28A

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART28A: ISentence[] = [
  // ── 场景001：网络与弱电系统 - 系统状态检查 (1761-1770) ──
  {
    id: 1761,
    en: "Please check the network system status.",
    cn: "请检查网络系统状态。",
    ipa: "/pliːz tʃɛk ðə ˈnɛtwɜːrk ˈsɪstəm ˈstætəs/",
    tags: ["第1761句", "网络系统", "★★★★★"],
    when: "网络系统是数据中心IT基础设施的核心，包括交换机、路由器、防火墙等网络设备。交接时首先检查网络系统整体运行状态。",
    words: [
      { w: "network system", ipa: "/ˈnɛtwɜːrk ˈsɪstəm/", pos: "名词短语", cn: "网络系统", memory: "network = 网络；system = 系统。\nnetwork system = 网络系统，是数据中心IT基础设施的核心。\n包括交换机、路由器、防火墙、服务器等网络设备。", phonics: "net 读 /nɛt/，work 读 /wɜːrk/，system 读 /ˈsɪstəm/。", collocations: [["network system", "网络系统"], ["network infrastructure", "网络基础设施"], ["network topology", "网络拓扑"]], examples: [["Check the network system.", "检查网络系统。"], ["The network system is stable.", "网络系统稳定。"]] },
      { w: "status", ipa: "/ˈstætəs/", pos: "名词", cn: "状态", memory: "status = 状态/情况。\n在工程领域，status 指设备当前的工作状况。\n交接时必须确认所有系统的 status。", phonics: "sta 读 /ˈstæ/，tus 读 /təs/，重音在第一音节。", collocations: [["system status", "系统状态"], ["current status", "当前状态"], ["check status", "检查状态"]], examples: [["What is the current status?", "当前状态是什么？"], ["Check the system status.", "检查系统状态。"]] },
      { w: "check", ipa: "/tʃɛk/", pos: "动词", cn: "检查/查看", memory: "check = 检查/查看（快速确认状态）。\n在交接场景中，check 是最常用的动作动词。\n与 inspect（详细物理检查）不同，check 侧重远程查看。", phonics: "ch 读 /tʃ/，eck 读 /ɛk/。", collocations: [["check status", "检查状态"], ["check equipment", "检查设备"], ["check system", "检查系统"]], examples: [["Please check the system.", "请检查系统。"], ["Check the alarm status.", "检查告警状态。"]] },
    ],
    phrases: [
      { p: "network system status", ipa: "/ˈnɛtwɜːrk ˈsɪstəm ˈstætəs/", cn: "网络系统状态", why: "network system + status = 网络系统状态。交接时必须首先确认网络系统的整体运行状况，确保所有网络设备正常工作。" },
    ],
    grammar: [
      { q: "check 和 inspect 有什么区别？", a: "check = 检查/查看（快速确认状态）\ninspect = 检验/检查（详细的物理检查）\n✅ Please check the network system status.（请检查网络系统状态 → 查看网管系统）\n✅ Please inspect the network equipment.（请检查网络设备 → 现场巡检设备）\n交接时用 check，因为是通过网管系统远程查看。" },
    ],
    pattern: "Please check the + 系统 + status",
    patternExamples: [
      { en: "Please check the security system status.", cn: "请检查安防系统状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "security", ipa: "/sɪˈkjʊrɪti/", cn: "安防", phonics: "se 读 /sɪ/，curity 读 /kjʊrɪti/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please check the fire protection system status.", cn: "请检查消防系统状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "protection", ipa: "/prəˈtɛkʃən/", cn: "保护", phonics: "pro 读 /prə/，tection 读 /tɛkʃən/" }] },
      { en: "Please check the HVAC system status.", cn: "请检查暖通系统状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "hvac", ipa: "/ˌeɪtʃˈviːˈeɪˈsiː/", cn: "暖通", phonics: "H-V-A-C 逐字母读" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
    ],
    thinking: "网络系统是数据中心IT基础设施的核心。交接检查顺序：① 整体状态（本句）→ ② 核心交换机（1763-1764）→ ③ 接入交换机（1765-1766）→ ④ 路由器（1767-1768）→ ⑤ 防火墙（1769-1770）。\n数据中心网络系统必须24小时不间断运行，确保业务数据传输畅通。",
    pronunciation: "network 的 net 读 /nɛt/，不是 /niːt/。\nstatus 的 a 读 /æ/，不是 /eɪ/。",
    quiz: [
      { q: "请检查安防系统状态，怎么说？", a: "Please check the security system status." },
      { q: "数据中心网络系统包括哪些设备？", a: "数据中心网络系统通常包括：① 核心交换机（Core Switches）② 接入交换机（Edge/Access Switches）③ 路由器（Routers）④ 防火墙（Firewalls）⑤ 服务器（Servers）⑥ 光纤链路（Fiber Optic Links）。" },
    ],
  },
  {
    id: 1762,
    en: "The network system is operating normally.",
    cn: "网络系统运行正常。",
    ipa: "/ðə ˈnɛtwɜːrk ˈsɪstəm ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1762句", "网络系统状态", "★★★★★"],
    when: "确认网络系统整体运行状态正常。这是交接时最期望得到的汇报结果。",
    words: [
      { w: "network system", ipa: "/ˈnɛtwɜːrk ˈsɪstəm/", pos: "名词短语", cn: "网络系统", memory: "network = 网络；system = 系统。\nnetwork system = 网络系统，是数据中心IT基础设施的核心。\n包括交换机、路由器、防火墙等网络设备。", phonics: "net 读 /nɛt/，work 读 /wɜːrk/，system 读 /ˈsɪstəm/。", collocations: [["network system", "网络系统"], ["network infrastructure", "网络基础设施"], ["network monitoring", "网络监控"]], examples: [["The network system is stable.", "网络系统稳定。"], ["Check the network system.", "检查网络系统。"]] },
      { w: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", pos: "动词短语", cn: "运行正常", memory: "operating = 运行中；normally = 正常地。\noperating normally = 正常运行，表示设备在正常参数范围内工作。\n这是交接时最期望的状态汇报。", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/，normally 读 /ˈnɔːrməli/。", collocations: [["operating normally", "正常运行"], ["functioning normally", "正常运作"], ["running normally", "正常运转"]], examples: [["All systems are operating normally.", "所有系统正常运行。"], ["The equipment is operating normally.", "设备运行正常。"]] },
    ],
    phrases: [
      { p: "network system is operating normally", ipa: "/ˈnɛtwɜːrk ˈsɪstəm ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "网络系统运行正常", why: "network system + is operating normally = 网络系统运行正常。这是汇报系统状态的标准用语，表明所有网络设备都在正常工作。" },
    ],
    grammar: [
      { q: "is operating 和 operates 有什么区别？", a: "is operating = 正在运行（现在进行时，强调当前状态）\noperates = 运行（一般现在时，描述常态）\n✅ The network system is operating normally.（网络系统正在正常运行 → 汇报当前状态）\n✅ The network system operates 24/7.（网络系统24小时运行 → 描述常态）\n交接用进行时，关注'此刻的运行状态'。" },
    ],
    pattern: "系统 + is operating normally",
    patternExamples: [
      { en: "The security system is operating normally.", cn: "安防系统运行正常。", words: [{ w: "security", ipa: "/sɪˈkjʊrɪti/", cn: "安防", phonics: "se 读 /sɪ/，curity 读 /kjʊrɪti/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "The fire protection system is operating normally.", cn: "消防系统运行正常。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "protection", ipa: "/prəˈtɛkʃən/", cn: "保护", phonics: "pro 读 /prə/，tection 读 /tɛkʃən/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "The power system is operating normally.", cn: "电力系统运行正常。", words: [{ w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
    ],
    thinking: "汇报网络系统状态的三种结论：\n① Operating normally（正常运行 → 最佳）\n② Has an alarm（有告警 → 需进一步排查）\n③ Has a fault（有故障 → 需维修处理）\n交接时最期望听到'operating normally'。",
    pronunciation: "normally 的 or 读 /ɔːr/，不是 /oʊ/。\noperating 的 o 读 /ɒ/，不是 /oʊ/。",
    quiz: [
      { q: "安防系统运行正常，怎么说？", a: "The security system is operating normally." },
      { q: "汇报网络系统状态的三种结论是什么？", a: "① Operating normally（正常运行）② Has an alarm（有告警）③ Has a fault（有故障）。交接时最期望听到'operating normally'。" },
    ],
  },
  {
    id: 1763,
    en: "Please check the core switches.",
    cn: "请检查核心交换机。",
    ipa: "/pliːz tʃɛk ðə kɔːr ˈswɪtʃɪz/",
    tags: ["第1763句", "核心交换机", "★★★★★"],
    when: "核心交换机（Core Switch）是数据中心网络的主干设备，连接所有接入交换机和路由器。交接时必须检查核心交换机的运行状态。",
    words: [
      { w: "core switches", ipa: "/kɔːr ˈswɪtʃɪz/", pos: "名词短语", cn: "核心交换机", memory: "core = 核心/主干；switches = 交换机（switch的复数）。\ncore switches = 核心交换机，是数据中心网络的主干设备。\n负责汇聚所有接入交换机的流量，连接到路由器和防火墙。", phonics: "core 读 /kɔːr/，switches 读 /ˈswɪtʃɪz/，复数加 -es。", collocations: [["core switch", "核心交换机"], ["core network", "核心网络"], ["switch management", "交换机管理"]], examples: [["Check the core switches.", "检查核心交换机。"], ["The core switches are online.", "核心交换机在线。"]] },
      { w: "check", ipa: "/tʃɛk/", pos: "动词", cn: "检查/查看", memory: "check = 检查/查看（快速确认状态）。\n在交接场景中，check 是最常用的动作动词。\n与 inspect（详细物理检查）不同，check 侧重远程查看。", phonics: "ch 读 /tʃ/，eck 读 /ɛk/。", collocations: [["check switches", "检查交换机"], ["check routers", "检查路由器"], ["check status", "检查状态"]], examples: [["Please check the equipment.", "请检查设备。"], ["Check the alarm list.", "检查告警列表。"]] },
    ],
    phrases: [
      { p: "core switches", ipa: "/kɔːr ˈswɪtʃɪz/", cn: "核心交换机", why: "core + switches = 核心交换机。数据中心网络通常采用三层架构：核心层、汇聚层、接入层。核心交换机位于最顶层，负责高速数据转发。" },
    ],
    grammar: [
      { q: "core switch 和 edge switch 有什么区别？", a: "core switch = 核心交换机（位于网络核心层，高速转发）\nedge switch = 接入交换机（位于网络接入层，连接终端设备）\n✅ Please check the core switches.（请检查核心交换机 → 主干设备）\n✅ Please check the edge switches.（请检查接入交换机 → 终端接入设备）\n核心交换机数量少（通常2台冗余），接入交换机数量多。" },
    ],
    pattern: "Please check the + 网络设备",
    patternExamples: [
      { en: "Please check the edge switches.", cn: "请检查接入交换机。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "switches", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "Please check the routers.", cn: "请检查路由器。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the firewalls.", cn: "请检查防火墙。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "核心交换机是数据中心网络的'心脏'。数据中心通常采用N+1冗余配置，至少2台核心交换机互为备份。\n交接检查重点：① 设备在线状态 ② CPU/内存利用率 ③ 端口状态 ④ 告警信息。\n核心交换机故障会导致大面积网络中断，是交接时的重点检查对象。",
    pronunciation: "core 的 o 读 /ɔː/，不是 /oʊ/。\nswitches 的 sw 读 /sw/，不是 /s/。",
    quiz: [
      { q: "请检查接入交换机，怎么说？", a: "Please check the edge switches." },
      { q: "核心交换机和接入交换机有什么区别？", a: "核心交换机（Core Switch）位于网络核心层，负责高速数据转发，数量少（通常2台冗余）；接入交换机（Edge/Access Switch）位于网络接入层，连接服务器等终端设备，数量多。核心交换机故障影响范围大，接入交换机故障影响范围小。" },
    ],
  },
  {
    id: 1764,
    en: "All core switches are operating normally.",
    cn: "所有核心交换机运行正常。",
    ipa: "/ɔːl kɔːr ˈswɪtʃɪz ɑːr ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1764句", "核心交换机状态", "★★★★★"],
    when: "确认所有核心交换机运行状态正常。这是交接时最期望的汇报结果。",
    words: [
      { w: "core switches", ipa: "/kɔːr ˈswɪtʃɪz/", pos: "名词短语", cn: "核心交换机", memory: "core = 核心/主干；switches = 交换机（switch的复数）。\ncore switches = 核心交换机，数据中心网络的主干设备。\n通常有2台互为冗余。", phonics: "core 读 /kɔːr/，switches 读 /ˈswɪtʃɪz/。", collocations: [["core switch", "核心交换机"], ["core network", "核心网络"], ["switch redundancy", "交换机冗余"]], examples: [["The core switches are online.", "核心交换机在线。"], ["Check the core switches.", "检查核心交换机。"]] },
      { w: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", pos: "动词短语", cn: "运行正常", memory: "operating = 运行中；normally = 正常地。\noperating normally = 正常运行，表示设备在正常参数范围内工作。\n交接时最期望的状态汇报。", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/，normally 读 /ˈnɔːrməli/。", collocations: [["operating normally", "正常运行"], ["functioning normally", "正常运作"], ["running normally", "正常运转"]], examples: [["All systems are operating normally.", "所有系统正常运行。"], ["The switches are operating normally.", "交换机运行正常。"]] },
      { w: "all", ipa: "/ɔːl/", pos: "限定词", cn: "所有/全部", memory: "all = 所有/全部。\n在交接时强调'所有设备'都正常，而不是'部分设备'。\nAll core switches = 所有核心交换机（强调完整性）。", phonics: "all 读 /ɔːl/，长元音。", collocations: [["all systems", "所有系统"], ["all devices", "所有设备"], ["all switches", "所有交换机"]], examples: [["All systems are normal.", "所有系统正常。"], ["All devices are online.", "所有设备在线。"]] },
    ],
    phrases: [
      { p: "all core switches are operating normally", ipa: "/ɔːl kɔːr ˈswɪtʃɪz ɑːr ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "所有核心交换机运行正常", why: "all + core switches + are operating normally = 所有核心交换机运行正常。强调完整性，交接时必须确认所有设备都正常。" },
    ],
    grammar: [
      { q: "all 和 some 在交接时有什么区别？", a: "all = 所有（强调完整性，所有设备都正常）\nsome = 一些（部分设备正常，可能有问题设备）\n✅ All core switches are operating normally.（所有核心交换机正常 → 最佳汇报）\n✅ Some core switches have alarms.（一些核心交换机有告警 → 需关注）\n交接时用 all 表示'全部正常'，用 some 表示'部分异常'。" },
    ],
    pattern: "All + 设备 + are operating normally",
    patternExamples: [
      { en: "All edge switches are operating normally.", cn: "所有接入交换机运行正常。", words: [{ w: "switches", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "All routers are operating normally.", cn: "所有路由器运行正常。", words: [{ w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "All firewalls are operating normally.", cn: "所有防火墙运行正常。", words: [{ w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "汇报核心交换机状态时，必须强调'all'（所有），因为数据中心通常有2台核心交换机互为冗余。\n如果只说'core switches are operating normally'，可能会让人疑惑是'全部'还是'部分'。\n交接时明确说'all core switches'，表示两台核心交换机都正常。",
    pronunciation: "all 的 a 读 /ɔː/，不是 /æ/。\nswitches 的 es 读 /ɪz/，不是 /s/。",
    quiz: [
      { q: "所有接入交换机运行正常，怎么说？", a: "All edge switches are operating normally." },
      { q: "交接时为什么要强调'all'？", a: "因为数据中心通常有多台同类设备（如2台核心交换机互为冗余）。说'all core switches'明确表示'全部正常'，避免让人疑惑是'全部'还是'部分'正常。" },
    ],
  },
  {
    id: 1765,
    en: "Please check the edge switches.",
    cn: "请检查接入交换机。",
    ipa: "/pliːz tʃɛk ðə ɛdʒ ˈswɪtʃɪz/",
    tags: ["第1765句", "接入交换机", "★★★★★"],
    when: "接入交换机（Edge/Access Switch）位于网络接入层，直接连接服务器等终端设备。交接时必须检查接入交换机的运行状态。",
    words: [
      { w: "edge switches", ipa: "/ɛdʒ ˈswɪtʃɪz/", pos: "名词短语", cn: "接入交换机", memory: "edge = 边缘/接入；switches = 交换机（switch的复数）。\nedge switches = 接入交换机，位于网络接入层。\n直接连接服务器、存储设备等终端设备。", phonics: "edge 读 /ɛdʒ/，switches 读 /ˈswɪtʃɪz/。", collocations: [["edge switch", "接入交换机"], ["access switch", "接入交换机"], ["switch port", "交换机端口"]], examples: [["Check the edge switches.", "检查接入交换机。"], ["The edge switches are online.", "接入交换机在线。"]] },
      { w: "check", ipa: "/tʃɛk/", pos: "动词", cn: "检查/查看", memory: "check = 检查/查看（快速确认状态）。\n在交接场景中，check 是最常用的动作动词。\n交接时用 check 通过网管系统远程查看设备状态。", phonics: "ch 读 /tʃ/，eck 读 /ɛk/。", collocations: [["check switches", "检查交换机"], ["check ports", "检查端口"], ["check alarms", "检查告警"]], examples: [["Please check the equipment.", "请检查设备。"], ["Check the port status.", "检查端口状态。"]] },
    ],
    phrases: [
      { p: "edge switches", ipa: "/ɛdʒ ˈswɪtʃɪz/", cn: "接入交换机", why: "edge + switches = 接入交换机。也称为 access switches（接入交换机），位于网络架构的最底层，直接连接终端设备。" },
    ],
    grammar: [
      { q: "edge switch 和 access switch 有什么区别？", a: "edge switch = 接入交换机（强调位于网络边缘）\naccess switch = 接入交换机（强调提供接入功能）\n✅ Please check the edge switches.（请检查接入交换机 → 强调位置）\n✅ Please check the access switches.（请检查接入交换机 → 强调功能）\n两者在实际使用中可互换，都指接入层交换机。" },
    ],
    pattern: "Please check the + 网络设备",
    patternExamples: [
      { en: "Please check the core switches.", cn: "请检查核心交换机。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "switches", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "Please check the routers.", cn: "请检查路由器。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the firewalls.", cn: "请检查防火墙。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "接入交换机是数据中心网络的'末梢'。数据中心通常有大量接入交换机（几十台甚至上百台），每台连接几十台服务器。\n交接检查重点：① 设备在线状态 ② 端口利用率 ③ 告警信息。\n接入交换机故障通常只影响局部网络，不会影响整个数据中心。",
    pronunciation: "edge 的 e 读 /ɛ/，不是 /iː/。\nswitches 的 sw 读 /sw/，不是 /s/。",
    quiz: [
      { q: "请检查核心交换机，怎么说？", a: "Please check the core switches." },
      { q: "接入交换机故障会影响多大范围？", a: "接入交换机故障通常只影响局部网络（连接的几十台服务器），不会影响整个数据中心。因为接入交换机位于网络架构的最底层，故障范围有限。核心交换机故障才会导致大面积网络中断。" },
    ],
  },
  {
    id: 1766,
    en: "All edge switches are online.",
    cn: "所有接入交换机均在线。",
    ipa: "/ɔːl ɛdʒ ˈswɪtʃɪz ɑːr ˈɒnlaɪn/",
    tags: ["第1766句", "接入交换机状态", "★★★★★"],
    when: "确认所有接入交换机都在线。online 表示设备已连接并正常工作。",
    words: [
      { w: "edge switches", ipa: "/ɛdʒ ˈswɪtʃɪz/", pos: "名词短语", cn: "接入交换机", memory: "edge = 边缘/接入；switches = 交换机（switch的复数）。\nedge switches = 接入交换机，位于网络接入层。\n直接连接服务器等终端设备。", phonics: "edge 读 /ɛdʒ/，switches 读 /ˈswɪtʃɪz/。", collocations: [["edge switch", "接入交换机"], ["access switch", "接入交换机"], ["switch status", "交换机状态"]], examples: [["The edge switches are up.", "接入交换机已启动。"], ["Check the edge switches.", "检查接入交换机。"]] },
      { w: "online", ipa: "/ˈɒnlaɪn/", pos: "形容词/副词", cn: "在线/联网", memory: "on = 在...上；line = 线路/网络。\nonline = 在线/联网，表示设备已连接到网络并正常工作。\n反义词 offline = 离线/断网。", phonics: "on 读 /ɒn/，line 读 /laɪn/。", collocations: [["online", "在线"], ["offline", "离线"], ["go online", "上线"]], examples: [["All devices are online.", "所有设备在线。"], ["The server is offline.", "服务器离线。"]] },
      { w: "all", ipa: "/ɔːl/", pos: "限定词", cn: "所有/全部", memory: "all = 所有/全部。\n强调所有设备都在线，而不是部分。\n接入交换机数量多，强调 all 很重要。", phonics: "all 读 /ɔːl/，长元音。", collocations: [["all switches", "所有交换机"], ["all devices", "所有设备"], ["all ports", "所有端口"]], examples: [["All switches are up.", "所有交换机已启动。"], ["All devices are online.", "所有设备在线。"]] },
    ],
    phrases: [
      { p: "all edge switches are online", ipa: "/ɔːl ɛdʒ ˈswɪtʃɪz ɑːr ˈɒnlaɪn/", cn: "所有接入交换机均在线", why: "all edge switches + are online = 所有接入交换机均在线。online 表示设备已连接并正常工作，是网络设备状态的标准用语。" },
    ],
    grammar: [
      { q: "online 和 operating normally 有什么区别？", a: "online = 在线（设备已连接，基本状态）\noperating normally = 运行正常（设备不仅在线，而且参数正常）\n✅ All edge switches are online.（所有接入交换机在线 → 基本状态）\n✅ All edge switches are operating normally.（所有接入交换机运行正常 → 详细状态）\nonline 是最低要求，operating normally 是更高标准。" },
    ],
    pattern: "All + 设备 + are online",
    patternExamples: [
      { en: "All servers are online.", cn: "所有服务器在线。", words: [{ w: "servers", ipa: "/ˈsɜːrvər/", cn: "服务器", phonics: "serv 读 /sɜːrv/，er 读 /ər/" }] },
      { en: "All storage devices are online.", cn: "所有存储设备在线。", words: [{ w: "devices", ipa: "/dɪˈvaɪs/", cn: "设备", phonics: "de 读 /dɪ/，vice 读 /vaɪs/" }] },
      { en: "All network devices are online.", cn: "所有网络设备在线。", words: [{ w: "network", ipa: "/ˈnɛtwɜːrk/", cn: "网络", phonics: "net 读 /nɛt/，work 读 /wɜːrk/" }, { w: "devices", ipa: "/dɪˈvaɪs/", cn: "设备", phonics: "de 读 /dɪ/，vice 读 /vaɪs/" }] },
    ],
    thinking: "汇报接入交换机状态时，可以说'online'（在线）或'operating normally'（运行正常）。\nonline 表示设备已连接，是基本状态；operating normally 表示设备不仅在线，而且CPU、内存、端口等参数都正常。\n交接时通常说'online'即可，因为接入交换机数量多，详细检查每台不现实。",
    pronunciation: "online 的 on 读 /ɒn/，不是 /oʊn/。\nline 读 /laɪn/，不是 /liːn/。",
    quiz: [
      { q: "所有服务器在线，怎么说？", a: "All servers are online." },
      { q: "online 和 operating normally 有什么区别？", a: "online = 在线（设备已连接，基本状态）；operating normally = 运行正常（设备不仅在线，而且CPU、内存、端口等参数都正常）。online 是最低要求，operating normally 是更高标准。" },
    ],
  },
  {
    id: 1767,
    en: "Please check the routers.",
    cn: "请检查路由器。",
    ipa: "/pliːz tʃɛk ðə ˈruːtərz/",
    tags: ["第1767句", "路由器", "★★★★★"],
    when: "路由器（Router）是数据中心网络的出口设备，负责连接外部网络（互联网、专线等）。交接时必须检查路由器的运行状态。",
    words: [
      { w: "routers", ipa: "/ˈruːtərz/", pos: "名词", cn: "路由器（复数）", memory: "router = 路由器（route + -er）；routers = 路由器（复数）。\n路由器是数据中心网络的出口设备，负责连接外部网络。\n数据中心通常有2台路由器互为冗余。", phonics: "rou 读 /ruː/，ters 读 /tərz/，复数加 -s。", collocations: [["router", "路由器"], ["route", "路由"], ["routing table", "路由表"]], examples: [["Check the routers.", "检查路由器。"], ["The routers are online.", "路由器在线。"]] },
      { w: "check", ipa: "/tʃɛk/", pos: "动词", cn: "检查/查看", memory: "check = 检查/查看（快速确认状态）。\n在交接场景中，check 是最常用的动作动词。\n交接时用 check 通过网管系统远程查看设备状态。", phonics: "ch 读 /tʃ/，eck 读 /ɛk/。", collocations: [["check routers", "检查路由器"], ["check routing", "检查路由"], ["check status", "检查状态"]], examples: [["Please check the equipment.", "请检查设备。"], ["Check the routing table.", "检查路由表。"]] },
    ],
    phrases: [
      { p: "routers", ipa: "/ˈruːtərz/", cn: "路由器", why: "routers = 路由器（复数）。路由器是数据中心网络的'网关'，负责将内部网络流量转发到外部网络（互联网、专线等）。" },
    ],
    grammar: [
      { q: "router 和 switch 有什么区别？", a: "router = 路由器（连接不同网络，负责网络间通信）\nswitch = 交换机（连接同一网络内的设备，负责网络内通信）\n✅ Please check the routers.（请检查路由器 → 出口设备）\n✅ Please check the switches.（请检查交换机 → 内部设备）\n路由器连接数据中心与外部网络，交换机连接数据中心内部设备。" },
    ],
    pattern: "Please check the + 网络设备",
    patternExamples: [
      { en: "Please check the switches.", cn: "请检查交换机。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "switches", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "Please check the firewalls.", cn: "请检查防火墙。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the servers.", cn: "请检查服务器。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "servers", ipa: "/ˈsɜːrvər/", cn: "服务器", phonics: "serv 读 /sɜːrv/，er 读 /ər/" }] },
    ],
    thinking: "路由器是数据中心网络的'出口'。数据中心通常有2台路由器互为冗余，分别连接不同的运营商线路。\n交接检查重点：① 设备在线状态 ② CPU/内存利用率 ③ 路由表状态 ④ 接口状态 ⑤ 告警信息。\n路由器故障会导致数据中心与外部网络断连，影响业务访问。",
    pronunciation: "routers 的 rou 读 /ruː/，不是 /raʊ/。\nters 读 /tərz/，不是 /tɜːrz/。",
    quiz: [
      { q: "请检查交换机，怎么说？", a: "Please check the switches." },
      { q: "路由器和交换机有什么区别？", a: "路由器（Router）连接不同网络，负责网络间通信（数据中心与外部网络）；交换机（Switch）连接同一网络内的设备，负责网络内通信（数据中心内部设备）。路由器是'出口'，交换机是'内部'。" },
    ],
  },
  {
    id: 1768,
    en: "All routers are operating normally.",
    cn: "所有路由器运行正常。",
    ipa: "/ɔːl ˈruːtərz ɑːr ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1768句", "路由器状态", "★★★★★"],
    when: "确认所有路由器运行状态正常。这是交接时最期望的汇报结果。",
    words: [
      { w: "routers", ipa: "/ˈruːtərz/", pos: "名词", cn: "路由器（复数）", memory: "router = 路由器；routers = 路由器（复数）。\n路由器是数据中心网络的出口设备。\n数据中心通常有2台路由器互为冗余。", phonics: "rou 读 /ruː/，ters 读 /tərz/。", collocations: [["all routers", "所有路由器"], ["both routers", "两台路由器"], ["primary router", "主路由器"]], examples: [["All routers are online.", "所有路由器在线。"], ["Both routers are working.", "两台路由器都在工作。"]] },
      { w: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", pos: "动词短语", cn: "运行正常", memory: "operating = 运行中；normally = 正常地。\noperating normally = 正常运行，表示设备在正常参数范围内工作。\n交接时最期望的状态汇报。", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/，normally 读 /ˈnɔːrməli/。", collocations: [["operating normally", "正常运行"], ["functioning normally", "正常运作"], ["running normally", "正常运转"]], examples: [["All routers are operating normally.", "所有路由器运行正常。"], ["The equipment is operating normally.", "设备运行正常。"]] },
    ],
    phrases: [
      { p: "all routers are operating normally", ipa: "/ɔːl ˈruːtərz ɑːr ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "所有路由器运行正常", why: "all routers + are operating normally = 所有路由器运行正常。交接时的标准汇报用语，表示所有出口设备都正常工作。" },
    ],
    grammar: [
      { q: "all routers 和 both routers 有什么区别？", a: "all routers = 所有路由器（3台或以上）\nboth routers = 两台路由器（恰好2台）\n✅ All routers are operating normally.（所有路由器正常 → 通用表达）\n✅ Both routers are operating normally.（两台路由器都正常 → 强调恰好2台）\n数据中心通常有2台路由器，说 both 更精确，但 all 也通用。" },
    ],
    pattern: "All + 设备 + are operating normally",
    patternExamples: [
      { en: "All switches are operating normally.", cn: "所有交换机运行正常。", words: [{ w: "switches", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "All firewalls are operating normally.", cn: "所有防火墙运行正常。", words: [{ w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "All servers are operating normally.", cn: "所有服务器运行正常。", words: [{ w: "servers", ipa: "/ˈsɜːrvər/", cn: "服务器", phonics: "serv 读 /sɜːrv/，er 读 /ər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "汇报路由器状态时，必须强调'all'（所有）或'both'（两台），因为数据中心通常有2台路由器互为冗余。\n如果只说'routers are operating normally'，可能会让人疑惑是'全部'还是'部分'。\n交接时明确说'all routers'或'both routers'，表示两台路由器都正常。",
    pronunciation: "all 的 a 读 /ɔː/，不是 /æ/。\nrouters 的 rou 读 /ruː/，不是 /raʊ/。",
    quiz: [
      { q: "两台路由器都运行正常，怎么说？", a: "Both routers are operating normally." },
      { q: "all routers 和 both routers 有什么区别？", a: "all routers = 所有路由器（3台或以上）；both routers = 两台路由器（恰好2台）。数据中心通常有2台路由器，说 both 更精确，但 all 也通用。" },
    ],
  },
  {
    id: 1769,
    en: "Please check the firewall status.",
    cn: "请检查防火墙状态。",
    ipa: "/pliːz tʃɛk ðə ˈfaɪərwɔːl ˈstætəs/",
    tags: ["第1769句", "防火墙", "★★★★★"],
    when: "防火墙（Firewall）是数据中心网络安全的核心设备，负责过滤恶意流量和未授权访问。交接时必须检查防火墙的运行状态。",
    words: [
      { w: "firewall", ipa: "/ˈfaɪərwɔːl/", pos: "名词", cn: "防火墙", memory: "fire = 火；wall = 墙。\nfirewall = 防火墙，是网络安全的核心设备。\n负责过滤恶意流量和未授权访问，保护数据中心网络安全。", phonics: "fire 读 /faɪər/，wall 读 /wɔːl/。", collocations: [["firewall", "防火墙"], ["firewall rules", "防火墙规则"], ["firewall policy", "防火墙策略"]], examples: [["Check the firewall.", "检查防火墙。"], ["The firewall is online.", "防火墙在线。"]] },
      { w: "status", ipa: "/ˈstætəs/", pos: "名词", cn: "状态", memory: "status = 状态/情况。\n在工程领域，status 指设备当前的工作状况。\nfirewall status = 防火墙状态。", phonics: "sta 读 /ˈstæ/，tus 读 /təs/。", collocations: [["firewall status", "防火墙状态"], ["system status", "系统状态"], ["check status", "检查状态"]], examples: [["Check the firewall status.", "检查防火墙状态。"], ["The status is normal.", "状态正常。"]] },
    ],
    phrases: [
      { p: "firewall status", ipa: "/ˈfaɪərwɔːl ˈstætəs/", cn: "防火墙状态", why: "firewall + status = 防火墙状态。交接时必须检查防火墙的运行状态，确保网络安全防护正常工作。" },
    ],
    grammar: [
      { q: "firewall 和 router 有什么区别？", a: "firewall = 防火墙（网络安全设备，过滤恶意流量）\nrouter = 路由器（网络出口设备，转发数据包）\n✅ Please check the firewall status.（请检查防火墙状态 → 安全设备）\n✅ Please check the router status.（请检查路由器状态 → 出口设备）\n防火墙负责'安全'，路由器负责'转发'。" },
    ],
    pattern: "Please check the + 设备 + status",
    patternExamples: [
      { en: "Please check the router status.", cn: "请检查路由器状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Please check the switch status.", cn: "请检查交换机状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Please check the server status.", cn: "请检查服务器状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "server", ipa: "/ˈsɜːrvər/", cn: "服务器", phonics: "serv 读 /sɜːrv/，er 读 /ər/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
    ],
    thinking: "防火墙是数据中心网络安全的'守门人'。数据中心通常有2台防火墙互为冗余，部署在网络出口。\n交接检查重点：① 设备在线状态 ② CPU/内存利用率 ③ 安全策略状态 ④ 告警信息 ⑤ 日志分析。\n防火墙故障会导致网络安全防护失效，是交接时的重点检查对象。",
    pronunciation: "firewall 的 fire 读 /faɪər/，不是 /fɪr/。\nwall 读 /wɔːl/，不是 /wæl/。",
    quiz: [
      { q: "请检查路由器状态，怎么说？", a: "Please check the router status." },
      { q: "防火墙和路由器有什么区别？", a: "防火墙（Firewall）是网络安全设备，负责过滤恶意流量和未授权访问；路由器（Router）是网络出口设备，负责转发数据包。防火墙负责'安全'，路由器负责'转发'。" },
    ],
  },
  {
    id: 1770,
    en: "The firewall is operating normally.",
    cn: "防火墙运行正常。",
    ipa: "/ðə ˈfaɪərwɔːl ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1770句", "防火墙状态", "★★★★★"],
    when: "确认防火墙运行状态正常。这是交接时最期望的汇报结果。",
    words: [
      { w: "firewall", ipa: "/ˈfaɪərwɔːl/", pos: "名词", cn: "防火墙", memory: "firewall = 防火墙，是网络安全的核心设备。\n负责过滤恶意流量和未授权访问，保护数据中心网络安全。\n数据中心通常有2台防火墙互为冗余。", phonics: "fire 读 /faɪər/，wall 读 /wɔːl/。", collocations: [["firewall status", "防火墙状态"], ["firewall rules", "防火墙规则"], ["firewall logs", "防火墙日志"]], examples: [["The firewall is online.", "防火墙在线。"], ["Check the firewall logs.", "检查防火墙日志。"]] },
      { w: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", pos: "动词短语", cn: "运行正常", memory: "operating = 运行中；normally = 正常地。\noperating normally = 正常运行，表示设备在正常参数范围内工作。\n交接时最期望的状态汇报。", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/，normally 读 /ˈnɔːrməli/。", collocations: [["operating normally", "正常运行"], ["functioning normally", "正常运作"], ["running normally", "正常运转"]], examples: [["The firewall is operating normally.", "防火墙运行正常。"], ["All systems are operating normally.", "所有系统正常运行。"]] },
    ],
    phrases: [
      { p: "firewall is operating normally", ipa: "/ˈfaɪərwɔːl ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "防火墙运行正常", why: "firewall + is operating normally = 防火墙运行正常。交接时的标准汇报用语，表示网络安全防护设备正常工作。" },
    ],
    grammar: [
      { q: "the firewall 和 firewalls 有什么区别？", a: "the firewall = 防火墙（单数，指一台或整体）\nfirewalls = 防火墙（复数，指多台）\n✅ The firewall is operating normally.（防火墙运行正常 → 指整体）\n✅ All firewalls are operating normally.（所有防火墙运行正常 → 指多台）\n数据中心通常有2台防火墙，说 the firewall 指整体，说 firewalls 指多台。" },
    ],
    pattern: "设备 + is operating normally",
    patternExamples: [
      { en: "The router is operating normally.", cn: "路由器运行正常。", words: [{ w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The switch is operating normally.", cn: "交换机运行正常。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The server is operating normally.", cn: "服务器运行正常。", words: [{ w: "server", ipa: "/ˈsɜːrvər/", cn: "服务器", phonics: "serv 读 /sɜːrv/，er 读 /ər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "汇报防火墙状态时，可以说'the firewall is operating normally'（防火墙运行正常）或'all firewalls are operating normally'（所有防火墙运行正常）。\n如果数据中心有2台防火墙，说'all firewalls'更精确，表示两台都正常。\n说'the firewall'指整体，也是通用表达。",
    pronunciation: "firewall 的 fire 读 /faɪər/，不是 /fɪr/。\noperating 的 o 读 /ɒ/，不是 /oʊ/。",
    quiz: [
      { q: "所有防火墙运行正常，怎么说？", a: "All firewalls are operating normally." },
      { q: "the firewall 和 firewalls 有什么区别？", a: "the firewall = 防火墙（单数，指一台或整体）；firewalls = 防火墙（复数，指多台）。数据中心通常有2台防火墙，说 the firewall 指整体，说 firewalls 指多台。" },
    ],
  },
  // ── 场景001：网络与弱电系统 - 网络巡检 (1771-1780) ──
  {
    id: 1771,
    en: "Please check the fiber optic links.",
    cn: "请检查光纤链路。",
    ipa: "/pliːz tʃɛk ðə ˈfaɪbər ˈɒptɪk lɪŋks/",
    tags: ["第1771句", "光纤链路", "★★★★★"],
    when: "光纤链路（Fiber Optic Links）是数据中心网络的高速传输介质，连接核心交换机、路由器等设备。交接时必须检查光纤链路的状态。",
    words: [
      { w: "fiber optic links", ipa: "/ˈfaɪbər ˈɒptɪk lɪŋks/", pos: "名词短语", cn: "光纤链路", memory: "fiber = 光纤；optic = 光学的；links = 链路/连接。\nfiber optic links = 光纤链路，是数据中心网络的高速传输介质。\n用于连接核心交换机、路由器等网络设备。", phonics: "fiber 读 /ˈfaɪbər/，optic 读 /ˈɒptɪk/，links 读 /lɪŋks/。", collocations: [["fiber optic", "光纤"], ["fiber link", "光纤链路"], ["optical fiber", "光纤"]], examples: [["Check the fiber links.", "检查光纤链路。"], ["The fiber links are healthy.", "光纤链路正常。"]] },
      { w: "check", ipa: "/tʃɛk/", pos: "动词", cn: "检查/查看", memory: "check = 检查/查看（快速确认状态）。\n交接时通过网管系统远程查看光纤链路状态。\n检查光功率、误码率等参数。", phonics: "ch 读 /tʃ/，eck 读 /ɛk/。", collocations: [["check links", "检查链路"], ["check connections", "检查连接"], ["check status", "检查状态"]], examples: [["Please check the links.", "请检查链路。"], ["Check the connection status.", "检查连接状态。"]] },
    ],
    phrases: [
      { p: "fiber optic links", ipa: "/ˈfaɪbər ˈɒptɪk lɪŋks/", cn: "光纤链路", why: "fiber optic + links = 光纤链路。光纤链路是数据中心网络的高速传输介质，带宽可达10Gbps、40Gbps甚至100Gbps。" },
    ],
    grammar: [
      { q: "fiber optic 和 copper cable 有什么区别？", a: "fiber optic = 光纤（光信号传输，高速、长距离）\ncopper cable = 铜缆（电信号传输，低速、短距离）\n✅ Please check the fiber optic links.（请检查光纤链路 → 高速传输）\n✅ Please check the copper cables.（请检查铜缆 → 低速传输）\n数据中心核心网络用光纤，终端接入用铜缆。" },
    ],
    pattern: "Please check the + 网络介质",
    patternExamples: [
      { en: "Please check the copper cables.", cn: "请检查铜缆。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the network ports.", cn: "请检查网络端口。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "network", ipa: "/ˈnɛtwɜːrk/", cn: "网络", phonics: "net 读 /nɛt/，work 读 /wɜːrk/" }] },
      { en: "Please check the patch panels.", cn: "请检查配线架。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "panels", ipa: "/ˈpænl/", cn: "面板", phonics: "pan 读 /pæn/，el 读 /l/" }] },
    ],
    thinking: "光纤链路是数据中心网络的'高速公路'。数据中心核心网络通常采用光纤连接，带宽高、延迟低、抗干扰。\n交接检查重点：① 链路状态（up/down）② 光功率（正常范围）③ 误码率（BER）④ 告警信息。\n光纤链路故障会导致网络设备间通信中断，是交接时的重点检查对象。",
    pronunciation: "fiber 的 fi 读 /faɪ/，不是 /fɪ/。\noptic 的 op 读 /ɒp/，不是 /oʊ/。",
    quiz: [
      { q: "请检查铜缆，怎么说？", a: "Please check the copper cables." },
      { q: "光纤和铜缆有什么区别？", a: "光纤（Fiber Optic）使用光信号传输，高速、长距离、抗干扰，用于数据中心核心网络；铜缆（Copper Cable）使用电信号传输，低速、短距离、易受干扰，用于终端接入。" },
    ],
  },
  {
    id: 1772,
    en: "All fiber links are healthy.",
    cn: "所有光纤链路正常。",
    ipa: "/ɔːl ˈfaɪbər lɪŋks ɑːr ˈhɛlθi/",
    tags: ["第1772句", "光纤链路状态", "★★★★★"],
    when: "确认所有光纤链路状态正常。healthy 表示链路健康、无故障。",
    words: [
      { w: "fiber links", ipa: "/ˈfaɪbər lɪŋks/", pos: "名词短语", cn: "光纤链路", memory: "fiber = 光纤；links = 链路/连接。\nfiber links = 光纤链路，是 fiber optic links 的简称。\n用于连接数据中心网络设备。", phonics: "fiber 读 /ˈfaɪbər/，links 读 /lɪŋks/。", collocations: [["fiber link", "光纤链路"], ["fiber connection", "光纤连接"], ["link status", "链路状态"]], examples: [["The fiber links are up.", "光纤链路已启动。"], ["Check the fiber links.", "检查光纤链路。"]] },
      { w: "healthy", ipa: "/ˈhɛlθi/", pos: "形容词", cn: "健康的/正常的", memory: "health = 健康；-y = 形容词后缀。\nhealthy = 健康的/正常的。\n在网络领域，healthy 表示链路、设备状态良好、无故障。", phonics: "health 读 /hɛlθ/，y 读 /i/。", collocations: [["healthy link", "健康链路"], ["link healthy", "链路正常"], ["system healthy", "系统正常"]], examples: [["All links are healthy.", "所有链路正常。"], ["The system is healthy.", "系统正常。"]] },
    ],
    phrases: [
      { p: "all fiber links are healthy", ipa: "/ɔːl ˈfaɪbər lɪŋks ɑːr ˈhɛlθi/", cn: "所有光纤链路正常", why: "all fiber links + are healthy = 所有光纤链路正常。healthy 表示链路健康、无故障，是网络设备状态的标准用语。" },
    ],
    grammar: [
      { q: "healthy 和 normal 有什么区别？", a: "healthy = 健康的（强调状态良好、无故障）\nnormal = 正常的（强调在正常范围内）\n✅ All fiber links are healthy.（所有光纤链路健康 → 强调无故障）\n✅ All fiber links are normal.（所有光纤链路正常 → 强调在正常范围）\nhealthy 更强调'健康'，normal 更强调'正常'，两者在交接时可互换。" },
    ],
    pattern: "All + 链路 + are healthy",
    patternExamples: [
      { en: "All network links are healthy.", cn: "所有网络链路正常。", words: [{ w: "network", ipa: "/ˈnɛtwɜːrk/", cn: "网络", phonics: "net 读 /nɛt/，work 读 /wɜːrk/" }] },
      { en: "All connections are healthy.", cn: "所有连接正常。", words: [] },
      { en: "All paths are healthy.", cn: "所有路径正常。", words: [] },
    ],
    thinking: "汇报光纤链路状态时，可以说'healthy'（健康的）或'normal'（正常的）。\nhealthy 更强调'健康、无故障'，normal 更强调'在正常范围内'。\n在交接时两者可互换，都表示链路状态良好。",
    pronunciation: "healthy 的 ea 读 /ɛ/，不是 /iː/。\nth 读 /θ/，不是 /s/。",
    quiz: [
      { q: "所有网络链路正常，怎么说？", a: "All network links are healthy." },
      { q: "healthy 和 normal 有什么区别？", a: "healthy = 健康的（强调状态良好、无故障）；normal = 正常的（强调在正常范围内）。healthy 更强调'健康'，normal 更强调'正常'，两者在交接时可互换。" },
    ],
  },
  {
    id: 1773,
    en: "Please check the network ports.",
    cn: "请检查网络端口。",
    ipa: "/pliːz tʃɛk ðə ˈnɛtwɜːrk pɔːrts/",
    tags: ["第1773句", "网络端口", "★★★★★"],
    when: "网络端口（Network Ports）是网络设备的物理接口，用于连接光纤或铜缆。交接时必须检查网络端口的状态。",
    words: [
      { w: "network ports", ipa: "/ˈnɛtwɜːrk pɔːrts/", pos: "名词短语", cn: "网络端口", memory: "network = 网络；ports = 端口（port的复数）。\nnetwork ports = 网络端口，是网络设备的物理接口。\n用于连接光纤或铜缆，传输网络数据。", phonics: "network 读 /ˈnɛtwɜːrk/，ports 读 /pɔːrts/，复数加 -s。", collocations: [["network port", "网络端口"], ["port status", "端口状态"], ["port speed", "端口速率"]], examples: [["Check the network ports.", "检查网络端口。"], ["The ports are up.", "端口已启动。"]] },
      { w: "check", ipa: "/tʃɛk/", pos: "动词", cn: "检查/查看", memory: "check = 检查/查看（快速确认状态）。\n交接时通过网管系统远程查看端口状态。\n检查端口 up/down、速率、错误计数等。", phonics: "ch 读 /tʃ/，eck 读 /ɛk/。", collocations: [["check ports", "检查端口"], ["check interfaces", "检查接口"], ["check status", "检查状态"]], examples: [["Please check the ports.", "请检查端口。"], ["Check the interface status.", "检查接口状态。"]] },
    ],
    phrases: [
      { p: "network ports", ipa: "/ˈnɛtwɜːrk pɔːrts/", cn: "网络端口", why: "network + ports = 网络端口。网络端口是网络设备的物理接口，用于连接光纤或铜缆，是网络通信的基础。" },
    ],
    grammar: [
      { q: "port up 和 port down 是什么意思？", a: "port up = 端口已启动（正常工作）\nport down = 端口已关闭（无法工作）\n✅ All network ports are up.（所有网络端口已启动 → 正常）\n✅ Some network ports are down.（一些网络端口已关闭 → 异常）\n交接时关注 port up/down 状态。" },
    ],
    pattern: "Please check the + 网络组件",
    patternExamples: [
      { en: "Please check the network cables.", cn: "请检查网络线缆。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "network", ipa: "/ˈnɛtwɜːrk/", cn: "网络", phonics: "net 读 /nɛt/，work 读 /wɜːrk/" }] },
      { en: "Please check the network interfaces.", cn: "请检查网络接口。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "network", ipa: "/ˈnɛtwɜːrk/", cn: "网络", phonics: "net 读 /nɛt/，work 读 /wɜːrk/" }] },
      { en: "Please check the network connections.", cn: "请检查网络连接。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "network", ipa: "/ˈnɛtwɜːrk/", cn: "网络", phonics: "net 读 /nɛt/，work 读 /wɜːrk/" }] },
    ],
    thinking: "网络端口是网络设备的'接口'。数据中心网络设备通常有几十个端口，每个端口连接一条光纤或铜缆。\n交接检查重点：① 端口状态（up/down）② 端口速率（1G/10G/40G）③ 端口错误计数 ④ 告警信息。\n端口 down 会导致网络链路中断，是交接时的重点检查对象。",
    pronunciation: "ports 的 or 读 /ɔːr/，不是 /oʊ/。\nts 读 /ts/，不是 /t/。",
    quiz: [
      { q: "请检查网络线缆，怎么说？", a: "Please check the network cables." },
      { q: "port up 和 port down 是什么意思？", a: "port up = 端口已启动（正常工作）；port down = 端口已关闭（无法工作）。交接时关注 port up/down 状态，port down 表示链路中断。" },
    ],
  },
  {
    id: 1774,
    en: "All network ports are operating normally.",
    cn: "所有网络端口运行正常。",
    ipa: "/ɔːl ˈnɛtwɜːrk pɔːrts ɑːr ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1774句", "网络端口状态", "★★★★★"],
    when: "确认所有网络端口运行状态正常。这是交接时最期望的汇报结果。",
    words: [
      { w: "network ports", ipa: "/ˈnɛtwɜːrk pɔːrts/", pos: "名词短语", cn: "网络端口", memory: "network = 网络；ports = 端口（port的复数）。\nnetwork ports = 网络端口，是网络设备的物理接口。\n数据中心网络设备通常有几十个端口。", phonics: "network 读 /ˈnɛtwɜːrk/，ports 读 /pɔːrts/。", collocations: [["all ports", "所有端口"], ["network ports", "网络端口"], ["port status", "端口状态"]], examples: [["All ports are up.", "所有端口已启动。"], ["Check the network ports.", "检查网络端口。"]] },
      { w: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", pos: "动词短语", cn: "运行正常", memory: "operating = 运行中；normally = 正常地。\noperating normally = 正常运行，表示端口在正常参数范围内工作。\n交接时最期望的状态汇报。", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/，normally 读 /ˈnɔːrməli/。", collocations: [["operating normally", "正常运行"], ["functioning normally", "正常运作"], ["running normally", "正常运转"]], examples: [["All ports are operating normally.", "所有端口运行正常。"], ["The equipment is operating normally.", "设备运行正常。"]] },
    ],
    phrases: [
      { p: "all network ports are operating normally", ipa: "/ɔːl ˈnɛtwɜːrk pɔːrts ɑːr ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "所有网络端口运行正常", why: "all network ports + are operating normally = 所有网络端口运行正常。交接时的标准汇报用语，表示所有网络接口都正常工作。" },
    ],
    grammar: [
      { q: "all ports 和 most ports 有什么区别？", a: "all ports = 所有端口（100%正常）\nmost ports = 大多数端口（部分异常）\n✅ All network ports are operating normally.（所有网络端口正常 → 最佳汇报）\n✅ Most network ports are operating normally.（大多数网络端口正常 → 部分异常）\n交接时用 all 表示'全部正常'，用 most 表示'部分异常'。" },
    ],
    pattern: "All + 组件 + are operating normally",
    patternExamples: [
      { en: "All network interfaces are operating normally.", cn: "所有网络接口运行正常。", words: [{ w: "network", ipa: "/ˈnɛtwɜːrk/", cn: "网络", phonics: "net 读 /nɛt/，work 读 /wɜːrk/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "All network connections are operating normally.", cn: "所有网络连接运行正常。", words: [{ w: "network", ipa: "/ˈnɛtwɜːrk/", cn: "网络", phonics: "net 读 /nɛt/，work 读 /wɜːrk/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "All network devices are operating normally.", cn: "所有网络设备运行正常。", words: [{ w: "network", ipa: "/ˈnɛtwɜːrk/", cn: "网络", phonics: "net 读 /nɛt/，work 读 /wɜːrk/" }, { w: "devices", ipa: "/dɪˈvaɪs/", cn: "设备", phonics: "de 读 /dɪ/，vice 读 /vaɪs/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
    ],
    thinking: "汇报网络端口状态时，必须强调'all'（所有），因为数据中心网络设备通常有几十个端口。\n如果只说'network ports are operating normally'，可能会让人疑惑是'全部'还是'部分'。\n交接时明确说'all network ports'，表示所有端口都正常。",
    pronunciation: "all 的 a 读 /ɔː/，不是 /æ/。\nports 的 or 读 /ɔːr/，不是 /oʊ/。",
    quiz: [
      { q: "大多数网络端口运行正常，怎么说？", a: "Most network ports are operating normally." },
      { q: "all ports 和 most ports 有什么区别？", a: "all ports = 所有端口（100%正常）；most ports = 大多数端口（部分异常）。交接时用 all 表示'全部正常'，用 most 表示'部分异常'。" },
    ],
  },
  {
    id: 1775,
    en: "Please check the patch panels.",
    cn: "请检查配线架。",
    ipa: "/pliːz tʃɛk ðə pætʃ ˈpænəlz/",
    tags: ["第1775句", "配线架", "★★★★"],
    when: "配线架（Patch Panels）是数据中心网络布线的核心设备，用于管理和组织网络线缆。交接时必须检查配线架的状态。",
    words: [
      { w: "patch panels", ipa: "/pætʃ ˈpænəlz/", pos: "名词短语", cn: "配线架", memory: "patch = 补丁/跳线；panels = 面板（panel的复数）。\npatch panels = 配线架，用于管理和组织网络线缆。\n是数据中心网络布线的核心设备。", phonics: "patch 读 /pætʃ/，panels 读 /ˈpænəlz/，复数加 -s。", collocations: [["patch panel", "配线架"], ["patch cord", "跳线"], ["cable management", "线缆管理"]], examples: [["Check the patch panels.", "检查配线架。"], ["The patch panels are organized.", "配线架整洁。"]] },
      { w: "check", ipa: "/tʃɛk/", pos: "动词", cn: "检查/查看", memory: "check = 检查/查看（快速确认状态）。\n交接时现场检查配线架的物理状态。\n检查标签、跳线连接、整洁度等。", phonics: "ch 读 /tʃ/，eck 读 /ɛk/。", collocations: [["check panels", "检查配线架"], ["check cables", "检查线缆"], ["check labels", "检查标签"]], examples: [["Please check the panels.", "请检查配线架。"], ["Check the cable labels.", "检查线缆标签。"]] },
    ],
    phrases: [
      { p: "patch panels", ipa: "/pætʃ ˈpænəlz/", cn: "配线架", why: "patch + panels = 配线架。配线架是数据中心网络布线的核心设备，用于管理和组织网络线缆，确保布线整洁、易于维护。" },
    ],
    grammar: [
      { q: "patch panel 和 switch 有什么区别？", a: "patch panel = 配线架（无源设备，用于线缆管理）\nswitch = 交换机（有源设备，用于数据转发）\n✅ Please check the patch panels.（请检查配线架 → 无源设备）\n✅ Please check the switches.（请检查交换机 → 有源设备）\n配线架不需要电源，交换机需要电源。" },
    ],
    pattern: "Please check the + 网络设备",
    patternExamples: [
      { en: "Please check the cable trays.", cn: "请检查线缆桥架。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the network racks.", cn: "请检查网络机柜。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "network", ipa: "/ˈnɛtwɜːrk/", cn: "网络", phonics: "net 读 /nɛt/，work 读 /wɜːrk/" }, { w: "racks", ipa: "/ræk/", cn: "机柜", phonics: "rack 读 /ræk/" }] },
      { en: "Please check the server cabinets.", cn: "请检查服务器机柜。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "server", ipa: "/ˈsɜːrvər/", cn: "服务器", phonics: "serv 读 /sɜːrv/，er 读 /ər/" }] },
    ],
    thinking: "配线架是数据中心网络布线的'枢纽'。数据中心通常有大量网络线缆，配线架用于管理和组织这些线缆，确保布线整洁、易于维护。\n交接检查重点：① 配线架整洁度 ② 标签清晰度 ③ 跳线连接状态 ④ 告警信息。\n配线架故障通常不会导致网络中断，但会影响维护效率。",
    pronunciation: "patch 的 a 读 /æ/，不是 /eɪ/。\npanels 的 a 读 /æ/，不是 /eɪ/。",
    quiz: [
      { q: "请检查线缆桥架，怎么说？", a: "Please check the cable trays." },
      { q: "配线架和交换机有什么区别？", a: "配线架（Patch Panel）是无源设备，用于线缆管理，不需要电源；交换机（Switch）是有源设备，用于数据转发，需要电源。配线架是'物理层'，交换机是'数据链路层'。" },
    ],
  },
  {
    id: 1776,
    en: "The patch panels are in good condition.",
    cn: "配线架状态良好。",
    ipa: "/ðə pætʃ ˈpænəlz ɑːr ɪn ɡʊd kənˈdɪʃən/",
    tags: ["第1776句", "配线架状态", "★★★★"],
    when: "确认配线架状态良好。in good condition 表示设备状态良好、无损坏。",
    words: [
      { w: "patch panels", ipa: "/pætʃ ˈpænəlz/", pos: "名词短语", cn: "配线架", memory: "patch = 补丁/跳线；panels = 面板（panel的复数）。\npatch panels = 配线架，用于管理和组织网络线缆。\n是数据中心网络布线的核心设备。", phonics: "patch 读 /pætʃ/，panels 读 /ˈpænəlz/。", collocations: [["patch panel", "配线架"], ["patch cord", "跳线"], ["cable management", "线缆管理"]], examples: [["The patch panels are organized.", "配线架整洁。"], ["Check the patch panels.", "检查配线架。"]] },
      { w: "in good condition", ipa: "/ɪn ɡʊd kənˈdɪʃən/", pos: "介词短语", cn: "状态良好", memory: "in = 在...状态；good = 良好的；condition = 状态/状况。\nin good condition = 状态良好，表示设备无损坏、工作正常。\n反义词 in bad condition = 状态不佳。", phonics: "in 读 /ɪn/，good 读 /ɡʊd/，condition 读 /kənˈdɪʃən/。", collocations: [["in good condition", "状态良好"], ["in bad condition", "状态不佳"], ["in normal condition", "状态正常"]], examples: [["The equipment is in good condition.", "设备状态良好。"], ["The cables are in bad condition.", "线缆状态不佳。"]] },
    ],
    phrases: [
      { p: "patch panels are in good condition", ipa: "/pætʃ ˈpænəlz ɑːr ɪn ɡʊd kənˈdɪʃən/", cn: "配线架状态良好", why: "patch panels + are in good condition = 配线架状态良好。in good condition 描述无源设备的物理状态，表示设备无损坏、工作正常。" },
    ],
    grammar: [
      { q: "in good condition 和 operating normally 有什么区别？", a: "in good condition = 状态良好（强调物理状态，无损坏）\noperating normally = 运行正常（强调工作状态，参数正常）\n✅ The patch panels are in good condition.（配线架状态良好 → 物理状态）\n✅ The switches are operating normally.（交换机运行正常 → 工作状态）\n配线架是无源设备，用 in good condition；交换机是有源设备，用 operating normally。" },
    ],
    pattern: "设备 + are in good condition",
    patternExamples: [
      { en: "The cables are in good condition.", cn: "线缆状态良好。", words: [] },
      { en: "The racks are in good condition.", cn: "机柜状态良好。", words: [{ w: "racks", ipa: "/ræk/", cn: "机柜", phonics: "rack 读 /ræk/" }] },
      { en: "The connectors are in good condition.", cn: "连接器状态良好。", words: [] },
    ],
    thinking: "汇报配线架状态时，通常说'in good condition'（状态良好），而不是'operating normally'（运行正常）。\n因为配线架是无源设备，不需要'运行'，只需要'状态良好'即可。\noperating normally 通常用于有源设备（交换机、路由器等）。",
    pronunciation: "condition 的 con 读 /kən/，不是 /kɒn/。\ndi 读 /dɪ/，不是 /daɪ/。",
    quiz: [
      { q: "线缆状态良好，怎么说？", a: "The cables are in good condition." },
      { q: "in good condition 和 operating normally 有什么区别？", a: "in good condition = 状态良好（强调物理状态，无损坏），用于无源设备（配线架、线缆等）；operating normally = 运行正常（强调工作状态，参数正常），用于有源设备（交换机、路由器等）。" },
    ],
  },
  {
    id: 1777,
    en: "Please check the network racks.",
    cn: "请检查网络机柜。",
    ipa: "/pliːz tʃɛk ðə ˈnɛtwɜːrk ræks/",
    tags: ["第1777句", "网络机柜", "★★★★"],
    when: "网络机柜（Network Racks）是数据中心网络设备的承载设备，用于安装交换机、路由器、防火墙等。交接时必须检查网络机柜的状态。",
    words: [
      { w: "network racks", ipa: "/ˈnɛtwɜːrk ræks/", pos: "名词短语", cn: "网络机柜", memory: "network = 网络；racks = 机柜（rack的复数）。\nnetwork racks = 网络机柜，用于安装网络设备。\n是数据中心网络设备的承载设备。", phonics: "network 读 /ˈnɛtwɜːrk/，racks 读 /ræks/，复数加 -s。", collocations: [["network rack", "网络机柜"], ["server rack", "服务器机柜"], ["rack unit", "机柜单元"]], examples: [["Check the network racks.", "检查网络机柜。"], ["The racks are secure.", "机柜状态正常。"]] },
      { w: "check", ipa: "/tʃɛk/", pos: "动词", cn: "检查/查看", memory: "check = 检查/查看（快速确认状态）。\n交接时现场检查网络机柜的物理状态。\n检查门锁、温度、线缆整洁度等。", phonics: "ch 读 /tʃ/，eck 读 /ɛk/。", collocations: [["check racks", "检查机柜"], ["check cabinets", "检查机柜"], ["check locks", "检查门锁"]], examples: [["Please check the racks.", "请检查机柜。"], ["Check the cabinet locks.", "检查机柜门锁。"]] },
    ],
    phrases: [
      { p: "network racks", ipa: "/ˈnɛtwɜːrk ræks/", cn: "网络机柜", why: "network + racks = 网络机柜。网络机柜是数据中心网络设备的承载设备，用于安装交换机、路由器、防火墙等网络设备。" },
    ],
    grammar: [
      { q: "rack 和 cabinet 有什么区别？", a: "rack = 机柜（开放式，便于散热和维护）\ncabinet = 机柜（封闭式，带门，更安全）\n✅ Please check the network racks.（请检查网络机柜 → 开放式）\n✅ Please check the server cabinets.（请检查服务器机柜 → 封闭式）\n数据中心网络设备通常用 rack，服务器通常用 cabinet。" },
    ],
    pattern: "Please check the + 设备",
    patternExamples: [
      { en: "Please check the server racks.", cn: "请检查服务器机柜。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "server", ipa: "/ˈsɜːrvər/", cn: "服务器", phonics: "serv 读 /sɜːrv/，er 读 /ər/" }, { w: "racks", ipa: "/ræk/", cn: "机柜", phonics: "rack 读 /ræk/" }] },
      { en: "Please check the storage racks.", cn: "请检查存储机柜。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "racks", ipa: "/ræk/", cn: "机柜", phonics: "rack 读 /ræk/" }] },
      { en: "Please check the power racks.", cn: "请检查电源机柜。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }, { w: "racks", ipa: "/ræk/", cn: "机柜", phonics: "rack 读 /ræk/" }] },
    ],
    thinking: "网络机柜是数据中心网络设备的'家'。数据中心通常有多个网络机柜，每个机柜安装几十台网络设备。\n交接检查重点：① 机柜门锁状态 ② 机柜温度 ③ 线缆整洁度 ④ 告警信息。\n网络机柜故障通常不会导致网络中断，但会影响设备安全。",
    pronunciation: "racks 的 a 读 /æ/，不是 /eɪ/。\ncks 读 /ks/，不是 /k/。",
    quiz: [
      { q: "请检查服务器机柜，怎么说？", a: "Please check the server racks." },
      { q: "rack 和 cabinet 有什么区别？", a: "rack = 机柜（开放式，便于散热和维护），用于网络设备；cabinet = 机柜（封闭式，带门，更安全），用于服务器。数据中心网络设备通常用 rack，服务器通常用 cabinet。" },
    ],
  },
  {
    id: 1778,
    en: "All network racks are secure.",
    cn: "所有网络机柜状态正常。",
    ipa: "/ɔːl ˈnɛtwɜːrk ræks ɑːr sɪˈkjʊr/",
    tags: ["第1778句", "网络机柜状态", "★★★★"],
    when: "确认所有网络机柜状态正常。secure 表示机柜安全、门锁正常。",
    words: [
      { w: "network racks", ipa: "/ˈnɛtwɜːrk ræks/", pos: "名词短语", cn: "网络机柜", memory: "network = 网络；racks = 机柜（rack的复数）。\nnetwork racks = 网络机柜，用于安装网络设备。\n数据中心通常有多个网络机柜。", phonics: "network 读 /ˈnɛtwɜːrk/，racks 读 /ræks/。", collocations: [["network rack", "网络机柜"], ["server rack", "服务器机柜"], ["rack security", "机柜安全"]], examples: [["The racks are locked.", "机柜已上锁。"], ["Check the network racks.", "检查网络机柜。"]] },
      { w: "secure", ipa: "/sɪˈkjʊr/", pos: "形容词", cn: "安全的/牢固的", memory: "secure = 安全的/牢固的。\n在网络机柜语境中，secure 表示机柜门锁正常、设备安全。\n反义词 insecure = 不安全的。", phonics: "se 读 /sɪ/，cure 读 /kjʊr/。", collocations: [["secure access", "安全访问"], ["secure connection", "安全连接"], ["rack secure", "机柜安全"]], examples: [["The racks are secure.", "机柜安全。"], ["The network is secure.", "网络安全。"]] },
    ],
    phrases: [
      { p: "all network racks are secure", ipa: "/ɔːl ˈnɛtwɜːrk ræks ɑːr sɪˈkjʊr/", cn: "所有网络机柜状态正常", why: "all network racks + are secure = 所有网络机柜状态正常。secure 表示机柜安全、门锁正常，是网络机柜状态的标准用语。" },
    ],
    grammar: [
      { q: "secure 和 safe 有什么区别？", a: "secure = 安全的（强调防护、不被入侵）\nsafe = 安全的（强调无危险、不受伤害）\n✅ The network racks are secure.（网络机柜安全 → 强调防护）\n✅ The equipment is safe.（设备安全 → 强调无危险）\nsecure 更强调'防护'，safe 更强调'无危险'。" },
    ],
    pattern: "All + 设备 + are secure",
    patternExamples: [
      { en: "All server racks are secure.", cn: "所有服务器机柜安全。", words: [{ w: "server", ipa: "/ˈsɜːrvər/", cn: "服务器", phonics: "serv 读 /sɜːrv/，er 读 /ər/" }, { w: "racks", ipa: "/ræk/", cn: "机柜", phonics: "rack 读 /ræk/" }] },
      { en: "All storage racks are secure.", cn: "所有存储机柜安全。", words: [{ w: "racks", ipa: "/ræk/", cn: "机柜", phonics: "rack 读 /ræk/" }] },
      { en: "All cabinets are secure.", cn: "所有机柜安全。", words: [] },
    ],
    thinking: "汇报网络机柜状态时，通常说'secure'（安全的），表示机柜门锁正常、设备安全。\nsecure 更强调'防护、不被入侵'，safe 更强调'无危险、不受伤害'。\n在网络机柜语境中，secure 是标准用语。",
    pronunciation: "secure 的 se 读 /sɪ/，不是 /siː/。\ncure 读 /kjʊr/，不是 /kʊr/。",
    quiz: [
      { q: "所有服务器机柜安全，怎么说？", a: "All server racks are secure." },
      { q: "secure 和 safe 有什么区别？", a: "secure = 安全的（强调防护、不被入侵）；safe = 安全的（强调无危险、不受伤害）。secure 更强调'防护'，safe 更强调'无危险'。在网络机柜语境中，secure 是标准用语。" },
    ],
  },
  {
    id: 1779,
    en: "Please check the bandwidth utilization.",
    cn: "请检查带宽利用率。",
    ipa: "/pliːz tʃɛk ðə ˈbændwɪdθ ˌjuːtɪlaɪˈzeɪʃən/",
    tags: ["第1779句", "带宽利用率", "★★★★★"],
    when: "带宽利用率（Bandwidth Utilization）是数据中心网络性能的重要指标，表示网络带宽的使用情况。交接时必须检查带宽利用率。",
    words: [
      { w: "bandwidth utilization", ipa: "/ˈbændwɪdθ ˌjuːtɪlaɪˈzeɪʃən/", pos: "名词短语", cn: "带宽利用率", memory: "bandwidth = 带宽；utilization = 利用率。\nbandwidth utilization = 带宽利用率，表示网络带宽的使用情况。\n是数据中心网络性能的重要指标。", phonics: "bandwidth 读 /ˈbændwɪdθ/，utilization 读 /ˌjuːtɪlaɪˈzeɪʃən/。", collocations: [["bandwidth utilization", "带宽利用率"], ["network bandwidth", "网络带宽"], ["bandwidth capacity", "带宽容量"]], examples: [["Check the bandwidth utilization.", "检查带宽利用率。"], ["The bandwidth utilization is high.", "带宽利用率高。"]] },
      { w: "check", ipa: "/tʃɛk/", pos: "动词", cn: "检查/查看", memory: "check = 检查/查看（快速确认状态）。\n交接时通过网管系统远程查看带宽利用率。\n检查当前利用率、峰值、趋势等。", phonics: "ch 读 /tʃ/，eck 读 /ɛk/。", collocations: [["check utilization", "检查利用率"], ["check bandwidth", "检查带宽"], ["check performance", "检查性能"]], examples: [["Please check the utilization.", "请检查利用率。"], ["Check the network performance.", "检查网络性能。"]] },
    ],
    phrases: [
      { p: "bandwidth utilization", ipa: "/ˈbændwɪdθ ˌjuːtɪlaɪˈzeɪʃən/", cn: "带宽利用率", why: "bandwidth + utilization = 带宽利用率。带宽利用率是数据中心网络性能的重要指标，通常在30%-70%之间为正常范围。" },
    ],
    grammar: [
      { q: "bandwidth 和 throughput 有什么区别？", a: "bandwidth = 带宽（理论最大传输速率）\nthroughput = 吞吐量（实际传输速率）\n✅ Please check the bandwidth utilization.（请检查带宽利用率 → 理论带宽使用比例）\n✅ Please check the network throughput.（请检查网络吞吐量 → 实际传输速率）\nbandwidth 是'容量'，throughput 是'实际流量'。" },
    ],
    pattern: "Please check the + 性能指标",
    patternExamples: [
      { en: "Please check the CPU utilization.", cn: "请检查CPU利用率。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the memory utilization.", cn: "请检查内存利用率。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the disk utilization.", cn: "请检查磁盘利用率。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "带宽利用率是数据中心网络性能的'温度计'。数据中心网络带宽利用率通常在30%-70%之间为正常范围。\n交接检查重点：① 当前利用率 ② 峰值利用率 ③ 趋势分析 ④ 告警信息。\n带宽利用率过高（>80%）会导致网络拥塞，过低（<10%）可能是资源浪费。",
    pronunciation: "bandwidth 的 band 读 /bænd/，不是 /bɑːnd/。\nutilization 的 u 读 /juː/，不是 /ʌ/。",
    quiz: [
      { q: "请检查CPU利用率，怎么说？", a: "Please check the CPU utilization." },
      { q: "bandwidth 和 throughput 有什么区别？", a: "bandwidth = 带宽（理论最大传输速率）；throughput = 吞吐量（实际传输速率）。bandwidth 是'容量'，throughput 是'实际流量'。带宽利用率 = 实际流量 / 理论带宽。" },
    ],
  },
  {
    id: 1780,
    en: "The bandwidth utilization is within the normal range.",
    cn: "带宽利用率正常。",
    ipa: "/ðə ˈbændwɪdθ ˌjuːtɪlaɪˈzeɪʃən ɪz wɪˈðɪn ðə ˈnɔːrməl reɪndʒ/",
    tags: ["第1780句", "带宽利用率状态", "★★★★★"],
    when: "确认带宽利用率在正常范围内。within the normal range 表示在正常范围内。",
    words: [
      { w: "bandwidth utilization", ipa: "/ˈbændwɪdθ ˌjuːtɪlaɪˈzeɪʃən/", pos: "名词短语", cn: "带宽利用率", memory: "bandwidth = 带宽；utilization = 利用率。\nbandwidth utilization = 带宽利用率，表示网络带宽的使用情况。\n正常范围通常为30%-70%。", phonics: "bandwidth 读 /ˈbændwɪdθ/，utilization 读 /ˌjuːtɪlaɪˈzeɪʃən/。", collocations: [["bandwidth utilization", "带宽利用率"], ["network bandwidth", "网络带宽"], ["utilization rate", "利用率"]], examples: [["The bandwidth utilization is normal.", "带宽利用率正常。"], ["Check the bandwidth utilization.", "检查带宽利用率。"]] },
      { w: "within the normal range", ipa: "/wɪˈðɪn ðə ˈnɔːrməl reɪndʒ/", pos: "介词短语", cn: "在正常范围内", memory: "within = 在...范围内；normal = 正常的；range = 范围。\nwithin the normal range = 在正常范围内。\n表示指标在预期的正常范围内。", phonics: "within 读 /wɪˈðɪn/，normal 读 /ˈnɔːrməl/，range 读 /reɪndʒ/。", collocations: [["within range", "在范围内"], ["normal range", "正常范围"], ["acceptable range", "可接受范围"]], examples: [["The temperature is within the normal range.", "温度在正常范围内。"], ["The pressure is within range.", "压力在范围内。"]] },
    ],
    phrases: [
      { p: "bandwidth utilization is within the normal range", ipa: "/ˈbændwɪdθ ˌjuːtɪlaɪˈzeɪʃən ɪz wɪˈðɪn ðə ˈnɔːrməl reɪndʒ/", cn: "带宽利用率在正常范围内", why: "bandwidth utilization + is within the normal range = 带宽利用率在正常范围内。这是描述指标状态的标准用语，表示指标在预期的正常范围内。" },
    ],
    grammar: [
      { q: "within range 和 normal 有什么区别？", a: "within range = 在范围内（强调在某个区间内）\nnormal = 正常的（强调状态正常）\n✅ The bandwidth utilization is within the normal range.（带宽利用率在正常范围内 → 精确表达）\n✅ The bandwidth utilization is normal.（带宽利用率正常 → 简洁表达）\nwithin range 更精确，normal 更简洁。" },
    ],
    pattern: "指标 + is within the normal range",
    patternExamples: [
      { en: "The CPU utilization is within the normal range.", cn: "CPU利用率在正常范围内。", words: [{ w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }, { w: "range", ipa: "/reɪndʒ/", cn: "范围", phonics: "range 读 /reɪndʒ/" }] },
      { en: "The memory utilization is within the normal range.", cn: "内存利用率在正常范围内。", words: [{ w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }, { w: "range", ipa: "/reɪndʒ/", cn: "范围", phonics: "range 读 /reɪndʒ/" }] },
      { en: "The temperature is within the normal range.", cn: "温度在正常范围内。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "汇报带宽利用率时，可以说'within the normal range'（在正常范围内）或'normal'（正常的）。\nwithin the normal range 更精确，表示在30%-70%的正常范围内。\nnormal 更简洁，也表示正常。\n交接时两者都可使用。",
    pronunciation: "within 的 th 读 /ð/，不是 /θ/。\nrange 读 /reɪndʒ/，不是 /rændʒ/。",
    quiz: [
      { q: "CPU利用率在正常范围内，怎么说？", a: "The CPU utilization is within the normal range." },
      { q: "within range 和 normal 有什么区别？", a: "within range = 在范围内（强调在某个区间内），更精确；normal = 正常的（强调状态正常），更简洁。带宽利用率正常范围通常是30%-70%。" },
    ],
  },
];

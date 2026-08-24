// EXPORTS: MOCK_SENTENCES_PART22A

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART22A: ISentence[] = [
  {
    id: 1521,
    en: "Please check the generator operating status.",
    cn: "请检查柴油发电机运行状态。",
    ipa: "/pliːz tʃɛk ðə ˈdʒɛnəreɪtər ˈɒpəreɪtɪŋ ˈstætəs/",
    tags: ["第1521句", "柴油发电机", "★★★★★"],
    when: "柴油发电机是数据中心的应急电源，当市电中断时自动启动供电。交接时首先检查发电机整体运行状态。",
    words: [
      { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", pos: "名词", cn: "发电机", memory: "generate = 产生/发电；-or = 设备。\ngenerator = 发电机，将机械能转化为电能的设备。\n数据中心通常配备多台柴油发电机作为备用电源。", phonics: "gen 读 /ˈdʒɛn/，erator 读 /əreɪtər/，重音在第一音节。", collocations: [["diesel generator", "柴油发电机"], ["generator set", "发电机组"], ["generator room", "发电机房"]], examples: [["The generator is running.", "发电机正在运行。"], ["Enter the generator room.", "进入发电机房。"]] },
      { w: "operating status", ipa: "/ˈɒpəreɪtɪŋ ˈstætəs/", pos: "名词短语", cn: "运行状态", memory: "operating = 运行中的；status = 状态。\noperating status = 运行状态，指设备当前的工作状况。\n交接时必须确认所有关键设备的运行状态。", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/，status 读 /ˈstætəs/。", collocations: [["check operating status", "检查运行状态"], ["normal operating status", "正常运行状态"], ["abnormal operating status", "异常运行状态"]], examples: [["What is the operating status?", "运行状态是什么？"], ["All systems show normal operating status.", "所有系统显示正常运行状态。"]] },
    ],
    phrases: [
      { p: "generator operating status", ipa: "/ˈdʒɛnəreɪtər ˈɒpəreɪtɪŋ ˈstætəs/", cn: "发电机运行状态", why: "generator + operating + status = 发电机运行状态。这是交接时首先检查的项目，确认发电机是否处于正常待机或运行状态。" },
    ],
    grammar: [
      { q: "check 和 inspect 有什么区别？", a: "check = 检查/查看（快速确认状态）\ninspect = 检验/检查（详细的物理检查）\n✅ Please check the generator status.（请检查发电机状态 → 查看监控数据）\n✅ Please inspect the generator.（请检查发电机 → 现场巡检设备）\n交接时用 check，因为是通过监控系统远程查看。" },
    ],
    pattern: "Please check the + 设备 + operating status",
    patternExamples: [
      { en: "Please check the transformer operating status.", cn: "请检查变压器运行状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "transformer", ipa: "/trænsˈfɔːrmər/", cn: "变压器", phonics: "trans 读 /træns/，former 读 /fɔːrmər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "Please check the UPS operating status.", cn: "请检查UPS运行状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "Please check the cooling system operating status.", cn: "请检查冷却系统运行状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
    ],
    thinking: "柴油发电机是数据中心的最后一道防线。交接检查顺序：① 整体运行状态（本句）→ ② 各台发电机模式（1522-1523）→ ③ 控制器状态（1524-1525）→ ④ 启动电池（1526-1527）→ ⑤ 冷却液/机油（1528-1530）。\n发电机必须保持自动待机状态，确保市电中断时能在10秒内启动并带载。",
    pronunciation: "generator 的 gen 读 /ˈdʒɛn/，不是 /ˈdʒiːn/。\noperating 的 o 读 /ɒ/，重音在 op 上。",
    quiz: [
      { q: "请检查变压器运行状态，怎么说？", a: "Please check the transformer operating status." },
      { q: "数据中心柴油发电机的主要作用是什么？", a: "柴油发电机是数据中心的应急备用电源，当市电中断时自动启动，为关键负载（服务器、冷却系统、照明等）提供持续供电，确保数据中心业务连续性。" },
    ],
  },
  {
    id: 1522,
    en: "Generator No.1 is in automatic mode.",
    cn: "1号柴油发电机处于自动模式。",
    ipa: "/ˈdʒɛnəreɪtər ˌnʌmˈwʌn ɪz ɪn ˌɔːtəˈmætɪk moʊd/",
    tags: ["第1522句", "发电机模式", "★★★★★"],
    when: "确认1号发电机处于自动模式，可以在市电中断时自动启动。automatic mode 是发电机的正常工作模式。",
    words: [
      { w: "automatic mode", ipa: "/ˌɔːtəˈmætɪk moʊd/", pos: "名词短语", cn: "自动模式", memory: "automatic = 自动的；mode = 模式。\nautomatic mode = 自动模式，设备可以自动响应控制信号。\n发电机必须处于自动模式，确保市电中断时能自动启动。", phonics: "auto 读 /ˌɔːtə/，matic 读 /ˈmætɪk/，mode 读 /moʊd/。", collocations: [["in automatic mode", "处于自动模式"], ["switch to automatic mode", "切换到自动模式"], ["automatic start", "自动启动"]], examples: [["The generator is in automatic mode.", "发电机处于自动模式。"], ["Please switch to automatic mode.", "请切换到自动模式。"]] },
    ],
    phrases: [
      { p: "in automatic mode", ipa: "/ɪn ˌɔːtəˈmætɪk moʊd/", cn: "处于自动模式", why: "in + automatic + mode = 处于自动模式。这是发电机的标准工作状态，表示设备可以自动响应市电中断信号。" },
    ],
    grammar: [
      { q: "is in automatic mode 和 operates automatically 有什么区别？", a: "is in automatic mode = 处于自动模式（描述当前设置状态）\noperates automatically = 自动运行（描述运行方式）\n✅ Generator No.1 is in automatic mode.（1号发电机处于自动模式 → 当前设置）\n✅ The generator operates automatically when power fails.（发电机在断电时自动运行 → 运行方式）\n交接时关注'当前的模式设置'。" },
    ],
    pattern: "设备 + No.X + is in automatic mode",
    patternExamples: [
      { en: "Generator No.2 is in automatic mode.", cn: "2号发电机处于自动模式。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "mode", ipa: "/moʊd/", cn: "模式", phonics: "mode 读 /moʊd/" }] },
      { en: "UPS No.1 is in automatic mode.", cn: "1号UPS处于自动模式。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "mode", ipa: "/moʊd/", cn: "模式", phonics: "mode 读 /moʊd/" }] },
      { en: "Chiller No.3 is in automatic mode.", cn: "3号冷水机组处于自动模式。", words: [{ w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }, { w: "mode", ipa: "/moʊd/", cn: "模式", phonics: "mode 读 /moʊd/" }] },
    ],
    thinking: "发电机的工作模式：\n① Automatic mode（自动模式）→ 正常工作状态，市电中断时自动启动\n② Manual mode（手动模式）→ 测试或维护时使用，需要人工操作\n③ Standby mode（备用模式）→ 作为后备机，主机故障时启动\n交接时必须确认所有发电机处于 automatic mode，确保应急响应能力。",
    pronunciation: "automatic 的 auto 读 /ˌɔːtə/，不是 /ˌɒtə/。\nmode 的 o 读 /oʊ/，不是 /ɒ/。",
    quiz: [
      { q: "2号发电机处于自动模式，怎么说？", a: "Generator No.2 is in automatic mode." },
    ],
  },
  {
    id: 1523,
    en: "Generator No.2 is in standby mode.",
    cn: "2号柴油发电机处于备用状态。",
    ipa: "/ˈdʒɛnəreɪtər ˌnʌmˈtuː ɪz ɪn ˈstændbaɪ moʊd/",
    tags: ["第1523句", "发电机模式", "★★★★★"],
    when: "确认2号发电机处于备用状态，作为1号发电机的后备。standby mode 表示设备待机，主设备故障时自动启动。",
    words: [
      { w: "standby mode", ipa: "/ˈstændbaɪ moʊd/", pos: "名词短语", cn: "备用模式；待机状态", memory: "standby = 备用/待机；mode = 模式。\nstandby mode = 备用模式，设备处于待机状态，等待主设备故障时启动。\n数据中心采用 N+1 冗余，备用发电机确保主发电机故障时仍有电源。", phonics: "stand 读 /stænd/，by 读 /baɪ/，重音在 stand 上。", collocations: [["in standby mode", "处于备用模式"], ["standby generator", "备用发电机"], ["standby power", "备用电源"]], examples: [["The generator is in standby mode.", "发电机处于备用模式。"], ["Standby power is ready.", "备用电源已就绪。"]] },
    ],
    phrases: [
      { p: "in standby mode", ipa: "/ɪn ˈstændbaɪ moʊd/", cn: "处于备用模式", why: "in + standby + mode = 处于备用模式。这是冗余配置中后备设备的工作状态，确保系统可靠性。" },
    ],
    grammar: [
      { q: "standby 和 backup 有什么区别？", a: "standby = 备用/待机（强调'随时待命'状态）\nbackup = 备份/后备（强调'备份数据或设备'）\n✅ The generator is in standby mode.（发电机处于待机模式 → 随时可以启动）\n✅ We have a backup generator.（我们有一台备用发电机 → 备份设备）\nstandby 更强调'待命'，backup 更强调'备份'。" },
    ],
    pattern: "设备 + No.X + is in standby mode",
    patternExamples: [
      { en: "Generator No.3 is in standby mode.", cn: "3号发电机处于备用模式。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "mode", ipa: "/moʊd/", cn: "模式", phonics: "mode 读 /moʊd/" }] },
      { en: "UPS No.2 is in standby mode.", cn: "2号UPS处于备用模式。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "mode", ipa: "/moʊd/", cn: "模式", phonics: "mode 读 /moʊd/" }] },
      { en: "Chiller No.4 is in standby mode.", cn: "4号冷水机组处于备用模式。", words: [{ w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }, { w: "mode", ipa: "/moʊd/", cn: "模式", phonics: "mode 读 /moʊd/" }] },
    ],
    thinking: "发电机冗余配置策略：\n① N+1 冗余：1台主用 + 1台备用\n② 2N 冗余：2台主用 + 2台备用\n③ 2(N+1) 冗余：双路供电，每路 N+1\n数据中心通常采用 N+1 或 2N 配置，确保任何一台发电机故障时，其他发电机可以接管全部负载。",
    pronunciation: "standby 的 stand 读 /stænd/，by 读 /baɪ/。\nmode 的 o 读 /oʊ/，不是 /ɒ/。",
    quiz: [
      { q: "3号发电机处于备用状态，怎么说？", a: "Generator No.3 is in standby mode." },
    ],
  },
  {
    id: 1524,
    en: "Please check the generator controller.",
    cn: "请检查发电机控制器。",
    ipa: "/pliːz tʃɛk ðə ˈdʒɛnəreɪtər kənˈtroʊlər/",
    tags: ["第1524句", "发电机控制器", "★★★★★"],
    when: "发电机控制器是发电机的'大脑'，负责监控运行参数、执行自动启停、保护设备安全。交接时需检查控制器状态。",
    words: [
      { w: "controller", ipa: "/kənˈtroʊlər/", pos: "名词", cn: "控制器", memory: "control = 控制；-er = 设备/人。\ncontroller = 控制器，负责监控和管理设备运行的电子系统。\n发电机控制器监控转速、电压、频率、温度等参数。", phonics: "con 读 /kən/，troller 读 /ˈtroʊlər/，重音在 trol 上。", collocations: [["generator controller", "发电机控制器"], ["check controller", "检查控制器"], ["controller display", "控制器显示屏"]], examples: [["The controller is working.", "控制器正在工作。"], ["Check the controller display.", "检查控制器显示屏。"]] },
    ],
    phrases: [
      { p: "generator controller", ipa: "/ˈdʒɛnəreɪtər kənˈtroʊlər/", cn: "发电机控制器", why: "generator + controller = 发电机控制器。这是发电机的核心控制系统，负责自动启停、参数监控、故障保护等功能。" },
    ],
    grammar: [
      { q: "为什么用 check 而不是 inspect？", a: "check = 检查/查看（快速确认状态）\ninspect = 检验/检查（详细的物理检查）\n✅ Please check the generator controller.（请检查发电机控制器 → 查看控制器显示）\n✅ Please inspect the generator controller.（请检查发电机控制器 → 详细检查控制器硬件）\n交接时用 check，因为是通过控制器显示屏快速查看。" },
    ],
    pattern: "Please check the + 设备 + controller",
    patternExamples: [
      { en: "Please check the UPS controller.", cn: "请检查UPS控制器。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }] },
      { en: "Please check the chiller controller.", cn: "请检查冷水机组控制器。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }] },
      { en: "Please check the ATS controller.", cn: "请检查ATS控制器。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "发电机控制器的主要功能：\n① 自动启停控制（根据市电状态自动启动/停止）\n② 运行参数监控（转速、电压、频率、温度、油压等）\n③ 故障保护（超速、低油压、高温等自动停机）\n④ 通信接口（与BMS系统通信，上传状态数据）\n控制器是发电机智能化管理的核心。",
    pronunciation: "controller 的 con 读 /kən/，不是 /kɒn/。\ntroller 的 o 读 /oʊ/，不是 /ɒ/。",
    quiz: [
      { q: "请检查UPS控制器，怎么说？", a: "Please check the UPS controller." },
    ],
  },
  {
    id: 1525,
    en: "The generator controller is operating normally.",
    cn: "发电机控制器运行正常。",
    ipa: "/ðə ˈdʒɛnəreɪtər kənˈtroʊlər ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1525句", "控制器状态", "★★★★★"],
    when: "确认发电机控制器运行状态正常，无告警、无异常。这是交接时的理想状态报告。",
    words: [
      { w: "normally", ipa: "/ˈnɔːrməli/", pos: "副词", cn: "正常地", memory: "normal = 正常的；-ly = 副词后缀。\nnormally = 正常地/按常规。\noperating normally = 正常运行。", phonics: "nor 读 /nɔːr/，mally 读 /məli/。", collocations: [["operating normally", "正常运行"], ["functioning normally", "正常运作"], ["running normally", "正常运转"]], examples: [["All systems are operating normally.", "所有系统正常运行。"], ["The equipment is functioning normally.", "设备正常运作。"]] },
    ],
    phrases: [
      { p: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "运行正常", why: "operating + normally = 正常运行。这是汇报设备状态的标准用语，表明设备在正常参数范围内工作。" },
    ],
    grammar: [
      { q: "is operating 和 operates 有什么区别？", a: "is operating = 正在运行（现在进行时，强调当前状态）\noperates = 运行（一般现在时，描述常态）\n✅ The controller is operating normally.（控制器正在正常运行 → 汇报当前状态）\n✅ The controller operates 24/7.（控制器24小时运行 → 描述常态）\n交接用进行时，关注'此刻的运行状态'。" },
    ],
    pattern: "设备 + controller + is operating normally",
    patternExamples: [
      { en: "The UPS controller is operating normally.", cn: "UPS控制器运行正常。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The chiller controller is operating normally.", cn: "冷水机组控制器运行正常。", words: [{ w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The ATS controller is operating normally.", cn: "ATS控制器运行正常。", words: [{ w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "控制器状态汇报的三种结论：\n① Controller operating normally（控制器正常 → 最佳）\n② Controller has a warning（控制器有警告 → 需进一步排查）\n③ Controller is offline（控制器离线 → 需立即处理）\n交接时确认控制器正常，是确保发电机可靠待机的关键。",
    pronunciation: "normally 的 r 在美式英语中发音，英式中不发音。\noperating 的 o 读 /ɒ/，重音在 op 上。",
    quiz: [
      { q: "UPS控制器运行正常，怎么说？", a: "The UPS controller is operating normally." },
    ],
  },
  {
    id: 1526,
    en: "Please check the generator battery voltage.",
    cn: "请检查发电机启动电池电压。",
    ipa: "/pliːz tʃɛk ðə ˈdʒɛnəreɪtər ˈbætəri ˈvoʊltɪdʒ/",
    tags: ["第1526句", "启动电池", "★★★★★"],
    when: "发电机启动电池负责提供启动能量。电池电压不足会导致启动失败。交接时需检查电池电压。",
    words: [
      { w: "battery voltage", ipa: "/ˈbætəri ˈvoʊltɪdʒ/", pos: "名词短语", cn: "电池电压", memory: "battery = 电池；voltage = 电压。\nbattery voltage = 电池电压，电池当前的电压值。\n发电机启动电池通常为24V直流，电压低于22V可能导致启动失败。", phonics: "bat 读 /ˈbæt/，tery 读 /əri/，voltage 读 /ˈvoʊltɪdʒ/。", collocations: [["check battery voltage", "检查电池电压"], ["low battery voltage", "低电池电压"], ["battery voltage normal", "电池电压正常"]], examples: [["The battery voltage is low.", "电池电压低。"], ["Check the battery voltage.", "检查电池电压。"]] },
    ],
    phrases: [
      { p: "generator battery voltage", ipa: "/ˈdʒɛnəreɪtər ˈbætəri ˈvoʊltɪdʒ/", cn: "发电机启动电池电压", why: "generator + battery + voltage = 发电机启动电池电压。启动电池是发电机启动的能量来源，电压不足会导致启动失败。" },
    ],
    grammar: [
      { q: "为什么用 check 而不是 measure？", a: "check = 检查/查看（确认是否正常）\nmeasure = 测量（获取具体数值）\n✅ Please check the battery voltage.（请检查电池电压 → 确认是否正常）\n✅ Please measure the battery voltage.（请测量电池电压 → 获取具体数值）\n交接时用 check，因为是通过监控快速确认，不需要精确测量。" },
    ],
    pattern: "Please check the + 设备 + battery voltage",
    patternExamples: [
      { en: "Please check the UPS battery voltage.", cn: "请检查UPS电池电压。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "battery", ipa: "/ˈbætəri/", cn: "电池", phonics: "bat 读 /bæt/，tery 读 /təri/" }] },
      { en: "Please check the emergency light battery voltage.", cn: "请检查应急灯电池电压。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "emergency", ipa: "/ɪˈmɜːrdʒənsi/", cn: "紧急", phonics: "e 读 /ɪ/，mergency 读 /mɜːrdʒənsi/" }, { w: "battery", ipa: "/ˈbætəri/", cn: "电池", phonics: "bat 读 /bæt/，tery 读 /təri/" }] },
      { en: "Please check the control panel battery voltage.", cn: "请检查控制面板电池电压。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "control", ipa: "/kənˈtroʊl/", cn: "控制", phonics: "con 读 /kən/，trol 读 /troʊl/" }, { w: "panel", ipa: "/ˈpænl/", cn: "面板", phonics: "pan 读 /pæn/，el 读 /l/" }] },
    ],
    thinking: "发电机启动电池的重要性：\n① 提供启动能量（启动电机需要大电流）\n② 维持控制器供电（控制器需要持续供电）\n③ 保持通信接口（与BMS通信需要电源）\n电池电压正常范围：24V系统通常在23-27V之间，低于22V或高于28V都需要关注。",
    pronunciation: "battery 的 bat 读 /ˈbæt/，不是 /ˈbeɪt/。\nvoltage 的 o 读 /oʊ/，不是 /ɒ/。",
    quiz: [
      { q: "请检查UPS电池电压，怎么说？", a: "Please check the UPS battery voltage." },
    ],
  },
  {
    id: 1527,
    en: "The battery voltage is normal.",
    cn: "启动电池电压正常。",
    ipa: "/ðə ˈbætəri ˈvoʊltɪdʒ ɪz ˈnɔːrməl/",
    tags: ["第1527句", "电池状态", "★★★★★"],
    when: "确认发电机启动电池电压在正常范围内，可以可靠启动。",
    words: [
      { w: "normal", ipa: "/ˈnɔːrməl/", pos: "形容词", cn: "正常的", memory: "normal = 正常的/标准的。\nnormal range = 正常范围。\nbattery voltage is normal = 电池电压正常。", phonics: "nor 读 /nɔːr/，mal 读 /məl/。", collocations: [["normal range", "正常范围"], ["normal operation", "正常运行"], ["back to normal", "恢复正常"]], examples: [["The temperature is normal.", "温度正常。"], ["Everything is back to normal.", "一切恢复正常。"]] },
    ],
    phrases: [
      { p: "battery voltage is normal", ipa: "/ˈbætəri ˈvoʊltɪdʒ ɪz ˈnɔːrməl/", cn: "电池电压正常", why: "battery + voltage + is + normal = 电池电压正常。这是确认启动电池状态良好的标准用语。" },
    ],
    grammar: [
      { q: "is normal 和 is within normal range 有什么区别？", a: "is normal = 正常（简洁表达）\nis within normal range = 在正常范围内（更精确）\n✅ The battery voltage is normal.（电池电压正常 → 简洁）\n✅ The battery voltage is within normal range.（电池电压在正常范围内 → 更精确）\n交接时用简洁表达，快速确认状态。" },
    ],
    pattern: "设备 + voltage + is normal",
    patternExamples: [
      { en: "The UPS voltage is normal.", cn: "UPS电压正常。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The bus voltage is normal.", cn: "母线电压正常。", words: [{ w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The input voltage is normal.", cn: "输入电压正常。", words: [{ w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "电池电压异常的常见原因：\n① 电池老化（内阻增大，电压下降）\n② 充电系统故障（浮充电压不足）\n③ 环境温度过高（加速电池老化）\n④ 连接端子松动（接触电阻增大）\n发现电池电压异常时，应及时更换电池或检修充电系统。",
    pronunciation: "normal 的 nor 读 /nɔːr/，mal 读 /məl/。\nvoltage 的 o 读 /oʊ/，不是 /ɒ/。",
    quiz: [
      { q: "UPS电压正常，怎么说？", a: "The UPS voltage is normal." },
    ],
  },
  {
    id: 1528,
    en: "Please check the engine coolant level.",
    cn: "请检查发动机冷却液液位。",
    ipa: "/pliːz tʃɛk ðə ˈɛndʒɪn ˈkuːlənt ˈlɛvəl/",
    tags: ["第1528句", "冷却液", "★★★★★"],
    when: "发动机冷却液负责散热，防止发动机过热。冷却液不足会导致发动机过热损坏。交接时需检查冷却液液位。",
    words: [
      { w: "coolant", ipa: "/ˈkuːlənt/", pos: "名词", cn: "冷却液", memory: "cool = 冷却；-ant = 物质/剂。\ncoolant = 冷却液，用于发动机散热的液体。\n发电机发动机需要冷却液循环散热，防止过热。", phonics: "cool 读 /kuːl/，ant 读 /ənt/。", collocations: [["engine coolant", "发动机冷却液"], ["coolant level", "冷却液液位"], ["coolant temperature", "冷却液温度"]], examples: [["The coolant level is low.", "冷却液液位低。"], ["Check the coolant temperature.", "检查冷却液温度。"]] },
      { w: "level", ipa: "/ˈlɛvəl/", pos: "名词", cn: "液位；水平", memory: "level = 液位/水平/等级。\ncoolant level = 冷却液液位。\noil level = 机油液位。\nfuel level = 燃油液位。", phonics: "lev 读 /lɛv/，el 读 /əl/。", collocations: [["check level", "检查液位"], ["low level", "低液位"], ["normal level", "正常液位"]], examples: [["The water level is normal.", "水位正常。"], ["Check the oil level.", "检查机油液位。"]] },
    ],
    phrases: [
      { p: "engine coolant level", ipa: "/ˈɛndʒɪn ˈkuːlənt ˈlɛvəl/", cn: "发动机冷却液液位", why: "engine + coolant + level = 发动机冷却液液位。冷却液是发动机散热系统的关键，液位不足会导致发动机过热。" },
    ],
    grammar: [
      { q: "为什么用 check 而不是 refill？", a: "check = 检查/查看（确认是否需要补充）\nrefill = 重新加注（执行补充操作）\n✅ Please check the coolant level.（请检查冷却液液位 → 确认是否需要补充）\n✅ Please refill the coolant.（请补充冷却液 → 执行补充操作）\n交接时先 check，确认后再决定是否 refill。" },
    ],
    pattern: "Please check the + 设备 + coolant level",
    patternExamples: [
      { en: "Please check the chiller coolant level.", cn: "请检查冷水机组冷却液液位。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }, { w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }] },
      { en: "Please check the radiator coolant level.", cn: "请检查散热器冷却液液位。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }] },
      { en: "Please check the heat exchanger coolant level.", cn: "请检查换热器冷却液液位。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }] },
    ],
    thinking: "发动机冷却系统的重要性：\n① 发动机运行时产生大量热量\n② 冷却液循环带走热量\n③ 冷却液不足 → 发动机过热 → 自动停机保护\n④ 冷却液过多 → 溢出 → 污染环境\n交接时检查冷却液液位，确保在正常范围内。",
    pronunciation: "coolant 的 cool 读 /kuːl/，ant 读 /ənt/。\nlevel 的 lev 读 /lɛv/，el 读 /əl/。",
    quiz: [
      { q: "请检查冷水机组冷却液液位，怎么说？", a: "Please check the chiller coolant level." },
    ],
  },
  {
    id: 1529,
    en: "The coolant level is within the normal range.",
    cn: "冷却液液位正常。",
    ipa: "/ðə ˈkuːlənt ˈlɛvəl ɪz wɪˈðɪn ðə ˈnɔːrməl reɪndʒ/",
    tags: ["第1529句", "冷却液状态", "★★★★★"],
    when: "确认发动机冷却液液位在正常范围内，可以安全运行。",
    words: [
      { w: "within normal range", ipa: "/wɪˈðɪn ˈnɔːrməl reɪndʒ/", pos: "介词短语", cn: "在正常范围内", memory: "within = 在...范围内；normal = 正常的；range = 范围。\nwithin normal range = 在正常范围内。\n这是确认参数正常的精确表达。", phonics: "with 读 /wɪð/，in 读 /ɪn/，range 读 /reɪndʒ/。", collocations: [["within normal range", "在正常范围内"], ["within acceptable range", "在可接受范围内"], ["out of range", "超出范围"]], examples: [["The temperature is within normal range.", "温度在正常范围内。"], ["The pressure is out of range.", "压力超出范围。"]] },
    ],
    phrases: [
      { p: "within normal range", ipa: "/wɪˈðɪn ˈnɔːrməl reɪndʒ/", cn: "在正常范围内", why: "within + normal + range = 在正常范围内。这是确认参数正常的精确表达，比简单的 normal 更专业。" },
    ],
    grammar: [
      { q: "is normal 和 is within normal range 哪个更精确？", a: "is normal = 正常（简洁但不精确）\nis within normal range = 在正常范围内（更精确）\n✅ The coolant level is normal.（冷却液液位正常 → 简洁）\n✅ The coolant level is within normal range.（冷却液液位在正常范围内 → 精确）\n交接时用精确表达，体现专业性。" },
    ],
    pattern: "参数 + is within normal range",
    patternExamples: [
      { en: "The temperature is within normal range.", cn: "温度在正常范围内。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The pressure is within normal range.", cn: "压力在正常范围内。", words: [{ w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }, { w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The frequency is within normal range.", cn: "频率在正常范围内。", words: [{ w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }, { w: "range", ipa: "/reɪndʒ/", cn: "范围", phonics: "range 读 /reɪndʒ/" }] },
    ],
    thinking: "冷却液液位的正常范围：\n① 通常在 MIN 和 MAX 标记之间\n② 低于 MIN → 需要补充\n③ 高于 MAX → 需要排放\n④ 定期检查 → 防止缓慢泄漏\n交接时确认冷却液液位在正常范围内，是确保发动机安全运行的关键。",
    pronunciation: "within 的 with 读 /wɪð/，in 读 /ɪn/。\nrange 的 a 读 /eɪ/，不是 /æ/。",
    quiz: [
      { q: "温度在正常范围内，怎么说？", a: "The temperature is within normal range." },
    ],
  },
  {
    id: 1530,
    en: "Please check the engine oil level.",
    cn: "请检查发动机机油液位。",
    ipa: "/pliːz tʃɛk ðə ˈɛndʒɪn ɔɪl ˈlɛvəl/",
    tags: ["第1530句", "机油", "★★★★★"],
    when: "发动机机油负责润滑和冷却。机油不足会导致发动机磨损和过热。交接时需检查机油液位。",
    words: [
      { w: "engine oil", ipa: "/ˈɛndʒɪn ɔɪl/", pos: "名词短语", cn: "发动机机油", memory: "engine = 发动机；oil = 油/机油。\nengine oil = 发动机机油，用于润滑发动机内部运动部件。\n发电机发动机需要定期更换机油，保持润滑效果。", phonics: "en 读 /ɛn/，gine 读 /dʒɪn/，oil 读 /ɔɪl/。", collocations: [["engine oil level", "发动机机油液位"], ["change engine oil", "更换发动机机油"], ["engine oil filter", "发动机机油滤清器"]], examples: [["The engine oil is dirty.", "发动机机油脏了。"], ["Change the engine oil.", "更换发动机机油。"]] },
    ],
    phrases: [
      { p: "engine oil level", ipa: "/ˈɛndʒɪn ɔɪl ˈlɛvəl/", cn: "发动机机油液位", why: "engine + oil + level = 发动机机油液位。机油是发动机润滑系统的关键，液位不足会导致发动机磨损。" },
    ],
    grammar: [
      { q: "为什么用 check 而不是 change？", a: "check = 检查/查看（确认是否需要更换）\nchange = 更换（执行更换操作）\n✅ Please check the engine oil level.（请检查机油液位 → 确认是否需要补充）\n✅ Please change the engine oil.（请更换机油 → 执行更换操作）\n交接时先 check，确认后再决定是否 change。" },
    ],
    pattern: "Please check the + 设备 + oil level",
    patternExamples: [
      { en: "Please check the transformer oil level.", cn: "请检查变压器油液位。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "transformer", ipa: "/trænsˈfɔːrmər/", cn: "变压器", phonics: "trans 读 /træns/，former 读 /fɔːrmər/" }, { w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }] },
      { en: "Please check the hydraulic oil level.", cn: "请检查液压油液位。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }] },
      { en: "Please check the gearbox oil level.", cn: "请检查齿轮箱油液位。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }] },
    ],
    thinking: "发动机机油的重要性：\n① 润滑运动部件（活塞、曲轴、轴承等）\n② 冷却发动机（带走摩擦热）\n③ 清洁发动机（带走金属碎屑）\n④ 密封气缸（防止气体泄漏）\n机油液位不足或机油老化都会影响发动机性能和寿命。",
    pronunciation: "engine 的 en 读 /ɛn/，不是 /iːn/。\noil 的 oi 读 /ɔɪ/，不是 /oʊ/。",
    quiz: [
      { q: "请检查变压器油液位，怎么说？", a: "Please check the transformer oil level." },
    ],
  },
  {
    id: 1531,
    en: "Please check the fuel level.",
    cn: "请检查燃油液位。",
    ipa: "/pliːz tʃɛk ðə fjuːəl ˈlɛvəl/",
    tags: ["第1531句", "燃油系统", "★★★★★"],
    when: "燃油是发电机的能量来源。燃油不足会导致发电机无法持续运行。交接时需检查燃油液位。",
    words: [
      { w: "fuel level", ipa: "/fjuːəl ˈlɛvəl/", pos: "名词短语", cn: "燃油液位", memory: "fuel = 燃料/燃油；level = 液位/水平。\nfuel level = 燃油液位，油箱中燃油的剩余量。\n发电机需要充足的燃油储备，确保持续运行能力。", phonics: "fu 读 /fjuː/，el 读 /əl/，level 读 /ˈlɛvəl/。", collocations: [["check fuel level", "检查燃油液位"], ["low fuel level", "低燃油液位"], ["fuel level indicator", "燃油液位指示器"]], examples: [["The fuel level is low.", "燃油液位低。"], ["Check the fuel level indicator.", "检查燃油液位指示器。"]] },
    ],
    phrases: [
      { p: "fuel level", ipa: "/fjuːəl ˈlɛvəl/", cn: "燃油液位", why: "fuel + level = 燃油液位。这是发电机能量储备的直观指标，液位过低会影响发电机的持续运行能力。" },
    ],
    grammar: [
      { q: "为什么用 check 而不是 refill？", a: "check = 检查/查看（确认是否需要补充）\nrefill = 重新加注（执行补充操作）\n✅ Please check the fuel level.（请检查燃油液位 → 确认是否需要补充）\n✅ Please refill the fuel tank.（请补充燃油箱 → 执行补充操作）\n交接时先 check，确认后再决定是否 refill。" },
    ],
    pattern: "Please check the + 设备 + fuel level",
    patternExamples: [
      { en: "Please check the main fuel tank level.", cn: "请检查主燃油箱液位。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "tank", ipa: "/tæŋk/", cn: "储箱", phonics: "tank 读 /tæŋk/" }, { w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }] },
      { en: "Please check the daily fuel tank level.", cn: "请检查日用燃油箱液位。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "tank", ipa: "/tæŋk/", cn: "储箱", phonics: "tank 读 /tæŋk/" }, { w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }] },
      { en: "Please check the emergency fuel level.", cn: "请检查应急燃油液位。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "emergency", ipa: "/ɪˈmɜːrdʒənsi/", cn: "紧急", phonics: "e 读 /ɪ/，mergency 读 /mɜːrdʒənsi/" }, { w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }] },
    ],
    thinking: "发电机燃油系统的重要性：\n① 燃油是发电机的能量来源\n② 燃油液位决定持续运行时间\n③ 数据中心通常要求8-24小时燃油储备\n④ 燃油不足 → 发电机停机 → 数据中心断电\n交接时检查燃油液位，是确保发电机应急能力的关键。",
    pronunciation: "fuel 的 fu 读 /fjuː/，el 读 /əl/。\nlevel 的 lev 读 /lɛv/，el 读 /əl/。",
    quiz: [
      { q: "请检查主燃油箱液位，怎么说？", a: "Please check the main fuel tank level." },
    ],
  },
  {
    id: 1532,
    en: "The fuel tank is ninety percent full.",
    cn: "燃油箱当前为90%的液位。",
    ipa: "/ðə fjuːəl tæŋk ɪz ˈnaɪnti pərˈsɛnt fʊl/",
    tags: ["第1532句", "燃油状态", "★★★★★"],
    when: "汇报燃油箱当前液位为90%，表示燃油储备充足。ninety percent 表示90%。",
    words: [
      { w: "fuel tank", ipa: "/fjuːəl tæŋk/", pos: "名词短语", cn: "燃油箱", memory: "fuel = 燃料；tank = 箱/罐。\nfuel tank = 燃油箱，储存燃油的容器。\n发电机通常配备主油箱和日用油箱两级储油。", phonics: "fu 读 /fjuː/，el 读 /əl/，tank 读 /tæŋk/。", collocations: [["main fuel tank", "主燃油箱"], ["daily fuel tank", "日用燃油箱"], ["fuel tank capacity", "燃油箱容量"]], examples: [["The fuel tank is full.", "燃油箱已满。"], ["Check the fuel tank capacity.", "检查燃油箱容量。"]] },
      { w: "ninety percent", ipa: "/ˈnaɪnti pərˈsɛnt/", pos: "数量短语", cn: "90%", memory: "ninety = 90；percent = 百分比。\nninety percent = 90%，表示燃油箱剩余容量。\n交接时汇报具体百分比，体现精确性。", phonics: "nine 读 /naɪn/，ty 读 /ti/，percent 读 /pərˈsɛnt/。", collocations: [["ninety percent full", "90%满"], ["ninety percent capacity", "90%容量"], ["ninety percent loaded", "90%负载"]], examples: [["The tank is ninety percent full.", "油箱90%满。"], ["The generator is at ninety percent load.", "发电机负载90%。"]] },
    ],
    phrases: [
      { p: "fuel tank is ninety percent full", ipa: "/fjuːəl tæŋk ɪz ˈnaɪnti pərˈsɛnt fʊl/", cn: "燃油箱90%满", why: "fuel + tank + is + ninety + percent + full = 燃油箱90%满。这是汇报燃油储备的精确表达，比简单的 full 或 low 更专业。" },
    ],
    grammar: [
      { q: "为什么用 ninety percent full 而不是 almost full？", a: "ninety percent full = 90%满（精确数值）\nalmost full = 几乎满了（模糊描述）\n✅ The fuel tank is ninety percent full.（燃油箱90%满 → 精确）\n✅ The fuel tank is almost full.（燃油箱几乎满了 → 模糊）\n交接时用精确数值，体现专业性和可追溯性。" },
    ],
    pattern: "设备 + is + 百分比 + percent + full/loaded/charged",
    patternExamples: [
      { en: "The battery is eighty percent charged.", cn: "电池充电80%。", words: [{ w: "battery", ipa: "/ˈbætəri/", cn: "电池", phonics: "bat 读 /bæt/，tery 读 /təri/" }] },
      { en: "The generator is at seventy percent load.", cn: "发电机负载70%。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
      { en: "The water tank is sixty percent full.", cn: "水箱60%满。", words: [{ w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "tank", ipa: "/tæŋk/", cn: "储箱", phonics: "tank 读 /tæŋk/" }] },
    ],
    thinking: "燃油储备标准：\n① 数据中心通常要求8-24小时燃油储备\n② 燃油液位低于50% → 需要安排补油\n③ 燃油液位低于30% → 紧急补油\n④ 燃油液位90% → 储备充足，可以持续运行\n交接时汇报具体百分比，便于评估应急能力。",
    pronunciation: "ninety 的 nine 读 /naɪn/，ty 读 /ti/。\npercent 的 per 读 /pər/，cent 读 /sɛnt/。",
    quiz: [
      { q: "电池充电80%，怎么说？", a: "The battery is eighty percent charged." },
    ],
  },
  {
    id: 1533,
    en: "Please check the daily fuel tank.",
    cn: "请检查日用油箱。",
    ipa: "/pliːz tʃɛk ðə ˈdeɪli fjuːəl tæŋk/",
    tags: ["第1533句", "日用油箱", "★★★★★"],
    when: "日用油箱是发电机直接使用的燃油储备，通常容量较小（8-24小时）。主油箱通过输油泵向日用油箱补油。",
    words: [
      { w: "daily fuel tank", ipa: "/ˈdeɪli fjuːəl tæŋk/", pos: "名词短语", cn: "日用燃油箱", memory: "daily = 日用的/日常的；fuel = 燃油；tank = 箱。\ndaily fuel tank = 日用燃油箱，发电机直接使用的燃油储备。\n日用油箱容量通常满足8-24小时运行需求。", phonics: "day 读 /deɪ/，ly 读 /li/，fuel 读 /fjuːəl/。", collocations: [["check daily fuel tank", "检查日用油箱"], ["daily fuel tank level", "日用油箱液位"], ["refill daily fuel tank", "补充日用油箱"]], examples: [["The daily fuel tank is low.", "日用油箱液位低。"], ["Refill the daily fuel tank.", "补充日用油箱。"]] },
    ],
    phrases: [
      { p: "daily fuel tank", ipa: "/ˈdeɪli fjuːəl tæŋk/", cn: "日用燃油箱", why: "daily + fuel + tank = 日用燃油箱。这是发电机直接使用的燃油储备，与主油箱分开管理，确保快速响应。" },
    ],
    grammar: [
      { q: "为什么叫 daily fuel tank？", a: "daily = 日用的/日常的\ndaily fuel tank = 日用燃油箱，设计容量满足一天的运行需求。\n主油箱（main fuel tank）容量更大，可以储存数周或数月的燃油。\n日用油箱通过输油泵从主油箱补油，确保发电机随时有燃油可用。" },
    ],
    pattern: "Please check the + 设备 + tank",
    patternExamples: [
      { en: "Please check the water tank.", cn: "请检查水箱。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "tank", ipa: "/tæŋk/", cn: "储箱", phonics: "tank 读 /tæŋk/" }] },
      { en: "Please check the chemical tank.", cn: "请检查化学品箱。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "tank", ipa: "/tæŋk/", cn: "储箱", phonics: "tank 读 /tæŋk/" }] },
      { en: "Please check the coolant tank.", cn: "请检查冷却液箱。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "tank", ipa: "/tæŋk/", cn: "储箱", phonics: "tank 读 /tæŋk/" }] },
    ],
    thinking: "发电机燃油系统的两级储油：\n① 主油箱（main fuel tank）→ 大容量，储存数周燃油\n② 日用油箱（daily fuel tank）→ 小容量，直接供发电机使用\n③ 输油泵（fuel transfer pump）→ 从主油箱向日用油箱补油\n这种设计确保发电机快速响应，同时有足够的长期储备。",
    pronunciation: "daily 的 day 读 /deɪ/，ly 读 /li/。\nfuel 的 fu 读 /fjuː/，el 读 /əl/。",
    quiz: [
      { q: "请检查水箱，怎么说？", a: "Please check the water tank." },
    ],
  },
  {
    id: 1534,
    en: "The daily fuel tank is operating normally.",
    cn: "日用油箱运行正常。",
    ipa: "/ðə ˈdeɪli fjuːəl tæŋk ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1534句", "日用油箱状态", "★★★★★"],
    when: "确认日用油箱运行状态正常，液位、温度、压力等参数都在正常范围内。",
    words: [
      { w: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", pos: "动词短语", cn: "运行正常", memory: "operating = 运行中的；normally = 正常地。\noperating normally = 正常运行。\n这是汇报设备状态的标准用语。", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/，normally 读 /ˈnɔːrməli/。", collocations: [["operating normally", "正常运行"], ["functioning normally", "正常运作"], ["running normally", "正常运转"]], examples: [["All systems are operating normally.", "所有系统正常运行。"], ["The equipment is functioning normally.", "设备正常运作。"]] },
    ],
    phrases: [
      { p: "daily fuel tank is operating normally", ipa: "/ˈdeɪli fjuːəl tæŋk ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "日用油箱运行正常", why: "daily + fuel + tank + is + operating + normally = 日用油箱运行正常。这是确认日用油箱状态良好的标准用语。" },
    ],
    grammar: [
      { q: "is operating 和 operates 有什么区别？", a: "is operating = 正在运行（现在进行时，强调当前状态）\noperates = 运行（一般现在时，描述常态）\n✅ The daily fuel tank is operating normally.（日用油箱正在正常运行 → 汇报当前状态）\n✅ The daily fuel tank operates automatically.（日用油箱自动运行 → 描述常态）\n交接用进行时，关注'此刻的运行状态'。" },
    ],
    pattern: "设备 + is operating normally",
    patternExamples: [
      { en: "The main fuel tank is operating normally.", cn: "主燃油箱运行正常。", words: [{ w: "tank", ipa: "/tæŋk/", cn: "储箱", phonics: "tank 读 /tæŋk/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The water tank is operating normally.", cn: "水箱运行正常。", words: [{ w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "tank", ipa: "/tæŋk/", cn: "储箱", phonics: "tank 读 /tæŋk/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "The chemical tank is operating normally.", cn: "化学品箱运行正常。", words: [{ w: "tank", ipa: "/tæŋk/", cn: "储箱", phonics: "tank 读 /tæŋk/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "日用油箱的运行参数：\n① 液位（level）→ 保持在正常范围内\n② 温度（temperature）→ 防止燃油过热\n③ 压力（pressure）→ 确保供油稳定\n④ 泄漏检测（leak detection）→ 防止燃油泄漏\n交接时确认日用油箱运行正常，是确保发电机可靠运行的关键。",
    pronunciation: "daily 的 day 读 /deɪ/，ly 读 /li/。\noperating 的 o 读 /ɒ/，重音在 op 上。",
    quiz: [
      { q: "主燃油箱运行正常，怎么说？", a: "The main fuel tank is operating normally." },
    ],
  },
  {
    id: 1535,
    en: "Please check the fuel transfer pump.",
    cn: "请检查输油泵。",
    ipa: "/pliːz tʃɛk ðə fjuːəl ˈtrænsfər pʌmp/",
    tags: ["第1535句", "输油泵", "★★★★★"],
    when: "输油泵负责从主油箱向日用油箱补充燃油。输油泵故障会导致日用油箱燃油耗尽。交接时需检查输油泵状态。",
    words: [
      { w: "fuel transfer pump", ipa: "/fjuːəl ˈtrænsfər pʌmp/", pos: "名词短语", cn: "输油泵", memory: "fuel = 燃油；transfer = 传输/转移；pump = 泵。\nfuel transfer pump = 输油泵，将燃油从一个油箱输送到另一个油箱。\n输油泵通常自动运行，根据日用油箱液位自动启停。", phonics: "fu 读 /fjuː/，el 读 /əl/，transfer 读 /ˈtrænsfər/，pump 读 /pʌmp/。", collocations: [["fuel transfer pump", "输油泵"], ["check transfer pump", "检查输油泵"], ["transfer pump running", "输油泵运行中"]], examples: [["The transfer pump is running.", "输油泵正在运行。"], ["Check the transfer pump status.", "检查输油泵状态。"]] },
    ],
    phrases: [
      { p: "fuel transfer pump", ipa: "/fjuːəl ˈtrænsfər pʌmp/", cn: "输油泵", why: "fuel + transfer + pump = 输油泵。这是燃油系统的关键设备，负责在主油箱和日用油箱之间输送燃油。" },
    ],
    grammar: [
      { q: "为什么用 check 而不是 start？", a: "check = 检查/查看（确认是否需要启动）\nstart = 启动（执行启动操作）\n✅ Please check the fuel transfer pump.（请检查输油泵 → 确认是否需要启动）\n✅ Please start the fuel transfer pump.（请启动输油泵 → 执行启动操作）\n交接时先 check，确认后再决定是否 start。" },
    ],
    pattern: "Please check the + 设备 + pump",
    patternExamples: [
      { en: "Please check the water pump.", cn: "请检查水泵。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }] },
      { en: "Please check the coolant pump.", cn: "请检查冷却液泵。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }] },
      { en: "Please check the oil pump.", cn: "请检查油泵。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }] },
    ],
    thinking: "输油泵的工作逻辑：\n① 日用油箱液位低于设定值 → 输油泵自动启动\n② 日用油箱液位达到设定值 → 输油泵自动停止\n③ 输油泵故障 → 日用油箱液位持续下降 → 发电机燃油耗尽\n交接时检查输油泵状态，是确保燃油系统可靠运行的关键。",
    pronunciation: "transfer 的 trans 读 /træns/，fer 读 /fər/。\npump 的 p 读 /p/，ump 读 /ʌmp/。",
    quiz: [
      { q: "请检查水泵，怎么说？", a: "Please check the water pump." },
    ],
  },
  {
    id: 1536,
    en: "The fuel transfer pump is operating normally.",
    cn: "输油泵运行正常。",
    ipa: "/ðə fjuːəl ˈtrænsfər pʌmp ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1536句", "输油泵状态", "★★★★★"],
    when: "确认输油泵运行状态正常，可以正常向日用油箱补充燃油。",
    words: [
      { w: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", pos: "动词短语", cn: "运行正常", memory: "operating = 运行中的；normally = 正常地。\noperating normally = 正常运行。\n这是汇报设备状态的标准用语。", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/，normally 读 /ˈnɔːrməli/。", collocations: [["operating normally", "正常运行"], ["functioning normally", "正常运作"], ["running normally", "正常运转"]], examples: [["All systems are operating normally.", "所有系统正常运行。"], ["The equipment is functioning normally.", "设备正常运作。"]] },
    ],
    phrases: [
      { p: "fuel transfer pump is operating normally", ipa: "/fjuːəl ˈtrænsfər pʌmp ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "输油泵运行正常", why: "fuel + transfer + pump + is + operating + normally = 输油泵运行正常。这是确认输油泵状态良好的标准用语。" },
    ],
    grammar: [
      { q: "is operating 和 is running 有什么区别？", a: "is operating = 正在运行（正式用语）\nis running = 正在运转（口语化）\n✅ The fuel transfer pump is operating normally.（输油泵运行正常 → 正式）\n✅ The fuel transfer pump is running.（输油泵正在运转 → 口语）\n交接时用正式用语，体现专业性。" },
    ],
    pattern: "设备 + pump + is operating normally",
    patternExamples: [
      { en: "The water pump is operating normally.", cn: "水泵运行正常。", words: [{ w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "The coolant pump is operating normally.", cn: "冷却液泵运行正常。", words: [{ w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The oil pump is operating normally.", cn: "油泵运行正常。", words: [{ w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "输油泵的常见故障：\n① 电机故障 → 泵无法启动\n② 叶轮损坏 → 泵无法输出燃油\n③ 管道堵塞 → 泵输出流量下降\n④ 控制信号故障 → 泵无法自动启停\n发现输油泵故障时，应及时检修，确保燃油系统可靠运行。",
    pronunciation: "transfer 的 trans 读 /træns/，fer 读 /fər/。\noperating 的 o 读 /ɒ/，重音在 op 上。",
    quiz: [
      { q: "水泵运行正常，怎么说？", a: "The water pump is operating normally." },
    ],
  },
  {
    id: 1537,
    en: "No fuel leakage has been found.",
    cn: "没有发现燃油泄漏。",
    ipa: "/noʊ fjuːəl ˈliːkɪdʒ hæz biːn faʊnd/",
    tags: ["第1537句", "燃油泄漏检查", "★★★★★"],
    when: "确认燃油系统没有泄漏，这是安全检查的重要内容。燃油泄漏会导致环境污染和火灾隐患。",
    words: [
      { w: "fuel leakage", ipa: "/fjuːəl ˈliːkɪdʒ/", pos: "名词短语", cn: "燃油泄漏", memory: "fuel = 燃油；leakage = 泄漏/漏出。\nfuel leakage = 燃油泄漏，燃油从管道或容器中意外漏出。\n燃油泄漏是严重的安全隐患，需要立即处理。", phonics: "fu 读 /fjuː/，el 读 /əl/，leakage 读 /ˈliːkɪdʒ/。", collocations: [["fuel leakage", "燃油泄漏"], ["detect leakage", "检测泄漏"], ["no leakage found", "未发现泄漏"]], examples: [["There is a fuel leakage.", "有燃油泄漏。"], ["No leakage has been detected.", "未检测到泄漏。"]] },
    ],
    phrases: [
      { p: "no fuel leakage has been found", ipa: "/noʊ fjuːəl ˈliːkɪdʒ hæz biːn faʊnd/", cn: "没有发现燃油泄漏", why: "no + fuel + leakage + has + been + found = 没有发现燃油泄漏。这是确认燃油系统安全的标准用语，表示检查后未发现泄漏。" },
    ],
    grammar: [
      { q: "为什么用 has been found 而不是 is found？", a: "has been found = 已经发现（现在完成时，强调检查结果）\nis found = 被发现（一般现在时，描述常态）\n✅ No fuel leakage has been found.（没有发现燃油泄漏 → 检查结果）\n✅ Fuel leakage is found during inspection.（燃油泄漏在检查时被发现 → 描述常态）\n交接时用完成时，强调'检查已经完成，结果是没有泄漏'。" },
    ],
    pattern: "No + 问题 + has been found/detected",
    patternExamples: [
      { en: "No oil leakage has been found.", cn: "没有发现机油泄漏。", words: [] },
      { en: "No water leakage has been detected.", cn: "没有检测到水泄漏。", words: [{ w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }] },
      { en: "No gas leakage has been found.", cn: "没有发现气体泄漏。", words: [{ w: "gas", ipa: "/ɡæs/", cn: "气体", phonics: "gas 读 /ɡæs/" }] },
    ],
    thinking: "燃油泄漏的危害：\n① 环境污染（土壤、地下水污染）\n② 火灾隐患（燃油易燃，遇火花可能引发火灾）\n③ 燃油浪费（泄漏导致燃油损失）\n④ 设备损坏（泄漏可能导致设备缺油停机）\n交接时检查燃油泄漏，是安全检查的重要内容。",
    pronunciation: "leakage 的 leak 读 /liːk/，age 读 /ɪdʒ/。\nfound 的 f 读 /f/，ound 读 /aʊnd/。",
    quiz: [
      { q: "没有发现机油泄漏，怎么说？", a: "No oil leakage has been found." },
    ],
  },
  {
    id: 1538,
    en: "Please inspect the fuel pipes.",
    cn: "请检查燃油管路。",
    ipa: "/pliːz ɪnˈspɛkt ðə fjuːəl paɪps/",
    tags: ["第1538句", "燃油管路", "★★★★★"],
    when: "燃油管路负责输送燃油。管路老化或损坏会导致燃油泄漏。交接时需检查燃油管路状态。",
    words: [
      { w: "fuel pipes", ipa: "/fjuːəl paɪps/", pos: "名词短语", cn: "燃油管路", memory: "fuel = 燃油；pipes = 管道/管路。\nfuel pipes = 燃油管路，输送燃油的管道系统。\n燃油管路需要定期检查，防止老化和泄漏。", phonics: "fu 读 /fjuː/，el 读 /əl/，pipes 读 /paɪps/。", collocations: [["fuel pipes", "燃油管路"], ["inspect fuel pipes", "检查燃油管路"], ["fuel pipe leakage", "燃油管路泄漏"]], examples: [["The fuel pipes are old.", "燃油管路老化了。"], ["Inspect the fuel pipes for leakage.", "检查燃油管路是否泄漏。"]] },
    ],
    phrases: [
      { p: "fuel pipes", ipa: "/fjuːəl paɪps/", cn: "燃油管路", why: "fuel + pipes = 燃油管路。这是燃油系统的输送通道，连接油箱、泵、滤清器和发动机。" },
    ],
    grammar: [
      { q: "为什么用 inspect 而不是 check？", a: "inspect = 检验/检查（详细的物理检查）\ncheck = 检查/查看（快速确认状态）\n✅ Please inspect the fuel pipes.（请检查燃油管路 → 详细检查管路状态）\n✅ Please check the fuel pipe pressure.（请检查燃油管路压力 → 快速确认压力）\n管路需要详细检查，所以用 inspect。" },
    ],
    pattern: "Please inspect the + 设备 + pipes",
    patternExamples: [
      { en: "Please inspect the water pipes.", cn: "请检查水管路。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "pipes", ipa: "/paɪp/", cn: "管道", phonics: "pipe 读 /paɪp/" }] },
      { en: "Please inspect the coolant pipes.", cn: "请检查冷却液管路。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "pipes", ipa: "/paɪp/", cn: "管道", phonics: "pipe 读 /paɪp/" }] },
      { en: "Please inspect the gas pipes.", cn: "请检查气体管路。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "gas", ipa: "/ɡæs/", cn: "气体", phonics: "gas 读 /ɡæs/" }, { w: "pipes", ipa: "/paɪp/", cn: "管道", phonics: "pipe 读 /paɪp/" }] },
    ],
    thinking: "燃油管路的检查要点：\n① 外观检查（是否有裂纹、腐蚀、变形）\n② 连接处检查（是否有松动、泄漏）\n③ 支架检查（是否牢固、振动）\n④ 保温层检查（是否完好、脱落）\n定期检查燃油管路，是防止燃油泄漏的重要措施。",
    pronunciation: "pipes 的 pi 读 /paɪ/，pes 读 /ps/。\ninspect 的 in 读 /ɪn/，spect 读 /spɛkt/。",
    quiz: [
      { q: "请检查水管路，怎么说？", a: "Please inspect the water pipes." },
    ],
  },
  {
    id: 1539,
    en: "Please inspect the fuel filters.",
    cn: "请检查燃油滤清器。",
    ipa: "/pliːz ɪnˈspɛkt ðə fjuːəl ˈfɪltərz/",
    tags: ["第1539句", "燃油滤清器", "★★★★★"],
    when: "燃油滤清器负责过滤燃油中的杂质。滤清器堵塞会导致供油不足。交接时需检查燃油滤清器状态。",
    words: [
      { w: "fuel filters", ipa: "/fjuːəl ˈfɪltərz/", pos: "名词短语", cn: "燃油滤清器", memory: "fuel = 燃油；filters = 滤清器/过滤器。\nfuel filters = 燃油滤清器，过滤燃油中杂质的设备。\n燃油滤清器需要定期更换，防止堵塞影响供油。", phonics: "fu 读 /fjuː/，el 读 /əl/，filters 读 /ˈfɪltərz/。", collocations: [["fuel filters", "燃油滤清器"], ["inspect fuel filters", "检查燃油滤清器"], ["replace fuel filters", "更换燃油滤清器"]], examples: [["The fuel filters are clogged.", "燃油滤清器堵塞了。"], ["Replace the fuel filters.", "更换燃油滤清器。"]] },
    ],
    phrases: [
      { p: "fuel filters", ipa: "/fjuːəl ˈfɪltərz/", cn: "燃油滤清器", why: "fuel + filters = 燃油滤清器。这是燃油系统的关键部件，负责过滤燃油中的杂质，保护发动机。" },
    ],
    grammar: [
      { q: "为什么用 inspect 而不是 replace？", a: "inspect = 检验/检查（确认是否需要更换）\nreplace = 更换（执行更换操作）\n✅ Please inspect the fuel filters.（请检查燃油滤清器 → 确认是否需要更换）\n✅ Please replace the fuel filters.（请更换燃油滤清器 → 执行更换操作）\n交接时先 inspect，确认后再决定是否 replace。" },
    ],
    pattern: "Please inspect the + 设备 + filters",
    patternExamples: [
      { en: "Please inspect the air filters.", cn: "请检查空气滤清器。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "filters", ipa: "/ˈfɪltər/", cn: "过滤器", phonics: "fil 读 /fɪl/，ter 读 /tər/" }] },
      { en: "Please inspect the oil filters.", cn: "请检查机油滤清器。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "filters", ipa: "/ˈfɪltər/", cn: "过滤器", phonics: "fil 读 /fɪl/，ter 读 /tər/" }] },
      { en: "Please inspect the water filters.", cn: "请检查水滤清器。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "filters", ipa: "/ˈfɪltər/", cn: "过滤器", phonics: "fil 读 /fɪl/，ter 读 /tər/" }] },
    ],
    thinking: "燃油滤清器的作用：\n① 过滤燃油中的杂质（灰尘、金属碎屑、水分等）\n② 保护发动机喷油嘴（防止堵塞）\n③ 延长发动机寿命（减少磨损）\n④ 提高燃烧效率（保证燃油纯净）\n滤清器堵塞会导致供油不足，影响发动机性能。",
    pronunciation: "filters 的 fil 读 /fɪl/，ters 读 /tərz/。\ninspect 的 in 读 /ɪn/，spect 读 /spɛkt/。",
    quiz: [
      { q: "请检查空气滤清器，怎么说？", a: "Please inspect the air filters." },
    ],
  },
  {
    id: 1540,
    en: "Everything is operating normally.",
    cn: "所有设备运行正常。",
    ipa: "/ˈɛvriθɪŋ ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1540句", "总结确认", "★★★★★"],
    when: "总结确认燃油系统所有设备运行正常，交接检查完成。",
    words: [
      { w: "everything", ipa: "/ˈɛvriθɪŋ/", pos: "代词", cn: "所有设备；一切", memory: "every = 每个；thing = 事物/设备。\neverything = 所有设备/一切。\n交接时用 everything 总结所有设备状态。", phonics: "ev 读 /ɛv/，ery 读 /əri/，thing 读 /θɪŋ/。", collocations: [["everything is normal", "一切正常"], ["everything is ready", "一切就绪"], ["everything is under control", "一切受控"]], examples: [["Everything is working.", "一切正常运作。"], ["Everything is ready.", "一切就绪。"]] },
    ],
    phrases: [
      { p: "everything is operating normally", ipa: "/ˈɛvriθɪŋ ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "所有设备运行正常", why: "everything + is + operating + normally = 所有设备运行正常。这是交接检查完成时的总结用语，表示所有设备状态良好。" },
    ],
    grammar: [
      { q: "everything is 和 all systems are 有什么区别？", a: "everything is = 所有设备（泛指所有相关设备）\nall systems are = 所有系统（特指各个系统）\n✅ Everything is operating normally.（所有设备运行正常 → 泛指）\n✅ All systems are operating normally.（所有系统运行正常 → 特指）\n交接时用 everything 更简洁，用 all systems 更精确。" },
    ],
    pattern: "Everything is + 状态描述",
    patternExamples: [
      { en: "Everything is under control.", cn: "一切受控。", words: [{ w: "control", ipa: "/kənˈtroʊl/", cn: "控制", phonics: "con 读 /kən/，trol 读 /troʊl/" }] },
      { en: "Everything is back to normal.", cn: "一切恢复正常。", words: [{ w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "Everything is ready for operation.", cn: "一切就绪可以运行。", words: [{ w: "operation", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }] },
    ],
    thinking: "燃油系统检查总结：\n① 燃油液位 → 90%满，储备充足\n② 日用油箱 → 运行正常\n③ 输油泵 → 运行正常\n④ 无燃油泄漏 → 安全\n⑤ 燃油管路 → 无异常\n⑥ 燃油滤清器 → 无堵塞\n所有设备运行正常，交接检查完成。",
    pronunciation: "everything 的 ev 读 /ɛv/，ery 读 /əri/。\noperating 的 o 读 /ɒ/，重音在 op 上。",
    quiz: [
      { q: "一切受控，怎么说？", a: "Everything is under control." },
    ],
  },
];

// EXPORTS: MOCK_SENTENCES_PART25A

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART25A: ISentence[] = [
  // ── 场景001：冷冻水泵、冷却水泵 - 运行状态检查 (1641-1650) ──
  {
    id: 1641,
    en: "Please check the chilled water pump operating status.",
    cn: "请检查冷冻水泵运行状态。",
    ipa: "/pliːz tʃɛk ðə tʃɪld ˈwɔːtər pʌmp ˈɒpəreɪtɪŋ ˈstætəs/",
    tags: ["第1641句", "冷冻水泵", "★★★★★"],
    when: "冷冻水泵（Chilled Water Pump, CHWP）是冷冻水系统的动力设备，推动冷冻水在冷水机组与末端设备之间循环。交接时首先检查冷冻水泵整体运行状态。",
    words: [
      { w: "chilled water pump", ipa: "/tʃɪld ˈwɔːtər pʌmp/", pos: "名词短语", cn: "冷冻水泵", memory: "chilled = 冷却的（chill的过去分词）；water = 水；pump = 泵。\nchilled water pump = 冷冻水泵，缩写为CHWP。\n冷冻水泵推动冷冻水在冷水机组与空调末端之间循环，是冷冻水系统的核心动力设备。", phonics: "chill 读 /tʃɪl/，ed 读 /d/，water 读 /ˈwɔːtər/，pump 读 /pʌmp/。", collocations: [["chilled water pump", "冷冻水泵"], ["CHWP", "冷冻水泵（缩写）"], ["pump operating status", "水泵运行状态"]], examples: [["The chilled water pump is running.", "冷冻水泵正在运行。"], ["Check the CHWP status.", "检查冷冻水泵状态。"]] },
      { w: "operating status", ipa: "/ˈɒpəreɪtɪŋ ˈstætəs/", pos: "名词短语", cn: "运行状态", memory: "operating = 运行中的；status = 状态。\noperating status = 运行状态，指设备当前的工作状况。\n交接时必须确认所有水泵的运行状态。", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/，status 读 /ˈstætəs/。", collocations: [["check operating status", "检查运行状态"], ["normal operating status", "正常运行状态"], ["pump operating status", "水泵运行状态"]], examples: [["What is the operating status?", "运行状态是什么？"], ["All pumps show normal operating status.", "所有水泵显示正常运行状态。"]] },
    ],
    phrases: [
      { p: "chilled water pump operating status", ipa: "/tʃɪld ˈwɔːtər pʌmp ˈɒpəreɪtɪŋ ˈstætəs/", cn: "冷冻水泵运行状态", why: "chilled water pump + operating status = 冷冻水泵运行状态。交接时必须首先确认冷冻水泵的运行状况，确保冷冻水系统正常循环。" },
    ],
    grammar: [
      { q: "chilled water pump 和 condenser water pump 有什么区别？", a: "chilled water pump (CHWP) = 冷冻水泵\ncondenser water pump (CWP) = 冷却水泵\n✅ CHWP 推动冷冻水在冷水机组蒸发器与末端空调之间循环（7°C供水/12°C回水）。\n✅ CWP 推动冷却水在冷水机组冷凝器与冷却塔之间循环（30°C供水/35°C回水）。\n两者是冷冻水系统的两条独立循环回路。" },
    ],
    pattern: "Please check the + 设备 + operating status",
    patternExamples: [
      { en: "Please check the condenser water pump operating status.", cn: "请检查冷却水泵运行状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }] },
      { en: "Please check the cooling tower operating status.", cn: "请检查冷却塔运行状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "Please check the chiller operating status.", cn: "请检查冷水机组运行状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
    ],
    thinking: "冷冻水泵是冷冻水系统的动力核心。交接检查顺序：① 冷冻水泵整体状态（本句）→ ② 各台水泵状态（1642-1643）→ ③ 冷却水泵状态（1644-1646）→ ④ 压力参数（1647-1649）→ ⑤ 流量（1650）。\n数据中心通常采用N+1冗余配置，确保任何一台水泵故障时，备用水泵可以接管循环。",
    pronunciation: "chilled 的 ch 读 /tʃ/，不是 /k/。\npump 的 u 读 /ʌ/，不是 /uː/。",
    quiz: [
      { q: "请检查冷却水泵运行状态，怎么说？", a: "Please check the condenser water pump operating status." },
      { q: "冷冻水泵和冷却水泵有什么区别？", a: "冷冻水泵（CHWP）推动冷冻水在冷水机组蒸发器与末端空调之间循环，水温较低（7-12°C）；冷却水泵（CWP）推动冷却水在冷水机组冷凝器与冷却塔之间循环，水温较高（30-35°C）。两者是独立的两条循环回路。" },
    ],
  },
  {
    id: 1642,
    en: "Chilled Water Pump No.1 is operating normally.",
    cn: "1号冷冻水泵运行正常。",
    ipa: "/tʃɪld ˈwɔːtər pʌmp ˌnʌmˈwʌn ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1642句", "冷冻水泵状态", "★★★★★"],
    when: "确认1号冷冻水泵运行状态正常。No.1 是 Number 1 的缩写形式，在工程场合广泛使用。",
    words: [
      { w: "normally", ipa: "/ˈnɔːrməli/", pos: "副词", cn: "正常地", memory: "normal = 正常的；-ly = 副词后缀。\nnormally = 正常地/按常规。\noperating normally = 正常运行。", phonics: "nor 读 /nɔːr/，mally 读 /məli/。", collocations: [["operating normally", "正常运行"], ["functioning normally", "正常运作"]], examples: [["All pumps are operating normally.", "所有水泵正常运行。"], ["The equipment is functioning normally.", "设备正常运作。"]] },
    ],
    phrases: [
      { p: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "运行正常", why: "operating + normally = 正常运行。这是汇报设备状态的标准用语。" },
    ],
    grammar: [
      { q: "is operating 和 operates 有什么区别？", a: "is operating = 正在运行（现在进行时，强调当前状态）\noperates = 运行（一般现在时，描述常态）\n✅ CHWP No.1 is operating normally.（1号冷冻水泵正在正常运行 → 汇报当前状态）\n✅ The pump operates 24/7.（水泵24小时运行 → 描述常态）\n交接用进行时，关注'此刻的运行状态'。" },
    ],
    pattern: "设备 + No.X + is operating normally",
    patternExamples: [
      { en: "Chilled Water Pump No.2 is operating normally.", cn: "2号冷冻水泵运行正常。", words: [{ w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "Condenser Water Pump No.1 is operating normally.", cn: "1号冷却水泵运行正常。", words: [{ w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "Cooling Tower No.1 is operating normally.", cn: "1号冷却塔运行正常。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "汇报水泵状态时的标准格式：设备编号 + 状态。\n① CHWP No.1 is operating normally（正常 → 最佳）\n② CHWP No.1 has an alarm（有告警 → 需进一步排查）\n③ CHWP No.1 is offline（离线 → 需确认原因）",
    pronunciation: "No.1 读作 number one /ˌnʌmˈwʌn/，不要读成 N-O 字母拼读。\nnormally 的 r 在美式英语中发音，英式中不发音。",
    quiz: [
      { q: "2号冷冻水泵运行正常，怎么说？", a: "Chilled Water Pump No.2 is operating normally." },
    ],
  },
  {
    id: 1643,
    en: "Chilled Water Pump No.2 is on standby.",
    cn: "2号冷冻水泵处于备用状态。",
    ipa: "/tʃɪld ˈwɔːtər pʌmp ˌnʌmˈtuː ɪz ɒn ˈstændbaɪ/",
    tags: ["第1643句", "备用状态", "★★★★★"],
    when: "确认2号冷冻水泵处于备用状态。on standby 表示设备已准备好，可以在需要时立即启动。",
    words: [
      { w: "on standby", ipa: "/ɒn ˈstændbaɪ/", pos: "介词短语", cn: "处于备用状态", memory: "standby = 备用/待命。\non standby = 处于备用状态。\n备用水泵已通电、已准备好，可以在主泵故障时自动启动接管。", phonics: "stand 读 /stænd/，by 读 /baɪ/，重音在 stand 上。", collocations: [["on standby", "处于备用状态"], ["standby pump", "备用水泵"], ["standby mode", "备用模式"]], examples: [["The pump is on standby.", "水泵处于备用状态。"], ["Switch to the standby pump.", "切换到备用水泵。"]] },
    ],
    phrases: [
      { p: "on standby", ipa: "/ɒn ˈstændbaɪ/", cn: "处于备用状态", why: "on + standby = 处于备用状态。这是描述冗余设备状态的标准用语，表示设备已准备好可以随时启动。" },
    ],
    grammar: [
      { q: "on standby 和 in standby mode 有什么区别？", a: "on standby = 处于备用状态（简洁，常用）\nin standby mode = 处于备用模式（更正式，强调模式设置）\n✅ CHWP No.2 is on standby.（2号冷冻水泵处于备用状态 → 简洁汇报）\n✅ The pump is in standby mode.（水泵处于备用模式 → 强调控制器设置）\n交接时用 on standby 更简洁。" },
    ],
    pattern: "设备 + No.X + is on standby",
    patternExamples: [
      { en: "Condenser Water Pump No.2 is on standby.", cn: "2号冷却水泵处于备用状态。", words: [{ w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }] },
      { en: "Cooling Tower No.2 is on standby.", cn: "2号冷却塔处于备用状态。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }] },
      { en: "Generator No.2 is on standby.", cn: "2号发电机处于备用状态。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
    ],
    thinking: "备用设备是数据中心冗余设计的核心。N+1配置意味着：\n① 1台主泵运行 + 1台备用水泵\n② 主泵故障时，备用水泵自动启动接管\n③ 定期轮换主备，确保备用水泵保持良好状态",
    pronunciation: "standby 的 a 读 /æ/，不是 /eɪ/。\non 读 /ɒn/，重音在 stand 上。",
    quiz: [
      { q: "2号冷却水泵处于备用状态，怎么说？", a: "Condenser Water Pump No.2 is on standby." },
    ],
  },
  {
    id: 1644,
    en: "Please check the condenser water pump operating status.",
    cn: "请检查冷却水泵运行状态。",
    ipa: "/pliːz tʃɛk ðə kənˈdɛnsər ˈwɔːtər pʌmp ˈɒpəreɪtɪŋ ˈstætəs/",
    tags: ["第1644句", "冷却水泵", "★★★★★"],
    when: "冷却水泵（Condenser Water Pump, CWP）推动冷却水在冷水机组冷凝器与冷却塔之间循环。交接时需检查冷却水泵运行状态。",
    words: [
      { w: "condenser water pump", ipa: "/kənˈdɛnsər ˈwɔːtər pʌmp/", pos: "名词短语", cn: "冷却水泵", memory: "condenser = 冷凝器（condense = 冷凝）；water = 水；pump = 泵。\ncondenser water pump = 冷却水泵，缩写为CWP。\n冷却水泵推动冷却水在冷水机组冷凝器与冷却塔之间循环，带走冷凝器中的热量。", phonics: "con 读 /kən/，denser 读 /ˈdɛnsər/，重音在 den 上。", collocations: [["condenser water pump", "冷却水泵"], ["CWP", "冷却水泵（缩写）"], ["condenser water system", "冷却水系统"]], examples: [["The condenser water pump is running.", "冷却水泵正在运行。"], ["Check the CWP status.", "检查冷却水泵状态。"]] },
    ],
    phrases: [
      { p: "condenser water pump operating status", ipa: "/kənˈdɛnsər ˈwɔːtər pʌmp ˈɒpəreɪtɪŋ ˈstætəs/", cn: "冷却水泵运行状态", why: "condenser water pump + operating status = 冷却水泵运行状态。冷却水泵与冷冻水泵是两条独立循环回路，交接时需分别检查。" },
    ],
    grammar: [
      { q: "condenser 的词根是什么？", a: "condense = 冷凝/凝结（动词）\ncondenser = 冷凝器（名词，-er = 设备）\n✅ condenser water = 冷凝器水 = 冷却水\n✅ condenser water pump = 冷却水泵\n冷却水在冷凝器中吸收制冷剂的热量，然后流到冷却塔散热。" },
    ],
    pattern: "Please check the + 设备 + operating status",
    patternExamples: [
      { en: "Please check the chilled water pump operating status.", cn: "请检查冷冻水泵运行状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }] },
      { en: "Please check the cooling tower operating status.", cn: "请检查冷却塔运行状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "Please check the chiller operating status.", cn: "请检查冷水机组运行状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
    ],
    thinking: "冷冻水系统的两条循环回路：\n① 冷冻水回路：CHWP → 冷水机组蒸发器 → 末端空调 → 回到CHWP（7-12°C）\n② 冷却水回路：CWP → 冷水机组冷凝器 → 冷却塔 → 回到CWP（30-35°C）\n交接时需分别检查两条回路的水泵状态。",
    pronunciation: "condenser 的 con 读 /kən/，不是 /kɒn/。\ndenser 的 den 读 /dɛn/，重音在 den 上。",
    quiz: [
      { q: "请检查冷冻水泵运行状态，怎么说？", a: "Please check the chilled water pump operating status." },
      { q: "冷却水系统的温度范围是多少？", a: "冷却水系统的典型温度范围：供水温度约30°C（从冷水机组冷凝器流出），回水温度约35°C（从冷却塔返回）。冷却水在冷凝器中吸收热量后温度升高，在冷却塔中通过蒸发散热降温。" },
    ],
  },
  {
    id: 1645,
    en: "Condenser Water Pump No.1 is operating normally.",
    cn: "1号冷却水泵运行正常。",
    ipa: "/kənˈdɛnsər ˈwɔːtər pʌmp ˌnʌmˈwʌn ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1645句", "冷却水泵状态", "★★★★★"],
    when: "确认1号冷却水泵运行状态正常。冷却水泵与冷冻水泵独立运行，需分别确认状态。",
    words: [
      { w: "Condenser Water Pump No.1", ipa: "/kənˈdɛnsər ˈwɔːtər pʌmp ˌnʌmˈwʌn/", pos: "名词短语", cn: "1号冷却水泵", memory: "Condenser Water Pump = 冷却水泵；No.1 = Number 1 = 1号。\n缩写为 CWP-1 或 CWP No.1。\n数据中心通常有多台冷却水泵编号管理，互为备用。", phonics: "con 读 /kən/，denser 读 /ˈdɛnsər/，No.1 读 /ˌnʌmˈwʌn/。", collocations: [["CWP No.1", "1号冷却水泵（缩写）"], ["condenser water pump", "冷却水泵"]], examples: [["CWP No.1 is online.", "1号冷却水泵在线。"], ["Check CWP-1 status.", "检查1号冷却水泵状态。"]] },
    ],
    phrases: [
      { p: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "运行正常", why: "operating + normally = 正常运行。这是汇报设备状态的标准用语。" },
    ],
    grammar: [
      { q: "Condenser Water Pump 和 Chilled Water Pump 怎么区分？", a: "Condenser Water Pump (CWP) = 冷却水泵 → 冷却水回路（30-35°C）\nChilled Water Pump (CHWP) = 冷冻水泵 → 冷冻水回路（7-12°C）\n✅ CWP No.1 is operating normally.（1号冷却水泵运行正常）\n✅ CHWP No.1 is operating normally.（1号冷冻水泵运行正常）\n记住：condenser = 冷凝器（热侧），chilled = 冷冻（冷侧）。" },
    ],
    pattern: "设备 + No.X + is operating normally",
    patternExamples: [
      { en: "Condenser Water Pump No.2 is operating normally.", cn: "2号冷却水泵运行正常。", words: [{ w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "Chilled Water Pump No.1 is operating normally.", cn: "1号冷冻水泵运行正常。", words: [{ w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "Cooling Tower No.1 is operating normally.", cn: "1号冷却塔运行正常。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "冷却水泵状态汇报格式与冷冻水泵相同：设备编号 + 状态。\n交接时需分别汇报冷冻水泵和冷却水泵的状态，不能混淆。",
    pronunciation: "Condenser 的 con 读 /kən/，重音在 den 上。\nNo.1 读作 number one，不要读成字母拼读。",
    quiz: [
      { q: "2号冷却水泵运行正常，怎么说？", a: "Condenser Water Pump No.2 is operating normally." },
    ],
  },
  {
    id: 1646,
    en: "Condenser Water Pump No.2 is on standby.",
    cn: "2号冷却水泵处于备用状态。",
    ipa: "/kənˈdɛnsər ˈwɔːtər pʌmp ˌnʌmˈtuː ɪz ɒn ˈstændbaɪ/",
    tags: ["第1646句", "备用状态", "★★★★★"],
    when: "确认2号冷却水泵处于备用状态。与冷冻水泵一样，冷却水泵也采用N+1冗余配置。",
    words: [
      { w: "on standby", ipa: "/ɒn ˈstændbaɪ/", pos: "介词短语", cn: "处于备用状态", memory: "standby = 备用/待命。\non standby = 处于备用状态。\n备用冷却水泵已准备好，可以在主泵故障时自动启动接管。", phonics: "stand 读 /stænd/，by 读 /baɪ/，重音在 stand 上。", collocations: [["on standby", "处于备用状态"], ["standby pump", "备用水泵"], ["standby mode", "备用模式"]], examples: [["The CWP is on standby.", "冷却水泵处于备用状态。"], ["Switch to the standby pump.", "切换到备用水泵。"]] },
    ],
    phrases: [
      { p: "on standby", ipa: "/ɒn ˈstændbaɪ/", cn: "处于备用状态", why: "on + standby = 处于备用状态。这是描述冗余设备状态的标准用语。" },
    ],
    grammar: [
      { q: "为什么冷冻水泵和冷却水泵都需要备用？", a: "数据中心采用 N+1 冗余设计，确保任何一台水泵故障时，备用水泵可以立即接管，保证冷却系统不中断。\n✅ CHWP No.1 运行 + CHWP No.2 备用\n✅ CWP No.1 运行 + CWP No.2 备用\n任何一台主泵故障，备用水泵自动启动，冷冻水/冷却水循环不中断。" },
    ],
    pattern: "设备 + No.X + is on standby",
    patternExamples: [
      { en: "Chilled Water Pump No.2 is on standby.", cn: "2号冷冻水泵处于备用状态。", words: [{ w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }] },
      { en: "Cooling Tower No.2 is on standby.", cn: "2号冷却塔处于备用状态。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }] },
      { en: "Generator No.2 is on standby.", cn: "2号发电机处于备用状态。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
    ],
    thinking: "数据中心的冗余设计原则：\n① 冷冻水泵：N+1（1主1备）\n② 冷却水泵：N+1（1主1备）\n③ 冷却塔：N+1（1主1备）\n④ 冷水机组：N+1（1主1备）\n所有关键设备都有冗余，确保单点故障不影响整体系统。",
    pronunciation: "standby 的 a 读 /æ/，不是 /eɪ/。\non 读 /ɒn/，重音在 stand 上。",
    quiz: [
      { q: "2号冷冻水泵处于备用状态，怎么说？", a: "Chilled Water Pump No.2 is on standby." },
    ],
  },
  {
    id: 1647,
    en: "Please check the pump inlet pressure.",
    cn: "请检查水泵入口压力。",
    ipa: "/pliːz tʃɛk ðə pʌmp ˈɪnlɪt ˈprɛʃər/",
    tags: ["第1647句", "入口压力", "★★★★★"],
    when: "水泵入口压力（inlet pressure）是水泵吸入侧的压力，反映水泵的吸入条件。入口压力过低可能导致气蚀（cavitation）。",
    words: [
      { w: "inlet pressure", ipa: "/ˈɪnlɪt ˈprɛʃər/", pos: "名词短语", cn: "入口压力", memory: "inlet = 入口/进水口（in = 进入；let = 让）；pressure = 压力。\ninlet pressure = 入口压力，指水泵吸入侧的压力。\n入口压力过低会导致气蚀（cavitation），损坏水泵叶轮。", phonics: "in 读 /ɪn/，let 读 /lɪt/，重音在 in 上。pressure 的 pre 读 /prɛ/。", collocations: [["inlet pressure", "入口压力"], ["pump inlet", "水泵入口"], ["low inlet pressure", "入口压力低"]], examples: [["Check the inlet pressure.", "检查入口压力。"], ["The inlet pressure is low.", "入口压力低。"]] },
    ],
    phrases: [
      { p: "pump inlet pressure", ipa: "/pʌmp ˈɪnlɪt ˈprɛʃər/", cn: "水泵入口压力", why: "pump + inlet + pressure = 水泵入口压力。入口压力是水泵运行的重要参数，过低会导致气蚀损坏。" },
    ],
    grammar: [
      { q: "inlet 和 outlet 怎么区分？", a: "inlet = 入口/进水口（水进入水泵的方向）\noutlet = 出口/出水口（水离开水泵的方向）\n✅ inlet pressure = 入口压力（吸入侧，较低）\n✅ outlet pressure = 出口压力（排出侧，较高）\nin = 进入，out = 离开。" },
    ],
    pattern: "Please check the pump + 参数",
    patternExamples: [
      { en: "Please check the pump outlet pressure.", cn: "请检查水泵出口压力。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }] },
      { en: "Please check the pump motor current.", cn: "请检查水泵电机电流。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }] },
      { en: "Please check the pump vibration.", cn: "请检查水泵振动。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }] },
    ],
    thinking: "水泵压力参数：\n① inlet pressure（入口压力）：反映吸入条件，过低会气蚀\n② outlet pressure（出口压力）：反映水泵做功能力\n③ differential pressure（压差）= outlet - inlet，反映水泵实际扬程\n正常运行时，入口压力应保持在设计范围内。",
    pronunciation: "inlet 的 in 读 /ɪn/，let 读 /lɪt/，重音在 in 上。\npressure 的 pre 读 /prɛ/，不是 /priː/。",
    quiz: [
      { q: "请检查水泵出口压力，怎么说？", a: "Please check the pump outlet pressure." },
      { q: "什么是气蚀（cavitation）？", a: "气蚀（cavitation）是水泵入口压力过低时，水中的溶解气体析出形成气泡，气泡在叶轮高压区破裂产生的冲击会损坏叶轮表面。表现为水泵噪音增大、振动加剧、效率下降。预防方法是确保入口压力在设计范围内。" },
    ],
  },
  {
    id: 1648,
    en: "Please check the pump outlet pressure.",
    cn: "请检查水泵出口压力。",
    ipa: "/pliːz tʃɛk ðə pʌmp ˈaʊtlɪt ˈprɛʃər/",
    tags: ["第1648句", "出口压力", "★★★★★"],
    when: "水泵出口压力（outlet pressure）是水泵排出侧的压力，反映水泵的做功能力和系统阻力。",
    words: [
      { w: "outlet pressure", ipa: "/ˈaʊtlɪt ˈprɛʃər/", pos: "名词短语", cn: "出口压力", memory: "outlet = 出口/出水口（out = 出去；let = 让）；pressure = 压力。\noutlet pressure = 出口压力，指水泵排出侧的压力。\n出口压力 = 入口压力 + 水泵扬程，反映水泵的做功能力。", phonics: "out 读 /aʊt/，let 读 /lɪt/，重音在 out 上。pressure 的 pre 读 /prɛ/。", collocations: [["outlet pressure", "出口压力"], ["pump outlet", "水泵出口"], ["high outlet pressure", "出口压力高"]], examples: [["Check the outlet pressure.", "检查出口压力。"], ["The outlet pressure is normal.", "出口压力正常。"]] },
    ],
    phrases: [
      { p: "pump outlet pressure", ipa: "/pʌmp ˈaʊtlɪt ˈprɛʃər/", cn: "水泵出口压力", why: "pump + outlet + pressure = 水泵出口压力。出口压力是衡量水泵做功能力的关键参数。" },
    ],
    grammar: [
      { q: "出口压力过高可能是什么原因？", a: "出口压力过高的可能原因：\n① 系统阀门关闭或开度太小（阻力增大）\n② 管路堵塞（阻力增大）\n③ 水泵转速过高（变频器设置问题）\n④ 系统需求减少但水泵未调整\n需要先检查阀门开度和系统负载情况。" },
    ],
    pattern: "Please check the pump + 参数",
    patternExamples: [
      { en: "Please check the pump inlet pressure.", cn: "请检查水泵入口压力。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }] },
      { en: "Please check the pump motor current.", cn: "请检查水泵电机电流。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }] },
      { en: "Please check the pump temperature.", cn: "请检查水泵温度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
    ],
    thinking: "水泵压力参数关系：\n① outlet pressure = inlet pressure + pump head（扬程）\n② differential pressure = outlet - inlet = pump head\n③ 正常压差应在设计范围内，过大或过小都需排查\n交接时需同时检查入口和出口压力，计算压差判断水泵是否正常。",
    pronunciation: "outlet 的 out 读 /aʊt/，let 读 /lɪt/，重音在 out 上。\npressure 的 pre 读 /prɛ/，不是 /priː/。",
    quiz: [
      { q: "请检查水泵入口压力，怎么说？", a: "Please check the pump inlet pressure." },
    ],
  },
  {
    id: 1649,
    en: "The pump pressure is within the normal range.",
    cn: "水泵压力正常。",
    ipa: "/ðə pʌmp ˈprɛʃər ɪz wɪˈðɪn ðə ˈnɔːrməl reɪndʒ/",
    tags: ["第1649句", "压力正常", "★★★★★"],
    when: "确认水泵入口和出口压力都在正常范围内。within the normal range 是工程场合的标准表述。",
    words: [
      { w: "within the normal range", ipa: "/wɪˈðɪn ðə ˈnɔːrməl reɪndʒ/", pos: "介词短语", cn: "在正常范围内", memory: "within = 在...范围内；normal = 正常的；range = 范围。\nwithin the normal range = 在正常范围内。\n工程参数通常有设计范围，在范围内表示正常。", phonics: "with 读 /wɪð/，in 读 /ɪn/，normal 读 /ˈnɔːrməl/，range 读 /reɪndʒ/。", collocations: [["within the normal range", "在正常范围内"], ["within range", "在范围内"], ["normal operating range", "正常运行范围"]], examples: [["The temperature is within the normal range.", "温度在正常范围内。"], ["All parameters are within range.", "所有参数在范围内。"]] },
    ],
    phrases: [
      { p: "within the normal range", ipa: "/wɪˈðɪn ðə ˈnɔːrməl reɪndʒ/", cn: "在正常范围内", why: "within + the normal + range = 在正常范围内。这是工程场合汇报参数状态的标准用语，比简单说 normal 更精确。" },
    ],
    grammar: [
      { q: "within the normal range 和 normal 有什么区别？", a: "within the normal range = 在正常范围内（更精确，强调在设计范围内）\nnormal = 正常（简洁，但不够精确）\n✅ The pump pressure is within the normal range.（水泵压力在正常范围内 → 精确表述）\n✅ The pump pressure is normal.（水泵压力正常 → 简洁表述）\n工程场合推荐用 within the normal range，更专业。" },
    ],
    pattern: "The + 参数 + is within the normal range",
    patternExamples: [
      { en: "The water temperature is within the normal range.", cn: "水温在正常范围内。", words: [{ w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }] },
      { en: "The motor current is within the normal range.", cn: "电机电流在正常范围内。", words: [{ w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }, { w: "range", ipa: "/reɪndʒ/", cn: "范围", phonics: "range 读 /reɪndʒ/" }] },
      { en: "The conductivity is within the normal range.", cn: "导电率在正常范围内。", words: [{ w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }, { w: "range", ipa: "/reɪndʒ/", cn: "范围", phonics: "range 读 /reɪndʒ/" }] },
    ],
    thinking: "工程参数的正常范围：\n① 每个参数都有设计范围（如入口压力 1.5-2.5 bar）\n② 在范围内 = within the normal range\n③ 超出范围 = out of range / abnormal\n交接时汇报参数时，说 within the normal range 比 simple normal 更专业。",
    pronunciation: "within 的 th 读 /ð/，不是 /θ/。\nrange 的 a 读 /eɪ/，不是 /æ/。",
    quiz: [
      { q: "水温在正常范围内，怎么说？", a: "The water temperature is within the normal range." },
    ],
  },
  {
    id: 1650,
    en: "Please check the water flow rate.",
    cn: "请检查水流量。",
    ipa: "/pliːz tʃɛk ðə ˈwɔːtər floʊ reɪt/",
    tags: ["第1650句", "水流量", "★★★★★"],
    when: "水流量（water flow rate）是水泵性能的关键指标，反映水泵的实际输水能力。流量不足会影响冷却效果。",
    words: [
      { w: "flow rate", ipa: "/floʊ reɪt/", pos: "名词短语", cn: "流量", memory: "flow = 流动；rate = 速率。\nflow rate = 流量，指单位时间内流过的水量。\n通常用 m³/h（立方米/小时）或 L/s（升/秒）表示。", phonics: "flow 读 /floʊ/，rate 读 /reɪt/，重音在 flow 上。", collocations: [["water flow rate", "水流量"], ["flow rate", "流量"], ["low flow rate", "低流量"]], examples: [["Check the flow rate.", "检查流量。"], ["The flow rate is low.", "流量低。"]] },
    ],
    phrases: [
      { p: "water flow rate", ipa: "/ˈwɔːtər floʊ reɪt/", cn: "水流量", why: "water + flow + rate = 水流量。流量是水泵性能的核心指标，直接影响冷却系统的制冷能力。" },
    ],
    grammar: [
      { q: "flow rate 和 flow 有什么区别？", a: "flow = 流动/流量（泛指）\nflow rate = 流量（具体的数值，单位时间的流量）\n✅ Check the water flow.（检查水流 → 确认是否有水流动）\n✅ Check the water flow rate.（检查水流量 → 确认具体流量数值）\n交接时用 flow rate，因为需要确认具体数值是否在设计范围内。" },
    ],
    pattern: "Please check the + 参数",
    patternExamples: [
      { en: "Please check the water temperature.", cn: "请检查水温。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
      { en: "Please check the pump pressure.", cn: "请检查水泵压力。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }] },
      { en: "Please check the motor current.", cn: "请检查电机电流。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "水流量是冷却系统的关键参数：\n① 流量不足 → 冷却能力下降 → 机房温度升高\n② 流量过大 → 水泵能耗增加 → 不经济\n③ 正常流量应在设计范围内\n交接时需确认冷冻水和冷却水的流量都在正常范围内。",
    pronunciation: "flow 的 ow 读 /oʊ/，不是 /aʊ/。\nrate 的 a 读 /eɪ/，不是 /æ/。",
    quiz: [
      { q: "请检查水温，怎么说？", a: "Please check the water temperature." },
      { q: "水流量的常用单位是什么？", a: "水流量的常用单位：① m³/h（立方米/小时）—— 大型系统常用 ② L/s（升/秒）—— 中型系统常用 ③ GPM（加仑/分钟）—— 英制单位。数据中心冷冻水系统通常使用 m³/h 或 L/s。" },
    ],
  },
  // ── 场景001：冷冻水泵、冷却水泵 - 水泵运行 (1651-1660) ──
  {
    id: 1651,
    en: "The water flow rate is stable.",
    cn: "水流量稳定。",
    ipa: "/ðə ˈwɔːtər floʊ reɪt ɪz ˈsteɪbəl/",
    tags: ["第1651句", "流量稳定", "★★★★★"],
    when: "确认水流量保持稳定，没有波动。stable 表示参数平稳，没有异常变化。",
    words: [
      { w: "stable", ipa: "/ˈsteɪbəl/", pos: "形容词", cn: "稳定的", memory: "stable = 稳定的/平稳的。\nstable = 参数没有异常波动，保持在设定值附近。\n反义词：unstable = 不稳定的/波动的。", phonics: "sta 读 /steɪ/，ble 读 /bəl/，重音在 sta 上。", collocations: [["stable flow", "稳定流量"], ["stable operation", "稳定运行"], ["stable pressure", "稳定压力"]], examples: [["The flow is stable.", "流量稳定。"], ["The system is running stably.", "系统运行稳定。"]] },
    ],
    phrases: [
      { p: "flow rate is stable", ipa: "/floʊ reɪt ɪz ˈsteɪbəl/", cn: "流量稳定", why: "flow rate + is + stable = 流量稳定。stable 表示参数平稳无波动，是正常运行的重要标志。" },
    ],
    grammar: [
      { q: "stable 和 normal 有什么区别？", a: "stable = 稳定的（强调没有波动/变化）\nnormal = 正常的（强调在合理范围内）\n✅ The flow rate is stable.（流量稳定 → 没有波动）\n✅ The flow rate is normal.（流量正常 → 在合理范围内）\n流量可以 stable but not normal（稳定但偏低），也可以 normal but not stable（在范围内但波动）。" },
    ],
    pattern: "The + 参数 + is stable",
    patternExamples: [
      { en: "The water temperature is stable.", cn: "水温稳定。", words: [{ w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "stable", ipa: "/ˈsteɪbl/", cn: "稳定", phonics: "sta 读 /steɪ/，ble 读 /bl/" }] },
      { en: "The pump pressure is stable.", cn: "水泵压力稳定。", words: [{ w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }, { w: "stable", ipa: "/ˈsteɪbl/", cn: "稳定", phonics: "sta 读 /steɪ/，ble 读 /bl/" }] },
      { en: "The motor current is stable.", cn: "电机电流稳定。", words: [{ w: "stable", ipa: "/ˈsteɪbl/", cn: "稳定", phonics: "sta 读 /steɪ/，ble 读 /bl/" }] },
    ],
    thinking: "参数稳定性的判断：\n① stable = 稳定（没有异常波动）\n② fluctuating = 波动（有异常变化）\n③ drifting = 漂移（缓慢偏离设定值）\n交接时汇报参数时，除了数值正常，还要确认稳定性。",
    pronunciation: "stable 的 a 读 /eɪ/，不是 /æ/。\nble 读 /bəl/，不是 /bl/。",
    quiz: [
      { q: "水温稳定，怎么说？", a: "The water temperature is stable." },
    ],
  },
  {
    id: 1652,
    en: "Please check the pump motor current.",
    cn: "请检查水泵电机电流。",
    ipa: "/pliːz tʃɛk ðə pʌmp ˈmoʊtər ˈkʌrənt/",
    tags: ["第1652句", "电机电流", "★★★★★"],
    when: "水泵电机电流（motor current）反映电机的负载情况。电流过高可能表示电机过载或机械故障。",
    words: [
      { w: "motor current", ipa: "/ˈmoʊtər ˈkʌrənt/", pos: "名词短语", cn: "电机电流", memory: "motor = 电机/马达；current = 电流。\nmotor current = 电机电流，反映电机的负载情况。\n电流过高 = 过载；电流过低 = 空载或故障。", phonics: "mo 读 /moʊ/，tor 读 /tər/，cur 读 /kʌr/，rent 读 /rənt/。", collocations: [["motor current", "电机电流"], ["rated current", "额定电流"], ["overcurrent", "过电流"]], examples: [["Check the motor current.", "检查电机电流。"], ["The current is too high.", "电流过高。"]] },
    ],
    phrases: [
      { p: "pump motor current", ipa: "/pʌmp ˈmoʊtər ˈkʌrənt/", cn: "水泵电机电流", why: "pump + motor + current = 水泵电机电流。电流是判断电机负载和运行状态的重要电气参数。" },
    ],
    grammar: [
      { q: "current 有两个意思吗？", a: "current 有两个常见意思：\n① 电流（电气工程）：motor current = 电机电流\n② 当前的/现在的（时间）：current status = 当前状态\n✅ Check the motor current.（检查电机电流 → 名词）\n✅ What is the current status?（当前状态是什么？ → 形容词）\n在水泵语境中，current 指电流。" },
    ],
    pattern: "Please check the + 设备 + 参数",
    patternExamples: [
      { en: "Please check the motor temperature.", cn: "请检查电机温度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
      { en: "Please check the pump vibration.", cn: "请检查水泵振动。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }] },
      { en: "Please check the pump pressure.", cn: "请检查水泵压力。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }] },
    ],
    thinking: "电机电流的意义：\n① 额定电流（rated current）= 电机设计运行电流\n② 实际电流 < 额定电流 = 轻载（正常）\n③ 实际电流 > 额定电流 = 过载（需排查）\n④ 电流突然增大 = 可能机械卡阻\n交接时需确认电流在额定范围内。",
    pronunciation: "motor 的 o 读 /oʊ/，不是 /ɒ/。\ncurrent 的 cur 读 /kʌr/，不是 /kjʊr/。",
    quiz: [
      { q: "请检查电机温度，怎么说？", a: "Please check the motor temperature." },
    ],
  },
  {
    id: 1653,
    en: "The motor current is normal.",
    cn: "电机电流正常。",
    ipa: "/ðə ˈmoʊtər ˈkʌrənt ɪz ˈnɔːrməl/",
    tags: ["第1653句", "电流正常", "★★★★★"],
    when: "确认水泵电机电流在正常范围内，没有过载或异常。",
    words: [
      { w: "normal", ipa: "/ˈnɔːrməl/", pos: "形容词", cn: "正常的", memory: "normal = 正常的/标准的。\nmotor current is normal = 电机电流正常。\n反义词：abnormal = 异常的。", phonics: "nor 读 /nɔːr/，mal 读 /məl/，重音在 nor 上。", collocations: [["normal current", "正常电流"], ["normal operation", "正常运行"], ["abnormal", "异常的"]], examples: [["The current is normal.", "电流正常。"], ["Everything is normal.", "一切正常。"]] },
    ],
    phrases: [
      { p: "motor current is normal", ipa: "/ˈmoʊtər ˈkʌrənt ɪz ˈnɔːrməl/", cn: "电机电流正常", why: "motor current + is + normal = 电机电流正常。确认电流在额定范围内，电机没有过载。" },
    ],
    grammar: [
      { q: "怎么判断电流是否正常？", a: "判断电机电流是否正常：\n① 对比额定电流（rated current）：实际电流应 ≤ 额定电流\n② 对比历史数据：电流不应突然变化\n③ 对比同型号水泵：电流应相近\n✅ Motor current = 15A, rated = 20A → normal（正常）\n❌ Motor current = 22A, rated = 20A → overcurrent（过电流）" },
    ],
    pattern: "The + 参数 + is normal",
    patternExamples: [
      { en: "The water temperature is normal.", cn: "水温正常。", words: [{ w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The pump pressure is normal.", cn: "水泵压力正常。", words: [{ w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The motor temperature is normal.", cn: "电机温度正常。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "电机电流异常的排查：\n① 电流过高 → 检查是否过载、机械卡阻、电压异常\n② 电流过低 → 检查是否空载、叶轮脱落、管路堵塞\n③ 电流波动 → 检查电源质量、变频器设置、机械松动",
    pronunciation: "normal 的 or 读 /ɔːr/，不是 /ɒr/。\nmal 读 /məl/，不是 /mæl/。",
    quiz: [
      { q: "水泵压力正常，怎么说？", a: "The pump pressure is normal." },
    ],
  },
  {
    id: 1654,
    en: "Please check the motor temperature.",
    cn: "请检查电机温度。",
    ipa: "/pliːz tʃɛk ðə ˈmoʊtər ˈtɛmpərətʃər/",
    tags: ["第1654句", "电机温度", "★★★★★"],
    when: "电机温度（motor temperature）是判断电机运行状态的重要参数。温度过高会加速绝缘老化，缩短电机寿命。",
    words: [
      { w: "motor temperature", ipa: "/ˈmoʊtər ˈtɛmpərətʃər/", pos: "名词短语", cn: "电机温度", memory: "motor = 电机；temperature = 温度。\nmotor temperature = 电机温度，通常指电机外壳或绕组温度。\n电机温度过高会损坏绝缘，导致电机故障。", phonics: "mo 读 /moʊ/，tor 读 /tər/，tem 读 /tɛm/，per 读 /pər/，a 读 /ə/，ture 读 /tʃər/。", collocations: [["motor temperature", "电机温度"], ["winding temperature", "绕组温度"], ["temperature rise", "温升"]], examples: [["Check the motor temperature.", "检查电机温度。"], ["The temperature is too high.", "温度过高。"]] },
    ],
    phrases: [
      { p: "motor temperature", ipa: "/ˈmoʊtər ˈtɛmpərətʃər/", cn: "电机温度", why: "motor + temperature = 电机温度。温度是判断电机运行状态和健康状况的重要参数。" },
    ],
    grammar: [
      { q: "电机温度过高可能是什么原因？", a: "电机温度过高的可能原因：\n① 过载运行（电流过大）\n② 散热不良（风扇故障、通风口堵塞）\n③ 环境温度过高\n④ 轴承磨损（摩擦生热）\n⑤ 电压不平衡\n需要先检查电流、散热和轴承状态。" },
    ],
    pattern: "Please check the + 设备 + 参数",
    patternExamples: [
      { en: "Please check the motor current.", cn: "请检查电机电流。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the pump vibration.", cn: "请检查水泵振动。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }] },
      { en: "Please check the bearing temperature.", cn: "请检查轴承温度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
    ],
    thinking: "电机温度监控要点：\n① 外壳温度：通常 ≤ 80°C\n② 绕组温度：通常 ≤ 120°C（F级绝缘）\n③ 轴承温度：通常 ≤ 70°C\n④ 温升 = 实际温度 - 环境温度\n交接时需确认温度在允许范围内。",
    pronunciation: "temperature 的 tem 读 /tɛm/，不是 /tɪm/。\nture 读 /tʃər/，不是 /tjʊr/。",
    quiz: [
      { q: "请检查轴承温度，怎么说？", a: "Please check the bearing temperature." },
    ],
  },
  {
    id: 1655,
    en: "The motor temperature is normal.",
    cn: "电机温度正常。",
    ipa: "/ðə ˈmoʊtər ˈtɛmpərətʃər ɪz ˈnɔːrməl/",
    tags: ["第1655句", "温度正常", "★★★★★"],
    when: "确认电机温度在正常范围内，没有过热现象。",
    words: [
      { w: "temperature", ipa: "/ˈtɛmpərətʃər/", pos: "名词", cn: "温度", memory: "temperature = 温度。\nmotor temperature = 电机温度。\nambient temperature = 环境温度。", phonics: "tem 读 /tɛm/，per 读 /pər/，a 读 /ə/，ture 读 /tʃər/，重音在 tem 上。", collocations: [["motor temperature", "电机温度"], ["ambient temperature", "环境温度"], ["temperature alarm", "温度告警"]], examples: [["The temperature is normal.", "温度正常。"], ["Check the temperature.", "检查温度。"]] },
    ],
    phrases: [
      { p: "motor temperature is normal", ipa: "/ˈmoʊtər ˈtɛmpərətʃər ɪz ˈnɔːrməl/", cn: "电机温度正常", why: "motor temperature + is + normal = 电机温度正常。确认电机没有过热，运行状态良好。" },
    ],
    grammar: [
      { q: "motor temperature 和 ambient temperature 有什么区别？", a: "motor temperature = 电机温度（电机本身的温度）\nambient temperature = 环境温度（电机周围空气的温度）\n温升 = motor temperature - ambient temperature\n✅ Motor temp = 65°C, ambient = 30°C → 温升 35K（正常）\n✅ Motor temp = 85°C, ambient = 30°C → 温升 55K（偏高，需关注）" },
    ],
    pattern: "The + 参数 + is normal",
    patternExamples: [
      { en: "The motor current is normal.", cn: "电机电流正常。", words: [{ w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The water temperature is normal.", cn: "水温正常。", words: [{ w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The pump pressure is normal.", cn: "水泵压力正常。", words: [{ w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "电机温度管理：\n① 正常运行温度：外壳 50-70°C\n② 警戒温度：外壳 70-80°C\n③ 告警温度：外壳 > 80°C\n④ 定期清洁散热片，确保通风良好\n交接时需确认温度在正常范围内。",
    pronunciation: "temperature 的 tem 读 /tɛm/，不是 /tɪm/。\nnormal 的 or 读 /ɔːr/，不是 /ɒr/。",
    quiz: [
      { q: "电机电流正常，怎么说？", a: "The motor current is normal." },
    ],
  },
  {
    id: 1656,
    en: "Please check the pump vibration.",
    cn: "请检查水泵振动。",
    ipa: "/pliːz tʃɛk ðə pʌmp vaɪˈbreɪʃən/",
    tags: ["第1656句", "水泵振动", "★★★★★"],
    when: "水泵振动（vibration）是判断机械状态的重要指标。异常振动可能表示轴承磨损、叶轮不平衡或基础松动。",
    words: [
      { w: "vibration", ipa: "/vaɪˈbreɪʃən/", pos: "名词", cn: "振动", memory: "vibrate = 振动（动词）；vibration = 振动（名词）。\npump vibration = 水泵振动。\n异常振动是机械故障的早期征兆。", phonics: "vi 读 /vaɪ/，bra 读 /breɪ/，tion 读 /ʃən/，重音在 bra 上。", collocations: [["pump vibration", "水泵振动"], ["vibration level", "振动水平"], ["abnormal vibration", "异常振动"]], examples: [["Check the vibration.", "检查振动。"], ["The vibration is high.", "振动大。"]] },
    ],
    phrases: [
      { p: "pump vibration", ipa: "/pʌmp vaɪˈbreɪʃən/", cn: "水泵振动", why: "pump + vibration = 水泵振动。振动是判断水泵机械状态的重要指标，异常振动需要及时处理。" },
    ],
    grammar: [
      { q: "vibration 的动词形式是什么？", a: "vibrate = 振动（动词）\nvibration = 振动（名词）\n✅ The pump is vibrating.（水泵正在振动 → 动词）\n✅ Check the pump vibration.（检查水泵振动 → 名词）\n振动测量通常用 mm/s（毫米/秒）表示振动速度。" },
    ],
    pattern: "Please check the + 设备 + 参数",
    patternExamples: [
      { en: "Please check the pump bearings.", cn: "请检查水泵轴承。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }] },
      { en: "Please check the motor temperature.", cn: "请检查电机温度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
      { en: "Please check the mechanical seal.", cn: "请检查机械密封。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "mechanical", ipa: "/mɪˈkænɪkəl/", cn: "机械", phonics: "me 读 /mɪ/，chanical 读 /kænɪkəl/" }] },
    ],
    thinking: "水泵振动的原因分析：\n① 正常振动：电机运转的轻微振动\n② 异常振动（过大）：\n   - 轴承磨损\n   - 叶轮不平衡\n   - 基础松动\n   - 管路应力\n   - 气蚀\n交接时需确认振动在正常范围内。",
    pronunciation: "vibration 的 vi 读 /vaɪ/，不是 /vɪ/。\nbra 读 /breɪ/，重音在 bra 上。",
    quiz: [
      { q: "请检查水泵轴承，怎么说？", a: "Please check the pump bearings." },
    ],
  },
  {
    id: 1657,
    en: "No abnormal vibration has been detected.",
    cn: "没有发现异常振动。",
    ipa: "/noʊ æbˈnɔːrməl vaɪˈbreɪʃən hæz biːn dɪˈtɛktɪd/",
    tags: ["第1657句", "无异常振动", "★★★★★"],
    when: "确认水泵没有异常振动，机械状态良好。abnormal vibration 指超出正常范围的振动。",
    words: [
      { w: "abnormal", ipa: "/æbˈnɔːrməl/", pos: "形容词", cn: "异常的", memory: "ab- = 不/非（否定前缀）；normal = 正常的。\nabnormal = 异常的/不正常的。\n反义词：normal = 正常的。", phonics: "ab 读 /æb/，nor 读 /nɔːr/，mal 读 /məl/，重音在 nor 上。", collocations: [["abnormal vibration", "异常振动"], ["abnormal noise", "异常噪音"], ["abnormal temperature", "异常温度"]], examples: [["No abnormal conditions found.", "未发现异常情况。"], ["The vibration is abnormal.", "振动异常。"]] },
      { w: "detected", ipa: "/dɪˈtɛktɪd/", pos: "动词过去分词", cn: "检测到", memory: "detect = 检测/发现；-ed = 过去分词。\ndetected = 检测到的/已发现的。\nhas been detected = 已被检测到（现在完成时被动语态）。", phonics: "de 读 /dɪ/，tec 读 /tɛk/，ted 读 /tɪd/，重音在 tec 上。", collocations: [["has been detected", "已被检测到"], ["no fault detected", "未检测到故障"]], examples: [["An alarm has been detected.", "检测到告警。"], ["No leakage detected.", "未检测到泄漏。"]] },
    ],
    phrases: [
      { p: "no abnormal vibration has been detected", ipa: "/noʊ æbˈnɔːrməl vaɪˈbreɪʃən hæz biːn dɪˈtɛktɪd/", cn: "没有发现异常振动", why: "no + abnormal vibration + has been detected = 没有发现异常振动。这是巡检后汇报结果的标准用语。" },
    ],
    grammar: [
      { q: "has been detected 是什么时态？", a: "has been detected = 现在完成时被动语态\n结构：has been + 过去分词\n✅ No abnormal vibration has been detected.（没有发现异常振动 → 从过去到现在的检查结果）\n✅ An alarm has been detected.（检测到告警 → 已经发生，与现在有关）\n现在完成时强调'到目前为止的检查/监测结果'。" },
    ],
    pattern: "No + 异常 + has been detected",
    patternExamples: [
      { en: "No abnormal noise has been detected.", cn: "没有发现异常噪音。", words: [{ w: "abnormal", ipa: "/æbˈnɔːrməl/", cn: "异常", phonics: "ab 读 /æb/，normal 读 /nɔːrməl/" }] },
      { en: "No water leakage has been detected.", cn: "没有发现漏水。", words: [{ w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }] },
      { en: "No fuel leakage has been detected.", cn: "没有发现燃油泄漏。", words: [] },
    ],
    thinking: "巡检结果汇报的标准格式：\n① No abnormal vibration has been detected.（无异常振动）\n② No abnormal noise has been detected.（无异常噪音）\n③ No leakage has been detected.（无泄漏）\n如果发现问题：Abnormal vibration has been detected at pump No.1.（1号水泵检测到异常振动）",
    pronunciation: "abnormal 的 ab 读 /æb/，不是 /eɪb/。\ndetected 的 tec 读 /tɛk/，不是 /tiːk/。",
    quiz: [
      { q: "没有发现异常噪音，怎么说？", a: "No abnormal noise has been detected." },
    ],
  },
  {
    id: 1658,
    en: "Please check the pump bearings.",
    cn: "请检查水泵轴承。",
    ipa: "/pliːz tʃɛk ðə pʌmp ˈbɛərɪŋz/",
    tags: ["第1658句", "水泵轴承", "★★★★★"],
    when: "水泵轴承（bearings）是支撑转子的关键部件。轴承磨损会导致振动增大、噪音增加，最终导致水泵故障。",
    words: [
      { w: "bearings", ipa: "/ˈbɛərɪŋz/", pos: "名词复数", cn: "轴承", memory: "bearing = 轴承（bear = 承受；-ing = 名词后缀）。\nbearings = 轴承（通常用复数，因为水泵通常有多个轴承）。\n轴承支撑转子，减少摩擦。", phonics: "bear 读 /bɛər/，ing 读 /ɪŋ/，s 读 /z/，重音在 bear 上。", collocations: [["pump bearings", "水泵轴承"], ["bearing temperature", "轴承温度"], ["bearing wear", "轴承磨损"]], examples: [["Check the bearings.", "检查轴承。"], ["The bearings are worn.", "轴承磨损了。"]] },
    ],
    phrases: [
      { p: "pump bearings", ipa: "/pʌmp ˈbɛərɪŋz/", cn: "水泵轴承", why: "pump + bearings = 水泵轴承。轴承是水泵的关键机械部件，需要定期检查磨损和润滑情况。" },
    ],
    grammar: [
      { q: "bearing 为什么通常用复数？", a: "bearing 用复数 bearings 的原因：\n① 水泵通常有 2 个或多个轴承（驱动端 + 非驱动端）\n② bearings 泛指轴承组件\n✅ Check the pump bearings.（检查水泵轴承 → 检查所有轴承）\n✅ The drive-end bearing is noisy.（驱动端轴承有噪音 → 特指某一个）\n一般检查时用复数 bearings。" },
    ],
    pattern: "Please check the + 设备部件",
    patternExamples: [
      { en: "Please check the mechanical seal.", cn: "请检查机械密封。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "mechanical", ipa: "/mɪˈkænɪkəl/", cn: "机械", phonics: "me 读 /mɪ/，chanical 读 /kænɪkəl/" }] },
      { en: "Please check the fan blades.", cn: "请检查风机叶片。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the drive shaft.", cn: "请检查传动轴。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "轴承检查要点：\n① 温度：轴承温度应 ≤ 70°C\n② 振动：轴承处振动应在正常范围\n③ 噪音：不应有异常噪音（如咔嗒声、尖叫声）\n④ 润滑：定期加注润滑脂\n轴承是水泵最常见的易损件，需要定期更换。",
    pronunciation: "bearings 的 bear 读 /bɛər/，不是 /bɪər/。\ning 读 /ɪŋ/，s 读 /z/。",
    quiz: [
      { q: "请检查机械密封，怎么说？", a: "Please check the mechanical seal." },
    ],
  },
  {
    id: 1659,
    en: "The pump bearings are operating normally.",
    cn: "水泵轴承运行正常。",
    ipa: "/ðə pʌmp ˈbɛərɪŋz ɑːr ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1659句", "轴承正常", "★★★★★"],
    when: "确认水泵轴承运行正常，没有异常磨损、振动或噪音。",
    words: [
      { w: "bearings", ipa: "/ˈbɛərɪŋz/", pos: "名词复数", cn: "轴承", memory: "bearings = 轴承。\npump bearings = 水泵轴承。\nbearing condition = 轴承状态。", phonics: "bear 读 /bɛər/，ing 读 /ɪŋ/，s 读 /z/。", collocations: [["pump bearings", "水泵轴承"], ["bearing condition", "轴承状态"], ["bearing lubrication", "轴承润滑"]], examples: [["The bearings are in good condition.", "轴承状态良好。"], ["Check the bearing temperature.", "检查轴承温度。"]] },
    ],
    phrases: [
      { p: "bearings are operating normally", ipa: "/ˈbɛərɪŋz ɑːr ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "轴承运行正常", why: "bearings + are operating + normally = 轴承运行正常。确认轴承没有异常磨损或故障。" },
    ],
    grammar: [
      { q: "bearings are 还是 bearings is？", a: "bearings 是复数名词，谓语用 are：\n✅ The bearings are operating normally.（轴承运行正常 → 复数）\n❌ The bearings is operating normally.（错误）\n但如果特指某一个轴承：\n✅ The drive-end bearing is noisy.（驱动端轴承有噪音 → 单数）" },
    ],
    pattern: "The + 部件 + are operating normally",
    patternExamples: [
      { en: "The cooling fans are operating normally.", cn: "冷却风机运行正常。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The compressors are operating normally.", cn: "压缩机运行正常。", words: [{ w: "compressors", ipa: "/kəmˈprɛsər/", cn: "压缩机", phonics: "com 读 /kəm/，pressor 读 /prɛsər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The pumps are operating normally.", cn: "水泵运行正常。", words: [{ w: "pumps", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "轴承状态评估：\n① 正常：温度正常、振动正常、无异常噪音\n② 警戒：温度偏高、振动增大、轻微噪音\n③ 故障：温度过高、振动异常、明显噪音\n轴承故障是水泵停机的主要原因之一，需要定期检查和维护。",
    pronunciation: "bearings 的 bear 读 /bɛər/，重音在 bear 上。\noperating 的 o 读 /ɒ/，重音在 op 上。",
    quiz: [
      { q: "冷却风机运行正常，怎么说？", a: "The cooling fans are operating normally." },
    ],
  },
  {
    id: 1660,
    en: "Please check the mechanical seal.",
    cn: "请检查机械密封。",
    ipa: "/pliːz tʃɛk ðə məˈkænɪkəl siːl/",
    tags: ["第1660句", "机械密封", "★★★★★"],
    when: "机械密封（mechanical seal）是防止水泵轴与泵壳之间泄漏的关键部件。密封失效会导致水泄漏。",
    words: [
      { w: "mechanical seal", ipa: "/məˈkænɪkəl siːl/", pos: "名词短语", cn: "机械密封", memory: "mechanical = 机械的（mechanic = 机械师；-al = 形容词后缀）；seal = 密封。\nmechanical seal = 机械密封，防止水泵轴与泵壳之间的水泄漏。\n机械密封是水泵的关键部件，需要定期检查和更换。", phonics: "me 读 /mə/，chan 读 /kæn/，i 读 /ɪ/，cal 读 /kəl/，重音在 chan 上。seal 读 /siːl/。", collocations: [["mechanical seal", "机械密封"], ["seal leakage", "密封泄漏"], ["seal replacement", "密封更换"]], examples: [["Check the mechanical seal.", "检查机械密封。"], ["The seal is leaking.", "密封在泄漏。"]] },
    ],
    phrases: [
      { p: "mechanical seal", ipa: "/məˈkænɪkəl siːl/", cn: "机械密封", why: "mechanical + seal = 机械密封。机械密封是防止水泵泄漏的关键部件，密封失效会导致水从轴与泵壳之间泄漏。" },
    ],
    grammar: [
      { q: "mechanical seal 和 gasket 有什么区别？", a: "mechanical seal = 机械密封（动密封，用于旋转轴）\ngasket = 垫片（静密封，用于法兰连接）\n✅ mechanical seal 安装在泵轴与泵壳之间，防止旋转轴处的泄漏\n✅ gasket 安装在两个法兰之间，防止静止连接处的泄漏\n机械密封更复杂，需要定期检查；垫片通常更换即可。" },
    ],
    pattern: "Please check the + 设备部件",
    patternExamples: [
      { en: "Please check the pump bearings.", cn: "请检查水泵轴承。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }] },
      { en: "Please check the coupling.", cn: "请检查联轴器。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the impeller.", cn: "请检查叶轮。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "机械密封检查要点：\n① 泄漏：不应有明显水滴或水流\n② 磨损：密封面不应有明显磨损\n③ 温度：密封处温度不应过高\n④ 寿命：机械密封通常每 2-3 年更换一次\n密封泄漏是水泵常见故障，需要及时处理。",
    pronunciation: "mechanical 的 me 读 /mə/，chan 读 /kæn/，重音在 chan 上。\nseal 的 ea 读 /iː/，不是 /ɛ/。",
    quiz: [
      { q: "请检查水泵轴承，怎么说？", a: "Please check the pump bearings." },
      { q: "机械密封泄漏会有什么后果？", a: "机械密封泄漏的后果：① 水从轴与泵壳之间泄漏，造成水资源浪费 ② 泄漏水可能损坏电机或电气设备 ③ 泄漏导致系统压力下降，影响冷却效果 ④ 长期泄漏会加速轴承和其他部件的腐蚀 ⑤ 严重时可能导致水泵停机。发现泄漏应及时更换机械密封。" },
    ],
  },
];

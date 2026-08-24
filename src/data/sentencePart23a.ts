// EXPORTS: MOCK_SENTENCES_PART23A

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART23A: ISentence[] = [
  {
    id: 1561,
    en: "Please check the CRAC operating status.",
    cn: "请检查精密空调运行状态。",
    ipa: "/pliːz tʃɛk ðə kræk ˈɒpəreɪtɪŋ ˈstætəs/",
    tags: ["第1561句", "精密空调", "★★★★★"],
    when: "精密空调（CRAC, Computer Room Air Conditioning）是数据中心机房专用空调，提供精确的温度和湿度控制。交接时首先检查所有CRAC机组的运行状态。",
    words: [
      { w: "CRAC", ipa: "/kræk/", pos: "名词", cn: "精密空调", memory: "CRAC = Computer Room Air Conditioning\n精密空调是数据中心机房专用空调，提供精确的温度和湿度控制。\n与家用空调不同，CRAC能全年24小时不间断运行，精度达到±0.5°C。", phonics: "CRAC 读 /kræk/，不是字母拼读。", collocations: [["CRAC unit", "精密空调机组"], ["CRAC system", "精密空调系统"], ["CRAC alarm", "精密空调告警"]], examples: [["The CRAC is running normally.", "精密空调运行正常。"], ["Check the CRAC status.", "检查精密空调状态。"]] },
    ],
    phrases: [
      { p: "CRAC operating status", ipa: "/kræk ˈɒpəreɪtɪŋ ˈstætəs/", cn: "精密空调运行状态", why: "CRAC + operating + status = 精密空调运行状态。交接时必须确认所有CRAC机组的运行状况，确保机房温湿度在正常范围内。" },
    ],
    grammar: [
      { q: "check 和 inspect 有什么区别？", a: "check = 检查/查看（快速确认状态）\ninspect = 检验/检查（详细的物理检查）\n✅ Please check the CRAC status.（请检查CRAC状态 → 查看监控数据）\n✅ Please inspect the CRAC unit.（请检查CRAC机组 → 现场巡检设备）\n交接时用 check，因为是通过BMS系统远程查看。" },
    ],
    pattern: "Please check the + 设备 + operating status",
    patternExamples: [
      { en: "Please check the UPS operating status.", cn: "请检查UPS运行状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "Please check the generator operating status.", cn: "请检查发电机运行状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "Please check the cooling system operating status.", cn: "请检查冷却系统运行状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
    ],
    thinking: "CRAC是数据中心精密制冷的核心设备。交接检查顺序：① CRAC整体状态（本句）→ ② 各机组状态（1562）→ ③ CRAH状态（1563-1564）→ ④ 冷冻水系统（1565-1570）。\n数据中心通常采用N+1冗余配置，确保任何一台CRAC故障时，其他机组可以接管制冷负荷。",
    pronunciation: "CRAC 读 /kræk/，不是字母拼读 C-R-A-C。\noperating 的 o 读 /ɒ/，重音在 op 上。",
    quiz: [
      { q: "请检查UPS运行状态，怎么说？", a: "Please check the UPS operating status." },
      { q: "CRAC与普通空调有什么区别？", a: "CRAC（精密空调）与普通空调的主要区别：① 精度更高（±0.5°C vs ±2°C）② 全年24小时不间断运行 ③ 具备加湿/除湿功能 ④ 采用下送风或上送风方式，直接冷却IT设备 ⑤ 配备冗余系统，确保高可用性。" },
    ],
  },
  {
    id: 1562,
    en: "All CRAC units are operating normally.",
    cn: "所有精密空调运行正常。",
    ipa: "/ɔːl kræk ˈjuːnɪts ɑːr ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1562句", "CRAC状态", "★★★★★"],
    when: "确认所有精密空调机组运行状态正常。units 指机组，数据中心通常有多台CRAC机组冗余配置。",
    words: [
      { w: "units", ipa: "/ˈjuːnɪts/", pos: "名词复数", cn: "机组；设备单元", memory: "unit = 单元/机组。\n在数据中心，unit 通常指一台完整的设备机组。\nCRAC units = 精密空调机组（多台）\ngenerator units = 发电机组", phonics: "u 读 /juː/，nit 读 /nɪt/，s 读 /s/。", collocations: [["CRAC units", "精密空调机组"], ["generator units", "发电机组"], ["cooling units", "冷却机组"]], examples: [["All units are online.", "所有机组在线。"], ["Three units are running.", "三台机组在运行。"]] },
    ],
    phrases: [
      { p: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "运行正常", why: "operating + normally = 正常运行。这是汇报设备状态的标准用语，表明所有CRAC机组都在正常参数范围内工作。" },
    ],
    grammar: [
      { q: "are operating 和 operate 有什么区别？", a: "are operating = 正在运行（现在进行时，强调当前状态）\noperate = 运行（一般现在时，描述常态）\n✅ All CRAC units are operating normally.（所有CRAC机组正在正常运行 → 汇报当前状态）\n✅ CRAC units operate 24/7.（CRAC机组24小时运行 → 描述常态）\n交接用进行时，关注'此刻的运行状态'。" },
    ],
    pattern: "All + 设备 + units + are operating normally",
    patternExamples: [
      { en: "All UPS units are operating normally.", cn: "所有UPS机组运行正常。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "All generator units are operating normally.", cn: "所有发电机组运行正常。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "All cooling units are operating normally.", cn: "所有冷却机组运行正常。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "汇报CRAC状态的三种结论：\n① All CRAC units operating normally（全部正常 → 最佳）\n② One CRAC unit has an alarm（一台有告警 → 需进一步排查）\n③ One CRAC unit is offline（一台离线 → 需确认原因）\n数据中心采用N+1冗余，一台故障不影响整体制冷能力。",
    pronunciation: "units 的 u 读 /juː/，不是 /ʌ/。\nnormally 的 r 在美式英语中发音，英式中不发音。",
    quiz: [
      { q: "所有发电机组运行正常，怎么说？", a: "All generator units are operating normally." },
    ],
  },
  {
    id: 1563,
    en: "Please check the CRAH operating status.",
    cn: "请检查风墙空调运行状态。",
    ipa: "/pliːz tʃɛk ðə krɑː ˈɒpəreɪtɪŋ ˈstætəs/",
    tags: ["第1563句", "风墙空调", "★★★★★"],
    when: "风墙空调（CRAH, Computer Room Air Handler）是另一种精密空调类型，通过冷冻水冷却空气。交接时检查CRAH运行状态。",
    words: [
      { w: "CRAH", ipa: "/krɑː/", pos: "名词", cn: "风墙空调", memory: "CRAH = Computer Room Air Handler\n风墙空调通过冷冻水冷却空气，与CRAC（直接膨胀式）不同。\nCRAH需要冷冻水系统配合工作，通常用于大型数据中心。", phonics: "CRAH 读 /krɑː/，不是字母拼读。", collocations: [["CRAH unit", "风墙空调机组"], ["CRAH system", "风墙空调系统"], ["CRAH alarm", "风墙空调告警"]], examples: [["The CRAH is running normally.", "风墙空调运行正常。"], ["Check the CRAH status.", "检查风墙空调状态。"]] },
    ],
    phrases: [
      { p: "CRAH operating status", ipa: "/krɑː ˈɒpəreɪtɪŋ ˈstætəs/", cn: "风墙空调运行状态", why: "CRAH + operating + status = 风墙空调运行状态。CRAH与CRAC功能类似但工作原理不同，交接时需要分别检查。" },
    ],
    grammar: [
      { q: "CRAC和CRAH有什么区别？", a: "CRAC (Computer Room Air Conditioning) = 精密空调\n- 采用直接膨胀式制冷（DX，类似家用空调）\n- 自带压缩机和冷凝器\n- 适用于中小型数据中心\n\nCRAH (Computer Room Air Handler) = 风墙空调\n- 采用冷冻水制冷\n- 需要冷冻水系统配合\n- 适用于大型数据中心\n\n交接时两者都需要检查，但检查重点不同。" },
    ],
    pattern: "Please check the + 设备 + operating status",
    patternExamples: [
      { en: "Please check the CRAC operating status.", cn: "请检查精密空调运行状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Please check the chiller operating status.", cn: "请检查冷水机组运行状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "Please check the pump operating status.", cn: "请检查水泵运行状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
    ],
    thinking: "CRAC vs CRAH 选择依据：\n- CRAC：中小型数据中心，IT负载<500kW，独立制冷系统\n- CRAH：大型数据中心，IT负载>500kW，集中冷冻水系统\n\n本数据中心同时配备CRAC和CRAH，交接时需要分别检查两套系统。",
    pronunciation: "CRAH 读 /krɑː/，不是字母拼读 C-R-A-H。\nCRAC 读 /kræk/，注意区分。",
    quiz: [
      { q: "请检查冷水机组运行状态，怎么说？", a: "Please check the chiller operating status." },
      { q: "什么时候用CRAC，什么时候用CRAH？", a: "CRAC适用于中小型数据中心（IT负载<500kW），采用直接膨胀式制冷，自带压缩机。CRAH适用于大型数据中心（IT负载>500kW），采用冷冻水制冷，需要冷冻水系统配合。选择依据主要是数据中心规模和IT负载总量。" },
    ],
  },
  {
    id: 1564,
    en: "All CRAH units are operating normally.",
    cn: "所有风墙空调运行正常。",
    ipa: "/ɔːl krɑː ˈjuːnɪts ɑːr ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1564句", "CRAH状态", "★★★★★"],
    when: "确认所有风墙空调机组运行状态正常。",
    words: [
      { w: "normally", ipa: "/ˈnɔːrməli/", pos: "副词", cn: "正常地", memory: "normal = 正常的；-ly = 副词后缀。\nnormally = 正常地/按常规。\noperating normally = 正常运行。", phonics: "nor 读 /nɔːr/，mally 读 /məli/。", collocations: [["operating normally", "正常运行"], ["functioning normally", "正常运作"]], examples: [["All systems are operating normally.", "所有系统正常运行。"], ["The equipment is functioning normally.", "设备正常运作。"]] },
    ],
    phrases: [
      { p: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "运行正常", why: "operating + normally = 正常运行。这是汇报设备状态的标准用语。" },
    ],
    grammar: [
      { q: "are operating 和 operate 有什么区别？", a: "are operating = 正在运行（现在进行时，强调当前状态）\noperate = 运行（一般现在时，描述常态）\n✅ All CRAH units are operating normally.（所有CRAH机组正在正常运行 → 汇报当前状态）\n✅ CRAH units operate 24/7.（CRAH机组24小时运行 → 描述常态）\n交接用进行时，关注'此刻的运行状态'。" },
    ],
    pattern: "All + 设备 + units + are operating normally",
    patternExamples: [
      { en: "All CRAC units are operating normally.", cn: "所有精密空调运行正常。", words: [{ w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "All chiller units are operating normally.", cn: "所有冷水机组运行正常。", words: [{ w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "All pump units are operating normally.", cn: "所有水泵机组运行正常。", words: [{ w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "CRAH状态汇报格式与CRAC完全相同，只需替换设备名称。\n交接时需要分别确认CRAC和CRAH两套系统的状态，确保制冷能力充足。",
    pronunciation: "CRAH 读 /krɑː/，不是字母拼读。\nunits 的 u 读 /juː/。",
    quiz: [
      { q: "所有冷水机组运行正常，怎么说？", a: "All chiller units are operating normally." },
    ],
  },
  {
    id: 1565,
    en: "Please check the chilled water system.",
    cn: "请检查冷冻水系统。",
    ipa: "/pliːz tʃɛk ðə tʃɪld ˈwɔːtər ˈsɪstəm/",
    tags: ["第1565句", "冷冻水系统", "★★★★★"],
    when: "冷冻水系统是CRAH的冷源，提供冷冻水给CRAH冷却空气。交接时检查冷冻水系统整体状态。",
    words: [
      { w: "chilled water", ipa: "/tʃɪld ˈwɔːtər/", pos: "名词短语", cn: "冷冻水", memory: "chilled = 冷却的；water = 水。\nchilled water = 冷冻水，通常温度在6-12°C之间。\n冷冻水系统包括冷水机组、水泵、管道、CRAH等。", phonics: "chill 读 /tʃɪl/，ed 读 /d/，water 读 /ˈwɔːtər/。", collocations: [["chilled water system", "冷冻水系统"], ["chilled water supply", "冷冻水供水"], ["chilled water return", "冷冻水回水"]], examples: [["The chilled water system is running.", "冷冻水系统在运行。"], ["Check the chilled water temperature.", "检查冷冻水温度。"]] },
    ],
    phrases: [
      { p: "chilled water system", ipa: "/tʃɪld ˈwɔːtər ˈsɪstəm/", cn: "冷冻水系统", why: "chilled + water + system = 冷冻水系统。这是CRAH的冷源，交接时必须确认系统整体运行正常。" },
    ],
    grammar: [
      { q: "chilled water 和 cooling water 有什么区别？", a: "chilled water = 冷冻水（6-12°C）\n- 用于CRAH冷却机房空气\n- 由冷水机组（chiller）制备\n- 供水温度通常7°C，回水温度12°C\n\ncooling water = 冷却水（30-40°C）\n- 用于冷却冷水机组的冷凝器\n- 由冷却塔（cooling tower）降温\n- 供水温度通常32°C，回水温度37°C\n\n两者温度相差很大，不能混淆。" },
    ],
    pattern: "Please check the + 系统名称",
    patternExamples: [
      { en: "Please check the cooling water system.", cn: "请检查冷却水系统。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }] },
      { en: "Please check the fire suppression system.", cn: "请检查消防系统。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please check the power distribution system.", cn: "请检查配电系统。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
    ],
    thinking: "冷冻水系统检查顺序：\n① 系统整体状态（本句）→ ② 系统运行状态（1566）→ ③ 供水温度（1567）→ ④ 回水温度（1568）→ ⑤ 温差（1569）→ ⑥ 压力（1570）\n\n冷冻水系统的关键参数：供水7°C / 回水12°C / 温差5°C / 压力稳定。",
    pronunciation: "chilled 的 ch 读 /tʃ/，不是 /k/。\nwater 的 t 在美式英语中读 /t/，英式中读 /t/。",
    quiz: [
      { q: "请检查冷却水系统，怎么说？", a: "Please check the cooling water system." },
      { q: "冷冻水和冷却水有什么区别？", a: "冷冻水（chilled water）温度6-12°C，用于CRAH冷却机房空气，由冷水机组成制备。冷却水（cooling water）温度30-40°C，用于冷却冷水机组的冷凝器，由冷却塔降温。两者温度相差很大，功能不同，不能混淆。" },
    ],
  },
  {
    id: 1566,
    en: "The chilled water system is operating normally.",
    cn: "冷冻水系统运行正常。",
    ipa: "/ðə tʃɪld ˈwɔːtər ˈsɪstəm ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1566句", "冷冻水状态", "★★★★★"],
    when: "确认冷冻水系统整体运行状态正常。",
    words: [
      { w: "system", ipa: "/ˈsɪstəm/", pos: "名词", cn: "系统", memory: "system = 系统。\n在数据中心，system 指由多个设备组成的完整系统。\nchilled water system = 冷冻水系统\npower system = 电力系统", phonics: "sys 读 /sɪs/，tem 读 /təm/，重音在第一音节。", collocations: [["cooling system", "冷却系统"], ["power system", "电力系统"], ["monitoring system", "监控系统"]], examples: [["The system is online.", "系统在线。"], ["Check the system status.", "检查系统状态。"]] },
    ],
    phrases: [
      { p: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "运行正常", why: "operating + normally = 正常运行。表明冷冻水系统所有设备（冷水机组、水泵、管道）都在正常工作。" },
    ],
    grammar: [
      { q: "is operating 和 operates 有什么区别？", a: "is operating = 正在运行（现在进行时，强调当前状态）\noperates = 运行（一般现在时，描述常态）\n✅ The system is operating normally.（系统正在正常运行 → 汇报当前状态）\n✅ The system operates 24/7.（系统24小时运行 → 描述常态）\n交接用进行时，关注'此刻的运行状态'。" },
    ],
    pattern: "The + 系统名称 + is operating normally",
    patternExamples: [
      { en: "The cooling water system is operating normally.", cn: "冷却水系统运行正常。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "The power system is operating normally.", cn: "电力系统运行正常。", words: [{ w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "The fire suppression system is operating normally.", cn: "消防系统运行正常。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
    ],
    thinking: "冷冻水系统正常运行的标志：\n① 冷水机组运行正常\n② 水泵运行正常\n③ 供水温度稳定在7°C\n④ 回水温度稳定在12°C\n⑤ 系统压力稳定\n⑥ 无漏水告警",
    pronunciation: "system 的 sys 读 /sɪs/，不是 /saɪs/。\nnormally 的 r 在美式英语中发音。",
    quiz: [
      { q: "电力系统运行正常，怎么说？", a: "The power system is operating normally." },
    ],
  },
  {
    id: 1567,
    en: "Please check the chilled water supply temperature.",
    cn: "请检查冷冻水供水温度。",
    ipa: "/pliːz tʃɛk ðə tʃɪld ˈwɔːtər səˈplaɪ ˈtɛmpərətʃər/",
    tags: ["第1567句", "供水温度", "★★★★★"],
    when: "冷冻水供水温度是冷冻水系统的关键参数，正常值为7°C。交接时需要确认供水温度在正常范围内。",
    words: [
      { w: "supply", ipa: "/səˈplaɪ/", pos: "名词/动词", cn: "供水；供应", memory: "supply = 供应/供水。\n在冷冻水系统中：\nsupply = 供水（冷水机组→CRAH）\nreturn = 回水（CRAH→冷水机组）\nsupply temperature = 供水温度（通常7°C）", phonics: "sup 读 /sə/，ply 读 /plaɪ/，重音在第二音节。", collocations: [["supply temperature", "供水温度"], ["supply water", "供水"], ["supply pressure", "供水压力"]], examples: [["Check the supply temperature.", "检查供水温度。"], ["The supply water is 7°C.", "供水温度是7°C。"]] },
    ],
    phrases: [
      { p: "chilled water supply temperature", ipa: "/tʃɪld ˈwɔːtər səˈplaɪ ˈtɛmpərətʃər/", cn: "冷冻水供水温度", why: "chilled + water + supply + temperature = 冷冻水供水温度。这是冷冻水系统的关键参数，正常值为7°C，交接时必须确认。" },
    ],
    grammar: [
      { q: "supply 和 return 有什么区别？", a: "supply = 供水（冷水机组→CRAH）\n- 供水温度：7°C\n- 供水压力：较高\n- 流向：冷水机组出口→CRAH入口\n\nreturn = 回水（CRAH→冷水机组）\n- 回水温度：12°C\n- 回水压力：较低\n- 流向：CRAH出口→冷水机组入口\n\n温差（supply-return）= 5°C，是系统效率的重要指标。" },
    ],
    pattern: "Please check the + 介质 + supply + 参数",
    patternExamples: [
      { en: "Please check the chilled water supply pressure.", cn: "请检查冷冻水供水压力。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }] },
      { en: "Please check the cooling water supply temperature.", cn: "请检查冷却水供水温度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }] },
      { en: "Please check the fuel supply pressure.", cn: "请检查燃油供应压力。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }] },
    ],
    thinking: "冷冻水供水温度检查要点：\n① 正常值：7°C ± 1°C\n② 过高（>8°C）：制冷能力不足，机房温度可能升高\n③ 过低（<6°C）：能耗增加，可能结冰\n④ 波动大：冷水机组控制异常\n\n交接时需要记录供水温度，并与历史数据对比。",
    pronunciation: "supply 的 sup 读 /sə/，不是 /sʌ/。\ntemperature 的 per 读 /pər/，不是 /pɛr/。",
    quiz: [
      { q: "请检查冷却水供水温度，怎么说？", a: "Please check the cooling water supply temperature." },
      { q: "冷冻水供水温度正常值是多少？", a: "冷冻水供水温度正常值为7°C ± 1°C。过高（>8°C）会导致制冷能力不足，机房温度升高；过低（<6°C）会增加能耗，可能导致结冰。交接时需要记录供水温度并与历史数据对比。" },
    ],
  },
  {
    id: 1568,
    en: "Please check the chilled water return temperature.",
    cn: "请检查冷冻水回水温度。",
    ipa: "/pliːz tʃɛk ðə tʃɪld ˈwɔːtər rɪˈtɜːrn ˈtɛmpərətʃər/",
    tags: ["第1568句", "回水温度", "★★★★★"],
    when: "冷冻水回水温度是冷冻水系统的关键参数，正常值为12°C。交接时需要确认回水温度在正常范围内。",
    words: [
      { w: "return", ipa: "/rɪˈtɜːrn/", pos: "名词/动词", cn: "回水；返回", memory: "return = 返回/回水。\n在冷冻水系统中：\nreturn = 回水（CRAH→冷水机组）\nreturn temperature = 回水温度（通常12°C）\nreturn water = 回水", phonics: "re 读 /rɪ/，turn 读 /tɜːrn/，重音在第二音节。", collocations: [["return temperature", "回水温度"], ["return water", "回水"], ["return pressure", "回水压力"]], examples: [["Check the return temperature.", "检查回水温度。"], ["The return water is 12°C.", "回水温度是12°C。"]] },
    ],
    phrases: [
      { p: "chilled water return temperature", ipa: "/tʃɪld ˈwɔːtər rɪˈtɜːrn ˈtɛmpərətʃər/", cn: "冷冻水回水温度", why: "chilled + water + return + temperature = 冷冻水回水温度。这是冷冻水系统的关键参数，正常值为12°C，交接时必须确认。" },
    ],
    grammar: [
      { q: "supply 和 return 有什么区别？", a: "supply = 供水（冷水机组→CRAH）\n- 供水温度：7°C\n- 供水压力：较高\n- 流向：冷水机组出口→CRAH入口\n\nreturn = 回水（CRAH→冷水机组）\n- 回水温度：12°C\n- 回水压力：较低\n- 流向：CRAH出口→冷水机组入口\n\n温差（supply-return）= 5°C，是系统效率的重要指标。" },
    ],
    pattern: "Please check the + 介质 + return + 参数",
    patternExamples: [
      { en: "Please check the chilled water return pressure.", cn: "请检查冷冻水回水压力。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }] },
      { en: "Please check the cooling water return temperature.", cn: "请检查冷却水回水温度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }] },
      { en: "Please check the condensate return temperature.", cn: "请检查冷凝水回水温度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
    ],
    thinking: "冷冻水回水温度检查要点：\n① 正常值：12°C ± 1°C\n② 过高（>13°C）：机房热负荷过大，CRAH制冷能力不足\n③ 过低（<11°C）：机房热负荷过小，能耗浪费\n④ 波动大：机房热负荷不稳定\n\n回水温度反映机房实际热负荷，是判断制冷系统是否匹配的重要指标。",
    pronunciation: "return 的 re 读 /rɪ/，不是 /riː/。\ntemperature 的 per 读 /pər/。",
    quiz: [
      { q: "请检查冷却水回水温度，怎么说？", a: "Please check the cooling water return temperature." },
      { q: "冷冻水回水温度正常值是多少？", a: "冷冻水回水温度正常值为12°C ± 1°C。过高（>13°C）表示机房热负荷过大，CRAH制冷能力可能不足；过低（<11°C）表示机房热负荷过小，存在能耗浪费。回水温度反映机房实际热负荷，是判断制冷系统是否匹配的重要指标。" },
    ],
  },
  {
    id: 1569,
    en: "The chilled water temperature is within the normal range.",
    cn: "冷冻水温度正常。",
    ipa: "/ðə tʃɪld ˈwɔːtər ˈtɛmpərətʃər ɪz wɪˈðɪn ðə ˈnɔːrməl reɪndʒ/",
    tags: ["第1569句", "温度正常", "★★★★★"],
    when: "确认冷冻水温度（供水和回水）都在正常范围内。",
    words: [
      { w: "within", ipa: "/wɪˈðɪn/", pos: "介词", cn: "在...范围内", memory: "within = 在...范围内/不超过。\nwithin the normal range = 在正常范围内\nwithin the acceptable range = 在可接受范围内\nwithin limits = 在限制范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/，重音在第二音节。", collocations: [["within range", "在范围内"], ["within limits", "在限制内"], ["within specification", "在规格内"]], examples: [["The temperature is within range.", "温度在范围内。"], ["All parameters are within limits.", "所有参数在限制内。"]] },
    ],
    phrases: [
      { p: "within the normal range", ipa: "/wɪˈðɪn ðə ˈnɔːrməl reɪndʒ/", cn: "在正常范围内", why: "within + the + normal + range = 在正常范围内。这是描述参数正常的专业用语，比 simply saying 'normal' 更精确。" },
    ],
    grammar: [
      { q: "within the normal range 和 normal 有什么区别？", a: "within the normal range = 在正常范围内（更精确，强调参数在允许的上下限之间）\nnormal = 正常（较笼统）\n\n✅ The temperature is within the normal range.（温度在正常范围内 → 7±1°C）\n✅ The temperature is normal.（温度正常 → 但没有说明具体范围）\n\n工程场合更常用 within the normal range，因为它明确表示参数在规格允许的范围内。" },
    ],
    pattern: "The + 参数 + is within the normal range",
    patternExamples: [
      { en: "The voltage is within the normal range.", cn: "电压在正常范围内。", words: [{ w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }, { w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The pressure is within the normal range.", cn: "压力在正常范围内。", words: [{ w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }, { w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The humidity is within the normal range.", cn: "湿度在正常范围内。", words: [{ w: "humidity", ipa: "/hjuːˈmɪdɪti/", cn: "湿度", phonics: "hu 读 /hjuː/，midity 读 /mɪdɪti/" }, { w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "冷冻水温度正常范围：\n- 供水温度：6-8°C（正常值7°C）\n- 回水温度：11-13°C（正常值12°C）\n- 温差：4-6°C（正常值5°C）\n\n交接时需要确认供水温度和回水温度都在正常范围内，并计算温差是否在合理范围。",
    pronunciation: "within 的 with 读 /wɪð/，不是 /wɪθ/。\nrange 的 a 读 /eɪ/，不是 /æ/。",
    quiz: [
      { q: "电压在正常范围内，怎么说？", a: "The voltage is within the normal range." },
      { q: "冷冻水温度的正常范围是多少？", a: "冷冻水温度的正常范围：供水温度6-8°C（正常值7°C），回水温度11-13°C（正常值12°C），温差4-6°C（正常值5°C）。交接时需要确认供水和回水温度都在正常范围内，并计算温差是否合理。" },
    ],
  },
  {
    id: 1570,
    en: "Please check the chilled water pressure.",
    cn: "请检查冷冻水压力。",
    ipa: "/pliːz tʃɛk ðə tʃɪld ˈwɔːtər ˈprɛʃər/",
    tags: ["第1570句", "冷冻水压力", "★★★★★"],
    when: "冷冻水压力是冷冻水系统的关键参数，交接时需要确认压力稳定在正常范围内。",
    words: [
      { w: "pressure", ipa: "/ˈprɛʃər/", pos: "名词", cn: "压力", memory: "pressure = 压力。\n在冷冻水系统中：\nsupply pressure = 供水压力（通常4-6 bar）\nreturn pressure = 回水压力（通常2-4 bar）\npressure drop = 压降（通常2 bar）", phonics: "pres 读 /prɛs/，sure 读 /ʃər/，重音在第一音节。", collocations: [["water pressure", "水压力"], ["supply pressure", "供水压力"], ["pressure drop", "压降"]], examples: [["Check the water pressure.", "检查水压力。"], ["The pressure is stable.", "压力稳定。"]] },
    ],
    phrases: [
      { p: "chilled water pressure", ipa: "/tʃɪld ˈwɔːtər ˈprɛʃər/", cn: "冷冻水压力", why: "chilled + water + pressure = 冷冻水压力。这是冷冻水系统的关键参数，交接时必须确认压力稳定。" },
    ],
    grammar: [
      { q: "pressure 和 flow 有什么区别？", a: "pressure = 压力（单位：bar 或 Pa）\n- 表示水的推力大小\n- 供水压力：4-6 bar\n- 回水压力：2-4 bar\n\nflow = 流量（单位：L/s 或 m³/h）\n- 表示水的流速大小\n- 冷冻水流量：根据机房热负荷计算\n\n两者都是冷冻水系统的重要参数，但含义不同。" },
    ],
    pattern: "Please check the + 介质 + pressure",
    patternExamples: [
      { en: "Please check the cooling water pressure.", cn: "请检查冷却水压力。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }] },
      { en: "Please check the fuel pressure.", cn: "请检查燃油压力。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }] },
      { en: "Please check the air pressure.", cn: "请检查空气压力。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }] },
    ],
    thinking: "冷冻水压力检查要点：\n① 供水压力：4-6 bar（正常值5 bar）\n② 回水压力：2-4 bar（正常值3 bar）\n③ 压降：2 bar（正常值）\n④ 压力波动：应稳定，波动<0.5 bar\n\n压力异常可能原因：\n- 压力过低：水泵故障、管道漏水、阀门未全开\n- 压力过高：阀门关闭、管道堵塞\n- 压力波动：水泵控制异常、空气进入系统",
    pronunciation: "pressure 的 pres 读 /prɛs/，不是 /priːs/。\nsure 读 /ʃər/，不是 /ʒər/。",
    quiz: [
      { q: "请检查冷却水压力，怎么说？", a: "Please check the cooling water pressure." },
      { q: "冷冻水压力正常值是多少？", a: "冷冻水压力正常值：供水压力4-6 bar（正常值5 bar），回水压力2-4 bar（正常值3 bar），压降约2 bar。压力应稳定，波动<0.5 bar。压力异常可能原因：过低（水泵故障、漏水）、过高（阀门关闭、堵塞）、波动（控制异常、空气进入）。" },
    ],
  },
  {
    id: 1571,
    en: "Please check the supply air temperature.",
    cn: "请检查送风温度。",
    ipa: "/pliːz tʃɛk ðə səˈplaɪ ɛər ˈtɛmpərətʃər/",
    tags: ["第1571句", "送风温度", "★★★★★"],
    when: "送风温度是CRAC/CRAH出口空气的温度，正常值为18-20°C。交接时需要确认送风温度在正常范围内。",
    words: [
      { w: "supply air", ipa: "/səˈplaɪ ɛər/", pos: "名词短语", cn: "送风", memory: "supply = 供应/送出；air = 空气。\nsupply air = 送风（CRAC/CRAH出口→机房）\nreturn air = 回风（机房→CRAC/CRAH入口）\nsupply air temperature = 送风温度（通常18-20°C）", phonics: "sup 读 /sə/，ply 读 /plaɪ/，air 读 /ɛər/。", collocations: [["supply air temperature", "送风温度"], ["supply air flow", "送风流量"], ["supply air pressure", "送风压力"]], examples: [["Check the supply air temperature.", "检查送风温度。"], ["The supply air is 19°C.", "送风温度是19°C。"]] },
    ],
    phrases: [
      { p: "supply air temperature", ipa: "/səˈplaɪ ɛər ˈtɛmpərətʃər/", cn: "送风温度", why: "supply + air + temperature = 送风温度。这是CRAC/CRAH出口空气的温度，正常值为18-20°C，交接时必须确认。" },
    ],
    grammar: [
      { q: "supply air 和 return air 有什么区别？", a: "supply air = 送风（CRAC/CRAH出口→机房）\n- 送风温度：18-20°C\n- 流向：空调出口→机房冷通道\n- 作用：冷却IT设备\n\nreturn air = 回风（机房→CRAC/CRAH入口）\n- 回风温度：28-32°C\n- 流向：机房热通道→空调入口\n- 作用：将热量带回空调重新冷却\n\n温差（return-supply）= 10-12°C，是空调效率的重要指标。" },
    ],
    pattern: "Please check the + supply/return + air + 参数",
    patternExamples: [
      { en: "Please check the return air temperature.", cn: "请检查回风温度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
      { en: "Please check the supply air humidity.", cn: "请检查送风湿度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "humidity", ipa: "/hjuːˈmɪdɪti/", cn: "湿度", phonics: "hu 读 /hjuː/，midity 读 /mɪdɪti/" }] },
      { en: "Please check the return air flow.", cn: "请检查回风流量。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "送风温度检查要点：\n① 正常值：18-20°C\n② 过高（>20°C）：制冷能力不足，机房温度可能升高\n③ 过低（<18°C）：能耗增加，可能导致结露\n④ 波动大：空调控制异常\n\n送风温度直接影响机房温度，是制冷系统的关键参数。",
    pronunciation: "supply 的 sup 读 /sə/，不是 /sʌ/。\nair 读 /ɛər/，不是 /eɪr/。",
    quiz: [
      { q: "请检查回风温度，怎么说？", a: "Please check the return air temperature." },
      { q: "送风温度正常值是多少？", a: "送风温度正常值为18-20°C。过高（>20°C）会导致制冷能力不足，机房温度升高；过低（<18°C）会增加能耗，可能导致结露。送风温度直接影响机房温度，是制冷系统的关键参数。" },
    ],
  },
  {
    id: 1572,
    en: "Please check the return air temperature.",
    cn: "请检查回风温度。",
    ipa: "/pliːz tʃɛk ðə rɪˈtɜːrn ɛər ˈtɛmpərətʃər/",
    tags: ["第1572句", "回风温度", "★★★★★"],
    when: "回风温度是CRAC/CRAH入口空气的温度，正常值为28-32°C。交接时需要确认回风温度在正常范围内。",
    words: [
      { w: "return air", ipa: "/rɪˈtɜːrn ɛər/", pos: "名词短语", cn: "回风", memory: "return = 返回/回风；air = 空气。\nreturn air = 回风（机房→CRAC/CRAH入口）\nreturn air temperature = 回风温度（通常28-32°C）\n回风温度反映机房实际热负荷。", phonics: "re 读 /rɪ/，turn 读 /tɜːrn/，air 读 /ɛər/。", collocations: [["return air temperature", "回风温度"], ["return air flow", "回风流量"], ["return air humidity", "回风湿度"]], examples: [["Check the return air temperature.", "检查回风温度。"], ["The return air is 30°C.", "回风温度是30°C。"]] },
    ],
    phrases: [
      { p: "return air temperature", ipa: "/rɪˈtɜːrn ɛər ˈtɛmpərətʃər/", cn: "回风温度", why: "return + air + temperature = 回风温度。这是CRAC/CRAH入口空气的温度，正常值为28-32°C，交接时必须确认。" },
    ],
    grammar: [
      { q: "supply air 和 return air 有什么区别？", a: "supply air = 送风（CRAC/CRAH出口→机房）\n- 送风温度：18-20°C\n- 流向：空调出口→机房冷通道\n- 作用：冷却IT设备\n\nreturn air = 回风（机房→CRAC/CRAH入口）\n- 回风温度：28-32°C\n- 流向：机房热通道→空调入口\n- 作用：将热量带回空调重新冷却\n\n温差（return-supply）= 10-12°C，是空调效率的重要指标。" },
    ],
    pattern: "Please check the + supply/return + air + 参数",
    patternExamples: [
      { en: "Please check the supply air temperature.", cn: "请检查送风温度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
      { en: "Please check the return air humidity.", cn: "请检查回风湿度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "humidity", ipa: "/hjuːˈmɪdɪti/", cn: "湿度", phonics: "hu 读 /hjuː/，midity 读 /mɪdɪti/" }] },
      { en: "Please check the supply air pressure.", cn: "请检查送风压力。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }] },
    ],
    thinking: "回风温度检查要点：\n① 正常值：28-32°C\n② 过高（>32°C）：机房热负荷过大，制冷能力不足\n③ 过低（<28°C）：机房热负荷过小，能耗浪费\n④ 波动大：机房热负荷不稳定\n\n回风温度反映机房实际热负荷，是判断制冷系统是否匹配的重要指标。",
    pronunciation: "return 的 re 读 /rɪ/，不是 /riː/。\nair 读 /ɛər/。",
    quiz: [
      { q: "请检查送风温度，怎么说？", a: "Please check the supply air temperature." },
      { q: "回风温度正常值是多少？", a: "回风温度正常值为28-32°C。过高（>32°C）表示机房热负荷过大，制冷能力可能不足；过低（<28°C）表示机房热负荷过小，存在能耗浪费。回风温度反映机房实际热负荷，是判断制冷系统是否匹配的重要指标。" },
    ],
  },
  {
    id: 1573,
    en: "Please check the room humidity.",
    cn: "请检查机房湿度。",
    ipa: "/pliːz tʃɛk ðə ruːm ˈhjuːmɪdəti/",
    tags: ["第1573句", "机房湿度", "★★★★★"],
    when: "机房湿度是数据中心环境控制的重要参数，正常值为40-60% RH。交接时需要确认湿度在正常范围内。",
    words: [
      { w: "humidity", ipa: "/hjuːˈmɪdəti/", pos: "名词", cn: "湿度", memory: "humid = 潮湿的；-ity = 名词后缀。\nhumidity = 湿度，表示空气中水蒸气的含量。\n数据中心湿度正常值：40-60% RH（相对湿度）\nRH = Relative Humidity（相对湿度）", phonics: "hu 读 /hjuː/，mid 读 /mɪd/，ity 读 /ɪti/，重音在第二音节。", collocations: [["room humidity", "机房湿度"], ["relative humidity", "相对湿度"], ["humidity control", "湿度控制"]], examples: [["Check the room humidity.", "检查机房湿度。"], ["The humidity is 50%.", "湿度是50%。"]] },
    ],
    phrases: [
      { p: "room humidity", ipa: "/ruːm ˈhjuːmɪdəti/", cn: "机房湿度", why: "room + humidity = 机房湿度。这是数据中心环境控制的重要参数，正常值为40-60% RH，交接时必须确认。" },
    ],
    grammar: [
      { q: "humidity 和 temperature 有什么区别？", a: "humidity = 湿度（单位：% RH）\n- 表示空气中水蒸气的含量\n- 正常值：40-60% RH\n- 过高：结露、设备腐蚀\n- 过低：静电、灰尘\n\ntemperature = 温度（单位：°C）\n- 表示空气的冷热程度\n- 正常值：18-27°C\n- 过高：设备过热\n- 过低：能耗浪费\n\n两者都是机房环境控制的关键参数，需要同时监控。" },
    ],
    pattern: "Please check the + 位置 + humidity",
    patternExamples: [
      { en: "Please check the room temperature.", cn: "请检查机房温度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
      { en: "Please check the server room humidity.", cn: "请检查服务器机房湿度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "server", ipa: "/ˈsɜːrvər/", cn: "服务器", phonics: "serv 读 /sɜːrv/，er 读 /ər/" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "Please check the cold aisle temperature.", cn: "请检查冷通道温度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "aisle", ipa: "/aɪl/", cn: "通道", phonics: "aisle 读 /aɪl/，s 不发音" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
    ],
    thinking: "机房湿度检查要点：\n① 正常值：40-60% RH\n② 过高（>60%）：可能导致结露、设备腐蚀、霉菌生长\n③ 过低（<40%）：可能产生静电、灰尘积聚\n④ 波动大：加湿/除湿系统控制异常\n\n湿度控制是数据中心环境控制的重要部分，CRAC/CRAH通常配备加湿器和除湿器。",
    pronunciation: "humidity 的 hu 读 /hjuː/，不是 /huː/。\nroom 读 /ruːm/，不是 /rʊm/。",
    quiz: [
      { q: "请检查机房温度，怎么说？", a: "Please check the room temperature." },
      { q: "机房湿度正常值是多少？", a: "机房湿度正常值为40-60% RH（相对湿度）。过高（>60%）可能导致结露、设备腐蚀、霉菌生长；过低（<40%）可能产生静电、灰尘积聚。湿度控制是数据中心环境控制的重要部分，CRAC/CRAH通常配备加湿器和除湿器。" },
    ],
  },
  {
    id: 1574,
    en: "The humidity is within the acceptable range.",
    cn: "湿度保持在允许范围内。",
    ipa: "/ðə ˈhjuːmɪdəti ɪz wɪˈðɪn ðə əkˈsɛptəbl reɪndʒ/",
    tags: ["第1574句", "湿度正常", "★★★★★"],
    when: "确认机房湿度在可接受范围内。acceptable range 比 normal range 更灵活，允许一定偏差。",
    words: [
      { w: "acceptable", ipa: "/əkˈsɛptəbl/", pos: "形容词", cn: "可接受的", memory: "accept = 接受；-able = 能够...的。\nacceptable = 可接受的/允许的。\nacceptable range = 可接受范围（比normal range更宽）\nacceptable level = 可接受水平", phonics: "ac 读 /ək/，cept 读 /sɛpt/，able 读 /əbl/，重音在第二音节。", collocations: [["acceptable range", "可接受范围"], ["acceptable level", "可接受水平"], ["acceptable limit", "可接受限制"]], examples: [["The value is acceptable.", "数值可接受。"], ["Within acceptable limits.", "在可接受限制内。"]] },
    ],
    phrases: [
      { p: "within the acceptable range", ipa: "/wɪˈðɪn ðə əkˈsɛptəbl reɪndʒ/", cn: "在可接受范围内", why: "within + the + acceptable + range = 在可接受范围内。这比 normal range 更灵活，允许一定偏差但仍可接受。" },
    ],
    grammar: [
      { q: "acceptable range 和 normal range 有什么区别？", a: "normal range = 正常范围（最佳值±小偏差）\n- 例如：湿度 45-55% RH\n- 表示参数在最佳状态\n\nacceptable range = 可接受范围（允许更大偏差）\n- 例如：湿度 40-60% RH\n- 表示参数虽非最佳但仍在安全范围\n\n交接时如果参数在 acceptable range 但不在 normal range，需要关注但不必立即处理。" },
    ],
    pattern: "The + 参数 + is within the acceptable range",
    patternExamples: [
      { en: "The temperature is within the acceptable range.", cn: "温度在可接受范围内。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }, { w: "range", ipa: "/reɪndʒ/", cn: "范围", phonics: "range 读 /reɪndʒ/" }] },
      { en: "The voltage is within the acceptable range.", cn: "电压在可接受范围内。", words: [{ w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }, { w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }, { w: "range", ipa: "/reɪndʒ/", cn: "范围", phonics: "range 读 /reɪndʒ/" }] },
      { en: "The pressure is within the acceptable range.", cn: "压力在可接受范围内。", words: [{ w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }, { w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }, { w: "range", ipa: "/reɪndʒ/", cn: "范围", phonics: "range 读 /reɪndʒ/" }] },
    ],
    thinking: "湿度范围分级：\n① 最佳范围：45-55% RH（normal range）\n② 可接受范围：40-60% RH（acceptable range）\n③ 警戒范围：35-40% 或 60-65% RH（需要关注）\n④ 危险范围：<35% 或 >65% RH（需要立即处理）\n\n交接时需要确认湿度在 acceptable range 内，如果在警戒或危险范围需要立即处理。",
    pronunciation: "acceptable 的 ac 读 /ək/，不是 /æk/。\nrange 的 a 读 /eɪ/。",
    quiz: [
      { q: "温度在可接受范围内，怎么说？", a: "The temperature is within the acceptable range." },
      { q: "acceptable range 和 normal range 有什么区别？", a: "normal range（正常范围）表示参数在最佳状态，偏差小（如湿度45-55% RH）。acceptable range（可接受范围）允许更大偏差但仍安全（如湿度40-60% RH）。交接时如果参数在acceptable range但不在normal range，需要关注但不必立即处理。" },
    ],
  },
  {
    id: 1575,
    en: "Please check the compressor status.",
    cn: "请检查压缩机状态。",
    ipa: "/pliːz tʃɛk ðə kəmˈprɛsər ˈstætəs/",
    tags: ["第1575句", "压缩机", "★★★★★"],
    when: "压缩机是CRAC的核心部件，负责压缩制冷剂。交接时需要确认压缩机运行状态正常。",
    words: [
      { w: "compressor", ipa: "/kəmˈprɛsər/", pos: "名词", cn: "压缩机", memory: "compress = 压缩；-or = 设备。\ncompressor = 压缩机，将制冷剂气体压缩成高压高温气体。\nCRAC采用直接膨胀式制冷，压缩机是核心部件。", phonics: "com 读 /kəm/，press 读 /prɛs/，or 读 /ər/，重音在第二音节。", collocations: [["compressor status", "压缩机状态"], ["compressor running", "压缩机运行"], ["compressor alarm", "压缩机告警"]], examples: [["Check the compressor status.", "检查压缩机状态。"], ["The compressor is running.", "压缩机在运行。"]] },
    ],
    phrases: [
      { p: "compressor status", ipa: "/kəmˈprɛsər ˈstætəs/", cn: "压缩机状态", why: "compressor + status = 压缩机状态。压缩机是CRAC的核心部件，交接时必须确认其运行状态正常。" },
    ],
    grammar: [
      { q: "compressor 和 condenser 有什么区别？", a: "compressor = 压缩机\n- 将制冷剂气体压缩成高压高温气体\n- 消耗电能，是制冷系统的动力源\n- 通常位于CRAC室外机\n\ncondenser = 冷凝器\n- 将高压高温制冷剂气体冷却成液体\n- 释放热量到室外空气\n- 通常位于CRAC室外机\n\n两者都是CRAC室外机的重要部件，配合工作完成制冷循环。" },
    ],
    pattern: "Please check the + 部件 + status",
    patternExamples: [
      { en: "Please check the condenser status.", cn: "请检查冷凝器状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Please check the evaporator status.", cn: "请检查蒸发器状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Please check the fan status.", cn: "请检查风机状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
    ],
    thinking: "压缩机检查要点：\n① 运行状态：running（运行）/ stopped（停止）/ standby（备用）\n② 运行电流：正常范围内\n③ 运行声音：无异常噪音\n④ 振动：无异常振动\n⑤ 温度：无过热\n\n压缩机故障会导致CRAC制冷能力下降，需要及时更换备用机组。",
    pronunciation: "compressor 的 com 读 /kəm/，不是 /kɒm/。\npress 读 /prɛs/，不是 /priːs/。",
    quiz: [
      { q: "请检查冷凝器状态，怎么说？", a: "Please check the condenser status." },
      { q: "compressor 和 condenser 有什么区别？", a: "compressor（压缩机）将制冷剂气体压缩成高压高温气体，消耗电能，是制冷系统的动力源。condenser（冷凝器）将高压高温制冷剂气体冷却成液体，释放热量到室外空气。两者都是CRAC室外机的重要部件，配合工作完成制冷循环。" },
    ],
  },
  {
    id: 1576,
    en: "The compressor is operating normally.",
    cn: "压缩机运行正常。",
    ipa: "/ðə kəmˈprɛsər ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1576句", "压缩机正常", "★★★★★"],
    when: "确认压缩机运行状态正常。",
    words: [
      { w: "normally", ipa: "/ˈnɔːrməli/", pos: "副词", cn: "正常地", memory: "normal = 正常的；-ly = 副词后缀。\nnormally = 正常地/按常规。\noperating normally = 正常运行。", phonics: "nor 读 /nɔːr/，mally 读 /məli/。", collocations: [["operating normally", "正常运行"], ["functioning normally", "正常运作"]], examples: [["The system is operating normally.", "系统正常运行。"], ["All components are functioning normally.", "所有部件正常运作。"]] },
    ],
    phrases: [
      { p: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "运行正常", why: "operating + normally = 正常运行。表明压缩机在正常参数范围内工作，无告警、无异常。" },
    ],
    grammar: [
      { q: "is operating 和 operates 有什么区别？", a: "is operating = 正在运行（现在进行时，强调当前状态）\noperates = 运行（一般现在时，描述常态）\n✅ The compressor is operating normally.（压缩机正在正常运行 → 汇报当前状态）\n✅ The compressor operates 24/7.（压缩机24小时运行 → 描述常态）\n交接用进行时，关注'此刻的运行状态'。" },
    ],
    pattern: "The + 部件 + is operating normally",
    patternExamples: [
      { en: "The condenser is operating normally.", cn: "冷凝器运行正常。", words: [{ w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The evaporator is operating normally.", cn: "蒸发器运行正常。", words: [{ w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The fan is operating normally.", cn: "风机运行正常。", words: [{ w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "压缩机正常运行的标志：\n① 运行状态：running\n② 运行电流：正常范围内\n③ 运行声音：平稳，无异常噪音\n④ 振动：正常，无异常振动\n⑤ 温度：无过热\n⑥ 无告警",
    pronunciation: "compressor 的 com 读 /kəm/。\nnormally 的 r 在美式英语中发音。",
    quiz: [
      { q: "冷凝器运行正常，怎么说？", a: "The condenser is operating normally." },
    ],
  },
  {
    id: 1577,
    en: "Please check the fan motor.",
    cn: "请检查风机电机。",
    ipa: "/pliːz tʃɛk ðə fæn ˈmoʊtər/",
    tags: ["第1577句", "风机电机", "★★★★★"],
    when: "风机电机是CRAC/CRAH的重要部件，负责驱动风机送风。交接时需要确认风机电机运行状态正常。",
    words: [
      { w: "fan motor", ipa: "/fæn ˈmoʊtər/", pos: "名词短语", cn: "风机电机", memory: "fan = 风机；motor = 电机。\nfan motor = 风机电机，驱动风机叶片旋转送风。\nCRAC/CRAH通常配备多台风机，采用N+1冗余配置。", phonics: "fan 读 /fæn/，mo 读 /moʊ/，tor 读 /tər/。", collocations: [["fan motor status", "风机电机状态"], ["fan motor running", "风机电机运行"], ["fan motor alarm", "风机电机告警"]], examples: [["Check the fan motor.", "检查风机电机。"], ["The fan motor is running.", "风机电机在运行。"]] },
    ],
    phrases: [
      { p: "fan motor", ipa: "/fæn ˈmoʊtər/", cn: "风机电机", why: "fan + motor = 风机电机。这是CRAC/CRAH的重要部件，交接时必须确认其运行状态正常。" },
    ],
    grammar: [
      { q: "fan 和 blower 有什么区别？", a: "fan = 风机（轴流风机）\n- 气流方向与风机轴平行\n- 风量大，风压低\n- 适用于冷凝器散热\n\nblower = 鼓风机（离心风机）\n- 气流方向与风机轴垂直\n- 风量小，风压高\n- 适用于CRAC/CRAH送风\n\n两者都是通风设备，但工作原理和应用场景不同。" },
    ],
    pattern: "Please check the + 部件名称",
    patternExamples: [
      { en: "Please check the fan blade.", cn: "请检查风机叶片。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the motor bearing.", cn: "请检查电机轴承。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the drive belt.", cn: "请检查传动皮带。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "风机电机检查要点：\n① 运行状态：running（运行）/ stopped（停止）\n② 运行电流：正常范围内\n③ 运行声音：平稳，无异常噪音\n④ 振动：正常，无异常振动\n⑤ 温度：无过热\n⑥ 轴承：无异常磨损\n\n风机故障会导致CRAC/CRAH送风量下降，影响机房冷却效果。",
    pronunciation: "fan 读 /fæn/，不是 /fɑːn/。\nmotor 的 mo 读 /moʊ/，不是 /mɒ/。",
    quiz: [
      { q: "请检查风机叶片，怎么说？", a: "Please check the fan blade." },
      { q: "fan 和 blower 有什么区别？", a: "fan（风机/轴流风机）气流方向与风机轴平行，风量大风压低，适用于冷凝器散热。blower（鼓风机/离心风机）气流方向与风机轴垂直，风量小风压高，适用于CRAC/CRAH送风。两者都是通风设备，但工作原理和应用场景不同。" },
    ],
  },
  {
    id: 1578,
    en: "The fan motor is operating normally.",
    cn: "风机电机运行正常。",
    ipa: "/ðə fæn ˈmoʊtər ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1578句", "风机正常", "★★★★★"],
    when: "确认风机电机运行状态正常。",
    words: [
      { w: "normally", ipa: "/ˈnɔːrməli/", pos: "副词", cn: "正常地", memory: "normal = 正常的；-ly = 副词后缀。\nnormally = 正常地/按常规。\noperating normally = 正常运行。", phonics: "nor 读 /nɔːr/，mally 读 /məli/。", collocations: [["operating normally", "正常运行"], ["functioning normally", "正常运作"]], examples: [["The system is operating normally.", "系统正常运行。"], ["All components are functioning normally.", "所有部件正常运作。"]] },
    ],
    phrases: [
      { p: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "运行正常", why: "operating + normally = 正常运行。表明风机电机在正常参数范围内工作，无告警、无异常。" },
    ],
    grammar: [
      { q: "is operating 和 operates 有什么区别？", a: "is operating = 正在运行（现在进行时，强调当前状态）\noperates = 运行（一般现在时，描述常态）\n✅ The fan motor is operating normally.（风机电机正在正常运行 → 汇报当前状态）\n✅ The fan motor operates 24/7.（风机电机24小时运行 → 描述常态）\n交接用进行时，关注'此刻的运行状态'。" },
    ],
    pattern: "The + 部件 + is operating normally",
    patternExamples: [
      { en: "The compressor is operating normally.", cn: "压缩机运行正常。", words: [{ w: "compressor", ipa: "/kəmˈprɛsər/", cn: "压缩机", phonics: "com 读 /kəm/，pressor 读 /prɛsər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The pump is operating normally.", cn: "水泵运行正常。", words: [{ w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The valve is operating normally.", cn: "阀门运行正常。", words: [{ w: "valve", ipa: "/vælv/", cn: "阀门", phonics: "valve 读 /vælv/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "风机电机正常运行的标志：\n① 运行状态：running\n② 运行电流：正常范围内\n③ 运行声音：平稳，无异常噪音\n④ 振动：正常，无异常振动\n⑤ 温度：无过热\n⑥ 轴承：无异常磨损\n⑦ 无告警",
    pronunciation: "fan 读 /fæn/。\nmotor 的 mo 读 /moʊ/。",
    quiz: [
      { q: "水泵运行正常，怎么说？", a: "The pump is operating normally." },
    ],
  },
  {
    id: 1579,
    en: "Please check the air filter.",
    cn: "请检查空气过滤器。",
    ipa: "/pliːz tʃɛk ðə ɛər ˈfɪltər/",
    tags: ["第1579句", "空气过滤器", "★★★★★"],
    when: "空气过滤器是CRAC/CRAH的重要部件，负责过滤空气中的灰尘和颗粒。交接时需要确认过滤器状态正常。",
    words: [
      { w: "air filter", ipa: "/ɛər ˈfɪltər/", pos: "名词短语", cn: "空气过滤器", memory: "air = 空气；filter = 过滤器。\nair filter = 空气过滤器，过滤空气中的灰尘和颗粒。\nCRAC/CRAH配备多级过滤器，保护IT设备免受灰尘污染。", phonics: "air 读 /ɛər/，fil 读 /fɪl/，ter 读 /tər/。", collocations: [["air filter status", "空气过滤器状态"], ["air filter clean", "空气过滤器干净"], ["air filter dirty", "空气过滤器脏"]], examples: [["Check the air filter.", "检查空气过滤器。"], ["The air filter is clean.", "空气过滤器干净。"]] },
    ],
    phrases: [
      { p: "air filter", ipa: "/ɛər ˈfɪltər/", cn: "空气过滤器", why: "air + filter = 空气过滤器。这是CRAC/CRAH的重要部件，交接时必须确认其状态正常。" },
    ],
    grammar: [
      { q: "filter 和 strainer 有什么区别？", a: "filter = 过滤器（过滤气体或液体中的微小颗粒）\n- air filter：空气过滤器\n- oil filter：油过滤器\n- 过滤精度：微米级\n\nstrainer = 滤网（过滤液体中的大颗粒）\n- water strainer：水滤网\n- fuel strainer：燃油滤网\n- 过滤精度：毫米级\n\n两者都是过滤设备，但过滤精度和应用场景不同。" },
    ],
    pattern: "Please check the + 部件名称",
    patternExamples: [
      { en: "Please check the oil filter.", cn: "请检查油过滤器。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "filter", ipa: "/ˈfɪltər/", cn: "过滤器", phonics: "fil 读 /fɪl/，ter 读 /tər/" }] },
      { en: "Please check the fuel filter.", cn: "请检查燃油过滤器。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "filter", ipa: "/ˈfɪltər/", cn: "过滤器", phonics: "fil 读 /fɪl/，ter 读 /tər/" }] },
      { en: "Please check the water strainer.", cn: "请检查水滤网。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }] },
    ],
    thinking: "空气过滤器检查要点：\n① 状态：clean（干净）/ dirty（脏）/ clogged（堵塞）\n② 压差：正常范围内（通常<50 Pa）\n③ 更换周期：通常3-6个月\n④ 过滤等级：G4/F7/H13等\n\n过滤器脏堵会导致：\n- 送风量下降\n- 风机负荷增加\n- 能耗增加\n- 机房温度升高",
    pronunciation: "air 读 /ɛər/，不是 /eɪr/。\nfilter 的 fil 读 /fɪl/，不是 /faɪl/。",
    quiz: [
      { q: "请检查油过滤器，怎么说？", a: "Please check the oil filter." },
      { q: "filter 和 strainer 有什么区别？", a: "filter（过滤器）过滤气体或液体中的微小颗粒，过滤精度微米级，如空气过滤器、油过滤器。strainer（滤网）过滤液体中的大颗粒，过滤精度毫米级，如水滤网、燃油滤网。两者都是过滤设备，但过滤精度和应用场景不同。" },
    ],
  },
  {
    id: 1580,
    en: "The air filter is clean.",
    cn: "空气过滤器很干净。",
    ipa: "/ðə ɛər ˈfɪltər ɪz kliːn/",
    tags: ["第1580句", "过滤器干净", "★★★★★"],
    when: "确认空气过滤器状态干净，无需更换。",
    words: [
      { w: "clean", ipa: "/kliːn/", pos: "形容词", cn: "干净的", memory: "clean = 干净的/清洁的。\n在设备检查中：\nclean = 干净（状态良好）\ndirty = 脏（需要清洁或更换）\nclogged = 堵塞（需要立即更换）", phonics: "cl 读 /kl/，ean 读 /iːn/，重音在单词上。", collocations: [["filter clean", "过滤器干净"], ["filter dirty", "过滤器脏"], ["filter clogged", "过滤器堵塞"]], examples: [["The filter is clean.", "过滤器干净。"], ["The filter needs cleaning.", "过滤器需要清洁。"]] },
    ],
    phrases: [
      { p: "air filter is clean", ipa: "/ɛər ˈfɪltər ɪz kliːn/", cn: "空气过滤器很干净", why: "air + filter + is + clean = 空气过滤器很干净。这表明过滤器状态良好，无需更换，可以继续正常使用。" },
    ],
    grammar: [
      { q: "clean 和 dirty 有什么区别？", a: "clean = 干净的（状态良好）\n- 过滤器干净，无需更换\n- 压差正常（<50 Pa）\n- 可以继续正常使用\n\ndirty = 脏的（需要清洁或更换）\n- 过滤器脏，需要清洁或更换\n- 压差升高（>50 Pa）\n- 送风量可能下降\n\nclogged = 堵塞的（需要立即更换）\n- 过滤器严重堵塞\n- 压差很高（>100 Pa）\n- 送风量严重下降，需要立即更换" },
    ],
    pattern: "The + 部件 + is + 状态形容词",
    patternExamples: [
      { en: "The filter is dirty.", cn: "过滤器脏。", words: [{ w: "filter", ipa: "/ˈfɪltər/", cn: "过滤器", phonics: "fil 读 /fɪl/，ter 读 /tər/" }] },
      { en: "The belt is worn.", cn: "皮带磨损。", words: [] },
      { en: "The bearing is damaged.", cn: "轴承损坏。", words: [] },
    ],
    thinking: "过滤器状态分级：\n① clean（干净）：状态良好，无需更换\n② slightly dirty（轻微脏）：可以继续观察，计划更换\n③ dirty（脏）：需要清洁或更换\n④ clogged（堵塞）：需要立即更换\n\n交接时需要记录过滤器状态，如果在dirty或clogged状态需要安排更换。",
    pronunciation: "clean 的 cl 读 /kl/，不是 /kəl/。\nean 读 /iːn/，不是 /ɛn/。",
    quiz: [
      { q: "过滤器脏，怎么说？", a: "The filter is dirty." },
      { q: "过滤器状态有哪些分级？", a: "过滤器状态分级：① clean（干净）：状态良好，无需更换 ② slightly dirty（轻微脏）：可以继续观察，计划更换 ③ dirty（脏）：需要清洁或更换 ④ clogged（堵塞）：需要立即更换。交接时需要记录过滤器状态，如果在dirty或clogged状态需要安排更换。" },
    ],
  },
];

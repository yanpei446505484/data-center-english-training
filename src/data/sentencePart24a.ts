// EXPORTS: MOCK_SENTENCES_PART24A

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART24A: ISentence[] = [
  // ── 场景001：冷却塔 - 运行状态检查 (1601-1610) ──
  {
    id: 1601,
    en: "Please check the cooling tower operating status.",
    cn: "请检查冷却塔运行状态。",
    ipa: "/pliːz tʃɛk ðə ˈkuːlɪŋ ˈtaʊər ˈɒpəreɪtɪŋ ˈstætəs/",
    tags: ["第1601句", "冷却塔", "★★★★★"],
    when: "冷却塔是数据中心冷却系统的末端设备，通过蒸发散热将冷冻水中的热量排入大气。交接时首先检查冷却塔整体运行状态。",
    words: [
      { w: "cooling tower", ipa: "/ˈkuːlɪŋ ˈtaʊər/", pos: "名词短语", cn: "冷却塔", memory: "cooling = 冷却；tower = 塔。\ncooling tower = 冷却塔，通过水的蒸发散热原理将冷却水中的热量排放到大气中。\n数据中心通常配备多台冷却塔冗余配置，确保冷却系统可靠性。", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/，tower 读 /ˈtaʊər/。", collocations: [["cooling tower fan", "冷却塔风机"], ["cooling tower basin", "冷却塔水池"], ["cooling tower system", "冷却塔系统"]], examples: [["The cooling tower is running normally.", "冷却塔运行正常。"], ["Check the cooling tower status.", "检查冷却塔状态。"]] },
      { w: "operating status", ipa: "/ˈɒpəreɪtɪŋ ˈstætəs/", pos: "名词短语", cn: "运行状态", memory: "operating = 运行中的；status = 状态。\noperating status = 运行状态，指设备当前的工作状况。\n交接时必须确认所有关键设备的运行状态。", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/，status 读 /ˈstætəs/。", collocations: [["check operating status", "检查运行状态"], ["normal operating status", "正常运行状态"], ["operating status report", "运行状态报告"]], examples: [["What is the operating status?", "运行状态是什么？"], ["All systems show normal operating status.", "所有系统显示正常运行状态。"]] },
    ],
    phrases: [
      { p: "cooling tower operating status", ipa: "/ˈkuːlɪŋ ˈtaʊər ˈɒpəreɪtɪŋ ˈstætəs/", cn: "冷却塔运行状态", why: "cooling + tower + operating + status = 冷却塔运行状态。交接时必须首先确认冷却塔的整体运行状况，包括风机、水泵、水位等关键参数。" },
    ],
    grammar: [
      { q: "check 和 inspect 有什么区别？", a: "check = 检查/查看（快速确认状态）\ninspect = 检验/检查（详细的物理检查）\n✅ Please check the cooling tower status.（请检查冷却塔状态 → 查看BMS监控数据）\n✅ Please inspect the cooling tower.（请检查冷却塔 → 现场巡检设备）\n交接时用 check，因为是通过监控系统远程查看。" },
    ],
    pattern: "Please check the + 设备 + operating status",
    patternExamples: [
      { en: "Please check the chiller operating status.", cn: "请检查冷水机组运行状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "Please check the generator operating status.", cn: "请检查发电机运行状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "Please check the UPS operating status.", cn: "请检查UPS运行状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
    ],
    thinking: "冷却塔是数据中心冷却链的最后一环。交接检查顺序：① 整体运行状态（本句）→ ② 各台冷却塔状态（1602-1603）→ ③ 风机/电机（1604-1607）→ ④ 水位（1608-1609）→ ⑤ 补水阀（1610）。\n冷却塔通过蒸发散热原理工作，风机将空气吹过填料，水与空气接触蒸发带走热量。",
    pronunciation: "cooling 的 oo 读 /uː/，不是 /ʊ/。\ntower 的 ow 读 /aʊ/，重音在第一音节。",
    quiz: [
      { q: "请检查冷水机组运行状态，怎么说？", a: "Please check the chiller operating status." },
      { q: "冷却塔的工作原理是什么？", a: "冷却塔通过蒸发散热原理工作：热水从顶部喷淋下来，空气由风机从底部吸入，水与空气在填料中充分接触，部分水蒸发带走热量，冷却后的水落入水池循环利用。" },
    ],
  },
  {
    id: 1602,
    en: "Cooling Tower No.1 is operating normally.",
    cn: "1号冷却塔运行正常。",
    ipa: "/ˈkuːlɪŋ ˈtaʊər ˌnʌmˈwʌn ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1602句", "冷却塔状态", "★★★★★"],
    when: "确认1号冷却塔运行状态正常。No.1 是 Number 1 的缩写形式，在工程场合广泛使用。",
    words: [
      { w: "Cooling Tower No.1", ipa: "/ˈkuːlɪŋ ˈtaʊər ˌnʌmˈwʌn/", pos: "名词短语", cn: "1号冷却塔", memory: "Cooling Tower = 冷却塔；No.1 = Number 1 = 1号。\n数据中心通常有多台冷却塔编号管理，如 CT-1, CT-2, CT-3。\nNo. 是 Number 的缩写，读作 /ˈnʌmbər/。", phonics: "Cooling 读 /ˈkuːlɪŋ/，Tower 读 /ˈtaʊər/，No.1 读 /ˌnʌmˈwʌn/。", collocations: [["Cooling Tower No.1", "1号冷却塔"], ["CT-1", "1号冷却塔（缩写）"], ["tower number one", "1号塔"]], examples: [["Cooling Tower No.1 is online.", "1号冷却塔在线。"], ["Check CT-1 status.", "检查1号冷却塔状态。"]] },
    ],
    phrases: [
      { p: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "运行正常", why: "operating + normally = 正常运行。这是汇报设备状态的标准用语。" },
    ],
    grammar: [
      { q: "is operating 和 operates 有什么区别？", a: "is operating = 正在运行（现在进行时，强调当前状态）\noperates = 运行（一般现在时，描述常态）\n✅ Cooling Tower No.1 is operating normally.（1号冷却塔正在正常运行 → 汇报当前状态）\n✅ The cooling tower operates 24/7.（冷却塔24小时运行 → 描述常态）\n交接用进行时，关注'此刻的运行状态'。" },
    ],
    pattern: "设备 + No.X + is operating normally",
    patternExamples: [
      { en: "Cooling Tower No.2 is operating normally.", cn: "2号冷却塔运行正常。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "Chiller No.1 is operating normally.", cn: "1号冷水机组运行正常。", words: [{ w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "Generator No.3 is operating normally.", cn: "3号发电机运行正常。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "汇报冷却塔状态时的标准格式：设备编号 + 状态。\n① Cooling Tower No.1 is operating normally（正常 → 最佳）\n② Cooling Tower No.1 has an alarm（有告警 → 需进一步排查）\n③ Cooling Tower No.1 is offline（离线 → 需确认原因）",
    pronunciation: "No.1 读作 number one /ˌnʌmˈwʌn/，不要读成 N-O 字母拼读。\nnormally 的 r 在美式英语中发音，英式中不发音。",
    quiz: [
      { q: "2号冷水机组运行正常，怎么说？", a: "Chiller No.2 is operating normally." },
    ],
  },
  {
    id: 1603,
    en: "Cooling Tower No.2 is on standby.",
    cn: "2号冷却塔处于备用状态。",
    ipa: "/ˈkuːlɪŋ ˈtaʊər ˌnʌmˈtuː ɪz ɒn ˈstændbaɪ/",
    tags: ["第1603句", "冷却塔状态", "★★★★★"],
    when: "确认2号冷却塔处于备用状态。standby 表示设备已就绪，可在需要时立即启动。",
    words: [
      { w: "standby", ipa: "/ˈstændbaɪ/", pos: "名词/形容词", cn: "备用状态；待命", memory: "stand = 站立；by = 旁边。\nstandby = 待命/备用，指设备已就绪可随时启动。\non standby = 处于备用状态。\nstandby equipment = 备用设备。", phonics: "stand 读 /stænd/，by 读 /baɪ/，重音在第一音节。", collocations: [["on standby", "处于备用状态"], ["standby mode", "备用模式"], ["standby equipment", "备用设备"]], examples: [["The generator is on standby.", "发电机处于备用状态。"], ["Switch to standby mode.", "切换到备用模式。"]] },
    ],
    phrases: [
      { p: "on standby", ipa: "/ɒn ˈstændbaɪ/", cn: "处于备用状态", why: "on + standby = 处于备用状态。表示设备已就绪，可在主设备故障或需要时立即启动接管工作。" },
    ],
    grammar: [
      { q: "is on standby 和 is in standby mode 有什么区别？", a: "is on standby = 处于备用状态（简洁表达）\nis in standby mode = 处于备用模式（更正式）\n✅ Cooling Tower No.2 is on standby.（2号冷却塔处于备用状态 → 简洁）\n✅ The generator is in standby mode.（发电机处于备用模式 → 正式）\n两种表达都正确，交接时常用简洁版。" },
    ],
    pattern: "设备 + No.X + is on standby",
    patternExamples: [
      { en: "Generator No.2 is on standby.", cn: "2号发电机处于备用状态。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "Chiller No.3 is on standby.", cn: "3号冷水机组处于备用状态。", words: [{ w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }] },
      { en: "UPS No.2 is on standby.", cn: "2号UPS处于备用状态。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }] },
    ],
    thinking: "备用设备的作用：\n① 主设备故障时立即接管（N+1 冗余）\n② 主设备维护时提供持续服务\n③ 高峰期分担负载\n交接时必须确认备用设备的状态，确保随时可启动。",
    pronunciation: "standby 的 stand 读 /stænd/，不是 /stɑːnd/。\nby 读 /baɪ/，不是 /biː/。",
    quiz: [
      { q: "3号发电机处于备用状态，怎么说？", a: "Generator No.3 is on standby." },
    ],
  },
  {
    id: 1604,
    en: "Please check the cooling tower fan.",
    cn: "请检查冷却塔风机。",
    ipa: "/pliːz tʃɛk ðə ˈkuːlɪŋ ˈtaʊər fæn/",
    tags: ["第1604句", "冷却塔风机", "★★★★★"],
    when: "冷却塔风机是驱动空气流过填料的关键设备，直接影响冷却效率。交接时检查风机运行状态。",
    words: [
      { w: "fan", ipa: "/fæn/", pos: "名词", cn: "风机；风扇", memory: "fan = 风机/风扇。\n冷却塔风机通常是大型轴流风机，将空气从底部吸入，从顶部排出。\n风机转速可调节以控制冷却效果。", phonics: "fan 读 /fæn/，单音节词。", collocations: [["cooling tower fan", "冷却塔风机"], ["fan speed", "风机转速"], ["fan motor", "风机电机"]], examples: [["The fan is running.", "风机正在运行。"], ["Adjust the fan speed.", "调节风机转速。"]] },
    ],
    phrases: [
      { p: "cooling tower fan", ipa: "/ˈkuːlɪŋ ˈtaʊər fæn/", cn: "冷却塔风机", why: "cooling + tower + fan = 冷却塔风机。风机是冷却塔的核心部件，通过强制通风加速水的蒸发散热。" },
    ],
    grammar: [
      { q: "check 和 monitor 有什么区别？", a: "check = 检查（一次性确认状态）\nmonitor = 监控（持续观察变化）\n✅ Please check the cooling tower fan.（请检查冷却塔风机 → 确认当前状态）\n✅ Please monitor the fan speed.（请监控风机转速 → 持续观察）\n交接时用 check，因为是确认当前状态。" },
    ],
    pattern: "Please check the + 设备部件",
    patternExamples: [
      { en: "Please check the cooling tower motor.", cn: "请检查冷却塔电机。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }] },
      { en: "Please check the chiller compressor.", cn: "请检查冷水机组压缩机。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }, { w: "compressor", ipa: "/kəmˈprɛsər/", cn: "压缩机", phonics: "com 读 /kəm/，pressor 读 /prɛsər/" }] },
      { en: "Please check the generator battery.", cn: "请检查发电机电池。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "battery", ipa: "/ˈbætəri/", cn: "电池", phonics: "bat 读 /bæt/，tery 读 /təri/" }] },
    ],
    thinking: "冷却塔风机检查要点：\n① 风机是否运行（运行/停止）\n② 风机转速是否正常（高速/低速/变频）\n③ 风机是否有异常噪音或振动\n④ 风机电流是否在正常范围内",
    pronunciation: "fan 读 /fæn/，不是 /fɑːn/。\ncooling 的 oo 读 /uː/，重音在第一音节。",
    quiz: [
      { q: "请检查冷水机组压缩机，怎么说？", a: "Please check the chiller compressor." },
    ],
  },
  {
    id: 1605,
    en: "The cooling tower fan is operating normally.",
    cn: "冷却塔风机运行正常。",
    ipa: "/ðə ˈkuːlɪŋ ˈtaʊər fæn ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1605句", "冷却塔风机状态", "★★★★★"],
    when: "确认冷却塔风机运行状态正常，包括转速、电流、振动等参数均在正常范围内。",
    words: [
      { w: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", pos: "动词短语", cn: "运行正常", memory: "operating = 运行中；normally = 正常地。\noperating normally = 正常运行，所有参数在正常范围内。\n这是设备状态汇报的标准用语。", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/，normally 读 /ˈnɔːrməli/。", collocations: [["operating normally", "正常运行"], ["running normally", "正常运行"], ["functioning normally", "正常运作"]], examples: [["All systems are operating normally.", "所有系统正常运行。"], ["The equipment is functioning normally.", "设备正常运作。"]] },
    ],
    phrases: [
      { p: "fan is operating normally", ipa: "/fæn ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "风机运行正常", why: "fan + is + operating + normally = 风机运行正常。表明风机转速、电流、振动等参数均在正常范围内。" },
    ],
    grammar: [
      { q: "is operating normally 和 runs normally 有什么区别？", a: "is operating normally = 正在正常运行（现在进行时，强调当前状态）\nruns normally = 正常运行（一般现在时，描述常态）\n✅ The fan is operating normally.（风机正在正常运行 → 汇报当前状态）\n✅ The fan runs normally at 1200 RPM.（风机在1200转时正常运行 → 描述常态）\n交接用进行时，关注'此刻的运行状态'。" },
    ],
    pattern: "设备部件 + is operating normally",
    patternExamples: [
      { en: "The cooling tower motor is operating normally.", cn: "冷却塔电机运行正常。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The chiller compressor is operating normally.", cn: "冷水机组压缩机运行正常。", words: [{ w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }, { w: "compressor", ipa: "/kəmˈprɛsər/", cn: "压缩机", phonics: "com 读 /kəm/，pressor 读 /prɛsər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "The generator is operating normally.", cn: "发电机运行正常。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "风机运行正常的判定标准：\n① 转速在设定值±5%范围内\n② 电流不超过额定值\n③ 振动小于4.5mm/s（ISO 10816标准）\n④ 无异常噪音\n⑤ 轴承温度低于85°C",
    pronunciation: "normally 的 nor 读 /nɔːr/，mally 读 /məli/。\noperating 的重音在 op 上。",
    quiz: [
      { q: "冷水机组压缩机运行正常，怎么说？", a: "The chiller compressor is operating normally." },
    ],
  },
  {
    id: 1606,
    en: "Please check the cooling tower motor.",
    cn: "请检查冷却塔电机。",
    ipa: "/pliːz tʃɛk ðə ˈkuːlɪŋ ˈtaʊər ˈmoʊtər/",
    tags: ["第1606句", "冷却塔电机", "★★★★★"],
    when: "冷却塔电机驱动风机运转，是冷却塔的动力源。交接时检查电机运行状态。",
    words: [
      { w: "motor", ipa: "/ˈmoʊtər/", pos: "名词", cn: "电机；马达", memory: "motor = 电机/马达，将电能转化为机械能的设备。\n冷却塔电机通常是三相异步电机，功率从几千瓦到几十千瓦不等。\nmotor 也可以指汽车发动机，但在工业场合专指电机。", phonics: "mo 读 /moʊ/，tor 读 /tər/，重音在第一音节。", collocations: [["motor current", "电机电流"], ["motor temperature", "电机温度"], ["motor bearings", "电机轴承"]], examples: [["The motor is running.", "电机正在运行。"], ["Check the motor temperature.", "检查电机温度。"]] },
    ],
    phrases: [
      { p: "cooling tower motor", ipa: "/ˈkuːlɪŋ ˈtaʊər ˈmoʊtər/", cn: "冷却塔电机", why: "cooling + tower + motor = 冷却塔电机。电机是风机的动力源，通过传动轴或减速机驱动风机叶片旋转。" },
    ],
    grammar: [
      { q: "motor 和 engine 有什么区别？", a: "motor = 电机/马达（将电能转化为机械能）\nengine = 发动机/引擎（将燃料能转化为机械能）\n✅ cooling tower motor（冷却塔电机 → 电力驱动）\n✅ generator engine（发电机发动机 → 柴油驱动）\n冷却塔用电，所以是 motor；发电机烧油，所以是 engine。" },
    ],
    pattern: "Please check the + 设备 + motor",
    patternExamples: [
      { en: "Please check the chiller motor.", cn: "请检查冷水机组电机。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }] },
      { en: "Please check the pump motor.", cn: "请检查水泵电机。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }] },
      { en: "Please check the AHU motor.", cn: "请检查空调箱电机。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "冷却塔电机检查要点：\n① 电机是否运行（运行/停止）\n② 电机电流是否在额定范围内\n③ 电机温度是否正常（通常低于85°C）\n④ 电机是否有异常噪音或振动\n⑤ 电机绝缘是否良好",
    pronunciation: "motor 的 mo 读 /moʊ/，不是 /mɒ/。\ntor 读 /tər/，不是 /tɔːr/。",
    quiz: [
      { q: "请检查水泵电机，怎么说？", a: "Please check the pump motor." },
    ],
  },
  {
    id: 1607,
    en: "The cooling tower motor is operating normally.",
    cn: "冷却塔电机运行正常。",
    ipa: "/ðə ˈkuːlɪŋ ˈtaʊər ˈmoʊtər ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1607句", "冷却塔电机状态", "★★★★★"],
    when: "确认冷却塔电机运行状态正常，包括电流、温度、振动等参数均在正常范围内。",
    words: [
      { w: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", pos: "动词短语", cn: "运行正常", memory: "operating = 运行中；normally = 正常地。\noperating normally = 正常运行，所有参数在正常范围内。\n这是设备状态汇报的标准用语。", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/，normally 读 /ˈnɔːrməli/。", collocations: [["operating normally", "正常运行"], ["running normally", "正常运行"], ["working normally", "正常工作"]], examples: [["All motors are operating normally.", "所有电机正常运行。"], ["The system is working normally.", "系统正常工作。"]] },
    ],
    phrases: [
      { p: "motor is operating normally", ipa: "/ˈmoʊtər ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "电机运行正常", why: "motor + is + operating + normally = 电机运行正常。表明电机电流、温度、振动等参数均在正常范围内。" },
    ],
    grammar: [
      { q: "is operating normally 和 is normal 有什么区别？", a: "is operating normally = 正在正常运行（强调运行状态）\nis normal = 是正常的（强调参数状态）\n✅ The motor is operating normally.（电机正在正常运行 → 运行状态）\n✅ The motor current is normal.（电机电流正常 → 参数状态）\n交接时两者都常用，前者更全面。" },
    ],
    pattern: "设备 + motor + is operating normally",
    patternExamples: [
      { en: "The chiller motor is operating normally.", cn: "冷水机组电机运行正常。", words: [{ w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The pump motor is operating normally.", cn: "水泵电机运行正常。", words: [{ w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The AHU motor is operating normally.", cn: "空调箱电机运行正常。", words: [{ w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "电机运行正常的判定标准：\n① 电流不超过额定值的110%\n② 温度低于85°C（F级绝缘）\n③ 振动小于4.5mm/s\n④ 无异常噪音\n⑤ 绝缘电阻大于1MΩ",
    pronunciation: "motor 的 mo 读 /moʊ/，重音在第一音节。\nnormally 的 r 在美式英语中发音。",
    quiz: [
      { q: "水泵电机运行正常，怎么说？", a: "The pump motor is operating normally." },
    ],
  },
  {
    id: 1608,
    en: "Please check the cooling water level.",
    cn: "请检查冷却水水位。",
    ipa: "/pliːz tʃɛk ðə ˈkuːlɪŋ ˈwɔːtər ˈlɛvəl/",
    tags: ["第1608句", "冷却水水位", "★★★★★"],
    when: "冷却水水位是冷却塔运行的关键参数，水位过低会导致泵抽空，水位过高会溢出浪费。",
    words: [
      { w: "water level", ipa: "/ˈwɔːtər ˈlɛvəl/", pos: "名词短语", cn: "水位；液位", memory: "water = 水；level = 水位/液位。\nwater level = 水位，指水池或容器中水的高度。\n冷却塔水池水位通常通过浮球阀或液位传感器控制。", phonics: "wa 读 /wɔː/，ter 读 /tər/，level 读 /ˈlɛvəl/。", collocations: [["water level", "水位"], ["water level sensor", "水位传感器"], ["low water level", "低水位"]], examples: [["Check the water level.", "检查水位。"], ["The water level is low.", "水位低。"]] },
    ],
    phrases: [
      { p: "cooling water level", ipa: "/ˈkuːlɪŋ ˈwɔːtər ˈlɛvəl/", cn: "冷却水水位", why: "cooling + water + level = 冷却水水位。冷却塔水池的水位必须保持在正常范围内，确保冷却系统正常运行。" },
    ],
    grammar: [
      { q: "water level 和 liquid level 有什么区别？", a: "water level = 水位（专指水）\nliquid level = 液位（泛指任何液体）\n✅ cooling water level（冷却水水位 → 明确是水）\n✅ fuel liquid level（燃油液位 → 明确是燃油）\n冷却塔用水，所以说 water level。" },
    ],
    pattern: "Please check the + 液体 + level",
    patternExamples: [
      { en: "Please check the fuel level.", cn: "请检查燃油液位。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }] },
      { en: "Please check the oil level.", cn: "请检查机油液位。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }] },
      { en: "Please check the coolant level.", cn: "请检查冷却液液位。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }] },
    ],
    thinking: "冷却水水位检查要点：\n① 水位是否在正常范围内（通常在溢流口下方10-15cm）\n② 水位传感器是否正常工作\n③ 补水阀是否正常补水\n④ 是否有异常漏水",
    pronunciation: "water 的 wa 读 /wɔː/，不是 /wæ/。\nlevel 的 lev 读 /lɛv/，重音在第一音节。",
    quiz: [
      { q: "请检查燃油液位，怎么说？", a: "Please check the fuel level." },
    ],
  },
  {
    id: 1609,
    en: "The cooling water level is normal.",
    cn: "冷却水水位正常。",
    ipa: "/ðə ˈkuːlɪŋ ˈwɔːtər ˈlɛvəl ɪz ˈnɔːrməl/",
    tags: ["第1609句", "冷却水水位状态", "★★★★★"],
    when: "确认冷却水水位在正常范围内，补水系统工作正常。",
    words: [
      { w: "normal", ipa: "/ˈnɔːrməl/", pos: "形容词", cn: "正常的", memory: "normal = 正常的/标准的。\nis normal = 是正常的，在正常范围内。\n这是参数状态汇报的简洁用语。", phonics: "nor 读 /nɔːr/，mal 读 /məl/，重音在第一音节。", collocations: [["normal level", "正常水位"], ["normal range", "正常范围"], ["normal operation", "正常运行"]], examples: [["The level is normal.", "水位正常。"], ["All parameters are normal.", "所有参数正常。"]] },
    ],
    phrases: [
      { p: "water level is normal", ipa: "/ˈwɔːtər ˈlɛvəl ɪz ˈnɔːrməl/", cn: "水位正常", why: "water + level + is + normal = 水位正常。表明冷却塔水池水位在正常范围内，补水系统工作正常。" },
    ],
    grammar: [
      { q: "is normal 和 is within the normal range 有什么区别？", a: "is normal = 正常（简洁表达）\nis within the normal range = 在正常范围内（更精确）\n✅ The water level is normal.（水位正常 → 简洁）\n✅ The water level is within the normal range.（水位在正常范围内 → 精确）\n交接时两者都常用，前者更简洁。" },
    ],
    pattern: "参数 + is normal",
    patternExamples: [
      { en: "The fuel level is normal.", cn: "燃油液位正常。", words: [{ w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The oil level is normal.", cn: "机油液位正常。", words: [{ w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The coolant level is normal.", cn: "冷却液液位正常。", words: [{ w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "水位正常的含义：\n① 水位在设定范围内（通常±5cm）\n② 补水阀工作正常\n③ 无异常漏水\n④ 排水阀关闭正常",
    pronunciation: "normal 的 nor 读 /nɔːr/，不是 /nɒ/。\nmal 读 /məl/，不是 /mæl/。",
    quiz: [
      { q: "燃油液位正常，怎么说？", a: "The fuel level is normal." },
    ],
  },
  {
    id: 1610,
    en: "Please check the make-up water valve.",
    cn: "请检查补水阀。",
    ipa: "/pliːz tʃɛk ðə ˈmeɪkʌp ˈwɔːtər vælv/",
    tags: ["第1610句", "补水阀", "★★★★★"],
    when: "补水阀用于补充冷却塔蒸发损失的水量，保持水池水位稳定。交接时检查补水阀状态。",
    words: [
      { w: "make-up water", ipa: "/ˈmeɪkʌp ˈwɔːtər/", pos: "名词短语", cn: "补水", memory: "make-up = 补充/弥补；water = 水。\nmake-up water = 补水，用于补充系统中损失的水量。\n冷却塔因蒸发、飘水、排污会损失水量，需要持续补水。", phonics: "make 读 /meɪk/，up 读 /ʌp/，water 读 /ˈwɔːtər/。", collocations: [["make-up water", "补水"], ["make-up water valve", "补水阀"], ["make-up water pump", "补水泵"]], examples: [["Check the make-up water.", "检查补水。"], ["The make-up water valve is open.", "补水阀打开。"]] },
      { w: "valve", ipa: "/vælv/", pos: "名词", cn: "阀门", memory: "valve = 阀门，控制流体通断或流量的装置。\n常见阀门类型：gate valve（闸阀）、ball valve（球阀）、butterfly valve（蝶阀）、check valve（止回阀）。", phonics: "valve 读 /vælv/，单音节词，v 发音。", collocations: [["valve position", "阀门位置"], ["valve status", "阀门状态"], ["valve open/close", "阀门开/关"]], examples: [["Open the valve.", "打开阀门。"], ["The valve is closed.", "阀门关闭。"]] },
    ],
    phrases: [
      { p: "make-up water valve", ipa: "/ˈmeɪkʌp ˈwɔːtər vælv/", cn: "补水阀", why: "make-up + water + valve = 补水阀。补水阀用于控制补水量，保持冷却塔水池水位稳定。" },
    ],
    grammar: [
      { q: "make-up water 和 supply water 有什么区别？", a: "make-up water = 补水（补充损失的水）\nsupply water = 供水（提供给系统的水）\n✅ make-up water valve（补水阀 → 补充蒸发损失）\n✅ supply water pump（供水泵 → 提供冷却水）\n冷却塔用 make-up water，因为水是因蒸发损失的。" },
    ],
    pattern: "Please check the + 功能 + valve",
    patternExamples: [
      { en: "Please check the drain valve.", cn: "请检查排水阀。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "valve", ipa: "/vælv/", cn: "阀门", phonics: "valve 读 /vælv/" }] },
      { en: "Please check the isolation valve.", cn: "请检查隔离阀。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "valve", ipa: "/vælv/", cn: "阀门", phonics: "valve 读 /vælv/" }] },
      { en: "Please check the bypass valve.", cn: "请检查旁通阀。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "valve", ipa: "/vælv/", cn: "阀门", phonics: "valve 读 /vælv/" }] },
    ],
    thinking: "补水阀检查要点：\n① 阀门是否正常工作（自动/手动）\n② 阀门开度是否合适\n③ 是否有漏水\n④ 阀门执行器是否正常\n⑤ 补水流量是否正常",
    pronunciation: "make-up 的 make 读 /meɪk/，up 读 /ʌp/。\nvalve 读 /vælv/，v 要发音，不是 /wælv/。",
    quiz: [
      { q: "请检查排水阀，怎么说？", a: "Please check the drain valve." },
    ],
  },

  // ── 场景001：冷却塔 - 补水系统 (1611-1620) ──
  {
    id: 1611,
    en: "The make-up water valve is operating normally.",
    cn: "补水阀运行正常。",
    ipa: "/ðə ˈmeɪkʌp ˈwɔːtər vælv ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1611句", "补水阀状态", "★★★★★"],
    when: "确认补水阀运行状态正常，能够根据水位自动控制补水量。",
    words: [
      { w: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", pos: "动词短语", cn: "运行正常", memory: "operating = 运行中；normally = 正常地。\noperating normally = 正常运行，功能正常。\n这是设备状态汇报的标准用语。", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/，normally 读 /ˈnɔːrməli/。", collocations: [["operating normally", "正常运行"], ["functioning normally", "正常运作"], ["working normally", "正常工作"]], examples: [["The valve is operating normally.", "阀门运行正常。"], ["All systems are working normally.", "所有系统正常工作。"]] },
    ],
    phrases: [
      { p: "make-up water valve is operating normally", ipa: "/ˈmeɪkʌp ˈwɔːtər vælv ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "补水阀运行正常", why: "make-up + water + valve + is + operating + normally = 补水阀运行正常。表明补水阀能够根据水位自动控制补水量。" },
    ],
    grammar: [
      { q: "is operating normally 和 works normally 有什么区别？", a: "is operating normally = 正在正常运行（现在进行时，强调当前状态）\nworks normally = 正常工作（一般现在时，描述常态）\n✅ The valve is operating normally.（阀门正在正常运行 → 汇报当前状态）\n✅ The valve works normally.（阀门正常工作 → 描述常态）\n交接用进行时，关注'此刻的运行状态'。" },
    ],
    pattern: "设备 + is operating normally",
    patternExamples: [
      { en: "The make-up water pump is operating normally.", cn: "补水泵运行正常。", words: [{ w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "The drain valve is operating normally.", cn: "排水阀运行正常。", words: [{ w: "valve", ipa: "/vælv/", cn: "阀门", phonics: "valve 读 /vælv/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The water treatment system is operating normally.", cn: "水处理系统运行正常。", words: [{ w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
    ],
    thinking: "补水阀运行正常的判定标准：\n① 阀门能够根据水位自动开闭\n② 补水流量正常\n③ 无漏水\n④ 阀门执行器工作正常\n⑤ 水位保持在设定范围内",
    pronunciation: "make-up 的 make 读 /meɪk/，up 读 /ʌp/。\nvalve 读 /vælv/，v 要发音。",
    quiz: [
      { q: "补水泵运行正常，怎么说？", a: "The make-up water pump is operating normally." },
    ],
  },
  {
    id: 1612,
    en: "Please check the make-up water pump.",
    cn: "请检查补水泵。",
    ipa: "/pliːz tʃɛk ðə ˈmeɪkʌp ˈwɔːtər pʌmp/",
    tags: ["第1612句", "补水泵", "★★★★★"],
    when: "补水泵用于将补水泵入冷却塔水池，是补水系统的动力设备。交接时检查补水泵状态。",
    words: [
      { w: "pump", ipa: "/pʌmp/", pos: "名词", cn: "泵；水泵", memory: "pump = 泵/水泵，用于输送液体的设备。\n常见泵类型：centrifugal pump（离心泵）、submersible pump（潜水泵）、booster pump（增压泵）。\nmake-up water pump = 补水泵，专门用于补水的泵。", phonics: "pump 读 /pʌmp/，单音节词，p 发音清晰。", collocations: [["water pump", "水泵"], ["pump pressure", "泵压力"], ["pump flow", "泵流量"]], examples: [["The pump is running.", "泵正在运行。"], ["Check the pump pressure.", "检查泵压力。"]] },
    ],
    phrases: [
      { p: "make-up water pump", ipa: "/ˈmeɪkʌp ˈwɔːtər pʌmp/", cn: "补水泵", why: "make-up + water + pump = 补水泵。补水泵将补水泵入冷却塔水池，保持水位稳定。" },
    ],
    grammar: [
      { q: "pump 和 compressor 有什么区别？", a: "pump = 泵（输送液体）\ncompressor = 压缩机（压缩气体）\n✅ water pump（水泵 → 输送水）\n✅ air compressor（空气压缩机 → 压缩空气）\n补水是液体，所以用 pump。" },
    ],
    pattern: "Please check the + 功能 + pump",
    patternExamples: [
      { en: "Please check the cooling water pump.", cn: "请检查冷却水泵。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }] },
      { en: "Please check the chilled water pump.", cn: "请检查冷冻水泵。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }] },
      { en: "Please check the condenser water pump.", cn: "请检查冷凝水泵。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }] },
    ],
    thinking: "补水泵检查要点：\n① 泵是否运行（运行/停止）\n② 泵压力是否正常\n③ 泵流量是否正常\n④ 泵是否有异常噪音或振动\n⑤ 泵密封是否良好（无漏水）",
    pronunciation: "pump 读 /pʌmp/，不是 /pɑːmp/。\nmake-up 的 make 读 /meɪk/。",
    quiz: [
      { q: "请检查冷冻水泵，怎么说？", a: "Please check the chilled water pump." },
    ],
  },
  {
    id: 1613,
    en: "The make-up water pump is operating normally.",
    cn: "补水泵运行正常。",
    ipa: "/ðə ˈmeɪkʌp ˈwɔːtər pʌmp ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1613句", "补水泵状态", "★★★★★"],
    when: "确认补水泵运行状态正常，压力、流量、振动等参数均在正常范围内。",
    words: [
      { w: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", pos: "动词短语", cn: "运行正常", memory: "operating = 运行中；normally = 正常地。\noperating normally = 正常运行，所有参数在正常范围内。\n这是设备状态汇报的标准用语。", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/，normally 读 /ˈnɔːrməli/。", collocations: [["operating normally", "正常运行"], ["running normally", "正常运行"], ["functioning normally", "正常运作"]], examples: [["The pump is operating normally.", "泵运行正常。"], ["All pumps are running normally.", "所有泵正常运行。"]] },
    ],
    phrases: [
      { p: "make-up water pump is operating normally", ipa: "/ˈmeɪkʌp ˈwɔːtər pʌmp ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "补水泵运行正常", why: "make-up + water + pump + is + operating + normally = 补水泵运行正常。表明补水泵压力、流量、振动等参数均在正常范围内。" },
    ],
    grammar: [
      { q: "is operating normally 和 is running well 有什么区别？", a: "is operating normally = 正在正常运行（专业用语）\nis running well = 运行良好（口语化）\n✅ The pump is operating normally.（泵正在正常运行 → 专业）\n✅ The pump is running well.（泵运行良好 → 口语）\n交接时用专业用语 operating normally。" },
    ],
    pattern: "设备 + pump + is operating normally",
    patternExamples: [
      { en: "The cooling water pump is operating normally.", cn: "冷却水泵运行正常。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }] },
      { en: "The chilled water pump is operating normally.", cn: "冷冻水泵运行正常。", words: [{ w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "The condenser water pump is operating normally.", cn: "冷凝水泵运行正常。", words: [{ w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
    ],
    thinking: "补水泵运行正常的判定标准：\n① 压力在设定值±10%范围内\n② 流量正常\n③ 振动小于4.5mm/s\n④ 无异常噪音\n⑤ 密封良好，无漏水\n⑥ 电机电流正常",
    pronunciation: "pump 读 /pʌmp/，重音在词首。\nnormally 的 r 在美式英语中发音。",
    quiz: [
      { q: "冷却水泵运行正常，怎么说？", a: "The cooling water pump is operating normally." },
    ],
  },
  {
    id: 1614,
    en: "Please check the conductivity of the cooling water.",
    cn: "请检查冷却水导电率。",
    ipa: "/pliːz tʃɛk ðə ˌkɒndʌkˈtɪvɪti əv ðə ˈkuːlɪŋ ˈwɔːtər/",
    tags: ["第1614句", "冷却水导电率", "★★★★★"],
    when: "导电率是衡量冷却水水质的重要指标，反映水中溶解盐类的含量。导电率过高会导致腐蚀和结垢。",
    words: [
      { w: "conductivity", ipa: "/ˌkɒndʌkˈtɪvɪti/", pos: "名词", cn: "导电率；电导率", memory: "conduct = 传导；-ivity = 名词后缀。\nconductivity = 导电率/电导率，衡量水导电能力的指标。\n导电率越高，水中溶解的盐类越多，容易导致腐蚀和结垢。\n单位：μS/cm（微西门子/厘米）。", phonics: "con 读 /kɒn/，duc 读 /dʌk/，tiv 读 /tɪv/，i 读 /ɪ/，ty 读 /ti/，重音在第三音节。", collocations: [["water conductivity", "水导电率"], ["conductivity meter", "导电率仪"], ["high conductivity", "高导电率"]], examples: [["Check the conductivity.", "检查导电率。"], ["The conductivity is high.", "导电率高。"]] },
    ],
    phrases: [
      { p: "conductivity of the cooling water", ipa: "/ˌkɒndʌkˈtɪvɪti əv ðə ˈkuːlɪŋ ˈwɔːtər/", cn: "冷却水导电率", why: "conductivity + of + the + cooling + water = 冷却水导电率。导电率是水质管理的关键指标，需要定期监测和控制。" },
    ],
    grammar: [
      { q: "conductivity 和 conductivity level 有什么区别？", a: "conductivity = 导电率（参数名称）\nconductivity level = 导电率水平（具体数值）\n✅ Check the conductivity.（检查导电率 → 检查参数）\n✅ The conductivity level is 500 μS/cm.（导电率水平是500微西门子 → 报告数值）\n交接时通常说 conductivity。" },
    ],
    pattern: "Please check the + 参数 + of the + 介质",
    patternExamples: [
      { en: "Please check the pH of the cooling water.", cn: "请检查冷却水pH值。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }] },
      { en: "Please check the temperature of the chilled water.", cn: "请检查冷冻水温度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }] },
      { en: "Please check the pressure of the condenser water.", cn: "请检查冷凝水压力。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }] },
    ],
    thinking: "冷却水导电率管理：\n① 正常范围：通常500-2000 μS/cm\n② 导电率过高：需要排污（blowdown）\n③ 导电率过低：补水过多，浪费水资源\n④ 通过排污和补水控制导电率在合理范围内",
    pronunciation: "conductivity 的 con 读 /kɒn/，duc 读 /dʌk/，重音在 tiv 上。\n冷却水读 cooling water，oo 读 /uː/。",
    quiz: [
      { q: "请检查冷却水pH值，怎么说？", a: "Please check the pH of the cooling water." },
    ],
  },
  {
    id: 1615,
    en: "The conductivity is within the acceptable range.",
    cn: "导电率在允许范围内。",
    ipa: "/ðə ˌkɒndʌkˈtɪvɪti ɪz wɪˈðɪn ðə əkˈsɛptəbl̩ ˈreɪndʒ/",
    tags: ["第1615句", "导电率状态", "★★★★★"],
    when: "确认冷却水导电率在允许范围内，水质管理正常。",
    words: [
      { w: "acceptable range", ipa: "/əkˈsɛptəbl̩ ˈreɪndʒ/", pos: "名词短语", cn: "允许范围；可接受范围", memory: "acceptable = 可接受的；range = 范围。\nacceptable range = 允许范围/可接受范围。\nwithin the acceptable range = 在允许范围内。\n这是参数状态汇报的标准用语。", phonics: "ac 读 /ək/，cep 读 /sɛp/，ta 读 /tə/，ble 读 /bl̩/，range 读 /reɪndʒ/。", collocations: [["acceptable range", "允许范围"], ["within range", "在范围内"], ["out of range", "超出范围"]], examples: [["The value is within the acceptable range.", "数值在允许范围内。"], ["The pressure is out of range.", "压力超出范围。"]] },
    ],
    phrases: [
      { p: "within the acceptable range", ipa: "/wɪˈðɪn ðə əkˈsɛptəbl̩ ˈreɪndʒ/", cn: "在允许范围内", why: "within + the + acceptable + range = 在允许范围内。表明参数值在设定的上下限之间，状态正常。" },
    ],
    grammar: [
      { q: "within the acceptable range 和 normal 有什么区别？", a: "within the acceptable range = 在允许范围内（精确描述）\nnormal = 正常（简洁描述）\n✅ The conductivity is within the acceptable range.（导电率在允许范围内 → 精确）\n✅ The conductivity is normal.（导电率正常 → 简洁）\n两者都正确，前者更专业。" },
    ],
    pattern: "参数 + is within the acceptable range",
    patternExamples: [
      { en: "The pH is within the acceptable range.", cn: "pH值在允许范围内。", words: [{ w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }, { w: "range", ipa: "/reɪndʒ/", cn: "范围", phonics: "range 读 /reɪndʒ/" }] },
      { en: "The temperature is within the acceptable range.", cn: "温度在允许范围内。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }, { w: "range", ipa: "/reɪndʒ/", cn: "范围", phonics: "range 读 /reɪndʒ/" }] },
      { en: "The pressure is within the acceptable range.", cn: "压力在允许范围内。", words: [{ w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }, { w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }, { w: "range", ipa: "/reɪndʒ/", cn: "范围", phonics: "range 读 /reɪndʒ/" }] },
    ],
    thinking: "导电率允许范围：\n① 冷却塔：500-2000 μS/cm\n② 冷冻水：1000-3000 μS/cm\n③ 冷凝水：500-2000 μS/cm\n超出范围需要排污或调整水处理药剂。",
    pronunciation: "acceptable 的 ac 读 /ək/，cep 读 /sɛp/，重音在第二音节。\nrange 读 /reɪndʒ/，不是 /rɑːndʒ/。",
    quiz: [
      { q: "pH值在允许范围内，怎么说？", a: "The pH is within the acceptable range." },
    ],
  },
  {
    id: 1616,
    en: "Please check the water quality.",
    cn: "请检查水质。",
    ipa: "/pliːz tʃɛk ðə ˈwɔːtər ˈkwɒlɪti/",
    tags: ["第1616句", "水质", "★★★★★"],
    when: "水质是冷却系统管理的重要指标，包括导电率、pH值、硬度、细菌含量等多项参数。",
    words: [
      { w: "water quality", ipa: "/ˈwɔːtər ˈkwɒlɪti/", pos: "名词短语", cn: "水质", memory: "water = 水；quality = 质量/品质。\nwater quality = 水质，指水的物理化学特性。\n水质参数包括：导电率、pH值、硬度、浊度、细菌含量等。", phonics: "wa 读 /wɔː/，ter 读 /tər/，qual 读 /kwɒl/，i 读 /ɪ/，ty 读 /ti/。", collocations: [["water quality", "水质"], ["water quality test", "水质测试"], ["water quality report", "水质报告"]], examples: [["Check the water quality.", "检查水质。"], ["The water quality is good.", "水质良好。"]] },
    ],
    phrases: [
      { p: "water quality", ipa: "/ˈwɔːtər ˈkwɒlɪti/", cn: "水质", why: "water + quality = 水质。水质管理是冷却系统维护的重要内容，直接影响设备寿命和运行效率。" },
    ],
    grammar: [
      { q: "water quality 和 water condition 有什么区别？", a: "water quality = 水质（水的化学特性）\nwater condition = 水况（水的整体状态）\n✅ Check the water quality.（检查水质 → 化学参数）\n✅ Check the water condition.（检查水况 → 整体状态，包括颜色、气味等）\n交接时通常说 water quality。" },
    ],
    pattern: "Please check the + 介质 + quality",
    patternExamples: [
      { en: "Please check the oil quality.", cn: "请检查油质。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the air quality.", cn: "请检查空气质量。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the fuel quality.", cn: "请检查燃油质量。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "水质检查项目：\n① 导电率（conductivity）\n② pH值\n③ 硬度（hardness）\n④ 浊度（turbidity）\n⑤ 细菌含量（bacteria count）\n⑥ 缓蚀剂浓度（inhibitor concentration）",
    pronunciation: "quality 的 qual 读 /kwɒl/，不是 /kwɑːl/。\nwater 的 wa 读 /wɔː/。",
    quiz: [
      { q: "请检查油质，怎么说？", a: "Please check the oil quality." },
    ],
  },
  {
    id: 1617,
    en: "The water quality is normal.",
    cn: "水质正常。",
    ipa: "/ðə ˈwɔːtər ˈkwɒlɪti ɪz ˈnɔːrməl/",
    tags: ["第1617句", "水质状态", "★★★★★"],
    when: "确认水质各项参数在正常范围内，水处理系统工作正常。",
    words: [
      { w: "normal", ipa: "/ˈnɔːrməl/", pos: "形容词", cn: "正常的", memory: "normal = 正常的/标准的。\nis normal = 是正常的，在正常范围内。\n这是参数状态汇报的简洁用语。", phonics: "nor 读 /nɔːr/，mal 读 /məl/，重音在第一音节。", collocations: [["normal quality", "正常质量"], ["normal range", "正常范围"], ["normal operation", "正常运行"]], examples: [["The quality is normal.", "质量正常。"], ["All parameters are normal.", "所有参数正常。"]] },
    ],
    phrases: [
      { p: "water quality is normal", ipa: "/ˈwɔːtər ˈkwɒlɪti ɪz ˈnɔːrməl/", cn: "水质正常", why: "water + quality + is + normal = 水质正常。表明水质各项参数（导电率、pH值、硬度等）均在正常范围内。" },
    ],
    grammar: [
      { q: "is normal 和 meets the standards 有什么区别？", a: "is normal = 正常（简洁表达）\nmeets the standards = 符合标准（更正式）\n✅ The water quality is normal.（水质正常 → 简洁）\n✅ The water quality meets the standards.（水质符合标准 → 正式）\n交接时两者都常用，前者更简洁。" },
    ],
    pattern: "介质 + quality + is normal",
    patternExamples: [
      { en: "The oil quality is normal.", cn: "油质正常。", words: [{ w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The air quality is normal.", cn: "空气质量正常。", words: [{ w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The fuel quality is normal.", cn: "燃油质量正常。", words: [{ w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "水质正常的含义：\n① 导电率在允许范围内\n② pH值在6.5-8.5之间\n③ 硬度在允许范围内\n④ 浊度低于5 NTU\n⑤ 细菌含量低于标准限值\n⑥ 缓蚀剂浓度正常",
    pronunciation: "quality 的 qual 读 /kwɒl/，重音在第一音节。\nnormal 的 nor 读 /nɔːr/。",
    quiz: [
      { q: "油质正常，怎么说？", a: "The oil quality is normal." },
    ],
  },
  {
    id: 1618,
    en: "Please check the blowdown valve.",
    cn: "请检查排污阀。",
    ipa: "/pliːz tʃɛk ðə ˈbloʊdaʊn vælv/",
    tags: ["第1618句", "排污阀", "★★★★★"],
    when: "排污阀用于排放高浓度水，控制冷却水导电率。交接时检查排污阀状态。",
    words: [
      { w: "blowdown", ipa: "/ˈbloʊdaʊn/", pos: "名词", cn: "排污", memory: "blow = 吹；down = 下。\nblowdown = 排污，指排放部分冷却水以降低水中盐类浓度。\n排污是控制导电率的主要方法。", phonics: "blow 读 /bloʊ/，down 读 /daʊn/，重音在第一音节。", collocations: [["blowdown valve", "排污阀"], ["blowdown rate", "排污率"], ["automatic blowdown", "自动排污"]], examples: [["Open the blowdown valve.", "打开排污阀。"], ["Check the blowdown rate.", "检查排污率。"]] },
    ],
    phrases: [
      { p: "blowdown valve", ipa: "/ˈbloʊdaʊn vælv/", cn: "排污阀", why: "blowdown + valve = 排污阀。排污阀用于排放高浓度水，控制冷却水导电率在允许范围内。" },
    ],
    grammar: [
      { q: "blowdown 和 drain 有什么区别？", a: "blowdown = 排污（有控制地排放部分水）\ndrain = 排水（完全排空）\n✅ blowdown valve（排污阀 → 控制导电率）\n✅ drain valve（排水阀 → 排空水池）\n排污是为了控制水质，排水是为了维护。" },
    ],
    pattern: "Please check the + 功能 + valve",
    patternExamples: [
      { en: "Please check the drain valve.", cn: "请检查排水阀。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "valve", ipa: "/vælv/", cn: "阀门", phonics: "valve 读 /vælv/" }] },
      { en: "Please check the bypass valve.", cn: "请检查旁通阀。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "valve", ipa: "/vælv/", cn: "阀门", phonics: "valve 读 /vælv/" }] },
      { en: "Please check the isolation valve.", cn: "请检查隔离阀。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "valve", ipa: "/vælv/", cn: "阀门", phonics: "valve 读 /vælv/" }] },
    ],
    thinking: "排污阀检查要点：\n① 阀门是否正常工作（自动/手动）\n② 排污率是否合适（通常5-10%）\n③ 是否有漏水\n④ 阀门执行器是否正常\n⑤ 排污时间间隔是否正常",
    pronunciation: "blowdown 的 blow 读 /bloʊ/，down 读 /daʊn/。\nvalve 读 /vælv/，v 要发音。",
    quiz: [
      { q: "请检查排水阀，怎么说？", a: "Please check the drain valve." },
    ],
  },
  {
    id: 1619,
    en: "The blowdown valve is operating normally.",
    cn: "排污阀运行正常。",
    ipa: "/ðə ˈbloʊdaʊn vælv ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1619句", "排污阀状态", "★★★★★"],
    when: "确认排污阀运行状态正常，能够根据导电率自动控制排污量。",
    words: [
      { w: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", pos: "动词短语", cn: "运行正常", memory: "operating = 运行中；normally = 正常地。\noperating normally = 正常运行，功能正常。\n这是设备状态汇报的标准用语。", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/，normally 读 /ˈnɔːrməli/。", collocations: [["operating normally", "正常运行"], ["functioning normally", "正常运作"], ["working normally", "正常工作"]], examples: [["The valve is operating normally.", "阀门运行正常。"], ["All systems are working normally.", "所有系统正常工作。"]] },
    ],
    phrases: [
      { p: "blowdown valve is operating normally", ipa: "/ˈbloʊdaʊn vælv ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "排污阀运行正常", why: "blowdown + valve + is + operating + normally = 排污阀运行正常。表明排污阀能够根据导电率自动控制排污量。" },
    ],
    grammar: [
      { q: "is operating normally 和 is working properly 有什么区别？", a: "is operating normally = 正在正常运行（专业用语）\nis working properly = 正常工作（通用用语）\n✅ The valve is operating normally.（阀门正在正常运行 → 专业）\n✅ The valve is working properly.（阀门正常工作 → 通用）\n交接时用专业用语 operating normally。" },
    ],
    pattern: "设备 + valve + is operating normally",
    patternExamples: [
      { en: "The drain valve is operating normally.", cn: "排水阀运行正常。", words: [{ w: "valve", ipa: "/vælv/", cn: "阀门", phonics: "valve 读 /vælv/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The bypass valve is operating normally.", cn: "旁通阀运行正常。", words: [{ w: "valve", ipa: "/vælv/", cn: "阀门", phonics: "valve 读 /vælv/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The isolation valve is operating normally.", cn: "隔离阀运行正常。", words: [{ w: "valve", ipa: "/vælv/", cn: "阀门", phonics: "valve 读 /vælv/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "排污阀运行正常的判定标准：\n① 阀门能够根据导电率自动开闭\n② 排污率正常（5-10%）\n③ 无漏水\n④ 阀门执行器工作正常\n⑤ 导电率保持在设定范围内",
    pronunciation: "blowdown 的 blow 读 /bloʊ/，down 读 /daʊn/。\nvalve 读 /vælv/，v 要发音。",
    quiz: [
      { q: "排水阀运行正常，怎么说？", a: "The drain valve is operating normally." },
    ],
  },
  {
    id: 1620,
    en: "Please inspect the drift eliminators.",
    cn: "请检查挡水板。",
    ipa: "/pliːz ɪnˈspɛkt ðə drɪft ˈɛlɪmɪneɪtərz/",
    tags: ["第1620句", "挡水板", "★★★★★"],
    when: "挡水板（drift eliminators）用于减少冷却塔飘水损失，防止水滴随空气排出。交接时检查挡水板状态。",
    words: [
      { w: "drift eliminators", ipa: "/drɪft ˈɛlɪmɪneɪtərz/", pos: "名词短语", cn: "挡水板；除水器", memory: "drift = 飘移；eliminators = 消除器。\ndrift eliminators = 挡水板/除水器，用于减少冷却塔飘水损失。\n挡水板通常是塑料或金属制成的波纹板，安装在冷却塔顶部。", phonics: "drift 读 /drɪft/，e 读 /ɪ/，lim 读 /lɪm/，i 读 /ɪ/，na 读 /neɪ/，tors 读 /tərz/。", collocations: [["drift eliminators", "挡水板"], ["drift loss", "飘水损失"], ["drift rate", "飘水率"]], examples: [["Check the drift eliminators.", "检查挡水板。"], ["Replace the drift eliminators.", "更换挡水板。"]] },
    ],
    phrases: [
      { p: "drift eliminators", ipa: "/drɪft ˈɛlɪmɪneɪtərz/", cn: "挡水板", why: "drift + eliminators = 挡水板。挡水板用于减少冷却塔飘水损失，防止水滴随空气排出造成水资源浪费和环境污染。" },
    ],
    grammar: [
      { q: "inspect 和 check 有什么区别？", a: "inspect = 检验/检查（详细的物理检查）\ncheck = 检查/查看（快速确认状态）\n✅ Please inspect the drift eliminators.（请检查挡水板 → 现场详细检查）\n✅ Please check the drift eliminators.（请检查挡水板 → 快速确认）\n挡水板需要现场检查，所以用 inspect。" },
    ],
    pattern: "Please inspect the + 设备部件",
    patternExamples: [
      { en: "Please inspect the fan blades.", cn: "请检查风机叶片。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }] },
      { en: "Please inspect the fill media.", cn: "请检查填料。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }] },
      { en: "Please inspect the water distribution nozzles.", cn: "请检查布水喷嘴。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }] },
    ],
    thinking: "挡水板检查要点：\n① 挡水板是否完整（无缺失）\n② 挡水板是否损坏（无破裂）\n③ 挡水板是否堵塞（无杂物）\n④ 挡水板安装是否牢固\n⑤ 飘水损失是否在正常范围内（<0.1%）",
    pronunciation: "drift 读 /drɪft/，不是 /drɑːft/。\neliminators 的 e 读 /ɪ/，重音在 lim 上。",
    quiz: [
      { q: "请检查风机叶片，怎么说？", a: "Please inspect the fan blades." },
    ],
  },
];

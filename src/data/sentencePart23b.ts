// EXPORTS: MOCK_SENTENCES_PART23B

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART23B: ISentence[] = [
  {
    id: 1581,
    en: "Please check the humidifier.",
    cn: "请检查加湿器。",
    ipa: "/pliːz tʃɛk ðə ˈhjuːmɪdɪfaɪər/",
    tags: ["第1581句", "加湿除湿", "★★★★★"],
    when: "加湿器用于在机房湿度偏低时增加空气中的水分含量，维持设备正常运行环境。交接时需确认加湿器工作状态。",
    words: [
      { w: "humidifier", ipa: "/hjuːˈmɪdɪfaɪər/", pos: "名词", cn: "加湿器", memory: "humid = 潮湿的；-ifier = 使……的设备。\nhumidifier = 加湿器，向空气中添加水分的设备。\n数据中心湿度通常控制在40%-60%RH。", phonics: "hu 读 /hjuː/，mid 读 /mɪd/，ifier 读 /ɪfaɪər/，重音在第二音节。", collocations: [["check the humidifier", "检查加湿器"], ["humidifier status", "加湿器状态"], ["humidifier alarm", "加湿器告警"]], examples: [["The humidifier is running.", "加湿器正在运行。"], ["Please check the humidifier output.", "请检查加湿器输出。"]] },
    ],
    phrases: [
      { p: "check the humidifier", ipa: "/tʃɛk ðə hjuːˈmɪdɪfaɪər/", cn: "检查加湿器", why: "check + the + humidifier = 检查加湿器。确认加湿器是否正常工作，确保机房湿度在允许范围内。" },
    ],
    grammar: [
      { q: "humidifier 和 humidistat 有什么区别？", a: "humidifier = 加湿器（实际执行加湿的设备）\nhumidistat = 湿度控制器（监测和控制湿度的传感器/控制器）\n✅ Please check the humidifier.（请检查加湿器 → 检查设备本身）\n✅ Please check the humidistat reading.（请检查湿度控制器读数 → 检查控制参数）\n两者通常配套使用。" },
    ],
    pattern: "Please check the + HVAC设备",
    patternExamples: [
      { en: "Please check the dehumidifier.", cn: "请检查除湿器。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the compressor.", cn: "请检查压缩机。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "compressor", ipa: "/kəmˈprɛsər/", cn: "压缩机", phonics: "com 读 /kəm/，pressor 读 /prɛsər/" }] },
      { en: "Please check the air filter.", cn: "请检查空气过滤器。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "filter", ipa: "/ˈfɪltər/", cn: "过滤器", phonics: "fil 读 /fɪl/，ter 读 /tər/" }] },
    ],
    thinking: "加湿器是精密空调的重要组成部分：\n① 冬季或干燥地区，机房湿度可能低于40%RH → 静电风险增加\n② 加湿器通过蒸发或蒸汽方式向送风中添加水分\n③ 交接时检查：运行状态 + 水箱水位 + 加湿输出量\n④ 如果加湿器故障，需切换到备用CRAC或启动独立加湿设备。",
    pronunciation: "humidifier 的 h 发音 /h/，不是静音。\nifier 读 /ɪfaɪər/，注意 /aɪ/ 双元音。",
    quiz: [
      { q: "数据中心湿度过低有什么风险？", a: "湿度过低（<40%RH）会导致：① 静电积累增加，可能损坏服务器电子元件 ② 灰尘更容易悬浮 ③ 人体静电放电风险。因此需要加湿器维持湿度在40%-60%RH。" },
    ],
  },
  {
    id: 1582,
    en: "The humidifier is operating normally.",
    cn: "加湿器运行正常。",
    ipa: "/ðə hjuːˈmɪdɪfaɪər ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1582句", "加湿器状态", "★★★★★"],
    when: "确认加湿器工作状态正常，加湿输出稳定，无告警。",
    words: [
      { w: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", pos: "动词短语", cn: "运行正常", memory: "operating = 运行中；normally = 正常地。\noperating normally = 正常运行，设备在额定参数范围内工作。\n这是汇报设备状态的标准用语。", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/，normally 读 /ˈnɔːrməli/。", collocations: [["is operating normally", "运行正常"], ["all units operating normally", "所有设备运行正常"], ["system operating normally", "系统运行正常"]], examples: [["The compressor is operating normally.", "压缩机运行正常。"], ["All fans are operating normally.", "所有风机运行正常。"]] },
    ],
    phrases: [
      { p: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "运行正常", why: "operating + normally = 正常运行。表示设备当前工作状态良好，各项参数在正常范围内。" },
    ],
    grammar: [
      { q: "is operating 和 operates 有什么区别？", a: "is operating = 正在运行（现在进行时，强调当前状态）\noperates = 运行（一般现在时，描述常态/功能）\n✅ The humidifier is operating normally.（加湿器正在正常运行 → 汇报当前状态）\n✅ The humidifier operates when humidity drops below 40%.（湿度低于40%时加湿器运行 → 描述功能逻辑）\n交接用进行时，关注'此刻'的运行状态。" },
    ],
    pattern: "The + 设备 + is operating normally",
    patternExamples: [
      { en: "The dehumidifier is operating normally.", cn: "除湿器运行正常。", words: [{ w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The fan motor is operating normally.", cn: "风机电机运行正常。", words: [{ w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The compressor is operating normally.", cn: "压缩机运行正常。", words: [{ w: "compressor", ipa: "/kəmˈprɛsər/", cn: "压缩机", phonics: "com 读 /kəm/，pressor 读 /prɛsər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "汇报加湿器状态的三种结论：\n① The humidifier is operating normally（正常 → 最佳）\n② The humidifier has a low water alarm（低水位告警 → 需补水）\n③ The humidifier is offline（离线 → 需检查原因，可能影响机房湿度）",
    pronunciation: "humidifier 读 /hjuːˈmɪdɪfaɪər/，重音在 mid 上。\nnormally 的 r 在美式英语中发音。",
    quiz: [
      { q: "除湿器运行正常，怎么说？", a: "The dehumidifier is operating normally." },
    ],
  },
  {
    id: 1583,
    en: "Please check the dehumidifier.",
    cn: "请检查除湿器。",
    ipa: "/pliːz tʃɛk ðə diːˈhjuːmɪdɪfaɪər/",
    tags: ["第1583句", "加湿除湿", "★★★★★"],
    when: "除湿器用于在机房湿度偏高时去除空气中的多余水分。马来西亚气候潮湿，除湿器尤为重要。",
    words: [
      { w: "dehumidifier", ipa: "/diːhjuːˈmɪdɪfaɪər/", pos: "名词", cn: "除湿器", memory: "de- = 去除（前缀）；humidifier = 加湿器。\ndehumidifier = 除湿器，去除空气中多余水分的设备。\n在热带地区（如马来西亚），除湿器使用频率高于加湿器。", phonics: "de 读 /diː/，hu 读 /hjuː/，midifier 读 /mɪdɪfaɪər/，重音在 mid 上。", collocations: [["check the dehumidifier", "检查除湿器"], ["dehumidifier capacity", "除湿能力"], ["dehumidifier drain", "除湿器排水"]], examples: [["The dehumidifier is running.", "除湿器正在运行。"], ["Check the dehumidifier drain pan.", "检查除湿器接水盘。"]] },
    ],
    phrases: [
      { p: "check the dehumidifier", ipa: "/tʃɛk ðə diːhjuːˈmɪdɪfaɪər/", cn: "检查除湿器", why: "check + the + dehumidifier = 检查除湿器。在马来西亚等高湿度地区，除湿器是保障机房环境的关键设备。" },
    ],
    grammar: [
      { q: "de- 前缀的含义是什么？", a: "de- = 去除/减少/向下（拉丁语前缀）\nhumidifier = 加湿器（增加湿度）\ndehumidifier = 除湿器（减少湿度）\n类似用法：\n✅ activate = 激活 → deactivate = 停用\n✅ pressurize = 加压 → depressurize = 减压\n掌握 de- 前缀可以快速理解很多技术词汇。" },
    ],
    pattern: "Please check the + HVAC设备",
    patternExamples: [
      { en: "Please check the humidifier.", cn: "请检查加湿器。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the condensate drain.", cn: "请检查冷凝水排水管。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the water leakage sensor.", cn: "请检查漏水传感器。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "sensor", ipa: "/ˈsɛnsər/", cn: "传感器", phonics: "sens 读 /sɛns/，or 读 /ər/" }] },
    ],
    thinking: "除湿器在热带数据中心的重要性：\n① 马来西亚全年湿度 70%-90%，远高于机房要求的40%-60%RH\n② 湿度过高会导致：金属腐蚀、电路板短路、霉菌生长\n③ 除湿器通过冷却空气至露点以下，使水分凝结排出\n④ 除湿产生的冷凝水需要通过排水管及时排出。",
    pronunciation: "dehumidifier 的 de 读 /diː/，长音。\nhumidifier 读 /hjuːˈmɪdɪfaɪər/，与加湿器相同的后半部分。",
    quiz: [
      { q: "为什么马来西亚数据中心特别需要除湿器？", a: "马来西亚属于热带雨林气候，全年平均湿度70%-90%，远高于数据中心要求的40%-60%RH。湿度过高会导致金属部件腐蚀、电路板短路、霉菌生长等问题，因此除湿器是马来西亚数据中心的关键环境控制设备。" },
    ],
  },
  {
    id: 1584,
    en: "The dehumidifier is operating normally.",
    cn: "除湿器运行正常。",
    ipa: "/ðə diːhjuːˈmɪdɪfaɪər ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1584句", "除湿器状态", "★★★★★"],
    when: "确认除湿器工作状态正常，除湿输出稳定，排水畅通，无告警。",
    words: [
      { w: "dehumidifier", ipa: "/diːhjuːˈmɪdɪfaɪər/", pos: "名词", cn: "除湿器", memory: "de- = 去除；humid = 潮湿；-ifier = 设备。\ndehumidifier = 除湿器。\n在数据中心中通常集成在CRAC/CRAH机组内部。", phonics: "de 读 /diː/，重音在 mid /mɪd/ 上。", collocations: [["dehumidifier running", "除湿器运行中"], ["dehumidifier output", "除湿输出"], ["dehumidifier drain", "除湿器排水"]], examples: [["The dehumidifier is on.", "除湿器已开启。"], ["Check the dehumidifier capacity.", "检查除湿器容量。"]] },
    ],
    phrases: [
      { p: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "运行正常", why: "operating + normally = 正常运行。除湿器运行正常意味着除湿量满足需求，冷凝水正常排出。" },
    ],
    grammar: [
      { q: "the dehumidifier 和 dehumidification 有什么区别？", a: "the dehumidifier = 除湿器（设备名词）\ndehumidification = 除湿（过程/动作名词）\n✅ The dehumidifier is running.（除湿器正在运行 → 指设备）\n✅ Dehumidification is important in tropical climates.（除湿在热带气候中很重要 → 指过程）\n日常交接中更多使用设备名词 dehumidifier。" },
    ],
    pattern: "The + 设备 + is operating normally",
    patternExamples: [
      { en: "The humidifier is operating normally.", cn: "加湿器运行正常。", words: [{ w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The condensate pump is operating normally.", cn: "冷凝水泵运行正常。", words: [{ w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The leakage detection system is operating normally.", cn: "漏水检测系统运行正常。", words: [{ w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "除湿器运行正常的判断标准：\n① 除湿输出量满足设定目标\n② 冷凝水正常排出，排水管无堵塞\n③ 压缩机运行平稳，无异常振动\n④ 湿度传感器读数在40%-60%RH范围内\n⑤ 无高湿度或低湿度告警。",
    pronunciation: "dehumidifier 读 /diːhjuːˈmɪdɪfaɪər/，共六个音节。",
    quiz: [
      { q: "加湿器运行正常，怎么说？", a: "The humidifier is operating normally." },
    ],
  },
  {
    id: 1585,
    en: "Please check the condensate drain.",
    cn: "请检查冷凝水排水管。",
    ipa: "/pliːz tʃɛk ðə kənˈdɛnseɪt dreɪn/",
    tags: ["第1585句", "加湿除湿", "★★★★★"],
    when: "冷凝水排水管用于排出除湿过程中产生的凝结水。排水管堵塞会导致机房漏水，是巡检重点。",
    words: [
      { w: "condensate", ipa: "/kənˈdɛnseɪt/", pos: "名词", cn: "冷凝水；凝结水", memory: "condense = 凝结/冷凝；-ate = 名词后缀。\ncondensate = 冷凝水，空气中的水蒸气遇冷凝结成的液态水。\n除湿器、空调蒸发器表面都会产生冷凝水。", phonics: "con 读 /kən/，den 读 /dɛn/，sate 读 /seɪt/，重音在 den 上。", collocations: [["condensate drain", "冷凝水排水管"], ["condensate pump", "冷凝水泵"], ["condensate pan", "接水盘"]], examples: [["Check the condensate drain for blockage.", "检查冷凝水排水管是否堵塞。"], ["The condensate pump is running.", "冷凝水泵正在运行。"]] },
      { w: "drain", ipa: "/dreɪn/", pos: "名词", cn: "排水管；排水口", memory: "drain = 排水/排水管。\ncondensate drain = 冷凝水排水管。\nfloor drain = 地漏。\n排水管堵塞是机房漏水的常见原因。", phonics: "dr 读 /dr/，ain 读 /eɪn/。", collocations: [["condensate drain", "冷凝水排水管"], ["floor drain", "地漏"], ["drain blockage", "排水堵塞"]], examples: [["The drain is clear.", "排水管畅通。"], ["Please clear the drain.", "请疏通排水管。"]] },
    ],
    phrases: [
      { p: "condensate drain", ipa: "/kənˈdɛnseɪt dreɪn/", cn: "冷凝水排水管", why: "condensate + drain = 冷凝水排水管。除湿过程中空气中的水蒸气在蒸发器表面凝结，通过排水管排出机房。" },
    ],
    grammar: [
      { q: "condensate 和 condensation 有什么区别？", a: "condensate = 冷凝水（具体的液态水，名词）\ncondensation = 冷凝/凝结（过程或现象，名词）\n✅ Check the condensate drain.（检查冷凝水排水管 → 指具体的水）\n✅ Condensation occurs when warm air meets cold surfaces.（暖空气遇到冷表面时发生凝结 → 指过程）\n工程中常用 condensate 指代实际的凝结水。" },
    ],
    pattern: "Please check the + 排水/管道设施",
    patternExamples: [
      { en: "Please check the floor drain.", cn: "请检查地漏。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "floor", ipa: "/flɔːr/", cn: "楼层", phonics: "floor 读 /flɔːr/" }] },
      { en: "Please check the water supply pipe.", cn: "请检查供水管。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "pipe", ipa: "/paɪp/", cn: "管道", phonics: "pipe 读 /paɪp/" }] },
      { en: "Please check the chilled water valve.", cn: "请检查冷冻水阀门。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "valve", ipa: "/vælv/", cn: "阀门", phonics: "valve 读 /vælv/" }] },
    ],
    thinking: "冷凝水排水管巡检要点：\n① 检查排水管是否畅通（用手电筒照射管口观察水流）\n② 检查接水盘是否有积水（积水说明排水不畅）\n③ 检查排水管连接处是否有渗漏\n④ 检查冷凝水泵是否正常工作（如有配置）\n⑤ 排水管堵塞是机房漏水告警的最常见原因之一。",
    pronunciation: "condensate 读 /kənˈdɛnseɪt/，重音在第二音节。\ndrain 的 dr 读 /dr/，不要读成 /dʒr/。",
    quiz: [
      { q: "冷凝水排水管堵塞会导致什么问题？", a: "冷凝水排水管堵塞会导致：① 接水盘溢水，造成机房漏水 ② 触发漏水传感器告警 ③ 可能损坏下方设备 ④ 积水滋生细菌和霉菌。因此需要定期检查和疏通排水管。" },
    ],
  },
  {
    id: 1586,
    en: "The condensate drain is clear.",
    cn: "冷凝水排水管畅通。",
    ipa: "/ðə kənˈdɛnseɪt dreɪn ɪz klɪr/",
    tags: ["第1586句", "排水管状态", "★★★★★"],
    when: "确认冷凝水排水管畅通无阻，冷凝水正常排出，无堵塞或溢水现象。",
    words: [
      { w: "clear", ipa: "/klɪr/", pos: "形容词", cn: "畅通的；清澈的", memory: "clear = 畅通/清澈/清晰。\nthe drain is clear = 排水管畅通（无堵塞）。\n在管道语境中 clear = 无阻塞/通畅。\n在告警语境中 clear = 已恢复/已清除。", phonics: "cl 读 /kl/，ear 读 /ɪr/。", collocations: [["drain is clear", "排水管畅通"], ["alarm is clear", "告警已恢复"], ["path is clear", "通道畅通"]], examples: [["The pipe is clear.", "管道畅通。"], ["All alarms have been cleared.", "所有告警已恢复。"]] },
    ],
    phrases: [
      { p: "drain is clear", ipa: "/dreɪn ɪz klɪr/", cn: "排水管畅通", why: "drain + is + clear = 排水管畅通。clear 在此表示管道无堵塞，冷凝水可以正常排出。" },
    ],
    grammar: [
      { q: "clear 在 drain 和 alarm 语境中的区别？", a: "The drain is clear. = 排水管畅通（clear = 无堵塞/通畅）\nThe alarm is cleared. = 告警已恢复（clear = 已消除/已解决）\nClear the blockage. = 清除堵塞（clear = 动词，清除）\n✅ clear 作形容词 = 畅通的/清澈的\n✅ clear 作动词 = 清除/疏通\n✅ cleared 作被动 = 已被清除/已恢复" },
    ],
    pattern: "The + 管道/通道 + is clear",
    patternExamples: [
      { en: "The floor drain is clear.", cn: "地漏畅通。", words: [{ w: "floor", ipa: "/flɔːr/", cn: "楼层", phonics: "floor 读 /flɔːr/" }, { w: "clear", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
      { en: "The air duct is clear.", cn: "风道畅通。", words: [{ w: "clear", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
      { en: "The cable tray is clear.", cn: "桥架通道畅通。", words: [{ w: "clear", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
    ],
    thinking: "排水管畅通的判断方法：\n① 目视检查：管口有稳定水流 = 畅通\n② 听诊：无气泡声或堵塞声 = 正常\n③ 接水盘无积水 = 排水顺畅\n④ 定期维护：每季度用高压水枪冲洗排水管\n⑤ 预防性维护比故障维修更经济。",
    pronunciation: "clear 读 /klɪr/，注意 cl 是 /kl/ 不是 /kəl/。",
    quiz: [
      { q: "如何判断冷凝水排水管是否畅通？", a: "判断冷凝水排水管畅通的方法：① 目视管口有稳定水流 ② 接水盘无积水 ③ 无气泡声或异常噪音 ④ 排水管内壁无藻类或沉积物。如发现堵塞，应立即疏通并记录维护操作。" },
    ],
  },
  {
    id: 1587,
    en: "Please check the water leakage sensor.",
    cn: "请检查漏水传感器。",
    ipa: "/pliːz tʃɛk ðə ˈwɔːtər ˈliːkɪdʒ ˈsɛnsər/",
    tags: ["第1587句", "加湿除湿", "★★★★★"],
    when: "漏水传感器安装在机房地面和关键水管下方，用于检测冷凝水泄漏或管道破裂。交接时需确认传感器工作正常。",
    words: [
      { w: "leakage", ipa: "/ˈliːkɪdʒ/", pos: "名词", cn: "泄漏；漏出", memory: "leak = 泄漏（动词）；-age = 名词后缀。\nleakage = 泄漏（名词），液体或气体的漏出。\nwater leakage = 漏水。\nrefrigerant leakage = 制冷剂泄漏。", phonics: "leak 读 /liːk/，age 读 /ɪdʒ/，重音在第一音节。", collocations: [["water leakage", "漏水"], ["fuel leakage", "燃油泄漏"], ["leakage detection", "泄漏检测"]], examples: [["No water leakage detected.", "未检测到漏水。"], ["Check for refrigerant leakage.", "检查是否有制冷剂泄漏。"]] },
      { w: "sensor", ipa: "/ˈsɛnsər/", pos: "名词", cn: "传感器", memory: "sense = 感知；-or = 设备。\nsensor = 传感器，将物理量转换为电信号的设备。\nwater leakage sensor = 漏水传感器。\ntemperature sensor = 温度传感器。", phonics: "sen 读 /sɛn/，sor 读 /sər/，重音在第一音节。", collocations: [["leakage sensor", "漏水传感器"], ["temperature sensor", "温度传感器"], ["humidity sensor", "湿度传感器"]], examples: [["The sensor is working.", "传感器正常工作。"], ["Replace the faulty sensor.", "更换故障传感器。"]] },
    ],
    phrases: [
      { p: "water leakage sensor", ipa: "/ˈwɔːtər ˈliːkɪdʒ ˈsɛnsər/", cn: "漏水传感器", why: "water + leakage + sensor = 漏水传感器。安装在机房地面和管道下方，检测到水即触发告警，是防止水灾的关键安全设备。" },
    ],
    grammar: [
      { q: "leakage 和 leak 在用法上有什么区别？", a: "leak = 泄漏（动词）/ 漏点（名词）\nleakage = 泄漏（名词，强调泄漏这个现象/过程）\n✅ Water is leaking from the pipe.（水正在从管道泄漏 → leak 作动词）\n✅ We found a leak in the pipe.（我们在管道中发现了一个漏点 → leak 作名词）\n✅ The water leakage sensor detected leakage.（漏水传感器检测到泄漏 → leakage 作名词）\n工程中 leakage 更常用于正式报告和传感器命名。" },
    ],
    pattern: "Please check the + 安全传感器",
    patternExamples: [
      { en: "Please check the smoke detector.", cn: "请检查烟雾探测器。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "smoke", ipa: "/smoʊk/", cn: "烟雾", phonics: "smoke 读 /smoʊk/" }] },
      { en: "Please check the vibration sensor.", cn: "请检查振动传感器。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "sensor", ipa: "/ˈsɛnsər/", cn: "传感器", phonics: "sens 读 /sɛns/，or 读 /ər/" }] },
      { en: "Please check the pressure sensor.", cn: "请检查压力传感器。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }, { w: "sensor", ipa: "/ˈsɛnsər/", cn: "传感器", phonics: "sens 读 /sɛns/，or 读 /ər/" }] },
    ],
    thinking: "漏水传感器的布局与维护：\n① 安装位置：CRAC下方、冷冻水管道沿线、配电柜附近地面\n② 类型：线缆式（沿管道铺设）+ 点式（关键位置定点）\n③ 交接时检查：传感器在线状态 + 测试灯 + 告警联动测试\n④ 定期维护：每季度清洁传感器表面，检查线缆完整性\n⑤ 误报处理：排除传感器故障后确认是否为误报。",
    pronunciation: "leakage 读 /ˈliːkɪdʒ/，重音在第一音节。\nsensor 读 /ˈsɛnsər/，注意 s 不读 z。",
    quiz: [
      { q: "漏水传感器通常安装在哪些位置？", a: "漏水传感器通常安装在：① CRAC/CRAH机组下方地面 ② 冷冻水供回水管道沿线 ③ 消防水管附近 ④ 配电柜/UPS附近地面 ⑤ 建筑楼板接缝处。采用线缆式传感器沿管道路径铺设，点式传感器在关键风险点布置。" },
    ],
  },
  {
    id: 1588,
    en: "No water leakage has been detected.",
    cn: "没有检测到漏水。",
    ipa: "/noʊ ˈwɔːtər ˈliːkɪdʒ hæz biːn dɪˈtɛktɪd/",
    tags: ["第1588句", "漏水检测", "★★★★★"],
    when: "确认所有漏水传感器未检测到漏水，机房水系统安全。这是交接时的理想状态报告。",
    words: [
      { w: "detected", ipa: "/dɪˈtɛktɪd/", pos: "动词过去分词", cn: "被检测到", memory: "detect = 检测/发现；-ed = 过去分词。\ndetected = 被检测到的。\nhas been detected = 已经被检测到（现在完成时被动语态）。\nNo ... has been detected = 没有检测到……", phonics: "de 读 /dɪ/，tect 读 /tɛkt/，ed 读 /ɪd/，重音在 tect 上。", collocations: [["leakage detected", "检测到泄漏"], ["alarm detected", "检测到告警"], ["no issue detected", "未检测到问题"]], examples: [["No alarm has been detected.", "没有检测到告警。"], ["A fault was detected.", "检测到一个故障。"]] },
    ],
    phrases: [
      { p: "no water leakage has been detected", ipa: "/noʊ ˈwɔːtər ˈliːkɪdʒ hæz biːn dɪˈtɛktɪd/", cn: "没有检测到漏水", why: "no + water leakage + has been detected = 没有检测到漏水。has been detected 是现在完成时被动语态，强调从过去到现在的时间段内的检测结果。" },
    ],
    grammar: [
      { q: "has been detected 和 is detected 有什么区别？", a: "has been detected = 已经被检测到（现在完成时被动，强调到目前为止的结果）\nis detected = 被检测到（一般现在时被动，描述常规/即时状态）\n✅ No leakage has been detected.（到目前为止没有检测到漏水 → 汇报交接期间结果）\n✅ Leakage is detected by the sensor.（漏水由传感器检测 → 描述系统功能）\n交接用 has been detected，强调'从接班到现在'的检查结论。" },
    ],
    pattern: "No + 异常 + has been detected",
    patternExamples: [
      { en: "No fuel leakage has been detected.", cn: "没有检测到燃油泄漏。", words: [] },
      { en: "No abnormal vibration has been detected.", cn: "没有检测到异常振动。", words: [{ w: "abnormal", ipa: "/æbˈnɔːrməl/", cn: "异常", phonics: "ab 读 /æb/，normal 读 /nɔːrməl/" }] },
      { en: "No smoke has been detected.", cn: "没有检测到烟雾。", words: [{ w: "smoke", ipa: "/smoʊk/", cn: "烟雾", phonics: "smoke 读 /smoʊk/" }] },
    ],
    thinking: "漏水检测是交接的重要环节：\n① 确认所有漏水传感器在线且工作正常\n② 查看BMS上漏水检测系统面板无告警\n③ 巡视重点区域：CRAC下方、冷冻水阀门、消防管道\n④ 记录：No water leakage has been detected（无漏水）\n⑤ 如发现漏水：立即隔离漏水源 → 排水 → 检查受影响设备 → 通知维修。",
    pronunciation: "detected 读 /dɪˈtɛktɪd/，重音在第二音节。\nhas been 弱读为 /həz bɪn/。",
    quiz: [
      { q: "没有检测到异常振动，怎么说？", a: "No abnormal vibration has been detected." },
    ],
  },
  {
    id: 1589,
    en: "A high-temperature alarm has been detected.",
    cn: "检测到高温告警。",
    ipa: "/ə haɪ ˈtɛmpərətʃər əˈlɑːrm hæz biːn dɪˈtɛktɪd/",
    tags: ["第1589句", "告警", "★★★★★"],
    when: "机房温度传感器检测到温度超过上限阈值，触发高温告警。需要立即排查原因，可能影响服务器安全。",
    words: [
      { w: "high-temperature", ipa: "/haɪ ˈtɛmpərətʃər/", pos: "形容词", cn: "高温的", memory: "high = 高的；temperature = 温度。\nhigh-temperature = 高温的。\n数据中心高温告警阈值通常为27°C-30°C。\nASHRAE推荐数据中心温度范围：18°C-27°C。", phonics: "high 读 /haɪ/，temperature 读 /ˈtɛmpərətʃər/。", collocations: [["high-temperature alarm", "高温告警"], ["high-temperature warning", "高温预警"], ["high-temperature shutdown", "高温停机"]], examples: [["A high-temperature alarm was triggered.", "触发了高温告警。"], ["The server room has a high-temperature warning.", "服务器房有高温预警。"]] },
    ],
    phrases: [
      { p: "high-temperature alarm", ipa: "/haɪ ˈtɛmpərətʃər əˈlɑːrm/", cn: "高温告警", why: "high-temperature + alarm = 高温告警。当机房温度超过设定上限时触发，通常伴随声光告警和BMS通知。" },
    ],
    grammar: [
      { q: "alarm 和 alert 有什么区别？", a: "alarm = 告警/警报（通常指严重级别，需立即处理）\nalert = 预警/提醒（通常指较轻级别，需关注）\n✅ High-temperature alarm = 高温告警（Critical，温度已超限）\n✅ High-temperature alert = 高温预警（Warning，温度接近上限）\nBMS系统中：\n- Alarm = 需要立即响应的严重事件\n- Alert = 需要关注但非紧急的事件" },
    ],
    pattern: "A + 类型 + alarm has been detected",
    patternExamples: [
      { en: "A low-temperature alarm has been detected.", cn: "检测到低温告警。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A high-humidity alarm has been detected.", cn: "检测到高湿度告警。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A water leakage alarm has been detected.", cn: "检测到漏水告警。", words: [{ w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "高温告警的排查流程：\n① 确认告警位置：哪个区域/机柜的温度超标\n② 检查CRAC运行状态：是否有CRAC停机或故障\n③ 检查送风口：是否有遮挡物影响冷风供应\n④ 检查热通道/冷通道隔离：是否有气流短路\n⑤ 检查IT负载：是否有新增高功耗设备\n⑥ 应急措施：开启备用CRAC + 临时移动空调。",
    pronunciation: "high-temperature 连读时 high 的 /aɪ/ 和 temperature 的 /t/ 之间有轻微停顿。\nalarm 的 a 读 /ə/，larm 读 /lɑːrm/。",
    quiz: [
      { q: "数据中心推荐温度范围是多少？", a: "根据ASHRAE（美国供暖、制冷与空调工程师协会）推荐，数据中心温度范围为18°C-27°C（64.4°F-80.6°F），湿度范围为20%-80%RH（非凝结）。高温告警阈值通常设置在27°C-30°C。" },
    ],
  },
  {
    id: 1590,
    en: "A low-temperature alarm has been detected.",
    cn: "检测到低温告警。",
    ipa: "/ə loʊ ˈtɛmpərətʃər əˈlɑːrm hæz biːn dɪˈtɛktɪd/",
    tags: ["第1590句", "告警", "★★★★"],
    when: "机房温度传感器检测到温度低于下限阈值，触发低温告警。虽然少见，但过冷也会导致设备结露等问题。",
    words: [
      { w: "low-temperature", ipa: "/loʊ ˈtɛmpərətʃər/", pos: "形容词", cn: "低温的", memory: "low = 低的；temperature = 温度。\nlow-temperature = 低温的。\n低温告警阈值通常为15°C-18°C。\n过冷可能导致设备表面结露，引发短路风险。", phonics: "low 读 /loʊ/，temperature 读 /ˈtɛmpərətʃər/。", collocations: [["low-temperature alarm", "低温告警"], ["low-temperature warning", "低温预警"], ["low-temperature damage", "低温损坏"]], examples: [["A low-temperature alarm was triggered.", "触发了低温告警。"], ["Check for low-temperature condensation.", "检查是否有低温结露。"]] },
    ],
    phrases: [
      { p: "low-temperature alarm", ipa: "/loʊ ˈtɛmpərətʃər əˈlɑːrm/", cn: "低温告警", why: "low-temperature + alarm = 低温告警。当机房温度低于设定下限时触发，虽然比高温少见，但可能导致结露损坏设备。" },
    ],
    grammar: [
      { q: "high-temperature 和 low-temperature 告警哪个更危险？", a: "通常 high-temperature 更危险：\n高温 → 服务器过热 → 硬件损坏/数据丢失 → 业务中断\n低温 → 设备表面结露 → 电路板短路 → 潜在风险\n但两者都需要及时处理：\n✅ 高温告警：优先恢复制冷（启动备用CRAC）\n✅ 低温告警：减少送风量或调高设定温度\n在热带地区（如马来西亚），高温告警更常见。" },
    ],
    pattern: "A + 类型 + alarm has been detected",
    patternExamples: [
      { en: "A high-temperature alarm has been detected.", cn: "检测到高温告警。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A high-humidity alarm has been detected.", cn: "检测到高湿度告警。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A low-humidity alarm has been detected.", cn: "检测到低湿度告警。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "低温告警的常见原因：\n① CRAC设定温度过低\n② 送风口直接对着温度传感器\n③ 夜间IT负载降低，制冷量相对过大\n④ 新风系统引入过多冷空气\n⑤ 处理方式：调高CRAC设定温度 + 检查气流组织。",
    pronunciation: "low 读 /loʊ/，长元音。\ntemperature 读 /ˈtɛmpərətʃər/，四个音节。",
    quiz: [
      { q: "低温告警可能导致什么问题？", a: "低温告警可能导致：① 设备表面结露（condensation），水滴可能导致电路板短路 ② 硬盘在低温下性能下降 ③ 能源浪费（过度制冷）。处理方式通常是调高CRAC设定温度或减少送风量。" },
    ],
  },
  {
    id: 1591,
    en: "A high-humidity alarm has been detected.",
    cn: "检测到高湿度告警。",
    ipa: "/ə haɪ hjuːˈmɪdəti əˈlɑːrm hæz biːn dɪˈtɛktɪd/",
    tags: ["第1591句", "告警", "★★★★★"],
    when: "湿度传感器检测到机房湿度超过上限（通常>60%RH），触发高湿度告警。在马来西亚等高湿度地区较为常见。",
    words: [
      { w: "high-humidity", ipa: "/haɪ hjuːˈmɪdəti/", pos: "形容词", cn: "高湿度的", memory: "high = 高的；humidity = 湿度。\nhigh-humidity = 高湿度的。\n数据中心湿度上限通常为60%RH。\n高湿度会导致金属腐蚀和电路短路。", phonics: "high 读 /haɪ/，humidity 读 /hjuːˈmɪdəti/，重音在 mid 上。", collocations: [["high-humidity alarm", "高湿度告警"], ["high-humidity warning", "高湿度预警"], ["high humidity environment", "高湿度环境"]], examples: [["A high-humidity alarm was triggered.", "触发了高湿度告警。"], ["Malaysia has a high-humidity climate.", "马来西亚属于高湿度气候。"]] },
    ],
    phrases: [
      { p: "high-humidity alarm", ipa: "/haɪ hjuːˈmɪdəti əˈlɑːrm/", cn: "高湿度告警", why: "high-humidity + alarm = 高湿度告警。当机房湿度超过60%RH时触发，需检查除湿器是否正常工作。" },
    ],
    grammar: [
      { q: "humidity 和 relative humidity (RH) 有什么区别？", a: "humidity = 湿度（泛指）\nrelative humidity (RH) = 相对湿度（精确测量值）\n✅ High humidity detected.（检测到高湿度 → 泛指）\n✅ The relative humidity is 75%RH.（相对湿度为75% → 精确值）\n数据中心使用 RH（相对湿度）作为控制参数：\n- 推荐范围：40%-60%RH\n- 高湿度告警：>60%RH\n- 低湿度告警：<40%RH" },
    ],
    pattern: "A + 类型 + alarm has been detected",
    patternExamples: [
      { en: "A low-humidity alarm has been detected.", cn: "检测到低湿度告警。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A high-temperature alarm has been detected.", cn: "检测到高温告警。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A smoke alarm has been detected.", cn: "检测到烟雾告警。", words: [{ w: "smoke", ipa: "/smoʊk/", cn: "烟雾", phonics: "smoke 读 /smoʊk/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "高湿度告警的处理流程：\n① 确认告警位置和当前湿度值\n② 检查除湿器是否正常运行\n③ 检查CRAC的除湿功能是否启用\n④ 检查是否有外部湿空气渗入（门窗密封）\n⑤ 检查冷冻水供水温度是否过低（导致过度除湿后反弹）\n⑥ 应急措施：启动独立除湿机 + 密封渗入点。",
    pronunciation: "humidity 读 /hjuːˈmɪdəti/，重音在第二音节。\nalarm 读 /əˈlɑːrm/，重音在第二音节。",
    quiz: [
      { q: "高湿度告警应如何处理？", a: "高湿度告警处理步骤：① 确认当前湿度值和告警位置 ② 检查除湿器运行状态 ③ 确认CRAC除湿功能已启用 ④ 检查门窗密封性 ⑤ 如除湿器故障，切换到备用CRAC或启动独立除湿机 ⑥ 记录告警和处理措施。" },
    ],
  },
  {
    id: 1592,
    en: "A low-humidity alarm has been detected.",
    cn: "检测到低湿度告警。",
    ipa: "/ə loʊ hjuːˈmɪdəti əˈlɑːrm hæz biːn dɪˈtɛktɪd/",
    tags: ["第1592句", "告警", "★★★★"],
    when: "湿度传感器检测到机房湿度低于下限（通常<40%RH），触发低湿度告警。低湿度会增加静电风险。",
    words: [
      { w: "low-humidity", ipa: "/loʊ hjuːˈmɪdəti/", pos: "形容词", cn: "低湿度的", memory: "low = 低的；humidity = 湿度。\nlow-humidity = 低湿度的。\n数据中心湿度下限通常为40%RH。\n低湿度会导致静电积累，损坏电子元件。", phonics: "low 读 /loʊ/，humidity 读 /hjuːˈmɪdəti/。", collocations: [["low-humidity alarm", "低湿度告警"], ["low-humidity warning", "低湿度预警"], ["low humidity risk", "低湿度风险"]], examples: [["A low-humidity alarm was triggered.", "触发了低湿度告警。"], ["Low humidity increases static electricity.", "低湿度增加静电。"]] },
    ],
    phrases: [
      { p: "low-humidity alarm", ipa: "/loʊ hjuːˈmɪdəti əˈlɑːrm/", cn: "低湿度告警", why: "low-humidity + alarm = 低湿度告警。当机房湿度低于40%RH时触发，需检查加湿器是否正常工作。" },
    ],
    grammar: [
      { q: "四种温湿度告警如何对应处理？", a: "四种温湿度告警及对应处理：\n① 高温告警 → 增加制冷（启动备用CRAC）\n② 低温告警 → 减少制冷（调高设定温度）\n③ 高湿度告警 → 增加除湿（检查/启动除湿器）\n④ 低湿度告警 → 增加加湿（检查/启动加湿器）\n记忆口诀：高了降，低了升；热了冷，干了湿。" },
    ],
    pattern: "A + 类型 + alarm has been detected",
    patternExamples: [
      { en: "A high-humidity alarm has been detected.", cn: "检测到高湿度告警。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A high-temperature alarm has been detected.", cn: "检测到高温告警。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A low-temperature alarm has been detected.", cn: "检测到低温告警。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "低湿度告警的危害与处理：\n① 危害：静电积累 → ESD（静电放电）→ 损坏服务器芯片/硬盘\n② 常见原因：加湿器故障、冬季干燥气候、过度除湿\n③ 处理：检查加湿器运行状态 → 确认水箱水位 → 启动备用加湿器\n④ 预防措施：定期检查加湿系统 + 防静电手环 + 防静电地板。",
    pronunciation: "low 读 /loʊ/，长元音。\nhumidity 读 /hjuːˈmɪdəti/。",
    quiz: [
      { q: "低湿度对数据中心有什么危害？", a: "低湿度（<40%RH）的主要危害：① 静电积累增加，ESD（静电放电）可能损坏服务器CPU、内存、硬盘等电子元件 ② 灰尘更容易在空气中悬浮 ③ 人体接触设备时静电放电风险增加。预防措施包括维持40%-60%RH、使用防静电地板和手环。" },
    ],
  },
  {
    id: 1593,
    en: "Please investigate the alarm immediately.",
    cn: "请立即调查告警原因。",
    ipa: "/pliːz ɪnˈvɛstɪɡeɪt ðə əˈlɑːrm ɪˈmiːdiətli/",
    tags: ["第1593句", "告警处理", "★★★★★"],
    when: "发现告警后需要立即展开调查，确定告警原因、影响范围和处置方案。investigate 强调系统性的排查过程。",
    words: [
      { w: "investigate", ipa: "/ɪnˈvɛstɪɡeɪt/", pos: "动词", cn: "调查；排查", memory: "in- = 进入；vestigate = 追踪（拉丁语 vestigare）。\ninvestigate = 调查/排查，系统性地查找问题原因。\n比 check 更深入，比 inspect 更广泛。", phonics: "in 读 /ɪn/，ves 读 /vɛs/，tigate 读 /tɪɡeɪt/，重音在第二音节。", collocations: [["investigate the alarm", "调查告警"], ["investigate the cause", "调查原因"], ["investigate the failure", "调查故障"]], examples: [["Please investigate the root cause.", "请调查根本原因。"], ["We need to investigate this issue.", "我们需要调查这个问题。"]] },
      { w: "immediately", ipa: "/ɪˈmiːdiətli/", pos: "副词", cn: "立即；马上", memory: "immediate = 立即的；-ly = 副词后缀。\nimmediately = 立即/马上，表示需要立刻行动。\n在告警处理中表示紧急程度最高。", phonics: "im 读 /ɪm/，me 读 /miː/，di 读 /di/，ately 读 /ətli/，重音在 me 上。", collocations: [["act immediately", "立即行动"], ["respond immediately", "立即响应"], ["notify immediately", "立即通知"]], examples: [["Please respond immediately.", "请立即响应。"], ["Shut down the system immediately.", "立即关闭系统。"]] },
    ],
    phrases: [
      { p: "investigate the alarm", ipa: "/ɪnˈvɛstɪɡeɪt ðə əˈlɑːrm/", cn: "调查告警", why: "investigate + the + alarm = 调查告警。指系统性地排查告警原因，包括查看历史数据、检查设备状态、分析触发条件等。" },
    ],
    grammar: [
      { q: "investigate 和 check 在告警处理中的区别？", a: "check = 检查/查看（快速确认状态）\ninvestigate = 调查/排查（深入分析原因）\n✅ Please check the alarm.（请查看告警 → 确认告警内容）\n✅ Please investigate the alarm.（请调查告警 → 深入排查原因）\n告警处理流程：\n① Check the alarm → 确认告警类型和位置\n② Investigate the cause → 调查告警原因\n③ Resolve the issue → 解决问题\n④ Update the record → 更新记录" },
    ],
    pattern: "Please investigate the + 问题 + immediately",
    patternExamples: [
      { en: "Please investigate the failure immediately.", cn: "请立即调查故障。", words: [{ w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Please investigate the leakage immediately.", cn: "请立即调查泄漏。", words: [{ w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Please investigate the noise immediately.", cn: "请立即调查噪音。", words: [{ w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
    ],
    thinking: "告警调查的标准流程（5W1H）：\n① What：什么告警？（类型、严重程度）\n② Where：哪个位置？（区域、设备、机柜）\n③ When：何时触发？（首次/重复、持续时间）\n④ Why：什么原因？（设备故障/环境变化/人为操作）\n⑤ Who：谁负责处理？（值班人员/供应商/管理层）\n⑥ How：如何处置？（紧急措施/永久修复/预防措施）",
    pronunciation: "investigate 读 /ɪnˈvɛstɪɡeɪt/，重音在第二音节。\nimmediately 读 /ɪˈmiːdiətli/，共五个音节。",
    quiz: [
      { q: "请立即调查故障，怎么说？", a: "Please investigate the failure immediately." },
    ],
  },
  {
    id: 1594,
    en: "Please switch to the standby CRAC unit.",
    cn: "请切换到备用精密空调。",
    ipa: "/pliːz swɪtʃ tuː ðə ˈstændbaɪ kræk ˈjuːnɪt/",
    tags: ["第1594句", "告警处理", "★★★★★"],
    when: "当主用CRAC出现故障或制冷能力不足时，需要切换到备用精密空调机组，恢复制冷能力。",
    words: [
      { w: "switch to", ipa: "/swɪtʃ tuː/", pos: "动词短语", cn: "切换到", memory: "switch = 切换/转换；to = 到。\nswitch to = 切换到（另一个设备/模式/状态）。\nswitch to standby = 切换到备用。\nswitch to manual = 切换到手动。", phonics: "switch 读 /swɪtʃ/，to 读 /tuː/。", collocations: [["switch to standby", "切换到备用"], ["switch to manual", "切换到手动"], ["switch to automatic", "切换到自动"]], examples: [["Please switch to the backup generator.", "请切换到备用发电机。"], ["Switch to manual mode.", "切换到手动模式。"]] },
      { w: "standby", ipa: "/ˈstændbaɪ/", pos: "形容词/名词", cn: "备用的；备用设备", memory: "stand = 站立；by = 旁边。\nstandby = 备用的/备用状态，待命中随时可以投入使用。\nstandby unit = 备用设备。\non standby = 处于备用状态。", phonics: "stand 读 /stænd/，by 读 /baɪ/，重音在第一音节。", collocations: [["standby unit", "备用设备"], ["standby generator", "备用发电机"], ["on standby", "处于备用状态"]], examples: [["The standby unit is ready.", "备用设备已就绪。"], ["Keep one generator on standby.", "保持一台发电机处于备用状态。"]] },
    ],
    phrases: [
      { p: "switch to the standby CRAC unit", ipa: "/swɪtʃ tuː ðə ˈstændbaɪ kræk ˈjuːnɪt/", cn: "切换到备用精密空调", why: "switch to + the + standby + CRAC unit = 切换到备用精密空调。当主用CRAC故障时，启用备用机组恢复制冷能力。" },
    ],
    grammar: [
      { q: "standby 和 backup 有什么区别？", a: "standby = 备用/待命（设备已就绪，可立即切换）\nbackup = 备份/后备（更广义，包括数据备份、人员备份等）\n✅ The standby CRAC is ready to start.（备用CRAC准备启动 → 已就绪的备用设备）\n✅ We have a backup plan.（我们有备份计划 → 更广义的后备方案）\n在设备语境中两者可互换：standby unit ≈ backup unit。" },
    ],
    pattern: "Please switch to the standby + 设备",
    patternExamples: [
      { en: "Please switch to the standby generator.", cn: "请切换到备用发电机。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "Please switch to the standby UPS.", cn: "请切换到备用UPS。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }] },
      { en: "Please switch to the standby pump.", cn: "请切换到备用泵。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }] },
    ],
    thinking: "CRAC冗余设计与切换操作：\n① 数据中心通常采用 N+1 或 N+2 冗余配置\n② 备用CRAC平时处于 standby 模式，主用故障时自动或手动启动\n③ 切换操作：确认备用CRAC状态 → 启动备用 → 确认制冷恢复 → 隔离故障CRAC\n④ 切换时间：自动切换通常<30秒，手动切换需要2-5分钟\n⑤ 切换后需持续监控温度和湿度恢复情况。",
    pronunciation: "switch 的 w 读 /w/，不是静音。\nstandby 读 /ˈstændbaɪ/，重音在第一音节。\nCRAC 读 /kræk/，作为一个单词发音。",
    quiz: [
      { q: "请切换到备用发电机，怎么说？", a: "Please switch to the standby generator." },
    ],
  },
  {
    id: 1595,
    en: "The standby unit has started successfully.",
    cn: "备用设备已经成功启动。",
    ipa: "/ðə ˈstændbaɪ ˈjuːnɪt hæz ˈstɑːrtɪd səkˈsɛsfəli/",
    tags: ["第1595句", "备用启动", "★★★★★"],
    when: "确认备用CRAC/设备已经成功启动并开始提供制冷/服务，这是切换操作后的关键确认步骤。",
    words: [
      { w: "started", ipa: "/ˈstɑːrtɪd/", pos: "动词过去分词", cn: "已启动", memory: "start = 启动/开始；-ed = 过去分词。\nstarted = 已启动的。\nhas started = 已经启动（现在完成时）。\nstarted successfully = 成功启动。", phonics: "start 读 /stɑːrt/，ed 读 /ɪd/。", collocations: [["started successfully", "成功启动"], ["failed to start", "启动失败"], ["started manually", "手动启动"]], examples: [["The generator has started.", "发电机已启动。"], ["The system started automatically.", "系统自动启动了。"]] },
    ],
    phrases: [
      { p: "started successfully", ipa: "/ˈstɑːrtɪd səkˈsɛsfəli/", cn: "成功启动", why: "started + successfully = 成功启动。表示设备启动过程无故障，已进入正常运行状态。" },
    ],
    grammar: [
      { q: "has started 和 started 在时态上有什么区别？", a: "has started = 已经启动（现在完成时，强调对现在的影响：设备现在在运行）\nstarted = 启动了（一般过去时，描述过去发生的动作）\n✅ The standby unit has started successfully.（备用设备已成功启动 → 强调现在它在运行）\n✅ The unit started at 3:15 AM.（设备在凌晨3:15启动 → 描述过去的事件）\n交接汇报用 has started，强调当前的运行状态。" },
    ],
    pattern: "The + 设备 + has started successfully",
    patternExamples: [
      { en: "The backup generator has started successfully.", cn: "备用发电机已成功启动。", words: [{ w: "backup", ipa: "/ˈbækʌp/", cn: "备份", phonics: "back 读 /bæk/，up 读 /ʌp/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "started", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "The standby pump has started successfully.", cn: "备用泵已成功启动。", words: [{ w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "started", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "The emergency cooling has started successfully.", cn: "应急制冷已成功启动。", words: [{ w: "emergency", ipa: "/ɪˈmɜːrdʒənsi/", cn: "紧急", phonics: "e 读 /ɪ/，mergency 读 /mɜːrdʒənsi/" }, { w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "started", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
    ],
    thinking: "备用设备启动后的确认步骤：\n① 确认设备已启动（指示灯/控制器显示）\n② 检查运行参数（温度/压力/流量）\n③ 确认制冷/供电已恢复到正常范围\n④ 监控5-10分钟确保运行稳定\n⑤ 记录启动时间、原因和操作人员\n⑥ 安排维修故障设备。",
    pronunciation: "started 读 /ˈstɑːrtɪd/，美式发音中 r 发音。\nsuccessfully 读 /səkˈsɛsfəli/，重音在第二音节。",
    quiz: [
      { q: "备用发电机已成功启动，怎么说？", a: "The standby generator has started successfully." },
    ],
  },
  {
    id: 1596,
    en: "The cooling capacity has returned to normal.",
    cn: "制冷能力已经恢复正常。",
    ipa: "/ðə ˈkuːlɪŋ kəˈpæsəti hæz rɪˈtɜːrnd tuː ˈnɔːrməl/",
    tags: ["第1596句", "制冷恢复", "★★★★★"],
    when: "备用CRAC启动后，确认整体制冷能力已恢复到满足机房散热需求的正常水平。",
    words: [
      { w: "cooling capacity", ipa: "/ˈkuːlɪŋ kəˈpæsəti/", pos: "名词短语", cn: "制冷能力；制冷量", memory: "cooling = 制冷/冷却；capacity = 容量/能力。\ncooling capacity = 制冷能力，空调系统能够移除的热量。\n通常以 kW（千瓦）或 TR（冷吨）为单位。\n数据中心制冷设计通常为IT负载的1.2-1.5倍。", phonics: "cooling 读 /ˈkuːlɪŋ/，capacity 读 /kəˈpæsəti/，重音在 pac 上。", collocations: [["cooling capacity", "制冷能力"], ["cooling demand", "制冷需求"], ["cooling redundancy", "制冷冗余"]], examples: [["The cooling capacity is sufficient.", "制冷能力充足。"], ["Check the cooling capacity margin.", "检查制冷能力余量。"]] },
    ],
    phrases: [
      { p: "returned to normal", ipa: "/rɪˈtɜːrnd tuː ˈnɔːrməl/", cn: "恢复正常", why: "returned + to + normal = 恢复正常。表示之前偏离正常状态的参数已经回到正常范围内。" },
    ],
    grammar: [
      { q: "has returned to normal 和 is normal 有什么区别？", a: "has returned to normal = 已恢复正常（强调从异常到正常的变化过程）\nis normal = 正常（描述当前状态，不涉及变化过程）\n✅ The cooling capacity has returned to normal.（制冷能力已恢复正常 → 之前不正常，现在恢复了）\n✅ The cooling capacity is normal.（制冷能力正常 → 一直正常）\n告警恢复后用 has returned to normal，说明经历了异常→恢复的过程。" },
    ],
    pattern: "The + 参数/能力 + has returned to normal",
    patternExamples: [
      { en: "The temperature has returned to normal.", cn: "温度已恢复正常。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The humidity has returned to normal.", cn: "湿度已恢复正常。", words: [{ w: "humidity", ipa: "/hjuːˈmɪdɪti/", cn: "湿度", phonics: "hu 读 /hjuː/，midity 读 /mɪdɪti/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The pressure has returned to normal.", cn: "压力已恢复正常。", words: [{ w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "制冷能力恢复的确认标准：\n① 机房温度回到设定范围（18°C-27°C）\n② 送风温度稳定在设定值\n③ 冷冻水供回水温差正常（通常5°C-8°C）\n④ 所有区域温度分布均匀，无热点\n⑤ N+1冗余：至少一台CRAC作为备用\n⑥ 记录恢复时间和处理措施。",
    pronunciation: "cooling 读 /ˈkuːlɪŋ/，长元音 /uː/。\ncapacity 读 /kəˈpæsəti/，重音在第二音节。\nreturned 的 r 读 /r/，美式发音。",
    quiz: [
      { q: "温度已恢复正常，怎么说？", a: "The temperature has returned to normal." },
    ],
  },
  {
    id: 1597,
    en: "All cooling alarms have been cleared.",
    cn: "所有制冷告警已经恢复。",
    ipa: "/ɔːl ˈkuːlɪŋ əˈlɑːrmz hæv biːn klɪrd/",
    tags: ["第1597句", "告警恢复", "★★★★★"],
    when: "确认所有与制冷系统相关的告警都已消除，系统回到正常监控状态。这是告警处理完成后的最终确认。",
    words: [
      { w: "cleared", ipa: "/klɪrd/", pos: "动词过去分词", cn: "已恢复；已清除", memory: "clear = 清除/恢复；-ed = 过去分词。\ncleared = 已清除/已恢复。\n在告警语境中：alarm cleared = 告警已恢复/已消除。\n在BMS系统中，cleared 表示告警条件已不再满足。", phonics: "clear 读 /klɪr/，ed 读 /d/。", collocations: [["alarm cleared", "告警已恢复"], ["all alarms cleared", "所有告警已恢复"], ["cleared automatically", "自动恢复"]], examples: [["The alarm has been cleared.", "告警已恢复。"], ["All alarms were cleared at 3:30 AM.", "所有告警在凌晨3:30恢复。"]] },
    ],
    phrases: [
      { p: "alarms have been cleared", ipa: "/əˈlɑːrmz hæv biːn klɪrd/", cn: "告警已经恢复", why: "alarms + have been + cleared = 告警已经恢复。have been cleared 是现在完成时被动语态，表示告警已被系统清除/恢复。" },
    ],
    grammar: [
      { q: "cleared 和 resolved 在告警语境中的区别？", a: "cleared = 已恢复/已清除（告警条件不再满足，系统自动或手动清除）\nresolved = 已解决/已处理（问题根因已被解决，不会再触发）\n✅ The alarm has been cleared.（告警已恢复 → 可能只是暂时恢复，问题未根除）\n✅ The issue has been resolved.（问题已解决 → 根因已修复，不会复发）\n交接时两个都要确认：\n① Alarms cleared = 当前无活跃告警\n② Issues resolved = 根因已处理" },
    ],
    pattern: "All + 类型 + alarms have been cleared",
    patternExamples: [
      { en: "All HVAC alarms have been cleared.", cn: "所有暖通告警已恢复。", words: [{ w: "hvac", ipa: "/ˌeɪtʃˈviːˈeɪˈsiː/", cn: "暖通", phonics: "H-V-A-C 逐字母读" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
      { en: "All power alarms have been cleared.", cn: "所有电力告警已恢复。", words: [{ w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
      { en: "All fire alarms have been cleared.", cn: "所有消防告警已恢复。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
    ],
    thinking: "告警恢复后的交接记录要点：\n① 告警恢复时间\n② 告警持续时间（从触发到恢复）\n③ 处理措施摘要\n④ 是否需要后续跟进\n⑤ 是否已通知相关人员/供应商\n⑥ 更新BMS告警日志和维护记录。",
    pronunciation: "cleared 读 /klɪrd/，注意 cl 是 /kl/。\nalarms 的 s 读 /z/。",
    quiz: [
      { q: "所有暖通告警已恢复，怎么说？", a: "All HVAC alarms have been cleared." },
    ],
  },
  {
    id: 1598,
    en: "Please update the HVAC maintenance record.",
    cn: "请更新暖通维护记录。",
    ipa: "/pliːz ˌʌpˈdeɪt ðə eɪtʃ-eɪ-siː-viː ˈmeɪntənəns ˈrɛkərd/",
    tags: ["第1598句", "维护记录", "★★★★★"],
    when: "告警处理完成后，需要将处理过程记录在暖通维护记录中，确保可追溯性和知识积累。",
    words: [
      { w: "HVAC", ipa: "/eɪtʃ-eɪ-siː-viː/", pos: "缩写", cn: "暖通空调（Heating, Ventilation, Air Conditioning）", memory: "H = Heating（供暖）；V = Ventilation（通风）；AC = Air Conditioning（空调）。\nHVAC = 暖通空调系统的总称。\n涵盖：CRAC、CRAH、冷冻水系统、冷却塔、风管系统等。", phonics: "逐字母读：H-A-C-V = /eɪtʃ/ /eɪ/ /siː/ /viː/。", collocations: [["HVAC system", "暖通系统"], ["HVAC maintenance", "暖通维护"], ["HVAC engineer", "暖通工程师"]], examples: [["The HVAC system is running.", "暖通系统正在运行。"], ["Call the HVAC engineer.", "联系暖通工程师。"]] },
      { w: "maintenance record", ipa: "/ˈmeɪntənəns ˈrɛkərd/", pos: "名词短语", cn: "维护记录", memory: "maintenance = 维护/保养；record = 记录。\nmaintenance record = 维护记录，记录所有维护活动的文件。\n包括：预防性维护、纠正性维护、巡检记录。", phonics: "main 读 /meɪn/，tenance 读 /tənəns/，record 读 /ˈrɛkərd/。", collocations: [["maintenance record", "维护记录"], ["maintenance schedule", "维护计划"], ["maintenance log", "维护日志"]], examples: [["Update the maintenance record.", "更新维护记录。"], ["Check the maintenance schedule.", "检查维护计划。"]] },
    ],
    phrases: [
      { p: "HVAC maintenance record", ipa: "/eɪtʃ-eɪ-siː-viː ˈmeɪntənəns ˈrɛkərd/", cn: "暖通维护记录", why: "HVAC + maintenance + record = 暖通维护记录。记录暖通系统的所有维护活动、告警处理和设备更换历史。" },
    ],
    grammar: [
      { q: "update 和 record 在维护语境中的区别？", a: "update = 更新（修改现有记录，添加新信息）\nrecord = 记录（创建新的记录条目）\n✅ Please update the maintenance record.（请更新维护记录 → 在已有记录上添加本次处理信息）\n✅ Please record the alarm details.（请记录告警详情 → 创建新的记录条目）\n维护工作完成后通常需要两者都做：先 record 新事件，再 update 相关记录。" },
    ],
    pattern: "Please update the + 类型 + record",
    patternExamples: [
      { en: "Please update the electrical maintenance record.", cn: "请更新电气维护记录。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "electrical", ipa: "/ɪˈlɛktrɪkəl/", cn: "电气", phonics: "e 读 /ɪ/，lectrical 读 /lɛktrɪkəl/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "Please update the generator log.", cn: "请更新发电机日志。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "Please update the fire system record.", cn: "请更新消防系统记录。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
    ],
    thinking: "暖通维护记录的标准内容：\n① 日期和时间\n② 设备编号和位置\n③ 维护类型（预防性/纠正性/巡检）\n④ 维护内容描述\n⑤ 发现的问题和处理措施\n⑥ 更换的备件和材料\n⑦ 操作人员签名\n⑧ 下次计划维护时间。",
    pronunciation: "HVAC 逐字母读 /eɪtʃ-eɪ-siː-viː/，不要当成单词读。\nmaintenance 读 /ˈmeɪntənəns/，重音在第一音节。\nrecord 作名词读 /ˈrɛkərd/，作动词读 /rɪˈkɔːrd/。",
    quiz: [
      { q: "请更新发电机维护记录，怎么说？", a: "Please update the generator maintenance record." },
    ],
  },
  {
    id: 1599,
    en: "The HVAC system is operating normally.",
    cn: "暖通系统运行正常。",
    ipa: "/ðə eɪtʃ-eɪ-siː-viː ˈsɪstəm ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1599句", "系统状态", "★★★★★"],
    when: "确认整个暖通空调系统（包括CRAC、CRAH、冷冻水、冷却塔等所有组件）运行正常，这是交接总结性汇报。",
    words: [
      { w: "HVAC system", ipa: "/eɪtʃ-eɪ-siː-viː ˈsɪstəm/", pos: "名词短语", cn: "暖通系统", memory: "HVAC = Heating, Ventilation, Air Conditioning（供暖、通风、空调）。\nsystem = 系统。\nHVAC system = 暖通空调系统，数据中心制冷系统的总称。\n包括：CRAC/CRAH + 冷冻水 + 冷却塔 + 水泵 + 管道。", phonics: "HVAC 逐字母读，system 读 /ˈsɪstəm/。", collocations: [["HVAC system status", "暖通系统状态"], ["HVAC system alarm", "暖通系统告警"], ["HVAC system efficiency", "暖通系统效率"]], examples: [["The HVAC system is running normally.", "暖通系统运行正常。"], ["Check the HVAC system efficiency.", "检查暖通系统效率。"]] },
    ],
    phrases: [
      { p: "HVAC system is operating normally", ipa: "/eɪtʃ-eɪ-siː-viː ˈsɪstəm ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "暖通系统运行正常", why: "HVAC system + is operating + normally = 暖通系统运行正常。这是对整个暖通系统运行状态的总结性汇报。" },
    ],
    grammar: [
      { q: "HVAC system 包含哪些子系统？", a: "HVAC system（暖通系统）包含：\n① CRAC（Computer Room Air Conditioning）= 精密空调\n② CRAH（Computer Room Air Handler）= 风墙空调\n③ Chilled water system = 冷冻水系统\n④ Cooling tower = 冷却塔\n⑤ Chiller = 冷水机组\n⑥ Pumps = 水泵\n⑦ Piping = 管道\n⑧ Ductwork = 风管\n交接时需要逐一确认各子系统状态。" },
    ],
    pattern: "The + 系统名 + is operating normally",
    patternExamples: [
      { en: "The electrical system is operating normally.", cn: "电气系统运行正常。", words: [{ w: "electrical", ipa: "/ɪˈlɛktrɪkəl/", cn: "电气", phonics: "e 读 /ɪ/，lectrical 读 /lɛktrɪkəl/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "The fire protection system is operating normally.", cn: "消防系统运行正常。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "protection", ipa: "/prəˈtɛkʃən/", cn: "保护", phonics: "pro 读 /prə/，tection 读 /tɛkʃən/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "The security system is operating normally.", cn: "安防系统运行正常。", words: [{ w: "security", ipa: "/sɪˈkjʊrɪti/", cn: "安防", phonics: "se 读 /sɪ/，curity 读 /kjʊrɪti/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
    ],
    thinking: "HVAC系统交接总结报告模板：\n① CRAC: All units operating normally（所有精密空调正常）\n② CRAH: All units operating normally（所有风墙空调正常）\n③ Chilled water: Supply/return temperature normal（冷冻水温度正常）\n④ Cooling tower: Operating normally（冷却塔正常）\n⑤ Temperature & humidity: Within range（温湿度正常）\n⑥ Active alarms: None（无活跃告警）\n⑦ Summary: HVAC system is operating normally（暖通系统运行正常）",
    pronunciation: "HVAC 逐字母读 /eɪtʃ-eɪ-siː-viː/。\nsystem 读 /ˈsɪstəm/，不要读成 /ˈsɪstɛm/。",
    quiz: [
      { q: "电气系统运行正常，怎么说？", a: "The electrical system is operating normally." },
    ],
  },
  {
    id: 1600,
    en: "The cooling system is ready for normal operation.",
    cn: "制冷系统已经恢复正常运行。",
    ipa: "/ðə ˈkuːlɪŋ ˈsɪstəm ɪz ˈrɛdi fɔːr ˈnɔːrməl ˌɒpəˈreɪʃən/",
    tags: ["第1600句", "系统恢复", "★★★★★"],
    when: "交接完成后的最终确认：制冷系统所有组件正常，告警已处理，系统准备好持续正常运行。",
    words: [
      { w: "ready for", ipa: "/ˈrɛdi fɔːr/", pos: "形容词短语", cn: "准备好；已就绪", memory: "ready = 准备好的；for = 为了。\nready for = 为……做好准备。\nready for normal operation = 准备好正常运行。\nready for maintenance = 准备好维护。", phonics: "ready 读 /ˈrɛdi/，for 读 /fɔːr/。", collocations: [["ready for operation", "准备好运行"], ["ready for maintenance", "准备好维护"], ["ready for inspection", "准备好检查"]], examples: [["The system is ready for operation.", "系统已准备好运行。"], ["The generator is ready for load test.", "发电机已准备好进行负载测试。"]] },
      { w: "normal operation", ipa: "/ˈnɔːrməl ˌɒpəˈreɪʃən/", pos: "名词短语", cn: "正常运行", memory: "normal = 正常的；operation = 运行/操作。\nnormal operation = 正常运行，设备在设计参数范围内工作。\nready for normal operation = 准备好正常运行。", phonics: "normal 读 /ˈnɔːrməl/，operation 读 /ˌɒpəˈreɪʃən/。", collocations: [["normal operation", "正常运行"], ["resume normal operation", "恢复正常运行"], ["return to normal operation", "回到正常运行"]], examples: [["Resume normal operation.", "恢复正常运行。"], ["The system is in normal operation.", "系统处于正常运行状态。"]] },
    ],
    phrases: [
      { p: "ready for normal operation", ipa: "/ˈrɛdi fɔːr ˈnɔːrməl ˌɒpəˈreɪʃən/", cn: "准备好正常运行", why: "ready + for + normal + operation = 准备好正常运行。表示系统已完成所有检查和处理，可以持续正常运行。" },
    ],
    grammar: [
      { q: "is ready for 和 has resumed 有什么区别？", a: "is ready for = 准备好（状态，表示已具备条件）\nhas resumed = 已恢复（动作，表示已经开始）\n✅ The system is ready for normal operation.（系统已准备好正常运行 → 状态就绪）\n✅ The system has resumed normal operation.（系统已恢复正常运行 → 动作已执行）\n交接结束时通常先确认 ready，然后宣布 resumed。" },
    ],
    pattern: "The + 系统 + is ready for normal operation",
    patternExamples: [
      { en: "The power system is ready for normal operation.", cn: "电力系统已恢复正常运行。", words: [{ w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The fire protection system is ready for normal operation.", cn: "消防系统已恢复正常运行。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "protection", ipa: "/prəˈtɛkʃən/", cn: "保护", phonics: "pro 读 /prə/，tection 读 /tɛkʃən/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "The security system is ready for normal operation.", cn: "安防系统已恢复正常运行。", words: [{ w: "security", ipa: "/sɪˈkjʊrɪti/", cn: "安防", phonics: "se 读 /sɪ/，curity 读 /kjʊrɪti/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "制冷系统交接完成的最终确认清单：\n① ✅ 所有CRAC/CRAH运行正常\n② ✅ 冷冻水系统温度和压力正常\n③ ✅ 机房温湿度在允许范围内\n④ ✅ 加湿器/除湿器运行正常\n⑤ ✅ 无活跃告警\n⑥ ✅ 维护记录已更新\n⑦ ✅ 结论：The cooling system is ready for normal operation.\n\n交接签字 → 完成！",
    pronunciation: "ready 读 /ˈrɛdi/，重音在第一音节。\noperation 读 /ˌɒpəˈreɪʃən/，重音在 ra 上。",
    quiz: [
      { q: "电力系统已恢复正常运行，怎么说？", a: "The power system is ready for normal operation." },
      { q: "CRAC、CRAH、冷冻水系统交接的完整流程是什么？", a: "CRAC/CRAH/冷冻水系统交接完整流程：\n① 检查CRAC/CRAH运行状态 → ② 检查冷冻水系统温度/压力 → ③ 检查送风/回风温度 → ④ 检查机房温湿度 → ⑤ 检查压缩机/风机/过滤器 → ⑥ 检查加湿器/除湿器/排水 → ⑦ 确认无活跃告警 → ⑧ 更新维护记录 → ⑨ 宣布系统ready for normal operation。" },
    ],
  },
];

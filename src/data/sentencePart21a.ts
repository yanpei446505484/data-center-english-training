// EXPORTS: MOCK_SENTENCES_PART21A

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART21A: ISentence[] = [
  {
    id: 1481,
    en: "Please check the transformer operating status.",
    cn: "请检查变压器运行状态。",
    ipa: "/pliːz tʃɛk ðə trænsˈfɔːrmər ˈɒpəreɪtɪŋ ˈstætəs/",
    tags: ["第1481句", "变压器", "★★★★★"],
    when: "变压器是数据中心配电系统的核心设备，负责将中压降至低压。交接时首先检查变压器整体运行状态。",
    words: [
      { w: "transformer", ipa: "/trænsˈfɔːrmər/", pos: "名词", cn: "变压器", memory: "transform = 变换；-er = 设备。\ntransformer = 变压器，将电压从一个等级变换到另一个等级。\n数据中心通常有两台或多台变压器冗余配置。", phonics: "trans 读 /træns/，former 读 /ˈfɔːrmər/，重音在第二音节。", collocations: [["power transformer", "电力变压器"], ["transformer station", "变电站"], ["transformer room", "变压器室"]], examples: [["The transformer is running normally.", "变压器运行正常。"], ["Enter the transformer room.", "进入变压器室。"]] },
      { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", pos: "形容词/动词现在分词", cn: "运行中的", memory: "operate = 运行/操作。\noperating status = 运行状态。\noperating temperature = 运行温度。", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/。", collocations: [["operating status", "运行状态"], ["operating temperature", "运行温度"], ["operating load", "运行负载"]], examples: [["What is the operating status?", "运行状态是什么？"], ["Check the operating temperature.", "检查运行温度。"]] },
    ],
    phrases: [
      { p: "transformer operating status", ipa: "/trænsˈfɔːrmər ˈɒpəreɪtɪŋ ˈstætəs/", cn: "变压器运行状态", why: "transformer + operating + status = 变压器运行状态。交接时必须首先确认变压器的整体运行状况。" },
    ],
    grammar: [
      { q: "check 和 inspect 有什么区别？", a: "check = 检查/查看（快速确认状态）\ninspect = 检验/检查（详细的物理检查）\n✅ Please check the transformer status.（请检查变压器状态 → 查看监控数据）\n✅ Please inspect the transformer.（请检查变压器 → 现场巡检设备）\n交接时用 check，因为是通过监控系统远程查看。" },
    ],
    pattern: "Please check the + 设备 + operating status",
    patternExamples: [
      { en: "Please check the generator operating status.", cn: "请检查发电机运行状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "Please check the UPS operating status.", cn: "请检查UPS运行状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "Please check the cooling system operating status.", cn: "请检查冷却系统运行状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
    ],
    thinking: "变压器是数据中心配电系统的核心。交接检查顺序：① 整体运行状态（本句）→ ② 各台变压器状态（1482-1483）→ ③ 负载率（1484-1486）→ ④ 电压（1487-1489）→ ⑤ 电流（1490）。\n数据中心通常采用 N+1 冗余配置，至少两台变压器互为备用。",
    pronunciation: "transformer 的 trans 读 /træns/，不是 /trɑːns/。\noperating 的 o 读 /ɒ/，重音在 op 上。",
    quiz: [
      { q: "请检查发电机运行状态，怎么说？", a: "Please check the generator operating status." },
      { q: "数据中心为什么需要多台变压器？", a: "数据中心采用 N+1 或 2N 冗余配置，确保任何一台变压器故障时，其他变压器可以接管全部负载，保证供电连续性。" },
    ],
  },
  {
    id: 1482,
    en: "Transformer No.1 is operating normally.",
    cn: "1号变压器运行正常。",
    ipa: "/trænsˈfɔːrmər ˌnʌmˈwʌn ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1482句", "变压器状态", "★★★★★"],
    when: "确认1号变压器运行状态正常。No.1 是 Number 1 的缩写形式，在工程场合广泛使用。",
    words: [
      { w: "normally", ipa: "/ˈnɔːrməli/", pos: "副词", cn: "正常地", memory: "normal = 正常的；-ly = 副词后缀。\nnormally = 正常地/按常规。\noperating normally = 正常运行。", phonics: "nor 读 /nɔːr/，mally 读 /məli/。", collocations: [["operating normally", "正常运行"], ["functioning normally", "正常运作"]], examples: [["All systems are operating normally.", "所有系统正常运行。"], ["The equipment is functioning normally.", "设备正常运作。"]] },
    ],
    phrases: [
      { p: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "运行正常", why: "operating + normally = 正常运行。这是汇报设备状态的标准用语。" },
    ],
    grammar: [
      { q: "is operating 和 operates 有什么区别？", a: "is operating = 正在运行（现在进行时，强调当前状态）\noperates = 运行（一般现在时，描述常态）\n✅ Transformer No.1 is operating normally.（1号变压器正在正常运行 → 汇报当前状态）\n✅ The transformer operates 24/7.（变压器24小时运行 → 描述常态）\n交接用进行时，关注'此刻的运行状态'。" },
    ],
    pattern: "设备 + No.X + is operating normally",
    patternExamples: [
      { en: "Generator No.1 is operating normally.", cn: "1号发电机运行正常。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "UPS No.2 is operating normally.", cn: "2号UPS运行正常。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "Chiller No.3 is operating normally.", cn: "3号冷水机组运行正常。", words: [{ w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "汇报变压器状态时的标准格式：设备编号 + 状态。\n① Transformer No.1 is operating normally（正常 → 最佳）\n② Transformer No.1 has an alarm（有告警 → 需进一步排查）\n③ Transformer No.1 is offline（离线 → 需确认原因）",
    pronunciation: "No.1 读作 number one /ˌnʌmˈwʌn/，不要读成 N-O 字母拼读。\nnormally 的 r 在美式英语中发音，英式中不发音。",
    quiz: [
      { q: "2号发电机运行正常，怎么说？", a: "Generator No.2 is operating normally." },
    ],
  },
  {
    id: 1483,
    en: "Transformer No.2 is operating normally.",
    cn: "2号变压器运行正常。",
    ipa: "/trænsˈfɔːrmər ˌnʌmˈtuː ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1483句", "变压器状态", "★★★★★"],
    when: "确认2号变压器运行状态正常。数据中心通常采用双路供电，两台变压器互为备用。",
    words: [
      { w: "No.2", ipa: "/ˌnʌmˈtuː/", pos: "编号", cn: "2号", memory: "No. = Number 的缩写。\nNo.2 = 2号。\n在工程场合，设备编号用 No.X 表示。", phonics: "读作 number two。", collocations: [["Transformer No.2", "2号变压器"], ["Generator No.2", "2号发电机"]], examples: [["Please check Transformer No.2.", "请检查2号变压器。"], ["No.2 is offline.", "2号已离线。"]] },
    ],
    phrases: [
      { p: "Transformer No.2", ipa: "/trænsˈfɔːrmər ˌnʌmˈtuː/", cn: "2号变压器", why: "transformer + No.2 = 2号变压器。设备编号在冗余系统中非常重要，必须准确标识。" },
    ],
    grammar: [
      { q: "为什么两台变压器都要检查？", a: "数据中心采用冗余设计（N+1 或 2N），每台变压器独立承担一部分负载。\n两台都正常 = 系统完全冗余\n一台异常 = 失去冗余保护，需立即处理\n交接时必须逐台确认，不能只看总体状态。" },
    ],
    pattern: "Transformer No.X + is operating normally",
    patternExamples: [
      { en: "Transformer No.1 is operating normally.", cn: "1号变压器运行正常。", words: [{ w: "transformer", ipa: "/trænsˈfɔːrmər/", cn: "变压器", phonics: "trans 读 /træns/，former 读 /fɔːrmər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "Transformer No.3 is operating normally.", cn: "3号变压器运行正常。", words: [{ w: "transformer", ipa: "/trænsˈfɔːrmər/", cn: "变压器", phonics: "trans 读 /træns/，former 读 /fɔːrmər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "两台变压器的状态组合：\n① 两台都正常 → 系统完全冗余，最佳状态\n② 一台正常一台异常 → 失去冗余，需立即处理异常变压器\n③ 两台都异常 → 供电中断风险，紧急情况\n交接时必须分别报告每台变压器的状态。",
    pronunciation: "No.2 读作 number two /ˌnʌmˈtuː/。\ntwo 的 w 读 /w/，不是 /v/。",
    quiz: [
      { q: "两台变压器都正常，怎么用一句话汇报？", a: "Both transformers are operating normally.（两台变压器都运行正常。）" },
    ],
  },
  {
    id: 1484,
    en: "Please check the transformer load.",
    cn: "请检查变压器负载。",
    ipa: "/pliːz tʃɛk ðə trænsˈfɔːrmər loʊd/",
    tags: ["第1484句", "变压器负载", "★★★★★"],
    when: "检查变压器当前负载率，确保不超过额定容量。负载率是变压器运行的重要指标。",
    words: [
      { w: "load", ipa: "/loʊd/", pos: "名词", cn: "负载；负荷", memory: "load = 负载/负荷。\n在电气工程中，load = 设备消耗的电功率。\ntransformer load = 变压器负载（通常用百分比表示）。\nload rate = 负载率。", phonics: "load 读 /loʊd/，与 road 押韵。", collocations: [["transformer load", "变压器负载"], ["load rate", "负载率"], ["full load", "满载"], ["overload", "过载"]], examples: [["What is the current load?", "当前负载是多少？"], ["The load is at 50 percent.", "负载为50%。"]] },
    ],
    phrases: [
      { p: "transformer load", ipa: "/trænsˈfɔːrmər loʊd/", cn: "变压器负载", why: "transformer + load = 变压器负载。负载率反映变压器当前的工作强度，通常不应超过80%以保证安全裕度。" },
    ],
    grammar: [
      { q: "load 和 capacity 有什么区别？", a: "load = 负载（当前实际消耗的功率）\ncapacity = 容量（设备能承受的最大功率）\nload rate = load / capacity × 100%\n✅ The load is 500 kW.（负载是500千瓦 → 当前值）\n✅ The capacity is 1000 kVA.（容量是1000千伏安 → 额定值）\n负载率 = 500/1000 = 50%。" },
    ],
    pattern: "Please check the + 设备 + load",
    patternExamples: [
      { en: "Please check the generator load.", cn: "请检查发电机负载。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
      { en: "Please check the UPS load.", cn: "请检查UPS负载。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
      { en: "Please check the circuit load.", cn: "请检查回路负载。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "circuit", ipa: "/ˈsɜːrkɪt/", cn: "电路", phonics: "cir 读 /sɜːr/，cuit 读 /kɪt/" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
    ],
    thinking: "变压器负载率是交接的关键指标：\n- < 60%：轻载，正常\n- 60-80%：中等负载，正常\n- 80-90%：重载，需关注\n- > 90%：过载风险，需采取措施\n数据中心通常将负载率控制在80%以下，保留20%的安全裕度。",
    pronunciation: "load 读 /loʊd/，不要读成 /luːd/。\ntransformer 的 r 在美式英语中发音。",
    quiz: [
      { q: "请检查UPS负载，怎么说？", a: "Please check the UPS load." },
      { q: "变压器负载率一般控制在多少以下？", a: "变压器负载率一般控制在80%以下，保留20%的安全裕度。超过80%属于重载，需要关注散热和容量规划。" },
    ],
  },
  {
    id: 1485,
    en: "Transformer No.1 is operating at forty-eight percent load.",
    cn: "1号变压器当前负载率为48%。",
    ipa: "/trænsˈfɔːrmər ˌnʌmˈwʌn ɪz ˈɒpəreɪtɪŋ æt ˈfɔːrti eɪt pərˈsɛnt loʊd/",
    tags: ["第1485句", "变压器负载", "★★★★★"],
    when: "汇报1号变压器的具体负载率数值。48%属于轻载范围，运行状态良好。",
    words: [
      { w: "percent", ipa: "/pərˈsɛnt/", pos: "名词/形容词", cn: "百分比", memory: "per = 每；cent = 百。\npercent = 百分之...。\n48 percent = 48%。\n在口语中也可以说 forty-eight percent。", phonics: "per 读 /pər/，cent 读 /sɛnt/。", collocations: [["load percent", "负载百分比"], ["efficiency percent", "效率百分比"]], examples: [["The load is at 48 percent.", "负载为48%。"], ["Efficiency is 95 percent.", "效率为95%。"]] },
      { w: "at", ipa: "/æt/", pos: "介词", cn: "在...（水平/比率）", memory: "at 在这里表示'处于某个水平/比率'。\noperating at 48% load = 在48%负载下运行。\nrunning at full speed = 全速运行。", phonics: "at 读 /æt/。", collocations: [["operating at", "运行在"], ["running at", "运行在"]], examples: [["Operating at 50% load.", "在50%负载下运行。"], ["Running at full capacity.", "满容量运行。"]] },
    ],
    phrases: [
      { p: "operating at ... percent load", ipa: "/ˈɒpəreɪtɪŋ æt pərˈsɛnt loʊd/", cn: "在...%负载下运行", why: "operating + at + 百分比 + load = 在某个负载百分比下运行。这是汇报负载率的标准句型。" },
    ],
    grammar: [
      { q: "为什么用 at 而不是 on 或 in？", a: "at = 在某个具体的点/水平上\non = 在某个表面上\nin = 在某个范围内\n✅ operating at 48% load（在48%负载这个点上运行）\n❌ operating on 48% load（不自然）\n❌ operating in 48% load（不自然）\n表示具体的数值/比率时用 at。" },
    ],
    pattern: "设备 + is operating at + 数字 + percent load",
    patternExamples: [
      { en: "Generator No.1 is operating at 60 percent load.", cn: "1号发电机当前负载率为60%。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
      { en: "UPS No.2 is operating at 75 percent load.", cn: "2号UPS当前负载率为75%。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
      { en: "The circuit is operating at 90 percent load.", cn: "该回路当前负载率为90%。", words: [{ w: "circuit", ipa: "/ˈsɜːrkɪt/", cn: "电路", phonics: "cir 读 /sɜːr/，cuit 读 /kɪt/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
    ],
    thinking: "48%负载率的含义：\n- 变压器额定容量的48%正在被使用\n- 还有52%的裕度\n- 属于轻载范围，运行状态良好\n- 冗余能力充足\n\n交接时需要同时汇报两台变压器的负载率，以便评估整体供电裕度。",
    pronunciation: "forty-eight 读 /ˈfɔːrti eɪt/，forty 的 t 要发音。\npercent 的重音在第二音节 /pərˈsɛnt/。",
    quiz: [
      { q: "2号发电机负载率为60%，怎么说？", a: "Generator No.2 is operating at sixty percent load." },
      { q: "48%负载率意味着什么？", a: "48%负载率意味着变压器正在使用其额定容量的48%，还有52%的裕度。属于轻载范围，运行状态良好，冗余能力充足。" },
    ],
  },
  {
    id: 1486,
    en: "Transformer No.2 is operating at forty-six percent load.",
    cn: "2号变压器当前负载率为46%。",
    ipa: "/trænsˈfɔːrmər ˌnʌmˈtuː ɪz ˈɒpəreɪtɪŋ æt ˈfɔːrti sɪks pərˈsɛnt loʊd/",
    tags: ["第1486句", "变压器负载", "★★★★★"],
    when: "汇报2号变压器的负载率。两台变压器负载接近（48%和46%），说明负载分配均衡。",
    words: [
      { w: "forty-six", ipa: "/ˈfɔːrti sɪks/", pos: "数词", cn: "四十六", memory: "forty = 四十；six = 六。\nforty-six = 46。\n注意 forty 的拼写，不是 fourty。", phonics: "forty 读 /ˈfɔːrti/，six 读 /sɪks/。", collocations: [["forty-six percent", "46%"]], examples: [["The load is forty-six percent.", "负载为46%。"]] },
    ],
    phrases: [
      { p: "forty-six percent load", ipa: "/ˈfɔːrti sɪks pərˈsɛnt loʊd/", cn: "46%负载", why: "forty-six + percent + load = 46%负载。两台变压器负载率接近说明负载均衡分配。" },
    ],
    grammar: [
      { q: "负载均衡为什么重要？", a: "负载均衡（load balance）确保每台变压器承担相近的工作量：\n- 均衡（如48%和46%）→ 两台变压器磨损均匀，寿命一致\n- 不均衡（如80%和20%）→ 一台过载一台闲置，效率低且加速老化\n数据中心设计时会尽量使两台变压器的负载保持均衡。" },
    ],
    pattern: "Transformer No.X + is operating at + 数字 + percent load",
    patternExamples: [
      { en: "Transformer No.1 is operating at 50 percent load.", cn: "1号变压器当前负载率为50%。", words: [{ w: "transformer", ipa: "/trænsˈfɔːrmər/", cn: "变压器", phonics: "trans 读 /træns/，former 读 /fɔːrmər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
      { en: "Transformer No.2 is operating at 55 percent load.", cn: "2号变压器当前负载率为55%。", words: [{ w: "transformer", ipa: "/trænsˈfɔːrmər/", cn: "变压器", phonics: "trans 读 /træns/，former 读 /fɔːrmər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
    ],
    thinking: "两台变压器负载对比：\n- 1号：48%负载\n- 2号：46%负载\n- 差异仅2%，负载均衡分配\n- 总负载约94%，平均分配在两台变压器上\n\n如果一台变压器故障退出运行，另一台需要承担全部负载（约94%），仍在安全范围内。",
    pronunciation: "forty-six 的 forty 读 /ˈfɔːrti/，不要读成 /ˈfɔːrti/ 的 fourty（拼写错误）。\nsix 读 /sɪks/。",
    quiz: [
      { q: "两台变压器负载均衡是什么意思？", a: "负载均衡（load balance）是指两台或多台变压器承担相近的负载量。例如1号48%、2号46%，差异很小，说明负载均衡分配，两台变压器磨损均匀。" },
    ],
  },
  {
    id: 1487,
    en: "Please check the transformer input voltage.",
    cn: "请检查变压器输入电压。",
    ipa: "/pliːz tʃɛk ðə trænsˈfɔːrmər ˈɪnpʊt ˈvoʊltɪdʒ/",
    tags: ["第1487句", "变压器电压", "★★★★★"],
    when: "检查变压器的输入侧电压，即中压侧电压。输入电压的稳定是变压器正常工作的前提。",
    words: [
      { w: "input", ipa: "/ˈɪnpʊt/", pos: "名词/形容词", cn: "输入", memory: "in = 进入；put = 放。\ninput = 输入（侧）。\noutput = 输出（侧）。\n变压器有输入侧（中压侧）和输出侧（低压侧）。", phonics: "in 读 /ɪn/，put 读 /pʊt/。", collocations: [["input voltage", "输入电压"], ["input current", "输入电流"], ["input power", "输入功率"]], examples: [["Check the input voltage.", "检查输入电压。"], ["The input is stable.", "输入稳定。"]] },
      { w: "voltage", ipa: "/ˈvoʊltɪdʒ/", pos: "名词", cn: "电压", memory: "volt = 伏特（电压单位）；-age = 名词后缀。\nvoltage = 电压。\n数据中心常见电压等级：10kV（中压）、400V（低压）、230V（单相）。", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/。", collocations: [["input voltage", "输入电压"], ["output voltage", "输出电压"], ["rated voltage", "额定电压"]], examples: [["What is the voltage?", "电压是多少？"], ["The voltage is normal.", "电压正常。"]] },
    ],
    phrases: [
      { p: "transformer input voltage", ipa: "/trænsˈfɔːrmər ˈɪnpʊt ˈvoʊltɪdʒ/", cn: "变压器输入电压", why: "transformer + input + voltage = 变压器输入电压。输入电压来自中压电网，通常为10kV或35kV。" },
    ],
    grammar: [
      { q: "input 和 output 在变压器中指什么？", a: "input = 输入侧（电源侧/中压侧）\noutput = 输出侧（负载侧/低压侧）\n\n变压器工作流程：\n中压电网 → [input 输入] → 变压器 → [output 输出] → 低压配电\n\n例如：10kV（输入）→ 变压器 → 400V（输出）" },
    ],
    pattern: "Please check the + 设备 + input/output + 参数",
    patternExamples: [
      { en: "Please check the UPS input voltage.", cn: "请检查UPS输入电压。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }] },
      { en: "Please check the generator output voltage.", cn: "请检查发电机输出电压。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }] },
      { en: "Please check the transformer output current.", cn: "请检查变压器输出电流。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "transformer", ipa: "/trænsˈfɔːrmər/", cn: "变压器", phonics: "trans 读 /træns/，former 读 /fɔːrmər/" }] },
    ],
    thinking: "变压器输入电压检查要点：\n- 正常范围：额定电压 ±5%（如10kV ± 500V）\n- 输入电压过低 → 输出电压也低 → 设备可能无法正常工作\n- 输入电压过高 → 输出电压也高 → 可能损坏设备\n- 输入电压不稳定 → 可能是电网波动\n\n交接时输入电压正常说明电网供电稳定。",
    pronunciation: "input 的 put 读 /pʊt/，不是 /pʌt/。\nvoltage 的 o 读 /oʊ/，重音在第一音节。",
    quiz: [
      { q: "请检查UPS输入电压，怎么说？", a: "Please check the UPS input voltage." },
      { q: "变压器输入电压的正常范围是多少？", a: "变压器输入电压的正常范围通常是额定电压的 ±5%。例如10kV变压器，正常范围为9.5kV-10.5kV。超出此范围需要联系电网公司排查。" },
    ],
  },
  {
    id: 1488,
    en: "Please check the transformer output voltage.",
    cn: "请检查变压器输出电压。",
    ipa: "/pliːz tʃɛk ðə trænsˈfɔːrmər ˈaʊtpʊt ˈvoʊltɪdʒ/",
    tags: ["第1488句", "变压器电压", "★★★★★"],
    when: "检查变压器的输出侧电压，即低压侧电压。输出电压直接影响下游设备的正常运行。",
    words: [
      { w: "output", ipa: "/ˈaʊtpʊt/", pos: "名词/形容词", cn: "输出", memory: "out = 出去；put = 放。\noutput = 输出（侧）。\n与 input（输入）相对。\n变压器输出电压通常为400V（三相）或230V（单相）。", phonics: "out 读 /aʊt/，put 读 /pʊt/。", collocations: [["output voltage", "输出电压"], ["output current", "输出电流"], ["output power", "输出功率"]], examples: [["Check the output voltage.", "检查输出电压。"], ["The output is 400V.", "输出为400V。"]] },
    ],
    phrases: [
      { p: "transformer output voltage", ipa: "/trænsˈfɔːrmər ˈaʊtpʊt ˈvoʊltɪdʒ/", cn: "变压器输出电压", why: "transformer + output + voltage = 变压器输出电压。输出电压通常为400V，供给数据中心IT设备和冷却系统。" },
    ],
    grammar: [
      { q: "为什么要同时检查输入和输出电压？", a: "同时检查输入和输出电压可以判断变压器的变比是否正常：\n- 输入正常 + 输出正常 → 变压器正常\n- 输入正常 + 输出异常 → 变压器可能有故障（如分接开关问题）\n- 输入异常 + 输出异常 → 问题在电网侧\n\n通过对比输入输出，可以快速定位问题来源。" },
    ],
    pattern: "Please check the + 设备 + output + 参数",
    patternExamples: [
      { en: "Please check the UPS output voltage.", cn: "请检查UPS输出电压。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }] },
      { en: "Please check the generator output frequency.", cn: "请检查发电机输出频率。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "Please check the inverter output waveform.", cn: "请检查逆变器输出波形。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "变压器输出电压检查要点：\n- 正常范围：400V ±5%（即380V-420V）\n- 输出电压直接影响所有下游设备\n- 电压过低 → IT设备可能自动关机\n- 电压过高 → 可能损坏设备电源\n- 三相电压应均衡（各相差异 < 2%）",
    pronunciation: "output 的 out 读 /aʊt/，不要读成 /aʊt/ 的 our。\nvoltage 读 /ˈvoʊltɪdʒ/。",
    quiz: [
      { q: "请检查发电机输出电压，怎么说？", a: "Please check the generator output voltage." },
    ],
  },
  {
    id: 1489,
    en: "The transformer voltage is within the normal range.",
    cn: "变压器电压正常。",
    ipa: "/ðə trænsˈfɔːrmər ˈvoʊltɪdʒ ɪz wɪˈðɪn ðə ˈnɔːrməl reɪndʒ/",
    tags: ["第1489句", "变压器电压", "★★★★★"],
    when: "确认变压器电压（包括输入和输出）都在正常范围内，是交接时的理想结论。",
    words: [
      { w: "within", ipa: "/wɪˈðɪn/", pos: "介词", cn: "在...范围内", memory: "with = 与；in = 在...内。\nwithin = 在...范围之内。\nwithin the normal range = 在正常范围内。\nwithin 强调不超出某个界限。", phonics: "with 读 /wɪð/，in 读 /ɪn/。", collocations: [["within range", "在范围内"], ["within limits", "在限度内"], ["within specification", "在规格内"]], examples: [["The value is within range.", "该值在范围内。"], ["Temperature is within limits.", "温度在限度内。"]] },
      { w: "range", ipa: "/reɪndʒ/", pos: "名词", cn: "范围", memory: "range = 范围/区间。\nnormal range = 正常范围。\noperating range = 运行范围。\n每个电气参数都有其正常范围。", phonics: "range 读 /reɪndʒ/，与 change 押韵。", collocations: [["normal range", "正常范围"], ["operating range", "运行范围"], ["voltage range", "电压范围"]], examples: [["What is the normal range?", "正常范围是什么？"], ["It is out of range.", "超出范围了。"]] },
    ],
    phrases: [
      { p: "within the normal range", ipa: "/wɪˈðɪn ðə ˈnɔːrməl reɪndʒ/", cn: "在正常范围内", why: "within + the + normal + range = 在正常范围内。这是确认参数合格的标准用语。" },
    ],
    grammar: [
      { q: "within 和 in 有什么区别？", a: "within = 在...范围之内（强调不超出边界）\nin = 在...里面（一般性的位置描述）\n✅ within the normal range（在正常范围内 → 强调符合标准）\n✅ in the normal range（在正常范围里 → 较口语化）\n工程场合更常用 within，更精确。" },
    ],
    pattern: "参数 + is within the normal range",
    patternExamples: [
      { en: "The temperature is within the normal range.", cn: "温度在正常范围内。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The current is within the normal range.", cn: "电流在正常范围内。", words: [{ w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }, { w: "range", ipa: "/reɪndʒ/", cn: "范围", phonics: "range 读 /reɪndʒ/" }] },
      { en: "The frequency is within the normal range.", cn: "频率在正常范围内。", words: [{ w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }, { w: "range", ipa: "/reɪndʒ/", cn: "范围", phonics: "range 读 /reɪndʒ/" }] },
    ],
    thinking: "电压正常范围参考值：\n- 输入电压（中压侧）：10kV ±5%（9.5kV-10.5kV）\n- 输出电压（低压侧）：400V ±5%（380V-420V）\n- 三相电压差异：< 2%\n\n确认电压正常后，继续检查电流（下一句）。",
    pronunciation: "within 的 th 读 /ð/（浊音），不是 /θ/（清音）。\nrange 读 /reɪndʒ/，不要读成 /rændʒ/。",
    quiz: [
      { q: "温度在正常范围内，怎么说？", a: "The temperature is within the normal range." },
      { q: "变压器输出电压的正常范围是多少？", a: "变压器输出电压的正常范围通常是400V ±5%，即380V-420V。三相电压应均衡，各相差异不超过2%。" },
    ],
  },
  {
    id: 1490,
    en: "Please check the transformer current.",
    cn: "请检查变压器电流。",
    ipa: "/pliːz tʃɛk ðə trænsˈfɔːrmər ˈkʌrənt/",
    tags: ["第1490句", "变压器电流", "★★★★★"],
    when: "检查变压器电流，电流与负载直接相关。电流过大可能导致过热和保护动作。",
    words: [
      { w: "current", ipa: "/ˈkʌrənt/", pos: "名词", cn: "电流", memory: "current = 电流/当前的。\n在电气工程中 current = 电流（单位：安培A）。\ncurrent 也可以作形容词表示'当前的'。\n电流 = 功率 / 电压。", phonics: "cur 读 /kʌr/，rent 读 /rənt/，重音在第一音节。", collocations: [["load current", "负载电流"], ["rated current", "额定电流"], ["inrush current", "涌流"]], examples: [["What is the current?", "电流是多少？"], ["The current is normal.", "电流正常。"]] },
    ],
    phrases: [
      { p: "transformer current", ipa: "/trænsˈfɔːrmər ˈkʌrənt/", cn: "变压器电流", why: "transformer + current = 变压器电流。电流大小直接反映变压器的负载情况，是交接检查的重要参数。" },
    ],
    grammar: [
      { q: "current 和 voltage 的关系是什么？", a: "voltage（电压）和 current（电流）是电气系统的两个基本参数：\n- 电压 = 电势差（推动电流的'压力'）\n- 电流 = 电荷流动速率（实际的'流量'）\n- 功率 = 电压 × 电流\n\n变压器输入侧和输出侧的电压电流关系：\n输入：高电压 × 低电流\n输出：低电压 × 高电流\n功率守恒（忽略损耗）。" },
    ],
    pattern: "Please check the + 设备 + current",
    patternExamples: [
      { en: "Please check the generator current.", cn: "请检查发电机电流。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "Please check the circuit current.", cn: "请检查回路电流。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "circuit", ipa: "/ˈsɜːrkɪt/", cn: "电路", phonics: "cir 读 /sɜːr/，cuit 读 /kɪt/" }] },
      { en: "Please check the motor current.", cn: "请检查电机电流。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "变压器电流检查要点：\n- 电流与负载成正比：负载越大，电流越大\n- 额定电流 = 额定容量 / 电压\n- 电流超过额定值 → 过载 → 可能触发保护跳闸\n- 三相电流应均衡（差异 < 10%）\n- 电流突然增大 → 可能有短路或大设备启动\n\n交接时电流正常说明负载在安全范围内。",
    pronunciation: "current 的 cur 读 /kʌr/，不要读成 /kɜːr/。\n注意 current（电流）和 current（当前的）是同形异义词。",
    quiz: [
      { q: "请检查发电机电流，怎么说？", a: "Please check the generator current." },
      { q: "变压器三相电流不均衡可能是什么原因？", a: "三相电流不均衡可能原因：① 负载分配不均（某相接入过多设备）② 某相线路接触不良 ③ 变压器绕组故障 ④ 中性线断路。差异超过10%需要排查。" },
    ],
  },
  {
    id: 1491,
    en: "Please check the winding temperature.",
    cn: "请检查绕组温度。",
    ipa: "/pliːz tʃɛk ðə ˈwaɪndɪŋ ˈtɛmpərətʃər/",
    tags: ["第1491句", "温度检查", "★★★★★"],
    when: "绕组温度是变压器最重要的温度参数，直接反映变压器内部发热情况。绕组温度过高会加速绝缘老化。",
    words: [
      { w: "winding", ipa: "/ˈwaɪndɪŋ/", pos: "名词", cn: "绕组；线圈", memory: "wind = 缠绕；-ing = 名词后缀。\nwinding = 绕组/线圈。\n变压器有高压绕组和低压绕组。\n绕组温度是变压器最热点的温度。", phonics: "wind 读 /waɪnd/（缠绕），不要读成 /wɪnd/（风）。", collocations: [["winding temperature", "绕组温度"], ["high-voltage winding", "高压绕组"], ["low-voltage winding", "低压绕组"]], examples: [["The winding temperature is 85 degrees.", "绕组温度为85度。"], ["Check the winding insulation.", "检查绕组绝缘。"]] },
      { w: "temperature", ipa: "/ˈtɛmpərətʃər/", pos: "名词", cn: "温度", memory: "temperature = 温度。\n常见温度参数：winding temperature（绕组温度）/ core temperature（铁芯温度）/ oil temperature（油温）/ ambient temperature（环境温度）。", phonics: "tem 读 /tɛm/，per 读 /pər/，ature 读 /ətʃər/。", collocations: [["winding temperature", "绕组温度"], ["oil temperature", "油温"], ["ambient temperature", "环境温度"]], examples: [["What is the temperature?", "温度是多少？"], ["Temperature is rising.", "温度在上升。"]] },
    ],
    phrases: [
      { p: "winding temperature", ipa: "/ˈwaɪndɪŋ ˈtɛmpərətʃər/", cn: "绕组温度", why: "winding + temperature = 绕组温度。绕组温度是变压器内部最热点的温度，通常比油温高10-20°C。" },
    ],
    grammar: [
      { q: "winding 的发音为什么和 wind（风）不同？", a: "winding（绕组）来自动词 wind（缠绕），读 /waɪnd/，元音是 /aɪ/。\nwind（风）读 /wɪnd/，元音是 /ɪ/。\n两个词拼写相近但发音和含义完全不同：\n- wind /wɪnd/ = 风\n- wind /waɪnd/ = 缠绕 → winding = 绕组" },
    ],
    pattern: "Please check the + 部位 + temperature",
    patternExamples: [
      { en: "Please check the oil temperature.", cn: "请检查油温。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
      { en: "Please check the bearing temperature.", cn: "请检查轴承温度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
      { en: "Please check the ambient temperature.", cn: "请检查环境温度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
    ],
    thinking: "变压器温度参数体系：\n① 绕组温度（最高，反映内部发热）：正常 < 105°C\n② 油温（中间，反映散热情况）：正常 < 85°C\n③ 铁芯温度：正常 < 100°C\n④ 环境温度（参考基准）：通常 25-35°C\n\n绕组温度是最关键的参数，直接决定变压器的负载能力和绝缘寿命。",
    pronunciation: "winding 读 /ˈwaɪndɪŋ/，不要读成 /ˈwɪndɪŋ/（那是 wind 风的名词形式）。\ntemperature 有四个音节：tem-per-a-ture。",
    quiz: [
      { q: "请检查油温，怎么说？", a: "Please check the oil temperature." },
      { q: "变压器绕组温度一般不超过多少？", a: "变压器绕组温度一般不超过105°C（A级绝缘）。超过此温度会加速绝缘老化，缩短变压器寿命。干式变压器通常有温度保护设定在130°C跳闸。" },
    ],
  },
  {
    id: 1492,
    en: "Please check the core temperature.",
    cn: "请检查铁芯温度。",
    ipa: "/pliːz tʃɛk ðə kɔːr ˈtɛmpərətʃər/",
    tags: ["第1492句", "温度检查", "★★★★★"],
    when: "铁芯温度反映变压器磁芯的发热情况。铁芯过热可能表示存在铁损异常或局部短路。",
    words: [
      { w: "core", ipa: "/kɔːr/", pos: "名词", cn: "铁芯；核心", memory: "core = 核心/铁芯。\n变压器铁芯由硅钢片叠成，用于导磁。\ncore loss = 铁损（铁芯中的能量损耗）。\ncore temperature = 铁芯温度。", phonics: "core 读 /kɔːr/，与 door 押韵。", collocations: [["core temperature", "铁芯温度"], ["core loss", "铁损"], ["core saturation", "铁芯饱和"]], examples: [["The core temperature is normal.", "铁芯温度正常。"], ["Check the core insulation.", "检查铁芯绝缘。"]] },
    ],
    phrases: [
      { p: "core temperature", ipa: "/kɔːr ˈtɛmpərətʃər/", cn: "铁芯温度", why: "core + temperature = 铁芯温度。铁芯温度通常低于绕组温度，但高于环境温度。" },
    ],
    grammar: [
      { q: "绕组温度和铁芯温度哪个更重要？", a: "绕组温度更重要，因为：\n① 绕组温度直接决定绝缘寿命\n② 绕组是变压器最热的部位\n③ 温度保护通常基于绕组温度\n\n铁芯温度作为辅助监测：\n① 铁芯温度异常升高 → 可能存在铁损问题\n② 铁芯温度与绕组温度差异常 → 可能有局部故障" },
    ],
    pattern: "Please check the + 部件 + temperature",
    patternExamples: [
      { en: "Please check the winding temperature.", cn: "请检查绕组温度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
      { en: "Please check the cable temperature.", cn: "请检查电缆温度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
      { en: "Please check the bus bar temperature.", cn: "请检查母线温度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
    ],
    thinking: "变压器温度监测层次：\n① 绕组温度 → 最重要，决定绝缘寿命\n② 铁芯温度 → 辅助，监测铁损异常\n③ 油温 → 反映整体散热\n④ 环境温度 → 参考基准\n\n四个温度参数综合判断变压器的热状态。",
    pronunciation: "core 读 /kɔːr/，不要读成 /koʊr/。\ntemperature 的重音在第一音节 /ˈtɛmpərətʃər/。",
    quiz: [
      { q: "请检查母线温度，怎么说？", a: "Please check the bus bar temperature." },
    ],
  },
  {
    id: 1493,
    en: "Please check the transformer temperature controller.",
    cn: "请检查变压器温控器。",
    ipa: "/pliːz tʃɛk ðə trænsˈfɔːrmər ˈtɛmpərətʃər kənˈtroʊlər/",
    tags: ["第1493句", "温度检查", "★★★★★"],
    when: "温控器是变压器温度保护的核心设备，负责监测温度并在超温时启动冷却或发出告警。",
    words: [
      { w: "controller", ipa: "/kənˈtroʊlər/", pos: "名词", cn: "控制器", memory: "control = 控制；-er = 设备/人。\ncontroller = 控制器。\ntemperature controller = 温控器。\n温控器负责监测温度、启动风机、发出告警。", phonics: "con 读 /kən/，troller 读 /ˈtroʊlər/，重音在第二音节。", collocations: [["temperature controller", "温控器"], ["fan controller", "风机控制器"], ["PLC controller", "PLC控制器"]], examples: [["The controller is working.", "控制器正在工作。"], ["Check the controller settings.", "检查控制器设置。"]] },
    ],
    phrases: [
      { p: "temperature controller", ipa: "/ˈtɛmpərətʃər kənˈtroʊlər/", cn: "温控器", why: "temperature + controller = 温控器。温控器是变压器温度保护系统的核心，控制冷却风机启停和超温告警。" },
    ],
    grammar: [
      { q: "温控器有哪些功能？", a: "温控器主要功能：\n① 温度监测：实时显示绕组/铁芯温度\n② 风机控制：温度达到设定值时自动启动冷却风机\n③ 超温告警：温度超过警告值时发出告警\n④ 超温跳闸：温度超过危险值时触发保护跳闸\n⑤ 数据记录：记录温度历史数据" },
    ],
    pattern: "Please check the + 设备 + controller",
    patternExamples: [
      { en: "Please check the fan controller.", cn: "请检查风机控制器。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the pump controller.", cn: "请检查水泵控制器。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }] },
      { en: "Please check the HVAC controller.", cn: "请检查空调控制器。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "hvac", ipa: "/ˌeɪtʃˈviːˈeɪˈsiː/", cn: "暖通", phonics: "H-V-A-C 逐字母读" }] },
    ],
    thinking: "温控器检查要点：\n① 显示是否正常（无黑屏、无乱码）\n② 温度读数是否合理\n③ 风机启停设置是否正确\n④ 告警阈值是否设定正确\n⑤ 通信是否正常（数据能传到BMS）\n\n温控器故障 = 失去温度保护，是非常严重的问题。",
    pronunciation: "controller 的重音在第二音节 /kənˈtroʊlər/。\ntemperature 和 controller 连读时注意节奏。",
    quiz: [
      { q: "请检查风机控制器，怎么说？", a: "Please check the fan controller." },
    ],
  },
  {
    id: 1494,
    en: "The transformer temperature is normal.",
    cn: "变压器温度正常。",
    ipa: "/ðə trænsˈfɔːrmər ˈtɛmpərətʃər ɪz ˈnɔːrməl/",
    tags: ["第1494句", "温度检查", "★★★★★"],
    when: "确认变压器各项温度参数正常，是交接时的理想结论。温度正常说明变压器散热良好、负载合理。",
    words: [
      { w: "normal", ipa: "/ˈnɔːrməl/", pos: "形容词", cn: "正常的", memory: "normal = 正常的/标准的。\n在工程场合 normal = 在规定的正常范围内。\nabnormal = 异常的（ab- = 不/非）。", phonics: "nor 读 /nɔːr/，mal 读 /məl/。", collocations: [["normal temperature", "正常温度"], ["normal operation", "正常运行"], ["normal range", "正常范围"]], examples: [["Everything is normal.", "一切正常。"], ["The reading is normal.", "读数正常。"]] },
    ],
    phrases: [
      { p: "temperature is normal", ipa: "/ˈtɛmpərətʃər ɪz ˈnɔːrməl/", cn: "温度正常", why: "temperature + is + normal = 温度正常。这是交接时最常用的温度状态汇报用语。" },
    ],
    grammar: [
      { q: "正常 和 合格 有什么区别？", a: "normal = 正常的（在正常范围内运行）\nqualified = 合格的（满足某项标准）\n\n✅ The temperature is normal.（温度正常 → 运行状态描述）\n✅ The transformer is qualified.（变压器合格 → 通过检测/认证）\n\n交接时用 normal 描述运行状态，qualified 用于检测报告。" },
    ],
    pattern: "设备/参数 + is normal",
    patternExamples: [
      { en: "The voltage is normal.", cn: "电压正常。", words: [{ w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The current is normal.", cn: "电流正常。", words: [{ w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The pressure is normal.", cn: "压力正常。", words: [{ w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "变压器温度正常的含义：\n- 绕组温度 < 105°C\n- 铁芯温度 < 100°C\n- 油温 < 85°C（油浸式）\n- 冷却系统正常工作\n- 负载在合理范围内\n\n温度正常是变压器安全运行的重要指标。",
    pronunciation: "normal 的 nor 读 /nɔːr/，在美式英语中 r 发音。\ntemperature 快速口语中可简化为 /ˈtɛmprətʃər/。",
    quiz: [
      { q: "电压正常，怎么说？", a: "The voltage is normal." },
    ],
  },
  {
    id: 1495,
    en: "The cooling fans are operating normally.",
    cn: "冷却风机运行正常。",
    ipa: "/ðə ˈkuːlɪŋ fænz ɑːr ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1495句", "冷却系统", "★★★★★"],
    when: "确认变压器冷却风机正常运行。冷却风机是变压器散热的重要设备，确保温度不超标。",
    words: [
      { w: "cooling", ipa: "/ˈkuːlɪŋ/", pos: "形容词/名词", cn: "冷却的；冷却", memory: "cool = 冷却/凉的；-ing = 进行时/名词后缀。\ncooling = 冷却（系统）。\ncooling fan = 冷却风机。\ncooling system = 冷却系统。", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/。", collocations: [["cooling fan", "冷却风机"], ["cooling system", "冷却系统"], ["cooling capacity", "冷却能力"]], examples: [["The cooling system is on.", "冷却系统已启动。"], ["Check the cooling fans.", "检查冷却风机。"]] },
      { w: "fan", ipa: "/fæn/", pos: "名词", cn: "风机；风扇", memory: "fan = 风机/风扇。\n变压器冷却风机用于强制风冷散热。\n干式变压器通常配备多台冷却风机。\n复数：fans。", phonics: "fan 读 /fæn/，与 can 押韵。", collocations: [["cooling fan", "冷却风机"], ["exhaust fan", "排风机"], ["fan motor", "风机电机"]], examples: [["The fan is running.", "风机正在运行。"], ["Turn on the fan.", "启动风机。"]] },
    ],
    phrases: [
      { p: "cooling fans", ipa: "/ˈkuːlɪŋ fænz/", cn: "冷却风机", why: "cooling + fans = 冷却风机（复数）。干式变压器通常配备2-6台冷却风机，根据温度自动启停。" },
    ],
    grammar: [
      { q: "are operating 为什么用复数？", a: "fans 是复数（多台风机），所以动词用 are operating（复数形式）。\n✅ The cooling fans are operating normally.（多台风机 → are）\n✅ The cooling fan is operating normally.（一台风机 → is）\n主语和动词必须保持单复数一致。" },
    ],
    pattern: "设备（复数）+ are operating normally",
    patternExamples: [
      { en: "The pumps are operating normally.", cn: "水泵运行正常。", words: [{ w: "pumps", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The compressors are operating normally.", cn: "压缩机运行正常。", words: [{ w: "compressors", ipa: "/kəmˈprɛsər/", cn: "压缩机", phonics: "com 读 /kəm/，pressor 读 /prɛsər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The generators are operating normally.", cn: "发电机运行正常。", words: [{ w: "generators", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "冷却风机检查要点：\n① 所有风机是否都在运转\n② 是否有异常噪音或振动\n③ 风机启停温度设置是否正确\n④ 风道是否畅通无堵塞\n\n冷却风机故障是变压器过温的常见原因，交接时必须确认。",
    pronunciation: "cooling 的 oo 读长音 /uː/，不要读成短音 /ʊ/。\nfans 的 s 读 /z/（浊音）。",
    quiz: [
      { q: "水泵运行正常，怎么说？", a: "The pumps are operating normally." },
    ],
  },
  {
    id: 1496,
    en: "Please verify that all cooling fans are running.",
    cn: "请确认所有冷却风机都在运行。",
    ipa: "/pliːz ˈvɛrɪfaɪ ðæt ɔːl ˈkuːlɪŋ fænz ɑːr ˈrʌnɪŋ/",
    tags: ["第1496句", "冷却系统", "★★★★★"],
    when: "逐台确认所有冷却风机是否在运行。有时部分风机可能因故障或温度未达到启动值而停运。",
    words: [
      { w: "verify", ipa: "/ˈvɛrɪfaɪ/", pos: "动词", cn: "确认；核实", memory: "verify = 确认/核实/验证。\n在操作后 verify = 确认操作结果是否符合预期。\nverify that... = 确认...（后接从句）。", phonics: "ver 读 /vɛr/，ify 读 /ɪfaɪ/，重音在第一音节。", collocations: [["verify that", "确认..."], ["verify the status", "确认状态"], ["verify the result", "确认结果"]], examples: [["Please verify the setting.", "请确认设置。"], ["Verify that the fan is on.", "确认风机已启动。"]] },
      { w: "running", ipa: "/ˈrʌnɪŋ/", pos: "动词现在分词", cn: "运行中的", memory: "run = 运行/跑。\nrunning = 正在运行。\nare running = 正在运行（现在进行时）。\n与 operating 同义，但 running 更口语化。", phonics: "run 读 /rʌn/，ning 读 /nɪŋ/。", collocations: [["fan running", "风机运行"], ["motor running", "电机运行"]], examples: [["Is the fan running?", "风机在运行吗？"], ["All motors are running.", "所有电机都在运行。"]] },
    ],
    phrases: [
      { p: "verify that all... are running", ipa: "/ˈvɛrɪfaɪ ðæt ɔːl ɑːr ˈrʌnɪŋ/", cn: "确认所有...都在运行", why: "verify + that + all + 设备 + are running = 确认所有某设备都在运行。这是逐一确认的标准用语。" },
    ],
    grammar: [
      { q: "verify 和 check 有什么区别？", a: "check = 检查/查看（发现性动作）\nverify = 确认/核实（验证已知或预期的结果）\n✅ Please check the fans.（请检查风机 → 看看什么情况）\n✅ Please verify that all fans are running.（请确认所有风机都在运行 → 验证预期结果）\nverify 更强调'确认某个预期结果是否成立'。" },
    ],
    pattern: "Please verify that all + 设备 + are + 状态",
    patternExamples: [
      { en: "Please verify that all pumps are running.", cn: "请确认所有水泵都在运行。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "pumps", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }] },
      { en: "Please verify that all breakers are closed.", cn: "请确认所有断路器都合闸。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "breakers", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
      { en: "Please verify that all alarms are cleared.", cn: "请确认所有告警都已恢复。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
    ],
    thinking: "冷却风机确认流程：\n① 查看温控器显示的风机状态\n② 到现场确认每台风机是否在转动\n③ 听风机运转声音是否正常\n④ 确认风机出风口有风\n\n如果部分风机未运行：\n- 温度未达到启动值 → 正常（自动控制）\n- 风机故障 → 需要维修或更换",
    pronunciation: "verify 的重音在第一音节 /ˈvɛrɪfaɪ/。\nthat 在这里读弱音 /ðət/。\nrunning 的双 n 只发一个 /n/ 音。",
    quiz: [
      { q: "请确认所有断路器都合闸，怎么说？", a: "Please verify that all breakers are closed." },
    ],
  },
  {
    id: 1497,
    en: "One cooling fan failed to start.",
    cn: "一台冷却风机启动失败。",
    ipa: "/wʌn ˈkuːlɪŋ fæn feɪld tuː stɑːrt/",
    tags: ["第1497句", "冷却系统故障", "★★★★★"],
    when: "发现一台冷却风机未能启动，这是需要处理的故障。风机启动失败可能导致变压器散热不足。",
    words: [
      { w: "failed", ipa: "/feɪld/", pos: "动词过去式", cn: "失败；未能", memory: "fail = 失败/未能。\nfailed to start = 未能启动/启动失败。\nfailure = 失败/故障（名词）。\npower failure = 停电。", phonics: "fail 读 /feɪl/，ed 读 /d/。", collocations: [["failed to start", "启动失败"], ["failed to operate", "操作失败"], ["equipment failure", "设备故障"]], examples: [["The motor failed to start.", "电机启动失败。"], ["There was a power failure.", "发生了一次停电。"]] },
      { w: "start", ipa: "/stɑːrt/", pos: "动词", cn: "启动；开始", memory: "start = 启动/开始。\n在工程场合 start = 启动设备。\nstop = 停止设备。\nstart up = 启动（短语动词）。", phonics: "start 读 /stɑːrt/，ar 读 /ɑːr/。", collocations: [["start the fan", "启动风机"], ["start the motor", "启动电机"], ["start up", "启动"]], examples: [["Start the cooling fan.", "启动冷却风机。"], ["The motor started successfully.", "电机启动成功。"]] },
    ],
    phrases: [
      { p: "failed to start", ipa: "/feɪld tuː stɑːrt/", cn: "启动失败", why: "failed + to + start = 未能启动。failed to do something = 未能做到某事，是描述设备故障的常用句型。" },
    ],
    grammar: [
      { q: "failed to start 和 didn't start 有什么区别？", a: "failed to start = 启动失败（尝试了但没成功）\ndidn't start = 没有启动（可能是没有尝试）\n✅ One fan failed to start.（风机尝试启动但失败了 → 设备故障）\n✅ One fan didn't start.（风机没有启动 → 可能是温度未达到启动值）\nfailed 暗示设备有问题，didn't 可能是正常情况。" },
    ],
    pattern: "设备 + failed to + 动作",
    patternExamples: [
      { en: "The generator failed to start.", cn: "发电机启动失败。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "The breaker failed to close.", cn: "断路器合闸失败。", words: [{ w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
      { en: "The pump failed to operate.", cn: "水泵运行失败。", words: [{ w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }] },
    ],
    thinking: "风机启动失败的常见原因：\n① 风机电机故障（绕组烧毁、轴承卡死）\n② 电源问题（保险丝熔断、接触不良）\n③ 控制回路故障（继电器损坏、接线松动）\n④ 机械故障（叶片变形、异物卡住）\n\n处理措施：\n- 记录故障风机编号\n- 通知维修人员检查\n- 监控变压器温度（散热能力下降）",
    pronunciation: "failed 的 ai 读 /eɪ/，ed 读 /d/。\nstart 的 ar 读 /ɑːr/（美式），英式读 /ɑː/。",
    quiz: [
      { q: "发电机启动失败，怎么说？", a: "The generator failed to start." },
      { q: "风机启动失败后应该怎么做？", a: "风机启动失败后应：① 记录故障风机编号 ② 通知维修人员检查 ③ 密切监控变压器温度（散热能力下降）④ 如温度持续升高，考虑降低变压器负载。" },
    ],
  },
  {
    id: 1498,
    en: "Please replace the faulty cooling fan.",
    cn: "请更换故障风机。",
    ipa: "/pliːz rɪˈpleɪs ðə ˈfɔːlti ˈkuːlɪŋ fæn/",
    tags: ["第1498句", "冷却系统维修", "★★★★★"],
    when: "指示更换故障的冷却风机，恢复变压器的完整冷却能力。",
    words: [
      { w: "replace", ipa: "/rɪˈpleɪs/", pos: "动词", cn: "更换；替换", memory: "re = 再/重新；place = 放置。\nreplace = 更换/替换（用新的替换旧的）。\nreplacement = 更换/替换件（名词）。", phonics: "re 读 /rɪ/，place 读 /pleɪs/，重音在第二音节。", collocations: [["replace the fan", "更换风机"], ["replace the filter", "更换滤网"], ["replace the fuse", "更换保险丝"]], examples: [["Please replace the faulty part.", "请更换故障部件。"], ["The filter needs replacement.", "滤网需要更换。"]] },
      { w: "faulty", ipa: "/ˈfɔːlti/", pos: "形容词", cn: "故障的；有缺陷的", memory: "fault = 故障/缺陷；-y = 形容词后缀。\nfaulty = 有故障的/有缺陷的。\nfaulty equipment = 故障设备。\nfault 也可以指电气故障（如 ground fault 接地故障）。", phonics: "fault 读 /fɔːlt/，y 读 /i/。", collocations: [["faulty equipment", "故障设备"], ["faulty wiring", "故障线路"], ["faulty sensor", "故障传感器"]], examples: [["Replace the faulty unit.", "更换故障单元。"], ["The sensor is faulty.", "传感器有故障。"]] },
    ],
    phrases: [
      { p: "faulty cooling fan", ipa: "/ˈfɔːlti ˈkuːlɪŋ fæn/", cn: "故障冷却风机", why: "faulty + cooling + fan = 故障冷却风机。faulty 是描述设备故障状态的常用形容词。" },
    ],
    grammar: [
      { q: "faulty 和 broken 有什么区别？", a: "faulty = 有故障的/有缺陷的（可能还能部分工作，但不正常）\nbroken = 损坏的/破碎的（通常完全不能用）\n✅ a faulty fan（故障风机 → 可能转但不正常，或无法启动）\n✅ a broken fan（损坏风机 → 可能叶片断了，完全不能用）\n工程场合更常用 faulty，更专业。" },
    ],
    pattern: "Please replace the faulty + 设备",
    patternExamples: [
      { en: "Please replace the faulty sensor.", cn: "请更换故障传感器。", words: [{ w: "replace", ipa: "/rɪˈpleɪs/", cn: "更换", phonics: "re 读 /rɪ/，place 读 /pleɪs/" }, { w: "sensor", ipa: "/ˈsɛnsər/", cn: "传感器", phonics: "sens 读 /sɛns/，or 读 /ər/" }] },
      { en: "Please replace the faulty breaker.", cn: "请更换故障断路器。", words: [{ w: "replace", ipa: "/rɪˈpleɪs/", cn: "更换", phonics: "re 读 /rɪ/，place 读 /pleɪs/" }, { w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
      { en: "Please replace the faulty cable.", cn: "请更换故障电缆。", words: [{ w: "replace", ipa: "/rɪˈpleɪs/", cn: "更换", phonics: "re 读 /rɪ/，place 读 /pleɪs/" }] },
    ],
    thinking: "更换风机的注意事项：\n① 确认风机已断电（安全操作）\n② 记录故障风机型号和规格\n③ 使用相同规格的替换件\n④ 更换后进行启动测试\n⑤ 更新维护记录\n\n风机更换属于一般维护操作，不需要变压器停电。",
    pronunciation: "replace 的重音在第二音节 /rɪˈpleɪs/。\nfaulty 的 au 读 /ɔː/，不要读成 /aʊ/。",
    quiz: [
      { q: "请更换故障传感器，怎么说？", a: "Please replace the faulty sensor." },
    ],
  },
  {
    id: 1499,
    en: "The temperature alarm has been cleared.",
    cn: "温度告警已经恢复。",
    ipa: "/ðə ˈtɛmpərətʃər əˈlɑːrm hæz biːn klɪərd/",
    tags: ["第1499句", "告警恢复", "★★★★★"],
    when: "温度告警已恢复正常，说明故障已排除或温度已降至正常范围。",
    words: [
      { w: "alarm", ipa: "/əˈlɑːrm/", pos: "名词", cn: "告警；警报", memory: "alarm = 告警/警报。\ntemperature alarm = 温度告警。\nalarm 也可以指报警器/警报器。\n在数据中心，alarm 是BMS系统的重要组成部分。", phonics: "a 读 /ə/，larm 读 /lɑːrm/，重音在第二音节。", collocations: [["temperature alarm", "温度告警"], ["fire alarm", "火灾报警"], ["alarm system", "告警系统"]], examples: [["There is a temperature alarm.", "有温度告警。"], ["The alarm has been cleared.", "告警已恢复。"]] },
      { w: "cleared", ipa: "/klɪərd/", pos: "动词过去分词", cn: "已恢复；已清除", memory: "clear = 清除/恢复。\ncleared = 已恢复/已清除。\nalarm cleared = 告警已恢复（告警条件消失）。\n在BMS系统中，cleared 表示告警状态结束。", phonics: "clear 读 /klɪər/，ed 读 /d/。", collocations: [["alarm cleared", "告警恢复"], ["fault cleared", "故障清除"]], examples: [["The alarm is cleared.", "告警已恢复。"], ["All faults have been cleared.", "所有故障已清除。"]] },
    ],
    phrases: [
      { p: "alarm has been cleared", ipa: "/əˈlɑːrm hæz biːn klɪərd/", cn: "告警已经恢复", why: "alarm + has been + cleared = 告警已经被清除/恢复。has been 表示过去发生的动作对现在有影响（现在完成时被动语态）。" },
    ],
    grammar: [
      { q: "has been cleared 和 is cleared 有什么区别？", a: "has been cleared = 已经被清除（现在完成时被动语态，强调动作已完成）\nis cleared = 已清除（状态描述）\n✅ The alarm has been cleared.（告警已经被恢复了 → 强调恢复这个动作刚完成）\n✅ The alarm is cleared.（告警是清除状态 → 描述当前状态）\n交接时两者都可以用，has been cleared 更正式。" },
    ],
    pattern: "告警 + has been cleared",
    patternExamples: [
      { en: "The voltage alarm has been cleared.", cn: "电压告警已经恢复。", words: [{ w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
      { en: "The communication alarm has been cleared.", cn: "通信告警已经恢复。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
      { en: "The fire alarm has been cleared.", cn: "火灾报警已经恢复。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
    ],
    thinking: "温度告警恢复的含义：\n- 温度已降至正常范围\n- 告警条件不再满足\n- BMS系统已自动标记告警结束\n- 可能需要手动确认（acknowledge）\n\n交接时如果刚恢复的告警，需要记录：\n① 告警触发时间\n② 告警恢复时间\n③ 告警原因和处理措施",
    pronunciation: "alarm 的重音在第二音节 /əˈlɑːrm/。\ncleared 读 /klɪərd/，不要读成 /kliːrd/。",
    quiz: [
      { q: "电压告警已经恢复，怎么说？", a: "The voltage alarm has been cleared." },
    ],
  },
  {
    id: 1500,
    en: "The transformer has returned to normal operation.",
    cn: "变压器已经恢复正常运行。",
    ipa: "/ðə trænsˈfɔːrmər hæz rɪˈtɜːrnd tuː ˈnɔːrməl ˌɒpəˈreɪʃən/",
    tags: ["第1500句", "恢复运行", "★★★★★"],
    when: "确认变压器已完全恢复正常运行状态，这是故障处理后的标准结论。",
    words: [
      { w: "returned", ipa: "/rɪˈtɜːrnd/", pos: "动词过去分词", cn: "恢复；返回", memory: "return = 返回/恢复。\nreturned to = 恢复到...状态。\nreturn to normal = 恢复正常。\nhas returned = 已经恢复（现在完成时）。", phonics: "re 读 /rɪ/，turned 读 /tɜːrnd/，重音在第二音节。", collocations: [["return to normal", "恢复正常"], ["return to service", "恢复运行"], ["return to operation", "恢复运行"]], examples: [["The system has returned to normal.", "系统已恢复正常。"], ["Return to service.", "恢复运行。"]] },
      { w: "operation", ipa: "/ˌɒpəˈreɪʃən/", pos: "名词", cn: "运行；操作", memory: "operate = 运行；operation = 运行/操作（名词）。\nnormal operation = 正常运行。\nout of operation = 停运。\nin operation = 运行中。", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/。", collocations: [["normal operation", "正常运行"], ["safe operation", "安全运行"], ["out of operation", "停运"]], examples: [["The system is in operation.", "系统正在运行。"], ["Resume normal operation.", "恢复正常运行。"]] },
    ],
    phrases: [
      { p: "returned to normal operation", ipa: "/rɪˈtɜːrnd tuː ˈnɔːrməl ˌɒpəˈreɪʃən/", cn: "恢复正常运行", why: "returned + to + normal + operation = 恢复到正常运行。这是设备从故障状态恢复到正常状态的标准用语。" },
    ],
    grammar: [
      { q: "has returned 和 returned 有什么区别？", a: "has returned = 已经恢复（现在完成时，强调对现在的影响）\nreturned = 恢复了（一般过去时，只描述过去的动作）\n✅ The transformer has returned to normal operation.（变压器已经恢复正常运行 → 现在处于正常状态）\n✅ The transformer returned to normal at 10 AM.（变压器在上午10点恢复了正常 → 描述过去的时间点）\n交接时用 has returned，强调当前状态。" },
    ],
    pattern: "设备 + has returned to normal operation",
    patternExamples: [
      { en: "The generator has returned to normal operation.", cn: "发电机已经恢复正常运行。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }, { w: "operation", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }] },
      { en: "The UPS has returned to normal operation.", cn: "UPS已经恢复正常运行。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }, { w: "operation", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }] },
      { en: "The cooling system has returned to normal operation.", cn: "冷却系统已经恢复正常运行。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "变压器恢复正常运行的确认清单：\n① 所有告警已清除\n② 温度在正常范围内\n③ 冷却系统正常工作\n④ 电压电流正常\n⑤ 无异常声音或气味\n⑥ 维护记录已更新\n\n确认以上所有条件满足后，才能宣布'恢复正常运行'。",
    pronunciation: "returned 的重音在第二音节 /rɪˈtɜːrnd/。\noperation 有四个音节：op-er-a-tion。\nnormal operation 连读时 normal 的 l 与 operation 的 o 连读。",
    quiz: [
      { q: "UPS已经恢复正常运行，怎么说？", a: "The UPS has returned to normal operation." },
      { q: "确认变压器恢复正常运行需要检查哪些条件？", a: "确认变压器恢复正常运行需检查：① 所有告警已清除 ② 温度在正常范围内 ③ 冷却系统正常工作 ④ 电压电流正常 ⑤ 无异常声音或气味 ⑥ 维护记录已更新。全部满足才能确认恢复正常。" },
    ],
  },
];

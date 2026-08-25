// EXPORTS: MOCK_SENTENCES_PART10A

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART10A: ISentence[] = [
  {
    id: 271,
    en: "All medium-voltage switchgear is operating normally.",
    cn: "所有中压开关柜运行正常。",
    ipa: "/ɔːl ˈmiː.di.əm ˈvəʊl.tɪdʒ ˈswɪtʃ.ɡɪə ɪz ˈɒp.ə.reɪ.tɪŋ ˈnɔː.mə.li/",
    tags: ["第271句", "电气系统", "★★★★★"],
    when: "天气巡检完成后，进入电气系统检查。第一句话汇报中压开关柜整体状态，中压系统是数据中心供电的核心入口。",
    words: [
      { w: "medium-voltage", ipa: "/ˈmiː.di.əm ˈvəʊl.tɪdʒ/", pos: "形容词", cn: "中压的", memory: "medium-voltage 表示中压。数据中心常见供电层级包括高压、中压和低压。", phonics: "medium 读 /ˈmiː.di.əm/，voltage 读 /ˈvəʊl.tɪdʒ/。", collocations: [["medium-voltage switchgear", "中压开关设备"], ["medium-voltage cable", "中压电缆"], ["medium-voltage system", "中压系统"]], examples: [["The medium-voltage system is stable.", "中压系统运行稳定。"], ["Check the medium-voltage switchgear.", "检查中压开关设备。"]] },
      { w: "switchgear", ipa: "/ˈswɪtʃ.ɡɪə/", pos: "不可数名词", cn: "开关设备；开关柜", memory: "switchgear 是电力系统中开关、断路器、保护和隔离设备的集合称呼，通常作为不可数名词使用。", phonics: "switch 读 /swɪtʃ/，gear 读 /ɡɪə/。", collocations: [["medium-voltage switchgear", "中压开关设备"], ["low-voltage switchgear", "低压开关设备"], ["switchgear room", "开关设备室"]], examples: [["The switchgear is operating normally.", "开关设备运行正常。"], ["Inspect the switchgear daily.", "每天检查开关设备。"]] },
    ],
    phrases: [
      { p: "operating normally", ipa: "/ˈɑː.pə.reɪ.tɪŋ ˈnɔːr.mə.li/", cn: "运行正常", why: "operating + normally = 运行正常。这是交接中最常用的状态描述，适用于所有设备系统。" },
    ],
    grammar: [
      { q: "为什么 switchgear 后用 is？", a: "switchgear 通常是不可数集合名词，因此用单数谓语。\n✅ All medium-voltage switchgear is operating normally.（所有中压开关设备运行正常。）\n若说 individual switchgear units，则使用复数谓语 are。" },
    ],
    pattern: "All + 不可数设备集合 + is operating normally",
    patternExamples: [
      { en: "All transformers are operating normally.", cn: "所有变压器运行正常。", words: [{ w: "transformers", ipa: "/trænsˈfɔːrmər/", cn: "变压器", phonics: "trans 读 /træns/，former 读 /fɔːrmər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "All generators are operating normally.", cn: "所有发电机运行正常。", words: [{ w: "generators", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "All cooling units are operating normally.", cn: "所有冷却设备运行正常。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "电气系统交接顺序：① 中压开关柜（本句）→ ② 保护跳闸（272）→ ③ 变压器（273-275）→ ④ UPS（276-278）→ ⑤ 发电机（279-280）。\n中压开关柜是供电入口，必须第一个检查。如果中压系统有问题，下游所有设备都会受影响。",
    pronunciation: "medium 的 e 读长音 /iː/：/ˈmiː.di.əm/。\nvoltage 读 /ˈvəʊl.tɪdʒ/。\nswitchgear 的 sw 读 /sw/：/ˈswɪtʃ.ɡɪə/。\n节奏：ALL ME-di-um VOL-tage SWITCH-gear ｜ is OP-er-a-ting NOR-mal-ly.",
    quiz: [
      { q: "所有低压开关设备运行正常，怎么说？", a: "All low-voltage switchgear is operating normally." },
      { q: "中压、高压、低压分别怎么表达？", a: "medium-voltage (MV) = 中压（1kV-35kV）；high-voltage (HV) = 高压（>35kV）；low-voltage (LV) = 低压（<1kV）。数据中心供电通常从高压（132kV）经中压（11kV/33kV）到低压（400V/230V）。" },
    ],
  },
  {
    id: 272,
    en: "There have been no protection trips.",
    cn: "没有发生保护跳闸。",
    ipa: "/ðeə hæv biːn nəʊ prəˈtek.ʃən trɪps/",
    tags: ["第272句", "电气系统", "★★★★★"],
    when: "汇报完中压开关柜状态后，确认没有保护跳闸事件。保护跳闸意味着有故障触发断路器动作，是严重的电气事件。",
    words: [
      { w: "protection", ipa: "/prəˈtɛk.ʃən/", pos: "名词", cn: "保护（电气）", memory: "① protect = 保护；② protection = 保护装置/保护系统。\n电气保护指断路器、继电器等自动保护设备，在故障时自动切断电路保护设备。", phonics: "pro 读 /prə/，tec 读 /tɛk/，tion 读 /ʃən/，重音在第二音节。", collocations: [["protection trip", "保护跳闸"], ["protection relay", "保护继电器"], ["protection system", "保护系统"]], examples: [["The protection relay activated.", "保护继电器动作了。"], ["Check the protection settings.", "检查保护定值。"]] },
      { w: "trip", ipa: "/trɪp/", pos: "名词/动词", cn: "跳闸", memory: "① trip = 旅行/绊倒（日常义）；② 电气语境 = 跳闸（断路器因故障自动断开）。\nprotection trip = 保护跳闸，是断路器自动保护动作。", phonics: "tr 读 /tr/，i 读 /ɪ/，p 读 /p/。", collocations: [["protection trip", "保护跳闸"], ["breaker trip", "断路器跳闸"], ["trip event", "跳闸事件"]], examples: [["The breaker tripped at 3 AM.", "断路器凌晨3点跳闸了。"], ["No trips were recorded.", "没有记录到跳闸。"]] },
    ],
    phrases: [
      { p: "protection trips", ipa: "/prəˈtɛk.ʃən trɪps/", cn: "保护跳闸", why: "protection + trips = 保护跳闸（复数）。交接时确认'没有跳闸'是好消息，说明电气系统无故障触发。" },
    ],
    grammar: [
      { q: "为什么用 There have been no protection trips？", a: "现在完成时表示从上一班开始到现在没有发生保护跳闸，特别适合交接班汇报。\n✅ There have been no protection trips.（截至目前没有发生保护跳闸。）\n✅ No protection trips occurred during the last shift.（上一班期间没有发生保护跳闸。）" },
    ],
    pattern: "There have been no + 异常事件",
    patternExamples: [
      { en: "There have been no breaker trips.", cn: "截至目前没有发生断路器跳闸。", words: [{ w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
      { en: "There have been no power outages.", cn: "截至目前没有发生停电。", words: [{ w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }] },
      { en: "There have been no equipment failures.", cn: "截至目前没有发生设备故障。", words: [{ w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }] },
    ],
    thinking: "保护跳闸是电气系统最重要的异常指标。\n有跳闸 = 有故障 → 需要查原因、恢复、记录。\n无跳闸 = 系统正常 → 一句话带过。\n交接时先确认有没有跳闸，再汇报正常运行参数。",
    pronunciation: "protection 重音在第二音节：/prəˈtek.ʃən/。\ntrips 的 tr 读 /tr/。\n节奏：There have been NO ｜ pro-TEC-tion TRIPS.",
    quiz: [
      { q: "截至目前没有发生断路器跳闸，怎么说？", a: "There have been no breaker trips." },
      { q: "trip 在电气语境和日常语境中分别是什么意思？", a: "日常：trip = 旅行（a trip to London）或绊倒（I tripped on the cable）。\n电气：trip = 跳闸（breaker tripped = 断路器跳闸了）。\n交接语境中 trip 一律理解为跳闸。" },
    ],
  },
  {
    id: 273,
    en: "All transformers are operating normally.",
    cn: "所有变压器运行正常。",
    ipa: "/ɔːl trænsˈfɔːr.mərz ɑːr ˈɑː.pə.reɪ.tɪŋ ˈnɔːr.mə.li/",
    tags: ["第273句", "电气系统", "★★★★★"],
    when: "确认无跳闸后，汇报变压器整体状态。变压器将中压降为低压，是供电链的关键环节。",
    words: [
      { w: "transformer", ipa: "/trænsˈfɔːr.mər/", pos: "名词", cn: "变压器", memory: "① trans- = 跨越/转换；② form = 形态；③ -er = 设备。\ntransformer = 变压器（改变电压的设备，将中压变为低压供IT设备使用）。", phonics: "trans 读 /træns/，form 读 /fɔːrm/，er 读 /ər/，重音在第二音节。", collocations: [["power transformer", "电力变压器"], ["dry-type transformer", "干式变压器"], ["oil-filled transformer", "油浸变压器"]], examples: [["Transformer No.1 is at 50% load.", "1号变压器负载50%。"], ["Check the transformer temperature.", "检查变压器温度。"]] },
    ],
    phrases: [
      { p: "all transformers", ipa: "/ɔːl trænsˈfɔːr.mərz/", cn: "所有变压器", why: "all + 复数名词 = 所有…。交接时先报整体状态（all transformers），再报个别参数（No.1, No.2）。" },
    ],
    grammar: [
      { q: "All transformers are 和 The transformers are 有什么区别？", a: "All transformers = 所有变压器（强调'每一台都'，无一例外）\nThe transformers = 这些变压器（特指，但不强调'全部'）\n✅ All transformers are operating normally.（所有变压器都正常 → 强调全面检查过）\n✅ The transformers are operating normally.（变压器正常运行 → 一般描述）\n交接时用 all，因为要传达'每台都检查过了'。" },
    ],
    pattern: "All + 设备(复数) + are operating normally",
    patternExamples: [
      { en: "All generators are operating normally.", cn: "所有发电机运行正常。", words: [{ w: "generators", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "All circuit breakers are operating normally.", cn: "所有断路器运行正常。", words: [{ w: "circuit", ipa: "/ˈsɜːrkɪt/", cn: "电路", phonics: "cir 读 /sɜːr/，cuit 读 /kɪt/" }, { w: "breakers", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "All bus ducts are operating normally.", cn: "所有母线槽运行正常。", words: [{ w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "变压器汇报两步：\n① 整体状态：All transformers are operating normally（本句）\n② 个别负载：Transformer No.1 is carrying X% load（下两句）\n先整体后个别，让接班人先放心再了解细节。",
    pronunciation: "transformer 重音在第二音节：/trænsˈfɔːr.mər/。\n注意 tr 读 /tr/，不是 /tʃr/。\n节奏：ALL trans-FOR-mers ｜ are OP-er-a-ting NOR-mal-ly.",
    quiz: [
      { q: "所有断路器运行正常，怎么说？", a: "All circuit breakers are operating normally." },
      { q: "交接时为什么先报整体再报个别？", a: "先报'所有变压器运行正常'给接班人一个全局安心的信号，再报'1号48%、2号46%'提供具体数据。如果先报个别数据，接班人无法快速判断整体是否正常。" },
    ],
  },
  {
    id: 274,
    en: "Transformer No.1 is carrying 48% of its rated load.",
    cn: "1号变压器当前负载为额定容量的48%。",
    ipa: "/trænsˈfɔːr.mər ˈnʌm.bər wʌn ɪz ˈkær.i.ɪŋ fɔːr.ti eɪt pərˈsɛnt ɒv ɪts ˈreɪ.tɪd loʊd/",
    tags: ["第274句", "电气系统", "★★★★★"],
    when: "报完变压器整体状态后，逐台汇报负载百分比。48%表示运行在健康范围内（通常变压器安全负载上限为80%）。",
    words: [
      { w: "carrying", ipa: "/ˈkær.i.ɪŋ/", pos: "动词(现在分词)", cn: "承载（负载）", memory: "① carry = 携带/承载；② 电气语境 = 承载电流/负载。\ncarrying 48% load = 承载48%的负载。\n对比：carry a bag（拎包）→ carry a load（承载负载）。", phonics: "car 读 /kær/，ry 读 /ri/，ing 读 /ɪŋ/。", collocations: [["carrying load", "承载负载"], ["carrying current", "承载电流"], ["load carrying capacity", "承载能力"]], examples: [["The transformer is carrying 60% load.", "变压器承载60%负载。"], ["UPS No.2 is carrying the full load.", "2号UPS承载全部负载。"]] },
      { w: "rated load", ipa: "/ˈreɪ.tɪd loʊd/", pos: "名词", cn: "额定负载；额定容量", memory: "① rated = 额定的（设备铭牌上标注的最大值）；② load = 负载。\nrated load = 额定负载（变压器设计允许的最大负载）。\n48% of rated load = 额定负载的48%（约一半容量）。", phonics: "rated 读 /ˈreɪ.tɪd/，load 读 /loʊd/。注意 rated 不要读成 /ˈrætɪd/。", collocations: [["rated load", "额定负载"], ["rated capacity", "额定容量"], ["rated current", "额定电流"]], examples: [["The rated load is 2000 kVA.", "额定容量是2000 kVA。"], ["Running at 80% of rated load.", "运行在额定负载的80%。"]] },
    ],
    phrases: [
      { p: "carrying X% of its rated load", ipa: "/ˈkær.i.ɪŋ pərˈsɛnt ɒv ɪts ˈreɪ.tɪd loʊd/", cn: "承载额定负载的X%", why: "carrying + 百分比 + of + rated load = 承载额定容量的X%。交接时报告具体百分比，让接班人判断是否接近过载。" },
    ],
    grammar: [
      { q: "48% of rated load 是高还是低？", a: "变压器安全负载参考：\n<50% = 轻载（余量大，可接受但效率低）\n50%-70% = 正常负载（最佳效率区间）\n70%-80% = 重载（需要关注，接近上限）\n>80% = 过载风险（需要转移负载或增加容量）\n48%属于轻载偏正常，运行安全。" },
    ],
    pattern: "Transformer No.X + is carrying + 百分比 + of its rated load",
    patternExamples: [
      { en: "Transformer No.2 is carrying 65% of its rated load.", cn: "2号变压器承载额定负载的65%。", words: [{ w: "transformer", ipa: "/trænsˈfɔːrmər/", cn: "变压器", phonics: "trans 读 /træns/，former 读 /fɔːrmər/" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
      { en: "Transformer No.3 is carrying 72% of its rated load.", cn: "3号变压器承载额定负载的72%。", words: [{ w: "transformer", ipa: "/trænsˈfɔːrmər/", cn: "变压器", phonics: "trans 读 /træns/，former 读 /fɔːrmər/" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
      { en: "Transformer No.1 is carrying 85% of its rated load.", cn: "1号变压器承载额定负载的85%（接近过载）。", words: [{ w: "transformer", ipa: "/trænsˈfɔːrmər/", cn: "变压器", phonics: "trans 读 /træns/，former 读 /fɔːrmər/" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
    ],
    thinking: "变压器负载百分比是交接核心数据。\n数据中心通常有N+1冗余：正常运行时每台变压器负载<50%，一台故障时另一台可承担全部负载。\n48%和46%（下句）说明两台变压器都在安全范围，且接近均衡。",
    pronunciation: "carrying 的 a 读短音 /æ/：/ˈkær.i.ɪŋ/。\nrated 的 a 读长音 /eɪ/：/ˈreɪ.tɪd/。\n48% 读作 forty-eight percent：/ˈfɔːr.ti eɪt pərˈsɛnt/。\n节奏：Trans-FOR-mer NUM-ber ONE ｜ is CAR-ry-ing ｜ FOR-ty-EIGHT per-CENT ｜ of its RA-ted LOAD.",
    quiz: [
      { q: "2号变压器承载额定负载的60%，怎么说？", a: "Transformer No.2 is carrying 60% of its rated load." },
      { q: "变压器负载85%是什么情况？", a: "85%属于过载风险区间（>80%）。需要：① 检查能否转移部分负载到另一台变压器；② 确认N+1冗余是否还能保障；③ 通知管理层评估扩容需求。交接时需特别说明。" },
    ],
  },
  {
    id: 275,
    en: "Transformer No.2 is carrying 46% of its rated load.",
    cn: "2号变压器当前负载为额定容量的46%。",
    ipa: "/trænsˈfɔːr.mər ˈnʌm.bər tuː ɪz ˈkær.i.ɪŋ fɔːr.ti sɪks pərˈsɛnt ɒv ɪts ˈreɪ.tɪd loʊd/",
    tags: ["第275句", "电气系统", "★★★★★"],
    when: "汇报完1号变压器后，汇报2号变压器负载。46%与1号的48%接近，说明两台变压器负载均衡。",
    words: [],
    phrases: [
      { p: "Transformer No.2", ipa: "/trænsˈfɔːr.mər ˈnʌm.bər tuː/", cn: "2号变压器", why: "Transformer + No. + 数字 = X号变压器。No. 是 number 的缩写，读作 /ˈnʌm.bər/。数据中心变压器通常编号以便逐一汇报。" },
    ],
    grammar: [
      { q: "两台变压器负载接近说明什么？", a: "48% vs 46%（差2%）= 负载均衡，运行健康。\n如果差异大（如70% vs 30%）= 负载不均衡，需要检查IT机架分布是否合理。\n负载均衡是数据中心电气设计的基本原则之一。" },
    ],
    pattern: "Transformer No.X + is carrying + 百分比 + of its rated load",
    patternExamples: [
      { en: "Transformer No.3 is carrying 52% of its rated load.", cn: "3号变压器承载额定负载的52%。", words: [{ w: "transformer", ipa: "/trænsˈfɔːrmər/", cn: "变压器", phonics: "trans 读 /træns/，former 读 /fɔːrmər/" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
      { en: "Transformer No.4 is carrying 44% of its rated load.", cn: "4号变压器承载额定负载的44%。", words: [{ w: "transformer", ipa: "/trænsˈfɔːrmər/", cn: "变压器", phonics: "trans 读 /træns/，former 读 /fɔːrmər/" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
      { en: "Both transformers are carrying similar loads.", cn: "两台变压器负载相近。", words: [{ w: "transformers", ipa: "/trænsˈfɔːrmər/", cn: "变压器", phonics: "trans 读 /træns/，former 读 /fɔːrmər/" }, { w: "loads", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
    ],
    thinking: "1号48% + 2号46% = 两台总负载约94%额定容量（但各自独立，不是相加）。\n关键是：两台都在安全范围（<80%），且负载均衡（差2%）。\n交接时逐台报完后可以总结：Both transformers are well balanced.（两台变压器负载均衡。）",
    pronunciation: "46% 读作 forty-six percent：/ˈfɔːr.ti sɪks pərˈsɛnt/。\nsix 的 x 发 /ks/。\n节奏：Trans-FOR-mer NUM-ber TWO ｜ is CAR-ry-ing ｜ FOR-ty-SIX per-CENT.",
    quiz: [
      { q: "3号变压器承载额定负载的55%，怎么说？", a: "Transformer No.3 is carrying 55% of its rated load." },
      { q: "两台变压器负载均衡怎么表达？", a: "Both transformers are well balanced. 或 The load is evenly distributed between both transformers." },
    ],
  },
  {
    id: 276,
    en: "All UPS systems are operating normally.",
    cn: "所有UPS系统运行正常。",
    ipa: "/ɔːl juː piː ˈɛs ˈsɪs.təmz ɑːr ˈɑː.pə.reɪ.tɪŋ ˈnɔːr.mə.li/",
    tags: ["第276句", "电气系统", "★★★★★"],
    when: "变压器检查完成后，转入UPS系统检查。UPS是不间断电源，在市电中断时立即接管供电，保护IT设备不中断。",
    words: [
      { w: "UPS", ipa: "/juː piː ˈɛs/", pos: "名词", cn: "不间断电源", memory: "① UPS = Uninterruptible Power Supply（不间断电源）。\n② 在市电中断时，UPS电池立即供电（0毫秒切换），保障IT设备不中断。\n③ UPS是数据中心最关键的电气设备之一。", phonics: "按字母读：U /juː/ P /piː/ S /ɛs/。不读作单词。", collocations: [["UPS system", "UPS系统"], ["UPS battery", "UPS电池"], ["UPS mode", "UPS模式"]], examples: [["The UPS switched to battery mode.", "UPS切换到电池模式。"], ["UPS No.1 is in normal mode.", "1号UPS在正常模式。"]] },
    ],
    phrases: [
      { p: "all UPS systems", ipa: "/ɔːl juː piː ˈɛs ˈsɪs.təmz/", cn: "所有UPS系统", why: "数据中心通常有多套UPS系统（N+1或2N冗余），交接时逐一或整体汇报状态。" },
    ],
    grammar: [
      { q: "UPS有哪几种运行模式？", a: "UPS运行模式：\n① normal mode（正常模式）= 市电供电，UPS整流+逆变输出\n② battery mode（电池模式）= 市电中断，电池供电\n③ bypass mode（旁路模式）= UPS故障或维护时，市电直供\n④ ECO mode（经济模式）= 高效运行，市电直供+快速切换备份\n交接时正常模式最常见，其他模式需要特别说明。" },
    ],
    pattern: "All + 系统 + are operating normally",
    patternExamples: [
      { en: "All cooling systems are operating normally.", cn: "所有冷却系统运行正常。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "systems", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "All fire suppression systems are operating normally.", cn: "所有消防系统运行正常。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "systems", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "All security systems are operating normally.", cn: "所有安防系统运行正常。", words: [{ w: "security", ipa: "/sɪˈkjʊrɪti/", cn: "安防", phonics: "se 读 /sɪ/，curity 读 /kjʊrɪti/" }, { w: "systems", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
    ],
    thinking: "UPS交接三步：\n① 整体状态：All UPS systems are operating normally（本句）\n② 运行模式：UPS No.1 is running in normal mode（下句）\n③ 电池状态：No battery alarms（278句）\nUPS是供电可靠性的最后防线，交接时必须确认三件事。",
    pronunciation: "UPS 按字母读 /juː piː ˈɛs/，不要读成单词。\nsystems 的 s 读 /s/，不是 /z/。\n节奏：ALL U-P-S SYS-tems ｜ are OP-er-a-ting NOR-mal-ly.",
    quiz: [
      { q: "所有消防系统运行正常，怎么说？", a: "All fire suppression systems are operating normally." },
      { q: "UPS的四种运行模式分别是什么？", a: "normal mode（正常模式）、battery mode（电池模式）、bypass mode（旁路模式）、ECO mode（经济模式）。交接时最常报告的是normal mode，其他模式需要特别说明原因。" },
    ],
  },
  {
    id: 277,
    en: "UPS No.1 is running in normal mode.",
    cn: "1号UPS运行在正常模式。",
    ipa: "/juː piː ˈɛs ˈnʌm.bər wʌn ɪz ˈrʌn.ɪŋ ɪn ˈnɔːr.məl moʊd/",
    tags: ["第277句", "电气系统", "★★★★★"],
    when: "报完UPS整体状态后，逐台汇报运行模式。normal mode表示UPS正常工作，市电经整流逆变后供电。",
    words: [
      { w: "mode", ipa: "/moʊd/", pos: "名词", cn: "模式", memory: "① mode = 模式/运行方式。\n② UPS有四种模式：normal / battery / bypass / ECO。\n③ normal mode = 正常运行模式（最理想状态）。", phonics: "m 读 /m/，o 读 /oʊ/，de 读 /d/。", collocations: [["normal mode", "正常模式"], ["battery mode", "电池模式"], ["bypass mode", "旁路模式"]], examples: [["The UPS is in battery mode.", "UPS在电池模式。"], ["Switch to bypass mode for maintenance.", "维护时切换到旁路模式。"]] },
    ],
    phrases: [
      { p: "running in normal mode", ipa: "/ˈrʌn.ɪŋ ɪn ˈnɔːr.məl moʊd/", cn: "运行在正常模式", why: "running + in + 模式 = 运行在…模式下。交接时逐台报告UPS运行模式，确认每台都在normal mode。" },
    ],
    grammar: [
      { q: "running in normal mode 和 operating normally 有什么区别？", a: "running in normal mode = 运行在正常模式（指定具体模式，UPS专用）\noperating normally = 运行正常（通用描述，适用于所有设备）\n✅ UPS No.1 is running in normal mode.（1号UPS运行在正常模式 → 精确）\n✅ UPS No.1 is operating normally.（1号UPS运行正常 → 笼统）\nUPS交接时用 mode 更精确，因为UPS有明确的运行模式分类。" },
    ],
    pattern: "UPS No.X + is running in + 模式 + mode",
    patternExamples: [
      { en: "UPS No.2 is running in battery mode.", cn: "2号UPS运行在电池模式。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "battery", ipa: "/ˈbætəri/", cn: "电池", phonics: "bat 读 /bæt/，tery 读 /təri/" }, { w: "mode", ipa: "/moʊd/", cn: "模式", phonics: "mode 读 /moʊd/" }] },
      { en: "UPS No.1 is running in bypass mode.", cn: "1号UPS运行在旁路模式。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "mode", ipa: "/moʊd/", cn: "模式", phonics: "mode 读 /moʊd/" }] },
      { en: "Both UPS units are running in normal mode.", cn: "两台UPS都运行在正常模式。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }, { w: "mode", ipa: "/moʊd/", cn: "模式", phonics: "mode 读 /moʊd/" }] },
    ],
    thinking: "如果UPS不在normal mode，交接时需要特别说明：\n- battery mode = 市电中断了，电池正在供电 → 紧急！\n- bypass mode = UPS故障或维护中 → 需要关注\n- ECO mode = 正常运行的高效模式 → 正常\n本句报告normal mode，是最佳状态。",
    pronunciation: "mode 读 /moʊd/，o 读长音 /oʊ/。\nrunning 的 u 读 /ʌ/：/ˈrʌn.ɪŋ/。\n节奏：U-P-S NUM-ber ONE ｜ is RUN-ning ｜ in NOR-mal MODE.",
    quiz: [
      { q: "2号UPS运行在电池模式，怎么说？", a: "UPS No.2 is running in battery mode." },
      { q: "如果UPS在bypass mode，交接时应该怎么做？", a: "需要说明：① 为什么在旁路模式（故障还是维护）；② 预计什么时候恢复正常模式；③ 目前市电直供，没有UPS保护，风险较高。交接时bypass mode是必须重点汇报的异常状态。" },
    ],
  },
  {
    id: 278,
    en: "No battery alarms have been reported.",
    cn: "没有电池告警。",
    ipa: "/noʊ ˈbæt.ər.i ˈɑːl.ɑːrmz hæv biːn rɪˈpɔːr.tɪd/",
    tags: ["第278句", "电气系统", "★★★★★"],
    when: "汇报完UPS运行模式后，确认电池状态。电池是UPS的核心储能部件，电池告警直接影响UPS在市电中断时的保护能力。",
    words: [
      { w: "battery", ipa: "/ˈbæt.ər.i/", pos: "名词", cn: "电池", memory: "① battery = 电池（UPS的核心储能部件）。\n② 数据中心UPS电池通常是铅酸电池或锂电池。\n③ 电池告警可能包括：电压低、温度高、内阻异常、寿命到期。", phonics: "bat 读 /bæt/，ter 读 /tər/，y 读 /i/，重音在第一音节。", collocations: [["battery alarm", "电池告警"], ["battery test", "电池测试"], ["battery replacement", "电池更换"]], examples: [["The battery voltage is low.", "电池电压低。"], ["Battery test was successful.", "电池测试成功。"]] },
      { w: "reported", ipa: "/rɪˈpɔːr.tɪd/", pos: "动词(过去分词)", cn: "被报告的", memory: "① report = 报告；② reported = 被报告的（被动语态）。\nNo alarms have been reported = 没有告警被报告（即没有告警发生）。", phonics: "re 读 /rɪ/，port 读 /pɔːrt/，ed 读 /ɪd/，重音在第二音节。", collocations: [["alarms reported", "报告的告警"], ["no issues reported", "无问题报告"], ["as reported", "如报告的"]], examples: [["Three alarms were reported today.", "今天报告了3个告警。"], ["No faults were reported.", "没有故障报告。"]] },
    ],
    phrases: [
      { p: "no battery alarms", ipa: "/noʊ ˈbæt.ər.i ˈɑːl.ɑːrmz/", cn: "没有电池告警", why: "no + 名词 = 没有…。电池告警是UPS健康度的关键指标，无告警表示电池状态良好。" },
    ],
    grammar: [
      { q: "have been reported 和 were reported 有什么区别？", a: "have been reported = 已经被报告（现在完成时，强调从过去到现在的时间段内）\nwere reported = 被报告了（一般过去时，强调过去某个时间点）\n✅ No battery alarms have been reported.（到目前为止没有电池告警 → 交接时用完成时）\n✅ Three alarms were reported at 10 AM.（上午10点报告了3个告警 → 具体时间点）\n交接时用 have been reported，因为关注的是'从上次交接到现在'有没有告警。" },
    ],
    pattern: "No + 告警类型 + have been reported",
    patternExamples: [
      { en: "No temperature alarms have been reported.", cn: "没有温度告警。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "reported", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
      { en: "No power alarms have been reported.", cn: "没有电力告警。", words: [{ w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "reported", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
      { en: "No fire alarms have been reported.", cn: "没有火警。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "reported", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
    ],
    thinking: "UPS交接三板斧：\n① 整体状态 → All UPS systems are operating normally.\n② 运行模式 → UPS No.1 is running in normal mode.\n③ 电池状态 → No battery alarms have been reported.（本句）\n三句说完，UPS检查就完整了。",
    pronunciation: "battery 读 /ˈbæt.ər.i/，三个音节，重音在第一音节。\nalarms 的 ar 读 /ɑːr/。\nreported 重音在第二音节：/rɪˈpɔːr.tɪd/。\n节奏：NO BAT-ter-y A-larms ｜ have been re-POR-ted.",
    quiz: [
      { q: "没有温度告警，怎么说？", a: "No temperature alarms have been reported." },
      { q: "交接时UPS检查需要汇报哪三件事？", a: "① 整体状态：All UPS systems are operating normally.（所有UPS运行正常）\n② 运行模式：UPS No.1 is running in normal mode.（1号UPS正常模式）\n③ 电池状态：No battery alarms have been reported.（无电池告警）" },
    ],
  },
  {
    id: 279,
    en: "All generators are in automatic mode.",
    cn: "所有柴油发电机均处于自动模式。",
    ipa: "/ɔːl ˈdʒɛn.ə.reɪ.tərz ɑːr ɪn ˌɔː.təˈmæt.ɪk moʊd/",
    tags: ["第279句", "电气系统", "★★★★★"],
    when: "UPS检查完成后，转入发电机检查。柴油发电机是最后一道供电防线，在市电和UPS都无法供电时启动。",
    words: [
      { w: "generator", ipa: "/ˈdʒɛn.ə.reɪ.tər/", pos: "名词", cn: "发电机（柴油发电机）", memory: "① generate = 产生/发电；② generator = 发电机。\n数据中心语境中 generator 特指柴油发电机（diesel generator），是最后一道供电防线。\n供电优先级：市电 → UPS（电池）→ 发电机（柴油）。", phonics: "gen 读 /dʒɛn/，e 读 /ə/，ra 读 /reɪ/，tor 读 /tər/，重音在第一音节。", collocations: [["diesel generator", "柴油发电机"], ["generator test", "发电机测试"], ["generator start", "发电机启动"]], examples: [["The generator started automatically.", "发电机自动启动了。"], ["Generator No.1 is running.", "1号发电机正在运行。"]] },
      { w: "automatic", ipa: "/ˌɔː.təˈmæt.ɪk/", pos: "形容词", cn: "自动的", memory: "① auto = 自己；② matic = …的。\nautomatic = 自动的（无需人工干预）。\ngenerator in automatic mode = 发电机处于自动模式（市电中断时自动启动）。", phonics: "au 读 /ɔː/，to 读 /tə/，mat 读 /mæt/，ic 读 /ɪk/，重音在第三音节。", collocations: [["automatic mode", "自动模式"], ["automatic start", "自动启动"], ["automatic transfer switch", "自动转换开关"]], examples: [["Set the generator to automatic mode.", "将发电机设置为自动模式。"], ["The ATS switched automatically.", "自动转换开关自动切换了。"]] },
    ],
    phrases: [
      { p: "in automatic mode", ipa: "/ɪn ˌɔː.təˈmæt.ɪk moʊd/", cn: "处于自动模式", why: "in + automatic + mode = 处于自动模式。发电机必须在自动模式，才能在市电中断时自动启动（通常10-15秒内）。如果在手动模式，需要人工启动，延误供电恢复。" },
    ],
    grammar: [
      { q: "发电机有哪几种运行模式？", a: "发电机运行模式：\n① automatic mode（自动模式）= 市电中断时自动启动 ← 正常运行必须设为此模式\n② manual mode（手动模式）= 需要人工按启动按钮 ← 仅在测试/维护时使用\n③ off mode（关机模式）= 不会启动 ← 仅在维修时使用\n交接时发电机必须全部在automatic mode，否则需要特别说明原因。" },
    ],
    pattern: "All generators + are in + 模式 + mode",
    patternExamples: [
      { en: "All generators are in automatic mode.", cn: "所有发电机处于自动模式。", words: [{ w: "generators", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "mode", ipa: "/moʊd/", cn: "模式", phonics: "mode 读 /moʊd/" }] },
      { en: "Generator No.2 is in manual mode for testing.", cn: "2号发电机处于手动模式进行测试。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "mode", ipa: "/moʊd/", cn: "模式", phonics: "mode 读 /moʊd/" }, { w: "testing", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "All generators are ready for automatic start.", cn: "所有发电机已准备自动启动。", words: [{ w: "generators", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
    ],
    thinking: "发电机交接要点：\n① 运行模式：必须在automatic mode（本句）\n② 燃油储备：够不够应急（下句）\n③ 测试记录：最近一次空载/带载测试时间\n发电机是最后防线，模式错误 = 市电中断时发电机不会启动 = 数据中心断电。",
    pronunciation: "generator 重音在第一音节：/ˈdʒɛn.ə.reɪ.tər/。\nautomatic 重音在第三音节：/ˌɔː.təˈmæt.ɪk/。\n节奏：ALL GEN-er-a-tors ｜ are in au-to-MAT-ic MODE.",
    quiz: [
      { q: "2号发电机处于手动模式进行测试，怎么说？", a: "Generator No.2 is in manual mode for testing." },
      { q: "为什么发电机必须设为automatic mode？", a: "因为市电中断时，发电机必须在10-15秒内自动启动接管供电。如果设为manual mode，需要人工到现场按启动按钮，延误时间可能导致UPS电池耗尽、IT设备断电。交接时必须确认所有发电机在automatic mode。" },
    ],
  },
  {
    id: 280,
    en: "The fuel level is sufficient for emergency operation.",
    cn: "柴油储备充足，可以满足应急运行。",
    ipa: "/ðə fjuːəl ˈlɛv.əl ɪz səˈfɪʃ.ənt fɔːr ɪˈmɜːr.dʒən.si ˌɑː.pəˈreɪ.ʃən/",
    tags: ["第280句", "电气系统", "★★★★★"],
    when: "确认发电机模式正确后，报告燃油储备情况。燃油量决定发电机能运行多长时间，是应急能力的关键指标。",
    words: [
      { w: "sufficient", ipa: "/səˈfɪʃ.ənt/", pos: "形容词", cn: "充足的；足够的", memory: "① suf- = sub-（在下方）；② fic = 做（拉丁语 facere）。\nsufficient = 做得够的 → 充足的/足够的。\n反义词：insufficient = 不足的。", phonics: "suf 读 /sə/，fi 读 /fɪ/，cient 读 /ʃənt/，重音在第二音节。", collocations: [["sufficient fuel", "充足的燃料"], ["sufficient capacity", "足够的容量"], ["sufficient for", "足以满足"]], examples: [["Fuel is sufficient for 24 hours.", "燃油够24小时。"], ["The capacity is not sufficient.", "容量不够。"]] },
      { w: "emergency", ipa: "/ɪˈmɜːr.dʒən.si/", pos: "名词/形容词", cn: "紧急情况", memory: "① e- = 出；② merge = 浮现/出现。\nemergency = 突发浮现的情况 → 紧急情况。\nemergency operation = 应急运行（发电机在市电中断时运行）。", phonics: "e 读 /ɪ/，mer 读 /mɜːr/，gen 读 /dʒən/，cy 读 /si/，重音在第二音节。", collocations: [["emergency operation", "应急运行"], ["emergency power", "应急供电"], ["emergency generator", "应急发电机"]], examples: [["The generator started for emergency power.", "发电机启动进行应急供电。"], ["Emergency fuel reserve is at 80%.", "应急燃油储备在80%。"]] },
    ],
    phrases: [
      { p: "sufficient for emergency operation", ipa: "/səˈfɪʃ.ənt fɔːr ɪˈmɜːr.dʒən.si ˌɑː.pəˈreɪ.ʃən/", cn: "足以满足应急运行", why: "sufficient for + 用途 = 足以满足…用途。交接时确认燃油够不够应急使用，通常要求至少能运行24-72小时。" },
    ],
    grammar: [
      { q: "sufficient 和 enough 有什么区别？", a: "sufficient = 充足的（正式用语，技术/工程场景）\nenough = 够的（通用用语，日常/口语场景）\n✅ The fuel level is sufficient for emergency operation.（正式交接用语）\n✅ There's enough fuel for 24 hours.（口语化）\n交接报告用 sufficient，因为更专业。日常对话用 enough。" },
    ],
    pattern: "The fuel level + is sufficient for + 用途",
    patternExamples: [
      { en: "The fuel level is sufficient for 48 hours.", cn: "燃油储备够48小时。", words: [{ w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }] },
      { en: "The fuel level is sufficient for the weekend.", cn: "燃油储备够周末用。", words: [{ w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }] },
      { en: "The fuel level is not sufficient; please arrange refueling.", cn: "燃油不够，请安排加油。", words: [{ w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }] },
    ],
    thinking: "发电机交接三件事：\n① 模式 → All generators are in automatic mode.（279句）\n② 燃油 → The fuel level is sufficient.（本句）\n③ 测试 → The last generator test was on [date].（补充信息）\n燃油储备通常要求≥80%或≥24小时运行量。如果不足，需要安排加油并记录。",
    pronunciation: "sufficient 重音在第二音节：/səˈfɪʃ.ənt/。\nemergency 重音在第二音节：/ɪˈmɜːr.dʒən.si/。\noperation 读 /ˌɑː.pəˈreɪ.ʃən/。\n节奏：The FU-el LE-vel ｜ is suf-FI-cient ｜ for e-MER-gen-cy OP-er-A-tion.",
    quiz: [
      { q: "燃油储备够48小时，怎么说？", a: "The fuel level is sufficient for 48 hours." },
      { q: "sufficient 和 enough 在交接时怎么选？", a: "交接报告用 sufficient（正式专业）：The fuel level is sufficient for emergency operation。\n日常对话用 enough（口语化）：There's enough fuel for the weekend。\n两者意思相同，但正式程度不同。" },
    ],
  },
  {
    id: 281,
    en: "All CRAC units are operating normally.",
    cn: "所有精密空调运行正常。",
    ipa: "/ɔːl kræk juːnɪts ɑːr ˈɑː.pə.reɪ.tɪŋ ˈnɔːr.mə.li/",
    tags: ["第281句", "暖通系统", "★★★★★"],
    when: "电气系统检查完成后，转入暖通（HVAC）系统检查。第一句话汇报精密空调整体状态。CRAC是数据中心制冷的核心设备。",
    words: [
      { w: "CRAC", ipa: "/kræk/", pos: "名词", cn: "精密空调（Computer Room Air Conditioning）", memory: "① CRAC = Computer Room Air Conditioning（计算机房空调）。\n② 读作 /kræk/（像一个单词），不是按字母读。\n③ CRAC 比普通空调精密得多，可精确控制温度（±0.5°C）和湿度。", phonics: "读作 /kræk/，类似 crack（裂缝）的发音。", collocations: [["CRAC unit", "精密空调机组"], ["CRAC system", "精密空调系统"], ["CRAC alarm", "精密空调告警"]], examples: [["CRAC No.3 has an alarm.", "3号精密空调有告警。"], ["The CRAC supply air temperature is 18°C.", "精密空调送风温度18°C。"]] },
      { w: "unit", ipa: "/ˈjuː.nɪt/", pos: "名词", cn: "机组；单元", memory: "① unit = 单元/机组/设备。\n② CRAC unit = 精密空调机组（一台精密空调设备）。\n③ 数据中心通常有多台CRAC unit组成制冷系统（N+1冗余）。", phonics: "u 读 /juː/，ni 读 /nɪ/，t 读 /t/。", collocations: [["CRAC unit", "精密空调机组"], ["cooling unit", "冷却机组"], ["fan unit", "风机单元"]], examples: [["We have 10 CRAC units in the data hall.", "机房有10台精密空调。"], ["Unit No.5 is offline for maintenance.", "5号机组停机维护中。"]] },
    ],
    phrases: [
      { p: "all CRAC units", ipa: "/ɔːl kræk juːnɪts/", cn: "所有精密空调", why: "all + CRAC + units = 所有精密空调机组。交接时先报整体状态，再报个别参数。" },
    ],
    grammar: [
      { q: "CRAC 和 CRAH 有什么区别？", a: "CRAC = Computer Room Air Conditioning（精密空调，自带压缩机，直接制冷）\nCRAH = Computer Room Air Handling（精密空气处理机组，用冷冻水，不自带压缩机）\nCRAC 独立制冷；CRAH 需要冷水机组（chiller）提供冷冻水。\n数据中心可能同时使用 CRAC 和 CRAH，交接时需分别汇报。" },
    ],
    pattern: "All + 设备类型 + units + are operating normally",
    patternExamples: [
      { en: "All CRAH units are operating normally.", cn: "所有空气处理机组运行正常。", words: [{ w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "All fan coil units are operating normally.", cn: "所有风机盘管运行正常。", words: [{ w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "All cooling units are operating normally.", cn: "所有冷却设备运行正常。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "暖通系统交接顺序：\n① 精密空调 → All CRAC units are operating normally（本句）\n② 冷冻水系统 → The chilled water system is stable（282句）\n③ 冷却塔 → All cooling towers are operating normally（283句）\n④ 风墙空调 → All fan wall units are operating normally（284句）\n⑤ 湿度 → The humidity is within range（285句）\n暖通系统和电气系统结构相同：先整体后个别。",
    pronunciation: "CRAC 读 /kræk/，不要按字母读 C-R-A-C。\nunits 读 /ˈjuː.nɪts/。\n节奏：ALL CRAC U-nits ｜ are OP-er-a-ting NOR-mal-ly.",
    quiz: [
      { q: "所有空气处理机组运行正常，怎么说？", a: "All CRAH units are operating normally." },
      { q: "CRAC 和 CRAH 有什么区别？", a: "CRAC（/kræk/）= 精密空调，自带压缩机，独立制冷。\nCRAH = 精密空气处理机组，用冷冻水制冷，需要冷水机组配合。\n简单说：CRAC 自己制冷；CRAH 靠冷水机组给它冷水来制冷。" },
    ],
  },
  {
    id: 282,
    en: "The chilled water system is stable.",
    cn: "冷冻水系统运行稳定。",
    ipa: "/ðə tʃɪld ˈwɔː.tər ˈsɪs.təm ɪz ˈsteɪ.bəl/",
    tags: ["第282句", "暖通系统", "★★★★★"],
    when: "汇报完精密空调后，报告冷冻水系统状态。冷冻水系统是CRAH和大型制冷设备的冷源。",
    words: [
      { w: "chilled water", ipa: "/tʃɪld ˈwɔː.tər/", pos: "名词", cn: "冷冻水", memory: "① chill = 冷却/使变冷；② chilled = 被冷却的；③ water = 水。\nchilled water = 冷冻水（通常6-7°C供水，12°C回水）。\n冷冻水由冷水机组（chiller）制冷，通过管道输送到CRAH和冷却盘管。", phonics: "chilled 读 /tʃɪld/，water 读 /ˈwɔː.tər/。", collocations: [["chilled water system", "冷冻水系统"], ["chilled water supply", "冷冻水供水"], ["chilled water return", "冷冻水回水"]], examples: [["The chilled water supply temperature is 7°C.", "冷冻水供水温度7°C。"], ["Chilled water flow is normal.", "冷冻水流量正常。"]] },
      { w: "stable", ipa: "/ˈsteɪ.bəl/", pos: "形容词", cn: "稳定的", memory: "① stable = 稳定的/平稳的（不会突然变化）。\n② 反义词：unstable = 不稳定的。\n③ 系统stable = 各项参数正常，无波动。", phonics: "sta 读 /steɪ/，ble 读 /bəl/，重音在第一音节。", collocations: [["system stable", "系统稳定"], ["temperature stable", "温度稳定"], ["pressure stable", "压力稳定"]], examples: [["The system has been stable all day.", "系统全天运行稳定。"], ["Water pressure is stable.", "水压稳定。"]] },
    ],
    phrases: [
      { p: "chilled water system", ipa: "/tʃɪld ˈwɔː.tər ˈsɪs.təm/", cn: "冷冻水系统", why: "chilled water + system = 冷冻水系统。包括冷水机组、管道、水泵、阀门、CRAH等完整制冷回路。交接时用 stable 表示系统参数稳定。" },
    ],
    grammar: [
      { q: "stable 和 normal 有什么区别？", a: "stable = 稳定的（强调没有波动/变化）\nnormal = 正常的（强调在标准范围内）\n✅ The chilled water system is stable.（系统稳定 → 强调运行平稳无波动）\n✅ The chilled water system is operating normally.（系统运行正常 → 强调参数在标准范围）\n两者都正确，stable 更强调'稳定不变'，normal 更强调'符合标准'。" },
    ],
    pattern: "The + 系统 + is stable",
    patternExamples: [
      { en: "The cooling water system is stable.", cn: "冷却水系统运行稳定。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "The power supply is stable.", cn: "供电稳定。", words: [{ w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }, { w: "stable", ipa: "/ˈsteɪbl/", cn: "稳定", phonics: "sta 读 /steɪ/，ble 读 /bl/" }] },
      { en: "The network is stable.", cn: "网络稳定。", words: [{ w: "network", ipa: "/ˈnɛtwɜːrk/", cn: "网络", phonics: "net 读 /nɛt/，work 读 /wɜːrk/" }, { w: "stable", ipa: "/ˈsteɪbl/", cn: "稳定", phonics: "sta 读 /steɪ/，ble 读 /bl/" }] },
    ],
    thinking: "冷冻水系统关键参数：\n① 供水温度：通常6-7°C\n② 回水温度：通常12°C\n③ 供回水温差：通常5-6°C\n④ 系统压力：稳定\n交接时一句 The chilled water system is stable 概括所有参数正常。如果有异常需要逐项说明。",
    pronunciation: "chilled 的 ch 读 /tʃ/，i 读 /ɪ/，ed 读 /d/。\nstable 读 /ˈsteɪ.bəl/，a 读长音 /eɪ/。\n节奏：The CHILLED WA-ter SYS-tem ｜ is STA-ble.",
    quiz: [
      { q: "冷却水系统运行稳定，怎么说？", a: "The cooling water system is stable." },
      { q: "冷冻水系统的供水温度和回水温度通常是多少？", a: "供水温度（supply）通常6-7°C，回水温度（return）通常12°C，温差约5-6°C。交接时如果温差异常（如<3°C），说明制冷效率可能有问题。" },
    ],
  },
  {
    id: 283,
    en: "All cooling towers are operating normally.",
    cn: "所有冷却塔运行正常。",
    ipa: "/ɔːl ˈkuː.lɪŋ ˈtaʊ.ərz ɑːr ˈɑː.pə.reɪ.tɪŋ ˈnɔːr.mə.li/",
    tags: ["第283句", "暖通系统", "★★★★★"],
    when: "冷冻水系统汇报后，报告冷却塔状态。冷却塔将冷水机组产生的热量排放到大气中，是制冷链的末端。",
    words: [
      { w: "cooling tower", ipa: "/ˈkuː.lɪŋ ˈtaʊ.ər/", pos: "名词", cn: "冷却塔", memory: "① cooling = 冷却；② tower = 塔。\ncooling tower = 冷却塔（将冷冻水系统中的热量排放到大气中的设备）。\n制冷链：IT设备产热 → CRAC/CRAH制冷 → 冷冻水带走热量 → 冷水机组压缩 → 冷却塔排热到大气。", phonics: "cooling 读 /ˈkuː.lɪŋ/，tower 读 /ˈtaʊ.ər/。", collocations: [["cooling tower fan", "冷却塔风机"], ["cooling tower water", "冷却塔水"], ["cooling tower cell", "冷却塔单元"]], examples: [["Cooling tower No.2 fan is running.", "2号冷却塔风机在运行。"], ["Check the cooling tower water level.", "检查冷却塔水位。"]] },
    ],
    phrases: [
      { p: "all cooling towers", ipa: "/ɔːl ˈkuː.lɪŋ ˈtaʊ.ərz/", cn: "所有冷却塔", why: "数据中心通常有2-4座冷却塔（N+1冗余），交接时确认所有冷却塔运行正常。" },
    ],
    grammar: [
      { q: "冷却塔在制冷链中的位置是什么？", a: "数据中心制冷链（从产热到排热）：\n① IT设备 → 产热\n② CRAC/CRAH → 制冷，送冷风到机房\n③ 冷冻水系统 → 带走热量\n④ 冷水机组（Chiller）→ 压缩制冷\n⑤ 冷却塔（Cooling Tower）→ 排热到大气\n冷却塔是制冷链最后一环，故障会导致整个制冷系统效率下降。" },
    ],
    pattern: "All cooling towers + are operating normally",
    patternExamples: [
      { en: "All cooling towers are operating normally.", cn: "所有冷却塔运行正常。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "Cooling tower No.1 fan has stopped.", cn: "1号冷却塔风机停了。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }] },
      { en: "All cooling tower fans are running.", cn: "所有冷却塔风机都在运行。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }] },
    ],
    thinking: "冷却塔交接要点：\n① 整体状态 → All cooling towers are operating normally（本句）\n② 风机状态 → 每台风机是否运行\n③ 水位 → 冷却塔补水是否正常\n④ 水温 → 冷却塔出水温度\n马来西亚热带气候下，冷却塔效率受环境湿球温度影响较大。",
    pronunciation: "cooling 的 oo 读长音 /uː/：/ˈkuː.lɪŋ/。\ntower 的 ow 读 /aʊ/：/ˈtaʊ.ər/。\n节奏：ALL COOL-ing TOW-ers ｜ are OP-er-a-ting NOR-mal-ly.",
    quiz: [
      { q: "1号冷却塔风机停了，怎么说？", a: "Cooling tower No.1 fan has stopped." },
      { q: "冷却塔在制冷链中的位置是什么？", a: "制冷链从产热到排热：IT设备（产热）→ CRAC/CRAH（制冷送冷风）→ 冷冻水系统（带走热量）→ 冷水机组（压缩制冷）→ 冷却塔（排热到大气）。冷却塔是最后一环。" },
    ],
  },
  {
    id: 284,
    en: "All fan wall units are operating normally.",
    cn: "所有风墙机组运行正常。",
    ipa: "/ɔːl fæn wɔːl ˈjuː.nɪts ɑː ˈɒp.ə.reɪ.tɪŋ ˈnɔː.mə.li/",
    tags: ["第284句", "暖通系统", "★★★★"],
    when: "汇报完冷却塔后，报告风墙机组状态。fan wall 通常由多台并列风机组成，为机房提供大风量、均匀的气流。",
    words: [
      { w: "fan wall", ipa: "/fæn wɔːl/", pos: "名词", cn: "风墙；风机墙", memory: "fan wall 指由多台风机并列组成的风墙系统。fan wall unit 指其中的单台机组或模块。", phonics: "fan 的 a 读 /æ/；wall 的 a 读 /ɔː/。", collocations: [["fan wall unit", "风墙机组"], ["fan wall system", "风墙系统"], ["fan wall array", "风墙阵列"]], examples: [["The fan wall supply temperature is 18°C.", "风墙送风温度为18°C。"], ["Check the fan wall filters.", "检查风墙滤网。"]] },
    ],
    phrases: [
      { p: "fan wall units", ipa: "/fæn wɔːl ˈjuː.nɪts/", cn: "风墙机组", why: "fan wall 是数据中心风墙系统的常用名称；fan wall unit 指组成风墙的机组。" },
    ],
    grammar: [
      { q: "fan wall 是什么？", a: "fan wall 是由多台并列风机组成的风墙系统，可提供大风量和较均匀的气流。具体制冷和送风方式取决于现场暖通设计，因此交接时应按设备名称、机组编号和运行状态准确汇报。" },
    ],
    pattern: "All fan wall units + are operating normally",
    patternExamples: [
      { en: "All fan wall units are operating normally.", cn: "所有风墙机组运行正常。", words: [{ w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "Fan wall unit No. 3 has a high-temperature alarm.", cn: "3号风墙机组有高温告警。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "All fan wall filters have been replaced.", cn: "所有风墙滤网已更换。", words: [{ w: "filters", ipa: "/ˈfɪltər/", cn: "过滤器", phonics: "fil 读 /fɪl/，ter 读 /tər/" }] },
    ],
    thinking: "暖通设备汇报顺序：\n① CRAC（传统精密空调）\n② 冷冻水系统\n③ 冷却塔\n④ 风墙空调（本句）\n⑤ 湿度\n每种设备单独汇报状态，让接班人全面了解制冷系统运行情况。",
    pronunciation: "fan 的 a 读短音 /æ/：/fæn/。\nwall 的 a 读长音 /ɔː/：/wɔːl/。\n节奏：ALL FAN WALL U-nits ｜ are OP-er-a-ting NOR-mal-ly.",
    quiz: [
      { q: "3号风墙机组有高温告警，怎么说？", a: "Fan wall unit No. 3 has a high-temperature alarm." },
      { q: "fan wall 是什么？", a: "由多台并列风机组成的风墙系统，用于提供大风量和较均匀的气流。" },
    ],
  },
  {
    id: 285,
    en: "The humidity is within the acceptable range.",
    cn: "湿度保持在允许范围内。",
    ipa: "/ðə hjuːˈmɪd.ə.ti ɪz wɪˈðɪn ðə əkˈsɛp.tə.bəl reɪndʒ/",
    tags: ["第285句", "暖通系统", "★★★★★"],
    when: "暖通设备状态汇报完毕后，报告环境湿度。湿度是数据中心环境控制的关键参数，过高或过低都会损害IT设备。",
    words: [
      { w: "humidity", ipa: "/hjuːˈmɪd.ə.ti/", pos: "名词", cn: "湿度", memory: "① humid = 潮湿的；② -ity = …性/程度。\nhumidity = 湿度（空气中水蒸气的含量）。\n数据中心湿度标准：通常20%-80% RH（相对湿度），ASHRAE推荐范围。", phonics: "hu 读 /hjuː/，mid 读 /mɪ/，i 读 /ɪ/，ty 读 /ti/，重音在第二音节。", collocations: [["relative humidity", "相对湿度"], ["humidity level", "湿度水平"], ["humidity control", "湿度控制"]], examples: [["The humidity is at 45% RH.", "湿度45%。"], ["Humidity is too low.", "湿度太低。"]] },
      { w: "acceptable", ipa: "/əkˈsɛp.tə.bəl/", pos: "形容词", cn: "可接受的；允许的", memory: "① accept = 接受；② -able = 可以…的。\nacceptable = 可以接受的 = 在允许范围内的。\nwithin the acceptable range = 在允许范围内。", phonics: "ac 读 /ək/，cep 读 /sɛp/，ta 读 /tə/，ble 读 /bəl/，重音在第二音节。", collocations: [["acceptable range", "允许范围"], ["acceptable level", "可接受水平"], ["within acceptable limits", "在可接受限度内"]], examples: [["Temperature is within the acceptable range.", "温度在允许范围内。"], ["The reading is not acceptable.", "读数不在允许范围内。"]] },
    ],
    phrases: [
      { p: "within the acceptable range", ipa: "/wɪˈðɪn ðə əkˈsɛp.tə.bəl reɪndʒ/", cn: "在允许范围内", why: "within + the + acceptable + range = 在允许范围内。交接时用这个短语确认参数在标准范围内，不需要给出具体数值。" },
    ],
    grammar: [
      { q: "数据中心湿度的标准范围是多少？", a: "ASHRAE（美国暖通制冷协会）推荐的数据中心湿度范围：\n- 推荐范围：20%-80% RH（相对湿度）\n- 露点温度上限：17°C\n- 过低（<20%）= 静电风险（ESD），可能损坏IT设备\n- 过高（>80%）= 冷凝风险，可能导致短路\n马来西亚气候潮湿，湿度控制尤为重要。" },
    ],
    pattern: "The + 参数 + is within the acceptable range",
    patternExamples: [
      { en: "The temperature is within the acceptable range.", cn: "温度在允许范围内。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }, { w: "range", ipa: "/reɪndʒ/", cn: "范围", phonics: "range 读 /reɪndʒ/" }] },
      { en: "The pressure is within the acceptable range.", cn: "压力在允许范围内。", words: [{ w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }, { w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }, { w: "range", ipa: "/reɪndʒ/", cn: "范围", phonics: "range 读 /reɪndʒ/" }] },
      { en: "The voltage is within the acceptable range.", cn: "电压在允许范围内。", words: [{ w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }, { w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }, { w: "range", ipa: "/reɪndʒ/", cn: "范围", phonics: "range 读 /reɪndʒ/" }] },
    ],
    thinking: "暖通系统交接五步（281-285句）：\n① CRAC → All CRAC units are operating normally.\n② 冷冻水 → The chilled water system is stable.\n③ 冷却塔 → All cooling towers are operating normally.\n④ 风墙 → All fan wall units are operating normally.\n⑤ 湿度 → The humidity is within the acceptable range.（本句）\n五句说完，暖通系统交接完成。",
    pronunciation: "humidity 重音在第二音节：/hjuːˈmɪd.ə.ti/。\nacceptable 重音在第二音节：/əkˈsɛp.tə.bəl/。\nwithin 的 th 咬舌尖。\n节奏：The hu-MID-i-ty ｜ is with-IN ｜ the ac-CEP-ta-ble RANGE.",
    quiz: [
      { q: "温度在允许范围内，怎么说？", a: "The temperature is within the acceptable range." },
      { q: "数据中心湿度过高或过低分别有什么风险？", a: "过低（<20% RH）= 静电风险（ESD），可能损坏服务器芯片和电路板。\n过高（>80% RH）= 冷凝风险，金属表面结露可能导致短路。\nASHRAE推荐范围：20%-80% RH，露点温度上限17°C。" },
    ],
  },
];

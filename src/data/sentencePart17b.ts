// EXPORTS: MOCK_SENTENCES_PART17B

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART17B: ISentence[] = [
  {
    id: 1341,
    en: "The circuit breaker has been closed successfully.",
    cn: "断路器已经成功合闸。",
    ipa: "/ðə ˈsɜːr.kɪt ˈbreɪ.kər hæz biːn kloʊzd səkˈsɛs.fə.li/",
    tags: ["第1341句", "操作确认", "★★★★★"],
    when: "合闸操作执行完毕后，操作人员向控制室和现场所有人确认结果。这是倒闸操作中最关键的正面反馈——合闸成功意味着供电即将恢复。",
    words: [
      { w: "circuit breaker", ipa: "/ˈsɜːr.kɪt ˈbreɪ.kər/", pos: "名词", cn: "断路器", memory: "① circuit = 电路/回路；② breaker = 断开装置。\ncircuit breaker = 断路器，是电力系统中最重要的保护和控制设备。\n断路器可以带负荷分合闸，区别于隔离开关（disconnector/isolator）。", phonics: "cir 读 /sɜːr/，cuit 读 /kɪt/；break 读 /breɪk/，er 读 /ər/。", collocations: [["circuit breaker", "断路器"], ["open the circuit breaker", "分闸断路器"], ["close the circuit breaker", "合闸断路器"]], examples: [["The circuit breaker tripped.", "断路器跳闸了。"], ["Close the circuit breaker now.", "现在合闸断路器。"]] },
      { w: "closed", ipa: "/kloʊzd/", pos: "动词（过去分词）", cn: "合闸；闭合", memory: "① close = 关闭/闭合；② closed = 已闭合。\n在电气操作中 close = 合闸（使电路接通），open = 分闸（使电路断开）。\nhas been closed = 已经合闸（现在完成时被动语态）。", phonics: "close 读 /kloʊz/（动词），注意不要读成 /kloʊs/（形容词'近的'）。", collocations: [["breaker closed", "断路器已合闸"], ["switch closed", "开关已闭合"], ["close successfully", "成功合闸"]], examples: [["The breaker has been closed.", "断路器已合闸。"], ["The contact is now closed.", "触点现在已闭合。"]] },
      { w: "successfully", ipa: "/səkˈsɛs.fə.li/", pos: "副词", cn: "成功地", memory: "① success = 成功；② successful = 成功的；③ successfully = 成功地。\n倒闸操作中 successfully 强调操作按预期完成，没有出现跳闸、拒动等异常。", phonics: "suc 读 /sək/，cess 读 /sɛs/，ful 读 /fəl/，ly 读 /li/。", collocations: [["completed successfully", "顺利完成"], ["closed successfully", "成功合闸"], ["operated successfully", "成功操作"]], examples: [["The operation was completed successfully.", "操作顺利完成。"], ["The test passed successfully.", "测试成功通过。"]] },
    ],
    phrases: [
      { p: "has been closed successfully", ipa: "/hæz biːn kloʊzd səkˈsɛs.fə.li/", cn: "已经成功合闸", why: "has been + closed + successfully = 已经成功合闸。现在完成时被动语态 + 副词，强调合闸这个动作已经完成且结果正确。" },
    ],
    grammar: [
      { q: "has been closed 和 was closed 有什么区别？", a: "has been closed = 已经合闸了（现在完成时，强调当前状态——现在断路器处于合闸位）\nwas closed = 合闸了（一般过去时，只描述过去的动作）\n✅ The breaker has been closed successfully.（断路器已经成功合闸 → 当前状态确认）\n✅ The breaker was closed at 10:05 AM.（断路器在10:05合闸 → 描述过去动作的时间点）\n操作确认用 has been，因为关心的是'现在是否已合闸'。" },
    ],
    pattern: "The + 设备 + has been + 操作结果 + successfully",
    patternExamples: [
      { en: "The grounding switch has been closed successfully.", cn: "接地开关已经成功合上。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "The isolation has been completed successfully.", cn: "隔离已经顺利完成。", words: [] },
      { en: "The restoration has been performed successfully.", cn: "恢复操作已经成功执行。", words: [{ w: "performed", ipa: "/pərˈfɔːrm/", cn: "执行", phonics: "per 读 /pər/，form 读 /fɔːrm/" }] },
    ],
    thinking: "合闸成功是整个倒闸操作的核心结果。\n英语汇报结构：主语（the circuit breaker）+ 时态（has been = 已完成）+ 动作（closed = 合闸）+ 结果修饰（successfully = 成功地）。\n这句话必须清晰、明确地说出来，不能含糊——控制室需要确认供电已经恢复。",
    pronunciation: "circuit 的 r 读 /r/，cuit 读 /kɪt/。\nclosed 的 s 读 /z/（动词），不是 /s/。\nsuccessfully 重音在第二音节：suc-CESS-ful-ly。\n节奏：The CIR-cuit BREAK-er ｜ has been CLOSED ｜ suc-CESS-ful-ly.",
    quiz: [
      { q: "接地开关已经成功合上，怎么说？", a: "The grounding switch has been closed successfully." },
      { q: "has been closed 和 was closed 在操作确认中用哪个？", a: "操作确认用 has been closed。has been = 现在完成时，强调'当前断路器处于合闸状态'；was closed = 一般过去时，只描述过去发生的动作。操作确认关心的是当前状态，所以用 has been。" },
    ],
  },
  {
    id: 1342,
    en: "Please verify the voltage has been restored.",
    cn: "请确认电压已经恢复。",
    ipa: "/pliːz ˈvɛr.ɪ.faɪ ðə ˈvoʊl.tɪdʒ hæz biːn rɪˈstɔːrd/",
    tags: ["第1342句", "操作确认", "★★★★★"],
    when: "合闸后第一步确认：电压是否已经恢复到正常值。操作人员需要查看电压表或BMS/DCIM上的电压读数，确认已达到额定电压。",
    words: [
      { w: "verify", ipa: "/ˈvɛr.ɪ.faɪ/", pos: "动词", cn: "确认；核实", memory: "① ver = 真实（拉丁语 verus）；② -ify = 使成为。\nverify = 核实/确认（通过检查数据/读表来确认）。\n与 confirm 的区别：verify 更强调'通过测量/检查来确认'，confirm 更偏向'口头/书面确认'。", phonics: "ver 读 /vɛr/，i 读 /ɪ/，fy 读 /faɪ/。", collocations: [["verify the voltage", "确认电压"], ["verify the reading", "确认读数"], ["verify the result", "确认结果"]], examples: [["Please verify the current reading.", "请确认电流读数。"], ["We need to verify the isolation.", "我们需要确认隔离。"]] },
      { w: "voltage", ipa: "/ˈvoʊl.tɪdʒ/", pos: "名词", cn: "电压", memory: "① volt = 伏特（电压单位）；② -age = 名词后缀。\nvoltage = 电压。\n数据中心常见电压等级：低压 400V/230V，中压 11kV/33kV，高压 132kV/275kV。", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/。", collocations: [["voltage level", "电压等级"], ["voltage drop", "电压降"], ["rated voltage", "额定电压"]], examples: [["The voltage is 400V.", "电压是400V。"], ["Check the voltage level.", "检查电压等级。"]] },
      { w: "restored", ipa: "/rɪˈstɔːrd/", pos: "动词（过去分词）", cn: "恢复", memory: "① re- = 再次；② store = 储存。\nrestore = 恢复到原来的状态。\n电力系统中 restore = 恢复供电/恢复运行。", phonics: "re 读 /rɪ/，store 读 /stɔːr/，d 读 /d/。", collocations: [["voltage restored", "电压恢复"], ["power restored", "供电恢复"], ["service restored", "业务恢复"]], examples: [["Power has been restored.", "供电已恢复。"], ["Normal operation has been restored.", "正常运行已恢复。"]] },
    ],
    phrases: [
      { p: "voltage has been restored", ipa: "/ˈvoʊl.tɪdʒ hæz biːn rɪˈstɔːrd/", cn: "电压已经恢复", why: "voltage + has been restored = 电压已经恢复。合闸后必须确认电压读数已达到额定值，这是供电恢复的第一个指标。" },
    ],
    grammar: [
      { q: "verify 后面可以直接跟从句吗？", a: "可以。verify + that 从句 或 verify + 名词短语 都可以。\n✅ Please verify the voltage has been restored.（请确认电压已恢复 → verify + 省略that的从句）\n✅ Please verify that the voltage is normal.（请确认电压正常 → verify + that从句）\n✅ Please verify the voltage reading.（请确认电压读数 → verify + 名词短语）\n口语中 that 经常省略。" },
    ],
    pattern: "Please verify + 参数 + has been restored",
    patternExamples: [
      { en: "Please verify the power has been restored.", cn: "请确认供电已经恢复。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }] },
      { en: "Please verify the cooling has been restored.", cn: "请确认制冷已经恢复。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }] },
      { en: "Please verify the communication has been restored.", cn: "请确认通信已经恢复。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
    ],
    thinking: "合闸后确认电压恢复是电气操作的标准流程。\n确认顺序：① 电压（本句）→ ② 电流（1343）→ ③ 供电（1344）。\n电压恢复 = 电路已接通，但电流是否正常还需要进一步确认。",
    pronunciation: "verify 重音在第一音节：VER-i-fy。\nvoltage 的 o 读长音 /oʊ/。\nrestored 的 or 读 /ɔːr/。\n节奏：Please VER-i-fy ｜ the VOL-tage ｜ has been re-STORED.",
    quiz: [
      { q: "请确认供电已经恢复，怎么说？", a: "Please verify the power has been restored." },
      { q: "verify 和 confirm 有什么区别？", a: "verify = 通过检查/测量来核实（看仪表、查读数）；confirm = 口头/书面确认（报告、签字）。电气操作中 verify 更精确，因为需要看实际测量值。" },
    ],
  },
  {
    id: 1343,
    en: "Please verify the current is normal.",
    cn: "请确认电流正常。",
    ipa: "/pliːz ˈvɛr.ɪ.faɪ ðə ˈkʌr.ənt ɪz ˈnɔːr.məl/",
    tags: ["第1343句", "操作确认", "★★★★★"],
    when: "确认电压恢复后，第二步确认电流是否在正常范围内。电流正常说明负载已接通且没有短路或过载。",
    words: [
      { w: "current", ipa: "/ˈkʌr.ənt/", pos: "名词", cn: "电流", memory: "① curr = 流动（拉丁语 currere）；② -ent = 名词后缀。\ncurrent = 电流（电荷的流动）。\n注意：current 也可以做形容词表示'当前的'，但这里做名词表示'电流'。", phonics: "cur 读 /kʌr/，rent 读 /rənt/，重音在第一音节。", collocations: [["load current", "负载电流"], ["rated current", "额定电流"], ["current reading", "电流读数"]], examples: [["The current is 50 amps.", "电流是50安培。"], ["Check the load current.", "检查负载电流。"]] },
    ],
    phrases: [
      { p: "current is normal", ipa: "/ˈkʌr.ənt ɪz ˈnɔːr.məl/", cn: "电流正常", why: "current + is + normal = 电流正常。合闸后电流读数在额定范围内，说明负载已正常接通，没有过流或欠流。" },
    ],
    grammar: [
      { q: "current 做名词时怎么区分是'电流'还是'当前的'？", a: "看上下文和搭配：\n✅ The current is normal.（电流正常 → current 做名词，搭配 is normal）\n✅ The current status is normal.（当前状态正常 → current 做形容词，修饰 status）\n电气语境中 current 单独出现几乎总是指'电流'。" },
    ],
    pattern: "Please verify the + 电气参数 + is normal",
    patternExamples: [
      { en: "Please verify the frequency is normal.", cn: "请确认频率正常。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "Please verify the temperature is normal.", cn: "请确认温度正常。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "Please verify the pressure is normal.", cn: "请确认压力正常。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "电流确认是合闸后第二个关键检查点。\n电流异常可能意味着：① 过流 = 短路或过载（需立即跳闸保护）；② 欠流/零流 = 负载未接通或开路。\n正常电流 = 额定电流的 60%-90% 范围（视具体负载而定）。",
    pronunciation: "current 的 u 读 /ʌ/（短音），不要读成 /kjuː/。\n注意 current（电流）和 currant（醋栗）发音相同但拼写不同。\n节奏：Please VER-i-fy ｜ the CUR-rent ｜ is NOR-mal.",
    quiz: [
      { q: "请确认频率正常，怎么说？", a: "Please verify the frequency is normal." },
      { q: "合闸后为什么要确认电流？", a: "确认电流是为了验证：① 负载已正常接通（不是零电流=开路）；② 没有过载或短路（不是过电流）；③ 三相电流平衡。电流正常 = 供电真正恢复且负载运行正常。" },
    ],
  },
  {
    id: 1344,
    en: "Please verify the power has been restored.",
    cn: "请确认供电已经恢复。",
    ipa: "/pliːz ˈvɛr.ɪ.faɪ ðə ˈpaʊ.ər hæz biːn rɪˈstɔːrd/",
    tags: ["第1344句", "操作确认", "★★★★★"],
    when: "电压和电流都确认正常后，综合确认供电已经完全恢复。这是对所有电气参数的总结性确认。",
    words: [
      { w: "power", ipa: "/ˈpaʊ.ər/", pos: "名词", cn: "供电；电力", memory: "① power = 力量/电力/供电。\n在电气语境中 power = 供电/电力供应。\npower restored = 供电恢复 = 电压、电流、频率等所有参数正常。", phonics: "pow 读 /paʊ/，er 读 /ər/。", collocations: [["power supply", "供电"], ["power restored", "供电恢复"], ["power outage", "停电"]], examples: [["Power has been restored to the building.", "大楼供电已恢复。"], ["The power supply is stable.", "供电稳定。"]] },
    ],
    phrases: [
      { p: "power has been restored", ipa: "/ˈpaʊ.ər hæz biːn rɪˈstɔːrd/", cn: "供电已经恢复", why: "power + has been + restored = 供电已经恢复。这是合闸后三个确认步骤的总结：电压✅ → 电流✅ → 供电恢复✅。" },
    ],
    grammar: [
      { q: "power restored 和 power recovered 有什么区别？", a: "restore = 恢复（人为操作使系统恢复到正常状态）\nrecover = 恢复（自然恢复/自动恢复）\n✅ Power has been restored.（供电已恢复 → 人工操作合闸后恢复）\n✅ The system recovered automatically.（系统自动恢复了 → 无需人工干预）\n倒闸操作用 restore，因为是人工合闸恢复的供电。" },
    ],
    pattern: "Please verify the + 系统 + has been restored",
    patternExamples: [
      { en: "Please verify the cooling system has been restored.", cn: "请确认制冷系统已经恢复。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please verify the UPS has been restored.", cn: "请确认UPS已经恢复。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }] },
      { en: "Please verify the generator has been restored.", cn: "请确认发电机已经恢复。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
    ],
    thinking: "供电恢复确认是倒闸操作的最终目标。\n英语汇报逻辑链：① breaker closed（合闸完成）→ ② voltage restored（电压恢复）→ ③ current normal（电流正常）→ ④ power restored（供电恢复）。\n四步确认全部通过后，才可以进入监控阶段。",
    pronunciation: "power 的 ow 读 /aʊ/（双元音）。\nrestored 重音在第二音节：re-STORED。\n节奏：Please VER-i-fy ｜ the POW-er ｜ has been re-STORED.",
    quiz: [
      { q: "请确认UPS已经恢复，怎么说？", a: "Please verify the UPS has been restored." },
      { q: "供电恢复确认的完整流程是什么？", a: "四步确认：① breaker closed（断路器已合闸）→ ② voltage restored（电压已恢复）→ ③ current normal（电流正常）→ ④ power restored（供电已恢复）。四步全部通过 = 供电恢复确认完成。" },
    ],
  },
  {
    id: 1345,
    en: "Please monitor the equipment for five minutes.",
    cn: "请持续观察设备五分钟。",
    ipa: "/pliːz ˈmɒn.ɪ.tər ðə ɪˈkwɪp.mənt fɔːr faɪv ˈmɪn.ɪts/",
    tags: ["第1345句", "操作确认", "★★★★★"],
    when: "合闸并确认供电恢复后，需要持续观察设备运行状态至少五分钟，确保没有延迟性异常（如温升、振动、异响等）。",
    words: [
      { w: "monitor", ipa: "/ˈmɒn.ɪ.tər/", pos: "动词", cn: "监控；观察", memory: "① monitor = 监控/持续观察。\n在电气操作中 monitor = 持续观察设备状态，不是看一次就走，而是连续关注一段时间。", phonics: "mon 读 /mɒn/，i 读 /ɪ/，tor 读 /tər/。", collocations: [["monitor the equipment", "观察设备"], ["monitor the temperature", "监控温度"], ["continuous monitoring", "持续监控"]], examples: [["Please monitor the breaker for 10 minutes.", "请观察断路器10分钟。"], ["We are monitoring the situation.", "我们正在监控情况。"]] },
      { w: "equipment", ipa: "/ɪˈkwɪp.mənt/", pos: "名词", cn: "设备", memory: "① equip = 装备/配备；② -ment = 名词后缀。\nequipment = 设备（不可数名词，不加s）。\n注意：equipment 是不可数名词，不能说 equipments。", phonics: "e 读 /ɪ/，quip 读 /kwɪp/，ment 读 /mənt/。", collocations: [["electrical equipment", "电气设备"], ["monitoring equipment", "监控设备"], ["safety equipment", "安全设备"]], examples: [["The equipment is running normally.", "设备运行正常。"], ["Check all equipment before leaving.", "离开前检查所有设备。"]] },
    ],
    phrases: [
      { p: "monitor ... for five minutes", ipa: "/ˈmɒn.ɪ.tər fɔːr faɪv ˈmɪn.ɪts/", cn: "持续观察……五分钟", why: "monitor + 对象 + for + 时间 = 持续观察某对象多长时间。for 表示持续时间。" },
    ],
    grammar: [
      { q: "for five minutes 和 during five minutes 有什么区别？", a: "for + 时间 = 持续多长时间（强调时长）\nduring + 时间 = 在某段时间内（强调时段中的某个时间点）\n✅ Monitor the equipment for five minutes.（持续观察设备五分钟 → 全程监控）\n✅ An alarm occurred during the monitoring.（监控期间出现了告警 → 某个时间点发生）\n本句用 for，因为要求持续观察整段时间。" },
    ],
    pattern: "Please monitor the + 设备 + for + 时间",
    patternExamples: [
      { en: "Please monitor the transformer for ten minutes.", cn: "请持续观察变压器十分钟。", words: [{ w: "monitor", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "transformer", ipa: "/trænsˈfɔːrmər/", cn: "变压器", phonics: "trans 读 /træns/，former 读 /fɔːrmər/" }] },
      { en: "Please monitor the UPS for fifteen minutes.", cn: "请持续观察UPS十五分钟。", words: [{ w: "monitor", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }] },
      { en: "Please monitor the generator for thirty minutes.", cn: "请持续观察发电机三十分钟。", words: [{ w: "monitor", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
    ],
    thinking: "合闸后的五分钟观察期是标准操作规范。\n观察要点：① 有无异响（嗡嗡声变化、放电声）；② 有无异味（绝缘烧焦味）；③ 温度是否异常上升；④ 指示灯/仪表是否正常；⑤ 有无振动异常。\n五分钟观察期通过后才能宣布操作完成。",
    pronunciation: "monitor 的 o 读 /ɒ/（短音）。\nequipment 重音在第二音节：e-QUIP-ment。\n节奏：Please MON-i-tor ｜ the e-QUIP-ment ｜ for FIVE MIN-utes.",
    quiz: [
      { q: "请持续观察变压器十分钟，怎么说？", a: "Please monitor the transformer for ten minutes." },
      { q: "equipment 能不能加 s？", a: "不能。equipment 是不可数名词，不能写成 equipments。需要表示多台设备时用 pieces of equipment 或 equipment units。" },
    ],
  },
  {
    id: 1346,
    en: "No abnormal alarms have been reported.",
    cn: "没有出现异常告警。",
    ipa: "/noʊ æbˈnɔːr.məl ˈæl.ɑːrmz hæv biːn rɪˈpɔːr.tɪd/",
    tags: ["第1346句", "操作确认", "★★★★★"],
    when: "五分钟观察期内，确认BMS、SCADA、保护继电器等系统没有出现任何异常告警，这是操作完成前最后一个确认项。",
    words: [
      { w: "abnormal", ipa: "/æbˈnɔːr.məl/", pos: "形容词", cn: "异常的", memory: "① ab- = 偏离/不（否定前缀）；② normal = 正常的。\nabnormal = 不正常的/异常的。\n在运维中 abnormal alarm = 异常告警（不应该出现的告警）。", phonics: "ab 读 /æb/，nor 读 /nɔːr/，mal 读 /məl/。", collocations: [["abnormal alarm", "异常告警"], ["abnormal condition", "异常状况"], ["abnormal reading", "异常读数"]], examples: [["No abnormal conditions found.", "未发现异常状况。"], ["The reading is abnormal.", "读数异常。"]] },
      { w: "reported", ipa: "/rɪˈpɔːr.tɪd/", pos: "动词（过去分词）", cn: "报告；出现（告警）", memory: "① re- = 再次；② port = 带/运送（拉丁语 portare）。\nreport = 报告/上报。\n告警语境中 reported = 被报告/被触发/出现。\nNo alarms reported = 没有告警被触发。", phonics: "re 读 /rɪ/，port 读 /pɔːrt/，ed 读 /ɪd/。", collocations: [["alarms reported", "告警被报告"], ["no alarms reported", "无告警"], ["fault reported", "故障被报告"]], examples: [["No faults have been reported.", "没有故障被报告。"], ["A new alarm was reported.", "一条新告警被触发。"]] },
    ],
    phrases: [
      { p: "no abnormal alarms", ipa: "/noʊ æbˈnɔːr.məl ˈæl.ɑːrmz/", cn: "没有异常告警", why: "no + abnormal + alarms = 没有异常告警。abnormal 强调'不应该出现的'，区别于常规告警。" },
    ],
    grammar: [
      { q: "have been reported 和 were reported 有什么区别？", a: "have been reported = 到现在为止已经被报告（现在完成时，从过去到现在的时间段）\nwere reported = 在过去某个时间被报告（一般过去时）\n✅ No abnormal alarms have been reported.（到目前为止没有异常告警 → 从合闸到现在的整个观察期）\n✅ No abnormal alarms were reported during the test.（测试期间没有异常告警 → 描述过去某个特定时段）\n观察期汇报用 have been，因为是从合闸到现在的持续状态。" },
    ],
    pattern: "No + 异常类型 + have been reported",
    patternExamples: [
      { en: "No abnormal vibrations have been reported.", cn: "没有异常振动被报告。", words: [{ w: "abnormal", ipa: "/æbˈnɔːrməl/", cn: "异常", phonics: "ab 读 /æb/，normal 读 /nɔːrməl/" }, { w: "reported", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
      { en: "No temperature alarms have been reported.", cn: "没有温度告警被报告。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "reported", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
      { en: "No faults have been reported.", cn: "没有故障被报告。", words: [{ w: "faults", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "reported", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
    ],
    thinking: "无异常告警 = 操作成功的最终确认。\n英语否定汇报结构：No + 异常类型 + have been reported。\n这句话必须在五分钟观察期结束后正式说出来，作为操作完成的最后一个条件。",
    pronunciation: "abnormal 重音在第二音节：ab-NOR-mal。\nalarms 的 ar 读 /ɑːr/。\nreported 重音在第二音节：re-PORT-ed。\n节奏：No ab-NOR-mal AL-arms ｜ have been re-PORT-ed.",
    quiz: [
      { q: "没有温度告警被报告，怎么说？", a: "No temperature alarms have been reported." },
      { q: "abnormal 的前缀 ab- 是什么意思？", a: "ab- 是拉丁语否定前缀，表示'偏离/离开/不'。ab- + normal = 偏离正常 = 异常。类似词汇：abnormal（异常的）、absent（缺席的）、abuse（滥用）。" },
    ],
  },
  {
    id: 1347,
    en: "The switching operation was completed successfully.",
    cn: "倒闸操作顺利完成。",
    ipa: "/ðə ˈswɪtʃ.ɪŋ ˌɒp.əˈreɪ.ʃən wɒz kəmˈpliː.tɪd səkˈsɛs.fə.li/",
    tags: ["第1347句", "操作确认", "★★★★★"],
    when: "所有确认步骤（合闸成功、电压恢复、电流正常、供电恢复、五分钟观察、无异常告警）全部通过后，正式宣布倒闸操作顺利完成。",
    words: [
      { w: "switching operation", ipa: "/ˈswɪtʃ.ɪŋ ˌɒp.əˈreɪ.ʃən/", pos: "名词短语", cn: "倒闸操作", memory: "① switching = 切换/倒闸；② operation = 操作。\nswitching operation = 倒闸操作（电力系统中改变运行方式的操作）。\n包括分闸、合闸、切换电源、切换母线等操作。", phonics: "switch 读 /swɪtʃ/，ing 读 /ɪŋ/；op 读 /ɒp/，er 读 /ər/，a 读 /ə/，tion 读 /ʃən/。", collocations: [["switching operation", "倒闸操作"], ["switching sequence", "倒闸顺序"], ["switching procedure", "倒闸流程"]], examples: [["The switching operation is in progress.", "倒闸操作进行中。"], ["Prepare for the switching operation.", "准备倒闸操作。"]] },
      { w: "completed", ipa: "/kəmˈpliː.tɪd/", pos: "动词（过去分词）", cn: "完成", memory: "① com- = 完全；② plete = 充满（拉丁语 plere）。\ncomplete = 完成/使完整。\nwas completed = 已完成（一般过去时被动语态）。", phonics: "com 读 /kəm/，plete 读 /pliːt/，d 读 /ɪd/。", collocations: [["operation completed", "操作完成"], ["task completed", "任务完成"], ["inspection completed", "检查完成"]], examples: [["The work has been completed.", "工作已完成。"], ["All checks are completed.", "所有检查已完成。"]] },
    ],
    phrases: [
      { p: "was completed successfully", ipa: "/wɒz kəmˈpliː.tɪd səkˈsɛs.fə.li/", cn: "顺利完成", why: "was + completed + successfully = 顺利完成。一般过去时被动语态，宣布整个操作已经成功结束。" },
    ],
    grammar: [
      { q: "这里为什么用 was completed 而不是 has been completed？", a: "was completed = 一般过去时（描述一个已经结束的动作，操作已经过去了）\nhas been completed = 现在完成时（强调当前状态——操作已完成）\n✅ The operation was completed successfully.（操作顺利完成 → 作为历史记录/宣布事实）\n✅ The operation has been completed.（操作已完成 → 强调当前状态）\n宣布操作结果时两种都可以用，was completed 更常用于正式记录。" },
    ],
    pattern: "The + 操作名称 + was completed successfully",
    patternExamples: [
      { en: "The maintenance was completed successfully.", cn: "维护工作顺利完成。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "The inspection was completed successfully.", cn: "检查顺利完成。", words: [] },
      { en: "The test was completed successfully.", cn: "测试顺利完成。", words: [{ w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
    ],
    thinking: "宣布操作完成是倒闸操作的正式收尾。\n这句话之后需要做三件事：① 记录操作时间（1348）；② 更新操作日志（1349）；③ 通知客户（1350）。\n所有电气操作必须有完整的书面记录。",
    pronunciation: "switching 的 sw 读 /sw/，itch 读 /ɪtʃ/。\noperation 重音在第三音节：op-er-A-tion。\n节奏：The SWITCH-ing op-er-A-tion ｜ was com-PLET-ed ｜ suc-CESS-ful-ly.",
    quiz: [
      { q: "维护工作顺利完成，怎么说？", a: "The maintenance was completed successfully." },
      { q: "操作完成后还需要做哪三件事？", a: "① record the operation time（记录操作时间）；② update the operation log（更新操作日志）；③ inform the customer（通知客户）。所有电气操作必须有完整的书面记录和客户通知。" },
    ],
  },
  {
    id: 1348,
    en: "Please record the operation time.",
    cn: "请记录操作时间。",
    ipa: "/pliːz rɪˈkɔːrd ðə ˌɒp.əˈreɪ.ʃən taɪm/",
    tags: ["第1348句", "操作记录", "★★★★"],
    when: "操作完成后，必须准确记录合闸/分闸的具体时间，这是操作日志和事故追溯的关键数据。",
    words: [
      { w: "record", ipa: "/rɪˈkɔːrd/", pos: "动词", cn: "记录", memory: "① re- = 再次；② cord = 心（拉丁语 cor/cordis）。\nrecord = 记录（字面意思'再次放在心里'→ 记下来）。\n注意：record 做动词时重音在第二音节 /rɪˈkɔːrd/，做名词时重音在第一音节 /ˈrɛk.ərd/。", phonics: "re 读 /rɪ/，cord 读 /kɔːrd/（动词重音在后）。", collocations: [["record the time", "记录时间"], ["record the reading", "记录读数"], ["record the event", "记录事件"]], examples: [["Please record the switching time.", "请记录倒闸时间。"], ["Record all readings in the log.", "在日志中记录所有读数。"]] },
      { w: "operation time", ipa: "/ˌɒp.əˈreɪ.ʃən taɪm/", pos: "名词短语", cn: "操作时间", memory: "operation + time = 操作时间。\n记录操作时间是电气操作的强制要求，精确到分钟，用于事故追溯和操作审计。", phonics: "operation 重音在第三音节；time 读 /taɪm/。", collocations: [["operation time", "操作时间"], ["completion time", "完成时间"], ["start time", "开始时间"]], examples: [["What is the operation time?", "操作时间是什么？"], ["Record the exact completion time.", "记录精确的完成时间。"]] },
    ],
    phrases: [
      { p: "record the operation time", ipa: "/rɪˈkɔːrd ðə ˌɒp.əˈreɪ.ʃən taɪm/", cn: "记录操作时间", why: "record + the + operation time = 记录操作时间。这是每次倒闸操作必须完成的记录项。" },
    ],
    grammar: [
      { q: "record 做动词和名词时发音一样吗？", a: "不一样！\nrecord（动词）= /rɪˈkɔːrd/ 重音在第二音节\nrecord（名词）= /ˈrɛk.ərd/ 重音在第一音节\n✅ Please record the time.（请记录时间 → 动词）\n✅ Check the maintenance record.（查看维护记录 → 名词）\n这是英语中常见的'重音移位'现象。" },
    ],
    pattern: "Please record the + 记录项",
    patternExamples: [
      { en: "Please record the voltage reading.", cn: "请记录电压读数。", words: [{ w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }, { w: "reading", ipa: "/ˈriːdɪŋ/", cn: "读数", phonics: "read 读 /riːd/，ing 读 /ɪŋ/" }] },
      { en: "Please record the equipment serial number.", cn: "请记录设备序列号。", words: [{ w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }] },
      { en: "Please record the ambient temperature.", cn: "请记录环境温度。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
    ],
    thinking: "操作时间记录是电气操作法规要求的强制项。\n需要记录的时间点：① 操作开始时间；② 分闸时间；③ 合闸时间；④ 操作完成时间。\n这些时间数据在事故调查中是关键证据。",
    pronunciation: "record 做动词时重音在后：re-CORD。\noperation 重音在第三音节。\n节奏：Please re-CORD ｜ the op-er-A-tion TIME.",
    quiz: [
      { q: "请记录电压读数，怎么说？", a: "Please record the voltage reading." },
      { q: "record 做动词和做名词发音有什么不同？", a: "record 做动词读 /rɪˈkɔːrd/（重音在第二音节）；做名词读 /ˈrɛk.ərd/（重音在第一音节）。英语中很多双音节词都有这种重音移位：动词重音在后，名词重音在前。" },
    ],
  },
  {
    id: 1349,
    en: "Please update the operation log.",
    cn: "请更新操作日志。",
    ipa: "/pliːz ˌʌpˈdeɪt ðə ˌɒp.əˈreɪ.ʃən lɒɡ/",
    tags: ["第1349句", "操作记录", "★★★★"],
    when: "操作完成后，将本次倒闸操作的完整信息（时间、设备、操作人员、结果）更新到操作日志中，供交接和审计使用。",
    words: [
      { w: "update", ipa: "/ˌʌpˈdeɪt/", pos: "动词", cn: "更新", memory: "① up = 向上/最新；② date = 日期。\nupdate = 更新（把信息更新到最新状态）。\n操作日志 update = 把本次操作信息写入日志。", phonics: "up 读 /ʌp/，date 读 /deɪt/。", collocations: [["update the log", "更新日志"], ["update the record", "更新记录"], ["update the status", "更新状态"]], examples: [["Please update the shift log.", "请更新交接日志。"], ["The BMS has been updated.", "BMS已更新。"]] },
      { w: "operation log", ipa: "/ˌɒp.əˈreɪ.ʃən lɒɡ/", pos: "名词短语", cn: "操作日志", memory: "operation + log = 操作日志。\nlog = 日志/记录本（源自航海日志 logbook）。\n数据中心操作日志是法定文件，必须准确、完整、不可篡改。", phonics: "operation 重音在第三音节；log 读 /lɒɡ/。", collocations: [["operation log", "操作日志"], ["shift log", "交接日志"], ["maintenance log", "维护日志"]], examples: [["Write it in the operation log.", "写在操作日志里。"], ["Check the log for previous operations.", "查看日志中以前的操作记录。"]] },
    ],
    phrases: [
      { p: "update the operation log", ipa: "/ˌʌpˈdeɪt ðə ˌɒp.əˈreɪ.ʃən lɒɡ/", cn: "更新操作日志", why: "update + the + operation log = 更新操作日志。每次操作完成后必须更新日志，这是合规要求。" },
    ],
    grammar: [
      { q: "log 和 record 有什么区别？", a: "log = 日志（按时间顺序记录的流水账，强调时序）\nrecord = 记录（更广义，可以是任何形式的记录）\n✅ Update the operation log.（更新操作日志 → 在时间轴上添加新条目）\n✅ Keep a record of the incident.（保存事件记录 → 留存文件/证据）\nlog 更像'日记'，record 更像'档案'。" },
    ],
    pattern: "Please update the + 日志/记录名称",
    patternExamples: [
      { en: "Please update the maintenance log.", cn: "请更新维护日志。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "Please update the alarm log.", cn: "请更新告警日志。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Please update the shift handover log.", cn: "请更新交接班日志。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }, { w: "handover", ipa: "/ˈhændoʊvər/", cn: "交接", phonics: "hand 读 /hænd/，over 读 /oʊvər/" }] },
    ],
    thinking: "操作日志是数据中心合规运营的核心文件。\n日志内容应包括：① 操作时间；② 操作人员姓名；③ 设备编号；④ 操作内容；⑤ 操作结果；⑥ 审批人签字。\n电子日志和纸质日志都需要保存。",
    pronunciation: "update 重音在第二音节：up-DATE（动词）。\nlog 读短音 /lɒɡ/。\n节奏：Please up-DATE ｜ the op-er-A-tion LOG.",
    quiz: [
      { q: "请更新交接班日志，怎么说？", a: "Please update the shift handover log." },
      { q: "log 和 record 在运维语境中有什么区别？", a: "log = 按时间顺序的流水日志（operation log / shift log），强调时序和连续性；record = 广义的记录/档案（maintenance record / incident record），可以是独立文件。log 像日记，record 像档案。" },
    ],
  },
  {
    id: 1350,
    en: "Please inform the customer that the switching has been completed.",
    cn: "请通知客户倒闸操作已经完成。",
    ipa: "/pliːz ɪnˈfɔːrm ðə ˈkʌs.tə.mər ðæt ðə ˈswɪtʃ.ɪŋ hæz biːn kəmˈpliː.tɪd/",
    tags: ["第1350句", "操作确认", "★★★★★"],
    when: "倒闸操作全部完成（包括确认和记录）后，最后一个步骤是通知客户操作已完成、供电已恢复正常。这是客户服务的标准闭环。",
    words: [
      { w: "inform", ipa: "/ɪnˈfɔːrm/", pos: "动词", cn: "通知；告知", memory: "① in- = 进入；② form = 形状/形式。\ninform = 通知（让对方获得信息）。\ninform 比 tell 更正式，常用于官方/专业通知场景。", phonics: "in 读 /ɪn/，form 读 /fɔːrm/。", collocations: [["inform the customer", "通知客户"], ["inform the manager", "通知经理"], ["inform immediately", "立即通知"]], examples: [["Please inform the duty manager.", "请通知值班经理。"], ["We will inform you of any changes.", "如有变化我们会通知您。"]] },
      { w: "switching", ipa: "/ˈswɪtʃ.ɪŋ/", pos: "名词", cn: "倒闸操作", memory: "switch = 开关/切换；switching = 倒闸/切换操作。\n在电气语境中 switching = 倒闸操作（分闸/合闸/切换电源等）。", phonics: "switch 读 /swɪtʃ/，ing 读 /ɪŋ/。", collocations: [["switching operation", "倒闸操作"], ["switching completed", "倒闸完成"], ["switching sequence", "倒闸顺序"]], examples: [["The switching is complete.", "倒闸完成。"], ["Prepare for switching.", "准备倒闸。"]] },
    ],
    phrases: [
      { p: "inform the customer that ...", ipa: "/ɪnˈfɔːrm ðə ˈkʌs.tə.mər ðæt/", cn: "通知客户……", why: "inform + 人 + that + 从句 = 通知某人某事。这是正式通知的标准句型。" },
    ],
    grammar: [
      { q: "inform 和 notify 有什么区别？", a: "inform = 通知/告知（强调让对方知道信息）\nnotify = 正式通知（更强调正式程序/书面通知）\n✅ Please inform the customer.（请通知客户 → 口头或书面都可以）\n✅ Please notify the customer in writing.（请书面正式通知客户 → 更正式）\n日常操作用 inform 即可，涉及合同/法律义务时用 notify。" },
    ],
    pattern: "Please inform + 对象 + that + 完成信息",
    patternExamples: [
      { en: "Please inform the team that the maintenance is complete.", cn: "请通知团队维护已完成。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "Please inform the vendor that the access is approved.", cn: "请通知供应商入场已获批准。", words: [{ w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }, { w: "access", ipa: "/ˈæksɛs/", cn: "门禁", phonics: "ac 读 /æk/，cess 读 /sɛs/" }] },
      { en: "Please inform the control room that the alarm has cleared.", cn: "请通知控制室告警已恢复。", words: [{ w: "control", ipa: "/kənˈtroʊl/", cn: "控制", phonics: "con 读 /kən/，trol 读 /troʊl/" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "通知客户是倒闸操作闭环的最后一步。\n完整闭环：① 准备（reading + verification）→ ② 执行（opening + closing）→ ③ 确认（voltage + current + power）→ ④ 监控（5 minutes）→ ⑤ 记录（time + log）→ ⑥ 通知客户（本句）。\n六步闭环缺一不可。",
    pronunciation: "inform 重音在第二音节：in-FORM。\nswitching 的 sw 读 /sw/。\n节奏：Please in-FORM ｜ the CUS-tom-er ｜ that the SWITCH-ing ｜ has been com-PLET-ed.",
    quiz: [
      { q: "请通知控制室告警已恢复，怎么说？", a: "Please inform the control room that the alarm has cleared." },
      { q: "倒闸操作的完整闭环包括哪六步？", a: "① 准备（阅读流程+确认编号）→ ② 执行（分闸+合闸）→ ③ 确认（电压+电流+供电恢复）→ ④ 监控（5分钟观察）→ ⑤ 记录（操作时间+日志）→ ⑥ 通知客户。六步闭环缺一不可。" },
    ],
  },
  {
    id: 1351,
    en: "The circuit breaker failed to close.",
    cn: "断路器合闸失败。",
    ipa: "/ðə ˈsɜːr.kɪt ˈbreɪ.kər feɪld tuː kloʊz/",
    tags: ["第1351句", "操作异常", "★★★★★"],
    when: "执行合闸操作后，断路器未能成功合闸——这是倒闸操作中最常见的异常情况之一。操作人员必须立即停止后续步骤并启动异常处理流程。",
    words: [
      { w: "failed", ipa: "/feɪld/", pos: "动词（过去式）", cn: "失败；未能", memory: "① fail = 失败/未能做到。\nfail to + 动词 = 未能做某事。\nfailed to close = 未能合闸 = 合闸失败。", phonics: "fail 读 /feɪl/，ed 读 /d/。", collocations: [["failed to close", "合闸失败"], ["failed to open", "分闸失败"], ["failed to operate", "操作失败"]], examples: [["The breaker failed to trip.", "断路器未能跳闸。"], ["The test failed.", "测试失败。"]] },
      { w: "close", ipa: "/kloʊz/", pos: "动词", cn: "合闸", memory: "close = 关闭/合闸（使电路接通）。\n在电气操作中 close 特指合闸，不是普通的'关门'。", phonics: "close 读 /kloʊz/（动词），注意 s 读 /z/。", collocations: [["close the breaker", "合闸断路器"], ["close the switch", "合上开关"], ["close the contact", "闭合触点"]], examples: [["Close the breaker now.", "现在合闸。"], ["The contact closed.", "触点闭合了。"]] },
    ],
    phrases: [
      { p: "failed to close", ipa: "/feɪld tuː kloʊz/", cn: "合闸失败", why: "failed + to close = 未能合闸。fail to + 动词是英语中表示'未能做某事'的标准结构。" },
    ],
    grammar: [
      { q: "failed to close 和 didn't close 有什么区别？", a: "failed to close = 合闸失败（尝试了但没成功，暗示有故障原因）\ndidn't close = 没有合闸（可能是没有尝试，也可能是没成功）\n✅ The breaker failed to close.（断路器合闸失败 → 尝试了合闸操作但未成功）\n✅ The breaker didn't close.（断路器没有合闸 → 描述事实，原因不明）\n异常报告中用 failed to，因为明确表示'操作已尝试但失败了'。" },
    ],
    pattern: "The + 设备 + failed to + 操作",
    patternExamples: [
      { en: "The grounding switch failed to close.", cn: "接地开关合闸失败。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "The motor failed to start.", cn: "电机启动失败。", words: [{ w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "The relay failed to operate.", cn: "继电器操作失败。", words: [] },
    ],
    thinking: "合闸失败是倒闸操作中最需要警惕的异常。\n可能原因：① 机械故障（操作机构卡涩）；② 电气故障（合闸线圈烧毁）；③ 联锁条件未满足（接地开关未分开）；④ 控制回路断线。\n操作人员绝不能强行重复合闸——必须先查明原因。",
    pronunciation: "failed 的 ai 读 /eɪ/。\nclose 做动词读 /kloʊz/（s 发 /z/ 音）。\n节奏：The CIR-cuit BREAK-er ｜ FAILED ｜ to CLOSE.",
    quiz: [
      { q: "电机启动失败，怎么说？", a: "The motor failed to start." },
      { q: "合闸失败后能马上再试一次吗？", a: "不能。合闸失败后必须先调查原因（investigate the cause），查明原因并排除故障后才能再次尝试。强行重复合闸可能导致设备损坏或安全事故。" },
    ],
  },
  {
    id: 1352,
    en: "The breaker tripped immediately after closing.",
    cn: "断路器合闸后立即跳闸。",
    ipa: "/ðə ˈbreɪ.kər trɪpt ɪˈmiː.di.ət.li ˈæf.tər ˈkloʊ.zɪŋ/",
    tags: ["第1352句", "操作异常", "★★★★★"],
    when: "断路器虽然成功合闸了，但合闸后瞬间又自动跳闸——这通常意味着存在短路、过载或接地故障，保护装置正确动作切断了电路。",
    words: [
      { w: "tripped", ipa: "/trɪpt/", pos: "动词（过去式）", cn: "跳闸", memory: "① trip = 绊倒/触发；② tripped = 跳闸。\n在电气语境中 trip = 跳闸（保护装置动作使断路器断开）。\n跳闸 = 断路器自动断开 = 保护动作。", phonics: "trip 读 /trɪp/，ped 读 /pt/。", collocations: [["breaker tripped", "断路器跳闸"], ["trip the relay", "触发继电器"], ["nuisance trip", "误跳闸"]], examples: [["The breaker tripped again.", "断路器又跳闸了。"], ["What caused the trip?", "什么原因导致跳闸？"]] },
      { w: "immediately", ipa: "/ɪˈmiː.di.ət.li/", pos: "副词", cn: "立即；马上", memory: "① im- = 不（否定前缀）；② mediate = 中间/间隔。\nimmediate = 没有间隔的 → 立即的。\nimmediately = 立即/马上。", phonics: "im 读 /ɪ/，me 读 /miː/，di 读 /di/，ate 读 /ət/，ly 读 /li/。", collocations: [["immediately after", "立即在……之后"], ["stop immediately", "立即停止"], ["report immediately", "立即报告"]], examples: [["Stop the operation immediately.", "立即停止操作。"], ["Call the engineer immediately.", "立即打电话给工程师。"]] },
    ],
    phrases: [
      { p: "tripped immediately after closing", ipa: "/trɪpt ɪˈmiː.di.ət.li ˈæf.tər ˈkloʊ.zɪŋ/", cn: "合闸后立即跳闸", why: "tripped + immediately + after closing = 合闸后立即跳闸。immediately 强调时间极短，几乎是瞬间跳闸，说明故障很严重（通常是短路）。" },
    ],
    grammar: [
      { q: "after closing 和 after it was closed 有什么区别？", a: "after closing = 合闸后（简洁，after + 动名词）\nafter it was closed = 在它被合闸后（完整从句）\n✅ The breaker tripped immediately after closing.（合闸后立即跳闸 → 简洁）\n✅ The breaker tripped immediately after it was closed.（在它被合闸后立即跳闸 → 完整）\n技术英语中倾向用 after + 动名词，更简洁。" },
    ],
    pattern: "The + 设备 + tripped + immediately after + 操作",
    patternExamples: [
      { en: "The relay tripped immediately after energizing.", cn: "继电器通电后立即动作。", words: [{ w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "The UPS tripped immediately after switching.", cn: "UPS切换后立即跳闸。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }, { w: "switching", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "The generator tripped immediately after loading.", cn: "发电机加载后立即跳闸。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }, { w: "loading", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
    ],
    thinking: "合闸后立即跳闸是最严重的异常之一。\n常见原因：① 短路故障（最可能——电流瞬间飙升触发保护）；② 接地故障；③ 保护装置设定值不正确；④ 设备内部故障。\n处理原则：绝不能再次强行合闸！必须先排查故障原因。",
    pronunciation: "tripped 的 tr 读 /tr/，ip 读 /ɪp/。\nimmediately 有五个音节：im-ME-di-ate-ly。\nafter 的 a 读 /æ/。\n节奏：The BREAK-er ｜ TRIPPED ｜ im-ME-di-ate-ly ｜ AF-ter CLOS-ing.",
    quiz: [
      { q: "UPS切换后立即跳闸，怎么说？", a: "The UPS tripped immediately after switching." },
      { q: "合闸后立即跳闸最常见的原因是什么？", a: "最常见原因是短路故障（short circuit fault）。短路导致电流瞬间飙升到额定值的数倍甚至数十倍，保护装置正确动作跳闸保护设备。绝不能再次强行合闸，必须先排查短路点。" },
    ],
  },
  {
    id: 1353,
    en: "Please stop the operation immediately.",
    cn: "请立即停止操作。",
    ipa: "/pliːz stɒp ðə ˌɒp.əˈreɪ.ʃən ɪˈmiː.di.ət.li/",
    tags: ["第1353句", "操作异常", "★★★★★"],
    when: "发现合闸失败或合闸后跳闸等异常情况后，现场负责人必须立即下令停止所有后续操作步骤，防止继续操作导致更大的安全隐患。",
    words: [
      { w: "stop", ipa: "/stɒp/", pos: "动词", cn: "停止", memory: "stop = 停止/中断。\nstop the operation = 停止操作。\n在安全场景中 stop 是最直接、最紧急的指令词。", phonics: "stop 读 /stɒp/，o 读短音 /ɒ/。", collocations: [["stop the operation", "停止操作"], ["stop immediately", "立即停止"], ["emergency stop", "紧急停止"]], examples: [["Stop all work immediately.", "立即停止所有工作。"], ["The emergency stop was activated.", "紧急停止已启动。"]] },
    ],
    phrases: [
      { p: "stop the operation immediately", ipa: "/stɒp ðə ˌɒp.əˈreɪ.ʃən ɪˈmiː.di.ət.li/", cn: "立即停止操作", why: "stop + the + operation + immediately = 立即停止操作。immediately 放在句尾强调紧迫性。" },
    ],
    grammar: [
      { q: "stop 后面接动名词和不定式有什么区别？", a: "stop + 动名词 = 停止正在做的事\nstop + to + 动词 = 停下来去做另一件事\n✅ Stop the operation.（停止操作 → 停止当前正在进行的操作）\n✅ Stop to check the equipment.（停下来去检查设备 → 停下当前动作，转去检查）\n本句 stop the operation = 停止正在进行的操作。" },
    ],
    pattern: "Please stop + 当前活动 + immediately",
    patternExamples: [
      { en: "Please stop the maintenance immediately.", cn: "请立即停止维护工作。", words: [{ w: "stop", ipa: "/stɒp/", cn: "停止", phonics: "stop 读 /stɒp/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Please stop the testing immediately.", cn: "请立即停止测试。", words: [{ w: "stop", ipa: "/stɒp/", cn: "停止", phonics: "stop 读 /stɒp/" }, { w: "testing", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Please stop the work immediately.", cn: "请立即停止工作。", words: [{ w: "stop", ipa: "/stɒp/", cn: "停止", phonics: "stop 读 /stɒp/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
    ],
    thinking: "异常情况下立即停止操作是安全第一原则。\n任何人发现异常都有权喊停（stop work authority），不需要等待上级批准。\n停止后：① 确保人员安全 → ② 保持现场不变 → ③ 通知负责人 → ④ 调查原因。",
    pronunciation: "stop 的 o 读短音 /ɒ/。\nimmediately 重音在第二音节：im-ME-di-ate-ly。\n节奏：Please STOP ｜ the op-er-A-tion ｜ im-ME-di-ate-ly.",
    quiz: [
      { q: "请立即停止维护工作，怎么说？", a: "Please stop the maintenance immediately." },
      { q: "stop doing 和 stop to do 有什么区别？", a: "stop doing = 停止正在做的事（stop the operation = 停止操作）；stop to do = 停下来去做另一件事（stop to check = 停下来去检查）。两者意思完全不同。" },
    ],
  },
  {
    id: 1354,
    en: "Please investigate the cause before continuing.",
    cn: "继续之前请调查原因。",
    ipa: "/pliːz ɪnˈvɛs.tɪ.ɡeɪt ðə kɔːz bɪˈfɔːr kənˈtɪn.juː.ɪŋ/",
    tags: ["第1354句", "操作异常", "★★★★★"],
    when: "停止操作后，必须先调查清楚异常原因，确认安全后才能决定是否继续操作或执行回退。严禁未查明原因就重复操作。",
    words: [
      { w: "investigate", ipa: "/ɪnˈvɛs.tɪ.ɡeɪt/", pos: "动词", cn: "调查；排查", memory: "① in- = 进入；② vestig = 追踪（拉丁语 vestigium = 脚印）；③ -ate = 动词后缀。\ninvestigate = 追踪脚印 → 调查/排查。\n电气操作中 investigate = 排查故障原因。", phonics: "in 读 /ɪn/，ves 读 /vɛs/，ti 读 /tɪ/，gate 读 /ɡeɪt/。", collocations: [["investigate the cause", "调查原因"], ["investigate the fault", "排查故障"], ["investigate the issue", "调查问题"]], examples: [["We need to investigate the root cause.", "我们需要调查根本原因。"], ["Please investigate why the breaker tripped.", "请排查断路器为什么跳闸。"]] },
      { w: "cause", ipa: "/kɔːz/", pos: "名词", cn: "原因", memory: "cause = 原因/起因。\nroot cause = 根本原因（RCA 分析的核心概念）。\nimmediate cause = 直接原因。", phonics: "cause 读 /kɔːz/，au 读 /ɔː/。", collocations: [["root cause", "根本原因"], ["cause of failure", "失败原因"], ["probable cause", "可能原因"]], examples: [["What is the root cause?", "根本原因是什么？"], ["The cause is still unknown.", "原因仍然未知。"]] },
    ],
    phrases: [
      { p: "investigate the cause", ipa: "/ɪnˈvɛs.tɪ.ɡeɪt ðə kɔːz/", cn: "调查原因", why: "investigate + the + cause = 调查原因。在异常处理中，必须先 investigate 才能决定下一步行动。" },
    ],
    grammar: [
      { q: "before continuing 和 before you continue 有区别吗？", a: "意思相同，before continuing 更简洁。\n✅ Investigate the cause before continuing.（继续前调查原因 → 简洁）\n✅ Investigate the cause before you continue.（你继续前调查原因 → 完整）\n操作规程中倾向用 before + 动名词。" },
    ],
    pattern: "Please investigate the cause before + 下一步动作",
    patternExamples: [
      { en: "Please investigate the cause before retrying.", cn: "重试之前请调查原因。", words: [{ w: "cause", ipa: "/kɔːz/", cn: "原因", phonics: "cause 读 /kɔːz/" }] },
      { en: "Please investigate the cause before energizing.", cn: "通电之前请调查原因。", words: [{ w: "cause", ipa: "/kɔːz/", cn: "原因", phonics: "cause 读 /kɔːz/" }] },
      { en: "Please investigate the cause before resuming work.", cn: "恢复工作之前请调查原因。", words: [{ w: "cause", ipa: "/kɔːz/", cn: "原因", phonics: "cause 读 /kɔːz/" }] },
    ],
    thinking: "未查明原因就重复操作是电气安全的大忌。\n排查步骤：① 检查保护装置动作记录；② 检查操作回路/控制回路；③ 检查设备本体（机械、绝缘）；④ 检查联锁条件是否满足；⑤ 检查PTW/MOP是否正确。\n查明原因后才能决定：继续操作 or 回退 or 暂停。",
    pronunciation: "investigate 重音在第二音节：in-VES-ti-gate。\ncause 读 /kɔːz/。\nbefore 重音在第二音节：be-FORE。\n节奏：Please in-VES-ti-gate ｜ the CAUSE ｜ be-FORE con-TIN-u-ing.",
    quiz: [
      { q: "重试之前请调查原因，怎么说？", a: "Please investigate the cause before retrying." },
      { q: "为什么不能未查明原因就重复合闸？", a: "因为：① 可能导致设备损坏（短路电流冲击）；② 可能引发安全事故（电弧、火灾）；③ 掩盖了真正的故障原因；④ 违反操作规程。必须先调查原因，确认安全后才能决定下一步。" },
    ],
  },
  {
    id: 1355,
    en: "Please notify the electrical engineer.",
    cn: "请通知电气工程师。",
    ipa: "/pliːz ˈnoʊ.tɪ.faɪ ðə ɪˈlɛk.trɪ.kəl ˌɛn.dʒɪˈnɪr/",
    tags: ["第1355句", "操作异常", "★★★★★"],
    when: "发现操作异常后，需要立即通知电气工程师到场进行专业排查和诊断。电气工程师是有资质处理电气故障的专业人员。",
    words: [
      { w: "notify", ipa: "/ˈnoʊ.tɪ.faɪ/", pos: "动词", cn: "通知", memory: "① not = 标记/注意（拉丁语 notare）；② -ify = 使成为。\nnotify = 正式通知。\nnotify 比 inform/tell 更正式，常用于紧急情况下的官方通知。", phonics: "no 读 /noʊ/，ti 读 /tɪ/，fy 读 /faɪ/。", collocations: [["notify the engineer", "通知工程师"], ["notify immediately", "立即通知"], ["notify in writing", "书面通知"]], examples: [["Please notify the duty manager.", "请通知值班经理。"], ["All parties have been notified.", "所有相关方已被通知。"]] },
      { w: "electrical engineer", ipa: "/ɪˈlɛk.trɪ.kəl ˌɛn.dʒɪˈnɪr/", pos: "名词短语", cn: "电气工程师", memory: "① electrical = 电气的；② engineer = 工程师。\nelectrical engineer = 电气工程师，负责电力系统的设计、运维和故障处理。\n数据中心电气工程师通常需要持牌（licensed/chartered）。", phonics: "e 读 /ɪ/，lec 读 /lɛk/，tri 读 /trɪ/，cal 读 /kəl/；en 读 /ɛn/，gi 读 /dʒɪ/，neer 读 /nɪr/。", collocations: [["electrical engineer", "电气工程师"], ["senior engineer", "高级工程师"], ["resident engineer", "驻场工程师"]], examples: [["Call the electrical engineer.", "打电话给电气工程师。"], ["The engineer is on site.", "工程师在现场。"]] },
    ],
    phrases: [
      { p: "notify the electrical engineer", ipa: "/ˈnoʊ.tɪ.faɪ ðə ɪˈlɛk.trɪ.kəl ˌɛn.dʒɪˈnɪr/", cn: "通知电气工程师", why: "notify + the + electrical engineer = 通知电气工程师。操作异常时必须通知专业电气工程师到场处理。" },
    ],
    grammar: [
      { q: "notify 和 inform 在紧急场景中用哪个？", a: "两者都可以，notify 更正式、更常用于紧急/官方场景。\n✅ Notify the engineer immediately.（立即通知工程师 → 紧急场景，正式）\n✅ Inform the engineer about the issue.（告知工程师这个问题 → 一般场景）\n紧急操作异常用 notify 更合适。" },
    ],
    pattern: "Please notify the + 专业人员",
    patternExamples: [
      { en: "Please notify the safety officer.", cn: "请通知安全官。", words: [{ w: "notify", ipa: "/ˈnoʊtɪfaɪ/", cn: "通知", phonics: "not 读 /noʊt/，ify 读 /ɪfaɪ/" }, { w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }] },
      { en: "Please notify the facility manager.", cn: "请通知设施经理。", words: [{ w: "notify", ipa: "/ˈnoʊtɪfaɪ/", cn: "通知", phonics: "not 读 /noʊt/，ify 读 /ɪfaɪ/" }] },
      { en: "Please notify the vendor engineer.", cn: "请通知供应商工程师。", words: [{ w: "notify", ipa: "/ˈnoʊtɪfaɪ/", cn: "通知", phonics: "not 读 /noʊt/，ify 读 /ɪfaɪ/" }, { w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }, { w: "engineer", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }] },
    ],
    thinking: "电气工程师是倒闸操作异常时的第一通知对象。\n通知顺序：① 电气工程师（技术排查）→ ② 值班经理（管理决策）→ ③ 客户（信息通报）→ ④ 供应商（如需设备支持）。\n电气工程师到场后才能决定是继续操作还是回退。",
    pronunciation: "notify 重音在第一音节：NO-ti-fy。\nelectrical 重音在第二音节：e-LEC-tri-cal。\nengineer 重音在第三音节：en-gi-NEER。\n节奏：Please NO-ti-fy ｜ the e-LEC-tri-cal ｜ en-gi-NEER.",
    quiz: [
      { q: "请通知安全官，怎么说？", a: "Please notify the safety officer." },
      { q: "操作异常时的通知顺序是什么？", a: "① 电气工程师（技术排查）→ ② 值班经理（管理决策）→ ③ 客户（信息通报）→ ④ 供应商（如需设备支持）。电气工程师是第一通知对象。" },
    ],
  },
  {
    id: 1356,
    en: "Please notify the duty manager.",
    cn: "请通知值班经理。",
    ipa: "/pliːz ˈnoʊ.tɪ.faɪ ðə ˈdjuː.ti ˈmæn.ɪ.dʒər/",
    tags: ["第1356句", "操作异常", "★★★★★"],
    when: "通知电气工程师的同时或之后，需要通知值班经理。值班经理是现场最高指挥，负责决策是否继续操作、启动应急程序或升级处理。",
    words: [
      { w: "duty manager", ipa: "/ˈdjuː.ti ˈmæn.ɪ.dʒər/", pos: "名词短语", cn: "值班经理", memory: "① duty = 值班/职责；② manager = 经理。\nduty manager = 值班经理，数据中心现场最高指挥人。\n值班经理有权决定：启动应急、联系客户、批准操作、调度人员。", phonics: "duty 读 /ˈdjuː.ti/，manager 读 /ˈmæn.ɪ.dʒər/。", collocations: [["duty manager", "值班经理"], ["on duty", "值班中"], ["duty roster", "值班表"]], examples: [["The duty manager has been notified.", "值班经理已被通知。"], ["Contact the duty manager.", "联系值班经理。"]] },
    ],
    phrases: [
      { p: "notify the duty manager", ipa: "/ˈnoʊ.tɪ.faɪ ðə ˈdjuː.ti ˈmæn.ɪ.dʒər/", cn: "通知值班经理", why: "notify + the + duty manager = 通知值班经理。值班经理是现场决策者，必须第一时间知道异常情况。" },
    ],
    grammar: [
      { q: "notify someone 和 notify someone of something 有什么区别？", a: "notify + 人 = 通知某人（只说通知谁，不说通知什么内容）\nnotify + 人 + of + 事 = 通知某人某事\n✅ Notify the duty manager.（通知值班经理 → 简洁指令）\n✅ Notify the duty manager of the failure.（通知值班经理这个故障 → 说明通知内容）\n紧急场景中简洁优先，直接说 notify + 人。" },
    ],
    pattern: "Please notify the + 管理层级",
    patternExamples: [
      { en: "Please notify the shift supervisor.", cn: "请通知值班主管。", words: [{ w: "notify", ipa: "/ˈnoʊtɪfaɪ/", cn: "通知", phonics: "not 读 /noʊt/，ify 读 /ɪfaɪ/" }, { w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }] },
      { en: "Please notify the operations manager.", cn: "请通知运维经理。", words: [{ w: "notify", ipa: "/ˈnoʊtɪfaɪ/", cn: "通知", phonics: "not 读 /noʊt/，ify 读 /ɪfaɪ/" }, { w: "operations", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }] },
      { en: "Please notify the site director.", cn: "请通知站点总监。", words: [{ w: "notify", ipa: "/ˈnoʊtɪfaɪ/", cn: "通知", phonics: "not 读 /noʊt/，ify 读 /ɪfaɪ/" }, { w: "site", ipa: "/saɪt/", cn: "场地", phonics: "site 读 /saɪt/" }] },
    ],
    thinking: "值班经理在操作异常中的角色是决策者。\n值班经理需要决定的事项：① 是否继续操作（继续/暂停/回退）；② 是否需要启动应急程序；③ 是否需要通知客户；④ 是否需要升级处理。\n技术人员排查原因，值班经理做决策——分工明确。",
    pronunciation: "duty 的 u 读 /juː/（长音）。\nmanager 重音在第一音节：MAN-a-ger。\n节奏：Please NO-ti-fy ｜ the DU-ty MAN-a-ger.",
    quiz: [
      { q: "请通知运维经理，怎么说？", a: "Please notify the operations manager." },
      { q: "操作异常时值班经理需要决定哪些事项？", a: "① 是否继续操作（继续/暂停/回退）；② 是否启动应急程序；③ 是否通知客户；④ 是否升级处理。技术人员负责排查，值班经理负责决策。" },
    ],
  },
  {
    id: 1357,
    en: "Please activate the emergency response procedure.",
    cn: "请启动应急响应程序。",
    ipa: "/pliːz ˈæk.tɪ.veɪt ðə ɪˈmɜːr.dʒən.si rɪˈspɒns prəˈsiː.dʒər/",
    tags: ["第1357句", "操作异常", "★★★★★"],
    when: "当操作异常可能导致安全风险（如电弧、火灾、人员伤害）或影响客户业务时，值班经理下令启动应急响应程序（ERP），调动应急资源。",
    words: [
      { w: "activate", ipa: "/ˈæk.tɪ.veɪt/", pos: "动词", cn: "启动；激活", memory: "① active = 活跃的/活动的；② -ate = 动词后缀。\nactivate = 使活跃 → 启动/激活。\n在应急场景中 activate = 正式启动某个程序/系统。", phonics: "ac 读 /æk/，ti 读 /tɪ/，vate 读 /veɪt/。", collocations: [["activate the procedure", "启动程序"], ["activate the alarm", "触发告警"], ["activate the system", "启动系统"]], examples: [["Activate the fire alarm.", "启动火警。"], ["The ERP has been activated.", "应急响应程序已启动。"]] },
      { w: "emergency response procedure", ipa: "/ɪˈmɜːr.dʒən.si rɪˈspɒns prəˈsiː.dʒər/", pos: "名词短语", cn: "应急响应程序", memory: "① emergency = 紧急情况；② response = 响应/应对；③ procedure = 程序/流程。\nERP (Emergency Response Procedure) = 应急响应程序。\n数据中心 ERP 涵盖：火灾、触电、化学品泄漏、自然灾害等各类紧急场景。", phonics: "e 读 /ɪ/，mer 读 /mɜːr/，gen 读 /dʒən/，cy 读 /si/；re 读 /rɪ/，sponse 读 /spɒns/；pro 读 /prə/，ce 读 /siː/，dure 读 /dʒər/。", collocations: [["emergency response", "应急响应"], ["emergency procedure", "应急程序"], ["emergency plan", "应急预案"]], examples: [["Follow the emergency procedure.", "按照应急程序执行。"], ["The emergency plan is on the wall.", "应急预案挂在墙上。"]] },
    ],
    phrases: [
      { p: "activate the emergency response procedure", ipa: "/ˈæk.tɪ.veɪt ðə ɪˈmɜːr.dʒən.si rɪˈspɒns prəˈsiː.dʒər/", cn: "启动应急响应程序", why: "activate + the + emergency response procedure = 启动应急响应程序。这是最严肃的操作指令，意味着事态已经超出正常处理范围。" },
    ],
    grammar: [
      { q: "activate 和 start 在应急场景中有什么区别？", a: "activate = 启动/激活（正式，常用于启动系统/程序/预案）\nstart = 开始（通用，不够正式）\n✅ Activate the emergency response procedure.（启动应急响应程序 → 正式、严肃）\n✅ Start the meeting.（开始会议 → 日常）\n应急场景必须用 activate，不能用 start。" },
    ],
    pattern: "Please activate the + 应急程序/系统",
    patternExamples: [
      { en: "Please activate the fire suppression system.", cn: "请启动消防灭火系统。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please activate the evacuation plan.", cn: "请启动疏散计划。", words: [] },
      { en: "Please activate the backup power system.", cn: "请启动备用电源系统。", words: [{ w: "backup", ipa: "/ˈbækʌp/", cn: "备份", phonics: "back 读 /bæk/，up 读 /ʌp/" }, { w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
    ],
    thinking: "启动应急响应程序是极端措施，只在安全风险不可控时使用。\nERP 启动后的行动：① 确保人员安全（疏散/隔离）；② 联系消防/急救（如需要）；③ 通知管理层和客户；④ 执行应急预案中的具体步骤；⑤ 事后复盘。\n本句只有在严重异常时才会使用。",
    pronunciation: "activate 重音在第一音节：AC-ti-vate。\nemergency 重音在第二音节：e-MER-gen-cy。\nresponse 重音在第二音节：re-SPONSE。\n节奏：Please AC-ti-vate ｜ the e-MER-gen-cy ｜ re-SPONSE ｜ pro-CE-dure.",
    quiz: [
      { q: "请启动消防灭火系统，怎么说？", a: "Please activate the fire suppression system." },
      { q: "什么时候需要启动应急响应程序？", a: "当操作异常可能导致：① 人员安全风险（触电、电弧灼伤）；② 火灾风险；③ 重大设备损坏；④ 客户业务大面积中断。只有在事态超出正常处理范围时才启动 ERP。" },
    ],
  },
  {
    id: 1358,
    en: "Please prepare to roll back the operation.",
    cn: "请准备执行回退操作。",
    ipa: "/pliːz prɪˈpɛr tuː roʊl bæk ðə ˌɒp.əˈreɪ.ʃən/",
    tags: ["第1358句", "操作异常", "★★★★★"],
    when: "当合闸失败且原因无法短时间排除时，需要将系统恢复到操作前的状态——即执行回退操作（roll back）。这通常意味着把已经分闸的开关重新合上，恢复原来的运行方式。",
    words: [
      { w: "roll back", ipa: "/roʊl bæk/", pos: "动词短语", cn: "回退；恢复到之前状态", memory: "① roll = 滚动；② back = 回。\nroll back = 回滚/回退（恢复到操作前的状态）。\n在IT和电气领域都表示'撤销已做的操作，恢复到之前的状态'。", phonics: "roll 读 /roʊl/，back 读 /bæk/。", collocations: [["roll back the operation", "回退操作"], ["roll back to previous state", "恢复到之前状态"], ["rollback plan", "回退计划"]], examples: [["We need to roll back.", "我们需要回退。"], ["The rollback was successful.", "回退成功。"]] },
      { w: "prepare", ipa: "/prɪˈpɛr/", pos: "动词", cn: "准备", memory: "① pre- = 预先；② pare = 准备（拉丁语 parare）。\nprepare = 预先准备。\nprepare to = 准备去做某事。", phonics: "pre 读 /prɪ/，pare 读 /pɛr/。", collocations: [["prepare to", "准备去"], ["prepare for", "为……做准备"], ["well prepared", "准备充分"]], examples: [["Prepare for the switching operation.", "为倒闸操作做准备。"], ["We are prepared.", "我们准备好了。"]] },
    ],
    phrases: [
      { p: "roll back the operation", ipa: "/roʊl bæk ðə ˌɒp.əˈreɪ.ʃən/", cn: "回退操作", why: "roll back + the + operation = 回退操作。将系统恢复到操作开始前的运行方式，通常是把已分闸的开关重新合上。" },
    ],
    grammar: [
      { q: "prepare to roll back 和 prepare for rollback 有什么区别？", a: "prepare to + 动词 = 准备去做某事（强调即将执行的动作）\nprepare for + 名词 = 为某事做准备（强调准备过程）\n✅ Prepare to roll back the operation.（准备执行回退操作 → 即将执行）\n✅ Prepare for the rollback.（为回退做准备 → 准备阶段）\n本句用 prepare to，因为已经决定要回退了，准备立即执行。" },
    ],
    pattern: "Please prepare to + 回退/恢复动作",
    patternExamples: [
      { en: "Please prepare to restore the previous configuration.", cn: "请准备恢复之前的配置。", words: [{ w: "restore", ipa: "/rɪˈstɔːr/", cn: "恢复", phonics: "re 读 /rɪ/，store 读 /stɔːr/" }] },
      { en: "Please prepare to switch back to the original power source.", cn: "请准备切换回原来的电源。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }] },
      { en: "Please prepare to re-energize the original feeder.", cn: "请准备重新给原馈线送电。", words: [] },
    ],
    thinking: "回退操作是倒闸操作的安全兜底。\n每次倒闸操作前都必须准备好回退方案（rollback plan），确保操作失败时能安全恢复。\n回退原则：① 按倒序执行（最后做的最先恢复）；② 每步都要确认；③ 回退后验证系统正常。",
    pronunciation: "roll 读长音 /roʊl/。\nback 读短音 /bæk/。\nprepare 重音在第二音节：pre-PARE。\n节奏：Please pre-PARE ｜ to ROLL BACK ｜ the op-er-A-tion.",
    quiz: [
      { q: "请准备切换回原来的电源，怎么说？", a: "Please prepare to switch back to the original power source." },
      { q: "为什么每次倒闸操作前都要准备回退方案？", a: "因为：① 操作可能失败（合闸失败/跳闸）；② 可能有未知的设备故障；③ 回退方案是安全兜底，确保任何情况下都能恢复供电；④ 这是操作规程的强制要求。没有回退方案 = 不允许开始操作。" },
    ],
  },
  {
    id: 1359,
    en: "The system has been safely restored to its previous condition.",
    cn: "系统已经安全恢复到操作前状态。",
    ipa: "/ðə ˈsɪs.təm hæz biːn ˈseɪf.li rɪˈstɔːrd tuː ɪts ˈpriː.vi.əs kənˈdɪʃ.ən/",
    tags: ["第1359句", "操作异常", "★★★★★"],
    when: "回退操作执行完毕后，确认系统已经完全恢复到操作前的运行状态。这是回退操作的最终确认。",
    words: [
      { w: "safely", ipa: "/ˈseɪf.li/", pos: "副词", cn: "安全地", memory: "① safe = 安全的；② -ly = 副词后缀。\nsafely = 安全地。\nsafely restored = 安全恢复（强调恢复过程中没有发生安全事故）。", phonics: "safe 读 /seɪf/，ly 读 /li/。", collocations: [["safely restored", "安全恢复"], ["safely completed", "安全完成"], ["safely isolated", "安全隔离"]], examples: [["The equipment was safely isolated.", "设备已安全隔离。"], ["The system has been safely restored.", "系统已安全恢复。"]] },
      { w: "previous condition", ipa: "/ˈpriː.vi.əs kənˈdɪʃ.ən/", pos: "名词短语", cn: "之前的状态/操作前状态", memory: "① previous = 之前的/先前的；② condition = 状态/条件。\nprevious condition = 之前的状态 = 操作前状态。\n恢复到操作前的运行方式。", phonics: "pre 读 /priː/，vi 读 /vi/，ous 读 /əs/；con 读 /kən/，di 读 /dɪ/，tion 读 /ʃən/。", collocations: [["previous condition", "之前的状态"], ["previous state", "之前的状态"], ["original condition", "原始状态"]], examples: [["Restore to the previous condition.", "恢复到之前的状态。"], ["The system is back to its original condition.", "系统回到原始状态。"]] },
    ],
    phrases: [
      { p: "safely restored to its previous condition", ipa: "/ˈseɪf.li rɪˈstɔːrd tuː ɪts ˈpriː.vi.əs kənˈdɪʃ.ən/", cn: "安全恢复到操作前状态", why: "safely + restored + to + previous condition = 安全恢复到操作前状态。这是回退操作完成的正式确认用语。" },
    ],
    grammar: [
      { q: "has been safely restored 中 safely 的位置可以变吗？", a: "可以。safely 作为副词可以放在不同位置：\n✅ The system has been safely restored.（safely 修饰 restored → 恢复过程是安全的）\n✅ The system has safely been restored.（safely 修饰 been restored → 强调整体安全）\n✅ Safely, the system has been restored.（safely 修饰整句 → 幸运的是）\n最常用的位置是在 has been 和 restored 之间。" },
    ],
    pattern: "The system has been safely restored to + 目标状态",
    patternExamples: [
      { en: "The system has been safely restored to normal operation.", cn: "系统已安全恢复到正常运行。", words: [{ w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }, { w: "operation", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }] },
      { en: "The system has been safely restored to the original configuration.", cn: "系统已安全恢复到原始配置。", words: [{ w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "The equipment has been safely restored to standby mode.", cn: "设备已安全恢复到待机模式。", words: [{ w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }, { w: "mode", ipa: "/moʊd/", cn: "模式", phonics: "mode 读 /moʊd/" }] },
    ],
    thinking: "回退完成确认是异常处理的最后一步。\n确认要点：① 所有开关位置与操作前一致；② 所有告警已清除；③ 所有电气参数正常；④ 保护定值未被修改；⑤ 操作记录已更新。\n确认后才能宣布异常处理结束。",
    pronunciation: "safely 的 a 读 /eɪ/。\nprevious 重音在第一音节：PRE-vi-ous。\ncondition 重音在第二音节：con-DI-tion。\n节奏：The SYS-tem ｜ has been SAFE-ly ｜ re-STORED ｜ to its PRE-vi-ous ｜ con-DI-tion.",
    quiz: [
      { q: "系统已安全恢复到正常运行，怎么说？", a: "The system has been safely restored to normal operation." },
      { q: "回退完成后需要确认哪些要点？", a: "① 所有开关位置与操作前一致；② 所有告警已清除；③ 所有电气参数正常；④ 保护定值未被修改；⑤ 操作记录已更新。五点全部确认 = 回退完成。" },
    ],
  },
  {
    id: 1360,
    en: "The switching operation has been suspended until further notice.",
    cn: "倒闸操作暂停，等待进一步通知。",
    ipa: "/ðə ˈswɪtʃ.ɪŋ ˌɒp.əˈreɪ.ʃən hæz biːn səˈspɛn.dɪd ʌnˈtɪl ˈfɜːr.ðər ˈnoʊ.tɪs/",
    tags: ["第1360句", "操作异常", "★★★★★"],
    when: "操作异常处理完毕、系统恢复原状后，值班经理正式宣布本次倒闸操作暂停。后续何时重新执行，需等待进一步调查和决策后另行通知。",
    words: [
      { w: "suspended", ipa: "/səˈspɛn.dɪd/", pos: "动词（过去分词）", cn: "暂停；中止", memory: "① sus- = 在下面（拉丁语 sub）；② pend = 悬挂（拉丁语 pendere）。\nsuspend = 悬挂在下面 → 暂停/中止（暂时搁置）。\nhas been suspended = 已被暂停。\n区别于 cancel（取消）——suspend 是暂时的，以后可能恢复。", phonics: "sus 读 /səs/，pend 读 /pɛnd/，ed 读 /ɪd/。", collocations: [["operation suspended", "操作暂停"], ["suspended until", "暂停直到"], ["suspend the work", "暂停工作"]], examples: [["The maintenance has been suspended.", "维护已暂停。"], ["Work is suspended until tomorrow.", "工作暂停到明天。"]] },
      { w: "until further notice", ipa: "/ʌnˈtɪl ˈfɜːr.ðər ˈnoʊ.tɪs/", pos: "短语", cn: "直到另行通知", memory: "① until = 直到；② further = 进一步的；③ notice = 通知。\nuntil further notice = 直到另行通知为止（不确定何时恢复）。\n这是正式场景中的常用短语，表示'暂时搁置，等有消息再说'。", phonics: "un 读 /ʌn/，til 读 /tɪl/；fur 读 /fɜːr/，ther 读 /ðər/；no 读 /noʊ/，tice 读 /tɪs/。", collocations: [["until further notice", "直到另行通知"], ["further notice", "进一步通知"], ["pending further notice", "等待进一步通知"]], examples: [["The project is on hold until further notice.", "项目暂停直到另行通知。"], ["We will resume until further notice.", "我们将等待进一步通知后恢复。"]] },
    ],
    phrases: [
      { p: "has been suspended until further notice", ipa: "/hæz biːn səˈspɛn.dɪd ʌnˈtɪl ˈfɜːr.ðər ˈnoʊ.tɪs/", cn: "暂停，等待进一步通知", why: "has been suspended + until further notice = 已暂停，直到另行通知。这是正式宣布操作暂停的标准用语。" },
    ],
    grammar: [
      { q: "suspended 和 cancelled 有什么区别？", a: "suspended = 暂停（暂时的，以后可能恢复执行）\ncancelled = 取消（永久的，不再执行）\n✅ The operation has been suspended.（操作已暂停 → 以后可能重新执行）\n✅ The operation has been cancelled.（操作已取消 → 不再执行了）\n本句用 suspended，因为调查清楚原因后可能还会重新执行倒闸操作。" },
    ],
    pattern: "The + 活动 + has been suspended until further notice",
    patternExamples: [
      { en: "The maintenance has been suspended until further notice.", cn: "维护工作暂停，等待进一步通知。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "The project has been suspended until further notice.", cn: "项目暂停，等待进一步通知。", words: [] },
      { en: "The test has been suspended until further notice.", cn: "测试暂停，等待进一步通知。", words: [{ w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
    ],
    thinking: "暂停操作是异常处理后的标准收尾。\n暂停后需要做的事：① 完成异常报告（incident report）；② 安排根因分析（RCA）；③ 制定纠正措施（corrective actions）；④ 制定预防措施（preventive actions）；⑤ 安排重新执行时间。\n暂停 ≠ 结束，只是推迟到条件满足时再执行。",
    pronunciation: "suspended 重音在第二音节：sus-PEND-ed。\nuntil 重音在第二音节：un-TIL。\nfurther 的 ur 读 /ɜːr/。\nnotice 重音在第一音节：NO-tice。\n节奏：The SWITCH-ing op-er-A-tion ｜ has been sus-PEND-ed ｜ un-TIL ｜ FUR-ther NO-tice.",
    quiz: [
      { q: "维护工作暂停，等待进一步通知，怎么说？", a: "The maintenance has been suspended until further notice." },
      { q: "suspended 和 cancelled 在操作异常场景中分别表示什么？", a: "suspended = 暂停（暂时中止，调查原因后可能重新执行）；cancelled = 取消（永久取消，不再执行）。操作异常后通常先 suspended（暂停），如果查明无法执行才 cancelled（取消）。" },
    ],
  },
];

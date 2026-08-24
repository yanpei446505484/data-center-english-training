// EXPORTS: MOCK_SENTENCES_PART3B

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART3B: ISentence[] = [
  {
    id: 76,
    en: "The current PUE is 1.32.",
    cn: "当前PUE为1.32。",
    ipa: "/ðə ˈkʌr.ənt ˌpiː.juːˈiː ɪz wʌn pɔɪnt θriː tuː/",
    tags: ["第76句", "PUE指标", "★★★★★"],
    when: "汇报当前数据中心的电力使用效率指标。PUE 是衡量数据中心能效的核心 KPI，数值越接近 1.0 表示能效越高。",
    words: [
      { w: "current", ipa: "/ˈkʌr.ənt/", pos: "形容词", cn: "当前的；现在的", memory: "① curr = 流动（如 currency 货币）；② current = 正在流动的 → 当前的。\n在数据中心：current load = 当前负载，current PUE = 当前PUE。", phonics: "cur 读 /kʌr/，rent 读 /rənt/，重音在第一音节。", collocations: [["current PUE", "当前PUE"], ["current load", "当前负载"], ["current status", "当前状态"]], examples: [["The current PUE is excellent.", "当前PUE非常优秀。"], ["Check the current temperature.", "查看当前温度。"]] },
      { w: "PUE", ipa: "/ˌpiː.juːˈiː/", pos: "缩写", cn: "电力使用效率 (Power Usage Effectiveness)", memory: "① P = Power（电力）；② U = Usage（使用）；③ E = Effectiveness（效率）。\nPUE = 总设施功率 / IT设备功率。行业标准：1.2-1.5 为优秀。", phonics: "逐字母读 P-U-E。注意 E 读 /iː/。", collocations: [["current PUE", "当前PUE"], ["target PUE", "目标PUE"], ["PUE ratio", "PUE比率"]], examples: [["Our PUE is 1.32.", "我们的PUE是1.32。"], ["The PUE improved last month.", "PUE上月有所改善。"]] },
    ],
    phrases: [
      { p: "current PUE", ipa: "/ˈkʌr.ənt ˌpiː.juːˈiː/", cn: "当前PUE", why: "current = 当前的，PUE = 电力使用效率。汇报时先说当前值，再与目标值或历史值对比。" },
    ],
    grammar: [
      { q: "如何汇报PUE数值？", a: "使用 The current PUE is + 数值 结构。\n✅ The current PUE is 1.32.（当前PUE是1.32。）\n✅ The PUE is within target.（PUE在目标范围内。）\n✅ The PUE improved by 0.05.（PUE改善了0.05。）" },
    ],
    pattern: "The current + 指标名 + is + 数值",
    patternExamples: [
      { en: "The current load is 8.5 megawatts.", cn: "当前负载是8.5兆瓦。", words: [{ w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
      { en: "The current temperature is 22 degrees.", cn: "当前温度是22度。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
      { en: "The current humidity is 45 percent.", cn: "当前湿度是45%。", words: [{ w: "humidity", ipa: "/hjuːˈmɪdɪti/", cn: "湿度", phonics: "hu 读 /hjuː/，midity 读 /mɪdɪti/" }] },
    ],
    thinking: "PUE 汇报要简洁直接：指标名 + is + 数值。\n如果需要对比，可以补充：The current PUE is 1.32, which is within our target of 1.4.\n交接时PUE是必报项，因为它是数据中心能效的核心KPI。",
    pronunciation: "PUE 逐字母读：P-U-E /piː.juː.iː/。\n1.32 读作 one point three two，不读 one point thirty-two。\n节奏：The CUR-rent PUE ｜ is ONE POINT ｜ THREE TWO.",
    quiz: [
      { q: "当前PUE是1.28，怎么说？", a: "The current PUE is 1.28." },
      { q: "PUE数值越接近1.0表示什么？", a: "表示能效越高，非IT设备（制冷、照明等）消耗的电力占比越小。" },
    ],
  },
  {
    id: 77,
    en: "Please check the room temperature.",
    cn: "请查看机房温度。",
    ipa: "/pliːz tʃɛk ðə ruːm ˈtɛm.pər.ə.tʃər/",
    tags: ["第77句", "环境监控", "★★★★★"],
    when: "请接班人员查看机房整体温度，确认环境参数正常。机房温度是数据中心运维的基础指标。",
    words: [
      { w: "room", ipa: "/ruːm/", pos: "名词", cn: "房间；机房", memory: "① room = 房间；② 在数据中心语境中 = 机房/数据中心大厅。\nserver room = 服务器机房，cold room = 冷库（非数据中心用语）。", phonics: "r 读 /r/，oom 读 /uːm/。注意 oo 发长音 /uː/。", collocations: [["room temperature", "室温/机房温度"], ["server room", "服务器机房"], ["computer room", "计算机房"]], examples: [["Check the room temperature.", "查看机房温度。"], ["The server room is too hot.", "服务器机房太热了。"]] },
    ],
    phrases: [
      { p: "room temperature", ipa: "/ruːm ˈtɛm.pər.ə.tʃər/", cn: "机房温度", why: "room = 机房，temperature = 温度。数据中心标准机房温度：18-27°C（ASHRAE 推荐）。" },
    ],
    grammar: [
      { q: "check 和 monitor 的区别？", a: "check = 查看一次（确认当前状态）。\nmonitor = 持续监控（长时间观察变化）。\n✅ Please check the temperature.（请查看一下温度。）\n✅ Please monitor the temperature.（请持续监控温度。）" },
    ],
    pattern: "Please check the + 环境参数",
    patternExamples: [
      { en: "Please check the room humidity.", cn: "请查看机房湿度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }, { w: "humidity", ipa: "/hjuːˈmɪdɪti/", cn: "湿度", phonics: "hu 读 /hjuː/，midity 读 /mɪdɪti/" }] },
      { en: "Please check the air pressure.", cn: "请查看气压。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }] },
      { en: "Please check the power consumption.", cn: "请查看电力消耗。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }] },
    ],
    thinking: "check 是交接中最常用的动词，表示「查看并确认」。\n交接时逐项 check：temperature → humidity → pressure → power。\n每个参数 check 后确认 within range（在范围内）或 abnormal（异常）。",
    pronunciation: "room 的 r 要卷舌：/ruːm/。\ntemperature 四个音节：tem-per-a-ture /ˈtɛm.pər.ə.tʃər/。\n节奏：Please CHECK ｜ the ROOM ｜ TEM-per-a-ture.",
    quiz: [
      { q: "请查看机房湿度，怎么说？", a: "Please check the room humidity." },
      { q: "数据中心标准机房温度范围是多少？", a: "18-27°C（ASHRAE A1 级别推荐范围）。" },
    ],
  },
  {
    id: 78,
    en: "Please check the room humidity.",
    cn: "请查看机房湿度。",
    ipa: "/pliːz tʃɛk ðə ruːm hjuːˈmɪd.ɪ.ti/",
    tags: ["第78句", "环境监控", "★★★★"],
    when: "查看机房湿度。湿度过低易产生静电（ESD），过高易导致设备凝露，都需要控制在合理范围。",
    words: [
      { w: "humidity", ipa: "/hjuːˈmɪd.ɪ.ti/", pos: "名词", cn: "湿度", memory: "① humid = 潮湿的（形容词）；② humidity = 湿度（名词）。\n数据中心标准湿度：40-60% RH。", phonics: "hu 读 /hjuː/，mid 读 /mɪd/，i 读 /ɪ/，ty 读 /ti/，重音在第二音节。", collocations: [["room humidity", "机房湿度"], ["relative humidity", "相对湿度"], ["high humidity", "高湿度"]], examples: [["Check the room humidity.", "查看机房湿度。"], ["The humidity is too low.", "湿度太低了。"]] },
    ],
    phrases: [
      { p: "room humidity", ipa: "/ruːm hjuːˈmɪd.ɪ.ti/", cn: "机房湿度", why: "与 room temperature 结构相同。湿度通常用相对湿度（RH）表示，单位 %。" },
    ],
    grammar: [
      { q: "如何汇报湿度异常？", a: "使用 The humidity is + too high/low/out of range 结构。\n✅ The humidity is 35%, which is too low.（湿度35%，太低了。）\n✅ The humidity is within range.（湿度在范围内。）\n✅ The humidity is slightly high.（湿度略高。）" },
    ],
    pattern: "Please check the + 环境参数（与第77句同句型）",
    patternExamples: [
      { en: "Please check the rack humidity.", cn: "请查看机柜湿度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "rack", ipa: "/ræk/", cn: "机柜", phonics: "rack 读 /ræk/" }, { w: "humidity", ipa: "/hjuːˈmɪdɪti/", cn: "湿度", phonics: "hu 读 /hjuː/，midity 读 /mɪdɪti/" }] },
      { en: "Please check the outdoor humidity.", cn: "请查看室外湿度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "humidity", ipa: "/hjuːˈmɪdɪti/", cn: "湿度", phonics: "hu 读 /hjuː/，midity 读 /mɪdɪti/" }] },
      { en: "Please check the CRAC unit output.", cn: "请查看精密空调输出。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "湿度和温度是环境监控的两个核心参数，通常一起汇报。\n交接时：temperature ✓ → humidity ✓ → 两者都 within range → 环境正常。\n如果异常，需要说明具体数值和偏差方向（too high / too low）。",
    pronunciation: "humidity 重音在第二音节：hu-MID-i-ty /hjuːˈmɪd.ɪ.ti/。\n节奏：Please CHECK ｜ the ROOM ｜ hu-MID-i-ty.",
    quiz: [
      { q: "机房湿度太低了，怎么说？", a: "The room humidity is too low." },
      { q: "数据中心标准湿度范围是多少？", a: "40-60% RH（相对湿度）。" },
    ],
  },
  {
    id: 79,
    en: "All environmental parameters are within the acceptable range.",
    cn: "所有环境参数均在允许范围内。",
    ipa: "/ɔːl ɪnˌvaɪ.rənˈmɛn.təl pəˈræm.ɪ.tərz ɑːr wɪˈðɪn ðə əkˈsɛp.tə.bəl reɪndʒ/",
    tags: ["第79句", "环境总结", "★★★★★"],
    when: "逐项检查完温度、湿度等参数后，给出环境监控的总结论：全部正常。这是交接中的标准确认句。",
    words: [
      { w: "environmental", ipa: "/ɪnˌvaɪ.rənˈmɛn.təl/", pos: "形容词", cn: "环境的", memory: "① environ = 环绕；② environment = 环境；③ environmental = 环境的。\nenvironmental parameters = 环境参数（温度、湿度、气压等）。", phonics: "en 读 /ɪn/，vi 读 /vaɪ/，ron 读 /rən/，men 读 /mɛn/，tal 读 /təl/，重音在第三音节。共5个音节。", collocations: [["environmental parameters", "环境参数"], ["environmental monitoring", "环境监控"], ["environmental alarm", "环境告警"]], examples: [["All environmental data is normal.", "所有环境数据正常。"], ["Check the environmental sensors.", "检查环境传感器。"]] },
      { w: "parameter", ipa: "/pəˈræm.ɪ.tər/", pos: "名词", cn: "参数；指标", memory: "① para = 旁边/辅助；② meter = 度量；③ parameter = 辅助度量的边界 = 参数。\n在数据中心：temperature, humidity, pressure 都是 parameters。", phonics: "pa 读 /pə/，ram 读 /ræm/，i 读 /ɪ/，ter 读 /tər/，重音在第二音节。", collocations: [["key parameters", "关键参数"], ["operating parameters", "运行参数"], ["within parameters", "在参数范围内"]], examples: [["Check all parameters.", "检查所有参数。"], ["The parameters are normal.", "参数正常。"]] },
      { w: "acceptable", ipa: "/əkˈsɛp.tə.bəl/", pos: "形容词", cn: "可接受的；允许的", memory: "① accept = 接受；② acceptable = 可以接受的。\nacceptable range = 允许范围（不超出安全阈值）。", phonics: "ac 读 /ək/，cep 读 /sɛp/，ta 读 /tə/，ble 读 /bəl/，重音在第二音节。", collocations: [["acceptable range", "允许范围"], ["acceptable level", "可接受水平"], ["acceptable limit", "可接受上限"]], examples: [["The temperature is within the acceptable range.", "温度在允许范围内。"], ["This level is not acceptable.", "这个水平不可接受。"]] },
    ],
    phrases: [
      { p: "within the acceptable range", ipa: "/wɪˈðɪn ðə əkˈsɛp.tə.bəl reɪndʒ/", cn: "在允许范围内", why: "within = 在…之内，acceptable = 可接受的，range = 范围。这是交接中确认正常的标准表达。" },
      { p: "environmental parameters", ipa: "/ɪnˌvaɪ.rənˈmɛn.təl pəˈræm.ɪ.tərz/", cn: "环境参数", why: "涵盖温度、湿度、气压、空气质量等所有环境监控指标。" },
    ],
    grammar: [
      { q: "如何表达「在范围内」和「超出范围」？", a: "within range = 在范围内（正常）。\nout of range = 超出范围（异常）。\n✅ All parameters are within range.（所有参数在范围内。）\n✅ The temperature is out of range.（温度超出范围。）" },
    ],
    pattern: "All + 检查项 + are within the acceptable range",
    patternExamples: [
      { en: "All alarms are within the acceptable level.", cn: "所有告警在可接受水平内。", words: [{ w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }, { w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }] },
      { en: "All systems are within normal parameters.", cn: "所有系统在正常参数范围内。", words: [{ w: "systems", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "All readings are within spec.", cn: "所有读数在规格范围内。", words: [{ w: "readings", ipa: "/ˈriːdɪŋ/", cn: "读数", phonics: "read 读 /riːd/，ing 读 /ɪŋ/" }, { w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }] },
    ],
    thinking: "这是环境监控的「总结确认句」——逐项 check 后给出总结论。\n交接逻辑：check temperature ✓ → check humidity ✓ → 结论：All parameters within range。\n这句话让接班人员快速确认环境无需担心。",
    pronunciation: "environmental 五个音节：en-vi-RON-men-tal。\nparameters 重音在第二音节：pa-RAM-e-ters。\nacceptable 重音在第二音节：ac-CEP-ta-ble。\n节奏：All en-vi-RON-men-tal ｜ pa-RAM-e-ters ｜ are with-IN ｜ the ac-CEP-ta-ble RANGE.",
    quiz: [
      { q: "所有系统参数正常，怎么说？", a: "All system parameters are within the acceptable range." },
      { q: "within range 和 out of range 分别表示什么？", a: "within range = 在正常范围内（OK），out of range = 超出范围（异常）。" },
    ],
  },
  {
    id: 80,
    en: "Please check the rack inlet temperature.",
    cn: "请查看机柜进风温度。",
    ipa: "/pliːz tʃɛk ðə ræk ˈɪn.lɛt ˈtɛm.pər.ə.tʃər/",
    tags: ["第80句", "机柜温度", "★★★★★"],
    when: "从机房整体温度细化到机柜级别的进风温度。进风温度直接反映服务器实际吸入的冷空气温度，是评估散热效果的关键指标。",
    words: [
      { w: "inlet", ipa: "/ˈɪn.lɛt/", pos: "名词", cn: "进口；进风口", memory: "① in = 进入；② let = 让；③ inlet = 让进入的地方 = 进风口。\n反义词：outlet = 出风口/排风口。", phonics: "in 读 /ɪn/，let 读 /lɛt/，重音在第一音节。", collocations: [["rack inlet", "机柜进风口"], ["inlet temperature", "进风温度"], ["cold air inlet", "冷空气进口"]], examples: [["Check the rack inlet temperature.", "查看机柜进风温度。"], ["The inlet is blocked.", "进风口被堵住了。"]] },
    ],
    phrases: [
      { p: "rack inlet temperature", ipa: "/ræk ˈɪn.lɛt ˈtɛm.pər.ə.tʃər/", cn: "机柜进风温度", why: "rack = 机柜，inlet = 进风口，temperature = 温度。进风温度是服务器前方（冷通道侧）吸入的冷空气温度。" },
    ],
    grammar: [
      { q: "inlet 和 outlet 在数据中心中指什么？", a: "inlet = 进风口（冷通道侧，服务器前方吸入冷空气）。\noutlet = 出风口/排风口（热通道侧，服务器后方排出热空气）。\n✅ rack inlet temperature = 进风温度（应较低）\n✅ rack outlet temperature = 排风温度（应较高）" },
    ],
    pattern: "Please check the + 设备 + inlet/outlet + 参数",
    patternExamples: [
      { en: "Please check the CRAC outlet temperature.", cn: "请查看精密空调出风温度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
      { en: "Please check the rack outlet temperature.", cn: "请查看机柜排风温度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "rack", ipa: "/ræk/", cn: "机柜", phonics: "rack 读 /ræk/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
      { en: "Please check the UPS inlet voltage.", cn: "请查看UPS输入电压。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }] },
    ],
    thinking: "数据中心的气流管理：冷通道 → inlet（进风）→ 服务器 → outlet（排风）→ 热通道。\ninlet temperature 高 = 冷空气不足或气流受阻，需要检查。\n交接时重点关注 inlet temperature 偏高的机柜。",
    pronunciation: "inlet 重音在第一音节：IN-let /ˈɪn.lɛt/。\nrack inlet 连读：rack-inlet /ræk ɪn.lɛt/。\n节奏：Please CHECK ｜ the RACK ｜ IN-let ｜ TEM-per-a-ture.",
    quiz: [
      { q: "请查看机柜排风温度，怎么说？", a: "Please check the rack outlet temperature." },
      { q: "inlet temperature 偏高可能是什么原因？", a: "冷空气供应不足、进风口被遮挡、冷通道门未关闭、空调故障等。" },
    ],
  },
  {
    id: 81,
    en: "One rack inlet temperature is slightly high.",
    cn: "有一个机柜的进风温度略高。",
    ipa: "/wʌn ræk ˈɪn.lɛt ˈtɛm.pər.ə.tʃər ɪz ˈslaɪt.li haɪ/",
    tags: ["第81句", "温度异常", "★★★★★"],
    when: "发现某个机柜进风温度略高于正常范围，但尚未触发告警阈值。需要提醒接班人员关注并持续监控。",
    words: [
      { w: "slightly", ipa: "/ˈslaɪt.li/", pos: "副词", cn: "略微；稍微", memory: "① slight = 轻微的（形容词）；② slightly = 轻微地（副词）。\nslightly high = 略高（还没到告警级别）。", phonics: "slight 读 /slaɪt/，ly 读 /li/，重音在第一音节。", collocations: [["slightly high", "略高"], ["slightly low", "略低"], ["slightly above", "略高于"]], examples: [["The temperature is slightly high.", "温度略高。"], ["The load is slightly above normal.", "负载略高于正常。"]] },
    ],
    phrases: [
      { p: "slightly high", ipa: "/ˈslaɪt.li haɪ/", cn: "略高", why: "slightly = 略微，high = 高。表示偏差很小，尚未达到告警阈值，但需要关注。" },
    ],
    grammar: [
      { q: "如何描述不同程度的异常？", a: "slightly high/low = 略高/略低（偏差小，观察即可）。\nhigh/low = 高/低（需要关注和处理）。\nvery high/low = 非常高/低（紧急处理）。\ncritically high/low = 极高/极低（立即处理）。\n✅ Slightly high → monitor（监控）\n✅ High → investigate（调查）\n✅ Very high → escalate（升级）" },
    ],
    pattern: "One + 设备 + 参数 + is slightly + 异常方向",
    patternExamples: [
      { en: "One UPS output voltage is slightly low.", cn: "一台UPS输出电压略低。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }] },
      { en: "One CRAC unit supply temperature is slightly high.", cn: "一台精密空调送风温度略高。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
      { en: "One rack power draw is slightly above normal.", cn: "一个机柜功耗略高于正常。", words: [{ w: "rack", ipa: "/ræk/", cn: "机柜", phonics: "rack 读 /ræk/" }, { w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "slightly 是交接中非常重要的程度副词——它告诉接班人员：这个问题需要关注，但不需要立即行动。\n交接时区分 slightly / normal / high / critical 四个级别，让接班人员知道优先级。",
    pronunciation: "slightly 的 sl 连读：/slaɪt.li/。\nslightly high 连读：slight-ly-high /slaɪt.li.haɪ/。\n节奏：One RACK ｜ IN-let ｜ TEM-per-a-ture ｜ is SLIGHT-ly HIGH.",
    quiz: [
      { q: "一台UPS负载略高，怎么说？", a: "One UPS load is slightly high." },
      { q: "slightly high 和 high 在交接中的处理优先级有什么不同？", a: "slightly high = 观察监控即可，high = 需要调查原因并处理。" },
    ],
  },
  {
    id: 82,
    en: "Please check the hot aisle temperature.",
    cn: "请查看热通道温度。",
    ipa: "/pliːz tʃɛk ðə hɒt eɪl ˈtɛm.pər.ə.tʃər/",
    tags: ["第82句", "热通道", "★★★★"],
    when: "查看热通道（服务器排风侧）的温度。热通道温度通常较高（35-45°C），如果异常升高可能意味着散热问题。",
    words: [
      { w: "hot", ipa: "/hɒt/", pos: "形容词", cn: "热的", memory: "① hot = 热的；② hot aisle = 热通道（服务器排风面之间的通道）。\n反义词：cold aisle = 冷通道。", phonics: "h 读 /h/，o 读 /ɒ/，t 读 /t/。短元音 /ɒ/。", collocations: [["hot aisle", "热通道"], ["hot spot", "热点"], ["hot air", "热空气"]], examples: [["Check the hot aisle temperature.", "查看热通道温度。"], ["There's a hot spot in row C.", "C排有一个热点。"]] },
      { w: "aisle", ipa: "/eɪl/", pos: "名词", cn: "通道；走道", memory: "① aisle = 过道/通道（来自拉丁语 ala = 翼）；② hot aisle = 热通道，cold aisle = 冷通道。\n注意：aisle 中的 s 不发音。", phonics: "ai 读 /eɪ/，le 读 /l/。s 不发音！读 /eɪl/ 不读 /eɪzəl/。", collocations: [["hot aisle", "热通道"], ["cold aisle", "冷通道"], ["aisle containment", "通道封闭"]], examples: [["The hot aisle is 38 degrees.", "热通道38度。"], ["Please close the cold aisle door.", "请关闭冷通道门。"]] },
    ],
    phrases: [
      { p: "hot aisle", ipa: "/hɒt eɪl/", cn: "热通道", why: "数据中心采用冷热通道布局：冷通道（服务器前方）送冷风，热通道（服务器后方）排热风。" },
    ],
    grammar: [
      { q: "hot aisle 和 cold aisle 的区别？", a: "hot aisle = 热通道（服务器排风面之间的通道，温度 35-45°C）。\ncold aisle = 冷通道（服务器进风面之间的通道，温度 18-27°C）。\n交接时两个都要 check，确保气流正常。" },
    ],
    pattern: "Please check the + hot/cold + aisle + 参数",
    patternExamples: [
      { en: "Please check the cold aisle humidity.", cn: "请查看冷通道湿度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "aisle", ipa: "/aɪl/", cn: "通道", phonics: "aisle 读 /aɪl/，s 不发音" }, { w: "humidity", ipa: "/hjuːˈmɪdɪti/", cn: "湿度", phonics: "hu 读 /hjuː/，midity 读 /mɪdɪti/" }] },
      { en: "Please check the hot aisle containment.", cn: "请查看热通道封闭情况。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "aisle", ipa: "/aɪl/", cn: "通道", phonics: "aisle 读 /aɪl/，s 不发音" }] },
      { en: "Please check the cold aisle pressure.", cn: "请查看冷通道气压。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "aisle", ipa: "/aɪl/", cn: "通道", phonics: "aisle 读 /aɪl/，s 不发音" }, { w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }] },
    ],
    thinking: "数据中心气流管理核心概念：cold aisle → server inlet → server → server outlet → hot aisle → CRAC return。\n交接时检查 hot aisle 温度确认排热正常，检查 cold aisle 温度确认供冷正常。",
    pronunciation: "aisle 的 s 不发音：/eɪl/（同 isle）。\nhot aisle 连读：hot-aisle /hɒt.eɪl/。\n节奏：Please CHECK ｜ the HOT AISLE ｜ TEM-per-a-ture.",
    quiz: [
      { q: "请查看冷通道温度，怎么说？", a: "Please check the cold aisle temperature." },
      { q: "aisle 中的 s 发音吗？", a: "不发音。aisle 读 /eɪl/，s 是静默字母。" },
    ],
  },
  {
    id: 83,
    en: "Please check the cold aisle temperature.",
    cn: "请查看冷通道温度。",
    ipa: "/pliːz tʃɛk ðə koʊld eɪl ˈtɛm.pər.ə.tʃər/",
    tags: ["第83句", "冷通道", "★★★★★"],
    when: "查看冷通道（服务器进风侧）的温度。冷通道温度是服务器实际吸入空气的温度，直接影响设备安全运行。",
    words: [
      { w: "cold", ipa: "/koʊld/", pos: "形容词", cn: "冷的", memory: "① cold = 冷的；② cold aisle = 冷通道（空调送冷风到服务器前方的通道）。\n标准冷通道温度：18-27°C。", phonics: "c 读 /k/，o 读 /oʊ/，ld 读 /ld/。双元音 /oʊ/。", collocations: [["cold aisle", "冷通道"], ["cold air", "冷空气"], ["cold storage", "冷存储"]], examples: [["The cold aisle is 22 degrees.", "冷通道22度。"], ["Check the cold aisle sensors.", "检查冷通道传感器。"]] },
    ],
    phrases: [
      { p: "cold aisle temperature", ipa: "/koʊld eɪl ˈtɛm.pər.ə.tʃər/", cn: "冷通道温度", why: "冷通道温度直接决定服务器进风温度，是最重要的环境指标之一。温度过高会导致设备过热。" },
    ],
    grammar: [
      { q: "这句和第82句（hot aisle）什么关系？", a: "两句结构完全相同，只是 hot ↔ cold 替换。\n交接时通常连续汇报：hot aisle ✓ → cold aisle ✓ → 气流管理正常。\n如果 cold aisle 温度偏高，说明供冷不足，需要检查空调。" },
    ],
    pattern: "Please check the cold aisle + 参数",
    patternExamples: [
      { en: "Please check the cold aisle humidity.", cn: "请查看冷通道湿度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "aisle", ipa: "/aɪl/", cn: "通道", phonics: "aisle 读 /aɪl/，s 不发音" }, { w: "humidity", ipa: "/hjuːˈmɪdɪti/", cn: "湿度", phonics: "hu 读 /hjuː/，midity 读 /mɪdɪti/" }] },
      { en: "Please check the cold aisle door status.", cn: "请查看冷通道门状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "aisle", ipa: "/aɪl/", cn: "通道", phonics: "aisle 读 /aɪl/，s 不发音" }, { w: "door", ipa: "/dɔːr/", cn: "门", phonics: "door 读 /dɔːr/" }] },
      { en: "Please check the cold aisle pressure differential.", cn: "请查看冷通道压差。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "aisle", ipa: "/aɪl/", cn: "通道", phonics: "aisle 读 /aɪl/，s 不发音" }, { w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }] },
    ],
    thinking: "冷通道和热通道是配对概念，交接时总是一起汇报。\n正常情况：cold aisle 18-27°C → hot aisle 35-45°C → 温差 10-20°C。\n如果温差太小，可能气流短路（热空气回流到冷通道）。",
    pronunciation: "cold 的 o 发双元音：/koʊld/。\ncold aisle 连读：cold-aisle /koʊld.eɪl/。\n节奏：Please CHECK ｜ the COLD AISLE ｜ TEM-per-a-ture.",
    quiz: [
      { q: "冷通道温度25度，热通道温度40度，温差正常吗？", a: "正常。温差 15°C 在合理范围内（10-20°C）。" },
      { q: "冷通道温度偏高可能是什么原因？", a: "空调故障、冷通道门未关闭、地板送风口被堵、冷量不足等。" },
    ],
  },
  {
    id: 84,
    en: "Please check the water leak detection system.",
    cn: "请检查漏水检测系统。",
    ipa: "/pliːz tʃɛk ðə ˈwɔː.tər liːk dɪˈtɛk.ʃən ˈsɪs.təm/",
    tags: ["第84句", "漏水检测", "★★★★★"],
    when: "检查漏水检测系统状态。数据中心大量使用水冷系统，漏水是重大风险，必须确认检测系统工作正常。",
    words: [
      { w: "leak", ipa: "/liːk/", pos: "名词/动词", cn: "漏水；泄漏", memory: "① leak = 泄漏（名词/动词）；② water leak = 漏水。\n数据中心漏水可能来自冷却水管、消防管道、空调冷凝水。", phonics: "l 读 /l/，ea 读 /iː/，k 读 /k/。长元音 /iː/。", collocations: [["water leak", "漏水"], ["leak detection", "漏水检测"], ["leak sensor", "漏水传感器"]], examples: [["There's a water leak under the floor.", "地板下有漏水。"], ["Check for leaks.", "检查有没有漏水。"]] },
      { w: "detection", ipa: "/dɪˈtɛk.ʃən/", pos: "名词", cn: "检测；探测", memory: "① detect = 检测（动词）；② detection = 检测（名词）。\ndetection system = 检测系统。", phonics: "de 读 /dɪ/，tec 读 /tɛk/，tion 读 /ʃən/，重音在第二音节。", collocations: [["leak detection", "漏水检测"], ["smoke detection", "烟雾检测"], ["intrusion detection", "入侵检测"]], examples: [["The detection system is working.", "检测系统正常工作。"], ["Fire detection triggered.", "烟雾检测触发。"]] },
    ],
    phrases: [
      { p: "water leak detection system", ipa: "/ˈwɔː.tər liːk dɪˈtɛk.ʃən ˈsɪs.təm/", cn: "漏水检测系统", why: "由漏水传感器（通常在地板下）和监控软件组成，发现漏水立即告警。交接时必须确认系统正常。" },
    ],
    grammar: [
      { q: "如何汇报漏水检测系统状态？", a: "正常：The leak detection system is operational.（系统正常运行。）\n异常：The leak detection system has a fault.（系统有故障。）\n有漏水：A water leak has been detected.（检测到漏水。）" },
    ],
    pattern: "Please check the + 检测系统名",
    patternExamples: [
      { en: "Please check the fire detection system.", cn: "请检查烟雾检测系统。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please check the intrusion detection system.", cn: "请检查入侵检测系统。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please check the VESDA system.", cn: "请检查极早期烟雾探测系统。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
    ],
    thinking: "漏水检测是数据中心安全检查的必选项。\n交接逻辑：check leak detection → 系统正常 → 无新漏水 → OK。\n如果检测到漏水，立即升级处理（water + electronics = critical risk）。",
    pronunciation: "leak 的 ea 发长音：/liːk/。\ndetection 重音在第二音节：de-TEC-tion。\nwater leak detection 连读流畅。\n节奏：Please CHECK ｜ the WA-ter LEAK ｜ de-TEC-tion ｜ SYS-tem.",
    quiz: [
      { q: "请检查烟雾检测系统，怎么说？", a: "Please check the fire detection system." },
      { q: "数据中心漏水检测传感器通常安装在哪里？", a: "通常在架空地板下方、冷却水管路附近、空调机组下方等易漏水位置。" },
    ],
  },
  {
    id: 85,
    en: "No new water leaks have been detected.",
    cn: "没有发现新的漏水。",
    ipa: "/noʊ njuː ˈwɔː.tər liːks hæv bɪn dɪˈtɛk.tɪd/",
    tags: ["第85句", "漏水状态", "★★★★"],
    when: "确认漏水检测结果：本班次没有发现新的漏水事件。这是对上一句检查结果的正面回应。",
    words: [
      { w: "detected", ipa: "/dɪˈtɛk.tɪd/", pos: "动词过去分词", cn: "被检测到", memory: "① detect = 检测；② detected = 被检测到的（过去分词）。\n被动语态：have been detected = 已经被检测到。", phonics: "de 读 /dɪ/，tec 读 /tɛk/，ted 读 /tɪd/，重音在第二音节。", collocations: [["leak detected", "检测到漏水"], ["no leaks detected", "未检测到漏水"], ["alarm detected", "检测到告警"]], examples: [["No issues have been detected.", "没有发现问题。"], ["A leak was detected at 3 AM.", "凌晨3点检测到漏水。"]] },
    ],
    phrases: [
      { p: "No new...have been detected", ipa: "/noʊ njuː...hæv bɪn dɪˈtɛk.tɪd/", cn: "没有发现新的…", why: "No + new + 名词 + have been detected = 本班次没有新发现。交接中用于确认没有新增异常。" },
    ],
    grammar: [
      { q: "现在完成时 have been detected 怎么用？", a: "have/has been + 过去分词 = 现在完成时的被动语态，表示「到目前为止已经被…」。\n✅ No leaks have been detected.（到目前为止没有检测到漏水。）\n✅ Two leaks have been detected today.（今天已检测到2处漏水。）\n交接中用现在完成时汇报「本班次到目前为止」的状态。" },
    ],
    pattern: "No new + 异常项 + have been detected",
    patternExamples: [
      { en: "No new alarms have been detected.", cn: "没有发现新的告警。", words: [{ w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "No new incidents have been detected.", cn: "没有发现新的事件。", words: [] },
      { en: "No new security breaches have been detected.", cn: "没有发现新的安全违规。", words: [{ w: "security", ipa: "/sɪˈkjʊrɪti/", cn: "安防", phonics: "se 读 /sɪ/，curity 读 /kjʊrɪti/" }] },
    ],
    thinking: "No new...have been detected 是交接中的「平安确认句」。\n交接时逐项确认：no new alarms → no new leaks → no new incidents → 本班次平安。\n如果有 new，就需要详细说明。",
    pronunciation: "have been 弱读：/həv bɪn/ 或 /əv bɪn/。\ndetected 重音在第二音节。\n节奏：No NEW ｜ WA-ter LEAKS ｜ have been de-TEC-ted.",
    quiz: [
      { q: "没有发现新的告警，怎么说？", a: "No new alarms have been detected." },
      { q: "have been detected 是什么时态？", a: "现在完成时被动语态，表示「到目前为止已经被检测到」。" },
    ],
  },
  {
    id: 86,
    en: "Please check the communication status of all devices.",
    cn: "请检查所有设备的通信状态。",
    ipa: "/pliːz tʃɛk ðə kəˌmjuː.nɪˈkeɪ.ʃən ˈstæt.əs ɒv ɔːl dɪˈvaɪ.sɪz/",
    tags: ["第86句", "设备通信", "★★★★★"],
    when: "检查所有被监控设备与 DCIM 系统的通信连接状态。设备离线意味着无法获取数据，是严重问题。",
    words: [
      { w: "communication", ipa: "/kəˌmjuː.nɪˈkeɪ.ʃən/", pos: "名词", cn: "通信；通讯", memory: "① communicate = 沟通（动词）；② communication = 通信（名词）。\n在 IT/DCIM 场景：设备与系统之间的数据传输连接。", phonics: "com 读 /kə/，mu 读 /mjuː/，ni 读 /nɪ/，ca 读 /keɪ/，tion 读 /ʃən/，重音在第四音节。共5个音节。", collocations: [["communication status", "通信状态"], ["communication alarm", "通信告警"], ["communication link", "通信链路"]], examples: [["Check the communication status.", "检查通信状态。"], ["The communication link is down.", "通信链路断了。"]] },
      { w: "device", ipa: "/dɪˈvaɪs/", pos: "名词", cn: "设备；装置", memory: "① device = 设备/装置；② 复数 devices。\n在数据中心：传感器、PDU、UPS、空调控制器等都是 devices。", phonics: "de 读 /dɪ/，vice 读 /vaɪs/，重音在第二音节。注意不读 /dɪˈvaɪz/。", collocations: [["network device", "网络设备"], ["monitoring device", "监控设备"], ["all devices", "所有设备"]], examples: [["All devices are online.", "所有设备在线。"], ["One device is offline.", "一台设备离线。"]] },
    ],
    phrases: [
      { p: "communication status", ipa: "/kəˌmjuː.nɪˈkeɪ.ʃən ˈstæt.əs/", cn: "通信状态", why: "设备与 DCIM 系统之间的数据连接状态。normal = 正常通信，offline = 离线/失联。" },
    ],
    grammar: [
      { q: "如何汇报设备通信状态？", a: "正常：All devices are communicating normally.（所有设备通信正常。）\n异常：X devices are offline.（X台设备离线。）\n部分异常：Most devices are online, but two are offline.（大部分在线，但两台离线。）" },
    ],
    pattern: "Please check the + 状态类型 + of + 范围",
    patternExamples: [
      { en: "Please check the alarm status of all systems.", cn: "请检查所有系统的告警状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Please check the power status of all racks.", cn: "请检查所有机柜的供电状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Please check the health status of all UPS units.", cn: "请检查所有UPS的健康状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }] },
    ],
    thinking: "设备通信检查是 DCIM 交接的重要环节——如果设备离线，DCIM 就无法监控该设备，形成监控盲区。\n交接时：check communication → all online → OK / X offline → 需要处理。",
    pronunciation: "communication 五个音节：com-mu-ni-CA-tion。\nstatus 重音在第一音节：STA-tus。\n节奏：Please CHECK ｜ the com-mu-ni-CA-tion ｜ STA-tus ｜ of ALL de-VIC-es.",
    quiz: [
      { q: "请检查所有UPS的运行状态，怎么说？", a: "Please check the operation status of all UPS units." },
      { q: "设备离线（offline）对DCIM监控有什么影响？", a: "离线设备无法被DCIM监控，形成监控盲区，可能导致告警漏报。" },
    ],
  },
  {
    id: 87,
    en: "All devices are communicating normally.",
    cn: "所有设备通信正常。",
    ipa: "/ɔːl dɪˈvaɪ.sɪz ɑːr kəˈmjuː.nɪ.keɪ.tɪŋ ˈnɔː.mə.li/",
    tags: ["第87句", "通信正常", "★★★★"],
    when: "确认所有设备与 DCIM 的通信连接正常。这是对上一句检查结果的标准正面回应。",
    words: [
      { w: "normally", ipa: "/ˈnɔː.mə.li/", pos: "副词", cn: "正常地", memory: "① normal = 正常的（形容词）；② normally = 正常地（副词）。\ncommunicating normally = 正常通信。", phonics: "nor 读 /nɔː/，mal 读 /mə/，ly 读 /li/，重音在第一音节。", collocations: [["operating normally", "正常运行"], ["functioning normally", "正常工作"], ["communicating normally", "正常通信"]], examples: [["All systems are running normally.", "所有系统正常运行。"], ["The UPS is functioning normally.", "UPS正常工作。"]] },
    ],
    phrases: [
      { p: "communicating normally", ipa: "/kəˈmjuː.nɪ.keɪ.tɪŋ ˈnɔː.mə.li/", cn: "正常通信", why: "communicating = 通信中（进行时），normally = 正常地。表示设备与系统之间的数据连接畅通。" },
    ],
    grammar: [
      { q: "进行时 are communicating 和一般时 communicate 的区别？", a: "are communicating（现在进行时）= 正在通信（强调当前状态）。\ncommunicate（一般现在时）= 通信（描述一般事实）。\n✅ All devices are communicating normally.（当前所有设备正在正常通信。）\n✅ Devices communicate via SNMP.（设备通过SNMP通信。——一般事实）" },
    ],
    pattern: "All + 主体 + are + 动词ing + normally",
    patternExamples: [
      { en: "All systems are running normally.", cn: "所有系统正常运行。", words: [{ w: "systems", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "All sensors are reporting normally.", cn: "所有传感器正常上报数据。", words: [{ w: "sensors", ipa: "/ˈsɛnsər/", cn: "传感器", phonics: "sens 读 /sɛns/，or 读 /ər/" }, { w: "reporting", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "All alarms are functioning normally.", cn: "所有告警功能正常。", words: [{ w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "这是通信检查的「平安确认句」，与第79句（All parameters within range）和第85句（No new leaks）属于同一类交接确认模式。\n交接中的「平安三连」：环境正常 → 无新异常 → 通信正常。",
    pronunciation: "normally 重音在第一音节：NOR-mal-ly。\ncommunicating 五个音节：com-MU-ni-ca-ting。\n节奏：All de-VIC-es ｜ are com-MU-ni-ca-ting ｜ NOR-mal-ly.",
    quiz: [
      { q: "所有传感器正常上报数据，怎么说？", a: "All sensors are reporting normally." },
      { q: "are communicating 是什么时态？", a: "现在进行时，表示「正在通信」，强调当前实时状态。" },
    ],
  },
  {
    id: 88,
    en: "Please monitor the abnormal rack continuously.",
    cn: "请持续监控异常机柜。",
    ipa: "/pliːz ˈmɒn.ɪ.tər ðə æbˈnɔː.məl ræk kənˈtɪn.ju.əs.li/",
    tags: ["第88句", "持续监控", "★★★★★"],
    when: "对之前发现的温度略高的机柜（第81句），要求接班人员持续关注，确保不会恶化。这是交接中的关键责任移交。",
    words: [
      { w: "monitor", ipa: "/ˈmɒn.ɪ.tər/", pos: "动词", cn: "监控；监测", memory: "① monitor = 监控（动词）/ 显示器（名词）；② 作动词 = 持续观察。\n与 check 的区别：check = 看一眼，monitor = 持续观察。", phonics: "mon 读 /mɒn/，i 读 /ɪ/，tor 读 /tər/，重音在第一音节。", collocations: [["monitor continuously", "持续监控"], ["monitor closely", "密切监控"], ["monitor the situation", "监控情况"]], examples: [["Please monitor this alarm.", "请监控这条告警。"], ["We need to monitor the temperature.", "我们需要监控温度。"]] },
      { w: "abnormal", ipa: "/æbˈnɔː.məl/", pos: "形容词", cn: "异常的；不正常的", memory: "① ab = 偏离；② normal = 正常的；③ abnormal = 偏离正常的 = 异常的。\n反义词：normal = 正常的。", phonics: "ab 读 /æb/，nor 读 /nɔː/，mal 读 /məl/，重音在第二音节。", collocations: [["abnormal temperature", "异常温度"], ["abnormal behavior", "异常行为"], ["abnormal rack", "异常机柜"]], examples: [["The rack shows abnormal readings.", "机柜显示异常读数。"], ["Report any abnormal conditions.", "报告任何异常情况。"]] },
      { w: "continuously", ipa: "/kənˈtɪn.ju.əs.li/", pos: "副词", cn: "持续地；不间断地", memory: "① continue = 继续；② continuous = 持续的；③ continuously = 持续地。\nmonitor continuously = 不间断监控。", phonics: "con 读 /kən/，tin 读 /tɪn/，u 读 /ju/，ous 读 /əs/，ly 读 /li/，重音在第二音节。", collocations: [["monitor continuously", "持续监控"], ["run continuously", "持续运行"], ["operate continuously", "持续运转"]], examples: [["Monitor the rack continuously.", "持续监控该机柜。"], ["The system runs continuously.", "系统持续运行。"]] },
    ],
    phrases: [
      { p: "monitor continuously", ipa: "/ˈmɒn.ɪ.tər kənˈtɪn.ju.əs.li/", cn: "持续监控", why: "monitor = 监控，continuously = 持续地。交接中用于移交需要长期关注的异常项。" },
      { p: "abnormal rack", ipa: "/æbˈnɔː.məl ræk/", cn: "异常机柜", why: "指之前发现温度略高的机柜（第81句）。用 abnormal 标记需要特别关注的对象。" },
    ],
    grammar: [
      { q: "monitor 和 watch 和 observe 的区别？", a: "monitor = 系统性持续监控（通常有工具/仪表辅助）。\nwatch = 看着（一般性观察）。\nobserve = 仔细观察（科学/正式）。\n✅ Monitor the rack temperature.（用DCIM持续监控机柜温度。）\n✅ Watch the screen for alerts.（看着屏幕等告警。）" },
    ],
    pattern: "Please monitor + 异常对象 + continuously/closely",
    patternExamples: [
      { en: "Please monitor the UPS continuously.", cn: "请持续监控UPS。", words: [{ w: "monitor", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }] },
      { en: "Please monitor the PDU load closely.", cn: "请密切监控PDU负载。", words: [{ w: "monitor", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "pdu", ipa: "/ˌpiːˈdiːˈjuː/", cn: "配电单元", phonics: "P-D-U 逐字母读" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
      { en: "Please monitor the room temperature for the next 2 hours.", cn: "请在接下来2小时监控机房温度。", words: [{ w: "monitor", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
    ],
    thinking: "monitor continuously 是交接中的「责任移交句」——告诉接班人员：这个异常项我交给你了，你需要持续关注。\n交接中的异常处理链：发现异常 → 评估程度 → slightly high → monitor / high → escalate。",
    pronunciation: "monitor 重音在第一音节：MON-i-tor。\nabnormal 重音在第二音节：ab-NOR-mal。\ncontinuously 重音在第二音节：con-TIN-u-ous-ly。\n节奏：Please MON-i-tor ｜ the ab-NOR-mal RACK ｜ con-TIN-u-ous-ly.",
    quiz: [
      { q: "请密切监控这台UPS，怎么说？", a: "Please monitor this UPS closely." },
      { q: "monitor 和 check 在交接中的区别是什么？", a: "check = 查看一次确认状态，monitor = 持续关注一段时间。" },
    ],
  },
  {
    id: 89,
    en: "Please update DCIM after the alarm is cleared.",
    cn: "告警恢复后请更新DCIM。",
    ipa: "/pliːz ˈʌp.deɪt ˌdiː.siː.aɪˈɛm ˈæf.tər ðə əˈlɑːm ɪz klɪərd/",
    tags: ["第89句", "告警恢复", "★★★★★"],
    when: "提醒接班人员在告警恢复正常后，及时在 DCIM 系统中确认/关闭告警，保持系统记录准确。",
    words: [
      { w: "update", ipa: "/ˈʌp.deɪt/", pos: "动词", cn: "更新", memory: "① up = 向上；② date = 日期/更新；③ update = 使更新。\n在 DCIM 中：update = 确认告警已恢复/更新设备状态。", phonics: "up 读 /ʌp/，date 读 /deɪt/，重音在第一音节。", collocations: [["update the system", "更新系统"], ["update the status", "更新状态"], ["update DCIM", "更新DCIM"]], examples: [["Please update the alarm status.", "请更新告警状态。"], ["DCIM needs to be updated.", "DCIM需要更新。"]] },
      { w: "cleared", ipa: "/klɪərd/", pos: "形容词/过去分词", cn: "已恢复的；已清除的", memory: "① clear = 清除/恢复；② cleared = 已恢复的。\nalarm cleared = 告警已恢复（触发条件消失）。\n反义词：active = 活动的（告警仍在）。", phonics: "clear 读 /klɪər/，ed 读 /d/。注意 ear 发 /ɪə/。", collocations: [["alarm cleared", "告警已恢复"], ["ticket cleared", "工单已关闭"], ["fault cleared", "故障已清除"]], examples: [["The alarm has been cleared.", "告警已恢复。"], ["Is the fault cleared?", "故障清除了吗？"]] },
    ],
    phrases: [
      { p: "after the alarm is cleared", ipa: "/ˈæf.tər ðə əˈlɑːm ɪz klɪərd/", cn: "告警恢复后", why: "after = 在…之后，cleared = 已恢复。告警恢复（触发条件消失）后需要在系统中确认关闭。" },
    ],
    grammar: [
      { q: "cleared 和 resolved 和 recovered 的区别？", a: "cleared = 告警自动恢复（触发条件消失，如温度回到正常范围）。\nresolved = 问题已解决（人工处理后关闭）。\nrecovered = 设备恢复正常（从故障状态恢复）。\n✅ Alarm cleared → 自动恢复，需要确认。\n✅ Ticket resolved → 人工处理完毕。\n✅ System recovered → 系统自动恢复。" },
    ],
    pattern: "Please update + 系统 + after + 条件",
    patternExamples: [
      { en: "Please update BMS after the maintenance is complete.", cn: "维护完成后请更新BMS。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "bms", ipa: "/ˌbiːˈɛmˈɛs/", cn: "楼控", phonics: "B-M-S 逐字母读" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "Please update the ticket after the issue is resolved.", cn: "问题解决后请更新工单。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }, { w: "issue", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
      { en: "Please update the log after the alarm is cleared.", cn: "告警恢复后请更新日志。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
    ],
    thinking: "update DCIM after alarm cleared 是交接中的「流程提醒句」——确保接班人员知道后续操作。\nDCIM 管理流程：告警触发（active）→ 排查处理 → 告警恢复（cleared）→ 在 DCIM 中确认关闭。\n如果不 update，系统中会残留已恢复的告警，影响交班准确性。",
    pronunciation: "DCIM 逐字母读：D-C-I-M。\ncleared 的 ear 发 /ɪə/：/klɪərd/。\nafter 弱读：/ˈæf.tər/。\n节奏：Please UP-date D-C-I-M ｜ AF-ter the a-LARM ｜ is CLEARED.",
    quiz: [
      { q: "告警自动恢复用哪个词？", a: "cleared。Alarm cleared = 告警已恢复（触发条件消失）。" },
      { q: "cleared 和 resolved 有什么区别？", a: "cleared = 告警自动恢复（条件消失），resolved = 问题人工解决后关闭。" },
    ],
  },
  {
    id: 90,
    en: "Now let's review the event tickets.",
    cn: "现在我们开始检查事件单。",
    ipa: "/naʊ lɛts rɪˈvjuː ðə ɪˈvɛnt ˈtɪk.ɪts/",
    tags: ["第90句", "转场句", "★★★★★"],
    when: "DCIM 交接完成，转入下一个交接主题——事件单（Event Ticket）交接。这是交接流程中的重要转场节点。",
    words: [
      { w: "event", ipa: "/ɪˈvɛnt/", pos: "名词", cn: "事件", memory: "① e = 出；② vent = 来；③ event = 出来的事情 = 事件。\nevent ticket = 事件单（记录运维事件的工单）。", phonics: "e 读 /ɪ/，vent 读 /vɛnt/，重音在第二音节。", collocations: [["event ticket", "事件单"], ["major event", "重大事件"], ["planned event", "计划事件"]], examples: [["We have 5 open event tickets.", "我们有5个未关闭的事件单。"], ["Check the event log.", "查看事件日志。"]] },
      { w: "ticket", ipa: "/ˈtɪk.ɪt/", pos: "名词", cn: "工单；票据", memory: "① ticket = 票/工单；② 在 IT 运维中 = 工单/任务单。\nevent ticket = 事件单，fault ticket = 故障单。", phonics: "tick 读 /tɪk/，et 读 /ɪt/，重音在第一音节。", collocations: [["event ticket", "事件单"], ["fault ticket", "故障单"], ["open ticket", "未关闭工单"], ["closed ticket", "已关闭工单"]], examples: [["Create a new ticket.", "创建新工单。"], ["The ticket is still open.", "工单还没关闭。"]] },
    ],
    phrases: [
      { p: "event tickets", ipa: "/ɪˈvɛnt ˈtɪk.ɪts/", cn: "事件单", why: "event = 事件，ticket = 工单。事件单记录数据中心运行中发生的各类事件（维护、故障、变更等）。" },
      { p: "Now let's review", ipa: "/naʊ lɛts rɪˈvjuː/", cn: "现在我们开始检查", why: "Now = 现在（转场标记），let's review = 我们来检查。这是交接中切换主题的标准转场句。" },
    ],
    grammar: [
      { q: "Now let's 在交接中的作用？", a: "Now let's + 动词 = 现在我们开始做某事。Now 作为转场词，标志上一个主题结束，新主题开始。\n✅ Now let's review the event tickets.（现在开始检查事件单。）\n✅ Now let's move to the EPMS.（现在进入EPMS。）\n✅ Now let's discuss the action items.（现在讨论行动项。）" },
    ],
    pattern: "Now let's + 动词 + 新主题",
    patternExamples: [
      { en: "Now let's check the open tickets.", cn: "现在我们检查未关闭工单。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "Now let's move to the EPMS alarms.", cn: "现在我们进入EPMS告警。", words: [{ w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Now let's discuss today's maintenance.", cn: "现在我们讨论今天的维护工作。", words: [{ w: "discuss", ipa: "/dɪˈskʌs/", cn: "讨论", phonics: "dis 读 /dɪs/，cuss 读 /kʌs/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "Now let's review the action items.", cn: "现在我们检查行动项。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
    ],
    thinking: "Now let's 是交接中最常用的转场句型——标志一个系统/主题交接完毕，开始下一个。\n交接流程节点：BMS ✓ → DCIM ✓ → Now let's review event tickets → 事件单交接。\n每个转场都用 Now let's 开头，让交接节奏清晰有序。",
    pronunciation: "Now 的 ow 发双元音：/naʊ/。\nevent 重音在第二音节：e-VENT。\ntickets 的 t 清晰发音。\n节奏：NOW ｜ let's re-VIEW ｜ the e-VENT ｜ TICK-ets.",
    quiz: [
      { q: "现在我们讨论行动项，怎么说？", a: "Now let's discuss the action items." },
      { q: "event ticket 和 fault ticket 有什么区别？", a: "event ticket = 事件单（记录各类运维事件），fault ticket = 故障单（专门记录设备故障）。事件单范围更广。" },
    ],
  },
];

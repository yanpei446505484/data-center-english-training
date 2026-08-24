// EXPORTS: MOCK_SENTENCES_PART12B

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART12B: ISentence[] = [
  {
    id: 376,
    en: "Locate the temperature and humidity sensor in the cold aisle.",
    cn: "定位冷通道中的温湿度传感器。",
    ipa: "/loʊˈkeɪt ðə ˈtɛm.prə.tʃər ænd ˈhjuːˈmɪd.ə.ti ˈsɛn.sər ɪn ðə koʊld aɪl/",
    tags: ["第376句", "DCIM定位", "★★★★"],
    when: "在DCIM中定位传感器类设备。温湿度传感器分布在冷通道、热通道、关键设备旁，需要精确找到对应位置。",
    words: [
      { w: "temperature", ipa: "/ˈtɛm.prə.tʃər/", pos: "名词", cn: "温度", memory: "① temper = 调和/温度（拉丁语 temperare）；② temperature = 温度。\n数据中心温度标准：冷通道 18-27°C，热通道 30-40°C。", phonics: "tem 读 /tɛm/，per 读 /prə/，a 读 /tʃə/，ture 读 /tʃər/。注意中间有 /tʃ/ 音。", collocations: [["temperature sensor", "温度传感器"], ["temperature alarm", "温度告警"], ["temperature monitoring", "温度监控"]], examples: [["Check the temperature reading.", "检查温度读数。"], ["The temperature is too high.", "温度太高了。"]] },
      { w: "humidity", ipa: "/hjuːˈmɪd.ə.ti/", pos: "名词", cn: "湿度", memory: "① humid = 潮湿的；② humidity = 湿度。\n数据中心湿度标准：40%-60% RH（相对湿度）。湿度过低导致静电，过高导致凝露。", phonics: "hu 读 /hjuː/，mid 读 /mɪ/，i 读 /dɪ/，ty 读 /ti/。", collocations: [["humidity sensor", "湿度传感器"], ["humidity level", "湿度水平"], ["relative humidity", "相对湿度"]], examples: [["The humidity is within range.", "湿度在范围内。"], ["Low humidity causes static.", "低湿度导致静电。"]] },
    ],
    phrases: [
      { p: "temperature and humidity sensor", ipa: "/ˈtɛm.prə.tʃər ænd ˈhjuːˈmɪd.ə.ti ˈsɛn.sər/", cn: "温湿度传感器", why: "数据中心常用复合传感器（同时测温湿度），简称 T&H sensor。定位时需要知道它在哪个通道、哪个机柜旁。" },
    ],
    grammar: [
      { q: "sensor 和 detector 有什么区别？", a: "sensor = 传感器（持续测量数值，如温度42.5°C）\ndetector = 探测器（只判断有/无，如烟感有烟/无烟）\n✅ temperature sensor = 温度传感器（输出具体温度值）\n✅ smoke detector = 烟感探测器（只报有烟/无烟）\n温湿度用 sensor，烟感/漏水用 detector。" },
    ],
    pattern: "Locate the + 传感器类型 + sensor + 位置",
    patternExamples: [
      { en: "Locate the temperature sensor on Level 2.", cn: "定位二楼的温度传感器。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "sensor", ipa: "/ˈsɛnsər/", cn: "传感器", phonics: "sens 读 /sɛns/，or 读 /ər/" }] },
      { en: "Locate the humidity sensor near CRAC-05.", cn: "定位5号精密空调旁的湿度传感器。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "humidity", ipa: "/hjuːˈmɪdɪti/", cn: "湿度", phonics: "hu 读 /hjuː/，midity 读 /mɪdɪti/" }, { w: "sensor", ipa: "/ˈsɛnsər/", cn: "传感器", phonics: "sens 读 /sɛns/，or 读 /ər/" }] },
      { en: "Locate the differential pressure sensor.", cn: "定位压差传感器。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }, { w: "sensor", ipa: "/ˈsɛnsər/", cn: "传感器", phonics: "sens 读 /sɛns/，or 读 /ər/" }] },
    ],
    thinking: "传感器定位是DCIM中常见的精细化操作。\n传感器类型：温湿度(T&H)、压差(DP)、漏水(WLD)、烟感(SD)、气流(Airflow)。\n定位逻辑：先选楼栋→楼层→房间/通道→具体位置。\n温湿度传感器通常安装在：冷通道入口、冷通道中部、机柜进风口、CRAC回风口。",
    pronunciation: "temperature 的中间读 /tʃər/，不要读成 /tʃʊər/。\nhumidity 的 hu 读 /hjuː/，不是 /huː/。\n节奏：lo-CATE ｜ the TEM-per-a-ture ｜ and HU-mid-i-ty SEN-sor.",
    quiz: [
      { q: "定位热通道中的温湿度传感器，怎么说？", a: "Locate the temperature and humidity sensor in the hot aisle." },
      { q: "sensor 和 detector 在数据中心怎么区分？", a: "sensor = 传感器（持续测量数值，如温度、湿度、压差）；detector = 探测器（只判断有/无，如烟感、漏水）。温湿度用 sensor，烟感/漏水用 detector。" },
    ],
  },
  {
    id: 377,
    en: "Locate the cold aisle containment in Building B5.",
    cn: "定位B5楼的冷通道封闭系统。",
    ipa: "/loʊˈkeɪt ðə koʊld aɪl kənˈteɪn.mənt ɪn ˈbɪl.dɪŋ biː faɪv/",
    tags: ["第377句", "DCIM定位", "★★★★"],
    when: "在DCIM中定位冷通道封闭系统。冷通道封闭是现代数据中心提高制冷效率的关键设施，将冷空气封闭在服务器进风侧。",
    words: [
      { w: "cold aisle", ipa: "/koʊld aɪl/", pos: "名词", cn: "冷通道", memory: "① cold = 冷的；② aisle = 通道/走道。\ncold aisle = 冷通道（服务器进风面朝内形成的通道，送入冷风）。\n对比：hot aisle = 热通道（服务器出风面朝内形成的通道，排出热风）。", phonics: "cold 读 /koʊld/，aisle 读 /aɪl/（s不发音，同 I'll）。", collocations: [["cold aisle containment", "冷通道封闭"], ["cold aisle temperature", "冷通道温度"], ["cold aisle door", "冷通道门"]], examples: [["The cold aisle temperature is 22°C.", "冷通道温度22°C。"], ["Close the cold aisle door.", "关闭冷通道门。"]] },
      { w: "containment", ipa: "/kənˈteɪn.mənt/", pos: "名词", cn: "封闭系统；围护", memory: "① contain = 包含/容纳；② containment = 封闭/围护系统。\n冷通道封闭 = cold aisle containment，通过门板和顶板将冷通道完全封闭，防止冷热气流混合。", phonics: "con 读 /kən/，tain 读 /teɪn/，ment 读 /mənt/。", collocations: [["aisle containment", "通道封闭"], ["hot aisle containment", "热通道封闭"], ["containment system", "封闭系统"]], examples: [["The containment improves cooling efficiency.", "封闭系统提高制冷效率。"], ["Check the containment door seals.", "检查封闭系统门的密封。"]] },
    ],
    phrases: [
      { p: "cold aisle containment", ipa: "/koʊld aɪl kənˈteɪn.mənt/", cn: "冷通道封闭系统", why: "冷通道封闭是数据中心提高PUE（能源使用效率）的核心手段。封闭后冷风不泄漏，制冷效率可提升20-30%。" },
    ],
    grammar: [
      { q: "cold aisle 和 hot aisle 怎么区分？", a: "cold aisle = 冷通道（服务器进风口朝向的通道，温度18-27°C）\nhot aisle = 热通道（服务器出风口朝向的通道，温度30-40°C）\n判断方法：面对机柜，前面板（进风面）= 冷通道侧，后面板（出风面）= 热通道侧。\n封闭冷通道更常见（cold aisle containment），也有封闭热通道的（hot aisle containment）。" },
    ],
    pattern: "Locate the + cold/hot aisle containment + in + 位置",
    patternExamples: [
      { en: "Locate the hot aisle containment on Level 2.", cn: "定位二楼的热通道封闭系统。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "aisle", ipa: "/aɪl/", cn: "通道", phonics: "aisle 读 /aɪl/，s 不发音" }, { w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }] },
      { en: "Locate the cold aisle containment in Building B7.", cn: "定位B7楼的冷通道封闭系统。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "aisle", ipa: "/aɪl/", cn: "通道", phonics: "aisle 读 /aɪl/，s 不发音" }, { w: "building", ipa: "/ˈbɪldɪŋ/", cn: "建筑", phonics: "build 读 /bɪld/，ing 读 /ɪŋ/" }] },
      { en: "Locate the aisle containment door.", cn: "定位通道封闭门。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "aisle", ipa: "/aɪl/", cn: "通道", phonics: "aisle 读 /aɪl/，s 不发音" }, { w: "door", ipa: "/dɔːr/", cn: "门", phonics: "door 读 /dɔːr/" }] },
    ],
    thinking: "通道封闭系统是数据中心基础设施的重要组成部分。\nDCIM中的通道封闭管理包括：\n① 温度监控（冷通道入口/中部/出口各一个传感器）\n② 门禁联动（开门时CRAC加大风量）\n③ 气流监控（压差传感器监测封闭效果）\n定位时需要精确到哪个楼栋、哪个楼层、哪个数据大厅的哪排机柜。",
    pronunciation: "aisle 的 s 不发音：/aɪl/（同 I'll）。\ncontainment 重音在第二音节：/kənˈteɪn.mənt/。\n节奏：lo-CATE ｜ the COLD AISLE ｜ con-TAIN-ment ｜ in BUILD-ing B5.",
    quiz: [
      { q: "定位B7楼的热通道封闭系统，怎么说？", a: "Locate the hot aisle containment in Building B7." },
      { q: "冷通道封闭系统的作用是什么？", a: "冷通道封闭(cold aisle containment)通过门板和顶板将冷通道完全封闭，防止冷热气流混合，制冷效率可提升20-30%，是提高PUE的核心手段。" },
    ],
  },
  {
    id: 378,
    en: "Locate the precision power distribution cabinet.",
    cn: "定位精密配电柜。",
    ipa: "/loʊˈkeɪt ðə prɪˈʒən paʊər ˌdɪs.trɪˈbjuː.ʃən ˈkæb.ɪ.nət/",
    tags: ["第378句", "DCIM定位", "★★★★"],
    when: "在DCIM中定位精密配电柜（PPC/RPP）。精密配电柜位于UPS下游，为机柜列提供精细化配电和监测。",
    words: [
      { w: "precision", ipa: "/prɪˈʒən/", pos: "形容词", cn: "精密的；精确的", memory: "① precise = 精确的；② precision = 精密/精度。\nprecision power distribution = 精密配电（比传统配电柜监测更精细，可监测每个支路的电流、功率、电能）。", phonics: "pre 读 /prɪ/，ci 读 /ʒə/，sion 读 /ʒən/。注意 ci 读 /ʒ/ 音。", collocations: [["precision cooling", "精密制冷"], ["precision power", "精密配电"], ["precision air conditioning", "精密空调"]], examples: [["The precision PDU monitors each branch.", "精密PDU监测每个支路。"], ["Precision cooling maintains ±1°C.", "精密制冷维持±1°C。"]] },
      { w: "distribution", ipa: "/ˌdɪs.trɪˈbjuː.ʃən/", pos: "名词", cn: "配电；分配", memory: "① distribute = 分配/分发；② distribution = 配电/分配。\n在电气语境中 distribution = 配电（将电力分配到各个末端用电设备）。", phonics: "dis 读 /dɪs/，tri 读 /trɪ/，bu 读 /bjuː/，tion 读 /ʃən/。重音在第三音节。", collocations: [["power distribution", "配电"], ["distribution board", "配电箱"], ["distribution cabinet", "配电柜"]], examples: [["Check the distribution panel.", "检查配电盘。"], ["The distribution system is stable.", "配电系统运行稳定。"]] },
    ],
    phrases: [
      { p: "precision power distribution cabinet", ipa: "/prɪˈʒən paʊər ˌdɪs.trɪˈbjuː.ʃən ˈkæb.ɪ.nət/", cn: "精密配电柜", why: "精密配电柜（PPC/RPP）是UPS下游的关键配电设备，可精确监测每个输出支路的电流、功率、电能，比传统配电柜监测粒度更细。" },
    ],
    grammar: [
      { q: "精密配电柜和普通配电柜有什么区别？", a: "精密配电柜（PPC/RPP）：\n① 每个支路独立监测（电流、功率、电能）\n② 支路级告警（过载、不平衡）\n③ 远程管理（SNMP/Modbus）\n普通配电柜（DB）：\n① 只监测总进线\n② 支路无独立监测\n③ 本地操作\n数据中心服务器供电用精密配电柜，照明/空调用普通配电箱。" },
    ],
    pattern: "Locate the + precision + 设备名",
    patternExamples: [
      { en: "Locate the precision cooling unit.", cn: "定位精密制冷设备。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }] },
      { en: "Locate the precision PDU.", cn: "定位精密PDU。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "pdu", ipa: "/ˌpiːˈdiːˈjuː/", cn: "配电单元", phonics: "P-D-U 逐字母读" }] },
      { en: "Locate the precision air handler.", cn: "定位精密空气处理机。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }] },
    ],
    thinking: "配电层级（从上游到下游）：\n① 中压开关柜（MV Switchboard）→ ② 变压器（Transformer）→ ③ 低压开关柜（LV Switchboard）→ ④ UPS → ⑤ 精密配电柜（PPC/RPP）→ ⑥ 列头柜/RPP → ⑦ 机柜PDU。\n精密配电柜通常位于UPS房间或配电间内。",
    pronunciation: "precision 的 ci 读 /ʒ/，不是 /s/：/prɪˈʒən/。\ndistribution 重音在第三音节：/ˌdɪs.trɪˈbjuː.ʃən/。\n节奏：lo-CATE ｜ the pre-CI-sion ｜ POW-er ｜ dis-tri-BU-tion CAB-i-net.",
    quiz: [
      { q: "定位精密PDU，怎么说？", a: "Locate the precision PDU." },
      { q: "精密配电柜和普通配电柜的核心区别是什么？", a: "精密配电柜每个支路独立监测（电流、功率、电能），支持支路级告警和远程管理；普通配电柜只监测总进线，支路无独立监测。" },
    ],
  },
  {
    id: 379,
    en: "Locate the in-row cooling unit.",
    cn: "定位列间空调。",
    ipa: "/loʊˈkeɪt ðə ɪn roʊ ˈkuː.lɪŋ juː.nɪt/",
    tags: ["第379句", "DCIM定位", "★★★★"],
    when: "在DCIM中定位列间空调（In-Row Cooling）。列间空调安装在机柜列之间，就近制冷，适用于高密度机柜。",
    words: [
      { w: "in-row", ipa: "/ɪn roʊ/", pos: "形容词", cn: "列间的；行内的", memory: "① in = 在…中；② row = 行/列。\nin-row = 在行列中的。in-row cooling = 列间制冷（空调安装在机柜列之间，就近送冷风）。\n对比：perimeter cooling = 周边制冷（CRAC靠墙放置）。", phonics: "in 读 /ɪn/，row 读 /roʊ/。", collocations: [["in-row cooling", "列间制冷"], ["in-row unit", "列间设备"], ["in-row CDU", "列间冷量分配单元"]], examples: [["The in-row unit provides close-coupled cooling.", "列间设备提供近距制冷。"], ["In-row cooling suits high-density racks.", "列间制冷适合高密度机柜。"]] },
    ],
    phrases: [
      { p: "in-row cooling unit", ipa: "/ɪn roʊ ˈkuː.lɪŋ juː.nɪt/", cn: "列间空调", why: "列间空调安装在机柜列之间，距离服务器进风口仅几十厘米，冷风路径短、效率高，适合单机柜功率>10kW的高密度场景。" },
    ],
    grammar: [
      { q: "in-row cooling 和 CRAC 有什么区别？", a: "CRAC（Computer Room Air Conditioning）= 房间级空调（靠墙放置，冷风经过架空地板送到整个房间）\nIn-row cooling = 列间空调（安装在机柜列之间，就近制冷）\nCRAC 适合低密度（<5kW/柜），In-row 适合高密度（>10kW/柜）。\n现代数据中心常两者结合使用：CRAC做基础制冷，In-row做热点补充。" },
    ],
    pattern: "Locate the + in-row + 设备",
    patternExamples: [
      { en: "Locate the in-row CDU.", cn: "定位列间冷量分配单元。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }] },
      { en: "Locate the in-row cooler on Level 3.", cn: "定位三楼的列间冷却器。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }] },
      { en: "Locate the in-row fan unit.", cn: "定位列间风机单元。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }] },
    ],
    thinking: "制冷方式对比：\n① CRAC/CRAH = 房间级制冷（周边式，适合低密度）\n② In-row = 列间制冷（就近式，适合高密度）\n③ In-rack = 机柜级制冷（机柜内置，适合超高密度>20kW）\n④ Rear door heat exchanger = 背板换热器（机柜后门安装，中等密度）\n选择哪种取决于单机柜功率密度。",
    pronunciation: "in-row 连读：/ɪn roʊ/。\ncooling 的 oo 读 /uː/：/ˈkuː.lɪŋ/。\n节奏：lo-CATE ｜ the IN-ROW ｜ COOL-ing U-nit.",
    quiz: [
      { q: "定位三楼的列间空调，怎么说？", a: "Locate the in-row cooling unit on Level 3." },
      { q: "In-row cooling 和 CRAC 各适合什么场景？", a: "CRAC = 房间级空调，适合低密度（<5kW/柜）；In-row = 列间空调，适合高密度（>10kW/柜），冷风路径短效率高。现代数据中心常两者结合使用。" },
    ],
  },
  {
    id: 380,
    en: "Locate the underfloor air supply grille.",
    cn: "定位地板下送风口。",
    ipa: "/loʊˈkeɪt ðə ˈʌn.dər.flɔːr eər səˈplaɪ ɡrɪl/",
    tags: ["第380句", "DCIM定位", "★★★★"],
    when: "在DCIM中定位地板送风口。架空地板下的送风口（穿孔地板/格栅）是冷风从CRAC送入冷通道的关键通道。",
    words: [
      { w: "underfloor", ipa: "/ˈʌn.dər.flɔːr/", pos: "形容词", cn: "地板下的", memory: "① under = 下方；② floor = 地板。\nunderfloor = 地板下的。数据中心常用架空地板（raised floor），地板下空间用作冷风静压箱（plenum）。", phonics: "under 读 /ˈʌn.dər/，floor 读 /flɔːr/。", collocations: [["underfloor cooling", "地板下送冷"], ["underfloor cable", "地板下电缆"], ["underfloor plenum", "地板下静压箱"]], examples: [["Check the underfloor airflow.", "检查地板下气流。"], ["The underfloor space is 600mm deep.", "地板下空间深600mm。"]] },
      { w: "grille", ipa: "/ɡrɪl/", pos: "名词", cn: "格栅；风口", memory: "① grille = 格栅/风口（带孔洞的金属面板）。\n在数据中心语境中，grille = 穿孔地板（perforated tile）或送风格栅，控制冷风从地板下进入冷通道。", phonics: "grille 读 /ɡrɪl/（同 grill 烧烤架的发音）。", collocations: [["air supply grille", "送风格栅"], ["floor grille", "地板格栅"], ["adjustable grille", "可调节格栅"]], examples: [["Replace the damaged grille.", "更换损坏的格栅。"], ["Adjust the grille opening.", "调节格栅开度。"]] },
    ],
    phrases: [
      { p: "underfloor air supply grille", ipa: "/ˈʌn.dər.flɔːr eər səˈplaɪ ɡrɪl/", cn: "地板下送风格栅", why: "架空地板系统中，冷风从CRAC送入地板下静压箱，再通过穿孔地板（grille）向上送入冷通道。格栅的开度直接影响送风量。" },
    ],
    grammar: [
      { q: "grille、vent 和 diffuser 有什么区别？", a: "grille = 格栅（金属孔板，如穿孔地板）\nvent = 通风口（泛指任何空气出入口）\ndiffuser = 散流器（使气流均匀扩散的装置）\n✅ underfloor grille = 地板格栅（穿孔地板，冷风从孔中上送）\n✅ ceiling vent = 天花板通风口\n✅ air diffuser = 空气散流器\n数据中心地板送风用 grille/perforated tile。" },
    ],
    pattern: "Locate the + underfloor + 设施",
    patternExamples: [
      { en: "Locate the underfloor cable tray.", cn: "定位地板下线槽。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }] },
      { en: "Locate the underfloor water pipe.", cn: "定位地板下水管。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "pipe", ipa: "/paɪp/", cn: "管道", phonics: "pipe 读 /paɪp/" }] },
      { en: "Locate the underfloor fire detector.", cn: "定位地板下火灾探测器。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }] },
    ],
    thinking: "架空地板系统（Raised Floor System）是传统数据中心的核心基础设施：\n① 地板高度：通常600-900mm（越高静压箱越大，送风越均匀）\n② 穿孔率：穿孔地板通常25%-56%开孔率\n③ 送风量：通过更换不同穿孔率的地板或加装风阀调节\n④ 维护要点：定期检查地板密封、清理地板下杂物、确认格栅无堵塞",
    pronunciation: "underfloor 的 un 读 /ʌn/，不是 /ən/。\ngrille 读 /ɡrɪl/，同 grill。\n节奏：lo-CATE ｜ the UN-der-floor ｜ AIR sup-PLY GRILLE.",
    quiz: [
      { q: "定位地板下线槽，怎么说？", a: "Locate the underfloor cable tray." },
      { q: "grille、vent、diffuser 在数据中心分别指什么？", a: "grille = 格栅（穿孔地板，冷风从孔中上送）；vent = 通风口（泛指）；diffuser = 散流器（使气流均匀扩散）。数据中心地板送风用 grille 或 perforated tile。" },
    ],
  },
  {
    id: 381,
    en: "Locate the fire suppression gas cylinder.",
    cn: "定位消防灭火气瓶。",
    ipa: "/loʊˈkeɪt ðə faɪər səˈprɛʃ.ən ɡæs ˈsɪl.ɪn.dər/",
    tags: ["第381句", "DCIM定位", "★★★★"],
    when: "在DCIM中定位消防气瓶。数据中心使用气体灭火系统（非水喷淋），气瓶组通常位于专用的气瓶间内。",
    words: [
      { w: "suppression", ipa: "/səˈprɛʃ.ən/", pos: "名词", cn: "灭火；抑制", memory: "① suppress = 压制/扑灭；② suppression = 灭火/抑制。\nfire suppression = 消防灭火。数据中心用气体灭火（gas suppression），不用水喷淋（sprinkler），因为水会损坏电子设备。", phonics: "sup 读 /sə/，pres 读 /prɛ/，sion 读 /ʃən/。重音在第二音节。", collocations: [["fire suppression", "消防灭火"], ["gas suppression system", "气体灭火系统"], ["suppression agent", "灭火剂"]], examples: [["The suppression system is armed.", "灭火系统已就绪。"], ["Check the suppression cylinder pressure.", "检查灭火气瓶压力。"]] },
      { w: "cylinder", ipa: "/ˈsɪl.ɪn.dər/", pos: "名词", cn: "气瓶；圆筒", memory: "① cylinder = 圆筒/气瓶/气缸。\n消防气瓶 = fire suppression cylinder，存储灭火气体（如FM-200、Novec 1230、IG-541惰性气体）。", phonics: "cyl 读 /sɪl/，in 读 /ɪn/，der 读 /dər/。", collocations: [["gas cylinder", "气瓶"], ["cylinder pressure", "气瓶压力"], ["cylinder bank", "气瓶组"]], examples: [["The cylinder pressure is normal.", "气瓶压力正常。"], ["Replace the discharged cylinder.", "更换已释放的气瓶。"]] },
    ],
    phrases: [
      { p: "fire suppression gas cylinder", ipa: "/faɪər səˈprɛʃ.ən ɡæs ˈsɪl.ɪn.dər/", cn: "消防灭火气瓶", why: "数据中心消防气瓶存储洁净气体灭火剂，火灾时10秒内释放，灭火后无残留，不损坏电子设备。常用灭火剂：FM-200（七氟丙烷）、Novec 1230、IG-541（氮气+氩气+CO₂）。" },
    ],
    grammar: [
      { q: "数据中心为什么用气体灭火而不用水喷淋？", a: "水喷淋（sprinkler）：\n❌ 水会损坏服务器、交换机等电子设备\n❌ 灭火后需要长时间干燥和清洁\n❌ 可能触发更大范围的损失\n气体灭火（gas suppression）：\n✅ 灭火剂为洁净气体，无残留\n✅ 不影响电子设备运行\n✅ 10秒内释放，快速灭火\n✅ 人员安全（设计浓度对人体安全）\n所以数据中心主机房用气体灭火，办公区用水喷淋。" },
    ],
    pattern: "Locate the + fire suppression + 设施",
    patternExamples: [
      { en: "Locate the fire suppression control panel.", cn: "定位消防灭火控制面板。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "control", ipa: "/kənˈtroʊl/", cn: "控制", phonics: "con 读 /kən/，trol 读 /troʊl/" }] },
      { en: "Locate the fire suppression nozzle.", cn: "定位消防灭火喷头。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }] },
      { en: "Locate the fire suppression alarm bell.", cn: "定位消防灭火警铃。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "气体灭火系统检查要点：\n① 气瓶压力：在正常范围内（通常绿色区域）\n② 电磁阀：保险销完好，无锈蚀\n③ 喷头：无堵塞、无损坏\n④ 控制面板：自动模式，无告警\n⑤ 释放警告标志：气瓶间门口\"气体灭火保护区\"标志完好\n定位气瓶时需要知道保护的是哪个区域（哪个数据大厅）。",
    pronunciation: "suppression 的 sup 读 /sə/，不是 /sʌ/：/səˈprɛʃ.ən/。\ncylinder 的 cyl 读 /sɪl/：/ˈsɪl.ɪn.dər/。\n节奏：lo-CATE ｜ the FIRE sup-PRES-sion ｜ GAS CYL-in-der.",
    quiz: [
      { q: "定位消防灭火控制面板，怎么说？", a: "Locate the fire suppression control panel." },
      { q: "数据中心为什么用气体灭火而不用水喷淋？", a: "水会损坏电子设备，灭火后需要长时间干燥清洁。气体灭火（FM-200/Novec 1230/IG-541）是洁净气体，无残留，不影响设备运行，10秒内释放快速灭火。" },
    ],
  },
  {
    id: 382,
    en: "Locate the emergency lighting unit.",
    cn: "定位应急照明设备。",
    ipa: "/loʊˈkeɪt ðə ɪˈmɜːr.dʒən.si ˈlaɪ.tɪŋ juː.nɪt/",
    tags: ["第382句", "DCIM定位", "★★★"],
    when: "在DCIM中定位应急照明。应急照明在停电时自动启动，确保人员安全撤离，是消防安全的必备设施。",
    words: [
      { w: "emergency", ipa: "/ɪˈmɜːr.dʒən.si/", pos: "形容词/名词", cn: "应急的；紧急情况", memory: "① emerge = 出现/浮现；② emergency = 紧急情况/应急。\nemergency lighting = 应急照明（停电时自动启动，电池供电至少90分钟）。", phonics: "e 读 /ɪ/，mer 读 /mɜːr/，gen 读 /dʒən/，cy 读 /si/。重音在第二音节。", collocations: [["emergency lighting", "应急照明"], ["emergency exit", "应急出口"], ["emergency power", "应急电源"]], examples: [["Test the emergency lighting monthly.", "每月测试应急照明。"], ["The emergency exit is blocked.", "应急出口被堵住了。"]] },
    ],
    phrases: [
      { p: "emergency lighting unit", ipa: "/ɪˈmɜːr.dʒən.si ˈlaɪ.tɪŋ juː.nɪt/", cn: "应急照明设备", why: "应急照明设备内置蓄电池，正常时由市电充电，停电时自动切换到电池供电，确保人员能看清撤离路线。" },
    ],
    grammar: [
      { q: "emergency lighting 和 standby lighting 有什么区别？", a: "emergency lighting = 应急照明（停电时自动启动，电池供电，照度较低但足够撤离）\nstandby lighting = 备用照明（由发电机供电，照度接近正常，可继续工作）\n✅ emergency lighting：电池供电，停电立即亮，至少90分钟\n✅ standby lighting：发电机供电，发电机启动后亮（通常10-15秒延迟）\n数据中心两者都有。" },
    ],
    pattern: "Locate the + emergency + 设施",
    patternExamples: [
      { en: "Locate the emergency exit sign.", cn: "定位应急出口标志。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "emergency", ipa: "/ɪˈmɜːrdʒənsi/", cn: "紧急", phonics: "e 读 /ɪ/，mergency 读 /mɜːrdʒənsi/" }, { w: "sign", ipa: "/saɪn/", cn: "签字", phonics: "sign 读 /saɪn/" }] },
      { en: "Locate the emergency shower station.", cn: "定位应急洗眼/淋浴站。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "emergency", ipa: "/ɪˈmɜːrdʒənsi/", cn: "紧急", phonics: "e 读 /ɪ/，mergency 读 /mɜːrdʒənsi/" }] },
      { en: "Locate the emergency stop button.", cn: "定位应急停止按钮。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "emergency", ipa: "/ɪˈmɜːrdʒənsi/", cn: "紧急", phonics: "e 读 /ɪ/，mergency 读 /mɜːrdʒənsi/" }, { w: "stop", ipa: "/stɒp/", cn: "停止", phonics: "stop 读 /stɒp/" }] },
    ],
    thinking: "应急照明管理要点：\n① 每月功能测试（按测试按钮，确认灯亮）\n② 每年全容量测试（断市电，确认电池供电≥90分钟）\n③ 电池寿命：通常3-5年需更换\n④ 位置要求：走廊、楼梯间、出口、配电室、UPS室\nDCIM中可查看应急照明状态：正常(standby)/测试中(testing)/故障(fault)。",
    pronunciation: "emergency 重音在第二音节：/ɪˈmɜːr.dʒən.si/。\nlighting 的 igh 读 /aɪ/：/ˈlaɪ.tɪŋ/。\n节奏：lo-CATE ｜ the e-MER-gen-cy ｜ LIGHT-ing U-nit.",
    quiz: [
      { q: "定位应急出口标志，怎么说？", a: "Locate the emergency exit sign." },
      { q: "应急照明和备用照明有什么区别？", a: "应急照明 = 电池供电，停电立即亮，照度较低但够撤离，至少90分钟；备用照明 = 发电机供电，发电机启动后亮（10-15秒延迟），照度接近正常。" },
    ],
  },
  {
    id: 383,
    en: "Locate the access control card reader.",
    cn: "定位门禁读卡器。",
    ipa: "/loʊˈkeɪt ðə ˈæk.ses kənˈtroʊl kɑːrd ˈriː.dər/",
    tags: ["第383句", "DCIM定位", "★★★★"],
    when: "在DCIM中定位门禁读卡器。数据中心每个关键房间都有独立的门禁控制，读卡器记录所有进出人员。",
    words: [
      { w: "access control", ipa: "/ˈæk.ses kənˈtroʊl/", pos: "名词", cn: "门禁控制", memory: "① access = 进入/访问权限；② control = 控制。\naccess control = 门禁控制系统，管理谁可以进哪个房间、什么时间可以进。\n数据中心门禁分级：公共区→办公区→机房区→核心区（如UPS室/电池室）。", phonics: "access 读 /ˈæk.ses/，control 读 /kənˈtroʊl/。", collocations: [["access control system", "门禁系统"], ["access card", "门禁卡"], ["access log", "进出记录"]], examples: [["Swipe your access card.", "刷门禁卡。"], ["Check the access log for this room.", "查看这个房间的进出记录。"]] },
      { w: "card reader", ipa: "/kɑːrd ˈriː.dər/", pos: "名词", cn: "读卡器", memory: "① card = 卡；② reader = 读取器。\ncard reader = 读卡器（读取门禁卡信息的设备）。现代读卡器支持：IC卡、指纹、人脸识别、手机NFC。", phonics: "card 读 /kɑːrd/，reader 读 /ˈriː.dər/。", collocations: [["card reader", "读卡器"], ["biometric reader", "生物识别读卡器"], ["reader malfunction", "读卡器故障"]], examples: [["The card reader is not working.", "读卡器不工作了。"], ["Use your fingerprint on the reader.", "在读取器上使用指纹。"]] },
    ],
    phrases: [
      { p: "access control card reader", ipa: "/ˈæk.ses kənˈtroʊl kɑːrd ˈriː.dər/", cn: "门禁读卡器", why: "门禁读卡器是物理安全的第一道防线。DCIM中可查看每个读卡器的状态（在线/离线/故障）和最近的刷卡记录。" },
    ],
    grammar: [
      { q: "门禁系统的常见术语有哪些？", a: "access card = 门禁卡\naccess control = 门禁控制\naccess log = 进出记录\naccess level = 门禁等级\naccess denied = 拒绝进入\naccess granted = 允许进入\ntailgating = 尾随（一个人刷卡，两人进入，是安全违规）\nanti-passback = 防回传（防止同一张卡连续刷两次进入）\nmantrap = 防尾随通道（两道门互锁，一次只允许一人通过）" },
    ],
    pattern: "Locate the + access control + 设施",
    patternExamples: [
      { en: "Locate the access control panel.", cn: "定位门禁控制面板。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "access", ipa: "/ˈæksɛs/", cn: "门禁", phonics: "ac 读 /æk/，cess 读 /sɛs/" }, { w: "control", ipa: "/kənˈtroʊl/", cn: "控制", phonics: "con 读 /kən/，trol 读 /troʊl/" }] },
      { en: "Locate the access control server.", cn: "定位门禁服务器。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "access", ipa: "/ˈæksɛs/", cn: "门禁", phonics: "ac 读 /æk/，cess 读 /sɛs/" }, { w: "control", ipa: "/kənˈtroʊl/", cn: "控制", phonics: "con 读 /kən/，trol 读 /troʊl/" }] },
      { en: "Locate the mantrap at the main entrance.", cn: "定位主入口的防尾随通道。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }] },
    ],
    thinking: "数据中心门禁层级：\n① 园区大门（Gate）：车牌识别 + 保安核验\n② 楼栋大门（Building Entrance）：门禁卡 + 访客登记\n③ 楼层门（Floor Door）：门禁卡（按部门授权）\n④ 机房门（Data Hall）：门禁卡 + 生物识别（指纹/人脸）\n⑤ 核心区域（UPS/电池/网络间）：门禁卡 + 生物识别 + 双人授权\nDCIM中可查看每个门的实时状态和进出记录。",
    pronunciation: "access 的 a 读 /æ/，不是 /ɑː/：/ˈæk.ses/。\ncontrol 的 o 读 /oʊ/：/kənˈtroʊl/。\n节奏：lo-CATE ｜ the AC-cess con-TROL ｜ CARD REA-der.",
    quiz: [
      { q: "定位门禁控制面板，怎么说？", a: "Locate the access control panel." },
      { q: "什么是尾随（tailgating）？", a: "tailgating = 一个人刷卡开门，另一个人跟着进去（不刷卡）。这是数据中心的安全违规行为，因为未授权人员进入了受限区域。防尾随措施包括：mantrap（防尾随通道）、CCTV监控、安保人员值守。" },
    ],
  },
  {
    id: 384,
    en: "Locate the CCTV camera covering the main entrance.",
    cn: "定位覆盖主入口的CCTV摄像头。",
    ipa: "/loʊˈkeɪt ðə ˌsiː.siː.tiːˈviː ˈkæm.rə ˈkʌv.ər.ɪŋ ðə meɪn ˈɛn.trəns/",
    tags: ["第384句", "DCIM定位", "★★★★"],
    when: "在DCIM中定位CCTV摄像头。数据中心有数百个摄像头覆盖所有关键区域，需要按位置或功能快速定位特定摄像头。",
    words: [
      { w: "CCTV", ipa: "/ˌsiː.siː.tiːˈviː/", pos: "名词", cn: "闭路电视监控", memory: "① C = Closed（封闭的）；② C = Circuit（电路）；③ TV = Television（电视）。\nCCTV = 闭路电视监控系统，即视频监控系统。数据中心通常部署数百个摄像头，24小时录像，存储30-90天。", phonics: "逐字母读：C-C-T-V。", collocations: [["CCTV camera", "CCTV摄像头"], ["CCTV footage", "监控录像"], ["CCTV monitoring", "视频监控"]], examples: [["Check the CCTV footage.", "查看监控录像。"], ["The CCTV camera is offline.", "CCTV摄像头离线了。"]] },
      { w: "covering", ipa: "/ˈkʌv.ər.ɪŋ/", pos: "动词(现在分词)", cn: "覆盖的", memory: "① cover = 覆盖/涵盖；② covering = 覆盖着…的（后置定语）。\ncovering the main entrance = 覆盖主入口的（描述摄像头的监控范围）。", phonics: "cov 读 /kʌv/，er 读 /ər/，ing 读 /ɪŋ/。", collocations: [["covering the area", "覆盖该区域"], ["covering all angles", "覆盖所有角度"], ["blind spot", "盲区"]], examples: [["Which camera is covering the loading bay?", "哪个摄像头覆盖卸货平台？"], ["There is a blind spot here.", "这里有盲区。"]] },
    ],
    phrases: [
      { p: "CCTV camera covering", ipa: "/ˌsiː.siː.tiːˈviː ˈkæm.rə ˈkʌv.ər.ɪŋ/", cn: "覆盖…的CCTV摄像头", why: "CCTV摄像头按监控范围定位。covering + 位置 = 描述该摄像头的覆盖区域，方便快速找到需要查看录像的摄像头。" },
    ],
    grammar: [
      { q: "covering 在这里是什么语法成分？", a: "covering the main entrance 是现在分词短语作后置定语，修饰 camera。\n= the CCTV camera that covers the main entrance（定语从句）\n= the CCTV camera covering the main entrance（分词短语，更简洁）\n这种结构在设备定位中非常常用：\n✅ the sensor monitoring the cold aisle = 监控冷通道的传感器\n✅ the camera covering the UPS room = 覆盖UPS室的摄像头" },
    ],
    pattern: "Locate the + CCTV camera + covering + 位置",
    patternExamples: [
      { en: "Locate the CCTV camera covering the loading bay.", cn: "定位覆盖卸货平台的CCTV摄像头。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "cctv", ipa: "/ˌsiːˌsiːˈtiːˈviː/", cn: "监控", phonics: "C-C-T-V 逐字母读" }, { w: "loading", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
      { en: "Locate the CCTV camera covering the UPS room.", cn: "定位覆盖UPS室的CCTV摄像头。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "cctv", ipa: "/ˌsiːˌsiːˈtiːˈviː/", cn: "监控", phonics: "C-C-T-V 逐字母读" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }] },
      { en: "Locate the CCTV camera at the main gate.", cn: "定位大门处的CCTV摄像头。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "cctv", ipa: "/ˌsiːˌsiːˈtiːˈviː/", cn: "监控", phonics: "C-C-T-V 逐字母读" }] },
    ],
    thinking: "CCTV覆盖策略：\n① 园区周界：围栏摄像头（红外/热成像）\n② 出入口：人脸抓拍摄像头\n③ 走廊/通道：枪型摄像头（固定方向）\n④ 数据大厅：球型摄像头（360°旋转）\n⑤ 核心区域（UPS/电池/网络间）：高清摄像头 + 门禁联动\nDCIM中可按楼栋、楼层、房间快速筛选摄像头，也可按摄像头编号定位。",
    pronunciation: "CCTV 逐字母读：C-C-T-V。\ncovering 的 cov 读 /kʌv/，不是 /kəv/。\n节奏：lo-CATE ｜ the C-C-T-V CAM-er-a ｜ COV-er-ing ｜ the MAIN EN-trance.",
    quiz: [
      { q: "定位覆盖卸货平台的CCTV摄像头，怎么说？", a: "Locate the CCTV camera covering the loading bay." },
      { q: "covering the main entrance 是什么语法结构？", a: "covering the main entrance 是现在分词短语作后置定语，修饰 camera。等于定语从句 that covers the main entrance，但分词短语更简洁。" },
    ],
  },
  {
    id: 385,
    en: "Locate the main distribution board on Level 2.",
    cn: "定位二楼的主配电箱。",
    ipa: "/loʊˈkeɪt ðə meɪn ˌdɪs.trɪˈbjuː.ʃən bɔːrd ɑːn ˈlɛv.əl tuː/",
    tags: ["第385句", "DCIM定位", "★★★★"],
    when: "在DCIM中定位配电箱（Distribution Board/DB）。配电箱是低压配电的末端分配设备，为照明、空调、插座等非IT负载供电。",
    words: [
      { w: "distribution board", ipa: "/ˌdɪs.trɪˈbjuː.ʃən bɔːrd/", pos: "名词", cn: "配电箱；配电盘", memory: "① distribution = 配电/分配；② board = 板/柜。\ndistribution board (DB) = 配电箱（将电力分配到各个末端回路的设备）。\n区别于：switchboard = 开关柜（上游，容量大），distribution board = 配电箱（下游，容量小）。", phonics: "distribution 读 /ˌdɪs.trɪˈbjuː.ʃən/，board 读 /bɔːrd/。", collocations: [["main distribution board", "主配电箱"], ["sub distribution board", "分配电箱"], ["distribution board schedule", "配电箱回路表"]], examples: [["Check the DB for tripped breakers.", "检查配电箱有无跳闸的断路器。"], ["The sub-DB feeds the lighting.", "分配电箱给照明供电。"]] },
    ],
    phrases: [
      { p: "main distribution board", ipa: "/meɪn ˌdɪs.trɪˈbjuː.ʃən bɔːrd/", cn: "主配电箱", why: "main DB = 主配电箱（楼层总配电箱），sub-DB = 分配电箱（区域配电箱）。配电层级：MDB（主配电）→ SDB（分配电）→ FCU（末端回路）。" },
    ],
    grammar: [
      { q: "switchboard 和 distribution board 有什么区别？", a: "switchboard（开关柜）：\n① 上游设备，容量大（数百到数千安培）\n② 包含主断路器、保护继电器\n③ 通常独立房间\n④ 如：MV Switchboard、LV Switchboard\ndistribution board（配电箱）：\n① 下游设备，容量小（数十到数百安培）\n② 包含多个小型断路器（MCB/MCCB）\n③ 壁挂式或嵌入式\n④ 如：照明配电箱、空调配电箱\n简单说：switchboard 给 distribution board 供电。" },
    ],
    pattern: "Locate the + 配电箱类型 + on/in + 位置",
    patternExamples: [
      { en: "Locate the sub distribution board in the UPS room.", cn: "定位UPS室的分配电箱。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "Locate the emergency distribution board.", cn: "定位应急配电箱。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "emergency", ipa: "/ɪˈmɜːrdʒənsi/", cn: "紧急", phonics: "e 读 /ɪ/，mergency 读 /mɜːrdʒənsi/" }] },
      { en: "Locate the lighting distribution board on Level 1.", cn: "定位一楼的照明配电箱。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }] },
    ],
    thinking: "配电箱命名规范（常见）：\nMDB-1 = Main Distribution Board 1（主配电箱1号）\nSDB-L1-01 = Sub Distribution Board, Level 1, No.01（一楼1号分配电箱）\nDB-UPS-01 = Distribution Board for UPS Room 01（UPS室1号配电箱）\nDCIM中可按编号、位置、负载类型筛选配电箱。",
    pronunciation: "distribution 重音在第三音节：/ˌdɪs.trɪˈbjuː.ʃən/。\nboard 的 oa 读 /ɔː/：/bɔːrd/。\n节奏：lo-CATE ｜ the MAIN ｜ dis-tri-BU-tion BOARD ｜ on LEV-el 2.",
    quiz: [
      { q: "定位UPS室的分配电箱，怎么说？", a: "Locate the sub distribution board in the UPS room." },
      { q: "switchboard 和 distribution board 有什么区别？", a: "switchboard（开关柜）= 上游设备，容量大，含主断路器和保护继电器，通常独立房间；distribution board（配电箱）= 下游设备，容量小，含多个小型断路器，壁挂式。switchboard 给 distribution board 供电。" },
    ],
  },
  {
    id: 386,
    en: "Locate the grounding system for the data hall.",
    cn: "定位数据大厅的接地系统。",
    ipa: "/loʊˈkeɪt ðə ˈɡraʊn.dɪŋ ˈsɪs.təm fɔːr ðə ˈdeɪ.tə hɔːl/",
    tags: ["第386句", "DCIM定位", "★★★"],
    when: "在DCIM中定位接地系统。接地系统是电气安全的基础，将所有设备的金属外壳连接到大地，防止触电和电磁干扰。",
    words: [
      { w: "grounding", ipa: "/ˈɡraʊn.dɪŋ/", pos: "名词", cn: "接地", memory: "① ground = 地面/大地；② grounding = 接地（将电气设备连接到大地）。\n接地的目的：① 保护人身安全（防触电）② 保护设备（防雷/防静电）③ 信号参考（电磁兼容）。\n美式英语用 grounding，英式英语用 earthing。", phonics: "ground 读 /ɡraʊn/，ing 读 /ɪŋ/。", collocations: [["grounding system", "接地系统"], ["grounding resistance", "接地电阻"], ["grounding busbar", "接地母排"]], examples: [["Check the grounding resistance.", "检查接地电阻。"], ["The grounding system must be <1 ohm.", "接地系统电阻必须<1欧姆。"]] },
    ],
    phrases: [
      { p: "grounding system", ipa: "/ˈɡraʊn.dɪŋ ˈsɪs.təm/", cn: "接地系统", why: "数据中心接地系统包括：① 主接地极（接地网）② 接地母排（信号参考网格SRG）③ 设备接地线。接地电阻要求通常<1欧姆。" },
    ],
    grammar: [
      { q: "grounding 和 earthing 有什么区别？", a: "grounding = 接地（美式英语）\nearthing = 接地（英式英语）\n两者含义完全相同，只是英语方言差异。\n✅ The grounding system is intact.（美式）\n✅ The earthing system is intact.（英式）\n马来西亚受英国影响，当地工程师可能用 earthing，但国际标准（IEC/IEEE）两者通用。" },
    ],
    pattern: "Locate the + grounding/earthing + 设施",
    patternExamples: [
      { en: "Locate the grounding busbar.", cn: "定位接地母排。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }] },
      { en: "Locate the grounding electrode.", cn: "定位接地极。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }] },
      { en: "Locate the signal reference grid.", cn: "定位信号参考网格。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }] },
    ],
    thinking: "数据中心接地系统层级：\n① 接地网（Ground Grid）：埋在地下的铜导体网格，接地电阻<1Ω\n② 主接地母排（TMB/Telecommunications Main Bonding）：总接地汇流排\n③ 信号参考网格（SRG/Signal Reference Grid）：架空地板下的铜网格，为IT设备提供等电位参考\n④ 设备接地线（Equipment Grounding Conductor）：每台设备到SRG的接地连接\n接地系统每年测试一次，确保接地电阻合格。",
    pronunciation: "grounding 的 ou 读 /aʊ/：/ˈɡraʊn.dɪŋ/。\nsystem 的 y 读 /ɪ/：/ˈsɪs.təm/。\n节奏：lo-CATE ｜ the GROUND-ing SYS-tem ｜ for the DA-ta HALL.",
    quiz: [
      { q: "定位接地母排，怎么说？", a: "Locate the grounding busbar." },
      { q: "grounding 和 earthing 有什么区别？", a: "完全相同，只是英语方言差异。grounding = 美式英语；earthing = 英式英语。马来西亚受英国影响可能用 earthing，但国际标准两者通用。" },
    ],
  },
  {
    id: 387,
    en: "Locate the surge protection device.",
    cn: "定位防雷器（浪涌保护器）。",
    ipa: "/loʊˈkeɪt ðə sɜːrdʒ prəˈtɛk.ʃən dɪˈvaɪs/",
    tags: ["第387句", "DCIM定位", "★★★"],
    when: "在DCIM中定位防雷器（SPD）。防雷器保护设备免受雷击和电网浪涌的损害，马来西亚雷暴频繁，SPD尤为重要。",
    words: [
      { w: "surge", ipa: "/sɜːrdʒ/", pos: "名词", cn: "浪涌；突增", memory: "① surge = 浪涌/突增（电压/电流的瞬间异常升高）。\n② 浪涌来源：雷击、大型设备启停、电网切换。\nsurge protection = 浪涌保护（防止瞬间高电压损坏设备）。", phonics: "surge 读 /sɜːrdʒ/，ur 读 /ɜːr/，ge 读 /dʒ/。", collocations: [["surge protection", "浪涌保护"], ["power surge", "电力浪涌"], ["surge arrester", "避雷器"]], examples: [["A power surge damaged the server.", "一次电力浪涌损坏了服务器。"], ["The surge protector absorbed the spike.", "防雷器吸收了尖峰。"]] },
      { w: "SPD", ipa: "/ˌɛs.piːˈdiː/", pos: "缩写", cn: "浪涌保护器", memory: "SPD = Surge Protection Device = 浪涌保护器（俗称防雷器/避雷器）。\nSPD分级：Type 1（进线端，防雷击）→ Type 2（配电箱，防操作浪涌）→ Type 3（设备端，精细保护）。", phonics: "逐字母读：S-P-D。", collocations: [["SPD status", "SPD状态"], ["SPD replacement", "SPD更换"], ["SPD indicator", "SPD指示灯"]], examples: [["The SPD indicator shows green.", "SPD指示灯显示绿色（正常）。"], ["Replace the SPD — indicator is red.", "更换SPD——指示灯变红了。"]] },
    ],
    phrases: [
      { p: "surge protection device (SPD)", ipa: "/sɜːrdʒ prəˈtɛk.ʃən dɪˈvaɪs/", cn: "浪涌保护器（防雷器）", why: "SPD是数据中心电气保护的重要组件。马来西亚柔佛州年雷暴日数超过200天，SPD对保护IT设备至关重要。SPD有状态指示窗（绿色=正常，红色=需更换）。" },
    ],
    grammar: [
      { q: "SPD 和避雷针有什么区别？", a: "避雷针（Lightning Rod）：\n① 安装在建筑物顶部\n② 引雷入地，保护建筑物不被雷击\n③ 保护对象：建筑结构\nSPD（Surge Protection Device）：\n① 安装在配电系统中\n② 吸收电压浪涌，保护电气设备\n③ 保护对象：电子设备\n两者配合使用：避雷针防直击雷，SPD防感应雷和操作浪涌。" },
    ],
    pattern: "Locate the + surge protection + 设施",
    patternExamples: [
      { en: "Locate the surge protection device on the MDB.", cn: "定位主配电箱上的浪涌保护器。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "protection", ipa: "/prəˈtɛkʃən/", cn: "保护", phonics: "pro 读 /prə/，tection 读 /tɛkʃən/" }, { w: "device", ipa: "/dɪˈvaɪs/", cn: "设备", phonics: "de 读 /dɪ/，vice 读 /vaɪs/" }] },
      { en: "Locate the Type 1 SPD at the building entrance.", cn: "定位楼栋入口的1级SPD。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "building", ipa: "/ˈbɪldɪŋ/", cn: "建筑", phonics: "build 读 /bɪld/，ing 读 /ɪŋ/" }] },
      { en: "Locate the surge arrester on the MV panel.", cn: "定位中压柜上的避雷器。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "panel", ipa: "/ˈpænl/", cn: "面板", phonics: "pan 读 /pæn/，el 读 /l/" }] },
    ],
    thinking: "SPD管理要点：\n① 状态检查：指示窗绿色=正常，红色=需更换\n② 分级配置：Type 1（进线）→ Type 2（配电）→ Type 3（设备端）\n③ 更换周期：每次大雷击后检查，指示变红立即更换\n④ 马来西亚特殊性：年雷暴日数>200天，SPD更换频率高于温带地区\nDCIM中可监测SPD状态（部分高端SPD支持远程监控）。",
    pronunciation: "surge 的 ur 读 /ɜːr/：/sɜːrdʒ/。\nprotection 重音在第二音节：/prəˈtɛk.ʃən/。\n节奏：lo-CATE ｜ the SURGE ｜ pro-TEC-tion de-VICE.",
    quiz: [
      { q: "定位主配电箱上的浪涌保护器，怎么说？", a: "Locate the surge protection device on the MDB." },
      { q: "SPD 和避雷针有什么区别？", a: "避雷针安装在建筑顶部，引雷入地保护建筑结构；SPD安装在配电系统中，吸收电压浪涌保护电子设备。两者配合：避雷针防直击雷，SPD防感应雷和操作浪涌。" },
    ],
  },
  {
    id: 388,
    en: "Locate the diesel fuel storage tank.",
    cn: "定位柴油储罐。",
    ipa: "/loʊˈkeɪt ðə ˈdiː.zəl fjuːəl ˈstɔːr.ɪdʒ tæŋk/",
    tags: ["第388句", "DCIM定位", "★★★★"],
    when: "在DCIM中定位柴油储罐。柴油储罐为发电机提供燃料，数据中心通常储备24-72小时的柴油量以满足应急运行。",
    words: [
      { w: "fuel", ipa: "/fjuːəl/", pos: "名词", cn: "燃料", memory: "① fuel = 燃料/燃油。\n② 数据中心发电机使用柴油（diesel fuel），不用汽油（petrol/gasoline）。\nfuel storage tank = 燃料储罐。", phonics: "fuel 读 /fjuːəl/，fu 读 /fjuː/，el 读 /əl/。", collocations: [["fuel tank", "油箱/储罐"], ["fuel level", "油位"], ["fuel consumption", "油耗"]], examples: [["Check the fuel level.", "检查油位。"], ["The fuel consumption is 200L/hour.", "油耗为200升/小时。"]] },
      { w: "storage tank", ipa: "/ˈstɔːr.ɪdʒ tæŋk/", pos: "名词", cn: "储罐", memory: "① storage = 存储；② tank = 罐/箱。\nstorage tank = 储罐。数据中心柴油储罐通常分为：\n主储罐（bulk tank）= 室外大型储罐（数千到数万升）\n日用油箱（day tank）= 发电机旁小型油箱（数百升，供8小时运行）。", phonics: "storage 读 /ˈstɔːr.ɪdʒ/，tank 读 /tæŋk/。", collocations: [["storage tank", "储罐"], ["day tank", "日用油箱"], ["bulk tank", "主储罐"]], examples: [["The bulk tank is 80% full.", "主储罐80%满。"], ["Refill the day tank.", "补充日用油箱。"]] },
    ],
    phrases: [
      { p: "diesel fuel storage tank", ipa: "/ˈdiː.zəl fjuːəl ˈstɔːr.ɪdʒ tæŋk/", cn: "柴油储罐", why: "柴油储罐是数据中心应急供电的燃料保障。储备量通常按24-72小时满负荷运行计算，并有签约燃油供应商可在4-8小时内紧急供油。" },
    ],
    grammar: [
      { q: "柴油储罐和日用油箱有什么区别？", a: "主储罐（Bulk Tank / Storage Tank）：\n① 室外大型储罐（5000-50000升）\n② 存储24-72小时用油量\n③ 定期由油罐车补充\n日用油箱（Day Tank）：\n① 发电机旁小型油箱（200-1000升）\n② 供8小时左右运行\n③ 由主储罐自动泵送补充\n主储罐→输油泵→日用油箱→发电机。" },
    ],
    pattern: "Locate the + fuel/storage + 设施",
    patternExamples: [
      { en: "Locate the fuel transfer pump.", cn: "定位输油泵。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }] },
      { en: "Locate the day tank for Generator No.1.", cn: "定位1号发电机的日用油箱。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "tank", ipa: "/tæŋk/", cn: "储箱", phonics: "tank 读 /tæŋk/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "Locate the fuel polishing system.", cn: "定位燃油净化系统。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
    ],
    thinking: "柴油管理要点：\n① 油位监控：主储罐和日用油箱都要监控\n② 油质管理：柴油存放超过6个月需检测（水分、微生物、沉淀物）\n③ 燃油净化（Fuel Polishing）：定期循环过滤，保持油质\n④ 应急供油合同：与燃油供应商签约，确保4-8小时内紧急送油\n⑤ 消防要求：储罐区域需有防泄漏围堰（bunding）\nDCIM中可查看实时油位、油耗、预计剩余运行时间。",
    pronunciation: "diesel 的 ie 读 /iː/：/ˈdiː.zəl/。\nfuel 读 /fjuːəl/，不是 /fjuːl/。\n节奏：lo-CATE ｜ the DIE-sel FUEL ｜ STOR-age TANK.",
    quiz: [
      { q: "定位1号发电机的日用油箱，怎么说？", a: "Locate the day tank for Generator No.1." },
      { q: "主储罐和日用油箱有什么区别？", a: "主储罐（Bulk Tank）= 室外大型储罐（5000-50000升），存储24-72小时用油量，定期由油罐车补充；日用油箱（Day Tank）= 发电机旁小型油箱（200-1000升），供约8小时运行，由主储罐自动泵送补充。" },
    ],
  },
  {
    id: 389,
    en: "Locate the chilled water pump room.",
    cn: "定位冷冻水泵房。",
    ipa: "/loʊˈkeɪt ðə tʃɪld ˈwɔː.tər pʌmp ruːm/",
    tags: ["第389句", "DCIM定位", "★★★★"],
    when: "在DCIM中定位冷冻水泵房。冷冻水系统是中央空调的核心，泵房内有冷冻水泵（一次泵/二次泵）和管道阀门。",
    words: [
      { w: "chilled water", ipa: "/tʃɪld ˈwɔː.tər/", pos: "名词", cn: "冷冻水", memory: "① chill = 冷却/冷冻；② chilled = 已冷冻的。\nchilled water = 冷冻水（通常6-7°C供水，12-13°C回水）。\n冷冻水系统：冷水机组（chiller）→ 冷冻水泵 → 空调末端（CRAC/CRAH/FCU）→ 回到冷水机组。", phonics: "chilled 读 /tʃɪld/，water 读 /ˈwɔː.tər/。", collocations: [["chilled water system", "冷冻水系统"], ["chilled water pump", "冷冻水泵"], ["chilled water temperature", "冷冻水温度"]], examples: [["The chilled water supply is 7°C.", "冷冻水供水温度7°C。"], ["Check the chilled water pressure.", "检查冷冻水压力。"]] },
      { w: "pump room", ipa: "/pʌmp ruːm/", pos: "名词", cn: "泵房", memory: "① pump = 泵；② room = 房间。\npump room = 泵房（放置水泵、管道、阀门的专用房间）。\n数据中心泵房通常包括：冷冻水泵（一次泵+二次泵）、冷却水泵（condenser water pump）。", phonics: "pump 读 /pʌmp/，room 读 /ruːm/。", collocations: [["pump room", "泵房"], ["chiller room", "冷水机房"], ["mechanical room", "机房（机械）"]], examples: [["The pump room is on the roof.", "泵房在屋顶。"], ["Check the pump vibration.", "检查泵的振动。"]] },
    ],
    phrases: [
      { p: "chilled water pump room", ipa: "/tʃɪld ˈwɔː.tər pʌmp ruːm/", cn: "冷冻水泵房", why: "冷冻水泵房是中央空调系统的动力中心。一次泵（primary pump）负责冷水机组侧循环，二次泵（secondary pump）负责末端侧循环。" },
    ],
    grammar: [
      { q: "一次泵和二次泵有什么区别？", a: "一次泵（Primary Pump）：\n① 负责冷水机组到分集水器之间的循环\n② 定流量运行\n③ 与冷水机组一一对应\n二次泵（Secondary Pump）：\n① 负责分集水器到末端（CRAC/FCU）之间的循环\n② 变流量运行（根据末端需求调节）\n③ 数量多于冷水机组\n一次泵保证冷水机组安全运行，二次泵满足末端负荷需求。" },
    ],
    pattern: "Locate the + chilled water + 设施",
    patternExamples: [
      { en: "Locate the chilled water valve.", cn: "定位冷冻水阀门。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "valve", ipa: "/vælv/", cn: "阀门", phonics: "valve 读 /vælv/" }] },
      { en: "Locate the chilled water flow meter.", cn: "定位冷冻水流量计。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }] },
      { en: "Locate the chiller plant on the roof.", cn: "定位屋顶的冷水机房。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }] },
    ],
    thinking: "冷冻水系统关键参数：\n① 供水温度（CHW Supply）：6-7°C\n② 回水温度（CHW Return）：12-13°C\n③ 温差（ΔT）：5-6°C\n④ 流量：根据负荷自动调节\n⑤ 压力：泵出口压力、末端压力\nDCIM中可实时监控所有参数，异常时自动告警。",
    pronunciation: "chilled 的 ill 读 /ɪl/：/tʃɪld/。\npump 的 u 读短音 /ʌ/：/pʌmp/。\n节奏：lo-CATE ｜ the CHILLED WA-ter ｜ PUMP ROOM.",
    quiz: [
      { q: "定位冷冻水阀门，怎么说？", a: "Locate the chilled water valve." },
      { q: "一次泵和二次泵各负责什么？", a: "一次泵（Primary Pump）负责冷水机组到分集水器之间的循环，定流量运行，与冷水机组一一对应；二次泵（Secondary Pump）负责分集水器到末端（CRAC/FCU）之间的循环，变流量运行，根据末端需求调节。" },
    ],
  },
  {
    id: 390,
    en: "Locate the cooling tower on the rooftop.",
    cn: "定位屋顶的冷却塔。",
    ipa: "/loʊˈkeɪt ðə ˈkuː.lɪŋ ˈtaʊ.ər ɑːn ðə ˈruːf.tɑːp/",
    tags: ["第390句", "DCIM定位", "★★★★"],
    when: "在DCIM中定位冷却塔。冷却塔是冷冻水系统的散热端，将冷水机组产生的热量排放到大气中，通常安装在屋顶。",
    words: [
      { w: "cooling tower", ipa: "/ˈkuː.lɪŋ ˈtaʊ.ər/", pos: "名词", cn: "冷却塔", memory: "① cooling = 冷却；② tower = 塔。\ncooling tower = 冷却塔（利用水蒸发原理将热量排放到大气中的设备）。\n冷却塔是冷冻水系统的'排热端'：冷水机组吸收室内热量→冷却水带出→冷却塔散热→冷却水回到冷水机组。", phonics: "cooling 读 /ˈkuː.lɪŋ/，tower 读 /ˈtaʊ.ər/。", collocations: [["cooling tower fan", "冷却塔风机"], ["cooling tower basin", "冷却塔水盘"], ["cooling tower water treatment", "冷却塔水处理"]], examples: [["Check the cooling tower fan.", "检查冷却塔风机。"], ["The cooling tower basin needs cleaning.", "冷却塔水盘需要清洗。"]] },
      { w: "rooftop", ipa: "/ˈruːf.tɑːp/", pos: "名词", cn: "屋顶", memory: "① roof = 屋顶；② top = 顶部。\nrooftop = 屋顶。冷却塔安装在屋顶，因为需要良好的通风和散热空间。", phonics: "roof 读 /ruːf/，top 读 /tɑːp/。", collocations: [["rooftop unit", "屋顶设备"], ["rooftop access", "屋顶通道"], ["rooftop helipad", "屋顶停机坪"]], examples: [["The chillers are on the rooftop.", "冷水机组在屋顶。"], ["Rooftop access requires a PTW.", "上屋顶需要作业许可证。"]] },
    ],
    phrases: [
      { p: "cooling tower on the rooftop", ipa: "/ˈkuː.lɪŋ ˈtaʊ.ər ɑːn ðə ˈruːf.tɑːp/", cn: "屋顶的冷却塔", why: "冷却塔安装在屋顶是标准做法，因为屋顶通风好、散热快、噪音不影响室内。部分数据中心也使用地面冷却塔（空间足够时）。" },
    ],
    grammar: [
      { q: "冷却塔和冷水机组的关系是什么？", a: "冷水机组（Chiller）= 制冷设备（吸收室内热量，制造冷冻水）\n冷却塔（Cooling Tower）= 散热设备（将冷水机组的热量排到大气中）\n工作流程：\n① 冷水机组制冷 → 产出6°C冷冻水 → 送到末端空调\n② 冷冻水吸收热量 → 回到冷水机组（12°C）\n③ 冷水机组将热量转移到冷却水 → 冷却水升温到37°C\n④ 冷却水送到冷却塔 → 蒸发散热 → 降温到32°C\n⑤ 冷却水回到冷水机组 → 循环\n冷水机组是'心脏'，冷却塔是'散热器'。" },
    ],
    pattern: "Locate the + cooling tower + 位置",
    patternExamples: [
      { en: "Locate the cooling tower at the north side.", cn: "定位北侧的冷却塔。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }] },
      { en: "Locate the cooling tower make-up water valve.", cn: "定位冷却塔补水阀。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }] },
      { en: "Locate the cooling tower chemical dosing system.", cn: "定位冷却塔加药系统。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
    ],
    thinking: "冷却塔管理要点：\n① 风机运行状态：运转/停止/变频\n② 水温：进水37°C / 出水32°C（设计温差5°C）\n③ 水处理：防垢、防腐、防军团菌\n④ 水盘清洁：定期清理沉积物\n⑤ 补水量：蒸发损失约1-2%循环水量\n⑥ 军团菌防控：定期水质检测和消毒\n马来西亚气候炎热，冷却塔效率对整体制冷性能影响巨大。",
    pronunciation: "cooling 的 oo 读 /uː/：/ˈkuː.lɪŋ/。\nrooftop 两个 o 都读 /uː/ 和 /ɑː/：/ˈruːf.tɑːp/。\n节奏：lo-CATE ｜ the COOL-ing TOW-er ｜ on the ROOF-top.",
    quiz: [
      { q: "定位冷却塔补水阀，怎么说？", a: "Locate the cooling tower make-up water valve." },
      { q: "冷却塔和冷水机组的关系是什么？", a: "冷水机组（Chiller）= 制冷设备，吸收室内热量制造冷冻水；冷却塔（Cooling Tower）= 散热设备，将冷水机组的热量排到大气中。冷水机组是'心脏'，冷却塔是'散热器'，两者通过冷却水管道连接。" },
    ],
  },
  {
    id: 391,
    en: "Locate the fire alarm control panel.",
    cn: "定位消防报警控制面板。",
    ipa: "/loʊˈkeɪt ðə faɪər əˈlɑːrm kənˈtroʊl ˈpæn.əl/",
    tags: ["第391句", "DCIM定位", "★★★★"],
    when: "在DCIM中定位消防报警控制面板（FACP）。消防控制面板是整个消防系统的大脑，显示所有烟感、温感、手报的状态。",
    words: [
      { w: "fire alarm", ipa: "/faɪər əˈlɑːrm/", pos: "名词", cn: "消防报警", memory: "① fire = 火灾；② alarm = 报警/警报。\nfire alarm = 消防报警系统，包括：探测器（烟感/温感）、手动报警按钮、控制面板、声光警报器。", phonics: "fire 读 /faɪər/，alarm 读 /əˈlɑːrm/。", collocations: [["fire alarm panel", "消防报警面板"], ["fire alarm test", "消防报警测试"], ["fire alarm zone", "消防报警区域"]], examples: [["The fire alarm panel shows all clear.", "消防报警面板显示全部正常。"], ["Conduct a fire alarm test.", "进行消防报警测试。"]] },
      { w: "control panel", ipa: "/kənˈtroʊl ˈpæn.əl/", pos: "名词", cn: "控制面板", memory: "① control = 控制；② panel = 面板/盘。\ncontrol panel = 控制面板（集中显示和操作的控制设备）。\nfire alarm control panel (FACP) = 消防报警控制面板。", phonics: "control 读 /kənˈtroʊl/，panel 读 /ˈpæn.əl/。", collocations: [["control panel", "控制面板"], ["BMS control panel", "BMS控制面板"], ["electrical control panel", "电气控制面板"]], examples: [["Check the control panel for alarms.", "检查控制面板有无告警。"], ["Reset the control panel.", "复位控制面板。"]] },
    ],
    phrases: [
      { p: "fire alarm control panel (FACP)", ipa: "/faɪər əˈlɑːrm kənˈtroʊl ˈpæn.əl/", cn: "消防报警控制面板", why: "FACP是消防系统的中枢，显示所有探测器状态、报警区域、联动设备状态。值班人员需要熟悉FACP的位置和操作方法。" },
    ],
    grammar: [
      { q: "消防报警系统包含哪些组件？", a: "消防报警系统组件：\n① 烟感探测器（Smoke Detector）→ 检测烟雾\n② 温感探测器（Heat Detector）→ 检测温度异常\n③ 手动报警按钮（Manual Call Point/MCP）→ 人工触发\n④ 消防报警控制面板（FACP）→ 显示和处理\n⑤ 声光警报器（Sounder/Strobe）→ 提醒人员撤离\n⑥ 消防联动（Interlock）→ 触发灭火系统、关闭风阀、启动排烟\nFACP 负责接收所有信号并协调响应。" },
    ],
    pattern: "Locate the + fire alarm + 设施",
    patternExamples: [
      { en: "Locate the fire alarm zone map.", cn: "定位消防报警分区图。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Locate the manual call point.", cn: "定位手动报警按钮。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }] },
      { en: "Locate the fire alarm sounder.", cn: "定位消防声光警报器。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "FACP操作要点：\n① 正常运行：面板显示\"Normal/System Healthy\"\n② 报警时：显示报警区域、探测器编号、时间\n③ 确认操作：按\"Acknowledge\"确认报警\n④ 消音操作：按\"Silence\"消除声光警报\n⑤ 复位操作：排除故障后按\"Reset\"复位系统\n⑥ 故障显示：显示探测器故障、线路故障、电池故障\nDCIM中可远程查看FACP状态，但操作（确认/消音/复位）通常需要在现场面板上执行。",
    pronunciation: "alarm 的 a 读 /ə/，不是 /æ/：/əˈlɑːrm/。\npanel 的 a 读 /æ/：/ˈpæn.əl/。\n节奏：lo-CATE ｜ the FIRE a-LARM ｜ con-TROL PAN-el.",
    quiz: [
      { q: "定位手动报警按钮，怎么说？", a: "Locate the manual call point." },
      { q: "FACP报警时如何操作？", a: "① 按Acknowledge确认报警 ② 按Silence消除声光警报 ③ 派人到现场确认是否真实火警 ④ 真实火警则启动EOP ⑤ 误报则排除故障后按Reset复位系统。" },
    ],
  },
  {
    id: 392,
    en: "Locate the VESDA sampling pipe.",
    cn: "定位极早期烟雾探测采样管。",
    ipa: "/loʊˈkeɪt ðə ˈvɛz.də ˈsæm.plɪŋ paɪp/",
    tags: ["第392句", "DCIM定位", "★★★"],
    when: "在DCIM中定位VESDA采样管。VESDA是极早期烟雾探测系统，能在火灾发生前数小时检测到微量烟雾颗粒。",
    words: [
      { w: "VESDA", ipa: "/ˈvɛz.də/", pos: "名词", cn: "极早期烟雾探测系统", memory: "VESDA = Very Early Smoke Detection Apparatus（极早期烟雾探测装置）。\nVESDA通过采样管持续抽取空气样本，用激光分析烟雾颗粒浓度，能在火灾发生前数小时发出预警。\n比普通烟感灵敏1000倍以上。", phonics: "VESDA 读 /ˈvɛz.də/，像 \"vez-duh\"。", collocations: [["VESDA alarm", "VESDA告警"], ["VESDA sampling pipe", "VESDA采样管"], ["VESDA sensitivity", "VESDA灵敏度"]], examples: [["The VESDA shows a pre-alarm.", "VESDA显示预报警。"], ["Check the VESDA filter.", "检查VESDA过滤器。"]] },
      { w: "sampling pipe", ipa: "/ˈsæm.plɪŋ paɪp/", pos: "名词", cn: "采样管", memory: "① sampling = 采样/取样；② pipe = 管道/管子。\nsampling pipe = 采样管（VESDA系统用于抽取空气样本的管道网络）。\n采样管通常安装在天花板下方和架空地板下方。", phonics: "sampling 读 /ˈsæm.plɪŋ/，pipe 读 /paɪp/。", collocations: [["sampling pipe", "采样管"], ["sampling hole", "采样孔"], ["sampling point", "采样点"]], examples: [["Clean the sampling pipe annually.", "每年清洗采样管。"], ["Check for blocked sampling holes.", "检查采样孔是否堵塞。"]] },
    ],
    phrases: [
      { p: "VESDA sampling pipe", ipa: "/ˈvɛz.də ˈsæm.plɪŋ paɪp/", cn: "VESDA采样管", why: "VESDA采样管是探测系统的前端，管道上的小孔持续吸取空气样本。如果采样管堵塞或损坏，VESDA就无法正常探测。" },
    ],
    grammar: [
      { q: "VESDA 和普通烟感有什么区别？", a: "普通烟感（Smoke Detector）：\n① 被动等待烟雾到达探测器\n② 只在已有明显烟雾时报警\n③ 灵敏度较低\nVESDA（极早期烟雾探测）：\n① 主动抽取空气样本\n② 能在火灾前数小时检测到微量烟雾\n③ 灵敏度是普通烟感的1000倍\n④ 四级告警：Alert → Action → Fire 1 → Fire 2\nVESDA可以在电缆过热冒烟阶段就发出预警，而普通烟感要等到明火产生大量烟雾才报警。" },
    ],
    pattern: "Locate the + VESDA + 设施",
    patternExamples: [
      { en: "Locate the VESDA detector unit.", cn: "定位VESDA探测主机。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }] },
      { en: "Locate the VESDA display panel.", cn: "定位VESDA显示面板。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "panel", ipa: "/ˈpænl/", cn: "面板", phonics: "pan 读 /pæn/，el 读 /l/" }] },
      { en: "Locate the VESDA sampling point above the rack.", cn: "定位机柜上方的VESDA采样点。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "rack", ipa: "/ræk/", cn: "机柜", phonics: "rack 读 /ræk/" }] },
    ],
    thinking: "VESDA四级告警含义：\n① Alert（提示级）：极微量烟雾，可能是电缆过热、灰尘 → 派人检查\n② Action（行动级）：烟雾量增加 → 准备灭火设备\n③ Fire 1（火灾1级）：确认烟雾 → 启动消防联动\n④ Fire 2（火灾2级）：大量烟雾 → 触发气体灭火释放\nVESDA维护要点：定期清洗采样管、更换过滤器、校准灵敏度。",
    pronunciation: "VESDA 读 /ˈvɛz.də/，像 \"vez-duh\"。\nsampling 的 am 读 /æm/：/ˈsæm.plɪŋ/。\n节奏：lo-CATE ｜ the VES-da ｜ SAM-pling PIPE.",
    quiz: [
      { q: "定位VESDA探测主机，怎么说？", a: "Locate the VESDA detector unit." },
      { q: "VESDA 和普通烟感的核心区别是什么？", a: "VESDA主动抽取空气样本，灵敏度是普通烟感的1000倍，能在火灾前数小时检测到微量烟雾（电缆过热阶段）。普通烟感被动等待烟雾到达，只在已有明显烟雾时报警。" },
    ],
  },
  {
    id: 393,
    en: "Locate the building management system server.",
    cn: "定位楼宇管理系统服务器。",
    ipa: "/loʊˈkeɪt ðə ˈbɪl.dɪŋ ˈmæn.ɪdʒ.mənt ˈsɪs.təm ˈsɜːr.vər/",
    tags: ["第393句", "DCIM定位", "★★★★"],
    when: "在DCIM中定位BMS服务器。BMS服务器是整个楼宇自动化系统的核心，收集所有传感器数据并控制所有设备。",
    words: [
      { w: "building management system", ipa: "/ˈbɪl.dɪŋ ˈmæn.ɪdʒ.mənt ˈsɪs.təm/", pos: "名词", cn: "楼宇管理系统（BMS）", memory: "BMS = Building Management System = 楼宇管理系统。\nBMS是数据中心的'神经系统'，集成监控：暖通、电气、消防、安防、环境等所有子系统。\n也称 BAS（Building Automation System）= 楼宇自动化系统。", phonics: "building 读 /ˈbɪl.dɪŋ/，management 读 /ˈmæn.ɪdʒ.mənt/。", collocations: [["BMS server", "BMS服务器"], ["BMS workstation", "BMS工作站"], ["BMS network", "BMS网络"]], examples: [["The BMS server is in the control room.", "BMS服务器在控制室。"], ["Log in to the BMS workstation.", "登录BMS工作站。"]] },
    ],
    phrases: [
      { p: "building management system server", ipa: "/ˈbɪl.dɪŋ ˈmæn.ɪdʒ.mənt ˈsɪs.təm ˈsɜːr.vər/", cn: "楼宇管理系统服务器", why: "BMS服务器是楼宇自动化的大脑，存储所有设备的历史数据、告警记录、控制策略。通常部署在控制室或网络间，有冗余备份。" },
    ],
    grammar: [
      { q: "BMS 和 DCIM 有什么区别？", a: "BMS（Building Management System）= 楼宇管理系统：\n① 监控建筑设备（暖通、电气、消防、安防）\n② 控制设备启停、调节阀门\n③ 面向设施工程师\nDCIM（Data Center Infrastructure Management）= 数据中心基础设施管理：\n① 在BMS基础上增加IT资产管理\n② 机柜利用率、PUE计算、容量规划\n③ 面向数据中心运营团队\nBMS 是 DCIM 的数据来源之一，DCIM 是 BMS 的上层应用。" },
    ],
    pattern: "Locate the + BMS + 设施",
    patternExamples: [
      { en: "Locate the BMS workstation in the control room.", cn: "定位控制室的BMS工作站。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "bms", ipa: "/ˌbiːˈɛmˈɛs/", cn: "楼控", phonics: "B-M-S 逐字母读" }, { w: "control", ipa: "/kənˈtroʊl/", cn: "控制", phonics: "con 读 /kən/，trol 读 /troʊl/" }] },
      { en: "Locate the BMS network switch.", cn: "定位BMS网络交换机。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "bms", ipa: "/ˌbiːˈɛmˈɛs/", cn: "楼控", phonics: "B-M-S 逐字母读" }, { w: "network", ipa: "/ˈnɛtwɜːrk/", cn: "网络", phonics: "net 读 /nɛt/，work 读 /wɜːrk/" }] },
      { en: "Locate the BMS backup server.", cn: "定位BMS备份服务器。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "bms", ipa: "/ˌbiːˈɛmˈɛs/", cn: "楼控", phonics: "B-M-S 逐字母读" }, { w: "backup", ipa: "/ˈbækʌp/", cn: "备份", phonics: "back 读 /bæk/，up 读 /ʌp/" }] },
    ],
    thinking: "BMS系统架构：\n① 传感器层：温度、湿度、压力、电流、电压等传感器\n② 控制器层：DDC（直接数字控制器），执行控制逻辑\n③ 网络层：BACnet/Modbus/LonWorks 协议通信\n④ 服务器层：数据采集、存储、分析\n⑤ 操作层：工作站/Web界面/移动端\nBMS服务器故障 = 所有监控数据丢失，因此必须有冗余（主备服务器）。",
    pronunciation: "management 的 age 读 /ɪdʒ/：/ˈmæn.ɪdʒ.mənt/。\nserver 的 er 读 /ər/：/ˈsɜːr.vər/。\n节奏：lo-CATE ｜ the BUILD-ing MAN-age-ment SYS-tem SER-ver.",
    quiz: [
      { q: "定位控制室的BMS工作站，怎么说？", a: "Locate the BMS workstation in the control room." },
      { q: "BMS 和 DCIM 有什么区别？", a: "BMS = 楼宇管理系统，监控建筑设备（暖通/电气/消防/安防），面向设施工程师；DCIM = 数据中心基础设施管理，在BMS基础上增加IT资产管理（机柜利用率/PUE/容量规划），面向数据中心运营团队。BMS 是 DCIM 的数据来源之一。" },
    ],
  },
  {
    id: 394,
    en: "Locate the static transfer switch.",
    cn: "定位静态转换开关（STS）。",
    ipa: "/loʊˈkeɪt ðə ˈstæt.ɪk ˈtræns.fər swɪtʃ/",
    tags: ["第394句", "DCIM定位", "★★★★"],
    when: "在DCIM中定位静态转换开关（STS）。STS可以在毫秒级内将负载从一个电源切换到另一个电源，确保供电不中断。",
    words: [
      { w: "static", ipa: "/ˈstæt.ɪk/", pos: "形容词", cn: "静态的", memory: "① static = 静态的/静止的（没有机械运动部件）。\n② static transfer switch = 静态转换开关（用半导体器件而非机械触点切换，速度极快）。\n对比：ATS = 自动转换开关（机械式，切换时间100-200ms）；STS = 静态转换开关（电子式，切换时间<4ms）。", phonics: "static 读 /ˈstæt.ɪk/，stat 读 /stæt/。", collocations: [["static switch", "静态开关"], ["static transfer", "静态转换"], ["static VAR compensator", "静态无功补偿器"]], examples: [["The STS transferred in 2ms.", "STS在2毫秒内完成切换。"], ["Check the STS preferred source.", "检查STS优先电源。"]] },
      { w: "transfer switch", ipa: "/ˈtræns.fər swɪtʃ/", pos: "名词", cn: "转换开关", memory: "① transfer = 转换/转移；② switch = 开关。\ntransfer switch = 转换开关（在两路电源之间切换的设备）。\nATS = Automatic Transfer Switch（自动转换开关，机械式）\nSTS = Static Transfer Switch（静态转换开关，电子式）\nMTS = Manual Transfer Switch（手动转换开关）。", phonics: "transfer 读 /ˈtræns.fər/，switch 读 /swɪtʃ/。", collocations: [["transfer switch", "转换开关"], ["automatic transfer", "自动转换"], ["manual transfer", "手动转换"]], examples: [["The transfer switch is in auto mode.", "转换开关处于自动模式。"], ["Test the transfer switch quarterly.", "每季度测试转换开关。"]] },
    ],
    phrases: [
      { p: "static transfer switch (STS)", ipa: "/ˈstæt.ɪk ˈtræns.fər swɪtʃ/", cn: "静态转换开关（STS）", why: "STS使用可控硅（SCR/晶闸管）实现电源切换，切换时间<4ms，IT设备不会感知到中断。比ATS（100-200ms）快50倍以上。" },
    ],
    grammar: [
      { q: "STS 和 ATS 有什么区别？", a: "ATS（Automatic Transfer Switch）：\n① 机械式切换（触点动作）\n② 切换时间：100-200ms\n③ IT设备可能感知到瞬间断电\n④ 成本较低\nSTS（Static Transfer Switch）：\n① 电子式切换（可控硅SCR）\n② 切换时间：<4ms\n③ IT设备完全无感知\n④ 成本较高\n关键负载（服务器/网络设备）用STS，非关键负载（照明/空调）用ATS。" },
    ],
    pattern: "Locate the + static/automatic/manual transfer switch",
    patternExamples: [
      { en: "Locate the automatic transfer switch for the chiller.", cn: "定位冷水机组的自动转换开关。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }] },
      { en: "Locate the manual transfer switch.", cn: "定位手动转换开关。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "Locate the STS in the PDU room.", cn: "定位配电间的STS。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "pdu", ipa: "/ˌpiːˈdiːˈjuː/", cn: "配电单元", phonics: "P-D-U 逐字母读" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
    ],
    thinking: "转换开关在数据中心供电链路中的位置：\n市电A路 ─┐\n          ├─→ ATS/STS ─→ 负载\n市电B路 ─┘\n或：\nUPS A路 ─┐\n          ├─→ STS ─→ 机柜PDU ─→ 服务器\nUPS B路 ─┘\n单电源设备必须通过STS接入双路UPS，才能实现真正的冗余供电。",
    pronunciation: "static 的 a 读 /æ/：/ˈstæt.ɪk/。\ntransfer 重音在第一音节：/ˈtræns.fər/。\n节奏：lo-CATE ｜ the STAT-ic ｜ TRANS-fer SWITCH.",
    quiz: [
      { q: "定位冷水机组的自动转换开关，怎么说？", a: "Locate the automatic transfer switch for the chiller." },
      { q: "STS 和 ATS 的核心区别是什么？", a: "ATS = 机械式切换，切换时间100-200ms，IT设备可能感知瞬间断电，成本较低；STS = 电子式切换（可控硅），切换时间<4ms，IT设备完全无感知，成本较高。关键负载用STS，非关键负载用ATS。" },
    ],
  },
  {
    id: 395,
    en: "Locate the overhead busway above Row 3.",
    cn: "定位第3列机柜上方的母线槽。",
    ipa: "/loʊˈkeɪt ðə ˈoʊ.vər.hɛd ˈbʌs.weɪ əˈbʌv roʊ θriː/",
    tags: ["第395句", "DCIM定位", "★★★★"],
    when: "在DCIM中定位母线槽（Busway）。母线槽是替代传统电缆的大电流配电方式，安装在机柜列上方，通过插接箱为每个机柜供电。",
    words: [
      { w: "overhead", ipa: "/ˈoʊ.vər.hɛd/", pos: "形容词", cn: "头顶的；架空的", memory: "① over = 上方；② head = 头部。\noverhead = 头顶上方的。overhead busway = 架空母线槽（安装在机柜列上方的天花板上）。", phonics: "over 读 /ˈoʊ.vər/，head 读 /hɛd/。", collocations: [["overhead busway", "架空母线"], ["overhead cable tray", "架空线槽"], ["overhead crane", "天车/行车"]], examples: [["The busway is mounted overhead.", "母线槽安装在上方。"], ["Check the overhead cable tray.", "检查架空线槽。"]] },
      { w: "busway", ipa: "/ˈbʌs.weɪ/", pos: "名词", cn: "母线槽", memory: "① bus = 母线/汇流排（busbar的简称）；② way = 通道/路径。\nbusway = 母线槽（封闭的母线通道，用于大电流配电）。\n母线槽优势：① 比电缆更整洁 ② 可灵活增加插接箱 ③ 散热好 ④ 维护方便。", phonics: "bus 读 /bʌs/，way 读 /weɪ/。", collocations: [["busway system", "母线槽系统"], ["busway plug-in unit", "母线插接箱"], ["busway tap-off box", "母线分接箱"]], examples: [["Install a new plug-in unit on the busway.", "在母线槽上安装新的插接箱。"], ["The busway carries 800 amps.", "母线槽承载800安培。"]] },
    ],
    phrases: [
      { p: "overhead busway above Row 3", ipa: "/ˈoʊ.vər.hɛd ˈbʌs.weɪ əˈbʌv roʊ θriː/", cn: "第3列上方的架空母线槽", why: "母线槽安装在机柜列上方，每列机柜对应一条母线槽。通过插接箱（plug-in unit）从母线槽取电，再送到机柜内的PDU。" },
    ],
    grammar: [
      { q: "母线槽和电缆配电各有什么优缺点？", a: "母线槽（Busway）：\n✅ 整洁美观，节省空间\n✅ 灵活扩展（随时增加插接箱）\n✅ 散热好，载流量大\n✅ 维护方便\n❌ 初期投资高\n电缆配电（Cable）：\n✅ 初期投资低\n✅ 灵活走线\n❌ 杂乱（大量电缆堆积）\n❌ 扩展困难（需重新拉电缆）\n❌ 散热差\n现代数据中心倾向于使用母线槽。" },
    ],
    pattern: "Locate the + busway + 位置",
    patternExamples: [
      { en: "Locate the busway plug-in unit for Rack 021.", cn: "定位021号机柜的母线插接箱。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "busway", ipa: "/ˈbʌsweɪ/", cn: "母线槽", phonics: "bus 读 /bʌs/，way 读 /weɪ/" }, { w: "rack", ipa: "/ræk/", cn: "机柜", phonics: "rack 读 /ræk/" }] },
      { en: "Locate the busway A feeding Row 1.", cn: "定位给第1列供电的A路母线。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "busway", ipa: "/ˈbʌsweɪ/", cn: "母线槽", phonics: "bus 读 /bʌs/，way 读 /weɪ/" }] },
      { en: "Locate the busway tap-off box.", cn: "定位母线分接箱。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "busway", ipa: "/ˈbʌsweɪ/", cn: "母线槽", phonics: "bus 读 /bʌs/，way 读 /weɪ/" }] },
    ],
    thinking: "母线槽系统配置：\n① A路母线 + B路母线（双路冗余）\n② 每条母线通过插接箱为5-10个机柜供电\n③ 插接箱内置断路器保护\n④ 部分智能插接箱可远程监测每个机柜的用电量\nDCIM中可按机柜编号找到对应的母线编号和插接箱编号。",
    pronunciation: "overhead 的 o 读 /oʊ/：/ˈoʊ.vər.hɛd/。\nbusway 的 u 读 /ʌ/：/ˈbʌs.weɪ/。\n节奏：lo-CATE ｜ the O-ver-head BUS-way ｜ a-BOVE ROW 3.",
    quiz: [
      { q: "定位给第1列供电的A路母线，怎么说？", a: "Locate the busway A feeding Row 1." },
      { q: "母线槽相比电缆配电的最大优势是什么？", a: "母线槽最大优势是灵活扩展——可以随时在母线上增加插接箱为新机柜供电，无需重新拉电缆。此外还有整洁美观、散热好、维护方便等优点。" },
    ],
  },
  {
    id: 396,
    en: "Locate the raised floor tile with airflow damper.",
    cn: "定位带风阀的架空地板。",
    ipa: "/loʊˈkeɪt ðə reɪzd flɔːr taɪl wɪð ˈeər.floʊ ˈdæm.pər/",
    tags: ["第396句", "DCIM定位", "★★★"],
    when: "在DCIM中定位带风阀的穿孔地板。风阀可调节送风量，精确控制每个机柜的冷风供应。",
    words: [
      { w: "raised floor", ipa: "/reɪzd flɔːr/", pos: "名词", cn: "架空地板", memory: "① raised = 被抬高的；② floor = 地板。\nraised floor = 架空地板（也称access floor/活动地板），地板下有600-900mm空间用作冷风静压箱和走线空间。", phonics: "raised 读 /reɪzd/，floor 读 /flɔːr/。", collocations: [["raised floor tile", "架空地板砖"], ["raised floor height", "架空地板高度"], ["raised floor void", "架空地板下空间"]], examples: [["The raised floor is 600mm high.", "架空地板高600mm。"], ["Replace the damaged floor tile.", "更换损坏的地板砖。"]] },
      { w: "damper", ipa: "/ˈdæm.pər/", pos: "名词", cn: "风阀；阻尼器", memory: "① damp = 潮湿的/抑制；② damper = 风阀/阻尼器（控制气流或振动的装置）。\nairflow damper = 风量调节阀（安装在穿孔地板上，可手动或自动调节送风量）。", phonics: "damper 读 /ˈdæm.pər/，amp 读 /æm/。", collocations: [["airflow damper", "风量阀"], ["fire damper", "防火阀"], ["damper actuator", "风阀执行器"]], examples: [["Open the damper to increase airflow.", "打开风阀增加风量。"], ["The fire damper closed automatically.", "防火阀自动关闭了。"]] },
    ],
    phrases: [
      { p: "raised floor tile with airflow damper", ipa: "/reɪzd flɔːr taɪl wɪð ˈeər.floʊ ˈdæm.pər/", cn: "带风阀的架空地板", why: "带风阀的穿孔地板可以精确调节每个位置的送风量。通过调节风阀开度，将更多冷风送到高功耗机柜，减少低负载区域的送风浪费。" },
    ],
    grammar: [
      { q: "穿孔地板有哪些类型？", a: "① 标准穿孔地板（Perforated Tile）：固定穿孔率（25%/40%/56%）\n② 带风阀地板（Tile with Damper）：可手动调节风阀开度\n③ 主动送风地板（Active Floor Tile）：内置风机，主动向上送风\n④ 盲板（Blanking Panel/Blank Tile）：不穿孔，封闭不需要送风的位置\n选择原则：高功耗机柜前用高穿孔率或带风阀地板，空闲位置用盲板封闭。" },
    ],
    pattern: "Locate the + raised floor + 设施",
    patternExamples: [
      { en: "Locate the raised floor cable cutout.", cn: "定位架空地板的电缆开孔。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "floor", ipa: "/flɔːr/", cn: "楼层", phonics: "floor 读 /flɔːr/" }] },
      { en: "Locate the blanking panel in Row 5.", cn: "定位第5列的盲板。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "panel", ipa: "/ˈpænl/", cn: "面板", phonics: "pan 读 /pæn/，el 读 /l/" }] },
      { en: "Locate the active floor tile near Rack 010.", cn: "定位010号机柜旁的主动送风地板。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "active", ipa: "/ˈæktɪv/", cn: "活动", phonics: "act 读 /ækt/，ive 读 /ɪv/" }, { w: "floor", ipa: "/flɔːr/", cn: "楼层", phonics: "floor 读 /flɔːr/" }] },
    ],
    thinking: "架空地板气流管理最佳实践：\n① 未使用的穿孔位置用盲板封闭（防止冷风泄漏）\n② 电缆开孔用密封刷/气密封堵（防止冷风从开孔泄漏）\n③ 高功耗机柜前用高穿孔率（56%）或带风阀地板\n④ 定期检查地板密封性（用风速仪测量实际送风量）\n⑤ 架空地板下的线缆整理（杂乱线缆阻碍气流）\n气流管理直接影响制冷效率和PUE。",
    pronunciation: "raised 的 ai 读 /eɪ/：/reɪzd/。\ndamper 的 am 读 /æm/：/ˈdæm.pər/。\n节奏：lo-CATE ｜ the RAISED FLOOR TILE ｜ with AIR-flow DAM-per.",
    quiz: [
      { q: "定位架空地板的电缆开孔，怎么说？", a: "Locate the raised floor cable cutout." },
      { q: "为什么需要用盲板封闭未使用的穿孔位置？", a: "未使用的穿孔位置如果不封闭，冷风会从这些位置泄漏到热通道或不需要的区域，造成冷量浪费、冷通道送风不足、制冷效率下降。用盲板封闭可以确保冷风只送到需要的位置。" },
    ],
  },
  {
    id: 397,
    en: "Locate the environmental monitoring sensor near Rack B5-02.",
    cn: "定位B5-02号机柜附近的环境监测传感器。",
    ipa: "/loʊˈkeɪt ðə ɪnˌvaɪ.rənˈmɛn.təl ˈmɑː.nɪ.tər.ɪŋ ˈsɛn.sər nɪr ræk biː faɪv zɪroʊ tuː/",
    tags: ["第397句", "DCIM定位", "★★★★"],
    when: "在DCIM中定位环境监测传感器。环境监测传感器分布在关键机柜附近，实时监测温度、湿度、气流等环境参数。",
    words: [
      { w: "environmental", ipa: "/ɪnˌvaɪ.rənˈmɛn.təl/", pos: "形容词", cn: "环境的", memory: "① environment = 环境；② environmental = 环境的。\nenvironmental monitoring = 环境监测（监测数据中心内的温度、湿度、气流、粉尘、振动等环境参数）。", phonics: "en 读 /ɪn/，vi 读 /vaɪ/，ron 读 /rən/，men 读 /mɛn/，tal 读 /təl/。多音节词，重音在第三音节。", collocations: [["environmental monitoring", "环境监测"], ["environmental sensor", "环境传感器"], ["environmental alarm", "环境告警"]], examples: [["Check the environmental readings.", "检查环境读数。"], ["Environmental alarms are all clear.", "环境告警全部正常。"]] },
      { w: "monitoring", ipa: "/ˈmɑː.nɪ.tər.ɪŋ/", pos: "名词", cn: "监测；监控", memory: "① monitor = 监测/监控；② monitoring = 监测/监控（持续性动作）。\nenvironmental monitoring = 环境监测（24小时持续监测环境参数）。", phonics: "mon 读 /mɑː/，i 读 /nɪ/，tor 读 /tər/，ing 读 /ɪŋ/。", collocations: [["continuous monitoring", "持续监测"], ["remote monitoring", "远程监测"], ["monitoring system", "监测系统"]], examples: [["The monitoring system is online.", "监测系统在线。"], ["Set up monitoring for this sensor.", "为此传感器设置监测。"]] },
    ],
    phrases: [
      { p: "environmental monitoring sensor", ipa: "/ɪnˌvaɪ.rənˈmɛn.təl ˈmɑː.nɪ.tər.ɪŋ ˈsɛn.sər/", cn: "环境监测传感器", why: "环境监测传感器实时采集机柜周围的温湿度数据，DCIM通过这些数据生成热力图（thermal map），帮助发现热点和冷量浪费。" },
    ],
    grammar: [
      { q: "环境监测通常监测哪些参数？", a: "数据中心环境监测参数：\n① 温度（Temperature）：冷通道/热通道/机柜进风口/出风口\n② 湿度（Humidity）：相对湿度40-60%\n③ 压差（Differential Pressure）：冷通道与热通道之间的压差\n④ 气流（Airflow）：穿孔地板送风量/机柜进风量\n⑤ 粉尘（Particulate）：空气洁净度\n⑥ 漏水（Water Leak）：地板下/管道接头\n⑦ 振动（Vibration）：设备振动/建筑振动\n温度是最核心的监测参数。" },
    ],
    pattern: "Locate the + environmental monitoring + 设施 + 位置",
    patternExamples: [
      { en: "Locate the environmental monitoring dashboard.", cn: "定位环境监测仪表板。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "monitoring", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "dashboard", ipa: "/ˈdæʃbɔːrd/", cn: "仪表盘", phonics: "dash 读 /dæʃ/，board 读 /bɔːrd/" }] },
      { en: "Locate the temperature monitoring point in the hot aisle.", cn: "定位热通道的温度监测点。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "monitoring", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }] },
      { en: "Locate the humidity monitoring sensor on Level 1.", cn: "定位一楼的湿度监测传感器。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "humidity", ipa: "/hjuːˈmɪdɪti/", cn: "湿度", phonics: "hu 读 /hjuː/，midity 读 /mɪdɪti/" }, { w: "monitoring", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }] },
    ],
    thinking: "环境监测传感器部署策略：\n① 每排机柜至少2个温度传感器（冷通道入口和出口）\n② 高密度机柜额外加装进风口和出风口温度传感器\n③ 每个数据大厅至少4个湿度传感器\n④ 关键管道和阀门附近安装漏水传感器\n⑤ 地板下安装烟雾探测器和温度传感器\nDCIM热力图（Thermal Map）将所有传感器数据可视化，一目了然。",
    pronunciation: "environmental 是多音节词，重音在第三音节：/ɪnˌvaɪ.rənˈmɛn.təl/。\nmonitoring 的 o 读 /ɑː/：/ˈmɑː.nɪ.tər.ɪŋ/。\n节奏：lo-CATE ｜ the en-VI-ron-MEN-tal ｜ MON-i-tor-ing SEN-sor ｜ near RACK B5-02.",
    quiz: [
      { q: "定位环境监测仪表板，怎么说？", a: "Locate the environmental monitoring dashboard." },
      { q: "数据中心环境监测的核心参数有哪些？", a: "① 温度（冷通道/热通道/机柜进出风口）② 湿度（40-60%RH）③ 压差（冷热通道间）④ 气流（送风量）⑤ 粉尘（空气洁净度）⑥ 漏水（地板下/管道）⑦ 振动。温度是最核心的监测参数。" },
    ],
  },
  {
    id: 398,
    en: "Locate the KVM switch for the server rack.",
    cn: "定位服务器机柜的KVM切换器。",
    ipa: "/loʊˈkeɪt ðə ˌkeɪ.viːˈɛm swɪtʃ fɔːr ðə ˈsɜːr.vər ræk/",
    tags: ["第398句", "DCIM定位", "★★★"],
    when: "在DCIM中定位KVM切换器。KVM允许一套键盘、显示器、鼠标控制多台服务器，方便现场维护。",
    words: [
      { w: "KVM", ipa: "/ˌkeɪ.viːˈɛm/", pos: "缩写", cn: "键盘-显示器-鼠标切换器", memory: "KVM = Keyboard（键盘）+ Video（显示器）+ Mouse（鼠标）。\nKVM switch = KVM切换器（一套键鼠显示器控制多台服务器的设备）。\n运维人员在现场通过KVM直接操作服务器，不需要为每台服务器配单独的显示器和键鼠。", phonics: "逐字母读：K-V-M。", collocations: [["KVM switch", "KVM切换器"], ["KVM console", "KVM控制台"], ["KVM over IP", "远程KVM"]], examples: [["Connect to the server via KVM.", "通过KVM连接服务器。"], ["The KVM is not detecting the keyboard.", "KVM检测不到键盘。"]] },
    ],
    phrases: [
      { p: "KVM switch", ipa: "/ˌkeɪ.viːˈɛm swɪtʃ/", cn: "KVM切换器", why: "KVM切换器让运维人员用一套键鼠显示器控制整个机柜的服务器。按按钮或热键即可在不同服务器之间切换，大幅提高现场维护效率。" },
    ],
    grammar: [
      { q: "KVM 和远程管理（IPMI/iDRAC/iLO）有什么区别？", a: "KVM（本地）：\n① 物理连接（VGA/HDMI + USB）\n② 零延迟操作\n③ 服务器宕机也能进BIOS\n④ 需要在现场\nIPMI/iDRAC/iLO（远程）：\n① 网络远程连接\n② 有少许延迟\n③ 可远程开关机、重装系统\n④ 可在任何有网络的地方操作\n两者互补：日常用远程管理，远程管理故障时用KVM。" },
    ],
    pattern: "Locate the + KVM + 设施",
    patternExamples: [
      { en: "Locate the KVM console in the cage.", cn: "定位围笼内的KVM控制台。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }] },
      { en: "Locate the KVM over IP device.", cn: "定位远程KVM设备。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "device", ipa: "/dɪˈvaɪs/", cn: "设备", phonics: "de 读 /dɪ/，vice 读 /vaɪs/" }] },
      { en: "Locate the crash cart with KVM.", cn: "定位带KVM的移动维修车。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }] },
    ],
    thinking: "KVM管理要点：\n① 每个机柜/围笼（cage）通常配一个KVM切换器\n② KVM切换器端口数：8口/16口/32口\n③ 连接方式：VGA/HDMI（视频）+ USB（键鼠）\n④ 切换方式：按钮/热键/OSD菜单\n⑤ 移动维修车（Crash Cart）：带轮子的推车，上面有KVM + 显示器 + 键鼠，可在机柜间移动使用",
    pronunciation: "KVM 逐字母读：K-V-M。\nswitch 读 /swɪtʃ/。\n节奏：lo-CATE ｜ the K-V-M SWITCH ｜ for the SER-ver RACK.",
    quiz: [
      { q: "定位围笼内的KVM控制台，怎么说？", a: "Locate the KVM console in the cage." },
      { q: "KVM 和远程管理（iDRAC/iLO）各适合什么场景？", a: "KVM = 本地操作，零延迟，服务器宕机也能进BIOS，适合故障排查；远程管理（iDRAC/iLO）= 网络远程连接，可远程开关机/重装系统，适合日常管理。两者互补。" },
    ],
  },
  {
    id: 399,
    en: "Locate the network patch panel in the meet-me room.",
    cn: "定位汇聚间的网络配线架。",
    ipa: "/loʊˈkeɪt ðə ˈnɛt.wɜːrk pætʃ ˈpæn.əl ɪn ðə miːt miː ruːm/",
    tags: ["第399句", "DCIM定位", "★★★★"],
    when: "在DCIM中定位网络配线架。配线架是网络连接的核心节点，所有网络线缆在此汇聚和分配。",
    words: [
      { w: "patch panel", ipa: "/pætʃ ˈpæn.əl/", pos: "名词", cn: "配线架", memory: "① patch = 跳接/连接；② panel = 面板。\npatch panel = 配线架（网络线缆的汇聚和分配面板）。\n配线架上的每个端口对应一条线缆，通过跳线（patch cord）连接不同设备。", phonics: "patch 读 /pætʃ/，panel 读 /ˈpæn.əl/。", collocations: [["patch panel", "配线架"], ["patch cord", "跳线"], ["fiber patch panel", "光纤配线架"]], examples: [["Label all ports on the patch panel.", "标注配线架上的所有端口。"], ["Connect the patch cord to port 24.", "将跳线连接到24号端口。"]] },
      { w: "meet-me room", ipa: "/miːt miː ruːm/", pos: "名词", cn: "汇聚间/对接间", memory: "① meet = 会面；② me = 我。\nmeet-me room (MMR) = 汇聚间/对接间（网络运营商和客户设备互联的专用房间）。\nMMR是数据中心网络的核心节点，多家运营商的光缆在此汇聚，客户的网络也在此接入。", phonics: "meet 读 /miːt/，me 读 /miː/，room 读 /ruːm/。", collocations: [["meet-me room", "汇聚间"], ["cross-connect", "交叉连接"], ["carrier hotel", "运营商酒店"]], examples: [["The new circuit is terminated in the MMR.", "新线路在汇聚间终接。"], ["Run a cross-connect from the MMR to the cage.", "从汇聚间拉一条交叉连接到围笼。"]] },
    ],
    phrases: [
      { p: "network patch panel in the meet-me room", ipa: "/ˈnɛt.wɜːrk pætʃ ˈpæn.əl ɪn ðə miːt miː ruːm/", cn: "汇聚间的网络配线架", why: "汇聚间（MMR）是数据中心网络连接的核心，所有运营商的光缆和客户网络在此汇聚。配线架上的端口标签管理至关重要。" },
    ],
    grammar: [
      { q: "meet-me room 和普通网络间有什么区别？", a: "普通网络间（Network Room）：\n① 放置客户自己的网络设备\n② 只连接内部网络\n③ 客户自行管理\n汇聚间（Meet-Me Room/MMR）：\n① 多家运营商设备共存\n② 外部网络（运营商）与内部网络（客户）的对接点\n③ 数据中心运营方管理\n④ 安全等级最高（双人授权进入）\nMMR 是数据中心的'网络枢纽'。" },
    ],
    pattern: "Locate the + network/fiber + patch panel + 位置",
    patternExamples: [
      { en: "Locate the fiber patch panel on Level 2.", cn: "定位二楼的光纤配线架。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "panel", ipa: "/ˈpænl/", cn: "面板", phonics: "pan 读 /pæn/，el 读 /l/" }, { w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }] },
      { en: "Locate the copper patch panel in the network room.", cn: "定位网络间的铜缆配线架。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "panel", ipa: "/ˈpænl/", cn: "面板", phonics: "pan 读 /pæn/，el 读 /l/" }, { w: "network", ipa: "/ˈnɛtwɜːrk/", cn: "网络", phonics: "net 读 /nɛt/，work 读 /wɜːrk/" }] },
      { en: "Locate the patch panel for carrier A.", cn: "定位A运营商的配线架。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "panel", ipa: "/ˈpænl/", cn: "面板", phonics: "pan 读 /pæn/，el 读 /l/" }] },
    ],
    thinking: "网络配线架管理要点：\n① 端口标签：每个端口必须有清晰标签（线缆编号+对端位置）\n② 跳线颜色：不同用途用不同颜色（运营商=黄色，客户=蓝色，管理=红色）\n③ 线缆整理：使用理线架（cable manager）保持整洁\n④ 文档管理：每次跳线变更必须更新配线记录\n⑤ 光纤清洁：光纤接头必须清洁后才能插入\nDCIM中可管理配线架端口状态（空闲/占用/预留）和跳线记录。",
    pronunciation: "patch 的 a 读 /æ/：/pætʃ/。\nmeet-me room 两个 meet/me 都读 /miːt/ /miː/。\n节奏：lo-CATE ｜ the NET-work PATCH PAN-el ｜ in the MEET-ME ROOM.",
    quiz: [
      { q: "定位二楼的光纤配线架，怎么说？", a: "Locate the fiber patch panel on Level 2." },
      { q: "meet-me room（MMR）的核心功能是什么？", a: "MMR是数据中心网络的核心节点，多家运营商的光缆在此汇聚，客户的网络也在此接入。它是外部网络与内部网络的对接点，安全等级最高（双人授权进入）。" },
    ],
  },
  {
    id: 400,
    en: "Now let's move on to the MOP execution procedures.",
    cn: "现在我们进入MOP执行操作流程。",
    ipa: "/naʊ lɛts muːv ɑːn tuː ðə mɑːp ˌɛk.sɪˈkjuː.ʃən prəˈsiː.dʒərz/",
    tags: ["第400句", "转场句", "★★★★★"],
    when: "DCIM定位部分结束，转入下一部分：MOP（维护操作方案）执行操作流程。这是一个重要的转场句。",
    words: [
      { w: "move on", ipa: "/muːv ɑːn/", pos: "动词短语", cn: "继续前进；转到下一个", memory: "① move = 移动；② on = 继续。\nmove on = 继续前进/转到下一个话题。\n交接中常用的转场表达：Now let's move on to... = 现在我们转到…", phonics: "move 读 /muːv/，on 读 /ɑːn/。", collocations: [["move on to", "转到"], ["move forward", "向前推进"], ["move ahead", "提前进行"]], examples: [["Let's move on to the next topic.", "让我们转到下一个话题。"], ["We can move on once this is resolved.", "这个问题解决后我们可以继续。"]] },
      { w: "MOP", ipa: "/mɑːp/", pos: "缩写", cn: "维护操作方案", memory: "MOP = Method of Procedure = 维护操作方案。\nMOP是详细的标准操作文档，描述每一步操作的具体内容、风险提示、验证方法。\n执行MOP时必须逐步确认，不得跳过任何步骤。", phonics: "MOP 通常读作一个词：/mɑːp/（像 'mop' 拖把）。", collocations: [["MOP execution", "MOP执行"], ["MOP approval", "MOP审批"], ["MOP step", "MOP步骤"]], examples: [["Read the MOP before starting.", "开始前先阅读MOP。"], ["The MOP has 15 steps.", "MOP有15个步骤。"]] },
      { w: "execution", ipa: "/ˌɛk.sɪˈkjuː.ʃən/", pos: "名词", cn: "执行", memory: "① execute = 执行；② execution = 执行/实施。\nMOP execution = MOP执行（按照操作方案逐步执行每一步）。", phonics: "ex 读 /ɛk/，e 读 /sɪ/，cu 读 /kjuː/，tion 读 /ʃən/。重音在第三音节。", collocations: [["MOP execution", "MOP执行"], ["execution plan", "执行计划"], ["execution time", "执行时间"]], examples: [["Start the MOP execution.", "开始执行MOP。"], ["Record the execution time for each step.", "记录每一步的执行时间。"]] },
    ],
    phrases: [
      { p: "move on to the MOP execution procedures", ipa: "/muːv ɑːn tuː ðə mɑːp ˌɛk.sɪˈkjuː.ʃən prəˈsiː.dʒərz/", cn: "进入MOP执行操作流程", why: "move on to + 下一个话题 = 转到…，是交接中标准的转场表达。MOP执行是数据中心日常维护的核心流程。" },
    ],
    grammar: [
      { q: "交接中常用的转场表达有哪些？", a: "① Now let's move on to... = 现在我们转到…\n② Next, let's review... = 接下来，让我们检查…\n③ Now we'll proceed to... = 现在我们将进入…\n④ Let's turn our attention to... = 让我们把注意力转到…\n⑤ Moving on to the next section... = 进入下一部分…\n⑥ That covers [topic]. Now let's look at... = [话题]就到这里。现在让我们看看…\n这些表达在每次话题切换时使用，让交接更有条理。" },
    ],
    pattern: "Now let's move on to + 下一个话题",
    patternExamples: [
      { en: "Now let's move on to the EOP review.", cn: "现在我们进入EOP审查。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
      { en: "Now let's move on to the staffing check.", cn: "现在我们进入人员检查。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Now let's move on to the weather report.", cn: "现在我们进入天气报告。", words: [{ w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
    ],
    thinking: "DCIM定位部分回顾（351-400句）：\n① 设备定位：机柜、PDU、母线、ATS、STS、电池组、风墙/CRAH\n② 传感器定位：漏水、烟感、温湿度、VESDA\n③ 基础设施定位：通道封闭、配电柜、列间空调、地板送风\n④ 安全系统定位：消防气瓶、应急照明、门禁、CCTV\n⑤ 支持系统定位：BMS服务器、母线槽、KVM、配线架\n\n下一部分：MOP执行（401-450句），学习如何按步骤执行维护操作方案。",
    pronunciation: "move on 连读：/muːv ɑːn/。\nexecution 重音在第三音节：/ˌɛk.sɪˈkjuː.ʃən/。\nMOP 读 /mɑːp/。\n节奏：Now LET'S ｜ MOVE ON ｜ to the MOP ｜ ex-e-CU-tion pro-CE-dures.",
    quiz: [
      { q: "现在我们进入EOP审查，怎么说？", a: "Now let's move on to the EOP review." },
      { q: "交接中常用的转场表达有哪些？", a: "① Now let's move on to...（转到…）② Next, let's review...（接下来检查…）③ Now we'll proceed to...（进入…）④ Let's turn our attention to...（把注意力转到…）⑤ That covers [topic]. Now let's look at...（[话题]到这里，现在看看…）" },
    ],
  },
];

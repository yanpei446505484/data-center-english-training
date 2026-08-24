// EXPORTS: MOCK_SENTENCES_BMS29B

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_BMS29B: ISentence[] = [
  // ── 趋势分析 (1821-1830) ──
  {
    id: 1821,
    en: "Please display the temperature trend.",
    cn: "请显示温度趋势。",
    ipa: "/pliːz dɪˈspleɪ ðə ˈtɛmpərətʃər trɛnd/",
    tags: ["第1821句", "趋势分析", "★★★★★"],
    when: "请求查看温度变化趋势图，用于判断机房环境是否稳定。趋势图是运维人员日常监控的核心工具之一。",
    words: [
      { w: "display", ipa: "/dɪˈspleɪ/", pos: "动词", cn: "显示；展示", memory: "dis(展开)+play(播放)→展开来播放→显示在屏幕上", phonics: "dis 读 /dɪs/，play 读 /pleɪ/，重音在第二音节。", collocations: [["display the trend","显示趋势"],["display on screen","在屏幕上显示"],["data display","数据显示"]], examples: [["Please display the alarm list.","请显示告警列表。"],["The screen displays real-time data.","屏幕显示实时数据。"]] },
      { w: "temperature", ipa: "/ˈtɛmpərətʃər/", pos: "名词", cn: "温度", memory: "temper(调和)+ature→调和冷热程度的量→温度", phonics: "tem 读 /tɛm/，pe 读 /pə/，ra 读 /rə/，ture 读 /tʃər/。", collocations: [["temperature trend","温度趋势"],["room temperature","机房温度"],["temperature alarm","温度告警"],["temperature threshold","温度阈值"]], examples: [["The temperature is 24 degrees.","温度是24度。"],["Check the temperature trend.","检查温度趋势。"]] },
      { w: "trend", ipa: "/trɛnd/", pos: "名词", cn: "趋势；走向", memory: "trend = 趋势/走向。在监控中指数据随时间变化的走势。", phonics: "trend 读 /trɛnd/，注意 tr 连读。", collocations: [["temperature trend","温度趋势"],["power trend","电力趋势"],["upward trend","上升趋势"],["downward trend","下降趋势"]], examples: [["The trend is stable.","趋势平稳。"],["Display the PUE trend.","显示PUE趋势。"]] }
    ],
    phrases: [
      { p: "display the trend", ipa: "/dɪˈspleɪ ðə trɛnd/", cn: "显示趋势", why: "display + the + 具体趋势类型，是监控操作中的标准指令句式。" },
      { p: "temperature trend", ipa: "/ˈtɛmpərətʃər trɛnd/", cn: "温度趋势", why: "temperature 修饰 trend，指明查看的是温度这一参数的变化走势。" }
    ],
    grammar: [
      { q: "Please + 动词原形的祈使句结构", a: "Please + 动词原形是礼貌的祈使句，用于请求对方执行操作。\n✅ Please display the trend.（请显示趋势。）\n✅ Please check the alarm.（请检查告警。）\n在运维场景中，即使用 Please，本质仍是命令/指令。" }
    ],
    pattern: "Please display the + 参数名 + trend",
    patternExamples: [
      { en: "Please display the humidity trend.", cn: "请显示湿度趋势。", words: [] },
      { en: "Please display the power trend.", cn: "请显示电力趋势。", words: [] },
      { en: "Please display the PUE trend.", cn: "请显示PUE趋势。", words: [] }
    ],
    thinking: "英语指令结构：请求词(Please) + 动作(display) + 对象(the temperature trend)。\n先说「请」表示礼貌，再说「做什么」（显示），最后说「看什么」（温度趋势）。\n中文习惯可能说「把温度趋势显示出来」，英语更直接：display the temperature trend。",
    pronunciation: "temperature 五个音节，重音在第一音节：TEM-pe-ra-ture。\ntrend 的 tr 连读，舌尖卷起：/trɛnd/。\n节奏：Please dis-PLAY ｜ the TEM-pe-ra-ture ｜ TREND.",
    quiz: [
      { q: "请显示湿度趋势，怎么说？", a: "Please display the humidity trend." },
      { q: "「趋势」用英语怎么说？", a: "trend (/trɛnd/)" }
    ]
  },
  {
    id: 1822,
    en: "Please display the humidity trend.",
    cn: "请显示湿度趋势。",
    ipa: "/pliːz dɪˈspleɪ ðə hjuːˈmɪdɪti trɛnd/",
    tags: ["第1822句", "趋势分析", "★★★★"],
    when: "请求查看湿度变化趋势，数据中心湿度过高会导致凝露，过低会产生静电。",
    words: [
      { w: "humidity", ipa: "/hjuːˈmɪdɪti/", pos: "名词", cn: "湿度", memory: "humid(潮湿的)+ity(名词后缀)→潮湿程度→湿度", phonics: "hu 读 /hjuː/，mi 读 /mɪ/，di 读 /dɪ/，ty 读 /ti/，重音在第二音节。", collocations: [["humidity trend","湿度趋势"],["relative humidity","相对湿度"],["humidity alarm","湿度告警"],["humidity threshold","湿度阈值"]], examples: [["The humidity is 45 percent.","湿度是45%。"],["Check the humidity trend.","检查湿度趋势。"]] }
    ],
    phrases: [
      { p: "humidity trend", ipa: "/hjuːˈmɪdɪti trɛnd/", cn: "湿度趋势", why: "humidity 修饰 trend，指明查看湿度参数的变化走势。" }
    ],
    grammar: [
      { q: "与上一句(1821)结构相同，只替换参数名", a: "Please display the + 参数 + trend 是固定句式，只需替换中间的参数名。\n✅ temperature trend（温度趋势）\n✅ humidity trend（湿度趋势）\n✅ power trend（电力趋势）\n这种「框架替换」是工程英语的高效表达方式。" }
    ],
    pattern: "Please display the + 参数名 + trend",
    patternExamples: [
      { en: "Please display the energy trend.", cn: "请显示能耗趋势。", words: [] },
      { en: "Please display the cooling trend.", cn: "请显示制冷趋势。", words: [] },
      { en: "Please display the load trend.", cn: "请显示负载趋势。", words: [] }
    ],
    thinking: "掌握一个句式后，只需替换关键词就能表达不同请求。\ntemperature → humidity → power → PUE → energy → 同一框架，不同参数。\n这是数据中心英语学习的核心策略：先掌握句式框架，再扩展词汇。",
    pronunciation: "humidity 四个音节，重音在第二音节：hu-MI-di-ty。\n节奏：Please dis-PLAY ｜ the hu-MI-di-ty ｜ TREND.",
    quiz: [
      { q: "请显示电力趋势，怎么说？", a: "Please display the power trend." },
      { q: "「湿度」用英语怎么说？", a: "humidity (/hjuːˈmɪdɪti/)" }
    ]
  },
  {
    id: 1823,
    en: "Please display the power trend.",
    cn: "请显示电力趋势。",
    ipa: "/pliːz dɪˈspleɪ ðə ˈpaʊər trɛnd/",
    tags: ["第1823句", "趋势分析", "★★★★"],
    when: "请求查看电力消耗趋势图，用于监控机房用电情况和负载变化。",
    words: [
      { w: "power", ipa: "/ˈpaʊər/", pos: "名词", cn: "电力；功率", memory: "power = 力量/电力。在数据中心指电力供应和消耗。", phonics: "power 读 /ˈpaʊər/，双元音 /aʊ/。", collocations: [["power trend","电力趋势"],["power consumption","用电量"],["power supply","电力供应"],["power outage","断电"]], examples: [["Power consumption is rising.","用电量在上升。"],["Check the power trend.","检查电力趋势。"]] }
    ],
    phrases: [
      { p: "power trend", ipa: "/ˈpaʊər trɛnd/", cn: "电力趋势", why: "power 修饰 trend，指明查看电力参数的变化走势。" }
    ],
    grammar: [
      { q: "同样的框架句式替换", a: "句式完全一致：Please display the + power + trend。\n数据中心常用趋势参数：temperature / humidity / power / PUE / energy consumption。\n掌握框架后，只需记住参数词汇即可灵活表达。" }
    ],
    pattern: "Please display the + 参数名 + trend",
    patternExamples: [
      { en: "Please display the UPS load trend.", cn: "请显示UPS负载趋势。", words: [] },
      { en: "Please display the generator output trend.", cn: "请显示发电机输出趋势。", words: [] },
      { en: "Please display the battery voltage trend.", cn: "请显示电池电压趋势。", words: [] }
    ],
    thinking: "趋势分析是数据中心日常监控的核心操作。\n每天交接时都要检查关键参数的趋势，确认没有异常波动。\n英语表达只需替换参数名，框架不变。",
    pronunciation: "power 双元音 /aʊ/，嘴型从 /a/ 滑向 /ʊ/。\n节奏：Please dis-PLAY ｜ the POW-er ｜ TREND.",
    quiz: [
      { q: "请显示能耗趋势，怎么说？", a: "Please display the energy consumption trend." },
      { q: "「电力；功率」用英语怎么说？", a: "power (/ˈpaʊər/)" }
    ]
  },
  {
    id: 1824,
    en: "Please display the energy consumption trend.",
    cn: "请显示能耗趋势。",
    ipa: "/pliːz dɪˈspleɪ ðə ˈɛnərdʒi kənˈsʌmpʃən trɛnd/",
    tags: ["第1824句", "趋势分析", "★★★★★"],
    when: "请求查看能耗趋势图。能耗管理是数据中心运营成本控制的核心指标。",
    words: [
      { w: "energy", ipa: "/ˈɛnərdʒi/", pos: "名词", cn: "能源；能量", memory: "energy = 能量/能源。数据中心能耗 = energy consumption。", phonics: "en 读 /ɛn/，er 读 /ər/，gy 读 /dʒi/，重音在第一音节。", collocations: [["energy consumption","能耗"],["energy efficiency","能效"],["energy saving","节能"]], examples: [["Energy consumption is high.","能耗很高。"],["Improve energy efficiency.","提高能效。"]] },
      { w: "consumption", ipa: "/kənˈsʌmpʃən/", pos: "名词", cn: "消耗；消费量", memory: "consume(消耗)+tion→消耗的量", phonics: "con 读 /kən/，sump 读 /sʌmp/，tion 读 /ʃən/，重音在第二音节。", collocations: [["power consumption","用电量"],["energy consumption","能耗"],["water consumption","用水量"]], examples: [["Check power consumption.","检查用电量。"],["Consumption is increasing.","消耗量在增加。"]] }
    ],
    phrases: [
      { p: "energy consumption", ipa: "/ˈɛnərdʒi kənˈsʌmpʃən/", cn: "能耗", why: "energy(能源) + consumption(消耗) = 能源消耗量，是数据中心运营的核心KPI。" },
      { p: "energy consumption trend", ipa: "", cn: "能耗趋势", why: "在趋势框架中加入复合参数名 energy consumption。" }
    ],
    grammar: [
      { q: "复合名词修饰 trend", a: "当参数本身是复合名词时（energy consumption），直接放在 trend 前面。\n✅ energy consumption trend（能耗趋势）\n✅ power consumption trend（用电量趋势）\n✅ cooling capacity trend（制冷能力趋势）\n英语允许多个名词叠加修饰，最后一个词是核心名词。" }
    ],
    pattern: "Please display the + 复合参数名 + trend",
    patternExamples: [
      { en: "Please display the water usage trend.", cn: "请显示用水量趋势。", words: [] },
      { en: "Please display the rack power trend.", cn: "请显示机柜电力趋势。", words: [] },
      { en: "Please display the cooling load trend.", cn: "请显示制冷负载趋势。", words: [] }
    ],
    thinking: "能耗趋势是管理层最关注的指标之一。\nPUE（电力使用效率）的计算就依赖于总能耗数据。\n交接时汇报能耗趋势，可以及时发现异常用电。",
    pronunciation: "consumption 重音在第二音节：con-SUMP-tion。\nenergy 重音在第一音节：EN-er-gy。\n节奏：Please dis-PLAY ｜ the EN-er-gy con-SUMP-tion ｜ TREND.",
    quiz: [
      { q: "请显示能耗趋势，怎么说？", a: "Please display the energy consumption trend." },
      { q: "「消耗」用英语怎么说？", a: "consumption (/kənˈsʌmpʃən/)" }
    ]
  },
  {
    id: 1825,
    en: "Please display the PUE trend.",
    cn: "请显示PUE趋势。",
    ipa: "/pliːz dɪˈspleɪ ðə ˌpiː.juːˈiː trɛnd/",
    tags: ["第1825句", "趋势分析", "★★★★★"],
    when: "请求查看PUE趋势。PUE是数据中心能效的核心衡量指标，值越低代表能效越高。",
    words: [
      { w: "PUE", ipa: "/ˌpiː.juːˈiː/", pos: "缩写", cn: "电力使用效率", memory: "P=Power(电力), U=Usage(使用), E=Effectiveness(效率)→总电力/IT设备电力", phonics: "逐字母读 P-U-E。", collocations: [["PUE trend","PUE趋势"],["PUE value","PUE值"],["improve PUE","改善PUE"],["target PUE","目标PUE"]], examples: [["The PUE is 1.45.","PUE是1.45。"],["PUE is improving.","PUE正在改善。"]] }
    ],
    phrases: [
      { p: "PUE trend", ipa: "/ˌpiː.juːˈiː trɛnd/", cn: "PUE趋势", why: "PUE 是数据中心行业通用缩写，trend 表示查看其变化走势。" }
    ],
    grammar: [
      { q: "PUE 的含义和计算方式", a: "PUE = Power Usage Effectiveness = 总设施用电 ÷ IT设备用电。\n✅ PUE = 1.0 表示所有电力都用于IT设备（理想值）。\n✅ PUE = 1.4 表示40%的电力用于制冷、照明等非IT设施。\n行业平均水平约1.6-1.8，先进数据中心可达1.2以下。" }
    ],
    pattern: "Please display the PUE trend",
    patternExamples: [
      { en: "What is the current PUE?", cn: "当前PUE是多少？", words: [] },
      { en: "The PUE target is 1.4.", cn: "PUE目标是1.4。", words: [] },
      { en: "PUE has improved by 0.1.", cn: "PUE改善了0.1。", words: [] }
    ],
    thinking: "PUE 是全球数据中心行业通用的能效指标。\n每次管理层巡检、客户审计都会询问PUE。\n运维人员需要每天跟踪PUE趋势，发现异常及时排查。",
    pronunciation: "PUE 逐字母读：P-U-E，不要读成一个单词。\n节奏：Please dis-PLAY ｜ the P-U-E ｜ TREND.",
    quiz: [
      { q: "请显示PUE趋势，怎么说？", a: "Please display the PUE trend." },
      { q: "PUE 的全称是什么？", a: "Power Usage Effectiveness（电力使用效率）" }
    ]
  },
  {
    id: 1826,
    en: "The PUE is improving.",
    cn: "PUE正在改善。",
    ipa: "/ðə ˌpiː.juːˈiː ɪz ɪmˈpruːvɪŋ/",
    tags: ["第1826句", "趋势分析", "★★★★"],
    when: "汇报PUE趋势向好，表明能效管理措施正在发挥作用。",
    words: [
      { w: "improving", ipa: "/ɪmˈpruːvɪŋ/", pos: "动词（现在分词）", cn: "正在改善", memory: "improve(改善)+ing(进行时)→正在变好的过程中", phonics: "im 读 /ɪm/，prov 读 /pruːv/，ing 读 /ɪŋ/，重音在第二音节。", collocations: [["is improving","正在改善"],["continuous improving","持续改善"]], examples: [["The PUE is improving.","PUE正在改善。"],["Performance is improving.","性能正在改善。"]] }
    ],
    phrases: [
      { p: "is improving", ipa: "/ɪz ɪmˈpruːvɪŋ/", cn: "正在改善", why: "be动词(is) + 现在分词(improving) = 现在进行时，表示当前正在发生的变化。" }
    ],
    grammar: [
      { q: "现在进行时表达趋势变化", a: "be + V-ing（现在进行时）用于描述当前正在发生的趋势变化。\n✅ The PUE is improving.（PUE正在改善。）→ 变好\n✅ Power consumption is increasing.（用电量正在增加。）→ 变多\n✅ The temperature is rising.（温度正在上升。）→ 升高\n✅ The temperature is stable.（温度稳定。）→ 不变（用形容词，不用进行时）" }
    ],
    pattern: "The + 指标 + is + 变化动词-ing / 形容词",
    patternExamples: [
      { en: "The temperature is rising.", cn: "温度正在上升。", words: [] },
      { en: "The load is decreasing.", cn: "负载正在下降。", words: [] },
      { en: "The humidity is stable.", cn: "湿度稳定。", words: [] }
    ],
    thinking: "汇报趋势时用现在进行时(is + V-ing)表达「正在变化」。\nimproving = 正在变好（正向）\nincreasing = 正在增加（中性/负向取决于语境）\ndecreasing = 正在减少\nstable = 稳定（不变）",
    pronunciation: "improving 重音在第二音节：im-PROV-ing。\nis improving 连读：iz-improving /ɪz.ɪmˈpruːvɪŋ/。\n节奏：The P-U-E ｜ is im-PROV-ing.",
    quiz: [
      { q: "PUE正在改善，怎么说？", a: "The PUE is improving." },
      { q: "「正在改善」用英语怎么说？", a: "is improving (/ɪz ɪmˈpruːvɪŋ/)" }
    ]
  },
  {
    id: 1827,
    en: "The room temperature is stable.",
    cn: "机房温度保持稳定。",
    ipa: "/ðə ruːm ˈtɛmpərətʃər ɪz ˈsteɪbəl/",
    tags: ["第1827句", "趋势分析", "★★★★"],
    when: "汇报机房温度状态正常，无异常波动。stable 是运维汇报中最常用的正面评价词。",
    words: [
      { w: "stable", ipa: "/ˈsteɪbəl/", pos: "形容词", cn: "稳定的", memory: "stable = 稳定/稳固。与 unstable(不稳定)相对。", phonics: "sta 读 /steɪ/，ble 读 /bəl/，重音在第一音节。", collocations: [["temperature is stable","温度稳定"],["system is stable","系统稳定"],["stable operation","稳定运行"]], examples: [["The temperature is stable.","温度稳定。"],["All systems are stable.","所有系统稳定。"]] },
      { w: "room", ipa: "/ruːm/", pos: "名词", cn: "房间；机房", memory: "room 在数据中心语境中常指机房。Server room = 服务器机房。", phonics: "room 读 /ruːm/。", collocations: [["room temperature","机房温度"],["server room","服务器机房"],["cold room","冷通道"]], examples: [["Check the room temperature.","检查机房温度。"],["Room 101 is normal.","101房间正常。"]] }
    ],
    phrases: [
      { p: "room temperature", ipa: "/ruːm ˈtɛmpərətʃər/", cn: "机房温度", why: "room 在数据中心中指机房/房间，room temperature 指机房内的环境温度。" },
      { p: "is stable", ipa: "/ɪz ˈsteɪbəl/", cn: "保持稳定", why: "be + stable(形容词) 表示状态稳定，不需要变化动词。" }
    ],
    grammar: [
      { q: "be + 形容词 vs be + V-ing", a: "描述「稳定」用 be + 形容词（stable），不用进行时。\n✅ The temperature is stable.（温度稳定。）← 状态\n❌ The temperature is stabilizing.（温度正在趋于稳定。）← 变化过程\n两种都正确，但意思不同：stable 是已经稳定，stabilizing 是正在变稳定。" }
    ],
    pattern: "The + 参数 + is + 状态形容词",
    patternExamples: [
      { en: "The humidity is normal.", cn: "湿度正常。", words: [] },
      { en: "The voltage is stable.", cn: "电压稳定。", words: [] },
      { en: "The load is balanced.", cn: "负载均衡。", words: [] }
    ],
    thinking: "运维汇报中，stable 是最常听到的正面词汇。\n温度稳定 = 空调系统运行正常 = 设备安全。\n如果温度不稳定，就要检查空调、气流组织或设备负载。",
    pronunciation: "stable 双元音 /eɪ/，嘴型从 /e/ 滑向 /ɪ/。\nroom temperature 连读：room-temperature /ruːmˈtɛmpərətʃər/。\n节奏：The ROOM TEM-pe-ra-ture ｜ is STA-ble.",
    quiz: [
      { q: "机房温度保持稳定，怎么说？", a: "The room temperature is stable." },
      { q: "「稳定的」用英语怎么说？", a: "stable (/ˈsteɪbəl/)" }
    ]
  },
  {
    id: 1828,
    en: "The humidity is within the target range.",
    cn: "湿度保持在目标范围内。",
    ipa: "/ðə hjuːˈmɪdɪti ɪz wɪˈðɪn ðə ˈtɑːrɡɪt reɪndʒ/",
    tags: ["第1828句", "趋势分析", "★★★★★"],
    when: "汇报湿度在可控范围内。数据中心湿度通常要求 40%-60%，过高凝露、过低静电。",
    words: [
      { w: "within", ipa: "/wɪˈðɪn/", pos: "介词", cn: "在……之内", memory: "with(在)+in(里面)→在某范围的里面", phonics: "with 读 /wɪð/，in 读 /ɪn/，重音在第二音节。", collocations: [["within range","在范围内"],["within limits","在限制内"],["within tolerance","在容差内"]], examples: [["Temperature is within range.","温度在范围内。"],["Stay within the limit.","保持在限制内。"]] },
      { w: "target", ipa: "/ˈtɑːrɡɪt/", pos: "名词/形容词", cn: "目标", memory: "target = 靶子/目标。Target range = 目标范围。", phonics: "tar 读 /tɑːr/，get 读 /ɡɪt/，重音在第一音节。", collocations: [["target range","目标范围"],["target value","目标值"],["target PUE","目标PUE"]], examples: [["The target range is 40-60%.","目标范围是40%-60%。"],["We met the target.","我们达成了目标。"]] },
      { w: "range", ipa: "/reɪndʒ/", pos: "名词", cn: "范围", memory: "range = 范围/区间。指从最小值到最大值的区间。", phonics: "range 读 /reɪndʒ/。", collocations: [["target range","目标范围"],["operating range","运行范围"],["temperature range","温度范围"]], examples: [["The range is 20-25 degrees.","范围是20-25度。"],["Within the target range.","在目标范围内。"]] }
    ],
    phrases: [
      { p: "within the target range", ipa: "/wɪˈðɪn ðə ˈtɑːrɡɪt reɪndʒ/", cn: "在目标范围内", why: "within + the + target + range 是运维汇报的标准表达，表示参数在可控区间。" }
    ],
    grammar: [
      { q: "within vs in 的区别", a: "within 强调「在某个界限/范围以内」，比 in 更精确。\n✅ within the target range（在目标范围内）← 强调不超出边界\n✅ in the room（在房间里）← 只是说位置\n运维汇报中用 within 更专业，暗示有明确的上下限。" }
    ],
    pattern: "The + 参数 + is within the + 限定 + range",
    patternExamples: [
      { en: "The temperature is within the safe range.", cn: "温度在安全范围内。", words: [] },
      { en: "The voltage is within tolerance.", cn: "电压在容差范围内。", words: [] },
      { en: "The PUE is within the target.", cn: "PUE在目标范围内。", words: [] }
    ],
    thinking: "within the target range 是运维汇报中的「安全确认」表达。\n说出这句话 = 告诉对方：参数正常，不需要采取行动。\n这是交接中最让人放心的汇报之一。",
    pronunciation: "within 重音在第二音节：with-IN。\ntarget range 两个词的重音都在第一音节：TAR-get RANGE。\n节奏：The hu-MI-di-ty ｜ is with-IN ｜ the TAR-get RANGE.",
    quiz: [
      { q: "湿度保持在目标范围内，怎么说？", a: "The humidity is within the target range." },
      { q: "「在……之内」用英语怎么说？", a: "within (/wɪˈðɪn/)" }
    ]
  },
  {
    id: 1829,
    en: "Power consumption is increasing.",
    cn: "用电量正在增加。",
    ipa: "/ˈpaʊər kənˈsʌmpʃən ɪz ˈɪnkriːsɪŋ/",
    tags: ["第1829句", "趋势分析", "★★★★"],
    when: "汇报用电量上升趋势，可能需要关注是否负载增加或有设备异常。",
    words: [
      { w: "increasing", ipa: "/ɪnˈkriːsɪŋ/", pos: "动词（现在分词）", cn: "正在增加", memory: "increase(增加)+ing(进行时)→正在变多的过程中", phonics: "in 读 /ɪn/，creas 读 /kriːs/，ing 读 /ɪŋ/，重音在第二音节。", collocations: [["is increasing","正在增加"],["increasing trend","上升趋势"],["increasing load","负载增加"]], examples: [["Power is increasing.","电力在增加。"],["The load is increasing.","负载在增加。"]] }
    ],
    phrases: [
      { p: "power consumption", ipa: "/ˈpaʊər kənˈsʌmpʃən/", cn: "用电量", why: "power(电力) + consumption(消耗) = 电力消耗量 = 用电量。" },
      { p: "is increasing", ipa: "/ɪz ˈɪnkriːsɪŋ/", cn: "正在增加", why: "be + V-ing 现在进行时，表示正在发生的上升趋势。" }
    ],
    grammar: [
      { q: "increasing vs rising vs growing", a: "三个词都表示「增加/上升」，在趋势汇报中可以互换：\n✅ Power is increasing.（用电量正在增加。）\n✅ Temperature is rising.（温度正在上升。）\n✅ Load is growing.（负载正在增长。）\nincreasing 最通用，rising 偏向数值上升，growing 偏向规模增长。" }
    ],
    pattern: "The/零冠词 + 参数 + is increasing/rising",
    patternExamples: [
      { en: "The temperature is rising.", cn: "温度正在上升。", words: [] },
      { en: "Load is growing.", cn: "负载正在增长。", words: [] },
      { en: "Humidity is increasing.", cn: "湿度正在增加。", words: [] }
    ],
    thinking: "用电量增加不一定是坏事——可能是IT负载正常增长。\n但如果增加速度异常，就需要排查是否有设备故障或制冷效率下降。\n汇报时用 increasing 客观描述趋势，不带主观判断。",
    pronunciation: "increasing 重音在第二音节：in-CREAS-ing。\npower consumption 连读：power-consumption。\n节奏：POW-er con-SUMP-tion ｜ is in-CREAS-ing.",
    quiz: [
      { q: "用电量正在增加，怎么说？", a: "Power consumption is increasing." },
      { q: "「正在增加」用英语怎么说？", a: "is increasing (/ɪz ɪnˈkriːsɪŋ/)" }
    ]
  },
  {
    id: 1830,
    en: "Cooling capacity is sufficient.",
    cn: "制冷能力充足。",
    ipa: "/ˈkuːlɪŋ kəˈpæsɪti ɪz səˈfɪʃənt/",
    tags: ["第1830句", "趋势分析", "★★★★★"],
    when: "汇报制冷系统能力满足当前负载需求，是运维交接中的关键正面信息。",
    words: [
      { w: "cooling", ipa: "/ˈkuːlɪŋ/", pos: "名词/形容词", cn: "制冷；冷却", memory: "cool(冷却)+ing→制冷的/冷却的过程", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/。", collocations: [["cooling capacity","制冷能力"],["cooling system","制冷系统"],["cooling tower","冷却塔"],["cooling load","制冷负载"]], examples: [["Cooling is sufficient.","制冷充足。"],["Check the cooling system.","检查制冷系统。"]] },
      { w: "capacity", ipa: "/kəˈpæsɪti/", pos: "名词", cn: "能力；容量", memory: "capable(有能力的)+ity→能够承载的量→容量/能力", phonics: "ca 读 /kə/，pac 读 /pæ/，i 读 /ɪ/，ty 读 /ti/，重音在第二音节。", collocations: [["cooling capacity","制冷能力"],["power capacity","电力容量"],["capacity planning","容量规划"]], examples: [["Capacity is sufficient.","容量充足。"],["We need more capacity.","我们需要更多容量。"]] },
      { w: "sufficient", ipa: "/səˈfɪʃənt/", pos: "形容词", cn: "充足的；足够的", memory: "sufficient = 足够/充足。反义词 insufficient = 不足。", phonics: "suf 读 /sə/，fi 读 /fɪ/，cient 读 /ʃənt/，重音在第二音节。", collocations: [["capacity is sufficient","容量充足"],["power is sufficient","电力充足"],["sufficient cooling","足够的制冷"]], examples: [["Cooling is sufficient.","制冷充足。"],["Is the power sufficient?","电力充足吗？"]] }
    ],
    phrases: [
      { p: "cooling capacity", ipa: "/ˈkuːlɪŋ kəˈpæsɪti/", cn: "制冷能力", why: "cooling(制冷) + capacity(能力) = 制冷系统能够提供的冷量总量。" },
      { p: "is sufficient", ipa: "/ɪz səˈfɪʃənt/", cn: "充足", why: "be + sufficient(形容词) 表示状态充足，是运维汇报中的正面确认。" }
    ],
    grammar: [
      { q: "sufficient vs enough 的区别", a: "sufficient 比 enough 更正式，在技术汇报中更常用。\n✅ Cooling capacity is sufficient.（制冷能力充足。）← 正式/技术\n✅ We have enough cooling.（我们有足够的制冷。）← 口语\n在工作场景中，sufficient 更专业；日常对话中 enough 更自然。" }
    ],
    pattern: "参数 + is + 状态形容词（sufficient/adequate/insufficient）",
    patternExamples: [
      { en: "Power capacity is adequate.", cn: "电力容量充裕。", words: [] },
      { en: "Bandwidth is sufficient.", cn: "带宽充足。", words: [] },
      { en: "Redundancy is insufficient.", cn: "冗余不足。", words: [] }
    ],
    thinking: "制冷能力充足 = 机房温度可控 = 设备安全运行。\n这是交接中最重要的正面信息之一。\n如果制冷不足（insufficient），则需要立即采取减载或应急制冷措施。",
    pronunciation: "capacity 重音在第二音节：ca-PAC-i-ty。\nsufficient 重音在第二音节：suf-FI-cient。\n节奏：COOL-ing ca-PAC-i-ty ｜ is suf-FI-cient.",
    quiz: [
      { q: "制冷能力充足，怎么说？", a: "Cooling capacity is sufficient." },
      { q: "「充足的」用英语怎么说？", a: "sufficient (/səˈfɪʃənt/)" }
    ]
  },
  // ── 工单管理 (1831-1840) ──
  {
    id: 1831,
    en: "Please create an event ticket.",
    cn: "请创建事件单。",
    ipa: "/pliːz kriːeɪt æn ɪˈvɛnt ˈtɪkɪt/",
    tags: ["第1831句", "工单管理", "★★★★★"],
    when: "请求创建事件单记录问题。事件单是工单流程的起点，记录所有需要跟踪的问题。",
    words: [
      { w: "create", ipa: "/kriˈeɪt/", pos: "动词", cn: "创建", memory: "create = 创造/创建。在系统中创建新记录。", phonics: "cre 读 /kri/，ate 读 /eɪt/，重音在第二音节。", collocations: [["create a ticket","创建工单"],["create a record","创建记录"],["create an event","创建事件"]], examples: [["Create a new ticket.","创建新工单。"],["I created the record.","我已创建记录。"]] },
      { w: "event", ipa: "/ɪˈvɛnt/", pos: "名词", cn: "事件", memory: "event = 事件。在工单系统中，event ticket = 事件单。", phonics: "e 读 /ɪ/，vent 读 /vɛnt/，重音在第二音节。", collocations: [["event ticket","事件单"],["security event","安全事件"],["system event","系统事件"]], examples: [["Create an event ticket.","创建事件单。"],["The event has been logged.","事件已记录。"]] },
      { w: "ticket", ipa: "/ˈtɪkɪt/", pos: "名词", cn: "工单", memory: "ticket = 票据/工单。在IT和运维中指需要跟踪处理的工作单。", phonics: "tick 读 /tɪk/，et 读 /ɪt/。", collocations: [["event ticket","事件单"],["fault ticket","故障单"],["ticket status","工单状态"],["ticket owner","工单负责人"]], examples: [["Check the ticket status.","检查工单状态。"],["Assign the ticket.","分配工单。"]] }
    ],
    phrases: [
      { p: "create an event ticket", ipa: "/kriˈeɪt æn ɪˈvɛnt ˈtɪkɪt/", cn: "创建事件单", why: "create(创建) + an event ticket(一个事件单)，是工单管理的起始操作。" }
    ],
    grammar: [
      { q: "event ticket vs fault ticket", a: "event ticket（事件单）= 记录一个已发生的事件，可能是告警、异常或操作需求。\nfault ticket（故障单）= 记录一个设备故障，需要维修或更换。\n通常先创建 event ticket，确认后如需维修再转为 fault ticket。" }
    ],
    pattern: "Please create + a/an + 工单类型 + ticket",
    patternExamples: [
      { en: "Please create a fault ticket.", cn: "请创建故障单。", words: [] },
      { en: "Please create a change request.", cn: "请创建变更请求。", words: [] },
      { en: "Please create a maintenance ticket.", cn: "请创建维保单。", words: [] }
    ],
    thinking: "事件单是工单流程的第一步：发现问题 → 创建事件单 → 调查 → 处理 → 关闭。\n所有问题都必须有工单记录，这是运维规范的基本要求。",
    pronunciation: "event 重音在第二音节：e-VENT。\nticket 注意 ck 读 /k/：TICK-et。\n节奏：Please CRE-ate ｜ an e-VENT ｜ TICK-et.",
    quiz: [
      { q: "请创建事件单，怎么说？", a: "Please create an event ticket." },
      { q: "「工单」用英语怎么说？", a: "ticket (/ˈtɪkɪt/)" }
    ]
  },
  {
    id: 1832,
    en: "Please convert the event ticket into a fault ticket.",
    cn: "请将事件单转为故障单。",
    ipa: "/pliːz kənˈvɜːrt ði ɪˈvɛnt ˈtɪkɪt ˈɪntuː ə fɔːlt ˈtɪkɪt/",
    tags: ["第1832句", "工单管理", "★★★★★"],
    when: "确认事件涉及设备故障后，需要将事件单升级为故障单，启动维修流程。",
    words: [
      { w: "convert", ipa: "/kənˈvɜːrt/", pos: "动词", cn: "转换；转为", memory: "con(共同)+vert(转)→转变形态→转换", phonics: "con 读 /kən/，vert 读 /vɜːrt/，重音在第二音节。", collocations: [["convert into","转换为"],["convert the ticket","转换工单"],["convert to fault","转为故障"]], examples: [["Convert the event into a fault.","将事件转为故障。"],["The ticket has been converted.","工单已转换。"]] },
      { w: "fault", ipa: "/fɔːlt/", pos: "名词", cn: "故障", memory: "fault = 故障/过错。在运维中指设备故障。", phonics: "fault 读 /fɔːlt/，注意 l 不发音。", collocations: [["fault ticket","故障单"],["electrical fault","电气故障"],["mechanical fault","机械故障"],["fault diagnosis","故障诊断"]], examples: [["There is a fault in UPS-01.","UPS-01有故障。"],["Create a fault ticket.","创建故障单。"]] }
    ],
    phrases: [
      { p: "convert into", ipa: "/kənˈvɜːrt ˈɪntuː/", cn: "转换为", why: "convert A into B = 把A转成B。在工单系统中指将一种工单类型转为另一种。" },
      { p: "fault ticket", ipa: "/fɔːlt ˈtɪkɪt/", cn: "故障单", why: "fault(故障) + ticket(工单) = 记录设备故障的维修工单。" }
    ],
    grammar: [
      { q: "convert A into B 的用法", a: "convert + 对象 + into + 目标类型，表示把一种东西转变成另一种。\n✅ Convert the event ticket into a fault ticket.（把事件单转为故障单。）\n✅ Convert the alarm into a ticket.（把告警转为工单。）\ninto 表示「变成」，强调结果。" }
    ],
    pattern: "Please convert + 原工单 + into + 新工单类型",
    patternExamples: [
      { en: "Convert the event into a change request.", cn: "将事件转为变更请求。", words: [] },
      { en: "Convert the alarm into an event ticket.", cn: "将告警转为事件单。", words: [] },
      { en: "Convert the request into a fault ticket.", cn: "将请求转为故障单。", words: [] }
    ],
    thinking: "事件单→故障单的转换是常见的工单升级流程。\n当调查发现事件涉及设备实际故障时，就需要转为故障单。\n故障单通常需要更高级别的审批和更长的处理周期。",
    pronunciation: "convert 重音在第二音节：con-VERT。\nfault 中 l 几乎不发音：/fɔːlt/。\ninto 连读：IN-to /ˈɪntuː/。\n节奏：Please con-VERT ｜ the e-VENT TICK-et ｜ IN-to a FAULT TICK-et.",
    quiz: [
      { q: "请将事件单转为故障单，怎么说？", a: "Please convert the event ticket into a fault ticket." },
      { q: "「转换」用英语怎么说？", a: "convert (/kənˈvɜːrt/)" }
    ]
  },
  {
    id: 1833,
    en: "Please update the ticket status.",
    cn: "请更新工单状态。",
    ipa: "/pliːz ˈʌpdeɪt ðə ˈtɪkɪt ˈsteɪtəs/",
    tags: ["第1833句", "工单管理", "★★★★"],
    when: "要求更新工单当前状态（如从 Open 变为 In Progress 或 Resolved）。",
    words: [
      { w: "update", ipa: "/ˈʌpdeɪt/", pos: "动词", cn: "更新", memory: "up(向上)+date(日期)→使信息保持最新→更新", phonics: "up 读 /ʌp/，date 读 /deɪt/，重音在第一音节。", collocations: [["update the status","更新状态"],["update the ticket","更新工单"],["update the record","更新记录"]], examples: [["Update the ticket status.","更新工单状态。"],["Please update the log.","请更新日志。"]] },
      { w: "status", ipa: "/ˈsteɪtəs/", pos: "名词", cn: "状态", memory: "status = 状态/状况。在工单系统中指处理进度。", phonics: "sta 读 /steɪ/，tus 读 /təs/，重音在第一音节。", collocations: [["ticket status","工单状态"],["alarm status","告警状态"],["current status","当前状态"],["status update","状态更新"]], examples: [["What is the ticket status?","工单状态是什么？"],["Status is In Progress.","状态是处理中。"]] }
    ],
    phrases: [
      { p: "update the ticket status", ipa: "/ˈʌpdeɪt ðə ˈtɪkɪt ˈsteɪtəs/", cn: "更新工单状态", why: "update(更新) + the ticket status(工单状态)，是工单管理中的常规操作。" }
    ],
    grammar: [
      { q: "常见工单状态词汇", a: "数据中心工单常见状态：\n✅ Open（待处理）→ 工单刚创建\n✅ In Progress（处理中）→ 正在解决\n✅ Pending（等待中）→ 等待备件或审批\n✅ Resolved（已解决）→ 问题已修复\n✅ Closed（已关闭）→ 确认解决并归档" }
    ],
    pattern: "Please update the + 对象 + status",
    patternExamples: [
      { en: "Update the alarm status.", cn: "更新告警状态。", words: [] },
      { en: "Update the change request status.", cn: "更新变更请求状态。", words: [] },
      { en: "Update the maintenance record.", cn: "更新维保记录。", words: [] }
    ],
    thinking: "工单状态必须及时更新，这是运维可追溯性的基础。\n每个状态变更都应该有记录：谁在什么时间把状态从什么改为什么。\n交接时检查所有活动工单的当前状态是标准操作。",
    pronunciation: "update 重音在第一音节：UP-date（动词）。\nstatus 重音在第一音节：STA-tus。\n节奏：Please UP-date ｜ the TICK-et ｜ STA-tus.",
    quiz: [
      { q: "请更新工单状态，怎么说？", a: "Please update the ticket status." },
      { q: "「状态」用英语怎么说？", a: "status (/ˈsteɪtəs/)" }
    ]
  },
  {
    id: 1834,
    en: "Please assign the ticket owner.",
    cn: "请指定工单负责人。",
    ipa: "/pliːz əˈsaɪn ðə ˈtɪkɪt ˈoʊnər/",
    tags: ["第1834句", "工单管理", "★★★★★"],
    when: "要求为工单分配负责人。每个工单必须有明确的 owner 负责跟踪直至关闭。",
    words: [
      { w: "assign", ipa: "/əˈsaɪn/", pos: "动词", cn: "分配；指派", memory: "as(去)+sign(签名)→把任务签给某人→分配", phonics: "as 读 /ə/，sign 读 /saɪn/，重音在第二音节。", collocations: [["assign the ticket","分配工单"],["assign to team","分配给团队"],["assign the owner","指定负责人"]], examples: [["Assign the ticket to John.","把工单分配给John。"],["The alarm has been assigned.","告警已分配。"]] },
      { w: "owner", ipa: "/ˈoʊnər/", pos: "名词", cn: "负责人；所有者", memory: "own(拥有)+er(人)→拥有责任的人→负责人", phonics: "own 读 /oʊn/，er 读 /ər/。", collocations: [["ticket owner","工单负责人"],["risk owner","风险负责人"],["process owner","流程负责人"]], examples: [["Who is the ticket owner?","谁是工单负责人？"],["Assign the owner.","指定负责人。"]] }
    ],
    phrases: [
      { p: "assign the ticket owner", ipa: "/əˈsaɪn ðə ˈtɪkɪt ˈoʊnər/", cn: "指定工单负责人", why: "assign(分配/指定) + the ticket owner(工单负责人)，确保每个工单有明确责任人。" }
    ],
    grammar: [
      { q: "assign 的两种用法", a: "① assign + 任务 + to + 人：Assign the ticket to John.（把工单分配给John。）\n② assign + 角色：Assign the ticket owner.（指定工单负责人。）\n第一种是「把什么给谁」，第二种是「指定谁做什么」。\n两种在工单管理中都常用。" }
    ],
    pattern: "Please assign + 任务/角色 + (to + 人)",
    patternExamples: [
      { en: "Assign the alarm to the electrical team.", cn: "把告警分配给电气团队。", words: [] },
      { en: "Assign the task to the night shift.", cn: "把任务分配给夜班。", words: [] },
      { en: "Assign a reviewer for this change.", cn: "为这个变更指定审核人。", words: [] }
    ],
    thinking: "工单负责人制度是运维管理的核心：每个问题必须有人「认领」。\n没有 owner 的工单 = 没人管 = 问题会被遗漏。\n交接时要检查所有活动工单是否都有明确的 owner。",
    pronunciation: "assign 重音在第二音节：as-SIGN。注意 gn 不发音。\nowner 双元音 /oʊ/：OWN-er。\n节奏：Please as-SIGN ｜ the TICK-et ｜ OWN-er.",
    quiz: [
      { q: "请指定工单负责人，怎么说？", a: "Please assign the ticket owner." },
      { q: "「分配」用英语怎么说？", a: "assign (/əˈsaɪn/)" }
    ]
  },
  {
    id: 1835,
    en: "Please check the SLA deadline.",
    cn: "请检查SLA时限。",
    ipa: "/pliːz tʃɛk ðə ˌɛs.ɛlˈeɪ ˈdɛdlaɪn/",
    tags: ["第1835句", "工单管理", "★★★★★"],
    when: "要求检查工单的SLA截止日期。SLA超时是严重的运维管理问题。",
    words: [
      { w: "SLA", ipa: "/ˌɛs.ɛlˈeɪ/", pos: "缩写", cn: "服务等级协议", memory: "S=Service(服务), L=Level(等级), A=Agreement(协议)→服务质量承诺", phonics: "逐字母读 S-L-A。", collocations: [["SLA deadline","SLA时限"],["SLA breach","SLA违约"],["meet SLA","达成SLA"],["SLA target","SLA目标"]], examples: [["Check the SLA deadline.","检查SLA时限。"],["We met the SLA.","我们达成了SLA。"]] },
      { w: "deadline", ipa: "/ˈdɛdlaɪn/", pos: "名词", cn: "截止时间", memory: "dead(死)+line(线)→不可越过的线→最后期限", phonics: "dead 读 /dɛd/，line 读 /laɪn/，重音在第一音节。", collocations: [["SLA deadline","SLA时限"],["meet the deadline","赶上截止时间"],["miss the deadline","错过截止时间"]], examples: [["The deadline is tomorrow.","截止时间是明天。"],["We missed the deadline.","我们错过了截止时间。"]] }
    ],
    phrases: [
      { p: "SLA deadline", ipa: "/ˌɛs.ɛlˈeɪ ˈdɛdlaɪn/", cn: "SLA时限", why: "SLA(服务等级协议) + deadline(截止时间) = 服务协议要求的最晚完成时间。" }
    ],
    grammar: [
      { q: "SLA 在运维中的重要性", a: "SLA = Service Level Agreement = 服务等级协议。\n它规定了不同类型工单的处理时限：\n✅ Critical alarm → 15分钟内响应，4小时内解决\n✅ Warning alarm → 1小时内响应，8小时内解决\n✅ Info alarm → 4小时内响应，24小时内解决\n超过SLA时限 = SLA breach（违约），需要上报管理层。" }
    ],
    pattern: "Please check the SLA + 名词",
    patternExamples: [
      { en: "Check the SLA status.", cn: "检查SLA状态。", words: [] },
      { en: "Check the SLA compliance.", cn: "检查SLA合规情况。", words: [] },
      { en: "Check the response time.", cn: "检查响应时间。", words: [] }
    ],
    thinking: "SLA管理是运维质量的核心指标。\n每次交接都要检查即将到期的工单，确保不会超时。\n如果发现即将超时，要立即升级或调配资源。",
    pronunciation: "SLA 逐字母读：S-L-A，不要读成单词。\ndeadline 重音在第一音节：DEAD-line。\n节奏：Please CHECK ｜ the S-L-A ｜ DEAD-line.",
    quiz: [
      { q: "请检查SLA时限，怎么说？", a: "Please check the SLA deadline." },
      { q: "SLA 的全称是什么？", a: "Service Level Agreement（服务等级协议）" }
    ]
  },
  {
    id: 1836,
    en: "This ticket will expire in one hour.",
    cn: "该工单将在一小时后到期。",
    ipa: "/ðɪs ˈtɪkɪt wɪl ɪkˈspaɪər ɪn wʌn aʊər/",
    tags: ["第1836句", "工单管理", "★★★★★"],
    when: "警告工单即将到期，需要优先处理或申请延期。这是交接时必须告知的紧急信息。",
    words: [
      { w: "expire", ipa: "/ɪkˈspaɪər/", pos: "动词", cn: "到期；过期", memory: "ex(出)+pire(呼吸)→呼出最后一口气→结束→到期", phonics: "ex 读 /ɪk/，pire 读 /spaɪər/，重音在第二音节。", collocations: [["ticket expires","工单到期"],["expire in","在……后到期"],["expiry date","到期日"]], examples: [["The ticket expires at 5 PM.","工单下午5点到期。"],["The PTW has expired.","PTW已过期。"]] }
    ],
    phrases: [
      { p: "will expire in", ipa: "/wɪl ɪkˈspaɪər ɪn/", cn: "将在……后到期", why: "will expire(将到期) + in + 时间段，表示从现在起多少时间后到期。" }
    ],
    grammar: [
      { q: "in + 时间段 表示「多久之后」", a: "in + 时间段 表示从现在起经过多长时间：\n✅ expire in one hour（一小时后到期）\n✅ expire in 30 minutes（30分钟后到期）\n✅ expire in two days（两天后到期）\n注意区分：in one hour = 一小时后（将来）；for one hour = 持续一小时（时长）。" }
    ],
    pattern: "This + 对象 + will expire in + 时间段",
    patternExamples: [
      { en: "The PTW will expire in two hours.", cn: "PTW将在两小时后到期。", words: [] },
      { en: "The certificate expires in 30 days.", cn: "证书30天后过期。", words: [] },
      { en: "The alarm will timeout in 15 minutes.", cn: "告警15分钟后将超时。", words: [] }
    ],
    thinking: "工单到期提醒是交接中必须传递的关键信息。\n如果下一班不知道工单即将到期，可能导致SLA违约。\n听到 will expire in one hour，应立即评估能否按时完成或需要升级。",
    pronunciation: "expire 重音在第二音节：ex-PIRE。\nin one hour 连读：in-one-hour /ɪn wʌn aʊər/。\n节奏：This TICK-et ｜ will ex-PIRE ｜ in ONE HOUR.",
    quiz: [
      { q: "该工单将在一小时后到期，怎么说？", a: "This ticket will expire in one hour." },
      { q: "「到期」用英语怎么说？", a: "expire (/ɪkˈspaɪər/)" }
    ]
  },
  {
    id: 1837,
    en: "This ticket has exceeded the SLA.",
    cn: "该工单已经超过SLA。",
    ipa: "/ðɪs ˈtɪkɪt hæz ˌɛksɪˈsiːdɪd ðə ˌɛs.ɛlˈeɪ/",
    tags: ["第1837句", "工单管理", "★★★★★"],
    when: "汇报工单已超时，这是严重的运维管理问题，需要立即上报并采取补救措施。",
    words: [
      { w: "exceeded", ipa: "/ɪkˈsiːdɪd/", pos: "动词（过去分词）", cn: "超过", memory: "ex(超出)+ceed(走)+ed→走出去了→超过", phonics: "ex 读 /ɪk/，ceed 读 /siːd/，ed 读 /ɪd/，重音在第二音节。", collocations: [["exceeded the SLA","超过SLA"],["exceeded the limit","超过限制"],["exceeded the threshold","超过阈值"]], examples: [["The SLA has been exceeded.","SLA已超时。"],["Do not exceed the limit.","不要超过限制。"]] }
    ],
    phrases: [
      { p: "has exceeded", ipa: "/hæz ˌɛksɪˈsiːdɪd/", cn: "已经超过", why: "has + 过去分词 = 现在完成时，表示过去发生的动作对现在有影响——已经超时了，现在仍是超时状态。" },
      { p: "exceeded the SLA", ipa: "/ˌɛksɪˈsiːdɪd ðə ˌɛs.ɛlˈeɪ/", cn: "超过SLA", why: "exceed(超过) + the SLA(服务等级协议) = 违反了服务协议承诺的时限。" }
    ],
    grammar: [
      { q: "现在完成时 has + V-ed 的用法", a: "has exceeded（现在完成时）表示：过去某个时刻超时了，到现在仍然是超时状态。\n✅ The ticket has exceeded the SLA.（工单已超过SLA。）→ 现在还是超时的\n❌ The ticket exceeded the SLA.（简单过去时）→ 只说过去超时了，不强调现在的状态\n在运维汇报中用现在完成时更准确，因为超时状态还在持续。" }
    ],
    pattern: "This + 对象 + has exceeded the + 标准",
    patternExamples: [
      { en: "The response time has exceeded the SLA.", cn: "响应时间已超过SLA。", words: [] },
      { en: "Temperature has exceeded the threshold.", cn: "温度已超过阈值。", words: [] },
      { en: "Power has exceeded the rated capacity.", cn: "电力已超过额定容量。", words: [] }
    ],
    thinking: "SLA超时是运维管理中的红线事件。\n一旦发生，需要：1) 立即上报管理层 2) 分析超时原因 3) 制定补救措施。\n交接时必须明确告知所有已超时的工单，确保下一班优先处理。",
    pronunciation: "exceeded 重音在第二音节：ex-CEED-ed。\nSLA 逐字母读：S-L-A。\n节奏：This TICK-et ｜ has ex-CEED-ed ｜ the S-L-A.",
    quiz: [
      { q: "该工单已经超过SLA，怎么说？", a: "This ticket has exceeded the SLA." },
      { q: "「超过」用英语怎么说？", a: "exceed (/ɪkˈsiːd/)" }
    ]
  },
  {
    id: 1838,
    en: "Please notify the duty manager immediately.",
    cn: "请立即通知值班经理。",
    ipa: "/pliːz ˈnoʊtɪfaɪ ðə ˈdjuːti ˈmænɪdʒər ɪˈmiːdiətli/",
    tags: ["第1838句", "工单管理", "★★★★★"],
    when: "紧急情况需要上报值班经理。SLA超时、严重告警、设备故障等情况都需要立即通知管理层。",
    words: [
      { w: "notify", ipa: "/ˈnoʊtɪfaɪ/", pos: "动词", cn: "通知", memory: "notice(注意)+fy(使)→使注意到→通知", phonics: "no 读 /noʊ/，ti 读 /tɪ/，fy 读 /faɪ/，重音在第一音节。", collocations: [["notify the manager","通知经理"],["notify immediately","立即通知"],["notify the team","通知团队"]], examples: [["Notify the duty manager.","通知值班经理。"],["I have notified the team.","我已通知团队。"]] },
      { w: "immediately", ipa: "/ɪˈmiːdiətli/", pos: "副词", cn: "立即；马上", memory: "immediate(立即的)+ly→立即地", phonics: "im 读 /ɪ/，me 读 /miː/，di 读 /dɪ/，ate 读 /ət/，ly 读 /li/，重音在第二音节。", collocations: [["notify immediately","立即通知"],["act immediately","立即行动"],["respond immediately","立即响应"]], examples: [["Please respond immediately.","请立即响应。"],["Escalate immediately.","立即升级。"]] }
    ],
    phrases: [
      { p: "notify immediately", ipa: "/ˈnoʊtɪfaɪ ɪˈmiːdiətli/", cn: "立即通知", why: "notify(通知) + immediately(立即) = 紧急通知，强调时间紧迫性。" },
      { p: "duty manager", ipa: "/ˈdjuːti ˈmænɪdʒər/", cn: "值班经理", why: "duty(值班) + manager(经理) = 当班期间的最高负责人。" }
    ],
    grammar: [
      { q: "immediately 的位置", a: "immediately 可以放在句末或动词后面：\n✅ Notify the manager immediately.（立即通知经理。）← 句末，最常见\n✅ Immediately notify the manager.（立即通知经理。）← 句首，更强调紧迫\n✅ Please notify the duty manager immediately.（请立即通知值班经理。）\n在指令中，句末位置最自然。" }
    ],
    pattern: "Please notify + 人 + immediately",
    patternExamples: [
      { en: "Notify the vendor immediately.", cn: "立即通知供应商。", words: [] },
      { en: "Notify the security team immediately.", cn: "立即通知安保团队。", words: [] },
      { en: "Notify the client immediately.", cn: "立即通知客户。", words: [] }
    ],
    thinking: "immediately 是运维中最紧迫的时间词。\n当听到 immediately 时，意味着问题已经严重到不能等待。\n值班经理是现场最高指挥，严重事件必须第一时间通知。",
    pronunciation: "immediately 五个音节，重音在第二音节：im-ME-di-ate-ly。\nnotify 重音在第一音节：NO-ti-fy。\n节奏：Please NO-ti-fy ｜ the DU-ty MAN-a-ger ｜ im-ME-di-ate-ly.",
    quiz: [
      { q: "请立即通知值班经理，怎么说？", a: "Please notify the duty manager immediately." },
      { q: "「立即」用英语怎么说？", a: "immediately (/ɪˈmiːdiətli/)" }
    ]
  },
  {
    id: 1839,
    en: "Please include this issue in the handover report.",
    cn: "请把这个问题写入交接班报告。",
    ipa: "/pliːz ɪnˈkluːd ðɪs ˈɪʃuː ɪn ðə ˈhændˌoʊvər rɪˈpɔːrt/",
    tags: ["第1839句", "工单管理", "★★★★★"],
    when: "要求将未解决问题记录在交接班报告中，确保信息传递给下一班。",
    words: [
      { w: "include", ipa: "/ɪnˈkluːd/", pos: "动词", cn: "包括；写入", memory: "in(进入)+clude(关闭)→关在里面→包含在内", phonics: "in 读 /ɪn/，clude 读 /kluːd/，重音在第二音节。", collocations: [["include in the report","写入报告"],["include the details","包括细节"],["include all items","包括所有项目"]], examples: [["Include this in the handover.","把这个写进交接。"],["All issues must be included.","所有问题都必须包含。"]] },
      { w: "issue", ipa: "/ˈɪʃuː/", pos: "名词", cn: "问题", memory: "issue = 问题/议题。比 problem 更中性，不暗示严重性。", phonics: "is 读 /ɪ/，sue 读 /ʃuː/。", collocations: [["open issue","未解决问题"],["pending issue","待处理问题"],["critical issue","严重问题"],["issue tracker","问题跟踪"]], examples: [["There is an open issue.","有一个未解决的问题。"],["List all pending issues.","列出所有待处理问题。"]] },
      { w: "handover", ipa: "/ˈhændˌoʊvər/", pos: "名词", cn: "交接班", memory: "hand(手)+over(过去)→把手上的事交过去→交接班", phonics: "hand 读 /hænd/，over 读 /oʊvər/。", collocations: [["handover report","交接班报告"],["shift handover","交接班"],["handover checklist","交接清单"]], examples: [["Prepare the handover report.","准备交接班报告。"],["Include in the handover.","写进交接里。"]] }
    ],
    phrases: [
      { p: "include in the handover report", ipa: "", cn: "写入交接班报告", why: "include(包含) + in the handover report(在交接班报告中) = 把信息记录到交接文档中。" },
      { p: "this issue", ipa: "/ðɪs ˈɪʃuː/", cn: "这个问题", why: "this(这个) + issue(问题) 指代当前讨论中的具体问题。" }
    ],
    grammar: [
      { q: "include A in B 的用法", a: "include + 内容 + in + 文档/列表，表示把某内容放进某个文档中。\n✅ Include this issue in the report.（把这个问题写进报告。）\n✅ Include all alarms in the handover.（把所有告警写进交接。）\n✅ Include the ticket number in the email.（把工单号写进邮件。）" }
    ],
    pattern: "Please include + 内容 + in the + 文档",
    patternExamples: [
      { en: "Include the SLA status in the report.", cn: "把SLA状态写入报告。", words: [] },
      { en: "Include the alarm count in the handover.", cn: "把告警数量写入交接。", words: [] },
      { en: "Include the ticket list in the email.", cn: "把工单清单写进邮件。", words: [] }
    ],
    thinking: "交接班报告是运维信息传递的核心载体。\n所有未解决的问题、待跟踪的告警、即将到期的SLA都必须写入。\n遗漏信息 = 下一班不知道 = 问题可能被忽视 = 事故风险。",
    pronunciation: "include 重音在第二音节：in-CLUDE。\nissue 读 /ˈɪʃuː/，注意 sh 音。\nhandover 重音在第一音节：HAND-o-ver。\n节奏：Please in-CLUDE ｜ this IS-sue ｜ in the HAND-o-ver re-PORT.",
    quiz: [
      { q: "请把这个问题写入交接班报告，怎么说？", a: "Please include this issue in the handover report." },
      { q: "「交接班」用英语怎么说？", a: "handover (/ˈhændˌoʊvər/)" }
    ]
  },
  {
    id: 1840,
    en: "The monitoring review has been completed successfully.",
    cn: "监控检查已经顺利完成。",
    ipa: "/ðə ˈmɒnɪtərɪŋ rɪˈvjuː hæz bɪn kəmˈpliːtɪd səkˈsɛsfəli/",
    tags: ["第1840句", "工单管理", "★★★★★"],
    when: "宣布监控检查流程全部完成。这是交接流程的收尾确认，标志一个完整的监控周期结束。",
    words: [
      { w: "monitoring", ipa: "/ˈmɒnɪtərɪŋ/", pos: "名词", cn: "监控", memory: "monitor(监视)+ing→持续监视的过程→监控", phonics: "mon 读 /mɒn/，i 读 /ɪ/，tor 读 /tər/，ing 读 /ɪŋ/。", collocations: [["monitoring review","监控检查"],["monitoring system","监控系统"],["continuous monitoring","持续监控"]], examples: [["Start the monitoring review.","开始监控检查。"],["Monitoring is active.","监控处于活动状态。"]] },
      { w: "review", ipa: "/rɪˈvjuː/", pos: "名词", cn: "检查；审查", memory: "re(再次)+view(看)→再看一遍→审查/检查", phonics: "re 读 /rɪ/，view 读 /vjuː/，重音在第二音节。", collocations: [["monitoring review","监控检查"],["code review","代码审查"],["management review","管理评审"]], examples: [["Complete the review.","完成检查。"],["The review is done.","检查已完成。"]] },
      { w: "completed", ipa: "/kəmˈpliːtɪd/", pos: "动词（过去分词）", cn: "完成", memory: "complete(完成)+ed→已经完成的", phonics: "com 读 /kəm/，plete 读 /pliːt/，ed 读 /ɪd/，重音在第二音节。", collocations: [["has been completed","已完成"],["successfully completed","顺利完成"],["task completed","任务完成"]], examples: [["The task is completed.","任务已完成。"],["All checks are completed.","所有检查已完成。"]] },
      { w: "successfully", ipa: "/səkˈsɛsfəli/", pos: "副词", cn: "成功地；顺利地", memory: "success(成功)+ful(充满)+ly→成功地", phonics: "suc 读 /sək/，cess 读 /sɛs/，ful 读 /fəl/，ly 读 /li/，重音在第二音节。", collocations: [["completed successfully","顺利完成"],["resolved successfully","成功解决"]], examples: [["The drill completed successfully.","演练顺利完成。"],["Issue resolved successfully.","问题成功解决。"]] }
    ],
    phrases: [
      { p: "monitoring review", ipa: "/ˈmɒnɪtərɪŋ rɪˈvjuː/", cn: "监控检查", why: "monitoring(监控) + review(检查) = 对监控系统和告警状态的全面审查。" },
      { p: "has been completed", ipa: "/hæz bɪn kəmˈpliːtɪd/", cn: "已经完成", why: "has been + 过去分词 = 现在完成时的被动语态，表示动作已被完成。" },
      { p: "completed successfully", ipa: "/kəmˈpliːtɪd səkˈsɛsfəli/", cn: "顺利完成", why: "successfully 作为副词修饰 completed，强调完成的质量和结果。" }
    ],
    grammar: [
      { q: "现在完成时被动语态 has been + V-ed", a: "has been + 过去分词 = 现在完成时的被动语态。\n表示：某个动作在过去被完成了，结果到现在仍然有效。\n✅ The review has been completed.（检查已完成。）← 被动，不强调谁完成的\n✅ The alarm has been acknowledged.（告警已确认。）\n✅ The ticket has been resolved.（工单已解决。）\n运维汇报中常用被动语态，因为重要的是结果而非谁做的。" }
    ],
    pattern: "The + 流程/任务 + has been completed + 副词",
    patternExamples: [
      { en: "The handover has been completed successfully.", cn: "交接班已顺利完成。", words: [] },
      { en: "The drill has been completed.", cn: "演练已完成。", words: [] },
      { en: "All checks have been completed.", cn: "所有检查已完成。", words: [] }
    ],
    thinking: "这句话是整个监控检查流程的收尾确认。\n说完这句话 = 告诉团队和下一班：本轮监控检查全部做完，没有遗漏。\n这是专业运维人员的标准收尾用语。",
    pronunciation: "monitoring 重音在第一音节：MON-i-tor-ing。\nreview 重音在第二音节：re-VIEW。\nsuccessfully 重音在第二音节：suc-CESS-ful-ly。\n节奏：The MON-i-tor-ing re-VIEW ｜ has been com-PLET-ed ｜ suc-CESS-ful-ly.",
    quiz: [
      { q: "监控检查已经顺利完成，怎么说？", a: "The monitoring review has been completed successfully." },
      { q: "「检查；审查」用英语怎么说？", a: "review (/rɪˈvjuː/)" }
    ]
  }
];

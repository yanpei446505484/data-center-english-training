// EXPORTS: ISentence, MOCK_SENTENCES_PART1B

import type { ISentence } from './sentenceLearning';

export type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART1B: ISentence[] = [
  {
    id: 16,
    en: "Please display the equipment overview.",
    cn: "请显示设备总览页面。",
    ipa: "/pliːz dɪˈspleɪ ðə ɪˈkwɪp.mənt ˈoʊ.vər.vjuː/",
    tags: ["第16句", "系统展示", "★★★★"],
    when: "切换到 BMS/DCIM 后，请求展示设备总览页面，查看所有关键设备的运行状态。",
    words: [
      { w: "display", ipa: "/dɪˈspleɪ/", pos: "动词", cn: "显示；展示", memory: "① dis = 向外；② play = 展示；③ display = 向外展示 = 显示。\n作名词 = 显示器/显示屏。", phonics: "dis 读 /dɪ/，play 读 /spleɪ/，重音在第二音节。", collocations: [["display the page", "显示页面"], ["display status", "显示状态"], ["main display", "主显示屏"]], examples: [["Display the alarm list.", "显示告警列表。"], ["The screen displays all equipment.", "屏幕显示所有设备。"]] },
      { w: "equipment", ipa: "/ɪˈkwɪp.mənt/", pos: "名词", cn: "设备；装备", memory: "① equip = 装备（动词）；② equipment = 被装备的东西 = 设备（名词）。\n注意：equipment 是不可数名词，不加 s。", phonics: "e 读 /ɪ/，quip 读 /kwɪp/，ment 读 /mənt/，重音在第二音节。", collocations: [["equipment overview", "设备总览"], ["equipment status", "设备状态"], ["critical equipment", "关键设备"]], examples: [["Check the equipment status.", "检查设备状态。"], ["All equipment is running normally.", "所有设备运行正常。"]] },
      { w: "overview", ipa: "/ˈoʊ.vər.vjuː/", pos: "名词", cn: "总览；概览", memory: "① over = 上方/全面；② view = 看；③ overview = 从上方全面看 = 总览/概览。", phonics: "o 读 /oʊ/，ver 读 /ər/，view 读 /vjuː/，重音在第一音节。", collocations: [["equipment overview", "设备总览"], ["system overview", "系统总览"], ["give an overview", "做一个总览"]], examples: [["Show me the equipment overview.", "给我看设备总览。"], ["I need an overview of all systems.", "我需要所有系统的总览。"]] },
    ],
    phrases: [
      { p: "equipment overview", ipa: "/ɪˈkwɪp.mənt ˈoʊ.vər.vjuː/", cn: "设备总览", why: "equipment = 设备，overview = 总览。设备总览页展示数据中心所有关键设备的运行状态汇总。" },
      { p: "Please display", ipa: "/pliːz dɪˈspleɪ/", cn: "请显示", why: "display 作动词表示「显示/展示」，比 open 更强调「展示给大家看」，适合投屏场景。" },
    ],
    grammar: [
      { q: "display 和 open 和 switch to 的区别？", a: "display = 显示/展示（强调呈现内容给大家看）。\nopen = 打开（一个新页面/文件）。\nswitch to = 切换（到已打开的页面）。\n✅ Please display the overview.（展示总览给大家看）\n✅ Please open the report.（打开报告文件）\n✅ Please switch to BMS.（切换到BMS页面）" },
    ],
    pattern: "Please display + 系统/模块 + overview",
    patternExamples: [
      { en: "Please display the power overview.", cn: "请显示供电总览。", words: [{ w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }] },
      { en: "Please display the cooling overview.", cn: "请显示制冷总览。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }] },
      { en: "Please display the network overview.", cn: "请显示网络总览。", words: [{ w: "network", ipa: "/ˈnɛtwɜːrk/", cn: "网络", phonics: "net 读 /nɛt/，work 读 /wɜːrk/" }] },
      { en: "Please display the security overview.", cn: "请显示安防总览。", words: [{ w: "security", ipa: "/sɪˈkjʊrɪti/", cn: "安防", phonics: "se 读 /sɪ/，curity 读 /kjʊrɪti/" }] },
    ],
    thinking: "英语展示指令：Please display + 展示内容。\n中文说「显示设备总览页面」，英语省略 page，直接说 display the equipment overview。\noverview 暗示这是一个汇总视图，不是详细列表。\n交接时先看 overview（总览），再深入 detail（详情）。",
    pronunciation: "equipment 重音在第二音节：e-QUIP-ment /ɪˈkwɪp.mənt/。\noverview 重音在第一音节：O-ver-view /ˈoʊ.vər.vjuː/。\n节奏：Please dis-PLAY ｜ the e-QUIP-ment ｜ O-ver-view.",
    quiz: [
      { q: "「请显示网络总览」怎么说？", a: "Please display the network overview." },
      { q: "equipment 能加 s 吗？", a: "不能。equipment 是不可数名词。❌ equipments（错）✅ equipment（对）" },
    ],
  },
  {
    id: 17,
    en: "Please display the power system overview.",
    cn: "请显示供电系统总览。",
    ipa: "/pliːz dɪˈspleɪ ðə ˈpaʊ.ər ˈsɪs.təm ˈoʊ.vər.vjuː/",
    tags: ["第17句", "供电系统", "★★★★★"],
    when: "设备总览后，重点查看供电系统状态。供电是数据中心最关键的基础设施，UPS 和发电机状态必须优先确认。",
    words: [
      { w: "power", ipa: "/ˈpaʊ.ər/", pos: "名词", cn: "电力；供电", memory: "① power = 力量/电力；② power system = 供电系统。\n在数据中心：power 涵盖市电、UPS、发电机等。", phonics: "pow 读 /paʊ/，er 读 /ər/，重音在第一音节。", collocations: [["power system", "供电系统"], ["power supply", "电源"], ["power failure", "断电"], ["power outage", "停电"]], examples: [["Check the power system.", "检查供电系统。"], ["There was a power failure last night.", "昨晚发生了断电。"]] },
      { w: "system", ipa: "/ˈsɪs.təm/", pos: "名词", cn: "系统", memory: "① system = 系统/体系；② power system = 供电系统。\n数据中心有 BMS/DCIM/EPMS 等多个管理系统。", phonics: "sys 读 /sɪs/，tem 读 /təm/，重音在第一音节。", collocations: [["power system", "供电系统"], ["cooling system", "制冷系统"], ["alarm system", "告警系统"]], examples: [["The system is running normally.", "系统运行正常。"], ["All systems are online.", "所有系统在线。"]] },
    ],
    phrases: [
      { p: "power system overview", ipa: "/ˈpaʊ.ər ˈsɪs.təm ˈoʊ.vər.vjuː/", cn: "供电系统总览", why: "供电系统包括市电输入、UPS、配电柜、发电机等。overview 页面展示各组件的运行状态和告警。" },
    ],
    grammar: [
      { q: "名词修饰名词的顺序？", a: "英语中多个名词连续修饰时，最靠近中心名词的是直接修饰语。\npower system overview = 供电（power）+ 系统（system）+ 总览（overview）。\n中心词是 overview，前面两个名词都是修饰语。\n✅ power system overview（对）\n❌ overview system power（错——英语修饰在前，中心在后）" },
    ],
    pattern: "Please display the + 子系统名 + overview",
    patternExamples: [
      { en: "Please display the UPS overview.", cn: "请显示UPS总览。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }] },
      { en: "Please display the generator overview.", cn: "请显示发电机总览。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "Please display the PDU overview.", cn: "请显示配电单元总览。", words: [{ w: "pdu", ipa: "/ˌpiːˈdiːˈjuː/", cn: "配电单元", phonics: "P-D-U 逐字母读" }] },
    ],
    thinking: "英语子系统展示：Please display the X system overview。\n中文说「显示供电系统总览」，结构完全对应。\n供电是数据中心第一优先级：供电 → 制冷 → 环境 → 安防。\n交接时按这个顺序依次展示各子系统。",
    pronunciation: "power 双元音要饱满：/ˈpaʊ.ər/。\nsystem 的 y 读短音 /ɪ/：/ˈsɪs.təm/。\n节奏：Please dis-PLAY ｜ the POW-er ｜ SYS-tem ｜ O-ver-view.",
    quiz: [
      { q: "「请显示UPS总览」怎么说？", a: "Please display the UPS overview." },
      { q: "供电系统包含哪些组件？", a: "市电输入、UPS（不间断电源）、配电柜（PDU）、发电机（Generator）等。" },
    ],
  },
  {
    id: 18,
    en: "Please display the cooling system overview.",
    cn: "请显示制冷系统总览。",
    ipa: "/pliːz dɪˈspleɪ ðə ˈkuː.lɪŋ ˈsɪs.təm ˈoʊ.vər.vjuː/",
    tags: ["第18句", "制冷系统", "★★★★★"],
    when: "供电确认后，查看制冷系统状态。数据中心散热是第二大关键基础设施，精密空调和冷却塔状态需确认。",
    words: [
      { w: "cooling", ipa: "/ˈkuː.lɪŋ/", pos: "名词/形容词", cn: "制冷；冷却", memory: "① cool = 凉爽的（形容词）；② cool + ing = 正在冷却的 → cooling。\ncooling system = 制冷系统（精密空调 CRAC/CRAH + 冷却塔）。", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/，重音在第一音节。", collocations: [["cooling system", "制冷系统"], ["cooling capacity", "制冷量"], ["cooling tower", "冷却塔"]], examples: [["The cooling system is normal.", "制冷系统正常。"], ["Check the cooling capacity.", "检查制冷量。"]] },
    ],
    phrases: [
      { p: "cooling system overview", ipa: "/ˈkuː.lɪŋ ˈsɪs.təm ˈoʊ.vər.vjuː/", cn: "制冷系统总览", why: "制冷系统包括精密空调（CRAC/CRAH）、冷冻水系统、冷却塔等。overview 展示各机组运行状态和温度参数。" },
    ],
    grammar: [
      { q: "这句和第17句结构一样吗？", a: "完全一样：Please display the + 子系统名 + overview。\n只需替换子系统名称：power → cooling → environmental → 等等。\n掌握这个模板，可以展示任何子系统的总览页面。" },
    ],
    pattern: "Please display the + 子系统名 + overview",
    patternExamples: [
      { en: "Please display the HVAC overview.", cn: "请显示暖通空调总览。", words: [{ w: "hvac", ipa: "/ˌeɪtʃˈviːˈeɪˈsiː/", cn: "暖通", phonics: "H-V-A-C 逐字母读" }] },
      { en: "Please display the chiller overview.", cn: "请显示冷水机组总览。", words: [{ w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }] },
      { en: "Please display the CRAC overview.", cn: "请显示精密空调总览。", words: [] },
    ],
    thinking: "供电和制冷是数据中心两大命脉。\n交接顺序：供电（power）→ 制冷（cooling）→ 环境（environmental）→ 安防（security）。\n每个子系统都用 Please display the X overview 这个句型。\n掌握了这个模板，你可以展示任何系统。",
    pronunciation: "cooling 的 oo 读长音 /uː/：/ˈkuː.lɪŋ/。\n节奏：Please dis-PLAY ｜ the COOL-ing ｜ SYS-tem ｜ O-ver-view.",
    quiz: [
      { q: "「请显示冷水机组总览」怎么说？", a: "Please display the chiller overview." },
      { q: "数据中心交接时先看供电还是先看制冷？", a: "先看供电（power），再看制冷（cooling）。供电是第一优先级。" },
    ],
  },
  {
    id: 19,
    en: "Please display the environmental monitoring page.",
    cn: "请显示环境监控页面。",
    ipa: "/pliːz dɪˈspleɪ ðə ɪnˌvaɪ.rənˈmɛn.təl ˈmɒn.ɪ.tər.ɪŋ peɪdʒ/",
    tags: ["第19句", "环境监控", "★★★★"],
    when: "制冷确认后，查看环境监控数据，包括温度、湿度、漏水检测等传感器数据。",
    words: [
      { w: "environmental", ipa: "/ɪnˌvaɪ.rənˈmɛn.təl/", pos: "形容词", cn: "环境的", memory: "① environment = 环境（名词）；② environmental = 环境的（形容词）。\nenvironmental monitoring = 环境监控。", phonics: "en 读 /ɪn/，vi 读 /vaɪ/，ron 读 /rən/，men 读 /mɛn/，tal 读 /təl/，共5个音节。重音在第三音节。", collocations: [["environmental monitoring", "环境监控"], ["environmental sensor", "环境传感器"], ["environmental data", "环境数据"]], examples: [["Check the environmental data.", "查看环境数据。"], ["The environmental sensors are normal.", "环境传感器正常。"]] },
      { w: "monitoring", ipa: "/ˈmɒn.ɪ.tər.ɪŋ/", pos: "名词", cn: "监控；监测", memory: "① monitor = 监视/监控（动词）；② monitor + ing = 监控（名词/形容词）。\nmonitoring page = 监控页面。", phonics: "mon 读 /mɒn/，i 读 /ɪ/，tor 读 /tər/，ing 读 /ɪŋ/，重音在第一音节。", collocations: [["monitoring page", "监控页面"], ["monitoring system", "监控系统"], ["real-time monitoring", "实时监控"]], examples: [["Open the monitoring page.", "打开监控页面。"], ["We need 24/7 monitoring.", "我们需要全天候监控。"]] },
    ],
    phrases: [
      { p: "environmental monitoring", ipa: "/ɪnˌvaɪ.rənˈmɛn.təl ˈmɒn.ɪ.tər.ɪŋ/", cn: "环境监控", why: "环境监控涵盖温度、湿度、烟雾、漏水等传感器数据，确保机房环境在安全范围内。" },
    ],
    grammar: [
      { q: "为什么这里用 page 而不是 overview？", a: "page = 页面（泛指），overview = 总览（特指汇总视图）。\nmonitoring page = 监控页面（可以是详细数据页）。\nsystem overview = 系统总览（强调汇总概览）。\n两者可以互换，page 更通用，overview 更强调「总览」。" },
    ],
    pattern: "Please display the + 功能模块 + page",
    patternExamples: [
      { en: "Please display the temperature monitoring page.", cn: "请显示温度监控页面。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "monitoring", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }] },
      { en: "Please display the humidity monitoring page.", cn: "请显示湿度监控页面。", words: [{ w: "humidity", ipa: "/hjuːˈmɪdɪti/", cn: "湿度", phonics: "hu 读 /hjuː/，midity 读 /mɪdɪti/" }, { w: "monitoring", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }] },
      { en: "Please display the leak detection page.", cn: "请显示漏水检测页面。", words: [] },
    ],
    thinking: "环境监控关注的核心参数：温度（temperature）、湿度（humidity）、烟雾（smoke）、漏水（water leak）。\n交接时确认所有环境参数在正常范围内。\nenvironmental 有5个音节，是交接中最长的单词之一，多练习发音。",
    pronunciation: "environmental 五个音节：en-VI-ron-MEN-tal /ɪnˌvaɪ.rənˈmɛn.təl/。\nmonitoring 三个音节：MON-i-tor-ing /ˈmɒn.ɪ.tər.ɪŋ/。\n节奏：Please dis-PLAY ｜ the en-VI-ron-MEN-tal ｜ MON-i-tor-ing ｜ PAGE.",
    quiz: [
      { q: "「请显示温度监控页面」怎么说？", a: "Please display the temperature monitoring page." },
      { q: "环境监控包括哪些传感器数据？", a: "温度（temperature）、湿度（humidity）、烟雾（smoke）、漏水（water leak）等。" },
    ],
  },
  {
    id: 20,
    en: "Please display the energy consumption page.",
    cn: "请显示能耗页面。",
    ipa: "/pliːz dɪˈspleɪ ðə ˈɛn.ər.dʒi kənˈsʌmp.ʃən peɪdʒ/",
    tags: ["第20句", "能耗管理", "★★★★"],
    when: "查看完环境数据后，展示能耗页面，了解数据中心的 PUE 值和各区域用电情况。",
    words: [
      { w: "energy", ipa: "/ˈɛn.ər.dʒi/", pos: "名词", cn: "能源；能量", memory: "① energy = 能量/能源；② energy consumption = 能耗/能源消耗。\n数据中心是能耗大户，PUE（电力使用效率）是核心指标。", phonics: "en 读 /ɛn/，er 读 /ər/，gy 读 /dʒi/，重音在第一音节。", collocations: [["energy consumption", "能耗"], ["energy efficiency", "能源效率"], ["energy saving", "节能"]], examples: [["Check the energy consumption.", "查看能耗数据。"], ["We need to improve energy efficiency.", "我们需要提高能源效率。"]] },
      { w: "consumption", ipa: "/kənˈsʌmp.ʃən/", pos: "名词", cn: "消耗；消费", memory: "① consume = 消耗/消费（动词）；② consumption = 消耗/消费（名词）。\nenergy consumption = 能源消耗 = 能耗。", phonics: "con 读 /kən/，sump 读 /sʌmp/，tion 读 /ʃən/，重音在第二音节。", collocations: [["power consumption", "电力消耗"], ["water consumption", "用水量"], ["fuel consumption", "燃料消耗"]], examples: [["Power consumption is high today.", "今天电力消耗很高。"], ["Monitor the water consumption.", "监控用水量。"]] },
    ],
    phrases: [
      { p: "energy consumption", ipa: "/ˈɛn.ər.dʒi kənˈsʌmp.ʃən/", cn: "能耗", why: "energy = 能源，consumption = 消耗。能耗是数据中心运营的核心 KPI，通常用 PUE（Power Usage Effectiveness）衡量。" },
    ],
    grammar: [
      { q: "consumption 和 consume 的关系？", a: "consume 是动词（消耗），consumption 是名词（消耗量/消耗）。\n✅ We consume a lot of energy.（动词：我们消耗大量能源。）\n✅ Energy consumption is high.（名词：能耗很高。）\n类似：produce → production, describe → description。" },
    ],
    pattern: "Please display the + 指标/数据 + page",
    patternExamples: [
      { en: "Please display the PUE page.", cn: "请显示PUE页面。", words: [] },
      { en: "Please display the power usage page.", cn: "请显示用电页面。", words: [{ w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }] },
      { en: "Please display the carbon footprint page.", cn: "请显示碳足迹页面。", words: [] },
    ],
    thinking: "能耗管理是数据中心运营的重要指标。\n核心概念：PUE（Power Usage Effectiveness）= 总能耗 / IT 设备能耗。\nPUE 越接近 1.0 越高效。\n交接时关注能耗趋势，是否有异常波动。",
    pronunciation: "energy 重音在第一音节：EN-er-gy /ˈɛn.ər.dʒi/。\nconsumption 重音在第二音节：con-SUMP-tion /kənˈsʌmp.ʃən/。\n节奏：Please dis-PLAY ｜ the EN-er-gy ｜ con-SUMP-tion ｜ PAGE.",
    quiz: [
      { q: "「请显示PUE页面」怎么说？", a: "Please display the PUE page." },
      { q: "PUE 越接近什么值越高效？", a: "PUE 越接近 1.0 越高效。PUE = 总能耗 / IT 设备能耗。" },
    ],
  },
  {
    id: 21,
    en: "Is the screen visible to everyone?",
    cn: "大家都能看清屏幕吗？",
    ipa: "/ɪz ðə skriːn ˈvɪz.ə.bəl tuː ˈɛv.ri.wʌn/",
    tags: ["第21句", "确认沟通", "★★★★"],
    when: "展示多个页面后，再次确认所有人都能看清屏幕内容，确保信息传达到位。",
    words: [
      { w: "visible", ipa: "/ˈvɪz.ə.bəl/", pos: "形容词", cn: "可见的；看得到的", memory: "① vis = 看（拉丁语 videre）；② ible = 能…的；③ visible = 能看到的 = 可见的。\n反义词：invisible = 不可见的。", phonics: "vis 读 /vɪz/，i 读 /ə/，ble 读 /bəl/，重音在第一音节。", collocations: [["visible to everyone", "所有人都能看到"], ["clearly visible", "清晰可见"], ["not visible", "看不到"]], examples: [["Is this visible to you?", "你能看到这个吗？"], ["The alarm is visible on the screen.", "告警在屏幕上可以看到。"]] },
    ],
    phrases: [
      { p: "visible to everyone", ipa: "/ˈvɪz.ə.bəl tuː ˈɛv.ri.wʌn/", cn: "所有人都能看到", why: "visible = 可见的，to everyone = 对每个人来说。确认投屏效果时常用的表达。" },
    ],
    grammar: [
      { q: "这句和第4句（Can everyone see）有什么区别？", a: "Can everyone see the screen clearly? = 大家能不能看清？（主动看）\nIs the screen visible to everyone? = 屏幕对大家来说可见吗？（被动可见）\n意思相同，但 visible 句型更正式，强调屏幕本身的可见性。\n交接中两种说法都可以用，交替使用避免重复。" },
    ],
    pattern: "Is + 对象 + visible to + 人？",
    patternExamples: [
      { en: "Is the chart visible to everyone?", cn: "图表大家都能看到吗？", words: [{ w: "everyone", ipa: "/ˈɛvriwʌn/", cn: "大家", phonics: "every 读 /ɛvri/，one 读 /wʌn/" }] },
      { en: "Is the text visible from the back?", cn: "后面能看到文字吗？", words: [] },
      { en: "Is the dashboard visible on the big screen?", cn: "大屏上能看到仪表盘吗？", words: [{ w: "dashboard", ipa: "/ˈdæʃbɔːrd/", cn: "仪表盘", phonics: "dash 读 /dæʃ/，board 读 /bɔːrd/" }] },
    ],
    thinking: "英语可见性确认两种说法：\n① Can everyone see X?（大家能看到X吗？——主动）\n② Is X visible to everyone?（X对大家可见吗？——被动）\nvisible 来自拉丁语 vis（看），同族词：vision（视觉）、visit（参观=去看）。\n交接中交替使用两种说法，显得语言丰富。",
    pronunciation: "visible 重音在第一音节：VIS-i-ble /ˈvɪz.ə.bəl/。\nto 弱读为 /tə/。\n节奏：Is the SCREEN ｜ VIS-i-ble ｜ to EV-ery-one?",
    quiz: [
      { q: "用 visible 句型问「图表大家能看到吗」？", a: "Is the chart visible to everyone?" },
      { q: "visible 的反义词是什么？", a: "invisible = 不可见的。in- 是否定前缀。" },
    ],
  },
  {
    id: 22,
    en: "If you have any questions, please stop me at any time.",
    cn: "如果有问题，请随时打断我。",
    ipa: "/ɪf juː hæv ˈɛn.i ˈkwɛs.tʃənz pliːz stɒp miː æt ˈɛn.i taɪm/",
    tags: ["第22句", "沟通礼仪", "★★★★★"],
    when: "开始正式交接内容前，鼓励听众随时提问，营造开放沟通的交接氛围。",
    words: [
      { w: "question", ipa: "/ˈkwɛs.tʃən/", pos: "名词", cn: "问题；疑问", memory: "① quest = 寻求/追问；② ion = 名词后缀；③ question = 寻求的东西 = 问题。\n注意：question ≠ problem（question 是疑问，problem 是困难/故障）。", phonics: "ques 读 /kwɛs/，tion 读 /tʃən/，重音在第一音节。", collocations: [["any questions", "任何问题"], ["ask a question", "提问"], ["answer a question", "回答问题"]], examples: [["Do you have any questions?", "你有什么问题吗？"], ["Let me answer your question.", "让我回答你的问题。"]] },
      { w: "stop", ipa: "/stɒp/", pos: "动词", cn: "打断；停止", memory: "① stop = 停止；② stop me = 打断我（让我停下来）。\n在交接中：stop me = 打断我的讲话来提问。", phonics: "st 读 /st/，op 读 /ɒp/。", collocations: [["stop me", "打断我"], ["stop the process", "停止流程"], ["stop the alarm", "消除告警"]], examples: [["Please stop me if unclear.", "如果不清楚请打断我。"], ["Stop the alarm first.", "先消除告警。"]] },
    ],
    phrases: [
      { p: "stop me at any time", ipa: "/stɒp miː æt ˈɛn.i taɪm/", cn: "随时打断我", why: "stop me = 打断我，at any time = 在任何时候 = 随时。表示开放态度，鼓励提问。" },
      { p: "If you have any questions", ipa: "/ɪf juː hæv ˈɛn.i ˈkwɛs.tʃənz/", cn: "如果有问题", why: "if = 如果，any questions = 任何问题。这是英语中最常用的条件句开场白。" },
    ],
    grammar: [
      { q: "If 条件句的结构？", a: "If + 条件（从句），+ 请求/建议（主句）。\n✅ If you have questions, please stop me.（如果有问题，请打断我。）\n✅ If the alarm is critical, escalate immediately.（如果告警是严重的，立即升级。）\n条件句用 if 引导，主句给出行动指令。" },
    ],
    pattern: "If you have any questions, please + 动作 + at any time",
    patternExamples: [
      { en: "If you have any questions, please ask at any time.", cn: "如果有问题，请随时提问。", words: [] },
      { en: "If anything is unclear, please let me know.", cn: "如果有不清楚的地方，请告诉我。", words: [] },
      { en: "If you need more details, please ask.", cn: "如果需要更多细节，请问。", words: [] },
    ],
    thinking: "英语条件句沟通：If + 条件，please + 动作。\n中文说「有问题随时打断我」，英语用 if 条件句表达。\nstop me at any time 体现专业和开放——交接不是单方面汇报，而是双向沟通。\n这句话在每个交接开始时都应该说，建立信任。",
    pronunciation: "If 弱读为 /ɪf/。\nquestions 的 s 读 /z/。\nat any time 连读：a-ny-time /æt ˈɛni taɪm/。\n节奏：If you HAVE ｜ any QUES-tions ｜ please STOP me ｜ at ANY TIME.",
    quiz: [
      { q: "「如果不清楚请告诉我」怎么说？", a: "If anything is unclear, please let me know." },
      { q: "question 和 problem 有什么区别？", a: "question = 疑问/提问（需要回答），problem = 问题/故障（需要解决）。" },
    ],
  },
  {
    id: 23,
    en: "Let's go through today's key events first.",
    cn: "我们先看今天的重要事件。",
    ipa: "/lɛts ɡoʊ θruː təˈdeɪz kiː ɪˈvɛnts fɜːrst/",
    tags: ["第23句", "流程引导", "★★★★★"],
    when: "确认沟通后，宣布交接的第一个议题——回顾今天的重要事件（告警、故障、维护等）。",
    words: [
      { w: "through", ipa: "/θruː/", pos: "介词", cn: "通过；逐一", memory: "① through = 穿过/通过；② go through = 逐一检查/过一遍。\ngo through the events = 逐一查看事件。", phonics: "th 读 /θ/（舌尖轻触上齿），r 读 /r/，ough 读 /uː/。", collocations: [["go through", "逐一检查"], ["walk through", "演示讲解"], ["look through", "浏览"]], examples: [["Let's go through the list.", "我们逐一检查列表。"], ["I'll walk you through the process.", "我给你演示流程。"]] },
      { w: "key", ipa: "/kiː/", pos: "形容词", cn: "关键的；重要的", memory: "① key = 钥匙（名词）；② 作形容词 = 关键的/核心的。\nkey events = 关键事件 = 重要事件。", phonics: "k 读 /k/，ey 读 /iː/。", collocations: [["key events", "重要事件"], ["key metrics", "关键指标"], ["key findings", "关键发现"]], examples: [["Today's key events are listed here.", "今天的重要事件列在这里。"], ["PUE is a key metric.", "PUE是关键指标。"]] },
      { w: "event", ipa: "/ɪˈvɛnt/", pos: "名词", cn: "事件；事项", memory: "① e = 出；② vent = 来；③ event = 出来的事 = 发生的事 = 事件。\nkey events = 重要事件（告警、故障、维护、施工等）。", phonics: "e 读 /ɪ/，vent 读 /vɛnt/，重音在第二音节。", collocations: [["key events", "重要事件"], ["security event", "安全事件"], ["incident event", "故障事件"]], examples: [["Any notable events today?", "今天有什么值得关注的事件吗？"], ["Log the security event.", "记录安全事件。"]] },
    ],
    phrases: [
      { p: "go through", ipa: "/ɡoʊ θruː/", cn: "逐一检查；过一遍", why: "go = 走，through = 穿过。go through = 从头到尾走一遍 = 逐一检查。交接中指逐项审查。" },
      { p: "key events", ipa: "/kiː ɪˈvɛnts/", cn: "重要事件", why: "key = 关键的，events = 事件。交接中的 key events 包括告警触发、设备故障、维护完成等。" },
    ],
    grammar: [
      { q: "go through 和 review 的区别？", a: "go through = 逐一过一遍（强调逐项、按顺序）。\nreview = 回顾/审查（可以是整体概览）。\n✅ Let's go through the events first.（逐一看每个事件）\n✅ Let's review the operation status.（整体回顾运行状态）\ngo through 更强调「一个一个来」，review 更强调「全面看」。" },
    ],
    pattern: "Let's go through + 内容 + first",
    patternExamples: [
      { en: "Let's go through the alarm list first.", cn: "我们先过一遍告警列表。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Let's go through the tickets first.", cn: "我们先过一遍工单。", words: [{ w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "Let's go through the incidents first.", cn: "我们先过一遍事件。", words: [] },
    ],
    thinking: "英语逐项审查：go through + 审查内容 + first。\nfirst = 首先/先，暗示还有其他议题。\n交接流程：go through events first → then alarms → then tickets → then maintenance。\n用 first 标记第一项，用 then/next 标记后续项。",
    pronunciation: "go through 的 th 要咬舌：/ɡoʊ θruː/。\nkey events 连读：key-ye-vents /kiː jɪˈvɛnts/。\n节奏：Let's GO THROUGH ｜ to-DAY'S ｜ KEY E-vents ｜ FIRST.",
    quiz: [
      { q: "「我们先过一遍工单」怎么说？", a: "Let's go through the tickets first." },
      { q: "go through 和 review 哪个更强调逐项？", a: "go through 更强调逐项（一个一个来），review 更强调全面回顾。" },
    ],
  },
  {
    id: 24,
    en: "We will review all open tickets today.",
    cn: "我们今天会检查所有未关闭的工单。",
    ipa: "/wiː wɪl rɪˈvjuː ɔːl ˈoʊ.pən ˈtɪk.ɪts təˈdeɪ/",
    tags: ["第24句", "工单审查", "★★★★★"],
    when: "预告交接内容之一——逐项审查所有未关闭的工单（open tickets），确认处理进度。",
    words: [
      { w: "ticket", ipa: "/ˈtɪk.ɪt/", pos: "名词", cn: "工单；服务请求", memory: "① ticket = 票/工单；② 在 IT 运维中 ticket = 服务工单/故障单。\nopen ticket = 未关闭的工单。", phonics: "tick 读 /tɪk/，et 读 /ɪt/，重音在第一音节。", collocations: [["open ticket", "未关闭工单"], ["close ticket", "关闭工单"], ["ticket number", "工单号"]], examples: [["How many open tickets?", "有多少未关闭工单？"], ["Please close this ticket.", "请关闭这个工单。"]] },
      { w: "open", ipa: "/ˈoʊ.pən/", pos: "形容词", cn: "未关闭的；开着的", memory: "① open = 打开的/未关闭的；② open ticket = 未关闭的工单 = 还在处理中。\n反义词：closed = 已关闭的。", phonics: "o 读 /oʊ/，pen 读 /pən/。", collocations: [["open ticket", "未关闭工单"], ["open issue", "未解决问题"], ["open alarm", "未恢复告警"]], examples: [["The ticket is still open.", "工单还没关闭。"], ["All alarms are open.", "所有告警都未恢复。"]] },
    ],
    phrases: [
      { p: "open tickets", ipa: "/ˈoʊ.pən ˈtɪk.ɪts/", cn: "未关闭的工单", why: "open = 未关闭的，tickets = 工单。交接时必须逐一确认每个 open ticket 的处理进度和下一步行动。" },
    ],
    grammar: [
      { q: "We will 和 Let's 的区别？", a: "We will = 我们将会（陈述计划，语气确定）。\nLet's = 让我们（提议，语气邀请）。\n✅ We will review all tickets.（陈述：我们会检查所有工单——这是计划）\n✅ Let's review the tickets.（提议：我们来检查工单——邀请大家一起）\n交接中：预告议程用 We will，发起动作用 Let's。" },
    ],
    pattern: "We will review all + 状态 + 名词 + today",
    patternExamples: [
      { en: "We will review all active alarms today.", cn: "我们今天会检查所有活动告警。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "active", ipa: "/ˈæktɪv/", cn: "活动", phonics: "act 读 /ækt/，ive 读 /ɪv/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "We will review all pending tasks today.", cn: "我们今天会检查所有待办任务。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
      { en: "We will review all maintenance records today.", cn: "我们今天会检查所有维护记录。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
    ],
    thinking: "英语预告议程：We will review all X today。\n中文说「今天会检查所有未关闭工单」。\nopen ticket 是 IT 运维核心概念：open = 未关闭/进行中，closed = 已关闭/已完成。\n交接时 open tickets 的数量和处理进度是必查项。",
    pronunciation: "will 弱读为 /wɪl/ 或 /əl/。\nopen tickets 连读：o-pen-ti-ckets。\n节奏：We will re-VIEW ｜ all O-pen ｜ TICK-ets ｜ to-DAY.",
    quiz: [
      { q: "「我们今天会检查所有待办任务」怎么说？", a: "We will review all pending tasks today." },
      { q: "open ticket 是什么意思？", a: "未关闭的工单，即还在处理中、尚未解决的服务请求。" },
    ],
  },
  {
    id: 25,
    en: "We will review all active alarms.",
    cn: "我们会检查所有活动告警。",
    ipa: "/wiː wɪl rɪˈvjuː ɔːl ˈæk.tɪv əˈlɑːmz/",
    tags: ["第25句", "告警审查", "★★★★★"],
    when: "预告交接内容之二——逐条审查所有活动告警，确认每条告警的状态和处理方案。",
    words: [
      { w: "all", ipa: "/ɔːl/", pos: "限定词", cn: "所有；全部", memory: "① all = 所有的/全部的；② all active alarms = 所有活动告警。\n强调「一个不漏」。", phonics: "all 读 /ɔːl/，长音。", collocations: [["all alarms", "所有告警"], ["all tickets", "所有工单"], ["all systems", "所有系统"]], examples: [["Check all alarms.", "检查所有告警。"], ["All systems are normal.", "所有系统正常。"]] },
    ],
    phrases: [
      { p: "all active alarms", ipa: "/ɔːl ˈæk.tɪv əˈlɑːmz/", cn: "所有活动告警", why: "all = 所有，active = 活动的，alarms = 告警。交接时必须逐条确认每一条活动告警的状态和处理方案。" },
    ],
    grammar: [
      { q: "这句和第24句结构一样吗？", a: "完全一样：We will review all + 修饰语 + 名词。\n第24句：all open tickets（所有未关闭工单）。\n第25句：all active alarms（所有活动告警）。\n替换修饰语和名词就能生成新的交接议程项。" },
    ],
    pattern: "We will review all + 修饰语 + 名词",
    patternExamples: [
      { en: "We will review all critical alarms.", cn: "我们会检查所有严重告警。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "critical", ipa: "/ˈkrɪtɪkəl/", cn: "严重", phonics: "crit 读 /krɪt/，ical 读 /ɪkəl/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "We will review all safety incidents.", cn: "我们会检查所有安全事件。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }] },
      { en: "We will review all equipment faults.", cn: "我们会检查所有设备故障。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }, { w: "faults", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }] },
    ],
    thinking: "交接议程预告系列句：\n① We will review all open tickets.（工单）\n② We will review all active alarms.（告警）\n③ We will review all maintenance work.（维护）\n用同一句型列出所有交接议题，条理清晰。",
    pronunciation: "all 长音 /ɔːl/，不要读成 /ɑːl/。\nactive alarms 连读：ac-tive-alarms /æk.tɪ.və.lɑːmz/。\n节奏：We will re-VIEW ｜ ALL ｜ AC-tive ｜ ALARMS.",
    quiz: [
      { q: "「我们会检查所有严重告警」怎么说？", a: "We will review all critical alarms." },
      { q: "交接时为什么要说 all active alarms？", a: "强调「一条不漏」，确保每条活动告警都被确认和处理。" },
    ],
  },
  {
    id: 26,
    en: "We will review today's maintenance work.",
    cn: "我们会检查今天的维护工作。",
    ipa: "/wiː wɪl rɪˈvjuː təˈdeɪz ˈmeɪn.tən.əns wɜːrk/",
    tags: ["第26句", "维护审查", "★★★★"],
    when: "预告交接内容之三——检查今天完成的和进行中的维护工作，确认设备维护状态。",
    words: [
      { w: "maintenance", ipa: "/ˈmeɪn.tən.əns/", pos: "名词", cn: "维护；保养", memory: "① maintain = 维护（动词）；② maintenance = 维护（名词）。\n注意拼写：main-ten-ance，不是 main-tain-ance。", phonics: "main 读 /meɪn/，te 读 /tə/，nance 读 /nəns/，重音在第一音节。", collocations: [["maintenance work", "维护工作"], ["preventive maintenance", "预防性维护"], ["maintenance schedule", "维护计划"]], examples: [["Any maintenance work today?", "今天有维护工作吗？"], ["The UPS maintenance is complete.", "UPS维护已完成。"]] },
    ],
    phrases: [
      { p: "maintenance work", ipa: "/ˈmeɪn.tən.əns wɜːrk/", cn: "维护工作", why: "maintenance = 维护，work = 工作。维护工作包括预防性维护（PM）、纠正性维护（CM）等。" },
    ],
    grammar: [
      { q: "maintenance 的动词形式是什么？", a: "maintain（动词）→ maintenance（名词）。\n✅ We maintain the equipment.（动词：我们维护设备。）\n✅ The maintenance is scheduled.（名词：维护已排期。）\n注意拼写差异：maintain → maintenance（不是 maintainance）。" },
    ],
    pattern: "We will review today's + 工作类型",
    patternExamples: [
      { en: "We will review today's inspection work.", cn: "我们会检查今天的巡检工作。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
      { en: "We will review today's testing work.", cn: "我们会检查今天的测试工作。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "testing", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "We will review today's repair work.", cn: "我们会检查今天的维修工作。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "repair", ipa: "/rɪˈpeər/", cn: "维修", phonics: "re 读 /rɪ/，pair 读 /peər/" }] },
    ],
    thinking: "维护工作是交接的重要内容。\n维护类型：PM（Preventive Maintenance 预防性维护）、CM（Corrective Maintenance 纠正性维护）。\n交接时确认：哪些维护已完成？哪些在进行中？哪些待排期？",
    pronunciation: "maintenance 三个音节：MAIN-te-nance /ˈmeɪn.tən.əns/。\n注意不要读成 main-TAIN-ance。\n节奏：We will re-VIEW ｜ to-DAY'S ｜ MAIN-te-nance ｜ WORK.",
    quiz: [
      { q: "「我们会检查今天的巡检工作」怎么说？", a: "We will review today's inspection work." },
      { q: "maintenance 的动词是什么？", a: "maintain（维护）。注意拼写：maintain → maintenance。" },
    ],
  },
  {
    id: 27,
    en: "We will review today's construction work.",
    cn: "我们会检查今天的施工工作。",
    ipa: "/wiː wɪl rɪˈvjuː təˈdeɪz kənˈstrʌk.ʃən wɜːrk/",
    tags: ["第27句", "施工审查", "★★★★"],
    when: "预告交接内容之四——检查今天的施工工作（机房改造、设备安装、线缆布设等），确认施工安全和进度。",
    words: [
      { w: "construction", ipa: "/kənˈstrʌk.ʃən/", pos: "名词", cn: "施工；建设", memory: "① con = 一起；② struct = 建造；③ ion = 名词后缀；④ construction = 建造活动 = 施工。\n数据中心施工包括机柜安装、线缆布设、机房改造等。", phonics: "con 读 /kən/，struc 读 /strʌk/，tion 读 /ʃən/，重音在第二音节。", collocations: [["construction work", "施工工作"], ["construction permit", "施工许可"], ["under construction", "施工中"]], examples: [["Any construction work today?", "今天有施工吗？"], ["The construction is on schedule.", "施工进度正常。"]] },
    ],
    phrases: [
      { p: "construction work", ipa: "/kənˈstrʌk.ʃən wɜːrk/", cn: "施工工作", why: "construction = 施工，work = 工作。数据中心施工需要严格的许可和安全管控，交接时必须确认施工状态。" },
    ],
    grammar: [
      { q: "这句和第26句有什么不同？", a: "结构完全相同：We will review today's + 工作类型。\n第26句：maintenance work（维护工作）。\n第27句：construction work（施工工作）。\n只需替换工作类型名词即可。" },
    ],
    pattern: "We will review today's + 工作类型 + work",
    patternExamples: [
      { en: "We will review today's cabling work.", cn: "我们会检查今天的布线工作。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
      { en: "We will review today's installation work.", cn: "我们会检查今天的安装工作。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
      { en: "We will review today's demolition work.", cn: "我们会检查今天的拆除工作。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
    ],
    thinking: "施工管理是数据中心安全管理的重要部分。\n施工流程：申请许可（permit）→ 安全交底 → 施工执行 → 验收恢复。\n交接时关注：哪些施工在进行？安全措施是否到位？是否有遗留风险？",
    pronunciation: "construction 三个音节：con-STRUC-tion /kənˈstrʌk.ʃən/。\n注意 str 三辅音连读。\n节奏：We will re-VIEW ｜ to-DAY'S ｜ con-STRUC-tion ｜ WORK.",
    quiz: [
      { q: "「我们会检查今天的布线工作」怎么说？", a: "We will review today's cabling work." },
      { q: "数据中心施工需要什么前置手续？", a: "需要施工许可（construction permit）和安全交底（safety briefing）。" },
    ],
  },
  {
    id: 28,
    en: "We will review today's safety issues.",
    cn: "我们会检查今天的安全事项。",
    ipa: "/wiː wɪl rɪˈvjuː təˈdeɪz ˈseɪf.ti ˈɪʃ.uːz/",
    tags: ["第28句", "安全审查", "★★★★★"],
    when: "预告交接内容之五——检查今天的安全事项（门禁异常、消防告警、安全违规等），确保安全管理无遗漏。",
    words: [
      { w: "safety", ipa: "/ˈseɪf.ti/", pos: "名词", cn: "安全；安全性", memory: "① safe = 安全的（形容词）；② safety = 安全（名词）。\nsafety issues = 安全事项/安全问题。", phonics: "safe 读 /seɪf/，ty 读 /ti/，重音在第一音节。", collocations: [["safety issues", "安全事项"], ["safety check", "安全检查"], ["fire safety", "消防安全"]], examples: [["Any safety issues today?", "今天有安全事项吗？"], ["Complete the safety check.", "完成安全检查。"]] },
      { w: "issue", ipa: "/ˈɪʃ.uː/", pos: "名词", cn: "事项；问题", memory: "① issue = 发出的东西 → 议题/事项/问题。\nissue 比 problem 更中性，不一定代表故障。", phonics: "is 读 /ɪ/，sue 读 /ʃuː/，重音在第一音节。", collocations: [["safety issue", "安全事项"], ["known issue", "已知问题"], ["resolve issue", "解决问题"]], examples: [["There are no safety issues.", "没有安全事项。"], ["This issue has been resolved.", "这个问题已解决。"]] },
    ],
    phrases: [
      { p: "safety issues", ipa: "/ˈseɪf.ti ˈɪʃ.uːz/", cn: "安全事项", why: "safety = 安全，issues = 事项。交接中的安全事项包括门禁、消防、人员进出、安全违规等。" },
    ],
    grammar: [
      { q: "issue 和 problem 和 alarm 的区别？", a: "issue = 事项/问题（中性，不一定是故障）。\nproblem = 问题/困难（负面，需要解决）。\nalarm = 告警（系统自动触发的警告）。\n✅ safety issues（安全事项——可能是正常检查项）\n✅ equipment problems（设备问题——需要修复）\n✅ active alarms（活动告警——系统触发的）" },
    ],
    pattern: "We will review today's + 主题 + issues",
    patternExamples: [
      { en: "We will review today's security issues.", cn: "我们会检查今天的安保事项。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "security", ipa: "/sɪˈkjʊrɪti/", cn: "安防", phonics: "se 读 /sɪ/，curity 读 /kjʊrɪti/" }, { w: "issues", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
      { en: "We will review today's compliance issues.", cn: "我们会检查今天的合规事项。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "issues", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
      { en: "We will review today's access issues.", cn: "我们会检查今天的门禁事项。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "access", ipa: "/ˈæksɛs/", cn: "门禁", phonics: "ac 读 /æk/，cess 读 /sɛs/" }, { w: "issues", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
    ],
    thinking: "安全管理是数据中心的底线。\n交接中的安全事项：门禁异常（access control）、消防告警（fire alarm）、安全违规（safety violation）、访客管理（visitor management）。\n安全无小事，交接时安全事项必须单独列出确认。",
    pronunciation: "safety 重音在第一音节：SAFE-ty /ˈseɪf.ti/。\nissues 的 ss 读 /ʃ/：/ˈɪʃ.uːz/，注意 s 读 /z/。\n节奏：We will re-VIEW ｜ to-DAY'S ｜ SAFE-ty ｜ IS-sues.",
    quiz: [
      { q: "「我们会检查今天的安保事项」怎么说？", a: "We will review today's security issues." },
      { q: "issue、problem、alarm 哪个最中性？", a: "issue 最中性（事项），problem 偏负面（困难），alarm 是系统触发的（告警）。" },
    ],
  },
  {
    id: 29,
    en: "Please take notes during the handover.",
    cn: "请在交接过程中做好记录。",
    ipa: "/pliːz teɪk noʊts ˈdʊr.ɪŋ ðə ˈhændˌoʊ.vər/",
    tags: ["第29句", "记录要求", "★★★★"],
    when: "提醒参与交接的人员做好笔记，确保关键信息被记录，便于后续追溯和执行。",
    words: [
      { w: "notes", ipa: "/noʊts/", pos: "名词", cn: "笔记；记录", memory: "① note = 笔记/注释（单数）；② notes = 笔记/记录（复数）。\ntake notes = 做笔记/做记录。", phonics: "note 读 /noʊt/，s 读 /s/。", collocations: [["take notes", "做笔记"], ["meeting notes", "会议记录"], ["shift notes", "交接记录"]], examples: [["Please take notes.", "请做好记录。"], ["I'll add this to the notes.", "我把这个加到记录里。"]] },
      { w: "during", ipa: "/ˈdʊr.ɪŋ/", pos: "介词", cn: "在…期间", memory: "① during = 在…期间；② during the handover = 在交接期间 = 交接过程中。\n同义：while（当…时），但 during 后跟名词，while 后跟句子。", phonics: "dur 读 /dʊr/，ing 读 /ɪŋ/，重音在第一音节。", collocations: [["during the handover", "交接期间"], ["during the shift", "班次期间"], ["during maintenance", "维护期间"]], examples: [["No alarms during the night shift.", "夜班期间没有告警。"], ["Stay alert during the handover.", "交接时保持警觉。"]] },
    ],
    phrases: [
      { p: "take notes", ipa: "/teɪk noʊts/", cn: "做笔记/做记录", why: "take = 拿/做，notes = 笔记。take notes 是英语中「做笔记」的固定搭配。" },
      { p: "during the handover", ipa: "/ˈdʊr.ɪŋ ðə ˈhændˌoʊ.vər/", cn: "在交接过程中", why: "during = 在…期间，the handover = 交接。during 后面跟名词短语，表示在某段时间内。" },
    ],
    grammar: [
      { q: "during 和 while 的区别？", a: "during + 名词（在…期间）。\nwhile + 句子（当…时）。\n✅ During the handover, take notes.（交接期间做记录。）\n✅ While I'm presenting, take notes.（我展示的时候做记录。）\n简单记忆：during 后面跟名词，while 后面跟句子。" },
    ],
    pattern: "Please take notes during + 事件",
    patternExamples: [
      { en: "Please take notes during the meeting.", cn: "请在会议中做好记录。", words: [{ w: "meeting", ipa: "/ˈmiːtɪŋ/", cn: "会议", phonics: "meet 读 /miːt/，ing 读 /ɪŋ/" }] },
      { en: "Please take notes during the inspection.", cn: "请在巡检中做好记录。", words: [] },
      { en: "Please take notes during the training.", cn: "请在培训中做好记录。", words: [] },
    ],
    thinking: "英语记录要求：Please take notes during + 事件。\n中文说「在交接过程中做好记录」。\ntake notes 是英语固定搭配，不能说 make notes（虽然也有人用，但 take notes 更标准）。\n交接记录是追溯和问责的依据，必须认真记录。",
    pronunciation: "take notes 的 t 和 n 分开读：/teɪk noʊts/。\nduring 重音在第一音节：DU-ring /ˈdʊr.ɪŋ/。\n节奏：Please TAKE NOTES ｜ DU-ring ｜ the HAND-o-ver.",
    quiz: [
      { q: "「请在会议中做好记录」怎么说？", a: "Please take notes during the meeting." },
      { q: "during 和 while 怎么用？", a: "during + 名词（during the handover），while + 句子（while I present）。" },
    ],
  },
  {
    id: 30,
    en: "Now let's move to the BMS alarms.",
    cn: "现在我们开始查看BMS告警。",
    ipa: "/naʊ lɛts muːv tuː ðə ˌbiː.ɛmˈɛs əˈlɑːmz/",
    tags: ["第30句", "场景过渡", "★★★★★"],
    when: "开场流程结束，正式进入 BMS 告警审查环节。这是从「开场」到「告警处理」的过渡句。",
    words: [
      { w: "move", ipa: "/muːv/", pos: "动词", cn: "转移；移动", memory: "① move = 移动/转移；② move to = 转移到/转到。\nmove to the next topic = 转到下一个话题。", phonics: "m 读 /m/，ove 读 /uːv/。", collocations: [["move to", "转到"], ["move on", "继续"], ["move forward", "向前推进"]], examples: [["Let's move to the next item.", "我们转到下一项。"], ["Move on to the alarms.", "继续看告警。"]] },
    ],
    phrases: [
      { p: "move to", ipa: "/muːv tuː/", cn: "转到；进入", why: "move = 移动，to = 到。move to = 移动到某个话题/页面/议题。交接中用于标记环节切换。" },
      { p: "Now let's", ipa: "/naʊ lɛts/", cn: "现在我们", why: "now = 现在，let's = 让我们。Now let's 标记一个新环节的开始，是交接流程中的转折信号。" },
    ],
    grammar: [
      { q: "move to 和 switch to 的区别？", a: "move to = 转到（话题/议题的切换）。\nswitch to = 切换到（页面/系统的切换）。\n✅ Let's move to the BMS alarms.（转到BMS告警议题）\n✅ Please switch to the BMS dashboard.（切换到BMS仪表盘页面）\nmove to 是话题层面的切换，switch to 是操作层面的切换。" },
    ],
    pattern: "Now let's move to + 下一个议题",
    patternExamples: [
      { en: "Now let's move to the DCIM alarms.", cn: "现在我们看DCIM告警。", words: [{ w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Now let's move to the maintenance review.", cn: "现在我们进入维护审查。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }, { w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
      { en: "Now let's move to the construction update.", cn: "现在我们看施工进展。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }] },
      { en: "Now let's move to the safety briefing.", cn: "现在我们进入安全交底。", words: [{ w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }] },
    ],
    thinking: "英语话题切换：Now let's move to + 新话题。\n中文说「现在开始看BMS告警」。\nNow 是时间标记，暗示前面是开场，后面是正式内容。\nmove to 在交接中频繁使用，每次切换议题都会用到。\n交接流程：开场 → move to BMS → move to DCIM → move to tickets → move to safety。",
    pronunciation: "Now 的 ow 读 /aʊ/。\nmove to 连读：move-to /muːv tuː/。\nBMS 逐字母读：B-M-S。\n节奏：NOW ｜ let's MOVE ｜ to the BMS ｜ ALARMS.",
    quiz: [
      { q: "「现在我们进入维护审查」怎么说？", a: "Now let's move to the maintenance review." },
      { q: "move to 和 switch to 哪个用于话题切换？", a: "move to 用于话题/议题切换，switch to 用于页面/系统切换。" },
    ],
  },
];

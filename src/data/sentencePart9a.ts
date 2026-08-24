// EXPORTS: MOCK_SENTENCES_PART9A

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART9A: ISentence[] = [
  {
    id: 241,
    en: "Did it rain during the last shift?",
    cn: "上一班期间下雨了吗？",
    ipa: "/dɪd ɪt reɪn ˈdjʊə.rɪŋ ðə lɑːst ʃɪft/",
    tags: ["第241句", "天气检查", "★★★★★"],
    when: "培训环节结束后，转入天气与现场巡检。马来西亚热带气候多雨，下雨情况直接影响屋顶、电缆沟、集水井等设施的巡检优先级。第一句话问上一班是否下雨。",
    words: [
      { w: "rain", ipa: "/reɪn/", pos: "动词/名词", cn: "下雨；雨", memory: "① rain 既是动词（下雨）也是名词（雨）。\n② 数据中心交接中，rain 是关键检查项，因为雨水可能导致屋顶漏水、电缆沟进水、集水井水位上升。", phonics: "r 读 /r/，ai 读 /eɪ/，n 读 /n/。注意 rain 和 reign（统治）同音。", collocations: [["heavy rain", "大雨"], ["light rain", "小雨"], ["during the rain", "下雨期间"]], examples: [["Did it rain last night?", "昨晚下雨了吗？"], ["We had heavy rain this morning.", "今天早上下了大雨。"]] },
      { w: "shift", ipa: "/ʃɪft/", pos: "名词", cn: "班次；轮班", memory: "① shift = 班次/轮班（通常12小时）。\n② last shift = 上一班（刚交接完的那个班次）。\n数据中心通常两班倒：day shift（白班 8AM-8PM）+ night shift（夜班 8PM-8AM）。", phonics: "sh 读 /ʃ/，i 读 /ɪ/，ft 读 /ft/。注意 sh 不要读成 /s/。", collocations: [["last shift", "上一班"], ["next shift", "下一班"], ["day shift", "白班"]], examples: [["What happened during the last shift?", "上一班期间发生了什么？"], ["The night shift reported no issues.", "夜班报告无异常。"]] },
    ],
    phrases: [
      { p: "during the last shift", ipa: "/ˈdjʊə.rɪŋ ðə lɑːst ʃɪft/", cn: "在上一班期间", why: "during + 时间段 = 在某段时间内。last shift 特指刚交接完的那个班次。交接时问天气，因为下雨会触发额外的巡检项目。" },
    ],
    grammar: [
      { q: "为什么用 Did it rain 而不是 Was it raining？", a: "Did it rain = 下雨了吗？（一般过去时，问是否发生了）\nWas it raining = 当时正在下雨吗？（过去进行时，问某个时刻是否正在进行）\n✅ Did it rain during the last shift?（上一班期间下雨了吗？→ 问整段时间内是否发生过）\n✅ Was it raining at 3 AM?（凌晨3点时在下雨吗？→ 问特定时刻的状态）\n交接时用 Did it rain，因为关心的是'有没有下过'，不是'某个时刻是否正在下'。" },
    ],
    pattern: "Did it rain + during + 时间段",
    patternExamples: [
      { en: "Did it rain during the night?", cn: "夜间下雨了吗？", words: [] },
      { en: "Did it rain during the weekend?", cn: "周末下雨了吗？", words: [] },
      { en: "Did it rain while you were on duty?", cn: "你值班期间下雨了吗？", words: [] },
    ],
    thinking: "天气检查是交接的倒数第二个大环节（仅次于电气系统收尾）。\n交接顺序：① 问上一班天气（本句）→ ② 报当前天气（242-243）→ ③ 天气预报（244-245）→ ④ 屋顶漏水检查（246-250）→ ⑤ 集水井（251-258）→ ⑥ 排水系统（259-269）。\n马来西亚柔佛州属热带雨林气候，全年多雨，天气检查是每日交接的固定项目。",
    pronunciation: "did 的 i 读短音 /ɪ/，不是长音 /iː/。\nduring 的 u 读 /jʊə/，不是 /dʒʊə/。\n节奏：DID it RAIN ｜ DU-ring ｜ the LAST SHIFT?",
    quiz: [
      { q: "夜班期间下雨了吗？", a: "Did it rain during the night shift?" },
      { q: "Did it rain 和 Was it raining 有什么区别？", a: "Did it rain = 下雨了吗（一般过去时，问是否发生过）；Was it raining = 当时正在下雨吗（过去进行时，问某个时刻的状态）。交接时用 Did it rain，关心的是'有没有下过'。" },
    ],
  },
  {
    id: 242,
    en: "It rained heavily last night.",
    cn: "昨晚下了大雨。",
    ipa: "/ɪt reɪnd ˈhɛv.ɪ.li lɑːst naɪt/",
    tags: ["第242句", "天气汇报", "★★★★★"],
    when: "回答上一句的问题，汇报上一班期间的降雨情况。heavily 表示雨量大，需要重点检查屋顶、电缆沟、集水井。",
    words: [
      { w: "heavily", ipa: "/ˈhɛv.ɪ.li/", pos: "副词", cn: "大量地；猛烈地", memory: "① heavy = 重的/大量的；② heavily = 大量地/猛烈地。\nrain heavily = 下大雨（比 rain a lot 更正式，强调雨势猛烈）。\n对比：rain lightly = 下小雨。", phonics: "heav 读 /hɛv/，i 读 /ɪ/，ly 读 /li/，重音在第一音节。", collocations: [["rain heavily", "下大雨"], ["snow heavily", "下大雪"], ["breathe heavily", "喘粗气"]], examples: [["It rained heavily all afternoon.", "整个下午都在下大雨。"], ["The storm hit heavily.", "暴风雨猛烈袭击。"]] },
    ],
    phrases: [
      { p: "rained heavily", ipa: "/reɪnd ˈhɛv.ɪ.li/", cn: "下大雨", why: "rain + heavily = 下大雨。heavily 修饰 rain，表示雨量大、雨势猛。交接时用 heavily 而不是 a lot，因为更专业、更精确。" },
    ],
    grammar: [
      { q: "heavily 和 a lot 修饰 rain 有什么区别？", a: "heavily = 猛烈地/大量地（强调雨势强度，正式用语）\na lot = 很多（强调雨量，口语化）\n✅ It rained heavily last night.（昨晚下了大雨 → 正式交接用语）\n✅ It rained a lot last night.（昨晚下了很多雨 → 口语化）\n交接报告用 heavily，因为更专业、更能传达雨势的严重程度。" },
    ],
    pattern: "It rained + heavily/lightly + 时间",
    patternExamples: [
      { en: "It rained lightly this morning.", cn: "今天早上下了小雨。", words: [] },
      { en: "It rained heavily during the storm.", cn: "暴风雨期间下了大雨。", words: [] },
      { en: "It rained heavily for three hours.", cn: "大雨下了三个小时。", words: [] },
    ],
    thinking: "降雨强度分级（交接常用）：\n① rained lightly = 下小雨（无需额外巡检）\n② rained moderately = 下中雨（关注集水井水位）\n③ rained heavily = 下大雨（必须检查屋顶、电缆沟、集水井、排水系统）\n④ torrential rain = 暴雨（可能需要应急处理）\n本句 rained heavily 意味着需要执行完整的雨后巡检清单。",
    pronunciation: "heavily 重音在第一音节：/ˈhɛv.ɪ.li/，不要读成 /hɪˈvɪ.li/。\nlast 的 a 读 /ɑː/（英式）或 /æ/（美式）。\n节奏：It RAINED HEAV-i-ly ｜ LAST NIGHT.",
    quiz: [
      { q: "今早下了小雨，怎么说？", a: "It rained lightly this morning." },
      { q: "heavily 和 a lot 修饰 rain 时哪个更正式？", a: "heavily 更正式。It rained heavily = 下了大雨（正式交接用语，强调雨势猛烈）；It rained a lot = 下了很多雨（口语化）。交接报告用 heavily。" },
    ],
  },
  {
    id: 243,
    en: "The weather is clear now.",
    cn: "现在天气晴朗。",
    ipa: "/ðə ˈwɛð.ər ɪz klɪər naʊ/",
    tags: ["第243句", "当前天气", "★★★★"],
    when: "报完上一班的降雨情况后，说明当前天气状态，让接班人了解现在的天气条件。",
    words: [
      { w: "clear", ipa: "/klɪər/", pos: "形容词", cn: "晴朗的；清澈的", memory: "① clear = 晴朗的（天气）/ 清澈的（水）/ 清晰的（视线）。\n② weather is clear = 天气晴朗，没有云、没有雨。\n对比：cloudy = 多云，overcast = 阴天，rainy = 下雨。", phonics: "cl 读 /kl/，ear 读 /ɪər/。注意 clear 和 near 押韵。", collocations: [["clear weather", "晴朗天气"], ["clear sky", "晴空"], ["all clear", "一切正常"]], examples: [["The sky is clear today.", "今天天空晴朗。"], ["Visibility is clear.", "能见度良好。"]] },
    ],
    phrases: [
      { p: "weather is clear", ipa: "/ˈwɛð.ər ɪz klɪər/", cn: "天气晴朗", why: "weather + is + clear = 天气晴朗。clear 表示没有云、没有雨、能见度高。交接时报当前天气，让接班人了解现场条件。" },
    ],
    grammar: [
      { q: "clear 和 sunny 有什么区别？", a: "clear = 晴朗的（强调无云、无雨、能见度高）\nsunny = 阳光充足的（强调有阳光）\n✅ The weather is clear now.（现在天气晴朗 → 可能多云但无雨）\n✅ The weather is sunny now.（现在阳光明媚 → 一定有阳光）\n交接时用 clear，因为关心的是'有没有雨/云'，不是'有没有阳光'。夜间交接也可以用 clear（夜空晴朗）。" },
    ],
    pattern: "The weather is + clear/cloudy/rainy + now/today",
    patternExamples: [
      { en: "The weather is cloudy today.", cn: "今天天气多云。", words: [] },
      { en: "The weather is rainy now.", cn: "现在在下雨。", words: [] },
      { en: "The weather was clear yesterday.", cn: "昨天天气晴朗。", words: [{ w: "clear", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
    ],
    thinking: "天气状态词汇（交接常用）：\n① clear = 晴朗（无云无雨）\n② cloudy = 多云\n③ overcast = 阴天（厚厚的云层）\n④ rainy = 下雨\n⑤ stormy = 暴风雨\n⑥ foggy = 有雾（影响能见度）\n交接时优先报 clear/rainy/stormy，因为这些直接影响巡检优先级。",
    pronunciation: "weather 的 ea 读 /ɛ/，不是 /iː/：/ˈwɛð.ər/。\nclear 的 ear 读 /ɪər/，不是 /ɛər/。\n节奏：The WEATH-er is CLEAR NOW.",
    quiz: [
      { q: "现在天气多云，怎么说？", a: "The weather is cloudy now." },
      { q: "clear 和 sunny 在交接时有什么区别？", a: "clear = 晴朗（无云无雨，夜间也可用）；sunny = 阳光充足（一定有阳光，夜间不能用）。交接时用 clear，因为关心的是'有没有雨'，不是'有没有阳光'。" },
    ],
  },
  {
    id: 244,
    en: "Please continue monitoring the weather forecast.",
    cn: "请继续关注天气预报。",
    ipa: "/pliːz kənˈtɪn.juː ˈmɒn.ɪ.tər.ɪŋ ðə ˈwɛð.ər ˈfɔːr.kæst/",
    tags: ["第244句", "天气预报", "★★★★"],
    when: "报完当前天气后，提醒接班人持续关注天气预报，因为马来西亚天气变化快，随时可能下雨。",
    words: [
      { w: "continue", ipa: "/kənˈtɪn.juː/", pos: "动词", cn: "继续", memory: "① con- = 一起/持续；② tinue = 保持（拉丁语 tenere = 持有）。\ncontinue + doing = 继续做某事（不间断）。\ncontinue + to do = 继续做某事（中断后继续）。", phonics: "con 读 /kən/，tin 读 /tɪn/，ue 读 /juː/，重音在第二音节。", collocations: [["continue monitoring", "继续监控"], ["continue working", "继续工作"], ["continue following up", "继续跟进"]], examples: [["Please continue monitoring the UPS.", "请继续监控UPS。"], ["We will continue the inspection.", "我们将继续检查。"]] },
      { w: "forecast", ipa: "/ˈfɔːr.kæst/", pos: "名词", cn: "预报；预测", memory: "① fore- = 前面/预先；② cast = 投射/预测。\nforecast = 预报（天气、销售、趋势）。\nweather forecast = 天气预报。", phonics: "fore 读 /fɔːr/，cast 读 /kæst/，重音在第一音节。", collocations: [["weather forecast", "天气预报"], ["rain forecast", "降雨预报"], ["storm forecast", "暴风雨预报"]], examples: [["The forecast says rain tomorrow.", "预报说明天有雨。"], ["Check the weather forecast.", "查看天气预报。"]] },
    ],
    phrases: [
      { p: "continue monitoring", ipa: "/kənˈtɪn.juː ˈmɒn.ɪ.tər.ɪŋ/", cn: "继续监控", why: "continue + 动名词（monitoring）= 继续做某事（不间断）。交接时强调'持续监控'，因为天气随时可能变化。" },
    ],
    grammar: [
      { q: "continue monitoring 和 continue to monitor 有什么区别？", a: "continue monitoring = 继续监控（不间断，一直在做）\ncontinue to monitor = 继续监控（中断后重新开始，或强调目的）\n✅ Please continue monitoring the weather forecast.（请继续关注天气预报 → 一直在关注，不要停）\n✅ We will continue to monitor the situation.（我们将继续监控情况 → 可能中断过，现在重新开始）\n交接时用 continue monitoring，因为强调'不要中断'。" },
    ],
    pattern: "Please continue + 动名词 + 宾语",
    patternExamples: [
      { en: "Please continue monitoring the alarms.", cn: "请继续监控告警。", words: [{ w: "continue", ipa: "/kənˈtɪnjuː/", cn: "继续", phonics: "con 读 /kən/，tinue 读 /tɪnjuː/" }, { w: "monitoring", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Please continue following up on the tickets.", cn: "请继续跟进工单。", words: [{ w: "continue", ipa: "/kənˈtɪnjuː/", cn: "继续", phonics: "con 读 /kən/，tinue 读 /tɪnjuː/" }, { w: "following", ipa: "/ˈfɒloʊ/", cn: "跟踪", phonics: "fol 读 /fɒl/，low 读 /loʊ/" }, { w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "Please continue inspecting the site.", cn: "请继续巡检现场。", words: [{ w: "continue", ipa: "/kənˈtɪnjuː/", cn: "继续", phonics: "con 读 /kən/，tinue 读 /tɪnjuː/" }, { w: "inspecting", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "site", ipa: "/saɪt/", cn: "场地", phonics: "site 读 /saɪt/" }] },
    ],
    thinking: "马来西亚柔佛州天气特点：\n① 热带雨林气候，全年高温多雨\n② 午后常有阵雨（convective rain）\n③ 季风季节（11月-2月）降雨更频繁\n④ 天气变化快，1小时内可能从晴天变暴雨\n交接时必须强调 continue monitoring，因为天气随时可能变化，需要持续关注。",
    pronunciation: "continue 重音在第二音节：/kənˈtɪn.juː/，不是 /ˈkɒn.tɪ.njuː/。\nmonitoring 的 o 读 /ɒ/，不是 /oʊ/。\n节奏：Please con-TIN-ue ｜ MON-i-tor-ing ｜ the WEATH-er FORE-cast.",
    quiz: [
      { q: "请继续监控UPS，怎么说？", a: "Please continue monitoring the UPS." },
      { q: "continue monitoring 和 continue to monitor 有什么区别？", a: "continue monitoring = 继续监控（不间断，一直在做）；continue to monitor = 继续监控（可能中断过，现在重新开始）。交接时用 continue monitoring，强调'不要中断'。" },
    ],
  },
  {
    id: 245,
    en: "Is there any risk of thunderstorms today?",
    cn: "今天有雷暴风险吗？",
    ipa: "/ɪz ðeər ˈɛn.i rɪsk ɒv ˈθʌn.dər.stɔːrmz təˈdeɪ/",
    tags: ["第245句", "雷暴风险", "★★★★★"],
    when: "问完一般天气情况后，特别询问雷暴风险。雷暴可能导致停电、设备损坏，是数据中心最关注的天气风险之一。",
    words: [
      { w: "risk", ipa: "/rɪsk/", pos: "名词", cn: "风险；危险", memory: "① risk = 风险/危险（可能发生的不利事件）。\n② risk of + 名词 = …的风险。\nrisk 强调'可能性'，不是'已经发生'。", phonics: "r 读 /r/，i 读 /ɪ/，sk 读 /sk/。", collocations: [["risk of rain", "降雨风险"], ["high risk", "高风险"], ["low risk", "低风险"]], examples: [["Is there any risk of flooding?", "有洪水风险吗？"], ["The risk is low.", "风险很低。"]] },
      { w: "thunderstorm", ipa: "/ˈθʌn.dər.stɔːrm/", pos: "名词", cn: "雷暴；雷雨", memory: "① thunder = 雷声；② storm = 暴风雨。\nthunderstorm = 雷暴（雷电+暴雨+可能的强风）。\n雷暴对数据中心的威胁：① 雷击导致停电 ② 暴雨导致进水 ③ 强风损坏外部设施。", phonics: "thun 读 /θʌn/，der 读 /dər/，storm 读 /stɔːrm/。th 咬舌尖。", collocations: [["severe thunderstorm", "强雷暴"], ["thunderstorm warning", "雷暴预警"], ["thunderstorm risk", "雷暴风险"]], examples: [["A thunderstorm is approaching.", "雷暴正在逼近。"], ["We had a thunderstorm last night.", "昨晚有雷暴。"]] },
    ],
    phrases: [
      { p: "risk of thunderstorms", ipa: "/rɪsk ɒv ˈθʌn.dər.stɔːrmz/", cn: "雷暴风险", why: "risk of + 名词 = …的风险。thunderstorms 用复数，因为可能有多次雷暴。交接时问雷暴风险，因为雷暴是数据中心最严重的天气威胁。" },
    ],
    grammar: [
      { q: "Is there any risk 和 Is there a risk 有什么区别？", a: "Is there any risk = 有任何风险吗？（强调'有没有'，更常用）\nIs there a risk = 有一个风险吗？（强调'一个具体的风险'）\n✅ Is there any risk of thunderstorms today?（今天有雷暴风险吗？→ 问有没有）\n✅ Is there a risk of power outage?（有停电风险吗？→ 问一个具体风险）\n交接时用 any risk，因为关心的是'有没有风险'，不是'有几个风险'。" },
    ],
    pattern: "Is there any risk of + 名词 + 时间",
    patternExamples: [
      { en: "Is there any risk of flooding tonight?", cn: "今晚有洪水风险吗？", words: [] },
      { en: "Is there any risk of power outage?", cn: "有停电风险吗？", words: [{ w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }] },
      { en: "Is there any risk of equipment failure?", cn: "有设备故障风险吗？", words: [{ w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }] },
    ],
    thinking: "雷暴对数据中心的威胁：\n① 雷击 → 停电 → UPS/发电机启动\n② 暴雨 → 屋顶漏水、电缆沟进水、集水井水位上升\n③ 强风 → 外部设施损坏、门禁系统异常\n④ 电磁干扰 → 敏感设备误报\n交接时必须问雷暴风险，因为需要提前准备应急措施（检查发电机油位、确认UPS状态、准备沙袋等）。",
    pronunciation: "thunderstorm 的 th 读 /θ/，咬舌尖：/ˈθʌn.dər.stɔːrm/。\nrisk 的 i 读短音 /ɪ/，不是长音 /iː/。\n节奏：Is there AN-y RISK ｜ of THUN-der-STORMS ｜ to-DAY?",
    quiz: [
      { q: "今晚有洪水风险吗？", a: "Is there any risk of flooding tonight?" },
      { q: "any risk 和 a risk 有什么区别？", a: "any risk = 有任何风险吗（强调'有没有'，更常用）；a risk = 有一个风险吗（强调'一个具体的风险'）。交接时用 any risk，关心的是'有没有风险'。" },
    ],
  },
  {
    id: 246,
    en: "Please inspect the roof for water leaks.",
    cn: "请检查屋顶是否漏水。",
    ipa: "/pliːz ɪnˈspɛkt ðə ruːf fɔːr ˈwɔː.tər liːks/",
    tags: ["第246句", "屋顶检查", "★★★★★"],
    when: "如果上一班下过雨（特别是大雨），必须检查屋顶是否漏水。这是雨后巡检的第一项。",
    words: [
      { w: "inspect", ipa: "/ɪnˈspɛkt/", pos: "动词", cn: "检查；视察", memory: "① in- = 进入/仔细；② spect = 看（拉丁语 specere）。\ninspect = 仔细检查/视察（比 check 更正式、更全面）。\n对比：check = 快速检查，inspect = 全面检查。", phonics: "in 读 /ɪn/，spect 读 /spɛkt/，重音在第二音节。", collocations: [["inspect the roof", "检查屋顶"], ["inspect the site", "巡检现场"], ["inspect for leaks", "检查是否漏水"]], examples: [["Please inspect the UPS room.", "请检查UPS房间。"], ["We inspected the site after the storm.", "暴风雨后我们巡检了现场。"]] },
      { w: "leak", ipa: "/liːk/", pos: "名词/动词", cn: "漏水；泄漏", memory: "① leak = 漏水/泄漏（液体或气体从缝隙中渗出）。\n② water leak = 漏水。\n数据中心漏水是严重问题，可能导致设备短路、停机。", phonics: "l 读 /l/，ea 读 /iː/，k 读 /k/。注意 leak 和 leek（韭葱）同音。", collocations: [["water leak", "漏水"], ["gas leak", "漏气"], ["oil leak", "漏油"]], examples: [["There is a water leak on the roof.", "屋顶有漏水。"], ["We found a leak near the cable entry.", "我们在电缆入口附近发现漏水。"]] },
    ],
    phrases: [
      { p: "inspect ... for ...", ipa: "/ɪnˈspɛkt ... fɔːr .../", cn: "检查…是否有…", why: "inspect + 地点 + for + 问题 = 检查某个地方是否有某个问题。这是巡检的标准表达。for 表示'寻找的目标'。" },
    ],
    grammar: [
      { q: "inspect for leaks 和 check for leaks 有什么区别？", a: "inspect for leaks = 仔细检查是否漏水（正式、全面、耗时较长）\ncheck for leaks = 检查是否漏水（快速、简单）\n✅ Please inspect the roof for water leaks.（请仔细检查屋顶是否漏水 → 全面巡检）\n✅ Please check the pipe for leaks.（请检查管道是否漏水 → 快速检查）\n雨后屋顶巡检用 inspect，因为需要仔细查看每个角落。" },
    ],
    pattern: "Please inspect + 地点 + for + 问题",
    patternExamples: [
      { en: "Please inspect the basement for flooding.", cn: "请检查地下室是否进水。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }] },
      { en: "Please inspect the walls for cracks.", cn: "请检查墙壁是否有裂缝。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }] },
      { en: "Please inspect the equipment for damage.", cn: "请检查设备是否有损坏。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }] },
    ],
    thinking: "屋顶漏水检查要点：\n① 检查位置：屋顶接缝、排水口、电缆穿墙孔、空调管道穿墙处\n② 检查时机：雨后2小时内\n③ 检查方法：目视 + 手摸（潮湿感）+ 红外热像仪（可选）\n④ 发现问题：立即记录位置、拍照、安装临时防护、安排永久修复\n本句是雨后巡检的第一步：上屋顶检查。",
    pronunciation: "inspect 重音在第二音节：/ɪnˈspɛkt/，不是 /ˈɪn.spɛkt/。\nroof 的 oo 读长音 /uː/，不是短音 /ʊ/。\n节奏：Please in-SPECT ｜ the ROOF ｜ for WA-ter LEAKS.",
    quiz: [
      { q: "请检查地下室是否进水，怎么说？", a: "Please inspect the basement for flooding." },
      { q: "inspect 和 check 有什么区别？", a: "inspect = 仔细检查（正式、全面、耗时较长）；check = 快速检查（简单、快速）。雨后屋顶巡检用 inspect，因为需要仔细查看每个角落。" },
    ],
  },
  {
    id: 247,
    en: "No water leakage was found on the roof.",
    cn: "屋顶没有发现漏水。",
    ipa: "/noʊ ˈwɔː.tər ˈliː.kɪdʒ wɒz faʊnd ɒn ðə ruːf/",
    tags: ["第247句", "检查结果", "★★★★★"],
    when: "汇报屋顶检查结果。如果没有发现漏水，这是好消息，可以进入下一项巡检。",
    words: [
      { w: "leakage", ipa: "/ˈliː.kɪdʒ/", pos: "名词", cn: "泄漏；渗漏", memory: "① leak = 漏水（动词/名词）；② leakage = 泄漏（名词，更正式）。\nleakage 强调'泄漏的现象/过程'，leak 强调'具体的泄漏点'。\n对比：a water leak = 一处漏水点；water leakage = 漏水现象（泛指）。", phonics: "leak 读 /liːk/，age 读 /ɪdʒ/，重音在第一音节。", collocations: [["water leakage", "漏水"], ["gas leakage", "漏气"], ["no leakage", "无泄漏"]], examples: [["No leakage was detected.", "未检测到泄漏。"], ["Water leakage can damage equipment.", "漏水可能损坏设备。"]] },
      { w: "found", ipa: "/faʊnd/", pos: "动词(过去分词)", cn: "被发现", memory: "① find = 发现/找到；② found = 被发现（被动语态）。\nwas found = 被发现（过去被动）。\nNo ... was found = 没有发现…（标准检查报告用语）。", phonics: "f 读 /f/，ou 读 /aʊ/，nd 读 /nd/。", collocations: [["no issues found", "未发现问题"], ["damage found", "发现损坏"], ["leak found", "发现漏水"]], examples: [["No problems were found.", "未发现问题。"], ["A crack was found on the wall.", "墙上发现了裂缝。"]] },
    ],
    phrases: [
      { p: "No ... was found", ipa: "/noʊ ... wɒz faʊnd/", cn: "没有发现…", why: "No + 名词 + was found = 没有发现…（标准检查报告用语）。被动语态强调'结果'，不关心'谁检查的'。" },
    ],
    grammar: [
      { q: "为什么用 was found 而不是 did not find？", a: "was found = 被发现（被动语态，强调结果）\ndid not find = 没有发现（主动语态，强调动作）\n✅ No water leakage was found on the roof.（屋顶没有发现漏水 → 强调结果，正式报告用语）\n✅ We did not find any water leakage on the roof.（我们没有在屋顶发现漏水 → 强调'我们'的动作）\n交接报告用被动语态 was found，因为关心的是'有没有发现'，不是'谁发现的'。" },
    ],
    pattern: "No + 问题 + was/were found + 地点",
    patternExamples: [
      { en: "No damage was found on the equipment.", cn: "设备上未发现损坏。", words: [{ w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }] },
      { en: "No cracks were found on the walls.", cn: "墙壁上未发现裂缝。", words: [] },
      { en: "No blockage was found in the pipes.", cn: "管道中未发现堵塞。", words: [{ w: "pipes", ipa: "/paɪp/", cn: "管道", phonics: "pipe 读 /paɪp/" }] },
    ],
    thinking: "检查报告标准句式：\n① No + 问题 + was found = 没有发现…（正常）\n② A + 问题 + was found = 发现了…（异常）\n③ Multiple + 问题 + were found = 发现了多处…（严重）\n本句是第①种：正常结果。如果发现问题，用 248 句的句式。",
    pronunciation: "leakage 的 ea 读 /iː/，age 读 /ɪdʒ/：/ˈliː.kɪdʒ/。\nfound 的 ou 读 /aʊ/，不是 /uː/。\n节奏：No WA-ter LEAK-age ｜ was FOUND ｜ on the ROOF.",
    quiz: [
      { q: "设备上未发现损坏，怎么说？", a: "No damage was found on the equipment." },
      { q: "was found 和 did not find 有什么区别？", a: "was found = 被发现（被动语态，强调结果，正式报告用语）；did not find = 没有发现（主动语态，强调动作）。交接报告用 was found，关心的是'有没有发现'，不是'谁发现的'。" },
    ],
  },
  {
    id: 248,
    en: "A small water leak was found near the cable entry.",
    cn: "在电缆入口附近发现了一处小漏水。",
    ipa: "/ə smɔːl ˈwɔː.tər liːk wɒz faʊnd nɪər ðə ˈkeɪ.bəl ˈɛn.tri/",
    tags: ["第248句", "发现问题", "★★★★★"],
    when: "如果屋顶检查发现漏水，需要汇报漏水位置。电缆入口是常见漏水点，因为电缆穿墙处密封容易老化。",
    words: [
      { w: "cable entry", ipa: "/ˈkeɪ.bəl ˈɛn.tri/", pos: "名词", cn: "电缆入口；电缆穿墙孔", memory: "① cable = 电缆；② entry = 入口/进入点。\ncable entry = 电缆穿墙进入建筑物的位置。\n电缆入口是漏水高发区，因为电缆与墙体之间的密封容易老化、开裂。", phonics: "ca 读 /keɪ/，ble 读 /bəl/；en 读 /ɛn/，try 读 /tri/。", collocations: [["cable entry point", "电缆入口点"], ["cable entry seal", "电缆入口密封"], ["cable trench", "电缆沟"]], examples: [["Water leaked through the cable entry.", "水从电缆入口渗入。"], ["Check the cable entry seals.", "检查电缆入口密封。"]] },
      { w: "near", ipa: "/nɪər/", pos: "介词", cn: "在…附近", memory: "① near = 在…附近/靠近。\n② near + 地点 = 在某个位置附近。\nnear 表示'距离近但不是正好在'，区别于 at（正好在）和 on（在…上面）。", phonics: "n 读 /n/，ear 读 /ɪər/。注意 near 和 clear 押韵。", collocations: [["near the entrance", "在入口附近"], ["near the roof", "在屋顶附近"], ["near the building", "在建筑物附近"]], examples: [["The leak is near the window.", "漏水在窗户附近。"], ["Stand near the exit.", "站在出口附近。"]] },
    ],
    phrases: [
      { p: "near the cable entry", ipa: "/nɪər ðə ˈkeɪ.bəl ˈɛn.tri/", cn: "在电缆入口附近", why: "near + 地点 = 在某个位置附近。cable entry 是漏水高发区，交接时需要精确描述漏水位置，方便维修人员定位。" },
    ],
    grammar: [
      { q: "a small leak 和 a leak 有什么区别？", a: "a small leak = 一处小漏水（强调程度轻，可能暂时不影响）\na leak = 一处漏水（中性，不知道大小）\n✅ A small water leak was found near the cable entry.（电缆入口附近发现一处小漏水 → 程度轻，可以先临时防护）\n✅ A large water leak was found on the roof.（屋顶发现一处大漏水 → 程度重，需要立即处理）\n交接时描述漏水大小，因为决定处理优先级：small = 临时防护 + 计划修复；large = 立即修复。" },
    ],
    pattern: "A + 形容词 + 问题 + was found + near/at + 地点",
    patternExamples: [
      { en: "A large crack was found on the wall.", cn: "墙上发现一条大裂缝。", words: [] },
      { en: "A small oil leak was found under the generator.", cn: "发电机下方发现一处小漏油。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "Multiple water leaks were found on the roof.", cn: "屋顶发现多处漏水。", words: [{ w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }] },
    ],
    thinking: "漏水位置描述（交接常用）：\n① near the cable entry = 电缆入口附近\n② at the roof corner = 屋顶角落\n③ around the drain = 排水口周围\n④ along the wall = 沿着墙壁\n⑤ under the AC unit = 空调机组下方\n精确描述位置方便维修人员快速定位，减少排查时间。",
    pronunciation: "cable 的 a 读 /eɪ/，不是 /æ/：/ˈkeɪ.bəl/。\nentry 的 en 读 /ɛn/，不是 /ɪn/。\n节奏：A SMALL WA-ter LEAK ｜ was FOUND ｜ NEAR the CA-ble EN-try.",
    quiz: [
      { q: "发电机下方发现一处小漏油，怎么说？", a: "A small oil leak was found under the generator." },
      { q: "a small leak 和 a large leak 在交接时有什么区别？", a: "a small leak = 小漏水（程度轻，可以先临时防护 + 计划修复）；a large leak = 大漏水（程度重，需要立即修复）。交接时描述大小，因为决定处理优先级。" },
    ],
  },
  {
    id: 249,
    en: "Temporary protection has been installed.",
    cn: "已经安装了临时防护措施。",
    ipa: "/ˈtɛm.pər.ər.i prəˈtɛk.ʃən hæz biːn ɪnˈstɔːld/",
    tags: ["第249句", "应急处理", "★★★★★"],
    when: "发现漏水后，需要立即安装临时防护措施（如防水布、沙袋、接水桶），防止漏水扩大损坏设备。",
    words: [
      { w: "temporary", ipa: "/ˈtɛm.pər.ər.i/", pos: "形容词", cn: "临时的；暂时的", memory: "① tempor = 时间（拉丁语 tempus）；② temporary = 临时的/暂时的。\ntemporary 与 permanent（永久的）相对。\n数据中心漏水处理：先 temporary protection（临时防护），再 permanent repair（永久修复）。", phonics: "tem 读 /tɛm/，po 读 /pə/，rary 读 /rər.i/，重音在第一音节。", collocations: [["temporary protection", "临时防护"], ["temporary solution", "临时方案"], ["temporary repair", "临时修复"]], examples: [["We installed temporary protection.", "我们安装了临时防护。"], ["This is a temporary solution.", "这是一个临时方案。"]] },
      { w: "protection", ipa: "/prəˈtɛk.ʃən/", pos: "名词", cn: "防护；保护", memory: "① protect = 保护（动词）；② protection = 防护/保护（名词）。\nprotection 强调'防护措施/保护手段'。\n对比：protect = 保护（动作），protection = 防护（措施/状态）。", phonics: "pro 读 /prə/，tec 读 /tɛk/，tion 读 /ʃən/，重音在第二音节。", collocations: [["water protection", "防水"], ["fire protection", "防火"], ["surge protection", "浪涌保护"]], examples: [["The equipment needs protection from water.", "设备需要防水保护。"], ["Fire protection is critical.", "防火至关重要。"]] },
    ],
    phrases: [
      { p: "temporary protection", ipa: "/ˈtɛm.pər.ər.i prəˈtɛk.ʃən/", cn: "临时防护措施", why: "temporary + protection = 临时防护。数据中心漏水处理分两步：① temporary protection（临时防护，如防水布、沙袋）→ ② permanent repair（永久修复，如重新密封、更换管道）。" },
    ],
    grammar: [
      { q: "为什么用 has been installed 而不是 was installed？", a: "has been installed = 已经安装（现在完成时，强调'已经完成，现在有效'）\nwas installed = 安装了（一般过去时，强调'过去的动作'）\n✅ Temporary protection has been installed.（临时防护已经安装好了 → 强调现在状态：防护已就位）\n✅ Temporary protection was installed yesterday.（昨天安装了临时防护 → 强调过去的动作）\n交接时用 has been installed，因为关心的是'现在防护是否就位'，不是'什么时候安装的'。" },
    ],
    pattern: "Temporary + 措施 + has/have been + 过去分词",
    patternExamples: [
      { en: "Temporary barriers have been installed.", cn: "临时屏障已安装。", words: [] },
      { en: "Temporary pumps have been deployed.", cn: "临时水泵已部署。", words: [{ w: "pumps", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }] },
      { en: "Temporary seals have been applied.", cn: "临时密封已施加。", words: [] },
    ],
    thinking: "漏水处理两步走：\n① Temporary protection（临时防护）：\n   - 防水布覆盖漏水点\n   - 沙袋围堵水流\n   - 接水桶收集漏水\n   - 警示标识提醒人员\n② Permanent repair（永久修复）：\n   - 重新密封电缆入口\n   - 更换老化管道\n   - 修复屋顶防水层\n   - 安排专业承包商施工\n交接时先报临时防护（本句），再报永久修复计划（下句）。",
    pronunciation: "temporary 重音在第一音节：/ˈtɛm.pər.ər.i/，不是 /tɛmˈpɔː.rər.i/。\nprotection 的 o 读 /ə/，不是 /oʊ/。\n节奏：TEM-po-rar-y ｜ pro-TEC-tion ｜ has been in-STALED.",
    quiz: [
      { q: "临时屏障已安装，怎么说？", a: "Temporary barriers have been installed." },
      { q: "has been installed 和 was installed 有什么区别？", a: "has been installed = 已经安装（现在完成时，强调'已经完成，现在有效'）；was installed = 安装了（一般过去时，强调'过去的动作'）。交接时用 has been installed，关心的是'现在防护是否就位'。" },
    ],
  },
  {
    id: 250,
    en: "The permanent repair is scheduled for tomorrow.",
    cn: "永久修复安排在明天进行。",
    ipa: "/ðə ˈpɜːr.mə.nənt rɪˈpeər ɪz ˈʃɛd.juːld fɔːr təˈmɒr.oʊ/",
    tags: ["第250句", "修复计划", "★★★★★"],
    when: "汇报完临时防护后，说明永久修复的计划时间，让接班人知道后续处理安排。",
    words: [
      { w: "permanent", ipa: "/ˈpɜːr.mə.nənt/", pos: "形容词", cn: "永久的；长期的", memory: "① perman = 持续（拉丁语 permanere）；② permanent = 永久的/长期的。\npermanent 与 temporary（临时的）相对。\npermanent repair = 永久修复（彻底解决问题，不是临时应急）。", phonics: "per 读 /pɜːr/，ma 读 /mə/，nent 读 /nənt/，重音在第一音节。", collocations: [["permanent repair", "永久修复"], ["permanent solution", "永久方案"], ["permanent damage", "永久损坏"]], examples: [["We need a permanent repair.", "我们需要永久修复。"], ["This is a permanent solution.", "这是一个永久方案。"]] },
      { w: "scheduled", ipa: "/ˈʃɛd.juːld/", pos: "动词(过去分词)", cn: "被安排；被计划", memory: "① schedule = 安排/计划（动词）/ 时间表（名词）；② scheduled = 被安排的。\nis scheduled for + 时间 = 安排在某个时间。\n注意 schedule 的发音：英式 /ˈʃɛd.juːl/，美式 /ˈskɛd.juːl/。", phonics: "sched 读 /ʃɛd/（英式）或 /skɛd/（美式），uled 读 /juːld/。", collocations: [["scheduled for tomorrow", "安排在明天"], ["scheduled maintenance", "计划维护"], ["as scheduled", "按计划"]], examples: [["The repair is scheduled for next week.", "修复安排在下周。"], ["The meeting is scheduled for 3 PM.", "会议安排在下午3点。"]] },
    ],
    phrases: [
      { p: "is scheduled for", ipa: "/ɪz ˈʃɛd.juːld fɔːr/", cn: "被安排在…", why: "is scheduled for + 时间 = 被安排在某个时间。这是计划/安排的标准表达，强调'已经确定时间'。" },
    ],
    grammar: [
      { q: "is scheduled for 和 will be 有什么区别？", a: "is scheduled for = 被安排在…（强调'已经计划好，时间确定'）\nwill be = 将会（强调'将来会发生'，时间可能不确定）\n✅ The permanent repair is scheduled for tomorrow.（永久修复安排在明天 → 时间已确定）\n✅ The permanent repair will be done soon.（永久修复很快就会做 → 时间不确定）\n交接时用 is scheduled for，因为关心的是'具体什么时候做'。" },
    ],
    pattern: "The + 事项 + is scheduled for + 时间",
    patternExamples: [
      { en: "The UPS maintenance is scheduled for this afternoon.", cn: "UPS维护安排在今天下午。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "The inspection is scheduled for next Monday.", cn: "检查安排在下周一。", words: [] },
      { en: "The replacement is scheduled for this weekend.", cn: "更换安排在本周末。", words: [{ w: "replacement", ipa: "/rɪˈpleɪs/", cn: "更换", phonics: "re 读 /rɪ/，place 读 /pleɪs/" }] },
    ],
    thinking: "漏水处理完整流程：\n① 发现漏水 → 记录位置、拍照\n② 安装临时防护 → 防水布、沙袋、接水桶（249句）\n③ 汇报交接 → 告知接班人漏水位置和临时防护状态\n④ 安排永久修复 → 确定时间、联系承包商（本句）\n⑤ 执行修复 → 承包商施工、验收\n⑥ 复查确认 → 修复后再次检查是否还有漏水\n本句是第④步：安排永久修复时间。",
    pronunciation: "permanent 重音在第一音节：/ˈpɜːr.mə.nənt/，不是 /pərˈmæ.nənt/。\nscheduled 的 sch 读 /ʃ/（英式）或 /sk/（美式）。\n节奏：The PER-ma-nent re-PAIR ｜ is SCHED-uled ｜ for to-MOR-row.",
    quiz: [
      { q: "UPS维护安排在今天下午，怎么说？", a: "The UPS maintenance is scheduled for this afternoon." },
      { q: "is scheduled for 和 will be 有什么区别？", a: "is scheduled for = 被安排在…（时间已确定）；will be = 将会（时间可能不确定）。交接时用 is scheduled for，关心的是'具体什么时候做'。" },
    ],
  },
  {
    id: 251,
    en: "Please check the sump pit.",
    cn: "请检查集水井。",
    ipa: "/pliːz tʃɛk ðə sʌmp pɪt/",
    tags: ["第251句", "集水井", "★★★★★"],
    when: "屋顶检查完成后，转入集水井检查。集水井是收集屋顶和地面雨水的蓄水池，雨后必须检查水位。",
    words: [
      { w: "sump pit", ipa: "/sʌmp pɪt/", pos: "名词", cn: "集水井；集水坑", memory: "① sump = 集水坑/污水坑；② pit = 坑/井。\nsump pit = 集水井（收集雨水和废水的地下蓄水池）。\n数据中心集水井通常位于地下室或地面低洼处，用于收集屋顶排水和地面径流。", phonics: "sump 读 /sʌmp/，pit 读 /pɪt/。注意 u 读短音 /ʌ/。", collocations: [["sump pit level", "集水井水位"], ["sump pump", "集水泵"], ["sump pit inspection", "集水井检查"]], examples: [["Check the sump pit water level.", "检查集水井水位。"], ["The sump pit is full.", "集水井满了。"]] },
      { w: "check", ipa: "/tʃɛk/", pos: "动词", cn: "检查", memory: "① check = 检查/核查（快速确认状态）。\n② check 比 inspect 更简单、更快速。\n集水井检查用 check（看水位、看泵是否运行），不需要 inspect（全面检查）。", phonics: "ch 读 /tʃ/，e 读 /ɛ/，ck 读 /k/。", collocations: [["check the level", "检查水位"], ["check the pump", "检查水泵"], ["check the alarm", "检查告警"]], examples: [["Please check the water level.", "请检查水位。"], ["I checked the pump this morning.", "我今天早上检查了水泵。"]] },
    ],
    phrases: [
      { p: "sump pit", ipa: "/sʌmp pɪt/", cn: "集水井", why: "sump pit 是数据中心排水系统的关键组件。雨后检查集水井水位，防止水位过高溢出导致地下室进水。" },
    ],
    grammar: [
      { q: "为什么用 check 而不是 inspect？", a: "check = 快速检查（看水位、看泵是否运行，耗时1-2分钟）\ninspect = 全面检查（检查井壁、管道、阀门、电气，耗时10-15分钟）\n✅ Please check the sump pit.（请检查集水井 → 快速看水位和泵状态）\n✅ Please inspect the sump pit system.（请全面检查集水井系统 → 包括井壁、管道、阀门、电气）\n日常交接用 check，定期维护用 inspect。" },
    ],
    pattern: "Please check the + 设施",
    patternExamples: [
      { en: "Please check the generator.", cn: "请检查发电机。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "Please check the UPS.", cn: "请检查UPS。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }] },
      { en: "Please check the drainage system.", cn: "请检查排水系统。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "drainage", ipa: "/ˈdreɪnɪdʒ/", cn: "排水", phonics: "drain 读 /dreɪn/，age 读 /ɪdʒ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
    ],
    thinking: "集水井检查要点：\n① 水位：normal（正常）/ slightly higher（略高）/ high（高）/ overflow（溢出）\n② 主泵状态：running（运行中）/ stopped（停止）/ alarm（告警）\n③ 备用泵状态：available（可用）/ unavailable（不可用）\n④ 井壁状况：clean（干净）/ debris（杂物）/ damage（损坏）\n本句是检查指令，后续 252-257 句是检查结果汇报。",
    pronunciation: "sump 的 u 读短音 /ʌ/，不是 /uː/：/sʌmp/。\npit 的 i 读短音 /ɪ/，不是长音 /iː/。\n节奏：Please CHECK ｜ the SUMP PIT.",
    quiz: [
      { q: "请检查发电机，怎么说？", a: "Please check the generator." },
      { q: "check 和 inspect 在集水井检查时有什么区别？", a: "check = 快速检查（看水位、看泵状态，1-2分钟）；inspect = 全面检查（井壁、管道、阀门、电气，10-15分钟）。日常交接用 check，定期维护用 inspect。" },
    ],
  },
  {
    id: 252,
    en: "The sump pit water level is normal.",
    cn: "集水井水位正常。",
    ipa: "/ðə sʌmp pɪt ˈwɔː.tər ˈlɛv.əl ɪz ˈnɔːr.məl/",
    tags: ["第252句", "水位正常", "★★★★★"],
    when: "汇报集水井检查结果。如果水位正常，说明排水系统工作正常，无需额外处理。",
    words: [
      { w: "water level", ipa: "/ˈwɔː.tər ˈlɛv.əl/", pos: "名词", cn: "水位", memory: "① water = 水；② level = 水平/高度。\nwater level = 水位（水面的高度）。\n集水井水位是排水系统的关键指标，水位过高可能导致溢出。", phonics: "wa 读 /wɔː/，ter 读 /tər/；lev 读 /lɛv/，el 读 /əl/。", collocations: [["water level is normal", "水位正常"], ["water level is high", "水位高"], ["water level alarm", "水位告警"]], examples: [["The water level is rising.", "水位正在上升。"], ["Check the water level indicator.", "检查水位指示器。"]] },
      { w: "normal", ipa: "/ˈnɔːr.məl/", pos: "形容词", cn: "正常的", memory: "① norm = 标准/规范；② normal = 正常的/符合标准的。\nnormal 表示'在预期范围内，无需关注'。\n对比：normal（正常）vs. abnormal（异常）。", phonics: "nor 读 /nɔːr/，mal 读 /məl/，重音在第一音节。", collocations: [["normal operation", "正常运行"], ["normal range", "正常范围"], ["back to normal", "恢复正常"]], examples: [["Everything is normal.", "一切正常。"], ["The temperature is normal.", "温度正常。"]] },
    ],
    phrases: [
      { p: "water level is normal", ipa: "/ˈwɔː.tər ˈlɛv.əl ɪz ˈnɔːr.məl/", cn: "水位正常", why: "water level + is + normal = 水位正常。这是集水井检查的标准正常结果。normal 表示水位在安全范围内，不会溢出。" },
    ],
    grammar: [
      { q: "normal 和 okay 在汇报时有什么区别？", a: "normal = 正常的（专业用语，强调'在预期范围内'）\nokay = 可以的/没问题的（口语化，不够精确）\n✅ The sump pit water level is normal.（集水井水位正常 → 专业交接用语）\n✅ The sump pit water level is okay.（集水井水位没问题 → 口语化）\n交接报告用 normal，因为更专业、更精确。" },
    ],
    pattern: "The + 指标 + is + normal/high/low",
    patternExamples: [
      { en: "The temperature is normal.", cn: "温度正常。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The pressure is high.", cn: "压力高。", words: [{ w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }] },
      { en: "The voltage is low.", cn: "电压低。", words: [{ w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }] },
    ],
    thinking: "集水井水位分级：\n① normal = 正常（无需处理）\n② slightly higher than usual = 略高于平时（关注，但无需处理）\n③ high = 高（启动备用泵，加强监控）\n④ overflow = 溢出（紧急处理，防止水进入设备区）\n本句是第①种：正常状态。后续 253 句是第②种：略高状态。",
    pronunciation: "level 的 e 读 /ɛ/，不是 /iː/：/ˈlɛv.əl/。\nnormal 的 or 读 /ɔːr/，不是 /ɑːr/。\n节奏：The SUMP PIT ｜ WA-ter LEV-el ｜ is NOR-mal.",
    quiz: [
      { q: "温度正常，怎么说？", a: "The temperature is normal." },
      { q: "normal 和 okay 在汇报时有什么区别？", a: "normal = 正常的（专业用语，强调'在预期范围内'）；okay = 可以的（口语化，不够精确）。交接报告用 normal，更专业。" },
    ],
  },
  {
    id: 253,
    en: "The water level is slightly higher than usual.",
    cn: "水位比平时略高。",
    ipa: "/ðə ˈwɔː.tər ˈlɛv.əl ɪz ˈslaɪt.li ˈhaɪ.ər ðæn ˈjuː.ʒu.əl/",
    tags: ["第253句", "水位略高", "★★★★★"],
    when: "如果集水井水位比平时略高但还在安全范围内，需要汇报但不需要立即处理。这种情况常见于大雨后。",
    words: [
      { w: "slightly", ipa: "/ˈslaɪt.li/", pos: "副词", cn: "略微；轻微地", memory: "① slight = 轻微的/微小的；② slightly = 略微/轻微地。\nslightly 表示'程度很小，不严重'。\n对比：slightly（略微）vs. significantly（显著地）vs. severely（严重地）。", phonics: "slight 读 /slaɪt/，ly 读 /li/，重音在第一音节。", collocations: [["slightly higher", "略高"], ["slightly lower", "略低"], ["slightly damaged", "轻微损坏"]], examples: [["The temperature is slightly high.", "温度略高。"], ["The pressure is slightly low.", "压力略低。"]] },
      { w: "usual", ipa: "/ˈjuː.ʒu.əl/", pos: "形容词", cn: "平时的；通常的", memory: "① usual = 平时的/通常的（符合常规的）。\n② than usual = 比平时。\nhigher than usual = 比平时高（但不一定异常）。", phonics: "u 读 /juː/，su 读 /ʒu/，al 读 /əl/，重音在第一音节。", collocations: [["than usual", "比平时"], ["as usual", "像往常一样"], ["usual level", "平时水位"]], examples: [["The water level is higher than usual.", "水位比平时高。"], ["Everything is as usual.", "一切如常。"]] },
    ],
    phrases: [
      { p: "slightly higher than usual", ipa: "/ˈslaɪt.li ˈhaɪ.ər ðæn ˈjuː.ʒu.əl/", cn: "比平时略高", why: "slightly + higher + than usual = 比平时略高。slightly 强调'程度小'，than usual 表示'与平时对比'。这是雨后常见但不紧急的状态。" },
    ],
    grammar: [
      { q: "slightly higher 和 much higher 有什么区别？", a: "slightly higher = 略高（程度小，可能不需要处理）\nmuch higher = 高很多（程度大，可能需要处理）\n✅ The water level is slightly higher than usual.（水位比平时略高 → 关注但无需处理）\n✅ The water level is much higher than usual.（水位比平时高很多 → 需要启动备用泵）\n交接时描述程度，因为决定是否需要采取行动。" },
    ],
    pattern: "The + 指标 + is + slightly/much + 形容词比较级 + than usual",
    patternExamples: [
      { en: "The temperature is slightly higher than usual.", cn: "温度比平时略高。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
      { en: "The pressure is much lower than usual.", cn: "压力比平时低很多。", words: [{ w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }] },
      { en: "The flow rate is slightly lower than usual.", cn: "流量比平时略低。", words: [] },
    ],
    thinking: "水位变化程度词汇：\n① slightly higher = 略高（+5-10%，无需处理）\n② moderately higher = 中等偏高（+10-20%，关注）\n③ much higher = 高很多（+20-50%，需要处理）\n④ significantly higher = 显著偏高（+50%+，紧急处理）\n本句 slightly higher 是最轻的程度，通常不需要额外处理，但需要记录。",
    pronunciation: "slightly 的 igh 读 /aɪ/：/ˈslaɪt.li/。\nusual 的 u 读 /juː/，不是 /ʌ/：/ˈjuː.ʒu.əl/。\n节奏：The WA-ter LEV-el ｜ is SLIGHT-ly HIGH-er ｜ than U-sual.",
    quiz: [
      { q: "压力比平时低很多，怎么说？", a: "The pressure is much lower than usual." },
      { q: "slightly higher 和 much higher 有什么区别？", a: "slightly higher = 略高（程度小，可能不需要处理）；much higher = 高很多（程度大，可能需要处理）。交接时描述程度，因为决定是否需要采取行动。" },
    ],
  },
  {
    id: 254,
    en: "The sump pump started automatically.",
    cn: "集水泵已经自动启动。",
    ipa: "/ðə sʌmp pʌmp ˈstɑːr.tɪd ˌɔː.təˈmæt.ɪk.li/",
    tags: ["第254句", "自动启动", "★★★★★"],
    when: "如果水位上升到一定高度，集水泵会自动启动排水。汇报自动启动情况，说明排水系统工作正常。",
    words: [
      { w: "sump pump", ipa: "/sʌmp pʌmp/", pos: "名词", cn: "集水泵", memory: "① sump = 集水坑；② pump = 泵。\nsump pump = 集水泵（安装在集水井内，用于排出积水的电动泵）。\n集水泵通常有自动模式（水位达到阈值自动启动）和手动模式。", phonics: "sump 读 /sʌmp/，pump 读 /pʌmp/。注意两个 p 连读。", collocations: [["sump pump alarm", "集水泵告警"], ["sump pump failure", "集水泵故障"], ["backup sump pump", "备用集水泵"]], examples: [["The sump pump is running.", "集水泵正在运行。"], ["The sump pump failed.", "集水泵故障了。"]] },
      { w: "automatically", ipa: "/ˌɔː.təˈmæt.ɪk.li/", pos: "副词", cn: "自动地", memory: "① auto = 自动（希腊语 autos = 自己）；② automatic = 自动的；③ automatically = 自动地。\nautomatically 表示'无需人工干预，系统自动执行'。", phonics: "au 读 /ɔː/，to 读 /tə/，mat 读 /mæt/，ic 读 /ɪk/，ly 读 /li/，重音在第三音节。", collocations: [["started automatically", "自动启动"], ["shut down automatically", "自动关闭"], ["switched automatically", "自动切换"]], examples: [["The generator started automatically.", "发电机自动启动了。"], ["The system shuts down automatically.", "系统自动关闭。"]] },
    ],
    phrases: [
      { p: "started automatically", ipa: "/ˈstɑːr.tɪd ˌɔː.təˈmæt.ɪk.li/", cn: "自动启动", why: "start + automatically = 自动启动。集水泵通常设置为自动模式，水位达到阈值时自动启动排水，无需人工操作。" },
    ],
    grammar: [
      { q: "为什么用 started 而不是 has started？", a: "started = 启动了（一般过去时，强调'过去的动作'）\nhas started = 已经启动了（现在完成时，强调'现在状态'）\n✅ The sump pump started automatically.（集水泵自动启动了 → 强调'启动'这个动作发生在过去）\n✅ The sump pump has started.（集水泵已经启动了 → 强调'现在正在运行'）\n交接时用 started，因为汇报的是'刚才发生了什么'。" },
    ],
    pattern: "The + 设备 + started/stopped + automatically",
    patternExamples: [
      { en: "The generator started automatically.", cn: "发电机自动启动了。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "started", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "The cooling system stopped automatically.", cn: "冷却系统自动停止了。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "The backup pump started automatically.", cn: "备用泵自动启动了。", words: [{ w: "backup", ipa: "/ˈbækʌp/", cn: "备份", phonics: "back 读 /bæk/，up 读 /ʌp/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "started", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
    ],
    thinking: "集水泵工作模式：\n① Auto mode（自动模式）：水位达到 High Level 自动启动，降到 Low Level 自动停止\n② Manual mode（手动模式）：人工按按钮启动/停止\n③ Alarm（告警）：泵故障或水位超高时触发告警\n交接时汇报泵的工作状态：started automatically = 自动启动（正常），failed to start = 启动失败（故障）。",
    pronunciation: "automatically 重音在第三音节：/ˌɔː.təˈmæt.ɪk.li/，不是 /ˈɔː.tə.mæt.ɪk.li/。\npump 的 u 读短音 /ʌ/，不是 /uː/。\n节奏：The SUMP PUMP ｜ STAR-ted ｜ au-to-MAT-i-cal-ly.",
    quiz: [
      { q: "发电机自动启动了，怎么说？", a: "The generator started automatically." },
      { q: "started 和 has started 有什么区别？", a: "started = 启动了（一般过去时，强调'过去的动作'）；has started = 已经启动了（现在完成时，强调'现在状态'）。交接时用 started，汇报的是'刚才发生了什么'。" },
    ],
  },
  {
    id: 255,
    en: "The sump pump is operating normally.",
    cn: "集水泵运行正常。",
    ipa: "/ðə sʌmp pʌmp ɪz ˈɒp.ər.eɪ.tɪŋ ˈnɔːr.mə.li/",
    tags: ["第255句", "运行正常", "★★★★★"],
    when: "汇报集水泵当前运行状态。如果运行正常，说明排水系统工作正常，水位会逐步下降。",
    words: [
      { w: "operating", ipa: "/ˈɒp.ər.eɪ.tɪŋ/", pos: "动词(现在分词)", cn: "运行中", memory: "① operate = 运行/操作；② operating = 运行中（现在分词）。\nis operating = 正在运行（现在进行时）。\n对比：is operating（正在运行）vs. has operated（已经运行过）。", phonics: "op 读 /ɒp/，er 读 /ə/，at 读 /eɪ/，ing 读 /ɪŋ/，重音在第一音节。", collocations: [["operating normally", "运行正常"], ["operating mode", "运行模式"], ["operating temperature", "运行温度"]], examples: [["The UPS is operating normally.", "UPS运行正常。"], ["The system is operating in manual mode.", "系统以手动模式运行。"]] },
      { w: "normally", ipa: "/ˈnɔːr.mə.li/", pos: "副词", cn: "正常地", memory: "① normal = 正常的（形容词）；② normally = 正常地（副词）。\nnormally 修饰动词，表示'以正常方式运行'。\n对比：is normal（是正常的，修饰名词）vs. operating normally（运行正常，修饰动词）。", phonics: "nor 读 /nɔːr/，mal 读 /mə/，ly 读 /li/，重音在第一音节。", collocations: [["running normally", "运行正常"], ["functioning normally", "功能正常"], ["behaving normally", "行为正常"]], examples: [["Everything is operating normally.", "一切运行正常。"], ["The equipment is functioning normally.", "设备功能正常。"]] },
    ],
    phrases: [
      { p: "is operating normally", ipa: "/ɪz ˈɒp.ər.eɪ.tɪŋ ˈnɔːr.mə.li/", cn: "运行正常", why: "is operating + normally = 正在正常运行。is operating 是现在进行时，表示'当前正在运行'；normally 修饰 operating，表示'以正常方式'。" },
    ],
    grammar: [
      { q: "is operating normally 和 is normal 有什么区别？", a: "is operating normally = 运行正常（强调'运行过程正常'）\nis normal = 是正常的（强调'状态正常'）\n✅ The sump pump is operating normally.（集水泵运行正常 → 强调'运行过程正常，排水正常'）\n✅ The sump pump status is normal.（集水泵状态正常 → 强调'状态正常，没有告警'）\n交接时用 is operating normally，因为关心的是'运行是否正常'，不只是'有没有告警'。" },
    ],
    pattern: "The + 设备 + is operating/running + normally",
    patternExamples: [
      { en: "The UPS is operating normally.", cn: "UPS运行正常。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The generator is running normally.", cn: "发电机运行正常。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The cooling system is operating normally.", cn: "冷却系统运行正常。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
    ],
    thinking: "设备运行状态词汇：\n① operating normally = 运行正常\n② operating with minor issues = 运行有小问题\n③ operating abnormally = 运行异常\n④ not operating / shut down = 未运行/已停机\n⑤ failed / broken down = 故障/宕机\n本句 operating normally 是最好的状态。后续 256 句检查备用泵是否可用。",
    pronunciation: "operating 重音在第一音节：/ˈɒp.ər.eɪ.tɪŋ/，不是 /ɒpˈɛr.eɪ.tɪŋ/。\nnormally 的 or 读 /ɔːr/，不是 /ɑːr/。\n节奏：The SUMP PUMP ｜ is OP-er-a-ting ｜ NOR-mal-ly.",
    quiz: [
      { q: "UPS运行正常，怎么说？", a: "The UPS is operating normally." },
      { q: "is operating normally 和 is normal 有什么区别？", a: "is operating normally = 运行正常（强调'运行过程正常'）；is normal = 是正常的（强调'状态正常'）。交接时用 is operating normally，关心的是'运行是否正常'。" },
    ],
  },
];

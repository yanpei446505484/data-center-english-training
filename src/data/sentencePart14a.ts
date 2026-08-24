// EXPORTS: MOCK_SENTENCES_PART14A

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART14A: ISentence[] = [
  {
    id: 451,
    en: "Power failure detected.",
    cn: "发现停电。",
    ipa: "/ˈpaʊ.ər ˈfeɪl.jər dɪˈtɛk.tɪd/",
    tags: ["第451句", "EOP应急", "★★★★★"],
    when: "进入EOP应急演练环节。停电是数据中心最严重的应急事件之一，需要立即启动应急操作程序。本句是EOP的第一个场景触发词。",
    words: [
      { w: "power failure", ipa: "/ˈpaʊ.ər ˈfeɪl.jər/", pos: "名词", cn: "停电；电力故障", memory: "① power = 电力/电源；② failure = 故障/失效。\npower failure = 市电停电，是数据中心最严重的应急事件。\n对比：power outage = 停电（美式更常用）；power cut = 停电（英式）。", phonics: "power 读 /ˈpaʊ.ər/，failure 读 /ˈfeɪl.jər/。", collocations: [["power failure", "停电"], ["total power failure", "全面停电"], ["power failure alarm", "停电告警"]], examples: [["A power failure occurred at 3 AM.", "凌晨3点发生停电。"], ["The UPS prevented a power failure.", "UPS防止了停电事故。"]] },
      { w: "detected", ipa: "/dɪˈtɛk.tɪd/", pos: "动词(过去分词)", cn: "被检测到", memory: "① detect = 检测/发现；② detected = 被检测到（被动语态）。\n应急报告中用 detected 表示系统自动发现了异常。", phonics: "de 读 /dɪ/，tect 读 /tɛk/，ed 读 /tɪd/，重音在第二音节。", collocations: [["failure detected", "故障已检测"], ["alarm detected", "告警已检测"], ["anomaly detected", "异常已检测"]], examples: [["A fault was detected by the system.", "系统检测到一个故障。"], ["Smoke was detected in the data hall.", "机房内检测到烟雾。"]] },
    ],
    phrases: [
      { p: "power failure detected", ipa: "/ˈpaʊ.ər ˈfeɪl.jər dɪˈtɛk.tɪd/", cn: "发现停电", why: "名词 + detected = …被检测到。这是应急报告的标准格式，简洁明了地描述事件类型和状态。" },
    ],
    grammar: [
      { q: "为什么用 detected 而不用 found？", a: "detected = 被系统/传感器自动检测到（技术用语，强调自动化）\nfound = 被人发现（人工发现，强调人为）\n✅ Power failure detected.（停电被系统检测到 → 自动告警）\n✅ A problem was found during inspection.（巡检中发现了问题 → 人工发现）\n应急场景用 detected，因为BMS系统自动检测并告警。" },
    ],
    pattern: "事件类型 + detected",
    patternExamples: [
      { en: "Water leakage detected.", cn: "发现漏水。", words: [{ w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }] },
      { en: "Fire alarm detected.", cn: "检测到消防告警。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Intrusion detected.", cn: "检测到入侵。", words: [] },
    ],
    thinking: "EOP（Emergency Operating Procedure）= 应急操作程序，是数据中心应对突发事件的标准操作流程。\nEOP 触发场景：① 停电 ② UPS故障 ③ 发电机启动失败 ④ 变压器跳闸 ⑤ 消防报警 ⑥ 漏水 ⑦ 烟雾。\nEOP 核心流程：发现事件 → 启动EOP → 通知相关方 → 执行应急措施 → 确认恢复。\n停电是最高优先级的应急事件，因为直接影响IT负载运行。",
    pronunciation: "power 的 ow 读 /aʊ/：/ˈpaʊ.ər/。\nfailure 的 ai 读 /eɪ/：/ˈfeɪl.jər/。\ndetected 重音在第二音节：/dɪˈtɛk.tɪd/。\n节奏：POW-er FAIL-ure ｜ de-TEC-ted.",
    quiz: [
      { q: "发现漏水，怎么说？", a: "Water leakage detected." },
      { q: "detected 和 found 在应急场景有什么区别？", a: "detected = 被系统/传感器自动检测到（技术用语）；found = 被人发现（人工发现）。应急场景用 detected，因为BMS系统自动检测并告警。" },
    ],
  },
  {
    id: 452,
    en: "UPS failure detected.",
    cn: "UPS故障。",
    ipa: "/ˌjuː.piːˈɛs ˈfeɪl.jər dɪˈtɛk.tɪd/",
    tags: ["第452句", "EOP应急", "★★★★★"],
    when: "停电后UPS是第二道防线，如果UPS也故障，IT负载将直接断电。这是极其严重的双重故障场景。",
    words: [
      { w: "UPS failure", ipa: "/ˌjuː.piːˈɛs ˈfeɪl.jər/", pos: "名词", cn: "UPS故障", memory: "① UPS = Uninterruptible Power Supply（不间断电源）；② failure = 故障。\nUPS故障意味着备用电源系统失效，IT负载失去保护。\nUPS故障类型：① 逆变器故障 ② 电池故障 ③ 静态开关故障 ④ 控制板故障。", phonics: "UPS 读字母音 /ˌjuː.piːˈɛs/，failure 读 /ˈfeɪl.jər/。", collocations: [["UPS failure", "UPS故障"], ["UPS alarm", "UPS告警"], ["UPS bypass", "UPS旁路"]], examples: [["UPS No.1 failure detected.", "1号UPS故障。"], ["The UPS failure caused a load drop.", "UPS故障导致负载掉电。"]] },
    ],
    phrases: [
      { p: "UPS failure detected", ipa: "/ˌjuː.piːˈɛs ˈfeɪl.jər dɪˈtɛk.tɪd/", cn: "UPS故障已检测", why: "与 power failure detected 同构，只是事件类型从停电变为UPS故障。UPS故障比停电更严重，因为最后一道防线也失效了。" },
    ],
    grammar: [
      { q: "UPS故障和停电的严重程度怎么比较？", a: "严重程度排序：\n① Power failure（市电停电）→ UPS自动接管，IT负载不受影响 → 中等紧急\n② UPS failure（UPS故障）→ IT负载可能直接断电 → 极其紧急\n③ Power failure + UPS failure（双重故障）→ IT负载必然断电 → 最高紧急\nUPS故障比停电更严重，因为UPS是保护IT负载的最后一道防线。" },
    ],
    pattern: "UPS + failure/alarm + detected",
    patternExamples: [
      { en: "UPS No.2 failure detected.", cn: "2号UPS故障。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }] },
      { en: "UPS battery alarm detected.", cn: "UPS电池告警已检测。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "battery", ipa: "/ˈbætəri/", cn: "电池", phonics: "bat 读 /bæt/，tery 读 /təri/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "UPS bypass activated.", cn: "UPS已切换到旁路。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }] },
    ],
    thinking: "UPS故障应急措施：\n① 确认哪台UPS故障（No.1/No.2/No.3）\n② 确认负载是否已自动转移到备用UPS\n③ 如果无法转移，准备手动转移负载\n④ 通知UPS供应商紧急到场\n⑤ 持续监控剩余UPS的负载率\nUPS故障时，每秒钟都在倒计时。",
    pronunciation: "UPS 读字母音：/ˌjuː.piːˈɛs/，三个字母分别读。\nfailure 重音在第一音节：/ˈfeɪl.jər/。\n节奏：U-P-S FAIL-ure ｜ de-TEC-ted.",
    quiz: [
      { q: "2号UPS电池告警，怎么说？", a: "UPS No.2 battery alarm detected." },
      { q: "UPS故障和停电哪个更严重？", a: "UPS故障更严重。停电时UPS自动接管保护IT负载；但UPS故障意味着最后一道防线失效，IT负载可能直接断电。双重故障（停电+UPS故障）是最紧急的情况。" },
    ],
  },
  {
    id: 453,
    en: "Generator failed to start.",
    cn: "发电机启动失败。",
    ipa: "/ˈdʒɛn.ə.reɪ.tər feɪld tuː stɑːrt/",
    tags: ["第453句", "EOP应急", "★★★★★"],
    when: "停电后UPS接管，同时发电机应自动启动。如果发电机启动失败，UPS电池将持续放电直至耗尽，时间窗口有限。",
    words: [
      { w: "generator", ipa: "/ˈdʒɛn.ə.reɪ.tər/", pos: "名词", cn: "发电机", memory: "① generate = 产生/发电；② generator = 发电机。\n数据中心发电机通常是柴油发电机（diesel generator），用于长时间停电时供电。", phonics: "gen 读 /dʒɛn/，er 读 /ə/，a 读 /eɪ/，tor 读 /tər/，重音在第一音节。", collocations: [["diesel generator", "柴油发电机"], ["generator start", "发电机启动"], ["generator failure", "发电机故障"]], examples: [["The generator started successfully.", "发电机启动成功。"], ["Generator No.1 failed to start.", "1号发电机启动失败。"]] },
      { w: "failed to start", ipa: "/feɪld tuː stɑːrt/", pos: "动词短语", cn: "启动失败", memory: "① fail = 失败；② to start = 启动。\nfail to + 动词 = 未能做某事。\n发电机启动失败是严重事件，意味着长时间停电后没有后备电源。", phonics: "failed 读 /feɪld/，to 读 /tuː/，start 读 /stɑːrt/。", collocations: [["failed to start", "启动失败"], ["failed to synchronize", "并网失败"], ["failed to transfer", "切换失败"]], examples: [["The generator failed to start on the first attempt.", "发电机第一次启动失败。"], ["The ATS failed to transfer.", "ATS切换失败。"]] },
    ],
    phrases: [
      { p: "failed to start", ipa: "/feɪld tuː stɑːrt/", cn: "启动失败", why: "fail to + 动词 = 未能做某事。发电机启动失败意味着应急电源无法就位，UPS电池将持续放电。" },
    ],
    grammar: [
      { q: "failed to start 和 didn't start 有什么区别？", a: "failed to start = 尝试了但失败了（强调尝试过程）\ndidn't start = 没有启动（只是描述结果，可能没尝试）\n✅ The generator failed to start.（发电机尝试启动但失败了 → 有启动信号但没成功）\n✅ The generator didn't start.（发电机没有启动 → 可能根本没收到启动信号）\n应急场景用 failed to start，因为发电机收到了启动信号但没能成功启动。" },
    ],
    pattern: "设备 + failed to + 动作",
    patternExamples: [
      { en: "The ATS failed to transfer.", cn: "ATS切换失败。", words: [] },
      { en: "The pump failed to start.", cn: "水泵启动失败。", words: [{ w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "The breaker failed to close.", cn: "断路器合闸失败。", words: [{ w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
    ],
    thinking: "发电机启动失败的应急措施：\n① 尝试手动启动发电机\n② 如果手动启动也失败，检查燃油供应、启动电池、控制面板\n③ 计算UPS电池剩余时间（通常15-30分钟满载）\n④ 通知发电机供应商紧急到场\n⑤ 准备负载削减计划（关闭非关键负载延长电池时间）\n发电机启动失败时，UPS电池时间是唯一的倒计时。",
    pronunciation: "generator 重音在第一音节：/ˈdʒɛn.ə.reɪ.tər/。\nfailed 的 ai 读 /eɪ/：/feɪld/。\nstart 的 ar 读 /ɑːr/：/stɑːrt/。\n节奏：GEN-er-a-tor ｜ FAILED to START.",
    quiz: [
      { q: "ATS切换失败，怎么说？", a: "The ATS failed to transfer." },
      { q: "发电机启动失败时最重要的应急措施是什么？", a: "计算UPS电池剩余时间。发电机启动失败后，UPS电池是唯一电源，必须知道还能撑多久（通常15-30分钟满载），然后决定是否削减负载延长电池时间，或准备有序关机。" },
    ],
  },
  {
    id: 454,
    en: "Transformer protection has tripped.",
    cn: "变压器保护动作。",
    ipa: "/trænsˈfɔːr.mər prəˈtɛk.ʃən hæz trɪpt/",
    tags: ["第454句", "EOP应急", "★★★★★"],
    when: "变压器保护动作意味着变压器因内部故障（过流、过温、瓦斯等）被保护装置自动切断，下游所有负载失去供电。",
    words: [
      { w: "transformer", ipa: "/trænsˈfɔːr.mər/", pos: "名词", cn: "变压器", memory: "① trans- = 转换；② former = 形成器 → transformer = 变压器（转换电压的设备）。\n数据中心变压器将中压（11kV/33kV）降压为低压（400V/230V）供IT设备使用。", phonics: "trans 读 /træns/，for 读 /fɔːr/，mer 读 /mər/，重音在第二音节。", collocations: [["power transformer", "电力变压器"], ["dry-type transformer", "干式变压器"], ["oil-filled transformer", "油浸式变压器"]], examples: [["Transformer No.1 is operating normally.", "1号变压器运行正常。"], ["The transformer tripped due to overcurrent.", "变压器因过流跳闸。"]] },
      { w: "protection", ipa: "/prəˈtɛk.ʃən/", pos: "名词", cn: "保护（装置）", memory: "① protect = 保护；② protection = 保护装置/保护系统。\n变压器保护包括：过流保护、差动保护、瓦斯保护、过温保护等。", phonics: "pro 读 /prə/，tec 读 /tɛk/，tion 读 /ʃən/，重音在第二音节。", collocations: [["protection relay", "保护继电器"], ["protection trip", "保护跳闸"], ["protection settings", "保护定值"]], examples: [["The protection relay activated.", "保护继电器动作了。"], ["Check the protection settings.", "检查保护定值。"]] },
      { w: "tripped", ipa: "/trɪpt/", pos: "动词(过去分词)", cn: "跳闸；动作", memory: "① trip = 跳闸（电气语境）；② tripped = 已跳闸。\nprotection has tripped = 保护装置已动作（断路器已跳开），变压器与电源断开。", phonics: "trip 读 /trɪp/，ped 读 /pt/。", collocations: [["breaker tripped", "断路器跳闸"], ["protection tripped", "保护动作"], ["relay tripped", "继电器动作"]], examples: [["The breaker tripped at 2 AM.", "断路器凌晨2点跳闸。"], ["No trips were recorded.", "没有跳闸记录。"]] },
    ],
    phrases: [
      { p: "protection has tripped", ipa: "/prəˈtɛk.ʃən hæz trɪpt/", cn: "保护已动作", why: "has tripped = 现在完成时，表示保护动作已经发生，当前状态是变压器已断电。交接时报告已发生的保护动作。" },
    ],
    grammar: [
      { q: "has tripped 和 tripped 有什么区别？", a: "has tripped = 现在完成时（强调动作已完成，影响持续到现在）\ntripped = 一般过去时（只描述过去发生的事）\n✅ Transformer protection has tripped.（变压器保护已动作 → 现在变压器处于断电状态）\n✅ The protection tripped at 3 AM.（保护在凌晨3点动作了 → 描述时间点）\n应急报告中用 has tripped，因为关心的是当前状态（变压器断电）。" },
    ],
    pattern: "设备 + protection + has tripped",
    patternExamples: [
      { en: "Transformer No.2 protection has tripped.", cn: "2号变压器保护已动作。", words: [{ w: "transformer", ipa: "/trænsˈfɔːrmər/", cn: "变压器", phonics: "trans 读 /træns/，former 读 /fɔːrmər/" }, { w: "protection", ipa: "/prəˈtɛkʃən/", cn: "保护", phonics: "pro 读 /prə/，tection 读 /tɛkʃən/" }] },
      { en: "MV switchgear protection has tripped.", cn: "中压开关柜保护已动作。", words: [{ w: "protection", ipa: "/prəˈtɛkʃən/", cn: "保护", phonics: "pro 读 /prə/，tection 读 /tɛkʃən/" }] },
      { en: "Bus protection has tripped.", cn: "母线保护已动作。", words: [{ w: "protection", ipa: "/prəˈtɛkʃən/", cn: "保护", phonics: "pro 读 /prə/，tection 读 /tɛkʃən/" }] },
    ],
    thinking: "变压器保护动作的应急措施：\n① 确认哪台变压器跳闸（No.1/No.2）\n② 确认负载是否已自动转移到备用变压器（ATS/STS切换）\n③ 检查保护装置的动作原因（过流/差动/瓦斯/过温）\n④ 如果是瓦斯保护动作，严禁重新合闸（可能有内部故障）\n⑤ 通知变压器供应商和电力公司\n变压器保护动作通常意味着内部故障，不能盲目恢复供电。",
    pronunciation: "transformer 重音在第二音节：/trænsˈfɔːr.mər/。\nprotection 重音在第二音节：/prəˈtɛk.ʃən/。\ntripped 读 /trɪpt/，注意 p 和 t 连读。\n节奏：trans-FOR-mer ｜ pro-TEC-tion ｜ has TRIPPED.",
    quiz: [
      { q: "2号变压器保护已动作，怎么说？", a: "Transformer No.2 protection has tripped." },
      { q: "变压器瓦斯保护动作后能直接重新合闸吗？", a: "不能。瓦斯保护动作通常意味着变压器内部有故障（如绝缘损坏、匝间短路），必须经过专业检查和试验后才能恢复供电，盲目合闸可能导致爆炸。" },
    ],
  },
  {
    id: 455,
    en: "MV breaker has tripped.",
    cn: "中压断路器跳闸。",
    ipa: "/ˌɛmˈviː ˈbreɪ.kər hæz trɪpt/",
    tags: ["第455句", "EOP应急", "★★★★★"],
    when: "中压断路器跳闸意味着中压供电线路被切断，下游变压器和所有负载失去电源。MV = Medium Voltage（中压），通常11kV或33kV。",
    words: [
      { w: "MV breaker", ipa: "/ˌɛmˈviː ˈbreɪ.kər/", pos: "名词", cn: "中压断路器", memory: "① MV = Medium Voltage（中压）；② breaker = 断路器。\n中压断路器是中压开关柜的核心设备，负责接通和断开中压电路。\n断路器跳闸 = 自动断开电路（保护动作）。", phonics: "MV 读字母音 /ˌɛmˈviː/，breaker 读 /ˈbreɪ.kər/。", collocations: [["MV breaker", "中压断路器"], ["LV breaker", "低压断路器"], ["breaker trip", "断路器跳闸"]], examples: [["The MV breaker tripped due to overcurrent.", "中压断路器因过流跳闸。"], ["Close the MV breaker.", "合上中压断路器。"]] },
    ],
    phrases: [
      { p: "MV breaker has tripped", ipa: "/ˌɛmˈviː ˈbreɪ.kər hæz trɪpt/", cn: "中压断路器已跳闸", why: "与 transformer protection has tripped 同构，只是跳闸的设备从变压器保护变为中压断路器。" },
    ],
    grammar: [
      { q: "MV breaker 和 LV breaker 有什么区别？", a: "MV breaker = 中压断路器（11kV/33kV），用于中压配电系统\nLV breaker = 低压断路器（400V/230V），用于低压配电系统\n中压断路器体积更大、灭弧能力更强、保护更复杂。\n数据中心供电层级：MV breaker → 变压器 → LV breaker → IT负载。" },
    ],
    pattern: "MV/LV breaker + has tripped",
    patternExamples: [
      { en: "LV breaker No.3 has tripped.", cn: "3号低压断路器已跳闸。", words: [{ w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
      { en: "The main MV breaker has tripped.", cn: "主中压断路器已跳闸。", words: [{ w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
      { en: "Feeder breaker has tripped.", cn: "馈线断路器已跳闸。", words: [{ w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
    ],
    thinking: "中压断路器跳闸的应急措施：\n① 确认哪台断路器跳闸（主进线/馈线/联络）\n② 检查保护继电器动作信息（过流/速断/接地/差动）\n③ 如果是馈线断路器跳闸，尝试切换到备用馈线\n④ 如果是主进线跳闸，确认备用电源是否自动投入\n⑤ 通知电力公司和变压器供应商\n中压断路器跳闸影响范围大，需要优先恢复供电。",
    pronunciation: "MV 读字母音：/ˌɛmˈviː/，两个字母分别读。\nbreaker 重音在第一音节：/ˈbreɪ.kər/。\ntripped 读 /trɪpt/。\n节奏：M-V BREAK-er ｜ has TRIPPED.",
    quiz: [
      { q: "低压3号断路器跳闸了，怎么说？", a: "LV breaker No.3 has tripped." },
      { q: "中压断路器跳闸后应该先看什么？", a: "先看保护继电器的动作信息（过流/速断/接地/差动），确定跳闸原因后再决定是否可以试送电。如果是差动保护动作，说明有内部故障，不能盲目合闸。" },
    ],
  },
  {
    id: 456,
    en: "CRAC has stopped.",
    cn: "精密空调停止运行。",
    ipa: "/ˌsiː.ɑːr.eɪˈsiː hæz stɒpt/",
    tags: ["第456句", "EOP应急", "★★★★★"],
    when: "精密空调停止运行会导致机房温度快速上升，IT设备可能因过热而宕机。虽然没有停电紧急，但必须在短时间内恢复。",
    words: [
      { w: "CRAC", ipa: "/ˌsiː.ɑːr.eɪˈsiː/", pos: "名词", cn: "精密空调", memory: "① CRAC = Computer Room Air Conditioning（机房精密空调）。\n② 与家用空调不同，CRAC 专为数据中心设计，提供精确温湿度控制。\n对比：CRAH = Computer Room Air Handler（风墙空调/空气处理机组）。", phonics: "CRAC 读字母音 /ˌsiː.ɑːr.eɪˈsiː/。", collocations: [["CRAC unit", "精密空调机组"], ["CRAC failure", "精密空调故障"], ["CRAC alarm", "精密空调告警"]], examples: [["CRAC No.5 has stopped.", "5号精密空调已停止运行。"], ["All CRAC units are operating normally.", "所有精密空调运行正常。"]] },
      { w: "stopped", ipa: "/stɒpt/", pos: "动词(过去分词)", cn: "停止运行", memory: "① stop = 停止；② stopped = 已停止。\nCRAC has stopped = 精密空调已停止运行（可能是故障、断电或手动关闭）。", phonics: "stop 读 /stɒp/，ped 读 /pt/。", collocations: [["has stopped", "已停止"], ["stopped running", "停止运行"], ["stopped unexpectedly", "意外停止"]], examples: [["The pump has stopped.", "水泵已停止。"], ["CRAC stopped due to high pressure alarm.", "精密空调因高压告警停止。"]] },
    ],
    phrases: [
      { p: "CRAC has stopped", ipa: "/ˌsiː.ɑːr.eɪˈsiː hæz stɒpt/", cn: "精密空调已停止", why: "has stopped = 现在完成时，表示空调已经停止运行，当前处于停机状态。交接时报告空调停机事件。" },
    ],
    grammar: [
      { q: "CRAC stopped 和 CRAC failure 有什么区别？", a: "CRAC has stopped = 精密空调停止运行（描述状态，可能是故障也可能是正常关机）\nCRAC failure = 精密空调故障（明确表示是故障导致的停机）\n✅ CRAC has stopped.（精密空调停了 → 原因待查）\n✅ CRAC failure detected.（精密空调故障 → 明确是故障）\n应急场景两者都可能使用，failure 更明确。" },
    ],
    pattern: "CRAC/设备 + has stopped",
    patternExamples: [
      { en: "CRAC No.3 has stopped.", cn: "3号精密空调已停止。", words: [] },
      { en: "The cooling tower fan has stopped.", cn: "冷却塔风机已停止。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }] },
      { en: "The chilled water pump has stopped.", cn: "冷冻水泵已停止。", words: [{ w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }] },
    ],
    thinking: "精密空调停止的应急措施：\n① 确认哪台CRAC停止（编号）\n② 检查停止原因（高压/低压/过流/漏水/手动关机）\n③ 如果剩余CRAC无法维持温度，启动备用CRAC\n④ 监控机房温度上升速率（通常满载时每5分钟升1-2°C）\n⑤ 如果温度超过阈值（通常28°C），准备IT负载削减\n机房温度上升比停电慢，但同样危险。",
    pronunciation: "CRAC 读字母音：/ˌsiː.ɑːr.eɪˈsiː/。\nstopped 读 /stɒpt/，注意 p 和 t 连读。\n节奏：C-R-A-C ｜ has STOPPED.",
    quiz: [
      { q: "冷却塔风机停了，怎么说？", a: "The cooling tower fan has stopped." },
      { q: "精密空调停止后机房温度会怎样？", a: "机房温度会快速上升，满载时通常每5分钟升高1-2°C。如果超过28°C（部分设备25°C），IT设备可能因过热宕机。需要尽快启动备用空调或削减负载。" },
    ],
  },
  {
    id: 457,
    en: "Water leakage detected.",
    cn: "发现漏水。",
    ipa: "/ˈwɔː.tər ˈliː.kɪdʒ dɪˈtɛk.tɪd/",
    tags: ["第457句", "EOP应急", "★★★★★"],
    when: "漏水是数据中心的严重威胁，可能导致设备短路、地板下积水、甚至引发触电危险。漏水传感器自动检测并告警。",
    words: [
      { w: "water leakage", ipa: "/ˈwɔː.tər ˈliː.kɪdʒ/", pos: "名词", cn: "漏水；水泄漏", memory: "① water = 水；② leakage = 泄漏/渗漏。\nwater leakage 泛指任何水的泄漏，包括冷冻水管漏水、屋顶漏水、消防水管漏水等。\n对比：water leak = 漏水（更口语化）；water ingress = 进水（外部水进入）。", phonics: "water 读 /ˈwɔː.tər/，leakage 读 /ˈliː.kɪdʒ/。", collocations: [["water leakage", "漏水"], ["water leakage sensor", "漏水传感器"], ["water leakage alarm", "漏水告警"]], examples: [["Water leakage was detected under the raised floor.", "在架空地板下检测到漏水。"], ["No water leakage found.", "未发现漏水。"]] },
    ],
    phrases: [
      { p: "water leakage detected", ipa: "/ˈwɔː.tər ˈliː.kɪdʒ dɪˈtɛk.tɪd/", cn: "发现漏水", why: "与 power failure detected 同构，事件类型变为漏水。漏水告警通常由地板下的漏水传感器触发。" },
    ],
    grammar: [
      { q: "water leakage 和 water leak 有什么区别？", a: "water leakage = 漏水（正式用语，强调泄漏的过程/现象）\nwater leak = 漏水（更口语化，强调具体的漏水点）\n✅ Water leakage detected.（检测到漏水 → 正式告警用语）\n✅ There's a water leak near the CRAC.（精密空调附近有个漏水点 → 口语描述）\n应急报告中用 water leakage。" },
    ],
    pattern: "Water leakage + detected/found",
    patternExamples: [
      { en: "Water leakage detected in the data hall.", cn: "机房内发现漏水。", words: [{ w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "data", ipa: "/ˈdeɪtə/", cn: "数据", phonics: "da 读 /deɪ/，ta 读 /tə/" }] },
      { en: "Water leakage found near the UPS room.", cn: "UPS房附近发现漏水。", words: [{ w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "No water leakage detected.", cn: "未检测到漏水。", words: [{ w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }] },
    ],
    thinking: "漏水应急措施：\n① 确认漏水位置和范围（哪个区域、多大面积）\n② 判断漏水来源（冷冻水管/消防管/屋顶/外部雨水）\n③ 如果是冷冻水管漏水，立即关闭相关阀门\n④ 如果是屋顶/外墙漏水，安装临时接水装置\n⑤ 检查漏水是否影响到电气设备（有触电风险）\n⑥ 拍照记录漏水情况\n漏水位置比漏水大小更重要——靠近电气设备的小漏水比远离设备的大漏水更危险。",
    pronunciation: "water 读 /ˈwɔː.tər/，不是 /ˈwɑː.tər/。\nleakage 的 ea 读长音 /iː/：/ˈliː.kɪdʒ/。\ndetected 重音在第二音节：/dɪˈtɛk.tɪd/。\n节奏：WA-ter LEAK-age ｜ de-TEC-ted.",
    quiz: [
      { q: "机房内发现漏水，怎么说？", a: "Water leakage detected in the data hall." },
      { q: "漏水时最危险的情况是什么？", a: "漏水接触到电气设备。水是导体，如果漏水渗入配电柜、UPS、PDU等电气设备，可能导致短路、设备损坏甚至触电。因此漏水应急的第一步是判断漏水与电气设备的距离。" },
    ],
  },
  {
    id: 458,
    en: "Fire alarm activated.",
    cn: "消防报警启动。",
    ipa: "/ˈfaɪ.ər əˈlɑːrm ˈæk.tɪ.veɪ.tɪd/",
    tags: ["第458句", "EOP应急", "★★★★★"],
    when: "消防报警是数据中心最紧急的事件之一，可能意味着火灾正在发生。消防报警启动后需要立即确认是否为真实火灾，并启动疏散程序。",
    words: [
      { w: "fire alarm", ipa: "/ˈfaɪ.ər əˈlɑːrm/", pos: "名词", cn: "消防报警；火警", memory: "① fire = 火灾/火；② alarm = 报警/警报。\nfire alarm = 消防报警系统/火警告警。\n数据中心消防系统包括：烟感探测器、温感探测器、手动报警按钮、气体灭火系统。", phonics: "fire 读 /ˈfaɪ.ər/，alarm 读 /əˈlɑːrm/。", collocations: [["fire alarm", "消防报警"], ["fire alarm panel", "消防报警主机"], ["fire alarm test", "消防报警测试"]], examples: [["The fire alarm was activated.", "消防报警已启动。"], ["It was a false fire alarm.", "是一次误报。"]] },
      { w: "activated", ipa: "/ˈæk.tɪ.veɪ.tɪd/", pos: "动词(过去分词)", cn: "被激活；启动", memory: "① active = 活跃的/活动的；② activate = 激活/启动。\nfire alarm activated = 消防报警已被激活（系统检测到火灾信号并触发告警）。", phonics: "ac 读 /æk/，ti 读 /tɪ/，va 读 /veɪ/，ted 读 /tɪd/，重音在第一音节。", collocations: [["alarm activated", "告警已启动"], ["system activated", "系统已启动"], ["EOP activated", "EOP已启动"]], examples: [["The gas suppression system was activated.", "气体灭火系统已启动。"], ["The EOP has been activated.", "应急操作程序已启动。"]] },
    ],
    phrases: [
      { p: "fire alarm activated", ipa: "/ˈfaɪ.ər əˈlɑːrm ˈæk.tɪ.veɪ.tɪd/", cn: "消防报警已启动", why: "fire alarm + activated = 消防报警被激活。activated 强调系统被触发并开始运行。" },
    ],
    grammar: [
      { q: "activated 和 triggered 有什么区别？", a: "activated = 被激活/启动（强调系统开始运行）\ntriggered = 被触发（强调触发原因/事件）\n✅ Fire alarm activated.（消防报警已启动 → 强调状态）\n✅ The alarm was triggered by smoke.（告警由烟雾触发 → 强调原因）\n应急报告中两者都可用，activated 更强调系统状态。" },
    ],
    pattern: "Fire alarm + activated/triggered",
    patternExamples: [
      { en: "Fire alarm activated in Building B5.", cn: "B5楼消防报警启动。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "building", ipa: "/ˈbɪldɪŋ/", cn: "建筑", phonics: "build 读 /bɪld/，ing 读 /ɪŋ/" }] },
      { en: "Fire alarm triggered by smoke detector.", cn: "消防报警由烟感探测器触发。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "smoke", ipa: "/smoʊk/", cn: "烟雾", phonics: "smoke 读 /smoʊk/" }] },
      { en: "False fire alarm activated.", cn: "消防误报启动。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "消防报警应急措施：\n① 确认报警区域和探测器位置（哪个区域、哪个探测器）\n② 派人到现场确认是否为真实火灾（携带对讲机和灭火器）\n③ 如果是真实火灾，立即拨打消防电话并启动疏散程序\n④ 如果是误报，确认原因后复位消防系统\n⑤ 如果气体灭火系统已启动，严禁进入该区域（气体对人体有害）\n消防报警宁可误报不可漏报，每次都要认真确认。",
    pronunciation: "fire 读 /ˈfaɪ.ər/，不是 /faɪr/。\nalarm 的 a 读 /ə/，larm 读 /lɑːrm/。\nactivated 重音在第一音节：/ˈæk.tɪ.veɪ.tɪd/。\n节奏：FIRE a-LARM ｜ AC-ti-va-ted.",
    quiz: [
      { q: "B5楼消防报警启动了，怎么说？", a: "Fire alarm activated in Building B5." },
      { q: "气体灭火系统启动后能进入该区域吗？", a: "严禁进入。数据中心通常使用惰性气体（如IG541/N2）或化学气体（如FM200/NOVEC1230）灭火。虽然部分气体对人体相对安全，但高浓度下仍有窒息风险，且灭火过程中可能有烟雾和碎片。必须等消防队确认安全后才能进入。" },
    ],
  },
  {
    id: 459,
    en: "Smoke detected.",
    cn: "发现烟雾。",
    ipa: "/smoʊk dɪˈtɛk.tɪd/",
    tags: ["第459句", "EOP应急", "★★★★★"],
    when: "烟雾检测通常由烟感探测器触发，是火灾的早期预警信号。比消防报警更具体——明确检测到烟雾，火灾可能性更高。",
    words: [
      { w: "smoke", ipa: "/smoʊk/", pos: "名词", cn: "烟雾", memory: "① smoke = 烟雾/烟。\n数据中心烟雾来源：① 电气火灾（电缆/设备过热）② 外部火灾烟雾渗入 ③ 误报（灰尘/蒸汽）。\n烟感探测器（smoke detector）是最早检测烟雾的设备。", phonics: "sm 读 /sm/，oke 读 /oʊk/。", collocations: [["smoke detector", "烟感探测器"], ["smoke alarm", "烟雾告警"], ["no smoke", "无烟雾"]], examples: [["Smoke was detected in the server room.", "服务器房检测到烟雾。"], ["No smoke was found during inspection.", "巡检未发现烟雾。"]] },
    ],
    phrases: [
      { p: "smoke detected", ipa: "/smoʊk dɪˈtɛk.tɪd/", cn: "发现烟雾", why: "smoke + detected = 烟雾被检测到。比 fire alarm activated 更具体，明确检测到烟雾而非仅仅是告警系统动作。" },
    ],
    grammar: [
      { q: "smoke detected 和 fire alarm activated 有什么区别？", a: "smoke detected = 检测到烟雾（烟感探测器触发，火灾可能性高）\nfire alarm activated = 消防报警启动（可能是烟感、温感、手动按钮等多种触发方式）\nsmoke detected 更具体，明确有烟雾；fire alarm activated 可能是其他原因（如温感、手动按钮）。\n如果烟感探测器触发，通常同时报告 smoke detected 和 fire alarm activated。" },
    ],
    pattern: "Smoke + detected/found/observed",
    patternExamples: [
      { en: "Smoke detected in the electrical room.", cn: "配电室检测到烟雾。", words: [{ w: "smoke", ipa: "/smoʊk/", cn: "烟雾", phonics: "smoke 读 /smoʊk/" }, { w: "electrical", ipa: "/ɪˈlɛktrɪkəl/", cn: "电气", phonics: "e 读 /ɪ/，lectrical 读 /lɛktrɪkəl/" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "No smoke detected.", cn: "未检测到烟雾。", words: [{ w: "smoke", ipa: "/smoʊk/", cn: "烟雾", phonics: "smoke 读 /smoʊk/" }] },
      { en: "Smoke observed near the UPS.", cn: "UPS附近观察到烟雾。", words: [{ w: "smoke", ipa: "/smoʊk/", cn: "烟雾", phonics: "smoke 读 /smoʊk/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }] },
    ],
    thinking: "烟雾检测应急措施：\n① 确认烟雾来源区域和探测器位置\n② 派人携带灭火器和对讲机到现场确认\n③ 如果有可见烟雾/火焰，立即启动疏散程序并拨打消防电话\n④ 如果是设备冒烟（未起火），切断该设备电源\n⑤ 如果是误报（灰尘/蒸汽），确认原因后复位\n烟雾意味着火灾可能已经在发展，时间窗口很小。",
    pronunciation: "smoke 的 o 读长音 /oʊ/：/smoʊk/。\ndetected 重音在第二音节：/dɪˈtɛk.tɪd/。\n节奏：SMOKE ｜ de-TEC-ted.",
    quiz: [
      { q: "配电室检测到烟雾，怎么说？", a: "Smoke detected in the electrical room." },
      { q: "烟感和温感探测器有什么区别？", a: "烟感探测器（smoke detector）检测烟雾颗粒，对阴燃火灾（缓慢燃烧产生大量烟雾）敏感；温感探测器（heat detector）检测温度变化，对明火（快速升温）敏感。数据中心通常两者配合使用，烟感用于早期预警，温感用于确认火灾。" },
    ],
  },
  {
    id: 460,
    en: "Emergency response has started.",
    cn: "开始执行EOP。",
    ipa: "/ɪˈmɜːr.dʒən.si rɪˈspɒns hæz ˈstɑːr.tɪd/",
    tags: ["第460句", "EOP启动", "★★★★★"],
    when: "确认应急事件后，正式启动应急操作程序（EOP）。本句是从'发现事件'到'执行应急措施'的转折点。",
    words: [
      { w: "emergency response", ipa: "/ɪˈmɜːr.dʒən.si rɪˈspɒns/", pos: "名词", cn: "应急响应", memory: "① emergency = 紧急情况/突发事件；② response = 响应/反应。\nemergency response = 应急响应，即按照EOP执行应急措施。\n对比：emergency plan = 应急预案；emergency procedure = 应急程序。", phonics: "e 读 /ɪ/，mer 读 /mɜːr/，gen 读 /dʒən/，cy 读 /si/；response 读 /rɪˈspɒns/。", collocations: [["emergency response", "应急响应"], ["emergency response team", "应急响应团队"], ["emergency response plan", "应急响应计划"]], examples: [["The emergency response team has arrived.", "应急响应团队已到达。"], ["Activate the emergency response plan.", "启动应急响应计划。"]] },
      { w: "started", ipa: "/ˈstɑːr.tɪd/", pos: "动词(过去分词)", cn: "已开始", memory: "① start = 开始/启动；② started = 已开始。\nhas started = 现在完成时，表示应急响应已经开始，目前正在执行中。", phonics: "start 读 /stɑːrt/，ed 读 /ɪd/。", collocations: [["has started", "已开始"], ["started immediately", "立即开始"], ["started the procedure", "启动程序"]], examples: [["The EOP has started.", "EOP已启动。"], ["Emergency procedures started at 3:15 AM.", "应急程序于凌晨3:15启动。"]] },
    ],
    phrases: [
      { p: "emergency response has started", ipa: "/ɪˈmɜːr.dʒən.si rɪˈspɒns hæz ˈstɑːr.tɪd/", cn: "应急响应已开始", why: "emergency response + has started = 应急响应已开始。这是应急报告中的关键节点，标志着从'发现问题'转入'解决问题'。" },
    ],
    grammar: [
      { q: "has started 和 started 有什么区别？", a: "has started = 现在完成时（强调已开始，正在进行中）\nstarted = 一般过去时（只描述过去某个时刻开始）\n✅ Emergency response has started.（应急响应已开始 → 现在正在执行中）\n✅ Emergency response started at 3 AM.（应急响应在凌晨3点开始 → 描述时间点）\n应急报告中用 has started，因为关心的是当前状态（正在执行中）。" },
    ],
    pattern: "Emergency response/procedure + has started",
    patternExamples: [
      { en: "Emergency procedure has started.", cn: "应急程序已启动。", words: [{ w: "emergency", ipa: "/ɪˈmɜːrdʒənsi/", cn: "紧急", phonics: "e 读 /ɪ/，mergency 读 /mɜːrdʒənsi/" }, { w: "procedure", ipa: "/prəˈsiːdʒər/", cn: "流程", phonics: "pro 读 /prə/，cedure 读 /siːdʒər/" }, { w: "started", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "Evacuation has started.", cn: "疏散已开始。", words: [{ w: "started", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "Load shedding has started.", cn: "负载削减已开始。", words: [{ w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }, { w: "started", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
    ],
    thinking: "EOP启动后的标准流程：\n① 确认事件类型和严重程度\n② 启动对应的EOP章节\n③ 通知应急响应团队（Incident Manager + 值班经理 + 相关专业人员）\n④ 执行EOP中的具体操作步骤\n⑤ 持续监控事件进展和应急措施效果\n⑥ 记录所有操作和时间节点\nEOP不是一个人的事，是团队协作。",
    pronunciation: "emergency 重音在第二音节：/ɪˈmɜːr.dʒən.si/。\nresponse 重音在第二音节：/rɪˈspɒns/。\nstarted 读 /ˈstɑːr.tɪd/。\n节奏：e-MER-gen-cy ｜ re-SPONSE ｜ has STAR-ted.",
    quiz: [
      { q: "疏散已开始，怎么说？", a: "Evacuation has started." },
      { q: "EOP启动后第一件事是什么？", a: "通知应急响应团队。EOP不是一个人能完成的，需要Incident Manager（事故经理）统筹协调，值班经理现场指挥，各专业工程师执行具体操作。第一时间通知所有相关人员是EOP成功的关键。" },
    ],
  },
  {
    id: 461,
    en: "Call the Incident Manager.",
    cn: "通知值班经理。",
    ipa: "/kɔːl ðə ˈɪn.sɪ.dənt ˈmæn.ɪ.dʒər/",
    tags: ["第461句", "EOP通知", "★★★★★"],
    when: "EOP启动后，第一优先级通知对象是值班经理（Incident Manager），由值班经理统筹整个应急响应过程。",
    words: [
      { w: "Incident Manager", ipa: "/ˈɪn.sɪ.dənt ˈmæn.ɪ.dʒər/", pos: "名词", cn: "值班经理；事故经理", memory: "① incident = 事故/事件；② manager = 经理/管理者。\nIncident Manager = 事故经理/值班经理，是应急响应的总指挥。\n在Bridge Data Centres，Incident Manager 通常是值班经理或运营经理，负责协调所有应急资源。", phonics: "in 读 /ɪn/，ci 读 /sɪ/，dent 读 /dənt/；manager 读 /ˈmæn.ɪ.dʒər/。", collocations: [["Incident Manager", "值班经理"], ["incident report", "事故报告"], ["incident response", "事故响应"]], examples: [["The Incident Manager has been notified.", "值班经理已收到通知。"], ["Please report to the Incident Manager.", "请向值班经理汇报。"]] },
      { w: "call", ipa: "/kɔːl/", pos: "动词", cn: "打电话；呼叫", memory: "① call = 打电话/呼叫/叫。\n应急场景中 call = 打电话通知（通常是手机或对讲机）。\n对比：notify = 通知（更正式）；inform = 告知（信息传递）。", phonics: "call 读 /kɔːl/，all 读 /ɔːl/。", collocations: [["call immediately", "立即打电话"], ["call for help", "呼叫支援"], ["on-call", "值班/待命"]], examples: [["Call me if anything happens.", "有任何事打电话给我。"], ["The on-call engineer is available.", "值班工程师可以到场。"]] },
    ],
    phrases: [
      { p: "call the Incident Manager", ipa: "/kɔːl ðə ˈɪn.sɪ.dənt ˈmæn.ɪ.dʒər/", cn: "呼叫值班经理", why: "call + the + 角色 = 呼叫某人。应急时第一优先级是通知值班经理，由他统筹全局。" },
    ],
    grammar: [
      { q: "call, notify, inform 有什么区别？", a: "call = 打电话/呼叫（强调通讯方式，紧急场景最常用）\nnotify = 通知（正式用语，强调按流程通知）\ninform = 告知（传递信息，不一定要求行动）\n✅ Call the Incident Manager.（打电话给值班经理 → 紧急，立即行动）\n✅ Notify the customer.（通知客户 → 按流程通知）\n✅ Inform the management team.（告知管理层 → 传递信息）\n应急第一步用 call，因为最快。" },
    ],
    pattern: "Call/Notify/Inform + the + 角色",
    patternExamples: [
      { en: "Call the on-call engineer.", cn: "呼叫值班工程师。", words: [{ w: "engineer", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }] },
      { en: "Notify the safety officer.", cn: "通知安全员。", words: [{ w: "notify", ipa: "/ˈnoʊtɪfaɪ/", cn: "通知", phonics: "not 读 /noʊt/，ify 读 /ɪfaɪ/" }, { w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }] },
      { en: "Inform the shift supervisor.", cn: "告知值班主管。", words: [{ w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }] },
    ],
    thinking: "应急通知优先级：\n① Incident Manager（值班经理）→ 统筹全局\n② 专业工程师（电气/暖通/消防）→ 执行应急措施\n③ 客户 → 知情权，按合同要求通知\n④ 管理层 → 汇报，按公司制度上报\n⑤ 外部机构（消防/电力公司）→ 按事件严重程度决定是否呼叫\n通知时务必说清楚：什么事件、什么位置、什么时间、当前状态。",
    pronunciation: "Incident 重音在第一音节：/ˈɪn.sɪ.dənt/。\nManager 重音在第一音节：/ˈmæn.ɪ.dʒər/。\n节奏：CALL the ｜ IN-ci-dent MAN-a-ger.",
    quiz: [
      { q: "呼叫值班工程师，怎么说？", a: "Call the on-call engineer." },
      { q: "应急时通知值班经理用 call 还是 notify？", a: "用 call。call 强调打电话（最快），应急时第一优先级是尽快联系到值班经理。notify 更正式，适合按流程通知客户或管理层。inform 是告知信息，不一定要求立即行动。" },
    ],
  },
  {
    id: 462,
    en: "Notify the customer immediately.",
    cn: "立即通知客户。",
    ipa: "/ˈnoʊ.tɪ.faɪ ðə ˈkʌs.tə.mər ɪˈmiː.di.ət.li/",
    tags: ["第462句", "EOP通知", "★★★★★"],
    when: "通知完值班经理后，按SLA合同要求立即通知客户。数据中心客户对重大事件有知情权，延迟通知可能导致合同违约。",
    words: [
      { w: "notify", ipa: "/ˈnoʊ.tɪ.faɪ/", pos: "动词", cn: "通知", memory: "① notice = 注意/通知；② notify = 正式通知（动词形式）。\nnotify 是正式用语，通常用于按合同/制度要求的通知行为。\n对比：tell = 告诉（口语化）；inform = 告知（传递信息）。", phonics: "no 读 /noʊ/，ti 读 /tɪ/，fy 读 /faɪ/，重音在第一音节。", collocations: [["notify the customer", "通知客户"], ["notify immediately", "立即通知"], ["notification email", "通知邮件"]], examples: [["Please notify the customer about the incident.", "请通知客户该事件。"], ["The customer has been notified.", "客户已收到通知。"]] },
      { w: "immediately", ipa: "/ɪˈmiː.di.ət.li/", pos: "副词", cn: "立即；马上", memory: "① immediate = 立即的；② immediately = 立即地/马上。\n应急场景中 immediately 表示最高紧迫度，不能有任何延迟。", phonics: "im 读 /ɪm/，me 读 /miː/，di 读 /di/，ate 读 /ət/，ly 读 /li/，重音在第二音节。", collocations: [["immediately", "立即"], ["respond immediately", "立即响应"], ["evacuate immediately", "立即疏散"]], examples: [["Call me immediately.", "立即打给我。"], ["Please respond immediately.", "请立即响应。"]] },
    ],
    phrases: [
      { p: "notify the customer immediately", ipa: "/ˈnoʊ.tɪ.faɪ ðə ˈkʌs.tə.mər ɪˈmiː.di.ət.li/", cn: "立即通知客户", why: "notify + 对象 + immediately = 立即通知某人。客户通知是SLA合同要求，延迟可能导致违约赔偿。" },
    ],
    grammar: [
      { q: "immediately 放在句末和句首有什么区别？", a: "Notify the customer immediately.（句末 → 正常语序，强调动作）\nImmediately notify the customer.（句首 → 强调紧迫度，更紧急）\n两种都正确，句首更强调紧迫度。\n应急指令中通常放句末（正常语序更清晰），但如果情况极其紧急可以放句首。" },
    ],
    pattern: "Notify + 对象 + immediately/as soon as possible",
    patternExamples: [
      { en: "Notify the management team immediately.", cn: "立即通知管理层。", words: [{ w: "notify", ipa: "/ˈnoʊtɪfaɪ/", cn: "通知", phonics: "not 读 /noʊt/，ify 读 /ɪfaɪ/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Notify the vendor as soon as possible.", cn: "尽快通知供应商。", words: [{ w: "notify", ipa: "/ˈnoʊtɪfaɪ/", cn: "通知", phonics: "not 读 /noʊt/，ify 读 /ɪfaɪ/" }, { w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }] },
      { en: "Notify all stakeholders.", cn: "通知所有利益相关方。", words: [{ w: "notify", ipa: "/ˈnoʊtɪfaɪ/", cn: "通知", phonics: "not 读 /noʊt/，ify 读 /ɪfaɪ/" }] },
    ],
    thinking: "客户通知要点：\n① 通知时间：按SLA合同要求（通常重大事件15-30分钟内）\n② 通知方式：电话（最快）+ 邮件（留证）\n③ 通知内容：事件类型 + 发生时间 + 影响范围 + 当前状态 + 应急措施 + 预计恢复时间\n④ 通知对象：客户指定的联系人（通常有紧急联系清单）\n⑤ 后续更新：每30分钟或按客户要求提供进展更新\n客户通知要做到：快、准、全、留证。",
    pronunciation: "notify 重音在第一音节：/ˈnoʊ.tɪ.faɪ/。\ncustomer 读 /ˈkʌs.tə.mər/，注意 u 读短音 /ʌ/。\nimmediately 重音在第二音节：/ɪˈmiː.di.ət.li/。\n节奏：NO-ti-fy ｜ the CUS-to-mer ｜ im-ME-di-ate-ly.",
    quiz: [
      { q: "立即通知管理层，怎么说？", a: "Notify the management team immediately." },
      { q: "客户通知最重要的是什么？", a: "快、准、全、留证。快 = 按SLA时间要求通知；准 = 事件描述准确（类型/时间/影响）；全 = 信息完整（当前状态+应急措施+预计恢复时间）；留证 = 电话+邮件双重确认，保留通知记录。" },
    ],
  },
  {
    id: 463,
    en: "Notify the management team.",
    cn: "通知管理层。",
    ipa: "/ˈnoʊ.tɪ.faɪ ðə ˈmæn.ɪdʒ.mənt tiːm/",
    tags: ["第463句", "EOP通知", "★★★★★"],
    when: "通知完值班经理和客户后，按公司制度上报管理层。管理层需要掌握重大事件进展，以便调配资源和对外沟通。",
    words: [
      { w: "management team", ipa: "/ˈmæn.ɪdʒ.mənt tiːm/", pos: "名词", cn: "管理层；管理团队", memory: "① management = 管理/管理层；② team = 团队。\nmanagement team = 管理团队/管理层，通常包括运营总监、技术总监、总经理等。\n数据中心管理层需要根据事件严重程度决定是否升级处理。", phonics: "man 读 /mæn/，age 读 /ɪdʒ/，ment 读 /mənt/；team 读 /tiːm/。", collocations: [["management team", "管理层"], ["senior management", "高级管理层"], ["management review", "管理评审"]], examples: [["The management team has been informed.", "管理层已收到通知。"], ["Please report to the management team.", "请向管理层汇报。"]] },
    ],
    phrases: [
      { p: "notify the management team", ipa: "/ˈnoʊ.tɪ.faɪ ðə ˈmæn.ɪdʒ.mənt tiːm/", cn: "通知管理层", why: "与 notify the customer 同构，只是通知对象从客户变为管理层。管理层通知按公司内部制度执行。" },
    ],
    grammar: [
      { q: "notify, inform, report to 通知管理层时有什么区别？", a: "notify the management team = 通知管理层（正式通知，按流程）\ninform the management team = 告知管理层（传递信息）\nreport to the management team = 向管理层汇报（更正式，通常含详细报告）\n✅ Notify the management team.（通知管理层 → 第一时间告知）\n✅ Report to the management team.（向管理层汇报 → 事件处理后详细报告）\n应急时用 notify（快速告知），事后用 report（详细汇报）。" },
    ],
    pattern: "Notify/Inform/Report to + the management team",
    patternExamples: [
      { en: "Inform the management team about the incident.", cn: "告知管理层该事件。", words: [] },
      { en: "Report to the management team after resolution.", cn: "解决后向管理层汇报。", words: [{ w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
      { en: "Escalate to the management team.", cn: "升级到管理层。", words: [{ w: "escalate", ipa: "/ˈɛskəleɪt/", cn: "升级", phonics: "es 读 /ɛs/，calate 读 /kəleɪt/" }] },
    ],
    thinking: "管理层通知要点：\n① 通知时机：重大事件确认后尽快通知\n② 通知内容：事件概要 + 影响评估 + 当前应急措施 + 预计恢复时间\n③ 管理层作用：① 调配额外资源 ② 对外沟通（媒体/监管） ③ 决策支持\n④ 后续更新：按管理层要求提供定期进展报告\n管理层通知不需要太详细，重点是让他们知道发生了什么、正在做什么、需要什么支持。",
    pronunciation: "management 重音在第一音节：/ˈmæn.ɪdʒ.mənt/。\nteam 读 /tiːm/，ea 读长音 /iː/。\n节奏：NO-ti-fy ｜ the MAN-age-ment TEAM.",
    quiz: [
      { q: "解决后向管理层汇报，怎么说？", a: "Report to the management team after resolution." },
      { q: "应急时通知管理层用 notify 还是 report to？", a: "用 notify。notify 是快速通知（告知事件发生），report to 是详细汇报（包含分析和建议）。应急时先用 notify 让管理层知道发生了什么，事件解决后再用 report to 提供详细报告。" },
    ],
  },
  {
    id: 464,
    en: "Assemble the emergency response team.",
    cn: "集合应急响应团队。",
    ipa: "/əˈsɛm.bəl ðə ɪˈmɜːr.dʒən.si rɪˈspɒns tiːm/",
    tags: ["第464句", "EOP组织", "★★★★★"],
    when: "通知完关键人员后，需要将所有应急响应人员集合到指定地点（通常是控制室或应急集合点），分配任务和协调行动。",
    words: [
      { w: "assemble", ipa: "/əˈsɛm.bəl/", pos: "动词", cn: "集合；召集", memory: "① as- = 朝向；② semble = 类似/聚集（源自拉丁语 simul = 一起）。\nassemble = 把人集合到一起，是应急响应中的组织动作。\n对比：gather = 聚集（更口语化）；convene = 召集（更正式，用于会议）。", phonics: "as 读 /ə/，sem 读 /sɛm/，ble 读 /bəl/，重音在第二音节。", collocations: [["assemble the team", "集合团队"], ["assembly point", "集合点"], ["emergency assembly", "应急集合"]], examples: [["Please assemble at the control room.", "请在控制室集合。"], ["The team assembled within 5 minutes.", "团队在5分钟内集合完毕。"]] },
    ],
    phrases: [
      { p: "assemble the emergency response team", ipa: "/əˈsɛm.bəl ðə ɪˈmɜːr.dʒən.si rɪˈspɒns tiːm/", cn: "集合应急响应团队", why: "assemble + the + 团队 = 集合团队。应急响应需要多人协作，集合后才能统一分配任务。" },
    ],
    grammar: [
      { q: "assemble 和 meet 有什么区别？", a: "assemble = 集合（有组织的聚集，通常有明确目的和集合点）\nmeet = 会面（一般性的见面，可能是偶然或约定）\n✅ Assemble the emergency response team.（集合应急响应团队 → 有组织的紧急集合）\n✅ Let's meet in the control room.（我们在控制室碰面 → 一般性会面）\n应急场景用 assemble，因为是有组织的紧急集合。" },
    ],
    pattern: "Assemble + the + 团队/at + 地点",
    patternExamples: [
      { en: "Assemble the on-duty engineers.", cn: "集合值班工程师。", words: [{ w: "engineers", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }] },
      { en: "Assemble at the emergency exit.", cn: "在紧急出口集合。", words: [{ w: "emergency", ipa: "/ɪˈmɜːrdʒənsi/", cn: "紧急", phonics: "e 读 /ɪ/，mergency 读 /mɜːrdʒənsi/" }] },
      { en: "All personnel assemble at the muster point.", cn: "所有人员在集合点集合。", words: [] },
    ],
    thinking: "应急响应团队组成：\n① Incident Manager（事故经理）→ 总指挥\n② 电气工程师 → 处理电气应急\n③ 暖通工程师 → 处理暖通应急\n④ 安全官 → 确保操作安全\n⑤ 通讯联络人 → 负责对外通知\n⑥ 记录员 → 记录所有操作和时间\n集合后 Incident Manager 分配角色和任务。",
    pronunciation: "assemble 重音在第二音节：/əˈsɛm.bəl/。\nemergency 重音在第二音节：/ɪˈmɜːr.dʒən.si/。\n节奏：as-SEM-ble ｜ the e-MER-gen-cy ｜ re-SPONSE TEAM.",
    quiz: [
      { q: "在紧急出口集合，怎么说？", a: "Assemble at the emergency exit." },
      { q: "应急响应团队通常由哪些角色组成？", a: "① Incident Manager（事故经理/总指挥）② 电气工程师 ③ 暖通工程师 ④ 安全官 ⑤ 通讯联络人 ⑥ 记录员。Incident Manager 集合团队后分配角色和任务，每个人各司其职。" },
    ],
  },
  {
    id: 465,
    en: "Assign roles and responsibilities.",
    cn: "分配角色和职责。",
    ipa: "/əˈsaɪn roʊlz ænd rɪˌspɒn.səˈbɪl.ə.tiz/",
    tags: ["第465句", "EOP组织", "★★★★★"],
    when: "团队集合后，Incident Manager 需要明确每个人的角色和职责，避免混乱和重复工作。",
    words: [
      { w: "assign", ipa: "/əˈsaɪn/", pos: "动词", cn: "分配；指派", memory: "① as- = 朝向；② sign = 标记/签名 → assign = 标记给某人 → 分配/指派。\nassign roles = 分配角色，是 Incident Manager 的核心职责。\n对比：distribute = 分配（物品/资源）；allocate = 分配（预算/时间）。", phonics: "as 读 /ə/，sign 读 /saɪn/，重音在第二音节。", collocations: [["assign roles", "分配角色"], ["assign tasks", "分配任务"], ["assign responsibility", "分配职责"]], examples: [["Assign someone to check the UPS.", "指派一个人去检查UPS。"], ["I was assigned to the night shift.", "我被分配到夜班。"]] },
      { w: "responsibilities", ipa: "/rɪˌspɒn.səˈbɪl.ə.tiz/", pos: "名词", cn: "职责；责任", memory: "① response = 响应；② responsible = 负责的；③ responsibilities = 职责（复数）。\nroles and responsibilities = 角色和职责（常一起使用），明确每个人该做什么。", phonics: "re 读 /rɪ/，spon 读 /spɒn/，si 读 /sə/，bil 读 /bɪl/，i 读 /ɪ/，ties 读 /tiz/，重音在第三音节。", collocations: [["roles and responsibilities", "角色和职责"], ["key responsibilities", "关键职责"], ["area of responsibility", "职责范围"]], examples: [["Clarify everyone's responsibilities.", "明确每个人的职责。"], ["What are your responsibilities?", "你的职责是什么？"]] },
    ],
    phrases: [
      { p: "assign roles and responsibilities", ipa: "/əˈsaɪn roʊlz ænd rɪˌspɒn.səˈbɪl.ə.tiz/", cn: "分配角色和职责", why: "roles and responsibilities 是固定搭配（角色和职责），assign 是分配动作。应急响应中明确分工是避免混乱的关键。" },
    ],
    grammar: [
      { q: "roles 和 responsibilities 有什么区别？", a: "roles = 角色（你是谁，如'电气负责人'、'通讯联络人'）\nresponsibilities = 职责（你该做什么，如'检查所有电气设备'、'每15分钟更新客户'）\n✅ Your role is electrical lead.（你的角色是电气负责人）\n✅ Your responsibility is to check all UPS systems.（你的职责是检查所有UPS系统）\n角色定义身份，职责定义任务。" },
    ],
    pattern: "Assign + roles/responsibilities/tasks + to + 人",
    patternExamples: [
      { en: "Assign the electrical check to David.", cn: "把电气检查分配给David。", words: [{ w: "electrical", ipa: "/ɪˈlɛktrɪkəl/", cn: "电气", phonics: "e 读 /ɪ/，lectrical 读 /lɛktrɪkəl/" }, { w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Assign monitoring tasks to the night shift.", cn: "把监控任务分配给夜班。", words: [{ w: "monitoring", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }] },
      { en: "Assign a dedicated person for customer updates.", cn: "指定专人负责客户更新。", words: [{ w: "updates", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }] },
    ],
    thinking: "角色分配原则：\n① 一人一角色（避免角色冲突）\n② 能力匹配（电气故障分配给电气工程师）\n③ 明确汇报关系（每个人知道向谁汇报）\n④ 预留后备（关键角色有backup人选）\n⑤ 记录在案（谁负责什么，白纸黑字）\n好的角色分配 = 应急响应成功的一半。",
    pronunciation: "assign 重音在第二音节：/əˈsaɪn/。\nroles 读 /roʊlz/。\nresponsibilities 重音在第三音节：/rɪˌspɒn.səˈbɪl.ə.tiz/。\n节奏：as-SIGN ｜ ROLES and ｜ re-spon-si-BIL-i-ties.",
    quiz: [
      { q: "把监控任务分配给夜班，怎么说？", a: "Assign monitoring tasks to the night shift." },
      { q: "roles 和 responsibilities 有什么区别？", a: "roles = 角色（你是谁，如'电气负责人'）；responsibilities = 职责（你该做什么，如'检查所有电气设备'）。角色定义身份，职责定义具体任务。应急响应中两者都需要明确。" },
    ],
  },
  {
    id: 466,
    en: "Confirm the headcount.",
    cn: "确认人数。",
    ipa: "/kənˈfɜːrm ðə ˈhɛd.kaʊnt/",
    tags: ["第466句", "EOP组织", "★★★★★"],
    when: "团队集合后需要确认到场人数，确保所有关键岗位都有人。如果缺人需要紧急调配替补人员。",
    words: [
      { w: "headcount", ipa: "/ˈhɛd.kaʊnt/", pos: "名词", cn: "人数；到场人数", memory: "① head = 头/人；② count = 计数。\nheadcount = 人数统计（逐个数人头确认到场情况）。\n应急场景中 headcount 特别重要，确保所有人安全（尤其是疏散时）。", phonics: "head 读 /hɛd/，count 读 /kaʊnt/。", collocations: [["headcount", "人数"], ["confirm headcount", "确认人数"], ["final headcount", "最终人数"]], examples: [["Confirm the headcount before evacuation.", "疏散前确认人数。"], ["The headcount shows two people missing.", "人数统计显示两人未到。"]] },
    ],
    phrases: [
      { p: "confirm the headcount", ipa: "/kənˈfɜːrm ðə ˈhɛd.kaʊnt/", cn: "确认人数", why: "confirm + the headcount = 确认到场人数。应急集合后必须确认所有人都到位，特别是疏散时确保没有人遗漏。" },
    ],
    grammar: [
      { q: "headcount 和 attendance 有什么区别？", a: "headcount = 人数统计（快速数人头，应急场景）\nattendance = 出勤/签到（正式记录，日常场景）\n✅ Confirm the headcount.（确认人数 → 应急集合时快速确认）\n✅ Check the attendance sheet.（检查签到表 → 日常培训签到）\n应急场景用 headcount，因为需要快速确认。" },
    ],
    pattern: "Confirm/Check + the headcount",
    patternExamples: [
      { en: "Check the headcount now.", cn: "现在确认人数。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Headcount confirmed: all present.", cn: "人数确认：全部到场。", words: [] },
      { en: "Headcount shows one person missing.", cn: "人数统计显示缺一人。", words: [] },
    ],
    thinking: "人数确认在应急中的重要性：\n① 集合时确认：确保所有应急响应人员到位\n② 疏散时确认：确保所有人都安全撤离\n③ 缺人处理：立即派人寻找或调配替补\n④ 记录在案：每次人数确认都要记录时间和结果\n疏散时的人数确认是法律要求，漏报可能导致严重后果。",
    pronunciation: "confirm 重音在第二音节：/kənˈfɜːrm/。\nheadcount 重音在第一音节：/ˈhɛd.kaʊnt/。\n节奏：con-FIRM ｜ the HEAD-count.",
    quiz: [
      { q: "人数确认：全部到场，怎么说？", a: "Headcount confirmed: all present." },
      { q: "疏散时为什么必须确认人数？", a: "因为需要确保建筑物内所有人都安全撤离。如果有人遗漏在火场或危险区域内，可能导致伤亡。这是法律要求，也是人道责任。每次疏散后都必须清点人数并向消防队报告。" },
    ],
  },
  {
    id: 467,
    en: "Check the emergency supplies.",
    cn: "检查应急物资。",
    ipa: "/tʃɛk ðə ɪˈmɜːr.dʒən.si səˈplaɪz/",
    tags: ["第467句", "EOP准备", "★★★★"],
    when: "应急响应前需要确认应急物资齐全，包括手电筒、对讲机、灭火器、应急钥匙、个人防护用品等。",
    words: [
      { w: "emergency supplies", ipa: "/ɪˈmɜːr.dʒən.si səˈplaɪz/", pos: "名词", cn: "应急物资", memory: "① emergency = 应急；② supplies = 物资/补给（supply 的复数）。\nemergency supplies = 应急物资，包括手电筒、对讲机、灭火器、急救包等。\n对比：equipment = 设备（大型/固定）；supplies = 物资（小型/消耗品）。", phonics: "emergency 重音在第二音节；supplies 读 /səˈplaɪz/。", collocations: [["emergency supplies", "应急物资"], ["emergency kit", "应急包"], ["supply check", "物资检查"]], examples: [["Check the emergency supplies before the shift.", "交班前检查应急物资。"], ["Emergency supplies are fully stocked.", "应急物资储备充足。"]] },
    ],
    phrases: [
      { p: "emergency supplies", ipa: "/ɪˈmɜːr.dʒən.si səˈplaɪz/", cn: "应急物资", why: "emergency + supplies = 应急物资。应急响应需要各种工具和消耗品，提前确认齐全避免关键时刻找不到。" },
    ],
    grammar: [
      { q: "supplies 和 equipment 有什么区别？", a: "supplies = 物资/补给（小型、可消耗的物品，如手电筒电池、急救药品、对讲机电池）\nequipment = 设备（大型、固定的设备，如发电机、UPS、灭火器）\n✅ Check the emergency supplies.（检查应急物资 → 手电筒、对讲机、钥匙等）\n✅ Check the emergency equipment.（检查应急设备 → 灭火器、消防栓、应急照明等）\n两者都需要检查，但侧重点不同。" },
    ],
    pattern: "Check + the emergency + supplies/equipment/kit",
    patternExamples: [
      { en: "Check the emergency equipment.", cn: "检查应急设备。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "emergency", ipa: "/ɪˈmɜːrdʒənsi/", cn: "紧急", phonics: "e 读 /ɪ/，mergency 读 /mɜːrdʒənsi/" }, { w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }] },
      { en: "Check the first aid kit.", cn: "检查急救包。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Check the fire extinguishers.", cn: "检查灭火器。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }] },
    ],
    thinking: "数据中心应急物资清单：\n① 通讯：对讲机（充足电）、手机（充电线）\n② 照明：手电筒（备用电池）、应急灯\n③ 安全：灭火器、防毒面具、安全帽、反光背心\n④ 工具：应急钥匙、万能钥匙、绝缘手套\n⑤ 记录：事故报告表、相机\n⑥ 医疗：急救包\n每次交接班都应检查应急物资。",
    pronunciation: "emergency 重音在第二音节：/ɪˈmɜːr.dʒən.si/。\nsupplies 重音在第二音节：/səˈplaɪz/。\n节奏：CHECK the ｜ e-MER-gen-cy ｜ sup-PLIES.",
    quiz: [
      { q: "检查灭火器，怎么说？", a: "Check the fire extinguishers." },
      { q: "数据中心应急物资包括哪些？", a: "① 通讯（对讲机/手机）② 照明（手电筒/应急灯）③ 安全（灭火器/防毒面具/安全帽/反光背心）④ 工具（应急钥匙/绝缘手套）⑤ 记录（事故报告表/相机）⑥ 医疗（急救包）。交接班时检查确保齐全。" },
    ],
  },
  {
    id: 468,
    en: "Review the emergency contact list.",
    cn: "检查应急联系清单。",
    ipa: "/rɪˈvjuː ðə ɪˈmɜːr.dʒən.si ˈkɒn.tækt lɪst/",
    tags: ["第468句", "EOP准备", "★★★★"],
    when: "应急联系清单包含所有关键联系人的电话号码，包括内部（值班经理、工程师）和外部（消防、电力公司、供应商）。确保电话号码最新有效。",
    words: [
      { w: "emergency contact list", ipa: "/ɪˈmɜːr.dʒən.si ˈkɒn.tækt lɪst/", pos: "名词", cn: "应急联系清单", memory: "① emergency = 应急；② contact = 联系人/联系方式；③ list = 清单。\nemergency contact list = 应急联系清单，是应急响应的重要工具。\n清单通常贴在控制室墙上，同时保存在共享文件夹中。", phonics: "contact 读 /ˈkɒn.tækt/，list 读 /lɪst/。", collocations: [["emergency contact list", "应急联系清单"], ["contact information", "联系信息"], ["update the list", "更新清单"]], examples: [["Is the emergency contact list up to date?", "应急联系清单是最新的吗？"], ["Please update the contact list.", "请更新联系清单。"]] },
      { w: "review", ipa: "/rɪˈvjuː/", pos: "动词", cn: "检查；审查", memory: "① re- = 再次；② view = 看。\nreview = 再次查看 = 检查/审查。\nreview the contact list = 检查联系清单（确认电话号码最新有效）。", phonics: "re 读 /rɪ/，view 读 /vjuː/，重音在第二音节。", collocations: [["review the list", "检查清单"], ["review the plan", "审查计划"], ["annual review", "年度审查"]], examples: [["Review the EOP before the drill.", "演练前审查EOP。"], ["Please review and sign.", "请审查并签字。"]] },
    ],
    phrases: [
      { p: "emergency contact list", ipa: "/ɪˈmɜːr.dʒən.si ˈkɒn.tækt lɪst/", cn: "应急联系清单", why: "emergency + contact + list = 应急联系清单。应急响应时需要快速找到正确的联系人，清单必须保持最新。" },
    ],
    grammar: [
      { q: "review 和 check 有什么区别？", a: "review = 审查/复查（仔细检查，看是否需要更新）\ncheck = 检查（快速确认状态）\n✅ Review the contact list.（审查联系清单 → 看电话号码是否最新、是否需要增减联系人）\n✅ Check the contact list.（检查联系清单 → 快速确认清单存在且可用）\n定期用 review（仔细审查），应急时用 check（快速确认）。" },
    ],
    pattern: "Review + the + 文档/清单/计划",
    patternExamples: [
      { en: "Review the evacuation plan.", cn: "审查疏散计划。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
      { en: "Review the MOP before execution.", cn: "执行前审查MOP。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
      { en: "Review the incident report.", cn: "审查事故报告。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
    ],
    thinking: "应急联系清单应包含：\n① 内部联系人：值班经理、电气工程师、暖通工程师、安全官、总经理\n② 外部联系人：消防局（999/112）、电力公司（TNB）、水务公司（SAJ）、医院\n③ 供应商联系人：UPS供应商、发电机供应商、空调供应商、消防系统供应商\n④ 客户联系人：各客户紧急联系人\n⑤ 更新频率：每月审查一次，人员变动时立即更新\n联系清单是应急响应的生命线。",
    pronunciation: "review 重音在第二音节：/rɪˈvjuː/。\ncontact 重音在第一音节：/ˈkɒn.tækt/。\nlist 读 /lɪst/。\n节奏：re-VIEW ｜ the e-MER-gen-cy ｜ CON-tact LIST.",
    quiz: [
      { q: "审查疏散计划，怎么说？", a: "Review the evacuation plan." },
      { q: "应急联系清单应该多久更新一次？", a: "至少每月审查一次，人员变动时立即更新。联系清单过时可能导致关键时刻打不通电话，延误应急响应。建议在每月安全会议上审查并签字确认。" },
    ],
  },
  {
    id: 469,
    en: "Establish a communication channel.",
    cn: "建立通讯通道。",
    ipa: "/ɪˈstæb.lɪʃ ə ˌkɒm.juˈnɪ.keɪ.ʃən ˈtʃæn.əl/",
    tags: ["第469句", "EOP通讯", "★★★★"],
    when: "应急响应需要可靠的通讯通道，确保团队成员之间、与外部之间能够实时沟通。通常使用对讲机专用频道。",
    words: [
      { w: "establish", ipa: "/ɪˈstæb.lɪʃ/", pos: "动词", cn: "建立；设立", memory: "① stable = 稳定的；② establish = 使稳定 → 建立/设立。\nestablish a communication channel = 建立通讯通道，确保应急通讯畅通。", phonics: "es 读 /ɪ/，tab 读 /stæb/，lish 读 /lɪʃ/，重音在第二音节。", collocations: [["establish communication", "建立通讯"], ["establish a protocol", "建立协议"], ["well-established", "成熟的"]], examples: [["Establish a dedicated radio channel.", "建立专用无线电频道。"], ["Communication has been established.", "通讯已建立。"]] },
      { w: "communication channel", ipa: "/ˌkɒm.juˈnɪ.keɪ.ʃən ˈtʃæn.əl/", pos: "名词", cn: "通讯通道", memory: "① communication = 通讯/沟通；② channel = 通道/频道。\ncommunication channel = 通讯通道，可以是对讲机频道、电话会议、群组聊天等。\n应急时通常使用对讲机专用频道。", phonics: "communication 重音在第四音节；channel 读 /ˈtʃæn.əl/。", collocations: [["communication channel", "通讯通道"], ["radio channel", "无线电频道"], ["open channel", "开放频道"]], examples: [["Use channel 5 for emergency communication.", "使用5号频道进行应急通讯。"], ["Keep the channel open.", "保持频道开放。"]] },
    ],
    phrases: [
      { p: "establish a communication channel", ipa: "/ɪˈstæb.lɪʃ ə ˌkɒm.juˈnɪ.keɪ.ʃən ˈtʃæn.əl/", cn: "建立通讯通道", why: "establish + a communication channel = 建立通讯通道。应急响应中通讯是生命线，必须第一时间建立可靠的通讯通道。" },
    ],
    grammar: [
      { q: "channel 和 frequency 有什么区别？", a: "channel = 频道/通道（编号，如 channel 5）\nfrequency = 频率（物理参数，如 462.5 MHz）\n✅ Use channel 5.（使用5号频道 → 按编号操作，简单直观）\n✅ The frequency is 462.5 MHz.（频率是462.5 MHz → 技术参数）\n日常操作用 channel，技术配置用 frequency。" },
    ],
    pattern: "Establish/Use + a/the + communication/radio + channel",
    patternExamples: [
      { en: "Use radio channel 5.", cn: "使用5号无线电频道。", words: [] },
      { en: "Establish a conference call.", cn: "建立电话会议。", words: [] },
      { en: "Switch to the emergency channel.", cn: "切换到应急频道。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "emergency", ipa: "/ɪˈmɜːrdʒənsi/", cn: "紧急", phonics: "e 读 /ɪ/，mergency 读 /mɜːrdʒənsi/" }] },
    ],
    thinking: "应急通讯要点：\n① 主通讯：对讲机专用频道（不与其他日常通讯混用）\n② 备用通讯：手机群组（对讲机故障时使用）\n③ 紧急通讯：卫星电话（极端情况下使用）\n④ 通讯纪律：简洁明了，使用标准术语，避免闲聊占用频道\n⑤ 通讯记录：重要信息必须复述确认\n应急时通讯中断 = 团队失联 = 应急响应失败。",
    pronunciation: "establish 重音在第二音节：/ɪˈstæb.lɪʃ/。\ncommunication 重音在第四音节：/ˌkɒm.juˈnɪ.keɪ.ʃən/。\nchannel 读 /ˈtʃæn.əl/。\n节奏：es-TAB-lish ｜ a com-mu-ni-CA-tion ｜ CHAN-nel.",
    quiz: [
      { q: "使用5号无线电频道，怎么说？", a: "Use radio channel 5." },
      { q: "应急通讯的主备方案是什么？", a: "主通讯 = 对讲机专用频道（最快速、最可靠）；备用通讯 = 手机群组（对讲机故障时使用）；紧急通讯 = 卫星电话（极端情况下使用）。通讯频道不能与日常通讯混用，避免关键时刻频道拥堵。" },
    ],
  },
  {
    id: 470,
    en: "Monitor the situation continuously.",
    cn: "持续监控现场情况。",
    ipa: "/ˈmɒn.ɪ.tər ðə ˌsɪtʃ.uˈeɪ.ʃən kənˈtɪn.ju.əs.li/",
    tags: ["第470句", "EOP监控", "★★★★★"],
    when: "应急响应过程中需要持续监控事件进展，包括设备状态、温度变化、告警信息等，以便及时调整应急措施。",
    words: [
      { w: "monitor", ipa: "/ˈmɒn.ɪ.tər/", pos: "动词", cn: "监控；监视", memory: "① monitor = 监控/监视（持续观察并记录）。\n② 与 check 不同，monitor 是持续性的，check 是一次性的。\n应急响应中 monitor = 持续观察事件进展和设备状态。", phonics: "mon 读 /mɒn/，i 读 /ɪ/，tor 读 /tər/，重音在第一音节。", collocations: [["monitor continuously", "持续监控"], ["monitor the situation", "监控情况"], ["close monitoring", "密切监控"]], examples: [["Monitor the UPS battery voltage.", "监控UPS电池电压。"], ["Continue monitoring until further notice.", "继续监控直到另行通知。"]] },
      { w: "situation", ipa: "/ˌsɪtʃ.uˈeɪ.ʃən/", pos: "名词", cn: "情况；现场情况", memory: "① situ- = 位置（源自拉丁语 situs）；② situation = 情况/局势。\nthe situation = 当前的情况/局势，在应急场景中指事件的整体状态。", phonics: "sit 读 /sɪtʃ/，u 读 /u/，a 读 /eɪ/，tion 读 /ʃən/，重音在第三音节。", collocations: [["current situation", "当前情况"], ["situation report", "情况报告"], ["worsening situation", "恶化中的情况"]], examples: [["What's the current situation?", "当前情况如何？"], ["The situation is under control.", "情况已得到控制。"]] },
    ],
    phrases: [
      { p: "monitor the situation continuously", ipa: "/ˈmɒn.ɪ.tər ðə ˌsɪtʃ.uˈeɪ.ʃən kənˈtɪn.ju.əs.li/", cn: "持续监控现场情况", why: "monitor + the situation + continuously = 持续监控情况。应急响应不是一次性动作，而是持续的过程。" },
    ],
    grammar: [
      { q: "monitor 和 check 在应急场景有什么区别？", a: "monitor = 持续监控（持续观察，不中断）\ncheck = 检查（一次性动作，确认后结束）\n✅ Monitor the UPS temperature.（持续监控UPS温度 → 不间断观察温度变化趋势）\n✅ Check the UPS temperature.（检查UPS温度 → 看一次当前温度值）\n应急响应中两者都需要：先 check 确认当前状态，然后 monitor 持续观察变化。" },
    ],
    pattern: "Monitor + the + 对象 + continuously/closely",
    patternExamples: [
      { en: "Monitor the temperature closely.", cn: "密切监控温度。", words: [{ w: "monitor", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
      { en: "Monitor the battery discharge rate.", cn: "监控电池放电速率。", words: [{ w: "monitor", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "battery", ipa: "/ˈbætəri/", cn: "电池", phonics: "bat 读 /bæt/，tery 读 /təri/" }] },
      { en: "Continue monitoring all critical systems.", cn: "继续监控所有关键系统。", words: [{ w: "continue", ipa: "/kənˈtɪnjuː/", cn: "继续", phonics: "con 读 /kən/，tinue 读 /tɪnjuː/" }, { w: "monitoring", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "critical", ipa: "/ˈkrɪtɪkəl/", cn: "严重", phonics: "crit 读 /krɪt/，ical 读 /ɪkəl/" }] },
    ],
    thinking: "应急监控要点：\n① 监控对象：设备状态、温度、告警、电池电量、燃油量等\n② 监控频率：关键参数每分钟检查，一般参数每5-15分钟\n③ 监控记录：每次检查都要记录时间和数值\n④ 异常报告：发现异常立即报告 Incident Manager\n⑤ 趋势分析：关注变化趋势，不只是当前数值\n监控的目的是提前发现问题，而不是等问题发生了才反应。",
    pronunciation: "monitor 重音在第一音节：/ˈmɒn.ɪ.tər/。\nsituation 重音在第三音节：/ˌsɪtʃ.uˈeɪ.ʃən/。\ncontinuously 重音在第二音节：/kənˈtɪn.ju.əs.li/。\n节奏：MON-i-tor ｜ the sit-u-A-tion ｜ con-TIN-u-ous-ly.",
    quiz: [
      { q: "密切监控温度，怎么说？", a: "Monitor the temperature closely." },
      { q: "应急响应中 monitor 和 check 怎么配合使用？", a: "先 check 确认当前状态（一次性），然后 monitor 持续观察变化（持续性）。例如：先 Check the UPS battery voltage（检查当前电压值），然后 Monitor the battery discharge rate（持续监控放电速率变化趋势）。" },
    ],
  },
  {
    id: 471,
    en: "Record all actions and timestamps.",
    cn: "记录所有操作和时间戳。",
    ipa: "/rɪˈkɔːrd ɔːl ˈæk.ʃənz ænd ˈtaɪm.stæmps/",
    tags: ["第471句", "EOP记录", "★★★★★"],
    when: "应急响应中每一步操作都必须详细记录，包括做了什么、什么时间做的、谁做的。这些记录是事后分析和改进的基础。",
    words: [
      { w: "record", ipa: "/rɪˈkɔːrd/", pos: "动词", cn: "记录", memory: "① re- = 再次；② cord = 心/记忆（源自拉丁语 cor）→ record = 再次记住 = 记录。\n应急记录是法律要求，也是事后分析的基础。\n注意：record 作动词读 /rɪˈkɔːrd/（重音在第二音节），作名词读 /ˈrɛk.ɔːrd/（重音在第一音节）。", phonics: "动词重音在第二音节：/rɪˈkɔːrd/。", collocations: [["record actions", "记录操作"], ["record keeping", "记录保存"], ["official record", "官方记录"]], examples: [["Record the time of each operation.", "记录每次操作的时间。"], ["All actions must be recorded.", "所有操作必须记录。"]] },
      { w: "timestamp", ipa: "/ˈtaɪm.stæmp/", pos: "名词", cn: "时间戳", memory: "① time = 时间；② stamp = 印章/标记。\ntimestamp = 时间戳（精确到秒的时间记录）。\n应急记录中时间戳必须精确，因为事后分析需要精确的时间线。", phonics: "time 读 /taɪm/，stamp 读 /stæmp/。", collocations: [["timestamp", "时间戳"], ["add a timestamp", "添加时间戳"], ["accurate timestamp", "准确的时间戳"]], examples: [["Add a timestamp to each entry.", "为每条记录添加时间戳。"], ["The timestamp shows 03:15:42.", "时间戳显示03:15:42。"]] },
    ],
    phrases: [
      { p: "actions and timestamps", ipa: "/ˈæk.ʃənz ænd ˈtaɪm.stæmps/", cn: "操作和时间戳", why: "actions（做了什么）+ timestamps（什么时间做的）是应急记录的两个核心要素。每次操作都必须同时记录动作和时间。" },
    ],
    grammar: [
      { q: "应急记录应该包含哪些信息？", a: "① What（做了什么）：具体操作描述\n② When（什么时间）：精确到秒的时间戳\n③ Who（谁做的）：操作人员姓名\n④ Result（结果如何）：操作后的状态变化\n⑤ Next（下一步）：计划执行的下一个操作\n完整记录 = What + When + Who + Result + Next。" },
    ],
    pattern: "Record + all + 对象 + and + timestamps",
    patternExamples: [
      { en: "Record all switching operations.", cn: "记录所有倒闸操作。", words: [{ w: "switching", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "operations", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }] },
      { en: "Record the time of each action.", cn: "记录每次操作的时间。", words: [] },
      { en: "Record the incident timeline.", cn: "记录事故时间线。", words: [] },
    ],
    thinking: "应急记录的重要性：\n① 法律要求：应急记录是法律证据\n② 事后分析：还原事件经过，找出根因\n③ 持续改进：发现流程漏洞，优化EOP\n④ 责任追溯：明确每个人的操作和决策\n⑤ 培训素材：真实案例是最好的培训材料\n应急记录不是可选的，是必须的。",
    pronunciation: "record 作动词重音在第二音节：/rɪˈkɔːrd/。\nactions 读 /ˈæk.ʃənz/。\ntimestamps 读 /ˈtaɪm.stæmps/。\n节奏：re-CORD ｜ ALL AC-tions ｜ and TIME-stamps.",
    quiz: [
      { q: "记录所有倒闸操作，怎么说？", a: "Record all switching operations." },
      { q: "应急记录应该包含哪些核心信息？", a: "① What（做了什么）② When（什么时间，精确到秒）③ Who（谁做的）④ Result（结果如何）⑤ Next（下一步计划）。完整的应急记录是事后分析和法律追溯的基础。" },
    ],
  },
  {
    id: 472,
    en: "Prepare for load shedding if necessary.",
    cn: "必要时准备负载削减。",
    ipa: "/prɪˈpeər fɔːr loʊd ˈʃɛd.ɪŋ ɪf ˈnɛs.ə.sər.i/",
    tags: ["第472句", "EOP负载管理", "★★★★★"],
    when: "当UPS电池即将耗尽或发电机无法启动时，需要削减非关键负载以延长电池供电时间，保护关键IT设备。",
    words: [
      { w: "load shedding", ipa: "/loʊd ˈʃɛd.ɪŋ/", pos: "名词", cn: "负载削减；甩负荷", memory: "① load = 负载/负荷；② shedding = 削减/去除（shed = 脱落/去除）。\nload shedding = 有计划地关闭部分非关键负载，以保护关键负载。\n这是电力系统中的标准术语，在数据中心应急场景中至关重要。", phonics: "load 读 /loʊd/，shedding 读 /ˈʃɛd.ɪŋ/。", collocations: [["load shedding", "负载削减"], ["load shedding plan", "负载削减计划"], ["emergency load shedding", "应急负载削减"]], examples: [["Load shedding is necessary to protect critical loads.", "负载削减是保护关键负载的必要措施。"], ["Execute the load shedding plan.", "执行负载削减计划。"]] },
    ],
    phrases: [
      { p: "load shedding", ipa: "/loʊd ˈʃɛd.ɪŋ/", cn: "负载削减", why: "load + shedding = 负载削减。这是数据中心应急中的关键操作，通过关闭非关键负载来延长UPS电池供电时间。" },
    ],
    grammar: [
      { q: "load shedding 和 power cut 有什么区别？", a: "load shedding = 负载削减（有计划的、选择性的关闭部分负载）\npower cut = 停电（无计划的、全面的断电）\n✅ Load shedding protects critical systems.（负载削减保护关键系统 → 主动选择关闭非关键设备）\n✅ Power cut affects everything.（停电影响所有设备 → 被动的全面断电）\nload shedding 是主动的、有选择性的保护措施。" },
    ],
    pattern: "Prepare for/Execute + load shedding",
    patternExamples: [
      { en: "Execute load shedding immediately.", cn: "立即执行负载削减。", words: [{ w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Prepare the load shedding priority list.", cn: "准备负载削减优先级清单。", words: [{ w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
      { en: "Load shedding has been completed.", cn: "负载削减已完成。", words: [{ w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
    ],
    thinking: "负载削减原则：\n① 优先级：先关闭非关键负载（办公区、非生产系统），最后才关闭生产系统\n② 提前规划：事先制定负载削减优先级清单\n③ 通知客户：关闭客户设备前必须获得客户同意（除非紧急到无法等待）\n④ 记录：每次负载削减都要记录关闭了哪些设备、什么时间关闭的\n⑤ 恢复：电源恢复后按优先级逐步恢复负载\n负载削减是最后手段，目的是保护最重要的设备。",
    pronunciation: "load 读 /loʊd/，不是 /luːd/。\nshedding 读 /ˈʃɛd.ɪŋ/，sh 读 /ʃ/。\nnecessary 读 /ˈnɛs.ə.sər.i/。\n节奏：pre-PARE ｜ for LOAD SHED-ding ｜ if NEC-es-sa-ry.",
    quiz: [
      { q: "立即执行负载削减，怎么说？", a: "Execute load shedding immediately." },
      { q: "负载削减时应该先关闭什么？", a: "先关闭非关键负载：① 办公区空调/照明 ② 非生产测试系统 ③ 非关键网络设备 ④ 备用冗余设备。最后才关闭生产系统。事先制定优先级清单，应急时按计划执行，避免慌乱中关错设备。" },
    ],
  },
  {
    id: 473,
    en: "Do not enter the data hall without authorization.",
    cn: "未经授权不得进入机房。",
    ipa: "/duː nɒt ˈɛn.tər ðə ˈdeɪ.tə hɔːl wɪˈðaʊt ˌɔː.θər.aɪˈzeɪ.ʃən/",
    tags: ["第473句", "EOP安全", "★★★★★"],
    when: "应急情况下机房出入管理更加严格，只有被授权的应急人员才能进入，防止无关人员误入危险区域或干扰应急操作。",
    words: [
      { w: "authorization", ipa: "/ˌɔː.θər.aɪˈzeɪ.ʃən/", pos: "名词", cn: "授权；许可", memory: "① author = 作者/发起人；② authorize = 授权；③ authorization = 授权/许可。\nwithout authorization = 未经授权（未经许可）。\n应急时只有 Incident Manager 有权授权人员进入机房。", phonics: "au 读 /ɔː/，tho 读 /θər/，ri 读 /raɪ/，za 读 /zeɪ/，tion 读 /ʃən/，重音在第四音节。", collocations: [["without authorization", "未经授权"], ["authorization required", "需要授权"], ["access authorization", "进入授权"]], examples: [["Authorization is required to enter.", "进入需要授权。"], ["Do not operate without authorization.", "未经授权不得操作。"]] },
      { w: "data hall", ipa: "/ˈdeɪ.tə hɔːl/", pos: "名词", cn: "数据机房", memory: "① data = 数据；② hall = 大厅/房间。\ndata hall = 数据机房（放置服务器机柜的大房间）。\n对比：server room = 服务器房间（较小）；data hall = 数据大厅（较大）。", phonics: "data 读 /ˈdeɪ.tə/，hall 读 /hɔːl/。", collocations: [["data hall", "数据机房"], ["data hall temperature", "机房温度"], ["enter the data hall", "进入机房"]], examples: [["The data hall temperature is rising.", "机房温度正在上升。"], ["All personnel must exit the data hall.", "所有人员必须离开机房。"]] },
    ],
    phrases: [
      { p: "without authorization", ipa: "/wɪˈðaʊt ˌɔː.θər.aɪˈzeɪ.ʃən/", cn: "未经授权", why: "without + authorization = 没有授权/未经许可。应急时出入管理更加严格，未经授权不得进入危险区域。" },
    ],
    grammar: [
      { q: "Do not enter 和 No entry 有什么区别？", a: "Do not enter = 不要进入（口语化的禁止命令）\nNo entry = 禁止进入（标志牌用语，更正式）\n✅ Do not enter the data hall without authorization.（未经授权不要进入机房 → 口头指令）\n✅ No entry without authorization.（未经授权禁止进入 → 门上的标志牌）\n口头指令用 Do not，标志牌用 No entry。" },
    ],
    pattern: "Do not + 动作 + without authorization",
    patternExamples: [
      { en: "Do not operate equipment without authorization.", cn: "未经授权不得操作设备。", words: [{ w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }] },
      { en: "Do not open the panel without authorization.", cn: "未经授权不得打开面板。", words: [{ w: "panel", ipa: "/ˈpænl/", cn: "面板", phonics: "pan 读 /pæn/，el 读 /l/" }] },
      { en: "Do not switch off the UPS without authorization.", cn: "未经授权不得关闭UPS。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }] },
    ],
    thinking: "应急时出入管理要点：\n① 只有 Incident Manager 授权的人员才能进入\n② 进入人员必须佩戴个人防护用品\n③ 进出必须登记（姓名、时间、目的）\n④ 严禁无关人员进入（包括客户，除非获得特别授权）\n⑤ 疏散时所有人员必须离开，不得逗留\n严格的出入管理是应急安全的基础。",
    pronunciation: "authorization 重音在第四音节：/ˌɔː.θər.aɪˈzeɪ.ʃən/。\ndata hall 读 /ˈdeɪ.tə hɔːl/。\nwithout 读 /wɪˈðaʊt/。\n节奏：Do NOT EN-ter ｜ the DA-ta HALL ｜ with-out au-tho-ri-ZA-tion.",
    quiz: [
      { q: "未经授权不得操作设备，怎么说？", a: "Do not operate equipment without authorization." },
      { q: "应急时谁有权授权人员进入机房？", a: "Incident Manager（事故经理/值班经理）。应急时出入管理权限上收，只有 Incident Manager 有权决定谁可以进入机房。这是为了防止无关人员误入危险区域，也避免干扰应急操作。" },
    ],
  },
  {
    id: 474,
    en: "Evacuate immediately if the fire alarm sounds.",
    cn: "消防报警响起时立即疏散。",
    ipa: "/ɪˈvæk.ju.eɪt ɪˈmiː.di.ət.li ɪf ðə ˈfaɪ.ər əˈlɑːrm saʊndz/",
    tags: ["第474句", "EOP疏散", "★★★★★"],
    when: "消防报警响起且确认为真实火灾时，必须立即疏散所有人员。人的安全永远是第一位，设备可以恢复，生命不可挽回。",
    words: [
      { w: "evacuate", ipa: "/ɪˈvæk.ju.eɪt/", pos: "动词", cn: "疏散；撤离", memory: "① e- = 出（ex-的变体）；② vac = 空（vacant = 空的）；③ evacuate = 使空 → 疏散/撤离。\nevacuate = 将人员从危险区域撤离到安全区域。\n对比：exit = 出口/离开（一般性）；evacuate = 疏散（紧急性）。", phonics: "e 读 /ɪ/，vac 读 /væk/，u 读 /ju/，ate 读 /eɪt/，重音在第二音节。", collocations: [["evacuate immediately", "立即疏散"], ["evacuate the building", "疏散建筑物"], ["evacuation route", "疏散路线"]], examples: [["Evacuate the building immediately.", "立即疏散建筑物。"], ["All personnel have been evacuated.", "所有人员已疏散完毕。"]] },
    ],
    phrases: [
      { p: "evacuate immediately", ipa: "/ɪˈvæk.ju.eɪt ɪˈmiː.di.ət.li/", cn: "立即疏散", why: "evacuate + immediately = 立即疏散。火灾确认后的第一优先级是人员安全，必须立即疏散。" },
    ],
    grammar: [
      { q: "evacuate 和 exit 有什么区别？", a: "evacuate = 疏散/撤离（紧急场景，有组织地离开危险区域）\nexit = 出口/离开（一般性离开，不一定是紧急情况）\n✅ Evacuate the building.（疏散建筑物 → 紧急情况，有组织的撤离）\n✅ Exit through the rear door.（从后门离开 → 一般性指示）\n火灾场景用 evacuate，日常离开用 exit。" },
    ],
    pattern: "Evacuate + immediately/ calmly + if/when + 条件",
    patternExamples: [
      { en: "Evacuate calmly through the nearest exit.", cn: "通过最近的出口有序疏散。", words: [] },
      { en: "Evacuate when the alarm sounds.", cn: "报警响起时疏散。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "All personnel must evacuate immediately.", cn: "所有人员必须立即疏散。", words: [{ w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
    ],
    thinking: "疏散要点：\n① 听到消防报警 → 立即停止工作 → 沿疏散路线撤离\n② 不要使用电梯（可能断电或成为烟囱）\n③ 不要返回取个人物品\n④ 在集合点集合 → 确认人数\n⑤ 未经消防队许可不得重新进入\n人的安全永远是第一位。设备可以恢复，数据可以备份，生命不可挽回。",
    pronunciation: "evacuate 重音在第二音节：/ɪˈvæk.ju.eɪt/。\nimmediately 重音在第二音节：/ɪˈmiː.di.ət.li/。\nfire alarm 读 /ˈfaɪ.ər əˈlɑːrm/。\n节奏：e-VAC-u-ate ｜ im-ME-di-ate-ly ｜ if the FIRE a-LARM SOUNDS.",
    quiz: [
      { q: "通过最近的出口有序疏散，怎么说？", a: "Evacuate calmly through the nearest exit." },
      { q: "疏散时为什么不能使用电梯？", a: "因为火灾可能导致断电（电梯困人）或电梯井成为烟囱效应通道（烟雾和高温涌入）。必须使用楼梯疏散。这是消防安全的基本常识。" },
    ],
  },
  {
    id: 475,
    en: "Account for all personnel at the assembly point.",
    cn: "在集合点清点所有人员。",
    ipa: "/əˈkaʊnt fɔːr ɔːl ˌpɜːr.səˈnɛl æt ðə əˈsɛm.bli pɔɪnt/",
    tags: ["第475句", "EOP疏散", "★★★★★"],
    when: "疏散完成后，所有人员必须在指定集合点集合，由负责人逐一清点人数，确认无人遗漏在建筑物内。",
    words: [
      { w: "account for", ipa: "/əˈkaʊnt fɔːr/", pos: "动词短语", cn: "清点；确认（某人安全）", memory: "① account = 账户/说明；② account for = 说明…的去向 = 清点确认。\naccount for all personnel = 清点所有人员（确认每个人都安全撤出）。\n这是疏散后最重要的安全步骤。", phonics: "account 读 /əˈkaʊnt/，for 读 /fɔːr/。", collocations: [["account for", "清点/确认"], ["account for all personnel", "清点所有人员"], ["everyone accounted for", "所有人已确认安全"]], examples: [["Have all personnel been accounted for?", "所有人员都清点确认了吗？"], ["One person is not accounted for.", "有一人未确认。"]] },
      { w: "assembly point", ipa: "/əˈsɛm.bli pɔɪnt/", pos: "名词", cn: "集合点", memory: "① assembly = 集合/集会；② point = 点/位置。\nassembly point = 疏散集合点（建筑物外的安全区域）。\n每个数据中心都有指定的疏散集合点，通常在停车场或空旷地带。", phonics: "assembly 读 /əˈsɛm.bli/，point 读 /pɔɪnt/。", collocations: [["assembly point", "集合点"], ["muster point", "集合点（同义）"], ["proceed to assembly point", "前往集合点"]], examples: [["Proceed to the nearest assembly point.", "前往最近的集合点。"], ["The assembly point is in the car park.", "集合点在停车场。"]] },
    ],
    phrases: [
      { p: "account for all personnel", ipa: "/əˈkaʊnt fɔːr ɔːl ˌpɜːr.səˈnɛl/", cn: "清点所有人员", why: "account for + 人员 = 清点确认人员安全。疏散后必须确认每个人都安全撤出，这是法律要求。" },
    ],
    grammar: [
      { q: "account for 和 count 有什么区别？", a: "account for = 清点确认（确认每个人的去向和安全状态）\ncount = 数数（简单数人头）\n✅ Account for all personnel.（清点所有人员 → 确认每个人都安全，知道谁在哪）\n✅ Count the people.（数人数 → 简单数一下有多少人在这里）\n疏散后用 account for，因为不只是数人头，还要确认有没有人遗漏。" },
    ],
    pattern: "Account for + all personnel/everyone + at + 地点",
    patternExamples: [
      { en: "Account for all visitors.", cn: "清点所有访客。", words: [] },
      { en: "Account for all contractors on site.", cn: "清点现场所有承包商。", words: [{ w: "contractors", ipa: "/ˈkɒntræktər/", cn: "承包商", phonics: "con 读 /kɒn/，tractor 读 /træktər/" }, { w: "site", ipa: "/saɪt/", cn: "场地", phonics: "site 读 /saɪt/" }] },
      { en: "Everyone has been accounted for.", cn: "所有人已确认安全。", words: [{ w: "everyone", ipa: "/ˈɛvriwʌn/", cn: "大家", phonics: "every 读 /ɛvri/，one 读 /wʌn/" }] },
    ],
    thinking: "疏散后人员清点流程：\n① 所有人在指定集合点集合\n② 各部门负责人清点本部门人员\n③ 确认所有访客和承包商\n④ 汇总报告给 Incident Manager\n⑤ 如果有人未确认 → 立即报告消防队 → 严禁自行返回寻找\n⑥ 消防队确认安全后才能重新进入建筑物\n人员清点是法律要求，漏报可能导致严重后果。",
    pronunciation: "account for 读 /əˈkaʊnt fɔːr/。\npersonnel 读 /ˌpɜːr.səˈnɛl/，重音在末音节。\nassembly point 读 /əˈsɛm.bli pɔɪnt/。\n节奏：ac-COUNT for ｜ ALL per-son-NEL ｜ at the as-SEM-bly POINT.",
    quiz: [
      { q: "所有人已确认安全，怎么说？", a: "Everyone has been accounted for." },
      { q: "疏散后清点人数发现少一个人怎么办？", a: "立即报告消防队，告知失踪人员的姓名、最后已知位置和可能所在区域。严禁自行返回建筑物寻找——这可能导致更多人陷入危险。只有受过专业训练的消防队员才能进入火场搜救。" },
    ],
  },
];

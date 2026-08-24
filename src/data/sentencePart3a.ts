// EXPORTS: MOCK_SENTENCES_PART3A

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART3A: ISentence[] = [
  {
    id: 61,
    en: "There are five active alarms in DCIM.",
    cn: "DCIM系统目前共有5条活动告警。",
    ipa: "/ðeər ɑːr faɪv ˈæk.tɪv əˈlɑːmz ɪn ˌdiː.siː.aɪˈɛm/",
    tags: ["第61句", "DCIM告警", "★★★★★"],
    when: "BMS交接完成后，转入DCIM系统交接。第一句话先汇报DCIM的活动告警总数，让对方快速了解基础设施整体状态。",
    words: [
      { w: "DCIM", ipa: "/ˌdiː.siː.aɪˈɛm/", pos: "缩写", cn: "数据中心基础设施管理 (Data Center Infrastructure Management)", memory: "① D = Data（数据）；② C = Center（中心）；③ I = Infrastructure（基础设施）；④ M = Management（管理）。\nDCIM 管理供电、制冷、空间、环境等基础设施。", phonics: "逐字母读 D-C-I-M。注意 I 读 /aɪ/，M 读 /ɛm/。", collocations: [["DCIM alarm", "DCIM告警"], ["DCIM dashboard", "DCIM仪表盘"], ["DCIM report", "DCIM报告"]], examples: [["Check the DCIM for temperature.", "查看DCIM的温度数据。"], ["The DCIM shows normal status.", "DCIM显示状态正常。"]] },
      { w: "active", ipa: "/ˈæk.tɪv/", pos: "形容词", cn: "活动的；正在运行的", memory: "① act = 行动；② active = 正在行动的 → 告警还没消失，还在响。", phonics: "act 读 /ækt/，ive 读 /ɪv/，重音在第一音节。", collocations: [["active alarm", "活动告警"], ["active issue", "活动问题"], ["active ticket", "活动工单"]], examples: [["There are 5 active alarms.", "有5条活动告警。"], ["Is the alarm still active?", "这条告警还是活动状态吗？"]] },
    ],
    phrases: [
      { p: "active alarms in DCIM", ipa: "/ˈæk.tɪv əˈlɑːmz ɪn ˌdiː.siː.aɪˈɛm/", cn: "DCIM中的活动告警", why: "与 BMS 告警汇报句式完全一致：There are + 数量 + active alarms + in + 系统名。" },
    ],
    grammar: [
      { q: "这句和BMS告警汇报（第31句）有什么不同？", a: "结构完全相同：There are + 数量 + active alarms + in + 系统。\n唯一区别是系统名和数量：BMS 有 10 条，DCIM 有 5 条。\n交接时先报 BMS（告警优先），再报 DCIM（基础设施）。" },
    ],
    pattern: "There are + 数量 + active alarms in + 系统名",
    patternExamples: [
      { en: "There are three active alarms in EPMS.", cn: "EPMS中有3条活动告警。", words: [{ w: "active", ipa: "/ˈæktɪv/", cn: "活动", phonics: "act 读 /ækt/，ive 读 /ɪv/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "There are eight active alarms in the fire system.", cn: "消防系统有8条活动告警。", words: [{ w: "active", ipa: "/ˈæktɪv/", cn: "活动", phonics: "act 读 /ækt/，ive 读 /ɪv/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }] },
      { en: "There are no active alarms in NMS.", cn: "NMS中没有活动告警。", words: [{ w: "active", ipa: "/ˈæktɪv/", cn: "活动", phonics: "act 读 /ækt/，ive 读 /ɪv/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "DCIM 告警汇报和 BMS 告警汇报用同一个句型。\n掌握 There are X active alarms in Y 这个模板，你可以汇报任何系统的告警总数。\n交接顺序：BMS → DCIM → EPMS → Fire → NMS。",
    pronunciation: "DCIM 逐字母读：D-C-I-M /diː.siː.aɪ.ɛm/。\nfive active 连读：fi-vac-tive /faɪvæk.tɪv/。\n节奏：There are FIVE ｜ AC-tive ALARMS ｜ in D-C-I-M.",
    quiz: [
      { q: "DCIM中有3条活动告警，怎么说？", a: "There are three active alarms in DCIM." },
      { q: "DCIM和BMS的区别是什么？", a: "BMS = 楼宇管理系统（Building Management System），DCIM = 数据中心基础设施管理系统（Data Center Infrastructure Management）。BMS 侧重楼宇整体，DCIM 专注数据中心基础设施。" },
    ],
  },
  {
    id: 62,
    en: "One rack has a high temperature alarm.",
    cn: "有一个机柜出现高温告警。",
    ipa: "/wʌn ræk hæz ə haɪ ˈtɛm.pər.ə.tʃər əˈlɑːm/",
    tags: ["第62句", "机柜高温", "★★★★★"],
    when: "汇报完DCIM告警总数后，逐条说明各告警内容。高温告警是数据中心最常见的环境问题，需要优先关注。",
    words: [
      { w: "rack", ipa: "/ræk/", pos: "名词", cn: "机柜；机架", memory: "① rack = 架子/支架；② 数据中心中 = 服务器机柜。\n标准机柜 42U，安装服务器、交换机、PDU 等设备。", phonics: "r 读 /r/，a 读 /æ/，ck 读 /k/。注意 a 发短音 /æ/。", collocations: [["server rack", "服务器机柜"], ["rack temperature", "机柜温度"], ["rack inlet", "机柜进风口"], ["empty rack", "空机柜"]], examples: [["Rack A3 has a temperature alarm.", "A3机柜有温度告警。"], ["Please check rack B5.", "请检查B5机柜。"]] },
      { w: "temperature", ipa: "/ˈtɛm.pər.ə.tʃər/", pos: "名词", cn: "温度", memory: "① temper = 调节/脾气；② temperature = 被调节的度量 = 温度。\n数据中心标准温度：冷通道 18-27°C。", phonics: "tem 读 /tɛm/，per 读 /pər/，a 读 /ə/，ture 读 /tʃər/，重音在第一音节。共4个音节。", collocations: [["room temperature", "室温"], ["rack temperature", "机柜温度"], ["inlet temperature", "进风温度"], ["high temperature", "高温"]], examples: [["The room temperature is 22 degrees.", "室温22度。"], ["Check the rack temperature.", "检查机柜温度。"]] },
    ],
    phrases: [
      { p: "high temperature alarm", ipa: "/haɪ ˈtɛm.pər.ə.tʃər əˈlɑːm/", cn: "高温告警", why: "high = 高的，temperature = 温度，alarm = 告警。高温告警通常意味着机柜或机房温度超出设定阈值。" },
      { p: "one rack", ipa: "/wʌn ræk/", cn: "一个机柜", why: "one + 名词 = 一个/某一台。汇报时用 one rack 而非 a rack，强调数量「一个」。" },
    ],
    grammar: [
      { q: "has 和 have 在告警汇报中怎么用？", a: "单数用 has，复数用 have。\n✅ One rack has an alarm.（一个机柜有告警 → has）\n✅ Two racks have alarms.（两个机柜有告警 → have）\n✅ The PDU has a fault.（PDU有故障 → has）" },
    ],
    pattern: "One + 设备 + has + a + 告警类型 + alarm",
    patternExamples: [
      { en: "One server has a fan alarm.", cn: "一台服务器有风扇告警。", words: [{ w: "server", ipa: "/ˈsɜːrvər/", cn: "服务器", phonics: "serv 读 /sɜːrv/，er 读 /ər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "One switch has a port alarm.", cn: "一台交换机有端口告警。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "One CRAH has a humidity alarm.", cn: "一台精密空调有湿度告警。", words: [{ w: "humidity", ipa: "/hjuːˈmɪdɪti/", cn: "湿度", phonics: "hu 读 /hjuː/，midity 读 /mɪdɪti/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "英语设备告警汇报：设备 + has + 告警类型。\n中文说「有一个机柜出现高温告警」，用「出现」。\n英语用 has（有）：One rack HAS a high temperature alarm。\n记住：单数设备用 has，复数用 have。",
    pronunciation: "rack 的 a 发短音 /æ/，不要读成 /rɑːk/。\ntemperature 四个音节快速连读：TEM-pra-chur。\n节奏：One RACK ｜ has a HIGH ｜ TEM-per-a-ture ｜ ALARM.",
    quiz: [
      { q: "「一台PDU有通信告警」怎么说？", a: "One PDU has a communication alarm." },
      { q: "rack 和 cabinet 有什么区别？", a: "在数据中心场景几乎同义。rack 更常用（美式），cabinet 偏英式。rack 通常指开放式机架，cabinet 指带门的封闭机柜。" },
    ],
  },
  {
    id: 63,
    en: "One PDU has a communication alarm.",
    cn: "有一台PDU出现通信告警。",
    ipa: "/wʌn ˌpiː.diːˈjuː hæz ə kəˌmjuː.nɪˈkeɪ.ʃən əˈlɑːm/",
    tags: ["第63句", "PDU通信", "★★★★"],
    when: "继续逐条汇报DCIM告警。PDU通信告警意味着监控系统无法读取该PDU的数据，需要检查网络连接。",
    words: [
      { w: "PDU", ipa: "/ˌpiː.diːˈjuː/", pos: "缩写", cn: "配电单元 (Power Distribution Unit)", memory: "① P = Power（电力）；② D = Distribution（分配）；③ U = Unit（单元）。\nPDU 是机柜内的电力分配设备，将UPS供电分配给各台服务器。", phonics: "逐字母读 P-D-U。", collocations: [["rack PDU", "机柜PDU"], ["PDU alarm", "PDU告警"], ["PDU load", "PDU负载"], ["redundant PDU", "冗余PDU"]], examples: [["Check the PDU status.", "检查PDU状态。"], ["The PDU is overloaded.", "PDU过载了。"]] },
      { w: "communication", ipa: "/kəˌmjuː.nɪˈkeɪ.ʃən/", pos: "名词", cn: "通信；通讯", memory: "① communicate = 沟通（动词）；② communication = 沟通/通信（名词）。\n通信告警 = 设备与监控系统之间失去连接。", phonics: "com 读 /kə/，mu 读 /mjuː/，ni 读 /nɪ/，ca 读 /keɪ/，tion 读 /ʃən/，重音在第四音节。共5个音节。", collocations: [["communication alarm", "通信告警"], ["communication failure", "通信故障"], ["communication link", "通信链路"]], examples: [["The PDU has lost communication.", "PDU失去通信了。"], ["Check the communication status.", "检查通信状态。"]] },
    ],
    phrases: [
      { p: "communication alarm", ipa: "/kəˌmjuː.nɪˈkeɪ.ʃən əˈlɑːm/", cn: "通信告警", why: "communication = 通信，alarm = 告警。通信告警表示设备与DCIM监控系统之间数据链路中断，可能是网线松动或设备故障。" },
    ],
    grammar: [
      { q: "communication alarm 和 connectivity alarm 一样吗？", a: "意思接近，都指设备连接问题。\ncommunication alarm = 通信告警（更正式，指数据通信中断）。\nconnectivity alarm = 连通性告警（稍口语，指网络连接问题）。\n在交接场景中两者可以互换，communication alarm 更常见。" },
    ],
    pattern: "One + 设备 + has + a + communication + 名词",
    patternExamples: [
      { en: "One sensor has a communication fault.", cn: "一个传感器有通信故障。", words: [{ w: "sensor", ipa: "/ˈsɛnsər/", cn: "传感器", phonics: "sens 读 /sɛns/，or 读 /ər/" }, { w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }] },
      { en: "One meter has a communication error.", cn: "一个仪表有通信错误。", words: [] },
      { en: "One controller has a communication issue.", cn: "一个控制器有通信问题。", words: [{ w: "issue", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
    ],
    thinking: "这句和第62句结构相同：One + 设备 + has + a + 告警类型。\n只是把 high temperature（高温）换成 communication（通信）。\nDCIM 告警常见的类型：temperature / humidity / communication / power / water leak。",
    pronunciation: "PDU 逐字母读：P-D-U /piː.diː.juː/。\ncommunication 五个音节，重音在 ca：com-mu-ni-CA-tion。\n节奏：One P-D-U ｜ has a com-mu-ni-CA-tion ｜ ALARM.",
    quiz: [
      { q: "「一个传感器有通信故障」怎么说？", a: "One sensor has a communication fault." },
      { q: "PDU通信告警可能是什么原因？", a: "常见原因：网线松动、交换机端口故障、PDU管理卡死机、IP冲突。" },
    ],
  },
  {
    id: 64,
    en: "One UPS has a warning alarm.",
    cn: "有一台UPS出现警告告警。",
    ipa: "/wʌn ˌjuː.piːˈɛs hæz ə ˈwɔːr.nɪŋ əˈlɑːm/",
    tags: ["第64句", "UPS警告", "★★★★★"],
    when: "UPS告警是数据中心最关键的告警之一，即使是warning级别也需要特别关注，因为UPS故障可能导致大面积断电。",
    words: [
      { w: "UPS", ipa: "/ˌjuː.piːˈɛs/", pos: "缩写", cn: "不间断电源 (Uninterruptible Power Supply)", memory: "① U = Uninterruptible（不间断的）；② P = Power（电力）；③ S = Supply（供应）。\nUPS 在市电中断时提供备用电力，是数据中心供电的核心设备。", phonics: "逐字母读 U-P-S。", collocations: [["UPS alarm", "UPS告警"], ["UPS battery", "UPS电池"], ["UPS load", "UPS负载"], ["UPS bypass", "UPS旁路"]], examples: [["The UPS is on battery.", "UPS正在使用电池供电。"], ["Check the UPS status.", "检查UPS状态。"]] },
      { w: "warning", ipa: "/ˈwɔːr.nɪŋ/", pos: "形容词/名词", cn: "警告的；警告", memory: "① warn = 警告（动词）；② warning = 警告（名词/形容词）。\n在告警分级中：Critical > Warning > Info。", phonics: "war 读 /wɔːr/，ning 读 /nɪŋ/，重音在第一音节。", collocations: [["warning alarm", "警告告警"], ["warning level", "警告级别"], ["early warning", "预警"]], examples: [["This is a warning, not critical.", "这是警告，不是严重告警。"], ["The UPS has a warning.", "UPS有警告告警。"]] },
    ],
    phrases: [
      { p: "warning alarm", ipa: "/ˈwɔːr.nɪŋ əˈlɑːm/", cn: "警告告警", why: "warning = 警告级别，alarm = 告警。warning alarm 比 critical 低一级，但仍需关注并跟踪处理。" },
    ],
    grammar: [
      { q: "UPS 的 warning alarm 需要立即处理吗？", a: "Warning alarm 不需要像 Critical 那样立即处理，但 UPS 是数据中心最关键的设备，即使 warning 也应该：\n1. 记录并通知下一班\n2. 检查是否需要联系供应商\n3. 确认冗余 UPS 是否正常\n交接时 UPS 的任何告警都必须详细说明。" },
    ],
    pattern: "One + 供电设备 + has + a + 级别 + alarm",
    patternExamples: [
      { en: "One generator has a critical alarm.", cn: "一台发电机有严重告警。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "critical", ipa: "/ˈkrɪtɪkəl/", cn: "严重", phonics: "crit 读 /krɪt/，ical 读 /ɪkəl/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "One STS has a warning alarm.", cn: "一台STS有警告告警。", words: [{ w: "warning", ipa: "/ˈwɔːrnɪŋ/", cn: "警告", phonics: "warn 读 /wɔːrn/，ing 读 /ɪŋ/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "One ATS has an info alarm.", cn: "一台ATS有信息告警。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "UPS 告警在交接中是最高优先级事项之一。\n即使只是 warning，也必须详细说明：什么告警、什么时候开始的、当前状态、是否通知了供应商。\n交接中 UPS 相关的任何异常都不能遗漏。",
    pronunciation: "UPS 逐字母读：U-P-S /juː.piː.ɛs/。\nwarning 重音在第一音节：WAR-ning。\n节奏：One U-P-S ｜ has a WAR-ning ｜ ALARM.",
    quiz: [
      { q: "「一台发电机有严重告警」怎么说？", a: "One generator has a critical alarm." },
      { q: "UPS的warning alarm应该怎么处理？", a: "1. 记录并通知下一班；2. 检查冗余UPS是否正常；3. 根据告警内容决定是否需要联系供应商。即使是warning，UPS告警也不能忽视。" },
    ],
  },
  {
    id: 65,
    en: "One water leak alarm is active.",
    cn: "有一条漏水告警处于活动状态。",
    ipa: "/wʌn ˈwɔː.tər liːk əˈlɑːm ɪz ˈæk.tɪv/",
    tags: ["第65句", "漏水告警", "★★★★★"],
    when: "漏水告警是数据中心最危险的告警之一，水 + 电 = 灾难。即使是误报也必须现场确认。",
    words: [
      { w: "water leak", ipa: "/ˈwɔː.tər liːk/", pos: "名词短语", cn: "漏水", memory: "① water = 水；② leak = 泄漏；③ water leak = 漏水。\n数据中心漏水可能来自空调冷凝水、消防管道、屋顶渗漏。", phonics: "water 读 /ˈwɔː.tər/，leak 读 /liːk/。注意 leak 的 ea 读长音 /iː/。", collocations: [["water leak alarm", "漏水告警"], ["water leak detection", "漏水检测"], ["water leak sensor", "漏水传感器"]], examples: [["There is a water leak under the raised floor.", "高架地板下面有漏水。"], ["Check the water leak sensor.", "检查漏水传感器。"]] },
      { w: "active", ipa: "/ˈæk.tɪv/", pos: "形容词", cn: "活动的；未恢复的", memory: "① active alarm = 告警还没恢复/消除；② 与 cleared（已恢复）相对。", phonics: "act 读 /ækt/，ive 读 /ɪv/。", collocations: [["alarm is active", "告警是活动的"], ["still active", "仍然活动"], ["become active", "变为活动"]], examples: [["The alarm is still active.", "告警仍然活动。"], ["The leak alarm became active at 3 AM.", "漏水告警在凌晨3点触发。"]] },
    ],
    phrases: [
      { p: "water leak alarm", ipa: "/ˈwɔː.tər liːk əˈlɑːm/", cn: "漏水告警", why: "water leak = 漏水，alarm = 告警。数据中心漏水是紧急事件，需要立即现场确认。" },
      { p: "is active", ipa: "/ɪz ˈæk.tɪv/", cn: "处于活动状态", why: "be + active 表示告警当前仍处于触发状态。与 has been cleared（已恢复）相对。" },
    ],
    grammar: [
      { q: "is active 和 has a alarm 有什么区别？", a: "is active = 告警当前处于活动状态（强调状态）。\nhas an alarm = 设备有一条告警（强调拥有关系）。\n✅ One water leak alarm IS ACTIVE.（漏水告警是活动的 → 状态描述）\n✅ One rack HAS a temperature alarm.（机柜有温度告警 → 设备拥有告警）\n两种表达在交接中都可以，根据语境选择。" },
    ],
    pattern: "One + 告警类型 + alarm + is active",
    patternExamples: [
      { en: "One fire alarm is active.", cn: "一条火警处于活动状态。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "active", ipa: "/ˈæktɪv/", cn: "活动", phonics: "act 读 /ækt/，ive 读 /ɪv/" }] },
      { en: "One humidity alarm is active.", cn: "一条湿度告警处于活动状态。", words: [{ w: "humidity", ipa: "/hjuːˈmɪdɪti/", cn: "湿度", phonics: "hu 读 /hjuː/，midity 读 /mɪdɪti/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "active", ipa: "/ˈæktɪv/", cn: "活动", phonics: "act 读 /ækt/，ive 读 /ɪv/" }] },
      { en: "One door alarm is active.", cn: "一条门禁告警处于活动状态。", words: [{ w: "door", ipa: "/dɔːr/", cn: "门", phonics: "door 读 /dɔːr/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "active", ipa: "/ˈæktɪv/", cn: "活动", phonics: "act 读 /ækt/，ive 读 /ɪv/" }] },
    ],
    thinking: "漏水告警在数据中心是最高优先级之一。\n交接时必须说明：1. 告警位置（哪个区域）；2. 是否已现场确认；3. 是真漏水还是误报。\n英语用 is active 强调告警「现在还没恢复」。",
    pronunciation: "water leak 连读：wa-ter-leak /ˈwɔː.tər.liːk/。\nis active 连读：i-zac-tive /ɪˈzæk.tɪv/。\n节奏：One WA-ter LEAK ｜ alarm is ｜ AC-tive.",
    quiz: [
      { q: "「一条火警处于活动状态」怎么说？", a: "One fire alarm is active." },
      { q: "漏水告警在数据中心为什么特别重要？", a: "水+电=灾难。漏水可能损坏设备、引发短路、导致大面积故障。即使是误报也必须现场确认，不能远程判断。" },
    ],
  },
  {
    id: 66,
    en: "One network device is offline.",
    cn: "有一台网络设备离线。",
    ipa: "/wʌn ˈnɛt.wɜːrk dɪˈvaɪs ɪz ˌɒfˈlaɪn/",
    tags: ["第66句", "网络离线", "★★★★"],
    when: "继续汇报DCIM告警。网络设备离线意味着该设备无法被监控，可能是设备故障或网络中断。",
    words: [
      { w: "network", ipa: "/ˈnɛt.wɜːrk/", pos: "名词/形容词", cn: "网络", memory: "① net = 网；② work = 工作/系统；③ network = 网络系统。\n数据中心网络包括：核心交换机、接入交换机、路由器、防火墙。", phonics: "net 读 /nɛt/，work 读 /wɜːrk/，重音在第一音节。", collocations: [["network device", "网络设备"], ["network switch", "网络交换机"], ["network cable", "网线"], ["network topology", "网络拓扑"]], examples: [["Check the network status.", "检查网络状态。"], ["The network switch is down.", "网络交换机宕机了。"]] },
      { w: "offline", ipa: "/ˌɒfˈlaɪn/", pos: "形容词/副词", cn: "离线的；不在线的", memory: "① off = 关闭/离开；② line = 线/在线；③ offline = 离线。\n反义词：online = 在线的。", phonics: "off 读 /ɒf/，line 读 /laɪn/，重音在第二音节。", collocations: [["device offline", "设备离线"], ["go offline", "变为离线"], ["offline mode", "离线模式"]], examples: [["The server went offline.", "服务器离线了。"], ["Is the device online or offline?", "设备是在线还是离线？"]] },
    ],
    phrases: [
      { p: "network device", ipa: "/ˈnɛt.wɜːrk dɪˈvaɪs/", cn: "网络设备", why: "network = 网络，device = 设备。网络设备包括交换机、路由器、防火墙等。" },
      { p: "is offline", ipa: "/ɪz ˌɒfˈlaɪn/", cn: "处于离线状态", why: "be + offline = 处于离线状态。设备无法被监控系统访问，可能是断电、网线断开或设备故障。" },
    ],
    grammar: [
      { q: "offline 和 down 有什么区别？", a: "offline = 离线（设备还在，但监控看不到它）。\ndown = 宕机（设备停止工作）。\n✅ The device is offline.（监控看不到设备 → 可能是网络问题）\n✅ The server is down.（服务器停止运行 → 设备本身故障）\n有时候 offline 和 down 同时发生，但含义不同。" },
    ],
    pattern: "One + 设备类型 + is offline / online",
    patternExamples: [
      { en: "One sensor is offline.", cn: "一个传感器离线。", words: [{ w: "sensor", ipa: "/ˈsɛnsər/", cn: "传感器", phonics: "sens 读 /sɛns/，or 读 /ər/" }] },
      { en: "One camera is offline.", cn: "一台摄像头离线。", words: [] },
      { en: "All devices are online.", cn: "所有设备在线。", words: [{ w: "devices", ipa: "/dɪˈvaɪs/", cn: "设备", phonics: "de 读 /dɪ/，vice 读 /vaɪs/" }] },
    ],
    thinking: "网络设备离线在DCIM交接中需要说明：\n1. 哪个设备（位置/名称）；2. 什么时候离线的；3. 是否影响业务。\n英语用 is offline 简洁表达「设备不在监控范围内」。",
    pronunciation: "network 的 work 读 /wɜːrk/，不要读成 /wɔːrk/。\noffline 重音在 line：off-LINE /ˌɒfˈlaɪn/。\n节奏：One NET-work ｜ de-VICE ｜ is OFF-line.",
    quiz: [
      { q: "「所有设备都在线」怎么说？", a: "All devices are online." },
      { q: "offline 和 down 的区别是什么？", a: "offline = 监控看不到设备（可能是网络问题）；down = 设备停止工作（设备本身故障）。" },
    ],
  },
  {
    id: 67,
    en: "Please open the DCIM dashboard.",
    cn: "请打开DCIM监控页面。",
    ipa: "/pliːz ˈoʊ.pən ðə ˌdiː.siː.aɪˈɛm ˈdæʃ.bɔːrd/",
    tags: ["第67句", "打开页面", "★★★★"],
    when: "告警口头汇报完毕后，需要在大屏幕上打开DCIM实际页面，让所有人看到具体数据和状态。",
    words: [
      { w: "open", ipa: "/ˈoʊ.pən/", pos: "动词", cn: "打开", memory: "① open = 打开（动词）/ 开着的（形容词）；② open the dashboard = 打开仪表盘页面。", phonics: "o 读 /oʊ/，pen 读 /pən/，重音在第一音节。", collocations: [["open the page", "打开页面"], ["open the dashboard", "打开仪表盘"], ["open the report", "打开报告"]], examples: [["Please open the BMS page.", "请打开BMS页面。"], ["Open the alarm list.", "打开告警列表。"]] },
      { w: "dashboard", ipa: "/ˈdæʃ.bɔːrd/", pos: "名词", cn: "仪表盘；监控面板", memory: "① dash = 仪表板；② board = 板；③ dashboard = 数据控制面板。\nDCIM dashboard = DCIM系统的总览页面。", phonics: "dash 读 /dæʃ/，board 读 /bɔːrd/，重音在第一音节。", collocations: [["DCIM dashboard", "DCIM仪表盘"], ["main dashboard", "主仪表盘"], ["power dashboard", "供电仪表盘"]], examples: [["Open the DCIM dashboard.", "打开DCIM仪表盘。"], ["The dashboard shows all alarms.", "仪表盘显示所有告警。"]] },
    ],
    phrases: [
      { p: "DCIM dashboard", ipa: "/ˌdiː.siː.aɪˈɛm ˈdæʃ.bɔːrd/", cn: "DCIM监控页面", why: "dashboard 是监控系统的总览页面，展示关键指标、告警和趋势。交接时需要在大屏幕上展示。" },
    ],
    grammar: [
      { q: "open 和 switch to 在这个场景中有什么区别？", a: "如果DCIM页面还没打开过 → 用 open。\n如果已经打开了只是需要切换过去看 → 用 switch to。\n✅ Please open the DCIM dashboard.（打开DCIM → 可能还没打开）\n✅ Please switch to the DCIM dashboard.（切到DCIM → 已经打开了）\n交接中两者都常用，根据当时状态选择。" },
    ],
    pattern: "Please open + the + 系统名 + dashboard",
    patternExamples: [
      { en: "Please open the BMS dashboard.", cn: "请打开BMS监控页面。", words: [{ w: "bms", ipa: "/ˌbiːˈɛmˈɛs/", cn: "楼控", phonics: "B-M-S 逐字母读" }, { w: "dashboard", ipa: "/ˈdæʃbɔːrd/", cn: "仪表盘", phonics: "dash 读 /dæʃ/，board 读 /bɔːrd/" }] },
      { en: "Please open the EPMS dashboard.", cn: "请打开EPMS监控页面。", words: [{ w: "dashboard", ipa: "/ˈdæʃbɔːrd/", cn: "仪表盘", phonics: "dash 读 /dæʃ/，board 读 /bɔːrd/" }] },
      { en: "Please open the NMS dashboard.", cn: "请打开NMS监控页面。", words: [{ w: "dashboard", ipa: "/ˈdæʃbɔːrd/", cn: "仪表盘", phonics: "dash 读 /dæʃ/，board 读 /bɔːrd/" }] },
    ],
    thinking: "口头汇报完毕后，需要在大屏幕上展示实际数据。\nopen the DCIM dashboard = 让所有人看到DCIM的总览页面。\n交接中「说」和「看」配合：先口头汇报数据，再打开页面确认。",
    pronunciation: "DCIM 逐字母读：D-C-I-M。\ndashboard 重音在第一音节：DASH-board。\n节奏：Please O-pen ｜ the D-C-I-M ｜ DASH-board.",
    quiz: [
      { q: "「请打开EPMS监控页面」怎么说？", a: "Please open the EPMS dashboard." },
      { q: "什么时候用 open，什么时候用 switch to？", a: "open = 打开一个新页面（可能还没打开）；switch to = 切换到已打开的页面。" },
    ],
  },
  {
    id: 68,
    en: "Please display the rack overview.",
    cn: "请显示机柜总览页面。",
    ipa: "/pliːz dɪˈspleɪ ðə ræk ˈoʊ.vər.vjuː/",
    tags: ["第68句", "机柜总览", "★★★★"],
    when: "打开DCIM后，先展示机柜总览页面，让所有人看到所有机柜的温度、负载、告警状态。",
    words: [
      { w: "display", ipa: "/dɪˈspleɪ/", pos: "动词", cn: "显示；展示", memory: "① dis = 向外；② play = 展示；③ display = 向外展示 = 显示。\n比 open 更强调「展示给大家看」，适合投屏场景。", phonics: "dis 读 /dɪ/，play 读 /spleɪ/，重音在第二音节。", collocations: [["display the overview", "显示总览"], ["display the dashboard", "显示仪表盘"], ["display the chart", "显示图表"]], examples: [["Display the rack overview.", "显示机柜总览。"], ["Please display the temperature map.", "请显示温度分布图。"]] },
      { w: "overview", ipa: "/ˈoʊ.vər.vjuː/", pos: "名词", cn: "总览；概览", memory: "① over = 上方/全面；② view = 看；③ overview = 从上方全面看 = 总览。\nrack overview = 所有机柜的状态总览。", phonics: "o 读 /oʊ/，ver 读 /ər/，view 读 /vjuː/，重音在第一音节。", collocations: [["rack overview", "机柜总览"], ["system overview", "系统总览"], ["power overview", "供电总览"]], examples: [["Show me the rack overview.", "给我看机柜总览。"], ["The overview shows all racks.", "总览页显示所有机柜。"]] },
    ],
    phrases: [
      { p: "rack overview", ipa: "/ræk ˈoʊ.vər.vjuː/", cn: "机柜总览", why: "rack = 机柜，overview = 总览。机柜总览页展示数据中心所有机柜的温度、负载、告警状态。" },
    ],
    grammar: [
      { q: "display 和 show 有什么区别？", a: "display = 显示/展示（更正式，常用于系统操作指令）。\nshow = 给…看（更口语化）。\n✅ Please display the rack overview.（正式操作指令）\n✅ Can you show me the overview?（口语化请求）\n交接投屏场景用 display 更专业。" },
    ],
    pattern: "Please display the + 模块名 + overview",
    patternExamples: [
      { en: "Please display the power overview.", cn: "请显示供电总览。", words: [{ w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }] },
      { en: "Please display the cooling overview.", cn: "请显示制冷总览。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }] },
      { en: "Please display the network overview.", cn: "请显示网络总览。", words: [{ w: "network", ipa: "/ˈnɛtwɜːrk/", cn: "网络", phonics: "net 读 /nɛt/，work 读 /wɜːrk/" }] },
    ],
    thinking: "display + overview 是交接中展示总览页面的标准句式。\n先 overview（总览）看全局，再 drill down（钻取）看详情。\n交接的展示顺序：总览 → 告警列表 → 单条告警详情。",
    pronunciation: "display 重音在第二音节：dis-PLAY。\noverview 重音在第一音节：O-ver-view。\n节奏：Please dis-PLAY ｜ the RACK ｜ O-ver-view.",
    quiz: [
      { q: "「请显示供电总览」怎么说？", a: "Please display the power overview." },
      { q: "为什么交接时先看overview再看详情？", a: "overview 让所有人快速了解全局状态，确认没有遗漏；然后再逐项深入详情，避免一开始就陷入细节而漏掉重要告警。" },
    ],
  },
  {
    id: 69,
    en: "Please display the power dashboard.",
    cn: "请显示供电监控页面。",
    ipa: "/pliːz dɪˈspleɪ ðə ˈpaʊ.ər ˈdæʃ.bɔːrd/",
    tags: ["第69句", "供电监控", "★★★★★"],
    when: "机柜总览后，重点查看供电系统。供电是数据中心最关键的基础设施，需要确认UPS、发电机、PDU的状态。",
    words: [
      { w: "power", ipa: "/ˈpaʊ.ər/", pos: "名词", cn: "电力；供电", memory: "① power = 力量/电力；② power dashboard = 供电监控页面。\n涵盖：市电（utility）、UPS、发电机（generator）、PDU、STS/ATS。", phonics: "pow 读 /paʊ/，er 读 /ər/，重音在第一音节。", collocations: [["power dashboard", "供电仪表盘"], ["power supply", "电源"], ["power failure", "断电"], ["power load", "电力负载"]], examples: [["Check the power dashboard.", "检查供电仪表盘。"], ["There was a power failure.", "发生了断电。"]] },
    ],
    phrases: [
      { p: "power dashboard", ipa: "/ˈpaʊ.ər ˈdæʃ.bɔːrd/", cn: "供电监控页面", why: "power = 供电，dashboard = 仪表盘/监控页面。供电监控页面展示所有供电设备的状态、负载和告警。" },
    ],
    grammar: [
      { q: "power dashboard 和 power overview 有什么不同？", a: "dashboard = 仪表盘（实时监控面板，含图表和数据）。\noverview = 总览（概要视图，通常是列表或摘要）。\n✅ Display the power dashboard.（显示供电实时监控面板）\n✅ Display the power overview.（显示供电概要总览）\n两者内容可能重叠，dashboard 更偏向实时监控，overview 更偏向概要。" },
    ],
    pattern: "Please display the + 子系统 + dashboard",
    patternExamples: [
      { en: "Please display the cooling dashboard.", cn: "请显示制冷监控页面。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "dashboard", ipa: "/ˈdæʃbɔːrd/", cn: "仪表盘", phonics: "dash 读 /dæʃ/，board 读 /bɔːrd/" }] },
      { en: "Please display the environment dashboard.", cn: "请显示环境监控页面。", words: [{ w: "dashboard", ipa: "/ˈdæʃbɔːrd/", cn: "仪表盘", phonics: "dash 读 /dæʃ/，board 读 /bɔːrd/" }] },
      { en: "Please display the security dashboard.", cn: "请显示安防监控页面。", words: [{ w: "security", ipa: "/sɪˈkjʊrɪti/", cn: "安防", phonics: "se 读 /sɪ/，curity 读 /kjʊrɪti/" }, { w: "dashboard", ipa: "/ˈdæʃbɔːrd/", cn: "仪表盘", phonics: "dash 读 /dæʃ/，board 读 /bɔːrd/" }] },
    ],
    thinking: "供电交接是DCIM交接的重中之重。\npower dashboard 展示：市电状态、UPS负载/电池、发电机状态、PDU负载。\n交接时必须确认：供电冗余是否正常（N+1 或 2N）。",
    pronunciation: "power 双元音 /aʊ/ 要饱满：POW-er。\ndashboard 重音在第一音节：DASH-board。\n节奏：Please dis-PLAY ｜ the POW-er ｜ DASH-board.",
    quiz: [
      { q: "「请显示环境监控页面」怎么说？", a: "Please display the environment dashboard." },
      { q: "供电交接需要确认哪些设备？", a: "市电（utility）、UPS（负载+电池+旁路）、发电机（状态+油位）、PDU（负载）、STS/ATS（切换状态）。" },
    ],
  },
  {
    id: 70,
    en: "Please display the cooling dashboard.",
    cn: "请显示制冷监控页面。",
    ipa: "/pliːz dɪˈspleɪ ðə ˈkuː.lɪŋ ˈdæʃ.bɔːrd/",
    tags: ["第70句", "制冷监控", "★★★★★"],
    when: "供电确认后，查看制冷系统。制冷故障会导致温度快速上升，是数据中心第二大关键基础设施。",
    words: [
      { w: "cooling", ipa: "/ˈkuː.lɪŋ/", pos: "名词/形容词", cn: "制冷；冷却", memory: "① cool = 冷却（动词/形容词）；② cooling = 制冷过程/制冷的。\n数据中心制冷系统包括：CRAH（精密空调）、冷水机组、冷却塔。", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/，重音在第一音节。", collocations: [["cooling system", "制冷系统"], ["cooling capacity", "制冷量"], ["cooling dashboard", "制冷仪表盘"], ["precision cooling", "精密制冷"]], examples: [["Check the cooling system.", "检查制冷系统。"], ["The cooling capacity is sufficient.", "制冷量充足。"]] },
    ],
    phrases: [
      { p: "cooling dashboard", ipa: "/ˈkuː.lɪŋ ˈdæʃ.bɔːrd/", cn: "制冷监控页面", why: "cooling = 制冷，dashboard = 监控面板。展示所有制冷设备（CRAH/CRAC）的运行状态、送风温度、回风温度。" },
    ],
    grammar: [
      { q: "cooling 和 air conditioning 有什么区别？", a: "cooling = 制冷（泛指冷却过程，包括精密空调、冷水机组等）。\nair conditioning (AC) = 空调（通常指舒适性空调）。\n数据中心用 precision cooling / CRAH（Computer Room Air Handler），不用普通 AC。\n交接中说 cooling system，不说 air conditioning。" },
    ],
    pattern: "Please display the + cooling/制冷相关 + dashboard",
    patternExamples: [
      { en: "Please display the chiller dashboard.", cn: "请显示冷水机组监控页面。", words: [{ w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }, { w: "dashboard", ipa: "/ˈdæʃbɔːrd/", cn: "仪表盘", phonics: "dash 读 /dæʃ/，board 读 /bɔːrd/" }] },
      { en: "Please display the CRAH dashboard.", cn: "请显示精密空调监控页面。", words: [{ w: "dashboard", ipa: "/ˈdæʃbɔːrd/", cn: "仪表盘", phonics: "dash 读 /dæʃ/，board 读 /bɔːrd/" }] },
      { en: "Please display the temperature map.", cn: "请显示温度分布图。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
    ],
    thinking: "制冷交接在供电之后，是DCIM交接的第二个重点。\ncooling dashboard 展示：CRAH运行状态、送风/回风温度、冷冻水温度、制冷冗余。\n交接时必须确认：N+1 制冷冗余是否正常。",
    pronunciation: "cooling 的 oo 读长音 /uː/：COOL-ing。\n节奏：Please dis-PLAY ｜ the COOL-ing ｜ DASH-board.",
    quiz: [
      { q: "「请显示冷水机组监控页面」怎么说？", a: "Please display the chiller dashboard." },
      { q: "数据中心为什么不用普通空调？", a: "普通空调（AC）无法满足数据中心需求：精度不够（±3°C vs ±0.5°C）、无加湿/除湿控制、不支持7×24运行。数据中心用精密空调（CRAH/CRAC）。" },
    ],
  },
  {
    id: 71,
    en: "Please check the IT load.",
    cn: "请查看IT负载。",
    ipa: "/pliːz tʃɛk ðə ˌaɪˈtiː loʊd/",
    tags: ["第71句", "IT负载", "★★★★★"],
    when: "制冷页面打开后，需要查看当前IT负载数据。IT负载是数据中心运营的核心指标之一。",
    words: [
      { w: "check", ipa: "/tʃɛk/", pos: "动词", cn: "查看；检查", memory: "① check = 检查/核实；② check the load = 查看负载数据。\n在交接中 check = 查看并确认数据是否正常。", phonics: "ch 读 /tʃ/，eck 读 /ɛk/。", collocations: [["check the load", "查看负载"], ["check the status", "查看状态"], ["check the alarm", "检查告警"], ["double check", "再次确认"]], examples: [["Please check the IT load.", "请查看IT负载。"], ["Let me check the status.", "让我查看状态。"]] },
      { w: "IT load", ipa: "/ˌaɪˈtiː loʊd/", pos: "名词短语", cn: "IT负载", memory: "① IT = 信息技术；② load = 负载/负荷；③ IT load = IT设备的电力消耗总量。\n通常以 MW（兆瓦）或 kW（千瓦）为单位。", phonics: "IT 逐字母读 I-T /aɪ.tiː/，load 读 /loʊd/。", collocations: [["IT load", "IT负载"], ["total load", "总负载"], ["peak load", "峰值负载"], ["design load", "设计负载"]], examples: [["The IT load is 8.5 MW.", "IT负载为8.5兆瓦。"], ["Check today's peak load.", "查看今天的峰值负载。"]] },
    ],
    phrases: [
      { p: "IT load", ipa: "/ˌaɪˈtiː loʊd/", cn: "IT负载", why: "IT load = 数据中心所有IT设备（服务器、存储、网络设备）的总电力消耗，是衡量数据中心运行规模的核心指标。" },
    ],
    grammar: [
      { q: "check 和 review 在交接中怎么区分？", a: "check = 快速查看/核实（确认某个具体数值或状态）。\nreview = 系统性回顾（全面检查一系列内容）。\n✅ Please check the IT load.（查看IT负载 → 看一个数值）\n✅ Let's review the alarms.（回顾告警 → 逐条检查所有告警）\n交接中：具体数据用 check，系列内容用 review。" },
    ],
    pattern: "Please check the + 指标名称",
    patternExamples: [
      { en: "Please check the total power.", cn: "请查看总功率。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }] },
      { en: "Please check the UPS load.", cn: "请查看UPS负载。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
      { en: "Please check the generator status.", cn: "请查看发电机状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Please check the battery voltage.", cn: "请查看电池电压。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "battery", ipa: "/ˈbætəri/", cn: "电池", phonics: "bat 读 /bæt/，tery 读 /təri/" }, { w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }] },
    ],
    thinking: "check + 指标名 是交接中查看具体数据的标准句式。\nIT负载是数据中心最重要的运营指标之一，交接时必须汇报当前值和历史峰值。\n记住：check 用于查看单个数据点。",
    pronunciation: "IT 逐字母读：I-T /aɪ.tiː/。\ncheck 的 ch 读 /tʃ/，不要读成 /k/。\n节奏：Please CHECK ｜ the I-T ｜ LOAD.",
    quiz: [
      { q: "「请查看UPS负载」怎么说？", a: "Please check the UPS load." },
      { q: "check 和 review 什么时候用哪个？", a: "check = 查看单个数据点（如IT负载、温度、PUE）；review = 系统性回顾一系列内容（如告警列表、工单列表）。" },
    ],
  },
  {
    id: 72,
    en: "The current IT load is 8.5 megawatts.",
    cn: "当前IT负载为8.5兆瓦。",
    ipa: "/ðə ˈkʌr.ənt ˌaɪˈtiː loʊd ɪz ˌeɪt pɔɪnt faɪv ˈmɛɡ.ə.wɒts/",
    tags: ["第72句", "IT负载数值", "★★★★★"],
    when: "回答上一句的 check 请求，报出当前IT负载的具体数值。交接时需要精确到小数点后一位。",
    words: [
      { w: "current", ipa: "/ˈkʌr.ənt/", pos: "形容词", cn: "当前的；现在的", memory: "① curr = 流（拉丁语 currere）；② current = 正在流动的 → 当前的。\ncurrent IT load = 当前IT负载（不是历史值也不是设计值）。", phonics: "cur 读 /kʌr/，rent 读 /rənt/，重音在第一音节。", collocations: [["current load", "当前负载"], ["current status", "当前状态"], ["current value", "当前值"], ["current temperature", "当前温度"]], examples: [["The current load is 8.5 MW.", "当前负载为8.5MW。"], ["Check the current temperature.", "查看当前温度。"]] },
      { w: "megawatt", ipa: "/ˈmɛɡ.ə.wɒt/", pos: "名词", cn: "兆瓦 (MW)", memory: "① mega = 百万（10⁶）；② watt = 瓦特；③ megawatt = 兆瓦 = 1,000,000 瓦特。\n1 MW = 1,000 kW。数据中心规模通常以 MW 计量。", phonics: "mega 读 /mɛɡ.ə/，watt 读 /wɒt/，重音在第一音节。", collocations: [["megawatt (MW)", "兆瓦"], ["kilowatt (kW)", "千瓦"], ["megawatt hour (MWh)", "兆瓦时"]], examples: [["The data center is 10 MW.", "数据中心是10兆瓦的。"], ["The load increased by 0.5 MW.", "负载增加了0.5兆瓦。"]] },
    ],
    phrases: [
      { p: "current IT load", ipa: "/ˈkʌr.ənt ˌaɪˈtiː loʊd/", cn: "当前IT负载", why: "current = 当前的，IT load = IT负载。交接时汇报当前实时值，区别于设计容量和历史峰值。" },
    ],
    grammar: [
      { q: "8.5 怎么读？", a: "8.5 读作 eight point five /eɪt pɔɪnt faɪv/。\n小数点读 point，后面的数字逐个读：\n✅ 8.5 → eight point five\n✅ 1.32 → one point three two\n✅ 8.95 → eight point nine five\n❌ eight point fifty（错，不要读成五十）" },
    ],
    pattern: "The current + 指标 + is + 数值 + 单位",
    patternExamples: [
      { en: "The current PUE is 1.32.", cn: "当前PUE为1.32。", words: [] },
      { en: "The current temperature is 22 degrees.", cn: "当前温度为22度。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
      { en: "The current UPS load is 72 percent.", cn: "当前UPS负载为72%。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
    ],
    thinking: "汇报数据用 The current X is Y 句式。\n交接时数据要精确：8.5 MW（不说「大约8兆瓦」），1.32 PUE（不说「大概1.3」）。\n精确数据体现专业性和严谨性。",
    pronunciation: "8.5 读 eight point five，不读 eight point fifty。\nmegawatts 的 watt 读 /wɒt/（英式）或 /wɑːt/（美式）。\n节奏：The CUR-rent ｜ I-T LOAD ｜ is EIGHT point FIVE ｜ MEGA-watts.",
    quiz: [
      { q: "当前PUE为1.35，怎么说？", a: "The current PUE is 1.35." },
      { q: "1.32 怎么读？", a: "one point three two。小数点后逐个读数字，不读成 thirty-two。" },
    ],
  },
  {
    id: 73,
    en: "Please check today's peak load.",
    cn: "请查看今天的最大负载。",
    ipa: "/pliːz tʃɛk təˈdeɪz piːk loʊd/",
    tags: ["第73句", "峰值负载", "★★★★"],
    when: "当前负载确认后，还需查看今天的峰值负载（最高值），了解负载波动范围。",
    words: [
      { w: "peak", ipa: "/piːk/", pos: "名词/形容词", cn: "峰值；最高的", memory: "① peak = 山顶/顶点；② peak load = 峰值负载 = 一天中最高的负载值。\n了解峰值有助于判断设备是否接近容量上限。", phonics: "p 读 /p/，ea 读 /iː/，k 读 /k/。注意 ea 发长音 /iː/。", collocations: [["peak load", "峰值负载"], ["peak demand", "峰值需求"], ["peak hour", "高峰时段"], ["peak temperature", "最高温度"]], examples: [["Today's peak load was 9.2 MW.", "今天峰值负载为9.2MW。"], ["When was the peak?", "峰值出现在什么时候？"]] },
    ],
    phrases: [
      { p: "today's peak load", ipa: "/təˈdeɪz piːk loʊd/", cn: "今天的峰值负载", why: "today's = 今天的（所有格），peak load = 峰值负载。交接时比较当前值和峰值，了解负载波动。" },
    ],
    grammar: [
      { q: "peak load 和 maximum load 一样吗？", a: "意思接近，都指最高负载。\npeak load = 峰值负载（更常用，指一段时间内的最高点）。\nmaximum load = 最大负载（可以指设计上限）。\n✅ Today's peak load was 8.9 MW.（今天实际达到的最高值）\n✅ The maximum load is 12 MW.（设计上限是12MW）\n交接中用 peak load 指实际最高值。" },
    ],
    pattern: "Please check + 时间's + peak + 指标",
    patternExamples: [
      { en: "Please check yesterday's peak temperature.", cn: "请查看昨天的最高温度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
      { en: "Please check this week's peak load.", cn: "请查看本周的峰值负载。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
      { en: "Please check last night's peak PUE.", cn: "请查看昨晚的峰值PUE。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "交接时不只看「当前值」，还要看「峰值」。\n当前 8.5 MW，峰值 8.9 MW → 说明负载有波动，但都在安全范围内。\n如果峰值接近设计容量（如 12 MW），需要预警。",
    pronunciation: "peak 的 ea 读长音 /iː/，不读 /ɛ/。\ntoday's 的 s 读 /z/。\n节奏：Please CHECK ｜ to-DAY'S ｜ PEAK LOAD.",
    quiz: [
      { q: "「请查看本周的峰值负载」怎么说？", a: "Please check this week's peak load." },
      { q: "peak load 和 maximum load 有什么区别？", a: "peak load = 实际达到的最高值（如今天8.9MW）；maximum load = 设计上限（如12MW）。交接中 peak load 指实际最高值。" },
    ],
  },
  {
    id: 74,
    en: "Today's peak load was 8.9 megawatts.",
    cn: "今天的最大负载为8.9兆瓦。",
    ipa: "/təˈdeɪz piːk loʊd wɒz ˌeɪt pɔɪnt naɪn ˈmɛɡ.ə.wɒts/",
    tags: ["第74句", "峰值数据", "★★★★"],
    when: "回答上一句的 check 请求，报出今天峰值负载的具体数值。用 was（过去式）因为峰值已经发生过了。",
    words: [
      { w: "was", ipa: "/wɒz/", pos: "动词（be过去式）", cn: "是（过去式）", memory: "① was = is 的过去式；② 用于描述已经发生过的事情。\n峰值已经出现过了，所以用 was 而不是 is。", phonics: "读 /wɒz/（英式）或 /wʌz/（美式弱读）。", collocations: [["was 8.9 MW", "是8.9MW"], ["was normal", "是正常的"], ["was higher", "更高"]], examples: [["The peak was 8.9 MW.", "峰值为8.9MW。"], ["The temperature was 25 degrees.", "温度是25度。"]] },
    ],
    phrases: [
      { p: "today's peak load was", ipa: "/təˈdeɪz piːk loʊd wɒz/", cn: "今天的峰值负载为", why: "peak（峰值）是一个已经发生的事件，所以用过去式 was。当前值用 is，历史值用 was。" },
    ],
    grammar: [
      { q: "为什么用 was 不用 is？", a: "峰值（peak）是过去某个时间点达到的最高值，所以用过去式 was。\n✅ The current load IS 8.5 MW.（当前值 → 现在 → is）\n✅ Today's peak load WAS 8.9 MW.（峰值 → 过去 → was）\n记忆：当前用 is，过去的峰值用 was。" },
    ],
    pattern: "时间's + peak + 指标 + was + 数值 + 单位",
    patternExamples: [
      { en: "Yesterday's peak load was 9.1 MW.", cn: "昨天峰值负载为9.1MW。", words: [{ w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
      { en: "Today's peak temperature was 28 degrees.", cn: "今天最高温度为28度。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
      { en: "Last night's peak PUE was 1.38.", cn: "昨晚峰值PUE为1.38。", words: [] },
    ],
    thinking: "汇报历史峰值用 was（过去式），汇报当前值用 is。\n交接时对比：当前 8.5 MW vs 峰值 8.9 MW → 波动 0.4 MW，属于正常范围。\n如果峰值远高于当前值，说明今天有过一次负载高峰，需要了解原因。",
    pronunciation: "was 弱读为 /wəz/，在句中几乎听不到。\n8.9 读 eight point nine。\n节奏：To-DAY'S ｜ PEAK LOAD ｜ was EIGHT point NINE ｜ MEGA-watts.",
    quiz: [
      { q: "昨天峰值负载为9.2MW，怎么说？", a: "Yesterday's peak load was 9.2 megawatts." },
      { q: "为什么峰值用 was，当前值用 is？", a: "峰值是过去某个时间点发生的（已经是过去），所以用 was；当前值是现在的状态，所以用 is。" },
    ],
  },
  {
    id: 75,
    en: "Please check the current PUE.",
    cn: "请查看当前PUE。",
    ipa: "/pliːz tʃɛk ðə ˈkʌr.ənt ˌpiː.juːˈiː/",
    tags: ["第75句", "PUE指标", "★★★★★"],
    when: "负载数据确认后，查看PUE（Power Usage Effectiveness），这是衡量数据中心能效的核心指标。",
    words: [
      { w: "PUE", ipa: "/ˌpiː.juːˈiː/", pos: "缩写", cn: "电力使用效率 (Power Usage Effectiveness)", memory: "① P = Power（电力）；② U = Usage（使用）；③ E = Effectiveness（效率）。\nPUE = 总设施功率 ÷ IT设备功率。越接近1.0越高效。行业标准：1.2-1.5。", phonics: "逐字母读 P-U-E /piː.juː.iː/。", collocations: [["current PUE", "当前PUE"], ["annual PUE", "年度PUE"], ["design PUE", "设计PUE"], ["PUE target", "PUE目标"]], examples: [["The current PUE is 1.32.", "当前PUE为1.32。"], ["Our PUE target is 1.3.", "我们的PUE目标是1.3。"]] },
    ],
    phrases: [
      { p: "current PUE", ipa: "/ˈkʌr.ənt ˌpiː.juːˈiː/", cn: "当前PUE", why: "PUE 是数据中心能效的核心指标。交接时汇报当前 PUE，与设计 PUE 和历史 PUE 对比，判断能效是否正常。" },
    ],
    grammar: [
      { q: "PUE 的数值怎么理解？", a: "PUE = 总设施功率 ÷ IT设备功率。\nPUE = 1.0 → 所有电都给了IT设备（理论完美值，实际不可能）。\nPUE = 1.3 → 每1W的IT用电，需要额外0.3W给制冷/照明/配电。\nPUE = 2.0 → 一半的电给了IT，一半给了基础设施（效率较低）。\n行业标准：1.2-1.5，新建数据中心目标 < 1.3。" },
    ],
    pattern: "Please check the current + 能效指标",
    patternExamples: [
      { en: "Please check the current WUE.", cn: "请查看当前WUE（水资源使用效率）。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the current CUE.", cn: "请查看当前CUE（碳使用效率）。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the annual average PUE.", cn: "请查看年度平均PUE。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "PUE 是数据中心能效的「体检指标」。\n交接时汇报 PUE 的目的：1. 确认当前能效是否正常；2. 如果 PUE 异常升高，可能意味着制冷效率下降或设备故障。\nPUE = check the current + 指标名，这是查看实时能效数据的标准句式。",
    pronunciation: "PUE 逐字母读：P-U-E /piː.juː.iː/。\n节奏：Please CHECK ｜ the CUR-rent ｜ P-U-E.",
    quiz: [
      { q: "「请查看年度平均PUE」怎么说？", a: "Please check the annual average PUE." },
      { q: "PUE 1.32 意味着什么？", a: "每1W的IT设备用电，需要额外0.32W给基础设施（制冷、配电、照明等）。总功率 = IT功率 × 1.32。越接近1.0越高效。" },
    ],
  },
];

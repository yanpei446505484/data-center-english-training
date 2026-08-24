// EXPORTS: MOCK_SENTENCES_BORROWRETURN45A

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_BORROWRETURN45A: ISentence[] = [
  {
    id: 2441,
    speaker: 'Engineer',
    en: 'Could I borrow your laptop for a few minutes?',
    cn: '我可以借用一下你的电脑吗？',
    ipa: '/kʊd aɪ ˈbɒrəʊ jɔːr ˈlæptɒp fɔːr ə fjuː ˈmɪnɪts/',
    tags: ['第2441句', '借东西', '★★★★'],
    when: '自己的电脑在充电或系统更新，临时需要向同事借笔记本电脑查看 BMS 数据。',
    words: [
      { w: 'borrow', ipa: '/ˈbɒrəʊ/', pos: '动词', cn: '借入', memory: 'borrow 强调「借进来」，lend 强调「借出去」。', phonics: 'bor 读 /bɒr/，row 读 /əʊ/，重音在第一音节。', collocations: [['borrow money', '借钱'], ['borrow a book', '借书'], ['borrow equipment', '借设备']], examples: [['Can I borrow your pen?', '我能借你的笔吗？'], ['I borrowed a laptop from IT.', '我从IT部门借了一台笔记本。']] },
      { w: 'laptop', ipa: '/ˈlæptɒp/', pos: '名词', cn: '笔记本电脑', memory: 'lap(膝上)+top(顶部)→放在膝上的电脑。', phonics: 'lap 读 /læp/，top 读 /tɒp/，重音在第一音节。', collocations: [['use a laptop', '使用笔记本'], ['laptop charger', '笔记本充电器']], examples: [['I need my laptop for the meeting.', '开会我需要用笔记本。'], ['The laptop is running slow.', '笔记本运行很慢。']] },
    ],
    phrases: [
      { p: 'Could I borrow', ipa: '/kʊd aɪ ˈbɒrəʊ/', cn: '我可以借…吗', why: 'Could I + borrow 是礼貌借用请求，比 Can I borrow 更委婉正式。' },
      { p: 'for a few minutes', ipa: '/fɔːr ə fjuː ˈmɪnɪts/', cn: '几分钟', why: 'for + 时间段，表示借用的时间长度，让同事知道不会占用太久。' },
    ],
    grammar: [
      { q: 'Could I borrow 和 Can I borrow 有什么区别？', a: 'Could I borrow 更礼貌委婉，适合向不太熟的同事或上级借用。\nCan I borrow 更随意直接，适合熟悉的同事。\n✅ Could I borrow your laptop?（我可以借你的电脑吗？）—— 礼貌\n✅ Can I borrow your charger?（我能借你的充电器吗？）—— 随意\n初次借用或不熟的同事推荐用 Could I。' },
    ],
    pattern: 'Could I borrow + 物品 + for + 时间?',
    patternExamples: [
      { en: 'Could I borrow your phone for a minute?', cn: '我可以借你的手机用一分钟吗？', words: [] },
      { en: 'Could I borrow a cable for an hour?', cn: '我可以借一根线缆用一小时吗？', words: [] },
      { en: 'Could I borrow the tablet for the shift?', cn: '我可以借这台平板用这一个班次吗？', words: [] },
    ],
    thinking: '在数据中心，工程师经常需要临时借用同事的设备。\nCould I borrow + 物品 + for + 时间 是标准的借用句式。\n中文说「我可以借用…几分钟吗」，英语用 Could I borrow...for a few minutes。',
    pronunciation: 'borrow 重音在第一音节：BOR-row。\nlaptop 重音在第一音节：LAP-top。\n节奏：COULD I ｜ BOR-row your LAP-top ｜ for a FEW MIN-utes?',
    quiz: [
      { q: '把「我可以借用一下你的电脑吗？」用英语说出来。', a: 'Could I borrow your laptop for a few minutes?' },
      { q: '「借入」用英语怎么说？', a: 'borrow (/ˈbɒrəʊ/)' },
    ],
  },
  {
    id: 2442,
    speaker: 'Engineer',
    en: 'May I borrow your charger?',
    cn: '我可以借一下你的充电器吗？',
    ipa: '/meɪ aɪ ˈbɒrəʊ jɔːr ˈtʃɑːrdʒər/',
    tags: ['第2442句', '借东西', '★★★★'],
    when: '手机或对讲机电量不足，向同事借充电器。',
    words: [
      { w: 'charger', ipa: '/ˈtʃɑːrdʒər/', pos: '名词', cn: '充电器', memory: 'charge(充电)+er(名词后缀)→用来充电的装置。', phonics: 'charg 读 /tʃɑːrdʒ/，er 读 /ər/，重音在第一音节。', collocations: [['phone charger', '手机充电器'], ['laptop charger', '笔记本充电器'], ['fast charger', '快充']], examples: [['Do you have a charger?', '你有充电器吗？'], ['The charger is not working.', '充电器坏了。']] },
    ],
    phrases: [
      { p: 'May I borrow', ipa: '/meɪ aɪ ˈbɒrəʊ/', cn: '我可以借…吗', why: 'May I 比 Could I 更正式，常用于较正式的礼貌请求。' },
    ],
    grammar: [
      { q: 'May I 和 Could I 哪个更礼貌？', a: '两者都很礼貌，但 May I 更正式，带有「请求许可」的语气。\nCould I 侧重「能力/可能性」，May I 侧重「允许」。\n✅ May I borrow your charger?（我可以借充电器吗？）—— 正式请求许可\n✅ Could I borrow your charger?（我能借充电器吗？）—— 礼貌询问可能性\n两种在日常借用场景都可以用。' },
    ],
    pattern: 'May I borrow + 物品?',
    patternExamples: [
      { en: 'May I borrow your headset?', cn: '我可以借你的耳麦吗？', words: [] },
      { en: 'May I borrow the spare battery?', cn: '我可以借备用电池吗？', words: [] },
      { en: 'May I borrow a USB cable?', cn: '我可以借一根USB线吗？', words: [] },
    ],
    thinking: 'May I borrow 是另一个常见的礼貌借用句式。\n在数据中心，充电器是对讲机、手机等通信设备的刚需。\n中文说「我可以借一下…」，英语用 May I borrow。',
    pronunciation: 'charger 重音在第一音节：CHAR-ger。\n节奏：MAY I ｜ BOR-row your CHAR-ger?',
    quiz: [
      { q: '把「我可以借一下你的充电器吗？」用英语说出来。', a: 'May I borrow your charger?' },
      { q: '「充电器」用英语怎么说？', a: 'charger (/ˈtʃɑːrdʒər/)' },
    ],
  },
  {
    id: 2443,
    speaker: 'Engineer',
    en: 'Could I borrow your access card for a moment?',
    cn: '我可以暂时借一下你的门禁卡吗？',
    ipa: '/kʊd aɪ ˈbɒrəʊ jɔːr ˈæksəs kɑːrd fɔːr ə ˈməʊmənt/',
    tags: ['第2443句', '借东西', '★★★★★'],
    when: '自己的门禁卡忘记带或丢失，需要临时借用同事的门禁卡进入机房。',
    words: [
      { w: 'access', ipa: '/ˈæksəs/', pos: '名词', cn: '门禁；进入权限', memory: 'ac(朝向)+cess(走)→走进去的权限→进入权。', phonics: 'ac 读 /æk/，cess 读 /səs/，重音在第一音节。', collocations: [['access card', '门禁卡'], ['access control', '门禁控制'], ['restricted access', '限制进入']], examples: [['I need an access card.', '我需要一张门禁卡。'], ['The access was denied.', '进入权限被拒绝。']] },
      { w: 'moment', ipa: '/ˈməʊmənt/', pos: '名词', cn: '片刻；一会儿', memory: 'moment 表示极短的时间段。', phonics: 'mo 读 /məʊ/，ment 读 /mənt/，重音在第一音节。', collocations: [['for a moment', '一会儿'], ['at the moment', '此刻'], ['wait a moment', '等一下']], examples: [['Just a moment, please.', '请稍等。'], ['I\'ll be back in a moment.', '我马上回来。']] },
    ],
    phrases: [
      { p: 'access card', ipa: '/ˈæksəs kɑːrd/', cn: '门禁卡', why: '数据中心各区域（机房/配电室/冷通道）都需要门禁卡才能进入。' },
      { p: 'for a moment', ipa: '/fɔːr ə ˈməʊmənt/', cn: '片刻', why: 'for a moment 比 for a few minutes 更短，暗示借用时间极短。' },
    ],
    grammar: [
      { q: 'for a moment 和 for a few minutes 哪个更短？', a: 'for a moment 表示「片刻、一下子」，比 for a few minutes 更短。\n✅ for a moment（一会儿/片刻）—— 极短\n✅ for a few minutes（几分钟）—— 稍长\n✅ for an hour（一小时）—— 较长\n借用门禁卡时通常只需要几秒钟刷一下，所以用 for a moment。' },
    ],
    pattern: 'Could I borrow + 物品 + for a moment?',
    patternExamples: [
      { en: 'Could I borrow your badge for a moment?', cn: '我可以暂时借一下你的工牌吗？', words: [] },
      { en: 'Could I borrow the master key for a moment?', cn: '我可以暂时借一下万能钥匙吗？', words: [] },
      { en: 'Could I borrow your walkie-talkie for a moment?', cn: '我可以暂时借一下你的对讲机吗？', words: [] },
    ],
    thinking: '门禁卡在数据中心极为重要，每个区域都有不同权限等级。\n借用门禁卡是最常见的临时需求之一。\n中文说「暂时借一下」，英语用 for a moment 对应。',
    pronunciation: 'access 重音在第一音节：AC-cess。\nmoment 重音在第一音节：MO-ment。\n节奏：COULD I ｜ BOR-row your AC-cess CARD ｜ for a MO-ment?',
    quiz: [
      { q: '把「我可以暂时借一下你的门禁卡吗？」用英语说出来。', a: 'Could I borrow your access card for a moment?' },
      { q: '「门禁卡」用英语怎么说？', a: 'access card (/ˈæksəs kɑːrd/)' },
    ],
  },
  {
    id: 2444,
    speaker: 'Engineer',
    en: 'May I borrow your office key?',
    cn: '我可以借一下办公室钥匙吗？',
    ipa: '/meɪ aɪ ˈbɒrəʊ jɔːr ˈɒfɪs kiː/',
    tags: ['第2444句', '借东西', '★★★★'],
    when: '需要进入同事的办公室取文件或设备，向对方借钥匙。',
    words: [
      { w: 'office', ipa: '/ˈɒfɪs/', pos: '名词', cn: '办公室', memory: 'offic(职责)+e→履行职责的地方→办公室。', phonics: 'of 读 /ɒ/，fice 读 /fɪs/，重音在第一音节。', collocations: [['office key', '办公室钥匙'], ['office hours', '办公时间'], ['back office', '后台办公区']], examples: [['The office is on the second floor.', '办公室在二楼。'], ['I left my bag in the office.', '我把包落在办公室了。']] },
    ],
    phrases: [
      { p: 'office key', ipa: '/ˈɒfɪs kiː/', cn: '办公室钥匙', why: '与 access card（门禁卡）不同，office key 是物理钥匙，用于传统门锁。' },
    ],
    grammar: [
      { q: 'key 什么时候用 the，什么时候用 your？', a: '用 your key 指「你的那把钥匙」，用 the key 指「大家都知道的那把钥匙」。\n✅ May I borrow your office key?（我能借你的办公室钥匙吗？）—— 对方的钥匙\n✅ May I borrow the key to Room 201?（我能借201房间的钥匙吗？）—— 特定房间的钥匙' },
    ],
    pattern: 'May I borrow + 形容词/名词修饰 + key?',
    patternExamples: [
      { en: 'May I borrow the server room key?', cn: '我可以借一下服务器机房的钥匙吗？', words: [] },
      { en: 'May I borrow the storage room key?', cn: '我可以借一下仓库的钥匙吗？', words: [] },
      { en: 'May I borrow your desk drawer key?', cn: '我可以借一下你抽屉的钥匙吗？', words: [] },
    ],
    thinking: '数据中心除了门禁卡，部分区域仍使用物理钥匙。\n借用钥匙时 May I borrow your...key 是标准句式。\n中文说「借一下…钥匙」，英语用 May I borrow...key。',
    pronunciation: 'office 重音在第一音节：OF-fice。\nkey 读 /kiː/，长元音。\n节奏：MAY I ｜ BOR-row your OF-fice KEY?',
    quiz: [
      { q: '把「我可以借一下办公室钥匙吗？」用英语说出来。', a: 'May I borrow your office key?' },
      { q: '「钥匙」用英语怎么说？', a: 'key (/kiː/)' },
    ],
  },
  {
    id: 2445,
    speaker: 'Engineer',
    en: 'Could I borrow your radio?',
    cn: '我可以借一下你的对讲机吗？',
    ipa: '/kʊd aɪ ˈbɒrəʊ jɔːr ˈreɪdiəʊ/',
    tags: ['第2445句', '借东西', '★★★★★'],
    when: '自己的对讲机没电或故障，需要借用同事的对讲机进行巡检通信。',
    words: [
      { w: 'radio', ipa: '/ˈreɪdiəʊ/', pos: '名词', cn: '对讲机；无线电', memory: 'radio 在数据中心语境下通常指 walkie-talkie（对讲机）。', phonics: 'ra 读 /reɪ/，di 读 /di/，o 读 /əʊ/，重音在第一音节。', collocations: [['handheld radio', '手持对讲机'], ['radio channel', '对讲频道'], ['radio communication', '无线通信']], examples: [['Please keep your radio on.', '请保持对讲机开机。'], ['Switch to channel 3 on the radio.', '对讲机切到3频道。']] },
    ],
    phrases: [
      { p: 'your radio', ipa: '/jɔːr ˈreɪdiəʊ/', cn: '你的对讲机', why: '数据中心值班人员人手一台对讲机，是巡检和应急通信的核心工具。' },
    ],
    grammar: [
      { q: 'radio 和 walkie-talkie 有什么区别？', a: 'radio 是通用词，可以指任何无线电设备。\nwalkie-talkie 是口语，专指手持对讲机。\n✅ Could I borrow your radio?（我能借你的对讲机吗？）—— 通用\n✅ Could I borrow your walkie-talkie?（我能借你的对讲机吗？）—— 口语化\n两种说法在数据中心都可以。' },
    ],
    pattern: 'Could I borrow + 通信设备?',
    patternExamples: [
      { en: 'Could I borrow your walkie-talkie?', cn: '我可以借一下你的对讲机吗？', words: [] },
      { en: 'Could I borrow the spare radio?', cn: '我可以借一下备用的对讲机吗？', words: [] },
      { en: 'Could I borrow a headset for the radio?', cn: '我可以借一个对讲机耳麦吗？', words: [] },
    ],
    thinking: '对讲机是数据中心值班工程师的标配通信工具。\n巡检、应急、交接班都离不开对讲机。\n中文说「借对讲机」，英语用 borrow your radio。',
    pronunciation: 'radio 重音在第一音节：RA-di-o。\n节奏：COULD I ｜ BOR-row your RA-di-o?',
    quiz: [
      { q: '把「我可以借一下你的对讲机吗？」用英语说出来。', a: 'Could I borrow your radio?' },
      { q: '「对讲机」的口语说法是什么？', a: 'walkie-talkie (/ˌwɔːki ˈtɔːki/)' },
    ],
  },
  {
    id: 2446,
    speaker: 'Engineer',
    en: 'May I borrow your flashlight?',
    cn: '我可以借一下你的手电筒吗？',
    ipa: '/meɪ aɪ ˈbɒrəʊ jɔːr ˈflæʃlaɪt/',
    tags: ['第2446句', '借东西', '★★★★'],
    when: '进入光线不足的配电室或管道夹层，需要借手电筒照明。',
    words: [
      { w: 'flashlight', ipa: '/ˈflæʃlaɪt/', pos: '名词', cn: '手电筒', memory: 'flash(闪光)+light(灯)→发出闪光的灯→手电筒。', phonics: 'flash 读 /flæʃ/，light 读 /laɪt/，重音在第一音节。', collocations: [['LED flashlight', 'LED手电筒'], ['turn on the flashlight', '打开手电筒']], examples: [['I need a flashlight for the inspection.', '巡检我需要一把手电筒。'], ['The flashlight battery is dead.', '手电筒没电了。']] },
    ],
    phrases: [
      { p: 'your flashlight', ipa: '/jɔːr ˈflæʃlaɪt/', cn: '你的手电筒', why: '数据中心部分区域（配电室下方、地板下、管道夹层）光线不足，手电筒是巡检必备工具。' },
    ],
    grammar: [
      { q: 'flashlight 和 torch 有什么区别？', a: 'flashlight 是美式英语，torch 是英式英语，都指手电筒。\n✅ Could I borrow your flashlight?（美）\n✅ Could I borrow your torch?（英）\n马来西亚英语偏向英式，所以 torch 也很常用。' },
    ],
    pattern: 'May I borrow + 照明/检查工具?',
    patternExamples: [
      { en: 'May I borrow your torch?', cn: '我可以借一下你的手电筒吗？（英式）', words: [] },
      { en: 'May I borrow the inspection light?', cn: '我可以借一下检查灯吗？', words: [] },
      { en: 'May I borrow the headlamp?', cn: '我可以借一下头灯吗？', words: [] },
    ],
    thinking: '手电筒是数据中心巡检的基本工具之一。\n在马来西亚，torch 和 flashlight 都可以用。\n中文说「借手电筒」，英语用 May I borrow your flashlight/torch。',
    pronunciation: 'flashlight 重音在第一音节：FLASH-light。\n节奏：MAY I ｜ BOR-row your FLASH-light?',
    quiz: [
      { q: '把「我可以借一下你的手电筒吗？」用英语说出来。', a: 'May I borrow your flashlight?' },
      { q: '「手电筒」的英式英语怎么说？', a: 'torch (/tɔːrtʃ/)' },
    ],
  },
  {
    id: 2447,
    speaker: 'Engineer',
    en: 'Could I borrow your multimeter?',
    cn: '我可以借一下你的万用表吗？',
    ipa: '/kʊd aɪ ˈbɒrəʊ jɔːr ˌmʌltiˈmiːtər/',
    tags: ['第2447句', '借工具', '★★★★★'],
    when: '需要测量电压、电流或电阻，向同事借用万用表。',
    words: [
      { w: 'multimeter', ipa: '/ˌmʌltiˈmiːtər/', pos: '名词', cn: '万用表', memory: 'multi(多)+meter(表)→可以测量多种参数的仪表。', phonics: 'mul 读 /mʌl/，ti 读 /ti/，me 读 /miː/，ter 读 /tər/，次重音在第一音节，主重音在第三音节。', collocations: [['digital multimeter', '数字万用表'], ['measure with a multimeter', '用万用表测量']], examples: [['I need a multimeter to check the voltage.', '我需要万用表检查电压。'], ['The multimeter shows 230V.', '万用表显示230V。']] },
    ],
    phrases: [
      { p: 'your multimeter', ipa: '/jɔːr ˌmʌltiˈmiːtər/', cn: '你的万用表', why: '万用表是电气工程师最基础的个人工具，可测电压/电流/电阻。' },
    ],
    grammar: [
      { q: 'multimeter 怎么发音？', a: 'multimeter 是四个音节：mul-ti-ME-ter。\n次重音在第一个音节 /mʌl/，主重音在第三个音节 /miː/。\n✅ /ˌmʌltiˈmiːtər/ —— mul-ti-ME-ter\n注意不要读成 mul-TI-meter（把重音放在第二音节是错误的）。' },
    ],
    pattern: 'Could I borrow + 测量仪器?',
    patternExamples: [
      { en: 'Could I borrow your clamp meter?', cn: '我可以借一下你的钳形表吗？', words: [] },
      { en: 'Could I borrow the power analyzer?', cn: '我可以借一下电能分析仪吗？', words: [] },
      { en: 'Could I borrow the oscilloscope?', cn: '我可以借一下示波器吗？', words: [] },
    ],
    thinking: '万用表是数据中心电气运维最基础的工具。\n测量市电电压、UPS输出、配电柜参数都离不开它。\n中文说「借万用表」，英语用 borrow your multimeter。',
    pronunciation: 'multimeter 主重音在第三音节：mul-ti-ME-ter。\n节奏：COULD I ｜ BOR-row your mul-ti-ME-ter?',
    quiz: [
      { q: '把「我可以借一下你的万用表吗？」用英语说出来。', a: 'Could I borrow your multimeter?' },
      { q: '「万用表」用英语怎么说？', a: 'multimeter (/ˌmʌltiˈmiːtər/)' },
    ],
  },
  {
    id: 2448,
    speaker: 'Engineer',
    en: 'May I borrow the insulation tester?',
    cn: '我可以借一下绝缘电阻测试仪（摇表）吗？',
    ipa: '/meɪ aɪ ˈbɒrəʊ ðə ˌɪnsjʊˈleɪʃən ˈtestər/',
    tags: ['第2448句', '借工具', '★★★★★'],
    when: '需要测试电缆或设备的绝缘电阻，向同事借用绝缘电阻测试仪。',
    words: [
      { w: 'insulation', ipa: '/ˌɪnsjʊˈleɪʃən/', pos: '名词', cn: '绝缘', memory: 'insul(岛/隔离)+ation(名词后缀)→隔离状态→绝缘。', phonics: 'in 读 /ɪn/，su 读 /sjʊ/，la 读 /leɪ/，tion 读 /ʃən/，主重音在第三音节。', collocations: [['insulation resistance', '绝缘电阻'], ['insulation tester', '绝缘电阻测试仪'], ['cable insulation', '电缆绝缘']], examples: [['Check the insulation resistance.', '检查绝缘电阻。'], ['The insulation has deteriorated.', '绝缘已经老化。']] },
      { w: 'tester', ipa: '/ˈtestər/', pos: '名词', cn: '测试仪', memory: 'test(测试)+er(名词后缀)→用来测试的仪器。', phonics: 'test 读 /test/，er 读 /ər/，重音在第一音节。', collocations: [['voltage tester', '电压测试仪'], ['cable tester', '电缆测试仪']], examples: [['The tester shows normal.', '测试仪显示正常。'], ['We need a new tester.', '我们需要一台新的测试仪。']] },
    ],
    phrases: [
      { p: 'insulation tester', ipa: '/ˌɪnsjʊˈleɪʃən ˈtestər/', cn: '绝缘电阻测试仪（摇表）', why: '也叫 megger（兆欧表），用于测量电缆和设备的绝缘电阻，是电气安全检查的关键工具。' },
    ],
    grammar: [
      { q: 'insulation tester 和 megger 是同一个东西吗？', a: '是的。insulation tester 是正式名称，megger 是品牌名变成了通用名（类似「创可贴」）。\n✅ May I borrow the insulation tester?（正式名称）\n✅ May I borrow the megger?（口语/品牌名）\n两种说法在工程现场都可以。' },
    ],
    pattern: 'May I borrow the + 专业测试仪?',
    patternExamples: [
      { en: 'May I borrow the megger?', cn: '我可以借一下摇表（兆欧表）吗？', words: [] },
      { en: 'May I borrow the earth resistance tester?', cn: '我可以借一下接地电阻测试仪吗？', words: [] },
      { en: 'May I borrow the power quality analyzer?', cn: '我可以借一下电能质量分析仪吗？', words: [] },
    ],
    thinking: '绝缘电阻测试仪是电气安全检查的关键工具。\n在数据中心，定期测试配电柜和电缆的绝缘电阻是预防性维护的重要内容。\n中文叫「摇表」或「绝缘电阻测试仪」，英语正式名是 insulation tester，口语叫 megger。',
    pronunciation: 'insulation 主重音在第三音节：in-su-LA-tion。\ntester 重音在第一音节：TES-ter。\n节奏：MAY I ｜ BOR-row the in-su-LA-tion TES-ter?',
    quiz: [
      { q: '把「我可以借一下绝缘电阻测试仪吗？」用英语说出来。', a: 'May I borrow the insulation tester?' },
      { q: '「摇表」的英语口语说法是什么？', a: 'megger (/ˈmeɡər/)' },
    ],
  },
  {
    id: 2449,
    speaker: 'Engineer',
    en: 'Could I borrow the thermal camera?',
    cn: '我可以借一下热像仪吗？',
    ipa: '/kʊd aɪ ˈbɒrəʊ ðə ˈθɜːrməl ˈkæmərə/',
    tags: ['第2449句', '借工具', '★★★★★'],
    when: '需要对配电柜或服务器机柜进行红外热成像检查，借用热像仪。',
    words: [
      { w: 'thermal', ipa: '/ˈθɜːrməl/', pos: '形容词', cn: '热的；热成像的', memory: 'therm(热)+al(形容词后缀)→与热有关的。', phonics: 'ther 读 /θɜːr/，mal 读 /məl/，重音在第一音节。', collocations: [['thermal camera', '热像仪'], ['thermal imaging', '热成像'], ['thermal scan', '热扫描']], examples: [['Use the thermal camera to check for hotspots.', '用热像仪检查热点。'], ['The thermal scan shows an anomaly.', '热扫描显示异常。']] },
      { w: 'camera', ipa: '/ˈkæmərə/', pos: '名词', cn: '相机；摄像头', memory: 'camera 原意是「暗室」，后引申为照相机。', phonics: 'cam 读 /kæm/，er 读 /ər/，a 读 /ə/，重音在第一音节。', collocations: [['infrared camera', '红外相机'], ['CCTV camera', '监控摄像头']], examples: [['The camera captured the incident.', '摄像头记录了事件。'], ['Turn on the camera.', '打开相机。']] },
    ],
    phrases: [
      { p: 'thermal camera', ipa: '/ˈθɜːrməl ˈkæmərə/', cn: '热像仪', why: '也叫 infrared camera 或 IR camera，用于检测电气设备温度异常和热点。' },
    ],
    grammar: [
      { q: 'thermal camera 和 infrared camera 是一样的吗？', a: '在数据中心语境下基本一样，都指红外热成像相机。\nthermal camera 强调「热成像」功能。\ninfrared camera 强调「红外线」技术。\n✅ Could I borrow the thermal camera?（热像仪）\n✅ Could I borrow the IR camera?（红外相机）\n两种都可以，thermal camera 更常用。' },
    ],
    pattern: 'Could I borrow the + 检测仪器?',
    patternExamples: [
      { en: 'Could I borrow the IR camera?', cn: '我可以借一下红外相机吗？', words: [] },
      { en: 'Could I borrow the vibration analyzer?', cn: '我可以借一下振动分析仪吗？', words: [] },
      { en: 'Could I borrow the ultrasonic detector?', cn: '我可以借一下超声波检测仪吗？', words: [] },
    ],
    thinking: '热像仪是数据中心预防性维护的重要工具。\n用于发现配电柜接线松动、服务器过载等温度异常。\n中文说「热像仪」，英语用 thermal camera 或 IR camera。',
    pronunciation: 'thermal 重音在第一音节：THER-mal，th 读 /θ/ 咬舌尖。\ncamera 重音在第一音节：CAM-er-a。\n节奏：COULD I ｜ BOR-row the THER-mal CAM-er-a?',
    quiz: [
      { q: '把「我可以借一下热像仪吗？」用英语说出来。', a: 'Could I borrow the thermal camera?' },
      { q: '「热像仪」用英语怎么说？', a: 'thermal camera (/ˈθɜːrməl ˈkæmərə/) 或 IR camera' },
    ],
  },
  {
    id: 2450,
    speaker: 'Engineer',
    en: 'May I borrow the infrared thermometer?',
    cn: '我可以借一下红外测温仪吗？',
    ipa: '/meɪ aɪ ˈbɒrəʊ ðə ˌɪnfrəˈred θəˈmɒmɪtər/',
    tags: ['第2450句', '借工具', '★★★★★'],
    when: '需要非接触式测量设备表面温度，向同事借用红外测温仪。',
    words: [
      { w: 'infrared', ipa: '/ˌɪnfrəˈred/', pos: '形容词', cn: '红外的', memory: 'infra(低于)+red(红色)→频率低于红光的光线→红外线。', phonics: 'in 读 /ɪn/，fra 读 /frə/，red 读 /red/，重音在第三音节。', collocations: [['infrared thermometer', '红外测温仪'], ['infrared sensor', '红外传感器']], examples: [['Use the infrared thermometer.', '使用红外测温仪。'], ['The infrared reading is 65°C.', '红外读数是65°C。']] },
      { w: 'thermometer', ipa: '/θəˈmɒmɪtər/', pos: '名词', cn: '温度计', memory: 'thermo(热)+meter(表)→测量温度的仪表。', phonics: 'ther 读 /θə/，mom 读 /mɒ/，i 读 /ɪ/，ter 读 /tər/，重音在第二音节。', collocations: [['digital thermometer', '数字温度计'], ['body thermometer', '体温计']], examples: [['The thermometer reads 25°C.', '温度计显示25°C。'], ['Check with the thermometer.', '用温度计检查一下。']] },
    ],
    phrases: [
      { p: 'infrared thermometer', ipa: '/ˌɪnfrəˈred θəˈmɒmɪtər/', cn: '红外测温仪', why: '也叫 IR thermometer 或 laser thermometer，非接触式快速测量表面温度。' },
    ],
    grammar: [
      { q: 'thermometer 和 thermal camera 有什么区别？', a: 'thermometer（温度计）只能测一个点的温度，给出数字读数。\nthermal camera（热像仪）可以拍摄整个区域的热分布图像。\n✅ infrared thermometer（红外测温仪）—— 单点温度，便宜便携\n✅ thermal camera（热像仪）—— 热分布图像，昂贵精密\n日常巡检用 thermometer，详细诊断用 thermal camera。' },
    ],
    pattern: 'May I borrow the + 温度测量工具?',
    patternExamples: [
      { en: 'May I borrow the IR thermometer?', cn: '我可以借一下红外测温仪吗？', words: [] },
      { en: 'May I borrow the contact thermometer?', cn: '我可以借一下接触式温度计吗？', words: [] },
      { en: 'May I borrow the temperature probe?', cn: '我可以借一下温度探头吗？', words: [] },
    ],
    thinking: '红外测温仪是数据中心巡检最常用的便携工具之一。\n可以快速检测配电柜接线、服务器面板、冷通道温度等。\n中文说「红外测温仪」，英语用 infrared thermometer 或 IR thermometer。',
    pronunciation: 'infrared 重音在第三音节：in-fra-RED。\nthermometer 重音在第二音节：ther-MOM-eter。\n节奏：MAY I ｜ BOR-row the in-fra-RED ｜ ther-MOM-eter?',
    quiz: [
      { q: '把「我可以借一下红外测温仪吗？」用英语说出来。', a: 'May I borrow the infrared thermometer?' },
      { q: '红外测温仪的简称是什么？', a: 'IR thermometer (/ˌaɪ-ɑːr θəˈmɒmɪtər/)' },
    ],
  },
  {
    id: 2451,
    speaker: 'Engineer',
    en: 'Could I borrow your toolbox?',
    cn: '我可以借一下你的工具箱吗？',
    ipa: '/kʊd aɪ ˈbɒrəʊ jɔːr ˈtuːlbɒks/',
    tags: ['第2451句', '借工具', '★★★★'],
    when: '临时需要多种基本工具，向同事借用整套工具箱。',
    words: [
      { w: 'toolbox', ipa: '/ˈtuːlbɒks/', pos: '名词', cn: '工具箱', memory: 'tool(工具)+box(箱子)→装工具的箱子。', phonics: 'tool 读 /tuːl/，box 读 /bɒks/，重音在第一音节。', collocations: [['open the toolbox', '打开工具箱'], ['basic toolbox', '基本工具箱']], examples: [['I need the toolbox for the repair.', '修理我需要工具箱。'], ['The toolbox is in the storage room.', '工具箱在仓库里。']] },
    ],
    phrases: [
      { p: 'your toolbox', ipa: '/jɔːr ˈtuːlbɒks/', cn: '你的工具箱', why: '工程师通常有自己的个人工具箱，包含常用基本工具。' },
    ],
    grammar: [
      { q: 'toolbox 和 tool bag 有什么区别？', a: 'toolbox 是硬壳工具箱，通常金属或塑料制成，工具摆放有序。\ntool bag 是软质工具包，更便携但不够规整。\n✅ Could I borrow your toolbox?（工具箱——硬壳）\n✅ Could I borrow your tool bag?（工具包——软质）' },
    ],
    pattern: 'Could I borrow your + 工具容器?',
    patternExamples: [
      { en: 'Could I borrow your tool bag?', cn: '我可以借一下你的工具包吗？', words: [] },
      { en: 'Could I borrow the tool cart?', cn: '我可以借一下工具推车吗？', words: [] },
      { en: 'Could I borrow the parts bin?', cn: '我可以借一下零件盒吗？', words: [] },
    ],
    thinking: '工具箱是工程师的基本装备，包含螺丝刀、扳手、钳子等常用工具。\n中文说「借工具箱」，英语用 Could I borrow your toolbox。',
    pronunciation: 'toolbox 重音在第一音节：TOOL-box。\n节奏：COULD I ｜ BOR-row your TOOL-box?',
    quiz: [
      { q: '把「我可以借一下你的工具箱吗？」用英语说出来。', a: 'Could I borrow your toolbox?' },
      { q: '「工具箱」用英语怎么说？', a: 'toolbox (/ˈtuːlbɒks/)' },
    ],
  },
  {
    id: 2452,
    speaker: 'Engineer',
    en: 'May I borrow a torque wrench?',
    cn: '我可以借一把扭矩扳手吗？',
    ipa: '/meɪ aɪ ˈbɒrəʊ ə tɔːrk rentʃ/',
    tags: ['第2452句', '借工具', '★★★★★'],
    when: '需要按照标准扭矩紧固配电柜或母排螺栓，向同事借用扭矩扳手。',
    words: [
      { w: 'torque', ipa: '/tɔːrk/', pos: '名词', cn: '扭矩；力矩', memory: 'torque 来自法语，指旋转力。', phonics: 'torque 读 /tɔːrk/，单音节，que 不发音。', collocations: [['torque wrench', '扭矩扳手'], ['torque value', '扭矩值'], ['apply torque', '施加扭矩']], examples: [['Check the torque specification.', '查看扭矩规格。'], ['Apply 50 Nm of torque.', '施加50牛米的扭矩。']] },
      { w: 'wrench', ipa: '/rentʃ/', pos: '名词', cn: '扳手', memory: 'wrench 在美式英语中指扳手，英式英语用 spanner。', phonics: 'wrench 读 /rentʃ/，单音节。', collocations: [['adjustable wrench', '活动扳手'], ['socket wrench', '套筒扳手'], ['Allen wrench', '内六角扳手']], examples: [['I need a 10mm wrench.', '我需要一把10毫米的扳手。'], ['The wrench is too small.', '这把扳手太小了。']] },
    ],
    phrases: [
      { p: 'torque wrench', ipa: '/tɔːrk rentʃ/', cn: '扭矩扳手', why: '用于精确控制螺栓紧固力矩，是配电柜安装和母排连接的关键工具。' },
    ],
    grammar: [
      { q: 'wrench 和 spanner 有什么区别？', a: 'wrench 是美式英语，spanner 是英式英语，都指扳手。\n✅ May I borrow a torque wrench?（美式）\n✅ May I borrow a torque spanner?（英式）\n马来西亚英语偏向英式，spanner 更常见，但 wrench 也广泛理解。' },
    ],
    pattern: 'May I borrow a + 扳手类型?',
    patternExamples: [
      { en: 'May I borrow an adjustable wrench?', cn: '我可以借一把活动扳手吗？', words: [] },
      { en: 'May I borrow a socket wrench set?', cn: '我可以借一套套筒扳手吗？', words: [] },
      { en: 'May I borrow an Allen key?', cn: '我可以借一把内六角扳手吗？', words: [] },
    ],
    thinking: '扭矩扳手是数据中心电气安装和维护的精密工具。\n母排连接、配电柜螺栓都需要按标准扭矩紧固。\n中文说「扭矩扳手」，英语用 torque wrench（美）或 torque spanner（英）。',
    pronunciation: 'torque 读 /tɔːrk/，单音节，注意 que 不发音。\nwrench 读 /rentʃ/，单音节。\n节奏：MAY I ｜ BOR-row a TORQUE WRENCH?',
    quiz: [
      { q: '把「我可以借一把扭矩扳手吗？」用英语说出来。', a: 'May I borrow a torque wrench?' },
      { q: '「扳手」的英式英语怎么说？', a: 'spanner (/ˈspænər/)' },
    ],
  },
  {
    id: 2453,
    speaker: 'Engineer',
    en: 'Could I borrow a ladder?',
    cn: '我可以借一把梯子吗？',
    ipa: '/kʊd aɪ ˈbɒrəʊ ə ˈlædər/',
    tags: ['第2453句', '借工具', '★★★★'],
    when: '需要检查天花板上的线缆桥架或高处设备，向同事借梯子。',
    words: [
      { w: 'ladder', ipa: '/ˈlædər/', pos: '名词', cn: '梯子', memory: 'ladder 原指梯子的横档，后指整个梯子。', phonics: 'lad 读 /læd/，der 读 /dər/，重音在第一音节。', collocations: [['step ladder', '人字梯'], ['extension ladder', '伸缩梯'], ['climb a ladder', '爬梯子']], examples: [['I need a ladder to reach the cable tray.', '我需要梯子才能够到线缆桥架。'], ['The ladder is in the maintenance room.', '梯子在维修间。']] },
    ],
    phrases: [
      { p: 'a ladder', ipa: '/ə ˈlædər/', cn: '一把梯子', why: '数据中心常用梯子检查高处设备：天花板线缆桥架、消防喷淋头、空调出风口等。' },
    ],
    grammar: [
      { q: 'step ladder 和 extension ladder 有什么区别？', a: 'step ladder 是人字梯（A字形），自带支撑，不需要靠墙。\nextension ladder 是伸缩梯（直梯），需要靠在墙上使用。\n✅ Could I borrow a step ladder?（人字梯——室内常用）\n✅ Could I borrow an extension ladder?（伸缩梯——室外/高处）' },
    ],
    pattern: 'Could I borrow a + 高处作业工具?',
    patternExamples: [
      { en: 'Could I borrow a step ladder?', cn: '我可以借一把人字梯吗？', words: [] },
      { en: 'Could I borrow a scaffold?', cn: '我可以借一个脚手架吗？', words: [] },
      { en: 'Could I borrow a safety harness?', cn: '我可以借一条安全带吗？', words: [] },
    ],
    thinking: '梯子是数据中心日常维护的常用工具。\n检查线缆桥架、更换灯具、检修高处设备都需要梯子。\n中文说「借梯子」，英语用 Could I borrow a ladder。',
    pronunciation: 'ladder 重音在第一音节：LAD-der。\n节奏：COULD I ｜ BOR-row a LAD-der?',
    quiz: [
      { q: '把「我可以借一把梯子吗？」用英语说出来。', a: 'Could I borrow a ladder?' },
      { q: '「人字梯」用英语怎么说？', a: 'step ladder (/step ˈlædər/)' },
    ],
  },
  {
    id: 2454,
    speaker: 'Engineer',
    en: 'May I borrow a safety helmet?',
    cn: '我可以借一顶安全帽吗？',
    ipa: '/meɪ aɪ ˈbɒrəʊ ə ˈseɪfti ˈhelmɪt/',
    tags: ['第2454句', '借工具', '★★★★★'],
    when: '进入施工区域或高压配电室，需要佩戴安全帽但自己没有带。',
    words: [
      { w: 'safety', ipa: '/ˈseɪfti/', pos: '名词/形容词', cn: '安全', memory: 'safe(安全的)+ty(名词后缀)→安全状态。', phonics: 'safe 读 /seɪf/，ty 读 /ti/，重音在第一音节。', collocations: [['safety helmet', '安全帽'], ['safety first', '安全第一'], ['safety regulations', '安全规程']], examples: [['Safety is our top priority.', '安全是我们的首要任务。'], ['Follow the safety procedures.', '遵守安全程序。']] },
      { w: 'helmet', ipa: '/ˈhelmɪt/', pos: '名词', cn: '头盔；安全帽', memory: 'helm(保护)+et(小后缀)→保护头部的小装备。', phonics: 'hel 读 /hel/，met 读 /mɪt/，重音在第一音节。', collocations: [['hard hat', '安全帽（美式口语）'], ['wear a helmet', '戴安全帽']], examples: [['You must wear a helmet in the construction area.', '在施工区域必须戴安全帽。'], ['The helmet protects your head.', '安全帽保护你的头部。']] },
    ],
    phrases: [
      { p: 'safety helmet', ipa: '/ˈseɪfti ˈhelmɪt/', cn: '安全帽', why: '数据中心施工区域和高压配电室强制佩戴的个人防护装备（PPE）。' },
    ],
    grammar: [
      { q: 'safety helmet 和 hard hat 是一样的吗？', a: '基本一样。safety helmet 是正式名称，hard hat 是美式口语。\n✅ May I borrow a safety helmet?（正式）\n✅ May I borrow a hard hat?（口语）\n在马来西亚，safety helmet 更常用。' },
    ],
    pattern: 'May I borrow a + 个人防护装备?',
    patternExamples: [
      { en: 'May I borrow a hard hat?', cn: '我可以借一顶安全帽吗？（美式口语）', words: [] },
      { en: 'May I borrow safety goggles?', cn: '我可以借一副护目镜吗？', words: [] },
      { en: 'May I borrow ear protection?', cn: '我可以借一下听力保护装置吗？', words: [] },
    ],
    thinking: '安全帽是数据中心施工和高压区域的基本 PPE。\n不戴安全帽进入施工区域是严重的安全违规。\n中文说「安全帽」，英语用 safety helmet（正式）或 hard hat（口语）。',
    pronunciation: 'safety 重音在第一音节：SAFE-ty。\nhelmet 重音在第一音节：HEL-met。\n节奏：MAY I ｜ BOR-row a SAFE-ty HEL-met?',
    quiz: [
      { q: '把「我可以借一顶安全帽吗？」用英语说出来。', a: 'May I borrow a safety helmet?' },
      { q: '「安全帽」的美式口语说法是什么？', a: 'hard hat (/hɑːrd hæt/)' },
    ],
  },
  {
    id: 2455,
    speaker: 'Engineer',
    en: 'Could I borrow a pair of insulated gloves?',
    cn: '我可以借一副绝缘手套吗？',
    ipa: '/kʊd aɪ ˈbɒrəʊ ə peər əv ˈɪnsjʊleɪtɪd ɡlʌvz/',
    tags: ['第2455句', '借工具', '★★★★★'],
    when: '需要进行带电作业或检查配电柜，向同事借用绝缘手套。',
    words: [
      { w: 'insulated', ipa: '/ˈɪnsjʊleɪtɪd/', pos: '形容词（过去分词）', cn: '绝缘的', memory: 'insulate(使绝缘)+ed(形容词后缀)→被绝缘的。', phonics: 'in 读 /ɪn/，su 读 /sjʊ/，la 读 /leɪ/，ted 读 /tɪd/，重音在第一音节。', collocations: [['insulated gloves', '绝缘手套'], ['insulated tools', '绝缘工具'], ['insulated mat', '绝缘垫']], examples: [['Wear insulated gloves for live work.', '带电作业要戴绝缘手套。'], ['The tools are insulated to 1000V.', '这些工具绝缘到1000V。']] },
      { w: 'gloves', ipa: '/ɡlʌvz/', pos: '名词（复数）', cn: '手套', memory: 'glove 的复数形式，一副手套有两只。', phonics: 'glove 读 /ɡlʌv/，s 读 /z/，单音节。', collocations: [['rubber gloves', '橡胶手套'], ['leather gloves', '皮手套'], ['a pair of gloves', '一副手套']], examples: [['Put on your gloves.', '戴上手套。'], ['The gloves are too big.', '手套太大了。']] },
    ],
    phrases: [
      { p: 'a pair of insulated gloves', ipa: '/ə peər əv ˈɪnsjʊleɪtɪd ɡlʌvz/', cn: '一副绝缘手套', why: 'a pair of 用于成对物品（手套、鞋、眼镜等），insulated gloves 是带电作业的必备 PPE。' },
    ],
    grammar: [
      { q: '为什么要说 a pair of gloves 而不直接说 gloves？', a: 'gloves 是复数，直接用 gloves 泛指多副手套。\na pair of gloves 特指「一副」（两只），更精确。\n✅ Could I borrow a pair of insulated gloves?（借一副）—— 精确\n✅ Do you have insulated gloves?（你有绝缘手套吗？）—— 泛指\n借用时通常用 a pair of 更明确。' },
    ],
    pattern: 'Could I borrow a pair of + 成对防护装备?',
    patternExamples: [
      { en: 'Could I borrow a pair of safety glasses?', cn: '我可以借一副护目镜吗？', words: [] },
      { en: 'Could I borrow a pair of earplugs?', cn: '我可以借一副耳塞吗？', words: [] },
      { en: 'Could I borrow a pair of rubber boots?', cn: '我可以借一双橡胶靴吗？', words: [] },
    ],
    thinking: '绝缘手套是带电作业的必备个人防护装备。\n在数据中心配电室操作时，必须佩戴符合电压等级的绝缘手套。\n中文说「一副绝缘手套」，英语用 a pair of insulated gloves。',
    pronunciation: 'insulated 重音在第一音节：IN-su-la-ted。\ngloves 读 /ɡlʌvz/，注意 v 后面 z 的发音。\n节奏：COULD I ｜ BOR-row a PAIR ｜ of IN-su-la-ted GLOVES?',
    quiz: [
      { q: '把「我可以借一副绝缘手套吗？」用英语说出来。', a: 'Could I borrow a pair of insulated gloves?' },
      { q: '「一副」用英语怎么说？', a: 'a pair of (/ə peər əv/)' },
    ],
  },
  {
    id: 2456,
    speaker: 'Engineer',
    en: 'May I borrow your lockout kit?',
    cn: '我可以借一下你的锁定挂牌工具包吗？',
    ipa: '/meɪ aɪ ˈbɒrəʊ jɔːr ˈlɒkaʊt kɪt/',
    tags: ['第2456句', '借工具', '★★★★★'],
    when: '需要对设备进行锁定挂牌（LOTO）操作，向同事借用锁定工具包。',
    words: [
      { w: 'lockout', ipa: '/ˈlɒkaʊt/', pos: '名词/形容词', cn: '锁定（LOTO）', memory: 'lock(锁)+out(外面)→锁在外面→锁定。', phonics: 'lock 读 /lɒk/，out 读 /aʊt/，重音在第一音节。', collocations: [['lockout tagout', '锁定挂牌（LOTO）'], ['lockout procedure', '锁定程序'], ['lockout device', '锁定装置']], examples: [['Follow the lockout procedure.', '执行锁定程序。'], ['The lockout was not applied.', '锁定没有执行。']] },
      { w: 'kit', ipa: '/kɪt/', pos: '名词', cn: '工具包；套装', memory: 'kit 指一组配套的工具或物品。', phonics: 'kit 读 /kɪt/，单音节。', collocations: [['first aid kit', '急救包'], ['repair kit', '修理工具包'], ['tool kit', '工具包']], examples: [['The kit includes padlocks and tags.', '工具包包含挂锁和标签。'], ['We need a new lockout kit.', '我们需要一套新的锁定工具包。']] },
    ],
    phrases: [
      { p: 'lockout kit', ipa: '/ˈlɒkaʊt kɪt/', cn: '锁定挂牌工具包', why: 'LOTO（Lockout/Tagout）工具包包含挂锁、标签、锁扣等，是设备维修前断电锁定的标准装备。' },
    ],
    grammar: [
      { q: '什么是 LOTO？', a: 'LOTO 是 Lockout/Tagout 的缩写，即「锁定/挂牌」。\n这是工业安全标准程序，确保设备在维修期间不会被意外通电。\nlockout = 用挂锁物理锁定开关/阀门\ntagout = 在锁定处挂上警告标签\n✅ May I borrow your lockout kit?（我可以借你的锁定工具包吗？）' },
    ],
    pattern: 'May I borrow + 安全操作工具?',
    patternExamples: [
      { en: 'May I borrow your LOTO kit?', cn: '我可以借你的LOTO工具包吗？', words: [] },
      { en: 'May I borrow a padlock for lockout?', cn: '我可以借一把挂锁做锁定吗？', words: [] },
      { en: 'May I borrow some danger tags?', cn: '我可以借一些危险标签吗？', words: [] },
    ],
    thinking: 'LOTO（锁定挂牌）是数据中心电气维护的安全生命线。\n任何带电设备的维修前都必须执行 LOTO 程序。\n中文说「锁定挂牌工具包」，英语用 lockout kit 或 LOTO kit。',
    pronunciation: 'lockout 重音在第一音节：LOCK-out。\nkit 读 /kɪt/，单音节。\n节奏：MAY I ｜ BOR-row your LOCK-out KIT?',
    quiz: [
      { q: '把「我可以借一下你的锁定挂牌工具包吗？」用英语说出来。', a: 'May I borrow your lockout kit?' },
      { q: 'LOTO 是什么的缩写？', a: 'Lockout/Tagout（锁定/挂牌）' },
    ],
  },
  {
    id: 2457,
    speaker: 'Engineer',
    en: 'Do you have a spare voltage detector?',
    cn: '你有备用验电器吗？',
    ipa: '/duː juː hæv ə speər ˈvəʊltɪdʒ dɪˈtektər/',
    tags: ['第2457句', '借工具', '★★★★★'],
    when: '需要验电确认设备是否带电，询问同事是否有备用验电器。',
    words: [
      { w: 'spare', ipa: '/speər/', pos: '形容词', cn: '备用的；多余的', memory: 'spare 表示额外的、备用的，以防需要。', phonics: 'spare 读 /speər/，单音节。', collocations: [['spare parts', '备件'], ['spare key', '备用钥匙'], ['spare battery', '备用电池']], examples: [['Do you have a spare cable?', '你有备用线缆吗？'], ['Keep some spare fuses.', '保留一些备用保险丝。']] },
      { w: 'voltage', ipa: '/ˈvəʊltɪdʒ/', pos: '名词', cn: '电压', memory: 'volt(伏特)+age(名词后缀)→电压。', phonics: 'vol 读 /vəʊl/，tage 读 /tɪdʒ/，重音在第一音节。', collocations: [['high voltage', '高压'], ['low voltage', '低压'], ['voltage level', '电压等级']], examples: [['Check the voltage before touching.', '触碰前检查电压。'], ['The voltage is 400V.', '电压是400V。']] },
    ],
    phrases: [
      { p: 'spare voltage detector', ipa: '/speər ˈvəʊltɪdʒ dɪˈtektər/', cn: '备用验电器', why: '验电器（也叫 voltage tester 或 voltage indicator）用于确认设备是否带电，是 LOTO 操作前后的必备工具。' },
    ],
    grammar: [
      { q: 'Do you have a spare...? 和 Could I borrow...? 有什么区别？', a: 'Do you have a spare...? 先确认对方有没有多余的，更委婉。\nCould I borrow...? 直接请求借用，更直接。\n✅ Do you have a spare voltage detector?（你有备用的吗？）—— 先问有没有\n✅ Could I borrow your voltage detector?（我能借你的吗？）—— 直接借\n如果不确定对方有没有多余，先用 Do you have a spare。' },
    ],
    pattern: 'Do you have a spare + 工具/配件?',
    patternExamples: [
      { en: 'Do you have a spare fuse?', cn: '你有备用保险丝吗？', words: [] },
      { en: 'Do you have a spare circuit breaker?', cn: '你有备用断路器吗？', words: [] },
      { en: 'Do you have a spare air filter?', cn: '你有备用空气过滤器吗？', words: [] },
    ],
    thinking: '验电器是 LOTO 程序中最关键的安全工具。\n在断电后必须用验电器确认设备确实无电才能开始工作。\n中文说「备用验电器」，英语用 spare voltage detector。',
    pronunciation: 'spare 读 /speər/，单音节。\nvoltage 重音在第一音节：VOL-tage。\ndetector 重音在第二音节：de-TEC-tor。\n节奏：Do you HAVE ｜ a SPARE ｜ VOL-tage de-TEC-tor?',
    quiz: [
      { q: '把「你有备用验电器吗？」用英语说出来。', a: 'Do you have a spare voltage detector?' },
      { q: '「备用的」用英语怎么说？', a: 'spare (/speər/)' },
    ],
  },
  {
    id: 2458,
    speaker: 'Engineer',
    en: "I only need it for about ten minutes.",
    cn: '我只需要用十分钟左右。',
    ipa: '/aɪ ˈəʊnli niːd ɪt fɔːr əˈbaʊt ten ˈmɪnɪts/',
    tags: ['第2458句', '借用时长', '★★★★'],
    when: '借用工具时向同事说明使用时间很短，减轻对方的顾虑。',
    words: [
      { w: 'only', ipa: '/ˈəʊnli/', pos: '副词', cn: '只；仅仅', memory: 'one(一)+ly(副词后缀)→只有→仅仅。', phonics: 'on 读 /ɒn/，ly 读 /li/，重音在第一音节。', collocations: [['only need', '只需要'], ['only once', '只有一次'], ['only a few', '只有几个']], examples: [['I only need five minutes.', '我只需要五分钟。'], ['There are only two left.', '只剩两个了。']] },
      { w: 'about', ipa: '/əˈbaʊt/', pos: '副词', cn: '大约', memory: 'about 在时间语境中表示「大约、左右」。', phonics: 'a 读 /ə/，bout 读 /baʊt/，重音在第二音节。', collocations: [['about ten minutes', '大约十分钟'], ['about an hour', '大约一小时']], examples: [['It will take about 30 minutes.', '大概需要30分钟。'], ['I\'ll be there in about an hour.', '我大约一小时后到。']] },
    ],
    phrases: [
      { p: 'I only need it for', ipa: '/aɪ ˈəʊnli niːd ɪt fɔːr/', cn: '我只需要用它…', why: 'I only need it for + 时间 是借用时说明使用时长的标准句式。' },
      { p: 'about ten minutes', ipa: '/əˈbaʊt ten ˈmɪnɪts/', cn: '大约十分钟', why: 'about 表示大约、左右，让时间不那么绝对。' },
    ],
    grammar: [
      { q: 'for about ten minutes 中 about 能省略吗？', a: '可以省略，但意思略有不同。\n✅ for ten minutes（十分钟）—— 精确\n✅ for about ten minutes（大约十分钟）—— 估计\n用 about 更自然，因为借用时间通常无法精确预估。' },
    ],
    pattern: 'I only need it for about + 时间.',
    patternExamples: [
      { en: "I only need it for about five minutes.", cn: '我只需要用五分钟左右。', words: [] },
      { en: "I only need it for about half an hour.", cn: '我只需要用半小时左右。', words: [] },
      { en: "I only need it for the rest of the shift.", cn: '我只需要用到这个班次结束。', words: [] },
    ],
    thinking: '借用工具时说明使用时间，可以让同事放心。\nI only need it for about + 时间 是最常用的表达方式。\n中文说「我只需要用…左右」，英语用 I only need it for about...。',
    pronunciation: 'only 重音在第一音节：ON-ly。\nabout 重音在第二音节：a-BOUT。\n节奏：I ON-ly NEED it ｜ for a-BOUT ｜ TEN MIN-utes.',
    quiz: [
      { q: '把「我只需要用十分钟左右。」用英语说出来。', a: "I only need it for about ten minutes." },
      { q: '「大约」用英语怎么说？', a: 'about (/əˈbaʊt/)' },
    ],
  },
  {
    id: 2459,
    speaker: 'Engineer',
    en: "I'll return it as soon as I'm finished.",
    cn: '我用完马上还给你。',
    ipa: '/aɪl rɪˈtɜːrn ɪt æz suːn æz aɪm ˈfɪnɪʃt/',
    tags: ['第2459句', '归还承诺', '★★★★★'],
    when: '借用工具时向同事承诺用完后立即归还。',
    words: [
      { w: 'return', ipa: '/rɪˈtɜːrn/', pos: '动词', cn: '归还；返回', memory: 're(回)+turn(转)→转回来→归还/返回。', phonics: 're 读 /rɪ/，turn 读 /tɜːrn/，重音在第二音节。', collocations: [['return the tool', '归还工具'], ['return on time', '按时归还'], ['return immediately', '立即归还']], examples: [['Please return it tomorrow.', '请明天归还。'], ['I returned the book yesterday.', '我昨天把书还了。']] },
      { w: 'finished', ipa: '/ˈfɪnɪʃt/', pos: '形容词（过去分词）', cn: '完成的；用完的', memory: 'finish(完成)+ed(过去分词)→已经完成的。', phonics: 'fin 读 /fɪn/，ished 读 /ɪʃt/，重音在第一音节。', collocations: [['as soon as finished', '一完成就…'], ['almost finished', '快完成了']], examples: [["I'm almost finished.", '我快完成了。'], ["Are you finished?", '你用完了吗？']] },
    ],
    phrases: [
      { p: "as soon as I'm finished", ipa: '/æz suːn æz aɪm ˈfɪnɪʃt/', cn: '我一用完就…', why: "as soon as 引导时间状语从句，表示「一…就…」，强调动作的紧迫性。" },
      { p: "I'll return it", ipa: '/aɪl rɪˈtɜːrn ɪt/', cn: '我会归还它', why: "I'll (I will) 表示承诺，return it 指归还借用的物品。" },
    ],
    grammar: [
      { q: "as soon as 后面用什么时态？", a: "as soon as 后面用现在时表示将来（不能用 will）。\n✅ I'll return it as soon as I'm finished.（我一用完就还。）—— 正确\n❌ I'll return it as soon as I will be finished.（错误：as soon as 后不能用 will）\n这是英语语法规则：时间状语从句中用现在时替代将来时。" },
    ],
    pattern: "I'll return it as soon as + 现在时从句.",
    patternExamples: [
      { en: "I'll return it as soon as I'm done.", cn: '我一做完就还给你。', words: [] },
      { en: "I'll return it as soon as the inspection is complete.", cn: '检查一完成我就还给你。', words: [] },
      { en: "I'll bring it back right after I use it.", cn: '我用完马上就还回来。', words: [] },
    ],
    thinking: '借用时承诺及时归还是基本的职场礼仪。\nas soon as I\'m finished 表达了「一用完就还」的紧迫承诺。\n中文说「用完马上还」，英语用 as soon as I\'m finished。',
    pronunciation: "return 重音在第二音节：re-TURN。\nas soon as 连读：/æz suːn æz/。\n节奏：I'll re-TURN it ｜ as SOON as ｜ I'm FIN-ished.",
    quiz: [
      { q: '把「我用完马上还给你。」用英语说出来。', a: "I'll return it as soon as I'm finished." },
      { q: '「一…就…」用英语怎么说？', a: 'as soon as (/æz suːn æz/)' },
    ],
  },
  {
    id: 2460,
    speaker: 'Engineer',
    en: 'Thank you. I really appreciate it.',
    cn: '谢谢你，非常感谢。',
    ipa: '/θæŋk juː aɪ ˈrɪəli əˈpriːʃieɪt ɪt/',
    tags: ['第2460句', '借用致谢', '★★★★★'],
    when: '同事同意借出工具后，真诚地表达感谢。',
    words: [
      { w: 'really', ipa: '/ˈrɪəli/', pos: '副词', cn: '真的；非常', memory: 'real(真的)+ly(副词后缀)→真正地。', phonics: 'real 读 /rɪəl/，ly 读 /li/，重音在第一音节。', collocations: [['really appreciate', '非常感谢'], ['really need', '真的很需要'], ['really helpful', '真的很有帮助']], examples: [['I really appreciate your help.', '我非常感谢你的帮助。'], ['That\'s really kind of you.', '你真的太好了。']] },
      { w: 'appreciate', ipa: '/əˈpriːʃieɪt/', pos: '动词', cn: '感激；感谢', memory: 'ap(朝向)+preci(价值)+ate(动词后缀)→认识到价值→感激。', phonics: 'ap 读 /ə/，pre 读 /priː/，ci 读 /ʃi/，ate 读 /eɪt/，重音在第二音节。', collocations: [['really appreciate', '非常感谢'], ['greatly appreciate', '深深感激'], ['appreciate your help', '感谢你的帮助']], examples: [['I appreciate your support.', '我感谢你的支持。'], ['We really appreciate it.', '我们非常感谢。']] },
    ],
    phrases: [
      { p: 'I really appreciate it', ipa: '/aɪ ˈrɪəli əˈpriːʃieɪt ɪt/', cn: '我非常感谢', why: '比 Thank you 更强烈的感谢表达，体现真诚的感激之情。' },
      { p: 'Thank you', ipa: '/θæŋk juː/', cn: '谢谢', why: '基本感谢语，后接 I really appreciate it 加强语气。' },
    ],
    grammar: [
      { q: 'appreciate 后面接什么？', a: 'appreciate 后面可以接 it（代指帮助行为）、名词或动名词。\n✅ I really appreciate it.（非常感谢。）—— it 代指对方的帮助\n✅ I appreciate your help.（感谢你的帮助。）—— 接名词\n✅ I appreciate you lending me the tool.（感谢你借给我工具。）—— 接动名词\n❌ I appreciate.（错误：appreciate 必须有宾语）' },
    ],
    pattern: 'Thank you. I really appreciate + 宾语.',
    patternExamples: [
      { en: 'Thank you. I really appreciate your help.', cn: '谢谢，非常感谢你的帮助。', words: [] },
      { en: 'Thanks a lot. I really appreciate it.', cn: '多谢，非常感谢。', words: [] },
      { en: 'Thank you so much. That means a lot.', cn: '太感谢了，这对我帮助很大。', words: [] },
    ],
    thinking: '借到东西后真诚致谢是职场基本礼仪。\nThank you + I really appreciate it 是最常用的双重感谢表达。\n中文说「谢谢你，非常感谢」，英语用 Thank you. I really appreciate it。',
    pronunciation: 'really 重音在第一音节：REAL-ly。\nappreciate 重音在第二音节：ap-PRE-ci-ate。\n节奏：THANK you ｜ I REAL-ly ｜ ap-PRE-ci-ate it.',
    quiz: [
      { q: '把「谢谢你，非常感谢。」用英语说出来。', a: 'Thank you. I really appreciate it.' },
      { q: '「感激」用英语怎么说？', a: 'appreciate (/əˈpriːʃieɪt/)' },
    ],
  },
];

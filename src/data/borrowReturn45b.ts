// EXPORTS: MOCK_SENTENCES_BORROWRETURN45B

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_BORROWRETURN45B: ISentence[] = [
  {
    id: 2461,
    speaker: 'Engineer',
    en: "Here's your laptop back.",
    cn: '你的电脑还给你。',
    ipa: "/hɪrz jɔːr ˈlæptɒp bæk/",
    tags: ['第2461句', '还东西', '★★★★'],
    when: '归还借来的笔记本电脑时，当面交还给同事。',
    words: [
      { w: "Here's", ipa: '/hɪrz/', pos: '缩写', cn: '这是（here is 的缩写）', memory: 'here(这里)+is(是)的缩写，用于递东西时的口语开场。', phonics: "here's 读 /hɪrz/，单音节。", collocations: [["here's your", '这是你的…'], ["here's the", '这是那个…']], examples: [["Here's your coffee.", '这是你的咖啡。'], ["Here's the key.", '这是钥匙。']] },
      { w: 'back', ipa: '/bæk/', pos: '副词', cn: '回来；归还', memory: 'back 表示方向回到原处，give back = 归还。', phonics: 'back 读 /bæk/，单音节。', collocations: [['give back', '归还'], ['come back', '回来'], ['here back', '还回来']], examples: [['Give it back to me.', '把它还给我。'], ["I'll bring it back.", '我会带回来。']] },
    ],
    phrases: [
      { p: "Here's your…back", ipa: '/hɪrz jɔːr…bæk/', cn: '你的…还给你', why: '归还物品时的标准句式，here is 引出物品，back 强调归还动作。' },
    ],
    grammar: [
      { q: "Here's your…back 和 I'm returning your…有什么区别？", a: "Here's your…back 是口语化的归还句式，轻松自然，适合同事之间。\nI'm returning your… 更正式，适合书面或对上级的场合。\n✅ Here's your laptop back.（你的电脑还给你。）—— 口语、轻松\n✅ I'm returning your laptop.（我来归还你的电脑。）—— 正式\n同事间归还推荐用 Here's your…back。" },
    ],
    pattern: "Here's your + 物品名 + back.",
    patternExamples: [
      { en: "Here's your phone back.", cn: '你的手机还给你。', words: [] },
      { en: "Here's your pen back.", cn: '你的笔还给你。', words: [] },
      { en: "Here's your badge back.", cn: '你的工牌还给你。', words: [] },
    ],
    thinking: "归还物品时最常用的句式是 Here's your…back，轻松自然。\n中文说「你的…还给你」，英语用 Here's your…back 对应。",
    pronunciation: "here's 读 /hɪrz/，注意 s 发 /z/ 音。\nback 读 /bæk/，短元音。\n节奏：HERE'S your ｜ LAP-top ｜ BACK.",
    quiz: [
      { q: '把「你的电脑还给你。」用英语说出来。', a: "Here's your laptop back." },
      { q: '「还给你」的口语表达是什么？', a: "Here's your…back (/hɪrz jɔːr…bæk/)" },
    ],
  },
  {
    id: 2462,
    speaker: 'Engineer',
    en: "Here's your charger.",
    cn: '你的充电器还给你。',
    ipa: "/hɪrz jɔːr ˈtʃɑːrdʒər/",
    tags: ['第2462句', '还东西', '★★★★'],
    when: '归还借来的充电器。',
    words: [
      { w: 'charger', ipa: '/ˈtʃɑːrdʒər/', pos: '名词', cn: '充电器', memory: 'charge(充电)+er(器具后缀)→充电的设备→充电器。', phonics: 'char 读 /tʃɑːr/，ger 读 /dʒər/，重音在第一音节。', collocations: [['phone charger', '手机充电器'], ['laptop charger', '电脑充电器'], ['battery charger', '电池充电器']], examples: [['Do you have a charger?', '你有充电器吗？'], ['I need my charger.', '我需要我的充电器。']] },
    ],
    phrases: [
      { p: "Here's your charger", ipa: '/hɪrz jɔːr ˈtʃɑːrdʒər/', cn: '你的充电器还给你', why: '直接归还充电器，不需要 back 也可以，因为语境已明确是归还。' },
    ],
    grammar: [
      { q: "什么时候可以省略 back？", a: '当归还语境已经很明确时，back 可以省略。\n✅ Here\'s your charger.（你的充电器。）—— 当面归还，语境明确\n✅ Here\'s your charger back.（你的充电器还给你。）—— 强调归还动作\n两种都可以，口语中常省略 back。' },
    ],
    pattern: "Here's your + 物品名.",
    patternExamples: [
      { en: "Here's your key.", cn: '你的钥匙还给你。', words: [] },
      { en: "Here's your radio.", cn: '你的对讲机还给你。', words: [] },
      { en: "Here's your tool.", cn: '你的工具还给你。', words: [] },
    ],
    thinking: "归还小件物品时，Here's your… 即可，不需要加 back。\n中文说「你的…还给你」，英语省略 back 更简洁。",
    pronunciation: "charger 重音在第一音节：CHAR-ger。\n节奏：HERE'S your ｜ CHAR-ger.",
    quiz: [
      { q: '把「你的充电器还给你。」用英语说出来。', a: "Here's your charger." },
      { q: '「充电器」用英语怎么说？', a: 'charger (/ˈtʃɑːrdʒər/)' },
    ],
  },
  {
    id: 2463,
    speaker: 'Engineer',
    en: "Here's your access card.",
    cn: '你的门禁卡还给你。',
    ipa: "/hɪrz jɔːr ˈæksɛs kɑːrd/",
    tags: ['第2463句', '还东西', '★★★★'],
    when: '归还临时借用的门禁卡。',
    words: [
      { w: 'access card', ipa: '/ˈæksɛs kɑːrd/', pos: '名词短语', cn: '门禁卡', memory: 'access(进入权限)+card(卡)→用于进入受限区域的卡→门禁卡。', phonics: 'ac 读 /æk/，cess 读 /sɛs/，重音在第一音节。', collocations: [['access card reader', '门禁读卡器'], ['temporary access card', '临时门禁卡']], examples: [['I forgot my access card.', '我忘带门禁卡了。'], ['Swipe your access card.', '刷你的门禁卡。']] },
    ],
    phrases: [
      { p: "Here's your access card", ipa: '/hɪrz jɔːr ˈæksɛs kɑːrd/', cn: '你的门禁卡还给你', why: '数据中心门禁卡是高频借还物品，归还时用标准句式。' },
    ],
    grammar: [
      { q: 'access card 和 key card 有什么区别？', a: 'access card 更正式，强调「进入权限」，常用于企业/数据中心场景。\nkey card 更通用，酒店/公寓常用。\n✅ Here\'s your access card.（你的门禁卡。）—— 数据中心场景\n✅ Here\'s your key card.（你的房卡/门禁卡。）—— 酒店场景' },
    ],
    pattern: "Here's your + 卡片/证件名.",
    patternExamples: [
      { en: "Here's your badge.", cn: '你的工牌还给你。', words: [] },
      { en: "Here's your ID card.", cn: '你的身份证还给你。', words: [] },
      { en: "Here's your visitor pass.", cn: '你的访客证还给你。', words: [] },
    ],
    thinking: "门禁卡是数据中心日常借还的高频物品。\nHere's your access card 是归还时的标准用语。",
    pronunciation: "access 重音在第一音节：AC-cess。\n节奏：HERE'S your ｜ AC-cess CARD.",
    quiz: [
      { q: '把「你的门禁卡还给你。」用英语说出来。', a: "Here's your access card." },
      { q: '「门禁卡」用英语怎么说？', a: 'access card (/ˈæksɛs kɑːrd/)' },
    ],
  },
  {
    id: 2464,
    speaker: 'Engineer',
    en: "Here's your radio.",
    cn: '你的对讲机还给你。',
    ipa: "/hɪrz jɔːr ˈreɪdioʊ/",
    tags: ['第2464句', '还东西', '★★★★'],
    when: '归还借用的对讲机，运维现场高频借还物品。',
    words: [
      { w: 'radio', ipa: '/ˈreɪdioʊ/', pos: '名词', cn: '对讲机；无线电', memory: 'radio 源自 radiation(辐射)，指无线电通信设备。', phonics: 'ra 读 /reɪ/，di 读 /di/，o 读 /oʊ/，重音在第一音节。', collocations: [['two-way radio', '对讲机'], ['radio channel', '无线电频道'], ['radio communication', '无线电通信']], examples: [['Check your radio.', '检查你的对讲机。'], ['Radio channel 3 is busy.', '3频道正忙。']] },
    ],
    phrases: [
      { p: "Here's your radio", ipa: '/hɪrz jɔːr ˈreɪdioʊ/', cn: '你的对讲机还给你', why: '运维现场对讲机是必备工具，借还频繁。' },
    ],
    grammar: [
      { q: 'radio 和 walkie-talkie 有什么区别？', a: 'radio 是通用术语，涵盖所有无线电设备。\nwalkie-talkie 是口语化的「手持对讲机」，更具体。\n✅ Here\'s your radio.（你的对讲机。）—— 通用\n✅ Here\'s your walkie-talkie.（你的手持对讲机。）—— 口语、具体\n数据中心常用 radio。' },
    ],
    pattern: "Here's your + 设备名.",
    patternExamples: [
      { en: "Here's your flashlight.", cn: '你的手电筒还给你。', words: [] },
      { en: "Here's your multimeter.", cn: '你的万用表还给你。', words: [] },
      { en: "Here's your thermal camera.", cn: '你的热像仪还给你。', words: [] },
    ],
    thinking: "对讲机是数据中心运维的标配工具，借还频繁。\nHere's your radio 是归还时的简洁用语。",
    pronunciation: "radio 重音在第一音节：RA-di-o。\n节奏：HERE'S your ｜ RA-di-o.",
    quiz: [
      { q: '把「你的对讲机还给你。」用英语说出来。', a: "Here's your radio." },
      { q: '「对讲机」用英语怎么说？', a: 'radio (/ˈreɪdioʊ/) 或 walkie-talkie' },
    ],
  },
  {
    id: 2465,
    speaker: 'Engineer',
    en: "Here's your toolbox.",
    cn: '你的工具箱还给你。',
    ipa: "/hɪrz jɔːr ˈtuːlbɒks/",
    tags: ['第2465句', '还东西', '★★★★'],
    when: '归还整套工具箱。',
    words: [
      { w: 'toolbox', ipa: '/ˈtuːlbɒks/', pos: '名词', cn: '工具箱', memory: 'tool(工具)+box(箱子)→装工具的箱子→工具箱。', phonics: 'tool 读 /tuːl/，box 读 /bɒks/，重音在第一音节。', collocations: [['open the toolbox', '打开工具箱'], ['toolbox inventory', '工具箱清点']], examples: [['Where is the toolbox?', '工具箱在哪？'], ['Return the toolbox after use.', '用完后归还工具箱。']] },
    ],
    phrases: [
      { p: "Here's your toolbox", ipa: '/hɪrz jɔːr ˈtuːlbɒks/', cn: '你的工具箱还给你', why: '工具箱是整套归还，通常包含多种工具。' },
    ],
    grammar: [
      { q: 'toolbox 和 tool kit 有什么区别？', a: 'toolbox 指装工具的箱子（物理容器）。\ntool kit 指一套配套工具（工具组合）。\n✅ Here\'s your toolbox.（你的工具箱。）—— 强调箱子\n✅ Here\'s your tool kit.（你的工具套装。）—— 强调工具组合\n日常两者可互换。' },
    ],
    pattern: "Here's your + 容器/套装名.",
    patternExamples: [
      { en: "Here's your tool kit.", cn: '你的工具套装还给你。', words: [] },
      { en: "Here's your first aid kit.", cn: '你的急救包还给你。', words: [] },
      { en: "Here's your lockout kit.", cn: '你的锁定挂牌工具包还给你。', words: [] },
    ],
    thinking: "工具箱归还时通常是整套，需要确认内部工具齐全。\nHere's your toolbox 简洁明了。",
    pronunciation: "toolbox 重音在第一音节：TOOL-box。\n节奏：HERE'S your ｜ TOOL-box.",
    quiz: [
      { q: '把「你的工具箱还给你。」用英语说出来。', a: "Here's your toolbox." },
      { q: '「工具箱」用英语怎么说？', a: 'toolbox (/ˈtuːlbɒks/)' },
    ],
  },
  {
    id: 2466,
    speaker: 'Engineer',
    en: 'Everything is in good condition.',
    cn: '所有东西都完好无损。',
    ipa: '/ˈɛvriθɪŋ ɪz ɪn ɡʊd kənˈdɪʃən/',
    tags: ['第2466句', '还东西', '★★★★'],
    when: '归还物品时说明物品状态良好，没有损坏。',
    words: [
      { w: 'everything', ipa: '/ˈɛvriθɪŋ/', pos: '代词', cn: '所有东西；一切', memory: 'every(每个)+thing(事物)→所有事物→一切。', phonics: 'ev 读 /ɛv/，ry 读 /ri/，thing 读 /θɪŋ/，重音在第一音节。', collocations: [['everything is fine', '一切都好'], ['everything is ready', '一切就绪']], examples: [['Everything is okay.', '一切都好。'], ['Is everything alright?', '一切都好吗？']] },
      { w: 'condition', ipa: '/kənˈdɪʃən/', pos: '名词', cn: '状态；状况', memory: 'con(共同)+dit(给)+ion(名词后缀)→给出的状态→状况。', phonics: 'con 读 /kən/，di 读 /dɪ/，tion 读 /ʃən/，重音在第二音节。', collocations: [['good condition', '良好状态'], ['poor condition', '状况差'], ['working condition', '工作状态']], examples: [['The equipment is in good condition.', '设备状态良好。'], ['Check the condition.', '检查状态。']] },
    ],
    phrases: [
      { p: 'in good condition', ipa: '/ɪn ɡʊd kənˈdɪʃən/', cn: '处于良好状态', why: 'in…condition 表示「处于…状态」，good condition 即完好无损。' },
    ],
    grammar: [
      { q: 'in good condition 和 undamaged 有什么区别？', a: 'in good condition 强调「整体状态良好」，包括功能正常、外观完好。\nundamaged 仅强调「没有损坏」，范围更窄。\n✅ Everything is in good condition.（所有东西都完好。）—— 全面良好\n✅ Everything is undamaged.（所有东西都没损坏。）—— 仅强调无损\n归还物品时推荐 in good condition。' },
    ],
    pattern: 'Everything is in + 状态描述.',
    patternExamples: [
      { en: 'Everything is in working order.', cn: '所有东西都能正常工作。', words: [] },
      { en: 'Everything is in perfect condition.', cn: '所有东西都完好如新。', words: [] },
      { en: 'Everything is in place.', cn: '所有东西都归位了。', words: [] },
    ],
    thinking: "归还物品时说明状态良好是基本礼貌。\nEverything is in good condition 是标准表达。\n中文说「完好无损」，英语用 in good condition 对应。",
    pronunciation: "condition 重音在第二音节：con-DI-tion。\n节奏：EV-ry-thing is ｜ in GOOD ｜ con-DI-tion.",
    quiz: [
      { q: '把「所有东西都完好无损。」用英语说出来。', a: 'Everything is in good condition.' },
      { q: '「状态良好」用英语怎么说？', a: 'in good condition (/ɪn ɡʊd kənˈdɪʃən/)' },
    ],
  },
  {
    id: 2467,
    speaker: 'Engineer',
    en: 'Thank you for letting me use it.',
    cn: '谢谢你借给我使用。',
    ipa: '/θæŋk juː fɔːr ˈlɛtɪŋ miː juːz ɪt/',
    tags: ['第2467句', '还东西', '★★★★'],
    when: '归还物品时表达感谢。',
    words: [
      { w: 'letting', ipa: '/ˈlɛtɪŋ/', pos: '动词（现在分词）', cn: '让；允许', memory: 'let(让)+ting→正在允许→借给使用。', phonics: 'let 读 /lɛt/，ting 读 /tɪŋ/，重音在第一音节。', collocations: [['let me use', '让我使用'], ['let me borrow', '让我借']], examples: [['Thanks for letting me use it.', '谢谢让我用。'], ['Let me help you.', '让我帮你。']] },
    ],
    phrases: [
      { p: 'Thank you for letting me use it', ipa: '/θæŋk juː fɔːr ˈlɛtɪŋ miː juːz ɪt/', cn: '谢谢你借给我使用', why: 'for letting me use it 说明感谢的原因——对方允许自己使用物品。' },
    ],
    grammar: [
      { q: 'Thank you for + 动名词 的用法是什么？', a: 'Thank you for + 动名词（V-ing）表示「感谢你做了某事」。\n✅ Thank you for letting me use it.（谢谢你让我用。）\n✅ Thank you for helping me.（谢谢你帮我。）\n✅ Thank you for lending it to me.（谢谢你借给我。）\nfor 后面接动名词，不能接动词原形。' },
    ],
    pattern: 'Thank you for letting me + 动词 + 对象.',
    patternExamples: [
      { en: 'Thank you for letting me borrow it.', cn: '谢谢你借给我。', words: [] },
      { en: 'Thank you for letting me try it.', cn: '谢谢你让我试试。', words: [] },
      { en: 'Thank you for letting me use your desk.', cn: '谢谢你让我用你的桌子。', words: [] },
    ],
    thinking: "归还物品时表达感谢是基本礼貌。\nThank you for letting me use it 是最常用的感谢句式。\n中文说「谢谢你借给我使用」，英语用 for letting me use it 对应。",
    pronunciation: "letting 读 /ˈlɛtɪŋ/，重音在第一音节。\n节奏：THANK you ｜ for LET-ting me ｜ USE it.",
    quiz: [
      { q: '把「谢谢你借给我使用。」用英语说出来。', a: 'Thank you for letting me use it.' },
      { q: 'Thank you for 后面接什么形式？', a: '动名词（V-ing），如 letting / helping / lending' },
    ],
  },
  {
    id: 2468,
    speaker: 'Engineer',
    en: 'Sorry for returning it a little late.',
    cn: '不好意思，晚了一点才还给你。',
    ipa: '/ˈsɒri fɔːr rɪˈtɜːrnɪŋ ɪt ə ˈlɪtl leɪt/',
    tags: ['第2468句', '还东西', '★★★★'],
    when: '归还物品时比预期稍晚，表达歉意。',
    words: [
      { w: 'returning', ipa: '/rɪˈtɜːrnɪŋ/', pos: '动词（现在分词）', cn: '归还', memory: 'return(返回)+ing→正在归还。', phonics: 're 读 /rɪ/，turn 读 /tɜːrn/，ing 读 /ɪŋ/，重音在第二音节。', collocations: [['return it late', '迟还'], ['return on time', '按时归还']], examples: [["I'm returning the tool.", '我来还工具。'], ['Please return it tomorrow.', '请明天归还。']] },
      { w: 'a little late', ipa: '/ə ˈlɪtl leɪt/', pos: '副词短语', cn: '稍微晚了一点', memory: 'a little(一点)+late(晚)→稍微迟到。', phonics: 'a 读 /ə/，little 读 /ˈlɪtl/，late 读 /leɪt/。', collocations: [['a bit late', '有点晚'], ['running late', '要迟到了']], examples: [["I'm a little late.", '我晚了一点。'], ['Sorry I\'m late.', '抱歉我迟到了。']] },
    ],
    phrases: [
      { p: 'Sorry for returning it a little late', ipa: '/ˈsɒri fɔːr rɪˈtɜːrnɪŋ ɪt ə ˈlɪtl leɪt/', cn: '不好意思晚了一点才还', why: 'Sorry for + 动名词 表示「对做了某事感到抱歉」，a little late 缓和语气。' },
    ],
    grammar: [
      { q: 'Sorry for + 动名词 和 Sorry I\'m late 有什么区别？', a: "Sorry for returning it late 针对具体行为（归还晚了）道歉。\nSorry I'm late 是通用的「我迟到了」道歉。\n✅ Sorry for returning it a little late.（不好意思晚还了。）—— 针对归还行为\n✅ Sorry I'm late.（抱歉我迟到了。）—— 通用迟到道歉\n归还物品时用前者更精确。" },
    ],
    pattern: 'Sorry for + 动名词 + 补充说明.',
    patternExamples: [
      { en: 'Sorry for keeping it so long.', cn: '不好意思借了这么久。', words: [] },
      { en: 'Sorry for the delay.', cn: '不好意思耽误了。', words: [] },
      { en: 'Sorry for borrowing it without asking.', cn: '不好意思没问就借了。', words: [] },
    ],
    thinking: "归还比预期晚时，表达歉意是礼貌的表现。\nSorry for returning it a little late 是得体的道歉句式。\na little 缓和语气，不显得过于严重。",
    pronunciation: "returning 重音在第二音节：re-TURN-ing。\na little late 连读：a-LIT-tle-LATE。\n节奏：SOR-ry for ｜ re-TURN-ing it ｜ a LIT-tle LATE.",
    quiz: [
      { q: '把「不好意思，晚了一点才还给你。」用英语说出来。', a: 'Sorry for returning it a little late.' },
      { q: '「稍微晚了一点」用英语怎么说？', a: 'a little late (/ə ˈlɪtl leɪt/)' },
    ],
  },
  {
    id: 2469,
    speaker: 'Engineer',
    en: 'I cleaned it before returning it.',
    cn: '我已经清理干净再还给你。',
    ipa: '/aɪ kliːnd ɪt bɪˈfɔːr rɪˈtɜːrnɪŋ ɪt/',
    tags: ['第2469句', '还东西', '★★★★'],
    when: '归还工具或设备前已清洁，体现专业素养。',
    words: [
      { w: 'cleaned', ipa: '/kliːnd/', pos: '动词（过去式）', cn: '清理；清洁', memory: 'clean(干净)+ed(过去式)→使之干净→清理。', phonics: 'clean 读 /kliːn/，ed 读 /d/，单音节。', collocations: [['clean up', '收拾干净'], ['clean the tool', '清洁工具']], examples: [['I cleaned the workspace.', '我清理了工作区。'], ['Please clean it before returning.', '归还前请清洁。']] },
    ],
    phrases: [
      { p: 'before returning it', ipa: '/bɪˈfɔːr rɪˈtɜːrnɪŋ ɪt/', cn: '在归还之前', why: 'before + 动名词 表示「在做某事之前」，说明清洁发生在归还之前。' },
    ],
    grammar: [
      { q: 'before + 动名词 的用法是什么？', a: 'before + V-ing 表示「在做某事之前」，动名词作介词宾语。\n✅ I cleaned it before returning it.（归还前我清洁了。）\n✅ Wash your hands before eating.（吃饭前洗手。）\n✅ Check the tool before using it.（使用前检查工具。）\nbefore 是介词，后面接动名词。' },
    ],
    pattern: 'I + 过去动作 + before + 动名词 + 对象.',
    patternExamples: [
      { en: 'I checked it before returning it.', cn: '归还前我检查过了。', words: [] },
      { en: 'I wiped it before giving it back.', cn: '还之前我擦过了。', words: [] },
      { en: 'I tested it before handing it over.', cn: '移交前我测试过了。', words: [] },
    ],
    thinking: "归还工具前清洁是数据中心的专业规范。\nI cleaned it before returning it 体现责任心。\nbefore + V-ing 是描述先后顺序的常用结构。",
    pronunciation: "cleaned 读 /kliːnd/，注意 ed 发 /d/ 音。\nbefore 重音在第二音节：be-FORE。\n节奏：I CLEANED it ｜ be-FORE ｜ re-TURN-ing it.",
    quiz: [
      { q: '把「我已经清理干净再还给你。」用英语说出来。', a: 'I cleaned it before returning it.' },
      { q: 'before 后面接什么形式？', a: '动名词（V-ing），如 returning / eating / using' },
    ],
  },
  {
    id: 2470,
    speaker: 'Engineer',
    en: 'Thanks again for your help.',
    cn: '再次感谢你的帮助。',
    ipa: '/θæŋks əˈɡɛn fɔːr jɔːr hɛlp/',
    tags: ['第2470句', '还东西', '★★★★'],
    when: '归还物品后再次表达感谢，结束对话。',
    words: [
      { w: 'again', ipa: '/əˈɡɛn/', pos: '副词', cn: '再次', memory: 'a(再)+gain(获得)→再次获得→再次。', phonics: 'a 读 /ə/，gain 读 /ɡɛn/，重音在第二音节。', collocations: [['thanks again', '再次感谢'], ['say it again', '再说一遍']], examples: [['Thanks again.', '再次感谢。'], ['See you again.', '再见。']] },
    ],
    phrases: [
      { p: 'Thanks again', ipa: '/θæŋks əˈɡɛn/', cn: '再次感谢', why: '归还物品结束时再次致谢，比单次 Thank you 更有诚意。' },
    ],
    grammar: [
      { q: 'Thanks again 和 Thank you once again 有什么区别？', a: 'Thanks again 口语化、轻松，适合同事之间。\nThank you once again 更正式，适合书面或对上级。\n✅ Thanks again for your help.（再次感谢你的帮助。）—— 口语\n✅ Thank you once again for your support.（再次感谢您的支持。）—— 正式\n同事间推荐 Thanks again。' },
    ],
    pattern: 'Thanks again for + 名词/动名词.',
    patternExamples: [
      { en: 'Thanks again for lending it to me.', cn: '再次感谢你借给我。', words: [] },
      { en: 'Thanks again for your time.', cn: '再次感谢你花时间帮忙。', words: [] },
      { en: 'Thanks again for being so helpful.', cn: '再次感谢你这么帮忙。', words: [] },
    ],
    thinking: "归还物品后再次感谢是社交礼仪的收尾。\nThanks again 简洁而有诚意。\n中文说「再次感谢」，英语用 Thanks again 对应。",
    pronunciation: "again 重音在第二音节：a-GAIN。\n节奏：THANKS a-GAIN ｜ for your HELP.",
    quiz: [
      { q: '把「再次感谢你的帮助。」用英语说出来。', a: 'Thanks again for your help.' },
      { q: '「再次感谢」用英语怎么说？', a: 'Thanks again (/θæŋks əˈɡɛn/)' },
    ],
  },
  {
    id: 2471,
    speaker: 'Manager',
    en: 'Please sign for the tool before taking it.',
    cn: '领取工具前请签字。',
    ipa: '/pliːz saɪn fɔːr ðə tuːl bɪˈfɔːr ˈteɪkɪŋ ɪt/',
    tags: ['第2471句', '工具管理', '★★★★★'],
    when: '工具管理员要求领用人在登记表上签字确认。',
    words: [
      { w: 'sign for', ipa: '/saɪn fɔːr/', pos: '动词短语', cn: '签字领取', memory: 'sign(签字)+for(为了)→为领取而签字→签字领取。', phonics: 'sign 读 /saɪn/，for 读 /fɔːr/。', collocations: [['sign for delivery', '签收'], ['sign for equipment', '签字领设备']], examples: [['Please sign for the package.', '请签收包裹。'], ['Sign here for the tool.', '在这里签字领工具。']] },
    ],
    phrases: [
      { p: 'sign for the tool', ipa: '/saɪn fɔːr ðə tuːl/', cn: '签字领取工具', why: 'sign for 是领取物品时的标准动作，强调签收确认。' },
      { p: 'before taking it', ipa: '/bɪˈfɔːr ˈteɪkɪŋ ɪt/', cn: '在拿走之前', why: 'before + V-ing 说明签字必须在领取之前完成。' },
    ],
    grammar: [
      { q: 'sign for 和 sign 有什么区别？', a: 'sign for 强调「为领取某物而签字」，for 后面是领取的对象。\nsign 单独使用只表示「签名」这个动作。\n✅ Please sign for the tool.（请签字领工具。）—— 签字领取\n✅ Please sign here.（请在这里签名。）—— 只是签名动作\n领用工具时用 sign for。' },
    ],
    pattern: 'Please sign for + 物品 + before + 动名词.',
    patternExamples: [
      { en: 'Please sign for the equipment before leaving.', cn: '离开前请签字领设备。', words: [] },
      { en: 'Please sign for the keys before taking them.', cn: '拿走钥匙前请签字。', words: [] },
      { en: 'Please sign for the materials before collecting.', cn: '领取材料前请签字。', words: [] },
    ],
    thinking: "工具领用签字是数据中心工具管理的基本制度。\nsign for 强调「签收」，不是随便签名。\nbefore taking it 明确先后顺序：先签字、后领取。",
    pronunciation: "sign 读 /saɪn/，g 不发音。\nbefore 重音在第二音节：be-FORE。\n节奏：PLEASE SIGN ｜ for the TOOL ｜ be-FORE ｜ TAK-ing it.",
    quiz: [
      { q: '把「领取工具前请签字。」用英语说出来。', a: 'Please sign for the tool before taking it.' },
      { q: '「签字领取」用英语怎么说？', a: 'sign for (/saɪn fɔːr/)' },
    ],
  },
  {
    id: 2472,
    speaker: 'Manager',
    en: 'Please return the tool before the end of your shift.',
    cn: '请在下班前归还工具。',
    ipa: '/pliːz rɪˈtɜːrn ðə tuːl bɪˈfɔːr ði ɛnd əv jɔːr ʃɪft/',
    tags: ['第2472句', '工具管理', '★★★★★'],
    when: '提醒工程师在当班结束前归还借用的工具。',
    words: [
      { w: 'shift', ipa: '/ʃɪft/', pos: '名词', cn: '班次；值班时段', memory: 'shift 原义「转换」，引申为「轮班工作的一个时段」→班次。', phonics: 'shift 读 /ʃɪft/，单音节。', collocations: [['end of shift', '下班时'], ['night shift', '夜班'], ['day shift', '白班']], examples: [['My shift ends at 6 PM.', '我的班下午6点结束。'], ['Who is on the night shift?', '谁上夜班？']] },
    ],
    phrases: [
      { p: 'before the end of your shift', ipa: '/bɪˈfɔːr ði ɛnd əv jɔːr ʃɪft/', cn: '在你下班之前', why: 'end of shift 是数据中心常用的时间节点，指当班结束时刻。' },
    ],
    grammar: [
      { q: 'end of shift 和 end of work 有什么区别？', a: 'end of shift 强调「轮班结束」，适用于倒班制工作环境（如数据中心）。\nend of work 更通用，指「工作结束」，可能指项目结束或一天结束。\n✅ Return the tool before the end of your shift.（下班前归还工具。）—— 倒班场景\n✅ Finish before the end of work.（工作结束前完成。）—— 通用\n数据中心推荐 end of shift。' },
    ],
    pattern: 'Please return + 物品 + before + 时间节点.',
    patternExamples: [
      { en: 'Please return the key before the end of the day.', cn: '今天结束前请归还钥匙。', words: [] },
      { en: 'Please return the radio before your shift ends.', cn: '下班前请归还对讲机。', words: [] },
      { en: 'Please return the badge before leaving.', cn: '离开前请归还工牌。', words: [] },
    ],
    thinking: "数据中心实行轮班制，end of shift 是工具归还的标准时间节点。\n这句话是工具管理制度的核心要求。\n中文说「下班前」，英语用 before the end of your shift 对应。",
    pronunciation: "shift 读 /ʃɪft/，单音节。\n节奏：Please re-TURN the TOOL ｜ be-FORE the END ｜ of your SHIFT.",
    quiz: [
      { q: '把「请在下班前归还工具。」用英语说出来。', a: 'Please return the tool before the end of your shift.' },
      { q: '「下班」在轮班制中用英语怎么说？', a: 'end of shift (/ɛnd əv ʃɪft/)' },
    ],
  },
  {
    id: 2473,
    speaker: 'Manager',
    en: 'One tool is missing.',
    cn: '有一件工具丢失了。',
    ipa: '/wʌn tuːl ɪz ˈmɪsɪŋ/',
    tags: ['第2473句', '工具管理', '★★★★★'],
    when: '工具清点时发现缺少一件工具，需要报告和查找。',
    words: [
      { w: 'missing', ipa: '/ˈmɪsɪŋ/', pos: '形容词', cn: '丢失的；缺失的', memory: 'miss(丢失)+ing(形容词后缀)→处于丢失状态的→缺失的。', phonics: 'miss 读 /mɪs/，ing 读 /ɪŋ/，重音在第一音节。', collocations: [['missing tool', '丢失的工具'], ['missing item', '缺失的物品'], ['reported missing', '报失']], examples: [['A tool is missing.', '一件工具丢了。'], ['Is anything missing?', '有丢什么吗？']] },
    ],
    phrases: [
      { p: 'One tool is missing', ipa: '/wʌn tuːl ɪz ˈmɪsɪŋ/', cn: '有一件工具丢失了', why: '简洁报告丢失情况，one tool 明确数量，missing 说明状态。' },
    ],
    grammar: [
      { q: 'missing 和 lost 有什么区别？', a: 'missing 强调「不见了、找不到」，不确定在哪里。\nlost 强调「丢失了」，可能已经确认找不回来。\n✅ One tool is missing.（一件工具不见了。）—— 找不到在哪\n✅ One tool is lost.（一件工具丢了。）—— 确认丢失\n工具清点时常用 missing，因为还在查找中。' },
    ],
    pattern: '数量 + 物品 + is/are missing.',
    patternExamples: [
      { en: 'Two tools are missing.', cn: '有两件工具丢失了。', words: [] },
      { en: 'One wrench is missing.', cn: '一把扳手不见了。', words: [] },
      { en: 'The voltage detector is missing.', cn: '验电器不见了。', words: [] },
    ],
    thinking: "工具清点时发现缺失是严肃的安全问题。\nmissing 比 lost 更准确——表示「找不到」而非「确认丢失」。\n中文说「丢失了」，英语用 is missing 对应。",
    pronunciation: "missing 重音在第一音节：MISS-ing。\n节奏：ONE TOOL ｜ is MISS-ing.",
    quiz: [
      { q: '把「有一件工具丢失了。」用英语说出来。', a: 'One tool is missing.' },
      { q: '「丢失的」用英语怎么说？', a: 'missing (/ˈmɪsɪŋ/)' },
    ],
  },
  {
    id: 2474,
    speaker: 'Manager',
    en: 'One tool has been damaged.',
    cn: '有一件工具损坏了。',
    ipa: '/wʌn tuːl hæz biːn ˈdæmɪdʒd/',
    tags: ['第2474句', '工具管理', '★★★★★'],
    when: '工具检查时发现一件工具已损坏，需要记录和处理。',
    words: [
      { w: 'damaged', ipa: '/ˈdæmɪdʒd/', pos: '形容词/过去分词', cn: '损坏的', memory: 'damage(损害)+d(过去分词)→被损害的→损坏的。', phonics: 'dam 读 /dæm/，age 读 /ɪdʒ/，d 读 /d/，重音在第一音节。', collocations: [['damaged equipment', '损坏的设备'], ['severely damaged', '严重损坏']], examples: [['The tool is damaged.', '工具坏了。'], ['Report any damaged items.', '报告任何损坏物品。']] },
    ],
    phrases: [
      { p: 'has been damaged', ipa: '/hæz biːn ˈdæmɪdʒd/', cn: '已经被损坏', why: '现在完成时被动语态，强调工具目前处于损坏状态，且是被外力造成的。' },
    ],
    grammar: [
      { q: 'has been damaged 和 is damaged 有什么区别？', a: 'has been damaged 是现在完成时被动语态，强调「已经被损坏」这个动作的发生。\nis damaged 是形容词描述，强调「目前处于损坏状态」。\n✅ One tool has been damaged.（一件工具被损坏了。）—— 强调损坏事件\n✅ One tool is damaged.（一件工具是坏的。）—— 强调当前状态\n两种都可以，前者更强调事件。' },
    ],
    pattern: '数量 + 物品 + has/have been damaged.',
    patternExamples: [
      { en: 'Two tools have been damaged.', cn: '有两件工具损坏了。', words: [] },
      { en: 'The multimeter has been damaged.', cn: '万用表损坏了。', words: [] },
      { en: 'One insulated glove has been damaged.', cn: '一只绝缘手套损坏了。', words: [] },
    ],
    thinking: "工具损坏需要及时报告和处理，涉及安全和采购替换。\nhas been damaged 强调损坏事件的发生。\n中文说「损坏了」，英语用 has been damaged 对应。",
    pronunciation: "damaged 读 /ˈdæmɪdʒd/，注意末尾 /d/ 音。\n节奏：ONE TOOL ｜ has BEEN ｜ DAM-aged.",
    quiz: [
      { q: '把「有一件工具损坏了。」用英语说出来。', a: 'One tool has been damaged.' },
      { q: '「损坏的」用英语怎么说？', a: 'damaged (/ˈdæmɪdʒd/)' },
    ],
  },
  {
    id: 2475,
    speaker: 'Manager',
    en: 'Please report the missing tool immediately.',
    cn: '请立即报告工具遗失情况。',
    ipa: '/pliːz rɪˈpɔːrt ðə ˈmɪsɪŋ tuːl ɪˈmiːdiətli/',
    tags: ['第2475句', '工具管理', '★★★★★'],
    when: '发现工具丢失后，要求立即向上级或工具管理部门报告。',
    words: [
      { w: 'report', ipa: '/rɪˈpɔːrt/', pos: '动词', cn: '报告', memory: 're(再)+port(携带)→再次携带信息→报告。', phonics: 're 读 /rɪ/，port 读 /pɔːrt/，重音在第二音节。', collocations: [['report immediately', '立即报告'], ['report to supervisor', '向主管报告'], ['incident report', '事件报告']], examples: [['Please report the issue.', '请报告问题。'], ['Report it to the manager.', '向经理报告。']] },
      { w: 'immediately', ipa: '/ɪˈmiːdiətli/', pos: '副词', cn: '立即；马上', memory: 'im(不)+medi(中间)+ate+ly→中间不停顿地→立即。', phonics: 'im 读 /ɪ/，me 读 /miː/，di 读 /di/，ate 读 /ət/，ly 读 /li/，重音在第二音节。', collocations: [['immediately report', '立即报告'], ['do it immediately', '立即做']], examples: [['Call immediately.', '立即打电话。'], ['Report it immediately.', '立即报告。']] },
    ],
    phrases: [
      { p: 'report the missing tool', ipa: '/rɪˈpɔːrt ðə ˈmɪsɪŋ tuːl/', cn: '报告丢失的工具', why: 'report + 丢失对象，明确报告的内容。' },
      { p: 'immediately', ipa: '/ɪˈmiːdiətli/', cn: '立即', why: '强调时间紧迫，不可延迟。' },
    ],
    grammar: [
      { q: 'immediately 放在句末和句首有什么区别？', a: '句末：Please report it immediately.（请立即报告。）—— 标准位置，自然流畅。\n句首：Immediately report the missing tool.（立即报告丢失工具。）—— 更紧迫、更命令式。\n✅ 日常推荐放句末。\n✅ 紧急命令可放句首。' },
    ],
    pattern: 'Please report + 问题 + immediately.',
    patternExamples: [
      { en: 'Please report the incident immediately.', cn: '请立即报告事件。', words: [] },
      { en: 'Please report any damage immediately.', cn: '请立即报告任何损坏。', words: [] },
      { en: 'Please report the alarm immediately.', cn: '请立即报告告警。', words: [] },
    ],
    thinking: "工具遗失在数据中心是严重的安全隐患（可能被遗留在设备中导致故障）。\nimmediately 强调不可延迟。\n中文说「立即报告」，英语用 report…immediately 对应。",
    pronunciation: "immediately 重音在第二音节：im-ME-di-ate-ly（5个音节）。\n节奏：Please re-PORT ｜ the MISS-ing TOOL ｜ im-ME-di-ate-ly.",
    quiz: [
      { q: '把「请立即报告工具遗失情况。」用英语说出来。', a: 'Please report the missing tool immediately.' },
      { q: '「立即」用英语怎么说？', a: 'immediately (/ɪˈmiːdiətli/)' },
    ],
  },
  {
    id: 2476,
    speaker: 'Manager',
    en: 'Please record the tool serial number.',
    cn: '请记录工具序列号。',
    ipa: '/pliːz ˈrɛkɔːrd ðə tuːl ˈsɪriəl ˈnʌmbər/',
    tags: ['第2476句', '工具管理', '★★★★★'],
    when: '领用或归还工具时，记录工具的序列号以便追溯。',
    words: [
      { w: 'record', ipa: '/ˈrɛkɔːrd/', pos: '动词', cn: '记录', memory: 're(再)+cord(心)→再次记在心里→记录。', phonics: 're 读 /rɪ/，cord 读 /kɔːrd/，重音在第二音节（动词）。注意：名词 record 重音在第一音节 /ˈrɛkɔːrd/。', collocations: [['record the number', '记录编号'], ['keep a record', '保留记录']], examples: [['Please record the time.', '请记录时间。'], ['Record all observations.', '记录所有观察结果。']] },
      { w: 'serial number', ipa: '/ˈsɪriəl ˈnʌmbər/', pos: '名词短语', cn: '序列号', memory: 'serial(序列的)+number(号码)→用于唯一标识的编号→序列号。', phonics: 'se 读 /sɪ/，ri 读 /ri/，al 读 /əl/，重音在第一音节。', collocations: [['serial number label', '序列号标签'], ['check serial number', '核对序列号']], examples: [["What's the serial number?", '序列号是多少？'], ['Record the serial number.', '记录序列号。']] },
    ],
    phrases: [
      { p: 'tool serial number', ipa: '/tuːl ˈsɪriəl ˈnʌmbər/', cn: '工具序列号', why: '每件工具的唯一标识号，用于追踪和管理。' },
    ],
    grammar: [
      { q: 'record 作动词和名词时发音有什么不同？', a: '动词 record 重音在第二音节：re-CORD /rɪˈkɔːrd/，表示「记录」。\n名词 record 重音在第一音节：REC-ord /ˈrɛkɔːrd/，表示「记录/唱片」。\n✅ Please record (v.) the serial number.（请记录序列号。）—— 重音在后\n✅ Keep a record (n.) of all tools.（保留所有工具的记录。）—— 重音在前' },
    ],
    pattern: 'Please record + 信息类型.',
    patternExamples: [
      { en: 'Please record the equipment ID.', cn: '请记录设备编号。', words: [] },
      { en: 'Please record the maintenance date.', cn: '请记录维护日期。', words: [] },
      { en: 'Please record the inspection result.', cn: '请记录检查结果。', words: [] },
    ],
    thinking: "工具序列号是追踪管理的关键信息。\nrecord 作动词时重音在第二音节，不要和名词混淆。\n中文说「记录序列号」，英语用 record the serial number 对应。",
    pronunciation: "record（动词）重音在第二音节：re-CORD。\nserial 重音在第一音节：SE-ri-al。\n节奏：Please re-CORD ｜ the TOOL ｜ SE-ri-al NUM-ber.",
    quiz: [
      { q: '把「请记录工具序列号。」用英语说出来。', a: 'Please record the tool serial number.' },
      { q: '「序列号」用英语怎么说？', a: 'serial number (/ˈsɪriəl ˈnʌmbər/)' },
    ],
  },
  {
    id: 2477,
    speaker: 'Engineer',
    en: 'The tool has been returned to the warehouse.',
    cn: '工具已经归还仓库。',
    ipa: '/ðə tuːl hæz biːn rɪˈtɜːrnd tu ðə ˈwɛrhaʊs/',
    tags: ['第2477句', '工具管理', '★★★★★'],
    when: '确认工具已归还至工具仓库，完成归还流程。',
    words: [
      { w: 'returned', ipa: '/rɪˈtɜːrnd/', pos: '动词（过去分词）', cn: '归还', memory: 'return(返回)+ed→已返回→已归还。', phonics: 're 读 /rɪ/，turn 读 /tɜːrn/，ed 读 /d/，重音在第二音节。', collocations: [['returned to warehouse', '归还仓库'], ['returned safely', '安全归还']], examples: [['The tool has been returned.', '工具已归还。'], ['All items returned.', '所有物品已归还。']] },
      { w: 'warehouse', ipa: '/ˈwɛrhaʊs/', pos: '名词', cn: '仓库', memory: 'ware(货物)+house(房子)→存放货物的房子→仓库。', phonics: 'ware 读 /wɛr/，house 读 /haʊs/，重音在第一音节。', collocations: [['tool warehouse', '工具仓库'], ['warehouse inventory', '仓库库存']], examples: [['Return it to the warehouse.', '归还到仓库。'], ['Check the warehouse.', '检查仓库。']] },
    ],
    phrases: [
      { p: 'returned to the warehouse', ipa: '/rɪˈtɜːrnd tu ðə ˈwɛrhaʊs/', cn: '归还到仓库', why: 'to the warehouse 指明归还的目的地。' },
    ],
    grammar: [
      { q: 'has been returned 和 was returned 有什么区别？', a: 'has been returned 是现在完成时被动语态，强调「到现在为止已经归还」，关注当前状态。\nwas returned 是一般过去时被动语态，只描述过去的归还动作。\n✅ The tool has been returned.（工具已归还。）—— 强调当前状态\n✅ The tool was returned yesterday.（工具昨天归还的。）—— 描述过去动作\n确认归还状态时用 has been returned。' },
    ],
    pattern: '物品 + has/have been returned to + 地点.',
    patternExamples: [
      { en: 'The equipment has been returned to storage.', cn: '设备已归还储藏室。', words: [] },
      { en: 'All tools have been returned to the shelf.', cn: '所有工具已归还到架上。', words: [] },
      { en: 'The key has been returned to reception.', cn: '钥匙已归还到前台。', words: [] },
    ],
    thinking: "工具归还仓库是闭环管理的最后一步。\nhas been returned 强调归还动作已完成。\n中文说「已经归还仓库」，英语用 has been returned to the warehouse 对应。",
    pronunciation: "warehouse 重音在第一音节：WARE-house。\nreturned 读 /rɪˈtɜːrnd/，注意 ed 发 /d/ 音。\n节奏：The TOOL ｜ has BEEN ｜ re-TURNED ｜ to the WARE-house.",
    quiz: [
      { q: '把「工具已经归还仓库。」用英语说出来。', a: 'The tool has been returned to the warehouse.' },
      { q: '「仓库」用英语怎么说？', a: 'warehouse (/ˈwɛrhaʊs/)' },
    ],
  },
  {
    id: 2478,
    speaker: 'Manager',
    en: 'Please check the tool inventory.',
    cn: '请检查工具库存。',
    ipa: '/pliːz tʃɛk ðə tuːl ˈɪnvəntɔːri/',
    tags: ['第2478句', '工具管理', '★★★★★'],
    when: '要求对工具库存进行清点核查。',
    words: [
      { w: 'inventory', ipa: '/ˈɪnvəntɔːri/', pos: '名词', cn: '库存；清点', memory: 'in(进入)+vent(来)+ory(名词后缀)→进来的东西列表→库存清单。', phonics: 'in 读 /ɪn/，ven 读 /vən/，to 读 /tɔː/，ry 读 /ri/，重音在第一音节。', collocations: [['tool inventory', '工具库存'], ['inventory check', '库存盘点'], ['inventory list', '库存清单']], examples: [['Check the inventory.', '检查库存。'], ['Update the inventory.', '更新库存。']] },
    ],
    phrases: [
      { p: 'tool inventory', ipa: '/tuːl ˈɪnvəntɔːri/', cn: '工具库存', why: 'inventory 既指「库存物品」，也指「清点」这个动作。' },
    ],
    grammar: [
      { q: 'inventory 和 stock 有什么区别？', a: 'inventory 更正式，强调「详细的库存清单」，包括每件物品的记录。\nstock 更通用，指「存货、库存量」。\n✅ Check the tool inventory.（检查工具库存清单。）—— 详细清点\n✅ Check the stock level.（检查库存水平。）—— 数量\n工具管理场景推荐 inventory。' },
    ],
    pattern: 'Please check the + 对象 + inventory.',
    patternExamples: [
      { en: 'Please check the spare parts inventory.', cn: '请检查备件库存。', words: [] },
      { en: 'Please check the PPE inventory.', cn: '请检查劳保用品库存。', words: [] },
      { en: 'Please check the consumables inventory.', cn: '请检查耗材库存。', words: [] },
    ],
    thinking: "工具库存清点是数据中心日常管理的重要环节。\ninventory 比 stock 更精确，包含详细清单。\n中文说「检查工具库存」，英语用 check the tool inventory 对应。",
    pronunciation: "inventory 重音在第一音节：IN-ven-to-ry（4个音节）。\n节奏：Please CHECK ｜ the TOOL ｜ IN-ven-to-ry.",
    quiz: [
      { q: '把「请检查工具库存。」用英语说出来。', a: 'Please check the tool inventory.' },
      { q: '「库存清点」用英语怎么说？', a: 'inventory check (/ˈɪnvəntɔːri tʃɛk/)' },
    ],
  },
  {
    id: 2479,
    speaker: 'Manager',
    en: 'We need to order a replacement tool.',
    cn: '我们需要采购一件替换工具。',
    ipa: '/wiː niːd tu ˈɔːrdər ə rɪˈpleɪsmənt tuːl/',
    tags: ['第2479句', '工具管理', '★★★★★'],
    when: '工具损坏或丢失后，需要采购替代品。',
    words: [
      { w: 'replacement', ipa: '/rɪˈpleɪsmənt/', pos: '名词/形容词', cn: '替换品；替换的', memory: 'replace(替换)+ment(名词后缀)→替换的东西→替换品。', phonics: 're 读 /rɪ/，place 读 /pleɪs/，ment 读 /mənt/，重音在第二音节。', collocations: [['replacement tool', '替换工具'], ['replacement part', '替换零件'], ['order a replacement', '订购替换品']], examples: [['We need a replacement.', '我们需要一个替换品。'], ['Order a replacement unit.', '订购一台替换设备。']] },
    ],
    phrases: [
      { p: 'order a replacement', ipa: '/ˈɔːrdər ə rɪˈpleɪsmənt/', cn: '采购替换品', why: 'order 表示「订购/采购」，replacement 表示「替代品」。' },
    ],
    grammar: [
      { q: 'replacement 和 substitute 有什么区别？', a: 'replacement 指「永久替代原物的新物品」，替换后原物不再使用。\nsubstitute 指「临时替代品」，等原物恢复后还会换回来。\n✅ Order a replacement tool.（采购一件替换工具。）—— 永久替代\n✅ Use a substitute for now.（先用一个临时的。）—— 临时替代\n损坏/丢失后采购用 replacement。' },
    ],
    pattern: 'We need to order a replacement + 物品.',
    patternExamples: [
      { en: 'We need to order a replacement multimeter.', cn: '我们需要采购一台替换万用表。', words: [] },
      { en: 'We need to order a replacement battery.', cn: '我们需要采购一块替换电池。', words: [] },
      { en: 'We need to order a replacement sensor.', cn: '我们需要采购一个替换传感器。', words: [] },
    ],
    thinking: "工具损坏或丢失后需要及时采购替换品，确保运维不受影响。\nreplacement 强调永久替代，不是临时的。\n中文说「采购替换工具」，英语用 order a replacement tool 对应。",
    pronunciation: "replacement 重音在第二音节：re-PLACE-ment。\n节奏：We NEED ｜ to OR-der ｜ a re-PLACE-ment TOOL.",
    quiz: [
      { q: '把「我们需要采购一件替换工具。」用英语说出来。', a: 'We need to order a replacement tool.' },
      { q: '「替换品」用英语怎么说？', a: 'replacement (/rɪˈpleɪsmənt/)' },
    ],
  },
  {
    id: 2480,
    speaker: 'Manager',
    en: 'All tools have been accounted for.',
    cn: '所有工具都已经清点完成。',
    ipa: '/ɔːl tuːlz hæv biːn əˈkaʊntɪd fɔːr/',
    tags: ['第2480句', '工具管理', '★★★★★'],
    when: '工具清点完毕，确认所有工具都在位，无缺失。',
    words: [
      { w: 'accounted for', ipa: '/əˈkaʊntɪd fɔːr/', pos: '动词短语（过去分词）', cn: '已清点；已核实到位', memory: 'account(记账)+ed+for→已记入账目→已核实到位。', phonics: 'ac 读 /ə/，count 读 /kaʊnt/，ed 读 /ɪd/，for 读 /fɔːr/，重音在第二音节。', collocations: [['accounted for', '已清点'], ['all accounted for', '全部到位']], examples: [['All items are accounted for.', '所有物品已清点。'], ['Every tool has been accounted for.', '每件工具都已清点。']] },
    ],
    phrases: [
      { p: 'accounted for', ipa: '/əˈkaʊntɪd fɔːr/', cn: '已清点到位', why: 'account for 在管理语境中表示「对…负责、核实到位」，accounted for 表示已完成清点。' },
    ],
    grammar: [
      { q: 'accounted for 和 counted 有什么区别？', a: 'accounted for 强调「每件物品都已核实到位，无缺失」，包含确认和记录。\ncounted 仅表示「数了数量」，不保证是否齐全。\n✅ All tools have been accounted for.（所有工具都已清点完成。）—— 确认齐全\n✅ I counted 15 tools.（我数了15件工具。）—— 只数了数量\n工具管理完成时用 accounted for 更专业。' },
    ],
    pattern: 'All + 物品 + have/has been accounted for.',
    patternExamples: [
      { en: 'All equipment has been accounted for.', cn: '所有设备已清点完成。', words: [] },
      { en: 'All keys have been accounted for.', cn: '所有钥匙已清点完成。', words: [] },
      { en: 'All PPE items have been accounted for.', cn: '所有劳保用品已清点完成。', words: [] },
    ],
    thinking: "工具清点完成是交接和下班前的必要确认。\naccounted for 比 counted 更专业，表示「核实到位」。\n中文说「清点完成」，英语用 have been accounted for 对应。",
    pronunciation: "accounted 重音在第二音节：ac-COUNT-ed。\naccounted for 连读：a-COUNT-ed-FOR。\n节奏：ALL TOOLS ｜ have BEEN ｜ ac-COUNT-ed FOR.",
    quiz: [
      { q: '把「所有工具都已经清点完成。」用英语说出来。', a: 'All tools have been accounted for.' },
      { q: '「已清点到位」用英语怎么说？', a: 'accounted for (/əˈkaʊntɪd fɔːr/)' },
    ],
  },
];

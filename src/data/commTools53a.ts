// EXPORTS: MOCK_SENTENCES_COMMMTOOLS53A

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_COMMMTOOLS53A: ISentence[] = [
  {
    id: 2761,
    speaker: 'Engineer',
    en: 'Are you available for a quick call?',
    cn: '你现在方便接个电话吗？',
    ipa: '/ɑːr juː əˈveɪləbl fɔːr ə kwɪk kɔːl/',
    tags: ['第2761句', '电话沟通', '★★★'],
    when: '需要与同事电话沟通前，先确认对方是否方便接听。',
    words: [
      { w: 'available', ipa: '/əˈveɪləbl/', pos: '形容词', cn: '有空闲的；可用的', memory: 'avail(有效)+able(能够)→能够腾出时间的→有空的。', phonics: 'a 读 /ə/，vail 读 /veɪl/，able 读 /əbl/，重音在第二音节。', collocations: [['are you available', '你有空吗'], ['available now', '现在有空'], ['not available', '没空']], examples: [['Are you available tomorrow?', '你明天有空吗？'], ["I'm not available right now.", '我现在没空。']] },
      { w: 'quick', ipa: '/kwɪk/', pos: '形容词', cn: '快速的；简短的', memory: 'quick 表示时间短、速度快。', phonics: 'qu 读 /kw/，ick 读 /ɪk/，单音节。', collocations: [['quick call', '简短电话'], ['quick question', '简短问题'], ['quick look', '快速看一下']], examples: [["Let's have a quick call.", '我们打个简短电话吧。'], ['Just a quick question.', '就问一个简短的问题。']] },
    ],
    phrases: [
      { p: 'available for', ipa: '/əˈveɪləbl fɔːr/', cn: '有空做……', why: 'available for + 名词/动名词，表示有时间做某事。' },
      { p: 'a quick call', ipa: '/ə kwɪk kɔːl/', cn: '一个简短电话', why: 'quick call 暗示不会占用太多时间，降低对方的心理负担。' },
    ],
    grammar: [
      { q: 'Are you available 和 Can I call you 有什么区别？', a: "Are you available 更礼貌，把决定权交给对方。\nCan I call you 更直接，偏向请求许可。\n✅ Are you available for a quick call?（你方便接个电话吗？）—— 尊重对方时间\n✅ Can I call you now?（我现在能给你打电话吗？）—— 直接请求\n在数据中心，同事可能在现场操作，推荐用 Are you available。" },
    ],
    pattern: 'Are you available for a quick + 名词?',
    patternExamples: [
      { en: 'Are you available for a quick meeting?', cn: '你方便开个简短会议吗？', words: [] },
      { en: 'Are you available for a quick chat?', cn: '你方便简短聊一下吗？', words: [] },
      { en: 'Are you available for a quick review?', cn: '你方便快速审阅一下吗？', words: [] },
    ],
    thinking: "打电话前先确认对方是否方便是基本职场礼仪。\nAre you available for a quick call 是最常用的电话开场白。\n中文说「你现在方便接个电话吗」，英语用 Are you available for a quick call?",
    pronunciation: "available 重音在第二音节：a-VAIL-a-ble。\nquick 短促读 /kwɪk/。\n节奏：ARE you a-VAIL-a-ble ｜ for a QUICK CALL?",
    quiz: [
      { q: '把「你现在方便接个电话吗？」用英语说出来。', a: 'Are you available for a quick call?' },
      { q: '「有空做……」用英语怎么说？', a: 'available for (/əˈveɪləbl fɔːr/)' },
    ],
  },
  {
    id: 2762,
    speaker: 'Engineer',
    en: "I'll call you in a few minutes.",
    cn: '我几分钟后给你打电话。',
    ipa: '/aɪl kɔːl juː ɪn ə fjuː ˈmɪnɪts/',
    tags: ['第2762句', '电话沟通', '★★★'],
    when: '现在不方便，但承诺稍后回电时使用。',
    words: [
      { w: 'call', ipa: '/kɔːl/', pos: '动词', cn: '打电话', memory: 'call 在通讯语境中专指电话呼叫。', phonics: 'c 读 /k/，all 读 /ɔːl/，单音节。', collocations: [['call you back', '给你回电'], ['call me later', '稍后给我打电话'], ['make a call', '打个电话']], examples: [["I'll call you tomorrow.", '我明天给你打电话。'], ['Please call the vendor.', '请给供应商打电话。']] },
      { w: 'few', ipa: '/fjuː/', pos: '形容词', cn: '几个；少量的', memory: 'few 表示数量少，a few 表示「有一些」。', phonics: 'f 读 /f/，ew 读 /juː/，单音节。', collocations: [['a few minutes', '几分钟'], ['a few days', '几天'], ['a few times', '几次']], examples: [['Wait a few minutes.', '等几分钟。'], ['I need a few more days.', '我还需要几天。']] },
    ],
    phrases: [
      { p: "I'll call you", ipa: '/aɪl kɔːl juː/', cn: '我给你打电话', why: "I will call you 的缩写，表示承诺稍后打电话。" },
      { p: 'in a few minutes', ipa: '/ɪn ə fjuː ˈmɪnɪts/', cn: '几分钟后', why: 'in + 时间段，表示「在……之后」，用于将来时。' },
    ],
    grammar: [
      { q: 'in a few minutes 和 after a few minutes 有什么区别？', a: "in a few minutes 用于将来时，表示「几分钟之后就会发生」。\nafter a few minutes 用于过去时叙述，表示「过了几分钟之后」。\n✅ I'll call you in a few minutes.（我几分钟后给你打电话。）—— 将来\n✅ After a few minutes, the alarm cleared.（几分钟后，告警恢复了。）—— 过去叙述" },
    ],
    pattern: "I'll call you in + 时间段.",
    patternExamples: [
      { en: "I'll call you in five minutes.", cn: '我五分钟后给你打电话。', words: [] },
      { en: "I'll call you in an hour.", cn: '我一小时后给你打电话。', words: [] },
      { en: "I'll call you in the afternoon.", cn: '我下午给你打电话。', words: [] },
    ],
    thinking: "正在忙碌时告知对方稍后回电是常见的电话应对。\nI'll call you in a few minutes 既表达了意愿又给出了时间预期。\n中文说「我几分钟后给你打电话」，英语用 I'll call you in a few minutes。",
    pronunciation: "few 读 /fjuː/，minutes 重音在第一音节：MIN-utes。\n节奏：I'll CALL you ｜ in a FEW MIN-utes.",
    quiz: [
      { q: '把「我几分钟后给你打电话。」用英语说出来。', a: "I'll call you in a few minutes." },
      { q: '「几分钟后」用英语怎么说？', a: 'in a few minutes (/ɪn ə fjuː ˈmɪnɪts/)' },
    ],
  },
  {
    id: 2763,
    speaker: 'Engineer',
    en: "Could you call me back when you're free?",
    cn: '你有空的时候给我回个电话，好吗？',
    ipa: '/kʊd juː kɔːl miː bæk wɛn jʊər friː/',
    tags: ['第2763句', '电话沟通', '★★★'],
    when: '对方不方便时，礼貌请求对方空闲时回电。',
    words: [
      { w: 'back', ipa: '/bæk/', pos: '副词', cn: '回；返回', memory: 'call back 表示「回电」，back 强调返回方向。', phonics: 'b 读 /b/，ack 读 /æk/，单音节。', collocations: [['call back', '回电'], ['come back', '回来'], ['get back to', '回复']], examples: [['Please call me back.', '请给我回电。'], ["I'll get back to you.", '我会回复你的。']] },
      { w: 'free', ipa: '/friː/', pos: '形容词', cn: '空闲的；自由的', memory: 'free 表示没有占用、有空闲时间。', phonics: 'fr 读 /fr/，ee 读 /iː/，单音节。', collocations: [['when free', '有空时'], ['free time', '空闲时间'], ['are you free', '你有空吗']], examples: [["Are you free this afternoon?", '你今天下午有空吗？'], ["Call me when you're free.", '你有空给我打电话。']] },
    ],
    phrases: [
      { p: 'call me back', ipa: '/kɔːl miː bæk/', cn: '给我回电', why: 'call + 人 + back，表示请对方回电话。' },
      { p: "when you're free", ipa: '/wɛn jʊər friː/', cn: '你有空的时候', why: 'when 引导时间状语从句，free 表示空闲状态。' },
    ],
    grammar: [
      { q: 'Could you 和 Can you 有什么区别？', a: "Could you 更礼貌委婉，适合请求。\nCan you 更直接随意。\n✅ Could you call me back?（你能给我回个电话吗？）—— 礼貌请求\n✅ Can you call me?（你能给我打电话吗？）—— 直接请求\n对上级或不太熟的同事推荐用 Could you。" },
    ],
    pattern: 'Could you call me back when + 条件?',
    patternExamples: [
      { en: 'Could you call me back when you have time?', cn: '你有时间时能给我回个电话吗？', words: [] },
      { en: 'Could you call me back after lunch?', cn: '午饭后能给我回个电话吗？', words: [] },
      { en: 'Could you call me back tomorrow?', cn: '明天能给我回个电话吗？', words: [] },
    ],
    thinking: "请求回电时用 Could you 比 Can you 更得体。\nCould you call me back when you're free 既礼貌又给了对方灵活度。\n中文说「你有空的时候给我回个电话好吗」，英语用 Could you call me back when you're free?",
    pronunciation: "could 读 /kʊd/，free 长音 /friː/。\n节奏：COULD you ｜ CALL me BACK ｜ when you're FREE?",
    quiz: [
      { q: '把「你有空的时候给我回个电话，好吗？」用英语说出来。', a: "Could you call me back when you're free?" },
      { q: '「回电」用英语怎么说？', a: 'call back (/kɔːl bæk/)' },
    ],
  },
  {
    id: 2764,
    speaker: 'Engineer',
    en: "I'm in a meeting right now.",
    cn: '我现在正在开会。',
    ipa: '/aɪm ɪn ə ˈmiːtɪŋ raɪt naʊ/',
    tags: ['第2764句', '电话沟通', '★★★'],
    when: '接到电话但正在开会，需要简短说明当前状态。',
    words: [
      { w: 'meeting', ipa: '/ˈmiːtɪŋ/', pos: '名词', cn: '会议', memory: 'meet(见面)+ing→见面的活动→会议。', phonics: 'meet 读 /miːt/，ing 读 /ɪŋ/，重音在第一音节。', collocations: [['in a meeting', '在开会'], ['team meeting', '团队会议'], ['meeting room', '会议室']], examples: [["I'm in a meeting.", '我在开会。'], ['The meeting starts at 2.', '会议两点开始。']] },
      { w: 'right now', ipa: '/raɪt naʊ/', pos: '副词短语', cn: '现在；此刻', memory: 'right 加强语气，now 表示当前时间。', phonics: 'right 读 /raɪt/，now 读 /naʊ/。', collocations: [['right now', '此刻'], ['right here', '就在这里'], ['right away', '马上']], examples: [["I'm busy right now.", '我现在很忙。'], ['Do it right now.', '现在就做。']] },
    ],
    phrases: [
      { p: 'in a meeting', ipa: '/ɪn ə ˈmiːtɪŋ/', cn: '在开会', why: 'in a meeting 是表示当前状态的固定搭配。' },
      { p: 'right now', ipa: '/raɪt naʊ/', cn: '此刻', why: 'right now 比 now 更强调「就是现在这一刻」。' },
    ],
    grammar: [
      { q: "I'm in a meeting 和 I have a meeting 有什么区别？", a: "I'm in a meeting 强调「正在会议中」，当前状态。\nI have a meeting 强调「有一个会议安排」，可能是即将开始。\n✅ I'm in a meeting right now.（我现在正在开会。）—— 正在进行\n✅ I have a meeting at 3.（我三点有个会。）—— 将来安排" },
    ],
    pattern: "I'm in a + 活动 + right now.",
    patternExamples: [
      { en: "I'm in a call right now.", cn: '我现在正在通话中。', words: [] },
      { en: "I'm in a training right now.", cn: '我现在正在培训中。', words: [] },
      { en: "I'm in an inspection right now.", cn: '我现在正在巡检中。', words: [] },
    ],
    thinking: "开会时接到电话需要简短回复说明状态。\nI'm in a meeting right now 是最常用的简短拒接理由。\n中文说「我现在正在开会」，英语用 I'm in a meeting right now。",
    pronunciation: "meeting 重音在第一音节：MEET-ing。\nright now 两个词都短促。\n节奏：I'm in a MEET-ing ｜ RIGHT NOW.",
    quiz: [
      { q: '把「我现在正在开会。」用英语说出来。', a: "I'm in a meeting right now." },
      { q: '「在开会」用英语怎么说？', a: 'in a meeting (/ɪn ə ˈmiːtɪŋ/)' },
    ],
  },
  {
    id: 2765,
    speaker: 'Engineer',
    en: "I'll call you after the meeting.",
    cn: '我开完会给你打电话。',
    ipa: '/aɪl kɔːl juː ˈæftər ðə ˈmiːtɪŋ/',
    tags: ['第2765句', '电话沟通', '★★★'],
    when: '正在开会无法接听，告知对方会后会回电。',
    words: [
      { w: 'after', ipa: '/ˈæftər/', pos: '介词', cn: '在……之后', memory: 'after 表示时间上的先后关系。', phonics: 'af 读 /æf/，ter 读 /tər/，重音在第一音节。', collocations: [['after the meeting', '会后'], ['after work', '下班后'], ['after lunch', '午饭后']], examples: [["Let's talk after lunch.", '我们午饭后聊。'], ['Call me after 5.', '五点以后给我打电话。']] },
    ],
    phrases: [
      { p: 'after the meeting', ipa: '/ˈæftər ðə ˈmiːtɪŋ/', cn: '会议结束后', why: 'after + the meeting 明确指出回电的时间节点。' },
    ],
    grammar: [
      { q: "I'll call you after 和 I'll call you when 有什么区别？", a: "after 强调「在……之后」，时间点更明确。\nwhen 强调「当……的时候」，可能同时发生。\n✅ I'll call you after the meeting.（我开完会给你打电话。）—— 会议结束后\n✅ I'll call you when the meeting ends.（会议结束时我给你打电话。）—— 同一时间点\n两者意思接近，after 更简洁常用。" },
    ],
    pattern: "I'll call you after + 事件.",
    patternExamples: [
      { en: "I'll call you after lunch.", cn: '我午饭后给你打电话。', words: [] },
      { en: "I'll call you after the inspection.", cn: '我巡检完后给你打电话。', words: [] },
      { en: "I'll call you after my shift.", cn: '我下班后给你打电话。', words: [] },
    ],
    thinking: "开会时快速回复一句承诺会后回电，既不打断会议又让对方放心。\nI'll call you after the meeting 简洁明了。\n中文说「我开完会给你打电话」，英语用 I'll call you after the meeting。",
    pronunciation: "after 重音在第一音节：AF-ter。\n节奏：I'll CALL you ｜ AF-ter the MEET-ing.",
    quiz: [
      { q: '把「我开完会给你打电话。」用英语说出来。', a: "I'll call you after the meeting." },
      { q: '「会后」用英语怎么说？', a: 'after the meeting (/ˈæftər ðə ˈmiːtɪŋ/)' },
    ],
  },
  {
    id: 2766,
    speaker: 'Engineer',
    en: 'I missed your call earlier.',
    cn: '我刚才错过了你的电话。',
    ipa: '/aɪ mɪst jɔːr kɔːl ˈɜːrliər/',
    tags: ['第2766句', '电话沟通', '★★★'],
    when: '回电时向对方说明之前没接到电话。',
    words: [
      { w: 'missed', ipa: '/mɪst/', pos: '动词（过去式）', cn: '错过', memory: 'miss 的过去式，表示未能接到或赶上。', phonics: 'm 读 /m/，iss 读 /ɪs/，ed 读 /t/，单音节。', collocations: [['missed call', '未接来电'], ['miss the bus', '错过公交'], ['miss the deadline', '错过截止日期']], examples: [['I missed your message.', '我错过了你的消息。'], ['Sorry I missed the meeting.', '抱歉我错过了会议。']] },
      { w: 'earlier', ipa: '/ˈɜːrliər/', pos: '副词', cn: '稍早；之前', memory: 'early 的比较级，表示「更早一些」。', phonics: 'ear 读 /ɜːr/，li 读 /li/，er 读 /ər/，重音在第一音节。', collocations: [['earlier today', '今天早些时候'], ['a bit earlier', '稍早一点'], ['much earlier', '早得多']], examples: [['I saw him earlier.', '我之前看到他了。'], ['Can we meet earlier?', '我们能早点见面吗？']] },
    ],
    phrases: [
      { p: 'missed your call', ipa: '/mɪst jɔːr kɔːl/', cn: '错过了你的电话', why: 'miss + call 是描述未接来电的标准搭配。' },
      { p: 'earlier', ipa: '/ˈɜːrliər/', cn: '之前', why: 'earlier 修饰整个事件，说明是稍早发生的事。' },
    ],
    grammar: [
      { q: 'missed 和 missed out on 有什么区别？', a: "missed 直接表示「错过了」某个具体事物。\nmissed out on 表示「错过了（本可以参与的）机会/体验」。\n✅ I missed your call.（我错过了你的电话。）—— 直接错过\n✅ I missed out on the team lunch.（我错过了团队午餐。）—— 没能参与\n未接来电用 missed your call 即可。" },
    ],
    pattern: 'I missed your + 名词 + earlier.',
    patternExamples: [
      { en: 'I missed your message earlier.', cn: '我之前错过了你的消息。', words: [] },
      { en: 'I missed your email earlier.', cn: '我之前错过了你的邮件。', words: [] },
      { en: 'I missed your notification earlier.', cn: '我之前错过了你的通知。', words: [] },
    ],
    thinking: "回电时第一句话通常解释为什么之前没接到。\nI missed your call earlier 简洁说明情况。\n中文说「我刚才错过了你的电话」，英语用 I missed your call earlier。",
    pronunciation: "missed 读 /mɪst/，注意 ed 发 /t/ 音。\nearlier 重音在第一音节：EAR-li-er。\n节奏：I MISSED ｜ your CALL ｜ EAR-li-er.",
    quiz: [
      { q: '把「我刚才错过了你的电话。」用英语说出来。', a: 'I missed your call earlier.' },
      { q: '「未接来电」用英语怎么说？', a: 'missed call (/mɪst kɔːl/)' },
    ],
  },
  {
    id: 2767,
    speaker: 'Engineer',
    en: "Sorry, I couldn't answer because I was on site.",
    cn: '抱歉，我刚才在现场，没法接电话。',
    ipa: '/ˈsɒri aɪ ˈkʊdnt ˈɑːnsər bɪˈkɒz aɪ wɒz ɒn saɪt/',
    tags: ['第2767句', '电话沟通', '★★★★'],
    when: '回电时解释未能接听的具体原因——在现场操作。',
    words: [
      { w: 'answer', ipa: '/ˈɑːnsər/', pos: '动词', cn: '接听；回答', memory: 'answer 在电话语境中表示「接听电话」。', phonics: 'an 读 /ɑːn/，swer 读 /sər/，重音在第一音节。', collocations: [['answer the phone', '接电话'], ['answer the call', '接听呼叫'], ['no answer', '无人接听']], examples: [['Please answer the phone.', '请接电话。'], ['Nobody answered.', '没人接。']] },
      { w: 'site', ipa: '/saɪt/', pos: '名词', cn: '现场；工地', memory: 'site 指工作场所、施工现场。', phonics: 's 读 /s/，ite 读 /aɪt/，单音节。', collocations: [['on site', '在现场'], ['site visit', '现场访问'], ['construction site', '施工现场']], examples: [["I'm on site right now.", '我现在在现场。'], ['The site inspection is tomorrow.', '现场检查在明天。']] },
    ],
    phrases: [
      { p: "couldn't answer", ipa: '/ˈkʊdnt ˈɑːnsər/', cn: '没法接听', why: "could not answer 的缩写，表示过去无法做某事。" },
      { p: 'on site', ipa: '/ɒn saɪt/', cn: '在现场', why: 'on site 是运维场景高频用语，指在实际设备所在地。' },
    ],
    grammar: [
      { q: "couldn't 和 can't 在时态上有什么区别？", a: "couldn't 是过去时，描述过去某个时刻无法做某事。\ncan't 是现在时，描述当前无法做某事。\n✅ I couldn't answer because I was on site.（我刚才没法接，因为我在现场。）—— 过去\n✅ I can't answer right now.（我现在没法接。）—— 当前\n回电解释时用 couldn't。" },
    ],
    pattern: "Sorry, I couldn't + 动词 + because + 原因.",
    patternExamples: [
      { en: "Sorry, I couldn't reply because I was driving.", cn: '抱歉，我没法回复，因为在开车。', words: [] },
      { en: "Sorry, I couldn't join because the network was down.", cn: '抱歉，我没法加入，因为网络断了。', words: [] },
      { en: "Sorry, I couldn't attend because of the emergency.", cn: '抱歉，我没法参加，因为有紧急情况。', words: [] },
    ],
    thinking: "数据中心运维人员在现场操作时无法接电话是常事。\nSorry, I couldn't answer because I was on site 是标准的解释句式。\n中文说「抱歉我在现场没法接电话」，英语用 Sorry, I couldn't answer because I was on site。",
    pronunciation: "couldn't 读 /kʊdnt/，answer 重音在第一音节：AN-swer。\n因为 读 be-CAUSE。\n节奏：SOR-ry ｜ I COULD-n't AN-swer ｜ be-CAUSE I was on SITE.",
    quiz: [
      { q: '把「抱歉，我刚才在现场，没法接电话。」用英语说出来。', a: "Sorry, I couldn't answer because I was on site." },
      { q: '「在现场」用英语怎么说？', a: 'on site (/ɒn saɪt/)' },
    ],
  },
  {
    id: 2768,
    speaker: 'Engineer',
    en: 'The signal is weak here.',
    cn: '这里信号不太好。',
    ipa: '/ðə ˈsɪɡnl ɪz wiːk hɪər/',
    tags: ['第2768句', '电话沟通', '★★★'],
    when: '在数据中心机房内通话时信号不好，向对方说明。',
    words: [
      { w: 'signal', ipa: '/ˈsɪɡnl/', pos: '名词', cn: '信号', memory: 'signal 指手机或无线电接收到的通讯信号。', phonics: 'sig 读 /sɪɡ/，nal 读 /nl/，重音在第一音节。', collocations: [['weak signal', '信号弱'], ['no signal', '没有信号'], ['signal strength', '信号强度']], examples: [['The signal is strong here.', '这里信号很好。'], ['I lost the signal.', '我失去信号了。']] },
      { w: 'weak', ipa: '/wiːk/', pos: '形容词', cn: '弱的；微弱的', memory: 'weak 表示力量或强度不足。', phonics: 'w 读 /w/，eak 读 /iːk/，单音节。', collocations: [['weak signal', '信号弱'], ['weak password', '弱密码'], ['weak connection', '连接不稳定']], examples: [['The connection is weak.', '连接不稳定。'], ['My battery is weak.', '我电池快没电了。']] },
    ],
    phrases: [
      { p: 'signal is weak', ipa: '/ˈsɪɡnl ɪz wiːk/', cn: '信号弱', why: '描述手机信号不佳的标准表达。' },
    ],
    grammar: [
      { q: 'weak 和 bad 描述信号有什么区别？', a: "weak 更精确，专指信号强度低。\nbad 更笼统，可以指信号差或通话质量差。\n✅ The signal is weak.（信号弱。）—— 精确描述\n✅ The connection is bad.（连接不好。）—— 笼统描述\n技术场景中推荐用 weak。" },
    ],
    pattern: 'The signal is + 形容词 + here.',
    patternExamples: [
      { en: 'The signal is strong here.', cn: '这里信号很好。', words: [] },
      { en: 'The signal is terrible here.', cn: '这里信号非常差。', words: [] },
      { en: 'The signal is unstable here.', cn: '这里信号不稳定。', words: [] },
    ],
    thinking: "数据中心机房内金属墙壁会屏蔽信号，通话质量差是常见问题。\nThe signal is weak here 直接说明原因。\n中文说「这里信号不太好」，英语用 The signal is weak here。",
    pronunciation: "signal 重音在第一音节：SIG-nal。\nweak 长音 /wiːk/。\n节奏：The SIG-nal ｜ is WEAK ｜ HERE.",
    quiz: [
      { q: '把「这里信号不太好。」用英语说出来。', a: 'The signal is weak here.' },
      { q: '「信号弱」用英语怎么说？', a: 'weak signal (/wiːk ˈsɪɡnl/)' },
    ],
  },
  {
    id: 2769,
    speaker: 'Engineer',
    en: 'Can you hear me clearly now?',
    cn: '现在你能清楚听到我的声音吗？',
    ipa: '/kæn juː hɪər miː ˈklɪrli naʊ/',
    tags: ['第2769句', '电话沟通', '★★★'],
    when: '信号恢复或调整位置后，确认对方是否能听清。',
    words: [
      { w: 'clearly', ipa: '/ˈklɪrli/', pos: '副词', cn: '清楚地', memory: 'clear(清楚的)+ly(副词后缀)→清楚地。', phonics: 'clear 读 /klɪr/，ly 读 /li/，重音在第一音节。', collocations: [['hear clearly', '听清楚'], ['see clearly', '看清楚'], ['speak clearly', '说清楚']], examples: [['Can you see clearly?', '你能看清楚吗？'], ['Please speak clearly.', '请说清楚。']] },
      { w: 'hear', ipa: '/hɪər/', pos: '动词', cn: '听到', memory: 'hear 表示通过耳朵感知声音。', phonics: 'h 读 /h/，ear 读 /ɪər/，单音节。', collocations: [['hear me', '听到我'], ['hear you', '听到你'], ['can you hear', '你能听到吗']], examples: [["I can't hear you.", '我听不到你说什么。'], ['Can you hear the alarm?', '你能听到告警声吗？']] },
    ],
    phrases: [
      { p: 'hear me clearly', ipa: '/hɪər miː ˈklɪrli/', cn: '清楚听到我的声音', why: 'hear + 人 + clearly，确认通话清晰度。' },
    ],
    grammar: [
      { q: 'Can you hear me 和 Do you hear me 有什么区别？', a: "Can you hear me 询问「你能不能听到」，关注能力/可能性。\nDo you hear me 询问「你听到没有」，更直接有时带命令语气。\n✅ Can you hear me clearly?（你能清楚听到吗？）—— 礼貌确认\n✅ Do you hear me?（你听到了吗？）—— 可能显得不耐烦\n电话中推荐用 Can you hear me。" },
    ],
    pattern: 'Can you hear me + 副词 + now?',
    patternExamples: [
      { en: 'Can you hear me better now?', cn: '现在你能听得更清楚吗？', words: [] },
      { en: 'Can you hear me at all?', cn: '你完全听不到我吗？', words: [] },
      { en: 'Can you hear me on this side?', cn: '这边你能听到我吗？', words: [] },
    ],
    thinking: "调整位置或切换网络后需要确认通话质量。\nCan you hear me clearly now 是标准的确认句式。\n中文说「现在你能清楚听到我的声音吗」，英语用 Can you hear me clearly now?",
    pronunciation: "clearly 重音在第一音节：CLEAR-ly。\n节奏：CAN you ｜ HEAR me ｜ CLEAR-ly ｜ NOW?",
    quiz: [
      { q: '把「现在你能清楚听到我的声音吗？」用英语说出来。', a: 'Can you hear me clearly now?' },
      { q: '「清楚地」用英语怎么说？', a: 'clearly (/ˈklɪrli/)' },
    ],
  },
  {
    id: 2770,
    speaker: 'Engineer',
    en: 'The call was disconnected.',
    cn: '电话断线了。',
    ipa: '/ðə kɔːl wɒz ˌdɪskəˈnɛktɪd/',
    tags: ['第2770句', '电话沟通', '★★★'],
    when: '通话突然中断后回拨时说明原因。',
    words: [
      { w: 'disconnected', ipa: '/ˌdɪskəˈnɛktɪd/', pos: '动词（过去分词）', cn: '断开；断线', memory: 'dis(反)+connect(连接)+ed→断开连接。', phonics: 'dis 读 /dɪs/，con 读 /kə/，nect 读 /nɛkt/，ed 读 /ɪd/，重音在第三音节。', collocations: [['call disconnected', '电话断线'], ['disconnected from', '与……断开'], ['internet disconnected', '网络断开']], examples: [['The internet was disconnected.', '网络断了。'], ['We got disconnected.', '我们断线了。']] },
    ],
    phrases: [
      { p: 'was disconnected', ipa: '/wɒz ˌdɪskəˈnɛktɪd/', cn: '断线了', why: '被动语态，表示电话「被断开」，非人为挂断。' },
    ],
    grammar: [
      { q: 'disconnected 和 hung up 有什么区别？', a: "disconnected 表示非人为的断线（信号问题、网络故障）。\nhung up 表示人为挂断电话。\n✅ The call was disconnected.（电话断线了。）—— 非人为\n✅ I hung up the phone.（我挂了电话。）—— 主动行为\n回拨解释时用 disconnected 说明不是故意挂断。" },
    ],
    pattern: 'The call was + 过去分词.',
    patternExamples: [
      { en: 'The call was interrupted.', cn: '电话被打断了。', words: [] },
      { en: 'The call was cut off.', cn: '电话被切断了。', words: [] },
      { en: 'The call was dropped.', cn: '电话掉线了。', words: [] },
    ],
    thinking: "数据中心内通话断线很常见，回拨时需要说明情况。\nThe call was disconnected 是解释断线的标准用语。\n中文说「电话断线了」，英语用 The call was disconnected。",
    pronunciation: "disconnected 重音在第三音节：dis-con-NECT-ed。\n节奏：The CALL ｜ was dis-con-NECT-ed.",
    quiz: [
      { q: '把「电话断线了。」用英语说出来。', a: 'The call was disconnected.' },
      { q: '「断线」用英语怎么说？', a: 'disconnected (/ˌdɪskəˈnɛktɪd/)' },
    ],
  },
  {
    id: 2771,
    speaker: 'Engineer',
    en: "I'll send you a WhatsApp message.",
    cn: '我发 WhatsApp 给你。',
    ipa: '/aɪl sɛnd juː ə ˈwɒtsæp ˈmɛsɪdʒ/',
    tags: ['第2771句', 'WhatsApp', '★★★'],
    when: '需要发送文字或图片信息时，告知对方将通过 WhatsApp 联系。',
    words: [
      { w: 'send', ipa: '/sɛnd/', pos: '动词', cn: '发送', memory: 'send 表示把信息、物品传递给他人。', phonics: 's 读 /s/，end 读 /ɛnd/，单音节。', collocations: [['send a message', '发消息'], ['send a photo', '发照片'], ['send an email', '发邮件']], examples: [["I'll send it now.", '我现在就发。'], ['Please send me the report.', '请把报告发给我。']] },
      { w: 'message', ipa: '/ˈmɛsɪdʒ/', pos: '名词', cn: '消息；信息', memory: 'message 指通过任何渠道传递的信息。', phonics: 'mes 读 /mɛs/，sage 读 /ɪdʒ/，重音在第一音节。', collocations: [['text message', '文字消息'], ['voice message', '语音消息'], ['send a message', '发消息']], examples: [['I got your message.', '我收到你的消息了。'], ['Leave me a message.', '给我留个言。']] },
    ],
    phrases: [
      { p: 'send you a message', ipa: '/sɛnd juː ə ˈmɛsɪdʒ/', cn: '给你发消息', why: 'send + 人 + a message，双宾语结构。' },
      { p: 'WhatsApp message', ipa: '/ˈwɒtsæp ˈmɛsɪdʒ/', cn: 'WhatsApp 消息', why: '在马来西亚，WhatsApp 是最常用的即时通讯工具。' },
    ],
    grammar: [
      { q: 'send you a message 和 send a message to you 有什么区别？', a: "两者意思完全相同，只是结构不同。\nsend you a message 是双宾语结构（更简洁）。\nsend a message to you 是介词结构（更正式）。\n✅ I'll send you a message. —— 口语推荐\n✅ I'll send a message to you. —— 都可以\n日常对话推荐双宾语结构。" },
    ],
    pattern: "I'll send you a + 通讯平台 + message.",
    patternExamples: [
      { en: "I'll send you a Teams message.", cn: '我发 Teams 消息给你。', words: [] },
      { en: "I'll send you a text message.", cn: '我发短信给你。', words: [] },
      { en: "I'll send you an email.", cn: '我发邮件给你。', words: [] },
    ],
    thinking: "在马来西亚，WhatsApp 是工作沟通的重要工具。\nI'll send you a WhatsApp message 明确告知通讯渠道。\n中文说「我发 WhatsApp 给你」，英语用 I'll send you a WhatsApp message。",
    pronunciation: "WhatsApp 读 /wɒtsæp/，重音在第一音节。\nmessage 重音在第一音节：MES-sage。\n节奏：I'll SEND you ｜ a WHATS-app MES-sage.",
    quiz: [
      { q: '把「我发 WhatsApp 给你。」用英语说出来。', a: "I'll send you a WhatsApp message." },
      { q: '「发消息」用英语怎么说？', a: 'send a message (/sɛnd ə ˈmɛsɪdʒ/)' },
    ],
  },
  {
    id: 2772,
    speaker: 'Engineer',
    en: 'Please check your WhatsApp.',
    cn: '请查看一下你的 WhatsApp。',
    ipa: '/pliːz tʃɛk jɔːr ˈwɒtsæp/',
    tags: ['第2772句', 'WhatsApp', '★★★'],
    when: '已发送信息，提醒对方查看。',
    words: [
      { w: 'check', ipa: '/tʃɛk/', pos: '动词', cn: '查看；检查', memory: 'check 表示查看、核实某事。', phonics: 'ch 读 /tʃ/，eck 读 /ɛk/，单音节。', collocations: [['check your phone', '看手机'], ['check the email', '查邮件'], ['check the status', '检查状态']], examples: [['Please check the alarm.', '请查看告警。'], ['Let me check.', '让我查一下。']] },
    ],
    phrases: [
      { p: 'check your WhatsApp', ipa: '/tʃɛk jɔːr ˈwɒtsæp/', cn: '查看你的 WhatsApp', why: '提醒对方查看已发送的消息。' },
    ],
    grammar: [
      { q: 'check 和 look at 有什么区别？', a: "check 强调「核实、查看是否有新内容」。\nlook at 强调「看某个具体的东西」。\n✅ Check your WhatsApp.（看看你的 WhatsApp。）—— 查看是否有新消息\n✅ Look at this photo.（看看这张照片。）—— 看具体事物\n提醒对方查看消息用 check。" },
    ],
    pattern: 'Please check your + 平台/设备.',
    patternExamples: [
      { en: 'Please check your email.', cn: '请查看你的邮件。', words: [] },
      { en: 'Please check your Teams.', cn: '请查看你的 Teams。', words: [] },
      { en: 'Please check your phone.', cn: '请查看你的手机。', words: [] },
    ],
    thinking: "发完消息后提醒对方查看是常见操作。\nPlease check your WhatsApp 简洁直接。\n中文说「请查看一下你的 WhatsApp」，英语用 Please check your WhatsApp。",
    pronunciation: "check 短促读 /tʃɛk/。\n节奏：Please CHECK ｜ your WHATS-app.",
    quiz: [
      { q: '把「请查看一下你的 WhatsApp。」用英语说出来。', a: 'Please check your WhatsApp.' },
      { q: '「查看」用英语怎么说？', a: 'check (/tʃɛk/)' },
    ],
  },
  {
    id: 2773,
    speaker: 'Engineer',
    en: 'I sent you the location.',
    cn: '我已经把定位发给你了。',
    ipa: '/aɪ sɛnt juː ðə loʊˈkeɪʃn/',
    tags: ['第2773句', 'WhatsApp', '★★★'],
    when: '通过 WhatsApp 分享位置后告知对方。',
    words: [
      { w: 'location', ipa: '/loʊˈkeɪʃn/', pos: '名词', cn: '位置；定位', memory: 'locate(定位)+ion(名词后缀)→位置信息。', phonics: 'lo 读 /loʊ/，ca 读 /keɪ/，tion 读 /ʃn/，重音在第二音节。', collocations: [['share location', '分享位置'], ['current location', '当前位置'], ['location pin', '定位标记']], examples: [['Send me your location.', '把你的位置发给我。'], ['What is the location?', '位置在哪？']] },
      { w: 'sent', ipa: '/sɛnt/', pos: '动词（过去式）', cn: '发送了', memory: 'send 的过去式，表示已经发出。', phonics: 's 读 /s/，ent 读 /ɛnt/，单音节。', collocations: [['sent already', '已经发了'], ['just sent', '刚发了'], ['sent to', '发给']], examples: [['I sent the email.', '我发了邮件。'], ['It was sent yesterday.', '昨天发的。']] },
    ],
    phrases: [
      { p: 'sent you the location', ipa: '/sɛnt juː ðə loʊˈkeɪʃn/', cn: '把定位发给你了', why: 'send + 人 + the location，告知已分享位置信息。' },
    ],
    grammar: [
      { q: 'I sent 和 I have sent 有什么区别？', a: "I sent 是一般过去时，强调动作已完成。\nI have sent 是现在完成时，强调对现在的影响。\n✅ I sent you the location.（我把定位发给你了。）—— 口语简洁\n✅ I have sent you the location.（我已经把定位发给你了。）—— 强调已完成\n日常对话两者都可以，I sent 更简洁。" },
    ],
    pattern: 'I sent you the + 名词.',
    patternExamples: [
      { en: 'I sent you the photo.', cn: '我把照片发给你了。', words: [] },
      { en: 'I sent you the document.', cn: '我把文件发给你了。', words: [] },
      { en: 'I sent you the link.', cn: '我把链接发给你了。', words: [] },
    ],
    thinking: "分享位置后告知对方是常见操作。\nI sent you the location 简洁确认。\n中文说「我已经把定位发给你了」，英语用 I sent you the location。",
    pronunciation: "location 重音在第二音节：lo-CA-tion。\nsent 短促读 /sɛnt/。\n节奏：I SENT you ｜ the lo-CA-tion.",
    quiz: [
      { q: '把「我已经把定位发给你了。」用英语说出来。', a: 'I sent you the location.' },
      { q: '「定位」用英语怎么说？', a: 'location (/loʊˈkeɪʃn/)' },
    ],
  },
  {
    id: 2774,
    speaker: 'Engineer',
    en: 'Please share your live location.',
    cn: '请分享你的实时位置。',
    ipa: '/pliːz ʃɛər jɔːr laɪv loʊˈkeɪʃn/',
    tags: ['第2774句', 'WhatsApp', '★★★'],
    when: '需要追踪同事的实时位置，如协调现场支援时。',
    words: [
      { w: 'share', ipa: '/ʃɛər/', pos: '动词', cn: '分享', memory: 'share 表示与他人共用信息或物品。', phonics: 'sh 读 /ʃ/，are 读 /ɛər/，单音节。', collocations: [['share location', '分享位置'], ['share a file', '分享文件'], ['share a screen', '共享屏幕']], examples: [['Can you share the document?', '你能分享文件吗？'], ['Let me share my screen.', '让我共享屏幕。']] },
      { w: 'live', ipa: '/laɪv/', pos: '形容词', cn: '实时的；现场的', memory: 'live 在技术语境中表示「实时的」。', phonics: 'l 读 /l/，ive 读 /aɪv/，单音节。', collocations: [['live location', '实时位置'], ['live stream', '直播'], ['live data', '实时数据']], examples: [['Share your live location.', '分享你的实时位置。'], ['The data is live.', '数据是实时的。']] },
    ],
    phrases: [
      { p: 'share your live location', ipa: '/ʃɛər jɔːr laɪv loʊˈkeɪʃn/', cn: '分享你的实时位置', why: 'live location 是 WhatsApp 的实时位置共享功能。' },
    ],
    grammar: [
      { q: 'live location 和 current location 有什么区别？', a: "live location 是动态更新的实时位置，持续共享。\ncurrent location 是当前这一时刻的位置，静态的。\n✅ Share your live location.（分享你的实时位置。）—— 持续跟踪\n✅ Send your current location.（发你当前位置。）—— 单次发送\n需要跟踪对方移动时用 live location。" },
    ],
    pattern: 'Please share your + 形容词 + 名词.',
    patternExamples: [
      { en: 'Please share your contact info.', cn: '请分享你的联系信息。', words: [] },
      { en: 'Please share your screen.', cn: '请共享你的屏幕。', words: [] },
      { en: 'Please share your availability.', cn: '请分享你的可用时间。', words: [] },
    ],
    thinking: "协调现场支援时，实时位置共享非常实用。\nPlease share your live location 直接请求对方开启位置共享。\n中文说「请分享你的实时位置」，英语用 Please share your live location。",
    pronunciation: "live 在这里读 /laɪv/（形容词），不是 /lɪv/（动词）。\nlocation 重音在第二音节。\n节奏：Please SHARE ｜ your LIVE ｜ lo-CA-tion.",
    quiz: [
      { q: '把「请分享你的实时位置。」用英语说出来。', a: 'Please share your live location.' },
      { q: '「实时位置」用英语怎么说？', a: 'live location (/laɪv loʊˈkeɪʃn/)' },
    ],
  },
  {
    id: 2775,
    speaker: 'Engineer',
    en: 'I sent you a photo of the equipment.',
    cn: '我发了一张设备照片给你。',
    ipa: '/aɪ sɛnt juː ə ˈfoʊtoʊ ɒv ðə ɪˈkwɪpmənt/',
    tags: ['第2775句', 'WhatsApp', '★★★'],
    when: '在现场拍摄设备状态照片后发送给同事。',
    words: [
      { w: 'photo', ipa: '/ˈfoʊtoʊ/', pos: '名词', cn: '照片', memory: 'photo 是 photograph 的缩写形式。', phonics: 'pho 读 /foʊ/，to 读 /toʊ/，重音在第一音节。', collocations: [['take a photo', '拍照'], ['send a photo', '发照片'], ['photo of', '……的照片']], examples: [['Take a photo of the panel.', '拍一张面板的照片。'], ['I got the photo.', '我收到照片了。']] },
      { w: 'equipment', ipa: '/ɪˈkwɪpmənt/', pos: '名词', cn: '设备；装备', memory: 'equip(装备)+ment(名词后缀)→设备。', phonics: 'e 读 /ɪ/，quip 读 /kwɪp/，ment 读 /mənt/，重音在第二音节。', collocations: [['electrical equipment', '电气设备'], ['cooling equipment', '冷却设备'], ['equipment status', '设备状态']], examples: [['Check the equipment.', '检查设备。'], ['The equipment is running.', '设备在运行。']] },
    ],
    phrases: [
      { p: 'a photo of', ipa: '/ə ˈfoʊtoʊ ɒv/', cn: '一张……的照片', why: 'photo of + 对象，说明照片的内容。' },
      { p: 'the equipment', ipa: '/ði ɪˈkwɪpmənt/', cn: '设备', why: 'the 指定具体的设备，而非泛指。' },
    ],
    grammar: [
      { q: 'photo of 和 photo for 有什么区别？', a: "photo of 表示照片「内容是什么」。\nphoto for 表示照片「为了什么目的」。\n✅ A photo of the equipment.（设备的照片。）—— 内容是设备\n✅ A photo for the report.（用于报告的照片。）—— 目的是报告\n描述照片内容用 of。" },
    ],
    pattern: 'I sent you a photo of the + 对象.',
    patternExamples: [
      { en: 'I sent you a photo of the alarm panel.', cn: '我发了告警面板的照片给你。', words: [] },
      { en: 'I sent you a photo of the damaged cable.', cn: '我发了损坏电缆的照片给你。', words: [] },
      { en: 'I sent you a photo of the temperature reading.', cn: '我发了温度读数的照片给你。', words: [] },
    ],
    thinking: "在现场拍照发给同事是日常运维操作。\nI sent you a photo of the equipment 告知已发送设备照片。\n中文说「我发了一张设备照片给你」，英语用 I sent you a photo of the equipment。",
    pronunciation: "equipment 重音在第二音节：e-QUIP-ment。\nphoto 重音在第一音节：PHO-to。\n节奏：I SENT you ｜ a PHO-to ｜ of the e-QUIP-ment.",
    quiz: [
      { q: '把「我发了一张设备照片给你。」用英语说出来。', a: 'I sent you a photo of the equipment.' },
      { q: '「设备」用英语怎么说？', a: 'equipment (/ɪˈkwɪpmənt/)' },
    ],
  },
  {
    id: 2776,
    speaker: 'Engineer',
    en: 'Please send me a video of the alarm.',
    cn: '请发一段告警现场的视频给我。',
    ipa: '/pliːz sɛnd miː ə ˈvɪdioʊ ɒv ðə əˈlɑːrm/',
    tags: ['第2776句', 'WhatsApp', '★★★'],
    when: '需要同事拍摄告警现场视频以便远程判断情况。',
    words: [
      { w: 'video', ipa: '/ˈvɪdioʊ/', pos: '名词', cn: '视频', memory: 'video 指动态影像记录。', phonics: 'vid 读 /vɪd/，eo 读 /ioʊ/，重音在第一音节。', collocations: [['take a video', '拍视频'], ['send a video', '发视频'], ['video call', '视频通话']], examples: [['Send me the video.', '把视频发给我。'], ['I recorded a video.', '我录了一段视频。']] },
      { w: 'alarm', ipa: '/əˈlɑːrm/', pos: '名词', cn: '告警；警报', memory: 'alarm 在数据中心指系统发出的告警信号。', phonics: 'a 读 /ə/，larm 读 /lɑːrm/，重音在第二音节。', collocations: [['critical alarm', '严重告警'], ['alarm panel', '告警面板'], ['alarm status', '告警状态']], examples: [['The alarm is active.', '告警仍然活动。'], ['Clear the alarm.', '清除告警。']] },
    ],
    phrases: [
      { p: 'send me a video', ipa: '/sɛnd miː ə ˈvɪdioʊ/', cn: '发一段视频给我', why: 'send + 人 + a video，请求对方发送视频。' },
      { p: 'of the alarm', ipa: '/ɒv ðə əˈlɑːrm/', cn: '告警的', why: '说明视频内容是关于告警现场的。' },
    ],
    grammar: [
      { q: 'Please send me 和 Can you send me 有什么区别？', a: "Please send me 是直接但有礼貌的请求。\nCan you send me 是询问对方能否做到。\n✅ Please send me a video.（请发视频给我。）—— 直接请求\n✅ Can you send me a video?（你能发视频给我吗？）—— 询问能力\n紧急情况下用 Please send me 更高效。" },
    ],
    pattern: 'Please send me a + 内容类型 + of the + 对象.',
    patternExamples: [
      { en: 'Please send me a photo of the display.', cn: '请发显示屏的照片给我。', words: [] },
      { en: 'Please send me a screenshot of the error.', cn: '请发错误的截图给我。', words: [] },
      { en: 'Please send me a recording of the sound.', cn: '请发声音的录音给我。', words: [] },
    ],
    thinking: "远程判断告警情况时，视频比照片更有价值。\nPlease send me a video of the alarm 直接请求视频。\n中文说「请发一段告警现场的视频给我」，英语用 Please send me a video of the alarm。",
    pronunciation: "video 重音在第一音节：VID-e-o。\nalarm 重音在第二音节：a-LARM。\n节奏：Please SEND me ｜ a VID-e-o ｜ of the a-LARM.",
    quiz: [
      { q: '把「请发一段告警现场的视频给我。」用英语说出来。', a: 'Please send me a video of the alarm.' },
      { q: '「告警」用英语怎么说？', a: 'alarm (/əˈlɑːrm/)' },
    ],
  },
  {
    id: 2777,
    speaker: 'Engineer',
    en: "I didn't receive your message.",
    cn: '我没有收到你的消息。',
    ipa: '/aɪ ˈdɪdnt rɪˈsiːv jɔːr ˈmɛsɪdʒ/',
    tags: ['第2777句', 'WhatsApp', '★★★'],
    when: '对方说已发消息但你没有收到时回复。',
    words: [
      { w: 'receive', ipa: '/rɪˈsiːv/', pos: '动词', cn: '收到；接收', memory: 're(回)+ceive(拿)→拿到→收到。', phonics: 're 读 /rɪ/，ceive 读 /siːv/，重音在第二音节。', collocations: [['receive a message', '收到消息'], ['receive a file', '收到文件'], ['receive a notification', '收到通知']], examples: [['Did you receive it?', '你收到了吗？'], ["I haven't received it yet.", '我还没收到。']] },
    ],
    phrases: [
      { p: "didn't receive", ipa: '/ˈdɪdnt rɪˈsiːv/', cn: '没有收到', why: "did not receive 的缩写，否定过去时。" },
    ],
    grammar: [
      { q: "didn't receive 和 haven't received 有什么区别？", a: "didn't receive 是一般过去时否定，强调过去没收到。\nhaven't received 是现在完成时否定，强调到现在为止还没收到。\n✅ I didn't receive your message.（我没收到你的消息。）—— 简单说明\n✅ I haven't received your message yet.（我还没收到你的消息。）—— 强调至今\n两者都正确，haven't received + yet 更强调等待中。" },
    ],
    pattern: "I didn't receive your + 名词.",
    patternExamples: [
      { en: "I didn't receive your email.", cn: '我没收到你的邮件。', words: [] },
      { en: "I didn't receive your file.", cn: '我没收到你的文件。', words: [] },
      { en: "I didn't receive your photo.", cn: '我没收到你的照片。', words: [] },
    ],
    thinking: "消息发送失败在信号不好的数据中心很常见。\nI didn't receive your message 直接说明情况。\n中文说「我没有收到你的消息」，英语用 I didn't receive your message。",
    pronunciation: "receive 重音在第二音节：re-CEIVE。注意 ie 读 /iː/。\n节奏：I DID-n't ｜ re-CEIVE ｜ your MES-sage.",
    quiz: [
      { q: '把「我没有收到你的消息。」用英语说出来。', a: "I didn't receive your message." },
      { q: '「收到」用英语怎么说？', a: 'receive (/rɪˈsiːv/)' },
    ],
  },
  {
    id: 2778,
    speaker: 'Engineer',
    en: 'Could you send it again?',
    cn: '你能再发一次吗？',
    ipa: '/kʊd juː sɛnd ɪt əˈɡɛn/',
    tags: ['第2778句', 'WhatsApp', '★★★'],
    when: '没有收到消息或文件时，请对方重新发送。',
    words: [
      { w: 'again', ipa: '/əˈɡɛn/', pos: '副词', cn: '再次', memory: 'again 表示重复做某事。', phonics: 'a 读 /ə/，gain 读 /ɡɛn/，重音在第二音节。', collocations: [['send again', '重发'], ['try again', '重试'], ['once again', '再一次']], examples: [['Please try again.', '请再试一次。'], ['Say it again.', '再说一遍。']] },
    ],
    phrases: [
      { p: 'send it again', ipa: '/sɛnd ɪt əˈɡɛn/', cn: '再发一次', why: 'send + it + again，请求重新发送。' },
    ],
    grammar: [
      { q: 'send it again 和 resend 有什么区别？', a: "send it again 是口语化表达，三个词组合。\nresend 是一个词，更简洁正式。\n✅ Could you send it again?（你能再发一次吗？）—— 口语\n✅ Could you resend it?（你能重发吗？）—— 简洁\n日常对话两者都可以，resend 更简洁。" },
    ],
    pattern: 'Could you + 动词 + it again?',
    patternExamples: [
      { en: 'Could you say it again?', cn: '你能再说一次吗？', words: [] },
      { en: 'Could you check it again?', cn: '你能再检查一下吗？', words: [] },
      { en: 'Could you try it again?', cn: '你能再试一次吗？', words: [] },
    ],
    thinking: "没收到消息时请对方重发是常见需求。\nCould you send it again 礼貌地请求重发。\n中文说「你能再发一次吗」，英语用 Could you send it again?",
    pronunciation: "again 重音在第二音节：a-GAIN。\n节奏：COULD you ｜ SEND it ｜ a-GAIN?",
    quiz: [
      { q: '把「你能再发一次吗？」用英语说出来。', a: 'Could you send it again?' },
      { q: '「再次」用英语怎么说？', a: 'again (/əˈɡɛn/)' },
    ],
  },
  {
    id: 2779,
    speaker: 'Engineer',
    en: 'Thanks, I received it.',
    cn: '谢谢，我收到了。',
    ipa: '/θæŋks aɪ rɪˈsiːvd ɪt/',
    tags: ['第2779句', 'WhatsApp', '★★★'],
    when: '确认已收到对方发送的消息或文件。',
    words: [
      { w: 'received', ipa: '/rɪˈsiːvd/', pos: '动词（过去式）', cn: '收到了', memory: 'receive 的过去式，表示已经完成接收。', phonics: 're 读 /rɪ/，ceive 读 /siːv/，d 读 /d/，重音在第二音节。', collocations: [['received and confirmed', '收到并确认'], ['message received', '消息已收到'], ['well received', '反响良好']], examples: [['I received the file.', '我收到了文件。'], ['Your message was received.', '你的消息已收到。']] },
    ],
    phrases: [
      { p: 'I received it', ipa: '/aɪ rɪˈsiːvd ɪt/', cn: '我收到了', why: '简洁确认已收到对方发送的内容。' },
    ],
    grammar: [
      { q: 'I received it 和 I got it 有什么区别？', a: "I received it 更正式。\nI got it 更口语化。\n✅ Thanks, I received it.（谢谢，我收到了。）—— 正式\n✅ Got it, thanks.（收到了，谢谢。）—— 口语\n工作场合两者都可以，received 更正式。" },
    ],
    pattern: 'Thanks, I received + 名词/代词.',
    patternExamples: [
      { en: 'Thanks, I received the file.', cn: '谢谢，我收到了文件。', words: [] },
      { en: 'Thanks, I received the photo.', cn: '谢谢，我收到了照片。', words: [] },
      { en: 'Thanks, I received the report.', cn: '谢谢，我收到了报告。', words: [] },
    ],
    thinking: "收到消息后及时确认是良好的沟通习惯。\nThanks, I received it 简洁有礼。\n中文说「谢谢，我收到了」，英语用 Thanks, I received it。",
    pronunciation: "received 重音在第二音节：re-CEIVED。\n节奏：THANKS ｜ I re-CEIVED ｜ IT.",
    quiz: [
      { q: '把「谢谢，我收到了。」用英语说出来。', a: 'Thanks, I received it.' },
      { q: '「收到了」用英语怎么说？', a: 'received it (/rɪˈsiːvd ɪt/)' },
    ],
  },
  {
    id: 2780,
    speaker: 'Engineer',
    en: "I'll reply as soon as I can.",
    cn: '我会尽快回复你。',
    ipa: '/aɪl rɪˈplaɪ æz suːn æz aɪ kæn/',
    tags: ['第2780句', 'WhatsApp', '★★★★'],
    when: '收到消息但暂时无法详细回复时，承诺尽快回应。',
    words: [
      { w: 'reply', ipa: '/rɪˈplaɪ/', pos: '动词', cn: '回复', memory: 're(回)+ply(折)→折回去→回复。', phonics: 're 读 /rɪ/，ply 读 /plaɪ/，重音在第二音节。', collocations: [['reply to', '回复'], ['quick reply', '快速回复'], ['no reply', '没有回复']], examples: [["I'll reply later.", '我稍后回复。'], ['Please reply by email.', '请通过邮件回复。']] },
      { w: 'soon', ipa: '/suːn/', pos: '副词', cn: '很快；不久', memory: 'soon 表示在短时间之内。', phonics: 's 读 /s/，oon 读 /uːn/，单音节。', collocations: [['as soon as', '一……就……'], ['very soon', '很快'], ['soon after', '不久之后']], examples: [['See you soon.', '很快见。'], ['I hope it comes soon.', '希望它快点来。']] },
    ],
    phrases: [
      { p: 'as soon as I can', ipa: '/æz suːn æz aɪ kæn/', cn: '尽快', why: 'as...as 结构表示「尽可能……」，I can 表示能力范围内。' },
      { p: "I'll reply", ipa: '/aɪl rɪˈplaɪ/', cn: '我会回复', why: "I will reply 的缩写，承诺回复。" },
    ],
    grammar: [
      { q: 'as soon as I can 和 as soon as possible 有什么区别？', a: "两者意思相同，都表示「尽快」。\nas soon as I can 更个人化，强调「我能力范围内」。\nas soon as possible (ASAP) 更正式通用。\n✅ I'll reply as soon as I can.（我会尽快回复。）—— 个人承诺\n✅ Please respond as soon as possible.（请尽快回复。）—— 正式请求\n日常对话两者都可以。" },
    ],
    pattern: "I'll + 动词 + as soon as I can.",
    patternExamples: [
      { en: "I'll check as soon as I can.", cn: '我会尽快检查。', words: [] },
      { en: "I'll finish it as soon as I can.", cn: '我会尽快完成。', words: [] },
      { en: "I'll get back to you as soon as I can.", cn: '我会尽快回复你。', words: [] },
    ],
    thinking: "收到消息但暂时无法详细回复时，承诺尽快回应是良好的职业习惯。\nI'll reply as soon as I can 表达了诚意。\n中文说「我会尽快回复你」，英语用 I'll reply as soon as I can。",
    pronunciation: "reply 重音在第二音节：re-PLY。\nas soon as 连读为 /æz suːn æz/。\n节奏：I'll re-PLY ｜ as SOON ｜ as I CAN.",
    quiz: [
      { q: '把「我会尽快回复你。」用英语说出来。', a: "I'll reply as soon as I can." },
      { q: '「尽快」用英语怎么说？', a: 'as soon as I can (/æz suːn æz aɪ kæn/) 或 as soon as possible' },
    ],
  },
];

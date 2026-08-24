// EXPORTS: MOCK_SENTENCES_MEETINGROOM47B

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_MEETINGROOM47B: ISentence[] = [
  {
    id: 2541,
    speaker: 'Engineer',
    en: 'The internet connection is unstable.',
    cn: '网络连接不稳定。',
    ipa: '/ðə ˈɪntərnet kəˈnɛkʃən ɪz ʌnˈsteɪbl/',
    tags: ['第2541句', '网络问题', '★★★★'],
    when: '视频会议中画面卡顿，向同事说明网络状况。',
    words: [
      { w: 'internet', ipa: '/ˈɪntərnet/', pos: '名词', cn: '互联网', memory: 'inter(互相)+net(网络)→互相连接的网络。', phonics: 'in 读 /ɪn/，ter 读 /tər/，net 读 /nɛt/。', collocations: [['internet connection', '网络连接'], ['internet speed', '网速']], examples: [['The internet is slow today.', '今天网速很慢。'], ['We lost the internet connection.', '我们断了网。']] },
      { w: 'unstable', ipa: '/ʌnˈsteɪbl/', pos: '形容词', cn: '不稳定的', memory: 'un(不)+stable(稳定的)→不稳定。', phonics: 'un 读 /ʌn/，sta 读 /steɪ/，ble 读 /bl/。', collocations: [['unstable connection', '不稳定的连接'], ['unstable power supply', '不稳定的电源']], examples: [['The voltage is unstable.', '电压不稳定。'], ['The system is unstable.', '系统不稳定。']] },
    ],
    phrases: [
      { p: 'internet connection', ipa: '/ˈɪntərnet kəˈnɛkʃən/', cn: '网络连接', why: '指设备与互联网之间的通信链路，视频会议中最常提到的术语。' },
      { p: 'is unstable', ipa: '/ɪz ʌnˈsteɪbl/', cn: '不稳定', why: 'is + 形容词，描述当前状态。' },
    ],
    grammar: [
      { q: '为什么用 unstable 而不是 not stable？', a: 'unstable 是一个独立形容词，比 not stable 更简洁正式。\n✅ The connection is unstable.（连接不稳定。）—— 简洁、专业\n✅ The connection is not stable.（连接不稳定。）—— 口语化、略冗长\n技术场景推荐用 unstable。' },
    ],
    pattern: 'The + 名词 + is unstable.',
    patternExamples: [
      { en: 'The power supply is unstable.', cn: '电源供应不稳定。', words: [] },
      { en: 'The temperature is unstable.', cn: '温度不稳定。', words: [] },
      { en: 'The signal is unstable.', cn: '信号不稳定。', words: [] },
    ],
    thinking: '视频会议中网络问题是最常见的干扰因素。\nThe internet connection is unstable 直接说明网络状态。\n中文说「网络连接不稳定」，英语用 The internet connection is unstable。',
    pronunciation: 'internet 重音在第一音节：IN-ter-net。\nunstable 重音在第二音节：un-STA-ble。\n节奏：The IN-ter-net ｜ con-NEC-tion ｜ is un-STA-ble.',
    quiz: [
      { q: '把「网络连接不稳定。」用英语说出来。', a: 'The internet connection is unstable.' },
      { q: '「不稳定的」用英语怎么说？', a: 'unstable (/ʌnˈsteɪbl/)' },
    ],
  },
  {
    id: 2542,
    speaker: 'Engineer',
    en: 'The video is frozen.',
    cn: '视频画面卡住了。',
    ipa: '/ðə ˈvɪdiəʊ ɪz ˈfrəʊzən/',
    tags: ['第2542句', '网络问题', '★★★★'],
    when: '视频会议中对方画面停止不动，提醒对方。',
    words: [
      { w: 'video', ipa: '/ˈvɪdiəʊ/', pos: '名词', cn: '视频', memory: 'vid(看)+eo(名词后缀)→可以看的影像。', phonics: 'vid 读 /vɪd/，e 读 /i/，o 读 /əʊ/。', collocations: [['video call', '视频通话'], ['video conference', '视频会议'], ['video quality', '视频质量']], examples: [['The video quality is poor.', '视频质量很差。'], ['Start the video.', '开始视频。']] },
      { w: 'frozen', ipa: '/ˈfrəʊzən/', pos: '形容词（过去分词）', cn: '冻结的；卡住的', memory: 'freeze(冻结)的过去分词，形容画面停止不动。', phonics: 'fro 读 /frəʊ/，zen 读 /zən/。', collocations: [['screen is frozen', '屏幕卡住'], ['video is frozen', '视频卡住']], examples: [['My screen is frozen.', '我的屏幕卡住了。'], ['The image is frozen.', '画面卡住了。']] },
    ],
    phrases: [
      { p: 'The video is frozen', ipa: '/ðə ˈvɪdiəʊ ɪz ˈfrəʊzən/', cn: '视频画面卡住了', why: 'frozen 形容画面停止不动，像被冻结一样。' },
    ],
    grammar: [
      { q: 'frozen 和 stuck 有什么区别？', a: 'frozen 强调画面完全停止不动，像冻住一样。\nstuck 更广泛，可以指任何东西卡住。\n✅ The video is frozen.（视频画面卡住了。）—— 画面不动\n✅ The video is stuck on loading.（视频卡在加载。）—— 加载中卡住\n画面不动用 frozen 更准确。' },
    ],
    pattern: 'The + 名词 + is frozen.',
    patternExamples: [
      { en: 'The screen is frozen.', cn: '屏幕卡住了。', words: [] },
      { en: 'The image is frozen.', cn: '画面卡住了。', words: [] },
      { en: 'The display is frozen.', cn: '显示屏卡住了。', words: [] },
    ],
    thinking: '视频会议中画面卡住是最常见的技术问题。\nThe video is frozen 用冻结的比喻来形容画面停止。\n中文说「视频画面卡住了」，英语用 The video is frozen。',
    pronunciation: 'video 重音在第一音节：VID-e-o。\nfrozen 重音在第一音节：FRO-zen。\n节奏：The VID-e-o ｜ is FRO-zen.',
    quiz: [
      { q: '把「视频画面卡住了。」用英语说出来。', a: 'The video is frozen.' },
      { q: '「卡住的」用英语怎么说？', a: 'frozen (/ˈfrəʊzən/)' },
    ],
  },
  {
    id: 2543,
    speaker: 'Engineer',
    en: 'The screen sharing has stopped.',
    cn: '屏幕共享已经停止。',
    ipa: '/ðə skriːn ˈʃɛərɪŋ hæz stɒpt/',
    tags: ['第2543句', '网络问题', '★★★★'],
    when: '屏幕共享突然中断，通知与会者。',
    words: [
      { w: 'screen', ipa: '/skriːn/', pos: '名词', cn: '屏幕', memory: 'screen 指显示屏或屏幕。', phonics: 'scr 读 /skr/，een 读 /iːn/。', collocations: [['screen sharing', '屏幕共享'], ['main screen', '主屏幕'], ['big screen', '大屏幕']], examples: [['Share your screen.', '共享你的屏幕。'], ['Look at the screen.', '看屏幕。']] },
      { w: 'sharing', ipa: '/ˈʃɛərɪŋ/', pos: '名词（动名词）', cn: '共享', memory: 'share(分享)+ing(动名词)→共享的行为。', phonics: 'shar 读 /ʃɛər/，ing 读 /ɪŋ/。', collocations: [['screen sharing', '屏幕共享'], ['file sharing', '文件共享']], examples: [['Stop the sharing.', '停止共享。'], ['Start screen sharing.', '开始屏幕共享。']] },
    ],
    phrases: [
      { p: 'screen sharing', ipa: '/skriːn ˈʃɛərɪŋ/', cn: '屏幕共享', why: '视频会议核心功能，将本地屏幕画面实时传输给与会者。' },
      { p: 'has stopped', ipa: '/hæz stɒpt/', cn: '已经停止', why: 'has + 过去分词，现在完成时表示动作已完成。' },
    ],
    grammar: [
      { q: '为什么用 has stopped 而不是 stopped？', a: 'has stopped 是现在完成时，强调「到现在为止已经停止了」，关注当前状态。\nstopped 是一般过去时，只说明过去某个时间停止。\n✅ The screen sharing has stopped.（屏幕共享已经停了。）—— 关注现在状态\n✅ The screen sharing stopped a minute ago.（屏幕共享一分钟前停了。）—— 关注过去时间' },
    ],
    pattern: 'The + 名词 + has stopped.',
    patternExamples: [
      { en: 'The recording has stopped.', cn: '录像已经停了。', words: [] },
      { en: 'The alarm has stopped.', cn: '告警已经停了。', words: [] },
      { en: 'The update has stopped.', cn: '更新已经停了。', words: [] },
    ],
    thinking: '屏幕共享中断会影响会议演示效果。\nThe screen sharing has stopped 用现在完成时强调当前状态。\n中文说「屏幕共享已经停止」，英语用 The screen sharing has stopped。',
    pronunciation: 'screen 读 /skriːn/，长元音。\nsharing 重音在第一音节：SHA-ring。\n节奏：The SCREEN SHA-ring ｜ has STOPPED.',
    quiz: [
      { q: '把「屏幕共享已经停止。」用英语说出来。', a: 'The screen sharing has stopped.' },
      { q: '「屏幕共享」用英语怎么说？', a: 'screen sharing (/skriːn ˈʃɛərɪŋ/)' },
    ],
  },
  {
    id: 2544,
    speaker: 'Engineer',
    en: 'I was disconnected from the meeting.',
    cn: '我刚刚掉线了。',
    ipa: '/aɪ wɒz ˌdɪskəˈnɛktɪd frɒm ðə ˈmiːtɪŋ/',
    tags: ['第2544句', '网络问题', '★★★★'],
    when: '重新进入会议后，向同事解释刚才掉线的原因。',
    words: [
      { w: 'disconnected', ipa: '/ˌdɪskəˈnɛktɪd/', pos: '动词（过去分词）', cn: '断开连接；掉线', memory: 'dis(去掉)+connect(连接)+ed→连接被去掉。', phonics: 'dis 读 /dɪs/，con 读 /kə/，nect 读 /nɛkt/，ed 读 /ɪd/。', collocations: [['disconnected from', '从…断开'], ['get disconnected', '掉线']], examples: [['I got disconnected.', '我掉线了。'], ['The server disconnected.', '服务器断开了。']] },
    ],
    phrases: [
      { p: 'was disconnected from', ipa: '/wɒz ˌdɪskəˈnɛktɪd frɒm/', cn: '从…掉线', why: '被动语态，表示「被断开了连接」，非主动操作。' },
    ],
    grammar: [
      { q: '为什么用被动语态 was disconnected？', a: 'was disconnected 表示「被断开」，强调非自己主动退出，而是网络问题导致。\n✅ I was disconnected from the meeting.（我掉线了。）—— 被动，非自愿\n✅ I disconnected from the meeting.（我退出了会议。）—— 主动退出\n掉线用被动语态更准确。' },
    ],
    pattern: 'I was disconnected from + 对象.',
    patternExamples: [
      { en: 'I was disconnected from the call.', cn: '我从通话中掉线了。', words: [] },
      { en: 'I was disconnected from the server.', cn: '我和服务器断开连接了。', words: [] },
      { en: 'I was disconnected from the network.', cn: '我断网了。', words: [] },
    ],
    thinking: '掉线是视频会议中常见的网络问题。\nI was disconnected 用被动语态说明非自己主动退出。\n中文说「我掉线了」，英语用 I was disconnected from the meeting。',
    pronunciation: 'disconnected 重音在第三音节：dis-con-NECT-ed。\n节奏：I was ｜ dis-con-NEC-ted ｜ from the MEE-ting.',
    quiz: [
      { q: '把「我刚刚掉线了。」用英语说出来。', a: 'I was disconnected from the meeting.' },
      { q: '「掉线」用英语怎么说？', a: 'get disconnected / be disconnected (/ˌdɪskəˈnɛktɪd/)' },
    ],
  },
  {
    id: 2545,
    speaker: 'Engineer',
    en: "I'm reconnecting now.",
    cn: '我正在重新连接。',
    ipa: '/aɪm ˌriːkəˈnɛktɪŋ naʊ/',
    tags: ['第2545句', '网络问题', '★★★★'],
    when: '掉线后重新进入会议，告知同事正在恢复连接。',
    words: [
      { w: 'reconnecting', ipa: '/ˌriːkəˈnɛktɪŋ/', pos: '动词（现在分词）', cn: '重新连接', memory: 're(重新)+connect(连接)+ing→正在重新连接。', phonics: 're 读 /riː/，con 读 /kə/，nect 读 /nɛkt/，ing 读 /ɪŋ/。', collocations: [['reconnecting to', '重新连接到'], ['reconnecting now', '正在重新连接']], examples: [["I'm reconnecting to the server.", '我正在重新连接服务器。'], ['The system is reconnecting.', '系统正在重新连接。']] },
    ],
    phrases: [
      { p: "I'm reconnecting", ipa: '/aɪm ˌriːkəˈnɛktɪŋ/', cn: '我正在重新连接', why: 'I am + 现在分词，现在进行时表示正在进行的动作。' },
      { p: 'now', ipa: '/naʊ/', cn: '现在', why: '强调动作正在此刻发生。' },
    ],
    grammar: [
      { q: "为什么用 I'm reconnecting 而不是 I reconnect？", a: "I'm reconnecting 是现在进行时，表示「此刻正在做」。\nI reconnect 是一般现在时，表示习惯性动作。\n✅ I'm reconnecting now.（我正在重新连接。）—— 正在做\n✅ I reconnect every morning.（我每天早上重新连接。）—— 习惯动作" },
    ],
    pattern: "I'm + 动词-ing + now.",
    patternExamples: [
      { en: "I'm checking the logs now.", cn: '我正在查日志。', words: [] },
      { en: "I'm restarting the system now.", cn: '我正在重启系统。', words: [] },
      { en: "I'm updating the firmware now.", cn: '我正在更新固件。', words: [] },
    ],
    thinking: '掉线后重新连接是视频会议中的常见操作。\nI am reconnecting now 用进行时强调正在执行。\n中文说「我正在重新连接」，英语用 I am reconnecting now。',
    pronunciation: "reconnecting 重音在第三音节：re-con-NECT-ing。\n节奏：I'm ｜ re-con-NECT-ing ｜ NOW.",
    quiz: [
      { q: '把「我正在重新连接。」用英语说出来。', a: "I'm reconnecting now." },
      { q: '「重新连接」用英语怎么说？', a: 'reconnect (/ˌriːkəˈnɛkt/)' },
    ],
  },
  {
    id: 2546,
    speaker: 'Engineer',
    en: 'Please give me one minute.',
    cn: '请给我一分钟。',
    ipa: '/pliːz ɡɪv miː wʌn ˈmɪnɪt/',
    tags: ['第2546句', '网络问题', '★★★★★'],
    when: '需要短暂时间处理技术问题或查找资料时，请求同事稍等。',
    words: [
      { w: 'give', ipa: '/ɡɪv/', pos: '动词', cn: '给', memory: 'give 是最基本的「给」的动词。', phonics: 'g 读 /ɡ/，ive 读 /ɪv/。', collocations: [['give me a moment', '给我一会儿'], ['give it a try', '试一试']], examples: [['Give me the report.', '把报告给我。'], ['Give me a second.', '给我一秒钟。']] },
      { w: 'minute', ipa: '/ˈmɪnɪt/', pos: '名词', cn: '分钟', memory: 'min(小)+ute→最小的时间单位。', phonics: 'min 读 /mɪn/，ute 读 /ɪt/。', collocations: [['one minute', '一分钟'], ['a few minutes', '几分钟'], ['wait a minute', '等一下']], examples: [['Wait a minute.', '等一下。'], ['It takes five minutes.', '需要五分钟。']] },
    ],
    phrases: [
      { p: 'give me one minute', ipa: '/ɡɪv miː wʌn ˈmɪnɪt/', cn: '给我一分钟', why: '请求对方等待一小段时间，比 just a moment 更具体。' },
    ],
    grammar: [
      { q: 'give me one minute 和 wait a minute 有什么区别？', a: 'give me one minute 是请求对方给自己时间，更礼貌。\nwait a minute 是直接让对方等，语气更直接。\n✅ Please give me one minute.（请给我一分钟。）—— 礼貌请求\n✅ Wait a minute.（等一下。）—— 直接指令\n会议中推荐用 give me one minute。' },
    ],
    pattern: 'Please give me + 时间.',
    patternExamples: [
      { en: 'Please give me a moment.', cn: '请给我一会儿。', words: [] },
      { en: 'Please give me five minutes.', cn: '请给我五分钟。', words: [] },
      { en: 'Please give me a second.', cn: '请给我一秒钟。', words: [] },
    ],
    thinking: '需要短暂时间处理问题时，礼貌地请求等待。\nPlease give me one minute 是标准的礼貌请求句式。\n中文说「请给我一分钟」，英语用 Please give me one minute。',
    pronunciation: 'give 读 /ɡɪv/，短元音。\nminute 重音在第一音节：MIN-ute。\n节奏：PLEASE ｜ GIVE me ｜ ONE MIN-ute.',
    quiz: [
      { q: '把「请给我一分钟。」用英语说出来。', a: 'Please give me one minute.' },
      { q: '「给我一分钟」用英语怎么说？', a: 'give me one minute (/ɡɪv miː wʌn ˈmɪnɪt/)' },
    ],
  },
  {
    id: 2547,
    speaker: 'Engineer',
    en: "I'll be back in a moment.",
    cn: '我马上回来。',
    ipa: '/aɪl biː bæk ɪn ə ˈməʊmənt/',
    tags: ['第2547句', '网络问题', '★★★★★'],
    when: '需要短暂离开会议（如去处理紧急告警），告知同事很快回来。',
    words: [
      { w: 'back', ipa: '/bæk/', pos: '副词', cn: '回来', memory: 'back 作副词表示「回到原来的位置」。', phonics: 'b 读 /b/，ack 读 /æk/。', collocations: [['be back', '回来'], ['come back', '回来'], ['right back', '马上回来']], examples: [["I'll be right back.", '我马上回来。'], ['He came back.', '他回来了。']] },
      { w: 'moment', ipa: '/ˈməʊmənt/', pos: '名词', cn: '片刻；一会儿', memory: 'moment 指非常短的时间段。', phonics: 'mo 读 /məʊ/，ment 读 /mənt/。', collocations: [['in a moment', '马上'], ['at the moment', '此刻'], ['wait a moment', '等一下']], examples: [["I'll be there in a moment.", '我马上到。'], ['Just a moment.', '稍等。']] },
    ],
    phrases: [
      { p: "I'll be back", ipa: '/aɪl biː bæk/', cn: '我会回来', why: "I will be back 表示「我会回来」，will 表示将来的承诺。" },
      { p: 'in a moment', ipa: '/ɪn ə ˈməʊmənt/', cn: '马上；一会儿', why: 'in + 时间段表示「在…之后」，a moment 强调很快。' },
    ],
    grammar: [
      { q: "in a moment 和 in a minute 有什么区别？", a: "in a moment 比 in a minute 更短，强调「马上、立刻」。\nin a minute 指「一分钟后」，时间感稍长。\n✅ I'll be back in a moment.（我马上回来。）—— 非常快\n✅ I'll be back in a minute.（我一分钟后回来。）—— 稍等" },
    ],
    pattern: "I'll be back in + 短时间.",
    patternExamples: [
      { en: "I'll be back in a second.", cn: '我一秒钟就回来。', words: [] },
      { en: "I'll be back in five minutes.", cn: '我五分钟后回来。', words: [] },
      { en: "I'll be back shortly.", cn: '我很快回来。', words: [] },
    ],
    thinking: '短暂离开会议时需要告知同事，避免对方等待不安。\nI will be back in a moment 用将来时承诺很快回来。\n中文说「我马上回来」，英语用 I will be back in a moment。',
    pronunciation: "I'll 读 /aɪl/，连读。\nback 读 /bæk/，短元音。\n节奏：I'll be BACK ｜ in a MO-ment.",
    quiz: [
      { q: '把「我马上回来。」用英语说出来。', a: "I'll be back in a moment." },
      { q: '「马上」用英语怎么说？', a: 'in a moment (/ɪn ə ˈməʊmənt/)' },
    ],
  },
  {
    id: 2548,
    speaker: 'Engineer',
    en: "Let's continue the meeting.",
    cn: '我们继续开会。',
    ipa: '/lɛts kənˈtɪnjuː ðə ˈmiːtɪŋ/',
    tags: ['第2548句', '网络问题', '★★★★★'],
    when: '技术问题或短暂中断解决后，引导大家回到会议议程。',
    words: [
      { w: 'continue', ipa: '/kənˈtɪnjuː/', pos: '动词', cn: '继续', memory: 'con(一起)+tinue(持续)→持续进行。', phonics: 'con 读 /kən/，tin 读 /tɪn/，ue 读 /juː/。', collocations: [['continue the meeting', '继续会议'], ['continue working', '继续工作'], ['continue to monitor', '继续监控']], examples: [["Let's continue.", '我们继续吧。'], ['Please continue.', '请继续。']] },
    ],
    phrases: [
      { p: "Let's continue", ipa: '/lɛts kənˈtɪnjuː/', cn: '我们继续', why: "Let's + 动词原形，提出一起做某事的建议。" },
      { p: 'the meeting', ipa: '/ðə ˈmiːtɪŋ/', cn: '会议', why: '明确继续的对象是当前的会议。' },
    ],
    grammar: [
      { q: "Let's continue 和 Let's resume 有什么区别？", a: "continue 更通用，指继续之前中断的事情。\nresume 更正式，专指「恢复」之前暂停的活动。\n✅ Let's continue the meeting.（我们继续开会。）—— 通用\n✅ Let's resume the meeting.（我们恢复会议。）—— 正式\n日常会议用 continue 即可。" },
    ],
    pattern: "Let's continue + 对象.",
    patternExamples: [
      { en: "Let's continue the discussion.", cn: '我们继续讨论。', words: [] },
      { en: "Let's continue the inspection.", cn: '我们继续巡检。', words: [] },
      { en: "Let's continue with the next item.", cn: '我们继续下一个议题。', words: [] },
    ],
    thinking: '中断后恢复会议是常见场景。\nLet us continue 用建议句式引导大家回到议程。\n中文说「我们继续开会」，英语用 Let us continue the meeting。',
    pronunciation: "continue 重音在第二音节：con-TIN-ue。\n节奏：LET'S ｜ con-TIN-ue ｜ the MEE-ting.",
    quiz: [
      { q: '把「我们继续开会。」用英语说出来。', a: "Let's continue the meeting." },
      { q: '「继续」用英语怎么说？', a: 'continue (/kənˈtɪnjuː/)' },
    ],
  },
  {
    id: 2549,
    speaker: 'Engineer',
    en: 'Does anyone have any questions before we finish?',
    cn: '结束之前还有问题吗？',
    ipa: '/dʌz ˈɛniwʌn hæv ˈɛni ˈkwɛstʃənz bɪˈfɔːr wiː ˈfɪnɪʃ/',
    tags: ['第2549句', '会议结束', '★★★★★'],
    when: '会议即将结束前，主持人询问与会者是否还有疑问。',
    words: [
      { w: 'anyone', ipa: '/ˈɛniwʌn/', pos: '代词', cn: '任何人', memory: 'any(任何)+one(人)→任何一个人。', phonics: 'an 读 /ɛn/，y 读 /i/，one 读 /wʌn/。', collocations: [['does anyone', '有人…吗'], ['anyone else', '还有别人']], examples: [['Does anyone need help?', '有人需要帮助吗？'], ['Is anyone available?', '有人有空吗？']] },
      { w: 'finish', ipa: '/ˈfɪnɪʃ/', pos: '动词', cn: '结束；完成', memory: 'fin(边界)+ish→到达边界→结束。', phonics: 'fin 读 /fɪn/，ish 读 /ɪʃ/。', collocations: [['finish the meeting', '结束会议'], ['finish the report', '完成报告']], examples: [["Let's finish this.", '我们完成这个吧。'], ['When will you finish?', '你什么时候完成？']] },
    ],
    phrases: [
      { p: 'Does anyone have', ipa: '/dʌz ˈɛniwʌn hæv/', cn: '有人有…吗', why: 'Does anyone + have 是询问在场所有人是否有的标准句式。' },
      { p: 'before we finish', ipa: '/bɪˈfɔːr wiː ˈfɪnɪʃ/', cn: '结束之前', why: 'before + 从句，表示在结束之前的时间。' },
    ],
    grammar: [
      { q: 'Does anyone 后面为什么用 have 而不是 has？', a: 'anyone 虽然在形式上是第三人称单数，但在疑问句中用 does 辅助提问，动词还原为 have。\n✅ Does anyone have questions?（有人有问题吗？）—— 正确\n❌ Does anyone has questions?（错误：does 后不能用 has）' },
    ],
    pattern: 'Does anyone have + 名词 + before + 时间?',
    patternExamples: [
      { en: 'Does anyone have comments before we close?', cn: '结束前有人有评论吗？', words: [] },
      { en: 'Does anyone have updates before the shift ends?', cn: '下班前有人有更新吗？', words: [] },
      { en: 'Does anyone have objections before we proceed?', cn: '继续前有人有异议吗？', words: [] },
    ],
    thinking: '会议结束前确认是否还有未解决的问题是良好的会议习惯。\nDoes anyone have any questions 是标准的收尾问句。\n中文说「结束之前还有问题吗」，英语用 Does anyone have any questions before we finish。',
    pronunciation: 'anyone 重音在第一音节：AN-y-one。\nquestions 重音在第一音节：QUES-tions。\n节奏：Does AN-y-one ｜ HAVE an-y QUES-tions ｜ be-FORE we FIN-ish?',
    quiz: [
      { q: '把「结束之前还有问题吗？」用英语说出来。', a: 'Does anyone have any questions before we finish?' },
      { q: '「有人有…吗」用英语怎么说？', a: 'Does anyone have…? (/dʌz ˈɛniwʌn hæv/)' },
    ],
  },
  {
    id: 2550,
    speaker: 'Engineer',
    en: 'Thank you for your participation today.',
    cn: '感谢大家今天的参与。',
    ipa: '/θæŋk juː fɔːr jɔːr ˌpɑːrtɪsɪˈpeɪʃən təˈdeɪ/',
    tags: ['第2550句', '会议结束', '★★★★★'],
    when: '会议结束时，主持人感谢所有与会者的参与。',
    words: [
      { w: 'participation', ipa: '/ˌpɑːrtɪsɪˈpeɪʃən/', pos: '名词', cn: '参与；参加', memory: 'participate(参与)的名词形式。', phonics: 'par 读 /pɑːr/，ti 读 /tɪ/，ci 读 /sɪ/，pa 读 /peɪ/，tion 读 /ʃən/。', collocations: [['active participation', '积极参与'], ['thank you for your participation', '感谢你的参与']], examples: [['Thank you for your participation.', '感谢你的参与。'], ['Your participation is appreciated.', '感谢你的参与。']] },
    ],
    phrases: [
      { p: 'Thank you for', ipa: '/θæŋk juː fɔːr/', cn: '感谢你…', why: 'Thank you for + 名词/动名词，感谢的标准句式。' },
      { p: 'your participation', ipa: '/jɔːr ˌpɑːrtɪsɪˈpeɪʃən/', cn: '你的参与', why: '指对方参加会议并贡献意见的行为。' },
    ],
    grammar: [
      { q: 'Thank you for + 名词 和 Thank you for + 动名词 怎么选？', a: '两者都可以，名词更正式，动名词更口语。\n✅ Thank you for your participation.（感谢你的参与。）—— 名词，正式\n✅ Thank you for participating.（感谢你的参与。）—— 动名词，口语\n会议结束推荐用名词形式更正式。' },
    ],
    pattern: 'Thank you for your + 名词 + 时间词.',
    patternExamples: [
      { en: 'Thank you for your support today.', cn: '感谢你今天的支持。', words: [] },
      { en: 'Thank you for your cooperation this week.', cn: '感谢你本周的配合。', words: [] },
      { en: 'Thank you for your feedback.', cn: '感谢你的反馈。', words: [] },
    ],
    thinking: '会议结束时感谢与会者是基本的职场礼仪。\nThank you for your participation 是正式的感谢句式。\n中文说「感谢大家今天的参与」，英语用 Thank you for your participation today。',
    pronunciation: 'participation 重音在第四音节：par-ti-ci-PA-tion。\n节奏：THANK you ｜ for your ｜ par-ti-ci-PA-tion ｜ to-DAY.',
    quiz: [
      { q: '把「感谢大家今天的参与。」用英语说出来。', a: 'Thank you for your participation today.' },
      { q: '「参与」用英语怎么说？', a: 'participation (/ˌpɑːrtɪsɪˈpeɪʃən/)' },
    ],
  },
  {
    id: 2551,
    speaker: 'Engineer',
    en: "I'll send the meeting minutes later today.",
    cn: '我今天稍后会发送会议纪要。',
    ipa: '/aɪl sɛnd ðə ˈmiːtɪŋ ˈmɪnɪts ˈleɪtər təˈdeɪ/',
    tags: ['第2551句', '会议结束', '★★★★★'],
    when: '会议结束时告知与会者会议纪要的发送时间。',
    words: [
      { w: 'minutes', ipa: '/ˈmɪnɪts/', pos: '名词（复数）', cn: '会议纪要；会议记录', memory: 'minute(分钟)+s→记录每分钟讨论内容的文件。', phonics: 'min 读 /mɪn/，utes 读 /ɪts/。', collocations: [['meeting minutes', '会议纪要'], ['take minutes', '做会议记录'], ['send minutes', '发送纪要']], examples: [['Please review the minutes.', '请查看会议纪要。'], ['Who will take the minutes?', '谁来做会议记录？']] },
    ],
    phrases: [
      { p: 'meeting minutes', ipa: '/ˈmiːtɪŋ ˈmɪnɪts/', cn: '会议纪要', why: '会议纪要是对会议讨论内容和决议的书面记录。' },
      { p: 'later today', ipa: '/ˈleɪtər təˈdeɪ/', cn: '今天稍后', why: 'later + today 表示在今天剩余时间内。' },
    ],
    grammar: [
      { q: 'minutes 为什么是复数？', a: 'meeting minutes 是固定搭配，即使指一份文件也用复数形式。\n✅ I will send the meeting minutes.（我会发送会议纪要。）—— 正确\n❌ I will send the meeting minute.（错误：minute 单数指「分钟」，不指「纪要」）\nminutes 在会议语境中专指「会议记录」。' },
    ],
    pattern: "I'll send the + 文件 + 时间.",
    patternExamples: [
      { en: "I'll send the report tomorrow.", cn: '我明天发送报告。', words: [] },
      { en: "I'll send the summary by email.", cn: '我通过邮件发送摘要。', words: [] },
      { en: "I'll send the action items this afternoon.", cn: '我今天下午发送行动项。', words: [] },
    ],
    thinking: '发送会议纪要是会议主持人的标准职责。\nI will send the meeting minutes later today 明确告知发送时间。\n中文说「我今天稍后会发送会议纪要」，英语用 I will send the meeting minutes later today。',
    pronunciation: "minutes 重音在第一音节：MIN-utes。\nlater 读 /ˈleɪtər/。\n节奏：I'll SEND ｜ the MEE-ting MIN-utes ｜ LA-ter to-DAY.",
    quiz: [
      { q: '把「我今天稍后会发送会议纪要。」用英语说出来。', a: "I'll send the meeting minutes later today." },
      { q: '「会议纪要」用英语怎么说？', a: 'meeting minutes (/ˈmiːtɪŋ ˈmɪnɪts/)' },
    ],
  },
  {
    id: 2552,
    speaker: 'Engineer',
    en: 'Please review the action items after the meeting.',
    cn: '请会后查看行动项。',
    ipa: '/pliːz rɪˈvjuː ðə ˈækʃən ˈaɪtəmz ˈæftər ðə ˈmiːtɪŋ/',
    tags: ['第2552句', '会议结束', '★★★★'],
    when: '会议结束时提醒与会者关注分配给自己的任务项。',
    words: [
      { w: 'review', ipa: '/rɪˈvjuː/', pos: '动词', cn: '查看；审查', memory: 're(重新)+view(看)→重新看一遍→审查。', phonics: 're 读 /rɪ/，view 读 /vjuː/。', collocations: [['review the report', '审查报告'], ['review the checklist', '查看检查表']], examples: [['Please review this.', '请查看这个。'], ['I reviewed the logs.', '我审查了日志。']] },
      { w: 'action items', ipa: '/ˈækʃən ˈaɪtəmz/', pos: '名词（复数）', cn: '行动项；待办事项', memory: 'action(行动)+items(项目)→需要采取行动的具体事项。', phonics: 'ac 读 /æk/，tion 读 /ʃən/，i 读 /aɪ/，tems 读 /təmz/。', collocations: [['action items list', '行动项清单'], ['assign action items', '分配行动项']], examples: [['Check the action items.', '查看行动项。'], ['Complete your action items.', '完成你的行动项。']] },
    ],
    phrases: [
      { p: 'action items', ipa: '/ˈækʃən ˈaɪtəmz/', cn: '行动项', why: '会议中确定的具体待办事项，通常指定责任人和截止日期。' },
      { p: 'after the meeting', ipa: '/ˈæftər ðə ˈmiːtɪŋ/', cn: '会后', why: '明确查看的时间是会议结束之后。' },
    ],
    grammar: [
      { q: 'action items 和 to-do list 有什么区别？', a: 'action items 是会议语境中的正式用语，指会议决定的具体待办。\nto-do list 更日常，指个人的待办清单。\n✅ Please review the action items.（请查看行动项。）—— 会议正式\n✅ Check your to-do list.（查看你的待办清单。）—— 日常' },
    ],
    pattern: 'Please review the + 名词 + after + 事件.',
    patternExamples: [
      { en: 'Please review the report after the inspection.', cn: '巡检后请查看报告。', words: [] },
      { en: 'Please review the log after the shift.', cn: '下班后请查看日志。', words: [] },
      { en: 'Please review the summary after the drill.', cn: '演练后请查看总结。', words: [] },
    ],
    thinking: '行动项是会议产出的核心，确保每个任务有人负责。\nPlease review the action items 是提醒与会者关注分配任务的句式。\n中文说「请会后查看行动项」，英语用 Please review the action items after the meeting。',
    pronunciation: 'review 重音在第二音节：re-VIEW。\naction 重音在第一音节：AC-tion。\n节奏：Please re-VIEW ｜ the AC-tion I-tems ｜ AF-ter the MEE-ting.',
    quiz: [
      { q: '把「请会后查看行动项。」用英语说出来。', a: 'Please review the action items after the meeting.' },
      { q: '「行动项」用英语怎么说？', a: 'action items (/ˈækʃən ˈaɪtəmz/)' },
    ],
  },
  {
    id: 2553,
    speaker: 'Engineer',
    en: 'Please complete your assigned tasks before the deadline.',
    cn: '请在截止日期前完成分配给你的任务。',
    ipa: '/pliːz kəmˈpliːt jɔːr əˈsaɪnd tæsks bɪˈfɔːr ðə ˈdɛdlaɪn/',
    tags: ['第2553句', '会议结束', '★★★★'],
    when: '会议结束时提醒团队成员按时完成分配的任务。',
    words: [
      { w: 'assigned', ipa: '/əˈsaɪnd/', pos: '形容词（过去分词）', cn: '分配的；指派的', memory: 'assign(分配)+ed→已被分配的。', phonics: 'as 读 /ə/，signed 读 /saɪnd/。', collocations: [['assigned tasks', '分配的任务'], ['assigned role', '分配的角色']], examples: [['Complete your assigned work.', '完成你分配的工作。'], ['The assigned deadline is Friday.', '分配的截止日期是周五。']] },
      { w: 'deadline', ipa: '/ˈdɛdlaɪn/', pos: '名词', cn: '截止日期', memory: 'dead(死)+line(线)→不可逾越的最后期限。', phonics: 'dead 读 /dɛd/，line 读 /laɪn/。', collocations: [['meet the deadline', '赶上截止日期'], ['before the deadline', '截止日期前'], ['miss the deadline', '错过截止日期']], examples: [['The deadline is tomorrow.', '截止日期是明天。'], ['We met the deadline.', '我们赶上了截止日期。']] },
    ],
    phrases: [
      { p: 'assigned tasks', ipa: '/əˈsaɪnd tæsks/', cn: '分配的任务', why: 'assigned 修饰 tasks，指已经被指派给特定人员的任务。' },
      { p: 'before the deadline', ipa: '/bɪˈfɔːr ðə ˈdɛdlaɪn/', cn: '截止日期前', why: '明确任务完成的时间要求。' },
    ],
    grammar: [
      { q: 'assigned 放在 tasks 前面是什么语法？', a: 'assigned 是过去分词作前置定语，修饰 tasks，表示「被分配的任务」。\n✅ assigned tasks（分配的任务）—— 过去分词前置\n✅ tasks that are assigned（被分配的任务）—— 定语从句\n前置更简洁，适合口语和简短指令。' },
    ],
    pattern: 'Please complete + 对象 + before the deadline.',
    patternExamples: [
      { en: 'Please complete the report before the deadline.', cn: '请在截止日期前完成报告。', words: [] },
      { en: 'Please complete the inspection before Friday.', cn: '请在周五前完成巡检。', words: [] },
      { en: 'Please complete the checklist before the audit.', cn: '请在审计前完成检查表。', words: [] },
    ],
    thinking: '提醒团队按时完成任务是会议收尾的重要环节。\nPlease complete your assigned tasks before the deadline 明确了任务和时间要求。\n中文说「请在截止日期前完成分配给你的任务」，英语对应。',
    pronunciation: 'assigned 重音在第二音节：as-SIGNED。\ndeadline 重音在第一音节：DEAD-line。\n节奏：Please com-PLETE ｜ your as-SIGNED TASKS ｜ be-FORE the DEAD-line.',
    quiz: [
      { q: '把「请在截止日期前完成分配给你的任务。」用英语说出来。', a: 'Please complete your assigned tasks before the deadline.' },
      { q: '「截止日期」用英语怎么说？', a: 'deadline (/ˈdɛdlaɪn/)' },
    ],
  },
  {
    id: 2554,
    speaker: 'Engineer',
    en: 'Our next meeting is scheduled for next Tuesday.',
    cn: '我们的下次会议安排在下周二。',
    ipa: '/aʊər nɛkst ˈmiːtɪŋ ɪz ˈʃɛdjuːld fɔːr nɛkst ˈtjuːzdeɪ/',
    tags: ['第2554句', '会议结束', '★★★★'],
    when: '会议结束时告知下次会议的时间安排。',
    words: [
      { w: 'scheduled', ipa: '/ˈʃɛdjuːld/', pos: '动词（过去分词）', cn: '安排好的；预定的', memory: 'schedule(安排)+d→已被安排的。', phonics: 'sched 读 /ʃɛd/，uled 读 /juːld/。', collocations: [['scheduled for', '安排在'], ['scheduled meeting', '预定的会议']], examples: [['The meeting is scheduled for Monday.', '会议安排在周一。'], ['The maintenance is scheduled.', '维护已安排好。']] },
    ],
    phrases: [
      { p: 'is scheduled for', ipa: '/ɪz ˈʃɛdjuːld fɔːr/', cn: '安排在', why: '被动语态表示「被安排在」某个时间，是正式的日程表达。' },
      { p: 'next Tuesday', ipa: '/nɛkst ˈtjuːzdeɪ/', cn: '下周二', why: '明确下次会议的具体日期。' },
    ],
    grammar: [
      { q: 'is scheduled for 和 will be on 有什么区别？', a: 'is scheduled for 更正式，强调已经排入日程。\nwill be on 更口语，只是说明将来的时间。\n✅ Our next meeting is scheduled for Tuesday.（下次会议安排在周二。）—— 正式\n✅ Our next meeting will be on Tuesday.（下次会议在周二。）—— 口语' },
    ],
    pattern: 'Our next + 事件 + is scheduled for + 时间.',
    patternExamples: [
      { en: 'Our next review is scheduled for Friday.', cn: '我们的下次评审安排在周五。', words: [] },
      { en: 'Our next drill is scheduled for next month.', cn: '我们的下次演练安排在下个月。', words: [] },
      { en: 'Our next handover is scheduled for 8 AM.', cn: '我们的下次交接安排在早上8点。', words: [] },
    ],
    thinking: '告知下次会议时间是会议收尾的标准流程。\nOur next meeting is scheduled for 用被动语态显得正式专业。\n中文说「下次会议安排在下周二」，英语用 Our next meeting is scheduled for next Tuesday。',
    pronunciation: 'scheduled 重音在第一音节：SCHED-uled。\nTuesday 重音在第一音节：TUES-day。\n节奏：Our NEXT MEE-ting ｜ is SCHED-uled ｜ for NEXT TUES-day.',
    quiz: [
      { q: '把「我们的下次会议安排在下周二。」用英语说出来。', a: 'Our next meeting is scheduled for next Tuesday.' },
      { q: '「安排在」用英语怎么说？', a: 'is scheduled for (/ɪz ˈʃɛdjuːld fɔːr/)' },
    ],
  },
  {
    id: 2555,
    speaker: 'Engineer',
    en: "I'll send the calendar invitation shortly.",
    cn: '我马上发送日历邀请。',
    ipa: '/aɪl sɛnd ðə ˈkælɪndər ˌɪnvɪˈteɪʃən ˈʃɔːrtli/',
    tags: ['第2555句', '会议结束', '★★★★'],
    when: '确认下次会议时间后，告知会发送日历邀请。',
    words: [
      { w: 'calendar', ipa: '/ˈkælɪndər/', pos: '名词', cn: '日历', memory: 'calend(月初)+ar→记录日期的工具。', phonics: 'cal 读 /kæl/，en 读 /ɪn/，dar 读 /dər/。', collocations: [['calendar invitation', '日历邀请'], ['calendar event', '日历事件']], examples: [['Check your calendar.', '查看你的日历。'], ['Add it to the calendar.', '加到日历里。']] },
      { w: 'invitation', ipa: '/ˌɪnvɪˈteɪʃən/', pos: '名词', cn: '邀请', memory: 'invite(邀请)+ation(名词后缀)→邀请的行为。', phonics: 'in 读 /ɪn/，vi 读 /vɪ/，ta 读 /teɪ/，tion 读 /ʃən/。', collocations: [['send an invitation', '发送邀请'], ['meeting invitation', '会议邀请']], examples: [['I received the invitation.', '我收到了邀请。'], ['Send the invitation to everyone.', '把邀请发给所有人。']] },
    ],
    phrases: [
      { p: 'calendar invitation', ipa: '/ˈkælɪndər ˌɪnvɪˈteɪʃən/', cn: '日历邀请', why: '通过日历系统发送的会议邀请，自动同步到与会者的日历中。' },
      { p: 'shortly', ipa: '/ˈʃɔːrtli/', cn: '马上；不久', why: '比 soon 更正式，表示很快会执行。' },
    ],
    grammar: [
      { q: 'shortly 和 soon 有什么区别？', a: 'shortly 更正式，常用于商务和正式场合。\nsoon 更口语化，日常使用。\n✅ I will send it shortly.（我马上发送。）—— 正式\n✅ I will send it soon.（我很快发送。）—— 口语\n会议场景推荐用 shortly。' },
    ],
    pattern: "I'll send the + 对象 + shortly.",
    patternExamples: [
      { en: "I'll send the report shortly.", cn: '我马上发送报告。', words: [] },
      { en: "I'll send the confirmation shortly.", cn: '我马上发送确认。', words: [] },
      { en: "I'll send the details shortly.", cn: '我马上发送详细信息。', words: [] },
    ],
    thinking: '发送日历邀请是确认会议安排的标准操作。\nI will send the calendar invitation shortly 告知即将执行。\n中文说「我马上发送日历邀请」，英语用 I will send the calendar invitation shortly。',
    pronunciation: "calendar 重音在第一音节：CAL-en-dar。\ninvitation 重音在第三音节：in-vi-TA-tion。\nshortly 重音在第一音节：SHORT-ly。\n节奏：I'll SEND ｜ the CAL-en-dar ｜ in-vi-TA-tion ｜ SHORT-ly.",
    quiz: [
      { q: '把「我马上发送日历邀请。」用英语说出来。', a: "I'll send the calendar invitation shortly." },
      { q: '「日历邀请」用英语怎么说？', a: 'calendar invitation (/ˈkælɪndər ˌɪnvɪˈteɪʃən/)' },
    ],
  },
  {
    id: 2556,
    speaker: 'Engineer',
    en: 'Thank you for your valuable input.',
    cn: '感谢大家提出宝贵意见。',
    ipa: '/θæŋk juː fɔːr jɔːr ˈvæljuəbl ˈɪnpʊt/',
    tags: ['第2556句', '会议结束', '★★★★★'],
    when: '会议结束时感谢与会者贡献的意见和建议。',
    words: [
      { w: 'valuable', ipa: '/ˈvæljuəbl/', pos: '形容词', cn: '宝贵的；有价值的', memory: 'value(价值)+able(能够)→有价值的。', phonics: 'val 读 /væl/，u 读 /jʊ/，a 读 /ə/，ble 读 /bl/。', collocations: [['valuable input', '宝贵意见'], ['valuable feedback', '宝贵反馈'], ['valuable experience', '宝贵经验']], examples: [['Your feedback is valuable.', '你的反馈很有价值。'], ['Thank you for your valuable time.', '感谢你宝贵的时间。']] },
      { w: 'input', ipa: '/ˈɪnpʊt/', pos: '名词', cn: '意见；输入', memory: 'in(进入)+put(放)→放入的信息→意见。', phonics: 'in 读 /ɪn/，put 读 /pʊt/。', collocations: [['valuable input', '宝贵意见'], ['provide input', '提供意见'], ['technical input', '技术意见']], examples: [['We need your input.', '我们需要你的意见。'], ['Any input is welcome.', '任何意见都欢迎。']] },
    ],
    phrases: [
      { p: 'valuable input', ipa: '/ˈvæljuəbl ˈɪnpʊt/', cn: '宝贵意见', why: 'valuable 修饰 input，强调意见的重要性和价值。' },
    ],
    grammar: [
      { q: 'input 在会议语境中是什么意思？', a: 'input 在会议中指「意见、建议、贡献」，比 opinion 更专业。\n✅ Thank you for your input.（感谢你的意见。）—— 专业\n✅ Thank you for your opinion.（感谢你的看法。）—— 日常\n会议中用 input 更合适。' },
    ],
    pattern: 'Thank you for your + 形容词 + 名词.',
    patternExamples: [
      { en: 'Thank you for your valuable feedback.', cn: '感谢你的宝贵反馈。', words: [] },
      { en: 'Thank you for your excellent work.', cn: '感谢你的出色工作。', words: [] },
      { en: 'Thank you for your detailed report.', cn: '感谢你的详细报告。', words: [] },
    ],
    thinking: '感谢与会者的贡献是会议收尾的礼仪。\nThank you for your valuable input 肯定每个人的参与价值。\n中文说「感谢大家提出宝贵意见」，英语用 Thank you for your valuable input。',
    pronunciation: 'valuable 重音在第一音节：VAL-u-a-ble。\ninput 重音在第一音节：IN-put。\n节奏：THANK you ｜ for your ｜ VAL-u-a-ble ｜ IN-put.',
    quiz: [
      { q: '把「感谢大家提出宝贵意见。」用英语说出来。', a: 'Thank you for your valuable input.' },
      { q: '「宝贵意见」用英语怎么说？', a: 'valuable input (/ˈvæljuəbl ˈɪnpʊt/)' },
    ],
  },
  {
    id: 2557,
    speaker: 'Engineer',
    en: 'Have a productive day, everyone.',
    cn: '祝大家今天工作顺利。',
    ipa: '/hæv ə prəˈdʌktɪv deɪ ˈɛvriwʌn/',
    tags: ['第2557句', '会议结束', '★★★★★'],
    when: '会议结束时向所有人送上工作祝福。',
    words: [
      { w: 'productive', ipa: '/prəˈdʌktɪv/', pos: '形容词', cn: '高效的；有成效的', memory: 'produce(生产)+ive(形容词后缀)→能产出成果的。', phonics: 'pro 读 /prə/，duc 读 /dʌk/，tive 读 /tɪv/。', collocations: [['productive day', '高效的一天'], ['productive meeting', '高效的会议']], examples: [['Have a productive day.', '祝你今天工作顺利。'], ['It was a productive meeting.', '这是一次高效的会议。']] },
    ],
    phrases: [
      { p: 'Have a productive day', ipa: '/hæv ə prəˈdʌktɪv deɪ/', cn: '祝你今天工作顺利', why: '比 Have a good day 更具体，祝福对方今天的工作有成效。' },
      { p: 'everyone', ipa: '/ˈɛvriwʌn/', cn: '大家', why: '面向所有与会者。' },
    ],
    grammar: [
      { q: 'Have a productive day 和 Have a good day 有什么区别？', a: 'Have a productive day 更专业，祝福对方工作有成效。\nHave a good day 更通用，适用于任何场合。\n✅ Have a productive day.（祝你工作顺利。）—— 职场专业\n✅ Have a good day.（祝你今天愉快。）—— 通用日常\n工作场合推荐用 productive。' },
    ],
    pattern: 'Have a + 形容词 + day, + 称呼.',
    patternExamples: [
      { en: 'Have a great day, team.', cn: '祝团队今天顺利。', words: [] },
      { en: 'Have a wonderful day, everyone.', cn: '祝大家今天愉快。', words: [] },
      { en: 'Have a safe day, guys.', cn: '祝大家今天安全顺利。', words: [] },
    ],
    thinking: '会议结束时送上祝福是良好的职场习惯。\nHave a productive day 比 have a good day 更有职场属性。\n中文说「祝大家今天工作顺利」，英语用 Have a productive day, everyone。',
    pronunciation: 'productive 重音在第二音节：pro-DUC-tive。\n节奏：HAVE a ｜ pro-DUC-tive DAY ｜ EV-ry-one.',
    quiz: [
      { q: '把「祝大家今天工作顺利。」用英语说出来。', a: 'Have a productive day, everyone.' },
      { q: '「高效的」用英语怎么说？', a: 'productive (/prəˈdʌktɪv/)' },
    ],
  },
  {
    id: 2558,
    speaker: 'Engineer',
    en: 'Stay safe and see you tomorrow.',
    cn: '注意安全，明天见。',
    ipa: '/steɪ seɪf ænd siː juː təˈmɒrəʊ/',
    tags: ['第2558句', '会议结束', '★★★★★'],
    when: '会议或班次结束时，向同事告别并提醒注意安全。',
    words: [
      { w: 'stay', ipa: '/steɪ/', pos: '动词', cn: '保持', memory: 'stay 表示保持某种状态。', phonics: 'st 读 /st/，ay 读 /eɪ/。', collocations: [['stay safe', '注意安全'], ['stay healthy', '保持健康'], ['stay focused', '保持专注']], examples: [['Stay safe out there.', '在外面注意安全。'], ['Stay alert.', '保持警惕。']] },
    ],
    phrases: [
      { p: 'Stay safe', ipa: '/steɪ seɪf/', cn: '注意安全', why: 'stay + 形容词，表示保持安全的状态，是告别时的常用祝福。' },
      { p: 'see you tomorrow', ipa: '/siː juː təˈmɒrəʊ/', cn: '明天见', why: 'see you + 时间词，告别时约定下次见面的时间。' },
    ],
    grammar: [
      { q: 'Stay safe 和 Be safe 有什么区别？', a: 'Stay safe 强调「继续保持安全」，隐含持续性的关心。\nBe safe 强调「变得安全」，更像指令。\n✅ Stay safe.（注意安全。）—— 关心、祝福\n✅ Be safe.（要安全。）—— 指令、提醒\n告别时用 Stay safe 更温暖。' },
    ],
    pattern: 'Stay + 形容词 + and + 告别语.',
    patternExamples: [
      { en: 'Stay healthy and see you next week.', cn: '保持健康，下周见。', words: [] },
      { en: 'Stay safe and drive carefully.', cn: '注意安全，开车小心。', words: [] },
      { en: 'Stay well and take care.', cn: '保重身体，照顾好自己。', words: [] },
    ],
    thinking: '数据中心运维环境安全意识很重要，告别时提醒安全是文化习惯。\nStay safe and see you tomorrow 结合了安全祝福和告别。\n中文说「注意安全，明天见」，英语用 Stay safe and see you tomorrow。',
    pronunciation: 'stay 读 /steɪ/，长元音。\nsafe 读 /seɪf/。\n节奏：STAY SAFE ｜ and SEE you ｜ to-MOR-row.',
    quiz: [
      { q: '把「注意安全，明天见。」用英语说出来。', a: 'Stay safe and see you tomorrow.' },
      { q: '「注意安全」用英语怎么说？', a: 'Stay safe (/steɪ seɪf/)' },
    ],
  },
  {
    id: 2559,
    speaker: 'Engineer',
    en: 'This meeting is officially adjourned.',
    cn: '本次会议正式结束。',
    ipa: '/ðɪs ˈmiːtɪŋ ɪz əˈfɪʃəli əˈdʒɜːrnd/',
    tags: ['第2559句', '会议结束', '★★★★'],
    when: '正式会议（如月度安全评审）结束时，主持人宣布会议正式结束。',
    words: [
      { w: 'officially', ipa: '/əˈfɪʃəli/', pos: '副词', cn: '正式地', memory: 'official(官方的)+ly(副词后缀)→以官方方式。', phonics: 'of 读 /ə/，fi 读 /fɪ/，cial 读 /ʃə/，ly 读 /li/。', collocations: [['officially announced', '正式宣布'], ['officially closed', '正式关闭']], examples: [['The meeting is officially over.', '会议正式结束了。'], ['It is officially approved.', '已正式批准。']] },
      { w: 'adjourned', ipa: '/əˈdʒɜːrnd/', pos: '动词（过去分词）', cn: '休会；结束', memory: 'adjourn 是法律/会议用语，表示正式暂停或结束会议。', phonics: 'ad 读 /ə/，journ 读 /dʒɜːrn/，ed 读 /d/。', collocations: [['meeting adjourned', '会议结束'], ['adjourn until', '休会直到']], examples: [['The meeting is adjourned.', '会议结束了。'], ['We adjourned at 5 PM.', '我们在下午5点休会了。']] },
    ],
    phrases: [
      { p: 'is officially adjourned', ipa: '/ɪz əˈfɪʃəli əˈdʒɜːrnd/', cn: '正式结束', why: '被动语态 + officially 强调以正式程序结束会议。' },
    ],
    grammar: [
      { q: 'adjourned 和 ended/finished 有什么区别？', a: 'adjourned 是正式的会议/法律用语，表示「休会」。\nended 和 finished 是通用词汇。\n✅ This meeting is officially adjourned.（本次会议正式结束。）—— 正式\n✅ This meeting is finished.（这个会议结束了。）—— 通用\n正式评审会、董事会用 adjourned。' },
    ],
    pattern: 'This meeting is officially adjourned.',
    patternExamples: [
      { en: 'The session is adjourned.', cn: '本次会议休会。', words: [] },
      { en: 'The hearing is adjourned until Monday.', cn: '听证会休会至周一。', words: [] },
      { en: 'The review is officially closed.', cn: '评审正式结束。', words: [] },
    ],
    thinking: '正式会议需要正式的结束宣告。\nThis meeting is officially adjourned 是最正式的会议结束语。\n中文说「本次会议正式结束」，英语用 This meeting is officially adjourned。',
    pronunciation: 'officially 重音在第二音节：of-FI-cial-ly。\nadjourned 重音在第二音节：a-JOURNED。\n节奏：This MEE-ting ｜ is of-FI-cial-ly ｜ a-JOURNED.',
    quiz: [
      { q: '把「本次会议正式结束。」用英语说出来。', a: 'This meeting is officially adjourned.' },
      { q: '「休会」用英语怎么说？', a: 'adjourn (/əˈdʒɜːrn/)' },
    ],
  },
  {
    id: 2560,
    speaker: 'Engineer',
    en: 'Goodbye, everyone.',
    cn: '大家再见。',
    ipa: '/ɡʊdˈbaɪ ˈɛvriwʌn/',
    tags: ['第2560句', '会议结束', '★★★★★'],
    when: '会议结束后向所有与会者道别。',
    words: [
      { w: 'goodbye', ipa: '/ɡʊdˈbaɪ/', pos: '感叹词', cn: '再见', memory: 'good(好)+bye(再见)→好的告别。', phonics: 'good 读 /ɡʊd/，bye 读 /baɪ/。', collocations: [['say goodbye', '说再见'], ['wave goodbye', '挥手告别']], examples: [['Goodbye, see you tomorrow.', '再见，明天见。'], ['Say goodbye to the team.', '跟团队说再见。']] },
    ],
    phrases: [
      { p: 'Goodbye, everyone', ipa: '/ɡʊdˈbaɪ ˈɛvriwʌn/', cn: '大家再见', why: '面向所有人的告别语，简洁明了。' },
    ],
    grammar: [
      { q: 'Goodbye 和 Bye 有什么区别？', a: 'Goodbye 更正式、更完整，适合正式场合。\nBye 更随意、更简短，适合日常告别。\n✅ Goodbye, everyone.（大家再见。）—— 正式\n✅ Bye, guys.（大家拜拜。）—— 随意\n正式会议结束用 Goodbye。' },
    ],
    pattern: 'Goodbye, + 称呼.',
    patternExamples: [
      { en: 'Goodbye, team.', cn: '团队再见。', words: [] },
      { en: 'Goodbye, see you next time.', cn: '再见，下次见。', words: [] },
      { en: 'Goodbye, have a great weekend.', cn: '再见，周末愉快。', words: [] },
    ],
    thinking: 'Goodbye 是最基本的告别用语。\nGoodbye, everyone 面向所有与会者，简洁得体。\n中文说「大家再见」，英语用 Goodbye, everyone。',
    pronunciation: 'goodbye 重音在第二音节：good-BYE。\neveryone 重音在第一音节：EV-ry-one。\n节奏：Good-BYE ｜ EV-ry-one.',
    quiz: [
      { q: '把「大家再见。」用英语说出来。', a: 'Goodbye, everyone.' },
      { q: '「再见」用英语怎么说？', a: 'Goodbye (/ɡʊdˈbaɪ/)' },
    ],
  },
];

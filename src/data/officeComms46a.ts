// EXPORTS: MOCK_SENTENCES_OFFICECOMMS46A

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_OFFICECOMMS46A: ISentence[] = [
  {
    id: 2481,
    speaker: 'Engineer',
    en: 'Have you checked your email?',
    cn: '你看邮箱了吗？',
    ipa: '/hæv juː tʃɛkt jɔːr ˈiːmeɪl/',
    tags: ['第2481句', '邮件', '★★★★'],
    when: '早会前提醒同事查看是否有新邮件通知或工作指令。',
    words: [
      { w: 'checked', ipa: '/tʃɛkt/', pos: '动词（过去分词）', cn: '查看；检查', memory: 'check(检查)+ed(过去式)→已经检查过。', phonics: 'ch 读 /tʃ/，eck 读 /ɛk/，ed 读 /t/。', collocations: [['check email', '查看邮件'], ['check the schedule', '查看日程'], ['check status', '检查状态']], examples: [['Have you checked the BMS?', '你查看过BMS了吗？'], ['I checked the logs.', '我查过日志了。']] },
      { w: 'email', ipa: '/ˈiːmeɪl/', pos: '名词', cn: '邮件；电子邮件', memory: 'e(electronic电子)+mail(邮件)→电子邮件。', phonics: 'e 读 /iː/，mail 读 /meɪl/，重音在第一音节。', collocations: [['send an email', '发邮件'], ['check email', '查看邮件'], ['email address', '邮箱地址']], examples: [['Please send me an email.', '请给我发封邮件。'], ['I received your email.', '我收到你的邮件了。']] },
    ],
    phrases: [
      { p: 'Have you checked', ipa: '/hæv juː tʃɛkt/', cn: '你查看了吗', why: 'Have you + 过去分词，现在完成时问句，询问对方是否已完成某事。' },
      { p: 'your email', ipa: '/jɔːr ˈiːmeɪl/', cn: '你的邮箱', why: 'your 限定属于对方的邮箱，区别于公共邮箱或群发邮件。' },
    ],
    grammar: [
      { q: '为什么用 Have you checked 而不是 Did you check？', a: 'Have you checked 是现在完成时，强调「到现在为止是否已经查过」，关注当前状态。\nDid you check 是一般过去时，强调过去某个时间点的动作。\n✅ Have you checked your email?（你查过邮箱了吗？）—— 关心现在是否已处理\n✅ Did you check your email this morning?（你今早查邮箱了吗？）—— 关心过去特定时间' },
    ],
    pattern: 'Have you + 过去分词 + 对象?',
    patternExamples: [
      { en: 'Have you checked the alarm log?', cn: '你查过告警日志了吗？', words: [] },
      { en: 'Have you finished the report?', cn: '你写完报告了吗？', words: [] },
      { en: 'Have you seen the new policy?', cn: '你看到新政策了吗？', words: [] },
    ],
    thinking: '邮件是办公室日常沟通的核心渠道。\nHave you checked your email 是提醒同事查看邮件的标准问句。\n中文说「你看邮箱了吗」，英语用 Have you checked your email。',
    pronunciation: 'checked 读 /tʃɛkt/，ed 发 /t/ 音。\nemail 重音在第一音节：E-mail。\n节奏：HAVE you ｜ CHECKED your E-mail?',
    quiz: [
      { q: '把「你看邮箱了吗？」用英语说出来。', a: 'Have you checked your email?' },
      { q: '「查看邮件」用英语怎么说？', a: 'check email (/tʃɛk ˈiːmeɪl/)' },
    ],
  },
  {
    id: 2482,
    speaker: 'Engineer',
    en: 'I have just sent you an email.',
    cn: '我刚刚给你发了一封邮件。',
    ipa: '/aɪ hæv dʒʌst sɛnt juː ən ˈiːmeɪl/',
    tags: ['第2482句', '邮件', '★★★★'],
    when: '完成告警报告后，通知同事已发送邮件供其查阅。',
    words: [
      { w: 'just', ipa: '/dʒʌst/', pos: '副词', cn: '刚刚；刚才', memory: 'just 表示时间上非常接近当前时刻。', phonics: 'j 读 /dʒ/，ust 读 /ʌst/。', collocations: [['just sent', '刚发送'], ['just finished', '刚完成'], ['just arrived', '刚到']], examples: [['I just got back.', '我刚回来。'], ['She just called.', '她刚打过电话。']] },
      { w: 'sent', ipa: '/sɛnt/', pos: '动词（过去分词）', cn: '发送（send 的过去分词）', memory: 'send 的过去式和过去分词都是 sent。', phonics: 's 读 /s/，ent 读 /ɛnt/。', collocations: [['sent an email', '发了邮件'], ['sent the report', '发了报告']], examples: [['I sent the file yesterday.', '我昨天发了文件。'], ['Has it been sent?', '发了吗？']] },
    ],
    phrases: [
      { p: 'have just sent', ipa: '/hæv dʒʌst sɛnt/', cn: '刚刚发送', why: 'have + just + 过去分词，现在完成时表示刚刚完成的动作，强调时间上的「刚刚」。' },
    ],
    grammar: [
      { q: 'just 在句中的位置在哪里？', a: 'just 作为副词放在 have 和过去分词之间，表示「刚刚」。\n✅ I have just sent you an email.（我刚给你发了邮件。）\n❌ I just have sent you an email.（错误：just 位置不对）\n✅ I just sent you an email.（口语中也可省略 have，但正式场合用完整形式）' },
    ],
    pattern: 'I have just + 过去分词 + 对象',
    patternExamples: [
      { en: 'I have just finished the inspection.', cn: '我刚完成巡检。', words: [] },
      { en: 'I have just updated the log.', cn: '我刚更新了日志。', words: [] },
      { en: 'I have just received a call from the vendor.', cn: '我刚收到供应商的电话。', words: [] },
    ],
    thinking: '通知同事邮件已发出是办公室日常高频场景。\nI have just sent 强调动作刚刚完成，对方现在可以查收。\n中文说「我刚刚给你发了邮件」，英语用 I have just sent you an email。',
    pronunciation: 'just 读 /dʒʌst/，sent 读 /sɛnt/。\n节奏：I have JUST ｜ SENT you ｜ an E-mail.',
    quiz: [
      { q: '把「我刚刚给你发了一封邮件。」用英语说出来。', a: 'I have just sent you an email.' },
      { q: '「刚刚」用英语怎么说？', a: 'just (/dʒʌst/)' },
    ],
  },
  {
    id: 2483,
    speaker: 'Engineer',
    en: 'Please reply when you have time.',
    cn: '有时间请回复一下。',
    ipa: '/pliːz rɪˈplaɪ wɛn juː hæv taɪm/',
    tags: ['第2483句', '邮件', '★★★★'],
    when: '邮件末尾提醒同事有空时回复，不催促但表达期望。',
    words: [
      { w: 'reply', ipa: '/rɪˈplaɪ/', pos: '动词', cn: '回复；答复', memory: 're(回)+ply(折)→折回去→回复。', phonics: 're 读 /rɪ/，ply 读 /plaɪ/，重音在第二音节。', collocations: [['reply to email', '回复邮件'], ['please reply', '请回复'], ['reply soon', '尽快回复']], examples: [['Please reply by Friday.', '请周五前回复。'], ['He hasn\'t replied yet.', '他还没回复。']] },
    ],
    phrases: [
      { p: 'when you have time', ipa: '/wɛn juː hæv taɪm/', cn: '你有时间的时候', why: 'when + 主语 + 动词，时间状语从句，表示「在某个时候」，语气委婉不催促。' },
    ],
    grammar: [
      { q: 'when you have time 和 as soon as possible 哪个更礼貌？', a: 'when you have time 更礼貌，给对方充分自由度，不施加时间压力。\nas soon as possible (ASAP) 更紧迫，暗示需要尽快处理。\n✅ Please reply when you have time.（有时间请回复。）—— 委婉\n✅ Please reply ASAP.（请尽快回复。）—— 紧迫\n日常沟通推荐 when you have time，紧急事项用 ASAP。' },
    ],
    pattern: 'Please + 动词 + when you have time.',
    patternExamples: [
      { en: 'Please review when you have time.', cn: '有时间请审核一下。', words: [] },
      { en: 'Please check when you have time.', cn: '有时间请查看一下。', words: [] },
      { en: 'Please confirm when you have time.', cn: '有时间请确认一下。', words: [] },
    ],
    thinking: '邮件中提醒回复是常见需求，语气需要委婉。\nPlease reply when you have time 既表达了期望又不施加压力。\n中文说「有时间请回复一下」，英语用 Please reply when you have time。',
    pronunciation: 'reply 重音在第二音节：re-PLY。\n节奏：Please re-PLY ｜ when you have TIME.',
    quiz: [
      { q: '把「有时间请回复一下。」用英语说出来。', a: 'Please reply when you have time.' },
      { q: '「回复」用英语怎么说？', a: 'reply (/rɪˈplaɪ/)' },
    ],
  },
  {
    id: 2484,
    speaker: 'Engineer',
    en: "I haven't received your email yet.",
    cn: '我还没有收到你的邮件。',
    ipa: '/aɪ ˈhævənt rɪˈsiːvd jɔːr ˈiːmeɪl jɛt/',
    tags: ['第2484句', '邮件', '★★★★'],
    when: '同事说已发邮件但你未收到，告知对方等待中。',
    words: [
      { w: "haven't", ipa: '/ˈhævənt/', pos: '助动词（否定缩写）', cn: '没有（have not 的缩写）', memory: 'have + not 的缩写，用于现在完成时否定句。', phonics: 'hav 读 /hæv/，en 读 /ənt/。', collocations: [["haven't received", '没有收到'], ["haven't seen", '没有看到']], examples: [["I haven't got it yet.", '我还没收到。'], ["We haven't started.", '我们还没开始。']] },
      { w: 'received', ipa: '/rɪˈsiːvd/', pos: '动词（过去分词）', cn: '收到', memory: 're(回)+ceive(拿)+d→拿回来→收到。', phonics: 're 读 /rɪ/，ceiv 读 /siːv/，ed 读 /d/。', collocations: [['received an email', '收到邮件'], ['received a call', '接到电话']], examples: [['I received the package.', '我收到了包裹。'], ['Have you received it?', '你收到了吗？']] },
      { w: 'yet', ipa: '/jɛt/', pos: '副词', cn: '还；尚未', memory: 'yet 在否定句末尾表示「到现在为止还没有」。', phonics: 'y 读 /j/，et 读 /ɛt/。', collocations: [['not yet', '还没有'], ['hasn\'t arrived yet', '还没到']], examples: [['Not yet.', '还没有。'], ['Is it done yet?', '完成了吗？']] },
    ],
    phrases: [
      { p: "haven't received…yet", ipa: '/ˈhævənt rɪˈsiːvd…jɛt/', cn: '还没有收到', why: 'haven\'t + 过去分词 + yet 是现在完成时否定结构，表示「到目前为止还没有…」，yet 放在句末。' },
    ],
    grammar: [
      { q: 'yet 必须放在句末吗？', a: '在否定句中，yet 通常放在句末，表示「到目前为止还没有」。\n✅ I haven\'t received it yet.（我还没收到。）\n❌ I yet haven\'t received it.（错误：yet 位置不对）\n在疑问句中 yet 也放句末：Have you received it yet?（你收到了吗？）' },
    ],
    pattern: "I haven't + 过去分词 + 对象 + yet.",
    patternExamples: [
      { en: "I haven't seen the report yet.", cn: '我还没看到报告。', words: [] },
      { en: "We haven't received the parts yet.", cn: '我们还没收到零件。', words: [] },
      { en: "The vendor hasn't replied yet.", cn: '供应商还没回复。', words: [] },
    ],
    thinking: '告诉对方邮件未收到是常见沟通场景。\nhaven\'t received…yet 强调到目前为止的状态，暗示仍在等待。\n中文说「还没有收到」，英语用 haven\'t received…yet。',
    pronunciation: "haven't 读 /ˈhævənt/，received 重音在第二音节。\nyet 读 /jɛt/。\n节奏：I HAV-en't ｜ re-CEIVED your E-mail ｜ YET.",
    quiz: [
      { q: '把「我还没有收到你的邮件。」用英语说出来。', a: "I haven't received your email yet." },
      { q: '「还没有」用英语怎么说？', a: "haven't…yet (/ˈhævənt…jɛt/)" },
    ],
  },
  {
    id: 2485,
    speaker: 'Engineer',
    en: 'Could you resend the email?',
    cn: '你能重新发送一次邮件吗？',
    ipa: '/kʊd juː ˌriːˈsɛnd ðə ˈiːmeɪl/',
    tags: ['第2485句', '邮件', '★★★★'],
    when: '邮件未收到或打不开，礼貌请求对方重发。',
    words: [
      { w: 'resend', ipa: '/ˌriːˈsɛnd/', pos: '动词', cn: '重新发送', memory: 're(重新)+send(发送)→再发一次。', phonics: 're 读 /riː/，send 读 /sɛnd/，次重音在第一音节。', collocations: [['resend email', '重发邮件'], ['resend the file', '重发文件']], examples: [['Please resend it.', '请重发一下。'], ['Could you resend the attachment?', '你能重发附件吗？']] },
    ],
    phrases: [
      { p: 'Could you resend', ipa: '/kʊd juː ˌriːˈsɛnd/', cn: '你能重新发送吗', why: 'Could you + 动词原形，礼貌请求句式，比 Can you 更委婉。' },
    ],
    grammar: [
      { q: 'resend 和 send again 有什么区别？', a: '两者意思相同，但 resend 更简洁专业，send again 更口语化。\n✅ Could you resend the email?（你能重发邮件吗？）—— 简洁\n✅ Could you send the email again?（你能再发一次邮件吗？）—— 口语化\n邮件沟通中推荐用 resend。' },
    ],
    pattern: 'Could you resend + 对象?',
    patternExamples: [
      { en: 'Could you resend the report?', cn: '你能重发报告吗？', words: [] },
      { en: 'Could you resend the invitation?', cn: '你能重发邀请吗？', words: [] },
      { en: 'Could you resend the link?', cn: '你能重发链接吗？', words: [] },
    ],
    thinking: '请求重发邮件是常见场景，需要礼貌表达。\nCould you resend 是标准的礼貌请求句式。\n中文说「你能重新发一次吗」，英语用 Could you resend。',
    pronunciation: 'resend 次重音在第一音节：RE-send。\n节奏：COULD you ｜ re-SEND ｜ the E-mail?',
    quiz: [
      { q: '把「你能重新发送一次邮件吗？」用英语说出来。', a: 'Could you resend the email?' },
      { q: '「重新发送」用英语怎么说？', a: 'resend (/ˌriːˈsɛnd/)' },
    ],
  },
  {
    id: 2486,
    speaker: 'Engineer',
    en: 'I forgot to attach the file.',
    cn: '我忘记添加附件了。',
    ipa: '/aɪ fərˈɡɒt tuː əˈtætʃ ðə faɪl/',
    tags: ['第2486句', '邮件', '★★★★'],
    when: '邮件发出后发现漏了附件，需要补发时先说明原因。',
    words: [
      { w: 'forgot', ipa: '/fərˈɡɒt/', pos: '动词（过去式）', cn: '忘记了', memory: 'forget 的过去式，表示已经发生的遗忘。', phonics: 'for 读 /fər/，got 读 /ɡɒt/，重音在第二音节。', collocations: [['forgot to', '忘记去做'], ['forgot about', '忘记了某事']], examples: [['I forgot to call.', '我忘了打电话。'], ['Sorry, I forgot.', '抱歉，我忘了。']] },
      { w: 'attach', ipa: '/əˈtætʃ/', pos: '动词', cn: '附加；附上', memory: 'at(朝向)+tach(钉)→钉上去→附加。', phonics: 'a 读 /ə/，ttach 读 /tætʃ/，重音在第二音节。', collocations: [['attach a file', '添加附件'], ['attach the document', '附上文件']], examples: [['Please attach the report.', '请附上报告。'], ['I forgot to attach it.', '我忘了附上。']] },
    ],
    phrases: [
      { p: 'forgot to attach', ipa: '/fərˈɡɒt tuː əˈtætʃ/', cn: '忘记添加附件', why: 'forget to + 动词原形，表示「忘记去做某事」（事情没做）。区别于 forget doing（忘记做过某事）。' },
    ],
    grammar: [
      { q: 'forget to do 和 forget doing 有什么区别？', a: 'forget to do 表示「忘记去做某事」，事情没做。\nforget doing 表示「忘记做过某事」，事情做了但忘了。\n✅ I forgot to attach the file.（我忘了加附件。）—— 没加\n✅ I forgot attaching the file.（我忘了已经加过附件。）—— 加了但忘了\n邮件场景通常用 forget to do。' },
    ],
    pattern: 'I forgot to + 动词原形 + 对象.',
    patternExamples: [
      { en: 'I forgot to sign the form.', cn: '我忘了签字。', words: [] },
      { en: 'I forgot to update the schedule.', cn: '我忘了更新日程。', words: [] },
      { en: 'I forgot to copy the manager.', cn: '我忘了抄送经理。', words: [] },
    ],
    thinking: '忘记附件是邮件沟通中常见的失误。\nI forgot to attach 直接承认疏忽，便于后续补发。\n中文说「我忘记添加附件了」，英语用 I forgot to attach the file。',
    pronunciation: 'forgot 重音在第二音节：for-GOT。\nattach 重音在第二音节：at-TACH。\n节奏：I for-GOT ｜ to at-TACH ｜ the FILE.',
    quiz: [
      { q: '把「我忘记添加附件了。」用英语说出来。', a: 'I forgot to attach the file.' },
      { q: '「添加附件」用英语怎么说？', a: 'attach the file (/əˈtætʃ ðə faɪl/)' },
    ],
  },
  {
    id: 2487,
    speaker: 'Engineer',
    en: "I've just sent the attachment.",
    cn: '我刚刚把附件发过去了。',
    ipa: '/aɪv dʒʌst sɛnt ðə əˈtætʃmənt/',
    tags: ['第2487句', '邮件', '★★★★'],
    when: '补发附件后通知对方查收。',
    words: [
      { w: 'attachment', ipa: '/əˈtætʃmənt/', pos: '名词', cn: '附件', memory: 'attach(附加)+ment(名词后缀)→附加的东西→附件。', phonics: 'a 读 /ə/，ttach 读 /tætʃ/，ment 读 /mənt/，重音在第二音节。', collocations: [['email attachment', '邮件附件'], ['download attachment', '下载附件'], ['open attachment', '打开附件']], examples: [['The attachment is too large.', '附件太大了。'], ['Please check the attachment.', '请查看附件。']] },
    ],
    phrases: [
      { p: "I've just sent", ipa: '/aɪv dʒʌst sɛnt/', cn: '我刚发送了', why: "I've (I have) + just + sent，现在完成时强调刚刚完成的动作。" },
    ],
    grammar: [
      { q: "I've 是什么的缩写？", a: "I've 是 I have 的缩写，用于现在完成时。\n✅ I've just sent the attachment.（我刚发了附件。）\n✅ I have just sent the attachment.（完整形式，更正式）\n口语和邮件中常用缩写形式。" },
    ],
    pattern: "I've just + 过去分词 + 对象.",
    patternExamples: [
      { en: "I've just updated the spreadsheet.", cn: '我刚更新了表格。', words: [] },
      { en: "I've just finished the report.", cn: '我刚写完报告。', words: [] },
      { en: "I've just forwarded the email.", cn: '我刚转发了邮件。', words: [] },
    ],
    thinking: '补发附件后需要通知对方。\nI\'ve just sent 表示刚刚完成的动作，对方现在可以查收。\n中文说「我刚把附件发过去了」，英语用 I\'ve just sent the attachment。',
    pronunciation: "I've 读 /aɪv/，attachment 重音在第二音节。\n节奏：I've JUST ｜ SENT the ｜ at-TACH-ment.",
    quiz: [
      { q: '把「我刚刚把附件发过去了。」用英语说出来。', a: "I've just sent the attachment." },
      { q: '「附件」用英语怎么说？', a: 'attachment (/əˈtætʃmənt/)' },
    ],
  },
  {
    id: 2488,
    speaker: 'Engineer',
    en: 'Please check the attachment carefully.',
    cn: '请仔细查看附件。',
    ipa: '/pliːz tʃɛk ðə əˈtætʃmənt ˈkɛərfəli/',
    tags: ['第2488句', '邮件', '★★★★'],
    when: '发送重要数据或报告后，提醒对方认真审阅附件内容。',
    words: [
      { w: 'carefully', ipa: '/ˈkɛərfəli/', pos: '副词', cn: '仔细地；认真地', memory: 'careful(仔细的)+ly(副词后缀)→仔细地。', phonics: 'care 读 /kɛər/，ful 读 /fəl/，ly 读 /li/，重音在第一音节。', collocations: [['check carefully', '仔细检查'], ['read carefully', '仔细阅读'], ['review carefully', '仔细审核']], examples: [['Please read it carefully.', '请仔细阅读。'], ['Check the data carefully.', '仔细核对数据。']] },
    ],
    phrases: [
      { p: 'check…carefully', ipa: '/tʃɛk…ˈkɛərfəli/', cn: '仔细检查', why: 'carefully 作为副词修饰 check，强调检查的认真程度。' },
    ],
    grammar: [
      { q: 'carefully 放在句末还是句中？', a: '副词 carefully 通常放在动词或宾语之后，句末最常见。\n✅ Please check the attachment carefully.（请仔细查看附件。）—— 自然\n✅ Please carefully check the attachment.（请仔细查看附件。）—— 强调仔细\n两种都可以，句末更自然常见。' },
    ],
    pattern: 'Please + 动词 + 对象 + carefully.',
    patternExamples: [
      { en: 'Please review the contract carefully.', cn: '请仔细审阅合同。', words: [] },
      { en: 'Please inspect the equipment carefully.', cn: '请仔细检查设备。', words: [] },
      { en: 'Please read the instructions carefully.', cn: '请仔细阅读说明。', words: [] },
    ],
    thinking: '提醒对方仔细查看附件是邮件中的常见需求。\ncarefully 强调审阅的认真程度，适用于重要文件。\n中文说「请仔细查看」，英语用 Please check…carefully。',
    pronunciation: 'carefully 重音在第一音节：CARE-ful-ly。\n节奏：Please CHECK ｜ the at-TACH-ment ｜ CARE-ful-ly.',
    quiz: [
      { q: '把「请仔细查看附件。」用英语说出来。', a: 'Please check the attachment carefully.' },
      { q: '「仔细地」用英语怎么说？', a: 'carefully (/ˈkɛərfəli/)' },
    ],
  },
  {
    id: 2489,
    speaker: 'Engineer',
    en: 'I have copied everyone in the email.',
    cn: '我已经把所有人抄送了。',
    ipa: '/aɪ hæv ˈkɒpid ˈɛvriwʌn ɪn ðə ˈiːmeɪl/',
    tags: ['第2489句', '邮件', '★★★★'],
    when: '发送邮件后确认已将所有相关人员加入抄送列表。',
    words: [
      { w: 'copied', ipa: '/ˈkɒpid/', pos: '动词（过去分词）', cn: '抄送', memory: 'copy(复制)+ed→在邮件中复制一份给其他人→抄送。', phonics: 'cop 读 /kɒp/，ied 读 /id/。', collocations: [['copy everyone', '抄送所有人'], ['copy the team', '抄送团队'], ['CC (carbon copy)', '抄送']], examples: [['I copied the manager.', '我抄送了经理。'], ['Please copy me in.', '请抄送我。']] },
    ],
    phrases: [
      { p: 'copied everyone', ipa: '/ˈkɒpid ˈɛvriwʌn/', cn: '抄送了所有人', why: 'copy 在邮件语境中指「抄送」(CC)，everyone 表示所有相关人员都包含在内。' },
    ],
    grammar: [
      { q: 'copy 和 CC 有什么区别？', a: 'copy 是动词，CC (carbon copy) 是名词或动词，两者在邮件场景中意思相同。\n✅ I copied everyone.（我抄送了所有人。）—— 用动词 copy\n✅ I CC\'d everyone.（我抄送了所有人。）—— 用 CC 作动词\n✅ Please CC me.（请抄送我。）—— CC 作动词\n日常邮件沟通中两种都常用。' },
    ],
    pattern: 'I have copied + 人员 + in the email.',
    patternExamples: [
      { en: 'I have copied the team lead.', cn: '我抄送了团队负责人。', words: [] },
      { en: 'I have copied all stakeholders.', cn: '我抄送了所有相关方。', words: [] },
      { en: 'I have copied the vendor contact.', cn: '我抄送了供应商联系人。', words: [] },
    ],
    thinking: '邮件抄送是团队协作的基本要求。\nI have copied everyone 确认所有相关人员都已收到邮件。\n中文说「我已经把所有人抄送了」，英语用 I have copied everyone in the email。',
    pronunciation: 'copied 读 /ˈkɒpid/，everyone 重音在第一音节。\n节奏：I have COP-ied ｜ EV-ry-one ｜ in the E-mail.',
    quiz: [
      { q: '把「我已经把所有人抄送了。」用英语说出来。', a: 'I have copied everyone in the email.' },
      { q: '「抄送」用英语怎么说？', a: 'copy (/ˈkɒpi/) 或 CC (/siː siː/)' },
    ],
  },
  {
    id: 2490,
    speaker: 'Engineer',
    en: 'Please keep me copied on future emails.',
    cn: '以后邮件请抄送给我。',
    ipa: '/pliːz kiːp miː ˈkɒpid ɒn ˈfjuːtʃər ˈiːmeɪlz/',
    tags: ['第2490句', '邮件', '★★★★'],
    when: '希望后续邮件沟通中自己始终在抄送列表中，保持信息同步。',
    words: [
      { w: 'keep', ipa: '/kiːp/', pos: '动词', cn: '保持', memory: 'keep 表示持续某种状态或行为。', phonics: 'k 读 /k/，eep 读 /iːp/。', collocations: [['keep me posted', '让我了解最新情况'], ['keep me in the loop', '让我知情'], ['keep updated', '保持更新']], examples: [['Please keep me informed.', '请让我知情。'], ['Keep me in the loop.', '让我知情。']] },
      { w: 'future', ipa: '/ˈfjuːtʃər/', pos: '形容词', cn: '未来的；以后的', memory: 'future 表示时间上在现在之后的。', phonics: 'fu 读 /fjuː/，ture 读 /tʃər/。', collocations: [['future emails', '以后的邮件'], ['future reference', '日后参考'], ['in the future', '在未来']], examples: [['For future reference.', '供日后参考。'], ['In future meetings.', '在以后的会议中。']] },
    ],
    phrases: [
      { p: 'keep me copied', ipa: '/kiːp miː ˈkɒpid/', cn: '保持抄送我', why: 'keep + 宾语 + 过去分词，表示「让某人保持某种状态」，这里指持续被抄送。' },
      { p: 'on future emails', ipa: '/ɒn ˈfjuːtʃər ˈiːmeɪlz/', cn: '在以后的邮件中', why: 'on 表示「关于/在…上」，future emails 指后续的邮件沟通。' },
    ],
    grammar: [
      { q: 'keep me copied 和 keep me in the loop 有什么区别？', a: 'keep me copied 更具体，明确要求在邮件抄送列表中。\nkeep me in the loop 更笼统，表示「让我知情/了解最新情况」，不限于邮件。\n✅ Please keep me copied on future emails.（以后邮件请抄送我。）—— 具体\n✅ Please keep me in the loop.（请让我知情。）—— 笼统\n邮件场景推荐用 keep me copied。' },
    ],
    pattern: 'Please keep me + 过去分词/形容词 + on/in + 范围.',
    patternExamples: [
      { en: 'Please keep me informed about the project.', cn: '请让我了解项目进展。', words: [] },
      { en: 'Please keep me updated on any changes.', cn: '有任何变更请通知我。', words: [] },
      { en: 'Please keep me in the loop.', cn: '请让我知情。', words: [] },
    ],
    thinking: '要求后续邮件抄送自己是保持信息同步的重要方式。\nPlease keep me copied on future emails 明确表达持续抄送的期望。\n中文说「以后邮件请抄送给我」，英语用 Please keep me copied on future emails。',
    pronunciation: 'keep 读 /kiːp/，future 重音在第一音节。\n节奏：Please KEEP me ｜ COP-ied ｜ on FU-ture E-mails.',
    quiz: [
      { q: '把「以后邮件请抄送给我。」用英语说出来。', a: 'Please keep me copied on future emails.' },
      { q: '「让我知情」用英语怎么说？', a: 'keep me in the loop (/kiːp miː ɪn ðə luːp/)' },
    ],
  },
  {
    id: 2491,
    speaker: 'Engineer',
    en: 'Please save the file in the shared folder.',
    cn: '请把文件保存到共享文件夹。',
    ipa: '/pliːz seɪv ðə faɪl ɪn ðə ʃɛərd ˈfoʊldər/',
    tags: ['第2491句', '文件', '★★★★'],
    when: '提醒同事将文件保存到团队共享位置，方便所有人访问。',
    words: [
      { w: 'save', ipa: '/seɪv/', pos: '动词', cn: '保存', memory: 'save 原义「拯救」，在电脑语境中指保存数据。', phonics: 's 读 /s/，ave 读 /eɪv/。', collocations: [['save the file', '保存文件'], ['save as', '另存为'], ['auto-save', '自动保存']], examples: [['Please save your work.', '请保存你的工作。'], ['Don\'t forget to save.', '别忘了保存。']] },
      { w: 'shared folder', ipa: '/ʃɛərd ˈfoʊldər/', pos: '名词短语', cn: '共享文件夹', memory: 'shared(共享的)+folder(文件夹)→多人可访问的文件夹。', phonics: 'shared 读 /ʃɛərd/，folder 重音在第一音节。', collocations: [['shared drive', '共享盘'], ['shared folder', '共享文件夹'], ['network folder', '网络文件夹']], examples: [['Upload it to the shared folder.', '上传到共享文件夹。'], ['Check the shared drive.', '查看共享盘。']] },
    ],
    phrases: [
      { p: 'save…in the shared folder', ipa: '/seɪv…ɪn ðə ʃɛərd ˈfoʊldər/', cn: '保存到共享文件夹', why: 'in 表示保存到某个位置内部，shared folder 是团队协作的标准存储位置。' },
    ],
    grammar: [
      { q: 'save in 和 save to 有什么区别？', a: '两者都可以用，但略有区别：\nsave in 强调保存在某个位置/文件夹内部。\nsave to 强调保存的目标方向。\n✅ Save the file in the shared folder.（保存到共享文件夹里。）\n✅ Save the file to the desktop.（保存到桌面。）\n文件夹用 in，具体位置/设备用 to，但日常中常混用。' },
    ],
    pattern: 'Please save + 对象 + in/to + 位置.',
    patternExamples: [
      { en: 'Please save the report in the archive folder.', cn: '请把报告保存到归档文件夹。', words: [] },
      { en: 'Please save it to the network drive.', cn: '请保存到网络盘。', words: [] },
      { en: 'Please save a copy in the backup folder.', cn: '请在备份文件夹保存一份。', words: [] },
    ],
    thinking: '文件保存到共享位置是团队协作的基础要求。\nPlease save the file in the shared folder 是标准的指示句式。\n中文说「请把文件保存到共享文件夹」，英语直接对应。',
    pronunciation: 'save 读 /seɪv/，shared 读 /ʃɛərd/。\n节奏：Please SAVE ｜ the FILE ｜ in the SHARED FOL-der.',
    quiz: [
      { q: '把「请把文件保存到共享文件夹。」用英语说出来。', a: 'Please save the file in the shared folder.' },
      { q: '「共享文件夹」用英语怎么说？', a: 'shared folder (/ʃɛərd ˈfoʊldər/)' },
    ],
  },
  {
    id: 2492,
    speaker: 'Engineer',
    en: 'Please upload the latest version.',
    cn: '请上传最新版本。',
    ipa: '/pliːz ˌʌpˈloʊd ðə ˈleɪtɪst ˈvɜːrʒən/',
    tags: ['第2492句', '文件', '★★★★'],
    when: '文件更新后，提醒同事将最新版本上传到共享位置。',
    words: [
      { w: 'upload', ipa: '/ˌʌpˈloʊd/', pos: '动词', cn: '上传', memory: 'up(向上)+load(装载)→往上传输数据→上传。', phonics: 'up 读 /ʌp/，load 读 /loʊd/，次重音在第一音节。', collocations: [['upload a file', '上传文件'], ['upload to cloud', '上传到云端']], examples: [['Please upload the photo.', '请上传照片。'], ['I uploaded the report.', '我上传了报告。']] },
      { w: 'latest', ipa: '/ˈleɪtɪst/', pos: '形容词（最高级）', cn: '最新的', memory: 'late(晚的)+st(最高级)→最晚的→最新的。', phonics: 'late 读 /leɪt/，est 读 /ɪst/。', collocations: [['latest version', '最新版本'], ['latest update', '最新更新'], ['latest news', '最新消息']], examples: [['Use the latest version.', '使用最新版本。'], ['What\'s the latest status?', '最新状态是什么？']] },
    ],
    phrases: [
      { p: 'the latest version', ipa: '/ðə ˈleɪtɪst ˈvɜːrʒən/', cn: '最新版本', why: 'latest 强调时间上最新的，version 指文件的版本，确保大家使用同一版本。' },
    ],
    grammar: [
      { q: 'latest 和 newest 有什么区别？', a: '两者都表示「最新的」，但 latest 更常用于文件、版本、消息等。\nnewest 更常用于物品、设备等实体。\n✅ the latest version（最新版本）—— 常用\n✅ the newest laptop（最新的笔记本电脑）—— 常用\n文件版本推荐用 latest。' },
    ],
    pattern: 'Please upload + the latest + 名词.',
    patternExamples: [
      { en: 'Please upload the latest report.', cn: '请上传最新报告。', words: [] },
      { en: 'Please upload the latest drawing.', cn: '请上传最新图纸。', words: [] },
      { en: 'Please upload the latest schedule.', cn: '请上传最新日程。', words: [] },
    ],
    thinking: '上传最新版本是文件管理的基本要求。\nPlease upload the latest version 确保团队使用一致的文件。\n中文说「请上传最新版本」，英语直接对应。',
    pronunciation: 'upload 次重音在第一音节：UP-load。\nlatest 读 /ˈleɪtɪst/。\n节奏：Please up-LOAD ｜ the LA-test VER-sion.',
    quiz: [
      { q: '把「请上传最新版本。」用英语说出来。', a: 'Please upload the latest version.' },
      { q: '「最新版本」用英语怎么说？', a: 'the latest version (/ðə ˈleɪtɪst ˈvɜːrʒən/)' },
    ],
  },
  {
    id: 2493,
    speaker: 'Engineer',
    en: 'Please download the updated file.',
    cn: '请下载更新后的文件。',
    ipa: '/pliːz ˌdaʊnˈloʊd ðə ˌʌpˈdeɪtɪd faɪl/',
    tags: ['第2493句', '文件', '★★★★'],
    when: '文件已更新上传，通知同事下载新版本。',
    words: [
      { w: 'download', ipa: '/ˌdaʊnˈloʊd/', pos: '动词', cn: '下载', memory: 'down(向下)+load(装载)→从网络获取数据→下载。', phonics: 'down 读 /daʊn/，load 读 /loʊd/。', collocations: [['download a file', '下载文件'], ['download the app', '下载应用']], examples: [['Please download the template.', '请下载模板。'], ['I downloaded the update.', '我下载了更新。']] },
      { w: 'updated', ipa: '/ˌʌpˈdeɪtɪd/', pos: '形容词', cn: '更新后的', memory: 'update(更新)+d(过去分词)→已经更新过的。', phonics: 'up 读 /ʌp/，date 读 /deɪt/，ed 读 /d/。', collocations: [['updated file', '更新后的文件'], ['updated version', '更新版本'], ['updated schedule', '更新后的日程']], examples: [['Use the updated file.', '使用更新后的文件。'], ['The list has been updated.', '列表已更新。']] },
    ],
    phrases: [
      { p: 'the updated file', ipa: '/ðə ˌʌpˈdeɪtɪd faɪl/', cn: '更新后的文件', why: 'updated 作形容词修饰 file，表明文件已经包含最新修改。' },
    ],
    grammar: [
      { q: 'updated 和 new 修饰 file 有什么区别？', a: 'updated file 指在原有基础上修改过的文件。\nnew file 指全新创建的文件。\n✅ Please download the updated file.（请下载更新后的文件。）—— 在旧版上修改\n✅ Please download the new file.（请下载新文件。）—— 全新文件\n文件管理场景中 updated 更精确。' },
    ],
    pattern: 'Please download + the updated + 名词.',
    patternExamples: [
      { en: 'Please download the updated schedule.', cn: '请下载更新后的日程。', words: [] },
      { en: 'Please download the updated manual.', cn: '请下载更新后的手册。', words: [] },
      { en: 'Please download the updated checklist.', cn: '请下载更新后的检查表。', words: [] },
    ],
    thinking: '通知同事下载更新文件是文件流转的常见步骤。\nPlease download the updated file 明确指示下载已修改的版本。\n中文说「请下载更新后的文件」，英语直接对应。',
    pronunciation: 'download 次重音在第一音节：DOWN-load。\nupdated 次重音在第一音节。\n节奏：Please down-LOAD ｜ the up-DA-ted FILE.',
    quiz: [
      { q: '把「请下载更新后的文件。」用英语说出来。', a: 'Please download the updated file.' },
      { q: '「下载」用英语怎么说？', a: 'download (/ˌdaʊnˈloʊd/)' },
    ],
  },
  {
    id: 2494,
    speaker: 'Engineer',
    en: 'The file cannot be opened.',
    cn: '这个文件打不开。',
    ipa: '/ðə faɪl ˈkænɒt biː ˈoʊpənd/',
    tags: ['第2494句', '文件', '★★★★'],
    when: '收到文件后发现无法打开，向对方报告问题。',
    words: [
      { w: 'cannot', ipa: '/ˈkænɒt/', pos: '助动词（否定）', cn: '不能；无法', memory: 'can(能)+not(不)→不能。', phonics: 'can 读 /kæn/，not 读 /ɒt/。', collocations: [['cannot open', '无法打开'], ['cannot access', '无法访问'], ['cannot find', '找不到']], examples: [['I cannot log in.', '我无法登录。'], ['The system cannot connect.', '系统无法连接。']] },
      { w: 'opened', ipa: '/ˈoʊpənd/', pos: '动词（过去分词）', cn: '被打开', memory: 'open(打开)+ed(过去分词)，被动语态中表示「被打开」。', phonics: 'o 读 /oʊ/，pen 读 /pən/，ed 读 /d/。', collocations: [['file opened', '文件被打开'], ['cannot be opened', '无法被打开']], examples: [['The file opened successfully.', '文件成功打开了。'], ['It can\'t be opened.', '打不开。']] },
    ],
    phrases: [
      { p: 'cannot be opened', ipa: '/ˈkænɒt biː ˈoʊpənd/', cn: '无法被打开', why: 'cannot + be + 过去分词，被动语态否定句，表示文件无法执行「打开」这个动作。' },
    ],
    grammar: [
      { q: '为什么用被动语态 cannot be opened？', a: '文件本身不能执行动作，所以用被动语态「被打开」。\n✅ The file cannot be opened.（文件打不开。）—— 被动，文件是动作的接受者\n❌ The file cannot open.（错误：文件不能主动打开）\n但当 open 作不及格动词时也可：The file won\'t open.（文件打不开。）—— 口语化' },
    ],
    pattern: 'The + 对象 + cannot be + 过去分词.',
    patternExamples: [
      { en: 'The system cannot be accessed.', cn: '系统无法访问。', words: [] },
      { en: 'The printer cannot be connected.', cn: '打印机无法连接。', words: [] },
      { en: 'The password cannot be reset.', cn: '密码无法重置。', words: [] },
    ],
    thinking: '文件打不开是办公室常见的技术问题。\nThe file cannot be opened 用被动语态描述文件的状态。\n中文说「文件打不开」，英语用 The file cannot be opened。',
    pronunciation: 'cannot 读 /ˈkænɒt/，opened 读 /ˈoʊpənd/。\n节奏：The FILE ｜ CAN-not be ｜ O-pened.',
    quiz: [
      { q: '把「这个文件打不开。」用英语说出来。', a: 'The file cannot be opened.' },
      { q: '「无法被打开」用英语怎么说？', a: 'cannot be opened (/ˈkænɒt biː ˈoʊpənd/)' },
    ],
  },
  {
    id: 2495,
    speaker: 'Engineer',
    en: 'The file is corrupted.',
    cn: '这个文件已经损坏。',
    ipa: '/ðə faɪl ɪz kəˈrʌptɪd/',
    tags: ['第2495句', '文件', '★★★★'],
    when: '文件无法正常打开或内容异常，判断为文件损坏。',
    words: [
      { w: 'corrupted', ipa: '/kəˈrʌptɪd/', pos: '形容词', cn: '损坏的；已损坏的', memory: 'corrupt(损坏/腐败)+ed(形容词后缀)→数据已损坏。', phonics: 'cor 读 /kə/，rupt 读 /rʌpt/，ed 读 /ɪd/，重音在第二音节。', collocations: [['corrupted file', '损坏的文件'], ['data corruption', '数据损坏'], ['corrupted database', '损坏的数据库']], examples: [['The file seems corrupted.', '文件好像损坏了。'], ['The data is corrupted.', '数据损坏了。']] },
    ],
    phrases: [
      { p: 'is corrupted', ipa: '/ɪz kəˈrʌptɪd/', cn: '已损坏', why: 'is + corrupted (形容词)，描述文件当前处于损坏状态。' },
    ],
    grammar: [
      { q: 'corrupted 和 broken 有什么区别？', a: 'corrupted 专指数据/文件损坏，是技术术语。\nbroken 更通用，可指硬件故障或物品损坏。\n✅ The file is corrupted.（文件损坏了。）—— 数据/文件\n✅ The printer is broken.（打印机坏了。）—— 硬件\n✅ The link is broken.（链接失效了。）—— 链接\n文件损坏用 corrupted 更专业。' },
    ],
    pattern: 'The + 对象 + is corrupted.',
    patternExamples: [
      { en: 'The database is corrupted.', cn: '数据库损坏了。', words: [] },
      { en: 'The backup file is corrupted.', cn: '备份文件损坏了。', words: [] },
      { en: 'The USB drive is corrupted.', cn: 'U盘损坏了。', words: [] },
    ],
    thinking: '文件损坏是技术环境中常见的问题。\ncorrupted 是描述数据/文件损坏的专业术语。\n中文说「文件已经损坏」，英语用 The file is corrupted。',
    pronunciation: 'corrupted 重音在第二音节：cor-RUP-ted。\n节奏：The FILE ｜ is cor-RUP-ted.',
    quiz: [
      { q: '把「这个文件已经损坏。」用英语说出来。', a: 'The file is corrupted.' },
      { q: '「文件损坏」用英语怎么说？', a: 'The file is corrupted (/ðə faɪl ɪz kəˈrʌptɪd/)' },
    ],
  },
  {
    id: 2496,
    speaker: 'Engineer',
    en: 'Please rename the file.',
    cn: '请修改文件名称。',
    ipa: '/pliːz ˌriːˈneɪm ðə faɪl/',
    tags: ['第2496句', '文件', '★★★★'],
    when: '文件命名不规范，要求同事按规则重命名。',
    words: [
      { w: 'rename', ipa: '/ˌriːˈneɪm/', pos: '动词', cn: '重命名；改名', memory: 're(重新)+name(命名)→重新起名字→重命名。', phonics: 're 读 /riː/，name 读 /neɪm/。', collocations: [['rename the file', '重命名文件'], ['rename the folder', '重命名文件夹']], examples: [['Please rename it to v2.', '请改名为v2。'], ['I renamed the document.', '我给文档改了名。']] },
    ],
    phrases: [
      { p: 'rename the file', ipa: '/ˌriːˈneɪm ðə faɪl/', cn: '重命名文件', why: 'rename 是文件管理中的基本操作，re- 前缀表示「重新」。' },
    ],
    grammar: [
      { q: 'rename 后面可以接新名字吗？', a: '可以，rename 后面可以接 to + 新名称。\n✅ Please rename the file to Report_v2.pdf.（请把文件改名为 Report_v2.pdf。）\n✅ Please rename the file.（请重命名文件。）—— 不指定新名称\n指定新名称时更清晰。' },
    ],
    pattern: 'Please rename + 对象 + (to + 新名称).',
    patternExamples: [
      { en: 'Please rename the folder to Archive_2024.', cn: '请把文件夹改名为 Archive_2024。', words: [] },
      { en: 'Please rename it to Final_Report.', cn: '请改名为 Final_Report。', words: [] },
      { en: 'Please rename the document.', cn: '请重命名文档。', words: [] },
    ],
    thinking: '文件命名规范是团队协作的基础。\nPlease rename the file 是标准的指令句式。\n中文说「请修改文件名称」，英语用 Please rename the file。',
    pronunciation: 'rename 次重音在第一音节：RE-name。\n节奏：Please re-NAME ｜ the FILE.',
    quiz: [
      { q: '把「请修改文件名称。」用英语说出来。', a: 'Please rename the file.' },
      { q: '「重命名」用英语怎么说？', a: 'rename (/ˌriːˈneɪm/)' },
    ],
  },
  {
    id: 2497,
    speaker: 'Engineer',
    en: 'Please move the file to the archive folder.',
    cn: '请把文件移动到归档文件夹。',
    ipa: '/pliːz muːv ðə faɪl tuː ðə ˈɑːrkaɪv ˈfoʊldər/',
    tags: ['第2497句', '文件', '★★★★'],
    when: '项目完成后，将相关文件移至归档位置保持工作目录整洁。',
    words: [
      { w: 'move', ipa: '/muːv/', pos: '动词', cn: '移动', memory: 'move 表示将物体从一个位置转移到另一个位置。', phonics: 'm 读 /m/，ove 读 /uːv/。', collocations: [['move the file', '移动文件'], ['move to', '移动到']], examples: [['Please move it here.', '请移到这里。'], ['Move the folder to backup.', '把文件夹移到备份。']] },
      { w: 'archive', ipa: '/ˈɑːrkaɪv/', pos: '名词/形容词', cn: '归档；档案', memory: 'archive 原义「档案馆」，在文件管理中指归档存储位置。', phonics: 'ar 读 /ɑːr/，chive 读 /kaɪv/。', collocations: [['archive folder', '归档文件夹'], ['archive the email', '归档邮件'], ['data archive', '数据归档']], examples: [['Move old files to archive.', '把旧文件移到归档。'], ['Check the archive.', '查看归档。']] },
    ],
    phrases: [
      { p: 'move…to the archive folder', ipa: '/muːv…tuː ðə ˈɑːrkaɪv ˈfoʊldər/', cn: '移动到归档文件夹', why: 'move + to + 目标位置，表示将文件转移到归档位置进行长期保存。' },
    ],
    grammar: [
      { q: 'move 和 copy 有什么区别？', a: 'move 是移动，原位置的文件会消失。\ncopy 是复制，原位置的文件保留。\n✅ Move the file to archive.（移动文件到归档。）—— 原位置没有了\n✅ Copy the file to archive.（复制文件到归档。）—— 原位置还有\n归档通常用 move，备份通常用 copy。' },
    ],
    pattern: 'Please move + 对象 + to + 目标位置.',
    patternExamples: [
      { en: 'Please move the old reports to the backup folder.', cn: '请把旧报告移到备份文件夹。', words: [] },
      { en: 'Please move this to the completed folder.', cn: '请把这个移到已完成文件夹。', words: [] },
      { en: 'Please move the file to the shared drive.', cn: '请把文件移到共享盘。', words: [] },
    ],
    thinking: '文件归档是保持工作目录整洁的重要操作。\nPlease move the file to the archive folder 是标准的归档指令。\n中文说「请把文件移动到归档文件夹」，英语直接对应。',
    pronunciation: 'move 读 /muːv/，archive 重音在第一音节。\n节奏：Please MOVE ｜ the FILE ｜ to the AR-chive FOL-der.',
    quiz: [
      { q: '把「请把文件移动到归档文件夹。」用英语说出来。', a: 'Please move the file to the archive folder.' },
      { q: '「归档文件夹」用英语怎么说？', a: 'archive folder (/ˈɑːrkaɪv ˈfoʊldər/)' },
    ],
  },
  {
    id: 2498,
    speaker: 'Engineer',
    en: 'Please delete the old version.',
    cn: '请删除旧版本。',
    ipa: '/pliːz dɪˈliːt ðə oʊld ˈvɜːrʒən/',
    tags: ['第2498句', '文件', '★★★★'],
    when: '新版本上传后，要求清理旧版本避免混淆。',
    words: [
      { w: 'delete', ipa: '/dɪˈliːt/', pos: '动词', cn: '删除', memory: 'delete 原义「删除」，在电脑操作中指永久移除文件。', phonics: 'de 读 /dɪ/，lete 读 /liːt/，重音在第二音节。', collocations: [['delete a file', '删除文件'], ['delete the email', '删除邮件'], ['delete permanently', '永久删除']], examples: [['Please delete the duplicate.', '请删除重复文件。'], ['I deleted the old file.', '我删了旧文件。']] },
      { w: 'old version', ipa: '/oʊld ˈvɜːrʒən/', pos: '名词短语', cn: '旧版本', memory: 'old(旧的)+version(版本)→之前的版本。', phonics: 'old 读 /oʊld/，version 重音在第一音节。', collocations: [['old version', '旧版本'], ['previous version', '上一版本']], examples: [['Delete the old version.', '删除旧版本。'], ['Keep the old version as backup.', '保留旧版本作备份。']] },
    ],
    phrases: [
      { p: 'delete the old version', ipa: '/dɪˈliːt ðə oʊld ˈvɜːrʒən/', cn: '删除旧版本', why: 'delete 强调永久移除，old version 指已被新版本替代的旧文件。' },
    ],
    grammar: [
      { q: 'delete 和 remove 有什么区别？', a: 'delete 通常指永久删除，不可恢复。\nremove 更通用，可以指移除/拿走，不一定永久。\n✅ Please delete the old version.（请删除旧版本。）—— 永久删除\n✅ Please remove the shortcut.（请移除快捷方式。）—— 只是移走\n文件清理场景用 delete 更明确。' },
    ],
    pattern: 'Please delete + the old + 名词.',
    patternExamples: [
      { en: 'Please delete the old report.', cn: '请删除旧报告。', words: [] },
      { en: 'Please delete the old backup.', cn: '请删除旧备份。', words: [] },
      { en: 'Please delete the old logs.', cn: '请删除旧日志。', words: [] },
    ],
    thinking: '清理旧版本是文件管理的重要环节。\nPlease delete the old version 明确要求永久移除旧文件。\n中文说「请删除旧版本」，英语用 Please delete the old version。',
    pronunciation: 'delete 重音在第二音节：de-LETE。\n节奏：Please de-LETE ｜ the OLD VER-sion.',
    quiz: [
      { q: '把「请删除旧版本。」用英语说出来。', a: 'Please delete the old version.' },
      { q: '「删除」用英语怎么说？', a: 'delete (/dɪˈliːt/)' },
    ],
  },
  {
    id: 2499,
    speaker: 'Engineer',
    en: "Please don't overwrite the original file.",
    cn: '请不要覆盖原文件。',
    ipa: '/pliːz doʊnt ˌoʊvərˈraɪt ðə əˈrɪdʒɪnəl faɪl/',
    tags: ['第2499句', '文件', '★★★★'],
    when: '编辑文件时提醒同事保留原始版本，避免覆盖导致数据丢失。',
    words: [
      { w: 'overwrite', ipa: '/ˌoʊvərˈraɪt/', pos: '动词', cn: '覆盖（文件）', memory: 'over(在上面)+write(写)→在原文件上面写→覆盖。', phonics: 'over 读 /oʊvər/，write 读 /raɪt/，次重音在第一音节。', collocations: [['overwrite the file', '覆盖文件'], ['don\'t overwrite', '不要覆盖']], examples: [['Don\'t overwrite the original.', '不要覆盖原件。'], ['The file was overwritten.', '文件被覆盖了。']] },
      { w: 'original', ipa: '/əˈrɪdʒɪnəl/', pos: '形容词', cn: '原始的；原来的', memory: 'origin(起源)+al(形容词后缀)→最初的→原始的。', phonics: 'o 读 /ə/，rig 读 /rɪdʒ/，inal 读 /ɪnəl/，重音在第二音节。', collocations: [['original file', '原文件'], ['original version', '原始版本'], ['original data', '原始数据']], examples: [['Keep the original file.', '保留原文件。'], ['This is the original.', '这是原件。']] },
    ],
    phrases: [
      { p: "don't overwrite", ipa: '/doʊnt ˌoʊvərˈraɪt/', cn: '不要覆盖', why: 'overwrite 在文件操作中指用新内容替换旧内容，导致原始数据丢失。' },
    ],
    grammar: [
      { q: 'overwrite 和 override 有什么区别？', a: 'overwrite 指用新数据覆盖旧数据（文件操作）。\noverride 指推翻/覆盖某个决定或设置（权限操作）。\n✅ Don\'t overwrite the original file.（不要覆盖原文件。）—— 文件操作\n✅ The admin can override the setting.（管理员可以覆盖设置。）—— 权限操作\n文件场景用 overwrite。' },
    ],
    pattern: "Please don't overwrite + the original + 名词.",
    patternExamples: [
      { en: "Please don't overwrite the master template.", cn: '请不要覆盖主模板。', words: [] },
      { en: "Please don't overwrite the backup.", cn: '请不要覆盖备份。', words: [] },
      { en: "Please don't overwrite the shared file.", cn: '请不要覆盖共享文件。', words: [] },
    ],
    thinking: '保护原始文件不被覆盖是文件安全的基本要求。\nPlease don\'t overwrite the original file 明确警示不要覆盖。\n中文说「请不要覆盖原文件」，英语用 Please don\'t overwrite the original file。',
    pronunciation: 'overwrite 次重音在第一音节：O-ver-write。\noriginal 重音在第二音节。\n节奏：Please DON\'T ｜ o-ver-WRITE ｜ the o-RIG-i-nal FILE.',
    quiz: [
      { q: '把「请不要覆盖原文件。」用英语说出来。', a: "Please don't overwrite the original file." },
      { q: '「覆盖（文件）」用英语怎么说？', a: 'overwrite (/ˌoʊvərˈraɪt/)' },
    ],
  },
  {
    id: 2500,
    speaker: 'Engineer',
    en: 'Please back up the file before making any changes.',
    cn: '修改前请先备份文件。',
    ipa: '/pliːz bæk ʌp ðə faɪl bɪˈfɔːr ˈmeɪkɪŋ ˈɛni ˈtʃeɪndʒɪz/',
    tags: ['第2500句', '文件', '★★★★'],
    when: '编辑重要文件前，提醒先创建备份以防数据丢失。',
    words: [
      { w: 'back up', ipa: '/bæk ʌp/', pos: '动词短语', cn: '备份', memory: 'back(向后)+up(起来)→往后保存一份→备份。', phonics: 'back 读 /bæk/，up 读 /ʌp/。', collocations: [['back up data', '备份数据'], ['back up the file', '备份文件'], ['backup (noun)', '备份（名词）']], examples: [['Please back up your work.', '请备份你的工作。'], ['Always back up before editing.', '编辑前务必备份。']] },
      { w: 'changes', ipa: '/ˈtʃeɪndʒɪz/', pos: '名词（复数）', cn: '修改；变更', memory: 'change(改变)+s(复数)→多处修改。', phonics: 'chang 读 /tʃeɪndʒ/，es 读 /ɪz/。', collocations: [['make changes', '做修改'], ['save changes', '保存修改'], ['undo changes', '撤销修改']], examples: [['Save your changes.', '保存你的修改。'], ['Any changes?', '有修改吗？']] },
    ],
    phrases: [
      { p: 'back up the file', ipa: '/bæk ʌp ðə faɪl/', cn: '备份文件', why: 'back up 作动词短语时分开写，backup 作名词时合写。' },
      { p: 'before making any changes', ipa: '/bɪˈfɔːr ˈmeɪkɪŋ ˈɛni ˈtʃeɪndʒɪz/', cn: '在做任何修改之前', why: 'before + 动名词，表示在做某事之前先做另一件事。' },
    ],
    grammar: [
      { q: 'back up（动词）和 backup（名词）有什么区别？', a: 'back up 是动词短语，分开写，表示「备份」的动作。\nbackup 是名词/形容词，合写，表示「备份」这个东西或属性。\n✅ Please back up the file.（请备份文件。）—— 动词\n✅ Create a backup.（创建一个备份。）—— 名词\n✅ The backup file.（备份文件。）—— 形容词\n注意区分写法。' },
    ],
    pattern: 'Please back up + 对象 + before + 动名词.',
    patternExamples: [
      { en: 'Please back up the database before upgrading.', cn: '升级前请备份数据库。', words: [] },
      { en: 'Please back up your data before reinstalling.', cn: '重装前请备份数据。', words: [] },
      { en: 'Please back up the config before editing.', cn: '编辑前请备份配置。', words: [] },
    ],
    thinking: '备份是数据安全的基本习惯。\nPlease back up the file before making any changes 强调操作顺序：先备份再修改。\n中文说「修改前请先备份文件」，英语用 Please back up the file before making any changes。',
    pronunciation: 'back up 两词分开读。\nbefore 重音在第二音节。\n节奏：Please BACK UP ｜ the FILE ｜ be-FORE ｜ MA-king ｜ A-ny CHAN-ges.',
    quiz: [
      { q: '把「修改前请先备份文件。」用英语说出来。', a: 'Please back up the file before making any changes.' },
      { q: '「备份」动词用英语怎么说？', a: 'back up (/bæk ʌp/)，注意动词分开写，名词合写 backup' },
    ],
  },
];

// EXPORTS: MOCK_SENTENCES_OFFICEPRINT44A

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_OFFICEPRINT44A: ISentence[] = [
  {
    id: 2401,
    speaker: 'Engineer',
    en: 'Could you print this document for me?',
    cn: '你能帮我打印这份文件吗？',
    ipa: '/kʊd juː prɪnt ðɪs ˈdɒkjəmənt fɔːr miː/',
    tags: ['第2401句', '打印', '★★★★'],
    when: '自己电脑不在打印机网络中，请同事帮忙打印文件。',
    words: [
      { w: 'could', ipa: '/kʊd/', pos: '情态动词', cn: '能；可以（礼貌请求）', memory: 'can 的过去式，用作更礼貌的请求语气。', phonics: 'could 读 /kʊd/，l 不发音。', collocations: [['could you', '你能…吗'], ['could I', '我能…吗']], examples: [['Could you help me?', '你能帮我吗？'], ['Could I ask a question?', '我能问个问题吗？']] },
      { w: 'print', ipa: '/prɪnt/', pos: '动词', cn: '打印', memory: 'press(按)+int(印)→压印→打印。', phonics: 'pr 读 /pr/，int 读 /ɪnt/，单音节。', collocations: [['print document', '打印文件'], ['print report', '打印报告'], ['print out', '打印出来']], examples: [['Please print this page.', '请打印这一页。'], ['I need to print a report.', '我需要打印一份报告。']] },
      { w: 'document', ipa: '/ˈdɒkjəmənt/', pos: '名词', cn: '文件；文档', memory: 'docu(教)+ment(名词后缀)→用来教导的书面材料→文件。', phonics: 'doc 读 /dɒk/，u 读 /jə/，ment 读 /mənt/，重音在第一音节。', collocations: [['important document', '重要文件'], ['share document', '分享文件']], examples: [['Send me the document.', '把文件发给我。'], ['This is a confidential document.', '这是一份机密文件。']] },
    ],
    phrases: [
      { p: 'Could you…for me', ipa: '/kʊd juː…fɔːr miː/', cn: '你能帮我…吗', why: 'Could you…for me 是礼貌请求的标准句式，for me 表明请求是为自己办事。' },
      { p: 'print this document', ipa: '/prɪnt ðɪs ˈdɒkjəmənt/', cn: '打印这份文件', why: 'this 限定具体哪份文件，print 作动词宾语为 document。' },
    ],
    grammar: [
      { q: '为什么用 Could 而不用 Can？', a: 'Could 是 can 的过去式，但在请求语境中用作更礼貌的语气，比 Can you… 更委婉。\n✅ Could you print this for me?（你能帮我打印吗？）—— 礼貌、委婉\n✅ Can you print this?（你能打印吗？）—— 更随意、直接\n与不太熟的同事或上级交流时推荐用 Could。' },
    ],
    pattern: 'Could you + 动词 + 对象 + for me?',
    patternExamples: [
      { en: 'Could you fax this for me?', cn: '你能帮我发传真吗？', words: [] },
      { en: 'Could you sign this for me?', cn: '你能帮我签个字吗？', words: [] },
      { en: 'Could you email this to me?', cn: '你能发邮件给我吗？', words: [] },
    ],
    thinking: '办公室中常需请同事帮忙打印，Could you…for me 是最常用的礼貌句式。\n中文说「你能帮我…」，英语用 Could you…for me 对应，语气自然得体。',
    pronunciation: 'could 中 l 不发音，读 /kʊd/ 不是 /kʊld/。\ndocument 重音在第一音节：DOC-u-ment。\n节奏：COULD you ｜ PRINT this ｜ DOC-u-ment ｜ for ME?',
    quiz: [
      { q: '把「你能帮我打印这份文件吗？」用英语说出来。', a: 'Could you print this document for me?' },
      { q: '「打印」用英语怎么说？', a: 'print (/prɪnt/)' },
    ],
  },
  {
    id: 2402,
    speaker: 'Engineer',
    en: 'Please print two copies.',
    cn: '请打印两份。',
    ipa: '/pliːz prɪnt tuː ˈkɒpiz/',
    tags: ['第2402句', '打印', '★★★★'],
    when: '告诉同事打印需要的份数，比如会议材料需要多份。',
    words: [
      { w: 'copies', ipa: '/ˈkɒpiz/', pos: '名词（复数）', cn: '份；副本', memory: 'copy(复制)+ies(复数)→多份复制品。', phonics: 'cop 读 /kɒp/，ies 读 /iz/，重音在第一音节。', collocations: [['two copies', '两份'], ['hard copy', '纸质版'], ['make copies', '复印']], examples: [['I need three copies.', '我需要三份。'], ['Please make a copy.', '请复印一份。']] },
    ],
    phrases: [
      { p: 'two copies', ipa: '/tuː ˈkɒpiz/', cn: '两份', why: 'copy 作名词时指「一份印刷品」，two copies 即两份。' },
      { p: 'Please print', ipa: '/pliːz prɪnt/', cn: '请打印', why: 'Please + 动词原形，礼貌的指令句式。' },
    ],
    grammar: [
      { q: 'copy 什么时候用复数 copies？', a: '当需要多于一份时，copy 必须用复数形式 copies。\n✅ Print two copies.（打印两份。）\n✅ Print one copy.（打印一份。）—— 一份时用单数\n❌ Print two copy.（错误：复数没加 -ies）' },
    ],
    pattern: 'Please print + 数量 + copies.',
    patternExamples: [
      { en: 'Please print five copies.', cn: '请打印五份。', words: [] },
      { en: 'Please print one copy.', cn: '请打印一份。', words: [] },
      { en: 'Please print ten copies.', cn: '请打印十份。', words: [] },
    ],
    thinking: '打印份数是办公室最常用的指令之一。\n中文说「打印X份」，英语用 Please print + 数字 + copies 直接对应。',
    pronunciation: 'copies 重音在第一音节：COP-ies，注意 y 变 ies。\n节奏：PLEASE PRINT ｜ TWO COP-ies.',
    quiz: [
      { q: '把「请打印两份。」用英语说出来。', a: 'Please print two copies.' },
      { q: '「份」用英语怎么说？', a: 'copy (/ˈkɒpi/)，复数 copies (/ˈkɒpiz/)' },
    ],
  },
  {
    id: 2403,
    speaker: 'Engineer',
    en: 'Please print it in color.',
    cn: '请彩色打印。',
    ipa: '/pliːz prɪnt ɪt ɪn ˈkʌlər/',
    tags: ['第2403句', '打印', '★★★★'],
    when: '需要彩色打印图表、照片或彩色标注的文档时。',
    words: [
      { w: 'color', ipa: '/ˈkʌlər/', pos: '名词', cn: '颜色；彩色', memory: 'col(柱)+or(名词后缀)→有色彩的→颜色。', phonics: 'col 读 /kʌl/，or 读 /ər/，重音在第一音节。', collocations: [['in color', '彩色'], ['full color', '全彩'], ['color printer', '彩色打印机']], examples: [['Print it in color.', '彩色打印。'], ['Is this a color printer?', '这是彩色打印机吗？']] },
    ],
    phrases: [
      { p: 'in color', ipa: '/ɪn ˈkʌlər/', cn: '用彩色', why: 'in + 名词 表示「以…方式」，in color = 以彩色的方式打印。' },
    ],
    grammar: [
      { q: 'in color 和 in colours 哪个对？', a: 'in color（美式）和 in colour（英式）都正确，区别仅在拼写。\n马来西亚英语偏英式，写 in colour 也可以。\n✅ Please print it in color.（美式拼写）\n✅ Please print it in colour.（英式拼写）\n两种写法同事都能理解。' },
    ],
    pattern: 'Please print it in color/black and white.',
    patternExamples: [
      { en: 'Please print it in black and white.', cn: '请黑白打印。', words: [] },
      { en: 'Please print it in full color.', cn: '请全彩打印。', words: [] },
      { en: 'Please print the chart in color.', cn: '请彩色打印这张图表。', words: [] },
    ],
    thinking: '彩色打印和黑白打印是最基本的打印设置指令。\n中文说「彩色打印」，英语用 print it in color 对应。',
    pronunciation: 'color 重音在第一音节：COL-or。\n节奏：please PRINT it ｜ in COL-or.',
    quiz: [
      { q: '把「请彩色打印。」用英语说出来。', a: 'Please print it in color.' },
      { q: '「彩色」用英语怎么说？', a: 'in color (/ɪn ˈkʌlər/)' },
    ],
  },
  {
    id: 2404,
    speaker: 'Engineer',
    en: 'Please print it in black and white.',
    cn: '请黑白打印。',
    ipa: '/pliːz prɪnt ɪt ɪn blæk ənd waɪt/',
    tags: ['第2404句', '打印', '★★★★'],
    when: '普通文档不需要彩色，选择黑白打印以节省墨粉。',
    words: [
      { w: 'black and white', ipa: '/blæk ənd waɪt/', pos: '名词短语', cn: '黑白', memory: 'black(黑)+and(和)+white(白)→黑白两色→单色打印。', phonics: 'black 读 /blæk/，and 弱读 /ənd/，white 读 /waɪt/。', collocations: [['in black and white', '黑白'], ['black and white printer', '黑白打印机']], examples: [['Print it in black and white.', '黑白打印。'], ['The report is in black and white.', '报告是黑白的。']] },
    ],
    phrases: [
      { p: 'in black and white', ipa: '/ɪn blæk ənd waɪt/', cn: '以黑白方式', why: '固定搭配，指只用黑色墨粉的打印方式，也叫 monochrome（单色）。' },
    ],
    grammar: [
      { q: 'black and white 是固定搭配吗？', a: '是的，in black and white 是固定短语，不能拆开说 in white and black。\n✅ Print it in black and white.（黑白打印。）\n❌ Print it in white and black.（错误：词序反了）\n这个短语也可用于比喻：「白纸黑字写清楚」= put it in black and white。' },
    ],
    pattern: 'Please print it in black and white.',
    patternExamples: [
      { en: 'Print it in black and white to save toner.', cn: '黑白打印以节省墨粉。', words: [] },
      { en: 'The draft can be printed in black and white.', cn: '草稿可以黑白打印。', words: [] },
      { en: 'Black and white is fine for this document.', cn: '这份文件黑白打印就行。', words: [] },
    ],
    thinking: '黑白打印是日常办公最常用的打印方式，经济省墨。\n中文说「黑白打印」，英语用 print it in black and white，注意词序固定不可颠倒。',
    pronunciation: 'and 在此短语中弱读为 /ənd/ 甚至 /n/。\n节奏：print it ｜ in BLACK ｜ and WHITE.',
    quiz: [
      { q: '把「请黑白打印。」用英语说出来。', a: 'Please print it in black and white.' },
      { q: '「黑白」的固定搭配是什么？', a: 'in black and white (/ɪn blæk ənd waɪt/)，词序不可颠倒。' },
    ],
  },
  {
    id: 2405,
    speaker: 'Engineer',
    en: 'Please print it on A4 paper.',
    cn: '请用A4纸打印。',
    ipa: '/pliːz prɪnt ɪt ɒn eɪ-fɔːr ˈpeɪpər/',
    tags: ['第2405句', '打印', '★★★★'],
    when: '指定使用 A4 标准纸张打印文件。',
    words: [
      { w: 'paper', ipa: '/ˈpeɪpər/', pos: '名词', cn: '纸；纸张', memory: 'papyr(纸莎草)+er→由纸莎草演变而来→纸。', phonics: 'pa 读 /peɪ/，per 读 /pər/，重音在第一音节。', collocations: [['A4 paper', 'A4纸'], ['printer paper', '打印纸'], ['sheet of paper', '一张纸']], examples: [['We need more paper.', '我们需要更多纸。'], ['The paper tray is empty.', '纸盒空了。']] },
    ],
    phrases: [
      { p: 'on A4 paper', ipa: '/ɒn eɪ-fɔːr ˈpeɪpər/', cn: '在A4纸上', why: 'on 表示打印的载体（纸张），A4 是国际标准纸张尺寸 (210×297mm)。' },
    ],
    grammar: [
      { q: '为什么用 on 而不用 in？', a: 'on 表示打印的「载体表面」——墨水印在纸的表面上。\n✅ Print it on A4 paper.（用A4纸打印。）—— on 表示载体\n❌ Print it in A4 paper.（错误：in 表示在纸里面）\n类似的：write on paper（在纸上写）、draw on paper（在纸上画）。' },
    ],
    pattern: 'Please print it on + 纸张规格 + paper.',
    patternExamples: [
      { en: 'Please print it on A3 paper.', cn: '请用A3纸打印。', words: [] },
      { en: 'Please print it on Letter size paper.', cn: '请用信纸尺寸打印。', words: [] },
      { en: 'Print it on thick paper.', cn: '用厚纸打印。', words: [] },
    ],
    thinking: '指定纸张大小是打印时常见的要求。\n中文说「用A4纸打印」，英语用 print it on A4 paper，注意介词用 on 不用 in。',
    pronunciation: 'A4 读作 A-four：/eɪ fɔːr/。\npaper 重音在第一音节：PA-per。\n节奏：PRINT it ｜ on A-FOUR ｜ PA-per.',
    quiz: [
      { q: '把「请用A4纸打印。」用英语说出来。', a: 'Please print it on A4 paper.' },
      { q: '打印时用 on 还是 in 接纸张？', a: '用 on：print it on A4 paper。on 表示打印在纸的表面。' },
    ],
  },
  {
    id: 2406,
    speaker: 'Engineer',
    en: 'Please print it on A3 paper.',
    cn: '请用A3纸打印。',
    ipa: '/pliːz prɪnt ɪt ɒn eɪ-θriː ˈpeɪpər/',
    tags: ['第2406句', '打印', '★★★★'],
    when: '需要打印大尺寸图纸、海报或需要放大的文档时使用 A3 纸。',
    words: [
      { w: 'A3', ipa: '/eɪ-θriː/', pos: '名词（纸张规格）', cn: 'A3纸（297×420mm）', memory: 'A 系列纸张标准，A3 是 A4 的两倍大小。', phonics: 'A 读 /eɪ/，3 读 /θriː/。', collocations: [['A3 paper', 'A3纸'], ['A3 size', 'A3尺寸']], examples: [['Use A3 for the poster.', '海报用A3纸。'], ['Print the drawing on A3.', '图纸用A3打印。']] },
    ],
    phrases: [
      { p: 'on A3 paper', ipa: '/ɒn eɪ-θriː ˈpeɪpər/', cn: '在A3纸上', why: 'A3 是 A4 的两倍大 (297×420mm)，常用于打印图纸、海报等需要大版面的内容。' },
    ],
    grammar: [
      { q: 'A3 和 A4 的关系是什么？', a: 'ISO 216 标准纸张尺寸，每降低一个编号面积减半。\nA3 = 297 × 420 mm（约 A4 的两倍）\nA4 = 210 × 297 mm（最常用）\nA5 = 148 × 210 mm（A4 的一半）\n数据中心常见需要 A3 打印的场景：电气单线图、机房平面图。' },
    ],
    pattern: 'Please print it on A3 paper.',
    patternExamples: [
      { en: 'Print the floor plan on A3.', cn: '平面图用A3打印。', words: [] },
      { en: 'The diagram needs to be printed on A3.', cn: '这张图需要A3打印。', words: [] },
      { en: 'A3 paper is better for large charts.', cn: '大图表用A3纸更好。', words: [] },
    ],
    thinking: 'A3 打印在数据中心常用于打印单线图、平面图等需要大版面的技术文档。\n句式与 A4 打印完全相同，只需替换纸张规格。',
    pronunciation: 'A3 读作 A-three：/eɪ θriː/。\n节奏：PRINT it ｜ on A-THREE ｜ PA-per.',
    quiz: [
      { q: '把「请用A3纸打印。」用英语说出来。', a: 'Please print it on A3 paper.' },
      { q: 'A3 纸是 A4 纸的几倍大？', a: '两倍大。A3 = 297×420mm，A4 = 210×297mm。' },
    ],
  },
  {
    id: 2407,
    speaker: 'Engineer',
    en: 'Please print it double-sided.',
    cn: '请双面打印。',
    ipa: '/pliːz prɪnt ɪt ˈdʌbəl-saɪdɪd/',
    tags: ['第2407句', '打印', '★★★★'],
    when: '为节约纸张，选择双面打印长文档。',
    words: [
      { w: 'double-sided', ipa: '/ˈdʌbəl-saɪdɪd/', pos: '形容词/副词', cn: '双面的', memory: 'double(双)+sided(面的)→两个面都有内容→双面。', phonics: 'doub 读 /dʌb/，le 读 /əl/，sid 读 /saɪ/，ed 读 /dɪd/，重音在第一音节。', collocations: [['double-sided printing', '双面打印'], ['double-sided tape', '双面胶']], examples: [['Print it double-sided.', '双面打印。'], ['Use double-sided paper.', '用双面纸。']] },
    ],
    phrases: [
      { p: 'double-sided', ipa: '/ˈdʌbəl-saɪdɪd/', cn: '双面', why: '修饰打印方式，表示纸张正反两面都打印内容。' },
    ],
    grammar: [
      { q: 'double-sided 和 duplex 有什么区别？', a: '两者意思相同，都是双面打印，但使用场景不同。\ndouble-sided 是日常用语，任何人都能听懂。\nduplex 是打印机设置里的专业术语。\n✅ Print it double-sided.（双面打印。）—— 日常用语\n✅ Enable duplex printing.（启用双面打印。）—— 打印机设置界面\n与同事交流时说 double-sided 更自然。' },
    ],
    pattern: 'Please print it double-sided.',
    patternExamples: [
      { en: 'Please print it single-sided.', cn: '请单面打印。', words: [] },
      { en: 'Print the report double-sided to save paper.', cn: '报告双面打印以节约纸张。', words: [] },
      { en: 'Is double-sided printing available?', cn: '可以双面打印吗？', words: [] },
    ],
    thinking: '双面打印是节约纸张的常见做法，尤其在打印长报告时。\n中文说「双面打印」，英语用 print it double-sided，日常用语比 duplex 更自然。',
    pronunciation: 'double-sided 重音在第一音节：DOU-ble-SID-ed。\n节奏：PRINT it ｜ DOU-ble ｜ SID-ed.',
    quiz: [
      { q: '把「请双面打印。」用英语说出来。', a: 'Please print it double-sided.' },
      { q: '双面打印的专业术语是什么？', a: 'duplex printing（打印机设置中常见），日常交流用 double-sided。' },
    ],
  },
  {
    id: 2408,
    speaker: 'Engineer',
    en: 'Please print it single-sided.',
    cn: '请单面打印。',
    ipa: '/pliːz prɪnt ɪt ˈsɪŋɡəl-saɪdɪd/',
    tags: ['第2408句', '打印', '★★★★'],
    when: '正式文件或需要单面书写的文档选择单面打印。',
    words: [
      { w: 'single-sided', ipa: '/ˈsɪŋɡəl-saɪdɪd/', pos: '形容词/副词', cn: '单面的', memory: 'single(单)+sided(面的)→只有一个面有内容→单面。', phonics: 'sing 读 /sɪŋ/，gle 读 /ɡəl/，sid 读 /saɪ/，ed 读 /dɪd/，重音在第一音节。', collocations: [['single-sided printing', '单面打印'], ['single-sided document', '单面文件']], examples: [['Print it single-sided.', '单面打印。'], ['The contract must be single-sided.', '合同必须单面打印。']] },
    ],
    phrases: [
      { p: 'single-sided', ipa: '/ˈsɪŋɡəl-saɪdɪd/', cn: '单面', why: '与 double-sided 相对，表示只在纸张的一面打印内容。' },
    ],
    grammar: [
      { q: '什么时候需要单面打印？', a: '以下场景通常需要单面打印：\n1. 合同、法律文件（便于在背面手写批注）\n2. 需要扫描存档的文件\n3. 正式提交给客户的报告\n日常内部文件则推荐双面打印以节约资源。' },
    ],
    pattern: 'Please print it single-sided.',
    patternExamples: [
      { en: 'The contract needs to be single-sided.', cn: '合同需要单面打印。', words: [] },
      { en: 'Print the form single-sided please.', cn: '表格请单面打印。', words: [] },
      { en: 'Single-sided printing uses more paper.', cn: '单面打印用更多纸。', words: [] },
    ],
    thinking: '单面打印虽然浪费纸张，但在正式文件场景中是必要的。\n句式与双面打印相同，只需将 double 替换为 single。',
    pronunciation: 'single-sided 重音在第一音节：SIN-gle-SID-ed。\n节奏：PRINT it ｜ SIN-gle ｜ SID-ed.',
    quiz: [
      { q: '把「请单面打印。」用英语说出来。', a: 'Please print it single-sided.' },
      { q: '单面和双面打印的英语分别怎么说？', a: 'single-sided（单面）和 double-sided（双面）。' },
    ],
  },
  {
    id: 2409,
    speaker: 'Engineer',
    en: 'The printer is out of paper.',
    cn: '打印机没纸了。',
    ipa: '/ðə ˈprɪntər ɪz aʊt əv ˈpeɪpər/',
    tags: ['第2409句', '打印', '★★★★★'],
    when: '发现打印机纸盒空了，告知同事需要加纸。',
    words: [
      { w: 'out of', ipa: '/aʊt əv/', pos: '介词短语', cn: '用完了；没有了', memory: 'out(出)+of(的)→超出了范围→用光了。', phonics: 'out 读 /aʊt/，of 弱读 /əv/。', collocations: [['out of paper', '没纸了'], ['out of toner', '没墨了'], ['out of ink', '没墨水了']], examples: [['We are out of coffee.', '咖啡没了。'], ['The printer is out of paper.', '打印机没纸了。']] },
    ],
    phrases: [
      { p: 'is out of', ipa: '/ɪz aʊt əv/', cn: '已经用完', why: 'be + out of + 名词 表示「某物已经用尽」，是办公室最常用的表达之一。' },
    ],
    grammar: [
      { q: 'out of 和 run out of 有什么区别？', a: 'out of 描述「已经用完」的状态。\nrun out of 描述「正在用完」的过程。\n✅ The printer is out of paper.（打印机没纸了。）—— 状态：已经空了\n✅ We are running out of paper.（纸快用完了。）—— 过程：还没完全用完\n两者都很常用，根据是否已完全用尽选择。' },
    ],
    pattern: 'The + 设备 + is out of + 耗材.',
    patternExamples: [
      { en: 'The printer is out of toner.', cn: '打印机没墨粉了。', words: [] },
      { en: 'The copier is out of paper.', cn: '复印机没纸了。', words: [] },
      { en: 'The coffee machine is out of beans.', cn: '咖啡机没咖啡豆了。', words: [] },
    ],
    thinking: 'out of 是描述「用完」的最简洁表达，办公室中几乎每天都会用到。\n中文说「没纸了」，英语用 is out of paper 对应。',
    pronunciation: 'out of 连读为 /aʊtəv/，听起来像 out-tuhv。\n节奏：the PRIN-ter ｜ is OUT of ｜ PA-per.',
    quiz: [
      { q: '把「打印机没纸了。」用英语说出来。', a: 'The printer is out of paper.' },
      { q: '「用完了」用英语怎么说？', a: 'be out of (/biː aʊt əv/)' },
    ],
  },
  {
    id: 2410,
    speaker: 'Engineer',
    en: 'The printer is out of toner.',
    cn: '打印机没墨粉了。',
    ipa: '/ðə ˈprɪntər ɪz aʊt əv ˈtoʊnər/',
    tags: ['第2410句', '打印', '★★★★★'],
    when: '打印出来字迹变淡或打印机提示墨粉不足时。',
    words: [
      { w: 'toner', ipa: '/ˈtoʊnər/', pos: '名词', cn: '墨粉；碳粉', memory: 'tone(色调)+er(名词后缀)→提供色调的材料→墨粉。', phonics: 'ton 读 /toʊn/，er 读 /ər/，重音在第一音节。', collocations: [['toner cartridge', '墨粉盒'], ['out of toner', '没墨粉了'], ['replace toner', '更换墨粉']], examples: [['The toner is low.', '墨粉快用完了。'], ['We need a new toner cartridge.', '我们需要新的墨粉盒。']] },
    ],
    phrases: [
      { p: 'out of toner', ipa: '/aʊt əv ˈtoʊnər/', cn: '没墨粉了', why: '激光打印机使用 toner（墨粉/碳粉），喷墨打印机使用 ink（墨水），两者不同。' },
    ],
    grammar: [
      { q: 'toner 和 ink 有什么区别？', a: 'toner（墨粉/碳粉）用于激光打印机，是粉末状的。\nink（墨水）用于喷墨打印机，是液体状的。\n✅ The laser printer is out of toner.（激光打印机没墨粉了。）\n✅ The inkjet printer is out of ink.（喷墨打印机没墨水了。）\n办公室激光打印机最常见，所以说 out of toner 更多。' },
    ],
    pattern: 'The printer is out of toner.',
    patternExamples: [
      { en: 'We need to order more toner.', cn: '我们需要订购更多墨粉。', words: [] },
      { en: 'The toner cartridge needs replacing.', cn: '墨粉盒需要更换。', words: [] },
      { en: 'The print quality is poor — toner might be low.', cn: '打印质量差——可能墨粉不足。', words: [] },
    ],
    thinking: 'toner 是激光打印机的核心耗材，数据中心办公室的激光打印机经常需要更换。\n句式与 out of paper 完全相同，只需替换耗材名称。',
    pronunciation: 'toner 重音在第一音节：TO-ner，不要读成 /tɒnər/。\n节奏：the PRIN-ter ｜ is OUT of ｜ TO-ner.',
    quiz: [
      { q: '把「打印机没墨粉了。」用英语说出来。', a: 'The printer is out of toner.' },
      { q: 'toner 和 ink 分别用于什么打印机？', a: 'toner（墨粉）用于激光打印机；ink（墨水）用于喷墨打印机。' },
    ],
  },
  {
    id: 2411,
    speaker: 'Engineer',
    en: 'Could you make a copy of this document?',
    cn: '你能帮我复印这份文件吗？',
    ipa: '/kʊd juː meɪk ə ˈkɒpi əv ðɪs ˈdɒkjəmənt/',
    tags: ['第2411句', '复印', '★★★★'],
    when: '需要同事帮忙复印文件，比打印更强调「复制已有文件」。',
    words: [
      { w: 'make a copy', ipa: '/meɪk ə ˈkɒpi/', pos: '动词短语', cn: '复印一份', memory: 'make(做)+copy(副本)→制作副本→复印。', phonics: 'make 读 /meɪk/，copy 读 /ˈkɒpi/。', collocations: [['make copies', '复印'], ['make a copy for me', '帮我复印一份']], examples: [['Can you make a copy?', '你能复印一份吗？'], ['I made five copies.', '我复印了五份。']] },
    ],
    phrases: [
      { p: 'make a copy of', ipa: '/meɪk ə ˈkɒpi əv/', cn: '复印一份…', why: 'make a copy of + 名词 是复印的标准动词短语，比 print a copy 更自然。' },
      { p: 'this document', ipa: '/ðɪs ˈdɒkjəmənt/', cn: '这份文件', why: 'this 指明要复印的具体文件。' },
    ],
    grammar: [
      { q: 'make a copy 和 copy 有什么区别？', a: 'make a copy of 是动词短语，更正式、更完整。\ncopy 单独做动词更简洁。\n✅ Could you make a copy of this?（你能复印这个吗？）—— 完整礼貌\n✅ Could you copy this?（你能复印这个吗？）—— 简洁\n✅ Could you photocopy this?（你能复印这个吗？）—— 英式常用\n三种说法同事都能理解。' },
    ],
    pattern: 'Could you make + 数量 + copies of + 文件?',
    patternExamples: [
      { en: 'Could you make three copies of this report?', cn: '你能帮我复印三份报告吗？', words: [] },
      { en: 'Could you photocopy this for me?', cn: '你能帮我复印一下吗？', words: [] },
      { en: 'Could you copy this page?', cn: '你能复印这页吗？', words: [] },
    ],
    thinking: '复印是办公室最常见的操作之一，make a copy of 是标准的礼貌请求句式。\n中文说「帮我复印…」，英语用 Could you make a copy of… 对应。',
    pronunciation: 'copy 重音在第一音节：COP-y。\nof 弱读为 /əv/。\n节奏：COULD you ｜ MAKE a ｜ COP-y of ｜ this DOC-u-ment?',
    quiz: [
      { q: '把「你能帮我复印这份文件吗？」用英语说出来。', a: 'Could you make a copy of this document?' },
      { q: '「复印」的三种英语说法是什么？', a: 'make a copy / copy / photocopy' },
    ],
  },
  {
    id: 2412,
    speaker: 'Engineer',
    en: 'Please make five copies.',
    cn: '请复印五份。',
    ipa: '/pliːz meɪk faɪv ˈkɒpiz/',
    tags: ['第2412句', '复印', '★★★★'],
    when: '告诉同事需要复印的具体份数。',
    words: [
      { w: 'five', ipa: '/faɪv/', pos: '数词', cn: '五', memory: '基础数词。', phonics: 'five 读 /faɪv/，单音节。', collocations: [['five copies', '五份'], ['page five', '第五页']], examples: [['Make five copies.', '复印五份。'], ['There are five pages.', '共有五页。']] },
    ],
    phrases: [
      { p: 'five copies', ipa: '/faɪv ˈkɒpiz/', cn: '五份', why: '数字 + copies 表示需要的份数。' },
    ],
    grammar: [
      { q: 'make copies 和 print copies 有什么区别？', a: 'make copies 强调「复制」已有文件——通常是把纸质原稿放到复印机上复印。\nprint copies 强调「打印」——从电脑发送文件到打印机输出。\n✅ Make five copies of this.（把这份复印五份。）—— 已有纸质原稿\n✅ Print five copies.（打印五份。）—— 从电脑打印\n日常使用中两者常混用，同事都能理解。' },
    ],
    pattern: 'Please make + 数字 + copies.',
    patternExamples: [
      { en: 'Please make ten copies.', cn: '请复印十份。', words: [] },
      { en: 'Make two copies for each person.', cn: '每人复印两份。', words: [] },
      { en: 'I need twenty copies by noon.', cn: '中午前我需要二十份。', words: [] },
    ],
    thinking: '指定复印份数的句式简洁直接，与打印份数句式结构相同。\n中文说「复印X份」，英语用 make + 数字 + copies。',
    pronunciation: 'five 读 /faɪv/，注意 v 的唇齿摩擦。\n节奏：PLEASE MAKE ｜ FIVE COP-ies.',
    quiz: [
      { q: '把「请复印五份。」用英语说出来。', a: 'Please make five copies.' },
      { q: 'make copies 和 print copies 的区别是什么？', a: 'make copies = 复印（已有纸质原稿）；print copies = 打印（从电脑输出）。' },
    ],
  },
  {
    id: 2413,
    speaker: 'Engineer',
    en: 'Please reduce it to eighty percent.',
    cn: '请缩印到80%。',
    ipa: '/pliːz rɪˈdjuːs ɪt tuː ˈeɪti pərˈsent/',
    tags: ['第2413句', '复印', '★★★'],
    when: '原稿比纸张大，需要缩小复印以适配纸张。',
    words: [
      { w: 'reduce', ipa: '/rɪˈdjuːs/', pos: '动词', cn: '缩小；减少', memory: 're(回)+duce(引导)→引导回去→缩小。', phonics: 're 读 /rɪ/，duce 读 /djuːs/，重音在第二音节。', collocations: [['reduce size', '缩小尺寸'], ['reduce to 80%', '缩小到80%']], examples: [['Reduce it to fit the page.', '缩小以适配页面。'], ['The image needs to be reduced.', '图片需要缩小。']] },
      { w: 'percent', ipa: '/pərˈsent/', pos: '名词', cn: '百分比', memory: 'per(每)+cent(百)→每一百→百分比。', phonics: 'per 读 /pər/，cent 读 /sent/，重音在第二音节。', collocations: [['eighty percent', '80%'], ['one hundred percent', '100%']], examples: [['Reduce to 80 percent.', '缩到80%。'], ['Enlarge to 120 percent.', '放大到120%。']] },
    ],
    phrases: [
      { p: 'reduce it to', ipa: '/rɪˈdjuːs ɪt tuː/', cn: '缩小到', why: 'reduce + to + 百分比 表示缩放到原稿的指定百分比。' },
    ],
    grammar: [
      { q: 'reduce to 和 reduce by 有什么区别？', a: 'reduce to = 缩小「到」某个值（目标值）。\nreduce by = 缩小「了」某个量（减少量）。\n✅ Reduce it to 80%.（缩小到80%。）—— 最终大小是80%\n✅ Reduce it by 20%.（缩小20%。）—— 减少了20%，最终是80%\n复印机上通常用 reduce to（直接设定目标比例）。' },
    ],
    pattern: 'Please reduce it to + 百分比 + percent.',
    patternExamples: [
      { en: 'Reduce it to 70 percent.', cn: '缩印到70%。', words: [] },
      { en: 'Please reduce the drawing to 50 percent.', cn: '请把图纸缩印到50%。', words: [] },
      { en: 'Shrink it to fit A4.', cn: '缩小以适配A4。', words: [] },
    ],
    thinking: '缩印在打印大尺寸原稿（如A3图纸）到小纸张（A4）时很常见。\n中文说「缩印到X%」，英语用 reduce it to X percent。',
    pronunciation: 'reduce 重音在第二音节：re-DUCE。\npercent 重音在第二音节：per-CENT。\n节奏：re-DUCE it ｜ to EIGH-ty ｜ per-CENT.',
    quiz: [
      { q: '把「请缩印到80%。」用英语说出来。', a: 'Please reduce it to eighty percent.' },
      { q: 'reduce to 和 reduce by 的区别是什么？', a: 'reduce to = 缩小到（目标值）；reduce by = 缩小了（减少量）。' },
    ],
  },
  {
    id: 2414,
    speaker: 'Engineer',
    en: 'Please enlarge it to one hundred and twenty percent.',
    cn: '请放大到120%。',
    ipa: '/pliːz ɪnˈlɑːrdʒ ɪt tuː wʌn ˈhʌndrəd ənd ˈtwenti pərˈsent/',
    tags: ['第2414句', '复印', '★★★'],
    when: '原稿太小需要放大复印以便阅读。',
    words: [
      { w: 'enlarge', ipa: '/ɪnˈlɑːrdʒ/', pos: '动词', cn: '放大；扩大', memory: 'en(使)+large(大)→使变大→放大。', phonics: 'en 读 /ɪn/，large 读 /lɑːrdʒ/，重音在第二音节。', collocations: [['enlarge image', '放大图像'], ['enlarge to 120%', '放大到120%']], examples: [['Enlarge the photo.', '放大这张照片。'], ['Can you enlarge this text?', '你能放大这段文字吗？']] },
    ],
    phrases: [
      { p: 'enlarge it to', ipa: '/ɪnˈlɑːrdʒ ɪt tuː/', cn: '放大到', why: 'enlarge + to + 百分比 表示放大到原稿的指定百分比，与 reduce 对应。' },
    ],
    grammar: [
      { q: 'enlarge 和 zoom in 有什么区别？', a: 'enlarge 用于物理放大（复印、打印时调整比例）。\nzoom in 用于屏幕上的数字放大（查看文档、图片时）。\n✅ Enlarge the copy to 150%.（复印放大到150%。）—— 物理复印\n✅ Zoom in on the image.（放大查看图片。）—— 屏幕操作\n复印场景中用 enlarge。' },
    ],
    pattern: 'Please enlarge it to + 百分比 + percent.',
    patternExamples: [
      { en: 'Enlarge it to 150 percent.', cn: '放大到150%。', words: [] },
      { en: 'Please enlarge the diagram.', cn: '请放大这张图。', words: [] },
      { en: 'Scale it up to 200 percent.', cn: '放大到200%。', words: [] },
    ],
    thinking: '放大复印在需要仔细阅读小字或细节时使用。\nenlarge 与 reduce 是一对反义词，句式结构完全相同。',
    pronunciation: 'enlarge 重音在第二音节：en-LARGE。\none hundred and twenty 连读流畅。\n节奏：en-LARGE it ｜ to ONE HUN-dred ｜ and TWEN-ty ｜ per-CENT.',
    quiz: [
      { q: '把「请放大到120%。」用英语说出来。', a: 'Please enlarge it to one hundred and twenty percent.' },
      { q: 'enlarge 的反义词是什么？', a: 'reduce（缩小）。两者句式相同：enlarge/reduce it to X percent。' },
    ],
  },
  {
    id: 2415,
    speaker: 'Engineer',
    en: 'The copier is not working.',
    cn: '复印机坏了。',
    ipa: '/ðə ˈkɒpiər ɪz nɒt ˈwɜːrkɪŋ/',
    tags: ['第2415句', '复印', '★★★★★'],
    when: '发现复印机无法正常工作，向同事通报。',
    words: [
      { w: 'copier', ipa: '/ˈkɒpiər/', pos: '名词', cn: '复印机', memory: 'copy(复制)+er(器具后缀)→用来复制的机器→复印机。', phonics: 'cop 读 /kɒp/，i 读 /i/，er 读 /ər/，重音在第一音节。', collocations: [['copier is broken', '复印机坏了'], ['use the copier', '使用复印机']], examples: [['The copier is jammed.', '复印机卡纸了。'], ['Where is the copier?', '复印机在哪里？']] },
      { w: 'working', ipa: '/ˈwɜːrkɪŋ/', pos: '动词（现在分词）', cn: '工作；运转', memory: 'work(工作)+ing→正在工作。', phonics: 'work 读 /wɜːrk/，ing 读 /ɪŋ/。', collocations: [['not working', '不工作；坏了'], ['working properly', '正常运转']], examples: [['The printer is not working.', '打印机坏了。'], ['Is the system working?', '系统正常吗？']] },
    ],
    phrases: [
      { p: 'is not working', ipa: '/ɪz nɒt ˈwɜːrkɪŋ/', cn: '不能工作；坏了', why: 'be + not + working 表示设备当前不在正常工作状态，是通报故障最常用的句式。' },
    ],
    grammar: [
      { q: 'not working 和 broken 有什么区别？', a: 'not working 描述「当前不能运转」，可能是临时故障，也可能需要修理。\nbroken 更强调「已损坏」，通常需要维修。\n✅ The copier is not working.（复印机不能用了。）—— 当前状态，原因不明\n✅ The copier is broken.（复印机坏了。）—— 已损坏，需维修\nnot working 更委婉、更客观，推荐优先使用。' },
    ],
    pattern: 'The + 设备 + is not working.',
    patternExamples: [
      { en: 'The printer is not working.', cn: '打印机不能用了。', words: [] },
      { en: 'The scanner is not working.', cn: '扫描仪不能用了。', words: [] },
      { en: 'The coffee machine is not working.', cn: '咖啡机不能用了。', words: [] },
    ],
    thinking: 'is not working 是通报设备故障最通用的句式，适用于任何设备。\n中文说「…坏了」，英语用 is not working 更客观、更专业。',
    pronunciation: 'copier 重音在第一音节：COP-i-er。\nworking 中 or 读 /ɜːr/。\n节奏：the COP-i-er ｜ is NOT ｜ WORK-ing.',
    quiz: [
      { q: '把「复印机坏了。」用英语说出来。', a: 'The copier is not working.' },
      { q: 'not working 和 broken 哪个更委婉？', a: 'not working 更委婉客观，broken 更直接表示「已损坏」。' },
    ],
  },
  {
    id: 2416,
    speaker: 'Engineer',
    en: 'The copier is jammed.',
    cn: '复印机卡纸了。',
    ipa: '/ðə ˈkɒpiər ɪz dʒæmd/',
    tags: ['第2416句', '复印', '★★★★★'],
    when: '复印机或打印机发生卡纸故障时通报。',
    words: [
      { w: 'jammed', ipa: '/dʒæmd/', pos: '形容词（过去分词）', cn: '卡住的；堵塞的', memory: 'jam(堵塞)+med→被堵塞的→卡住的。', phonics: 'jam 读 /dʒæm/，med 读 /md/，单音节。', collocations: [['paper jam', '卡纸'], ['jammed printer', '卡纸的打印机'], ['door is jammed', '门卡住了']], examples: [['The printer is jammed.', '打印机卡纸了。'], ['There is a paper jam.', '有卡纸。']] },
    ],
    phrases: [
      { p: 'is jammed', ipa: '/ɪz dʒæmd/', cn: '卡住了', why: 'be + jammed 表示设备被纸张或异物卡住无法运转，是打印/复印设备最常见的故障。' },
    ],
    grammar: [
      { q: 'jammed 可以形容哪些设备？', a: 'jammed 主要用于有机械运动部件的设备：\n✅ The copier is jammed.（复印机卡纸了。）\n✅ The printer is jammed.（打印机卡纸了。）\n✅ The door is jammed.（门卡住了。）\n❌ The computer is jammed.（错误：电脑没有机械卡纸部件）\n电脑死机用 frozen 或 crashed。' },
    ],
    pattern: 'The + 设备 + is jammed.',
    patternExamples: [
      { en: 'The printer is jammed again.', cn: '打印机又卡纸了。', words: [] },
      { en: 'Tray 2 is jammed.', cn: '2号纸盒卡纸了。', words: [] },
      { en: 'The paper is jammed in the fuser.', cn: '纸卡在定影器里了。', words: [] },
    ],
    thinking: '卡纸是打印机/复印机最常见的故障，jammed 是描述此故障的专用词。\n中文说「卡纸了」，英语用 is jammed 简洁对应。',
    pronunciation: 'jammed 读 /dʒæmd/，单音节，注意 d 的尾音。\n节奏：the COP-i-er ｜ is JAMMED.',
    quiz: [
      { q: '把「复印机卡纸了。」用英语说出来。', a: 'The copier is jammed.' },
      { q: '卡纸用英语怎么说？', a: 'paper jam (/ˈpeɪpər dʒæm/) 或 is jammed (/ɪz dʒæmd/)' },
    ],
  },
  {
    id: 2417,
    speaker: 'Engineer',
    en: 'Please clear the paper jam.',
    cn: '请把卡纸清除。',
    ipa: '/pliːz klɪər ðə ˈpeɪpər dʒæm/',
    tags: ['第2417句', '复印', '★★★★'],
    when: '指示同事清除打印机/复印机中的卡纸。',
    words: [
      { w: 'clear', ipa: '/klɪər/', pos: '动词', cn: '清除；清理', memory: 'clear 本身有「清楚/清空」的意思，作动词表示清除障碍。', phonics: 'clear 读 /klɪər/，单音节。', collocations: [['clear the jam', '清除卡纸'], ['clear the error', '清除错误'], ['clear the queue', '清除队列']], examples: [['Clear the paper jam.', '清除卡纸。'], ['Please clear the print queue.', '请清除打印队列。']] },
      { w: 'paper jam', ipa: '/ˈpeɪpər dʒæm/', pos: '名词短语', cn: '卡纸', memory: 'paper(纸)+jam(堵塞)→纸张堵塞→卡纸故障。', phonics: 'paper 读 /ˈpeɪpər/，jam 读 /dʒæm/。', collocations: [['clear a paper jam', '清除卡纸'], ['paper jam error', '卡纸错误']], examples: [['There is a paper jam.', '有卡纸。'], ['How to clear a paper jam?', '怎么清除卡纸？']] },
    ],
    phrases: [
      { p: 'clear the paper jam', ipa: '/klɪər ðə ˈpeɪpər dʒæm/', cn: '清除卡纸', why: 'clear + the + paper jam 是清除卡纸故障的标准动词短语。' },
    ],
    grammar: [
      { q: 'clear 和 remove 在这里有什么区别？', a: 'clear 强调「清除障碍使设备恢复正常」。\nremove 强调「取出某物」。\n✅ Clear the paper jam.（清除卡纸。）—— 整体动作：清除故障\n✅ Remove the jammed paper.（取出卡住的纸。）—— 具体动作：取出纸\n两者在此场景中可以互换，clear 更常用。' },
    ],
    pattern: 'Please clear the + 故障类型.',
    patternExamples: [
      { en: 'Please clear the error message.', cn: '请清除错误信息。', words: [] },
      { en: 'Clear the print queue.', cn: '清除打印队列。', words: [] },
      { en: 'Remove the jammed paper carefully.', cn: '小心取出卡住的纸。', words: [] },
    ],
    thinking: '清除卡纸是办公室最常见的设备维护操作之一。\n中文说「清除卡纸」，英语用 clear the paper jam。',
    pronunciation: 'clear 读 /klɪər/，注意 cl 的连读。\npaper jam 重音在 paper：PA-per JAM。\n节奏：please CLEAR ｜ the PA-per JAM.',
    quiz: [
      { q: '把「请把卡纸清除。」用英语说出来。', a: 'Please clear the paper jam.' },
      { q: 'clear 和 remove 在卡纸场景中的区别？', a: 'clear the paper jam = 清除卡纸（整体动作）；remove the jammed paper = 取出卡住的纸（具体动作）。' },
    ],
  },
  {
    id: 2418,
    speaker: 'Engineer',
    en: 'Please scan this document.',
    cn: '请扫描这份文件。',
    ipa: '/pliːz skæn ðɪs ˈdɒkjəmənt/',
    tags: ['第2418句', '扫描', '★★★★'],
    when: '需要同事帮忙将纸质文件扫描成电子版。',
    words: [
      { w: 'scan', ipa: '/skæn/', pos: '动词', cn: '扫描', memory: 'scan 原意「仔细检查」，现代用法扩展为「用扫描仪数字化」。', phonics: 'scan 读 /skæn/，单音节。', collocations: [['scan document', '扫描文件'], ['scan to email', '扫描到邮箱'], ['scan to PDF', '扫描成PDF']], examples: [['Please scan this page.', '请扫描这页。'], ['I scanned the contract.', '我扫描了合同。']] },
    ],
    phrases: [
      { p: 'scan this document', ipa: '/skæn ðɪs ˈdɒkjəmənt/', cn: '扫描这份文件', why: 'scan 作动词直接接宾语，表示将纸质文件转为电子格式。' },
    ],
    grammar: [
      { q: 'scan 和 photocopy 的区别是什么？', a: 'scan = 将纸质文件转为电子文件（PDF/JPG等），存在电脑里。\nphotocopy = 将纸质文件复印成纸质副本。\n✅ Scan this to PDF.（扫描成PDF。）—— 输出电子文件\n✅ Photocopy this document.（复印这份文件。）—— 输出纸质副本\n现代多功能打印机通常同时支持两种功能。' },
    ],
    pattern: 'Please scan + 文件 + to + 格式/目标.',
    patternExamples: [
      { en: 'Please scan this to PDF.', cn: '请把这个扫描成PDF。', words: [] },
      { en: 'Scan it and email it to me.', cn: '扫描后发邮件给我。', words: [] },
      { en: 'Please scan all the pages.', cn: '请扫描所有页。', words: [] },
    ],
    thinking: '扫描是将纸质文件数字化的基本操作，在数据中心常用于存档和交接。\n中文说「扫描这份文件」，英语用 Please scan this document。',
    pronunciation: 'scan 读 /skæn/，注意 a 读 /æ/ 不是 /ɑː/。\n节奏：please SCAN ｜ this DOC-u-ment.',
    quiz: [
      { q: '把「请扫描这份文件。」用英语说出来。', a: 'Please scan this document.' },
      { q: 'scan 和 photocopy 的输出有什么区别？', a: 'scan 输出电子文件（PDF/JPG）；photocopy 输出纸质副本。' },
    ],
  },
  {
    id: 2419,
    speaker: 'Engineer',
    en: 'Please scan it as a PDF.',
    cn: '请扫描成PDF。',
    ipa: '/pliːz skæn ɪt æz ə piː-diː-ɛf/',
    tags: ['第2419句', '扫描', '★★★★'],
    when: '指定扫描的文件格式为 PDF。',
    words: [
      { w: 'as', ipa: '/æz/', pos: '介词', cn: '作为；以…格式', memory: 'as 在此表示「以…的形式/格式」。', phonics: 'as 读 /æz/，单音节。', collocations: [['scan as PDF', '扫描成PDF'], ['save as', '另存为'], ['export as', '导出为']], examples: [['Scan it as a PDF.', '扫描成PDF。'], ['Save it as a Word file.', '保存为Word文件。']] },
      { w: 'PDF', ipa: '/piː-diː-ɛf/', pos: '名词（缩写）', cn: 'PDF（便携式文档格式）', memory: 'Portable Document Format 的缩写，Adobe 开发的通用文档格式。', phonics: '逐字母读：P-D-F /piː diː ɛf/。', collocations: [['PDF file', 'PDF文件'], ['PDF format', 'PDF格式']], examples: [['Send me the PDF.', '把PDF发给我。'], ['Is it in PDF format?', '是PDF格式吗？']] },
    ],
    phrases: [
      { p: 'as a PDF', ipa: '/æz ə piː-diː-ɛf/', cn: '以PDF格式', why: 'as 表示「以…格式」，as a PDF = 以 PDF 格式保存扫描结果。' },
    ],
    grammar: [
      { q: 'scan as PDF 和 scan to PDF 有什么区别？', a: '两者意思几乎相同，都可以使用。\nscan as a PDF 强调输出的文件格式。\nscan to PDF 强调输出的目标格式。\n✅ Scan it as a PDF.（扫描成PDF。）—— 强调格式\n✅ Scan it to PDF.（扫描到PDF。）—— 强调目标\n日常使用中两者可互换。' },
    ],
    pattern: 'Please scan it as a + 格式.',
    patternExamples: [
      { en: 'Scan it as a JPEG.', cn: '扫描成JPEG。', words: [] },
      { en: 'Please scan it to PDF format.', cn: '请扫描成PDF格式。', words: [] },
      { en: 'Save the scan as a PDF.', cn: '把扫描件保存为PDF。', words: [] },
    ],
    thinking: 'PDF 是办公室最常用的文档格式，扫描时指定格式是标准操作。\n中文说「扫描成PDF」，英语用 scan it as a PDF。',
    pronunciation: 'PDF 逐字母读 P-D-F，不要读成一个单词。\nas 读 /æz/。\n节奏：please SCAN it ｜ AS a ｜ P-D-F.',
    quiz: [
      { q: '把「请扫描成PDF。」用英语说出来。', a: 'Please scan it as a PDF.' },
      { q: 'PDF 怎么读？', a: '逐字母读 P-D-F (/piː diː ɛf/)，不要读成一个单词。' },
    ],
  },
  {
    id: 2420,
    speaker: 'Engineer',
    en: 'Please email the scanned file to me.',
    cn: '请把扫描文件发给我。',
    ipa: '/pliːz ˈiːmeɪl ðə skænd faɪl tuː miː/',
    tags: ['第2420句', '扫描', '★★★★'],
    when: '扫描完成后，请同事通过邮件发送扫描件。',
    words: [
      { w: 'email', ipa: '/ˈiːmeɪl/', pos: '动词', cn: '发电子邮件', memory: 'e(electronic电子)+mail(邮件)→电子邮件，作动词表示发邮件。', phonics: 'e 读 /iː/，mail 读 /meɪl/，重音在第一音节。', collocations: [['email me', '发邮件给我'], ['email the file', '把文件发邮件']], examples: [['Email me the report.', '把报告发邮件给我。'], ['I will email you later.', '我稍后发邮件给你。']] },
      { w: 'scanned', ipa: '/skænd/', pos: '形容词（过去分词）', cn: '扫描好的', memory: 'scan(扫描)+ned→已经扫描的。', phonics: 'scanned 读 /skænd/，单音节。', collocations: [['scanned file', '扫描文件'], ['scanned copy', '扫描件']], examples: [['Send me the scanned file.', '把扫描文件发给我。'], ['The scanned document is blurry.', '扫描的文件不清楚。']] },
    ],
    phrases: [
      { p: 'the scanned file', ipa: '/ðə skænd faɪl/', cn: '扫描好的文件', why: 'scanned 作定语修饰 file，表示已经扫描完成的文件。' },
      { p: 'email…to me', ipa: '/ˈiːmeɪl…tuː miː/', cn: '发邮件给…我', why: 'email 作动词，email something to someone 是「把某物发邮件给某人」的标准结构。' },
    ],
    grammar: [
      { q: 'email me the file 和 email the file to me 哪个对？', a: '两个都正确，是英语中「双宾语」的两种表达方式。\n✅ Email me the file.（给我发文件。）—— 间接宾语在前\n✅ Email the file to me.（把文件发给我。）—— 直接宾语在前 + to\n✅ Send me the document. / Send the document to me.\n两种结构在日常英语中都很常见。' },
    ],
    pattern: 'Please email the + 文件 + to + 人.',
    patternExamples: [
      { en: 'Please email the report to the manager.', cn: '请把报告发邮件给经理。', words: [] },
      { en: 'Email the scanned copy to me.', cn: '把扫描件发邮件给我。', words: [] },
      { en: 'Please forward the email to the team.', cn: '请把邮件转发给团队。', words: [] },
    ],
    thinking: '扫描后发邮件是办公室文档流转的常见步骤。\n中文说「把扫描文件发给我」，英语用 email the scanned file to me。',
    pronunciation: 'email 重音在第一音节：E-mail。\nscanned 读 /skænd/。\n节奏：please E-mail ｜ the SCANNED FILE ｜ to ME.',
    quiz: [
      { q: '把「请把扫描文件发给我。」用英语说出来。', a: 'Please email the scanned file to me.' },
      { q: 'email me the file 和 email the file to me 哪个对？', a: '两个都对。前者间接宾语在前，后者直接宾语在前加 to。' },
    ],
  },
];

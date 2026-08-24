// EXPORTS: MOCK_SENTENCES_OFFICEPRINT44B

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_OFFICEPRINT44B: ISentence[] = [
  {
    id: 2421,
    speaker: 'Engineer',
    en: 'Please scan this document.',
    cn: '请扫描这份文件。',
    ipa: '/pliːz skæn ðɪs ˈdɒkjəmənt/',
    tags: ['第2421句', '扫描操作', '★★★★★'],
    when: '需要把纸质文件转成电子版时，请同事帮忙扫描。',
    words: [
      { w: 'scan', ipa: '/skæn/', pos: '动词', cn: '扫描', memory: '源自拉丁语 scandere(攀登)，现代意义为"逐行扫读"。', phonics: 'scan 读 /skæn/，单音节。', collocations: [['scan a document', '扫描文件'], ['scan a QR code', '扫描二维码'], ['scan the network', '扫描网络']], examples: [['Please scan the contract.', '请扫描合同。'], ['I\'ll scan it for you.', '我帮你扫描。']] },
      { w: 'document', ipa: '/ˈdɒkjəmənt/', pos: '名词', cn: '文件；文档', memory: 'doc(教)+u+ment(名词后缀)→用来教导/证明的材料→文件。', phonics: 'doc 读 /dɒk/，u 读 /ju/，ment 读 /mənt/，重音在第一音节。', collocations: [['official document', '官方文件'], ['signed document', '签字文件'], ['document management', '文件管理']], examples: [['I need this document signed.', '我需要这份文件签字。'], ['Save the document as PDF.', '把文件保存为PDF。']] },
    ],
    phrases: [
      { p: 'Please scan', ipa: '/pliːz skæn/', cn: '请扫描', why: '礼貌的请求句式，适合办公室日常使用。' },
      { p: 'this document', ipa: '/ðɪs ˈdɒkjəmənt/', cn: '这份文件', why: 'this 明确指代当前手边的文件。' },
    ],
    grammar: [
      { q: 'Could you scan 和 Please scan 有什么区别？', a: 'Could you scan 更委婉，给对方选择空间。\nPlease scan 是直接但礼貌的请求，效率更高。\n✅ Could you scan this for me?（你能帮我扫描吗？）—— 更客气\n✅ Please scan this document.（请扫描这份文件。）—— 简洁直接' },
    ],
    pattern: 'Please scan + 扫描对象',
    patternExamples: [
      { en: 'Please scan the signed form.', cn: '请扫描签字表格。', words: [] },
      { en: 'Please scan the invoice.', cn: '请扫描发票。', words: [] },
      { en: 'Please scan the report for me.', cn: '请帮我扫描报告。', words: [] },
    ],
    thinking: '扫描是办公室将纸质文件数字化的基本操作。\nPlease scan 是最简洁的请求句式，直接明了。',
    pronunciation: 'scan 读 /skæn/，注意是短元音 /æ/ 不是 /ɑː/。\ndocument 重音在第一音节：DOC-u-ment。\n节奏：Please SCAN ｜ this DOC-u-ment.',
    quiz: [
      { q: '把「请扫描这份文件。」用英语说出来。', a: 'Please scan this document.' },
      { q: '「扫描」用英语怎么说？', a: 'scan (/skæn/)' },
    ],
  },
  {
    id: 2422,
    speaker: 'Engineer',
    en: 'Please scan it as a PDF.',
    cn: '请扫描成PDF。',
    ipa: '/pliːz skæn ɪt æz ə piː-diː-ɛf/',
    tags: ['第2422句', '扫描操作', '★★★★★'],
    when: '指定扫描输出格式为 PDF，方便存档和分享。',
    words: [
      { w: 'PDF', ipa: '/piː-diː-ɛf/', pos: '名词（缩写）', cn: '便携式文档格式', memory: 'Portable Document Format 的首字母缩写。', phonics: '按字母逐个读：P-D-F。', collocations: [['save as PDF', '保存为PDF'], ['PDF file', 'PDF文件'], ['convert to PDF', '转换为PDF']], examples: [['Please save it as PDF.', '请保存为PDF。'], ['I sent you the PDF.', '我把PDF发给你了。']] },
    ],
    phrases: [
      { p: 'scan it as a PDF', ipa: '/skæn ɪt æz ə piː-diː-ɛf/', cn: '扫描成PDF格式', why: 'as a PDF 指定输出格式，避免同事猜格式或默认低质量 JPEG。' },
    ],
    grammar: [
      { q: 'as a PDF 中的 as 是什么意思？', a: 'as 在这里是介词，表示「以…的格式/形式」。\n✅ Scan it as a PDF.（扫描成PDF格式。）\n✅ Save it as a Word file.（保存为Word格式。）\n✅ Send it as an attachment.（以附件形式发送。）' },
    ],
    pattern: 'Please scan it as a + 文件格式',
    patternExamples: [
      { en: 'Please scan it as a JPEG.', cn: '请扫描成JPEG。', words: [] },
      { en: 'Please scan it as a high-resolution PDF.', cn: '请扫描成高分辨率PDF。', words: [] },
      { en: 'Please scan it as a searchable PDF.', cn: '请扫描成可搜索PDF。', words: [] },
    ],
    thinking: '指定扫描格式能避免后续格式转换的麻烦。\nas a PDF 是最常用的文件格式指定方式。',
    pronunciation: 'PDF 按字母逐个读：P-D-F。\nas 读 /æz/，弱读时可读 /əz/。\n节奏：Please SCAN it ｜ as a P-D-F.',
    quiz: [
      { q: '把「请扫描成PDF。」用英语说出来。', a: 'Please scan it as a PDF.' },
      { q: '「以PDF格式」用英语怎么说？', a: 'as a PDF (/æz ə piː-diː-ɛf/)' },
    ],
  },
  {
    id: 2423,
    speaker: 'Engineer',
    en: 'Please email the scanned file to me.',
    cn: '请把扫描文件发给我。',
    ipa: '/pliːz ˈiːmeɪl ðə skænd faɪl tuː miː/',
    tags: ['第2423句', '扫描操作', '★★★★★'],
    when: '扫描完成后，请同事把文件通过邮件发送给自己。',
    words: [
      { w: 'email', ipa: '/ˈiːmeɪl/', pos: '动词', cn: '发邮件', memory: 'e(电子)+mail(邮件)→电子邮件→发邮件。', phonics: 'e 读 /iː/，mail 读 /meɪl/，重音在第一音节。', collocations: [['email me', '发邮件给我'], ['email the file', '发文件'], ['email the report', '发报告']], examples: [['Please email it to me.', '请发邮件给我。'], ['I\'ll email the file shortly.', '我马上把文件发给你。']] },
      { w: 'scanned', ipa: '/skænd/', pos: '形容词（过去分词）', cn: '扫描好的；已扫描的', memory: 'scan 的过去分词形式，用作形容词修饰 file。', phonics: 'scanned 读 /skænd/，单音节。', collocations: [['scanned file', '扫描文件'], ['scanned copy', '扫描副本'], ['scanned image', '扫描图像']], examples: [['Please send the scanned file.', '请发送扫描文件。'], ['The scanned copy is clear.', '扫描副本很清晰。']] },
    ],
    phrases: [
      { p: 'email the scanned file', ipa: '/ˈiːmeɪl ðə skænd faɪl/', cn: '把扫描文件发邮件', why: 'email 作动词，直接表达发送动作；scanned 修饰 file 说明文件类型。' },
    ],
    grammar: [
      { q: 'email 可以直接当动词用吗？', a: '可以，email 是现代英语中最常见的「名词转动词」之一。\n✅ Please email me.（请发邮件给我。）\n✅ I\'ll email you the details.（我会把详情发邮件给你。）\n✅ Can you email the report?（你能把报告发邮件吗？）' },
    ],
    pattern: 'Please email + 文件/对象 + to + 接收人',
    patternExamples: [
      { en: 'Please email the report to the manager.', cn: '请把报告发邮件给经理。', words: [] },
      { en: 'Please email the invoice to me.', cn: '请把发票发邮件给我。', words: [] },
      { en: 'Please email the scanned copy to the team.', cn: '请把扫描副本发邮件给团队。', words: [] },
    ],
    thinking: 'email 作动词在办公室极为常见，比 send by email 更简洁。\nthe scanned file 明确指出是扫描后的文件。',
    pronunciation: 'email 重音在第一音节：E-mail。\nscanned 读 /skænd/，注意 /æ/ 短元音。\n节奏：Please E-mail ｜ the SCANNED file ｜ to ME.',
    quiz: [
      { q: '把「请把扫描文件发给我。」用英语说出来。', a: 'Please email the scanned file to me.' },
      { q: '「扫描文件」用英语怎么说？', a: 'scanned file (/skænd faɪl/)' },
    ],
  },
  {
    id: 2424,
    speaker: 'Engineer',
    en: 'The scanner is not responding.',
    cn: '扫描仪没有响应。',
    ipa: '/ðə ˈskænər ɪz nɒt rɪˈspɒndɪŋ/',
    tags: ['第2424句', '扫描操作', '★★★★★'],
    when: '扫描仪无法正常工作，向同事或IT部门报告故障。',
    words: [
      { w: 'scanner', ipa: '/ˈskænər/', pos: '名词', cn: '扫描仪', memory: 'scan(扫描)+ner(名词后缀，表设备)→扫描设备。', phonics: 'scan 读 /skæn/，ner 读 /ər/，重音在第一音节。', collocations: [['flatbed scanner', '平板扫描仪'], ['document scanner', '文档扫描仪'], ['barcode scanner', '条码扫描器']], examples: [['The scanner is broken.', '扫描仪坏了。'], ['Use the document scanner.', '用文档扫描仪。']] },
      { w: 'responding', ipa: '/rɪˈspɒndɪŋ/', pos: '动词（现在分词）', cn: '响应；反应', memory: 're(回)+spond(承诺)+ing→回应→响应。', phonics: 're 读 /rɪ/，spond 读 /spɒnd/，ing 读 /ɪŋ/，重音在第二音节。', collocations: [['not responding', '无响应'], ['stop responding', '停止响应'], ['responding slowly', '响应缓慢']], examples: [['The system is not responding.', '系统没有响应。'], ['The server stopped responding.', '服务器停止响应了。']] },
    ],
    phrases: [
      { p: 'is not responding', ipa: '/ɪz nɒt rɪˈspɒndɪŋ/', cn: '没有响应', why: '现在进行时否定，表示设备当前处于无响应状态，常用于IT故障报告。' },
    ],
    grammar: [
      { q: 'not responding 和 not working 有什么区别？', a: 'not responding 强调设备对操作没有反应（通常指软件/通信层面）。\nnot working 更通用，指设备整体不能用。\n✅ The scanner is not responding.（扫描仪没有响应。）—— 按了没反应\n✅ The scanner is not working.（扫描仪坏了。）—— 整体不能用' },
    ],
    pattern: '设备名 + is not responding',
    patternExamples: [
      { en: 'The printer is not responding.', cn: '打印机没有响应。', words: [] },
      { en: 'The server is not responding.', cn: '服务器没有响应。', words: [] },
      { en: 'The monitor is not responding.', cn: '显示器没有响应。', words: [] },
    ],
    thinking: 'not responding 是 IT 和办公设备故障的标准用语。\n与 not working 相比更侧重"操作无反应"。',
    pronunciation: 'scanner 重音在第一音节：SCAN-ner。\nresponding 重音在第二音节：re-SPOND-ing。\n节奏：The SCAN-ner ｜ is NOT ｜ re-SPOND-ing.',
    quiz: [
      { q: '把「扫描仪没有响应。」用英语说出来。', a: 'The scanner is not responding.' },
      { q: '「没有响应」用英语怎么说？', a: 'not responding (/nɒt rɪˈspɒndɪŋ/)' },
    ],
  },
  {
    id: 2425,
    speaker: 'Engineer',
    en: 'The scanned image is blurry.',
    cn: '扫描出来的图片不清楚。',
    ipa: '/ðə skænd ˈɪmɪdʒ ɪz ˈblɜːri/',
    tags: ['第2425句', '扫描操作', '★★★★★'],
    when: '扫描完成后发现图像模糊，需要重新扫描或调整设置。',
    words: [
      { w: 'blurry', ipa: '/ˈblɜːri/', pos: '形容词', cn: '模糊的', memory: 'blur(模糊)+ry(形容词后缀)→模糊的。', phonics: 'blur 读 /blɜːr/，ry 读 /ri/，重音在第一音节。', collocations: [['blurry image', '模糊图像'], ['blurry text', '模糊文字'], ['blurry photo', '模糊照片']], examples: [['The image is blurry.', '图像模糊。'], ['The text is too blurry to read.', '文字太模糊看不清。']] },
      { w: 'image', ipa: '/ˈɪmɪdʒ/', pos: '名词', cn: '图像；影像', memory: '源自拉丁语 imago(形象)。', phonics: 'im 读 /ɪm/，age 读 /ɪdʒ/，重音在第一音节。', collocations: [['scanned image', '扫描图像'], ['high-resolution image', '高分辨率图像'], ['image quality', '图像质量']], examples: [['The image quality is poor.', '图像质量差。'], ['Please rescan the image.', '请重新扫描图像。']] },
    ],
    phrases: [
      { p: 'The scanned image', ipa: '/ðə skænd ˈɪmɪdʒ/', cn: '扫描出的图像', why: 'scanned 作前置定语，明确是扫描产生的图像。' },
    ],
    grammar: [
      { q: 'blurry 和 unclear 有什么区别？', a: 'blurry 强调图像边缘不清、有模糊感（像对焦不准）。\nunclear 更通用，指内容难以理解或辨认。\n✅ The scanned image is blurry.（扫描图像模糊。）—— 图像本身不清晰\n✅ The instructions are unclear.（说明不清楚。）—— 内容难理解' },
    ],
    pattern: 'The scanned image + is + 质量形容词',
    patternExamples: [
      { en: 'The scanned image is too dark.', cn: '扫描图像太暗。', words: [] },
      { en: 'The scanned image is clear.', cn: '扫描图像清晰。', words: [] },
      { en: 'The scanned image is cut off.', cn: '扫描图像被截断了。', words: [] },
    ],
    thinking: 'blurry 是描述图像模糊最自然的词，比 unclear 更精准。\n在办公室扫描文件时，图像质量是常见问题。',
    pronunciation: 'blurry 读 /ˈblɜːri/，重音在第一音节，元音是 /ɜː/ 长元音。\nimage 读 /ˈɪmɪdʒ/，重音在第一音节。\n节奏：The SCANNED ｜ IM-age ｜ is BLUR-ry.',
    quiz: [
      { q: '把「扫描出来的图片不清楚。」用英语说出来。', a: 'The scanned image is blurry.' },
      { q: '「模糊的」用英语怎么说？', a: 'blurry (/ˈblɜːri/)' },
    ],
  },
  {
    id: 2426,
    speaker: 'Engineer',
    en: 'Do we have any A4 paper left?',
    cn: '还有A4纸吗？',
    ipa: '/duː wiː hæv ˈɛni eɪ-fɔːr ˈpeɪpər lɛft/',
    tags: ['第2426句', '办公用品', '★★★★★'],
    when: '需要打印或复印时，先确认办公用品库存。',
    words: [
      { w: 'left', ipa: '/lɛft/', pos: '形容词（过去分词）', cn: '剩余的；剩下的', memory: 'leave(留下)的过去分词，表示「剩下的」。', phonics: 'left 读 /lɛft/，单音节。', collocations: [['any left', '还有剩余吗'], ['nothing left', '没有剩余'], ['time left', '剩余时间']], examples: [['Is there any paper left?', '还有纸吗？'], ['We have two copies left.', '我们还剩两份。']] },
    ],
    phrases: [
      { p: 'any A4 paper left', ipa: '/ˈɛni eɪ-fɔːr ˈpeɪpər lɛft/', cn: '还有A4纸吗', why: 'any...left 是询问是否还有剩余的标准搭配。' },
    ],
    grammar: [
      { q: '为什么用 Do we have 而不是 Is there？', a: '两者都可以，但侧重不同。\nDo we have 强调"我们（团队/办公室）是否拥有"。\nIs there 强调"某个地方是否存在"。\n✅ Do we have any paper left?（我们还有纸吗？）—— 侧重"我们有"\n✅ Is there any paper left?（还有纸吗？）—— 侧重"有没有"\n两种说法都正确，日常可互换。' },
    ],
    pattern: 'Do we have any + 物品 + left?',
    patternExamples: [
      { en: 'Do we have any ink left?', cn: '还有墨水吗？', words: [] },
      { en: 'Do we have any pens left?', cn: '还有笔吗？', words: [] },
      { en: 'Do we have any staplers left?', cn: '还有订书机吗？', words: [] },
    ],
    thinking: 'any...left 是询问库存剩余的标准句式。\nA4 paper 是办公室最常用的纸张规格。',
    pronunciation: 'A4 读 A-four /eɪ-fɔːr/，英式也读 A-four。\nleft 读 /lɛft/，单音节。\n节奏：Do WE have ｜ any A4 PA-per ｜ LEFT?',
    quiz: [
      { q: '把「还有A4纸吗？」用英语说出来。', a: 'Do we have any A4 paper left?' },
      { q: '「还有剩余吗」用英语怎么说？', a: 'any...left (/ˈɛni...lɛft/)' },
    ],
  },
  {
    id: 2427,
    speaker: 'Engineer',
    en: 'We are running low on A4 paper.',
    cn: 'A4纸快用完了。',
    ipa: '/wiː ɑːr ˈrʌnɪŋ loʊ ɒn eɪ-fɔːr ˈpeɪpər/',
    tags: ['第2427句', '办公用品', '★★★★★'],
    when: '发现办公用品即将用完，提醒同事或主管补货。',
    words: [
      { w: 'running low', ipa: '/ˈrʌnɪŋ loʊ/', pos: '动词短语（现在进行时）', cn: '快用完了；即将耗尽', memory: 'run(跑/运行)+low(低)→运行到很低→快用完。', phonics: 'run 读 /rʌn/，ning 读 /nɪŋ/，low 读 /loʊ/。', collocations: [['running low on', '…快用完了'], ['running low on time', '时间不多了'], ['running low on supplies', '物资快用完了']], examples: [['We are running low on toner.', '墨粉快用完了。'], ['We\'re running low on time.', '我们时间不多了。']] },
    ],
    phrases: [
      { p: 'running low on', ipa: '/ˈrʌnɪŋ loʊ ɒn/', cn: '…快用完了', why: '固定短语，表示某物品即将耗尽，需要提前补货。' },
    ],
    grammar: [
      { q: 'running low on 和 out of 有什么区别？', a: 'running low on 表示「快用完但还有一点」，是预警。\nout of 表示「已经完全用完」。\n✅ We are running low on paper.（纸快用完了。）—— 还有一点\n✅ We are out of paper.（纸用完了。）—— 没有了\nrunning low 是预警信号，out of 是已经断供。' },
    ],
    pattern: 'We are running low on + 物品',
    patternExamples: [
      { en: 'We are running low on toner cartridges.', cn: '墨粉盒快用完了。', words: [] },
      { en: 'We are running low on coffee.', cn: '咖啡快喝完了。', words: [] },
      { en: 'We are running low on sticky notes.', cn: '便利贴快用完了。', words: [] },
    ],
    thinking: 'running low on 是办公室库存预警的标准用语。\n及时提醒可以避免用完才临时采购的尴尬。',
    pronunciation: 'running 读 /ˈrʌnɪŋ/，重音在第一音节。\nlow 读 /loʊ/，注意是长元音。\n节奏：We are ｜ RUN-ning LOW ｜ on A4 PA-per.',
    quiz: [
      { q: '把「A4纸快用完了。」用英语说出来。', a: 'We are running low on A4 paper.' },
      { q: '「快用完了」用英语怎么说？', a: 'running low on (/ˈrʌnɪŋ loʊ ɒn/)' },
    ],
  },
  {
    id: 2428,
    speaker: 'Manager',
    en: 'Please order more A4 paper.',
    cn: '请采购一些A4纸。',
    ipa: '/pliːz ˈɔːrdər mɔːr eɪ-fɔːr ˈpeɪpər/',
    tags: ['第2428句', '办公用品', '★★★★★'],
    when: '办公用品即将用完，安排行政或采购同事下单补货。',
    words: [
      { w: 'order', ipa: '/ˈɔːrdər/', pos: '动词', cn: '订购；下单', memory: 'order 同时有"命令"和"订购"两个意思，根据语境判断。', phonics: 'or 读 /ɔːr/，der 读 /dər/，重音在第一音节。', collocations: [['order supplies', '订购用品'], ['place an order', '下订单'], ['order online', '在线订购']], examples: [['Please order more ink.', '请订购更多墨水。'], ['I\'ve already ordered it.', '我已经下单了。']] },
    ],
    phrases: [
      { p: 'order more', ipa: '/ˈɔːrdər mɔːr/', cn: '订购更多', why: 'order 作动词表示「下单采购」，more 表示补充库存。' },
    ],
    grammar: [
      { q: 'order 和 purchase 有什么区别？', a: 'order 侧重「下单订购」这个动作，更口语化。\npurchase 侧重「购买/采购」，更正式。\n✅ Please order more paper.（请订购更多纸。）—— 日常口语\n✅ Please submit a purchase request.（请提交采购申请。）—— 正式流程\n日常补货用 order，正式采购流程用 purchase。' },
    ],
    pattern: 'Please order more + 物品名',
    patternExamples: [
      { en: 'Please order more toner cartridges.', cn: '请订购更多墨粉盒。', words: [] },
      { en: 'Please order more sticky notes.', cn: '请订购更多便利贴。', words: [] },
      { en: 'Please order more pens.', cn: '请订购更多笔。', words: [] },
    ],
    thinking: 'order 是办公室采购最常用的动词。\nmore + 物品名 简洁地表达"补货"的意思。',
    pronunciation: 'order 重音在第一音节：OR-der。\nmore 读 /mɔːr/，长元音。\n节奏：Please OR-der ｜ MORE ｜ A4 PA-per.',
    quiz: [
      { q: '把「请采购一些A4纸。」用英语说出来。', a: 'Please order more A4 paper.' },
      { q: '「订购」用英语怎么说？', a: 'order (/ˈɔːrdər/)' },
    ],
  },
  {
    id: 2429,
    speaker: 'Engineer',
    en: 'Could I borrow a pen?',
    cn: '我能借支笔吗？',
    ipa: '/kʊd aɪ ˈbɒroʊ ə pɛn/',
    tags: ['第2429句', '办公用品', '★★★★★'],
    when: '临时需要签字或记录，向同事借笔。',
    words: [
      { w: 'borrow', ipa: '/ˈbɒroʊ/', pos: '动词', cn: '借入', memory: '注意区分 borrow(借入) 和 lend(借出)。', phonics: 'bor 读 /bɒr/，row 读 /roʊ/，重音在第一音节。', collocations: [['borrow a pen', '借笔'], ['borrow a book', '借书'], ['can I borrow', '我能借吗']], examples: [['Can I borrow your pen?', '能借你的笔吗？'], ['I need to borrow a charger.', '我需要借个充电器。']] },
      { w: 'lend', ipa: '/lɛnd/', pos: '动词', cn: '借出', memory: 'lend(借出) vs borrow(借入)——方向相反。', phonics: 'lend 读 /lɛnd/，单音节。', collocations: [['lend me', '借给我'], ['lend a hand', '帮忙'], ['can you lend', '你能借吗']], examples: [['Can you lend me a pen?', '能借我支笔吗？'], ['I\'ll lend you my laptop.', '我把笔记本借给你。']] },
    ],
    phrases: [
      { p: 'Could I borrow', ipa: '/kʊd aɪ ˈbɒroʊ/', cn: '我能借吗', why: 'Could 比 Can 更礼貌，borrow 表示借入。' },
    ],
    grammar: [
      { q: 'borrow 和 lend 怎么区分？', a: 'borrow 是「借入」（从别人那里拿来用）。\nlend 是「借出」（把自己的给别人用）。\n✅ Could I borrow a pen?（我能借支笔吗？）—— 我借入\n✅ Can you lend me a pen?（你能借我支笔吗？）—— 你借出\n记住：borrow = 借入，lend = 借出。' },
    ],
    pattern: 'Could I borrow + 物品?',
    patternExamples: [
      { en: 'Could I borrow your stapler?', cn: '我能借你的订书机吗？', words: [] },
      { en: 'Could I borrow a marker?', cn: '我能借支马克笔吗？', words: [] },
      { en: 'Could I borrow your charger?', cn: '我能借你的充电器吗？', words: [] },
    ],
    thinking: 'borrow 和 lend 是英语中最容易混淆的词对之一。\nCould I borrow 是最礼貌的借物请求句式。',
    pronunciation: 'borrow 重音在第一音节：BOR-row。\nCould 读 /kʊd/，弱读时几乎听不到 d。\n节奏：Could I ｜ BOR-row ｜ a PEN?',
    quiz: [
      { q: '把「我能借支笔吗？」用英语说出来。', a: 'Could I borrow a pen?' },
      { q: 'borrow 和 lend 哪个是「借入」？', a: 'borrow (/ˈbɒroʊ/) 是借入，lend (/lɛnd/) 是借出。' },
    ],
  },
  {
    id: 2430,
    speaker: 'Engineer',
    en: 'Could I borrow your notebook?',
    cn: '我能借一下你的笔记本吗？',
    ipa: '/kʊd aɪ ˈbɒroʊ jɔːr ˈnoʊtbʊk/',
    tags: ['第2430句', '办公用品', '★★★★★'],
    when: '需要记录信息但手边没有笔记本，向同事借用。',
    words: [
      { w: 'notebook', ipa: '/ˈnoʊtbʊk/', pos: '名词', cn: '笔记本', memory: 'note(笔记)+book(书)→记录笔记的本子。', phonics: 'note 读 /noʊt/，book 读 /bʊk/，重音在第一音节。', collocations: [['spiral notebook', '螺旋笔记本'], ['notebook computer', '笔记本电脑'], ['take notes in a notebook', '在笔记本上记笔记']], examples: [['Do you have a spare notebook?', '你有多余的笔记本吗？'], ['I left my notebook at home.', '我把笔记本忘在家了。']] },
    ],
    phrases: [
      { p: 'your notebook', ipa: '/jɔːr ˈnoʊtbʊk/', cn: '你的笔记本', why: 'your 明确是向对方借用其个人物品，比 a notebook 更礼貌。' },
    ],
    grammar: [
      { q: 'Could I borrow your notebook 和 Can I borrow a notebook 有什么区别？', a: 'your notebook 指定借用对方的那本笔记本，更具体。\na notebook 泛指任何一本笔记本。\n✅ Could I borrow your notebook?（能借你的笔记本吗？）—— 指定对方的\n✅ Can I borrow a notebook?（能借一本笔记本吗？）—— 泛指任何一本\n借用私人物品时用 your 更自然。' },
    ],
    pattern: 'Could I borrow your + 私人物品?',
    patternExamples: [
      { en: 'Could I borrow your phone?', cn: '我能借你的手机吗？', words: [] },
      { en: 'Could I borrow your calculator?', cn: '我能借你的计算器吗？', words: [] },
      { en: 'Could I borrow your ruler?', cn: '我能借你的尺子吗？', words: [] },
    ],
    thinking: '借用他人私人物品时用 your 指定物品更礼貌。\nCould I borrow 已经是很客气的请求了。',
    pronunciation: 'notebook 重音在第一音节：NOTE-book。\nyour 读 /jɔːr/，在快速口语中可能弱化为 /jər/。\n节奏：Could I ｜ BOR-row ｜ your NOTE-book?',
    quiz: [
      { q: '把「我能借一下你的笔记本吗？」用英语说出来。', a: 'Could I borrow your notebook?' },
      { q: '「笔记本」用英语怎么说？', a: 'notebook (/ˈnoʊtbʊk/)' },
    ],
  },
  {
    id: 2431,
    speaker: 'Engineer',
    en: 'May I use your stapler?',
    cn: '我可以用一下你的订书机吗？',
    ipa: '/meɪ aɪ juːz jɔːr ˈsteɪplər/',
    tags: ['第2431句', '办公用品', '★★★★★'],
    when: '需要装订文件但自己桌上没有订书机。',
    words: [
      { w: 'stapler', ipa: '/ˈsteɪplər/', pos: '名词', cn: '订书机', memory: 'staple(订书钉)+er(名词后缀，表工具)→使用订书钉的工具。', phonics: 'sta 读 /steɪ/，pler 读 /plər/，重音在第一音节。', collocations: [['heavy-duty stapler', '重型订书机'], ['desk stapler', '桌面订书机'], ['staple remover', '起钉器']], examples: [['Where is the stapler?', '订书机在哪？'], ['The stapler is out of staples.', '订书机没钉了。']] },
      { w: 'May', ipa: '/meɪ/', pos: '情态动词', cn: '可以（表示请求许可）', memory: 'May 比 Could 更正式，是最礼貌的请求方式之一。', phonics: 'May 读 /meɪ/，单音节。', collocations: [['May I', '我可以…吗'], ['May I ask', '我可以问吗'], ['May I suggest', '我可以建议吗']], examples: [['May I come in?', '我可以进来吗？'], ['May I have a word?', '我能说几句话吗？']] },
    ],
    phrases: [
      { p: 'May I use', ipa: '/meɪ aɪ juːz/', cn: '我可以使用吗', why: 'May I 是最正式、最礼貌的请求许可方式。' },
    ],
    grammar: [
      { q: 'May I、Could I 和 Can I 的礼貌程度如何排序？', a: '从最礼貌到最随意：\n1. May I — 最正式、最礼貌\n2. Could I — 礼貌、常用\n3. Can I — 随意、口语化\n✅ May I use your stapler?（最礼貌）\n✅ Could I use your stapler?（礼貌）\n✅ Can I use your stapler?（随意）\n办公室中三种都可用，选 May 或 Could 更安全。' },
    ],
    pattern: 'May I use your + 办公用品?',
    patternExamples: [
      { en: 'May I use your printer?', cn: '我可以用你的打印机吗？', words: [] },
      { en: 'May I use your scissors?', cn: '我可以用你的剪刀吗？', words: [] },
      { en: 'May I use your hole punch?', cn: '我可以用你的打孔器吗？', words: [] },
    ],
    thinking: 'May I use 是请求使用他人物品的最礼貌方式。\nstapler 是办公室最常见的共享工具之一。',
    pronunciation: 'May 读 /meɪ/，注意不要读成 my。\nstapler 重音在第一音节：STA-pler。\n节奏：May I ｜ USE ｜ your STA-pler?',
    quiz: [
      { q: '把「我可以用一下你的订书机吗？」用英语说出来。', a: 'May I use your stapler?' },
      { q: '「订书机」用英语怎么说？', a: 'stapler (/ˈsteɪplər/)' },
    ],
  },
  {
    id: 2432,
    speaker: 'Engineer',
    en: 'Do you have a marker?',
    cn: '你有马克笔吗？',
    ipa: '/duː juː hæv ə ˈmɑːrkər/',
    tags: ['第2432句', '办公用品', '★★★★★'],
    when: '需要在白板或文件上做标记，询问同事是否有马克笔。',
    words: [
      { w: 'marker', ipa: '/ˈmɑːrkər/', pos: '名词', cn: '马克笔；记号笔', memory: 'mark(标记)+er(名词后缀，表工具)→做标记的工具。', phonics: 'mar 读 /mɑːr/，ker 读 /kər/，重音在第一音节。', collocations: [['whiteboard marker', '白板笔'], ['permanent marker', '永久记号笔'], ['highlighter marker', '荧光马克笔']], examples: [['I need a red marker.', '我需要一支红色马克笔。'], ['The whiteboard marker is dry.', '白板笔没墨了。']] },
    ],
    phrases: [
      { p: 'Do you have', ipa: '/duː juː hæv/', cn: '你有', why: '直接询问对方是否拥有某物，简洁高效。' },
    ],
    grammar: [
      { q: 'Do you have 和 Have you got 有什么区别？', a: '两者意思相同，但地区偏好不同。\nDo you have 是美式英语常用。\nHave you got 是英式英语常用。\n✅ Do you have a marker?（美式）\n✅ Have you got a marker?（英式）\n马来西亚英语两种都能听到，Do you have 更通用。' },
    ],
    pattern: 'Do you have + 物品?',
    patternExamples: [
      { en: 'Do you have a highlighter?', cn: '你有荧光笔吗？', words: [] },
      { en: 'Do you have a USB cable?', cn: '你有USB线吗？', words: [] },
      { en: 'Do you have a spare key?', cn: '你有备用钥匙吗？', words: [] },
    ],
    thinking: 'Do you have 是最通用的询问对方是否有某物的句式。\nmarker 在会议室和白板场景中特别常用。',
    pronunciation: 'marker 重音在第一音节：MAR-ker。\n注意 marker 和 market 发音不同：marker /ˈmɑːrkər/ vs market /ˈmɑːrkɪt/。\n节奏：Do you ｜ HAVE ｜ a MAR-ker?',
    quiz: [
      { q: '把「你有马克笔吗？」用英语说出来。', a: 'Do you have a marker?' },
      { q: '「马克笔」用英语怎么说？', a: 'marker (/ˈmɑːrkər/)' },
    ],
  },
  {
    id: 2433,
    speaker: 'Engineer',
    en: 'Could you pass me the scissors?',
    cn: '请把剪刀递给我。',
    ipa: '/kʊd juː pɑːs miː ðə ˈsɪzərz/',
    tags: ['第2433句', '办公用品', '★★★★★'],
    when: '同事手边有剪刀，请对方递过来。',
    words: [
      { w: 'pass', ipa: '/pɑːs/', pos: '动词', cn: '递；传递', memory: 'pass 本义是「经过」，引申为「把东西传递给某人」。', phonics: 'pass 读 /pɑːs/，单音节。', collocations: [['pass me', '递给我'], ['pass it over', '递过来'], ['pass the salt', '递盐']], examples: [['Could you pass me the pen?', '能把笔递给我吗？'], ['Pass it to me, please.', '请递给我。']] },
      { w: 'scissors', ipa: '/ˈsɪzərz/', pos: '名词（复数）', cn: '剪刀', memory: 'scissors 永远用复数形式（和 glasses 一样），因为有两个刀刃。', phonics: 'scis 读 /sɪz/，sors 读 /ərz/，重音在第一音节。', collocations: [['a pair of scissors', '一把剪刀'], ['office scissors', '办公剪刀'], ['cut with scissors', '用剪刀剪']], examples: [['I need the scissors.', '我需要剪刀。'], ['Where are the scissors?', '剪刀在哪？']] },
    ],
    phrases: [
      { p: 'pass me', ipa: '/pɑːs miː/', cn: '递给我', why: 'pass me 表示把东西传递给说话者，比 give me 更自然。' },
    ],
    grammar: [
      { q: 'pass 和 give 在递东西时有什么区别？', a: 'pass 强调「传递」（从一处移到另一处），通常距离较近。\ngive 强调「给予」（所有权转移）。\n✅ Could you pass me the scissors?（把剪刀递给我。）—— 传递\n✅ Can you give me a pen?（给我一支笔。）—— 给我\n递东西时用 pass 更自然。' },
    ],
    pattern: 'Could you pass me + 物品?',
    patternExamples: [
      { en: 'Could you pass me the tape?', cn: '请把胶带递给我。', words: [] },
      { en: 'Could you pass me the remote?', cn: '请把遥控器递给我。', words: [] },
      { en: 'Could you pass me the file?', cn: '请把文件递给我。', words: [] },
    ],
    thinking: 'pass me 是递东西时最自然的表达方式。\nscissors 永远用复数形式，注意用 the scissors 而不是 a scissors。',
    pronunciation: 'scissors 重音在第一音节：SCIS-sors，读 /ˈsɪzərz/。\npass 读 /pɑːs/，长元音。\n节奏：Could you ｜ PASS me ｜ the SCIS-sors?',
    quiz: [
      { q: '把「请把剪刀递给我。」用英语说出来。', a: 'Could you pass me the scissors?' },
      { q: '「剪刀」用英语怎么说？', a: 'scissors (/ˈsɪzərz/)，注意永远用复数形式。' },
    ],
  },
  {
    id: 2434,
    speaker: 'Engineer',
    en: 'Where is the tape?',
    cn: '胶带在哪里？',
    ipa: '/wɛr ɪz ðə teɪp/',
    tags: ['第2434句', '办公用品', '★★★★★'],
    when: '需要胶带封箱或粘贴文件，但找不到放在哪里。',
    words: [
      { w: 'tape', ipa: '/teɪp/', pos: '名词', cn: '胶带；磁带', memory: 'tape 本义是「带子」，办公室语境中指胶带。', phonics: 'tape 读 /teɪp/，单音节。', collocations: [['masking tape', '遮蔽胶带'], ['packing tape', '封箱胶带'], ['tape dispenser', '胶带座']], examples: [['I need some tape.', '我需要一些胶带。'], ['The tape is on the shelf.', '胶带在架子上。']] },
    ],
    phrases: [
      { p: 'Where is', ipa: '/wɛr ɪz/', cn: '在哪里', why: '最简洁的询问位置的句式。' },
    ],
    grammar: [
      { q: 'tape 是可数还是不可数名词？', a: 'tape 通常作不可数名词使用，指胶带这种材料。\n如果要指"一卷胶带"，说 a roll of tape。\n✅ Where is the tape?（胶带在哪？）—— 不可数\n✅ I need a roll of tape.（我需要一卷胶带。）—— 用量词\n日常口语中直接说 tape 即可。' },
    ],
    pattern: 'Where is + the + 办公用品?',
    patternExamples: [
      { en: 'Where is the stapler?', cn: '订书机在哪？', words: [] },
      { en: 'Where is the hole punch?', cn: '打孔器在哪？', words: [] },
      { en: 'Where is the ruler?', cn: '尺子在哪？', words: [] },
    ],
    thinking: 'Where is 是最简洁的询问位置句式。\ntape 在办公室中指胶带，是不可数名词。',
    pronunciation: 'tape 读 /teɪp/，注意不要和 type /taɪp/ 混淆。\nWhere 读 /wɛr/。\n节奏：WHERE is ｜ the TAPE?',
    quiz: [
      { q: '把「胶带在哪里？」用英语说出来。', a: 'Where is the tape?' },
      { q: '「胶带」用英语怎么说？', a: 'tape (/teɪp/)' },
    ],
  },
  {
    id: 2435,
    speaker: 'Manager',
    en: 'We need more printer paper.',
    cn: '我们需要更多打印纸。',
    ipa: '/wiː niːd mɔːr ˈprɪntər ˈpeɪpər/',
    tags: ['第2435句', '办公用品', '★★★★★'],
    when: '发现打印纸库存不足，提出补货需求。',
    words: [
      { w: 'need', ipa: '/niːd/', pos: '动词', cn: '需要', memory: 'need 表示客观需求，比 want 更正式和紧迫。', phonics: 'need 读 /niːd/，单音节。', collocations: [['we need', '我们需要'], ['need more', '需要更多'], ['urgently need', '急需']], examples: [['We need more supplies.', '我们需要更多用品。'], ['I need your help.', '我需要你的帮助。']] },
      { w: 'printer paper', ipa: '/ˈprɪntər ˈpeɪpər/', pos: '名词短语', cn: '打印纸', memory: 'printer(打印机)+paper(纸)→打印机用纸。', phonics: 'print 读 /prɪnt/，er 读 /ər/，paper 读 /ˈpeɪpər/。', collocations: [['printer paper', '打印纸'], ['photo printer paper', '相片打印纸'], ['A4 printer paper', 'A4打印纸']], examples: [['Buy some printer paper.', '买些打印纸。'], ['The printer paper is jammed.', '打印纸卡住了。']] },
    ],
    phrases: [
      { p: 'We need more', ipa: '/wiː niːd mɔːr/', cn: '我们需要更多', why: '直接表达需求，语气坚定但不强硬。' },
    ],
    grammar: [
      { q: 'We need 和 We should get 有什么区别？', a: 'We need 表示客观需求，更直接。\nWe should get 表示建议，更委婉。\n✅ We need more paper.（我们需要更多纸。）—— 直接需求\n✅ We should get more paper.（我们应该买更多纸。）—— 建议\n日常补货两种都可以，need 更简洁。' },
    ],
    pattern: 'We need more + 物品名',
    patternExamples: [
      { en: 'We need more ink cartridges.', cn: '我们需要更多墨盒。', words: [] },
      { en: 'We need more folders.', cn: '我们需要更多文件夹。', words: [] },
      { en: 'We need more binder clips.', cn: '我们需要更多燕尾夹。', words: [] },
    ],
    thinking: 'We need more 是提出补货需求最直接的句式。\nprinter paper 是办公室消耗最快的用品之一。',
    pronunciation: 'need 读 /niːd/，长元音 /iː/。\nprinter 重音在第一音节：PRINT-er。\n节奏：We NEED ｜ MORE ｜ PRINT-er PA-per.',
    quiz: [
      { q: '把「我们需要更多打印纸。」用英语说出来。', a: 'We need more printer paper.' },
      { q: '「打印纸」用英语怎么说？', a: 'printer paper (/ˈprɪntər ˈpeɪpər/)' },
    ],
  },
  {
    id: 2436,
    speaker: 'Manager',
    en: 'The meeting room is ready.',
    cn: '会议室已经准备好了。',
    ipa: '/ðə ˈmiːtɪŋ ruːm ɪz ˈrɛdi/',
    tags: ['第2436句', '会议室设备', '★★★★★'],
    when: '会议开始前确认会议室已布置完毕，通知参会人员。',
    words: [
      { w: 'meeting room', ipa: '/ˈmiːtɪŋ ruːm/', pos: '名词短语', cn: '会议室', memory: 'meeting(会议)+room(房间)→开会用的房间。', phonics: 'meet 读 /miːt/，ing 读 /ɪŋ/，room 读 /ruːm/。', collocations: [['book a meeting room', '预订会议室'], ['meeting room available', '会议室可用'], ['small meeting room', '小会议室']], examples: [['Is the meeting room free?', '会议室空着吗？'], ['Let\'s use the big meeting room.', '我们用大会议室吧。']] },
      { w: 'ready', ipa: '/ˈrɛdi/', pos: '形容词', cn: '准备好的', memory: 'ready 表示一切准备就绪，可以开始。', phonics: 'read 读 /rɛd/，y 读 /i/，重音在第一音节。', collocations: [['ready to start', '准备开始'], ['ready to use', '可以使用'], ['is it ready', '准备好了吗']], examples: [['Everything is ready.', '一切就绪。'], ['Are you ready?', '你准备好了吗？']] },
    ],
    phrases: [
      { p: 'is ready', ipa: '/ɪz ˈrɛdi/', cn: '已准备好', why: '简洁表达一切就绪的状态，常用于通知他人可以开始。' },
    ],
    grammar: [
      { q: 'is ready 和 has been set up 有什么区别？', a: 'is ready 只说结果——准备好了。\nhas been set up 强调准备的过程——已经布置好了。\n✅ The meeting room is ready.（会议室准备好了。）—— 简洁\n✅ The meeting room has been set up.（会议室已经布置好了。）—— 强调布置动作\n日常通知用 is ready 更简洁。' },
    ],
    pattern: '场所/设备 + is ready',
    patternExamples: [
      { en: 'The projector is ready.', cn: '投影仪准备好了。', words: [] },
      { en: 'The presentation is ready.', cn: '演示文稿准备好了。', words: [] },
      { en: 'The agenda is ready.', cn: '议程准备好了。', words: [] },
    ],
    thinking: 'is ready 是通知他人"已准备好"的最简洁表达。\n会议前确认会议室状态是办公室日常。',
    pronunciation: 'meeting 重音在第一音节：MEET-ing。\nready 读 /ˈrɛdi/，重音在第一音节。\n节奏：The MEET-ing ROOM ｜ is READ-y.',
    quiz: [
      { q: '把「会议室已经准备好了。」用英语说出来。', a: 'The meeting room is ready.' },
      { q: '「准备好了」用英语怎么说？', a: 'ready (/ˈrɛdi/)' },
    ],
  },
  {
    id: 2437,
    speaker: 'Manager',
    en: 'The projector is ready to use.',
    cn: '投影仪已经可以使用了。',
    ipa: '/ðə prəˈdʒɛktər ɪz ˈrɛdi tuː juːz/',
    tags: ['第2437句', '会议室设备', '★★★★★'],
    when: '投影仪已连接并调试完毕，通知演讲者可以开始。',
    words: [
      { w: 'projector', ipa: '/prəˈdʒɛktər/', pos: '名词', cn: '投影仪', memory: 'project(投射)+or(名词后缀，表设备)→投射图像的设备。', phonics: 'pro 读 /prə/，ject 读 /dʒɛkt/，or 读 /ər/，重音在第二音节。', collocations: [['LCD projector', '液晶投影仪'], ['portable projector', '便携投影仪'], ['projector screen', '投影幕布']], examples: [['Turn on the projector.', '打开投影仪。'], ['The projector is not working.', '投影仪不工作了。']] },
    ],
    phrases: [
      { p: 'ready to use', ipa: '/ˈrɛdi tuː juːz/', cn: '可以使用', why: 'ready to + 动词 表示"准备好做某事"，比单说 ready 更明确。' },
    ],
    grammar: [
      { q: 'ready to use 和 ready 有什么区别？', a: 'ready to use 更具体，明确"可以使用"。\nready 更笼统，可能指"准备好"但不确定准备好做什么。\n✅ The projector is ready to use.（投影仪可以使用了。）—— 明确\n✅ The projector is ready.（投影仪准备好了。）—— 笼统\n设备场景推荐用 ready to use 更清晰。' },
    ],
    pattern: '设备名 + is ready to use',
    patternExamples: [
      { en: 'The video conference system is ready to use.', cn: '视频会议系统可以使用了。', words: [] },
      { en: 'The whiteboard is ready to use.', cn: '白板可以使用了。', words: [] },
      { en: 'The printer is ready to use.', cn: '打印机可以使用了。', words: [] },
    ],
    thinking: 'ready to use 比 ready 更明确，常用于设备场景。\nprojector 是会议室最重要的设备之一。',
    pronunciation: 'projector 重音在第二音节：pro-JECT-or。\nready 读 /ˈrɛdi/。\n节奏：The pro-JEC-tor ｜ is READ-y ｜ to USE.',
    quiz: [
      { q: '把「投影仪已经可以使用了。」用英语说出来。', a: 'The projector is ready to use.' },
      { q: '「投影仪」用英语怎么说？', a: 'projector (/prəˈdʒɛktər/)' },
    ],
  },
  {
    id: 2438,
    speaker: 'Manager',
    en: 'Please connect your laptop to the projector.',
    cn: '请把你的电脑连接到投影仪。',
    ipa: '/pliːz kəˈnɛkt jɔːr ˈlæptɒp tuː ðə prəˈdʒɛktər/',
    tags: ['第2438句', '会议室设备', '★★★★★'],
    when: '会议开始前，请演讲者把笔记本电脑连接到投影仪。',
    words: [
      { w: 'connect', ipa: '/kəˈnɛkt/', pos: '动词', cn: '连接', memory: 'con(共同)+nect(绑)→绑在一起→连接。', phonics: 'con 读 /kə/，nect 读 /nɛkt/，重音在第二音节。', collocations: [['connect to', '连接到'], ['connect the cable', '连接线'], ['connect wirelessly', '无线连接']], examples: [['Please connect to the Wi-Fi.', '请连接Wi-Fi。'], ['I can\'t connect to the printer.', '我连不上打印机。']] },
      { w: 'laptop', ipa: '/ˈlæptɒp/', pos: '名词', cn: '笔记本电脑', memory: 'lap(膝)+top(上面)→放在膝上的电脑。', phonics: 'lap 读 /læp/，top 读 /tɒp/，重音在第一音节。', collocations: [['laptop computer', '笔记本电脑'], ['laptop bag', '笔记本包'], ['laptop charger', '笔记本充电器']], examples: [['Bring your laptop to the meeting.', '带笔记本去开会。'], ['My laptop is charging.', '我的笔记本在充电。']] },
    ],
    phrases: [
      { p: 'connect...to', ipa: '/kəˈnɛkt...tuː/', cn: '把…连接到…', why: 'connect A to B 是连接两个设备的标准表达。' },
    ],
    grammar: [
      { q: 'connect to 和 connect with 有什么区别？', a: 'connect to 用于物理连接（设备、网络）。\nconnect with 用于人际关系（联络、建立联系）。\n✅ Connect your laptop to the projector.（把电脑连接到投影仪。）\n✅ I\'ll connect with the client later.（我稍后跟客户联系。）\n设备场景用 to，人际场景用 with。' },
    ],
    pattern: 'Please connect + 设备A + to + 设备B',
    patternExamples: [
      { en: 'Please connect the HDMI cable to the monitor.', cn: '请把HDMI线连接到显示器。', words: [] },
      { en: 'Please connect the speaker to the computer.', cn: '请把音箱连接到电脑。', words: [] },
      { en: 'Please connect the microphone to the system.', cn: '请把麦克风连接到系统。', words: [] },
    ],
    thinking: 'connect A to B 是连接设备的标准句式。\n会议室连接投影仪是最常见的设备操作场景。',
    pronunciation: 'connect 重音在第二音节：con-NECT。\nlaptop 重音在第一音节：LAP-top。\n节奏：Please con-NECT ｜ your LAP-top ｜ to the pro-JEC-tor.',
    quiz: [
      { q: '把「请把你的电脑连接到投影仪。」用英语说出来。', a: 'Please connect your laptop to the projector.' },
      { q: '「连接到」用英语怎么说？', a: 'connect to (/kəˈnɛkt tuː/)' },
    ],
  },
  {
    id: 2439,
    speaker: 'Manager',
    en: 'The presentation is on the shared drive.',
    cn: '演示文稿在共享盘里。',
    ipa: '/ðə ˌprɛzɛnˈteɪʃən ɪz ɒn ðə ʃɛrd draɪv/',
    tags: ['第2439句', '会议室设备', '★★★★★'],
    when: '告诉同事演示文稿的存储位置，方便他们自行获取。',
    words: [
      { w: 'presentation', ipa: '/ˌprɛzɛnˈteɪʃən/', pos: '名词', cn: '演示文稿；演示', memory: 'present(呈现)+ation(名词后缀)→呈现的内容→演示文稿。', phonics: 'prez 读 /prɛz/，en 读 /ɛn/，ta 读 /teɪ/，tion 读 /ʃən/，重音在第三音节。', collocations: [['give a presentation', '做演示'], ['PowerPoint presentation', 'PPT演示文稿'], ['presentation slides', '演示幻灯片']], examples: [['The presentation is at 3 PM.', '演示在下午3点。'], ['I need to finish my presentation.', '我需要完成演示文稿。']] },
      { w: 'shared drive', ipa: '/ʃɛrd draɪv/', pos: '名词短语', cn: '共享盘；共享驱动器', memory: 'shared(共享的)+drive(驱动器)→团队共用的网络存储。', phonics: 'shared 读 /ʃɛrd/，drive 读 /draɪv/。', collocations: [['shared drive', '共享盘'], ['network drive', '网络盘'], ['shared folder', '共享文件夹']], examples: [['Save it to the shared drive.', '保存到共享盘。'], ['The shared drive is full.', '共享盘满了。']] },
    ],
    phrases: [
      { p: 'on the shared drive', ipa: '/ɒn ðə ʃɛrd draɪv/', cn: '在共享盘上', why: 'on 用于表示文件存储在某个介质/位置，类似 on the server。' },
    ],
    grammar: [
      { q: '为什么用 on the shared drive 而不是 in the shared drive？', a: 'on 和 in 都可以，但习惯上存储介质用 on。\non the drive / on the server / on the computer — 更常见。\nin the folder / in the directory — 文件夹内用 in。\n✅ The file is on the shared drive.（文件在共享盘上。）\n✅ The file is in the shared folder.（文件在共享文件夹里。）' },
    ],
    pattern: '文件 + is on/in + 存储位置',
    patternExamples: [
      { en: 'The report is on the server.', cn: '报告在服务器上。', words: [] },
      { en: 'The file is in the shared folder.', cn: '文件在共享文件夹里。', words: [] },
      { en: 'The document is on SharePoint.', cn: '文档在SharePoint上。', words: [] },
    ],
    thinking: 'shared drive 是团队协作中存储文件的常见位置。\n文件位置用 on 搭配存储介质。',
    pronunciation: 'presentation 重音在第三音节：prez-en-TA-tion。\nshared 读 /ʃɛrd/，注意 -ed 发 /d/ 音。\n节奏：The pres-en-TA-tion ｜ is ON ｜ the SHARED DRIVE.',
    quiz: [
      { q: '把「演示文稿在共享盘里。」用英语说出来。', a: 'The presentation is on the shared drive.' },
      { q: '「共享盘」用英语怎么说？', a: 'shared drive (/ʃɛrd draɪv/)' },
    ],
  },
  {
    id: 2440,
    speaker: 'Manager',
    en: "Let's start the presentation.",
    cn: '我们开始演示吧。',
    ipa: '/lɛts stɑːrt ðə ˌprɛzɛnˈteɪʃən/',
    tags: ['第2440句', '会议室设备', '★★★★★'],
    when: '一切准备就绪后，宣布会议演示正式开始。',
    words: [
      { w: "Let's", ipa: '/lɛts/', pos: '缩写', cn: '让我们（let us 的缩写）', memory: 'let(让)+us(我们)的缩写，表示建议一起做某事。', phonics: "let's 读 /lɛts/，单音节。", collocations: [["let's start", '我们开始吧'], ["let's begin", '我们开始吧'], ["let's go", '走吧/开始吧']], examples: [["Let's get started.", '我们开始吧。'], ["Let's move on.", '我们继续吧。']] },
      { w: 'start', ipa: '/stɑːrt/', pos: '动词', cn: '开始', memory: 'start 和 begin 同义，start 更口语化。', phonics: 'start 读 /stɑːrt/，单音节。', collocations: [['start the meeting', '开始会议'], ['start over', '重新开始'], ['start the engine', '启动引擎']], examples: [["Let's start the meeting.", '我们开始会议吧。'], ['When do we start?', '我们什么时候开始？']] },
    ],
    phrases: [
      { p: "Let's start", ipa: '/lɛts stɑːrt/', cn: '我们开始吧', why: 'Let\'s + 动词原形是提出建议的标准句式，表示「我们一起做某事」。' },
    ],
    grammar: [
      { q: "Let's start 和 Let's begin 有什么区别？", a: "两者意思几乎相同，但 start 更口语化，begin 稍正式。\n✅ Let's start the presentation.（我们开始演示吧。）—— 口语化\n✅ Let's begin the presentation.（我们开始演示吧。）—— 稍正式\n日常会议中两种都可以用。" },
    ],
    pattern: "Let's + 动词原形 + 对象",
    patternExamples: [
      { en: "Let's start the meeting.", cn: '我们开始会议吧。', words: [] },
      { en: "Let's review the report.", cn: '我们来审查报告吧。', words: [] },
      { en: "Let's take a look at the data.", cn: '我们来看看数据吧。', words: [] },
    ],
    thinking: "Let's + 动词原形 是英语中最常用的建议句式。\n在会议场景中，宣布开始是主持人的基本用语。",
    pronunciation: "let's 读 /lɛts/，单音节。\nstart 读 /stɑːrt/，长元音 /ɑː/。\npresentation 重音在第三音节：prez-en-TA-tion。\n节奏：LET'S START ｜ the pres-en-TA-tion.",
    quiz: [
      { q: '把「我们开始演示吧。」用英语说出来。', a: "Let's start the presentation." },
      { q: "「让我们开始」用英语怎么说？", a: "Let's start (/lɛts stɑːrt/)" },
    ],
  },
];

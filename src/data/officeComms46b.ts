// EXPORTS: MOCK_SENTENCES_OFFICECOMMS46B

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_OFFICECOMMS46B: ISentence[] = [
  {
    id: 2501,
    speaker: 'Engineer',
    en: 'Please update the Excel spreadsheet.',
    cn: '请更新Excel表格。',
    ipa: '/pliːz ˌʌpˈdeɪt ðə ˈɛksəl ˈsprɛdʃiːt/',
    tags: ['第2501句', 'Excel操作', '★★★★'],
    when: '需要同事把最新数据录入共享的Excel表格中。',
    words: [
      { w: 'update', ipa: '/ˌʌpˈdeɪt/', pos: '动词', cn: '更新', memory: 'up(向上)+date(日期)→使内容更新到最新。', phonics: 'up 读 /ʌp/，date 读 /deɪt/，重音在第二音节。', collocations: [['update the file', '更新文件'], ['update the record', '更新记录']], examples: [['Please update the log.', '请更新日志。'], ['I will update the schedule.', '我会更新排班表。']] },
      { w: 'spreadsheet', ipa: '/ˈsprɛdʃiːt/', pos: '名词', cn: '电子表格', memory: 'spread(展开)+sheet(纸张)→展开的表格→电子表格。', phonics: 'spread 读 /sprɛd/，sheet 读 /ʃiːt/，重音在第一音节。', collocations: [['Excel spreadsheet', 'Excel表格'], ['update the spreadsheet', '更新表格']], examples: [['Open the spreadsheet.', '打开表格。'], ['The spreadsheet is shared online.', '表格是在线共享的。']] },
    ],
    phrases: [
      { p: 'update the spreadsheet', ipa: '/ˌʌpˈdeɪt ðə ˈsprɛdʃiːt/', cn: '更新电子表格', why: 'update + the spreadsheet 是办公室最常见的数据维护指令之一。' },
    ],
    grammar: [
      { q: 'update 和 upgrade 有什么区别？', a: 'update 指「更新内容/数据」，使信息保持最新。\nupgrade 指「升级系统/设备」，提升性能或版本。\n✅ Update the spreadsheet.（更新表格。）—— 更新数据\n✅ Upgrade the software.（升级软件。）—— 提升版本\n表格、数据用 update；系统、硬件用 upgrade。' },
    ],
    pattern: 'Please update + 对象',
    patternExamples: [
      { en: 'Please update the contact list.', cn: '请更新通讯录。', words: [] },
      { en: 'Please update the inventory record.', cn: '请更新库存记录。', words: [] },
      { en: 'Please update the shift schedule.', cn: '请更新排班表。', words: [] },
    ],
    thinking: '在数据中心，每日巡检数据需要录入Excel表格。\nPlease update the Excel spreadsheet 是最直接的数据更新指令。\n中文说「请更新Excel表格」，英语直接对应。',
    pronunciation: 'spreadsheet 重音在第一音节：SPREAD-sheet。\nupdate 重音在第二音节：up-DATE。\n节奏：PLEASE up-DATE ｜ the EX-cel ｜ SPREAD-sheet.',
    quiz: [
      { q: '把「请更新Excel表格。」用英语说出来。', a: 'Please update the Excel spreadsheet.' },
      { q: '「电子表格」用英语怎么说？', a: 'spreadsheet (/ˈsprɛdʃiːt/)' },
    ],
  },
  {
    id: 2502,
    speaker: 'Engineer',
    en: "Please add today's data to the spreadsheet.",
    cn: '请把今天的数据添加到表格中。',
    ipa: '/pliːz æd təˈdeɪz ˈdeɪtə tuː ðə ˈsprɛdʃiːt/',
    tags: ['第2502句', 'Excel操作', '★★★★'],
    when: '交接时提醒同事把本班次的巡检数据录入表格。',
    words: [
      { w: 'add', ipa: '/æd/', pos: '动词', cn: '添加；加入', memory: 'add 基础动词，表示增加内容。', phonics: 'add 读 /æd/，单音节。', collocations: [['add data', '添加数据'], ['add a column', '添加一列'], ['add a row', '添加一行']], examples: [['Add this number.', '加上这个数字。'], ['Please add a new entry.', '请添加一条新记录。']] },
      { w: 'data', ipa: '/ˈdeɪtə/', pos: '名词', cn: '数据', memory: 'datum(单数)的复数形式，现代英语中常作不可数名词使用。', phonics: 'da 读 /deɪ/，ta 读 /tə/，重音在第一音节。', collocations: [['input data', '输入数据'], ['data entry', '数据录入'], ['collect data', '收集数据']], examples: [['Enter the data here.', '在这里输入数据。'], ['The data looks correct.', '数据看起来正确。']] },
    ],
    phrases: [
      { p: "today's data", ipa: "/təˈdeɪz ˈdeɪtə/", cn: '今天的数据', why: '名词 + 撇号 s 表示所属关系，today 的所有格。' },
      { p: 'add…to…', ipa: '/æd…tuː…/', cn: '把…添加到…', why: 'add A to B 是固定搭配，表示将 A 加入 B 中。' },
    ],
    grammar: [
      { q: 'data 是单数还是复数？', a: 'data 传统上是 datum 的复数形式，但现代英语中常作不可数名词。\n✅ The data is correct.（数据是正确的。）—— 日常用法\n✅ The data are correct.（数据是正确的。）—— 学术用法\n日常办公室中用 is 即可。' },
    ],
    pattern: 'Please add + 内容 + to + 目标',
    patternExamples: [
      { en: "Please add this week's readings to the log.", cn: '请把这周的读数添加到日志中。', words: [] },
      { en: 'Please add the new items to the list.', cn: '请把新项目添加到列表中。', words: [] },
      { en: 'Please add your comments to the report.', cn: '请把你的意见添加到报告中。', words: [] },
    ],
    thinking: '每个班次结束后需要把巡检数据录入共享表格。\nadd…to… 是「把…加到…」的标准句式。\n中文说「把今天的数据添加到表格中」，英语用 add today\'s data to the spreadsheet。',
    pronunciation: "data 读 /ˈdeɪtə/，不是 /ˈdætə/。\ntoday's 读 /təˈdeɪz/，末尾有 z 音。\n节奏：PLEASE ADD ｜ to-DAY'S DA-ta ｜ to the SPREAD-sheet.",
    quiz: [
      { q: '把「请把今天的数据添加到表格中。」用英语说出来。', a: "Please add today's data to the spreadsheet." },
      { q: '「添加…到…」用英语怎么说？', a: 'add…to… (/æd…tuː…/)' },
    ],
  },
  {
    id: 2503,
    speaker: 'Engineer',
    en: 'Please sort the data by date.',
    cn: '请按日期排序。',
    ipa: '/pliːz sɔːrt ðə ˈdeɪtə baɪ deɪt/',
    tags: ['第2503句', 'Excel操作', '★★★★'],
    when: '整理告警记录或巡检数据时，要求按时间顺序排列。',
    words: [
      { w: 'sort', ipa: '/sɔːrt/', pos: '动词', cn: '排序；分类', memory: 'sort 基础动词，表示按规则排列。', phonics: 'sort 读 /sɔːrt/，单音节。', collocations: [['sort by date', '按日期排序'], ['sort by name', '按名称排序'], ['sort ascending', '升序排列']], examples: [['Sort the list alphabetically.', '按字母顺序排列列表。'], ['Please sort these records.', '请整理这些记录。']] },
    ],
    phrases: [
      { p: 'sort by date', ipa: '/sɔːrt baɪ deɪt/', cn: '按日期排序', why: 'sort by + 字段名 是数据处理的标准指令格式。' },
    ],
    grammar: [
      { q: 'sort 和 filter 有什么区别？', a: 'sort 是「排序」，改变数据的排列顺序。\nfilter 是「筛选」，只显示符合条件的数据。\n✅ Sort by date.（按日期排序。）—— 重新排列\n✅ Filter completed items.（筛选已完成的项目。）—— 隐藏不符合条件的\n两者常配合使用：先 filter 再 sort。' },
    ],
    pattern: 'Please sort + 数据 + by + 排序字段',
    patternExamples: [
      { en: 'Please sort the alarms by severity.', cn: '请按严重程度排序告警。', words: [] },
      { en: 'Please sort the tickets by priority.', cn: '请按优先级排序工单。', words: [] },
      { en: 'Please sort the names alphabetically.', cn: '请按字母顺序排列姓名。', words: [] },
    ],
    thinking: '数据中心经常需要按时间排列告警记录或巡检数据。\nsort by + 字段名 是 Excel 中最常用的操作指令之一。\n中文说「按日期排序」，英语用 sort by date。',
    pronunciation: 'sort 读 /sɔːrt/，注意 r 音。\n节奏：PLEASE SORT ｜ the DA-ta ｜ by DATE.',
    quiz: [
      { q: '把「请按日期排序。」用英语说出来。', a: 'Please sort the data by date.' },
      { q: '「排序」用英语怎么说？', a: 'sort (/sɔːrt/)' },
    ],
  },
  {
    id: 2504,
    speaker: 'Engineer',
    en: 'Please filter the completed items.',
    cn: '请筛选已经完成的项目。',
    ipa: '/pliːz ˈfɪltər ðə kəmˈpliːtɪd ˈaɪtəmz/',
    tags: ['第2504句', 'Excel操作', '★★★★'],
    when: '整理任务列表时，只显示已完成的项目以便统计。',
    words: [
      { w: 'filter', ipa: '/ˈfɪltər/', pos: '动词', cn: '筛选；过滤', memory: 'filter 原义为过滤器，作动词表示按条件筛选数据。', phonics: 'fil 读 /fɪl/，ter 读 /tər/，重音在第一音节。', collocations: [['filter data', '筛选数据'], ['filter by status', '按状态筛选']], examples: [['Filter out the old records.', '筛掉旧记录。'], ['Please filter by department.', '请按部门筛选。']] },
      { w: 'completed', ipa: '/kəmˈpliːtɪd/', pos: '形容词（过去分词）', cn: '已完成的', memory: 'complete(完成)+ed(过去分词/形容词)→已经完成的。', phonics: 'com 读 /kəm/，plet 读 /pliːt/，ed 读 /ɪd/，重音在第二音节。', collocations: [['completed tasks', '已完成任务'], ['completed items', '已完成项目']], examples: [['Mark it as completed.', '标记为已完成。'], ['All items are completed.', '所有项目都已完成。']] },
    ],
    phrases: [
      { p: 'filter the completed items', ipa: '/ˈfɪltər ðə kəmˈpliːtɪd ˈaɪtəmz/', cn: '筛选已完成的项目', why: 'filter + 形容词 + 名词，按特定条件筛选数据。' },
    ],
    grammar: [
      { q: 'filter out 和 filter 有什么区别？', a: 'filter 是「筛选出/保留」符合条件的数据。\nfilter out 是「过滤掉/排除」不符合条件的数据。\n✅ Filter the completed items.（筛选出已完成的项目。）—— 保留已完成的\n✅ Filter out the old records.（筛掉旧记录。）—— 排除旧的\n方向相反，注意使用场景。' },
    ],
    pattern: 'Please filter + 条件 + 对象',
    patternExamples: [
      { en: 'Please filter the active alarms.', cn: '请筛选出活动告警。', words: [] },
      { en: 'Please filter by this month.', cn: '请按本月筛选。', words: [] },
      { en: 'Please filter the critical items only.', cn: '请只筛选严重级别的项目。', words: [] },
    ],
    thinking: '数据筛选是 Excel 中整理数据的核心功能。\nfilter + 条件 可以精确地显示需要的数据。\n中文说「筛选已完成的项目」，英语用 filter the completed items。',
    pronunciation: 'filter 重音在第一音节：FIL-ter。\ncompleted 重音在第二音节：com-PLET-ed。\n节奏：PLEASE FIL-ter ｜ the com-PLET-ed ｜ I-tems.',
    quiz: [
      { q: '把「请筛选已经完成的项目。」用英语说出来。', a: 'Please filter the completed items.' },
      { q: '「筛选」用英语怎么说？', a: 'filter (/ˈfɪltər/)' },
    ],
  },
  {
    id: 2505,
    speaker: 'Engineer',
    en: 'Please convert this file to PDF.',
    cn: '请把这个文件转换成PDF。',
    ipa: '/pliːz kənˈvɜːrt ðɪs faɪl tuː ˌpiː-diːˈɛf/',
    tags: ['第2505句', '文件转换', '★★★★'],
    when: '需要将 Word 或 Excel 文件转换为 PDF 格式以便发送或归档。',
    words: [
      { w: 'convert', ipa: '/kənˈvɜːrt/', pos: '动词', cn: '转换；转变', memory: 'con(共同)+vert(转)→转变形态→转换。', phonics: 'con 读 /kən/，vert 读 /vɜːrt/，重音在第二音节。', collocations: [['convert to PDF', '转换成PDF'], ['convert the format', '转换格式']], examples: [['Convert this to Word.', '把这个转成Word。'], ['The file has been converted.', '文件已经转换完成。']] },
    ],
    phrases: [
      { p: 'convert…to…', ipa: '/kənˈvɜːrt…tuː…/', cn: '把…转换成…', why: 'convert A to B 是文件格式转换的标准句式。' },
    ],
    grammar: [
      { q: 'convert 和 change 有什么区别？', a: 'convert 强调「格式/类型的转换」，内容不变但形态改变。\nchange 更通用，可以指任何改变。\n✅ Convert this file to PDF.（把这个文件转换成PDF。）—— 格式转换\n✅ Change the file name.（修改文件名。）—— 一般性修改\n格式转换场景用 convert 更精确。' },
    ],
    pattern: 'Please convert + 文件 + to + 目标格式',
    patternExamples: [
      { en: 'Please convert this to Word format.', cn: '请把这个转换成Word格式。', words: [] },
      { en: 'Please convert the report to PDF.', cn: '请把报告转换成PDF。', words: [] },
      { en: 'Please convert the image to JPEG.', cn: '请把图片转换成JPEG。', words: [] },
    ],
    thinking: '文件归档或发送给客户时，常需要转换为 PDF 格式。\nconvert…to… 是格式转换的标准句式。\n中文说「转换成PDF」，英语用 convert to PDF。',
    pronunciation: 'convert 重音在第二音节：con-VERT。\nPDF 逐字母读：P-D-F /ˌpiː-diːˈɛf/。\n节奏：PLEASE con-VERT ｜ this FILE ｜ to P-D-F.',
    quiz: [
      { q: '把「请把这个文件转换成PDF。」用英语说出来。', a: 'Please convert this file to PDF.' },
      { q: '「转换」用英语怎么说？', a: 'convert (/kənˈvɜːrt/)' },
    ],
  },
  {
    id: 2506,
    speaker: 'Engineer',
    en: 'Please combine these PDF files into one document.',
    cn: '请把这些PDF合并成一个文件。',
    ipa: '/pliːz kəmˈbaɪn ðiːz ˌpiː-diːˈɛf faɪlz ˈɪntuː wʌn ˈdɒkjəmənt/',
    tags: ['第2506句', 'PDF操作', '★★★★'],
    when: '需要将多份巡检报告 PDF 合并为一份完整文档提交。',
    words: [
      { w: 'combine', ipa: '/kəmˈbaɪn/', pos: '动词', cn: '合并；组合', memory: 'com(共同)+bine(连接)→连接到一起→合并。', phonics: 'com 读 /kəm/，bine 读 /baɪn/，重音在第二音节。', collocations: [['combine files', '合并文件'], ['combine into one', '合并成一个']], examples: [['Combine these two reports.', '合并这两份报告。'], ['The files have been combined.', '文件已经合并了。']] },
    ],
    phrases: [
      { p: 'combine…into one', ipa: '/kəmˈbaɪn…ˈɪntuː wʌn/', cn: '把…合并成一个', why: 'combine A into one B 表示将多个项目合并为一个整体。' },
    ],
    grammar: [
      { q: 'combine 和 merge 有什么区别？', a: '两者意思接近，但 merge 更常用于数据/文件的「融合」。\ncombine 更通用，表示「组合/合并」。\n✅ Combine these PDFs into one.（把这些PDF合并成一个。）\n✅ Merge the two spreadsheets.（合并两个表格。）\n日常用语中两者可互换。' },
    ],
    pattern: 'Please combine + 多个对象 + into one + 目标',
    patternExamples: [
      { en: 'Please combine these reports into one file.', cn: '请把这些报告合并成一个文件。', words: [] },
      { en: 'Please combine all the sheets into one workbook.', cn: '请把所有工作表合并到一个工作簿中。', words: [] },
      { en: 'Please combine the photos into one album.', cn: '请把这些照片合并到一个相册中。', words: [] },
    ],
    thinking: '月度报告或巡检记录常需要把多份 PDF 合并为一份。\ncombine…into one… 是合并操作的标准句式。\n中文说「把这些PDF合并成一个文件」，英语用 combine these PDF files into one document。',
    pronunciation: 'combine 重音在第二音节：com-BINE。\nthese 读 /ðiːz/，注意 th 音。\n节奏：PLEASE com-BINE ｜ these P-D-F FILES ｜ in-to ONE DOC-u-ment.',
    quiz: [
      { q: '把「请把这些PDF合并成一个文件。」用英语说出来。', a: 'Please combine these PDF files into one document.' },
      { q: '「合并」用英语怎么说？', a: 'combine (/kəmˈbaɪn/)' },
    ],
  },
  {
    id: 2507,
    speaker: 'Engineer',
    en: 'Please edit the Word document.',
    cn: '请修改Word文档。',
    ipa: '/pliːz ˈɛdɪt ðə wɜːrd ˈdɒkjəmənt/',
    tags: ['第2507句', 'Word操作', '★★★★'],
    when: '需要同事修改或更新 Word 格式的操作手册或报告。',
    words: [
      { w: 'edit', ipa: '/ˈɛdɪt/', pos: '动词', cn: '编辑；修改', memory: 'edit 基础动词，表示对文本进行修改。', phonics: 'ed 读 /ɛd/，it 读 /ɪt/，重音在第一音节。', collocations: [['edit the document', '编辑文档'], ['edit the text', '编辑文本']], examples: [['Please edit this section.', '请修改这一节。'], ['The file is being edited.', '文件正在被编辑。']] },
    ],
    phrases: [
      { p: 'edit the document', ipa: '/ˈɛdɪt ðə ˈdɒkjəmənt/', cn: '编辑文档', why: 'edit + the document 是对文档进行内容修改的标准指令。' },
    ],
    grammar: [
      { q: 'edit 和 revise 有什么区别？', a: 'edit 指「编辑/修改」，范围较广，包括小改动。\nrevise 指「修订」，通常涉及较大范围的修改和审查。\n✅ Edit the document.（修改文档。）—— 一般性修改\n✅ Revise the procedure.（修订流程。）—— 全面审查修改\n日常小改动用 edit 即可。' },
    ],
    pattern: 'Please edit + 对象',
    patternExamples: [
      { en: 'Please edit the meeting minutes.', cn: '请修改会议纪要。', words: [] },
      { en: 'Please edit the contact information.', cn: '请修改联系信息。', words: [] },
      { en: 'Please edit the title page.', cn: '请修改封面页。', words: [] },
    ],
    thinking: '操作手册和报告需要定期更新内容。\nedit 是最直接的文档修改指令。\n中文说「修改Word文档」，英语用 edit the Word document。',
    pronunciation: 'edit 重音在第一音节：ED-it。\nWord 读 /wɜːrd/，注意 r 音。\n节奏：PLEASE ED-it ｜ the WORD ｜ DOC-u-ment.',
    quiz: [
      { q: '把「请修改Word文档。」用英语说出来。', a: 'Please edit the Word document.' },
      { q: '「编辑/修改」用英语怎么说？', a: 'edit (/ˈɛdɪt/)' },
    ],
  },
  {
    id: 2508,
    speaker: 'Engineer',
    en: 'Please check the formatting before printing.',
    cn: '打印前请检查一下格式。',
    ipa: '/pliːz tʃɛk ðə ˈfɔːrmætɪŋ bɪˈfɔːr ˈprɪntɪŋ/',
    tags: ['第2508句', '打印准备', '★★★★'],
    when: '打印正式报告前提醒同事检查排版、字体、页边距等格式。',
    words: [
      { w: 'formatting', ipa: '/ˈfɔːrmætɪŋ/', pos: '名词', cn: '格式；排版', memory: 'format(格式)+ting(动名词)→格式化处理→排版。', phonics: 'for 读 /fɔːr/，mat 读 /mæt/，ting 读 /tɪŋ/，重音在第一音节。', collocations: [['check formatting', '检查格式'], ['formatting issues', '格式问题']], examples: [['The formatting looks good.', '格式看起来不错。'], ['Fix the formatting first.', '先修正格式。']] },
    ],
    phrases: [
      { p: 'before printing', ipa: '/bɪˈfɔːr ˈprɪntɪŋ/', cn: '打印之前', why: 'before + 动名词 表示在做某事之前，提醒先完成检查步骤。' },
    ],
    grammar: [
      { q: 'before + 动名词和 before + 从句有什么区别？', a: 'before + 动名词 (before printing) 更简洁，主语一致时使用。\nbefore + 从句 (before you print) 更明确主语。\n✅ Check the formatting before printing.（打印前检查格式。）—— 简洁\n✅ Check the formatting before you print it.（你打印前检查一下格式。）—— 明确主语\n办公室指令常用动名词形式，更简洁。' },
    ],
    pattern: 'Please + 动作 + before + 动名词',
    patternExamples: [
      { en: 'Please save before closing.', cn: '关闭前请保存。', words: [] },
      { en: 'Please review before submitting.', cn: '提交前请审核。', words: [] },
      { en: 'Please test before deploying.', cn: '部署前请测试。', words: [] },
    ],
    thinking: '打印正式文件前检查格式可以避免排版错误。\nbefore + 动名词 是办公室常用的「先做A再做B」句式。\n中文说「打印前请检查一下格式」，英语用 check the formatting before printing。',
    pronunciation: 'formatting 重音在第一音节：FOR-mat-ting。\nbefore 重音在第二音节：be-FORE。\n节奏：PLEASE CHECK ｜ the FOR-mat-ting ｜ be-FORE PRINT-ing.',
    quiz: [
      { q: '把「打印前请检查一下格式。」用英语说出来。', a: 'Please check the formatting before printing.' },
      { q: '「格式/排版」用英语怎么说？', a: 'formatting (/ˈfɔːrmætɪŋ/)' },
    ],
  },
  {
    id: 2509,
    speaker: 'Engineer',
    en: 'Please save the document before closing it.',
    cn: '关闭前请保存文件。',
    ipa: '/pliːz seɪv ðə ˈdɒkjəmənt bɪˈfɔːr ˈkloʊzɪŋ ɪt/',
    tags: ['第2509句', '文件保存', '★★★★'],
    when: '提醒同事关闭文件前先保存，防止数据丢失。',
    words: [
      { w: 'save', ipa: '/seɪv/', pos: '动词', cn: '保存；存储', memory: 'save 基础动词，在计算机语境中指保存文件。', phonics: 'save 读 /seɪv/，单音节。', collocations: [['save the file', '保存文件'], ['save as', '另存为'], ['auto-save', '自动保存']], examples: [['Don\'t forget to save.', '别忘了保存。'], ['The file has been saved.', '文件已保存。']] },
    ],
    phrases: [
      { p: 'before closing it', ipa: '/bɪˈfɔːr ˈkloʊzɪŋ ɪt/', cn: '关闭它之前', why: 'before + closing + it 明确指关闭当前文件/程序前的操作。' },
    ],
    grammar: [
      { q: 'save 和 save as 有什么区别？', a: 'save 是「保存」，覆盖当前文件。\nsave as 是「另存为」，创建新文件。\n✅ Save the document.（保存文档。）—— 覆盖原文件\n✅ Save as a new file.（另存为新文件。）—— 创建副本\n修改原文件用 save；创建新版本用 save as。' },
    ],
    pattern: 'Please save + 对象 + before + 动名词',
    patternExamples: [
      { en: 'Please save your work before leaving.', cn: '离开前请保存你的工作。', words: [] },
      { en: 'Please save a backup before editing.', cn: '编辑前请保存备份。', words: [] },
      { en: 'Please save the changes before sending.', cn: '发送前请保存更改。', words: [] },
    ],
    thinking: '忘记保存就关闭文件是办公室最常见的失误之一。\nsave…before… 是提醒保存的标准句式。\n中文说「关闭前请保存文件」，英语用 save the document before closing it。',
    pronunciation: 'save 读 /seɪv/，注意 v 音。\nclosing 读 /ˈkloʊzɪŋ/，重音在第一音节。\n节奏：PLEASE SAVE ｜ the DOC-u-ment ｜ be-FORE CLOS-ing it.',
    quiz: [
      { q: '把「关闭前请保存文件。」用英语说出来。', a: 'Please save the document before closing it.' },
      { q: '「另存为」用英语怎么说？', a: 'save as (/seɪv æz/)' },
    ],
  },
  {
    id: 2510,
    speaker: 'Engineer',
    en: 'Please make sure you are editing the latest version.',
    cn: '请确认你修改的是最新版本。',
    ipa: '/pliːz meɪk ʃʊr juː ɑːr ˈɛdɪtɪŋ ðə ˈleɪtɪst ˈvɜːrʒən/',
    tags: ['第2510句', '版本管理', '★★★★'],
    when: '多人协作编辑文档时，提醒同事确认使用的是最新版本。',
    words: [
      { w: 'latest', ipa: '/ˈleɪtɪst/', pos: '形容词（最高级）', cn: '最新的', memory: 'late(晚的)+st(最高级)→最晚的→最新的。', phonics: 'late 读 /leɪt/，st 读 /st/，重音在第一音节。', collocations: [['latest version', '最新版本'], ['latest update', '最新更新']], examples: [['Download the latest version.', '下载最新版本。'], ['Is this the latest?', '这是最新的吗？']] },
      { w: 'version', ipa: '/ˈvɜːrʒən/', pos: '名词', cn: '版本', memory: 'version 基础名词，指文件/软件的版本号。', phonics: 'ver 读 /vɜːr/，sion 读 /ʒən/，重音在第一音节。', collocations: [['version number', '版本号'], ['new version', '新版本']], examples: [['Check the version number.', '检查版本号。'], ['This is version 2.0.', '这是2.0版本。']] },
    ],
    phrases: [
      { p: 'make sure', ipa: '/meɪk ʃʊr/', cn: '确认；确保', why: 'make sure + 从句 是提醒确认某事的标准句式。' },
      { p: 'the latest version', ipa: '/ðə ˈleɪtɪst ˈvɜːrʒən/', cn: '最新版本', why: 'latest version 是版本管理中最常用的表达。' },
    ],
    grammar: [
      { q: 'make sure 后面接什么？', a: 'make sure 后接 that 从句（that 常省略）或 of + 名词。\n✅ Make sure you are editing the latest version.（确认你编辑的是最新版本。）\n✅ Make sure of the version number.（确认版本号。）\n日常口语中 that 几乎总是省略。' },
    ],
    pattern: 'Please make sure + 从句',
    patternExamples: [
      { en: 'Please make sure the data is accurate.', cn: '请确认数据准确。', words: [] },
      { en: 'Please make sure all fields are filled in.', cn: '请确认所有字段都已填写。', words: [] },
      { en: 'Please make sure you have the correct file.', cn: '请确认你拿到的是正确的文件。', words: [] },
    ],
    thinking: '多人协作时编辑错误版本是常见问题。\nmake sure + 从句 是提醒确认的标准句式。\n中文说「请确认你修改的是最新版本」，英语用 make sure you are editing the latest version。',
    pronunciation: 'latest 读 /ˈleɪtɪst/，重音在第一音节。\nversion 读 /ˈvɜːrʒən/，重音在第一音节。\n节奏：PLEASE MAKE SURE ｜ you are ED-it-ing ｜ the LAT-est VER-sion.',
    quiz: [
      { q: '把「请确认你修改的是最新版本。」用英语说出来。', a: 'Please make sure you are editing the latest version.' },
      { q: '「最新版本」用英语怎么说？', a: 'the latest version (/ðə ˈleɪtɪst ˈvɜːrʒən/)' },
    ],
  },
  {
    id: 2511,
    speaker: 'Engineer',
    en: 'Please connect your laptop to the meeting room display.',
    cn: '请把你的电脑连接到会议室显示屏。',
    ipa: '/pliːz kəˈnɛkt jɔːr ˈlæptɒp tuː ðə ˈmiːtɪŋ ruːm dɪˈspleɪ/',
    tags: ['第2511句', '会议室设备', '★★★★'],
    when: '会议开始前，请演讲者将笔记本连接到会议室大屏幕。',
    words: [
      { w: 'connect', ipa: '/kəˈnɛkt/', pos: '动词', cn: '连接', memory: 'con(共同)+nect(绑定)→绑定到一起→连接。', phonics: 'con 读 /kə/，nect 读 /nɛkt/，重音在第二音节。', collocations: [['connect to', '连接到'], ['connect the cable', '连接线缆']], examples: [['Connect your device to Wi-Fi.', '把设备连接到Wi-Fi。'], ['The cable is not connected.', '线缆没有连接。']] },
      { w: 'display', ipa: '/dɪˈspleɪ/', pos: '名词', cn: '显示屏；显示器', memory: 'dis(展示)+play(播放)→展示画面→显示屏。', phonics: 'dis 读 /dɪ/，play 读 /spleɪ/，重音在第二音节。', collocations: [['meeting room display', '会议室显示屏'], ['external display', '外接显示器']], examples: [['The display is not working.', '显示屏不工作。'], ['Switch to the external display.', '切换到外接显示器。']] },
    ],
    phrases: [
      { p: 'connect…to…', ipa: '/kəˈnɛkt…tuː…/', cn: '把…连接到…', why: 'connect A to B 是设备连接的标准句式。' },
    ],
    grammar: [
      { q: 'connect to 和 connect with 有什么区别？', a: 'connect to 指「物理/网络连接」，A 连到 B。\nconnect with 指「人际联系/沟通」。\n✅ Connect your laptop to the display.（把电脑连到显示屏。）—— 设备连接\n✅ I connected with the vendor.（我和供应商取得了联系。）—— 人际沟通\n设备连接场景用 to。' },
    ],
    pattern: 'Please connect + 设备 + to + 目标设备',
    patternExamples: [
      { en: 'Please connect the projector to your laptop.', cn: '请把投影仪连接到你的电脑上。', words: [] },
      { en: 'Please connect the monitor to the docking station.', cn: '请把显示器连接到扩展坞。', words: [] },
      { en: 'Please connect your phone to the speaker.', cn: '请把手机连接到音箱。', words: [] },
    ],
    thinking: '会议室投屏是开会前的必要准备。\nconnect…to… 是设备连接的标准句式。\n中文说「把电脑连接到显示屏」，英语用 connect your laptop to the display。',
    pronunciation: 'connect 重音在第二音节：con-NECT。\ndisplay 重音在第二音节：dis-PLAY。\n节奏：PLEASE con-NECT ｜ your LAP-top ｜ to the MEET-ing room dis-PLAY.',
    quiz: [
      { q: '把「请把你的电脑连接到会议室显示屏。」用英语说出来。', a: 'Please connect your laptop to the meeting room display.' },
      { q: '「连接…到…」用英语怎么说？', a: 'connect…to… (/kəˈnɛkt…tuː…/)' },
    ],
  },
  {
    id: 2512,
    speaker: 'Engineer',
    en: 'Please share your screen.',
    cn: '请共享你的屏幕。',
    ipa: '/pliːz ʃɛr jɔːr skriːn/',
    tags: ['第2512句', '屏幕共享', '★★★★'],
    when: '线上或混合会议中，请对方共享屏幕展示内容。',
    words: [
      { w: 'share', ipa: '/ʃɛr/', pos: '动词', cn: '共享；分享', memory: 'share 基础动词，在线会议语境中指共享屏幕/文件。', phonics: 'share 读 /ʃɛr/，单音节。', collocations: [['share screen', '共享屏幕'], ['share a file', '共享文件'], ['share the link', '分享链接']], examples: [['Can you share your screen?', '你能共享屏幕吗？'], ['I\'ll share the document.', '我来共享文档。']] },
      { w: 'screen', ipa: '/skriːn/', pos: '名词', cn: '屏幕', memory: 'screen 基础名词，指电脑/手机/电视的显示面。', phonics: 'screen 读 /skriːn/，单音节。', collocations: [['screen sharing', '屏幕共享'], ['touch screen', '触摸屏']], examples: [['My screen is frozen.', '我的屏幕卡住了。'], ['Look at the screen.', '看屏幕。']] },
    ],
    phrases: [
      { p: 'share your screen', ipa: '/ʃɛr jɔːr skriːn/', cn: '共享你的屏幕', why: 'share + your + screen 是线上会议中最常用的指令。' },
    ],
    grammar: [
      { q: 'screen share 和 share screen 有什么区别？', a: 'screen share 是名词短语，指「屏幕共享」这个功能/行为。\nshare screen 是动词短语，指「共享屏幕」这个动作。\n✅ Please share your screen.（请共享你的屏幕。）—— 动词\n✅ Turn on screen sharing.（打开屏幕共享。）—— 名词\n指令场景用动词 share your screen。' },
    ],
    pattern: 'Please share + 对象',
    patternExamples: [
      { en: 'Please share the meeting link.', cn: '请分享会议链接。', words: [] },
      { en: 'Please share the document with the team.', cn: '请把文档分享给团队。', words: [] },
      { en: 'Please share your findings.', cn: '请分享你的发现。', words: [] },
    ],
    thinking: '屏幕共享是现代会议（线上和线下）的基本操作。\nshare your screen 是最直接的屏幕共享指令。\n中文说「请共享你的屏幕」，英语直接对应。',
    pronunciation: 'share 读 /ʃɛr/，注意 sh 音。\nscreen 读 /skriːn/，长元音 /iː/。\n节奏：PLEASE SHARE ｜ your SCREEN.',
    quiz: [
      { q: '把「请共享你的屏幕。」用英语说出来。', a: 'Please share your screen.' },
      { q: '「屏幕共享」用英语怎么说？', a: 'screen sharing (/skriːn ˈʃɛrɪŋ/)' },
    ],
  },
  {
    id: 2513,
    speaker: 'Engineer',
    en: 'Please stop sharing your screen.',
    cn: '请停止共享屏幕。',
    ipa: '/pliːz stɒp ˈʃɛrɪŋ jɔːr skriːn/',
    tags: ['第2513句', '屏幕共享', '★★★★'],
    when: '演示结束后，提醒对方停止屏幕共享。',
    words: [
      { w: 'stop', ipa: '/stɒp/', pos: '动词', cn: '停止', memory: 'stop 基础动词，表示终止某个动作。', phonics: 'stop 读 /stɒp/，单音节。', collocations: [['stop sharing', '停止共享'], ['stop recording', '停止录制']], examples: [['Please stop the timer.', '请停止计时。'], ['Stop the recording.', '停止录制。']] },
    ],
    phrases: [
      { p: 'stop sharing', ipa: '/stɒp ˈʃɛrɪŋ/', cn: '停止共享', why: 'stop + 动名词 表示停止正在进行的动作。' },
    ],
    grammar: [
      { q: 'stop + 动名词和 stop + to + 动词有什么区别？', a: 'stop + 动名词 表示「停止正在做的事」。\nstop + to + 动词 表示「停下来去做另一件事」。\n✅ Stop sharing your screen.（停止共享屏幕。）—— 终止共享\n✅ Stop to check the alarm.（停下来检查告警。）—— 停下手中的事去检查\n注意：意思完全不同！' },
    ],
    pattern: 'Please stop + 动名词 + 对象',
    patternExamples: [
      { en: 'Please stop the recording.', cn: '请停止录制。', words: [] },
      { en: 'Please stop talking during the presentation.', cn: '演示期间请不要说话。', words: [] },
      { en: 'Please stop the backup process.', cn: '请停止备份进程。', words: [] },
    ],
    thinking: '演示结束后需要及时停止屏幕共享，保护隐私。\nstop + 动名词 表示停止正在进行的动作。\n中文说「停止共享屏幕」，英语用 stop sharing your screen。',
    pronunciation: 'stop 读 /stɒp/，短元音。\nsharing 读 /ˈʃɛrɪŋ/，重音在第一音节。\n节奏：PLEASE STOP ｜ SHAR-ing ｜ your SCREEN.',
    quiz: [
      { q: '把「请停止共享屏幕。」用英语说出来。', a: 'Please stop sharing your screen.' },
      { q: 'stop + 动名词 表示什么？', a: '停止正在做的事情（不是停下来去做另一件事）' },
    ],
  },
  {
    id: 2514,
    speaker: 'Engineer',
    en: 'Please switch to presentation mode.',
    cn: '请切换到演示模式。',
    ipa: '/pliːz swɪtʃ tuː ˌprɛzənˈteɪʃən moʊd/',
    tags: ['第2514句', '演示操作', '★★★★'],
    when: '提醒同事将电脑切换到全屏演示模式以便投屏。',
    words: [
      { w: 'switch', ipa: '/swɪtʃ/', pos: '动词', cn: '切换；转换', memory: 'switch 基础动词，表示从一个状态切换到另一个。', phonics: 'switch 读 /swɪtʃ/，单音节。', collocations: [['switch to', '切换到'], ['switch mode', '切换模式'], ['switch display', '切换显示']], examples: [['Switch to the backup system.', '切换到备用系统。'], ['Please switch inputs.', '请切换输入源。']] },
      { w: 'presentation mode', ipa: '/ˌprɛzənˈteɪʃən moʊd/', cn: '演示模式', memory: 'presentation(演示)+mode(模式)→全屏展示的模式。', phonics: 'pre 读 /prɛ/，sen 读 /zən/，ta 读 /teɪ/，tion 读 /ʃən/，重音在第三音节。', collocations: [['enter presentation mode', '进入演示模式'], ['exit presentation mode', '退出演示模式']], examples: [['Press F5 for presentation mode.', '按F5进入演示模式。'], ['Exit presentation mode.', '退出演示模式。']] },
    ],
    phrases: [
      { p: 'switch to', ipa: '/swɪtʃ tuː/', cn: '切换到', why: 'switch to + 目标状态 是模式切换的标准句式。' },
    ],
    grammar: [
      { q: 'switch to 和 change to 有什么区别？', a: '两者意思接近，switch to 更强调「快速切换」。\nchange to 更强调「改变/更换」。\n✅ Switch to presentation mode.（切换到演示模式。）—— 快速切换\n✅ Change to a different layout.（换成不同的布局。）—— 更换布局\n模式切换场景用 switch to 更自然。' },
    ],
    pattern: 'Please switch to + 目标模式/状态',
    patternExamples: [
      { en: 'Please switch to dark mode.', cn: '请切换到暗色模式。', words: [] },
      { en: 'Please switch to the backup generator.', cn: '请切换到备用发电机。', words: [] },
      { en: 'Please switch to the next camera view.', cn: '请切换到下一个摄像头画面。', words: [] },
    ],
    thinking: '演示前需要切换到全屏模式以便投屏。\nswitch to + 目标 是模式切换的标准句式。\n中文说「切换到演示模式」，英语用 switch to presentation mode。',
    pronunciation: 'presentation 重音在第三音节：pre-sen-TA-tion。\nmode 读 /moʊd/，长元音。\n节奏：PLEASE SWITCH ｜ to pre-sen-TA-tion ｜ MODE.',
    quiz: [
      { q: '把「请切换到演示模式。」用英语说出来。', a: 'Please switch to presentation mode.' },
      { q: '「切换到」用英语怎么说？', a: 'switch to (/swɪtʃ tuː/)' },
    ],
  },
  {
    id: 2515,
    speaker: 'Engineer',
    en: 'Please display the presentation on the big screen.',
    cn: '请把演示文稿投屏到大屏幕。',
    ipa: '/pliːz dɪˈspleɪ ðə ˌprɛzənˈteɪʃən ɒn ðə bɪɡ skriːn/',
    tags: ['第2515句', '投屏', '★★★★'],
    when: '请同事将PPT演示内容投到会议室大屏幕上。',
    words: [
      { w: 'display', ipa: '/dɪˈspleɪ/', pos: '动词', cn: '显示；展示', memory: 'dis(展示)+play(播放)→展示出来→显示。', phonics: 'dis 读 /dɪ/，play 读 /spleɪ/，重音在第二音节。', collocations: [['display on screen', '在屏幕上显示'], ['display the results', '显示结果']], examples: [['Display the chart on the monitor.', '在显示器上显示图表。'], ['The data is displayed here.', '数据显示在这里。']] },
    ],
    phrases: [
      { p: 'on the big screen', ipa: '/ɒn ðə bɪɡ skriːn/', cn: '在大屏幕上', why: 'on + the + big screen 指定展示的物理位置。' },
    ],
    grammar: [
      { q: 'display 和 show 有什么区别？', a: 'display 更正式，强调「展示/显示」，常用于设备/系统语境。\nshow 更通用，日常用语。\n✅ Display the presentation on the big screen.（在大屏幕上展示演示文稿。）—— 正式\n✅ Show me the report.（给我看报告。）—— 日常\n会议室/设备场景用 display 更专业。' },
    ],
    pattern: 'Please display + 内容 + on + 位置',
    patternExamples: [
      { en: 'Please display the alarm list on the monitor.', cn: '请在监视器上显示告警列表。', words: [] },
      { en: 'Please display the CCTV feed on the wall.', cn: '请把监控画面投到墙上。', words: [] },
      { en: 'Please display the dashboard on the projector.', cn: '请把仪表盘投到投影仪上。', words: [] },
    ],
    thinking: '会议室演示需要把内容投到大屏幕上，方便所有人观看。\ndisplay…on… 是投屏展示的标准句式。\n中文说「投屏到大屏幕」，英语用 display…on the big screen。',
    pronunciation: 'display 重音在第二音节：dis-PLAY。\npresentation 重音在第三音节：pre-sen-TA-tion。\n节奏：PLEASE dis-PLAY ｜ the pre-sen-TA-tion ｜ on the BIG SCREEN.',
    quiz: [
      { q: '把「请把演示文稿投屏到大屏幕。」用英语说出来。', a: 'Please display the presentation on the big screen.' },
      { q: '「在大屏幕上」用英语怎么说？', a: 'on the big screen (/ɒn ðə bɪɡ skriːn/)' },
    ],
  },
  {
    id: 2516,
    speaker: 'Engineer',
    en: 'Please go to the next slide.',
    cn: '请翻到下一页幻灯片。',
    ipa: '/pliːz ɡoʊ tuː ðə nɛkst slaɪd/',
    tags: ['第2516句', '幻灯片操作', '★★★★'],
    when: '演示过程中请同事翻到下一页。',
    words: [
      { w: 'slide', ipa: '/slaɪd/', pos: '名词', cn: '幻灯片；页面', memory: 'slide 原义为滑动，在PPT语境中指一页幻灯片。', phonics: 'slide 读 /slaɪd/，单音节，长元音 /aɪ/。', collocations: [['next slide', '下一页'], ['previous slide', '上一页'], ['title slide', '标题页']], examples: [['Go to the next slide.', '翻到下一页。'], ['This slide has a chart.', '这页有一个图表。']] },
    ],
    phrases: [
      { p: 'go to the next slide', ipa: '/ɡoʊ tuː ðə nɛkst slaɪd/', cn: '翻到下一页幻灯片', why: 'go to + the next + slide 是演示中翻页的标准指令。' },
    ],
    grammar: [
      { q: 'next 和 following 有什么区别？', a: 'next 指「紧接着的下一个」，最常用。\nfollowing 指「接下来的」，更正式。\n✅ Go to the next slide.（翻到下一页。）—— 常用\n✅ Please see the following page.（请看下一页。）—— 更正式\n演示翻页用 next 即可。' },
    ],
    pattern: 'Please go to + the + 位置/页面',
    patternExamples: [
      { en: 'Please go to page ten.', cn: '请翻到第十页。', words: [] },
      { en: 'Please go to the last slide.', cn: '请翻到最后一页。', words: [] },
      { en: 'Please go to the first section.', cn: '请跳到第一节。', words: [] },
    ],
    thinking: '演示过程中翻页是最基本的操作指令。\ngo to the next slide 是标准说法。\n中文说「翻到下一页幻灯片」，英语用 go to the next slide。',
    pronunciation: 'slide 读 /slaɪd/，注意 sl 连读。\nnext 读 /nɛkst/，注意 st 尾音。\n节奏：PLEASE GO ｜ to the NEXT ｜ SLIDE.',
    quiz: [
      { q: '把「请翻到下一页幻灯片。」用英语说出来。', a: 'Please go to the next slide.' },
      { q: '「幻灯片」用英语怎么说？', a: 'slide (/slaɪd/)' },
    ],
  },
  {
    id: 2517,
    speaker: 'Engineer',
    en: 'Please go back to the previous slide.',
    cn: '请返回上一页幻灯片。',
    ipa: '/pliːz ɡoʊ bæk tuː ðə ˈpriːviəs slaɪd/',
    tags: ['第2517句', '幻灯片操作', '★★★★'],
    when: '需要回顾上一页内容时，请同事翻回去。',
    words: [
      { w: 'previous', ipa: '/ˈpriːviəs/', pos: '形容词', cn: '上一个的；之前的', memory: 'pre(之前)+vious(形容词后缀)→在之前的→上一个的。', phonics: 'pre 读 /priː/，vi 读 /vi/，ous 读 /əs/，重音在第一音节。', collocations: [['previous slide', '上一页'], ['previous meeting', '上次会议'], ['previous version', '上一版本']], examples: [['Go back to the previous page.', '返回上一页。'], ['The previous alarm was critical.', '上一个告警是严重级别。']] },
    ],
    phrases: [
      { p: 'go back to', ipa: '/ɡoʊ bæk tuː/', cn: '返回到', why: 'go back to + 位置 表示返回之前的位置/页面。' },
    ],
    grammar: [
      { q: 'previous 和 last 在翻页语境中有什么区别？', a: 'previous 指「紧接的上一个」，相对当前位置。\nlast 指「最后一个」，指序列末尾。\n✅ Go back to the previous slide.（返回上一页。）—— 上一步\n✅ Go to the last slide.（翻到最后一页。）—— 跳到末尾\n注意：last 不表示「上一个」！' },
    ],
    pattern: 'Please go back to + the + 位置',
    patternExamples: [
      { en: 'Please go back to the overview page.', cn: '请返回概览页面。', words: [] },
      { en: 'Please go back to the previous topic.', cn: '请返回上一个主题。', words: [] },
      { en: 'Please go back to the beginning.', cn: '请返回开头。', words: [] },
    ],
    thinking: '演示中有时需要回顾之前的内容。\ngo back to the previous slide 是返回上一页的标准说法。\n中文说「返回上一页幻灯片」，英语用 go back to the previous slide。',
    pronunciation: 'previous 重音在第一音节：PRE-vi-ous。\nback 读 /bæk/，短元音。\n节奏：PLEASE GO BACK ｜ to the PRE-vi-ous ｜ SLIDE.',
    quiz: [
      { q: '把「请返回上一页幻灯片。」用英语说出来。', a: 'Please go back to the previous slide.' },
      { q: '「上一个的」用英语怎么说？', a: 'previous (/ˈpriːviəs/)' },
    ],
  },
  {
    id: 2518,
    speaker: 'Engineer',
    en: 'Please zoom in on this diagram.',
    cn: '请把这张图放大。',
    ipa: '/pliːz zuːm ɪn ɒn ðɪs ˈdaɪəɡræm/',
    tags: ['第2518句', '缩放操作', '★★★★'],
    when: '演示中图表细节看不清，请同事放大显示。',
    words: [
      { w: 'zoom in', ipa: '/zuːm ɪn/', pos: '动词短语', cn: '放大', memory: 'zoom(急速移动)+in(向内)→向内拉近→放大。', phonics: 'zoom 读 /zuːm/，in 读 /ɪn/。', collocations: [['zoom in on', '放大查看'], ['zoom in further', '进一步放大']], examples: [['Zoom in on this area.', '放大这个区域。'], ['Can you zoom in?', '你能放大吗？']] },
      { w: 'diagram', ipa: '/ˈdaɪəɡræm/', pos: '名词', cn: '图表；示意图', memory: 'dia(穿过)+gram(写/画)→画出来的图形→图表。', phonics: 'di 读 /daɪ/，a 读 /ə/，gram 读 /ɡræm/，重音在第一音节。', collocations: [['flow diagram', '流程图'], ['system diagram', '系统图'], ['wiring diagram', '接线图']], examples: [['Look at this diagram.', '看这张图。'], ['The diagram shows the layout.', '图表展示了布局。']] },
    ],
    phrases: [
      { p: 'zoom in on', ipa: '/zuːm ɪn ɒn/', cn: '放大查看…', why: 'zoom in on + 对象 表示放大查看特定内容。' },
    ],
    grammar: [
      { q: 'zoom in 和 enlarge 有什么区别？', a: 'zoom in 是「放大查看」，临时放大以便观看，不改变原图。\nenlarge 是「放大/扩大」，通常指永久性地增大。\n✅ Zoom in on this diagram.（放大这张图。）—— 临时放大查看\n✅ Enlarge the photo.（放大这张照片。）—— 增大图片尺寸\n屏幕操作场景用 zoom in。' },
    ],
    pattern: 'Please zoom in on + 对象',
    patternExamples: [
      { en: 'Please zoom in on this section.', cn: '请放大这个部分。', words: [] },
      { en: 'Please zoom in on the map.', cn: '请放大地图。', words: [] },
      { en: 'Please zoom in on the text.', cn: '请放大文字。', words: [] },
    ],
    thinking: '演示中图表细节需要放大才能看清。\nzoom in on 是放大查看的标准句式。\n中文说「把这张图放大」，英语用 zoom in on this diagram。',
    pronunciation: 'zoom 读 /zuːm/，长元音 /uː/。\ndiagram 重音在第一音节：DI-a-gram。\n节奏：PLEASE ZOOM IN ｜ on this ｜ DI-a-gram.',
    quiz: [
      { q: '把「请把这张图放大。」用英语说出来。', a: 'Please zoom in on this diagram.' },
      { q: '「放大」用英语怎么说？', a: 'zoom in (/zuːm ɪn/)' },
    ],
  },
  {
    id: 2519,
    speaker: 'Engineer',
    en: 'Please zoom out a little.',
    cn: '请稍微缩小一点。',
    ipa: '/pliːz zuːm aʊt ə ˈlɪtl/',
    tags: ['第2519句', '缩放操作', '★★★★'],
    when: '画面放得太大，需要缩小一点看全貌。',
    words: [
      { w: 'zoom out', ipa: '/zuːm aʊt/', pos: '动词短语', cn: '缩小', memory: 'zoom(急速移动)+out(向外)→向外拉远→缩小。', phonics: 'zoom 读 /zuːm/，out 读 /aʊt/。', collocations: [['zoom out a little', '稍微缩小'], ['zoom out completely', '完全缩小']], examples: [['Zoom out so we can see everything.', '缩小以便看到全部内容。'], ['Please zoom out.', '请缩小。']] },
    ],
    phrases: [
      { p: 'a little', ipa: '/ə ˈlɪtl/', cn: '一点；稍微', why: 'a little 修饰动词，表示程度轻微，语气更柔和。' },
    ],
    grammar: [
      { q: 'zoom out 和 shrink 有什么区别？', a: 'zoom out 是「缩小查看」，临时缩小以便看全貌。\nshrink 是「收缩/缩小」，指物体本身变小。\n✅ Zoom out a little.（稍微缩小一点。）—— 屏幕操作\n✅ The image has shrunk.（图片缩小了。）—— 尺寸变化\n屏幕操作场景用 zoom out。' },
    ],
    pattern: 'Please zoom out + 程度',
    patternExamples: [
      { en: 'Please zoom out a bit more.', cn: '请再缩小一点。', words: [] },
      { en: 'Please zoom out completely.', cn: '请完全缩小。', words: [] },
      { en: 'Please zoom out to see the full page.', cn: '请缩小以查看整页。', words: [] },
    ],
    thinking: '放大后需要缩小才能看到全貌。\nzoom out + a little 是轻微缩小的标准说法。\n中文说「稍微缩小一点」，英语用 zoom out a little。',
    pronunciation: 'zoom out 连读：zoom-out /zuːm aʊt/。\na little 读 /ə ˈlɪtl/。\n节奏：PLEASE ZOOM OUT ｜ a LIT-tle.',
    quiz: [
      { q: '把「请稍微缩小一点。」用英语说出来。', a: 'Please zoom out a little.' },
      { q: '「缩小」用英语怎么说？', a: 'zoom out (/zuːm aʊt/)' },
    ],
  },
  {
    id: 2520,
    speaker: 'Engineer',
    en: 'Could you scroll down a little, please?',
    cn: '请稍微向下滚动一点。',
    ipa: '/kʊd juː skroʊl daʊn ə ˈlɪtl pliːz/',
    tags: ['第2520句', '页面滚动', '★★★★'],
    when: '演示中需要向下滚动查看更多内容，礼貌请求对方操作。',
    words: [
      { w: 'scroll', ipa: '/skroʊl/', pos: '动词', cn: '滚动', memory: 'scroll 原义为卷轴，在计算机语境中指上下/左右滚动页面。', phonics: 'scroll 读 /skroʊl/，单音节。', collocations: [['scroll down', '向下滚动'], ['scroll up', '向上滚动'], ['scroll to the bottom', '滚动到底部']], examples: [['Scroll down to see more.', '向下滚动查看更多。'], ['Please scroll up.', '请向上滚动。']] },
    ],
    phrases: [
      { p: 'scroll down a little', ipa: '/skroʊl daʊn ə ˈlɪtl/', cn: '向下滚动一点', why: 'scroll down + a little 指定滚动方向和幅度。' },
      { p: 'Could you…please', ipa: '/kʊd juː…pliːz/', cn: '你能…吗', why: 'Could you…please 双重礼貌标记，比单独 Could you 更客气。' },
    ],
    grammar: [
      { q: 'Could you…please 比 Could you 更礼貌吗？', a: '是的，在句尾加 please 形成 Could you…please 双重礼貌标记。\n✅ Could you scroll down?（你能向下滚动吗？）—— 礼貌\n✅ Could you scroll down, please?（请你向下滚动一下好吗？）—— 更礼貌\n正式会议或请求不熟悉的人时推荐加 please。' },
    ],
    pattern: 'Could you scroll + 方向 + 程度, please?',
    patternExamples: [
      { en: 'Could you scroll up a bit, please?', cn: '请稍微向上滚动一点好吗？', words: [] },
      { en: 'Could you scroll to the end, please?', cn: '请滚动到末尾好吗？', words: [] },
      { en: 'Could you scroll right a little, please?', cn: '请稍微向右滚动一点好吗？', words: [] },
    ],
    thinking: '演示中需要滚动页面查看内容。\nCould you…please 是最礼貌的请求句式。\n中文说「请稍微向下滚动一点」，英语用 Could you scroll down a little, please。',
    pronunciation: 'scroll 读 /skroʊl/，长元音 /oʊ/。\ndown 读 /daʊn/，双元音。\n节奏：COULD you ｜ SCROLL DOWN ｜ a LIT-tle ｜ PLEASE?',
    quiz: [
      { q: '把「请稍微向下滚动一点。」用英语说出来。', a: 'Could you scroll down a little, please?' },
      { q: '「向下滚动」用英语怎么说？', a: 'scroll down (/skroʊl daʊn/)' },
    ],
  },
];

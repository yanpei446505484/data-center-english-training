// EXPORTS: MOCK_SENTENCES_DAILYOFFICE48B

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_DAILYOFFICE48B: ISentence[] = [
  {
    id: 2581,
    speaker: 'Engineer',
    en: 'Could you help me with this task?',
    cn: '你能帮我处理一下这项工作吗？',
    ipa: '/kʊd juː hɛlp miː wɪð ðɪs tɑːsk/',
    tags: ['第2581句', '办公室沟通', '★★★★'],
    when: '遇到复杂的技术问题或工作量超出预期时，礼貌地请求同事协助。',
    words: [
      { w: 'help', ipa: '/hɛlp/', pos: '动词', cn: '帮助；协助', memory: 'help 是最常用的帮助请求词，搭配 with + 具体事项。', phonics: 'h 读 /h/，elp 读 /ɛlp/，单音节。', collocations: [['help me with', '帮我处理'], ['help out', '帮忙解决'], ['need help', '需要帮助']], examples: [['Can you help me with this report?', '你能帮我处理这份报告吗？'], ['I need help with the server config.', '服务器配置我需要帮助。']] },
      { w: 'task', ipa: '/tɑːsk/', pos: '名词', cn: '任务；工作', memory: 'task 指一项具体的工作任务，比 job 更小更具体。', phonics: 't 读 /t/，ask 读 /ɑːsk/，单音节。', collocations: [['complete a task', '完成任务'], ['assign a task', '分配任务'], ['daily task', '日常任务']], examples: [['What is your task today?', '你今天的任务是什么？'], ['The task is almost done.', '任务快完成了。']] },
    ],
    phrases: [
      { p: 'Could you help me with', ipa: '/kʊd juː hɛlp miː wɪð/', cn: '你能帮我处理…吗', why: 'Could you help me with 是礼貌请求帮助的标准句式，比 Can you 更委婉。' },
      { p: 'this task', ipa: '/ðɪs tɑːsk/', cn: '这项工作', why: 'this 指代当前正在处理的具体工作事项。' },
    ],
    grammar: [
      { q: 'help me with 和 help me do 有什么区别？', a: 'help me with + 名词/事项，表示「帮我处理某事」。\nhelp me (to) do + 动词原形，表示「帮我做某动作」。\n✅ Could you help me with this task?（帮我处理这项工作）\n✅ Could you help me fix the server?（帮我修服务器）\n两者都正确，with 后接名词，do 后接动词。' },
    ],
    pattern: 'Could you help me with + 事项?',
    patternExamples: [
      { en: 'Could you help me with this alarm?', cn: '你能帮我处理这个告警吗？', words: [] },
      { en: 'Could you help me with the inventory?', cn: '你能帮我处理库存盘点吗？', words: [] },
      { en: 'Could you help me with the handover checklist?', cn: '你能帮我处理交接清单吗？', words: [] },
    ],
    thinking: '在数据中心，工程师经常需要互相协助处理复杂任务。\nCould you help me with this task 是礼貌请求帮助的标准句式。\n中文说「你能帮我处理一下这项工作吗」，英语用 Could you help me with this task。',
    pronunciation: "help 读 /hɛlp/，单音节。\ntask 读 /tɑːsk/，单音节。\n节奏：COULD you ｜ HELP me ｜ with THIS TASK?",
    quiz: [
      { q: '把「你能帮我处理一下这项工作吗？」用英语说出来。', a: 'Could you help me with this task?' },
      { q: '「帮我处理」用英语怎么说？', a: 'help me with (/hɛlp miː wɪð/)' },
    ],
  },
  {
    id: 2582,
    speaker: 'Engineer',
    en: "I'll take care of it.",
    cn: '这件事我来处理。',
    ipa: '/aɪl teɪk kɛər əv ɪt/',
    tags: ['第2582句', '办公室沟通', '★★★★'],
    when: '主动承担某项工作任务，向同事或主管表明自己会负责处理。',
    words: [
      { w: 'take care of', ipa: '/teɪk kɛər əv/', pos: '动词短语', cn: '处理；负责', memory: 'take(承担)+care(责任)+of(对象)→承担对某事的责任→处理。', phonics: 'take 读 /teɪk/，care 读 /kɛər/，of 读 /əv/。', collocations: [['take care of it', '处理这件事'], ['take care of the issue', '处理问题'], ['take care of yourself', '保重']], examples: [["Don't worry, I'll take care of it.", '别担心，我来处理。'], ['Who will take care of this?', '谁来处理这个？']] },
    ],
    phrases: [
      { p: "I'll take care of it", ipa: '/aɪl teɪk kɛər əv ɪt/', cn: '我来处理', why: "I will take care of it 表示主动承担责任，it 指代需要处理的事项。" },
    ],
    grammar: [
      { q: "take care of 和 deal with 有什么区别？", a: "take care of 强调「我来负责处理」，带有主动承担的语气。\ndeal with 更中性，表示「处理/应对」。\n✅ I'll take care of it.（我来处理。）—— 主动承担\n✅ I'll deal with it.（我来处理。）—— 中性描述\n在主动揽活时，take care of 更自然。" },
    ],
    pattern: "I'll take care of + 对象.",
    patternExamples: [
      { en: "I'll take care of the alarm.", cn: '这个告警我来处理。', words: [] },
      { en: "I'll take care of the paperwork.", cn: '文件工作我来处理。', words: [] },
      { en: "I'll take care of the vendor contact.", cn: '联系供应商的事我来处理。', words: [] },
    ],
    thinking: "在数据中心，主动承担工作是良好团队协作的体现。\nI'll take care of it 简洁有力地表达「我来负责」。\n中文说「这件事我来处理」，英语用 I'll take care of it。",
    pronunciation: "take care of 连读：/teɪk kɛər əv/。\nit 读轻声 /ɪt/。\n节奏：I'll ｜ TAKE CARE ｜ of IT.",
    quiz: [
      { q: '把「这件事我来处理。」用英语说出来。', a: "I'll take care of it." },
      { q: '「处理/负责」用英语怎么说？', a: 'take care of (/teɪk kɛər əv/)' },
    ],
  },
  {
    id: 2583,
    speaker: 'Engineer',
    en: "I'll finish it before the end of the day.",
    cn: '我今天下班前完成。',
    ipa: '/aɪl ˈfɪnɪʃ ɪt bɪˈfɔːr ði ɛnd əv ðə deɪ/',
    tags: ['第2583句', '办公室沟通', '★★★★'],
    when: '向主管或同事承诺在某个工作日内完成任务。',
    words: [
      { w: 'finish', ipa: '/ˈfɪnɪʃ/', pos: '动词', cn: '完成；结束', memory: 'finish 强调完成某项具体工作，与 complete 同义但更口语化。', phonics: 'fin 读 /fɪn/，ish 读 /ɪʃ/，重音在第一音节。', collocations: [['finish work', '完成工作'], ['finish the report', '完成报告'], ['finish on time', '按时完成']], examples: [['Have you finished the inspection?', '你完成巡检了吗？'], ['I need to finish before 5 PM.', '我需要在下午5点前完成。']] },
      { w: 'before', ipa: '/bɪˈfɔːr/', pos: '介词', cn: '在…之前', memory: 'be(在)+fore(前面)→在前面→在…之前。', phonics: 'be 读 /bɪ/，fore 读 /fɔːr/，重音在第二音节。', collocations: [['before the deadline', '截止日期前'], ['before lunch', '午饭前'], ['before the shift ends', '换班前']], examples: [['Please submit before Friday.', '请在周五前提交。'], ['Finish before the meeting.', '开会前完成。']] },
    ],
    phrases: [
      { p: 'before the end of the day', ipa: '/bɪˈfɔːr ði ɛnd əv ðə deɪ/', cn: '今天下班前', why: 'end of the day 指工作日结束（通常17:00-18:00），是办公室常用的时间承诺表达。' },
    ],
    grammar: [
      { q: 'end of the day 和 close of business 有什么区别？', a: 'end of the day 是口语化表达，指当天下班时间。\nclose of business (COB) 更正式，常用于邮件中。\n✅ I will finish it before the end of the day.（今天下班前完成）—— 口语\n✅ Please submit by COB today.（请今天下班前提交）—— 正式邮件\n日常对话用 end of the day 即可。' },
    ],
    pattern: "I'll finish + 对象 + before + 时间点.",
    patternExamples: [
      { en: "I'll finish the report before lunch.", cn: '我午饭前完成报告。', words: [] },
      { en: "I'll finish the inspection before the shift ends.", cn: '我换班前完成巡检。', words: [] },
      { en: "I'll finish the data entry before 3 PM.", cn: '我下午3点前完成数据录入。', words: [] },
    ],
    thinking: "在数据中心，按时完成工作是交接班的关键。\nI'll finish it before the end of the day 明确承诺完成时间。\n中文说「我今天下班前完成」，英语用 I'll finish it before the end of the day。",
    pronunciation: "finish 重音在第一音节：FIN-ish。\nbefore 重音在第二音节：be-FORE。\n节奏：I'll FIN-ish it ｜ be-FORE ｜ the END of the DAY.",
    quiz: [
      { q: '把「我今天下班前完成。」用英语说出来。', a: "I'll finish it before the end of the day." },
      { q: '「今天下班前」用英语怎么说？', a: 'before the end of the day (/bɪˈfɔːr ði ɛnd əv ðə deɪ/)' },
    ],
  },
  {
    id: 2584,
    speaker: 'Engineer',
    en: "I'm working on it now.",
    cn: '我正在处理。',
    ipa: '/aɪm ˈwɜːrkɪŋ ɒn ɪt naʊ/',
    tags: ['第2584句', '办公室沟通', '★★★★'],
    when: '同事或主管询问某项工作进展时，告知正在处理中。',
    words: [
      { w: 'working on', ipa: '/ˈwɜːrkɪŋ ɒn/', pos: '动词短语（进行时）', cn: '正在处理；正在做', memory: 'work(工作)+on(在某事上)→正在某事上工作→正在处理。', phonics: 'work 读 /wɜːrk/，ing 读 /ɪŋ/，on 读 /ɒn/。', collocations: [['working on it', '正在处理'], ['working on the report', '正在写报告'], ['working on a fix', '正在修复']], examples: [["I'm working on the alarm issue.", '我正在处理告警问题。'], ["She's working on the schedule.", '她正在排班。']] },
    ],
    phrases: [
      { p: "I'm working on it", ipa: '/aɪm ˈwɜːrkɪŋ ɒn ɪt/', cn: '我正在处理', why: '现在进行时 I am working on it 表示当前正在进行的动作，it 指代被询问的事项。' },
      { p: 'now', ipa: '/naʊ/', cn: '现在', why: 'now 强调当前时刻，加强「正在进行」的语气。' },
    ],
    grammar: [
      { q: "I'm working on it 和 I'm doing it 有什么区别？", a: "work on 强调「处理/从事」一项持续性的工作。\ndo 更通用，指「做」某个动作。\n✅ I'm working on it now.（我正在处理。）—— 强调持续性工作\n✅ I'm doing it now.（我正在做。）—— 更口语化\n在工作场景中，work on 更专业。" },
    ],
    pattern: "I'm working on + 对象 + now.",
    patternExamples: [
      { en: "I'm working on the BMS alarm now.", cn: '我正在处理BMS告警。', words: [] },
      { en: "I'm working on the handover report now.", cn: '我正在写交接报告。', words: [] },
      { en: "I'm working on the spare parts order now.", cn: '我正在处理备件采购。', words: [] },
    ],
    thinking: "在数据中心，及时汇报工作进展是团队协作的基础。\nI'm working on it now 简洁地告知对方当前状态。\n中文说「我正在处理」，英语用 I'm working on it now。",
    pronunciation: "working 读 /ˈwɜːrkɪŋ/，重音在第一音节。\non it 连读：/ɒn ɪt/。\n节奏：I'm WORK-ing ｜ on it NOW.",
    quiz: [
      { q: '把「我正在处理。」用英语说出来。', a: "I'm working on it now." },
      { q: '「正在处理」用英语怎么说？', a: 'working on it (/ˈwɜːrkɪŋ ɒn ɪt/)' },
    ],
  },
  {
    id: 2585,
    speaker: 'Engineer',
    en: "It's almost finished.",
    cn: '快完成了。',
    ipa: '/ɪts ˈɔːlməʊst ˈfɪnɪʃt/',
    tags: ['第2585句', '办公室沟通', '★★★★'],
    when: '工作接近尾声时，向询问进展的同事报告即将完成。',
    words: [
      { w: 'almost', ipa: '/ˈɔːlməʊst/', pos: '副词', cn: '几乎；差不多', memory: 'all(全部)+most(最多)→接近全部→几乎。', phonics: 'al 读 /ɔːl/，most 读 /məʊst/，重音在第一音节。', collocations: [['almost done', '差不多完成'], ['almost finished', '快完成了'], ['almost ready', '差不多准备好了']], examples: [["The report is almost done.", '报告差不多完成了。'], ["It's almost time to go.", '差不多该走了。']] },
      { w: 'finished', ipa: '/ˈfɪnɪʃt/', pos: '形容词（过去分词）', cn: '完成的', memory: 'finish 的过去分词作形容词，表示已完成的状态。', phonics: 'fin 读 /fɪn/，ished 读 /ɪʃt/，重音在第一音节。', collocations: [['almost finished', '快完成'], ['completely finished', '完全完成']], examples: [['Is the inspection finished?', '巡检完成了吗？'], ["I'm almost finished.", '我快完成了。']] },
    ],
    phrases: [
      { p: "It's almost finished", ipa: '/ɪts ˈɔːlməʊst ˈfɪnɪʃt/', cn: '快完成了', why: 'almost + finished 表示接近完成但尚未完全结束的状态。' },
    ],
    grammar: [
      { q: "It's almost finished 和 It's nearly done 一样吗？", a: "两者意思相同，都是「快完成了」。\nalmost 和 nearly 是同义副词，finished 和 done 是同义形容词。\n✅ It's almost finished.（快完成了）\n✅ It's nearly done.（快完成了）\nalmost finished 更正式，nearly done 更口语化。" },
    ],
    pattern: "It's almost + 完成状态词.",
    patternExamples: [
      { en: "It's almost done.", cn: '快完成了。', words: [] },
      { en: "It's almost complete.", cn: '差不多完成了。', words: [] },
      { en: "It's almost ready.", cn: '差不多准备好了。', words: [] },
    ],
    thinking: "在数据中心，汇报工作进度时使用 almost finished 让对方知道即将完成。\n中文说「快完成了」，英语用 It's almost finished。\n也可以说 It's nearly done 或 It's almost complete。",
    pronunciation: "almost 重音在第一音节：AL-most。\nfinished 重音在第一音节：FIN-ished。\n节奏：It's AL-most ｜ FIN-ished.",
    quiz: [
      { q: '把「快完成了。」用英语说出来。', a: "It's almost finished." },
      { q: '「几乎；差不多」用英语怎么说？', a: 'almost (/ˈɔːlməʊst/)' },
    ],
  },
  {
    id: 2586,
    speaker: 'Engineer',
    en: "I've completed the task.",
    cn: '我已经完成这项工作。',
    ipa: '/aɪv kəmˈpliːtɪd ðə tɑːsk/',
    tags: ['第2586句', '办公室沟通', '★★★★'],
    when: '向主管或同事正式报告某项工作已经全部完成。',
    words: [
      { w: 'completed', ipa: '/kəmˈpliːtɪd/', pos: '动词（过去分词）', cn: '完成（complete 的过去分词）', memory: 'com(完全)+plete(满)→完全填满→完成。比 finish 更正式。', phonics: 'com 读 /kəm/，plete 读 /pliːt/，ed 读 /ɪd/，重音在第二音节。', collocations: [['completed the task', '完成任务'], ['completed the inspection', '完成巡检'], ['completed successfully', '成功完成']], examples: [['The inspection has been completed.', '巡检已完成。'], ['I completed the report yesterday.', '我昨天完成了报告。']] },
    ],
    phrases: [
      { p: "I've completed", ipa: '/aɪv kəmˈpliːtɪd/', cn: '我已经完成', why: '现在完成时 I have completed 强调动作已完成，结果对现在有影响。' },
    ],
    grammar: [
      { q: 'complete 和 finish 有什么区别？', a: 'complete 更正式，常用于书面报告和正式汇报。\nfinish 更口语化，日常对话中更常用。\n✅ I have completed the task.（我已经完成这项工作。）—— 正式\n✅ I have finished the task.（我已经完成这项工作。）—— 日常\n在正式汇报或邮件中推荐用 complete。' },
    ],
    pattern: "I've completed + 对象.",
    patternExamples: [
      { en: "I've completed the handover checklist.", cn: '我已经完成交接清单。', words: [] },
      { en: "I've completed the safety inspection.", cn: '我已经完成安全检查。', words: [] },
      { en: "I've completed the data entry.", cn: '我已经完成数据录入。', words: [] },
    ],
    thinking: "在数据中心，完成工作后需要正式报告。\nI've completed the task 是正式汇报的标准用语。\n中文说「我已经完成这项工作」，英语用 I've completed the task。",
    pronunciation: "complete 重音在第二音节：com-PLETE。\ned 发 /ɪd/ 音。\n节奏：I've com-PLE-ted ｜ the TASK.",
    quiz: [
      { q: '把「我已经完成这项工作。」用英语说出来。', a: "I've completed the task." },
      { q: '「完成（正式）」用英语怎么说？', a: 'complete (/kəmˈpliːt/)' },
    ],
  },
  {
    id: 2587,
    speaker: 'Engineer',
    en: 'Could you review it before we send it out?',
    cn: '发出去之前你能帮我审核一下吗？',
    ipa: '/kʊd juː rɪˈvjuː ɪt bɪˈfɔːr wiː sɛnd ɪt aʊt/',
    tags: ['第2587句', '办公室沟通', '★★★★'],
    when: '完成报告或文件后，请同事或主管在正式发送前帮忙审核。',
    words: [
      { w: 'review', ipa: '/rɪˈvjuː/', pos: '动词', cn: '审核；审查', memory: 're(再)+view(看)→再看一遍→审核。', phonics: 're 读 /rɪ/，view 读 /vjuː/，重音在第二音节。', collocations: [['review the report', '审核报告'], ['review the document', '审核文件'], ['peer review', '同行审核']], examples: [['Please review this before submission.', '提交前请审核一下。'], ['I need someone to review my report.', '我需要有人审核我的报告。']] },
      { w: 'send it out', ipa: '/sɛnd ɪt aʊt/', pos: '动词短语', cn: '发送出去', memory: 'send out 表示向外发送，比 send 更强调「发出」的方向。', phonics: 'send 读 /sɛnd/，out 读 /aʊt/。', collocations: [['send out the email', '发出邮件'], ['send out the report', '发出报告'], ['send out notification', '发出通知']], examples: [['We need to send out the report today.', '我们今天需要把报告发出去。'], ['Has the notification been sent out?', '通知发出去了吗？']] },
    ],
    phrases: [
      { p: 'review it', ipa: '/rɪˈvjuː ɪt/', cn: '审核一下', why: 'review 作动词表示审查、审核，it 指代需要审核的文件。' },
      { p: 'before we send it out', ipa: '/bɪˈfɔːr wiː sɛnd ɪt aʊt/', cn: '发出去之前', why: 'before 引导时间状语从句，说明审核的时间节点。' },
    ],
    grammar: [
      { q: 'review 和 check 有什么区别？', a: 'review 指系统性地审查、审核，通常用于文件或报告。\ncheck 更通用，指快速检查确认。\n✅ Could you review the report?（你能审核这份报告吗？）—— 仔细审查\n✅ Could you check the numbers?（你能检查一下数字吗？）—— 快速核对\n正式文件的审核用 review，快速核对用 check。' },
    ],
    pattern: 'Could you review + 对象 + before + 时间节点?',
    patternExamples: [
      { en: 'Could you review the alarm log before the meeting?', cn: '开会前你能审核一下告警日志吗？', words: [] },
      { en: 'Could you review the handover notes before the shift?', cn: '换班前你能审核一下交接记录吗？', words: [] },
      { en: 'Could you review the safety report before we submit it?', cn: '提交前你能审核一下安全报告吗？', words: [] },
    ],
    thinking: '在数据中心，重要文件发送前需要审核以确保准确性。\nCould you review it before we send it out 是礼貌请求审核的句式。\n中文说「发出去之前你能帮我审核一下吗」，英语用 Could you review it before we send it out。',
    pronunciation: "review 重音在第二音节：re-VIEW。\nsend out 连读：/sɛnd aʊt/。\n节奏：COULD you ｜ re-VIEW it ｜ be-FORE ｜ we SEND it OUT?",
    quiz: [
      { q: '把「发出去之前你能帮我审核一下吗？」用英语说出来。', a: 'Could you review it before we send it out?' },
      { q: '「审核」用英语怎么说？', a: 'review (/rɪˈvjuː/)' },
    ],
  },
  {
    id: 2588,
    speaker: 'Engineer',
    en: 'I agree with your suggestion.',
    cn: '我同意你的建议。',
    ipa: '/aɪ əˈɡriː wɪð jɔːr səˈdʒɛstʃən/',
    tags: ['第2588句', '办公室沟通', '★★★★'],
    when: '在会议或讨论中，对同事提出的方案或建议表示赞同。',
    words: [
      { w: 'agree', ipa: '/əˈɡriː/', pos: '动词', cn: '同意；赞同', memory: 'a(向)+gree(令人愉快)→向对方表示愉快→同意。', phonics: 'a 读 /ə/，gree 读 /ɡriː/，重音在第二音节。', collocations: [['agree with', '同意（某人/某事）'], ['agree on', '就…达成一致'], ['agree to', '同意（做某事）']], examples: [['I agree with your plan.', '我同意你的计划。'], ['We all agreed on the schedule.', '我们都同意了排班。']] },
      { w: 'suggestion', ipa: '/səˈdʒɛstʃən/', pos: '名词', cn: '建议；提议', memory: 'suggest(建议)+ion(名词后缀)→建议。', phonics: 'sug 读 /səɡ/，ges 读 /dʒɛs/，tion 读 /tʃən/，重音在第二音节。', collocations: [['make a suggestion', '提出建议'], ['good suggestion', '好建议'], ['follow a suggestion', '采纳建议']], examples: [['Do you have any suggestions?', '你有什么建议吗？'], ['That is a great suggestion.', '那是个很好的建议。']] },
    ],
    phrases: [
      { p: 'agree with', ipa: '/əˈɡriː wɪð/', cn: '同意', why: 'agree with + 人/观点，表示赞同对方的意见或建议。' },
    ],
    grammar: [
      { q: 'agree with, agree on, agree to 有什么区别？', a: 'agree with + 人/观点：同意某人或某观点。\nagree on + 事项：就某事达成一致。\nagree to + 动词/提议：同意做某事或接受提议。\n✅ I agree with your suggestion.（我同意你的建议。）\n✅ We agreed on the deadline.（我们就截止日期达成一致。）\n✅ They agreed to the new policy.（他们同意了新政策。）' },
    ],
    pattern: 'I agree with + 人/观点.',
    patternExamples: [
      { en: 'I agree with your analysis.', cn: '我同意你的分析。', words: [] },
      { en: 'I agree with the proposed schedule.', cn: '我同意提议的排班。', words: [] },
      { en: 'I agree with the team lead.', cn: '我同意组长的意见。', words: [] },
    ],
    thinking: '在团队讨论中，表达赞同是推进决策的重要环节。\nI agree with your suggestion 清晰地表达认同。\n中文说「我同意你的建议」，英语用 I agree with your suggestion。',
    pronunciation: "agree 重音在第二音节：a-GREE。\nsuggestion 重音在第二音节：sug-GES-tion。\n节奏：I a-GREE ｜ with your sug-GES-tion.",
    quiz: [
      { q: '把「我同意你的建议。」用英语说出来。', a: 'I agree with your suggestion.' },
      { q: '「同意（某人/观点）」用英语怎么说？', a: 'agree with (/əˈɡriː wɪð/)' },
    ],
  },
  {
    id: 2589,
    speaker: 'Engineer',
    en: "That's a good idea.",
    cn: '这是个好主意。',
    ipa: '/ðæts ə ɡʊd aɪˈdɪə/',
    tags: ['第2589句', '办公室沟通', '★★★★'],
    when: '同事提出了一个有价值的想法，表示认可和赞同。',
    words: [
      { w: 'idea', ipa: '/aɪˈdɪə/', pos: '名词', cn: '主意；想法', memory: 'idea 源自希腊语，表示思想、概念。', phonics: 'i 读 /aɪ/，de 读 /dɪ/，a 读 /ə/，重音在第二音节。', collocations: [['good idea', '好主意'], ['great idea', '很棒的主意'], ['come up with an idea', '想出一个主意']], examples: [["That's a great idea!", '这主意太棒了！'], ['Do you have any ideas?', '你有什么想法吗？']] },
    ],
    phrases: [
      { p: "That's a good idea", ipa: '/ðæts ə ɡʊd aɪˈdɪə/', cn: '这是个好主意', why: "That is a good idea 是简洁有力的赞同表达，对同事的提议表示认可。" },
    ],
    grammar: [
      { q: 'good idea 和 great idea 有什么区别？', a: 'good idea 表示「好主意」，赞同程度适中。\ngreat idea 表示「很棒的主意」，赞同程度更强烈。\n✅ That is a good idea.（这是个好主意。）—— 适度赞同\n✅ That is a great idea!（这主意太棒了！）—— 强烈赞同\n根据你对提议的认可程度选择使用。' },
    ],
    pattern: "That's a + 形容词 + idea.",
    patternExamples: [
      { en: "That's a brilliant idea.", cn: '这是个绝妙的主意。', words: [] },
      { en: "That's an interesting idea.", cn: '这是个有趣的想法。', words: [] },
      { en: "That's a practical idea.", cn: '这是个实用的主意。', words: [] },
    ],
    thinking: "在团队协作中，对好想法给予正面反馈能鼓励更多创意。\nThat's a good idea 是最常用的赞同表达。\n中文说「这是个好主意」，英语用 That's a good idea。",
    pronunciation: "idea 重音在第二音节：i-DE-a。\ngood 读 /ɡʊd/，短元音。\n节奏：THAT'S a ｜ GOOD i-DE-a.",
    quiz: [
      { q: '把「这是个好主意。」用英语说出来。', a: "That's a good idea." },
      { q: '「主意；想法」用英语怎么说？', a: 'idea (/aɪˈdɪə/)' },
    ],
  },
  {
    id: 2590,
    speaker: 'Engineer',
    en: "Let's discuss it after the meeting.",
    cn: '我们会后再讨论。',
    ipa: '/lɛts dɪˈskʌs ɪt ˈɑːftər ðə ˈmiːtɪŋ/',
    tags: ['第2590句', '办公室沟通', '★★★★'],
    when: '会议中遇到需要深入讨论但不适合当场展开的话题时，建议会后另行讨论。',
    words: [
      { w: 'discuss', ipa: '/dɪˈskʌs/', pos: '动词', cn: '讨论；商议', memory: 'dis(分开)+cuss(说)→把话题拆开来说→讨论。', phonics: 'dis 读 /dɪ/，cuss 读 /kʌs/，重音在第二音节。', collocations: [['discuss the issue', '讨论问题'], ['discuss the plan', '讨论计划'], ['discuss in detail', '详细讨论']], examples: [["Let's discuss this later.", '我们稍后讨论这个。'], ['We need to discuss the schedule.', '我们需要讨论排班。']] },
    ],
    phrases: [
      { p: "Let's discuss it", ipa: '/lɛts dɪˈskʌs ɪt/', cn: '我们讨论一下', why: "Let us discuss it 是提议讨论的句式，Let's = Let us。" },
      { p: 'after the meeting', ipa: '/ˈɑːftər ðə ˈmiːtɪŋ/', cn: '会后', why: 'after + 事件，表示在该事件之后，常用于安排后续讨论。' },
    ],
    grammar: [
      { q: "discuss 后面需要加 about 吗？", a: "discuss 是及物动词，后面直接接讨论的对象，不需要加 about。\n✅ Let's discuss the plan.（我们讨论一下计划。）\n❌ Let's discuss about the plan.（错误：多了 about）\n这是中国英语学习者的常见错误，discuss 本身就包含「关于」的意思。" },
    ],
    pattern: "Let's discuss + 对象 + 时间/地点.",
    patternExamples: [
      { en: "Let's discuss the alarm after the shift.", cn: '我们换班后讨论告警的事。', words: [] },
      { en: "Let's discuss the maintenance plan tomorrow.", cn: '我们明天讨论维护计划。', words: [] },
      { en: "Let's discuss this in the break room.", cn: '我们在休息室讨论这个。', words: [] },
    ],
    thinking: "在会议中，有些话题需要更多时间讨论但不适合当场展开。\nLet's discuss it after the meeting 是推迟讨论的礼貌表达。\n中文说「我们会后再讨论」，英语用 Let's discuss it after the meeting。",
    pronunciation: "discuss 重音在第二音节：dis-CUSS。\nafter 重音在第一音节：AF-ter。\n节奏：Let's dis-CUSS it ｜ AF-ter ｜ the MEE-ting.",
    quiz: [
      { q: '把「我们会后再讨论。」用英语说出来。', a: "Let's discuss it after the meeting." },
      { q: 'discuss 后面需要加 about 吗？', a: '不需要。discuss 是及物动词，直接接对象。' },
    ],
  },
  {
    id: 2591,
    speaker: 'Engineer',
    en: 'Excuse me, do you have a moment?',
    cn: '不好意思，你现在有空吗？',
    ipa: '/ɪkˈskjuːz miː duː juː hæv ə ˈməʊmənt/',
    tags: ['第2591句', '办公室礼貌用语', '★★★★'],
    when: '需要打扰同事谈事情前，先礼貌地确认对方是否有时间。',
    words: [
      { w: 'excuse me', ipa: '/ɪkˈskjuːz miː/', pos: '感叹词', cn: '不好意思；打扰一下', memory: 'excuse(原谅)+me(我)→请原谅我→打扰一下。', phonics: 'ex 读 /ɪk/，cuse 读 /skjuːz/，重音在第二音节。', collocations: [['excuse me', '打扰一下'], ['please excuse me', '请原谅我']], examples: [['Excuse me, where is the server room?', '请问机房在哪里？'], ['Excuse me, can I ask a question?', '打扰一下，我能问个问题吗？']] },
      { w: 'moment', ipa: '/ˈməʊmənt/', pos: '名词', cn: '片刻；一会儿', memory: 'moment 指很短的时间，比 minute 更模糊。', phonics: 'mo 读 /məʊ/，ment 读 /mənt/，重音在第一音节。', collocations: [['have a moment', '有空吗'], ['wait a moment', '等一下'], ['at the moment', '目前']], examples: [['Do you have a moment?', '你有空吗？'], ['Just a moment, please.', '请稍等片刻。']] },
    ],
    phrases: [
      { p: 'Excuse me', ipa: '/ɪkˈskjuːz miː/', cn: '打扰一下', why: 'Excuse me 是打扰别人前的礼貌开场白，表示歉意。' },
      { p: 'do you have a moment', ipa: '/duː juː hæv ə ˈməʊmənt/', cn: '你有空吗', why: 'have a moment 表示有时间/有空，是询问对方是否有空的标准表达。' },
    ],
    grammar: [
      { q: 'have a moment 和 have time 一样吗？', a: '两者意思相近，但 have a moment 更委婉。\n✅ Do you have a moment?（你有空吗？）—— 更礼貌\n✅ Do you have time?（你有时间吗？）—— 更直接\n在打扰同事时，用 have a moment 更得体。' },
    ],
    pattern: 'Excuse me, do you have a + 时间词?',
    patternExamples: [
      { en: 'Excuse me, do you have a minute?', cn: '打扰一下，你有一分钟吗？', words: [] },
      { en: 'Excuse me, do you have a second?', cn: '打扰一下，你有空吗？', words: [] },
      { en: 'Excuse me, do you have a quick moment?', cn: '打扰一下，你能抽出一点时间吗？', words: [] },
    ],
    thinking: '在办公室，打扰同事前先确认对方是否有空是基本礼貌。\nExcuse me, do you have a moment 是标准的礼貌开场。\n中文说「不好意思，你现在有空吗」，英语用 Excuse me, do you have a moment。',
    pronunciation: "excuse 重音在第二音节：ex-CUSE。\nmoment 重音在第一音节：MO-ment。\n节奏：ex-CUSE ME ｜ do you HAVE ｜ a MO-ment?",
    quiz: [
      { q: '把「不好意思，你现在有空吗？」用英语说出来。', a: 'Excuse me, do you have a moment?' },
      { q: '「打扰一下」用英语怎么说？', a: 'excuse me (/ɪkˈskjuːz miː/)' },
    ],
  },
  {
    id: 2592,
    speaker: 'Engineer',
    en: 'Sorry to interrupt you.',
    cn: '抱歉打扰一下。',
    ipa: '/ˈsɒri tuː ˌɪntəˈrʌpt juː/',
    tags: ['第2592句', '办公室礼貌用语', '★★★★'],
    when: '需要在同事忙碌时打断他们谈事情，先表达歉意。',
    words: [
      { w: 'interrupt', ipa: '/ˌɪntəˈrʌpt/', pos: '动词', cn: '打断；打扰', memory: 'inter(在中间)+rupt(断)→在中间断开→打断。', phonics: 'in 读 /ɪn/，ter 读 /tə/，rupt 读 /rʌpt/，重音在第三音节。', collocations: [['interrupt someone', '打断某人'], ['sorry to interrupt', '抱歉打断'], ['do not interrupt', '不要打断']], examples: [["Sorry to interrupt, but it's urgent.", '抱歉打扰，但是很紧急。'], ['Please do not interrupt the meeting.', '请不要打断会议。']] },
    ],
    phrases: [
      { p: 'Sorry to interrupt', ipa: '/ˈsɒri tuː ˌɪntəˈrʌpt/', cn: '抱歉打扰', why: 'Sorry to + 动词 表示「对做某事感到抱歉」，是打扰他人前的标准致歉。' },
    ],
    grammar: [
      { q: 'Sorry to interrupt 和 Sorry for interrupting 有什么区别？', a: 'Sorry to interrupt 用于打断之前说，是「预防性道歉」。\nSorry for interrupting 用于打断之后说，是「事后道歉」。\n✅ Sorry to interrupt, but I need your help.（抱歉打扰，我需要你帮忙。）—— 打断前\n✅ Sorry for interrupting the meeting.（抱歉打断了会议。）—— 打断后\n实际使用中两者常混用，不必过于纠结。' },
    ],
    pattern: 'Sorry to interrupt + 对象.',
    patternExamples: [
      { en: 'Sorry to interrupt your work.', cn: '抱歉打扰你工作。', words: [] },
      { en: 'Sorry to interrupt the discussion.', cn: '抱歉打断讨论。', words: [] },
      { en: 'Sorry to interrupt, but this is urgent.', cn: '抱歉打扰，但这很紧急。', words: [] },
    ],
    thinking: '在办公室，打断他人工作时表达歉意是基本职场礼仪。\nSorry to interrupt you 是标准的打扰致歉句式。\n中文说「抱歉打扰一下」，英语用 Sorry to interrupt you。',
    pronunciation: "interrupt 重音在第三音节：in-ter-RUPT。\nSorry 重音在第一音节：SOR-ry。\n节奏：SOR-ry ｜ to in-ter-RUPT YOU.",
    quiz: [
      { q: '把「抱歉打扰一下。」用英语说出来。', a: 'Sorry to interrupt you.' },
      { q: '「打断；打扰」用英语怎么说？', a: 'interrupt (/ˌɪntəˈrʌpt/)' },
    ],
  },
  {
    id: 2593,
    speaker: 'Engineer',
    en: 'Thank you for your quick response.',
    cn: '感谢你的及时回复。',
    ipa: '/θæŋk juː fɔːr jɔːr kwɪk rɪˈspɒns/',
    tags: ['第2593句', '办公室礼貌用语', '★★★★'],
    when: '同事快速回复了你的邮件或消息，表达感谢。',
    words: [
      { w: 'quick', ipa: '/kwɪk/', pos: '形容词', cn: '快速的；及时的', memory: 'quick 强调速度快，反应时间短。', phonics: 'qu 读 /kw/，ick 读 /ɪk/，单音节。', collocations: [['quick response', '及时回复'], ['quick reply', '快速回复'], ['quick fix', '快速修复']], examples: [['Thank you for the quick reply.', '谢谢你的快速回复。'], ['We need a quick solution.', '我们需要一个快速解决方案。']] },
      { w: 'response', ipa: '/rɪˈspɒns/', pos: '名词', cn: '回复；响应', memory: 're(回)+sponse(承诺)→回应→回复。', phonics: 're 读 /rɪ/，sponse 读 /spɒns/，重音在第二音节。', collocations: [['quick response', '及时回复'], ['email response', '邮件回复'], ['emergency response', '应急响应']], examples: [['I am waiting for a response.', '我在等回复。'], ['The response time was excellent.', '响应时间很出色。']] },
    ],
    phrases: [
      { p: 'Thank you for', ipa: '/θæŋk juː fɔːr/', cn: '感谢…', why: 'Thank you for + 名词/动名词，是感谢某人做某事的标准句式。' },
      { p: 'quick response', ipa: '/kwɪk rɪˈspɒns/', cn: '及时回复', why: 'quick response 强调回复的速度快，是对高效沟通的认可。' },
    ],
    grammar: [
      { q: 'response 和 reply 有什么区别？', a: 'response 更正式，可用于书面和口头。\nreply 更口语化，常用于日常对话。\n✅ Thank you for your quick response.（感谢你的及时回复。）—— 正式\n✅ Thanks for the quick reply.（谢谢快速回复。）—— 口语\n商务邮件中用 response 更得体。' },
    ],
    pattern: 'Thank you for your + 形容词 + 名词.',
    patternExamples: [
      { en: 'Thank you for your prompt action.', cn: '感谢你的迅速行动。', words: [] },
      { en: 'Thank you for your valuable feedback.', cn: '感谢你的宝贵反馈。', words: [] },
      { en: 'Thank you for your patience.', cn: '感谢你的耐心。', words: [] },
    ],
    thinking: '在办公室，对同事的快速回复表示感谢能促进良好协作。\nThank you for your quick response 是正式的感谢句式。\n中文说「感谢你的及时回复」，英语用 Thank you for your quick response。',
    pronunciation: "response 重音在第二音节：re-SPONSE。\nquick 读 /kwɪk/，短元音。\n节奏：THANK you ｜ for your QUICK ｜ re-SPONSE.",
    quiz: [
      { q: '把「感谢你的及时回复。」用英语说出来。', a: 'Thank you for your quick response.' },
      { q: '「及时回复」用英语怎么说？', a: 'quick response (/kwɪk rɪˈspɒns/)' },
    ],
  },
  {
    id: 2594,
    speaker: 'Engineer',
    en: 'I really appreciate your support.',
    cn: '非常感谢你的支持。',
    ipa: '/aɪ ˈrɪəli əˈpriːʃieɪt jɔːr səˈpɔːrt/',
    tags: ['第2594句', '办公室礼貌用语', '★★★★'],
    when: '同事提供了重要帮助或支持后，真诚地表达感激之情。',
    words: [
      { w: 'appreciate', ipa: '/əˈpriːʃieɪt/', pos: '动词', cn: '感激；感谢', memory: 'ap(向)+preci(价值)+ate(动词后缀)→认识到价值→感激。', phonics: 'ap 读 /ə/，pre 读 /priː/，ciate 读 /ʃieɪt/，重音在第二音节。', collocations: [['appreciate your help', '感谢你的帮助'], ['greatly appreciate', '非常感谢'], ['appreciate the effort', '感谢付出']], examples: [['I really appreciate your help.', '我非常感谢你的帮助。'], ['We appreciate your patience.', '我们感谢你的耐心。']] },
      { w: 'support', ipa: '/səˈpɔːrt/', pos: '名词', cn: '支持；帮助', memory: 'sup(下面)+port(承受)→在下面承受→支持。', phonics: 'sup 读 /sə/，port 读 /pɔːrt/，重音在第二音节。', collocations: [['technical support', '技术支持'], ['your support', '你的支持'], ['support team', '支持团队']], examples: [['Thank you for your support.', '感谢你的支持。'], ['The support team is very helpful.', '支持团队很有帮助。']] },
    ],
    phrases: [
      { p: 'I really appreciate', ipa: '/aɪ ˈrɪəli əˈpriːʃieɪt/', cn: '我非常感谢', why: 'really 加强语气，表示真诚的感激，比单纯的 I appreciate 更有力。' },
    ],
    grammar: [
      { q: 'appreciate 和 thank 有什么区别？', a: 'appreciate 更正式、更深沉，表达的是内心的感激。\nthank 更日常、更直接。\n✅ I really appreciate your support.（非常感谢你的支持。）—— 真诚感激\n✅ Thank you for your support.（感谢你的支持。）—— 日常感谢\n对重要帮助用 appreciate 更显诚意。' },
    ],
    pattern: 'I really appreciate + 对象.',
    patternExamples: [
      { en: 'I really appreciate your guidance.', cn: '非常感谢你的指导。', words: [] },
      { en: 'I really appreciate your cooperation.', cn: '非常感谢你的配合。', words: [] },
      { en: 'I really appreciate the team effort.', cn: '非常感谢团队的努力。', words: [] },
    ],
    thinking: '在办公室，真诚地感谢同事的支持能建立良好的工作关系。\nI really appreciate your support 比 Thank you 更有分量。\n中文说「非常感谢你的支持」，英语用 I really appreciate your support。',
    pronunciation: "appreciate 重音在第二音节：ap-PRE-ciate。\nsupport 重音在第二音节：sup-PORT。\n节奏：I RE-al-ly ｜ ap-PRE-ciate ｜ your sup-PORT.",
    quiz: [
      { q: '把「非常感谢你的支持。」用英语说出来。', a: 'I really appreciate your support.' },
      { q: '「感激；感谢」用英语怎么说？', a: 'appreciate (/əˈpriːʃieɪt/)' },
    ],
  },
  {
    id: 2595,
    speaker: 'Engineer',
    en: 'No problem at all.',
    cn: '完全没问题。',
    ipa: '/nəʊ ˈprɒbləm æt ɔːl/',
    tags: ['第2595句', '办公室礼貌用语', '★★★★'],
    when: '同事向你道谢或请求帮助时，轻松回应表示不麻烦。',
    words: [
      { w: 'problem', ipa: '/ˈprɒbləm/', pos: '名词', cn: '问题；麻烦', memory: 'pro(向前)+blem(投掷)→面前抛来的东西→问题。', phonics: 'prob 读 /prɒb/，lem 读 /ləm/，重音在第一音节。', collocations: [['no problem', '没问题'], ['big problem', '大问题'], ['solve a problem', '解决问题']], examples: [["No problem, I can help.", '没问题，我能帮忙。'], ['Is there a problem?', '有问题吗？']] },
      { w: 'at all', ipa: '/æt ɔːl/', pos: '副词短语', cn: '完全；根本', memory: 'at all 用于否定句，加强「完全不」的语气。', phonics: 'at 读 /æt/，all 读 /ɔːl/。', collocations: [['not at all', '一点也不'], ['no problem at all', '完全没问题']], examples: [["I don't mind at all.", '我完全不介意。'], ['No trouble at all.', '完全没有麻烦。']] },
    ],
    phrases: [
      { p: 'No problem at all', ipa: '/nəʊ ˈprɒbləm æt ɔːl/', cn: '完全没问题', why: 'at all 加强语气，表示「完全没有问题/一点不麻烦」，比 No problem 更热情。' },
    ],
    grammar: [
      { q: 'No problem 和 You are welcome 哪个更常用？', a: 'No problem 更口语化、更随意，适合同事之间。\nYou are welcome 更正式、更传统。\n✅ No problem at all.（完全没问题。）—— 随意、热情\n✅ You are welcome.（不客气。）—— 正式、传统\n年轻同事之间常用 No problem，对上级或客户可用 You are welcome。' },
    ],
    pattern: 'No + 名词 + at all.',
    patternExamples: [
      { en: 'No trouble at all.', cn: '完全不麻烦。', words: [] },
      { en: 'No worries at all.', cn: '完全不用担心。', words: [] },
      { en: 'No issue at all.', cn: '完全没有问题。', words: [] },
    ],
    thinking: '在办公室，对同事的感谢轻松回应能营造友好的工作氛围。\nNo problem at all 比 No problem 更热情。\n中文说「完全没问题」，英语用 No problem at all。',
    pronunciation: "problem 重音在第一音节：PRO-blem。\nat all 连读：/æt ɔːl/。\n节奏：No PRO-blem ｜ at ALL.",
    quiz: [
      { q: '把「完全没问题。」用英语说出来。', a: 'No problem at all.' },
      { q: 'at all 在这里的作用是什么？', a: '加强语气，表示「完全/根本」。' },
    ],
  },
  {
    id: 2596,
    speaker: 'Engineer',
    en: 'Take your time.',
    cn: '不用着急。',
    ipa: '/teɪk jɔːr taɪm/',
    tags: ['第2596句', '办公室礼貌用语', '★★★★'],
    when: '同事在为某事赶时间或感到压力时，安慰对方不必着急。',
    words: [
      { w: 'take', ipa: '/teɪk/', pos: '动词', cn: '拿；花费（时间）', memory: 'take your time 字面是「拿你的时间」，意思是「慢慢来」。', phonics: 't 读 /t/，ake 读 /eɪk/，单音节。', collocations: [['take your time', '慢慢来'], ['take time', '花时间'], ['take a break', '休息一下']], examples: [['Take your time, there is no rush.', '慢慢来，不着急。'], ['It takes time to learn.', '学习需要时间。']] },
    ],
    phrases: [
      { p: 'Take your time', ipa: '/teɪk jɔːr taɪm/', cn: '不用着急；慢慢来', why: '这是一个固定短语，告诉对方不需要赶时间，可以按照自己的节奏来。' },
    ],
    grammar: [
      { q: 'Take your time 和 No rush 一样吗？', a: '两者都表示「不用着急」，语气略有不同。\nTake your time 更温和，带有「请慢慢来」的关怀。\nNo rush 更随意，表示「不急」。\n✅ Take your time.（慢慢来。）—— 温和关怀\n✅ No rush.（不急。）—— 随意轻松\n两者在办公室都可以用。' },
    ],
    pattern: 'Take your time + 补充说明.',
    patternExamples: [
      { en: 'Take your time, there is no deadline.', cn: '慢慢来，没有截止日期。', words: [] },
      { en: 'Take your time with the report.', cn: '报告慢慢写，不着急。', words: [] },
      { en: 'Take your time, we can wait.', cn: '慢慢来，我们可以等。', words: [] },
    ],
    thinking: '在办公室，适当安慰赶时间的同事能减轻压力。\nTake your time 是表达「不用着急」的标准用语。\n中文说「不用着急」，英语用 Take your time。',
    pronunciation: "take 读 /teɪk/，time 读 /taɪm/。\n节奏：TAKE your TIME.",
    quiz: [
      { q: '把「不用着急。」用英语说出来。', a: 'Take your time.' },
      { q: '「不用着急」的另一种英语说法是什么？', a: 'No rush. (/nəʊ rʌʃ/)' },
    ],
  },
  {
    id: 2597,
    speaker: 'Engineer',
    en: 'Let me know if you need anything.',
    cn: '如果需要帮助，请告诉我。',
    ipa: '/lɛt miː nəʊ ɪf juː niːd ˈɛniθɪŋ/',
    tags: ['第2597句', '办公室礼貌用语', '★★★★'],
    when: '向同事表达愿意提供帮助的善意，常见于邮件结尾或对话结束时。',
    words: [
      { w: 'let me know', ipa: '/lɛt miː nəʊ/', pos: '动词短语', cn: '告诉我；让我知道', memory: 'let(让)+me(我)+know(知道)→让我知道→告诉我。', phonics: 'let 读 /lɛt/，know 读 /nəʊ/。', collocations: [['let me know', '告诉我'], ['let us know', '告诉我们'], ['please let me know', '请告诉我']], examples: [['Let me know if you have questions.', '有问题请告诉我。'], ['Please let me know the result.', '请告诉我结果。']] },
      { w: 'anything', ipa: '/ˈɛniθɪŋ/', pos: '代词', cn: '任何东西；任何事', memory: 'any(任何)+thing(事物)→任何事物。', phonics: 'an 读 /ɛn/，y 读 /i/，thing 读 /θɪŋ/，重音在第一音节。', collocations: [['need anything', '需要任何帮助'], ['anything else', '还有别的吗'], ['if anything', '如果有的话']], examples: [['Do you need anything?', '你需要什么吗？'], ['Is there anything I can do?', '有什么我能做的吗？']] },
    ],
    phrases: [
      { p: 'Let me know if', ipa: '/lɛt miː nəʊ ɪf/', cn: '如果…请告诉我', why: 'Let me know if 是礼貌地表达「如果有什么情况请通知我」的句式。' },
    ],
    grammar: [
      { q: 'if you need anything 和 if you need something 一样吗？', a: '在 if 条件句中，anything 和 something 都可以用。\nanything 更常用，表示「任何东西/事情」，范围更广。\nsomething 更具体，暗示可能有特定的事。\n✅ Let me know if you need anything.（需要什么告诉我。）—— 通用\n✅ Let me know if you need something specific.（需要具体的什么告诉我。）—— 更具体\n一般用 anything 即可。' },
    ],
    pattern: 'Let me know if + 条件.',
    patternExamples: [
      { en: 'Let me know if you have any questions.', cn: '有任何问题请告诉我。', words: [] },
      { en: 'Let me know if there are any issues.', cn: '有任何问题请告诉我。', words: [] },
      { en: 'Let me know if the schedule works for you.', cn: '如果排班合适请告诉我。', words: [] },
    ],
    thinking: '在办公室，主动表达愿意帮助的善意能促进团队协作。\nLet me know if you need anything 是邮件和对话中常用的结尾句。\n中文说「如果需要帮助，请告诉我」，英语用 Let me know if you need anything。',
    pronunciation: "let me know 连读：/lɛt miː nəʊ/。\nanything 重音在第一音节：AN-y-thing。\n节奏：LET me KNOW ｜ if you NEED ｜ AN-y-thing.",
    quiz: [
      { q: '把「如果需要帮助，请告诉我。」用英语说出来。', a: 'Let me know if you need anything.' },
      { q: '「让我知道/告诉我」用英语怎么说？', a: 'let me know (/lɛt miː nəʊ/)' },
    ],
  },
  {
    id: 2598,
    speaker: 'Engineer',
    en: "I'll keep you updated.",
    cn: '我会及时向你更新进展。',
    ipa: '/aɪl kiːp juː ˌʌpˈdeɪtɪd/',
    tags: ['第2598句', '办公室礼貌用语', '★★★★'],
    when: '告知同事你会持续跟进某事并定期更新进展。',
    words: [
      { w: 'keep', ipa: '/kiːp/', pos: '动词', cn: '保持；持续', memory: 'keep 表示保持某种状态或持续某个动作。', phonics: 'k 读 /k/，eep 读 /iːp/，单音节。', collocations: [['keep updated', '保持更新'], ['keep informed', '保持知情'], ['keep in touch', '保持联系']], examples: [["I'll keep you posted.", '我会随时通知你。'], ['Keep me updated on the progress.', '向我更新进展。']] },
      { w: 'updated', ipa: '/ˌʌpˈdeɪtɪd/', pos: '形容词（过去分词）', cn: '更新的；最新的', memory: 'up(向上)+date(日期)+d→日期更新→最新的。', phonics: 'up 读 /ʌp/，date 读 /deɪt/，ed 读 /ɪd/，重音在第二音节。', collocations: [['keep updated', '保持更新'], ['stay updated', '保持最新'], ['updated version', '更新版本']], examples: [['Please keep the log updated.', '请保持日志更新。'], ['Is the schedule updated?', '排班更新了吗？']] },
    ],
    phrases: [
      { p: "I'll keep you updated", ipa: '/aɪl kiːp juː ˌʌpˈdeɪtɪd/', cn: '我会持续向你更新', why: "keep + 人 + updated 表示持续向某人提供最新信息。" },
    ],
    grammar: [
      { q: 'keep you updated 和 keep you posted 一样吗？', a: '两者意思相同，都表示「持续通知你最新进展」。\nupdated 更正式，posted 更口语化。\n✅ I will keep you updated.（我会向你更新进展。）—— 稍正式\n✅ I will keep you posted.（我会随时通知你。）—— 更口语\n两者在办公室都常用。' },
    ],
    pattern: "I'll keep you + 过去分词.",
    patternExamples: [
      { en: "I'll keep you informed.", cn: '我会让你了解情况。', words: [] },
      { en: "I'll keep you posted.", cn: '我会随时通知你。', words: [] },
      { en: "I'll keep you notified.", cn: '我会及时通知你。', words: [] },
    ],
    thinking: "在数据中心，持续更新进展对团队协作至关重要。\nI'll keep you updated 承诺会定期通报最新情况。\n中文说「我会及时向你更新进展」，英语用 I'll keep you updated。",
    pronunciation: "updated 重音在第二音节：up-DA-ted。\nkeep 读 /kiːp/，长元音。\n节奏：I'll KEEP you ｜ up-DA-ted.",
    quiz: [
      { q: '把「我会及时向你更新进展。」用英语说出来。', a: "I'll keep you updated." },
      { q: '「持续更新」的另一种英语说法是什么？', a: 'keep you posted (/kiːp juː ˈpəʊstɪd/)' },
    ],
  },
  {
    id: 2599,
    speaker: 'Engineer',
    en: 'Have a good lunch.',
    cn: '祝你午餐愉快。',
    ipa: '/hæv ə ɡʊd lʌntʃ/',
    tags: ['第2599句', '办公室礼貌用语', '★★★★'],
    when: '午餐时间到了，和同事道别时送上友好祝福。',
    words: [
      { w: 'lunch', ipa: '/lʌntʃ/', pos: '名词', cn: '午餐', memory: 'lunch 指中午的一餐，通常在12:00-13:00之间。', phonics: 'l 读 /l/，unch 读 /ʌntʃ/，单音节。', collocations: [['have lunch', '吃午餐'], ['lunch break', '午休'], ['lunch time', '午餐时间']], examples: [["Let's have lunch together.", '我们一起吃午餐吧。'], ['Lunch break is at 12.', '午休从12点开始。']] },
    ],
    phrases: [
      { p: 'Have a good', ipa: '/hæv ə ɡʊd/', cn: '祝…愉快', why: 'Have a good + 名词 是英语中常用的祝福语句式。' },
    ],
    grammar: [
      { q: 'Have a good lunch 和 Enjoy your lunch 一样吗？', a: '两者都是祝对方午餐愉快的表达。\nHave a good lunch 更通用、更随意。\nEnjoy your lunch 更强调「享受」，稍正式。\n✅ Have a good lunch!（午餐愉快！）—— 随意\n✅ Enjoy your lunch!（享受你的午餐！）—— 稍正式\n两者在办公室都常用，不必纠结。' },
    ],
    pattern: 'Have a good + 时间/活动.',
    patternExamples: [
      { en: 'Have a good weekend!', cn: '周末愉快！', words: [] },
      { en: 'Have a good evening!', cn: '晚上愉快！', words: [] },
      { en: 'Have a good break!', cn: '休息愉快！', words: [] },
    ],
    thinking: '在办公室，午餐时间和同事道别时送上祝福是友好的举动。\nHave a good lunch 是简单而温暖的祝福语。\n中文说「祝你午餐愉快」，英语用 Have a good lunch。',
    pronunciation: "lunch 读 /lʌntʃ/，单音节。\nhave 读 /hæv/，短元音。\n节奏：HAVE a ｜ GOOD LUNCH.",
    quiz: [
      { q: '把「祝你午餐愉快。」用英语说出来。', a: 'Have a good lunch.' },
      { q: '「午餐」用英语怎么说？', a: 'lunch (/lʌntʃ/)' },
    ],
  },
  {
    id: 2600,
    speaker: 'Engineer',
    en: 'See you after lunch.',
    cn: '午饭后见。',
    ipa: '/siː juː ˈɑːftər lʌntʃ/',
    tags: ['第2600句', '办公室礼貌用语', '★★★★'],
    when: '午休前和同事道别，约定午餐后回来继续工作。',
    words: [
      { w: 'see you', ipa: '/siː juː/', pos: '动词短语', cn: '再见；回头见', memory: 'see(见)+you(你)→见到你→再见。是 Goodbye 的随意替代。', phonics: 'see 读 /siː/，you 读 /juː/。', collocations: [['see you later', '回头见'], ['see you tomorrow', '明天见'], ['see you soon', '很快再见']], examples: [['See you tomorrow!', '明天见！'], ['See you at the meeting.', '会议上见。']] },
      { w: 'after', ipa: '/ˈɑːftər/', pos: '介词', cn: '在…之后', memory: 'after 表示时间上的「之后」，与 before（之前）相对。', phonics: 'af 读 /ɑːf/，ter 读 /tər/，重音在第一音节。', collocations: [['after lunch', '午饭后'], ['after the meeting', '会后'], ['after work', '下班后']], examples: [["Let's meet after lunch.", '我们午饭后见面。'], ['Call me after the shift.', '换班后给我打电话。']] },
    ],
    phrases: [
      { p: 'See you after', ipa: '/siː juː ˈɑːftər/', cn: '…后见', why: 'See you + after + 事件/时间，表示在某个时间点之后再见。' },
    ],
    grammar: [
      { q: 'See you 是 Goodbye 的替代吗？', a: 'See you 系列是 Goodbye 的随意替代，更亲切自然。\n✅ See you after lunch.（午饭后见。）—— 随意、亲切\n✅ Goodbye.（再见。）—— 正式、通用\n在同事之间，See you 系列更常用。\n常见变体：See you later / See you tomorrow / See you soon。' },
    ],
    pattern: 'See you + 时间/地点.',
    patternExamples: [
      { en: 'See you at the meeting.', cn: '会议上见。', words: [] },
      { en: 'See you tomorrow morning.', cn: '明早见。', words: [] },
      { en: 'See you at the shift handover.', cn: '交接班时见。', words: [] },
    ],
    thinking: '在办公室，午休前和同事道别是日常社交的一部分。\nSee you after lunch 简洁友好地表达午餐后见。\n中文说「午饭后见」，英语用 See you after lunch。',
    pronunciation: "see 读 /siː/，长元音。\nafter 重音在第一音节：AF-ter。\n节奏：SEE you ｜ AF-ter LUNCH.",
    quiz: [
      { q: '把「午饭后见。」用英语说出来。', a: 'See you after lunch.' },
      { q: '「午饭后」用英语怎么说？', a: 'after lunch (/ˈɑːftər lʌntʃ/)' },
    ],
  },
];

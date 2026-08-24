// EXPORTS: MOCK_SENTENCES_RCAPAPA39B

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_RCAPAPA39B: ISentence[] = [
  {
    id: 2221,
    speaker: 'Engineer',
    en: 'The affected system has been fully restored.',
    cn: '受影响系统已经完全恢复。',
    ipa: '/ði əˈfɛktɪd ˈsɪstəm hæz bɪn ˈfʊli rɪˈstɔːrd/',
    tags: ['第2221句', '纠正措施', '★★★★★'],
    when: 'RCA会议中报告受影响系统已完全恢复至正常运行状态。',
    words: [
      { w: 'affected', ipa: '/əˈfɛktɪd/', pos: '形容词（过去分词）', cn: '受影响的', memory: 'affect(影响)+ed→被影响的。', phonics: 'af 读 /ə/，fect 读 /fɛkt/，重音在第二音节。', collocations: [['affected system', '受影响系统'], ['affected area', '受影响区域'], ['affected equipment', '受影响设备']], examples: [['The affected system is back online.', '受影响系统已恢复在线。'], ['No affected customers reported issues.', '没有受影响的客户报告问题。']] },
      { w: 'restored', ipa: '/rɪˈstɔːrd/', pos: '动词（过去分词）', cn: '恢复；修复', memory: 're(再)+store(储存)→重新储存→恢复到原来状态。', phonics: 're 读 /rɪ/，store 读 /stɔːr/，重音在第二音节。', collocations: [['fully restored', '完全恢复'], ['system restored', '系统恢复'], ['service restored', '服务恢复']], examples: [['Power has been fully restored.', '电力已完全恢复。'], ['The service was restored within one hour.', '服务在一小时内恢复。']] },
    ],
    phrases: [
      { p: 'fully restored', ipa: '/ˈfʊli rɪˈstɔːrd/', cn: '完全恢复', why: 'fully 强调恢复的彻底性，不是部分恢复而是100%正常。' },
      { p: 'the affected system', ipa: '/ði əˈfɛktɪd ˈsɪstəm/', cn: '受影响系统', why: 'affected 做前置定语，明确是事件中受到影响的系统。' },
    ],
    grammar: [
      { q: '为什么用 has been restored 而不是 was restored？', a: 'has been restored 是现在完成时被动语态，强调「到现在为止已经完成」的结果。\nwas restored 是一般过去时被动语态，只描述过去发生的动作。\n✅ The system has been fully restored.（系统已经完全恢复了。）—— 强调当前状态\n✅ The system was restored yesterday.（系统昨天恢复了。）—— 强调过去时间\nRCA会议中用 has been 更强调当前已恢复的结果。' },
    ],
    pattern: 'The affected + 名词 + has been fully restored',
    patternExamples: [
      { en: 'The affected equipment has been fully restored.', cn: '受影响设备已经完全恢复。', words: [] },
      { en: 'The affected circuit has been fully restored.', cn: '受影响电路已经完全恢复。', words: [] },
      { en: 'The affected zone has been fully restored.', cn: '受影响区域已经完全恢复。', words: [] },
    ],
    thinking: 'RCA会议中必须明确报告受影响系统已完全恢复。\nfully restored 强调恢复的彻底性，给与会者信心。\n现在完成时 has been restored 强调当前状态——系统现在是正常的。',
    pronunciation: 'affected 重音在第二音节：af-FEC-ted。\nfully 重音在第一音节：FUL-ly。\nrestored 重音在第二音节：re-STORED。\n节奏：The af-FEC-ted SYS-tem ｜ has been FUL-ly ｜ re-STORED.',
    quiz: [
      { q: '把「受影响系统已经完全恢复。」用英语说出来。', a: 'The affected system has been fully restored.' },
      { q: '「完全恢复」用英语怎么说？', a: 'fully restored (/ˈfʊli rɪˈstɔːrd/)' },
    ],
  },
  {
    id: 2222,
    speaker: 'Engineer',
    en: 'All related equipment has been inspected.',
    cn: '所有相关设备已经检查完成。',
    ipa: '/ɔːl rɪˈleɪtɪd ɪˈkwɪpmənt hæz bɪn ɪnˈspɛktɪd/',
    tags: ['第2222句', '纠正措施', '★★★★★'],
    when: 'RCA会议中报告已对所有相关设备完成检查，确保无其他隐患。',
    words: [
      { w: 'related', ipa: '/rɪˈleɪtɪd/', pos: '形容词（过去分词）', cn: '相关的', memory: 'relate(关联)+d→有关联的。', phonics: 're 读 /rɪ/，late 读 /leɪt/，重音在第二音节。', collocations: [['related equipment', '相关设备'], ['related systems', '相关系统'], ['related issues', '相关问题']], examples: [['All related equipment has been checked.', '所有相关设备已检查。'], ['No related faults were found.', '没有发现相关故障。']] },
      { w: 'inspected', ipa: '/ɪnˈspɛktɪd/', pos: '动词（过去分词）', cn: '检查；检验', memory: 'in(向内)+spect(看)→向内仔细看→检查。', phonics: 'in 读 /ɪn/，spect 读 /spɛkt/，重音在第二音节。', collocations: [['thoroughly inspected', '彻底检查'], ['visually inspected', '目视检查'], ['equipment inspected', '设备检查']], examples: [['The equipment was inspected yesterday.', '设备昨天已检查。'], ['All units have been inspected.', '所有设备已检查完成。']] },
    ],
    phrases: [
      { p: 'all related equipment', ipa: '/ɔːl rɪˈleɪtɪd ɪˈkwɪpmənt/', cn: '所有相关设备', why: 'all 强调全面性，related 限定范围，确保不遗漏任何关联设备。' },
    ],
    grammar: [
      { q: '为什么 equipment 用 has 而不是 have？', a: 'equipment 是不可数名词，无论指多少设备，动词都用单数形式。\n✅ All equipment has been inspected.（所有设备已检查。）\n❌ All equipment have been inspected.（语法错误。）\n注意：devices 是可数名词，用 have。\n✅ All devices have been inspected.（所有设备已检查。）' },
    ],
    pattern: 'All related + 名词 + has/have been inspected',
    patternExamples: [
      { en: 'All related systems have been inspected.', cn: '所有相关系统已经检查完成。', words: [] },
      { en: 'All related components have been inspected.', cn: '所有相关部件已经检查完成。', words: [] },
      { en: 'All related circuits have been inspected.', cn: '所有相关电路已经检查完成。', words: [] },
    ],
    thinking: 'RCA中报告相关设备已全部检查，证明排查工作全面。\nall related 强调范围覆盖，不留死角。\ninspected 是专业术语，比 checked 更正式。',
    pronunciation: 'related 重音在第二音节：re-LA-ted。\nequipment 重音在第二音节：e-QUIP-ment。\ninspected 重音在第二音节：in-SPEC-ted。\n节奏：All re-LA-ted e-QUIP-ment ｜ has been ｜ in-SPEC-ted.',
    quiz: [
      { q: '把「所有相关设备已经检查完成。」用英语说出来。', a: 'All related equipment has been inspected.' },
      { q: 'equipment 后面用 has 还是 have？', a: 'has（equipment 是不可数名词，动词用单数）' },
    ],
  },
  {
    id: 2223,
    speaker: 'Engineer',
    en: 'Additional functional tests have been completed.',
    cn: '已经完成额外功能测试。',
    ipa: '/əˈdɪʃənəl ˈfʌŋkʃənəl tɛsts hæv bɪn kəmˈpliːtɪd/',
    tags: ['第2223句', '纠正措施', '★★★★★'],
    when: 'RCA会议中报告已完成超出常规范围的额外功能测试，验证修复效果。',
    words: [
      { w: 'additional', ipa: '/əˈdɪʃənəl/', pos: '形容词', cn: '额外的；附加的', memory: 'add(添加)+itional(形容词后缀)→需要添加的→额外的。', phonics: 'ad 读 /ə/，di 读 /dɪ/，tion 读 /ʃə/，al 读 /nəl/，重音在第二音节。', collocations: [['additional tests', '额外测试'], ['additional checks', '额外检查'], ['additional measures', '额外措施']], examples: [['We performed additional tests.', '我们进行了额外测试。'], ['Additional inspections are required.', '需要额外巡检。']] },
      { w: 'functional', ipa: '/ˈfʌŋkʃənəl/', pos: '形容词', cn: '功能的', memory: 'function(功能)+al(形容词后缀)→与功能有关的。', phonics: 'func 读 /fʌŋk/，tion 读 /ʃə/，al 读 /nəl/，重音在第一音节。', collocations: [['functional test', '功能测试'], ['functional check', '功能检查'], ['fully functional', '功能完全正常']], examples: [['The functional test passed.', '功能测试通过了。'], ['Is the system fully functional?', '系统功能完全正常吗？']] },
    ],
    phrases: [
      { p: 'additional functional tests', ipa: '/əˈdɪʃənəl ˈfʌŋkʃənəl tɛsts/', cn: '额外功能测试', why: 'additional 说明超出常规测试范围，functional 说明测试的是功能层面。' },
    ],
    grammar: [
      { q: '为什么用 have been completed 而不是 has been completed？', a: 'tests 是可数名词复数，所以动词用 have。\n✅ Additional tests have been completed.（额外测试已完成。）\n✅ Additional testing has been completed.（额外测试工作已完成。）—— testing 不可数用 has\n注意区分 tests（可数）和 testing（不可数）。' },
    ],
    pattern: 'Additional + 名词 + have/has been completed',
    patternExamples: [
      { en: 'Additional inspections have been completed.', cn: '额外巡检已经完成。', words: [] },
      { en: 'Additional verification has been completed.', cn: '额外验证已经完成。', words: [] },
      { en: 'Additional checks have been completed.', cn: '额外检查已经完成。', words: [] },
    ],
    thinking: 'RCA中强调「额外」测试，说明不只是常规检查，而是针对性地增加了验证。\nfunctional tests 特指功能层面的测试，确保设备功能正常。\n这体现了CAPA的严谨性——不仅修复，还要验证。',
    pronunciation: 'additional 重音在第二音节：ad-DI-tio-nal。\nfunctional 重音在第一音节：FUNC-tio-nal。\n节奏：ad-DI-tio-nal FUNC-tio-nal TESTS ｜ have been ｜ com-PLE-ted.',
    quiz: [
      { q: '把「已经完成额外功能测试。」用英语说出来。', a: 'Additional functional tests have been completed.' },
      { q: 'tests 后面用 have 还是 has？', a: 'have（tests 是可数名词复数，动词用复数）' },
    ],
  },
  {
    id: 2224,
    speaker: 'Engineer',
    en: 'The repair has been verified successfully.',
    cn: '维修结果已经验证成功。',
    ipa: '/ðə rɪˈpɛr hæz bɪn ˈvɛrɪfaɪd səkˈsɛsfəli/',
    tags: ['第2224句', '纠正措施', '★★★★★'],
    when: 'RCA会议中报告维修工作已通过验证，确认修复有效。',
    words: [
      { w: 'repair', ipa: '/rɪˈpɛr/', pos: '名词', cn: '维修；修理', memory: 're(再)+pair(配对)→重新配对好→修复。', phonics: 're 读 /rɪ/，pair 读 /pɛr/，重音在第二音节。', collocations: [['repair work', '维修工作'], ['emergency repair', '紧急维修'], ['preventive repair', '预防性维修']], examples: [['The repair was successful.', '维修成功了。'], ['We need to schedule a repair.', '我们需要安排维修。']] },
      { w: 'verified', ipa: '/ˈvɛrɪfaɪd/', pos: '动词（过去分词）', cn: '验证；核实', memory: 'veri(真实)+fy(使)→使之真实→验证。', phonics: 'ver 读 /vɛr/，i 读 /ɪ/，fy 读 /faɪ/，重音在第一音节。', collocations: [['verified successfully', '验证成功'], ['independently verified', '独立验证'], ['verified by testing', '通过测试验证']], examples: [['The fix has been verified.', '修复已验证。'], ['Results were verified by a third party.', '结果由第三方验证。']] },
    ],
    phrases: [
      { p: 'verified successfully', ipa: '/ˈvɛrɪfaɪd səkˈsɛsfəli/', cn: '验证成功', why: 'successfully 修饰 verified，明确验证的结果是正面的。' },
    ],
    grammar: [
      { q: 'verified 和 confirmed 有什么区别？', a: 'verified 侧重通过测试或证据「验证」某事是否正确/有效。\nconfirmed 侧重「确认」某个事实或状态。\n✅ The repair has been verified.（维修已验证。）—— 通过测试证明有效\n✅ The repair has been confirmed.（维修已确认。）—— 确认维修已完成\nRCA中用 verified 更精确，因为强调的是通过测试验证效果。' },
    ],
    pattern: 'The + 名词 + has been verified successfully',
    patternExamples: [
      { en: 'The replacement has been verified successfully.', cn: '更换工作已经验证成功。', words: [] },
      { en: 'The calibration has been verified successfully.', cn: '校准结果已经验证成功。', words: [] },
      { en: 'The fix has been verified successfully.', cn: '修复方案已经验证成功。', words: [] },
    ],
    thinking: '维修不等于结束，验证才是闭环。\nverified 在CAPA中非常关键——证明修复确实有效。\nsuccessfully 明确给出验证结论，不含糊。',
    pronunciation: 'repair 重音在第二音节：re-PAIR。\nverified 重音在第一音节：VER-i-fied。\nsuccessfully 重音在第二音节：suc-CESS-ful-ly。\n节奏：The re-PAIR ｜ has been VER-i-fied ｜ suc-CESS-ful-ly.',
    quiz: [
      { q: '把「维修结果已经验证成功。」用英语说出来。', a: 'The repair has been verified successfully.' },
      { q: 'verified 和 confirmed 哪个更适合用于「通过测试验证维修效果」？', a: 'verified（侧重通过测试或证据验证有效性）' },
    ],
  },
  {
    id: 2225,
    speaker: 'Manager',
    en: 'Preventive actions have been developed.',
    cn: '预防措施已经制定。',
    ipa: '/prɪˈvɛntɪv ˈækʃənz hæv bɪn dɪˈvɛləpt/',
    tags: ['第2225句', '预防措施', '★★★★★'],
    when: 'RCA会议中进入预防措施环节，报告预防措施方案已制定完成。',
    words: [
      { w: 'preventive', ipa: '/prɪˈvɛntɪv/', pos: '形容词', cn: '预防性的', memory: 'prevent(预防)+ive(形容词后缀)→用来预防的。', phonics: 'pre 读 /prɪ/，ven 读 /vɛn/，tive 读 /tɪv/，重音在第二音节。', collocations: [['preventive actions', '预防措施'], ['preventive maintenance', '预防性维护'], ['preventive measures', '预防措施']], examples: [['Preventive actions are essential.', '预防措施至关重要。'], ['We follow a preventive maintenance schedule.', '我们遵循预防性维护计划。']] },
      { w: 'developed', ipa: '/dɪˈvɛləpt/', pos: '动词（过去分词）', cn: '制定；开发', memory: 'de(向下)+velop(展开)→展开来→开发制定。', phonics: 'de 读 /dɪ/，vel 读 /vɛl/，op 读 /əp/，重音在第二音节。', collocations: [['actions developed', '措施已制定'], ['plan developed', '计划已制定'], ['procedure developed', '流程已制定']], examples: [['A new plan has been developed.', '新计划已制定。'], ['The procedure was developed last year.', '该流程去年制定的。']] },
    ],
    phrases: [
      { p: 'Preventive actions', ipa: '/prɪˈvɛntɪv ˈækʃənz/', cn: '预防措施', why: 'CAPA 中的 PA (Preventive Actions)，与 CA (Corrective Actions) 对应，防止问题再次发生。' },
    ],
    grammar: [
      { q: 'corrective actions 和 preventive actions 有什么区别？', a: 'corrective actions（纠正措施）= 修复已经发生的问题。\npreventive actions（预防措施）= 防止问题再次发生。\n✅ Corrective: replaced the faulty sensor.（纠正：更换了故障传感器。）\n✅ Preventive: added monthly sensor inspections.（预防：增加每月传感器巡检。）\nCAPA = Corrective And Preventive Actions，两者缺一不可。' },
    ],
    pattern: 'Preventive actions have been + 过去分词',
    patternExamples: [
      { en: 'Preventive actions have been planned.', cn: '预防措施已经规划。', words: [] },
      { en: 'Preventive actions have been approved.', cn: '预防措施已经批准。', words: [] },
      { en: 'Preventive actions have been scheduled.', cn: '预防措施已经安排时间。', words: [] },
    ],
    thinking: 'CAPA 的核心：不仅要纠正（修复），还要预防（防止再发）。\ndeveloped 说明方案已经制定好了，下一步是执行。\n这是从 reactive（被动应对）到 proactive（主动预防）的转变。',
    pronunciation: 'preventive 重音在第二音节：pre-VEN-tive。\nactions 重音在第一音节：AC-tions。\ndeveloped 重音在第二音节：de-VE-loped。\n节奏：pre-VEN-tive AC-tions ｜ have been ｜ de-VE-loped.',
    quiz: [
      { q: '把「预防措施已经制定。」用英语说出来。', a: 'Preventive actions have been developed.' },
      { q: 'CAPA 的全称是什么？', a: 'Corrective And Preventive Actions（纠正与预防措施）' },
    ],
  },
  {
    id: 2226,
    speaker: 'Manager',
    en: 'We will update the maintenance procedure.',
    cn: '我们将更新维护流程。',
    ipa: '/wiː wɪl ˈʌpdeɪt ðə ˈmeɪntənəns prəˈsiːdʒər/',
    tags: ['第2226句', '预防措施', '★★★★★'],
    when: 'RCA会议中宣布将更新维护流程作为预防措施之一。',
    words: [
      { w: 'update', ipa: '/ˈʌpdeɪt/', pos: '动词', cn: '更新；修订', memory: 'up(向上)+date(日期)→使日期更新→更新到最新版本。', phonics: 'up 读 /ʌp/，date 读 /deɪt/，重音在第一音节。', collocations: [['update the procedure', '更新流程'], ['update the manual', '更新手册'], ['update the checklist', '更新检查清单']], examples: [['We need to update the SOP.', '我们需要更新SOP。'], ['The procedure was updated last month.', '流程上月已更新。']] },
      { w: 'procedure', ipa: '/prəˈsiːdʒər/', pos: '名词', cn: '流程；程序', memory: 'proceed(前进)+ure(名词后缀)→前进的步骤→流程。', phonics: 'pro 读 /prə/，ce 读 /siː/，dure 读 /dʒər/，重音在第二音节。', collocations: [['maintenance procedure', '维护流程'], ['operating procedure', '操作流程'], ['emergency procedure', '应急流程']], examples: [['Follow the standard procedure.', '遵循标准流程。'], ['The procedure needs revision.', '流程需要修订。']] },
    ],
    phrases: [
      { p: 'maintenance procedure', ipa: '/ˈmeɪntənəns prəˈsiːdʒər/', cn: '维护流程', why: 'maintenance 修饰 procedure，明确是维护保养方面的操作流程。' },
    ],
    grammar: [
      { q: 'update 和 revise 有什么区别？', a: 'update = 更新，通常指加入新信息、修改旧内容使之跟上最新状态。\nrevise = 修订，通常指对整体内容进行审查和修改。\n✅ Update the procedure with new steps.（更新流程，加入新步骤。）\n✅ Revise the entire procedure.（修订整个流程。）\n两者在CAPA中常交替使用，update 更侧重局部更新。' },
    ],
    pattern: 'We will update the + 名词',
    patternExamples: [
      { en: 'We will update the operating manual.', cn: '我们将更新操作手册。', words: [] },
      { en: 'We will update the emergency plan.', cn: '我们将更新应急预案。', words: [] },
      { en: 'We will update the inspection checklist.', cn: '我们将更新巡检清单。', words: [] },
    ],
    thinking: '更新维护流程是最常见的预防措施之一。\n目的是把此次事件的经验教训写入流程，防止同样的问题再发生。\nwill update 用将来时，说明这是计划中的行动。',
    pronunciation: 'update 重音在第一音节：UP-date。\nmaintenance 重音在第一音节：MAIN-te-nance。\nprocedure 重音在第二音节：pro-CE-dure。\n节奏：We will UP-date ｜ the MAIN-te-nance ｜ pro-CE-dure.',
    quiz: [
      { q: '把「我们将更新维护流程。」用英语说出来。', a: 'We will update the maintenance procedure.' },
      { q: '「维护流程」用英语怎么说？', a: 'maintenance procedure (/ˈmeɪntənəns prəˈsiːdʒər/)' },
    ],
  },
  {
    id: 2227,
    speaker: 'Manager',
    en: 'We will revise the operating procedure.',
    cn: '我们将修订操作流程。',
    ipa: '/wiː wɪl rɪˈvaɪz ðə ˈɑpəˌreɪtɪŋ prəˈsiːdʒər/',
    tags: ['第2227句', '预防措施', '★★★★★'],
    when: 'RCA会议中宣布将修订操作流程，纳入此次事件的经验教训。',
    words: [
      { w: 'revise', ipa: '/rɪˈvaɪz/', pos: '动词', cn: '修订；修改', memory: 're(再)+vise(看)→再看一遍→修订。', phonics: 're 读 /rɪ/，vise 读 /vaɪz/，重音在第二音节。', collocations: [['revise the procedure', '修订流程'], ['revise the plan', '修订计划'], ['revise the SOP', '修订SOP']], examples: [['The SOP needs to be revised.', 'SOP需要修订。'], ['We revised the procedure after the incident.', '事件后我们修订了流程。']] },
      { w: 'operating', ipa: '/ˈɑpəˌreɪtɪŋ/', pos: '形容词（现在分词）', cn: '操作的；运营的', memory: 'operate(操作)+ing→正在操作的→操作性的。', phonics: 'op 读 /ɑp/，er 读 /ə/，ating 读 /reɪtɪŋ/，重音在第一音节。', collocations: [['operating procedure', '操作流程'], ['operating manual', '操作手册'], ['standard operating procedure (SOP)', '标准操作流程']], examples: [['Follow the operating procedure.', '遵循操作流程。'], ['The operating manual is on the shelf.', '操作手册在架子上。']] },
    ],
    phrases: [
      { p: 'operating procedure', ipa: '/ˈɑpəˌreɪtɪŋ prəˈsiːdʒər/', cn: '操作流程', why: 'operating 修饰 procedure，明确是日常操作方面的流程，区别于 maintenance procedure。' },
    ],
    grammar: [
      { q: 'SOP 的全称是什么？', a: 'SOP = Standard Operating Procedure（标准操作流程）。\n这是数据中心运维中最常见的缩写之一。\n✅ Please follow the SOP.（请遵循SOP。）\n✅ The SOP needs to be revised.（SOP需要修订。）\nRCA会议中常提到「修订SOP」作为预防措施。' },
    ],
    pattern: 'We will revise the + 名词',
    patternExamples: [
      { en: 'We will revise the safety guidelines.', cn: '我们将修订安全指南。', words: [] },
      { en: 'We will revise the emergency response plan.', cn: '我们将修订应急响应计划。', words: [] },
      { en: 'We will revise the shift handover procedure.', cn: '我们将修订交接班流程。', words: [] },
    ],
    thinking: '修订操作流程是将经验教训制度化的关键步骤。\nrevise 比 update 更强调全面审查修改。\noperating procedure（操作流程）vs maintenance procedure（维护流程）——两者是不同层面的文件。',
    pronunciation: 'revise 重音在第二音节：re-VISE。\noperating 重音在第一音节：OP-er-a-ting。\n节奏：We will re-VISE ｜ the OP-er-a-ting ｜ pro-CE-dure.',
    quiz: [
      { q: '把「我们将修订操作流程。」用英语说出来。', a: 'We will revise the operating procedure.' },
      { q: 'SOP 的全称是什么？', a: 'Standard Operating Procedure（标准操作流程）' },
    ],
  },
  {
    id: 2228,
    speaker: 'Manager',
    en: 'Additional inspections will be added.',
    cn: '将增加额外巡检项目。',
    ipa: '/əˈdɪʃənəl ɪnˈspɛkʃənz wɪl bɪ ˈædɪd/',
    tags: ['第2228句', '预防措施', '★★★★★'],
    when: 'RCA会议中宣布将增加巡检项目作为预防措施，更早发现潜在问题。',
    words: [
      { w: 'inspections', ipa: '/ɪnˈspɛkʃənz/', pos: '名词（复数）', cn: '巡检；检查', memory: 'inspect(检查)+ions(名词复数)→多次检查→巡检项目。', phonics: 'in 读 /ɪn/，spec 读 /spɛk/，tions 读 /ʃənz/，重音在第二音节。', collocations: [['routine inspections', '常规巡检'], ['additional inspections', '额外巡检'], ['daily inspections', '每日巡检']], examples: [['We conduct daily inspections.', '我们进行每日巡检。'], ['Additional inspections are needed.', '需要额外巡检。']] },
      { w: 'added', ipa: '/ˈædɪd/', pos: '动词（过去分词）', cn: '增加；添加', memory: 'add(加)+ed→已被添加。', phonics: 'add 读 /æd/，重音在第一音节。', collocations: [['inspections added', '巡检已增加'], ['items added', '项目已添加'], ['checks added', '检查已增加']], examples: [['New inspections were added to the schedule.', '新巡检已加入计划。'], ['We added extra checks.', '我们增加了额外检查。']] },
    ],
    phrases: [
      { p: 'Additional inspections', ipa: '/əˈdɪʃənəl ɪnˈspɛkʃənz/', cn: '额外巡检', why: '在现有巡检基础上增加新的检查项目，提高问题发现的及时性。' },
    ],
    grammar: [
      { q: '为什么用 will be added（被动）而不是 will add（主动）？', a: '用被动语态 will be added 强调「巡检项目将被增加」这一结果，不关注谁来增加。\n✅ Additional inspections will be added.（额外巡检将被增加。）—— 强调结果\n✅ We will add additional inspections.（我们将增加额外巡检。）—— 强调执行者\n两种都可以，RCA报告中常用被动语态强调措施本身。' },
    ],
    pattern: 'Additional + 名词 + will be added',
    patternExamples: [
      { en: 'Additional checks will be added.', cn: '将增加额外检查。', words: [] },
      { en: 'Additional monitoring will be added.', cn: '将增加额外监控。', words: [] },
      { en: 'Additional testing will be added.', cn: '将增加额外测试。', words: [] },
    ],
    thinking: '增加巡检是最直接的预防措施之一。\n通过更频繁或更细致的检查，可以在问题变严重之前发现它。\nwill be added 被动语态聚焦在措施本身。',
    pronunciation: 'inspections 重音在第二音节：in-SPEC-tions。\nadded 重音在第一音节：AD-ded。\n节奏：ad-DI-tio-nal in-SPEC-tions ｜ will be ｜ AD-ded.',
    quiz: [
      { q: '把「将增加额外巡检项目。」用英语说出来。', a: 'Additional inspections will be added.' },
      { q: 'will be added 是什么语态？', a: '将来时被动语态（强调措施本身，不关注执行者）' },
    ],
  },
  {
    id: 2229,
    speaker: 'Manager',
    en: 'Additional training will be provided.',
    cn: '将增加相关培训。',
    ipa: '/əˈdɪʃənəl ˈtreɪnɪŋ wɪl bɪ prəˈvaɪdɪd/',
    tags: ['第2229句', '预防措施', '★★★★★'],
    when: 'RCA会议中宣布将增加培训，提升团队对相关风险的识别和处置能力。',
    words: [
      { w: 'training', ipa: '/ˈtreɪnɪŋ/', pos: '名词', cn: '培训；训练', memory: 'train(训练)+ing→训练的过程→培训。', phonics: 'train 读 /treɪn/，ing 读 /ɪŋ/，重音在第一音节。', collocations: [['additional training', '额外培训'], ['safety training', '安全培训'], ['technical training', '技术培训']], examples: [['Training will be scheduled next week.', '培训将安排在下周。'], ['All staff must complete safety training.', '所有员工必须完成安全培训。']] },
      { w: 'provided', ipa: '/prəˈvaɪdɪd/', pos: '动词（过去分词）', cn: '提供', memory: 'pro(提前)+vide(看)→提前看到需求→提供。', phonics: 'pro 读 /prə/，vide 读 /vaɪd/，重音在第二音节。', collocations: [['training provided', '培训已提供'], ['resources provided', '资源已提供'], ['support provided', '支持已提供']], examples: [['Training was provided to all engineers.', '已为所有工程师提供培训。'], ['Adequate resources will be provided.', '将提供充足的资源。']] },
    ],
    phrases: [
      { p: 'training will be provided', ipa: '/ˈtreɪnɪŋ wɪl bɪ prəˈvaɪdɪd/', cn: '将提供培训', why: '被动语态强调培训将被安排，不关注谁提供。' },
    ],
    grammar: [
      { q: '为什么 training 用 will be provided 而不是 will provide？', a: 'training 是接受动作的对象（培训被提供），所以用被动语态。\n✅ Training will be provided.（培训将被提供。）—— 被动\n✅ We will provide training.（我们将提供培训。）—— 主动\n主语是 training 时必须用被动语态。' },
    ],
    pattern: 'Additional + 名词 + will be provided',
    patternExamples: [
      { en: 'Additional resources will be provided.', cn: '将提供额外资源。', words: [] },
      { en: 'Additional support will be provided.', cn: '将提供额外支持。', words: [] },
      { en: 'Additional guidance will be provided.', cn: '将提供额外指导。', words: [] },
    ],
    thinking: '培训是CAPA中非常重要的预防措施。\n当人为因素导致事件时，培训就是最有效的预防手段。\nwill be provided 表示这是组织层面承诺提供的资源。',
    pronunciation: 'training 重音在第一音节：TRAIN-ing。\nprovided 重音在第二音节：pro-VI-ded。\n节奏：ad-DI-tio-nal TRAIN-ing ｜ will be ｜ pro-VI-ded.',
    quiz: [
      { q: '把「将增加相关培训。」用英语说出来。', a: 'Additional training will be provided.' },
      { q: 'training 后面用 will be provided 还是 will provide？', a: 'will be provided（training 是接受动作的对象，用被动语态）' },
    ],
  },
  {
    id: 2230,
    speaker: 'Manager',
    en: 'We will improve our monitoring process.',
    cn: '我们将优化监控流程。',
    ipa: '/wiː wɪl ɪmˈpruːv aʊər ˈmɑnɪtərɪŋ ˈprɑsɛs/',
    tags: ['第2230句', '预防措施', '★★★★★'],
    when: 'RCA会议中宣布将优化监控流程，提升告警发现和响应的及时性。',
    words: [
      { w: 'improve', ipa: '/ɪmˈpruːv/', pos: '动词', cn: '改进；优化', memory: 'im(进入)+prove(证明好的)→使之变好→改进。', phonics: 'im 读 /ɪm/，prove 读 /pruːv/，重音在第二音节。', collocations: [['improve the process', '优化流程'], ['improve efficiency', '提高效率'], ['continuously improve', '持续改进']], examples: [['We need to improve our response time.', '我们需要改善响应时间。'], ['The process has been improved.', '流程已优化。']] },
      { w: 'monitoring', ipa: '/ˈmɑnɪtərɪŋ/', pos: '名词/形容词', cn: '监控', memory: 'monitor(监控)+ing→监控的过程/行为。', phonics: 'mon 读 /mɑn/，i 读 /ɪ/，tor 读 /tər/，重音在第一音节。', collocations: [['monitoring process', '监控流程'], ['monitoring system', '监控系统'], ['real-time monitoring', '实时监控']], examples: [['Our monitoring process needs improvement.', '我们的监控流程需要改进。'], ['The monitoring system detected the alarm.', '监控系统检测到告警。']] },
    ],
    phrases: [
      { p: 'monitoring process', ipa: '/ˈmɑnɪtərɪŋ ˈprɑsɛs/', cn: '监控流程', why: 'monitoring 修饰 process，明确是关于监控方面的流程优化。' },
    ],
    grammar: [
      { q: 'improve 和 optimize 有什么区别？', a: 'improve = 改进，含义更广，任何变好都算改进。\noptimize = 优化，更精确，指使之达到最优状态。\n✅ We will improve our process.（我们将改进流程。）—— 通用\n✅ We will optimize our process.（我们将优化流程。）—— 更精确\n日常汇报用 improve 更自然，技术文档中可用 optimize。' },
    ],
    pattern: 'We will improve our + 名词',
    patternExamples: [
      { en: 'We will improve our response time.', cn: '我们将改善响应时间。', words: [] },
      { en: 'We will improve our alarm management.', cn: '我们将改进告警管理。', words: [] },
      { en: 'We will improve our communication process.', cn: '我们将改善沟通流程。', words: [] },
    ],
    thinking: '监控流程优化是事件后常见的预防措施。\n可能包括：缩短告警检测时间、增加监控覆盖范围、优化告警阈值等。\nimprove 是最通用的改进动词，适合各种场景。',
    pronunciation: 'improve 重音在第二音节：im-PROVE。\nmonitoring 重音在第一音节：MON-i-to-ring。\n节奏：We will im-PROVE ｜ our MON-i-to-ring ｜ PRO-cess.',
    quiz: [
      { q: '把「我们将优化监控流程。」用英语说出来。', a: 'We will improve our monitoring process.' },
      { q: 'improve 和 optimize 哪个更通用？', a: 'improve（任何变好都算改进，optimize 更精确指达到最优）' },
    ],
  },
  {
    id: 2231,
    speaker: 'Manager',
    en: 'Similar equipment will be inspected this week.',
    cn: '本周将检查所有同类型设备。',
    ipa: '/ˈsɪmɪlər ɪˈkwɪpmənt wɪl bɪ ɪnˈspɛktɪd ðɪs wiːk/',
    tags: ['第2231句', '预防措施', '★★★★★'],
    when: 'RCA会议中宣布将对同类型设备进行全面排查，确保没有其他设备存在相同隐患。',
    words: [
      { w: 'similar', ipa: '/ˈsɪmɪlər/', pos: '形容词', cn: '类似的；同类型的', memory: 'simil(相同)+ar(形容词后缀)→有相同特征的→类似的。', phonics: 'si 读 /sɪ/，mi 读 /mɪ/，lar 读 /lər/，重音在第一音节。', collocations: [['similar equipment', '同类型设备'], ['similar issues', '类似问题'], ['similar conditions', '类似条件']], examples: [['Check all similar equipment.', '检查所有同类型设备。'], ['Similar incidents have occurred before.', '以前发生过类似事件。']] },
    ],
    phrases: [
      { p: 'similar equipment', ipa: '/ˈsɪmɪlər ɪˈkwɪpmənt/', cn: '同类型设备', why: 'similar 限定范围——不是所有设备，而是与故障设备同型号/同批次的设备。' },
      { p: 'this week', ipa: '/ðɪs wiːk/', cn: '本周', why: '明确时间节点，给出执行期限，体现计划的严肃性。' },
    ],
    grammar: [
      { q: '为什么用 will be inspected 而不是 will inspect？', a: 'equipment 是接受检查的对象，所以用被动语态。\n✅ Similar equipment will be inspected.（同类型设备将被检查。）—— 被动\n✅ We will inspect similar equipment.（我们将检查同类型设备。）—— 主动\n主语是 equipment 时必须用被动语态。' },
    ],
    pattern: 'Similar + 名词 + will be inspected + 时间',
    patternExamples: [
      { en: 'Similar units will be inspected this month.', cn: '本月将检查同类型设备。', words: [] },
      { en: 'Similar systems will be inspected next week.', cn: '下周将检查同类型系统。', words: [] },
      { en: 'Similar components will be inspected immediately.', cn: '将立即检查同类型部件。', words: [] },
    ],
    thinking: '排查同类型设备是CAPA中的标准预防措施。\n如果一台设备的传感器故障了，同批次其他设备的传感器也可能有同样问题。\nthis week 给出明确的时间承诺。',
    pronunciation: 'similar 重音在第一音节：SI-mi-lar。\nequipment 重音在第二音节：e-QUIP-ment。\n节奏：SI-mi-lar e-QUIP-ment ｜ will be ｜ in-SPEC-ted ｜ this WEEK.',
    quiz: [
      { q: '把「本周将检查所有同类型设备。」用英语说出来。', a: 'Similar equipment will be inspected this week.' },
      { q: '「同类型设备」用英语怎么说？', a: 'similar equipment (/ˈsɪmɪlər ɪˈkwɪpmənt/)' },
    ],
  },
  {
    id: 2232,
    speaker: 'Manager',
    en: 'Spare parts will be increased.',
    cn: '将增加关键备件库存。',
    ipa: '/spɛr pɑːrts wɪl bɪ ɪnˈkriːst/',
    tags: ['第2232句', '预防措施', '★★★★★'],
    when: 'RCA会议中宣布将增加备件库存，避免因缺件导致维修延迟。',
    words: [
      { w: 'spare parts', ipa: '/spɛr pɑːrts/', pos: '名词短语', cn: '备件；零配件', memory: 'spare(备用的)+parts(零件)→备用的零件→备件。', phonics: 'spare 读 /spɛr/，parts 读 /pɑːrts/', collocations: [['spare parts inventory', '备件库存'], ['critical spare parts', '关键备件'], ['spare parts management', '备件管理']], examples: [['We need more spare parts.', '我们需要更多备件。'], ['The spare parts are in the warehouse.', '备件在仓库里。']] },
      { w: 'increased', ipa: '/ɪnˈkriːst/', pos: '动词（过去分词）', cn: '增加；提高', memory: 'in(向内)+crease(生长)→向内生长→增加。', phonics: 'in 读 /ɪn/，crease 读 /kriːs/，重音在第二音节。', collocations: [['inventory increased', '库存已增加'], ['capacity increased', '容量已增加'], ['budget increased', '预算已增加']], examples: [['The stock has been increased.', '库存已增加。'], ['We increased the spare parts budget.', '我们增加了备件预算。']] },
    ],
    phrases: [
      { p: 'Spare parts will be increased', ipa: '/spɛr pɑːrts wɪl bɪ ɪnˈkriːst/', cn: '备件将增加', why: '增加备件库存数量，确保关键备件不会缺货。' },
    ],
    grammar: [
      { q: 'will be increased 的主动语态怎么说？', a: '主动语态：We will increase spare parts.\n被动语态：Spare parts will be increased.\n✅ We will increase spare parts inventory.（我们将增加备件库存。）—— 主动\n✅ Spare parts inventory will be increased.（备件库存将增加。）—— 被动\nRCA报告中常用被动语态，聚焦措施本身。' },
    ],
    pattern: 'Spare parts + will be + 过去分词',
    patternExamples: [
      { en: 'Spare parts will be ordered immediately.', cn: '备件将立即订购。', words: [] },
      { en: 'Spare parts will be stocked in the warehouse.', cn: '备件将存放在仓库中。', words: [] },
      { en: 'Spare parts will be reviewed quarterly.', cn: '备件将每季度审查一次。', words: [] },
    ],
    thinking: '备件不足是导致维修延迟的常见原因。\n增加备件库存可以从根本上解决「等件」问题。\n这是CAPA中物资保障层面的预防措施。',
    pronunciation: 'spare 读 /spɛr/，parts 读 /pɑːrts/。\nincreased 重音在第二音节：in-CREASED。\n节奏：SPARE PARTS ｜ will be ｜ in-CREASED.',
    quiz: [
      { q: '把「将增加关键备件库存。」用英语说出来。', a: 'Spare parts will be increased.' },
      { q: '「备件」用英语怎么说？', a: 'spare parts (/spɛr pɑːrts/)' },
    ],
  },
  {
    id: 2233,
    speaker: 'Manager',
    en: 'We sincerely apologize for this incident.',
    cn: '我们对此次事件深表歉意。',
    ipa: '/wiː sɪnˈsɪrli ˈɑpəˌlaɪz fər ðɪs ˈɪnsɪdənt/',
    tags: ['第2233句', '客户沟通', '★★★★★'],
    when: 'RCA会议中向客户方表达诚挚的歉意，体现服务提供方的责任担当。',
    words: [
      { w: 'sincerely', ipa: '/sɪnˈsɪrli/', pos: '副词', cn: '真诚地；诚挚地', memory: 'sincere(真诚的)+ly(副词后缀)→真诚地。', phonics: 'sin 读 /sɪn/，cere 读 /sɪr/，ly 读 /li/，重音在第二音节。', collocations: [['sincerely apologize', '真诚道歉'], ['sincerely hope', '真诚希望'], ['sincerely believe', '真诚相信']], examples: [['We sincerely apologize for the delay.', '我们对延误深表歉意。'], ['I sincerely appreciate your help.', '我真诚感谢您的帮助。']] },
      { w: 'apologize', ipa: '/ˈɑpəˌlaɪz/', pos: '动词', cn: '道歉', memory: 'apo(离开)+log(言语)+ize→用言语化解→道歉。', phonics: 'a 读 /ɑ/，po 读 /pə/，lo 读 /laɪ/，gize 读 /z/，重音在第一音节。', collocations: [['apologize for', '为…道歉'], ['sincerely apologize', '真诚道歉'], ['formally apologize', '正式道歉']], examples: [['We apologize for the inconvenience.', '我们对不便表示歉意。'], ['I apologize for the delay.', '我对延误表示歉意。']] },
    ],
    phrases: [
      { p: 'sincerely apologize', ipa: '/sɪnˈsɪrly ˈɑpəˌlaɪz/', cn: '深表歉意', why: 'sincerely 加强道歉的诚意，比单独 apologize 更正式、更诚恳。' },
      { p: 'for this incident', ipa: '/fər ðɪs ˈɪnsɪdənt/', cn: '对此次事件', why: 'for 引出道歉的原因，明确是对此次事件道歉。' },
    ],
    grammar: [
      { q: 'apologize 和 sorry 有什么区别？', a: 'apologize 是正式动词，用于书面和正式场合。\nsorry 是口语化表达，用于日常对话。\n✅ We sincerely apologize for this incident.（我们对此次事件深表歉意。）—— 正式\n✅ We are sorry about what happened.（我们对发生的事感到抱歉。）—— 口语\nRCA会议中必须用 apologize，不用 sorry。' },
    ],
    pattern: 'We sincerely apologize for + 事件/原因',
    patternExamples: [
      { en: 'We sincerely apologize for the service interruption.', cn: '我们对服务中断深表歉意。', words: [] },
      { en: 'We sincerely apologize for the inconvenience caused.', cn: '我们对造成的不便深表歉意。', words: [] },
      { en: 'We sincerely apologize for the delay in response.', cn: '我们对响应延迟深表歉意。', words: [] },
    ],
    thinking: '向客户道歉是RCA会议中客户沟通环节的必要步骤。\nsincerely 表达诚意，apologize 是正式用语。\n不回避问题，直接面对，体现专业和担当。',
    pronunciation: 'sincerely 重音在第二音节：sin-CERE-ly。\napologize 重音在第一音节：A-po-lo-gize。\n节奏：We sin-CERE-ly ｜ A-po-lo-gize ｜ for this IN-ci-dent.',
    quiz: [
      { q: '把「我们对此次事件深表歉意。」用英语说出来。', a: 'We sincerely apologize for this incident.' },
      { q: 'RCA会议中道歉用 apologize 还是 sorry？', a: 'apologize（正式用语，适合书面和正式场合）' },
    ],
  },
  {
    id: 2234,
    speaker: 'Manager',
    en: 'We appreciate your patience and understanding.',
    cn: '感谢您的耐心与理解。',
    ipa: '/wiː əˈpriːʃieɪt jɔːr ˈpeɪʃəns ənd ˌʌndərˈstændɪŋ/',
    tags: ['第2234句', '客户沟通', '★★★★★'],
    when: 'RCA会议中感谢客户在事件期间的耐心等待与理解配合。',
    words: [
      { w: 'appreciate', ipa: '/əˈpriːʃieɪt/', pos: '动词', cn: '感谢；感激', memory: 'ap(朝向)+preci(价值)+ate→认识到价值→感激。', phonics: 'ap 读 /ə/，pre 读 /priː/，ci 读 /ʃi/，ate 读 /eɪt/，重音在第二音节。', collocations: [['appreciate your patience', '感谢您的耐心'], ['greatly appreciate', '非常感谢'], ['appreciate your support', '感谢您的支持']], examples: [['We appreciate your cooperation.', '感谢您的配合。'], ['I appreciate your feedback.', '感谢您的反馈。']] },
      { w: 'patience', ipa: '/ˈpeɪʃəns/', pos: '名词', cn: '耐心', memory: 'patient(耐心的)+ce(名词后缀)→耐心的品质→耐心。', phonics: 'pa 读 /peɪ/，tien 读 /ʃəns/，重音在第一音节。', collocations: [['patience and understanding', '耐心与理解'], ['thank you for your patience', '感谢您的耐心'], ['with patience', '耐心地']], examples: [['Thank you for your patience.', '感谢您的耐心。'], ['We appreciate your patience during this time.', '感谢您在此期间的耐心。']] },
    ],
    phrases: [
      { p: 'patience and understanding', ipa: '/ˈpeɪʃəns ənd ˌʌndərˈstændɪŋ/', cn: '耐心与理解', why: '固定搭配，常用于服务方感谢客户在问题期间的包容。' },
    ],
    grammar: [
      { q: 'appreciate 和 thank 有什么区别？', a: 'appreciate = 感激/珍视，强调内心的重视和认可。\nthank = 感谢，更直接的表达谢意。\n✅ We appreciate your patience.（我们感激您的耐心。）—— 强调内心重视\n✅ Thank you for your patience.（感谢您的耐心。）—— 直接致谢\n两者可以互换，但 appreciate 更正式、更有深度。' },
    ],
    pattern: 'We appreciate your + 名词 + and + 名词',
    patternExamples: [
      { en: 'We appreciate your trust and support.', cn: '感谢您的信任与支持。', words: [] },
      { en: 'We appreciate your cooperation and flexibility.', cn: '感谢您的配合与灵活性。', words: [] },
      { en: 'We appreciate your feedback and suggestions.', cn: '感谢您的反馈与建议。', words: [] },
    ],
    thinking: '感谢客户的耐心和理解是危机沟通的标准话术。\n它承认了客户在事件中经历了不便，同时感谢他们的包容。\nappreciate 比 thank 更正式，更适合商务场景。',
    pronunciation: 'appreciate 重音在第二音节：ap-PRE-ci-ate。\npatience 重音在第一音节：PA-tience。\nunderstanding 重音在第三音节：un-der-STAND-ing。\n节奏：We ap-PRE-ci-ate ｜ your PA-tience ｜ and un-der-STAND-ing.',
    quiz: [
      { q: '把「感谢您的耐心与理解。」用英语说出来。', a: 'We appreciate your patience and understanding.' },
      { q: 'appreciate 和 thank 哪个更正式？', a: 'appreciate（更正式，强调内心的重视和认可）' },
    ],
  },
  {
    id: 2235,
    speaker: 'Manager',
    en: 'We are committed to preventing similar incidents.',
    cn: '我们致力于防止类似事件再次发生。',
    ipa: '/wiː ɑːr kəˈmɪtɪd tə prɪˈvɛntɪŋ ˈsɪmɪlər ˈɪnsɪdənts/',
    tags: ['第2235句', '客户沟通', '★★★★★'],
    when: 'RCA会议中向客户承诺将全力防止类似事件再次发生。',
    words: [
      { w: 'committed', ipa: '/kəˈmɪtɪd/', pos: '形容词（过去分词）', cn: '致力于的；承诺的', memory: 'com(共同)+mit(送)→把自己送出去→全身心投入→致力于。', phonics: 'com 读 /kə/，mit 读 /mɪt/，重音在第二音节。', collocations: [['committed to', '致力于'], ['fully committed', '全力投入'], ['committed team', '敬业团队']], examples: [['We are committed to quality.', '我们致力于质量。'], ['The team is committed to excellence.', '团队致力于卓越。']] },
      { w: 'preventing', ipa: '/prɪˈvɛntɪŋ/', pos: '动词（现在分词）', cn: '防止；预防', memory: 'pre(提前)+vent(来)→提前来阻止→防止。', phonics: 'pre 读 /prɪ/，vent 读 /vɛnt/，重音在第二音节。', collocations: [['preventing incidents', '防止事件'], ['preventing recurrence', '防止复发'], ['preventing failures', '防止故障']], examples: [['We are focused on preventing failures.', '我们专注于防止故障。'], ['Prevention is better than cure.', '预防胜于治疗。']] },
    ],
    phrases: [
      { p: 'committed to preventing', ipa: '/kəˈmɪtɪd tə prɪˈvɛntɪŋ/', cn: '致力于防止', why: 'be committed to + 动名词，表示坚定承诺做某事。注意 to 后面接 -ing 形式。' },
    ],
    grammar: [
      { q: '为什么 committed to 后面用 preventing 而不是 prevent？', a: 'committed to 中的 to 是介词，不是不定式标记，所以后面必须接动名词（-ing）。\n✅ We are committed to preventing incidents.（我们致力于防止事件。）\n❌ We are committed to prevent incidents.（语法错误。）\n类似的还有：look forward to doing, be used to doing。' },
    ],
    pattern: 'We are committed to + 动名词',
    patternExamples: [
      { en: 'We are committed to providing reliable services.', cn: '我们致力于提供可靠的服务。', words: [] },
      { en: 'We are committed to improving our operations.', cn: '我们致力于改进运营。', words: [] },
      { en: 'We are committed to ensuring customer satisfaction.', cn: '我们致力于确保客户满意。', words: [] },
    ],
    thinking: '这是向客户做出的核心承诺。\ncommitted to preventing 表达了对预防的坚定态度。\n注意语法：committed to 后接 -ing 形式，这是常犯的错误点。',
    pronunciation: 'committed 重音在第二音节：com-MIT-ted。\npreventing 重音在第二音节：pre-VEN-ting。\n节奏：We are com-MIT-ted ｜ to pre-VEN-ting ｜ SI-mi-lar IN-ci-dents.',
    quiz: [
      { q: '把「我们致力于防止类似事件再次发生。」用英语说出来。', a: 'We are committed to preventing similar incidents.' },
      { q: 'committed to 后面用动词原形还是动名词？', a: '动名词（-ing），因为 to 在这里是介词' },
    ],
  },
  {
    id: 2236,
    speaker: 'Manager',
    en: 'We will continue monitoring the system closely.',
    cn: '我们将继续密切监控系统。',
    ipa: '/wiː wɪl kənˈtɪnju ˈmɑnɪtərɪŋ ðə ˈsɪstəm ˈkloʊsli/',
    tags: ['第2236句', '客户沟通', '★★★★★'],
    when: 'RCA会议中向客户承诺将持续密切监控，确保系统稳定运行。',
    words: [
      { w: 'continue', ipa: '/kənˈtɪnju/', pos: '动词', cn: '继续', memory: 'con(共同)+tinue(延伸)→一起延伸→继续。', phonics: 'con 读 /kən/，tinue 读 /tɪnju/，重音在第二音节。', collocations: [['continue monitoring', '继续监控'], ['continue to improve', '继续改进'], ['continue working', '继续工作']], examples: [['We will continue to monitor the situation.', '我们将继续监控情况。'], ['Please continue your work.', '请继续你的工作。']] },
      { w: 'closely', ipa: '/ˈkloʊsli/', pos: '副词', cn: '密切地；仔细地', memory: 'close(近的)+ly(副词后缀)→近距离地→密切地。', phonics: 'close 读 /kloʊs/，ly 读 /li/，重音在第一音节。', collocations: [['monitor closely', '密切监控'], ['watch closely', '密切关注'], ['work closely', '密切合作']], examples: [['We are monitoring the system closely.', '我们正在密切监控系统。'], ['Please watch this parameter closely.', '请密切关注这个参数。']] },
    ],
    phrases: [
      { p: 'continue monitoring', ipa: '/kənˈtɪnju ˈmɑnɪtərɪŋ/', cn: '继续监控', why: 'continue + 动名词 表示持续进行某个动作。' },
      { p: 'closely', ipa: '/ˈkloʊsli/', cn: '密切地', why: '修饰 monitoring，强调监控的紧密程度，不是普通监控而是加强监控。' },
    ],
    grammar: [
      { q: 'continue monitoring 和 continue to monitor 有什么区别？', a: '两者基本等价，都可以使用。\ncontinue monitoring = 继续监控（动名词形式）\ncontinue to monitor = 继续监控（不定式形式）\n✅ We will continue monitoring the system.（我们将继续监控系统。）\n✅ We will continue to monitor the system.（我们将继续监控系统。）\n两者都是正确的，选哪种都可以。' },
    ],
    pattern: 'We will continue + 动名词/不定式 + 对象 + 副词',
    patternExamples: [
      { en: 'We will continue monitoring the equipment closely.', cn: '我们将继续密切监控设备。', words: [] },
      { en: 'We will continue to improve our services.', cn: '我们将继续改进服务。', words: [] },
      { en: 'We will continue working with the vendor.', cn: '我们将继续与供应商合作。', words: [] },
    ],
    thinking: '事件后密切监控是标准操作。\nclosely 强调不是普通监控，而是加强版的密切关注。\ncontinue 给客户信心——我们不会因为事件结束就放松警惕。',
    pronunciation: 'continue 重音在第二音节：con-TIN-ue。\nmonitoring 重音在第一音节：MON-i-to-ring。\nclosely 重音在第一音节：CLOSE-ly。\n节奏：We will con-TIN-ue ｜ MON-i-to-ring ｜ the SYS-tem ｜ CLOSE-ly.',
    quiz: [
      { q: '把「我们将继续密切监控系统。」用英语说出来。', a: 'We will continue monitoring the system closely.' },
      { q: 'continue 后面可以用动名词还是不定式？', a: '两者都可以（continue monitoring = continue to monitor）' },
    ],
  },
  {
    id: 2237,
    speaker: 'Manager',
    en: 'We will provide regular progress updates.',
    cn: '我们将定期提供进展更新。',
    ipa: '/wiː wɪl prəˈvaɪd ˈrɛɡjələr ˈprɑɡrɛs ˈʌpdeɪts/',
    tags: ['第2237句', '客户沟通', '★★★★★'],
    when: 'RCA会议中向客户承诺将定期报告预防措施的执行进展。',
    words: [
      { w: 'regular', ipa: '/ˈrɛɡjələr/', pos: '形容词', cn: '定期的；有规律的', memory: 'regul(规则)+ar(形容词后缀)→有规则的→定期的。', phonics: 're 读 /rɛ/，gu 读 /ɡju/，lar 读 /lər/，重音在第一音节。', collocations: [['regular updates', '定期更新'], ['regular meetings', '定期会议'], ['regular inspections', '定期巡检']], examples: [['We hold regular team meetings.', '我们定期召开团队会议。'], ['Regular maintenance is essential.', '定期维护至关重要。']] },
      { w: 'progress', ipa: '/ˈprɑɡrɛs/', pos: '名词', cn: '进展；进度', memory: 'pro(向前)+gress(走)→向前走→进展。', phonics: 'pro 读 /prɑ/，gress 读 /ɡrɛs/，重音在第一音节。', collocations: [['progress updates', '进展更新'], ['progress report', '进展报告'], ['make progress', '取得进展']], examples: [['Please provide a progress update.', '请提供进展更新。'], ['Good progress has been made.', '已取得了良好进展。']] },
    ],
    phrases: [
      { p: 'regular progress updates', ipa: '/ˈrɛɡjələr ˈprɑɡrɛs ˈʌpdeɪts/', cn: '定期进展更新', why: 'regular 说明频率是固定的，progress 说明内容是进展情况，updates 是更新通知。' },
    ],
    grammar: [
      { q: 'update 做名词和做动词有什么区别？', a: '做名词：progress updates = 进展更新（名词短语）\n做动词：We will update you = 我们将更新您（动词）\n✅ We will provide regular updates.（我们将提供定期更新。）—— 名词\n✅ We will update you regularly.（我们将定期更新您。）—— 动词\n两种表达方式都可以，名词形式更正式。' },
    ],
    pattern: 'We will provide + 形容词 + 名词',
    patternExamples: [
      { en: 'We will provide weekly status reports.', cn: '我们将提供每周状态报告。', words: [] },
      { en: 'We will provide detailed analysis results.', cn: '我们将提供详细分析结果。', words: [] },
      { en: 'We will provide monthly performance summaries.', cn: '我们将提供每月绩效摘要。', words: [] },
    ],
    thinking: '定期更新给客户安全感——他们不会被蒙在鼓里。\nregular 暗示有固定频率（如每周/每月），不是随机通知。\nprogress updates 聚焦在预防措施的执行进展。',
    pronunciation: 'regular 重音在第一音节：RE-gu-lar。\nprogress 重音在第一音节：PRO-gress。\nupdates 重音在第一音节：UP-dates。\n节奏：We will pro-VIDE ｜ RE-gu-lar PRO-gress ｜ UP-dates.',
    quiz: [
      { q: '把「我们将定期提供进展更新。」用英语说出来。', a: 'We will provide regular progress updates.' },
      { q: '「定期更新」用英语怎么说？', a: 'regular updates (/ˈrɛɡjələr ˈʌpdeɪts/)' },
    ],
  },
  {
    id: 2238,
    speaker: 'Manager',
    en: 'Does anyone have any additional comments?',
    cn: '还有其他意见吗？',
    ipa: '/dʌz ˈɛniˌwʌn hæv ˈɛni əˈdɪʃənəl ˈkɑmɛnts/',
    tags: ['第2238句', '会议结束', '★★★★★'],
    when: 'RCA会议结束前，主持人询问与会者是否有补充意见或问题。',
    words: [
      { w: 'anyone', ipa: '/ˈɛniˌwʌn/', pos: '代词', cn: '任何人', memory: 'any(任何)+one(人)→任何人。', phonics: 'an 读 /ɛ/，y 读 /ni/，one 读 /wʌn/，重音在第一音节。', collocations: [['does anyone', '有人…吗'], ['anyone else', '其他人'], ['if anyone', '如果有人']], examples: [['Does anyone have questions?', '有人有问题吗？'], ['Is anyone available?', '有人有空吗？']] },
      { w: 'comments', ipa: '/ˈkɑmɛnts/', pos: '名词（复数）', cn: '意见；评论', memory: 'com(共同)+ment(思考)→共同思考的结果→意见。', phonics: 'com 读 /kɑ/，ments 读 /mɛnts/，重音在第一音节。', collocations: [['additional comments', '补充意见'], ['any comments', '任何意见'], ['final comments', '最后意见']], examples: [['Do you have any comments?', '你有什么意见吗？'], ['Please share your comments.', '请分享您的意见。']] },
    ],
    phrases: [
      { p: 'additional comments', ipa: '/əˈdɪʃənəl ˈkɑmɛnts/', cn: '补充意见', why: 'additional 说明是在已讨论内容之外的额外意见。' },
    ],
    grammar: [
      { q: '为什么用 Does anyone have 而不是 Do anyone have？', a: 'anyone 是不定代词，做主语时视为第三人称单数，所以用 Does。\n✅ Does anyone have comments?（有人有意见吗？）\n❌ Do anyone have comments?（语法错误。）\n类似的不定代词：everyone, someone, nobody 都是第三人称单数。' },
    ],
    pattern: 'Does anyone have any + 形容词 + 名词?',
    patternExamples: [
      { en: 'Does anyone have any questions?', cn: '有人有问题吗？', words: [] },
      { en: 'Does anyone have any suggestions?', cn: '有人有建议吗？', words: [] },
      { en: 'Does anyone have any concerns?', cn: '有人有疑虑吗？', words: [] },
    ],
    thinking: '会议结束前必须给与会者发言机会。\nDoes anyone have... 是标准的会议收尾问句。\nadditional comments 暗示「除了已经讨论的之外」。',
    pronunciation: 'anyone 重音在第一音节：A-ny-one。\nadditional 重音在第二音节：ad-DI-tio-nal。\ncomments 重音在第一音节：COM-ments。\n节奏：Does A-ny-one HAVE ｜ a-ny ad-DI-tio-nal ｜ COM-ments?',
    quiz: [
      { q: '把「还有其他意见吗？」用英语说出来。', a: 'Does anyone have any additional comments?' },
      { q: 'anyone 后面用 Does 还是 Do？', a: 'Does（anyone 是不定代词，视为第三人称单数）' },
    ],
  },
  {
    id: 2239,
    speaker: 'Manager',
    en: 'Thank you for your participation.',
    cn: '感谢大家的参与。',
    ipa: '/θæŋk juː fər jɔːr ˌpɑrtɪsɪˈpeɪʃən/',
    tags: ['第2239句', '会议结束', '★★★★★'],
    when: 'RCA会议即将结束时，主持人感谢所有与会者的参与和贡献。',
    words: [
      { w: 'participation', ipa: '/ˌpɑrtɪsɪˈpeɪʃən/', pos: '名词', cn: '参与；参加', memory: 'participate(参与)+ion(名词后缀)→参与的行为。', phonics: 'par 读 /pɑr/，ti 读 /tɪ/，ci 读 /sɪ/，pa 读 /peɪ/，tion 读 /ʃən/，重音在第四音节。', collocations: [['thank you for your participation', '感谢您的参与'], ['active participation', '积极参与'], ['full participation', '全员参与']], examples: [['Your participation is appreciated.', '感谢您的参与。'], ['Active participation is encouraged.', '鼓励积极参与。']] },
    ],
    phrases: [
      { p: 'Thank you for your participation', ipa: '/θæŋk juː fər jɔːr ˌpɑrtɪsɪˈpeɪʃən/', cn: '感谢您的参与', why: '正式会议的标准结束语，感谢所有人的时间和贡献。' },
    ],
    grammar: [
      { q: 'participation 和 attendance 有什么区别？', a: 'participation = 参与，强调主动参与、贡献意见。\nattendance = 出席，只表示到场，不强调是否积极参与。\n✅ Thank you for your participation.（感谢您的参与。）—— 强调贡献\n✅ Thank you for your attendance.（感谢您的出席。）—— 强调到场\nRCA会议中用 participation 更恰当，因为与会者都积极参与了讨论。' },
    ],
    pattern: 'Thank you for your + 名词',
    patternExamples: [
      { en: 'Thank you for your cooperation.', cn: '感谢您的配合。', words: [] },
      { en: 'Thank you for your attention.', cn: '感谢您的关注。', words: [] },
      { en: 'Thank you for your contribution.', cn: '感谢您的贡献。', words: [] },
    ],
    thinking: '感谢参与是会议收尾的必备礼貌用语。\nparticipation 比 attendance 更高级，认可了与会者的主动贡献。\n这句话让所有参会者感到自己的时间和意见被重视。',
    pronunciation: 'participation 重音在第四音节：par-ti-ci-PA-tion。\n节奏：THANK you ｜ for your ｜ par-ti-ci-PA-tion.',
    quiz: [
      { q: '把「感谢大家的参与。」用英语说出来。', a: 'Thank you for your participation.' },
      { q: 'participation 和 attendance 哪个更强调主动贡献？', a: 'participation（强调主动参与和贡献意见）' },
    ],
  },
  {
    id: 2240,
    speaker: 'Manager',
    en: 'This concludes today\'s RCA meeting.',
    cn: '今天的RCA会议到此结束。',
    ipa: '/ðɪs kənˈkluːdz təˈdeɪz ɑːr siː eɪ ˈmiːtɪŋ/',
    tags: ['第2240句', '会议结束', '★★★★★'],
    when: 'RCA会议正式结束，主持人宣布会议闭幕。',
    words: [
      { w: 'concludes', ipa: '/kənˈkluːdz/', pos: '动词（第三人称单数）', cn: '结束；闭幕', memory: 'con(共同)+clude(关闭)→共同关闭→结束。', phonics: 'con 读 /kən/，clude 读 /kluːd/，重音在第二音节。', collocations: [['concludes the meeting', '结束会议'], ['concludes the report', '结束报告'], ['concludes the review', '结束审查']], examples: [['This concludes our meeting.', '我们的会议到此结束。'], ['The report concludes with recommendations.', '报告以建议结束。']] },
      { w: 'RCA', ipa: '/ɑːr siː eɪ/', pos: '缩写', cn: '根本原因分析', memory: 'RCA = Root Cause Analysis（根本原因分析），数据中心事件管理的标准流程。', phonics: '逐字母读：R(ɑːr) C(siː) A(eɪ)', collocations: [['RCA meeting', 'RCA会议'], ['RCA report', 'RCA报告'], ['conduct an RCA', '进行RCA']], examples: [['The RCA meeting is scheduled for tomorrow.', 'RCA会议安排在明天。'], ['We need to complete the RCA report.', '我们需要完成RCA报告。']] },
    ],
    phrases: [
      { p: 'This concludes', ipa: '/ðɪs kənˈkluːdz/', cn: '到此结束', why: 'This concludes 是正式的会议结束用语，比 The meeting is over 更专业。' },
      { p: 'today\'s RCA meeting', ipa: '/təˈdeɪz ɑːr siː eɪ ˈmiːtɪŋ/', cn: '今天的RCA会议', why: 'today\'s 所有格明确是今天的会议，RCA 说明会议类型。' },
    ],
    grammar: [
      { q: 'concludes 和 ends 有什么区别？', a: 'concludes = 正式结束，常用于会议、报告、演讲等正式场合。\nends = 结束，通用词，任何场景都可以用。\n✅ This concludes today\'s meeting.（今天的会议到此结束。）—— 正式\n✅ The meeting ends now.（会议现在结束。）—— 通用\nRCA会议中用 concludes 更专业。' },
    ],
    pattern: 'This concludes + 名词',
    patternExamples: [
      { en: 'This concludes today\'s review meeting.', cn: '今天的评审会议到此结束。', words: [] },
      { en: 'This concludes the incident review.', cn: '事件复盘到此结束。', words: [] },
      { en: 'This concludes our presentation.', cn: '我们的演示到此结束。', words: [] },
    ],
    thinking: 'This concludes 是会议正式闭幕的标准用语。\n它给会议画上句号，让所有与会者明确知道会议已结束。\n比 The meeting is over 或 Let\'s stop here 更正式、更专业。',
    pronunciation: 'concludes 重音在第二音节：con-CLUDES。\nRCA 逐字母读：R-C-A。\n节奏：This con-CLUDES ｜ to-DAY\'S ｜ R-C-A MEET-ing.',
    quiz: [
      { q: '把「今天的RCA会议到此结束。」用英语说出来。', a: 'This concludes today\'s RCA meeting.' },
      { q: 'RCA 的全称是什么？', a: 'Root Cause Analysis（根本原因分析）' },
    ],
  },
];

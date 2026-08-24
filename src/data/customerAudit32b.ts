// EXPORTS: MOCK_SENTENCES_AUDIT32B

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_AUDIT32B: ISentence[] = [
  {
    id: 1941,
    speaker: 'Manager',
    en: 'Here are the UPS maintenance records.',
    cn: '这是UPS维护记录。',
    ipa: '/hɪr ɑːr ðə ˌjuːpiːˈɛs ˈmeɪntənəns ˈrɛkərdz/',
    tags: ['第1941句', '测试记录', '★★★★★'],
    when: '审计员要求查看UPS维护记录时，值班经理出示文件。',
    words: [
      { w: 'UPS', ipa: '/ˌjuːpiːˈɛs/', pos: '名词缩写', cn: '不间断电源', memory: 'Uninterruptible Power Supply 的首字母缩写，逐字母读 U-P-S。', phonics: '逐字母读 U(/juː/)-P(/piː/)-S(/ɛs/)', collocations: [['UPS maintenance', 'UPS维护'], ['UPS battery', 'UPS电池'], ['UPS test', 'UPS测试']], examples: [['UPS maintenance is done quarterly.', 'UPS维护每季度一次。'], ['Check the UPS log.', '查看UPS日志。']] },
      { w: 'maintenance records', ipa: '/ˈmeɪntənəns ˈrɛkərdz/', pos: '名词', cn: '维护记录', memory: 'maintenance(维护) + records(记录) → 记录所有维护活动的文档。', phonics: 'main 读 /meɪn/，tenance 读 /tənəns/', collocations: [['maintenance records', '维护记录'], ['maintenance log', '维护日志'], ['maintenance report', '维护报告']], examples: [['Show me the maintenance records.', '给我看维护记录。'], ['All maintenance records are filed.', '所有维护记录已归档。']] },
    ],
    phrases: [
      { p: 'Here are', ipa: '/hɪr ɑːr/', cn: '这是（复数）', why: 'Here are + 复数名词，用于向对方出示多份文件或物品。' },
      { p: 'UPS maintenance records', ipa: '/ˌjuːpiːˈɛs ˈmeɪntənəns ˈrɛkərdz/', cn: 'UPS维护记录', why: 'UPS 作为定语修饰 maintenance records，明确记录的设备类型。' },
    ],
    grammar: [
      { q: '为什么用 Here are 而不是 Here is？', a: 'records 是复数名词，所以用 Here are。\n✅ Here are the UPS maintenance records.（这是UPS维护记录。—— 复数）\n❌ Here is the UPS maintenance records.（语法错误，is 不能搭配复数主语。）\n✅ Here is the UPS maintenance record.（这是UPS维护记录。—— 单数）' },
    ],
    pattern: 'Here are + the + 设备名 + maintenance records',
    patternExamples: [
      { en: 'Here are the generator maintenance records.', cn: '这是发电机维护记录。', words: [] },
      { en: 'Here are the chiller maintenance records.', cn: '这是冷水机组维护记录。', words: [] },
      { en: 'Here are the fire system maintenance records.', cn: '这是消防系统维护记录。', words: [] },
    ],
    thinking: '审计中最常见的句式是「出示记录」。\nHere are + 复数名词 是最自然的递送方式。\n中文说「这是……记录」，英语用 Here are 把物品推到对方面前，比 These are 更口语化。',
    pronunciation: 'UPS 逐字母读 U-P-S，不要读成单词 ups。\nrecords 重音在第一音节：RE-cords（名词）。\n节奏：HERE are ｜ the U-P-S ｜ MAIN-tenance ｜ RE-cords.',
    quiz: [
      { q: '把「这是UPS维护记录。」用英语说出来。', a: 'Here are the UPS maintenance records.' },
      { q: '「维护记录」用英语怎么说？', a: 'maintenance records (/ˈmeɪntənəns ˈrɛkərdz/)' },
    ],
  },
  {
    id: 1942,
    speaker: 'Manager',
    en: 'Here are the generator test records.',
    cn: '这是柴油发电机测试记录。',
    ipa: '/hɪr ɑːr ðə ˈdʒɛnəreɪtər tɛst ˈrɛkərdz/',
    tags: ['第1942句', '测试记录', '★★★★★'],
    when: '审计员要求查看发电机测试记录时，值班经理出示文件。',
    words: [
      { w: 'generator', ipa: '/ˈdʒɛnəreɪtər/', pos: '名词', cn: '发电机', memory: 'generate(产生) + or(器) → 产生电力的设备 → 发电机。', phonics: 'gen 读 /ˈdʒɛn/，er 读 /ər/，ator 读 /eɪtər/', collocations: [['generator test', '发电机测试'], ['generator run', '发电机运行'], ['diesel generator', '柴油发电机']], examples: [['The generator test passed.', '发电机测试通过。'], ['Start the generator.', '启动发电机。']] },
      { w: 'test records', ipa: '/tɛst ˈrɛkərdz/', pos: '名词', cn: '测试记录', memory: 'test(测试) + records(记录) → 记录测试过程与结果的文档。', phonics: 'test 读 /tɛst/，records 读 /ˈrɛkərdz/', collocations: [['test records', '测试记录'], ['test results', '测试结果'], ['test report', '测试报告']], examples: [['Show the test records.', '出示测试记录。'], ['All test records are on file.', '所有测试记录已归档。']] },
    ],
    phrases: [
      { p: 'generator test records', ipa: '/ˈdʒɛnəreɪtər tɛst ˈrɛkərdz/', cn: '发电机测试记录', why: 'generator 修饰 test records，明确测试的设备对象。' },
    ],
    grammar: [
      { q: 'generator 和 genset 有什么区别？', a: 'generator 是通用词「发电机」；genset (generator set) 是工程术语，指包含发动机+发电机的整套机组。\n✅ Here are the generator test records.（通用表达，审计中常用。）\n✅ Here are the genset test records.（工程术语，技术人员之间更常用。）' },
    ],
    pattern: 'Here are the + 设备名 + test records',
    patternExamples: [
      { en: 'Here are the UPS test records.', cn: '这是UPS测试记录。', words: [] },
      { en: 'Here are the battery test records.', cn: '这是电池测试记录。', words: [] },
      { en: 'Here are the fire alarm test records.', cn: '这是火灾报警测试记录。', words: [] },
    ],
    thinking: '发电机测试是数据中心审计的核心项目之一。\nHere are + 设备名 + test records 是出示测试记录的标准句式。\n每次审计都会检查发电机加载测试、ATS切换测试等记录。',
    pronunciation: 'generator 重音在第一音节：GEN-er-a-tor。\ntest 读 /tɛst/，注意 t 不省略。\n节奏：HERE are ｜ the GEN-er-a-tor ｜ TEST RE-cords.',
    quiz: [
      { q: '把「这是柴油发电机测试记录。」用英语说出来。', a: 'Here are the generator test records.' },
      { q: '「发电机」用英语怎么说？', a: 'generator (/ˈdʒɛnəreɪtər/)' },
    ],
  },
  {
    id: 1943,
    speaker: 'Manager',
    en: 'Here are the transformer inspection records.',
    cn: '这是变压器巡检记录。',
    ipa: '/hɪr ɑːr ðə trænsˈfɔːrmər ɪnˈspɛkʃən ˈrɛkərdz/',
    tags: ['第1943句', '测试记录', '★★★★★'],
    when: '审计员要求查看变压器巡检记录时，值班经理出示文件。',
    words: [
      { w: 'transformer', ipa: '/trænsˈfɔːrmər/', pos: '名词', cn: '变压器', memory: 'trans(转换) + form(形态) + er(器) → 转换电压的设备 → 变压器。', phonics: 'trans 读 /træns/，former 读 /ˈfɔːrmər/', collocations: [['transformer inspection', '变压器巡检'], ['transformer oil', '变压器油'], ['step-down transformer', '降压变压器']], examples: [['Check the transformer temperature.', '检查变压器温度。'], ['Transformer oil test is due.', '变压器油测试到期了。']] },
      { w: 'inspection', ipa: '/ɪnˈspɛkʃən/', pos: '名词', cn: '巡检；检查', memory: 'in(进入) + spect(看) + ion(名词后缀) → 进去仔细看 → 检查。', phonics: 'in 读 /ɪn/，spec 读 /spɛk/，tion 读 /ʃən/', collocations: [['inspection records', '巡检记录'], ['daily inspection', '日常巡检'], ['visual inspection', '目视检查']], examples: [['Complete the daily inspection.', '完成日常巡检。'], ['Inspection found no issues.', '巡检未发现问题。']] },
    ],
    phrases: [
      { p: 'transformer inspection records', ipa: '/trænsˈfɔːrmər ɪnˈspɛkʃən ˈrɛkərdz/', cn: '变压器巡检记录', why: 'transformer 修饰 inspection records，明确巡检的设备对象。' },
    ],
    grammar: [
      { q: 'inspection 和 maintenance 有什么区别？', a: 'inspection 是「检查/巡检」，只看不修，记录设备状态；maintenance 是「维护」，包含清洁、更换、校准等实际操作。\n✅ transformer inspection records（变压器巡检记录 —— 记录状态）\n✅ transformer maintenance records（变压器维护记录 —— 记录操作）' },
    ],
    pattern: 'Here are the + 设备名 + inspection records',
    patternExamples: [
      { en: 'Here are the switchgear inspection records.', cn: '这是开关柜巡检记录。', words: [] },
      { en: 'Here are the battery inspection records.', cn: '这是电池巡检记录。', words: [] },
      { en: 'Here are the cooling tower inspection records.', cn: '这是冷却塔巡检记录。', words: [] },
    ],
    thinking: '变压器巡检是电气系统审计的重点。\n巡检记录通常包括油温、油位、声音异常、渗漏等检查项目。\nHere are + inspection records 句式与 maintenance records 相同，只是换了一个修饰词。',
    pronunciation: 'transformer 重音在第二音节：trans-FOR-mer。\ninspection 重音在第二音节：in-SPEC-tion。\n节奏：HERE are ｜ the trans-FOR-mer ｜ in-SPEC-tion ｜ RE-cords.',
    quiz: [
      { q: '把「这是变压器巡检记录。」用英语说出来。', a: 'Here are the transformer inspection records.' },
      { q: '「巡检」用英语怎么说？', a: 'inspection (/ɪnˈspɛkʃən/)' },
    ],
  },
  {
    id: 1944,
    speaker: 'Manager',
    en: 'Here are the cooling system maintenance records.',
    cn: '这是制冷系统维护记录。',
    ipa: '/hɪr ɑːr ðə ˈkuːlɪŋ ˈsɪstəm ˈmeɪntənəns ˈrɛkərdz/',
    tags: ['第1944句', '测试记录', '★★★★★'],
    when: '审计员要求查看制冷系统维护记录时，值班经理出示文件。',
    words: [
      { w: 'cooling system', ipa: '/ˈkuːlɪŋ ˈsɪstəm/', pos: '名词', cn: '制冷系统', memory: 'cooling(冷却) + system(系统) → 数据中心散热降温的整套系统。', phonics: 'cool 读 /kuːl/，ing 读 /ɪŋ/', collocations: [['cooling system', '制冷系统'], ['cooling capacity', '制冷量'], ['cooling redundancy', '制冷冗余']], examples: [['The cooling system is N+1.', '制冷系统为N+1冗余。'], ['Cooling system alarm triggered.', '制冷系统告警触发。']] },
    ],
    phrases: [
      { p: 'cooling system maintenance records', ipa: '/ˈkuːlɪŋ ˈsɪstəm ˈmeɪntənəns ˈrɛkərdz/', cn: '制冷系统维护记录', why: 'cooling system 作为定语修饰 maintenance records，明确系统范围。' },
    ],
    grammar: [
      { q: 'cooling system 和 HVAC 有什么关系？', a: 'cooling system 专指制冷部分（冷水机、冷却塔、CRAH/CRAC）；HVAC (Heating, Ventilation, and Air Conditioning) 包含制冷+供暖+通风，范围更大。\n数据中心通常只用 cooling system，因为不需要供暖。' },
    ],
    pattern: 'Here are the + 系统名 + maintenance records',
    patternExamples: [
      { en: 'Here are the electrical system maintenance records.', cn: '这是电气系统维护记录。', words: [] },
      { en: 'Here are the fire suppression system maintenance records.', cn: '这是灭火系统维护记录。', words: [] },
      { en: 'Here are the access control system maintenance records.', cn: '这是门禁系统维护记录。', words: [] },
    ],
    thinking: '制冷系统维护记录是审计中暖通部分的核心文件。\n记录包括冷水机组保养、冷冻水水质检测、过滤网更换等。\n句式结构与前几句完全一致：Here are + 系统名 + maintenance records。',
    pronunciation: 'cooling 重音在第一音节：COOL-ing。\nsystem 读 /ˈsɪstəm/，不要读成 /saɪstəm/。\n节奏：HERE are ｜ the COOL-ing SYS-tem ｜ MAIN-tenance ｜ RE-cords.',
    quiz: [
      { q: '把「这是制冷系统维护记录。」用英语说出来。', a: 'Here are the cooling system maintenance records.' },
      { q: '「制冷系统」用英语怎么说？', a: 'cooling system (/ˈkuːlɪŋ ˈsɪstəm/)' },
    ],
  },
  {
    id: 1945,
    speaker: 'Manager',
    en: 'Here are the fire protection test records.',
    cn: '这是消防系统测试记录。',
    ipa: '/hɪr ɑːr ðə ˈfaɪər prəˈtɛkʃən tɛst ˈrɛkərdz/',
    tags: ['第1945句', '测试记录', '★★★★★'],
    when: '审计员要求查看消防系统测试记录时，值班经理出示文件。',
    words: [
      { w: 'fire protection', ipa: '/ˈfaɪər prəˈtɛkʃən/', pos: '名词', cn: '消防', memory: 'fire(火) + protection(保护) → 防火保护 → 消防。', phonics: 'fire 读 /ˈfaɪər/，protection 读 /prəˈtɛkʃən/', collocations: [['fire protection system', '消防系统'], ['fire protection test', '消防测试'], ['fire protection plan', '消防方案']], examples: [['Fire protection test passed.', '消防测试通过。'], ['Check the fire protection system.', '检查消防系统。']] },
    ],
    phrases: [
      { p: 'fire protection test records', ipa: '/ˈfaɪər prəˈtɛkʃən tɛst ˈrɛkərdz/', cn: '消防系统测试记录', why: 'fire protection 修饰 test records，明确测试的系统类型。' },
    ],
    grammar: [
      { q: 'fire protection 和 fire suppression 有什么区别？', a: 'fire protection 是「消防」的总称，包含探测（烟感/温感）+ 抑制（灭火）+ 疏散；fire suppression 专指灭火抑制部分（气体/水喷淋）。\n✅ fire protection test records（消防系统整体测试记录）\n✅ fire suppression test records（灭火系统专项测试记录）' },
    ],
    pattern: 'Here are the fire protection + 名词',
    patternExamples: [
      { en: 'Here are the fire protection inspection records.', cn: '这是消防系统巡检记录。', words: [] },
      { en: 'Here are the fire protection drill records.', cn: '这是消防演练记录。', words: [] },
      { en: 'Here are the fire protection maintenance records.', cn: '这是消防系统维护记录。', words: [] },
    ],
    thinking: '消防系统测试是安全审计的重点。\n测试记录通常包括烟感测试、气体灭火系统测试、消防泵测试等。\nfire protection 是消防的总称，涵盖面比 fire suppression 更广。',
    pronunciation: 'fire 读 /faɪər/，不要读成 /fɪr/。\nprotection 重音在第二音节：pro-TEC-tion。\n节奏：HERE are ｜ the FIRE pro-TEC-tion ｜ TEST RE-cords.',
    quiz: [
      { q: '把「这是消防系统测试记录。」用英语说出来。', a: 'Here are the fire protection test records.' },
      { q: '「消防」用英语怎么说？', a: 'fire protection (/ˈfaɪər prəˈtɛkʃən/)' },
    ],
  },
  {
    id: 1946,
    speaker: 'Manager',
    en: 'Here are the battery discharge test records.',
    cn: '这是电池放电测试记录。',
    ipa: '/hɪr ɑːr ðə ˈbætəri dɪsˈtʃɑːrdʒ tɛst ˈrɛkərdz/',
    tags: ['第1946句', '测试记录', '★★★★★'],
    when: '审计员要求查看电池放电测试记录时，值班经理出示文件。',
    words: [
      { w: 'battery', ipa: '/ˈbætəri/', pos: '名词', cn: '电池', memory: 'battery 来自 batter(连续击打)，原指炮兵连，后引申为电池组。', phonics: 'bat 读 /bæ/，tery 读 /təri/', collocations: [['battery test', '电池测试'], ['battery discharge', '电池放电'], ['battery cabinet', '电池柜']], examples: [['Battery discharge test is due.', '电池放电测试到期了。'], ['Check battery voltage.', '检查电池电压。']] },
      { w: 'discharge', ipa: '/dɪsˈtʃɑːrdʒ/', pos: '名词/动词', cn: '放电', memory: 'dis(去除) + charge(充电) → 去除电荷 → 放电。反义词 charge = 充电。', phonics: 'dis 读 /dɪs/，charge 读 /tʃɑːrdʒ/', collocations: [['discharge test', '放电测试'], ['discharge rate', '放电速率'], ['deep discharge', '深度放电']], examples: [['Perform a discharge test.', '执行放电测试。'], ['Battery discharge rate is normal.', '电池放电速率正常。']] },
    ],
    phrases: [
      { p: 'battery discharge test', ipa: '/ˈbætəri dɪsˈtʃɑːrdʒ tɛst/', cn: '电池放电测试', why: '三个名词连用：battery(电池) + discharge(放电) + test(测试)，层层限定。' },
    ],
    grammar: [
      { q: '为什么 battery discharge test 三个名词连用？', a: '英语中多个名词可以叠加修饰，从右到左逐层限定：\ntest(测试) ← 什么测试？discharge test(放电测试) ← 什么放电测试？battery discharge test(电池放电测试)。\n这种名词叠加在工程技术文档中极为常见。' },
    ],
    pattern: 'Here are the + 复合名词 + test records',
    patternExamples: [
      { en: 'Here are the load bank test records.', cn: '这是负载箱测试记录。', words: [] },
      { en: 'Here are the ATS transfer test records.', cn: '这是ATS切换测试记录。', words: [] },
      { en: 'Here are the EPO test records.', cn: '这是紧急断电测试记录。', words: [] },
    ],
    thinking: '电池放电测试是UPS系统审计的关键项目。\n测试目的是验证电池在满载情况下的实际放电时间是否满足设计要求。\n通常每年进行一次完整放电测试，每季度进行一次短时放电测试。',
    pronunciation: 'battery 重音在第一音节：BAT-tery。\ndischarge 重音在第二音节：dis-CHARGE。\n节奏：HERE are ｜ the BAT-tery ｜ dis-CHARGE ｜ TEST RE-cords.',
    quiz: [
      { q: '把「这是电池放电测试记录。」用英语说出来。', a: 'Here are the battery discharge test records.' },
      { q: '「放电」用英语怎么说？', a: 'discharge (/dɪsˈtʃɑːrdʒ/)' },
    ],
  },
  {
    id: 1947,
    speaker: 'Manager',
    en: 'All preventive maintenance has been completed on schedule.',
    cn: '所有预防性维护均按计划完成。',
    ipa: '/ɔːl prɪˈvɛntɪv ˈmeɪntənəns hæz bɪn kəmˈpliːtɪd ɒn ˈʃɛdjuːl/',
    tags: ['第1947句', '测试记录', '★★★★★'],
    when: '审计员询问维护计划执行情况时，值班经理给出肯定答复。',
    words: [
      { w: 'preventive maintenance', ipa: '/prɪˈvɛntɪv ˈmeɪntənəns/', pos: '名词', cn: '预防性维护', memory: 'preventive(预防的) + maintenance(维护) → 在故障发生前主动进行的维护，缩写 PM。', phonics: 'pre 读 /prɪ/，ventive 读 /ˈvɛntɪv/', collocations: [['preventive maintenance', '预防性维护'], ['PM schedule', 'PM计划'], ['PM checklist', 'PM检查清单']], examples: [['PM is done monthly.', '预防性维护每月一次。'], ['PM schedule is up to date.', 'PM计划已更新。']] },
      { w: 'on schedule', ipa: '/ɒn ˈʃɛdjuːl/', pos: '介词短语', cn: '按计划', memory: 'on(在) + schedule(计划表) → 在计划表上 → 按计划、按时。', phonics: 'on 读 /ɒn/，schedule 读 /ˈʃɛdjuːl/', collocations: [['on schedule', '按计划'], ['ahead of schedule', '提前'], ['behind schedule', '滞后']], examples: [['Work completed on schedule.', '工作按计划完成。'], ['Project is behind schedule.', '项目滞后了。']] },
    ],
    phrases: [
      { p: 'has been completed', ipa: '/hæz bɪn kəmˈpliːtɪd/', cn: '已经完成', why: '现在完成时被动语态，表示动作已完成且结果对现在有影响。' },
      { p: 'on schedule', ipa: '/ɒn ˈʃɛdjuːl/', cn: '按计划', why: '介词短语作状语，修饰 completed，说明完成的方式是「按计划的」。' },
    ],
    grammar: [
      { q: '为什么用 has been completed 而不是 was completed？', a: 'has been completed 是现在完成时，强调「到现在为止全部完成了」，适合汇报整体状态。\nwas completed 是过去时，只说过去某个时间点完成了，不强调与现在的关系。\n✅ All PM has been completed on schedule.（到现在为止全部按计划完成了。）—— 强调结果\n✅ The PM was completed last week.（上周完成了PM。）—— 只说过去的事' },
    ],
    pattern: 'All + 名词 + has been + 过去分词 + on schedule',
    patternExamples: [
      { en: 'All inspections have been completed on schedule.', cn: '所有巡检均按计划完成。', words: [] },
      { en: 'All calibration has been completed on schedule.', cn: '所有校准均按计划完成。', words: [] },
      { en: 'All training has been completed on schedule.', cn: '所有培训均按计划完成。', words: [] },
    ],
    thinking: '审计中最关键的合规问题之一就是「维护是否按计划执行」。\nAll PM has been completed on schedule 是最理想的回答，表示团队严格执行了维护计划。\n如果有任何延迟，需要说明原因和补救措施。',
    pronunciation: 'preventive 重音在第二音节：pre-VEN-tive。\nschedule 英式读 /ˈʃɛdjuːl/，美式读 /ˈskɛdʒuːl/，马来西亚常用英式。\n节奏：ALL pre-VEN-tive ｜ MAIN-tenance ｜ has been com-PLE-ted ｜ on SCHED-ule.',
    quiz: [
      { q: '把「所有预防性维护均按计划完成。」用英语说出来。', a: 'All preventive maintenance has been completed on schedule.' },
      { q: '「预防性维护」用英语怎么说？', a: 'preventive maintenance (/prɪˈvɛntɪv ˈmeɪntənəns/)' },
    ],
  },
  {
    id: 1948,
    speaker: 'Manager',
    en: 'No maintenance activities are overdue.',
    cn: '没有任何维护工作逾期。',
    ipa: '/noʊ ˈmeɪntənəns ækˈtɪvɪtiz ɑːr ˌoʊvərˈdjuː/',
    tags: ['第1948句', '测试记录', '★★★★★'],
    when: '审计员追问是否有逾期未完成的维护项目时，值班经理给出否定回答。',
    words: [
      { w: 'overdue', ipa: '/ˌoʊvərˈdjuː/', pos: '形容词', cn: '逾期的；过期的', memory: 'over(超过) + due(到期) → 超过到期日 → 逾期。', phonics: 'over 读 /ˈoʊvər/，due 读 /djuː/', collocations: [['overdue task', '逾期任务'], ['overdue payment', '逾期付款'], ['overdue maintenance', '逾期维护']], examples: [['No tasks are overdue.', '没有任务逾期。'], ['This PM is overdue.', '这项PM逾期了。']] },
      { w: 'activities', ipa: '/ækˈtɪvɪtiz/', pos: '名词（复数）', cn: '活动', memory: 'active(活跃的) + ity(名词后缀) → activities = 活动（复数）。', phonics: 'ac 读 /æk/，tiv 读 /tɪv/，ities 读 /ɪtiz/', collocations: [['maintenance activities', '维护活动'], ['daily activities', '日常活动'], ['operational activities', '运营活动']], examples: [['List all maintenance activities.', '列出所有维护活动。'], ['Activities are on track.', '活动按计划进行。']] },
    ],
    phrases: [
      { p: 'No ... are overdue', ipa: '/noʊ ... ɑːr ˌoʊvərˈdjuː/', cn: '没有……逾期', why: 'No + 名词 + are overdue 是审计中否认逾期状态的标准句式。' },
    ],
    grammar: [
      { q: '为什么用 No 开头而不是 There are no？', a: 'No + 名词 + 动词 比 There are no + 名词 + that + 动词 更简洁有力。\n✅ No maintenance activities are overdue.（简洁有力。）\n✅ There are no maintenance activities that are overdue.（语法正确但冗长。）\n审计回答越简洁越好，避免不必要的修饰。' },
    ],
    pattern: 'No + 名词 + are + 形容词',
    patternExamples: [
      { en: 'No tickets are overdue.', cn: '没有工单逾期。', words: [] },
      { en: 'No alarms are unacknowledged.', cn: '没有未确认的告警。', words: [] },
      { en: 'No safety incidents are unreported.', cn: '没有未报告的安全事件。', words: [] },
    ],
    thinking: '审计中「有没有逾期项目」是必问问题。\nNo maintenance activities are overdue 是最理想的回答。\n如果确实有逾期项目，需要说明原因、影响评估和补救计划。',
    pronunciation: 'overdue 重音在第三音节：o-ver-DUE。\nactivities 重音在第二音节：ac-TIV-i-ties。\n节奏：NO MAIN-tenance ｜ ac-TIV-i-ties ｜ are O-ver-DUE.',
    quiz: [
      { q: '把「没有任何维护工作逾期。」用英语说出来。', a: 'No maintenance activities are overdue.' },
      { q: '「逾期的」用英语怎么说？', a: 'overdue (/ˌoʊvərˈdjuː/)' },
    ],
  },
  {
    id: 1949,
    speaker: 'Manager',
    en: 'All testing results meet the required standards.',
    cn: '所有测试结果均符合要求。',
    ipa: '/ɔːl ˈtɛstɪŋ rɪˈzʌlts miːt ðə rɪˈkwaɪərd ˈstændərdz/',
    tags: ['第1949句', '测试记录', '★★★★★'],
    when: '审计员询问测试结果是否达标时，值班经理给出肯定答复。',
    words: [
      { w: 'testing results', ipa: '/ˈtɛstɪŋ rɪˈzʌlts/', pos: '名词', cn: '测试结果', memory: 'testing(测试的) + results(结果) → 测试产生的结果数据。', phonics: 'test 读 /tɛst/，ing 读 /ɪŋ/', collocations: [['testing results', '测试结果'], ['test report', '测试报告'], ['test data', '测试数据']], examples: [['Testing results are normal.', '测试结果正常。'], ['Review the testing results.', '审查测试结果。']] },
      { w: 'required standards', ipa: '/rɪˈkwaɪərd ˈstændərdz/', pos: '名词', cn: '要求标准', memory: 'required(被要求的) + standards(标准) → 规定必须达到的标准。', phonics: 're 读 /rɪ/，quired 读 /kwaɪərd/', collocations: [['required standards', '要求标准'], ['meet standards', '符合标准'], ['exceed standards', '超过标准']], examples: [['Results meet required standards.', '结果符合标准。'], ['Standards are clearly defined.', '标准已明确定义。']] },
    ],
    phrases: [
      { p: 'meet the required standards', ipa: '/miːt ðə rɪˈkwaɪərd ˈstændərdz/', cn: '符合要求', why: 'meet(达到/满足) + standards(标准) 是审计中表示合规的核心搭配。' },
    ],
    grammar: [
      { q: 'meet 和 comply with 有什么区别？', a: 'meet standards = 达到标准（强调结果）；comply with = 遵守（强调过程合规）。\n✅ Testing results meet the required standards.（结果达标。）\n✅ We comply with all regulatory requirements.（我们遵守所有法规要求。）\n审计中两者都常用，meet 侧重数据结果，comply with 侧重流程合规。' },
    ],
    pattern: 'All + 名词 + meet the required standards',
    patternExamples: [
      { en: 'All water quality tests meet the required standards.', cn: '所有水质测试均符合要求。', words: [] },
      { en: 'All environmental readings meet the required standards.', cn: '所有环境读数均符合要求。', words: [] },
      { en: 'All safety inspections meet the required standards.', cn: '所有安全检查均符合要求。', words: [] },
    ],
    thinking: '测试结果是否达标是审计的核心关注点。\nAll testing results meet the required standards 表示所有测试数据都在合格范围内。\n如果有个别项不达标，需要具体说明哪些项、偏差多少、整改计划。',
    pronunciation: 'testing 重音在第一音节：TEST-ing。\nrequired 重音在第二音节：re-QUIRED。\nstandards 重音在第一音节：STAN-dards。\n节奏：ALL TEST-ing ｜ re-SULTS ｜ MEET the ｜ re-QUIRED ｜ STAN-dards.',
    quiz: [
      { q: '把「所有测试结果均符合要求。」用英语说出来。', a: 'All testing results meet the required standards.' },
      { q: '「符合要求」用英语怎么说？', a: 'meet the required standards (/miːt ðə rɪˈkwaɪərd ˈstændərdz/)' },
    ],
  },
  {
    id: 1950,
    speaker: 'Manager',
    en: 'No major issues were identified during testing.',
    cn: '测试过程中未发现重大问题。',
    ipa: '/noʊ ˈmeɪdʒər ˈɪʃuːz wər aɪˈdɛntɪfaɪd ˈdʊrɪŋ ˈtɛstɪŋ/',
    tags: ['第1950句', '测试记录', '★★★★★'],
    when: '审计员追问测试中是否发现重大问题时，值班经理给出否定回答。',
    words: [
      { w: 'major issues', ipa: '/ˈmeɪdʒər ˈɪʃuːz/', pos: '名词', cn: '重大问题', memory: 'major(重大的) + issues(问题) → 影响系统安全或运行的严重问题。', phonics: 'ma 读 /meɪ/，jor 读 /dʒər/', collocations: [['major issues', '重大问题'], ['minor issues', '轻微问题'], ['critical issues', '严重问题']], examples: [['No major issues found.', '未发现重大问题。'], ['One major issue was identified.', '发现一个重大问题。']] },
      { w: 'identified', ipa: '/aɪˈdɛntɪfaɪd/', pos: '动词（过去分词）', cn: '发现；识别', memory: 'identify(识别) 的过去式/过去分词。i + dent(牙齿/咬) + ify → 咬住不放 → 识别出来。', phonics: 'i 读 /aɪ/，den 读 /dɛn/，ti 读 /tɪ/，fied 读 /faɪd/', collocations: [['issues identified', '发现的问题'], ['risk identified', '识别的风险'], ['root cause identified', '已识别根本原因']], examples: [['Three issues were identified.', '发现了三个问题。'], ['Root cause has been identified.', '根本原因已识别。']] },
    ],
    phrases: [
      { p: 'were identified', ipa: '/wər aɪˈdɛntɪfaɪd/', cn: '被发现', why: '被动语态过去时，表示在测试过程中问题被识别出来。' },
      { p: 'during testing', ipa: '/ˈdʊrɪŋ ˈtɛstɪŋ/', cn: '在测试过程中', why: 'during + 名词，表示在某个活动期间。' },
    ],
    grammar: [
      { q: '为什么用 identified 而不是 found？', a: 'identified 更正式、更专业，强调「经过分析后识别出」；found 更口语化，只是「找到」。\n✅ No major issues were identified during testing.（专业表达。）\n✅ No major issues were found during testing.（口语化，也能用。）\n审计场景中 identified 更合适。' },
    ],
    pattern: 'No major issues were identified during + 活动',
    patternExamples: [
      { en: 'No major issues were identified during inspection.', cn: '巡检过程中未发现重大问题。', words: [] },
      { en: 'No major issues were identified during the drill.', cn: '演练过程中未发现重大问题。', words: [] },
      { en: 'No major issues were identified during the audit.', cn: '审核过程中未发现重大问题。', words: [] },
    ],
    thinking: '审计中「测试有没有发现重大问题」是必问问题。\nNo major issues were identified 是最理想的回答。\n注意用 major 而不是 any，因为 minor issues（小问题）几乎总会有，但 major（重大的）才是审计关注的重点。',
    pronunciation: 'major 重音在第一音节：MA-jor。\nidentified 重音在第二音节：i-DEN-ti-fied。\n节奏：NO MA-jor ｜ IS-sues ｜ were i-DEN-ti-fied ｜ DUR-ing TEST-ing.',
    quiz: [
      { q: '把「测试过程中未发现重大问题。」用英语说出来。', a: 'No major issues were identified during testing.' },
      { q: '「发现/识别」用英语怎么说？', a: 'identify (/aɪˈdɛntɪfaɪ/)' },
    ],
  },
  {
    id: 1951,
    speaker: 'Auditor',
    en: 'How do you manage critical alarms?',
    cn: '你们如何管理严重告警？',
    ipa: '/haʊ duː juː ˈmænɪdʒ ˈkrɪtɪkəl ɑːrmz/',
    tags: ['第1951句', '审计问答', '★★★★★'],
    when: '审计员在问答环节提出关于严重告警管理流程的问题。',
    words: [
      { w: 'manage', ipa: '/ˈmænɪdʒ/', pos: '动词', cn: '管理', memory: 'man(手) + age(行为) → 用手操控 → 管理、处理。', phonics: 'man 读 /mæn/，age 读 /ɪdʒ/', collocations: [['manage alarms', '管理告警'], ['manage risks', '管理风险'], ['manage tickets', '管理工单']], examples: [['How do you manage alarms?', '你们如何管理告警？'], ['We manage risks proactively.', '我们主动管理风险。']] },
      { w: 'critical alarms', ipa: '/ˈkrɪtɪkəl ɑːrmz/', pos: '名词', cn: '严重告警', memory: 'critical(关键的/严重的) + alarms(告警) → 最高级别的告警。', phonics: 'crit 读 /krɪt/，ical 读 /ɪkəl/', collocations: [['critical alarms', '严重告警'], ['critical incident', '严重事件'], ['critical system', '关键系统']], examples: [['Critical alarms must be handled immediately.', '严重告警必须立即处理。'], ['No critical alarms today.', '今天没有严重告警。']] },
    ],
    phrases: [
      { p: 'How do you', ipa: '/haʊ duː juː/', cn: '你们如何', why: 'How do you + 动词 是审计问答中最常见的提问句式，询问操作流程。' },
    ],
    grammar: [
      { q: '审计中常见的 How 提问有哪些？', a: 'How do you + 动词 是审计标准提问句式：\n✅ How do you manage critical alarms?（你们如何管理严重告警？）\n✅ How do you ensure SLA compliance?（你们如何确保SLA合规？）\n✅ How do you handle escalations?（你们如何处理升级？）\n回答时通常用 We + 动词 + 具体流程描述。' },
    ],
    pattern: 'How do you + 动词 + 名词？',
    patternExamples: [
      { en: 'How do you handle escalations?', cn: '你们如何处理升级？', words: [] },
      { en: 'How do you track maintenance progress?', cn: '你们如何跟踪维护进度？', words: [] },
      { en: 'How do you verify contractor qualifications?', cn: '你们如何验证承包商资质？', words: [] },
    ],
    thinking: '审计问答环节是审计的核心部分。\n审计员会用 How do you + 动词 句式提问操作流程。\n回答时需要展示具体的流程步骤、责任人和时间节点。',
    pronunciation: 'manage 重音在第一音节：MAN-age。\ncritical 重音在第一音节：CRIT-i-cal。\n节奏：HOW do you ｜ MAN-age ｜ CRIT-i-cal ｜ ALARMS?',
    quiz: [
      { q: '用英语问「你们如何管理严重告警？」', a: 'How do you manage critical alarms?' },
      { q: '「管理」用英语怎么说？', a: 'manage (/ˈmænɪdʒ/)' },
    ],
  },
  {
    id: 1952,
    speaker: 'Manager',
    en: 'Critical alarms are handled immediately by the duty team.',
    cn: '严重告警由值班团队立即处理。',
    ipa: '/ˈkrɪtɪkəl ɑːrmz ɑːr ˈhændəld ɪˈmiːdiətli baɪ ðə ˈdjuːti tiːm/',
    tags: ['第1952句', '审计问答', '★★★★★'],
    when: '值班经理回答审计员关于严重告警处理流程的问题。',
    words: [
      { w: 'handled', ipa: '/ˈhændəld/', pos: '动词（过去分词）', cn: '处理', memory: 'handle(处理) 的过去分词。hand(手) + le → 用手处理 → 处理。', phonics: 'hand 读 /hænd/，led 读 /əld/', collocations: [['handled immediately', '立即处理'], ['handled by', '由……处理'], ['properly handled', '妥善处理']], examples: [['The alarm was handled immediately.', '告警被立即处理了。'], ['All tickets are handled by the duty team.', '所有工单由值班团队处理。']] },
      { w: 'immediately', ipa: '/ɪˈmiːdiətli/', pos: '副词', cn: '立即', memory: 'im(不) + medi(中间) + ately → 没有中间等待 → 立即。', phonics: 'im 读 /ɪm/，me 读 /miː/，di 读 /di/，ately 读 /ətli/', collocations: [['handled immediately', '立即处理'], ['respond immediately', '立即响应'], ['report immediately', '立即报告']], examples: [['Report the incident immediately.', '立即报告事件。'], ['We respond immediately to critical alarms.', '我们对严重告警立即响应。']] },
    ],
    phrases: [
      { p: 'are handled immediately', ipa: '/ɑːr ˈhændəld ɪˈmiːdiətli/', cn: '被立即处理', why: '被动语态 + 时间副词，强调处理的及时性。' },
      { p: 'by the duty team', ipa: '/baɪ ðə ˈdjuːti tiːm/', cn: '由值班团队', why: 'by + 执行者，被动语态中说明谁执行了动作。' },
    ],
    grammar: [
      { q: '为什么用被动语态 are handled 而不是主动语态 We handle？', a: '被动语态 are handled 把焦点放在「严重告警」上，强调告警被处理的事实，而非谁在处理。\n✅ Critical alarms are handled immediately by the duty team.（焦点在告警上。）\n✅ The duty team handles critical alarms immediately.（焦点在团队上。）\n审计回答中被动语态更常见，因为审计关注的是「事情有没有做」而非「谁做的」。' },
    ],
    pattern: '名词 + are + 过去分词 + 副词 + by + 执行者',
    patternExamples: [
      { en: 'Tickets are processed promptly by the NOC team.', cn: '工单由NOC团队及时处理。', words: [] },
      { en: 'Incidents are reported immediately by the duty engineer.', cn: '事件由值班工程师立即报告。', words: [] },
      { en: 'Alarms are acknowledged within five minutes by the monitoring team.', cn: '告警由监控团队在5分钟内确认。', words: [] },
    ],
    thinking: '审计回答的核心是展示流程的规范性和及时性。\nare handled immediately 强调「立即处理」，这是严重告警管理的核心要求。\nby the duty team 明确了责任主体，让审计员知道有专人负责。',
    pronunciation: 'handled 读 /ˈhændəld/，注意 d 不要省略。\nimmediately 重音在第二音节：im-ME-di-ate-ly，5个音节。\n节奏：CRIT-i-cal ALARMS ｜ are HAN-dled ｜ im-ME-di-ate-ly ｜ by the DU-ty TEAM.',
    quiz: [
      { q: '把「严重告警由值班团队立即处理。」用英语说出来。', a: 'Critical alarms are handled immediately by the duty team.' },
      { q: '「立即」用英语怎么说？', a: 'immediately (/ɪˈmiːdiətli/)' },
    ],
  },
  {
    id: 1953,
    speaker: 'Auditor',
    en: 'How do you ensure compliance with the SLA?',
    cn: '你们如何确保符合SLA要求？',
    ipa: '/haʊ duː juː ɪnˈʃʊr kəmˈplaɪəns wɪð ðə ˌɛsɛlˈeɪ/',
    tags: ['第1953句', '审计问答', '★★★★★'],
    when: '审计员询问SLA合规管理机制。',
    words: [
      { w: 'ensure', ipa: '/ɪnˈʃʊr/', pos: '动词', cn: '确保', memory: 'en(使) + sure(确定) → 使之确定 → 确保。', phonics: 'en 读 /ɪn/，sure 读 /ʃʊr/', collocations: [['ensure compliance', '确保合规'], ['ensure quality', '确保质量'], ['ensure safety', '确保安全']], examples: [['We ensure SLA compliance.', '我们确保SLA合规。'], ['Ensure all doors are locked.', '确保所有门已锁。']] },
      { w: 'compliance', ipa: '/kəmˈplaɪəns/', pos: '名词', cn: '合规；遵从', memory: 'comply(遵守) + ance(名词后缀) → 遵守的状态 → 合规。', phonics: 'com 读 /kəm/，pli 读 /plaɪ/，ance 读 /əns/', collocations: [['compliance with', '遵守……'], ['regulatory compliance', '法规合规'], ['SLA compliance', 'SLA合规']], examples: [['Compliance is mandatory.', '合规是强制性的。'], ['Check SLA compliance status.', '检查SLA合规状态。']] },
      { w: 'SLA', ipa: '/ˌɛsɛlˈeɪ/', pos: '名词缩写', cn: '服务等级协议', memory: 'Service Level Agreement 的首字母缩写，逐字母读 S-L-A。', phonics: '逐字母读 S(/ɛs/)-L(/ɛl/)-A(/eɪ/)', collocations: [['SLA compliance', 'SLA合规'], ['SLA breach', 'SLA违约'], ['SLA deadline', 'SLA时限']], examples: [['No SLA breaches this month.', '本月无SLA违约。'], ['SLA requires 4-hour response.', 'SLA要求4小时响应。']] },
    ],
    phrases: [
      { p: 'ensure compliance with', ipa: '/ɪnˈʃʊr kəmˈplaɪəns wɪð/', cn: '确保符合……', why: 'ensure + compliance + with 是审计中「确保合规」的标准搭配。' },
    ],
    grammar: [
      { q: 'compliance with 和 comply with 有什么区别？', a: 'compliance 是名词，comply 是动词：\n✅ How do you ensure compliance with the SLA?（ensure + 名词）\n✅ How do you comply with the SLA?（动词 + with）\n两者意思相同，但 ensure compliance 更强调「确保」这个管理动作。' },
    ],
    pattern: 'How do you ensure compliance with + 名词？',
    patternExamples: [
      { en: 'How do you ensure compliance with safety regulations?', cn: '你们如何确保符合安全法规？', words: [] },
      { en: 'How do you ensure compliance with environmental standards?', cn: '你们如何确保符合环境标准？', words: [] },
      { en: 'How do you ensure compliance with access control policies?', cn: '你们如何确保符合门禁管理政策？', words: [] },
    ],
    thinking: 'SLA合规是数据中心审计的核心指标之一。\n审计员关心的是团队有没有机制来监控工单时限，防止超期。\nensure compliance with 是审计中最常见的合规提问句式。',
    pronunciation: 'ensure 重音在第二音节：en-SURE。\ncompliance 重音在第二音节：com-PLI-ance。\nSLA 逐字母读 S-L-A。\n节奏：HOW do you ｜ en-SURE ｜ com-PLI-ance ｜ with the S-L-A?',
    quiz: [
      { q: '用英语问「你们如何确保符合SLA要求？」', a: 'How do you ensure compliance with the SLA?' },
      { q: '「合规」用英语怎么说？', a: 'compliance (/kəmˈplaɪəns/)' },
    ],
  },
  {
    id: 1954,
    speaker: 'Manager',
    en: 'We continuously monitor all ticket deadlines.',
    cn: '我们持续监控所有工单时限。',
    ipa: '/wiː kənˈtɪnjuəsli ˈmɒnɪtər ɔːl ˈtɪkɪt ˈdɛdlaɪnz/',
    tags: ['第1954句', '审计问答', '★★★★★'],
    when: '值班经理回答审计员关于SLA合规监控机制的问题。',
    words: [
      { w: 'continuously', ipa: '/kənˈtɪnjuəsli/', pos: '副词', cn: '持续地', memory: 'continue(继续) + ous(形容词后缀) + ly(副词后缀) → 不间断地。', phonics: 'con 读 /kən/，tin 读 /tɪn/，u 读 /ju/，ously 读 /əsli/', collocations: [['continuously monitor', '持续监控'], ['continuously improve', '持续改进'], ['continuously available', '持续可用']], examples: [['We continuously monitor system health.', '我们持续监控系统健康。'], ['Services are continuously available.', '服务持续可用。']] },
      { w: 'deadlines', ipa: '/ˈdɛdlaɪnz/', pos: '名词（复数）', cn: '截止时间；时限', memory: 'dead(死) + line(线) → 不能超过的线 → 截止时间。', phonics: 'dead 读 /dɛd/，lines 读 /laɪnz/', collocations: [['ticket deadlines', '工单时限'], ['meet deadlines', '按时限完成'], ['miss deadlines', '错过时限']], examples: [['All deadlines are tracked.', '所有限时都在跟踪。'], ['Never miss a deadline.', '不要错过任何时限。']] },
    ],
    phrases: [
      { p: 'continuously monitor', ipa: '/kənˈtɪnjuəsli ˈmɒnɪtər/', cn: '持续监控', why: 'continuously 修饰 monitor，强调监控是不间断的、实时的。' },
      { p: 'ticket deadlines', ipa: '/ˈtɪkɪt ˈdɛdlaɪnz/', cn: '工单时限', why: 'ticket 修饰 deadlines，明确是工单相关的截止时间。' },
    ],
    grammar: [
      { q: 'continuously 和 continually 有什么区别？', a: 'continuously = 不间断地（没有中断）；continually = 频繁地（有间隔但反复发生）。\n✅ We continuously monitor all ticket deadlines.（24/7不间断监控。）\n✅ We continually review our processes.（定期反复审查。）\n监控告警和工单用 continuously，因为是真的不间断。' },
    ],
    pattern: 'We continuously monitor + 名词',
    patternExamples: [
      { en: 'We continuously monitor all system alarms.', cn: '我们持续监控所有系统告警。', words: [] },
      { en: 'We continuously monitor environmental conditions.', cn: '我们持续监控环境条件。', words: [] },
      { en: 'We continuously monitor power consumption.', cn: '我们持续监控电力消耗。', words: [] },
    ],
    thinking: 'SLA合规的关键是「持续监控」而非「事后检查」。\nWe continuously monitor all ticket deadlines 展示了团队的主动管理能力。\n这意味着有系统或流程在实时跟踪每张工单的剩余时间。',
    pronunciation: 'continuously 重音在第二音节：con-TIN-u-ous-ly。\nmonitor 重音在第一音节：MON-i-tor。\ndeadlines 重音在第一音节：DEAD-lines。\n节奏：We con-TIN-u-ous-ly ｜ MON-i-tor ｜ ALL TICK-et ｜ DEAD-lines.',
    quiz: [
      { q: '把「我们持续监控所有工单时限。」用英语说出来。', a: 'We continuously monitor all ticket deadlines.' },
      { q: '「截止时间」用英语怎么说？', a: 'deadline (/ˈdɛdlaɪn/)' },
    ],
  },
  {
    id: 1955,
    speaker: 'Auditor',
    en: 'How often do you perform preventive maintenance?',
    cn: '你们多久进行一次预防性维护？',
    ipa: '/haʊ ˈɒfən duː juː pərˈfɔːrm prɪˈvɛntɪv ˈmeɪntənəns/',
    tags: ['第1955句', '审计问答', '★★★★★'],
    when: '审计员询问预防性维护的执行频率。',
    words: [
      { w: 'how often', ipa: '/haʊ ˈɒfən/', pos: '疑问词组', cn: '多久一次', memory: 'how(如何) + often(经常) → 多频繁 → 多久一次。', phonics: 'how 读 /haʊ/，often 读 /ˈɒfən/', collocations: [['how often', '多久一次'], ['how frequently', '多频繁'], ['how regularly', '多规律']], examples: [['How often do you inspect?', '你们多久巡检一次？'], ['How often is PM scheduled?', 'PM多久安排一次？']] },
      { w: 'perform', ipa: '/pərˈfɔːrm/', pos: '动词', cn: '执行；进行', memory: 'per(完全) + form(形态) → 完全呈现 → 执行、完成。', phonics: 'per 读 /pər/，form 读 /fɔːrm/', collocations: [['perform maintenance', '执行维护'], ['perform inspection', '执行巡检'], ['perform test', '执行测试']], examples: [['We perform PM monthly.', '我们每月执行PM。'], ['Test performed successfully.', '测试执行成功。']] },
    ],
    phrases: [
      { p: 'How often do you perform', ipa: '/haʊ ˈɒfən duː juː pərˈfɔːrm/', cn: '你们多久执行一次', why: 'How often 询问频率，是审计中了解维护周期的标准提问。' },
    ],
    grammar: [
      { q: 'How often 的回答通常怎么说？', a: 'How often 询问频率，常见回答模式：\n✅ Preventive maintenance is performed monthly.（每月执行。）\n✅ We perform PM according to the annual schedule.（按年度计划执行。）\n✅ UPS maintenance is done quarterly, generator testing monthly.（不同设备不同频率。）\n回答时给出具体频率或引用维护计划。' },
    ],
    pattern: 'How often do you perform + 名词？',
    patternExamples: [
      { en: 'How often do you perform fire drills?', cn: '你们多久进行一次消防演练？', words: [] },
      { en: 'How often do you perform battery tests?', cn: '你们多久进行一次电池测试？', words: [] },
      { en: 'How often do you perform safety inspections?', cn: '你们多久进行一次安全检查？', words: [] },
    ],
    thinking: '审计员需要了解维护频率来判断团队的运维规范性。\nHow often do you perform + 活动 是标准的频率提问句式。\n回答时最好引用年度维护计划，展示系统化管理。',
    pronunciation: 'often 读 /ˈɒfən/，t 不发音（英式）。\nperform 重音在第二音节：per-FORM。\n节奏：HOW OF-ten ｜ do you per-FORM ｜ pre-VEN-tive ｜ MAIN-tenance?',
    quiz: [
      { q: '用英语问「你们多久进行一次预防性维护？」', a: 'How often do you perform preventive maintenance?' },
      { q: '「执行」用英语怎么说？', a: 'perform (/pərˈfɔːrm/)' },
    ],
  },
  {
    id: 1956,
    speaker: 'Manager',
    en: 'Preventive maintenance is performed according to the annual maintenance schedule.',
    cn: '预防性维护按照年度维护计划执行。',
    ipa: '/prɪˈvɛntɪv ˈmeɪntənəns ɪz pərˈfɔːrmd əˈkɔːrdɪŋ tuː ðə ˈænjuəl ˈmeɪntənəns ˈʃɛdjuːl/',
    tags: ['第1956句', '审计问答', '★★★★★'],
    when: '值班经理回答审计员关于维护频率的问题，引用年度计划。',
    words: [
      { w: 'according to', ipa: '/əˈkɔːrdɪŋ tuː/', pos: '介词短语', cn: '按照；根据', memory: 'accord(一致) + ing + to → 与……一致 → 按照。', phonics: 'ac 读 /ə/，cord 读 /kɔːrd/，ing 读 /ɪŋ/', collocations: [['according to', '按照'], ['according to the plan', '按照计划'], ['according to the SOP', '按照SOP']], examples: [['Work done according to the MOP.', '按照MOP完成工作。'], ['According to the schedule.', '按照计划。']] },
      { w: 'annual', ipa: '/ˈænjuəl/', pos: '形容词', cn: '年度的', memory: 'ann(年) + ual(形容词后缀) → 每年的。同根词：anniversary(周年)。', phonics: 'an 读 /æn/，nu 读 /nju/，al 读 /əl/', collocations: [['annual schedule', '年度计划'], ['annual maintenance plan', '年度维护计划'], ['annual review', '年度审查']], examples: [['Annual PM plan is approved.', '年度PM计划已批准。'], ['Annual review is in December.', '年度审查在12月。']] },
      { w: 'schedule', ipa: '/ˈʃɛdjuːl/', pos: '名词', cn: '计划表；时间表', memory: 'schedule 原指纸条，后引申为时间安排表。', phonics: '英式读 /ˈʃɛdjuːl/，美式读 /ˈskɛdʒuːl/', collocations: [['maintenance schedule', '维护计划'], ['work schedule', '工作计划'], ['on schedule', '按计划']], examples: [['Check the maintenance schedule.', '查看维护计划。'], ['Schedule has been updated.', '计划已更新。']] },
    ],
    phrases: [
      { p: 'according to the annual maintenance schedule', ipa: '/əˈkɔːrdɪŋ tuː ðə ˈænjuəl ˈmeɪntənəns ˈʃɛdjuːl/', cn: '按照年度维护计划', why: 'according to 引用权威依据，展示维护不是随意的，而是有计划、有章可循的。' },
    ],
    grammar: [
      { q: '为什么用被动语态 is performed？', a: '被动语态 is performed 把焦点放在「预防性维护」上，强调维护被按章执行的事实。\n✅ PM is performed according to the schedule.（焦点在PM被规范执行。）\n✅ We perform PM according to the schedule.（焦点在团队执行PM。）\n审计中被动语态更常见，因为审计关注的是「事情有没有按规定做」。' },
    ],
    pattern: '名词 + is performed according to + 依据',
    patternExamples: [
      { en: 'Inspections are performed according to the checklist.', cn: '巡检按照检查清单执行。', words: [] },
      { en: 'Testing is performed according to the manufacturer guidelines.', cn: '测试按照制造商指南执行。', words: [] },
      { en: 'Calibration is performed according to the ISO standards.', cn: '校准按照ISO标准执行。', words: [] },
    ],
    thinking: '引用年度维护计划是审计回答的最佳策略。\n它展示了系统化管理：不是想到什么做什么，而是有计划、有审批、有跟踪。\naccording to the annual maintenance schedule 这个回答让审计员放心——团队有章可循。',
    pronunciation: 'according 重音在第二音节：a-CORD-ing。\nannual 重音在第一音节：AN-nu-al。\nschedule 英式读 SCHED-ule，美式读 SKEJ-ule。\n节奏：Pre-VEN-tive MAIN-tenance ｜ is per-FORMED ｜ a-CORD-ing to ｜ the AN-nu-al ｜ MAIN-tenance SCHED-ule.',
    quiz: [
      { q: '把「预防性维护按照年度维护计划执行。」用英语说出来。', a: 'Preventive maintenance is performed according to the annual maintenance schedule.' },
      { q: '「按照」用英语怎么说？', a: 'according to (/əˈkɔːrdɪŋ tuː/)' },
    ],
  },
  {
    id: 1957,
    speaker: 'Auditor',
    en: 'How do you manage operational risks?',
    cn: '你们如何管理运行风险？',
    ipa: '/haʊ duː juː ˈmænɪdʒ ˌɑpəˈreɪʃənəl rɪsks/',
    tags: ['第1957句', '审计问答', '★★★★★'],
    when: '审计员询问运维风险管理机制。',
    words: [
      { w: 'operational', ipa: '/ˌɑpəˈreɪʃənəl/', pos: '形容词', cn: '运行的；操作的', memory: 'operation(运营) + al(形容词后缀) → 与运营相关的。', phonics: 'op 读 /ɑp/，er 读 /ər/，a 读 /eɪ/，tional 读 /ʃənəl/', collocations: [['operational risks', '运行风险'], ['operational procedures', '操作规程'], ['operational excellence', '运营卓越']], examples: [['Operational risks are assessed monthly.', '运行风险每月评估。'], ['Follow operational procedures.', '遵守操作规程。']] },
      { w: 'risks', ipa: '/rɪsks/', pos: '名词（复数）', cn: '风险', memory: 'risk 原指航海中的暗礁，引申为一切潜在危险。', phonics: 'risk 读 /rɪsk/，s 读 /s/', collocations: [['risk assessment', '风险评估'], ['risk management', '风险管理'], ['risk mitigation', '风险缓释']], examples: [['Complete the risk assessment.', '完成风险评估。'], ['Risk level is low.', '风险等级低。']] },
    ],
    phrases: [
      { p: 'operational risks', ipa: '/ˌɑpəˈreɪʃənəl rɪsks/', cn: '运行风险', why: 'operational 限定 risks 的范围，专指运维操作层面的风险，区别于财务风险、市场风险等。' },
    ],
    grammar: [
      { q: 'operational risk 和 safety risk 有什么区别？', a: 'operational risk = 运行风险（设备故障、停电、制冷失效等影响运营的风险）；safety risk = 安全风险（人员受伤、触电、化学品泄漏等影响人身安全的风险）。\n✅ How do you manage operational risks?（运维操作风险。）\n✅ How do you manage safety risks?（人员安全风险。）\n审计中两者都会问，但关注点不同。' },
    ],
    pattern: 'How do you manage + 形容词 + risks？',
    patternExamples: [
      { en: 'How do you manage safety risks?', cn: '你们如何管理安全风险？', words: [] },
      { en: 'How do you manage environmental risks?', cn: '你们如何管理环境风险？', words: [] },
      { en: 'How do you manage cybersecurity risks?', cn: '你们如何管理网络安全风险？', words: [] },
    ],
    thinking: '风险管理是审计中的重要板块。\n审计员想了解团队有没有系统的风险识别、评估和缓释机制。\noperational risks 涵盖了设备故障、供电中断、制冷失效等所有运维层面的风险。',
    pronunciation: 'operational 重音在第三音节：op-er-A-tion-al，5个音节。\nrisks 读 /rɪsks/，注意 sks 三个辅音连读。\n节奏：HOW do you ｜ MAN-age ｜ op-er-A-tion-al ｜ RISKS?',
    quiz: [
      { q: '用英语问「你们如何管理运行风险？」', a: 'How do you manage operational risks?' },
      { q: '「运行风险」用英语怎么说？', a: 'operational risks (/ˌɑpəˈreɪʃənəl rɪsks/)' },
    ],
  },
  {
    id: 1958,
    speaker: 'Manager',
    en: 'Every operational risk is assessed before any maintenance work begins.',
    cn: '每项维护工作开始前都会进行风险评估。',
    ipa: '/ˈɛvəri ˌɑpəˈreɪʃənəl rɪsk ɪz əˈsɛst bɪˈfɔːr ˈɛni ˈmeɪntənəns wɜːrk bɪˈɡɪnz/',
    tags: ['第1958句', '审计问答', '★★★★★'],
    when: '值班经理回答审计员关于风险管理的问题，展示风险评估流程。',
    words: [
      { w: 'assessed', ipa: '/əˈsɛst/', pos: '动词（过去分词）', cn: '评估', memory: 'assess 来自 ad(向) + sess(坐) → 坐下来评定 → 评估。', phonics: 'as 读 /ə/，sess 读 /sɛst/', collocations: [['risk assessed', '风险评估'], ['assessed before', '在……前评估'], ['properly assessed', '正确评估']], examples: [['All risks are assessed.', '所有风险都已评估。'], ['Assess the risk first.', '先评估风险。']] },
      { w: 'begins', ipa: '/bɪˈɡɪnz/', pos: '动词', cn: '开始', memory: 'begin 的第三人称单数。be(使) + gin(开始) → 开始。', phonics: 'be 读 /bɪ/，gins 读 /ɡɪnz/', collocations: [['work begins', '工作开始'], ['before work begins', '工作开始前'], ['shift begins', '班次开始']], examples: [['Work begins at 9 AM.', '工作9点开始。'], ['Before any work begins, assess risks.', '任何工作开始前，先评估风险。']] },
    ],
    phrases: [
      { p: 'is assessed before', ipa: '/ɪz əˈsɛst bɪˈfɔːr/', cn: '在……之前被评估', why: '被动语态 + before 时间从句，强调评估先于工作开始，体现风险前置管理。' },
      { p: 'before any maintenance work begins', ipa: '/bɪˈfɔːr ˈɛni ˈmeɪntənəns wɜːrk bɪˈɡɪnz/', cn: '在任何维护工作开始前', why: 'before + 从句，明确风险评估的时间节点——工作开始前。' },
    ],
    grammar: [
      { q: '为什么用 Every 而不是 All？', a: 'Every + 单数名词 强调「每一项 individually」，逐一评估；All + 复数名词 强调「全部 collectively」，整体评估。\n✅ Every operational risk is assessed.（每一项都单独评估。）—— 更精确\n✅ All operational risks are assessed.（所有风险都评估了。）—— 稍笼统\n审计中用 Every 更能展示严谨态度。' },
    ],
    pattern: 'Every + 名词 + is + 过去分词 + before + 从句',
    patternExamples: [
      { en: 'Every change request is reviewed before implementation.', cn: '每个变更请求在实施前都会审核。', words: [] },
      { en: 'Every contractor is verified before entering the facility.', cn: '每个承包商在进入园区前都会验证。', words: [] },
      { en: 'Every alarm is acknowledged before investigation begins.', cn: '每条告警在调查前都会被确认。', words: [] },
    ],
    thinking: '风险评估前置是运维管理的核心原则。\nEvery risk is assessed before work begins 展示了团队「先评估、后操作」的安全文化。\n这种回答让审计员确信团队不会盲目操作，而是有风险意识。',
    pronunciation: 'assessed 读 /əˈsɛst/，重音在第二音节。\nbegins 读 /bɪˈɡɪnz/，重音在第二音节。\n节奏：EV-ery op-er-A-tion-al RISK ｜ is as-SASSED ｜ be-FORE an-y ｜ MAIN-tenance WORK ｜ be-GINS.',
    quiz: [
      { q: '把「每项维护工作开始前都会进行风险评估。」用英语说出来。', a: 'Every operational risk is assessed before any maintenance work begins.' },
      { q: '「评估」用英语怎么说？', a: 'assess (/əˈsɛs/)' },
    ],
  },
  {
    id: 1959,
    speaker: 'Manager',
    en: 'Thank you for your valuable feedback.',
    cn: '感谢您的宝贵意见。',
    ipa: '/θæŋk juː fɔːr jɔːr ˈvæljuəbəl ˈfiːdbæk/',
    tags: ['第1959句', '审计问答', '★★★★★'],
    when: '审计问答环节结束，值班经理感谢审计员的反馈。',
    words: [
      { w: 'valuable', ipa: '/ˈvæljuəbəl/', pos: '形容词', cn: '宝贵的；有价值的', memory: 'value(价值) + able(能够) → 有价值的 → 宝贵的。', phonics: 'val 读 /væl/，u 读 /ju/，able 读 /əbəl/', collocations: [['valuable feedback', '宝贵意见'], ['valuable experience', '宝贵经验'], ['valuable input', '宝贵建议']], examples: [['Thank you for your valuable input.', '感谢您的宝贵建议。'], ['Your feedback is very valuable.', '您的反馈非常宝贵。']] },
      { w: 'feedback', ipa: '/ˈfiːdbæk/', pos: '名词', cn: '反馈；意见', memory: 'feed(喂/输入) + back(回) → 回馈信息 → 反馈。', phonics: 'feed 读 /fiːd/，back 读 /bæk/', collocations: [['valuable feedback', '宝贵反馈'], ['positive feedback', '正面反馈'], ['constructive feedback', '建设性反馈']], examples: [['We appreciate your feedback.', '感谢您的反馈。'], ['Feedback has been recorded.', '反馈已记录。']] },
    ],
    phrases: [
      { p: 'Thank you for', ipa: '/θæŋk juː fɔːr/', cn: '感谢您……', why: 'Thank you for + 名词/动名词 是正式的感谢句式。' },
      { p: 'valuable feedback', ipa: '/ˈvæljuəbəl ˈfiːdbæk/', cn: '宝贵的反馈', why: 'valuable 修饰 feedback，表达对审计意见的重视和尊重。' },
    ],
    grammar: [
      { q: '为什么在审计结束时要感谢反馈？', a: '审计不仅是检查，也是学习机会。感谢审计员的反馈展示了团队的开放态度和改进意愿。\n✅ Thank you for your valuable feedback.（感谢宝贵意见。—— 通用）\n✅ We appreciate your constructive feedback.（感谢建设性反馈。—— 更正式）\n✅ Your feedback will help us improve.（您的反馈将帮助我们改进。—— 展示行动意愿）' },
    ],
    pattern: 'Thank you for your + 形容词 + 名词',
    patternExamples: [
      { en: 'Thank you for your thorough review.', cn: '感谢您细致的审查。', words: [] },
      { en: 'Thank you for your professional guidance.', cn: '感谢您的专业指导。', words: [] },
      { en: 'Thank you for your detailed recommendations.', cn: '感谢您详细的建议。', words: [] },
    ],
    thinking: '审计结束时的感谢语体现了团队的专业素养。\nvaluable feedback 比 simple thank you 更有分量，表达了对审计工作的真正尊重。\n这句话也为后续整改和改进留下了良好的沟通基础。',
    pronunciation: 'valuable 重音在第一音节：VAL-u-a-ble，注意不要读成 val-YOO-a-ble。\nfeedback 重音在第一音节：FEED-back。\n节奏：THANK you ｜ for your ｜ VAL-u-a-ble ｜ FEED-back.',
    quiz: [
      { q: '把「感谢您的宝贵意见。」用英语说出来。', a: 'Thank you for your valuable feedback.' },
      { q: '「反馈」用英语怎么说？', a: 'feedback (/ˈfiːdbæk/)' },
    ],
  },
  {
    id: 1960,
    speaker: 'Manager',
    en: 'The customer audit has been completed successfully.',
    cn: '客户审核已经顺利完成。',
    ipa: '/ðə ˈkʌstəmər ˈɔːdɪt hæz bɪn kəmˈpliːtɪd səkˈsɛsfəli/',
    tags: ['第1960句', '审计问答', '★★★★★'],
    when: '审计全部结束后，值班经理做最终总结发言。',
    words: [
      { w: 'customer audit', ipa: '/ˈkʌstəmər ˈɔːdɪt/', pos: '名词', cn: '客户审核', memory: 'customer(客户) + audit(审核) → 由客户发起的对数据中心运营合规性的审查。', phonics: 'cus 读 /kʌs/，tomer 读 /təmər/', collocations: [['customer audit', '客户审核'], ['internal audit', '内部审核'], ['audit report', '审核报告']], examples: [['Customer audit is scheduled for next week.', '客户审核安排在下周。'], ['Audit passed successfully.', '审核顺利通过。']] },
      { w: 'successfully', ipa: '/səkˈsɛsfəli/', pos: '副词', cn: '成功地；顺利地', memory: 'success(成功) + ful(充满) + ly(副词后缀) → 成功地。', phonics: 'suc 读 /sək/，cess 读 /sɛs/，fully 读 /fəli/', collocations: [['completed successfully', '顺利完成'], ['passed successfully', '顺利通过'], ['operating successfully', '成功运行']], examples: [['The audit was completed successfully.', '审核顺利完成。'], ['System is operating successfully.', '系统运行正常。']] },
    ],
    phrases: [
      { p: 'has been completed successfully', ipa: '/hæz bɪn kəmˈpliːtɪd səkˈsɛsfəli/', cn: '已经顺利完成', why: '现在完成时被动语态 + successfully，表示审核已完成且结果是正面的。' },
    ],
    grammar: [
      { q: '为什么用 has been completed 而不是 is completed？', a: 'has been completed 是现在完成时，强调动作已完成且对现在有影响——审核结束了，可以出结果了。\nis completed 是一般现在时被动，描述状态而非动作完成。\n✅ The audit has been completed successfully.（审核已经完成了。—— 强调完成）\n❌ The audit is completed successfully.（语法不太自然，一般不说。）' },
    ],
    pattern: '名词 + has been completed + 副词',
    patternExamples: [
      { en: 'The inspection has been completed successfully.', cn: '巡检已顺利完成。', words: [] },
      { en: 'The drill has been completed satisfactorily.', cn: '演练已满意地完成。', words: [] },
      { en: 'The maintenance has been completed on time.', cn: '维护已按时完成。', words: [] },
    ],
    thinking: '这是整个审计流程的结束语。\nhas been completed successfully 是最正式的总结表达，适合在审计结束时宣布。\n这句话也是第32部分（1921-1960）的最后一句，完成了从接待到审核结束的完整客户审计流程。',
    pronunciation: 'customer 重音在第一音节：CUS-tom-er。\naudit 重音在第一音节：AU-dit。\nsuccessfully 重音在第二音节：suc-CESS-ful-ly。\n节奏：The CUS-tom-er AU-dit ｜ has been com-PLE-ted ｜ suc-CESS-ful-ly.',
    quiz: [
      { q: '把「客户审核已经顺利完成。」用英语说出来。', a: 'The customer audit has been completed successfully.' },
      { q: '「客户审核」用英语怎么说？', a: 'customer audit (/ˈkʌstəmər ˈɔːdɪt/)' },
    ],
  },
];

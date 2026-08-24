// EXPORTS: MOCK_SENTENCES_RECRUITMENT36B

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_RECRUITMENT36B: ISentence[] = [
  {
    id: 2101,
    speaker: 'Interviewer',
    en: 'Are you familiar with chilled water systems?',
    cn: '您熟悉冷冻水系统吗？',
    ipa: '/ɑːr juː fəˈmɪliər wɪð tʃɪld ˈwɔːtər ˈsɪstəmz/',
    tags: ['第2101句', '暖通专业', '★★★★★'],
    when: '面试官考察暖通工程师候选人对冷冻水制冷系统的了解程度。',
    words: [
      { w: 'chilled water', ipa: '/tʃɪld ˈwɔːtər/', pos: '名词', cn: '冷冻水', memory: 'chilled(被冷却的)+water(水)→数据中心制冷系统的核心冷却介质。', phonics: 'chill 读 /tʃɪl/，ed 读 /d/，water 读 /ˈwɔːtər/', collocations: [['chilled water system', '冷冻水系统'], ['chilled water supply', '冷冻水供水'], ['chilled water return', '冷冻水回水']], examples: [['The chilled water temperature is 7°C.', '冷冻水温度为7°C。'], ['Chilled water flows through the CRAH units.', '冷冻水流经风墙空调。']] },
      { w: 'familiar', ipa: '/fəˈmɪliər/', pos: '形容词', cn: '熟悉的', memory: 'family(家庭)→像家人一样了解→熟悉。', phonics: 'fa 读 /fə/，mil 读 /ˈmɪl/，iar 读 /iər/', collocations: [['familiar with', '熟悉'], ['become familiar', '变得熟悉'], ['familiar technology', '熟悉的技术']], examples: [['Are you familiar with BMS?', '您熟悉BMS吗？'], ['I am familiar with cooling systems.', '我熟悉制冷系统。']] },
    ],
    phrases: [
      { p: 'chilled water systems', ipa: '/tʃɪld ˈwɔːtər ˈsɪstəmz/', cn: '冷冻水系统', why: '数据中心最常用的制冷系统类型，是暖通工程师的核心技能。' },
      { p: 'Are you familiar with', ipa: '/ɑːr juː fəˈmɪliər wɪð/', cn: '您熟悉…吗', why: '面试中考察候选人技术掌握程度的标准句式。' },
    ],
    grammar: [
      { q: '为什么用 Are you familiar with 而不是 Do you know？', a: 'Are you familiar with 考察的是对某项技术的熟悉程度和操作经验。\nDo you know 只问是否知道，不涉及实操能力。\n✅ Are you familiar with chilled water systems?（您熟悉冷冻水系统吗？）—— 考察经验\n✅ Do you know what a chilled water system is?（您知道冷冻水系统是什么吗？）—— 只问认知\n面试中用 familiar with 更精准。\n' },
    ],
    pattern: 'Are you familiar with + 技术/系统名称？',
    patternExamples: [
      { en: 'Are you familiar with cooling towers?', cn: '您熟悉冷却塔吗？', words: [] },
      { en: 'Are you familiar with BMS systems?', cn: '您熟悉BMS系统吗？', words: [] },
      { en: 'Are you familiar with fire suppression systems?', cn: '您熟悉消防系统吗？', words: [] },
    ],
    thinking: '数据中心制冷系统（chilled water system）是暖通工程师的核心技能。\n面试中常用 Are you familiar with 句式考察候选人的技术广度和深度。\n冷冻水系统包括冷水机组、冷冻水泵、冷却塔、CRAH/CRAC 等组件。',
    pronunciation: 'chilled 的 ed 读 /d/，不读 /t/。\nwater 在美式英语中读 /ˈwɔːtər/，t 有闪音化。\n节奏：ARE you ｜ fa-MIL-iar ｜ with CHILLED ｜ WA-ter SYS-tems?',
    quiz: [
      { q: '把「您熟悉冷冻水系统吗？」用英语说出来。', a: 'Are you familiar with chilled water systems?' },
      { q: '「冷冻水」用英语怎么说？', a: 'chilled water (/tʃɪld ˈwɔːtər/)' },
    ],
  },
  {
    id: 2102,
    speaker: 'Interviewer',
    en: 'Have you worked with CRAC or CRAH units?',
    cn: '您操作过精密空调或风墙空调吗？',
    ipa: '/hæv juː wɜːrkt wɪð kræk ɔːr krɑː ˈjuːnɪts/',
    tags: ['第2102句', '暖通专业', '★★★★★'],
    when: '面试官考察候选人对数据中心专用空调设备的操作经验。',
    words: [
      { w: 'CRAC', ipa: '/kræk/', pos: '名词（缩写）', cn: '精密空调', memory: 'Computer Room Air Conditioning（计算机房空调）→ 数据中心最常用的下送风精密空调。', phonics: 'CRAC 读 /kræk/，类似 crack', collocations: [['CRAC unit', '精密空调机组'], ['CRAC maintenance', '精密空调维护'], ['CRAC alarm', '精密空调告警']], examples: [['The CRAC unit supply air temperature is 18°C.', '精密空调送风温度为18°C。'], ['One CRAC unit is in standby mode.', '一台精密空调处于待机模式。']] },
      { w: 'CRAH', ipa: '/krɑː/', pos: '名词（缩写）', cn: '风墙空调', memory: 'Computer Room Air Handler（计算机房空气处理机）→ 通过冷冻水制冷的空调，区别于 CRAC 的直接蒸发制冷。', phonics: 'CRAH 读 /krɑː/，类似 kra', collocations: [['CRAH unit', '风墙空调机组'], ['CRAH coil', '风墙空调盘管'], ['CRAH fan', '风墙空调风机']], examples: [['The CRAH units use chilled water for cooling.', '风墙空调使用冷冻水制冷。'], ['CRAH units are more efficient than CRAC units.', '风墙空调比精密空调更节能。']] },
    ],
    phrases: [
      { p: 'CRAC or CRAH units', ipa: '/kræk ɔːr krɑː ˈjuːnɪts/', cn: '精密空调或风墙空调', why: '数据中心两种主流空调类型，CRAC 用直接蒸发制冷，CRAH 用冷冻水制冷。' },
      { p: 'worked with', ipa: '/wɜːrkt wɪð/', cn: '操作过；与…共事', why: 'Have you worked with 考察实际操作经验，比 know 更强调动手能力。' },
    ],
    grammar: [
      { q: 'CRAC 和 CRAH 有什么区别？', a: 'CRAC（Computer Room Air Conditioning）使用直接蒸发制冷（DX系统），自带压缩机。\nCRAH（Computer Room Air Handler）使用冷冻水制冷，由外部冷水机组供冷。\n✅ CRAC units use direct expansion (DX) cooling.（精密空调使用直接蒸发制冷。）\n✅ CRAH units use chilled water from chillers.（风墙空调使用冷水机组提供的冷冻水。）\n大型数据中心通常使用 CRAH 以提高能效。', },
    ],
    pattern: 'Have you worked with + 设备名称？',
    patternExamples: [
      { en: 'Have you worked with diesel generators?', cn: '您操作过柴油发电机吗？', words: [] },
      { en: 'Have you worked with fire alarm panels?', cn: '您操作过消防报警面板吗？', words: [] },
      { en: 'Have you worked with DCIM platforms?', cn: '您使用过DCIM平台吗？', words: [] },
    ],
    thinking: 'CRAC 和 CRAH 是数据中心暖通工程师必须区分的两种空调类型。\n面试中同时提及两者，考察候选人对制冷系统的全面理解。\nworked with 强调实际操作经验，而非仅停留在理论层面。',
    pronunciation: 'CRAC 读 /kræk/，类似 crack（裂缝）。\nCRAH 读 /krɑː/，类似 kra。\n节奏：HAVE you ｜ WORKED with ｜ CRAC or ｜ CRAH U-nits?',
    quiz: [
      { q: '把「您操作过精密空调或风墙空调吗？」用英语说出来。', a: 'Have you worked with CRAC or CRAH units?' },
      { q: 'CRAC 和 CRAH 的主要区别是什么？', a: 'CRAC 使用直接蒸发制冷（DX），CRAH 使用冷冻水制冷（Chilled Water）。' },
    ],
  },
  {
    id: 2103,
    speaker: 'Interviewer',
    en: 'Can you troubleshoot cooling system failures?',
    cn: '您能排查制冷系统故障吗？',
    ipa: '/kæn juː ˈtrʌbləʃuːt ˈkuːlɪŋ ˈsɪstəm ˈfeɪljərz/',
    tags: ['第2103句', '暖通专业', '★★★★★'],
    when: '面试官考察候选人在制冷系统发生故障时的排查和处置能力。',
    words: [
      { w: 'troubleshoot', ipa: '/ˈtrʌbləʃuːt/', pos: '动词', cn: '排查故障', memory: 'trouble(故障)+shoot(射击)→像射手一样精准定位故障→排查故障。', phonics: 'trouble 读 /ˈtrʌbəl/，shoot 读 /ʃuːt/', collocations: [['troubleshoot a problem', '排查问题'], ['troubleshoot equipment', '排查设备'], ['troubleshooting guide', '故障排查指南']], examples: [['Can you troubleshoot UPS failures?', '您能排查UPS故障吗？'], ['Troubleshooting takes patience and experience.', '故障排查需要耐心和经验。']] },
      { w: 'failures', ipa: '/ˈfeɪljərz/', pos: '名词（复数）', cn: '故障；失效', memory: 'fail(失败)+ure(名词后缀)→系统或设备的失效状态。', phonics: 'fail 读 /feɪl/，ure 读 /jər/', collocations: [['system failure', '系统故障'], ['equipment failure', '设备故障'], ['power failure', '断电']], examples: [['Cooling system failures must be reported immediately.', '制冷系统故障必须立即报告。'], ['We experienced two failures last month.', '上个月我们经历了两次故障。']] },
    ],
    phrases: [
      { p: 'troubleshoot cooling system failures', ipa: '/ˈtrʌbləʃuːt ˈkuːlɪŋ ˈsɪstəm ˈfeɪljərz/', cn: '排查制冷系统故障', why: 'troubleshoot 直接接宾语，表示对某类故障进行系统化排查。' },
      { p: 'Can you', ipa: '/kæn juː/', cn: '您能…吗', why: '面试中考察候选人能力水平的常用句式。' },
    ],
    grammar: [
      { q: 'troubleshoot 和 repair 有什么区别？', a: 'troubleshoot 是定位和诊断故障原因的过程。\nrepair 是修复故障的实际操作。\n✅ First, troubleshoot the failure to find the root cause.（首先排查故障找到根本原因。）\n✅ Then, repair or replace the faulty component.（然后修复或更换故障部件。）\n面试问 troubleshoot 是在考察诊断分析能力。', },
    ],
    pattern: 'Can you troubleshoot + 系统/设备名称 + failures？',
    patternExamples: [
      { en: 'Can you troubleshoot UPS failures?', cn: '您能排查UPS故障吗？', words: [] },
      { en: 'Can you troubleshoot power distribution issues?', cn: '您能排查配电问题吗？', words: [] },
      { en: 'Can you troubleshoot BMS communication errors?', cn: '您能排查BMS通信错误吗？', words: [] },
    ],
    thinking: 'troubleshoot 是数据中心工程师的核心能力，强调系统化的故障定位方法。\n面试中问 troubleshoot 而非 repair，考察的是分析思维而非单纯的维修技能。\n制冷系统故障排查包括检查冷冻水温度、流量、阀门状态、控制系统等。',
    pronunciation: 'troubleshoot 重音在第一音节：TROU-ble-shoot。\nfailures 重音在第一音节：FAIL-ures。\n节奏：CAN you ｜ TROU-ble-shoot ｜ COOL-ing ｜ SYS-tem ｜ FAIL-ures?',
    quiz: [
      { q: '把「您能排查制冷系统故障吗？」用英语说出来。', a: 'Can you troubleshoot cooling system failures?' },
      { q: '「排查故障」用英语怎么说？', a: 'troubleshoot (/ˈtrʌbləʃuːt/)' },
    ],
  },
  {
    id: 2104,
    speaker: 'Interviewer',
    en: 'Have you maintained cooling towers?',
    cn: '您维护过冷却塔吗？',
    ipa: '/hæv juː ˈmeɪnteɪnd ˈkuːlɪŋ ˈtaʊərz/',
    tags: ['第2104句', '暖通专业', '★★★★'],
    when: '面试官考察候选人对冷却塔维护工作的实操经验。',
    words: [
      { w: 'maintained', ipa: '/ˈmeɪnteɪnd/', pos: '动词（过去分词）', cn: '维护过', memory: 'main(主要)+tain(保持)→保持主要状态→维护。', phonics: 'main 读 /meɪn/，tain 读 /teɪn/', collocations: [['maintain equipment', '维护设备'], ['maintain systems', '维护系统'], ['preventive maintenance', '预防性维护']], examples: [['We maintain cooling towers monthly.', '我们每月维护冷却塔。'], ['All equipment must be maintained regularly.', '所有设备必须定期维护。']] },
      { w: 'cooling towers', ipa: '/ˈkuːlɪŋ ˈtaʊərz/', pos: '名词', cn: '冷却塔', memory: 'cooling(冷却)+towers(塔)→将冷冻水系统中的热量排放到大气中的设备。', phonics: 'cool 读 /kuːl/，ing 读 /ɪŋ/，tower 读 /ˈtaʊər/', collocations: [['cooling tower maintenance', '冷却塔维护'], ['cooling tower fan', '冷却塔风机'], ['cooling tower water treatment', '冷却塔水处理']], examples: [['Cooling towers reject heat to the atmosphere.', '冷却塔将热量排放到大气中。'], ['The cooling tower fan is running.', '冷却塔风机正在运行。']] },
    ],
    phrases: [
      { p: 'maintained cooling towers', ipa: '/ˈmeɪnteɪnd ˈkuːlɪŋ ˈtaʊərz/', cn: '维护过冷却塔', why: 'Have you maintained 考察候选人对冷却塔日常维护工作的实操经验。' },
    ],
    grammar: [
      { q: '为什么用 Have you maintained 而不是 Did you maintain？', a: 'Have you maintained 用现在完成时，考察候选人的整体经验积累。\nDid you maintain 用一般过去时，只问某一次具体经历。\n✅ Have you maintained cooling towers?（您有维护冷却塔的经验吗？）—— 问经验\n✅ Did you maintain the cooling tower yesterday?（你昨天维护了冷却塔吗？）—— 问具体事件\n面试中用现在完成时更合适。', },
    ],
    pattern: 'Have you maintained + 设备名称？',
    patternExamples: [
      { en: 'Have you maintained chillers?', cn: '您维护过冷水机组吗？', words: [] },
      { en: 'Have you maintained fire pumps?', cn: '您维护过消防泵吗？', words: [] },
      { en: 'Have you maintained AHU units?', cn: '您维护过空调箱吗？', words: [] },
    ],
    thinking: '冷却塔是冷冻水系统的关键散热设备，维护工作包括清洗填料、检查风机、水处理等。\n面试中问冷却塔维护经验，考察候选人对暖通全链条的掌握程度。',
    pronunciation: 'maintained 读 /ˈmeɪnteɪnd/，注意 tail 的 /l/ 音。\ncooling towers 重音分别在 COOL 和 TOW。\n节奏：HAVE you ｜ MAIN-tained ｜ COOL-ing ｜ TOW-ers?',
    quiz: [
      { q: '把「您维护过冷却塔吗？」用英语说出来。', a: 'Have you maintained cooling towers?' },
      { q: '「冷却塔」用英语怎么说？', a: 'cooling tower (/ˈkuːlɪŋ ˈtaʊər/)' },
    ],
  },
  {
    id: 2105,
    speaker: 'Interviewer',
    en: 'Are you familiar with HVAC control systems?',
    cn: '您熟悉暖通控制系统吗？',
    ipa: '/ɑːr juː fəˈmɪliər wɪð eɪtʃ viː eɪ ˈsiː kənˈtroʊl ˈsɪstəmz/',
    tags: ['第2105句', '暖通专业', '★★★★'],
    when: '面试官考察候选人对暖通自动化控制系统的了解程度。',
    words: [
      { w: 'HVAC', ipa: '/eɪtʃ viː eɪ ˈsiː/', pos: '名词（缩写）', cn: '暖通空调', memory: 'Heating, Ventilation, and Air Conditioning（供暖、通风与空调）→ 暖通系统的统称。', phonics: 'H 读 /eɪtʃ/，V 读 /viː/，A 读 /eɪ/，C 读 /siː/', collocations: [['HVAC system', '暖通系统'], ['HVAC engineer', '暖通工程师'], ['HVAC maintenance', '暖通维护']], examples: [['The HVAC system controls the temperature.', '暖通系统控制温度。'], ['HVAC stands for Heating, Ventilation, and Air Conditioning.', 'HVAC 代表供暖、通风与空调。']] },
      { w: 'control systems', ipa: '/kənˈtroʊl ˈsɪstəmz/', pos: '名词', cn: '控制系统', memory: 'control(控制)+systems(系统)→自动化管理暖通设备的监控系统。', phonics: 'con 读 /kən/，trol 读 /troʊl/', collocations: [['HVAC control system', '暖通控制系统'], ['building control system', '楼宇控制系统'], ['direct digital control', '直接数字控制']], examples: [['The control system manages all HVAC equipment.', '控制系统管理所有暖通设备。'], ['Control system alarms must be monitored 24/7.', '控制系统告警必须全天候监控。']] },
    ],
    phrases: [
      { p: 'HVAC control systems', ipa: '/eɪtʃ viː eɪ ˈsiː kənˈtroʊl ˈsɪstəmz/', cn: '暖通控制系统', why: '数据中心暖通工程师需要掌握控制系统（BMS/DDC）对暖通设备的自动化管理。' },
    ],
    grammar: [
      { q: 'HVAC 怎么发音？', a: 'HVAC 是首字母缩写，需要逐个字母念：H-V-A-C（/eɪtʃ viː eɪ siː/）。\n不能拼读成一个单词。\n✅ HVAC stands for Heating, Ventilation, and Air Conditioning.\n❌ 不要读成 /hævæk/ 或 /hɒvæk/\n类似的还有 UPS（U-P-S）、ATS（A-T-S）。', },
    ],
    pattern: 'Are you familiar with + 系统名称 + control systems？',
    patternExamples: [
      { en: 'Are you familiar with BMS control systems?', cn: '您熟悉楼宇管理系统吗？', words: [] },
      { en: 'Are you familiar with electrical control systems?', cn: '您熟悉电气控制系统吗？', words: [] },
      { en: 'Are you familiar with fire alarm control panels?', cn: '您熟悉消防报警控制面板吗？', words: [] },
    ],
    thinking: 'HVAC 是 Heating, Ventilation, and Air Conditioning 的首字母缩写。\n数据中心暖通工程师不仅要懂机械设备，还要掌握自动化控制系统（如 BMS、DDC）。\n面试中问 HVAC control systems 考察候选人对暖通自动化的理解。',
    pronunciation: 'HVAC 逐字母念：H-V-A-C。\ncontrol 重音在第二音节：con-TROL。\n节奏：ARE you ｜ fa-MIL-iar ｜ with H-V-A-C ｜ con-TROL ｜ SYS-tems?',
    quiz: [
      { q: '把「您熟悉暖通控制系统吗？」用英语说出来。', a: 'Are you familiar with HVAC control systems?' },
      { q: 'HVAC 代表什么？', a: 'Heating, Ventilation, and Air Conditioning（供暖、通风与空调）。' },
    ],
  },
  {
    id: 2106,
    speaker: 'Interviewer',
    en: 'How do you prioritize multiple alarms?',
    cn: '当多个告警同时发生时，您如何确定优先级？',
    ipa: '/haʊ duː juː praɪˈɒrɪtaɪz ˈmʌltɪpəl ˈɑːlərmz/',
    tags: ['第2106句', '运维管理', '★★★★★'],
    when: '面试官考察候选人在高压环境下多告警并行处理的决策能力。',
    words: [
      { w: 'prioritize', ipa: '/praɪˈɒrɪtaɪz/', pos: '动词', cn: '确定优先级', memory: 'prior(优先的)+itize(动词后缀)→按重要程度排序。', phonics: 'pri 读 /praɪ/，or 读 /ˈɒr/，itize 读 /ɪtaɪz/', collocations: [['prioritize tasks', '确定任务优先级'], ['prioritize alarms', '确定告警优先级'], ['prioritize work', '安排工作优先顺序']], examples: [['How do you prioritize your daily tasks?', '您如何安排日常任务的优先级？'], ['Always prioritize safety-related alarms.', '始终优先处理安全相关告警。']] },
      { w: 'multiple alarms', ipa: '/ˈmʌltɪpəl ˈɑːlərmz/', pos: '名词', cn: '多个告警', memory: 'multiple(多个的)+alarms(告警)→同时触发的多条告警信息。', phonics: 'mul 读 /ˈmʌl/，ti 读 /tɪ/，ple 读 /pəl/', collocations: [['multiple alarms', '多个告警'], ['alarm storm', '告警风暴'], ['alarm flood', '告警泛滥']], examples: [['Multiple alarms triggered at the same time.', '多个告警同时触发。'], ['We experienced a multiple alarm event yesterday.', '我们昨天经历了多告警事件。']] },
    ],
    phrases: [
      { p: 'prioritize multiple alarms', ipa: '/praɪˈɒrɪtaɪz ˈmʌltɪpəl ˈɑːlərmz/', cn: '确定多个告警的优先级', why: '数据中心常见场景：多条告警同时触发时需要快速判断处理顺序。' },
      { p: 'How do you', ipa: '/haʊ duː juː/', cn: '您如何…', why: '面试中考察候选人方法论和思维方式的标准句式。' },
    ],
    grammar: [
      { q: 'How do you 和 How would you 有什么区别？', a: 'How do you 问候选人的实际做法，基于真实经验。\nHow would you 问候选人的假设反应，基于虚拟场景。\n✅ How do you prioritize alarms?（您实际是怎么确定告警优先级的？）—— 问真实做法\n✅ How would you prioritize alarms if a fire alarm triggered?（如果火警触发您会怎么排优先级？）—— 假设场景\n面试中两种句式都很常见。', },
    ],
    pattern: 'How do you prioritize + 任务/事件类型？',
    patternExamples: [
      { en: 'How do you prioritize maintenance tasks?', cn: '您如何确定维护任务的优先级？', words: [] },
      { en: 'How do you prioritize customer requests?', cn: '您如何确定客户请求的优先级？', words: [] },
      { en: 'How do you prioritize safety checks?', cn: '您如何确定安全检查的优先顺序？', words: [] },
    ],
    thinking: '多告警并行处理是数据中心运维工程师的核心能力之一。\n面试中问 How do you prioritize 考察候选人的决策逻辑和应急思维。\n正确的优先级通常是：生命安全 > 设备安全 > 业务影响 > 一般告警。',
    pronunciation: 'prioritize 重音在第二音节：pri-OR-i-tize。\nmultiple 重音在第一音节：MUL-ti-ple。\n节奏：HOW do you ｜ pri-OR-i-tize ｜ MUL-ti-ple ｜ A-larms?',
    quiz: [
      { q: '把「当多个告警同时发生时，您如何确定优先级？」用英语说出来。', a: 'How do you prioritize multiple alarms?' },
      { q: '「确定优先级」用英语怎么说？', a: 'prioritize (/praɪˈɒrɪtaɪz/)' },
    ],
  },
  {
    id: 2107,
    speaker: 'Interviewer',
    en: 'How do you manage contractors on site?',
    cn: '您如何管理现场施工单位？',
    ipa: '/haʊ duː juː ˈmænɪdʒ ˈkɑːntræktərz ɑːn saɪt/',
    tags: ['第2107句', '运维管理', '★★★★★'],
    when: '面试官考察候选人对现场施工人员的管理能力，包括门禁、PTW、随工等。',
    words: [
      { w: 'contractors', ipa: '/ˈkɑːntræktərz/', pos: '名词（复数）', cn: '施工单位；承包商', memory: 'contract(合同)+or(人)+s(复数)→签合同进入现场的外部施工人员。', phonics: 'con 读 /ˈkɑːn/，trac 读 /træk/，tors 读 /tərz/', collocations: [['manage contractors', '管理施工单位'], ['contractor whitelist', '施工白名单'], ['contractor induction', '施工入场培训']], examples: [['All contractors must sign in at reception.', '所有施工人员必须在前台登记。'], ['Contractors must be escorted at all times.', '施工人员必须全程有人陪同。']] },
      { w: 'on site', ipa: '/ɑːn saɪt/', pos: '副词短语', cn: '在现场', memory: 'on(在…上)+site(场地)→在数据中心现场。', phonics: 'on 读 /ɑːn/，site 读 /saɪt/', collocations: [['on site', '在现场'], ['on-site inspection', '现场检查'], ['on-site supervision', '现场监督']], examples: [['An engineer is on site right now.', '一名工程师现在在现场。'], ['On-site contractors must follow safety rules.', '现场施工人员必须遵守安全规定。']] },
    ],
    phrases: [
      { p: 'manage contractors on site', ipa: '/ˈmænɪdʒ ˈkɑːntræktərz ɑːn saɪt/', cn: '管理现场施工单位', why: '数据中心运维工程师的核心管理职责之一，涉及门禁、PTW、随工监督等。' },
    ],
    grammar: [
      { q: 'contractors 和 vendors 有什么区别？', a: 'contractors 是签订施工合同的外部施工单位，需要进入现场作业。\nvendors 是设备或服务的供应商，可能远程支持也可能现场服务。\n✅ Contractors need PTW to work on site.（施工单位需要作业许可才能在现场工作。）\n✅ The vendor is providing remote technical support.（供应商正在提供远程技术支持。）', },
    ],
    pattern: 'How do you manage + 管理对象 + on site？',
    patternExamples: [
      { en: 'How do you manage visitors on site?', cn: '您如何管理现场访客？', words: [] },
      { en: 'How do you manage equipment deliveries on site?', cn: '您如何管理现场设备交付？', words: [] },
      { en: 'How do you manage cleaning staff on site?', cn: '您如何管理现场清洁人员？', words: [] },
    ],
    thinking: '施工单位管理是数据中心安全的关键环节，包括：白名单审核、入场培训、PTW审批、随工监督。\n面试中问这个问题考察候选人的安全意识和流程管理能力。\n好的答案应涵盖 PTW、MOP、白名单、随工监督等关键控制点。',
    pronunciation: 'contractors 重音在第一音节：CON-trac-tors。\non site 读 /ɑːn saɪt/，两个词都清晰发音。\n节奏：HOW do you ｜ MAN-age ｜ CON-trac-tors ｜ on SITE?',
    quiz: [
      { q: '把「您如何管理现场施工单位？」用英语说出来。', a: 'How do you manage contractors on site?' },
      { q: '「施工单位」用英语怎么说？', a: 'contractors (/ˈkɑːntræktərz/)' },
    ],
  },
  {
    id: 2108,
    speaker: 'Interviewer',
    en: 'How do you ensure compliance with safety procedures?',
    cn: '您如何确保遵守安全操作流程？',
    ipa: '/haʊ duː juː ɪnˈʃʊr kəmˈplaɪəns wɪð ˈseɪfti prəˈsiːdʒərz/',
    tags: ['第2108句', '运维管理', '★★★★★'],
    when: '面试官考察候选人对安全规程的执行和合规管理能力。',
    words: [
      { w: 'compliance', ipa: '/kəmˈplaɪəns/', pos: '名词', cn: '合规；遵守', memory: 'comply(遵守)+ance(名词后缀)→按照规章制度执行的状态。', phonics: 'com 读 /kəm/，pli 读 /ˈplaɪ/，ance 读 /əns/', collocations: [['compliance with', '遵守'], ['safety compliance', '安全合规'], ['regulatory compliance', '法规合规']], examples: [['Compliance with safety procedures is mandatory.', '遵守安全操作流程是强制性的。'], ['We conduct regular compliance audits.', '我们定期进行合规审计。']] },
      { w: 'safety procedures', ipa: '/ˈseɪfti prəˈsiːdʒərz/', pos: '名词', cn: '安全操作流程', memory: 'safety(安全)+procedures(流程/程序)→保障人员和设备安全的标准化操作步骤。', phonics: 'safe 读 /seɪf/，ty 读 /ti/，pro 读 /prə/，ce 读 /ˈsiː/，dures 读 /dʒərz/', collocations: [['safety procedures', '安全操作流程'], ['follow safety procedures', '遵守安全流程'], ['safety procedure manual', '安全流程手册']], examples: [['All staff must follow safety procedures.', '所有员工必须遵守安全操作流程。'], ['Safety procedures are reviewed annually.', '安全操作流程每年复核一次。']] },
    ],
    phrases: [
      { p: 'ensure compliance with', ipa: '/ɪnˈʃʊr kəmˈplaɪəns wɪð/', cn: '确保遵守', why: 'ensure(确保)+compliance with(遵守)→管理用语，表示确保规章制度被严格执行。' },
      { p: 'safety procedures', ipa: '/ˈseɪfti prəˈsiːdʒərz/', cn: '安全操作流程', why: '数据中心运维的核心制度保障，包括 LOTO、PTW、PPE 等。' },
    ],
    grammar: [
      { q: 'compliance 和 conform 有什么区别？', a: 'compliance 是名词，强调对规章制度的遵守（常用于安全、法规场景）。\nconform 是动词，强调与标准或规范的一致性。\n✅ Ensure compliance with safety procedures.（确保安全操作流程得到遵守。）\n✅ The equipment conforms to international standards.（该设备符合国际标准。）', },
    ],
    pattern: 'How do you ensure compliance with + 制度/标准名称？',
    patternExamples: [
      { en: 'How do you ensure compliance with SLA requirements?', cn: '您如何确保满足SLA要求？', words: [] },
      { en: 'How do you ensure compliance with environmental standards?', cn: '您如何确保符合环境标准？', words: [] },
      { en: 'How do you ensure compliance with ISO 27001?', cn: '您如何确保符合ISO 27001？', words: [] },
    ],
    thinking: '安全合规是数据中心运维的底线，面试官通过此问题评估候选人的安全文化意识。\n好的答案应提及培训、检查、审计、奖惩等具体管理手段。\ncompliance 是数据中心的关键词，涉及安全、法规、客户审计等多个场景。',
    pronunciation: 'compliance 重音在第二音节：com-PLI-ance。\nprocedures 重音在第二音节：pro-CE-dures。\n节奏：HOW do you ｜ en-SURE ｜ com-PLI-ance ｜ with SAFE-ty ｜ pro-CE-dures?',
    quiz: [
      { q: '把「您如何确保遵守安全操作流程？」用英语说出来。', a: 'How do you ensure compliance with safety procedures?' },
      { q: '「合规」用英语怎么说？', a: 'compliance (/kəmˈplaɪəns/)' },
    ],
  },
  {
    id: 2109,
    speaker: 'Interviewer',
    en: 'How do you manage SLA requirements?',
    cn: '您如何保证满足SLA要求？',
    ipa: '/haʊ duː juː ˈmænɪdʒ ˌɛs ɛl ˈeɪ rɪˈkwaɪərmənts/',
    tags: ['第2109句', '运维管理', '★★★★★'],
    when: '面试官考察候选人对SLA（服务等级协议）的理解和管理能力。',
    words: [
      { w: 'SLA', ipa: '/ˌɛs ɛl ˈeɪ/', pos: '名词（缩写）', cn: '服务等级协议', memory: 'Service Level Agreement（服务等级协议）→ 客户与数据中心之间约定的服务质量标准。', phonics: 'S 读 /ɛs/，L 读 /ɛl/，A 读 /eɪ/', collocations: [['SLA requirements', 'SLA要求'], ['meet SLA', '满足SLA'], ['SLA breach', 'SLA违约']], examples: [['We must meet all SLA requirements.', '我们必须满足所有SLA要求。'], ['An SLA breach triggers a penalty.', 'SLA违约会触发罚款。']] },
      { w: 'requirements', ipa: '/rɪˈkwaɪərmənts/', pos: '名词（复数）', cn: '要求；需求', memory: 'require(要求)+ment(名词后缀)+s(复数)→必须满足的条件。', phonics: 're 读 /rɪ/，quire 读 /ˈkwaɪər/，ments 读 /mənts/', collocations: [['SLA requirements', 'SLA要求'], ['customer requirements', '客户要求'], ['safety requirements', '安全要求']], examples: [['SLA requirements include 99.999% availability.', 'SLA要求包括99.999%可用性。'], ['All requirements have been met.', '所有要求均已满足。']] },
    ],
    phrases: [
      { p: 'manage SLA requirements', ipa: '/ˈmænɪdʒ ˌɛs ɛl ˈeɪ rɪˈkwaɪərmənts/', cn: '管理SLA要求', why: '数据中心运维的核心KPI管理职责，涉及可用性、响应时间、报告等。' },
    ],
    grammar: [
      { q: 'SLA 怎么发音？', a: 'SLA 是首字母缩写，需要逐个字母念：S-L-A（/ɛs ɛl eɪ/）。\n不能拼读成一个单词。\n✅ SLA stands for Service Level Agreement.（SLA 代表服务等级协议。）\n❌ 不要读成 /slɑː/ 或 /səlɑː/', },
    ],
    pattern: 'How do you manage + KPI/标准名称 + requirements？',
    patternExamples: [
      { en: 'How do you manage KPI requirements?', cn: '您如何管理KPI要求？', words: [] },
      { en: 'How do you manage audit requirements?', cn: '您如何管理审计要求？', words: [] },
      { en: 'How do you manage customer requirements?', cn: '您如何管理客户要求？', words: [] },
    ],
    thinking: 'SLA 是数据中心对客户承诺的服务质量标准，通常包括可用性（99.999%）、响应时间等。\n面试中问 SLA management 考察候选人对商业承诺与运维执行之间关系的理解。\n好的答案应涵盖监控、预警、升级、报告等管理手段。',
    pronunciation: 'SLA 逐字母念：S-L-A。\nrequirements 重音在第二音节：re-QUIRE-ments。\n节奏：HOW do you ｜ MAN-age ｜ S-L-A ｜ re-QUIRE-ments?',
    quiz: [
      { q: '把「您如何保证满足SLA要求？」用英语说出来。', a: 'How do you manage SLA requirements?' },
      { q: 'SLA 代表什么？', a: 'Service Level Agreement（服务等级协议）。' },
    ],
  },
  {
    id: 2110,
    speaker: 'Interviewer',
    en: 'How do you conduct shift handovers?',
    cn: '您如何进行交接班？',
    ipa: '/haʊ duː juː kənˈdʌkt ʃɪft ˈhændoʊvərz/',
    tags: ['第2110句', '运维管理', '★★★★★'],
    when: '面试官考察候选人对交接班流程的理解和执行规范。',
    words: [
      { w: 'conduct', ipa: '/kənˈdʌkt/', pos: '动词', cn: '执行；进行', memory: 'con(共同)+duct(引导)→引导大家一起做→执行/进行。', phonics: 'con 读 /kən/，duct 读 /dʌkt/', collocations: [['conduct a handover', '进行交接班'], ['conduct an inspection', '进行检查'], ['conduct a review', '进行评审']], examples: [['We conduct shift handovers every 12 hours.', '我们每12小时进行一次交接班。'], ['The manager conducted a safety review.', '经理进行了安全评审。']] },
      { w: 'shift handovers', ipa: '/ʃɪft ˈhændoʊvərz/', pos: '名词', cn: '交接班', memory: 'shift(班次)+handover(移交)→将当前班次的信息和责任移交给下一个班次。', phonics: 'shift 读 /ʃɪft/，hand 读 /hænd/，overs 读 /oʊvərz/', collocations: [['shift handover', '交接班'], ['handover checklist', '交接检查清单'], ['handover log', '交接记录']], examples: [['Shift handover must be done face to face.', '交接班必须面对面进行。'], ['The handover checklist includes alarm status.', '交接检查清单包括告警状态。']] },
    ],
    phrases: [
      { p: 'conduct shift handovers', ipa: '/kənˈdʌkt ʃɪft ˈhændoʊvərz/', cn: '进行交接班', why: 'conduct 比 do 更正式，体现交接班是一项需要规范执行的正式流程。' },
    ],
    grammar: [
      { q: '为什么用 conduct 而不是 do？', a: 'conduct 强调按规范流程正式执行，适合交接班这种关键流程。\ndo 过于口语化，不够正式。\n✅ We conduct shift handovers using a checklist.（我们使用检查清单进行交接班。）—— 正式\n✅ We do handovers.（我们做交接。）—— 太随意\n面试中用 conduct 体现专业素养。', },
    ],
    pattern: 'How do you conduct + 流程/活动名称？',
    patternExamples: [
      { en: 'How do you conduct safety inspections?', cn: '您如何进行安全检查？', words: [] },
      { en: 'How do you conduct emergency drills?', cn: '您如何进行应急演练？', words: [] },
      { en: 'How do you conduct root cause analysis?', cn: '您如何进行根因分析？', words: [] },
    ],
    thinking: '交接班是数据中心7×24运行的核心保障流程，包括告警状态、工单进展、维护活动、注意事项等。\n面试中问这个问题考察候选人对交接班规范的理解和实际执行经验。\n好的答案应包含交接内容、交接方式（面对面）、记录存档等要素。',
    pronunciation: 'conduct 重音在第二音节：con-DUCT。\nhandovers 重音在第一音节：HAND-o-vers。\n节奏：HOW do you ｜ con-DUCT ｜ SHIFT ｜ HAND-o-vers?',
    quiz: [
      { q: '把「您如何进行交接班？」用英语说出来。', a: 'How do you conduct shift handovers?' },
      { q: '「交接班」用英语怎么说？', a: 'shift handover (/ʃɪft ˈhændoʊvər/)' },
    ],
  },
  {
    id: 2111,
    speaker: 'Interviewer',
    en: 'Have you managed a team before?',
    cn: '您以前带过团队吗？',
    ipa: '/hæv juː ˈmænɪdʒd ə tiːm bɪˈfɔːr/',
    tags: ['第2111句', '团队管理', '★★★★★'],
    when: '面试官考察候选人是否具备团队管理的基本经验。',
    words: [
      { w: 'managed', ipa: '/ˈmænɪdʒd/', pos: '动词（过去分词）', cn: '管理过', memory: 'manage(管理)+d(过去分词)→曾经负责管理过团队。', phonics: 'man 读 /ˈmæn/，age 读 /ɪdʒd/', collocations: [['manage a team', '管理团队'], ['manage engineers', '管理工程师'], ['manage projects', '管理项目']], examples: [['I have managed a team of 8 engineers.', '我管理过一个8人工程师团队。'], ['She has managed multiple data centers.', '她管理过多个数据中心。']] },
      { w: 'team', ipa: '/tiːm/', pos: '名词', cn: '团队', memory: 'team（团队）→ 数据中心运维班组或项目组。', phonics: '读 /tiːm/，长元音 /iː/', collocations: [['operations team', '运维团队'], ['team leader', '团队领导'], ['team building', '团队建设']], examples: [['Our operations team has 12 engineers.', '我们的运维团队有12名工程师。'], ['Team performance has improved.', '团队表现有所提升。']] },
    ],
    phrases: [
      { p: 'managed a team before', ipa: '/ˈmænɪdʒd ə tiːm bɪˈfɔːr/', cn: '以前带过团队', why: 'before 在句尾表示「以前/曾经」，配合现在完成时询问经验。' },
    ],
    grammar: [
      { q: '为什么用 Have you managed 而不是 Did you manage？', a: 'Have you managed 用现在完成时，问的是候选人的整体管理经验。\nDid you manage 用一般过去时，问的是某个特定时期是否管理过。\n✅ Have you managed a team before?（你以前有带团队的经验吗？）—— 问整体经验\n✅ Did you manage a team at your last job?（你在上一份工作中带过团队吗？）—— 问特定经历', },
    ],
    pattern: 'Have you managed + 管理对象 + before？',
    patternExamples: [
      { en: 'Have you managed a budget before?', cn: '您以前管理过预算吗？', words: [] },
      { en: 'Have you managed vendor contracts before?', cn: '您以前管理过供应商合同吗？', words: [] },
      { en: 'Have you managed a data center before?', cn: '您以前管理过数据中心吗？', words: [] },
    ],
    thinking: '团队管理经验是管理岗位或高级工程师岗位的核心考察点。\n面试中先问是否有经验，后续再追问管理规模、管理方法等细节。\nbefore 在句尾是口语化的表达，正式书面语中可用 in the past 替代。',
    pronunciation: 'managed 的 ed 读 /d/：MAN-aged。\nbefore 重音在第二音节：be-FORE。\n节奏：HAVE you ｜ MAN-aged ｜ a TEAM ｜ be-FORE?',
    quiz: [
      { q: '把「您以前带过团队吗？」用英语说出来。', a: 'Have you managed a team before?' },
      { q: '「管理团队」用英语怎么说？', a: 'manage a team (/ˈmænɪdʒ ə tiːm/)' },
    ],
  },
  {
    id: 2112,
    speaker: 'Interviewer',
    en: 'How many engineers have you managed?',
    cn: '您管理过多少名工程师？',
    ipa: '/haʊ ˈmɛni ˌɛndʒɪˈnɪrz hæv juː ˈmænɪdʒd/',
    tags: ['第2112句', '团队管理', '★★★★'],
    when: '面试官追问团队管理经验的规模，了解候选人的管理幅度。',
    words: [
      { w: 'How many', ipa: '/haʊ ˈmɛni/', pos: '疑问短语', cn: '多少', memory: 'how(如何)+many(许多)→询问数量的标准句式。', phonics: 'how 读 /haʊ/，many 读 /ˈmɛni/', collocations: [['how many engineers', '多少名工程师'], ['how many people', '多少人'], ['how many teams', '多少个团队']], examples: [['How many engineers are on your team?', '你团队有多少名工程师？'], ['How many shifts do you run?', '你们有几个班次？']] },
      { w: 'engineers', ipa: '/ˌɛndʒɪˈnɪrz/', pos: '名词（复数）', cn: '工程师', memory: 'engine(引擎)+er(人)+s(复数)→从事技术工作的人员。', phonics: 'en 读 /ˌɛn/，gi 读 /dʒɪ/，neers 读 /ˈnɪrz/', collocations: [['electrical engineer', '电气工程师'], ['HVAC engineer', '暖通工程师'], ['operations engineer', '运维工程师']], examples: [['We have 8 engineers on each shift.', '我们每个班次有8名工程师。'], ['All engineers are certified.', '所有工程师都持有相关证书。']] },
    ],
    phrases: [
      { p: 'How many engineers', ipa: '/haʊ ˈmɛni ˌɛndʒɪˈnɪrz/', cn: '多少名工程师', why: 'How many + 可数名词复数是询问数量的标准句式。' },
    ],
    grammar: [
      { q: 'engineers 的重音在哪里？', a: 'engineers 的重音在最后一个音节：en-gi-NEERS（/ˌɛndʒɪˈnɪrz/）。\n注意不是 EN-gi-neers。\n类似的词：pioneers（pi-o-NEERS）、volunteers（vol-un-TEERS）。\n重音在最后的多音节词在英语中很常见。', },
    ],
    pattern: 'How many + 名词 + have you + 动词？',
    patternExamples: [
      { en: 'How many projects have you completed?', cn: '您完成了多少个项目？', words: [] },
      { en: 'How many audits have you participated in?', cn: '您参与过多少次审计？', words: [] },
      { en: 'How many incidents have you handled?', cn: '您处理过多少次事件？', words: [] },
    ],
    thinking: '管理幅度（span of control）是衡量管理经验丰富度的重要指标。\n数据中心运维团队通常每班次4-8人，总团队12-24人。\n候选人的回答可以帮助面试官判断其适合管理多大规模的团队。',
    pronunciation: 'engineers 重音在第三音节：en-gi-NEERS。\nmanaged 的 ed 读 /d/。\n节奏：HOW many ｜ EN-gi-NEERS ｜ have you ｜ MAN-aged?',
    quiz: [
      { q: '把「您管理过多少名工程师？」用英语说出来。', a: 'How many engineers have you managed?' },
      { q: '「工程师」的复数形式用英语怎么说？', a: 'engineers (/ˌɛndʒɪˈnɪrz/)' },
    ],
  },
  {
    id: 2113,
    speaker: 'Interviewer',
    en: 'How do you motivate your team?',
    cn: '您如何激励团队？',
    ipa: '/haʊ duː juː ˈmoʊtɪveɪt jʊr tiːm/',
    tags: ['第2113句', '团队管理', '★★★★'],
    when: '面试官考察候选人的领导力与团队激励方法。',
    words: [
      { w: 'motivate', ipa: '/ˈmoʊtɪveɪt/', pos: '动词', cn: '激励；激发', memory: 'motive(动机)+ate(动词后缀)→给予动机→激励。', phonics: 'mo 读 /ˈmoʊ/，ti 读 /tɪ/，vate 读 /veɪt/', collocations: [['motivate the team', '激励团队'], ['motivate employees', '激励员工'], ['motivate performance', '激发绩效']], examples: [['Good leaders motivate their teams.', '好的领导者会激励团队。'], ['Recognition motivates engineers.', '认可能激励工程师。']] },
    ],
    phrases: [
      { p: 'motivate your team', ipa: '/ˈmoʊtɪveɪt jʊr tiːm/', cn: '激励你的团队', why: '领导力核心能力之一，面试中常见的软技能考察点。' },
    ],
    grammar: [
      { q: 'motivate 和 encourage 有什么区别？', a: 'motivate 是激发内在动力，让对方自发想做好。\nencourage 是从外部给予鼓励和支持。\n✅ A good manager motivates the team to improve.（好的经理激励团队主动进步。）\n✅ I encouraged him to try again.（我鼓励他再试一次。）\n两者都重要，但 motivate 更侧重激发主动性。', },
    ],
    pattern: 'How do you motivate + 对象？',
    patternExamples: [
      { en: 'How do you motivate underperforming engineers?', cn: '您如何激励表现不佳的工程师？', words: [] },
      { en: 'How do you motivate your team during night shifts?', cn: '您如何在夜班期间激励团队？', words: [] },
      { en: 'How do you motivate new employees?', cn: '您如何激励新员工？', words: [] },
    ],
    thinking: '团队激励是管理者的核心软技能，尤其在数据中心24/7高压环境下更为重要。\n好的答案应包括：认可与表扬、职业发展机会、公平对待、以身作则等方法。',
    pronunciation: 'motivate 重音在第一音节：MO-ti-vate。\n节奏：HOW do you ｜ MO-ti-vate ｜ your TEAM?',
    quiz: [
      { q: '把「您如何激励团队？」用英语说出来。', a: 'How do you motivate your team?' },
      { q: '「激励」用英语怎么说？', a: 'motivate (/ˈmoʊtɪveɪt/)' },
    ],
  },
  {
    id: 2114,
    speaker: 'Interviewer',
    en: 'How do you handle conflicts within the team?',
    cn: '您如何处理团队内部冲突？',
    ipa: '/haʊ duː juː ˈhændəl ˈkɑːnflɪkts wɪˈðɪn ðə tiːm/',
    tags: ['第2114句', '团队管理', '★★★★'],
    when: '面试官考察候选人的冲突解决能力和人际管理技巧。',
    words: [
      { w: 'conflicts', ipa: '/ˈkɑːnflɪkts/', pos: '名词（复数）', cn: '冲突', memory: 'con(共同)+flict(打击)→互相打击→冲突。', phonics: 'con 读 /ˈkɑːn/，flicts 读 /flɪkts/', collocations: [['resolve conflicts', '解决冲突'], ['handle conflicts', '处理冲突'], ['team conflicts', '团队冲突']], examples: [['Conflicts must be resolved professionally.', '冲突必须专业地解决。'], ['We had no major conflicts last year.', '去年我们没有重大冲突。']] },
      { w: 'within', ipa: '/wɪˈðɪn/', pos: '介词', cn: '在…内部', memory: 'with(在)+in(里面)→在某个范围的内部。', phonics: 'with 读 /wɪ/，in 读 /ðɪn/', collocations: [['within the team', '在团队内部'], ['within the organization', '在组织内部'], ['within budget', '在预算内']], examples: [['Conflicts within the team must be addressed quickly.', '团队内部冲突必须迅速处理。'], ['All work must be completed within budget.', '所有工作必须在预算内完成。']] },
    ],
    phrases: [
      { p: 'handle conflicts within the team', ipa: '/ˈhændəl ˈkɑːnflɪkts wɪˈðɪn ðə tiːm/', cn: '处理团队内部冲突', why: 'within the team 明确冲突发生在团队内部，区别于跨部门或客户冲突。' },
    ],
    grammar: [
      { q: 'handle 和 resolve 有什么区别？', a: 'handle 是处理/应对，强调过程和方法。\nresolve 是解决，强调最终结果。\n✅ How do you handle conflicts?（你怎么处理冲突？）—— 问方法\n✅ Did you resolve the conflict?（你解决了那个冲突吗？）—— 问结果\n面试中 handle 更常用，因为面试官关注的是你的处理方法。', },
    ],
    pattern: 'How do you handle + 挑战/问题类型？',
    patternExamples: [
      { en: 'How do you handle difficult customers?', cn: '您如何应对难缠的客户？', words: [] },
      { en: 'How do you handle pressure?', cn: '您如何应对压力？', words: [] },
      { en: 'How do you handle underperforming team members?', cn: '您如何应对表现不佳的团队成员？', words: [] },
    ],
    thinking: '团队冲突处理是管理者必须具备的人际管理能力。\n数据中心运维工作压力大、轮班制，团队冲突在所难免。\n好的答案应包括：倾听、中立立场、私下沟通、寻找共同点等方法。',
    pronunciation: 'conflicts 重音在第一音节：CON-flicts。\nwithin 重音在第二音节：with-IN。\n节奏：HOW do you ｜ HAN-dle ｜ CON-flicts ｜ with-IN ｜ the TEAM?',
    quiz: [
      { q: '把「您如何处理团队内部冲突？」用英语说出来。', a: 'How do you handle conflicts within the team?' },
      { q: '「处理冲突」用英语怎么说？', a: 'handle conflicts (/ˈhændəl ˈkɑːnflɪkts/)' },
    ],
  },
  {
    id: 2115,
    speaker: 'Interviewer',
    en: 'How do you train new engineers?',
    cn: '您如何培训新工程师？',
    ipa: '/haʊ duː juː treɪn njuː ˌɛndʒɪˈnɪrz/',
    tags: ['第2115句', '团队管理', '★★★★'],
    when: '面试官考察候选人的知识传授和新人培养能力。',
    words: [
      { w: 'train', ipa: '/treɪn/', pos: '动词', cn: '培训；训练', memory: 'train（培训）→ 通过系统化教学让对方掌握技能。', phonics: '读 /treɪn/，长元音 /eɪ/', collocations: [['train new engineers', '培训新工程师'], ['training program', '培训计划'], ['on-the-job training', '在职培训']], examples: [['We train new engineers for 3 months.', '我们培训新工程师3个月。'], ['All engineers must be trained before working independently.', '所有工程师独立工作前必须接受培训。']] },
      { w: 'new engineers', ipa: '/njuː ˌɛndʒɪˈnɪrz/', pos: '名词', cn: '新工程师', memory: 'new(新的)+engineers(工程师)→刚加入团队、需要培训的工程师。', phonics: 'new 读 /njuː/', collocations: [['new engineers', '新工程师'], ['new hires', '新员工'], ['onboarding', '入职培训']], examples: [['New engineers shadow senior engineers for the first month.', '新工程师第一个月跟资深工程师学习。'], ['We hired two new engineers this quarter.', '本季度我们招聘了两名新工程师。']] },
    ],
    phrases: [
      { p: 'train new engineers', ipa: '/treɪn njuː ˌɛndʒɪˈnɪrz/', cn: '培训新工程师', why: '数据中心运维团队的持续人才培养是管理者的核心职责之一。' },
    ],
    grammar: [
      { q: 'train 和 teach 有什么区别？', a: 'train 强调技能训练，通过实践操作让对方掌握技术。\nteach 强调知识传授，通过讲解让对方理解概念。\n✅ We train engineers on switching operations.（我们培训工程师进行倒闸操作。）—— 技能训练\n✅ I teach new staff about safety procedures.（我给新员工讲安全流程。）—— 知识传授\n在运维场景中 train 更常用，因为大部分能力需要动手实操。', },
    ],
    pattern: 'How do you train + 培训对象？',
    patternExamples: [
      { en: 'How do you train new operators on BMS?', cn: '您如何培训新操作员使用BMS？', words: [] },
      { en: 'How do you train your team on emergency procedures?', cn: '您如何培训团队的应急流程？', words: [] },
      { en: 'How do you train contractors on safety rules?', cn: '您如何培训施工人员的安全规定？', words: [] },
    ],
    thinking: '新人培训是数据中心团队建设的关键环节，直接影响运维质量。\n好的答案应包含：入职培训、师徒制（shadowing）、实操考核、持续培训等。\n数据中心培训通常包括安全培训、设备操作、应急演练等内容。',
    pronunciation: 'train 读 /treɪn/，与 train（火车）同音。\nnew 读 /njuː/。\n节奏：HOW do you ｜ TRAIN ｜ NEW ｜ EN-gi-NEERS?',
    quiz: [
      { q: '把「您如何培训新工程师？」用英语说出来。', a: 'How do you train new engineers?' },
      { q: '「培训」用英语怎么说？', a: 'train (/treɪn/)' },
    ],
  },
  {
    id: 2116,
    speaker: 'Interviewer',
    en: 'Do you have any questions for us?',
    cn: '您有什么问题想问我们吗？',
    ipa: '/duː juː hæv ˈɛni ˈkwɛstʃənz fər ʌs/',
    tags: ['第2116句', '结束面试', '★★★★★'],
    when: '面试接近尾声，面试官给候选人提问的机会，体现双向选择的尊重。',
    words: [
      { w: 'questions', ipa: '/ˈkwɛstʃənz/', pos: '名词（复数）', cn: '问题', memory: 'quest(寻求)+ion(名词后缀)+s(复数)→寻求答案的提问。', phonics: 'ques 读 /ˈkwɛs/，tions 读 /tʃənz/', collocations: [['ask a question', '问问题'], ['have questions', '有问题'], ['answer questions', '回答问题']], examples: [['Do you have any questions?', '您有什么问题吗？'], ['I have a question about the role.', '我对这个岗位有一个问题。']] },
    ],
    phrases: [
      { p: 'any questions for us', ipa: '/ˈɛni ˈkwɛstʃənz fər ʌs/', cn: '想问我们的问题', why: 'for us 明确方向——候选人向面试官提问，体现面试的双向性。' },
    ],
    grammar: [
      { q: '为什么这是面试的必备环节？', a: 'Do you have any questions for us 是面试的标准收尾问题。\n候选人不提问可能被视为缺乏兴趣或准备不足。\n好的问题示例：\n✅ What does a typical day look like?（一天的典型工作是什么样的？）\n✅ What are the growth opportunities?（有哪些成长机会？）\n❌ 不要说 No questions.（没有问题。）', },
    ],
    pattern: 'Do you have any + 名词 + for + 对象？',
    patternExamples: [
      { en: 'Do you have any comments for us?', cn: '您对我们有什么意见吗？', words: [] },
      { en: 'Do you have any concerns about the role?', cn: '您对这个岗位有什么顾虑吗？', words: [] },
      { en: 'Do you have any questions about the team?', cn: '您对团队有什么问题吗？', words: [] },
    ],
    thinking: '面试是双向选择的过程，候选人提问环节体现公司对候选人的尊重。\n好的候选人会提出有深度的问题，展示对岗位和公司的了解与兴趣。\n这个问题通常标志着面试即将结束。',
    pronunciation: 'questions 重音在第一音节：QUES-tions。\nfor us 连读为 /fər ʌs/。\n节奏：DO you ｜ HAVE any ｜ QUES-tions ｜ for US?',
    quiz: [
      { q: '把「您有什么问题想问我们吗？」用英语说出来。', a: 'Do you have any questions for us?' },
      { q: '面试结束时面试官通常会问什么？', a: 'Do you have any questions for us?（您有什么问题想问我们吗？）' },
    ],
  },
  {
    id: 2117,
    speaker: 'Interviewer',
    en: 'Thank you for sharing your experience.',
    cn: '感谢您分享您的经验。',
    ipa: '/θæŋk juː fər ˈʃɛrɪŋ jʊr ɪkˈspɪriəns/',
    tags: ['第2117句', '结束面试', '★★★★'],
    when: '面试官对候选人详细回答问题的感谢，体现专业礼貌。',
    words: [
      { w: 'sharing', ipa: '/ˈʃɛrɪŋ/', pos: '动词（现在分词）', cn: '分享', memory: 'share(分享)+ing(现在分词)→在面试中向面试官讲述自己的经历。', phonics: 'share 读 /ʃɛr/，ing 读 /ɪŋ/', collocations: [['share experience', '分享经验'], ['share knowledge', '分享知识'], ['share ideas', '分享想法']], examples: [['Thank you for sharing.', '感谢您的分享。'], ['I appreciate you sharing your experience.', '感谢您分享您的经验。']] },
      { w: 'experience', ipa: '/ɪkˈspɪriəns/', pos: '名词', cn: '经验；经历', memory: 'ex(出去)+peri(尝试)+ence(名词后缀)→通过尝试获得的→经验。', phonics: 'ex 读 /ɪk/，pe 读 /ˈspɪr/，ri 读 /i/，ence 读 /əns/', collocations: [['work experience', '工作经验'], ['hands-on experience', '实操经验'], ['relevant experience', '相关经验']], examples: [['You have impressive experience.', '您的经验令人印象深刻。'], ['I have 5 years of experience.', '我有5年经验。']] },
    ],
    phrases: [
      { p: 'Thank you for sharing', ipa: '/θæŋk juː fər ˈʃɛrɪŋ/', cn: '感谢您的分享', why: 'Thank you for + 动名词是对某人做某事表示感谢的标准句式。' },
    ],
    grammar: [
      { q: '为什么用 sharing 而不是 share？', a: 'for 是介词，后面必须接动名词（-ing 形式）或名词。\n✅ Thank you for sharing your experience.（感谢您分享您的经验。）\n❌ Thank you for share your experience.（语法错误。）\n同样的：Thank you for coming / Thank you for joining / Thank you for attending.', },
    ],
    pattern: 'Thank you for + 动名词 + 宾语',
    patternExamples: [
      { en: 'Thank you for joining the interview.', cn: '感谢您参加面试。', words: [] },
      { en: 'Thank you for explaining your approach.', cn: '感谢您解释您的方法。', words: [] },
      { en: 'Thank you for taking the time.', cn: '感谢您抽出时间。', words: [] },
    ],
    thinking: '面试是正式商务场合，面试官对候选人的回答表示感谢是基本的职业礼仪。\nsharing experience 比 just talking 更正式，体现对候选人经验的重视。',
    pronunciation: 'experience 重音在第二音节：ex-PE-ri-ence。\nsharing 读 /ˈʃɛrɪŋ/。\n节奏：THANK you ｜ for SHAR-ing ｜ your ex-PE-ri-ence.',
    quiz: [
      { q: '把「感谢您分享您的经验。」用英语说出来。', a: 'Thank you for sharing your experience.' },
      { q: '「经验」用英语怎么说？', a: 'experience (/ɪkˈspɪriəns/)' },
    ],
  },
  {
    id: 2118,
    speaker: 'Interviewer',
    en: 'We will review your application carefully.',
    cn: '我们会认真评估您的申请。',
    ipa: '/wiː wɪl rɪˈvjuː jʊr ˌæplɪˈkeɪʃən ˈkɛrfəli/',
    tags: ['第2118句', '结束面试', '★★★★'],
    when: '面试官向候选人说明后续评估流程，管理候选人期望。',
    words: [
      { w: 'review', ipa: '/rɪˈvjuː/', pos: '动词', cn: '评估；审查', memory: 're(再次)+view(看)→再次查看→评估审查。', phonics: 're 读 /rɪ/，view 读 /vjuː/', collocations: [['review an application', '评估申请'], ['review a resume', '审查简历'], ['review candidates', '评估候选人']], examples: [['We will review all applications.', '我们将评估所有申请。'], ['The hiring committee will review your profile.', '招聘委员会将审查您的资料。']] },
      { w: 'application', ipa: '/ˌæplɪˈkeɪʃən/', pos: '名词', cn: '申请', memory: 'apply(申请)+ation(名词后缀)→正式的求职申请。', phonics: 'ap 读 /ˌæ/，pli 读 /plɪ/，ca 读 /ˈkeɪ/，tion 读 /ʃən/', collocations: [['job application', '求职申请'], ['application form', '申请表'], ['submit an application', '提交申请']], examples: [['We received over 50 applications.', '我们收到了50多份申请。'], ['Your application has been shortlisted.', '您的申请已通过初筛。']] },
    ],
    phrases: [
      { p: 'review your application carefully', ipa: '/rɪˈvjuː jʊr ˌæplɪˈkeɪʃən ˈkɛrfəli/', cn: '认真评估您的申请', why: 'carefully 强调认真对待，给候选人信心，体现公司的专业性。' },
    ],
    grammar: [
      { q: '为什么用 We will review 而不是 We are reviewing？', a: 'We will review 用一般将来时，表示面试后会进行的动作。\nWe are reviewing 用现在进行时，表示正在进行的动作。\n✅ We will review your application carefully.（我们会认真评估您的申请。）—— 面试后\n✅ We are reviewing your application now.（我们正在评估您的申请。）—— 正在做', },
    ],
    pattern: 'We will + 动词 + your + 名词 + 副词',
    patternExamples: [
      { en: 'We will process your application promptly.', cn: '我们会尽快处理您的申请。', words: [] },
      { en: 'We will consider your profile thoroughly.', cn: '我们会全面考虑您的资料。', words: [] },
      { en: 'We will update you on the next steps.', cn: '我们会通知您后续步骤。', words: [] },
    ],
    thinking: '面试结束后说明评估流程是专业的面试管理方式，帮助候选人了解后续安排。\ncarefully 传递认真态度，避免给候选人敷衍的感觉。',
    pronunciation: 'application 重音在第三音节：ap-pli-CA-tion。\ncarefully 重音在第一音节：CARE-ful-ly。\n节奏：We WILL ｜ re-VIEW ｜ your AP-pli-CA-tion ｜ CARE-ful-ly.',
    quiz: [
      { q: '把「我们会认真评估您的申请。」用英语说出来。', a: 'We will review your application carefully.' },
      { q: '「申请」用英语怎么说？', a: 'application (/ˌæplɪˈkeɪʃən/)' },
    ],
  },
  {
    id: 2119,
    speaker: 'Interviewer',
    en: 'We will contact you after the interview.',
    cn: '面试结束后我们会联系您。',
    ipa: '/wiː wɪl ˈkɑːntækt juː ˈæftər ðɪ ˈɪntərvjuː/',
    tags: ['第2119句', '结束面试', '★★★★'],
    when: '面试官告知候选人后续沟通安排，让候选人知道会有反馈。',
    words: [
      { w: 'contact', ipa: '/ˈkɑːntækt/', pos: '动词', cn: '联系', memory: 'con(共同)+tact(接触)→互相接触→联系。', phonics: 'con 读 /ˈkɑːn/，tact 读 /tækt/', collocations: [['contact someone', '联系某人'], ['contact information', '联系信息'], ['get in contact', '取得联系']], examples: [['We will contact you within a week.', '我们会在一周内联系您。'], ['Please contact HR for more information.', '请联系人力资源部了解更多信息。']] },
      { w: 'interview', ipa: '/ˈɪntərvjuː/', pos: '名词', cn: '面试', memory: 'inter(相互)+view(看)→双方互相了解的过程→面试。', phonics: 'in 读 /ˈɪn/，ter 读 /tər/，view 读 /vjuː/', collocations: [['job interview', '求职面试'], ['panel interview', '小组面试'], ['interview process', '面试流程']], examples: [['The interview went well.', '面试进行得很顺利。'], ['Interviews are scheduled for next week.', '面试安排在下周。']] },
    ],
    phrases: [
      { p: 'contact you after the interview', ipa: '/ˈkɑːntækt juː ˈæftər ðɪ ˈɪntərvjuː/', cn: '面试结束后联系您', why: 'after the interview 明确时间点，让候选人知道反馈的时间框架。' },
    ],
    grammar: [
      { q: 'contact 作动词和名词有什么区别？', a: 'contact 既可作动词也可作名词，但用法不同。\n作动词：We will contact you.（我们会联系您。）—— 后面直接接人。\n作名词：Please keep in contact.（请保持联系。）—— 常与 in/out of 搭配。\n✅ I will contact you tomorrow.（我明天联系你。）—— 动词\n✅ Here is my contact information.（这是我的联系信息。）—— 名词', },
    ],
    pattern: 'We will contact you + 时间状语',
    patternExamples: [
      { en: 'We will contact you within two weeks.', cn: '我们会在两周内联系您。', words: [] },
      { en: 'We will contact you by email.', cn: '我们会通过邮件联系您。', words: [] },
      { en: 'We will contact you with the results.', cn: '我们会把结果通知您。', words: [] },
    ],
    thinking: '面试结束后告知候选人后续安排是专业的面试礼仪。\ncontact 在商务英语中是非常常用的动词，后面直接接人，不需要加 with。\n这句话管理候选人期望，避免候选人苦等无果。',
    pronunciation: 'contact 重音在第一音节：CON-tact（作动词时美式英语也可读 con-TACT）。\nafter 读 /ˈæftər/。\n节奏：We WILL ｜ CON-tact ｜ YOU ｜ AF-ter ｜ the IN-ter-view.',
    quiz: [
      { q: '把「面试结束后我们会联系您。」用英语说出来。', a: 'We will contact you after the interview.' },
      { q: '「联系」用英语怎么说？', a: 'contact (/ˈkɑːntækt/)' },
    ],
  },
  {
    id: 2120,
    speaker: 'Interviewer',
    en: 'Thank you for your time. Have a great day.',
    cn: '感谢您的时间，祝您今天愉快。',
    ipa: '/θæŋk juː fər jʊr taɪm hæv ə ɡreɪt deɪ/',
    tags: ['第2120句', '结束面试', '★★★★★'],
    when: '面试正式结束，面试官以专业礼貌的方式告别。',
    words: [
      { w: 'your time', ipa: '/jʊr taɪm/', pos: '名词短语', cn: '您的时间', memory: 'your(您的)+time(时间)→感谢对方抽出宝贵时间参加面试。', phonics: 'your 读 /jʊr/，time 读 /taɪm/', collocations: [['Thank you for your time', '感谢您的时间'], ['take your time', '慢慢来'], ['on time', '准时']], examples: [['Thank you for your time today.', '感谢您今天抽出时间。'], ['I appreciate your time.', '感谢您的时间。']] },
      { w: 'Have a great day', ipa: '/hæv ə ɡreɪt deɪ/', pos: '祝愿语', cn: '祝您今天愉快', memory: 'have(拥有)+a great(美好的)+day(一天)→英语中最常用的告别祝愿语。', phonics: 'have 读 /hæv/，great 读 /ɡreɪt/', collocations: [['Have a great day', '祝你今天愉快'], ['Have a nice day', '祝你愉快'], ['Have a safe trip', '一路平安']], examples: [['Have a great day!', '祝你今天愉快！'], ['Have a great weekend!', '祝你周末愉快！']] },
    ],
    phrases: [
      { p: 'Thank you for your time', ipa: '/θæŋk juː fər jʊr taɪm/', cn: '感谢您的时间', why: '面试结束时的标准礼貌用语，体现对候选人时间的尊重。' },
      { p: 'Have a great day', ipa: '/hæv ə ɡreɪt deɪ/', cn: '祝您今天愉快', why: '英语中最常用的祝愿语，适合正式和半正式场合。' },
    ],
    grammar: [
      { q: 'Have a great day 和 Goodbye 有什么区别？', a: 'Have a great day 是积极的祝愿语，比 goodbye 更温暖、更专业。\nGoodbye 只是简单的告别，没有祝愿含义。\n✅ Thank you for your time. Have a great day!（感谢您的时间。祝您愉快！）—— 专业温暖\n✅ Thank you for your time. Goodbye.（感谢您的时间。再见。）—— 偏冷淡\n面试场景推荐用 Have a great day 或 Have a safe trip home。', },
    ],
    pattern: 'Thank you for your time. Have a + 形容词 + 名词',
    patternExamples: [
      { en: 'Thank you for your time. Have a safe journey home.', cn: '感谢您的时间，祝您一路平安。', words: [] },
      { en: 'Thank you for your time. Have a wonderful evening.', cn: '感谢您的时间，祝您今晚愉快。', words: [] },
      { en: 'Thank you for your time. Have a great weekend.', cn: '感谢您的时间，祝您周末愉快。', words: [] },
    ],
    thinking: '面试结束时的告别语体现公司文化和面试官的专业素养。\nThank you for your time 承认候选人的时间付出。\nHave a great day 传递正面能量，让候选人对公司留下好印象。',
    pronunciation: 'great 读 /ɡreɪt/，注意 /ɡr/ 的辅音组合。\n节奏：THANK you ｜ for your TIME ｜ HAVE a ｜ GREAT DAY.',
    quiz: [
      { q: '把「感谢您的时间，祝您今天愉快。」用英语说出来。', a: 'Thank you for your time. Have a great day.' },
      { q: '面试结束时如何礼貌告别？', a: 'Thank you for your time. Have a great day.（感谢您的时间，祝您愉快。）' },
    ],
  },
];

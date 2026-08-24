// EXPORTS: MOCK_SENTENCES_UTILITYPOWER41A

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_UTILITYPOWER41A: ISentence[] = [
  {
    id: 2281,
    speaker: 'Engineer',
    en: 'We have lost Utility Power Source A.',
    cn: '我们A路市电已经失电。',
    ipa: '/wiː hæv lɒst juːˈtɪlɪti ˈpaʊər sɔːrs eɪ/',
    tags: ['第2281句', '市电失电', '★★★★★'],
    when: 'BMS 显示 A 路市电进线电压为零，值班工程师第一时间口头确认并通报。',
    words: [
      { w: 'lost', ipa: '/lɒst/', pos: '动词（过去分词）', cn: '失去；失电', memory: 'lose(失去)的过去分词形式。', phonics: 'lost 读 /lɒst/，单音节。', collocations: [['lost power', '失电'], ['lost connection', '断连'], ['lost signal', '信号丢失']], examples: [['We have lost power.', '我们已经失电。'], ['The connection has been lost.', '连接已经丢失。']] },
      { w: 'utility', ipa: '/juːˈtɪlɪti/', pos: '名词/形容词', cn: '公用事业（水/电/气）；市电', memory: 'utile(有用的)+ity(名词后缀)→公共设施→公用事业。', phonics: 'u 读 /juː/，til 读 /tɪl/，i 读 /ɪ/，ty 读 /ti/，重音在第二音节。', collocations: [['utility power', '市电'], ['utility company', '供电公司'], ['utility outage', '市电停电']], examples: [['The utility power is stable.', '市电稳定。'], ['Please contact the utility company.', '请联系供电公司。']] },
    ],
    phrases: [
      { p: 'Utility Power Source A', ipa: '/juːˈtɪlɪti ˈpaʊər sɔːrs eɪ/', cn: 'A路市电电源', why: '数据中心通常有 A/B 双路市电冗余，Source A 指 A 路电源。' },
      { p: 'We have lost', ipa: '/wiː hæv lɒst/', cn: '我们已经失去', why: '现在完成时，强调失电状态对当前时刻的影响。' },
    ],
    grammar: [
      { q: '为什么用 have lost 而不是 lost？', a: 'have lost 是现在完成时，强调失电的结果影响到当前——即「现在仍然失电」。\nlost 是一般过去时，只描述过去某个时间点的动作。\n✅ We have lost Utility Power Source A.（A路市电已经失电。）—— 强调当前仍失电\n❌ We lost it at 2 PM.（我们下午2点失去的。）—— 只描述过去时间点' },
    ],
    pattern: 'We have lost + 设备/系统名称',
    patternExamples: [
      { en: 'We have lost Utility Power Source B.', cn: '我们B路市电已经失电。', words: [] },
      { en: 'We have lost cooling on Floor 2.', cn: '我们二楼制冷已经失效。', words: [] },
      { en: 'We have lost network connectivity.', cn: '我们网络连接已经中断。', words: [] },
    ],
    thinking: '市电失电是数据中心最严重的供电事件之一。\nWe have lost + 设备名称 是值班工程师第一时间口头通报的标准句式。\n中文说「…已经失电」，英语用 have lost 对应。',
    pronunciation: 'lost 读 /lɒst/，注意是短元音 /ɒ/ 不是 /ɔː/。\nutility 重音在第二音节：u-TIL-i-ty。\n节奏：We have LOST ｜ u-TIL-i-ty ｜ POWER SOURCE A.',
    quiz: [
      { q: '把「我们A路市电已经失电。」用英语说出来。', a: 'We have lost Utility Power Source A.' },
      { q: '「市电」用英语怎么说？', a: 'utility power (/juːˈtɪlɪti ˈpaʊər/)' },
    ],
  },
  {
    id: 2282,
    speaker: 'Manager',
    en: 'Please confirm the utility power failure.',
    cn: '请确认市电失电。',
    ipa: '/pliːz kənˈfɜːrm ðə juːˈtɪlɪti ˈpaʊər ˈfeɪljər/',
    tags: ['第2282句', '市电失电', '★★★★★'],
    when: '值班经理要求工程师现场确认市电是否确实失电，避免 BMS 误报。',
    words: [
      { w: 'confirm', ipa: '/kənˈfɜːrm/', pos: '动词', cn: '确认', memory: 'con(加强)+firm(坚定)→使之坚定→确认。', phonics: 'con 读 /kən/，firm 读 /fɜːrm/，重音在第二音节。', collocations: [['confirm status', '确认状态'], ['confirm failure', '确认故障'], ['please confirm', '请确认']], examples: [['Please confirm the status.', '请确认状态。'], ['The failure has been confirmed.', '故障已确认。']] },
      { w: 'failure', ipa: '/ˈfeɪljər/', pos: '名词', cn: '故障；失败', memory: 'fail(失败)+ure(名词后缀)→失败的事件→故障。', phonics: 'fail 读 /feɪl/，ure 读 /ər/，重音在第一音节。', collocations: [['power failure', '电力故障'], ['equipment failure', '设备故障'], ['system failure', '系统故障']], examples: [['There was a power failure.', '发生了电力故障。'], ['The failure was unexpected.', '故障是意外发生的。']] },
    ],
    phrases: [
      { p: 'Please confirm', ipa: '/pliːz kənˈfɜːrm/', cn: '请确认', why: 'Please + 动词原形，礼貌的命令句，在应急场景中保持专业而不失礼。' },
      { p: 'utility power failure', ipa: '/juːˈtɪlɪti ˈpaʊər ˈfeɪljər/', cn: '市电失电故障', why: '三个名词组合描述故障类型，failure 是核心名词。' },
    ],
    grammar: [
      { q: '为什么用 Please confirm 而不是 Can you confirm？', a: 'Please confirm 是直接但礼貌的指令，在应急场景中简洁高效。\nCan you confirm 更委婉，但在紧急情况下可能显得犹豫。\n✅ Please confirm the failure.（请确认故障。）—— 专业直接\n✅ Can you confirm it?（你能确认吗？）—— 更委婉\n应急场景中推荐 Please confirm。' },
    ],
    pattern: 'Please confirm + 故障/状态描述',
    patternExamples: [
      { en: 'Please confirm the generator status.', cn: '请确认发电机状态。', words: [] },
      { en: 'Please confirm the alarm clearance.', cn: '请确认告警已清除。', words: [] },
      { en: 'Please confirm the load transfer.', cn: '请确认负载已切换。', words: [] },
    ],
    thinking: '确认故障是应急流程的关键第一步。\nPlease confirm + 状态描述 是值班经理下达确认指令的标准句式。\n中文说「请确认…」，英语结构完全一致。',
    pronunciation: 'confirm 重音在第二音节：con-FIRM。\nfailure 重音在第一音节：FAIL-ure。\n节奏：Please con-FIRM ｜ the u-TIL-i-ty ｜ POWER FAIL-ure.',
    quiz: [
      { q: '把「请确认市电失电。」用英语说出来。', a: 'Please confirm the utility power failure.' },
      { q: '「确认」用英语怎么说？', a: 'confirm (/kənˈfɜːrm/)' },
    ],
  },
  {
    id: 2283,
    speaker: 'Engineer',
    en: 'Utility Power Source B is still available.',
    cn: 'B路市电目前正常。',
    ipa: '/juːˈtɪlɪti ˈpaʊər sɔːrs biː ɪz stɪl əˈveɪləbəl/',
    tags: ['第2283句', '市电失电', '★★★★★'],
    when: 'A路失电后，工程师汇报 B 路市电状态，确认冗余电源仍然可用。',
    words: [
      { w: 'available', ipa: '/əˈveɪləbəəl/', pos: '形容词', cn: '可用的；正常的', memory: 'avail(有益于)+able(能…的)→能被使用的→可用的。', phonics: 'a 读 /ə/，vail 读 /veɪl/，a 读 /ə/，ble 读 /bəl/，重音在第二音节。', collocations: [['still available', '仍然可用'], ['power available', '电源可用'], ['resources available', '资源可用']], examples: [['Is the power still available?', '电源还正常吗？'], ['All resources are available.', '所有资源均可用。']] },
    ],
    phrases: [
      { p: 'is still available', ipa: '/ɪz stɪl əˈveɪləbəl/', cn: '仍然可用/正常', why: 'still 强调在 A 路失电的情况下 B 路仍然保持可用，是冗余供电的关键信息。' },
    ],
    grammar: [
      { q: '为什么用 is still available 而不是 is still working？', a: 'available 在数据中心语境中指「可用、就绪」，更专业。\nworking 更口语化，指「在运行」。\n✅ Source B is still available.（B路仍然可用。）—— 专业术语\n✅ Source B is still working.（B路还在运行。）—— 口语\n汇报中推荐用 available。' },
    ],
    pattern: '设备/系统 + is still available',
    patternExamples: [
      { en: 'The cooling system is still available.', cn: '制冷系统仍然正常。', words: [] },
      { en: 'The backup power is still available.', cn: '备用电源仍然可用。', words: [] },
      { en: 'Network connectivity is still available.', cn: '网络连接仍然正常。', words: [] },
    ],
    thinking: '冗余电源是数据中心可靠性的核心保障。\n汇报 B 路状态时，still available 明确表达「尽管 A 路失电，B 路不受影响」。\n中文说「…目前正常」，英语用 is still available 对应。',
    pronunciation: 'available 重音在第二音节：a-VAIL-a-ble。\nstill 读 /stɪl/，注意不要读成 still /stiːl/。\n节奏：u-TIL-i-ty ｜ POWER SOURCE B ｜ is STILL ｜ a-VAIL-a-ble.',
    quiz: [
      { q: '把「B路市电目前正常。」用英语说出来。', a: 'Utility Power Source B is still available.' },
      { q: '「仍然可用」用英语怎么说？', a: 'still available (/stɪl əˈveɪləbəl/)' },
    ],
  },
  {
    id: 2284,
    speaker: 'Engineer',
    en: 'Both utility power sources have failed.',
    cn: '双路市电全部失电。',
    ipa: '/boʊθ juːˈtɪlɪti ˈpaʊər ˈsɔːrsɪz hæv feɪld/',
    tags: ['第2284句', '市电失电', '★★★★★'],
    when: 'A/B 双路市电均失电，数据中心完全失去市电供电，进入全停电应急状态。',
    words: [
      { w: 'both', ipa: '/boʊθ/', pos: '限定词/代词', cn: '两路都；双路', memory: 'both 表示「两个都」，在双路供电场景中指 A 路和 B 路。', phonics: 'both 读 /boʊθ/，注意 th 发 /θ/ 不送气。', collocations: [['both sources', '双路'], ['both failed', '都故障了'], ['both available', '都正常']], examples: [['Both generators are running.', '两台发电机都在运行。'], ['Both sources have failed.', '双路都已失电。']] },
      { w: 'failed', ipa: '/feɪld/', pos: '动词（过去分词）', cn: '故障；失效', memory: 'fail(失败)+ed(过去分词)→已经失效→已经故障。', phonics: 'failed 读 /feɪld/，单音节。', collocations: [['have failed', '已故障'], ['equipment failed', '设备故障了'], ['system has failed', '系统已失效']], examples: [['The generator has failed.', '发电机已故障。'], ['Both UPS units have failed.', '两台UPS都已故障。']] },
    ],
    phrases: [
      { p: 'Both...have failed', ipa: '/boʊθ...hæv feɪld/', cn: '双路…全部失电/故障', why: 'Both + 复数名词 + have failed 是汇报双路同时故障的标准句式。' },
    ],
    grammar: [
      { q: '为什么用 have failed 而不是 has failed？', a: '主语是 both utility power sources（复数），所以动词用 have 而不是 has。\n✅ Both sources have failed.（双路都已故障。）—— 复数\n❌ Both sources has failed.（语法错误。）\n如果主语是单数：Source A has failed.（A路已故障。）—— 单数' },
    ],
    pattern: 'Both + 设备（复数）+ have failed',
    patternExamples: [
      { en: 'Both cooling units have failed.', cn: '两台制冷机组都已故障。', words: [] },
      { en: 'Both UPS batteries have failed.', cn: '两组UPS电池都已故障。', words: [] },
      { en: 'Both network links have failed.', cn: '两条网络链路都已中断。', words: [] },
    ],
    thinking: '双路市电全部失电是数据中心最严重的供电事故。\nBoth + 复数名词 + have failed 是汇报此情况的标准句式。\n中文说「双路…全部失电」，英语用 both...have failed 对应。',
    pronunciation: 'both 读 /boʊθ/，注意咬舌音 /θ/。\nfailed 读 /feɪld/。\n节奏：BOTH u-TIL-i-ty ｜ POWER SOURCES ｜ have FAILED.',
    quiz: [
      { q: '把「双路市电全部失电。」用英语说出来。', a: 'Both utility power sources have failed.' },
      { q: '「双路都…」用英语怎么说？', a: 'Both...have... (/boʊθ...hæv.../)' },
    ],
  },
  {
    id: 2285,
    speaker: 'Manager',
    en: 'Please notify the utility company immediately.',
    cn: '请立即通知供电公司。',
    ipa: '/pliːz ˈnoʊtɪfaɪ ðə juːˈtɪlɪti ˈkʌmpəni ɪˈmiːdiətli/',
    tags: ['第2285句', '市电失电', '★★★★★'],
    when: '确认市电失电后，值班经理指示立即联系供电公司排查原因和预计恢复时间。',
    words: [
      { w: 'notify', ipa: '/ˈnoʊtɪfaɪ/', pos: '动词', cn: '通知', memory: 'not(标记)+ify(使…化)→使之被标记→通知。', phonics: 'no 读 /noʊ/，ti 读 /tɪ/，fy 读 /faɪ/，重音在第一音节。', collocations: [['notify immediately', '立即通知'], ['notify the customer', '通知客户'], ['notify the team', '通知团队']], examples: [['Please notify the manager.', '请通知经理。'], ['All customers have been notified.', '所有客户都已通知到。']] },
      { w: 'immediately', ipa: '/ɪˈmiːdiətli/', pos: '副词', cn: '立即；马上', memory: 'im(不)+mediate(中间的)+ly(副词后缀)→没有中间环节→立即。', phonics: 'im 读 /ɪ/，me 读 /miː/，di 读 /di/，ate 读 /ət/，ly 读 /li/，重音在第二音节。', collocations: [['immediately notify', '立即通知'], ['respond immediately', '立即响应'], ['act immediately', '立即行动']], examples: [['Please respond immediately.', '请立即响应。'], ['The team was notified immediately.', '团队已立即被通知。']] },
    ],
    phrases: [
      { p: 'Please notify...immediately', ipa: '/pliːz ˈnoʊtɪfaɪ...ɪˈmiːdiətli/', cn: '请立即通知…', why: 'immediately 强调紧迫性，在应急场景中通知外部单位需第一时间执行。' },
    ],
    grammar: [
      { q: '为什么用 notify 而不是 inform？', a: 'notify 更强调「正式告知、发出通知」，常用于对外部单位。\ninform 更强调「告知信息」，常用于对人。\n✅ Please notify the utility company.（请通知供电公司。）—— 对外正式\n✅ Please inform the manager.（请告知经理。）—— 对内\n通知供电公司用 notify 更合适。' },
    ],
    pattern: 'Please notify + 对象 + immediately',
    patternExamples: [
      { en: 'Please notify all affected customers immediately.', cn: '请立即通知所有受影响客户。', words: [] },
      { en: 'Please notify the fire department immediately.', cn: '请立即通知消防部门。', words: [] },
      { en: 'Please notify the vendor immediately.', cn: '请立即通知供应商。', words: [] },
    ],
    thinking: '市电失电后必须第一时间通知供电公司。\nPlease notify + 对象 + immediately 是紧急通知的标准句式。\n中文说「请立即通知…」，英语结构完全一致。',
    pronunciation: 'notify 重音在第一音节：NO-ti-fy。\nimmediately 重音在第二音节：im-ME-di-ate-ly。\n节奏：Please NO-ti-fy ｜ the u-TIL-i-ty ｜ COM-pa-ny ｜ im-ME-di-ate-ly.',
    quiz: [
      { q: '把「请立即通知供电公司。」用英语说出来。', a: 'Please notify the utility company immediately.' },
      { q: '「立即通知」用英语怎么说？', a: 'notify immediately (/ˈnoʊtɪfaɪ ɪˈmiːdiətli/)' },
    ],
  },
  {
    id: 2286,
    speaker: 'Engineer',
    en: 'Please verify the incoming switchgear status.',
    cn: '请确认进线柜状态。',
    ipa: '/pliːz ˈvɛrɪfaɪ ði ˈɪnˌkʌmɪŋ ˈswɪtʃɡɪr ˈsteɪtəs/',
    tags: ['第2286句', '市电失电', '★★★★'],
    when: '工程师被派往配电室检查进线柜断路器、指示灯状态，确认失电信号来源。',
    words: [
      { w: 'verify', ipa: '/ˈvɛrɪfaɪ/', pos: '动词', cn: '核实；验证', memory: 'ver(真实)+ify(使…化)→使之变真→验证。', phonics: 'ver 读 /vɛr/，i 读 /ɪ/，fy 读 /faɪ/，重音在第一音节。', collocations: [['verify status', '核实状态'], ['verify reading', '核实读数'], ['verify operation', '验证运行']], examples: [['Please verify the voltage.', '请核实电压。'], ['The status has been verified.', '状态已核实。']] },
      { w: 'switchgear', ipa: '/ˈswɪtʃɡɪr/', pos: '名词', cn: '开关柜；配电装置', memory: 'switch(开关)+gear(装置)→开关装置→开关柜。', phonics: 'switch 读 /swɪtʃ/，gear 读 /ɡɪr/，重音在第一音节。', collocations: [['incoming switchgear', '进线柜'], ['switchgear status', '开关柜状态'], ['switchgear room', '配电室']], examples: [['The switchgear is in the electrical room.', '开关柜在配电室。'], ['Please check the switchgear.', '请检查开关柜。']] },
    ],
    phrases: [
      { p: 'incoming switchgear', ipa: '/ˈɪnˌkʌmɪŋ ˈswɪtʃɡɪr/', cn: '进线柜', why: 'incoming 指从外部（供电公司）进入数据中心的电源，incoming switchgear 即接收市电的第一级配电柜。' },
    ],
    grammar: [
      { q: 'verify 和 confirm 有什么区别？', a: 'verify 更强调「通过检查、测量来验证」，通常需要到现场看。\nconfirm 更强调「口头确认、回复确认」。\n✅ Please verify the switchgear status.（请到现场核实开关柜状态。）—— 需现场检查\n✅ Please confirm the alarm is cleared.（请确认告警已清除。）—— 口头确认即可' },
    ],
    pattern: 'Please verify + 设备/系统 + status',
    patternExamples: [
      { en: 'Please verify the generator output status.', cn: '请核实发电机输出状态。', words: [] },
      { en: 'Please verify the UPS battery status.', cn: '请核实UPS电池状态。', words: [] },
      { en: 'Please verify the cooling system status.', cn: '请核实验冷系统状态。', words: [] },
    ],
    thinking: '进线柜是市电进入数据中心的第一道关口，核实其状态是判断失电原因的关键。\n中文说「请确认…状态」，英语用 Please verify 对应。',
    pronunciation: 'verify 重音在第一音节：VER-i-fy。\nswitchgear 重音在第一音节：SWITCH-gear。\n节奏：Please VER-i-fy ｜ the IN-com-ing ｜ SWITCH-gear STA-tus.',
    quiz: [
      { q: '把「请确认进线柜状态。」用英语说出来。', a: 'Please verify the incoming switchgear status.' },
      { q: '「进线柜」用英语怎么说？', a: 'incoming switchgear (/ˈɪnˌkʌmɪŋ ˈswɪtʃɡɪr/)' },
    ],
  },
  {
    id: 2287,
    speaker: 'Engineer',
    en: 'Please confirm the loss of voltage.',
    cn: '请确认电压已经消失。',
    ipa: '/pliːz kənˈfɜːrm ðə lɒs əv ˈvoʊltɪdʒ/',
    tags: ['第2287句', '市电失电', '★★★★'],
    when: '工程师用万用表或验电器确认进线电压确实为零，排除 BMS 误报可能。',
    words: [
      { w: 'loss', ipa: '/lɒs/', pos: '名词', cn: '失去；损失', memory: 'lose(失去)的名词形式。', phonics: 'loss 读 /lɒs/，短元音 /ɒ/，注意与 lose /luːz/ 区分。', collocations: [['loss of voltage', '电压消失'], ['power loss', '电力损失'], ['data loss', '数据丢失']], examples: [['There was a loss of power.', '发生了失电。'], ['The loss of voltage was confirmed.', '电压消失已确认。']] },
      { w: 'voltage', ipa: '/ˈvoʊltɪdʒ/', pos: '名词', cn: '电压', memory: 'volt(伏特)+age(名词后缀)→伏特数→电压。', phonics: 'volt 读 /voʊlt/，age 读 /ɪdʒ/，重音在第一音节。', collocations: [['voltage level', '电压等级'], ['output voltage', '输出电压'], ['loss of voltage', '电压消失']], examples: [['The voltage is 400V.', '电压是400伏。'], ['Please check the voltage.', '请检查电压。']] },
    ],
    phrases: [
      { p: 'loss of voltage', ipa: '/lɒs əv ˈvoʊltɪdʒ/', cn: '电压消失', why: 'loss of + 名词 表示「…的丧失」，loss of voltage 指电压完全降为零。' },
    ],
    grammar: [
      { q: '为什么用 loss of voltage 而不是 voltage loss？', a: 'loss of voltage 是正式的技术表达，of 结构在工程文件中更常见。\nvoltage loss 也可以用，但更口语化。\n✅ Please confirm the loss of voltage.（请确认电压已消失。）—— 正式\n✅ The voltage loss was detected.（检测到电压丢失。）—— 也可用\n汇报中推荐 loss of voltage。' },
    ],
    pattern: 'Please confirm the loss of + 参数',
    patternExamples: [
      { en: 'Please confirm the loss of cooling.', cn: '请确认制冷已失效。', words: [] },
      { en: 'Please confirm the loss of network.', cn: '请确认网络已中断。', words: [] },
      { en: 'Please confirm the loss of signal.', cn: '请确认信号已丢失。', words: [] },
    ],
    thinking: '确认电压消失是排除 BMS 误报的关键步骤，通常需要工程师用验电器现场验证。\n中文说「请确认…已经消失」，英语用 Please confirm the loss of 对应。',
    pronunciation: 'loss 读 /lɒs/（短元音），不要读成 /loʊs/。\nvoltage 重音在第一音节：VOLT-age。\n节奏：Please con-FIRM ｜ the LOSS ｜ of VOLT-age.',
    quiz: [
      { q: '把「请确认电压已经消失。」用英语说出来。', a: 'Please confirm the loss of voltage.' },
      { q: '「电压」用英语怎么说？', a: 'voltage (/ˈvoʊltɪdʒ/)' },
    ],
  },
  {
    id: 2288,
    speaker: 'Engineer',
    en: 'Please verify the protection relay indications.',
    cn: '请确认保护继电器指示。',
    ipa: '/pliːz ˈvɛrɪfaɪ ðə prəˈtɛkʃən ˈriːleɪ ˌɪndɪˈkeɪʃənz/',
    tags: ['第2288句', '市电失电', '★★★★'],
    when: '工程师检查保护继电器面板上的指示灯和故障记录，判断失电是由保护动作还是上级电网问题引起。',
    words: [
      { w: 'protection', ipa: '/prəˈtɛkʃən/', pos: '名词', cn: '保护', memory: 'protect(保护)+ion(名词后缀)→保护行为→保护。', phonics: 'pro 读 /prə/，tec 读 /tɛk/，tion 读 /ʃən/，重音在第二音节。', collocations: [['protection relay', '保护继电器'], ['overcurrent protection', '过流保护'], ['ground fault protection', '接地故障保护']], examples: [['The protection relay tripped.', '保护继电器动作了。'], ['Check the protection settings.', '检查保护设置。']] },
      { w: 'relay', ipa: '/ˈriːleɪ/', pos: '名词', cn: '继电器', memory: 're(再)+lay(放置)→再次传递信号→继电器。', phonics: 're 读 /riː/，lay 读 /leɪ/，重音在第一音节。注意 relay（继电器）与 relay（接力赛）发音相同。', collocations: [['protection relay', '保护继电器'], ['relay indication', '继电器指示'], ['relay trip', '继电器跳闸']], examples: [['The relay has tripped.', '继电器已跳闸。'], ['Reset the relay.', '复位继电器。']] },
      { w: 'indication', ipa: '/ˌɪndɪˈkeɪʃən/', pos: '名词', cn: '指示；显示', memory: 'in(进入)+dic(说)+ation(名词后缀)→说出来的信息→指示。', phonics: 'in 读 /ɪn/，di 读 /dɪ/，ca 读 /keɪ/，tion 读 /ʃən/，重音在第三音节。', collocations: [['relay indication', '继电器指示'], ['fault indication', '故障指示'], ['alarm indication', '告警指示']], examples: [['What does the indication show?', '指示显示什么？'], ['The fault indication is red.', '故障指示为红色。']] },
    ],
    phrases: [
      { p: 'protection relay indications', ipa: '/prəˈtɛkʃən ˈriːleɪ ˌɪndɪˈkeɪʃənz/', cn: '保护继电器指示', why: '保护继电器面板上有多个指示灯和故障代码，indication（复数）指所有相关指示信息。' },
    ],
    grammar: [
      { q: 'indication 为什么用复数？', a: '保护继电器面板上通常有多个指示（如过流指示、接地指示、跳闸指示等），所以用复数 indications。\n✅ Please verify the protection relay indications.（请确认保护继电器的各项指示。）\n如果只看一个特定指示：Please check this indication.（请检查这个指示。）' },
    ],
    pattern: 'Please verify the + 设备 + indications/readings',
    patternExamples: [
      { en: 'Please verify the meter readings.', cn: '请核实仪表读数。', words: [] },
      { en: 'Please verify the panel indications.', cn: '请核实面板指示。', words: [] },
      { en: 'Please verify the BMS alarm indications.', cn: '请核实BMS告警指示。', words: [] },
    ],
    thinking: '保护继电器是判断失电原因的关键设备，其指示灯可以显示是过流跳闸、欠压跳闸还是其他原因。\n中文说「请确认…指示」，英语用 Please verify the indications 对应。',
    pronunciation: 'protection 重音在第二音节：pro-TEC-tion。\nrelay 重音在第一音节：RE-lay。\nindication 重音在第三音节：in-di-CA-tion。\n节奏：Please VER-i-fy ｜ the pro-TEC-tion ｜ RE-lay ｜ in-di-CA-tions.',
    quiz: [
      { q: '把「请确认保护继电器指示。」用英语说出来。', a: 'Please verify the protection relay indications.' },
      { q: '「保护继电器」用英语怎么说？', a: 'protection relay (/prəˈtɛkʃən ˈriːleɪ/)' },
    ],
  },
  {
    id: 2289,
    speaker: 'Manager',
    en: 'The utility outage has been confirmed.',
    cn: '已经确认市电停电。',
    ipa: '/ðə juːˈtɪlɪti ˈaʊteɪdʒ hæz biːn kənˈfɜːrmd/',
    tags: ['第2289句', '市电失电', '★★★★★'],
    when: '经过现场检查确认市电确实停电后，值班经理正式宣布并进入下一步应急流程。',
    words: [
      { w: 'outage', ipa: '/ˈaʊteɪdʒ/', pos: '名词', cn: '停电；中断', memory: 'out(外)+age(名词后缀)→跑到外面去→中断→停电。', phonics: 'out 读 /aʊt/，age 读 /ɪdʒ/，重音在第一音节。', collocations: [['utility outage', '市电停电'], ['power outage', '停电'], ['planned outage', '计划停电']], examples: [['There was a utility outage.', '发生了市电停电。'], ['The outage lasted two hours.', '停电持续了两个小时。']] },
    ],
    phrases: [
      { p: 'has been confirmed', ipa: '/hæz biːn kənˈfɜːrmd/', cn: '已经确认', why: '现在完成时被动语态，表示确认动作已完成，强调当前结论状态。' },
      { p: 'utility outage', ipa: '/juːˈtɪlɪti ˈaʊteɪdʒ/', cn: '市电停电', why: 'outage 专指电力或服务的中断，utility outage 是市电停电的专业术语。' },
    ],
    grammar: [
      { q: 'outage 和 failure 有什么区别？', a: 'outage 强调「停电/服务中断」这一事件本身，通常指外部供电中断。\nfailure 强调「设备/系统故障」，可以是内部原因。\n✅ The utility outage has been confirmed.（市电停电已确认。）—— 外部供电中断\n✅ The generator failure has been confirmed.（发电机故障已确认。）—— 设备故障' },
    ],
    pattern: 'The + 事件 + has been confirmed',
    patternExamples: [
      { en: 'The power outage has been confirmed.', cn: '停电已确认。', words: [] },
      { en: 'The network failure has been confirmed.', cn: '网络故障已确认。', words: [] },
      { en: 'The cooling loss has been confirmed.', cn: '制冷失效已确认。', words: [] },
    ],
    thinking: '确认市电停电是从「怀疑」到「定性」的关键节点。\nThe utility outage has been confirmed 是值班经理正式宣布的标准句式。\n中文说「已经确认…」，英语用 has been confirmed 对应。',
    pronunciation: 'outage 重音在第一音节：OUT-age。\nconfirmed 读 /kənˈfɜːrmd/，重音在第二音节。\n节奏：The u-TIL-i-ty ｜ OUT-age ｜ has BEEN ｜ con-FIRMED.',
    quiz: [
      { q: '把「已经确认市电停电。」用英语说出来。', a: 'The utility outage has been confirmed.' },
      { q: '「市电停电」用英语怎么说？', a: 'utility outage (/juːˈtɪlɪti ˈaʊteɪdʒ/)' },
    ],
  },
  {
    id: 2290,
    speaker: 'Manager',
    en: 'Please activate the utility outage procedure.',
    cn: '请启动市电停电应急程序。',
    ipa: '/pliːz ˈæktɪveɪt ðə juːˈtɪlɪti ˈaʊteɪdʒ prəˈsiːdʒər/',
    tags: ['第2290句', '市电失电', '★★★★★'],
    when: '确认市电停电后，值班经理下令启动预定的市电停电应急操作流程。',
    words: [
      { w: 'activate', ipa: '/ˈæktɪveɪt/', pos: '动词', cn: '启动；激活', memory: 'act(行动)+ivate(动词后缀)→使行动起来→启动。', phonics: 'act 读 /ækt/，i 读 /ɪ/，vate 读 /veɪt/，重音在第一音节。', collocations: [['activate procedure', '启动程序'], ['activate plan', '启动预案'], ['activate alarm', '激活告警']], examples: [['Please activate the emergency plan.', '请启动应急预案。'], ['The procedure has been activated.', '程序已启动。']] },
      { w: 'procedure', ipa: '/prəˈsiːdʒər/', pos: '名词', cn: '程序；流程', memory: 'pro(向前)+ceed(走)+ure(名词后缀)→向前走的路径→流程。', phonics: 'pro 读 /prə/，ce 读 /siː/，dure 读 /dʒər/，重音在第二音节。', collocations: [['emergency procedure', '应急程序'], ['operating procedure', '操作流程'], ['standard procedure', '标准流程']], examples: [['Follow the procedure.', '按流程操作。'], ['The procedure is documented.', '流程已有文档。']] },
    ],
    phrases: [
      { p: 'utility outage procedure', ipa: '/juːˈtɪlɪti ˈaʊteɪdʒ prəˈsiːdʒər/', cn: '市电停电应急程序', why: 'procedure 前加 utility outage 限定，指专门针对市电停电的应急预案。' },
    ],
    grammar: [
      { q: 'activate 和 start 有什么区别？', a: 'activate 更正式、更专业，指「启动预设的系统/程序」。\nstart 更通用，指「开始」。\n✅ Please activate the procedure.（请启动程序。）—— 专业\n✅ Let\'s start the meeting.（我们开始会议吧。）—— 通用\n启动应急预案用 activate 更合适。' },
    ],
    pattern: 'Please activate the + 应急程序名称',
    patternExamples: [
      { en: 'Please activate the emergency response plan.', cn: '请启动应急响应预案。', words: [] },
      { en: 'Please activate the fire alarm procedure.', cn: '请启动火灾报警程序。', words: [] },
      { en: 'Please activate the evacuation procedure.', cn: '请启动疏散程序。', words: [] },
    ],
    thinking: '启动应急预案是从「确认」到「行动」的关键转折。\nPlease activate the procedure 是值班经理下令的标准句式。\n中文说「请启动…程序」，英语用 Please activate the procedure 对应。',
    pronunciation: 'activate 重音在第一音节：AC-ti-vate。\nprocedure 重音在第二音节：pro-CE-dure。\n节奏：Please AC-ti-vate ｜ the u-TIL-i-ty ｜ OUT-age ｜ pro-CE-dure.',
    quiz: [
      { q: '把「请启动市电停电应急程序。」用英语说出来。', a: 'Please activate the utility outage procedure.' },
      { q: '「启动程序」用英语怎么说？', a: 'activate the procedure (/ˈæktɪveɪt ðə prəˈsiːdʒər/)' },
    ],
  },
  {
    id: 2291,
    speaker: 'Engineer',
    en: 'All UPS systems are supplying the load.',
    cn: '所有UPS正在为负载供电。',
    ipa: '/ɔːl juː-piː-ɛs ˈsɪstəmz ɑːr səˈplaɪɪŋ ðə loʊd/',
    tags: ['第2291句', 'UPS运行', '★★★★★'],
    when: '市电失电后，工程师汇报 UPS 系统已自动接管负载供电，保障关键设备不断电。',
    words: [
      { w: 'supplying', ipa: '/səˈplaɪɪŋ/', pos: '动词（现在进行时）', cn: '供电；供给', memory: 'supply(供给)+ing(进行时)→正在供给→正在供电。', phonics: 'sup 读 /sə/，ply 读 /plaɪ/，ing 读 /ɪŋ/，重音在第二音节。', collocations: [['supplying the load', '为负载供电'], ['supplying power', '供电'], ['power supply', '电源']], examples: [['The UPS is supplying the load.', 'UPS正在为负载供电。'], ['The generator supplies backup power.', '发电机提供备用电源。']] },
      { w: 'load', ipa: '/loʊd/', pos: '名词', cn: '负载；负荷', memory: 'load 原义「装载」，在电力系统中指所有用电设备的总功率需求。', phonics: 'load 读 /loʊd/，单音节。', collocations: [['critical load', '关键负载'], ['load transfer', '负载切换'], ['load capacity', '负载容量']], examples: [['The load is 500kW.', '负载为500千瓦。'], ['Transfer the load to the generator.', '将负载切换到发电机。']] },
    ],
    phrases: [
      { p: 'supplying the load', ipa: '/səˈplaɪɪŋ ðə loʊd/', cn: '为负载供电', why: 'supply + the load 是电力系统中的标准搭配，load 指数据中心所有用电设备。' },
    ],
    grammar: [
      { q: '为什么用 are supplying 而不是 supply？', a: 'are supplying 是现在进行时，强调「此刻正在供电」的状态。\nsupply 是一般现在时，表示「通常供给」的事实。\n✅ All UPS systems are supplying the load.（所有UPS正在供电。）—— 当前实时状态\n✅ UPS systems supply backup power.（UPS系统提供备用电源。）—— 一般事实\n汇报实时状态用 are supplying。' },
    ],
    pattern: 'All + 设备系统 + are + 动作-ing + the load',
    patternExamples: [
      { en: 'All generators are supplying the load.', cn: '所有发电机正在为负载供电。', words: [] },
      { en: 'All cooling systems are maintaining the temperature.', cn: '所有制冷系统正在维持温度。', words: [] },
      { en: 'All circuits are carrying the load.', cn: '所有回路正在承载负荷。', words: [] },
    ],
    thinking: '市电失电后 UPS 自动接管是最关键的供电保障措施。\n汇报 UPS 供电状态时使用 are supplying the load 强调实时状态。\n中文说「所有UPS正在为负载供电」，英语用 are supplying the load 对应。',
    pronunciation: 'UPS 逐个字母读：U-P-S /juː-piː-ɛs/。\nsupplying 重音在第二音节：sup-PLY-ing。\n节奏：All U-P-S SYS-tems ｜ are sup-PLY-ing ｜ the LOAD.',
    quiz: [
      { q: '把「所有UPS正在为负载供电。」用英语说出来。', a: 'All UPS systems are supplying the load.' },
      { q: '「负载」用英语怎么说？', a: 'load (/loʊd/)' },
    ],
  },
  {
    id: 2292,
    speaker: 'Engineer',
    en: 'The UPS systems have switched to battery mode.',
    cn: 'UPS已经切换到电池模式。',
    ipa: '/ðə juː-piː-ɛs ˈsɪstəmz hæv swɪtʃt tuː ˈbætəri moʊd/',
    tags: ['第2292句', 'UPS运行', '★★★★★'],
    when: '市电失电后 UPS 自动从市电供电模式切换为电池逆变供电模式，工程师汇报切换状态。',
    words: [
      { w: 'switched', ipa: '/swɪtʃt/', pos: '动词（过去分词）', cn: '切换；转换', memory: 'switch(切换)+ed(过去分词)→已经切换。', phonics: 'switched 读 /swɪtʃt/，单音节。', collocations: [['switched to battery', '切换到电池'], ['switch to generator', '切换到发电机'], ['auto-switch', '自动切换']], examples: [['The UPS has switched to battery.', 'UPS已切换到电池模式。'], ['Please switch to manual mode.', '请切换到手动模式。']] },
      { w: 'battery', ipa: '/ˈbætəri/', pos: '名词', cn: '电池', memory: 'bat(打)+tery→反复捶打的装置→电池（源自早期电池需充电）。', phonics: 'bat 读 /bæt/，te 读 /tə/，ry 读 /ri/，重音在第一音节。', collocations: [['battery mode', '电池模式'], ['battery capacity', '电池容量'], ['battery runtime', '电池供电时间']], examples: [['The battery is fully charged.', '电池已充满。'], ['Check the battery status.', '检查电池状态。']] },
    ],
    phrases: [
      { p: 'switched to battery mode', ipa: '/swɪtʃt tuː ˈbætəri moʊd/', cn: '切换到电池模式', why: 'switch to + 模式名称 表示从一种运行状态切换到另一种，battery mode 是 UPS 在市电中断时的逆变供电模式。' },
    ],
    grammar: [
      { q: '为什么用 have switched 而不是 switched？', a: 'have switched 是现在完成时，强调切换动作已完成且当前处于电池模式。\nswitched 是一般过去时，只描述切换动作发生在过去。\n✅ The UPS has switched to battery mode.（UPS已切换到电池模式。）—— 强调当前状态\n✅ The UPS switched at 2:15 PM.（UPS在下午2:15切换了。）—— 强调过去时间点' },
    ],
    pattern: '设备 + have/has switched to + 模式',
    patternExamples: [
      { en: 'The cooling system has switched to backup mode.', cn: '制冷系统已切换到备用模式。', words: [] },
      { en: 'The ATS has switched to generator power.', cn: '自动转换开关已切换到发电机供电。', words: [] },
      { en: 'The network has switched to the backup link.', cn: '网络已切换到备用链路。', words: [] },
    ],
    thinking: 'UPS 切换到电池模式是市电失电后的自动保护动作。\n汇报时使用 have switched to battery mode 强调已切换成功。\n中文说「已经切换到…」，英语用 have switched to 对应。',
    pronunciation: 'switched 读 /swɪtʃt/，注意末尾 /t/ 要清晰。\nbattery 重音在第一音节：BAT-te-ry。\n节奏：The U-P-S SYS-tems ｜ have SWITCHED ｜ to BAT-te-ry MODE.',
    quiz: [
      { q: '把「UPS已经切换到电池模式。」用英语说出来。', a: 'The UPS systems have switched to battery mode.' },
      { q: '「电池模式」用英语怎么说？', a: 'battery mode (/ˈbætəri moʊd/)' },
    ],
  },
  {
    id: 2293,
    speaker: 'Manager',
    en: 'Please check the remaining battery runtime.',
    cn: '请检查电池剩余供电时间。',
    ipa: '/pliːz tʃɛk ðə rɪˈmeɪnɪŋ ˈbætəri ˈrʌnˌtaɪm/',
    tags: ['第2293句', 'UPS运行', '★★★★★'],
    when: 'UPS 切换到电池模式后，值班经理要求确认电池还能支撑多长时间，以决定下一步操作。',
    words: [
      { w: 'remaining', ipa: '/rɪˈmeɪnɪŋ/', pos: '形容词/现在分词', cn: '剩余的', memory: 'remain(剩余)+ing(形容词化)→剩余的。', phonics: 're 读 /rɪ/，main 读 /meɪn/，ing 读 /ɪŋ/，重音在第二音节。', collocations: [['remaining time', '剩余时间'], ['remaining capacity', '剩余容量'], ['remaining runtime', '剩余运行时间']], examples: [['How much runtime is remaining?', '还剩多少运行时间？'], ['The remaining capacity is 80%.', '剩余容量为80%。']] },
      { w: 'runtime', ipa: '/ˈrʌnˌtaɪm/', pos: '名词', cn: '运行时间；供电时间', memory: 'run(运行)+time(时间)→能运行多久→运行时间。', phonics: 'run 读 /rʌn/，time 读 /taɪm/，两个音节。', collocations: [['battery runtime', '电池供电时间'], ['estimated runtime', '预计运行时间'], ['minimum runtime', '最低运行时间']], examples: [['The runtime is 15 minutes.', '供电时间为15分钟。'], ['What is the estimated runtime?', '预计还能运行多久？']] },
    ],
    phrases: [
      { p: 'remaining battery runtime', ipa: '/rɪˈmeɪnɪŋ ˈbætəri ˈrʌnˌtaɪm/', cn: '电池剩余供电时间', why: 'remaining 修饰 battery runtime，强调「还能供电多久」，是应急决策的关键参数。' },
    ],
    grammar: [
      { q: 'runtime 和 duration 有什么区别？', a: 'runtime 指设备「能运行多长时间」，通常用于 UPS/发电机/电池。\nduration 指事件「持续了多长时间」，更通用。\n✅ Check the battery runtime.（检查电池供电时间。）—— 设备能撑多久\n✅ The outage duration was 30 minutes.（停电持续了30分钟。）—— 事件持续时间' },
    ],
    pattern: 'Please check the remaining + 设备 + 参数',
    patternExamples: [
      { en: 'Please check the remaining fuel level.', cn: '请检查剩余油位。', words: [] },
      { en: 'Please check the remaining cooling capacity.', cn: '请检查剩余制冷容量。', words: [] },
      { en: 'Please check the remaining generator runtime.', cn: '请检查发电机剩余运行时间。', words: [] },
    ],
    thinking: '电池剩余供电时间直接决定是否需要启动发电机或进行负载切换。\n中文说「请检查剩余…时间」，英语用 Please check the remaining runtime 对应。',
    pronunciation: 'remaining 重音在第二音节：re-MAIN-ing。\nruntime 两个音节：RUN-time。\n节奏：Please CHECK ｜ the re-MAIN-ing ｜ BAT-te-ry ｜ RUN-time.',
    quiz: [
      { q: '把「请检查电池剩余供电时间。」用英语说出来。', a: 'Please check the remaining battery runtime.' },
      { q: '「供电时间」用英语怎么说？', a: 'runtime (/ˈrʌnˌtaɪm/)' },
    ],
  },
  {
    id: 2294,
    speaker: 'Engineer',
    en: 'The battery capacity is sufficient.',
    cn: '电池容量充足。',
    ipa: '/ðə ˈbætəri kəˈpæsɪti ɪz ˈsʌfɪʃənt/',
    tags: ['第2294句', 'UPS运行', '★★★★★'],
    when: '工程师检查 UPS 面板后汇报电池容量足以支撑到发电机启动或市电恢复。',
    words: [
      { w: 'capacity', ipa: '/kəˈpæsɪti/', pos: '名词', cn: '容量；能力', memory: 'cap(容纳)+acity(名词后缀)→能容纳的量→容量。', phonics: 'ca 读 /kə/，pac 读 /pæs/，i 读 /ɪ/，ty 读 /ti/，重音在第二音节。', collocations: [['battery capacity', '电池容量'], ['load capacity', '负载容量'], ['rated capacity', '额定容量']], examples: [['The battery capacity is 100kWh.', '电池容量为100千瓦时。'], ['What is the rated capacity?', '额定容量是多少？']] },
      { w: 'sufficient', ipa: '/səˈfɪʃənt/', pos: '形容词', cn: '充足的；足够的', memory: 'suf(下面)+fic(做)+ient(形容词后缀)→做得足够→充足的。', phonics: 'suf 读 /sə/，fi 读 /fɪ/，cient 读 /ʃənt/，重音在第二音节。', collocations: [['sufficient capacity', '充足容量'], ['sufficient time', '充足时间'], ['sufficient power', '充足电力']], examples: [['The power is sufficient.', '电力充足。'], ['Is the time sufficient?', '时间够吗？']] },
    ],
    phrases: [
      { p: 'is sufficient', ipa: '/ɪz ˈsʌfɪʃənt/', cn: '充足；足够', why: 'sufficient 是正式用语，在工程汇报中比 enough 更专业。' },
    ],
    grammar: [
      { q: 'sufficient 和 enough 有什么区别？', a: 'sufficient 更正式、更专业，常用于书面和技术汇报。\nenough 更口语化，日常对话中更常用。\n✅ The battery capacity is sufficient.（电池容量充足。）—— 正式汇报\n✅ The battery has enough power.（电池电力够用。）—— 口语\n工程汇报中推荐用 sufficient。' },
    ],
    pattern: 'The + 设备参数 + is sufficient',
    patternExamples: [
      { en: 'The generator fuel is sufficient.', cn: '发电机燃料充足。', words: [] },
      { en: 'The cooling capacity is sufficient.', cn: '制冷容量充足。', words: [] },
      { en: 'The network bandwidth is sufficient.', cn: '网络带宽充足。', words: [] },
    ],
    thinking: '电池容量充足意味着有足够时间等待发电机启动或市电恢复。\n中文说「…充足」，英语用 is sufficient 对应，比 enough 更专业。',
    pronunciation: 'capacity 重音在第二音节：ca-PAC-i-ty。\nsufficient 重音在第二音节：suf-FI-cient。\n节奏：The BAT-te-ry ｜ ca-PAC-i-ty ｜ is suf-FI-cient.',
    quiz: [
      { q: '把「电池容量充足。」用英语说出来。', a: 'The battery capacity is sufficient.' },
      { q: '「充足的」用英语怎么说？', a: 'sufficient (/səˈfɪʃənt/)' },
    ],
  },
  {
    id: 2295,
    speaker: 'Manager',
    en: 'Please continue monitoring the UPS load.',
    cn: '请继续监控UPS负载。',
    ipa: '/pliːz kənˈtɪnjuː ˈmɒnɪtərɪŋ ðə juː-piː-ɛs loʊd/',
    tags: ['第2295句', 'UPS运行', '★★★★'],
    when: 'UPS 正在电池模式下运行，值班经理要求持续监控负载变化，防止过载。',
    words: [
      { w: 'continue', ipa: '/kənˈtɪnjuː/', pos: '动词', cn: '继续', memory: 'con(加强)+tinue(延伸)→继续延伸→继续。', phonics: 'con 读 /kən/，tin 读 /tɪn/，ue 读 /juː/，重音在第二音节。', collocations: [['continue monitoring', '继续监控'], ['continue operation', '继续运行'], ['continue working', '继续工作']], examples: [['Please continue monitoring.', '请继续监控。'], ['The operation continues.', '运行继续。']] },
      { w: 'monitoring', ipa: '/ˈmɒnɪtərɪŋ/', pos: '动词（动名词）', cn: '监控', memory: 'monitor(监控)+ing(动名词)→监控的行为。', phonics: 'mon 读 /mɒn/，i 读 /ɪ/，tor 读 /tər/，ing 读 /ɪŋ/，重音在第一音节。', collocations: [['monitoring system', '监控系统'], ['continuous monitoring', '持续监控'], ['load monitoring', '负载监控']], examples: [['The monitoring system is active.', '监控系统处于活跃状态。'], ['We are monitoring the situation.', '我们正在监控情况。']] },
    ],
    phrases: [
      { p: 'continue monitoring', ipa: '/kənˈtɪnjuː ˈmɒnɪtərɪŋ/', cn: '继续监控', why: 'continue + 动名词 表示持续进行某一动作，monitoring 是持续性的动作。' },
    ],
    grammar: [
      { q: '为什么用 continue monitoring 而不是 continue to monitor？', a: 'continue + 动名词 和 continue + to + 动词 都可以，含义相同。\n✅ Please continue monitoring the UPS load.（请继续监控UPS负载。）\n✅ Please continue to monitor the UPS load.（请继续监控UPS负载。）\n两种都正确，口语中 continue + 动名词 更流畅。' },
    ],
    pattern: 'Please continue monitoring + 对象',
    patternExamples: [
      { en: 'Please continue monitoring the generator output.', cn: '请继续监控发电机输出。', words: [] },
      { en: 'Please continue monitoring the temperature.', cn: '请继续监控温度。', words: [] },
      { en: 'Please continue monitoring the network status.', cn: '请继续监控网络状态。', words: [] },
    ],
    thinking: '电池模式下 UPS 负载可能波动，持续监控是防止过载的关键。\n中文说「请继续监控…」，英语用 Please continue monitoring 对应。',
    pronunciation: 'continue 重音在第二音节：con-TIN-ue。\nmonitoring 重音在第一音节：MON-i-tor-ing。\n节奏：Please con-TIN-ue ｜ MON-i-tor-ing ｜ the U-P-S LOAD.',
    quiz: [
      { q: '把「请继续监控UPS负载。」用英语说出来。', a: 'Please continue monitoring the UPS load.' },
      { q: '「继续监控」用英语怎么说？', a: 'continue monitoring (/kənˈtɪnjuː ˈmɒnɪtərɪŋ/)' },
    ],
  },
  {
    id: 2296,
    speaker: 'Engineer',
    en: 'All critical loads remain energized.',
    cn: '所有关键负载均保持供电。',
    ipa: '/ɔːl ˈkrɪtɪkəl loʊdz rɪˈmeɪn ˈɛnərdʒaɪzd/',
    tags: ['第2296句', 'UPS运行', '★★★★★'],
    when: '工程师确认所有关键负载（服务器、网络设备、制冷控制）仍然有电，客户业务未受影响。',
    words: [
      { w: 'critical', ipa: '/ˈkrɪtɪkəl/', pos: '形容词', cn: '关键的；重要的', memory: 'critic(批评家)+al→需要严格判断的→关键的。', phonics: 'crit 读 /krɪt/，i 读 /ɪ/，cal 读 /kəl/，重音在第一音节。', collocations: [['critical load', '关键负载'], ['critical system', '关键系统'], ['critical infrastructure', '关键基础设施']], examples: [['All critical systems are online.', '所有关键系统在线。'], ['This is a critical load.', '这是关键负载。']] },
      { w: 'energized', ipa: '/ˈɛnərdʒaɪzd/', pos: '形容词/过去分词', cn: '带电的；有电的', memory: 'energy(能量)+ize(动词化)+d(过去分词)→被赋予能量→带电的。', phonics: 'en 读 /ɛn/，er 读 /ər/，gized 读 /dʒaɪzd/，重音在第一音节。', collocations: [['remain energized', '保持带电'], ['energized equipment', '带电设备'], ['de-energized', '断电的']], examples: [['The circuit is energized.', '回路带电。'], ['Ensure the equipment is de-energized.', '确保设备已断电。']] },
    ],
    phrases: [
      { p: 'remain energized', ipa: '/rɪˈmeɪn ˈɛnərdʒaɪzd/', cn: '保持供电/带电', why: 'remain + 形容词 表示「保持某种状态」，energized 表示「带电的」，合起来就是「保持供电」。' },
    ],
    grammar: [
      { q: 'energized 和 powered 有什么区别？', a: 'energized 是电力工程专业术语，指「电路带电/有电压」。\npowered 更通用，指「有电源/在运行」。\n✅ All critical loads remain energized.（所有关键负载保持供电。）—— 专业\n✅ All servers are powered on.（所有服务器已通电。）—— 通用\n电力汇报中 energized 更准确。' },
    ],
    pattern: 'All + 关键设备 + remain energized/online',
    patternExamples: [
      { en: 'All critical systems remain online.', cn: '所有关键系统保持在线。', words: [] },
      { en: 'All IT equipment remains energized.', cn: '所有IT设备保持供电。', words: [] },
      { en: 'All cooling circuits remain energized.', cn: '所有制冷回路保持供电。', words: [] },
    ],
    thinking: '关键负载保持供电是市电失电后最重要的确认信息。\n中文说「所有关键负载均保持供电」，英语用 All critical loads remain energized 对应。',
    pronunciation: 'energized 重音在第一音节：EN-er-gized。\nremain 重音在第二音节：re-MAIN。\n节奏：All CRIT-i-cal LOADS ｜ re-MAIN ｜ EN-er-gized.',
    quiz: [
      { q: '把「所有关键负载均保持供电。」用英语说出来。', a: 'All critical loads remain energized.' },
      { q: '「带电的/有电的」用英语怎么说？', a: 'energized (/ˈɛnərdʒaɪzd/)' },
    ],
  },
  {
    id: 2297,
    speaker: 'Engineer',
    en: 'No abnormal UPS alarms have been detected.',
    cn: '没有发现UPS异常告警。',
    ipa: '/noʊ æbˈnɔːrməl juː-piː-ɛs əˈlɑːrmz hæv biːn dɪˈtɛktɪd/',
    tags: ['第2297句', 'UPS运行', '★★★★'],
    when: '工程师检查 UPS 面板确认没有异常告警，排除 UPS 本身故障的可能。',
    words: [
      { w: 'abnormal', ipa: '/æbˈnɔːrməl/', pos: '形容词', cn: '异常的；不正常的', memory: 'ab(不)+normal(正常的)→不正常的→异常的。', phonics: 'ab 读 /æb/，nor 读 /nɔːr/，mal 读 /məl/，重音在第二音节。', collocations: [['abnormal alarm', '异常告警'], ['abnormal reading', '异常读数'], ['abnormal behavior', '异常行为']], examples: [['No abnormal readings detected.', '未发现异常读数。'], ['The behavior is abnormal.', '行为异常。']] },
      { w: 'detected', ipa: '/dɪˈtɛktɪd/', pos: '动词（过去分词）', cn: '检测到；发现', memory: 'de(去除)+tect(覆盖)+ed→去掉覆盖物→发现→检测到。', phonics: 'de 读 /dɪ/，tect 读 /tɛkt/，ed 读 /ɪd/，重音在第二音节。', collocations: [['detected alarm', '检测到的告警'], ['fault detected', '故障检测到'], ['no issue detected', '未发现问题']], examples: [['A fault was detected.', '检测到故障。'], ['No issues have been detected.', '未发现问题。']] },
    ],
    phrases: [
      { p: 'No...have been detected', ipa: '/noʊ...hæv biːn dɪˈtɛktɪd/', cn: '没有发现…', why: 'No + 名词 + have been detected 是否定句式，表示「未检测到」，在故障排查中用于排除异常。' },
    ],
    grammar: [
      { q: '为什么用 have been detected 而不是 were detected？', a: 'have been detected 是现在完成时被动语态，强调「到目前为止都没有发现」。\nwere detected 是一般过去时，只描述过去某个时间点。\n✅ No abnormal alarms have been detected.（到目前为止没有发现异常告警。）—— 强调持续状态\n✅ An alarm was detected at 3 PM.（下午3点检测到一条告警。）—— 过去时间点' },
    ],
    pattern: 'No abnormal + 设备 + 告警/读数 + have been detected',
    patternExamples: [
      { en: 'No abnormal generator alarms have been detected.', cn: '没有发现发电机异常告警。', words: [] },
      { en: 'No abnormal temperature readings have been detected.', cn: '没有发现异常温度读数。', words: [] },
      { en: 'No abnormal vibrations have been detected.', cn: '没有发现异常振动。', words: [] },
    ],
    thinking: '排除 UPS 本身异常是确认供电系统健康的关键步骤。\n中文说「没有发现…异常」，英语用 No abnormal...have been detected 对应。',
    pronunciation: 'abnormal 重音在第二音节：ab-NOR-mal。\ndetected 重音在第二音节：de-TECT-ed。\n节奏：No ab-NOR-mal ｜ U-P-S a-LARMS ｜ have BEEN ｜ de-TECT-ed.',
    quiz: [
      { q: '把「没有发现UPS异常告警。」用英语说出来。', a: 'No abnormal UPS alarms have been detected.' },
      { q: '「异常的」用英语怎么说？', a: 'abnormal (/æbˈnɔːrməl/)' },
    ],
  },
  {
    id: 2298,
    speaker: 'Manager',
    en: 'Please prepare for generator startup.',
    cn: '请准备启动柴油发电机。',
    ipa: '/pliːz prɪˈpɛr fər ˈdʒɛnəreɪtər ˈstɑːrtˌʌp/',
    tags: ['第2298句', 'UPS运行', '★★★★★'],
    when: '电池模式下运行，值班经理指示做好发电机启动准备，防止电池耗尽前发电机未能就绪。',
    words: [
      { w: 'prepare', ipa: '/prɪˈpɛr/', pos: '动词', cn: '准备', memory: 'pre(提前)+pare(安排)→提前安排好→准备。', phonics: 'pre 读 /prɪ/，pare 读 /pɛr/，重音在第二音节。', collocations: [['prepare for', '为…做准备'], ['prepare startup', '准备启动'], ['well prepared', '充分准备']], examples: [['Please prepare the generator.', '请准备发电机。'], ['We are prepared.', '我们已准备好。']] },
      { w: 'startup', ipa: '/ˈstɑːrtˌʌp/', pos: '名词', cn: '启动', memory: 'start(开始)+up(向上)→向上启动→启动过程。', phonics: 'start 读 /stɑːrt/，up 读 /ʌp/，两个音节。', collocations: [['generator startup', '发电机启动'], ['automatic startup', '自动启动'], ['startup sequence', '启动序列']], examples: [['The generator startup was successful.', '发电机启动成功。'], ['Initiate the startup sequence.', '启动启动序列。']] },
    ],
    phrases: [
      { p: 'prepare for generator startup', ipa: '/prɪˈpɛr fər ˈdʒɛnəreɪtər ˈstɑːrtˌʌp/', cn: '准备启动发电机', why: 'prepare for + 名词 表示为某事做准备，generator startup 指发电机启动过程。' },
    ],
    grammar: [
      { q: 'startup（名词）和 start up（动词短语）有什么区别？', a: 'startup 是名词，指「启动过程/启动」这个事件。\nstart up 是动词短语，指「启动」这个动作。\n✅ Please prepare for generator startup.（请准备发电机启动。）—— startup 作名词\n✅ Please start up the generator.（请启动发电机。）—— start up 作动词' },
    ],
    pattern: 'Please prepare for + 设备 + startup/shutdown',
    patternExamples: [
      { en: 'Please prepare for generator shutdown.', cn: '请准备关闭发电机。', words: [] },
      { en: 'Please prepare for load transfer.', cn: '请准备负载切换。', words: [] },
      { en: 'Please prepare for the maintenance window.', cn: '请准备维护窗口。', words: [] },
    ],
    thinking: '发电机启动是电池模式后的下一步关键操作。\n中文说「请准备启动…」，英语用 Please prepare for startup 对应。',
    pronunciation: 'prepare 重音在第二音节：pre-PARE。\nstartup 两个音节：START-up。\n节奏：Please pre-PARE ｜ for GEN-er-a-tor ｜ START-up.',
    quiz: [
      { q: '把「请准备启动柴油发电机。」用英语说出来。', a: 'Please prepare for generator startup.' },
      { q: '「发电机启动」用英语怎么说？', a: 'generator startup (/ˈdʒɛnəreɪtər ˈstɑːrtˌʌp/)' },
    ],
  },
  {
    id: 2299,
    speaker: 'Engineer',
    en: 'The generators have started automatically.',
    cn: '柴油发电机已经自动启动。',
    ipa: '/ðə ˈdʒɛnəreɪtərz hæv ˈstɑːrtɪd ˌɔːtəˈmætɪkli/',
    tags: ['第2299句', '柴油发电机', '★★★★★'],
    when: 'BMS 检测到市电失电后自动发送启动信号，发电机按预设逻辑自动启动，工程师汇报启动状态。',
    words: [
      { w: 'generators', ipa: '/ˈdʒɛnəreɪtərz/', pos: '名词（复数）', cn: '柴油发电机', memory: 'generate(产生)+or(器具)+s(复数)→产生电力的器具→发电机。', phonics: 'gen 读 /dʒɛn/，er 读 /ər/，a 读 /eɪ/，tors 读 /tərz/，重音在第一音节。', collocations: [['diesel generators', '柴油发电机'], ['generator output', '发电机输出'], ['generator room', '发电机房']], examples: [['The generators are running.', '发电机正在运行。'], ['Check the generator status.', '检查发电机状态。']] },
      { w: 'automatically', ipa: '/ˌɔːtəˈmætɪkli/', pos: '副词', cn: '自动地', memory: 'auto(自我)+matic(动作)+ally(副词后缀)→自我动作→自动地。', phonics: 'au 读 /ɔː/，to 读 /tə/，mat 读 /mæt/，i 读 /ɪ/，cal 读 /k/，ly 读 /li/，重音在第三音节。', collocations: [['started automatically', '自动启动'], ['switched automatically', '自动切换'], ['operates automatically', '自动运行']], examples: [['The system started automatically.', '系统自动启动了。'], ['The transfer happened automatically.', '切换自动发生了。']] },
    ],
    phrases: [
      { p: 'have started automatically', ipa: '/hæv ˈstɑːrtɪd ˌɔːtəˈmætɪkli/', cn: '已经自动启动', why: 'automatically 强调是 BMS 自动控制启动的，而非人工操作，说明自动控制系统工作正常。' },
    ],
    grammar: [
      { q: '为什么用 have started 而不是 started？', a: 'have started 是现在完成时，强调发电机已经启动且当前处于运行状态。\nstarted 是一般过去时，只描述启动动作发生在过去。\n✅ The generators have started automatically.（发电机已自动启动。）—— 强调当前运行\n✅ The generators started at 2:16 PM.（发电机在下午2:16启动了。）—— 强调时间点' },
    ],
    pattern: 'The + 设备（复数）+ have started/activated + 方式',
    patternExamples: [
      { en: 'The cooling units have started automatically.', cn: '制冷机组已自动启动。', words: [] },
      { en: 'The fire suppression system has activated automatically.', cn: '消防系统已自动激活。', words: [] },
      { en: 'The backup pumps have started automatically.', cn: '备用泵已自动启动。', words: [] },
    ],
    thinking: '发电机自动启动是数据中心供电冗余设计的关键环节。\n汇报时使用 have started automatically 强调自动控制正常。\n中文说「已经自动启动」，英语用 have started automatically 对应。',
    pronunciation: 'generators 重音在第一音节：GEN-er-a-tors。\nautomatically 重音在第三音节：au-to-MAT-i-cal-ly。\n节奏：The GEN-er-a-tors ｜ have START-ed ｜ au-to-MAT-i-cal-ly.',
    quiz: [
      { q: '把「柴油发电机已经自动启动。」用英语说出来。', a: 'The generators have started automatically.' },
      { q: '「自动地」用英语怎么说？', a: 'automatically (/ˌɔːtəˈmætɪkli/)' },
    ],
  },
  {
    id: 2300,
    speaker: 'Engineer',
    en: 'Generator No.1 is supplying the load.',
    cn: '1号柴油发电机正在带载。',
    ipa: '/ˈdʒɛnəreɪtər ˈnʌmbər wʌn ɪz səˈplaɪɪŋ ðə loʊd/',
    tags: ['第2300句', '柴油发电机', '★★★★★'],
    when: '1号发电机启动并成功同步后，通过 ATS 自动转换开关将负载切换到发电机供电，工程师汇报带载状态。',
    words: [
      { w: 'No.1', ipa: '/ˈnʌmbər wʌn/', pos: '编号', cn: '1号', memory: 'No. 是 number 的缩写，No.1 = Number 1 = 1号。', phonics: 'number 读 /ˈnʌmbər/，one 读 /wʌn/。', collocations: [['Generator No.1', '1号发电机'], ['UPS No.1', '1号UPS'], ['Unit No.1', '1号机组']], examples: [['Generator No.2 is also running.', '2号发电机也在运行。'], ['Check UPS No.1 status.', '检查1号UPS状态。']] },
    ],
    phrases: [
      { p: 'is supplying the load', ipa: '/ɪz səˈplaɪɪŋ ðə loʊd/', cn: '正在带载/供电', why: 'supplying the load 在发电机场合指发电机已经通过 ATS 接管负载，正式为客户设备供电。' },
      { p: 'Generator No.1', ipa: '/ˈdʒɛnəreɪtər ˈnʌmbər wʌn/', cn: '1号柴油发电机', why: '数据中心通常有多台发电机，用 No.1/No.2 编号区分。' },
    ],
    grammar: [
      { q: 'supplying the load 和 carrying the load 有什么区别？', a: '两者含义相同，都指「为负载供电」，可以互换使用。\n✅ Generator No.1 is supplying the load.（1号发电机正在供电。）\n✅ Generator No.1 is carrying the load.（1号发电机正在带载。）\nsupplying 更常用，carrying 更强调「承载」的重量感。' },
    ],
    pattern: 'Generator No.X + is supplying/carrying + the load',
    patternExamples: [
      { en: 'Generator No.2 is also supplying the load.', cn: '2号发电机也在带载。', words: [] },
      { en: 'Generator No.3 is carrying 50% of the load.', cn: '3号发电机承载50%的负载。', words: [] },
      { en: 'Both generators are sharing the load.', cn: '两台发电机正在分担负载。', words: [] },
    ],
    thinking: '汇报具体哪台发电机在带载是发电机运行监控的基本要求。\n中文说「1号发电机正在带载」，英语用 Generator No.1 is supplying the load 对应。',
    pronunciation: 'No.1 读作 number one /ˈnʌmbər wʌn/。\nsupplying 重音在第二音节：sup-PLY-ing。\n节奏：GEN-er-a-tor ｜ NUM-ber ONE ｜ is sup-PLY-ing ｜ the LOAD.',
    quiz: [
      { q: '把「1号柴油发电机正在带载。」用英语说出来。', a: 'Generator No.1 is supplying the load.' },
      { q: '「1号发电机」用英语怎么说？', a: 'Generator No.1 (/ˈdʒɛnəreɪtər ˈnʌmbər wʌn/)' },
    ],
  },
];

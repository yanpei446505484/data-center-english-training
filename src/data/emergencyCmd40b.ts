// EXPORTS: MOCK_SENTENCES_EMERGENCYCMD40B

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_EMERGENCYCMD40B: ISentence[] = [
  {
    id: 2261,
    speaker: 'Manager',
    en: 'Please notify all affected customers immediately.',
    cn: '请立即通知所有受影响的客户。',
    ipa: '/pliːz ˈnoʊtɪfaɪ ɔːl əˈfɛktɪd ˈkʌstəmərɪz ɪˈmiːdiətli/',
    tags: ['第2261句', '客户沟通', '★★★★★'],
    when: '重大事件发生后，指挥团队要求第一时间通知所有受影响客户，这是数据中心运营的关键义务。',
    words: [
      { w: 'notify', ipa: '/ˈnoʊtɪfaɪ/', pos: '动词', cn: '通知；告知', memory: 'not(记号)+ify(使)→做记号让人知道→通知。', phonics: 'no 读 /noʊ/，ti 读 /tɪ/，fy 读 /faɪ/，重音在第一音节。', collocations: [['notify customers', '通知客户'], ['notify immediately', '立即通知'], ['notify the team', '通知团队']], examples: [['Please notify the manager.', '请通知经理。'], ['All customers have been notified.', '所有客户已通知。']] },
      { w: 'affected', ipa: '/əˈfɛktɪd/', pos: '形容词/过去分词', cn: '受影响的', memory: 'af(朝向)+fect(做)+ed→被作用于的→受影响的。', phonics: 'af 读 /ə/，fect 读 /fɛk/，ed 读 /tɪd/，重音在第二音节。', collocations: [['affected customers', '受影响的客户'], ['affected area', '受影响区域'], ['affected equipment', '受影响设备']], examples: [['The affected system is offline.', '受影响系统已离线。'], ['We identified the affected rack.', '我们确认了受影响的机柜。']] },
    ],
    phrases: [
      { p: 'all affected customers', ipa: '/ɔːl əˈfɛktɪd ˈkʌstəmərɪz/', cn: '所有受影响的客户', why: 'all 强调覆盖所有客户，affected 限定范围为受事件波及的客户。' },
    ],
    grammar: [
      { q: '为什么用 notify 而不是 tell？', a: 'notify 更正式，专指「正式通知、告知」，常用于商业和紧急场景。\ntell 更口语化，日常使用。\n✅ Please notify all affected customers.（请通知所有受影响客户。）—— 正式\n✅ Please tell them about the issue.（告诉他们这件事。）—— 口语' },
    ],
    pattern: 'Please notify + 对象 + immediately',
    patternExamples: [
      ['Please notify the management team immediately.', '请立即通知管理团队。'],
      ['Please notify the vendor immediately.', '请立即通知供应商。'],
      ['Please notify all stakeholders immediately.', '请立即通知所有相关方。'],
    ],
    thinking: '重大事件发生后，第一时间通知客户是数据中心运营的关键义务。\nnotify 比 tell 更正式，适合跨组织沟通。\nall affected customers 强调覆盖全部受影响客户，不可遗漏。',
    pronunciation: 'notify 重音在第一音节：NO-ti-fy。\naffected 重音在第二音节：af-FECT-ed。\n节奏：Please NO-ti-fy ｜ all a-FECT-ed CUS-tom-ers ｜ im-ME-di-ate-ly.',
    quiz: [
      { q: '把「请立即通知所有受影响的客户。」用英语说出来。', a: 'Please notify all affected customers immediately.' },
      { q: '「通知」用英语怎么说（正式用语）？', a: 'notify (/ˈnoʊtɪfaɪ/)' },
    ],
  },
  {
    id: 2262,
    speaker: 'Manager',
    en: 'We are currently investigating the incident.',
    cn: '我们正在调查此次事件。',
    ipa: '/wiː ɑːr ˈkʌrəntli ɪnˈvɛstɪɡeɪtɪŋ ði ˈɪnsɪdənt/',
    tags: ['第2262句', '客户沟通', '★★★★★'],
    when: '向客户通报当前处理状态，告知事件正在调查中，让客户了解进展。',
    words: [
      { w: 'investigating', ipa: '/ɪnˈvɛstɪɡeɪtɪŋ/', pos: '动词（现在进行时）', cn: '调查；排查', memory: 'in(进入)+vestigate(追踪)→深入追踪→调查。', phonics: 'in 读 /ɪn/，ves 读 /vɛs/，ti 读 /tɪ/，gat 读 /ɡeɪt/，重音在第二音节。', collocations: [['investigating the incident', '调查事件'], ['investigating the root cause', '调查根因']], examples: [['We are investigating the alarm.', '我们正在调查该告警。'], ['The team is investigating the failure.', '团队正在调查故障。']] },
      { w: 'currently', ipa: '/ˈkʌrəntli/', pos: '副词', cn: '目前；当前', memory: 'current(当前的)+ly→在当前时间→目前。', phonics: 'cur 读 /kʌr/，rent 读 /rənt/，ly 读 /li/，重音在第一音节。', collocations: [['currently working on', '当前正在处理'], ['currently unavailable', '当前不可用']], examples: [['We are currently reviewing the logs.', '我们目前正在审查日志。'], ['The system is currently down.', '系统目前处于宕机状态。']] },
    ],
    phrases: [
      { p: 'currently investigating', ipa: '/ˈkʌrəntli ɪnˈvɛstɪɡeɪtɪŋ/', cn: '正在调查中', why: 'currently 修饰进行时，强调调查是此刻正在进行的动作。' },
    ],
    grammar: [
      { q: '为什么用 are investigating 而不是 investigate？', a: '现在进行时 are investigating 表示「此刻正在进行的动作」，强调调查尚未结束。\n一般现在时 investigate 表示「习惯性动作」。\n✅ We are currently investigating the incident.（我们目前正在调查事件。）—— 正在进行\n✅ We investigate incidents regularly.（我们定期调查事件。）—— 习惯性' },
    ],
    pattern: 'We are currently + 现在分词 + 对象',
    patternExamples: [
      ['We are currently reviewing the system.', '我们目前正在审查系统。'],
      ['We are currently analyzing the data.', '我们目前正在分析数据。'],
      ['We are currently working on a solution.', '我们目前正在制定解决方案。'],
    ],
    thinking: '向客户通报调查状态时，需要强调「正在进行中」。\ncurrently + 进行时是标准的进展通报句型。\ninvestigating 体现专业性和系统性排查。',
    pronunciation: 'currently 重音在第一音节：CUR-rent-ly。\ninvestigating 重音在第二音节：in-VES-ti-ga-ting。\n节奏：We are CUR-rent-ly ｜ in-VES-ti-ga-ting ｜ the IN-ci-dent.',
    quiz: [
      { q: '把「我们正在调查此次事件。」用英语说出来。', a: 'We are currently investigating the incident.' },
      { q: '「正在调查」用英语怎么说？', a: 'currently investigating (/ˈkʌrəntli ɪnˈvɛstɪɡeɪtɪŋ/)' },
    ],
  },
  {
    id: 2263,
    speaker: 'Manager',
    en: 'Our engineers are working on the issue.',
    cn: '我们的工程师正在处理该问题。',
    ipa: '/aʊər ˌɛndʒɪˈnɪrz ɑːr ˈwɜːrkɪŋ ɒn ði ˈɪʃuː/',
    tags: ['第2263句', '客户沟通', '★★★★★'],
    when: '向客户确认技术团队已投入处理，给客户信心。',
    words: [
      { w: 'engineers', ipa: '/ˌɛndʒɪˈnɪrz/', pos: '名词（复数）', cn: '工程师们', memory: 'engineer(工程师)+s→多位工程师。', phonics: 'en 读 /ɛn/，gi 读 /dʒɪ/，neer 读 /nɪr/，重音在第三音节。', collocations: [['duty engineers', '值班工程师'], ['senior engineers', '高级工程师']], examples: [['The engineers arrived quickly.', '工程师们迅速到达。'], ['Our engineers are experienced.', '我们的工程师经验丰富。']] },
      { w: 'issue', ipa: '/ˈɪʃuː/', pos: '名词', cn: '问题；事项', memory: 'is(出)+sue(跟随)→从某事出来的→问题。', phonics: 'is 读 /ɪ/，sue 读 /ʃuː/，重音在第一音节。', collocations: [['working on the issue', '处理该问题'], ['critical issue', '关键问题']], examples: [['We found the issue.', '我们找到了问题。'], ['This is a known issue.', '这是一个已知问题。']] },
    ],
    phrases: [
      { p: 'working on the issue', ipa: '/ˈwɜːrkɪŋ ɒn ði ˈɪʃuː/', cn: '正在处理该问题', why: 'work on 表示「着手处理、致力于解决」，比 fix 更准确——因为还在排查阶段。' },
    ],
    grammar: [
      { q: '为什么用 working on 而不是 fixing？', a: 'working on 表示「正在处理中」，涵盖排查、诊断、修复全过程。\nfixing 特指「修复」，如果还在排查阶段，用 fixing 会给客户错误期望。\n✅ Our engineers are working on the issue.（工程师正在处理该问题。）—— 排查中\n✅ Our engineers have fixed the issue.（工程师已修复该问题。）—— 已完成' },
    ],
    pattern: 'Our + 团队 + are working on + 问题',
    patternExamples: [
      ['Our team is working on the alarm.', '我们团队正在处理该告警。'],
      ['Our technicians are working on the repair.', '我们的技术人员正在进行修复。'],
      ['Our specialists are working on the root cause.', '我们的专家正在排查根因。'],
    ],
    thinking: '向客户通报处理进展时，关键是传达「有人在处理」。\nworking on 比 fixing 更准确，因为排查阶段不等于已修复。\nOur engineers 让客户知道是专业人员在处理。',
    pronunciation: 'engineers 重音在第三音节：en-gi-NEERS。\nissue 重音在第一音节：IS-sue。\n节奏：Our EN-gi-NEERS ｜ are WORK-ing ｜ on the IS-sue.',
    quiz: [
      { q: '把「我们的工程师正在处理该问题。」用英语说出来。', a: 'Our engineers are working on the issue.' },
      { q: '「正在处理」用英语怎么说？', a: 'working on (/ˈwɜːrkɪŋ ɒn/)' },
    ],
  },
  {
    id: 2264,
    speaker: 'Manager',
    en: 'We will provide updates every fifteen minutes.',
    cn: '我们将每十五分钟更新一次情况。',
    ipa: '/wiː wɪl prəˈvaɪd ˈʌpˌdeɪts ˈɛvri ˈfɪfˌtiːn ˈmɪnɪts/',
    tags: ['第2264句', '客户沟通', '★★★★'],
    when: '向客户承诺定期更新频率，让客户知道会持续收到进展信息。',
    words: [
      { w: 'provide', ipa: '/prəˈvaɪd/', pos: '动词', cn: '提供', memory: 'pro(向前)+vide(看)→提前看到需求→提供。', phonics: 'pro 读 /prə/，vide 读 /vaɪd/，重音在第二音节。', collocations: [['provide updates', '提供更新'], ['provide information', '提供信息']], examples: [['We will provide a report.', '我们将提供一份报告。'], ['Please provide the details.', '请提供详细信息。']] },
      { w: 'updates', ipa: '/ˈʌpˌdeɪts/', pos: '名词（复数）', cn: '更新；进展通报', memory: 'update(更新)+s→多次更新信息。', phonics: 'up 读 /ʌp/，dates 读 /deɪts/，重音在第一音节。', collocations: [['regular updates', '定期更新'], ['status updates', '状态更新']], examples: [['We need regular updates.', '我们需要定期更新。'], ['Please send the latest update.', '请发送最新进展。']] },
    ],
    phrases: [
      { p: 'every fifteen minutes', ipa: '/ˈɛvri ˈfɪfˌtiːn ˈmɪnɪts/', cn: '每十五分钟', why: 'every + 时间间隔，表示固定的更新频率。十五分钟是重大事件中常用的更新间隔。' },
    ],
    grammar: [
      { q: '为什么用 will provide 而不是 are providing？', a: 'will provide 表示「将要做」，是承诺性的未来动作。\nare providing 表示「正在提供」，用于当前正在进行的动作。\n✅ We will provide updates every 15 minutes.（我们将每15分钟更新。）—— 承诺\n✅ We are providing updates now.（我们正在更新中。）—— 当前动作' },
    ],
    pattern: 'We will provide updates every + 时间间隔',
    patternExamples: [
      ['We will provide updates every thirty minutes.', '我们将每三十分钟更新一次情况。'],
      ['We will provide updates every hour.', '我们将每小时更新一次情况。'],
      ['We will provide updates as soon as available.', '一有进展我们就会更新。'],
    ],
    thinking: '重大事件期间，定期更新是客户最关心的事情之一。\n承诺明确的更新频率（每15分钟）能降低客户焦虑。\nwill provide 表达承诺性语气。',
    pronunciation: 'provide 重音在第二音节：pro-VIDE。\nupdates 重音在第一音节：UP-dates。\nfifteen 重音在第二音节：fif-TEEN。\n节奏：We will pro-VIDE UP-dates ｜ EV-ery fif-TEEN MIN-utes.',
    quiz: [
      { q: '把「我们将每十五分钟更新一次情况。」用英语说出来。', a: 'We will provide updates every fifteen minutes.' },
      { q: '「提供更新」用英语怎么说？', a: 'provide updates (/prəˈvaɪd ˈʌpˌdeɪts/)' },
    ],
  },
  {
    id: 2265,
    speaker: 'Manager',
    en: 'Customer services remain our highest priority.',
    cn: '客户业务始终是我们的最高优先事项。',
    ipa: '/ˈkʌstəmər ˈsɜːrvɪsɪz rɪˈmeɪn aʊər ˈhaɪɪst praɪˈɒrɪti/',
    tags: ['第2265句', '客户沟通', '★★★★★'],
    when: '在重大事件处理过程中向客户强调，客户业务始终是最高优先级。',
    words: [
      { w: 'remain', ipa: '/rɪˈmeɪn/', pos: '动词', cn: '保持；仍然是', memory: 're(再)+main(停留)→继续停留→保持。', phonics: 're 读 /rɪ/，main 读 /meɪn/，重音在第二音节。', collocations: [['remain calm', '保持冷静'], ['remain available', '保持可用']], examples: [['The system remains operational.', '系统仍然运行正常。'], ['Safety remains our priority.', '安全始终是我们的优先事项。']] },
      { w: 'priority', ipa: '/praɪˈɒrɪti/', pos: '名词', cn: '优先事项', memory: 'prior(在先的)+ity→在先的事情→优先事项。', phonics: 'pri 读 /praɪ/，or 读 /ɒr/，i 读 /ɪ/，ty 读 /ti/，重音在第二音节。', collocations: [['highest priority', '最高优先事项'], ['top priority', '首要优先']], examples: [['This is our top priority.', '这是我们的首要优先事项。'], ['Safety is the first priority.', '安全是第一优先事项。']] },
    ],
    phrases: [
      { p: 'highest priority', ipa: '/ˈhaɪɪst praɪˈɒrɪti/', cn: '最高优先事项', why: 'highest 强调在所有事项中优先级最高，体现对客户业务的绝对重视。' },
    ],
    grammar: [
      { q: '为什么用 remain 而不是 is？', a: 'remain 强调「持续保持」，即使在事件处理过程中也没有改变。\nis 只表示当前状态，不强调持续性。\n✅ Customer services remain our highest priority.（客户业务始终是我们的最高优先事项。）—— 持续强调\n✅ This is our priority.（这是我们的优先事项。）—— 当前状态' },
    ],
    pattern: '对象 + remain + our + 形容词 + priority',
    patternExamples: [
      ['Safety remains our highest priority.', '安全始终是我们的最高优先事项。'],
      ['Quality remains our top priority.', '质量始终是我们的首要优先。'],
      ['Reliability remains our core priority.', '可靠性始终是我们的核心优先事项。'],
    ],
    thinking: '重大事件中最重要的是让客户放心：他们的业务是最高优先级。\nremain 强调「始终不变」，即使面对危机也不会改变优先级。\n这句话适合在每次客户沟通中反复使用。',
    pronunciation: 'remain 重音在第二音节：re-MAIN。\npriority 重音在第二音节：pri-OR-i-ty。\n节奏：CUS-tom-er SER-vi-ces ｜ re-MAIN ｜ our HIGH-est ｜ pri-OR-i-ty.',
    quiz: [
      { q: '把「客户业务始终是我们的最高优先事项。」用英语说出来。', a: 'Customer services remain our highest priority.' },
      { q: '「最高优先事项」用英语怎么说？', a: 'highest priority (/ˈhaɪɪst praɪˈɒrɪti/)' },
    ],
  },
  {
    id: 2266,
    speaker: 'Manager',
    en: 'We apologize for the inconvenience.',
    cn: '对于造成的不便，我们深表歉意。',
    ipa: '/wiː əˈpɒlədʒaɪz fər ði ˌɪnkənˈviːniəns/',
    tags: ['第2266句', '客户沟通', '★★★★★'],
    when: '向受影响的客户正式致歉，这是数据中心事件管理中的标准道歉用语。',
    words: [
      { w: 'apologize', ipa: '/əˈpɒlədʒaɪz/', pos: '动词', cn: '道歉；致歉', memory: 'apo(远离)+log(说)+ize→说出远离过错的话→道歉。', phonics: 'a 读 /ə/，pol 读 /pɒl/，o 读 /ə/，gize 读 /dʒaɪz/，重音在第二音节。', collocations: [['apologize for', '为…道歉'], ['sincerely apologize', '真诚道歉']], examples: [['We apologize for the delay.', '我们对延迟深表歉意。'], ['I apologize for the error.', '我为这个错误道歉。']] },
      { w: 'inconvenience', ipa: '/ˌɪnkənˈviːniəns/', pos: '名词', cn: '不便；麻烦', memory: 'in(不)+convenience(方便)→不方便→不便。', phonics: 'in 读 /ɪn/，con 读 /kən/，ve 读 /viː/，nience 读 /niəns/，重音在第三音节。', collocations: [['apologize for the inconvenience', '为不便道歉'], ['cause inconvenience', '造成不便']], examples: [['Sorry for the inconvenience.', '对不便之处表示抱歉。'], ['We regret any inconvenience.', '我们对任何不便感到遗憾。']] },
    ],
    phrases: [
      { p: 'apologize for the inconvenience', ipa: '/əˈpɒlədʒaɪz fər ði ˌɪnkənˈviːniəns/', cn: '为不便道歉', why: '这是商业场景中最标准的致歉用语，apologize for 后接造成不便的具体原因。' },
    ],
    grammar: [
      { q: 'apologize 和 sorry 有什么区别？', a: 'apologize 是正式动词，适合书面和正式场合。\nsorry 是形容词，更口语化。\n✅ We apologize for the inconvenience.（我们对造成的不便深表歉意。）—— 正式\n✅ We are sorry for the trouble.（我们对造成的麻烦感到抱歉。）—— 较口语\n重大事件沟通中推荐用 apologize。' },
    ],
    pattern: 'We apologize for + 造成的影响',
    patternExamples: [
      ['We apologize for the delay.', '我们对延迟深表歉意。'],
      ['We apologize for the service interruption.', '我们对服务中断深表歉意。'],
      ['We apologize for any disruption.', '我们对任何中断深表歉意。'],
    ],
    thinking: '重大事件对客户造成影响时，正式道歉是必须的第一步。\napologize for the inconvenience 是标准商业致歉用语。\n这句话适合在事件通报的开头使用。',
    pronunciation: 'apologize 重音在第二音节：a-POL-o-gize。\ninconvenience 重音在第三音节：in-con-VE-nience。\n节奏：We a-POL-o-gize ｜ for the in-con-VE-nience.',
    quiz: [
      { q: '把「对于造成的不便，我们深表歉意。」用英语说出来。', a: 'We apologize for the inconvenience.' },
      { q: '「道歉」用英语怎么说（正式动词）？', a: 'apologize (/əˈpɒlədʒaɪz/)' },
    ],
  },
  {
    id: 2267,
    speaker: 'Manager',
    en: 'We appreciate your patience.',
    cn: '感谢您的耐心等待。',
    ipa: '/wiː əˈpriːʃieɪt jɔːr ˈpeɪʃəns/',
    tags: ['第2267句', '客户沟通', '★★★★'],
    when: '在事件处理期间感谢客户的耐心，缓解客户焦虑情绪。',
    words: [
      { w: 'appreciate', ipa: '/əˈpriːʃieɪt/', pos: '动词', cn: '感激；感谢', memory: 'ap(朝向)+preci(价值)+ate→看到价值→感激。', phonics: 'ap 读 /ə/，pre 读 /priː/，ci 读 /ʃi/，ate 读 /eɪt/，重音在第二音节。', collocations: [['appreciate your patience', '感谢耐心'], ['greatly appreciate', '非常感谢']], examples: [['We appreciate your understanding.', '感谢您的理解。'], ['I appreciate your help.', '感谢你的帮助。']] },
      { w: 'patience', ipa: '/ˈpeɪʃəns/', pos: '名词', cn: '耐心', memory: 'pati(忍受)+ence→忍受的能力→耐心。', phonics: 'pa 读 /peɪ/，tience 读 /ʃəns/，重音在第一音节。', collocations: [['thank you for your patience', '感谢耐心'], ['with patience', '耐心地']], examples: [['Please be patient.', '请耐心等待。'], ['We need patience during this process.', '在此过程中我们需要耐心。']] },
    ],
    phrases: [
      { p: 'appreciate your patience', ipa: '/əˈpriːʃieɪt jɔːr ˈpeɪʃəns/', cn: '感谢耐心', why: 'appreciate 比 thank 更正式，patience 强调客户的等待和容忍。' },
    ],
    grammar: [
      { q: 'appreciate 和 thank 有什么区别？', a: 'appreciate 强调「珍视、感激」某人的品质或行为，更正式。\nthank 直接表达「谢谢」，更日常。\n✅ We appreciate your patience.（我们感激您的耐心。）—— 正式\n✅ Thank you for waiting.（谢谢等待。）—— 日常\n事件处理中用 appreciate 更显专业和尊重。' },
    ],
    pattern: 'We appreciate your + 品质/行为',
    patternExamples: [
      ['We appreciate your understanding.', '感谢您的理解。'],
      ['We appreciate your cooperation.', '感谢您的配合。'],
      ['We appreciate your support.', '感谢您的支持。'],
    ],
    thinking: '事件处理期间感谢客户耐心是重要的客户关系维护手段。\nappreciate 比 thank 更正式、更有分量。\npatience 强调客户在等待中展现的耐心。',
    pronunciation: 'appreciate 重音在第二音节：ap-PRE-ci-ate。\npatience 重音在第一音节：PA-tience。\n节奏：We ap-PRE-ci-ate ｜ your PA-tience.',
    quiz: [
      { q: '把「感谢您的耐心等待。」用英语说出来。', a: 'We appreciate your patience.' },
      { q: '「感激」用英语怎么说（正式动词）？', a: 'appreciate (/əˈpriːʃieɪt/)' },
    ],
  },
  {
    id: 2268,
    speaker: 'Manager',
    en: 'We will restore the service as quickly as possible.',
    cn: '我们将尽快恢复服务。',
    ipa: '/wiː wɪl rɪˈstɔːr ðə ˈsɜːrvɪs æz ˈkwɪkli æz ˈpɒsɪbl/',
    tags: ['第2268句', '客户沟通', '★★★★★'],
    when: '向客户承诺尽快恢复服务，这是事件处理中最核心的客户承诺。',
    words: [
      { w: 'restore', ipa: '/rɪˈstɔːr/', pos: '动词', cn: '恢复；修复', memory: 're(再)+store(存储)→重新存回→恢复。', phonics: 're 读 /rɪ/，store 读 /stɔːr/，重音在第二音节。', collocations: [['restore the service', '恢复服务'], ['restore power', '恢复供电'], ['fully restored', '完全恢复']], examples: [['Power has been restored.', '供电已恢复。'], ['The service is fully restored.', '服务已完全恢复。']] },
      { w: 'quickly', ipa: '/ˈkwɪkli/', pos: '副词', cn: '快速地', memory: 'quick(快)+ly→快速地。', phonics: 'quick 读 /kwɪk/，ly 读 /li/，重音在第一音节。', collocations: [['as quickly as possible', '尽快'], ['restore quickly', '快速恢复']], examples: [['Please respond quickly.', '请快速响应。'], ['We resolved it quickly.', '我们快速解决了。']] },
    ],
    phrases: [
      { p: 'as quickly as possible', ipa: '/æz ˈkwɪkli æz ˈpɒsɪbl/', cn: '尽可能快地；尽快', why: 'as...as possible 是固定结构，表示「尽可能…」，强调最大努力。' },
    ],
    grammar: [
      { q: 'as quickly as possible 和 as soon as possible 有什么区别？', a: 'as quickly as possible 强调「速度尽可能快」，关注恢复过程的速度。\nas soon as possible 强调「时间尽可能早」，关注时间点。\n✅ We will restore the service as quickly as possible.（我们将尽快恢复服务。）—— 强调速度\n✅ We will respond as soon as possible.（我们将尽快响应。）—— 强调时间' },
    ],
    pattern: 'We will restore + 对象 + as quickly as possible',
    patternExamples: [
      ['We will restore power as quickly as possible.', '我们将尽快恢复供电。'],
      ['We will restore cooling as quickly as possible.', '我们将尽快恢复制冷。'],
      ['We will restore network connectivity as quickly as possible.', '我们将尽快恢复网络连接。'],
    ],
    thinking: '尽快恢复服务是重大事件处理的核心目标。\n这句话直接回应客户最关心的问题：什么时候恢复？\nas quickly as possible 体现最大努力。',
    pronunciation: 'restore 重音在第二音节：re-STORE。\nquickly 重音在第一音节：QUICK-ly。\n节奏：We will re-STORE ｜ the SER-vice ｜ as QUICK-ly ｜ as POS-si-ble.',
    quiz: [
      { q: '把「我们将尽快恢复服务。」用英语说出来。', a: 'We will restore the service as quickly as possible.' },
      { q: '「恢复服务」用英语怎么说？', a: 'restore the service (/rɪˈstɔːr ðə ˈsɜːrvɪs/)' },
    ],
  },
  {
    id: 2269,
    speaker: 'Manager',
    en: 'The affected equipment has been repaired.',
    cn: '受影响设备已经修复。',
    ipa: '/ði əˈfɛktɪd ɪˈkwɪpmənt hæz bɪn rɪˈpɛərd/',
    tags: ['第2269句', '恢复阶段', '★★★★★'],
    when: '恢复阶段开始，确认受影响设备已完成修复。',
    words: [
      { w: 'repaired', ipa: '/rɪˈpɛərd/', pos: '动词（过去分词）', cn: '已修复的', memory: 're(再)+pair(配对)→重新配对好→修复。', phonics: 're 读 /rɪ/，pair 读 /pɛər/，ed 读 /d/，重音在第二音节。', collocations: [['repaired equipment', '已修复设备'], ['fully repaired', '完全修复']], examples: [['The UPS has been repaired.', 'UPS已修复。'], ['All faults have been repaired.', '所有故障已修复。']] },
      { w: 'equipment', ipa: '/ɪˈkwɪpmənt/', pos: '名词', cn: '设备', memory: 'equip(装备)+ment(名词后缀)→装备的东西→设备。', phonics: 'e 读 /ɪ/，quip 读 /kwɪp/，ment 读 /mənt/，重音在第二音节。', collocations: [['affected equipment', '受影响设备'], ['critical equipment', '关键设备']], examples: [['Check the equipment status.', '检查设备状态。'], ['The equipment is operational.', '设备正常运行。']] },
    ],
    phrases: [
      { p: 'has been repaired', ipa: '/hæz bɪn rɪˈpɛərd/', cn: '已经被修复', why: '现在完成时被动语态，强调修复动作已完成，设备现在处于修复状态。' },
    ],
    grammar: [
      { q: 'repaired 和 replaced 有什么区别？', a: 'repaired 指「修复」原有设备，设备本身没有更换。\nreplaced 指「更换」为新设备。\n✅ The equipment has been repaired.（设备已修复。）—— 修好了原来的\n✅ The equipment has been replaced.（设备已更换。）—— 换了新的' },
    ],
    pattern: 'The + 受影响设备 + has been repaired',
    patternExamples: [
      ['The faulty sensor has been repaired.', '故障传感器已修复。'],
      ['The UPS module has been repaired.', 'UPS模块已修复。'],
      ['The cooling unit has been repaired.', '制冷机组已修复。'],
    ],
    thinking: '恢复阶段的第一个好消息：设备已修复。\nrepaired 表示原地修复，区别于 replaced（更换新设备）。\nhas been repaired 用现在完成时强调已完成。',
    pronunciation: 'affected 重音在第二音节：af-FECT-ed。\nequipment 重音在第二音节：e-QUIP-ment。\nrepaired 重音在第二音节：re-PAIRED。\n节奏：The a-FECT-ed E-quip-ment ｜ has been re-PAIRED.',
    quiz: [
      { q: '把「受影响设备已经修复。」用英语说出来。', a: 'The affected equipment has been repaired.' },
      { q: '「已修复」和「已更换」用英语分别怎么说？', a: 'repaired（已修复）/ replaced（已更换）' },
    ],
  },
  {
    id: 2270,
    speaker: 'Manager',
    en: 'Power has been restored successfully.',
    cn: '供电已经成功恢复。',
    ipa: '/ˈpaʊər hæz bɪn rɪˈstɔːrd səkˈsɛsfəli/',
    tags: ['第2270句', '恢复阶段', '★★★★★'],
    when: '确认供电系统已恢复正常，这是数据中心恢复阶段最关键的信息。',
    words: [
      { w: 'power', ipa: '/ˈpaʊər/', pos: '名词', cn: '电力；供电', memory: 'power 直接表示电力供应。', phonics: 'pow 读 /paʊ/，er 读 /ər/，重音在第一音节。', collocations: [['power supply', '供电'], ['power restoration', '供电恢复'], ['backup power', '备用电源']], examples: [['Power is stable.', '供电稳定。'], ['We lost power briefly.', '我们短暂断电了。']] },
      { w: 'successfully', ipa: '/səkˈsɛsfəli/', pos: '副词', cn: '成功地', memory: 'success(成功)+ful(充满)+ly→成功地。', phonics: 'suc 读 /sək/，cess 读 /sɛs/，ful 读 /fə/，ly 读 /li/，重音在第二音节。', collocations: [['restored successfully', '成功恢复'], ['completed successfully', '成功完成']], examples: [['The test was completed successfully.', '测试已成功完成。'], ['The migration was successful.', '迁移成功了。']] },
    ],
    phrases: [
      { p: 'has been restored successfully', ipa: '/hæz bɪn rɪˈstɔːrd səkˈsɛsfəli/', cn: '已成功恢复', why: 'successfully 强调恢复过程顺利完成，没有出现问题。' },
    ],
    grammar: [
      { q: '为什么用 restored 而不是 recovered？', a: 'restore 指「恢复到原来的状态」，常用于服务/供电/系统等。\nrecover 指「恢复过来」，主语通常是自己恢复（如系统自动恢复）。\n✅ Power has been restored.（供电已恢复。）—— 人为恢复\n✅ The system recovered automatically.（系统自动恢复了。）—— 自动恢复' },
    ],
    pattern: '系统/服务 + has been restored successfully',
    patternExamples: [
      ['Cooling has been restored successfully.', '制冷已成功恢复。'],
      ['Network has been restored successfully.', '网络已成功恢复。'],
      ['The service has been restored successfully.', '服务已成功恢复。'],
    ],
    thinking: '供电恢复是数据中心重大事件中最关键的好消息。\nsuccessfully 确认恢复过程顺利，没有二次故障。\nrestore 用于人为恢复的场景。',
    pronunciation: 'power 重音在第一音节：POW-er。\nrestored 重音在第二音节：re-STORED。\nsuccessfully 重音在第二音节：suc-CESS-ful-ly。\n节奏：POW-er ｜ has been re-STORED ｜ suc-CESS-ful-ly.',
    quiz: [
      { q: '把「供电已经成功恢复。」用英语说出来。', a: 'Power has been restored successfully.' },
      { q: '「恢复供电」用英语怎么说？', a: 'power has been restored (/ˈpaʊər hæz bɪn rɪˈstɔːrd/)' },
    ],
  },
  {
    id: 2271,
    speaker: 'Manager',
    en: 'Cooling has returned to normal.',
    cn: '制冷已经恢复正常。',
    ipa: '/ˈkuːlɪŋ hæz rɪˈtɜːrnd tuː ˈnɔːrml/',
    tags: ['第2271句', '恢复阶段', '★★★★'],
    when: '确认制冷系统已恢复正常运行参数。',
    words: [
      { w: 'cooling', ipa: '/ˈkuːlɪŋ/', pos: '名词', cn: '制冷；冷却', memory: 'cool(凉)+ing(名词后缀)→制冷的过程→制冷。', phonics: 'cool 读 /kuːl/，ing 读 /ɪŋ/，重音在第一音节。', collocations: [['cooling system', '制冷系统'], ['cooling capacity', '制冷量']], examples: [['The cooling system is operational.', '制冷系统正常运行。'], ['Cooling is adequate.', '制冷量充足。']] },
      { w: 'normal', ipa: '/ˈnɔːrml/', pos: '形容词/名词', cn: '正常的；正常状态', memory: 'norm(标准)+al→符合标准的→正常的。', phonics: 'nor 读 /nɔːr/，mal 读 /məl/，重音在第一音节。', collocations: [['returned to normal', '恢复正常'], ['normal operation', '正常运行']], examples: [['Everything is back to normal.', '一切恢复正常。'], ['The temperature is normal.', '温度正常。']] },
    ],
    phrases: [
      { p: 'returned to normal', ipa: '/rɪˈtɜːrnd tuː ˈnɔːrml/', cn: '恢复正常', why: 'return to normal 是固定搭配，表示「回到正常状态」，比 restored 更强调参数回到标准范围。' },
    ],
    grammar: [
      { q: 'returned to normal 和 restored 有什么区别？', a: 'returned to normal 强调「回到正常范围」，常用于温度、压力等参数。\nrestored 强调「恢复到运行状态」，常用于服务、供电等。\n✅ Cooling has returned to normal.（制冷已恢复正常。）—— 参数正常\n✅ Power has been restored.（供电已恢复。）—— 服务恢复' },
    ],
    pattern: '系统 + has returned to normal',
    patternExamples: [
      ['Temperature has returned to normal.', '温度已恢复正常。'],
      ['Humidity has returned to normal.', '湿度已恢复正常。'],
      ['Pressure has returned to normal.', '压力已恢复正常。'],
    ],
    thinking: '制冷恢复是数据中心恢复阶段的重要指标。\nreturned to normal 强调参数回到标准范围。\n这句话可以和供电恢复、网络恢复配合使用。',
    pronunciation: 'cooling 重音在第一音节：COOL-ing。\nreturned 重音在第二音节：re-TURNED。\nnormal 重音在第一音节：NOR-mal。\n节奏：COOL-ing ｜ has re-TURNED ｜ to NOR-mal.',
    quiz: [
      { q: '把「制冷已经恢复正常。」用英语说出来。', a: 'Cooling has returned to normal.' },
      { q: '「恢复正常」用英语怎么说？', a: 'returned to normal (/rɪˈtɜːrnd tuː ˈnɔːrml/)' },
    ],
  },
  {
    id: 2272,
    speaker: 'Manager',
    en: 'Network services have been restored.',
    cn: '网络服务已经恢复。',
    ipa: '/ˈnɛtwɜːrk ˈsɜːrvɪsɪz hæv bɪn rɪˈstɔːrd/',
    tags: ['第2272句', '恢复阶段', '★★★★'],
    when: '确认网络服务已恢复，客户可以重新访问其业务系统。',
    words: [
      { w: 'network', ipa: '/ˈnɛtwɜːrk/', pos: '名词', cn: '网络', memory: 'net(网)+work(工作)→工作网络→网络。', phonics: 'net 读 /nɛt/，work 读 /wɜːrk/，重音在第一音节。', collocations: [['network services', '网络服务'], ['network connectivity', '网络连接']], examples: [['The network is stable.', '网络稳定。'], ['Network latency is low.', '网络延迟低。']] },
      { w: 'services', ipa: '/ˈsɜːrvɪsɪz/', pos: '名词（复数）', cn: '服务', memory: 'service(服务)+s→多项服务。', phonics: 'ser 读 /sɜːr/，vi 读 /vɪ/，ces 读 /sɪz/，重音在第一音节。', collocations: [['network services', '网络服务'], ['customer services', '客户服务']], examples: [['All services are online.', '所有服务在线。'], ['Services are running normally.', '服务正常运行。']] },
    ],
    phrases: [
      { p: 'have been restored', ipa: '/hæv bɪn rɪˈstɔːrd/', cn: '已经被恢复', why: 'services 是复数，所以用 have（而非 has）+ been + restored。' },
    ],
    grammar: [
      { q: '为什么用 have been 而不是 has been？', a: 'services 是复数名词，所以助动词用 have（而非 has）。\n✅ Network services have been restored.（网络服务已恢复。）—— 复数\n✅ The network service has been restored.（网络服务已恢复。）—— 单数' },
    ],
    pattern: '系统服务 + have been restored',
    patternExamples: [
      ['Email services have been restored.', '邮件服务已恢复。'],
      ['DNS services have been restored.', 'DNS服务已恢复。'],
      ['All services have been restored.', '所有服务已恢复。'],
    ],
    thinking: '网络恢复是客户最关心的恢复项之一。\n注意 services 是复数，助动词用 have。\n这句话和供电恢复、制冷恢复一起构成完整的恢复报告。',
    pronunciation: 'network 重音在第一音节：NET-work。\nservices 重音在第一音节：SER-vi-ces。\nrestored 重音在第二音节：re-STORED。\n节奏：NET-work SER-vi-ces ｜ have been re-STORED.',
    quiz: [
      { q: '把「网络服务已经恢复。」用英语说出来。', a: 'Network services have been restored.' },
      { q: '为什么用 have been 而不是 has been？', a: '因为 services 是复数名词，助动词用 have。' },
    ],
  },
  {
    id: 2273,
    speaker: 'Manager',
    en: 'All customer services are operating normally again.',
    cn: '所有客户业务已经恢复正常。',
    ipa: '/ɔːl ˈkʌstəmər ˈsɜːrvɪsɪz ɑːr ˈɒpəreɪtɪŋ ˈnɔːrməli əˈɡɛn/',
    tags: ['第2273句', '恢复阶段', '★★★★★'],
    when: '宣布所有客户业务已完全恢复正常，这是恢复阶段最重要的总结性声明。',
    words: [
      { w: 'operating', ipa: '/ˈɒpəreɪtɪŋ/', pos: '动词（现在分词）', cn: '运行；运转', memory: 'operate(运行)+ing→正在运行。', phonics: 'op 读 /ɒp/，er 读 /ə/，at 读 /reɪt/，ing 读 /ɪŋ/，重音在第一音节。', collocations: [['operating normally', '正常运行'], ['operating status', '运行状态']], examples: [['The system is operating well.', '系统运行良好。'], ['All systems are operational.', '所有系统运行正常。']] },
      { w: 'normally', ipa: '/ˈnɔːrməli/', pos: '副词', cn: '正常地', memory: 'normal(正常的)+ly→正常地。', phonics: 'nor 读 /nɔːr/，mal 读 /mə/，ly 读 /li/，重音在第一音节。', collocations: [['operating normally', '正常运行'], ['back to normally', '恢复正常']], examples: [['Everything is running normally.', '一切运行正常。'], ['The system is functioning normally.', '系统功能正常。']] },
    ],
    phrases: [
      { p: 'operating normally again', ipa: '/ˈɒpəreɪtɪŋ ˈnɔːrməli əˈɡɛn/', cn: '再次正常运行', why: 'again 强调「再次」，即恢复到事件前的正常状态。' },
    ],
    grammar: [
      { q: 'operating normally 和 operational 有什么区别？', a: 'operating normally 是「动词+副词」结构，描述正在运行的状态。\noperational 是形容词，表示「处于运行状态」。\n✅ All services are operating normally.（所有服务正在正常运行。）—— 强调运行过程\n✅ All services are operational.（所有服务处于运行状态。）—— 强调状态' },
    ],
    pattern: 'All + 服务 + are operating normally again',
    patternExamples: [
      ['All systems are operating normally again.', '所有系统已恢复正常运行。'],
      ['All circuits are operating normally again.', '所有线路已恢复正常运行。'],
      ['All cooling units are operating normally again.', '所有制冷机组已恢复正常运行。'],
    ],
    thinking: '这是恢复阶段最关键的总结性声明：所有客户业务恢复正常。\nagain 强调「再次」回到正常状态。\noperating normally 比 restored 更强调持续运行。',
    pronunciation: 'operating 重音在第一音节：OP-er-a-ting。\nnormally 重音在第一音节：NOR-mal-ly。\nagain 读 /əˈɡɛn/，重音在第二音节。\n节奏：All CUS-tom-er SER-vi-ces ｜ are OP-er-a-ting ｜ NOR-mal-ly a-GAIN.',
    quiz: [
      { q: '把「所有客户业务已经恢复正常。」用英语说出来。', a: 'All customer services are operating normally again.' },
      { q: '「正常运行」用英语怎么说？', a: 'operating normally (/ˈɒpəreɪtɪŋ ˈnɔːrməli/)' },
    ],
  },
  {
    id: 2274,
    speaker: 'Manager',
    en: 'Please continue monitoring the system closely.',
    cn: '请继续密切监控系统。',
    ipa: '/pliːz kənˈtɪnjuː ˈmɒnɪtərɪŋ ðə ˈsɪstəm ˈkloʊsli/',
    tags: ['第2274句', '恢复阶段', '★★★★★'],
    when: '恢复后要求值班团队继续保持密切监控，防止问题复发。',
    words: [
      { w: 'continue', ipa: '/kənˈtɪnjuː/', pos: '动词', cn: '继续', memory: 'con(共同)+tinue(伸展)→一起延伸→继续。', phonics: 'con 读 /kən/，tin 读 /tɪn/，ue 读 /juː/，重音在第二音节。', collocations: [['continue monitoring', '继续监控'], ['continue working', '继续工作']], examples: [['Please continue the inspection.', '请继续巡检。'], ['We will continue the review.', '我们将继续审查。']] },
      { w: 'closely', ipa: '/ˈkloʊsli/', pos: '副词', cn: '密切地；仔细地', memory: 'close(近)+ly→近距离地→密切地。', phonics: 'close 读 /kloʊs/，ly 读 /li/，重音在第一音节。', collocations: [['monitor closely', '密切监控'], ['watch closely', '密切观察']], examples: [['Monitor the temperature closely.', '密切监控温度。'], ['Watch the alarm closely.', '密切观察告警。']] },
    ],
    phrases: [
      { p: 'continue monitoring closely', ipa: '/kənˈtɪnjuː ˈmɒnɪtərɪŋ ˈkloʊsli/', cn: '继续密切监控', why: 'continue + 动名词 表示「继续做某事」，closely 修饰监控的程度。' },
    ],
    grammar: [
      { q: '为什么用 continue monitoring 而不是 continue to monitor？', a: '两种都可以：\ncontinue monitoring = continue to monitor（继续监控）\n动名词和不定式在 continue 后面意思相同。\n✅ Please continue monitoring the system.（请继续监控系统。）\n✅ Please continue to monitor the system.（请继续监控系统。）' },
    ],
    pattern: 'Please continue + 动名词 + 对象 + closely',
    patternExamples: [
      ['Please continue monitoring the alarms closely.', '请继续密切监控告警。'],
      ['Please continue checking the equipment closely.', '请继续密切检查设备。'],
      ['Please continue observing the parameters closely.', '请继续密切观察参数。'],
    ],
    thinking: '恢复后不能放松警惕，需要继续密切监控。\nclosely 强调「密切」程度，比一般的 monitor 更严格。\ncontinue 表示延续事件期间的监控状态。',
    pronunciation: 'continue 重音在第二音节：con-TIN-ue。\nmonitoring 重音在第一音节：MON-i-tor-ing。\nclosely 重音在第一音节：CLOSE-ly。\n节奏：Please con-TIN-ue ｜ MON-i-tor-ing ｜ the SYS-tem ｜ CLOSE-ly.',
    quiz: [
      { q: '把「请继续密切监控系统。」用英语说出来。', a: 'Please continue monitoring the system closely.' },
      { q: '「密切监控」用英语怎么说？', a: 'monitor closely (/ˈmɒnɪtər ˈkloʊsli/)' },
    ],
  },
  {
    id: 2275,
    speaker: 'Manager',
    en: 'No further abnormalities have been observed.',
    cn: '目前未发现新的异常。',
    ipa: '/noʊ ˈfɜːrðər ˌæbnɔːrˈmælɪtiz hæv bɪn əbˈzɜːrvd/',
    tags: ['第2275句', '恢复阶段', '★★★★'],
    when: '确认恢复后没有新的异常出现，进一步确认系统稳定。',
    words: [
      { w: 'abnormalities', ipa: '/ˌæbnɔːrˈmælɪtiz/', pos: '名词（复数）', cn: '异常；不正常现象', memory: 'ab(不)+normal(正常)+ities→不正常的现象→异常。', phonics: 'ab 读 /æb/，nor 读 /nɔːr/，mal 读 /mæl/，i 读 /ɪ/，ties 读 /tiz/，重音在第三音节。', collocations: [['no abnormalities', '无异常'], ['abnormalities detected', '检测到异常']], examples: [['No abnormalities found.', '未发现异常。'], ['Several abnormalities were detected.', '检测到几处异常。']] },
      { w: 'observed', ipa: '/əbˈzɜːrvd/', pos: '动词（过去分词）', cn: '观察到；发现', memory: 'ob(朝向)+serve(看)+d→仔细看→观察到。', phonics: 'ob 读 /əb/，serve 读 /zɜːrv/，d 读 /d/，重音在第二音节。', collocations: [['observed abnormalities', '观察到的异常'], ['no issues observed', '未观察到问题']], examples: [['No issues were observed.', '未观察到问题。'], ['The change was observed.', '变化被观察到了。']] },
    ],
    phrases: [
      { p: 'No further abnormalities', ipa: '/noʊ ˈfɜːrðər ˌæbnɔːrˈmælɪtiz/', cn: '没有新的异常', why: 'further 表示「更多的、进一步的」，强调在已处理问题之后没有新异常。' },
    ],
    grammar: [
      { q: 'further 和 more 有什么区别？', a: 'further 更正式，强调「在已有基础上的更多」。\nmore 更通用。\n✅ No further abnormalities observed.（未发现进一步的异常。）—— 正式\n✅ No more abnormalities observed.（没有更多异常了。）—— 通用\n事件报告中使用 further 更专业。' },
    ],
    pattern: 'No further + 名词 + have been observed',
    patternExamples: [
      ['No further alarms have been observed.', '未发现新的告警。'],
      ['No further faults have been observed.', '未发现新的故障。'],
      ['No further issues have been observed.', '未发现新的问题。'],
    ],
    thinking: '恢复后确认没有新异常是关闭事件的前提条件之一。\nfurther 强调「在已有问题之后不再有新的」。\nobserved 比 found 更正式，常用于监控场景。',
    pronunciation: 'further 重音在第一音节：FUR-ther。\nabnormalities 重音在第三音节：ab-nor-MAL-i-ties。\nobserved 重音在第二音节：ob-SERVED。\n节奏：No FUR-ther ｜ ab-nor-MAL-i-ties ｜ have been ob-SERVED.',
    quiz: [
      { q: '把「目前未发现新的异常。」用英语说出来。', a: 'No further abnormalities have been observed.' },
      { q: '「异常」用英语怎么说？', a: 'abnormality (/ˌæbnɔːrˈmælɪti/) 复数 abnormalities' },
    ],
  },
  {
    id: 2276,
    speaker: 'Manager',
    en: 'The incident is now closed.',
    cn: '此次事件现已关闭。',
    ipa: '/ði ˈɪnsɪdənt ɪz naʊ kloʊzd/',
    tags: ['第2276句', '恢复阶段', '★★★★★'],
    when: '正式宣布事件关闭，标志着从应急状态回到正常运营。',
    words: [
      { w: 'incident', ipa: '/ˈɪnsɪdənt/', pos: '名词', cn: '事件', memory: 'in(进入)+cide(发生)+ent→发生的事情→事件。', phonics: 'in 读 /ɪn/，ci 读 /sɪ/，dent 读 /dənt/，重音在第一音节。', collocations: [['critical incident', '重大事件'], ['incident report', '事件报告'], ['incident closed', '事件关闭']], examples: [['The incident has been resolved.', '事件已解决。'], ['This is a critical incident.', '这是一起重大事件。']] },
      { w: 'closed', ipa: '/kloʊzd/', pos: '动词（过去分词）/形容词', cn: '已关闭的', memory: 'close(关闭)+d→已关闭。', phonics: 'close 读 /kloʊz/，d 读 /d/。', collocations: [['incident closed', '事件关闭'], ['ticket closed', '工单关闭']], examples: [['The ticket is now closed.', '工单已关闭。'], ['All incidents have been closed.', '所有事件已关闭。']] },
    ],
    phrases: [
      { p: 'is now closed', ipa: '/ɪz naʊ kloʊzd/', cn: '现已关闭', why: 'now 强调「从此刻起」，closed 表示事件正式关闭。' },
    ],
    grammar: [
      { q: 'is closed 和 has been closed 有什么区别？', a: 'is closed 强调当前状态——「现在是关闭的」。\nhas been closed 强调动作完成——「已经被关闭了」。\n✅ The incident is now closed.（事件现已关闭。）—— 状态\n✅ The incident has been closed.（事件已被关闭。）—— 动作\n宣布事件关闭时，is now closed 更简洁有力。' },
    ],
    pattern: 'The incident is now closed',
    patternExamples: [
      ['The alarm is now closed.', '该告警现已关闭。'],
      ['The ticket is now closed.', '该工单现已关闭。'],
      ['The investigation is now closed.', '调查现已关闭。'],
    ],
    thinking: '宣布事件关闭是恢复阶段的最后一步。\nis now closed 比 has been closed 更简洁有力。\n这句话标志着从应急状态正式回到正常运营。',
    pronunciation: 'incident 重音在第一音节：IN-ci-dent。\nclosed 读 /kloʊzd/，注意 z 音。\n节奏：The IN-ci-dent ｜ is NOW CLOSED.',
    quiz: [
      { q: '把「此次事件现已关闭。」用英语说出来。', a: 'The incident is now closed.' },
      { q: '「事件关闭」用英语怎么说？', a: 'The incident is closed (/ði ˈɪnsɪdənt ɪz kloʊzd/)' },
    ],
  },
  {
    id: 2277,
    speaker: 'Manager',
    en: 'Please prepare the incident report.',
    cn: '请准备事件报告。',
    ipa: '/pliːz prɪˈpɛər ði ˈɪnsɪdənt rɪˈpɔːrt/',
    tags: ['第2277句', '总结', '★★★★★'],
    when: '事件关闭后，指示团队准备事件报告，这是事后复盘的基础文档。',
    words: [
      { w: 'prepare', ipa: '/prɪˈpɛər/', pos: '动词', cn: '准备', memory: 'pre(提前)+pare(安排)→提前安排好→准备。', phonics: 'pre 读 /prɪ/，pare 读 /pɛər/，重音在第二音节。', collocations: [['prepare a report', '准备报告'], ['prepare for the meeting', '准备会议']], examples: [['Please prepare the handover report.', '请准备交班报告。'], ['We need to prepare the RCA report.', '我们需要准备RCA报告。']] },
      { w: 'incident report', ipa: '/ˈɪnsɪdənt rɪˈpɔːrt/', pos: '名词短语', cn: '事件报告', memory: 'incident(事件)+report(报告)→记录事件的报告。', phonics: 'in 读 /ɪn/，ci 读 /sɪ/，dent 读 /dənt/；re 读 /rɪ/，port 读 /pɔːrt/。', collocations: [['incident report', '事件报告'], ['write an incident report', '撰写事件报告']], examples: [['The incident report is ready.', '事件报告已准备好。'], ['Please review the incident report.', '请审查事件报告。']] },
    ],
    phrases: [
      { p: 'the incident report', ipa: '/ði ˈɪnsɪdənt rɪˈpɔːrt/', cn: '事件报告', why: 'the 特指此次事件对应的报告，是事后必须完成的标准文档。' },
    ],
    grammar: [
      { q: 'incident report 和 RCA report 有什么区别？', a: 'incident report 是事件报告，记录事件的完整经过、影响和处理。\nRCA report 是根本原因分析报告，专注于分析根因和制定纠正措施。\n✅ Please prepare the incident report.（请准备事件报告。）—— 完整经过\n✅ Please prepare the RCA report.（请准备RCA报告。）—— 根因分析\n通常先完成 incident report，再进行 RCA。' },
    ],
    pattern: 'Please prepare the + 报告类型',
    patternExamples: [
      ['Please prepare the RCA report.', '请准备RCA报告。'],
      ['Please prepare the shift report.', '请准备交班报告。'],
      ['Please prepare the monthly report.', '请准备月度报告。'],
    ],
    thinking: '事件关闭后的第一步后续工作是准备事件报告。\nincident report 是完整记录，RCA report 是根因分析。\nprepare 强调「准备」而非「提交」，说明还需要时间整理。',
    pronunciation: 'prepare 重音在第二音节：pre-PARE。\nincident 重音在第一音节：IN-ci-dent。\nreport 重音在第二音节：re-PORT。\n节奏：Please pre-PARE ｜ the IN-ci-dent re-PORT.',
    quiz: [
      { q: '把「请准备事件报告。」用英语说出来。', a: 'Please prepare the incident report.' },
      { q: '「事件报告」和「RCA报告」用英语分别怎么说？', a: 'incident report / RCA report' },
    ],
  },
  {
    id: 2278,
    speaker: 'Manager',
    en: 'Please schedule an RCA meeting.',
    cn: '请安排RCA会议。',
    ipa: '/pliːz ˈʃɛdjuːl æn ɑːr-siː-eɪ ˈmiːtɪŋ/',
    tags: ['第2278句', '总结', '★★★★★'],
    when: '事件关闭后指示安排根本原因分析会议，这是标准事后流程。',
    words: [
      { w: 'schedule', ipa: '/ˈʃɛdjuːl/', pos: '动词', cn: '安排；排程', memory: 'schedule 源自拉丁语 schedula(小纸条)→在纸条上安排时间→排程。', phonics: 'sched 读 /ʃɛd/，ule 读 /juːl/，重音在第一音节。', collocations: [['schedule a meeting', '安排会议'], ['schedule the review', '安排审查']], examples: [['Let\'s schedule the meeting.', '我们来安排会议。'], ['The meeting is scheduled for Friday.', '会议安排在周五。']] },
      { w: 'RCA meeting', ipa: '/ɑːr-siː-eɪ ˈmiːtɪŋ/', pos: '名词短语', cn: 'RCA会议；根本原因分析会议', memory: 'RCA = Root Cause Analysis（根本原因分析）。', phonics: 'R-C-A 逐字母读 /ɑːr-siː-eɪ/，meeting 读 /ˈmiːtɪŋ/。', collocations: [['schedule an RCA meeting', '安排RCA会议'], ['attend the RCA meeting', '参加RCA会议']], examples: [['The RCA meeting is tomorrow.', 'RCA会议在明天。'], ['We need to hold an RCA meeting.', '我们需要召开RCA会议。']] },
    ],
    phrases: [
      { p: 'schedule an RCA meeting', ipa: '/ˈʃɛdjuːl æn ɑːr-siː-eɪ ˈmiːtɪŋ/', cn: '安排RCA会议', why: 'schedule 强调确定时间和参与者，RCA meeting 是事件后的标准复盘会议。' },
    ],
    grammar: [
      { q: '为什么用 an RCA meeting 而不是 a RCA meeting？', a: 'RCA 的第一个字母 R 发音为 /ɑːr/，以元音音素开头，所以用 an。\n✅ an RCA meeting（一次RCA会议）\n❌ a RCA meeting\n类似的：an SLA report, an MOP, an SOP。' },
    ],
    pattern: 'Please schedule + a/an + 会议类型',
    patternExamples: [
      ['Please schedule a review meeting.', '请安排审查会议。'],
      ['Please schedule a handover meeting.', '请安排交接班会议。'],
      ['Please schedule an emergency drill.', '请安排应急演练。'],
    ],
    thinking: '事件关闭后安排 RCA 会议是标准的事后流程。\nschedule 比 arrange 更强调确定时间和排程。\n注意 RCA 前用 an（因为 R 发音以元音开头）。',
    pronunciation: 'schedule 重音在第一音节：SCHED-ule。\nRCA 逐字母读：R-C-A。\nmeeting 重音在第一音节：MEET-ing。\n节奏：Please SCHED-ule ｜ an R-C-A MEET-ing.',
    quiz: [
      { q: '把「请安排RCA会议。」用英语说出来。', a: 'Please schedule an RCA meeting.' },
      { q: '为什么用 an RCA 而不是 a RCA？', a: '因为 R 发音为 /ɑːr/，以元音音素开头，所以用 an。' },
    ],
  },
  {
    id: 2279,
    speaker: 'Manager',
    en: 'Please implement all corrective actions.',
    cn: '请落实所有纠正措施。',
    ipa: '/pliːz ˈɪmplɪmɛnt ɔːl kəˈrɛktɪv ˈækʃənz/',
    tags: ['第2279句', '总结', '★★★★★'],
    when: 'RCA 会议后指示团队落实所有纠正措施，防止类似事件再次发生。',
    words: [
      { w: 'implement', ipa: '/ˈɪmplɪmɛnt/', pos: '动词', cn: '实施；落实', memory: 'im(进入)+ple(填)+ment→填进去使其生效→实施。', phonics: 'im 读 /ɪm/，ple 读 /plɪ/，ment 读 /mɛnt/，重音在第一音节。', collocations: [['implement actions', '落实措施'], ['implement changes', '实施变更']], examples: [['We need to implement the changes.', '我们需要实施变更。'], ['All actions have been implemented.', '所有措施已落实。']] },
      { w: 'corrective actions', ipa: '/kəˈrɛktɪv ˈækʃənz/', pos: '名词短语', cn: '纠正措施', memory: 'corrective(纠正的)+actions(措施)→用于纠正问题的措施。', phonics: 'cor 读 /kə/，rec 读 /rɛk/，tive 读 /tɪv/；ac 读 /æk/，tions 读 /ʃənz/。', collocations: [['corrective actions', '纠正措施'], ['preventive actions', '预防措施'], ['CAPA', '纠正与预防措施']], examples: [['Corrective actions are required.', '需要采取纠正措施。'], ['All corrective actions are complete.', '所有纠正措施已完成。']] },
    ],
    phrases: [
      { p: 'all corrective actions', ipa: '/ɔːl kəˈrɛktɪv ˈækʃənz/', cn: '所有纠正措施', why: 'all 强调每一项纠正措施都不能遗漏，corrective actions 是 CAPA 中的核心概念。' },
    ],
    grammar: [
      { q: 'corrective actions 和 preventive actions 有什么区别？', a: 'corrective actions 是针对已发生问题的「纠正措施」，修复当前问题。\npreventive actions 是防止问题再次发生的「预防措施」。\n✅ Please implement all corrective actions.（请落实所有纠正措施。）—— 修正已发生的\n✅ Please develop preventive actions.（请制定预防措施。）—— 防止再发生\nCAPA = Corrective And Preventive Actions（纠正与预防措施）。' },
    ],
    pattern: 'Please implement all + 措施类型',
    patternExamples: [
      ['Please implement all preventive actions.', '请落实所有预防措施。'],
      ['Please implement all recommendations.', '请落实所有建议。'],
      ['Please implement all improvements.', '请落实所有改进措施。'],
    ],
    thinking: '落实纠正措施是事件处理的最后闭环。\nimplement 比 do 更正式，强调「使措施生效」。\ncorrective actions 是 CAPA 体系中的核心术语。',
    pronunciation: 'implement 重音在第一音节：IM-ple-ment。\ncorrective 重音在第二音节：cor-REC-tive。\nactions 重音在第一音节：AC-tions。\n节奏：Please IM-ple-ment ｜ all cor-REC-tive AC-tions.',
    quiz: [
      { q: '把「请落实所有纠正措施。」用英语说出来。', a: 'Please implement all corrective actions.' },
      { q: '「纠正措施」和「预防措施」用英语分别怎么说？', a: 'corrective actions / preventive actions' },
    ],
  },
  {
    id: 2280,
    speaker: 'Manager',
    en: 'Thank you, everyone, for your excellent teamwork.',
    cn: '感谢大家出色的团队协作。',
    ipa: '/θæŋk juː ˈɛvriˌwʌn fər jɔːr ˈɛksələnt ˈtiːmwɜːrk/',
    tags: ['第2280句', '总结', '★★★★★'],
    when: '重大事件处理结束后，指挥团队向所有参与人员表达感谢和肯定。',
    words: [
      { w: 'excellent', ipa: '/ˈɛksələnt/', pos: '形容词', cn: '出色的；优秀的', memory: 'ex(超出)+cell(升高)+ent→超出一般水平的→出色的。', phonics: 'ex 读 /ɛks/，cel 读 /sə/，lent 读 /lənt/，重音在第一音节。', collocations: [['excellent teamwork', '出色的团队协作'], ['excellent performance', '出色表现']], examples: [['Excellent work!', '出色的工作！'], ['Your response was excellent.', '你的响应非常出色。']] },
      { w: 'teamwork', ipa: '/ˈtiːmwɜːrk/', pos: '名词', cn: '团队协作', memory: 'team(团队)+work(工作)→团队一起工作→团队协作。', phonics: 'team 读 /tiːm/，work 读 /wɜːrk/，重音在第一音节。', collocations: [['excellent teamwork', '出色的团队协作'], ['good teamwork', '良好的协作']], examples: [['Great teamwork today.', '今天团队协作很好。'], ['Teamwork made it possible.', '团队协作使之成为可能。']] },
    ],
    phrases: [
      { p: 'your excellent teamwork', ipa: '/jɔːr ˈɛksələnt ˈtiːmwɜːrk/', cn: '你们出色的团队协作', why: 'excellent 高度评价团队在应急处理中展现的协作能力。' },
    ],
    grammar: [
      { q: '为什么用 everyone 在中间？', a: 'Thank you, everyone, for... 中 everyone 是插入语，面向全体参与者。\n这种写法比 Thank everyone for... 更亲切。\n✅ Thank you, everyone, for your teamwork.（感谢大家，你们的团队协作。）—— 亲切\n✅ Thank everyone for their teamwork.（感谢所有人的团队协作。）—— 第三人称\n面对面感谢时用插入语 everyone 更合适。' },
    ],
    pattern: 'Thank you, everyone, for your + 形容词 + 名词',
    patternExamples: [
      ['Thank you, everyone, for your hard work.', '感谢大家的辛勤工作。'],
      ['Thank you, everyone, for your dedication.', '感谢大家的敬业付出。'],
      ['Thank you, everyone, for your quick response.', '感谢大家的快速响应。'],
    ],
    thinking: '事件结束后感谢团队是重要的领导力体现。\nexcellent teamwork 高度评价团队的协作表现。\neveryone 作为插入语，面向所有参与者。',
    pronunciation: 'everyone 重音在第一音节：EV-ery-one。\nexcellent 重音在第一音节：EX-cel-lent。\nteamwork 重音在第一音节：TEAM-work。\n节奏：THANK you ｜ EV-ery-one ｜ for your EX-cel-lent TEAM-work.',
    quiz: [
      { q: '把「感谢大家出色的团队协作。」用英语说出来。', a: 'Thank you, everyone, for your excellent teamwork.' },
      { q: '「团队协作」用英语怎么说？', a: 'teamwork (/ˈtiːmwɜːrk/)' },
    ],
  },
];

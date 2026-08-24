// EXPORTS: MOCK_SENTENCES_BMS29A

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_BMS29A: ISentence[] = [
  {
    id: 1801,
    speaker: 'Manager',
    en: 'Please open the DCIM dashboard.',
    cn: '请打开DCIM监控界面。',
    ipa: '/pliːz ˈoʊpən ðə ˌdiː.siː.aɪˈɛm ˈdæʃbɔːrd/',
    tags: ['第1801句', '仪表盘总览', '★★★★★'],
    when: '值班经理指示工程师打开DCIM系统主监控界面，开始日常巡检或交接工作。',
    words: [
      { w: 'dashboard', ipa: '/ˈdæʃbɔːrd/', pos: '名词', cn: '仪表盘；监控面板', memory: 'dash(冲刺)+board(板)→汽车仪表盘→引申为系统监控面板', phonics: 'dash 读 /dæʃ/，board 读 /bɔːrd/', collocations: [['DCIM dashboard', 'DCIM仪表盘'], ['BMS dashboard', 'BMS仪表盘'], ['alarm dashboard', '告警仪表盘']], examples: [['Open the DCIM dashboard.', '打开DCIM仪表盘。'], ['Check the dashboard for alarms.', '检查仪表盘上的告警。']] },
      { w: 'DCIM', ipa: '/ˌdiː.siː.aɪˈɛm/', pos: '缩写', cn: '数据中心基础设施管理', memory: 'D=Data(数据), C=Center(中心), I=Infrastructure(基础设施), M=Management(管理)', phonics: '逐字母读 D-C-I-M', collocations: [['DCIM system', 'DCIM系统'], ['DCIM module', 'DCIM模块'], ['DCIM alarm', 'DCIM告警']], examples: [['Log in to the DCIM.', '登录DCIM系统。'], ['The DCIM shows normal status.', 'DCIM显示状态正常。']] },
    ],
    phrases: [
      { p: 'open the dashboard', ipa: '/ˈoʊpən ðə ˈdæʃbɔːrd/', cn: '打开仪表盘', why: 'open 表示打开系统界面，dashboard 是监控系统的核心页面。' },
      { p: 'Please + 动词原形', ipa: '', cn: '请……（礼貌指令）', why: 'Please 加动词原形是工作中最常用的礼貌指令句式。' },
    ],
    grammar: [
      { q: '"Please open..." 是什么句式？', a: '这是祈使句（Imperative）加 Please 表示礼貌请求。\n✅ Please open the dashboard.（请打开仪表盘。）\n✅ Please check the alarms.（请检查告警。）\n工作场景中上级对下属常用此句式下达指令。' },
    ],
    pattern: 'Please + 动词原形 + the + 对象',
    patternExamples: [
      { en: 'Please open the BMS dashboard.', cn: '请打开BMS仪表盘。', words: [] },
      { en: 'Please open the alarm list.', cn: '请打开告警列表。', words: [] },
      { en: 'Please check the system status.', cn: '请检查系统状态。', words: [] },
    ],
    thinking: '英语指令遵循「礼貌词→动作→对象」的顺序。\n先说 Please 表示礼貌，再说做什么（open），最后说对什么做（the DCIM dashboard）。\n中文可能说"把DCIM仪表盘打开"，英语习惯把动作放前面。',
    pronunciation: 'dashboard 重音在第一音节：DASH-board。\nDCIM 逐字母读 D-C-I-M，不要读成一个单词。\n节奏：Please OPEN ｜ the DCIM ｜ DASH-board.',
    quiz: [
      { q: '把「请打开DCIM监控界面。」用英语说出来。', a: 'Please open the DCIM dashboard.' },
      { q: '「仪表盘」用英语怎么说？', a: 'dashboard (/ˈdæʃbɔːrd/)' },
    ],
  },
  {
    id: 1802,
    speaker: 'Engineer',
    en: 'Please open the BMS dashboard.',
    cn: '请打开BMS监控界面。',
    ipa: '/pliːz ˈoʊpən ðə ˌbiː.ɛmˈɛs ˈdæʃbɔːrd/',
    tags: ['第1802句', '仪表盘总览', '★★★★★'],
    when: '工程师请求或指示操作人员打开BMS系统主监控界面。',
    words: [
      { w: 'BMS', ipa: '/ˌbiː.ɛmˈɛs/', pos: '缩写', cn: '楼宇管理系统', memory: 'B=Building(楼宇), M=Management(管理), S=System(系统)', phonics: '逐字母读 B-M-S', collocations: [['BMS dashboard', 'BMS仪表盘'], ['BMS alarm', 'BMS告警'], ['BMS console', 'BMS控制台']], examples: [['Open the BMS dashboard.', '打开BMS仪表盘。'], ['Check the BMS for alarms.', '在BMS中检查告警。']] },
    ],
    phrases: [
      { p: 'BMS dashboard', ipa: '/ˌbiː.ɛmˈɛs ˈdæʃbɔːrd/', cn: 'BMS监控面板', why: 'BMS 是数据中心楼宇管理核心系统，dashboard 是其主监控入口。' },
    ],
    grammar: [
      { q: 'BMS 和 DCIM 有什么区别？', a: 'BMS（Building Management System）管理楼宇机电设备：空调、照明、门禁等。\nDCIM（Data Center Infrastructure Management）管理数据中心IT基础设施：服务器、网络、电力等。\n两者可能有告警联动，但属于不同系统层级。' },
    ],
    pattern: 'Please open the + 系统名 + dashboard',
    patternExamples: [
      { en: 'Please open the DCIM dashboard.', cn: '请打开DCIM仪表盘。', words: [] },
      { en: 'Please open the EPMS dashboard.', cn: '请打开EPMS仪表盘。', words: [] },
      { en: 'Please open the monitoring screen.', cn: '请打开监控画面。', words: [] },
    ],
    thinking: 'BMS 和 DCIM 是数据中心两大核心监控系统。\n在交接班时，通常需要同时打开两个系统的仪表盘进行交叉验证。\n英语表达完全一致，只需替换系统名称。',
    pronunciation: 'BMS 逐字母读 B-M-S，不要读成一个单词。\n节奏：Please OPEN ｜ the BMS ｜ DASH-board.',
    quiz: [
      { q: '把「请打开BMS监控界面。」用英语说出来。', a: 'Please open the BMS dashboard.' },
      { q: 'BMS 代表什么？', a: 'Building Management System（楼宇管理系统）' },
    ],
  },
  {
    id: 1803,
    speaker: 'Manager',
    en: 'Please display the main monitoring screen.',
    cn: '请显示主监控画面。',
    ipa: '/pliːz dɪˈspleɪ ðə meɪn ˈmɒnɪtərɪŋ skriːn/',
    tags: ['第1803句', '仪表盘总览', '★★★★'],
    when: '经理要求切换到主监控全屏画面，查看整体设备运行状态。',
    words: [
      { w: 'display', ipa: '/dɪˈspleɪ/', pos: '动词', cn: '显示；展示', memory: 'dis(展开)+play(播放)→展开来播放→显示', phonics: 'dis 读 /dɪs/，play 读 /pleɪ/', collocations: [['display the screen', '显示画面'], ['display the data', '显示数据'], ['display status', '显示状态']], examples: [['Display the main screen.', '显示主画面。'], ['The screen displays all alarms.', '画面显示所有告警。']] },
      { w: 'monitoring', ipa: '/ˈmɒnɪtərɪŋ/', pos: '名词/形容词', cn: '监控', memory: 'monitor(监视)+ing→持续监视的活动', phonics: 'mon 读 /mɒn/，i 读 /ɪ/，tor 读 /tər/，ing 读 /ɪŋ/', collocations: [['monitoring screen', '监控画面'], ['monitoring system', '监控系统'], ['real-time monitoring', '实时监控']], examples: [['Check the monitoring screen.', '查看监控画面。'], ['The monitoring system is active.', '监控系统处于活动状态。']] },
    ],
    phrases: [
      { p: 'main monitoring screen', ipa: '/meɪn ˈmɒnɪtərɪŋ skriːn/', cn: '主监控画面', why: 'main 表示主要的，monitoring screen 是监控系统的核心显示界面。' },
    ],
    grammar: [
      { q: 'display 和 show 有什么区别？', a: 'display 更正式，常用于系统界面操作（显示数据/画面）。\nshow 更口语化，日常使用更广泛。\n✅ Please display the monitoring screen.（正式：请显示监控画面。）\n✅ Can you show me the alarm list?（口语：能给我看看告警列表吗？）' },
    ],
    pattern: 'Please display the + 形容词 + 名词',
    patternExamples: [
      { en: 'Please display the alarm overview.', cn: '请显示告警总览。', words: [] },
      { en: 'Please display the temperature data.', cn: '请显示温度数据。', words: [] },
      { en: 'Please display the system status.', cn: '请显示系统状态。', words: [] },
    ],
    thinking: 'display 是数据中心操作中的高频动词，专指在屏幕上展示信息。\n与 open（打开系统）不同，display 强调"让信息可见"。\n中文"显示"和"展示"在英语中都可用 display。',
    pronunciation: 'monitoring 重音在第一音节：MON-i-tor-ing。\n节奏：Please dis-PLAY ｜ the MAIN ｜ MON-i-tor-ing SCREEN.',
    quiz: [
      { q: '把「请显示主监控画面。」用英语说出来。', a: 'Please display the main monitoring screen.' },
      { q: '「监控」用英语怎么说？', a: 'monitoring (/ˈmɒnɪtərɪŋ/)' },
    ],
  },
  {
    id: 1804,
    speaker: 'Engineer',
    en: 'Please switch to the alarm overview page.',
    cn: '请切换到告警总览页面。',
    ipa: '/pliːz swɪtʃ tuː ðə əˈlɑːrm ˈoʊvərvjuː peɪdʒ/',
    tags: ['第1804句', '仪表盘总览', '★★★★★'],
    when: '工程师请求切换到告警总览页面，查看所有活动告警的汇总信息。',
    words: [
      { w: 'switch', ipa: '/swɪtʃ/', pos: '动词', cn: '切换；转换', memory: 'switch = 开关→切换→从一个状态转到另一个', phonics: 'switch 读 /swɪtʃ/', collocations: [['switch to', '切换到'], ['switch page', '切换页面'], ['switch view', '切换视图']], examples: [['Switch to the alarm page.', '切换到告警页面。'], ['Please switch the view.', '请切换视图。']] },
      { w: 'overview', ipa: '/ˈoʊvərvjuː/', pos: '名词', cn: '总览；概览', memory: 'over(上方)+view(看)→从上方俯瞰→总览/概览', phonics: 'o 读 /ˈoʊ/，ver 读 /vər/，view 读 /vjuː/', collocations: [['alarm overview', '告警总览'], ['system overview', '系统总览'], ['overview page', '总览页面']], examples: [['Open the alarm overview.', '打开告警总览。'], ['The overview shows all active alarms.', '总览显示所有活动告警。']] },
    ],
    phrases: [
      { p: 'switch to', ipa: '/swɪtʃ tuː/', cn: '切换到', why: 'switch to 是系统界面操作的核心动词短语，表示从一个页面/视图切换到另一个。' },
      { p: 'alarm overview', ipa: '/əˈlɑːrm ˈoʊvərvjuː/', cn: '告警总览', why: 'overview 是汇总页面，alarm overview 展示所有告警的概览信息。' },
    ],
    grammar: [
      { q: '"switch to" 后面接什么？', a: '"switch to" 后面接目标页面/视图/模式。\n✅ Switch to the alarm page.（切换到告警页面。）\n✅ Switch to fullscreen mode.（切换到全屏模式。）\n❌ Switch the alarm page.（缺少 to，不完整。）' },
    ],
    pattern: 'Please switch to the + 目标页面/视图',
    patternExamples: [
      { en: 'Please switch to the trend page.', cn: '请切换到趋势页面。', words: [] },
      { en: 'Please switch to the history view.', cn: '请切换到历史视图。', words: [] },
      { en: 'Please switch to the detail page.', cn: '请切换到详情页面。', words: [] },
    ],
    thinking: 'switch to 是系统操作中最常用的导航动词。\n区别于 open（首次打开）和 display（显示内容），switch to 强调"从当前页面转到另一个页面"。\n在交接班时频繁需要在不同页面间切换。',
    pronunciation: 'overview 重音在第一音节：O-ver-view。\n节奏：Please SWITCH to ｜ the a-LARM ｜ O-ver-view PAGE.',
    quiz: [
      { q: '把「请切换到告警总览页面。」用英语说出来。', a: 'Please switch to the alarm overview page.' },
      { q: '「总览」用英语怎么说？', a: 'overview (/ˈoʊvərvjuː/)' },
    ],
  },
  {
    id: 1805,
    speaker: 'Manager',
    en: "Please display today's alarm summary.",
    cn: '请显示今天的告警汇总。',
    ipa: '/pliːz dɪˈspleɪ təˈdeɪz əˈlɑːrm ˈsʌməri/',
    tags: ['第1805句', '仪表盘总览', '★★★★'],
    when: '经理要求查看当天的告警汇总报告，了解今日告警整体情况。',
    words: [
      { w: 'summary', ipa: '/ˈsʌməri/', pos: '名词', cn: '汇总；摘要', memory: 'sum(总和)+mary→汇总的内容', phonics: 'sum 读 /sʌm/，ma 读 /mə/，ry 读 /ri/', collocations: [['alarm summary', '告警汇总'], ['daily summary', '每日汇总'], ['shift summary', '交班汇总']], examples: [['Display the alarm summary.', '显示告警汇总。'], ['Prepare the shift summary.', '准备交班汇总。']] },
    ],
    phrases: [
      { p: "today's alarm summary", ipa: "/təˈdeɪz əˈlɑːrm ˈsʌməri/", cn: '今天的告警汇总', why: "today's 是 today 的所有格形式，表示「今天的」。alarm summary 是告警的汇总报告。" },
    ],
    grammar: [
      { q: "today's 是什么语法？", a: "today's 是名词所有格（Possessive），在 today 后加 's 表示「今天的」。\n✅ today's alarm summary（今天的告警汇总）\n✅ yesterday's report（昨天的报告）\n✅ this week's data（本周的数据）" },
    ],
    pattern: "Please display + 时间 + 's + 内容",
    patternExamples: [
      { en: "Please display this week's alarm trend.", cn: '请显示本周的告警趋势。', words: [] },
      { en: "Please display yesterday's event log.", cn: '请显示昨日的事件日志。', words: [] },
      { en: "Please display today's ticket list.", cn: '请显示今天的工单列表。', words: [] },
    ],
    thinking: "英语中用名词+'s 表示所属关系，比 of 结构更简洁。\ntoday's alarm summary = the alarm summary of today，但前者更自然。\n在交接班中经常需要查看「今天的」「本周的」各类汇总。",
    pronunciation: "today's 的 s 读 /z/，不是 /s/。\nsummary 重音在第一音节：SUM-ma-ry。\n节奏：Please dis-PLAY ｜ to-DAY'S ｜ a-LARM SUM-ma-ry.",
    quiz: [
      { q: '把「请显示今天的告警汇总。」用英语说出来。', a: "Please display today's alarm summary." },
      { q: '「汇总」用英语怎么说？', a: 'summary (/ˈsʌməri/)' },
    ],
  },
  {
    id: 1806,
    speaker: 'Engineer',
    en: 'There are ten active alarms in the BMS.',
    cn: 'BMS目前有10条活动告警。',
    ipa: '/ðeər ɑːr tɛn ˈæktɪv əˈlɑːrmz ɪn ðə ˌbiː.ɛmˈɛs/',
    tags: ['第1806句', '仪表盘总览', '★★★★★'],
    when: '工程师汇报BMS系统当前的活动告警总数，是交接班告警状态汇报的核心句。',
    words: [
      { w: 'active', ipa: '/ˈæktɪv/', pos: '形容词', cn: '活动的；正在运行的', memory: 'act(行动)+ive→正在行动的→告警还没消失', phonics: 'act 读 /ækt/，ive 读 /ɪv/', collocations: [['active alarm', '活动告警'], ['active ticket', '活动工单'], ['active issue', '活动问题']], examples: [['There are 5 active alarms.', '有5条活动告警。'], ['Is the alarm still active?', '告警还是活动状态吗？']] },
      { w: 'alarm', ipa: '/əˈlɑːrm/', pos: '名词', cn: '告警；警报', memory: 'al(加强)+arm(武器)→拿起武器警戒→警报', phonics: 'a 读 /ə/，larm 读 /lɑːrm/', collocations: [['critical alarm', '严重告警'], ['warning alarm', '警告告警'], ['alarm list', '告警列表']], examples: [['Check the alarm list.', '检查告警列表。'], ['The alarm triggered at 3 AM.', '告警在凌晨3点触发。']] },
    ],
    phrases: [
      { p: 'active alarms', ipa: '/ˈæktɪv əˈlɑːrmz/', cn: '活动告警', why: 'active 修饰 alarms，表示告警当前仍处于触发状态，尚未恢复。' },
      { p: 'There are + 数量 + 名词', ipa: '', cn: '有……个……', why: 'There be 句型用来报告某处存在某物，交接时用于汇报数量。' },
    ],
    grammar: [
      { q: '为什么用 There are 而不是 We have？', a: 'There are 强调「客观存在」，语气中立，适合汇报事实。\n✅ There are 10 active alarms.（客观报告）\n❌ We have 10 active alarms.（听起来像我们「拥有」告警）' },
    ],
    pattern: 'There are + 数量 + 形容词 + 名词 + in + 系统',
    patternExamples: [
      { en: 'There are five active alarms in the DCIM.', cn: 'DCIM中有5条活动告警。', words: [] },
      { en: 'There are three active tickets in the system.', cn: '系统中有3个活动工单。', words: [] },
      { en: 'There are no active alarms.', cn: '没有活动告警。', words: [] },
    ],
    thinking: '英语思维顺序：存在→数量→状态→事物→位置。\n先说「有」（There are），再说「多少」（ten），再说「什么状态」（active），再说「什么」（alarms），最后说「在哪里」（in the BMS）。\n中国人常犯的错误是先说位置。',
    pronunciation: 'ten active 连读：te-nactive /tɛˈnæktɪv/。\nalarms 的 s 读 /z/。\n节奏：There are TEN ｜ AC-tive a-LARMS ｜ in the BMS.',
    quiz: [
      { q: '把「BMS目前有10条活动告警。」用英语说出来。', a: 'There are ten active alarms in the BMS.' },
      { q: '为什么用 There are 而不是 There is？', a: '因为 alarms 是复数（10条），所以用 are。' },
    ],
  },
  {
    id: 1807,
    speaker: 'Manager',
    en: 'There are five active alarms in the DCIM.',
    cn: 'DCIM目前有5条活动告警。',
    ipa: '/ðeər ɑːr faɪv ˈæktɪv əˈlɑːrmz ɪn ðə ˌdiː.siː.aɪˈɛm/',
    tags: ['第1807句', '仪表盘总览', '★★★★★'],
    when: '经理汇报DCIM系统当前的活动告警数量，与BMS告警数进行交叉对比。',
    words: [
      { w: 'DCIM', ipa: '/ˌdiː.siː.aɪˈɛm/', pos: '缩写', cn: '数据中心基础设施管理', memory: 'D=Data, C=Center, I=Infrastructure, M=Management', phonics: '逐字母读 D-C-I-M', collocations: [['DCIM alarm', 'DCIM告警'], ['DCIM dashboard', 'DCIM仪表盘']], examples: [['Check the DCIM for alarms.', '在DCIM中检查告警。'], ['DCIM shows 5 alarms.', 'DCIM显示5条告警。']] },
    ],
    phrases: [
      { p: 'in the DCIM', ipa: '/ɪn ðə ˌdiː.siː.aɪˈɛm/', cn: '在DCIM系统中', why: 'in 表示在某个系统内部，DCIM 是数据中心基础设施管理系统。' },
    ],
    grammar: [
      { q: 'BMS 告警和 DCIM 告警需要交叉验证吗？', a: '是的。BMS 管楼宇设备（空调、电力），DCIM 管IT基础设施（服务器、网络）。\n同一事件可能在两个系统同时产生告警。\n✅ BMS: UPS battery low → DCIM: Server room power warning\n交接时需要交叉对比两个系统的告警，确认是否为同一事件。' },
    ],
    pattern: 'There are + 数量 + active alarms in the + 系统名',
    patternExamples: [
      { en: 'There are three active alarms in the EPMS.', cn: 'EPMS中有3条活动告警。', words: [] },
      { en: 'There are eight active alarms in the BMS.', cn: 'BMS中有8条活动告警。', words: [] },
      { en: 'There are no active alarms in the DCIM.', cn: 'DCIM中没有活动告警。', words: [] },
    ],
    thinking: '交接班时必须同时汇报 BMS 和 DCIM 两个系统的告警数量。\n这体现了数据中心的"双系统交叉验证"原则。\n句型与上一句完全一致，只需替换数字和系统名称。',
    pronunciation: 'five active 连读：five-active /faɪvˈæktɪv/。\nDCIM 逐字母读。\n节奏：There are FIVE ｜ AC-tive a-LARMS ｜ in the DCIM.',
    quiz: [
      { q: '把「DCIM目前有5条活动告警。」用英语说出来。', a: 'There are five active alarms in the DCIM.' },
      { q: 'DCIM 代表什么？', a: 'Data Center Infrastructure Management（数据中心基础设施管理）' },
    ],
  },
  {
    id: 1808,
    speaker: 'Engineer',
    en: 'Two alarms are critical.',
    cn: '其中2条为严重告警。',
    ipa: '/tuː əˈlɑːrmz ɑːr ˈkrɪtɪkəl/',
    tags: ['第1808句', '仪表盘总览', '★★★★★'],
    when: '工程师对告警按严重程度分类，汇报Critical级别的告警数量。Critical是最高级别。',
    words: [
      { w: 'critical', ipa: '/ˈkrɪtɪkəl/', pos: '形容词', cn: '严重的；关键的', memory: 'critic(批评者)+al→到了需要批评/关注的程度→严重的', phonics: 'crit 读 /krɪt/，i 读 /ɪ/，cal 读 /kəl/', collocations: [['critical alarm', '严重告警'], ['critical failure', '严重故障'], ['critical level', '严重级别']], examples: [['This is a critical alarm.', '这是一条严重告警。'], ['The UPS failure is critical.', 'UPS故障是严重级别的。']] },
    ],
    phrases: [
      { p: 'critical alarms', ipa: '/ˈkrɪtɪkəl əˈlɑːrmz/', cn: '严重告警', why: 'critical 是告警分级中的最高级别，需要立即处理。' },
    ],
    grammar: [
      { q: '告警分几个级别？', a: '数据中心告警通常分三级：\n1. Critical（严重）：必须立即处理，可能导致设备停机或数据丢失。\n2. Warning（警告）：需要关注，但暂不影响运行。\n3. Informational（信息）：系统提示，通常无需操作。\n✅ Two alarms are critical.（2条严重。）\n✅ Three alarms are warnings.（3条警告。）' },
    ],
    pattern: '数量 + alarms are + 级别',
    patternExamples: [
      { en: 'Three alarms are warnings.', cn: '3条为警告告警。', words: [] },
      { en: 'Five alarms are informational.', cn: '5条为信息类告警。', words: [] },
      { en: 'One alarm is critical.', cn: '1条为严重告警。', words: [] },
    ],
    thinking: '交接班汇报告警时，按严重→警告→信息的优先级顺序报告。\n先说最重要的（Critical），再说次要的（Warning），最后说最低级别的（Informational）。\n这体现了运维的优先级思维。',
    pronunciation: 'critical 重音在第一音节：CRI-ti-cal。\n节奏：TWO a-LARMS ｜ are CRI-ti-cal.',
    quiz: [
      { q: '把「其中2条为严重告警。」用英语说出来。', a: 'Two alarms are critical.' },
      { q: '告警最高级别用英语怎么说？', a: 'critical (/ˈkrɪtɪkəl/)' },
    ],
  },
  {
    id: 1809,
    speaker: 'Manager',
    en: 'Three alarms are warnings.',
    cn: '其中3条为警告告警。',
    ipa: '/θriː əˈlɑːrmz ɑːr ˈwɔːrnɪŋz/',
    tags: ['第1809句', '仪表盘总览', '★★★★'],
    when: '继续按严重程度分类，汇报Warning级别告警数量。Warning低于Critical但仍需关注。',
    words: [
      { w: 'warning', ipa: '/ˈwɔːrnɪŋ/', pos: '名词/形容词', cn: '警告；预警', memory: 'warn(警告)+ing→正在警告的→警告级别的', phonics: 'war 读 /wɔːr/，ning 读 /nɪŋ/', collocations: [['warning alarm', '警告告警'], ['warning sign', '警告标志'], ['early warning', '预警']], examples: [['This is a warning, not critical.', '这是警告，不是严重告警。'], ['The temperature warning triggered.', '温度警告触发了。']] },
    ],
    phrases: [
      { p: 'warning alarms', ipa: '/ˈwɔːrnɪŋ əˈlɑːrmz/', cn: '警告告警', why: 'warning 作为形容词修饰 alarms，表示严重程度为「警告」级别。' },
    ],
    grammar: [
      { q: 'warning 和 warn 的区别？', a: 'warn 是动词（警告某人），warning 是名词/形容词（警告/警告的）。\n✅ I warn you.（动词：我警告你。）\n✅ This is a warning.（名词：这是一个警告。）\n✅ warning alarm（形容词：警告级别的告警）' },
    ],
    pattern: '数量 + alarms are + 级别',
    patternExamples: [
      { en: 'Two alarms are critical.', cn: '2条为严重告警。', words: [] },
      { en: 'Four alarms are warnings.', cn: '4条为警告告警。', words: [] },
      { en: 'Five alarms are informational.', cn: '5条为信息类告警。', words: [] },
    ],
    thinking: '这句和上一句结构完全一样：数量 + alarms are + 级别。\n掌握了这个句型，可以快速报出任何级别的告警数量。\n交接时按 Critical → Warning → Info 顺序汇报。',
    pronunciation: 'warning 重音在第一音节：WAR-ning。\nalarms 的 s 读 /z/。\n节奏：THREE a-LARMS ｜ are WAR-nings.',
    quiz: [
      { q: '把「其中3条为警告告警。」用英语说出来。', a: 'Three alarms are warnings.' },
      { q: 'warn 和 warning 分别是什么词性？', a: 'warn 是动词，warning 是名词或形容词。' },
    ],
  },
  {
    id: 1810,
    speaker: 'Engineer',
    en: 'All other alarms are informational.',
    cn: '其余均为信息类告警。',
    ipa: '/ɔːl ˈʌðər əˈlɑːrmz ɑːr ˌɪnfərˈmeɪʃənəl/',
    tags: ['第1810句', '仪表盘总览', '★★★★'],
    when: '完成告警分类汇报的最后一句，说明剩余告警均为最低级别的信息提示。',
    words: [
      { w: 'informational', ipa: '/ˌɪnfərˈmeɪʃənəl/', pos: '形容词', cn: '信息类的；提示性的', memory: 'information(信息)+al→与信息相关的→提示性的', phonics: 'in 读 /ɪn/，for 读 /fər/，ma 读 /meɪ/，tion 读 /ʃən/，al 读 /əl/', collocations: [['informational alarm', '信息类告警'], ['informational message', '提示信息']], examples: [['These are informational alarms.', '这些是信息类告警。'], ['Informational alarms need no action.', '信息类告警无需操作。']] },
    ],
    phrases: [
      { p: 'all other', ipa: '/ɔːl ˈʌðər/', cn: '其余所有的', why: 'all other 表示"除了前面提到的之外的所有"，用于总结剩余部分。' },
      { p: 'informational alarms', ipa: '/ˌɪnfərˈmeɪʃənəl əˈlɑːrmz/', cn: '信息类告警', why: 'informational 是告警分类中最低级别，只是系统通知，通常无需操作。' },
    ],
    grammar: [
      { q: '"all other" 怎么用？', a: '"all other + 名词" 表示"其余所有的……"。\n✅ All other alarms are informational.（其余告警均为信息类。）\n✅ All other tasks are complete.（其余任务均已完成。）\n✅ All other systems are normal.（其余系统均正常。）' },
    ],
    pattern: 'All other + 名词 + are + 描述',
    patternExamples: [
      { en: 'All other systems are normal.', cn: '其余系统均正常。', words: [] },
      { en: 'All other tickets are closed.', cn: '其余工单均已关闭。', words: [] },
      { en: 'All other alarms are cleared.', cn: '其余告警均已恢复。', words: [] },
    ],
    thinking: '三句话（1808、1809、1810）合在一起就是完整的告警分类汇报：\nCritical: 2 → Warning: 3 → Info: 其余 → 总计对应活动告警总数。\n交接时按严重→警告→信息的顺序汇报，体现优先级思维。',
    pronunciation: 'informational 重音在 ma：in-for-MA-tion-al。\n节奏：ALL o-ther a-LARMS ｜ are in-for-MA-tion-al.',
    quiz: [
      { q: '如何用英语完整汇报告警分类？', a: 'Two alarms are critical. Three alarms are warnings. All other alarms are informational.' },
      { q: '"其余所有的"用英语怎么说？', a: 'all other (/ɔːl ˈʌðər/)' },
    ],
  },
  {
    id: 1811,
    speaker: 'Manager',
    en: 'Please acknowledge the alarm.',
    cn: '请确认告警。',
    ipa: '/pliːz əkˈnɒlɪdʒ ðə əˈlɑːrm/',
    tags: ['第1811句', '告警处理', '★★★★★'],
    when: '经理指示工程师对告警进行确认操作，表示已知悉该告警并开始处理。',
    words: [
      { w: 'acknowledge', ipa: '/əkˈnɒlɪdʒ/', pos: '动词', cn: '确认；回执', memory: 'ac(向)+knowledge(知识)→让对方知道"我知道了"→确认', phonics: 'ac 读 /ək/，know 读 /nɒ/，ledge 读 /lɪdʒ/', collocations: [['acknowledge the alarm', '确认告警'], ['alarm acknowledgement', '告警确认'], ['acknowledge receipt', '确认收到']], examples: [['Please acknowledge the alarm.', '请确认告警。'], ['The alarm has been acknowledged.', '告警已确认。']] },
    ],
    phrases: [
      { p: 'acknowledge the alarm', ipa: '/əkˈnɒlɪdʒ ðə əˈlɑːrm/', cn: '确认告警', why: 'acknowledge 是告警处理流程的第一步：确认已知悉，防止告警被忽略。' },
    ],
    grammar: [
      { q: 'acknowledge 在告警流程中的意义？', a: '告警处理流程通常分三步：\n1. Acknowledge（确认）：表示"我看到了，开始处理"\n2. Investigate（调查）：排查原因\n3. Resolve（解决）：处理完毕\n✅ Please acknowledge the alarm first.（请先确认告警。）\n❌ 不确认就直接调查 → 告警可能被认为无人处理。' },
    ],
    pattern: 'Please acknowledge + the + 对象',
    patternExamples: [
      { en: 'Please acknowledge this critical alarm.', cn: '请确认这条严重告警。', words: [] },
      { en: 'Please acknowledge all new alarms.', cn: '请确认所有新告警。', words: [] },
      { en: 'Please acknowledge the notification.', cn: '请确认通知。', words: [] },
    ],
    thinking: 'acknowledge 是数据中心告警管理的关键动作。\n它不等于"解决"，只是表示"我已经看到了"。\n在 BMS/DCIM 系统中，acknowledge 通常是一个按钮操作。\n未确认的告警会持续闪烁或发出声音提醒。',
    pronunciation: 'acknowledge 重音在第二音节：ac-KNOW-ledge。\n节奏：Please ac-KNOW-ledge ｜ the a-LARM.',
    quiz: [
      { q: '把「请确认告警。」用英语说出来。', a: 'Please acknowledge the alarm.' },
      { q: '「确认告警」用英语怎么说？', a: 'acknowledge the alarm (/əkˈnɒlɪdʒ ðə əˈlɑːrm/)' },
    ],
  },
  {
    id: 1812,
    speaker: 'Manager',
    en: 'Please investigate the alarm immediately.',
    cn: '请立即调查告警。',
    ipa: '/pliːz ɪnˈvɛstɪɡeɪt ðə əˈlɑːrm ɪˈmiːdiətli/',
    tags: ['第1812句', '告警处理', '★★★★★'],
    when: '告警确认后，经理指示工程师立即进行现场排查和原因调查。',
    words: [
      { w: 'investigate', ipa: '/ɪnˈvɛstɪɡeɪt/', pos: '动词', cn: '调查；排查', memory: 'in(进入)+vestigate(追踪)→深入追踪→调查', phonics: 'in 读 /ɪn/，ves 读 /vɛs/，ti 读 /tɪ/，gate 读 /ɡeɪt/', collocations: [['investigate the alarm', '调查告警'], ['investigate the cause', '调查原因'], ['investigate on site', '现场排查']], examples: [['Please investigate the alarm.', '请调查告警。'], ['I will investigate immediately.', '我会立即调查。']] },
      { w: 'immediately', ipa: '/ɪˈmiːdiətli/', pos: '副词', cn: '立即；马上', memory: 'immediate(立即的)+ly→立即地', phonics: 'im 读 /ɪm/，me 读 /miː/，di 读 /di/，ate 读 /ət/，ly 读 /li/', collocations: [['immediately investigate', '立即调查'], ['respond immediately', '立即响应']], examples: [['Investigate immediately.', '立即调查。'], ['Report the issue immediately.', '立即报告问题。']] },
    ],
    phrases: [
      { p: 'investigate immediately', ipa: '/ɪnˈvɛstɪɡeɪt ɪˈmiːdiətli/', cn: '立即调查', why: 'immediately 强调紧迫性，在严重告警场景中必须立即行动。' },
    ],
    grammar: [
      { q: 'immediately 放在句尾还是句首？', a: '副词 immediately 可以放在句尾或动词前：\n✅ Please investigate the alarm immediately.（句尾，最常见。）\n✅ Please immediately investigate the alarm.（动词前，强调紧迫。）\n❌ Please investigate immediately the alarm.（错，副词不应隔开动词和宾语。）' },
    ],
    pattern: 'Please investigate + the + 对象 + immediately',
    patternExamples: [
      { en: 'Please investigate the critical alarm immediately.', cn: '请立即调查严重告警。', words: [] },
      { en: 'Please investigate the cause immediately.', cn: '请立即调查原因。', words: [] },
      { en: 'Please investigate the issue on site.', cn: '请到现场调查问题。', words: [] },
    ],
    thinking: 'investigate 是告警处理第二步（确认→调查→解决）。\nimmediately 用于 Critical 级别告警，表示刻不容缓。\nWarning 级别可以说 when you have time 或 at the next patrol。\n现场调查通常包括：检查设备状态、查看传感器读数、核实环境参数。',
    pronunciation: 'investigate 重音在第二音节：in-VES-ti-gate。\nimmediately 重音在第二音节：im-ME-di-ate-ly。\n节奏：Please in-VES-ti-gate ｜ the a-LARM ｜ im-ME-di-ate-ly.',
    quiz: [
      { q: '把「请立即调查告警。」用英语说出来。', a: 'Please investigate the alarm immediately.' },
      { q: '「立即」用英语怎么说？', a: 'immediately (/ɪˈmiːdiətli/)' },
    ],
  },
  {
    id: 1813,
    speaker: 'Manager',
    en: 'Please assign the alarm to the electrical team.',
    cn: '请将该告警分配给电气团队。',
    ipa: '/pliːz əˈsaɪn ðə əˈlɑːrm tuː ðə ɪˈlɛktrɪkəl tiːm/',
    tags: ['第1813句', '告警处理', '★★★★★'],
    when: '经理根据告警类型，将其分配给对应的专业团队处理。电气告警分配给电气团队。',
    words: [
      { w: 'assign', ipa: '/əˈsaɪn/', pos: '动词', cn: '分配；指派', memory: 'as(向)+sign(标记)→标记给某人→分配', phonics: 'as 读 /ə/，sign 读 /saɪn/', collocations: [['assign the alarm', '分配告警'], ['assign to', '分配给'], ['assign a task', '分配任务']], examples: [['Assign the alarm to the team.', '把告警分配给团队。'], ['The alarm has been assigned.', '告警已分配。']] },
      { w: 'electrical', ipa: '/ɪˈlɛktrɪkəl/', pos: '形容词', cn: '电气的', memory: 'electric(电的)+al→与电相关的', phonics: 'e 读 /ɪ/，lec 读 /lɛk/，tri 读 /trɪ/，cal 读 /kəl/', collocations: [['electrical team', '电气团队'], ['electrical fault', '电气故障'], ['electrical system', '电气系统']], examples: [['Assign to the electrical team.', '分配给电气团队。'], ['This is an electrical fault.', '这是一个电气故障。']] },
    ],
    phrases: [
      { p: 'assign to', ipa: '/əˈsaɪn tuː/', cn: '分配给', why: 'assign...to... 是告警/工单分配的标准搭配，to 后面接目标团队或个人。' },
      { p: 'electrical team', ipa: '/ɪˈlɛktrɪkəl tiːm/', cn: '电气团队', why: '数据中心通常分电气、暖通、IT、安保等专业团队。' },
    ],
    grammar: [
      { q: '"assign A to B" 结构怎么用？', a: 'assign + 对象 + to + 接收方，表示"把A分配给B"。\n✅ Assign the alarm to the electrical team.（把告警分配给电气团队。）\n✅ Assign the ticket to me.（把工单分配给我。）\n✅ The task was assigned to the HVAC team.（任务已分配给暖通团队。）' },
    ],
    pattern: 'Please assign + the + 对象 + to the + 团队',
    patternExamples: [
      { en: 'Please assign the alarm to the mechanical team.', cn: '请把告警分配给暖通团队。', words: [] },
      { en: 'Please assign the ticket to the IT team.', cn: '请把工单分配给IT团队。', words: [] },
      { en: 'Please assign the task to the security team.', cn: '请把任务分配给安保团队。', words: [] },
    ],
    thinking: 'assign 是告警流转的核心操作。\n数据中心通常有电气（electrical）、暖通（mechanical/HVAC）、IT、安保（security）等专业团队。\n告警必须分配给正确的专业团队，避免跨专业处理导致效率低下。',
    pronunciation: 'assign 重音在第二音节：as-SIGN。\nelectrical 重音在第二音节：e-LEC-tri-cal。\n节奏：Please as-SIGN ｜ the a-LARM ｜ to the e-LEC-tri-cal TEAM.',
    quiz: [
      { q: '把「请将该告警分配给电气团队。」用英语说出来。', a: 'Please assign the alarm to the electrical team.' },
      { q: '「分配给」用英语怎么说？', a: 'assign...to (/əˈsaɪn tuː/)' },
    ],
  },
  {
    id: 1814,
    speaker: 'Manager',
    en: 'Please assign the alarm to the mechanical team.',
    cn: '请将该告警分配给暖通团队。',
    ipa: '/pliːz əˈsaɪn ðə əˈlɑːrm tuː ðə mɪˈkænɪkəl tiːm/',
    tags: ['第1814句', '告警处理', '★★★★★'],
    when: '暖通（空调/制冷）相关告警需要分配给暖通/mechanical团队处理。',
    words: [
      { w: 'mechanical', ipa: '/mɪˈkænɪkəl/', pos: '形容词', cn: '暖通的；机械的', memory: 'mechanic(机械师)+al→与机械/暖通相关的', phonics: 'me 读 /mɪ/，chan 读 /kæn/，i 读 /ɪ/，cal 读 /kəl/', collocations: [['mechanical team', '暖通团队'], ['mechanical fault', '机械故障'], ['mechanical system', '暖通系统']], examples: [['Assign to the mechanical team.', '分配给暖通团队。'], ['This is a mechanical issue.', '这是一个暖通问题。']] },
    ],
    phrases: [
      { p: 'mechanical team', ipa: '/mɪˈkænɪkəl tiːm/', cn: '暖通团队', why: '在数据中心语境中，mechanical 通常指暖通空调（HVAC）系统相关的团队。' },
    ],
    grammar: [
      { q: 'mechanical 和 HVAC 有什么关系？', a: 'mechanical 在数据中心语境中 = HVAC（暖通空调）。\nmechanical team = HVAC team = 暖通团队。\n机械系统包括：CRAC（精密空调）、冷却塔、冷冻水泵、管道阀门等。\n✅ mechanical alarm = HVAC alarm（暖通告警）\n✅ mechanical fault = cooling system fault（制冷系统故障）' },
    ],
    pattern: 'Please assign the alarm to the mechanical team',
    patternExamples: [
      { en: 'Please assign the alarm to the HVAC team.', cn: '请把告警分配给暖通团队。', words: [] },
      { en: 'Please assign this cooling alarm to the mechanical team.', cn: '请把这条制冷告警分配给暖通团队。', words: [] },
      { en: 'Please assign the CRAC fault to the mechanical team.', cn: '请把精密空调故障分配给暖通团队。', words: [] },
    ],
    thinking: '数据中心四大专业团队：electrical（电气）、mechanical（暖通）、IT（信息技术）、security（安保）。\n温度、湿度、空调相关告警 → mechanical team。\n电力、UPS、发电机相关告警 → electrical team。',
    pronunciation: 'mechanical 重音在第二音节：me-CHAN-i-cal。\n节奏：Please as-SIGN ｜ the a-LARM ｜ to the me-CHAN-i-cal TEAM.',
    quiz: [
      { q: '把「请将该告警分配给暖通团队。」用英语说出来。', a: 'Please assign the alarm to the mechanical team.' },
      { q: 'mechanical team 在数据中心指什么团队？', a: '暖通/HVAC团队，负责空调、制冷等机械系统。' },
    ],
  },
  {
    id: 1815,
    speaker: 'Manager',
    en: 'Please assign the alarm to the IT team.',
    cn: '请将该告警分配给IT团队。',
    ipa: '/pliːz əˈsaɪn ðə əˈlɑːrm tuː ðə ˌaɪˈtiː tiːm/',
    tags: ['第1815句', '告警处理', '★★★★'],
    when: '网络、服务器、存储等IT基础设施相关告警需要分配给IT团队处理。',
    words: [
      { w: 'IT', ipa: '/ˌaɪˈtiː/', pos: '缩写', cn: '信息技术', memory: 'I=Information(信息), T=Technology(技术)', phonics: '逐字母读 I-T', collocations: [['IT team', 'IT团队'], ['IT system', 'IT系统'], ['IT infrastructure', 'IT基础设施']], examples: [['Assign to the IT team.', '分配给IT团队。'], ['This is an IT issue.', '这是一个IT问题。']] },
    ],
    phrases: [
      { p: 'IT team', ipa: '/ˌaɪˈtiː tiːm/', cn: 'IT团队', why: 'IT团队负责服务器、网络、存储等信息技术基础设施的运维。' },
    ],
    grammar: [
      { q: 'IT 团队负责哪些告警？', a: 'IT team 负责信息技术相关告警：\n- Server offline（服务器离线）\n- Network link down（网络链路中断）\n- Storage full（存储满）\n- Application error（应用错误）\n与 electrical（电力）和 mechanical（暖通）告警区分开。' },
    ],
    pattern: 'Please assign the alarm to the IT team',
    patternExamples: [
      { en: 'Please assign the network alarm to the IT team.', cn: '请把网络告警分配给IT团队。', words: [] },
      { en: 'Please assign the server alert to the IT team.', cn: '请把服务器告警分配给IT团队。', words: [] },
      { en: 'Please assign the storage issue to the IT team.', cn: '请把存储问题分配给IT团队。', words: [] },
    ],
    thinking: '数据中心运维三大专业方向：electrical（电气）、mechanical（暖通）、IT（信息技术）。\n告警分配的第一步是判断告警属于哪个专业方向。\n网络、服务器、存储 → IT team。\n分配正确才能高效处理。',
    pronunciation: 'IT 逐字母读 I-T，不要读成 it /ɪt/。\n节奏：Please as-SIGN ｜ the a-LARM ｜ to the I-T TEAM.',
    quiz: [
      { q: '把「请将该告警分配给IT团队。」用英语说出来。', a: 'Please assign the alarm to the IT team.' },
      { q: 'IT 代表什么？', a: 'Information Technology（信息技术）' },
    ],
  },
  {
    id: 1816,
    speaker: 'Engineer',
    en: 'The alarm has been assigned successfully.',
    cn: '告警已成功分配。',
    ipa: '/ðə əˈlɑːrm hæz biːn əˈsaɪnd səkˈsɛsfəli/',
    tags: ['第1816句', '告警处理', '★★★★'],
    when: '工程师完成告警分配操作后，向经理汇报分配结果。',
    words: [
      { w: 'successfully', ipa: '/səkˈsɛsfəli/', pos: '副词', cn: '成功地', memory: 'success(成功)+ful(充满)+ly→成功地', phonics: 'suc 读 /sək/，cess 读 /sɛs/，ful 读 /fəl/，ly 读 /li/', collocations: [['assigned successfully', '成功分配'], ['completed successfully', '成功完成'], ['resolved successfully', '成功解决']], examples: [['The alarm was assigned successfully.', '告警已成功分配。'], ['The task completed successfully.', '任务已成功完成。']] },
    ],
    phrases: [
      { p: 'has been assigned', ipa: '/hæz biːn əˈsaɪnd/', cn: '已被分配', why: '现在完成时被动语态，表示"已经被分配了"，强调操作已完成。' },
    ],
    grammar: [
      { q: '"has been assigned" 是什么语法？', a: '这是现在完成时被动语态（Present Perfect Passive）：\nhas been + 过去分词 = 已经被……\n✅ The alarm has been assigned.（告警已被分配。）\n✅ The ticket has been created.（工单已被创建。）\n✅ The issue has been resolved.（问题已被解决。）\n用于汇报操作已完成的结果。' },
    ],
    pattern: 'The + 对象 + has been + 过去分词 + successfully',
    patternExamples: [
      { en: 'The ticket has been created successfully.', cn: '工单已成功创建。', words: [] },
      { en: 'The alarm has been acknowledged successfully.', cn: '告警已成功确认。', words: [] },
      { en: 'The report has been submitted successfully.', cn: '报告已成功提交。', words: [] },
    ],
    thinking: 'has been + 过去分词 是汇报操作结果的标准句式。\n它强调"动作已经完成，结果已经产生"。\n在系统操作后向经理汇报时，用这个句式最专业。\nsuccessfully 放在句尾，确认操作无误。',
    pronunciation: 'successfully 重音在第二音节：suc-CESS-ful-ly。\n节奏：The a-LARM ｜ has BEEN as-SIGNED ｜ suc-CESS-ful-ly.',
    quiz: [
      { q: '把「告警已成功分配。」用英语说出来。', a: 'The alarm has been assigned successfully.' },
      { q: '"has been assigned" 是什么语法？', a: '现在完成时被动语态，表示"已经被分配"。' },
    ],
  },
  {
    id: 1817,
    speaker: 'Engineer',
    en: 'The alarm has been acknowledged.',
    cn: '告警已确认。',
    ipa: '/ðə əˈlɑːrm hæz biːn əkˈnɒlɪdʒd/',
    tags: ['第1817句', '告警处理', '★★★★★'],
    when: '工程师完成告警确认操作后汇报状态，表示已知悉并开始处理。',
    words: [
      { w: 'acknowledged', ipa: '/əkˈnɒlɪdʒd/', pos: '动词过去分词', cn: '已确认', memory: 'acknowledge 的过去分词形式，用于被动语态', phonics: 'ac 读 /ək/，know 读 /nɒ/，ledged 读 /lɪdʒd/', collocations: [['alarm acknowledged', '告警已确认'], ['message acknowledged', '消息已确认']], examples: [['The alarm has been acknowledged.', '告警已确认。'], ['All alarms acknowledged.', '所有告警已确认。']] },
    ],
    phrases: [
      { p: 'has been acknowledged', ipa: '/hæz biːn əkˈnɒlɪdʒd/', cn: '已被确认', why: '现在完成时被动语态，表示告警确认操作已完成。' },
    ],
    grammar: [
      { q: '告警处理的三个阶段怎么用英语表达？', a: '1. Acknowledge → The alarm has been acknowledged.（已确认。）\n2. Investigate → The alarm is under investigation.（正在调查。）\n3. Resolve → The alarm has been resolved.（已解决。）\n每个阶段用不同的时态：\n- 已完成：has been + 过去分词\n- 进行中：is under + 名词 / is being + 过去分词' },
    ],
    pattern: 'The alarm has been + 过去分词',
    patternExamples: [
      { en: 'The alarm has been acknowledged.', cn: '告警已确认。', words: [] },
      { en: 'The alarm has been assigned.', cn: '告警已分配。', words: [] },
      { en: 'The alarm has been resolved.', cn: '告警已解决。', words: [] },
    ],
    thinking: '告警处理流程的每个阶段都有对应的状态汇报句式。\nacknowledged 是第一步完成的标志。\n在 BMS/DCIM 系统中，acknowledge 操作会记录时间戳和操作人。\n这是告警审计追踪的重要环节。',
    pronunciation: 'acknowledged 的 d 轻读，几乎听不到。\n节奏：The a-LARM ｜ has BEEN ｜ ac-KNOW-ledged.',
    quiz: [
      { q: '把「告警已确认。」用英语说出来。', a: 'The alarm has been acknowledged.' },
      { q: '告警处理的第一步是什么？', a: 'Acknowledge（确认）' },
    ],
  },
  {
    id: 1818,
    speaker: 'Engineer',
    en: 'The alarm is under investigation.',
    cn: '告警正在调查中。',
    ipa: '/ðə əˈlɑːrm ɪz ˈʌndər ɪnˌvɛstɪˈɡeɪʃən/',
    tags: ['第1818句', '告警处理', '★★★★★'],
    when: '工程师汇报告警当前处于调查阶段，尚未找到根因或完成处理。',
    words: [
      { w: 'investigation', ipa: '/ɪnˌvɛstɪˈɡeɪʃən/', pos: '名词', cn: '调查；排查', memory: 'investigate(调查)+ion→调查的过程', phonics: 'in 读 /ɪn/，ves 读 /vɛs/，ti 读 /tɪ/，ga 读 /ɡeɪ/，tion 读 /ʃən/', collocations: [['under investigation', '正在调查中'], ['root cause investigation', '根因调查'], ['alarm investigation', '告警排查']], examples: [['The alarm is under investigation.', '告警正在调查中。'], ['Root cause investigation is ongoing.', '根因调查正在进行。']] },
    ],
    phrases: [
      { p: 'under investigation', ipa: '/ˈʌndər ɪnˌvɛstɪˈɡeɪʃən/', cn: '正在调查中', why: 'under + 名词 表示"处于……状态"。under investigation = 处于调查状态。' },
    ],
    grammar: [
      { q: '"under + 名词" 表示什么？', a: '"under + 名词" 表示"处于某种状态/过程中"：\n✅ under investigation（正在调查中）\n✅ under maintenance（正在维护中）\n✅ under review（正在审核中）\n✅ under construction（正在施工中）\n这是英语中表达"进行中"的常用结构。' },
    ],
    pattern: 'The alarm is under + 状态名词',
    patternExamples: [
      { en: 'The alarm is under investigation.', cn: '告警正在调查中。', words: [] },
      { en: 'The equipment is under maintenance.', cn: '设备正在维护中。', words: [] },
      { en: 'The change is under review.', cn: '变更正在审核中。', words: [] },
    ],
    thinking: 'under investigation 是告警处理第二步的状态描述。\n它告诉对方"我正在查，还没结果"。\n在交接班时，需要特别说明哪些告警"正在调查中"，让下一班继续跟进。\n区别于"已解决"和"待处理"。',
    pronunciation: 'investigation 重音在 ga：in-ves-ti-GA-tion。\nunder 读 /ˈʌndər/。\n节奏：The a-LARM ｜ is UN-der ｜ in-ves-ti-GA-tion.',
    quiz: [
      { q: '把「告警正在调查中。」用英语说出来。', a: 'The alarm is under investigation.' },
      { q: '"under investigation" 是什么意思？', a: '正在调查中' },
    ],
  },
  {
    id: 1819,
    speaker: 'Engineer',
    en: 'The alarm has been resolved.',
    cn: '告警已经解决。',
    ipa: '/ðə əˈlɑːrm hæz biːn rɪˈzɒlvd/',
    tags: ['第1819句', '告警处理', '★★★★★'],
    when: '工程师汇报告警问题已经解决，根因已找到并处理完毕。',
    words: [
      { w: 'resolved', ipa: '/rɪˈzɒlvd/', pos: '动词过去分词', cn: '已解决', memory: 'resolve(解决)+d→已经被解决的', phonics: 're 读 /rɪ/，solved 读 /zɒlvd/', collocations: [['alarm resolved', '告警已解决'], ['issue resolved', '问题已解决'], ['ticket resolved', '工单已解决']], examples: [['The alarm has been resolved.', '告警已解决。'], ['The issue was resolved yesterday.', '问题昨天已解决。']] },
    ],
    phrases: [
      { p: 'has been resolved', ipa: '/hæz biːn rɪˈzɒlvd/', cn: '已被解决', why: '现在完成时被动语态，表示问题的解决动作已经完成。' },
    ],
    grammar: [
      { q: 'resolved 和 cleared 有什么区别？', a: 'resolved = 问题已经解决（人工处理完毕）。\ncleared = 告警已经自动恢复（系统状态恢复正常）。\n✅ The alarm has been resolved.（工程师处理完了。）\n✅ The alarm has been cleared.（系统自动恢复了。）\n有些告警需要人工 resolve，有些会自动 clear。' },
    ],
    pattern: 'The alarm has been resolved',
    patternExamples: [
      { en: 'The critical alarm has been resolved.', cn: '严重告警已解决。', words: [] },
      { en: 'All alarms have been resolved.', cn: '所有告警已解决。', words: [] },
      { en: 'The ticket has been resolved.', cn: '工单已解决。', words: [] },
    ],
    thinking: 'resolved 是告警处理流程的终点：acknowledge → investigate → resolve。\nresolved 表示人工介入后问题已解决。\n区别于 cleared（系统自动恢复正常）。\n在交接班报告中，需要区分 resolved 和 cleared 的告警。',
    pronunciation: 'resolved 的 d 轻读。\n节奏：The a-LARM ｜ has BEEN ｜ re-SOLVED.',
    quiz: [
      { q: '把「告警已经解决。」用英语说出来。', a: 'The alarm has been resolved.' },
      { q: 'resolved 和 cleared 有什么区别？', a: 'resolved 是人工解决，cleared 是系统自动恢复。' },
    ],
  },
  {
    id: 1820,
    speaker: 'Engineer',
    en: 'The alarm has been cleared.',
    cn: '告警已经恢复。',
    ipa: '/ðə əˈlɑːrm hæz biːn klɪərd/',
    tags: ['第1820句', '告警处理', '★★★★★'],
    when: '工程师汇报告警已自动恢复，系统状态回到正常，无需人工干预或人工干预后系统已自行恢复。',
    words: [
      { w: 'cleared', ipa: '/klɪərd/', pos: '动词过去分词', cn: '已恢复；已清除', memory: 'clear(清除/恢复)+ed→已经被清除/恢复的', phonics: 'cleared 读 /klɪərd/', collocations: [['alarm cleared', '告警已恢复'], ['alarm auto-cleared', '告警自动恢复'], ['cleared alarm', '已恢复告警']], examples: [['The alarm has been cleared.', '告警已恢复。'], ['The alarm auto-cleared after 5 minutes.', '告警5分钟后自动恢复。']] },
    ],
    phrases: [
      { p: 'has been cleared', ipa: '/hæz biːn klɪərd/', cn: '已被清除/恢复', why: 'cleared 在告警语境中表示告警条件已消失，系统恢复正常状态。' },
    ],
    grammar: [
      { q: '告警状态的完整生命周期怎么用英语表达？', a: '告警从产生到结束的完整生命周期：\n1. Triggered / Raised（触发）→ The alarm triggered at 3 AM.\n2. Acknowledged（确认）→ The alarm has been acknowledged.\n3. Under investigation（调查中）→ The alarm is under investigation.\n4. Resolved（解决）/ Cleared（恢复）→ The alarm has been resolved/cleared.\n5. Closed（关闭）→ The alarm has been closed.' },
    ],
    pattern: 'The alarm has been cleared',
    patternExamples: [
      { en: 'The temperature alarm has been cleared.', cn: '温度告警已恢复。', words: [] },
      { en: 'All alarms have been cleared.', cn: '所有告警已恢复。', words: [] },
      { en: 'The warning was auto-cleared.', cn: '警告已自动恢复。', words: [] },
    ],
    thinking: 'cleared 和 resolved 都是告警的终态，但含义不同：\n- resolved：人工介入解决了问题\n- cleared：告警条件自动消失（如温度回到正常范围）\n在交接班时，需要记录告警是 resolved 还是 cleared，这对后续分析很重要。',
    pronunciation: 'cleared 读 /klɪərd/，注意 ear 发 /ɪər/ 音。\n节奏：The a-LARM ｜ has BEEN ｜ CLEARED.',
    quiz: [
      { q: '把「告警已经恢复。」用英语说出来。', a: 'The alarm has been cleared.' },
      { q: '告警自动恢复用英语怎么说？', a: 'The alarm auto-cleared. 或 The alarm has been cleared.' },
    ],
  },
];

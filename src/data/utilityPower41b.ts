// EXPORTS: MOCK_SENTENCES_UTILITYPOWER41B

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_UTILITYPOWER41B: ISentence[] = [
  {
    id: 2301,
    speaker: 'Engineer',
    en: 'Generator No.2 has synchronized successfully.',
    cn: '2号柴油发电机同步成功。',
    ipa: '/ˈdʒɛnəreɪtər ˌnʌmbər ˈwʌn hæz ˈsɪŋkrəˌnaɪzd səkˈsɛsfəli/',
    tags: ['第2301句', '柴油发电机', '★★★★★'],
    when: '并机操作过程中，值班工程师确认2号柴发已成功与1号柴发同步运行。',
    words: [
      { w: 'synchronized', ipa: '/ˈsɪŋkrəˌnaɪzd/', pos: '动词（过去分词）', cn: '同步；并联', memory: 'syn(共同)+chron(时间)+ize(动词后缀)+d→使在同一时间运行→同步。', phonics: 'syn 读 /ˈsɪŋ/，chro 读 /krə/，nized 读 /ˌnaɪzd/，重音在第一音节。', collocations: [['synchronized operation', '同步运行'], ['synchronization check', '同步检查']], examples: [['The generators have synchronized.', '发电机已同步。'], ['Synchronization was successful.', '同步成功。']] },
      { w: 'successfully', ipa: '/səkˈsɛsfəli/', pos: '副词', cn: '成功地', memory: 'success(成功)+ful(形容词后缀)+ly(副词后缀)→成功地。', phonics: 'suc 读 /sək/，cess 读 /sɛs/，ful 读 /fəl/，ly 读 /li/，重音在第二音节。', collocations: [['completed successfully', '顺利完成'], ['started successfully', '成功启动']], examples: [['The transfer was completed successfully.', '切换已顺利完成。'], ['The test passed successfully.', '测试顺利通过。']] },
    ],
    phrases: [
      { p: 'has synchronized successfully', ipa: '/hæz ˈsɪŋkrəˌnaɪzd səkˈsɛsfəli/', cn: '已成功同步', why: '现在完成时主动语态，表示2号发电机已经完成了与电网或1号机的同步操作。' },
      { p: 'Generator No.2', ipa: '/ˈdʒɛnəreɪtər ˌnʌmbər ˈtuː/', cn: '2号柴油发电机', why: 'No.2 是编号，明确指定第二台柴油发电机组。' },
    ],
    grammar: [
      { q: '为什么用 has synchronized 而不是 was synchronized？', a: 'has synchronized 是现在完成时主动语态，发电机本身执行了同步动作。\nwas synchronized 是一般过去时被动语态，强调被操作人员同步。\n✅ Generator No.2 has synchronized successfully.（2号机已成功同步。）—— 主动\n✅ The generator was synchronized by the engineer.（发电机被工程师同步了。）—— 被动' },
    ],
    pattern: 'Generator No.X has synchronized successfully.',
    patternExamples: [
      { en: 'Generator No.3 has synchronized successfully.', cn: '3号柴发同步成功。', words: [] },
      { en: 'All generators have synchronized.', cn: '所有柴发已同步。', words: [] },
      { en: 'The backup generator has synchronized.', cn: '备用柴发已同步。', words: [] },
    ],
    thinking: '并机操作是数据中心应急供电的关键步骤，需要逐一确认每台柴发的同步状态。\nsynchronized 是电力系统的专业术语，指发电机输出电压、频率、相位与电网或其他发电机一致。\n中文说「同步成功」，英语用 has synchronized successfully。',
    pronunciation: 'generator 重音在第一音节：GEN-er-a-tor。\nsynchronized 重音在第一音节：SYN-chro-nized。\nsuccessfully 重音在第二音节：suc-CESS-ful-ly。\n节奏：GEN-er-a-tor No.2 ｜ has SYN-chro-nized ｜ suc-CESS-ful-ly.',
    quiz: [
      { q: '把「2号柴油发电机同步成功。」用英语说出来。', a: 'Generator No.2 has synchronized successfully.' },
      { q: '「同步」用英语怎么说？', a: 'synchronize / synchronized (/ˈsɪŋkrəˌnaɪz/ / /ˈsɪŋkrəˌnaɪzd/)' },
    ],
  },
  {
    id: 2302,
    speaker: 'Engineer',
    en: 'The generators are operating in parallel.',
    cn: '柴油发电机正在并机运行。',
    ipa: '/ðə ˈdʒɛnəreɪtərz ɑːr ˈɑːpəˌreɪtɪŋ ɪn ˈpærəlɛl/',
    tags: ['第2302句', '柴油发电机', '★★★★★'],
    when: '多台柴发同步后，值班工程师汇报所有柴发已进入并联运行状态。',
    words: [
      { w: 'operating', ipa: '/ˈɑːpəˌreɪtɪŋ/', pos: '动词（现在分词）', cn: '运行；操作', memory: 'oper(工作)+ate(动词后缀)+ing→正在工作→运行。', phonics: 'op 读 /ˈɑːp/，er 读 /ə/，at 读 /ˌreɪt/，ing 读 /ɪŋ/，重音在第一音节。', collocations: [['operating in parallel', '并联运行'], ['operating normally', '正常运行'], ['operating mode', '运行模式']], examples: [['The system is operating normally.', '系统运行正常。'], ['UPS is operating in bypass mode.', 'UPS在旁路模式下运行。']] },
      { w: 'parallel', ipa: '/ˈpærəlɛl/', pos: '形容词/副词', cn: '并联的；并行的', memory: 'para(旁边)+llel(线)→平行的线→并联。', phonics: 'par 读 /ˈpær/，al 读 /əl/，lel 读 /ˌlɛl/，重音在第一音节。', collocations: [['parallel operation', '并联运行'], ['parallel configuration', '并联配置'], ['in parallel', '并联']], examples: [['The UPS units operate in parallel.', 'UPS并联运行。'], ['Connect the loads in parallel.', '将负载并联连接。']] },
    ],
    phrases: [
      { p: 'operating in parallel', ipa: '/ˈɑːpəˌreɪtɪŋ ɪn ˈpærəlɛl/', cn: '并联运行；并机运行', why: 'in parallel 是电力系统术语，指多台发电机同时为同一负载供电。' },
      { p: 'The generators', ipa: '/ðə ˈdʒɛnəreɪtərz/', cn: '柴油发电机（复数）', why: 'the + 复数名词表示已知的那几台柴发。' },
    ],
    grammar: [
      { q: '为什么用 are operating 而不是 have operated？', a: 'are operating 是现在进行时，强调柴发此刻正在运行——当前状态。\nhas operated 是现在完成时，强调已经运行过——已完成的动作。\n✅ The generators are operating in parallel.（柴发正在并联运行。）—— 当前状态\n✅ The generators have operated for two hours.（柴发已运行两小时。）—— 持续时间' },
    ],
    pattern: 'The generators are operating + 状态',
    patternExamples: [
      { en: 'The generators are operating normally.', cn: '柴发运行正常。', words: [] },
      { en: 'The generators are operating at full load.', cn: '柴发满载运行。', words: [] },
      { en: 'The generators are operating in standby mode.', cn: '柴发处于待机运行模式。', words: [] },
    ],
    thinking: '并机运行是数据中心多台柴发同时供电的标准操作模式，确保负载分担和冗余。\nparallel 在这里是电力系统核心概念——并联运行保证单台柴发故障时其他柴发继续供电。\n中文说「并机运行」，英语用 operating in parallel。',
    pronunciation: 'generators 重音在第一音节：GEN-er-a-tors。\noperating 重音在第一音节：OP-er-a-ting。\nparallel 重音在第一音节：PAR-al-lel。\n节奏：The GEN-er-a-tors ｜ are OP-er-a-ting ｜ in PAR-al-lel.',
    quiz: [
      { q: '把「柴油发电机正在并机运行。」用英语说出来。', a: 'The generators are operating in parallel.' },
      { q: '「并联运行」用英语怎么说？', a: 'operate in parallel' },
    ],
  },
  {
    id: 2303,
    speaker: 'Manager',
    en: 'Please verify the generator output voltage.',
    cn: '请确认柴油发电机输出电压。',
    ipa: '/pliːz ˈvɛrɪfaɪ ðə ˈdʒɛnəreɪtər ˈaʊtpʊt ˈvoʊltɪdʒ/',
    tags: ['第2303句', '柴油发电机', '★★★★★'],
    when: '柴发运行后，值班经理指示工程师确认输出电压是否在正常范围内。',
    words: [
      { w: 'verify', ipa: '/ˈvɛrɪfaɪ/', pos: '动词', cn: '确认；验证', memory: 'ver(真实)+ify(使)→使之真实→验证。', phonics: 'ver 读 /ˈvɛr/，i 读 /ɪ/，fy 读 /ˌfaɪ/，重音在第一音节。', collocations: [['verify status', '确认状态'], ['verify reading', '确认读数'], ['verify output', '确认输出']], examples: [['Please verify the reading.', '请确认读数。'], ['The voltage has been verified.', '电压已确认。']] },
      { w: 'output', ipa: '/ˈaʊtpʊt/', pos: '名词', cn: '输出', memory: 'out(出)+put(放)→放出来的→输出。', phonics: 'out 读 /aʊt/，put 读 /pʊt/，重音在第一音节。', collocations: [['output voltage', '输出电压'], ['output frequency', '输出频率'], ['output power', '输出功率']], examples: [['Check the output voltage.', '检查输出电压。'], ['The output is stable.', '输出稳定。']] },
      { w: 'voltage', ipa: '/ˈvoʊltɪdʒ/', pos: '名词', cn: '电压', memory: 'volt(伏特)+age(名词后缀)→伏特数→电压。', phonics: 'volt 读 /voʊlt/，age 读 /ɪdʒ/，重音在第一音节。', collocations: [['high voltage', '高电压'], ['low voltage', '低电压'], ['rated voltage', '额定电压']], examples: [['The voltage is within range.', '电压在范围内。'], ['Measure the voltage.', '测量电压。']] },
    ],
    phrases: [
      { p: 'generator output voltage', ipa: '/ˈdʒɛnəreɪtər ˈaʊtpʊt ˈvoʊltɪdʒ/', cn: '柴油发电机输出电压', why: '名词链修饰：generator 修饰 output，output 修饰 voltage，层层限定。' },
    ],
    grammar: [
      { q: 'Please verify... 是什么句型？', a: 'Please + 动词原形 是礼貌祈使句，用于指示他人执行某项操作。\n✅ Please verify the voltage.（请确认电压。）—— 指示\n✅ Verify the voltage.（确认电压。）—— 命令式，更直接\n应急场景中 Please verify 是标准的指挥用语，既明确又不失礼貌。' },
    ],
    pattern: 'Please verify the generator output + 参数',
    patternExamples: [
      { en: 'Please verify the generator output frequency.', cn: '请确认柴发输出频率。', words: [] },
      { en: 'Please verify the generator output current.', cn: '请确认柴发输出电流。', words: [] },
      { en: 'Please verify the generator output power.', cn: '请确认柴发输出功率。', words: [] },
    ],
    thinking: '柴发运行后必须确认输出电压在额定范围内（通常 400V±5%），确保设备安全。\nverify 比 check 更正式，强调验证并确认结果正确。\n中文说「确认输出电压」，英语用 verify the output voltage。',
    pronunciation: 'verify 重音在第一音节：VER-i-fy。\noutput 重音在第一音节：OUT-put。\nvoltage 重音在第一音节：VOLT-age。\n节奏：Please VER-i-fy ｜ the GEN-er-a-tor ｜ OUT-put VOLT-age.',
    quiz: [
      { q: '把「请确认柴油发电机输出电压。」用英语说出来。', a: 'Please verify the generator output voltage.' },
      { q: '「输出电压」用英语怎么说？', a: 'output voltage (/ˈaʊtpʊt ˈvoʊltɪdʒ/)' },
    ],
  },
  {
    id: 2304,
    speaker: 'Manager',
    en: 'Please verify the generator output frequency.',
    cn: '请确认柴油发电机输出频率。',
    ipa: '/pliːz ˈvɛrɪfaɪ ðə ˈdʒɛnəreɪtər ˈaʊtpʊt ˈfriːkwənsi/',
    tags: ['第2304句', '柴油发电机', '★★★★★'],
    when: '柴发运行后，值班经理指示工程师确认输出频率是否在50Hz±0.5Hz范围内。',
    words: [
      { w: 'frequency', ipa: '/ˈfriːkwənsi/', pos: '名词', cn: '频率', memory: 'frequent(频繁的)+cy(名词后缀)→频繁程度→频率。', phonics: 'fre 读 /ˈfriː/，quen 读 /kwən/，cy 读 /si/，重音在第一音节。', collocations: [['output frequency', '输出频率'], ['rated frequency', '额定频率'], ['frequency deviation', '频率偏差']], examples: [['The frequency is 50 Hz.', '频率为50赫兹。'], ['Check the frequency.', '检查频率。']] },
    ],
    phrases: [
      { p: 'generator output frequency', ipa: '/ˈdʒɛnəreɪtər ˈaʊtpʊt ˈfriːkwənsi/', cn: '柴发输出频率', why: '与输出电压类似的名词链结构，frequency 替换 voltage 即可。' },
    ],
    grammar: [
      { q: '为什么频率也需要确认？', a: '发电机输出频率必须稳定在50Hz（马来西亚标准）或60Hz（美洲标准），频率偏差会影响精密设备运行。\n✅ The frequency is 50.0 Hz.（频率为50.0赫兹。）—— 正常\n❌ The frequency is 48.5 Hz.（频率为48.5赫兹。）—— 偏差过大，需调整' },
    ],
    pattern: 'Please verify the + 设备 + output frequency.',
    patternExamples: [
      { en: 'Please verify the UPS output frequency.', cn: '请确认UPS输出频率。', words: [] },
      { en: 'Please verify the grid frequency.', cn: '请确认电网频率。', words: [] },
      { en: 'Please verify the frequency stability.', cn: '请确认频率稳定性。', words: [] },
    ],
    thinking: '柴发频率稳定性是并机运行的前提条件，频率不稳定会导致并机失败或设备损坏。\n马来西亚电网标准为50Hz，柴发输出必须匹配此频率。\n中文说「确认输出频率」，英语用 verify the output frequency。',
    pronunciation: 'frequency 重音在第一音节：FRE-quen-cy。\n节奏：Please VER-i-fy ｜ the GEN-er-a-tor ｜ OUT-put FRE-quen-cy.',
    quiz: [
      { q: '把「请确认柴油发电机输出频率。」用英语说出来。', a: 'Please verify the generator output frequency.' },
      { q: '「频率」用英语怎么说？', a: 'frequency (/ˈfriːkwənsi/)' },
    ],
  },
  {
    id: 2305,
    speaker: 'Engineer',
    en: 'All generators are operating normally.',
    cn: '所有柴油发电机运行正常。',
    ipa: '/ɔːl ˈdʒɛnəreɪtərz ɑːr ˈɑːpəˌreɪtɪŋ ˈnɔːrməli/',
    tags: ['第2305句', '柴油发电机', '★★★★★'],
    when: '柴发并机运行稳定后，工程师汇报所有柴发状态正常。',
    words: [
      { w: 'normally', ipa: '/ˈnɔːrməli/', pos: '副词', cn: '正常地', memory: 'normal(正常的)+ly(副词后缀)→正常地。', phonics: 'nor 读 /ˈnɔːr/，mal 读 /mə/，ly 读 /li/，重音在第一音节。', collocations: [['operating normally', '正常运行'], ['functioning normally', '正常工作'], ['behaving normally', '表现正常']], examples: [['All systems are operating normally.', '所有系统运行正常。'], ['The equipment is functioning normally.', '设备工作正常。']] },
    ],
    phrases: [
      { p: 'operating normally', ipa: '/ˈɑːpəˌreɪtɪŋ ˈnɔːrməli/', cn: '正常运行', why: 'normally 修饰 operating，描述柴发运行状态为正常。' },
      { p: 'All generators', ipa: '/ɔːl ˈdʒɛnəreɪtərz/', cn: '所有柴发', why: 'all 表示全部，强调没有一台柴发异常。' },
    ],
    grammar: [
      { q: '为什么用 are operating 而不是 operate？', a: 'are operating 是现在进行时，强调柴发此刻正在运行——当前实时状态。\noperate 是一般现在时，描述习惯性动作或客观事实。\n✅ All generators are operating normally.（所有柴发正在正常运行。）—— 当前状态\n✅ Diesel generators operate on diesel fuel.（柴发以柴油为燃料运行。）—— 客观事实' },
    ],
    pattern: 'All + 设备 + are operating normally.',
    patternExamples: [
      { en: 'All UPS systems are operating normally.', cn: '所有UPS运行正常。', words: [] },
      { en: 'All cooling units are operating normally.', cn: '所有制冷机组运行正常。', words: [] },
      { en: 'All fire suppression systems are operating normally.', cn: '所有消防系统运行正常。', words: [] },
    ],
    thinking: '柴发并机后需要逐一确认每台机组状态，最终汇总为「全部正常」。\noperating normally 是运维场景中最常用的状态汇报用语。\n中文说「运行正常」，英语用 operating normally。',
    pronunciation: 'normally 重音在第一音节：NOR-mal-ly。\n节奏：All GEN-er-a-tors ｜ are OP-er-a-ting ｜ NOR-mal-ly.',
    quiz: [
      { q: '把「所有柴油发电机运行正常。」用英语说出来。', a: 'All generators are operating normally.' },
      { q: '「运行正常」用英语怎么说？', a: 'operating normally' },
    ],
  },
  {
    id: 2306,
    speaker: 'Manager',
    en: 'The facility is now running on generator power.',
    cn: '园区目前由柴油发电机供电。',
    ipa: '/ðə fəˈsɪlɪti ɪz naʊ ˈrʌnɪŋ ɑːn ˈdʒɛnəreɪtər ˈpaʊər/',
    tags: ['第2306句', '柴油发电机', '★★★★★'],
    when: '柴发并机稳定供电后，值班经理向全体人员通报园区当前供电状态。',
    words: [
      { w: 'facility', ipa: '/fəˈsɪlɪti/', pos: '名词', cn: '设施；园区', memory: 'facil(容易的)+ity(名词后缀)→使事情容易进行的场所→设施。', phonics: 'fa 读 /fə/，cil 读 /ˈsɪl/，i 读 /ɪ/，ty 读 /ti/，重音在第二音节。', collocations: [['data center facility', '数据中心园区'], ['facility management', '设施管理'], ['facility power', '园区供电']], examples: [['The facility is fully operational.', '园区完全运行。'], ['Facility power has been restored.', '园区供电已恢复。']] },
      { w: 'generator power', ipa: '/ˈdʒɛnəreɪtər ˈpaʊər/', pos: '名词短语', cn: '柴发供电', memory: 'generator(发电机)+power(电力)→由发电机提供的电力。', phonics: 'generator 读 /ˈdʒɛnəreɪtər/，power 读 /ˈpaʊər/。', collocations: [['on generator power', '由柴发供电'], ['generator power supply', '柴发供电'], ['switch to generator power', '切换到柴发供电']], examples: [['We are on generator power now.', '我们现在由柴发供电。'], ['Switch to generator power.', '切换到柴发供电。']] },
    ],
    phrases: [
      { p: 'running on generator power', ipa: '/ˈrʌnɪŋ ɑːn ˈdʒɛnəreɪtər ˈpaʊər/', cn: '由柴发供电运行', why: 'run on 表示依靠某种能源运行，on 后接能源类型。' },
      { p: 'is now running', ipa: '/ɪz naʊ ˈrʌnɪŋ/', cn: '目前运行', why: 'now 强调当前状态，与之前市电供电形成对比。' },
    ],
    grammar: [
      { q: 'run on + 能源 是什么意思？', a: 'run on 表示「依靠…运行/运转」，on 后接能源类型。\n✅ The facility is running on generator power.（园区由柴发供电运行。）\n✅ The car runs on electricity.（这辆车靠电行驶。）\n✅ The UPS runs on battery.（UPS靠电池运行。）' },
    ],
    pattern: 'The facility is now running on + 供电方式',
    patternExamples: [
      { en: 'The facility is now running on UPS battery.', cn: '园区目前由UPS电池供电。', words: [] },
      { en: 'The facility is now running on utility power.', cn: '园区目前由市电供电。', words: [] },
      { en: 'The facility is now running on dual power sources.', cn: '园区目前由双路电源供电。', words: [] },
    ],
    thinking: '柴发供电是市电停电后的应急供电方式，需要明确通报当前供电状态。\nrunning on generator power 是标准的供电状态描述用语。\n中文说「由柴发供电」，英语用 running on generator power。',
    pronunciation: 'facility 重音在第二音节：fa-CIL-i-ty。\ngenerator 重音在第一音节：GEN-er-a-tor。\n节奏：The fa-CIL-i-ty ｜ is NOW RUN-ning ｜ on GEN-er-a-tor POW-er.',
    quiz: [
      { q: '把「园区目前由柴油发电机供电。」用英语说出来。', a: 'The facility is now running on generator power.' },
      { q: '「由柴发供电」用英语怎么说？', a: 'running on generator power' },
    ],
  },
  {
    id: 2307,
    speaker: 'Engineer',
    en: 'Utility Power Source A has been restored.',
    cn: 'A路市电已经恢复。',
    ipa: '/juːˈtɪlɪti ˈpaʊər sɔːrs eɪ hæz biːn rɪˈstɔːrd/',
    tags: ['第2307句', '市电恢复', '★★★★★'],
    when: '供电公司恢复A路供电后，值班工程师确认并汇报A路市电已恢复。',
    words: [
      { w: 'restored', ipa: '/rɪˈstɔːrd/', pos: '动词（过去分词）', cn: '恢复', memory: 're(再次)+store(储存)+d→再次储存回来→恢复。', phonics: 're 读 /rɪ/，stored 读 /stɔːrd/，重音在第二音节。', collocations: [['power restored', '供电恢复'], ['service restored', '服务恢复'], ['fully restored', '完全恢复']], examples: [['Power has been restored.', '供电已恢复。'], ['The service is fully restored.', '服务已完全恢复。']] },
      { w: 'utility', ipa: '/juːˈtɪlɪti/', pos: '名词', cn: '公共事业（此处指市电）', memory: 'util(有用)+ity(名词后缀)→有用的服务→公共事业。', phonics: 'u 读 /juː/，til 读 /ˈtɪl/，i 读 /ɪ/，ty 读 /ti/，重音在第二音节。', collocations: [['utility power', '市电'], ['utility company', '供电公司'], ['utility outage', '市电停电']], examples: [['Utility power is available.', '市电可用。'], ['Contact the utility company.', '联系供电公司。']] },
    ],
    phrases: [
      { p: 'has been restored', ipa: '/hæz biːn rɪˈstɔːrd/', cn: '已经恢复', why: '现在完成时被动语态，表示A路市电已经被（供电公司）恢复。' },
      { p: 'Utility Power Source A', ipa: '/juːˈtɪlɪti ˈpaʊər sɔːrs eɪ/', cn: 'A路市电', why: 'Source A 明确指定A路供电线路，数据中心通常有A/B双路市电。' },
    ],
    grammar: [
      { q: '为什么用 has been restored 而不是 has restored？', a: 'has been restored 是被动语态——市电是被供电公司恢复的，不是市电自己恢复。\nhas restored 是主动语态——主语必须是执行恢复动作的人或机构。\n✅ Utility Power Source A has been restored.（A路市电已恢复。）—— 被动\n✅ The utility company has restored power.（供电公司已恢复供电。）—— 主动' },
    ],
    pattern: 'Utility Power Source X has been restored.',
    patternExamples: [
      { en: 'Utility Power Source B has been restored.', cn: 'B路市电已经恢复。', words: [] },
      { en: 'Both utility power sources have been restored.', cn: '双路市电均已恢复。', words: [] },
      { en: 'The primary power source has been restored.', cn: '主路电源已经恢复。', words: [] },
    ],
    thinking: '市电恢复是停电应急流程的转折点，标志着从应急供电向正常供电过渡的开始。\nrestored 是运维场景中描述供电/服务恢复的标准用词。\n中文说「市电恢复」，英语用 utility power has been restored。',
    pronunciation: 'utility 重音在第二音节：u-TIL-i-ty。\nrestored 重音在第二音节：re-STORED。\n节奏：u-TIL-i-ty ｜ POW-er SOURCE A ｜ has been re-STORED.',
    quiz: [
      { q: '把「A路市电已经恢复。」用英语说出来。', a: 'Utility Power Source A has been restored.' },
      { q: '「恢复」用英语怎么说？', a: 'restore / restored (/rɪˈstɔːr/ / /rɪˈstɔːrd/)' },
    ],
  },
  {
    id: 2308,
    speaker: 'Engineer',
    en: 'Utility Power Source B has been restored.',
    cn: 'B路市电已经恢复。',
    ipa: '/juːˈtɪlɪti ˈpaʊər sɔːrs biː hæz biːn rɪˈstɔːrd/',
    tags: ['第2308句', '市电恢复', '★★★★★'],
    when: 'A路恢复后，供电公司继续恢复B路供电，工程师确认并汇报。',
    words: [
      { w: 'Source B', ipa: '/sɔːrs biː/', pos: '名词', cn: 'B路（电源）', memory: 'source(来源)+B→B路电源，与Source A对应。', phonics: 'source 读 /sɔːrs/，B 读 /biː/。', collocations: [['Power Source B', 'B路电源'], ['Source B failure', 'B路故障'], ['Source B available', 'B路可用']], examples: [['Source B is now available.', 'B路现在可用。'], ['Source B has failed.', 'B路已故障。']] },
    ],
    phrases: [
      { p: 'Utility Power Source B', ipa: '/juːˈtɪlɪti ˈpaʊər sɔːrs biː/', cn: 'B路市电', why: '与第2307句结构完全一致，仅将 A 替换为 B。' },
    ],
    grammar: [
      { q: 'A路和B路都恢复后怎么说？', a: '双路均恢复时使用复数形式：\n✅ Both utility power sources have been restored.（双路市电均已恢复。）\n✅ Utility Power Sources A and B have been restored.（A路和B路市电均已恢复。）\n注意主语变为复数时，助动词从 has 变为 have。' },
    ],
    pattern: 'Utility Power Source B has been restored.',
    patternExamples: [
      { en: 'Both utility power sources have been restored.', cn: '双路市电均已恢复。', words: [] },
      { en: 'Utility Power Sources A and B are both available.', cn: 'A路和B路市电均可用。', words: [] },
      { en: 'Dual utility power has been fully restored.', cn: '双路市电已完全恢复。', words: [] },
    ],
    thinking: '数据中心通常配备A/B双路市电，双路均恢复后才算市电供电完全正常。\n这句话与第2307句结构完全一致，仅替换电源编号。\n中文说「B路市电恢复」，英语用 Utility Power Source B has been restored。',
    pronunciation: '节奏：u-TIL-i-ty ｜ POW-er SOURCE B ｜ has been re-STORED.',
    quiz: [
      { q: '把「B路市电已经恢复。」用英语说出来。', a: 'Utility Power Source B has been restored.' },
      { q: '「双路市电均已恢复」用英语怎么说？', a: 'Both utility power sources have been restored.' },
    ],
  },
  {
    id: 2309,
    speaker: 'Manager',
    en: 'Please verify the utility voltage before transfer.',
    cn: '切换前请确认市电电压正常。',
    ipa: '/pliːz ˈvɛrɪfaɪ ðə juːˈtɪlɪti ˈvoʊltɪdʒ bɪˈfɔːr ˈtrænsfər/',
    tags: ['第2309句', '市电恢复', '★★★★★'],
    when: '市电恢复后、负载切回市电前，值班经理指示工程师确认市电电压在正常范围内。',
    words: [
      { w: 'before', ipa: '/bɪˈfɔːr/', pos: '介词/连词', cn: '在…之前', memory: 'be(在)+fore(前面)→在前面→在…之前。', phonics: 'be 读 /bɪ/，fore 读 /fɔːr/，重音在第二音节。', collocations: [['before transfer', '切换前'], ['before startup', '启动前'], ['before shutdown', '关机前']], examples: [['Check before operation.', '操作前检查。'], ['Verify before transfer.', '切换前确认。']] },
      { w: 'transfer', ipa: '/ˈtrænsfər/', pos: '名词', cn: '切换；转换', memory: 'trans(跨越)+fer(携带)→从一边带到另一边→切换。', phonics: 'trans 读 /træns/，fer 读 /fər/，重音在第一音节。', collocations: [['load transfer', '负载切换'], ['automatic transfer', '自动切换'], ['transfer switch', '转换开关']], examples: [['Prepare for load transfer.', '准备负载切换。'], ['The transfer was successful.', '切换成功。']] },
    ],
    phrases: [
      { p: 'before transfer', ipa: '/bɪˈfɔːr ˈtrænsfər/', cn: '切换前', why: 'before + 名词表示在执行某操作之前，transfer 指从柴发供电切回市电供电的操作。' },
      { p: 'utility voltage', ipa: '/juːˈtɪlɪti ˈvoʊltɪdʒ/', cn: '市电电压', why: 'utility 修饰 voltage，明确是市电侧的电压，而非柴发输出电压。' },
    ],
    grammar: [
      { q: 'before transfer 中的 transfer 是名词还是动词？', a: 'before transfer 中 transfer 是名词，before 是介词。\nbefore 后也可接从句：\n✅ Please verify before transfer.（切换前请确认。）—— 介词+名词\n✅ Please verify before you transfer the load.（在你切换负载之前请确认。）—— 连词+从句\n运维指令中用介词+名词更简洁。' },
    ],
    pattern: 'Please verify + 参数 + before + 操作',
    patternExamples: [
      { en: 'Please verify the frequency before synchronization.', cn: '同步前请确认频率。', words: [] },
      { en: 'Please verify the alarm status before handover.', cn: '交接前请确认告警状态。', words: [] },
      { en: 'Please verify the cooling capacity before loading.', cn: '加载前请确认制冷容量。', words: [] },
    ],
    thinking: '市电恢复后不能立即切回，必须先确认电压稳定在额定范围内，防止切换时设备受损。\ntransfer 是负载从柴发切回市电的关键操作。\n中文说「切换前确认」，英语用 verify...before transfer。',
    pronunciation: 'before 重音在第二音节：be-FORE。\ntransfer 重音在第一音节：TRANS-fer。\n节奏：Please VER-i-fy ｜ the u-TIL-i-ty VOLT-age ｜ be-FORE TRANS-fer.',
    quiz: [
      { q: '把「切换前请确认市电电压正常。」用英语说出来。', a: 'Please verify the utility voltage before transfer.' },
      { q: '「切换」用英语怎么说？', a: 'transfer (/ˈtrænsfər/)' },
    ],
  },
  {
    id: 2310,
    speaker: 'Manager',
    en: 'Please prepare to transfer the load back to utility power.',
    cn: '请准备将负载切回市电。',
    ipa: '/pliːz prɪˈpɛr tuː ˈtrænsfər ðə loʊd bæk tuː juːˈtɪlɪti ˈpaʊər/',
    tags: ['第2310句', '市电恢复', '★★★★★'],
    when: '市电电压确认正常后，值班经理指示工程师准备执行负载切换操作。',
    words: [
      { w: 'prepare', ipa: '/prɪˈpɛr/', pos: '动词', cn: '准备', memory: 'pre(提前)+pare(安排)→提前安排好→准备。', phonics: 'pre 读 /prɪ/，pare 读 /pɛr/，重音在第二音节。', collocations: [['prepare to transfer', '准备切换'], ['prepare for startup', '准备启动'], ['prepare the report', '准备报告']], examples: [['Please prepare for the transfer.', '请准备切换。'], ['We are prepared.', '我们已准备好。']] },
      { w: 'load', ipa: '/loʊd/', pos: '名词', cn: '负载；负荷', memory: 'load 原义为「装载」，在电力系统中指用电设备消耗的功率。', phonics: 'load 读 /loʊd/。', collocations: [['transfer the load', '切换负载'], ['critical load', '关键负载'], ['load shedding', '减载']], examples: [['The load is stable.', '负载稳定。'], ['Transfer the load to UPS.', '将负载切换到UPS。']] },
    ],
    phrases: [
      { p: 'transfer the load back to', ipa: '/ˈtrænsfər ðə loʊd bæk tuː/', cn: '将负载切回到', why: 'back 表示回到原来的供电方式（市电），因为停电前负载本来由市电供电。' },
      { p: 'prepare to transfer', ipa: '/prɪˈpɛr tuː ˈtrænsfər/', cn: '准备切换', why: 'prepare to + 动词原形，表示准备执行某个操作。' },
    ],
    grammar: [
      { q: 'prepare to + 动词 和 prepare for + 名词 有什么区别？', a: 'prepare to + 动词原形：准备做某事。\nprepare for + 名词：为某事做准备。\n✅ Please prepare to transfer the load.（请准备切换负载。）—— 准备执行动作\n✅ Please prepare for the load transfer.（请为负载切换做准备。）—— 为事件做准备\n两者在运维场景中都很常用。' },
    ],
    pattern: 'Please prepare to transfer the load back to + 供电方式',
    patternExamples: [
      { en: 'Please prepare to transfer the load back to the grid.', cn: '请准备将负载切回电网。', words: [] },
      { en: 'Please prepare to transfer the load to UPS.', cn: '请准备将负载切换到UPS。', words: [] },
      { en: 'Please prepare to transfer the load to generator power.', cn: '请准备将负载切换到柴发供电。', words: [] },
    ],
    thinking: '负载切回市电是停电恢复流程的关键步骤，需要在确认市电电压正常后才能执行。\nback to 强调回到原来的供电方式，体现恢复的含义。\n中文说「切回市电」，英语用 transfer the load back to utility power。',
    pronunciation: 'prepare 重音在第二音节：pre-PARE。\ntransfer 重音在第一音节：TRANS-fer。\n节奏：Please pre-PARE ｜ to TRANS-fer the LOAD ｜ BACK to u-TIL-i-ty POW-er.',
    quiz: [
      { q: '把「请准备将负载切回市电。」用英语说出来。', a: 'Please prepare to transfer the load back to utility power.' },
      { q: '「将负载切回」用英语怎么说？', a: 'transfer the load back to' },
    ],
  },
  {
    id: 2311,
    speaker: 'Engineer',
    en: 'The load has been transferred successfully.',
    cn: '负载已经成功切回市电。',
    ipa: '/ðə loʊd hæz biːn ˈtrænsfərd səkˈsɛsfəli/',
    tags: ['第2311句', '市电恢复', '★★★★★'],
    when: '负载切换操作完成后，工程师汇报切换成功。',
    words: [
      { w: 'transferred', ipa: '/ˈtrænsfərd/', pos: '动词（过去分词）', cn: '已切换；已转移', memory: 'trans(跨越)+fer(携带)+red→已经带过去了→已切换。', phonics: 'trans 读 /træns/，ferred 读 /fərd/，重音在第一音节。', collocations: [['load transferred', '负载已切换'], ['successfully transferred', '成功切换']], examples: [['The load has been transferred.', '负载已切换。'], ['Power has been transferred to utility.', '供电已切回市电。']] },
    ],
    phrases: [
      { p: 'has been transferred successfully', ipa: '/hæz biːn ˈtrænsfərd səkˈsɛsfəli/', cn: '已成功切换', why: '现在完成时被动语态 + successfully 副词，表示切换操作已成功完成。' },
    ],
    grammar: [
      { q: '为什么用 has been transferred 而不是 has transferred？', a: 'has been transferred 是被动语态——负载是被操作人员切换的。\nhas transferred 是主动语态——主语是执行切换的人。\n✅ The load has been transferred successfully.（负载已成功切换。）—— 被动\n✅ The engineer has transferred the load.（工程师已切换负载。）—— 主动' },
    ],
    pattern: 'The load has been transferred successfully.',
    patternExamples: [
      { en: 'The load has been transferred to utility power.', cn: '负载已切回市电。', words: [] },
      { en: 'The load has been transferred to UPS battery.', cn: '负载已切到UPS电池。', words: [] },
      { en: 'All loads have been transferred successfully.', cn: '所有负载已成功切换。', words: [] },
    ],
    thinking: '负载切换成功后需要立即汇报，确认所有关键设备已恢复由市电供电。\ntransferred 是 transfer 的过去分词形式，注意双写 r。\n中文说「负载已切回」，英语用 the load has been transferred。',
    pronunciation: 'transferred 重音在第一音节：TRANS-ferred。\n节奏：The LOAD ｜ has been TRANS-ferred ｜ suc-CESS-ful-ly.',
    quiz: [
      { q: '把「负载已经成功切回市电。」用英语说出来。', a: 'The load has been transferred successfully.' },
      { q: '「负载已切换」用英语怎么说？', a: 'The load has been transferred.' },
    ],
  },
  {
    id: 2312,
    speaker: 'Engineer',
    en: 'The UPS systems have returned to normal mode.',
    cn: 'UPS已经恢复正常运行模式。',
    ipa: '/ðə ˌjuː-piː-ˈɛs ˈsɪstəmz hæv rɪˈtɜːrnd tuː ˈnɔːrməl moʊd/',
    tags: ['第2312句', '市电恢复', '★★★★★'],
    when: '负载切回市电后，UPS自动从电池模式切回正常在线模式，工程师确认并汇报。',
    words: [
      { w: 'returned', ipa: '/rɪˈtɜːrnd/', pos: '动词（过去分词）', cn: '恢复；返回', memory: 're(再次)+turn(转)+ed→再次转回来→恢复。', phonics: 're 读 /rɪ/，turned 读 /tɜːrnd/，重音在第二音节。', collocations: [['returned to normal', '恢复正常'], ['returned to online mode', '恢复到在线模式']], examples: [['UPS has returned to normal.', 'UPS已恢复正常。'], ['The system has returned to online mode.', '系统已恢复到在线模式。']] },
      { w: 'normal mode', ipa: '/ˈnɔːrməl moʊd/', pos: '名词短语', cn: '正常模式', memory: 'normal(正常的)+mode(模式)→正常运行模式。', phonics: 'normal 读 /ˈnɔːrməl/，mode 读 /moʊd/。', collocations: [['normal mode', '正常模式'], ['battery mode', '电池模式'], ['bypass mode', '旁路模式']], examples: [['UPS is in normal mode.', 'UPS处于正常模式。'], ['Switch to normal mode.', '切换到正常模式。']] },
    ],
    phrases: [
      { p: 'have returned to normal mode', ipa: '/hæv rɪˈtɜːrnd tuː ˈnɔːrməl moʊd/', cn: '已恢复正常运行模式', why: 'return to 表示回到之前的状态，normal mode 指UPS的标准在线供电模式。' },
    ],
    grammar: [
      { q: 'return to 和 restore 有什么区别？', a: 'return to 强调「回到某个状态」，主语自己回到。\nrestore 强调「被恢复到」，通常是被动语态。\n✅ UPS has returned to normal mode.（UPS已恢复正常模式。）—— 自主回归\n✅ The service has been restored.（服务已恢复。）—— 被动恢复\nUPS切回正常模式是自动过程，用 return to 更自然。' },
    ],
    pattern: 'The + 系统 + have/has returned to normal mode.',
    patternExamples: [
      { en: 'The cooling system has returned to normal mode.', cn: '制冷系统已恢复正常运行模式。', words: [] },
      { en: 'All systems have returned to normal mode.', cn: '所有系统已恢复正常运行模式。', words: [] },
      { en: 'The fire alarm system has returned to normal mode.', cn: '消防报警系统已恢复正常运行模式。', words: [] },
    ],
    thinking: '市电恢复后，UPS从电池模式自动切回在线模式，这是标准的恢复流程。\nnormal mode 是UPS的标准运行状态——市电直接供电同时给电池充电。\n中文说「恢复正常模式」，英语用 returned to normal mode。',
    pronunciation: 'returned 重音在第二音节：re-TURNED。\nnormal 重音在第一音节：NOR-mal。\n节奏：The UPS SYS-tems ｜ have re-TURNED ｜ to NOR-mal MODE.',
    quiz: [
      { q: '把「UPS已经恢复正常运行模式。」用英语说出来。', a: 'The UPS systems have returned to normal mode.' },
      { q: '「恢复正常模式」用英语怎么说？', a: 'returned to normal mode' },
    ],
  },
  {
    id: 2313,
    speaker: 'Engineer',
    en: 'The generators have completed the cool-down cycle.',
    cn: '柴油发电机已经完成冷却运行。',
    ipa: '/ðə ˈdʒɛnəreɪtərz hæv kəmˈpliːtɪd ðə kuːl daʊn ˈsaɪkəl/',
    tags: ['第2313句', '市电恢复', '★★★★★'],
    when: '负载切回市电后，柴发进入冷却运行阶段（空载运行一段时间散热），完成后工程师汇报。',
    words: [
      { w: 'cool-down', ipa: '/kuːl daʊn/', pos: '名词/形容词', cn: '冷却（运行）', memory: 'cool(冷却)+down(下来)→温度降下来→冷却。', phonics: 'cool 读 /kuːl/，down 读 /daʊn/。', collocations: [['cool-down cycle', '冷却运行周期'], ['cool-down period', '冷却期'], ['cool-down timer', '冷却计时器']], examples: [['The cool-down cycle is 5 minutes.', '冷却运行周期为5分钟。'], ['Wait for cool-down to complete.', '等待冷却完成。']] },
      { w: 'cycle', ipa: '/ˈsaɪkəl/', pos: '名词', cn: '周期；循环', memory: 'cycle 源自希腊语 kyklos(圆)→一圈→周期。', phonics: 'cy 读 /ˈsaɪ/，cle 读 /kəl/，重音在第一音节。', collocations: [['cool-down cycle', '冷却周期'], ['duty cycle', '占空比'], ['operating cycle', '运行周期']], examples: [['The cycle has completed.', '周期已完成。'], ['Start a new cycle.', '开始新周期。']] },
    ],
    phrases: [
      { p: 'cool-down cycle', ipa: '/kuːl daʊn ˈsaɪkəl/', cn: '冷却运行周期', why: '柴发停机前需要空载运行一段时间让发动机逐渐降温，这个过程叫 cool-down cycle。' },
      { p: 'have completed', ipa: '/hæv kəmˈpliːtɪd/', cn: '已经完成', why: '现在完成时，表示冷却运行已经全部完成。' },
    ],
    grammar: [
      { q: '为什么柴发不能直接停机而要冷却运行？', a: '柴发在高温高负载运行后直接停机会导致发动机热应力损伤。\ncool-down cycle 是空载运行5-15分钟，让发动机逐渐降温。\n✅ The generators have completed the cool-down cycle.（柴发已完成冷却运行。）—— 可以停机\n❌ The generators stopped immediately.（柴发立即停机。）—— 不规范操作' },
    ],
    pattern: 'The generators have completed the cool-down cycle.',
    patternExamples: [
      { en: 'Generator No.1 has completed the cool-down cycle.', cn: '1号柴发已完成冷却运行。', words: [] },
      { en: 'All generators have completed cool-down.', cn: '所有柴发已完成冷却。', words: [] },
      { en: 'The cool-down cycle is now complete.', cn: '冷却运行周期现在已完成。', words: [] },
    ],
    thinking: '冷却运行是柴发停机前的必要步骤，保护发动机免受热冲击。\ncool-down cycle 是数据中心柴发操作的标准术语。\n中文说「冷却运行」，英语用 cool-down cycle。',
    pronunciation: 'cool-down 重音在第一音节：COOL-down。\ncycle 重音在第一音节：CY-cle。\n节奏：The GEN-er-a-tors ｜ have com-PLE-ted ｜ the COOL-down CY-cle.',
    quiz: [
      { q: '把「柴油发电机已经完成冷却运行。」用英语说出来。', a: 'The generators have completed the cool-down cycle.' },
      { q: '「冷却运行」用英语怎么说？', a: 'cool-down cycle (/kuːl daʊn ˈsaɪkəl/)' },
    ],
  },
  {
    id: 2314,
    speaker: 'Engineer',
    en: 'The generators have stopped automatically.',
    cn: '柴油发电机已经自动停机。',
    ipa: '/ðə ˈdʒɛnəreɪtərz hæv stɑːpt ˌɔːtəˈmætɪkli/',
    tags: ['第2314句', '市电恢复', '★★★★★'],
    when: '冷却运行完成后，柴发控制系统自动执行停机程序，工程师确认并汇报。',
    words: [
      { w: 'stopped', ipa: '/stɑːpt/', pos: '动词（过去分词）', cn: '停机；停止', memory: 'stop(停止)+ped→已停止。', phonics: 'stop 读 /stɑːp/，ped 读 /pt/，重音在第一音节。', collocations: [['stopped automatically', '自动停机'], ['emergency stop', '紧急停机'], ['stop command', '停机命令']], examples: [['The generator has stopped.', '柴发已停机。'], ['Emergency stop activated.', '紧急停机已启动。']] },
      { w: 'automatically', ipa: '/ˌɔːtəˈmætɪkli/', pos: '副词', cn: '自动地', memory: 'auto(自我)+matic(形容词后缀)+ally(副词后缀)→自我运作地→自动地。', phonics: 'au 读 /ˌɔː/，to 读 /tə/，mat 读 /ˈmæt/，i 读 /ɪ/，cal 读 /kəl/，ly 读 /li/，重音在第三音节。', collocations: [['started automatically', '自动启动'], ['stopped automatically', '自动停机'], ['transferred automatically', '自动切换']], examples: [['The system started automatically.', '系统自动启动。'], ['The transfer happened automatically.', '切换自动完成。']] },
    ],
    phrases: [
      { p: 'have stopped automatically', ipa: '/hæv stɑːpt ˌɔːtəˈmætɪkli/', cn: '已自动停机', why: 'automatically 修饰 stopped，强调停机是控制系统自动执行的，无需人工操作。' },
    ],
    grammar: [
      { q: 'automatically 放在句末和句中有什么区别？', a: '位置不影响基本含义，但语气略有不同。\n句末：The generators have stopped automatically.（柴发已自动停机。）—— 陈述事实\n句中：The generators have automatically stopped.（柴发已自动停机。）—— 强调自动性\n运维汇报中通常放在句末，更自然。' },
    ],
    pattern: 'The generators have stopped automatically.',
    patternExamples: [
      { en: 'Generator No.1 has stopped automatically.', cn: '1号柴发已自动停机。', words: [] },
      { en: 'All generators have stopped.', cn: '所有柴发已停机。', words: [] },
      { en: 'The backup generator has stopped automatically.', cn: '备用柴发已自动停机。', words: [] },
    ],
    thinking: '柴发自动停机标志着市电停电应急流程基本结束，园区已完全恢复市电供电。\nautomatically 强调这是控制系统的标准操作，不是人工干预。\n中文说「自动停机」，英语用 stopped automatically。',
    pronunciation: 'automatically 重音在第三音节：au-to-MAT-i-cal-ly。\n节奏：The GEN-er-a-tors ｜ have STOPPED ｜ au-to-MAT-i-cal-ly.',
    quiz: [
      { q: '把「柴油发电机已经自动停机。」用英语说出来。', a: 'The generators have stopped automatically.' },
      { q: '「自动停机」用英语怎么说？', a: 'stopped automatically' },
    ],
  },
  {
    id: 2315,
    speaker: 'Manager',
    en: 'Please inspect all critical equipment.',
    cn: '请检查所有关键设备。',
    ipa: '/pliːz ɪnˈspɛkt ɔːl ˈkrɪtɪkəl ɪˈkwɪpmənt/',
    tags: ['第2315句', '收尾工作', '★★★★★'],
    when: '市电恢复、柴发停机后，值班经理指示工程师对所有关键设备进行巡检。',
    words: [
      { w: 'inspect', ipa: '/ɪnˈspɛkt/', pos: '动词', cn: '检查；巡检', memory: 'in(进入)+spect(看)→仔细看→检查。', phonics: 'in 读 /ɪn/，spect 读 /spɛkt/，重音在第二音节。', collocations: [['inspect equipment', '检查设备'], ['inspect the site', '巡检现场'], ['visual inspection', '目视检查']], examples: [['Please inspect the equipment.', '请检查设备。'], ['The inspection is complete.', '巡检已完成。']] },
      { w: 'critical equipment', ipa: '/ˈkrɪtɪkəl ɪˈkwɪpmənt/', pos: '名词短语', cn: '关键设备', memory: 'critical(关键的)+equipment(设备)→对业务至关重要的设备。', phonics: 'critical 读 /ˈkrɪtɪkəl/，equipment 读 /ɪˈkwɪpmənt/。', collocations: [['critical equipment', '关键设备'], ['critical systems', '关键系统'], ['critical infrastructure', '关键基础设施']], examples: [['Inspect all critical equipment.', '检查所有关键设备。'], ['Critical equipment is operational.', '关键设备运行正常。']] },
    ],
    phrases: [
      { p: 'all critical equipment', ipa: '/ɔːl ˈkrɪtɪkəl ɪˈkwɪpmənt/', cn: '所有关键设备', why: 'all 强调全面检查，不遗漏任何关键设备。' },
    ],
    grammar: [
      { q: 'inspect 和 check 有什么区别？', a: 'inspect 更正式、更系统化，通常指按照标准流程逐项检查。\ncheck 更口语化，指快速确认。\n✅ Please inspect all critical equipment.（请检查所有关键设备。）—— 系统化巡检\n✅ Please check the UPS status.（请查看UPS状态。）—— 快速确认\n停电恢复后的检查应该用 inspect，因为需要系统性确认每台设备状态。' },
    ],
    pattern: 'Please inspect all + 设备类型',
    patternExamples: [
      { en: 'Please inspect all UPS systems.', cn: '请检查所有UPS系统。', words: [] },
      { en: 'Please inspect all switchgear.', cn: '请检查所有配电柜。', words: [] },
      { en: 'Please inspect all cooling equipment.', cn: '请检查所有制冷设备。', words: [] },
    ],
    thinking: '市电停电和恢复过程中，设备经历了多次电源切换，需要检查是否有设备受损或异常。\ninspect 体现系统性的检查流程，比 check 更专业。\n中文说「检查关键设备」，英语用 inspect critical equipment。',
    pronunciation: 'inspect 重音在第二音节：in-SPECT。\ncritical 重音在第一音节：CRIT-i-cal。\nequipment 重音在第二音节：e-QUIP-ment。\n节奏：Please in-SPECT ｜ all CRIT-i-cal ｜ e-QUIP-ment.',
    quiz: [
      { q: '把「请检查所有关键设备。」用英语说出来。', a: 'Please inspect all critical equipment.' },
      { q: '「检查」用英语怎么说（正式）？', a: 'inspect (/ɪnˈspɛkt/)' },
    ],
  },
  {
    id: 2316,
    speaker: 'Engineer',
    en: 'No abnormalities have been found after power restoration.',
    cn: '恢复供电后未发现异常。',
    ipa: '/noʊ ˌæbnɔːrˈmælɪtiz hæv biːn faʊnd ˈæftər ˈpaʊər ˌrɛstəˈreɪʃən/',
    tags: ['第2316句', '收尾工作', '★★★★★'],
    when: '工程师完成设备巡检后，汇报未发现任何异常情况。',
    words: [
      { w: 'abnormalities', ipa: '/ˌæbnɔːrˈmælɪtiz/', pos: '名词（复数）', cn: '异常；不正常情况', memory: 'ab(不)+normal(正常的)+ities(名词复数)→不正常的事物→异常。', phonics: 'ab 读 /ˌæb/，nor 读 /nɔːr/，mal 读 /mæl/，i 读 /ɪ/，ties 读 /tiz/，重音在第三音节。', collocations: [['no abnormalities', '无异常'], ['abnormalities detected', '检测到异常'], ['report abnormalities', '报告异常']], examples: [['No abnormalities found.', '未发现异常。'], ['Several abnormalities were detected.', '检测到几处异常。']] },
      { w: 'restoration', ipa: '/ˌrɛstəˈreɪʃən/', pos: '名词', cn: '恢复', memory: 'restore(恢复)+ation(名词后缀)→恢复的行为或过程。', phonics: 'res 读 /ˌrɛs/，to 读 /tə/，ra 读 /ˈreɪ/，tion 读 /ʃən/，重音在第三音节。', collocations: [['power restoration', '供电恢复'], ['service restoration', '服务恢复'], ['restoration time', '恢复时间']], examples: [['Power restoration is complete.', '供电恢复已完成。'], ['After restoration, check all systems.', '恢复后检查所有系统。']] },
    ],
    phrases: [
      { p: 'No abnormalities have been found', ipa: '/noʊ ˌæbnɔːrˈmælɪtiz hæv biːn faʊnd/', cn: '未发现异常', why: 'No + 名词 + have been found 是标准的巡检结果汇报句型。' },
      { p: 'after power restoration', ipa: '/ˈæftər ˈpaʊər ˌrɛstəˈreɪʃən/', cn: '恢复供电后', why: 'after + 名词短语，明确时间节点为供电恢复之后。' },
    ],
    grammar: [
      { q: 'No...have been found 是什么结构？', a: 'No + 复数名词 + have been found 是现在完成时被动语态的否定形式。\n✅ No abnormalities have been found.（未发现异常。）—— 复数主语用 have\n✅ No abnormality has been found.（未发现异常。）—— 单数主语用 has\n运维场景中 abnormalities 通常用复数，因为可能需要检查多个方面。' },
    ],
    pattern: 'No + 问题 + have been found after + 事件',
    patternExamples: [
      { en: 'No damage has been found after the power surge.', cn: '电压浪涌后未发现损坏。', words: [] },
      { en: 'No alarms have been found after the system restart.', cn: '系统重启后未发现告警。', words: [] },
      { en: 'No issues have been found after the maintenance.', cn: '维护后未发现问题。', words: [] },
    ],
    thinking: '巡检结果是收尾工作的重要环节，需要明确汇报「未发现异常」以确认设备安全。\nabnormalities 是运维场景中描述设备异常的标准术语。\n中文说「未发现异常」，英语用 no abnormalities have been found。',
    pronunciation: 'abnormalities 重音在第三音节：ab-nor-MAL-i-ties。\nrestoration 重音在第三音节：res-to-RA-tion。\n节奏：No ab-nor-MAL-i-ties ｜ have been FOUND ｜ AF-ter POW-er ｜ res-to-RA-tion.',
    quiz: [
      { q: '把「恢复供电后未发现异常。」用英语说出来。', a: 'No abnormalities have been found after power restoration.' },
      { q: '「异常」用英语怎么说？', a: 'abnormality / abnormalities (/ˌæbnɔːrˈmælɪti/ / /ˌæbnɔːrˈmælɪtiz/)' },
    ],
  },
  {
    id: 2317,
    speaker: 'Manager',
    en: 'Please record the outage duration.',
    cn: '请记录停电持续时间。',
    ipa: '/pliːz rɪˈkɔːrd ði ˈaʊtɪdʒ dʊˈreɪʃən/',
    tags: ['第2317句', '收尾工作', '★★★★★'],
    when: '事件收尾阶段，值班经理指示工程师记录本次停电的持续时间，用于事件报告和SLA统计。',
    words: [
      { w: 'record', ipa: '/rɪˈkɔːrd/', pos: '动词', cn: '记录', memory: 're(再次)+cord(心)→再次记在心里→记录。', phonics: 're 读 /rɪ/，cord 读 /kɔːrd/，重音在第二音节。注意：名词 record 重音在第一音节 /ˈrɛkərd/。', collocations: [['record the duration', '记录持续时间'], ['record the incident', '记录事件'], ['record the data', '记录数据']], examples: [['Please record the time.', '请记录时间。'], ['The incident was recorded.', '事件已记录。']] },
      { w: 'outage', ipa: '/ˈaʊtɪdʒ/', pos: '名词', cn: '停电；中断', memory: 'out(出去)+age(名词后缀)→电力出去了→停电。', phonics: 'out 读 /aʊt/，age 读 /ɪdʒ/，重音在第一音节。', collocations: [['power outage', '停电'], ['outage duration', '停电持续时间'], ['planned outage', '计划停电']], examples: [['The outage lasted 30 minutes.', '停电持续了30分钟。'], ['Report the outage.', '报告停电事件。']] },
      { w: 'duration', ipa: '/dʊˈreɪʃən/', pos: '名词', cn: '持续时间', memory: 'dur(持续)+ation(名词后缀)→持续的时间。', phonics: 'du 读 /dʊ/，ra 读 /ˈreɪ/，tion 读 /ʃən/，重音在第二音节。', collocations: [['outage duration', '停电持续时间'], ['response duration', '响应时间'], ['short duration', '短时间']], examples: [['What was the duration?', '持续了多长时间？'], ['The duration was 45 minutes.', '持续时间为45分钟。']] },
    ],
    phrases: [
      { p: 'outage duration', ipa: '/ˈaʊtɪdʒ dʊˈreɪʃən/', cn: '停电持续时间', why: 'outage 修饰 duration，明确是停电事件的持续时间，用于SLA计算。' },
    ],
    grammar: [
      { q: 'record 作动词和名词时发音一样吗？', a: '不一样！这是英语中常见的重音转移现象。\n动词 record：重音在第二音节 /rɪˈkɔːrd/（记录）\n名词 record：重音在第一音节 /ˈrɛkərd/（记录/唱片）\n✅ Please record (/rɪˈkɔːrd/) the outage duration.（请记录停电持续时间。）—— 动词\n✅ This is the record (/ˈrɛkərd/) of the outage.（这是停电记录。）—— 名词' },
    ],
    pattern: 'Please record the + 事件 + duration.',
    patternExamples: [
      { en: 'Please record the response duration.', cn: '请记录响应时间。', words: [] },
      { en: 'Please record the repair duration.', cn: '请记录维修持续时间。', words: [] },
      { en: 'Please record the total downtime duration.', cn: '请记录总停机时间。', words: [] },
    ],
    thinking: '停电持续时间是事件报告和SLA考核的关键数据，必须准确记录。\noutage 是数据中心描述停电事件的标准术语。\n中文说「记录停电持续时间」，英语用 record the outage duration。',
    pronunciation: 'record（动词）重音在第二音节：re-CORD。\noutage 重音在第一音节：OUT-age。\nduration 重音在第二音节：du-RA-tion。\n节奏：Please re-CORD ｜ the OUT-age ｜ du-RA-tion.',
    quiz: [
      { q: '把「请记录停电持续时间。」用英语说出来。', a: 'Please record the outage duration.' },
      { q: '「停电」用英语怎么说？', a: 'outage (/ˈaʊtɪdʒ/)' },
    ],
  },
  {
    id: 2318,
    speaker: 'Manager',
    en: 'Please complete the incident report.',
    cn: '请完成事件报告。',
    ipa: '/pliːz kəmˈpliːt ði ˈɪnsɪdənt rɪˈpɔːrt/',
    tags: ['第2318句', '收尾工作', '★★★★★'],
    when: '收尾阶段，值班经理指示工程师撰写并完善本次市电停电事件的完整报告。',
    words: [
      { w: 'complete', ipa: '/kəmˈpliːt/', pos: '动词', cn: '完成', memory: 'com(完全)+plete(满)→完全填满→完成。', phonics: 'com 读 /kəm/，plete 读 /pliːt/，重音在第二音节。', collocations: [['complete the report', '完成报告'], ['complete the form', '完成表格'], ['complete the task', '完成任务']], examples: [['Please complete the report by Friday.', '请在周五前完成报告。'], ['The report is complete.', '报告已完成。']] },
      { w: 'incident report', ipa: '/ˈɪnsɪdənt rɪˈpɔːrt/', pos: '名词短语', cn: '事件报告', memory: 'incident(事件)+report(报告)→记录事件经过和处理过程的报告。', phonics: 'incident 读 /ˈɪnsɪdənt/，report 读 /rɪˈpɔːrt/。', collocations: [['incident report', '事件报告'], ['incident summary', '事件摘要'], ['incident timeline', '事件时间线']], examples: [['Submit the incident report.', '提交事件报告。'], ['The incident report is ready.', '事件报告已准备好。']] },
    ],
    phrases: [
      { p: 'incident report', ipa: '/ˈɪnsɪdənt rɪˈpɔːrt/', cn: '事件报告', why: '数据中心标准文档，记录事件从发生到关闭的全过程。' },
    ],
    grammar: [
      { q: 'complete 和 finish 有什么区别？', a: 'complete 更正式，强调完整地做完所有部分。\nfinish 更口语化，强调做到结束。\n✅ Please complete the incident report.（请完成事件报告。）—— 正式，强调内容完整\n✅ I finished the report.（我做完了报告。）—— 口语，强调做完了\n事件报告是正式文档，用 complete 更合适。' },
    ],
    pattern: 'Please complete the + 文档名称',
    patternExamples: [
      { en: 'Please complete the RCA report.', cn: '请完成RCA报告。', words: [] },
      { en: 'Please complete the handover checklist.', cn: '请完成交接检查清单。', words: [] },
      { en: 'Please complete the maintenance record.', cn: '请完成维护记录。', words: [] },
    ],
    thinking: '事件报告是停电事件收尾的核心文档，需要记录时间线、处理过程、影响范围和后续改进措施。\nincident report 是数据中心标准术语。\n中文说「完成事件报告」，英语用 complete the incident report。',
    pronunciation: 'complete 重音在第二音节：com-PLETE。\nincident 重音在第一音节：IN-ci-dent。\nreport 重音在第二音节：re-PORT。\n节奏：Please com-PLETE ｜ the IN-ci-dent ｜ re-PORT.',
    quiz: [
      { q: '把「请完成事件报告。」用英语说出来。', a: 'Please complete the incident report.' },
      { q: '「事件报告」用英语怎么说？', a: 'incident report (/ˈɪnsɪdənt rɪˈpɔːrt/)' },
    ],
  },
  {
    id: 2319,
    speaker: 'Manager',
    en: 'Please notify all customers that utility power has been restored.',
    cn: '请通知所有客户市电已经恢复。',
    ipa: '/pliːz ˈnoʊtɪfaɪ ɔːl ˈkʌstəmərðz ðæt juːˈtɪlɪti ˈpaʊər hæz biːn rɪˈstɔːrd/',
    tags: ['第2319句', '收尾工作', '★★★★★'],
    when: '收尾阶段，值班经理指示客服团队向所有受影响客户发送市电恢复通知。',
    words: [
      { w: 'notify', ipa: '/ˈnoʊtɪfaɪ/', pos: '动词', cn: '通知', memory: 'not(标记)+ify(使)→使被标记→通知。', phonics: 'no 读 /ˈnoʊ/，ti 读 /tɪ/，fy 读 /ˌfaɪ/，重音在第一音节。', collocations: [['notify customers', '通知客户'], ['notify immediately', '立即通知'], ['notify the team', '通知团队']], examples: [['Please notify the customers.', '请通知客户。'], ['All customers have been notified.', '所有客户已通知。']] },
      { w: 'that', ipa: '/ðæt/', pos: '连词', cn: '（引导宾语从句）', memory: 'that 引导宾语从句，说明通知的具体内容。', phonics: 'that 读 /ðæt/。', collocations: [['notify that...', '通知…'], ['confirm that...', '确认…'], ['report that...', '报告…']], examples: [['Notify them that power is restored.', '通知他们供电已恢复。'], ['Confirm that the issue is resolved.', '确认问题已解决。']] },
    ],
    phrases: [
      { p: 'notify all customers that...', ipa: '/ˈnoʊtɪfaɪ ɔːl ˈkʌstəmərðz ðæt/', cn: '通知所有客户…', why: 'notify + 对象 + that + 内容，是标准的通知句型。' },
      { p: 'utility power has been restored', ipa: '/juːˈtɪlɪti ˈpaʊər hæz biːn rɪˈstɔːrd/', cn: '市电已恢复', why: 'that 从句中的内容，即通知客户的具体信息。' },
    ],
    grammar: [
      { q: 'notify + 对象 + that + 内容 是什么句型？', a: '这是英语中标准的通知/告知句型：动词 + 间接宾语 + that 从句。\n✅ Notify customers that power is restored.（通知客户供电已恢复。）\n✅ Inform the team that the issue is resolved.（告知团队问题已解决。）\n✅ Tell the manager that the report is ready.（告诉经理报告已准备好。）\nnotify 比 inform 更正式，比 tell 更专业。' },
    ],
    pattern: 'Please notify + 对象 + that + 内容',
    patternExamples: [
      { en: 'Please notify all customers that the incident is closed.', cn: '请通知所有客户事件已关闭。', words: [] },
      { en: 'Please notify the management that the issue is resolved.', cn: '请通知管理层问题已解决。', words: [] },
      { en: 'Please notify the vendor that the repair is complete.', cn: '请通知供应商维修已完成。', words: [] },
    ],
    thinking: '市电恢复后及时通知客户是数据中心运营的标准流程，体现专业的客户服务。\nnotify...that 是通知类沟通的标准句型。\n中文说「通知客户…」，英语用 notify customers that...。',
    pronunciation: 'notify 重音在第一音节：NO-ti-fy。\ncustomers 重音在第一音节：CUS-to-mers。\n节奏：Please NO-ti-fy ｜ all CUS-to-mers ｜ that u-TIL-i-ty POW-er ｜ has been re-STORED.',
    quiz: [
      { q: '把「请通知所有客户市电已经恢复。」用英语说出来。', a: 'Please notify all customers that utility power has been restored.' },
      { q: '「通知客户…」用英语怎么说？', a: 'notify customers that...' },
    ],
  },
  {
    id: 2320,
    speaker: 'Manager',
    en: 'The utility power incident has been closed successfully.',
    cn: '本次市电停电事件已经顺利结束。',
    ipa: '/ðə juːˈtɪlɪti ˈpaʊər ˈɪnsɪdənt hæz biːn kloʊzd səkˈsɛsfəli/',
    tags: ['第2320句', '收尾工作', '★★★★★'],
    when: '所有收尾工作完成后，值班经理正式宣布本次市电停电事件关闭。',
    words: [
      { w: 'closed', ipa: '/kloʊzd/', pos: '动词（过去分词）', cn: '关闭；结案', memory: 'close(关闭)+d→已关闭。在事件管理中指事件正式结案。', phonics: 'close 读 /kloʊz/，d 读 /d/，重音在第一音节。', collocations: [['incident closed', '事件已关闭'], ['ticket closed', '工单已关闭'], ['successfully closed', '顺利关闭']], examples: [['The incident has been closed.', '事件已关闭。'], ['The ticket is now closed.', '工单现已关闭。']] },
    ],
    phrases: [
      { p: 'has been closed successfully', ipa: '/hæz biːn kloʊzd səkˈsɛsfəli/', cn: '已顺利关闭', why: '现在完成时被动语态 + successfully，表示事件已经成功结案。' },
      { p: 'utility power incident', ipa: '/juːˈtɪlɪti ˈpaʊər ˈɪnsɪdənt/', cn: '市电停电事件', why: '名词链修饰，明确事件类型为市电停电。' },
    ],
    grammar: [
      { q: '事件关闭用 close 还是 close down？', a: 'close 用于事件/工单管理，表示正式结案。\nclose down 用于关闭企业/系统/设施。\n✅ The incident has been closed.（事件已关闭/结案。）—— 事件管理\n✅ The system has been closed down.（系统已关停。）—— 系统关停\n事件关闭用 close 即可。' },
    ],
    pattern: 'The + 事件类型 + incident has been closed successfully.',
    patternExamples: [
      { en: 'The power outage incident has been closed successfully.', cn: '停电事件已顺利关闭。', words: [] },
      { en: 'The cooling failure incident has been closed.', cn: '制冷故障事件已关闭。', words: [] },
      { en: 'All incidents have been closed successfully.', cn: '所有事件已顺利关闭。', words: [] },
    ],
    thinking: '事件关闭是应急流程的最终步骤，标志着从事件发生到完全恢复的全过程结束。\nclosed 在事件管理中是标准术语，表示正式结案。\n中文说「事件顺利结束」，英语用 the incident has been closed successfully。',
    pronunciation: 'incident 重音在第一音节：IN-ci-dent。\nclosed 读 /kloʊzd/，注意 s 发 /z/ 音。\n节奏：The u-TIL-i-ty ｜ POW-er IN-ci-dent ｜ has been CLOSED ｜ suc-CESS-ful-ly.',
    quiz: [
      { q: '把「本次市电停电事件已经顺利结束。」用英语说出来。', a: 'The utility power incident has been closed successfully.' },
      { q: '「事件关闭」用英语怎么说？', a: 'The incident has been closed.' },
    ],
  },
];

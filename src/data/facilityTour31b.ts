// EXPORTS: MOCK_SENTENCES_FACILITY31B

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_FACILITY31B: ISentence[] = [
  {
    id: 1901,
    speaker: 'Manager',
    en: 'This is the medium-voltage switchgear room.',
    cn: '这是中压开关柜室。',
    ipa: '/ðɪs ɪz ðə ˈmiːdiəm ˈvəʊltɪdʒ ˈswɪtʃɡɪə ruːm/',
    tags: ['第1901句', '电气系统', '★★★★'],
    when: '值班经理带领客户参观数据中心电气系统，介绍中压配电区域。',
    words: [
      { w: 'medium-voltage', ipa: '/ˈmiːdiəm ˈvəʊltɪdʒ/', pos: '形容词', cn: '中压的', memory: 'medium(中等的)+voltage(电压)→中压，通常指3.3kV-33kV范围', phonics: 'me 读 /miː/，di 读 /di/，um 读 /əm/；volt 读 /vəʊlt/，age 读 /ɪdʒ/', collocations: [['medium-voltage switchgear', '中压开关柜'], ['medium-voltage transformer', '中压变压器']], examples: [['The medium-voltage system operates at 11kV.', '中压系统运行在11千伏。'], ['This is a medium-voltage cable.', '这是一条中压电缆。']] },
      { w: 'switchgear', ipa: '/ˈswɪtʃɡɪə/', pos: '名词', cn: '开关柜；配电装置', memory: 'switch(开关)+gear(装置)→开关设备组合，用于控制、保护和隔离电气设备', phonics: 'switch 读 /swɪtʃ/，gear 读 /ɡɪə/', collocations: [['switchgear room', '开关柜室'], ['switchgear panel', '开关柜面板'], ['switchgear maintenance', '开关柜维护']], examples: [['The switchgear needs regular maintenance.', '开关柜需要定期维护。'], ['Check the switchgear status.', '检查开关柜状态。']] },
    ],
    phrases: [
      { p: 'medium-voltage switchgear', ipa: '/ˈmiːdiəm ˈvəʊltɪdʒ ˈswɪtʃɡɪə/', cn: '中压开关柜', why: '数据中心供电系统的核心设备，负责将电网高压电分配到变压器。' },
    ],
    grammar: [
      { q: '为什么用 switchgear 而不是 switchboard？', a: 'switchgear 是专业术语，指包含断路器、隔离开关、保护装置等的成套配电设备。\nswitchboard 通常指简单的配电盘或控制面板。\n✅ medium-voltage switchgear（中压开关柜，专业术语）\n✅ low-voltage switchboard（低压配电柜，较简单）' },
    ],
    pattern: 'This is the + 系统名称 + room',
    patternExamples: [
      { en: 'This is the generator room.', cn: '这是发电机房。', words: [] },
      { en: 'This is the battery room.', cn: '这是电池室。', words: [] },
      { en: 'This is the control room.', cn: '这是控制室。', words: [] },
    ],
    thinking: '介绍数据中心各功能区域时，使用「This is the + 区域名称」的标准句式。\n中压开关柜室是数据中心供电链的起点，通常包含11kV或33kV进线和配电设备。\n英语中复合形容词（如 medium-voltage）用连字符连接，作定语修饰名词。',
    pronunciation: 'medium 重音在第一音节：ME-di-um。\nvoltage 重音在第一音节：VOL-tage。\nswitchgear 重音在第一音节：SWITCH-gear。\n节奏：This IS ｜ the ME-di-um ｜ VOL-tage ｜ SWITCH-gear ROOM.',
    quiz: [
      { q: '把「这是中压开关柜室。」用英语说出来。', a: 'This is the medium-voltage switchgear room.' },
      { q: '「开关柜」用英语怎么说？', a: 'switchgear (/ˈswɪtʃɡɪə/)' },
    ],
  },
  {
    id: 1902,
    speaker: 'Manager',
    en: 'These are our transformers.',
    cn: '这些是我们的变压器。',
    ipa: '/ðiːz ɑːr ˈaʊər ˈtrænsfɔːrmərz/',
    tags: ['第1902句', '电气系统', '★★★'],
    when: '值班经理向客户介绍数据中心变压器设备，说明电压转换功能。',
    words: [
      { w: 'transformer', ipa: '/ˈtrænsfɔːrmər/', pos: '名词', cn: '变压器', memory: 'trans(转换)+form(形式)+er(设备)→转换电压形式的设备', phonics: 'trans 读 /træns/，form 读 /fɔːrm/，er 读 /ər/', collocations: [['step-down transformer', '降压变压器'], ['step-up transformer', '升压变压器'], ['transformer oil', '变压器油']], examples: [['The transformer converts 11kV to 400V.', '变压器将11千伏转换为400伏。'], ['Check the transformer temperature.', '检查变压器温度。']] },
    ],
    phrases: [
      { p: 'our transformers', ipa: '/ˈaʊər ˈtrænsfɔːrmərz/', cn: '我们的变压器', why: '使用 our 表示归属，强调这是数据中心自有的设备。' },
    ],
    grammar: [
      { q: '为什么用 These are 而不是 This is？', a: 'transformers 是复数，数据中心通常有多台变压器（主用+备用）。\n✅ These are our transformers.（这些是我们的变压器。多台）\n✅ This is our main transformer.（这是我们的主变压器。单台）' },
    ],
    pattern: 'These are + 形容词 + 名词（复数）',
    patternExamples: [
      { en: 'These are our backup generators.', cn: '这些是我们的备用发电机。', words: [] },
      { en: 'These are our main chillers.', cn: '这些是我们的主冷水机组。', words: [] },
      { en: 'These are our fire extinguishers.', cn: '这些是我们的灭火器。', words: [] },
    ],
    thinking: '介绍多个同类设备时，使用「These are + 复数名词」的句式。\n变压器是数据中心供电系统的核心，负责将中压电（如11kV）降压为低压电（如400V）供设备使用。\n数据中心通常采用N+1或2N冗余配置，所以变压器总是多台。',
    pronunciation: 'transformer 重音在第一音节：TRANS-form-er。\n注意 trans 中的 a 读 /æ/，不是 /ɑː/。\n节奏：These ARE ｜ our TRANS-form-ers.',
    quiz: [
      { q: '把「这些是我们的变压器。」用英语说出来。', a: 'These are our transformers.' },
      { q: '「变压器」用英语怎么说？', a: 'transformer (/ˈtrænsfɔːrmər/)' },
    ],
  },
  {
    id: 1903,
    speaker: 'Manager',
    en: 'This is the low-voltage switchboard.',
    cn: '这是低压配电柜。',
    ipa: '/ðɪs ɪz ðə loʊ ˈvəʊltɪdʒ ˈswɪtʃbɔːrd/',
    tags: ['第1903句', '电气系统', '★★★★'],
    when: '值班经理向客户介绍低压配电系统，说明电力分配到各机柜的路径。',
    words: [
      { w: 'low-voltage', ipa: '/loʊ ˈvəʊltɪdʒ/', pos: '形容词', cn: '低压的', memory: 'low(低的)+voltage(电压)→低压，通常指230V/400V', phonics: 'low 读 /loʊ/，volt 读 /vəʊlt/，age 读 /ɪdʒ/', collocations: [['low-voltage switchboard', '低压配电柜'], ['low-voltage cable', '低压电缆']], examples: [['The low-voltage system supplies 400V.', '低压系统提供400伏电压。'], ['Check the low-voltage panel.', '检查低压配电柜。']] },
      { w: 'switchboard', ipa: '/ˈswɪtʃbɔːrd/', pos: '名词', cn: '配电柜；配电盘', memory: 'switch(开关)+board(板)→安装开关和仪表的板状设备', phonics: 'switch 读 /swɪtʃ/，board 读 /bɔːrd/', collocations: [['switchboard panel', '配电柜面板'], ['switchboard maintenance', '配电柜维护']], examples: [['The switchboard distributes power to each rack.', '配电柜将电力分配到每个机柜。'], ['Check the switchboard meters.', '检查配电柜仪表。']] },
    ],
    phrases: [
      { p: 'low-voltage switchboard', ipa: '/loʊ ˈvəʊltɪdʒ ˈswɪtʃbɔːrd/', cn: '低压配电柜', why: '变压器输出的低压电通过配电柜分配到各IT机柜和辅助设备。' },
    ],
    grammar: [
      { q: 'switchboard 和 switchgear 有什么区别？', a: 'switchgear 通常指高压或中压的成套开关设备，包含保护和控制装置。\nswitchboard 通常指低压配电盘，结构相对简单。\n✅ medium-voltage switchgear（中压开关柜，复杂）\n✅ low-voltage switchboard（低压配电柜，较简单）' },
    ],
    pattern: 'This is the + 电压等级 + 设备名称',
    patternExamples: [
      { en: 'This is the high-voltage transformer.', cn: '这是高压变压器。', words: [] },
      { en: 'This is the medium-voltage panel.', cn: '这是中压配电盘。', words: [] },
      { en: 'This is the low-voltage distribution board.', cn: '这是低压配电箱。', words: [] },
    ],
    thinking: '数据中心供电链路：电网高压→中压开关柜→变压器→低压配电柜→PDU→机柜。\n低压配电柜是将变压器输出的400V电分配到各列机柜的关键节点。\n英语中用 low/medium/high 区分电压等级，这是电气工程的标准术语。',
    pronunciation: 'switchboard 重音在第一音节：SWITCH-board。\n注意 board 中的 oa 读 /ɔː/，与 switchgear 中的 gear 不同。\n节奏：This IS ｜ the LOW ｜ VOL-tage ｜ SWITCH-board.',
    quiz: [
      { q: '把「这是低压配电柜。」用英语说出来。', a: 'This is the low-voltage switchboard.' },
      { q: '「低压」用英语怎么说？', a: 'low-voltage (/loʊ ˈvəʊltɪdʒ/)' },
    ],
  },
  {
    id: 1904,
    speaker: 'Manager',
    en: 'These are our UPS systems.',
    cn: '这些是我们的UPS系统。',
    ipa: '/ðiːz ɑːr ˈaʊər ˌjuːpiːˈɛs ˈsɪstəmz/',
    tags: ['第1904句', '电气系统', '★★★★★'],
    when: '值班经理向客户介绍不间断电源系统，说明数据中心供电连续性保障。',
    words: [
      { w: 'UPS', ipa: '/ˌjuːpiːˈɛs/', pos: '缩写', cn: '不间断电源 (Uninterruptible Power Supply)', memory: 'U=Uninterruptible(不间断的), P=Power(电力), S=Supply(供应)', phonics: '逐字母读 U-P-S，不要读成一个单词', collocations: [['UPS system', 'UPS系统'], ['UPS battery', 'UPS电池'], ['UPS runtime', 'UPS运行时间']], examples: [['The UPS provides backup power.', 'UPS提供备用电源。'], ['Check the UPS status.', '检查UPS状态。']] },
    ],
    phrases: [
      { p: 'UPS systems', ipa: '/ˌjuːpiːˈɛs ˈsɪstəmz/', cn: 'UPS系统', why: '数据中心通常有多套UPS系统（A路+B路），实现供电冗余。' },
    ],
    grammar: [
      { q: '为什么用 UPS systems（复数）？', a: '数据中心通常采用2N冗余设计，有A路和B路两套独立的UPS系统。\n✅ These are our UPS systems.（这些是我们的UPS系统。多套）\n✅ This is our UPS system.（这是我们的UPS系统。单套，较少用）' },
    ],
    pattern: 'These are our + 系统名称（复数）',
    patternExamples: [
      { en: 'These are our cooling systems.', cn: '这些是我们的冷却系统。', words: [] },
      { en: 'These are our fire suppression systems.', cn: '这些是我们的消防灭火系统。', words: [] },
      { en: 'These are our monitoring systems.', cn: '这些是我们的监控系统。', words: [] },
    ],
    thinking: 'UPS是数据中心最关键的供电设备，在市电中断时提供不间断电力。\n数据中心通常采用2N架构：A路UPS + B路UPS，任一路故障都不影响IT设备运行。\n英语中缩写词（如UPS）作定语时通常不变形，复数形式体现在后面的名词上。',
    pronunciation: 'UPS 逐字母读 U-P-S，每个字母都要清晰。\nsystem 重音在第一音节：SYS-tem。\n节奏：These ARE ｜ our U-P-S ｜ SYS-tems.',
    quiz: [
      { q: '把「这些是我们的UPS系统。」用英语说出来。', a: 'These are our UPS systems.' },
      { q: 'UPS 代表什么？', a: 'Uninterruptible Power Supply（不间断电源）' },
    ],
  },
  {
    id: 1905,
    speaker: 'Manager',
    en: 'These are the battery cabinets.',
    cn: '这些是电池柜。',
    ipa: '/ðiːz ɑːr ðə ˈbætəri ˈkæbɪnɪts/',
    tags: ['第1905句', '电气系统', '★★★'],
    when: '值班经理向客户介绍UPS配套电池，说明后备供电时间。',
    words: [
      { w: 'battery', ipa: '/ˈbætəri/', pos: '名词', cn: '电池', memory: 'batt(打击)+ery→原指一组打击武器，后引申为电池组', phonics: 'bat 读 /bæ/，te 读 /tə/，ry 读 /ri/', collocations: [['battery cabinet', '电池柜'], ['battery bank', '电池组'], ['battery runtime', '电池运行时间']], examples: [['The batteries provide 15 minutes backup.', '电池提供15分钟后备时间。'], ['Check the battery voltage.', '检查电池电压。']] },
      { w: 'cabinet', ipa: '/ˈkæbɪnɪt/', pos: '名词', cn: '柜；机柜', memory: 'cab(小屋)+inet(小)→小柜子', phonics: 'cab 读 /kæ/，i 读 /ɪ/，net 读 /nɪt/', collocations: [['battery cabinet', '电池柜'], ['server cabinet', '服务器机柜'], ['network cabinet', '网络机柜']], examples: [['The battery cabinet is in the battery room.', '电池柜在电池室。'], ['Open the cabinet door.', '打开机柜门。']] },
    ],
    phrases: [
      { p: 'battery cabinets', ipa: '/ˈbætəri ˈkæbɪnɪts/', cn: '电池柜', why: 'UPS系统配套的大型蓄电池组，安装在专用机柜内。' },
    ],
    grammar: [
      { q: 'cabinet 和 rack 有什么区别？', a: 'cabinet 通常指封闭式机柜，有门和侧板，用于保护内部设备。\nrack 通常指开放式机架，便于设备散热和维护。\n✅ battery cabinet（电池柜，封闭式）\n✅ server rack（服务器机架，开放式）' },
    ],
    pattern: 'These are the + 设备名称 + 容器',
    patternExamples: [
      { en: 'These are the server cabinets.', cn: '这些是服务器机柜。', words: [] },
      { en: 'These are the network racks.', cn: '这些是网络机架。', words: [] },
      { en: 'These are the power distribution units.', cn: '这些是配电单元。', words: [] },
    ],
    thinking: '电池柜是UPS系统的能量存储单元，通常采用铅酸电池或锂电池。\n数据中心UPS电池通常设计为15分钟后备时间，足以支撑到发电机启动。\n英语中用 cabinet 表示封闭式柜体，用 rack 表示开放式机架，两者在数据中心都有广泛应用。',
    pronunciation: 'battery 重音在第一音节：BAT-te-ry。\ncabinet 重音在第一音节：CAB-i-net。\n节奏：These ARE ｜ the BAT-te-ry ｜ CAB-i-nets.',
    quiz: [
      { q: '把「这些是电池柜。」用英语说出来。', a: 'These are the battery cabinets.' },
      { q: '「电池柜」用英语怎么说？', a: 'battery cabinet (/ˈbætəri ˈkæbɪnɪt/)' },
    ],
  },
  {
    id: 1906,
    speaker: 'Manager',
    en: 'This is the cooling plant.',
    cn: '这是冷站。',
    ipa: '/ðɪs ɪz ðə ˈkuːlɪŋ plænt/',
    tags: ['第1906句', '暖通系统', '★★★★'],
    when: '值班经理带领客户参观暖通空调系统的中央冷站区域。',
    words: [
      { w: 'cooling', ipa: '/ˈkuːlɪŋ/', pos: '名词/形容词', cn: '冷却；制冷的', memory: 'cool(冷却)+ing(进行)→冷却过程', phonics: 'cool 读 /kuːl/，ing 读 /ɪŋ/', collocations: [['cooling plant', '冷站'], ['cooling system', '冷却系统'], ['cooling capacity', '制冷量']], examples: [['The cooling plant operates 24/7.', '冷站全天24小时运行。'], ['Check the cooling efficiency.', '检查制冷效率。']] },
      { w: 'plant', ipa: '/plænt/', pos: '名词', cn: '工厂；设备站', memory: '原义为植物，引申为工业设备或工厂', phonics: 'plant 读 /plænt/，注意 a 读 /æ/', collocations: [['cooling plant', '冷站'], ['power plant', '电厂'], ['chiller plant', '冷水机组站']], examples: [['The cooling plant is in the basement.', '冷站在地下室。'], ['Visit the power plant.', '参观电厂。']] },
    ],
    phrases: [
      { p: 'cooling plant', ipa: '/ˈkuːlɪŋ plænt/', cn: '冷站', why: '数据中心集中制冷的核心设施，包含冷水机组、冷却塔、水泵等设备。' },
    ],
    grammar: [
      { q: '为什么用 plant 而不是 room？', a: 'plant 在工程语境中指成套工业设备或设施，比 room 更专业。\n✅ cooling plant（冷站，包含多台设备）\n✅ cooling room（冷却室，较少用）' },
    ],
    pattern: 'This is the + 系统名称 + plant',
    patternExamples: [
      { en: 'This is the chiller plant.', cn: '这是冷水机组站。', words: [] },
      { en: 'This is the generator plant.', cn: '这是发电机组站。', words: [] },
      { en: 'This is the water treatment plant.', cn: '这是水处理站。', words: [] },
    ],
    thinking: '冷站是数据中心暖通系统的核心，集中生产冷冻水供各机房使用。\n英语中 plant 不仅指植物，在工业语境中常指成套设备或工厂。\ncooling plant 是数据中心标准术语，比 cooling system 更强调集中式设施。',
    pronunciation: 'cooling 重音在第一音节：COOL-ing。\nplant 读 /plænt/，a 是梅花音。\n节奏：This IS ｜ the COOL-ing ｜ PLANT.',
    quiz: [
      { q: '把「这是冷站。」用英语说出来。', a: 'This is the cooling plant.' },
      { q: '「冷站」用英语怎么说？', a: 'cooling plant (/ˈkuːlɪŋ plænt/)' },
    ],
  },
  {
    id: 1907,
    speaker: 'Manager',
    en: 'These are the chillers.',
    cn: '这些是冷水机组。',
    ipa: '/ðiːz ɑːr ðə ˈtʃɪlərz/',
    tags: ['第1907句', '暖通系统', '★★★★★'],
    when: '值班经理向客户介绍冷水机组，说明数据中心主要制冷设备。',
    words: [
      { w: 'chiller', ipa: '/ˈtʃɪlər/', pos: '名词', cn: '冷水机组', memory: 'chill(使冷)+er(设备)→制冷设备', phonics: 'chill 读 /tʃɪl/，er 读 /ər/', collocations: [['water-cooled chiller', '水冷冷水机组'], ['air-cooled chiller', '风冷冷水机组'], ['chiller capacity', '冷水机组容量']], examples: [['The chillers produce 7°C chilled water.', '冷水机组产生7°C冷冻水。'], ['One chiller is on standby.', '一台冷水机组处于备用状态。']] },
    ],
    phrases: [
      { p: 'the chillers', ipa: '/ðə ˈtʃɪlərz/', cn: '冷水机组', why: '数据中心通常有多台冷水机组（N+1或2N冗余），实现制冷冗余。' },
    ],
    grammar: [
      { q: 'chiller 和 air conditioner 有什么区别？', a: 'chiller 是工业级制冷设备，产生冷冻水供末端设备使用。\nair conditioner 是民用空调，直接制冷空气。\n✅ chiller（冷水机组，数据中心用）\n✅ air conditioner（空调，办公室用）' },
    ],
    pattern: 'These are the + 设备名称（复数）',
    patternExamples: [
      { en: 'These are the cooling towers.', cn: '这些是冷却塔。', words: [] },
      { en: 'These are the pumps.', cn: '这些是水泵。', words: [] },
      { en: 'These are the fans.', cn: '这些是风机。', words: [] },
    ],
    thinking: '冷水机组是数据中心制冷系统的核心，将热量从冷冻水转移到冷却水。\n数据中心通常采用N+1或2N冗余配置，确保任一设备故障都不影响制冷。\n英语中 chiller 是数据中心专用术语，与民用 air conditioner 有本质区别。',
    pronunciation: 'chiller 重音在第一音节：CHILL-er。\n注意 ch 读 /tʃ/，ill 读 /ɪl/。\n节奏：These ARE ｜ the CHILL-ers.',
    quiz: [
      { q: '把「这些是冷水机组。」用英语说出来。', a: 'These are the chillers.' },
      { q: '「冷水机组」用英语怎么说？', a: 'chiller (/ˈtʃɪlər/)' },
    ],
  },
  {
    id: 1908,
    speaker: 'Manager',
    en: 'These are the cooling towers.',
    cn: '这些是冷却塔。',
    ipa: '/ðiːz ɑːr ðə ˈkuːlɪŋ ˈtaʊərz/',
    tags: ['第1908句', '暖通系统', '★★★★'],
    when: '值班经理向客户介绍冷却塔，说明散热系统的工作原理。',
    words: [
      { w: 'cooling tower', ipa: '/ˈkuːlɪŋ ˈtaʊər/', pos: '名词', cn: '冷却塔', memory: 'cooling(冷却)+tower(塔)→用于散热的塔状设备', phonics: 'cool 读 /kuːl/，ing 读 /ɪŋ/；tower 读 /ˈtaʊər/', collocations: [['cooling tower fan', '冷却塔风机'], ['cooling tower water', '冷却塔水']], examples: [['The cooling towers reject heat to the atmosphere.', '冷却塔将热量排放到大气中。'], ['Check the cooling tower water level.', '检查冷却塔水位。']] },
    ],
    phrases: [
      { p: 'cooling towers', ipa: '/ˈkuːlɪŋ ˈtaʊərz/', cn: '冷却塔', why: '水冷冷水机组的配套散热设备，将冷凝器的热量排放到大气。' },
    ],
    grammar: [
      { q: '为什么 tower 用复数？', a: '数据中心通常有多台冷却塔与冷水机组一一对应。\n✅ These are the cooling towers.（这些是冷却塔。多台）\n✅ This is the cooling tower.（这是冷却塔。单台）' },
    ],
    pattern: 'These are the + 设备名称（复数）',
    patternExamples: [
      { en: 'These are the condenser units.', cn: '这些是冷凝机组。', words: [] },
      { en: 'These are the evaporators.', cn: '这些是蒸发器。', words: [] },
      { en: 'These are the heat exchangers.', cn: '这些是热交换器。', words: [] },
    ],
    thinking: '冷却塔是水冷系统的散热终端，将冷水机组冷凝器的热量排放到大气。\n数据中心制冷链：IT设备产热→CRAH→冷冻水→冷水机组→冷却水→冷却塔→大气。\n英语中复合名词（如 cooling tower）通常两个词都保留原形，复数加在最后一个词上。',
    pronunciation: 'tower 重音在第一音节：TOW-er。\n注意 ow 读 /aʊ/，不是 /oʊ/。\n节奏：These ARE ｜ the COOL-ing ｜ TOW-ers.',
    quiz: [
      { q: '把「这些是冷却塔。」用英语说出来。', a: 'These are the cooling towers.' },
      { q: '「冷却塔」用英语怎么说？', a: 'cooling tower (/ˈkuːlɪŋ ˈtaʊər/)' },
    ],
  },
  {
    id: 1909,
    speaker: 'Manager',
    en: 'These are the chilled water pumps.',
    cn: '这些是冷冻水泵。',
    ipa: '/ðiːz ɑːr ðə tʃɪld ˈwɔːtər pʌmps/',
    tags: ['第1909句', '暖通系统', '★★★★'],
    when: '值班经理向客户介绍冷冻水循环系统的水泵设备。',
    words: [
      { w: 'chilled water', ipa: '/tʃɪld ˈwɔːtər/', pos: '名词', cn: '冷冻水', memory: 'chilled(冷冻的)+water(水)→用于制冷的低温水', phonics: 'chill 读 /tʃɪl/，ed 读 /d/；water 读 /ˈwɔːtər/', collocations: [['chilled water pump', '冷冻水泵'], ['chilled water pipe', '冷冻水管'], ['chilled water temperature', '冷冻水温度']], examples: [['The chilled water is at 7°C.', '冷冻水温度是7°C。'], ['Check the chilled water flow.', '检查冷冻水流量。']] },
      { w: 'pump', ipa: '/pʌmp/', pos: '名词', cn: '泵', memory: '象声词，模拟泵工作的声音', phonics: 'pump 读 /pʌmp/，u 读 /ʌ/', collocations: [['water pump', '水泵'], ['chilled water pump', '冷冻水泵'], ['cooling water pump', '冷却水泵']], examples: [['The pump circulates the water.', '水泵循环水。'], ['Check the pump pressure.', '检查水泵压力。']] },
    ],
    phrases: [
      { p: 'chilled water pumps', ipa: '/tʃɪld ˈwɔːtər pʌmps/', cn: '冷冻水泵', why: '驱动冷冻水在冷水机组和末端设备之间循环的动力设备。' },
    ],
    grammar: [
      { q: 'chilled 和 cooling 有什么区别？', a: 'chilled 是过去分词作形容词，表示"被冷却的"。\ncooling 是现在分词作形容词，表示"正在冷却的"。\n✅ chilled water（冷冻水，已被冷却的水）\n✅ cooling water（冷却水，用于冷却的水）' },
    ],
    pattern: 'These are the + 介质名称 + 设备名称',
    patternExamples: [
      { en: 'These are the chilled water pipes.', cn: '这些是冷冻水管。', words: [] },
      { en: 'These are the cooling water valves.', cn: '这些是冷却水阀。', words: [] },
      { en: 'These are the compressed air tanks.', cn: '这些是压缩空气罐。', words: [] },
    ],
    thinking: '冷冻水泵是制冷系统的循环动力，将冷水机组产生的冷冻水输送到各机房CRAH。\n数据中心通常有主泵和备泵，确保冷冻水循环不中断。\n英语中用 chilled water 表示冷冻水（供冷侧），用 cooling water 表示冷却水（散热侧），两者不能混淆。',
    pronunciation: 'chilled 读 /tʃɪld/，ed 发 /d/ 音。\npump 读 /pʌmp/，注意 u 是短元音。\n节奏：These ARE ｜ the CHILLED ｜ WA-ter ｜ PUMPS.',
    quiz: [
      { q: '把「这些是冷冻水泵。」用英语说出来。', a: 'These are the chilled water pumps.' },
      { q: '「冷冻水」用英语怎么说？', a: 'chilled water (/tʃɪld ˈwɔːtər/)' },
    ],
  },
  {
    id: 1910,
    speaker: 'Manager',
    en: 'These are the CRAH units.',
    cn: '这些是风墙空调。',
    ipa: '/ðiːz ɑːr ðə kræh ˈjuːnɪts/',
    tags: ['第1910句', '暖通系统', '★★★★★'],
    when: '值班经理向客户介绍机房内的精密空调设备，说明空气处理原理。',
    words: [
      { w: 'CRAH', ipa: '/kræh/', pos: '缩写', cn: '计算机房空气处理器 (Computer Room Air Handler)', memory: 'C=Computer, R=Room, A=Air, H=Handler', phonics: '可读作一个单词 /kræh/，或逐字母读 C-R-A-H', collocations: [['CRAH unit', 'CRAH机组'], ['CRAH fan', 'CRAH风机'], ['CRAH filter', 'CRAH过滤器']], examples: [['The CRAH units maintain 22°C.', 'CRAH机组维持22°C温度。'], ['Check the CRAH humidity.', '检查CRAH湿度。']] },
    ],
    phrases: [
      { p: 'CRAH units', ipa: '/kræh ˈjuːnɪts/', cn: 'CRAH机组', why: '机房精密空调，使用冷冻水冷却空气，维持机房温湿度。' },
    ],
    grammar: [
      { q: 'CRAH 和 CRAC 有什么区别？', a: 'CRAH (Computer Room Air Handler) 使用冷冻水冷却空气。\nCRAC (Computer Room Air Conditioner) 使用制冷剂直接冷却空气。\n✅ CRAH（使用冷冻水，大型数据中心常用）\n✅ CRAC（使用制冷剂，小型机房常用）' },
    ],
    pattern: 'These are the + 设备缩写 + units',
    patternExamples: [
      { en: 'These are the CRAC units.', cn: '这些是CRAC机组。', words: [] },
      { en: 'These are the PDU units.', cn: '这些是PDU设备。', words: [] },
      { en: 'These are the RPP units.', cn: '这些是RPP设备。', words: [] },
    ],
    thinking: 'CRAH是数据中心机房内的末端制冷设备，将冷冻水的冷量传递给机房空气。\nCRAH通常安装在机房侧面或地板下，形成风墙或下送风。\n英语中缩写词（如CRAH）可以读作一个单词或逐字母读，两者都可以接受。',
    pronunciation: 'CRAH 可读作 /kræh/（类似 crack 去掉 c）或逐字母 C-R-A-H。\nunit 重音在第一音节：U-nit。\n节奏：These ARE ｜ the CRAH ｜ U-nits.',
    quiz: [
      { q: '把「这些是风墙空调。」用英语说出来。', a: 'These are the CRAH units.' },
      { q: 'CRAH 代表什么？', a: 'Computer Room Air Handler（计算机房空气处理器）' },
    ],
  },
  {
    id: 1911,
    speaker: 'Manager',
    en: 'This is our fire protection system.',
    cn: '这是我们的消防系统。',
    ipa: '/ðɪs ɪz ˈaʊər faɪər prəˈtekʃən ˈsɪstəm/',
    tags: ['第1911句', '消防安防', '★★★★'],
    when: '值班经理向客户介绍数据中心消防安全系统，说明灭火和报警设施。',
    words: [
      { w: 'fire protection', ipa: '/faɪər prəˈtekʃən/', pos: '名词', cn: '消防；防火', memory: 'fire(火)+protection(保护)→防火保护', phonics: 'fire 读 /faɪər/；pro 读 /prə/，tect 读 /tek/，ion 读 /ʃən/', collocations: [['fire protection system', '消防系统'], ['fire protection plan', '消防计划'], ['fire protection equipment', '消防设备']], examples: [['The fire protection system is tested monthly.', '消防系统每月测试。'], ['Review the fire protection procedures.', '审查消防程序。']] },
    ],
    phrases: [
      { p: 'fire protection system', ipa: '/faɪər prəˈtekʃən ˈsɪstəm/', cn: '消防系统', why: '数据中心的综合消防安全系统，包括探测、报警和灭火设备。' },
    ],
    grammar: [
      { q: 'fire protection 和 fire suppression 有什么区别？', a: 'fire protection 是广义的消防保护，包括探测、报警、灭火等全部环节。\nfire suppression 专指灭火抑制，是 fire protection 的一部分。\n✅ fire protection system（消防系统，整体）\n✅ fire suppression system（灭火系统，专指灭火部分）' },
    ],
    pattern: 'This is our + 系统名称 + system',
    patternExamples: [
      { en: 'This is our security system.', cn: '这是我们的安防系统。', words: [] },
      { en: 'This is our monitoring system.', cn: '这是我们的监控系统。', words: [] },
      { en: 'This is our backup system.', cn: '这是我们的备份系统。', words: [] },
    ],
    thinking: '数据中心消防系统包括烟雾探测、温度探测、声光报警和自动灭火等多个子系统。\n数据中心通常采用气体灭火系统（如FM200或Novec 1230），避免水对设备的损害。\n英语中 fire protection 是消防的总称，fire suppression 专指灭火抑制。',
    pronunciation: 'protection 重音在第二音节：pro-TEC-tion。\n注意 tec 读 /tek/，tion 读 /ʃən/。\n节奏：This IS ｜ our FIRE ｜ pro-TEC-tion ｜ SYS-tem.',
    quiz: [
      { q: '把「这是我们的消防系统。」用英语说出来。', a: 'This is our fire protection system.' },
      { q: '「消防系统」用英语怎么说？', a: 'fire protection system (/faɪər prəˈtekʃən ˈsɪstəm/)' },
    ],
  },
  {
    id: 1912,
    speaker: 'Manager',
    en: 'We use a clean agent fire suppression system.',
    cn: '我们采用气体灭火系统。',
    ipa: '/wiː juːz ə kliːn ˈeɪdʒənt faɪər səˈpreʃən ˈsɪstəm/',
    tags: ['第1912句', '消防安防', '★★★★★'],
    when: '值班经理向客户介绍数据中心采用的气体灭火技术，说明对设备无损害。',
    words: [
      { w: 'clean agent', ipa: '/kliːn ˈeɪdʒənt/', pos: '名词', cn: '洁净气体（灭火剂）', memory: 'clean(洁净的)+agent(剂)→不留残留物的灭火剂', phonics: 'clean 读 /kliːn/；a 读 /eɪ/，gent 读 /dʒənt/', collocations: [['clean agent system', '洁净气体灭火系统'], ['clean agent fire suppression', '洁净气体消防']], examples: [['FM200 is a clean agent.', 'FM200是一种洁净气体灭火剂。'], ['Clean agents leave no residue.', '洁净气体灭火剂不留残留物。']] },
      { w: 'fire suppression', ipa: '/faɪər səˈpreʃən/', pos: '名词', cn: '消防灭火', memory: 'fire(火)+suppression(抑制)→灭火抑制', phonics: 'fire 读 /faɪər/；sup 读 /sə/，press 读 /preʃ/，ion 读 /ən/', collocations: [['fire suppression system', '灭火系统'], ['fire suppression agent', '灭火剂']], examples: [['The fire suppression system activated.', '灭火系统启动了。'], ['Check the fire suppression cylinders.', '检查灭火系统气瓶。']] },
    ],
    phrases: [
      { p: 'clean agent fire suppression', ipa: '/kliːn ˈeɪdʒənt faɪər səˈpreʃən/', cn: '洁净气体灭火', why: '使用不导电、不留残留物的气体灭火剂，保护精密电子设备。' },
    ],
    grammar: [
      { q: '为什么数据中心用 clean agent 而不用水？', a: '水会损坏电子设备，造成二次损失。\nclean agent（如FM200、Novec 1230）是气体灭火剂，灭火后不留残留物，不损坏设备。\n✅ clean agent fire suppression（气体灭火，数据中心用）\n❌ water-based fire suppression（水基灭火，数据中心禁用）' },
    ],
    pattern: 'We use + 形容词 + 名词 + system',
    patternExamples: [
      { en: 'We use a redundant power system.', cn: '我们采用冗余供电系统。', words: [] },
      { en: 'We use a precision cooling system.', cn: '我们采用精密制冷系统。', words: [] },
      { en: 'We use a 24/7 monitoring system.', cn: '我们采用全天候监控系统。', words: [] },
    ],
    thinking: '数据中心消防的核心是保护设备安全，因此必须使用不损害电子设备的气体灭火剂。\nclean agent 是消防行业专业术语，指不导电、不残留的洁净气体灭火剂。\n英语中用 clean agent 区分传统的水基或干粉灭火剂，强调对精密设备的保护。',
    pronunciation: 'suppression 重音在第二音节：sup-PRES-sion。\nagent 重音在第一音节：A-gent。\n节奏：We USE ｜ a CLEAN ｜ A-gent ｜ FIRE ｜ sup-PRES-sion ｜ SYS-tem.',
    quiz: [
      { q: '把「我们采用气体灭火系统。」用英语说出来。', a: 'We use a clean agent fire suppression system.' },
      { q: '「气体灭火」用英语怎么说？', a: 'clean agent fire suppression (/kliːn ˈeɪdʒənt faɪər səˈpreʃən/)' },
    ],
  },
  {
    id: 1913,
    speaker: 'Manager',
    en: 'This is our security control room.',
    cn: '这是我们的安防监控室。',
    ipa: '/ðɪs ɪz ˈaʊər sɪˈkjʊrɪti kənˈtroʊl ruːm/',
    tags: ['第1913句', '消防安防', '★★★★'],
    when: '值班经理向客户介绍数据中心安防监控中心，说明安保管理。',
    words: [
      { w: 'security', ipa: '/sɪˈkjʊrɪti/', pos: '名词', cn: '安防；安全', memory: 'secur(e)(安全的)+ity(名词后缀)→安全状态', phonics: 'se 读 /sɪ/，cu 读 /kjʊ/，ri 读 /rɪ/，ty 读 /ti/', collocations: [['security control room', '安防监控室'], ['security guard', '安保人员'], ['security camera', '安防摄像头']], examples: [['Security monitors the facility 24/7.', '安防人员全天候监控园区。'], ['Contact security for access.', '联系安防人员获取门禁。']] },
      { w: 'control room', ipa: '/kənˈtroʊl ruːm/', pos: '名词', cn: '控制室', memory: 'control(控制)+room(房间)→集中监控和控制的房间', phonics: 'con 读 /kən/，trol 读 /troʊl/', collocations: [['security control room', '安防监控室'], ['operations control room', '运营控制室']], examples: [['The control room has CCTV monitors.', '控制室有CCTV显示器。'], ['Report to the control room.', '向控制室报告。']] },
    ],
    phrases: [
      { p: 'security control room', ipa: '/sɪˈkjʊrɪti kənˈtroʊl ruːm/', cn: '安防监控室', why: '数据中心安保管理的核心区域，集中监控所有出入口和公共区域。' },
    ],
    grammar: [
      { q: 'security 和 safety 有什么区别？', a: 'security 指防范人为威胁（入侵、盗窃、破坏）。\nsafety 指防范意外事故（火灾、触电、跌倒）。\n✅ security control room（安防监控室，防人为威胁）\n✅ safety training（安全培训，防意外事故）' },
    ],
    pattern: 'This is our + 功能名称 + room',
    patternExamples: [
      { en: 'This is our operations room.', cn: '这是我们的运营室。', words: [] },
      { en: 'This is our meeting room.', cn: '这是我们的会议室。', words: [] },
      { en: 'This is our staging room.', cn: '这是我们的设备准备室。', words: [] },
    ],
    thinking: '安防监控室是数据中心物理安全的神经中枢，集中监控所有出入口和敏感区域。\n数据中心通常采用多层安保：外围围栏→门禁系统→CCTV监控→安保人员。\n英语中 security 强调防范人为威胁，safety 强调防范意外事故，两者不能混淆。',
    pronunciation: 'security 重音在第二音节：se-CU-ri-ty。\ncontrol 重音在第二音节：con-TROL。\n节奏：This IS ｜ our se-CU-ri-ty ｜ con-TROL ｜ ROOM.',
    quiz: [
      { q: '把「这是我们的安防监控室。」用英语说出来。', a: 'This is our security control room.' },
      { q: '「安防」用英语怎么说？', a: 'security (/sɪˈkjʊrɪti/)' },
    ],
  },
  {
    id: 1914,
    speaker: 'Manager',
    en: 'All areas are monitored by CCTV.',
    cn: '所有区域均由监控摄像头覆盖。',
    ipa: '/ɔːl ˈeəriəz ɑːr ˈmɒnɪtəd baɪ ˌsiːsiːtiːˈviː/',
    tags: ['第1914句', '消防安防', '★★★★'],
    when: '值班经理向客户说明数据中心的全方位视频监控覆盖，强调安全性。',
    words: [
      { w: 'monitor', ipa: '/ˈmɒnɪtər/', pos: '动词', cn: '监控；监视', memory: 'monit(警告)+or→警告的人→监控', phonics: 'mon 读 /mɒ/，i 读 /ɪ/，tor 读 /tər/', collocations: [['monitored by', '被...监控'], ['monitor the area', '监控区域'], ['monitor the system', '监控系统']], examples: [['The area is monitored 24/7.', '该区域全天候监控。'], ['We monitor all entry points.', '我们监控所有入口。']] },
      { w: 'CCTV', ipa: '/ˌsiːsiːtiːˈviː/', pos: '缩写', cn: '闭路电视 (Closed-Circuit Television)', memory: 'C=Closed(闭合的), C=Circuit(电路), T=Television(电视)', phonics: '逐字母读 C-C-T-V', collocations: [['CCTV camera', 'CCTV摄像头'], ['CCTV footage', 'CCTV录像'], ['CCTV system', 'CCTV系统']], examples: [['Check the CCTV footage.', '查看CCTV录像。'], ['The CCTV is recording.', 'CCTV正在录像。']] },
    ],
    phrases: [
      { p: 'monitored by CCTV', ipa: '/ˈmɒnɪtəd baɪ ˌsiːsiːtiːˈviː/', cn: '由CCTV监控', why: '使用被动语态强调区域被监控的状态，by 引出监控手段。' },
    ],
    grammar: [
      { q: '为什么用被动语态 are monitored？', a: '被动语态强调"区域被监控"这一事实，而非谁在监控。\n✅ All areas are monitored by CCTV.（所有区域被CCTV监控。强调状态）\n✅ CCTV monitors all areas.（CCTV监控所有区域。强调动作）' },
    ],
    pattern: '所有 + 名词 + are monitored by + 监控手段',
    patternExamples: [
      { en: 'All entry points are monitored by access control.', cn: '所有入口由门禁系统监控。', words: [] },
      { en: 'All racks are monitored by temperature sensors.', cn: '所有机柜由温度传感器监控。', words: [] },
      { en: 'All areas are monitored by security guards.', cn: '所有区域由安保人员监控。', words: [] },
    ],
    thinking: '数据中心安保的核心是全方位、无死角的视频监控覆盖。\nCCTV是闭路电视的缩写，是现代安保系统的标准配置。\n英语中用被动语态（are monitored）强调被监控的状态，比主动语态更常用。',
    pronunciation: 'CCTV 逐字母读 C-C-T-V，每个字母都要清晰。\nmonitor 重音在第一音节：MON-i-tor。\n节奏：All A-reas ｜ are MON-i-tored ｜ by C-C-T-V.',
    quiz: [
      { q: '把「所有区域均由监控摄像头覆盖。」用英语说出来。', a: 'All areas are monitored by CCTV.' },
      { q: 'CCTV 代表什么？', a: 'Closed-Circuit Television（闭路电视）' },
    ],
  },
  {
    id: 1915,
    speaker: 'Manager',
    en: 'That concludes the facility tour.',
    cn: '本次园区参观到此结束。',
    ipa: '/ðæt kənˈkluːdz ðə fəˈsɪlɪti tʊər/',
    tags: ['第1915句', '结束参观', '★★★★★'],
    when: '值班经理宣布参观结束，准备进入问答环节。',
    words: [
      { w: 'conclude', ipa: '/kənˈkluːd/', pos: '动词', cn: '结束；完成', memory: 'con(共同)+clude(关闭)→共同关闭→结束', phonics: 'con 读 /kən/，clude 读 /kluːd/', collocations: [['conclude the tour', '结束参观'], ['conclude the meeting', '结束会议'], ['conclude the presentation', '结束演示']], examples: [['That concludes our tour.', '我们的参观到此结束。'], ['Let me conclude the meeting.', '让我结束会议。']] },
      { w: 'facility', ipa: '/fəˈsɪlɪti/', pos: '名词', cn: '设施；园区', memory: 'facil(容易)+ity→使事情容易进行的场所→设施', phonics: 'fa 读 /fə/，cil 读 /sɪ/，i 读 /ɪ/，ty 读 /ti/', collocations: [['facility tour', '园区参观'], ['facility manager', '园区经理'], ['facility maintenance', '园区维护']], examples: [['Welcome to our facility.', '欢迎来到我们的园区。'], ['The facility operates 24/7.', '园区全天24小时运营。']] },
    ],
    phrases: [
      { p: 'conclude the tour', ipa: '/kənˈkluːd ðə tʊər/', cn: '结束参观', why: 'conclude 是正式用语，比 end 更正式，适合商务场合。' },
    ],
    grammar: [
      { q: 'conclude 和 end 有什么区别？', a: 'conclude 是正式用语，常用于会议、演讲、参观等正式场合。\nend 是通用词，可用于任何场合。\n✅ That concludes the tour.（参观到此结束。正式）\n✅ The tour ends here.（参观在这里结束。通用）' },
    ],
    pattern: 'That concludes + 活动名称',
    patternExamples: [
      { en: 'That concludes the presentation.', cn: '演示到此结束。', words: [] },
      { en: 'That concludes the meeting.', cn: '会议到此结束。', words: [] },
      { en: 'That concludes the training session.', cn: '培训课程到此结束。', words: [] },
    ],
    thinking: '参观结束时使用 That concludes 是标准的商务英语表达，比简单说 The tour is over 更专业。\nfacility 是数据中心的标准称呼，比 building 或 site 更强调功能性。\n英语中 conclude 常用于正式场合的结束语，是商务英语的必备词汇。',
    pronunciation: 'conclude 重音在第二音节：con-CLUDE。\nfacility 重音在第二音节：fa-CIL-i-ty。\n节奏：That con-CLUDES ｜ the fa-CIL-i-ty ｜ TOUR.',
    quiz: [
      { q: '把「本次园区参观到此结束。」用英语说出来。', a: 'That concludes the facility tour.' },
      { q: '「结束参观」用英语怎么说？', a: 'conclude the tour (/kənˈkluːd ðə tʊər/)' },
    ],
  },
  {
    id: 1916,
    speaker: 'Manager',
    en: 'Thank you for visiting our data center.',
    cn: '感谢您参观我们的数据中心。',
    ipa: '/θæŋk juː fər ˈvɪzɪtɪŋ ˈaʊər ˈdeɪtə ˈsentər/',
    tags: ['第1916句', '结束参观', '★★★★★'],
    when: '值班经理向客户表达感谢，体现专业和礼貌。',
    words: [
      { w: 'visit', ipa: '/ˈvɪzɪt/', pos: '动词', cn: '参观；访问', memory: 'vis(看)+it(去)→去看→参观', phonics: 'vis 读 /vɪz/，it 读 /ɪt/', collocations: [['visit the facility', '参观园区'], ['visit the data center', '参观数据中心'], ['thank you for visiting', '感谢参观']], examples: [['Thank you for visiting us.', '感谢您来参观。'], ['We welcome you to visit.', '欢迎您来参观。']] },
    ],
    phrases: [
      { p: 'thank you for + doing', ipa: '/θæŋk juː fər/', cn: '感谢您...', why: 'for 是介词，后面接动名词（-ing形式），表示感谢的原因。' },
    ],
    grammar: [
      { q: '为什么用 visiting 而不是 visit？', a: 'for 是介词，介词后面必须接名词或动名词（-ing形式）。\n✅ Thank you for visiting.（感谢您的参观。visiting 是动名词）\n❌ Thank you for visit.（错误，visit 是动词原形）' },
    ],
    pattern: 'Thank you for + 动名词 + 名词',
    patternExamples: [
      { en: 'Thank you for joining the meeting.', cn: '感谢您参加会议。', words: [] },
      { en: 'Thank you for your time.', cn: '感谢您的时间。', words: [] },
      { en: 'Thank you for your cooperation.', cn: '感谢您的配合。', words: [] },
    ],
    thinking: '参观结束时表达感谢是商务礼仪的基本要求。\n英语中 thank you for 后面接动名词（-ing），表示对某个动作的感谢。\n这是商务英语的标准句式，适用于各种正式场合的结束语。',
    pronunciation: 'thank 的 th 读 /θ/（咬舌），不是 /s/ 或 /t/。\nvisiting 重音在第一音节：VIS-it-ing。\n节奏：Thank YOU ｜ for VIS-it-ing ｜ our DA-ta ｜ CEN-ter.',
    quiz: [
      { q: '把「感谢您参观我们的数据中心。」用英语说出来。', a: 'Thank you for visiting our data center.' },
      { q: '「感谢参观」用英语怎么说？', a: 'Thank you for visiting (/θæŋk juː fər ˈvɪzɪtɪŋ/)' },
    ],
  },
  {
    id: 1917,
    speaker: 'Manager',
    en: 'Do you have any questions?',
    cn: '您还有什么问题吗？',
    ipa: '/duː juː hæv ˈeni ˈkwestʃənz/',
    tags: ['第1917句', '结束参观', '★★★★★'],
    when: '值班经理主动询问客户是否有疑问，准备进入问答环节。',
    words: [
      { w: 'question', ipa: '/ˈkwestʃən/', pos: '名词', cn: '问题', memory: 'quest(寻求)+ion→寻求答案→问题', phonics: 'ques 读 /kwes/，tion 读 /tʃən/', collocations: [['have questions', '有问题'], ['answer questions', '回答问题'], ['any questions', '任何问题']], examples: [['Do you have any questions?', '您有什么问题吗？'], ['I will answer your questions.', '我会回答您的问题。']] },
    ],
    phrases: [
      { p: 'any questions', ipa: '/ˈeni ˈkwestʃənz/', cn: '任何问题', why: 'any 用于疑问句和否定句，表示"任何"，比 some 更开放。' },
    ],
    grammar: [
      { q: '为什么用 any 而不是 some？', a: 'any 用于疑问句，表示开放性的询问，不预设答案。\nsome 用于肯定句，表示"一些"。\n✅ Do you have any questions?（您有任何问题吗？开放询问）\n✅ I have some questions.（我有一些问题。肯定陈述）' },
    ],
    pattern: 'Do you have any + 名词（复数）？',
    patternExamples: [
      { en: 'Do you have any concerns?', cn: '您有什么顾虑吗？', words: [] },
      { en: 'Do you have any requirements?', cn: '您有什么要求吗？', words: [] },
      { en: 'Do you have any comments?', cn: '您有什么意见吗？', words: [] },
    ],
    thinking: '参观结束后主动询问问题是专业的商务礼仪，显示对客户需求的关注。\n英语中 any 用于疑问句，表示开放性的询问，不预设对方是否有问题。\n这是商务英语的标准句式，适用于各种正式场合的问答环节开场。',
    pronunciation: 'question 重音在第一音节：QUES-tion。\n注意 tion 读 /tʃən/，不是 /ʃən/。\n节奏：Do you HAVE ｜ an-y ｜ QUES-tions?',
    quiz: [
      { q: '把「您还有什么问题吗？」用英语说出来。', a: 'Do you have any questions?' },
      { q: '「问题」用英语怎么说？', a: 'question (/ˈkwestʃən/)' },
    ],
  },
  {
    id: 1918,
    speaker: 'Manager',
    en: 'I will be happy to answer your questions.',
    cn: '我很乐意回答您的问题。',
    ipa: '/aɪ wɪl biː ˈhæpi tuː ˈɑːnsər jɔːr ˈkwestʃənz/',
    tags: ['第1918句', '结束参观', '★★★★'],
    when: '值班经理表达回答问题的意愿，体现专业和热情。',
    words: [
      { w: 'happy', ipa: '/ˈhæpi/', pos: '形容词', cn: '乐意的；高兴的', memory: 'hap(运气)+py→运气好的→高兴的', phonics: 'hap 读 /hæ/，py 读 /pi/', collocations: [['happy to help', '乐意帮助'], ['happy to answer', '乐意回答'], ['happy to assist', '乐意协助']], examples: [['I am happy to help.', '我很乐意帮助。'], ['We are happy to answer your questions.', '我们很乐意回答您的问题。']] },
      { w: 'answer', ipa: '/ˈɑːnsər/', pos: '动词', cn: '回答', memory: 'an(对)+swer(发誓)→对问题做出回应→回答', phonics: 'an 读 /ɑːn/，swer 读 /sər/', collocations: [['answer questions', '回答问题'], ['answer the phone', '接电话'], ['answer the email', '回复邮件']], examples: [['I will answer your question.', '我会回答您的问题。'], ['Please answer the phone.', '请接电话。']] },
    ],
    phrases: [
      { p: 'be happy to', ipa: '/biː ˈhæpi tuː/', cn: '乐意...', why: 'be happy to 是礼貌表达，表示愿意做某事，比 I want to 更正式。' },
    ],
    grammar: [
      { q: 'happy to 和 glad to 有什么区别？', a: '两者意思相近，都表示"乐意"。\nhappy to 更常用，语气更轻松。\nglad to 稍正式，强调高兴的心情。\n✅ I am happy to help.（我很乐意帮助。常用）\n✅ I am glad to help.（我很高兴能帮助。稍正式）' },
    ],
    pattern: 'I will be happy to + 动词原形',
    patternExamples: [
      { en: 'I will be happy to help you.', cn: '我很乐意帮助您。', words: [] },
      { en: 'I will be happy to provide more information.', cn: '我很乐意提供更多信息。', words: [] },
      { en: 'I will be happy to arrange a follow-up meeting.', cn: '我很乐意安排后续会议。', words: [] },
    ],
    thinking: '表达回答问题的意愿是商务礼仪的重要环节，显示专业和热情。\nbe happy to 是商务英语的标准表达，比 I want to 更礼貌。\n英语中用 I will be happy to 表示未来的意愿，比 I am happy to 更常用。',
    pronunciation: 'happy 重音在第一音节：HAP-py。\nanswer 重音在第一音节：AN-swer。\n节奏：I will be HAP-py ｜ to AN-swer ｜ your QUES-tions.',
    quiz: [
      { q: '把「我很乐意回答您的问题。」用英语说出来。', a: 'I will be happy to answer your questions.' },
      { q: '「乐意回答」用英语怎么说？', a: 'be happy to answer (/biː ˈhæpi tuː ˈɑːnsər/)' },
    ],
  },
  {
    id: 1919,
    speaker: 'Manager',
    en: 'We look forward to working with you.',
    cn: '期待与您合作。',
    ipa: '/wiː lʊk ˈfɔːrwərd tuː ˈwɜːrkɪŋ wɪð juː/',
    tags: ['第1919句', '结束参观', '★★★★★'],
    when: '值班经理表达对未来合作的期待，为商务关系奠定良好基础。',
    words: [
      { w: 'look forward to', ipa: '/lʊk ˈfɔːrwərd tuː/', pos: '短语动词', cn: '期待', memory: 'look(看)+forward(向前)+to(朝)→向前看→期待', phonics: 'look 读 /lʊk/；for 读 /fɔːr/，ward 读 /wərd/', collocations: [['look forward to meeting', '期待见面'], ['look forward to working', '期待合作'], ['look forward to hearing', '期待收到回复']], examples: [['We look forward to your reply.', '期待您的回复。'], ['I look forward to meeting you.', '期待与您见面。']] },
    ],
    phrases: [
      { p: 'look forward to + doing', ipa: '/lʊk ˈfɔːrwərd tuː/', cn: '期待...', why: 'to 是介词，后面接动名词（-ing形式），表示期待某事。' },
    ],
    grammar: [
      { q: '为什么用 working 而不是 work？', a: 'look forward to 中的 to 是介词，介词后面必须接名词或动名词。\n✅ We look forward to working with you.（期待与您合作。working 是动名词）\n❌ We look forward to work with you.（错误，work 是动词原形）' },
    ],
    pattern: 'We look forward to + 动名词 + with you',
    patternExamples: [
      { en: 'We look forward to cooperating with you.', cn: '期待与您合作。', words: [] },
      { en: 'We look forward to meeting you again.', cn: '期待再次与您见面。', words: [] },
      { en: 'We look forward to hearing from you.', cn: '期待收到您的回复。', words: [] },
    ],
    thinking: '表达对未来合作的期待是商务礼仪的标准结束语，为后续合作奠定基础。\nlook forward to 是商务英语的固定搭配，to 是介词，后面必须接动名词。\n这是商务邮件和正式场合的高频用语，必须熟练掌握。',
    pronunciation: 'forward 重音在第一音节：FOR-ward。\n注意 look 中的 oo 读 /ʊ/，不是 /uː/。\n节奏：We LOOK ｜ FOR-ward ｜ to WORK-ing ｜ with YOU.',
    quiz: [
      { q: '把「期待与您合作。」用英语说出来。', a: 'We look forward to working with you.' },
      { q: '「期待」用英语怎么说？', a: 'look forward to (/lʊk ˈfɔːrwərd tuː/)' },
    ],
  },
  {
    id: 1920,
    speaker: 'Manager',
    en: 'Have a safe trip back.',
    cn: '祝您一路平安。',
    ipa: '/hæv ə seɪf trɪp bæk/',
    tags: ['第1920句', '结束参观', '★★★★'],
    when: '值班经理向客户道别，表达关心和礼貌。',
    words: [
      { w: 'safe', ipa: '/seɪf/', pos: '形容词', cn: '安全的', memory: 'saf(e)(安全的)→没有危险的', phonics: 'safe 读 /seɪf/，a 读 /eɪ/', collocations: [['safe trip', '平安旅程'], ['safe journey', '平安旅途'], ['drive safe', '安全驾驶']], examples: [['Have a safe trip.', '一路平安。'], ['Drive safe.', '开车小心。']] },
      { w: 'trip', ipa: '/trɪp/', pos: '名词', cn: '旅程；行程', memory: 'trip 原义为绊倒，后引申为短途旅行', phonics: 'trip 读 /trɪp/，i 读 /ɪ/', collocations: [['business trip', '商务旅行'], ['safe trip', '平安旅程'], ['return trip', '返程']], examples: [['Have a safe trip back.', '祝您返程平安。'], ['How was your trip?', '您的旅程怎么样？']] },
    ],
    phrases: [
      { p: 'safe trip back', ipa: '/seɪf trɪp bæk/', cn: '返程平安', why: 'back 表示返回，safe trip back 是对返程的祝福。' },
    ],
    grammar: [
      { q: '为什么用 Have a safe trip 而不是 I wish you a safe trip？', a: 'Have a safe trip 是口语化的简洁表达，更自然。\nI wish you a safe trip 更正式，但稍显冗长。\n✅ Have a safe trip.（一路平安。口语常用）\n✅ I wish you a safe trip.（祝您一路平安。正式）' },
    ],
    pattern: 'Have a + 形容词 + 名词',
    patternExamples: [
      { en: 'Have a good day.', cn: '祝您有美好的一天。', words: [] },
      { en: 'Have a nice weekend.', cn: '祝您周末愉快。', words: [] },
      { en: 'Have a safe journey.', cn: '祝您旅途平安。', words: [] },
    ],
    thinking: '参观结束时送上祝福是商务礼仪的完美收尾，体现专业和关怀。\nHave a safe trip back 是英语中常用的道别语，适用于客人需要返回的场景。\n英语中用 Have a + 形容词 + 名词 的结构表达祝福，是口语化的简洁表达。',
    pronunciation: 'safe 读 /seɪf/，a 是长元音。\ntrip 读 /trɪp/，i 是短元音。\n节奏：Have a SAFE ｜ TRIP ｜ BACK.',
    quiz: [
      { q: '把「祝您一路平安。」用英语说出来。', a: 'Have a safe trip back.' },
      { q: '「一路平安」用英语怎么说？', a: 'Have a safe trip (/hæv ə seɪf trɪp/)' },
    ],
  },
];

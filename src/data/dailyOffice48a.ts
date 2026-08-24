// EXPORTS: MOCK_SENTENCES_DAILYOFFICE48A

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_DAILYOFFICE48A: ISentence[] = [
  {
    id: 2561,
    speaker: 'Engineer',
    en: 'A package has arrived for you.',
    cn: '有你的快递到了。',
    ipa: '/ə ˈpækɪdʒ hæz əˈraɪvd fɔːr juː/',
    tags: ['第2561句', '快递收货', '★★★★'],
    when: '前台或仓库通知工程师有快递包裹送达。',
    words: [
      { w: 'package', ipa: '/ˈpækɪdʒ/', pos: '名词', cn: '包裹；快递', memory: 'pack(打包)+age(名词后缀)→打包好的东西→包裹。', phonics: 'pack 读 /pæk/，age 读 /ɪdʒ/，重音在第一音节。', collocations: [['receive a package', '收到包裹'], ['send a package', '寄包裹'], ['package tracking', '快递追踪']], examples: [['The package is on your desk.', '包裹在你桌上。'], ['I sent a package yesterday.', '我昨天寄了一个包裹。']] },
      { w: 'arrived', ipa: '/əˈraɪvd/', pos: '动词（过去分词）', cn: '到达；送达', memory: 'arrive 表示到达某地或某人处。', phonics: 'ar 读 /ə/，rive 读 /raɪv/，ed 读 /d/，重音在第二音节。', collocations: [['has arrived', '已经到了'], ['arrived safely', '安全到达'], ['arrived on time', '准时到达']], examples: [['The shipment has arrived.', '货物已经到了。'], ['Your order arrived today.', '你的订单今天到了。']] },
    ],
    phrases: [
      { p: 'has arrived', ipa: '/hæz əˈraɪvd/', cn: '已经到了', why: 'have/has + 过去分词，现在完成时表示动作已完成且与现在有关。' },
      { p: 'for you', ipa: '/fɔːr juː/', cn: '给你的', why: 'for 表示目的或对象，说明包裹是给谁的。' },
    ],
    grammar: [
      { q: 'has arrived 和 arrived 有什么区别？', a: 'has arrived 是现在完成时，强调「到现在为止已经到了」，侧重当前状态。\narrived 是一般过去时，侧重过去某个时间点发生的事。\n✅ A package has arrived.（包裹到了。）—— 通知现在的情况\n✅ The package arrived yesterday.（包裹昨天到的。）—— 说明过去的时间点' },
    ],
    pattern: 'A package has arrived for + 人.',
    patternExamples: [
      { en: 'A package has arrived for the engineering team.', cn: '工程团队有快递到了。', words: [] },
      { en: 'A letter has arrived for the manager.', cn: '经理有一封信到了。', words: [] },
      { en: 'Two packages have arrived for you today.', cn: '你今天有两个包裹到了。', words: [] },
    ],
    thinking: '在数据中心，备件和耗材经常通过快递送达。\nA package has arrived for you 是通知同事快递到了的标准表达。\n中文说「有你的快递到了」，英语用 A package has arrived for you。',
    pronunciation: 'package 重音在第一音节：PACK-age。\narrived 重音在第二音节：a-RIVED。\n节奏：a PACK-age ｜ has a-RIVED ｜ for YOU.',
    quiz: [
      { q: '把「有你的快递到了。」用英语说出来。', a: 'A package has arrived for you.' },
      { q: '「包裹；快递」用英语怎么说？', a: 'package (/ˈpækɪdʒ/)' },
    ],
  },
  {
    id: 2562,
    speaker: 'Engineer',
    en: 'Could you sign for this delivery?',
    cn: '你能签收一下这个快递吗？',
    ipa: '/kʊd juː saɪn fɔːr ðɪs dɪˈlɪvəri/',
    tags: ['第2562句', '快递收货', '★★★★'],
    when: '快递员送到后需要收件人签字确认。',
    words: [
      { w: 'sign', ipa: '/saɪn/', pos: '动词', cn: '签字；签收', memory: 'sign 本义是签名、标记，引申为签收快递。', phonics: 's 读 /s/，ign 读 /aɪn/，单音节。', collocations: [['sign for', '签收'], ['sign here', '在这里签字'], ['sign the document', '签署文件']], examples: [['Please sign here.', '请在这里签字。'], ['I signed for the package.', '我签收了包裹。']] },
      { w: 'delivery', ipa: '/dɪˈlɪvəri/', pos: '名词', cn: '递送；送货', memory: 'deliver(递送)+y(名词后缀)→递送的行为。', phonics: 'de 读 /dɪ/，liv 读 /lɪv/，er 读 /ər/，y 读 /i/，重音在第二音节。', collocations: [['sign for delivery', '签收'], ['delivery date', '送达日期'], ['free delivery', '免费配送']], examples: [['The delivery is on the way.', '快递在路上。'], ['Expected delivery: tomorrow.', '预计明天送达。']] },
    ],
    phrases: [
      { p: 'sign for', ipa: '/saɪn fɔːr/', cn: '签收', why: 'sign for + 物品，表示签收某个递送件，是快递签收的标准搭配。' },
      { p: 'this delivery', ipa: '/ðɪs dɪˈlɪvəri/', cn: '这个快递', why: 'this 限定当前这批送货，delivery 指整个递送过程或递送的物品。' },
    ],
    grammar: [
      { q: 'Could you sign 为什么用 could 不用 can？', a: 'Could you sign 更礼貌委婉，适合请求同事帮忙。\nCan you sign 更直接随意。\n✅ Could you sign for this delivery?（你能签收一下吗？）—— 礼貌请求\n✅ Can you sign here?（你能在这里签字吗？）—— 随意请求\n对于不太熟悉的同事或正式场合推荐用 Could you。' },
    ],
    pattern: 'Could you sign for + 物品?',
    patternExamples: [
      { en: 'Could you sign for the equipment?', cn: '你能签收一下这批设备吗？', words: [] },
      { en: 'Could you sign for the spare parts?', cn: '你能签收一下备件吗？', words: [] },
      { en: 'Could you sign for these materials?', cn: '你能签收一下这些物料吗？', words: [] },
    ],
    thinking: '快递签收是数据中心日常收货的标准流程。\nCould you sign for this delivery 是请同事帮忙签收的礼貌表达。\n中文说「你能签收一下快递吗」，英语用 Could you sign for this delivery。',
    pronunciation: 'sign 读 /saɪn/，单音节。\ndelivery 重音在第二音节：de-LIV-er-y。\n节奏：COULD you ｜ SIGN for ｜ this de-LIV-ery?',
    quiz: [
      { q: '把「你能签收一下这个快递吗？」用英语说出来。', a: 'Could you sign for this delivery?' },
      { q: '「签收」用英语怎么说？', a: 'sign for (/saɪn fɔːr/)' },
    ],
  },
  {
    id: 2563,
    speaker: 'Engineer',
    en: 'Please check whether everything is included.',
    cn: '请检查物品是否齐全。',
    ipa: '/pliːz tʃɛk ˈwɛðər ˈɛvriθɪŋ ɪz ɪnˈkluːdɪd/',
    tags: ['第2563句', '快递收货', '★★★★'],
    when: '收到备件后需要逐一核对装箱清单，确认物品齐全。',
    words: [
      { w: 'whether', ipa: '/ˈwɛðər/', pos: '连词', cn: '是否', memory: 'whether 引导宾语从句，表示「是否」，与 if 同义但更正式。', phonics: 'wheth 读 /wɛð/，er 读 /ər/，重音在第一音节。', collocations: [['check whether', '检查是否'], ['whether or not', '无论是否']], examples: [['Check whether the door is locked.', '检查门是否锁好。'], ['I wonder whether it works.', '我不知道是否有效。']] },
      { w: 'included', ipa: '/ɪnˈkluːdɪd/', pos: '形容词', cn: '包含在内的', memory: 'include(包含)+ed(过去分词)→被包含的。', phonics: 'in 读 /ɪn/，clud 读 /kluːd/，ed 读 /ɪd/，重音在第二音节。', collocations: [['is included', '包含在内'], ['everything included', '全部包含'], ['not included', '不含']], examples: [['Batteries are not included.', '不含电池。'], ['Tax is included in the price.', '价格含税。']] },
    ],
    phrases: [
      { p: 'check whether', ipa: '/tʃɛk ˈwɛðər/', cn: '检查是否', why: 'check + whether 引导的宾语从句，用于核实某个条件是否成立。' },
      { p: 'everything is included', ipa: '/ˈɛvriθɪŋ ɪz ɪnˈkluːdɪd/', cn: '物品齐全', why: 'everything 指所有物品，is included 表示全部都在包裹中。' },
    ],
    grammar: [
      { q: 'whether 和 if 在这里可以互换吗？', a: '可以，两者都引导宾语从句表示「是否」。\nwhether 更正式，常用于书面和正式场合。\nif 更口语化。\n✅ Please check whether everything is included.（请检查是否齐全。）—— 正式\n✅ Check if everything is here.（看看东西是否都在。）—— 口语' },
    ],
    pattern: 'Please check whether + 从句.',
    patternExamples: [
      { en: 'Please check whether the seals are intact.', cn: '请检查密封是否完好。', words: [] },
      { en: 'Please check whether the model number matches.', cn: '请检查型号是否匹配。', words: [] },
      { en: 'Please check whether all parts are present.', cn: '请检查所有零件是否都在。', words: [] },
    ],
    thinking: '收货后核对装箱清单是数据中心备件管理的标准操作。\nPlease check whether everything is included 是要求确认物品齐全。\n中文说「请检查物品是否齐全」，英语用 Please check whether everything is included。',
    pronunciation: 'whether 读 /ˈwɛðər/，重音在第一音节。\nincluded 重音在第二音节：in-CLUD-ed。\n节奏：PLEASE CHECK ｜ WHE-ther ｜ EV-ery-thing ｜ is in-CLUD-ed.',
    quiz: [
      { q: '把「请检查物品是否齐全。」用英语说出来。', a: 'Please check whether everything is included.' },
      { q: '「是否」用英语怎么说？', a: 'whether (/ˈwɛðər/)' },
    ],
  },
  {
    id: 2564,
    speaker: 'Engineer',
    en: 'One item is missing from the shipment.',
    cn: '这批货少了一件物品。',
    ipa: '/wʌn ˈaɪtəm ɪz ˈmɪsɪŋ frɒm ðə ˈʃɪpmənt/',
    tags: ['第2564句', '快递收货', '★★★★'],
    when: '开箱核对发现清单上的一件物品不在包裹中。',
    words: [
      { w: 'missing', ipa: '/ˈmɪsɪŋ/', pos: '形容词', cn: '缺失的；丢失的', memory: 'miss(错过/丢失)+ing(形容词后缀)→缺失的。', phonics: 'miss 读 /mɪs/，ing 读 /ɪŋ/，重音在第一音节。', collocations: [['is missing', '缺失了'], ['missing item', '缺失物品'], ['missing parts', '缺少的零件']], examples: [['A component is missing.', '有一个零件缺失了。'], ['The label is missing.', '标签不见了。']] },
      { w: 'shipment', ipa: '/ˈʃɪpmənt/', pos: '名词', cn: '货运；一批货物', memory: 'ship(运输)+ment(名词后缀)→运输的一批东西→货物。', phonics: 'ship 读 /ʃɪp/，ment 读 /mənt/，重音在第一音节。', collocations: [['from the shipment', '从这批货中'], ['shipment arrived', '货物到达'], ['shipment tracking', '货运追踪']], examples: [['The shipment arrived today.', '这批货今天到了。'], ['Track the shipment online.', '在线追踪货运。']] },
    ],
    phrases: [
      { p: 'is missing', ipa: '/ɪz ˈmɪsɪŋ/', cn: '缺失了', why: 'be + missing 表示某物不在应该在的位置，是状态描述而非动作。' },
      { p: 'from the shipment', ipa: '/frɒm ðə ˈʃɪpmənt/', cn: '从这批货中', why: 'from 指出缺失发生的范围，shipment 指整批运达的货物。' },
    ],
    grammar: [
      { q: 'is missing 和 has been lost 有什么区别？', a: 'is missing 描述当前状态——东西不在这里，但不一定丢了。\nhas been lost 暗示东西可能永久丢失了。\n✅ One item is missing.（少了一件。）—— 状态描述，可能放错了\n✅ One item has been lost.（丢了一件。）—— 确认丢失\n收货场景用 is missing 更准确。' },
    ],
    pattern: '数量 + item(s) is/are missing from + 来源.',
    patternExamples: [
      { en: 'Two cables are missing from the box.', cn: '箱子里少了两根线缆。', words: [] },
      { en: 'One connector is missing from the order.', cn: '订单里少了一个接头。', words: [] },
      { en: 'Three items are missing from the delivery.', cn: '这批送货少了三件物品。', words: [] },
    ],
    thinking: '收货时发现缺件需要及时上报采购部门。\nOne item is missing from the shipment 是报告缺件的标准表达。\n中文说「这批货少了一件物品」，英语用 One item is missing from the shipment。',
    pronunciation: 'missing 重音在第一音节：MISS-ing。\nshipment 重音在第一音节：SHIP-ment。\n节奏：ONE I-tem ｜ is MISS-ing ｜ from the SHIP-ment.',
    quiz: [
      { q: '把「这批货少了一件物品。」用英语说出来。', a: 'One item is missing from the shipment.' },
      { q: '「一批货物」用英语怎么说？', a: 'shipment (/ˈʃɪpmənt/)' },
    ],
  },
  {
    id: 2565,
    speaker: 'Engineer',
    en: 'The package was delivered to the warehouse.',
    cn: '快递已经送到仓库了。',
    ipa: '/ðə ˈpækɪdʒ wɒz dɪˈlɪvərd tuː ðə ˈwɛəhaʊs/',
    tags: ['第2565句', '快递收货', '★★★★'],
    when: '快递送到时收件人不在工位，前台或物流部门将包裹转送到仓库。',
    words: [
      { w: 'delivered', ipa: '/dɪˈlɪvərd/', pos: '动词（过去分词）', cn: '送达；递送', memory: 'deliver(递送)+ed(过去式)→已经递送了。', phonics: 'de 读 /dɪ/，liv 读 /lɪv/，ered 读 /ərd/，重音在第二音节。', collocations: [['was delivered', '被送到了'], ['delivered to', '送到'], ['delivered on time', '准时送达']], examples: [['The parts were delivered yesterday.', '零件昨天送到了。'], ['Has it been delivered?', '送到了吗？']] },
      { w: 'warehouse', ipa: '/ˈwɛəhaʊs/', pos: '名词', cn: '仓库', memory: 'ware(货物)+house(房子)→存放货物的房子→仓库。', phonics: 'ware 读 /wɛər/，house 读 /haʊs/，重音在第一音节。', collocations: [['in the warehouse', '在仓库里'], ['warehouse manager', '仓库管理员'], ['warehouse inventory', '仓库库存']], examples: [['Go to the warehouse.', '去仓库。'], ['The warehouse is full.', '仓库满了。']] },
    ],
    phrases: [
      { p: 'was delivered to', ipa: '/wɒz dɪˈlɪvərd tuː/', cn: '被送到了', why: 'was + 过去分词 构成被动语态，表示包裹被某人送到了某地。' },
      { p: 'the warehouse', ipa: '/ðə ˈwɛəhaʊs/', cn: '仓库', why: 'warehouse 在数据中心场景中常指备件仓库或物资存储区。' },
    ],
    grammar: [
      { q: 'was delivered 是被动语态吗？', a: '是的，was delivered 是一般过去时的被动语态。\n主动：The courier delivered the package.（快递员送了包裹。）\n被动：The package was delivered.（包裹被送到了。）\n被动语态强调动作的承受者（包裹），而不是执行者（快递员）。' },
    ],
    pattern: '物品 + was/were delivered to + 地点.',
    patternExamples: [
      { en: 'The spare parts were delivered to the storage room.', cn: '备件被送到了储物间。', words: [] },
      { en: 'The equipment was delivered to the server room.', cn: '设备被送到了机房。', words: [] },
      { en: 'The tools were delivered to the workshop.', cn: '工具被送到了工具间。', words: [] },
    ],
    thinking: '数据中心的备件通常统一送到仓库，再由工程师领取。\nThe package was delivered to the warehouse 告知包裹的去向。\n中文说「快递已经送到仓库了」，英语用 The package was delivered to the warehouse。',
    pronunciation: 'delivered 重音在第二音节：de-LIV-ered。\nwarehouse 重音在第一音节：WARE-house。\n节奏：the PACK-age ｜ was de-LIV-ered ｜ to the WARE-house.',
    quiz: [
      { q: '把「快递已经送到仓库了。」用英语说出来。', a: 'The package was delivered to the warehouse.' },
      { q: '「仓库」用英语怎么说？', a: 'warehouse (/ˈwɛəhaʊs/)' },
    ],
  },
  {
    id: 2566,
    speaker: 'Engineer',
    en: 'Please move these boxes to the storage room.',
    cn: '请把这些箱子搬到仓库。',
    ipa: '/pliːz muːv ðiːz ˈbɒksɪz tuː ðə ˈstɔːrɪdʒ ruːm/',
    tags: ['第2566句', '快递收货', '★★★★'],
    when: '收到多个箱子后需要搬运到存储区域存放。',
    words: [
      { w: 'move', ipa: '/muːv/', pos: '动词', cn: '搬动；移动', memory: 'move 表示将物体从一个位置移到另一个位置。', phonics: 'm 读 /m/，ove 读 /uːv/，单音节。', collocations: [['move to', '搬到'], ['move boxes', '搬箱子'], ['move equipment', '搬设备']], examples: [['Please move this desk.', '请搬一下这张桌子。'], ['We moved the servers.', '我们搬了服务器。']] },
      { w: 'storage room', ipa: '/ˈstɔːrɪdʒ ruːm/', pos: '名词', cn: '储物间；仓库', memory: 'storage(储存)+room(房间)→用来储存的房间。', phonics: 'stor 读 /stɔːr/，age 读 /ɪdʒ/，room 读 /ruːm/，重音在 stor。', collocations: [['in the storage room', '在储物间'], ['storage room key', '储物间钥匙']], examples: [['Put it in the storage room.', '放到储物间。'], ['The storage room is locked.', '储物间锁了。']] },
    ],
    phrases: [
      { p: 'move these boxes to', ipa: '/muːv ðiːz ˈbɒksɪz tuː/', cn: '把这些箱子搬到', why: 'move + 物品 + to + 目的地，表示将物品搬到指定地点。' },
      { p: 'the storage room', ipa: '/ðə ˈstɔːrɪdʒ ruːm/', cn: '储物间', why: 'storage room 是数据中心中存放备件和物资的房间。' },
    ],
    grammar: [
      { q: 'move 和 carry 有什么区别？', a: 'move 强调改变位置，不一定用手搬。\ncarry 强调用手或身体搬运，有「负重」的含义。\n✅ Move these boxes to the storage room.（把箱子搬到储物间。）—— 侧重位置变化\n✅ Carry this box for me.（帮我搬一下这个箱子。）—— 侧重搬运动作' },
    ],
    pattern: 'Please move + 物品 + to + 目的地.',
    patternExamples: [
      { en: 'Please move the UPS to the mechanical room.', cn: '请把UPS搬到机械间。', words: [] },
      { en: 'Please move the cables to the cable tray.', cn: '请把线缆搬到线槽。', words: [] },
      { en: 'Please move these pallets to the loading dock.', cn: '请把这些托盘搬到装卸区。', words: [] },
    ],
    thinking: '收到大批货物后需要搬运到存储区是常见场景。\nPlease move these boxes to the storage room 是指令式请求。\n中文说「请把箱子搬到仓库」，英语用 Please move these boxes to the storage room。',
    pronunciation: 'move 读 /muːv/，单音节。\nstorage 重音在第一音节：STOR-age。\n节奏：PLEASE MOVE ｜ these BOX-es ｜ to the STOR-age ROOM.',
    quiz: [
      { q: '把「请把这些箱子搬到仓库。」用英语说出来。', a: 'Please move these boxes to the storage room.' },
      { q: '「储物间」用英语怎么说？', a: 'storage room (/ˈstɔːrɪdʒ ruːm/)' },
    ],
  },
  {
    id: 2567,
    speaker: 'Engineer',
    en: 'The spare parts have arrived.',
    cn: '备件已经到了。',
    ipa: '/ðə spɛər pɑːrts hæv əˈraɪvd/',
    tags: ['第2567句', '快递收货', '★★★★'],
    when: '等待的维修备件到货，通知相关工程师可以来领取。',
    words: [
      { w: 'spare parts', ipa: '/spɛər pɑːrts/', pos: '名词（复数）', cn: '备件；零配件', memory: 'spare(备用的)+parts(零件)→备用的零件→备件。', phonics: 'spare 读 /spɛər/，parts 读 /pɑːrts/。', collocations: [['spare parts inventory', '备件库存'], ['order spare parts', '订购备件'], ['spare parts list', '备件清单']], examples: [['We need spare parts for the UPS.', '我们需要UPS的备件。'], ['The spare parts are in stock.', '备件有库存。']] },
    ],
    phrases: [
      { p: 'have arrived', ipa: '/hæv əˈraɪvd/', cn: '已经到了', why: 'have + arrived 是现在完成时，表示备件已经到达，可以用于领取。' },
    ],
    grammar: [
      { q: 'spare parts 用 have 还是 has？', a: 'spare parts 是复数名词，用 have。\n✅ The spare parts have arrived.（备件已经到了。）\n❌ The spare parts has arrived.（错误：主语是复数）\n✅ The spare part has arrived.（那个备件已经到了。）—— 单数用 has' },
    ],
    pattern: 'The + 物品 + have/has arrived.',
    patternExamples: [
      { en: 'The new UPS modules have arrived.', cn: '新的UPS模块到了。', words: [] },
      { en: 'The replacement filter has arrived.', cn: '替换滤芯到了。', words: [] },
      { en: 'The emergency supplies have arrived.', cn: '应急物资到了。', words: [] },
    ],
    thinking: '备件到货是数据中心维修流程中的关键节点。\nThe spare parts have arrived 通知相关人员备件已到位。\n中文说「备件已经到了」，英语用 The spare parts have arrived。',
    pronunciation: 'spare 读 /spɛər/，parts 读 /pɑːrts/。\narrived 重音在第二音节：a-RIVED。\n节奏：the SPARE PARTS ｜ have a-RIVED.',
    quiz: [
      { q: '把「备件已经到了。」用英语说出来。', a: 'The spare parts have arrived.' },
      { q: '「备件」用英语怎么说？', a: 'spare parts (/spɛər pɑːrts/)' },
    ],
  },
  {
    id: 2568,
    speaker: 'Engineer',
    en: 'Please inspect the package for any damage.',
    cn: '请检查包装是否有破损。',
    ipa: '/pliːz ɪnˈspɛkt ðə ˈpækɪdʒ fɔːr ˈɛni ˈdæmɪdʒ/',
    tags: ['第2568句', '快递收货', '★★★★'],
    when: '收到易损设备（如服务器硬盘、精密仪器）后需检查外包装完整性。',
    words: [
      { w: 'inspect', ipa: '/ɪnˈspɛkt/', pos: '动词', cn: '检查；检验', memory: 'in(进入)+spect(看)→仔细看→检查。', phonics: 'in 读 /ɪn/，spect 读 /spɛkt/，重音在第二音节。', collocations: [['inspect for', '检查是否有'], ['inspect carefully', '仔细检查'], ['inspect the equipment', '检查设备']], examples: [['Inspect the unit before use.', '使用前检查设备。'], ['We inspected every component.', '我们检查了每个组件。']] },
      { w: 'damage', ipa: '/ˈdæmɪdʒ/', pos: '名词', cn: '损坏；破损', memory: 'damage 表示物理上的损害或破坏。', phonics: 'dam 读 /dæm/，age 读 /ɪdʒ/，重音在第一音节。', collocations: [['for any damage', '是否有破损'], ['no damage', '无损坏'], ['water damage', '水损']], examples: [['Check for any damage.', '检查是否有损坏。'], ['The package shows no damage.', '包装没有损坏迹象。']] },
    ],
    phrases: [
      { p: 'inspect for', ipa: '/ɪnˈspɛkt fɔːr/', cn: '检查是否有', why: 'inspect + for + 问题类型，表示针对某种特定问题进行检查。' },
      { p: 'any damage', ipa: '/ˈɛni ˈdæmɪdʒ/', cn: '任何损坏', why: 'any 用于疑问和否定句中表示「任何」，检查是否有任何损坏。' },
    ],
    grammar: [
      { q: 'inspect 和 check 有什么区别？', a: 'inspect 更正式、更仔细，暗示系统性的逐项检查。\ncheck 更通用，可以是快速看一眼。\n✅ Please inspect the package for damage.（请仔细检查包装是否有损坏。）—— 正式、仔细\n✅ Check the package.（看看包裹。）—— 通用、可能只是看一眼\n收货质检场景用 inspect 更专业。' },
    ],
    pattern: 'Please inspect + 对象 + for + 问题.',
    patternExamples: [
      { en: 'Please inspect the cables for fraying.', cn: '请检查线缆是否有磨损。', words: [] },
      { en: 'Please inspect the connectors for corrosion.', cn: '请检查接头是否有腐蚀。', words: [] },
      { en: 'Please inspect the rack for loose bolts.', cn: '请检查机柜是否有松动的螺栓。', words: [] },
    ],
    thinking: '收货后检查包装完整性是防止损坏设备入库的关键步骤。\nPlease inspect the package for any damage 是要求仔细检查。\n中文说「请检查包装是否有破损」，英语用 Please inspect the package for any damage。',
    pronunciation: 'inspect 重音在第二音节：in-SPECT。\ndamage 重音在第一音节：DAM-age。\n节奏：please in-SPECT ｜ the PACK-age ｜ for AN-y DAM-age.',
    quiz: [
      { q: '把「请检查包装是否有破损。」用英语说出来。', a: 'Please inspect the package for any damage.' },
      { q: '「检查；检验」用英语怎么说？', a: 'inspect (/ɪnˈspɛkt/)' },
    ],
  },
  {
    id: 2569,
    speaker: 'Engineer',
    en: 'Please inform Purchasing that the goods have arrived.',
    cn: '请通知采购部门货物已经到达。',
    ipa: '/pliːz ɪnˈfɔːrm ˈpɜːrtʃəsɪŋ ðæt ðə ɡʊdz hæv əˈraɪvd/',
    tags: ['第2569句', '快递收货', '★★★★'],
    when: '货物送达后需要通知采购部门更新订单状态和入库记录。',
    words: [
      { w: 'inform', ipa: '/ɪnˈfɔːrm/', pos: '动词', cn: '通知；告知', memory: 'in(进入)+form(形态)→把信息传入→通知。', phonics: 'in 读 /ɪn/，form 读 /fɔːrm/，重音在第二音节。', collocations: [['inform someone that', '通知某人…'], ['inform the team', '通知团队'], ['please inform', '请通知']], examples: [['Please inform the manager.', '请通知经理。'], ['We informed the vendor.', '我们通知了供应商。']] },
      { w: 'Purchasing', ipa: '/ˈpɜːrtʃəsɪŋ/', pos: '名词', cn: '采购部门', memory: 'purchase(采购)+ing(名词化)→采购部门/采购行为。', phonics: 'pur 读 /pɜːr/，chas 读 /tʃəs/，ing 读 /ɪŋ/，重音在第一音节。', collocations: [['Purchasing department', '采购部门'], ['inform Purchasing', '通知采购'], ['Purchasing order', '采购订单']], examples: [['Contact Purchasing for a quote.', '联系采购部门询价。'], ['Purchasing approved the order.', '采购部门批准了订单。']] },
    ],
    phrases: [
      { p: 'inform Purchasing that', ipa: '/ɪnˈfɔːrm ˈpɜːrtʃəsɪŋ ðæt/', cn: '通知采购部门…', why: 'inform + 对象 + that + 从句，是正式通知的标准结构。' },
      { p: 'the goods have arrived', ipa: '/ðə ɡʊdz hæv əˈraɪvd/', cn: '货物已经到达', why: 'goods 指货物（复数），have arrived 表示已到。' },
    ],
    grammar: [
      { q: 'inform 后面为什么用 that 从句？', a: 'inform + 人/部门 + that + 从句 是「通知某人某事」的固定结构。\n✅ Inform Purchasing that the goods have arrived.（通知采购部门货物到了。）\n✅ Inform the team that the meeting is cancelled.（通知团队会议取消了。）\n也可以简化为 inform + 人 + of + 名词：Inform Purchasing of the arrival.' },
    ],
    pattern: 'Please inform + 部门/人 + that + 从句.',
    patternExamples: [
      { en: 'Please inform the vendor that the parts are defective.', cn: '请通知供应商零件有缺陷。', words: [] },
      { en: 'Please inform IT that the network is down.', cn: '请通知IT部门网络断了。', words: [] },
      { en: 'Please inform the shift lead that the alarm is cleared.', cn: '请通知值班主管告警已恢复。', words: [] },
    ],
    thinking: '货物到达后通知采购部门是跨部门协作的标准流程。\nPlease inform Purchasing that the goods have arrived 是正式通知用语。\n中文说「请通知采购部门货物到了」，英语用 Please inform Purchasing that the goods have arrived。',
    pronunciation: 'inform 重音在第二音节：in-FORM。\nPurchasing 重音在第一音节：PUR-chas-ing。\n节奏：please in-FORM ｜ PUR-chas-ing ｜ that the GOODS ｜ have a-RIVED.',
    quiz: [
      { q: '把「请通知采购部门货物已经到达。」用英语说出来。', a: 'Please inform Purchasing that the goods have arrived.' },
      { q: '「采购部门」用英语怎么说？', a: 'Purchasing (/ˈpɜːrtʃəsɪŋ/)' },
    ],
  },
  {
    id: 2570,
    speaker: 'Engineer',
    en: 'The delivery is complete.',
    cn: '这批货已经全部送到。',
    ipa: '/ðə dɪˈlɪvəri ɪz kəmˈpliːt/',
    tags: ['第2570句', '快递收货', '★★★★'],
    when: '所有订购的货物已经全部送达，没有遗漏。',
    words: [
      { w: 'complete', ipa: '/kəmˈpliːt/', pos: '形容词', cn: '完整的；全部完成的', memory: 'com(全部)+plete(满)→全部满了→完整的。', phonics: 'com 读 /kəm/，plete 读 /pliːt/，重音在第二音节。', collocations: [['is complete', '已完成'], ['complete delivery', '全部送达'], ['complete set', '完整一套']], examples: [['The inspection is complete.', '检查已完成。'], ['The order is now complete.', '订单现在已全部到齐。']] },
    ],
    phrases: [
      { p: 'is complete', ipa: '/ɪz kəmˈpliːt/', cn: '已全部完成', why: 'be + complete 表示某个过程或任务已经全部完成，没有遗漏。' },
    ],
    grammar: [
      { q: 'complete 和 finished 有什么区别？', a: 'complete 强调「完整、无遗漏」，所有部分都齐了。\nfinished 强调「做完了」，侧重动作的结束。\n✅ The delivery is complete.（送货已全部完成。）—— 所有东西都到了\n✅ The delivery is finished.（送货结束了。）—— 送货过程结束了\n确认货物齐全时用 complete 更准确。' },
    ],
    pattern: 'The + 事项 + is complete.',
    patternExamples: [
      { en: 'The inventory check is complete.', cn: '库存盘点已完成。', words: [] },
      { en: 'The installation is complete.', cn: '安装已完成。', words: [] },
      { en: 'The maintenance is complete.', cn: '维护已完成。', words: [] },
    ],
    thinking: '确认整批货物全部送达是收货流程的最后一步。\nThe delivery is complete 表示所有物品已经全部到位。\n中文说「这批货已经全部送到」，英语用 The delivery is complete。',
    pronunciation: 'delivery 重音在第二音节：de-LIV-er-y。\ncomplete 重音在第二音节：com-PLETE。\n节奏：the de-LIV-er-y ｜ is com-PLETE.',
    quiz: [
      { q: '把「这批货已经全部送到。」用英语说出来。', a: 'The delivery is complete.' },
      { q: '「全部完成的」用英语怎么说？', a: 'complete (/kəmˈpliːt/)' },
    ],
  },
  {
    id: 2571,
    speaker: 'Engineer',
    en: 'I need to collect some spare parts from the warehouse.',
    cn: '我需要去仓库领取一些备件。',
    ipa: '/aɪ niːd tuː kəˈlɛkt sʌm spɛər pɑːrts frɒm ðə ˈwɛəhaʊs/',
    tags: ['第2571句', '仓库管理', '★★★★'],
    when: '维修或巡检前需要到仓库领取所需的备件。',
    words: [
      { w: 'collect', ipa: '/kəˈlɛkt/', pos: '动词', cn: '领取；收集', memory: 'col(共同)+lect(选)→把东西选到一起→收集/领取。', phonics: 'col 读 /kə/，lect 读 /lɛkt/，重音在第二音节。', collocations: [['collect from', '从…领取'], ['collect spare parts', '领取备件'], ['collect materials', '领取物料']], examples: [['Collect the keys from reception.', '去前台领钥匙。'], ['I need to collect my badge.', '我需要去领工牌。']] },
    ],
    phrases: [
      { p: 'collect from the warehouse', ipa: '/kəˈlɛkt frɒm ðə ˈwɛəhaʊs/', cn: '从仓库领取', why: 'collect + from + 地点，表示从指定地点领取物品。' },
    ],
    grammar: [
      { q: 'collect 和 pick up 有什么区别？', a: 'collect 更正式，常用于工作场景的领取。\npick up 更口语化。\n✅ I need to collect spare parts from the warehouse.（我需要去仓库领取备件。）—— 正式\n✅ I need to pick up some parts.（我需要去拿些零件。）—— 口语\n工作场合用 collect 更专业。' },
    ],
    pattern: 'I need to collect + 物品 + from + 地点.',
    patternExamples: [
      { en: 'I need to collect a new filter from the warehouse.', cn: '我需要去仓库领取一个新滤芯。', words: [] },
      { en: 'I need to collect the tools from the workshop.', cn: '我需要去工具间领取工具。', words: [] },
      { en: 'I need to collect PPE from the safety office.', cn: '我需要去安全办公室领取个人防护装备。', words: [] },
    ],
    thinking: '领取备件是数据中心维修前的准备工作。\nI need to collect some spare parts from the warehouse 表达了领取需求。\n中文说「我需要去仓库领取备件」，英语用 I need to collect some spare parts from the warehouse。',
    pronunciation: 'collect 重音在第二音节：col-LECT。\nwarehouse 重音在第一音节：WARE-house。\n节奏：I NEED ｜ to col-LECT ｜ some SPARE PARTS ｜ from the WARE-house.',
    quiz: [
      { q: '把「我需要去仓库领取一些备件。」用英语说出来。', a: 'I need to collect some spare parts from the warehouse.' },
      { q: '「领取；收集」用英语怎么说？', a: 'collect (/kəˈlɛkt/)' },
    ],
  },
  {
    id: 2572,
    speaker: 'Engineer',
    en: 'Please issue these materials to me.',
    cn: '请把这些物料发给我。',
    ipa: '/pliːz ˈɪʃuː ðiːz məˈtɪriəlz tuː miː/',
    tags: ['第2572句', '仓库管理', '★★★★'],
    when: '在仓库窗口向管理员申请发放所需物料。',
    words: [
      { w: 'issue', ipa: '/ˈɪʃuː/', pos: '动词', cn: '发放；发出', memory: 'issue 作动词表示正式发放或配发物品。', phonics: 'is 读 /ɪ/，sue 读 /ʃuː/，重音在第一音节。', collocations: [['issue materials', '发放物料'], ['issue to', '发放给'], ['issue a permit', '发放许可证']], examples: [['Issue the PPE to all workers.', '把PPE发给所有工人。'], ['Materials were issued yesterday.', '物料昨天已发放。']] },
      { w: 'materials', ipa: '/məˈtɪriəlz/', pos: '名词（复数）', cn: '物料；材料', memory: 'material(材料)+s(复数)→多种物料。', phonics: 'ma 读 /mə/，ter 读 /tɪr/，ials 读 /iəlz/，重音在第二音节。', collocations: [['raw materials', '原材料'], ['issue materials', '发放物料'], ['return materials', '退回物料']], examples: [['We need more materials.', '我们需要更多物料。'], ['The materials are ready.', '物料已准备好。']] },
    ],
    phrases: [
      { p: 'issue to me', ipa: '/ˈɪʃuː tuː miː/', cn: '发给我', why: 'issue + 物品 + to + 人，表示将物品正式发放给某人。' },
    ],
    grammar: [
      { q: 'issue 和 give 有什么区别？', a: 'issue 是正式的发放、配发，有记录和流程。\ngive 是普通的给予，较随意。\n✅ Please issue these materials to me.（请把这些物料发给我。）—— 正式领料\n✅ Give me the pen.（把笔给我。）—— 随意\n仓库领料用 issue 更专业。' },
    ],
    pattern: 'Please issue + 物品 + to + 人.',
    patternExamples: [
      { en: 'Please issue the safety harness to me.', cn: '请把安全带发给我。', words: [] },
      { en: 'Please issue a new badge to the intern.', cn: '请给实习生发一个新工牌。', words: [] },
      { en: 'Please issue the calibration tools to the team.', cn: '请把校准工具发给团队。', words: [] },
    ],
    thinking: '在仓库领取物料时需要正式申请发放。\nPlease issue these materials to me 是领料的标准用语。\n中文说「请把这些物料发给我」，英语用 Please issue these materials to me。',
    pronunciation: 'issue 重音在第一音节：IS-sue。\nmaterials 重音在第二音节：ma-TER-ials。\n节奏：please IS-sue ｜ these ma-TER-ials ｜ to ME.',
    quiz: [
      { q: '把「请把这些物料发给我。」用英语说出来。', a: 'Please issue these materials to me.' },
      { q: '「发放」用英语怎么说？', a: 'issue (/ˈɪʃuː/)' },
    ],
  },
  {
    id: 2573,
    speaker: 'Engineer',
    en: 'The requested materials are out of stock.',
    cn: '申请的物料已经没有库存了。',
    ipa: '/ðə rɪˈkwɛstɪd məˈtɪriəlz ɑːr aʊt əv stɒk/',
    tags: ['第2573句', '仓库管理', '★★★★'],
    when: '仓库管理员告知申请领用的物料当前库存为零。',
    words: [
      { w: 'requested', ipa: '/rɪˈkwɛstɪd/', pos: '形容词', cn: '申请了的；请求的', memory: 'request(请求)+ed(过去分词)→已经请求了的。', phonics: 're 读 /rɪ/，quest 读 /kwɛst/，ed 读 /ɪd/，重音在第二音节。', collocations: [['requested materials', '申请的物料'], ['requested items', '请求的物品']], examples: [['The requested part is unavailable.', '申请的零件不可用。'], ['Your requested order is pending.', '你申请的订单正在处理中。']] },
      { w: 'out of stock', ipa: '/aʊt əv stɒk/', pos: '短语', cn: '缺货；没有库存', memory: 'out of(没有)+stock(库存)→没有库存了。', phonics: 'out 读 /aʊt/，stock 读 /stɒk/。', collocations: [['out of stock', '缺货'], ['temporarily out of stock', '暂时缺货'], ['back in stock', '补货到位']], examples: [['This item is out of stock.', '这个物品缺货。'], ['When will it be back in stock?', '什么时候补货？']] },
    ],
    phrases: [
      { p: 'are out of stock', ipa: '/ɑːr aʊt əv stɒk/', cn: '没有库存了', why: 'be out of stock 是「缺货」的固定短语，stock 指库存量。' },
    ],
    grammar: [
      { q: 'out of stock 和 sold out 有什么区别？', a: 'out of stock 指库存为零，可以是任何原因（用完了、没补货等）。\nsold out 特指因为卖完了而缺货。\n✅ The materials are out of stock.（物料没有库存了。）—— 通用\n✅ The product is sold out.（产品卖完了。）—— 销售场景\n仓库领料用 out of stock。' },
    ],
    pattern: 'The + 物品 + is/are out of stock.',
    patternExamples: [
      { en: 'The backup batteries are out of stock.', cn: '备用电池没有库存了。', words: [] },
      { en: 'The air filters are out of stock.', cn: '空气滤芯缺货了。', words: [] },
      { en: 'The cable ties are out of stock.', cn: '扎带没有库存了。', words: [] },
    ],
    thinking: '仓库缺货时需要通知申请人并启动补货流程。\nThe requested materials are out of stock 是告知缺货的标准表达。\n中文说「申请的物料已经没有库存了」，英语用 The requested materials are out of stock。',
    pronunciation: 'requested 重音在第二音节：re-QUEST-ed。\nout of stock 三个词连读：OUT-of-STOCK。\n节奏：the re-QUEST-ed ma-TER-ials ｜ are OUT of STOCK.',
    quiz: [
      { q: '把「申请的物料已经没有库存了。」用英语说出来。', a: 'The requested materials are out of stock.' },
      { q: '「缺货」用英语怎么说？', a: 'out of stock (/aʊt əv stɒk/)' },
    ],
  },
  {
    id: 2574,
    speaker: 'Engineer',
    en: 'Please return the unused materials to the warehouse.',
    cn: '请把没有使用的物料退回仓库。',
    ipa: '/pliːz rɪˈtɜːrn ði ˌʌnˈjuːzd məˈtɪriəlz tuː ðə ˈwɛəhaʊs/',
    tags: ['第2574句', '仓库管理', '★★★★'],
    when: '维修或施工完成后，将剩余未使用的物料退回仓库登记入库。',
    words: [
      { w: 'return', ipa: '/rɪˈtɜːrn/', pos: '动词', cn: '归还；退回', memory: 're(回)+turn(转)→转回去→归还。', phonics: 're 读 /rɪ/，turn 读 /tɜːrn/，重音在第二音节。', collocations: [['return to', '退回到'], ['return materials', '退回物料'], ['return unused', '退回未使用的']], examples: [['Return the tools after use.', '用完后归还工具。'], ['I returned the spare part.', '我退回了备件。']] },
      { w: 'unused', ipa: '/ˌʌnˈjuːzd/', pos: '形容词', cn: '未使用的', memory: 'un(不/未)+used(使用过的)→没有使用过的。', phonics: 'un 读 /ʌn/，used 读 /juːzd/，重音在 used。', collocations: [['unused materials', '未使用的物料'], ['unused parts', '未使用的零件']], examples: [['Return all unused items.', '退回所有未使用的物品。'], ['Unused cables should be stored.', '未使用的线缆应存放好。']] },
    ],
    phrases: [
      { p: 'return to the warehouse', ipa: '/rɪˈtɜːrn tuː ðə ˈwɛəhaʊs/', cn: '退回仓库', why: 'return + 物品 + to + 地点，表示将物品退还到指定地点。' },
      { p: 'unused materials', ipa: '/ˌʌnˈjuːzd məˈtɪriəlz/', cn: '未使用的物料', why: 'unused 修饰 materials，明确退回的是没有使用过的物料。' },
    ],
    grammar: [
      { q: 'return 和 give back 有什么区别？', a: 'return 更正式，常用于工作中的归还/退回流程。\ngive back 更口语化。\n✅ Please return the materials to the warehouse.（请把物料退回仓库。）—— 正式\n✅ Give the tools back when done.（用完了把工具还回来。）—— 口语\n退料流程用 return。' },
    ],
    pattern: 'Please return + 物品 + to + 地点.',
    patternExamples: [
      { en: 'Please return the tools to the tool crib.', cn: '请把工具退回到工具库。', words: [] },
      { en: 'Please return the badges to security.', cn: '请把工牌退回安保处。', words: [] },
      { en: 'Please return the keys to the front desk.', cn: '请把钥匙退回前台。', words: [] },
    ],
    thinking: '退料是仓库管理的重要环节，确保库存数据准确。\nPlease return the unused materials to the warehouse 是退料指令。\n中文说「请把没有使用的物料退回仓库」，英语用 Please return the unused materials to the warehouse。',
    pronunciation: 'return 重音在第二音节：re-TURN。\nunused 重音在第二音节：un-USED。\n节奏：please re-TURN ｜ the un-USED ma-TER-ials ｜ to the WARE-house.',
    quiz: [
      { q: '把「请把没有使用的物料退回仓库。」用英语说出来。', a: 'Please return the unused materials to the warehouse.' },
      { q: '「未使用的」用英语怎么说？', a: 'unused (/ˌʌnˈjuːzd/)' },
    ],
  },
  {
    id: 2575,
    speaker: 'Engineer',
    en: 'Please record the material issue.',
    cn: '请登记领料记录。',
    ipa: '/pliːz ˈrɛkɔːrd ðə məˈtɪriəl ˈɪʃuː/',
    tags: ['第2575句', '仓库管理', '★★★★'],
    when: '发放物料后需要在系统中记录领料信息以便追溯。',
    words: [
      { w: 'record', ipa: '/ˈrɛkɔːrd/', pos: '动词', cn: '记录；登记', memory: 're(再)+cord(心)→再次记在心里→记录。', phonics: 're 读 /rɛ/，cord 读 /kɔːrd/，重音在第一音节（作动词时也可在第二音节）。', collocations: [['record the issue', '登记发放'], ['record the data', '记录数据'], ['keep a record', '保持记录']], examples: [['Record the time of the alarm.', '记录告警时间。'], ['Please record your inspection.', '请登记你的巡检。']] },
      { w: 'material issue', ipa: '/məˈtɪriəl ˈɪʃuː/', pos: '名词短语', cn: '领料；物料发放', memory: 'material(物料)+issue(发放)→物料的发放行为。', phonics: 'material 读 /məˈtɪriəl/，issue 读 /ˈɪʃuː/。', collocations: [['material issue record', '领料记录'], ['material issue form', '领料单']], examples: [['Sign the material issue form.', '签领料单。'], ['The material issue was logged.', '领料已登记。']] },
    ],
    phrases: [
      { p: 'record the material issue', ipa: '/ˈrɛkɔːrd ðə məˈtɪriəl ˈɪʃuː/', cn: '登记领料记录', why: 'record + 事项，表示将某个事件或行为记录在案，material issue 指物料发放行为。' },
    ],
    grammar: [
      { q: 'record 作动词和名词读音一样吗？', a: '不一样！record 作动词时重音在第二音节：re-CORD /rɪˈkɔːrd/。\nrecord 作名词时重音在第一音节：REC-ord /ˈrɛkɔːrd/。\n✅ Please record the issue.（请记录发放。）—— 动词，重音在后\n✅ Check the record.（查看记录。）—— 名词，重音在前' },
    ],
    pattern: 'Please record the + 事项.',
    patternExamples: [
      { en: 'Please record the equipment handover.', cn: '请登记设备交接。', words: [] },
      { en: 'Please record the maintenance activity.', cn: '请登记维护活动。', words: [] },
      { en: 'Please record the alarm event.', cn: '请登记告警事件。', words: [] },
    ],
    thinking: '领料登记是仓库管理的核心流程，确保物料可追溯。\nPlease record the material issue 是要求登记领料信息。\n中文说「请登记领料记录」，英语用 Please record the material issue。',
    pronunciation: 'record 作动词重音在第二音节：re-CORD。\nmaterial issue：ma-TER-ial IS-sue。\n节奏：please re-CORD ｜ the ma-TER-ial IS-sue.',
    quiz: [
      { q: '把「请登记领料记录。」用英语说出来。', a: 'Please record the material issue.' },
      { q: '「领料；物料发放」用英语怎么说？', a: 'material issue (/məˈtɪriəl ˈɪʃuː/)' },
    ],
  },
  {
    id: 2576,
    speaker: 'Engineer',
    en: 'Please record the material return.',
    cn: '请登记退料记录。',
    ipa: '/pliːz ˈrɛkɔːrd ðə məˈtɪriəl rɪˈtɜːrn/',
    tags: ['第2576句', '仓库管理', '★★★★'],
    when: '物料退回仓库后需要在系统中记录退料信息。',
    words: [
      { w: 'material return', ipa: '/məˈtɪriəl rɪˈtɜːrn/', pos: '名词短语', cn: '退料；物料退回', memory: 'material(物料)+return(退回)→物料的退回行为。', phonics: 'material 读 /məˈtɪriəl/，return 读 /rɪˈtɜːrn/。', collocations: [['material return record', '退料记录'], ['material return form', '退料单']], examples: [['Fill in the material return form.', '填写退料单。'], ['Process the material return.', '处理退料。']] },
    ],
    phrases: [
      { p: 'record the material return', ipa: '/ˈrɛkɔːrd ðə məˈtɪriəl rɪˈtɜːrn/', cn: '登记退料记录', why: '与 material issue 对应，material return 指物料退回行为，需要同样登记在案。' },
    ],
    grammar: [
      { q: 'material issue 和 material return 是什么关系？', a: '它们是一对相反的操作：\nmaterial issue = 领料（物料从仓库出去）\nmaterial return = 退料（物料退回仓库）\n✅ Record the material issue when taking items.（领取时登记领料。）\n✅ Record the material return when giving items back.（退回时登记退料。）\n两者共同构成物料流转的完整记录。' },
    ],
    pattern: 'Please record the material return.',
    patternExamples: [
      { en: 'Please record the tool return.', cn: '请登记工具归还。', words: [] },
      { en: 'Please record the badge return.', cn: '请登记工牌归还。', words: [] },
      { en: 'Please record the key return.', cn: '请登记钥匙归还。', words: [] },
    ],
    thinking: '退料登记与领料登记配对，确保物料流转闭环。\nPlease record the material return 是退料登记指令。\n中文说「请登记退料记录」，英语用 Please record the material return。',
    pronunciation: 'return 重音在第二音节：re-TURN。\n节奏：please re-CORD ｜ the ma-TER-ial re-TURN.',
    quiz: [
      { q: '把「请登记退料记录。」用英语说出来。', a: 'Please record the material return.' },
      { q: '「退料」用英语怎么说？', a: 'material return (/məˈtɪriəl rɪˈtɜːrn/)' },
    ],
  },
  {
    id: 2577,
    speaker: 'Engineer',
    en: 'The inventory count matches the records.',
    cn: '库存数量与记录一致。',
    ipa: '/ði ˈɪnvəntəri kaʊnt ˈmætʃɪz ðə ˈrɛkɔːrdz/',
    tags: ['第2577句', '仓库管理', '★★★★'],
    when: '库存盘点完成后确认实物数量与系统记录一致。',
    words: [
      { w: 'inventory', ipa: '/ˈɪnvəntəri/', pos: '名词', cn: '库存；存货', memory: 'invent(发现)+ory(名词后缀)→发现有什么→库存清单/库存。', phonics: 'in 读 /ɪn/，ven 读 /vən/，tory 读 /təri/，重音在第一音节。', collocations: [['inventory count', '库存盘点'], ['inventory check', '库存检查'], ['inventory management', '库存管理']], examples: [['Check the inventory.', '检查库存。'], ['The inventory is accurate.', '库存是准确的。']] },
      { w: 'matches', ipa: '/ˈmætʃɪz/', pos: '动词（第三人称单数）', cn: '匹配；一致', memory: 'match 表示两者相符、匹配。', phonics: 'match 读 /mætʃ/，es 读 /ɪz/。', collocations: [['matches the records', '与记录一致'], ['matches the order', '与订单一致']], examples: [['The count matches.', '数量一致。'], ['The serial number matches.', '序列号匹配。']] },
    ],
    phrases: [
      { p: 'inventory count', ipa: '/ˈɪnvəntəri kaʊnt/', cn: '库存盘点；库存数量', why: 'inventory count 可以指盘点的行为，也可以指盘点得到的数量。' },
      { p: 'matches the records', ipa: '/ˈmætʃɪz ðə ˈrɛkɔːrdz/', cn: '与记录一致', why: 'match + 参照物，表示实际数据与参照数据相符。' },
    ],
    grammar: [
      { q: 'count 这里是名词还是动词？', a: '这里 count 是名词，意思是「计数/数量」。\n✅ The inventory count matches the records.（库存数量与记录一致。）—— count 是名词\n✅ Count the items carefully.（仔细数物品。）—— count 是动词\ninventory count 是固定搭配，指库存盘点或盘点得到的数量。' },
    ],
    pattern: 'The + 数据 + matches + 参照.',
    patternExamples: [
      { en: 'The serial number matches the label.', cn: '序列号与标签一致。', words: [] },
      { en: 'The temperature reading matches the setpoint.', cn: '温度读数与设定值一致。', words: [] },
      { en: 'The headcount matches the roster.', cn: '人数与花名册一致。', words: [] },
    ],
    thinking: '库存盘点后确认数据一致是仓库管理的关键验证步骤。\nThe inventory count matches the records 报告盘点结果。\n中文说「库存数量与记录一致」，英语用 The inventory count matches the records。',
    pronunciation: 'inventory 重音在第一音节：IN-ven-tory。\nmatches 读 /ˈmætʃɪz/。\n节奏：the IN-ven-tory COUNT ｜ MATCH-es ｜ the REC-ords.',
    quiz: [
      { q: '把「库存数量与记录一致。」用英语说出来。', a: 'The inventory count matches the records.' },
      { q: '「库存盘点」用英语怎么说？', a: 'inventory count (/ˈɪnvəntəri kaʊnt/)' },
    ],
  },
  {
    id: 2578,
    speaker: 'Engineer',
    en: 'We need to reorder these spare parts.',
    cn: '这些备件需要重新采购。',
    ipa: '/wiː niːd tuː ˌriːˈɔːrdər ðiːz spɛər pɑːrts/',
    tags: ['第2578句', '仓库管理', '★★★★'],
    when: '库存低于安全线或使用完毕后需要向采购部门申请补货。',
    words: [
      { w: 'reorder', ipa: '/ˌriːˈɔːrdər/', pos: '动词', cn: '重新订购；补货', memory: 're(再)+order(订购)→再次订购→补货。', phonics: 're 读 /riː/，or 读 /ɔːr/，der 读 /dər/，重音在第二音节。', collocations: [['reorder parts', '补货零件'], ['reorder point', '补货点'], ['need to reorder', '需要补货']], examples: [['We need to reorder filters.', '我们需要补货滤芯。'], ['The system will auto-reorder.', '系统会自动补货。']] },
    ],
    phrases: [
      { p: 'need to reorder', ipa: '/niːd tuː ˌriːˈɔːrdər/', cn: '需要重新订购', why: 'need to + 动词原形 表示需要做某事，reorder 指再次下单采购。' },
    ],
    grammar: [
      { q: 'reorder 和 order more 有什么区别？', a: 'reorder 强调「再次订购同样的东西」，暗示之前已经买过。\norder more 更通用，可以是追加订购任何东西。\n✅ We need to reorder these spare parts.（我们需要重新采购这些备件。）—— 同样的备件\n✅ We need to order more supplies.（我们需要多订些物资。）—— 更通用\n补货场景用 reorder 更精确。' },
    ],
    pattern: 'We need to reorder + 物品.',
    patternExamples: [
      { en: 'We need to reorder the air filters.', cn: '我们需要重新采购空气滤芯。', words: [] },
      { en: 'We need to reorder the UPS batteries.', cn: '我们需要重新采购UPS电池。', words: [] },
      { en: 'We need to reorder the cleaning supplies.', cn: '我们需要重新采购清洁用品。', words: [] },
    ],
    thinking: '备件消耗后及时补货是保障运维连续性的关键。\nWe need to reorder these spare parts 表达了补货需求。\n中文说「这些备件需要重新采购」，英语用 We need to reorder these spare parts。',
    pronunciation: 'reorder 重音在第二音节：re-OR-der。\nspare parts：SPARE PARTS。\n节奏：we NEED ｜ to re-OR-der ｜ these SPARE PARTS.',
    quiz: [
      { q: '把「这些备件需要重新采购。」用英语说出来。', a: 'We need to reorder these spare parts.' },
      { q: '「重新订购；补货」用英语怎么说？', a: 'reorder (/ˌriːˈɔːrdər/)' },
    ],
  },
  {
    id: 2579,
    speaker: 'Engineer',
    en: 'The minimum stock level has been reached.',
    cn: '库存已经达到最低数量。',
    ipa: '/ðə ˈmɪnɪməm stɒk ˈlɛvəl hæz biːn riːtʃt/',
    tags: ['第2579句', '仓库管理', '★★★★'],
    when: '系统告警或人工盘点发现某物料库存量降至安全库存线以下。',
    words: [
      { w: 'minimum', ipa: '/ˈmɪnɪməm/', pos: '形容词', cn: '最低的；最小的', memory: 'mini(小)+mum(最)→最小的。', phonics: 'min 读 /mɪn/，i 读 /ɪ/，mum 读 /məm/，重音在第一音节。', collocations: [['minimum stock', '最低库存'], ['minimum level', '最低水平'], ['minimum order', '最低订购量']], examples: [['Below the minimum level.', '低于最低水平。'], ['Set the minimum threshold.', '设定最低阈值。']] },
      { w: 'stock level', ipa: '/stɒk ˈlɛvəl/', pos: '名词短语', cn: '库存水平；库存量', memory: 'stock(库存)+level(水平)→库存的高低程度。', phonics: 'stock 读 /stɒk/，level 读 /ˈlɛvəl/。', collocations: [['low stock level', '低库存'], ['stock level alert', '库存预警'], ['check stock level', '检查库存水平']], examples: [['Monitor the stock level.', '监控库存水平。'], ['The stock level is critical.', '库存水平已达警戒线。']] },
    ],
    phrases: [
      { p: 'minimum stock level', ipa: '/ˈmɪnɪməm stɒk ˈlɛvəl/', cn: '最低库存水平', why: 'minimum + stock level 指预设的最低安全库存量，低于此值需要触发补货。' },
      { p: 'has been reached', ipa: '/hæz biːn riːtʃt/', cn: '已经达到', why: 'has been + 过去分词 是现在完成时被动语态，表示某个阈值已经被触及。' },
    ],
    grammar: [
      { q: 'has been reached 是什么时态和语态？', a: 'has been reached 是现在完成时的被动语态。\n主动：We have reached the minimum stock level.（我们已经达到了最低库存。）\n被动：The minimum stock level has been reached.（最低库存已达到。）\n被动语态强调「最低库存线」这个事实本身，不强调谁发现的。' },
    ],
    pattern: 'The + 阈值 + has been reached.',
    patternExamples: [
      { en: 'The maximum temperature has been reached.', cn: '已达到最高温度。', words: [] },
      { en: 'The alarm threshold has been reached.', cn: '已达到告警阈值。', words: [] },
      { en: 'The capacity limit has been reached.', cn: '已达到容量上限。', words: [] },
    ],
    thinking: '库存预警是仓库管理的重要机制，触发补货流程。\nThe minimum stock level has been reached 是库存预警的标准表达。\n中文说「库存已经达到最低数量」，英语用 The minimum stock level has been reached。',
    pronunciation: 'minimum 重音在第一音节：MIN-i-mum。\nstock level：STOCK LEV-el。\n节奏：the MIN-i-mum ｜ STOCK LEV-el ｜ has been REACHED.',
    quiz: [
      { q: '把「库存已经达到最低数量。」用英语说出来。', a: 'The minimum stock level has been reached.' },
      { q: '「最低库存水平」用英语怎么说？', a: 'minimum stock level (/ˈmɪnɪməm stɒk ˈlɛvəl/)' },
    ],
  },
  {
    id: 2580,
    speaker: 'Engineer',
    en: 'Please perform a stock check this afternoon.',
    cn: '今天下午请进行库存盘点。',
    ipa: '/pliːz pərˈfɔːrm ə stɒk tʃɛk ðɪs ˌɑːftərˈnuːn/',
    tags: ['第2580句', '仓库管理', '★★★★'],
    when: '主管安排下午进行定期库存盘点以核对账实一致性。',
    words: [
      { w: 'perform', ipa: '/pərˈfɔːrm/', pos: '动词', cn: '执行；进行', memory: 'per(完全)+form(形态)→完整执行→执行/进行。', phonics: 'per 读 /pər/，form 读 /fɔːrm/，重音在第二音节。', collocations: [['perform a check', '执行检查'], ['perform maintenance', '执行维护'], ['perform a task', '执行任务']], examples: [['Perform the daily inspection.', '执行每日巡检。'], ['We performed a test.', '我们执行了测试。']] },
      { w: 'stock check', ipa: '/stɒk tʃɛk/', pos: '名词短语', cn: '库存盘点', memory: 'stock(库存)+check(检查)→对库存进行检查→盘点。', phonics: 'stock 读 /stɒk/，check 读 /tʃɛk/。', collocations: [['perform a stock check', '进行库存盘点'], ['annual stock check', '年度盘点'], ['stock check report', '盘点报告']], examples: [['Schedule a stock check.', '安排一次盘点。'], ['The stock check found discrepancies.', '盘点发现了差异。']] },
    ],
    phrases: [
      { p: 'perform a stock check', ipa: '/pərˈfɔːrm ə stɒk tʃɛk/', cn: '进行库存盘点', why: 'perform + a + 任务名 是执行某项工作的正式表达，stock check 指库存盘点。' },
      { p: 'this afternoon', ipa: '/ðɪs ˌɑːftərˈnuːn/', cn: '今天下午', why: 'this afternoon 指定执行时间，让接收指令的人明确时间要求。' },
    ],
    grammar: [
      { q: 'perform 和 do 有什么区别？', a: 'perform 更正式，强调按照规程执行某项专业工作。\ndo 更通用和口语化。\n✅ Perform a stock check.（进行库存盘点。）—— 正式、专业\n✅ Do a stock check.（盘一下库存。）—— 口语\n工作安排和文件记录中用 perform 更专业。' },
    ],
    pattern: 'Please perform a + 任务 + 时间.',
    patternExamples: [
      { en: 'Please perform a safety inspection tomorrow morning.', cn: '请明天上午进行一次安全检查。', words: [] },
      { en: 'Please perform a calibration check this week.', cn: '请本周进行一次校准检查。', words: [] },
      { en: 'Please perform a fire drill next Monday.', cn: '请下周一进行一次消防演练。', words: [] },
    ],
    thinking: '定期库存盘点是仓库管理的标准操作流程。\nPlease perform a stock check this afternoon 是安排盘点任务。\n中文说「今天下午请进行库存盘点」，英语用 Please perform a stock check this afternoon。',
    pronunciation: 'perform 重音在第二音节：per-FORM。\nstock check：STOCK CHECK。\n节奏：please per-FORM ｜ a STOCK CHECK ｜ this af-ter-NOON.',
    quiz: [
      { q: '把「今天下午请进行库存盘点。」用英语说出来。', a: 'Please perform a stock check this afternoon.' },
      { q: '「库存盘点」用英语怎么说？', a: 'stock check (/stɒk tʃɛk/)' },
    ],
  },
];

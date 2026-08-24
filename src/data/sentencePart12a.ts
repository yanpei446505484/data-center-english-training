// EXPORTS: MOCK_SENTENCES_PART12A

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART12A: ISentence[] = [
  {
    id: 351,
    en: "Locate Rack B5-03-021.",
    cn: "定位B5-03-021机柜。",
    ipa: "/loʊˈkeɪt ræk biː faɪv zɪro θriː zɪro tuː wʌn/",
    tags: ["第351句", "DCIM定位", "★★★★★"],
    when: "DCIM系统中需要快速找到具体设备位置。机柜编号规则：B5=楼栋，03=楼层，02=排号，1=位置号。",
    words: [
      { w: "locate", ipa: "/loʊˈkeɪt/", pos: "动词", cn: "定位；找到", memory: "① loc = 地方（拉丁语 locus）；② locate = 找到位置/定位。\nDCIM中 locate 是高频操作，用于在楼层图上快速跳转到目标设备。", phonics: "lo 读 /loʊ/，cate 读 /ˈkeɪt/，重音在第二音节。", collocations: [["locate a rack", "定位机柜"], ["locate a device", "定位设备"], ["locate a sensor", "定位传感器"]], examples: [["Please locate the server.", "请定位服务器。"], ["Can you locate PDU-1A?", "你能定位PDU1A吗？"]] },
      { w: "rack", ipa: "/ræk/", pos: "名词", cn: "机柜", memory: "① rack = 架子/机架；② 数据中心中指标准19英寸服务器机柜。\nBridge Data Centres 机柜编号格式：楼栋-楼层-排号-位置号（如 B5-03-021）。", phonics: "r 读 /r/，a 读 /æ/，ck 读 /k/。", collocations: [["server rack", "服务器机柜"], ["rack label", "机柜标签"], ["rack door", "机柜门"]], examples: [["Open the rack door.", "打开机柜门。"], ["Check the rack temperature.", "检查机柜温度。"]] },
    ],
    phrases: [
      { p: "Rack B5-03-021", ipa: "/ræk biː faɪv zɪro θriː zɪro tuː wʌn/", cn: "B5-03-021机柜", why: "机柜编号逐位读：B5=楼栋，03=三楼，02=第二排，1=第一位。Bridge Data Centres 管理 B5/B7/C2 三栋楼。" },
    ],
    grammar: [
      { q: "locate 和 find 有什么区别？", a: "locate = 定位（强调找到精确位置，常用于系统操作）\nfind = 找到（强调结果，不强调位置精确性）\n✅ Locate Rack B5-03-021.（在DCIM上定位到这个机柜 → 精确操作）\n✅ I found the problem.（我找到了问题 → 不强调位置）\nDCIM操作用 locate，日常查找用 find。" },
    ],
    pattern: "Locate + 设备类型 + 编号",
    patternExamples: [
      { en: "Locate Rack B7-02-015.", cn: "定位B7-02-015机柜。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "rack", ipa: "/ræk/", cn: "机柜", phonics: "rack 读 /ræk/" }] },
      { en: "Locate PDU-1A.", cn: "定位PDU1A。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }] },
      { en: "Locate CRAH-12.", cn: "定位12号风墙。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }] },
    ],
    thinking: "DCIM定位是运维日常高频操作。\n机柜编号规则：B5-03-021 = B5楼 + 3楼 + 第2排 + 第1位。\nBridge Data Centres 在古来管理三栋楼：B5、B7、C2。\n定位操作在DCIM系统中完成，点击后楼层图自动跳转到目标设备。",
    pronunciation: "locate 重音在第二音节：/loʊˈkeɪt/。\nrack 的 a 读短音 /æ/，不是长音 /ɑː/。\n编号逐位读：B-Five, Zero-Three, Zero-Two-One。\n节奏：lo-CATE ｜ RACK B-Five ｜ ZE-ro-THREE ｜ ZE-ro-TWO-ONE.",
    quiz: [
      { q: "定位B7楼二楼第3排第5号机柜，怎么说？", a: "Locate Rack B7-02-035." },
      { q: "Bridge Data Centres 管理哪几栋楼？", a: "三栋：B5、B7、C2。都位于马来西亚柔佛州古来（Kulai, Johor）。" },
    ],
  },
  {
    id: 352,
    en: "Locate Rack B7-02-015.",
    cn: "定位B7-02-015机柜。",
    ipa: "/loʊˈkeɪt ræk biː sɛvən zɪro tuː zɪro wʌn faɪv/",
    tags: ["第352句", "DCIM定位", "★★★★"],
    when: "B7楼的机柜定位操作。B7楼与B5楼相邻，通过连廊连接，共享冷冻水系统。",
    words: [],
    phrases: [
      { p: "Rack B7-02-015", ipa: "/ræk biː sɛvən zɪro tuː zɪro wʌn faɪv/", cn: "B7-02-015机柜", why: "B7=楼栋，02=二楼，01=第一排，5=第五位。B7楼主要承载网络设备。" },
    ],
    grammar: [],
    pattern: "Locate Rack + 楼栋 + 楼层 + 排号 + 位置号",
    patternExamples: [
      { en: "Locate Rack B5-01-008.", cn: "定位B5-01-008机柜。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "rack", ipa: "/ræk/", cn: "机柜", phonics: "rack 读 /ræk/" }] },
      { en: "Locate Rack C2-04-012.", cn: "定位C2-04-012机柜。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "rack", ipa: "/ræk/", cn: "机柜", phonics: "rack 读 /ræk/" }] },
      { en: "Locate Rack B7-03-030.", cn: "定位B7-03-030机柜。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "rack", ipa: "/ræk/", cn: "机柜", phonics: "rack 读 /ræk/" }] },
    ],
    thinking: "B5和B7是数据机房主楼，C2是配套办公楼。\nB5楼三层（L1/L2/L3），B7楼两层（L1/L2），C2楼四层。\n定位时先确认楼栋，再确认楼层，避免跑错楼。",
    pronunciation: "B7 读 B-Seven，不是 B-Seventy。\n编号逐位读：Zero-Two, Zero-One-Five。\n节奏：lo-CATE ｜ RACK B-SEV-en ｜ ZE-ro-TWO ｜ ZE-ro-ONE-FIVE.",
    quiz: [
      { q: "B7楼有几层？", a: "两层：L1（一楼）和L2（二楼）。B5楼有三层（L1/L2/L3）。" },
    ],
  },
  {
    id: 353,
    en: "This rack is in Building B5, Level 3, Row 2, Position 1.",
    cn: "这个机柜位于B5楼三楼第2排第1位。",
    ipa: "/ðɪs ræk ɪz ɪn ˈbɪl.dɪŋ biː faɪv ˈlɛv.əl θriː roʊ tuː pəˈzɪʃ.ən wʌn/",
    tags: ["第353句", "位置描述", "★★★★"],
    when: "用自然语言描述机柜位置，适用于口头交接或书面报告中无法显示DCIM界面时。",
    words: [
      { w: "row", ipa: "/roʊ/", pos: "名词", cn: "排；列", memory: "① row = 一排/一行；② 数据中心中指机柜排列的行。\n机柜通常按排（row）组织，每排6-12个机柜。", phonics: "r 读 /r/，ow 读 /oʊ/。注意和 raw（生的）同音。", collocations: [["cold row", "冷通道"], ["hot row", "热通道"], ["rack row", "机柜排"]], examples: [["This rack is in Row 5.", "这个机柜在第5排。"], ["Check all racks in this row.", "检查这排所有机柜。"]] },
      { w: "position", ipa: "/pəˈzɪʃ.ən/", pos: "名词", cn: "位置；位号", memory: "① pos = 放（拉丁语 ponere）；② position = 放置的地方 → 位置。\n机柜在排中的序号叫 position。", phonics: "po 读 /pə/，si 读 /ˈzɪ/，tion 读 /ʃən/，重音在第二音节。", collocations: [["position number", "位置号"], ["rack position", "机柜位置"], ["first position", "第一位"]], examples: [["What position is this rack?", "这个机柜是第几位？"], ["Position 1 is at the end of the row.", "第一位在排的末端。"]] },
    ],
    phrases: [
      { p: "Row 2, Position 1", ipa: "/roʊ tuː pəˈzɪʃ.ən wʌn/", cn: "第2排第1位", why: "先说排号（row），再说位置号（position）。这是数据中心标准的位置描述顺序。" },
    ],
    grammar: [
      { q: "Building/Level/Row/Position 前面的介词怎么搭配？", a: "in Building B5（在某栋楼里 → 用 in）\non Level 3（在某层上 → 用 on）\nin Row 2（在某排里 → 用 in）\nat Position 1（在某位上 → 用 at）\n从小到大用 at → in → on → in，但口语中常省略介词直接罗列。" },
    ],
    pattern: "This rack is in Building X, Level X, Row X, Position X",
    patternExamples: [
      { en: "This rack is in Building B7, Level 1, Row 3, Position 8.", cn: "这个机柜位于B7楼一楼第3排第8位。", words: [{ w: "rack", ipa: "/ræk/", cn: "机柜", phonics: "rack 读 /ræk/" }, { w: "building", ipa: "/ˈbɪldɪŋ/", cn: "建筑", phonics: "build 读 /bɪld/，ing 读 /ɪŋ/" }, { w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }] },
      { en: "This rack is in Building C2, Level 2, Row 1, Position 5.", cn: "这个机柜位于C2楼二楼第1排第5位。", words: [{ w: "rack", ipa: "/ræk/", cn: "机柜", phonics: "rack 读 /ræk/" }, { w: "building", ipa: "/ˈbɪldɪŋ/", cn: "建筑", phonics: "build 读 /bɪld/，ing 读 /ɪŋ/" }, { w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }] },
      { en: "This rack is in Building B5, Level 2, Row 4, Position 12.", cn: "这个机柜位于B5楼二楼第4排第12位。", words: [{ w: "rack", ipa: "/ræk/", cn: "机柜", phonics: "rack 读 /ræk/" }, { w: "building", ipa: "/ˈbɪldɪŋ/", cn: "建筑", phonics: "build 读 /bɪld/，ing 读 /ɪŋ/" }, { w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }] },
    ],
    thinking: "位置描述四层结构：楼栋 → 楼层 → 排 → 位。\n口头交接时，从大到小说：Building → Level → Row → Position。\nDCIM中已编码为 B5-03-021，但口头描述时需要展开为完整句子。",
    pronunciation: "building 的 ui 读 /ɪ/：/ˈbɪl.dɪŋ/。\nlevel 的第一个 e 读 /ɛ/：/ˈlɛv.əl/。\nposition 重音在第二音节：/pəˈzɪʃ.ən/。\n节奏：This RACK is in ｜ BUILD-ing B-FIVE ｜ LEV-el THREE ｜ ROW TWO ｜ po-SI-tion ONE.",
    quiz: [
      { q: "用自然语言描述B7-01-035的位置？", a: "This rack is in Building B7, Level 1, Row 3, Position 5." },
    ],
  },
  {
    id: 354,
    en: "Please check the rack label before opening.",
    cn: "开门前请先核对机柜标签。",
    ipa: "/pliːz tʃɛk ðə ræk ˈleɪ.bəl bɪˈfɔːr ˈoʊ.pən.ɪŋ/",
    tags: ["第354句", "操作安全", "★★★★★"],
    when: "数据中心安全操作规范：开门前必须核对标签，防止误操作错误机柜内的设备。",
    words: [
      { w: "label", ipa: "/ˈleɪ.bəl/", pos: "名词", cn: "标签；标识", memory: "① label = 标签/标识；② 数据中心中每个设备/机柜都有唯一标签。\n标签包含编号、所属客户、安全等级等信息。", phonics: "la 读 /ˈleɪ/，bel 读 /bəl/，重音在第一音节。", collocations: [["rack label", "机柜标签"], ["equipment label", "设备标签"], ["label number", "标签编号"]], examples: [["Check the label first.", "先检查标签。"], ["The label is on the front door.", "标签在前门上。"]] },
    ],
    phrases: [
      { p: "before opening", ipa: "/bɪˈfɔːr ˈoʊ.pən.ɪŋ/", cn: "开门前", why: "before + 动名词（opening）= 在做某事之前。opening 指打开机柜门。安全规范要求先核对再开门。" },
    ],
    grammar: [
      { q: "为什么用 before opening 而不是 before you open？", a: "before opening = 开门前（动名词，更简洁，常用于指令/规范）\nbefore you open = 你开门前（完整从句，更口语化）\n✅ Check the label before opening.（开门前检查标签 → 简洁指令）\n✅ Check the label before you open the door.（你开门前检查标签 → 完整说法）\n操作规范/指令用动名词形式，更紧凑。" },
    ],
    pattern: "Please check + 检查项 + before + 操作",
    patternExamples: [
      { en: "Please check the voltage before connecting.", cn: "连接前请先检查电压。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }] },
      { en: "Please check the temperature before starting.", cn: "启动前请先检查温度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "starting", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "Please check the lock before leaving.", cn: "离开前请检查门锁。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "数据中心安全操作铁律：核对标签 → 再操作。\n误操作风险：开错机柜 → 操作错设备 → 导致业务中断。\n标签位置：通常贴在机柜前门上方或侧面。",
    pronunciation: "label 的 a 读长音 /eɪ/：/ˈleɪ.bəl/。\nbefore 重音在第二音节：/bɪˈfɔːr/。\nopening 的 o 读 /oʊ/：/ˈoʊ.pən.ɪŋ/。\n节奏：Please CHECK ｜ the RACK LA-bel ｜ be-FORE ｜ O-pen-ing.",
    quiz: [
      { q: "连接前请检查负载，怎么说？", a: "Please check the load before connecting." },
      { q: "为什么开门前必须核对标签？", a: "防止误操作错误机柜内的设备。数据中心机柜外观相似，编号标签是唯一区分依据。开错机柜可能导致意外断电或网络中断。" },
    ],
  },
  {
    id: 355,
    en: "The rack number is printed on the front door.",
    cn: "机柜编号印在前门上。",
    ipa: "/ðə ræk ˈnʌm.bər ɪz ˈprɪn.tɪd ɑːn ðə frʌnt dɔːr/",
    tags: ["第355句", "标签位置", "★★★★"],
    when: "说明机柜编号标签的位置，帮助新入职人员快速找到标识。",
    words: [
      { w: "printed", ipa: "/ˈprɪn.tɪd/", pos: "动词(过去分词)", cn: "印制的", memory: "① print = 打印/印刷；② printed = 被印制的（被动语态）。\n标签上的编号是预先印制好的，不是手写。", phonics: "prin 读 /prɪn/，ted 读 /tɪd/，重音在第一音节。", collocations: [["printed label", "印制标签"], ["printed on", "印在…上"], ["printed number", "印制编号"]], examples: [["The number is printed clearly.", "编号印得很清楚。"], ["This label is printed by the manufacturer.", "这个标签是厂家印制的。"]] },
      { w: "front door", ipa: "/frʌnt dɔːr/", pos: "名词", cn: "前门", memory: "① front = 前面的；② door = 门。\n机柜有前门（面向冷通道）和后门（面向热通道）。编号标签通常在前门。", phonics: "front 读 /frʌnt/，door 读 /dɔːr/。", collocations: [["front door", "前门"], ["rear door", "后门"], ["rack door", "机柜门"]], examples: [["Open the front door.", "打开前门。"], ["The rear door is locked.", "后门锁着。"]] },
    ],
    phrases: [
      { p: "printed on the front door", ipa: "/ˈprɪn.tɪd ɑːn ðə frʌnt dɔːr/", cn: "印在前门上", why: "printed on + 位置 = 印在某个位置上。on 表示在表面上。前门是面向冷通道的那扇门。" },
    ],
    grammar: [
      { q: "front door 和 rear door 在数据中心中有什么区别？", a: "front door = 前门（面向冷通道，冷空气从这里进入机柜）\nrear door = 后门（面向热通道，热空气从这里排出机柜）\n编号标签在前门，因为冷通道是运维人员主要通行区域。\n操作设备通常从前门进行，后门主要用于线缆维护。" },
    ],
    pattern: "The + 信息 + is printed on + 位置",
    patternExamples: [
      { en: "The serial number is printed on the back.", cn: "序列号印在背面。", words: [] },
      { en: "The warning is printed on the side panel.", cn: "警告印在侧板上。", words: [{ w: "warning", ipa: "/ˈwɔːrnɪŋ/", cn: "警告", phonics: "warn 读 /wɔːrn/，ing 读 /ɪŋ/" }, { w: "panel", ipa: "/ˈpænl/", cn: "面板", phonics: "pan 读 /pæn/，el 读 /l/" }] },
      { en: "The barcode is printed on the bottom.", cn: "条形码印在底部。", words: [] },
    ],
    thinking: "机柜有前后两扇门，分别面向冷通道和热通道。\n冷通道（cold aisle）= 机柜前方，送冷风。\n热通道（hot aisle）= 机柜后方，排热风。\n运维人员主要在冷通道操作，所以标签在前门。",
    pronunciation: "printed 的 i 读短音 /ɪ/：/ˈprɪn.tɪd/。\nfront 的 o 读 /ʌ/：/frʌnt/。\n节奏：The RACK NUM-ber ｜ is PRINT-ed ｜ on the FRONT DOOR.",
    quiz: [
      { q: "序列号印在底部，怎么说？", a: "The serial number is printed on the bottom." },
      { q: "冷通道和热通道分别在机柜的哪一侧？", a: "冷通道（cold aisle）在机柜前方（前门侧），送冷风；热通道（hot aisle）在机柜后方（后门侧），排热风。运维主要在冷通道操作。" },
    ],
  },
  {
    id: 356,
    en: "Locate PDU-1A.",
    cn: "定位PDU1A。",
    ipa: "/loʊˈkeɪt piː diː juː wʌn eɪ/",
    tags: ["第356句", "DCIM定位", "★★★★★"],
    when: "PDU（Power Distribution Unit）是机柜内的配电单元。A路和B路各一个PDU，实现双路供电冗余。",
    words: [
      { w: "PDU", ipa: "/piː diː juː/", pos: "名词", cn: "配电单元（Power Distribution Unit）", memory: "① P = Power（电力）；② D = Distribution（分配）；③ U = Unit（单元）。\nPDU 安装在机柜内部，将主电源分配到机柜内各设备。\n每个机柜通常有2个PDU：A路和B路，实现冗余。", phonics: "逐字母读：P-D-U。", collocations: [["rack PDU", "机柜PDU"], ["PDU load", "PDU负载"], ["PDU outlet", "PDU插座"]], examples: [["Check the PDU load.", "检查PDU负载。"], ["PDU-1A is at 60% capacity.", "PDU1A负载60%。"]] },
    ],
    phrases: [
      { p: "PDU-1A", ipa: "/piː diː juː wʌn eɪ/", cn: "PDU1A", why: "编号规则：1=机柜内序号，A=A路（左侧供电）。对应 PDU-1B（B路，右侧供电）。" },
    ],
    grammar: [
      { q: "PDU的A路和B路有什么区别？", a: "A路（PDU-A）= 机柜左侧供电，通常来自 UPS-A\nB路（PDU-B）= 机柜右侧供电，通常来自 UPS-B\n双路供电实现冗余：如果A路故障，B路仍然供电，设备不会断电。\n每个PDU上应标注额定电流和当前负载百分比。" },
    ],
    pattern: "Locate PDU + 编号",
    patternExamples: [
      { en: "Locate PDU-2A.", cn: "定位PDU2A。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }] },
      { en: "Locate PDU-3B.", cn: "定位PDU3B。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }] },
      { en: "Locate PDU-1A in Rack B5-03-021.", cn: "定位B5-03-021机柜内的PDU1A。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "rack", ipa: "/ræk/", cn: "机柜", phonics: "rack 读 /ræk/" }] },
    ],
    thinking: "PDU 是数据中心供电的末端分配设备。\n供电链路：市电 → 变压器 → UPS → PDU → 服务器。\nPDU 通常安装在机柜内部左右两侧，竖立安装。\nA路在左侧，B路在右侧，分别由独立 UPS 供电。",
    pronunciation: "PDU 逐字母读：P-D-U，不读成单词。\n1A 读 One-A，不读成 One-ay。\n节奏：lo-CATE ｜ P-D-U ｜ ONE-A.",
    quiz: [
      { q: "PDU的全称是什么？", a: "Power Distribution Unit（配电单元）。安装在机柜内，将主电源分配到各设备。" },
      { q: "为什么每个机柜有两个PDU？", a: "实现双路供电冗余。A路和B路分别由独立UPS供电，如果一路故障，另一路仍然供电，确保设备不断电。" },
    ],
  },
  {
    id: 357,
    en: "Locate PDU-1B.",
    cn: "定位PDU1B。",
    ipa: "/loʊˈkeɪt piː diː juː wʌn biː/",
    tags: ["第357句", "DCIM定位", "★★★★"],
    when: "B路PDU定位。与A路PDU配对，共同保障机柜供电冗余。",
    words: [],
    phrases: [
      { p: "PDU-1B", ipa: "/piː diː juː wʌn biː/", cn: "PDU1B", why: "B=B路（右侧供电），与PDU-1A（A路/左侧）配对。双路供电确保冗余。" },
    ],
    grammar: [],
    pattern: "Locate PDU + 机柜号 + 路别",
    patternExamples: [
      { en: "Locate PDU-2B.", cn: "定位PDU2B。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }] },
      { en: "Locate PDU-1A and PDU-1B.", cn: "定位PDU1A和PDU1B。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }] },
      { en: "Check both PDU-1A and PDU-1B loads.", cn: "检查PDU1A和PDU1B两路负载。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "loads", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
    ],
    thinking: "A路和B路PDU的负载应尽量均衡（差异不超过10%）。\n如果A路负载80%但B路只有30%，说明设备接线不均衡，需要调整。\n交接时关注两路PDU的负载百分比差异。",
    pronunciation: "1B 读 One-B，不读成 One-bee。\n节奏：lo-CATE ｜ P-D-U ｜ ONE-B.",
    quiz: [
      { q: "两路PDU负载差异应控制在多少以内？", a: "不超过10%。如果差异过大，说明设备接线不均衡，需要调整，确保两路负载均衡。" },
    ],
  },
  {
    id: 358,
    en: "PDU-1A feeds the left side of the rack.",
    cn: "PDU1A给机柜左侧供电。",
    ipa: "/piː diː juː wʌn eɪ fiːdz ðə lɛft saɪd ʌv ðə ræk/",
    tags: ["第358句", "PDU功能", "★★★★"],
    when: "说明A路PDU的供电范围，帮助理解机柜内部供电布局。",
    words: [
      { w: "feed", ipa: "/fiːd/", pos: "动词", cn: "供电；馈电", memory: "① feed = 喂养/供给；② 电气语境 = 供电/馈电。\nPDU feeds the rack = PDU给机柜供电。\nfeeder = 馈线（从UPS到PDU的电缆）。", phonics: "f 读 /f/，ee 读 /iː/，d 读 /d/。", collocations: [["feed power", "供电"], ["feed the rack", "给机柜供电"], ["power feed", "电源馈线"]], examples: [["UPS feeds the PDU.", "UPS给PDU供电。"], ["This feeder carries 200 amps.", "这条馈线承载200安培。"]] },
    ],
    phrases: [
      { p: "feeds the left side", ipa: "/fiːdz ðə lɛft saɪd/", cn: "给左侧供电", why: "feed + 供电对象 = 给…供电。left side = 左侧。A路PDU安装在机柜左侧，给左侧设备供电。" },
    ],
    grammar: [
      { q: "feed 和 supply 在供电语境中有什么区别？", a: "feed = 馈电（强调电力传输方向，从电源到负载）\nsupply = 供电（强调提供电力，更通用）\n✅ PDU-1A feeds the left side.（PDU1A给左侧馈电 → 强调方向和路径）\n✅ The UPS supplies power to the building.（UPS给整栋楼供电 → 强调提供）\n配电链路上用 feed，整体供电用 supply。" },
    ],
    pattern: "PDU + 编号 + feeds + 供电范围",
    patternExamples: [
      { en: "PDU-1B feeds the right side of the rack.", cn: "PDU1B给机柜右侧供电。", words: [{ w: "rack", ipa: "/ræk/", cn: "机柜", phonics: "rack 读 /ræk/" }] },
      { en: "PDU-2A feeds the upper section.", cn: "PDU2A给上部供电。", words: [] },
      { en: "PDU-2B feeds the lower section.", cn: "PDU2B给下部供电。", words: [] },
    ],
    thinking: "机柜内设备供电规则：\n左侧设备 → PDU-A（A路）\n右侧设备 → PDU-B（B路）\n双电源设备：电源1接A路，电源2接B路。\n单电源设备：必须接在STS（静态转换开关）后面，由STS自动切换A/B路。",
    pronunciation: "feeds 的 s 读 /z/：/fiːdz/。\nleft 读 /lɛft/，不要读成 /lɛv/。\n节奏：P-D-U ONE-A ｜ FEEDS ｜ the LEFT SIDE ｜ of the RACK.",
    quiz: [
      { q: "PDU1B给机柜哪一侧供电？", a: "PDU-1B feeds the right side of the rack.（PDU1B给机柜右侧供电。）" },
    ],
  },
  {
    id: 359,
    en: "PDU-1B feeds the right side of the rack.",
    cn: "PDU1B给机柜右侧供电。",
    ipa: "/piː diː juː wʌn biː fiːdz ðə raɪt saɪd ʌv ðə ræk/",
    tags: ["第359句", "PDU功能", "★★★★"],
    when: "说明B路PDU的供电范围，与A路对称。",
    words: [],
    phrases: [
      { p: "feeds the right side", ipa: "/fiːdz ðə raɪt saɪd/", cn: "给右侧供电", why: "B路PDU安装在机柜右侧，给右侧设备供电。与A路（左侧）对称。" },
    ],
    grammar: [],
    pattern: "PDU + 编号 + feeds the right/left side of the rack",
    patternExamples: [
      { en: "PDU-2A feeds the left side of the rack.", cn: "PDU2A给机柜左侧供电。", words: [{ w: "rack", ipa: "/ræk/", cn: "机柜", phonics: "rack 读 /ræk/" }] },
      { en: "PDU-2B feeds the right side of the rack.", cn: "PDU2B给机柜右侧供电。", words: [{ w: "rack", ipa: "/ræk/", cn: "机柜", phonics: "rack 读 /ræk/" }] },
      { en: "Both PDUs feed this rack.", cn: "两个PDU都给这个机柜供电。", words: [{ w: "pdus", ipa: "/ˌpiːˈdiːˈjuː/", cn: "配电单元", phonics: "P-D-U 逐字母读" }, { w: "rack", ipa: "/ræk/", cn: "机柜", phonics: "rack 读 /ræk/" }] },
    ],
    thinking: "机柜供电布局总结：\n左侧（left）→ PDU-A → UPS-A → 变压器A\n右侧（right）→ PDU-B → UPS-B → 变压器B\n完全独立的A/B两条供电链路，任何一侧故障不影响另一侧。",
    pronunciation: "right 读 /raɪt/，不要读成 /rɪt/。\n节奏：P-D-U ONE-B ｜ FEEDS ｜ the RIGHT SIDE ｜ of the RACK.",
    quiz: [
      { q: "如果A路PDU故障，机柜会断电吗？", a: "不会。B路PDU独立供电，A路故障不影响B路。双路冗余设计确保设备持续运行。" },
    ],
  },
  {
    id: 360,
    en: "Please verify the PDU load before plugging in.",
    cn: "插电前请确认PDU负载。",
    ipa: "/pliːz ˈvɛr.ɪ.faɪ ðə piː diː juː loʊd bɪˈfɔːr ˈplʌg.ɪŋ ɪn/",
    tags: ["第360句", "操作安全", "★★★★★"],
    when: "新设备接入机柜前，必须确认PDU剩余容量是否足够，防止过载跳闸。",
    words: [
      { w: "verify", ipa: "/ˈvɛr.ɪ.faɪ/", pos: "动词", cn: "确认；核实", memory: "① ver = 真实（拉丁语 verus）；② verify = 确认真实性/核实。\n比 check 更正式，强调核实数据的准确性。", phonics: "ver 读 /vɛr/，i 读 /ɪ/，fy 读 /faɪ/，重音在第一音节。", collocations: [["verify the load", "确认负载"], ["verify the reading", "确认读数"], ["verify before", "之前确认"]], examples: [["Verify the voltage first.", "先确认电压。"], ["Please verify the temperature.", "请确认温度。"]] },
      { w: "plugging in", ipa: "/ˈplʌg.ɪŋ ɪn/", pos: "动词短语", cn: "插入；插电", memory: "① plug = 插头/插入；② plug in = 插电/接入电源。\nplugging in 是动名词形式，作 before 的宾语。", phonics: "plug 读 /plʌg/，ging 读 /ɡɪŋ/。", collocations: [["plug in a device", "插入设备"], ["plug in the cable", "插上电缆"], ["before plugging in", "插电前"]], examples: [["Don't plug in without checking.", "不检查就不要插电。"], ["Plug in the server to PDU-1A.", "把服务器插到PDU1A上。"]] },
    ],
    phrases: [
      { p: "before plugging in", ipa: "/bɪˈfɔːr ˈplʌg.ɪŋ ɪn/", cn: "插电前", why: "before + 动名词 = 在做某事之前。plugging in 指将设备插头插入PDU插座。" },
    ],
    grammar: [
      { q: "PDU过载会有什么后果？", a: "PDU过载 → 断路器跳闸 → 该机柜所有设备断电 → 业务中断。\n安全规则：PDU负载不超过80%额定容量。\n接入新设备前：当前负载 + 新设备功耗 < 80% 额定容量。\n如果不够，需要换到其他PDU或减少该机柜的设备数量。" },
    ],
    pattern: "Please verify + 检查项 + before + 操作",
    patternExamples: [
      { en: "Please verify the current rating before connecting.", cn: "连接前请确认额定电流。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
      { en: "Please verify the breaker status before switching.", cn: "切换前请确认断路器状态。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Please verify the cable type before plugging in.", cn: "插电前请确认电缆类型。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
    ],
    thinking: "PDU负载安全线：不超过80%额定容量。\n例：额定32A的PDU，实际负载不超过25.6A。\n接入新设备计算：当前负载（A）+ 新设备额定电流（A）≤ 80% × 额定电流。\n如果超出，必须：① 换到其他PDU ② 减少本机柜设备 ③ 升级PDU。",
    pronunciation: "verify 重音在第一音节：/ˈvɛr.ɪ.faɪ/。\nplugging 的 u 读短音 /ʌ/：/ˈplʌg.ɪŋ/。\n节奏：Please VER-i-fy ｜ the P-D-U LOAD ｜ be-FORE ｜ PLUG-ging IN.",
    quiz: [
      { q: "PDU负载安全线是多少？", a: "不超过80%额定容量。例如额定32A的PDU，实际负载不超过25.6A。留出20%余量应对瞬时峰值。" },
      { q: "如果PDU负载已经75%，还能接入一台5A的设备吗？", a: "看额定电流。如果PDU额定32A，75%=24A，加5A=29A，29/32=90.6% > 80%，不可以。需要换到其他PDU。" },
    ],
  },
  {
    id: 361,
    en: "Locate Busway A.",
    cn: "定位A母线。",
    ipa: "/loʊˈkeɪt bʌs.weɪ eɪ/",
    tags: ["第361句", "DCIM定位", "★★★★★"],
    when: "Busway（母线槽）是从变压器到PDU之间的大容量电力传输通道。A路和B路各一条母线。",
    words: [
      { w: "busway", ipa: "/bʌs.weɪ/", pos: "名词", cn: "母线槽", memory: "① bus = 总线/母线（电气术语，不是公交车）；② way = 通道。\nbusway = 母线槽（封闭的金属通道，内部有铜排/铝排传输大电流）。\n也叫 bus duct 或 busbar trunking。", phonics: "bus 读 /bʌs/，way 读 /weɪ/。", collocations: [["busway A/B", "A/B路母线"], ["busway temperature", "母线温度"], ["busway joint", "母线接头"]], examples: [["Check the busway temperature.", "检查母线温度。"], ["Busway A runs along the ceiling.", "A母线沿天花板走线。"]] },
    ],
    phrases: [
      { p: "Busway A", ipa: "/bʌs.weɪ eɪ/", cn: "A母线", why: "A=A路供电链路。与Busway B配对，分别由独立的变压器和UPS供电。" },
    ],
    grammar: [
      { q: "busway 和 cable 有什么区别？", a: "busway = 母线槽（封闭金属通道，铜排传输，承载大电流 400A-6300A）\ncable = 电缆（绝缘导线，承载中小电流）\n供电链路：变压器 → busway（大电流传输）→ PDU（分配到机柜）→ cable（到设备）\n母线槽用于主干传输，电缆用于末端分配。" },
    ],
    pattern: "Locate Busway + 路别",
    patternExamples: [
      { en: "Locate Busway B.", cn: "定位B母线。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "busway", ipa: "/ˈbʌsweɪ/", cn: "母线槽", phonics: "bus 读 /bʌs/，way 读 /weɪ/" }] },
      { en: "Locate Busway A joint.", cn: "定位A母线接头。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "busway", ipa: "/ˈbʌsweɪ/", cn: "母线槽", phonics: "bus 读 /bʌs/，way 读 /weɪ/" }] },
      { en: "Locate the busway tap-off box.", cn: "定位母线取电箱。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "busway", ipa: "/ˈbʌsweɪ/", cn: "母线槽", phonics: "bus 读 /bʌs/，way 读 /weɪ/" }] },
    ],
    thinking: "母线槽是数据中心供电的主干通道。\n供电链路：变压器 → 母线槽（Busway）→ PDU → 设备。\n母线槽安装在机房天花板下方或架空地板上方。\nA路和B路母线分别沿机房两侧走线，物理隔离防止同时受损。",
    pronunciation: "busway 的 u 读短音 /ʌ/：/bʌs.weɪ/。\n不要读成 bus-way（公交车道），是电气术语。\n节奏：lo-CATE ｜ BUS-way A.",
    quiz: [
      { q: "母线槽的别称有哪些？", a: "bus duct（母线管道）、busbar trunking（母排干线）。都是指同一个设备：封闭金属通道内的大容量电力传输系统。" },
    ],
  },
  {
    id: 362,
    en: "Locate Busway B.",
    cn: "定位B母线。",
    ipa: "/loʊˈkeɪt bʌs.weɪ biː/",
    tags: ["第362句", "DCIM定位", "★★★★"],
    when: "B路母线定位，与A路配对实现双路供电。",
    words: [],
    phrases: [
      { p: "Busway B", ipa: "/bʌs.weɪ biː/", cn: "B母线", why: "B=B路供电链路。与Busway A物理隔离，分别沿机房两侧走线。" },
    ],
    grammar: [],
    pattern: "Locate Busway A/B",
    patternExamples: [
      { en: "Locate Busway A and Busway B.", cn: "定位A母线和B母线。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "busway", ipa: "/ˈbʌsweɪ/", cn: "母线槽", phonics: "bus 读 /bʌs/，way 读 /weɪ/" }] },
      { en: "Compare Busway A and Busway B loads.", cn: "比较A母线和B母线负载。", words: [{ w: "busway", ipa: "/ˈbʌsweɪ/", cn: "母线槽", phonics: "bus 读 /bʌs/，way 读 /weɪ/" }, { w: "loads", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
      { en: "Both busways are operating normally.", cn: "两条母线都运行正常。", words: [{ w: "busways", ipa: "/ˈbʌsweɪ/", cn: "母线槽", phonics: "bus 读 /bʌs/，way 读 /weɪ/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "A/B两条母线的物理隔离原则：\n① 走线方向不同：A沿北侧，B沿南侧（或A沿东侧，B沿西侧）\n② 独立变压器供电\n③ 独立UPS供电\n④ 任一条母线故障不影响另一条\n物理隔离是数据中心2N冗余设计的核心。",
    pronunciation: "节奏：lo-CATE ｜ BUS-way B.",
    quiz: [
      { q: "为什么A/B母线要物理隔离？", a: "防止同时受损。如果两条母线走同一条路径，一次火灾/水灾/施工事故可能同时损坏两条，导致完全断电。物理隔离确保2N冗余的有效性。" },
    ],
  },
  {
    id: 363,
    en: "Busway A runs along the north side of the data hall.",
    cn: "A母线沿机房北侧走线。",
    ipa: "/bʌs.weɪ eɪ rʌnz əˈlɒŋ ðə nɔːrθ saɪd ʌv ðə ˈdeɪ.tə hɔːl/",
    tags: ["第363句", "母线走线", "★★★★"],
    when: "描述A母线的走线路径，帮助运维人员在现场快速找到母线位置。",
    words: [
      { w: "runs along", ipa: "/rʌnz əˈlɒŋ/", pos: "动词短语", cn: "沿…走线", memory: "① run = 跑/运行；② along = 沿着。\nrun along = 沿着某路径走线（电气/管道路由描述）。\n主语是 busway/cable/pipe 等线状设施。", phonics: "runs 读 /rʌnz/，along 读 /əˈlɒŋ/。", collocations: [["run along the wall", "沿墙走线"], ["run along the ceiling", "沿天花板走线"], ["run along the floor", "沿地面走线"]], examples: [["The cable runs along the tray.", "电缆沿桥架走线。"], ["The pipe runs along the corridor.", "管道沿走廊走线。"]] },
      { w: "data hall", ipa: "/ˈdeɪ.tə hɔːl/", pos: "名词", cn: "机房；数据大厅", memory: "① data = 数据；② hall = 大厅/厅。\ndata hall = 放置服务器机柜的大型机房空间。\n也叫 server room（小机房）或 white space（白色空间）。", phonics: "data 读 /ˈdeɪ.tə/，hall 读 /hɔːl/。", collocations: [["data hall temperature", "机房温度"], ["data hall layout", "机房布局"], ["enter the data hall", "进入机房"]], examples: [["The data hall is at 22°C.", "机房温度22°C。"], ["No food or drink in the data hall.", "机房内禁止饮食。"]] },
    ],
    phrases: [
      { p: "runs along the north side", ipa: "/rʌnz əˈlɒŋ ðə nɔːrθ saɪd/", cn: "沿北侧走线", why: "run along + 方位 = 沿某个方向走线。north side = 北侧。母线通常沿机房长边方向走线。" },
    ],
    grammar: [
      { q: "data hall 和 server room 有什么区别？", a: "data hall = 数据大厅（大型机房，数百个机柜，专业冷却系统）\nserver room = 服务器房间（小机房，几十个机柜，普通空调）\nBridge Data Centres 的 B5/B7 楼都是 data hall 级别。\ndata hall 有架空地板、精密空调、气体灭火等专业设施。" },
    ],
    pattern: "Busway/Cable + runs along + 方位",
    patternExamples: [
      { en: "Busway B runs along the south side.", cn: "B母线沿南侧走线。", words: [{ w: "busway", ipa: "/ˈbʌsweɪ/", cn: "母线槽", phonics: "bus 读 /bʌs/，way 读 /weɪ/" }] },
      { en: "The cable tray runs along the ceiling.", cn: "电缆桥架沿天花板走线。", words: [] },
      { en: "The chilled water pipe runs along the east wall.", cn: "冷冻水管沿东墙走线。", words: [{ w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "pipe", ipa: "/paɪp/", cn: "管道", phonics: "pipe 读 /paɪp/" }] },
    ],
    thinking: "母线走线方向通常是：\nA母线 → 北侧（north side）或东侧（east side）\nB母线 → 南侧（south side）或西侧（west side）\n走线方向在DCIM楼层图上用不同颜色标注。\n现场确认时抬头看天花板下方的母线槽即可。",
    pronunciation: "along 重音在第二音节：/əˈlɒŋ/。\nnorth 的 or 读 /ɔːr/：/nɔːrθ/。\ndata hall 的 a 读 /eɪ/：/ˈdeɪ.tə/。\n节奏：BUS-way A ｜ RUNS a-LONG ｜ the NORTH SIDE ｜ of the DA-ta HALL.",
    quiz: [
      { q: "B母线沿哪一侧走线？", a: "Busway B runs along the south side of the data hall.（B母线沿机房南侧走线。）" },
    ],
  },
  {
    id: 364,
    en: "Busway B runs along the south side of the data hall.",
    cn: "B母线沿机房南侧走线。",
    ipa: "/bʌs.weɪ biː rʌnz əˈlɒŋ ðə saʊθ saɪd ʌv ðə ˈdeɪ.tə hɔːl/",
    tags: ["第364句", "母线走线", "★★★★"],
    when: "B母线走线方向与A母线对称，实现物理隔离。",
    words: [],
    phrases: [
      { p: "runs along the south side", ipa: "/rʌnz əˈlɒŋ ðə saʊθ saɪd/", cn: "沿南侧走线", why: "south side = 南侧。与A母线的北侧（north side）对称，物理隔离。" },
    ],
    grammar: [],
    pattern: "Busway B runs along the south/west side",
    patternExamples: [
      { en: "Busway B runs along the south side.", cn: "B母线沿南侧走线。", words: [{ w: "busway", ipa: "/ˈbʌsweɪ/", cn: "母线槽", phonics: "bus 读 /bʌs/，way 读 /weɪ/" }] },
      { en: "Busway B runs along the west side.", cn: "B母线沿西侧走线。", words: [{ w: "busway", ipa: "/ˈbʌsweɪ/", cn: "母线槽", phonics: "bus 读 /bʌs/，way 读 /weɪ/" }] },
      { en: "Both busways run parallel to each other.", cn: "两条母线相互平行走线。", words: [{ w: "busways", ipa: "/ˈbʌsweɪ/", cn: "母线槽", phonics: "bus 读 /bʌs/，way 读 /weɪ/" }] },
    ],
    thinking: "A/B母线平行走线但保持物理距离（通常≥3米）。\n目的：防止一次事故同时损坏两条母线。\n走线方向在DCIM系统中用颜色区分：A路蓝色，B路红色。",
    pronunciation: "south 的 ou 读 /aʊ/：/saʊθ/。注意 th 咬舌尖。\n节奏：BUS-way B ｜ RUNS a-LONG ｜ the SOUTH SIDE ｜ of the DA-ta HALL.",
    quiz: [
      { q: "两条母线之间应保持多远的物理距离？", a: "通常≥3米。确保一次火灾、水灾或施工事故不会同时影响两条母线，保障2N冗余的有效性。" },
    ],
  },
  {
    id: 365,
    en: "Please check the busway temperature reading.",
    cn: "请检查母线温度读数。",
    ipa: "/pliːz tʃɛk ðə bʌs.weɪ ˈtɛm.pər.ə.tʃər ˈriː.dɪŋ/",
    tags: ["第365句", "母线监测", "★★★★★"],
    when: "母线温度是关键监测指标。温度过高可能意味着过载或接头松动。",
    words: [
      { w: "temperature reading", ipa: "/ˈtɛm.pər.ə.tʃər ˈriː.dɪŋ/", pos: "名词短语", cn: "温度读数", memory: "① temperature = 温度；② reading = 读数/测量值。\ntemperature reading = 温度传感器显示的数值。\n母线正常运行温度：40-60°C，超过70°C需要关注。", phonics: "temperature 读 /ˈtɛm.pər.ə.tʃər/，reading 读 /ˈriː.dɪŋ/。", collocations: [["temperature reading", "温度读数"], ["voltage reading", "电压读数"], ["current reading", "电流读数"]], examples: [["The reading is 55°C.", "读数是55°C。"], ["Check the reading on the display.", "检查显示屏上的读数。"]] },
    ],
    phrases: [
      { p: "busway temperature reading", ipa: "/bʌs.weɪ ˈtɛm.pər.ə.tʃər ˈriː.dɪŋ/", cn: "母线温度读数", why: "母线温度通过红外传感器或热电偶实时监测，读数显示在BMS和DCIM系统中。" },
    ],
    grammar: [
      { q: "母线温度异常可能是什么原因？", a: "① 过载（电流超过额定值 → 铜排发热增加）\n② 接头松动（接触电阻增大 → 局部过热）\n③ 环境温度过高（机房空调故障 → 散热不良）\n④ 母线老化（绝缘材料劣化 → 散热能力下降）\n温度超过70°C → 立即检查；超过80°C → 准备切换负载。" },
    ],
    pattern: "Please check the + 设备 + temperature reading",
    patternExamples: [
      { en: "Please check the transformer temperature reading.", cn: "请检查变压器温度读数。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "transformer", ipa: "/trænsˈfɔːrmər/", cn: "变压器", phonics: "trans 读 /træns/，former 读 /fɔːrmər/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
      { en: "Please check the UPS temperature reading.", cn: "请检查UPS温度读数。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
      { en: "Please check the PDU temperature reading.", cn: "请检查PDU温度读数。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "pdu", ipa: "/ˌpiːˈdiːˈjuː/", cn: "配电单元", phonics: "P-D-U 逐字母读" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
    ],
    thinking: "母线温度监测要点：\n① 正常范围：40-60°C\n② 关注阈值：>70°C（需要检查原因）\n③ 告警阈值：>80°C（需要立即处理）\n④ 接头处温度通常比母线段高5-10°C\n⑤ BMS系统中有温度趋势图，可以看到温度变化趋势。",
    pronunciation: "temperature 重音在第一音节：/ˈtɛm.pər.ə.tʃər/。\nreading 的 ea 读长音 /iː/：/ˈriː.dɪŋ/。\n节奏：Please CHECK ｜ the BUS-way ｜ TEM-per-a-ture ｜ READ-ing.",
    quiz: [
      { q: "母线温度多少需要关注？", a: "超过70°C需要检查原因，超过80°C需要立即处理（可能切换负载）。正常运行温度在40-60°C之间。" },
    ],
  },
  {
    id: 366,
    en: "Locate ATS-02.",
    cn: "定位ATS02。",
    ipa: "/loʊˈkeɪt eɪ tiː ɛs zɪro tuː/",
    tags: ["第366句", "DCIM定位", "★★★★★"],
    when: "ATS（Automatic Transfer Switch）是自动转换开关，在市电和发电机之间自动切换。",
    words: [
      { w: "ATS", ipa: "/eɪ tiː ɛs/", pos: "名词", cn: "自动转换开关（Automatic Transfer Switch）", memory: "① A = Automatic（自动）；② T = Transfer（转换）；③ S = Switch（开关）。\nATS 在市电故障时自动切换到发电机供电，恢复后自动切回市电。\n切换时间通常 10-30 秒。", phonics: "逐字母读：A-T-S。", collocations: [["ATS switching", "ATS切换"], ["ATS status", "ATS状态"], ["ATS test", "ATS测试"]], examples: [["The ATS switched to generator.", "ATS切换到发电机了。"], ["Check the ATS status.", "检查ATS状态。"]] },
    ],
    phrases: [
      { p: "ATS-02", ipa: "/eɪ tiː ɛs zɪro tuː/", cn: "ATS02", why: "02=编号。数据中心通常有多台ATS，分别保护不同的供电区域。" },
    ],
    grammar: [
      { q: "ATS 和 STS 有什么区别？", a: "ATS = Automatic Transfer Switch（自动转换开关）\n- 用于市电↔发电机切换\n- 切换时间 10-30秒（有短暂断电）\n- 机械式开关\n\nSTS = Static Transfer Switch（静态转换开关）\n- 用于UPS-A↔UPS-B切换\n- 切换时间 <4ms（无感知）\n- 电子式开关（晶闸管）\n\nATS切换慢但容量大，STS切换快但容量小。" },
    ],
    pattern: "Locate ATS + 编号",
    patternExamples: [
      { en: "Locate ATS-01.", cn: "定位ATS01。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }] },
      { en: "Locate ATS-03.", cn: "定位ATS03。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }] },
      { en: "Check all ATS units.", cn: "检查所有ATS。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "ATS 在供电链路中的位置：\n市电 → ATS → 变压器 → UPS → PDU → 设备\n          ↕\n       发电机\n\n市电正常时：ATS连接市电侧\n市电故障时：ATS自动切换到发电机侧（10-30秒）\n市电恢复时：ATS自动切回市电侧（延时切换，确保市电稳定）",
    pronunciation: "ATS 逐字母读：A-T-S，不读成单词。\n02 读 Zero-Two，不读成 Oh-Two。\n节奏：lo-CATE ｜ A-T-S ｜ ZE-ro-TWO.",
    quiz: [
      { q: "ATS的切换时间是多少？", a: "10-30秒。ATS是机械式开关，切换需要时间。在此期间UPS电池供电，确保设备不断电。" },
      { q: "ATS和STS哪个切换更快？", a: "STS更快（<4ms），ATS较慢（10-30秒）。STS用电子开关（晶闸管），ATS用机械开关。" },
    ],
  },
  {
    id: 367,
    en: "Locate STS-01.",
    cn: "定位STS01。",
    ipa: "/loʊˈkeɪt ɛs tiː ɛs zɪro wʌn/",
    tags: ["第367句", "DCIM定位", "★★★★★"],
    when: "STS（Static Transfer Switch）是静态转换开关，在UPS-A和UPS-B之间无间断切换。",
    words: [
      { w: "STS", ipa: "/ɛs tiː ɛs/", pos: "名词", cn: "静态转换开关（Static Transfer Switch）", memory: "① S = Static（静态的，指无机械运动）；② T = Transfer（转换）；③ S = Switch（开关）。\nSTS 在UPS-A和UPS-B之间切换，切换时间<4ms，设备无感知。\n用于给单电源设备提供双路冗余。", phonics: "逐字母读：S-T-S。", collocations: [["STS switching", "STS切换"], ["STS preferred source", "STS首选电源"], ["STS bypass", "STS旁路"]], examples: [["The STS is on source A.", "STS当前使用A路电源。"], ["Check the STS status.", "检查STS状态。"]] },
    ],
    phrases: [
      { p: "STS-01", ipa: "/ɛs tiː ɛs zɪro wʌn/", cn: "STS01", why: "01=编号。STS安装在机柜内或列头柜中，为单电源设备提供双路供电。" },
    ],
    grammar: [
      { q: "STS什么时候使用？", a: "当设备只有单电源（一个电源接口）时：\n- 不能直接接A路或B路（单路故障就断电）\n- 接在STS后面，STS同时接A路和B路\n- 正常情况下STS使用首选电源（如A路）\n- A路故障时STS在<4ms内切换到B路\n- 设备完全无感知，不会重启\n\n双电源设备不需要STS，直接分别接A路和B路。" },
    ],
    pattern: "Locate STS + 编号",
    patternExamples: [
      { en: "Locate STS-02.", cn: "定位STS02。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }] },
      { en: "Locate STS-03.", cn: "定位STS03。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }] },
      { en: "The STS has switched to source B.", cn: "STS已切换到B路电源。", words: [{ w: "switched", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
    ],
    thinking: "STS在供电链路中的位置：\nUPS-A → STS → 单电源设备\nUPS-B ↗\n\nSTS确保单电源设备也能享受2N冗余。\nSTS有preferred source（首选电源），通常设为A路。\n如果A路故障，STS自动切换到B路；A路恢复后，STS自动切回A路。",
    pronunciation: "STS 逐字母读：S-T-S，不读成单词。\n01 读 Zero-One。\n节奏：lo-CATE ｜ S-T-S ｜ ZE-ro-ONE.",
    quiz: [
      { q: "STS的切换时间是多少？", a: "<4ms（4毫秒以内）。STS使用晶闸管（SCR）电子开关，切换速度极快，设备完全无感知。" },
      { q: "什么设备需要接STS？", a: "单电源设备（只有一个电源接口的设备）。双电源设备直接分别接A路和B路PDU，不需要STS。" },
    ],
  },
  {
    id: 368,
    en: "The ATS switches between utility and generator power.",
    cn: "ATS在市电和发电机之间切换。",
    ipa: "/ði eɪ tiː ɛs ˈswɪtʃ.ɪz bɪˈtwiːn juːˈtɪl.ɪ.ti ænd ˈdʒɛn.ə.reɪ.tər ˈpaʊ.ər/",
    tags: ["第368句", "ATS功能", "★★★★"],
    when: "说明ATS的核心功能：在市电（正常电源）和发电机（备用电源）之间自动切换。",
    words: [
      { w: "utility", ipa: "/juːˈtɪl.ɪ.ti/", pos: "名词", cn: "市电；公共电力", memory: "① utility = 公用事业/实用性；② 电气语境 = 市电（电网供电）。\nutility power = 市电 = mains power = grid power。\n与 generator power（发电机供电）相对。", phonics: "u 读 /juː/，til 读 /ˈtɪl/，i 读 /ɪ/，ty 读 /ti/，重音在第二音节。", collocations: [["utility power", "市电"], ["utility failure", "市电故障"], ["utility voltage", "市电电压"]], examples: [["The utility power is stable.", "市电稳定。"], ["Utility failure detected.", "检测到市电故障。"]] },
      { w: "switches between", ipa: "/ˈswɪtʃ.ɪz bɪˈtwiːn/", pos: "动词短语", cn: "在…之间切换", memory: "① switch = 切换/开关；② between = 在…之间。\nswitch between A and B = 在A和B之间切换。", phonics: "switches 读 /ˈswɪtʃ.ɪz/，between 读 /bɪˈtwiːn/。", collocations: [["switch between sources", "在电源间切换"], ["switch between modes", "在模式间切换"], ["auto switch", "自动切换"]], examples: [["The system switches between A and B.", "系统在A和B之间切换。"], ["It auto-switches on failure.", "故障时自动切换。"]] },
    ],
    phrases: [
      { p: "switches between utility and generator", ipa: "/ˈswɪtʃ.ɪz bɪˈtwiːn juːˈtɪl.ɪ.ti ænd ˈdʒɛn.ə.reɪ.tər/", cn: "在市电和发电机之间切换", why: "ATS的核心功能。市电正常时用市电，市电故障时自动切到发电机。" },
    ],
    grammar: [
      { q: "utility 和 mains 都指市电吗？", a: "是的，都是指电网供电（非发电机/UPS）：\nutility power = 美式英语常用\nmains power = 英式英语常用\ngrid power = 更技术化的说法\n在马来西亚（英联邦），mains power 更常用，但 utility power 也通用。" },
    ],
    pattern: "The ATS switches between + 电源A + and + 电源B",
    patternExamples: [
      { en: "The ATS switches between mains and generator.", cn: "ATS在市电和发电机之间切换。", words: [{ w: "switches", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "The STS switches between UPS-A and UPS-B.", cn: "STS在UPS-A和UPS-B之间切换。", words: [{ w: "switches", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "The system switches between normal and bypass.", cn: "系统在正常模式和旁路模式之间切换。", words: [{ w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "switches", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "ATS切换逻辑：\n① 市电正常 → ATS连接市电 → 设备由市电供电\n② 市电故障 → 检测到失电 → 发送启动信号给发电机\n③ 发电机启动（10-15秒）→ 达到额定转速和电压\n④ ATS切换到发电机侧（切换时间<1秒）\n⑤ 市电恢复 → 延时（30-60秒确认稳定）→ ATS切回市电\n⑥ 发电机延时停机（冷却运行5-10分钟后停止）",
    pronunciation: "utility 重音在第二音节：/juːˈtɪl.ɪ.ti/。\ngenerator 重音在第一音节：/ˈdʒɛn.ə.reɪ.tər/。\nbetween 重音在第二音节：/bɪˈtwiːn/。\n节奏：The A-T-S ｜ SWITCH-es ｜ be-TWEEN ｜ u-TIL-i-ty ｜ and GEN-er-a-tor POW-er.",
    quiz: [
      { q: "市电故障后ATS多久切换到发电机？", a: "发电机启动需要10-15秒，达到额定后ATS切换（<1秒），总计约10-20秒。期间UPS电池供电。" },
    ],
  },
  {
    id: 369,
    en: "The STS switches between UPS A and UPS B.",
    cn: "STS在A路UPS和B路UPS之间切换。",
    ipa: "/ði ɛs tiː ɛs ˈswɪtʃ.ɪz bɪˈtwiːn juː piː ɛs eɪ ænd juː piː ɛs biː/",
    tags: ["第369句", "STS功能", "★★★★"],
    when: "说明STS的核心功能：在双路UPS之间无间断切换，为单电源设备提供冗余。",
    words: [],
    phrases: [
      { p: "switches between UPS A and UPS B", ipa: "/ˈswɪtʃ.ɪz bɪˈtwiːn juː piː ɛs eɪ ænd juː piː ɛs biː/", cn: "在UPS-A和UPS-B之间切换", why: "STS的核心功能。正常情况下使用首选电源（如UPS-A），故障时<4ms切换到UPS-B。" },
    ],
    grammar: [],
    pattern: "The STS switches between + UPS-A + and + UPS-B",
    patternExamples: [
      { en: "The STS is currently on source A.", cn: "STS当前使用A路电源。", words: [] },
      { en: "The STS has switched to source B.", cn: "STS已切换到B路电源。", words: [{ w: "switched", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "Both STS sources are available.", cn: "STS两路电源均可用。", words: [] },
    ],
    thinking: "STS vs ATS 功能对比：\n| 特性 | ATS | STS |\n|------|-----|-----|\n| 切换对象 | 市电↔发电机 | UPS-A↔UPS-B |\n| 切换时间 | 10-30秒 | <4ms |\n| 开关类型 | 机械式 | 电子式（晶闸管） |\n| 设备感知 | 有（UPS电池填补） | 无 |\n| 容量 | 大（数百A） | 小（数十A） |\n| 安装位置 | 配电室 | 机柜内/列头柜 |",
    pronunciation: "UPS 逐字母读：U-P-S。\n节奏：The S-T-S ｜ SWITCH-es ｜ be-TWEEN ｜ U-P-S A ｜ and U-P-S B.",
    quiz: [
      { q: "STS切换时设备会重启吗？", a: "不会。STS切换时间<4ms，远小于设备电源的保持时间（通常20ms），设备完全无感知，不会重启。" },
    ],
  },
  {
    id: 370,
    en: "Locate UPS Battery String 3.",
    cn: "定位UPS第三组电池。",
    ipa: "/loʊˈkeɪt juː piː ɛs ˈbæt.ər.i strɪŋ θriː/",
    tags: ["第370句", "DCIM定位", "★★★★★"],
    when: "UPS电池组（Battery String）是UPS的储能单元。多台UPS和多组电池需要准确定位。",
    words: [
      { w: "battery string", ipa: "/ˈbæt.ər.i strɪŋ/", pos: "名词", cn: "电池组；电池串", memory: "① battery = 电池；② string = 串/组。\nbattery string = 一组串联的电池（通常20-40个单体电池串联）。\n一台UPS可能配2-4组电池串，实现冗余。", phonics: "battery 读 /ˈbæt.ər.i/，string 读 /strɪŋ/。", collocations: [["battery string", "电池组"], ["battery voltage", "电池电压"], ["battery test", "电池测试"]], examples: [["Check battery string voltage.", "检查电池组电压。"], ["String 3 has a weak cell.", "第三组有一个弱电池。"]] },
    ],
    phrases: [
      { p: "UPS Battery String 3", ipa: "/juː piː ɛs ˈbæt.ər.i strɪŋ θriː/", cn: "UPS第三组电池", why: "String 3 = 第三组电池串。编号从1开始，String 1通常是首选电池组。" },
    ],
    grammar: [
      { q: "为什么UPS要配多组电池串？", a: "冗余设计：\n- 1组电池 = 无冗余（电池故障→UPS无后备）\n- 2组电池 = N+1冗余（1组故障，另1组仍可支撑）\n- 4组电池 = 2N冗余（完全独立的两套）\n\n多组电池串并联连接，任一组故障不影响整体后备时间。\nBridge Data Centres 的UPS通常配4组电池串（2N冗余）。" },
    ],
    pattern: "Locate + UPS + Battery String + 编号",
    patternExamples: [
      { en: "Locate UPS Battery String 1.", cn: "定位UPS第一组电池。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "battery", ipa: "/ˈbætəri/", cn: "电池", phonics: "bat 读 /bæt/，tery 读 /təri/" }] },
      { en: "Locate UPS Battery String 2.", cn: "定位UPS第二组电池。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "battery", ipa: "/ˈbætəri/", cn: "电池", phonics: "bat 读 /bæt/，tery 读 /təri/" }] },
      { en: "Locate UPS Battery String 4.", cn: "定位UPS第四组电池。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "battery", ipa: "/ˈbætəri/", cn: "电池", phonics: "bat 读 /bæt/，tery 读 /təri/" }] },
    ],
    thinking: "UPS电池组关键信息：\n① 每组电池串由20-40个单体电池串联\n② 单体电池电压：12V（铅酸）或2V（铅酸大单体）\n③ 整组电压：240V-480V\n④ 后备时间：通常10-15分钟（满载）\n⑤ 电池寿命：3-5年（铅酸），需要定期更换\n⑥ BMS监测每组电池的电压、电流、温度",
    pronunciation: "battery 重音在第一音节：/ˈbæt.ər.i/。\nstring 的 str 读 /str/，ing 读 /ɪŋ/。\n节奏：lo-CATE ｜ U-P-S ｜ BAT-ter-y ｜ STRING THREE.",
    quiz: [
      { q: "UPS通常配几组电池串？", a: "Bridge Data Centres 的UPS通常配4组电池串（2N冗余设计）。2组工作+2组备用，确保任何1-2组故障仍有足够后备时间。" },
      { q: "电池组的后备时间通常是多少？", a: "满载情况下10-15分钟。这段时间足够发电机启动并接管供电（发电机启动需要10-20秒）。" },
    ],
  },
  {
    id: 371,
    en: "Locate CRAH-12.",
    cn: "定位12号风墙。",
    ipa: "/loʊˈkeɪt kræh twɛlv/",
    tags: ["第371句", "DCIM定位", "★★★★★"],
    when: "CRAH（Computer Room Air Handler）是精密空调/风墙，负责机房冷却。",
    words: [
      { w: "CRAH", ipa: "/kræh/", pos: "名词", cn: "精密空调（Computer Room Air Handler）", memory: "① C = Computer（计算机）；② R = Room（房间）；③ A = Air（空气）；④ H = Handler（处理器）。\nCRAH = 机房空气处理单元 = 精密空调/风墙。\n也叫 CRAC（Computer Room Air Conditioner）。", phonics: "读作 /kræh/（一个音节），不是逐字母读。", collocations: [["CRAH unit", "精密空调"], ["CRAH supply temperature", "空调送风温度"], ["CRAH return temperature", "空调回风温度"]], examples: [["CRAH-12 is running normally.", "12号空调运行正常。"], ["Check the CRAH supply temperature.", "检查空调送风温度。"]] },
    ],
    phrases: [
      { p: "CRAH-12", ipa: "/kræh twɛlv/", cn: "12号风墙", why: "12=编号。数据中心通常有10-20台CRAH，N+1或N+2冗余配置。" },
    ],
    grammar: [
      { q: "CRAH 和 CRAC 有什么区别？", a: "CRAH = Computer Room Air Handler（空气处理单元）\n- 使用冷冻水冷却（chilled water）\n- 需要外部冷水机组提供冷冻水\n- 能效更高，适合大型数据中心\n\nCRAC = Computer Room Air Conditioner（空调）\n- 自带压缩机和制冷剂\n- 独立运行，不依赖外部冷源\n- 适合中小型机房\n\nBridge Data Centres 使用 CRAH（冷冻水系统），不用 CRAC。" },
    ],
    pattern: "Locate CRAH + 编号",
    patternExamples: [
      { en: "Locate CRAH-01.", cn: "定位1号风墙。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }] },
      { en: "Locate CRAH-05.", cn: "定位5号风墙。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }] },
      { en: "Locate CRAH-15.", cn: "定位15号风墙。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }] },
    ],
    thinking: "CRAH冷却原理：\n① 冷冻水（6-7°C）从冷水机组进入CRAH\n② CRAH内风机将机房热空气（35-40°C）吹过冷冻水盘管\n③ 热空气被冷却为冷风（18-22°C）\n④ 冷风送入冷通道\n⑤ 升温后的冷冻水（12-14°C）回到冷水机组重新冷却\n\nCRAH送风温度通常设定为20-22°C。",
    pronunciation: "CRAH 读作一个音节 /kræh/，不是逐字母读 C-R-A-H。\n12 读 twelve，不读成 one-two。\n节奏：lo-CATE ｜ CRAH TWELVE.",
    quiz: [
      { q: "CRAH和CRAC的主要区别是什么？", a: "CRAH使用冷冻水冷却（需外部冷水机组），CRAC自带压缩机和制冷剂。大型数据中心通常用CRAH，能效更高。Bridge Data Centres用CRAH。" },
    ],
  },
  {
    id: 372,
    en: "Locate Water Leak Sensor 08.",
    cn: "定位8号漏水传感器。",
    ipa: "/loʊˈkeɪt ˈwɔː.tər liːk ˈsɛn.sər zɪro eɪt/",
    tags: ["第372句", "DCIM定位", "★★★★★"],
    when: "漏水传感器安装在架空地板下方，检测冷冻水管道或冷凝水泄漏。",
    words: [
      { w: "water leak sensor", ipa: "/ˈwɔː.tər liːk ˈsɛn.sər/", pos: "名词", cn: "漏水传感器", memory: "① water = 水；② leak = 泄漏；③ sensor = 传感器。\nwater leak sensor = 检测水泄漏的传感器。\n安装在架空地板下方、冷冻水管接头处、CRAC下方。", phonics: "water 读 /ˈwɔː.tər/，leak 读 /liːk/，sensor 读 /ˈsɛn.sər/。", collocations: [["water leak", "漏水"], ["leak sensor", "漏水传感器"], ["leak detection", "漏水检测"]], examples: [["Water leak detected.", "检测到漏水。"], ["Check the leak sensor.", "检查漏水传感器。"]] },
    ],
    phrases: [
      { p: "Water Leak Sensor 08", ipa: "/ˈwɔː.tər liːk ˈsɛn.sər zɪro eɪt/", cn: "8号漏水传感器", why: "08=编号。数据中心通常有20-50个漏水传感器，覆盖所有可能漏水的区域。" },
    ],
    grammar: [
      { q: "漏水传感器安装在哪些位置？", a: "① 冷冻水管道接头处（最可能漏水）\n② CRAH/CRAC设备下方（冷凝水可能泄漏）\n③ 架空地板下方的关键区域\n④ 消防管道附近\n⑤ 卫生间/茶水间附近（如果有）\n\n传感器类型：\n- 点式传感器：检测一个点\n- 线式传感器：沿管道铺设，检测整条线" },
    ],
    pattern: "Locate + Water Leak Sensor + 编号",
    patternExamples: [
      { en: "Locate Water Leak Sensor 01.", cn: "定位1号漏水传感器。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "sensor", ipa: "/ˈsɛnsər/", cn: "传感器", phonics: "sens 读 /sɛns/，or 读 /ər/" }] },
      { en: "Locate Water Leak Sensor 15.", cn: "定位15号漏水传感器。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "sensor", ipa: "/ˈsɛnsər/", cn: "传感器", phonics: "sens 读 /sɛns/，or 读 /ər/" }] },
      { en: "Water Leak Sensor 08 has triggered.", cn: "8号漏水传感器已触发。", words: [{ w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "sensor", ipa: "/ˈsɛnsər/", cn: "传感器", phonics: "sens 读 /sɛns/，or 读 /ər/" }] },
    ],
    thinking: "漏水是数据中心严重事件：\n① 水接触电气设备 → 短路 → 设备损坏\n② 水接触架空地板金属 → 腐蚀\n③ 冷冻水泄漏 → 冷却能力下降 → 温度升高\n\n漏水响应流程：\n① BMS告警 → 确认传感器位置\n② 派人到现场确认（可能是误报）\n③ 如果确认漏水 → 关闭相关阀门 → 清理积水\n④ 评估设备受损情况 → 必要时切换负载",
    pronunciation: "leak 的 ea 读长音 /iː/：/liːk/。\nsensor 重音在第一音节：/ˈsɛn.sər/。\n08 读 Zero-Eight。\n节奏：lo-CATE ｜ WA-ter LEAK ｜ SEN-sor ｜ ZE-ro-EIGHT.",
    quiz: [
      { q: "发现漏水后第一步做什么？", a: "先确认是否真的漏水（可能是传感器误报）。派人到现场查看，如果确认漏水，立即关闭相关阀门并清理积水。" },
    ],
  },
  {
    id: 373,
    en: "Locate Smoke Detector 15.",
    cn: "定位15号烟感。",
    ipa: "/loʊˈkeɪt smoʊk dɪˈtɛk.tər fɪfˈtiːn/",
    tags: ["第373句", "DCIM定位", "★★★★★"],
    when: "烟感探测器是消防系统的关键组件，检测火灾初期产生的烟雾。",
    words: [
      { w: "smoke detector", ipa: "/smoʊk dɪˈtɛk.tər/", pos: "名词", cn: "烟感探测器", memory: "① smoke = 烟；② detector = 探测器。\nsmoke detector = 检测烟雾的消防设备。\n数据中心使用 VESDA（极早期烟雾探测）系统，比普通烟感更灵敏。", phonics: "smoke 读 /smoʊk/，detector 读 /dɪˈtɛk.tər/。", collocations: [["smoke detector", "烟感"], ["smoke alarm", "烟雾报警"], ["fire detection", "火灾探测"]], examples: [["Smoke detector triggered.", "烟感触发。"], ["Test the smoke detector.", "测试烟感。"]] },
    ],
    phrases: [
      { p: "Smoke Detector 15", ipa: "/smoʊk dɪˈtɛk.tər fɪfˈtiːn/", cn: "15号烟感", why: "15=编号。数据中心天花板下方和架空地板下方都安装烟感，形成双层探测。" },
    ],
    grammar: [
      { q: "数据中心的烟感系统有什么特殊之处？", a: "数据中心使用 VESDA（Very Early Smoke Detection Apparatus）系统：\n① 比普通烟感灵敏1000倍\n② 能在火灾发生前数小时检测到微小烟雾颗粒\n③ 通过采样管道主动吸入空气分析\n④ 四级告警：Alert（预警）→ Action（行动）→ Fire 1（火灾1级）→ Fire 2（火灾2级）\n\n普通烟感只能在可见烟雾时报警，VESDA能在肉眼不可见阶段就检测。" },
    ],
    pattern: "Locate + Smoke Detector + 编号",
    patternExamples: [
      { en: "Locate Smoke Detector 01.", cn: "定位1号烟感。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "smoke", ipa: "/smoʊk/", cn: "烟雾", phonics: "smoke 读 /smoʊk/" }] },
      { en: "Locate Smoke Detector 20.", cn: "定位20号烟感。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "smoke", ipa: "/smoʊk/", cn: "烟雾", phonics: "smoke 读 /smoʊk/" }] },
      { en: "Smoke Detector 15 is in alert status.", cn: "15号烟感处于预警状态。", words: [{ w: "smoke", ipa: "/smoʊk/", cn: "烟雾", phonics: "smoke 读 /smoʊk/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
    ],
    thinking: "数据中心消防探测层级：\n① VESDA（极早期）→ 天花板下方采样管道 → 火灾前数小时\n② 烟感（smoke detector）→ 天花板安装 → 可见烟雾时\n③ 温感（heat detector）→ 天花板安装 → 温度急剧升高时\n④ 手动报警按钮 → 墙面安装 → 人工触发\n\nVESDA最先报警，给人最长时间响应。",
    pronunciation: "smoke 的 o 读长音 /oʊ/：/smoʊk/。\ndetector 重音在第二音节：/dɪˈtɛk.tər/。\n15 读 fifteen，不读成 one-five。\n节奏：lo-CATE ｜ SMOKE de-TEC-tor ｜ FIF-TEEN.",
    quiz: [
      { q: "VESDA系统比普通烟感灵敏多少倍？", a: "1000倍。VESDA能在火灾发生前数小时检测到微小烟雾颗粒，普通烟感只能在可见烟雾时报警。" },
    ],
  },
  {
    id: 374,
    en: "The sensor is installed under the raised floor.",
    cn: "传感器安装在架空地板下方。",
    ipa: "/ðə ˈsɛn.sər ɪz ɪnˈstɔːld ˈʌn.dər ðə reɪzd flɔːr/",
    tags: ["第374句", "传感器位置", "★★★★"],
    when: "说明传感器的安装位置。数据中心使用架空地板（raised floor），下方空间用于走线和安装传感器。",
    words: [
      { w: "raised floor", ipa: "/reɪzd flɔːr/", pos: "名词", cn: "架空地板；活动地板", memory: "① raised = 抬高的；② floor = 地板。\nraised floor = 架空地板（也叫 access floor / raised access floor）。\n架空高度通常300-900mm，下方空间用于送冷风、走电缆、安装管道。", phonics: "raised 读 /reɪzd/，floor 读 /flɔːr/。", collocations: [["raised floor", "架空地板"], ["floor tile", "地板砖"], ["floor void", "地板下方空间"]], examples: [["Lift the floor tile.", "掀起地板砖。"], ["Check under the raised floor.", "检查架空地板下方。"]] },
      { w: "installed", ipa: "/ɪnˈstɔːld/", pos: "动词(过去分词)", cn: "安装的", memory: "① install = 安装；② installed = 被安装的（被动语态）。\nis installed = 被安装在。", phonics: "in 读 /ɪn/，stalled 读 /stɔːld/，重音在第二音节。", collocations: [["installed under", "安装在…下方"], ["installed on", "安装在…上方"], ["newly installed", "新安装的"]], examples: [["The sensor is installed on the ceiling.", "传感器安装在天花板上。"], ["Newly installed equipment.", "新安装的设备。"]] },
    ],
    phrases: [
      { p: "under the raised floor", ipa: "/ˈʌn.dər ðə reɪzd flɔːr/", cn: "在架空地板下方", why: "under = 在…下方。raised floor = 架空地板。传感器和漏水检测线通常安装在地板下方。" },
    ],
    grammar: [
      { q: "raised floor 和 access floor 是同一个东西吗？", a: "是的，都是指架空地板/活动地板：\nraised floor = 抬高地板（强调高度）\naccess floor = 活动地板（强调可拆卸性）\nraised access floor = 架空活动地板（完整名称）\n\n架空地板的作用：\n① 下方空间送冷风（下送风模式）\n② 走电缆和管道\n③ 安装传感器和探测器\n④ 方便维护（可掀起地板砖）" },
    ],
    pattern: "The + 设备 + is installed + 位置",
    patternExamples: [
      { en: "The sensor is installed on the ceiling.", cn: "传感器安装在天花板上。", words: [{ w: "sensor", ipa: "/ˈsɛnsər/", cn: "传感器", phonics: "sens 读 /sɛns/，or 读 /ər/" }] },
      { en: "The detector is installed above the rack.", cn: "探测器安装在机柜上方。", words: [{ w: "rack", ipa: "/ræk/", cn: "机柜", phonics: "rack 读 /ræk/" }] },
      { en: "The camera is installed at the entrance.", cn: "摄像头安装在入口处。", words: [] },
    ],
    thinking: "数据中心地板结构：\n① 架空地板（raised floor）：高度300-900mm\n② 地板下方（floor void）：送冷风、走线缆、安装传感器\n③ 地板砖（floor tile）：600mm×600mm标准尺寸，可掀起\n④ 楼板（structural floor）：建筑实际地面\n\n传感器安装位置选择：\n- 漏水传感器 → 地板下方（检测管道泄漏）\n- 烟感 → 天花板下方 + 地板下方（双层探测）\n- 温湿度传感器 → 机柜前方（冷通道侧）",
    pronunciation: "installed 重音在第二音节：/ɪnˈstɔːld/。\nraised 的 ai 读 /eɪ/：/reɪzd/。\n节奏：The SEN-sor ｜ is in-STALLED ｜ UN-der ｜ the RAISED FLOOR.",
    quiz: [
      { q: "架空地板下方空间用于什么？", a: "三个主要用途：① 送冷风（下送风模式）② 走电缆和管道 ③ 安装传感器（漏水、烟感）。" },
    ],
  },
  {
    id: 375,
    en: "Please confirm the sensor reading on DCIM.",
    cn: "请在DCIM上确认传感器读数。",
    ipa: "/pliːz kənˈfɜːrm ðə ˈsɛn.sər ˈriː.dɪŋ ɑːn diː siː aɪ ɛm/",
    tags: ["第375句", "DCIM操作", "★★★★★"],
    when: "在DCIM系统中查看传感器的实时读数，确认设备运行状态。",
    words: [
      { w: "confirm", ipa: "/kənˈfɜːrm/", pos: "动词", cn: "确认；核实", memory: "① con = 加强；② firm = 确定的。\nconfirm = 确认/核实（比 check 更强调最终确认）。\n在DCIM中 confirm 表示查看并确认数据正确。", phonics: "con 读 /kən/，firm 读 /ˈfɜːrm/，重音在第二音节。", collocations: [["confirm the reading", "确认读数"], ["confirm the status", "确认状态"], ["confirm on DCIM", "在DCIM上确认"]], examples: [["Confirm the temperature.", "确认温度。"], ["Please confirm on the system.", "请在系统上确认。"]] },
    ],
    phrases: [
      { p: "on DCIM", ipa: "/ɑːn diː siː aɪ ɛm/", cn: "在DCIM上", why: "on + 平台/系统 = 在某个系统上。DCIM = Data Center Infrastructure Management（数据中心基础设施管理系统）。" },
    ],
    grammar: [
      { q: "DCIM 和 BMS 有什么区别？", a: "DCIM = Data Center Infrastructure Management（数据中心基础设施管理）\n- 关注IT基础设施：机柜、服务器、PDU、网络\n- 功能：资产管理、容量规划、能耗监控\n- 用户：IT运维、设施管理\n\nBMS = Building Management System（楼宇管理系统）\n- 关注建筑设施：空调、电力、消防、安防\n- 功能：环境监控、设备控制、告警管理\n- 用户：设施运维、值班工程师\n\n两者有重叠（如温度、电力监控），但侧重点不同。\nBridge Data Centres 同时使用 DCIM 和 BMS。" },
    ],
    pattern: "Please confirm + 信息 + on + 系统",
    patternExamples: [
      { en: "Please confirm the alarm on BMS.", cn: "请在BMS上确认告警。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "bms", ipa: "/ˌbiːˈɛmˈɛs/", cn: "楼控", phonics: "B-M-S 逐字母读" }] },
      { en: "Please confirm the rack power on DCIM.", cn: "请在DCIM上确认机柜电力。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }, { w: "rack", ipa: "/ræk/", cn: "机柜", phonics: "rack 读 /ræk/" }, { w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }] },
      { en: "Please confirm the ticket status on the system.", cn: "请在系统上确认工单状态。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }, { w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
    ],
    thinking: "DCIM系统核心功能：\n① 楼层图（Floor Plan）→ 可视化设备位置\n② 资产追踪 → 机柜利用率、设备清单\n③ 电力监控 → PDU负载、能耗趋势\n④ 环境监测 → 温湿度热力图\n⑤ 容量规划 → 可用空间、电力、冷却\n⑥ 告警管理 → 设备状态告警\n\nDCIM是运维人员日常操作的核心工具，与BMS互补使用。",
    pronunciation: "confirm 重音在第二音节：/kənˈfɜːrm/。\nDCIM 逐字母读：D-C-I-M。\n节奏：Please con-FIRM ｜ the SEN-sor READ-ing ｜ on D-C-I-M.",
    quiz: [
      { q: "DCIM的全称是什么？", a: "Data Center Infrastructure Management（数据中心基础设施管理）。管理机柜、PDU、网络等IT基础设施的资产、容量和能耗。" },
      { q: "DCIM和BMS分别关注什么？", a: "DCIM关注IT基础设施（机柜、服务器、PDU），BMS关注建筑设施（空调、电力、消防）。两者互补使用。" },
    ],
  },
];

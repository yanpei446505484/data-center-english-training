// EXPORTS: MOCK_SENTENCES_PART16C

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART16C: ISentence[] = [
  {
    id: 1281,
    en: "Please install the warning tape around the work area.",
    cn: "请在施工区域周围拉好警戒带。",
    ipa: "/pliːz ɪnˈstɔːl ðə ˈwɔːr.nɪŋ teɪp əˈraʊnd ðə wɜːrk ˈɛr.i.ə/",
    tags: ["第1281句", "施工现场指挥", "★★★★★"],
    when: "施工现场指挥的第一步是设置安全隔离。警戒带（warning tape）用于标记施工区域边界，防止非授权人员进入，是施工现场安全管理的基础措施。",
    words: [
      { w: "install", ipa: "/ɪnˈstɔːl/", pos: "动词", cn: "安装；设置", memory: "① in- = 进入；② stall = 位置/摊位。\ninstall = 安装/设置（将设备/设施固定到位）。\n施工现场常用：install tape / install signs / install barriers。", phonics: "in 读 /ɪn/，stall 读 /stɔːl/，重音在第二音节。", collocations: [["install tape", "安装警戒带"], ["install equipment", "安装设备"], ["install barriers", "设置隔离栏"]], examples: [["Install the safety signs first.", "先安装安全标志。"], ["The barriers have been installed.", "隔离栏已安装完毕。"]] },
      { w: "warning tape", ipa: "/ˈwɔːr.nɪŋ teɪp/", pos: "名词", cn: "警戒带", memory: "① warning = 警告；② tape = 带子。\nwarning tape = 警戒带（黄黑条纹塑料带），用于标记危险区域。\n数据中心常用黄色警戒带，符合国际标准色。", phonics: "warn 读 /wɔːrn/，ing 读 /ɪŋ/；tape 读 /teɪp/。", collocations: [["warning tape", "警戒带"], ["yellow tape", "黄色警戒带"], ["safety tape", "安全警戒带"]], examples: [["Please put up the warning tape.", "请拉好警戒带。"], ["The warning tape is torn.", "警戒带破了。"]] },
      { w: "work area", ipa: "/wɜːrk ˈɛr.i.ə/", pos: "名词", cn: "施工区域", memory: "① work = 工作/施工；② area = 区域。\nwork area = 施工区域（正在进行维护/施工的区域）。\n数据中心中 work area 需要与运行区域隔离。", phonics: "work 读 /wɜːrk/，area 读 /ˈɛr.i.ə/。", collocations: [["work area", "施工区域"], ["restricted area", "限制区域"], ["safe area", "安全区域"]], examples: [["Keep the work area clean.", "保持施工区域整洁。"], ["The work area is secured.", "施工区域已安全隔离。"]] },
    ],
    phrases: [
      { p: "around the work area", ipa: "/əˈraʊnd ðə wɜːrk ˈɛr.i.ə/", cn: "在施工区域周围", why: "around + 区域 = 在区域周围。警戒带需要围绕整个施工区域设置，形成完整的安全边界。" },
    ],
    grammar: [
      { q: "install 和 put up 有什么区别？", a: "install = 安装（正式、专业，强调固定到位）\nput up = 设置（口语化，强调临时性）\n✅ Please install the warning tape.（请安装警戒带 → 正式指令）\n✅ Please put up the warning tape.（请拉好警戒带 → 口语指令）\n施工现场两个都可以用，install 更正式。" },
    ],
    pattern: "Please install the + 安全设施 + around/in/at + 区域",
    patternExamples: [
      { en: "Please install the safety signs at the entrance.", cn: "请在入口安装安全标志。", words: [{ w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }, { w: "signs", ipa: "/saɪn/", cn: "签字", phonics: "sign 读 /saɪn/" }] },
      { en: "Please install the barriers around the equipment.", cn: "请在设备周围设置隔离栏。", words: [{ w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }] },
      { en: "Please install the warning lights in the corridor.", cn: "请在走廊安装警示灯。", words: [{ w: "warning", ipa: "/ˈwɔːrnɪŋ/", cn: "警告", phonics: "warn 读 /wɔːrn/，ing 读 /ɪŋ/" }] },
    ],
    thinking: "施工现场安全隔离是保护人员的最后一道防线。\n隔离顺序：① 警戒带（本句）→ ② 警示牌（1282）→ ③ 封锁区域（1283）→ ④ 确认安全（1284）。\n警戒带必须围绕整个施工区域，不能有缺口。黄色警戒带表示'警告'，红色表示'危险/禁止进入'。",
    pronunciation: "install 的 in 读短音 /ɪn/，stall 读 /stɔːl/。\nwarning 的 ar 读 /ɔːr/：/ˈwɔːr.nɪŋ/。\narea 的 e 读 /ɛ/：/ˈɛr.i.ə/。\n节奏：Please in-STALL ｜ the WARN-ing TAPE ｜ a-ROUND ｜ the WORK AR-e-a.",
    quiz: [
      { q: "请在设备周围设置隔离栏，怎么说？", a: "Please install the barriers around the equipment." },
      { q: "黄色警戒带和红色警戒带有什么区别？", a: "黄色警戒带 = 警告（Caution，可以进入但需注意安全）；红色警戒带 = 危险/禁止进入（Danger，未经授权不得进入）。数据中心通常使用黄色警戒带标记施工区域。" },
    ],
  },
  {
    id: 1282,
    en: "Please place the warning signs at all entrances.",
    cn: "请在所有入口放置警示牌。",
    ipa: "/pliːz pleɪs ðə ˈwɔːr.nɪŋ saɪnz æt ɔːl ˈɛn.trən.sɪz/",
    tags: ["第1282句", "施工现场指挥", "★★★★★"],
    when: "设置完警戒带后，需要在所有入口放置警示牌，告知进入人员施工区域的安全要求和注意事项。",
    words: [
      { w: "place", ipa: "/pleɪs/", pos: "动词", cn: "放置；摆放", memory: "① place = 地方（名词）；② place = 放置（动词）。\n动词用法：将物品放到指定位置。\n施工现场：place signs / place equipment / place tools。", phonics: "pl 读 /pl/，ace 读 /eɪs/。", collocations: [["place signs", "放置标志"], ["place equipment", "放置设备"], ["place carefully", "小心放置"]], examples: [["Place the sign at the entrance.", "把标志放在入口。"], ["Please place the tools here.", "请把工具放在这里。"]] },
      { w: "warning sign", ipa: "/ˈwɔːr.nɪŋ saɪn/", pos: "名词", cn: "警示牌", memory: "① warning = 警告；② sign = 标志/牌。\nwarning sign = 警示牌（告知危险和注意事项的标志）。\n数据中心常用警示牌：'施工中 禁止进入' / '高压危险' / '佩戴安全帽'。", phonics: "warn 读 /wɔːrn/；sign 读 /saɪn/，gn 读 /n/。", collocations: [["warning sign", "警示牌"], ["safety sign", "安全标志"], ["danger sign", "危险标志"]], examples: [["The warning sign is missing.", "警示牌不见了。"], ["Check all warning signs.", "检查所有警示牌。"]] },
      { w: "entrance", ipa: "/ˈɛn.trəns/", pos: "名词", cn: "入口", memory: "① enter = 进入；② entrance = 入口。\n数据中心每个施工区域可能有多个入口，都需要设置警示牌。", phonics: "en 读 /ɛn/，trance 读 /trəns/，重音在第一音节。", collocations: [["entrance", "入口"], ["exit", "出口"], ["main entrance", "主入口"]], examples: [["There are two entrances to the room.", "这个房间有两个入口。"], ["Block all entrances.", "封锁所有入口。"]] },
    ],
    phrases: [
      { p: "at all entrances", ipa: "/æt ɔːl ˈɛn.trən.sɪz/", cn: "在所有入口", why: "at + 位置 = 在某处。all entrances = 所有入口（复数）。施工区域可能有多个入口，每个都需要警示牌。" },
    ],
    grammar: [
      { q: "为什么用 all entrances 而不是 every entrance？", a: "all + 复数名词 = 所有（强调全部）\nevery + 单数名词 = 每一个（强调个体）\n✅ at all entrances（在所有入口 → 强调一个都不能漏）\n✅ at every entrance（在每一个入口 → 强调逐个）\nall entrances 更常用，更简洁。" },
    ],
    pattern: "Please place the + 物品 + at/in/on + 位置",
    patternExamples: [
      { en: "Please place the fire extinguisher at the entrance.", cn: "请在入口放置灭火器。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }] },
      { en: "Please place the toolbox in the corner.", cn: "请把工具箱放在角落。", words: [] },
      { en: "Please place the warning sign on the door.", cn: "请把警示牌贴在门上。", words: [{ w: "warning", ipa: "/ˈwɔːrnɪŋ/", cn: "警告", phonics: "warn 读 /wɔːrn/，ing 读 /ɪŋ/" }, { w: "sign", ipa: "/saɪn/", cn: "签字", phonics: "sign 读 /saɪn/" }, { w: "door", ipa: "/dɔːr/", cn: "门", phonics: "door 读 /dɔːr/" }] },
    ],
    thinking: "警示牌是安全沟通的重要工具。\n设置原则：① 所有入口都要设置（不能遗漏）；② 位置要醒目（入口正前方）；③ 内容要清晰（中英文双语）；④ 固定要牢固（不会被风吹倒）。\n警示牌内容通常包括：施工内容、风险等级、防护要求、紧急联系人。",
    pronunciation: "place 的 a 读长音 /eɪ/：/pleɪs/。\nwarning 的 ar 读 /ɔːr/：/ˈwɔːr.nɪŋ/。\nentrance 的 en 读 /ɛn/：/ˈɛn.trəns/。\n节奏：Please PLACE ｜ the WARN-ing SIGNS ｜ at ALL ｜ EN-tran-ces.",
    quiz: [
      { q: "请在主入口放置灭火器，怎么说？", a: "Please place the fire extinguisher at the main entrance." },
      { q: "all entrances 和 every entrance 有什么区别？", a: "all entrances = 所有入口（复数，强调全部）；every entrance = 每一个入口（单数，强调个体）。all entrances 更常用更简洁。" },
    ],
  },
  {
    id: 1283,
    en: "Please block off the work area.",
    cn: "请封锁施工区域。",
    ipa: "/pliːz blɒk ɒf ðə wɜːrk ˈɛr.i.ə/",
    tags: ["第1283句", "施工现场指挥", "★★★★★"],
    when: "设置警戒带和警示牌后，需要正式封锁施工区域，禁止非授权人员进入。block off 表示物理隔离，确保施工区域与运行区域完全分离。",
    words: [
      { w: "block off", ipa: "/blɒk ɒf/", pos: "动词短语", cn: "封锁；阻断", memory: "① block = 阻挡/阻塞；② off = 关闭/隔离。\nblock off = 封锁（完全阻断进入）。\n施工现场：block off area = 封锁区域，防止无关人员进入。", phonics: "block 读 /blɒk/，off 读 /ɒf/。", collocations: [["block off", "封锁"], ["block access", "阻断进入"], ["block the area", "封锁区域"]], examples: [["Block off the corridor.", "封锁走廊。"], ["The area has been blocked off.", "该区域已封锁。"]] },
      { w: "work area", ipa: "/wɜːrk ˈɛr.i.ə/", pos: "名词", cn: "施工区域", memory: "work area = 施工区域。与 block off 搭配使用，表示封锁施工区域。", phonics: "work 读 /wɜːrk/，area 读 /ˈɛr.i.ə/。", collocations: [["work area", "施工区域"], ["blocked work area", "已封锁施工区域"]], examples: [["The work area is blocked off.", "施工区域已封锁。"], ["Enter the work area carefully.", "小心进入施工区域。"]] },
    ],
    phrases: [
      { p: "block off", ipa: "/blɒk ɒf/", cn: "封锁", why: "block + off = 封锁（完全阻断）。比单独用 block 更强调'隔离'的概念。block off 是施工现场安全管理的标准用语。" },
    ],
    grammar: [
      { q: "block off 和 lock 有什么区别？", a: "block off = 封锁（用物理屏障阻断进入，不一定上锁）\nlock = 上锁（用锁具锁定）\n✅ Block off the work area.（封锁施工区域 → 用警戒带/隔离栏）\n✅ Lock the door.（锁门 → 用锁具）\nblock off 是软隔离，lock 是硬隔离。施工区域通常先 block off，重要设备才 lock。" },
    ],
    pattern: "Please block off the + 区域",
    patternExamples: [
      { en: "Please block off the corridor.", cn: "请封锁走廊。", words: [] },
      { en: "Please block off the equipment room.", cn: "请封锁设备间。", words: [{ w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "Please block off the data hall.", cn: "请封锁数据机房。", words: [{ w: "data", ipa: "/ˈdeɪtə/", cn: "数据", phonics: "da 读 /deɪ/，ta 读 /tə/" }] },
    ],
    thinking: "施工区域封锁是安全管理的核心措施。\n封锁要求：① 物理隔离（警戒带/隔离栏/围栏）；② 标识清晰（警示牌/标志）；③ 入口控制（专人看守或门禁）；④ 记录完整（封锁时间/责任人）。\n封锁的目的是保护非施工人员的安全，防止误入危险区域。",
    pronunciation: "block 的 o 读 /ɒ/：/blɒk/。\noff 的 o 读 /ɒ/：/ɒf/。\narea 的 e 读 /ɛ/：/ˈɛr.i.ə/。\n节奏：Please BLOCK OFF ｜ the WORK AR-e-a.",
    quiz: [
      { q: "请封锁数据机房，怎么说？", a: "Please block off the data hall." },
      { q: "block off 和 lock 有什么区别？", a: "block off = 封锁（用物理屏障阻断，不一定上锁，如警戒带/隔离栏）；lock = 上锁（用锁具锁定）。施工区域通常先 block off，重要设备才需要 lock。" },
    ],
  },
  {
    id: 1284,
    en: "Please make sure the area is safe before starting work.",
    cn: "开始施工前请确认现场安全。",
    ipa: "/pliːz meɪk ʃʊr ðə ˈɛr.i.ə ɪz seɪf bɪˈfɔːr ˈstɑːr.tɪŋ wɜːrk/",
    tags: ["第1284句", "施工现场指挥", "★★★★★"],
    when: "封锁区域后，施工前必须确认现场安全。这是开工前的最后一道安全检查，确保所有安全措施已到位，可以开始施工。",
    words: [
      { w: "make sure", ipa: "/meɪk ʃʊr/", pos: "动词短语", cn: "确认；确保", memory: "① make = 使；② sure = 确定。\nmake sure = 确认/确保（检查并确认某事属实）。\n施工现场最常用：make sure the area is safe = 确认现场安全。", phonics: "make 读 /meɪk/，sure 读 /ʃʊr/。", collocations: [["make sure", "确认/确保"], ["make sure of", "确认…"], ["make sure that", "确保…"]], examples: [["Make sure the power is off.", "确认电源已关闭。"], ["Make sure everyone has left.", "确认所有人都已离开。"]] },
      { w: "safe", ipa: "/seɪf/", pos: "形容词", cn: "安全的", memory: "safe = 安全的（没有危险/风险）。\n反义词：dangerous（危险的）。\n施工现场安全标准：safe to work（可以施工）/ not safe（不安全）。", phonics: "s 读 /s/，afe 读 /eɪf/。", collocations: [["safe", "安全的"], ["safe area", "安全区域"], ["safe to work", "可以施工"]], examples: [["Is the area safe?", "这个区域安全吗？"], ["The area is safe now.", "现在这个区域安全了。"]] },
    ],
    phrases: [
      { p: "before starting work", ipa: "/bɪˈfɔːr ˈstɑːr.tɪŋ wɜːrk/", cn: "开始施工前", why: "before + 动名词 = 在做某事之前。before starting work = 开始施工前。这是安全检查的时间节点。" },
    ],
    grammar: [
      { q: "make sure 和 confirm 有什么区别？", a: "make sure = 确认（口语化，日常使用）\nconfirm = 确认（正式，书面/会议）\n✅ Make sure the area is safe.（确认现场安全 → 口语指令）\n✅ Please confirm the safety status.（请确认安全状态 → 正式汇报）\n施工现场两个都可以用，make sure 更口语化。" },
    ],
    pattern: "Please make sure + 状态 + before + 动名词",
    patternExamples: [
      { en: "Please make sure the power is off before working.", cn: "工作前请确认电源已关闭。", words: [{ w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }] },
      { en: "Please make sure the LOTO is in place before starting.", cn: "开始前请确认LOTO已到位。", words: [{ w: "starting", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "Please make sure all tools are ready before beginning.", cn: "开始前请确认所有工具已准备好。", words: [] },
    ],
    thinking: "开工前安全确认是施工安全的最后一关。\n确认清单：① 警戒带已设置；② 警示牌已放置；③ 区域已封锁；④ 电源已隔离（LOTO）；⑤ 防护装备已穿戴；⑥ 工具已检查；⑦ 应急措施已准备。\n所有条件都满足后，才能开始施工。任何一项不满足，都要先整改再开工。",
    pronunciation: "make 的 a 读长音 /eɪ/：/meɪk/。\nsure 的 u 读 /ʊ/：/ʃʊr/。\narea 的 e 读 /ɛ/：/ˈɛr.i.ə/。\nbefore 的 be 读 /bɪ/：/bɪˈfɔːr/。\n节奏：Please MAKE SURE ｜ the AR-e-a is SAFE ｜ be-FORE ｜ START-ing WORK.",
    quiz: [
      { q: "工作前请确认LOTO已到位，怎么说？", a: "Please make sure the LOTO is in place before working." },
      { q: "make sure 和 confirm 在施工现场哪个更常用？", a: "两个都可以用。make sure 更口语化，适合现场口头指令；confirm 更正式，适合书面记录和会议汇报。现场指挥用 make sure，写报告用 confirm。" },
    ],
  },
  {
    id: 1285,
    en: "Has the PTW been verified?",
    cn: "作业许可证确认了吗？",
    ipa: "/hæz ðə ˌpiː tiː ˈdʌb.əl.juː biːn ˈvɛr.ɪ.faɪd/",
    tags: ["第1285句", "施工现场指挥", "★★★★★"],
    when: "开工前必须确认作业许可证（PTW）已验证。PTW = Permit to Work，是经过审批的施工许可文件，确认后方可施工。",
    words: [
      { w: "PTW", ipa: "/ˌpiː tiː ˈdʌb.əl.juː/", pos: "名词", cn: "作业许可证", memory: "PTW = Permit to Work（作业许可证）。\n数据中心所有高风险作业（电气/高处/动火/受限空间）都需要PTW。\nPTW 包含：作业内容、风险评估、安全措施、审批签字。", phonics: "逐字母读 P-T-W，不要读成单词。", collocations: [["PTW", "作业许可证"], ["PTW approval", "PTW审批"], ["PTW verification", "PTW验证"]], examples: [["The PTW has been approved.", "PTW已获批准。"], ["Please verify the PTW.", "请验证PTW。"]] },
      { w: "verify", ipa: "/ˈvɛr.ɪ.faɪ/", pos: "动词", cn: "验证；核实", memory: "① ver = 真实（拉丁语 verus）；② verify = 验证（确认真实性）。\nverify 比 check 更正式，强调核实真实性和准确性。\n施工现场：verify PTW / verify isolation / verify safety。", phonics: "ver 读 /vɛr/，i 读 /ɪ/，fy 读 /faɪ/，重音在第一音节。", collocations: [["verify", "验证"], ["verify the PTW", "验证PTW"], ["verify the isolation", "验证隔离"]], examples: [["Please verify the equipment status.", "请验证设备状态。"], ["The PTW has been verified.", "PTW已验证。"]] },
    ],
    phrases: [
      { p: "has been verified", ipa: "/hæz biːn ˈvɛr.ɪ.faɪd/", cn: "已经验证", why: "has been + 过去分词 = 现在完成时被动语态，表示'已经被验证'。强调验证的结果和状态。" },
    ],
    grammar: [
      { q: "verify 和 check 有什么区别？", a: "verify = 验证（正式，核实真实性和准确性）\ncheck = 检查（日常，查看状态）\n✅ Verify the PTW.（验证PTW → 确认PTW的真实性和有效性）\n✅ Check the tools.（检查工具 → 查看工具状态）\nPTW 用 verify，因为需要确认审批流程是否完整。" },
    ],
    pattern: "Has the + 文件/措施 + been verified?",
    patternExamples: [
      { en: "Has the MOP been verified?", cn: "MOP确认了吗？", words: [{ w: "verified", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
      { en: "Has the isolation been verified?", cn: "隔离措施确认了吗？", words: [{ w: "verified", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
      { en: "Has the safety briefing been completed?", cn: "安全交底完成了吗？", words: [{ w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }] },
    ],
    thinking: "PTW 验证是施工合法性的前提。\n验证内容：① PTW 已审批（所有签字齐全）；② PTW 内容与实际作业一致；③ PTW 有效期未过期；④ PTW 中的安全措施已落实；⑤ PTW 已通知相关方。\nPTW 未验证 = 不得施工。这是红线，不能违反。",
    pronunciation: "PTW 逐字母读 /ˌpiː tiː ˈdʌb.əl.juː/。\nverify 的 ver 读 /vɛr/，i 读 /ɪ/，fy 读 /faɪ/。\n节奏：HAS the P-T-W ｜ been VER-i-fied?",
    quiz: [
      { q: "MOP确认了吗？怎么说？", a: "Has the MOP been verified?" },
      { q: "PTW 验证需要检查哪些内容？", a: "PTW 验证需要检查：① 审批签字是否齐全；② 作业内容是否与实际一致；③ 有效期是否未过期；④ 安全措施是否已落实；⑤ 是否已通知相关方。所有条件都满足，PTW 才算验证通过。" },
    ],
  },
  {
    id: 1286,
    en: "Please read the MOP carefully before starting.",
    cn: "开始前请认真阅读MOP。",
    ipa: "/pliːz riːd ðə ˌɛm oʊ ˈpiː ˈkɛr.fə.li bɪˈfɔːr ˈstɑːr.tɪŋ/",
    tags: ["第1286句", "施工现场指挥", "★★★★★"],
    when: "PTW 验证后，施工人员需要仔细阅读 MOP（维护操作方案），理解每一步操作内容和安全要求，然后才能开始施工。",
    words: [
      { w: "MOP", ipa: "/ˌɛm oʊ ˈpiː/", pos: "名词", cn: "维护操作方案", memory: "MOP = Method of Procedure（维护操作方案）。\nMOP 是详细的操作步骤文件，包含每一步的具体操作、安全要求、确认点。\n施工人员必须按照 MOP 逐步执行，不得跳步。", phonics: "逐字母读 M-O-P，不要读成单词 mop。", collocations: [["MOP", "MOP"], ["read the MOP", "阅读MOP"], ["follow the MOP", "按MOP执行"]], examples: [["The MOP has been approved.", "MOP已获批准。"], ["Please follow the MOP.", "请按MOP执行。"]] },
      { w: "carefully", ipa: "/ˈkɛr.fə.li/", pos: "副词", cn: "认真地；仔细地", memory: "① care = 关心/小心；② care + ful = careful（小心的）；③ careful + ly = carefully（小心地）。\nread carefully = 仔细阅读（不遗漏任何细节）。", phonics: "care 读 /kɛr/，ful 读 /fəl/，ly 读 /li/，重音在第一音节。", collocations: [["carefully", "仔细地"], ["read carefully", "仔细阅读"], ["check carefully", "仔细检查"]], examples: [["Read the instructions carefully.", "仔细阅读说明。"], ["Check the equipment carefully.", "仔细检查设备。"]] },
    ],
    phrases: [
      { p: "read carefully", ipa: "/riːd ˈkɛr.fə.li/", cn: "仔细阅读", why: "read + carefully = 仔细阅读。MOP 中的每一步都很重要，必须仔细阅读理解，不能走马观花。" },
    ],
    grammar: [
      { q: "为什么用 carefully 而不用 quickly？", a: "carefully = 仔细地（强调质量和理解）\nquickly = 快速地（强调速度）\n✅ Read the MOP carefully.（仔细阅读MOP → 确保理解每一步）\n✅ Read the MOP quickly.（快速阅读MOP → 赶时间，可能遗漏）\nMOP 必须 carefully，因为每一步都关系到安全和质量。" },
    ],
    pattern: "Please read the + 文件 + carefully + before + 动名词",
    patternExamples: [
      { en: "Please read the PTW carefully before working.", cn: "工作前请仔细阅读PTW。", words: [] },
      { en: "Please read the safety instructions carefully before starting.", cn: "开始前请仔细阅读安全说明。", words: [{ w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }, { w: "starting", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "Please read the checklist carefully before proceeding.", cn: "继续前请仔细阅读检查清单。", words: [] },
    ],
    thinking: "MOP 阅读是施工质量的保障。\n阅读要求：① 逐字逐句（不遗漏）；② 理解每一步（不理解要问）；③ 记住关键步骤（特别是安全步骤）；④ 确认顺序（按顺序执行）。\nMOP 阅读不是走过场，而是真正理解操作流程。施工人员必须对 MOP 内容心中有数。",
    pronunciation: "MOP 逐字母读 /ˌɛm oʊ ˈpiː/。\ncarefully 的 care 读 /kɛr/，ful 读 /fəl/，ly 读 /li/。\nbefore 的 be 读 /bɪ/：/bɪˈfɔːr/。\n节奏：Please READ ｜ the M-O-P ｜ CARE-ful-ly ｜ be-FORE ｜ START-ing.",
    quiz: [
      { q: "工作前请仔细阅读PTW，怎么说？", a: "Please read the PTW carefully before working." },
      { q: "MOP 阅读有哪些要求？", a: "MOP 阅读要求：① 逐字逐句不遗漏；② 理解每一步操作；③ 记住关键安全步骤；④ 确认操作顺序。不理解的步骤必须先问清楚，不能盲目执行。" },
    ],
  },
  {
    id: 1287,
    en: "Please follow the SOP step by step.",
    cn: "请严格按照SOP逐步操作。",
    ipa: "/pliːz ˈfɒl.oʊ ðə ˌɛs oʊ ˈpiː stɛp baɪ stɛp/",
    tags: ["第1287句", "施工现场指挥", "★★★★★"],
    when: "阅读完 MOP 后，施工人员需要按照 SOP（标准操作程序）逐步执行。step by step 强调不能跳步，必须按顺序操作。",
    words: [
      { w: "follow", ipa: "/ˈfɒl.oʊ/", pos: "动词", cn: "遵循；按照", memory: "① follow = 跟随/遵循。\nfollow SOP = 按照SOP执行（严格遵守操作规程）。\n施工现场：follow instructions / follow procedure / follow steps。", phonics: "foll 读 /fɒl/，ow 读 /oʊ/。", collocations: [["follow", "遵循"], ["follow SOP", "按SOP执行"], ["follow instructions", "按指示执行"]], examples: [["Please follow the procedure.", "请按程序执行。"], ["Follow the steps carefully.", "仔细按步骤执行。"]] },
      { w: "SOP", ipa: "/ˌɛs oʊ ˈpiː/", pos: "名词", cn: "标准操作程序", memory: "SOP = Standard Operating Procedure（标准操作程序）。\nSOP 是标准化的操作流程，适用于日常重复性工作。\n与 MOP 的区别：MOP 用于特定项目，SOP 用于日常操作。", phonics: "逐字母读 S-O-P，不要读成单词。", collocations: [["SOP", "SOP"], ["follow SOP", "按SOP执行"], ["SOP document", "SOP文件"]], examples: [["Follow the SOP.", "按SOP执行。"], ["The SOP has been updated.", "SOP已更新。"]] },
      { w: "step by step", ipa: "/stɛp baɪ stɛp/", pos: "副词短语", cn: "逐步地", memory: "step by step = 一步一步地（按顺序，不跳步）。\n强调操作的顺序性和完整性，每一步都不能跳过。", phonics: "step 读 /stɛp/，by 读 /baɪ/。", collocations: [["step by step", "逐步地"], ["follow step by step", "逐步执行"], ["proceed step by step", "逐步进行"]], examples: [["Do it step by step.", "一步一步做。"], ["Follow the instructions step by step.", "按说明逐步执行。"]] },
    ],
    phrases: [
      { p: "step by step", ipa: "/stɛp baɪ stɛp/", cn: "逐步地", why: "step + by + step = 一步一步地。强调操作的顺序性，不能跳步，不能倒序。" },
    ],
    grammar: [
      { q: "SOP 和 MOP 有什么区别？", a: "SOP = Standard Operating Procedure（标准操作程序，日常重复性工作）\nMOP = Method of Procedure（维护操作方案，特定项目）\n✅ Follow the SOP.（按SOP执行 → 日常操作，如巡检/清洁）\n✅ Follow the MOP.（按MOP执行 → 特定项目，如UPS更换）\nSOP 是通用流程，MOP 是专项方案。" },
    ],
    pattern: "Please follow the + 程序/步骤 + step by step",
    patternExamples: [
      { en: "Please follow the procedure step by step.", cn: "请按程序逐步执行。", words: [{ w: "follow", ipa: "/ˈfɒloʊ/", cn: "跟踪", phonics: "fol 读 /fɒl/，low 读 /loʊ/" }, { w: "procedure", ipa: "/prəˈsiːdʒər/", cn: "流程", phonics: "pro 读 /prə/，cedure 读 /siːdʒər/" }, { w: "step", ipa: "/stɛp/", cn: "步骤", phonics: "step 读 /stɛp/" }] },
      { en: "Please follow the checklist step by step.", cn: "请按检查清单逐步执行。", words: [{ w: "follow", ipa: "/ˈfɒloʊ/", cn: "跟踪", phonics: "fol 读 /fɒl/，low 读 /loʊ/" }, { w: "step", ipa: "/stɛp/", cn: "步骤", phonics: "step 读 /stɛp/" }] },
      { en: "Please follow the instructions step by step.", cn: "请按说明逐步执行。", words: [{ w: "follow", ipa: "/ˈfɒloʊ/", cn: "跟踪", phonics: "fol 读 /fɒl/，low 读 /loʊ/" }, { w: "step", ipa: "/stɛp/", cn: "步骤", phonics: "step 读 /stɛp/" }] },
    ],
    thinking: "逐步执行是施工质量的保障。\n执行原则：① 按顺序（不跳步）；② 逐步确认（每步完成后确认）；③ 记录完整（记录每步时间和结果）；④ 发现问题立即停止（不继续执行）。\n跳步执行是严重违规，可能导致安全事故或设备损坏。",
    pronunciation: "follow 的 o 读 /ɒ/：/ˈfɒl.oʊ/。\nSOP 逐字母读 /ˌɛs oʊ ˈpiː/。\nstep 读 /stɛp/，by 读 /baɪ/。\n节奏：Please FOLL-ow ｜ the S-O-P ｜ STEP by STEP.",
    quiz: [
      { q: "请按检查清单逐步执行，怎么说？", a: "Please follow the checklist step by step." },
      { q: "SOP 和 MOP 有什么区别？", a: "SOP = Standard Operating Procedure（标准操作程序，适用于日常重复性工作如巡检/清洁）；MOP = Method of Procedure（维护操作方案，适用于特定项目如UPS更换/倒闸操作）。SOP 是通用流程，MOP 是专项方案。" },
    ],
  },
  {
    id: 1288,
    en: "Please keep the EOP ready in case of an emergency.",
    cn: "请准备好EOP，以防发生紧急情况。",
    ipa: "/pliːz kiːp ðə ˌiː oʊ ˈpiː ˈrɛd.i ɪn keɪs ɒv ən ɪˈmɜːr.dʒən.si/",
    tags: ["第1288句", "施工现场指挥", "★★★★★"],
    when: "施工过程中可能发生紧急情况（设备故障/火灾/停电），必须提前准备好 EOP（应急操作程序），确保能够快速响应。",
    words: [
      { w: "keep ready", ipa: "/kiːp ˈrɛd.i/", pos: "动词短语", cn: "准备好", memory: "① keep = 保持；② ready = 准备好的。\nkeep ready = 保持准备状态（随时可用）。\n施工现场：keep EOP ready / keep tools ready / keep equipment ready。", phonics: "keep 读 /kiːp/，ready 读 /ˈrɛd.i/。", collocations: [["keep ready", "准备好"], ["keep EOP ready", "准备好EOP"], ["keep tools ready", "准备好工具"]], examples: [["Keep the fire extinguisher ready.", "准备好灭火器。"], ["Keep the first aid kit ready.", "准备好急救箱。"]] },
      { w: "EOP", ipa: "/ˌiː oʊ ˈpiː/", pos: "名词", cn: "应急操作程序", memory: "EOP = Emergency Operating Procedure（应急操作程序）。\nEOP 用于紧急情况下的快速响应，包含应急步骤和联系人。\n与 SOP/MOP 的区别：EOP 只在紧急情况下使用。", phonics: "逐字母读 E-O-P，不要读成单词。", collocations: [["EOP", "EOP"], ["keep EOP ready", "准备好EOP"], ["activate EOP", "启动EOP"]], examples: [["The EOP is ready.", "EOP已准备好。"], ["Activate the EOP immediately.", "立即启动EOP。"]] },
      { w: "in case of", ipa: "/ɪn keɪs ɒv/", pos: "介词短语", cn: "以防；万一", memory: "in case of = 以防/万一（预防性准备）。\nin case of emergency = 以防紧急情况。\n施工现场必须为各种紧急情况做好准备。", phonics: "in 读 /ɪn/，case 读 /keɪs/，of 读 /ɒv/。", collocations: [["in case of", "以防"], ["in case of emergency", "以防紧急情况"], ["in case of fire", "以防火灾"]], examples: [["Keep the exit clear in case of fire.", "保持出口畅通以防火灾。"], ["Prepare the EOP in case of emergency.", "准备EOP以防紧急情况。"]] },
    ],
    phrases: [
      { p: "in case of an emergency", ipa: "/ɪn keɪs ɒv ən ɪˈmɜːr.dʒən.si/", cn: "以防发生紧急情况", why: "in case of + 名词 = 以防某种情况。emergency = 紧急情况。施工现场必须为紧急情况做好准备。" },
    ],
    grammar: [
      { q: "in case of 和 if 有什么区别？", a: "in case of = 以防/万一（预防性准备，还没发生）\nif = 如果（条件性，可能发生）\n✅ Keep EOP ready in case of emergency.（准备好EOP以防紧急情况 → 预防性准备）\n✅ If an emergency occurs, activate EOP.（如果发生紧急情况，启动EOP → 条件性响应）\nin case of 是事前准备，if 是事中响应。" },
    ],
    pattern: "Please keep + 物品/文件 + ready + in case of + 情况",
    patternExamples: [
      { en: "Please keep the fire extinguisher ready in case of fire.", cn: "请准备好灭火器以防火灾。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }] },
      { en: "Please keep the first aid kit ready in case of injury.", cn: "请准备好急救箱以防受伤。", words: [] },
      { en: "Please keep the contact list ready in case of emergency.", cn: "请准备好联系人清单以防紧急情况。", words: [{ w: "contact", ipa: "/ˈkɒntækt/", cn: "联系", phonics: "con 读 /kɒn/，tact 读 /tækt/" }, { w: "emergency", ipa: "/ɪˈmɜːrdʒənsi/", cn: "紧急", phonics: "e 读 /ɪ/，mergency 读 /mɜːrdʒənsi/" }] },
    ],
    thinking: "EOP 准备是应急响应的保障。\nEOP 包含：① 紧急联系人（值班经理/消防/医院）；② 应急步骤（停电/火灾/漏水）；③ 应急设备位置（灭火器/急救箱/应急照明）；④ 疏散路线。\nEOP 必须放在施工现场显眼位置，所有施工人员都要知道 EOP 在哪里。",
    pronunciation: "keep 的 ee 读长音 /iː/：/kiːp/。\nEOP 逐字母读 /ˌiː oʊ ˈpiː/。\nready 的 e 读 /ɛ/：/ˈrɛd.i/。\nin case of 的 case 读 /keɪs/。\n节奏：Please KEEP ｜ the E-O-P ｜ READ-y ｜ in CASE of ｜ an e-MER-gen-cy.",
    quiz: [
      { q: "请准备好灭火器以防火灾，怎么说？", a: "Please keep the fire extinguisher ready in case of fire." },
      { q: "EOP 包含哪些内容？", a: "EOP 包含：① 紧急联系人（值班经理/消防/医院）；② 应急步骤（停电/火灾/漏水）；③ 应急设备位置（灭火器/急救箱/应急照明）；④ 疏散路线。所有施工人员都要知道 EOP 在哪里。" },
    ],
  },
  {
    id: 1289,
    en: "Has the toolbox meeting been completed?",
    cn: "班前安全会议完成了吗？",
    ipa: "/hæz ðə ˈtuːl.bɒks ˈmiː.tɪŋ biːn kəmˈpliː.tɪd/",
    tags: ["第1289句", "施工现场指挥", "★★★★★"],
    when: "开工前必须召开班前安全会议（toolbox meeting），向所有施工人员讲解安全注意事项、作业内容和应急措施。",
    words: [
      { w: "toolbox meeting", ipa: "/ˈtuːl.bɒks ˈmiː.tɪŋ/", pos: "名词", cn: "班前安全会议", memory: "toolbox = 工具箱；meeting = 会议。\ntoolbox meeting = 班前安全会议（在工具箱旁边召开的简短会议）。\n这是施工行业的标准术语，每天开工前必须召开。", phonics: "tool 读 /tuːl/，box 读 /bɒks/；meeting 读 /ˈmiː.tɪŋ/。", collocations: [["toolbox meeting", "班前安全会议"], ["morning meeting", "晨会"], ["safety meeting", "安全会议"]], examples: [["The toolbox meeting starts at 8 AM.", "班前会议8点开始。"], ["Attend the toolbox meeting.", "参加班前会议。"]] },
      { w: "complete", ipa: "/kəmˈpliːt/", pos: "动词", cn: "完成", memory: "① com- = 完全；② plete = 充满。\ncomplete = 完成（全部做完）。\n与 finish 类似，但 complete 更正式。", phonics: "com 读 /kəm/，plete 读 /pliːt/，重音在第二音节。", collocations: [["complete", "完成"], ["complete the meeting", "完成会议"], ["complete the work", "完成工作"]], examples: [["The meeting has been completed.", "会议已完成。"], ["Please complete the form.", "请填写表格。"]] },
    ],
    phrases: [
      { p: "has been completed", ipa: "/hæz biːn kəmˈpliː.tɪd/", cn: "已经完成", why: "has been + 过去分词 = 现在完成时被动语态，表示'已经被完成'。强调完成的状态。" },
    ],
    grammar: [
      { q: "toolbox meeting 和 safety meeting 有什么区别？", a: "toolbox meeting = 班前安全会议（每天开工前，简短，5-10分钟）\nsafety meeting = 安全会议（定期，较长，30-60分钟）\n✅ Toolbox meeting at 8 AM.（8点开班前会议 → 每天开工前）\n✅ Safety meeting on Friday.（周五开安全会议 → 每周定期）\ntoolbox meeting 更频繁，更简短。" },
    ],
    pattern: "Has the + 会议/活动 + been completed?",
    patternExamples: [
      { en: "Has the safety briefing been completed?", cn: "安全交底完成了吗？", words: [{ w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }] },
      { en: "Has the training been completed?", cn: "培训完成了吗？", words: [] },
      { en: "Has the inspection been completed?", cn: "检查完成了吗？", words: [] },
    ],
    thinking: "班前安全会议是施工安全的重要环节。\n会议内容：① 作业内容（今天做什么）；② 风险识别（有哪些风险）；③ 安全措施（如何防范）；④ 应急措施（紧急情况怎么办）；⑤ 责任分工（谁做什么）。\n所有施工人员必须参加，会议内容必须记录，参加人员必须签到。",
    pronunciation: "toolbox 的 oo 读长音 /uː/：/ˈtuːl.bɒks/。\nmeeting 的 ee 读长音 /iː/：/ˈmiː.tɪŋ/。\ncomplete 的 com 读 /kəm/，plete 读 /pliːt/。\n节奏：HAS the TOOL-box MEET-ing ｜ been com-PLET-ed?",
    quiz: [
      { q: "安全交底完成了吗？怎么说？", a: "Has the safety briefing been completed?" },
      { q: "班前安全会议需要讲解哪些内容？", a: "班前安全会议需要讲解：① 作业内容（今天做什么）；② 风险识别（有哪些风险）；③ 安全措施（如何防范）；④ 应急措施（紧急情况怎么办）；⑤ 责任分工（谁做什么）。所有施工人员必须参加并签到。" },
    ],
  },
  {
    id: 1290,
    en: "Has everyone signed the attendance sheet?",
    cn: "所有人都签到了吗？",
    ipa: "/hæz ˈɛv.ri.wʌn saɪnd ðə əˈtɛn.dəns ʃiːt/",
    tags: ["第1290句", "施工现场指挥", "★★★★★"],
    when: "班前安全会议结束后，所有参加人员必须在签到表上签字，确认已参加会议并了解安全注意事项。",
    words: [
      { w: "sign", ipa: "/saɪn/", pos: "动词", cn: "签字；签名", memory: "① sign = 标志（名词）；② sign = 签字（动词）。\nsign the sheet = 在表格上签字（确认已参加/已了解）。\n施工现场所有会议和活动都需要签字确认。", phonics: "s 读 /s/，ign 读 /aɪn/。", collocations: [["sign", "签字"], ["sign the sheet", "在表格上签字"], ["sign the form", "在表格上签字"]], examples: [["Please sign the attendance sheet.", "请在签到表上签字。"], ["Everyone has signed.", "所有人都已签字。"]] },
      { w: "attendance sheet", ipa: "/əˈtɛn.dəns ʃiːt/", pos: "名词", cn: "签到表", memory: "① attend = 参加；② attendance = 出勤；③ sheet = 表格/纸张。\nattendance sheet = 签到表（记录参加人员的表格）。\n签到表是安全管理的法律文件，必须妥善保存。", phonics: "at 读 /ə/，tend 读 /tɛn/，ance 读 /əns/；sheet 读 /ʃiːt/。", collocations: [["attendance sheet", "签到表"], ["sign the sheet", "签到"], ["attendance record", "出勤记录"]], examples: [["Please sign the attendance sheet.", "请签到。"], ["The attendance sheet is missing.", "签到表不见了。"]] },
    ],
    phrases: [
      { p: "signed the attendance sheet", ipa: "/saɪnd ðə əˈtɛn.dəns ʃiːt/", cn: "签到", why: "sign + attendance sheet = 在签到表上签字。这是参加会议的确认方式，也是法律要求。" },
    ],
    grammar: [
      { q: "为什么签到表这么重要？", a: "签到表是安全管理的法律文件：\n① 证明已参加安全会议（法律要求）；\n② 证明已了解安全注意事项（责任明确）；\n③ 发生事故时的证据（谁参加了/谁没参加）；\n④ 审计检查的依据（合规性证明）。\n没签字 = 没参加会议 = 不得施工。" },
    ],
    pattern: "Has everyone + 过去分词 + the + 文件?",
    patternExamples: [
      { en: "Has everyone signed the PTW?", cn: "所有人都签PTW了吗？", words: [{ w: "everyone", ipa: "/ˈɛvriwʌn/", cn: "大家", phonics: "every 读 /ɛvri/，one 读 /wʌn/" }, { w: "signed", ipa: "/saɪn/", cn: "签字", phonics: "sign 读 /saɪn/" }] },
      { en: "Has everyone read the MOP?", cn: "所有人都读MOP了吗？", words: [{ w: "everyone", ipa: "/ˈɛvriwʌn/", cn: "大家", phonics: "every 读 /ɛvri/，one 读 /wʌn/" }] },
      { en: "Has everyone completed the training?", cn: "所有人都完成培训了吗？", words: [{ w: "everyone", ipa: "/ˈɛvriwʌn/", cn: "大家", phonics: "every 读 /ɛvri/，one 读 /wʌn/" }] },
    ],
    thinking: "签到是安全管理的最后一环。\n签到要求：① 所有参加人员都要签字（不能代签）；② 签字要清晰可辨（不能潦草）；③ 签到表要妥善保存（至少保存3年）；④ 未签到人员不得参加施工。\n签到表是法律文件，必须认真对待。",
    pronunciation: "everyone 的 ev 读 /ɛv/：/ˈɛv.ri.wʌn/。\nsigned 的 ign 读 /aɪn/：/saɪnd/。\nattendance 的 at 读 /ə/：/əˈtɛn.dəns/。\nsheet 的 sh 读 /ʃ/：/ʃiːt/。\n节奏：HAS EV-ery-one ｜ SIGNED ｜ the at-TEN-dance SHEET?",
    quiz: [
      { q: "所有人都签PTW了吗？怎么说？", a: "Has everyone signed the PTW?" },
      { q: "签到表为什么是法律文件？", a: "签到表是法律文件因为：① 证明已参加安全会议（法律要求）；② 证明已了解安全注意事项（责任明确）；③ 发生事故时的证据（谁参加了/谁没参加）；④ 审计检查的依据（合规性证明）。没签字等于没参加会议，不得施工。" },
    ],
  },
  {
    id: 1291,
    en: "Please check all tools before use.",
    cn: "使用前请检查所有工具。",
    ipa: "/pliːz tʃɛk ɔːl tuːlz bɪˈfɔːr juːz/",
    tags: ["第1291句", "施工现场指挥", "★★★★★"],
    when: "班前会议和签到完成后，进入开工前检查环节。第一步是检查所有工具，确保工具完好可用，没有损坏或缺陷。",
    words: [
      { w: "check", ipa: "/tʃɛk/", pos: "动词", cn: "检查", memory: "check = 检查（查看状态/确认正常）。\n施工现场常用：check tools / check equipment / check safety。\n与 verify 的区别：check 是日常检查，verify 是正式验证。", phonics: "ch 读 /tʃ/，eck 读 /ɛk/。", collocations: [["check", "检查"], ["check tools", "检查工具"], ["check equipment", "检查设备"]], examples: [["Check the tools carefully.", "仔细检查工具。"], ["The tools have been checked.", "工具已检查。"]] },
      { w: "tool", ipa: "/tuːl/", pos: "名词", cn: "工具", memory: "tool = 工具（手动工具/电动工具）。\n数据中心常用工具：螺丝刀/扳手/万用表/绝缘手套。\n工具必须定期检查，损坏的工具必须立即更换。", phonics: "t 读 /t/，ool 读 /uːl/。", collocations: [["tool", "工具"], ["hand tool", "手动工具"], ["power tool", "电动工具"]], examples: [["The tools are ready.", "工具已准备好。"], ["Check the tools before use.", "使用前检查工具。"]] },
    ],
    phrases: [
      { p: "before use", ipa: "/bɪˈfɔːr juːz/", cn: "使用前", why: "before + 名词 = 在使用之前。before use = 使用前。这是工具检查的时间节点。" },
    ],
    grammar: [
      { q: "check 和 inspect 有什么区别？", a: "check = 检查（日常，快速查看）\ninspect = 检查（正式，详细检查）\n✅ Check the tools.（检查工具 → 日常快速检查）\n✅ Inspect the equipment.（检查设备 → 正式详细检查）\n工具用 check，重要设备用 inspect。" },
    ],
    pattern: "Please check all + 物品 + before + 动名词",
    patternExamples: [
      { en: "Please check all equipment before starting.", cn: "开始前请检查所有设备。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }, { w: "starting", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "Please check all PPE before entering.", cn: "进入前请检查所有防护用品。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check all cables before connecting.", cn: "连接前请检查所有电缆。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "工具检查是施工安全和质量的保障。\n检查内容：① 工具完好（无损坏/无缺陷）；② 工具清洁（无油污/无灰尘）；③ 工具校准（测量工具已校准）；④ 工具绝缘（绝缘工具无破损）。\n损坏的工具不能使用，必须立即更换。使用损坏工具可能导致安全事故或设备损坏。",
    pronunciation: "check 的 ch 读 /tʃ/：/tʃɛk/。\ntools 的 oo 读长音 /uː/：/tuːlz/。\nbefore 的 be 读 /bɪ/：/bɪˈfɔːr/。\nuse 的 u 读 /juː/：/juːz/。\n节奏：Please CHECK ｜ ALL TOOLS ｜ be-FORE USE.",
    quiz: [
      { q: "进入前请检查所有防护用品，怎么说？", a: "Please check all PPE before entering." },
      { q: "工具检查需要检查哪些内容？", a: "工具检查需要检查：① 工具完好（无损坏/无缺陷）；② 工具清洁（无油污/无灰尘）；③ 工具校准（测量工具已校准）；④ 工具绝缘（绝缘工具无破损）。损坏的工具不能使用，必须立即更换。" },
    ],
  },
  {
    id: 1292,
    en: "Please inspect the test equipment.",
    cn: "请检查测试设备。",
    ipa: "/pliːz ɪnˈspɛkt ðə tɛst ɪˈkwɪp.mənt/",
    tags: ["第1292句", "施工现场指挥", "★★★★★"],
    when: "检查完一般工具后，需要专门检查测试设备。测试设备包括万用表、示波器、热成像仪等，用于测量和验证设备状态。",
    words: [
      { w: "inspect", ipa: "/ɪnˈspɛkt/", pos: "动词", cn: "检查；检验", memory: "① in- = 进入；② spect = 看（拉丁语 spectare）。\ninspect = 检查（详细、正式的检查）。\n与 check 的区别：inspect 更正式、更详细。", phonics: "in 读 /ɪn/，spect 读 /spɛkt/，重音在第二音节。", collocations: [["inspect", "检查"], ["inspect equipment", "检查设备"], ["inspect carefully", "仔细检查"]], examples: [["Inspect the equipment before use.", "使用前检查设备。"], ["The equipment has been inspected.", "设备已检查。"]] },
      { w: "test equipment", ipa: "/tɛst ɪˈkwɪp.mənt/", pos: "名词", cn: "测试设备", memory: "① test = 测试；② equipment = 设备。\ntest equipment = 测试设备（用于测量和验证的设备）。\n数据中心常用测试设备：万用表/示波器/热成像仪/钳形表。", phonics: "test 读 /tɛst/；equip 读 /ɪˈkwɪp/，ment 读 /mənt/。", collocations: [["test equipment", "测试设备"], ["testing tool", "测试工具"], ["measurement device", "测量设备"]], examples: [["The test equipment is ready.", "测试设备已准备好。"], ["Check the test equipment.", "检查测试设备。"]] },
    ],
    phrases: [
      { p: "test equipment", ipa: "/tɛst ɪˈkwɪp.mənt/", cn: "测试设备", why: "test + equipment = 测试设备。测试设备是电气工作的必备工具，用于验证设备状态和测量参数。" },
    ],
    grammar: [
      { q: "inspect 和 check 在施工现场怎么选择？", a: "inspect = 检查（正式、详细，用于重要设备）\ncheck = 检查（日常、快速，用于一般工具）\n✅ Inspect the test equipment.（检查测试设备 → 重要设备，详细检查）\n✅ Check the hand tools.（检查手动工具 → 一般工具，快速检查）\n测试设备用 inspect，一般工具用 check。" },
    ],
    pattern: "Please inspect the + 重要设备",
    patternExamples: [
      { en: "Please inspect the UPS system.", cn: "请检查UPS系统。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please inspect the fire suppression system.", cn: "请检查消防系统。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please inspect the cooling system.", cn: "请检查冷却系统。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
    ],
    thinking: "测试设备检查是电气工作的前提。\n检查内容：① 设备完好（无损坏/无缺陷）；② 电池电量（电量充足）；③ 校准有效期（在有效期内）；④ 功能测试（自检通过）。\n测试设备未检查 = 不得使用。使用未经检查的测试设备可能导致测量错误，进而导致误操作。",
    pronunciation: "inspect 的 in 读 /ɪn/，spect 读 /spɛkt/。\ntest 读 /tɛst/。\nequipment 的 e 读 /ɪ/：/ɪˈkwɪp.mənt/。\n节奏：Please in-SPECT ｜ the TEST e-QUIP-ment.",
    quiz: [
      { q: "请检查UPS系统，怎么说？", a: "Please inspect the UPS system." },
      { q: "测试设备检查需要检查哪些内容？", a: "测试设备检查需要检查：① 设备完好（无损坏/无缺陷）；② 电池电量（电量充足）；③ 校准有效期（在有效期内）；④ 功能测试（自检通过）。测试设备未检查不得使用。" },
    ],
  },
  {
    id: 1293,
    en: "Please verify the calibration certificate.",
    cn: "请确认校准证书有效。",
    ipa: "/pliːz ˈvɛr.ɪ.faɪ ðə ˌkæl.ɪˈbreɪ.ʃən ˈsɜːr.tɪ.fɪ.kət/",
    tags: ["第1293句", "施工现场指挥", "★★★★★"],
    when: "检查测试设备时，必须确认校准证书有效。校准证书证明测试设备的测量精度符合标准，过期的校准证书不得使用。",
    words: [
      { w: "verify", ipa: "/ˈvɛr.ɪ.faɪ/", pos: "动词", cn: "验证；确认", memory: "verify = 验证（确认真实性和有效性）。\nverify certificate = 验证证书（确认证书有效）。\n与 check 的区别：verify 更正式，强调核实真实性。", phonics: "ver 读 /vɛr/，i 读 /ɪ/，fy 读 /faɪ/，重音在第一音节。", collocations: [["verify", "验证"], ["verify certificate", "验证证书"], ["verify calibration", "验证校准"]], examples: [["Verify the certificate.", "验证证书。"], ["The certificate has been verified.", "证书已验证。"]] },
      { w: "calibration certificate", ipa: "/ˌkæl.ɪˈbreɪ.ʃən ˈsɜːr.tɪ.fɪ.kət/", pos: "名词", cn: "校准证书", memory: "① calibration = 校准；② certificate = 证书。\ncalibration certificate = 校准证书（证明设备已校准的文件）。\n所有测量设备都需要定期校准，校准证书必须注明有效期。", phonics: "cal 读 /kæl/，i 读 /ɪ/，bra 读 /breɪ/，tion 读 /ʃən/；cert 读 /sɜːr/，ti 读 /tɪ/，fi 读 /fɪ/，cate 读 /kət/。", collocations: [["calibration certificate", "校准证书"], ["calibration date", "校准日期"], ["calibration validity", "校准有效期"]], examples: [["Check the calibration certificate.", "检查校准证书。"], ["The calibration is valid.", "校准有效。"]] },
    ],
    phrases: [
      { p: "calibration certificate", ipa: "/ˌkæl.ɪˈbreɪ.ʃən ˈsɜːr.tɪ.fɪ.kət/", cn: "校准证书", why: "calibration + certificate = 校准证书。校准证书是测量设备精度的法律证明，必须在有效期内。" },
    ],
    grammar: [
      { q: "为什么校准证书这么重要？", a: "校准证书是测量精度的法律证明：\n① 证明设备已校准（符合标准）；\n② 证明测量精度（误差在允许范围内）；\n③ 证明有效期（在有效期内才有效）；\n④ 审计检查的依据（合规性证明）。\n使用未经校准的设备 = 测量结果不可信 = 可能导致误操作。" },
    ],
    pattern: "Please verify the + 证书/文件",
    patternExamples: [
      { en: "Please verify the PTW.", cn: "请验证PTW。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
      { en: "Please verify the safety certificate.", cn: "请验证安全证书。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }] },
      { en: "Please verify the training record.", cn: "请验证培训记录。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
    ],
    thinking: "校准证书验证是测量精度的保障。\n验证内容：① 证书真实（不是伪造）；② 校准日期（最近一次校准时间）；③ 有效期（未过期）；④ 校准机构（有资质的机构）；⑤ 设备编号（与证书一致）。\n校准证书过期 = 设备不得使用 = 必须重新校准。",
    pronunciation: "verify 的 ver 读 /vɛr/，i 读 /ɪ/，fy 读 /faɪ/。\ncalibration 的 cal 读 /kæl/，i 读 /ɪ/，bra 读 /breɪ/，tion 读 /ʃən/。\ncertificate 的 cert 读 /sɜːr/，ti 读 /tɪ/，fi 读 /fɪ/，cate 读 /kət/。\n节奏：Please VER-i-fy ｜ the cal-i-BRA-tion ｜ CER-ti-fi-cate.",
    quiz: [
      { q: "请验证PTW，怎么说？", a: "Please verify the PTW." },
      { q: "校准证书验证需要检查哪些内容？", a: "校准证书验证需要检查：① 证书真实（不是伪造）；② 校准日期（最近一次校准时间）；③ 有效期（未过期）；④ 校准机构（有资质的机构）；⑤ 设备编号（与证书一致）。校准证书过期不得使用。" },
    ],
  },
  {
    id: 1294,
    en: "Please check the insulation gloves.",
    cn: "请检查绝缘手套。",
    ipa: "/pliːz tʃɛk ðə ɪnˈsjuː.leɪ.ʃən ɡlʌvz/",
    tags: ["第1294句", "施工现场指挥", "★★★★★"],
    when: "电气工作前必须检查绝缘手套。绝缘手套是电气工作的个人防护装备，防止触电事故。",
    words: [
      { w: "insulation", ipa: "/ˌɪn.sjuːˈleɪ.ʃən/", pos: "名词", cn: "绝缘", memory: "① in- = 不；② sul = 岛（拉丁语 insula）；③ ation = 名词后缀。\ninsulation = 绝缘（阻止电流通过的材料/设备）。\n电气安全的关键：insulation gloves / insulation tools / insulation mat。", phonics: "in 读 /ɪn/，su 读 /sjuː/，la 读 /leɪ/，tion 读 /ʃən/，重音在第三音节。", collocations: [["insulation", "绝缘"], ["insulation gloves", "绝缘手套"], ["insulation resistance", "绝缘电阻"]], examples: [["Check the insulation.", "检查绝缘。"], ["The insulation is damaged.", "绝缘损坏了。"]] },
      { w: "gloves", ipa: "/ɡlʌvz/", pos: "名词", cn: "手套", memory: "gloves = 手套（复数）。\n电气工作必须使用绝缘手套，不能用普通手套。\n绝缘手套必须定期检查，有破损立即更换。", phonics: "gl 读 /ɡl/，oves 读 /ʌvz/。", collocations: [["gloves", "手套"], ["insulation gloves", "绝缘手套"], ["safety gloves", "安全手套"]], examples: [["Wear the insulation gloves.", "戴绝缘手套。"], ["The gloves are damaged.", "手套损坏了。"]] },
    ],
    phrases: [
      { p: "insulation gloves", ipa: "/ɪnˈsjuː.leɪ.ʃən ɡlʌvz/", cn: "绝缘手套", why: "insulation + gloves = 绝缘手套。绝缘手套是电气工作的必备防护装备，防止触电事故。" },
    ],
    grammar: [
      { q: "绝缘手套和普通手套有什么区别？", a: "insulation gloves = 绝缘手套（防触电，电气工作专用）\nnormal gloves = 普通手套（防机械伤害，一般工作）\n✅ Wear insulation gloves for electrical work.（电气工作戴绝缘手套）\n✅ Wear normal gloves for mechanical work.（机械工作戴普通手套）\n电气工作必须用绝缘手套，普通手套不能防触电。" },
    ],
    pattern: "Please check the + 防护装备",
    patternExamples: [
      { en: "Please check the safety helmet.", cn: "请检查安全帽。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }] },
      { en: "Please check the safety shoes.", cn: "请检查安全鞋。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }] },
      { en: "Please check the safety glasses.", cn: "请检查安全眼镜。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }] },
    ],
    thinking: "绝缘手套检查是电气安全的关键。\n检查内容：① 外观完好（无破损/无裂纹）；② 充气测试（无漏气）；③ 有效期（在有效期内）；④ 电压等级（符合作业要求）；⑤ 清洁干燥（无油污/无潮湿）。\n绝缘手套损坏 = 不得使用 = 必须立即更换。使用损坏的绝缘手套可能导致触电事故。",
    pronunciation: "insulation 的 in 读 /ɪn/，su 读 /sjuː/，la 读 /leɪ/，tion 读 /ʃən/。\ngloves 的 gl 读 /ɡl/，oves 读 /ʌvz/。\n节奏：Please CHECK ｜ the in-su-LA-tion GLOVES.",
    quiz: [
      { q: "请检查安全帽，怎么说？", a: "Please check the safety helmet." },
      { q: "绝缘手套检查需要检查哪些内容？", a: "绝缘手套检查需要检查：① 外观完好（无破损/无裂纹）；② 充气测试（无漏气）；③ 有效期（在有效期内）；④ 电压等级（符合作业要求）；⑤ 清洁干燥（无油污/无潮湿）。绝缘手套损坏不得使用。" },
    ],
  },
  {
    id: 1295,
    en: "Please check the insulated tools.",
    cn: "请检查绝缘工具。",
    ipa: "/pliːz tʃɛk ðə ˈɪn.sjuː.leɪ.tɪd tuːlz/",
    tags: ["第1295句", "施工现场指挥", "★★★★★"],
    when: "检查完绝缘手套后，需要检查绝缘工具。绝缘工具包括绝缘螺丝刀、绝缘扳手等，用于电气作业，防止触电。",
    words: [
      { w: "insulated", ipa: "/ˈɪn.sjuː.leɪ.tɪd/", pos: "形容词", cn: "绝缘的", memory: "① insulate = 绝缘（动词）；② insulated = 绝缘的（形容词）。\ninsulated tools = 绝缘工具（手柄有绝缘层的工具）。\n与 insulation 的区别：insulation 是名词（绝缘），insulated 是形容词（绝缘的）。", phonics: "in 读 /ɪn/，su 读 /sjuː/，la 读 /leɪ/，ted 读 /tɪd/，重音在第一音节。", collocations: [["insulated", "绝缘的"], ["insulated tools", "绝缘工具"], ["insulated handle", "绝缘手柄"]], examples: [["Use insulated tools.", "使用绝缘工具。"], ["The tools are insulated.", "这些工具是绝缘的。"]] },
      { w: "tools", ipa: "/tuːlz/", pos: "名词", cn: "工具", memory: "tools = 工具（复数）。\ninsulated tools = 绝缘工具（电气工作专用工具）。\n绝缘工具的手柄有绝缘层，防止电流通过。", phonics: "t 读 /t/，ools 读 /uːlz/。", collocations: [["tools", "工具"], ["insulated tools", "绝缘工具"], ["hand tools", "手动工具"]], examples: [["Check the tools.", "检查工具。"], ["The insulated tools are ready.", "绝缘工具已准备好。"]] },
    ],
    phrases: [
      { p: "insulated tools", ipa: "/ˈɪn.sjuː.leɪ.tɪd tuːlz/", cn: "绝缘工具", why: "insulated + tools = 绝缘工具。绝缘工具是电气工作的必备工具，防止触电事故。" },
    ],
    grammar: [
      { q: "insulation 和 insulated 有什么区别？", a: "insulation = 绝缘（名词，绝缘材料/绝缘状态）\ninsulated = 绝缘的（形容词，有绝缘层的）\n✅ Check the insulation.（检查绝缘 → 名词）\n✅ Check the insulated tools.（检查绝缘工具 → 形容词）\ninsulation 是名词，insulated 是形容词。" },
    ],
    pattern: "Please check the + 形容词 + tools",
    patternExamples: [
      { en: "Please check the hand tools.", cn: "请检查手动工具。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the power tools.", cn: "请检查电动工具。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }] },
      { en: "Please check the measuring tools.", cn: "请检查测量工具。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "绝缘工具检查是电气安全的保障。\n检查内容：① 绝缘层完好（无破损/无裂纹）；② 电压等级（符合作业要求）；③ 工具完好（无损坏/无缺陷）；④ 清洁干燥（无油污/无潮湿）。\n绝缘工具损坏 = 不得使用 = 必须立即更换。使用损坏的绝缘工具可能导致触电事故。",
    pronunciation: "insulated 的 in 读 /ɪn/，su 读 /sjuː/，la 读 /leɪ/，ted 读 /tɪd/。\ntools 的 oo 读长音 /uː/：/tuːlz/。\n节奏：Please CHECK ｜ the IN-su-la-ted TOOLS.",
    quiz: [
      { q: "请检查电动工具，怎么说？", a: "Please check the power tools." },
      { q: "insulation 和 insulated 有什么区别？", a: "insulation = 绝缘（名词，绝缘材料/绝缘状态）；insulated = 绝缘的（形容词，有绝缘层的）。insulation 是名词，insulated 是形容词。" },
    ],
  },
  {
    id: 1296,
    en: "Please verify the voltage detector.",
    cn: "请确认验电器正常。",
    ipa: "/pliːz ˈvɛr.ɪ.faɪ ðə ˈvoʊl.tɪdʒ dɪˈtɛk.tər/",
    tags: ["第1296句", "施工现场指挥", "★★★★★"],
    when: "电气工作前必须确认验电器正常。验电器用于检测设备是否带电，是电气安全的关键工具。",
    words: [
      { w: "verify", ipa: "/ˈvɛr.ɪ.faɪ/", pos: "动词", cn: "确认；验证", memory: "verify = 确认（验证正常性和有效性）。\nverify detector = 确认验电器（确认验电器正常工作）。", phonics: "ver 读 /vɛr/，i 读 /ɪ/，fy 读 /faɪ/，重音在第一音节。", collocations: [["verify", "确认"], ["verify detector", "确认验电器"], ["verify equipment", "确认设备"]], examples: [["Verify the detector.", "确认验电器。"], ["The detector has been verified.", "验电器已确认。"]] },
      { w: "voltage detector", ipa: "/ˈvoʊl.tɪdʒ dɪˈtɛk.tər/", pos: "名词", cn: "验电器", memory: "① voltage = 电压；② detector = 检测器。\nvoltage detector = 验电器（检测设备是否带电的工具）。\n验电器是电气工作的安全工具，必须在接触设备前使用。", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/；de 读 /dɪ/，tect 读 /tɛkt/，or 读 /tər/。", collocations: [["voltage detector", "验电器"], ["test the detector", "测试验电器"], ["use the detector", "使用验电器"]], examples: [["Use the voltage detector.", "使用验电器。"], ["The detector is working.", "验电器正常工作。"]] },
    ],
    phrases: [
      { p: "voltage detector", ipa: "/ˈvoʊl.tɪdʒ dɪˈtɛk.tər/", cn: "验电器", why: "voltage + detector = 验电器。验电器用于检测设备是否带电，是电气安全的关键工具。" },
    ],
    grammar: [
      { q: "为什么验电器这么重要？", a: "验电器是电气安全的最后防线：\n① 检测设备是否带电（确认断电）；\n② 防止触电事故（确认安全后才接触）；\n③ 法律要求（电气工作必须验电）；\n④ 生命安全（验电失败 = 可能触电）。\n未验电 = 视为带电 = 不得接触。" },
    ],
    pattern: "Please verify the + 安全工具",
    patternExamples: [
      { en: "Please verify the lockout device.", cn: "请确认锁定装置。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "device", ipa: "/dɪˈvaɪs/", cn: "设备", phonics: "de 读 /dɪ/，vice 读 /vaɪs/" }] },
      { en: "Please verify the grounding wire.", cn: "请确认接地线。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
      { en: "Please verify the safety barrier.", cn: "请确认安全屏障。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }] },
    ],
    thinking: "验电器验证是电气安全的关键步骤。\n验证内容：① 验电器完好（无损坏）；② 电池电量（电量充足）；③ 功能测试（在已知电源上测试）；④ 电压等级（符合作业要求）。\n验电器验证失败 = 不得使用 = 必须更换。使用未验证的验电器可能导致误判，进而导致触电事故。",
    pronunciation: "verify 的 ver 读 /vɛr/，i 读 /ɪ/，fy 读 /faɪ/。\nvoltage 的 volt 读 /voʊlt/，age 读 /ɪdʒ/。\ndetector 的 de 读 /dɪ/，tect 读 /tɛkt/，or 读 /tər/。\n节奏：Please VER-i-fy ｜ the VOL-tage de-TEC-tor.",
    quiz: [
      { q: "请确认锁定装置，怎么说？", a: "Please verify the lockout device." },
      { q: "验电器验证需要检查哪些内容？", a: "验电器验证需要检查：① 验电器完好（无损坏）；② 电池电量（电量充足）；③ 功能测试（在已知电源上测试）；④ 电压等级（符合作业要求）。验电器验证失败不得使用。" },
    ],
  },
  {
    id: 1297,
    en: "Please prepare the lockout devices.",
    cn: "请准备好锁定挂牌装置。",
    ipa: "/pliːz prɪˈpɛr ðə ˈlɒk.aʊt dɪˈvaɪ.sɪz/",
    tags: ["第1297句", "施工现场指挥", "★★★★★"],
    when: "验电器确认后，需要准备锁定挂牌装置（LOTO）。LOTO 用于锁定能源隔离点，防止误操作导致意外送电。",
    words: [
      { w: "prepare", ipa: "/prɪˈpɛr/", pos: "动词", cn: "准备", memory: "① pre- = 提前；② pare = 准备（拉丁语 parare）。\nprepare = 准备（提前做好准备工作）。\n施工现场：prepare tools / prepare equipment / prepare devices。", phonics: "pre 读 /prɪ/，pare 读 /pɛr/，重音在第二音节。", collocations: [["prepare", "准备"], ["prepare devices", "准备装置"], ["prepare equipment", "准备设备"]], examples: [["Prepare the tools.", "准备工具。"], ["The devices have been prepared.", "装置已准备好。"]] },
      { w: "lockout device", ipa: "/ˈlɒk.aʊt dɪˈvaɪs/", pos: "名词", cn: "锁定挂牌装置", memory: "① lockout = 锁定；② device = 装置。\nlockout device = 锁定挂牌装置（LOTO 装置）。\nLOTO = Lock Out Tag Out（锁定挂牌），用于锁定能源隔离点。", phonics: "lock 读 /lɒk/，out 读 /aʊt/；de 读 /dɪ/，vice 读 /vaɪs/。", collocations: [["lockout device", "锁定挂牌装置"], ["LOTO device", "LOTO装置"], ["lockout tagout", "锁定挂牌"]], examples: [["Prepare the lockout devices.", "准备锁定挂牌装置。"], ["Apply the lockout device.", "安装锁定挂牌装置。"]] },
    ],
    phrases: [
      { p: "lockout devices", ipa: "/ˈlɒk.aʊt dɪˈvaɪ.sɪz/", cn: "锁定挂牌装置", why: "lockout + devices = 锁定挂牌装置（复数）。LOTO 装置用于锁定能源隔离点，防止误操作。" },
    ],
    grammar: [
      { q: "LOTO 是什么意思？", a: "LOTO = Lock Out Tag Out（锁定挂牌）。\nLock Out = 锁定（用锁具锁定隔离点）\nTag Out = 挂牌（挂警告牌标识）\nLOTO 是电气安全的关键措施，防止误操作导致意外送电。\n所有能源隔离点都必须 LOTO。" },
    ],
    pattern: "Please prepare the + 安全装置",
    patternExamples: [
      { en: "Please prepare the grounding wire.", cn: "请准备接地线。", words: [] },
      { en: "Please prepare the safety barrier.", cn: "请准备安全屏障。", words: [{ w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }] },
      { en: "Please prepare the fire extinguisher.", cn: "请准备灭火器。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }] },
    ],
    thinking: "LOTO 准备是电气安全的关键步骤。\n准备内容：① 锁定装置（锁具/锁扣）；② 挂牌（警告牌/标识牌）；③ 锁具数量（每个隔离点一把锁）；④ 钥匙管理（专人保管）。\nLOTO 原则：一人一锁一钥匙。每个施工人员都有自己的锁，只有自己才能打开。",
    pronunciation: "prepare 的 pre 读 /prɪ/，pare 读 /pɛr/。\nlockout 的 lock 读 /lɒk/，out 读 /aʊt/。\ndevice 的 de 读 /dɪ/，vice 读 /vaɪs/。\n节奏：Please pre-PARE ｜ the LOCK-out de-VIC-es.",
    quiz: [
      { q: "请准备接地线，怎么说？", a: "Please prepare the grounding wire." },
      { q: "LOTO 是什么意思？", a: "LOTO = Lock Out Tag Out（锁定挂牌）。Lock Out = 锁定（用锁具锁定隔离点）；Tag Out = 挂牌（挂警告牌标识）。LOTO 是电气安全的关键措施，防止误操作导致意外送电。所有能源隔离点都必须 LOTO。" },
    ],
  },
  {
    id: 1298,
    en: "Please verify all isolation points.",
    cn: "请确认所有隔离点。",
    ipa: "/pliːz ˈvɛr.ɪ.faɪ ɔːl ˌaɪ.səˈleɪ.ʃən pɔɪnts/",
    tags: ["第1298句", "施工现场指挥", "★★★★★"],
    when: "准备好 LOTO 装置后，需要确认所有隔离点。隔离点是能源切断的位置，如断路器、阀门等。",
    words: [
      { w: "verify", ipa: "/ˈvɛr.ɪ.faɪ/", pos: "动词", cn: "确认；验证", memory: "verify = 确认（验证完整性和正确性）。\nverify isolation points = 确认隔离点（确认所有隔离点已识别）。", phonics: "ver 读 /vɛr/，i 读 /ɪ/，fy 读 /faɪ/，重音在第一音节。", collocations: [["verify", "确认"], ["verify points", "确认点"], ["verify isolation", "确认隔离"]], examples: [["Verify all isolation points.", "确认所有隔离点。"], ["The points have been verified.", "隔离点已确认。"]] },
      { w: "isolation point", ipa: "/ˌaɪ.səˈleɪ.ʃən pɔɪnt/", pos: "名词", cn: "隔离点", memory: "① isolation = 隔离；② point = 点。\nisolation point = 隔离点（能源切断的位置）。\n常见隔离点：断路器/开关/阀门/插头。", phonics: "i 读 /aɪ/，so 读 /sə/，la 读 /leɪ/，tion 读 /ʃən/；point 读 /pɔɪnt/。", collocations: [["isolation point", "隔离点"], ["electrical isolation", "电气隔离"], ["mechanical isolation", "机械隔离"]], examples: [["Identify all isolation points.", "识别所有隔离点。"], ["The isolation point is locked.", "隔离点已锁定。"]] },
    ],
    phrases: [
      { p: "all isolation points", ipa: "/ɔːl ˌaɪ.səˈleɪ.ʃən pɔɪnts/", cn: "所有隔离点", why: "all + isolation points = 所有隔离点。必须确认所有隔离点，不能遗漏任何一个。" },
    ],
    grammar: [
      { q: "为什么必须确认所有隔离点？", a: "遗漏隔离点 = 可能导致安全事故：\n① 未隔离的能源 = 意外送电/送气/送水；\n② 施工人员触电/受伤/死亡；\n③ 设备损坏；\n④ 法律责任。\n所有隔离点都必须识别、确认、锁定、挂牌。一个都不能漏。" },
    ],
    pattern: "Please verify all + 关键点",
    patternExamples: [
      { en: "Please verify all connection points.", cn: "请确认所有连接点。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
      { en: "Please verify all test points.", cn: "请确认所有测试点。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "Please verify all grounding points.", cn: "请确认所有接地点。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
    ],
    thinking: "隔离点确认是能源隔离的关键步骤。\n确认内容：① 识别所有隔离点（不遗漏）；② 确认隔离点位置（与实际一致）；③ 确认隔离状态（已切断）；④ 确认 LOTO 已安装（已锁定挂牌）。\n隔离点确认必须双人复核，一人操作一人确认。",
    pronunciation: "verify 的 ver 读 /vɛr/，i 读 /ɪ/，fy 读 /faɪ/。\nisolation 的 i 读 /aɪ/，so 读 /sə/，la 读 /leɪ/，tion 读 /ʃən/。\npoints 读 /pɔɪnts/。\n节奏：Please VER-i-fy ｜ ALL ｜ i-so-LA-tion POINTS.",
    quiz: [
      { q: "请确认所有接地点，怎么说？", a: "Please verify all grounding points." },
      { q: "隔离点确认需要确认哪些内容？", a: "隔离点确认需要确认：① 识别所有隔离点（不遗漏）；② 确认隔离点位置（与实际一致）；③ 确认隔离状态（已切断）；④ 确认 LOTO 已安装（已锁定挂牌）。隔离点确认必须双人复核。" },
    ],
  },
  {
    id: 1299,
    en: "Please confirm there is no voltage before touching the equipment.",
    cn: "接触设备前请确认已经没有电压。",
    ipa: "/pliːz kənˈfɜːrm ðɛr ɪz noʊ ˈvoʊl.tɪdʒ bɪˈfɔːr ˈtʌtʃ.ɪŋ ðə ɪˈkwɪp.mənt/",
    tags: ["第1299句", "施工现场指挥", "★★★★★"],
    when: "确认所有隔离点后，必须用验电器确认设备无电压，然后才能接触设备。这是电气安全的最后一步。",
    words: [
      { w: "confirm", ipa: "/kənˈfɜːrm/", pos: "动词", cn: "确认", memory: "confirm = 确认（正式确认某事属实）。\nconfirm no voltage = 确认无电压（确认设备已断电）。", phonics: "con 读 /kən/，firm 读 /fɜːrm/，重音在第二音节。", collocations: [["confirm", "确认"], ["confirm no voltage", "确认无电压"], ["confirm safety", "确认安全"]], examples: [["Confirm there is no voltage.", "确认无电压。"], ["The equipment is de-energized.", "设备已断电。"]] },
      { w: "no voltage", ipa: "/noʊ ˈvoʊl.tɪdʒ/", pos: "名词短语", cn: "无电压", memory: "① no = 无；② voltage = 电压。\nno voltage = 无电压（设备已断电）。\n电气安全的核心：确认无电压后才能接触设备。", phonics: "no 读 /noʊ/，voltage 读 /ˈvoʊl.tɪdʒ/。", collocations: [["no voltage", "无电压"], ["zero voltage", "零电压"], ["de-energized", "已断电"]], examples: [["There is no voltage.", "没有电压。"], ["Confirm zero voltage.", "确认零电压。"]] },
    ],
    phrases: [
      { p: "before touching the equipment", ipa: "/bɪˈfɔːr ˈtʌtʃ.ɪŋ ðə ɪˈkwɪp.mənt/", cn: "接触设备前", why: "before + touching + equipment = 接触设备前。这是确认无电压的时间节点，必须在接触设备前确认。" },
    ],
    grammar: [
      { q: "为什么必须确认无电压？", a: "未确认无电压 = 可能触电：\n① 设备可能仍然带电（隔离失败）；\n② 设备可能有残余电荷（电容未放电）；\n③ 设备可能有感应电压（邻近带电设备）；\n④ 施工人员触电/受伤/死亡。\n确认无电压 = 生命安全。未确认 = 视为带电 = 不得接触。" },
    ],
    pattern: "Please confirm + 状态 + before + 动名词",
    patternExamples: [
      { en: "Please confirm the power is off before working.", cn: "工作前请确认电源已关闭。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }, { w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }] },
      { en: "Please confirm the pressure is released before opening.", cn: "打开前请确认压力已释放。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }, { w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }] },
      { en: "Please confirm the temperature is normal before entering.", cn: "进入前请确认温度正常。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "确认无电压是电气安全的最后防线。\n确认步骤：① 用验电器检测设备（确认无电压）；② 测试验电器（在已知电源上测试）；③ 再次检测设备（双重确认）；④ 记录确认时间（签字确认）。\n确认无电压后，才能接触设备。任何一步失败，都要停止作业，重新检查。",
    pronunciation: "confirm 的 con 读 /kən/，firm 读 /fɜːrm/。\nno 读 /noʊ/，voltage 读 /ˈvoʊl.tɪdʒ/。\nbefore 的 be 读 /bɪ/：/bɪˈfɔːr/。\ntouching 的 t 读 /t/，ouch 读 /ʌtʃ/，ing 读 /ɪŋ/。\n节奏：Please con-FIRM ｜ THERE is NO VOL-tage ｜ be-FORE ｜ TOUCH-ing ｜ the e-QUIP-ment.",
    quiz: [
      { q: "打开前请确认压力已释放，怎么说？", a: "Please confirm the pressure is released before opening." },
      { q: "确认无电压的步骤是什么？", a: "确认无电压的步骤：① 用验电器检测设备（确认无电压）；② 测试验电器（在已知电源上测试）；③ 再次检测设备（双重确认）；④ 记录确认时间（签字确认）。任何一步失败，都要停止作业，重新检查。" },
    ],
  },
  {
    id: 1300,
    en: "Please record the isolation time.",
    cn: "请记录隔离时间。",
    ipa: "/pliːz rɪˈkɔːrd ðə ˌaɪ.səˈleɪ.ʃən taɪm/",
    tags: ["第1300句", "施工现场指挥", "★★★★★"],
    when: "确认无电压后，需要记录隔离时间。隔离时间是能源切断的时间，是安全管理的重要记录。",
    words: [
      { w: "record", ipa: "/rɪˈkɔːrd/", pos: "动词", cn: "记录", memory: "① re- = 再；② cord = 心（拉丁语 cor）。\nrecord = 记录（将信息记下来）。\n施工现场所有关键步骤都需要记录。", phonics: "re 读 /rɪ/，cord 读 /kɔːrd/，重音在第二音节。", collocations: [["record", "记录"], ["record time", "记录时间"], ["record data", "记录数据"]], examples: [["Record the time.", "记录时间。"], ["The data has been recorded.", "数据已记录。"]] },
      { w: "isolation time", ipa: "/ˌaɪ.səˈleɪ.ʃən taɪm/", pos: "名词", cn: "隔离时间", memory: "① isolation = 隔离；② time = 时间。\nisolation time = 隔离时间（能源切断的时间）。\n隔离时间必须准确记录，用于追溯和审计。", phonics: "i 读 /aɪ/，so 读 /sə/，la 读 /leɪ/，tion 读 /ʃən/；time 读 /taɪm/。", collocations: [["isolation time", "隔离时间"], ["restoration time", "恢复时间"], ["operation time", "操作时间"]], examples: [["Record the isolation time.", "记录隔离时间。"], ["The isolation time is 9 AM.", "隔离时间是9点。"]] },
    ],
    phrases: [
      { p: "isolation time", ipa: "/ˌaɪ.səˈleɪ.ʃən taɪm/", cn: "隔离时间", why: "isolation + time = 隔离时间。隔离时间是能源切断的时间，是安全管理的重要记录。" },
    ],
    grammar: [
      { q: "为什么要记录隔离时间？", a: "记录隔离时间的重要性：\n① 追溯依据（什么时候隔离的）；\n② 审计要求（合规性证明）；\n③ 责任明确（谁在什么时候操作的）；\n④ 恢复参考（隔离多久了）。\n隔离时间必须准确记录，精确到分钟。" },
    ],
    pattern: "Please record the + 时间/数据",
    patternExamples: [
      { en: "Please record the start time.", cn: "请记录开始时间。", words: [{ w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "Please record the completion time.", cn: "请记录完成时间。", words: [] },
      { en: "Please record the test results.", cn: "请记录测试结果。", words: [{ w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
    ],
    thinking: "记录隔离时间是安全管理的最后一步。\n记录内容：① 隔离时间（精确到分钟）；② 操作人员（谁操作的）；③ 确认人员（谁确认的）；④ 隔离点编号（哪个隔离点）；⑤ 隔离方式（LOTO/其他）。\n记录必须清晰、准确、完整。记录是法律文件，必须妥善保存。",
    pronunciation: "record 的 re 读 /rɪ/，cord 读 /kɔːrd/。\nisolation 的 i 读 /aɪ/，so 读 /sə/，la 读 /leɪ/，tion 读 /ʃən/。\ntime 读 /taɪm/。\n节奏：Please re-CORD ｜ the i-so-LA-tion TIME.",
    quiz: [
      { q: "请记录开始时间，怎么说？", a: "Please record the start time." },
      { q: "隔离时间记录需要记录哪些内容？", a: "隔离时间记录需要记录：① 隔离时间（精确到分钟）；② 操作人员（谁操作的）；③ 确认人员（谁确认的）；④ 隔离点编号（哪个隔离点）；⑤ 隔离方式（LOTO/其他）。记录必须清晰、准确、完整。" },
    ],
  },
];

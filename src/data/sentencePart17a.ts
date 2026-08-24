// EXPORTS: MOCK_SENTENCES_PART17A

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART17A: ISentence[] = [
  {
    id: 1321,
    en: "We are ready to start the switching operation.",
    cn: "我们准备开始倒闸操作。",
    ipa: "/wiː ɑːr ˈrɛd.i tuː stɑːrt ðə ˈswɪtʃ.ɪŋ ˌɒp.əˈreɪ.ʃən/",
    tags: ["第1321句", "电气倒闸操作", "★★★★★"],
    when: "所有准备工作完成后，操作负责人向现场团队宣布可以开始倒闸操作。switching operation 是电气倒闸操作的标准术语。",
    words: [
      { w: "switching operation", ipa: "/ˈswɪtʃ.ɪŋ ˌɒp.əˈreɪ.ʃən/", pos: "名词短语", cn: "倒闸操作", memory: "① switching = 切换/倒闸；② operation = 操作。\nswitching operation = 倒闸操作，指改变电气系统运行方式的操作。\n数据中心中包括：倒母线、倒变压器、切换供电线路等。", phonics: "switch 读 /swɪtʃ/，operation 读 /ˌɒp.əˈreɪ.ʃən/。", collocations: [["switching operation", "倒闸操作"], ["electrical switching", "电气倒闸"], ["switching sequence", "倒闸顺序"]], examples: [["The switching operation is complete.", "倒闸操作完成。"], ["Please follow the switching procedure.", "请按倒闸流程操作。"]] },
      { w: "ready", ipa: "/ˈrɛd.i/", pos: "形容词", cn: "准备好的", memory: "ready = 准备好的/就绪的。\nbe ready to do sth = 准备好做某事。\n倒闸操作前必须确认所有准备工作就绪。", phonics: "read 读 /rɛd/，y 读 /i/。", collocations: [["ready to start", "准备开始"], ["ready for operation", "准备操作"], ["all systems ready", "所有系统就绪"]], examples: [["We are ready to proceed.", "我们准备继续。"], ["Is the equipment ready?", "设备准备好了吗？"]] },
    ],
    phrases: [
      { p: "ready to start", ipa: "/ˈrɛd.i tuː stɑːrt/", cn: "准备开始", why: "ready + to start = 准备开始。这是倒闸操作开始前的标准宣布用语，表明所有准备工作已完成。" },
    ],
    grammar: [
      { q: "We are ready to 和 We can 有什么区别？", a: "We are ready to = 我们准备好了（强调准备状态）\nWe can = 我们可以（强调能力或许可）\n✅ We are ready to start the operation.（我们准备开始操作 → 强调准备就绪）\n✅ We can start the operation now.（我们现在可以开始操作 → 强调被允许）\n倒闸操作用 ready to，因为关注的是'准备工作是否完成'。" },
    ],
    pattern: "We are ready to start the + 操作类型",
    patternExamples: [
      { en: "We are ready to start the maintenance work.", cn: "我们准备开始维护工作。", words: [{ w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "We are ready to start the testing procedure.", cn: "我们准备开始测试流程。", words: [{ w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }, { w: "testing", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }, { w: "procedure", ipa: "/prəˈsiːdʒər/", cn: "流程", phonics: "pro 读 /prə/，cedure 读 /siːdʒər/" }] },
      { en: "We are ready to start the shutdown process.", cn: "我们准备开始关机流程。", words: [{ w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
    ],
    thinking: "倒闸操作是数据中心电气系统中最危险的操作之一。\n操作前必须确认：① 流程已阅读（1322）→ ② 顺序已确认（1323）→ ③ 设备已识别（1324-1326）→ ④ 控制室已确认（1327）→ ⑤ 客户已批准（1328）→ ⑥ 现场已清理（1330）。\n只有所有条件满足，才能宣布 ready to start。",
    pronunciation: "switching 的 w 读 /w/，不要读成 /v/。\noperation 的 o 读短音 /ɒ/。\n节奏：We are READ-y ｜ to START ｜ the SWITCH-ing op-e-RA-tion.",
    quiz: [
      { q: "我们准备开始维护工作，怎么说？", a: "We are ready to start the maintenance work." },
      { q: "倒闸操作前需要确认哪些准备工作？", a: "倒闸操作前需确认：① 操作流程已阅读 ② 倒闸顺序已确认 ③ 设备编号已核实 ④ 控制室已确认 ⑤ 客户已批准 ⑥ 现场人员已撤离到安全区域。" },
    ],
  },
  {
    id: 1322,
    en: "Please read the switching procedure carefully.",
    cn: "请认真阅读倒闸操作流程。",
    ipa: "/pliːz riːd ðə ˈswɪtʃ.ɪŋ prəˈsiː.dʒər ˈkɛr.fəl.i/",
    tags: ["第1322句", "流程阅读", "★★★★★"],
    when: "开始操作前，操作人员必须仔细阅读倒闸操作流程（switching procedure），了解每一步操作的目的、顺序和安全注意事项。",
    words: [
      { w: "procedure", ipa: "/prəˈsiː.dʒər/", pos: "名词", cn: "流程；程序", memory: "① pro- = 向前；② ced = 走（拉丁语 cedere）；③ -ure = 名词后缀。\nprocedure = 向前走的步骤 → 流程/程序。\n倒闸操作流程是经过审批的标准化操作文件。", phonics: "pro 读 /prə/，ce 读 /siː/，dure 读 /dʒər/，重音在第二音节。", collocations: [["switching procedure", "倒闸流程"], ["operating procedure", "操作流程"], ["standard procedure", "标准流程"]], examples: [["Please follow the procedure.", "请按流程操作。"], ["The procedure has been approved.", "流程已获批准。"]] },
      { w: "carefully", ipa: "/ˈkɛr.fəl.i/", pos: "副词", cn: "认真地；仔细地", memory: "① care = 关心/仔细；② -ful = 充满的；③ -ly = 副词后缀。\ncarefully = 仔细地/认真地。\n倒闸操作必须仔细阅读，不能走马观花。", phonics: "care 读 /kɛr/，ful 读 /fəl/，ly 读 /li/。", collocations: [["read carefully", "仔细阅读"], ["check carefully", "仔细检查"], ["inspect carefully", "仔细检查"]], examples: [["Please read the instructions carefully.", "请仔细阅读说明。"], ["Check the connections carefully.", "仔细检查连接。"]] },
    ],
    phrases: [
      { p: "switching procedure", ipa: "/ˈswɪtʃ.ɪŋ prəˈsiː.dʒər/", cn: "倒闸操作流程", why: "switching + procedure = 倒闸流程。这是倒闸操作的指导文件，包含操作步骤、安全要求和应急预案。" },
    ],
    grammar: [
      { q: "read 和 read through 有什么区别？", a: "read = 阅读（一般性阅读）\nread through = 通读（从头到尾完整阅读）\n✅ Please read the procedure carefully.（请仔细阅读流程）\n✅ Please read through the procedure before starting.（开始前请通读流程）\n倒闸操作用 read carefully 强调'仔细阅读'，用 read through 强调'完整阅读'。" },
    ],
    pattern: "Please read the + 文件类型 + carefully",
    patternExamples: [
      { en: "Please read the safety instructions carefully.", cn: "请仔细阅读安全说明。", words: [{ w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }] },
      { en: "Please read the work permit carefully.", cn: "请仔细阅读作业许可证。", words: [] },
      { en: "Please read the emergency plan carefully.", cn: "请仔细阅读应急预案。", words: [{ w: "emergency", ipa: "/ɪˈmɜːrdʒənsi/", cn: "紧急", phonics: "e 读 /ɪ/，mergency 读 /mɜːrdʒənsi/" }] },
    ],
    thinking: "倒闸操作流程（switching procedure）是操作人员最重要的参考文件。\n流程内容包括：① 操作目的 ② 操作顺序 ③ 安全措施 ④ 应急预案 ⑤ 回退方案。\n操作人员必须在操作前完整阅读并理解流程，不能凭经验操作。",
    pronunciation: "procedure 的 ce 读长音 /siː/，dure 读 /dʒər/。\ncarefully 的 care 读 /kɛr/。\n节奏：Please READ ｜ the SWITCH-ing pro-CE-dure ｜ CARE-ful-ly.",
    quiz: [
      { q: "请仔细阅读安全说明，怎么说？", a: "Please read the safety instructions carefully." },
      { q: "倒闸操作流程通常包含哪些内容？", a: "倒闸操作流程通常包含：① 操作目的和范围 ② 操作步骤和顺序 ③ 安全措施和注意事项 ④ 应急预案和回退方案 ⑤ 操作后的检查清单。" },
    ],
  },
  {
    id: 1323,
    en: "Please verify the switching sequence.",
    cn: "请确认倒闸顺序。",
    ipa: "/pliːz ˈvɛr.ɪ.faɪ ðə ˈswɪtʃ.ɪŋ ˈsiː.kwəns/",
    tags: ["第1323句", "顺序确认", "★★★★★"],
    when: "阅读流程后，需要确认倒闸操作的顺序是否正确。倒闸顺序错误可能导致设备损坏或人身事故。",
    words: [
      { w: "verify", ipa: "/ˈvɛr.ɪ.faɪ/", pos: "动词", cn: "确认；核实", memory: "① ver = 真实（拉丁语 verus）；② -ify = 使成为。\nverify = 使真实 → 核实/确认。\n倒闸操作中 verify 比 check 更正式，强调'核实是否正确'。", phonics: "ver 读 /vɛr/，i 读 /ɪ/，fy 读 /faɪ/。", collocations: [["verify the sequence", "确认顺序"], ["verify the operation", "确认操作"], ["verify the result", "确认结果"]], examples: [["Please verify the breaker position.", "请确认断路器位置。"], ["Verify the voltage before proceeding.", "继续前请确认电压。"]] },
      { w: "sequence", ipa: "/ˈsiː.kwəns/", pos: "名词", cn: "顺序；序列", memory: "① sequ = 跟随（拉丁语 sequi）；② -ence = 名词后缀。\nsequence = 跟随的顺序 → 顺序/序列。\n倒闸操作必须按正确顺序执行，不能颠倒。", phonics: "se 读 /siː/，quence 读 /kwəns/。", collocations: [["switching sequence", "倒闸顺序"], ["operation sequence", "操作顺序"], ["correct sequence", "正确顺序"]], examples: [["Follow the correct sequence.", "按正确顺序操作。"], ["The sequence is critical.", "顺序至关重要。"]] },
    ],
    phrases: [
      { p: "switching sequence", ipa: "/ˈswɪtʃ.ɪŋ ˈsiː.kwəns/", cn: "倒闸顺序", why: "switching + sequence = 倒闸顺序。倒闸操作必须按规定的顺序执行，顺序错误可能导致严重后果。" },
    ],
    grammar: [
      { q: "verify 和 confirm 有什么区别？", a: "verify = 核实（检查是否正确）\nconfirm = 确认（正式确认结果）\n✅ Please verify the switching sequence.（请核实倒闸顺序 → 检查是否正确）\n✅ Please confirm the operation is complete.（请确认操作完成 → 正式确认结果）\n操作前用 verify（检查），操作后用 confirm（确认结果）。" },
    ],
    pattern: "Please verify the + 检查项",
    patternExamples: [
      { en: "Please verify the equipment identification.", cn: "请确认设备编号。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }] },
      { en: "Please verify the isolation points.", cn: "请确认隔离点。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
      { en: "Please verify the grounding connections.", cn: "请确认接地连接。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
    ],
    thinking: "倒闸顺序是倒闸操作的核心。\n典型顺序：① 断开断路器 → ② 确认无电流 → ③ 合接地开关 → ④ 操作设备 → ⑤ 断开接地 → ⑥ 合断路器。\n顺序错误可能导致：带负荷拉隔离开关、带电合接地开关等严重事故。",
    pronunciation: "verify 的 ver 读 /vɛr/，fy 读 /faɪ/。\nsequence 的 se 读长音 /siː/。\n节奏：Please VER-i-fy ｜ the SWITCH-ing SE-quence.",
    quiz: [
      { q: "请确认隔离点，怎么说？", a: "Please verify the isolation points." },
      { q: "倒闸顺序错误可能导致什么后果？", a: "倒闸顺序错误可能导致：① 带负荷拉隔离开关（电弧短路）② 带电合接地开关（短路爆炸）③ 设备损坏 ④ 人身伤亡。必须严格按规定的倒闸顺序操作。" },
    ],
  },
  {
    id: 1324,
    en: "Please confirm the equipment identification.",
    cn: "请确认设备编号。",
    ipa: "/pliːz kənˈfɜːrm ðə ɪˈkwɪp.mənt ˌaɪ.dɛn.tɪ.fɪˈkeɪ.ʃən/",
    tags: ["第1324句", "设备识别", "★★★★★"],
    when: "操作前必须确认要操作的设备编号正确，防止误操作其他设备。equipment identification 是设备的唯一标识。",
    words: [
      { w: "equipment", ipa: "/ɪˈkwɪp.mənt/", pos: "名词", cn: "设备", memory: "① equip = 装备；② -ment = 名词后缀。\nequipment = 装备的东西 → 设备。\n数据中心电气设备包括：断路器、隔离开关、变压器、母线等。", phonics: "e 读 /ɪ/，quip 读 /kwɪp/，ment 读 /mənt/。", collocations: [["electrical equipment", "电气设备"], ["equipment identification", "设备编号"], ["equipment status", "设备状态"]], examples: [["Check the equipment status.", "检查设备状态。"], ["The equipment is under maintenance.", "设备正在维护中。"]] },
      { w: "identification", ipa: "/ˌaɪ.dɛn.tɪ.fɪˈkeɪ.ʃən/", pos: "名词", cn: "识别；编号", memory: "① identify = 识别；② -ation = 名词后缀。\nidentification = 识别/标识。\n设备编号是设备的唯一标识，用于防止误操作。", phonics: "i 读 /aɪ/，den 读 /dɛn/，ti 读 /tɪ/，fi 读 /fɪ/，cation 读 /keɪ.ʃən/。", collocations: [["equipment identification", "设备编号"], ["asset identification", "资产编号"], ["positive identification", "准确识别"]], examples: [["Verify the equipment identification.", "核实设备编号。"], ["Each equipment has a unique identification.", "每台设备都有唯一编号。"]] },
    ],
    phrases: [
      { p: "equipment identification", ipa: "/ɪˈkwɪp.mənt ˌaɪ.dɛn.tɪ.fɪˈkeɪ.ʃən/", cn: "设备编号", why: "equipment + identification = 设备编号。这是设备的唯一标识，用于确保操作人员操作的是正确的设备。" },
    ],
    grammar: [
      { q: "confirm 和 verify 在这里可以互换吗？", a: "在这个语境中，confirm 和 verify 可以互换，但侧重点略有不同：\nconfirm = 确认（正式确认，通常有记录）\nverify = 核实（检查是否正确）\n✅ Please confirm the equipment identification.（请确认设备编号 → 正式确认）\n✅ Please verify the equipment identification.（请核实设备编号 → 检查是否正确）\n两者都可以用，confirm 更常用。" },
    ],
    pattern: "Please confirm the + 标识信息",
    patternExamples: [
      { en: "Please confirm the breaker number.", cn: "请确认断路器编号。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }, { w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
      { en: "Please confirm the feeder name.", cn: "请确认馈线名称。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }] },
      { en: "Please confirm the panel location.", cn: "请确认配电柜位置。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }, { w: "panel", ipa: "/ˈpænl/", cn: "面板", phonics: "pan 读 /pæn/，el 读 /l/" }] },
    ],
    thinking: "设备编号确认是防止误操作的关键步骤。\n确认方法：① 对照流程图核对编号 ② 现场查看设备铭牌 ③ 与控制室确认 ④ 双人确认（一人读号，一人核对）。\n误操作其他设备可能导致：供电中断、设备损坏、人身事故。",
    pronunciation: "equipment 的 quip 读 /kwɪp/，不要读成 /kwaɪp/。\nidentification 的 i 读长音 /aɪ/。\n节奏：Please con-FIRM ｜ the e-QUIP-ment ｜ i-den-ti-fi-CA-tion.",
    quiz: [
      { q: "请确认馈线名称，怎么说？", a: "Please confirm the feeder name." },
      { q: "设备编号确认为什么要双人确认？", a: "双人确认是为了防止人为失误：一人读编号，另一人核对，可以互相监督，减少误读、误认的风险。这是电气操作的安全标准做法，特别是在高压设备操作中。" },
    ],
  },
  {
    id: 1325,
    en: "Please verify the circuit breaker number.",
    cn: "请确认断路器编号。",
    ipa: "/pliːz ˈvɛr.ɪ.faɪ ðə ˈsɜːr.kɪt ˈbreɪ.kər ˈnʌm.bər/",
    tags: ["第1325句", "断路器确认", "★★★★★"],
    when: "断路器是倒闸操作的核心设备，操作前必须确认断路器编号正确。circuit breaker 是断路器的标准术语。",
    words: [
      { w: "circuit breaker", ipa: "/ˈsɜːr.kɪt ˈbreɪ.kər/", pos: "名词短语", cn: "断路器", memory: "① circuit = 电路/回路；② breaker = 断开器。\ncircuit breaker = 断路器，用于接通和断开电路，具有保护功能。\n数据中心常用：ACB（空气断路器）、MCB（微型断路器）、VCB（真空断路器）。", phonics: "circuit 读 /ˈsɜːr.kɪt/，breaker 读 /ˈbreɪ.kər/。", collocations: [["circuit breaker", "断路器"], ["open the breaker", "分闸断路器"], ["close the breaker", "合闸断路器"]], examples: [["Open the circuit breaker first.", "先分闸断路器。"], ["The circuit breaker tripped.", "断路器跳闸了。"]] },
      { w: "number", ipa: "/ˈnʌm.bər/", pos: "名词", cn: "编号；号码", memory: "number = 编号/号码。\n每台断路器都有唯一编号，用于识别和操作。", phonics: "num 读 /nʌm/，ber 读 /bər/。", collocations: [["breaker number", "断路器编号"], ["equipment number", "设备编号"], ["asset number", "资产编号"]], examples: [["What is the breaker number?", "断路器编号是多少？"], ["Record the breaker number.", "记录断路器编号。"]] },
    ],
    phrases: [
      { p: "circuit breaker number", ipa: "/ˈsɜːr.kɪt ˈbreɪ.kər ˈnʌm.bər/", cn: "断路器编号", why: "circuit breaker + number = 断路器编号。这是断路器的唯一标识，操作前必须确认。" },
    ],
    grammar: [
      { q: "circuit breaker 和 breaker 可以互换吗？", a: "circuit breaker = 断路器（完整术语）\nbreaker = 断路器（简称）\n✅ Please verify the circuit breaker number.（请确认断路器编号 → 正式）\n✅ Please check the breaker position.（请检查断路器位置 → 日常）\n正式文件用 circuit breaker，口语交流可以用 breaker。" },
    ],
    pattern: "Please verify the + 设备类型 + number",
    patternExamples: [
      { en: "Please verify the transformer number.", cn: "请确认变压器编号。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "transformer", ipa: "/trænsˈfɔːrmər/", cn: "变压器", phonics: "trans 读 /træns/，former 读 /fɔːrmər/" }] },
      { en: "Please verify the switchgear number.", cn: "请确认开关柜编号。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
      { en: "Please verify the panel number.", cn: "请确认配电柜编号。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "panel", ipa: "/ˈpænl/", cn: "面板", phonics: "pan 读 /pæn/，el 读 /l/" }] },
    ],
    thinking: "断路器是电气系统中最重要的保护和操作设备。\n断路器功能：① 正常接通/断开电路 ② 故障时自动跳闸保护 ③ 隔离故障设备。\n断路器编号通常格式：CB-XXX（如 CB-001），在设备铭牌和流程图上都有标注。",
    pronunciation: "circuit 的 cir 读 /sɜːr/，cuit 读 /kɪt/。\nbreaker 的 break 读 /breɪk/，er 读 /ər/。\n节奏：Please VER-i-fy ｜ the CIR-cuit BREAK-er NUM-ber.",
    quiz: [
      { q: "请确认变压器编号，怎么说？", a: "Please verify the transformer number." },
      { q: "断路器的主要功能是什么？", a: "断路器的主要功能：① 正常操作时接通/断开电路 ② 故障时自动跳闸切断故障电流 ③ 隔离故障设备保护系统安全。断路器是电气系统中最重要的保护和操作设备。" },
    ],
  },
  {
    id: 1326,
    en: "Please verify the feeder number.",
    cn: "请确认馈线编号。",
    ipa: "/pliːz ˈvɛr.ɪ.faɪ ðə ˈfiː.dər ˈnʌm.bər/",
    tags: ["第1326句", "馈线确认", "★★★★★"],
    when: "馈线是从配电柜向负载供电的线路，操作前必须确认馈线编号正确。feeder 是馈线的标准术语。",
    words: [
      { w: "feeder", ipa: "/ˈfiː.dər/", pos: "名词", cn: "馈线；供电线路", memory: "① feed = 供给/喂养；② -er = 执行者。\nfeeder = 供给者 → 馈线（向负载供电的线路）。\n数据中心馈线通常从UPS或配电柜引出到IT负载。", phonics: "feed 读 /fiːd/，er 读 /ər/。", collocations: [["feeder number", "馈线编号"], ["feeder line", "馈线"], ["main feeder", "主馈线"]], examples: [["Check the feeder status.", "检查馈线状态。"], ["The feeder is overloaded.", "馈线过载了。"]] },
    ],
    phrases: [
      { p: "feeder number", ipa: "/ˈfiː.dər ˈnʌm.bər/", cn: "馈线编号", why: "feeder + number = 馈线编号。这是馈线的唯一标识，用于识别和操作。" },
    ],
    grammar: [
      { q: "feeder 和 circuit 有什么区别？", a: "feeder = 馈线（从配电柜到负载的供电线路）\ncircuit = 电路/回路（更通用的电气概念）\n✅ Please verify the feeder number.（请确认馈线编号 → 具体指供电线路）\n✅ Please check the circuit breaker.（请检查断路器 → 电路中的保护设备）\nfeeder 是具体的供电线路，circuit 是更广义的电路概念。" },
    ],
    pattern: "Please verify the + 线路类型 + number",
    patternExamples: [
      { en: "Please verify the bus number.", cn: "请确认母线编号。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
      { en: "Please verify the cable number.", cn: "请确认电缆编号。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
      { en: "Please verify the line number.", cn: "请确认线路编号。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
    ],
    thinking: "馈线是数据中心供电系统的重要组成部分。\n馈线类型：① 主馈线（从变压器到主配电柜）② 分支馈线（从配电柜到负载）③ 备用馈线（冗余供电线路）。\n馈线编号通常格式：FDR-XXX（如 FDR-001），在配电柜和流程图上都有标注。",
    pronunciation: "feeder 的 feed 读长音 /fiːd/。\n节奏：Please VER-i-fy ｜ the FEE-der NUM-ber.",
    quiz: [
      { q: "请确认母线编号，怎么说？", a: "Please verify the bus number." },
      { q: "数据中心馈线有哪些类型？", a: "数据中心馈线主要类型：① 主馈线（从变压器到主配电柜）② 分支馈线（从配电柜到IT负载）③ 备用馈线（冗余供电线路，用于故障切换）。" },
    ],
  },
  {
    id: 1327,
    en: "Please confirm the operation with the control room.",
    cn: "请与控制室确认操作。",
    ipa: "/pliːz kənˈfɜːrm ðə ˌɒp.əˈreɪ.ʃən wɪð ðə kənˈtroʊl ruːm/",
    tags: ["第1327句", "控制室确认", "★★★★★"],
    when: "倒闸操作前必须与控制室确认，确保控制室了解操作计划并同意操作。control room 是控制室的标准术语。",
    words: [
      { w: "control room", ipa: "/kənˈtroʊl ruːm/", pos: "名词短语", cn: "控制室", memory: "① control = 控制；② room = 房间。\ncontrol room = 控制室，是数据中心监控和指挥的中心。\n控制室负责：监控系统状态、协调操作、应急响应。", phonics: "control 读 /kənˈtroʊl/，room 读 /ruːm/。", collocations: [["control room", "控制室"], ["confirm with control room", "与控制室确认"], ["contact control room", "联系控制室"]], examples: [["Please contact the control room.", "请联系控制室。"], ["The control room has approved the operation.", "控制室已批准操作。"]] },
      { w: "confirm with", ipa: "/kənˈfɜːrm wɪð/", pos: "动词短语", cn: "与...确认", memory: "confirm + with + 人/部门 = 与某人/某部门确认。\n倒闸操作需要多方确认，control room 是必须确认的部门之一。", phonics: "confirm 读 /kənˈfɜːrm/，with 读 /wɪð/。", collocations: [["confirm with manager", "与经理确认"], ["confirm with engineer", "与工程师确认"], ["confirm with customer", "与客户确认"]], examples: [["Please confirm with the duty manager.", "请与值班经理确认。"], ["I will confirm with the team.", "我会与团队确认。"]] },
    ],
    phrases: [
      { p: "confirm with the control room", ipa: "/kənˈfɜːrm wɪð ðə kənˈtroʊl ruːm/", cn: "与控制室确认", why: "confirm with + the control room = 与控制室确认。控制室是数据中心运营的指挥中心，倒闸操作必须得到控制室的确认和批准。" },
    ],
    grammar: [
      { q: "confirm with 和 confirm to 有什么区别？", a: "confirm with = 与...确认（双向沟通，征求意见）\nconfirm to = 向...确认（单向通知，告知结果）\n✅ Please confirm with the control room.（请与控制室确认 → 征求意见）\n✅ Please confirm to the customer.（请向客户确认 → 告知结果）\n操作前用 with（征求同意），操作后用 to（告知完成）。" },
    ],
    pattern: "Please confirm the + 事项 + with + 部门/人员",
    patternExamples: [
      { en: "Please confirm the schedule with the manager.", cn: "请与经理确认时间安排。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }, { w: "schedule", ipa: "/ˈʃɛdjuːl/", cn: "安排", phonics: "sched 读 /ʃɛd/，ule 读 /juːl/" }] },
      { en: "Please confirm the plan with the engineer.", cn: "请与工程师确认计划。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }, { w: "engineer", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }] },
      { en: "Please confirm the procedure with the supervisor.", cn: "请与主管确认流程。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }, { w: "procedure", ipa: "/prəˈsiːdʒər/", cn: "流程", phonics: "pro 读 /prə/，cedure 读 /siːdʒər/" }] },
    ],
    thinking: "控制室是数据中心运营的神经中枢。\n控制室职责：① 24小时监控系统状态 ② 协调各部门操作 ③ 应急响应指挥 ④ 客户沟通联络。\n倒闸操作必须与控制室确认，因为控制室需要：① 了解操作对系统的影响 ② 协调其他相关操作 ③ 准备应急响应。",
    pronunciation: "control 的 con 读 /kən/，trol 读 /troʊl/。\nroom 的 oo 读长音 /uː/。\n节奏：Please con-FIRM ｜ the op-e-RA-tion ｜ with the con-TROL ROOM.",
    quiz: [
      { q: "请与工程师确认计划，怎么说？", a: "Please confirm the plan with the engineer." },
      { q: "倒闸操作为什么要与控制室确认？", a: "倒闸操作必须与控制室确认，因为：① 控制室需要了解操作对系统的影响 ② 控制室需要协调其他相关操作避免冲突 ③ 控制室需要准备应急响应预案 ④ 控制室负责与客户沟通。" },
    ],
  },
  {
    id: 1328,
    en: "Please obtain customer approval before switching.",
    cn: "倒闸前请取得客户批准。",
    ipa: "/pliːz əbˈteɪn ˈkʌs.tə.mər əˈpruː.vəl bɪˈfɔːr ˈswɪtʃ.ɪŋ/",
    tags: ["第1328句", "客户批准", "★★★★★"],
    when: "倒闸操作可能影响客户供电，操作前必须取得客户的正式批准。customer approval 是客户批准的标准术语。",
    words: [
      { w: "obtain", ipa: "/əbˈteɪn/", pos: "动词", cn: "获得；取得", memory: "① ob- = 朝向；② tain = 拿（拉丁语 tenere）。\nobtain = 拿到 → 获得/取得。\nobtain 比 get 更正式，强调通过努力获得。", phonics: "ob 读 /əb/，tain 读 /teɪn/。", collocations: [["obtain approval", "获得批准"], ["obtain permission", "获得许可"], ["obtain authorization", "获得授权"]], examples: [["We need to obtain customer approval.", "我们需要获得客户批准。"], ["Please obtain the necessary permits.", "请获得必要的许可。"]] },
      { w: "approval", ipa: "/əˈpruː.vəl/", pos: "名词", cn: "批准；同意", memory: "① approve = 批准；② -al = 名词后缀。\napproval = 批准/同意。\n倒闸操作涉及客户供电，必须获得客户的正式批准。", phonics: "ap 读 /ə/，prov 读 /pruː/，al 读 /əl/。", collocations: [["customer approval", "客户批准"], ["management approval", "管理层批准"], ["written approval", "书面批准"]], examples: [["We have obtained customer approval.", "我们已获得客户批准。"], ["Please wait for approval before proceeding.", "请等待批准后再继续。"]] },
    ],
    phrases: [
      { p: "obtain customer approval", ipa: "/əbˈteɪn ˈkʌs.tə.mər əˈpruː.vəl/", cn: "取得客户批准", why: "obtain + customer + approval = 取得客户批准。数据中心为客户托管设备，任何可能影响客户供电的操作都必须获得客户的正式批准。" },
    ],
    grammar: [
      { q: "obtain 和 get 有什么区别？", a: "obtain = 获得（正式，通过努力获得）\nget = 得到（日常，一般性获得）\n✅ Please obtain customer approval.（请取得客户批准 → 正式流程）\n✅ Did you get the approval?（你拿到批准了吗？→ 日常询问）\n正式操作和文件用 obtain，日常交流用 get。" },
    ],
    pattern: "Please obtain + 批准类型 + before + 操作",
    patternExamples: [
      { en: "Please obtain management approval before maintenance.", cn: "维护前请取得管理层批准。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "Please obtain written approval before shutdown.", cn: "关机前请取得书面批准。", words: [] },
      { en: "Please obtain safety approval before working.", cn: "工作前请取得安全批准。", words: [{ w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }] },
    ],
    thinking: "客户批准是数据中心运营的基本原则。\n需要客户批准的操作：① 影响客户供电的操作 ② 进入客户机柜区域 ③ 操作客户设备 ④ 计划性停电维护。\n客户批准通常形式：① 邮件确认 ② 工单审批 ③ 现场签字。未获批准擅自操作可能导致合同纠纷和客户投诉。",
    pronunciation: "obtain 的 ob 读 /əb/，tain 读长音 /teɪn/。\napproval 的 prov 读 /pruːv/。\n节奏：Please ob-TAIN ｜ CUS-to-mer ap-PROV-al ｜ be-FORE SWITCH-ing.",
    quiz: [
      { q: "维护前请取得管理层批准，怎么说？", a: "Please obtain management approval before maintenance." },
      { q: "哪些操作需要客户批准？", a: "需要客户批准的操作：① 影响客户供电的倒闸操作 ② 进入客户机柜区域 ③ 操作客户托管设备 ④ 计划性停电维护 ⑤ 任何可能影响客户业务的操作。" },
    ],
  },
  {
    id: 1329,
    en: "Please announce the switching operation.",
    cn: "请宣布开始倒闸操作。",
    ipa: "/pliːz əˈnaʊns ðə ˈswɪtʃ.ɪŋ ˌɒp.əˈreɪ.ʃən/",
    tags: ["第1329句", "宣布操作", "★★★★★"],
    when: "所有准备工作完成后，操作负责人向现场所有人员正式宣布开始倒闸操作，确保所有人都知道操作即将开始。",
    words: [
      { w: "announce", ipa: "/əˈnaʊns/", pos: "动词", cn: "宣布；通知", memory: "① an- = 向；② nounce = 报告（拉丁语 nuntiare）。\nannounce = 向...报告 → 宣布/通知。\n倒闸操作前必须正式宣布，让所有现场人员知晓。", phonics: "an 读 /ə/，nounce 读 /naʊns/。", collocations: [["announce the operation", "宣布操作"], ["announce the start", "宣布开始"], ["announce the completion", "宣布完成"]], examples: [["Please announce the start of work.", "请宣布开始工作。"], ["The operation has been announced.", "操作已宣布。"]] },
    ],
    phrases: [
      { p: "announce the switching operation", ipa: "/əˈnaʊns ðə ˈswɪtʃ.ɪŋ ˌɒp.əˈreɪ.ʃən/", cn: "宣布开始倒闸操作", why: "announce + the switching operation = 宣布倒闸操作。这是操作开始前的正式宣告，确保现场所有人员都了解即将进行的操作。" },
    ],
    grammar: [
      { q: "announce 和 declare 有什么区别？", a: "announce = 宣布（通知大家某事）\ndeclare = 声明（正式宣告，通常有法律效力）\n✅ Please announce the switching operation.（请宣布倒闸操作 → 通知大家）\n✅ I declare the system is safe.（我声明系统安全 → 正式宣告）\n日常操作用 announce，正式安全声明用 declare。" },
    ],
    pattern: "Please announce the + 操作/事项",
    patternExamples: [
      { en: "Please announce the start of maintenance.", cn: "请宣布开始维护。", words: [{ w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "Please announce the power outage.", cn: "请宣布停电通知。", words: [{ w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }] },
      { en: "Please announce the emergency drill.", cn: "请宣布应急演练。", words: [{ w: "emergency", ipa: "/ɪˈmɜːrdʒənsi/", cn: "紧急", phonics: "e 读 /ɪ/，mergency 读 /mɜːrdʒənsi/" }] },
    ],
    thinking: "宣布操作是安全管理的重要环节。\n宣布的目的：① 让所有现场人员知晓操作即将开始 ② 确保无关人员撤离操作区域 ③ 确认所有准备工作已完成 ④ 建立操作的时间节点。\n宣布方式：现场大声宣布、对讲机通知、广播系统。",
    pronunciation: "announce 的 an 读 /ə/，nounce 读 /naʊns/。\n节奏：Please an-NOUNCE ｜ the SWITCH-ing op-e-RA-tion.",
    quiz: [
      { q: "请宣布开始维护，怎么说？", a: "Please announce the start of maintenance." },
      { q: "宣布操作的目的是什么？", a: "宣布操作的目的：① 让所有现场人员知晓操作即将开始 ② 确保无关人员撤离操作区域 ③ 确认所有准备工作已完成 ④ 建立操作的时间节点记录。" },
    ],
  },
  {
    id: 1330,
    en: "Everyone, please stay clear of the equipment.",
    cn: "所有人员请远离设备。",
    ipa: "/ˈɛv.ri.wʌn pliːz steɪ klɪr ɒv ðə ɪˈkwɪp.mənt/",
    tags: ["第1330句", "安全警告", "★★★★★"],
    when: "操作开始前，要求所有非操作人员远离设备，确保操作区域安全。stay clear of 是远离/避开的标准用语。",
    words: [
      { w: "stay clear of", ipa: "/steɪ klɪr ɒv/", pos: "动词短语", cn: "远离；避开", memory: "① stay = 保持；② clear = 清澈/远离；③ of = ...的。\nstay clear of = 保持远离 → 远离/避开。\n这是安全警告用语，要求人员远离危险区域。", phonics: "stay 读 /steɪ/，clear 读 /klɪr/，of 读 /ɒv/。", collocations: [["stay clear of equipment", "远离设备"], ["stay clear of area", "远离区域"], ["stay clear of danger", "远离危险"]], examples: [["Stay clear of the high voltage area.", "远离高压区域。"], ["Please stay clear of the work zone.", "请远离工作区域。"]] },
      { w: "everyone", ipa: "/ˈɛv.ri.wʌn/", pos: "代词", cn: "所有人；大家", memory: "everyone = 所有人/大家。\n安全警告通常对所有人发出，确保没有人处于危险中。", phonics: "ev 读 /ɛv/，ry 读 /ri/，one 读 /wʌn/。", collocations: [["everyone please", "大家请"], ["everyone stay clear", "所有人远离"], ["everyone evacuate", "所有人撤离"]], examples: [["Everyone, please evacuate now.", "所有人，请立即撤离。"], ["Everyone, please wear PPE.", "所有人，请穿戴防护用品。"]] },
    ],
    phrases: [
      { p: "stay clear of", ipa: "/steɪ klɪr ɒv/", cn: "远离", why: "stay clear of = 远离/避开。这是安全警告的标准用语，要求人员远离危险区域或设备。" },
    ],
    grammar: [
      { q: "stay clear of 和 keep away from 有什么区别？", a: "stay clear of = 远离（更强调保持距离）\nkeep away from = 避开（更强调不要靠近）\n✅ Stay clear of the equipment.（远离设备 → 保持距离）\n✅ Keep away from the high voltage area.（避开高压区域 → 不要靠近）\n两者意思相近，stay clear of 更正式。" },
    ],
    pattern: "Everyone, please stay clear of the + 危险区域/设备",
    patternExamples: [
      { en: "Everyone, please stay clear of the work area.", cn: "所有人，请远离工作区域。", words: [{ w: "everyone", ipa: "/ˈɛvriwʌn/", cn: "大家", phonics: "every 读 /ɛvri/，one 读 /wʌn/" }, { w: "clear", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }, { w: "area", ipa: "/ˈeəriə/", cn: "区域", phonics: "a 读 /eə/，rea 读 /riə/" }] },
      { en: "Everyone, please stay clear of the high voltage zone.", cn: "所有人，请远离高压区域。", words: [{ w: "everyone", ipa: "/ˈɛvriwʌn/", cn: "大家", phonics: "every 读 /ɛvri/，one 读 /wʌn/" }, { w: "clear", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }, { w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }] },
      { en: "Everyone, please stay clear of the testing area.", cn: "所有人，请远离测试区域。", words: [{ w: "everyone", ipa: "/ˈɛvriwʌn/", cn: "大家", phonics: "every 读 /ɛvri/，one 读 /wʌn/" }, { w: "clear", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }, { w: "testing", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
    ],
    thinking: "操作前清场是电气安全的基本要求。\n清场要求：① 非操作人员撤离到安全距离外 ② 操作区域设置警戒带 ③ 确认无人处于危险位置 ④ 只有授权操作人员可以留在现场。\n安全距离：低压设备 1米，高压设备 3米以上。",
    pronunciation: "everyone 的 ev 读 /ɛv/，重音在第一音节。\nclear 的 cl 读 /kl/，ear 读 /ɪr/。\n节奏：EV-ery-one ｜ please STAY CLEAR ｜ of the e-QUIP-ment.",
    quiz: [
      { q: "所有人，请远离高压区域，怎么说？", a: "Everyone, please stay clear of the high voltage area." },
      { q: "电气操作的安全距离是多少？", a: "电气操作的安全距离：低压设备（<1000V）至少1米，高压设备（>1000V）至少3米。具体安全距离应根据电压等级和当地安全标准确定。" },
    ],
  },
  {
    id: 1331,
    en: "Please open the circuit breaker.",
    cn: "请分闸断路器。",
    ipa: "/pliːz ˈoʊ.pən ðə ˈsɜːr.kɪt ˈbreɪ.kər/",
    tags: ["第1331句", "分闸操作", "★★★★★"],
    when: "倒闸操作的第一步：分闸断路器（断开电路）。open the circuit breaker 是分闸的标准术语。",
    words: [
      { w: "open", ipa: "/ˈoʊ.pən/", pos: "动词", cn: "分闸；断开", memory: "① open = 打开/分闸。\n电气术语中，open = 分闸（断开电路），close = 合闸（接通电路）。\n注意：open the breaker = 分闸（断开），不是'打开断路器外壳'。", phonics: "o 读长音 /oʊ/，pen 读 /pən/。", collocations: [["open the breaker", "分闸断路器"], ["open the switch", "分闸开关"], ["open circuit", "断路"]], examples: [["Open the main breaker first.", "先分闸主断路器。"], ["The breaker has been opened.", "断路器已分闸。"]] },
    ],
    phrases: [
      { p: "open the circuit breaker", ipa: "/ˈoʊ.pən ðə ˈsɜːr.kɪt ˈbreɪ.kər/", cn: "分闸断路器", why: "open + the circuit breaker = 分闸断路器。这是断开电路的标准操作，是倒闸操作的第一步。" },
    ],
    grammar: [
      { q: "open 和 trip 有什么区别？", a: "open = 分闸（主动断开电路）\ntrip = 跳闸（保护动作自动断开）\n✅ Please open the circuit breaker.（请分闸断路器 → 主动操作）\n✅ The circuit breaker tripped.（断路器跳闸了 → 保护动作）\nopen 是人为操作，trip 是自动保护。" },
    ],
    pattern: "Please open the + 开关设备",
    patternExamples: [
      { en: "Please open the isolator switch.", cn: "请分闸隔离开关。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "Please open the main switch.", cn: "请分闸主开关。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "Please open the grounding switch.", cn: "请分闸接地开关。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
    ],
    thinking: "分闸操作是倒闸操作的第一步。\n分闸前检查：① 确认是正确的断路器 ② 确认负载已转移或允许断开 ③ 确认操作人员处于安全位置。\n分闸操作：① 操作机构分闸 ② 确认位置指示器显示'OPEN' ③ 确认无负载电流。\n分闸后：设备已断电，可以进行后续操作。",
    pronunciation: "open 的 o 读长音 /oʊ/。\ncircuit breaker 读 /ˈsɜːr.kɪt ˈbreɪ.kər/。\n节奏：Please O-pen ｜ the CIR-cuit BREAK-er.",
    quiz: [
      { q: "请分闸隔离开关，怎么说？", a: "Please open the isolator switch." },
      { q: "open 和 trip 在电气操作中有什么区别？", a: "open = 分闸（人为主动断开电路的操作）；trip = 跳闸（保护装置自动断开电路的动作）。open 是计划内的操作，trip 是故障时的保护动作。" },
    ],
  },
  {
    id: 1332,
    en: "Please confirm the breaker is open.",
    cn: "请确认断路器已经分闸。",
    ipa: "/pliːz kənˈfɜːrm ðə ˈbreɪ.kər ɪz ˈoʊ.pən/",
    tags: ["第1332句", "分闸确认", "★★★★★"],
    when: "分闸操作后，必须确认断路器确实处于分闸状态。the breaker is open 表示断路器处于分闸状态。",
    words: [
      { w: "is open", ipa: "/ɪz ˈoʊ.pən/", pos: "动词短语", cn: "处于分闸状态", memory: "is + open = 处于分闸状态（形容词用法）。\nopen 在这里是形容词，表示'断开的/分闸的'状态。\n确认断路器已分闸是继续后续操作的前提。", phonics: "is 读 /ɪz/，open 读 /ˈoʊ.pən/。", collocations: [["breaker is open", "断路器已分闸"], ["switch is open", "开关已分闸"], ["circuit is open", "电路已断开"]], examples: [["Confirm the breaker is open.", "确认断路器已分闸。"], ["The breaker is now open.", "断路器现在已分闸。"]] },
    ],
    phrases: [
      { p: "the breaker is open", ipa: "/ðə ˈbreɪ.kər ɪz ˈoʊ.pən/", cn: "断路器已分闸", why: "the breaker + is open = 断路器已分闸。这是确认断路器处于分闸状态的标准表述。" },
    ],
    grammar: [
      { q: "the breaker is open 和 the breaker has been opened 有什么区别？", a: "the breaker is open = 断路器处于分闸状态（强调当前状态）\nthe breaker has been opened = 断路器已被分闸（强调操作完成）\n✅ Confirm the breaker is open.（确认断路器已分闸 → 确认状态）\n✅ The breaker has been opened successfully.（断路器已成功分闸 → 报告操作完成）\n操作用 is open（确认状态），报告用 has been opened（报告完成）。" },
    ],
    pattern: "Please confirm the + 设备 + is + 状态",
    patternExamples: [
      { en: "Please confirm the switch is closed.", cn: "请确认开关已合闸。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }, { w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "Please confirm the system is offline.", cn: "请确认系统已离线。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please confirm the power is off.", cn: "请确认电源已关闭。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }, { w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }] },
    ],
    thinking: "确认断路器已分闸是安全操作的关键步骤。\n确认方法：① 查看位置指示器（显示'OPEN'）② 检查机械指示（手柄位置）③ 测量无电流 ④ 控制室确认遥信信号。\n必须多重确认，不能仅凭一种方式判断。",
    pronunciation: "is 读 /ɪz/，open 读 /ˈoʊ.pən/。\n节奏：Please con-FIRM ｜ the BREAK-er ｜ is O-pen.",
    quiz: [
      { q: "请确认开关已合闸，怎么说？", a: "Please confirm the switch is closed." },
      { q: "确认断路器已分闸有哪些方法？", a: "确认断路器已分闸的方法：① 查看位置指示器显示'OPEN' ② 检查机械指示手柄位置 ③ 测量确认无负载电流 ④ 控制室确认遥信信号状态。必须多重确认确保安全。" },
    ],
  },
  {
    id: 1333,
    en: "Please check the breaker position indicator.",
    cn: "请检查断路器位置指示。",
    ipa: "/pliːz tʃɛk ðə ˈbreɪ.kər pəˈzɪʃ.ən ˈɪn.dɪ.keɪ.tər/",
    tags: ["第1333句", "位置指示", "★★★★★"],
    when: "通过检查位置指示器确认断路器的实际位置。position indicator 是位置指示器的标准术语。",
    words: [
      { w: "position indicator", ipa: "/pəˈzɪʃ.ən ˈɪn.dɪ.keɪ.tər/", pos: "名词短语", cn: "位置指示器", memory: "① position = 位置；② indicator = 指示器。\nposition indicator = 位置指示器，用于显示断路器的分/合状态。\n常见指示：OPEN（分闸）/ CLOSED（合闸）。", phonics: "position 读 /pəˈzɪʃ.ən/，indicator 读 /ˈɪn.dɪ.keɪ.tər/。", collocations: [["position indicator", "位置指示器"], ["breaker position", "断路器位置"], ["check indicator", "检查指示器"]], examples: [["Check the position indicator.", "检查位置指示器。"], ["The indicator shows OPEN.", "指示器显示分闸。"]] },
      { w: "check", ipa: "/tʃɛk/", pos: "动词", cn: "检查；查看", memory: "check = 检查/查看。\n比 verify 更日常，用于一般性的检查确认。", phonics: "ch 读 /tʃ/，eck 读 /ɛk/。", collocations: [["check the indicator", "检查指示器"], ["check the position", "检查位置"], ["check the status", "检查状态"]], examples: [["Please check the status.", "请检查状态。"], ["Check the connections.", "检查连接。"]] },
    ],
    phrases: [
      { p: "breaker position indicator", ipa: "/ˈbreɪ.kər pəˈzɪʃ.ən ˈɪn.dɪ.keɪ.tər/", cn: "断路器位置指示器", why: "breaker + position + indicator = 断路器位置指示器。这是显示断路器分/合状态的装置，是确认断路器位置的主要依据。" },
    ],
    grammar: [
      { q: "check 和 inspect 有什么区别？", a: "check = 检查（一般性查看）\ninspect = 检查（仔细检查，通常有标准）\n✅ Please check the position indicator.（请检查位置指示器 → 查看状态）\n✅ Please inspect the equipment carefully.（请仔细检查设备 → 详细检查）\n日常查看用 check，详细检查用 inspect。" },
    ],
    pattern: "Please check the + 指示装置",
    patternExamples: [
      { en: "Please check the voltage indicator.", cn: "请检查电压指示器。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }] },
      { en: "Please check the alarm panel.", cn: "请检查告警面板。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "panel", ipa: "/ˈpænl/", cn: "面板", phonics: "pan 读 /pæn/，el 读 /l/" }] },
      { en: "Please check the status light.", cn: "请检查状态灯。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
    ],
    thinking: "位置指示器是确认断路器状态的主要装置。\n指示器类型：① 机械指示（手柄位置、机械标志）② 电气指示（LED灯、数字显示）③ 远程指示（控制室遥信信号）。\n指示器可能故障，必须结合多种方式确认：位置指示器 + 电流测量 + 机械位置。",
    pronunciation: "position 的 po 读 /pə/，si 读 /zɪ/。\nindicator 的 in 读 /ɪn/，di 读 /dɪ/。\n节奏：Please CHECK ｜ the BREAK-er po-SI-tion IN-di-ca-tor.",
    quiz: [
      { q: "请检查电压指示器，怎么说？", a: "Please check the voltage indicator." },
      { q: "断路器位置指示器有哪些类型？", a: "断路器位置指示器类型：① 机械指示（手柄位置、机械标志）② 电气指示（LED灯、数字显示）③ 远程指示（控制室遥信信号）。必须结合多种方式确认断路器位置。" },
    ],
  },
  {
    id: 1334,
    en: "Please verify there is no load current.",
    cn: "请确认已经没有负载电流。",
    ipa: "/pliːz ˈvɛr.ɪ.faɪ ðɛr ɪz noʊ loʊd ˈkʌr.ənt/",
    tags: ["第1334句", "电流确认", "★★★★★"],
    when: "分闸后必须确认没有负载电流，确保电路已完全断开。load current 是负载电流的标准术语。",
    words: [
      { w: "load current", ipa: "/loʊd ˈkʌr.ənt/", pos: "名词短语", cn: "负载电流", memory: "① load = 负载；② current = 电流。\nload current = 负载电流，指电路中流过的正常工作电流。\n分闸后应该没有负载电流，如果有电流说明分闸不完全或有其他问题。", phonics: "load 读 /loʊd/，current 读 /ˈkʌr.ənt/。", collocations: [["load current", "负载电流"], ["no current", "无电流"], ["measure current", "测量电流"]], examples: [["There is no load current.", "没有负载电流。"], ["Measure the load current.", "测量负载电流。"]] },
      { w: "there is no", ipa: "/ðɛr ɪz noʊ/", pos: "短语", cn: "没有", memory: "there is no + 名词 = 没有...。\n用于确认某个事物不存在。", phonics: "there 读 /ðɛr/，is 读 /ɪz/，no 读 /noʊ/。", collocations: [["there is no current", "没有电流"], ["there is no voltage", "没有电压"], ["there is no alarm", "没有告警"]], examples: [["There is no voltage.", "没有电压。"], ["There is no alarm reported.", "没有报告告警。"]] },
    ],
    phrases: [
      { p: "there is no load current", ipa: "/ðɛr ɪz noʊ loʊd ˈkʌr.ənt/", cn: "没有负载电流", why: "there is no + load current = 没有负载电流。这是确认电路已完全断开的重要指标，分闸后必须确认无电流。" },
    ],
    grammar: [
      { q: "there is no 和 there is not any 有什么区别？", a: "there is no = 没有（更简洁）\nthere is not any = 没有任何（更强调）\n✅ There is no load current.（没有负载电流 → 简洁）\n✅ There is not any current flowing.（没有任何电流流过 → 强调）\n日常操作用 there is no，强调时用 there is not any。" },
    ],
    pattern: "Please verify there is no + 检查项",
    patternExamples: [
      { en: "Please verify there is no voltage.", cn: "请确认没有电压。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }] },
      { en: "Please verify there is no pressure.", cn: "请确认没有压力。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }] },
      { en: "Please verify there is no leakage.", cn: "请确认没有泄漏。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
    ],
    thinking: "确认无负载电流是安全操作的重要步骤。\n测量方法：① 电流表测量 ② 钳形电流表 ③ 监控系统读数。\n无电流的意义：① 确认断路器已完全断开 ② 确认可以进行后续操作 ③ 确认设备已断电。\n如果有电流：立即停止操作，检查原因。",
    pronunciation: "load 的 oa 读长音 /oʊ/。\ncurrent 的 cur 读 /kʌr/，rent 读 /rənt/。\n节奏：Please VER-i-fy ｜ THERE is NO ｜ LOAD CUR-rent.",
    quiz: [
      { q: "请确认没有电压，怎么说？", a: "Please verify there is no voltage." },
      { q: "如何测量负载电流？", a: "测量负载电流的方法：① 使用电流表串联测量 ② 使用钳形电流表非接触测量 ③ 查看监控系统电流读数。分闸后应确认无负载电流才能继续操作。" },
    ],
  },
  {
    id: 1335,
    en: "Please close the grounding switch.",
    cn: "请合上接地开关。",
    ipa: "/pliːz kloʊz ðə ˈɡraʊn.dɪŋ swɪtʃ/",
    tags: ["第1335句", "接地操作", "★★★★★"],
    when: "分闸并确认无电流后，合上接地开关将设备接地，确保操作人员安全。grounding switch 是接地开关的标准术语。",
    words: [
      { w: "grounding switch", ipa: "/ˈɡraʊn.dɪŋ swɪtʃ/", pos: "名词短语", cn: "接地开关", memory: "① grounding = 接地；② switch = 开关。\ngrounding switch = 接地开关，用于将设备接地保护操作人员。\n接地开关合上后，设备与大地连接，即使误送电也不会触电。", phonics: "ground 读 /ɡraʊnd/，ing 读 /ɪŋ/，switch 读 /swɪtʃ/。", collocations: [["grounding switch", "接地开关"], ["close grounding switch", "合接地开关"], ["open grounding switch", "分接地开关"]], examples: [["Close the grounding switch.", "合上接地开关。"], ["The grounding switch is closed.", "接地开关已合上。"]] },
      { w: "close", ipa: "/kloʊz/", pos: "动词", cn: "合闸；闭合", memory: "close = 关闭/合闸。\n电气术语中，close = 合闸（接通电路），与 open（分闸）相对。\n注意：close the grounding switch = 合接地开关（接通接地）。", phonics: "cl 读 /kl/，ose 读 /oʊz/。", collocations: [["close the switch", "合上开关"], ["close the breaker", "合闸断路器"], ["close circuit", "闭合电路"]], examples: [["Close the main breaker.", "合上主断路器。"], ["The switch has been closed.", "开关已合上。"]] },
    ],
    phrases: [
      { p: "close the grounding switch", ipa: "/kloʊz ðə ˈɡraʊn.dɪŋ swɪtʃ/", cn: "合上接地开关", why: "close + the grounding switch = 合上接地开关。这是将设备接地的安全操作，确保操作人员不会触电。" },
    ],
    grammar: [
      { q: "close 和 turn on 有什么区别？", a: "close = 合闸（专业术语，接通电路）\nturn on = 开启（日常用语，打开设备）\n✅ Please close the grounding switch.（请合上接地开关 → 专业术语）\n✅ Please turn on the power.（请开启电源 → 日常用语）\n电气操作用 close，日常用电用 turn on。" },
    ],
    pattern: "Please close the + 开关设备",
    patternExamples: [
      { en: "Please close the isolator switch.", cn: "请合上隔离开关。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "Please close the main switch.", cn: "请合上主开关。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "Please close the bypass switch.", cn: "请合上旁路开关。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
    ],
    thinking: "接地是电气安全的重要措施。\n接地的作用：① 将设备与大地连接 ② 防止误送电触电 ③ 释放设备残余电荷 ④ 为故障电流提供通路。\n接地前必须确认：① 断路器已分闸 ② 无负载电流 ③ 设备已隔离。\n接地后才能进行设备操作或维护。",
    pronunciation: "close 的 cl 读 /kl/，ose 读长音 /oʊz/。\ngrounding 的 gr 读 /ɡr/，ound 读 /aʊnd/。\n节奏：Please CLOSE ｜ the GROUND-ing SWITCH.",
    quiz: [
      { q: "请合上隔离开关，怎么说？", a: "Please close the isolator switch." },
      { q: "接地的作用是什么？", a: "接地的作用：① 将设备与大地连接确保人员安全 ② 防止误送电导致触电事故 ③ 释放设备中的残余电荷 ④ 为故障电流提供安全通路。接地是电气操作的重要安全措施。" },
    ],
  },
  {
    id: 1336,
    en: "Please verify the grounding switch position.",
    cn: "请确认接地开关位置。",
    ipa: "/pliːz ˈvɛr.ɪ.faɪ ðə ˈɡraʊn.dɪŋ swɪtʃ pəˈzɪʃ.ən/",
    tags: ["第1336句", "接地确认", "★★★★★"],
    when: "合上接地开关后，必须确认接地开关确实处于合闸位置，确保接地有效。",
    words: [
      { w: "grounding switch position", ipa: "/ˈɡraʊn.dɪŋ swɪtʃ pəˈzɪʃ.ən/", pos: "名词短语", cn: "接地开关位置", memory: "grounding switch + position = 接地开关位置。\n确认接地开关位置是为了确保接地有效，设备已安全接地。", phonics: "grounding 读 /ˈɡraʊn.dɪŋ/，switch 读 /swɪtʃ/，position 读 /pəˈzɪʃ.ən/。", collocations: [["grounding switch position", "接地开关位置"], ["verify position", "确认位置"], ["switch position", "开关位置"]], examples: [["Verify the grounding switch position.", "确认接地开关位置。"], ["The position is CLOSED.", "位置是合闸。"]] },
    ],
    phrases: [
      { p: "grounding switch position", ipa: "/ˈɡraʊn.dɪŋ swɪtʃ pəˈzɪʃ.ən/", cn: "接地开关位置", why: "grounding switch + position = 接地开关位置。确认接地开关处于合闸位置是确保设备安全接地的关键步骤。" },
    ],
    grammar: [
      { q: "position 和 status 有什么区别？", a: "position = 位置（物理状态，如合闸/分闸）\nstatus = 状态（工作状态，如正常/故障）\n✅ Verify the grounding switch position.（确认接地开关位置 → 合闸还是分闸）\n✅ Check the equipment status.（检查设备状态 → 正常还是故障）\nposition 指物理位置，status 指工作状态。" },
    ],
    pattern: "Please verify the + 设备 + position",
    patternExamples: [
      { en: "Please verify the breaker position.", cn: "请确认断路器位置。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
      { en: "Please verify the valve position.", cn: "请确认阀门位置。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "valve", ipa: "/vælv/", cn: "阀门", phonics: "valve 读 /vælv/" }] },
      { en: "Please verify the switch position.", cn: "请确认开关位置。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
    ],
    thinking: "确认接地开关位置是接地操作的最后验证。\n确认方法：① 查看位置指示器（显示'CLOSED'）② 检查机械位置（手柄位置）③ 测量接地电阻（应为零或接近零）④ 控制室确认遥信信号。\n接地开关必须完全合闸，接触良好，否则接地保护无效。",
    pronunciation: "grounding 的 gr 读 /ɡr/，ound 读 /aʊnd/。\nposition 的 po 读 /pə/，si 读 /zɪ/。\n节奏：Please VER-i-fy ｜ the GROUND-ing SWITCH po-SI-tion.",
    quiz: [
      { q: "请确认断路器位置，怎么说？", a: "Please verify the breaker position." },
      { q: "如何确认接地开关位置？", a: "确认接地开关位置的方法：① 查看位置指示器显示'CLOSED' ② 检查机械手柄位置 ③ 测量接地电阻应为零或接近零 ④ 控制室确认遥信信号。必须多重确认确保接地有效。" },
    ],
  },
  {
    id: 1337,
    en: "Please remove the lock before operating.",
    cn: "操作前请解除锁定。",
    ipa: "/pliːz rɪˈmuːv ðə lɒk bɪˈfɔːr ˈɒp.ə.reɪ.tɪŋ/",
    tags: ["第1337句", "解除锁定", "★★★★★"],
    when: "操作设备前需要解除安全锁定（LOTO）。remove the lock 是解除锁定的标准用语。",
    words: [
      { w: "remove", ipa: "/rɪˈmuːv/", pos: "动词", cn: "移除；解除", memory: "① re- = 离开；② move = 移动。\nremove = 移开 → 移除/解除。\nremove the lock = 解除锁定（移除安全锁）。", phonics: "re 读 /rɪ/，move 读 /muːv/。", collocations: [["remove the lock", "解除锁定"], ["remove the tag", "取下挂牌"], ["remove PPE", "脱下防护用品"]], examples: [["Remove the lock before operating.", "操作前解除锁定。"], ["The lock has been removed.", "锁定已解除。"]] },
      { w: "lock", ipa: "/lɒk/", pos: "名词", cn: "锁；锁定", memory: "lock = 锁/锁定。\nLOTO（Lock Out Tag Out）是安全锁定挂牌程序，防止误操作。", phonics: "l 读 /l/，ock 读 /ɒk/。", collocations: [["safety lock", "安全锁"], ["padlock", "挂锁"], ["lock out", "锁定"]], examples: [["Apply the safety lock.", "应用安全锁。"], ["The lock prevents operation.", "锁定防止操作。"]] },
    ],
    phrases: [
      { p: "remove the lock", ipa: "/rɪˈmuːv ðə lɒk/", cn: "解除锁定", why: "remove + the lock = 解除锁定。LOTO 程序中的解锁步骤，操作前需要解除安全锁定才能操作设备。" },
    ],
    grammar: [
      { q: "remove 和 unlock 有什么区别？", a: "remove = 移除（物理上拿走锁）\nunlock = 解锁（打开锁但不一定拿走）\n✅ Remove the lock before operating.（操作前解除锁定 → 拿走锁）\n✅ Unlock the door first.（先解锁门 → 打开锁）\nLOTO 操作用 remove（完全移除锁定装置）。" },
    ],
    pattern: "Please remove the + 安全装置 + before + 操作",
    patternExamples: [
      { en: "Please remove the tag before operating.", cn: "操作前请取下挂牌。", words: [{ w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "Please remove the cover before inspection.", cn: "检查前请取下保护盖。", words: [] },
      { en: "Please remove the barrier before access.", cn: "进入前请移除隔离栏。", words: [{ w: "access", ipa: "/ˈæksɛs/", cn: "门禁", phonics: "ac 读 /æk/，cess 读 /sɛs/" }] },
    ],
    thinking: "LOTO（Lock Out Tag Out）是电气安全的重要程序。\nLOTO 流程：① 通知相关人员 ② 分闸设备 ③ 上锁挂牌 ④ 确认无能量 ⑤ 进行操作 ⑥ 完成后解锁挂牌。\n解除锁定前必须确认：① 操作已完成 ② 设备已恢复 ③ 人员已撤离 ④ 获得授权。\n只有锁定的所有者才能解除锁定。",
    pronunciation: "remove 的 re 读 /rɪ/，move 读长音 /muːv/。\nlock 的 o 读短音 /ɒ/。\n节奏：Please re-MOVE ｜ the LOCK ｜ be-FORE OP-e-ra-ting.",
    quiz: [
      { q: "操作前请取下挂牌，怎么说？", a: "Please remove the tag before operating." },
      { q: "LOTO 程序包括哪些步骤？", a: "LOTO 程序步骤：① 通知相关人员 ② 分闸设备 ③ 上锁挂牌（Lock Out Tag Out）④ 确认无能量 ⑤ 进行操作 ⑥ 完成后解锁挂牌。只有锁定的所有者才能解除锁定。" },
    ],
  },
  {
    id: 1338,
    en: "Please remove the warning tag.",
    cn: "请取下警示挂牌。",
    ipa: "/pliːz rɪˈmuːv ðə ˈwɔːr.nɪŋ tæɡ/",
    tags: ["第1338句", "取下挂牌", "★★★★★"],
    when: "解除锁定后，同时取下警示挂牌。warning tag 是警示挂牌的标准术语，是 LOTO 程序的一部分。",
    words: [
      { w: "warning tag", ipa: "/ˈwɔːr.nɪŋ tæɡ/", pos: "名词短语", cn: "警示挂牌", memory: "① warning = 警告；② tag = 标签/挂牌。\nwarning tag = 警示挂牌，用于标识设备正在维护或锁定状态。\nLOTO 程序中的 Tag 就是警示挂牌。", phonics: "warn 读 /wɔːrn/，ing 读 /ɪŋ/，tag 读 /tæɡ/。", collocations: [["warning tag", "警示挂牌"], ["safety tag", "安全挂牌"], ["remove tag", "取下挂牌"]], examples: [["Remove the warning tag.", "取下警示挂牌。"], ["The tag indicates lockout.", "挂牌表示锁定状态。"]] },
    ],
    phrases: [
      { p: "warning tag", ipa: "/ˈwɔːr.nɪŋ tæɡ/", cn: "警示挂牌", why: "warning + tag = 警示挂牌。这是 LOTO 程序中的标识部分，用于警告他人设备正在维护或锁定。" },
    ],
    grammar: [
      { q: "tag 和 label 有什么区别？", a: "tag = 挂牌/标签（通常是悬挂的，可移除的）\nlabel = 标签（通常是粘贴的，固定的）\n✅ Remove the warning tag.（取下警示挂牌 → 悬挂的）\n✅ Check the equipment label.（检查设备标签 → 粘贴的）\nLOTO 用 tag（挂牌），设备铭牌用 label（标签）。" },
    ],
    pattern: "Please remove the + 标识物",
    patternExamples: [
      { en: "Please remove the safety sign.", cn: "请取下安全标志。", words: [{ w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }, { w: "sign", ipa: "/saɪn/", cn: "签字", phonics: "sign 读 /saɪn/" }] },
      { en: "Please remove the warning sign.", cn: "请取下警告标志。", words: [{ w: "warning", ipa: "/ˈwɔːrnɪŋ/", cn: "警告", phonics: "warn 读 /wɔːrn/，ing 读 /ɪŋ/" }, { w: "sign", ipa: "/saɪn/", cn: "签字", phonics: "sign 读 /saɪn/" }] },
      { en: "Please remove the barrier tape.", cn: "请取下隔离带。", words: [] },
    ],
    thinking: "警示挂牌是 LOTO 程序的重要组成部分。\n挂牌内容：① 锁定人姓名 ② 锁定时间 ③ 锁定原因 ④ 联系方式。\n挂牌的作用：① 警告他人设备已锁定 ② 标识锁定责任人 ③ 防止他人误操作。\n取下挂牌意味着锁定已解除，设备可以操作。",
    pronunciation: "warning 的 warn 读 /wɔːrn/，ing 读 /ɪŋ/。\ntag 的 a 读短音 /æ/。\n节奏：Please re-MOVE ｜ the WARN-ing TAG.",
    quiz: [
      { q: "请取下安全标志，怎么说？", a: "Please remove the safety sign." },
      { q: "警示挂牌上通常包含哪些信息？", a: "警示挂牌通常包含：① 锁定人姓名 ② 锁定时间 ③ 锁定原因/工作内容 ④ 联系方式 ⑤ 预计完成时间。这些信息帮助他人了解锁定情况和责任人。" },
    ],
  },
  {
    id: 1339,
    en: "Please prepare to close the circuit breaker.",
    cn: "请准备合闸断路器。",
    ipa: "/pliːz prɪˈpɛr tuː kloʊz ðə ˈsɜːr.kɪt ˈbreɪ.kər/",
    tags: ["第1339句", "准备合闸", "★★★★★"],
    when: "完成设备操作后，准备恢复供电，需要合闸断路器。这是合闸前的准备指令。",
    words: [
      { w: "prepare to", ipa: "/prɪˈpɛr tuː/", pos: "动词短语", cn: "准备", memory: "① prepare = 准备；② to = 去做某事。\nprepare to + 动词 = 准备做某事。\n合闸前的准备工作包括：确认设备已恢复、人员已撤离、接地已断开。", phonics: "pre 读 /prɪ/，pare 读 /pɛr/，to 读 /tuː/。", collocations: [["prepare to close", "准备合闸"], ["prepare to start", "准备开始"], ["prepare for operation", "准备操作"]], examples: [["Prepare to close the breaker.", "准备合闸断路器。"], ["We are preparing to start.", "我们准备开始。"]] },
    ],
    phrases: [
      { p: "prepare to close", ipa: "/prɪˈpɛr tuː kloʊz/", cn: "准备合闸", why: "prepare to + close = 准备合闸。这是合闸操作前的准备指令，确保所有合闸前的准备工作已完成。" },
    ],
    grammar: [
      { q: "prepare to 和 be ready to 有什么区别？", a: "prepare to = 准备做（强调准备过程）\nbe ready to = 准备好做（强调准备完成的状态）\n✅ Please prepare to close the breaker.（请准备合闸 → 做准备工作）\n✅ We are ready to close the breaker.（我们准备好合闸 → 准备已完成）\n操作用 prepare to（准备中），状态用 be ready to（已准备好）。" },
    ],
    pattern: "Please prepare to + 操作动作",
    patternExamples: [
      { en: "Please prepare to open the valve.", cn: "请准备打开阀门。", words: [{ w: "valve", ipa: "/vælv/", cn: "阀门", phonics: "valve 读 /vælv/" }] },
      { en: "Please prepare to start the system.", cn: "请准备启动系统。", words: [{ w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please prepare to switch power.", cn: "请准备切换电源。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }] },
    ],
    thinking: "合闸前的准备工作至关重要。\n合闸前检查清单：① 设备操作已完成 ② 接地开关已断开 ③ 所有工具已移除 ④ 人员已撤离到安全区域 ⑤ 设备保护已投入 ⑥ 控制室已确认。\n只有所有检查项都通过，才能准备合闸。",
    pronunciation: "prepare 的 pre 读 /prɪ/，pare 读 /pɛr/。\nclose 读 /kloʊz/。\n节奏：Please pre-PARE ｜ to CLOSE ｜ the CIR-cuit BREAK-er.",
    quiz: [
      { q: "请准备启动系统，怎么说？", a: "Please prepare to start the system." },
      { q: "合闸前需要检查哪些项目？", a: "合闸前检查清单：① 设备操作已完成 ② 接地开关已断开 ③ 所有工具已移除 ④ 人员已撤离到安全区域 ⑤ 设备保护已投入 ⑥ 控制室已确认可以合闸。" },
    ],
  },
  {
    id: 1340,
    en: "Please close the circuit breaker now.",
    cn: "现在请执行合闸。",
    ipa: "/pliːz kloʊz ðə ˈsɜːr.kɪt ˈbreɪ.kər naʊ/",
    tags: ["第1340句", "执行合闸", "★★★★★"],
    when: "所有准备工作完成后，发出合闸指令。now 强调立即执行，这是正式的操作指令。",
    words: [
      { w: "now", ipa: "/naʊ/", pos: "副词", cn: "现在", memory: "now = 现在/立即。\n操作指令中加 now 表示立即执行，是正式的操作命令。", phonics: "n 读 /n/，ow 读 /aʊ/。", collocations: [["close now", "立即合闸"], ["start now", "立即开始"], ["proceed now", "立即继续"]], examples: [["Close the breaker now.", "立即合闸断路器。"], ["Proceed with the operation now.", "立即继续操作。"]] },
    ],
    phrases: [
      { p: "close the circuit breaker now", ipa: "/kloʊz ðə ˈsɜːr.kɪt ˈbreɪ.kər naʊ/", cn: "现在执行合闸", why: "close the circuit breaker + now = 现在执行合闸。这是正式的操作指令，now 强调立即执行。" },
    ],
    grammar: [
      { q: "Please close 和 Close 有什么区别？", a: "Please close = 请合闸（礼貌的请求）\nClose = 合闸（直接的命令）\n✅ Please close the circuit breaker now.（现在请合闸 → 礼貌但明确）\n✅ Close the circuit breaker!（合闸断路器！→ 紧急命令）\n日常操作用 Please close，紧急情况用 Close。" },
    ],
    pattern: "Please + 操作动作 + now",
    patternExamples: [
      { en: "Please open the valve now.", cn: "现在请打开阀门。", words: [{ w: "valve", ipa: "/vælv/", cn: "阀门", phonics: "valve 读 /vælv/" }] },
      { en: "Please start the system now.", cn: "现在请启动系统。", words: [{ w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please switch to backup now.", cn: "现在请切换到备用。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "backup", ipa: "/ˈbækʌp/", cn: "备份", phonics: "back 读 /bæk/，up 读 /ʌp/" }] },
    ],
    thinking: "合闸操作是恢复供电的关键步骤。\n合闸操作要点：① 确认所有准备工作已完成 ② 操作人员就位 ③ 发出合闸指令 ④ 执行合闸操作 ⑤ 确认合闸成功。\n合闸后需要：① 确认断路器已合闸 ② 确认电压已恢复 ③ 确认电流正常 ④ 监控设备运行5分钟。",
    pronunciation: "close 的 cl 读 /kl/，ose 读长音 /oʊz/。\nnow 的 ow 读 /aʊ/。\n节奏：Please CLOSE ｜ the CIR-cuit BREAK-er ｜ NOW.",
    quiz: [
      { q: "现在请启动系统，怎么说？", a: "Please start the system now." },
      { q: "合闸后需要确认哪些事项？", a: "合闸后需要确认：① 断路器已合闸（位置指示器显示CLOSED）② 电压已恢复正常 ③ 电流正常无异常 ④ 持续监控设备运行5分钟确认稳定。" },
    ],
  },
];

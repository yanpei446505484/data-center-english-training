// EXPORTS: MOCK_SENTENCES_PART11A

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART11A: ISentence[] = [
  {
    id: 301,
    en: "Please switch to Building B5.",
    cn: "请切换到B5楼。",
    ipa: "/pliːz swɪtʃ tuː ˈbɪl.dɪŋ ˌbiː ˈfaɪv/",
    tags: ["第301句", "BMS楼栋切换", "★★★★★"],
    when: "进入BMS高级操作环节。交接时需要演示BMS系统的楼栋切换功能，确认接班人熟悉如何在不同楼栋之间导航。Bridge Data Centres MY06C2园区包含B5、B7、C2三栋楼。",
    words: [
      { w: "switch to", ipa: "/swɪtʃ tuː/", pos: "动词短语", cn: "切换到", memory: "① switch = 切换/转换；② to = 到（目标）。\nswitch to 表示从一个状态/位置转换到另一个，是BMS系统中最常用的操作指令。\n对比：switch on = 打开（电源）；switch off = 关闭（电源）。", phonics: "switch 读 /swɪtʃ/，注意 sw 连读；to 读 /tuː/，弱读时 /tə/。", collocations: [["switch to", "切换到"], ["switch over to", "切换过去"], ["switch back to", "切换回"]], examples: [["Switch to the next floor.", "切换到下一层。"], ["Please switch to Building B7.", "请切换到B7楼。"]] },
      { w: "Building", ipa: "/ˈbɪl.dɪŋ/", pos: "名词", cn: "楼栋；建筑物", memory: "① build = 建造；② building = 建筑物/楼栋。\n数据中心园区通常按字母编号楼栋：B5、B7、C2。Building 缩写为 Bldg.，口语中直接说 building 全称。", phonics: "buil 读 /bɪl/，ding 读 /dɪŋ/，重音在第一音节。注意 ui 读 /ɪ/ 不读 /juː/。", collocations: [["building management", "楼栋管理"], ["building B5", "B5楼"], ["building number", "楼栋编号"]], examples: [["Building B5 has two data halls.", "B5楼有两个机房。"], ["Switch to Building C2.", "切换到C2楼。"]] },
    ],
    phrases: [
      { p: "switch to Building", ipa: "/swɪtʃ tuː ˈbɪl.dɪŋ/", cn: "切换到…楼", why: "switch to + 目标 = 切换到某处。BMS系统中楼栋是第一层导航，切换楼栋后才能看到该楼的楼层和设备。" },
    ],
    grammar: [
      { q: "switch to 和 go to 有什么区别？", a: "switch to = 切换（强调从A切换到B，有转换动作）\ngo to = 去到（强调目的地，无转换感）\n✅ Please switch to Building B5.（请切换到B5楼 → BMS系统操作，从当前楼栋切换过去）\n✅ Please go to Building B5.（请去B5楼 → 物理走过去）\nBMS系统操作用 switch to，因为是在屏幕上切换视图。" },
    ],
    pattern: "Please switch to Building + 楼栋编号",
    patternExamples: [
      { en: "Please switch to Building B7.", cn: "请切换到B7楼。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "building", ipa: "/ˈbɪldɪŋ/", cn: "建筑", phonics: "build 读 /bɪld/，ing 读 /ɪŋ/" }] },
      { en: "Please switch to Building C2.", cn: "请切换到C2楼。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "building", ipa: "/ˈbɪldɪŋ/", cn: "建筑", phonics: "build 读 /bɪld/，ing 读 /ɪŋ/" }] },
      { en: "Switch to Building B5 in the BMS.", cn: "在BMS中切换到B5楼。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "building", ipa: "/ˈbɪldɪŋ/", cn: "建筑", phonics: "build 读 /bɪld/，ing 读 /ɪŋ/" }, { w: "bms", ipa: "/ˌbiːˈɛmˈɛs/", cn: "楼控", phonics: "B-M-S 逐字母读" }] },
    ],
    thinking: "BMS高级操作是交接的实操环节，不是看告警，而是真实操作系统。\n操作层级：楼栋（Building）→ 楼层（Level）→ 房间（Room）→ 设备（Equipment）。\n先从最顶层的楼栋切换开始，逐级下钻。\nBridge Data Centres MY06C2园区有三栋楼：B5、B7、C2，交接时需要确认接班人能熟练切换。",
    pronunciation: "switch 的 sw 连读 /sw/，不要读成 /s/+/w/。\nBuilding 的 ui 读短音 /ɪ/：/ˈbɪl.dɪŋ/。\nB5 读 /ˌbiː ˈfaɪv/，字母和数字分别读。\n节奏：Please SWITCH ｜ to BUILD-ing ｜ B-FIVE.",
    quiz: [
      { q: "请切换到C2楼，怎么说？", a: "Please switch to Building C2." },
      { q: "switch to 和 go to 在BMS操作中有什么区别？", a: "switch to = 切换（系统操作，在屏幕上切换视图）；go to = 去（物理移动）。BMS系统操作用 switch to，因为是在软件中切换楼栋视图，不是走过去。" },
    ],
  },
  {
    id: 302,
    en: "Please switch to Building B7.",
    cn: "请切换到B7楼。",
    ipa: "/pliːz swɪtʃ tuː ˈbɪl.dɪŋ ˌbiː ˈsɛv.ən/",
    tags: ["第302句", "BMS楼栋切换", "★★★★★"],
    when: "从B5楼切换到B7楼，演示BMS楼栋间切换操作。B7楼是数据中心另一栋核心建筑，通常包含数据机房和配套设施。",
    words: [],
    phrases: [
      { p: "Building B7", ipa: "/ˈbɪl.dɪŋ ˌbiː ˈsɛv.ən/", cn: "B7楼", why: "B7 是楼栋编号，B + 数字。在BMS系统中，楼栋编号是导航的第一层级。" },
    ],
    grammar: [
      { q: "楼栋编号怎么读？", a: "B5 = /ˌbiː ˈfaɪv/（B + five）\nB7 = /ˌbiː ˈsɛv.ən/（B + seven）\nC2 = /ˌsiː ˈtuː/（C + two）\n字母单独读字母音，数字读完整单词。不要读成 'building fifty-seven'。" },
    ],
    pattern: "Please switch to Building + 编号",
    patternExamples: [
      { en: "Please switch to Building B5.", cn: "请切换到B5楼。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "building", ipa: "/ˈbɪldɪŋ/", cn: "建筑", phonics: "build 读 /bɪld/，ing 读 /ɪŋ/" }] },
      { en: "Please switch to Building C2.", cn: "请切换到C2楼。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "building", ipa: "/ˈbɪldɪŋ/", cn: "建筑", phonics: "build 读 /bɪld/，ing 读 /ɪŋ/" }] },
      { en: "Switch to Building B7 view.", cn: "切换到B7楼视图。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "building", ipa: "/ˈbɪldɪŋ/", cn: "建筑", phonics: "build 读 /bɪld/，ing 读 /ɪŋ/" }] },
    ],
    thinking: "楼栋切换是BMS操作的第一步。\n交接时通常按顺序演示：B5 → B7 → C2，确认每栋楼的BMS视图都能正常加载。\n如果某栋楼的BMS页面无法加载，需要报告IT支持。",
    pronunciation: "B7 读 /ˌbiː ˈsɛv.ən/，seven 的重音在第一音节。\n节奏：Please SWITCH ｜ to BUILD-ing ｜ B-SEV-en.",
    quiz: [
      { q: "B7怎么读？", a: "/ˌbiː ˈsɛv.ən/（B + seven）。字母B读字母音 /biː/，数字7读完整单词 seven。不要读成 'building seventy' 或其他错误读法。" },
    ],
  },
  {
    id: 303,
    en: "Please switch to Building C2.",
    cn: "请切换到C2楼。",
    ipa: "/pliːz swɪtʃ tuː ˈbɪl.dɪŋ ˌsiː ˈtuː/",
    tags: ["第303句", "BMS楼栋切换", "★★★★★"],
    when: "切换到C2楼，完成三栋楼的遍历。C2楼通常是园区的第三栋建筑，可能包含辅助设施或扩展机房。",
    words: [],
    phrases: [
      { p: "Building C2", ipa: "/ˈbɪl.dɪŋ ˌsiː ˈtuː/", cn: "C2楼", why: "C2 是楼栋编号，C + 数字。C系列楼栋可能是后期扩建的建筑，编号规则与B系列一致。" },
    ],
    grammar: [
      { q: "三栋楼的切换顺序重要吗？", a: "交接时没有严格顺序要求，但通常按编号从小到大：B5 → B7 → C2。\n这样做的目的是确保不遗漏任何一栋楼。\n每栋楼切换后需要等待BMS页面加载完成，确认数据正常显示后再切换到下一栋。" },
    ],
    pattern: "Please switch to Building + 编号",
    patternExamples: [
      { en: "Please switch to Building B5.", cn: "请切换到B5楼。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "building", ipa: "/ˈbɪldɪŋ/", cn: "建筑", phonics: "build 读 /bɪld/，ing 读 /ɪŋ/" }] },
      { en: "Please switch to Building B7.", cn: "请切换到B7楼。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "building", ipa: "/ˈbɪldɪŋ/", cn: "建筑", phonics: "build 读 /bɪld/，ing 读 /ɪŋ/" }] },
      { en: "Now switch to Building C2.", cn: "现在切换到C2楼。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "building", ipa: "/ˈbɪldɪŋ/", cn: "建筑", phonics: "build 读 /bɪld/，ing 读 /ɪŋ/" }] },
    ],
    thinking: "三栋楼切换完成后，楼栋级别的导航演示结束。\n下一步进入楼层切换（Level），在同一栋楼内切换不同楼层。\n楼栋 → 楼层 → 房间 → 设备，这是BMS导航的四级层级结构。",
    pronunciation: "C2 读 /ˌsiː ˈtuː/，C 读字母音 /siː/，2 读 two /tuː/。\n节奏：Please SWITCH ｜ to BUILD-ing ｜ C-TWO.",
    quiz: [
      { q: "C2怎么读？", a: "/ˌsiː ˈtuː/（C + two）。字母C读字母音 /siː/，数字2读 two。" },
      { q: "BMS导航的四级层级是什么？", a: "楼栋（Building）→ 楼层（Level）→ 房间（Room）→ 设备（Equipment）。先从最顶层的楼栋开始，逐级下钻到具体设备。" },
    ],
  },
  {
    id: 304,
    en: "Please switch to Level 1.",
    cn: "请切换到一楼。",
    ipa: "/pliːz swɪtʃ tuː ˈlɛv.əl wʌn/",
    tags: ["第304句", "BMS楼层切换", "★★★★★"],
    when: "楼栋切换完成后，进入楼层切换。一楼通常包含中压配电室、发电机房、冷冻机房等重型设备。",
    words: [
      { w: "Level", ipa: "/ˈlɛv.əl/", pos: "名词", cn: "楼层；层", memory: "① level = 水平/层级/楼层。\n② 在BMS系统中 Level = 楼层，缩写为 L（如 L1、L2、L3）。\n英式英语用 Level，美式英语也用 Floor，但BMS系统界面通常用 Level。", phonics: "lev 读 /lɛv/，el 读 /əl/，重音在第一音节。", collocations: [["Level 1", "一楼"], ["ground level", "地面层"], ["multi-level", "多层"]], examples: [["The UPS room is on Level 1.", "UPS房间在一楼。"], ["Switch to Level 2.", "切换到二楼。"]] },
    ],
    phrases: [
      { p: "switch to Level", ipa: "/swɪtʃ tuː ˈlɛv.əl/", cn: "切换到…楼层", why: "switch to + Level + 数字 = 切换到某楼层。楼层是BMS导航的第二层级，在同一栋楼内切换不同楼层的视图。" },
    ],
    grammar: [
      { q: "Level 和 Floor 有什么区别？", a: "Level = 层/楼层（BMS系统常用，更正式）\nFloor = 楼层（日常用语，美式更常用）\n✅ Please switch to Level 1.（请切换到一楼 → BMS系统操作）\n✅ The generator room is on the first floor.（发电机房在一楼 → 日常描述位置）\nBMS系统界面用 Level，口语交流用 Floor 也可以。" },
    ],
    pattern: "Please switch to Level + 数字",
    patternExamples: [
      { en: "Please switch to Level 2.", cn: "请切换到二楼。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }] },
      { en: "Please switch to Level 3.", cn: "请切换到三楼。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }] },
      { en: "Switch to Level 1 to check the generators.", cn: "切换到一楼查看发电机。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }, { w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "数据中心通常3层结构：\nL1（一楼）：重型设备层 — 中压配电室、发电机房、冷冻机房、变压器房\nL2（二楼）：数据机房层 — 服务器机柜、UPS房间、精密空调\nL3（三楼）：辅助层 — 监控中心、办公区、会议室\n楼层切换后可以看到该楼层所有房间的平面图。",
    pronunciation: "Level 的 e 读短音 /ɛ/：/ˈlɛv.əl/。\nL1 可读 /ˌɛl ˈwʌn/ 或 Level 1 /ˈlɛv.əl wʌn/。\n节奏：Please SWITCH ｜ to LEV-el ｜ ONE.",
    quiz: [
      { q: "请切换到三楼，怎么说？", a: "Please switch to Level 3." },
      { q: "BMS系统中 Level 和 Floor 哪个更常用？", a: "BMS系统界面用 Level（更正式、更标准化）；口语交流用 Floor 也可以。交接演示时统一用 Level，保持与系统界面一致。" },
    ],
  },
  {
    id: 305,
    en: "Please switch to Level 2.",
    cn: "请切换到二楼。",
    ipa: "/pliːz swɪtʃ tuː ˈlɛv.əl tuː/",
    tags: ["第305句", "BMS楼层切换", "★★★★★"],
    when: "从一楼切换到二楼。二楼通常是核心数据机房层，包含服务器机柜、UPS房间和精密空调。",
    words: [],
    phrases: [
      { p: "Level 2", ipa: "/ˈlɛv.əl tuː/", cn: "二楼", why: "二楼是数据中心的核心层，承载主要IT负载。交接时需要重点关注二楼的UPS和空调状态。" },
    ],
    grammar: [
      { q: "二楼通常有哪些关键设备？", a: "Level 2 关键设备：\n① UPS 房间（不间断电源）\n② 电池室（UPS配套）\n③ 精密空调（CRAC/CRAH）\n④ 服务器机柜（Rack）\n⑤ PDU 配电单元\n二楼是IT负载最集中的楼层，也是交接巡检的重点。" },
    ],
    pattern: "Please switch to Level + 数字",
    patternExamples: [
      { en: "Please switch to Level 1.", cn: "请切换到一楼。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }] },
      { en: "Please switch to Level 3.", cn: "请切换到三楼。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }] },
      { en: "Switch to Level 2 for the data hall.", cn: "切换到二楼查看数据机房。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }, { w: "data", ipa: "/ˈdeɪtə/", cn: "数据", phonics: "da 读 /deɪ/，ta 读 /tə/" }] },
    ],
    thinking: "楼层切换后，BMS会显示该楼层的平面图，标注所有房间位置。\n可以通过点击房间名称进入房间视图，查看该房间内的设备列表和环境参数（温湿度、烟感状态等）。",
    pronunciation: "Level 2 读 /ˈlɛv.əl tuː/，two 的 w 不发音。\n节奏：Please SWITCH ｜ to LEV-el ｜ TWO.",
    quiz: [
      { q: "二楼最重要的设备是什么？", a: "二楼最重要的设备：① UPS房间（供电保障）② 电池室（UPS后备）③ 精密空调（散热）④ 服务器机柜（IT负载）。二楼是IT负载最集中的楼层。" },
    ],
  },
  {
    id: 306,
    en: "Please switch to Level 3.",
    cn: "请切换到三楼。",
    ipa: "/pliːz swɪtʃ tuː ˈlɛv.əl θriː/",
    tags: ["第306句", "BMS楼层切换", "★★★★"],
    when: "切换到三楼。三楼通常包含辅助设施，如监控中心、办公区域或扩展机房。",
    words: [],
    phrases: [
      { p: "Level 3", ipa: "/ˈlɛv.əl θriː/", cn: "三楼", why: "三楼通常是辅助层，可能包含NOC（网络运营中心）、办公区或备用机房。交接时三楼巡检频率较低，但仍需确认BMS视图正常加载。" },
    ],
    grammar: [
      { q: "三层楼切换完成后下一步做什么？", a: "三层楼切换完成后，进入房间级别（Room）的导航。\n层级递进：Building → Level → Room → Equipment\n在某个楼层的平面图上，点击具体房间名称即可进入该房间的视图。\n例如在Level 1点击 'UPS Room' 进入UPS房间。" },
    ],
    pattern: "Please switch to Level + 数字",
    patternExamples: [
      { en: "Please switch to Level 1.", cn: "请切换到一楼。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }] },
      { en: "Please switch to Level 2.", cn: "请切换到二楼。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }] },
      { en: "Now switch to Level 3.", cn: "现在切换到三楼。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }] },
    ],
    thinking: "楼层切换演示完成（L1 → L2 → L3）。\n下一步进入房间级别：在BMS中打开具体房间（UPS Room、MV Room等）。\n房间是BMS导航的第三层级，每个房间内包含若干设备。",
    pronunciation: "Level 3 读 /ˈlɛv.əl θriː/，three 的 th 咬舌尖。\n节奏：Please SWITCH ｜ to LEV-el ｜ THREE.",
    quiz: [
      { q: "BMS导航的完整层级链是什么？", a: "Building（楼栋）→ Level（楼层）→ Room（房间）→ Equipment（设备）。四级层级逐级下钻，从宏观到微观。" },
    ],
  },
  {
    id: 307,
    en: "Please open the UPS room.",
    cn: "打开UPS房间。",
    ipa: "/pliːz ˈoʊ.pən ðə ˌjuː.piːˈɛs ruːm/",
    tags: ["第307句", "BMS房间导航", "★★★★★"],
    when: "楼层切换完成后，进入房间级别导航。UPS房间是数据中心最关键的房间之一，包含所有UPS设备和电池组。",
    words: [
      { w: "open", ipa: "/ˈoʊ.pən/", pos: "动词", cn: "打开（页面/视图）", memory: "① open = 打开（日常义）。\n② BMS语境中 open = 打开某个房间的视图/页面，不是物理开门。\nopen the UPS room = 在BMS系统中打开UPS房间的监控页面。", phonics: "o 读 /oʊ/，pen 读 /pən/，重音在第一音节。", collocations: [["open the room", "打开房间视图"], ["open the page", "打开页面"], ["open the dashboard", "打开仪表板"]], examples: [["Open the generator room.", "打开发电机房。"], ["Please open the MV room.", "请打开中压配电室。"]] },
      { w: "UPS room", ipa: "/ˌjuː.piːˈɛs ruːm/", pos: "名词", cn: "UPS房间", memory: "① UPS = Uninterruptible Power Supply（不间断电源）。\n② UPS room = 放置UPS设备和电池组的专用房间。\nUPS房间需要恒温恒湿，是数据中心供电保障的核心。", phonics: "UPS 逐字母读 /ˌjuː.piːˈɛs/；room 读 /ruːm/ 或 /rʊm/。", collocations: [["UPS room temperature", "UPS房间温度"], ["UPS room access", "UPS房间门禁"], ["UPS room alarm", "UPS房间告警"]], examples: [["The UPS room is on Level 2.", "UPS房间在二楼。"], ["Check the UPS room temperature.", "检查UPS房间温度。"]] },
    ],
    phrases: [
      { p: "open the UPS room", ipa: "/ˈoʊ.pən ðə ˌjuː.piːˈɛs ruːm/", cn: "打开UPS房间（视图）", why: "open + the + 房间名 = 打开某房间的BMS视图。点击后可以看到该房间内所有设备的状态和参数。" },
    ],
    grammar: [
      { q: "open 在BMS中是物理开门还是打开页面？", a: "BMS系统中的 open = 打开监控页面/视图，不是物理开门。\n✅ Please open the UPS room.（请在BMS中打开UPS房间的监控页面）\n✅ Please unlock the UPS room door.（请解锁UPS房间的门 → 物理开门）\n交接演示时用 open = 打开BMS页面视图。物理开门用 unlock / access。" },
    ],
    pattern: "Please open the + 房间名",
    patternExamples: [
      { en: "Please open the MV room.", cn: "请打开中压配电室。", words: [{ w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "Please open the generator room.", cn: "请打开发电机房。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "Open the transformer room.", cn: "打开变压器房。", words: [{ w: "transformer", ipa: "/trænsˈfɔːrmər/", cn: "变压器", phonics: "trans 读 /træns/，former 读 /fɔːrmər/" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
    ],
    thinking: "房间导航是BMS操作的第三层级。\n数据中心常见房间类型：\n① UPS Room（UPS间）② MV Room（中压配电室）③ Transformer Room（变压器房）\n④ Generator Room（发电机房）⑤ Battery Room（电池室）⑥ Chiller Room（冷冻机房）\n⑦ Fire Room（消防间）⑧ Control Room（监控中心）⑨ ATS Room（ATS间）⑩ PDU Room（PDU间）\n每个房间在BMS中有独立视图，显示该房间内的设备列表和环境参数。",
    pronunciation: "UPS 逐字母读 /ˌjuː.piːˈɛs/，不要读成一个单词。\nroom 读 /ruːm/（美式）或 /rʊm/（英式）。\n节奏：Please O-pen ｜ the U-P-S ROOM.",
    quiz: [
      { q: "打开中压配电室，怎么说？", a: "Please open the MV room." },
      { q: "BMS中 open the room 是什么意思？", a: "在BMS系统中打开该房间的监控页面/视图，不是物理开门。物理开门用 unlock / access。" },
    ],
  },
  {
    id: 308,
    en: "Please open the MV room.",
    cn: "打开中压配电室。",
    ipa: "/pliːz ˈoʊ.pən ðə ˌɛmˈviː ruːm/",
    tags: ["第308句", "BMS房间导航", "★★★★★"],
    when: "打开中压配电室视图。MV room 是中压开关柜和配电设备所在的房间，通常位于一楼。",
    words: [
      { w: "MV room", ipa: "/ˌɛmˈviː ruːm/", pos: "名词", cn: "中压配电室", memory: "① MV = Medium Voltage（中压，通常11kV或33kV）。\n② MV room = 中压配电室，放置中压开关柜、中压断路器、保护继电器等设备。\n中压是数据中心供电的第一级分配点，从外部电网引入高压后降压至中压。", phonics: "MV 逐字母读 /ˌɛmˈviː/；room 读 /ruːm/。", collocations: [["MV switchboard", "中压开关柜"], ["MV breaker", "中压断路器"], ["MV room access", "中压配电室门禁"]], examples: [["The MV room is on Level 1.", "中压配电室在一楼。"], ["Check the MV room temperature.", "检查中压配电室温度。"]] },
    ],
    phrases: [
      { p: "open the MV room", ipa: "/ˈoʊ.pən ðə ˌɛmˈviː ruːm/", cn: "打开中压配电室（视图）", why: "MV room 是供电入口，交接时需要确认中压系统无告警、开关柜状态正常。" },
    ],
    grammar: [
      { q: "MV、LV、HV 分别是什么？", a: "MV = Medium Voltage（中压，1kV-35kV）\nLV = Low Voltage（低压，<1kV，通常400V/230V）\nHV = High Voltage（高压，>35kV，通常132kV）\n数据中心供电路径：HV（132kV）→ MV（11kV/33kV）→ LV（400V/230V）→ IT设备。" },
    ],
    pattern: "Please open the + 房间名",
    patternExamples: [
      { en: "Please open the UPS room.", cn: "请打开UPS房间。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "Please open the LV room.", cn: "请打开低压配电室。", words: [{ w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "Open the MV room to check the switchboards.", cn: "打开中压配电室查看开关柜。", words: [{ w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }, { w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "中压配电室是数据中心供电链的起点（从电网引入后）。\n交接时需要确认：① 中压开关柜无告警 ② 保护继电器无跳闸 ③ 房间温度正常 ④ 门禁无异常打开。",
    pronunciation: "MV 逐字母读 /ˌɛmˈviː/，M 读 /ɛm/，V 读 /viː/。\n节奏：Please O-pen ｜ the M-V ROOM.",
    quiz: [
      { q: "MV、LV、HV 分别代表什么电压等级？", a: "HV = 高压（>35kV，通常132kV）；MV = 中压（1kV-35kV，通常11kV/33kV）；LV = 低压（<1kV，通常400V/230V）。数据中心供电路径是 HV → MV → LV → IT设备。" },
    ],
  },
  {
    id: 309,
    en: "Please open the transformer room.",
    cn: "打开变压器房。",
    ipa: "/pliːz ˈoʊ.pən ðə trænsˈfɔːr.mər ruːm/",
    tags: ["第309句", "BMS房间导航", "★★★★★"],
    when: "打开变压器房视图。变压器房放置中压到低压的降压变压器，是供电链中的关键节点。",
    words: [
      { w: "transformer room", ipa: "/trænsˈfɔːr.mər ruːm/", pos: "名词", cn: "变压器房", memory: "① transformer = 变压器（将中压降为低压）。\n② transformer room = 变压器房，放置多台降压变压器。\n变压器将MV（11kV）降压为LV（400V），供UPS和下游设备使用。", phonics: "trans 读 /træns/，form 读 /fɔːrm/，er 读 /ər/，重音在第二音节。", collocations: [["transformer room", "变压器房"], ["transformer temperature", "变压器温度"], ["transformer load", "变压器负载"]], examples: [["The transformer room is on Level 1.", "变压器房在一楼。"], ["Check the transformer oil temperature.", "检查变压器油温。"]] },
    ],
    phrases: [
      { p: "open the transformer room", ipa: "/ˈoʊ.pən ðə trænsˈfɔːr.mər ruːm/", cn: "打开变压器房（视图）", why: "变压器房交接时需要确认：变压器负载率、油温、绕组温度、冷却系统状态。" },
    ],
    grammar: [
      { q: "transformer room 和 MV room 有什么区别？", a: "MV room = 中压配电室（放置中压开关柜、断路器）\nTransformer room = 变压器房（放置降压变压器）\n两者可能相邻但功能不同：\nMV room 负责中压电的分配和保护；\nTransformer room 负责将中压降为低压。\n供电路径：MV Room → Transformer Room → LV Room/UPS Room。" },
    ],
    pattern: "Please open the + 房间名",
    patternExamples: [
      { en: "Please open the MV room.", cn: "请打开中压配电室。", words: [{ w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "Please open the generator room.", cn: "请打开发电机房。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "Open the transformer room to check the load.", cn: "打开变压器房查看负载。", words: [{ w: "transformer", ipa: "/trænsˈfɔːrmər/", cn: "变压器", phonics: "trans 读 /træns/，former 读 /fɔːrmər/" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }, { w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "变压器房交接重点：\n① 负载率（load percentage）：正常40%-70%，超过80%需关注\n② 油温（oil temperature）：正常60-80°C\n③ 绕组温度（winding temperature）：正常70-90°C\n④ 冷却系统（cooling system）：风扇/油泵运行状态\n⑤ 硅胶呼吸器（silica gel breather）：颜色是否正常",
    pronunciation: "transformer 重音在第二音节：/trænsˈfɔːr.mər/。\n注意 for 读 /fɔːr/，不是 /fər/。\n节奏：Please O-pen ｜ the trans-FOR-mer ROOM.",
    quiz: [
      { q: "变压器房交接时需要检查哪些参数？", a: "① 负载率（40%-70%正常）② 油温（60-80°C）③ 绕组温度（70-90°C）④ 冷却系统运行状态 ⑤ 硅胶呼吸器颜色。超过80%负载率需要关注。" },
    ],
  },
  {
    id: 310,
    en: "Please open the generator room.",
    cn: "打开发电机房。",
    ipa: "/pliːz ˈoʊ.pən ðə ˈdʒɛn.ə.reɪ.tər ruːm/",
    tags: ["第310句", "BMS房间导航", "★★★★★"],
    when: "打开发电机房视图。发电机房放置柴油发电机组，是市电中断时的最后一道供电保障。",
    words: [
      { w: "generator room", ipa: "/ˈdʒɛn.ə.reɪ.tər ruːm/", pos: "名词", cn: "发电机房", memory: "① generator = 发电机（柴油发电机组）。\n② generator room = 发电机房，放置多台柴油发电机组和日用油箱。\n发电机是数据中心应急供电的最后一道防线，市电中断时自动启动。", phonics: "gen 读 /dʒɛn/，er 读 /ər/，a 读 /eɪ/，tor 读 /tər/，重音在第一音节。", collocations: [["generator room", "发电机房"], ["generator fuel level", "发电机油位"], ["generator test", "发电机测试"]], examples: [["The generator room is on Level 1.", "发电机房在一楼。"], ["Check the generator fuel level.", "检查发电机油位。"]] },
    ],
    phrases: [
      { p: "open the generator room", ipa: "/ˈoʊ.pən ðə ˈdʒɛn.ə.reɪ.tər ruːm/", cn: "打开发电机房（视图）", why: "发电机房交接时需要确认：所有发电机处于自动模式、油位充足、无告警、上次测试结果正常。" },
    ],
    grammar: [
      { q: "generator room 里通常有什么设备？", a: "发电机房通常包含：\n① 柴油发电机组（diesel generators）× 多台\n② 日用油箱（day tank）\n③ 冷却系统（radiator + fan）\n④ 排气系统（exhaust system）\n⑤ 发电机控制面板（generator control panel）\n⑥ ATS 自动转换开关（可能也在发电机房或ATS间）" },
    ],
    pattern: "Please open the + 房间名",
    patternExamples: [
      { en: "Please open the UPS room.", cn: "请打开UPS房间。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "Please open the transformer room.", cn: "请打开变压器房。", words: [{ w: "transformer", ipa: "/trænsˈfɔːrmər/", cn: "变压器", phonics: "trans 读 /træns/，former 读 /fɔːrmər/" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "Open the generator room to check the fuel level.", cn: "打开发机房查看油位。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }, { w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "发电机房交接重点：\n① 模式：所有发电机必须在 auto（自动）模式\n② 油位：日用油箱 ≥ 80%\n③ 电池：启动电池电压正常\n④ 冷却液：水位正常\n⑤ 告警：无活动告警\n⑥ 上次测试：周测/月测结果正常",
    pronunciation: "generator 重音在第一音节：/ˈdʒɛn.ə.reɪ.tər/。\n注意 g 读 /dʒ/，不是 /g/。\n节奏：Please O-pen ｜ the GEN-er-a-tor ROOM.",
    quiz: [
      { q: "打开发电机房，怎么说？", a: "Please open the generator room." },
      { q: "发电机房交接时需要确认哪些事项？", a: "① 所有发电机在auto模式 ② 日用油箱油位≥80% ③ 启动电池电压正常 ④ 冷却液水位正常 ⑤ 无活动告警 ⑥ 上次周测/月测结果正常。" },
    ],
  },
  {
    id: 311,
    en: "Please open the battery room.",
    cn: "打开电池室。",
    ipa: "/pliːz ˈoʊ.pən ðə ˈbæt.ər.i ruːm/",
    tags: ["第311句", "BMS房间导航", "★★★★"],
    when: "打开电池室视图。电池室放置UPS配套的蓄电池组，是UPS后备时间的保障。",
    words: [
      { w: "battery room", ipa: "/ˈbæt.ər.i ruːm/", pos: "名词", cn: "电池室", memory: "① battery = 电池/蓄电池；② battery room = 电池室。\n电池室放置UPS配套的铅酸或锂电池组，市电中断时为UPS提供后备电力。\n电池室需要恒温（20-25°C），温度过高会缩短电池寿命。", phonics: "bat 读 /bæt/，ter 读 /tər/，y 读 /i/，重音在第一音节。", collocations: [["battery room", "电池室"], ["battery string", "电池组"], ["battery test", "电池测试"]], examples: [["The battery room is next to the UPS room.", "电池室在UPS房间旁边。"], ["Check the battery room temperature.", "检查电池室温度。"]] },
    ],
    phrases: [
      { p: "open the battery room", ipa: "/ˈoʊ.pən ðə ˈbæt.ər.i ruːm/", cn: "打开电池室（视图）", why: "电池室交接重点：温度（20-25°C）、无电池告警、上次放电测试结果。" },
    ],
    grammar: [],
    pattern: "Please open the + 房间名",
    patternExamples: [
      { en: "Please open the UPS room.", cn: "请打开UPS房间。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "Please open the chiller room.", cn: "请打开冷冻机房。", words: [{ w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "Open the battery room to check the temperature.", cn: "打开电池室查看温度。", words: [{ w: "battery", ipa: "/ˈbætəri/", cn: "电池", phonics: "bat 读 /bæt/，tery 读 /təri/" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }, { w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "电池室交接重点：\n① 温度：20-25°C（过高缩短寿命，过低降低容量）\n② 湿度：40%-60%\n③ 电池告警：无浮充/均充异常\n④ 电池外观：无鼓包、漏液、腐蚀\n⑤ 上次放电测试结果",
    pronunciation: "battery 重音在第一音节：/ˈbæt.ər.i/。\n注意 a 读 /æ/，不是 /ɑː/。\n节奏：Please O-pen ｜ the BAT-ter-y ROOM.",
    quiz: [
      { q: "电池室的理想温度范围是多少？", a: "20-25°C。温度过高（>30°C）会显著缩短电池寿命（每升高10°C寿命减半）；温度过低（<15°C）会降低电池放电容量。" },
    ],
  },
  {
    id: 312,
    en: "Please open the chiller room.",
    cn: "打开冷冻机房。",
    ipa: "/pliːz ˈoʊ.pən ðə ˈtʃɪl.ər ruːm/",
    tags: ["第312句", "BMS房间导航", "★★★★"],
    when: "打开冷冻机房视图。冷冻机房放置冷水机组，是数据中心制冷系统的核心。",
    words: [
      { w: "chiller room", ipa: "/ˈtʃɪl.ər ruːm/", pos: "名词", cn: "冷冻机房", memory: "① chiller = 冷水机组（制冷核心设备）；② chiller room = 冷冻机房。\n冷水机组产生冷冻水（chilled water），通过管道送到精密空调（CRAC/CRAH）为机房散热。\n冷冻机房通常位于一楼或屋顶。", phonics: "chill 读 /tʃɪl/，er 读 /ər/，重音在第一音节。ch 读 /tʃ/。", collocations: [["chiller room", "冷冻机房"], ["chiller unit", "冷水机组"], ["chiller plant", "冷冻站"]], examples: [["The chiller room is on Level 1.", "冷冻机房在一楼。"], ["Check the chiller supply temperature.", "检查冷冻水供水温度。"]] },
    ],
    phrases: [
      { p: "open the chiller room", ipa: "/ˈoʊ.pən ðə ˈtʃɪl.ər ruːm/", cn: "打开冷冻机房（视图）", why: "冷冻机房交接重点：冷冻水供水温度（通常6-7°C）、回水温度（12-14°C）、冷水机组运行台数。" },
    ],
    grammar: [],
    pattern: "Please open the + 房间名",
    patternExamples: [
      { en: "Please open the generator room.", cn: "请打开发电机房。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "Please open the fire room.", cn: "请打开消防间。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "Open the chiller room to check the water temperature.", cn: "打开冷冻机房查看水温。", words: [{ w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }, { w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "冷冻机房交接重点：\n① 冷冻水供水温度（CHWST）：6-7°C\n② 冷冻水回水温度（CHWRT）：12-14°C\n③ 冷水机组运行台数：N+1冗余\n④ 冷却水温度：28-35°C（热带地区偏高）\n⑤ 水泵运行状态\n⑥ 无告警",
    pronunciation: "chiller 重音在第一音节：/ˈtʃɪl.ər/。\nch 读 /tʃ/，不要读成 /k/。\n节奏：Please O-pen ｜ the CHIL-ler ROOM.",
    quiz: [
      { q: "冷冻水供水温度通常是多少？", a: "冷冻水供水温度（CHWST）通常为6-7°C。回水温度（CHWRT）通常为12-14°C。温差（ΔT）约6-7°C，说明热交换效率正常。" },
    ],
  },
  {
    id: 313,
    en: "Please open the fire protection room.",
    cn: "打开消防间。",
    ipa: "/pliːz ˈoʊ.pən ðə faɪər prəˈtɛk.ʃən ruːm/",
    tags: ["第313句", "BMS房间导航", "★★★★"],
    when: "打开消防间视图。消防间放置消防系统控制设备，包括气体灭火系统和消防水泵控制面板。",
    words: [
      { w: "fire protection", ipa: "/faɪər prəˈtɛk.ʃən/", pos: "名词", cn: "消防；消防保护", memory: "① fire = 火/火灾；② protection = 保护。\nfire protection = 消防保护系统，包括烟感探测器、气体灭火系统（FM200/Novec 1230）、消防水泵等。\n数据中心通常使用气体灭火（不用水），避免损坏IT设备。", phonics: "fire 读 /faɪər/，protection 读 /prəˈtɛk.ʃən/，重音在第二音节。", collocations: [["fire protection system", "消防系统"], ["fire protection room", "消防间"], ["fire alarm", "消防报警"]], examples: [["The fire protection system is armed.", "消防系统已布防。"], ["Check the fire protection panel.", "检查消防控制面板。"]] },
    ],
    phrases: [
      { p: "fire protection room", ipa: "/faɪər prəˈtɛk.ʃən ruːm/", cn: "消防间", why: "消防间放置消防系统的主控制面板、气体灭火瓶组状态、消防水泵控制面板。交接时需确认系统处于正常布防状态。" },
    ],
    grammar: [],
    pattern: "Please open the + 房间名",
    patternExamples: [
      { en: "Please open the control room.", cn: "请打开监控中心。", words: [{ w: "control", ipa: "/kənˈtroʊl/", cn: "控制", phonics: "con 读 /kən/，trol 读 /troʊl/" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "Please open the ATS room.", cn: "请打开ATS间。", words: [{ w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "Open the fire protection room to check the system status.", cn: "打开消防间查看系统状态。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "protection", ipa: "/prəˈtɛkʃən/", cn: "保护", phonics: "pro 读 /prə/，tection 读 /tɛkʃən/" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
    ],
    thinking: "消防系统交接重点：\n① 系统状态：armed（布防）/ disarmed（撤防）\n② 气体灭火瓶组压力：正常（绿色区域）\n③ 烟感/温感探测器：无告警、无故障\n④ 消防水泵：自动模式\n⑤ 手动报警按钮：无触发\n消防系统在维护工作期间可能需要临时撤防，交接时必须确认已恢复布防。",
    pronunciation: "fire 读 /faɪər/，ire 读 /aɪər/。\nprotection 重音在第二音节：/prəˈtɛk.ʃən/。\n节奏：Please O-pen ｜ the FIRE pro-TEC-tion ROOM.",
    quiz: [
      { q: "数据中心为什么用气体灭火而不用水？", a: "数据中心使用气体灭火（如FM200、Novec 1230）而不是水喷淋，因为：① 水会损坏IT设备 ② 气体灭火速度快（10秒内释放）③ 不留残留物 ④ 不会导致短路。水喷淋只用于非IT区域（如办公区、走廊）。" },
    ],
  },
  {
    id: 314,
    en: "Please open the control room.",
    cn: "打开监控中心。",
    ipa: "/pliːz ˈoʊ.pən ðə kənˈtroʊl ruːm/",
    tags: ["第314句", "BMS房间导航", "★★★★"],
    when: "打开监控中心视图。控制室/监控中心是值班工程师的工作场所，包含BMS工作站、CCTV监控屏和通讯设备。",
    words: [
      { w: "control room", ipa: "/kənˈtroʊl ruːm/", pos: "名词", cn: "监控中心；控制室", memory: "① control = 控制/监控；② control room = 监控中心/控制室。\n也叫 NOC（Network Operations Center）或 SOC（Security Operations Center）。\n值班工程师在控制室监控所有系统状态，是交接的物理地点。", phonics: "con 读 /kən/，trol 读 /troʊl/，重音在第二音节。", collocations: [["control room", "监控中心"], ["control panel", "控制面板"], ["control system", "控制系统"]], examples: [["The control room is on Level 2.", "监控中心在二楼。"], ["Report to the control room.", "到监控中心报到。"]] },
    ],
    phrases: [
      { p: "open the control room", ipa: "/ˈoʊ.pən ðə kənˈtroʊl ruːm/", cn: "打开监控中心（视图）", why: "控制室是BMS系统的核心工作站，打开控制室视图可以看到所有BMS工作站的在线状态和告警汇总。" },
    ],
    grammar: [],
    pattern: "Please open the + 房间名",
    patternExamples: [
      { en: "Please open the fire protection room.", cn: "请打开消防间。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "protection", ipa: "/prəˈtɛkʃən/", cn: "保护", phonics: "pro 读 /prə/，tection 读 /tɛkʃən/" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "Please open the ATS room.", cn: "请打开ATS间。", words: [{ w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "Open the control room to check the BMS workstations.", cn: "打开监控中心查看BMS工作站状态。", words: [{ w: "control", ipa: "/kənˈtroʊl/", cn: "控制", phonics: "con 读 /kən/，trol 读 /troʊl/" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }, { w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "控制室/监控中心是交接的核心场所。\n交接通常在控制室面对面进行，双方站在BMS工作站前，逐项确认系统状态。\nBMS控制室视图可以看到：① 工作站在线状态 ② CCTV摄像头画面 ③ 门禁事件 ④ 通讯系统状态。",
    pronunciation: "control 重音在第二音节：/kənˈtroʊl/。\n注意 o 读长音 /oʊ/。\n节奏：Please O-pen ｜ the con-TROL ROOM.",
    quiz: [
      { q: "NOC 和 SOC 分别是什么？", a: "NOC = Network Operations Center（网络运营中心），监控IT系统和网络；SOC = Security Operations Center（安全运营中心），监控物理安全和网络安全。数据中心通常将两者合并为统一控制室。" },
    ],
  },
  {
    id: 315,
    en: "Please open the ATS room.",
    cn: "打开ATS间。",
    ipa: "/pliːz ˈoʊ.pən ðə ˌeɪ.tiːˈɛs ruːm/",
    tags: ["第315句", "BMS房间导航", "★★★★"],
    when: "打开ATS间视图。ATS（自动转换开关）是市电和发电机之间自动切换的关键设备。",
    words: [
      { w: "ATS", ipa: "/ˌeɪ.tiːˈɛs/", pos: "名词（缩写）", cn: "自动转换开关", memory: "① ATS = Automatic Transfer Switch（自动转换开关）。\n② ATS 在市电和发电机之间自动切换，确保供电不中断。\n市电正常时 → ATS连接市电；市电中断时 → ATS自动切换到发电机。\n切换时间通常 < 200ms，UPS在此期间提供无缝供电。", phonics: "ATS 逐字母读 /ˌeɪ.tiːˈɛs/。", collocations: [["ATS room", "ATS间"], ["ATS switching", "ATS切换"], ["ATS test", "ATS测试"]], examples: [["The ATS room is next to the generator room.", "ATS间在发电机房旁边。"], ["The ATS switched to generator.", "ATS已切换到发电机。"]] },
    ],
    phrases: [
      { p: "open the ATS room", ipa: "/ˈoʊ.pən ðə ˌeɪ.tiːˈɛs ruːm/", cn: "打开ATS间（视图）", why: "ATS间交接重点：ATS当前连接源（市电/发电机）、上次切换测试结果、无告警。" },
    ],
    grammar: [],
    pattern: "Please open the + 房间名",
    patternExamples: [
      { en: "Please open the STS room.", cn: "请打开STS间。", words: [{ w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "Please open the PDU room.", cn: "请打开PDU间。", words: [{ w: "pdu", ipa: "/ˌpiːˈdiːˈjuː/", cn: "配电单元", phonics: "P-D-U 逐字母读" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "Open the ATS room to check the switching status.", cn: "打开ATS间查看切换状态。", words: [{ w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }, { w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "switching", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
    ],
    thinking: "ATS 是供电冗余的关键节点：\n① 正常状态：connected to utility（连接市电）\n② 应急状态：connected to generator（连接发电机）\n③ 切换时间：< 200ms\n④ 测试：每月进行一次ATS切换测试\nATS 和 STS 的区别：ATS = 自动转换开关（两路电源间切换）；STS = 静态转换开关（切换速度更快，< 4ms）。",
    pronunciation: "ATS 逐字母读 /ˌeɪ.tiːˈɛs/，不要读成一个单词。\n节奏：Please O-pen ｜ the A-T-S ROOM.",
    quiz: [
      { q: "ATS 和 STS 有什么区别？", a: "ATS = Automatic Transfer Switch（自动转换开关），切换时间 < 200ms，用于市电/发电机间切换；STS = Static Transfer Switch（静态转换开关），切换时间 < 4ms，用于UPS间切换，速度更快。" },
    ],
  },
  {
    id: 316,
    en: "Please open the STS room.",
    cn: "打开STS间。",
    ipa: "/pliːz ˈoʊ.pən ðə ˌɛs.tiːˈɛs ruːm/",
    tags: ["第316句", "BMS房间导航", "★★★"],
    when: "打开STS间视图。STS（静态转换开关）用于两路UPS之间的无缝切换，切换速度极快（< 4ms）。",
    words: [
      { w: "STS", ipa: "/ˌɛs.tiːˈɛs/", pos: "名词（缩写）", cn: "静态转换开关", memory: "① STS = Static Transfer Switch（静态转换开关）。\n② STS 使用晶闸管（SCR）实现极速切换（< 4ms），比ATS快50倍。\n③ STS 通常用于两路UPS之间的切换，确保IT负载完全无感知。", phonics: "STS 逐字母读 /ˌɛs.tiːˈɛs/。", collocations: [["STS room", "STS间"], ["STS switching", "STS切换"], ["STS bypass", "STS旁路"]], examples: [["The STS switched to UPS B.", "STS已切换到B路UPS。"], ["Check the STS status.", "检查STS状态。"]] },
    ],
    phrases: [
      { p: "open the STS room", ipa: "/ˈoʊ.pən ðə ˌɛs.tiːˈɛs ruːm/", cn: "打开STS间（视图）", why: "STS间交接重点：当前连接源（UPS A/UPS B）、无告警、无旁路运行。" },
    ],
    grammar: [],
    pattern: "Please open the + 房间名",
    patternExamples: [
      { en: "Please open the ATS room.", cn: "请打开ATS间。", words: [{ w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "Please open the PDU room.", cn: "请打开PDU间。", words: [{ w: "pdu", ipa: "/ˌpiːˈdiːˈjuː/", cn: "配电单元", phonics: "P-D-U 逐字母读" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "Open the STS room to verify the source.", cn: "打开STS间确认连接源。", words: [{ w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }, { w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
    ],
    thinking: "STS 交接重点：\n① 当前连接源：UPS A 还是 UPS B\n② 状态：normal（正常）/ bypass（旁路 → 异常）\n③ 负载率：当前STS的负载百分比\n④ 告警：无活动告警\nSTS 如果处于 bypass（旁路）模式，意味着失去了冗余保护，需要立即处理。",
    pronunciation: "STS 逐字母读 /ˌɛs.tiːˈɛs/，不要读成一个单词。\n节奏：Please O-pen ｜ the S-T-S ROOM.",
    quiz: [
      { q: "STS处于bypass模式意味着什么？", a: "STS bypass（旁路）= 失去了冗余保护，电流直接绕过STS走固定路径。此时如果主UPS故障，STS无法自动切换到备用UPS，IT负载可能中断。bypass是异常状态，需要立即排查原因。" },
    ],
  },
  {
    id: 317,
    en: "Please open the PDU room.",
    cn: "打开PDU间。",
    ipa: "/pliːz ˈoʊ.pən ðə ˌpiː.diːˈjuː ruːm/",
    tags: ["第317句", "BMS房间导航", "★★★"],
    when: "打开PDU间视图。PDU（电力分配单元）将UPS输出的电力分配到各个机柜。",
    words: [
      { w: "PDU", ipa: "/ˌpiː.diːˈjuː/", pos: "名词（缩写）", cn: "电力分配单元", memory: "① PDU = Power Distribution Unit（电力分配单元）。\n② PDU 将UPS输出的电力分配到各个机柜的末端用电设备。\n③ 分为 floor-standing PDU（落地式）和 rack PDU（机柜内PDU）两种。", phonics: "PDU 逐字母读 /ˌpiː.diːˈjuː/。", collocations: [["PDU room", "PDU间"], ["rack PDU", "机柜PDU"], ["PDU load", "PDU负载"]], examples: [["Check the PDU load balance.", "检查PDU负载均衡。"], ["The PDU breaker tripped.", "PDU断路器跳闸了。"]] },
    ],
    phrases: [
      { p: "open the PDU room", ipa: "/ˈoʊ.pən ðə ˌpiː.diːˈjuː ruːm/", cn: "打开PDU间（视图）", why: "PDU间交接重点：各PDU负载率、A/B路负载均衡、无告警。" },
    ],
    grammar: [],
    pattern: "Please open the + 房间名",
    patternExamples: [
      { en: "Please open the UPS room.", cn: "请打开UPS房间。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "Please open the STS room.", cn: "请打开STS间。", words: [{ w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "Open the PDU room to check the load distribution.", cn: "打开PDU间查看负载分配。", words: [{ w: "pdu", ipa: "/ˌpiːˈdiːˈjuː/", cn: "配电单元", phonics: "P-D-U 逐字母读" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }, { w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "PDU 交接重点：\n① 负载率：正常 < 80%\n② A/B路负载均衡：两路PDU负载差 < 10%\n③ 断路器状态：无跳闸\n④ 告警：无过流/过温告警\nPDU 负载过高可能导致断路器跳闸，影响多个机柜供电。",
    pronunciation: "PDU 逐字母读 /ˌpiː.diːˈjuː/，不要读成一个单词。\n节奏：Please O-pen ｜ the P-D-U ROOM.",
    quiz: [
      { q: "PDU 负载率超过多少需要关注？", a: "PDU 负载率超过80%需要关注。超过80%意味着如果A路故障切换到B路，B路可能过载。A/B路负载均衡差应 < 10%，确保冗余有效。" },
    ],
  },
  {
    id: 318,
    en: "Please locate UPS-01.",
    cn: "请定位UPS01。",
    ipa: "/pliːz loʊˈkeɪt ˌjuː.piːˈɛs zɪr.oʊ wʌn/",
    tags: ["第318句", "BMS设备定位", "★★★★★"],
    when: "房间打开后，进入设备级别导航。locate = 在BMS系统中定位到某个具体设备，查看其详细参数和状态。",
    words: [
      { w: "locate", ipa: "/loʊˈkeɪt/", pos: "动词", cn: "定位；找到", memory: "① locate = 定位/找到（某物的位置）。\n② BMS语境中 locate = 在系统中定位到某个设备，打开该设备的详细页面。\nlocate 比 open 更精确：open the room（打开房间）vs locate UPS-01（定位到具体设备）。", phonics: "lo 读 /loʊ/，cate 读 /keɪt/，重音在第二音节。", collocations: [["locate equipment", "定位设备"], ["locate alarm", "定位告警"], ["locate device", "定位装置"]], examples: [["Please locate Transformer No.1.", "请定位1号变压器。"], ["Locate CRAC-05 in the system.", "在系统中定位5号精密空调。"]] },
      { w: "UPS-01", ipa: "/ˌjuː.piːˈɛs zɪr.oʊ wʌn/", pos: "名词", cn: "UPS01号", memory: "① UPS-01 = 编号为01的UPS设备。\n② 设备编号规则：设备类型 + 编号（如 UPS-01、CRAC-05、GEN-02）。\n③ 数据中心通常有多台UPS，按A/B路编号：UPS-A01、UPS-B01。", phonics: "UPS 逐字母读 /ˌjuː.piːˈɛs/；01 读 zero one /ˌzɪr.oʊ ˈwʌn/ 或 oh one /ˌoʊ ˈwʌn/。", collocations: [["UPS-01 status", "UPS01状态"], ["UPS-01 load", "UPS01负载"], ["UPS-01 alarm", "UPS01告警"]], examples: [["UPS-01 is running in normal mode.", "UPS01运行在正常模式。"], ["Check UPS-01 battery voltage.", "检查UPS01电池电压。"]] },
    ],
    phrases: [
      { p: "locate UPS-01", ipa: "/loʊˈkeɪt ˌjuː.piːˈɛs zɪr.oʊ wʌn/", cn: "定位UPS01号设备", why: "locate + 设备编号 = 在BMS中定位到该设备。点击后显示该设备的详细参数页面（负载、电池、告警等）。" },
    ],
    grammar: [
      { q: "locate 和 open 在BMS操作中有什么区别？", a: "open = 打开房间/页面（较粗粒度）\nlocate = 定位到具体设备（较细粒度）\n✅ Open the UPS room.（打开UPS房间 → 看到房间内所有设备）\n✅ Locate UPS-01.（定位UPS01 → 直接跳到该设备的详细页面）\nlocate 是更精确的导航，直接定位到单个设备。" },
    ],
    pattern: "Please locate + 设备编号",
    patternExamples: [
      { en: "Please locate Transformer No.1.", cn: "请定位1号变压器。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "transformer", ipa: "/trænsˈfɔːrmər/", cn: "变压器", phonics: "trans 读 /træns/，former 读 /fɔːrmər/" }] },
      { en: "Please locate CRAC-05.", cn: "请定位5号精密空调。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }] },
      { en: "Locate Generator No.2.", cn: "定位2号发电机。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
    ],
    thinking: "设备定位是BMS导航的最细粒度（第四层级）。\n设备编号规则：设备类型缩写 + 编号\n① UPS-01, UPS-02（UPS设备）\n② TX-01, TX-02 或 Transformer No.1（变压器）\n③ CRAC-01~12（精密空调）\n④ GEN-01, GEN-02（发电机）\n⑤ ATS-01, ATS-02（自动转换开关）\n定位到设备后可以看到：实时参数、历史趋势、告警记录、维护记录。",
    pronunciation: "locate 重音在第二音节：/loʊˈkeɪt/。\nUPS-01 读 /ˌjuː.piːˈɛs ˌzɪr.oʊ ˈwʌn/ 或 /ˌjuː.piːˈɛs ˌoʊ ˈwʌn/。\n节奏：Please lo-CATE ｜ U-P-S ｜ ZER-o-ONE.",
    quiz: [
      { q: "定位1号变压器，怎么说？", a: "Please locate Transformer No.1." },
      { q: "locate 和 open 有什么区别？", a: "open = 打开房间/页面（粗粒度，看到房间内所有设备）；locate = 定位到具体设备（细粒度，直接跳到单个设备的详细页面）。locate 比 open 更精确。" },
    ],
  },
  {
    id: 319,
    en: "Please locate Transformer No.1.",
    cn: "请定位1号变压器。",
    ipa: "/pliːz loʊˈkeɪt trænsˈfɔːr.mər ˌnʌm.bər wʌn/",
    tags: ["第319句", "BMS设备定位", "★★★★★"],
    when: "定位到1号变压器，查看其详细运行参数。变压器是供电链中的关键设备，需要监控负载率、油温、绕组温度。",
    words: [
      { w: "Transformer No.1", ipa: "/trænsˈfɔːr.mər ˌnʌm.bər wʌn/", pos: "名词", cn: "1号变压器", memory: "① Transformer = 变压器；② No.1 = Number 1（1号）。\nNo. 是 number 的缩写，读 /ˌnʌm.bər/。\n变压器编号：No.1、No.2、No.3... 对应多台并联运行的变压器。", phonics: "transformer 重音在第二音节；No.1 读 /ˌnʌm.bər wʌn/ 或直接读 number one。", collocations: [["Transformer No.1", "1号变压器"], ["transformer load", "变压器负载"], ["transformer temperature", "变压器温度"]], examples: [["Transformer No.1 is at 48% load.", "1号变压器负载48%。"], ["Check Transformer No.2 oil temperature.", "检查2号变压器油温。"]] },
    ],
    phrases: [
      { p: "locate Transformer No.1", ipa: "/loʊˈkeɪt trænsˈfɔːr.mər ˌnʌm.bər wʌn/", cn: "定位1号变压器", why: "定位到1号变压器后可以看到：负载率、油温、绕组温度、冷却系统状态、保护继电器状态。" },
    ],
    grammar: [
      { q: "No.1 怎么读？", a: "No.1 = Number One = /ˌnʌm.bər wʌn/\nNo.2 = Number Two = /ˌnʌm.bər tuː/\nNo. 是 number 的缩写（源自拉丁语 numero），后面必须跟数字。\n也可以说 'Transformer One'（省略 No.），但正式场合用 No.1。" },
    ],
    pattern: "Please locate + 设备 + 编号",
    patternExamples: [
      { en: "Please locate Transformer No.2.", cn: "请定位2号变压器。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "transformer", ipa: "/trænsˈfɔːrmər/", cn: "变压器", phonics: "trans 读 /træns/，former 读 /fɔːrmər/" }] },
      { en: "Please locate Generator No.3.", cn: "请定位3号发电机。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "Locate UPS-02 in the BMS.", cn: "在BMS中定位UPS02。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "bms", ipa: "/ˌbiːˈɛmˈɛs/", cn: "楼控", phonics: "B-M-S 逐字母读" }] },
    ],
    thinking: "变压器设备页面显示的关键参数：\n① Load（负载率）：40%-70%正常\n② Oil temperature（油温）：60-80°C\n③ Winding temperature（绕组温度）：70-90°C\n④ Tap position（分接头位置）：通常自动调节\n⑤ Cooling mode（冷却模式）：ONAN/ONAF\n⑥ Protection relay status（保护继电器状态）：正常",
    pronunciation: "No.1 读 /ˌnʌm.bər wʌn/，不要读成 'no one'（没有人）。\ntransformer 重音在第二音节。\n节奏：Please lo-CATE ｜ trans-FOR-mer ｜ NUM-ber ONE.",
    quiz: [
      { q: "No.1 怎么读？", a: "/ˌnʌm.bər wʌn/（Number One）。No. 是 number 的缩写，读完整单词 number，不要读成 'no'（不是）。No.1 不等于 'no one'（没有人）。" },
    ],
  },
  {
    id: 320,
    en: "Please locate CRAC-05.",
    cn: "请定位5号精密空调。",
    ipa: "/pliːz loʊˈkeɪt kræk zɪr.oʊ faɪv/",
    tags: ["第320句", "BMS设备定位", "★★★★★"],
    when: "定位到5号精密空调（CRAC），查看其运行参数。CRAC是数据中心制冷系统的末端设备。",
    words: [
      { w: "CRAC", ipa: "/kræk/", pos: "名词（缩写）", cn: "精密空调", memory: "① CRAC = Computer Room Air Conditioning（计算机房空调/精密空调）。\n② CRAC 是数据中心专用空调，精确控制温度和湿度。\n③ CRAC 读 /kræk/（一个单词），不逐字母读。\n④ 类似设备：CRAH = Computer Room Air Handler（风墙空调），用冷冻水冷却。", phonics: "CRAC 读 /kræk/，cr 读 /kr/，a 读 /æ/，c 读 /k/。", collocations: [["CRAC unit", "精密空调机组"], ["CRAC supply temperature", "精密空调送风温度"], ["CRAC return temperature", "精密空调回风温度"]], examples: [["CRAC-05 supply temperature is 18°C.", "5号精密空调送风温度18°C。"], ["Locate CRAC-12.", "定位12号精密空调。"]] },
    ],
    phrases: [
      { p: "locate CRAC-05", ipa: "/loʊˈkeɪt kræk zɪr.oʊ faɪv/", cn: "定位5号精密空调", why: "定位到CRAC后可以看到：送风温度、回风温度、湿度、风扇转速、过滤网状态。" },
    ],
    grammar: [
      { q: "CRAC 和 CRAH 有什么区别？", a: "CRAC = Computer Room Air Conditioning（自带压缩机的精密空调）\nCRAH = Computer Room Air Handler（使用冷冻水的风机盘管）\nCRAC 自带制冷循环（压缩机+冷凝器），独立制冷；\nCRAH 使用中央冷冻水系统提供的冷冻水来冷却空气。\n大型数据中心通常用 CRAH（效率更高），中小型用 CRAC。" },
    ],
    pattern: "Please locate + 设备编号",
    patternExamples: [
      { en: "Please locate CRAC-12.", cn: "请定位12号精密空调。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }] },
      { en: "Please locate CRAH-03.", cn: "请定位3号风墙空调。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }] },
      { en: "Locate CRAC-05 to check the supply temperature.", cn: "定位5号精密空调查看送风温度。", words: [{ w: "locate", ipa: "/loʊˈkeɪt/", cn: "定位", phonics: "lo 读 /loʊ/，cate 读 /keɪt/" }, { w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
    ],
    thinking: "CRAC/CRAH 设备页面显示的关键参数：\n① Supply air temperature（送风温度）：18-22°C\n② Return air temperature（回风温度）：28-35°C\n③ Humidity（湿度）：40%-60% RH\n④ Fan speed（风扇转速）：auto/manual\n⑤ Filter status（过滤网状态）：clean/dirty\n⑥ Alarm（告警）：无活动告警",
    pronunciation: "CRAC 读 /kræk/（一个单词），不逐字母读。\n05 读 zero five /ˌzɪr.oʊ faɪv/ 或 oh five /ˌoʊ faɪv/。\n节奏：Please lo-CATE ｜ CRAC ｜ ZER-o-FIVE.",
    quiz: [
      { q: "CRAC 和 CRAH 有什么区别？", a: "CRAC = Computer Room Air Conditioning（自带压缩机，独立制冷）；CRAH = Computer Room Air Handler（使用中央冷冻水，风机盘管）。大型数据中心通常用CRAH效率更高。CRAC读 /kræk/，不逐字母读。" },
    ],
  },
  {
    id: 321,
    en: "Filter the critical alarms only.",
    cn: "只显示严重告警。",
    ipa: "/ˈfɪl.tər ðə ˈkrɪt.ɪ.kəl ˈɑːrmz ˈoʊn.li/",
    tags: ["第321句", "BMS告警操作", "★★★★★"],
    when: "进入BMS告警操作环节。先从告警列表中筛选出严重告警，优先处理最高级别的问题。",
    words: [
      { w: "filter", ipa: "/ˈfɪl.tər/", pos: "动词", cn: "筛选；过滤", memory: "① filter = 过滤器（名词）/ 筛选（动词）。\n② BMS语境中 filter = 按条件筛选告警列表，只显示符合条件的告警。\nfilter critical alarms only = 只显示严重告警，隐藏其他级别。", phonics: "fil 读 /fɪl/，ter 读 /tər/，重音在第一音节。", collocations: [["filter alarms", "筛选告警"], ["filter by severity", "按严重级别筛选"], ["filter by time", "按时间筛选"]], examples: [["Filter the warning alarms.", "筛选警告告警。"], ["Please filter by today's alarms.", "请筛选今天的告警。"]] },
      { w: "critical alarms", ipa: "/ˈkrɪt.ɪ.kəl ˈɑːrmz/", pos: "名词", cn: "严重告警", memory: "① critical = 严重的/关键的；② alarms = 告警。\ncritical alarms = 最高级别的告警，需要立即处理。\nBMS告警级别：Critical（严重）> Warning（警告）> Info（信息）。", phonics: "crit 读 /krɪt/，i 读 /ɪ/，cal 读 /kəl/，重音在第一音节。", collocations: [["critical alarm", "严重告警"], ["critical alert", "严重警报"], ["critical event", "严重事件"]], examples: [["There are two critical alarms.", "有两个严重告警。"], ["Please check the critical alarms first.", "请先检查严重告警。"]] },
    ],
    phrases: [
      { p: "filter the critical alarms only", ipa: "/ˈfɪl.tər ðə ˈkrɪt.ɪ.kəl ˈɑːrmz ˈoʊn.li/", cn: "只显示严重告警", why: "filter + 条件 + only = 只显示符合条件的。only 强调'仅此一种'，排除其他级别的告警。" },
    ],
    grammar: [
      { q: "filter 和 sort 有什么区别？", a: "filter = 筛选（按条件过滤，隐藏不符合的）\nsort = 排序（改变显示顺序，不隐藏任何项）\n✅ Filter critical alarms only.（只显示严重告警 → 隐藏警告和信息）\n✅ Sort by severity.（按严重级别排序 → 所有告警都显示，但按级别排列）\nfilter 改变'显示哪些'，sort 改变'怎么排列'。" },
    ],
    pattern: "Filter the + 级别 + alarms only",
    patternExamples: [
      { en: "Filter the warning alarms only.", cn: "只显示警告告警。", words: [{ w: "filter", ipa: "/ˈfɪltər/", cn: "过滤器", phonics: "fil 读 /fɪl/，ter 读 /tər/" }, { w: "warning", ipa: "/ˈwɔːrnɪŋ/", cn: "警告", phonics: "warn 读 /wɔːrn/，ing 读 /ɪŋ/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Filter the info alarms only.", cn: "只显示信息告警。", words: [{ w: "filter", ipa: "/ˈfɪltər/", cn: "过滤器", phonics: "fil 读 /fɪl/，ter 读 /tər/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Filter active alarms only.", cn: "只显示活动告警。", words: [{ w: "filter", ipa: "/ˈfɪltər/", cn: "过滤器", phonics: "fil 读 /fɪl/，ter 读 /tər/" }, { w: "active", ipa: "/ˈæktɪv/", cn: "活动", phonics: "act 读 /ækt/，ive 读 /ɪv/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "BMS告警操作是交接的核心技能。\n告警操作分三类：\n① Filter（筛选）：按条件过滤显示\n② Sort（排序）：改变显示顺序\n③ Acknowledge（确认）：标记已看到\n交接时通常先筛选critical，处理完再筛选warning，最后看info。",
    pronunciation: "filter 重音在第一音节：/ˈfɪl.tər/。\ncritical 重音在第一音节：/ˈkrɪt.ɪ.kəl/。\nonly 读 /ˈoʊn.li/。\n节奏：FIL-ter ｜ the CRIT-i-cal ｜ ALARMS ｜ ON-ly.",
    quiz: [
      { q: "只显示警告告警，怎么说？", a: "Filter the warning alarms only." },
      { q: "filter 和 sort 有什么区别？", a: "filter = 筛选（按条件过滤，隐藏不符合的，改变'显示哪些'）；sort = 排序（改变显示顺序，不隐藏任何项，改变'怎么排列'）。" },
    ],
  },
  {
    id: 322,
    en: "Show all active alarms.",
    cn: "显示所有活动告警。",
    ipa: "/ʃoʊ ɔːl ˈæk.tɪv ˈɑːrmz/",
    tags: ["第322句", "BMS告警操作", "★★★★★"],
    when: "查看全部活动告警（尚未恢复的告警），区别于已恢复（cleared）的告警。",
    words: [
      { w: "active", ipa: "/ˈæk.tɪv/", pos: "形容词", cn: "活动的；仍存在的", memory: "① active = 活动的/活跃的。\n② 告警语境中 active = 仍然存在的/未恢复的告警。\n③ active alarm = 仍在触发的告警，区别于 cleared alarm（已恢复的告警）。", phonics: "ac 读 /æk/，tive 读 /tɪv/，重音在第一音节。", collocations: [["active alarm", "活动告警"], ["active alert", "活动警报"], ["active event", "活动事件"]], examples: [["How many active alarms are there?", "有多少活动告警？"], ["Show all active alarms.", "显示所有活动告警。"]] },
    ],
    phrases: [
      { p: "all active alarms", ipa: "/ɔːl ˈæk.tɪv ˈɑːrmz/", cn: "所有活动告警", why: "active alarms = 尚未恢复的告警。交接时必须确认所有活动告警都已交接给下一班。" },
    ],
    grammar: [
      { q: "active 和 cleared 告警有什么区别？", a: "active = 活动的/仍存在的（告警仍在触发，问题尚未解决）\ncleared = 已清除/已恢复的（告警已自动或手动恢复，问题已解决）\n✅ Show all active alarms.（显示所有活动告警 → 看当前还有什么问题）\n✅ Show cleared alarms.（显示已恢复告警 → 看过去发生了什么问题）\n交接时先看 active（当前问题），再看 cleared（历史记录）。" },
    ],
    pattern: "Show + all + 状态 + alarms",
    patternExamples: [
      { en: "Show all cleared alarms.", cn: "显示所有已恢复告警。", words: [{ w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Show all acknowledged alarms.", cn: "显示所有已确认告警。", words: [{ w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Show active alarms for today.", cn: "显示今天的活动告警。", words: [{ w: "active", ipa: "/ˈæktɪv/", cn: "活动", phonics: "act 读 /ækt/，ive 读 /ɪv/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "告警状态分类：\n① Active（活动）：告警仍在触发，问题未解决\n② Cleared（已恢复）：告警已恢复，问题已解决\n③ Acknowledged（已确认）：值班人员已看到并确认\n④ Unacknowledged（未确认）：值班人员尚未确认\n交接重点：所有 active + unacknowledged 告警必须交接清楚。",
    pronunciation: "active 重音在第一音节：/ˈæk.tɪv/。\nshow 读 /ʃoʊ/，sh 读 /ʃ/。\n节奏：SHOW ｜ all AC-tive ｜ ALARMS.",
    quiz: [
      { q: "active 和 cleared 告警有什么区别？", a: "active = 活动的/仍存在的（告警仍在触发，问题未解决）；cleared = 已恢复的（告警已恢复，问题已解决）。交接时先看active（当前问题），再看cleared（历史记录）。" },
    ],
  },
  {
    id: 323,
    en: "Show today's alarms.",
    cn: "显示今天的告警。",
    ipa: "/ʃoʊ təˈdeɪz ˈɑːrmz/",
    tags: ["第323句", "BMS告警操作", "★★★★"],
    when: "按时间筛选，查看今天发生的所有告警（包括活动和已恢复的），了解今天的告警全貌。",
    words: [],
    phrases: [
      { p: "today's alarms", ipa: "/təˈdeɪz ˈɑːrmz/", cn: "今天的告警", why: "today's = 今天的（所有格）。按时间筛选告警，只看今天发生的，排除历史告警。" },
    ],
    grammar: [
      { q: "today's alarms 和 active alarms 有什么区别？", a: "today's alarms = 今天发生的所有告警（包括 active + cleared + acknowledged）\nactive alarms = 所有活动告警（不限时间，可能包含昨天遗留的）\n✅ Show today's alarms.（看今天发生了什么 → 时间筛选）\n✅ Show all active alarms.（看当前还有什么问题 → 状态筛选）\n两种筛选维度不同，交接时都需要看。" },
    ],
    pattern: "Show + 时间 + alarms",
    patternExamples: [
      { en: "Show yesterday's alarms.", cn: "显示昨天的告警。", words: [{ w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Show this week's alarms.", cn: "显示本周的告警。", words: [{ w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Show alarms from the last 24 hours.", cn: "显示最近24小时的告警。", words: [{ w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "告警筛选维度：\n① 按级别：critical / warning / info\n② 按状态：active / cleared / acknowledged / unacknowledged\n③ 按时间：today / yesterday / this week / last 24 hours\n④ 按来源：BMS / FAS / EPMS / DCIM\n交接时通常组合筛选：先看 today's critical active alarms（今天严重活动告警）。",
    pronunciation: "today's 读 /təˈdeɪz/，末尾加 /z/ 音。\n节奏：SHOW ｜ to-DAY'S ｜ ALARMS.",
    quiz: [
      { q: "显示最近24小时的告警，怎么说？", a: "Show alarms from the last 24 hours." },
      { q: "告警筛选有哪几个维度？", a: "四个维度：① 按级别（critical/warning/info）② 按状态（active/cleared/acknowledged/unacknowledged）③ 按时间（today/yesterday/this week）④ 按来源（BMS/FAS/EPMS/DCIM）。交接时通常组合筛选。" },
    ],
  },
  {
    id: 324,
    en: "Show acknowledged alarms.",
    cn: "显示已经确认的告警。",
    ipa: "/ʃoʊ əkˈnɑː.lɪdʒd ˈɑːrmz/",
    tags: ["第324句", "BMS告警操作", "★★★★"],
    when: "查看已确认的告警列表。acknowledged 表示值班工程师已经看到并确认了该告警。",
    words: [
      { w: "acknowledged", ipa: "/əkˈnɑː.lɪdʒd/", pos: "形容词（过去分词）", cn: "已确认的", memory: "① acknowledge = 确认/承认（已看到）。\n② acknowledged = 已确认的（值班工程师已点击确认按钮）。\n③ acknowledge 告警 = 告诉系统'我已经看到了这个告警'，但不等于处理完成。", phonics: "ac 读 /ək/，know 读 /nɑː/，ledged 读 /lɪdʒd/，重音在第二音节。注意 k 不发音。", collocations: [["acknowledged alarm", "已确认告警"], ["acknowledge an alarm", "确认告警"], ["unacknowledged alarm", "未确认告警"]], examples: [["Please acknowledge this alarm.", "请确认这个告警。"], ["All critical alarms have been acknowledged.", "所有严重告警已确认。"]] },
    ],
    phrases: [
      { p: "acknowledged alarms", ipa: "/əkˈnɑː.lɪdʒd ˈɑːrmz/", cn: "已确认告警", why: "acknowledged alarms = 值班工程师已经看到并确认的告警。交接时确认所有活动告警都已被接班人 acknowledge。" },
    ],
    grammar: [
      { q: "acknowledge 一个告警意味着什么？", a: "acknowledge = 确认已看到（不等于处理完成）\n处理流程：\n① 告警触发 → unacknowledged（未确认）\n② 值班工程师点击 acknowledge → acknowledged（已确认）\n③ 问题处理完成 → cleared（已恢复）\nacknowledge 只是'我看到了'，不代表问题已解决。\n交接时接班人需要 acknowledge 所有交接过来的活动告警。" },
    ],
    pattern: "Show + 状态 + alarms",
    patternExamples: [
      { en: "Show unacknowledged alarms.", cn: "显示未确认告警。", words: [{ w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Show active alarms.", cn: "显示活动告警。", words: [{ w: "active", ipa: "/ˈæktɪv/", cn: "活动", phonics: "act 读 /ækt/，ive 读 /ɪv/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Show cleared alarms.", cn: "显示已恢复告警。", words: [{ w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "告警确认（acknowledge）是交接的重要步骤。\n交接时接班人必须：\n① 查看所有 active + unacknowledged 告警\n② 逐条 acknowledge（确认已看到）\n③ 了解每条告警的当前处理状态和后续行动\n这样确保接班人完全接收了所有待处理事项。",
    pronunciation: "acknowledged 重音在第二音节：/əkˈnɑː.lɪdʒd/。\n注意 k 不发音，know 读 /nɑː/。\n节奏：SHOW ｜ ac-KNOW-ledged ｜ ALARMS.",
    quiz: [
      { q: "acknowledge 一个告警意味着问题已经解决了吗？", a: "不是。acknowledge = '我看到了'（确认已看到），不代表问题已解决。处理流程：① 触发 → unacknowledged ② acknowledge（确认看到）③ cleared（问题解决）。acknowledge 只是第一步确认。" },
    ],
  },
  {
    id: 325,
    en: "Show unacknowledged alarms.",
    cn: "显示未确认告警。",
    ipa: "/ʃoʊ ˌʌn.əkˈnɑː.lɪdʒd ˈɑːrmz/",
    tags: ["第325句", "BMS告警操作", "★★★★★"],
    when: "查看未确认的告警列表。这些是值班工程师尚未看到或确认的告警，是交接时的最高优先级检查项。",
    words: [
      { w: "unacknowledged", ipa: "/ˌʌn.əkˈnɑː.lɪdʒd/", pos: "形容词", cn: "未确认的", memory: "① un- = 否定前缀；② acknowledged = 已确认的。\nunacknowledged = 未确认的 = 值班工程师尚未看到/确认的告警。\n这是交接时最需要关注的告警，因为可能没有人处理。", phonics: "un 读 /ʌn/，ac 读 /ək/，know 读 /nɑː/，ledged 读 /lɪdʒd/，重音在第三音节。", collocations: [["unacknowledged alarm", "未确认告警"], ["unacknowledged event", "未确认事件"], ["unacknowledged alert", "未确认警报"]], examples: [["There are three unacknowledged alarms.", "有三个未确认告警。"], ["Please acknowledge all unacknowledged alarms.", "请确认所有未确认告警。"]] },
    ],
    phrases: [
      { p: "unacknowledged alarms", ipa: "/ˌʌn.əkˈnɑː.lɪdʒd ˈɑːrmz/", cn: "未确认告警", why: "unacknowledged = 无人确认的告警。交接时这些告警是最高优先级，因为可能没有人知道这些问题的存在。" },
    ],
    grammar: [
      { q: "交接时如何处理 unacknowledged alarms？", a: "交接流程：\n① 交班方显示 unacknowledged alarms\n② 逐条向接班人说明每条告警的内容、触发时间、当前状态\n③ 接班人 acknowledge 每条告警（确认已看到）\n④ 讨论后续行动计划\n确保所有 unacknowledged alarms 在交接完成后都变成 acknowledged。" },
    ],
    pattern: "Show + 状态 + alarms",
    patternExamples: [
      { en: "Show acknowledged alarms.", cn: "显示已确认告警。", words: [{ w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Show active alarms.", cn: "显示活动告警。", words: [{ w: "active", ipa: "/ˈæktɪv/", cn: "活动", phonics: "act 读 /ækt/，ive 读 /ɪv/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Show all unacknowledged critical alarms.", cn: "显示所有未确认的严重告警。", words: [{ w: "critical", ipa: "/ˈkrɪtɪkəl/", cn: "严重", phonics: "crit 读 /krɪt/，ical 读 /ɪkəl/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "unacknowledged alarms 是交接的最高优先级检查项。\n如果有 unacknowledged critical alarm，意味着可能有一个严重问题没有人注意到！\n交接检查顺序：\n① unacknowledged + critical（未确认严重 → 最紧急）\n② unacknowledged + warning（未确认警告）\n③ acknowledged + active（已确认但未恢复 → 跟进中）\n④ cleared（已恢复 → 历史记录）",
    pronunciation: "unacknowledged 较长，分四音节：/ˌʌn.əkˈnɑː.lɪdʒd/。\n重音在第三音节 know 上。\nun- 读 /ʌn/，不是 /ʌn/。\n节奏：SHOW ｜ un-ac-KNOW-ledged ｜ ALARMS.",
    quiz: [
      { q: "交接时 unacknowledged alarms 的优先级如何？", a: "unacknowledged alarms 是最高优先级。检查顺序：① unacknowledged + critical（最紧急）② unacknowledged + warning ③ acknowledged + active（跟进中）④ cleared（历史）。交接完成后所有 unacknowledged 应变为 acknowledged。" },
      { q: "显示所有未确认的严重告警，怎么说？", a: "Show all unacknowledged critical alarms." },
    ],
  },
];

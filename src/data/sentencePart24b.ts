// EXPORTS: MOCK_SENTENCES_PART24B

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART24B: ISentence[] = [
  {
    id: 1621,
    en: "Please inspect the cooling tower basin.",
    cn: "请检查冷却塔水池。",
    ipa: "/pliːz ɪnˈspɛkt ðə ˈkuːlɪŋ ˈtaʊər ˈbeɪsn/",
    tags: ["第1621句", "冷却塔巡检", "★★★★★"],
    when: "冷却塔水池（basin）位于塔底，收集循环水。巡检时需检查水池内是否有异物、沉积物或藻类生长。",
    words: [
      { w: "basin", ipa: "/ˈbeɪsn/", pos: "名词", cn: "水池；集水盆", memory: "basin = 水池/盆，用于收集或储存液体。\n冷却塔底部的水池收集从填料落下的冷却水。\n也用于地理概念：river basin = 流域。", phonics: "ba 读 /beɪ/，sin 读 /sn/，两音节。", collocations: [["cooling tower basin", "冷却塔水池"], ["water basin", "水池"], ["basin level", "水池水位"]], examples: [["Check the basin for debris.", "检查水池是否有异物。"], ["The basin water level is normal.", "水池水位正常。"]] },
    ],
    phrases: [
      { p: "cooling tower basin", ipa: "/ˈkuːlɪŋ ˈtaʊər ˈbeɪsn/", cn: "冷却塔水池", why: "cooling + tower + basin = 冷却塔水池。水池是冷却塔系统的底部集水结构，巡检时需检查清洁度和水位。" },
    ],
    grammar: [
      { q: "inspect 和 check 有什么区别？", a: "inspect = 检验/仔细检查（详细的物理检查）\ncheck = 检查/查看（快速确认状态）\n✅ Please inspect the basin.（请检查水池 → 现场仔细查看）\n✅ Please check the water level.（请检查水位 → 快速确认数值）\n巡检时多用 inspect，强调'现场检查'。" },
    ],
    pattern: "Please inspect the + 冷却塔部件",
    patternExamples: [
      { en: "Please inspect the fill media.", cn: "请检查填料。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }] },
      { en: "Please inspect the fan assembly.", cn: "请检查风机组件。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }] },
      { en: "Please inspect the distribution pipes.", cn: "请检查布水管。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "pipes", ipa: "/paɪp/", cn: "管道", phonics: "pipe 读 /paɪp/" }] },
    ],
    thinking: "冷却塔水池巡检要点：\n① 水位是否在正常范围内\n② 水面是否有油膜或异物\n③ 池底是否有沉积物\n④ 是否有藻类生长（影响水质）\n⑤ 排污口是否畅通\n水池是冷却塔的基础结构，清洁度直接影响整个系统水质。",
    pronunciation: "basin 的 a 读 /eɪ/，不是 /æ/。\n不要读成 basin /ˈbæsn/（马桶）。",
    quiz: [
      { q: "冷却塔水池巡检要检查什么？", a: "主要检查：① 水位正常 ② 无异物/沉积物 ③ 无藻类生长 ④ 排污口畅通 ⑤ 无油膜。" },
    ],
  },
  {
    id: 1622,
    en: "Please inspect the water distribution system.",
    cn: "请检查布水系统。",
    ipa: "/pliːz ɪnˈspɛkt ðə ˈwɔːtər ˌdɪstrɪˈbjuːʃən ˈsɪstəm/",
    tags: ["第1622句", "布水系统", "★★★★★"],
    when: "布水系统负责将热水均匀喷洒到填料上，直接影响冷却效率。巡检时需检查喷嘴是否堵塞、布水是否均匀。",
    words: [
      { w: "distribution", ipa: "/ˌdɪstrɪˈbjuːʃən/", pos: "名词", cn: "分配；布水", memory: "distribute = 分配/分布；-ion = 名词后缀。\ndistribution = 分配/布水，指将水均匀分配到填料上。\n布水不均匀会导致冷却效率下降。", phonics: "dis 读 /dɪs/，tribu 读 /trɪbjuː/，tion 读 /ʃən/。重音在 bu。", collocations: [["water distribution", "布水"], ["distribution system", "布水系统"], ["distribution uniformity", "布水均匀性"]], examples: [["The distribution is uneven.", "布水不均匀。"], ["Check the distribution nozzles.", "检查布水喷嘴。"]] },
    ],
    phrases: [
      { p: "water distribution system", ipa: "/ˈwɔːtər ˌdɪstrɪˈbjuːʃən ˈsɪstəm/", cn: "布水系统", why: "water + distribution + system = 布水系统。布水系统将热水通过管道和喷嘴均匀分配到填料表面，是冷却塔冷却效率的关键。" },
    ],
    grammar: [
      { q: "distribution 和 distribution 有什么区别？", a: "没有区别，是同一个词。\ndistribution 在不同语境下的翻译：\n- 冷却塔：布水系统（water distribution）\n- 电力：配电系统（power distribution）\n- 物流：配送系统（distribution system）\n核心含义都是'分配/分布'。" },
    ],
    pattern: "Please inspect the + 系统名",
    patternExamples: [
      { en: "Please inspect the fire suppression system.", cn: "请检查消防系统。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please inspect the electrical system.", cn: "请检查电气系统。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "electrical", ipa: "/ɪˈlɛktrɪkəl/", cn: "电气", phonics: "e 读 /ɪ/，lectrical 读 /lɛktrɪkəl/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please inspect the control system.", cn: "请检查控制系统。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "control", ipa: "/kənˈtroʊl/", cn: "控制", phonics: "con 读 /kən/，trol 读 /troʊl/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
    ],
    thinking: "布水系统巡检要点：\n① 喷嘴是否堵塞（影响布水均匀性）\n② 管道是否有泄漏\n③ 水压是否正常\n④ 布水是否覆盖全部填料\n布水不均匀 → 部分填料干燥 → 冷却效率下降 → 出水温度偏高。",
    pronunciation: "distribution 的重音在第三个音节 bu /bjuː/。\n不要读成 dis-TRI-bu-tion。",
    quiz: [
      { q: "布水不均匀会导致什么问题？", a: "布水不均匀会导致：① 部分填料干燥，热交换面积减少 ② 冷却效率下降 ③ 出水温度偏高 ④ 增加能耗。严重时可能导致设备过热。" },
    ],
  },
  {
    id: 1623,
    en: "Please inspect the fan blades.",
    cn: "请检查风机叶片。",
    ipa: "/pliːz ɪnˈspɛkt ðə fæn bleɪdz/",
    tags: ["第1623句", "风机叶片", "★★★★★"],
    when: "风机叶片负责产生气流，带动空气穿过填料实现热交换。巡检时需检查叶片是否有裂纹、变形或积灰。",
    words: [
      { w: "blades", ipa: "/bleɪdz/", pos: "名词复数", cn: "叶片", memory: "blade = 叶片/刀刃。\n风机叶片（fan blades）推动空气流动。\n叶片角度可调的称为'变桨风机'。", phonics: "blade 读 /bleɪd/，s 读 /z/。", collocations: [["fan blades", "风机叶片"], ["turbine blades", "涡轮叶片"], ["blade angle", "叶片角度"]], examples: [["The blades are clean.", "叶片很干净。"], ["Check for blade damage.", "检查叶片是否有损伤。"]] },
    ],
    phrases: [
      { p: "fan blades", ipa: "/fæn bleɪdz/", cn: "风机叶片", why: "fan + blades = 风机叶片。叶片是风机的核心部件，负责产生气流。叶片损伤会影响风量和冷却效率。" },
    ],
    grammar: [
      { q: "blade 和 fin 有什么区别？", a: "blade = 叶片（风机/涡轮的旋转部件）\nfin = 翅片（散热器的薄板结构）\n✅ fan blades = 风机叶片\n✅ heat sink fins = 散热器翅片\n两者都是增加表面积的热交换部件，但结构和功能不同。" },
    ],
    pattern: "Please inspect the + 部件",
    patternExamples: [
      { en: "Please inspect the motor shaft.", cn: "请检查电机轴。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }] },
      { en: "Please inspect the belt drive.", cn: "请检查皮带传动。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }] },
      { en: "Please inspect the bearings.", cn: "请检查轴承。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }] },
    ],
    thinking: "风机叶片巡检要点：\n① 叶片表面是否有裂纹\n② 叶片角度是否一致\n③ 叶片是否有变形\n④ 叶片表面是否有积灰/腐蚀\n⑤ 叶片固定螺栓是否松动\n叶片问题 → 风量不足 → 冷却能力下降 → 系统效率降低。",
    pronunciation: "blade 的 a 读 /eɪ/，不是 /æ/。\n复数 blades 的 s 读 /z/。",
    quiz: [
      { q: "风机叶片巡检要检查哪些方面？", a: "主要检查：① 裂纹 ② 变形 ③ 积灰/腐蚀 ④ 角度一致性 ⑤ 固定螺栓松动。" },
    ],
  },
  {
    id: 1624,
    en: "Please inspect the gearbox.",
    cn: "请检查减速箱。",
    ipa: "/pliːz ɪnˈspɛkt ðə ˈɡɪərbɒks/",
    tags: ["第1624句", "减速箱", "★★★★★"],
    when: "减速箱（gearbox）位于电机和风机之间，降低电机转速并增大扭矩。巡检时需检查油位、泄漏和异常声音。",
    words: [
      { w: "gearbox", ipa: "/ˈɡɪərbɒks/", pos: "名词", cn: "减速箱；变速箱", memory: "gear = 齿轮；box = 箱体。\ngearbox = 减速箱，内含齿轮组，将电机高速低扭矩输出转换为低速高扭矩。\n冷却塔减速箱通常采用蜗轮蜗杆或行星齿轮结构。", phonics: "gear 读 /ɡɪər/，box 读 /bɒks/。", collocations: [["gearbox oil", "减速箱油"], ["gearbox inspection", "减速箱检查"], ["gearbox temperature", "减速箱温度"]], examples: [["Check the gearbox oil level.", "检查减速箱油位。"], ["The gearbox is making noise.", "减速箱有异响。"]] },
    ],
    phrases: [
      { p: "gearbox inspection", ipa: "/ˈɡɪərbɒks ɪnˈspɛkʃən/", cn: "减速箱检查", why: "gearbox + inspection = 减速箱检查。减速箱是风机驱动系统的关键部件，需定期检查油位、温度、泄漏和噪音。" },
    ],
    grammar: [
      { q: "gearbox 和 reducer 有什么区别？", a: "gearbox = 减速箱（通用术语）\nreducer = 减速机（强调减速功能）\n✅ The gearbox needs oil change.（减速箱需要换油）\n✅ Check the speed reducer.（检查减速机）\n工程场合两者可互换使用，gearbox 更常用。" },
    ],
    pattern: "Please inspect the + 传动部件",
    patternExamples: [
      { en: "Please inspect the coupling.", cn: "请检查联轴器。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }] },
      { en: "Please inspect the belt tension.", cn: "请检查皮带张力。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }] },
      { en: "Please inspect the chain drive.", cn: "请检查链传动。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }] },
    ],
    thinking: "减速箱巡检要点：\n① 油位是否在视窗范围内\n② 是否有漏油现象\n③ 运行温度是否正常（通常 < 80°C）\n④ 是否有异常噪音或振动\n⑤ 固定螺栓是否松动\n减速箱故障 → 风机停转 → 冷却能力丧失 → 制冷系统压力升高。",
    pronunciation: "gearbox 的 gear 读 /ɡɪər/，英式发音带 r 音。\n美式常读 /ɡɪr/。",
    quiz: [
      { q: "减速箱漏油会导致什么后果？", a: "减速箱漏油会导致：① 润滑油减少 → 齿轮磨损加剧 ② 温度升高 → 密封件老化 ③ 严重时齿轮咬死 → 风机停转 → 冷却能力丧失。" },
    ],
  },
  {
    id: 1625,
    en: "Please inspect the drive shaft.",
    cn: "请检查传动轴。",
    ipa: "/pliːz ɪnˈspɛkt ðə draɪv ʃæft/",
    tags: ["第1625句", "传动轴", "★★★★★"],
    when: "传动轴（drive shaft）连接减速箱和风机，传递扭矩。巡检时需检查轴的对中、润滑和固定情况。",
    words: [
      { w: "drive shaft", ipa: "/draɪv ʃæft/", pos: "名词短语", cn: "传动轴", memory: "drive = 驱动；shaft = 轴。\ndrive shaft = 传动轴，将电机/减速箱的旋转动力传递给风机。\n冷却塔传动轴通常较长，需要良好的对中和支撑。", phonics: "drive 读 /draɪv/，shaft 读 /ʃæft/。", collocations: [["drive shaft alignment", "传动轴对中"], ["drive shaft coupling", "传动轴联轴器"], ["shaft seal", "轴封"]], examples: [["Check the shaft alignment.", "检查轴的对中。"], ["The shaft is vibrating.", "传动轴有振动。"]] },
    ],
    phrases: [
      { p: "drive shaft", ipa: "/draɪv ʃæft/", cn: "传动轴", why: "drive + shaft = 传动轴。传动轴是连接减速箱和风机的旋转轴，负责传递扭矩和转速。" },
    ],
    grammar: [
      { q: "shaft 和 axle 有什么区别？", a: "shaft = 轴（传递旋转动力）\naxle = 车轴（支撑轮子，通常不旋转）\n✅ drive shaft = 传动轴（旋转传递动力）\n✅ wheel axle = 车轴（固定支撑）\n冷却塔用 shaft，因为需要旋转传递动力。" },
    ],
    pattern: "Please inspect the + 旋转部件",
    patternExamples: [
      { en: "Please inspect the motor shaft.", cn: "请检查电机轴。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }] },
      { en: "Please inspect the impeller.", cn: "请检查叶轮。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }] },
      { en: "Please inspect the rotor.", cn: "请检查转子。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }] },
    ],
    thinking: "传动轴巡检要点：\n① 轴的对中是否良好（misalignment 会导致振动）\n② 联轴器是否完好\n③ 轴承润滑是否正常\n④ 是否有异常振动或噪音\n⑤ 防护罩是否安装到位\n传动轴问题 → 振动加剧 → 轴承/密封损坏 → 设备故障。",
    pronunciation: "shaft 的 a 读 /æ/，不是 /ɑː/。\n不要读成 shaft /ʃɑːft/。",
    quiz: [
      { q: "传动轴不对中会导致什么问题？", a: "传动轴不对中（misalignment）会导致：① 振动加剧 ② 轴承过早磨损 ③ 联轴器损坏 ④ 密封件泄漏 ⑤ 能耗增加。严重时可导致设备故障停机。" },
    ],
  },
  {
    id: 1626,
    en: "Please inspect the motor bearings.",
    cn: "请检查电机轴承。",
    ipa: "/pliːz ɪnˈspɛkt ðə ˈmoʊtər ˈberɪŋz/",
    tags: ["第1626句", "电机轴承", "★★★★★"],
    when: "电机轴承（bearings）支撑转子旋转，减少摩擦。巡检时需检查温度、振动和润滑情况。",
    words: [
      { w: "bearings", ipa: "/ˈberɪŋz/", pos: "名词复数", cn: "轴承", memory: "bearing = 轴承，支撑旋转轴并减少摩擦。\n常见类型：ball bearing（滚珠轴承）、roller bearing（滚子轴承）。\n轴承失效是电机故障的常见原因。", phonics: "bear 读 /ber/，ings 读 /ɪŋz/。", collocations: [["motor bearings", "电机轴承"], ["bearing temperature", "轴承温度"], ["bearing lubrication", "轴承润滑"]], examples: [["The bearing temperature is high.", "轴承温度高。"], ["Check bearing vibration.", "检查轴承振动。"]] },
    ],
    phrases: [
      { p: "motor bearings", ipa: "/ˈmoʊtər ˈberɪŋz/", cn: "电机轴承", why: "motor + bearings = 电机轴承。轴承是电机的关键支撑部件，负责减少旋转摩擦并承受径向和轴向载荷。" },
    ],
    grammar: [
      { q: "bearing 作名词和动词有什么区别？", a: "bearing (n.) = 轴承 / 方位 / 关系\nbearing (v.) = 承受 / 生育（bear 的现在分词）\n✅ Motor bearings need lubrication.（电机轴承需要润滑 → 名词）\n✅ The beam is bearing heavy load.（梁正在承受重载 → 动词）\n工程语境中 bearing 通常指轴承。" },
    ],
    pattern: "Please inspect the + 部件",
    patternExamples: [
      { en: "Please inspect the pump bearings.", cn: "请检查泵轴承。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }] },
      { en: "Please inspect the fan bearings.", cn: "请检查风机轴承。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }] },
      { en: "Please inspect the pulley bearings.", cn: "请检查皮带轮轴承。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }] },
    ],
    thinking: "电机轴承巡检要点：\n① 轴承温度是否正常（通常 < 70°C）\n② 是否有异常噪音（嗡嗡声、咔嚓声）\n③ 是否有振动\n④ 润滑脂是否充足\n⑤ 密封是否完好（防止润滑脂泄漏和灰尘进入）\n轴承故障 → 电机过热 → 绕组烧毁 → 风机停转。",
    pronunciation: "bearings 的 ear 读 /er/，不是 /ɪər/。\n不要读成 bearings /ˈbɪərɪŋz/。",
    quiz: [
      { q: "电机轴承温度过高说明什么？", a: "轴承温度过高可能原因：① 润滑不足或润滑脂老化 ② 轴承磨损 ③ 负载过大 ④ 对中不良 ⑤ 冷却不足。需立即检查并处理，防止轴承烧毁。" },
    ],
  },
  {
    id: 1627,
    en: "Please listen for any abnormal noise.",
    cn: "请检查是否有异常噪音。",
    ipa: "/pliːz ˈlɪsən fɔːr ˈeni æbˈnɔːrməl nɔɪz/",
    tags: ["第1627句", "噪音检查", "★★★★★"],
    when: "通过听觉判断设备运行状态。异常噪音往往是机械故障的早期信号，如轴承磨损、叶片松动或电机故障。",
    words: [
      { w: "listen for", ipa: "/ˈlɪsən fɔːr/", pos: "动词短语", cn: "倾听；注意听", memory: "listen = 听；listen for = 倾听/注意听某物。\nlisten for noise = 注意听是否有噪音。\n与 listen to（听某物）不同，listen for 强调'搜寻/捕捉'声音。", phonics: "listen 的 t 不发音，读 /ˈlɪsən/。", collocations: [["listen for noise", "注意听噪音"], ["listen for vibration", "注意听振动声"], ["listen carefully", "仔细听"]], examples: [["Listen for any unusual sounds.", "注意听是否有异常声音。"], ["Listen for the alarm.", "注意听警报声。"]] },
      { w: "abnormal", ipa: "/æbˈnɔːrməl/", pos: "形容词", cn: "异常的；不正常的", memory: "ab- = 偏离/不；normal = 正常的。\nabnormal = 异常的/不正常的。\nabnormal noise = 异常噪音\nabnormal temperature = 异常温度", phonics: "ab 读 /æb/，normal 读 /nɔːrməl/。重音在 nor。", collocations: [["abnormal noise", "异常噪音"], ["abnormal vibration", "异常振动"], ["abnormal temperature", "异常温度"]], examples: [["Abnormal noise was detected.", "检测到异常噪音。"], ["The temperature is abnormal.", "温度异常。"]] },
    ],
    phrases: [
      { p: "listen for abnormal noise", ipa: "/ˈlɪsən fɔːr æbˈnɔːrməl nɔɪz/", cn: "检查是否有异常噪音", why: "listen + for + abnormal + noise = 倾听异常噪音。这是巡检中的感官检查方法，通过听觉判断设备状态。" },
    ],
    grammar: [
      { q: "listen for 和 listen to 有什么区别？", a: "listen for = 倾听/注意听（搜寻某种声音）\nlisten to = 听（某物发出的声音）\n✅ Listen for abnormal noise.（注意听是否有异常噪音 → 搜寻）\n✅ Listen to the motor running.（听电机运行 → 听某物）\n巡检时用 listen for，强调'捕捉/搜寻'异常信号。" },
    ],
    pattern: "Please listen for any + 异常现象",
    patternExamples: [
      { en: "Please listen for any unusual sounds.", cn: "请检查是否有异常声音。", words: [] },
      { en: "Please listen for any knocking.", cn: "请检查是否有敲击声。", words: [] },
      { en: "Please listen for any grinding noise.", cn: "请检查是否有摩擦声。", words: [] },
    ],
    thinking: "异常噪音类型与可能原因：\n① 嗡嗡声（humming）→ 电机问题\n② 咔嚓声（clicking）→ 轴承问题\n③ 尖叫声（squealing）→ 皮带打滑\n④ 摩擦声（grinding）→ 轴承磨损\n⑤ 敲击声（knocking）→ 机械松动\n发现异常噪音应立即上报并记录，避免故障扩大。",
    pronunciation: "listen 的 t 不发音，读 /ˈlɪsən/。\nabnormal 的重音在第二个音节 nor /nɔːr/。",
    quiz: [
      { q: "听到轴承有咔嚓声说明什么？", a: "轴承咔嚓声（clicking）通常说明：① 轴承磨损 ② 滚珠/滚子损坏 ③ 润滑不足 ④ 异物进入。需要立即检查并更换轴承，防止进一步损坏。" },
    ],
  },
  {
    id: 1628,
    en: "Please check for excessive vibration.",
    cn: "请检查是否有异常振动。",
    ipa: "/pliːz tʃɛk fɔːr ɪkˈsɛsɪv vaɪˈbreɪʃən/",
    tags: ["第1628句", "振动检查", "★★★★★"],
    when: "振动是旋转设备健康状态的重要指标。过度振动可能表明不平衡、不对中、轴承磨损等问题。",
    words: [
      { w: "excessive", ipa: "/ɪkˈsɛsɪv/", pos: "形容词", cn: "过度的；过量的", memory: "excess = 过量；-ive = 形容词后缀。\nexcessive = 过度的/过量的。\nexcessive vibration = 过度振动\nexcessive noise = 过度噪音\nexcessive current = 过大电流", phonics: "ex 读 /ɪk/，cessive 读 /sɛsɪv/。重音在 ces。", collocations: [["excessive vibration", "过度振动"], ["excessive noise", "过度噪音"], ["excessive current", "过大电流"]], examples: [["Excessive vibration was detected.", "检测到过度振动。"], ["The current is excessive.", "电流过大。"]] },
      { w: "vibration", ipa: "/vaɪˈbreɪʃən/", pos: "名词", cn: "振动", memory: "vibrate = 振动；-ion = 名词后缀。\nvibration = 振动，是旋转设备的常见监测参数。\n振动值通常用 mm/s（速度）或 μm（位移）表示。", phonics: "vi 读 /vaɪ/，bra 读 /breɪ/，tion 读 /ʃən/。", collocations: [["vibration level", "振动水平"], ["vibration analysis", "振动分析"], ["vibration sensor", "振动传感器"]], examples: [["The vibration is within limits.", "振动在允许范围内。"], ["Check the vibration sensor.", "检查振动传感器。"]] },
    ],
    phrases: [
      { p: "excessive vibration", ipa: "/ɪkˈsɛsɪv vaɪˈbreɪʃən/", cn: "过度振动", why: "excessive + vibration = 过度振动。振动是旋转设备健康状态的关键指标，过度振动往往是故障的早期信号。" },
    ],
    grammar: [
      { q: "check for 和 check 有什么区别？", a: "check for = 检查是否存在某物（搜寻问题）\ncheck = 检查/查看（确认状态）\n✅ Check for excessive vibration.（检查是否有过度振动 → 搜寻问题）\n✅ Check the vibration level.（检查振动水平 → 确认数值）\n巡检时 check for 用于搜寻异常，check 用于确认正常参数。" },
    ],
    pattern: "Please check for + 异常现象",
    patternExamples: [
      { en: "Please check for oil leakage.", cn: "请检查是否漏油。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check for loose connections.", cn: "请检查是否有松动连接。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check for overheating.", cn: "请检查是否过热。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "振动检查要点：\n① 用手触摸设备外壳感受振动\n② 使用振动计测量具体数值\n③ 与历史数据对比判断趋势\n④ 关注振动频率（低频/高频）\n⑤ 记录振动位置（水平/垂直/轴向）\n振动标准参考 ISO 10816，不同设备有不同的允许值。",
    pronunciation: "excessive 的重音在第二个音节 ces /sɛs/。\nvibration 的重音在第二个音节 bra /breɪ/。",
    quiz: [
      { q: "过度振动可能的原因有哪些？", a: "常见原因：① 转子不平衡 ② 轴对中不良 ③ 轴承磨损 ④ 机械松动 ⑤ 共振。需通过振动分析确定具体原因并采取相应措施。" },
    ],
  },
  {
    id: 1629,
    en: "No abnormal conditions have been found.",
    cn: "未发现异常情况。",
    ipa: "/noʊ æbˈnɔːrməl kənˈdɪʃənz hæv biːn faʊnd/",
    tags: ["第1629句", "巡检结论", "★★★★★"],
    when: "巡检完成后的标准结论。表明所有检查项目均正常，设备可以继续运行。",
    words: [
      { w: "conditions", ipa: "/kənˈdɪʃənz/", pos: "名词复数", cn: "状况；条件", memory: "condition = 状况/条件。\noperating conditions = 运行状况\nabnormal conditions = 异常情况\nnormal conditions = 正常情况", phonics: "con 读 /kən/，di 读 /dɪ/，tions 读 /ʃənz/。", collocations: [["operating conditions", "运行状况"], ["abnormal conditions", "异常情况"], ["working conditions", "工作条件"]], examples: [["Operating conditions are normal.", "运行状况正常。"], ["Check the working conditions.", "检查工作条件。"]] },
    ],
    phrases: [
      { p: "no abnormal conditions", ipa: "/noʊ æbˈnɔːrməl kənˈdɪʃənz/", cn: "无异常情况", why: "no + abnormal + conditions = 无异常情况。这是巡检的标准结论，表明所有检查项目均通过。" },
    ],
    grammar: [
      { q: "have been found 是什么时态？", a: "have been found = 现在完成时被动语态。\nhave been + 过去分词 = 现在完成时被动。\n✅ No abnormal conditions have been found.（未发现异常情况 → 强调'到目前为止'的结果）\n✅ No abnormal conditions were found.（未发现异常情况 → 过去时，强调'过去某个时间点'）\n巡检报告用 have been found，强调'本次巡检'的结果。" },
    ],
    pattern: "No abnormal + 名词 + have been found",
    patternExamples: [
      { en: "No abnormal noise has been detected.", cn: "未检测到异常噪音。", words: [{ w: "abnormal", ipa: "/æbˈnɔːrməl/", cn: "异常", phonics: "ab 读 /æb/，normal 读 /nɔːrməl/" }] },
      { en: "No abnormal temperature has been recorded.", cn: "未记录到异常温度。", words: [{ w: "abnormal", ipa: "/æbˈnɔːrməl/", cn: "异常", phonics: "ab 读 /æb/，normal 读 /nɔːrməl/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
      { en: "No leakage has been found.", cn: "未发现泄漏。", words: [] },
    ],
    thinking: "巡检结论的表达方式：\n① No abnormal conditions have been found.（未发现异常 → 标准结论）\n② All systems are operating normally.（所有系统正常运行 → 积极表述）\n③ Everything is in good condition.（一切状况良好 → 口语化）\n正式巡检报告推荐用①，简洁专业。",
    pronunciation: "conditions 的 con 读 /kən/，不是 /kɒn/。\nfound 读 /faʊnd/，注意与 find 的过去式同形。",
    quiz: [
      { q: "如果巡检发现异常，应该怎么报告？", a: "应报告：① 异常类型（噪音/振动/温度等）② 异常位置 ③ 异常程度 ④ 发现时间 ⑤ 已采取的措施。例如：'Abnormal vibration detected on fan bearing, amplitude 8mm/s, reported to supervisor.'（风机轴承检测到异常振动，振幅8mm/s，已上报主管。）" },
    ],
  },
  {
    id: 1630,
    en: "Please record the inspection results.",
    cn: "请记录巡检结果。",
    ipa: "/pliːz rɪˈkɔːrd ðə ɪnˈspɛkʃən rɪˈzʌlts/",
    tags: ["第1630句", "记录巡检", "★★★★★"],
    when: "巡检完成后必须记录结果，作为设备维护档案的一部分。记录内容包括巡检时间、人员、各项检查结果和发现的问题。",
    words: [
      { w: "record", ipa: "/rɪˈkɔːrd/", pos: "动词", cn: "记录", memory: "record = 记录/录音。\n作动词时读 /rɪˈkɔːrd/，作名词时读 /ˈrekərd/。\nrecord results = 记录结果\nmaintenance record = 维护记录", phonics: "动词 record 重音在第二音节 cord /kɔːrd/。", collocations: [["record results", "记录结果"], ["record data", "记录数据"], ["maintenance record", "维护记录"]], examples: [["Record the inspection results.", "记录巡检结果。"], ["Check the maintenance records.", "检查维护记录。"]] },
      { w: "inspection", ipa: "/ɪnˈspɛkʃən/", pos: "名词", cn: "巡检；检查", memory: "inspect = 检查；-ion = 名词后缀。\ninspection = 巡检/检查。\ninspection results = 巡检结果\npre-inspection = 巡检前", phonics: "in 读 /ɪn/，spec 读 /spɛk/，tion 读 /ʃən/。", collocations: [["inspection results", "巡检结果"], ["inspection report", "巡检报告"], ["routine inspection", "例行巡检"]], examples: [["Submit the inspection report.", "提交巡检报告。"], ["Schedule a routine inspection.", "安排例行巡检。"]] },
    ],
    phrases: [
      { p: "inspection results", ipa: "/ɪnˈspɛkʃən rɪˈzʌlts/", cn: "巡检结果", why: "inspection + results = 巡检结果。记录巡检结果是设备管理的重要环节，便于追踪设备状态变化趋势。" },
    ],
    grammar: [
      { q: "record 作动词和名词有什么区别？", a: "record (v.) = 记录，读 /rɪˈkɔːrd/，重音在第二音节\nrecord (n.) = 记录/唱片，读 /ˈrekərd/，重音在第一音节\n✅ Please record the results.（请记录结果 → 动词）\n✅ Check the maintenance records.（检查维护记录 → 名词）\n英语中很多词通过重音位置区分词性。" },
    ],
    pattern: "Please record the + 检查项目",
    patternExamples: [
      { en: "Please record the test results.", cn: "请记录测试结果。", words: [{ w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "Please record the readings.", cn: "请记录读数。", words: [{ w: "readings", ipa: "/ˈriːdɪŋ/", cn: "读数", phonics: "read 读 /riːd/，ing 读 /ɪŋ/" }] },
      { en: "Please record the maintenance activities.", cn: "请记录维护活动。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
    ],
    thinking: "巡检记录应包含：\n① 巡检日期和时间\n② 巡检人员姓名\n③ 设备编号和名称\n④ 各项检查结果（温度/振动/噪音/液位等）\n⑤ 发现的问题及处理措施\n⑥ 下次巡检计划\n记录应保存至少3年，作为设备全生命周期管理的一部分。",
    pronunciation: "record 作动词时重音在第二音节 /rɪˈkɔːrd/。\n不要读成名词发音 /ˈrekərd/。",
    quiz: [
      { q: "巡检记录应保存多长时间？", a: "根据数据中心最佳实践，巡检记录应保存至少3-5年。这些记录是设备全生命周期管理的重要依据，可用于：① 追踪设备状态趋势 ② 分析故障原因 ③ 制定预防性维护计划 ④ 审计合规性检查。" },
    ],
  },
  {
    id: 1631,
    en: "A cooling tower fan alarm has been detected.",
    cn: "检测到冷却塔风机告警。",
    ipa: "/ə ˈkuːlɪŋ ˈtaʊər fæn əˈlɑːrm hæz biːn dɪˈtɛktɪd/",
    tags: ["第1631句", "风机告警", "★★★★★"],
    when: "冷却塔风机告警通常由风机停转、电机过载、振动过大等原因触发。收到告警后需立即排查原因。",
    words: [
      { w: "fan alarm", ipa: "/fæn əˈlɑːrm/", pos: "名词短语", cn: "风机告警", memory: "fan = 风机；alarm = 告警。\nfan alarm = 风机告警，表示风机系统出现异常。\n常见触发原因：风机停转、电机过载、振动过大。", phonics: "fan 读 /fæn/，alarm 读 /əˈlɑːrm/。", collocations: [["fan alarm", "风机告警"], ["fan failure", "风机故障"], ["fan overload", "风机过载"]], examples: [["The fan alarm is active.", "风机告警处于活动状态。"], ["Clear the fan alarm.", "清除风机告警。"]] },
    ],
    phrases: [
      { p: "fan alarm has been detected", ipa: "/fæn əˈlɑːrm hæz biːn dɪˈtɛktɪd/", cn: "检测到风机告警", why: "fan + alarm + has been + detected = 检测到风机告警。这是告警通知的标准格式，使用被动语态强调'告警被系统检测到'。" },
    ],
    grammar: [
      { q: "has been detected 是什么语态？", a: "has been detected = 现在完成时被动语态。\nhas been + 过去分词 = 现在完成时被动。\n✅ An alarm has been detected.（告警被检测到 → 被动，强调'被系统检测'）\n✅ We detected an alarm.（我们检测到告警 → 主动，强调'我们检测'）\n告警系统使用被动语态，因为检测动作由系统自动完成。" },
    ],
    pattern: "A + 设备 + alarm + has been detected",
    patternExamples: [
      { en: "A pump alarm has been detected.", cn: "检测到泵告警。", words: [{ w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A motor alarm has been detected.", cn: "检测到电机告警。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A compressor alarm has been detected.", cn: "检测到压缩机告警。", words: [{ w: "compressor", ipa: "/kəmˈprɛsər/", cn: "压缩机", phonics: "com 读 /kəm/，pressor 读 /prɛsər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "风机告警排查步骤：\n① 确认告警类型（停转/过载/振动）\n② 现场检查风机运行状态\n③ 检查电机温度和电流\n④ 检查减速箱和传动轴\n⑤ 检查电气连接和控制回路\n⑥ 必要时切换到备用冷却塔",
    pronunciation: "alarm 的 a 读 /ə/，larm 读 /lɑːrm/。\ndetected 的 tec 读 /tɛk/。",
    quiz: [
      { q: "风机告警可能由哪些原因触发？", a: "常见原因：① 风机停转（电机故障/电源问题）② 电机过载（电流过高）③ 振动过大（不平衡/轴承问题）④ 温度过高（电机/轴承）⑤ 控制信号异常。" },
    ],
  },
  {
    id: 1632,
    en: "A low water level alarm has been detected.",
    cn: "检测到低水位告警。",
    ipa: "/ə loʊ ˈwɔːtər ˈlɛvəl əˈlɑːrm hæz biːn dɪˈtɛktɪd/",
    tags: ["第1632句", "低水位告警", "★★★★★"],
    when: "冷却塔水池水位低于设定值时触发低水位告警。可能原因包括：补水不足、泄漏、排污阀未关闭等。",
    words: [
      { w: "low water level", ipa: "/loʊ ˈwɔːtər ˈlɛvəl/", pos: "名词短语", cn: "低水位", memory: "low = 低的；water = 水；level = 水位/水平。\nlow water level = 低水位。\n冷却塔水位过低会导致泵吸空，影响系统循环。", phonics: "low 读 /loʊ/，water 读 /ˈwɔːtər/，level 读 /ˈlɛvəl/。", collocations: [["low water level", "低水位"], ["water level alarm", "水位告警"], ["water level sensor", "水位传感器"]], examples: [["The water level is low.", "水位低。"], ["Check the water level sensor.", "检查水位传感器。"]] },
    ],
    phrases: [
      { p: "low water level alarm", ipa: "/loʊ ˈwɔːtər ˈlɛvəl əˈlɑːrm/", cn: "低水位告警", why: "low + water + level + alarm = 低水位告警。水位过低会影响冷却塔的正常运行，需要及时补水并排查原因。" },
    ],
    grammar: [
      { q: "low 和 low-level 有什么区别？", a: "low = 低的（形容词）\nlow-level = 低层级的（复合形容词）\n✅ low water level = 低水位（low 修饰 water level）\n✅ low-level alarm = 低级别告警（low-level 修饰 alarm）\n本句中 low 修饰 water level，表示'水位低'。" },
    ],
    pattern: "A + 形容词 + 名词 + alarm + has been detected",
    patternExamples: [
      { en: "A high temperature alarm has been detected.", cn: "检测到高温告警。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A low pressure alarm has been detected.", cn: "检测到低压告警。", words: [{ w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A high humidity alarm has been detected.", cn: "检测到高湿度告警。", words: [{ w: "humidity", ipa: "/hjuːˈmɪdɪti/", cn: "湿度", phonics: "hu 读 /hjuː/，midity 读 /mɪdɪti/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "低水位告警处理步骤：\n① 确认水位传感器读数\n② 检查补水阀是否正常工作\n③ 检查是否有泄漏\n④ 检查排污阀是否关闭\n⑤ 手动补水至正常水位\n⑥ 记录告警并分析原因\n水位过低 → 泵吸空 → 系统循环中断 → 制冷能力下降。",
    pronunciation: "level 的 e 读 /ɛ/，不是 /iː/。\n不要读成 level /ˈliːvəl/。",
    quiz: [
      { q: "低水位告警的可能原因有哪些？", a: "常见原因：① 补水系统故障（补水阀/补水泵）② 系统泄漏 ③ 排污阀未关闭 ④ 蒸发量过大 ⑤ 水位传感器故障。" },
    ],
  },
  {
    id: 1633,
    en: "A high conductivity alarm has been detected.",
    cn: "检测到导电率过高告警。",
    ipa: "/ə haɪ ˌkɒndʌkˈtɪvɪti əˈlɑːrm hæz biːn dɪˈtɛktɪd/",
    tags: ["第1633句", "导电率告警", "★★★★★"],
    when: "冷却水导电率过高表示水中溶解的固体物质过多，可能导致结垢和腐蚀。需要通过排污和补水来降低导电率。",
    words: [
      { w: "conductivity", ipa: "/ˌkɒndʌkˈtɪvɪti/", pos: "名词", cn: "导电率", memory: "conduct = 导电/传导；-ivity = 名词后缀。\nconductivity = 导电率，反映水中溶解盐类的含量。\n冷却水导电率通常控制在 1000-3000 μS/cm。", phonics: "con 读 /kɒn/，duc 读 /dʌk/，tivi 读 /tɪvɪti/。重音在 tiv。", collocations: [["water conductivity", "水导电率"], ["conductivity meter", "导电率仪"], ["conductivity limit", "导电率限值"]], examples: [["The conductivity is too high.", "导电率过高。"], ["Calibrate the conductivity meter.", "校准导电率仪。"]] },
    ],
    phrases: [
      { p: "high conductivity alarm", ipa: "/haɪ ˌkɒndʌkˈtɪvɪti əˈlɑːrm/", cn: "导电率过高告警", why: "high + conductivity + alarm = 导电率过高告警。导电率过高表明水质恶化，需要通过排污和补水来改善。" },
    ],
    grammar: [
      { q: "conductivity 和 conductance 有什么区别？", a: "conductivity = 导电率（单位：μS/cm，与电极尺寸无关）\nconductance = 电导（单位：μS，与电极尺寸有关）\n✅ Check the water conductivity.（检查水导电率 → 标准化参数）\n✅ Measure the conductance.（测量电导 → 原始测量值）\n工程中使用 conductivity，因为它是标准化参数。" },
    ],
    pattern: "A high + 参数 + alarm + has been detected",
    patternExamples: [
      { en: "A high temperature alarm has been detected.", cn: "检测到高温告警。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A high pressure alarm has been detected.", cn: "检测到高压告警。", words: [{ w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A high vibration alarm has been detected.", cn: "检测到高振动告警。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "导电率过高处理步骤：\n① 确认导电率读数\n② 检查排污阀是否正常工作\n③ 执行排污操作（排出高浓度水）\n④ 补充新鲜水（降低浓度）\n⑤ 检查水处理药剂投加\n导电率过高 → 结垢风险增加 → 热交换效率下降 → 能耗增加。",
    pronunciation: "conductivity 的重音在第四个音节 tiv /tɪv/。\n不要读成 con-DUC-ti-vi-ty。",
    quiz: [
      { q: "如何降低冷却水导电率？", a: "降低导电率的方法：① 排污（排出高浓度水）② 补水（稀释浓度）③ 检查水处理药剂投加 ④ 检查是否有外来污染源。通常排污+补水是最直接有效的方法。" },
    ],
  },
  {
    id: 1634,
    en: "Please investigate the alarm immediately.",
    cn: "请立即调查告警原因。",
    ipa: "/pliːz ɪnˈvɛstɪɡeɪt ðə əˈlɑːrm ɪˈmiːdiətli/",
    tags: ["第1634句", "调查告警", "★★★★★"],
    when: "收到告警后需要立即调查原因，确定是真实故障还是误报，并采取相应措施。",
    words: [
      { w: "investigate", ipa: "/ɪnˈvɛstɪɡeɪt/", pos: "动词", cn: "调查；排查", memory: "investigate = 调查/排查，系统地查找问题原因。\ninvestigate the alarm = 调查告警原因\ninvestigate the failure = 调查故障原因", phonics: "in 读 /ɪn/，ves 读 /vɛs/，ti 读 /tɪ/，gate 读 /ɡeɪt/。", collocations: [["investigate the alarm", "调查告警"], ["investigate the cause", "调查原因"], ["investigate the failure", "调查故障"]], examples: [["Investigate the root cause.", "调查根本原因。"], ["The team is investigating.", "团队正在调查。"]] },
      { w: "immediately", ipa: "/ɪˈmiːdiətli/", pos: "副词", cn: "立即；马上", memory: "immediate = 立即的；-ly = 副词后缀。\nimmediately = 立即/马上，表示紧迫性。\n告警处理要求 immediately 响应。", phonics: "im 读 /ɪm/，me 读 /miː/，di 读 /dɪ/，ately 读 /ətli/。", collocations: [["respond immediately", "立即响应"], ["investigate immediately", "立即调查"], ["report immediately", "立即上报"]], examples: [["Respond immediately to alarms.", "立即响应告警。"], ["Report any issues immediately.", "立即报告任何问题。"]] },
    ],
    phrases: [
      { p: "investigate the alarm", ipa: "/ɪnˈvɛstɪɡeɪt ðə əˈlɑːrm/", cn: "调查告警", why: "investigate + the + alarm = 调查告警。收到告警后需要系统地排查原因，确定是真实故障还是误报。" },
    ],
    grammar: [
      { q: "investigate 和 check 有什么区别？", a: "investigate = 调查/排查（系统地查找原因）\ncheck = 检查/查看（快速确认状态）\n✅ Investigate the alarm.（调查告警 → 深入查找原因）\n✅ Check the alarm status.（检查告警状态 → 确认当前状态）\ninvestigate 用于需要深入分析的复杂问题。" },
    ],
    pattern: "Please investigate + 问题 + immediately",
    patternExamples: [
      { en: "Please investigate the failure immediately.", cn: "请立即调查故障。", words: [{ w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Please investigate the leak immediately.", cn: "请立即调查泄漏。", words: [{ w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Please investigate the error immediately.", cn: "请立即调查错误。", words: [{ w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
    ],
    thinking: "告警调查步骤：\n① 确认告警信息（类型/时间/位置）\n② 现场查看设备状态\n③ 检查相关传感器和仪表\n④ 分析可能原因\n⑤ 采取临时措施\n⑥ 记录调查结果\n⑦ 制定长期解决方案",
    pronunciation: "investigate 的重音在第二个音节 ves /vɛs/。\nimmediately 的重音在第二个音节 me /miː/。",
    quiz: [
      { q: "告警调查的第一步应该做什么？", a: "第一步是确认告警信息：① 告警类型（什么告警）② 告警时间（什么时候发生）③ 告警位置（哪个设备）④ 告警级别（Critical/Warning）。确认信息后再进行现场调查。" },
    ],
  },
  {
    id: 1635,
    en: "Please switch to the standby cooling tower.",
    cn: "请切换到备用冷却塔。",
    ipa: "/pliːz swɪtʃ tuː ðə ˈstændbaɪ ˈkuːlɪŋ ˈtaʊər/",
    tags: ["第1635句", "切换备用", "★★★★★"],
    when: "当主冷却塔出现故障时，需要切换到备用冷却塔以维持制冷能力。这是数据中心冗余设计的重要体现。",
    words: [
      { w: "switch to", ipa: "/swɪtʃ tuː/", pos: "动词短语", cn: "切换到", memory: "switch = 切换/开关；switch to = 切换到。\nswitch to standby = 切换到备用\nswitch to manual = 切换到手动", phonics: "switch 读 /swɪtʃ/，to 读 /tuː/。", collocations: [["switch to standby", "切换到备用"], ["switch to manual", "切换到手动"], ["switch to backup", "切换到备份"]], examples: [["Switch to the backup generator.", "切换到备用发电机。"], ["Switch to manual mode.", "切换到手动模式。"]] },
      { w: "standby", ipa: "/ˈstændbaɪ/", pos: "形容词", cn: "备用的", memory: "stand = 站立；by = 旁边。\nstandby = 备用的/待命的，随时准备启用。\nstandby unit = 备用机组\nstandby mode = 备用模式", phonics: "stand 读 /stænd/，by 读 /baɪ/。", collocations: [["standby cooling tower", "备用冷却塔"], ["standby generator", "备用发电机"], ["on standby", "处于备用状态"]], examples: [["The standby unit is ready.", "备用机组已就绪。"], ["The generator is on standby.", "发电机处于备用状态。"]] },
    ],
    phrases: [
      { p: "switch to standby", ipa: "/swɪtʃ tuː ˈstændbaɪ/", cn: "切换到备用", why: "switch + to + standby = 切换到备用。当主设备故障时，切换到备用设备是维持系统运行的标准操作。" },
    ],
    grammar: [
      { q: "standby 和 backup 有什么区别？", a: "standby = 备用/待命（强调'随时准备启用'）\nbackup = 备份（强调'副本/后备'）\n✅ standby cooling tower = 备用冷却塔（随时准备启动）\n✅ backup data = 备份数据（数据的副本）\n工程设备多用 standby，数据/文件多用 backup。" },
    ],
    pattern: "Please switch to the standby + 设备",
    patternExamples: [
      { en: "Please switch to the standby generator.", cn: "请切换到备用发电机。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "Please switch to the standby pump.", cn: "请切换到备用泵。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }] },
      { en: "Please switch to the standby CRAC unit.", cn: "请切换到备用精密空调。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
    ],
    thinking: "切换备用冷却塔步骤：\n① 确认备用冷却塔处于待机状态\n② 启动备用冷却塔风机\n③ 打开备用冷却塔进出水阀门\n④ 关闭故障冷却塔阀门\n⑤ 监控系统参数变化\n⑥ 确认制冷能力恢复正常",
    pronunciation: "standby 的 stand 读 /stænd/，不是 /stɑːnd/。\nswitch 的 i 读 /ɪ/，不是 /iː/。",
    quiz: [
      { q: "切换备用设备前需要确认什么？", a: "需要确认：① 备用设备处于待机状态 ② 备用设备已完成维护检查 ③ 备用设备电源正常 ④ 相关阀门/开关位置正确 ⑤ 监控系统正常。" },
    ],
  },
  {
    id: 1636,
    en: "The standby cooling tower has started successfully.",
    cn: "备用冷却塔已经成功启动。",
    ipa: "/ðə ˈstændbaɪ ˈkuːlɪŋ ˈtaʊər hæz ˈstɑːrtɪd səkˈsɛsfəli/",
    tags: ["第1636句", "备用启动", "★★★★★"],
    when: "确认备用冷却塔已成功启动，系统制冷能力得到恢复。这是切换操作完成的重要确认。",
    words: [
      { w: "started successfully", ipa: "/ˈstɑːrtɪd səkˈsɛsfəli/", pos: "动词短语", cn: "成功启动", memory: "start = 启动；successfully = 成功地。\nstarted successfully = 成功启动。\n用于确认设备启动操作已顺利完成。", phonics: "started 读 /ˈstɑːrtɪd/，successfully 读 /səkˈsɛsfəli/。", collocations: [["started successfully", "成功启动"], ["completed successfully", "成功完成"], ["connected successfully", "成功连接"]], examples: [["The generator started successfully.", "发电机成功启动。"], ["The test completed successfully.", "测试成功完成。"]] },
    ],
    phrases: [
      { p: "has started successfully", ipa: "/hæz ˈstɑːrtɪd səkˈsɛsfəli/", cn: "已经成功启动", why: "has + started + successfully = 已经成功启动。使用现在完成时强调'启动动作已完成且成功'。" },
    ],
    grammar: [
      { q: "has started 和 started 有什么区别？", a: "has started = 已经启动（现在完成时，强调'已完成'）\nstarted = 启动了（过去时，强调'过去某个时间点'）\n✅ The tower has started successfully.（冷却塔已经成功启动 → 强调'现在已运行'）\n✅ The tower started at 10:00.（冷却塔在10点启动 → 强调'启动时间'）\n汇报操作用 has started，强调当前状态。" },
    ],
    pattern: "The standby + 设备 + has started successfully",
    patternExamples: [
      { en: "The standby generator has started successfully.", cn: "备用发电机已经成功启动。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "started", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "The standby pump has started successfully.", cn: "备用泵已经成功启动。", words: [{ w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "started", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "The backup system has started successfully.", cn: "备用系统已经成功启动。", words: [{ w: "backup", ipa: "/ˈbækʌp/", cn: "备份", phonics: "back 读 /bæk/，up 读 /ʌp/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "started", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
    ],
    thinking: "备用冷却塔启动确认要点：\n① 风机已启动并正常运行\n② 水泵已启动并正常循环\n③ 进出水阀门已打开\n④ 系统参数（温度/压力/流量）正常\n⑤ 无异常噪音或振动\n确认所有参数正常后，才能报告'启动成功'。",
    pronunciation: "successfully 的重音在第二个音节 ces /sɛs/。\n不要读成 suc-CESS-ful-ly。",
    quiz: [
      { q: "备用冷却塔启动后需要检查哪些参数？", a: "需要检查：① 风机运行状态（转速/电流/振动）② 水泵运行状态（流量/压力/电流）③ 进出水温度 ④ 系统压力 ⑤ 水质参数（pH/导电率）。所有参数正常才能确认启动成功。" },
    ],
  },
  {
    id: 1637,
    en: "The cooling capacity has returned to normal.",
    cn: "冷却能力已经恢复正常。",
    ipa: "/ðə ˈkuːlɪŋ kəˈpæsɪti hæz rɪˈtɜːrnd tuː ˈnɔːrməl/",
    tags: ["第1637句", "能力恢复", "★★★★★"],
    when: "确认制冷系统冷却能力已恢复正常水平。这是切换备用设备后的重要确认，表明系统功能已完全恢复。",
    words: [
      { w: "cooling capacity", ipa: "/ˈkuːlɪŋ kəˈpæsɪti/", pos: "名词短语", cn: "冷却能力；制冷量", memory: "cooling = 冷却；capacity = 能力/容量。\ncooling capacity = 冷却能力/制冷量，通常用 kW 或 RT（冷吨）表示。\n冷却能力恢复 = 系统可以正常散热。", phonics: "cooling 读 /ˈkuːlɪŋ/，capacity 读 /kəˈpæsɪti/。", collocations: [["cooling capacity", "冷却能力"], ["rated capacity", "额定容量"], ["capacity restoration", "能力恢复"]], examples: [["The cooling capacity is 500 kW.", "冷却能力为500kW。"], ["Check the rated capacity.", "检查额定容量。"]] },
      { w: "returned to normal", ipa: "/rɪˈtɜːrnd tuː ˈnɔːrməl/", pos: "动词短语", cn: "恢复正常", memory: "return = 返回；normal = 正常。\nreturned to normal = 恢复正常。\n用于描述系统或参数从异常状态恢复到正常状态。", phonics: "returned 读 /rɪˈtɜːrnd/，normal 读 /ˈnɔːrməl/。", collocations: [["returned to normal", "恢复正常"], ["back to normal", "回到正常"], ["normal operation", "正常运行"]], examples: [["The system has returned to normal.", "系统已恢复正常。"], ["Temperature is back to normal.", "温度已回到正常。"]] },
    ],
    phrases: [
      { p: "cooling capacity has returned to normal", ipa: "/ˈkuːlɪŋ kəˈpæsɪti hæz rɪˈtɜːrnd tuː ˈnɔːrməl/", cn: "冷却能力已恢复正常", why: "cooling + capacity + has + returned + to + normal = 冷却能力已恢复正常。这是制冷系统故障处理完成后的关键确认。" },
    ],
    grammar: [
      { q: "has returned 和 is returning 有什么区别？", a: "has returned = 已经恢复（完成状态）\nis returning = 正在恢复（进行状态）\n✅ Cooling capacity has returned to normal.（冷却能力已恢复正常 → 已完成）\n✅ Cooling capacity is returning to normal.（冷却能力正在恢复 → 进行中）\n确认操作用 has returned，表示'已完全恢复'。" },
    ],
    pattern: "The + 系统参数 + has returned to normal",
    patternExamples: [
      { en: "The temperature has returned to normal.", cn: "温度已恢复正常。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The pressure has returned to normal.", cn: "压力已恢复正常。", words: [{ w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The flow rate has returned to normal.", cn: "流量已恢复正常。", words: [{ w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "冷却能力恢复确认要点：\n① 出水温度达到设定值\n② 系统压力正常\n③ 流量正常\n④ IT负载温度稳定\n⑤ 无持续告警\n冷却能力恢复是制冷系统故障处理的最终目标。",
    pronunciation: "capacity 的重音在第二个音节 pac /pæs/。\nreturned 的 turn 读 /tɜːrn/，注意 r 音。",
    quiz: [
      { q: "如何确认冷却能力已恢复？", a: "确认方法：① 检查出水温度是否达到设定值 ② 检查系统压力和流量是否正常 ③ 监控IT负载温度是否稳定 ④ 确认所有相关告警已清除 ⑤ 对比故障前后的系统参数。" },
    ],
  },
  {
    id: 1638,
    en: "All cooling tower alarms have been cleared.",
    cn: "所有冷却塔告警已经恢复。",
    ipa: "/ɔːl ˈkuːlɪŋ ˈtaʊər əˈlɑːrmz hæv biːn klɪərd/",
    tags: ["第1638句", "告警恢复", "★★★★★"],
    when: "确认所有冷却塔相关告警已清除，系统恢复正常运行状态。这是告警处理流程的最后确认。",
    words: [
      { w: "cleared", ipa: "/klɪərd/", pos: "动词过去分词", cn: "清除；恢复", memory: "clear = 清除/清除；cleared = 已清除/已恢复。\nalarm cleared = 告警已恢复/已清除。\n在BMS系统中，cleared 表示告警条件已消除。", phonics: "clear 读 /klɪər/，ed 读 /d/。", collocations: [["alarm cleared", "告警恢复"], ["cleared successfully", "成功清除"], ["all alarms cleared", "所有告警恢复"]], examples: [["The alarm has been cleared.", "告警已恢复。"], ["Clear all active alarms.", "清除所有活动告警。"]] },
    ],
    phrases: [
      { p: "alarms have been cleared", ipa: "/əˈlɑːrmz hæv biːn klɪərd/", cn: "告警已恢复", why: "alarms + have + been + cleared = 告警已恢复。使用现在完成时被动语态，表示'告警已被系统清除'。" },
    ],
    grammar: [
      { q: "cleared 和 resolved 有什么区别？", a: "cleared = 清除/恢复（告警条件消除，系统自动清除）\nresolved = 解决（问题已处理完毕）\n✅ The alarm has been cleared.（告警已恢复 → 告警条件消除）\n✅ The issue has been resolved.（问题已解决 → 处理完毕）\ncleared 用于告警状态，resolved 用于问题处理。" },
    ],
    pattern: "All + 系统 + alarms + have been cleared",
    patternExamples: [
      { en: "All UPS alarms have been cleared.", cn: "所有UPS告警已恢复。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
      { en: "All generator alarms have been cleared.", cn: "所有发电机告警已恢复。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
      { en: "All fire alarms have been cleared.", cn: "所有消防告警已恢复。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
    ],
    thinking: "告警恢复确认流程：\n① 确认故障原因已排除\n② 确认设备运行正常\n③ 在BMS系统中确认告警状态变为 cleared\n④ 记录告警处理过程\n⑤ 更新设备维护记录\n所有告警恢复后才能关闭故障处理工单。",
    pronunciation: "cleared 的 ear 读 /ɪər/，不是 /iː/。\n不要读成 cleared /kliːrd/。",
    quiz: [
      { q: "告警恢复后还需要做什么？", a: "告警恢复后需要：① 记录告警处理过程 ② 更新设备维护记录 ③ 分析告警根本原因 ④ 制定预防措施 ⑤ 关闭故障处理工单 ⑥ 通知相关人员。" },
    ],
  },
  {
    id: 1639,
    en: "Please update the cooling tower maintenance record.",
    cn: "请更新冷却塔维护记录。",
    ipa: "/pliːz ˌʌpˈdeɪt ðə ˈkuːlɪŋ ˈtaʊər ˈmeɪntənəns ˈrekərd/",
    tags: ["第1639句", "更新记录", "★★★★★"],
    when: "故障处理完成后需要更新维护记录，记录故障信息、处理过程和预防措施。这是设备管理的重要环节。",
    words: [
      { w: "update", ipa: "/ˌʌpˈdeɪt/", pos: "动词", cn: "更新", memory: "up = 向上；date = 日期/更新。\nupdate = 更新，使信息保持最新。\nupdate the record = 更新记录\nupdate the system = 更新系统", phonics: "up 读 /ʌp/，date 读 /deɪt/。重音在 date。", collocations: [["update the record", "更新记录"], ["update the log", "更新日志"], ["update the status", "更新状态"]], examples: [["Update the maintenance record.", "更新维护记录。"], ["The system needs updating.", "系统需要更新。"]] },
      { w: "maintenance record", ipa: "/ˈmeɪntənəns ˈrekərd/", pos: "名词短语", cn: "维护记录", memory: "maintenance = 维护；record = 记录（名词读 /ˈrekərd/）。\nmaintenance record = 维护记录，记录设备的维护保养历史。\n维护记录是设备全生命周期管理的重要文档。", phonics: "maintenance 读 /ˈmeɪntənəns/，record 读 /ˈrekərd/。", collocations: [["maintenance record", "维护记录"], ["service record", "服务记录"], ["repair record", "维修记录"]], examples: [["Check the maintenance records.", "检查维护记录。"], ["Update the service record.", "更新服务记录。"]] },
    ],
    phrases: [
      { p: "maintenance record", ipa: "/ˈmeɪntənəns ˈrekərd/", cn: "维护记录", why: "maintenance + record = 维护记录。维护记录是设备管理的重要文档，记录所有维护、维修和故障处理信息。" },
    ],
    grammar: [
      { q: "update 和 upgrade 有什么区别？", a: "update = 更新（使信息/软件保持最新）\nupgrade = 升级（提升功能/性能）\n✅ Update the maintenance record.（更新维护记录 → 添加新信息）\n✅ Upgrade the cooling system.（升级冷却系统 → 提升性能）\n记录用 update，设备/系统用 upgrade。" },
    ],
    pattern: "Please update the + 文档/记录",
    patternExamples: [
      { en: "Please update the inspection log.", cn: "请更新巡检日志。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }] },
      { en: "Please update the equipment register.", cn: "请更新设备台账。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }] },
      { en: "Please update the operation manual.", cn: "请更新操作手册。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "operation", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }] },
    ],
    thinking: "维护记录应包含：\n① 故障发生时间和现象\n② 故障原因分析\n③ 处理过程和措施\n④ 更换的备件清单\n⑤ 恢复时间\n⑥ 预防措施建议\n⑦ 责任人签字\n完整的维护记录有助于设备管理和故障预防。",
    pronunciation: "update 的重音在第二个音节 date /deɪt/。\nmaintenance 的 ten 读 /tən/，不是 /teɪn/。",
    quiz: [
      { q: "维护记录应该保存多长时间？", a: "根据数据中心最佳实践，维护记录应保存至少5-10年，或设备全生命周期。这些记录用于：① 追踪设备历史 ② 分析故障趋势 ③ 制定维护计划 ④ 设备更换决策 ⑤ 审计合规。" },
    ],
  },
  {
    id: 1640,
    en: "The cooling tower system is operating normally.",
    cn: "冷却塔系统运行正常。",
    ipa: "/ðə ˈkuːlɪŋ ˈtaʊər ˈsɪstəm ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1640句", "系统正常", "★★★★★"],
    when: "冷却塔系统故障处理完成后的最终确认，表明整个系统已恢复正常运行状态。",
    words: [
      { w: "cooling tower system", ipa: "/ˈkuːlɪŋ ˈtaʊər ˈsɪstəm/", pos: "名词短语", cn: "冷却塔系统", memory: "cooling = 冷却；tower = 塔；system = 系统。\ncooling tower system = 冷却塔系统，包括冷却塔本体、水泵、管道、阀门等。\n系统是数据中心制冷链的重要组成部分。", phonics: "cooling 读 /ˈkuːlɪŋ/，tower 读 /ˈtaʊər/，system 读 /ˈsɪstəm/。", collocations: [["cooling tower system", "冷却塔系统"], ["cooling system", "冷却系统"], ["system status", "系统状态"]], examples: [["The cooling system is running.", "冷却系统正在运行。"], ["Check the system status.", "检查系统状态。"]] },
      { w: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", pos: "动词短语", cn: "正常运行", memory: "operating = 运行中；normally = 正常地。\noperating normally = 正常运行。\n这是汇报设备状态的标准用语。", phonics: "operating 读 /ˈɒpəreɪtɪŋ/，normally 读 /ˈnɔːrməli/。", collocations: [["operating normally", "正常运行"], ["running normally", "正常运行"], ["functioning normally", "正常运作"]], examples: [["All systems are operating normally.", "所有系统正常运行。"], ["The equipment is functioning normally.", "设备正常运作。"]] },
    ],
    phrases: [
      { p: "cooling tower system is operating normally", ipa: "/ˈkuːlɪŋ ˈtaʊər ˈsɪstəm ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "冷却塔系统运行正常", why: "cooling + tower + system + is + operating + normally = 冷却塔系统运行正常。这是冷却塔部分的总结句，确认整个系统已恢复正常。" },
    ],
    grammar: [
      { q: "is operating 和 operates 有什么区别？", a: "is operating = 正在运行（现在进行时，强调当前状态）\noperates = 运行（一般现在时，描述常态）\n✅ The system is operating normally.（系统正在正常运行 → 当前状态）\n✅ The system operates 24/7.（系统24小时运行 → 常态）\n故障处理后用 is operating，强调'此刻的运行状态'。" },
    ],
    pattern: "The + 系统 + is operating normally",
    patternExamples: [
      { en: "The HVAC system is operating normally.", cn: "暖通系统运行正常。", words: [{ w: "hvac", ipa: "/ˌeɪtʃˈviːˈeɪˈsiː/", cn: "暖通", phonics: "H-V-A-C 逐字母读" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "The electrical system is operating normally.", cn: "电气系统运行正常。", words: [{ w: "electrical", ipa: "/ɪˈlɛktrɪkəl/", cn: "电气", phonics: "e 读 /ɪ/，lectrical 读 /lɛktrɪkəl/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "The fire protection system is operating normally.", cn: "消防系统运行正常。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "protection", ipa: "/prəˈtɛkʃən/", cn: "保护", phonics: "pro 读 /prə/，tection 读 /tɛkʃən/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
    ],
    thinking: "冷却塔系统正常运行标准：\n① 所有冷却塔风机正常运行\n② 水泵运行正常，流量压力稳定\n③ 进出水温度在正常范围\n④ 水质参数（pH/导电率/浊度）正常\n⑤ 无活动告警\n⑥ 补水系统正常工作\n系统正常运行是数据中心制冷保障的基础。",
    pronunciation: "system 的 sys 读 /sɪs/，不是 /saɪs/。\nnormally 的 r 在美式英语中发音，英式中不发音。",
    quiz: [
      { q: "冷却塔系统正常运行需要满足哪些条件？", a: "需要满足：① 风机运行正常 ② 水泵运行正常 ③ 温度压力正常 ④ 水质合格 ⑤ 无告警 ⑥ 补水正常 ⑦ 阀门位置正确。所有条件满足才能确认系统正常运行。" },
    ],
  },
];

export default MOCK_SENTENCES_PART24B;

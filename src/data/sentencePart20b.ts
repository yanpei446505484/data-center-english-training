// EXPORTS: MOCK_SENTENCES_PART20B
// Part 20B: 中压开关柜后半段 (1461-1480)

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART20B: ISentence[] = [
  {
    id: 1461,
    en: "Please open the grounding switch.",
    cn: "请分开接地开关。",
    ipa: "/pliːz ˈoʊpən ðə ˈɡraʊndɪŋ swɪtʃ/",
    tags: ["第1461句", "接地开关", "★★★★★"],
    when: "接地开关用于将设备接地，确保检修安全。分开接地开关是送电前的必要步骤。",
    words: [
      { w: "grounding switch", ipa: "/ˈɡraʊndɪŋ swɪtʃ/", pos: "名词短语", cn: "接地开关", memory: "grounding = 接地；switch = 开关。\n接地开关用于将电气设备接地，防止残余电荷造成触电事故。\n在检修时合上接地开关确保安全，送电前必须分开。", phonics: "ground 读 /ɡraʊnd/，ing 读 /ɪŋ/。", collocations: [["grounding switch", "接地开关"], ["ground connection", "接地连接"], ["ground fault", "接地故障"]], examples: [["Please close the grounding switch before maintenance.", "检修前请合上接地开关。"], ["The grounding switch is open.", "接地开关已分开。"]] },
    ],
    phrases: [
      { p: "open the grounding switch", ipa: "/ˈoʊpən ðə ˈɡraʊndɪŋ swɪtʃ/", cn: "分开接地开关", why: "open = 分开/打开。接地开关分开意味着断开接地连接，设备准备带电运行。" },
    ],
    grammar: [
      { q: "为什么用 open 而不是 close？", a: "open = 分开（断开电路）\nclose = 合上（接通电路）\n接地开关 open = 断开接地连接，准备送电。\n接地开关 close = 接通接地，准备检修。\n两者含义相反，必须准确使用。" },
    ],
    pattern: "Please open the + 设备/开关",
    patternExamples: [
      { en: "Please open the circuit breaker.", cn: "请分闸断路器。", words: [{ w: "circuit", ipa: "/ˈsɜːrkɪt/", cn: "电路", phonics: "cir 读 /sɜːr/，cuit 读 /kɪt/" }, { w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
      { en: "Please open the disconnect switch.", cn: "请分开隔离开关。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "Please open the ground knife.", cn: "请分开接地刀闸。", words: [] },
    ],
    thinking: "接地开关是安全操作的关键设备。\n操作顺序：\n① 停电检修时：先分闸断路器 → 再合上接地开关（确保安全）\n② 送电操作时：先分开接地开关（本句）→ 再合闸断路器\n接地开关未分开就合闸会导致接地短路事故。",
    pronunciation: "grounding 的 gr 读 /ɡr/，不要读成 /ɡɹ/。\nswitch 的 tch 读 /tʃ/。",
    quiz: [
      { q: "送电前接地开关应该处于什么状态？", a: "送电前接地开关必须处于 open（分开）状态。如果接地开关处于 closed（合上）状态就合闸送电，会造成接地短路事故。" },
    ],
  },
  {
    id: 1462,
    en: "Please close the grounding switch.",
    cn: "请合上接地开关。",
    ipa: "/pliːz kloʊz ðə ˈɡraʊndɪŋ swɪtʃ/",
    tags: ["第1462句", "接地开关", "★★★★★"],
    when: "设备停电检修时，必须合上接地开关，将设备接地，防止残余电荷或误送电造成触电。",
    words: [
      { w: "close", ipa: "/kloʊz/", pos: "动词", cn: "合上；关闭", memory: "close = 合上/关闭。\n在电气操作中：\nclose the switch = 合上开关（接通电路）\nclose the breaker = 合闸断路器\n与 open（分开）相反。", phonics: "close 读 /kloʊz/，注意 s 读 /z/。", collocations: [["close the switch", "合上开关"], ["close the breaker", "合闸断路器"], ["close the circuit", "闭合电路"]], examples: [["Please close the grounding switch.", "请合上接地开关。"], ["The breaker is closed.", "断路器已合闸。"]] },
    ],
    phrases: [
      { p: "close the grounding switch", ipa: "/kloʊz ðə ˈɡraʊndɪŋ swɪtʃ/", cn: "合上接地开关", why: "close = 合上。合上接地开关将设备接地，是检修安全操作的标准步骤。" },
    ],
    grammar: [
      { q: "close 和 open 在电气操作中的区别？", a: "close = 合上/接通（使电流可以流通）\nopen = 分开/断开（切断电流）\n\n接地开关：\n- close = 合上接地 → 设备接地，安全检修\n- open = 分开接地 → 断开接地，准备送电\n\n断路器：\n- close = 合闸 → 送电\n- open = 分闸 → 停电" },
    ],
    pattern: "Please close the + 设备/开关",
    patternExamples: [
      { en: "Please close the circuit breaker.", cn: "请合闸断路器。", words: [{ w: "circuit", ipa: "/ˈsɜːrkɪt/", cn: "电路", phonics: "cir 读 /sɜːr/，cuit 读 /kɪt/" }, { w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
      { en: "Please close the disconnect switch.", cn: "请合上隔离开关。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "Please close the contactor.", cn: "请合上接触器。", words: [] },
    ],
    thinking: "合上接地开关是'五防'的重要内容之一。\n五防联锁确保：\n① 防止误分、误合断路器\n② 防止带负荷拉、合隔离开关\n③ 防止带电合接地开关（本句的反向操作）\n④ 防止带接地开关合闸送电\n⑤ 防止误入带电间隔\n\n合上接地开关前必须确认设备已停电。",
    pronunciation: "close 的 s 读 /z/，不是 /s/。\nswitch 的 tch 读 /tʃ/。",
    quiz: [
      { q: "检修时为什么要合上接地开关？", a: "检修时合上接地开关的目的：① 将设备可靠接地，释放残余电荷 ② 防止误送电时电流通过人体 ③ 为检修人员提供安全保障。这是电气安全操作规程的强制要求。" },
    ],
  },
  {
    id: 1463,
    en: "Please verify the grounding switch position.",
    cn: "请确认接地开关位置。",
    ipa: "/pliːz ˈvɛrɪfaɪ ðə ˈɡraʊndɪŋ swɪtʃ pəˈzɪʃən/",
    tags: ["第1463句", "接地开关", "★★★★★"],
    when: "操作接地开关后，必须确认其实际位置与操作意图一致，防止误操作。",
    words: [
      { w: "verify", ipa: "/ˈvɛrɪfaɪ/", pos: "动词", cn: "确认；核实", memory: "verify = 确认/核实/验证。\n在操作后 verify = 确认操作结果是否符合预期。\n与 confirm（确认）类似，但 verify 更强调'验证'。", phonics: "ver 读 /vɛr/，ify 读 /ɪfaɪ/，重音在第一音节。", collocations: [["verify position", "确认位置"], ["verify status", "确认状态"], ["verify operation", "确认操作"]], examples: [["Please verify the breaker position.", "请确认断路器位置。"], ["Please verify the switch status.", "请确认开关状态。"]] },
      { w: "position", ipa: "/pəˈzɪʃən/", pos: "名词", cn: "位置", memory: "position = 位置/状态。\n接地开关 position 包括：\n- closed（合上）\n- open（分开）", phonics: "po 读 /pə/，si 读 /zɪ/，tion 读 /ʃən/。", collocations: [["switch position", "开关位置"], ["breaker position", "断路器位置"], ["in position", "在位置上"]], examples: [["What is the current position?", "当前位置是什么？"], ["The switch is in the open position.", "开关处于分开位置。"]] },
    ],
    phrases: [
      { p: "verify the position", ipa: "/ˈvɛrɪfaɪ ðə pəˈzɪʃən/", cn: "确认位置", why: "verify + position = 确认位置。操作后必须验证设备实际位置，不能仅凭操作感觉判断。" },
    ],
    grammar: [
      { q: "verify 和 check 有什么区别？", a: "verify = 核实/验证（确认是否符合预期）\ncheck = 检查/查看（了解当前状态）\n\n✅ Please verify the switch position.（请核实开关位置 → 确认是否符合操作意图）\n✅ Please check the switch position.（请检查开关位置 → 看看当前位置是什么）\n\n操作后用 verify，例行检查用 check。" },
    ],
    pattern: "Please verify the + 设备 + position",
    patternExamples: [
      { en: "Please verify the breaker position.", cn: "请确认断路器位置。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
      { en: "Please verify the disconnect switch position.", cn: "请确认隔离开关位置。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "Please verify the grounding knife position.", cn: "请确认接地刀闸位置。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
    ],
    thinking: "确认接地开关位置是操作闭环的重要环节。\n确认方法：\n① 查看位置指示器（机械指示）\n② 查看监控系统状态\n③ 必要时现场查看实际刀闸位置\n\n不能仅凭操作手柄位置判断，必须多重确认。",
    pronunciation: "verify 的重音在第一音节 /ˈvɛrɪfaɪ/。\nposition 的重音在第二音节 /pəˈzɪʃən/。",
    quiz: [
      { q: "操作接地开关后为什么要确认位置？", a: "操作后确认位置的原因：① 确保操作成功执行（防止操作机构卡涩未实际动作）② 确保操作方向正确（防止误操作）③ 为后续操作提供准确状态依据。这是'操作闭环'的必要步骤。" },
    ],
  },
  {
    id: 1464,
    en: "The grounding switch is closed.",
    cn: "接地开关已经合上。",
    ipa: "/ðə ˈɡraʊndɪŋ swɪtʃ ɪz kloʊzd/",
    tags: ["第1464句", "接地开关", "★★★★★"],
    when: "确认接地开关已合上，设备已接地，可以进行检修作业。",
    words: [
      { w: "closed", ipa: "/kloʊzd/", pos: "形容词", cn: "合上的；闭合的", memory: "closed = 合上的/闭合的。\n表示开关处于接通状态。\n接地开关 closed = 接地已接通，设备安全接地。", phonics: "close 读 /kloʊz/，d 读 /d/。", collocations: [["switch is closed", "开关已合上"], ["circuit is closed", "电路已闭合"], ["breaker is closed", "断路器已合闸"]], examples: [["The grounding switch is closed.", "接地开关已合上。"], ["The circuit is closed.", "电路已闭合。"]] },
    ],
    phrases: [
      { p: "is closed", ipa: "/ɪz kloʊzd/", cn: "已经合上", why: "is + closed = 已合上（状态描述）。closed 作形容词表示'闭合的/接通的'状态。" },
    ],
    grammar: [
      { q: "closed 是过去式还是形容词？", a: "在这里 closed 是形容词，表示状态。\n\nis closed = 已合上（状态）\nwas closed = 被合上（动作的被动语态）\n\n✅ The switch is closed.（开关处于合上状态 → 描述当前状态）\n✅ The switch was closed by the operator.（开关被操作员合上 → 描述动作）" },
    ],
    pattern: "The + 设备 + is closed",
    patternExamples: [
      { en: "The circuit breaker is closed.", cn: "断路器已合闸。", words: [{ w: "circuit", ipa: "/ˈsɜːrkɪt/", cn: "电路", phonics: "cir 读 /sɜːr/，cuit 读 /kɪt/" }, { w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
      { en: "The disconnect switch is closed.", cn: "隔离开关已合上。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "The contactor is closed.", cn: "接触器已闭合。", words: [] },
    ],
    thinking: "接地开关 is closed 表示设备已安全接地。\n这是检修作业的前提条件：\n① 确认断路器已分闸\n② 确认隔离开关已分开\n③ 确认接地开关已合上（本句）\n④ 悬挂'在此工作'标示牌\n\n只有完成以上步骤，才能开始检修作业。",
    pronunciation: "closed 的 s 读 /z/，d 读 /d/。\n注意不要读成 /kloʊst/。",
    quiz: [
      { q: "接地开关已合上，怎么说？", a: "The grounding switch is closed. 或 The grounding switch has been closed." },
    ],
  },
  {
    id: 1465,
    en: "The grounding switch is open.",
    cn: "接地开关已经分开。",
    ipa: "/ðə ˈɡraʊndɪŋ swɪtʃ ɪz ˈoʊpən/",
    tags: ["第1465句", "接地开关", "★★★★★"],
    when: "确认接地开关已分开，设备接地已解除，可以进行送电操作。",
    words: [
      { w: "open", ipa: "/ˈoʊpən/", pos: "形容词", cn: "分开的；断开的", memory: "open = 分开的/断开的。\n表示开关处于断开状态。\n接地开关 open = 接地已断开，设备可以带电。", phonics: "open 读 /ˈoʊpən/，重音在第一音节。", collocations: [["switch is open", "开关已分开"], ["circuit is open", "电路已断开"], ["breaker is open", "断路器已分闸"]], examples: [["The grounding switch is open.", "接地开关已分开。"], ["The circuit is open.", "电路已断开。"]] },
    ],
    phrases: [
      { p: "is open", ipa: "/ɪz ˈoʊpən/", cn: "已经分开", why: "is + open = 已分开（状态描述）。open 作形容词表示'断开的/分开的'状态。" },
    ],
    grammar: [
      { q: "open 作为形容词和动词的区别？", a: "open 作形容词：表示状态\n✅ The switch is open.（开关处于分开状态）\n\nopen 作动词：表示动作\n✅ Please open the switch.（请分开开关）\n\n在状态描述中用 is open，在操作指令中用 Please open。" },
    ],
    pattern: "The + 设备 + is open",
    patternExamples: [
      { en: "The circuit breaker is open.", cn: "断路器已分闸。", words: [{ w: "circuit", ipa: "/ˈsɜːrkɪt/", cn: "电路", phonics: "cir 读 /sɜːr/，cuit 读 /kɪt/" }, { w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
      { en: "The disconnect switch is open.", cn: "隔离开关已分开。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "The grounding knife is open.", cn: "接地刀闸已分开。", words: [] },
    ],
    thinking: "接地开关 is open 是送电操作的必要条件。\n送电前必须确认：\n① 接地开关已分开（本句）\n② 所有检修人员已撤离\n③ 安全措施已拆除\n④ 可以合闸送电\n\n如果接地开关未分开就合闸送电，会造成接地短路事故。",
    pronunciation: "open 的重音在第一音节 /ˈoʊpən/。\n注意不要读成 /oʊˈpɛn/。",
    quiz: [
      { q: "送电前必须确认接地开关处于什么状态？", a: "送电前必须确认接地开关处于 open（分开）状态。如果接地开关处于 closed（合上）状态就合闸送电，会造成接地短路事故，可能损坏设备甚至危及人身安全。" },
    ],
  },
  {
    id: 1466,
    en: "Please charge the closing spring.",
    cn: "请给合闸弹簧储能。",
    ipa: "/pliːz tʃɑːrdʒ ðə ˈkloʊzɪŋ sprɪŋ/",
    tags: ["第1466句", "储能", "★★★★★"],
    when: "断路器合闸需要弹簧储能提供动力。储能是合闸操作的准备工作。",
    words: [
      { w: "charge", ipa: "/tʃɑːrdʒ/", pos: "动词", cn: "储能；充电", memory: "charge = 储能/充电。\n在弹簧操作机构中：\ncharge the spring = 给弹簧储能\n弹簧储能后才能执行合闸操作。", phonics: "charge 读 /tʃɑːrdʒ/，ch 读 /tʃ/。", collocations: [["charge the spring", "给弹簧储能"], ["charge the battery", "给电池充电"], ["spring charged", "弹簧已储能"]], examples: [["Please charge the closing spring.", "请给合闸弹簧储能。"], ["The spring is charged.", "弹簧已储能。"]] },
      { w: "closing spring", ipa: "/ˈkloʊzɪŋ sprɪŋ/", pos: "名词短语", cn: "合闸弹簧", memory: "closing = 合闸的；spring = 弹簧。\n合闸弹簧是断路器操作机构的动力来源。\n储能后弹簧处于压缩状态，合闸时释放能量。", phonics: "closing 读 /ˈkloʊzɪŋ/，spring 读 /sprɪŋ/。", collocations: [["closing spring", "合闸弹簧"], ["opening spring", "分闸弹簧"], ["spring mechanism", "弹簧机构"]], examples: [["The closing spring needs charging.", "合闸弹簧需要储能。"], ["Check the spring status.", "检查弹簧状态。"]] },
    ],
    phrases: [
      { p: "charge the closing spring", ipa: "/tʃɑːrdʒ ðə ˈkloʊzɪŋ sprɪŋ/", cn: "给合闸弹簧储能", why: "charge + closing spring = 给合闸弹簧储能。储能是合闸操作的前置条件。" },
    ],
    grammar: [
      { q: "charge 和 recharge 有什么区别？", a: "charge = 储能/充电（一般性描述）\nrecharge = 重新储能/重新充电（强调再次）\n\n✅ Please charge the spring.（请给弹簧储能）\n✅ The spring needs recharging.（弹簧需要重新储能）\n\n断路器合闸后弹簧自动释放，需要 recharge 为下次合闸做准备。" },
    ],
    pattern: "Please charge the + 设备/部件",
    patternExamples: [
      { en: "Please charge the battery.", cn: "请给电池充电。", words: [{ w: "battery", ipa: "/ˈbætəri/", cn: "电池", phonics: "bat 读 /bæt/，tery 读 /təri/" }] },
      { en: "Please charge the capacitor.", cn: "请给电容器充电。", words: [] },
      { en: "Please charge the operating mechanism.", cn: "请给操作机构储能。", words: [{ w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
    ],
    thinking: "弹簧储能是断路器操作的关键环节。\n弹簧操作机构工作原理：\n① 储能：电机驱动弹簧压缩（charge）\n② 合闸：弹簧释放能量驱动断路器合闸\n③ 自动储能：合闸后电机自动重新储能\n\n如果弹簧未储能，断路器无法合闸。",
    pronunciation: "charge 的 ch 读 /tʃ/，不要读成 /k/。\nspring 的 spr 读 /spr/。",
    quiz: [
      { q: "为什么断路器合闸前需要储能？", a: "断路器合闸需要克服触头弹簧力和电动力，需要较大动力。弹簧储能机构通过电机预先压缩弹簧储存能量，合闸时弹簧释放能量快速驱动断路器合闸，确保合闸速度和可靠性。没有储能，断路器无法完成合闸操作。" },
    ],
  },
  {
    id: 1467,
    en: "The closing spring has been charged successfully.",
    cn: "合闸弹簧已经储能完成。",
    ipa: "/ðə ˈkloʊzɪŋ sprɪŋ hæz bɪn tʃɑːrdʒd səkˈsɛsfəli/",
    tags: ["第1467句", "储能", "★★★★★"],
    when: "确认弹簧储能完成，断路器已具备合闸条件。",
    words: [
      { w: "charged", ipa: "/tʃɑːrdʒd/", pos: "形容词", cn: "已储能的", memory: "charged = 已储能的/已充电的。\n表示弹簧已完成储能，处于待释放状态。\n弹簧 charged = 可以执行合闸操作。", phonics: "charge 读 /tʃɑːrdʒ/，d 读 /d/。", collocations: [["spring charged", "弹簧已储能"], ["battery charged", "电池已充电"], ["fully charged", "完全储能"]], examples: [["The spring is charged.", "弹簧已储能。"], ["The battery is fully charged.", "电池已充满电。"]] },
      { w: "successfully", ipa: "/səkˈsɛsfəli/", pos: "副词", cn: "成功地", memory: "successfully = 成功地/顺利地。\n表示操作已按预期完成。\n与 complete（完成）搭配使用。", phonics: "suc 读 /sək/，cess 读 /sɛs/，ful 读 /fə/，ly 读 /li/。", collocations: [["completed successfully", "成功完成"], ["charged successfully", "成功储能"], ["operated successfully", "成功操作"]], examples: [["The operation was completed successfully.", "操作已成功完成。"], ["The test passed successfully.", "测试已成功通过。"]] },
    ],
    phrases: [
      { p: "has been charged successfully", ipa: "/hæz bɪn tʃɑːrdʒd səkˈsɛsfəli/", cn: "已经成功储能", why: "has been + charged + successfully = 已经成功储能。现在完成时被动语态，表示动作已完成且成功。" },
    ],
    grammar: [
      { q: "has been charged 是什么时态？", a: "has been charged = 现在完成时被动语态\n结构：has/have + been + 过去分词\n\n表示：\n① 动作已完成（现在完成时）\n② 主语是动作承受者（被动语态）\n\n✅ The spring has been charged.（弹簧已被储能 → 强调已完成）\n✅ The spring is charged.（弹簧已储能 → 强调状态）" },
    ],
    pattern: "The + 设备 + has been + 过去分词 + successfully",
    patternExamples: [
      { en: "The breaker has been closed successfully.", cn: "断路器已成功合闸。", words: [{ w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
      { en: "The test has been completed successfully.", cn: "测试已成功完成。", words: [{ w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "The operation has been performed successfully.", cn: "操作已成功执行。", words: [{ w: "operation", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }, { w: "performed", ipa: "/pərˈfɔːrm/", cn: "执行", phonics: "per 读 /pər/，form 读 /fɔːrm/" }] },
    ],
    thinking: "弹簧储能完成是合闸操作的必要条件。\n确认储能完成的方法：\n① 查看储能指示灯（通常为绿色）\n② 查看监控系统弹簧状态\n③ 查看机械储能指示器\n\n储能完成后可以执行合闸操作。",
    pronunciation: "charged 的 ch 读 /tʃ/，d 读 /d/。\nsuccessfully 的重音在第二音节 /səkˈsɛsfəli/。",
    quiz: [
      { q: "如何确认弹簧已储能？", a: "确认弹簧储能的方法：① 储能指示灯亮起（通常为绿色）② 监控系统显示'spring charged'③ 机械指示器显示已储能位置 ④ 储能电机停止运转。任一方法确认即可，建议多重确认。" },
    ],
  },
  {
    id: 1468,
    en: "Please verify the spring charging indicator.",
    cn: "请确认弹簧储能指示。",
    ipa: "/pliːz ˈvɛrɪfaɪ ðə sprɪŋ ˈtʃɑːrdʒɪŋ ˈɪndɪkeɪtər/",
    tags: ["第1468句", "储能", "★★★★★"],
    when: "确认弹簧储能指示器显示正确，验证储能状态。",
    words: [
      { w: "indicator", ipa: "/ˈɪndɪkeɪtər/", pos: "名词", cn: "指示器；指示灯", memory: "indicator = 指示器/指示灯/指示标志。\n用于显示设备状态的装置。\nspring charging indicator = 弹簧储能指示器。", phonics: "in 读 /ɪn/，di 读 /dɪ/，ca 读 /keɪ/，tor 读 /tər/。", collocations: [["position indicator", "位置指示器"], ["status indicator", "状态指示器"], ["charging indicator", "储能指示器"]], examples: [["Check the position indicator.", "检查位置指示器。"], ["The indicator shows green.", "指示器显示绿色。"]] },
      { w: "charging", ipa: "/ˈtʃɑːrdʒɪŋ/", pos: "形容词", cn: "储能的；充电的", memory: "charging = 储能的/充电的。\ncharging indicator = 储能指示器\ncharging status = 储能状态", phonics: "charge 读 /tʃɑːrdʒ/，ing 读 /ɪŋ/。", collocations: [["charging indicator", "储能指示器"], ["charging status", "储能状态"], ["charging motor", "储能电机"]], examples: [["Check the charging indicator.", "检查储能指示器。"], ["The charging motor is running.", "储能电机正在运行。"]] },
    ],
    phrases: [
      { p: "spring charging indicator", ipa: "/sprɪŋ ˈtʃɑːrdʒɪŋ ˈɪndɪkeɪtər/", cn: "弹簧储能指示器", why: "spring + charging + indicator = 弹簧储能指示器。用于显示弹簧是否已储能的装置。" },
    ],
    grammar: [
      { q: "indicator 和 indicator light 有什么区别？", a: "indicator = 指示器（广义，包括机械和电气）\nindicator light = 指示灯（特指灯光指示）\n\n✅ Check the indicator.（检查指示器 → 可能是机械或电气）\n✅ Check the indicator light.（检查指示灯 → 特指灯光）\n\n弹簧储能通常有机械指示器和指示灯两种。" },
    ],
    pattern: "Please verify the + 指示器/状态",
    patternExamples: [
      { en: "Please verify the position indicator.", cn: "请确认位置指示器。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
      { en: "Please verify the status indicator.", cn: "请确认状态指示器。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Please verify the alarm indicator.", cn: "请确认告警指示器。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "弹簧储能指示器是确认储能状态的重要依据。\n常见指示方式：\n① 机械指示器：指针或色标显示\n② 指示灯：绿色=已储能，红色/熄灭=未储能\n③ 数字显示：监控系统显示状态\n\n操作前必须确认指示器显示正确。",
    pronunciation: "indicator 的重音在第一音节 /ˈɪndɪkeɪtər/。\ncharging 的 ch 读 /tʃ/。",
    quiz: [
      { q: "弹簧储能指示器通常如何显示已储能？", a: "弹簧储能指示器显示已储能的常见方式：① 机械指示器指针指向'charged'位置 ② 指示灯亮绿色 ③ 监控系统显示'spring charged'④ 色标显示绿色或白色。具体方式因设备型号而异，需熟悉本厂设备。" },
    ],
  },
  {
    id: 1469,
    en: "Please check the voltage transformer panel.",
    cn: "请检查PT柜。",
    ipa: "/pliːz tʃɛk ðə ˈvoʊltɪdʒ trænsˈfɔːrmər ˈpænəl/",
    tags: ["第1469句", "PT柜", "★★★★★"],
    when: "PT柜（电压互感器柜）用于测量和保护，是中压系统的重要组成部分。",
    words: [
      { w: "voltage transformer", ipa: "/ˈvoʊltɪdʒ trænsˈfɔːrmər/", pos: "名词短语", cn: "电压互感器", memory: "voltage = 电压；transformer = 变压器/互感器。\nvoltage transformer (VT/PT) = 电压互感器。\n用于将高电压变换为低电压，供测量和保护使用。", phonics: "voltage 读 /ˈvoʊltɪdʒ/，transformer 读 /trænsˈfɔːrmər/。", collocations: [["voltage transformer", "电压互感器"], ["VT panel", "PT柜"], ["PT ratio", "变比"]], examples: [["Check the voltage transformer.", "检查电压互感器。"], ["The VT is operating normally.", "PT运行正常。"]] },
      { w: "panel", ipa: "/ˈpænəl/", pos: "名词", cn: "柜；屏；面板", memory: "panel = 柜/屏/面板。\n在开关柜中：\npanel = 柜体/屏柜\ncontrol panel = 控制屏", phonics: "panel 读 /ˈpænəl/，重音在第一音节。", collocations: [["control panel", "控制屏"], ["relay panel", "保护屏"], ["metering panel", "计量柜"]], examples: [["Check the relay panel.", "检查保护屏。"], ["Open the panel door.", "打开柜门。"]] },
    ],
    phrases: [
      { p: "voltage transformer panel", ipa: "/ˈvoʊltɪdʒ trænsˈfɔːrmər ˈpænəl/", cn: "PT柜", why: "voltage transformer + panel = 电压互感器柜，简称PT柜。用于安装电压互感器及相关设备。" },
    ],
    grammar: [
      { q: "VT 和 PT 有什么区别？", a: "VT = Voltage Transformer（电压互感器）\nPT = Potential Transformer（电位互感器）\n\n两者是同一设备的不同名称：\n- VT 是 IEC 标准术语\n- PT 是 IEEE/ANSI 标准术语\n\n实际使用中两者可以互换，都指电压互感器。" },
    ],
    pattern: "Please check the + 设备 + panel",
    patternExamples: [
      { en: "Please check the relay panel.", cn: "请检查保护屏。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "panel", ipa: "/ˈpænl/", cn: "面板", phonics: "pan 读 /pæn/，el 读 /l/" }] },
      { en: "Please check the control panel.", cn: "请检查控制屏。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "control", ipa: "/kənˈtroʊl/", cn: "控制", phonics: "con 读 /kən/，trol 读 /troʊl/" }, { w: "panel", ipa: "/ˈpænl/", cn: "面板", phonics: "pan 读 /pæn/，el 读 /l/" }] },
      { en: "Please check the metering panel.", cn: "请检查计量柜。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "panel", ipa: "/ˈpænl/", cn: "面板", phonics: "pan 读 /pæn/，el 读 /l/" }] },
    ],
    thinking: "PT柜的作用：\n① 电压测量：将高电压变换为低电压（如10kV→100V）供仪表测量\n② 保护信号：为继电保护提供电压信号\n③ 同步检测：为并列操作提供电压信号\n④ 计量：为电能计量提供电压信号\n\nPT柜检查内容包括：运行状态、指示仪表、保护信号等。",
    pronunciation: "voltage 的 vol 读 /voʊl/，不要读成 /vɒl/。\ntransformer 的重音在第二音节 /trænsˈfɔːrmər/。",
    quiz: [
      { q: "PT柜的主要作用是什么？", a: "PT柜的主要作用：① 电压测量（将高电压变换为低电压供仪表测量）② 保护信号（为继电保护提供电压信号）③ 同步检测（为并列操作提供电压信号）④ 电能计量（为电表提供电压信号）。PT柜是中压系统测量和保护的重要设备。" },
    ],
  },
  {
    id: 1470,
    en: "The voltage transformer is operating normally.",
    cn: "电压互感器运行正常。",
    ipa: "/ðə ˈvoʊltɪdʒ trænsˈfɔːrmər ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1470句", "PT柜", "★★★★★"],
    when: "确认电压互感器运行正常，测量和保护功能正常。",
    words: [
      { w: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", pos: "动词短语", cn: "运行正常", memory: "operating = 运行中；normally = 正常地。\noperating normally = 运行正常。\n这是设备状态汇报的标准用语。", phonics: "operating 读 /ˈɒpəreɪtɪŋ/，normally 读 /ˈnɔːrməli/。", collocations: [["operating normally", "运行正常"], ["running normally", "运行正常"], ["working normally", "工作正常"]], examples: [["The system is operating normally.", "系统运行正常。"], ["All equipment is operating normally.", "所有设备运行正常。"]] },
    ],
    phrases: [
      { p: "is operating normally", ipa: "/ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "运行正常", why: "is + operating + normally = 正在正常运行。现在进行时，描述设备当前运行状态。" },
    ],
    grammar: [
      { q: "operating normally 和 in normal operation 有什么区别？", a: "operating normally = 运行正常（动词短语，强调动作）\nin normal operation = 在正常运行中（介词短语，强调状态）\n\n✅ The VT is operating normally.（PT运行正常 → 强调运行状态）\n✅ The VT is in normal operation.（PT在正常运行中 → 强调工作状态）\n\n两者含义相近，可以互换使用。" },
    ],
    pattern: "The + 设备 + is operating normally",
    patternExamples: [
      { en: "The transformer is operating normally.", cn: "变压器运行正常。", words: [{ w: "transformer", ipa: "/trænsˈfɔːrmər/", cn: "变压器", phonics: "trans 读 /træns/，former 读 /fɔːrmər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The generator is operating normally.", cn: "发电机运行正常。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The motor is operating normally.", cn: "电机运行正常。", words: [{ w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "电压互感器运行正常的判断依据：\n① 二次电压指示正常（如100V）\n② 无异常声响\n③ 无过热现象\n④ 保护装置无告警\n⑤ 绝缘监测正常\n\nPT异常会影响测量和保护功能，需及时处理。",
    pronunciation: "operating 的重音在第一音节 /ˈɒpəreɪtɪŋ/。\nnormally 的重音在第一音节 /ˈnɔːrməli/。",
    quiz: [
      { q: "如何判断电压互感器运行正常？", a: "判断电压互感器运行正常的方法：① 二次电压指示在正常范围（如100V±5%）② 无异常嗡嗡声或放电声 ③ 外壳温度正常 ④ 保护装置无告警 ⑤ 绝缘监测无异常。定期检查可及早发现问题。" },
    ],
  },
  {
    id: 1471,
    en: "Please inspect the vacuum circuit breaker.",
    cn: "请检查真空断路器。",
    ipa: "/pliːz ɪnˈspɛkt ðə ˈvækjuəm ˈsɜːrkɪt ˈbreɪkər/",
    tags: ["第1471句", "真空断路器", "★★★★★"],
    when: "真空断路器是中压开关柜的核心设备，需要定期检查其运行状态。",
    words: [
      { w: "inspect", ipa: "/ɪnˈspɛkt/", pos: "动词", cn: "检查；检验", memory: "inspect = 检查/检验/巡查。\n比 check 更强调'仔细检查'。\ninspect = 详细的物理检查\ncheck = 快速确认状态", phonics: "in 读 /ɪn/，spect 读 /spɛkt/，重音在第二音节。", collocations: [["inspect equipment", "检查设备"], ["inspect breaker", "检查断路器"], ["routine inspection", "例行检查"]], examples: [["Please inspect the breaker.", "请检查断路器。"], ["The inspection is complete.", "检查已完成。"]] },
      { w: "vacuum circuit breaker", ipa: "/ˈvækjuəm ˈsɜːrkɪt ˈbreɪkər/", pos: "名词短语", cn: "真空断路器", memory: "vacuum = 真空；circuit = 电路；breaker = 断路器。\n真空断路器利用真空灭弧，是中压系统最常用的断路器类型。\n优点：灭弧性能好、寿命长、维护简单。", phonics: "vacuum 读 /ˈvækjuəm/，circuit 读 /ˈsɜːrkɪt/。", collocations: [["vacuum circuit breaker", "真空断路器"], ["VCB", "真空断路器缩写"], ["vacuum interrupter", "真空灭弧室"]], examples: [["The VCB is operating normally.", "真空断路器运行正常。"], ["Check the vacuum interrupter.", "检查真空灭弧室。"]] },
    ],
    phrases: [
      { p: "vacuum circuit breaker", ipa: "/ˈvækjuəm ˈsɜːrkɪt ˈbreɪkər/", cn: "真空断路器", why: "vacuum + circuit + breaker = 真空断路器。利用真空作为灭弧介质的断路器，简称VCB。" },
    ],
    grammar: [
      { q: "inspect 和 check 有什么区别？", a: "inspect = 检查/检验（详细的物理检查）\ncheck = 查看/确认（快速确认状态）\n\n✅ Please inspect the breaker.（请检查断路器 → 详细检查外观、机构等）\n✅ Please check the breaker status.（请查看断路器状态 → 确认分合闸状态）\n\n日常交接用 check，定期维护用 inspect。" },
    ],
    pattern: "Please inspect the + 设备",
    patternExamples: [
      { en: "Please inspect the transformer.", cn: "请检查变压器。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "transformer", ipa: "/trænsˈfɔːrmər/", cn: "变压器", phonics: "trans 读 /træns/，former 读 /fɔːrmər/" }] },
      { en: "Please inspect the switchgear.", cn: "请检查开关柜。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }] },
      { en: "Please inspect the cable termination.", cn: "请检查电缆终端。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }] },
    ],
    thinking: "真空断路器检查内容：\n① 外观检查：无破损、无放电痕迹\n② 操作机构：储能正常、分合闸灵活\n③ 真空灭弧室：无裂纹、无变色\n④ 触头磨损：在允许范围内\n⑤ 绝缘性能：符合要求\n\n真空断路器是中压系统最重要的保护设备。",
    pronunciation: "vacuum 的重音在第一音节 /ˈvækjuəm/。\ncircuit 的 cir 读 /sɜːr/，cuit 读 /kɪt/。",
    quiz: [
      { q: "真空断路器的主要优点是什么？", a: "真空断路器的主要优点：① 灭弧性能好（真空介质绝缘强度高）② 电气寿命长（可开断数万次）③ 维护简单（无需更换灭弧介质）④ 体积小、重量轻 ⑤ 无火灾危险。这些优点使其成为中压系统的首选断路器。" },
    ],
  },
  {
    id: 1472,
    en: "The vacuum circuit breaker is operating normally.",
    cn: "真空断路器运行正常。",
    ipa: "/ðə ˈvækjuəm ˈsɜːrkɪt ˈbreɪkər ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1472句", "真空断路器", "★★★★★"],
    when: "确认真空断路器运行正常，保护和开断功能正常。",
    words: [
      { w: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", pos: "动词短语", cn: "运行正常", memory: "operating normally = 运行正常。\n这是设备状态汇报的标准用语。\n表示设备在正常参数范围内工作。", phonics: "operating 读 /ˈɒpəreɪtɪŋ/，normally 读 /ˈnɔːrməli/。", collocations: [["operating normally", "运行正常"], ["functioning normally", "功能正常"], ["working properly", "工作正常"]], examples: [["The breaker is operating normally.", "断路器运行正常。"], ["All systems are operating normally.", "所有系统运行正常。"]] },
    ],
    phrases: [
      { p: "is operating normally", ipa: "/ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "运行正常", why: "is + operating + normally = 正在正常运行。现在进行时，描述设备当前运行状态。" },
    ],
    grammar: [
      { q: "operating normally 和 in good condition 有什么区别？", a: "operating normally = 运行正常（强调运行状态）\nin good condition = 状态良好（强调设备状况）\n\n✅ The breaker is operating normally.（断路器运行正常 → 当前运行状态）\n✅ The breaker is in good condition.（断路器状态良好 → 设备整体状况）\n\n运行正常是状态良好的一种表现。" },
    ],
    pattern: "The + 设备 + is operating normally",
    patternExamples: [
      { en: "The switchgear is operating normally.", cn: "开关柜运行正常。", words: [{ w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The protection system is operating normally.", cn: "保护系统运行正常。", words: [{ w: "protection", ipa: "/prəˈtɛkʃən/", cn: "保护", phonics: "pro 读 /prə/，tection 读 /tɛkʃən/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "The control circuit is operating normally.", cn: "控制回路运行正常。", words: [{ w: "control", ipa: "/kənˈtroʊl/", cn: "控制", phonics: "con 读 /kən/，trol 读 /troʊl/" }, { w: "circuit", ipa: "/ˈsɜːrkɪt/", cn: "电路", phonics: "cir 读 /sɜːr/，cuit 读 /kɪt/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
    ],
    thinking: "真空断路器运行正常的判断依据：\n① 分合闸位置指示正确\n② 储能状态正常\n③ 无异常声响\n④ 无过热现象\n⑤ 保护装置无告警\n⑥ 操作次数在允许范围内\n\n真空断路器是中压系统最重要的保护设备，必须确保其可靠性。",
    pronunciation: "vacuum 的重音在第一音节 /ˈvækjuəm/。\noperating 的重音在第一音节 /ˈɒpəreɪtɪŋ/。",
    quiz: [
      { q: "如何判断真空断路器运行正常？", a: "判断真空断路器运行正常的方法：① 分合闸位置指示正确 ② 弹簧储能正常 ③ 无异常声响或放电声 ④ 外壳温度正常 ⑤ 保护装置无告警 ⑥ 操作计数器显示在允许范围内。定期检查和维护是确保可靠性的关键。" },
    ],
  },
  {
    id: 1473,
    en: "Please check the protection relay.",
    cn: "请检查保护继电器。",
    ipa: "/pliːz tʃɛk ðə prəˈtɛkʃən ˈriːleɪ/",
    tags: ["第1473句", "继电保护", "★★★★★"],
    when: "保护继电器是电力系统的安全守护者，需要定期检查其工作状态。",
    words: [
      { w: "protection relay", ipa: "/prəˈtɛkʃən ˈriːleɪ/", pos: "名词短语", cn: "保护继电器", memory: "protection = 保护；relay = 继电器。\n保护继电器用于检测故障并发出跳闸信号。\n常见类型：过流保护、差动保护、接地保护等。", phonics: "protection 读 /prəˈtɛkʃən/，relay 读 /ˈriːleɪ/。", collocations: [["protection relay", "保护继电器"], ["overcurrent relay", "过流继电器"], ["differential relay", "差动继电器"]], examples: [["Check the protection relay.", "检查保护继电器。"], ["The relay has tripped.", "继电器已跳闸。"]] },
      { w: "relay", ipa: "/ˈriːleɪ/", pos: "名词", cn: "继电器", memory: "relay = 继电器。\n继电器是一种电气控制设备，用于检测异常并触发保护动作。\n在电力系统中，relay 通常指保护继电器。", phonics: "relay 读 /ˈriːleɪ/，重音在第一音节。", collocations: [["relay protection", "继电保护"], ["relay setting", "继电器整定"], ["relay event", "继电器事件"]], examples: [["The relay is working.", "继电器在工作。"], ["Check the relay settings.", "检查继电器整定值。"]] },
    ],
    phrases: [
      { p: "protection relay", ipa: "/prəˈtɛkʃən ˈriːleɪ/", cn: "保护继电器", why: "protection + relay = 保护继电器。用于电力系统保护的关键设备，检测故障并触发断路器跳闸。" },
    ],
    grammar: [
      { q: "relay 和 contactor 有什么区别？", a: "relay = 继电器（小电流，用于控制和保护）\ncontactor = 接触器（大电流，用于主电路通断）\n\n✅ The protection relay detected a fault.（保护继电器检测到故障）\n✅ The contactor switched the motor.（接触器切换了电机）\n\n继电器用于信号和控制，接触器用于功率电路。" },
    ],
    pattern: "Please check the + 保护设备",
    patternExamples: [
      { en: "Please check the overcurrent relay.", cn: "请检查过流继电器。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the differential protection.", cn: "请检查差动保护。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "protection", ipa: "/prəˈtɛkʃən/", cn: "保护", phonics: "pro 读 /prə/，tection 读 /tɛkʃən/" }] },
      { en: "Please check the ground fault relay.", cn: "请检查接地故障继电器。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }] },
    ],
    thinking: "保护继电器检查内容：\n① 运行指示灯正常\n② 无告警信号\n③ 整定值正确\n④ 通信正常\n⑤ 事件记录无异常\n\n保护继电器是电力系统安全的重要保障，必须确保其可靠性。",
    pronunciation: "protection 的重音在第二音节 /prəˈtɛkʃən/。\nrelay 的重音在第一音节 /ˈriːleɪ/。",
    quiz: [
      { q: "保护继电器的主要作用是什么？", a: "保护继电器的主要作用：① 检测电力系统故障（如短路、过载、接地故障）② 判断故障类型和位置 ③ 发出跳闸信号使断路器分闸 ④ 隔离故障区域保护其他设备 ⑤ 记录故障信息供分析。保护继电器是电力系统安全运行的重要保障。" },
    ],
  },
  {
    id: 1474,
    en: "No protection alarms have been reported.",
    cn: "没有保护告警。",
    ipa: "/noʊ prəˈtɛkʃən ˈælɑːrmz hæv bɪn rɪˈpɔːrtɪd/",
    tags: ["第1474句", "继电保护", "★★★★★"],
    when: "确认保护装置无告警，系统运行正常。",
    words: [
      { w: "protection alarm", ipa: "/prəˈtɛkʃən əˈlɑːrm/", pos: "名词短语", cn: "保护告警", memory: "protection = 保护；alarm = 告警。\n保护告警指保护装置检测到的异常信号。\n包括：过流告警、接地告警、差动告警等。", phonics: "protection 读 /prəˈtɛkʃən/，alarm 读 /əˈlɑːrm/。", collocations: [["protection alarm", "保护告警"], ["relay alarm", "继电器告警"], ["trip alarm", "跳闸告警"]], examples: [["There is a protection alarm.", "有一个保护告警。"], ["The alarm has been cleared.", "告警已恢复。"]] },
      { w: "reported", ipa: "/rɪˈpɔːrtɪd/", pos: "动词过去分词", cn: "报告的；记录的", memory: "reported = 报告的/记录的。\nNo alarms reported = 没有报告告警 = 无告警。\n表示系统未检测到异常。", phonics: "re 读 /rɪ/，port 读 /pɔːrt/，ed 读 /ɪd/。", collocations: [["alarms reported", "报告的告警"], ["events reported", "记录的事件"], ["no alarms", "无告警"]], examples: [["No alarms have been reported.", "没有报告告警。"], ["Three events were reported.", "记录了三个事件。"]] },
    ],
    phrases: [
      { p: "no alarms have been reported", ipa: "/noʊ əˈlɑːrmz hæv bɪn rɪˈpɔːrtɪd/", cn: "没有告警", why: "no + alarms + have been reported = 没有告警被报告。现在完成时被动语态的否定形式。" },
    ],
    grammar: [
      { q: "no alarms 和 zero alarms 有什么区别？", a: "no alarms = 没有告警（自然语言表达）\nzero alarms = 零告警（数字化表达）\n\n✅ No alarms have been reported.（没有告警 → 自然表达）\n✅ There are zero alarms.（有零个告警 → 数字化表达）\n\n日常交接用 no alarms，报表统计用 zero alarms。" },
    ],
    pattern: "No + 名词 + have been + 过去分词",
    patternExamples: [
      { en: "No faults have been detected.", cn: "没有检测到故障。", words: [{ w: "faults", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }] },
      { en: "No issues have been found.", cn: "没有发现问题。", words: [{ w: "issues", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
      { en: "No abnormalities have been observed.", cn: "没有观察到异常。", words: [] },
    ],
    thinking: "无保护告警是系统正常运行的重要标志。\n交接时需确认：\n① 保护装置无告警指示灯亮\n② 监控系统无保护告警信息\n③ 事件记录无新记录\n④ 保护装置运行正常\n\n如有告警需及时处理或交接。",
    pronunciation: "protection 的重音在第二音节 /prəˈtɛkʃən/。\nalarm 的重音在第二音节 /əˈlɑːrm/。",
    quiz: [
      { q: "交接时如何确认无保护告警？", a: "确认无保护告警的方法：① 检查保护装置面板无告警指示灯亮 ② 查看监控系统无保护告警信息 ③ 查看事件记录无新记录 ④ 确认保护装置运行状态正常 ⑤ 询问上一班是否有未处理的告警。多重确认确保无遗漏。" },
    ],
  },
  {
    id: 1475,
    en: "Please review the relay event records.",
    cn: "请查看继电器事件记录。",
    ipa: "/pliːz rɪˈvjuː ðə ˈriːleɪ ɪˈvɛnt rɪˈkɔːrdz/",
    tags: ["第1475句", "继电保护", "★★★★★"],
    when: "查看继电器事件记录，了解历史故障和操作情况。",
    words: [
      { w: "review", ipa: "/rɪˈvjuː/", pos: "动词", cn: "查看；审查", memory: "review = 查看/审查/回顾。\n比 check 更强调'仔细查看'。\nreview records = 查看记录\nreview history = 查看历史", phonics: "re 读 /rɪ/，view 读 /vjuː/，重音在第二音节。", collocations: [["review records", "查看记录"], ["review history", "查看历史"], ["review report", "审查报告"]], examples: [["Please review the event records.", "请查看事件记录。"], ["Review the maintenance history.", "查看维护历史。"]] },
      { w: "event record", ipa: "/ɪˈvɛnt rɪˈkɔːrd/", pos: "名词短语", cn: "事件记录", memory: "event = 事件；record = 记录。\n继电器事件记录包括：跳闸事件、告警事件、操作事件等。\n用于故障分析和运行评估。", phonics: "event 读 /ɪˈvɛnt/，record 读 /rɪˈkɔːrd/。", collocations: [["event record", "事件记录"], ["fault record", "故障记录"], ["operation record", "操作记录"]], examples: [["Check the event records.", "查看事件记录。"], ["Download the fault records.", "下载故障记录。"]] },
    ],
    phrases: [
      { p: "relay event records", ipa: "/ˈriːleɪ ɪˈvɛnt rɪˈkɔːrdz/", cn: "继电器事件记录", why: "relay + event + records = 继电器事件记录。记录保护装置检测到的所有事件，用于故障分析。" },
    ],
    grammar: [
      { q: "review 和 check 有什么区别？", a: "review = 查看/审查（仔细查看，可能涉及分析）\ncheck = 检查/查看（快速确认）\n\n✅ Please review the event records.（请查看事件记录 → 仔细查看并分析）\n✅ Please check the relay status.（请查看继电器状态 → 快速确认状态）\n\n查看历史记录用 review，确认当前状态用 check。" },
    ],
    pattern: "Please review the + 记录/历史",
    patternExamples: [
      { en: "Please review the fault records.", cn: "请查看故障记录。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }] },
      { en: "Please review the maintenance history.", cn: "请查看维护历史。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "Please review the operation log.", cn: "请查看操作日志。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "operation", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }] },
    ],
    thinking: "继电器事件记录是故障分析的重要依据。\n查看内容包括：\n① 跳闸事件：时间、类型、故障电流\n② 告警事件：告警类型、持续时间\n③ 操作事件：分合闸操作记录\n④ 自检事件：装置自检结果\n\n通过分析事件记录可以发现潜在问题。",
    pronunciation: "review 的重音在第二音节 /rɪˈvjuː/。\nevent 的重音在第二音节 /ɪˈvɛnt/。",
    quiz: [
      { q: "为什么要查看继电器事件记录？", a: "查看继电器事件记录的目的：① 了解历史故障情况 ② 分析故障原因和趋势 ③ 评估保护装置动作是否正确 ④ 发现潜在问题预防故障 ⑤ 为交接提供完整信息。事件记录是运行分析的重要数据来源。" },
    ],
  },
  {
    id: 1476,
    en: "Please download the disturbance records.",
    cn: "请下载故障录波文件。",
    ipa: "/pliːz ˈdaʊnloʊd ðə dɪˈstɜːrbəns rɪˈkɔːrdz/",
    tags: ["第1476句", "继电保护", "★★★★★"],
    when: "下载故障录波文件用于详细的故障分析。",
    words: [
      { w: "download", ipa: "/ˈdaʊnloʊd/", pos: "动词", cn: "下载", memory: "download = 下载。\n从保护装置下载数据到电脑进行分析。\n常见下载内容：故障录波、事件记录、定值等。", phonics: "down 读 /daʊn/，load 读 /loʊd/，重音在第一音节。", collocations: [["download records", "下载记录"], ["download data", "下载数据"], ["download settings", "下载设置"]], examples: [["Download the fault records.", "下载故障记录。"], ["Download the relay settings.", "下载继电器定值。"]] },
      { w: "disturbance record", ipa: "/dɪˈstɜːrbəns rɪˈkɔːrd/", pos: "名词短语", cn: "故障录波", memory: "disturbance = 扰动/故障；record = 记录。\ndisturbance record = 故障录波。\n记录故障发生时的电压、电流波形，用于故障分析。", phonics: "disturbance 读 /dɪˈstɜːrbəns/，record 读 /rɪˈkɔːrd/。", collocations: [["disturbance record", "故障录波"], ["fault record", "故障记录"], ["waveform record", "波形记录"]], examples: [["Download the disturbance records.", "下载故障录波。"], ["Analyze the fault waveform.", "分析故障波形。"]] },
    ],
    phrases: [
      { p: "disturbance records", ipa: "/dɪˈstɜːrbəns rɪˈkɔːrdz/", cn: "故障录波", why: "disturbance + records = 故障录波。记录故障发生时的电气量波形，是故障分析的重要数据。" },
    ],
    grammar: [
      { q: "disturbance 和 fault 有什么区别？", a: "disturbance = 扰动（广义，包括故障和非故障异常）\nfault = 故障（狭义，指短路等严重异常）\n\n✅ disturbance record = 故障录波（记录所有扰动）\n✅ fault record = 故障记录（特指故障事件）\n\n扰动包括：短路故障、过负荷、电压暂降等。" },
    ],
    pattern: "Please download the + 数据/文件",
    patternExamples: [
      { en: "Please download the event log.", cn: "请下载事件日志。", words: [] },
      { en: "Please download the settings.", cn: "请下载设置。", words: [] },
      { en: "Please download the waveform data.", cn: "请下载波形数据。", words: [{ w: "data", ipa: "/ˈdeɪtə/", cn: "数据", phonics: "da 读 /deɪ/，ta 读 /tə/" }] },
    ],
    thinking: "故障录波是故障分析的重要工具。\n故障录波内容包括：\n① 故障前电压、电流波形\n② 故障发生时刻\n③ 故障期间电气量变化\n④ 保护动作时刻\n⑤ 故障切除后恢复情况\n\n通过分析录波可以准确判断故障类型、位置和保护动作正确性。",
    pronunciation: "download 的重音在第一音节 /ˈdaʊnloʊd/。\ndisturbance 的重音在第二音节 /dɪˈstɜːrbəns/。",
    quiz: [
      { q: "故障录波的主要用途是什么？", a: "故障录波的主要用途：① 分析故障类型（短路、接地等）② 确定故障位置 ③ 评估保护动作正确性 ④ 分析故障原因 ⑤ 为事故调查提供证据 ⑥ 优化保护整定。故障录波是电力系统故障分析的核心数据来源。" },
    ],
  },
  {
    id: 1477,
    en: "Please verify the interlock mechanism.",
    cn: "请确认联锁机构正常。",
    ipa: "/pliːz ˈvɛrɪfaɪ ðə ˈɪntərlɑːk ˈmɛkənɪzəm/",
    tags: ["第1477句", "五防联锁", "★★★★★"],
    when: "联锁机构是防止误操作的重要安全措施，需要确认其功能正常。",
    words: [
      { w: "interlock", ipa: "/ˈɪntərlɑːk/", pos: "名词/形容词", cn: "联锁", memory: "interlock = 联锁/互锁。\n联锁是一种安全机制，防止不正确的操作顺序。\n五防联锁 = 防止五种误操作的安全措施。", phonics: "inter 读 /ɪntər/，lock 读 /lɑːk/，重音在第一音节。", collocations: [["interlock mechanism", "联锁机构"], ["interlock system", "联锁系统"], ["five-prevention interlock", "五防联锁"]], examples: [["Check the interlock mechanism.", "检查联锁机构。"], ["The interlock is working.", "联锁在工作。"]] },
      { w: "mechanism", ipa: "/ˈmɛkənɪzəm/", pos: "名词", cn: "机构；机制", memory: "mechanism = 机构/机制/装置。\n指实现某种功能的机械装置。\ninterlock mechanism = 联锁机构。", phonics: "mech 读 /mɛk/，a 读 /ə/，nism 读 /nɪzəm/。", collocations: [["operating mechanism", "操作机构"], ["locking mechanism", "锁定机构"], ["trip mechanism", "跳闸机构"]], examples: [["Check the operating mechanism.", "检查操作机构。"], ["The mechanism is working.", "机构在工作。"]] },
    ],
    phrases: [
      { p: "interlock mechanism", ipa: "/ˈɪntərlɑːk ˈmɛkənɪzəm/", cn: "联锁机构", why: "interlock + mechanism = 联锁机构。用于防止误操作的机械或电气装置。" },
    ],
    grammar: [
      { q: "interlock 和 lock 有什么区别？", a: "interlock = 联锁（多个设备之间的相互制约）\nlock = 锁（单个设备的锁定）\n\n✅ The interlock prevents wrong operation.（联锁防止误操作）\n✅ The lock secures the door.（锁保护门）\n\n联锁是系统级的安全措施，锁是单个设备的安全措施。" },
    ],
    pattern: "Please verify the + 安全装置",
    patternExamples: [
      { en: "Please verify the safety device.", cn: "请确认安全装置。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }, { w: "device", ipa: "/dɪˈvaɪs/", cn: "设备", phonics: "de 读 /dɪ/，vice 读 /vaɪs/" }] },
      { en: "Please verify the locking mechanism.", cn: "请确认锁定机构。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
      { en: "Please verify the protection device.", cn: "请确认保护装置。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "protection", ipa: "/prəˈtɛkʃən/", cn: "保护", phonics: "pro 读 /prə/，tection 读 /tɛkʃən/" }, { w: "device", ipa: "/dɪˈvaɪs/", cn: "设备", phonics: "de 读 /dɪ/，vice 读 /vaɪs/" }] },
    ],
    thinking: "五防联锁是开关柜安全操作的核心保障。\n五防内容：\n① 防止误分、误合断路器\n② 防止带负荷拉、合隔离开关\n③ 防止带电合接地开关\n④ 防止带接地开关合闸送电\n⑤ 防止误入带电间隔\n\n联锁机构可以是机械式、电气式或微机式。",
    pronunciation: "interlock 的重音在第一音节 /ˈɪntərlɑːk/。\nmechanism 的重音在第一音节 /ˈmɛkənɪzəm/。",
    quiz: [
      { q: "五防联锁包括哪些内容？", a: "五防联锁的内容：① 防止误分、误合断路器 ② 防止带负荷拉、合隔离开关 ③ 防止带电合接地开关 ④ 防止带接地开关合闸送电 ⑤ 防止误入带电间隔。五防联锁是开关柜安全操作的重要保障，必须确保其功能正常。" },
    ],
  },
  {
    id: 1478,
    en: "The interlock system is operating normally.",
    cn: "联锁系统运行正常。",
    ipa: "/ðə ˈɪntərlɑːk ˈsɪstəm ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1478句", "五防联锁", "★★★★★"],
    when: "确认联锁系统功能正常，可以有效防止误操作。",
    words: [
      { w: "interlock system", ipa: "/ˈɪntərlɑːk ˈsɪstəm/", pos: "名词短语", cn: "联锁系统", memory: "interlock = 联锁；system = 系统。\n联锁系统包括机械联锁、电气联锁和微机联锁。\n用于确保操作顺序正确，防止误操作。", phonics: "interlock 读 /ˈɪntərlɑːk/，system 读 /ˈsɪstəm/。", collocations: [["interlock system", "联锁系统"], ["mechanical interlock", "机械联锁"], ["electrical interlock", "电气联锁"]], examples: [["The interlock system is working.", "联锁系统在工作。"], ["Check the interlock system.", "检查联锁系统。"]] },
      { w: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", pos: "动词短语", cn: "运行正常", memory: "operating normally = 运行正常。\n表示系统功能正常，可以有效防止误操作。", phonics: "operating 读 /ˈɒpəreɪtɪŋ/，normally 读 /ˈnɔːrməli/。", collocations: [["operating normally", "运行正常"], ["functioning normally", "功能正常"], ["working properly", "工作正常"]], examples: [["The system is operating normally.", "系统运行正常。"], ["All systems are operating normally.", "所有系统运行正常。"]] },
    ],
    phrases: [
      { p: "interlock system is operating normally", ipa: "/ˈɪntərlɑːk ˈsɪstəm ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "联锁系统运行正常", why: "interlock system + is operating normally = 联锁系统运行正常。确认安全联锁功能完好。" },
    ],
    grammar: [
      { q: "为什么联锁系统也需要确认运行正常？", a: "联锁系统是安全操作的最后一道防线。如果联锁系统本身故障，操作人员可能在不知情的情况下执行危险操作。因此每次交接都必须确认联锁系统 operating normally。" },
    ],
    pattern: "The + 安全系统 + is operating normally",
    patternExamples: [
      { en: "The fire suppression system is operating normally.", cn: "灭火系统运行正常。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "The safety system is operating normally.", cn: "安全系统运行正常。", words: [{ w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "The alarm system is operating normally.", cn: "告警系统运行正常。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
    ],
    thinking: "联锁系统运行正常的确认方法：\n① 测试联锁功能（模拟操作验证联锁是否生效）\n② 查看联锁状态指示灯\n③ 查看监控系统联锁状态\n④ 无联锁告警信号\n\n联锁系统故障时，必须采取额外安全措施或禁止操作。",
    pronunciation: "interlock 的重音在第一音节 /ˈɪntərlɑːk/。\nsystem 读 /ˈsɪstəm/。",
    quiz: [
      { q: "联锁系统故障时应该怎么办？", a: "联锁系统故障时：① 立即报告值班经理 ② 禁止进行任何倒闸操作 ③ 采取临时安全措施（如人工监护）④ 通知维修人员处理 ⑤ 在操作日志中记录。严禁在联锁系统故障时强行操作。" },
    ],
  },
  {
    id: 1479,
    en: "The switchgear inspection has been completed successfully.",
    cn: "中压开关柜检查已经顺利完成。",
    ipa: "/ðə ˈswɪtʃɡɪr ɪnˈspɛkʃən hæz bɪn kəmˈpliːtɪd səkˈsɛsfəli/",
    tags: ["第1479句", "完成", "★★★★★"],
    when: "确认开关柜检查全部完成，可以进行下一步操作。",
    words: [
      { w: "inspection", ipa: "/ɪnˈspɛkʃən/", pos: "名词", cn: "检查；检验", memory: "inspection = 检查/检验/巡查。\n指对设备进行的详细检查。\nswitchgear inspection = 开关柜检查。", phonics: "in 读 /ɪn/，spec 读 /spɛk/，tion 读 /ʃən/。", collocations: [["switchgear inspection", "开关柜检查"], ["routine inspection", "例行检查"], ["visual inspection", "外观检查"]], examples: [["The inspection is complete.", "检查已完成。"], ["Perform the inspection.", "执行检查。"]] },
      { w: "completed", ipa: "/kəmˈpliːtɪd/", pos: "动词过去分词", cn: "完成的", memory: "completed = 完成的/结束的。\n表示动作已经结束。\nhas been completed = 已经完成。", phonics: "com 读 /kəm/，plete 读 /pliːt/，d 读 /ɪd/。", collocations: [["completed successfully", "成功完成"], ["inspection completed", "检查完成"], ["task completed", "任务完成"]], examples: [["The inspection has been completed.", "检查已完成。"], ["All tasks are completed.", "所有任务已完成。"]] },
    ],
    phrases: [
      { p: "has been completed successfully", ipa: "/hæz bɪn kəmˈpliːtɪd səkˈsɛsfəli/", cn: "已经顺利完成", why: "has been + completed + successfully = 已经顺利完成。现在完成时被动语态，强调动作已完成且成功。" },
    ],
    grammar: [
      { q: "completed 和 finished 有什么区别？", a: "completed = 完成的（强调按计划完成所有步骤）\nfinished = 结束的（强调到达终点）\n\n✅ The inspection has been completed.（检查已完成 → 所有检查项都做了）\n✅ The work is finished.（工作已结束 → 工作做完了）\n\n正式报告和交接用 completed，日常口语用 finished。" },
    ],
    pattern: "The + 检查/任务 + has been completed successfully",
    patternExamples: [
      { en: "The maintenance has been completed successfully.", cn: "维护已顺利完成。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "The test has been completed successfully.", cn: "测试已顺利完成。", words: [{ w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "The handover has been completed successfully.", cn: "交接已顺利完成。", words: [{ w: "handover", ipa: "/ˈhændoʊvər/", cn: "交接", phonics: "hand 读 /hænd/，over 读 /oʊvər/" }] },
    ],
    thinking: "开关柜检查完成意味着：\n① 所有柜体状态已确认正常\n② 断路器操作已验证\n③ 接地开关状态已确认\n④ 储能状态已检查\n⑤ PT柜、真空断路器已检查\n⑥ 继电保护已检查\n⑦ 联锁系统已确认\n\n这是交接流程中的一个重要里程碑。",
    pronunciation: "inspection 的重音在第二音节 /ɪnˈspɛkʃən/。\ncompleted 的重音在第二音节 /kəmˈpliːtɪd/。",
    quiz: [
      { q: "中压开关柜检查包括哪些内容？", a: "中压开关柜检查内容：① 各柜体运行状态 ② 断路器分合闸操作 ③ 接地开关位置 ④ 弹簧储能状态 ⑤ PT柜和电压互感器 ⑥ 真空断路器 ⑦ 保护继电器和事件记录 ⑧ 五防联锁系统。全部检查完成后才能确认系统正常。" },
    ],
  },
  {
    id: 1480,
    en: "The medium-voltage system is ready for normal operation.",
    cn: "中压系统已经恢复正常运行。",
    ipa: "/ðə ˈmiːdiəm ˈvoʊltɪdʒ ˈsɪstəm ɪz ˈrɛdi fɔːr ˈnɔːrməl ˌɒpəˈreɪʃən/",
    tags: ["第1480句", "完成", "★★★★★"],
    when: "确认中压系统已具备正常运行条件，可以投入运行。",
    words: [
      { w: "ready", ipa: "/ˈrɛdi/", pos: "形容词", cn: "准备好的；就绪的", memory: "ready = 准备好的/就绪的。\nbe ready for = 为……做好准备。\n系统 ready = 系统已具备运行条件。", phonics: "ready 读 /ˈrɛdi/，重音在第一音节。", collocations: [["ready for operation", "准备运行"], ["system ready", "系统就绪"], ["ready to start", "准备开始"]], examples: [["The system is ready.", "系统已就绪。"], ["We are ready for operation.", "我们准备好运行了。"]] },
      { w: "normal operation", ipa: "/ˈnɔːrməl ˌɒpəˈreɪʃən/", pos: "名词短语", cn: "正常运行", memory: "normal = 正常的；operation = 运行/操作。\nnormal operation = 正常运行。\n指系统在标准参数范围内运行。", phonics: "normal 读 /ˈnɔːrməl/，operation 读 /ˌɒpəˈreɪʃən/。", collocations: [["normal operation", "正常运行"], ["resume normal operation", "恢复正常运行"], ["return to normal operation", "恢复正常运行"]], examples: [["The system is in normal operation.", "系统处于正常运行状态。"], ["Resume normal operation.", "恢复正常运行。"]] },
    ],
    phrases: [
      { p: "ready for normal operation", ipa: "/ˈrɛdi fɔːr ˈnɔːrməl ˌɒpəˈreɪʃən/", cn: "已具备正常运行条件", why: "ready + for + normal operation = 准备好正常运行。表示系统已完成所有检查和准备，可以投入运行。" },
    ],
    grammar: [
      { q: "ready for 和 ready to 有什么区别？", a: "ready for + 名词 = 为某事准备好\nready to + 动词 = 准备好做某事\n\n✅ The system is ready for operation.（系统已准备好运行 → for + 名词）\n✅ The system is ready to start.（系统已准备好启动 → to + 动词）\n\n两者都正确，根据后面接名词还是动词选择。" },
    ],
    pattern: "The + 系统 + is ready for normal operation",
    patternExamples: [
      { en: "The UPS system is ready for normal operation.", cn: "UPS系统已恢复正常运行。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The generator is ready for normal operation.", cn: "发电机已恢复正常运行。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }, { w: "operation", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }] },
      { en: "The cooling system is ready for normal operation.", cn: "冷却系统已恢复正常运行。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "中压系统 ready for normal operation 是交接的最终确认。\n这表示：\n① 所有检查项目已完成\n② 所有设备状态正常\n③ 所有安全措施已到位\n④ 系统可以投入或继续运行\n\n这是中压开关柜交接检查的最终结论，标志着检查流程圆满结束。",
    pronunciation: "ready 读 /ˈrɛdi/。\noperation 的重音在第三音节 /ˌɒpəˈreɪʃən/。",
    quiz: [
      { q: "中压系统恢复正常运行前需要确认哪些条件？", a: "中压系统恢复正常运行前需确认：① 所有开关柜检查完成 ② 断路器、接地开关位置正确 ③ 弹簧储能正常 ④ 保护继电器无告警 ⑤ 联锁系统正常 ⑥ 无遗留安全隐患。全部条件满足后才能宣布 ready for normal operation。" },
    ],
  },
];

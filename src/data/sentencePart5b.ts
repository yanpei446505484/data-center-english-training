// EXPORTS: MOCK_SENTENCES_PART5B

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART5B: ISentence[] = [
  {
    id: 136,
    en: "Corrective actions have been completed.",
    cn: "纠正措施已经完成。",
    ipa: "/kəˈrɛk.tɪv ˈæk.ʃənz hæv biːn kəmˈpliː.tɪd/",
    tags: ["第136句", "RCA纠正措施", "★★★★★"],
    when: "在故障单处理过程中，向交接人汇报纠正措施（corrective actions）已完成，表示问题已经修复。这是RCA（根因分析）流程的关键节点。",
    words: [
      { w: "corrective", ipa: "/kəˈrɛk.tɪv/", pos: "形容词", cn: "纠正的；矫正的", memory: "① correct = 纠正（动词）；② corrective = 纠正性的（形容词）。\ncorrective action = 纠正措施（修复已发生的问题）。\n与 preventive action（预防措施）成对出现。", phonics: "cor 读 /kə/，rec 读 /rɛk/，tive 读 /tɪv/，重音在第二音节。", collocations: [["corrective action", "纠正措施"], ["corrective measure", "矫正措施"], ["corrective maintenance", "纠正性维护"]], examples: [["Corrective actions must be documented.", "纠正措施必须记录在案。"], ["We implemented corrective actions immediately.", "我们立即实施了纠正措施。"]] },
      { w: "completed", ipa: "/kəmˈpliː.tɪd/", pos: "动词(过去分词)", cn: "已完成", memory: "① complete = 完成（动词）；② completed = 已完成的（过去分词）。\nhave been completed = 已经被完成（现在完成时被动）。", phonics: "com 读 /kəm/，ple 读 /pliː/，ted 读 /tɪd/，重音在第二音节。", collocations: [["task completed", "任务完成"], ["project completed", "项目完成"], ["maintenance completed", "维护完成"]], examples: [["The repair has been completed.", "维修已经完成。"], ["All tasks are now completed.", "所有任务现已完成。"]] },
    ],
    phrases: [
      { p: "corrective actions", ipa: "/kəˈrɛk.tɪv ˈæk.ʃənz/", cn: "纠正措施", why: "corrective = 纠正性的，actions = 措施。在RCA报告中，corrective actions 指针对已发生问题的修复措施，区别于 preventive actions（防止问题再次发生的措施）。" },
      { p: "have been completed", ipa: "/hæv biːn kəmˈpliː.tɪd/", cn: "已经完成", why: "have been + 过去分词 = 现在完成时被动语态。强调动作已完成且结果持续到现在。" },
    ],
    grammar: [
      { q: "为什么用 have been completed 而不用 were completed？", a: "现在完成时 vs 简单过去时：\n✅ have been completed = 已经完成（强调现在状态：已完成，不需要再做了）\n✅ were completed = 当时完成了（只描述过去动作，不强调现在状态）\n交接时用现在完成时，因为对方关心的是'现在是否已完成'。" },
    ],
    pattern: "Corrective actions + have been + 完成状态",
    patternExamples: [
      { en: "Corrective actions have been implemented.", cn: "纠正措施已经实施。", words: [] },
      { en: "Corrective actions have been verified.", cn: "纠正措施已经验证。", words: [{ w: "verified", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
      { en: "Corrective actions have been documented.", cn: "纠正措施已经记录。", words: [] },
    ],
    thinking: "RCA报告三大核心：\n① Root cause（根本原因）\n② Corrective actions（纠正措施）- 修复已发生的问题\n③ Preventive actions（预防措施）- 防止问题再次发生\n交接时按这个顺序汇报：原因已确认 → 纠正已完成 → 预防进行中。",
    pronunciation: "corrective 重音在第二音节：cor-REC-tive /kəˈrɛk.tɪv/。\nactions 的 tions 读 /ʃənz/，不是 /tʃənz/。\ncompleted 重音在第二音节：com-PLE-ted /kəmˈpliː.tɪd/。",
    quiz: [
      { q: "纠正措施已经实施，怎么说？", a: "Corrective actions have been implemented." },
      { q: "corrective action 和 preventive action 有什么区别？", a: "corrective action = 纠正措施（修复已发生的问题）；preventive action = 预防措施（防止问题再次发生）。" },
    ],
  },
  {
    id: 137,
    en: "Preventive actions are still in progress.",
    cn: "预防措施仍在进行中。",
    ipa: "/prɪˈvɛn.tɪv ˈæk.ʃənz ɑːr stɪl ɪn ˈprɒɡ.rɛs/",
    tags: ["第137句", "RCA预防措施", "★★★★★"],
    when: "向交接人说明预防措施还在进行中，需要下一班继续跟进。这是RCA流程中持续时间最长的环节。",
    words: [
      { w: "preventive", ipa: "/prɪˈvɛn.tɪv/", pos: "形容词", cn: "预防的；防止的", memory: "① prevent = 预防/阻止（动词）；② preventive = 预防性的（形容词）。\npreventive action = 预防措施（防止问题再次发生）。\n与 corrective action（纠正措施）成对出现。", phonics: "pre 读 /prɪ/，ven 读 /vɛn/，tive 读 /tɪv/，重音在第二音节。", collocations: [["preventive action", "预防措施"], ["preventive maintenance", "预防性维护"], ["preventive measure", "预防措施"]], examples: [["Preventive actions must be planned.", "预防措施必须制定。"], ["We need preventive maintenance schedule.", "我们需要预防性维护计划。"]] },
      { w: "in progress", ipa: "/ɪn ˈprɒɡ.rɛs/", pos: "介词短语", cn: "进行中", memory: "① in = 在...中；② progress = 进展/进度。\nin progress = 正在进行中（常用固定短语）。", phonics: "in 读 /ɪn/，progress 读 /ˈprɒɡ.rɛs/，重音在第一音节。", collocations: [["work in progress", "进行中的工作"], ["project in progress", "进行中的项目"], ["repair in progress", "进行中的维修"]], examples: [["The investigation is still in progress.", "调查仍在进行中。"], ["Installation is in progress.", "安装正在进行中。"]] },
    ],
    phrases: [
      { p: "preventive actions", ipa: "/prɪˈvɛn.tɪv ˈæk.ʃənz/", cn: "预防措施", why: "preventive = 预防性的，actions = 措施。指为防止问题再次发生而采取的措施，通常包括流程改进、设备升级、培训等。" },
      { p: "still in progress", ipa: "/stɪl ɪn ˈprɒɡ.rɛs/", cn: "仍在进行中", why: "still = 仍然，in progress = 进行中。强调动作持续到现在还未完成。" },
    ],
    grammar: [
      { q: "为什么用 are still in progress 而不用 are still progressing？", a: "两者都对，但含义不同：\n✅ are still in progress = 仍在进行中（强调状态：还没完成）\n✅ are still progressing = 仍在推进中（强调动作：在往前走）\n交接时用 in progress 更常见，表示'还没做完，需要继续跟进'。" },
    ],
    pattern: "Preventive actions + are still + 进行状态",
    patternExamples: [
      { en: "Preventive actions are still ongoing.", cn: "预防措施仍在进行中。", words: [{ w: "preventive", ipa: "/prɪˈvɛntɪv/", cn: "预防性", phonics: "pre 读 /prɪ/，ventive 读 /vɛntɪv/" }] },
      { en: "Preventive actions are still being implemented.", cn: "预防措施仍在实施中。", words: [{ w: "preventive", ipa: "/prɪˈvɛntɪv/", cn: "预防性", phonics: "pre 读 /prɪ/，ventive 读 /vɛntɪv/" }] },
      { en: "Preventive actions are still under review.", cn: "预防措施仍在审查中。", words: [{ w: "preventive", ipa: "/prɪˈvɛntɪv/", cn: "预防性", phonics: "pre 读 /prɪ/，ventive 读 /vɛntɪv/" }, { w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
    ],
    thinking: "故障单处理时间线：\n问题发生 → 根本原因确认（Root cause identified）\n→ 纠正措施完成（Corrective actions completed）\n→ 预防措施进行中（Preventive actions in progress）\n→ 预防措施完成 → 故障单关闭\n交接时按这个时间线汇报进度。",
    pronunciation: "preventive 重音在第二音节：pre-VEN-tive /prɪˈvɛn.tɪv/。\nstill 的 i 读短音 /ɪ/，不要读成 /iː/。\nprogress 英式读 /ˈprɒɡ.rɛs/，美式读 /ˈprɑː.ɡres/。",
    quiz: [
      { q: "预防措施仍在实施中，怎么说？", a: "Preventive actions are still being implemented." },
      { q: "in progress 和 ongoing 有什么区别？", a: "in progress = 正在进行中（强调还没完成）；ongoing = 持续进行的（强调一直在进行）。两者在交接场景中可以互换。" },
    ],
  },
  {
    id: 138,
    en: "Please verify the repair result.",
    cn: "请确认维修结果。",
    ipa: "/pliːz ˈvɛr.ɪ.faɪ ðə rɪˈpeər rɪˈzʌlt/",
    tags: ["第138句", "验证维修", "★★★★★"],
    when: "维修完成后，要求交接人验证维修结果，确认问题确实已修复。这是故障单关闭前的必要步骤。",
    words: [
      { w: "verify", ipa: "/ˈvɛr.ɪ.faɪ/", pos: "动词", cn: "确认；验证", memory: "① verify = 确认/验证（动词）；② 通过检查或测试来确认某事是否正确或完成。\nverify the result = 确认结果。\nverify that... = 确认...（后接从句）。", phonics: "ver 读 /vɛr/，i 读 /ɪ/，fy 读 /faɪ/，重音在第一音节。", collocations: [["verify the result", "确认结果"], ["verify the status", "确认状态"], ["verify the repair", "确认维修"]], examples: [["Please verify the alarm status.", "请确认告警状态。"], ["We need to verify the fix.", "我们需要确认修复。"]] },
      { w: "repair", ipa: "/rɪˈpeər/", pos: "名词", cn: "维修；修理", memory: "① repair = 维修/修理（名词或动词）；② 指对故障设备的修复工作。\nrepair result = 维修结果。\nmaintenance repair = 维护修理。", phonics: "re 读 /rɪ/，pair 读 /peər/，重音在第二音节。", collocations: [["repair work", "维修工作"], ["repair result", "维修结果"], ["emergency repair", "紧急维修"]], examples: [["The repair was successful.", "维修成功了。"], ["Please check the repair log.", "请查看维修记录。"]] },
    ],
    phrases: [
      { p: "verify the repair result", ipa: "/ˈvɛr.ɪ.faɪ ðə rɪˈpeər rɪˈzʌlt/", cn: "确认维修结果", why: "verify = 确认，repair result = 维修结果。交接时要求对方实际检查设备，确认维修确实有效。" },
    ],
    grammar: [
      { q: "为什么用 verify 而不用 check？", a: "两者都可以，但语义略有不同：\n✅ verify = 验证/确认（更正式，强调通过检查来确认正确性）\n✅ check = 检查（更通用，可以是简单查看）\n在故障单场景中，verify 更常用，因为需要确认维修'确实有效'。" },
    ],
    pattern: "Please verify + 验证对象",
    patternExamples: [
      { en: "Please verify the test result.", cn: "请确认测试结果。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "Please verify the installation.", cn: "请确认安装。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
      { en: "Please verify the configuration.", cn: "请确认配置。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
    ],
    thinking: "故障单关闭前的验证清单：\n① 维修结果验证（Verify repair result）\n② 告警恢复确认（Verify alarm cleared）\n③ 设备运行正常（Verify equipment operating normally）\n三项全部确认后才能关闭故障单。",
    pronunciation: "verify 重音在第一音节：VER-i-fy /ˈvɛr.ɪ.faɪ/。\nrepair 重音在第二音节：re-PAIR /rɪˈpeər/。\nresult 重音在第二音节：re-SULT /rɪˈzʌlt/。",
    quiz: [
      { q: "请确认安装结果，怎么说？", a: "Please verify the installation result." },
      { q: "verify 和 check 在交接场景中有什么区别？", a: "verify = 验证/确认（更正式，需要实际检查确认正确性）；check = 检查（更通用，可以是简单查看）。故障单场景用 verify 更合适。" },
    ],
  },
  {
    id: 139,
    en: "Please verify that the alarm has been cleared.",
    cn: "请确认告警已经恢复。",
    ipa: "/pliːz ˈvɛr.ɪ.faɪ ðæt ðə əˈlɑːm hæz biːn klɪərd/",
    tags: ["第139句", "验证告警恢复", "★★★★★"],
    when: "维修完成后，要求交接人在BMS系统上确认相关告警已经自动恢复（cleared），而不是手动消除。",
    words: [
      { w: "that", ipa: "/ðæt/", pos: "连词", cn: "（引导宾语从句）", memory: "① that 在 verify that... 中引导宾语从句，说明要确认的内容。\n② 口语中 that 可以省略：Please verify the alarm has been cleared.\n③ 正式文档中通常保留 that。", phonics: "that 读 /ðæt/，th 咬舌尖。", collocations: [["verify that", "确认..."], ["confirm that", "确认..."], ["ensure that", "确保..."]], examples: [["Please verify that the system is working.", "请确认系统正常工作。"], ["Verify that all alarms are cleared.", "确认所有告警已恢复。"]] },
      { w: "cleared", ipa: "/klɪərd/", pos: "动词(过去分词)", cn: "已恢复；已清除", memory: "① clear = 清除/恢复（动词）；② cleared = 已恢复的（过去分词）。\nalarm cleared = 告警已恢复（告警自动消失）。\n与 alarm active（告警活动）相对。", phonics: "clear 读 /klɪər/，ed 读 /d/。", collocations: [["alarm cleared", "告警已恢复"], ["alarm automatically cleared", "告警自动恢复"], ["manually cleared", "手动清除"]], examples: [["The alarm has been cleared.", "告警已经恢复。"], ["All alarms were cleared after repair.", "维修后所有告警已恢复。"]] },
    ],
    phrases: [
      { p: "verify that", ipa: "/ˈvɛr.ɪ.faɪ ðæt/", cn: "确认...", why: "verify = 确认，that 引导宾语从句。verify that + 完整句子 = 确认某事。" },
      { p: "has been cleared", ipa: "/hæz biːn klɪərd/", cn: "已经恢复", why: "has been + 过去分词 = 现在完成时被动语态。告警被系统自动清除，所以用被动。" },
    ],
    grammar: [
      { q: "为什么用 has been cleared 而不用 was cleared？", a: "现在完成时 vs 简单过去时：\n✅ has been cleared = 已经恢复（强调现在状态：告警已不在）\n✅ was cleared = 当时被清除了（只描述过去动作）\n交接时用现在完成时，因为对方关心的是'现在告警是否还在'。\n\n另外，alarm cleared 通常指告警自动恢复（设备正常后告警消失），而不是手动清除。" },
    ],
    pattern: "Please verify that + 验证内容（完整句子）",
    patternExamples: [
      { en: "Please verify that the system is normal.", cn: "请确认系统正常。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "Please verify that the ticket is updated.", cn: "请确认工单已更新。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "Please verify that all tests passed.", cn: "请确认所有测试通过。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "tests", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
    ],
    thinking: "告警恢复的两种情况：\n① 自动恢复（auto cleared）：设备恢复正常后，BMS自动清除告警\n② 手动清除（manually cleared）：运维人员手动确认并清除告警\n交接时需要确认告警是自动恢复的（说明问题真的解决了），而不是手动清除的。",
    pronunciation: "that 的 th 咬舌尖：/ðæt/。\nalarm 重音在第二音节：a-LARM /əˈlɑːm/。\ncleared 的 cl 读 /kl/，不要读成 /kəl/。",
    quiz: [
      { q: "请确认系统已恢复正常，怎么说？", a: "Please verify that the system has been restored to normal." },
      { q: "alarm cleared 和 alarm cleared manually 有什么区别？", a: "alarm cleared = 告警已恢复（通常指自动恢复）；alarm cleared manually = 告警被手动清除。交接时需要确认是自动恢复。" },
    ],
  },
  {
    id: 140,
    en: "Please verify that the equipment is operating normally.",
    cn: "请确认设备运行正常。",
    ipa: "/pliːz ˈvɛr.ɪ.faɪ ðæt ðə ɪˈkwɪp.mənt ɪz ˈɒp.ə.reɪ.tɪŋ ˈnɔː.mə.li/",
    tags: ["第140句", "验证设备运行", "★★★★★"],
    when: "维修和告警恢复确认后，最后一步是要求交接人实际检查设备，确认设备运行正常。这是故障单关闭的最终验证。",
    words: [
      { w: "equipment", ipa: "/ɪˈkwɪp.mənt/", pos: "名词", cn: "设备；装备", memory: "① equipment = 设备/装备（不可数名词，没有复数形式）；② 指数据中心的各种硬件设备。\naffected equipment = 受影响的设备。\nequipment status = 设备状态。", phonics: "e 读 /ɪ/，quip 读 /kwɪp/，ment 读 /mənt/，重音在第二音节。", collocations: [["equipment status", "设备状态"], ["affected equipment", "受影响设备"], ["critical equipment", "关键设备"]], examples: [["The equipment is running normally.", "设备运行正常。"], ["Please check the equipment log.", "请查看设备日志。"]] },
      { w: "operating", ipa: "/ˈɒp.ə.reɪ.tɪŋ/", pos: "动词(现在分词)", cn: "运行；操作", memory: "① operate = 运行/操作（动词）；② operating = 正在运行的（现在分词）。\nis operating = 正在运行。\noperating normally = 正常运行。", phonics: "op 读 /ɒp/，er 读 /ə/，ating 读 /reɪ.tɪŋ/，重音在第一音节。", collocations: [["operating normally", "正常运行"], ["operating temperature", "运行温度"], ["operating manual", "操作手册"]], examples: [["The UPS is operating normally.", "UPS运行正常。"], ["Check the operating parameters.", "检查运行参数。"]] },
    ],
    phrases: [
      { p: "operating normally", ipa: "/ˈɒp.ə.reɪ.tɪŋ ˈnɔː.mə.li/", cn: "正常运行", why: "operating = 运行，normally = 正常地。设备运行状态的标准表述。" },
    ],
    grammar: [
      { q: "为什么用 is operating 而不用 operates？", a: "进行时 vs 一般时：\n✅ is operating normally = 正在正常运行（强调当前状态）\n✅ operates normally = 通常正常运行（描述一般规律）\n交接时用进行时，因为要确认的是'现在这一刻'设备是否正常。" },
    ],
    pattern: "Please verify that + 设备 + is operating + 状态",
    patternExamples: [
      { en: "Please verify that the UPS is operating normally.", cn: "请确认UPS运行正常。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "Please verify that the CRAC is operating within spec.", cn: "请确认精密空调在规格范围内运行。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }] },
      { en: "Please verify that all systems are operating correctly.", cn: "请确认所有系统运行正确。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "systems", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
    ],
    thinking: "故障单关闭前的三步验证：\n① 维修结果验证 → Verify repair result\n② 告警恢复确认 → Verify alarm cleared\n③ 设备运行正常 → Verify equipment operating normally\n三步全部确认后，故障单才能关闭。\n注意：equipment 是不可数名词，不能说 equipments。",
    pronunciation: "equipment 重音在第二音节：e-QUIP-ment /ɪˈkwɪp.mənt/。\noperating 重音在第一音节：OP-er-a-ting /ˈɒp.ə.reɪ.tɪŋ/。\nnormally 重音在第一音节：NOR-mal-ly /ˈnɔː.mə.li/。",
    quiz: [
      { q: "请确认UPS运行正常，怎么说？", a: "Please verify that the UPS is operating normally." },
      { q: "equipment 有复数形式吗？", a: "没有。equipment 是不可数名词，不能说 equipments。需要表示多个设备时用 pieces of equipment 或 devices。" },
    ],
  },
  {
    id: 141,
    en: "One fault ticket will expire today.",
    cn: "有1个故障单今天到期。",
    ipa: "/wʌn fɔːlt ˈtɪk.ɪt wɪl ɪkˈspaɪər təˈdeɪ/",
    tags: ["第141句", "故障单到期", "★★★★★"],
    when: "向交接人汇报即将到期的故障单，提醒对方优先处理。故障单到期是SLA管理的重要节点。",
    words: [
      { w: "expire", ipa: "/ɪkˈspaɪər/", pos: "动词", cn: "到期；过期", memory: "① expire = 到期/过期（动词）；② 指达到预定的截止日期。\nwill expire = 将到期。\nexpire today = 今天到期。\n与 deadline（截止日期）相关。", phonics: "ex 读 /ɪk/，pire 读 /spaɪər/，重音在第二音节。", collocations: [["expire today", "今天到期"], ["expire tomorrow", "明天到期"], ["expire soon", "即将到期"]], examples: [["The ticket will expire tomorrow.", "这个工单明天到期。"], ["The SLA will expire at midnight.", "SLA将在午夜到期。"]] },
    ],
    phrases: [
      { p: "will expire today", ipa: "/wɪl ɪkˈspaɪər təˈdeɪ/", cn: "今天将到期", why: "will expire = 将到期，today = 今天。用将来时描述即将发生的到期事件。" },
    ],
    grammar: [
      { q: "为什么用 will expire 而不用 expires？", a: "将来时 vs 一般现在时：\n✅ will expire today = 今天将到期（强调即将发生）\n✅ expires today = 今天到期（强调计划/安排）\n两者都可以，will expire 更强调'即将发生'的紧迫感。" },
    ],
    pattern: "数量 + fault ticket(s) + will expire + 时间",
    patternExamples: [
      { en: "Two fault tickets will expire tomorrow.", cn: "有2个故障单明天到期。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "Three fault tickets will expire this week.", cn: "有3个故障单本周到期。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "No fault tickets will expire today.", cn: "今天没有故障单到期。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
    ],
    thinking: "故障单时间管理：\n① 即将到期（will expire）→ 提醒交接人优先处理\n② 已超期（has exceeded）→ 需要立即升级\n③ 接近SLA（close to SLA deadline）→ 预警\n④ 违反SLA（breached SLA）→ 严重事件，需要管理层介入\n交接时按紧急程度排序汇报。",
    pronunciation: "expire 重音在第二音节：ex-PIRE /ɪkˈspaɪər/。\nwill 的 i 读短音 /ɪ/，不要读成 /aɪ/。\ntoday 重音在第二音节：to-DAY /təˈdeɪ/。",
    quiz: [
      { q: "有3个故障单明天到期，怎么说？", a: "Three fault tickets will expire tomorrow." },
      { q: "expire 和 deadline 有什么关系？", a: "expire = 到期（动词）；deadline = 截止日期（名词）。A ticket expires at the deadline = 工单在截止日期到期。" },
    ],
  },
  {
    id: 142,
    en: "Two fault tickets will expire tomorrow.",
    cn: "有2个故障单明天到期。",
    ipa: "/tuː fɔːlt ˈtɪk.ɪts wɪl ɪkˈspaɪər təˈmɒr.oʊ/",
    tags: ["第142句", "故障单到期", "★★★★★"],
    when: "继续汇报明天到期的故障单数量，让交接人了解未来24小时内需要优先处理的工作。",
    words: [
      { w: "tomorrow", ipa: "/təˈmɒr.oʊ/", pos: "副词", cn: "明天", memory: "① tomorrow = 明天（副词或名词）；② 表示今天之后的那一天。\nwill expire tomorrow = 明天将到期。\ntomorrow morning = 明天早上。", phonics: "to 读 /tə/，mor 读 /mɒr/，row 读 /roʊ/，重音在第二音节。", collocations: [["tomorrow morning", "明天早上"], ["tomorrow afternoon", "明天下午"], ["by tomorrow", "到明天之前"]], examples: [["We will finish it tomorrow.", "我们明天会完成。"], ["The deadline is tomorrow.", "截止日期是明天。"]] },
    ],
    phrases: [
      { p: "will expire tomorrow", ipa: "/wɪl ɪkˈspaɪər təˈmɒr.oʊ/", cn: "明天将到期", why: "will expire = 将到期，tomorrow = 明天。提前一天提醒，给对方留出处理时间。" },
    ],
    grammar: [
      { q: "为什么交接时要汇报明天到期的工单？", a: "交接不仅要汇报当前状态，还要预警即将发生的问题。\n明天到期的工单 = 未来24小时内必须处理的工作。\n提前预警可以让下一班合理安排优先级，避免到期时手忙脚乱。" },
    ],
    pattern: "数量 + fault tickets + will expire + 未来时间",
    patternExamples: [
      { en: "One fault ticket will expire this afternoon.", cn: "有1个故障单今天下午到期。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "Four fault tickets will expire next week.", cn: "有4个故障单下周到期。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "No fault tickets will expire this weekend.", cn: "这个周末没有故障单到期。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
    ],
    thinking: "交接时的时间维度：\n过去：已创建的工单数、已关闭的工单数\n现在：未关闭的工单数、处理中的工单数\n未来：即将到期的工单数、接近SLA的工单数\n三个维度都要汇报，给对方完整的时间全景。",
    pronunciation: "tomorrow 重音在第二音节：to-MOR-row /təˈmɒr.oʊ/。\nexpire 的 ex 读 /ɪk/，不是 /eks/。\nwill 和 expire 之间要连读：will expire /wɪl ɪkˈspaɪər/。",
    quiz: [
      { q: "有1个故障单今天下午到期，怎么说？", a: "One fault ticket will expire this afternoon." },
      { q: "交接时为什么要汇报明天到期的工单？", a: "提前预警，让下一班了解未来24小时内需要优先处理的工作，合理安排时间和资源。" },
    ],
  },
  {
    id: 143,
    en: "One fault ticket has exceeded the target completion time.",
    cn: "有1个故障单已经超过目标完成时间。",
    ipa: "/wʌn fɔːlt ˈtɪk.ɪt hæz ɪkˈsiː.dɪd ðə ˈtɑːr.ɡɪt kəmˈpliː.ʃən taɪm/",
    tags: ["第143句", "故障单超期", "★★★★★"],
    when: "向交接人汇报已经超期的故障单，这是需要立即关注和处理的问题。超期意味着已经违反了内部目标时间。",
    words: [
      { w: "exceeded", ipa: "/ɪkˈsiː.dɪd/", pos: "动词(过去分词)", cn: "已超过", memory: "① exceed = 超过（动词）；② exceeded = 已超过的（过去分词）。\nhas exceeded = 已经超过（现在完成时）。\nexceed the limit = 超过限制。", phonics: "ex 读 /ɪk/，ceed 读 /siːd/，ed 读 /ɪd/，重音在第二音节。", collocations: [["exceed the limit", "超过限制"], ["exceed the target", "超过目标"], ["exceed the deadline", "超过截止日期"]], examples: [["The ticket has exceeded the SLA.", "这个工单已经违反SLA。"], ["Temperature exceeded the threshold.", "温度超过了阈值。"]] },
      { w: "target completion time", ipa: "/ˈtɑːr.ɡɪt kəmˈpliː.ʃən taɪm/", pos: "名词短语", cn: "目标完成时间", memory: "① target = 目标；② completion = 完成；③ time = 时间。\ntarget completion time = 目标完成时间（内部设定的完成期限）。\n与 SLA deadline（SLA截止日期）不同，target 是内部目标，SLA 是对外承诺。", phonics: "target 重音在第一音节，completion 重音在第二音节。", collocations: [["target time", "目标时间"], ["completion date", "完成日期"], ["estimated completion", "预计完成"]], examples: [["The target completion time is 48 hours.", "目标完成时间是48小时。"], ["We missed the target completion time.", "我们错过了目标完成时间。"]] },
    ],
    phrases: [
      { p: "has exceeded", ipa: "/hæz ɪkˈsiː.dɪd/", cn: "已经超过", why: "has + 过去分词 = 现在完成时。强调动作已经发生且结果持续到现在。" },
      { p: "target completion time", ipa: "/ˈtɑːr.ɡɪt kəmˈpliː.ʃən taɪm/", cn: "目标完成时间", why: "target = 目标，completion = 完成，time = 时间。指内部设定的工单完成期限。" },
    ],
    grammar: [
      { q: "target completion time 和 SLA deadline 有什么区别？", a: "两者都是截止日期，但性质不同：\n✅ target completion time = 目标完成时间（内部设定的目标，违反不算严重）\n✅ SLA deadline = SLA截止日期（对客户/管理层的承诺，违反是严重事件）\n超期（exceeded target）是警告，违反SLA（breached SLA）是严重问题。" },
    ],
    pattern: "数量 + fault ticket(s) + has/have exceeded + 超期对象",
    patternExamples: [
      { en: "Two fault tickets have exceeded the SLA.", cn: "有2个故障单已经违反SLA。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "One fault ticket has exceeded 72 hours.", cn: "有1个故障单已经超过72小时。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "No fault tickets have exceeded the target.", cn: "没有故障单超过目标时间。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
    ],
    thinking: "故障单时间管理三级：\n① 即将到期（will expire）→ 提醒\n② 已超目标时间（exceeded target completion time）→ 警告\n③ 已违反SLA（breached SLA）→ 严重事件\n交接时按这个严重程度排序汇报。",
    pronunciation: "exceeded 重音在第二音节：ex-CEED-ed /ɪkˈsiː.dɪd/。\ntarget 重音在第一音节：TAR-get /ˈtɑːr.ɡɪt/。\ncompletion 重音在第二音节：com-PLE-tion /kəmˈpliː.ʃən/。",
    quiz: [
      { q: "有2个故障单已经超过目标时间，怎么说？", a: "Two fault tickets have exceeded the target completion time." },
      { q: "exceeded target 和 breached SLA 哪个更严重？", a: "breached SLA 更严重。exceeded target = 超过内部目标时间（警告级别）；breached SLA = 违反对外承诺的SLA（严重事件，需要管理层介入）。" },
    ],
  },
  {
    id: 144,
    en: "One fault ticket is close to the SLA deadline.",
    cn: "有1个故障单即将达到SLA时限。",
    ipa: "/wʌn fɔːlt ˈtɪk.ɪt ɪz kloʊs tuː ðə ˌɛs.ɛlˈeɪ ˈdɛd.laɪn/",
    tags: ["第144句", "SLA预警", "★★★★★"],
    when: "向交接人预警即将达到SLA时限的故障单，提醒对方优先处理以避免违反SLA。",
    words: [
      { w: "close to", ipa: "/kloʊs tuː/", pos: "介词短语", cn: "接近；靠近", memory: "① close = 接近的（形容词）；② to = 到（介词）。\nclose to = 接近/靠近。\nclose to the deadline = 接近截止日期。", phonics: "close 读 /kloʊs/（形容词），不是 /kloʊz/（动词关闭）。", collocations: [["close to deadline", "接近截止日期"], ["close to completion", "接近完成"], ["close to SLA", "接近SLA"]], examples: [["We are close to the deadline.", "我们接近截止日期了。"], ["The project is close to completion.", "项目接近完成。"]] },
      { w: "SLA deadline", ipa: "/ˌɛs.ɛlˈeɪ ˈdɛd.laɪn/", pos: "名词短语", cn: "SLA时限；SLA截止日期", memory: "① SLA = Service Level Agreement（服务等级协议）；② deadline = 截止日期。\nSLA deadline = SLA规定的最后期限。\nbreach the SLA = 违反SLA。", phonics: "SLA 逐字母读 S-L-A，deadline 重音在第一音节。", collocations: [["SLA breach", "违反SLA"], ["SLA compliance", "SLA合规"], ["meet the SLA", "满足SLA"]], examples: [["We must meet the SLA deadline.", "我们必须满足SLA时限。"], ["The SLA deadline is in 2 hours.", "SLA时限还有2小时。"]] },
    ],
    phrases: [
      { p: "close to the SLA deadline", ipa: "/kloʊs tuː ðə ˌɛs.ɛlˈeɪ ˈdɛd.laɪn/", cn: "接近SLA时限", why: "close to = 接近，SLA deadline = SLA截止日期。表示即将达到SLA规定的最后期限。" },
    ],
    grammar: [
      { q: "为什么用 is close to 而不用 will reach？", a: "状态 vs 动作：\n✅ is close to = 接近（描述当前状态：已经很接近了）\n✅ will reach = 将达到（描述未来动作）\n交接时用 is close to 更直接，表示'现在就已经很接近了，需要立即关注'。" },
    ],
    pattern: "数量 + fault ticket(s) + is/are close to + 期限",
    patternExamples: [
      { en: "Two fault tickets are close to the SLA deadline.", cn: "有2个故障单接近SLA时限。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "One fault ticket is close to breach.", cn: "有1个故障单即将违反（SLA）。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "No fault tickets are close to deadline.", cn: "没有故障单接近截止日期。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
    ],
    thinking: "SLA管理是数据中心运维的核心指标：\n① 接近SLA（close to SLA）→ 预警，优先处理\n② 违反SLA（breached SLA）→ 严重事件，需要立即升级\nSLA通常按故障严重程度分级：\n- Critical: 4小时内响应，24小时内解决\n- Major: 8小时内响应，48小时内解决\n- Minor: 24小时内响应，7天内解决",
    pronunciation: "close 这里读 /kloʊs/（形容词），不是 /kloʊz/（动词）。\nSLA 逐字母读：S-L-A /ˌɛs.ɛlˈeɪ/。\ndeadline 重音在第一音节：DEAD-line /ˈdɛd.laɪn/。",
    quiz: [
      { q: "有3个故障单接近SLA时限，怎么说？", a: "Three fault tickets are close to the SLA deadline." },
      { q: "close to 在这里读 /kloʊs/ 还是 /kloʊz/？", a: "读 /kloʊs/。这里 close 是形容词（接近的），读 /kloʊs/；如果是动词（关闭），读 /kloʊz/。" },
    ],
  },
  {
    id: 145,
    en: "One fault ticket has already breached the SLA.",
    cn: "有1个故障单已经违反SLA。",
    ipa: "/wʌn fɔːlt ˈtɪk.ɪt hæz ˈɔːl.rɛ.di briːtʃt ðə ˌɛs.ɛlˈeɪ/",
    tags: ["第145句", "SLA违反", "★★★★★"],
    when: "向交接人汇报已经违反SLA的故障单，这是严重事件，需要立即升级处理并通知管理层。",
    words: [
      { w: "already", ipa: "/ɔːlˈrɛd.i/", pos: "副词", cn: "已经", memory: "① already = 已经（副词）；② 强调动作比预期更早发生或已经完成。\nhas already breached = 已经违反。\nalready 通常放在 have/has 和过去分词之间。", phonics: "al 读 /ɔːl/，ready 读 /rɛd.i/，重音在第二音节。", collocations: [["already done", "已经完成"], ["already started", "已经开始"], ["already expired", "已经过期"]], examples: [["The ticket has already been closed.", "这个工单已经关闭了。"], ["We have already notified the vendor.", "我们已经通知了供应商。"]] },
      { w: "breached", ipa: "/briːtʃt/", pos: "动词(过去分词)", cn: "已违反；已突破", memory: "① breach = 违反/突破（动词）；② breached = 已违反的（过去分词）。\nbreach the SLA = 违反SLA。\nbreach the contract = 违反合同。", phonics: "breach 读 /briːtʃ/，ed 读 /t/。", collocations: [["breach the SLA", "违反SLA"], ["breach the contract", "违反合同"], ["security breach", "安全违规"]], examples: [["We breached the SLA deadline.", "我们违反了SLA时限。"], ["The vendor breached the contract.", "供应商违反了合同。"]] },
    ],
    phrases: [
      { p: "has already breached", ipa: "/hæz ˈɔːl.rɛ.di briːtʃt/", cn: "已经违反", why: "has breached = 已经违反（现在完成时），already = 已经（强调已经发生了）。" },
    ],
    grammar: [
      { q: "为什么用 breached 而不用 violated？", a: "两者都可以表示'违反'，但在SLA场景中：\n✅ breached = 违反/突破（更常用，指突破了某个界限）\n✅ violated = 违反（更正式，通常用于法律/规则）\n在SLA场景中，breach 是标准用词：SLA breach = 违反SLA。" },
    ],
    pattern: "数量 + fault ticket(s) + has/have already breached + 违反对象",
    patternExamples: [
      { en: "Two fault tickets have already breached the SLA.", cn: "有2个故障单已经违反SLA。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "One fault ticket has already breached the 48-hour target.", cn: "有1个故障单已经超过48小时目标。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "No fault tickets have breached the SLA.", cn: "没有故障单违反SLA。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
    ],
    thinking: "SLA违反的处理流程：\n① 立即升级（escalate immediately）\n② 通知管理层（notify management）\n③ 通知客户（notify customer）\n④ 制定加速计划（create acceleration plan）\n⑤ 记录RCA（document root cause analysis）\n交接时必须明确告知对方哪些工单已违反SLA。",
    pronunciation: "already 重音在第二音节：al-READ-y /ɔːlˈrɛd.i/。\nbreached 的 ea 读长音 /iː/，不是 /ɛ/。\nSLA 逐字母读：S-L-A。",
    quiz: [
      { q: "有2个故障单已经违反SLA，怎么说？", a: "Two fault tickets have already breached the SLA." },
      { q: "breach 和 violate 在SLA场景中有什么区别？", a: "breach = 违反/突破（SLA场景标准用词）；violate = 违反（更正式，通常用于法律/规则）。SLA breach 是固定搭配。" },
    ],
  },
  {
    id: 146,
    en: "Please escalate this fault ticket immediately.",
    cn: "请立即升级处理这个故障单。",
    ipa: "/pliːz ˈɛs.kə.leɪt ðɪs fɔːlt ˈtɪk.ɪt ɪˈmiː.di.ət.li/",
    tags: ["第146句", "故障单升级", "★★★★★"],
    when: "发现严重问题或SLA即将违反时，要求立即升级处理。这是故障单管理中的紧急操作。",
    words: [
      { w: "escalate", ipa: "/ˈɛs.kə.leɪt/", pos: "动词", cn: "升级；逐级上报", memory: "① escalate = 升级/逐级上报（动词）；② 指将问题提交给更高级别的人员处理。\nescalate to L2 = 升级到L2。\nescalate to management = 升级到管理层。", phonics: "es 读 /ɛs/，ca 读 /kə/，late 读 /leɪt/，重音在第一音节。", collocations: [["escalate immediately", "立即升级"], ["escalate to L2", "升级到L2"], ["escalate to management", "升级到管理层"]], examples: [["Please escalate this ticket.", "请升级这个工单。"], ["We need to escalate to the vendor.", "我们需要升级到供应商。"]] },
      { w: "immediately", ipa: "/ɪˈmiː.di.ət.li/", pos: "副词", cn: "立即；马上", memory: "① immediately = 立即/马上（副词）；② 表示没有延迟地执行动作。\nescalate immediately = 立即升级。\nact immediately = 立即行动。", phonics: "im 读 /ɪ/，me 读 /miː/，di 读 /di/，ate 读 /ət/，ly 读 /li/，重音在第二音节。", collocations: [["immediately", "立即"], ["right away", "马上"], ["as soon as possible", "尽快"]], examples: [["Please respond immediately.", "请立即响应。"], ["We need to act immediately.", "我们需要立即行动。"]] },
    ],
    phrases: [
      { p: "escalate immediately", ipa: "/ˈɛs.kə.leɪt ɪˈmiː.di.ət.li/", cn: "立即升级", why: "escalate = 升级，immediately = 立即。表示需要马上升级处理，不能拖延。" },
    ],
    grammar: [
      { q: "为什么用 immediately 而不用 right now？", a: "两者都表示'立即'，但语气不同：\n✅ immediately = 立即（更正式，更强调紧迫性）\n✅ right now = 现在马上（更口语化）\n在故障单场景中，immediately 更常用，语气更强烈。" },
    ],
    pattern: "Please escalate + 升级对象 + immediately",
    patternExamples: [
      { en: "Please escalate this issue immediately.", cn: "请立即升级这个问题。", words: [{ w: "escalate", ipa: "/ˈɛskəleɪt/", cn: "升级", phonics: "es 读 /ɛs/，calate 读 /kəleɪt/" }, { w: "issue", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Please escalate to L3 immediately.", cn: "请立即升级到L3。", words: [{ w: "escalate", ipa: "/ˈɛskəleɪt/", cn: "升级", phonics: "es 读 /ɛs/，calate 读 /kəleɪt/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Please escalate to the vendor immediately.", cn: "请立即升级到供应商。", words: [{ w: "escalate", ipa: "/ˈɛskəleɪt/", cn: "升级", phonics: "es 读 /ɛs/，calate 读 /kəleɪt/" }, { w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
    ],
    thinking: "故障单升级触发条件：\n① SLA即将违反或已违反\n② 问题影响范围扩大\n③ 当前层级无法解决\n④ 需要外部资源（供应商/管理层）\n⑤ 客户投诉或要求\n升级时要说明：升级到哪个层级 + 升级原因 + 紧急程度。",
    pronunciation: "escalate 重音在第一音节：ES-ca-late /ˈɛs.kə.leɪt/。\nimmediately 重音在第二音节：im-ME-di-ate-ly /ɪˈmiː.di.ət.li/。\nthis 的 th 咬舌尖：/ðɪs/。",
    quiz: [
      { q: "请立即升级到L3，怎么说？", a: "Please escalate to L3 immediately." },
      { q: "immediately 和 right now 哪个更正式？", a: "immediately 更正式，更强调紧迫性。right now 更口语化。在故障单场景中用 immediately 更合适。" },
    ],
  },
  {
    id: 147,
    en: "Please notify the customer about the delay.",
    cn: "请通知客户处理延迟。",
    ipa: "/pliːz ˈnoʊ.tɪ.faɪ ðə ˈkʌs.tə.mər əˈbaʊt ðə dɪˈleɪ/",
    tags: ["第147句", "客户通知", "★★★★★"],
    when: "故障单处理延迟时，需要主动通知客户，说明延迟原因和预计解决时间。这是客户关系管理的重要环节。",
    words: [
      { w: "notify", ipa: "/ˈnoʊ.tɪ.faɪ/", pos: "动词", cn: "通知；告知", memory: "① notify = 通知/告知（动词）；② 正式地告知某人某事。\nnotify someone about something = 通知某人某事。\nnotify the customer = 通知客户。", phonics: "no 读 /noʊ/，ti 读 /tɪ/，fy 读 /faɪ/，重音在第一音节。", collocations: [["notify the customer", "通知客户"], ["notify immediately", "立即通知"], ["notify by email", "通过邮件通知"]], examples: [["Please notify the team.", "请通知团队。"], ["We notified the vendor yesterday.", "我们昨天通知了供应商。"]] },
      { w: "delay", ipa: "/dɪˈleɪ/", pos: "名词", cn: "延迟；延误", memory: "① delay = 延迟/延误（名词或动词）；② 指比预期时间晚。\nabout the delay = 关于延迟。\ndue to delay = 由于延迟。", phonics: "de 读 /dɪ/，lay 读 /leɪ/，重音在第二音节。", collocations: [["processing delay", "处理延迟"], ["due to delay", "由于延迟"], ["delay notification", "延迟通知"]], examples: [["There is a delay in processing.", "处理有延迟。"], ["Sorry for the delay.", "抱歉延迟了。"]] },
    ],
    phrases: [
      { p: "notify the customer about", ipa: "/ˈnoʊ.tɪ.faɪ ðə ˈkʌs.tə.mər əˈbaʊt/", cn: "通知客户关于...", why: "notify = 通知，customer = 客户，about = 关于。notify someone about something = 通知某人某事。" },
    ],
    grammar: [
      { q: "为什么用 notify 而不用 tell？", a: "notify 和 tell 都表示'告知'，但正式程度不同：\n✅ notify = 通知（正式，通常用于业务/官方场景）\n✅ tell = 告诉（非正式，日常用语）\n在客户关系管理中，notify 是标准用词。" },
    ],
    pattern: "Please notify + 通知对象 + about + 通知内容",
    patternExamples: [
      { en: "Please notify the vendor about the issue.", cn: "请通知供应商这个问题。", words: [{ w: "notify", ipa: "/ˈnoʊtɪfaɪ/", cn: "通知", phonics: "not 读 /noʊt/，ify 读 /ɪfaɪ/" }, { w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }, { w: "issue", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
      { en: "Please notify the team about the change.", cn: "请通知团队这个变更。", words: [{ w: "notify", ipa: "/ˈnoʊtɪfaɪ/", cn: "通知", phonics: "not 读 /noʊt/，ify 读 /ɪfaɪ/" }] },
      { en: "Please notify management about the delay.", cn: "请通知管理层延迟情况。", words: [{ w: "notify", ipa: "/ˈnoʊtɪfaɪ/", cn: "通知", phonics: "not 读 /noʊt/，ify 读 /ɪfaɪ/" }] },
    ],
    thinking: "客户通知的最佳实践：\n① 主动通知（不要等客户来问）\n② 说明延迟原因（root cause）\n③ 给出预计解决时间（ETA）\n④ 提供临时解决方案（workaround）\n⑤ 承诺定期更新（regular updates）\n交接时提醒下一班：需要通知客户。",
    pronunciation: "notify 重音在第一音节：NO-ti-fy /ˈnoʊ.tɪ.faɪ/。\ncustomer 重音在第一音节：CUS-to-mer /ˈkʌs.tə.mər/。\nabout 重音在第二音节：a-BOUT /əˈbaʊt/。",
    quiz: [
      { q: "请通知管理层延迟情况，怎么说？", a: "Please notify management about the delay." },
      { q: "notify 和 tell 在客户关系场景中有什么区别？", a: "notify = 通知（正式，业务场景标准用词）；tell = 告诉（非正式，日常用语）。客户关系管理用 notify 更合适。" },
    ],
  },
  {
    id: 148,
    en: "Please update the fault ticket before your shift ends.",
    cn: "请在交班前更新故障单。",
    ipa: "/pliːz ˈʌp.deɪt ðə fɔːlt ˈtɪk.ɪt bɪˈfɔːr jɔːr ʃɪft ɛndz/",
    tags: ["第148句", "交班前更新", "★★★★★"],
    when: "提醒交接人在当班结束前更新故障单，记录本班次的处理进展。这是交接流程的标准要求。",
    words: [
      { w: "update", ipa: "/ˈʌp.deɪt/", pos: "动词", cn: "更新", memory: "① update = 更新（动词或名词）；② 将最新信息添加到记录中。\nupdate the ticket = 更新工单。\nprovide an update = 提供更新（名词用法）。", phonics: "up 读 /ʌp/，date 读 /deɪt/，重音在第一音节。", collocations: [["update the ticket", "更新工单"], ["status update", "状态更新"], ["daily update", "每日更新"]], examples: [["Please update the log.", "请更新日志。"], ["I updated the ticket yesterday.", "我昨天更新了工单。"]] },
      { w: "shift ends", ipa: "/ʃɪft ɛndz/", pos: "动词短语", cn: "交班；下班", memory: "① shift = 班次（名词）；② ends = 结束（动词第三人称单数）。\nshift ends = 班次结束/交班。\nbefore your shift ends = 在你交班之前。", phonics: "shift 读 /ʃɪft/，ends 读 /ɛndz/。", collocations: [["shift ends", "交班"], ["shift starts", "接班"], ["shift handover", "交接"]], examples: [["My shift ends at 6 PM.", "我下午6点交班。"], ["Before the shift ends, update all tickets.", "交班前更新所有工单。"]] },
    ],
    phrases: [
      { p: "before your shift ends", ipa: "/bɪˈfɔːr jɔːr ʃɪft ɛndz/", cn: "在你交班之前", why: "before = 在...之前，your shift ends = 你的班次结束。强调在当班时间内完成更新。" },
    ],
    grammar: [
      { q: "为什么用 before your shift ends 而不用 before you leave？", a: "shift ends = 班次结束（正式，强调工作时间的结束）\nleave = 离开（非正式，可能只是暂时离开）\n在交接场景中，用 shift ends 更准确，因为更新工单是工作职责的一部分。" },
    ],
    pattern: "Please update + 更新对象 + before + 截止时间",
    patternExamples: [
      { en: "Please update the status before handover.", cn: "请在交接前更新状态。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }, { w: "handover", ipa: "/ˈhændoʊvər/", cn: "交接", phonics: "hand 读 /hænd/，over 读 /oʊvər/" }] },
      { en: "Please update the log before your shift ends.", cn: "请在交班前更新日志。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }] },
      { en: "Please update the ticket before the deadline.", cn: "请在截止日期前更新工单。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
    ],
    thinking: "交接前必须完成的更新：\n① 更新所有进行中的故障单\n② 记录本班次的处理进展\n③ 添加待办事项给下一班\n④ 确认所有告警状态\n⑤ 检查所有到期和即将到期的工单\n更新工单是交接前的最后一步。",
    pronunciation: "update 重音在第一音节：UP-date /ˈʌp.deɪt/。\nbefore 重音在第二音节：be-FORE /bɪˈfɔːr/。\nshift 的 sh 读 /ʃ/，不要读成 /s/。",
    quiz: [
      { q: "请在交接前更新状态，怎么说？", a: "Please update the status before handover." },
      { q: "shift ends 和 leave 在交接场景中有什么区别？", a: "shift ends = 班次结束（正式，强调工作时间结束）；leave = 离开（非正式）。交接场景用 shift ends 更准确。" },
    ],
  },
  {
    id: 149,
    en: "The next shift should continue following up on this fault ticket.",
    cn: "下一班需要继续跟进这个故障单。",
    ipa: "/ðə nɛkst ʃɪft ʃʊd kənˈtɪn.juː ˈfɒl.oʊ.ɪŋ ʌp ɒn ðɪs fɔːlt ˈtɪk.ɪt/",
    tags: ["第149句", "下一班跟进", "★★★★★"],
    when: "向交接人明确说明哪些故障单需要下一班继续跟进，确保工作的连续性。这是交接的核心目的。",
    words: [
      { w: "continue", ipa: "/kənˈtɪn.juː/", pos: "动词", cn: "继续", memory: "① continue = 继续（动词）；② 持续进行某个动作或状态。\ncontinue following up = 继续跟进。\ncontinue monitoring = 继续监控。", phonics: "con 读 /kən/，tin 读 /tɪn/，ue 读 /juː/，重音在第二音节。", collocations: [["continue monitoring", "继续监控"], ["continue working", "继续工作"], ["continue following up", "继续跟进"]], examples: [["Please continue the investigation.", "请继续调查。"], ["We will continue tomorrow.", "我们明天继续。"]] },
      { w: "following up on", ipa: "/ˈfɒl.oʊ.ɪŋ ʌp ɒn/", pos: "动词短语", cn: "跟进；追踪", memory: "① follow up = 跟进/追踪（动词短语）；② following up on = 正在跟进（现在分词+介词）。\nfollow up on a ticket = 跟进工单。\nfollow up with the vendor = 跟进供应商。", phonics: "follow 读 /ˈfɒl.oʊ/，up 读 /ʌp/，on 读 /ɒn/。", collocations: [["follow up on", "跟进"], ["follow up with", "与...跟进"], ["follow-up action", "后续行动"]], examples: [["Please follow up on this issue.", "请跟进这个问题。"], ["I will follow up with the team.", "我会和团队跟进。"]] },
    ],
    phrases: [
      { p: "continue following up on", ipa: "/kənˈtɪn.juː ˈfɒl.oʊ.ɪŋ ʌp ɒn/", cn: "继续跟进", why: "continue = 继续，following up on = 跟进。continue + V-ing 表示继续做某事。" },
    ],
    grammar: [
      { q: "为什么用 should continue 而不用 must continue？", a: "should 和 must 的语气不同：\n✅ should continue = 应该继续（建议/期望，语气较温和）\n✅ must continue = 必须继续（强制/命令，语气很强）\n交接时用 should 更合适，表示'建议下一班继续跟进'，而不是'命令'。" },
    ],
    pattern: "The next shift should continue + V-ing + 跟进对象",
    patternExamples: [
      { en: "The next shift should continue monitoring this alarm.", cn: "下一班应该继续监控这个告警。", words: [{ w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }, { w: "continue", ipa: "/kənˈtɪnjuː/", cn: "继续", phonics: "con 读 /kən/，tinue 读 /tɪnjuː/" }, { w: "monitoring", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }] },
      { en: "The next shift should continue working on this ticket.", cn: "下一班应该继续处理这个工单。", words: [{ w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }, { w: "continue", ipa: "/kənˈtɪnjuː/", cn: "继续", phonics: "con 读 /kən/，tinue 读 /tɪnjuː/" }, { w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "The next shift should continue following up with the vendor.", cn: "下一班应该继续跟进供应商。", words: [{ w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }, { w: "continue", ipa: "/kənˈtɪnjuː/", cn: "继续", phonics: "con 读 /kən/，tinue 读 /tɪnjuː/" }, { w: "following", ipa: "/ˈfɒloʊ/", cn: "跟踪", phonics: "fol 读 /fɒl/，low 读 /loʊ/" }] },
    ],
    thinking: "交接时明确下一班任务：\n① 哪些工单需要继续跟进\n② 每个工单的下一步行动\n③ 预计的时间节点\n④ 需要联系的供应商/客户\n⑤ 需要关注的关键指标\n让下一班清楚知道'接手后该做什么'。",
    pronunciation: "continue 重音在第二音节：con-TIN-ue /kənˈtɪn.juː/。\nfollowing 重音在第一音节：FOL-low-ing /ˈfɒl.oʊ.ɪŋ/。\nshould 的 sh 读 /ʃ/，不要读成 /s/。",
    quiz: [
      { q: "下一班应该继续监控这个告警，怎么说？", a: "The next shift should continue monitoring this alarm." },
      { q: "should 和 must 在交接场景中有什么区别？", a: "should = 应该（建议/期望，语气温和）；must = 必须（强制/命令，语气强）。交接时用 should 更合适，表示建议而非命令。" },
    ],
  },
  {
    id: 150,
    en: "Now let's review the SLA status.",
    cn: "现在我们开始检查SLA状态。",
    ipa: "/naʊ lɛts rɪˈvjuː ðə ˌɛs.ɛlˈeɪ ˈstæt.əs/",
    tags: ["第150句", "转场SLA检查", "★★★★★"],
    when: "故障单交接完成后，转入下一个交接环节：SLA状态检查。这是交接流程的转场句，引导进入下一部分内容。",
    words: [
      { w: "review", ipa: "/rɪˈvjuː/", pos: "动词", cn: "检查；审查", memory: "① review = 检查/审查（动词或名词）；② 系统地检查或评估某事。\nreview the status = 检查状态。\nreview the tickets = 检查工单。", phonics: "re 读 /rɪ/，view 读 /vjuː/，重音在第二音节。", collocations: [["review the status", "检查状态"], ["review the tickets", "检查工单"], ["performance review", "绩效评估"]], examples: [["Let's review the alarms.", "我们来检查告警。"], ["Please review the report.", "请审查报告。"]] },
      { w: "SLA status", ipa: "/ˌɛs.ɛlˈeɪ ˈstæt.əs/", pos: "名词短语", cn: "SLA状态", memory: "① SLA = Service Level Agreement（服务等级协议）；② status = 状态。\nSLA status = SLA合规状态（是否满足SLA要求）。\n包括：达标/接近达标/已违反等状态。", phonics: "SLA 逐字母读 S-L-A，status 重音在第一音节。", collocations: [["SLA status", "SLA状态"], ["SLA compliance", "SLA合规"], ["SLA report", "SLA报告"]], examples: [["Check the SLA status.", "检查SLA状态。"], ["The SLA status is good.", "SLA状态良好。"]] },
    ],
    phrases: [
      { p: "review the SLA status", ipa: "/rɪˈvjuː ðə ˌɛs.ɛlˈeɪ ˈstæt.əs/", cn: "检查SLA状态", why: "review = 检查，SLA status = SLA状态。系统地检查所有工单的SLA合规情况。" },
    ],
    grammar: [
      { q: "为什么用 let's 而不用 shall we？", a: "两者都表示建议，但语气不同：\n✅ let's = 让我们（更直接，更常用）\n✅ shall we = 我们...好吗？（更礼貌，更正式）\n在交接场景中，let's 更常用，表示'我们一起做'。" },
    ],
    pattern: "Now let's review + 检查对象",
    patternExamples: [
      { en: "Now let's review the alarm status.", cn: "现在我们来检查告警状态。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Now let's review the ticket list.", cn: "现在我们来检查工单列表。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "Now let's review the handover checklist.", cn: "现在我们来检查交接清单。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "handover", ipa: "/ˈhændoʊvər/", cn: "交接", phonics: "hand 读 /hænd/，over 读 /oʊvər/" }] },
    ],
    thinking: "完整交接流程（300句场景）：\n① 开始交班（1-30句）\n② 告警状态交接（31-60句）：BMS告警 → DCIM告警\n③ 事件单交接（61-90句）：事件单统计 → 逐单汇报 → 工单维护\n④ 故障单交接（91-120句）：故障单统计 → 逐单汇报 → 工单维护\n⑤ SLA状态检查（121-150句）：SLA合规 → 即将到期 → 已违反\n⑥ 巡检任务交接（151-180句）\n⑦ 备件管理交接（181-210句）\n⑧ 变更管理交接（211-240句）\n⑨ 安全合规交接（241-270句）\n⑩ 结束交班（271-300句）",
    pronunciation: "review 重音在第二音节：re-VIEW /rɪˈvjuː/。\nSLA 逐字母读：S-L-A /ˌɛs.ɛlˈeɪ/。\nstatus 重音在第一音节：STA-tus /ˈstæt.əs/。",
    quiz: [
      { q: "现在我们来检查告警状态，怎么说？", a: "Now let's review the alarm status." },
      { q: "let's 和 shall we 在交接场景中有什么区别？", a: "let's = 让我们（更直接，更常用）；shall we = 我们...好吗？（更礼貌，更正式）。交接场景用 let's 更自然。" },
    ],
  },
];

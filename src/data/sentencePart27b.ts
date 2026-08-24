// EXPORTS: MOCK_SENTENCES_PART27B

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART27B: ISentence[] = [
  // ── 场景001：安防系统 - 白名单与访客 (1741-1750) ──
  {
    id: 1741,
    en: "Is the visitor on today's whitelist?",
    cn: "访客是否在今天的白名单中？",
    ipa: "/ɪz ðə ˈvɪzɪtər ɒn təˈdeɪz ˈwaɪtˌlɪst/",
    tags: ["第1741句", "访客管理", "★★★★★"],
    when: "访客进入数据中心前，必须确认是否已在当天的白名单中。白名单是预先审批的访客名单，只有在名单上的人员才能进入。",
    words: [
      { w: "visitor", ipa: "/ˈvɪzɪtər/", pos: "名词", cn: "访客", memory: "visit = 访问/参观；-or = 人。\nvisitor = 访客，指来访的人员。\n数据中心对访客有严格的准入控制。", phonics: "vi 读 /vɪ/，si 读 /zɪ/，tor 读 /tər/，重音在第一音节。", collocations: [["visitor access", "访客权限"], ["visitor log", "访客登记"], ["visitor badge", "访客证"]], examples: [["The visitor is waiting.", "访客正在等待。"], ["Please check the visitor's ID.", "请检查访客证件。"]] },
      { w: "whitelist", ipa: "/ˈwaɪtˌlɪst/", pos: "名词", cn: "白名单", memory: "white = 白色/允许的；list = 名单。\nwhitelist = 白名单，预先批准的允许进入人员名单。\n数据中心安保必须核对访客是否在白名单中。", phonics: "white 读 /waɪt/，list 读 /lɪst/。", collocations: [["on the whitelist", "在白名单中"], ["add to whitelist", "加入白名单"], ["approved whitelist", "已审批白名单"]], examples: [["Is he on the whitelist?", "他在白名单中吗？"], ["Add her to the whitelist.", "把她加入白名单。"]] },
    ],
    phrases: [
      { p: "on today's whitelist", ipa: "/ɒn təˈdeɪz ˈwaɪtˌlɪst/", cn: "在今天的白名单中", why: "on + today's + whitelist = 在今天的白名单中。白名单是数据中心安保的第一道防线，确保只有预先批准的人员才能进入。" },
    ],
    grammar: [
      { q: "is 疑问句和陈述句有什么区别？", a: "is 疑问句 = Is + 主语...?（询问）\n陈述句 = 主语 + is...（陈述）\n✅ Is the visitor on the whitelist?（访客在白名单中吗？→ 询问）\n✅ The visitor is on the whitelist.（访客在白名单中。→ 陈述）\n接待访客时用疑问句确认。" },
    ],
    pattern: "Is the + 人员 + on today's whitelist?",
    patternExamples: [
      { en: "Is the technician on today's whitelist?", cn: "技术人员是否在今天的白名单中？", words: [] },
      { en: "Is the vendor on today's whitelist?", cn: "供应商是否在今天的白名单中？", words: [{ w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }] },
      { en: "Is the auditor on today's whitelist?", cn: "审计员是否在今天的白名单中？", words: [] },
    ],
    thinking: "数据中心访客管理流程：① 确认白名单（本句）→ ② 加入白名单（如不在）→ ③ 白名单审批 → ④ 前台登记 → ⑤ 核实身份 → ⑥ 发放访客证 → ⑦ 全程陪同。\n白名单制度确保所有进入数据中心的外部人员都经过预先审批。",
    pronunciation: "visitor 的 vi 读 /vɪ/，不是 /viː/。\nwhitelist 的 white 读 /waɪt/，list 读 /lɪst/。",
    quiz: [
      { q: "技术人员是否在今天的白名单中，怎么说？", a: "Is the technician on today's whitelist?" },
      { q: "白名单的作用是什么？", a: "白名单是预先审批的允许进入人员名单，确保只有经过审批的外部人员（访客、供应商、审计员等）才能进入数据中心，是安保的第一道防线。" },
    ],
  },
  {
    id: 1742,
    en: "Please add the visitor to the whitelist.",
    cn: "请将访客加入白名单。",
    ipa: "/pliːz æd ðə ˈvɪzɪtər tuː ðə ˈwaɪtˌlɪst/",
    tags: ["第1742句", "白名单管理", "★★★★★"],
    when: "如果访客不在白名单中，需要将其加入白名单并等待审批。add to = 添加到。",
    words: [
      { w: "add", ipa: "/æd/", pos: "动词", cn: "添加；加入", memory: "add = 添加/加入。\nadd to = 添加到/加入到。\n将访客加入白名单是访客准入的第一步。", phonics: "add 读 /æd/，短元音。", collocations: [["add to whitelist", "加入白名单"], ["add to list", "加入名单"], ["add to system", "加入系统"]], examples: [["Please add him to the list.", "请把他加入名单。"], ["Add the visitor to the whitelist.", "将访客加入白名单。"]] },
      { w: "visitor", ipa: "/ˈvɪzɪtər/", pos: "名词", cn: "访客", memory: "visit = 访问/参观；-or = 人。\nvisitor = 访客，指来访的人员。\n数据中心对访客有严格的准入控制。", phonics: "vi 读 /vɪ/，si 读 /zɪ/，tor 读 /tər/，重音在第一音节。", collocations: [["visitor access", "访客权限"], ["visitor log", "访客登记"], ["visitor badge", "访客证"]], examples: [["The visitor is waiting.", "访客正在等待。"], ["Please check the visitor's ID.", "请检查访客证件。"]] },
    ],
    phrases: [
      { p: "add to the whitelist", ipa: "/æd tuː ðə ˈwaɪtˌlɪst/", cn: "加入白名单", why: "add + to + the + whitelist = 加入白名单。这是访客准入流程的第一步操作。" },
    ],
    grammar: [
      { q: "add 和 register 有什么区别？", a: "add = 添加（简单加入列表）\nregister = 登记（详细记录信息）\n✅ Add the visitor to the whitelist.（将访客加入白名单 → 简单添加名字）\n✅ Register the visitor at reception.（在前台登记访客 → 详细记录信息）\n白名单用 add，前台用 register。" },
    ],
    pattern: "Please add the + 人员 + to the whitelist",
    patternExamples: [
      { en: "Please add the technician to the whitelist.", cn: "请将技术人员加入白名单。", words: [] },
      { en: "Please add the vendor to the whitelist.", cn: "请将供应商加入白名单。", words: [{ w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }] },
      { en: "Please add the auditor to the whitelist.", cn: "请将审计员加入白名单。", words: [] },
    ],
    thinking: "加入白名单后需要等待审批（1743），审批通过后才能在前台登记（1744）。\n白名单管理通常由安保部门负责，需要经过部门经理审批。",
    pronunciation: "add 的 a 读 /æ/，不是 /ɑː/。\nwhitelist 的 white 读 /waɪt/。",
    quiz: [
      { q: "请将技术人员加入白名单，怎么说？", a: "Please add the technician to the whitelist." },
    ],
  },
  {
    id: 1743,
    en: "The whitelist has been approved.",
    cn: "白名单已经审批通过。",
    ipa: "/ðə ˈwaɪtˌlɪst hæz biːn əˈpruːvd/",
    tags: ["第1743句", "白名单审批", "★★★★★"],
    when: "白名单加入后需要经过审批流程，审批通过后访客才能进入数据中心。",
    words: [
      { w: "approved", ipa: "/əˈpruːvd/", pos: "动词过去分词", cn: "已审批；已批准", memory: "approve = 审批/批准；-ed = 过去分词。\napproved = 已审批/已批准。\nhas been approved = 已经审批通过（现在完成时被动语态）。", phonics: "ap 读 /ə/，proved 读 /pruːvd/，重音在 prove 上。", collocations: [["has been approved", "已经审批通过"], ["approved by manager", "经经理审批"], ["approved request", "已批准的请求"]], examples: [["The request has been approved.", "请求已经审批通过。"], ["The whitelist is approved.", "白名单已审批。"]] },
      { w: "whitelist", ipa: "/ˈwaɪtˌlɪst/", pos: "名词", cn: "白名单", memory: "white = 白色/允许的；list = 名单。\nwhitelist = 白名单，预先批准的允许进入人员名单。\n数据中心安保必须核对访客是否在白名单中。", phonics: "white 读 /waɪt/，list 读 /lɪst/。", collocations: [["on the whitelist", "在白名单中"], ["add to whitelist", "加入白名单"], ["approved whitelist", "已审批白名单"]], examples: [["Is he on the whitelist?", "他在白名单中吗？"], ["Add her to the whitelist.", "把她加入白名单。"]] },
    ],
    phrases: [
      { p: "has been approved", ipa: "/hæz biːn əˈpruːvd/", cn: "已经审批通过", why: "has + been + approved = 已经审批通过（现在完成时被动语态）。表示白名单已经完成了审批流程。" },
    ],
    grammar: [
      { q: "has been approved 和 was approved 有什么区别？", a: "has been approved = 已经审批通过（现在完成时，强调对现在的影响）\nwas approved = 审批通过（一般过去时，描述过去的事实）\n✅ The whitelist has been approved.（白名单已经审批通过 → 现在可以进入）\n✅ The whitelist was approved yesterday.（白名单昨天审批通过 → 描述过去）\n确认当前状态用现在完成时。" },
    ],
    pattern: "The + 申请 + has been approved",
    patternExamples: [
      { en: "The access request has been approved.", cn: "门禁申请已经审批通过。", words: [{ w: "access", ipa: "/ˈæksɛs/", cn: "门禁", phonics: "ac 读 /æk/，cess 读 /sɛs/" }] },
      { en: "The work permit has been approved.", cn: "工作许可已经审批通过。", words: [] },
      { en: "The change request has been approved.", cn: "变更申请已经审批通过。", words: [] },
    ],
    thinking: "白名单审批通过后，访客可以在前台登记（1744），核实身份（1746），发放访客证（1747）。\n审批流程通常需要部门经理和安保主管双重审批。",
    pronunciation: "approved 的 ap 读 /ə/，不是 /æ/。\nbeen 读 /biːn/ 或 /bɪn/。",
    quiz: [
      { q: "门禁申请已经审批通过，怎么说？", a: "The access request has been approved." },
    ],
  },
  {
    id: 1744,
    en: "Please register the visitor at reception.",
    cn: "请在前台登记访客信息。",
    ipa: "/pliːz ˈrɛdʒɪstər ðə ˈvɪzɪtər æt rɪˈsɛpʃən/",
    tags: ["第1744句", "访客登记", "★★★★★"],
    when: "白名单审批通过后，访客需要在前台进行详细登记，包括姓名、公司、来访目的等信息。",
    words: [
      { w: "register", ipa: "/ˈrɛdʒɪstər/", pos: "动词", cn: "登记；注册", memory: "register = 登记/注册。\n在安保语境中，register 指详细记录访客信息。\nreception = 前台/接待处。", phonics: "re 读 /rɛ/，gis 读 /dʒɪ/，ter 读 /tər/，重音在第一音节。", collocations: [["register at reception", "在前台登记"], ["register visitor", "登记访客"], ["visitor registration", "访客登记"]], examples: [["Please register at the front desk.", "请在前台登记。"], ["Register the visitor's information.", "登记访客信息。"]] },
      { w: "reception", ipa: "/rɪˈsɛpʃən/", pos: "名词", cn: "前台；接待处", memory: "reception = 前台/接待处。\n数据中心的前台负责访客登记和安保检查。\nat reception = 在前台。", phonics: "re 读 /rɪ/，cep 读 /sɛp/，tion 读 /ʃən/，重音在 cep 上。", collocations: [["at reception", "在前台"], ["reception desk", "前台"], ["reception area", "接待区"]], examples: [["Go to reception.", "去前台。"], ["The visitor is at reception.", "访客在前台。"]] },
    ],
    phrases: [
      { p: "register at reception", ipa: "/ˈrɛdʒɪstər æt rɪˈsɛpʃən/", cn: "在前台登记", why: "register + at + reception = 在前台登记。这是访客进入数据中心的必要步骤，用于记录来访信息。" },
    ],
    grammar: [
      { q: "register 和 check in 有什么区别？", a: "register = 登记（详细记录信息，包括身份证、公司等）\ncheck in = 签到（简单确认到达）\n✅ Register the visitor at reception.（在前台登记访客 → 详细记录）\n✅ Check in at the security desk.（在安保台签到 → 简单确认）\n首次来访用 register，重复来访可 check in。" },
    ],
    pattern: "Please register the + 人员 + at reception",
    patternExamples: [
      { en: "Please register the technician at reception.", cn: "请在前台登记技术人员信息。", words: [] },
      { en: "Please register the vendor at reception.", cn: "请在前台登记供应商信息。", words: [{ w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }] },
      { en: "Please register the auditor at reception.", cn: "请在前台登记审计员信息。", words: [] },
    ],
    thinking: "访客登记信息通常包括：姓名、公司、身份证/护照号、来访目的、接待人、预计离开时间。\n登记完成后核实身份（1746），发放访客证（1747）。",
    pronunciation: "register 的 re 读 /rɛ/，不是 /riː/。\nreception 的 re 读 /rɪ/，不是 /riː/。",
    quiz: [
      { q: "请在前台登记技术人员信息，怎么说？", a: "Please register the technician at reception." },
    ],
  },
  {
    id: 1745,
    en: "Please check the visitor's passport.",
    cn: "请检查访客护照。",
    ipa: "/pliːz tʃɛk ðə ˈvɪzɪtərz ˈpæspɔːrt/",
    tags: ["第1745句", "身份核实", "★★★★★"],
    when: "核实访客身份时，需要检查其护照或其他有效身份证件。在马来西亚，护照是外国访客的主要身份证件。",
    words: [
      { w: "passport", ipa: "/ˈpæspɔːrt/", pos: "名词", cn: "护照", memory: "pass = 通过；port = 港口。\npassport = 护照，国际旅行的身份证件。\n数据中心安保需要核对访客护照信息。", phonics: "pass 读 /pæs/，port 读 /pɔːrt/，重音在第一音节。", collocations: [["check passport", "检查护照"], ["passport number", "护照号码"], ["valid passport", "有效护照"]], examples: [["Please show your passport.", "请出示您的护照。"], ["Check the passport number.", "核对护照号码。"]] },
      { w: "check", ipa: "/tʃɛk/", pos: "动词", cn: "检查；查看", memory: "check = 检查/查看（快速确认状态）。\n在交接场景中，check 是最常用的动作动词。\n与 inspect（详细物理检查）不同，check 侧重远程查看。", phonics: "ch 读 /tʃ/，eck 读 /ɛk/。", collocations: [["check status", "检查状态"], ["check equipment", "检查设备"], ["check system", "检查系统"]], examples: [["Please check the system.", "请检查系统。"], ["Check the alarm status.", "检查告警状态。"]] },
    ],
    phrases: [
      { p: "visitor's passport", ipa: "/ˈvɪzɪtərz ˈpæspɔːrt/", cn: "访客护照", why: "visitor's + passport = 访客护照。使用所有格 's 表示护照属于访客。" },
    ],
    grammar: [
      { q: "check 和 verify 有什么区别？", a: "check = 检查（查看证件本身）\nverify = 核实（确认证件真实性和有效性）\n✅ Check the visitor's passport.（检查访客护照 → 查看证件）\n✅ Verify the visitor's identification.（核实访客身份 → 确认真实性）\n检查用 check，核实用 verify。" },
    ],
    pattern: "Please check the visitor's + 证件",
    patternExamples: [
      { en: "Please check the visitor's ID card.", cn: "请检查访客身份证。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the visitor's driving license.", cn: "请检查访客驾照。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the visitor's work permit.", cn: "请检查访客工作许可。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "证件检查要点：① 证件是否有效 ② 照片是否与本人一致 ③ 姓名是否与白名单一致 ④ 记录证件号码。\n核实身份后发放访客证（1747）。",
    pronunciation: "passport 的 pass 读 /pæs/，不是 /pɑːs/。\nvisitor's 的 's 读 /z/。",
    quiz: [
      { q: "请检查访客身份证，怎么说？", a: "Please check the visitor's ID card." },
    ],
  },
  {
    id: 1746,
    en: "Please verify the visitor's identification.",
    cn: "请核实访客身份。",
    ipa: "/pliːz ˈvɛrɪfaɪ ðə ˈvɪzɪtərz aɪˌdɛntɪfɪˈkeɪʃən/",
    tags: ["第1746句", "身份核实", "★★★★★"],
    when: "核实访客身份是安保的关键步骤，确认访客就是白名单中的人员。",
    words: [
      { w: "verify", ipa: "/ˈvɛrɪfaɪ/", pos: "动词", cn: "核实；验证", memory: "verify = 核实/验证。\nverify 比 check 更严格，需要确认真实性和有效性。\n安保流程中 verify 是关键步骤。", phonics: "ve 读 /vɛ/，ri 读 /rɪ/，fy 读 /faɪ/，重音在第一音节。", collocations: [["verify identification", "核实身份"], ["verify identity", "验证身份"], ["verify information", "核实信息"]], examples: [["Please verify his identity.", "请核实他的身份。"], ["Verify the information.", "核实信息。"]] },
      { w: "identification", ipa: "/aɪˌdɛntɪfɪˈkeɪʃən/", pos: "名词", cn: "身份；身份证件", memory: "identify = 识别；-cation = 名词后缀。\nidentification = 身份/身份证件。\n缩写为 ID。", phonics: "i 读 /aɪ/，den 读 /dɛn/，ti 读 /tɪ/，ca 读 /keɪ/，tion 读 /ʃən/，重音在 ca 上。", collocations: [["visitor identification", "访客身份"], ["ID verification", "身份核实"], ["identification document", "身份证件"]], examples: [["Please show your identification.", "请出示您的身份证件。"], ["Verify the visitor's ID.", "核实访客身份。"]] },
    ],
    phrases: [
      { p: "verify identification", ipa: "/ˈvɛrɪfaɪ aɪˌdɛntɪfɪˈkeɪʃən/", cn: "核实身份", why: "verify + identification = 核实身份。这是安保流程中确认访客真实身份的关键步骤。" },
    ],
    grammar: [
      { q: "verify 和 confirm 有什么区别？", a: "verify = 核实（通过检查证据确认）\nconfirm = 确认（简单确认事实）\n✅ Verify the visitor's identification.（核实访客身份 → 检查证件证据）\n✅ Confirm the visitor's appointment.（确认访客预约 → 简单确认）\n安保核实用 verify。" },
    ],
    pattern: "Please verify the visitor's + 信息",
    patternExamples: [
      { en: "Please verify the visitor's identity.", cn: "请核实访客身份。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
      { en: "Please verify the visitor's appointment.", cn: "请核实访客预约。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
      { en: "Please verify the visitor's credentials.", cn: "请核实访客资质。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
    ],
    thinking: "身份核实流程：① 核对证件照片与本人 ② 核对证件姓名与白名单 ③ 确认来访目的 ④ 确认接待人。\n核实通过后发放访客证（1747）。",
    pronunciation: "verify 的 ve 读 /vɛ/，不是 /viː/。\nidentification 较长，注意重音在 ca 上。",
    quiz: [
      { q: "请核实访客身份，怎么说？", a: "Please verify the visitor's identification." },
    ],
  },
  {
    id: 1747,
    en: "Please issue a visitor badge.",
    cn: "请发放访客证。",
    ipa: "/pliːz ˈɪʃuː ə ˈvɪzɪtər bædʒ/",
    tags: ["第1747句", "访客证", "★★★★★"],
    when: "身份核实通过后，前台发放访客证。访客证是访客在数据中心内的临时通行凭证。",
    words: [
      { w: "issue", ipa: "/ˈɪʃuː/", pos: "动词", cn: "发放；签发", memory: "issue = 发放/签发。\n在安保语境中，issue 指正式发放证件或许可。\nissue a badge = 发放证件。", phonics: "is 读 /ɪ/，sue 读 /ʃuː/，重音在第一音节。", collocations: [["issue a badge", "发放证件"], ["issue a permit", "签发许可"], ["issue a card", "发放卡片"]], examples: [["Issue a visitor badge.", "发放访客证。"], ["The permit has been issued.", "许可已签发。"]] },
      { w: "badge", ipa: "/bædʒ/", pos: "名词", cn: "证件；徽章", memory: "badge = 证件/徽章。\nvisitor badge = 访客证，访客在数据中心内的临时通行凭证。\nbadge 通常需要佩戴在胸前可见位置。", phonics: "badge 读 /bædʒ/，短元音。", collocations: [["visitor badge", "访客证"], ["ID badge", "身份证件"], ["wear badge", "佩戴证件"]], examples: [["Please wear your badge.", "请佩戴您的证件。"], ["Show your badge.", "出示您的证件。"]] },
    ],
    phrases: [
      { p: "issue a visitor badge", ipa: "/ˈɪʃuː ə ˈvɪzɪtər bædʒ/", cn: "发放访客证", why: "issue + a + visitor + badge = 发放访客证。这是访客准入流程的最后一步，访客证是临时通行凭证。" },
    ],
    grammar: [
      { q: "issue 和 give 有什么区别？", a: "issue = 发放（正式签发，有记录）\ngive = 给（普通给予）\n✅ Issue a visitor badge.（发放访客证 → 正式签发，有记录）\n✅ Give the visitor a pen.（给访客一支笔 → 普通给予）\n证件发放用 issue。" },
    ],
    pattern: "Please issue a + 证件类型",
    patternExamples: [
      { en: "Please issue a temporary access card.", cn: "请发放临时门禁卡。", words: [{ w: "issue", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }, { w: "access", ipa: "/ˈæksɛs/", cn: "门禁", phonics: "ac 读 /æk/，cess 读 /sɛs/" }] },
      { en: "Please issue a work permit.", cn: "请签发工作许可。", words: [{ w: "issue", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
      { en: "Please issue a visitor pass.", cn: "请发放访客通行证。", words: [{ w: "issue", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
    ],
    thinking: "访客证发放后，访客必须全程有人陪同（1748），陪同访客进入设备间（1749），工作完成后陪同离开（1750）。\n访客证通常有有效期，离开时需要归还。",
    pronunciation: "issue 的 is 读 /ɪ/，不是 /aɪ/。\nbadge 的 a 读 /æ/，不是 /eɪ/。",
    quiz: [
      { q: "请发放临时门禁卡，怎么说？", a: "Please issue a temporary access card." },
    ],
  },
  {
    id: 1748,
    en: "The visitor must be escorted at all times.",
    cn: "访客必须全程有人陪同。",
    ipa: "/ðə ˈvɪzɪtər mʌst biː ɪˈskɔːrtɪd æt ɔːl taɪmz/",
    tags: ["第1748句", "访客陪同", "★★★★★"],
    when: "数据中心安全规定：访客在数据中心内必须全程有授权人员陪同，不得单独行动。",
    words: [
      { w: "escorted", ipa: "/ɪˈskɔːrtɪd/", pos: "动词过去分词", cn: "被陪同；被护送", memory: "escort = 陪同/护送；-ed = 过去分词。\nbe escorted = 被陪同/被护送。\n访客必须全程被陪同。", phonics: "es 读 /ɪ/，cor 读 /skɔːr/，ted 读 /tɪd/，重音在 cor 上。", collocations: [["be escorted", "被陪同"], ["escorted by staff", "由员工陪同"], ["escorted access", "陪同进入"]], examples: [["The visitor must be escorted.", "访客必须有人陪同。"], ["He is escorted by security.", "他由安保人员陪同。"]] },
      { w: "at all times", ipa: "/æt ɔːl taɪmz/", pos: "副词短语", cn: "全程；始终", memory: "at + all + times = 全程/始终。\n这是一个强调性的时间副词，表示没有任何例外。\n安保规定中常用此表达。", phonics: "at 读 /æt/，all 读 /ɔːl/，times 读 /taɪmz/。", collocations: [["at all times", "全程/始终"], ["wear ID at all times", "全程佩戴证件"], ["supervised at all times", "全程监督"]], examples: [["Wear your badge at all times.", "全程佩戴证件。"], ["Stay with the group at all times.", "始终与团队在一起。"]] },
    ],
    phrases: [
      { p: "must be escorted at all times", ipa: "/mʌst biː ɪˈskɔːrtɪd æt ɔːl taɪmz/", cn: "必须全程有人陪同", why: "must + be + escorted + at all times = 必须全程有人陪同。这是数据中心的强制安保规定，访客不得单独行动。" },
    ],
    grammar: [
      { q: "must be escorted 和 should be escorted 有什么区别？", a: "must be escorted = 必须被陪同（强制要求，违反会有后果）\nshould be escorted = 应该被陪同（建议，非强制）\n✅ The visitor must be escorted at all times.（访客必须全程陪同 → 强制规定）\n✅ The visitor should be escorted if possible.（访客尽量有人陪同 → 建议）\n安保规定用 must。" },
    ],
    pattern: "The + 人员 + must be escorted + 时间",
    patternExamples: [
      { en: "The vendor must be escorted at all times.", cn: "供应商必须全程有人陪同。", words: [{ w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }, { w: "escorted", ipa: "/ɪˈskɔːrt/", cn: "陪同", phonics: "es 读 /ɪs/，cort 读 /kɔːrt/" }] },
      { en: "The technician must be escorted during the work.", cn: "技术人员工作期间必须有人陪同。", words: [{ w: "escorted", ipa: "/ɪˈskɔːrt/", cn: "陪同", phonics: "es 读 /ɪs/，cort 读 /kɔːrt/" }] },
      { en: "The auditor must be escorted in restricted areas.", cn: "审计员在限制区域必须有人陪同。", words: [{ w: "escorted", ipa: "/ɪˈskɔːrt/", cn: "陪同", phonics: "es 读 /ɪs/，cort 读 /kɔːrt/" }, { w: "areas", ipa: "/ˈeəriə/", cn: "区域", phonics: "a 读 /eə/，rea 读 /riə/" }] },
    ],
    thinking: "访客陪同要求：① 全程有人陪同（本句）→ ② 陪同进入设备间（1749）→ ③ 工作完成后陪同离开（1750）。\n陪同人员必须是授权员工，通常是接待人或安保人员。",
    pronunciation: "escorted 的 es 读 /ɪ/，不是 /ɛ/。\nat all times 的 all 读 /ɔːl/。",
    quiz: [
      { q: "供应商必须全程有人陪同，怎么说？", a: "The vendor must be escorted at all times." },
    ],
  },
  {
    id: 1749,
    en: "Please escort the visitor to the equipment room.",
    cn: "请陪同访客进入设备间。",
    ipa: "/pliːz ɪˈskɔːrt ðə ˈvɪzɪtər tuː ðə ɪˈkwɪpmənt ruːm/",
    tags: ["第1749句", "访客陪同", "★★★★★"],
    when: "访客进入数据中心设备间时，必须由授权人员陪同。escort = 陪同/护送。",
    words: [
      { w: "escort", ipa: "/ɪˈskɔːrt/", pos: "动词", cn: "陪同；护送", memory: "escort = 陪同/护送。\n在安保语境中，escort 指陪同人员进入限制区域。\nescort to = 陪同前往。", phonics: "es 读 /ɪ/，cort 读 /skɔːrt/，重音在 cort 上。", collocations: [["escort to", "陪同前往"], ["escort the visitor", "陪同访客"], ["escorted access", "陪同进入"]], examples: [["Escort the visitor to the meeting room.", "陪同访客前往会议室。"], ["Please escort him to the exit.", "请陪同他前往出口。"]] },
      { w: "equipment room", ipa: "/ɪˈkwɪpmənt ruːm/", pos: "名词短语", cn: "设备间", memory: "equipment = 设备；room = 房间。\nequipment room = 设备间，放置服务器、网络设备等。\n数据中心的核心区域，访客进入需要陪同。", phonics: "e 读 /ɪ/，quip 读 /kwɪp/，ment 读 /mənt/，room 读 /ruːm/。", collocations: [["equipment room", "设备间"], ["server room", "服务器机房"], ["mechanical room", "机械间"]], examples: [["Enter the equipment room.", "进入设备间。"], ["Check the equipment room.", "检查设备间。"]] },
    ],
    phrases: [
      { p: "escort to the equipment room", ipa: "/ɪˈskɔːrt tuː ðə ɪˈkwɪpmənt ruːm/", cn: "陪同进入设备间", why: "escort + to + the + equipment room = 陪同进入设备间。设备间是数据中心的核心区域，访客进入必须有授权人员陪同。" },
    ],
    grammar: [
      { q: "escort 和 accompany 有什么区别？", a: "escort = 陪同/护送（安保语境，强调安全责任）\naccompany = 陪同/伴随（普通语境）\n✅ Escort the visitor to the equipment room.（陪同访客进入设备间 → 安保责任）\n✅ Accompany the guest to the meeting.（陪同客人参加会议 → 普通陪同）\n安保陪同用 escort。" },
    ],
    pattern: "Please escort the + 人员 + to the + 地点",
    patternExamples: [
      { en: "Please escort the vendor to the server room.", cn: "请陪同供应商前往服务器机房。", words: [{ w: "escort", ipa: "/ɪˈskɔːrt/", cn: "陪同", phonics: "es 读 /ɪs/，cort 读 /kɔːrt/" }, { w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }, { w: "server", ipa: "/ˈsɜːrvər/", cn: "服务器", phonics: "serv 读 /sɜːrv/，er 读 /ər/" }] },
      { en: "Please escort the technician to the mechanical room.", cn: "请陪同技术人员前往机械间。", words: [{ w: "escort", ipa: "/ɪˈskɔːrt/", cn: "陪同", phonics: "es 读 /ɪs/，cort 读 /kɔːrt/" }, { w: "mechanical", ipa: "/mɪˈkænɪkəl/", cn: "机械", phonics: "me 读 /mɪ/，chanical 读 /kænɪkəl/" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "Please escort the auditor to the control room.", cn: "请陪同审计员前往控制室。", words: [{ w: "escort", ipa: "/ɪˈskɔːrt/", cn: "陪同", phonics: "es 读 /ɪs/，cort 读 /kɔːrt/" }, { w: "control", ipa: "/kənˈtroʊl/", cn: "控制", phonics: "con 读 /kən/，trol 读 /troʊl/" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
    ],
    thinking: "陪同访客进入设备间时：① 确认访客佩戴访客证 ② 记录进入时间 ③ 全程监督访客行为 ④ 工作完成后陪同离开（1750）。\n设备间是数据中心最敏感的区域，安保要求最严格。",
    pronunciation: "escort 的 es 读 /ɪ/，不是 /ɛ/。\nequipment 的 e 读 /ɪ/，quip 读 /kwɪp/。",
    quiz: [
      { q: "请陪同供应商前往服务器机房，怎么说？", a: "Please escort the vendor to the server room." },
    ],
  },
  {
    id: 1750,
    en: "Please escort the visitor out of the data hall after the work is completed.",
    cn: "工作完成后，请陪同访客离开机房。",
    ipa: "/pliːz ɪˈskɔːrt ðə ˈvɪzɪtər aʊt ʌv ðə ˈdeɪtə hɔːl ˈæftər ðə wɜːrk ɪz kəmˈpliːtɪd/",
    tags: ["第1750句", "访客离开", "★★★★★"],
    when: "访客工作完成后，必须陪同其离开机房，并收回访客证。data hall = 机房/数据中心大厅。",
    words: [
      { w: "data hall", ipa: "/ˈdeɪtə hɔːl/", pos: "名词短语", cn: "机房；数据中心大厅", memory: "data = 数据；hall = 大厅/走廊。\ndata hall = 机房/数据中心大厅，放置服务器机柜的主要区域。\n是数据中心的核心区域。", phonics: "data 读 /deɪtə/，hall 读 /hɔːl/。", collocations: [["data hall", "机房"], ["server hall", "服务器大厅"], ["enter data hall", "进入机房"]], examples: [["Enter the data hall.", "进入机房。"], ["Check the data hall.", "检查机房。"]] },
      { w: "completed", ipa: "/kəmˈpliːtɪd/", pos: "动词过去分词", cn: "已完成", memory: "complete = 完成；-ed = 过去分词。\nis completed = 已完成（被动语态）。\nafter the work is completed = 工作完成后。", phonics: "com 读 /kəm/，ple 读 /pliː/，ted 读 /tɪd/，重音在 ple 上。", collocations: [["work completed", "工作完成"], ["task completed", "任务完成"], ["is completed", "已完成"]], examples: [["The work is completed.", "工作已完成。"], ["After the task is completed...", "任务完成后..."]] },
    ],
    phrases: [
      { p: "escort out of the data hall", ipa: "/ɪˈskɔːrt aʊt ʌv ðə ˈdeɪtə hɔːl/", cn: "陪同离开机房", why: "escort + out of + the + data hall = 陪同离开机房。访客工作完成后必须陪同离开，确保访客不会滞留在敏感区域。" },
      { p: "after the work is completed", ipa: "/ˈæftər ðə wɜːrk ɪz kəmˈpliːtɪd/", cn: "工作完成后", why: "after + the + work + is + completed = 工作完成后。这是时间状语从句，说明陪同离开的时间点。" },
    ],
    grammar: [
      { q: "after 引导的时间状语从句怎么用？", a: "after + 从句 = 在...之后\n✅ After the work is completed, escort the visitor out.（工作完成后，陪同访客离开。）\n✅ Escort the visitor out after the work is completed.（工作完成后陪同访客离开。）\n两种语序都可以，after 从句可以在前也可以在后。" },
    ],
    pattern: "Please escort the + 人员 + out of the + 地点 + after + 条件",
    patternExamples: [
      { en: "Please escort the vendor out after the maintenance.", cn: "维护完成后请陪同供应商离开。", words: [{ w: "escort", ipa: "/ɪˈskɔːrt/", cn: "陪同", phonics: "es 读 /ɪs/，cort 读 /kɔːrt/" }, { w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "Please escort the technician out after the inspection.", cn: "检查完成后请陪同技术人员离开。", words: [{ w: "escort", ipa: "/ɪˈskɔːrt/", cn: "陪同", phonics: "es 读 /ɪs/，cort 读 /kɔːrt/" }] },
      { en: "Please escort the auditor out after the audit.", cn: "审计完成后请陪同审计员离开。", words: [{ w: "escort", ipa: "/ɪˈskɔːrt/", cn: "陪同", phonics: "es 读 /ɪs/，cort 读 /kɔːrt/" }] },
    ],
    thinking: "访客离开流程：① 确认工作完成 → ② 陪同离开机房（本句）→ ③ 收回访客证 → ④ 记录离开时间 → ⑤ 更新访客登记系统。\n访客离开后，安保需要检查访客工作区域是否正常。",
    pronunciation: "data hall 的 data 读 /deɪtə/，不是 /dætə/。\ncompleted 的 com 读 /kəm/，ple 读 /pliː/。",
    quiz: [
      { q: "维护完成后请陪同供应商离开，怎么说？", a: "Please escort the vendor out after the maintenance." },
    ],
  },
  // ── 场景001：安防系统 - 安防告警 (1751-1760) ──
  {
    id: 1751,
    en: "A door forced open alarm has been detected.",
    cn: "检测到门被强行打开告警。",
    ipa: "/ə dɔːr fɔːrst ˈoʊpən əˈlɑːrm hæz biːn dɪˈtɛktɪd/",
    tags: ["第1751句", "安防告警", "★★★★★"],
    when: "门禁系统检测到门被强行打开（未经正常刷卡），触发告警。这是严重的安全事件。",
    words: [
      { w: "forced open", ipa: "/fɔːrst ˈoʊpən/", pos: "动词短语", cn: "强行打开", memory: "force = 强迫/用力；open = 打开。\nforced open = 强行打开/暴力破门。\n这是严重的安全违规行为。", phonics: "force 读 /fɔːrs/，open 读 /ˈoʊpən/。", collocations: [["door forced open", "门被强行打开"], ["forced entry", "强行进入"], ["forced open alarm", "强行打开告警"]], examples: [["The door was forced open.", "门被强行打开。"], ["Check for forced entry.", "检查是否有强行进入。"]] },
      { w: "detected", ipa: "/dɪˈtɛktɪd/", pos: "动词过去分词", cn: "已检测；已探测", memory: "detect = 检测/探测；-ed = 过去分词。\ndetected = 已检测/已探测。\nhas been detected = 已经被检测到（现在完成时被动语态）。", phonics: "de 读 /dɪ/，tect 读 /tɛkt/，ed 读 /ɪd/，重音在 tect 上。", collocations: [["has been detected", "已经被检测到"], ["detected alarm", "检测到的告警"], ["detected issue", "检测到的问题"]], examples: [["The alarm has been detected.", "告警已经被检测到。"], ["An issue was detected.", "检测到问题。"]] },
    ],
    phrases: [
      { p: "door forced open alarm", ipa: "/dɔːr fɔːrst ˈoʊpən əˈlɑːrm/", cn: "门被强行打开告警", why: "door + forced + open + alarm = 门被强行打开告警。这是安防系统的严重告警，表示有人未经正常授权强行进入。" },
    ],
    grammar: [
      { q: "forced open 和 left open 有什么区别？", a: "forced open = 强行打开（暴力破门，故意行为）\nleft open = 未关闭（疏忽，非故意）\n✅ Door forced open alarm（门被强行打开告警 → 严重安全事件）\n✅ Door left open alarm（门未关闭告警 → 管理疏忽）\n强行打开更严重，需要立即调查。" },
    ],
    pattern: "A + 设备 + 告警类型 + alarm has been detected",
    patternExamples: [
      { en: "A door left open alarm has been detected.", cn: "检测到门未关闭告警。", words: [{ w: "door", ipa: "/dɔːr/", cn: "门", phonics: "door 读 /dɔːr/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A card reader alarm has been detected.", cn: "检测到读卡器告警。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A camera offline alarm has been detected.", cn: "检测到摄像头离线告警。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "门被强行打开是严重安全事件，需要：① 立即调查（1755）→ ② 查看监控录像 → ③ 确认是否入侵 → ④ 通知安保主管（1758）→ ⑤ 更新事件记录（1757）。\n如果是入侵，需要启动应急预案。",
    pronunciation: "forced 的 for 读 /fɔːr/，ced 读 /st/。\nalarm 的 a 读 /ə/，larm 读 /lɑːrm/。",
    quiz: [
      { q: "检测到门未关闭告警，怎么说？", a: "A door left open alarm has been detected." },
    ],
  },
  {
    id: 1752,
    en: "A door left open alarm has been detected.",
    cn: "检测到门未关闭告警。",
    ipa: "/ə dɔːr lɛft ˈoʊpən əˈlɑːrm hæz biːn dɪˈtɛktɪd/",
    tags: ["第1752句", "安防告警", "★★★★"],
    when: "门禁系统检测到门长时间未关闭，触发告警。这通常是管理疏忽，但也可能是安全隐患。",
    words: [
      { w: "left open", ipa: "/lɛft ˈoʊpən/", pos: "动词短语", cn: "未关闭；保持打开", memory: "leave = 留下/保持；left = leave 的过去分词；open = 打开。\nleft open = 未关闭/保持打开状态。\n数据中心门必须保持关闭。", phonics: "left 读 /lɛft/，open 读 /ˈoʊpən/。", collocations: [["door left open", "门未关闭"], ["left open alarm", "未关闭告警"], ["left unlocked", "未上锁"]], examples: [["The door was left open.", "门未关闭。"], ["Check for doors left open.", "检查是否有门未关闭。"]] },
      { w: "detected", ipa: "/dɪˈtɛktɪd/", pos: "动词过去分词", cn: "已检测；已探测", memory: "detect = 检测/探测；-ed = 过去分词。\ndetected = 已检测/已探测。\nhas been detected = 已经被检测到（现在完成时被动语态）。", phonics: "de 读 /dɪ/，tect 读 /tɛkt/，ed 读 /ɪd/，重音在 tect 上。", collocations: [["has been detected", "已经被检测到"], ["detected alarm", "检测到的告警"], ["detected issue", "检测到的问题"]], examples: [["The alarm has been detected.", "告警已经被检测到。"], ["An issue was detected.", "检测到问题。"]] },
    ],
    phrases: [
      { p: "door left open alarm", ipa: "/dɔːr lɛft ˈoʊpən əˈlɑːrm/", cn: "门未关闭告警", why: "door + left + open + alarm = 门未关闭告警。这是常见的安防告警，提醒人员及时关闭门。" },
    ],
    grammar: [
      { q: "left open 和 kept open 有什么区别？", a: "left open = 未关闭（疏忽，忘记关门）\nkept open = 保持打开（故意，有原因）\n✅ Door left open alarm（门未关闭告警 → 疏忽）\n✅ The door was kept open for ventilation.（门保持打开以通风 → 故意）\n告警通常是 left open（疏忽）。" },
    ],
    pattern: "A door left open alarm has been detected",
    patternExamples: [
      { en: "A door left open alarm was detected at 10:30.", cn: "10:30检测到门未关闭告警。", words: [{ w: "door", ipa: "/dɔːr/", cn: "门", phonics: "door 读 /dɔːr/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Multiple door left open alarms detected.", cn: "检测到多个门未关闭告警。", words: [{ w: "door", ipa: "/dɔːr/", cn: "门", phonics: "door 读 /dɔːr/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "No door left open alarms detected.", cn: "未检测到门未关闭告警。", words: [{ w: "door", ipa: "/dɔːr/", cn: "门", phonics: "door 读 /dɔːr/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "门未关闭告警处理：① 立即调查（1755）→ ② 确认是否有人员在内 → ③ 关闭门 → ④ 记录事件（1757）。\n如果频繁发生，需要加强人员培训或检查门关闭装置。",
    pronunciation: "left 的 le 读 /lɛ/，ft 读 /ft/。\nalarm 的 al 读 /ə/。",
    quiz: [
      { q: "门未关闭告警通常是什么原因？", a: "门未关闭告警通常是因为人员疏忽忘记关门，或者门关闭装置故障导致门无法正常关闭。需要立即检查并关闭门。" },
    ],
  },
  {
    id: 1753,
    en: "A card reader communication alarm has been detected.",
    cn: "检测到读卡器通信告警。",
    ipa: "/ə kɑːrd ˈriːdər kəˌmjuːnɪˈkeɪʃən əˈlɑːrm hæz biːn dɪˈtɛktɪd/",
    tags: ["第1753句", "安防告警", "★★★★"],
    when: "门禁系统检测到读卡器与控制器之间的通信中断，触发告警。这可能是硬件故障或网络问题。",
    words: [
      { w: "card reader", ipa: "/kɑːrd ˈriːdər/", pos: "名词短语", cn: "读卡器", memory: "card = 卡片；reader = 读取器。\ncard reader = 读卡器，用于读取门禁卡信息。\n是门禁系统的关键设备。", phonics: "card 读 /kɑːrd/，reader 读 /ˈriːdər/。", collocations: [["card reader", "读卡器"], ["access card reader", "门禁读卡器"], ["card reader alarm", "读卡器告警"]], examples: [["Check the card reader.", "检查读卡器。"], ["The card reader is offline.", "读卡器离线。"]] },
      { w: "communication", ipa: "/kəˌmjuːnɪˈkeɪʃən/", pos: "名词", cn: "通信；通讯", memory: "communicate = 通信/沟通；-ion = 名词后缀。\ncommunication = 通信/通讯。\ncommunication alarm = 通信告警。", phonics: "com 读 /kə/，mu 读 /mjuː/，ni 读 /nɪ/，ca 读 /keɪ/，tion 读 /ʃən/，重音在 ca 上。", collocations: [["communication alarm", "通信告警"], ["communication failure", "通信故障"], ["communication link", "通信链路"]], examples: [["Check the communication link.", "检查通信链路。"], ["Communication failure detected.", "检测到通信故障。"]] },
    ],
    phrases: [
      { p: "card reader communication alarm", ipa: "/kɑːrd ˈriːdər kəˌmjuːnɪˈkeɪʃən əˈlɑːrm/", cn: "读卡器通信告警", why: "card reader + communication + alarm = 读卡器通信告警。表示读卡器与控制器之间的通信中断。" },
    ],
    grammar: [
      { q: "communication alarm 和 offline alarm 有什么区别？", a: "communication alarm = 通信告警（通信中断，可能恢复）\noffline alarm = 离线告警（设备完全离线）\n✅ Card reader communication alarm（读卡器通信告警 → 通信问题）\n✅ Camera offline alarm（摄像头离线告警 → 设备离线）\n通信告警可能是临时问题，离线告警更严重。" },
    ],
    pattern: "A + 设备 + communication alarm has been detected",
    patternExamples: [
      { en: "A sensor communication alarm has been detected.", cn: "检测到传感器通信告警。", words: [{ w: "sensor", ipa: "/ˈsɛnsər/", cn: "传感器", phonics: "sens 读 /sɛns/，or 读 /ər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A controller communication alarm has been detected.", cn: "检测到控制器通信告警。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A panel communication alarm has been detected.", cn: "检测到面板通信告警。", words: [{ w: "panel", ipa: "/ˈpænl/", cn: "面板", phonics: "pan 读 /pæn/，el 读 /l/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "读卡器通信告警处理：① 检查网络连接 → ② 检查设备供电 → ③ 重启设备 → ④ 联系供应商维修。\n通信中断期间，该读卡器无法正常验证门禁卡，需要加强人工安保。",
    pronunciation: "card reader 的 card 读 /kɑːrd/。\ncommunication 较长，注意重音在 ca 上。",
    quiz: [
      { q: "检测到传感器通信告警，怎么说？", a: "A sensor communication alarm has been detected." },
    ],
  },
  {
    id: 1754,
    en: "One CCTV camera is offline.",
    cn: "一台监控摄像头离线。",
    ipa: "/wʌn ˌsiːˌsiːˌtiːˈviː ˈkæmərə ɪz ˌɒfˈlaɪn/",
    tags: ["第1754句", "安防告警", "★★★★"],
    when: "视频监控系统检测到一台摄像头离线，无法正常工作。需要检查并恢复。",
    words: [
      { w: "CCTV", ipa: "/ˌsiːˌsiːˌtiːˈviː/", pos: "名词", cn: "闭路电视监控", memory: "CCTV = Closed Circuit Television = 闭路电视监控。\nCCTV camera = 监控摄像头。\n是数据中心安防的重要组成部分。", phonics: "C-C-T-V 逐字母读 /siː siː tiː viː/。", collocations: [["CCTV camera", "监控摄像头"], ["CCTV system", "监控系统"], ["CCTV footage", "监控录像"]], examples: [["Check the CCTV system.", "检查监控系统。"], ["Review the CCTV footage.", "查看监控录像。"]] },
      { w: "offline", ipa: "/ˌɒfˈlaɪn/", pos: "形容词", cn: "离线的；不在线的", memory: "off = 关闭；line = 线路。\noffline = 离线的/不在线的。\n设备离线表示无法正常工作。", phonics: "off 读 /ɒf/，line 读 /laɪn/。", collocations: [["camera offline", "摄像头离线"], ["device offline", "设备离线"], ["go offline", "离线"]], examples: [["The camera is offline.", "摄像头离线。"], ["The system went offline.", "系统离线。"]] },
    ],
    phrases: [
      { p: "CCTV camera is offline", ipa: "/ˌsiːˌsiːˌtiːˈviː ˈkæmərə ɪz ˌɒfˈlaɪn/", cn: "监控摄像头离线", why: "CCTV camera + is + offline = 监控摄像头离线。表示摄像头无法正常工作，需要检查维修。" },
    ],
    grammar: [
      { q: "offline 和 out of service 有什么区别？", a: "offline = 离线（与系统断开连接）\nout of service = 停用（完全不能使用）\n✅ The camera is offline.（摄像头离线 → 与系统断开）\n✅ The camera is out of service.（摄像头停用 → 完全不能使用）\noffline 可能只是连接问题，out of service 更严重。" },
    ],
    pattern: "数量 + CCTV camera + is offline",
    patternExamples: [
      { en: "Two CCTV cameras are offline.", cn: "两台监控摄像头离线。", words: [{ w: "cctv", ipa: "/ˌsiːˌsiːˈtiːˈviː/", cn: "监控", phonics: "C-C-T-V 逐字母读" }] },
      { en: "Three CCTV cameras are offline.", cn: "三台监控摄像头离线。", words: [{ w: "cctv", ipa: "/ˌsiːˌsiːˈtiːˈviː/", cn: "监控", phonics: "C-C-T-V 逐字母读" }] },
      { en: "All CCTV cameras are online.", cn: "所有监控摄像头均在线。", words: [{ w: "cctv", ipa: "/ˌsiːˌsiːˈtiːˈviː/", cn: "监控", phonics: "C-C-T-V 逐字母读" }] },
    ],
    thinking: "摄像头离线处理：① 检查供电 → ② 检查网络连接 → ③ 重启设备 → ④ 联系供应商维修（如无法恢复）。\n摄像头离线期间，该区域监控盲区，需要加强人工巡逻。",
    pronunciation: "CCTV 逐字母读 /siː siː tiː viː/。\noffline 的 off 读 /ɒf/。",
    quiz: [
      { q: "两台监控摄像头离线，怎么说？", a: "Two CCTV cameras are offline." },
    ],
  },
  {
    id: 1755,
    en: "Please investigate the alarm immediately.",
    cn: "请立即调查告警原因。",
    ipa: "/pliːz ɪnˈvɛstɪɡeɪt ðə əˈlɑːrm ɪˈmiːdiətli/",
    tags: ["第1755句", "告警处理", "★★★★★"],
    when: "检测到安防告警后，必须立即调查原因，确认是否为真实安全事件。",
    words: [
      { w: "investigate", ipa: "/ɪnˈvɛstɪɡeɪt/", pos: "动词", cn: "调查；查明", memory: "investigate = 调查/查明。\n在安保语境中，investigate 指调查告警或事件的原因。\nimmediately = 立即/马上。", phonics: "in 读 /ɪn/，ves 读 /vɛs/，ti 读 /tɪ/，gate 读 /ɡeɪt/，重音在 ves 上。", collocations: [["investigate alarm", "调查告警"], ["investigate incident", "调查事件"], ["investigate immediately", "立即调查"]], examples: [["Investigate the alarm.", "调查告警。"], ["Please investigate immediately.", "请立即调查。"]] },
      { w: "immediately", ipa: "/ɪˈmiːdiətli/", pos: "副词", cn: "立即；马上", memory: "immediate = 立即的；-ly = 副词后缀。\nimmediately = 立即/马上。\n安保告警需要立即响应。", phonics: "im 读 /ɪ/，me 读 /miː/，di 读 /dɪ/，ate 读 /ət/，ly 读 /li/，重音在 me 上。", collocations: [["immediately", "立即"], ["respond immediately", "立即响应"], ["investigate immediately", "立即调查"]], examples: [["Respond immediately.", "立即响应。"], ["Check immediately.", "立即检查。"]] },
    ],
    phrases: [
      { p: "investigate the alarm immediately", ipa: "/ɪnˈvɛstɪɡeɪt ðə əˈlɑːrm ɪˈmiːdiətli/", cn: "立即调查告警原因", why: "investigate + the + alarm + immediately = 立即调查告警原因。这是告警处理的第一步，确认是否为真实安全事件。" },
    ],
    grammar: [
      { q: "investigate 和 check 有什么区别？", a: "investigate = 调查（深入查明原因）\ncheck = 检查（简单查看状态）\n✅ Investigate the alarm immediately.（立即调查告警 → 深入查明原因）\n✅ Check the alarm status.（检查告警状态 → 简单查看）\n严重告警用 investigate，一般检查用 check。" },
    ],
    pattern: "Please investigate the + 事件 + immediately",
    patternExamples: [
      { en: "Please investigate the incident immediately.", cn: "请立即调查事件。", words: [{ w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Please investigate the breach immediately.", cn: "请立即调查违规行为。", words: [{ w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Please investigate the issue immediately.", cn: "请立即调查问题。", words: [{ w: "issue", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
    ],
    thinking: "告警调查步骤：① 确认告警类型和位置 → ② 查看监控录像 → ③ 现场检查 → ④ 确认是否真实事件 → ⑤ 采取相应措施。\n调查完成后，恢复告警（1756）并记录事件（1757）。",
    pronunciation: "investigate 的 in 读 /ɪn/，ves 读 /vɛs/。\nimmediately 较长，注意重音在 me 上。",
    quiz: [
      { q: "请立即调查事件，怎么说？", a: "Please investigate the incident immediately." },
    ],
  },
  {
    id: 1756,
    en: "The security alarm has been cleared.",
    cn: "安防告警已经恢复。",
    ipa: "/ðə sɪˈkjʊrɪti əˈlɑːrm hæz biːn klɪərd/",
    tags: ["第1756句", "告警恢复", "★★★★★"],
    when: "告警调查完成后，确认问题解决，告警状态恢复为正常。",
    words: [
      { w: "security", ipa: "/sɪˈkjʊrɪti/", pos: "名词", cn: "安保；安全", memory: "secure = 安全的；-ity = 名词后缀。\nsecurity = 安保/安全。\nsecurity alarm = 安防告警。", phonics: "se 读 /sɪ/，cu 读 /kjʊ/，ri 读 /rɪ/，ty 读 /ti/，重音在 cu 上。", collocations: [["security alarm", "安防告警"], ["security system", "安防系统"], ["security officer", "安保人员"]], examples: [["Check the security system.", "检查安防系统。"], ["Notify security.", "通知安保。"]] },
      { w: "cleared", ipa: "/klɪərd/", pos: "动词过去分词", cn: "已恢复；已清除", memory: "clear = 清除/恢复；-ed = 过去分词。\ncleared = 已恢复/已清除。\nhas been cleared = 已经恢复。", phonics: "clear 读 /klɪər/，ed 读 /d/。", collocations: [["alarm cleared", "告警恢复"], ["has been cleared", "已经恢复"], ["cleared successfully", "成功恢复"]], examples: [["The alarm has been cleared.", "告警已经恢复。"], ["All alarms cleared.", "所有告警已恢复。"]] },
    ],
    phrases: [
      { p: "security alarm has been cleared", ipa: "/sɪˈkjʊrɪti əˈlɑːrm hæz biːn klɪərd/", cn: "安防告警已经恢复", why: "security alarm + has been + cleared = 安防告警已经恢复。表示告警已经解决，系统恢复正常。" },
    ],
    grammar: [
      { q: "has been cleared 和 is cleared 有什么区别？", a: "has been cleared = 已经恢复（现在完成时，强调动作完成）\nis cleared = 已恢复（一般现在时，描述当前状态）\n✅ The alarm has been cleared.（告警已经恢复 → 强调恢复动作完成）\n✅ The alarm is cleared.（告警已恢复 → 描述当前状态）\n两种表达都可以，has been cleared 更强调过程。" },
    ],
    pattern: "The + 系统 + alarm has been cleared",
    patternExamples: [
      { en: "The fire alarm has been cleared.", cn: "消防告警已经恢复。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
      { en: "The access alarm has been cleared.", cn: "门禁告警已经恢复。", words: [{ w: "access", ipa: "/ˈæksɛs/", cn: "门禁", phonics: "ac 读 /æk/，cess 读 /sɛs/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
      { en: "The intrusion alarm has been cleared.", cn: "入侵告警已经恢复。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
    ],
    thinking: "告警恢复后：① 确认系统正常运行 → ② 更新事件记录（1757）→ ③ 通知相关人员（1758）→ ④ 完成巡检（1759）。\n所有告警恢复后，确认系统安全正常运行（1760）。",
    pronunciation: "security 的 se 读 /sɪ/，cu 读 /kjʊ/。\ncleared 的 clear 读 /klɪər/。",
    quiz: [
      { q: "消防告警已经恢复，怎么说？", a: "The fire alarm has been cleared." },
    ],
  },
  {
    id: 1757,
    en: "Please update the security incident record.",
    cn: "请更新安防事件记录。",
    ipa: "/pliːz ˌʌpˈdeɪt ðə sɪˈkjʊrɪti ˈɪnsɪdənt ˈrɛkərd/",
    tags: ["第1757句", "事件记录", "★★★★★"],
    when: "告警处理完成后，必须更新安防事件记录，包括告警时间、原因、处理措施等信息。",
    words: [
      { w: "update", ipa: "/ˌʌpˈdeɪt/", pos: "动词", cn: "更新", memory: "up = 向上；date = 日期/更新。\nupdate = 更新。\nupdate record = 更新记录。", phonics: "up 读 /ʌp/，date 读 /deɪt/，重音在 date 上。", collocations: [["update record", "更新记录"], ["update log", "更新日志"], ["update information", "更新信息"]], examples: [["Update the record.", "更新记录。"], ["Please update the log.", "请更新日志。"]] },
      { w: "incident", ipa: "/ˈɪnsɪdənt/", pos: "名词", cn: "事件；事故", memory: "incident = 事件/事故。\nsecurity incident = 安防事件。\nincident record = 事件记录。", phonics: "in 读 /ɪn/，ci 读 /sɪ/，dent 读 /dənt/，重音在第一音节。", collocations: [["security incident", "安防事件"], ["incident record", "事件记录"], ["incident report", "事件报告"]], examples: [["Report the incident.", "报告事件。"], ["Update the incident record.", "更新事件记录。"]] },
    ],
    phrases: [
      { p: "security incident record", ipa: "/sɪˈkjʊrɪti ˈɪnsɪdənt ˈrɛkərd/", cn: "安防事件记录", why: "security + incident + record = 安防事件记录。记录所有安防事件的详细信息，用于后续分析和审计。" },
    ],
    grammar: [
      { q: "update 和 record 有什么区别？", a: "update = 更新（修改已有记录）\nrecord = 记录（创建新记录）\n✅ Update the incident record.（更新事件记录 → 修改已有记录）\n✅ Record the incident.（记录事件 → 创建新记录）\n已有记录用 update，新事件用 record。" },
    ],
    pattern: "Please update the + 系统 + incident record",
    patternExamples: [
      { en: "Please update the fire incident record.", cn: "请更新消防事件记录。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }] },
      { en: "Please update the access incident record.", cn: "请更新门禁事件记录。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "access", ipa: "/ˈæksɛs/", cn: "门禁", phonics: "ac 读 /æk/，cess 读 /sɛs/" }] },
      { en: "Please update the maintenance record.", cn: "请更新维护记录。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
    ],
    thinking: "事件记录内容：① 告警时间 ② 告警类型 ③ 告警位置 ④ 告警原因 ⑤ 处理措施 ⑥ 处理结果 ⑦ 处理人员。\n完整的记录对于后续分析和审计非常重要。",
    pronunciation: "update 的 up 读 /ʌp/，date 读 /deɪt/。\nincident 的 in 读 /ɪn/，ci 读 /sɪ/。",
    quiz: [
      { q: "请更新消防事件记录，怎么说？", a: "Please update the fire incident record." },
    ],
  },
  {
    id: 1758,
    en: "Please notify the security supervisor.",
    cn: "请通知安保主管。",
    ipa: "/pliːz ˈnoʊtɪfaɪ ðə sɪˈkjʊrɪti ˈsuːpərˌvaɪzər/",
    tags: ["第1758句", "通知主管", "★★★★★"],
    when: "发生安防事件或告警时，需要通知安保主管进行决策和处理。",
    words: [
      { w: "notify", ipa: "/ˈnoʊtɪfaɪ/", pos: "动词", cn: "通知；告知", memory: "notify = 通知/告知。\nnotify someone = 通知某人。\n正式场合用 notify，口语用 tell。", phonics: "no 读 /noʊ/，ti 读 /tɪ/，fy 读 /faɪ/，重音在第一音节。", collocations: [["notify supervisor", "通知主管"], ["notify immediately", "立即通知"], ["notify by phone", "电话通知"]], examples: [["Notify the supervisor.", "通知主管。"], ["Please notify security.", "请通知安保。"]] },
      { w: "supervisor", ipa: "/ˈsuːpərˌvaɪzər/", pos: "名词", cn: "主管；监督人", memory: "super = 上面；visor = 看的人。\nsupervisor = 主管/监督人。\nsecurity supervisor = 安保主管。", phonics: "su 读 /suː/，per 读 /pər/，vi 读 /vaɪ/，sor 读 /zər/，重音在第一音节。", collocations: [["security supervisor", "安保主管"], ["shift supervisor", "值班主管"], ["notify supervisor", "通知主管"]], examples: [["Contact the supervisor.", "联系主管。"], ["Report to the supervisor.", "向主管报告。"]] },
    ],
    phrases: [
      { p: "notify the security supervisor", ipa: "/ˈnoʊtɪfaɪ ðə sɪˈkjʊrɪti ˈsuːpərˌvaɪzər/", cn: "通知安保主管", why: "notify + the + security + supervisor = 通知安保主管。发生安防事件时，需要及时通知主管进行决策。" },
    ],
    grammar: [
      { q: "notify 和 inform 有什么区别？", a: "notify = 通知（正式，强调告知动作）\ninform = 告知（提供信息）\n✅ Notify the supervisor.（通知主管 → 正式通知）\n✅ Inform the team about the issue.（告知团队问题 → 提供信息）\n正式通知用 notify。" },
    ],
    pattern: "Please notify the + 职位",
    patternExamples: [
      { en: "Please notify the shift supervisor.", cn: "请通知值班主管。", words: [{ w: "notify", ipa: "/ˈnoʊtɪfaɪ/", cn: "通知", phonics: "not 读 /noʊt/，ify 读 /ɪfaɪ/" }, { w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }] },
      { en: "Please notify the facility manager.", cn: "请通知设施经理。", words: [{ w: "notify", ipa: "/ˈnoʊtɪfaɪ/", cn: "通知", phonics: "not 读 /noʊt/，ify 读 /ɪfaɪ/" }] },
      { en: "Please notify the operations manager.", cn: "请通知运维经理。", words: [{ w: "notify", ipa: "/ˈnoʊtɪfaɪ/", cn: "通知", phonics: "not 读 /noʊt/，ify 读 /ɪfaɪ/" }, { w: "operations", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }] },
    ],
    thinking: "通知安保主管的情况：① 严重告警（强行进入、入侵）→ ② 设备故障（摄像头离线、读卡器故障）→ ③ 访客违规 → ④ 其他安全事件。\n通知方式：电话（紧急）或邮件（非紧急）。",
    pronunciation: "notify 的 no 读 /noʊ/，ti 读 /tɪ/。\nsupervisor 的 su 读 /suː/，vi 读 /vaɪ/。",
    quiz: [
      { q: "请通知值班主管，怎么说？", a: "Please notify the shift supervisor." },
    ],
  },
  {
    id: 1759,
    en: "The security inspection has been completed successfully.",
    cn: "安防巡检已经顺利完成。",
    ipa: "/ðə sɪˈkjʊrɪti ɪnˈspɛkʃən hæz biːn kəmˈpliːtɪd səkˈsɛsfəli/",
    tags: ["第1759句", "巡检完成", "★★★★★"],
    when: "安防巡检完成后，报告巡检结果。inspection = 巡检/检查。",
    words: [
      { w: "inspection", ipa: "/ɪnˈspɛkʃən/", pos: "名词", cn: "巡检；检查", memory: "inspect = 检查；-ion = 名词后缀。\ninspection = 巡检/检查。\nsecurity inspection = 安防巡检。", phonics: "in 读 /ɪn/，spec 读 /spɛk/，tion 读 /ʃən/，重音在 spec 上。", collocations: [["security inspection", "安防巡检"], ["routine inspection", "例行巡检"], ["inspection completed", "巡检完成"]], examples: [["Complete the inspection.", "完成巡检。"], ["The inspection is done.", "巡检已完成。"]] },
      { w: "successfully", ipa: "/səkˈsɛsfəli/", pos: "副词", cn: "成功地；顺利地", memory: "success = 成功；-ful = 形容词后缀；-ly = 副词后缀。\nsuccessfully = 成功地/顺利地。\nhas been completed successfully = 已经顺利完成。", phonics: "suc 读 /sək/，cess 读 /sɛs/，ful 读 /fəl/，ly 读 /li/，重音在 cess 上。", collocations: [["completed successfully", "顺利完成"], ["successfully completed", "成功完成"], ["operating successfully", "成功运行"]], examples: [["The task was completed successfully.", "任务已顺利完成。"], ["The test was successful.", "测试成功。"]] },
    ],
    phrases: [
      { p: "security inspection has been completed successfully", ipa: "/sɪˈkjʊrɪti ɪnˈspɛkʃən hæz biːn kəmˈpliːtɪd səkˈsɛsfəli/", cn: "安防巡检已经顺利完成", why: "security inspection + has been + completed + successfully = 安防巡检已经顺利完成。这是巡检完成后的标准汇报用语。" },
    ],
    grammar: [
      { q: "has been completed successfully 和 is complete 有什么区别？", a: "has been completed successfully = 已经顺利完成（强调过程和结果）\nis complete = 已完成（描述状态）\n✅ The inspection has been completed successfully.（巡检已顺利完成 → 强调过程）\n✅ The inspection is complete.（巡检已完成 → 描述状态）\n正式汇报用 has been completed successfully。" },
    ],
    pattern: "The + 系统 + inspection has been completed successfully",
    patternExamples: [
      { en: "The fire inspection has been completed successfully.", cn: "消防巡检已经顺利完成。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }] },
      { en: "The mechanical inspection has been completed successfully.", cn: "机械巡检已经顺利完成。", words: [{ w: "mechanical", ipa: "/mɪˈkænɪkəl/", cn: "机械", phonics: "me 读 /mɪ/，chanical 读 /kænɪkəl/" }] },
      { en: "The electrical inspection has been completed successfully.", cn: "电气巡检已经顺利完成。", words: [{ w: "electrical", ipa: "/ɪˈlɛktrɪkəl/", cn: "电气", phonics: "e 读 /ɪ/，lectrical 读 /lɛktrɪkəl/" }] },
    ],
    thinking: "巡检完成后：① 报告巡检结果（本句）→ ② 确认系统正常（1760）→ ③ 更新巡检记录 → ④ 交接班。\n巡检记录需要详细记录所有检查项目和结果。",
    pronunciation: "inspection 的 in 读 /ɪn/，spec 读 /spɛk/。\nsuccessfully 较长，注意重音在 cess 上。",
    quiz: [
      { q: "消防巡检已经顺利完成，怎么说？", a: "The fire inspection has been completed successfully." },
    ],
  },
  {
    id: 1760,
    en: "The security system is operating safely and normally.",
    cn: "安防系统安全、正常运行。",
    ipa: "/ðə sɪˈkjʊrɪti ˈsɪstəm ɪz ˈɒpəreɪtɪŋ ˈseɪfli ænd ˈnɔːrməli/",
    tags: ["第1760句", "系统状态", "★★★★★"],
    when: "安防巡检和告警处理完成后，确认系统整体状态安全正常。这是交接班时的最终汇报。",
    words: [
      { w: "safely", ipa: "/ˈseɪfli/", pos: "副词", cn: "安全地", memory: "safe = 安全的；-ly = 副词后缀。\nsafely = 安全地。\noperating safely = 安全运行。", phonics: "safe 读 /seɪf/，ly 读 /li/。", collocations: [["operating safely", "安全运行"], ["safely secured", "安全保护"], ["safely stored", "安全存储"]], examples: [["The system is operating safely.", "系统安全运行。"], ["Data is safely stored.", "数据安全存储。"]] },
      { w: "normally", ipa: "/ˈnɔːrməli/", pos: "副词", cn: "正常地", memory: "normal = 正常的；-ly = 副词后缀。\nnormally = 正常地。\noperating normally = 正常运行。", phonics: "nor 读 /nɔːr/，mal 读 /məl/，ly 读 /li/。", collocations: [["operating normally", "正常运行"], ["functioning normally", "正常运作"], ["running normally", "正常运转"]], examples: [["All systems are operating normally.", "所有系统正常运行。"], ["The equipment is functioning normally.", "设备正常运作。"]] },
    ],
    phrases: [
      { p: "operating safely and normally", ipa: "/ˈɒpəreɪtɪŋ ˈseɪfli ænd ˈnɔːrməli/", cn: "安全、正常运行", why: "operating + safely + and + normally = 安全、正常运行。这是系统状态的最佳描述，表示既安全又正常。" },
    ],
    grammar: [
      { q: "safely and normally 的顺序可以换吗？", a: "safely and normally = 安全、正常（强调安全优先）\nnormally and safely = 正常、安全（强调正常优先）\n✅ Operating safely and normally.（安全、正常运行 → 安全优先）\n✅ Operating normally and safely.（正常、安全运行 → 正常优先）\n两种顺序都可以，safely and normally 更常见。" },
    ],
    pattern: "The + 系统 + is operating safely and normally",
    patternExamples: [
      { en: "The fire system is operating safely and normally.", cn: "消防系统安全、正常运行。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "The power system is operating safely and normally.", cn: "电力系统安全、正常运行。", words: [{ w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "The cooling system is operating safely and normally.", cn: "冷却系统安全、正常运行。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
    ],
    thinking: "这是安防系统交接班的最终汇报：① 所有告警已恢复 → ② 所有设备正常 → ③ 系统安全正常运行。\n确认系统状态后，完成交接班流程。",
    pronunciation: "safely 的 safe 读 /seɪf/。\nnormally 的 nor 读 /nɔːr/。",
    quiz: [
      { q: "消防系统安全、正常运行，怎么说？", a: "The fire system is operating safely and normally." },
    ],
  },
];

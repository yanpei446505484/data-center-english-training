// EXPORTS: MOCK_SENTENCES_PART13B

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART13B: ISentence[] = [
  {
    id: 426,
    en: "Please confirm the reading.",
    cn: "请确认读数。",
    ipa: "/pliːz kənˈfɜːrm ðə ˈriː.dɪŋ/",
    tags: ["第426句", "MOP确认读数", "★★★★★"],
    when: "执行MOP步骤时，需要确认仪表读数是否在允许范围内。读数包括电压、电流、温度、压力等。",
    words: [
      { w: "reading", ipa: "/ˈriː.dɪŋ/", pos: "名词", cn: "读数；仪表读数", memory: "① read = 阅读；② reading = 读数（仪表显示的数值）。\n数据中心常见读数：voltage reading（电压读数）、current reading（电流读数）、temperature reading（温度读数）。", phonics: "read 读 /riːd/，ing 读 /ɪŋ/。注意 reading 作为'读数'时重音在第一音节。", collocations: [["confirm the reading", "确认读数"], ["take a reading", "读取数值"], ["normal reading", "正常读数"]], examples: [["The voltage reading is 230V.", "电压读数是230V。"], ["Please take a temperature reading.", "请读取温度数值。"]] },
    ],
    phrases: [
      { p: "confirm the reading", ipa: "/kənˈfɜːrm ðə ˈriː.dɪŋ/", cn: "确认读数", why: "confirm + the + reading = 确认仪表读数。MOP执行中每一步操作后都需要确认读数是否在允许范围内。" },
    ],
    grammar: [
      { q: "confirm 和 check 有什么区别？", a: "confirm = 确认（验证是否正确/在范围内）\ncheck = 检查（查看状态）\n✅ Please confirm the reading is 230V.（请确认读数是230V → 验证具体数值）\n✅ Please check the meter.（请检查仪表 → 看仪表是否正常）\nconfirm 更强调'验证结果'，check 更强调'查看状态'。" },
    ],
    pattern: "Please confirm the + 名词",
    patternExamples: [
      { en: "Please confirm the voltage reading.", cn: "请确认电压读数。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }, { w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }, { w: "reading", ipa: "/ˈriːdɪŋ/", cn: "读数", phonics: "read 读 /riːd/，ing 读 /ɪŋ/" }] },
      { en: "Please confirm the temperature.", cn: "请确认温度。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
      { en: "Please confirm the pressure reading.", cn: "请确认压力读数。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }, { w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }, { w: "reading", ipa: "/ˈriːdɪŋ/", cn: "读数", phonics: "read 读 /riːd/，ing 读 /ɪŋ/" }] },
    ],
    thinking: "MOP执行中的'确认'环节是安全关键步骤。\n确认读数 = 看仪表 → 记录数值 → 判断是否在允许范围内 → 签字确认。\n如果读数不在范围内，需要暂停MOP并报告。",
    pronunciation: "confirm 重音在第二音节：/kənˈfɜːrm/。\nreading 的 ea 读长音 /iː/。\n节奏：Please con-FIRM ｜ the READ-ing.",
    quiz: [
      { q: "请确认电流读数，怎么说？", a: "Please confirm the current reading." },
      { q: "如果读数不在范围内怎么办？", a: "需要暂停MOP（Stop the MOP），记录偏差（Record the deviation），然后报告主管。不能继续执行下一步。" },
    ],
  },
  {
    id: 427,
    en: "Please take a photo for the record.",
    cn: "请拍照留档。",
    ipa: "/pliːz teɪk ə ˈfoʊ.toʊ fɔːr ðə ˈrɛk.ərd/",
    tags: ["第427句", "MOP拍照记录", "★★★★★"],
    when: "MOP执行过程中关键步骤需要拍照留档，作为操作证据和质量追溯依据。",
    words: [
      { w: "photo", ipa: "/ˈfoʊ.toʊ/", pos: "名词", cn: "照片", memory: "① photo = photograph 的缩写；② 拍照 = take a photo。\n数据中心MOP中拍照用于记录操作前后的设备状态。", phonics: "pho 读 /foʊ/，to 读 /toʊ/，重音在第一音节。", collocations: [["take a photo", "拍照"], ["photo record", "照片记录"], ["photo evidence", "照片证据"]], examples: [["Take a photo of the breaker position.", "拍一张断路器位置的照片。"], ["We need photo evidence.", "我们需要照片证据。"]] },
      { w: "record", ipa: "/ˈrɛk.ərd/", pos: "名词", cn: "记录；档案", memory: "① record 作名词 = 记录/档案；② record 作动词 = 记录/录制。\nfor the record = 为了留档/存档。", phonics: "名词重音在第一音节 /ˈrɛk.ərd/，动词重音在第二音节 /rɪˈkɔːrd/。", collocations: [["for the record", "为了留档"], ["keep a record", "保存记录"], ["official record", "正式记录"]], examples: [["This is for the record.", "这是为了留档。"], ["Keep a record of all operations.", "保存所有操作记录。"]] },
    ],
    phrases: [
      { p: "for the record", ipa: "/fɔːr ðə ˈrɛk.ərd/", cn: "为了留档", why: "for + the + record = 为了存档/留档。MOP中拍照是为了留下操作证据，方便日后追溯。" },
    ],
    grammar: [
      { q: "take a photo 和 take a picture 有什么区别？", a: "take a photo = 拍照（更正式，常用于工作场景）\ntake a picture = 拍照（更口语化，日常用语）\n✅ Please take a photo for the record.（请拍照留档 → 工作场景）\n✅ Let me take a picture.（让我拍张照 → 日常场景）\nMOP文档中用 photo，因为更正式。" },
    ],
    pattern: "Please take a photo of + 对象 + for the record",
    patternExamples: [
      { en: "Please take a photo of the meter for the record.", cn: "请拍一张仪表照片留档。", words: [] },
      { en: "Take a photo of the breaker position for the record.", cn: "拍一张断路器位置照片留档。", words: [{ w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
      { en: "Please photograph the equipment for the record.", cn: "请给设备拍照留档。", words: [{ w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }] },
    ],
    thinking: "拍照记录是MOP执行中的重要环节。\n需要拍照的场景：① 操作前设备状态 ② 操作后设备状态 ③ 关键读数 ④ 异常/偏差情况。\n照片要求：清晰、有时间戳、有设备标识。",
    pronunciation: "photo 的 ph 读 /f/：/ˈfoʊ.toʊ/。\nrecord 作名词时重音在第一音节：/ˈrɛk.ərd/。\n节奏：Please TAKE a PHO-to ｜ for the REC-ord.",
    quiz: [
      { q: "请拍一张断路器位置照片留档，怎么说？", a: "Please take a photo of the breaker position for the record." },
      { q: "record 作名词和动词时发音一样吗？", a: "不一样。名词 record = /ˈrɛk.ərd/（重音在第一音节）；动词 record = /rɪˈkɔːrd/（重音在第二音节）。" },
    ],
  },
  {
    id: 428,
    en: "Please sign the confirmation.",
    cn: "请签字确认。",
    ipa: "/pliːz saɪn ðə ˌkɒn.fərˈmeɪ.ʃən/",
    tags: ["第428句", "MOP签字确认", "★★★★★"],
    when: "MOP每完成一个关键步骤，执行人和监护人都需要签字确认，确保操作可追溯。",
    words: [
      { w: "sign", ipa: "/saɪn/", pos: "动词", cn: "签字；签名", memory: "① sign = 签字/签名；② signature = 签名（名词）。\nMOP中签字表示'我确认这一步已完成且正确'。", phonics: "s 读 /s/，i 读 /aɪ/，gn 读 /n/。注意 gn 中 g 不发音。", collocations: [["sign the confirmation", "签字确认"], ["sign here", "在这里签字"], ["sign and date", "签字并注明日期"]], examples: [["Please sign here.", "请在这里签字。"], ["Both operators must sign.", "两名操作员都必须签字。"]] },
      { w: "confirmation", ipa: "/ˌkɒn.fərˈmeɪ.ʃən/", pos: "名词", cn: "确认", memory: "① confirm = 确认（动词）；② confirmation = 确认（名词）。\n签字确认 = sign the confirmation，是MOP中的强制要求。", phonics: "con 读 /kɒn/，fir 读 /fər/，ma 读 /meɪ/，tion 读 /ʃən/，重音在第三音节。", collocations: [["written confirmation", "书面确认"], ["verbal confirmation", "口头确认"], ["final confirmation", "最终确认"]], examples: [["We need written confirmation.", "我们需要书面确认。"], ["Please give verbal confirmation.", "请口头确认。"]] },
    ],
    phrases: [
      { p: "sign the confirmation", ipa: "/saɪn ðə ˌkɒn.fərˈmeɪ.ʃən/", cn: "签字确认", why: "sign + the + confirmation = 签字确认。MOP中每个关键步骤完成后都需要签字，作为操作证据。" },
    ],
    grammar: [
      { q: "sign 和 initial 有什么区别？", a: "sign = 签全名（用于关键步骤确认）\ninitial = 签姓名缩写（用于一般检查项）\n✅ Please sign the confirmation.（请签字确认 → 关键步骤，签全名）\n✅ Please initial each checkbox.（请在每个复选框旁签缩写 → 一般检查项）\nMOP关键步骤用 sign，日常检查用 initial。" },
    ],
    pattern: "Please sign + 文件/确认",
    patternExamples: [
      { en: "Please sign the MOP.", cn: "请在MOP上签字。", words: [{ w: "sign", ipa: "/saɪn/", cn: "签字", phonics: "sign 读 /saɪn/" }] },
      { en: "Please sign and date the form.", cn: "请在表格上签字并注明日期。", words: [{ w: "sign", ipa: "/saɪn/", cn: "签字", phonics: "sign 读 /saɪn/" }] },
      { en: "Both operators need to sign.", cn: "两名操作员都需要签字。", words: [{ w: "sign", ipa: "/saɪn/", cn: "签字", phonics: "sign 读 /saɪn/" }] },
    ],
    thinking: "签字确认是MOP执行的法律要求。\n签字意味着：① 我亲自执行/见证了这一步 ② 我确认操作正确 ③ 我对此操作负责。\n签字必须用黑色签字笔，不能用铅笔。",
    pronunciation: "sign 的 gn 中 g 不发音：/saɪn/。\nconfirmation 重音在第三音节：/ˌkɒn.fərˈmeɪ.ʃən/。\n节奏：Please SIGN ｜ the con-fir-MA-tion.",
    quiz: [
      { q: "请在MOP上签字，怎么说？", a: "Please sign the MOP." },
      { q: "sign 和 initial 在MOP中分别用于什么场景？", a: "sign = 签全名，用于关键步骤确认（如倒闸、送电）；initial = 签姓名缩写，用于一般检查项（如巡检打勾）。" },
    ],
  },
  {
    id: 429,
    en: "The approval has been granted.",
    cn: "审批已经通过。",
    ipa: "/ðə əˈpruː.vəl hæz biːn ɡrɑːn.tɪd/",
    tags: ["第429句", "MOP审批", "★★★★★"],
    when: "某些MOP步骤需要上级或客户审批才能执行。审批通过后才能继续操作。",
    words: [
      { w: "approval", ipa: "/əˈpruː.vəl/", pos: "名词", cn: "审批；批准", memory: "① approve = 批准（动词）；② approval = 审批/批准（名词）。\nMOP中的审批通常来自：客户、管理层、变更管理委员会。", phonics: "ap 读 /ə/，prov 读 /pruː/，al 读 /əl/，重音在第二音节。", collocations: [["grant approval", "批准"], ["pending approval", "等待审批"], ["approval process", "审批流程"]], examples: [["We are waiting for approval.", "我们在等待审批。"], ["The approval was granted.", "审批已通过。"]] },
      { w: "granted", ipa: "/ˈɡrɑːn.tɪd/", pos: "动词(过去分词)", cn: "被授予；被批准", memory: "① grant = 授予/批准；② granted = 被批准/被授予。\nhas been granted = 已经被批准（现在完成时被动语态）。", phonics: "grant 读 /ɡrɑːnt/，ed 读 /ɪd/。注意 a 读 /ɑː/。", collocations: [["permission granted", "许可已授予"], ["request granted", "请求已批准"], ["access granted", "访问已授权"]], examples: [["Access has been granted.", "访问权限已授予。"], ["The request was granted.", "请求已被批准。"]] },
    ],
    phrases: [
      { p: "has been granted", ipa: "/hæz biːn ˈɡrɑːn.tɪd/", cn: "已经被批准", why: "has been + granted = 已经被批准（现在完成时被动语态）。强调审批结果已经生效。" },
    ],
    grammar: [
      { q: "granted 和 approved 有什么区别？", a: "granted = 被授予/被批准（强调权限/许可的给予）\napproved = 被审核通过（强调审核流程的通过）\n✅ The approval has been granted.（审批已经被授予 → 上级给了许可）\n✅ The MOP has been approved.（MOP已经被审核通过 → 审核流程完成）\n两者在MOP语境中可互换，granted 更正式。" },
    ],
    pattern: "The + 名词 + has been granted",
    patternExamples: [
      { en: "The permission has been granted.", cn: "许可已经授予。", words: [] },
      { en: "The access has been granted.", cn: "访问权限已经授予。", words: [{ w: "access", ipa: "/ˈæksɛs/", cn: "门禁", phonics: "ac 读 /æk/，cess 读 /sɛs/" }] },
      { en: "The request has been granted.", cn: "请求已经被批准。", words: [] },
    ],
    thinking: "MOP审批流程：\n① 提交MOP → ② 技术审核 → ③ 管理层审批 → ④ 客户审批（如涉及客户设备）→ ⑤ 审批通过 → ⑥ 开始执行。\n未经审批的MOP严禁执行。",
    pronunciation: "approval 重音在第二音节：/əˈpruː.vəl/。\ngranted 的 a 读 /ɑː/：/ˈɡrɑːn.tɪd/。\n节奏：The ap-PROV-al ｜ has been GRANT-ed.",
    quiz: [
      { q: "审批已经通过，怎么说？", a: "The approval has been granted." },
      { q: "granted 和 approved 在MOP中有什么区别？", a: "granted = 被授予/被批准（强调权限给予）；approved = 被审核通过（强调审核流程完成）。两者在MOP语境中可互换，granted 更正式。" },
    ],
  },
  {
    id: 430,
    en: "Please check the prerequisites.",
    cn: "请检查前置条件。",
    ipa: "/pliːz tʃɛk ðə ˌpriːˈrɛk.wɪ.zɪts/",
    tags: ["第430句", "MOP前置条件", "★★★★★"],
    when: "开始执行MOP前，必须检查所有前置条件是否满足，如工具准备、人员到位、安全措施等。",
    words: [
      { w: "prerequisites", ipa: "/ˌpriːˈrɛk.wɪ.zɪts/", pos: "名词", cn: "前置条件；先决条件", memory: "① pre- = 预先/之前；② requisite = 必要条件；③ prerequisite = 先决条件/前置条件。\nMOP开始前必须检查的前置条件：工具、人员、安全措施、审批等。", phonics: "pre 读 /priː/，req 读 /rɛk/，wi 读 /wɪ/，sits 读 /zɪts/，重音在第二音节。", collocations: [["check prerequisites", "检查前置条件"], ["meet prerequisites", "满足前置条件"], ["prerequisite checklist", "前置条件检查表"]], examples: [["All prerequisites have been met.", "所有前置条件都已满足。"], ["Check the prerequisites before starting.", "开始前检查前置条件。"]] },
    ],
    phrases: [
      { p: "check the prerequisites", ipa: "/tʃɛk ðə ˌpriːˈrɛk.wɪ.zɪts/", cn: "检查前置条件", why: "check + the + prerequisites = 检查前置条件。MOP开始前必须确认所有前置条件已满足。" },
    ],
    grammar: [
      { q: "prerequisites 和 requirements 有什么区别？", a: "prerequisites = 前置条件（必须在开始前满足）\nrequirements = 要求（整个过程都需要满足）\n✅ Check the prerequisites before starting the MOP.（开始前检查前置条件）\n✅ Meet all safety requirements.（满足所有安全要求）\nprerequisites 强调'开始之前'，requirements 强调'整个过程'。" },
    ],
    pattern: "Please check the prerequisites before + 动作",
    patternExamples: [
      { en: "Please check the prerequisites before starting.", cn: "开始前请检查前置条件。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "starting", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "Check the prerequisites before switching.", cn: "倒闸前检查前置条件。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "switching", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "Verify all prerequisites are met.", cn: "确认所有前置条件已满足。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
    ],
    thinking: "MOP前置条件检查清单：\n① 工具准备（绝缘手套、验电笔、对讲机）\n② 人员到位（执行人、监护人）\n③ 安全措施（LOTO、隔离点确认）\n④ 审批完成（MOP已批准）\n⑤ 通知到位（相关人员已通知）\n所有前置条件满足后才能开始MOP。",
    pronunciation: "prerequisites 重音在第二音节：/ˌpriːˈrɛk.wɪ.zɪts/。\n节奏：Please CHECK ｜ the pre-REQ-ui-sites.",
    quiz: [
      { q: "开始前请检查前置条件，怎么说？", a: "Please check the prerequisites before starting." },
      { q: "prerequisites 和 requirements 有什么区别？", a: "prerequisites = 前置条件（必须在开始前满足）；requirements = 要求（整个过程都需要满足）。prerequisites 强调'开始之前'。" },
    ],
  },
  {
    id: 431,
    en: "All safety measures are in place.",
    cn: "所有安全措施已到位。",
    ipa: "/ɔːl ˈseɪf.ti ˈmɛʒ.ərz ɑːr ɪn pleɪs/",
    tags: ["第431句", "MOP安全措施", "★★★★★"],
    when: "确认所有安全措施已到位后，才能开始执行MOP。安全措施包括PPE、LOTO、隔离等。",
    words: [
      { w: "safety measures", ipa: "/ˈseɪf.ti ˈmɛʒ.ərz/", pos: "名词", cn: "安全措施", memory: "① safety = 安全；② measure = 措施/方法。\nsafety measures = 安全措施，包括PPE、LOTO、隔离、警示标识等。", phonics: "safety 的 a 读 /eɪ/；measures 的 ea 读 /ɛ/，s 读 /ʒ/。", collocations: [["safety measures", "安全措施"], ["implement safety measures", "实施安全措施"], ["safety measures in place", "安全措施到位"]], examples: [["All safety measures must be in place.", "所有安全措施必须到位。"], ["What safety measures are required?", "需要什么安全措施？"]] },
      { w: "in place", ipa: "/ɪn pleɪs/", pos: "介词短语", cn: "到位；就位", memory: "① in = 在…状态中；② place = 位置。\nin place = 到位/就位，表示已经准备好、已安装好。", phonics: "in 读 /ɪn/，place 读 /pleɪs/。", collocations: [["in place", "到位"], ["put in place", "放置到位"], ["everything in place", "一切就绪"]], examples: [["All tools are in place.", "所有工具已到位。"], ["The barriers are in place.", "围栏已就位。"]] },
    ],
    phrases: [
      { p: "are in place", ipa: "/ɑːr ɪn pleɪs/", cn: "已到位", why: "are + in place = 已到位。表示安全措施已经全部准备就绪，可以开始操作。" },
    ],
    grammar: [
      { q: "in place 和 ready 有什么区别？", a: "in place = 到位（强调物理位置正确、已安装好）\nready = 准备好（强调状态就绪、可以使用）\n✅ All safety measures are in place.（所有安全措施已到位 → 强调已安装/布置好）\n✅ Everything is ready.（一切准备就绪 → 强调可以开始）\n安全措施用 in place，因为强调物理布置到位。" },
    ],
    pattern: "All + 名词 + are in place",
    patternExamples: [
      { en: "All tools are in place.", cn: "所有工具已到位。", words: [] },
      { en: "All barriers are in place.", cn: "所有围栏已就位。", words: [] },
      { en: "All documents are in place.", cn: "所有文件已准备好。", words: [] },
    ],
    thinking: "MOP安全措施清单：\n① PPE穿戴（安全帽、安全鞋、绝缘手套、护目镜）\n② LOTO锁定挂牌\n③ 隔离点确认\n④ 警示标识放置\n⑤ 灭火器就位\n⑥ 逃生通道畅通\n所有安全措施到位后，签字确认，才能开始MOP。",
    pronunciation: "safety 的 a 读 /eɪ/：/ˈseɪf.ti/。\nmeasures 的 s 读 /ʒ/：/ˈmɛʒ.ərz/。\n节奏：ALL SAFE-ty MEAS-ures ｜ are in PLACE.",
    quiz: [
      { q: "所有安全措施已到位，怎么说？", a: "All safety measures are in place." },
      { q: "in place 和 ready 有什么区别？", a: "in place = 到位（强调物理位置正确、已安装好）；ready = 准备好（强调状态就绪）。安全措施用 in place，因为强调物理布置到位。" },
    ],
  },
  {
    id: 432,
    en: "Has the LOTO been applied?",
    cn: "LOTO锁定挂牌已经执行了吗？",
    ipa: "/hæz ðə ˌɛl.oʊ.tiːˈoʊ biːn əˈplaɪd/",
    tags: ["第432句", "MOP-LOTO确认", "★★★★★"],
    when: "LOTO（Lock Out Tag Out，锁定挂牌）是MOP执行前最重要的安全程序，必须确认已执行。",
    words: [
      { w: "LOTO", ipa: "/ˌɛl.oʊ.tiːˈoʊ/", pos: "缩写", cn: "锁定挂牌（Lock Out Tag Out）", memory: "① L = Lock（锁定）；② O = Out（断开）；③ T = Tag（挂牌）；④ O = Out（退出服务）。\nLOTO = 锁定挂牌，是电气操作的安全程序，防止意外送电。", phonics: "逐个字母读：L-O-T-O，/ˌɛl.oʊ.tiːˈoʊ/。", collocations: [["apply LOTO", "执行LOTO"], ["LOTO procedure", "LOTO程序"], ["LOTO lock", "LOTO锁"]], examples: [["Has the LOTO been applied?", "LOTO已经执行了吗？"], ["Apply LOTO before working.", "工作前执行LOTO。"]] },
      { w: "applied", ipa: "/əˈplaɪd/", pos: "动词(过去分词)", cn: "被执行；被应用", memory: "① apply = 应用/执行；② applied = 被执行/被应用。\nhas been applied = 已经被执行（现在完成时被动语态）。", phonics: "ap 读 /ə/，plied 读 /plaɪd/，重音在第二音节。", collocations: [["LOTO applied", "LOTO已执行"], ["measures applied", "措施已实施"], ["procedure applied", "程序已执行"]], examples: [["The LOTO has been applied.", "LOTO已经执行。"], ["Safety measures have been applied.", "安全措施已经实施。"]] },
    ],
    phrases: [
      { p: "has been applied", ipa: "/hæz biːn əˈplaɪd/", cn: "已经被执行", why: "has been + applied = 已经被执行（现在完成时被动语态）。确认LOTO是否已经执行到位。" },
    ],
    grammar: [
      { q: "apply LOTO 和 do LOTO 哪个更正式？", a: "apply LOTO = 执行LOTO（正式用语，MOP标准用语）\ndo LOTO = 做LOTO（口语化）\nperform LOTO = 执行LOTO（正式用语）\n✅ Has the LOTO been applied?（LOTO已经执行了吗？→ 正式）\n✅ Did you do the LOTO?（你做LOTO了吗？→ 口语）\nMOP文档中用 apply 或 perform。" },
    ],
    pattern: "Has the LOTO been applied to + 设备",
    patternExamples: [
      { en: "Has the LOTO been applied to the breaker?", cn: "断路器的LOTO已经执行了吗？", words: [{ w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
      { en: "Has the LOTO been applied to the transformer?", cn: "变压器的LOTO已经执行了吗？", words: [{ w: "transformer", ipa: "/trænsˈfɔːrmər/", cn: "变压器", phonics: "trans 读 /træns/，former 读 /fɔːrmər/" }] },
      { en: "Confirm LOTO is applied.", cn: "确认LOTO已执行。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }] },
    ],
    thinking: "LOTO程序步骤：\n① 通知相关人员 → ② 关闭设备 → ③ 断开电源 → ④ 上锁（每人一把锁）→ ⑤ 挂牌（标注姓名、日期、原因）→ ⑥ 验电确认 → ⑦ 尝试启动（确认无法启动）。\nLOTO是生命保护程序，违反LOTO = 严重安全事故。",
    pronunciation: "LOTO 逐个字母读：/ˌɛl.oʊ.tiːˈoʊ/。\napplied 重音在第二音节：/əˈplaɪd/。\n节奏：Has the LO-TO ｜ been ap-PLIED?",
    quiz: [
      { q: "断路器的LOTO已经执行了吗？", a: "Has the LOTO been applied to the breaker?" },
      { q: "LOTO的完整步骤是什么？", a: "① 通知相关人员 ② 关闭设备 ③ 断开电源 ④ 上锁 ⑤ 挂牌 ⑥ 验电确认 ⑦ 尝试启动确认无法启动。LOTO是生命保护程序。" },
    ],
  },
  {
    id: 433,
    en: "Please read back the instruction.",
    cn: "请回读指令。",
    ipa: "/pliːz riːd bæk ðə ɪnˈstrʌk.ʃən/",
    tags: ["第433句", "MOP回读确认", "★★★★★"],
    when: "关键操作前，执行人需要回读指令，确保理解正确。这是双人确认的第一步。",
    words: [
      { w: "read back", ipa: "/riːd bæk/", pos: "动词短语", cn: "回读；复述", memory: "① read = 读；② back = 回。\nread back = 回读/复述，是通信和操作中的确认方法：听到指令后大声复述一遍，确保理解正确。", phonics: "read 读 /riːd/，back 读 /bæk/。", collocations: [["read back", "回读"], ["read back the instruction", "回读指令"], ["read back procedure", "回读程序"]], examples: [["Please read back the instruction.", "请回读指令。"], ["Read back the switching order.", "回读倒闸顺序。"]] },
      { w: "instruction", ipa: "/ɪnˈstrʌk.ʃən/", pos: "名词", cn: "指令；操作说明", memory: "① instruct = 指导/指示；② instruction = 指令/操作说明。\nMOP中的instruction指具体的操作步骤和动作指令。", phonics: "in 读 /ɪn/，struc 读 /strʌk/，tion 读 /ʃən/，重音在第二音节。", collocations: [["follow instructions", "遵循指令"], ["clear instructions", "清晰的指令"], ["step-by-step instructions", "分步指令"]], examples: [["Follow the instructions carefully.", "仔细遵循指令。"], ["The instructions are clear.", "指令很清晰。"]] },
    ],
    phrases: [
      { p: "read back the instruction", ipa: "/riːd bæk ðə ɪnˈstrʌk.ʃən/", cn: "回读指令", why: "read back + the + instruction = 回读指令。执行人大声复述操作步骤，监护人确认理解正确后才能执行。" },
    ],
    grammar: [
      { q: "read back 和 repeat 有什么区别？", a: "read back = 回读（读出书面指令，确认文字正确）\nrepeat = 重复（重复听到的内容，确认理解正确）\n✅ Please read back the instruction.（请回读指令 → 读出MOP上的操作步骤）\n✅ Please repeat what I said.（请重复我说的 → 复述口头指令）\nMOP操作用 read back，因为是书面操作步骤。" },
    ],
    pattern: "Please read back + 内容",
    patternExamples: [
      { en: "Please read back the switching sequence.", cn: "请回读倒闸顺序。", words: [{ w: "switching", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "Read back the next step.", cn: "回读下一步。", words: [{ w: "step", ipa: "/stɛp/", cn: "步骤", phonics: "step 读 /stɛp/" }] },
      { en: "Please read back the safety warning.", cn: "请回读安全警告。", words: [{ w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }, { w: "warning", ipa: "/ˈwɔːrnɪŋ/", cn: "警告", phonics: "warn 读 /wɔːrn/，ing 读 /ɪŋ/" }] },
    ],
    thinking: "回读确认是双人操作的强制要求。\n流程：① 监护人读出指令 → ② 执行人回读 → ③ 监护人确认正确 → ④ 执行人操作。\n回读必须逐字逐句，不能用自己的话概括。",
    pronunciation: "read 读 /riːd/（不是 /rɛd/）。\ninstruction 重音在第二音节：/ɪnˈstrʌk.ʃən/。\n节奏：Please READ BACK ｜ the in-STRUC-tion.",
    quiz: [
      { q: "请回读倒闸顺序，怎么说？", a: "Please read back the switching sequence." },
      { q: "read back 和 repeat 在MOP中有什么区别？", a: "read back = 回读（读出书面指令）；repeat = 重复（复述口头指令）。MOP操作用 read back，因为是书面操作步骤。" },
    ],
  },
  {
    id: 434,
    en: "A second person must verify the operation.",
    cn: "必须由第二人验证操作。",
    ipa: "/ə ˈsɛk.ənd ˈpɜːr.sən mʌst ˈvɛr.ɪ.faɪ ðə ˌɑː.pəˈreɪ.ʃən/",
    tags: ["第434句", "MOP双人确认", "★★★★★"],
    when: "关键操作（如倒闸、送电）必须由第二人（监护人）验证，确保操作正确。",
    words: [
      { w: "second person", ipa: "/ˈsɛk.ənd ˈpɜːr.sən/", pos: "名词", cn: "第二人；监护人", memory: "① second = 第二；② person = 人。\nsecond person = 第二人/监护人，在双人操作中负责验证和监督。\n第一人是执行人（operator），第二人是监护人（verifier/witness）。", phonics: "second 的 e 读 /ɛ/；person 的 er 读 /ɜːr/。", collocations: [["second person verification", "双人确认"], ["second person check", "第二人检查"], ["second person witness", "第二人见证"]], examples: [["A second person must verify.", "必须由第二人验证。"], ["Second person verification is required.", "需要双人确认。"]] },
      { w: "verify", ipa: "/ˈvɛr.ɪ.faɪ/", pos: "动词", cn: "验证；核实", memory: "① verify = 验证/核实（确认真实性和正确性）。\nverification = 验证（名词）。第二人的核心职责是 verify 操作的正确性。", phonics: "ver 读 /vɛr/，i 读 /ɪ/，fy 读 /faɪ/，重音在第一音节。", collocations: [["verify the operation", "验证操作"], ["verify the reading", "验证读数"], ["verify the position", "验证位置"]], examples: [["Please verify the breaker position.", "请验证断路器位置。"], ["Verify before proceeding.", "确认后再继续。"]] },
    ],
    phrases: [
      { p: "must verify", ipa: "/mʌst ˈvɛr.ɪ.faɪ/", cn: "必须验证", why: "must + verify = 必须验证。双人确认是强制要求，不是可选项。" },
    ],
    grammar: [
      { q: "must 和 should 在安全要求中有什么区别？", a: "must = 必须（强制要求，不执行 = 违规）\nshould = 应该（建议要求，不执行 = 不推荐但允许）\n✅ A second person must verify.（必须由第二人验证 → 强制）\n✅ You should wear safety glasses.（你应该戴护目镜 → 建议）\n关键操作用 must，一般操作用 should。" },
    ],
    pattern: "A second person must verify + 对象",
    patternExamples: [
      { en: "A second person must verify the switching.", cn: "必须由第二人验证倒闸操作。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "switching", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "A second person must verify the LOTO.", cn: "必须由第二人验证LOTO。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
      { en: "Second person verification is mandatory.", cn: "双人确认是强制的。", words: [] },
    ],
    thinking: "双人确认（Two-person rule）是数据中心关键操作的铁律。\n适用范围：① 电气倒闸 ② 送电操作 ③ LOTO执行/解除 ④ 消防系统操作 ⑤ 任何可能导致停电的操作。\n双人 = 一人执行 + 一人验证，两人都要签字。",
    pronunciation: "second 重音在第一音节：/ˈsɛk.ənd/。\nverify 重音在第一音节：/ˈvɛr.ɪ.faɪ/。\n节奏：A SEC-ond PER-son ｜ must VER-i-fy ｜ the op-er-A-tion.",
    quiz: [
      { q: "必须由第二人验证倒闸操作，怎么说？", a: "A second person must verify the switching." },
      { q: "must 和 should 在安全要求中有什么区别？", a: "must = 必须（强制要求，不执行 = 违规）；should = 应该（建议要求）。关键操作用 must，一般操作用 should。" },
    ],
  },
  {
    id: 435,
    en: "Both operators have confirmed.",
    cn: "两名操作员都已确认。",
    ipa: "/boʊθ ˈɑː.pə.reɪ.tərz hæv kənˈfɜːrmd/",
    tags: ["第435句", "MOP双人确认", "★★★★★"],
    when: "双人确认完成后，报告两名操作员都已确认，可以继续下一步。",
    words: [
      { w: "both", ipa: "/boʊθ/", pos: "限定词", cn: "两个都；双方", memory: "① both = 两个都/双方。\nboth operators = 两名操作员（执行人 + 监护人）都确认了。", phonics: "b 读 /b/，o 读 /oʊ/，th 读 /θ/（咬舌尖）。", collocations: [["both operators", "两名操作员"], ["both confirmed", "双方都确认"], ["both signed", "双方都签字"]], examples: [["Both operators are present.", "两名操作员都在场。"], ["Both have signed the MOP.", "双方都已在MOP上签字。"]] },
      { w: "operators", ipa: "/ˈɑː.pə.reɪ.tərz/", pos: "名词", cn: "操作员", memory: "① operate = 操作；② operator = 操作员。\nMOP中的两名操作员：执行人（performer）和监护人（verifier/witness）。", phonics: "op 读 /ɑː/，er 读 /ə/，a 读 /eɪ/，tors 读 /tərz/，重音在第一音节。", collocations: [["senior operator", "高级操作员"], ["qualified operator", "合格操作员"], ["on-duty operator", "值班操作员"]], examples: [["The operator checked the panel.", "操作员检查了面板。"], ["Two operators are required.", "需要两名操作员。"]] },
    ],
    phrases: [
      { p: "both have confirmed", ipa: "/boʊθ hæv kənˈfɜːrmd/", cn: "都已确认", why: "both + have confirmed = 双方都已确认。强调两名操作员都完成了确认动作。" },
    ],
    grammar: [
      { q: "both 和 all 有什么区别？", a: "both = 两个都（仅用于两者）\nall = 全部都（用于三者及以上）\n✅ Both operators have confirmed.（两名操作员都确认了 → 两个人）\n✅ All three operators have confirmed.（三名操作员都确认了 → 三个人）\n双人确认用 both，三人及以上用 all。" },
    ],
    pattern: "Both + 名词 + have + 过去分词",
    patternExamples: [
      { en: "Both operators have signed.", cn: "两名操作员都已签字。", words: [{ w: "signed", ipa: "/saɪn/", cn: "签字", phonics: "sign 读 /saɪn/" }] },
      { en: "Both engineers have verified.", cn: "两名工程师都已验证。", words: [{ w: "engineers", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }, { w: "verified", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
      { en: "Both shifts have acknowledged.", cn: "两个班次都已确认。", words: [{ w: "shifts", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }] },
    ],
    thinking: "双人确认的完整流程：\n① 监护人读出指令 → ② 执行人回读 → ③ 监护人确认 → ④ 执行人操作 → ⑤ 监护人验证 → ⑥ 双方签字。\n只有双方都确认后才能进入下一步。",
    pronunciation: "both 的 th 读 /θ/（咬舌尖）：/boʊθ/。\noperators 重音在第一音节：/ˈɑː.pə.reɪ.tərz/。\n节奏：BOTH OP-er-a-tors ｜ have con-FIRMED.",
    quiz: [
      { q: "两名工程师都已验证，怎么说？", a: "Both engineers have verified." },
      { q: "both 和 all 有什么区别？", a: "both = 两个都（仅用于两者）；all = 全部都（用于三者及以上）。双人确认用 both。" },
    ],
  },
  {
    id: 436,
    en: "Please record any deviation.",
    cn: "请记录任何偏差。",
    ipa: "/pliːz rɪˈkɔːrd ˈɛn.i ˌdiː.viˈeɪ.ʃən/",
    tags: ["第436句", "MOP偏差记录", "★★★★★"],
    when: "MOP执行过程中如果出现与计划不符的情况（偏差），必须记录在案，不能隐瞒。",
    words: [
      { w: "deviation", ipa: "/ˌdiː.viˈeɪ.ʃən/", pos: "名词", cn: "偏差；偏离", memory: "① de- = 离开；② vi = 路（via）；③ ation = 名词后缀。\ndeviation = 偏离正常路径/计划 → 偏差。MOP中偏差指实际操作与计划步骤不一致的情况。", phonics: "de 读 /diː/，vi 读 /vɪ/，a 读 /eɪ/，tion 读 /ʃən/，重音在第三音节。", collocations: [["record deviation", "记录偏差"], ["deviation report", "偏差报告"], ["deviation from plan", "偏离计划"]], examples: [["Record any deviation immediately.", "立即记录任何偏差。"], ["There was a deviation from the MOP.", "MOP执行中出现了偏差。"]] },
    ],
    phrases: [
      { p: "record any deviation", ipa: "/rɪˈkɔːrd ˈɛn.i ˌdiː.viˈeɪ.ʃən/", cn: "记录任何偏差", why: "record + any + deviation = 记录任何偏差。any 强调'不管什么样的'偏差都要记录。" },
    ],
    grammar: [
      { q: "any 和 all 在否定/条件句中有什么区别？", a: "any = 任何（用于疑问句、否定句、条件句）\nall = 所有（用于肯定句）\n✅ Record any deviation.（记录任何偏差 → 不管什么偏差都要记录）\n✅ Record all deviations.（记录所有偏差 → 强调全部）\nany 更强调'不遗漏'，all 更强调'全部覆盖'。" },
    ],
    pattern: "Please record any + 名词",
    patternExamples: [
      { en: "Please record any abnormality.", cn: "请记录任何异常情况。", words: [] },
      { en: "Record any issue immediately.", cn: "立即记录任何问题。", words: [{ w: "issue", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Please document any change.", cn: "请记录任何变更。", words: [] },
    ],
    thinking: "MOP偏差管理：\n① 发现偏差 → ② 暂停操作 → ③ 记录偏差内容 → ④ 评估影响 → ⑤ 决定继续/修改/终止 → ⑥ 签字确认。\n偏差类型：读数不符、步骤顺序变更、设备状态异常、时间超出预期等。\n隐瞒偏差 = 严重违规。",
    pronunciation: "deviation 重音在第三音节：/ˌdiː.viˈeɪ.ʃən/。\nany 读 /ˈɛn.i/。\n节奏：Please re-CORD ｜ AN-y ｜ de-vi-A-tion.",
    quiz: [
      { q: "请记录任何异常情况，怎么说？", a: "Please record any abnormality." },
      { q: "MOP执行中出现偏差怎么处理？", a: "① 暂停操作 ② 记录偏差内容 ③ 评估影响 ④ 决定继续/修改/终止 ⑤ 签字确认。隐瞒偏差是严重违规。" },
    ],
  },
  {
    id: 437,
    en: "The deviation has been documented.",
    cn: "偏差已经被记录。",
    ipa: "/ðə ˌdiː.viˈeɪ.ʃən hæz biːn ˈdɒk.jə.mɛn.tɪd/",
    tags: ["第437句", "MOP偏差记录", "★★★★★"],
    when: "偏差已经记录在案，可以继续执行MOP或按偏差处理流程操作。",
    words: [
      { w: "documented", ipa: "/ˈdɒk.jə.mɛn.tɪd/", pos: "动词(过去分词)", cn: "被记录；被归档", memory: "① document = 记录/归档（动词）/ 文件（名词）。\n② documented = 被记录/被归档。\nhas been documented = 已经被记录（现在完成时被动语态）。", phonics: "doc 读 /dɒk/，u 读 /jə/，ment 读 /mɛnt/，ed 读 /ɪd/，重音在第一音节。", collocations: [["well documented", "记录完善"], ["documented evidence", "书面证据"], ["properly documented", "正确记录"]], examples: [["The issue has been documented.", "问题已经被记录。"], ["Everything is well documented.", "一切都有详细记录。"]] },
    ],
    phrases: [
      { p: "has been documented", ipa: "/hæz biːn ˈdɒk.jə.mɛn.tɪd/", cn: "已经被记录", why: "has been + documented = 已经被记录。强调偏差已经被正式记录在案，可以追溯。" },
    ],
    grammar: [
      { q: "documented 和 recorded 有什么区别？", a: "documented = 被记录/被归档（更正式，通常指书面记录）\nrecorded = 被记录（更通用，可以是口头、电子、书面）\n✅ The deviation has been documented.（偏差已经被书面记录 → 正式）\n✅ The conversation was recorded.（对话被录音了 → 电子记录）\nMOP偏差用 documented，因为需要书面归档。" },
    ],
    pattern: "The + 名词 + has been documented",
    patternExamples: [
      { en: "The issue has been documented.", cn: "问题已经被记录。", words: [{ w: "issue", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
      { en: "The change has been documented.", cn: "变更已经被记录。", words: [] },
      { en: "All findings have been documented.", cn: "所有发现都已被记录。", words: [] },
    ],
    thinking: "偏差记录的要素：\n① 偏差发生时间 ② 偏差内容描述 ③ 影响评估 ④ 处理措施 ⑤ 责任人签字 ⑥ 后续跟踪。\n记录必须详细、准确、可追溯。",
    pronunciation: "documented 重音在第一音节：/ˈdɒk.jə.mɛn.tɪd/。\n节奏：The de-vi-A-tion ｜ has been DOC-u-men-ted.",
    quiz: [
      { q: "变更已经被记录，怎么说？", a: "The change has been documented." },
      { q: "documented 和 recorded 有什么区别？", a: "documented = 被记录/被归档（更正式，书面记录）；recorded = 被记录（更通用，可以是口头/电子/书面）。MOP偏差用 documented。" },
    ],
  },
  {
    id: 438,
    en: "Please submit the completed MOP.",
    cn: "请提交已完成的MOP。",
    ipa: "/pliːz səbˈmɪt ðə kəmˈpliː.tɪd ˌɛm.oʊˈpiː/",
    tags: ["第438句", "MOP提交", "★★★★"],
    when: "MOP执行完成后，需要提交完整的MOP文档，包括所有签字、记录、偏差报告。",
    words: [
      { w: "submit", ipa: "/səbˈmɪt/", pos: "动词", cn: "提交", memory: "① sub- = 在下面；② mit = 发送。\nsubmit = 提交/呈交（正式用语，用于文件、申请、报告的提交）。", phonics: "sub 读 /səb/，mit 读 /mɪt/，重音在第二音节。", collocations: [["submit the MOP", "提交MOP"], ["submit the report", "提交报告"], ["submit for review", "提交审核"]], examples: [["Please submit the report by Friday.", "请在周五前提交报告。"], ["The MOP has been submitted.", "MOP已经提交。"]] },
      { w: "completed", ipa: "/kəmˈpliː.tɪd/", pos: "形容词", cn: "已完成的", memory: "① complete = 完成；② completed = 已完成的。\ncompleted MOP = 已完成的MOP，包含所有步骤的签字和记录。", phonics: "com 读 /kəm/，plet 读 /pliː/，ed 读 /tɪd/，重音在第二音节。", collocations: [["completed MOP", "已完成的MOP"], ["completed form", "已填写的表格"], ["completed checklist", "已完成的检查表"]], examples: [["The completed MOP is ready.", "已完成的MOP准备好了。"], ["Please review the completed form.", "请审核已填写的表格。"]] },
    ],
    phrases: [
      { p: "submit the completed MOP", ipa: "/səbˈmɪt ðə kəmˈpliː.tɪd ˌɛm.oʊˈpiː/", cn: "提交已完成的MOP", why: "submit + the + completed + MOP = 提交已完成的MOP。提交前确认所有步骤已签字、所有记录已完善。" },
    ],
    grammar: [
      { q: "submit 和 hand in 有什么区别？", a: "submit = 提交（正式用语，用于文件、报告）\nhand in = 交上来（口语化，用于作业、表格）\n✅ Please submit the completed MOP.（请提交已完成的MOP → 正式）\n✅ Hand in the form.（把表格交上来 → 口语）\nMOP文档用 submit。" },
    ],
    pattern: "Please submit the completed + 文件",
    patternExamples: [
      { en: "Please submit the completed report.", cn: "请提交已完成的报告。", words: [{ w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
      { en: "Submit the completed checklist.", cn: "提交已完成的检查表。", words: [] },
      { en: "Please submit the MOP for archiving.", cn: "请提交MOP进行归档。", words: [] },
    ],
    thinking: "MOP提交流程：\n① 确认所有步骤已签字 → ② 确认所有读数已记录 → ③ 确认偏差已记录 → ④ 确认照片已附 → ⑤ 提交给主管审核 → ⑥ 归档保存。",
    pronunciation: "submit 重音在第二音节：/səbˈmɪt/。\ncompleted 重音在第二音节：/kəmˈpliː.tɪd/。\n节奏：Please sub-MIT ｜ the com-PLE-ted ｜ M-O-P.",
    quiz: [
      { q: "请提交已完成的报告，怎么说？", a: "Please submit the completed report." },
      { q: "submit 和 hand in 有什么区别？", a: "submit = 提交（正式用语）；hand in = 交上来（口语化）。MOP文档用 submit。" },
    ],
  },
  {
    id: 439,
    en: "The MOP has been archived.",
    cn: "MOP已经归档。",
    ipa: "/ðə ˌɛm.oʊˈpiː hæz biːn ˈɑːr.kaɪvd/",
    tags: ["第439句", "MOP归档", "★★★★"],
    when: "MOP提交审核通过后，进行归档保存，作为操作记录和质量追溯依据。",
    words: [
      { w: "archived", ipa: "/ˈɑːr.kaɪvd/", pos: "动词(过去分词)", cn: "被归档", memory: "① archive = 归档/档案；② archived = 被归档。\nhas been archived = 已经被归档（现在完成时被动语态）。", phonics: "ar 读 /ɑːr/，chive 读 /kaɪvd/。注意 ch 读 /k/ 不读 /tʃ/。", collocations: [["archive the document", "归档文件"], ["archived records", "归档记录"], ["digital archive", "数字归档"]], examples: [["The document has been archived.", "文件已经归档。"], ["All MOPs are archived digitally.", "所有MOP都进行数字归档。"]] },
    ],
    phrases: [
      { p: "has been archived", ipa: "/hæz biːn ˈɑːr.kaɪvd/", cn: "已经被归档", why: "has been + archived = 已经被归档。表示MOP已经正式存入档案系统，可以日后查阅。" },
    ],
    grammar: [
      { q: "archive 和 file 有什么区别？", a: "archive = 归档（长期保存，通常不再使用但需要保留）\nfile = 存档（分类存放，可能还会使用）\n✅ The MOP has been archived.（MOP已经归档 → 长期保存）\n✅ File the report in the cabinet.（把报告放入柜子 → 分类存放）\n完成的MOP用 archive，因为是长期保存。" },
    ],
    pattern: "The + 文件 + has been archived",
    patternExamples: [
      { en: "The report has been archived.", cn: "报告已经归档。", words: [{ w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
      { en: "The records have been archived.", cn: "记录已经归档。", words: [] },
      { en: "All documents are archived.", cn: "所有文件都已归档。", words: [] },
    ],
    thinking: "MOP归档要求：\n① 归档期限：通常保存3-5年\n② 归档方式：纸质 + 电子双份\n③ 归档内容：MOP原件 + 签字页 + 读数记录 + 偏差报告 + 照片\n④ 归档编号：按日期 + 设备 + 操作类型编号\n⑤ 可追溯：任何时候都能查到历史MOP。",
    pronunciation: "archived 的 ch 读 /k/：/ˈɑːr.kaɪvd/，不要读成 /ɑːr.tʃaɪvd/。\n节奏：The M-O-P ｜ has been AR-chived.",
    quiz: [
      { q: "报告已经归档，怎么说？", a: "The report has been archived." },
      { q: "archive 的 ch 怎么读？", a: "archive 的 ch 读 /k/（不是 /tʃ/）：/ˈɑːr.kaɪvd/。类似 character /ˈkær.ək.tər/ 中 ch 也读 /k/。" },
    ],
  },
  {
    id: 440,
    en: "Let's review the lessons learned.",
    cn: "我们来回顾一下经验教训。",
    ipa: "/lɛts rɪˈvjuː ðə ˈlɛs.ənz lɜːrnd/",
    tags: ["第440句", "MOP经验总结", "★★★★"],
    when: "MOP完成后，团队进行经验教训总结，为下次操作提供参考和改进依据。",
    words: [
      { w: "lessons learned", ipa: "/ˈlɛs.ənz lɜːrnd/", pos: "名词短语", cn: "经验教训", memory: "① lesson = 课程/教训；② learned = 学到的。\nlessons learned = 经验教训，是项目管理中的标准术语，指从实践中总结的经验和教训。", phonics: "lessons 的 e 读 /ɛ/；learned 的 ear 读 /ɜːr/。", collocations: [["lessons learned", "经验教训"], ["lessons learned session", "经验总结会"], ["document lessons learned", "记录经验教训"]], examples: [["Let's document the lessons learned.", "让我们记录经验教训。"], ["The lessons learned meeting is tomorrow.", "经验总结会明天开。"]] },
      { w: "review", ipa: "/rɪˈvjuː/", pos: "动词", cn: "回顾；审查", memory: "① re- = 再次；② view = 看。\nreview = 回顾/审查（再次查看，总结经验）。", phonics: "re 读 /rɪ/，view 读 /vjuː/，重音在第二音节。", collocations: [["review the results", "回顾结果"], ["performance review", "绩效审查"], ["review meeting", "总结会"]], examples: [["Let's review what happened.", "让我们回顾发生了什么。"], ["Please review the report.", "请审查报告。"]] },
    ],
    phrases: [
      { p: "lessons learned", ipa: "/ˈlɛs.ənz lɜːrnd/", cn: "经验教训", why: "lessons + learned = 经验教训。MOP完成后的经验总结是持续改进的重要环节。" },
    ],
    grammar: [
      { q: "Let's 和 Shall we 有什么区别？", a: "Let's = 让我们（直接提议，语气积极）\nShall we = 我们…好吗？（征求意见，语气委婉）\n✅ Let's review the lessons learned.（我们来回顾经验教训 → 直接提议）\n✅ Shall we start the review?（我们开始总结好吗？→ 征求意见）\n团队协作中用 Let's 更自然。" },
    ],
    pattern: "Let's review + 内容",
    patternExamples: [
      { en: "Let's review the operation.", cn: "我们来回顾操作过程。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "operation", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }] },
      { en: "Let's review what went well.", cn: "我们来回顾做得好的地方。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
      { en: "Let's review the issues.", cn: "我们来回顾问题。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "issues", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
    ],
    thinking: "MOP经验总结内容：\n① 做得好的地方（继续保持）\n② 遇到的问题（如何解决的）\n③ 偏差和原因分析\n④ 改进建议（下次如何做得更好）\n⑤ 需要更新MOP的地方\n经验总结要记录归档，作为持续改进的依据。",
    pronunciation: "lessons 的 e 读 /ɛ/：/ˈlɛs.ənz/。\nlearned 的 ear 读 /ɜːr/：/lɜːrnd/。\n节奏：Let's re-VIEW ｜ the LES-sons LEARNED.",
    quiz: [
      { q: "我们来回顾操作过程，怎么说？", a: "Let's review the operation." },
      { q: "MOP经验总结应该包括哪些内容？", a: "① 做得好的地方 ② 遇到的问题及解决方法 ③ 偏差和原因分析 ④ 改进建议 ⑤ 需要更新MOP的地方。" },
    ],
  },
  {
    id: 441,
    en: "The operation went smoothly.",
    cn: "操作进行得很顺利。",
    ipa: "/ðə ˌɑː.pəˈreɪ.ʃən wɛnt ˈsmuːð.li/",
    tags: ["第441句", "MOP操作总结", "★★★★"],
    when: "MOP执行完成后的总结评价，确认操作过程顺利无异常。",
    words: [
      { w: "smoothly", ipa: "/ˈsmuːð.li/", pos: "副词", cn: "顺利地；平稳地", memory: "① smooth = 平滑的/顺利的；② smoothly = 顺利地/平稳地。\nwent smoothly = 进行得很顺利，是MOP总结中的正面评价。", phonics: "smooth 的 oo 读 /uː/，th 读 /ð/；ly 读 /li/。", collocations: [["went smoothly", "进行顺利"], ["running smoothly", "运行顺利"], ["proceed smoothly", "顺利进行"]], examples: [["The switching went smoothly.", "倒闸进行得很顺利。"], ["Everything went smoothly.", "一切顺利。"]] },
    ],
    phrases: [
      { p: "went smoothly", ipa: "/wɛnt ˈsmuːð.li/", cn: "进行得很顺利", why: "went + smoothly = 进行得很顺利。went 是 go 的过去式，表示操作过程的状态。" },
    ],
    grammar: [
      { q: "went smoothly 和 went well 有什么区别？", a: "went smoothly = 进行得很顺利（强调过程平稳、无波折）\nwent well = 进行得很好（强调结果好）\n✅ The operation went smoothly.（操作进行得很顺利 → 过程平稳）\n✅ The operation went well.（操作进行得很好 → 结果满意）\n两者在MOP总结中可互换，smoothly 更强调过程。" },
    ],
    pattern: "The + 操作 + went smoothly",
    patternExamples: [
      { en: "The switching went smoothly.", cn: "倒闸进行得很顺利。", words: [{ w: "switching", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "The maintenance went smoothly.", cn: "维护进行得很顺利。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "The test went smoothly.", cn: "测试进行得很顺利。", words: [{ w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
    ],
    thinking: "MOP操作总结的评价等级：\n① went smoothly = 顺利进行（最佳）\n② went well with minor issues = 基本顺利，有小问题\n③ encountered deviations = 遇到偏差（需要详细记录）\n④ had to be aborted = 不得不终止（需要原因分析）",
    pronunciation: "smoothly 的 th 读 /ð/（不是 /θ/）：/ˈsmuːð.li/。\n节奏：The op-er-A-tion ｜ went SMOOTH-ly.",
    quiz: [
      { q: "倒闸进行得很顺利，怎么说？", a: "The switching went smoothly." },
      { q: "went smoothly 和 went well 有什么区别？", a: "went smoothly = 进行得很顺利（强调过程平稳）；went well = 进行得很好（强调结果好）。两者可互换，smoothly 更强调过程。" },
    ],
  },
  {
    id: 442,
    en: "No deviations were found during the MOP.",
    cn: "MOP执行过程中没有发现偏差。",
    ipa: "/noʊ ˌdiː.viˈeɪ.ʃənz wɜːr faʊnd ˈdjʊə.rɪŋ ðə ˌɛm.oʊˈpiː/",
    tags: ["第442句", "MOP无偏差", "★★★★"],
    when: "总结MOP执行情况，确认没有偏差发生，操作完全按照计划进行。",
    words: [
      { w: "found", ipa: "/faʊnd/", pos: "动词(过去分词)", cn: "被发现", memory: "① find = 发现；② found = 被发现（find 的过去式和过去分词）。\nwere found = 被发现（一般过去时被动语态）。", phonics: "found 读 /faʊnd/，ou 读 /aʊ/。", collocations: [["no issues found", "未发现问题"], ["no deviations found", "未发现偏差"], ["found during inspection", "检查中发现"]], examples: [["No issues were found.", "没有发现问题。"], ["A crack was found on the pipe.", "管道上发现了裂缝。"]] },
    ],
    phrases: [
      { p: "no deviations were found", ipa: "/noʊ ˌdiː.viˈeɪ.ʃənz wɜːr faʊnd/", cn: "没有发现偏差", why: "no + deviations + were found = 没有发现偏差。MOP执行中的正面评价，说明操作完全按计划进行。" },
    ],
    grammar: [
      { q: "no deviations 和 zero deviations 有什么区别？", a: "no deviations = 没有偏差（标准用语，自然表达）\nzero deviations = 零偏差（强调数量为0，更精确）\n✅ No deviations were found.（没有发现偏差 → 自然表达）\n✅ Zero deviations recorded.（记录零偏差 → 数据统计用语）\n日常总结用 no deviations。" },
    ],
    pattern: "No + 名词 + were found + 时间/范围",
    patternExamples: [
      { en: "No issues were found during the inspection.", cn: "检查中没有发现问题。", words: [{ w: "issues", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
      { en: "No abnormalities were found.", cn: "没有发现异常。", words: [] },
      { en: "No safety concerns were found.", cn: "没有发现安全隐患。", words: [{ w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }] },
    ],
    thinking: "MOP无偏差 = 操作完全按照计划执行，是最佳结果。\n总结时需要确认：① 所有步骤按计划完成 ② 所有读数在范围内 ③ 没有意外情况 ④ 所有安全措施有效。",
    pronunciation: "deviations 重音在第三音节：/ˌdiː.viˈeɪ.ʃənz/。\nfound 的 ou 读 /aʊ/。\n节奏：No de-vi-A-tions ｜ were FOUND ｜ DU-ring the M-O-P.",
    quiz: [
      { q: "检查中没有发现问题，怎么说？", a: "No issues were found during the inspection." },
      { q: "MOP无偏差意味着什么？", a: "意味着操作完全按照计划执行：① 所有步骤按计划完成 ② 所有读数在范围内 ③ 没有意外情况 ④ 所有安全措施有效。这是最佳结果。" },
    ],
  },
  {
    id: 443,
    en: "Please update the MOP if any step needs improvement.",
    cn: "如果有任何步骤需要改进，请更新MOP。",
    ipa: "/pliːz ˌʌpˈdeɪt ðə ˌɛm.oʊˈpiː ɪf ˈɛn.i stɛp niːdz ɪmˈpruːv.mənt/",
    tags: ["第443句", "MOP更新", "★★★★"],
    when: "经验总结后，如果发现MOP有改进空间，需要及时更新MOP文档。",
    words: [
      { w: "update", ipa: "/ˌʌpˈdeɪt/", pos: "动词", cn: "更新", memory: "① up- = 向上；② date = 日期。\nupdate = 更新（使内容保持最新）。MOP需要根据实践经验持续更新。", phonics: "up 读 /ʌp/，date 读 /deɪt/，重音在第二音节。", collocations: [["update the MOP", "更新MOP"], ["update the procedure", "更新程序"], ["update the document", "更新文件"]], examples: [["Please update the MOP.", "请更新MOP。"], ["The procedure needs updating.", "程序需要更新。"]] },
      { w: "improvement", ipa: "/ɪmˈpruːv.mənt/", pos: "名词", cn: "改进；改善", memory: "① improve = 改进；② improvement = 改进/改善。\nneeds improvement = 需要改进。", phonics: "im 读 /ɪm/，prov 读 /pruːv/，ment 读 /mənt/，重音在第二音节。", collocations: [["needs improvement", "需要改进"], ["continuous improvement", "持续改进"], ["room for improvement", "改进空间"]], examples: [["This step needs improvement.", "这个步骤需要改进。"], ["There is room for improvement.", "有改进空间。"]] },
    ],
    phrases: [
      { p: "if any step needs improvement", ipa: "/ɪf ˈɛn.i stɛp niːdz ɪmˈpruːv.mənt/", cn: "如果有任何步骤需要改进", why: "if + any step + needs improvement = 如果任何步骤需要改进。条件句，表示有改进空间时需要更新MOP。" },
    ],
    grammar: [
      { q: "update 和 revise 有什么区别？", a: "update = 更新（使内容保持最新，可以是小改动）\nrevise = 修订（较大幅度的修改，重新审核）\n✅ Update the MOP if a step needs improvement.（更新MOP → 小改动）\n✅ Revise the MOP after a major incident.（修订MOP → 大改）\n日常改进用 update，重大变更后用 revise。" },
    ],
    pattern: "Please update + 文件 + if + 条件",
    patternExamples: [
      { en: "Please update the SOP if needed.", cn: "如果需要请更新SOP。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }] },
      { en: "Update the checklist if steps change.", cn: "如果步骤变更请更新检查表。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "steps", ipa: "/stɛp/", cn: "步骤", phonics: "step 读 /stɛp/" }] },
      { en: "Please update the MOP based on lessons learned.", cn: "请根据经验教训更新MOP。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }] },
    ],
    thinking: "MOP更新触发条件：\n① 执行中发现步骤不合理 ② 设备更换导致操作变化 ③ 安全事故后的程序改进 ④ 法规/标准更新 ⑤ 经验总结中的改进建议。\n更新后需要重新审批。",
    pronunciation: "update 重音在第二音节：/ˌʌpˈdeɪt/。\nimprovement 重音在第二音节：/ɪmˈpruːv.mənt/。\n节奏：Please UP-date ｜ the M-O-P ｜ if AN-y STEP ｜ needs im-PROVE-ment.",
    quiz: [
      { q: "请根据经验教训更新MOP，怎么说？", a: "Please update the MOP based on lessons learned." },
      { q: "update 和 revise 在MOP中有什么区别？", a: "update = 更新（小改动，保持最新）；revise = 修订（较大幅度修改）。日常改进用 update，重大变更后用 revise。" },
    ],
  },
  {
    id: 444,
    en: "The MOP version has been updated to V2.1.",
    cn: "MOP版本已更新至V2.1。",
    ipa: "/ðə ˌɛm.oʊˈpiː ˈvɜːr.ʒən hæz biːn ˌʌpˈdeɪ.tɪd tuː ˌviː tuː pɔɪnt wʌn/",
    tags: ["第444句", "MOP版本管理", "★★★★"],
    when: "MOP更新后需要更新版本号，确保使用的是最新版本。",
    words: [
      { w: "version", ipa: "/ˈvɜːr.ʒən/", pos: "名词", cn: "版本", memory: "① version = 版本。\nMOP版本管理：V1.0（初始版本）→ V1.1（小改动）→ V2.0（大改动）。\n小数点后变化 = 小改动；整数变化 = 大改动。", phonics: "ver 读 /vɜːr/，sion 读 /ʒən/。注意 s 读 /ʒ/ 不读 /ʃ/。", collocations: [["latest version", "最新版本"], ["version control", "版本控制"], ["version number", "版本号"]], examples: [["Use the latest version.", "使用最新版本。"], ["What version is this?", "这是哪个版本？"]] },
    ],
    phrases: [
      { p: "has been updated to", ipa: "/hæz biːn ˌʌpˈdeɪ.tɪd tuː/", cn: "已更新至", why: "has been updated to + 版本号 = 已更新至某版本。表示MOP已经更新到指定版本。" },
    ],
    grammar: [
      { q: "版本号的读法？", a: "V2.1 = /ˌviː tuː pɔɪnt wʌn/（V + two + point + one）\nV3.0 = /ˌviː θriː pɔɪnt zɪəroʊ/（V + three + point + zero）\nV1.5 = /ˌviː wʌn pɔɪnt faɪv/（V + one + point + five）\n字母V读字母音，数字逐个读，小数点读 point。" },
    ],
    pattern: "The + 文件 + version has been updated to + 版本号",
    patternExamples: [
      { en: "The SOP version has been updated to V3.0.", cn: "SOP版本已更新至V3.0。", words: [] },
      { en: "The EOP has been updated to V1.2.", cn: "EOP已更新至V1.2。", words: [] },
      { en: "The procedure is now at V2.0.", cn: "程序现在在V2.0版本。", words: [{ w: "procedure", ipa: "/prəˈsiːdʒər/", cn: "流程", phonics: "pro 读 /prə/，cedure 读 /siːdʒər/" }] },
    ],
    thinking: "MOP版本管理规则：\n① 每次更新必须更新版本号\n② 保留所有历史版本\n③ 标注版本变更内容\n④ 确保现场使用的是最新版本\n⑤ 旧版本标记为'已作废'。\n使用过期版本的MOP = 违规操作。",
    pronunciation: "version 的 s 读 /ʒ/：/ˈvɜːr.ʒən/。\nV2.1 读 /ˌviː tuː pɔɪnt wʌn/。\n节奏：The M-O-P VER-sion ｜ has been up-DA-ted ｜ to V-TWO-POINT-ONE.",
    quiz: [
      { q: "SOP版本已更新至V3.0，怎么说？", a: "The SOP version has been updated to V3.0." },
      { q: "版本号怎么读？V2.1？", a: "V2.1 读 /ˌviː tuː pɔɪnt wʌn/（V + two + point + one）。字母V读字母音，数字逐个读，小数点读 point。" },
    ],
  },
  {
    id: 445,
    en: "All operators have been briefed on the changes.",
    cn: "所有操作员都已了解变更内容。",
    ipa: "/ɔːl ˈɑː.pə.reɪ.tərz hæv biːn briːft ɑːn ðə ˈtʃeɪn.dʒɪz/",
    tags: ["第445句", "MOP变更通知", "★★★★"],
    when: "MOP更新后，需要通知所有相关操作员了解变更内容，确保下次操作使用最新程序。",
    words: [
      { w: "briefed", ipa: "/briːft/", pos: "动词(过去分词)", cn: "被通报；被 briefed", memory: "① brief = 简报/通报；② briefed = 被通报/被简要告知。\nhave been briefed = 已经被通报（现在完成时被动语态）。", phonics: "brief 读 /briːf/，ed 读 /t/。注意 ie 读 /iː/。", collocations: [["briefed on", "被通报关于"], ["fully briefed", "完全了解"], ["briefing session", "通报会"]], examples: [["All staff have been briefed.", "所有员工都已了解。"], ["We need a briefing session.", "我们需要一个通报会。"]] },
    ],
    phrases: [
      { p: "have been briefed on", ipa: "/hæv biːn briːft ɑːn/", cn: "已被通报关于", why: "have been briefed on + 内容 = 已被通报/了解某内容。确保所有操作员都知道MOP的变更。" },
    ],
    grammar: [
      { q: "briefed 和 informed 有什么区别？", a: "briefed = 被通报/被简要告知（通常指简短的、重点突出的信息传达）\ninformed = 被告知（一般性的信息通知）\n✅ All operators have been briefed on the changes.（所有操作员都已了解变更 → 重点通报）\n✅ All operators have been informed.（所有操作员都已被告知 → 一般通知）\nMOP变更用 briefed，因为需要简洁高效地传达变更要点。" },
    ],
    pattern: "All + 人员 + have been briefed on + 内容",
    patternExamples: [
      { en: "All engineers have been briefed on the new procedure.", cn: "所有工程师都已了解新程序。", words: [{ w: "engineers", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }, { w: "procedure", ipa: "/prəˈsiːdʒər/", cn: "流程", phonics: "pro 读 /prə/，cedure 读 /siːdʒər/" }] },
      { en: "All shifts have been briefed.", cn: "所有班次都已通报。", words: [{ w: "shifts", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }] },
      { en: "The team has been briefed on the safety update.", cn: "团队已了解安全更新。", words: [{ w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }, { w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }] },
    ],
    thinking: "MOP变更通知流程：\n① 更新MOP → ② 标注变更内容 → ③ 召开通报会（briefing）→ ④ 所有操作员签字确认 → ⑤ 旧版本回收 → ⑥ 新版本分发。\n未通报的变更不能使用。",
    pronunciation: "briefed 的 ie 读 /iː/：/briːft/。\nchanges 读 /ˈtʃeɪn.dʒɪz/。\n节奏：ALL OP-er-a-tors ｜ have been BRIEFED ｜ on the CHANG-es.",
    quiz: [
      { q: "所有工程师都已了解新程序，怎么说？", a: "All engineers have been briefed on the new procedure." },
      { q: "briefed 和 informed 有什么区别？", a: "briefed = 被通报/被简要告知（简短、重点突出）；informed = 被告知（一般性通知）。MOP变更用 briefed。" },
    ],
  },
  {
    id: 446,
    en: "The next MOP is scheduled for tomorrow.",
    cn: "下一个MOP安排在明天。",
    ipa: "/ðə nɛkst ˌɛm.oʊˈpiː ɪz ˈʃɛd.juːld fɔːr təˈmɒr.oʊ/",
    tags: ["第446句", "MOP计划", "★★★★"],
    when: "当前MOP完成后，告知下一个MOP的计划安排。",
    words: [
      { w: "scheduled", ipa: "/ˈʃɛd.juːld/", pos: "形容词/过去分词", cn: "已安排的；已计划的", memory: "① schedule = 安排/计划；② scheduled = 已安排的/已计划的。\nis scheduled for = 已安排在…（时间）。", phonics: "sched 读 /ʃɛd/，uled 读 /juːld/。注意 sch 读 /ʃ/。", collocations: [["scheduled for", "安排在"], ["scheduled maintenance", "计划性维护"], ["as scheduled", "按计划"]], examples: [["The maintenance is scheduled for Monday.", "维护安排在周一。"], ["Everything went as scheduled.", "一切按计划进行。"]] },
    ],
    phrases: [
      { p: "is scheduled for", ipa: "/ɪz ˈʃɛd.juːld fɔːr/", cn: "已安排在", why: "is scheduled for + 时间 = 已安排在某时间。表示下一个MOP的计划时间。" },
    ],
    grammar: [
      { q: "scheduled 和 planned 有什么区别？", a: "scheduled = 已排期的（有明确时间安排）\nplanned = 已计划的（有方案但可能没有具体时间）\n✅ The MOP is scheduled for tomorrow.（MOP安排在明天 → 有明确时间）\n✅ The MOP is planned.（MOP已计划 → 有方案但时间未定）\n已确定时间的用 scheduled。" },
    ],
    pattern: "The next + 事项 + is scheduled for + 时间",
    patternExamples: [
      { en: "The next maintenance is scheduled for Friday.", cn: "下次维护安排在周五。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "The next inspection is scheduled for next week.", cn: "下次检查安排在下周。", words: [] },
      { en: "The shutdown is scheduled for December.", cn: "停机安排在12月。", words: [] },
    ],
    thinking: "MOP排期管理：\n① 当前MOP完成 → ② 确认下一个MOP → ③ 确认时间安排 → ④ 确认人员安排 → ⑤ 确认前置条件。\n交接时需要告知下一班即将执行的MOP。",
    pronunciation: "scheduled 的 sch 读 /ʃ/：/ˈʃɛd.juːld/。\ntomorrow 读 /təˈmɒr.oʊ/。\n节奏：The NEXT M-O-P ｜ is SCHED-uled ｜ for to-MOR-row.",
    quiz: [
      { q: "下次维护安排在周五，怎么说？", a: "The next maintenance is scheduled for Friday." },
      { q: "scheduled 和 planned 有什么区别？", a: "scheduled = 已排期的（有明确时间）；planned = 已计划的（有方案但时间可能未定）。已确定时间的用 scheduled。" },
    ],
  },
  {
    id: 447,
    en: "Please ensure all tools are returned.",
    cn: "请确保所有工具已归还。",
    ipa: "/pliːz ɪnˈʃʊr ɔːl tuːlz ɑːr rɪˈtɜːrnd/",
    tags: ["第447句", "MOP工具归还", "★★★★"],
    when: "MOP执行完成后，需要确认所有工具已归还至工具库，不能遗留在设备区域。",
    words: [
      { w: "ensure", ipa: "/ɪnˈʃʊr/", pos: "动词", cn: "确保", memory: "① en- = 使…；② sure = 确定的。\nensure = 确保/保证（使某事确定发生）。", phonics: "en 读 /ɪn/，sure 读 /ʃʊr/，重音在第二音节。", collocations: [["ensure safety", "确保安全"], ["ensure compliance", "确保合规"], ["ensure completion", "确保完成"]], examples: [["Please ensure the door is locked.", "请确保门已锁好。"], ["Ensure all steps are completed.", "确保所有步骤已完成。"]] },
      { w: "returned", ipa: "/rɪˈtɜːrnd/", pos: "动词(过去分词)", cn: "被归还；被退回", memory: "① return = 归还/返回；② returned = 被归还。\n工具必须归还至指定位置，不能留在设备区域。", phonics: "re 读 /rɪ/，turn 读 /tɜːrn/，ed 读 /d/。", collocations: [["tools returned", "工具已归还"], ["returned to store", "归还仓库"], ["return the equipment", "归还设备"]], examples: [["All tools must be returned.", "所有工具必须归还。"], ["Please return the key.", "请归还钥匙。"]] },
    ],
    phrases: [
      { p: "ensure all tools are returned", ipa: "/ɪnˈʃʊr ɔːl tuːlz ɑːr rɪˈtɜːrnd/", cn: "确保所有工具已归还", why: "ensure + all tools are returned = 确保所有工具已归还。MOP完成后工具清点是安全要求。" },
    ],
    grammar: [
      { q: "ensure 和 make sure 有什么区别？", a: "ensure = 确保（正式用语，书面语）\nmake sure = 确保（口语化）\n✅ Please ensure all tools are returned.（请确保所有工具已归还 → 正式）\n✅ Make sure you return all tools.（确保你归还所有工具 → 口语）\nMOP文档用 ensure。" },
    ],
    pattern: "Please ensure + 从句",
    patternExamples: [
      { en: "Please ensure the area is clean.", cn: "请确保区域已清理干净。", words: [{ w: "area", ipa: "/ˈeəriə/", cn: "区域", phonics: "a 读 /eə/，rea 读 /riə/" }] },
      { en: "Ensure all personnel have left.", cn: "确保所有人员已离开。", words: [] },
      { en: "Please ensure the LOTO is removed.", cn: "请确保LOTO已解除。", words: [] },
    ],
    thinking: "MOP完成后工具清点：\n① 清点工具数量 → ② 核对工具清单 → ③ 确认无工具遗留 → ④ 归还至工具库 → ⑤ 签字确认。\n工具遗留在设备区域 = 严重安全隐患。",
    pronunciation: "ensure 重音在第二音节：/ɪnˈʃʊr/。\nreturned 的 ur 读 /ɜːr/。\n节奏：Please en-SURE ｜ all TOOLS ｜ are re-TURNED.",
    quiz: [
      { q: "请确保区域已清理干净，怎么说？", a: "Please ensure the area is clean." },
      { q: "ensure 和 make sure 有什么区别？", a: "ensure = 确保（正式用语）；make sure = 确保（口语化）。MOP文档用 ensure。" },
    ],
  },
  {
    id: 448,
    en: "The work area has been cleaned up.",
    cn: "工作区域已经清理干净。",
    ipa: "/ðə wɜːrk ˈɛr.i.ə hæz biːn kliːnd ʌp/",
    tags: ["第448句", "MOP现场清理", "★★★★"],
    when: "MOP执行完成后，确认工作区域已清理干净，恢复原状。",
    words: [
      { w: "cleaned up", ipa: "/kliːnd ʌp/", pos: "动词短语(过去分词)", cn: "被清理干净", memory: "① clean = 清洁；② clean up = 清理干净/整理。\nhas been cleaned up = 已经被清理干净。\n工作区域清理包括：清除杂物、擦拭设备、恢复围栏、移除警示标识。", phonics: "clean 读 /kliːn/，ed 读 /d/，up 读 /ʌp/。", collocations: [["clean up the area", "清理区域"], ["cleaned up", "已清理干净"], ["site cleanup", "现场清理"]], examples: [["The area has been cleaned up.", "区域已清理干净。"], ["Please clean up after work.", "工作后请清理现场。"]] },
    ],
    phrases: [
      { p: "has been cleaned up", ipa: "/hæz biːn kliːnd ʌp/", cn: "已经被清理干净", why: "has been + cleaned up = 已经被清理干净。MOP完成后的现场恢复是标准要求。" },
    ],
    grammar: [
      { q: "clean up 和 tidy up 有什么区别？", a: "clean up = 清理干净（清除脏污、杂物）\ntidy up = 整理整齐（使物品归位、排列整齐）\n✅ The work area has been cleaned up.（工作区域已清理干净 → 清除杂物）\n✅ The tool room has been tidied up.（工具室已整理整齐 → 工具归位）\nMOP完成后用 clean up，因为需要清除所有施工痕迹。" },
    ],
    pattern: "The + 区域 + has been cleaned up",
    patternExamples: [
      { en: "The data hall has been cleaned up.", cn: "机房已清理干净。", words: [{ w: "data", ipa: "/ˈdeɪtə/", cn: "数据", phonics: "da 读 /deɪ/，ta 读 /tə/" }] },
      { en: "The switchgear room has been cleaned up.", cn: "配电室已清理干净。", words: [{ w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "All areas have been cleaned up.", cn: "所有区域都已清理干净。", words: [{ w: "areas", ipa: "/ˈeəriə/", cn: "区域", phonics: "a 读 /eə/，rea 读 /riə/" }] },
    ],
    thinking: "MOP现场清理检查清单：\n① 工具已全部归还 ② 材料废料已清除 ③ 设备表面已擦拭 ④ 围栏已恢复 ⑤ 警示标识已移除 ⑥ 地面已清扫 ⑦ 通道已畅通。\n现场未清理干净 = 交接不合格。",
    pronunciation: "cleaned 读 /kliːnd/，ea 读 /iː/。\narea 读 /ˈɛr.i.ə/。\n节奏：The WORK AR-e-a ｜ has been CLEANED UP.",
    quiz: [
      { q: "机房已清理干净，怎么说？", a: "The data hall has been cleaned up." },
      { q: "MOP现场清理需要检查哪些内容？", a: "① 工具已归还 ② 废料已清除 ③ 设备已擦拭 ④ 围栏已恢复 ⑤ 警示标识已移除 ⑥ 地面已清扫 ⑦ 通道已畅通。" },
    ],
  },
  {
    id: 449,
    en: "The MOP execution is now complete.",
    cn: "MOP执行现已完成。",
    ipa: "/ðə ˌɛm.oʊˈpiː ˌɛk.sɪˈkjuː.ʃən ɪz naʊ kəmˈpliːt/",
    tags: ["第449句", "MOP完成宣告", "★★★★★"],
    when: "正式宣告MOP执行完成，所有步骤、确认、记录、清理工作都已结束。",
    words: [
      { w: "execution", ipa: "/ˌɛk.sɪˈkjuː.ʃən/", pos: "名词", cn: "执行", memory: "① execute = 执行；② execution = 执行（名词）。\nMOP execution = MOP执行，指整个MOP操作过程。", phonics: "ex 读 /ɛk/，e 读 /ɪ/，cu 读 /kjuː/，tion 读 /ʃən/，重音在第三音节。", collocations: [["MOP execution", "MOP执行"], ["execution plan", "执行计划"], ["execution time", "执行时间"]], examples: [["The execution went smoothly.", "执行进行得很顺利。"], ["Execution time was 2 hours.", "执行时间为2小时。"]] },
      { w: "complete", ipa: "/kəmˈpliːt/", pos: "形容词", cn: "完成的", memory: "① complete = 完成的/完整的（形容词）。\nis complete = 已完成。与 finished 类似但更正式。", phonics: "com 读 /kəm/，plete 读 /pliːt/，重音在第二音节。", collocations: [["now complete", "现已完成"], ["fully complete", "完全完成"], ["complete and signed", "完成并签字"]], examples: [["The work is now complete.", "工作现已完成。"], ["The MOP is complete.", "MOP已完成。"]] },
    ],
    phrases: [
      { p: "is now complete", ipa: "/ɪz naʊ kəmˈpliːt/", cn: "现已完成", why: "is + now + complete = 现已完成。now 强调'此刻'完成，是正式宣告用语。" },
    ],
    grammar: [
      { q: "complete 和 finished 有什么区别？", a: "complete = 完成的（更正式，强调完整性）\nfinished = 完成的（更口语化，强调结束）\n✅ The MOP execution is now complete.（MOP执行现已完成 → 正式宣告）\n✅ We are finished.（我们完成了 → 口语）\n正式宣告用 complete。" },
    ],
    pattern: "The + 事项 + is now complete",
    patternExamples: [
      { en: "The inspection is now complete.", cn: "检查现已完成。", words: [] },
      { en: "The maintenance is now complete.", cn: "维护现已完成。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "The handover is now complete.", cn: "交接现已完成。", words: [{ w: "handover", ipa: "/ˈhændoʊvər/", cn: "交接", phonics: "hand 读 /hænd/，over 读 /oʊvər/" }] },
    ],
    thinking: "MOP执行完成的标志：\n① 所有步骤已执行并签字 ② 所有读数已记录 ③ 偏差已记录（如有） ④ 照片已拍摄 ⑤ 工具已归还 ⑥ 现场已清理 ⑦ LOTO已解除（如适用） ⑧ MOP已提交。\n全部满足后才能宣告完成。",
    pronunciation: "execution 重音在第三音节：/ˌɛk.sɪˈkjuː.ʃən/。\ncomplete 重音在第二音节：/kəmˈpliːt/。\n节奏：The M-O-P ex-e-CU-tion ｜ is NOW com-PLETE.",
    quiz: [
      { q: "检查现已完成，怎么说？", a: "The inspection is now complete." },
      { q: "MOP执行完成的标志有哪些？", a: "① 所有步骤已签字 ② 读数已记录 ③ 偏差已记录 ④ 照片已拍 ⑤ 工具已归还 ⑥ 现场已清理 ⑦ LOTO已解除 ⑧ MOP已提交。" },
    ],
  },
  {
    id: 450,
    en: "Now let's move on to emergency procedures.",
    cn: "现在我们开始进入应急操作程序。",
    ipa: "/naʊ lɛts muːv ɑːn tuː ɪˈmɜːr.dʒən.si prəˈsiː.dʒərz/",
    tags: ["第450句", "MOP转场EOP", "★★★★★"],
    when: "MOP执行部分全部完成，转入下一环节——EOP应急操作程序。这是转场句。",
    words: [
      { w: "emergency procedures", ipa: "/ɪˈmɜːr.dʒən.si prəˈsiː.dʒərz/", pos: "名词短语", cn: "应急操作程序（EOP）", memory: "① emergency = 紧急情况；② procedures = 程序。\nemergency procedures = EOP（Emergency Operating Procedures），是应对突发故障的操作程序。\n与MOP（计划性操作）不同，EOP是应急性的、非计划的操作。", phonics: "emergency 重音在第二音节：/ɪˈmɜːr.dʒən.si/；procedures 重音在第二音节：/prəˈsiː.dʒərz/。", collocations: [["emergency procedures", "应急操作程序"], ["emergency response", "应急响应"], ["emergency plan", "应急预案"]], examples: [["Follow the emergency procedures.", "遵循应急操作程序。"], ["The emergency plan is ready.", "应急预案已准备好。"]] },
      { w: "move on to", ipa: "/muːv ɑːn tuː/", pos: "动词短语", cn: "转入；进入下一个", memory: "① move = 移动；② on = 继续；③ to = 到。\nmove on to = 转入/进入下一个话题或环节。是交接和会议中的常用转场用语。", phonics: "move 读 /muːv/，on 读 /ɑːn/，to 读 /tuː/。", collocations: [["move on to", "转入"], ["let's move on", "我们继续"], ["move on to the next topic", "进入下一个话题"]], examples: [["Let's move on to the next item.", "我们进入下一项。"], ["Now let's move on to alarms.", "现在我们开始进入告警部分。"]] },
    ],
    phrases: [
      { p: "move on to", ipa: "/muːv ɑːn tuː/", cn: "转入", why: "move on to + 下一环节 = 转入某环节。交接和培训中的标准转场用语。" },
    ],
    grammar: [
      { q: "Now let's 和 Let's 有什么区别？", a: "Now let's = 现在我们…（有转场感，表示从上一环节转入新环节）\nLet's = 让我们…（直接提议）\n✅ Now let's move on to emergency procedures.（现在我们进入应急程序 → 有转场感）\n✅ Let's start the review.（我们开始总结 → 直接提议）\n转场用 Now let's。" },
    ],
    pattern: "Now let's move on to + 下一环节",
    patternExamples: [
      { en: "Now let's move on to the alarm review.", cn: "现在我们开始进入告警回顾。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
      { en: "Now let's move on to the next section.", cn: "现在我们进入下一部分。", words: [] },
      { en: "Now let's move on to EOP.", cn: "现在我们开始进入EOP。", words: [] },
    ],
    thinking: "MOP vs EOP：\n① MOP = 计划性操作（提前准备、审批、按步骤执行）\n② EOP = 应急操作（突发故障、快速响应、按预案执行）\nMOP是'正常情况下的操作'，EOP是'异常情况下的应急'。\n交接中先学MOP（正常操作），再学EOP（应急操作），逻辑递进。",
    pronunciation: "emergency 重音在第二音节：/ɪˈmɜːr.dʒən.si/。\nprocedures 的 ce 读 /siː/。\n节奏：Now let's MOVE ON ｜ to e-MER-gen-cy ｜ pro-CE-dures.",
    quiz: [
      { q: "现在我们开始进入告警回顾，怎么说？", a: "Now let's move on to the alarm review." },
      { q: "MOP和EOP有什么区别？", a: "MOP = 计划性操作（提前准备、审批、按步骤执行）；EOP = 应急操作（突发故障、快速响应、按预案执行）。MOP是正常操作，EOP是应急操作。" },
    ],
  },
];

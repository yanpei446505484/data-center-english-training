// EXPORTS: MOCK_SENTENCES_PART8B

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART8B: ISentence[] = [
  {
    id: 226,
    en: "Please arrange a temporary replacement.",
    cn: "请安排一名临时替班人员。",
    ipa: "/pliːz əˈreɪndʒ ə ˈtɛm.pər.ər.i rɪˈpleɪs.mənt/",
    tags: ["第226句", "人员安排", "★★★★★"],
    when: "当发现有人缺勤且无法及时到岗时，需要立即安排临时替班人员，确保岗位不空缺。",
    words: [
      { w: "arrange", ipa: "/əˈreɪndʒ/", pos: "动词", cn: "安排；组织", memory: "① ar- = ad-（朝向）；② range = 排列/范围 → 排列好 → 安排。\narrange 强调有条理地组织安排，比 organize 更具体。", phonics: "ar 读 /ə/，range 读 /ˈreɪndʒ/，重音在第二音节。", collocations: [["arrange a meeting", "安排会议"], ["arrange a replacement", "安排替班"], ["arrange transportation", "安排交通"]], examples: [["Please arrange a meeting for tomorrow.", "请安排明天的会议。"], ["We need to arrange a replacement for him.", "我们需要为他安排替班。"]] },
      { w: "temporary", ipa: "/ˈtɛm.pər.ər.i/", pos: "形容词", cn: "临时的；暂时的", memory: "① temp- = 时间（拉丁语 tempus）；② -orary = 与…有关的 → 与时间有关的 → 暂时的。\n与 permanent（永久的）相对。", phonics: "tem 读 /tɛm/，po 读 /pər/，rary 读 /ər.i/，重音在第一音节。", collocations: [["temporary replacement", "临时替班"], ["temporary solution", "临时方案"], ["temporary staff", "临时员工"]], examples: [["This is only a temporary solution.", "这只是临时方案。"], ["We need temporary coverage for this shift.", "我们需要这个班的临时顶班。"]] },
      { w: "replacement", ipa: "/rɪˈpleɪs.mənt/", pos: "名词", cn: "替班人员；替换", memory: "① re- = 再次；② place = 放置；③ -ment = 名词后缀 → 再次放置 → 替换。\nreplacement 可指人或物，这里指替班的人。", phonics: "re 读 /rɪ/，place 读 /ˈpleɪs/，ment 读 /mənt/，重音在第二音节。", collocations: [["find a replacement", "找到替班"], ["hire a replacement", "招聘替班"], ["replacement parts", "替换零件"]], examples: [["We need to find a replacement quickly.", "我们需要尽快找到替班。"], ["The replacement arrived at 8 AM.", "替班人员早上8点到了。"]] },
    ],
    phrases: [
      { p: "temporary replacement", ipa: "/ˈtɛm.pər.ər.i rɪˈpleɪs.mənt/", cn: "临时替班人员", why: "temporary 修饰 replacement，强调这不是长期安排，只是应急顶班。交接时用此表达让接班人知道人员变动是暂时的。" },
    ],
    grammar: [
      { q: "arrange 后面可以直接跟名词吗？", a: "可以。arrange 是及物动词，后面可直接跟名词作宾语。\n✅ Please arrange a replacement.（请安排替班）\n✅ Please arrange a meeting.（请安排会议）\n也可以跟 for + 人：\n✅ Please arrange a replacement for John.（请为 John 安排替班）" },
    ],
    pattern: "Please arrange + a temporary replacement (+ for + 人)",
    patternExamples: [
      { en: "Please arrange a temporary replacement for the night shift.", cn: "请为夜班安排临时替班。", words: [{ w: "replacement", ipa: "/rɪˈpleɪs/", cn: "更换", phonics: "re 读 /rɪ/，place 读 /pleɪs/" }, { w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }] },
      { en: "Please arrange a temporary replacement for David.", cn: "请为 David 安排临时替班。", words: [{ w: "replacement", ipa: "/rɪˈpleɪs/", cn: "更换", phonics: "re 读 /rɪ/，place 读 /pleɪs/" }] },
      { en: "We need to arrange a temporary replacement immediately.", cn: "我们需要立即安排临时替班。", words: [{ w: "replacement", ipa: "/rɪˈpleɪs/", cn: "更换", phonics: "re 读 /rɪ/，place 读 /pleɪs/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
    ],
    thinking: "人员缺勤时的应急处理顺序：\n① 确认缺勤（223句）→ ② 联系确认（224-225句）→ ③ 安排替班（本句）→ ④ 重新分配工作（228句）。\n安排替班是管理者的核心职责之一，需要在交接时明确告知接班人。",
    pronunciation: "arrange 的 a 读 /ə/，不是 /eɪ/。\ntemporary 重音在第一音节：/ˈtɛm.pər.ər.i/。\nreplacement 重音在第二音节：/rɪˈpleɪs.mənt/。\n节奏：Please ar-RANGE ｜ a TEM-po-rar-y ｜ re-PLACE-ment.",
    quiz: [
      { q: "请为夜班安排临时替班，怎么说？", a: "Please arrange a temporary replacement for the night shift." },
      { q: "temporary 和 permanent 是什么关系？", a: "反义词。temporary = 临时的/暂时的；permanent = 永久的/长期的。替班通常是 temporary，正式招聘是 permanent。" },
    ],
  },
  {
    id: 227,
    en: "We are one engineer short today.",
    cn: "今天少一名工程师。",
    ipa: "/wiː ɑː wʌn ˌen.dʒɪˈnɪə ʃɔːt təˈdeɪ/",
    tags: ["第227句", "人员安排", "★★★★★"],
    when: "安排完替班后，向接班人说明今天的人员缺口情况，让接班人知道今天人手紧张。",
    words: [
      { w: "one engineer short", ipa: "/wʌn ˌen.dʒɪˈnɪə ʃɔːt/", pos: "形容词短语", cn: "少一名工程师", memory: "be + 数量 + 人/物 + short 表示人员或数量不足。描述具体缺少几个人时，这一结构自然、简洁。", phonics: "engineer 重音在最后一个音节；short 读 /ʃɔːt/。", collocations: [["one engineer short", "少一名工程师"], ["two technicians short", "少两名技术员"], ["one person short", "少一个人"]], examples: [["We are two engineers short.", "我们少两名工程师。"], ["The night shift is one person short.", "夜班少一个人。"]] },
    ],
    phrases: [
      { p: "one engineer short", ipa: "/wʌn ˌen.dʒɪˈnɪə ʃɔːt/", cn: "少一名工程师", why: "数量 + 人/物 + short 表示具体缺少多少人员或物品。" },
    ],
    grammar: [
      { q: "为什么说 one engineer short？", a: "be + 数量 + 人/物 + short 是表示人员或数量不足的自然结构。\n✅ We are one engineer short today.（今天少一名工程师。）\n✅ We are two technicians short this week.（本周少两名技术员。）\nshort of 常用于 be short of staff/resources，不宜说 short of one engineer。" },
    ],
    pattern: "We are + 数量 + 人员 + short + 时间",
    patternExamples: [
      { en: "We are two engineers short this week.", cn: "本周我们少两名工程师。", words: [{ w: "engineers", ipa: "/ˌen.dʒɪˈnɪəz/", cn: "工程师", phonics: "en 读 /en/，gineers 重音在最后一个音节" }] },
      { en: "The night shift is one person short.", cn: "夜班少一个人。", words: [{ w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }] },
      { en: "We are fully staffed today.", cn: "今天人员配备齐全。", words: [] },
    ],
    thinking: "人员缺口汇报是交接的重要信息：\n① 说明缺口（本句）→ ② 说明影响（需要重新分配工作）→ ③ 说明应对（已安排替班或需要调整）。\n让接班人提前知道人手紧张，做好心理准备。",
    pronunciation: "engineer 重音在最后一个音节：/ˌen.dʒɪˈnɪə/。\nshort 读 /ʃɔːt/。\n节奏：We are ONE en-gi-NEER SHORT ｜ to-DAY.",
    quiz: [
      { q: "今天我们少两名工程师，怎么说？", a: "We are two engineers short today." },
      { q: "怎样自然表达具体少几名人员？", a: "使用 be + 数量 + 人员 + short，例如 We are one engineer short today." },
    ],
  },
  {
    id: 228,
    en: "Please redistribute today's workload.",
    cn: "请重新分配今天的工作。",
    ipa: "/pliːz ˌriː.dɪˈstrɪb.juːt təˈdeɪz ˈwɜːrk.loʊd/",
    tags: ["第228句", "人员安排", "★★★★★"],
    when: "说明人员缺口后，需要指示接班人重新分配工作，确保所有任务都有人负责。",
    words: [
      { w: "redistribute", ipa: "/ˌriː.dɪˈstrɪb.juːt/", pos: "动词", cn: "重新分配", memory: "① re- = 再次；② distribute = 分配 → 重新分配。\nredistribute 强调因情况变化（如人员缺勤）而重新调整分配。", phonics: "re 读 /riː/，dis 读 /dɪ/，trib 读 /trɪb/，ute 读 /juːt/，重音在第三音节。", collocations: [["redistribute workload", "重新分配工作量"], ["redistribute tasks", "重新分配任务"], ["redistribute resources", "重新分配资源"]], examples: [["We need to redistribute the tasks.", "我们需要重新分配任务。"], ["Please redistribute the workload evenly.", "请平均重新分配工作量。"]] },
      { w: "workload", ipa: "/ˈwɜːrk.loʊd/", pos: "名词", cn: "工作量", memory: "① work = 工作；② load = 负荷/负担 → 工作负荷 → 工作量。\nworkload 是复合词，指一个人或团队需要完成的工作总量。", phonics: "work 读 /wɜːrk/，load 读 /loʊd/，重音在第一音节。", collocations: [["heavy workload", "繁重工作量"], ["reduce workload", "减少工作量"], ["workload distribution", "工作量分配"]], examples: [["The workload is too heavy today.", "今天工作量太大了。"], ["We need to balance the workload.", "我们需要平衡工作量。"]] },
    ],
    phrases: [
      { p: "redistribute today's workload", ipa: "/ˌriː.dɪˈstrɪb.juːt təˈdeɪz ˈwɜːrk.loʊd/", cn: "重新分配今天的工作", why: "today's 作定语修饰 workload，明确是今天的工作量。redistribute 暗示原来有分配方案，现在需要调整。" },
    ],
    grammar: [
      { q: "redistribute 和 distribute 有什么区别？", a: "distribute = 分配（首次分配）\nredistribute = 重新分配（再次分配）\n✅ Please distribute the tasks.（请分配任务——首次）\n✅ Please redistribute the tasks.（请重新分配任务——调整）\n人员缺勤后用 redistribute，因为原来已经有分配方案。" },
    ],
    pattern: "Please redistribute + 名词 (+ 副词)",
    patternExamples: [
      { en: "Please redistribute the tasks evenly.", cn: "请平均重新分配任务。", words: [] },
      { en: "Please redistribute the workload among the team.", cn: "请在团队内重新分配工作量。", words: [] },
      { en: "We need to redistribute responsibilities.", cn: "我们需要重新分配职责。", words: [] },
    ],
    thinking: "人员缺勤后的工作调整：\n① 安排替班（226句）→ ② 说明缺口（227句）→ ③ 重新分配工作（本句）。\n重新分配时要考虑：每个人现有工作量、任务紧急程度、技能匹配度。",
    pronunciation: "redistribute 重音在第三音节：/ˌriː.dɪˈstrɪb.juːt/。\nworkload 重音在第一音节：/ˈwɜːrk.loʊd/。\n节奏：Please RE-dis-TRI-bute ｜ to-DAY'S ｜ WORK-load.",
    quiz: [
      { q: "请平均重新分配任务，怎么说？", a: "Please redistribute the tasks evenly." },
      { q: "distribute 和 redistribute 什么时候用？", a: "distribute = 首次分配；redistribute = 重新分配（调整）。人员缺勤、任务变化后用 redistribute。" },
    ],
  },
  {
    id: 229,
    en: "Everyone has acknowledged today's work assignments.",
    cn: "所有人都已确认今天的工作安排。",
    ipa: "/ˈɛv.ri.wʌn hæz əkˈnɒl.ɪdʒd təˈdeɪz wɜːrk əˈsaɪn.mənts/",
    tags: ["第229句", "人员安排", "★★★★★"],
    when: "工作分配完成后，向接班人确认所有人都已知晓并确认自己的任务，交接可以继续进行。",
    words: [
      { w: "acknowledge", ipa: "/əkˈnɒl.ɪdʒ/", pos: "动词", cn: "确认；承认", memory: "① ac- = ad-（朝向）；② knowledge = 知识 → 承认知道 → 确认。\nacknowledge 比 confirm 更强调'承认/认可'，常用于确认收到信息或任务。", phonics: "ac 读 /ək/，know 读 /nɒ/，ledge 读 /lɪdʒ/，重音在第二音节。", collocations: [["acknowledge receipt", "确认收到"], ["acknowledge the task", "确认任务"], ["acknowledge the assignment", "确认安排"]], examples: [["Please acknowledge this email.", "请确认收到这封邮件。"], ["Everyone has acknowledged the plan.", "所有人都已确认计划。"]] },
      { w: "assignment", ipa: "/əˈsaɪn.mənt/", pos: "名词", cn: "任务；工作安排", memory: "① assign = 分配/指派；② -ment = 名词后缀 → 被分配的东西 → 任务。\nassignment 比 task 更正式，指正式分配的工作任务。", phonics: "as 读 /ə/，sign 读 /saɪn/，ment 读 /mənt/，重音在第二音节。", collocations: [["work assignment", "工作安排"], ["complete the assignment", "完成任务"], ["assignment deadline", "任务截止日期"]], examples: [["Your assignment is to check the UPS.", "你的任务是检查UPS。"], ["All assignments have been completed.", "所有任务都已完成。"]] },
    ],
    phrases: [
      { p: "acknowledged today's work assignments", ipa: "/əkˈnɒl.ɪdʒd təˈdeɪz wɜːrk əˈsaɪn.mənts/", cn: "已确认今天的工作安排", why: "acknowledge + 名词 = 确认某事。work assignments 是复数，指多项工作安排。has acknowledged 是现在完成时，强调已完成确认动作。" },
    ],
    grammar: [
      { q: "acknowledge 和 confirm 有什么区别？", a: "acknowledge = 确认/承认（强调'我已知晓/认可'）\nconfirm = 确认（强调'核实/证实'）\n✅ Everyone has acknowledged the plan.（所有人都已确认计划——认可并接受）\n✅ Please confirm the schedule.（请确认日程——核实是否正确）\n交接时用 acknowledge，强调团队已认可并接受各自任务。" },
    ],
    pattern: "Everyone has acknowledged + 名词",
    patternExamples: [
      { en: "Everyone has acknowledged the new policy.", cn: "所有人都已确认新政策。", words: [{ w: "everyone", ipa: "/ˈɛvriwʌn/", cn: "大家", phonics: "every 读 /ɛvri/，one 读 /wʌn/" }] },
      { en: "Everyone has acknowledged their responsibilities.", cn: "所有人都已确认自己的职责。", words: [{ w: "everyone", ipa: "/ˈɛvriwʌn/", cn: "大家", phonics: "every 读 /ɛvri/，one 读 /wʌn/" }] },
      { en: "Has everyone acknowledged the safety briefing?", cn: "所有人都已确认安全交底了吗？", words: [{ w: "everyone", ipa: "/ˈɛvriwʌn/", cn: "大家", phonics: "every 读 /ɛvri/，one 读 /wʌn/" }, { w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }] },
    ],
    thinking: "工作分配完成的确认：\n① 分配工作 → ② 所有人确认（本句）→ ③ 交接可以继续。\n确认是闭环管理的重要环节，确保每个人都清楚自己的任务，避免遗漏。",
    pronunciation: "acknowledge 重音在第二音节：/əkˈnɒl.ɪdʒ/，注意 dge 读 /dʒ/。\nassignment 重音在第二音节：/əˈsaɪn.mənt/。\n节奏：EV-ery-one ｜ has ac-KNOWL-edged ｜ to-DAY'S ｜ WORK as-SIGN-ments.",
    quiz: [
      { q: "所有人都已确认自己的职责，怎么说？", a: "Everyone has acknowledged their responsibilities." },
      { q: "acknowledge 和 confirm 在交接时怎么用？", a: "acknowledge = 确认/认可（团队确认任务）；confirm = 核实/确认（核实信息是否正确）。交接时用 acknowledge 表示团队已认可任务，用 confirm 表示核实信息。" },
    ],
  },
  {
    id: 230,
    en: "Today's staffing level is sufficient.",
    cn: "今天的人员配置充足。",
    ipa: "/təˈdeɪz ˈstæf.ɪŋ ˈlɛv.əl ɪz ˈsʌf.ɪ.ʃənt/",
    tags: ["第230句", "人员安排", "★★★★★"],
    when: "人员安排汇报的最后，总结今天的人员配置是否充足，给接班人一个明确结论。",
    words: [
      { w: "staffing", ipa: "/ˈstæf.ɪŋ/", pos: "名词", cn: "人员配置；人员配备", memory: "① staff = 员工/人员；② -ing = 名词后缀 → 人员配备的状态。\nstaffing 指一个组织或岗位的人员配备情况。", phonics: "staff 读 /stæf/，ing 读 /ɪŋ/，重音在第一音节。", collocations: [["staffing level", "人员配置水平"], ["staffing plan", "人员配置计划"], ["adequate staffing", "充足的人员配置"]], examples: [["The staffing level is adequate.", "人员配置充足。"], ["We need to improve our staffing plan.", "我们需要改进人员配置计划。"]] },
      { w: "sufficient", ipa: "/səˈfɪʃ.ənt/", pos: "形容词", cn: "充足的；足够的", memory: "① suf- = sub-（在下面）；② fic = 做（拉丁语 facere）；③ -ient = 形容词后缀 → 在下面做支撑 → 足够的。\nsufficient 比 enough 更正式，常用于书面语。", phonics: "suf 读 /sə/，fi 读 /fɪ/，cient 读 /ʃənt/，重音在第二音节。", collocations: [["sufficient staff", "充足的人员"], ["sufficient time", "充足的时间"], ["sufficient resources", "充足的资源"]], examples: [["We have sufficient engineers.", "我们有足够的工程师。"], ["Is the time sufficient?", "时间够吗？"]] },
    ],
    phrases: [
      { p: "staffing level is sufficient", ipa: "/ˈstæf.ɪŋ ˈlɛv.əl ɪz ˈsʌf.ɪ.ʃənt/", cn: "人员配置充足", why: "staffing level = 人员配置水平；is sufficient = 是充足的。交接时用此表达给接班人一个明确结论：今天人手够。" },
    ],
    grammar: [
      { q: "sufficient 和 enough 有什么区别？", a: "sufficient = 充足的（更正式，书面语）\nenough = 足够的（更口语化）\n✅ The staffing level is sufficient.（正式，书面）\n✅ The staffing level is enough.（口语化，较少用）\n交接时用 sufficient，更专业正式。" },
    ],
    pattern: "名词 + is sufficient / insufficient",
    patternExamples: [
      { en: "The staffing level is insufficient.", cn: "人员配置不足。", words: [{ w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }] },
      { en: "The time is sufficient.", cn: "时间是充足的。", words: [] },
      { en: "The resources are sufficient.", cn: "资源是充足的。", words: [] },
    ],
    thinking: "人员安排汇报的结论：\n① 汇报值班人数（211-213句）→ ② 汇报请假/出差/加班（214-220句）→ ③ 确认排班（221-229句）→ ④ 总结人员配置（本句）。\n结论要明确：sufficient（充足）或 insufficient（不足）。",
    pronunciation: "staffing 重音在第一音节：/ˈstæf.ɪŋ/。\nsufficient 重音在第二音节：/səˈfɪʃ.ənt/，注意 ci 读 /ʃ/。\n节奏：To-DAY'S ｜ STAFF-ing ｜ LEV-el ｜ is SUF-fi-cient.",
    quiz: [
      { q: "今天的人员配置不足，怎么说？", a: "Today's staffing level is insufficient." },
      { q: "sufficient 和 enough 哪个更正式？", a: "sufficient 更正式，常用于书面语和专业场合；enough 更口语化。交接时用 sufficient。" },
    ],
  },
  {
    id: 231,
    en: "The monthly safety training will start at 2:00 p.m.",
    cn: "每月安全培训将于下午两点开始。",
    ipa: "/ðə ˈmʌnθ.li ˈseɪf.ti ˈtreɪ.nɪŋ wɪl stɑːrt æt tuː piː.ˈɛm/",
    tags: ["第231句", "培训安排", "★★★★★"],
    when: "人员安排汇报完成后，转入培训安排环节。先说明今天有什么培训活动，让接班人知道时间安排。",
    words: [
      { w: "monthly", ipa: "/ˈmʌnθ.li/", pos: "形容词", cn: "每月的", memory: "① month = 月；② -ly = 形容词后缀 → 每月的。\nmonthly 修饰 training，表示这是每月定期的培训。", phonics: "month 读 /mʌnθ/，ly 读 /li/，重音在第一音节。", collocations: [["monthly training", "每月培训"], ["monthly report", "每月报告"], ["monthly meeting", "每月会议"]], examples: [["The monthly meeting is tomorrow.", "每月会议是明天。"], ["Please submit the monthly report.", "请提交每月报告。"]] },
      { w: "safety training", ipa: "/ˈseɪf.ti ˈtreɪ.nɪŋ/", pos: "名词短语", cn: "安全培训", memory: "① safety = 安全；② training = 培训 → 安全培训。\n数据中心每月必须进行安全培训，这是合规要求。", phonics: "safety 读 /ˈseɪf.ti/，training 读 /ˈtreɪ.nɪŋ/。", collocations: [["safety training session", "安全培训课程"], ["safety training record", "安全培训记录"], ["attend safety training", "参加安全培训"]], examples: [["All staff must attend safety training.", "所有员工必须参加安全培训。"], ["Safety training is mandatory.", "安全培训是强制的。"]] },
    ],
    phrases: [
      { p: "monthly safety training", ipa: "/ˈmʌnθ.li ˈseɪf.ti ˈtreɪ.nɪŋ/", cn: "每月安全培训", why: "monthly 修饰 safety training，强调这是定期活动，不是临时安排。交接时说明定期培训，让接班人知道这是常规安排。" },
    ],
    grammar: [
      { q: "will start 和 starts 有什么区别？", a: "will start = 将开始（将来时，强调未来动作）\nstarts = 开始（一般现在时，用于固定时间表）\n✅ The training will start at 2 PM.（将开始——强调未来）\n✅ The training starts at 2 PM.（开始——固定时间表）\n交接时两者都可用，will start 更强调'即将到来'。" },
    ],
    pattern: "The + 形容词 + 名词 + will start + at + 时间",
    patternExamples: [
      { en: "The weekly meeting will start at 9 AM.", cn: "每周会议将于上午9点开始。", words: [{ w: "meeting", ipa: "/ˈmiːtɪŋ/", cn: "会议", phonics: "meet 读 /miːt/，ing 读 /ɪŋ/" }, { w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "The quarterly review will start at 3 PM.", cn: "季度评审将于下午3点开始。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "The safety drill will start at 10 AM.", cn: "安全演练将于上午10点开始。", words: [{ w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }, { w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
    ],
    thinking: "培训安排是交接的重要内容：\n① 说明培训时间和主题（本句）→ ② 说明参加要求（232句）→ ③ 说明签到要求（233句）→ ④ 说明培训主题（234-236句）。\n让接班人知道今天有什么培训活动，是否需要参加。",
    pronunciation: "monthly 重音在第一音节：/ˈmʌnθ.li/。\nsafety 读 /ˈseɪf.ti/，不是 /ˈseɪf.ti/。\n节奏：The MONTH-ly ｜ SAFE-ty ｜ TRAIN-ing ｜ will START ｜ at TWO P.M.",
    quiz: [
      { q: "每周会议将于上午9点开始，怎么说？", a: "The weekly meeting will start at 9 AM." },
      { q: "will start 和 starts 在交接时怎么用？", a: "will start = 将开始（强调未来）；starts = 开始（固定时间表）。交接时两者都可用，will start 更强调'即将到来'。" },
    ],
  },
  {
    id: 232,
    en: "All engineers must attend the training.",
    cn: "所有工程师必须参加培训。",
    ipa: "/ɔːl ˈɛn.dʒɪ.nərz mʌst əˈtɛnd ðə ˈtreɪ.nɪŋ/",
    tags: ["第232句", "培训安排", "★★★★★"],
    when: "说明培训时间后，强调参加要求——所有工程师都必须参加，这是强制性的。",
    words: [
      { w: "must", ipa: "/mʌst/", pos: "情态动词", cn: "必须", memory: "① must = 必须/一定；② 表示强烈的义务或要求。\nmust 比 should 更强制，表示没有选择余地。", phonics: "must 读 /mʌst/，注意 u 读 /ʌ/。", collocations: [["must attend", "必须参加"], ["must complete", "必须完成"], ["must follow", "必须遵守"]], examples: [["You must wear PPE.", "你必须穿戴PPE。"], ["All staff must attend.", "所有员工必须参加。"]] },
      { w: "attend", ipa: "/əˈtɛnd/", pos: "动词", cn: "参加；出席", memory: "① at- = ad-（朝向）；② tend = 伸展（拉丁语 tendere）→ 朝向某处伸展 → 出席。\nattend 比 join 更正式，常用于正式场合如培训、会议。", phonics: "at 读 /ə/，tend 读 /tɛnd/，重音在第二音节。", collocations: [["attend a meeting", "参加会议"], ["attend training", "参加培训"], ["attend a course", "参加课程"]], examples: [["Please attend the meeting.", "请参加会议。"], ["All staff must attend the training.", "所有员工必须参加培训。"]] },
    ],
    phrases: [
      { p: "must attend the training", ipa: "/mʌst əˈtɛnd ðə ˈtreɪ.nɪŋ/", cn: "必须参加培训", why: "must + 动词原形 = 必须做某事。attend the training = 参加培训。交接时用 must 强调这是强制要求，不是可选的。" },
    ],
    grammar: [
      { q: "must 和 should 有什么区别？", a: "must = 必须（强制，没有选择）\nshould = 应该（建议，可以选择）\n✅ All engineers must attend.（必须参加——强制）\n✅ All engineers should attend.（应该参加——建议）\n安全培训用 must，因为这是合规要求，必须参加。" },
    ],
    pattern: "All + 名词 + must + 动词原形 + 名词",
    patternExamples: [
      { en: "All staff must complete the training.", cn: "所有员工必须完成培训。", words: [] },
      { en: "All contractors must sign in.", cn: "所有承包商必须签到。", words: [{ w: "contractors", ipa: "/ˈkɒntræktər/", cn: "承包商", phonics: "con 读 /kɒn/，tractor 读 /træktər/" }, { w: "sign", ipa: "/saɪn/", cn: "签字", phonics: "sign 读 /saɪn/" }] },
      { en: "All engineers must wear PPE.", cn: "所有工程师必须穿戴PPE。", words: [{ w: "engineers", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }] },
    ],
    thinking: "培训的强制要求：\n① 说明培训时间（231句）→ ② 强调必须参加（本句）→ ③ 说明签到要求（233句）。\n用 must 强调这是强制要求，不是可选的，确保接班人重视。",
    pronunciation: "must 读 /mʌst/，不是 /mʌst/。\nattend 重音在第二音节：/əˈtɛnd/。\n节奏：ALL EN-gi-neers ｜ MUST at-TEND ｜ the TRAIN-ing.",
    quiz: [
      { q: "所有员工必须完成培训，怎么说？", a: "All staff must complete the training." },
      { q: "must 和 should 在培训要求中怎么用？", a: "must = 必须（强制）；should = 应该（建议）。安全培训用 must，因为这是合规要求。" },
    ],
  },
  {
    id: 233,
    en: "Please sign the training attendance sheet.",
    cn: "请在培训签到表上签字。",
    ipa: "/pliːz saɪn ðə ˈtreɪ.nɪŋ əˈtɛn.dəns ʃiːt/",
    tags: ["第233句", "培训安排", "★★★★★"],
    when: "强调必须参加后，说明签到要求——需要在签到表上签字，这是培训记录的必要环节。",
    words: [
      { w: "sign", ipa: "/saɪn/", pos: "动词", cn: "签字；签名", memory: "① sign = 签名/签字；② 在文件上写下自己的名字表示确认。\nsign 是动词，signature 是名词（签名）。", phonics: "sign 读 /saɪn/，注意 g 不发音。", collocations: [["sign the document", "签署文件"], ["sign in", "签到"], ["sign out", "签退"]], examples: [["Please sign here.", "请在这里签字。"], ["Did you sign the attendance sheet?", "你签签到表了吗？"]] },
      { w: "attendance sheet", ipa: "/əˈtɛn.dəns ʃiːt/", pos: "名词短语", cn: "签到表；出勤表", memory: "① attend = 出席；② -ance = 名词后缀 → 出勤；③ sheet = 纸张 → 出勤记录表 → 签到表。\nattendance sheet 是培训、会议的必备文件。", phonics: "attendance 读 /əˈtɛn.dəns/，sheet 读 /ʃiːt/。", collocations: [["sign the attendance sheet", "签签到表"], ["attendance record", "出勤记录"], ["attendance rate", "出勤率"]], examples: [["Please sign the attendance sheet.", "请签签到表。"], ["The attendance sheet is on the table.", "签到表在桌子上。"]] },
    ],
    phrases: [
      { p: "training attendance sheet", ipa: "/ˈtreɪ.nɪŋ əˈtɛn.dəns ʃiːt/", cn: "培训签到表", why: "training 修饰 attendance sheet，明确是培训的签到表，不是会议的。交接时说明具体是哪张表。" },
    ],
    grammar: [
      { q: "sign 和 sign in 有什么区别？", a: "sign = 签字（在文件上签名）\nsign in = 签到（登记到达）\n✅ Please sign the document.（请在文件上签字）\n✅ Please sign in when you arrive.（到达时请签到）\n签到表用 sign the sheet，签到动作是 sign in。" },
    ],
    pattern: "Please sign + the + 形容词 + 名词",
    patternExamples: [
      { en: "Please sign the safety checklist.", cn: "请签安全检查表。", words: [{ w: "sign", ipa: "/saɪn/", cn: "签字", phonics: "sign 读 /saɪn/" }, { w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }] },
      { en: "Please sign the PTW document.", cn: "请签作业许可证文件。", words: [{ w: "sign", ipa: "/saɪn/", cn: "签字", phonics: "sign 读 /saɪn/" }] },
      { en: "Please sign the meeting minutes.", cn: "请签会议纪要。", words: [{ w: "sign", ipa: "/saɪn/", cn: "签字", phonics: "sign 读 /saɪn/" }, { w: "meeting", ipa: "/ˈmiːtɪŋ/", cn: "会议", phonics: "meet 读 /miːt/，ing 读 /ɪŋ/" }] },
    ],
    thinking: "培训的签到要求：\n① 说明培训时间（231句）→ ② 强调必须参加（232句）→ ③ 说明签到要求（本句）。\n签到是培训记录的重要环节，用于证明参加了培训，是合规要求。",
    pronunciation: "sign 的 g 不发音：/saɪn/。\nattendance 重音在第二音节：/əˈtɛn.dəns/。\n节奏：Please SIGN ｜ the TRAIN-ing ｜ at-TEN-dance ｜ SHEET.",
    quiz: [
      { q: "请签安全检查表，怎么说？", a: "Please sign the safety checklist." },
      { q: "sign 和 sign in 有什么区别？", a: "sign = 签字（在文件上签名）；sign in = 签到（登记到达）。签到表用 sign the sheet，签到动作是 sign in。" },
    ],
  },
  {
    id: 234,
    en: "Today's topic is electrical safety.",
    cn: "今天培训的主题是电气安全。",
    ipa: "/təˈdeɪz ˈtɒp.ɪk ɪz ɪˈlɛk.trɪ.kəl ˈseɪf.ti/",
    tags: ["第234句", "培训安排", "★★★★★"],
    when: "说明签到要求后，介绍今天培训的具体主题，让接班人知道培训内容是电气安全。",
    words: [
      { w: "topic", ipa: "/ˈtɒp.ɪk/", pos: "名词", cn: "主题；话题", memory: "① topic = 主题/话题；② 指讨论或培训的核心内容。\ntopic 比 subject 更具体，指一个具体的讨论主题。", phonics: "top 读 /tɒp/，ic 读 /ɪk/，重音在第一音节。", collocations: [["training topic", "培训主题"], ["discussion topic", "讨论主题"], ["hot topic", "热门话题"]], examples: [["Today's topic is fire safety.", "今天的主题是消防安全。"], ["What is the topic of the meeting?", "会议的主题是什么？"]] },
      { w: "electrical safety", ipa: "/ɪˈlɛk.trɪ.kəl ˈseɪf.ti/", pos: "名词短语", cn: "电气安全", memory: "① electrical = 电气的；② safety = 安全 → 电气安全。\n数据中心电气安全培训包括：UPS操作、配电柜操作、LOTO程序等。", phonics: "electrical 读 /ɪˈlɛk.trɪ.kəl/，safety 读 /ˈseɪf.ti/。", collocations: [["electrical safety training", "电气安全培训"], ["electrical safety procedures", "电气安全程序"], ["electrical hazard", "电气危险"]], examples: [["Electrical safety is very important.", "电气安全非常重要。"], ["Please follow electrical safety procedures.", "请遵守电气安全程序。"]] },
    ],
    phrases: [
      { p: "today's topic is", ipa: "/təˈdeɪz ˈtɒp.ɪk ɪz/", cn: "今天的主题是", why: "today's 作定语修饰 topic，明确是今天的培训主题。is 后面跟具体主题内容。交接时用此句型介绍培训主题。" },
    ],
    grammar: [
      { q: "topic 和 subject 有什么区别？", a: "topic = 主题（更具体，指一个讨论点）\nsubject = 科目/主题（更广泛，指一个学科或领域）\n✅ Today's topic is electrical safety.（今天的主题是电气安全——具体）\n✅ Safety is an important subject.（安全是一个重要科目——广泛）\n培训时用 topic，因为每次培训有一个具体主题。" },
    ],
    pattern: "时间 + topic + is + 主题内容",
    patternExamples: [
      { en: "Tomorrow's topic is fire protection.", cn: "明天的主题是消防系统。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "protection", ipa: "/prəˈtɛkʃən/", cn: "保护", phonics: "pro 读 /prə/，tection 读 /tɛkʃən/" }] },
      { en: "Next week's topic is emergency response.", cn: "下周的主题是应急响应。", words: [{ w: "emergency", ipa: "/ɪˈmɜːrdʒənsi/", cn: "紧急", phonics: "e 读 /ɪ/，mergency 读 /mɜːrdʒənsi/" }] },
      { en: "This month's topic is PPE usage.", cn: "本月的主题是PPE使用。", words: [] },
    ],
    thinking: "培训主题的介绍：\n① 说明培训时间（231句）→ ② 强调必须参加（232句）→ ③ 说明签到要求（233句）→ ④ 介绍主题（本句）。\n主题介绍要具体，让接班人知道培训内容是关于什么的。",
    pronunciation: "topic 重音在第一音节：/ˈtɒp.ɪk/。\nelectrical 重音在第二音节：/ɪˈlɛk.trɪ.kəl/。\n节奏：To-DAY'S ｜ TOP-ic ｜ is e-LEC-tri-cal ｜ SAFE-ty.",
    quiz: [
      { q: "明天的主题是消防系统，怎么说？", a: "Tomorrow's topic is fire protection." },
      { q: "topic 和 subject 在培训时怎么用？", a: "topic = 主题（具体）；subject = 科目（广泛）。培训时用 topic，因为每次培训有一个具体主题。" },
    ],
  },
  {
    id: 235,
    en: "Tomorrow's topic is fire protection.",
    cn: "明天培训的主题是消防系统。",
    ipa: "/təˈmɒr.oʊz ˈtɒp.ɪk ɪz ˈfaɪər prəˈtɛk.ʃən/",
    tags: ["第235句", "培训安排", "★★★★"],
    when: "介绍完今天的主题后，预告明天的培训主题，让接班人提前知道后续安排。",
    words: [
      { w: "fire protection", ipa: "/ˈfaɪər prəˈtɛk.ʃən/", pos: "名词短语", cn: "消防系统；消防保护", memory: "① fire = 火；② protection = 保护 → 消防保护 → 消防系统。\nfire protection 包括：烟感、喷淋、灭火器、消防栓等。", phonics: "fire 读 /ˈfaɪər/，protection 读 /prəˈtɛk.ʃən/。", collocations: [["fire protection system", "消防系统"], ["fire protection training", "消防培训"], ["fire protection inspection", "消防检查"]], examples: [["Fire protection is critical.", "消防系统至关重要。"], ["The fire protection system is working.", "消防系统运行正常。"]] },
    ],
    phrases: [
      { p: "tomorrow's topic is", ipa: "/təˈmɒr.oʊz ˈtɒp.ɪk ɪz/", cn: "明天的主题是", why: "tomorrow's 作定语修饰 topic，明确是明天的培训主题。交接时预告后续培训安排，让接班人提前准备。" },
    ],
    grammar: [
      { q: "fire protection 和 fire safety 有什么区别？", a: "fire protection = 消防系统（侧重设备和系统）\nfire safety = 消防安全（侧重知识和行为）\n✅ Fire protection system（消防系统——设备）\n✅ Fire safety training（消防安全培训——知识）\n培训主题用 fire protection，因为包括系统操作。" },
    ],
    pattern: "Tomorrow's topic is + 主题内容",
    patternExamples: [
      { en: "Tomorrow's topic is UPS maintenance.", cn: "明天的主题是UPS维护。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "Tomorrow's topic is emergency evacuation.", cn: "明天的主题是紧急疏散。", words: [{ w: "emergency", ipa: "/ɪˈmɜːrdʒənsi/", cn: "紧急", phonics: "e 读 /ɪ/，mergency 读 /mɜːrdʒənsi/" }] },
      { en: "Tomorrow's topic is first aid.", cn: "明天的主题是急救。", words: [] },
    ],
    thinking: "培训主题的预告：\n① 今天的主题（234句）→ ② 明天的主题（本句）→ ③ 下周的主题（236句）。\n预告后续安排让接班人提前知道，做好准备。",
    pronunciation: "tomorrow 读 /təˈmɒr.oʊ/，重音在第二音节。\nfire 读 /ˈfaɪər/，protection 重音在第二音节：/prəˈtɛk.ʃən/。\n节奏：To-MOR-row's ｜ TOP-ic ｜ is FIRE ｜ pro-TEC-tion.",
    quiz: [
      { q: "明天的主题是紧急疏散，怎么说？", a: "Tomorrow's topic is emergency evacuation." },
      { q: "fire protection 和 fire safety 有什么区别？", a: "fire protection = 消防系统（设备）；fire safety = 消防安全（知识）。培训主题用 fire protection。" },
    ],
  },
  {
    id: 236,
    en: "Next week's topic is emergency response.",
    cn: "下周培训的主题是应急响应。",
    ipa: "/nɛkst wiːks ˈtɒp.ɪk ɪz ɪˈmɜːr.dʒən.si rɪˈspɒns/",
    tags: ["第236句", "培训安排", "★★★★"],
    when: "预告完明天的主题后，继续预告下周的培训主题，让接班人了解更长期的培训安排。",
    words: [
      { w: "emergency response", ipa: "/ɪˈmɜːr.dʒən.si rɪˈspɒns/", pos: "名词短语", cn: "应急响应", memory: "① emergency = 紧急情况；② response = 响应/反应 → 应急响应。\nemergency response 包括：火灾、停电、漏水等紧急情况的处理流程。", phonics: "emergency 读 /ɪˈmɜːr.dʒən.si/，response 读 /rɪˈspɒns/。", collocations: [["emergency response plan", "应急响应计划"], ["emergency response team", "应急响应团队"], ["emergency response training", "应急响应培训"]], examples: [["Emergency response is critical.", "应急响应至关重要。"], ["Please review the emergency response plan.", "请复习应急响应计划。"]] },
    ],
    phrases: [
      { p: "next week's topic is", ipa: "/nɛkst wiːks ˈtɒp.ɪk ɪz/", cn: "下周的主题是", why: "next week's 作定语修饰 topic，明确是下周的培训主题。交接时预告更长期的安排，让接班人提前准备。" },
    ],
    grammar: [
      { q: "emergency 和 urgency 有什么区别？", a: "emergency = 紧急情况（突发事件，需要立即处理）\nurgency = 紧迫性（强调时间紧迫，但不一定是突发事件）\n✅ Emergency response（应急响应——突发事件）\n✅ This task has high urgency.（这个任务紧迫性高——时间紧）\n培训主题用 emergency，因为是指突发事件处理。" },
    ],
    pattern: "Next week's topic is + 主题内容",
    patternExamples: [
      { en: "Next week's topic is generator maintenance.", cn: "下周的主题是发电机维护。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "Next week's topic is security procedures.", cn: "下周的主题是安全程序。", words: [{ w: "security", ipa: "/sɪˈkjʊrɪti/", cn: "安防", phonics: "se 读 /sɪ/，curity 读 /kjʊrɪti/" }, { w: "procedures", ipa: "/prəˈsiːdʒər/", cn: "流程", phonics: "pro 读 /prə/，cedure 读 /siːdʒər/" }] },
      { en: "Next week's topic is environmental monitoring.", cn: "下周的主题是环境监控。", words: [{ w: "monitoring", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }] },
    ],
    thinking: "培训主题的长期预告：\n① 今天的主题（234句）→ ② 明天的主题（235句）→ ③ 下周的主题（本句）。\n长期预告让接班人了解整体培训计划，提前做好准备。",
    pronunciation: "emergency 重音在第二音节：/ɪˈmɜːr.dʒən.si/。\nresponse 重音在第二音节：/rɪˈspɒns/。\n节奏：NEXT WEEK'S ｜ TOP-ic ｜ is e-MER-gen-cy ｜ re-SPONSE.",
    quiz: [
      { q: "下周的主题是发电机维护，怎么说？", a: "Next week's topic is generator maintenance." },
      { q: "emergency 和 urgency 有什么区别？", a: "emergency = 紧急情况（突发事件）；urgency = 紧迫性（时间紧）。培训主题用 emergency。" },
    ],
  },
  {
    id: 237,
    en: "Please complete the online training before Friday.",
    cn: "请在周五之前完成线上培训。",
    ipa: "/pliːz kəmˈpliːt ði ˈɒn.laɪn ˈtreɪ.nɪŋ bɪˈfɔːr ˈfraɪ.deɪ/",
    tags: ["第237句", "培训安排", "★★★★★"],
    when: "介绍完线下培训安排后，提醒线上培训的截止日期，确保所有人在规定时间内完成。",
    words: [
      { w: "complete", ipa: "/kəmˈpliːt/", pos: "动词", cn: "完成", memory: "① com- = 完全；② plete = 充满（拉丁语 plere）→ 完全充满 → 完成。\ncomplete 比 finish 更正式，强调完整地完成。", phonics: "com 读 /kəm/，plete 读 /ˈpliːt/，重音在第二音节。", collocations: [["complete the training", "完成培训"], ["complete the task", "完成任务"], ["complete the form", "填写表格"]], examples: [["Please complete the training by Friday.", "请在周五前完成培训。"], ["Have you completed the online course?", "你完成线上课了吗？"]] },
      { w: "online training", ipa: "/ˈɒn.laɪn ˈtreɪ.nɪŋ/", pos: "名词短语", cn: "线上培训", memory: "① online = 在线的；② training = 培训 → 线上培训。\nonline training 与 offline training（线下培训）相对，可以随时随地学习。", phonics: "online 读 /ˈɒn.laɪn/，training 读 /ˈtreɪ.nɪŋ/。", collocations: [["complete online training", "完成线上培训"], ["online training platform", "线上培训平台"], ["online training module", "线上培训模块"]], examples: [["Please complete the online training.", "请完成线上培训。"], ["The online training takes 2 hours.", "线上培训需要2小时。"]] },
    ],
    phrases: [
      { p: "complete the online training before Friday", ipa: "/kəmˈpliːt ði ˈɒn.laɪn ˈtreɪ.nɪŋ bɪˈfɔːr ˈfraɪ.deɪ/", cn: "在周五前完成线上培训", why: "before Friday = 在周五之前（不包括周五）。complete 强调完整地完成。交接时说明截止日期，确保按时完成。" },
    ],
    grammar: [
      { q: "before Friday 和 by Friday 有什么区别？", a: "before Friday = 在周五之前（不包括周五）\nby Friday = 在周五之前（包括周五）\n✅ Complete before Friday.（周四或之前完成）\n✅ Complete by Friday.（周五或之前完成）\n交接时用 before 或 by 都可以，by 更常用。" },
    ],
    pattern: "Please complete + 名词 + before/by + 时间",
    patternExamples: [
      { en: "Please complete the report by Monday.", cn: "请在周一前完成报告。", words: [{ w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
      { en: "Please complete the checklist before the shift ends.", cn: "请在交班前完成检查表。", words: [{ w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }] },
      { en: "Please complete the course by the end of the month.", cn: "请在月底前完成课程。", words: [] },
    ],
    thinking: "线上培训的提醒：\n① 线下培训安排（231-236句）→ ② 线上培训截止日期（本句）→ ③ 证书到期提醒（238-239句）。\n线上培训可以灵活安排时间，但有截止日期，需要及时提醒。",
    pronunciation: "complete 重音在第二音节：/kəmˈpliːt/。\nonline 重音在第一音节：/ˈɒn.laɪn/。\n节奏：Please com-PLETE ｜ the ON-line ｜ TRAIN-ing ｜ be-FORE ｜ FRI-day.",
    quiz: [
      { q: "请在周一前完成报告，怎么说？", a: "Please complete the report by Monday." },
      { q: "before Friday 和 by Friday 有什么区别？", a: "before Friday = 不包括周五；by Friday = 包括周五。交接时两者都可用，by 更常用。" },
    ],
  },
  {
    id: 238,
    en: "Your certification will expire next month.",
    cn: "你的证书将在下个月到期。",
    ipa: "/jɔːr ˌsɜːr.tɪ.fɪˈkeɪ.ʃən wɪl ɪkˈspaɪər nɛkst mʌnθ/",
    tags: ["第238句", "培训安排", "★★★★★"],
    when: "提醒完线上培训后，继续提醒证书到期情况，确保证书及时更新，避免过期。",
    words: [
      { w: "certification", ipa: "/ˌsɜːr.tɪ.fɪˈkeɪ.ʃən/", pos: "名词", cn: "资格认证；资格证书", memory: "certification 指正式资格认证或相应证书，如电工证、消防证。证书到期前需要 renew（办理续期）。", phonics: "cer-ti-fi-CA-tion，重音在第四音节。", collocations: [["professional certification", "专业资格认证"], ["certification renewal", "证书续期"], ["certification expiration", "证书到期"]], examples: [["Your certification is valid.", "你的证书仍然有效。"], ["Please renew your certification.", "请办理资格证书续期。"]] },
      { w: "expire", ipa: "/ɪkˈspaɪər/", pos: "动词", cn: "到期；过期", memory: "① ex- = 出/离开；② spire = 呼吸 → 呼出最后一口气 → 到期。\nexpire 用于证书、合同、工单等到期，与 renew（更新）相对。", phonics: "ex 读 /ɪk/，pire 读 /ˈspaɪər/，重音在第二音节。", collocations: [["expire next month", "下月到期"], ["expire soon", "即将到期"], ["certification expires", "证书到期"]], examples: [["The contract expires in June.", "合同六月到期。"], ["Your license will expire soon.", "你的执照即将到期。"]] },
    ],
    phrases: [
      { p: "certification will expire next month", ipa: "/ˌsɜːr.tɪ.fɪˈkeɪ.ʃən wɪl ɪkˈspaɪər nɛkst mʌnθ/", cn: "证书将在下个月到期", why: "will expire = 将到期（将来时）。next month = 下个月。交接时提醒证书到期时间，让接班人及时更新。" },
    ],
    grammar: [
      { q: "certification 和 certificate 有什么区别？", a: "certification = 认证（过程或资格）\ncertificate = 证书（纸质或电子文件）\n✅ Your certification is valid.（你的认证有效——资格）\n✅ Please show your certificate.（请出示你的证书——文件）\n交接时用 certification，强调认证资格。" },
    ],
    pattern: "名词 + will expire + 时间",
    patternExamples: [
      { en: "Your license will expire in March.", cn: "你的执照三月到期。", words: [] },
      { en: "The contract will expire next year.", cn: "合同明年到期。", words: [] },
      { en: "Your certification will expire soon.", cn: "你的证书即将到期。", words: [] },
    ],
    thinking: "证书到期的提醒：\n① 线上培训截止日期（237句）→ ② 证书到期提醒（本句）→ ③ 证书续期建议（239句）。\n证书到期会影响工作资格，需要及时提醒并督促续期。",
    pronunciation: "certification 重音在第四音节：/ˌsɜːr.tɪ.fɪˈkeɪ.ʃən/。\nexpire 重音在第二音节：/ɪkˈspaɪər/。\n节奏：Your CER-ti-fi-CA-tion ｜ will ex-PIRE ｜ NEXT MONTH.",
    quiz: [
      { q: "你的执照三月到期，怎么说？", a: "Your license will expire in March." },
      { q: "certification 和 certificate 有什么区别？", a: "certification = 认证（资格）；certificate = 证书（文件）。交接时用 certification。" },
    ],
  },
  {
    id: 239,
    en: "Please renew your certification as soon as possible.",
    cn: "请尽快办理资格证书续期。",
    ipa: "/pliːz rɪˈnjuː jɔːr ˌsɜːr.tɪ.fɪˈkeɪ.ʃən æz suːn æz ˈpɒs.ə.bəl/",
    tags: ["第239句", "培训安排", "★★★★★"],
    when: "提醒证书到期后，给出明确建议——尽快办理资格证书续期，确保不影响工作资格。",
    words: [
      { w: "renew", ipa: "/rɪˈnjuː/", pos: "动词", cn: "续期；续办", memory: "renew 用于证书、执照、合同、订阅等到期后的续期或续办。", phonics: "re 读 /rɪ/，new 读 /ˈnjuː/，重音在第二音节。", collocations: [["renew certification", "办理认证续期"], ["renew a contract", "续签合同"], ["renew a subscription", "续订服务"]], examples: [["Please renew your license.", "请办理执照续期。"], ["I need to renew my passport.", "我需要续办护照。"]] },
      { w: "as soon as possible", ipa: "/æz suːn æz ˈpɒs.ə.bəl/", pos: "副词短语", cn: "尽快", memory: "① as...as = 和…一样；② soon = 快；③ possible = 可能的 → 和可能的一样快 → 尽快。\n常缩写为 ASAP，但口语中用完整表达更正式。", phonics: "as 读 /æz/，soon 读 /suːn/，possible 读 /ˈpɒs.ə.bəl/。", collocations: [["as soon as possible", "尽快"], ["complete ASAP", "尽快完成"], ["reply ASAP", "尽快回复"]], examples: [["Please reply as soon as possible.", "请尽快回复。"], ["Complete the task as soon as possible.", "尽快完成任务。"]] },
    ],
    phrases: [
      { p: "renew your certification as soon as possible", ipa: "/rɪˈnjuː jɔːr ˌsɜːr.tɪ.fɪˈkeɪ.ʃən æz suːn æz ˈpɒs.ə.bəl/", cn: "尽快办理资格证书续期", why: "renew 在证书语境中表示办理续期，不只是一般的信息更新。" },
    ],
    grammar: [
      { q: "renew 和 update 有什么区别？", a: "renew = 续期或续办（有效期届满前后延长有效性）\nupdate = 更新内容或版本\n✅ Renew your certification.（办理资格认证续期。）\n✅ Update your information.（更新信息。）\n证书到期用 renew，不用 update。" },
    ],
    pattern: "Please renew + 名词 + as soon as possible",
    patternExamples: [
      { en: "Please renew your license as soon as possible.", cn: "请尽快办理执照续期。", words: [] },
      { en: "Please renew the contract as soon as possible.", cn: "请尽快续订合同。", words: [] },
      { en: "Please renew your subscription as soon as possible.", cn: "请尽快续订订阅。", words: [] },
    ],
    thinking: "证书续期的建议：\n① 提醒证书到期（238句）→ ② 建议尽快续期（本句）。\n证书过期会影响工作资格，需要及时办理续期，交接时要明确提醒。",
    pronunciation: "renew 重音在第二音节：/rɪˈnjuː/。\nas soon as possible 连读：/æz suːn æz ˈpɒs.ə.bəl/。\n节奏：Please re-NEW ｜ your CER-ti-fi-CA-tion ｜ as SOON ｜ as POS-si-ble.",
    quiz: [
      { q: "请尽快办理执照续期，怎么说？", a: "Please renew your license as soon as possible." },
      { q: "renew 和 update 有什么区别？", a: "renew = 续期（到期后重新申请）；update = 更新（内容更新）。证书到期用 renew。" },
    ],
  },
  {
    id: 240,
    en: "Now let's review today's weather and facility inspection.",
    cn: "现在我们开始检查今天的天气情况和现场巡检。",
    ipa: "/naʊ lɛts rɪˈvjuː təˈdeɪz ˈwɛð.ər ənd fəˈsɪl.ə.ti ɪnˈspɛk.ʃən/",
    tags: ["第240句", "转场句", "★★★★★"],
    when: "培训安排汇报完成后，用转场句过渡到下一个环节：天气情况和现场巡检。这是交接中的常规检查项目。",
    words: [
      { w: "weather", ipa: "/ˈwɛð.ər/", pos: "名词", cn: "天气", memory: "① weather = 天气；② 数据中心交接时检查天气，因为极端天气（暴雨、高温）会影响设备运行。\nweather 与 climate（气候）不同，weather 指短期天气。", phonics: "weath 读 /wɛð/，er 读 /ər/，重音在第一音节。注意 th 读 /ð/。", collocations: [["weather condition", "天气状况"], ["weather forecast", "天气预报"], ["extreme weather", "极端天气"]], examples: [["What's the weather like today?", "今天天气怎么样？"], ["Extreme weather may affect operations.", "极端天气可能影响运营。"]] },
      { w: "facility inspection", ipa: "/fəˈsɪl.ə.ti ɪnˈspɛk.ʃən/", pos: "名词短语", cn: "现场巡检；设施检查", memory: "① facility = 设施/现场；② inspection = 检查/巡检 → 设施检查 → 现场巡检。\nfacility inspection 是数据中心交接的常规项目，包括巡视机房、检查设备状态等。", phonics: "facility 读 /fəˈsɪl.ə.ti/，inspection 读 /ɪnˈspɛk.ʃən/。", collocations: [["facility inspection report", "巡检报告"], ["daily facility inspection", "每日巡检"], ["facility inspection checklist", "巡检检查表"]], examples: [["Please complete the facility inspection.", "请完成现场巡检。"], ["The facility inspection is done.", "巡检已完成。"]] },
    ],
    phrases: [
      { p: "today's weather and facility inspection", ipa: "/təˈdeɪz ˈwɛð.ər ənd fəˈsɪl.ə.ti ɪnˈspɛk.ʃən/", cn: "今天的天气情况和现场巡检", why: "today's 修饰 weather and facility inspection，明确是今天的检查项目。and 连接两个并列名词。交接时用此表达过渡到下一个环节。" },
    ],
    grammar: [
      { q: "let's review 和 let's check 有什么区别？", a: "let's review = 让我们检查/回顾（更正式，强调系统性检查）\nlet's check = 让我们检查（更口语化，强调快速核实）\n✅ Let's review the schedule.（让我们检查日程——正式）\n✅ Let's check the alarm.（让我们检查告警——口语）\n交接时用 review，更正式专业。" },
    ],
    pattern: "Now let's review + 名词",
    patternExamples: [
      { en: "Now let's review the alarm status.", cn: "现在我们开始检查告警状态。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Now let's review the maintenance schedule.", cn: "现在我们开始检查维护计划。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }, { w: "schedule", ipa: "/ˈʃɛdjuːl/", cn: "安排", phonics: "sched 读 /ʃɛd/，ule 读 /juːl/" }] },
      { en: "Now let's review the staffing plan.", cn: "现在我们开始检查人员安排。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
    ],
    thinking: "转场句的作用：\n① 总结上一环节（培训安排）→ ② 预告下一环节（天气和巡检）。\n交接中的转场句让流程清晰，接班人知道接下来要做什么。\n天气和巡检是交接的常规检查项目，需要每天进行。",
    pronunciation: "weather 的 th 读 /ð/，不是 /θ/。\nfacility 重音在第二音节：/fəˈsɪl.ə.ti/。\ninspection 重音在第二音节：/ɪnˈspɛk.ʃən/。\n节奏：NOW let's re-VIEW ｜ to-DAY'S ｜ WEATH-er ｜ and fa-CIL-i-ty ｜ in-SPEC-tion.",
    quiz: [
      { q: "现在我们开始检查告警状态，怎么说？", a: "Now let's review the alarm status." },
      { q: "let's review 和 let's check 在交接时怎么用？", a: "let's review = 让我们检查（正式）；let's check = 让我们检查（口语）。交接时用 review，更正式专业。" },
    ],
  },
];

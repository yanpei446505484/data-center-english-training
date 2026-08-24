// EXPORTS: MOCK_SENTENCES_PART16D

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART16D: ISentence[] = [
  {
    id: 1301,
    en: "You may start the work now.",
    cn: "现在可以开始施工了。",
    ipa: "/juː meɪ stɑːrt ðə wɜːrk naʊ/",
    tags: ["第1301句", "施工指挥", "★★★★★"],
    when: "所有准备工作完成后（PTW已签发、安全交底完成、工具检查完毕、隔离点确认），值班经理或施工负责人发出开工指令。这是从准备阶段转入施工阶段的标志性语句。",
    words: [
      { w: "may", ipa: "/meɪ/", pos: "情态动词", cn: "可以（正式许可）", memory: "① may = 可以/被允许（表示正式授权）。\n② 在施工语境中，may 比 can 更正式，表示上级给予许可。\ncan = 能够（强调能力）；may = 可以（强调授权）。", phonics: "may 读 /meɪ/，ay 读长音 /eɪ/。", collocations: [["you may start", "你可以开始"], ["you may proceed", "你可以继续"], ["you may enter", "你可以进入"]], examples: [["You may begin the maintenance now.", "现在可以开始维护了。"], ["You may proceed to the next step.", "你可以进行下一步。"]] },
      { w: "start", ipa: "/stɑːrt/", pos: "动词", cn: "开始", memory: "① start = 开始/启动。\n② start the work = 开始施工/开始工作。\n在施工语境中，start 指正式开始动手操作。", phonics: "st 读 /st/，art 读 /ɑːrt/，重音在 start。", collocations: [["start the work", "开始施工"], ["start the maintenance", "开始维护"], ["start the operation", "开始操作"]], examples: [["Let's start the work.", "我们开始施工。"], ["When can we start?", "我们什么时候可以开始？"]] },
    ],
    phrases: [
      { p: "start the work", ipa: "/stɑːrt ðə wɜːrk/", cn: "开始施工", why: "start + the work = 开始施工。work 指具体的施工作业，区别于 preparation（准备）。" },
    ],
    grammar: [
      { q: "You may start 和 Let's start 有什么区别？", a: "You may start = 你可以开始了（上级对下级的正式许可，授权语气）\nLet's start = 我们开始吧（平等的邀请/建议，协作语气）\n✅ You may start the work now.（现在可以开始施工 → 负责人授权）\n✅ Let's start the work.（我们开始施工 → 团队一起开始）\n施工现场用 You may，因为需要明确的开工授权。" },
    ],
    pattern: "You may + 动词 + now",
    patternExamples: [
      { en: "You may proceed now.", cn: "现在可以继续。", words: [] },
      { en: "You may enter the area now.", cn: "现在可以进入该区域。", words: [{ w: "area", ipa: "/ˈeəriə/", cn: "区域", phonics: "a 读 /eə/，rea 读 /riə/" }] },
      { en: "You may resume the work now.", cn: "现在可以恢复施工。", words: [] },
    ],
    thinking: "开工指令是施工安全的关键控制点。\n在施工安全管理体系中，开工必须有明确的授权人发出指令，不能擅自开始。\n开工指令发出前，必须确认：① PTW已签发 ② 安全交底完成 ③ 隔离措施到位 ④ 工具检查合格。\n只有所有前置条件满足，才能发出 You may start 的指令。",
    pronunciation: "may 的 ay 读长音 /eɪ/：/meɪ/。\nstart 的 ar 读 /ɑːr/：/stɑːrt/。\n节奏：You MAY ｜ START the WORK ｜ NOW.",
    quiz: [
      { q: "现在可以继续施工了，怎么说？", a: "You may resume the work now." },
      { q: "You may start 和 Let's start 哪个更适合施工现场？", a: "You may start 更适合。施工现场需要明确的开工授权，You may 表示上级对下级的正式许可，是授权语气；Let's start 是平等的邀请，缺少授权感。施工安全要求明确的开工指令。" },
    ],
  },
  {
    id: 1302,
    en: "Please follow the approved procedure.",
    cn: "请按照批准的流程施工。",
    ipa: "/pliːz ˈfɑː.loʊ ðə əˈpruːvd prəˈsiː.dʒər/",
    tags: ["第1302句", "施工指挥", "★★★★★"],
    when: "开工后，施工负责人提醒所有人必须严格按照已批准的MOP/SOP执行，不能擅自更改流程。approved procedure 指经过审批的标准化操作流程。",
    words: [
      { w: "follow", ipa: "/ˈfɑː.loʊ/", pos: "动词", cn: "遵循；按照", memory: "① follow = 跟随/遵循。\n② follow the procedure = 按照流程执行。\n在施工语境中，follow 强调严格遵守，不能偏离。", phonics: "fol 读 /fɑːl/，low 读 /loʊ/，重音在第一音节。", collocations: [["follow the procedure", "按照流程"], ["follow the SOP", "按照SOP"], ["follow the instructions", "按照指示"]], examples: [["Please follow the MOP step by step.", "请按照MOP逐步执行。"], ["Always follow the safety rules.", "始终遵守安全规则。"]] },
      { w: "approved", ipa: "/əˈpruːvd/", pos: "形容词（过去分词）", cn: "已批准的", memory: "① approve = 批准；② approved = 已批准的。\napproved procedure = 已批准的流程，指经过正式审批的MOP/SOP。\n施工中只能执行 approved procedure，不能擅自更改。", phonics: "ap 读 /ə/，proved 读 /pruːvd/，重音在第二音节。", collocations: [["approved procedure", "已批准的流程"], ["approved method", "已批准的方法"], ["approved document", "已批准的文件"]], examples: [["This is the approved MOP.", "这是已批准的MOP。"], ["Use only approved tools.", "只使用已批准的工具。"]] },
    ],
    phrases: [
      { p: "approved procedure", ipa: "/əˈpruːvd prəˈsiː.dʒər/", cn: "已批准的流程", why: "approved + procedure = 已批准的流程。procedure 指标准化的操作流程（MOP/SOP），approved 强调经过正式审批。" },
    ],
    grammar: [
      { q: "为什么用 approved 而不是 approval？", a: "approved = 已批准的（形容词，修饰 procedure）\napproval = 批准（名词，不能修饰 procedure）\n✅ approved procedure（已批准的流程 → 形容词修饰名词）\n✅ the approval of the procedure（流程的批准 → 名词短语）\n这里需要形容词修饰 procedure，所以用 approved。" },
    ],
    pattern: "Please follow the + 形容词 + 名词",
    patternExamples: [
      { en: "Please follow the approved method.", cn: "请按照已批准的方法。", words: [{ w: "follow", ipa: "/ˈfɒloʊ/", cn: "跟踪", phonics: "fol 读 /fɒl/，low 读 /loʊ/" }] },
      { en: "Please follow the standard procedure.", cn: "请按照标准流程。", words: [{ w: "follow", ipa: "/ˈfɒloʊ/", cn: "跟踪", phonics: "fol 读 /fɒl/，low 读 /loʊ/" }, { w: "procedure", ipa: "/prəˈsiːdʒər/", cn: "流程", phonics: "pro 读 /prə/，cedure 读 /siːdʒər/" }] },
      { en: "Please follow the safety instructions.", cn: "请按照安全指示。", words: [{ w: "follow", ipa: "/ˈfɒloʊ/", cn: "跟踪", phonics: "fol 读 /fɒl/，low 读 /loʊ/" }, { w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }] },
    ],
    thinking: "施工中最大的风险之一是擅自更改流程。\napproved procedure 是经过风险评估、审批的标准化操作方案，任何偏离都可能导致安全事故。\n施工中必须做到：① 严格按照 approved procedure 执行 ② 不跳步 ③ 不省略 ④ 发现异常立即停止。\n如果发现 procedure 有问题，必须先停止施工，重新审批后才能继续。",
    pronunciation: "follow 的 o 读 /ɑː/：/ˈfɑː.loʊ/。\napproved 的 oo 读长音 /uː/：/əˈpruːvd/。\nprocedure 的 ce 读 /siː/：/prəˈsiː.dʒər/。\n节奏：Please FOL-low ｜ the ap-PROVED ｜ pro-CE-dure.",
    quiz: [
      { q: "请按照标准流程操作，怎么说？", a: "Please follow the standard procedure." },
      { q: "approved procedure 和 standard procedure 有什么区别？", a: "approved procedure = 已批准的流程（强调经过正式审批，适用于高风险操作）；standard procedure = 标准流程（强调标准化，适用于常规操作）。施工中通常用 approved procedure，因为高风险操作需要专门的审批。" },
    ],
  },
  {
    id: 1303,
    en: "Do not skip any steps.",
    cn: "不要跳过任何步骤。",
    ipa: "/duː nɑːt skɪp ˈɛn.i stɛps/",
    tags: ["第1303句", "施工指挥", "★★★★★"],
    when: "施工中常见的违规行为是跳过某些步骤（认为不重要或为了节省时间）。负责人必须强调不能跳步，每一步都必须严格执行。",
    words: [
      { w: "skip", ipa: "/skɪp/", pos: "动词", cn: "跳过；省略", memory: "① skip = 跳过/省略。\n② skip steps = 跳过步骤，是施工中的严重违规行为。\nMOP/SOP 的每一步都有其目的，跳步可能导致安全隐患。", phonics: "sk 读 /sk/，ip 读 /ɪp/，短音。", collocations: [["skip steps", "跳过步骤"], ["skip a step", "跳过一个步骤"], ["do not skip", "不要跳过"]], examples: [["Do not skip any safety checks.", "不要跳过任何安全检查。"], ["Never skip the LOTO procedure.", "绝不能跳过LOTO流程。"]] },
    ],
    phrases: [
      { p: "skip any steps", ipa: "/skɪp ˈɛn.i stɛps/", cn: "跳过任何步骤", why: "skip + any + steps = 跳过任何步骤。any 强调'任何一个都不行'，加强禁止语气。" },
    ],
    grammar: [
      { q: "Do not skip 和 Never skip 有什么区别？", a: "Do not skip = 不要跳过（一般禁止，针对当前操作）\nNever skip = 绝不跳过（强调禁止，针对所有情况）\n✅ Do not skip any steps.（不要跳过任何步骤 → 本次施工的指令）\n✅ Never skip the safety checks.（绝不跳过安全检查 → 通用原则）\n施工现场用 Do not skip，因为是针对当前操作的具体指令。" },
    ],
    pattern: "Do not + 动词 + any + 名词",
    patternExamples: [
      { en: "Do not skip any checks.", cn: "不要跳过任何检查。", words: [{ w: "checks", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Do not ignore any warnings.", cn: "不要忽视任何警告。", words: [{ w: "warnings", ipa: "/ˈwɔːrnɪŋ/", cn: "警告", phonics: "warn 读 /wɔːrn/，ing 读 /ɪŋ/" }] },
      { en: "Do not remove any safety devices.", cn: "不要移除任何安全装置。", words: [{ w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }, { w: "devices", ipa: "/dɪˈvaɪs/", cn: "设备", phonics: "de 读 /dɪ/，vice 读 /vaɪs/" }] },
    ],
    thinking: "跳步是施工事故的常见原因。\n施工步骤是经过风险评估的，每一步都有其安全目的：\n① 隔离点确认 → 防止触电\n② LOTO → 防止误操作\n③ 验电 → 确认无电压\n④ 接地 → 防止残余电荷\n跳过任何一步都可能导致严重事故。施工中必须严格按顺序执行，不能因为'觉得不重要'就跳步。",
    pronunciation: "skip 的 i 读短音 /ɪ/：/skɪp/。\nsteps 的 e 读短音 /ɛ/：/stɛps/。\n节奏：Do NOT ｜ SKIP ｜ A-ny STEPS.",
    quiz: [
      { q: "绝不跳过安全检查，怎么说？", a: "Never skip the safety checks." },
      { q: "施工中为什么不能跳步？", a: "施工步骤是经过风险评估的，每一步都有其安全目的。跳步可能导致：① 遗漏隔离点 → 触电风险 ② 未验电 → 带电作业 ③ 未接地 → 残余电荷伤害。施工中必须严格按顺序执行，不能因为'觉得不重要'就跳步。" },
    ],
  },
  {
    id: 1304,
    en: "Stop immediately if you notice anything unusual.",
    cn: "如果发现任何异常，请立即停止。",
    ipa: "/stɑːp ɪˈmiː.di.ət.li ɪf juː ˈnoʊ.tɪs ˈɛn.i.θɪŋ ʌnˈjuː.ʒu.əl/",
    tags: ["第1304句", "施工指挥", "★★★★★"],
    when: "施工中可能出现意外情况（异常声音、异味、设备异常等），负责人必须强调发现异常立即停止，不能继续盲目操作。这是施工安全的核心原则。",
    words: [
      { w: "immediately", ipa: "/ɪˈmiː.di.ət.li/", pos: "副词", cn: "立即；马上", memory: "① immediate = 立即的；② immediately = 立即地。\n在安全指令中，immediately 强调零延迟，必须马上执行。\n区别于 quickly（快速地），immediately 更强调'立刻'。", phonics: "im 读 /ɪ/，me 读 /miː/，di 读 /di/，ate 读 /ət/，ly 读 /li/，重音在第二音节。", collocations: [["stop immediately", "立即停止"], ["report immediately", "立即报告"], ["evacuate immediately", "立即撤离"]], examples: [["Stop the work immediately.", "立即停止施工。"], ["Call me immediately if there's a problem.", "如果有问题立即给我打电话。"]] },
      { w: "unusual", ipa: "/ʌnˈjuː.ʒu.əl/", pos: "形容词", cn: "异常的；不寻常的", memory: "① un- = 不；② usual = 通常的；③ unusual = 不寻常的/异常的。\n在施工语境中，unusual 指任何偏离正常状态的情况：异常声音、异味、异常温度、异常振动等。", phonics: "un 读 /ʌn/，u 读 /juː/，sual 读 /ʒu.əl/，重音在第二音节。", collocations: [["anything unusual", "任何异常情况"], ["unusual noise", "异常噪音"], ["unusual smell", "异常气味"]], examples: [["Is there anything unusual?", "有什么异常吗？"], ["I noticed an unusual sound.", "我注意到异常声音。"]] },
    ],
    phrases: [
      { p: "anything unusual", ipa: "/ˈɛn.i.θɪŋ ʌnˈjuː.ʒu.əl/", cn: "任何异常情况", why: "anything + unusual = 任何异常情况。unusual 后置修饰 anything，这是不定代词的修饰规则。" },
    ],
    grammar: [
      { q: "为什么 unusual 放在 anything 后面？", a: "anything / something / nothing 等不定代词的修饰语必须后置。\n✅ anything unusual（任何异常情况 → 正确）\n❌ unusual anything（错误）\n✅ something important（重要的事情 → 正确）\n❌ important something（错误）\n这是英语的固定语序规则。" },
    ],
    pattern: "Stop immediately if + 条件",
    patternExamples: [
      { en: "Stop immediately if you smell burning.", cn: "如果闻到烧焦味立即停止。", words: [{ w: "stop", ipa: "/stɒp/", cn: "停止", phonics: "stop 读 /stɒp/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Stop immediately if you hear strange noises.", cn: "如果听到异常声音立即停止。", words: [{ w: "stop", ipa: "/stɒp/", cn: "停止", phonics: "stop 读 /stɒp/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Stop immediately if the equipment overheats.", cn: "如果设备过热立即停止。", words: [{ w: "stop", ipa: "/stɒp/", cn: "停止", phonics: "stop 读 /stɒp/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }, { w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }] },
    ],
    thinking: "立即停止是施工安全的黄金法则。\n施工中可能出现的异常情况：\n① 异常声音（嗡嗡声、爆裂声）→ 设备故障\n② 异常气味（烧焦味、化学品味）→ 过热或泄漏\n③ 异常温度（设备发烫）→ 过载或短路\n④ 异常振动 → 机械故障\n发现任何异常，必须立即停止施工，报告负责人，等待专业人员排查。绝不能'继续试试看'。",
    pronunciation: "immediately 重音在第二音节：/ɪˈmiː.di.ət.li/。\nunusual 重音在第二音节：/ʌnˈjuː.ʒu.əl/。\n节奏：STOP im-ME-di-ate-ly ｜ if you NO-tice ｜ A-ny-thing un-U-sual.",
    quiz: [
      { q: "如果闻到烧焦味立即停止，怎么说？", a: "Stop immediately if you smell burning." },
      { q: "施工中为什么要强调'立即停止'？", a: "施工中的异常情况可能是事故的预警信号：① 异常声音 → 设备故障 ② 异常气味 → 过热或泄漏 ③ 异常温度 → 过载或短路。继续操作可能导致：触电、火灾、设备损坏、人员伤亡。发现异常必须立即停止，报告负责人，等待专业人员排查。" },
    ],
  },
  {
    id: 1305,
    en: "Report any abnormal condition immediately.",
    cn: "发现任何异常情况请立即报告。",
    ipa: "/rɪˈpɔːrt ˈɛn.i æbˈnɔːr.məl kənˈdɪʃ.ən ɪˈmiː.di.ət.li/",
    tags: ["第1305句", "施工指挥", "★★★★★"],
    when: "发现异常后，除了立即停止施工，还必须立即报告给负责人。abnormal condition 指任何偏离正常状态的情况，包括设备故障、安全隐患、操作异常等。",
    words: [
      { w: "report", ipa: "/rɪˈpɔːrt/", pos: "动词", cn: "报告", memory: "① re- = 再次；② port = 携带；③ report = 报告（把信息带回来）。\n在施工语境中，report 指向上级或负责人报告异常情况。", phonics: "re 读 /rɪ/，port 读 /pɔːrt/，重音在第二音节。", collocations: [["report a problem", "报告问题"], ["report an incident", "报告事件"], ["report immediately", "立即报告"]], examples: [["Report any issues to the supervisor.", "向主管报告任何问题。"], ["Please report the abnormal condition.", "请报告异常情况。"]] },
      { w: "abnormal", ipa: "/æbˈnɔːr.məl/", pos: "形容词", cn: "异常的；不正常的", memory: "① ab- = 偏离；② normal = 正常的；③ abnormal = 异常的。\nabnormal condition = 异常情况，指任何偏离正常状态的情况。\n与 unusual 类似，但 abnormal 更强调'不正常'。", phonics: "ab 读 /æb/，nor 读 /nɔːr/，mal 读 /məl/，重音在第二音节。", collocations: [["abnormal condition", "异常情况"], ["abnormal behavior", "异常行为"], ["abnormal temperature", "异常温度"]], examples: [["There is an abnormal condition in the system.", "系统中有异常情况。"], ["Check for any abnormal readings.", "检查是否有异常读数。"]] },
    ],
    phrases: [
      { p: "abnormal condition", ipa: "/æbˈnɔːr.məl kənˈdɪʃ.ən/", cn: "异常情况", why: "abnormal + condition = 异常情况。condition 指状态/情况，abnormal 强调偏离正常。" },
    ],
    grammar: [
      { q: "abnormal 和 unusual 有什么区别？", a: "abnormal = 异常的（强调偏离正常状态，可能有问题）\nunusual = 不寻常的（强调少见，不一定有问题）\n✅ abnormal condition（异常情况 → 可能有问题，需要检查）\n✅ unusual noise（不寻常的声音 → 少见，可能是正常的）\n施工中用 abnormal，因为强调'不正常'，需要立即处理。" },
    ],
    pattern: "Report + 名词 + immediately",
    patternExamples: [
      { en: "Report any issues immediately.", cn: "发现任何问题立即报告。", words: [{ w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }, { w: "issues", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Report any incidents immediately.", cn: "发现任何事件立即报告。", words: [{ w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Report any safety hazards immediately.", cn: "发现任何安全隐患立即报告。", words: [{ w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }, { w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
    ],
    thinking: "报告是施工安全管理的关键环节。\n发现异常后的正确处理流程：\n① 立即停止施工（Stop immediately）\n② 保护现场（不要触碰异常设备）\n③ 立即报告（Report immediately）\n④ 等待指示（等待负责人决策）\n报告内容应包括：① 异常情况描述 ② 发生时间 ③ 影响范围 ④ 已采取的措施。\n及时报告可以避免事态扩大，确保专业人员及时介入处理。",
    pronunciation: "report 的 or 读 /ɔːr/：/rɪˈpɔːrt/。\nabnormal 重音在第二音节：/æbˈnɔːr.məl/。\ncondition 的 ti 读 /ʃ/：/kənˈdɪʃ.ən/。\n节奏：re-PORT ｜ A-ny ab-NOR-mal ｜ con-DI-tion ｜ im-ME-di-ate-ly.",
    quiz: [
      { q: "发现任何安全隐患立即报告，怎么说？", a: "Report any safety hazards immediately." },
      { q: "发现异常后的正确处理流程是什么？", a: "发现异常后的正确处理流程：① 立即停止施工（Stop immediately）② 保护现场（不要触碰异常设备）③ 立即报告（Report immediately）④ 等待指示（等待负责人决策）。报告内容应包括：异常情况描述、发生时间、影响范围、已采取的措施。" },
    ],
  },
  {
    id: 1306,
    en: "Please keep the work area clean.",
    cn: "请保持施工区域整洁。",
    ipa: "/pliːz kiːp ðə wɜːrk ˈɛr.i.ə kliːn/",
    tags: ["第1306句", "施工指挥", "★★★★★"],
    when: "施工现场的整洁是安全管理的重要部分。杂乱的工作区域可能导致绊倒、工具丢失、设备损坏等安全隐患。负责人需要定期提醒保持整洁。",
    words: [
      { w: "keep", ipa: "/kiːp/", pos: "动词", cn: "保持", memory: "① keep = 保持/维持。\n② keep + 宾语 + 形容词 = 保持某物处于某种状态。\nkeep the work area clean = 保持施工区域整洁。", phonics: "k 读 /k/，eep 读 /iːp/，长音。", collocations: [["keep clean", "保持整洁"], ["keep safe", "保持安全"], ["keep organized", "保持有序"]], examples: [["Keep the area clean and tidy.", "保持区域整洁有序。"], ["Please keep the door closed.", "请保持门关闭。"]] },
      { w: "work area", ipa: "/wɜːrk ˈɛr.i.ə/", pos: "名词短语", cn: "施工区域", memory: "① work = 工作/施工；② area = 区域。\nwork area = 施工区域，指正在进行施工作业的具体区域。\n区别于 work zone（施工地带，范围更大）。", phonics: "work 读 /wɜːrk/，area 读 /ˈɛr.i.ə/。", collocations: [["work area", "施工区域"], ["clean the work area", "清理施工区域"], ["secure the work area", "封锁施工区域"]], examples: [["The work area is now secure.", "施工区域现在已封锁。"], ["Please clean the work area before leaving.", "离开前请清理施工区域。"]] },
    ],
    phrases: [
      { p: "keep the work area clean", ipa: "/kiːp ðə wɜːrk ˈɛr.i.ə kliːn/", cn: "保持施工区域整洁", why: "keep + the work area + clean = 保持施工区域整洁。这是施工安全的基本要求，防止绊倒、工具丢失等隐患。" },
    ],
    grammar: [
      { q: "keep + 宾语 + 形容词 是什么结构？", a: "keep + 宾语 + 形容词 = 使某物保持某种状态\n✅ keep the work area clean（保持施工区域整洁）\n✅ keep the door closed（保持门关闭）\n✅ keep the system running（保持系统运行）\n这个结构强调'维持某种状态'，是英语中常用的表达方式。" },
    ],
    pattern: "Please keep + 名词 + 形容词",
    patternExamples: [
      { en: "Please keep the area organized.", cn: "请保持区域有序。", words: [{ w: "area", ipa: "/ˈeəriə/", cn: "区域", phonics: "a 读 /eə/，rea 读 /riə/" }] },
      { en: "Please keep the equipment clean.", cn: "请保持设备整洁。", words: [{ w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }] },
      { en: "Please keep the passage clear.", cn: "请保持通道畅通。", words: [{ w: "clear", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
    ],
    thinking: "施工现场整洁是安全管理的基础。\n杂乱的施工区域可能导致：\n① 绊倒事故（散落的电缆、工具）\n② 工具丢失（找不到关键工具）\n③ 设备损坏（工具掉落砸坏设备）\n④ 火灾风险（易燃材料堆积）\n5S 管理原则：整理（Sort）、整顿（Set in order）、清扫（Shine）、清洁（Standardize）、素养（Sustain）。\n施工中应定期清理，保持工作区域整洁有序。",
    pronunciation: "keep 的 ee 读长音 /iː/：/kiːp/。\narea 重音在第一音节：/ˈɛr.i.ə/。\n节奏：Please KEEP ｜ the WORK a-re-a ｜ CLEAN.",
    quiz: [
      { q: "请保持通道畅通，怎么说？", a: "Please keep the passage clear." },
      { q: "施工现场为什么要保持整洁？", a: "杂乱的施工区域可能导致：① 绊倒事故（散落的电缆、工具）② 工具丢失（找不到关键工具）③ 设备损坏（工具掉落砸坏设备）④ 火灾风险（易燃材料堆积）。保持整洁是5S管理的基础，也是施工安全的基本要求。" },
    ],
  },
  {
    id: 1307,
    en: "Do not leave any tools unattended.",
    cn: "不要把工具留在现场无人看管。",
    ipa: "/duː nɑːt liːv ˈɛn.i tuːlz ˌʌn.əˈtɛn.dɪd/",
    tags: ["第1307句", "施工指挥", "★★★★★"],
    when: "工具管理是施工安全的重要环节。无人看管的工具可能被误用、丢失，或者成为安全隐患（绊倒、掉落伤人）。负责人需要强调工具管理的重要性。",
    words: [
      { w: "leave", ipa: "/liːv/", pos: "动词", cn: "留下；遗留", memory: "① leave = 离开/留下。\n② leave something = 把某物留下/遗留。\n在工具管理语境中，leave 指把工具留在某个地方。", phonics: "l 读 /l/，eave 读 /iːv/，长音。", collocations: [["leave unattended", "留下无人看管"], ["leave behind", "留下"], ["leave tools on the floor", "把工具留在地上"]], examples: [["Do not leave tools on the floor.", "不要把工具留在地上。"], ["Never leave equipment unattended.", "绝不把设备留下无人看管。"]] },
      { w: "unattended", ipa: "/ˌʌn.əˈtɛn.dɪd/", pos: "形容词", cn: "无人看管的", memory: "① un- = 不；② attend = 照料/看管；③ -ed = 形容词后缀。\nunattended = 无人看管的/无人照料的。\n在施工语境中，unattended 指工具/设备没有人看管，存在安全隐患。", phonics: "un 读 /ʌn/，a 读 /ə/，tend 读 /tɛn/，ed 读 /dɪd/，重音在第三音节。", collocations: [["leave unattended", "留下无人看管"], ["unattended tools", "无人看管的工具"], ["unattended equipment", "无人看管的设备"]], examples: [["Do not leave tools unattended.", "不要把工具留下无人看管。"], ["Unattended equipment is a safety hazard.", "无人看管的设备是安全隐患。"]] },
    ],
    phrases: [
      { p: "leave unattended", ipa: "/liːv ˌʌn.əˈtɛn.dɪd/", cn: "留下无人看管", why: "leave + unattended = 留下无人看管。这是施工安全中的常见禁令，防止工具被误用或成为安全隐患。" },
    ],
    grammar: [
      { q: "unattended 是什么词性？", a: "unattended 是形容词（过去分词作形容词）。\n结构：leave + 宾语 + 形容词（宾语补足语）\n✅ leave tools unattended（把工具留下无人看管 → 形容词修饰 tools）\n✅ leave the door open（把门留着开着 → 形容词修饰 door）\n✅ leave the engine running（让发动机一直运转 → 现在分词作宾语补足语）\n这个结构表示'使某物处于某种状态'。" },
    ],
    pattern: "Do not leave + 名词 + 形容词/分词",
    patternExamples: [
      { en: "Do not leave tools on the floor.", cn: "不要把工具留在地上。", words: [{ w: "floor", ipa: "/flɔːr/", cn: "楼层", phonics: "floor 读 /flɔːr/" }] },
      { en: "Do not leave the door open.", cn: "不要把门留着开着。", words: [{ w: "door", ipa: "/dɔːr/", cn: "门", phonics: "door 读 /dɔːr/" }] },
      { en: "Do not leave equipment unattended.", cn: "不要把设备留下无人看管。", words: [{ w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }] },
    ],
    thinking: "工具管理是施工安全的重要环节。\n无人看管的工具可能导致：\n① 绊倒事故（工具散落在通道上）\n② 掉落伤人（工具放在高处未固定）\n③ 误用风险（非专业人员误用专业工具）\n④ 工具丢失（找不到关键工具影响施工）\n工具管理原则：\n① 使用前检查（Check before use）\n② 使用后归位（Return after use）\n③ 不使用时收好（Store when not in use）\n④ 专人管理（Designated person manages）",
    pronunciation: "leave 的 ea 读长音 /iː/：/liːv/。\nunattended 重音在第三音节：/ˌʌn.əˈtɛn.dɪd/。\n节奏：Do NOT ｜ LEAVE ｜ A-ny TOOLS ｜ un-a-TEND-ed.",
    quiz: [
      { q: "不要把设备留下无人看管，怎么说？", a: "Do not leave equipment unattended." },
      { q: "工具管理的原则是什么？", a: "工具管理原则：① 使用前检查（Check before use）② 使用后归位（Return after use）③ 不使用时收好（Store when not in use）④ 专人管理（Designated person manages）。无人看管的工具可能导致绊倒、掉落伤人、误用、丢失等安全隐患。" },
    ],
  },
  {
    id: 1308,
    en: "Please store all removed parts properly.",
    cn: "请妥善放置拆下来的零部件。",
    ipa: "/pliːz stɔːr ɔːl rɪˈmuːvd pɑːrts ˈprɑː.pər.li/",
    tags: ["第1308句", "施工指挥", "★★★★★"],
    when: "施工过程中会拆卸一些零部件（螺丝、面板、模块等），这些零部件需要妥善存放，防止丢失、损坏或混淆。properly 强调按照规范存放。",
    words: [
      { w: "store", ipa: "/stɔːr/", pos: "动词", cn: "存放；储存", memory: "① store = 存放/储存。\n② store parts = 存放零部件。\n在施工语境中，store 指把拆下来的零部件妥善存放，防止丢失或损坏。", phonics: "st 读 /st/，ore 读 /ɔːr/，长音。", collocations: [["store parts", "存放零部件"], ["store properly", "妥善存放"], ["store in a safe place", "存放在安全的地方"]], examples: [["Please store the removed parts in the box.", "请把拆下来的零部件放在箱子里。"], ["Store the tools in the toolbox.", "把工具存放在工具箱里。"]] },
      { w: "removed", ipa: "/rɪˈmuːvd/", pos: "形容词（过去分词）", cn: "拆下来的；移除的", memory: "① remove = 移除/拆卸；② removed = 已移除的/拆下来的。\nremoved parts = 拆下来的零部件。\n在施工中，remove 指拆卸设备或零部件。", phonics: "re 读 /rɪ/，moved 读 /muːvd/，重音在第二音节。", collocations: [["removed parts", "拆下来的零部件"], ["removed components", "拆下来的组件"], ["removed cables", "拆下来的电缆"]], examples: [["Label all removed parts.", "给所有拆下来的零部件贴标签。"], ["Store the removed components safely.", "安全存放拆下来的组件。"]] },
    ],
    phrases: [
      { p: "removed parts", ipa: "/rɪˈmuːvd pɑːrts/", cn: "拆下来的零部件", why: "removed + parts = 拆下来的零部件。parts 指设备的零部件，removed 表示已经拆卸下来。" },
    ],
    grammar: [
      { q: "properly 放在句末还是句中？", a: "properly 通常放在动词后面或句末。\n✅ store parts properly（妥善存放零部件 → 放在动词后）\n✅ properly store parts（妥善存放零部件 → 放在动词前）\n两种都可以，但 store parts properly 更自然。\n在施工指令中，properly 强调'按照规范'，不能随意存放。" },
    ],
    pattern: "Please store + 名词 + properly",
    patternExamples: [
      { en: "Please store the tools properly.", cn: "请妥善存放工具。", words: [] },
      { en: "Please store the materials properly.", cn: "请妥善存放材料。", words: [] },
      { en: "Please store the equipment properly.", cn: "请妥善存放设备。", words: [{ w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }] },
    ],
    thinking: "拆卸零部件的管理是施工规范的重要环节。\n拆下来的零部件需要：\n① 妥善存放（Store properly）→ 防止丢失或损坏\n② 贴标签（Label）→ 标明来源设备、拆卸位置\n③ 分类存放（Sort）→ 按设备或功能分类\n④ 记录（Record）→ 记录拆卸时间、位置、数量\n如果零部件管理不当，可能导致：\n① 找不到零件 → 无法恢复设备\n② 装错位置 → 设备故障\n③ 零件损坏 → 需要重新采购\n施工中必须重视零部件的管理。",
    pronunciation: "store 的 ore 读长音 /ɔːr/：/stɔːr/。\nremoved 重音在第二音节：/rɪˈmuːvd/。\nproperly 重音在第一音节：/ˈprɑː.pər.li/。\n节奏：Please STORE ｜ ALL re-MOVED PARTS ｜ PROP-er-ly.",
    quiz: [
      { q: "请妥善存放工具，怎么说？", a: "Please store the tools properly." },
      { q: "拆下来的零部件需要怎么管理？", a: "拆下来的零部件需要：① 妥善存放（Store properly）→ 防止丢失或损坏 ② 贴标签（Label）→ 标明来源设备、拆卸位置 ③ 分类存放（Sort）→ 按设备或功能分类 ④ 记录（Record）→ 记录拆卸时间、位置、数量。管理不当可能导致找不到零件、装错位置、零件损坏等问题。" },
    ],
  },
  {
    id: 1309,
    en: "Please label all disconnected cables.",
    cn: "请给所有拆开的电缆做好标签。",
    ipa: "/pliːz ˈleɪ.bəl ɔːl ˌdɪs.kəˈnɛk.tɪd ˈkeɪ.bəlz/",
    tags: ["第1309句", "施工指挥", "★★★★★"],
    when: "施工中经常需要拆卸电缆（维修、更换、改造），拆开的电缆必须贴标签，标明来源、去向、用途，防止恢复时接错。这是电气施工的关键规范。",
    words: [
      { w: "label", ipa: "/ˈleɪ.bəl/", pos: "动词", cn: "贴标签", memory: "① label = 标签（名词）/ 贴标签（动词）。\n② label cables = 给电缆贴标签。\n在电气施工中，label 是强制要求，防止接错电缆。", phonics: "la 读 /leɪ/，bel 读 /bəl/，重音在第一音节。", collocations: [["label cables", "给电缆贴标签"], ["label parts", "给零部件贴标签"], ["label clearly", "清楚标记"]], examples: [["Please label all cables before disconnecting.", "拆卸前请给所有电缆贴标签。"], ["Each cable must be labeled.", "每根电缆都必须贴标签。"]] },
      { w: "disconnected", ipa: "/ˌdɪs.kəˈnɛk.tɪd/", pos: "形容词（过去分词）", cn: "拆开的；断开的", memory: "① dis- = 分离；② connect = 连接；③ -ed = 形容词后缀。\ndisconnected = 断开的/拆开的。\ndisconnected cables = 拆开的电缆，指已经从设备上拆下来的电缆。", phonics: "dis 读 /dɪs/，con 读 /kə/，nect 读 /nɛk/，ed 读 /tɪd/，重音在第三音节。", collocations: [["disconnected cables", "拆开的电缆"], ["disconnected wires", "断开的电线"], ["disconnected equipment", "断开的设备"]], examples: [["Label all disconnected cables.", "给所有拆开的电缆贴标签。"], ["Do not touch disconnected wires.", "不要触碰断开的电线。"]] },
    ],
    phrases: [
      { p: "disconnected cables", ipa: "/ˌdɪs.kəˈnɛk.tɪd ˈkeɪ.bəlz/", cn: "拆开的电缆", why: "disconnected + cables = 拆开的电缆。cables 指电缆，disconnected 表示已经从设备上拆下来。" },
    ],
    grammar: [
      { q: "label 作动词和名词有什么区别？", a: "label 作动词 = 贴标签（动作）\nlabel 作名词 = 标签（物品）\n✅ label the cables（给电缆贴标签 → 动词）\n✅ put a label on the cables（给电缆贴一个标签 → 名词）\n两种表达都可以，但 label 作动词更简洁。在施工指令中，通常用动词形式。" },
    ],
    pattern: "Please label all + 形容词 + 名词",
    patternExamples: [
      { en: "Please label all removed parts.", cn: "请给所有拆下来的零部件贴标签。", words: [] },
      { en: "Please label all disconnected wires.", cn: "请给所有断开的电线贴标签。", words: [] },
      { en: "Please label all isolated circuits.", cn: "请给所有隔离的电路贴标签。", words: [{ w: "circuits", ipa: "/ˈsɜːrkɪt/", cn: "电路", phonics: "cir 读 /sɜːr/，cuit 读 /kɪt/" }] },
    ],
    thinking: "电缆标签是电气施工的关键规范。\n拆开的电缆不贴标签可能导致：\n① 接错电缆 → 设备损坏或短路\n② 相序错误 → 电机反转\n③ 极性反接 → 设备烧毁\n④ 无法恢复 → 需要重新排查\n电缆标签应包含：\n① 来源设备（From）\n② 去向设备（To）\n③ 电缆编号（Cable ID）\n④ 用途说明（Purpose）\n施工中必须做到'拆一根，标一根'，确保恢复时不会接错。",
    pronunciation: "label 的 a 读长音 /eɪ/：/ˈleɪ.bəl/。\ndisconnected 重音在第三音节：/ˌdɪs.kəˈnɛk.tɪd/。\ncables 的 ca 读 /keɪ/：/ˈkeɪ.bəlz/。\n节奏：Please LA-bel ｜ ALL dis-con-NECT-ed ｜ CA-bles.",
    quiz: [
      { q: "请给所有断开的电线贴标签，怎么说？", a: "Please label all disconnected wires." },
      { q: "电缆标签应包含哪些信息？", a: "电缆标签应包含：① 来源设备（From）② 去向设备（To）③ 电缆编号（Cable ID）④ 用途说明（Purpose）。拆开的电缆不贴标签可能导致接错电缆、相序错误、极性反接、无法恢复等严重问题。施工中必须做到'拆一根，标一根'。" },
    ],
  },
  {
    id: 1310,
    en: "Please protect the surrounding equipment.",
    cn: "请保护周围设备，避免受到影响。",
    ipa: "/pliːz prəˈtɛkt ðə səˈraʊn.dɪŋ ɪˈkwɪp.mənt/",
    tags: ["第1310句", "施工指挥", "★★★★★"],
    when: "施工可能对周围设备造成影响（灰尘、振动、液体溅洒、工具掉落等），负责人需要提醒施工人员注意保护周围设备，避免施工造成二次损坏。",
    words: [
      { w: "protect", ipa: "/prəˈtɛkt/", pos: "动词", cn: "保护", memory: "① pro- = 向前；② tect = 覆盖；③ protect = 保护（向前覆盖）。\n在施工语境中，protect 指采取措施保护设备免受损坏。", phonics: "pro 读 /prə/，tect 读 /tɛkt/，重音在第二音节。", collocations: [["protect equipment", "保护设备"], ["protect from damage", "保护免受损坏"], ["protect with covers", "用防护罩保护"]], examples: [["Please protect the nearby equipment.", "请保护附近的设备。"], ["Cover the equipment to protect it from dust.", "用防护罩保护设备免受灰尘。"]] },
      { w: "surrounding", ipa: "/səˈraʊn.dɪŋ/", pos: "形容词", cn: "周围的", memory: "① surround = 围绕；② surrounding = 周围的。\nsurrounding equipment = 周围设备，指施工区域附近的其他设备。\n施工中需要保护这些设备不受影响。", phonics: "sur 读 /sə/，round 读 /raʊn/，ing 读 /ɪŋ/，重音在第二音节。", collocations: [["surrounding equipment", "周围设备"], ["surrounding area", "周围区域"], ["surrounding environment", "周围环境"]], examples: [["Protect the surrounding equipment from dust.", "保护周围设备免受灰尘。"], ["Check the surrounding area before starting.", "开始前检查周围区域。"]] },
    ],
    phrases: [
      { p: "surrounding equipment", ipa: "/səˈraʊn.dɪŋ ɪˈkwɪp.mənt/", cn: "周围设备", why: "surrounding + equipment = 周围设备。surrounding 指施工区域附近的其他设备，需要保护不受施工影响。" },
    ],
    grammar: [
      { q: "surrounding 和 nearby 有什么区别？", a: "surrounding = 周围的（环绕施工区域的所有方向）\nnearby = 附近的（距离近，但不一定环绕）\n✅ surrounding equipment（周围设备 → 360度环绕）\n✅ nearby equipment（附近设备 → 某个方向上距离近）\n施工中用 surrounding，因为需要考虑所有方向上的设备。" },
    ],
    pattern: "Please protect + 名词 + from + 危险",
    patternExamples: [
      { en: "Please protect the equipment from dust.", cn: "请保护设备免受灰尘。", words: [{ w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }] },
      { en: "Please protect the area from water.", cn: "请保护该区域免受水浸。", words: [{ w: "area", ipa: "/ˈeəriə/", cn: "区域", phonics: "a 读 /eə/，rea 读 /riə/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }] },
      { en: "Please protect the cables from damage.", cn: "请保护电缆免受损坏。", words: [] },
    ],
    thinking: "施工可能对周围设备造成多种影响：\n① 灰尘（Dust）→ 设备散热不良\n② 振动（Vibration）→ 精密设备损坏\n③ 液体溅洒（Liquid splash）→ 短路或腐蚀\n④ 工具掉落（Tool drop）→ 物理损坏\n⑤ 静电（Static electricity）→ 电子设备损坏\n保护措施：\n① 覆盖防护罩（Cover with protective covers）\n② 设置隔离屏障（Set up barriers）\n③ 清理施工区域（Clean the work area）\n④ 使用防静电工具（Use anti-static tools）\n施工前必须评估对周围设备的影响，采取适当的保护措施。",
    pronunciation: "protect 重音在第二音节：/prəˈtɛkt/。\nsurrounding 重音在第二音节：/səˈraʊn.dɪŋ/。\nequipment 重音在第二音节：/ɪˈkwɪp.mənt/。\n节奏：Please pro-TECT ｜ the sur-ROUND-ing ｜ e-QUIP-ment.",
    quiz: [
      { q: "请保护设备免受灰尘，怎么说？", a: "Please protect the equipment from dust." },
      { q: "施工可能对周围设备造成哪些影响？", a: "施工可能对周围设备造成的影响：① 灰尘（Dust）→ 设备散热不良 ② 振动（Vibration）→ 精密设备损坏 ③ 液体溅洒（Liquid splash）→ 短路或腐蚀 ④ 工具掉落（Tool drop）→ 物理损坏 ⑤ 静电（Static electricity）→ 电子设备损坏。保护措施包括覆盖防护罩、设置隔离屏障、清理施工区域、使用防静电工具等。" },
    ],
  },
  {
    id: 1311,
    en: "Please route the cable through the cable tray.",
    cn: "请将电缆敷设到桥架内。",
    ipa: "/pliːz ruːt ðə ˈkeɪ.bəl θruː ðə ˈkeɪ.bəl treɪ/",
    tags: ["第1311句", "施工指挥", "★★★★★"],
    when: "电缆敷设是电气施工的常见作业，电缆必须通过桥架（cable tray）敷设，不能随意悬挂或放在地上。route 指规划电缆的敷设路径。",
    words: [
      { w: "route", ipa: "/ruːt/", pos: "动词", cn: "敷设；规划路径", memory: "① route = 路线（名词）/ 规划路径（动词）。\n② route the cable = 规划电缆路径/敷设电缆。\n在电气施工中，route 指规划电缆的敷设路径，确保走桥架、穿管等规范路径。", phonics: "r 读 /r/，oute 读 /uːt/，长音。", collocations: [["route the cable", "敷设电缆"], ["route through", "通过...敷设"], ["cable routing", "电缆路径规划"]], examples: [["Route the cable through the tray.", "将电缆敷设到桥架内。"], ["The cable routing must follow the design.", "电缆路径必须按照设计。"]] },
      { w: "cable tray", ipa: "/ˈkeɪ.bəl treɪ/", pos: "名词", cn: "电缆桥架", memory: "① cable = 电缆；② tray = 托盘/桥架。\ncable tray = 电缆桥架，是用于支撑和敷设电缆的金属结构。\n电缆必须通过桥架敷设，不能随意悬挂或放在地上。", phonics: "cable 读 /ˈkeɪ.bəl/，tray 读 /treɪ/。", collocations: [["cable tray", "电缆桥架"], ["cable ladder", "电缆梯架"], ["cable conduit", "电缆管道"]], examples: [["Install the cable tray first.", "先安装电缆桥架。"], ["Route the cables in the tray.", "将电缆敷设到桥架内。"]] },
    ],
    phrases: [
      { p: "cable tray", ipa: "/ˈkeɪ.bəl treɪ/", cn: "电缆桥架", why: "cable + tray = 电缆桥架。tray 原意是托盘，在电气工程中指支撑电缆的桥架结构。" },
    ],
    grammar: [
      { q: "route 作动词和名词有什么区别？", a: "route 作动词 = 规划路径/敷设（动作）\nroute 作名词 = 路线/路径（名词）\n✅ route the cable（敷设电缆 → 动词）\n✅ the cable route（电缆路径 → 名词）\n在施工指令中，route 通常作动词，表示敷设电缆的动作。" },
    ],
    pattern: "Please route + 名词 + through + 路径",
    patternExamples: [
      { en: "Please route the wire through the conduit.", cn: "请将电线穿入管道。", words: [] },
      { en: "Please route the pipe through the wall.", cn: "请将管道穿墙敷设。", words: [{ w: "pipe", ipa: "/paɪp/", cn: "管道", phonics: "pipe 读 /paɪp/" }] },
      { en: "Please route the cable along the tray.", cn: "请沿桥架敷设电缆。", words: [] },
    ],
    thinking: "电缆敷设是电气施工的核心作业。\n电缆敷设规范：\n① 必须通过桥架（cable tray）或管道（conduit）敷设\n② 不能随意悬挂（可能导致拉扯损坏）\n③ 不能放在地上（可能绊倒或损坏）\n④ 弯曲半径必须符合规范（防止内部损伤）\n⑤ 固定间距必须符合要求（防止下垂）\n电缆敷设路径规划：\n① 最短路径（减少材料浪费）\n② 避开高温区域（防止绝缘老化）\n③ 避开强干扰源（防止信号干扰）\n④ 便于维护（留有检修空间）",
    pronunciation: "route 读 /ruːt/，ou 读长音 /uː/。\ncable 重音在第一音节：/ˈkeɪ.bəl/。\ntray 读 /treɪ/，ay 读长音 /eɪ/。\n节奏：Please ROUTE ｜ the CA-ble ｜ THROUGH the CA-ble TRAY.",
    quiz: [
      { q: "请将电线穿入管道，怎么说？", a: "Please route the wire through the conduit." },
      { q: "电缆敷设有哪些规范要求？", a: "电缆敷设规范：① 必须通过桥架（cable tray）或管道（conduit）敷设 ② 不能随意悬挂（可能导致拉扯损坏）③ 不能放在地上（可能绊倒或损坏）④ 弯曲半径必须符合规范（防止内部损伤）⑤ 固定间距必须符合要求（防止下垂）。路径规划应遵循最短路径、避开高温区域、避开强干扰源、便于维护等原则。" },
    ],
  },
  {
    id: 1312,
    en: "Please tighten all cable connections.",
    cn: "请紧固所有电缆连接。",
    ipa: "/pliːz ˈtaɪt.ən ɔːl ˈkeɪ.bəl kəˈnɛk.ʃənz/",
    tags: ["第1312句", "施工指挥", "★★★★★"],
    when: "电缆连接是电气施工的关键环节，连接必须紧固（tighten），松动的连接会导致接触不良、发热、甚至起火。负责人需要强调紧固的重要性。",
    words: [
      { w: "tighten", ipa: "/ˈtaɪt.ən/", pos: "动词", cn: "紧固；拧紧", memory: "① tight = 紧的；② -en = 动词后缀（使...）。\ntighten = 使变紧/紧固。\n在电气施工中，tighten 指紧固电缆连接、螺丝等。", phonics: "tight 读 /taɪt/，en 读 /ən/，重音在第一音节。", collocations: [["tighten connections", "紧固连接"], ["tighten screws", "拧紧螺丝"], ["tighten bolts", "拧紧螺栓"]], examples: [["Please tighten all connections.", "请紧固所有连接。"], ["Make sure the screws are tightened.", "确保螺丝已拧紧。"]] },
      { w: "connection", ipa: "/kəˈnɛk.ʃən/", pos: "名词", cn: "连接", memory: "① con- = 一起；② nect = 连接；③ -ion = 名词后缀。\nconnection = 连接/接头。\ncable connection = 电缆连接，指电缆与设备或电缆之间的接头。", phonics: "con 读 /kə/，nec 读 /nɛk/，tion 读 /ʃən/，重音在第二音节。", collocations: [["cable connection", "电缆连接"], ["loose connection", "松动连接"], ["secure connection", "牢固连接"]], examples: [["Check all cable connections.", "检查所有电缆连接。"], ["A loose connection can cause overheating.", "松动连接会导致过热。"]] },
    ],
    phrases: [
      { p: "cable connections", ipa: "/ˈkeɪ.bəl kəˈnɛk.ʃənz/", cn: "电缆连接", why: "cable + connections = 电缆连接。connections 指电缆与设备或电缆之间的接头。" },
    ],
    grammar: [
      { q: "tighten 和 tight 有什么区别？", a: "tight = 紧的（形容词）\ntighten = 紧固（动词）\n✅ The connection is tight.（连接很紧 → 形容词描述状态）\n✅ Please tighten the connection.（请紧固连接 → 动词表示动作）\n在施工指令中，tighten 是动词，表示紧固的动作。" },
    ],
    pattern: "Please tighten all + 名词",
    patternExamples: [
      { en: "Please tighten all screws.", cn: "请拧紧所有螺丝。", words: [] },
      { en: "Please tighten all bolts.", cn: "请拧紧所有螺栓。", words: [] },
      { en: "Please tighten all terminals.", cn: "请紧固所有端子。", words: [] },
    ],
    thinking: "电缆连接紧固是电气施工的关键环节。\n松动的连接可能导致：\n① 接触不良 → 电流不稳定\n② 接触电阻增大 → 发热\n③ 电弧放电 → 起火\n④ 设备损坏 → 停电\n紧固要求：\n① 使用扭力扳手（Torque wrench）→ 按照规范扭力紧固\n② 检查垫片（Check washers）→ 确保垫片正确安装\n③ 紧固后标记（Mark after tightening）→ 防止重复紧固\n④ 定期复检（Regular recheck）→ 防止松动\n电气施工中，连接紧固是质量控制的重点。",
    pronunciation: "tighten 的 igh 读长音 /aɪ/：/ˈtaɪt.ən/。\nconnection 重音在第二音节：/kəˈnɛk.ʃən/。\n节奏：Please TIGH-ten ｜ ALL CA-ble ｜ con-NEC-tions.",
    quiz: [
      { q: "请拧紧所有螺丝，怎么说？", a: "Please tighten all screws." },
      { q: "松动的电缆连接可能导致什么问题？", a: "松动的连接可能导致：① 接触不良 → 电流不稳定 ② 接触电阻增大 → 发热 ③ 电弧放电 → 起火 ④ 设备损坏 → 停电。紧固要求包括使用扭力扳手按照规范扭力紧固、检查垫片、紧固后标记、定期复检等。电气施工中，连接紧固是质量控制的重点。" },
    ],
  },
  {
    id: 1313,
    en: "Please check the cable identification labels.",
    cn: "请检查电缆标识。",
    ipa: "/pliːz tʃɛk ðə ˈkeɪ.bəl aɪˌdɛn.tɪ.fɪˈkeɪ.ʃən ˈleɪ.bəlz/",
    tags: ["第1313句", "施工指挥", "★★★★★"],
    when: "电缆标识（identification labels）是电缆管理的重要环节，每根电缆都必须有清晰的标识，标明来源、去向、用途。施工后需要检查标识是否完整、清晰。",
    words: [
      { w: "identification", ipa: "/aɪˌdɛn.tɪ.fɪˈkeɪ.ʃən/", pos: "名词", cn: "标识；识别", memory: "① identify = 识别；② identification = 标识/识别。\ncable identification = 电缆标识，指电缆上的标签，标明电缆的信息。\nidentification label = 标识标签。", phonics: "i 读 /aɪ/，den 读 /dɛn/，ti 读 /tɪ/，fi 读 /fɪ/，ca 读 /keɪ/，tion 读 /ʃən/，重音在第五音节。", collocations: [["cable identification", "电缆标识"], ["identification label", "标识标签"], ["identification number", "标识编号"]], examples: [["Check the cable identification labels.", "检查电缆标识标签。"], ["Each cable must have proper identification.", "每根电缆都必须有正确的标识。"]] },
    ],
    phrases: [
      { p: "cable identification labels", ipa: "/ˈkeɪ.bəl aɪˌdɛn.tɪ.fɪˈkeɪ.ʃən ˈleɪ.bəlz/", cn: "电缆标识标签", why: "cable + identification + labels = 电缆标识标签。identification labels 指用于标识的标签。" },
    ],
    grammar: [
      { q: "identification 和 ID 有什么区别？", a: "identification = 标识/识别（正式用语，完整单词）\nID = identification 的缩写（非正式，口语或书面简写）\n✅ cable identification labels（电缆标识标签 → 正式用语）\n✅ cable ID labels（电缆ID标签 → 简写）\n两种都可以，但正式文件通常用 identification。" },
    ],
    pattern: "Please check the + 名词 + labels",
    patternExamples: [
      { en: "Please check the equipment labels.", cn: "请检查设备标签。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }] },
      { en: "Please check the safety labels.", cn: "请检查安全标签。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }] },
      { en: "Please check the warning labels.", cn: "请检查警告标签。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "warning", ipa: "/ˈwɔːrnɪŋ/", cn: "警告", phonics: "warn 读 /wɔːrn/，ing 读 /ɪŋ/" }] },
    ],
    thinking: "电缆标识是电缆管理的重要环节。\n电缆标识应包含：\n① 电缆编号（Cable ID）→ 唯一标识\n② 来源设备（From）→ 起点\n③ 去向设备（To）→ 终点\n④ 电缆规格（Specification）→ 截面积、芯数\n⑤ 用途说明（Purpose）→ 电力/控制/信号\n标识要求：\n① 清晰可读（Clear and readable）\n② 耐久不褪色（Durable and fade-resistant）\n③ 位置统一（Consistent position）→ 通常在两端和中间\n④ 定期检查（Regular inspection）→ 确保标识完好\n施工后必须检查标识是否完整、清晰，确保后续维护人员能够识别。",
    pronunciation: "identification 很长，重音在第五音节：/aɪˌdɛn.tɪ.fɪˈkeɪ.ʃən/。\nlabels 重音在第一音节：/ˈleɪ.bəlz/。\n节奏：Please CHECK ｜ the CA-ble ｜ i-den-ti-fi-CA-tion ｜ LA-bels.",
    quiz: [
      { q: "请检查设备标签，怎么说？", a: "Please check the equipment labels." },
      { q: "电缆标识应包含哪些信息？", a: "电缆标识应包含：① 电缆编号（Cable ID）→ 唯一标识 ② 来源设备（From）→ 起点 ③ 去向设备（To）→ 终点 ④ 电缆规格（Specification）→ 截面积、芯数 ⑤ 用途说明（Purpose）→ 电力/控制/信号。标识要求清晰可读、耐久不褪色、位置统一、定期检查。" },
    ],
  },
  {
    id: 1314,
    en: "Please verify the cable routing.",
    cn: "请确认电缆敷设路径正确。",
    ipa: "/pliːz ˈvɛr.ɪ.faɪ ðə ˈkeɪ.bəl ˈruː.tɪŋ/",
    tags: ["第1314句", "施工指挥", "★★★★★"],
    when: "电缆敷设完成后，需要确认路径是否符合设计要求。verify 强调核实、确认，确保敷设路径正确，没有走错桥架或穿错管道。",
    words: [
      { w: "verify", ipa: "/ˈvɛr.ɪ.faɪ/", pos: "动词", cn: "确认；核实", memory: "① ver- = 真实；② -ify = 使...。\nverify = 使真实/确认/核实。\n在施工语境中，verify 指核实、确认某事是否符合要求。", phonics: "ver 读 /vɛr/，i 读 /ɪ/，fy 读 /faɪ/，重音在第一音节。", collocations: [["verify the routing", "确认路径"], ["verify the installation", "确认安装"], ["verify the results", "确认结果"]], examples: [["Please verify the cable routing.", "请确认电缆敷设路径。"], ["Verify all connections before energizing.", "送电前确认所有连接。"]] },
      { w: "routing", ipa: "/ˈruː.tɪŋ/", pos: "名词", cn: "路径；布线", memory: "① route = 路径（名词）/ 敷设（动词）；② routing = 路径规划/布线。\ncable routing = 电缆路径/电缆布线，指电缆的敷设路径。\nverify the routing = 确认敷设路径是否正确。", phonics: "rout 读 /ruːt/，ing 读 /ɪŋ/，重音在第一音节。", collocations: [["cable routing", "电缆路径"], ["routing diagram", "路径图"], ["routing plan", "路径规划"]], examples: [["Check the cable routing diagram.", "查看电缆路径图。"], ["The routing must follow the design.", "路径必须按照设计。"]] },
    ],
    phrases: [
      { p: "cable routing", ipa: "/ˈkeɪ.bəl ˈruː.tɪŋ/", cn: "电缆路径", why: "cable + routing = 电缆路径。routing 指电缆的敷设路径规划。" },
    ],
    grammar: [
      { q: "verify 和 check 有什么区别？", a: "verify = 确认/核实（强调核实是否符合要求，更正式）\ncheck = 检查（强调查看，不一定有结论）\n✅ verify the routing（确认路径 → 核实是否正确）\n✅ check the routing（检查路径 → 查看路径）\n在施工验收中，verify 更常用，因为需要确认是否符合设计要求。" },
    ],
    pattern: "Please verify the + 名词",
    patternExamples: [
      { en: "Please verify the installation.", cn: "请确认安装。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
      { en: "Please verify the connections.", cn: "请确认连接。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
      { en: "Please verify the settings.", cn: "请确认设置。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
    ],
    thinking: "电缆路径确认是施工验收的重要环节。\n确认内容：\n① 路径是否符合设计（Follow the design）\n② 是否走正确的桥架（Correct tray）\n③ 弯曲半径是否合规（Bending radius）\n④ 固定间距是否符合要求（Fixing spacing）\n⑤ 是否避开干扰源（Avoid interference）\n⑥ 是否便于维护（Easy to maintain）\n如果路径错误，可能导致：\n① 电缆过长 → 浪费材料\n② 弯曲过小 → 内部损伤\n③ 靠近干扰源 → 信号干扰\n④ 难以维护 → 增加维护成本\n施工后必须 verify the routing，确保符合设计要求。",
    pronunciation: "verify 重音在第一音节：/ˈvɛr.ɪ.faɪ/。\nrouting 重音在第一音节：/ˈruː.tɪŋ/。\n节奏：Please VE-ri-fy ｜ the CA-ble ｜ ROU-ting.",
    quiz: [
      { q: "请确认安装，怎么说？", a: "Please verify the installation." },
      { q: "电缆路径确认需要检查哪些内容？", a: "电缆路径确认需要检查：① 路径是否符合设计（Follow the design）② 是否走正确的桥架（Correct tray）③ 弯曲半径是否合规（Bending radius）④ 固定间距是否符合要求（Fixing spacing）⑤ 是否避开干扰源（Avoid interference）⑥ 是否便于维护（Easy to maintain）。路径错误可能导致电缆过长、弯曲过小、信号干扰、难以维护等问题。" },
    ],
  },
  {
    id: 1315,
    en: "Please remove all unnecessary materials.",
    cn: "请清理所有无关材料。",
    ipa: "/pliːz rɪˈmuːv ɔːl ʌnˈnɛs.ə.ser.i məˈtɪr.i.əlz/",
    tags: ["第1315句", "施工指挥", "★★★★★"],
    when: "施工完成后，需要清理现场，移除所有无关材料（多余的电缆、包装材料、废料等），保持施工现场整洁。这是施工收尾的重要步骤。",
    words: [
      { w: "remove", ipa: "/rɪˈmuːv/", pos: "动词", cn: "移除；清理", memory: "① re- = 再次；② move = 移动；③ remove = 移除。\n在施工语境中，remove 指清理、移除不需要的物品。\nremove materials = 清理材料。", phonics: "re 读 /rɪ/，move 读 /muːv/，重音在第二音节。", collocations: [["remove materials", "清理材料"], ["remove debris", "清理废料"], ["remove waste", "清理废物"]], examples: [["Please remove all debris.", "请清理所有废料。"], ["Remove the old cables.", "清理旧电缆。"]] },
      { w: "unnecessary", ipa: "/ʌnˈnɛs.ə.ser.i/", pos: "形容词", cn: "不必要的；无关的", memory: "① un- = 不；② necessary = 必要的；③ unnecessary = 不必要的。\nunnecessary materials = 无关材料/不需要的材料。\n施工完成后，需要清理这些无关材料。", phonics: "un 读 /ʌn/，nes 读 /nɛs/，sa 读 /sə/，ry 读 /ser.i/，重音在第二音节。", collocations: [["unnecessary materials", "无关材料"], ["unnecessary items", "不需要的物品"], ["unnecessary waste", "不必要的浪费"]], examples: [["Remove all unnecessary materials.", "清理所有无关材料。"], ["Do not bring unnecessary items.", "不要带不需要的物品。"]] },
    ],
    phrases: [
      { p: "unnecessary materials", ipa: "/ʌnˈnɛs.ə.ser.i məˈtɪr.i.əlz/", cn: "无关材料", why: "unnecessary + materials = 无关材料。unnecessary 指不需要的、多余的，materials 指施工材料。" },
    ],
    grammar: [
      { q: "remove 和 clean 有什么区别？", a: "remove = 移除/拿走（强调把东西拿走）\nclean = 清洁/打扫（强调清洁干净）\n✅ remove materials（清理材料 → 把材料拿走）\n✅ clean the area（清洁区域 → 打扫干净）\n施工收尾时，先 remove（清理走），再 clean（打扫干净）。" },
    ],
    pattern: "Please remove all + 形容词 + 名词",
    patternExamples: [
      { en: "Please remove all waste materials.", cn: "请清理所有废料。", words: [] },
      { en: "Please remove all packaging.", cn: "请清理所有包装。", words: [] },
      { en: "Please remove all debris.", cn: "请清理所有废料。", words: [] },
    ],
    thinking: "施工清理是收尾工作的重要环节。\n需要清理的材料：\n① 多余的电缆（Excess cables）\n② 包装材料（Packaging materials）\n③ 废料（Debris/waste）\n④ 旧设备（Old equipment）\n⑤ 工具（Tools）\n清理原则：\n① 分类处理（Sort and dispose）→ 可回收/不可回收\n② 危险废物专门处理（Hazardous waste disposal）→ 化学品、电池等\n③ 记录清理情况（Record cleaning）→ 拍照留档\n④ 恢复现场（Restore the site）→ 恢复到施工前状态\n施工完成后，必须清理现场，确保整洁、安全。",
    pronunciation: "remove 重音在第二音节：/rɪˈmuːv/。\nunnecessary 重音在第二音节：/ʌnˈnɛs.ə.ser.i/。\nmaterials 重音在第二音节：/məˈtɪr.i.əlz/。\n节奏：Please re-MOVE ｜ ALL un-NEC-es-sa-ry ｜ ma-TE-ri-als.",
    quiz: [
      { q: "请清理所有废料，怎么说？", a: "Please remove all debris." },
      { q: "施工清理需要清理哪些材料？", a: "施工清理需要清理的材料：① 多余的电缆（Excess cables）② 包装材料（Packaging materials）③ 废料（Debris/waste）④ 旧设备（Old equipment）⑤ 工具（Tools）。清理原则包括分类处理、危险废物专门处理、记录清理情况、恢复现场等。" },
    ],
  },
  {
    id: 1316,
    en: "Please clean the work area before leaving.",
    cn: "离开前请清理施工现场。",
    ipa: "/pliːz kliːn ðə wɜːrk ˈɛr.i.ə bɪˈfɔːr ˈliː.vɪŋ/",
    tags: ["第1316句", "施工指挥", "★★★★★"],
    when: "施工完成后，离开现场前，必须清理施工现场，确保整洁、安全。这是施工收尾的最后一步，也是职业素养的体现。",
    words: [
      { w: "clean", ipa: "/kliːn/", pos: "动词", cn: "清理；清洁", memory: "① clean = 清洁/清理。\n② clean the work area = 清理施工现场。\n在施工语境中，clean 指打扫、清洁施工现场。", phonics: "cl 读 /kl/，ean 读 /iːn/，长音。", collocations: [["clean the area", "清理区域"], ["clean up", "清理"], ["clean the site", "清理现场"]], examples: [["Please clean the work area.", "请清理施工现场。"], ["Clean up before leaving.", "离开前清理。"]] },
    ],
    phrases: [
      { p: "before leaving", ipa: "/bɪˈfɔːr ˈliː.vɪŋ/", cn: "离开前", why: "before + leaving = 离开前。before 后接动名词，表示在做某事之前。" },
    ],
    grammar: [
      { q: "before leaving 和 before you leave 有什么区别？", a: "before leaving = 离开前（before + 动名词，更简洁）\nbefore you leave = 你离开前（before + 从句，更明确主语）\n✅ Clean the area before leaving.（离开前清理区域 → 简洁）\n✅ Clean the area before you leave.（你离开前清理区域 → 明确）\n两种都可以，施工指令中通常用 before leaving，更简洁。" },
    ],
    pattern: "Please + 动词 + before + 动名词",
    patternExamples: [
      { en: "Please check before starting.", cn: "开始前请检查。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "starting", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "Please report before proceeding.", cn: "继续前请报告。", words: [{ w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
      { en: "Please verify before energizing.", cn: "送电前请确认。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
    ],
    thinking: "施工清理是职业素养的体现。\n离开前清理内容：\n① 清理废料（Remove debris）\n② 整理工具（Organize tools）\n③ 清洁地面（Clean the floor）\n④ 恢复设备（Restore equipment）\n⑤ 检查现场（Inspect the site）\n清理标准：\n① 无废料遗留（No debris left）\n② 无工具遗留（No tools left）\n③ 地面清洁（Clean floor）\n④ 设备恢复（Equipment restored）\n⑤ 安全无隐患（No safety hazards）\n施工现场的整洁程度反映了施工团队的专业素养。",
    pronunciation: "clean 的 ea 读长音 /iː/：/kliːn/。\nleaving 的 ea 读长音 /iː/：/ˈliː.vɪŋ/。\n节奏：Please CLEAN ｜ the WORK a-re-a ｜ be-FORE ｜ LEAV-ing.",
    quiz: [
      { q: "送电前请确认，怎么说？", a: "Please verify before energizing." },
      { q: "离开前清理需要达到什么标准？", a: "离开前清理标准：① 无废料遗留（No debris left）② 无工具遗留（No tools left）③ 地面清洁（Clean floor）④ 设备恢复（Equipment restored）⑤ 安全无隐患（No safety hazards）。清理内容包括清理废料、整理工具、清洁地面、恢复设备、检查现场等。" },
    ],
  },
  {
    id: 1317,
    en: "Please perform a final inspection.",
    cn: "请进行最终检查。",
    ipa: "/pliːz pərˈfɔːrm ə ˈfaɪ.nəl ɪnˈspɛk.ʃən/",
    tags: ["第1317句", "施工指挥", "★★★★★"],
    when: "施工完成、清理现场后，需要进行最终检查（final inspection），确认施工质量、安全措施、设备状态等，确保施工符合要求。",
    words: [
      { w: "perform", ipa: "/pərˈfɔːrm/", pos: "动词", cn: "执行；进行", memory: "① per- = 完全；② form = 形成；③ perform = 执行/进行。\nperform an inspection = 进行检查。\n在施工语境中，perform 指执行、进行某项工作。", phonics: "per 读 /pər/，form 读 /fɔːrm/，重音在第二音节。", collocations: [["perform an inspection", "进行检查"], ["perform a test", "进行测试"], ["perform maintenance", "进行维护"]], examples: [["Please perform a final inspection.", "请进行最终检查。"], ["Perform the test according to the procedure.", "按照流程进行测试。"]] },
      { w: "final", ipa: "/ˈfaɪ.nəl/", pos: "形容词", cn: "最终的；最后的", memory: "① final = 最终的/最后的。\n② final inspection = 最终检查，指施工完成后的最后一次检查。\nfinal inspection 确认施工质量、安全措施、设备状态等。", phonics: "fi 读 /faɪ/，nal 读 /nəl/，重音在第一音节。", collocations: [["final inspection", "最终检查"], ["final test", "最终测试"], ["final approval", "最终批准"]], examples: [["Perform the final inspection before handover.", "移交前进行最终检查。"], ["The final test passed.", "最终测试通过。"]] },
    ],
    phrases: [
      { p: "final inspection", ipa: "/ˈfaɪ.nəl ɪnˈspɛk.ʃən/", cn: "最终检查", why: "final + inspection = 最终检查。inspection 指检查，final 强调最后一次、最终的。" },
    ],
    grammar: [
      { q: "perform 和 do 有什么区别？", a: "perform = 执行/进行（正式用语，强调按照规范执行）\ndo = 做（通用动词，不强调规范）\n✅ perform an inspection（进行检查 → 正式、规范）\n✅ do an inspection（做检查 → 通用、不正式）\n在施工语境中，perform 更常用，因为强调按照规范执行。" },
    ],
    pattern: "Please perform a + 形容词 + 名词",
    patternExamples: [
      { en: "Please perform a thorough inspection.", cn: "请进行彻底检查。", words: [{ w: "perform", ipa: "/pərˈfɔːrm/", cn: "执行", phonics: "per 读 /pər/，form 读 /fɔːrm/" }] },
      { en: "Please perform a safety check.", cn: "请进行安全检查。", words: [{ w: "perform", ipa: "/pərˈfɔːrm/", cn: "执行", phonics: "per 读 /pər/，form 读 /fɔːrm/" }, { w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }, { w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please perform a quality test.", cn: "请进行质量测试。", words: [{ w: "perform", ipa: "/pərˈfɔːrm/", cn: "执行", phonics: "per 读 /pər/，form 读 /fɔːrm/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
    ],
    thinking: "最终检查是施工验收的关键环节。\n检查内容：\n① 施工质量（Work quality）→ 是否符合规范\n② 安全措施（Safety measures）→ 是否到位\n③ 设备状态（Equipment status）→ 是否正常\n④ 标识完整（Labels complete）→ 是否清晰\n⑤ 现场整洁（Site cleanliness）→ 是否清理\n⑥ 文档齐全（Documentation complete）→ 是否完整\n检查人员：\n① 施工负责人（Work supervisor）\n② 质量检查员（Quality inspector）\n③ 安全员（Safety officer）\n④ 设备负责人（Equipment owner）\n最终检查通过后，才能移交设备、恢复运行。",
    pronunciation: "perform 重音在第二音节：/pərˈfɔːrm/。\nfinal 重音在第一音节：/ˈfaɪ.nəl/。\ninspection 重音在第二音节：/ɪnˈspɛk.ʃən/。\n节奏：Please per-FORM ｜ a FI-nal ｜ in-SPEC-tion.",
    quiz: [
      { q: "请进行安全检查，怎么说？", a: "Please perform a safety check." },
      { q: "最终检查需要检查哪些内容？", a: "最终检查需要检查：① 施工质量（Work quality）→ 是否符合规范 ② 安全措施（Safety measures）→ 是否到位 ③ 设备状态（Equipment status）→ 是否正常 ④ 标识完整（Labels complete）→ 是否清晰 ⑤ 现场整洁（Site cleanliness）→ 是否清理 ⑥ 文档齐全（Documentation complete）→ 是否完整。检查人员包括施工负责人、质量检查员、安全员、设备负责人。" },
    ],
  },
  {
    id: 1318,
    en: "Please restore the system to normal operation.",
    cn: "请恢复系统正常运行。",
    ipa: "/pliːz rɪˈstɔːr ðə ˈsɪs.təm tuː ˈnɔːr.məl ˌɑː.pəˈreɪ.ʃən/",
    tags: ["第1318句", "施工指挥", "★★★★★"],
    when: "施工完成、检查通过后，需要恢复系统正常运行。restore 指恢复到施工前的正常状态，包括送电、启动设备、确认运行正常等。",
    words: [
      { w: "restore", ipa: "/rɪˈstɔːr/", pos: "动词", cn: "恢复", memory: "① re- = 再次；② store = 储存；③ restore = 恢复（恢复到原来的状态）。\nrestore the system = 恢复系统。\n在施工语境中，restore 指恢复系统到施工前的正常状态。", phonics: "re 读 /rɪ/，store 读 /stɔːr/，重音在第二音节。", collocations: [["restore the system", "恢复系统"], ["restore power", "恢复供电"], ["restore normal operation", "恢复正常运行"]], examples: [["Please restore the system.", "请恢复系统。"], ["Restore power after maintenance.", "维护后恢复供电。"]] },
      { w: "operation", ipa: "/ˌɑː.pəˈreɪ.ʃən/", pos: "名词", cn: "运行；操作", memory: "① operate = 运行/操作；② operation = 运行/操作。\nnormal operation = 正常运行，指设备按照设计要求正常运行。\nrestore to normal operation = 恢复到正常运行。", phonics: "op 读 /ɑː/，er 读 /ə/，a 读 /eɪ/，tion 读 /ʃən/，重音在第三音节。", collocations: [["normal operation", "正常运行"], ["resume operation", "恢复运行"], ["operation status", "运行状态"]], examples: [["The system is back to normal operation.", "系统已恢复正常运行。"], ["Check the operation status.", "检查运行状态。"]] },
    ],
    phrases: [
      { p: "restore to normal operation", ipa: "/rɪˈstɔːr tuː ˈnɔːr.məl ˌɑː.pəˈreɪ.ʃən/", cn: "恢复正常运行", why: "restore + to + normal operation = 恢复到正常运行。operation 指设备的运行状态。" },
    ],
    grammar: [
      { q: "restore 和 recover 有什么区别？", a: "restore = 恢复（人为恢复到原来状态，强调动作）\nrecover = 恢复（自然恢复或自我恢复，强调过程）\n✅ restore the system（恢复系统 → 人为操作恢复）\n✅ the system recovered（系统恢复了 → 自然恢复）\n在施工语境中，restore 更常用，因为需要人为操作恢复系统。" },
    ],
    pattern: "Please restore + 名词 + to + 状态",
    patternExamples: [
      { en: "Please restore power to the equipment.", cn: "请恢复设备供电。", words: [{ w: "restore", ipa: "/rɪˈstɔːr/", cn: "恢复", phonics: "re 读 /rɪ/，store 读 /stɔːr/" }, { w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }, { w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }] },
      { en: "Please restore the system to standby.", cn: "请恢复系统到待机状态。", words: [{ w: "restore", ipa: "/rɪˈstɔːr/", cn: "恢复", phonics: "re 读 /rɪ/，store 读 /stɔːr/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please restore the settings to default.", cn: "请恢复设置到默认值。", words: [{ w: "restore", ipa: "/rɪˈstɔːr/", cn: "恢复", phonics: "re 读 /rɪ/，store 读 /stɔːr/" }] },
    ],
    thinking: "系统恢复是施工的最后一步。\n恢复步骤：\n① 移除LOTO（Remove LOTO）→ 解除锁定挂牌\n② 恢复隔离点（Restore isolation points）→ 恢复供电、供水等\n③ 启动设备（Start equipment）→ 按照启动流程启动\n④ 确认运行正常（Verify normal operation）→ 检查参数、状态\n⑤ 移除警示标志（Remove warning signs）→ 移除施工标志\n⑥ 更新记录（Update records）→ 记录恢复时间、状态\n恢复注意事项：\n① 逐步恢复（Gradual restoration）→ 不要一次性全部恢复\n② 检查参数（Check parameters）→ 确认运行参数正常\n③ 观察运行（Observe operation）→ 观察一段时间确认稳定\n系统恢复后，施工才算真正完成。",
    pronunciation: "restore 重音在第二音节：/rɪˈstɔːr/。\noperation 重音在第三音节：/ˌɑː.pəˈreɪ.ʃən/。\n节奏：Please re-STORE ｜ the SYS-tem ｜ to NOR-mal ｜ op-e-RA-tion.",
    quiz: [
      { q: "请恢复设备供电，怎么说？", a: "Please restore power to the equipment." },
      { q: "系统恢复需要哪些步骤？", a: "系统恢复步骤：① 移除LOTO（Remove LOTO）→ 解除锁定挂牌 ② 恢复隔离点（Restore isolation points）→ 恢复供电、供水等 ③ 启动设备（Start equipment）→ 按照启动流程启动 ④ 确认运行正常（Verify normal operation）→ 检查参数、状态 ⑤ 移除警示标志（Remove warning signs）→ 移除施工标志 ⑥ 更新记录（Update records）→ 记录恢复时间、状态。恢复时需要逐步恢复、检查参数、观察运行。" },
    ],
  },
  {
    id: 1319,
    en: "Please update the maintenance records.",
    cn: "请更新维护记录。",
    ipa: "/pliːz ˌʌpˈdeɪt ðə ˈmeɪn.tən.əns ˈrɛk.ərdz/",
    tags: ["第1319句", "施工指挥", "★★★★★"],
    when: "施工完成后，需要更新维护记录，记录施工内容、时间、人员、结果等信息。维护记录是设备管理的重要依据，必须及时更新。",
    words: [
      { w: "update", ipa: "/ˌʌpˈdeɪt/", pos: "动词", cn: "更新", memory: "① up- = 向上；② date = 日期；③ update = 更新（使日期更新）。\nupdate records = 更新记录。\n在施工语境中，update 指更新维护记录、文档等。", phonics: "up 读 /ʌp/，date 读 /deɪt/，重音在第二音节。", collocations: [["update records", "更新记录"], ["update documents", "更新文档"], ["update the log", "更新日志"]], examples: [["Please update the maintenance records.", "请更新维护记录。"], ["Update the log after each operation.", "每次操作后更新日志。"]] },
      { w: "maintenance", ipa: "/ˈmeɪn.tən.əns/", pos: "名词", cn: "维护", memory: "① maintain = 维护；② maintenance = 维护（名词）。\nmaintenance records = 维护记录，指设备维护的历史记录。\n维护记录是设备管理的重要依据。", phonics: "main 读 /meɪn/，te 读 /tə/，nance 读 /nəns/，重音在第一音节。", collocations: [["maintenance records", "维护记录"], ["maintenance log", "维护日志"], ["maintenance history", "维护历史"]], examples: [["Check the maintenance records.", "查看维护记录。"], ["Update the maintenance log.", "更新维护日志。"]] },
    ],
    phrases: [
      { p: "maintenance records", ipa: "/ˈmeɪn.tən.əns ˈrɛk.ərdz/", cn: "维护记录", why: "maintenance + records = 维护记录。records 指记录，maintenance 指维护相关的内容。" },
    ],
    grammar: [
      { q: "update 和 upgrade 有什么区别？", a: "update = 更新（更新信息、记录、文档等）\nupgrade = 升级（升级设备、系统、软件等）\n✅ update records（更新记录 → 更新信息）\n✅ upgrade the system（升级系统 → 升级设备/软件）\n在施工语境中，update records 指更新维护记录，不是升级设备。" },
    ],
    pattern: "Please update the + 名词",
    patternExamples: [
      { en: "Please update the documents.", cn: "请更新文档。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }] },
      { en: "Please update the log.", cn: "请更新日志。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }] },
      { en: "Please update the database.", cn: "请更新数据库。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }] },
    ],
    thinking: "维护记录是设备管理的重要依据。\n维护记录应包含：\n① 施工日期（Date）→ 什么时候做的\n② 施工内容（Work content）→ 做了什么\n③ 施工人员（Personnel）→ 谁做的\n④ 使用材料（Materials used）→ 用了什么\n⑤ 施工结果（Result）→ 结果如何\n⑥ 下次维护时间（Next maintenance）→ 下次什么时候\n维护记录的作用：\n① 追踪设备历史（Track equipment history）\n② 分析故障模式（Analyze failure patterns）\n③ 制定维护计划（Plan maintenance）\n④ 满足合规要求（Meet compliance requirements）\n施工完成后，必须及时更新维护记录，确保信息准确、完整。",
    pronunciation: "update 重音在第二音节：/ˌʌpˈdeɪt/。\nmaintenance 重音在第一音节：/ˈmeɪn.tən.əns/。\nrecords 重音在第一音节：/ˈrɛk.ərdz/。\n节奏：Please up-DATE ｜ the MAIN-te-nance ｜ REC-ords.",
    quiz: [
      { q: "请更新文档，怎么说？", a: "Please update the documents." },
      { q: "维护记录应包含哪些信息？", a: "维护记录应包含：① 施工日期（Date）→ 什么时候做的 ② 施工内容（Work content）→ 做了什么 ③ 施工人员（Personnel）→ 谁做的 ④ 使用材料（Materials used）→ 用了什么 ⑤ 施工结果（Result）→ 结果如何 ⑥ 下次维护时间（Next maintenance）→ 下次什么时候。维护记录的作用是追踪设备历史、分析故障模式、制定维护计划、满足合规要求。" },
    ],
  },
  {
    id: 1320,
    en: "The maintenance work has been completed successfully.",
    cn: "本次维护工作已经顺利完成。",
    ipa: "/ðə ˈmeɪn.tən.əns wɜːrk hæz biːn kəmˈpliː.tɪd səkˈsɛs.fəl.i/",
    tags: ["第1320句", "施工指挥", "★★★★★"],
    when: "施工全部完成，负责人宣布维护工作顺利完成。这是施工收尾的最后一句话，标志着施工正式结束。successfully 强调顺利完成，没有事故或问题。",
    words: [
      { w: "completed", ipa: "/kəmˈpliː.tɪd/", pos: "动词（过去分词）", cn: "完成", memory: "① complete = 完成；② completed = 已完成的。\nhas been completed = 已经完成（现在完成时被动语态）。\n在施工语境中，completed 指施工已经完成。", phonics: "com 读 /kəm/，ple 读 /pliː/，ted 读 /tɪd/，重音在第二音节。", collocations: [["work completed", "工作完成"], ["task completed", "任务完成"], ["successfully completed", "顺利完成"]], examples: [["The work has been completed.", "工作已经完成。"], ["All tasks are completed.", "所有任务已完成。"]] },
      { w: "successfully", ipa: "/səkˈsɛs.fəl.i/", pos: "副词", cn: "成功地；顺利地", memory: "① success = 成功；② successful = 成功的；③ successfully = 成功地。\nsuccessfully completed = 顺利完成，强调没有事故或问题。\n在施工语境中，successfully 强调安全、质量都达标。", phonics: "suc 读 /sək/，cess 读 /sɛs/，ful 读 /fəl/，ly 读 /li/，重音在第二音节。", collocations: [["successfully completed", "顺利完成"], ["successfully installed", "成功安装"], ["successfully tested", "成功测试"]], examples: [["The maintenance was completed successfully.", "维护顺利完成。"], ["The system was successfully restored.", "系统成功恢复。"]] },
    ],
    phrases: [
      { p: "completed successfully", ipa: "/kəmˈpliː.tɪd səkˈsɛs.fəl.i/", cn: "顺利完成", why: "completed + successfully = 顺利完成。successfully 强调没有事故或问题，安全、质量都达标。" },
    ],
    grammar: [
      { q: "has been completed 是什么时态？", a: "has been completed = 现在完成时被动语态\n结构：has/have + been + 过去分词\n✅ The work has been completed.（工作已经完成 → 现在完成时被动）\n✅ The work was completed.（工作完成了 → 一般过去时被动）\n现在完成时强调'已经完成，对现在有影响'，一般过去时只陈述过去的事实。" },
    ],
    pattern: "The + 名词 + has been completed successfully",
    patternExamples: [
      { en: "The installation has been completed successfully.", cn: "安装已顺利完成。", words: [] },
      { en: "The test has been completed successfully.", cn: "测试已顺利完成。", words: [{ w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "The project has been completed successfully.", cn: "项目已顺利完成。", words: [] },
    ],
    thinking: "施工顺利完成是团队努力的结果。\n顺利完成的标志：\n① 施工质量达标（Quality meets standards）\n② 安全零事故（Zero safety incidents）\n③ 按时完成（Completed on time）\n④ 客户满意（Customer satisfied）\n⑤ 文档齐全（Documentation complete）\n⑥ 系统恢复正常（System restored to normal）\n施工完成后的工作：\n① 总结经验（Summarize experience）\n② 记录问题（Record issues）\n③ 提出改进建议（Suggest improvements）\n④ 感谢团队（Thank the team）\n施工顺利完成标志着本次维护工作圆满结束。",
    pronunciation: "completed 重音在第二音节：/kəmˈpliː.tɪd/。\nsuccessfully 重音在第二音节：/səkˈsɛs.fəl.i/。\n节奏：The MAIN-te-nance WORK ｜ has been com-PLE-ted ｜ suc-CESS-ful-ly.",
    quiz: [
      { q: "安装已顺利完成，怎么说？", a: "The installation has been completed successfully." },
      { q: "施工顺利完成的标志是什么？", a: "施工顺利完成的标志：① 施工质量达标（Quality meets standards）② 安全零事故（Zero safety incidents）③ 按时完成（Completed on time）④ 客户满意（Customer satisfied）⑤ 文档齐全（Documentation complete）⑥ 系统恢复正常（System restored to normal）。施工完成后还需要总结经验、记录问题、提出改进建议、感谢团队。" },
    ],
  },
];

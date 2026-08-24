// EXPORTS: MOCK_SENTENCES_PART6B

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART6B: ISentence[] = [
  {
    id: 166,
    en: "The transformer inspection is scheduled for today.",
    cn: "今天安排了变压器检查。",
    ipa: "/ðə trænsˈfɔːr.mər ɪnˈspɛk.ʃən ɪz ˈʃɛd.juːld fɔːr təˈdeɪ/",
    tags: ["第166句", "施工计划", "★★★★★"],
    when: "交接时汇报今天的维护计划，变压器检查是数据中心电气系统的重要定期维护项目。",
    words: [
      { w: "transformer", ipa: "/trænsˈfɔːr.mər/", pos: "名词", cn: "变压器", memory: "① trans- = 变换/转换；② form = 形态；③ -er = 做某事的设备。\ntransformer = 改变电压的设备。数据中心有主变压器将高压电（如33kV）降为低压（如415V）。\n常见类型：dry-type transformer（干式变压器）、oil-filled transformer（油浸变压器）。", phonics: "trans 读 /træns/，form 读 /fɔːrm/，er 读 /ər/，重音在第二音节。", collocations: [["transformer inspection", "变压器检查"], ["power transformer", "电力变压器"], ["transformer oil", "变压器油"]], examples: [["The transformer needs to be inspected.", "变压器需要检查。"], ["The transformer temperature is too high.", "变压器温度过高。"]] },
      { w: "inspection", ipa: "/ɪnˈspɛk.ʃən/", pos: "名词", cn: "检查；检验", memory: "① in- = 进入/仔细；② spect = 看（拉丁词根）；③ -ion = 名词后缀。\ninspection = 仔细看/检查。与动词 inspect 同根。\n数据中心常见检查：transformer inspection、fire inspection、CCTV inspection。", phonics: "in 读 /ɪn/，spec 读 /spɛk/，tion 读 /ʃən/，重音在第二音节。", collocations: [["routine inspection", "例行检查"], ["annual inspection", "年度检查"], ["inspection report", "检查报告"]], examples: [["The inspection found no issues.", "检查没发现问题。"], ["We need to schedule an inspection.", "我们需要安排一次检查。"]] },
    ],
    phrases: [
      { p: "scheduled for today", ipa: "/ˈʃɛd.juːld fɔːr təˈdeɪ/", cn: "安排在今天", why: "be scheduled for = 被安排在……（被动语态）。for 后面接时间点：for today / for tomorrow / for next week。" },
      { p: "transformer inspection", ipa: "/trænsˈfɔːr.mər ɪnˈspɛk.ʃən/", cn: "变压器检查", why: "数据中心电气系统核心设备。检查内容包括：油温、油位、绝缘电阻、红外热成像扫描。" },
    ],
    grammar: [
      { q: "is scheduled for 和 will be carried out 有什么区别？", a: "两者都表示安排/计划，但侧重不同：\n✅ is scheduled for today = 已排入日程（强调计划性）\n✅ will be carried out today = 今天将执行（强调执行动作）\n交接时两个都可以用，is scheduled for 更正式，will be carried out 更口语化。" },
    ],
    pattern: "The + 设备/系统 + inspection + is scheduled for + 时间",
    patternExamples: [
      { en: "The generator inspection is scheduled for tomorrow.", cn: "发电机检查安排在明天。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "The fire system inspection is scheduled for Friday.", cn: "消防系统检查安排在周五。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "The UPS inspection is scheduled for next week.", cn: "UPS检查安排在下周。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }] },
    ],
    thinking: "施工计划汇报的核心句型：The X inspection/maintenance is scheduled for Y。\n设备/系统名称直接替换 X，时间替换 Y。\n交接时按设备类型逐一汇报：变压器、发电机、消防、CCTV、门禁。",
    pronunciation: "transformer 重音在第二音节：trans-FOR-mer /trænsˈfɔːr.mər/。\ninspection 重音在第二音节：in-SPEC-tion /ɪnˈspɛk.ʃən/。\nscheduled 英式 /ˈʃɛd.juːld/，美式 /ˈskɛd.juːld/，数据中心常用美式。\n节奏：The TRANS-former ｜ in-SPEC-tion ｜ is SCHED-uled ｜ for to-DAY.",
    quiz: [
      { q: "变压器检查安排在明天，怎么说？", a: "The transformer inspection is scheduled for tomorrow." },
      { q: "scheduled 英式和美式发音有什么区别？", a: "英式 /ˈʃɛd.juːld/（shed-yooled）；美式 /ˈskɛd.juːld/（sked-yooled）。数据中心交接两种都可以，但要统一。" },
    ],
  },
  {
    id: 167,
    en: "The generator inspection is scheduled for this evening.",
    cn: "柴油发电机检查安排在今天晚上。",
    ipa: "/ðə ˈdʒɛn.ə.reɪ.tər ɪnˈspɛk.ʃən ɪz ˈʃɛd.juːld fɔːr ðɪs ˈiːv.nɪŋ/",
    tags: ["第167句", "施工计划", "★★★★★"],
    when: "发电机检查通常安排在非高峰时段（如晚上），减少对业务的影响。",
    words: [
      { w: "generator", ipa: "/ˈdʒɛn.ə.reɪ.tər/", pos: "名词", cn: "发电机", memory: "① generate = 产生/发电；② -or = 做某事的设备。\ngenerator = 发电的设备。数据中心发电机是市电中断时的应急电源。\n常见类型：diesel generator（柴油发电机）、gas generator（燃气发电机）。", phonics: "gen 读 /dʒɛn/，er 读 /ə/，a 读 /eɪ/，tor 读 /tər/，重音在第一音节。", collocations: [["generator inspection", "发电机检查"], ["generator test", "发电机测试"], ["generator fuel", "发电机燃料"]], examples: [["The generator failed to start.", "发电机启动失败。"], ["We need to test the generator.", "我们需要测试发电机。"]] },
      { w: "evening", ipa: "/ˈiːv.nɪŋ/", pos: "名词", cn: "傍晚；晚上", memory: "① even = 平的/均匀的（古义引申为日落后天色均匀变暗）；② -ing = 名词后缀。\nevening = 傍晚到入睡前的时段（约5pm-10pm）。\n数据中心交班时 evening = 晚班交接时段。", phonics: "eve 读 /iːv/，ning 读 /nɪŋ/，重音在第一音节。", collocations: [["this evening", "今天晚上"], ["evening shift", "晚班"], ["evening maintenance", "晚间维护"]], examples: [["The maintenance is scheduled for this evening.", "维护安排在今晚。"], ["The evening shift starts at 6 PM.", "晚班下午6点开始。"]] },
    ],
    phrases: [
      { p: "scheduled for this evening", ipa: "/ˈʃɛd.juːld fɔːr ðɪs ˈiːv.nɪŋ/", cn: "安排在今晚", why: "this evening = 今天晚上（傍晚到深夜）。发电机检查通常安排在非高峰时段，减少对业务影响。" },
    ],
    grammar: [
      { q: "this evening 和 tonight 有什么区别？", a: "时间段不同：\nthis evening = 傍晚到睡前（约5pm-10pm），较正式\n tonight = 今晚整夜（约6pm-6am），更口语\n交接时用 this evening 更精确，暗示维护会在合理时间完成，不会拖到深夜。" },
    ],
    pattern: "The + 设备 + inspection + is scheduled for this + 时段",
    patternExamples: [
      { en: "The UPS test is scheduled for this morning.", cn: "UPS测试安排在今天上午。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "The BMS check is scheduled for this afternoon.", cn: "BMS检查安排在今天下午。", words: [{ w: "bms", ipa: "/ˌbiːˈɛmˈɛs/", cn: "楼控", phonics: "B-M-S 逐字母读" }, { w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "The fire drill is scheduled for this evening.", cn: "消防演习安排在今晚。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }] },
    ],
    thinking: "施工计划汇报需要区分时间段：\nthis morning = 上午（维护类）\nthis afternoon = 下午（检查类）\nthis evening = 晚上（测试类/发电机）\n时间段选择反映维护性质：发电机测试噪音大，安排在晚上减少对办公区影响。",
    pronunciation: "generator 重音在第一音节：GEN-er-a-tor /ˈdʒɛn.ə.reɪ.tər/。\nevening 的 v 和 n 之间不要加元音：/ˈiːv.nɪŋ/。\n节奏：The GEN-er-a-tor ｜ in-SPEC-tion ｜ is SCHED-uled ｜ for this EVE-ning.",
    quiz: [
      { q: "发电机检查安排在今晚，怎么说？", a: "The generator inspection is scheduled for this evening." },
      { q: "generator 和 UPS 有什么区别？", a: "generator = 发电机（柴油/燃气驱动，市电中断后启动，需要几秒到几十秒）；UPS = 不间断电源（电池驱动，瞬间切换，0延迟）。两者配合使用：UPS 先顶住，generator 再启动。" },
    ],
  },
  {
    id: 168,
    en: "The fire protection inspection will be carried out today.",
    cn: "今天将进行消防系统检查。",
    ipa: "/ðə faɪər prəˈtɛk.ʃən ɪnˈspɛk.ʃən wɪl bi ˈkær.id aʊt təˈdeɪ/",
    tags: ["第168句", "施工计划", "★★★★★"],
    when: "消防系统检查是数据中心最关键的定期维护之一，涉及烟感、温感、气体灭火系统。",
    words: [
      { w: "fire protection", ipa: "/faɪər prəˈtɛk.ʃən/", pos: "名词", cn: "消防系统；消防保护", memory: "① fire = 火；② protection = 保护。\nfire protection = 消防保护系统。数据中心消防系统包括：\n- smoke detector（烟感探测器）\n- heat detector（温感探测器）\n- gas suppression system（气体灭火系统，如FM-200/Novec 1230）\n- sprinkler system（喷淋系统，一般数据中心不用水）", phonics: "fire 读 /faɪər/，pro 读 /prə/，tec 读 /tɛk/，tion 读 /ʃən/。", collocations: [["fire protection system", "消防系统"], ["fire protection inspection", "消防检查"], ["fire protection plan", "消防方案"]], examples: [["The fire protection system is critical.", "消防系统至关重要。"], ["We need to inspect the fire protection equipment.", "我们需要检查消防设备。"]] },
      { w: "carry out", ipa: "/ˈkær.i aʊt/", pos: "动词短语", cn: "执行；实施", memory: "① carry = 携带/进行；② out = 出去/完成。\ncarry out = 执行/实施（比 do 更正式）。\n同义词：execute / perform / conduct。\n数据中心常用：carry out inspection / carry out maintenance / carry out test。", phonics: "car 读 /kær/，ry 读 /i/，out 读 /aʊt/。注意 carry 和 out 之间连读。", collocations: [["carry out inspection", "执行检查"], ["carry out maintenance", "执行维护"], ["carry out test", "执行测试"]], examples: [["We will carry out the inspection tomorrow.", "我们明天执行检查。"], ["The test was carried out successfully.", "测试已成功执行。"]] },
    ],
    phrases: [
      { p: "will be carried out", ipa: "/wɪl bi ˈkær.id aʊt/", cn: "将被执行", why: "will be + 过去分词 = 将来被动语态。消防检查是被动执行的（由消防维保公司执行），所以用被动。carry out 的过去分词是 carried out。" },
    ],
    grammar: [
      { q: "will be carried out 和 is scheduled for 选哪个？", a: "都可以，但侧重点不同：\n✅ is scheduled for today = 已排入日程（强调计划已定）\n✅ will be carried out today = 今天将执行（强调即将发生）\n交接时两者可交替使用，避免重复。前几句用了 is scheduled for，这句换 will be carried out 增加句式变化。" },
    ],
    pattern: "The + 系统 + inspection + will be carried out + 时间",
    patternExamples: [
      { en: "The CCTV inspection will be carried out tomorrow.", cn: "CCTV检查明天执行。", words: [{ w: "cctv", ipa: "/ˌsiːˌsiːˈtiːˈviː/", cn: "监控", phonics: "C-C-T-V 逐字母读" }] },
      { en: "The access control test will be carried out next week.", cn: "门禁测试下周执行。", words: [{ w: "access", ipa: "/ˈæksɛs/", cn: "门禁", phonics: "ac 读 /æk/，cess 读 /sɛs/" }, { w: "control", ipa: "/kənˈtroʊl/", cn: "控制", phonics: "con 读 /kən/，trol 读 /troʊl/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "The generator load test will be carried out this evening.", cn: "发电机带载测试今晚执行。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
    ],
    thinking: "数据中心消防系统检查内容：\n1. 烟感/温感探测器功能测试\n2. 气体灭火系统压力检查\n3. 消防报警面板状态确认\n4. 应急照明和疏散指示灯检查\n5. 消防通道畅通确认\n交接时需明确：哪些区域会触发测试告警，提前通知值班人员。",
    pronunciation: "fire protection 连读：/faɪər prəˈtɛk.ʃən/，r 和 p 之间快速过渡。\ncarried out 连读：/ˈkær.id aʊt/，d 和 ou 之间连读。\n节奏：The FIRE pro-TEC-tion ｜ in-SPEC-tion ｜ will be CAR-ried OUT ｜ to-DAY.",
    quiz: [
      { q: "消防检查明天执行，怎么说？", a: "The fire protection inspection will be carried out tomorrow." },
      { q: "carry out 和 do 有什么区别？", a: "carry out 更正式，强调按计划执行；do 更口语化，泛指做事。\n交接场景用 carry out 更专业：carry out inspection / carry out maintenance。\n日常对话用 do：What did you do today?（你今天做了什么？）" },
    ],
  },
  {
    id: 169,
    en: "The CCTV maintenance has been postponed.",
    cn: "监控系统维护已经延期。",
    ipa: "/ðə ˌsiː.tiː.tiːˈviː ˈmeɪn.tə.nəns hæz biːn poʊstˈpoʊnd/",
    tags: ["第169句", "施工计划", "★★★★★"],
    when: "汇报维护计划变更，某些维护因故延期，需要接班人知道哪些没做。",
    words: [
      { w: "CCTV", ipa: "/ˌsiː.tiː.tiːˈviː/", pos: "名词", cn: "闭路电视监控系统", memory: "① C = Closed（封闭的）；② C = Circuit（电路）；③ T = Television（电视）；④ V = （无意义，凑四字母缩写）。\nCCTV = 闭路电视监控系统。数据中心用于安全监控、人员进出记录、异常事件回溯。\n注意：CCTV 是逐字母读 C-C-T-V，不读成一个单词。", phonics: "逐字母读：C /siː/ - C /siː/ - T /tiː/ - V /viː/。", collocations: [["CCTV camera", "监控摄像头"], ["CCTV footage", "监控录像"], ["CCTV maintenance", "监控维护"]], examples: [["Please check the CCTV footage.", "请查看监控录像。"], ["The CCTV camera is not working.", "监控摄像头不工作了。"]] },
      { w: "postponed", ipa: "/poʊstˈpoʊnd/", pos: "动词(过去分词)", cn: "被延期；被推迟", memory: "① post- = 后面（拉丁前缀）；② pone = 放置（拉丁词根）；③ -ed = 过去分词。\npostpone = 放到后面 = 延期/推迟。\n同义词：delayed / deferred / put off。\n反义词：brought forward（提前）/ advanced（提前）。", phonics: "post 读 /poʊst/，poned 读 /poʊnd/，重音在第二音节。", collocations: [["postponed indefinitely", "无限期延期"], ["postponed to next week", "延期到下周"], ["postponed due to", "因……延期"]], examples: [["The meeting was postponed.", "会议被延期了。"], ["Maintenance was postponed due to weather.", "维护因天气原因延期。"]] },
    ],
    phrases: [
      { p: "has been postponed", ipa: "/hæz biːn poʊstˈpoʊnd/", cn: "已经被延期", why: "has been + 过去分词 = 现在完成被动语态。强调延期这个动作已经发生，结果持续到现在。比 was postponed 更强调对当前的影响。" },
    ],
    grammar: [
      { q: "has been postponed 和 was postponed 有什么区别？", a: "时态不同，侧重点不同：\n✅ has been postponed = 现在完成时（强调结果：现在还没做）\n✅ was postponed = 一般过去时（强调过去动作：某时被延期了）\n交接时用 has been postponed 更好，因为接班人关心的是当前状态（还没做），而不是过去何时决定的。" },
    ],
    pattern: "The + 系统/设备 + maintenance + has been postponed",
    patternExamples: [
      { en: "The generator test has been postponed.", cn: "发电机测试已延期。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "The BMS upgrade has been postponed.", cn: "BMS升级已延期。", words: [{ w: "bms", ipa: "/ˌbiːˈɛmˈɛs/", cn: "楼控", phonics: "B-M-S 逐字母读" }] },
      { en: "The roof inspection has been postponed.", cn: "屋顶检查已延期。", words: [] },
    ],
    thinking: "维护延期在数据中心很常见，原因通常有：\n1. 备件未到货（spare parts not available）\n2. 天气原因（weather conditions）\n3. 客户未批准（customer approval pending）\n4. 人员不足（insufficient staff）\n5. 与其他维护冲突（conflict with other activities）\n交接时需说明延期原因和预计新时间。",
    pronunciation: "CCTV 逐字母读：C-C-T-V，不要读成 /ˈsɪk.tɪv/。\npostponed 重音在第二音节：post-PONED /poʊstˈpoʊnd/。\n节奏：The C-C-T-V ｜ MAIN-te-nance ｜ has been ｜ post-PONED.",
    quiz: [
      { q: "发电机测试已延期，怎么说？", a: "The generator test has been postponed." },
      { q: "postpone 和 delay 有什么区别？", a: "postpone = 主动决定推迟到某个时间（有计划）；delay = 被动延迟（通常是非预期的）。\n✅ The maintenance was postponed to next week.（主动延期到下周）\n✅ The flight was delayed by 2 hours.（被动延误2小时）" },
    ],
  },
  {
    id: 170,
    en: "The access control maintenance has been completed.",
    cn: "门禁系统维护已经完成。",
    ipa: "/ðə ˈæk.ses kənˈtroʊl ˈmeɪn.tə.nəns hæz biːn kəmˈpliː.tɪd/",
    tags: ["第170句", "施工计划", "★★★★★"],
    when: "汇报已完成的维护项目，让接班人知道哪些工作已经做完，不需要再关注。",
    words: [
      { w: "access control", ipa: "/ˈæk.ses kənˈtroʊl/", pos: "名词", cn: "门禁系统；出入控制", memory: "① access = 进入/访问权限；② control = 控制。\naccess control = 门禁系统。数据中心门禁系统包括：\n- card reader（读卡器）\n- biometric scanner（生物识别扫描仪：指纹/虹膜/人脸）\n- turnstile（闸机）\n- mantrap（防尾随通道/安全舱）\n分区管控：public area → controlled area → restricted area → critical area。", phonics: "ac 读 /æk/，cess 读 /ses/，con 读 /kən/，trol 读 /troʊl/。", collocations: [["access control system", "门禁系统"], ["access control card", "门禁卡"], ["access control log", "门禁记录"]], examples: [["Please swipe your access card.", "请刷门禁卡。"], ["The access control system is down.", "门禁系统故障。"]] },
      { w: "completed", ipa: "/kəmˈpliː.tɪd/", pos: "动词(过去分词)", cn: "已完成", memory: "① com- = 完全/一起；② plete = 满/完成（拉丁 plere = 填充）；③ -ed = 过去分词。\ncomplete = 完成（比 finish 更正式，强调全部做完）。\n同义词：finished / done / accomplished。\n数据中心状态词：completed（已完成）、in progress（进行中）、postponed（已延期）。", phonics: "com 读 /kəm/，plete 读 /pliːt/，d 读 /ɪd/，重音在第二音节。", collocations: [["successfully completed", "成功完成"], ["completed on time", "按时完成"], ["completed ahead of schedule", "提前完成"]], examples: [["The maintenance was completed.", "维护已完成。"], ["All tasks have been completed.", "所有任务已完成。"]] },
    ],
    phrases: [
      { p: "has been completed", ipa: "/hæz biːn kəmˈpliː.tɪd/", cn: "已经被完成", why: "has been + 过去分词 = 现在完成被动语态。强调完成的结果对现在有影响：维护做完了，现在不需要再做了。" },
    ],
    grammar: [
      { q: "has been completed 和 is completed 有什么区别？", a: "语法功能不同：\n✅ has been completed = 现在完成被动（强调动作完成的过程）\n✅ is completed = 系表结构（强调当前状态）\n交接时两者都可以：\n✅ The maintenance has been completed.（维护已经完成了 → 动作完成）\n✅ The maintenance is completed.（维护是已完成状态 → 状态描述）\n前者更正式，后者更口语。" },
    ],
    pattern: "The + 系统 + maintenance + has been completed",
    patternExamples: [
      { en: "The UPS maintenance has been completed.", cn: "UPS维护已完成。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "The BMS calibration has been completed.", cn: "BMS校准已完成。", words: [{ w: "bms", ipa: "/ˌbiːˈɛmˈɛs/", cn: "楼控", phonics: "B-M-S 逐字母读" }] },
      { en: "The generator fuel check has been completed.", cn: "发电机燃油检查已完成。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "施工计划交接时按状态分类汇报：\n✅ completed（已完成）→ 不需要关注\n📋 scheduled（已安排）→ 按时执行\n⏸ postponed（已延期）→ 需要重新安排\n❌ cancelled（已取消）→ 不再执行\n先报未完成的（scheduled/postponed），再报已完成的，让接班人优先关注未完成项。",
    pronunciation: "access control 连读：/ˈæk.ses kənˈtroʊl/，s 和 c 之间快速过渡。\ncompleted 重音在第二音节：com-PLE-ted /kəmˈpliː.tɪd/。\n节奏：The AC-cess CON-trol ｜ MAIN-te-nance ｜ has been ｜ com-PLE-ted.",
    quiz: [
      { q: "UPS维护已完成，怎么说？", a: "The UPS maintenance has been completed." },
      { q: "access control 系统包含哪些设备？", a: "门禁系统包括：card reader（读卡器）、biometric scanner（生物识别：指纹/虹膜/人脸）、turnstile（闸机）、mantrap（防尾随安全舱）。数据中心分区管控：public → controlled → restricted → critical。" },
    ],
  },
  {
    id: 171,
    en: "Has the PTW been approved?",
    cn: "作业许可证已经批准了吗？",
    ipa: "/hæz ðə ˌpiː.tiːˈdʌb.əl.juː biːn əˈpruːvd/",
    tags: ["第171句", "PTW/MOP/SOP/EOP", "★★★★★"],
    when: "施工前必须确认作业许可证（PTW）已批准，否则施工不能开始。这是数据中心施工管理的第一道关卡。",
    words: [
      { w: "PTW", ipa: "/ˌpiː.tiːˈdʌb.əl.juː/", pos: "名词(缩写)", cn: "作业许可证（Permit to Work）", memory: "① P = Permit（许可证）；② T = to（给/向）；③ W = Work（工作）。\nPTW = Permit to Work = 作业许可证。\n数据中心高风险作业必须办理PTW：\n- 电气作业（带电操作）\n- 热工作业（焊接/切割）\n- 高处作业（2米以上）\n- 受限空间作业（地板下/吊顶上）\n- 动火作业（明火操作）", phonics: "逐字母读：P /piː/ - T /tiː/ - W /ˈdʌb.əl.juː/。", collocations: [["PTW application", "PTW申请"], ["PTW approval", "PTW批准"], ["PTW holder", "PTW持有人"]], examples: [["Has the PTW been signed?", "PTW签字了吗？"], ["You need a PTW for this work.", "这项工作需要PTW。"]] },
      { w: "approved", ipa: "/əˈpruːvd/", pos: "动词(过去分词)", cn: "已批准；已审批", memory: "① ap- = 朝向（拉丁前缀 ad- 变体）；② prove = 证明/证实；③ -ed = 过去分词。\napprove = 批准/认可（上级对下级的正式同意）。\n名词形式：approval（批准）。\n反义词：rejected（拒绝）/ denied（驳回）。", phonics: "ap 读 /ə/（弱读），proved 读 /pruːvd/，重音在第二音节。", collocations: [["approved by", "由……批准"], ["approved budget", "已批准预算"], ["approved vendor", "已批准供应商"]], examples: [["The request was approved.", "请求已批准。"], ["Who approved this change?", "谁批准了这个变更？"]] },
    ],
    phrases: [
      { p: "has been approved", ipa: "/hæz biːn əˈpruːvd/", cn: "已经被批准", why: "Has ... been approved? = ……已经被批准了吗？（现在完成被动语态疑问句）。PTW审批流程：申请人提交 → 安全主管审核 → 批准签字 → 施工开始。" },
    ],
    grammar: [
      { q: "Has the PTW been approved? 是什么句型？", a: "现在完成被动语态疑问句：\n结构：Has/Have + 主语 + been + 过去分词?\n✅ Has the PTW been approved?（PTW已被批准了吗？）\n✅ Have the documents been signed?（文件已签字了吗？）\n✅ Has the maintenance been completed?（维护已完成了吗？）\n交接时常用此句型确认各项准备工作是否就绪。" },
    ],
    pattern: "Has the + 文件/许可 + been approved?",
    patternExamples: [
      { en: "Has the MOP been approved?", cn: "MOP已批准了吗？", words: [] },
      { en: "Has the change request been approved?", cn: "变更请求已批准了吗？", words: [] },
      { en: "Has the budget been approved?", cn: "预算已批准了吗？", words: [] },
    ],
    thinking: "数据中心施工文件体系（四级文件）：\n1️⃣ PTW（Permit to Work）= 作业许可证 → 准许施工\n2️⃣ MOP（Method of Procedure）= 维护操作方案 → 怎么做\n3️⃣ SOP（Standard Operating Procedure）= 标准操作程序 → 日常怎么做\n4️⃣ EOP（Emergency Operating Procedure）= 应急操作程序 → 紧急情况怎么做\n交接时逐一确认这四类文件是否就绪。",
    pronunciation: "PTW 逐字母读：P-T-W，W 读 /ˈdʌb.əl.juː/（两个音节）。\napproved 重音在第二音节：ap-PROVED /əˈpruːvd/。\n节奏：HAS the ｜ P-T-W ｜ been ap-PROVED?（句尾升调）",
    quiz: [
      { q: "变更请求已批准了吗？怎么说？", a: "Has the change request been approved?" },
      { q: "数据中心哪些作业需要PTW？", a: "高风险作业需要PTW：电气作业（带电操作）、热工作业（焊接/切割）、高处作业（2米以上）、受限空间作业（地板下/吊顶上）、动火作业（明火操作）。" },
    ],
  },
  {
    id: 172,
    en: "The PTW has been approved.",
    cn: "作业许可证已经批准。",
    ipa: "/ðə ˌpiː.tiːˈdʌb.əl.juː hæz biːn əˈpruːvd/",
    tags: ["第172句", "PTW/MOP/SOP/EOP", "★★★★★"],
    when: "回答上一句的确认问题，告知PTW已批准，施工可以开始。",
    words: [
      { w: "PTW", ipa: "/ˌpiː.tiːˈdʌb.əl.juː/", pos: "名词(缩写)", cn: "作业许可证", memory: "与上一句相同。PTW批准后，许可证持有人（PTW holder）必须随身携带，施工期间展示在现场。", phonics: "逐字母读：P /piː/ - T /tiː/ - W /ˈdʌb.əl.juː/。", collocations: [["PTW approved", "PTW已批准"], ["valid PTW", "有效PTW"], ["expired PTW", "过期PTW"]], examples: [["The PTW is valid for 24 hours.", "PTW有效期24小时。"], ["Please display the PTW on site.", "请在现场展示PTW。"]] },
    ],
    phrases: [
      { p: "has been approved", ipa: "/hæz biːn əˈpruːvd/", cn: "已经被批准", why: "陈述句形式：The PTW has been approved.（PTW已批准。）与上一句疑问句对应：Has the PTW been approved? → Yes, it has been approved." },
    ],
    grammar: [
      { q: "肯定回答有哪些方式？", a: "交接时确认PTW已批准的几种回答：\n✅ The PTW has been approved.（正式，完整句）\n✅ Yes, it has.（简短肯定）\n✅ It's approved.（口语化，省略 has been）\n✅ Approved and signed.（最简，强调已签字）\n交接时推荐用完整句，避免歧义。" },
    ],
    pattern: "The + 文件 + has been approved (+ by + 批准人)",
    patternExamples: [
      { en: "The MOP has been approved.", cn: "MOP已批准。", words: [] },
      { en: "The SOP has been approved by the manager.", cn: "SOP已被经理批准。", words: [] },
      { en: "The change request has been approved by the customer.", cn: "变更请求已被客户批准。", words: [] },
    ],
    thinking: "PTW/MOP/SOP/EOP 确认流程：\n交接人问：Has the PTW been approved?\n接班人答：The PTW has been approved.（已批准）\n或：No, it hasn't been approved yet.（还没批准）\n或：It's pending approval.（正在等审批）\n每项文件逐一确认，确保施工前所有文件就绪。",
    pronunciation: "PTW 逐字母清晰读：P-T-W。\napproved 的 v 要发出：/əˈpruːvd/，不要吞音成 /əˈpruːd/。\n节奏：The P-T-W ｜ HAS been ｜ ap-PROVED.",
    quiz: [
      { q: "MOP已被客户批准，怎么说？", a: "The MOP has been approved by the customer." },
      { q: "PTW没批准怎么回答？", a: "No, it hasn't been approved yet.（还没批准。）或 It's still pending approval.（还在等审批。）交接时必须如实报告，未批准不能开始施工。" },
    ],
  },
  {
    id: 173,
    en: "Has the MOP been approved?",
    cn: "维护操作方案已经批准了吗？",
    ipa: "/hæz ðə ˌɛm.oʊˈpiː biːn əˈpruːvd/",
    tags: ["第173句", "PTW/MOP/SOP/EOP", "★★★★★"],
    when: "确认维护操作方案（MOP）已批准。MOP详细描述施工步骤、风险评估和回退方案。",
    words: [
      { w: "MOP", ipa: "/ˌɛm.oʊˈpiː/", pos: "名词(缩写)", cn: "维护操作方案（Method of Procedure）", memory: "① M = Method（方法）；② O = of（的）；③ P = Procedure（程序/方案）。\nMOP = Method of Procedure = 维护操作方案。\nMOP包含内容：\n- 施工范围和目标\n- 详细操作步骤（step by step）\n- 风险评估和控制措施\n- 回退方案（rollback plan）\n- 预计停机时间和影响范围", phonics: "逐字母读：M /ɛm/ - O /oʊ/ - P /piː/。", collocations: [["MOP review", "MOP审核"], ["MOP approval", "MOP批准"], ["MOP document", "MOP文件"]], examples: [["Please review the MOP before starting.", "开始前请审核MOP。"], ["The MOP includes a rollback plan.", "MOP包含回退方案。"]] },
    ],
    phrases: [
      { p: "has been approved", ipa: "/hæz biːn əˈpruːvd/", cn: "已经被批准", why: "与PTW确认句型完全一致，只是文件类型从PTW换成MOP。交接时按文件类型逐一确认。" },
    ],
    grammar: [
      { q: "MOP和SOP有什么区别？", a: "用途不同：\nMOP（Method of Procedure）= 维护操作方案 → 针对特定施工项目，一次性使用\nSOP（Standard Operating Procedure）= 标准操作程序 → 针对日常操作，反复使用\n\n举例：\n✅ MOP：更换UPS电池的操作方案（一次性项目）\n✅ SOP：每日巡检标准流程（每天都做）" },
    ],
    pattern: "Has the + 文件 + been approved?",
    patternExamples: [
      { en: "Has the SOP been approved?", cn: "SOP已批准了吗？", words: [] },
      { en: "Has the EOP been approved?", cn: "EOP已批准了吗？", words: [] },
      { en: "Has the risk assessment been approved?", cn: "风险评估已批准了吗？", words: [] },
    ],
    thinking: "MOP审核要点（交接时需确认）：\n1. 施工步骤是否完整\n2. 风险评估是否覆盖所有风险\n3. 回退方案是否可行\n4. 停机时间是否与客户确认\n5. 操作人员资质是否符合要求\nMOP未批准 → 施工不能开始。",
    pronunciation: "MOP 逐字母读：M-O-P，不要读成 /mɒp/（拖把）。\n节奏：HAS the ｜ M-O-P ｜ been ap-PROVED?（句尾升调）",
    quiz: [
      { q: "SOP已批准了吗？怎么说？", a: "Has the SOP been approved?" },
      { q: "MOP必须包含哪些内容？", a: "MOP必须包含：施工范围和目标、详细操作步骤、风险评估和控制措施、回退方案（rollback plan）、预计停机时间和影响范围、操作人员资质要求。" },
    ],
  },
  {
    id: 174,
    en: "The MOP has been approved by the customer.",
    cn: "维护操作方案已经得到客户批准。",
    ipa: "/ðə ˌɛm.oʊˈpiː hæz biːn əˈpruːvd baɪ ðə ˈkʌs.tə.mər/",
    tags: ["第174句", "PTW/MOP/SOP/EOP", "★★★★★"],
    when: "回答MOP审批状态，特别强调是客户批准的（数据中心很多维护需要客户签字）。",
    words: [
      { w: "customer", ipa: "/ˈkʌs.tə.mər/", pos: "名词", cn: "客户", memory: "① custom = 习惯/定制；② -er = 做某事的人。\ncustomer = 客户/顾客。数据中心语境中 customer = 租户/客户（租用机柜空间的公司）。\n数据中心维护很多需要客户批准，因为维护可能影响客户的设备和服务。", phonics: "cus 读 /kʌs/，to 读 /tə/，mer 读 /mər/，重音在第一音节。", collocations: [["customer approval", "客户批准"], ["customer notification", "客户通知"], ["customer SLA", "客户SLA"]], examples: [["We need customer approval for this change.", "这个变更需要客户批准。"], ["Please notify the customer.", "请通知客户。"]] },
      { w: "by", ipa: "/baɪ/", pos: "介词", cn: "被；由", memory: "在被动语态中，by 引出动作的执行者。\nThe MOP was approved by the customer. = MOP被客户批准了。\nby 后面接批准人：by the customer / by the manager / by the safety officer。", phonics: "读 /baɪ/，与 buy（买）同音。", collocations: [["approved by customer", "客户批准"], ["signed by manager", "经理签字"], ["reviewed by team", "团队审核"]], examples: [["This was approved by the director.", "这是总监批准的。"], ["The plan was rejected by the customer.", "方案被客户驳回了。"]] },
    ],
    phrases: [
      { p: "approved by the customer", ipa: "/əˈpruːvd baɪ ðə ˈkʌs.tə.mər/", cn: "得到客户批准", why: "by the customer 说明批准人是客户。数据中心维护审批链：内部安全主管 → 运维经理 → 客户代表。某些关键维护必须客户签字。" },
    ],
    grammar: [
      { q: "by 短语放在哪里？", a: "被动语态中 by + 执行者 放在过去分词后面：\n✅ The MOP has been approved by the customer.（MOP被客户批准。）\n✅ The PTW was signed by the safety officer.（PTW被安全主管签字。）\n如果不需要说明执行者，可以省略 by 短语：\n✅ The MOP has been approved.（MOP已批准。）" },
    ],
    pattern: "The + 文件 + has been approved by + 批准人",
    patternExamples: [
      { en: "The SOP has been approved by the operations manager.", cn: "SOP已被运维经理批准。", words: [{ w: "operations", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }] },
      { en: "The EOP has been approved by the safety officer.", cn: "EOP已被安全主管批准。", words: [{ w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }] },
      { en: "The change request has been approved by the customer.", cn: "变更请求已被客户批准。", words: [] },
    ],
    thinking: "数据中心维护审批层级：\nLevel 1：内部审批 → 安全主管 + 运维经理\nLevel 2：客户审批 → 客户代表/项目经理\nLevel 3：管理层审批 → 设施总监/VP\n\n交接时需明确每份文件的审批状态和审批人：\n- PTW：安全主管已签字\n- MOP：客户已批准\n- SOP：运维经理已审核\n- EOP：安全主管已确认",
    pronunciation: "customer 重音在第一音节：CUS-to-mer /ˈkʌs.tə.mər/。\nby 读 /baɪ/，与 buy 同音。\n节奏：The M-O-P ｜ HAS been ｜ ap-PROVED ｜ by the CUS-to-mer.",
    quiz: [
      { q: "变更请求已被客户批准，怎么说？", a: "The change request has been approved by the customer." },
      { q: "数据中心维护审批有几个层级？", a: "通常三级：Level 1 内部审批（安全主管+运维经理）→ Level 2 客户审批（客户代表）→ Level 3 管理层审批（设施总监）。关键维护至少需要到Level 2。" },
    ],
  },
  {
    id: 175,
    en: "Has the SOP been reviewed?",
    cn: "标准操作程序已经审核了吗？",
    ipa: "/hæz ðə ˌɛs.oʊˈpiː biːn rɪˈvjuːd/",
    tags: ["第175句", "PTW/MOP/SOP/EOP", "★★★★★"],
    when: "确认SOP已审核。SOP是日常操作的标准流程，交接时需确认最新版本已审核并可用。",
    words: [
      { w: "SOP", ipa: "/ˌɛs.oʊˈpiː/", pos: "名词(缩写)", cn: "标准操作程序（Standard Operating Procedure）", memory: "① S = Standard（标准的）；② O = Operating（操作的）；③ P = Procedure（程序）。\nSOP = Standard Operating Procedure = 标准操作程序。\n数据中心常见SOP：\n- 每日巡检SOP（daily patrol SOP）\n- 访客接待SOP（visitor reception SOP）\n- 告警响应SOP（alarm response SOP）\n- 交接班SOP（shift handover SOP）", phonics: "逐字母读：S /ɛs/ - O /oʊ/ - P /piː/。", collocations: [["SOP review", "SOP审核"], ["SOP update", "SOP更新"], ["follow the SOP", "遵循SOP"]], examples: [["Please follow the SOP.", "请遵循SOP。"], ["The SOP needs to be updated.", "SOP需要更新。"]] },
      { w: "reviewed", ipa: "/rɪˈvjuːd/", pos: "动词(过去分词)", cn: "已审核；已审查", memory: "① re- = 再次（前缀）；② view = 看；③ -ed = 过去分词。\nreview = 再看一遍 = 审核/审查/回顾。\n名词形式也是 review（审核/评论）。\nreview 和 approve 不同：review = 审核（检查内容），approve = 批准（给出许可）。", phonics: "re 读 /rɪ/，viewed 读 /vjuːd/，重音在第二音节。", collocations: [["reviewed and approved", "审核并批准"], ["peer review", "同行审核"], ["annual review", "年度审核"]], examples: [["Has the document been reviewed?", "文件已审核了吗？"], ["Please review this report.", "请审核这份报告。"]] },
    ],
    phrases: [
      { p: "has been reviewed", ipa: "/hæz biːn rɪˈvjuːd/", cn: "已经被审核", why: "SOP 需要定期审核（通常每年一次），确保操作步骤与当前设备和流程一致。审核后可能更新版本号。" },
    ],
    grammar: [
      { q: "reviewed 和 approved 有什么区别？", a: "动作阶段不同：\nreviewed = 已审核（检查过内容，确认没问题）\napproved = 已批准（给出正式许可，可以使用）\n\n流程：先 review（审核）→ 再 approve（批准）\n✅ Has the SOP been reviewed?（审核了吗？）→ Yes, it's been reviewed.\n✅ Has the SOP been approved?（批准了吗？）→ Yes, it's been approved.\nSOP 通常审核后即可使用，不一定需要额外批准。" },
    ],
    pattern: "Has the + 文件 + been reviewed?",
    patternExamples: [
      { en: "Has the checklist been reviewed?", cn: "检查清单已审核了吗？", words: [{ w: "reviewed", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
      { en: "Has the incident report been reviewed?", cn: "事件报告已审核了吗？", words: [{ w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }, { w: "reviewed", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
      { en: "Has the training material been reviewed?", cn: "培训材料已审核了吗？", words: [{ w: "reviewed", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
    ],
    thinking: "SOP管理要点：\n1. 版本控制：每次修改更新版本号（v1.0 → v1.1）\n2. 定期审核：至少每年一次\n3. 培训确认：所有操作人员签字确认已阅读\n4. 现场可用：纸质版或电子版在现场随时可查\n交接时确认：SOP是最新版本、已审核、操作人员已培训。",
    pronunciation: "SOP 逐字母读：S-O-P，不要读成 /sɒp/。\nreviewed 的 v 要清晰：/rɪˈvjuːd/。\n节奏：HAS the ｜ S-O-P ｜ been re-VIEWED?（句尾升调）",
    quiz: [
      { q: "检查清单已审核了吗？怎么说？", a: "Has the checklist been reviewed?" },
      { q: "SOP和MOP最大的区别是什么？", a: "使用场景不同：SOP = 标准操作程序（日常反复使用，如每日巡检、交接班）；MOP = 维护操作方案（针对特定施工项目，一次性使用，如更换UPS电池）。SOP是通用的，MOP是专用的。" },
    ],
  },
  {
    id: 176,
    en: "The SOP has been reviewed and signed.",
    cn: "标准操作程序已经审核并签字。",
    ipa: "/ðə ˌɛs.oʊˈpiː hæz biːn rɪˈvjuːd ænd saɪnd/",
    tags: ["第176句", "PTW/MOP/SOP/EOP", "★★★★★"],
    when: "确认SOP不仅审核了，还已经签字确认，表示流程完整可用。",
    words: [
      { w: "signed", ipa: "/saɪnd/", pos: "动词(过去分词)", cn: "已签字；已签署", memory: "① sign = 签字/签名；② -ed = 过去分词。\nsign = 签字（在文件上写名字表示同意/确认）。\n名词形式：signature（签名）。\n数据中心文件签字要求：PTW必须安全主管签字、MOP必须客户签字、SOP操作人员签字确认已阅读。", phonics: "sign 读 /saɪn/，ed 读 /d/（sign的g不发音），注意 sign 和 sine 同音。", collocations: [["signed and sealed", "签字盖章"], ["signed by all parties", "各方签字"], ["digitally signed", "数字签名"]], examples: [["The document has been signed.", "文件已签字。"], ["Please sign here.", "请在这里签字。"]] },
      { w: "and", ipa: "/ænd/", pos: "连词", cn: "和；并且", memory: "连接两个并列的过去分词：reviewed and signed = 已审核并签字。\n类似结构：prepared and verified（已准备并确认）、tested and approved（已测试并批准）。", phonics: "通常弱读为 /ənd/ 或 /ən/，正式场合读 /ænd/。", collocations: [["reviewed and approved", "审核并批准"], ["tested and verified", "测试并确认"], ["prepared and ready", "准备好并就绪"]], examples: [["The plan has been reviewed and approved.", "方案已审核并批准。"], ["The system has been tested and verified.", "系统已测试并确认。"]] },
    ],
    phrases: [
      { p: "reviewed and signed", ipa: "/rɪˈvjuːd ænd saɪnd/", cn: "已审核并签字", why: "两个过去分词用 and 连接，表示两个动作都已完成。签字是审核后的确认步骤，表示审核人认可内容。" },
    ],
    grammar: [
      { q: "两个过去分词并列怎么表达？", a: "用 and 连接两个过去分词，表示动作先后完成：\n✅ reviewed and signed = 已审核并签字\n✅ prepared and verified = 已准备并确认\n✅ tested and approved = 已测试并批准\n✅ completed and documented = 已完成并记录\n交接时用并列结构一次说明多个完成状态，信息密度高。" },
    ],
    pattern: "The + 文件 + has been + 动作1 + and + 动作2",
    patternExamples: [
      { en: "The MOP has been reviewed and approved.", cn: "MOP已审核并批准。", words: [{ w: "reviewed", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
      { en: "The EOP has been prepared and verified.", cn: "EOP已准备并确认。", words: [{ w: "verified", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
      { en: "The report has been completed and submitted.", cn: "报告已完成并提交。", words: [{ w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
    ],
    thinking: "数据中心文件签字要求：\n📋 PTW：安全主管签字 + 操作人员签字\n📋 MOP：编制人签字 + 审核人签字 + 客户签字\n📋 SOP：编制人签字 + 所有操作人员签字确认已阅读\n📋 EOP：编制人签字 + 安全主管签字 + 演练确认签字\n交接时确认所有必要的签字都已完成。",
    pronunciation: "signed 的 g 不发音：/saɪnd/，不要读成 /sɪɡnd/。\nand 在快速语流中弱读为 /ən/：reviewed an' signed。\n节奏：The S-O-P ｜ HAS been ｜ re-VIEWED ｜ and SIGNED.",
    quiz: [
      { q: "EOP已准备并确认，怎么说？", a: "The EOP has been prepared and verified." },
      { q: "SOP操作人员需要做什么签字？", a: "所有操作人员需要签字确认已阅读并理解SOP内容（sign to acknowledge）。这不是审批签字，而是培训确认签字，表示'我已经读过这个SOP，知道怎么操作'。" },
    ],
  },
  {
    id: 177,
    en: "Is the EOP ready if an emergency occurs?",
    cn: "如果发生紧急情况，应急操作程序准备好了吗？",
    ipa: "/ɪz ðə ˌiː.oʊˈpiː ˈrɛd.i ɪf ən ɪˈmɜːr.dʒən.si əˈkɜːrz/",
    tags: ["第177句", "PTW/MOP/SOP/EOP", "★★★★★"],
    when: "确认应急操作程序（EOP）已准备就绪。EOP是紧急情况下的操作指南，必须随时可用。",
    words: [
      { w: "EOP", ipa: "/ˌiː.oʊˈpiː/", pos: "名词(缩写)", cn: "应急操作程序（Emergency Operating Procedure）", memory: "① E = Emergency（紧急的）；② O = Operating（操作的）；③ P = Procedure（程序）。\nEOP = Emergency Operating Procedure = 应急操作程序。\n数据中心常见EOP场景：\n- 市电全停（total power failure）\n- 火灾（fire）\n- 水灾/漏水（flooding/water leak）\n- 制冷系统全停（total cooling failure）\n- 安全入侵（security breach）", phonics: "逐字母读：E /iː/ - O /oʊ/ - P /piː/。", collocations: [["EOP drill", "EOP演练"], ["EOP activation", "EOP启动"], ["EOP ready", "EOP就绪"]], examples: [["We need to practice the EOP.", "我们需要演练EOP。"], ["The EOP was activated during the outage.", "停电期间启动了EOP。"]] },
      { w: "emergency", ipa: "/ɪˈmɜːr.dʒən.si/", pos: "名词", cn: "紧急情况；突发事件", memory: "① e- = 出（拉丁前缀 ex- 变体）；② merge = 出现/浮现；③ -ncy = 名词后缀。\nemergency = 突然出现的情况 = 紧急事件。\n形容词：emergency（紧急的），如 emergency exit（紧急出口）、emergency contact（紧急联系人）。", phonics: "e 读 /ɪ/，mer 读 /mɜːr/，gen 读 /dʒən/，cy 读 /si/，重音在第二音节。", collocations: [["emergency response", "应急响应"], ["emergency shutdown", "紧急停机"], ["emergency contact", "紧急联系人"]], examples: [["This is an emergency!", "这是紧急情况！"], ["Please call the emergency number.", "请拨打紧急电话。"]] },
      { w: "occurs", ipa: "/əˈkɜːrz/", pos: "动词(第三人称单数)", cn: "发生", memory: "① oc- = 朝向（拉丁前缀 ob- 变体）；② cur = 跑（拉丁词根）；③ -s = 第三人称单数。\noccur = 跑向 → 发生（比 happen 更正式）。\n名词形式：occurrence（发生/事件）。\n注意拼写：occur → occurred → occurring（双写 c 和 r）。", phonics: "oc 读 /ə/，curs 读 /kɜːrz/，重音在第二音节。", collocations: [["if an emergency occurs", "如果发生紧急情况"], ["when an error occurs", "当错误发生时"], ["frequently occurring", "频繁发生的"]], examples: [["If a fire occurs, activate the EOP.", "如果发生火灾，启动EOP。"], ["Power outages rarely occur here.", "这里很少发生停电。"]] },
    ],
    phrases: [
      { p: "if an emergency occurs", ipa: "/ɪf ən ɪˈmɜːr.dʒən.si əˈkɜːrz/", cn: "如果发生紧急情况", why: "if 引导条件从句：如果……发生。occurs 用第三人称单数，因为主语 an emergency 是单数。数据中心 EOP 就是为'如果发生紧急情况'而准备的。" },
    ],
    grammar: [
      { q: "if 条件句用什么时态？", a: "真实条件句（可能发生的情况）：\nif + 一般现在时, 主句用一般现在时/将来时\n✅ Is the EOP ready if an emergency occurs?（如果紧急情况发生，EOP准备好了吗？）\n✅ If a fire occurs, we activate the EOP.（如果发生火灾，我们启动EOP。）\n✅ If power fails, the generator will start.（如果停电，发电机会启动。）\n交接时用 if 条件句确认应急预案的就绪状态。" },
    ],
    pattern: "Is the + 文件/设备 + ready + if + 条件?",
    patternExamples: [
      { en: "Is the backup generator ready if power fails?", cn: "如果停电，备用发电机准备好了吗？", words: [{ w: "backup", ipa: "/ˈbækʌp/", cn: "备份", phonics: "back 读 /bæk/，up 读 /ʌp/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }] },
      { en: "Is the fire suppression system ready if a fire occurs?", cn: "如果发生火灾，灭火系统准备好了吗？", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Is the escalation list ready if we need support?", cn: "如果需要支持，升级联系人清单准备好了吗？", words: [{ w: "support", ipa: "/səˈpɔːrt/", cn: "支持", phonics: "sup 读 /sə/，port 读 /pɔːrt/" }] },
    ],
    thinking: "EOP准备就绪检查清单：\n1. EOP文件是否在现场可用（纸质+电子版）\n2. 所有操作人员是否已培训并签字\n3. 应急联系人清单是否最新\n4. 应急物资是否就位（手电筒、对讲机、急救包）\n5. 最近一次EOP演练是什么时候\n交接时逐一确认，确保紧急情况下能立即响应。",
    pronunciation: "EOP 逐字母读：E-O-P。\nemergency 重音在第二音节：e-MER-gen-cy /ɪˈmɜːr.dʒən.si/。\noccurs 重音在第二音节：oc-CURS /əˈkɜːrz/。\n节奏：IS the E-O-P ｜ READ-y ｜ if an E-mer-gen-cy ｜ oc-CURS?",
    quiz: [
      { q: "如果停电，备用发电机准备好了吗？怎么说？", a: "Is the backup generator ready if power fails?" },
      { q: "数据中心常见EOP场景有哪些？", a: "常见EOP场景：市电全停（total power failure）、火灾（fire）、水灾/漏水（flooding/water leak）、制冷系统全停（total cooling failure）、安全入侵（security breach）、自然灾害（natural disaster）。" },
    ],
  },
  {
    id: 178,
    en: "The EOP has been prepared and verified.",
    cn: "应急操作程序已经准备并确认。",
    ipa: "/ðə ˌiː.oʊˈpiː hæz biːn prɪˈpeərd ænd ˈvɛr.ɪ.faɪd/",
    tags: ["第178句", "PTW/MOP/SOP/EOP", "★★★★★"],
    when: "确认EOP已经准备完毕并经过验证/确认，紧急情况下可以立即使用。",
    words: [
      { w: "prepared", ipa: "/prɪˈpeərd/", pos: "动词(过去分词)", cn: "已准备", memory: "① pre- = 提前（前缀）；② pare = 准备（拉丁 parare）；③ -ed = 过去分词。\nprepare = 提前准备。\n名词形式：preparation（准备）。\nEOP prepared = EOP已准备就绪（文件编制完成、物资到位、人员培训完成）。", phonics: "pre 读 /prɪ/，pared 读 /peərd/，重音在第二音节。", collocations: [["well prepared", "准备充分"], ["prepared for emergency", "为紧急情况准备"], ["prepared in advance", "提前准备"]], examples: [["The team is well prepared.", "团队准备充分。"], ["Everything has been prepared.", "一切都已准备好。"]] },
      { w: "verified", ipa: "/ˈvɛr.ɪ.faɪd/", pos: "动词(过去分词)", cn: "已验证；已确认", memory: "① veri = 真实（拉丁 verus）；② -fy = 使成为（动词后缀）；③ -ed = 过去分词。\nverify = 确认真实 = 验证/确认。\n名词形式：verification（验证）。\nverify 和 review 不同：review = 审核（看内容），verify = 验证（确认有效/可用）。", phonics: "ver 读 /vɛr/，i 读 /ɪ/，fied 读 /faɪd/，重音在第一音节。", collocations: [["verified by", "由……验证"], ["verified and tested", "验证并测试"], ["identity verified", "身份已验证"]], examples: [["The system has been verified.", "系统已验证。"], ["Please verify the alarm status.", "请确认告警状态。"]] },
    ],
    phrases: [
      { p: "prepared and verified", ipa: "/prɪˈpeərd ænd ˈvɛr.ɪ.faɪd/", cn: "已准备并确认", why: "两个动作并列：prepare（准备）+ verify（验证）。先准备EOP文件和物资，再通过演练或检查验证其有效性。" },
    ],
    grammar: [
      { q: "prepared 和 ready 有什么区别？", a: "词性不同：\nprepared = 动词过去分词（已准备好的 → 强调动作完成）\nready = 形容词（准备好的 → 强调状态）\n\n✅ The EOP has been prepared.（EOP已经被准备好了 → 动作）\n✅ The EOP is ready.（EOP是准备好的 → 状态）\n✅ The EOP has been prepared and is ready for use.（EOP已准备好，可以使用了 → 动作+状态）" },
    ],
    pattern: "The + 文件/设备 + has been + 动作1 + and + 动作2",
    patternExamples: [
      { en: "The backup system has been tested and verified.", cn: "备份系统已测试并验证。", words: [{ w: "backup", ipa: "/ˈbækʌp/", cn: "备份", phonics: "back 读 /bæk/，up 读 /ʌp/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "tested", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "The emergency kit has been prepared and checked.", cn: "应急包已准备并检查。", words: [{ w: "emergency", ipa: "/ɪˈmɜːrdʒənsi/", cn: "紧急", phonics: "e 读 /ɪ/，mergency 读 /mɜːrdʒənsi/" }, { w: "checked", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "The escalation list has been updated and verified.", cn: "升级联系人清单已更新并验证。", words: [{ w: "verified", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
    ],
    thinking: "EOP验证方法：\n1. 桌面演练（tabletop exercise）：模拟场景走流程\n2. 实际演练（full drill）：真实启动设备和流程\n3. 文件审查（document review）：确认步骤完整、联系人最新\n4. 设备检查（equipment check）：确认应急物资可用\n数据中心要求至少每半年做一次EOP演练。",
    pronunciation: "prepared 重音在第二音节：pre-PARED /prɪˈpeərd/。\nverified 重音在第一音节：VER-i-fied /ˈvɛr.ɪ.faɪd/。\n节奏：The E-O-P ｜ HAS been ｜ pre-PARED ｜ and VER-i-fied.",
    quiz: [
      { q: "应急包已准备并检查，怎么说？", a: "The emergency kit has been prepared and checked." },
      { q: "EOP验证有哪些方法？", a: "四种验证方法：桌面演练（tabletop exercise，模拟场景走流程）、实际演练（full drill，真实启动）、文件审查（document review，确认步骤完整）、设备检查（equipment check，确认物资可用）。至少每半年一次。" },
    ],
  },
  {
    id: 179,
    en: "All required documents are available on site.",
    cn: "所有需要的文件都已经放在现场。",
    ipa: "/ɔːl rɪˈkwaɪərd ˈdɒk.jə.mənts ɑːr əˈveɪ.lə.bəl ɒn saɪt/",
    tags: ["第179句", "PTW/MOP/SOP/EOP", "★★★★★"],
    when: "汇总确认所有施工相关文件都已在现场就位，操作人员可以随时取用。",
    words: [
      { w: "required", ipa: "/rɪˈkwaɪərd/", pos: "形容词(过去分词)", cn: "需要的；必需的", memory: "① re- = 再次（前缀）；② quire = 寻求（拉丁 quaerere）；③ -ed = 过去分词作形容词。\nrequired = 被需要的 = 必需的/强制的。\nrequired documents = 必需的文件（不是可选的）。\n同义词：mandatory（强制的）、necessary（必要的）。", phonics: "re 读 /rɪ/，quired 读 /kwaɪərd/，重音在第二音节。", collocations: [["required documents", "必需文件"], ["required training", "必需培训"], ["as required", "按要求"]], examples: [["All required permits are ready.", "所有必需的许可证已就绪。"], ["Training is required before starting.", "开始前需要培训。"]] },
      { w: "available", ipa: "/əˈveɪ.lə.bəl/", pos: "形容词", cn: "可获得的；可用的", memory: "① a- = 朝向（前缀）；② vail = 有用（古法语）；③ -able = 能够（后缀）。\navailable = 能够获得的 = 可用的/可获取的。\n名词形式：availability（可用性）。\navailable on site = 在现场可以获取。", phonics: "a 读 /ə/，vail 读 /veɪl/，able 读 /ə.bəl/，重音在第二音节。", collocations: [["available on site", "现场可用"], ["available 24/7", "全天候可用"], ["currently available", "当前可用"]], examples: [["Spare parts are available.", "备件可用。"], ["Is the tool available?", "工具可用吗？"]] },
      { w: "on site", ipa: "/ɒn saɪt/", pos: "介词短语", cn: "在现场", memory: "① on = 在……上；② site = 现场/场地。\non site = 在现场（数据中心施工区域）。\n反义词：off site（离场/远程）。\n数据中心要求关键文件必须在 on site，不能只存在办公室电脑上。", phonics: "on 读 /ɒn/，site 读 /saɪt/。", collocations: [["on-site inspection", "现场检查"], ["on-site engineer", "现场工程师"], ["on-site storage", "现场存储"]], examples: [["The engineer is on site.", "工程师在现场。"], ["Documents must be available on site.", "文件必须在现场可用。"]] },
    ],
    phrases: [
      { p: "required documents", ipa: "/rɪˈkwaɪərd ˈdɒk.jə.mənts/", cn: "必需的文件", why: "required 修饰 documents，表示这些文件不是可选的，是施工必须具备的。包括：PTW、MOP、SOP、EOP、风险评估、人员资质证书等。" },
      { p: "available on site", ipa: "/əˈveɪ.lə.bəl ɒn saɪt/", cn: "在现场可用", why: "on site 强调文件物理位置在施工现场，不是远程服务器或办公室里。紧急情况时需要立即取用，不能等。" },
    ],
    grammar: [
      { q: "available 的位置怎么放？", a: "available 是表语形容词，通常放在 be 动词后面：\n✅ Documents are available.（文件可用。）\n✅ Documents are available on site.（文件在现场可用。）\n✅ All required documents are available on site.（所有必需文件在现场可用。）\n\n也可以作后置定语：\n✅ The tools available on site（现场可用的工具）" },
    ],
    pattern: "All required + 名词 + are available + 地点",
    patternExamples: [
      { en: "All required tools are available in the tool room.", cn: "所有必需工具在工具室可用。", words: [{ w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "All required spare parts are available in the warehouse.", cn: "所有必需备件在仓库可用。", words: [] },
      { en: "All required permits are available at the reception.", cn: "所有必需许可证在前台可用。", words: [] },
    ],
    thinking: "施工现场文件检查清单：\n📋 PTW（作业许可证）— 已批准，现场展示\n📋 MOP（维护操作方案）— 已批准，操作人员人手一份\n📋 SOP（标准操作程序）— 已审核，最新版本\n📋 EOP（应急操作程序）— 已验证，紧急可用\n📋 风险评估报告 — 已签字\n📋 人员资质证书 — 已核实\n📋 设备手册/图纸 — 现场可查\n交接时确认所有文件 on site，不能只说'在电脑里'。",
    pronunciation: "required 重音在第二音节：re-QUIRED /rɪˈkwaɪərd/。\navailable 重音在第二音节：a-VAIL-a-ble /əˈveɪ.lə.bəl/。\non site 连读：/ɒn saɪt/。\n节奏：ALL re-QUIRED ｜ DOC-u-ments ｜ are a-VAIL-a-ble ｜ on SITE.",
    quiz: [
      { q: "所有必需工具在工具室可用，怎么说？", a: "All required tools are available in the tool room." },
      { q: "为什么文件必须在 on site？", a: "因为紧急情况下（如火灾、停电）需要立即取用文件执行EOP。如果文件只在远程服务器或办公室电脑上，网络中断或无法进入办公室时就拿不到文件。关键文件必须有纸质备份在现场。" },
    ],
  },
  {
    id: 180,
    en: "Now let's review today's site supervision plan.",
    cn: "现在我们开始检查今天的随工监督安排。",
    ipa: "/naʊ lɛts rɪˈvjuː təˈdeɪz saɪt ˌsuː.pərˈvɪʒ.ən plæn/",
    tags: ["第180句", "转场句", "★★★★★"],
    when: "PTW/MOP/SOP/EOP文件确认完毕后，转入下一个交接环节：随工监督安排。随工监督指外部施工人员进场时，数据中心安排专人全程陪同监督。",
    words: [
      { w: "site supervision", ipa: "/saɪt ˌsuː.pərˈvɪʒ.ən/", pos: "名词", cn: "随工监督；现场监督", memory: "① site = 现场/场地；② supervision = 监督/监管。\nsite supervision = 现场监督。数据中心外部人员（供应商/施工队）进场作业时，必须安排数据中心员工全程陪同监督。\n目的：确保施工按MOP执行、不触碰非授权设备、遵守安全规范。\nsupervisor = 监督人/主管。", phonics: "site 读 /saɪt/，su 读 /suː/，per 读 /pər/，vi 读 /vɪ/，sion 读 /ʒən/。", collocations: [["site supervision plan", "随工监督安排"], ["site supervisor", "现场监督人"], ["under supervision", "在监督下"]], examples: [["All external work requires site supervision.", "所有外部施工需要随工监督。"], ["Who is the site supervisor today?", "今天的现场监督人是谁？"]] },
      { w: "supervision", ipa: "/ˌsuː.pərˈvɪʒ.ən/", pos: "名词", cn: "监督；监管", memory: "① super- = 上面/超越（前缀）；② vis = 看（拉丁 videre）；③ -ion = 名词后缀。\nsupervision = 从上面看 = 监督/监管。\n动词：supervise（监督）；人：supervisor（监督人/主管）。\n数据中心 supervision 级别：\n- 全程监督（continuous supervision）= 高风险作业\n- 定期巡查（periodic inspection）= 低风险作业", phonics: "su 读 /suː/，per 读 /pər/，vi 读 /vɪ/，sion 读 /ʒən/，重音在第三音节。", collocations: [["direct supervision", "直接监督"], ["close supervision", "密切监督"], ["under supervision", "在监督下"]], examples: [["The work must be done under supervision.", "这项工作必须在监督下完成。"], ["Supervision is required for all vendors.", "所有供应商都需要监督。"]] },
    ],
    phrases: [
      { p: "site supervision plan", ipa: "/saɪt ˌsuː.pərˈvɪʒ.ən plæn/", cn: "随工监督安排", why: "site supervision plan 包含：谁负责监督、监督哪些施工、监督时间段、监督要点。交接时需确认每项施工的监督人已安排。" },
      { p: "let's review", ipa: "/lɛts rɪˈvjuː/", cn: "让我们检查", why: "let's = let us 的缩写，表示建议/提议。交接中频繁使用 let's 引出下一个环节：\nlet's review... = 让我们检查……\nlet's move on to... = 让我们转到……" },
    ],
    grammar: [
      { q: "today's 是什么语法？", a: "today's = today + 's = 今天的所有格（genitive case）。\n✅ today's plan = 今天的计划\n✅ today's schedule = 今天的安排\n✅ today's maintenance = 今天的维护\n\n注意：时间名词可以加 's 表示所属关系：\ntoday's / tomorrow's / yesterday's / this week's" },
    ],
    pattern: "Now let's review + 时间's + 事项",
    patternExamples: [
      { en: "Now let's review today's maintenance schedule.", cn: "现在检查今天的维护计划。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }, { w: "schedule", ipa: "/ˈʃɛdjuːl/", cn: "安排", phonics: "sched 读 /ʃɛd/，ule 读 /juːl/" }] },
      { en: "Now let's review tomorrow's shift arrangement.", cn: "现在检查明天的排班安排。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "shift", ipa: "/ʃɪft/", cn: "班次", phonics: "shift 读 /ʃɪft/" }] },
      { en: "Now let's review this week's incident summary.", cn: "现在检查本周的事件汇总。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
    ],
    thinking: "交接转场句模式总结（每部分结束时的转场）：\n✅ Now let's review the maintenance schedule.（→ 施工计划）\n✅ Now let's review the fault tickets.（→ 故障单）\n✅ Now let's review the SLA status.（→ SLA状态）\n✅ Now let's review today's site supervision plan.（→ 随工监督）\n\n随工监督安排要点：\n1. 每项施工对应一个监督人\n2. 高风险作业需全程监督\n3. 监督人需了解MOP内容\n4. 监督人有权停止不安全操作",
    pronunciation: "supervision 重音在第三音节：su-per-VI-sion /ˌsuː.pərˈvɪʒ.ən/。\ntoday's 的 s 发 /z/：/təˈdeɪz/。\n节奏：NOW let's ｜ re-VIEW ｜ to-DAY'S ｜ SITE su-per-VI-sion ｜ PLAN.",
    quiz: [
      { q: "现在检查明天的排班安排，怎么说？", a: "Now let's review tomorrow's shift arrangement." },
      { q: "数据中心随工监督有哪些级别？", a: "两个级别：全程监督（continuous supervision）= 高风险作业，如电气操作、消防维护，监督人全程陪同；定期巡查（periodic inspection）= 低风险作业，如清洁、搬运，每隔一定时间巡查一次。" },
    ],
  },
];

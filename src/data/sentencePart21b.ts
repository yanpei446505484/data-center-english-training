// EXPORTS: MOCK_SENTENCES_PART21B
// Part 21B: 变压器后半段 (1501-1520)

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART21B: ISentence[] = [
  {
    id: 1501,
    en: "Please prepare to energize Transformer No.1.",
    cn: "请准备给1号变压器送电。",
    ipa: "/pliːz prɪˈpɛr tu ˈɛnərˌdʒaɪz ˈtrænsfɔːrmər ˌnʌmbər wʌn/",
    tags: ["变压器", "上电操作", "★★★★★"],
    when: "变压器送电前的准备工作，确保所有安全条件满足。",
    words: [
      {
        w: "prepare",
        ipa: "/prɪˈpɛr/",
        pos: "动词",
        cn: "准备",
        memory: "prepare = 准备、预备。prepare to do sth = 准备做某事。强调为即将到来的操作做前期检查。",
        phonics: "pre 读 /prɪ/，pare 读 /ˈpɛr/，重音在第二音节。",
        collocations: [["prepare to energize", "准备送电"], ["prepare for maintenance", "准备维护"], ["prepare the checklist", "准备检查清单"]],
        examples: [["Please prepare to start the generator.", "请准备启动发电机。"], ["We need to prepare for the load test.", "我们需要准备负载测试。"]]
      },
      {
        w: "energize",
        ipa: "/ˈɛnərˌdʒaɪz/",
        pos: "动词",
        cn: "送电；通电",
        memory: "energy = 能量、电力；-ize = 动词后缀，表示'使...'。energize = 使有电 = 送电、通电。反义词：de-energize = 停电、断电。",
        phonics: "en 读 /ˈɛn/，er 读 /ər/，gize 读 /ˌdʒaɪz/，重音在第一音节。",
        collocations: [["energize the transformer", "给变压器送电"], ["energize the circuit", "给电路送电"], ["energize the system", "给系统送电"]],
        examples: [["Please energize the UPS system.", "请给UPS系统送电。"], ["The line has been energized.", "线路已经送电。"]]
      },
      {
        w: "transformer",
        ipa: "/ˈtrænsfɔːrmər/",
        pos: "名词",
        cn: "变压器",
        memory: "trans- = 转换、变换；form = 形状、形式；-er = 表示'做...的器具'。transformer = 变压器，用于改变电压等级的设备。",
        phonics: "trans 读 /træns/，form 读 /fɔːrm/，er 读 /ər/，重音在第一音节。",
        collocations: [["step-up transformer", "升压变压器"], ["step-down transformer", "降压变压器"], ["transformer load", "变压器负载"]],
        examples: [["The transformer is operating normally.", "变压器运行正常。"], ["Check the transformer temperature.", "检查变压器温度。"]]
      }
    ],
    phrases: [
      {
        p: "prepare to energize",
        ipa: "/prɪˈpɛr tu ˈɛnərˌdʒaɪz/",
        cn: "准备送电",
        why: "prepare to + 动词原形，表示准备做某事。energize 是电力系统的专业术语，表示给设备通电、送电。"
      }
    ],
    grammar: [
      {
        q: "prepare to do 和 prepare for 有什么区别？",
        a: "prepare to do = 准备做某事（后接动词不定式）\nprepare for + 名词 = 为...做准备（后接名词或名词短语）\n✅ Please prepare to energize the transformer.（准备给变压器送电）\n✅ Please prepare for the energization.（为送电做准备）\n本句使用 prepare to energize，强调即将进行的送电动作。"
      }
    ],
    pattern: "Please prepare to + 动词原形",
    patternExamples: [
      { en: "Please prepare to start the generator.", cn: "请准备启动发电机。", words: [{ w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "Please prepare to de-energize the system.", cn: "请准备给系统停电。", words: [{ w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please prepare to perform the test.", cn: "请准备进行测试。", words: [{ w: "perform", ipa: "/pərˈfɔːrm/", cn: "执行", phonics: "per 读 /pər/，form 读 /fɔːrm/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] }
    ],
    thinking: "变压器送电是高风险操作，必须严格按照操作规程执行。prepare to energize 表示准备阶段，此时尚未执行送电动作，但需要完成所有前置检查：确认所有安全措施到位、接地已拆除、人员已撤离、保护装置已投入等。",
    pronunciation: "energize 的重音在第一音节，/ˈɛnərˌdʒaɪz/，注意不要读成 /ɛˈnɜːrdʒaɪz/。transformer 的 trans 读 /træns/，不是 /trænz/。",
    quiz: [
      {
        q: "如何表达'请准备给2号变压器停电'？",
        a: "Please prepare to de-energize Transformer No.2."
      },
      {
        q: "energize 和 de-energize 分别表示什么？",
        a: "energize = 送电、通电；de-energize = 停电、断电。de- 是表示'去除、相反'的前缀。"
      }
    ]
  },
  {
    id: 1502,
    en: "Please confirm that all safety checks have been completed.",
    cn: "请确认所有安全检查已经完成。",
    ipa: "/pliːz kənˈfɜːrm ðæt ɔːl ˈseɪfti tʃɛks hæv biːn kəmˈpliːtɪd/",
    tags: ["变压器", "安全检查", "★★★★★"],
    when: "送电前的关键确认步骤，确保所有安全检查项已完成。",
    words: [
      {
        w: "confirm",
        ipa: "/kənˈfɜːrm/",
        pos: "动词",
        cn: "确认；证实",
        memory: "con- = 加强语气；firm = 坚定、确定。confirm = 确认、证实某事确实属实。",
        phonics: "con 读 /kən/，firm 读 /ˈfɜːrm/，重音在第二音节。",
        collocations: [["confirm the status", "确认状态"], ["confirm completion", "确认完成"], ["confirm the operation", "确认操作"]],
        examples: [["Please confirm that the breaker is open.", "请确认断路器已分闸。"], ["Can you confirm the voltage reading?", "你能确认电压读数吗？"]]
      },
      {
        w: "safety check",
        ipa: "/ˈseɪfti tʃɛk/",
        pos: "名词短语",
        cn: "安全检查",
        memory: "safety = 安全；check = 检查。safety check = 安全检查，确保操作环境符合安全要求。",
        phonics: "safety 读 /ˈseɪfti/，check 读 /tʃɛk/。",
        collocations: [["perform safety checks", "执行安全检查"], ["safety check list", "安全检查清单"], ["pre-operation safety check", "操作前安全检查"]],
        examples: [["All safety checks must be completed before energization.", "送电前必须完成所有安全检查。"], ["The safety check has been completed.", "安全检查已完成。"]]
      },
      {
        w: "completed",
        ipa: "/kəmˈpliːtɪd/",
        pos: "形容词/过去分词",
        cn: "已完成的",
        memory: "complete = 完成；-ed = 过去分词后缀，表示已完成的状态。completed = 已完成的。",
        phonics: "com 读 /kəm/，ple 读 /pliː/，ted 读 /tɪd/，重音在第二音节。",
        collocations: [["task completed", "任务已完成"], ["inspection completed", "检查已完成"], ["maintenance completed", "维护已完成"]],
        examples: [["The maintenance has been completed.", "维护已完成。"], ["All checks are completed.", "所有检查已完成。"]]
      }
    ],
    phrases: [
      {
        p: "all safety checks have been completed",
        ipa: "/ɔːl ˈseɪfti tʃɛks hæv biːn kəmˈpliːtɪd/",
        cn: "所有安全检查已经完成",
        why: "all + 复数名词 + have been + 过去分词，表示'所有...都已经...'。have been completed 是现在完成时的被动语态，强调动作已完成并对现在有影响。"
      }
    ],
    grammar: [
      {
        q: "为什么用 have been completed 而不是 were completed？",
        a: "have been completed = 已经完成（现在完成时，强调对现在的影响）\nwere completed = 当时完成了（一般过去时，只陈述过去的事实）\n✅ All safety checks have been completed.（所有安全检查已经完成 → 现在可以送电了）\n✅ All safety checks were completed yesterday.（所有安全检查昨天完成了 → 只说明时间）\n本句使用现在完成时，强调检查结果对当前操作的影响。"
      }
    ],
    pattern: "Please confirm that + 从句",
    patternExamples: [
      { en: "Please confirm that the breaker is open.", cn: "请确认断路器已分闸。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }, { w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
      { en: "Please confirm that all personnel have evacuated.", cn: "请确认所有人员已撤离。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }] },
      { en: "Please confirm that the grounding has been removed.", cn: "请确认接地已拆除。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }] }
    ],
    thinking: "confirm that 后面接一个完整的从句，用于确认某个事实或状态。在高风险操作前，confirm 是关键的确认动词，表示操作者已经核实了相关条件。have been completed 使用现在完成时，强调安全检查的结果对当前操作（送电）具有约束力。",
    pronunciation: "confirm 的重音在第二音节，/kənˈfɜːrm/，不是 /ˈkɒnfɜːrm/。safety 读 /ˈseɪfti/，注意不要读成 /ˈseɪvəti/。",
    quiz: [
      {
        q: "如何表达'请确认所有接地已拆除'？",
        a: "Please confirm that all grounding connections have been removed."
      },
      {
        q: "confirm 和 verify 有什么区别？",
        a: "confirm = 确认、证实（某事属实）；verify = 核实、验证（通过检查确认正确性）。confirm 更强调确认事实，verify 更强调验证过程。"
      }
    ]
  },
  {
    id: 1503,
    en: "Please energize Transformer No.1 now.",
    cn: "现在请给1号变压器送电。",
    ipa: "/pliːz ˈɛnərˌdʒaɪz ˈtrænsfɔːrmər ˌnʌmbər wʌn naʊ/",
    tags: ["变压器", "送电指令", "★★★★★"],
    when: "准备工作完成后，发出正式的送电指令。",
    words: [
      {
        w: "now",
        ipa: "/naʊ/",
        pos: "副词",
        cn: "现在；立刻",
        memory: "now = 现在、此时。在操作指令中，now 强调立即执行，不再等待。",
        phonics: "now 读 /naʊ/，单音节。",
        collocations: [["do it now", "立即执行"], ["start now", "现在开始"], ["proceed now", "现在继续"]],
        examples: [["Please start the generator now.", "现在请启动发电机。"], ["You can close the breaker now.", "现在可以合闸了。"]]
      }
    ],
    phrases: [
      {
        p: "energize ... now",
        ipa: "/ˈɛnərˌdʒaɪz ... naʊ/",
        cn: "现在给...送电",
        why: "energize + 设备名 + now，表示立即执行送电操作。now 放在句末，强调执行的紧迫性。"
      }
    ],
    grammar: [
      {
        q: "now 放在句末和句首有什么区别？",
        a: "now 在句末 = 强调立即执行（命令语气更强）\nnow 在句首 = 表示时间转换或引起注意\n✅ Please energize the transformer now.（现在请给变压器送电 → 立即执行）\n✅ Now, please energize the transformer.（好，现在请给变压器送电 → 进入下一阶段）\n本句 now 在句末，强调立即执行送电操作。"
      }
    ],
    pattern: "Please + 动词 + 对象 + now",
    patternExamples: [
      { en: "Please start the test now.", cn: "现在请开始测试。", words: [{ w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "Please close the breaker now.", cn: "现在请合闸。", words: [{ w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
      { en: "Please proceed with the inspection now.", cn: "现在请进行检查。", words: [] }
    ],
    thinking: "这是一个正式的操作指令。在准备阶段（prepare to energize）完成后，操作者发出 now 指令，表示可以立即执行。now 的使用强调了操作的紧迫性和即时性，区别于准备阶段的将来时态。",
    pronunciation: "energize 读 /ˈɛnərˌdʒaɪz/，注意重音在第一音节。now 读 /naʊ/，与 how 押韵。",
    quiz: [
      {
        q: "如何表达'现在请给UPS系统送电'？",
        a: "Please energize the UPS system now."
      },
      {
        q: "请给1号变压器送电，怎么说？",
        a: "Please energize Transformer No.1."
      }
    ]
  },
  {
    id: 1504,
    en: "Transformer No.1 has been energized successfully.",
    cn: "1号变压器已经成功送电。",
    ipa: "/ˈtrænsfɔːrmər ˌnʌmbər wʌn hæz biːn ˈɛnərˌdʒaɪzd səkˈsɛsfəli/",
    tags: ["变压器", "送电完成", "★★★★★"],
    when: "送电操作成功完成后的状态报告。",
    words: [
      {
        w: "energized",
        ipa: "/ˈɛnərˌdʒaɪzd/",
        pos: "过去分词",
        cn: "已送电的；已通电的",
        memory: "energize 的过去分词形式，表示已完成送电的状态。has been energized = 已经送电。",
        phonics: "en 读 /ˈɛn/，er 读 /ər/，gized 读 /ˌdʒaɪzd/，重音在第一音节。",
        collocations: [["successfully energized", "成功送电"], ["line energized", "线路已送电"], ["system energized", "系统已送电"]],
        examples: [["The circuit has been energized.", "电路已送电。"], ["The transformer was energized at 08:00.", "变压器在08:00送电。"]]
      },
      {
        w: "successfully",
        ipa: "/səkˈsɛsfəli/",
        pos: "副词",
        cn: "成功地",
        memory: "success = 成功；-ful = 形容词后缀；-ly = 副词后缀。successfully = 成功地。",
        phonics: "suc 读 /sək/，cess 读 /ˈsɛs/，ful 读 /fəl/，ly 读 /li/，重音在第二音节。",
        collocations: [["completed successfully", "成功完成"], ["started successfully", "成功启动"], ["operated successfully", "成功运行"]],
        examples: [["The test was completed successfully.", "测试已成功完成。"], ["The system has been restored successfully.", "系统已成功恢复。"]]
      }
    ],
    phrases: [
      {
        p: "has been energized successfully",
        ipa: "/hæz biːn ˈɛnərˌdʒaɪzd səkˈsɛsfəli/",
        cn: "已经成功送电",
        why: "has been + 过去分词 + successfully，现在完成时的被动语态，表示送电动作已成功完成。"
      }
    ],
    grammar: [
      {
        q: "has been energized 和 was energized 有什么区别？",
        a: "has been energized = 已经送电（现在完成时，强调对现在的影响：现在已通电）\nwas energized = 当时送电了（一般过去时，只陈述过去的事实）\n✅ The transformer has been energized successfully.（变压器已成功送电 → 现在处于通电状态）\n✅ The transformer was energized at 08:00.（变压器在08:00送电 → 说明时间）\n本句使用现在完成时，强调送电完成后的当前状态。"
      }
    ],
    pattern: "设备 + has been + 过去分词 + successfully",
    patternExamples: [
      { en: "The generator has been started successfully.", cn: "发电机已成功启动。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "started", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "The system has been restored successfully.", cn: "系统已成功恢复。", words: [{ w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "The maintenance has been completed successfully.", cn: "维护已成功完成。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] }
    ],
    thinking: "has been energized 是现在完成时的被动语态，表示送电动作已完成，且变压器现在处于通电运行状态。successfully 强调操作过程中没有出现异常或故障，是标准的操作完成报告用语。",
    pronunciation: "successfully 的重音在第二音节，/səkˈsɛsfəli/，注意不要读成 /ˈsʌksɛsfəli/。",
    quiz: [
      {
        q: "如何表达'2号变压器已成功停电'？",
        a: "Transformer No.2 has been de-energized successfully."
      },
      {
        q: "变压器已送电，怎么说？",
        a: "The transformer has been energized."
      }
    ]
  },
  {
    id: 1505,
    en: "Please verify the transformer status after energization.",
    cn: "请确认送电后的变压器状态。",
    ipa: "/pliːz ˈvɛrɪfaɪ ðə ˈtrænsfɔːrmər ˈsteɪtəs ˈæftər ˌɛnərˌdʒaɪˈzeɪʃən/",
    tags: ["变压器", "状态确认", "★★★★★"],
    when: "送电完成后，需要确认变压器运行状态是否正常。",
    words: [
      {
        w: "verify",
        ipa: "/ˈvɛrɪfaɪ/",
        pos: "动词",
        cn: "核实；验证",
        memory: "ver- = 真实；-ify = 动词后缀，表示'使...'。verify = 使真实 = 核实、验证。",
        phonics: "ver 读 /ˈvɛr/，i 读 /ɪ/，fy 读 /faɪ/，重音在第一音节。",
        collocations: [["verify the status", "核实状态"], ["verify the reading", "核实读数"], ["verify the operation", "核实操作"]],
        examples: [["Please verify the voltage reading.", "请核实电压读数。"], ["We need to verify the transformer status.", "我们需要核实变压器状态。"]]
      },
      {
        w: "energization",
        ipa: "/ˌɛnərˌdʒaɪˈzeɪʃən/",
        pos: "名词",
        cn: "送电；通电",
        memory: "energize 的名词形式，-ation = 名词后缀。energization = 送电、通电（动作或过程）。",
        phonics: "en 读 /ˌɛn/，er 读 /ər/，gi 读 /ˌdʒaɪ/，za 读 /ˈzeɪ/，tion 读 /ʃən/，重音在倒数第二音节。",
        collocations: [["after energization", "送电后"], ["before energization", "送电前"], ["during energization", "送电过程中"]],
        examples: [["Check the status after energization.", "送电后检查状态。"], ["The energization was successful.", "送电成功。"]]
      },
      {
        w: "after",
        ipa: "/ˈæftər/",
        pos: "介词/连词",
        cn: "在...之后",
        memory: "after = 在...之后。after energization = 送电之后。",
        phonics: "af 读 /ˈæf/，ter 读 /tər/，重音在第一音节。",
        collocations: [["after completion", "完成后"], ["after inspection", "检查后"], ["after maintenance", "维护后"]],
        examples: [["Please check the status after startup.", "启动后请检查状态。"], ["After the test, record the results.", "测试后，记录结果。"]]
      }
    ],
    phrases: [
      {
        p: "after energization",
        ipa: "/ˈæftər ˌɛnərˌdʒaɪˈzeɪʃən/",
        cn: "送电后",
        why: "after + 名词，表示在某个动作或事件之后。energization 是 energize 的名词形式。"
      }
    ],
    grammar: [
      {
        q: "after energization 和 after energizing 有什么区别？",
        a: "after energization = 送电后（after + 名词）\nafter energizing = 送电后（after + 动名词）\n✅ Please verify the status after energization.（送电后核实状态 → 正式用语）\n✅ Please verify the status after energizing the transformer.（给变压器送电后核实状态 → 更口语化）\n两者意思相同，但 energization 更正式，常用于技术文档。"
      }
    ],
    pattern: "Please verify + 对象 + after + 名词",
    patternExamples: [
      { en: "Please verify the readings after startup.", cn: "启动后请核实读数。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "readings", ipa: "/ˈriːdɪŋ/", cn: "读数", phonics: "read 读 /riːd/，ing 读 /ɪŋ/" }] },
      { en: "Please verify the status after maintenance.", cn: "维护后请核实状态。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "Please verify the operation after repair.", cn: "修复后请核实运行情况。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "operation", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }, { w: "repair", ipa: "/rɪˈpeər/", cn: "维修", phonics: "re 读 /rɪ/，pair 读 /peər/" }] }
    ],
    thinking: "verify 强调通过检查、测试等方式确认某事的正确性。after energization 表示在送电操作完成后。这个指令要求操作者在送电后检查变压器的各项参数（电压、电流、温度等），确保变压器正常运行。",
    pronunciation: "energization 的重音在倒数第二音节，/ˌɛnərˌdʒaɪˈzeɪʃən/，注意不要读成 /ˌɛnərˈdʒaɪzeɪʃən/。",
    quiz: [
      {
        q: "如何表达'启动后请核实发电机状态'？",
        a: "Please verify the generator status after startup."
      },
      {
        q: "energization 是什么意思？",
        a: "energization = 送电、通电，是 energize 的名词形式。"
      }
    ]
  },
  {
    id: 1506,
    en: "Please prepare to de-energize Transformer No.2.",
    cn: "请准备对2号变压器停电。",
    ipa: "/pliːz prɪˈpɛr tu diːˈɛnərˌdʒaɪz ˈtrænsfɔːrmər ˌnʌmbər tuː/",
    tags: ["变压器", "停电操作", "★★★★★"],
    when: "需要对变压器进行维护或检修时，准备停电操作。",
    words: [
      {
        w: "de-energize",
        ipa: "/diːˈɛnərˌdʒaɪz/",
        pos: "动词",
        cn: "停电；断电",
        memory: "de- = 表示'去除、相反'的前缀；energize = 送电。de-energize = 去除电力 = 停电、断电。",
        phonics: "de 读 /diː/，en 读 /ˈɛn/，er 读 /ər/，gize 读 /ˌdʒaɪz/，重音在第二音节。",
        collocations: [["de-energize the transformer", "给变压器停电"], ["de-energize the circuit", "给电路停电"], ["de-energize the system", "给系统停电"]],
        examples: [["Please de-energize the line before maintenance.", "维护前请给线路停电。"], ["The system has been de-energized.", "系统已停电。"]]
      }
    ],
    phrases: [
      {
        p: "prepare to de-energize",
        ipa: "/prɪˈpɛr tu diːˈɛnərˌdʒaɪz/",
        cn: "准备停电",
        why: "prepare to + 动词原形，表示准备做某事。de-energize 是 energize 的反义词，表示停电、断电。"
      }
    ],
    grammar: [
      {
        q: "de- 前缀表示什么意思？",
        a: "de- 是一个表示'去除、相反、向下'的前缀：\n- de-energize = 停电（去除电力）\n- de-activate = 停用（去除激活状态）\n- de-crease = 减少（向下增加）\n在电力系统中，de-energize 是 energize 的标准反义词。"
      }
    ],
    pattern: "Please prepare to de-energize + 设备",
    patternExamples: [
      { en: "Please prepare to de-energize the UPS system.", cn: "请准备给UPS系统停电。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please prepare to de-energize the circuit.", cn: "请准备给电路停电。", words: [{ w: "circuit", ipa: "/ˈsɜːrkɪt/", cn: "电路", phonics: "cir 读 /sɜːr/，cuit 读 /kɪt/" }] },
      { en: "Please prepare to de-energize the generator.", cn: "请准备停止发电机供电。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] }
    ],
    thinking: "de-energize 是电力系统中的专业术语，表示切断电源、使设备断电。停电操作通常是为了进行维护、检修或处理故障。与 energize 一样，de-energize 也需要严格按照操作规程执行，确保人员和设备安全。",
    pronunciation: "de-energize 的重音在第二音节，/diːˈɛnərˌdʒaɪz/，注意 de 读长音 /diː/，不是 /dɛ/。",
    quiz: [
      {
        q: "如何表达'请准备给1号变压器停电'？",
        a: "Please prepare to de-energize Transformer No.1."
      },
      {
        q: "de-energize 的反义词是什么？",
        a: "de-energize 的反义词是 energize（送电、通电）。"
      }
    ]
  },
  {
    id: 1507,
    en: "Transformer No.2 has been de-energized successfully.",
    cn: "2号变压器已经成功停电。",
    ipa: "/ˈtrænsfɔːrmər ˌnʌmbər tuː hæz biːn diːˈɛnərˌdʒaɪzd səkˈsɛsfəli/",
    tags: ["变压器", "停电完成", "★★★★★"],
    when: "停电操作成功完成后的状态报告。",
    words: [
      {
        w: "de-energized",
        ipa: "/diːˈɛnərˌdʒaɪzd/",
        pos: "过去分词",
        cn: "已停电的；已断电的",
        memory: "de-energize 的过去分词形式，表示已完成停电的状态。has been de-energized = 已经停电。",
        phonics: "de 读 /diː/，en 读 /ˈɛn/，er 读 /ər/，gized 读 /ˌdʒaɪzd/，重音在第二音节。",
        collocations: [["successfully de-energized", "成功停电"], ["line de-energized", "线路已停电"], ["system de-energized", "系统已停电"]],
        examples: [["The circuit has been de-energized.", "电路已停电。"], ["The transformer was de-energized at 16:00.", "变压器在16:00停电。"]]
      }
    ],
    phrases: [
      {
        p: "has been de-energized successfully",
        ipa: "/hæz biːn diːˈɛnərˌdʒaɪzd səkˈsɛsfəli/",
        cn: "已经成功停电",
        why: "has been + 过去分词 + successfully，现在完成时的被动语态，表示停电动作已成功完成。"
      }
    ],
    grammar: [
      {
        q: "has been de-energized 和 is de-energized 有什么区别？",
        a: "has been de-energized = 已经停电（现在完成时，强调动作已完成）\nis de-energized = 处于停电状态（一般现在时，描述当前状态）\n✅ The transformer has been de-energized successfully.（变压器已成功停电 → 强调动作完成）\n✅ The transformer is de-energized.（变压器处于停电状态 → 描述当前状态）\n本句使用现在完成时，强调停电操作已成功完成。"
      }
    ],
    pattern: "设备 + has been de-energized successfully",
    patternExamples: [
      { en: "The UPS system has been de-energized successfully.", cn: "UPS系统已成功停电。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "The circuit has been de-energized successfully.", cn: "电路已成功停电。", words: [{ w: "circuit", ipa: "/ˈsɜːrkɪt/", cn: "电路", phonics: "cir 读 /sɜːr/，cuit 读 /kɪt/" }] },
      { en: "The line has been de-energized successfully.", cn: "线路已成功停电。", words: [] }
    ],
    thinking: "has been de-energized 是现在完成时的被动语态，表示停电动作已完成，且变压器现在处于断电状态。successfully 强调操作过程中没有出现异常或故障。停电完成后，通常还需要进行验电、接地等安全措施，才能开始维护工作。",
    pronunciation: "de-energized 的重音在第二音节，/diːˈɛnərˌdʒaɪzd/，注意不要读成 /ˌdiːˈɛnərdʒaɪzd/。",
    quiz: [
      {
        q: "如何表达'1号变压器已成功停电'？",
        a: "Transformer No.1 has been de-energized successfully."
      },
      {
        q: "停电后还需要做什么？",
        a: "停电后还需要：验电（verify no voltage）、接地（apply grounding）、挂标识牌（hang warning signs）、设置围栏（set up barriers）等安全措施。"
      }
    ]
  },
  {
    id: 1508,
    en: "Please verify that the transformer is isolated.",
    cn: "请确认变压器已经隔离。",
    ipa: "/pliːz ˈvɛrɪfaɪ ðæt ðə ˈtrænsfɔːrmər ɪz ˈaɪsəleɪtɪd/",
    tags: ["变压器", "隔离确认", "★★★★★"],
    when: "停电后，需要确认变压器已与电源完全隔离。",
    words: [
      {
        w: "isolated",
        ipa: "/ˈaɪsəleɪtɪd/",
        pos: "形容词/过去分词",
        cn: "已隔离的",
        memory: "isolate = 隔离、孤立；-ed = 过去分词后缀。isolated = 已隔离的，表示设备已与电源完全断开。",
        phonics: "i 读 /ˈaɪ/，so 读 /sə/，la 读 /leɪ/，ted 读 /tɪd/，重音在第一音节。",
        collocations: [["electrically isolated", "电气隔离"], ["isolated from power supply", "与电源隔离"], ["isolation procedure", "隔离程序"]],
        examples: [["The equipment is isolated from the power source.", "设备已与电源隔离。"], ["Please verify the isolation.", "请确认隔离。"]]
      }
    ],
    phrases: [
      {
        p: "the transformer is isolated",
        ipa: "/ðə ˈtrænsfɔːrmər ɪz ˈaɪsəleɪtɪd/",
        cn: "变压器已经隔离",
        why: "is isolated 是被动语态，表示变压器处于已隔离状态。隔离是指设备与电源完全断开，确保维护安全。"
      }
    ],
    grammar: [
      {
        q: "is isolated 和 has been isolated 有什么区别？",
        a: "is isolated = 处于隔离状态（描述当前状态）\nhas been isolated = 已经被隔离（强调动作已完成）\n✅ The transformer is isolated.（变压器处于隔离状态 → 描述状态）\n✅ The transformer has been isolated.（变压器已经被隔离 → 强调动作完成）\n本句使用 is isolated，强调确认当前的隔离状态。"
      }
    ],
    pattern: "Please verify that + 主语 + is + 过去分词",
    patternExamples: [
      { en: "Please verify that the breaker is open.", cn: "请确认断路器已分闸。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
      { en: "Please verify that the circuit is de-energized.", cn: "请确认电路已停电。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "circuit", ipa: "/ˈsɜːrkɪt/", cn: "电路", phonics: "cir 读 /sɜːr/，cuit 读 /kɪt/" }] },
      { en: "Please verify that the grounding is applied.", cn: "请确认接地已连接。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] }
    ],
    thinking: "isolate 在电力系统中指将设备与电源完全断开，包括断开断路器、拉开隔离开关等。隔离是维护前的关键安全步骤，确保设备不会意外带电。verify that the transformer is isolated 要求操作者通过检查确认隔离状态。",
    pronunciation: "isolated 的重音在第一音节，/ˈaɪsəleɪtɪd/，注意不要读成 /aɪˈsɒleɪtɪd/。",
    quiz: [
      {
        q: "如何表达'请确认线路已隔离'？",
        a: "Please verify that the line is isolated."
      },
      {
        q: "隔离的目的是什么？",
        a: "隔离的目的是确保设备与电源完全断开，防止在维护过程中意外带电，保障人员安全。"
      }
    ]
  },
  {
    id: 1509,
    en: "Please apply the grounding connection.",
    cn: "请连接接地装置。",
    ipa: "/pliːz əˈplaɪ ðə ˈɡraʊndɪŋ kəˈnɛkʃən/",
    tags: ["变压器", "接地操作", "★★★★★"],
    when: "隔离后，需要连接接地装置，释放残余电荷并确保安全。",
    words: [
      {
        w: "apply",
        ipa: "/əˈplaɪ/",
        pos: "动词",
        cn: "应用；连接；施加",
        memory: "apply = 应用、施加。在电力系统中，apply grounding = 连接接地、施加接地。",
        phonics: "ap 读 /ə/，ply 读 /ˈplaɪ/，重音在第二音节。",
        collocations: [["apply grounding", "连接接地"], ["apply voltage", "施加电压"], ["apply pressure", "施加压力"]],
        examples: [["Please apply the grounding before maintenance.", "维护前请连接接地。"], ["The grounding has been applied.", "接地已连接。"]]
      },
      {
        w: "grounding connection",
        ipa: "/ˈɡraʊndɪŋ kəˈnɛkʃən/",
        pos: "名词短语",
        cn: "接地连接；接地装置",
        memory: "grounding = 接地；connection = 连接。grounding connection = 接地连接，指接地装置或接地线。",
        phonics: "grounding 读 /ˈɡraʊndɪŋ/，connection 读 /kəˈnɛkʃən/。",
        collocations: [["apply grounding connection", "连接接地装置"], ["remove grounding connection", "拆除接地装置"], ["verify grounding connection", "确认接地连接"]],
        examples: [["The grounding connection is in place.", "接地装置已就位。"], ["Remove the grounding connection before energization.", "送电前拆除接地装置。"]]
      }
    ],
    phrases: [
      {
        p: "apply the grounding connection",
        ipa: "/əˈplaɪ ðə ˈɡraʊndɪŋ kəˈnɛkʃən/",
        cn: "连接接地装置",
        why: "apply + 名词，表示应用、连接。grounding connection 指接地装置或接地线。"
      }
    ],
    grammar: [
      {
        q: "apply 在电力系统中有哪些含义？",
        a: "apply 在电力系统中有多种含义：\n- apply grounding = 连接接地\n- apply voltage = 施加电压\n- apply power = 供电\n- apply the brake = 刹车\napply 的基本含义是'使...作用于'，具体含义取决于上下文。"
      }
    ],
    pattern: "Please apply the + 名词",
    patternExamples: [
      { en: "Please apply the grounding.", cn: "请连接接地。", words: [] },
      { en: "Please apply the safety measures.", cn: "请采取安全措施。", words: [{ w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }] },
      { en: "Please apply the protective relay.", cn: "请投入保护继电器。", words: [] }
    ],
    thinking: "apply grounding connection 是停电后的关键安全步骤。接地的作用是：1）释放设备中的残余电荷；2）防止感应电压；3）在意外来电时提供低阻抗通路，保护人员安全。接地必须连接可靠，才能开始维护工作。",
    pronunciation: "apply 的重音在第二音节，/əˈplaɪ/，不是 /ˈæplaɪ/。grounding 读 /ˈɡraʊndɪŋ/，注意不要读成 /ˈɡrʌndɪŋ/。",
    quiz: [
      {
        q: "如何表达'送电前请拆除接地装置'？",
        a: "Please remove the grounding connection before energization."
      },
      {
        q: "接地的作用是什么？",
        a: "接地的作用：1）释放残余电荷；2）防止感应电压；3）在意外来电时提供低阻抗通路，保护人员安全。"
      }
    ]
  },
  {
    id: 1510,
    en: "The transformer is ready for maintenance.",
    cn: "变压器已经可以开始维护。",
    ipa: "/ðə ˈtrænsfɔːrmər ɪz ˈrɛdi fɔːr ˈmeɪntənəns/",
    tags: ["变压器", "维护准备完成", "★★★★★"],
    when: "所有安全措施完成后，确认变压器已准备好进行维护。",
    words: [
      {
        w: "ready",
        ipa: "/ˈrɛdi/",
        pos: "形容词",
        cn: "准备好的",
        memory: "ready = 准备好的、就绪的。be ready for = 为...做好准备。",
        phonics: "read 读 /ˈrɛd/，y 读 /i/，重音在第一音节。",
        collocations: [["ready for maintenance", "准备好维护"], ["ready for operation", "准备好运行"], ["ready for inspection", "准备好检查"]],
        examples: [["The system is ready for startup.", "系统已准备好启动。"], ["Are you ready to proceed?", "你准备好继续了吗？"]]
      },
      {
        w: "maintenance",
        ipa: "/ˈmeɪntənəns/",
        pos: "名词",
        cn: "维护；保养",
        memory: "maintain = 维护、保持；-ance = 名词后缀。maintenance = 维护、保养。",
        phonics: "main 读 /ˈmeɪn/，te 读 /tə/，nance 读 /nəns/，重音在第一音节。",
        collocations: [["preventive maintenance", "预防性维护"], ["scheduled maintenance", "计划性维护"], ["maintenance record", "维护记录"]],
        examples: [["The maintenance is scheduled for tomorrow.", "维护计划明天进行。"], ["Please update the maintenance log.", "请更新维护日志。"]]
      }
    ],
    phrases: [
      {
        p: "ready for maintenance",
        ipa: "/ˈrɛdi fɔːr ˈmeɪntənəns/",
        cn: "准备好维护",
        why: "ready for + 名词，表示为某事做好准备。ready for maintenance 表示设备已准备好进行维护。"
      }
    ],
    grammar: [
      {
        q: "ready for 和 ready to 有什么区别？",
        a: "ready for + 名词 = 为...做好准备\nready to + 动词原形 = 准备好做某事\n✅ The transformer is ready for maintenance.（变压器已准备好维护 → 后接名词）\n✅ The transformer is ready to be maintained.（变压器已准备好被维护 → 后接动词）\n两者意思相同，但 ready for 更简洁常用。"
      }
    ],
    pattern: "设备 + is ready for + 名词",
    patternExamples: [
      { en: "The system is ready for operation.", cn: "系统已准备好运行。", words: [{ w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operation", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }] },
      { en: "The generator is ready for testing.", cn: "发电机已准备好测试。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "testing", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "The equipment is ready for inspection.", cn: "设备已准备好检查。", words: [{ w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }] }
    ],
    thinking: "ready for maintenance 表示变压器已经完成了所有必要的安全措施（停电、隔离、接地、验电等），可以安全地进行维护工作。这是维护前的最终确认状态。",
    pronunciation: "maintenance 的重音在第一音节，/ˈmeɪntənəns/，注意不要读成 /meɪnˈtɛnəns/。",
    quiz: [
      {
        q: "如何表达'系统已准备好运行'？",
        a: "The system is ready for operation."
      },
      {
        q: "ready for maintenance 表示什么状态？",
        a: "ready for maintenance 表示设备已完成所有安全措施（停电、隔离、接地等），可以安全地进行维护工作。"
      }
    ]
  },
  {
    id: 1511,
    en: "Please inspect the transformer for abnormal noise.",
    cn: "请检查变压器是否有异常声音。",
    ipa: "/pliːz ɪnˈspɛkt ðə ˈtrænsfɔːrmər fɔːr æbˈnɔːrməl nɔɪz/",
    tags: ["变压器", "巡检", "★★★★★"],
    when: "变压器巡检时，检查是否有异常声音。",
    words: [
      {
        w: "inspect",
        ipa: "/ɪnˈspɛkt/",
        pos: "动词",
        cn: "检查；检验",
        memory: "in- = 进入；spect = 看。inspect = 仔细看 = 检查、检验。",
        phonics: "in 读 /ɪn/，spect 读 /spɛkt/，重音在第二音节。",
        collocations: [["inspect for defects", "检查缺陷"], ["inspect the equipment", "检查设备"], ["visual inspection", "目视检查"]],
        examples: [["Please inspect the transformer carefully.", "请仔细检查变压器。"], ["The equipment has been inspected.", "设备已检查完毕。"]]
      },
      {
        w: "abnormal",
        ipa: "/æbˈnɔːrməl/",
        pos: "形容词",
        cn: "异常的；不正常的",
        memory: "ab- = 表示'偏离、相反'的前缀；normal = 正常的。abnormal = 不正常的、异常的。",
        phonics: "ab 读 /æb/，nor 读 /ˈnɔːr/，mal 读 /məl/，重音在第二音节。",
        collocations: [["abnormal noise", "异常声音"], ["abnormal vibration", "异常振动"], ["abnormal temperature", "异常温度"]],
        examples: [["There is abnormal noise from the transformer.", "变压器有异常声音。"], ["No abnormal conditions were found.", "未发现异常情况。"]]
      },
      {
        w: "noise",
        ipa: "/nɔɪz/",
        pos: "名词",
        cn: "噪音；声音",
        memory: "noise = 噪音、声音。在设备检查中，noise 通常指异常或不正常的声音。",
        phonics: "noise 读 /nɔɪz/，单音节。",
        collocations: [["abnormal noise", "异常声音"], ["background noise", "背景噪音"], ["noise level", "噪音水平"]],
        examples: [["Can you hear any abnormal noise?", "你能听到异常声音吗？"], ["The noise level is within normal range.", "噪音水平在正常范围内。"]]
      }
    ],
    phrases: [
      {
        p: "inspect ... for ...",
        ipa: "/ɪnˈspɛkt ... fɔːr .../",
        cn: "检查...是否有...",
        why: "inspect + 对象 + for + 检查内容，表示检查某物是否有某种情况或问题。"
      }
    ],
    grammar: [
      {
        q: "inspect for 和 inspect 有什么区别？",
        a: "inspect + 对象 = 检查某物（一般性检查）\ninspect + 对象 + for + 检查内容 = 检查某物是否有某种情况\n✅ Please inspect the transformer.（请检查变压器 → 一般性检查）\n✅ Please inspect the transformer for abnormal noise.（请检查变压器是否有异常声音 → 针对性检查）\ninspect for 更具体，指明要检查的内容。"
      }
    ],
    pattern: "Please inspect + 对象 + for + 检查内容",
    patternExamples: [
      { en: "Please inspect the equipment for damage.", cn: "请检查设备是否有损坏。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }] },
      { en: "Please inspect the line for leakage.", cn: "请检查线路是否有泄漏。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }] },
      { en: "Please inspect the system for errors.", cn: "请检查系统是否有错误。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] }
    ],
    thinking: "inspect ... for ... 是设备巡检的常用句型，表示针对性地检查某种特定问题。变压器异常声音可能包括：嗡嗡声变大、有放电声、有金属撞击声等。异常声音往往是故障的早期征兆，需要及时发现和处理。",
    pronunciation: "inspect 的重音在第二音节，/ɪnˈspɛkt/，不是 /ˈɪnspɛkt/。abnormal 的重音也在第二音节，/æbˈnɔːrməl/。",
    quiz: [
      {
        q: "如何表达'请检查线路是否有泄漏'？",
        a: "Please inspect the line for leakage."
      },
      {
        q: "变压器异常声音可能表示什么问题？",
        a: "变压器异常声音可能表示：铁芯松动、绕组变形、内部放电、冷却系统故障等问题。需要及时检查和处理。"
      }
    ]
  },
  {
    id: 1512,
    en: "Please inspect the transformer for abnormal vibration.",
    cn: "请检查变压器是否有异常振动。",
    ipa: "/pliːz ɪnˈspɛkt ðə ˈtrænsfɔːrmər fɔːr æbˈnɔːrməl vaɪˈbreɪʃən/",
    tags: ["变压器", "振动检查", "★★★★★"],
    when: "变压器巡检时，检查是否有异常振动。",
    words: [
      {
        w: "vibration",
        ipa: "/vaɪˈbreɪʃən/",
        pos: "名词",
        cn: "振动",
        memory: "vibrate = 振动；-ion = 名词后缀。vibration = 振动、震动。",
        phonics: "vi 读 /vaɪ/，bra 读 /ˈbreɪ/，tion 读 /ʃən/，重音在第二音节。",
        collocations: [["abnormal vibration", "异常振动"], ["vibration level", "振动水平"], ["vibration monitoring", "振动监测"]],
        examples: [["The vibration level is within normal range.", "振动水平在正常范围内。"], ["Excessive vibration was detected.", "检测到过度振动。"]]
      }
    ],
    phrases: [
      {
        p: "abnormal vibration",
        ipa: "/æbˈnɔːrməl vaɪˈbreɪʃən/",
        cn: "异常振动",
        why: "abnormal = 异常的；vibration = 振动。abnormal vibration 指超出正常范围的振动。"
      }
    ],
    grammar: [
      {
        q: "vibration 和 shake 有什么区别？",
        a: "vibration = 振动（技术性术语，指周期性运动）\nshake = 摇动、震动（日常用语，指不规则运动）\n✅ The transformer has abnormal vibration.（变压器有异常振动 → 技术术语）\n✅ The equipment is shaking.（设备在摇晃 → 日常用语）\n在技术文档和正式场合，使用 vibration 更专业。"
      }
    ],
    pattern: "Please inspect ... for abnormal vibration",
    patternExamples: [
      { en: "Please inspect the motor for abnormal vibration.", cn: "请检查电机是否有异常振动。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "abnormal", ipa: "/æbˈnɔːrməl/", cn: "异常", phonics: "ab 读 /æb/，normal 读 /nɔːrməl/" }] },
      { en: "Please inspect the generator for abnormal vibration.", cn: "请检查发电机是否有异常振动。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "abnormal", ipa: "/æbˈnɔːrməl/", cn: "异常", phonics: "ab 读 /æb/，normal 读 /nɔːrməl/" }] },
      { en: "Please inspect the pump for abnormal vibration.", cn: "请检查泵是否有异常振动。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "abnormal", ipa: "/æbˈnɔːrməl/", cn: "异常", phonics: "ab 读 /æb/，normal 读 /nɔːrməl/" }] }
    ],
    thinking: "变压器异常振动可能由多种原因引起：铁芯松动、绕组变形、冷却风扇不平衡、基础不稳固等。振动检查是巡检的重要内容，可以通过手感或振动测量仪器进行检测。",
    pronunciation: "vibration 的重音在第二音节，/vaɪˈbreɪʃən/，注意不要读成 /ˈvaɪbreɪʃən/。",
    quiz: [
      {
        q: "如何表达'请检查电机是否有异常振动'？",
        a: "Please inspect the motor for abnormal vibration."
      },
      {
        q: "变压器异常振动可能是什么原因？",
        a: "变压器异常振动可能的原因：铁芯松动、绕组变形、冷却风扇不平衡、基础不稳固、负载不平衡等。"
      }
    ]
  },
  {
    id: 1513,
    en: "Please inspect the transformer for overheating.",
    cn: "请检查变压器是否过热。",
    ipa: "/pliːz ɪnˈspɛkt ðə ˈtrænsfɔːrmər fɔːr ˌoʊvərˈhiːtɪŋ/",
    tags: ["变压器", "温度检查", "★★★★★"],
    when: "变压器巡检时，检查是否有过热现象。",
    words: [
      {
        w: "overheating",
        ipa: "/ˌoʊvərˈhiːtɪŋ/",
        pos: "名词/动名词",
        cn: "过热",
        memory: "over- = 表示'过度、超过'的前缀；heat = 加热；-ing = 动名词后缀。overheating = 过热。",
        phonics: "o 读 /ˌoʊ/，ver 读 /vər/，heat 读 /ˈhiː/，ting 读 /tɪŋ/，重音在第三音节。",
        collocations: [["check for overheating", "检查过热"], ["overheating problem", "过热问题"], ["prevent overheating", "防止过热"]],
        examples: [["The motor is overheating.", "电机过热了。"], ["Overheating can damage the equipment.", "过热可能损坏设备。"]]
      }
    ],
    phrases: [
      {
        p: "inspect for overheating",
        ipa: "/ɪnˈspɛkt fɔːr ˌoʊvərˈhiːtɪŋ/",
        cn: "检查是否过热",
        why: "inspect for + 动名词/名词，表示检查是否有某种情况。overheating 指温度超过正常范围。"
      }
    ],
    grammar: [
      {
        q: "over- 前缀表示什么意思？",
        a: "over- 是一个表示'过度、超过、在上面'的前缀：\n- overheat = 过热（过度加热）\n- overload = 过载（过度负载）\n- overcurrent = 过电流（电流过大）\n- overvoltage = 过电压（电压过高）\n在电力系统中，over- 前缀常用于表示超出正常范围的情况。"
      }
    ],
    pattern: "Please inspect ... for overheating",
    patternExamples: [
      { en: "Please inspect the motor for overheating.", cn: "请检查电机是否过热。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }] },
      { en: "Please inspect the cables for overheating.", cn: "请检查电缆是否过热。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }] },
      { en: "Please inspect the connections for overheating.", cn: "请检查连接点是否过热。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }] }
    ],
    thinking: "overheating 是电力设备的常见故障之一。变压器过热可能由过载、冷却系统故障、环境温度过高、绝缘老化等原因引起。巡检时可以通过观察温度指示、红外测温、手触（谨慎）等方式检查是否过热。",
    pronunciation: "overheating 的重音在第三音节，/ˌoʊvərˈhiːtɪŋ/，注意不要读成 /ˈoʊvərhɪtɪŋ/。",
    quiz: [
      {
        q: "如何表达'请检查电缆是否过热'？",
        a: "Please inspect the cables for overheating."
      },
      {
        q: "变压器过热可能是什么原因？",
        a: "变压器过热可能的原因：过载、冷却系统故障、环境温度过高、绝缘老化、油位过低、散热不良等。"
      }
    ]
  },
  {
    id: 1514,
    en: "Please inspect the transformer for oil leakage.",
    cn: "请检查变压器是否漏油。",
    ipa: "/pliːz ɪnˈspɛkt ðə ˈtrænsfɔːrmər fɔːr ɔɪl ˈliːkɪdʒ/",
    tags: ["变压器", "漏油检查", "★★★★★"],
    when: "变压器巡检时，检查是否有漏油现象。",
    words: [
      {
        w: "oil leakage",
        ipa: "/ɔɪl ˈliːkɪdʒ/",
        pos: "名词短语",
        cn: "漏油",
        memory: "oil = 油；leakage = 泄漏。oil leakage = 漏油，指变压器油从密封处泄漏。",
        phonics: "oil 读 /ɔɪl/，leakage 读 /ˈliːkɪdʒ/。",
        collocations: [["check for oil leakage", "检查漏油"], ["oil leakage detection", "漏油检测"], ["prevent oil leakage", "防止漏油"]],
        examples: [["There is oil leakage from the transformer.", "变压器有漏油现象。"], ["No oil leakage was found.", "未发现漏油。"]]
      },
      {
        w: "leakage",
        ipa: "/ˈliːkɪdʒ/",
        pos: "名词",
        cn: "泄漏",
        memory: "leak = 泄漏；-age = 名词后缀。leakage = 泄漏、漏出。",
        phonics: "leak 读 /liːk/，age 读 /ɪdʒ/，重音在第一音节。",
        collocations: [["oil leakage", "漏油"], ["gas leakage", "漏气"], ["water leakage", "漏水"]],
        examples: [["Check for any leakage.", "检查是否有泄漏。"], ["The leakage has been repaired.", "泄漏已修复。"]]
      }
    ],
    phrases: [
      {
        p: "inspect for oil leakage",
        ipa: "/ɪnˈspɛkt fɔːr ɔɪl ˈliːkɪdʒ/",
        cn: "检查是否漏油",
        why: "inspect for + 名词，表示检查是否有某种情况。oil leakage 指变压器油泄漏。"
      }
    ],
    grammar: [
      {
        q: "leakage 和 leak 有什么区别？",
        a: "leakage = 泄漏（名词，指泄漏的现象或过程）\nleak = 泄漏（动词）；漏洞（名词）\n✅ Check for oil leakage.（检查是否有漏油 → 名词）\n✅ The transformer is leaking oil.（变压器在漏油 → 动词）\n✅ There is a leak in the pipe.（管道有一个漏洞 → 名词）\nleakage 更常用于技术文档，leak 更口语化。"
      }
    ],
    pattern: "Please inspect ... for oil leakage",
    patternExamples: [
      { en: "Please inspect the tank for oil leakage.", cn: "请检查油箱是否漏油。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "tank", ipa: "/tæŋk/", cn: "储箱", phonics: "tank 读 /tæŋk/" }] },
      { en: "Please inspect the valves for oil leakage.", cn: "请检查阀门是否漏油。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "valves", ipa: "/vælv/", cn: "阀门", phonics: "valve 读 /vælv/" }] },
      { en: "Please inspect the gaskets for oil leakage.", cn: "请检查垫片是否漏油。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }] }
    ],
    thinking: "变压器油（transformer oil）用于绝缘和冷却。漏油会导致油位下降，影响绝缘性能和散热效果，严重时可能引发故障。巡检时需要检查变压器本体、阀门、法兰连接处、散热器等部位是否有油迹。",
    pronunciation: "leakage 的重音在第一音节，/ˈliːkɪdʒ/，注意不要读成 /liˈkɛɪdʒ/。",
    quiz: [
      {
        q: "如何表达'请检查阀门是否漏油'？",
        a: "Please inspect the valves for oil leakage."
      },
      {
        q: "变压器漏油有什么危害？",
        a: "变压器漏油的危害：1）油位下降，影响绝缘性能；2）散热效果变差，温度升高；3）可能引发火灾；4）污染环境。发现漏油应及时处理。"
      }
    ]
  },
  {
    id: 1515,
    en: "No abnormal conditions have been found.",
    cn: "没有发现异常情况。",
    ipa: "/noʊ æbˈnɔːrməl kənˈdɪʃənz hæv biːn faʊnd/",
    tags: ["变压器", "巡检结果", "★★★★★"],
    when: "巡检完成后，报告未发现异常情况。",
    words: [
      {
        w: "condition",
        ipa: "/kənˈdɪʃən/",
        pos: "名词",
        cn: "状况；条件",
        memory: "condition = 状况、条件、情况。abnormal conditions = 异常情况。",
        phonics: "con 读 /kən/，di 读 /ˈdɪ/，tion 读 /ʃən/，重音在第二音节。",
        collocations: [["abnormal condition", "异常情况"], ["operating condition", "运行状况"], ["normal condition", "正常状况"]],
        examples: [["The equipment is in good condition.", "设备状况良好。"], ["Check the operating conditions.", "检查运行状况。"]]
      }
    ],
    phrases: [
      {
        p: "no abnormal conditions",
        ipa: "/noʊ æbˈnɔːrməl kənˈdɪʃənz/",
        cn: "没有异常情况",
        why: "no + 名词，表示没有...。abnormal conditions 指异常的情况或状态。"
      }
    ],
    grammar: [
      {
        q: "have been found 和 were found 有什么区别？",
        a: "have been found = 已经被发现（现在完成时，强调对现在的影响）\nwere found = 当时被发现（一般过去时，只陈述过去的事实）\n✅ No abnormal conditions have been found.（没有发现异常情况 → 到目前为止）\n✅ No abnormal conditions were found during the inspection.（巡检时没有发现异常情况 → 说明时间）\n本句使用现在完成时，强调巡检结果对当前状态的影响。"
      }
    ],
    pattern: "No + 名词 + have been found",
    patternExamples: [
      { en: "No defects have been found.", cn: "没有发现缺陷。", words: [] },
      { en: "No errors have been found.", cn: "没有发现错误。", words: [] },
      { en: "No problems have been found.", cn: "没有发现问题。", words: [] }
    ],
    thinking: "No abnormal conditions have been found 是巡检后的标准报告用语，表示在检查过程中没有发现任何异常情况。这句话使用现在完成时的被动语态，强调巡检的结果。",
    pronunciation: "conditions 读 /kənˈdɪʃənz/，注意复数形式。found 读 /faʊnd/，是 find 的过去分词。",
    quiz: [
      {
        q: "如何表达'没有发现缺陷'？",
        a: "No defects have been found."
      },
      {
        q: "巡检发现异常时应该怎么做？",
        a: "巡检发现异常时应该：1）记录异常情况；2）评估严重程度；3）采取相应措施（如停电、报修）；4）通知相关人员；5）跟踪处理进度。"
      }
    ]
  },
  {
    id: 1516,
    en: "Please perform an infrared temperature inspection.",
    cn: "请进行红外测温检查。",
    ipa: "/pliːz pərˈfɔːrm ən ˌɪnfrəˈrɛd ˈtɛmpərətʃər ɪnˈspɛkʃən/",
    tags: ["变压器", "红外测温", "★★★★★"],
    when: "使用红外热像仪对变压器进行温度检测。",
    words: [
      {
        w: "perform",
        ipa: "/pərˈfɔːrm/",
        pos: "动词",
        cn: "执行；进行",
        memory: "per- = 完全；form = 形成。perform = 完全形成 = 执行、进行、表演。",
        phonics: "per 读 /pər/，form 读 /ˈfɔːrm/，重音在第二音节。",
        collocations: [["perform inspection", "进行检查"], ["perform test", "进行测试"], ["perform maintenance", "进行维护"]],
        examples: [["Please perform the test according to the procedure.", "请按程序进行测试。"], ["The inspection has been performed.", "检查已进行。"]]
      },
      {
        w: "infrared",
        ipa: "/ˌɪnfrəˈrɛd/",
        pos: "形容词",
        cn: "红外的",
        memory: "infra- = 表示'在...之下、低于'的前缀；red = 红色。infrared = 红外线（波长低于红光）。",
        phonics: "in 读 /ˌɪn/，fra 读 /frə/，red 读 /ˈrɛd/，重音在第三音节。",
        collocations: [["infrared camera", "红外相机"], ["infrared thermometer", "红外测温仪"], ["infrared inspection", "红外检查"]],
        examples: [["Use the infrared camera to check the temperature.", "使用红外相机检查温度。"], ["Infrared inspection can detect hot spots.", "红外检查可以检测热点。"]]
      },
      {
        w: "temperature inspection",
        ipa: "/ˈtɛmpərətʃər ɪnˈspɛkʃən/",
        pos: "名词短语",
        cn: "温度检查",
        memory: "temperature = 温度；inspection = 检查。temperature inspection = 温度检查。",
        phonics: "temperature 读 /ˈtɛmpərətʃər/，inspection 读 /ɪnˈspɛkʃən/。",
        collocations: [["perform temperature inspection", "进行温度检查"], ["infrared temperature inspection", "红外测温检查"], ["regular temperature inspection", "定期温度检查"]],
        examples: [["Temperature inspection is important for preventive maintenance.", "温度检查对预防性维护很重要。"], ["The temperature inspection revealed a hot spot.", "温度检查发现了一个热点。"]]
      }
    ],
    phrases: [
      {
        p: "infrared temperature inspection",
        ipa: "/ˌɪnfrəˈrɛd ˈtɛmpərətʃər ɪnˈspɛkʃən/",
        cn: "红外测温检查",
        why: "infrared = 红外的；temperature = 温度；inspection = 检查。红外测温检查使用红外热像仪检测设备温度分布。"
      }
    ],
    grammar: [
      {
        q: "perform 和 do 有什么区别？",
        a: "perform = 执行、进行（正式用语，常用于技术文档）\ndo = 做（日常用语）\n✅ Please perform an infrared inspection.（请进行红外检查 → 正式）\n✅ Please do the inspection.（请做检查 → 口语化）\n在技术文档和正式场合，使用 perform 更专业。"
      }
    ],
    pattern: "Please perform a/an + 名词",
    patternExamples: [
      { en: "Please perform a visual inspection.", cn: "请进行目视检查。", words: [{ w: "perform", ipa: "/pərˈfɔːrm/", cn: "执行", phonics: "per 读 /pər/，form 读 /fɔːrm/" }] },
      { en: "Please perform a load test.", cn: "请进行负载测试。", words: [{ w: "perform", ipa: "/pərˈfɔːrm/", cn: "执行", phonics: "per 读 /pər/，form 读 /fɔːrm/" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "Please perform a safety check.", cn: "请进行安全检查。", words: [{ w: "perform", ipa: "/pərˈfɔːrm/", cn: "执行", phonics: "per 读 /pər/，form 读 /fɔːrm/" }, { w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }, { w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] }
    ],
    thinking: "红外测温检查是电力设备巡检的重要手段，可以在不停电的情况下检测设备温度分布。通过红外热像仪可以发现：接触不良导致的过热、过载导致的温升、冷却系统故障等。",
    pronunciation: "infrared 的重音在第三音节，/ˌɪnfrəˈrɛd/，注意不要读成 /ˈɪnfrərɛd/。perform 的重音在第二音节，/pərˈfɔːrm/。",
    quiz: [
      {
        q: "如何表达'请进行目视检查'？",
        a: "Please perform a visual inspection."
      },
      {
        q: "红外测温检查有什么优点？",
        a: "红外测温检查的优点：1）非接触式，安全；2）可以不停电检测；3）可以快速扫描大面积区域；4）可以发现肉眼不可见的热点；5）可以记录温度分布图像。"
      }
    ]
  },
  {
    id: 1517,
    en: "Please record all inspection results.",
    cn: "请记录所有巡检结果。",
    ipa: "/pliːz rɪˈkɔːrd ɔːl ɪnˈspɛkʃən rɪˈzʌlts/",
    tags: ["变压器", "记录", "★★★★★"],
    when: "巡检完成后，需要记录所有检查结果。",
    words: [
      {
        w: "record",
        ipa: "/rɪˈkɔːrd/",
        pos: "动词",
        cn: "记录",
        memory: "re- = 表示'再次、回'的前缀；cord = 心。record = 记在心里 = 记录。",
        phonics: "re 读 /rɪ/，cord 读 /ˈkɔːrd/，重音在第二音节。",
        collocations: [["record the results", "记录结果"], ["record the data", "记录数据"], ["record the findings", "记录发现"]],
        examples: [["Please record all readings.", "请记录所有读数。"], ["The results have been recorded.", "结果已记录。"]]
      },
      {
        w: "inspection results",
        ipa: "/ɪnˈspɛkʃən rɪˈzʌlts/",
        pos: "名词短语",
        cn: "巡检结果",
        memory: "inspection = 巡检、检查；results = 结果。inspection results = 巡检结果。",
        phonics: "inspection 读 /ɪnˈspɛkʃən/，results 读 /rɪˈzʌlts/。",
        collocations: [["record inspection results", "记录巡检结果"], ["review inspection results", "审查巡检结果"], ["inspection results report", "巡检结果报告"]],
        examples: [["The inspection results are normal.", "巡检结果正常。"], ["Please review the inspection results.", "请审查巡检结果。"]]
      }
    ],
    phrases: [
      {
        p: "record all inspection results",
        ipa: "/rɪˈkɔːrd ɔːl ɪnˈspɛkʃən rɪˈzʌlts/",
        cn: "记录所有巡检结果",
        why: "record = 记录；all = 所有；inspection results = 巡检结果。"
      }
    ],
    grammar: [
      {
        q: "record 作为动词和名词时发音有什么区别？",
        a: "record 作为动词时，重音在第二音节：/rɪˈkɔːrd/\nrecord 作为名词时，重音在第一音节：/ˈrɛkərd/\n✅ Please record the results.（请记录结果 → 动词，/rɪˈkɔːrd/）\n✅ Check the maintenance record.（检查维护记录 → 名词，/ˈrɛkərd/）\n本句中 record 是动词，重音在第二音节。"
      }
    ],
    pattern: "Please record all + 名词",
    patternExamples: [
      { en: "Please record all readings.", cn: "请记录所有读数。", words: [{ w: "readings", ipa: "/ˈriːdɪŋ/", cn: "读数", phonics: "read 读 /riːd/，ing 读 /ɪŋ/" }] },
      { en: "Please record all findings.", cn: "请记录所有发现。", words: [] },
      { en: "Please record all maintenance activities.", cn: "请记录所有维护活动。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] }
    ],
    thinking: "记录巡检结果是设备管理的重要环节。完整的记录包括：巡检时间、巡检人员、检查项目、检查结果、发现的问题、采取的措施等。这些记录用于设备状态分析、故障预防和维护计划制定。",
    pronunciation: "record 作为动词时重音在第二音节，/rɪˈkɔːrd/，注意不要读成 /ˈrɛkɔːrd/。",
    quiz: [
      {
        q: "如何表达'请记录所有读数'？",
        a: "Please record all readings."
      },
      {
        q: "record 作为动词和名词时发音有什么不同？",
        a: "record 作为动词时重音在第二音节（/rɪˈkɔːrd/），作为名词时重音在第一音节（/ˈrɛkərd/）。"
      }
    ]
  },
  {
    id: 1518,
    en: "Please update the transformer maintenance records.",
    cn: "请更新变压器维护记录。",
    ipa: "/pliːz ˌʌpˈdeɪt ðə ˈtrænsfɔːrmər ˈmeɪntənəns ˈrɛkərdz/",
    tags: ["变压器", "维护记录", "★★★★★"],
    when: "巡检或维护完成后，需要更新维护记录。",
    words: [
      {
        w: "update",
        ipa: "/ˌʌpˈdeɪt/",
        pos: "动词",
        cn: "更新",
        memory: "up- = 向上；date = 日期。update = 更新到最新日期 = 更新。",
        phonics: "up 读 /ˌʌp/，date 读 /ˈdeɪt/，重音在第二音节。",
        collocations: [["update records", "更新记录"], ["update the log", "更新日志"], ["update the status", "更新状态"]],
        examples: [["Please update the maintenance log.", "请更新维护日志。"], ["The records have been updated.", "记录已更新。"]]
      },
      {
        w: "maintenance records",
        ipa: "/ˈmeɪntənəns ˈrɛkərdz/",
        pos: "名词短语",
        cn: "维护记录",
        memory: "maintenance = 维护；records = 记录（复数）。maintenance records = 维护记录。",
        phonics: "maintenance 读 /ˈmeɪntənəns/，records 读 /ˈrɛkərdz/。",
        collocations: [["update maintenance records", "更新维护记录"], ["review maintenance records", "审查维护记录"], ["maintenance records system", "维护记录系统"]],
        examples: [["Check the maintenance records.", "检查维护记录。"], ["The maintenance records are complete.", "维护记录完整。"]]
      }
    ],
    phrases: [
      {
        p: "update the maintenance records",
        ipa: "/ˌʌpˈdeɪt ðə ˈmeɪntənəns ˈrɛkərdz/",
        cn: "更新维护记录",
        why: "update = 更新；maintenance records = 维护记录。"
      }
    ],
    grammar: [
      {
        q: "records 为什么用复数？",
        a: "records 用复数是因为维护记录通常包含多条记录：\n- 多次维护的记录\n- 不同项目的记录\n- 不同时间的记录\n✅ Please update the maintenance records.（请更新维护记录 → 多条记录）\n✅ Please check the maintenance record.（请检查这条维护记录 → 单条记录）\n通常情况下，维护记录是多条的，所以用复数。"
      }
    ],
    pattern: "Please update the + 名词",
    patternExamples: [
      { en: "Please update the maintenance log.", cn: "请更新维护日志。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "Please update the equipment status.", cn: "请更新设备状态。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Please update the inventory.", cn: "请更新库存。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }] }
    ],
    thinking: "维护记录是设备管理的重要组成部分，包括：维护时间、维护类型、维护内容、更换的部件、发现的问题、处理措施、维护人员等。及时更新维护记录有助于追踪设备状态、分析故障趋势、制定维护计划。",
    pronunciation: "update 的重音在第二音节，/ˌʌpˈdeɪt/，注意不要读成 /ˈʌpdeɪt/。records 作为名词时重音在第一音节，/ˈrɛkərdz/。",
    quiz: [
      {
        q: "如何表达'请更新维护日志'？",
        a: "Please update the maintenance log."
      },
      {
        q: "维护记录应该包含哪些内容？",
        a: "维护记录应该包含：维护时间、维护类型、维护内容、更换的部件、发现的问题、处理措施、维护人员、下次维护计划等。"
      }
    ]
  },
  {
    id: 1519,
    en: "The transformer inspection has been completed successfully.",
    cn: "变压器巡检已经顺利完成。",
    ipa: "/ðə ˈtrænsfɔːrmər ɪnˈspɛkʃən hæz biːn kəmˈpliːtɪd səkˈsɛsfəli/",
    tags: ["变压器", "巡检完成", "★★★★★"],
    when: "变压器巡检全部完成后的总结报告。",
    words: [
      {
        w: "inspection",
        ipa: "/ɪnˈspɛkʃən/",
        pos: "名词",
        cn: "巡检；检查",
        memory: "inspect = 检查；-ion = 名词后缀。inspection = 巡检、检查。",
        phonics: "in 读 /ɪn/，spec 读 /spɛk/，tion 读 /ʃən/，重音在第二音节。",
        collocations: [["transformer inspection", "变压器巡检"], ["routine inspection", "例行巡检"], ["inspection report", "巡检报告"]],
        examples: [["The inspection is scheduled for tomorrow.", "巡检计划明天进行。"], ["Please prepare for the inspection.", "请准备巡检。"]]
      }
    ],
    phrases: [
      {
        p: "has been completed successfully",
        ipa: "/hæz biːn kəmˈpliːtɪd səkˈsɛsfəli/",
        cn: "已经顺利完成",
        why: "has been completed = 已经完成（现在完成时被动语态）；successfully = 成功地、顺利地。"
      }
    ],
    grammar: [
      {
        q: "为什么用 has been completed 而不是 has completed？",
        a: "has been completed = 已经被完成（被动语态，强调动作被完成）\nhas completed = 已经完成（主动语态，主语是执行者）\n✅ The inspection has been completed.（巡检已被完成 → 被动语态）\n✅ The engineer has completed the inspection.（工程师已完成巡检 → 主动语态）\n本句主语是 inspection（巡检），是动作的接受者，所以用被动语态。"
      }
    ],
    pattern: "名词 + has been completed successfully",
    patternExamples: [
      { en: "The maintenance has been completed successfully.", cn: "维护已顺利完成。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "The test has been completed successfully.", cn: "测试已顺利完成。", words: [{ w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "The installation has been completed successfully.", cn: "安装已顺利完成。", words: [] }
    ],
    thinking: "The transformer inspection has been completed successfully 是巡检完成后的标准报告用语。这句话使用现在完成时的被动语态，强调巡检动作已完成，并且 successfully 表示过程中没有出现异常或问题。",
    pronunciation: "inspection 的重音在第二音节，/ɪnˈspɛkʃən/，注意不要读成 /ˈɪnspɛkʃən/。",
    quiz: [
      {
        q: "如何表达'维护已顺利完成'？",
        a: "The maintenance has been completed successfully."
      },
      {
        q: "为什么用被动语态 has been completed？",
        a: "因为主语 inspection（巡检）是动作的接受者，不是执行者，所以用被动语态。"
      }
    ]
  },
  {
    id: 1520,
    en: "The transformer system is operating safely and normally.",
    cn: "变压器系统安全、正常运行。",
    ipa: "/ðə ˈtrænsfɔːrmər ˈsɪstəm ɪz ˈɒpəreɪtɪŋ ˈseɪfli ænd ˈnɔːrməli/",
    tags: ["变压器", "运行状态", "★★★★★"],
    when: "巡检或维护完成后，确认变压器系统的最终运行状态。",
    words: [
      {
        w: "safely",
        ipa: "/ˈseɪfli/",
        pos: "副词",
        cn: "安全地",
        memory: "safe = 安全的；-ly = 副词后缀。safely = 安全地。",
        phonics: "safe 读 /seɪf/，ly 读 /li/，重音在第一音节。",
        collocations: [["operating safely", "安全运行"], ["work safely", "安全工作"], ["safely isolated", "安全隔离"]],
        examples: [["The system is operating safely.", "系统安全运行。"], ["Please work safely.", "请安全工作。"]]
      },
      {
        w: "normally",
        ipa: "/ˈnɔːrməli/",
        pos: "副词",
        cn: "正常地",
        memory: "normal = 正常的；-ly = 副词后缀。normally = 正常地。",
        phonics: "nor 读 /ˈnɔːr/，mal 读 /mə/，ly 读 /li/，重音在第一音节。",
        collocations: [["operating normally", "正常运行"], ["functioning normally", "正常运作"], ["running normally", "正常运转"]],
        examples: [["The equipment is operating normally.", "设备正常运行。"], ["All systems are functioning normally.", "所有系统正常运作。"]]
      }
    ],
    phrases: [
      {
        p: "operating safely and normally",
        ipa: "/ˈɒpəreɪtɪŋ ˈseɪfli ænd ˈnɔːrməli/",
        cn: "安全、正常运行",
        why: "operating = 运行；safely = 安全地；normally = 正常地。safely and normally 强调既安全又正常。"
      }
    ],
    grammar: [
      {
        q: "为什么用 is operating 而不是 operates？",
        a: "is operating = 正在运行（现在进行时，强调当前状态）\noperates = 运行（一般现在时，描述常态）\n✅ The system is operating safely.（系统正在安全运行 → 强调当前状态）\n✅ The system operates 24/7.（系统24小时运行 → 描述常态）\n本句使用现在进行时，强调当前的运行状态。"
      }
    ],
    pattern: "系统/设备 + is operating + 副词",
    patternExamples: [
      { en: "The system is operating normally.", cn: "系统正常运行。", words: [{ w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The generator is operating efficiently.", cn: "发电机高效运行。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "The equipment is operating smoothly.", cn: "设备平稳运行。", words: [{ w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] }
    ],
    thinking: "safely and normally 是描述设备运行状态的常用组合。safely 强调没有安全隐患，normally 强调运行参数在正常范围内。这句话是巡检或维护完成后的最终确认，表示变压器系统处于良好的运行状态。",
    pronunciation: "safely 读 /ˈseɪfli/，normally 读 /ˈnɔːrməli/，注意两个副词的重音都在第一音节。",
    quiz: [
      {
        q: "如何表达'发电机正常运行'？",
        a: "The generator is operating normally."
      },
      {
        q: "safely and normally 强调什么？",
        a: "safely and normally 强调设备既安全（没有安全隐患）又正常（运行参数在正常范围内）。"
      }
    ]
  }
];

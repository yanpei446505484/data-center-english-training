// EXPORTS: MOCK_SENTENCES_PART9B

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART9B: ISentence[] = [
  {
    id: 256,
    en: "Please verify that the backup sump pump is available.",
    cn: "请确认备用集水泵可以正常使用。",
    ipa: "/pliːz ˈvɛr.ɪ.faɪ ðæt ðə ˈbæk.ʌp sʌmp pʌmp ɪz əˈveɪ.lə.bəl/",
    tags: ["第256句", "排水系统", "★★★★"],
    when: "主集水泵运行正常后，检查备用泵是否可用，确保排水系统有冗余保障。",
    words: [
      {
        w: "verify",
        ipa: "/ˈvɛr.ɪ.faɪ/",
        pos: "动词",
        cn: "确认；验证",
        memory: "ver = true（真实）+ ify = make（使）→ 使变真实 → 验证真实性\nverify 比 check 更正式，强调通过测试或检查来确认某事物符合标准。",
        phonics: "ver 读 /vɛr/，i 读 /ɪ/，fy 读 /faɪ/，重音在第一音节。",
        collocations: [
          ["verify availability", "确认可用性"],
          ["verify functionality", "确认功能正常"],
          ["verify operation", "确认运行状态"]
        ],
        examples: [
          ["Please verify the pump before use.", "使用前请确认泵的状态。"],
          ["The technician verified all safety systems.", "技术员确认了所有安全系统。"]
        ]
      },
      {
        w: "backup",
        ipa: "/ˈbæk.ʌp/",
        pos: "形容词/名词",
        cn: "备用的；备用设备",
        memory: "back = 后面 + up = 支持 → 在背后提供支持 → 备用/后备\nbackup pump 是主泵故障时的替代设备，确保系统连续运行。",
        phonics: "back 读 /bæk/，up 读 /ʌp/，重音在第一音节。注意不是 /bɑːk/。",
        collocations: [
          ["backup pump", "备用泵"],
          ["backup system", "备用系统"],
          ["backup generator", "备用发电机"]
        ],
        examples: [
          ["The backup generator started automatically.", "备用发电机自动启动了。"],
          ["Do we have a backup plan?", "我们有备用计划吗？"]
        ]
      },
      {
        w: "available",
        ipa: "/əˈveɪ.lə.bəl/",
        pos: "形容词",
        cn: "可用的；可用的",
        memory: "avail = 有用（to have strength）+ able = 能够 → 能够被使用\navailable 强调设备处于可用状态，没有被占用或损坏。",
        phonics: "a 读 /ə/，vail 读 /veɪ/，a 读 /ə/，ble 读 /bəl/，重音在第二音节。",
        collocations: [
          ["available for use", "可供使用"],
          ["immediately available", "立即可用"],
          ["readily available", "随时可用"]
        ],
        examples: [
          ["Is the backup system available?", "备用系统可用吗？"],
          ["The equipment is available 24/7.", "设备全天候可用。"]
        ]
      }
    ],
    phrases: [
      {
        p: "verify that",
        ipa: "/ˈvɛr.ɪ.faɪ ðæt/",
        cn: "确认...",
        why: "verify + that 从句 = 确认某事属实。交接时用于确认关键设备的状态或可用性。"
      }
    ],
    grammar: [
      {
        q: "verify that 和 check if 有什么区别？",
        a: "verify that = 确认（更正式，强调验证过程）\ncheck if = 检查是否（更口语，强调检查动作）\n✅ Please verify that the pump is available.（请确认泵可用 → 正式交接用语）\n✅ Check if the pump works.（检查泵是否工作 → 日常用语）\n交接场景用 verify，体现专业性。"
      }
    ],
    pattern: "Please verify that + 设备/系统 + is available",
    patternExamples: [
      { en: "Please verify that the backup generator is available.", cn: "请确认备用发电机可用。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "backup", ipa: "/ˈbækʌp/", cn: "备份", phonics: "back 读 /bæk/，up 读 /ʌp/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "Please verify that the fire suppression system is available.", cn: "请确认消防系统可用。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please verify that all safety equipment is available.", cn: "请确认所有安全设备可用。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }, { w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }] }
    ],
    thinking: "排水系统检查的核心是确认冗余保障。\n主泵正常运行是基础，备用泵可用是保障。\n交接时必须确认：① 主泵状态 ② 备用泵状态 ③ 自动启动功能。\nverify 比 check 更正式，体现运维交接的严谨性。",
    pronunciation: "verify 的 ver 读 /vɛr/，不是 /vɪər/。\nbackup 是复合词，重音在前：/ˈbæk.ʌp/。\navailable 重音在第二音节：/əˈveɪ.lə.bəl/。\n节奏：Please VER-i-fy ｜ that the BACK-up ｜ SUMP PUMP ｜ is a-VAIL-a-ble.",
    quiz: [
      {
        q: "请确认备用发电机可用，怎么说？",
        a: "Please verify that the backup generator is available."
      },
      {
        q: "verify 和 check 在交接时哪个更正式？",
        a: "verify 更正式。verify = 验证/确认（强调通过测试确认符合标准）；check = 检查（强调查看动作）。交接场景用 verify，日常用语用 check。"
      }
    ]
  },
  {
    id: 257,
    en: "The backup sump pump was tested successfully.",
    cn: "备用集水泵测试正常。",
    ipa: "/ðə ˈbæk.ʌp sʌmp pʌmp wəz ˈtɛs.tɪd səkˈsɛs.fəl.i/",
    tags: ["第257句", "排水系统", "★★★★"],
    when: "确认备用泵可用后，报告测试结果，证明备用系统功能正常。",
    words: [
      {
        w: "tested",
        ipa: "/ˈtɛs.tɪd/",
        pos: "动词(过去分词)",
        cn: "被测试",
        memory: "test = 测试（来自拉丁语 testum = 陶罐，用于检测金属纯度）\ntested = 被测试过，用被动语态强调测试已完成。",
        phonics: "test 读 /tɛst/，ed 读 /ɪd/，重音在第一音节。",
        collocations: [
          ["tested successfully", "测试成功"],
          ["tested and verified", "测试并确认"],
          ["regularly tested", "定期测试"]
        ],
        examples: [
          ["The system was tested last week.", "系统上周测试过了。"],
          ["All equipment has been tested.", "所有设备都已测试。"]
        ]
      },
      {
        w: "successfully",
        ipa: "/səkˈsɛs.fəl.i/",
        pos: "副词",
        cn: "成功地",
        memory: "success = 成功 + ful = 充满 + ly = 地 → 成功地\nsuccessfully 修饰动词，表示动作顺利完成并达到预期结果。",
        phonics: "suc 读 /sək/，cess 读 /sɛs/，ful 读 /fəl/，ly 读 /i/，重音在第二音节。",
        collocations: [
          ["completed successfully", "成功完成"],
          ["tested successfully", "测试成功"],
          ["operating successfully", "成功运行"]
        ],
        examples: [
          ["The maintenance was completed successfully.", "维护成功完成了。"],
          ["The pump started successfully.", "泵成功启动了。"]
        ]
      }
    ],
    phrases: [
      {
        p: "was tested successfully",
        ipa: "/wəz ˈtɛs.tɪd səkˈsɛs.fəl.i/",
        cn: "测试成功",
        why: "was tested = 被测试（被动语态）+ successfully = 成功地。交接时报告测试结果，强调测试已完成且通过。"
      }
    ],
    grammar: [
      {
        q: "为什么用 was tested 而不是 tested？",
        a: "was tested = 被测试（被动语态，强调设备是测试对象）\ntested = 测试了（主动语态，需要主语是测试者）\n✅ The pump was tested successfully.（泵被测试成功了 → 强调泵的状态）\n❌ The pump tested successfully.（语法不对，pump 不能主动测试）\n交接用被动语态，因为关注的是设备状态，不是谁测试的。"
      }
    ],
    pattern: "设备/系统 + was tested + successfully",
    patternExamples: [
      { en: "The backup generator was tested successfully.", cn: "备用发电机测试成功。", words: [{ w: "backup", ipa: "/ˈbækʌp/", cn: "备份", phonics: "back 读 /bæk/，up 读 /ʌp/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "tested", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "The fire alarm was tested successfully.", cn: "火警系统测试成功。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "tested", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "All safety systems were tested successfully.", cn: "所有安全系统测试成功。", words: [{ w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }, { w: "systems", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "tested", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] }
    ],
    thinking: "测试结果汇报是运维交接的关键信息。\n测试 = 验证设备功能的主动行为。\n交接时报告：① 测试了什么 ② 测试结果如何 ③ 是否符合预期。\nwas tested successfully = 测试完成且通过，是最常见的汇报句式。",
    pronunciation: "tested 的 ed 读 /ɪd/，不是 /t/：/ˈtɛs.tɪd/。\nsuccessfully 重音在第二音节：/səkˈsɛs.fəl.i/。\n节奏：The BACK-up ｜ SUMP PUMP ｜ was TES-ted ｜ suc-CESS-ful-ly.",
    quiz: [
      {
        q: "备用发电机测试成功，怎么说？",
        a: "The backup generator was tested successfully."
      },
      {
        q: "was tested 和 tested 有什么区别？",
        a: "was tested = 被测试（被动语态）；tested = 测试了（主动语态）。交接时说 The pump was tested（泵被测试了），不说 The pump tested（语法错误）。被动语态强调设备状态。"
      }
    ]
  },
  {
    id: 258,
    en: "No standing water was found.",
    cn: "现场没有发现积水。",
    ipa: "/noʊ ˈstæn.dɪŋ ˈwɔː.tər wəz faʊnd/",
    tags: ["第258句", "排水系统", "★★★★"],
    when: "集水井和泵检查完成后，确认现场没有积水，排除漏水风险。",
    words: [
      {
        w: "standing water",
        ipa: "/ˈstæn.dɪŋ ˈwɔː.tər/",
        pos: "名词短语",
        cn: "积水；滞留水",
        memory: "stand = 站立 + ing = 正在 → 站着不动的水 → 积水\nstanding water 指停滞不流动的水，常见于排水不畅的区域。",
        phonics: "stand 读 /stænd/，ing 读 /ɪŋ/，water 读 /ˈwɔː.tər/。",
        collocations: [
          ["no standing water", "无积水"],
          ["remove standing water", "清除积水"],
          ["prevent standing water", "防止积水"]
        ],
        examples: [
          ["Standing water can cause damage.", "积水可能造成损害。"],
          ["Please remove any standing water.", "请清除任何积水。"]
        ]
      },
      {
        w: "found",
        ipa: "/faʊnd/",
        pos: "动词(过去分词)",
        cn: "被发现",
        memory: "find = 发现 → found = 被发现（被动语态）\nfound 常用于巡检报告，表示检查后的发现结果。",
        phonics: "found 读 /faʊnd/，ou 读 /aʊ/。",
        collocations: [
          ["was found", "被发现"],
          ["no issue found", "未发现问题"],
          ["found during inspection", "巡检中发现"]
        ],
        examples: [
          ["No leaks were found.", "没有发现泄漏。"],
          ["A problem was found yesterday.", "昨天发现了一个问题。"]
        ]
      }
    ],
    phrases: [
      {
        p: "no standing water was found",
        ipa: "/noʊ ˈstæn.dɪŋ ˈwɔː.tər wəz faʊnd/",
        cn: "没有发现积水",
        why: "no + 名词 + was found = 没有发现...（否定句式）。交接时用于报告巡检结果，确认无异常。"
      }
    ],
    grammar: [
      {
        q: "为什么用 No... was found 而不是 didn't find？",
        a: "No... was found = 没有...被发现（被动语态，更正式）\ndidn't find = 没发现（主动语态，需要主语）\n✅ No standing water was found.（没有发现积水 → 正式报告用语）\n✅ We didn't find any standing water.（我们没发现积水 → 口语表达）\n交接用被动语态，更客观专业。"
      }
    ],
    pattern: "No + 问题/异常 + was found",
    patternExamples: [
      { en: "No leakage was found.", cn: "没有发现泄漏。", words: [] },
      { en: "No damage was found.", cn: "没有发现损坏。", words: [] },
      { en: "No abnormality was found.", cn: "没有发现异常。", words: [] }
    ],
    thinking: "巡检结果汇报的核心句式：No... was found\n这种句式用于确认检查后未发现问题，是交接时的标准报告格式。\n积水是数据中心重点防范的问题，可能导致：① 设备短路 ② 地面湿滑 ③ 结构腐蚀。\n定期巡检 + 及时报告 = 风险预防。",
    pronunciation: "standing 的 and 读 /æn/，不是 /ɑːn/：/ˈstæn.dɪŋ/。\nfound 的 ou 读 /aʊ/，不是 /uː/：/faʊnd/。\n节奏：No STAND-ing ｜ WA-ter ｜ was FOUND.",
    quiz: [
      {
        q: "没有发现泄漏，怎么说？",
        a: "No leakage was found."
      },
      {
        q: "No... was found 和 didn't find 哪个更正式？",
        a: "No... was found 更正式。这是被动语态，用于正式报告（如交接记录）。didn't find 是主动语态，更口语化。交接场景用 No... was found。"
      }
    ]
  },
  {
    id: 259,
    en: "Please inspect all floor drains.",
    cn: "请检查所有地漏。",
    ipa: "/pliːz ɪnˈspɛkt ɔːl flɔːr dreɪnz/",
    tags: ["第259句", "排水系统", "★★★★"],
    when: "集水井检查完成后，转入地漏检查，确保排水系统末端畅通。",
    words: [
      {
        w: "inspect",
        ipa: "/ɪnˈspɛkt/",
        pos: "动词",
        cn: "检查；视察",
        memory: "in = into（进入）+ spect = look（看）→ 仔细看进去 → 检查/视察\ninspect 比 check 更系统全面，强调逐项检查。",
        phonics: "in 读 /ɪn/，spect 读 /spɛkt/，重音在第二音节。",
        collocations: [
          ["inspect thoroughly", "彻底检查"],
          ["inspect regularly", "定期检查"],
          ["inspect for damage", "检查损坏情况"]
        ],
        examples: [
          ["Please inspect the equipment before use.", "使用前请检查设备。"],
          ["The technician inspected all connections.", "技术员检查了所有连接。"]
        ]
      },
      {
        w: "floor drain",
        ipa: "/flɔːr dreɪn/",
        pos: "名词",
        cn: "地漏；地面排水口",
        memory: "floor = 地面 + drain = 排水口 → 地面上的排水口 → 地漏\nfloor drain 是排水系统的末端，收集地面水并排入下水管道。",
        phonics: "floor 读 /flɔːr/，drain 读 /dreɪn/。",
        collocations: [
          ["floor drain cover", "地漏盖板"],
          ["clogged floor drain", "堵塞的地漏"],
          ["clean floor drain", "清洁地漏"]
        ],
        examples: [
          ["The floor drain is blocked.", "地漏堵塞了。"],
          ["Please clean the floor drains weekly.", "请每周清洁地漏。"]
        ]
      }
    ],
    phrases: [
      {
        p: "inspect all floor drains",
        ipa: "/ɪnˈspɛkt ɔːl flɔːr dreɪnz/",
        cn: "检查所有地漏",
        why: "inspect + all + 复数名词 = 检查所有...。交接时强调全面检查，不遗漏任何一个地漏。"
      }
    ],
    grammar: [
      {
        q: "inspect 和 check 有什么区别？",
        a: "inspect = 检查/视察（更系统全面，逐项检查）\ncheck = 查看/核对（快速确认）\n✅ Please inspect all floor drains.（请检查所有地漏 → 逐个仔细检查）\n✅ Please check the drain.（请查看地漏 → 快速看一眼）\n交接用 inspect，因为地漏需要逐个检查是否堵塞。"
      }
    ],
    pattern: "Please inspect all + 设备/区域",
    patternExamples: [
      { en: "Please inspect all fire extinguishers.", cn: "请检查所有灭火器。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }] },
      { en: "Please inspect all emergency exits.", cn: "请检查所有紧急出口。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "emergency", ipa: "/ɪˈmɜːrdʒənsi/", cn: "紧急", phonics: "e 读 /ɪ/，mergency 读 /mɜːrdʒənsi/" }] },
      { en: "Please inspect all electrical panels.", cn: "请检查所有配电盘。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "electrical", ipa: "/ɪˈlɛktrɪkəl/", cn: "电气", phonics: "e 读 /ɪ/，lectrical 读 /lɛktrɪkəl/" }, { w: "panels", ipa: "/ˈpænl/", cn: "面板", phonics: "pan 读 /pæn/，el 读 /l/" }] }
    ],
    thinking: "地漏是排水系统的末端防线。\n地漏堵塞 = 地面排水不畅 = 积水风险。\n检查要点：① 是否堵塞 ② 盖板是否完好 ③ 排水是否顺畅。\ninspect all = 全面检查，不遗漏。交接时强调完整性。",
    pronunciation: "inspect 重音在第二音节：/ɪnˈspɛkt/。\nfloor 的 oo 读 /ɔː/，不是 /uː/：/flɔːr/。\n节奏：Please in-SPECT ｜ ALL FLOOR DRAINS.",
    quiz: [
      {
        q: "请检查所有灭火器，怎么说？",
        a: "Please inspect all fire extinguishers."
      },
      {
        q: "inspect 和 check 哪个更系统？",
        a: "inspect 更系统。inspect = 检查/视察（逐项仔细检查）；check = 查看/核对（快速确认）。交接时说 inspect all floor drains（检查所有地漏），强调逐个检查。"
      }
    ]
  },
  {
    id: 260,
    en: "All floor drains are clear.",
    cn: "所有地漏畅通。",
    ipa: "/ɔːl flɔːr dreɪnz ɑːr klɪr/",
    tags: ["第260句", "排水系统", "★★★★"],
    when: "地漏检查完成后，报告检查结果，确认所有地漏畅通无阻。",
    words: [
      {
        w: "clear",
        ipa: "/klɪr/",
        pos: "形容词",
        cn: "畅通的；无障碍的",
        memory: "clear = 清晰的/畅通的（来自拉丁语 clarus = 明亮）\nclear 用于管道/通道时，表示没有堵塞物，水流畅通。",
        phonics: "clear 读 /klɪr/，cl 读 /kl/，ear 读 /ɪr/。",
        collocations: [
          ["drain is clear", "排水口畅通"],
          ["path is clear", "通道畅通"],
          ["keep clear", "保持畅通"]
        ],
        examples: [
          ["The drain is clear.", "排水口畅通。"],
          ["Please keep the exit clear.", "请保持出口畅通。"]
        ]
      }
    ],
    phrases: [
      {
        p: "are clear",
        ipa: "/ɑːr klɪr/",
        cn: "畅通",
        why: "are + clear = 是畅通的（状态描述）。交接时用于报告检查结果，确认设备/通道状态良好。"
      }
    ],
    grammar: [
      {
        q: "clear 和 clean 有什么区别？",
        a: "clear = 畅通的（无堵塞物，水流畅通）\nclean = 清洁的（无污垢，干净）\n✅ The drain is clear.（地漏畅通 → 没有堵塞）\n✅ The drain is clean.（地漏干净 → 没有污垢）\n交接关注 clear（功能正常），clean 是维护要求。"
      }
    ],
    pattern: "All + 设备/区域 + are clear",
    patternExamples: [
      { en: "All drains are clear.", cn: "所有排水口畅通。", words: [{ w: "clear", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
      { en: "All exits are clear.", cn: "所有出口畅通。", words: [{ w: "clear", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
      { en: "All pathways are clear.", cn: "所有通道畅通。", words: [{ w: "clear", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] }
    ],
    thinking: "检查结果汇报的标准句式：All... are clear\n这种句式用于确认检查后所有项目状态良好，无异常。\n地漏畅通 = 排水系统末端正常 = 无积水风险。\n交接时报告 All... are clear，给接班人明确的安全确认。",
    pronunciation: "clear 的 ear 读 /ɪr/，不是 /iːr/：/klɪr/。\n节奏：ALL FLOOR DRAINS ｜ are CLEAR.",
    quiz: [
      {
        q: "所有出口畅通，怎么说？",
        a: "All exits are clear."
      },
      {
        q: "clear 和 clean 在排水语境中有什么区别？",
        a: "clear = 畅通（无堵塞，功能正常）；clean = 清洁（无污垢，卫生要求）。交接时说 The drain is clear（地漏畅通），强调功能状态。clean 是维护要求，不是交接重点。"
      }
    ]
  },
  {
    id: 261,
    en: "Please inspect the drainage pipes.",
    cn: "请检查排水管。",
    ipa: "/pliːz ɪnˈspɛkt ðə ˈdreɪ.nɪdʒ paɪpz/",
    tags: ["第261句", "排水系统", "★★★★"],
    when: "地漏检查完成后，继续检查排水管道，确保整个排水系统畅通。",
    words: [
      {
        w: "drainage",
        ipa: "/ˈdreɪ.nɪdʒ/",
        pos: "名词",
        cn: "排水；排水系统",
        memory: "drain = 排水 + age = 系统/集合 → 排水系统\ndrainage 指整个排水系统，包括管道、沟渠、集水井等。",
        phonics: "drain 读 /dreɪn/，age 读 /ɪdʒ/，重音在第一音节。",
        collocations: [
          ["drainage system", "排水系统"],
          ["drainage pipe", "排水管"],
          ["drainage problem", "排水问题"]
        ],
        examples: [
          ["The drainage system is working well.", "排水系统运行良好。"],
          ["There is a drainage issue.", "有一个排水问题。"]
        ]
      },
      {
        w: "pipe",
        ipa: "/paɪp/",
        pos: "名词",
        cn: "管道；管子",
        memory: "pipe = 管道（来自拉丁语 pipa = 管子）\npipe 是输送液体或气体的圆柱形通道。",
        phonics: "pipe 读 /paɪp/，i 读 /aɪ/，末尾 p 轻声。",
        collocations: [
          ["water pipe", "水管"],
          ["drainage pipe", "排水管"],
          ["pipe leakage", "管道泄漏"]
        ],
        examples: [
          ["The pipe is leaking.", "管道在泄漏。"],
          ["Please check the pipes for damage.", "请检查管道是否损坏。"]
        ]
      }
    ],
    phrases: [
      {
        p: "drainage pipes",
        ipa: "/ˈdreɪ.nɪdʒ paɪpz/",
        cn: "排水管",
        why: "drainage + pipes = 排水管道。交接时检查排水管道是否堵塞、泄漏或损坏。"
      }
    ],
    grammar: [
      {
        q: "drainage 和 drain 有什么区别？",
        a: "drainage = 排水系统（整体概念）\ndrain = 排水口/排水动作（具体设备或行为）\n✅ drainage pipes = 排水系统的管道\n✅ floor drain = 地漏（具体排水口）\ndrainage 是系统层面，drain 是设备层面。"
      }
    ],
    pattern: "Please inspect the + 系统/设备 + pipes/wires/components",
    patternExamples: [
      { en: "Please inspect the water pipes.", cn: "请检查水管。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "pipes", ipa: "/paɪp/", cn: "管道", phonics: "pipe 读 /paɪp/" }] },
      { en: "Please inspect the electrical wires.", cn: "请检查电线。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "electrical", ipa: "/ɪˈlɛktrɪkəl/", cn: "电气", phonics: "e 读 /ɪ/，lectrical 读 /lɛktrɪkəl/" }] },
      { en: "Please inspect the HVAC components.", cn: "请检查暖通组件。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "hvac", ipa: "/ˌeɪtʃˈviːˈeɪˈsiː/", cn: "暖通", phonics: "H-V-A-C 逐字母读" }] }
    ],
    thinking: "排水管道是排水系统的骨干。\n管道问题 = 排水不畅 = 积水/倒灌风险。\n检查要点：① 是否堵塞 ② 是否泄漏 ③ 连接是否牢固。\n交接时从末端（地漏）→ 主干（管道）逐步检查，确保系统完整。",
    pronunciation: "drainage 重音在第一音节：/ˈdreɪ.nɪdʒ/。\npipes 的 i 读 /aɪ/：/paɪpz/。\n节奏：Please in-SPECT ｜ the DRAIN-age PIPES.",
    quiz: [
      {
        q: "请检查水管，怎么说？",
        a: "Please inspect the water pipes."
      },
      {
        q: "drainage 和 drain 有什么区别？",
        a: "drainage = 排水系统（整体概念）；drain = 排水口（具体设备）。drainage pipes = 排水系统的管道；floor drain = 地漏（具体排水口）。"
      }
    ]
  },
  {
    id: 262,
    en: "No blockage was found.",
    cn: "没有发现堵塞。",
    ipa: "/noʊ ˈblɒk.ɪdʒ wəz faʊnd/",
    tags: ["第262句", "排水系统", "★★★★"],
    when: "排水管道检查完成后，报告检查结果，确认无堵塞问题。",
    words: [
      {
        w: "blockage",
        ipa: "/ˈblɒk.ɪdʒ/",
        pos: "名词",
        cn: "堵塞；阻塞",
        memory: "block = 阻塞 + age = 状态/结果 → 堵塞状态\nblockage 指管道、通道等被堵塞的状态或堵塞物。",
        phonics: "block 读 /blɒk/，age 读 /ɪdʒ/，重音在第一音节。",
        collocations: [
          ["pipe blockage", "管道堵塞"],
          ["no blockage", "无堵塞"],
          ["remove blockage", "清除堵塞"]
        ],
        examples: [
          ["There is a blockage in the pipe.", "管道里有堵塞。"],
          ["Please remove the blockage.", "请清除堵塞。"]
        ]
      }
    ],
    phrases: [
      {
        p: "no blockage was found",
        ipa: "/noʊ ˈblɒk.ɪdʒ wəz faʊnd/",
        cn: "没有发现堵塞",
        why: "no + 问题 + was found = 没有发现...（否定句式）。交接时用于报告巡检结果，确认无堵塞异常。"
      }
    ],
    grammar: [
      {
        q: "blockage 和 block 有什么区别？",
        a: "blockage = 堵塞（名词，指堵塞状态或堵塞物）\nblock = 阻塞（动词，指阻塞动作）\n✅ No blockage was found.（没有发现堵塞 → 名词用法）\n✅ The pipe is blocked.（管道被堵塞了 → 动词被动语态）\n交接用 blockage（名词），更正式。"
      }
    ],
    pattern: "No + 问题名词 + was found",
    patternExamples: [
      { en: "No leakage was found.", cn: "没有发现泄漏。", words: [] },
      { en: "No damage was found.", cn: "没有发现损坏。", words: [] },
      { en: "No corrosion was found.", cn: "没有发现腐蚀。", words: [] }
    ],
    thinking: "No... was found 是巡检结果汇报的标准句式。\n这种句式用于确认检查后未发现问题。\nblockage 是排水系统最常见的问题，可能导致：① 排水不畅 ② 积水 ③ 倒灌。\n交接时报告 No blockage was found，确认排水系统畅通。",
    pronunciation: "blockage 的 o 读 /ɒ/（英式）或 /ɑː/（美式）：/ˈblɒk.ɪdʒ/。\nfound 的 ou 读 /aʊ/：/faʊnd/。\n节奏：No BLOCK-age ｜ was FOUND.",
    quiz: [
      {
        q: "没有发现泄漏，怎么说？",
        a: "No leakage was found."
      },
      {
        q: "blockage 和 block 哪个是名词？",
        a: "blockage 是名词（堵塞状态）；block 是动词（阻塞动作）。交接时说 No blockage was found（没有发现堵塞），用名词形式更正式。"
      }
    ]
  },
  {
    id: 263,
    en: "Please inspect the loading bay.",
    cn: "请检查卸货平台。",
    ipa: "/pliːz ɪnˈspɛkt ðə ˈloʊ.dɪŋ beɪ/",
    tags: ["第263句", "排水系统", "★★★"],
    when: "室内排水检查完成后，检查卸货平台，这是雨水可能进入的入口区域。",
    words: [
      {
        w: "loading bay",
        ipa: "/ˈloʊ.dɪŋ beɪ/",
        pos: "名词",
        cn: "卸货平台；装卸区",
        memory: "load = 装载 + ing = 活动 + bay = 区域 → 装载活动的区域 → 卸货平台\nloading bay 是货物进出的入口，也是雨水可能渗入的区域。",
        phonics: "load 读 /loʊd/，ing 读 /ɪŋ/，bay 读 /beɪ/。",
        collocations: [
          ["loading bay door", "卸货平台门"],
          ["loading bay drainage", "卸货平台排水"],
          ["loading bay inspection", "卸货平台检查"]
        ],
        examples: [
          ["The loading bay is closed.", "卸货平台关闭了。"],
          ["Please check the loading bay after rain.", "雨后请检查卸货平台。"]
        ]
      }
    ],
    phrases: [
      {
        p: "loading bay",
        ipa: "/ˈloʊ.dɪŋ beɪ/",
        cn: "卸货平台",
        why: "loading bay 是数据中心的重要区域，货物进出频繁，也是雨水可能进入的入口。交接时需检查是否渗水。"
      }
    ],
    grammar: [
      {
        q: "loading bay 和 loading dock 有什么区别？",
        a: "loading bay = 卸货平台（英式英语，常见于亚洲/欧洲）\nloading dock = 装卸码头（美式英语，常见于北美）\n两者指同一设施：货物装卸的区域。\n马来西亚用 loading bay，交接时用这个术语。"
      }
    ],
    pattern: "Please inspect the + 区域名称",
    patternExamples: [
      { en: "Please inspect the loading bay.", cn: "请检查卸货平台。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "loading", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
      { en: "Please inspect the rooftop.", cn: "请检查屋顶。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }] },
      { en: "Please inspect the basement.", cn: "请检查地下室。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }] }
    ],
    thinking: "卸货平台是雨水渗透的高风险区域。\n卸货平台特点：① 频繁开关门 ② 地面与室外平齐 ③ 排水沟易堵塞。\n检查要点：① 是否有积水 ② 排水沟是否畅通 ③ 门密封是否完好。\n交接时重点关注卸货平台，防止雨水渗入机房。",
    pronunciation: "loading 的 o 读 /oʊ/：/ˈloʊ.dɪŋ/。\nbay 读 /beɪ/，不是 /baɪ/。\n节奏：Please in-SPECT ｜ the LOAD-ing BAY.",
    quiz: [
      {
        q: "请检查屋顶，怎么说？",
        a: "Please inspect the rooftop."
      },
      {
        q: "loading bay 和 loading dock 哪个是英式？",
        a: "loading bay 是英式英语（马来西亚常用）；loading dock 是美式英语。两者指同一设施：卸货平台。交接时用 loading bay。"
      }
    ]
  },
  {
    id: 264,
    en: "No rainwater entered the building.",
    cn: "没有雨水进入建筑物。",
    ipa: "/noʊ ˈreɪnˌwɔː.tər ˈɛn.tərd ðə ˈbɪl.dɪŋ/",
    tags: ["第264句", "排水系统", "★★★★"],
    when: "卸货平台检查完成后，报告结果，确认无雨水渗入建筑物。",
    words: [
      {
        w: "rainwater",
        ipa: "/ˈreɪnˌwɔː.tər/",
        pos: "名词",
        cn: "雨水",
        memory: "rain = 雨 + water = 水 → 雨水\nrainwater 指降雨产生的水，区别于自来水（tap water）或废水（wastewater）。",
        phonics: "rain 读 /reɪn/，water 读 /ˌwɔː.tər/，重音在第一音节。",
        collocations: [
          ["rainwater ingress", "雨水渗入"],
          ["rainwater drainage", "雨水排水"],
          ["rainwater collection", "雨水收集"]
        ],
        examples: [
          ["Rainwater entered the basement.", "雨水进入了地下室。"],
          ["Please prevent rainwater ingress.", "请防止雨水渗入。"]
        ]
      },
      {
        w: "entered",
        ipa: "/ˈɛn.tərd/",
        pos: "动词(过去式)",
        cn: "进入",
        memory: "enter = 进入（来自拉丁语 intrare = 进入）\nentered 表示已经进入，用于描述雨水渗入的动作已发生。",
        phonics: "en 读 /ɛn/，ter 读 /tər/，ed 读 /d/，重音在第一音节。",
        collocations: [
          ["entered the building", "进入建筑物"],
          ["entered the room", "进入房间"],
          ["water entered", "水进入"]
        ],
        examples: [
          ["Water entered through the door.", "水从门口进入。"],
          ["No water entered the server room.", "没有水进入服务器机房。"]
        ]
      }
    ],
    phrases: [
      {
        p: "no rainwater entered",
        ipa: "/noʊ ˈreɪnˌwɔː.tər ˈɛn.tərd/",
        cn: "没有雨水进入",
        why: "no + 名词 + entered = 没有...进入（否定句式）。交接时用于报告检查结果，确认建筑物无雨水渗入。"
      }
    ],
    grammar: [
      {
        q: "entered 和 came in 有什么区别？",
        a: "entered = 进入（正式用语，强调进入动作）\ncame in = 进来（口语，更随意）\n✅ No rainwater entered the building.（没有雨水进入建筑物 → 正式报告）\n✅ No rainwater came in.（没有雨水进来 → 口语表达）\n交接用 entered，更专业。"
      }
    ],
    pattern: "No + 液体/物质 + entered + 区域",
    patternExamples: [
      { en: "No water entered the server room.", cn: "没有水进入服务器机房。", words: [{ w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "server", ipa: "/ˈsɜːrvər/", cn: "服务器", phonics: "serv 读 /sɜːrv/，er 读 /ər/" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "No dust entered the clean room.", cn: "没有灰尘进入洁净室。", words: [{ w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] },
      { en: "No smoke entered the building.", cn: "没有烟雾进入建筑物。", words: [{ w: "smoke", ipa: "/smoʊk/", cn: "烟雾", phonics: "smoke 读 /smoʊk/" }, { w: "building", ipa: "/ˈbɪldɪŋ/", cn: "建筑", phonics: "build 读 /bɪld/，ing 读 /ɪŋ/" }] }
    ],
    thinking: "雨水渗入是数据中心的大忌。\n雨水进入建筑物可能导致：① 设备短路 ② 地面湿滑 ③ 结构腐蚀 ④ 霉菌滋生。\n检查重点区域：① 卸货平台 ② 屋顶 ③ 外墙 ④ 电缆入口。\n交接时报告 No rainwater entered，确认建筑物防水完好。",
    pronunciation: "rainwater 是复合词，重音在前：/ˈreɪnˌwɔː.tər/。\nentered 的 ed 读 /d/，不是 /ɪd/：/ˈɛn.tərd/。\n节奏：No RAIN-wa-ter ｜ EN-tered ｜ the BUILD-ing.",
    quiz: [
      {
        q: "没有水进入服务器机房，怎么说？",
        a: "No water entered the server room."
      },
      {
        q: "entered 和 came in 哪个更正式？",
        a: "entered 更正式。entered = 进入（正式用语）；came in = 进来（口语）。交接时说 No rainwater entered the building（没有雨水进入建筑物），用 entered 更专业。"
      }
    ]
  },
  {
    id: 265,
    en: "Please inspect the cable trenches.",
    cn: "请检查电缆沟。",
    ipa: "/pliːz ɪnˈspɛkt ðə ˈkeɪ.bəl trɛn.tʃɪz/",
    tags: ["第265句", "排水系统", "★★★★"],
    when: "卸货平台检查完成后，检查电缆沟，这是雨水可能渗入的隐蔽通道。",
    words: [
      {
        w: "cable trench",
        ipa: "/ˈkeɪ.bəl trɛntʃ/",
        pos: "名词",
        cn: "电缆沟；电缆槽",
        memory: "cable = 电缆 + trench = 沟渠 → 电缆沟\ncable trench 是埋设电缆的地下沟渠，也是雨水可能渗入的隐蔽通道。",
        phonics: "cable 读 /ˈkeɪ.bəl/，trench 读 /trɛntʃ/，ch 读 /tʃ/。",
        collocations: [
          ["cable trench cover", "电缆沟盖板"],
          ["cable trench drainage", "电缆沟排水"],
          ["cable trench inspection", "电缆沟检查"]
        ],
        examples: [
          ["The cable trench is flooded.", "电缆沟被淹了。"],
          ["Please check the cable trench after rain.", "雨后请检查电缆沟。"]
        ]
      }
    ],
    phrases: [
      {
        p: "cable trenches",
        ipa: "/ˈkeɪ.bəl trɛn.tʃɪz/",
        cn: "电缆沟",
        why: "cable trenches 是数据中心基础设施的重要组成部分，承载电力和通信电缆。交接时需检查是否有积水或渗漏。"
      }
    ],
    grammar: [
      {
        q: "trench 和 ditch 有什么区别？",
        a: "trench = 沟渠（窄而深，通常有特定用途，如电缆沟）\nditch = 沟（宽而浅，通常用于排水）\n✅ cable trench = 电缆沟（窄深，埋设电缆）\n✅ drainage ditch = 排水沟（宽浅，排放雨水）\n数据中心用 trench，因为电缆沟是窄深的专用沟渠。"
      }
    ],
    pattern: "Please inspect the + 基础设施名称",
    patternExamples: [
      { en: "Please inspect the cable trenches.", cn: "请检查电缆沟。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }] },
      { en: "Please inspect the utility tunnels.", cn: "请检查管廊。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }] },
      { en: "Please inspect the ventilation ducts.", cn: "请检查通风管道。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }] }
    ],
    thinking: "电缆沟是雨水渗入的隐蔽通道。\n电缆沟特点：① 通常有盖板，不易察觉 ② 积水可能导致电缆腐蚀 ③ 排水不畅可能倒灌入机房。\n检查要点：① 是否有积水 ② 盖板是否完好 ③ 排水孔是否堵塞。\n交接时重点关注电缆沟，防止隐蔽渗漏。",
    pronunciation: "cable 的 a 读 /eɪ/：/ˈkeɪ.bəl/。\ntrench 的 ch 读 /tʃ/：/trɛntʃ/。\n节奏：Please in-SPECT ｜ the CA-ble TRENCH-es.",
    quiz: [
      {
        q: "请检查管廊，怎么说？",
        a: "Please inspect the utility tunnels."
      },
      {
        q: "trench 和 ditch 哪个更深？",
        a: "trench 更深（窄而深，有特定用途）；ditch 更浅（宽而浅，用于排水）。cable trench = 电缆沟（窄深）；drainage ditch = 排水沟（宽浅）。数据中心用 trench。"
      }
    ]
  },
  {
    id: 266,
    en: "The cable trenches are dry.",
    cn: "电缆沟保持干燥。",
    ipa: "/ðə ˈkeɪ.bəl trɛn.tʃɪz ɑːr draɪ/",
    tags: ["第266句", "排水系统", "★★★★"],
    when: "电缆沟检查完成后，报告检查结果，确认电缆沟干燥无积水。",
    words: [
      {
        w: "dry",
        ipa: "/draɪ/",
        pos: "形容词",
        cn: "干燥的",
        memory: "dry = 干燥的（来自古英语 drȳge）\ndry 用于描述无水分、无积液的状态，是电缆沟的理想状态。",
        phonics: "dry 读 /draɪ/，dr 读 /dr/，y 读 /aɪ/。",
        collocations: [
          ["keep dry", "保持干燥"],
          ["completely dry", "完全干燥"],
          ["dry condition", "干燥状态"]
        ],
        examples: [
          ["The trench is dry.", "沟渠是干燥的。"],
          ["Please keep the area dry.", "请保持区域干燥。"]
        ]
      }
    ],
    phrases: [
      {
        p: "are dry",
        ipa: "/ɑːr draɪ/",
        cn: "干燥",
        why: "are + dry = 是干燥的（状态描述）。交接时用于报告检查结果，确认设备/区域无积水。"
      }
    ],
    grammar: [
      {
        q: "dry 和 clear 在检查语境中有什么区别？",
        a: "dry = 干燥（无水分/积液）\nclear = 畅通（无堵塞/障碍）\n✅ The cable trenches are dry.（电缆沟干燥 → 无积水）\n✅ The floor drains are clear.（地漏畅通 → 无堵塞）\n电缆沟关注 dry（干燥），排水口关注 clear（畅通）。"
      }
    ],
    pattern: "The + 设备/区域 + are dry",
    patternExamples: [
      { en: "The trenches are dry.", cn: "沟渠干燥。", words: [] },
      { en: "The basement is dry.", cn: "地下室干燥。", words: [] },
      { en: "The equipment room is dry.", cn: "设备间干燥。", words: [{ w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }] }
    ],
    thinking: "电缆沟干燥是数据中心安全的基本要求。\n电缆沟积水可能导致：① 电缆绝缘老化 ② 短路风险 ③ 金属腐蚀。\n交接时报告 The cable trenches are dry，确认电缆沟状态良好。\ndry 是电缆沟的理想状态，与 clear（畅通）互补。",
    pronunciation: "dry 的 y 读 /aɪ/，不是 /i/：/draɪ/。\n节奏：The CA-ble TRENCH-es ｜ are DRY.",
    quiz: [
      {
        q: "地下室干燥，怎么说？",
        a: "The basement is dry."
      },
      {
        q: "dry 和 clear 在检查中有什么区别？",
        a: "dry = 干燥（无水分）；clear = 畅通（无堵塞）。电缆沟关注 dry（干燥），排水口关注 clear（畅通）。交接时说 The cable trenches are dry（电缆沟干燥）。"
      }
    ]
  },
  {
    id: 267,
    en: "Please inspect the external drainage system.",
    cn: "请检查室外排水系统。",
    ipa: "/pliːz ɪnˈspɛkt ðə ɪkˈstɜːr.nəl ˈdreɪ.nɪdʒ ˈsɪs.təm/",
    tags: ["第267句", "排水系统", "★★★★"],
    when: "室内排水检查完成后，检查室外排水系统，确保整体排水能力。",
    words: [
      {
        w: "external",
        ipa: "/ɪkˈstɜːr.nəl/",
        pos: "形容词",
        cn: "外部的；室外的",
        memory: "extern = outside（外部）+ al = 形容词后缀 → 外部的\nexternal 与 internal（内部的）相对，指建筑物外部或室外。",
        phonics: "ex 读 /ɪk/，ter 读 /tɜːr/，nal 读 /nəl/，重音在第二音节。",
        collocations: [
          ["external drainage", "室外排水"],
          ["external wall", "外墙"],
          ["external inspection", "外部检查"]
        ],
        examples: [
          ["Please check the external drainage.", "请检查室外排水。"],
          ["The external walls are intact.", "外墙完好。"]
        ]
      },
      {
        w: "drainage system",
        ipa: "/ˈdreɪ.nɪdʒ ˈsɪs.təm/",
        pos: "名词",
        cn: "排水系统",
        memory: "drainage = 排水 + system = 系统 → 排水系统\ndrainage system 包括管道、沟渠、集水井、泵等所有排水设施。",
        phonics: "drainage 读 /ˈdreɪ.nɪdʒ/，system 读 /ˈsɪs.təm/。",
        collocations: [
          ["drainage system capacity", "排水系统容量"],
          ["drainage system maintenance", "排水系统维护"],
          ["drainage system failure", "排水系统故障"]
        ],
        examples: [
          ["The drainage system is working well.", "排水系统运行良好。"],
          ["There is a drainage system problem.", "排水系统有问题。"]
        ]
      }
    ],
    phrases: [
      {
        p: "external drainage system",
        ipa: "/ɪkˈstɜːr.nəl ˈdreɪ.nɪdʒ ˈsɪs.təm/",
        cn: "室外排水系统",
        why: "external + drainage system = 室外排水系统。交接时需检查室外排水系统是否正常，确保雨水能及时排出。"
      }
    ],
    grammar: [
      {
        q: "external 和 outdoor 有什么区别？",
        a: "external = 外部的（正式用语，强调与内部相对）\noutdoor = 户外的（口语，强调露天环境）\n✅ external drainage system = 室外排水系统（正式术语）\n✅ outdoor area = 户外区域（口语表达）\n交接用 external，更专业。"
      }
    ],
    pattern: "Please inspect the + 系统名称",
    patternExamples: [
      { en: "Please inspect the external drainage system.", cn: "请检查室外排水系统。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "drainage", ipa: "/ˈdreɪnɪdʒ/", cn: "排水", phonics: "drain 读 /dreɪn/，age 读 /ɪdʒ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please inspect the fire suppression system.", cn: "请检查消防系统。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please inspect the HVAC system.", cn: "请检查暖通系统。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }, { w: "hvac", ipa: "/ˌeɪtʃˈviːˈeɪˈsiː/", cn: "暖通", phonics: "H-V-A-C 逐字母读" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] }
    ],
    thinking: "室外排水系统是整体排水能力的保障。\n室外排水系统包括：① 雨水管 ② 排水沟 ③ 集水井 ④ 排水泵。\n检查要点：① 是否堵塞 ② 是否泄漏 ③ 排水能力是否充足。\n交接时从室内 → 室外逐步检查，确保排水系统完整。",
    pronunciation: "external 重音在第二音节：/ɪkˈstɜːr.nəl/。\ndrainage 重音在第一音节：/ˈdreɪ.nɪdʒ/。\n节奏：Please in-SPECT ｜ the ex-TER-nal ｜ DRAIN-age SYS-tem.",
    quiz: [
      {
        q: "请检查消防系统，怎么说？",
        a: "Please inspect the fire suppression system."
      },
      {
        q: "external 和 outdoor 哪个更正式？",
        a: "external 更正式。external = 外部的（正式术语）；outdoor = 户外的（口语）。交接时说 external drainage system（室外排水系统），用 external 更专业。"
      }
    ]
  },
  {
    id: 268,
    en: "Everything is operating normally after the rain.",
    cn: "雨后所有设施运行正常。",
    ipa: "/ˈɛv.ri.θɪŋ ɪz ˈɒp.ə.reɪ.tɪŋ ˈnɔːr.mə.li æf.tər ðə reɪn/",
    tags: ["第268句", "排水系统", "★★★★"],
    when: "室外排水检查完成后，总结报告，确认雨后所有设施运行正常。",
    words: [
      {
        w: "operating",
        ipa: "/ˈɒp.ə.reɪ.tɪŋ/",
        pos: "动词(现在分词)",
        cn: "运行；操作",
        memory: "operate = 运行/操作（来自拉丁语 operari = 工作）\noperating 表示正在运行，用进行时强调当前状态。",
        phonics: "op 读 /ɒp/，er 读 /ə/，at 读 /eɪ/，ing 读 /ɪŋ/，重音在第一音节。",
        collocations: [
          ["operating normally", "正常运行"],
          ["operating temperature", "运行温度"],
          ["operating status", "运行状态"]
        ],
        examples: [
          ["The system is operating well.", "系统运行良好。"],
          ["What is the operating status?", "运行状态如何？"]
        ]
      },
      {
        w: "normally",
        ipa: "/ˈnɔːr.mə.li/",
        pos: "副词",
        cn: "正常地",
        memory: "normal = 正常 + ly = 地 → 正常地\nnormally 修饰动词，表示按照预期标准运行。",
        phonics: "nor 读 /nɔːr/，mal 读 /mə/，ly 读 /li/，重音在第一音节。",
        collocations: [
          ["functioning normally", "正常运作"],
          ["behaving normally", "正常表现"],
          ["running normally", "正常运行"]
        ],
        examples: [
          ["The equipment is functioning normally.", "设备正常运作。"],
          ["Everything is running normally.", "一切正常运行。"]
        ]
      }
    ],
    phrases: [
      {
        p: "operating normally",
        ipa: "/ˈɒp.ə.reɪ.tɪŋ ˈnɔːr.mə.li/",
        cn: "正常运行",
        why: "operating + normally = 正常运行（状态描述）。交接时用于报告设备/系统的当前运行状态。"
      }
    ],
    grammar: [
      {
        q: "operating normally 和 working fine 有什么区别？",
        a: "operating normally = 正常运行（正式用语，强调符合标准）\nworking fine = 工作良好（口语，更随意）\n✅ Everything is operating normally.（一切正常运行 → 正式报告）\n✅ Everything is working fine.（一切都好 → 口语表达）\n交接用 operating normally，更专业。"
      }
    ],
    pattern: "Everything is + 动词-ing + normally + 时间/条件",
    patternExamples: [
      { en: "Everything is functioning normally after maintenance.", cn: "维护后一切正常运作。", words: [{ w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "All systems are operating normally after the test.", cn: "测试后所有系统正常运行。", words: [{ w: "systems", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The equipment is running normally after repair.", cn: "维修后设备正常运行。", words: [{ w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }, { w: "repair", ipa: "/rɪˈpeər/", cn: "维修", phonics: "re 读 /rɪ/，pair 读 /peər/" }] }
    ],
    thinking: "雨后检查是数据中心的重要巡检项目。\n雨后检查要点：① 屋顶是否渗漏 ② 排水系统是否畅通 ③ 电缆沟是否积水 ④ 室外设备是否正常。\n交接时报告 Everything is operating normally after the rain，确认雨后无异常。\n这是排水系统检查的总结性汇报。",
    pronunciation: "operating 重音在第一音节：/ˈɒp.ə.reɪ.tɪŋ/。\nnormally 重音在第一音节：/ˈnɔːr.mə.li/。\n节奏：EV-ery-thing ｜ is OP-er-a-ting ｜ NOR-mal-ly ｜ af-ter the RAIN.",
    quiz: [
      {
        q: "维护后一切正常运作，怎么说？",
        a: "Everything is functioning normally after maintenance."
      },
      {
        q: "operating normally 和 working fine 哪个更正式？",
        a: "operating normally 更正式。operating normally = 正常运行（正式术语）；working fine = 工作良好（口语）。交接时说 Everything is operating normally（一切正常运行），用正式用语更专业。"
      }
    ]
  },
  {
    id: 269,
    en: "No additional corrective action is required.",
    cn: "目前不需要采取额外的纠正措施。",
    ipa: "/noʊ əˈdɪʃ.ə.nəl kəˈrɛk.tɪv ˈæk.ʃən ɪz rɪˈkwaɪərd/",
    tags: ["第269句", "排水系统", "★★★★"],
    when: "雨后检查总结，确认无需额外纠正措施，可以进入下一环节。",
    words: [
      {
        w: "additional",
        ipa: "/əˈdɪʃ.ə.nəl/",
        pos: "形容词",
        cn: "额外的；附加的",
        memory: "add = 添加 + ition = 名词后缀 + al = 形容词后缀 → 额外的\nadditional 指在现有基础上再增加的，区别于已有的。",
        phonics: "ad 读 /ə/，di 读 /dɪ/，tion 读 /ʃən/，al 读 /əl/，重音在第二音节。",
        collocations: [
          ["additional action", "额外措施"],
          ["additional cost", "额外成本"],
          ["additional information", "额外信息"]
        ],
        examples: [
          ["No additional work is needed.", "不需要额外工作。"],
          ["Do you need additional support?", "你需要额外支持吗？"]
        ]
      },
      {
        w: "corrective action",
        ipa: "/kəˈrɛk.tɪv ˈæk.ʃən/",
        pos: "名词短语",
        cn: "纠正措施",
        memory: "correct = 纠正 + ive = 形容词后缀 + action = 行动 → 纠正措施\ncorrective action 是针对问题采取的纠正行动，防止问题再次发生。",
        phonics: "cor 读 /kə/，rec 读 /rɛk/，tive 读 /tɪv/，action 读 /ˈæk.ʃən/。",
        collocations: [
          ["corrective action plan", "纠正措施计划"],
          ["take corrective action", "采取纠正措施"],
          ["corrective action required", "需要纠正措施"]
        ],
        examples: [
          ["Corrective action has been taken.", "已采取纠正措施。"],
          ["What corrective action is needed?", "需要什么纠正措施？"]
        ]
      },
      {
        w: "required",
        ipa: "/rɪˈkwaɪərd/",
        pos: "动词(过去分词)",
        cn: "需要；要求",
        memory: "require = 需要/要求（来自拉丁语 requirere = 寻求）\nrequired 表示被需要或被要求，用被动语态强调客观需求。",
        phonics: "re 读 /rɪ/，quire 读 /kwaɪər/，ed 读 /d/，重音在第二音节。",
        collocations: [
          ["is required", "需要"],
          ["as required", "按要求"],
          ["if required", "如果需要"]
        ],
        examples: [
          ["No action is required.", "不需要行动。"],
          ["Approval is required.", "需要批准。"]
        ]
      }
    ],
    phrases: [
      {
        p: "no additional corrective action is required",
        ipa: "/noʊ əˈdɪʃ.ə.nəl kəˈrɛk.tɪv ˈæk.ʃən ɪz rɪˈkwaɪərd/",
        cn: "不需要额外纠正措施",
        why: "no + additional + corrective action + is required = 不需要额外纠正措施。交接时用于总结检查结果，确认无需进一步行动。"
      }
    ],
    grammar: [
      {
        q: "corrective action 和 preventive action 有什么区别？",
        a: "corrective action = 纠正措施（针对已发生问题）\npreventive action = 预防措施（针对潜在问题）\n✅ Corrective action fixes existing problems.（纠正措施修复现有问题）\n✅ Preventive action prevents future problems.（预防措施防止未来问题）\n交接时报告 No corrective action required，说明现有问题已处理或无问题。"
      }
    ],
    pattern: "No additional + 名词 + is required",
    patternExamples: [
      { en: "No additional maintenance is required.", cn: "不需要额外维护。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "No additional testing is required.", cn: "不需要额外测试。", words: [{ w: "testing", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "No additional approval is required.", cn: "不需要额外批准。", words: [] }
    ],
    thinking: "No additional corrective action is required 是检查环节的标准收尾句式。\n这种句式用于总结检查结果，确认：① 已发现的问题已处理 ② 无需进一步行动 ③ 可以进入下一环节。\ncorrective action 是运维管理的重要概念，与 preventive action 互补。\n交接时报告此句，给接班人明确的安全确认。",
    pronunciation: "additional 重音在第二音节：/əˈdɪʃ.ə.nəl/。\ncorrective 重音在第二音节：/kəˈrɛk.tɪv/。\nrequired 的 ed 读 /d/，不是 /ɪd/：/rɪˈkwaɪərd/。\n节奏：No ad-DI-tion-al ｜ cor-REC-tive AC-tion ｜ is re-QUIRED.",
    quiz: [
      {
        q: "不需要额外维护，怎么说？",
        a: "No additional maintenance is required."
      },
      {
        q: "corrective action 和 preventive action 有什么区别？",
        a: "corrective action = 纠正措施（修复已发生问题）；preventive action = 预防措施（防止未来问题）。交接时说 No corrective action required（不需要纠正措施），说明现有问题已处理。"
      }
    ]
  },
  {
    id: 270,
    en: "Now let's review the electrical systems.",
    cn: "现在我们开始检查电气系统。",
    ipa: "/naʊ lɛts rɪˈvjuː ðə ɪˈlɛk.trɪ.kəl ˈsɪs.təmz/",
    tags: ["第270句", "排水系统", "★★★", "转场"],
    when: "排水系统检查完成，转入电气系统检查，开启下一个交接环节。",
    words: [
      {
        w: "review",
        ipa: "/rɪˈvjuː/",
        pos: "动词",
        cn: "检查；审查",
        memory: "re = again（再次）+ view = 看 → 再次查看 → 检查/审查\nreview 强调系统性地查看或审查，确保全面了解。",
        phonics: "re 读 /rɪ/，view 读 /vjuː/，重音在第二音节。",
        collocations: [
          ["review the system", "检查系统"],
          ["review the report", "审查报告"],
          ["review the progress", "检查进度"]
        ],
        examples: [
          ["Let's review the checklist.", "我们检查清单。"],
          ["Please review the maintenance log.", "请审查维护日志。"]
        ]
      },
      {
        w: "electrical system",
        ipa: "/ɪˈlɛk.trɪ.kəl ˈsɪs.təm/",
        pos: "名词",
        cn: "电气系统",
        memory: "electrical = 电气的 + system = 系统 → 电气系统\nelectrical system 包括发电机、UPS、配电柜、变压器等所有电气设备。",
        phonics: "electrical 重音在第二音节：/ɪˈlɛk.trɪ.kəl/，system 读 /ˈsɪs.təm/。",
        collocations: [
          ["electrical system status", "电气系统状态"],
          ["electrical system failure", "电气系统故障"],
          ["electrical system maintenance", "电气系统维护"]
        ],
        examples: [
          ["The electrical system is stable.", "电气系统稳定。"],
          ["There is an electrical system issue.", "电气系统有问题。"]
        ]
      }
    ],
    phrases: [
      {
        p: "let's review",
        ipa: "/lɛts rɪˈvjuː/",
        cn: "我们开始检查",
        why: "let's + review = 让我们检查（提议句式）。交接时用于引导进入下一个检查环节。"
      }
    ],
    grammar: [
      {
        q: "review 和 inspect 有什么区别？",
        a: "review = 检查/审查（强调系统性查看，可以是查看记录或状态）\ninspect = 检查（强调物理检查，逐项查看设备）\n✅ Let's review the electrical systems.（我们检查电气系统 → 查看状态/记录）\n✅ Please inspect the equipment.（请检查设备 → 物理检查设备）\nreview 更广泛，可以包括查看数据、记录、状态等。"
      }
    ],
    pattern: "Now let's review the + 系统/环节名称",
    patternExamples: [
      { en: "Now let's review the electrical systems.", cn: "现在我们开始检查电气系统。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "electrical", ipa: "/ɪˈlɛktrɪkəl/", cn: "电气", phonics: "e 读 /ɪ/，lectrical 读 /lɛktrɪkəl/" }, { w: "systems", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Now let's review the mechanical systems.", cn: "现在我们开始检查机械系统。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "mechanical", ipa: "/mɪˈkænɪkəl/", cn: "机械", phonics: "me 读 /mɪ/，chanical 读 /kænɪkəl/" }, { w: "systems", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Now let's review the safety procedures.", cn: "现在我们开始检查安全程序。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }, { w: "procedures", ipa: "/prəˈsiːdʒər/", cn: "流程", phonics: "pro 读 /prə/，cedure 读 /siːdʒər/" }] }
    ],
    thinking: "Now let's review... 是交接环节转场的标准句式。\n这种句式用于：① 结束当前环节 ② 引导进入下一环节 ③ 保持交接流程的连贯性。\n交接顺序：排水系统（241-269）→ 电气系统（270+）→ 机械系统 → ...\nreview 比 inspect 更广泛，可以包括查看数据、记录、状态等。",
    pronunciation: "review 重音在第二音节：/rɪˈvjuː/。\nelectrical 重音在第二音节：/ɪˈlɛk.trɪ.kəl/。\n节奏：Now LET'S ｜ re-VIEW ｜ the e-LEC-tri-cal SYS-tems.",
    quiz: [
      {
        q: "现在我们开始检查机械系统，怎么说？",
        a: "Now let's review the mechanical systems."
      },
      {
        q: "review 和 inspect 哪个更广泛？",
        a: "review 更广泛。review = 检查/审查（可以查看数据、记录、状态）；inspect = 检查（强调物理检查设备）。交接时说 Let's review the electrical systems（我们检查电气系统），用 review 更合适。"
      }
    ]
  }
];

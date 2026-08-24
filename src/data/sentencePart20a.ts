// EXPORTS: MOCK_SENTENCES_PART20A

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART20A: ISentence[] = [
  {
    "id": 1441,
    "en": "Please check the medium-voltage switchgear status.",
    "cn": "请检查中压开关柜状态。",
    "ipa": "/pliːz tʃɛk ðə ˈmiː.di.əm ˈvɒl.tɪdʒ ˈswɪtʃ.ɡɪr ˈstæt.əs/",
    "tags": [
      "第1441句",
      "中压开关柜",
      "★★★★★"
    ],
    "when": "交接时首先检查中压开关柜整体运行状态。medium-voltage（中压）通常指10kV或35kV等级，是数据中心配电系统的核心环节。",
    "words": [
      {
        "w": "medium-voltage",
        "ipa": "/ˈmiː.di.əm ˈvɒl.tɪdʒ/",
        "pos": "形容词",
        "cn": "中压的",
        "memory": "medium = 中等/中；voltage = 电压。\nmedium-voltage = 中压，通常指10kV-35kV。\n数据中心配电：高压(110kV)→中压(10kV)→低压(400V)。",
        "phonics": "medium 读 /ˈmiː.di.əm/，voltage 读 /ˈvɒl.tɪdʒ/。",
        "collocations": [
          [
            "medium-voltage switchgear",
            "中压开关柜"
          ],
          [
            "medium-voltage system",
            "中压系统"
          ],
          [
            "medium-voltage cable",
            "中压电缆"
          ]
        ],
        "examples": [
          [
            "The medium-voltage system is stable.",
            "中压系统稳定。"
          ],
          [
            "Check the medium-voltage panel.",
            "检查中压柜。"
          ]
        ]
      },
      {
        "w": "switchgear",
        "ipa": "/ˈswɪtʃ.ɡɪr/",
        "pos": "名词",
        "cn": "开关柜；配电装置",
        "memory": "switch = 开关；gear = 装置/设备。\nswitchgear = 开关设备/配电装置，包含断路器、隔离开关、互感器等。\n是配电系统的核心设备。",
        "phonics": "switch 读 /swɪtʃ/，gear 读 /ɡɪr/，重音在第一音节。",
        "collocations": [
          [
            "switchgear status",
            "开关柜状态"
          ],
          [
            "switchgear inspection",
            "开关柜检查"
          ],
          [
            "switchgear room",
            "配电室"
          ]
        ],
        "examples": [
          [
            "The switchgear is operating normally.",
            "开关柜运行正常。"
          ],
          [
            "Enter the switchgear room.",
            "进入配电室。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "medium-voltage switchgear",
        "ipa": "/ˈmiː.di.əm ˈvɒl.tɪdʒ ˈswɪtʃ.ɡɪr/",
        "cn": "中压开关柜",
        "why": "medium-voltage + switchgear = 中压开关柜。这是数据中心配电系统的核心设备，负责10kV/35kV级别的电力分配和保护。"
      }
    ],
    "grammar": [
      {
        "q": "为什么用 check 而不是 inspect？",
        "a": "check = 检查/查看（快速确认状态）\ninspect = 检验/检查（详细的物理检查）\n✅ Please check the switchgear status.（请检查开关柜状态 → 查看监控数据）\n✅ Please inspect the switchgear.（请检查开关柜 → 现场巡检设备）\n交接时用 check，因为是通过监控系统远程查看。"
      }
    ],
    "pattern": "Please check the + 设备/系统 + status",
    "patternExamples": [
      { en: "Please check the UPS status.", cn: "请检查UPS状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Please check the generator status.", cn: "请检查发电机状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Please check the cooling system status.", cn: "请检查冷却系统状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] }
    ],
    "thinking": "中压开关柜是数据中心配电系统的心脏。交接检查顺序：① 整体状态（本句）→ ② 进线柜（1443-1444）→ ③ 出线柜（1445-1446）→ ④ 母联柜（1447-1448）→ ⑤ 馈线柜（1449-1450）。\n中压系统采用双路供电+母联备自投，确保任何一路故障时自动切换。",
    "pronunciation": "medium 的 di 读 /di/，不是 /daɪ/。\nvoltage 的 o 读短音 /ɒ/。\nswitchgear 的 gear 读 /ɡɪr/，不要读成 /ɡɪə/。",
    "quiz": [
      {
        "q": "请检查低压开关柜状态，怎么说？",
        "a": "Please check the low-voltage switchgear status."
      },
      {
        "q": "中压开关柜通常包含哪些设备？",
        "a": "中压开关柜通常包含：① 进线柜（incoming feeder）② 出线柜（outgoing feeder）③ 母联柜（bus coupler）④ PT柜（voltage transformer panel）⑤ 馈线柜（feeder panel）。"
      }
    ]
  },
  {
    "id": 1442,
    "en": "All medium-voltage switchgear is operating normally.",
    "cn": "所有中压开关柜运行正常。",
    "ipa": "/ɔːl ˈmiː.di.əm ˈvɒl.tɪdʒ ˈswɪtʃ.ɡɪr ɪz ˈɒp.ər.eɪ.tɪŋ ˈnɔːr.mə.li/",
    "tags": [
      "第1442句",
      "开关柜状态",
      "★★★★★"
    ],
    "when": "确认所有中压开关柜运行状态正常，无告警、无异常。这是交接时的理想状态报告。",
    "words": [
      {
        "w": "normally",
        "ipa": "/ˈnɔːr.mə.li/",
        "pos": "副词",
        "cn": "正常地",
        "memory": "normal = 正常的；-ly = 副词后缀。\nnormally = 正常地/按常规。\noperating normally = 正常运行。",
        "phonics": "normal 读 /ˈnɔːr.məl/，ly 读 /li/。",
        "collocations": [
          [
            "operating normally",
            "正常运行"
          ],
          [
            "functioning normally",
            "正常运作"
          ],
          [
            "running normally",
            "正常运转"
          ]
        ],
        "examples": [
          [
            "All systems are operating normally.",
            "所有系统正常运行。"
          ],
          [
            "The equipment is functioning normally.",
            "设备正常运作。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "operating normally",
        "ipa": "/ˈɒp.ər.eɪ.tɪŋ ˈnɔːr.mə.li/",
        "cn": "运行正常",
        "why": "operating + normally = 正常运行。这是汇报设备状态的标准用语，表明设备在正常参数范围内工作。"
      }
    ],
    "grammar": [
      {
        "q": "is operating 和 operates 有什么区别？",
        "a": "is operating = 正在运行（现在进行时，强调当前状态）\noperates = 运行（一般现在时，描述常态）\n✅ All switchgear is operating normally.（所有开关柜正在正常运行 → 汇报当前状态）\n✅ The switchgear operates 24/7.（开关柜24小时运行 → 描述常态）\n交接用进行时，关注'此刻的运行状态'。"
      }
    ],
    "pattern": "All + 设备 + is/are operating normally",
    "patternExamples": [
      { en: "All UPS systems are operating normally.", cn: "所有UPS系统运行正常。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "systems", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "All generators are operating normally.", cn: "所有发电机运行正常。", words: [{ w: "generators", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "All cooling units are operating normally.", cn: "所有冷却设备运行正常。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] }
    ],
    "thinking": "汇报开关柜状态的三种结论：\n① All switchgear operating normally（全部正常 → 最佳）\n② One switchgear has an alarm（一台有告警 → 需关注）\n③ Multiple switchgear alarms（多台告警 → 需紧急处理）\n交接时听到'operating normally'是最放心的消息。",
    "pronunciation": "normally 的 or 发长音 /ɔː/，不要读成 /ɒ/。\noperating 的重音在第一音节 /ˈɒp.ə.reɪ.tɪŋ/。",
    "quiz": [
      {
        "q": "所有发电机运行正常，怎么说？",
        "a": "All generators are operating normally."
      },
      {
        "q": "operating normally 的反义词是什么？",
        "a": "operating abnormally（运行异常）或 malfunctioning（故障）。"
      }
    ]
  },
  {
    "id": 1443,
    "en": "Please check the incoming feeder.",
    "cn": "请检查进线柜。",
    "ipa": "/pliːz tʃɛk ði ˈɪn.kʌm.ɪŋ ˈfiː.dər/",
    "tags": [
      "第1443句",
      "进线柜",
      "★★★★★"
    ],
    "when": "检查进线柜（incoming feeder）的运行状态。进线柜是中压开关柜的第一个环节，负责接收来自上级变电站的电源。",
    "words": [
      {
        "w": "incoming",
        "ipa": "/ˈɪn.kʌm.ɪŋ/",
        "pos": "形容词",
        "cn": "进入的；输入的",
        "memory": "in- = 进入；coming = 来的。\nincoming = 进入的/输入的。\nincoming feeder = 进线柜，接收外部电源。",
        "phonics": "in 读 /ɪn/，coming 读 /kʌm.ɪŋ/，重音在第一音节。",
        "collocations": [
          [
            "incoming feeder",
            "进线柜"
          ],
          [
            "incoming line",
            "进线"
          ],
          [
            "incoming power",
            "输入电源"
          ]
        ],
        "examples": [
          [
            "Check the incoming feeder status.",
            "检查进线柜状态。"
          ],
          [
            "The incoming power is stable.",
            "输入电源稳定。"
          ]
        ]
      },
      {
        "w": "feeder",
        "ipa": "/ˈfiː.dər/",
        "pos": "名词",
        "cn": "馈线；馈线柜",
        "memory": "feed = 供给/馈送；-er = 名词后缀。\nfeeder = 馈线/馈线柜，负责电力分配。\n中压开关柜中：incoming feeder（进线柜）/ outgoing feeder（出线柜）/ feeder panel（馈线柜）。",
        "phonics": "feed 读 /fiːd/，er 读 /ər/，重音在第一音节。",
        "collocations": [
          [
            "incoming feeder",
            "进线柜"
          ],
          [
            "outgoing feeder",
            "出线柜"
          ],
          [
            "feeder panel",
            "馈线柜"
          ]
        ],
        "examples": [
          [
            "The feeder is energized.",
            "馈线已带电。"
          ],
          [
            "Check the feeder current.",
            "检查馈线电流。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "incoming feeder",
        "ipa": "/ˈɪn.kʌm.ɪŋ ˈfiː.dər/",
        "cn": "进线柜",
        "why": "incoming + feeder = 进线柜。这是中压开关柜的第一个环节，负责接收来自上级变电站的电源。"
      }
    ],
    "grammar": [
      {
        "q": "incoming 和 outgoing 有什么区别？",
        "a": "incoming = 进入的（接收电源）\noutgoing = 出去的（分配电源）\n✅ incoming feeder = 进线柜（从上级变电站接收电源）\n✅ outgoing feeder = 出线柜（向下级配电室分配电源）\n电力流向：incoming → bus → outgoing → load。"
      }
    ],
    "pattern": "Please check the + 柜型名称",
    "patternExamples": [
      { en: "Please check the outgoing feeder.", cn: "请检查出线柜。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the bus coupler.", cn: "请检查母联柜。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the feeder panel.", cn: "请检查馈线柜。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "panel", ipa: "/ˈpænl/", cn: "面板", phonics: "pan 读 /pæn/，el 读 /l/" }] }
    ],
    "thinking": "进线柜是中压开关柜的'入口'，负责接收来自上级变电站的10kV/35kV电源。\n检查要点：① 电压是否正常 ② 电流是否正常 ③ 断路器状态 ④ 保护装置状态。\n双路供电系统中通常有两条进线（进线I和进线II），互为备用。",
    "pronunciation": "incoming 的 in 读 /ɪn/，不是 /aɪn/。\nfeeder 的 ee 读长音 /iː/。",
    "quiz": [
      {
        "q": "请检查进线柜电流，怎么说？",
        "a": "Please check the incoming feeder current."
      },
      {
        "q": "进线柜的作用是什么？",
        "a": "进线柜（incoming feeder）的作用：① 接收来自上级变电站的电源 ② 通过断路器进行过流/短路保护 ③ 通过互感器进行电流/电压测量 ④ 作为配电系统的电源入口。"
      }
    ]
  },
  {
    "id": 1444,
    "en": "The incoming feeder is energized.",
    "cn": "进线柜已经带电。",
    "ipa": "/ði ˈɪn.kʌm.ɪŋ ˈfiː.dər ɪz ˈɛn.ər.dʒaɪzd/",
    "tags": [
      "第1444句",
      "进线柜状态",
      "★★★★★"
    ],
    "when": "确认进线柜已经带电，电源输入正常。energized 表示设备已经通电，是电气操作中的重要状态描述。",
    "words": [
      {
        "w": "energized",
        "ipa": "/ˈɛn.ər.dʒaɪzd/",
        "pos": "形容词/过去分词",
        "cn": "带电的；通电的",
        "memory": "energy = 能量；-ize = 使成为；-d = 过去分词。\nenergized = 已通电/带电。\n⚠️ 电气安全术语：energized = 有电（危险），de-energized = 断电（安全）。",
        "phonics": "en 读 /ɛn/，er 读 /ər/，gized 读 /dʒaɪzd/。",
        "collocations": [
          [
            "energized equipment",
            "带电设备"
          ],
          [
            "de-energized",
            "断电的"
          ],
          [
            "energized state",
            "带电状态"
          ]
        ],
        "examples": [
          [
            "The equipment is energized.",
            "设备已带电。"
          ],
          [
            "Never touch energized equipment.",
            "切勿触碰带电设备。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "is energized",
        "ipa": "/ɪz ˈɛn.ər.dʒaɪzd/",
        "cn": "已经带电",
        "why": "is + energized = 已经带电。这是电气操作中的关键状态描述，表示设备已经通电运行。"
      }
    ],
    "grammar": [
      {
        "q": "energized 和 powered 有什么区别？",
        "a": "energized = 带电的（强调电气状态，常用于安全警示）\npowered = 供电的（强调有电源供应）\n✅ The feeder is energized.（馈线已带电 → 强调安全状态，勿触碰）\n✅ The system is powered on.（系统已供电 → 强调运行状态）\n电气操作用 energized，因为涉及安全。"
      }
    ],
    "pattern": "The + 设备 + is energized",
    "patternExamples": [
      { en: "The outgoing feeder is energized.", cn: "出线柜已带电。", words: [] },
      { en: "The bus bar is energized.", cn: "母线已带电。", words: [] },
      { en: "The transformer is energized.", cn: "变压器已带电。", words: [{ w: "transformer", ipa: "/trænsˈfɔːrmər/", cn: "变压器", phonics: "trans 读 /træns/，former 读 /fɔːrmər/" }] }
    ],
    "thinking": "energized 是电气操作中最重要的安全术语之一。\n⚠️ 安全规则：\n① energized = 有电 = 危险，禁止触碰\n② de-energized = 断电 = 安全，可以操作\n③ 操作前必须确认设备状态：energized 还是 de-energized\n交接时确认'进线柜已带电'表示电源输入正常。",
    "pronunciation": "energized 的 g 读 /dʒ/，不是 /g/。\n结尾的 -ized 读 /aɪzd/，注意 z 的浊音。",
    "quiz": [
      {
        "q": "进线柜已断电，怎么说？",
        "a": "The incoming feeder is de-energized."
      },
      {
        "q": "energized 的反义词是什么？",
        "a": "de-energized（断电的/不带电的）。"
      }
    ]
  },
  {
    "id": 1445,
    "en": "Please check the outgoing feeder.",
    "cn": "请检查出线柜。",
    "ipa": "/pliːz tʃɛk ði ˈaʊt.ɡoʊ.ɪŋ ˈfiː.dər/",
    "tags": [
      "第1445句",
      "出线柜",
      "★★★★★"
    ],
    "when": "检查出线柜（outgoing feeder）的运行状态。出线柜负责将电力从母线分配到下级配电系统。",
    "words": [
      {
        "w": "outgoing",
        "ipa": "/ˈaʊt.ɡoʊ.ɪŋ/",
        "pos": "形容词",
        "cn": "出去的；输出的",
        "memory": "out- = 出去；going = 去的。\noutgoing = 出去的/输出的。\noutgoing feeder = 出线柜，向下级分配电源。",
        "phonics": "out 读 /aʊt/，going 读 /ɡoʊ.ɪŋ/，重音在第一音节。",
        "collocations": [
          [
            "outgoing feeder",
            "出线柜"
          ],
          [
            "outgoing line",
            "出线"
          ],
          [
            "outgoing current",
            "输出电流"
          ]
        ],
        "examples": [
          [
            "Check the outgoing feeder.",
            "检查出线柜。"
          ],
          [
            "The outgoing current is normal.",
            "输出电流正常。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "outgoing feeder",
        "ipa": "/ˈaʊt.ɡoʊ.ɪŋ ˈfiː.dər/",
        "cn": "出线柜",
        "why": "outgoing + feeder = 出线柜。负责将电力从母线分配到下级配电系统，如变压器或低压开关柜。"
      }
    ],
    "grammar": [
      {
        "q": "incoming feeder 和 outgoing feeder 的关系是什么？",
        "a": "incoming feeder = 进线柜（接收电源）\noutgoing feeder = 出线柜（分配电源）\n电力流向：incoming feeder → bus（母线）→ outgoing feeder → load（负载）\n✅ 进线柜从上级变电站接收10kV电源\n✅ 出线柜将电源分配给变压器或下级配电室"
      }
    ],
    "pattern": "Please check the + 柜型名称",
    "patternExamples": [
      { en: "Please check the incoming feeder.", cn: "请检查进线柜。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the bus coupler.", cn: "请检查母联柜。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the PT panel.", cn: "请检查PT柜。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "panel", ipa: "/ˈpænl/", cn: "面板", phonics: "pan 读 /pæn/，el 读 /l/" }] }
    ],
    "thinking": "出线柜是中压开关柜的'出口'，负责将电力从母线分配给下级负载。\n检查要点：① 输出电压/电流 ② 断路器状态 ③ 保护装置 ④ 负载分配是否均衡。\n数据中心通常有多条出线，分别供给不同的变压器或UPS系统。",
    "pronunciation": "outgoing 的 out 读 /aʊt/，双元音要饱满。\nfeeder 的 ee 读长音 /iː/。",
    "quiz": [
      {
        "q": "请检查出线柜负载，怎么说？",
        "a": "Please check the outgoing feeder load."
      },
      {
        "q": "出线柜的作用是什么？",
        "a": "出线柜（outgoing feeder）的作用：① 将母线电源分配给下级负载 ② 通过断路器进行过流/短路保护 ③ 通过互感器进行电流/电压测量 ④ 实现选择性保护，故障时只跳本回路。"
      }
    ]
  },
  {
    "id": 1446,
    "en": "The outgoing feeder is operating normally.",
    "cn": "出线柜运行正常。",
    "ipa": "/ði ˈaʊt.ɡoʊ.ɪŋ ˈfiː.dər ɪz ˈɒp.ər.eɪ.tɪŋ ˈnɔːr.mə.li/",
    "tags": [
      "第1446句",
      "出线柜状态",
      "★★★★☆"
    ],
    "when": "确认出线柜运行状态正常，电力分配正常，无告警。",
    "words": [
      {
        "w": "operating",
        "ipa": "/ˈɒp.ər.eɪ.tɪŋ/",
        "pos": "现在分词/形容词",
        "cn": "运行的；操作的",
        "memory": "operate = 运行/操作；-ing = 进行时后缀。\noperating = 正在运行的。\noperating normally = 正常运行。",
        "phonics": "op 读 /ɒp/，er 读 /ər/，ating 读 /eɪ.tɪŋ/，重音在第一音节。",
        "collocations": [
          [
            "operating status",
            "运行状态"
          ],
          [
            "operating parameters",
            "运行参数"
          ],
          [
            "operating mode",
            "运行模式"
          ]
        ],
        "examples": [
          [
            "The system is operating.",
            "系统正在运行。"
          ],
          [
            "Check the operating parameters.",
            "检查运行参数。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "is operating normally",
        "ipa": "/ɪz ˈɒp.ər.eɪ.tɪŋ ˈnɔːr.mə.li/",
        "cn": "运行正常",
        "why": "is + operating + normally = 正在正常运行。这是汇报设备状态的标准用语。"
      }
    ],
    "grammar": [
      {
        "q": "为什么用现在进行时 is operating？",
        "a": "现在进行时强调'当前正在发生的状态'。\n交接时关注的是'此刻的设备状态'，所以用进行时。\n✅ The feeder is operating normally.（馈线正在正常运行 → 当前状态）\n✅ The feeder operates 24/7.（馈线24小时运行 → 一般事实）"
      }
    ],
    "pattern": "The + 设备 + is operating normally",
    "patternExamples": [
      { en: "The incoming feeder is operating normally.", cn: "进线柜运行正常。", words: [{ w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The bus coupler is operating normally.", cn: "母联柜运行正常。", words: [{ w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The transformer is operating normally.", cn: "变压器运行正常。", words: [{ w: "transformer", ipa: "/trænsˈfɔːrmər/", cn: "变压器", phonics: "trans 读 /træns/，former 读 /fɔːrmər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] }
    ],
    "thinking": "出线柜运行正常意味着：① 输出电压/电流在正常范围 ② 断路器处于合闸状态 ③ 保护装置正常 ④ 无告警信号。\n交接时逐台确认出线柜状态，确保每条馈线都正常供电。",
    "pronunciation": "outgoing 的 out 读 /aʊt/，operating 的 o 读短音 /ɒ/。",
    "quiz": [
      {
        "q": "进线柜运行正常，怎么说？",
        "a": "The incoming feeder is operating normally."
      }
    ]
  },
  {
    "id": 1447,
    "en": "Please check the bus coupler.",
    "cn": "请检查母联柜。",
    "ipa": "/pliːz tʃɛk ðə bʌs ˈkʌp.lər/",
    "tags": [
      "第1447句",
      "母联柜",
      "★★★★★"
    ],
    "when": "检查母联柜（bus coupler）的状态。母联柜连接两段母线，在双路供电系统中起关键的备用切换作用。",
    "words": [
      {
        "w": "bus",
        "ipa": "/bʌs/",
        "pos": "名词",
        "cn": "母线；汇流排",
        "memory": "bus = 母线/汇流排（电气术语）。\n在电力系统中，bus 是汇集和分配电能的导体。\nbus bar = 母线排。",
        "phonics": "bus 读 /bʌs/，短音 /ʌ/。",
        "collocations": [
          [
            "bus coupler",
            "母联柜"
          ],
          [
            "bus bar",
            "母线排"
          ],
          [
            "bus voltage",
            "母线电压"
          ]
        ],
        "examples": [
          [
            "Check the bus voltage.",
            "检查母线电压。"
          ],
          [
            "The bus is energized.",
            "母线已带电。"
          ]
        ]
      },
      {
        "w": "coupler",
        "ipa": "/ˈkʌp.lər/",
        "pos": "名词",
        "cn": "连接器；耦合器",
        "memory": "couple = 连接/耦合；-er = 名词后缀。\ncoupler = 连接器/耦合器。\nbus coupler = 母联柜，连接两段母线的开关设备。",
        "phonics": "coup 读 /kʌp/，ler 读 /lər/，重音在第一音节。",
        "collocations": [
          [
            "bus coupler",
            "母联柜"
          ],
          [
            "bus coupler breaker",
            "母联断路器"
          ],
          [
            "coupler switch",
            "联络开关"
          ]
        ],
        "examples": [
          [
            "Close the bus coupler.",
            "合上母联断路器。"
          ],
          [
            "The bus coupler is open.",
            "母联断路器分闸。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "bus coupler",
        "ipa": "/bʌs ˈkʌp.lər/",
        "cn": "母联柜；母线联络柜",
        "why": "bus + coupler = 母联柜。连接两段母线的开关设备，在双路供电系统中实现备用切换功能。"
      }
    ],
    "grammar": [
      {
        "q": "bus coupler 的作用是什么？",
        "a": "bus coupler（母联柜）的作用：\n① 连接两段母线（bus I 和 bus II）\n② 正常情况下母联断路器分闸，两段母线独立运行\n③ 当一路进线故障时，母联断路器自动合闸（备自投），由另一路进线供电\n④ 确保供电连续性，是双路供电系统的核心。"
      }
    ],
    "pattern": "Please check the + 柜型名称",
    "patternExamples": [
      { en: "Please check the incoming feeder.", cn: "请检查进线柜。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the outgoing feeder.", cn: "请检查出线柜。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the PT panel.", cn: "请检查PT柜。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "panel", ipa: "/ˈpænl/", cn: "面板", phonics: "pan 读 /pæn/，el 读 /l/" }] }
    ],
    "thinking": "母联柜是双路供电系统的关键设备。\n正常运行时：进线I → 母线I（独立），进线II → 母线II（独立），母联分闸。\n故障切换时：进线I故障 → 进线I跳闸 → 母联合闸 → 进线II同时供电给母线I和II。\n这就是'备自投'（automatic bus transfer）功能。",
    "pronunciation": "bus 读 /bʌs/，短音，不要读成 /buːs/。\ncoupler 的 ou 读 /ʌ/，不是 /uː/。",
    "quiz": [
      {
        "q": "请合上母联断路器，怎么说？",
        "a": "Please close the bus coupler breaker."
      },
      {
        "q": "母联柜在什么情况下合闸？",
        "a": "母联柜在以下情况下合闸：① 一路进线故障跳闸时，备自投自动合上母联 ② 手动操作切换供电方式时 ③ 检修一路进线时。正常情况下母联分闸，两段母线独立运行。"
      }
    ]
  },
  {
    "id": 1448,
    "en": "The bus coupler is open.",
    "cn": "母联断路器目前处于分闸状态。",
    "ipa": "/ðə bʌs ˈkʌp.lər ɪz ˈoʊ.pən/",
    "tags": [
      "第1448句",
      "母联状态",
      "★★★★★"
    ],
    "when": "确认母联断路器处于分闸（open）状态。这是双路供电系统正常运行时的标准状态，表示两段母线独立运行。",
    "words": [
      {
        "w": "open",
        "ipa": "/ˈoʊ.pən/",
        "pos": "形容词",
        "cn": "分闸的；断开的",
        "memory": "open = 打开的/分闸的（电气术语）。\n在电气领域：open = 分闸/断开电路，close = 合闸/接通电路。\n⚠️ 与日常用语相反：open = 电路断开（无电流通路）。",
        "phonics": "o 读 /oʊ/，pen 读 /pən/。",
        "collocations": [
          [
            "breaker is open",
            "断路器分闸"
          ],
          [
            "switch is open",
            "开关断开"
          ],
          [
            "open circuit",
            "开路"
          ]
        ],
        "examples": [
          [
            "The breaker is open.",
            "断路器已分闸。"
          ],
          [
            "The circuit is open.",
            "电路断开。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "is open",
        "ipa": "/ɪz ˈoʊ.pən/",
        "cn": "处于分闸状态",
        "why": "is + open = 处于分闸状态。在电气术语中，open 表示断路器断开，电路不通。"
      }
    ],
    "grammar": [
      {
        "q": "open 和 close 在电气中是什么意思？",
        "a": "open = 分闸/断开（电路不通，无电流）\nclose = 合闸/闭合（电路接通，有电流）\n✅ The breaker is open.（断路器分闸 → 电路断开）\n✅ The breaker is closed.（断路器合闸 → 电路接通）\n⚠️ 注意：与日常用语相反！日常生活中 open = 打开门（可以通过），电气中 open = 断开电路（不能通过）。"
      }
    ],
    "pattern": "The + 设备 + is open/closed",
    "patternExamples": [
      { en: "The incoming breaker is closed.", cn: "进线断路器合闸。", words: [{ w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
      { en: "The grounding switch is open.", cn: "接地开关断开。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "The bus coupler is open.", cn: "母联断路器分闸。", words: [] }
    ],
    "thinking": "母联断路器分闸（open）是双路供电系统正常运行时的标准状态。\n这意味着：① 两段母线独立运行 ② 每条进线独立供电 ③ 系统冗余度最高。\n如果母联合闸（closed），说明正在使用备自投功能，一条进线带两段母线。",
    "pronunciation": "open 的 o 读双元音 /oʊ/，不要读成短音 /ɒ/。",
    "quiz": [
      {
        "q": "母联断路器已合闸，怎么说？",
        "a": "The bus coupler is closed."
      },
      {
        "q": "为什么正常运行时母联分闸？",
        "a": "正常运行时母联分闸的原因：① 两段母线独立运行，互不影响 ② 每条进线独立供电，冗余度最高 ③ 一路故障时只影响一半负载 ④ 备自投可以自动切换。如果母联合闸，一条进线要带全部负载，可能过载。"
      }
    ]
  },
  {
    "id": 1449,
    "en": "Please check the feeder panel.",
    "cn": "请检查馈线柜。",
    "ipa": "/pliːz tʃɛk ðə ˈfiː.dər ˈpæn.əl/",
    "tags": [
      "第1449句",
      "馈线柜",
      "★★★★☆"
    ],
    "when": "检查馈线柜（feeder panel）的运行状态。馈线柜负责向特定负载区域分配电力。",
    "words": [
      {
        "w": "panel",
        "ipa": "/ˈpæn.əl/",
        "pos": "名词",
        "cn": "柜；面板；配电盘",
        "memory": "panel = 面板/柜/配电盘。\n在电气领域：feeder panel = 馈线柜，control panel = 控制柜。\npanel 也可以指面板（显示仪表的面板）。",
        "phonics": "pan 读 /pæn/，el 读 /əl/，重音在第一音节。",
        "collocations": [
          [
            "feeder panel",
            "馈线柜"
          ],
          [
            "control panel",
            "控制柜"
          ],
          [
            "distribution panel",
            "配电盘"
          ]
        ],
        "examples": [
          [
            "Check the control panel.",
            "检查控制柜。"
          ],
          [
            "Read the panel display.",
            "读取面板显示。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "feeder panel",
        "ipa": "/ˈfiː.dər ˈpæn.əl/",
        "cn": "馈线柜",
        "why": "feeder + panel = 馈线柜。负责向特定负载区域（如某栋楼、某个机房）分配电力的开关柜。"
      }
    ],
    "grammar": [
      {
        "q": "feeder panel 和 outgoing feeder 有什么区别？",
        "a": "outgoing feeder = 出线柜（从中压母线出线）\nfeeder panel = 馈线柜（向特定负载馈电）\n在实际使用中两者经常混用，但严格来说：\n✅ outgoing feeder 强调'从母线出去'\n✅ feeder panel 强调'向负载馈电'\n两者功能相似，都是电力分配的出口。"
      }
    ],
    "pattern": "Please check the + 柜型名称",
    "patternExamples": [
      { en: "Please check the incoming feeder.", cn: "请检查进线柜。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the bus coupler.", cn: "请检查母联柜。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the PT panel.", cn: "请检查PT柜。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "panel", ipa: "/ˈpænl/", cn: "面板", phonics: "pan 读 /pæn/，el 读 /l/" }] }
    ],
    "thinking": "馈线柜是中压开关柜的'分配出口'，负责将电力分配给特定的负载区域。\n检查要点：① 馈线电流 ② 断路器状态 ③ 保护装置 ④ 负载是否正常。\n数据中心通常有多条馈线，分别供给不同的变压器或直供大型设备。",
    "pronunciation": "panel 的 a 读 /æ/，不是 /eɪ/。\nfeeder 的 ee 读长音 /iː/。",
    "quiz": [
      {
        "q": "请检查配电盘，怎么说？",
        "a": "Please check the distribution panel."
      }
    ]
  },
  {
    "id": 1450,
    "en": "The feeder panel is operating normally.",
    "cn": "馈线柜运行正常。",
    "ipa": "/ðə ˈfiː.dər ˈpæn.əl ɪz ˈɒp.ər.eɪ.tɪŋ ˈnɔːr.mə.li/",
    "tags": [
      "第1450句",
      "馈线柜状态",
      "★★★★☆"
    ],
    "when": "确认馈线柜运行状态正常，电力分配正常，无告警。",
    "words": [],
    "phrases": [
      {
        "p": "is operating normally",
        "ipa": "/ɪz ˈɒp.ər.eɪ.tɪŋ ˈnɔːr.mə.li/",
        "cn": "运行正常",
        "why": "operating + normally = 正常运行。标准的状态汇报用语。"
      }
    ],
    "grammar": [
      {
        "q": "如何用一句话汇报多个设备状态？",
        "a": "可以用并列结构：\n✅ All feeders are operating normally.（所有馈线柜运行正常）\n✅ Both incoming feeders and the bus coupler are operating normally.（两条进线和母联都运行正常）\n也可以分开汇报：\n✅ The incoming feeder is operating normally. The outgoing feeder is operating normally."
      }
    ],
    "pattern": "The + 设备 + is operating normally",
    "patternExamples": [
      { en: "The incoming feeder is operating normally.", cn: "进线柜运行正常。", words: [{ w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The bus coupler is operating normally.", cn: "母联柜运行正常。", words: [{ w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The transformer is operating normally.", cn: "变压器运行正常。", words: [{ w: "transformer", ipa: "/trænsˈfɔːrmər/", cn: "变压器", phonics: "trans 读 /træns/，former 读 /fɔːrmər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] }
    ],
    "thinking": "馈线柜运行正常是开关柜检查的最后一步确认。\n完成开关柜状态检查后，接下来进入断路器操作环节（1451-1460）。",
    "pronunciation": "panel 的 a 读 /æ/，operating 的重音在第一音节。",
    "quiz": [
      {
        "q": "所有馈线柜运行正常，怎么说？",
        "a": "All feeder panels are operating normally."
      }
    ]
  },
  {
    "id": 1451,
    "en": "Please switch the breaker to local mode.",
    "cn": "请将断路器切换到就地模式。",
    "ipa": "/pliːz swɪtʃ ðə ˈbreɪ.kər tuː ˈloʊ.kəl moʊd/",
    "tags": [
      "第1451句",
      "断路器操作",
      "★★★★★"
    ],
    "when": "将断路器操作模式切换到就地（local）模式。就地模式下只能在开关柜现场操作断路器，不能远程操作。",
    "words": [
      {
        "w": "switch",
        "ipa": "/swɪtʃ/",
        "pos": "动词",
        "cn": "切换；转换",
        "memory": "switch = 切换/转换/开关。\nswitch to = 切换到。\nswitch the breaker to local mode = 将断路器切换到就地模式。",
        "phonics": "sw 读 /sw/，itch 读 /ɪtʃ/。",
        "collocations": [
          [
            "switch to local mode",
            "切换到就地模式"
          ],
          [
            "switch to remote mode",
            "切换到远方模式"
          ],
          [
            "switch position",
            "切换位置"
          ]
        ],
        "examples": [
          [
            "Switch to manual mode.",
            "切换到手动模式。"
          ],
          [
            "Switch the breaker to test.",
            "将断路器切换到试验位置。"
          ]
        ]
      },
      {
        "w": "local",
        "ipa": "/ˈloʊ.kəl/",
        "pos": "形容词",
        "cn": "就地的；本地的",
        "memory": "local = 本地的/就地的。\nlocal mode = 就地模式，只能在现场操作。\nremote mode = 远方模式，可以远程操作。",
        "phonics": "lo 读 /loʊ/，cal 读 /kəl/，重音在第一音节。",
        "collocations": [
          [
            "local mode",
            "就地模式"
          ],
          [
            "local operation",
            "就地操作"
          ],
          [
            "local control",
            "就地控制"
          ]
        ],
        "examples": [
          [
            "Switch to local mode.",
            "切换到就地模式。"
          ],
          [
            "Operate in local mode.",
            "在就地模式下操作。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "switch to local mode",
        "ipa": "/swɪtʃ tuː ˈloʊ.kəl moʊd/",
        "cn": "切换到就地模式",
        "why": "switch + to + local mode = 切换到就地模式。就地模式下只能在开关柜现场操作，用于检修或紧急操作。"
      }
    ],
    "grammar": [
      {
        "q": "local mode 和 remote mode 有什么区别？",
        "a": "local mode = 就地模式（只能在现场操作）\nremote mode = 远方模式（可以远程/控制室操作）\n✅ local mode：操作人员在开关柜前操作，安全但需要到场\n✅ remote mode：操作人员在控制室操作，方便但需要通信正常\n正常运行用 remote mode，检修用 local mode。"
      }
    ],
    "pattern": "Please switch the + 设备 + to + 模式",
    "patternExamples": [
      { en: "Please switch the breaker to remote mode.", cn: "请将断路器切换到远方模式。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }, { w: "mode", ipa: "/moʊd/", cn: "模式", phonics: "mode 读 /moʊd/" }] },
      { en: "Please switch the UPS to bypass mode.", cn: "请将UPS切换到旁路模式。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "mode", ipa: "/moʊd/", cn: "模式", phonics: "mode 读 /moʊd/" }] },
      { en: "Please switch the system to manual mode.", cn: "请将系统切换到手动模式。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "mode", ipa: "/moʊd/", cn: "模式", phonics: "mode 读 /moʊd/" }] }
    ],
    "thinking": "断路器操作模式切换是安全操作的重要环节。\nlocal mode（就地模式）：① 只能在开关柜现场操作 ② 用于检修或紧急操作 ③ 操作前必须到现场\nremote mode（远方模式）：① 可以在控制室远程操作 ② 正常运行时使用 ③ 需要通信系统正常",
    "pronunciation": "local 的 o 读 /oʊ/，不是 /ɒ/。\nswitch 的 w 读 /w/，不要省略。",
    "quiz": [
      {
        "q": "请将断路器切换到远方模式，怎么说？",
        "a": "Please switch the breaker to remote mode."
      },
      {
        "q": "什么时候使用就地模式？",
        "a": "使用就地模式的场景：① 开关柜检修时 ② 通信系统故障无法远程操作时 ③ 紧急情况下需要现场操作时 ④ 调试或测试时。"
      }
    ]
  },
  {
    "id": 1452,
    "en": "Please switch the breaker to remote mode.",
    "cn": "请将断路器切换到远方模式。",
    "ipa": "/pliːz swɪtʃ ðə ˈbreɪ.kər tuː rɪˈmoʊt moʊd/",
    "tags": [
      "第1452句",
      "远方模式",
      "★★★★★"
    ],
    "when": "将断路器操作模式切换到远方（remote）模式。远方模式下可以在控制室远程操作断路器。",
    "words": [
      {
        "w": "remote",
        "ipa": "/rɪˈmoʊt/",
        "pos": "形容词",
        "cn": "远方的；远程的",
        "memory": "remote = 远程的/远方的。\nremote mode = 远方模式，可以远程操作。\nremote control = 远程控制。",
        "phonics": "re 读 /rɪ/，mote 读 /moʊt/，重音在第二音节。",
        "collocations": [
          [
            "remote mode",
            "远方模式"
          ],
          [
            "remote operation",
            "远方操作"
          ],
          [
            "remote control",
            "远程控制"
          ]
        ],
        "examples": [
          [
            "Switch to remote mode.",
            "切换到远方模式。"
          ],
          [
            "Remote control is active.",
            "远程控制已激活。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "switch to remote mode",
        "ipa": "/swɪtʃ tuː rɪˈmoʊt moʊd/",
        "cn": "切换到远方模式",
        "why": "switch + to + remote mode = 切换到远方模式。远方模式下可以在控制室远程操作断路器，是正常运行时的标准模式。"
      }
    ],
    "grammar": [
      {
        "q": "remote 和 local 在电气操作中如何选择？",
        "a": "正常运行：remote mode（远方模式）→ 控制室远程操作\n检修调试：local mode（就地模式）→ 现场操作\n⚠️ 切换模式前必须确认：\n① 通信系统正常（remote 需要通信）\n② 现场无人操作（remote 可能突然动作）\n③ 获得授权（模式切换是安全操作）"
      }
    ],
    "pattern": "Please switch the + 设备 + to + 模式",
    "patternExamples": [
      { en: "Please switch the breaker to local mode.", cn: "请将断路器切换到就地模式。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }, { w: "mode", ipa: "/moʊd/", cn: "模式", phonics: "mode 读 /moʊd/" }] },
      { en: "Please switch the UPS to normal mode.", cn: "请将UPS切换到正常模式。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "Please switch the system to auto mode.", cn: "请将系统切换到自动模式。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "mode", ipa: "/moʊd/", cn: "模式", phonics: "mode 读 /moʊd/" }] }
    ],
    "thinking": "远方模式（remote mode）是数据中心正常运行时的标准操作模式。\n优势：① 操作人员不需要到现场 ② 可以快速响应 ③ 可以集中监控\n前提：① 通信系统必须正常 ② 控制室必须有权限 ③ 现场必须安全",
    "pronunciation": "remote 的 re 读 /rɪ/，mote 读 /moʊt/，重音在第二音节。",
    "quiz": [
      {
        "q": "请将断路器切换到就地模式，怎么说？",
        "a": "Please switch the breaker to local mode."
      }
    ]
  },
  {
    "id": 1453,
    "en": "Please open the circuit breaker.",
    "cn": "请分闸断路器。",
    "ipa": "/pliːz ˈoʊ.pən ðə ˈsɜːr.kɪt ˈbreɪ.kər/",
    "tags": [
      "第1453句",
      "分闸操作",
      "★★★★★"
    ],
    "when": "执行断路器分闸操作。open 在电气术语中表示分闸/断开电路。",
    "words": [
      {
        "w": "circuit breaker",
        "ipa": "/ˈsɜːr.kɪt ˈbreɪ.kər/",
        "pos": "名词",
        "cn": "断路器",
        "memory": "circuit = 电路/回路；breaker = 断路器。\ncircuit breaker = 断路器，用于接通和断开电路，具有过流/短路保护功能。\n是开关柜中最重要的设备。",
        "phonics": "circuit 读 /ˈsɜːr.kɪt/，breaker 读 /ˈbreɪ.kər/。",
        "collocations": [
          [
            "circuit breaker",
            "断路器"
          ],
          [
            "open the breaker",
            "分闸断路器"
          ],
          [
            "close the breaker",
            "合闸断路器"
          ]
        ],
        "examples": [
          [
            "The circuit breaker tripped.",
            "断路器跳闸。"
          ],
          [
            "Reset the circuit breaker.",
            "复位断路器。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "open the circuit breaker",
        "ipa": "/ˈoʊ.pən ðə ˈsɜːr.kɪt ˈbreɪ.kər/",
        "cn": "分闸断路器",
        "why": "open + the + circuit breaker = 分闸断路器。在电气术语中，open = 分闸/断开电路。"
      }
    ],
    "grammar": [
      {
        "q": "open 和 trip 有什么区别？",
        "a": "open = 分闸（人为操作，主动断开电路）\ntrip = 跳闸（保护动作，自动断开电路）\n✅ Please open the breaker.（请分闸断路器 → 人为操作）\n✅ The breaker tripped.（断路器跳闸了 → 保护动作）\nopen 是主动操作，trip 是被动保护。"
      }
    ],
    "pattern": "Please + 操作 + the circuit breaker",
    "patternExamples": [
      { en: "Please close the circuit breaker.", cn: "请合闸断路器。", words: [{ w: "circuit", ipa: "/ˈsɜːrkɪt/", cn: "电路", phonics: "cir 读 /sɜːr/，cuit 读 /kɪt/" }, { w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
      { en: "Please trip the circuit breaker.", cn: "请使断路器跳闸。", words: [{ w: "circuit", ipa: "/ˈsɜːrkɪt/", cn: "电路", phonics: "cir 读 /sɜːr/，cuit 读 /kɪt/" }, { w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
      { en: "Please reset the circuit breaker.", cn: "请复位断路器。", words: [{ w: "reset", ipa: "/riːˈsɛt/", cn: "重置", phonics: "re 读 /riː/，set 读 /sɛt/" }, { w: "circuit", ipa: "/ˈsɜːrkɪt/", cn: "电路", phonics: "cir 读 /sɜːr/，cuit 读 /kɪt/" }, { w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] }
    ],
    "thinking": "分闸操作是电气操作中最基本的操作之一。\n⚠️ 安全注意事项：\n① 分闸前确认负载可以断电 ② 分闸后确认断路器位置指示 ③ 分闸后挂'禁止合闸'警示牌\n分闸操作顺序：① 通知相关人员 ② 确认操作票 ③ 执行分闸 ④ 确认位置指示",
    "pronunciation": "circuit 的 ir 读 /ɜːr/，不是 /aɪ/。\nbreaker 的 ea 读 /eɪ/。",
    "quiz": [
      {
        "q": "断路器跳闸了，怎么说？",
        "a": "The circuit breaker has tripped."
      },
      {
        "q": "open 和 trip 有什么区别？",
        "a": "open = 人为分闸（主动操作），trip = 保护跳闸（自动动作）。"
      }
    ]
  },
  {
    "id": 1454,
    "en": "The circuit breaker has been opened successfully.",
    "cn": "断路器已经成功分闸。",
    "ipa": "/ðə ˈsɜːr.kɪt ˈbreɪ.kər hæz biːn ˈoʊ.pənd səkˈsɛs.fəl.i/",
    "tags": [
      "第1454句",
      "分闸确认",
      "★★★★★"
    ],
    "when": "确认断路器分闸操作已成功完成。使用现在完成时 has been opened 强调操作已完成。",
    "words": [
      {
        "w": "successfully",
        "ipa": "/səkˈsɛs.fəl.i/",
        "pos": "副词",
        "cn": "成功地",
        "memory": "success = 成功；-ful = 充满的；-ly = 副词后缀。\nsuccessfully = 成功地。\nhas been opened successfully = 已成功分闸。",
        "phonics": "suc 读 /sək/，cess 读 /sɛs/，ful 读 /fəl/，ly 读 /li/。",
        "collocations": [
          [
            "completed successfully",
            "成功完成"
          ],
          [
            "operated successfully",
            "成功操作"
          ],
          [
            "tested successfully",
            "成功测试"
          ]
        ],
        "examples": [
          [
            "The operation was successful.",
            "操作成功。"
          ],
          [
            "The test completed successfully.",
            "测试成功完成。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "has been opened successfully",
        "ipa": "/hæz biːn ˈoʊ.pənd səkˈsɛs.fəl.i/",
        "cn": "已经成功分闸",
        "why": "has been + opened + successfully = 已成功分闸。使用现在完成时被动语态，强调操作已完成且成功。"
      }
    ],
    "grammar": [
      {
        "q": "为什么用 has been opened（现在完成时被动语态）？",
        "a": "has been opened = 已经被分闸（现在完成时 + 被动语态）\n① 现在完成时：强调操作已经完成，对现在有影响\n② 被动语态：断路器是'被操作'的对象\n✅ The breaker has been opened.（断路器已被分闸 → 强调完成）\n✅ The breaker is open.（断路器处于分闸状态 → 强调状态）"
      }
    ],
    "pattern": "The + 设备 + has been + 操作 + successfully",
    "patternExamples": [
      { en: "The breaker has been closed successfully.", cn: "断路器已成功合闸。", words: [{ w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
      { en: "The test has been completed successfully.", cn: "测试已成功完成。", words: [{ w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "The operation has been performed successfully.", cn: "操作已成功执行。", words: [{ w: "operation", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }, { w: "performed", ipa: "/pərˈfɔːrm/", cn: "执行", phonics: "per 读 /pər/，form 读 /fɔːrm/" }] }
    ],
    "thinking": "分闸成功后的确认步骤：\n① 检查断路器位置指示（open/close）\n② 确认负载电流为零\n③ 检查保护装置状态\n④ 记录操作时间和操作人员",
    "pronunciation": "successfully 的重音在第二音节 /səkˈsɛs.fəl.i/。\nopened 的 ed 读 /d/，不是 /ɪd/。",
    "quiz": [
      {
        "q": "断路器已成功合闸，怎么说？",
        "a": "The circuit breaker has been closed successfully."
      }
    ]
  },
  {
    "id": 1455,
    "en": "Please close the circuit breaker.",
    "cn": "请合闸断路器。",
    "ipa": "/pliːz kloʊz ðə ˈsɜːr.kɪt ˈbreɪ.kər/",
    "tags": [
      "第1455句",
      "合闸操作",
      "★★★★★"
    ],
    "when": "执行断路器合闸操作。close 在电气术语中表示合闸/接通电路。",
    "words": [
      {
        "w": "close",
        "ipa": "/kloʊz/",
        "pos": "动词",
        "cn": "合闸；闭合",
        "memory": "close = 关闭/合闸（电气术语）。\n在电气领域：close = 合闸/闭合电路。\n⚠️ 注意发音：close（动词，合闸）读 /kloʊz/，close（形容词，近的）读 /kloʊs/。",
        "phonics": "cl 读 /kl/，ose 读 /oʊz/（动词）。",
        "collocations": [
          [
            "close the breaker",
            "合闸断路器"
          ],
          [
            "close the switch",
            "合上开关"
          ],
          [
            "close the circuit",
            "闭合电路"
          ]
        ],
        "examples": [
          [
            "Close the breaker now.",
            "现在合闸断路器。"
          ],
          [
            "The breaker is closed.",
            "断路器已合闸。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "close the circuit breaker",
        "ipa": "/kloʊz ðə ˈsɜːr.kɪt ˈbreɪ.kər/",
        "cn": "合闸断路器",
        "why": "close + the + circuit breaker = 合闸断路器。在电气术语中，close = 合闸/接通电路。"
      }
    ],
    "grammar": [
      {
        "q": "close（合闸）和 open（分闸）的用法？",
        "a": "close = 合闸（接通电路，开始供电）\nopen = 分闸（断开电路，停止供电）\n✅ Please close the breaker.（请合闸断路器 → 接通电路）\n✅ Please open the breaker.（请分闸断路器 → 断开电路）\n⚠️ 合闸前必须确认：① 负载侧无人工作 ② 接地开关已分开 ③ 绝缘正常"
      }
    ],
    "pattern": "Please + 操作 + the circuit breaker",
    "patternExamples": [
      { en: "Please open the circuit breaker.", cn: "请分闸断路器。", words: [{ w: "circuit", ipa: "/ˈsɜːrkɪt/", cn: "电路", phonics: "cir 读 /sɜːr/，cuit 读 /kɪt/" }, { w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
      { en: "Please trip the circuit breaker.", cn: "请使断路器跳闸。", words: [{ w: "circuit", ipa: "/ˈsɜːrkɪt/", cn: "电路", phonics: "cir 读 /sɜːr/，cuit 读 /kɪt/" }, { w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
      { en: "Please reset the circuit breaker.", cn: "请复位断路器。", words: [{ w: "reset", ipa: "/riːˈsɛt/", cn: "重置", phonics: "re 读 /riː/，set 读 /sɛt/" }, { w: "circuit", ipa: "/ˈsɜːrkɪt/", cn: "电路", phonics: "cir 读 /sɜːr/，cuit 读 /kɪt/" }, { w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] }
    ],
    "thinking": "合闸操作比分闸操作更危险，因为合闸后设备带电。\n⚠️ 安全注意事项：\n① 合闸前确认负载侧无人工作\n② 合闸前确认接地开关已分开\n③ 合闸前确认绝缘正常\n④ 合闸后确认电压/电流正常",
    "pronunciation": "close 作为动词（合闸）读 /kloʊz/，z 是浊音。\nclose 作为形容词（近的）读 /kloʊs/，s 是清音。",
    "quiz": [
      {
        "q": "请分闸断路器，怎么说？",
        "a": "Please open the circuit breaker."
      },
      {
        "q": "合闸前需要确认哪些安全事项？",
        "a": "合闸前需确认：① 负载侧无人工作 ② 接地开关已分开 ③ 绝缘正常 ④ 负载可以通电 ⑤ 相关人员已通知。"
      }
    ]
  },
  {
    "id": 1456,
    "en": "The circuit breaker has been closed successfully.",
    "cn": "断路器已经成功合闸。",
    "ipa": "/ðə ˈsɜːr.kɪt ˈbreɪ.kər hæz biːn kloʊzd səkˈsɛs.fəl.i/",
    "tags": [
      "第1456句",
      "合闸确认",
      "★★★★★"
    ],
    "when": "确认断路器合闸操作已成功完成。合闸后设备带电，需要确认电压和电流正常。",
    "words": [],
    "phrases": [
      {
        "p": "has been closed successfully",
        "ipa": "/hæz biːn kloʊzd səkˈsɛs.fəl.i/",
        "cn": "已经成功合闸",
        "why": "has been + closed + successfully = 已成功合闸。使用现在完成时被动语态，强调操作已完成且成功。"
      }
    ],
    "grammar": [
      {
        "q": "合闸成功后需要确认什么？",
        "a": "合闸成功后需要确认：\n① 断路器位置指示为 close（合闸）\n② 电压已恢复正常\n③ 电流在正常范围\n④ 保护装置无告警\n⑤ 负载正常运行"
      }
    ],
    "pattern": "The + 设备 + has been + 操作 + successfully",
    "patternExamples": [
      { en: "The breaker has been opened successfully.", cn: "断路器已成功分闸。", words: [{ w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
      { en: "The grounding switch has been closed successfully.", cn: "接地开关已成功合上。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "The test has been completed successfully.", cn: "测试已成功完成。", words: [{ w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] }
    ],
    "thinking": "合闸成功后的确认步骤：\n① 检查断路器位置指示（close）\n② 确认电压已恢复\n③ 确认电流正常\n④ 检查保护装置状态\n⑤ 记录操作时间和操作人员",
    "pronunciation": "closed 的 ed 读 /d/，z 音要清晰。",
    "quiz": [
      {
        "q": "断路器已成功分闸，怎么说？",
        "a": "The circuit breaker has been opened successfully."
      }
    ]
  },
  {
    "id": 1457,
    "en": "Please verify the breaker position indicator.",
    "cn": "请确认断路器位置指示。",
    "ipa": "/pliːz ˈvɛr.ɪ.faɪ ðə ˈbreɪ.kər pəˈzɪʃ.ən ˈɪn.dɪ.keɪ.tər/",
    "tags": [
      "第1457句",
      "位置指示",
      "★★★★★"
    ],
    "when": "确认断路器的位置指示是否正确。位置指示器显示断路器当前是处于合闸（close）还是分闸（open）状态。",
    "words": [
      {
        "w": "position indicator",
        "ipa": "/pəˈzɪʃ.ən ˈɪn.dɪ.keɪ.tər/",
        "pos": "名词短语",
        "cn": "位置指示器",
        "memory": "position = 位置；indicator = 指示器。\nposition indicator = 位置指示器，显示断路器的合闸/分闸状态。\n通常用红色（close/合闸）和绿色（open/分闸）标识。",
        "phonics": "position 读 /pəˈzɪʃ.ən/，indicator 读 /ˈɪn.dɪ.keɪ.tər/。",
        "collocations": [
          [
            "position indicator",
            "位置指示器"
          ],
          [
            "breaker position",
            "断路器位置"
          ],
          [
            "check the indicator",
            "检查指示器"
          ]
        ],
        "examples": [
          [
            "Check the position indicator.",
            "检查位置指示器。"
          ],
          [
            "The indicator shows closed.",
            "指示器显示合闸。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "breaker position indicator",
        "ipa": "/ˈbreɪ.kər pəˈzɪʃ.ən ˈɪn.dɪ.keɪ.tər/",
        "cn": "断路器位置指示器",
        "why": "breaker + position + indicator = 断路器位置指示器。用于确认断路器当前是合闸还是分闸状态，是安全操作的关键确认步骤。"
      }
    ],
    "grammar": [
      {
        "q": "verify 和 check 有什么区别？",
        "a": "check = 检查/查看（一般性检查）\nverify = 确认/核实（更强调准确性）\n✅ Please check the indicator.（请检查指示器 → 一般性查看）\n✅ Please verify the position.（请确认位置 → 强调核实准确性）\n安全操作中用 verify，因为需要'确认无误'。"
      }
    ],
    "pattern": "Please verify the + 检查项目",
    "patternExamples": [
      { en: "Please verify the breaker status.", cn: "请确认断路器状态。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Please verify the grounding switch position.", cn: "请确认接地开关位置。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "Please verify the voltage.", cn: "请确认电压。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }] }
    ],
    "thinking": "位置指示器是断路器安全操作的关键确认手段。\n指示器通常显示：\n① CLOSE / I / 红色 = 合闸（带电）\n② OPEN / O / 绿色 = 分闸（断电）\n⚠️ 操作后必须确认位置指示与操作意图一致，防止'假分闸'或'假合闸'。",
    "pronunciation": "verify 的 e 读 /ɛ/，不是 /iː/。\nindicator 的重音在第一音节 /ˈɪn.dɪ.keɪ.tər/。",
    "quiz": [
      {
        "q": "请确认接地开关位置，怎么说？",
        "a": "Please verify the grounding switch position."
      }
    ]
  },
  {
    "id": 1458,
    "en": "The breaker is in the service position.",
    "cn": "断路器处于工作位置。",
    "ipa": "/ðə ˈbreɪ.kər ɪz ɪn ðə ˈsɜːr.vɪs pəˈzɪʃ.ən/",
    "tags": [
      "第1458句",
      "工作位置",
      "★★★★★"
    ],
    "when": "确认断路器处于工作位置（service position）。这是断路器正常运行时的标准位置，主回路和控制回路都接通。",
    "words": [
      {
        "w": "service position",
        "ipa": "/ˈsɜːr.vɪs pəˈzɪʃ.ən/",
        "pos": "名词短语",
        "cn": "工作位置",
        "memory": "service = 服务/工作；position = 位置。\nservice position = 工作位置，断路器完全插入，主回路和控制回路都接通。\n这是断路器正常运行时的标准位置。",
        "phonics": "service 读 /ˈsɜːr.vɪs/，position 读 /pəˈzɪʃ.ən/。",
        "collocations": [
          [
            "service position",
            "工作位置"
          ],
          [
            "in service",
            "投入运行"
          ],
          [
            "out of service",
            "退出运行"
          ]
        ],
        "examples": [
          [
            "The breaker is in service.",
            "断路器投入运行。"
          ],
          [
            "Move to service position.",
            "移动到工作位置。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "in the service position",
        "ipa": "/ɪn ðə ˈsɜːr.vɪs pəˈzɪʃ.ən/",
        "cn": "处于工作位置",
        "why": "in + the + service position = 处于工作位置。断路器完全插入柜体，主回路和控制回路都接通，可以正常操作。"
      }
    ],
    "grammar": [
      {
        "q": "断路器有哪些位置？",
        "a": "断路器有三个标准位置：\n① service position（工作位置）→ 完全插入，主回路+控制回路接通\n② test position（试验位置）→ 部分插入，主回路断开，控制回路接通\n③ disconnected position（断开位置）→ 完全拔出，主回路+控制回路都断开\n正常运行用 service position。"
      }
    ],
    "pattern": "The breaker is in the + 位置",
    "patternExamples": [
      { en: "The breaker is in the test position.", cn: "断路器处于试验位置。", words: [{ w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "The breaker is in the disconnected position.", cn: "断路器处于断开位置。", words: [{ w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
      { en: "The breaker is in the service position.", cn: "断路器处于工作位置。", words: [{ w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] }
    ],
    "thinking": "断路器的三个位置是安全操作的基础知识：\n① 工作位置（service）：正常运行，可以合闸/分闸\n② 试验位置（test）：检修调试，可以测试控制回路但不能合主回路\n③ 断开位置（disconnected）：完全隔离，可以安全检修\n操作前必须确认断路器位置正确。",
    "pronunciation": "service 的 er 读 /ɜːr/，不是 /ɛ/。\nposition 的重音在第二音节 /pəˈzɪʃ.ən/。",
    "quiz": [
      {
        "q": "断路器处于试验位置，怎么说？",
        "a": "The breaker is in the test position."
      },
      {
        "q": "断路器的三个位置分别是什么？",
        "a": "① service position（工作位置）② test position（试验位置）③ disconnected position（断开位置）。"
      }
    ]
  },
  {
    "id": 1459,
    "en": "The breaker is in the test position.",
    "cn": "断路器处于试验位置。",
    "ipa": "/ðə ˈbreɪ.kər ɪz ɪn ðə tɛst pəˈzɪʃ.ən/",
    "tags": [
      "第1459句",
      "试验位置",
      "★★★★☆"
    ],
    "when": "确认断路器处于试验位置（test position）。试验位置下主回路断开，但控制回路接通，可以进行保护测试。",
    "words": [
      {
        "w": "test position",
        "ipa": "/tɛst pəˈzɪʃ.ən/",
        "pos": "名词短语",
        "cn": "试验位置",
        "memory": "test = 试验/测试；position = 位置。\ntest position = 试验位置，断路器部分插入，主回路断开但控制回路接通。\n用于检修时测试保护装置和控制回路。",
        "phonics": "test 读 /tɛst/，position 读 /pəˈzɪʃ.ən/。",
        "collocations": [
          [
            "test position",
            "试验位置"
          ],
          [
            "move to test",
            "移到试验位置"
          ],
          [
            "test mode",
            "试验模式"
          ]
        ],
        "examples": [
          [
            "Move the breaker to test.",
            "将断路器移到试验位置。"
          ],
          [
            "Test the protection relay.",
            "测试保护继电器。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "in the test position",
        "ipa": "/ɪn ðə tɛst pəˈzɪʃ.ən/",
        "cn": "处于试验位置",
        "why": "in + the + test position = 处于试验位置。断路器部分插入，主回路断开（不带电），但控制回路接通，可以测试保护功能。"
      }
    ],
    "grammar": [
      {
        "q": "试验位置的作用是什么？",
        "a": "test position（试验位置）的作用：\n① 主回路断开 → 不带电，安全\n② 控制回路接通 → 可以测试保护功能\n③ 可以测试断路器分合闸操作\n④ 可以测试保护继电器动作\n用于检修调试，确保保护系统正常后再投入运行。"
      }
    ],
    "pattern": "The breaker is in the + 位置",
    "patternExamples": [
      { en: "The breaker is in the service position.", cn: "断路器处于工作位置。", words: [{ w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
      { en: "The breaker is in the disconnected position.", cn: "断路器处于断开位置。", words: [{ w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
      { en: "The breaker is in the test position.", cn: "断路器处于试验位置。", words: [{ w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] }
    ],
    "thinking": "试验位置是检修调试的重要位置。\n在试验位置可以：① 测试断路器分合闸 ② 测试保护继电器 ③ 测试控制回路 ④ 检查信号指示\n但不能：① 合主回路 ② 向负载供电\n检修完成后必须将断路器从试验位置移到工作位置才能投入运行。",
    "pronunciation": "test 读 /tɛst/，短音 /ɛ/。",
    "quiz": [
      {
        "q": "断路器处于工作位置，怎么说？",
        "a": "The breaker is in the service position."
      }
    ]
  },
  {
    "id": 1460,
    "en": "The breaker is in the disconnected position.",
    "cn": "断路器处于断开位置。",
    "ipa": "/ðə ˈbreɪ.kər ɪz ɪn ðə ˌdɪs.kəˈnɛk.tɪd pəˈzɪʃ.ən/",
    "tags": [
      "第1460句",
      "断开位置",
      "★★★★☆"
    ],
    "when": "确认断路器处于断开位置（disconnected position）。断路器完全从柜体中拔出，主回路和控制回路都断开，可以安全检修。",
    "words": [
      {
        "w": "disconnected",
        "ipa": "/ˌdɪs.kəˈnɛk.tɪd/",
        "pos": "形容词/过去分词",
        "cn": "断开的；脱离的",
        "memory": "dis- = 否定/脱离；connect = 连接；-ed = 形容词后缀。\ndisconnected = 断开的/脱离的。\ndisconnected position = 断开位置，断路器完全拔出。",
        "phonics": "dis 读 /dɪs/，con 读 /kə/，nect 读 /nɛk/，ed 读 /tɪd/。",
        "collocations": [
          [
            "disconnected position",
            "断开位置"
          ],
          [
            "disconnect the power",
            "断开电源"
          ],
          [
            "disconnect the cable",
            "断开电缆"
          ]
        ],
        "examples": [
          [
            "The breaker is disconnected.",
            "断路器已断开。"
          ],
          [
            "Disconnect before working.",
            "工作前先断开。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "in the disconnected position",
        "ipa": "/ɪn ðə ˌdɪs.kəˈnɛk.tɪd pəˈzɪʃ.ən/",
        "cn": "处于断开位置",
        "why": "in + the + disconnected position = 处于断开位置。断路器完全从柜体中拔出，主回路和控制回路都断开，是最安全的隔离状态。"
      }
    ],
    "grammar": [
      {
        "q": "断开位置和其他位置有什么区别？",
        "a": "三个位置对比：\n① service position：主回路✓ 控制回路✓（正常运行）\n② test position：主回路✗ 控制回路✓（检修调试）\n③ disconnected position：主回路✗ 控制回路✗（完全隔离）\ndisconnected 是最安全的状态，用于断路器检修或更换。"
      }
    ],
    "pattern": "The breaker is in the + 位置",
    "patternExamples": [
      { en: "The breaker is in the service position.", cn: "断路器处于工作位置。", words: [{ w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] },
      { en: "The breaker is in the test position.", cn: "断路器处于试验位置。", words: [{ w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "The breaker is in the disconnected position.", cn: "断路器处于断开位置。", words: [{ w: "breaker", ipa: "/ˈbreɪkər/", cn: "断路器", phonics: "break 读 /breɪk/，er 读 /ər/" }] }
    ],
    "thinking": "断开位置是最安全的隔离状态。\n在断开位置：① 断路器完全从柜体中拔出 ② 主回路断开 ③ 控制回路断开 ④ 可以安全检修或更换断路器\n⚠️ 断路器从断开位置移回工作位置前，必须确认所有检修工作已完成，人员已撤离。",
    "pronunciation": "disconnected 的重音在第三音节 /ˌdɪs.kəˈnɛk.tɪd/。\ndis- 读 /dɪs/，不是 /daɪs/。",
    "quiz": [
      {
        "q": "断路器处于工作位置，怎么说？",
        "a": "The breaker is in the service position."
      },
      {
        "q": "断开位置为什么最安全？",
        "a": "断开位置最安全因为：① 断路器完全拔出 ② 主回路断开（不带电）③ 控制回路断开（不能远程操作）④ 物理隔离，可以安全检修。"
      }
    ]
  }
];

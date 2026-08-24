// EXPORTS: MOCK_SENTENCES_PART18A

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART18A: ISentence[] = [
  {
    "id": 1361,
    "en": "Please check the UPS operating mode.",
    "cn": "请检查UPS运行模式。",
    "ipa": "/pliːz tʃɛk ðə juː piː ɛs ˈɒpəreɪtɪŋ məʊd/",
    "tags": [
      "第1361句",
      "UPS运行",
      "★★★★★"
    ],
    "when": "值班交接时检查UPS当前运行状态，确认系统处于正常模式还是其他模式（电池、旁路等）。",
    "words": [
      {
        "w": "UPS",
        "ipa": "/juː piː ɛs/",
        "pos": "n.",
        "cn": "不间断电源系统",
        "memory": "Uninterruptible Power Supply（不间断电源）的缩写，数据中心核心供电设备",
        "phonics": "字母分别发音：U-P-S",
        "collocations": [
          [
            "UPS system",
            "UPS系统"
          ],
          [
            "UPS operating mode",
            "UPS运行模式"
          ],
          [
            "UPS alarm",
            "UPS告警"
          ]
        ],
        "examples": [
          [
            "The UPS is running in normal mode.",
            "UPS正在正常模式运行。"
          ],
          [
            "Please check the UPS status.",
            "请检查UPS状态。"
          ]
        ]
      },
      {
        "w": "operating mode",
        "ipa": "/ˈɒpəreɪtɪŋ məʊd/",
        "pos": "n.",
        "cn": "运行模式",
        "memory": "operating（运行的）+ mode（模式）→ 设备当前的工作状态",
        "phonics": "operating /ˈɒpəreɪtɪŋ/，mode /məʊd/",
        "collocations": [
          [
            "normal mode",
            "正常模式"
          ],
          [
            "battery mode",
            "电池模式"
          ],
          [
            "bypass mode",
            "旁路模式"
          ]
        ],
        "examples": [
          [
            "What is the current operating mode?",
            "当前运行模式是什么？"
          ],
          [
            "Switch to maintenance mode.",
            "切换到维护模式。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "check the UPS operating mode",
        "ipa": "",
        "cn": "检查UPS运行模式",
        "why": "Please check the UPS operating mode before starting work."
      }
    ],
    "grammar": [
      {
        "q": "为什么用'check'而不是'inspect'？",
        "a": "check更侧重'查看、确认'某项信息，适用于快速确认运行状态；inspect更强调'仔细检查、检验'，适用于详细的设备检测。日常交接用check更高效。"
      }
    ],
    "pattern": "Please check the + 设备/系统 + 状态/参数",
    "patternExamples": [
      { en: "Please check the generator status.", cn: "请检查发电机状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Please check the cooling system pressure.", cn: "请检查冷却系统压力。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] }
    ],
    "thinking": "UPS是数据中心供电系统的核心，交接时必须首先确认其运行模式。正常模式下由市电供电，电池模式下由蓄电池供电，旁路模式下市电直接供电（无保护）。了解当前模式是判断系统安全性的第一步。",
    "pronunciation": "UPS读作字母'U-P-S'，不要读成单词。operating的重音在第一音节/ˈɒpəreɪtɪŋ/。",
    "quiz": [
      {
        "q": "UPS的全称是什么？",
        "a": "Uninterruptible Power Supply（不间断电源）"
      }
    ]
  },
  {
    "id": 1362,
    "en": "The UPS is operating in normal mode.",
    "cn": "UPS目前运行在正常模式。",
    "ipa": "/ðə juː piː ɛs ɪz ˈɒpəreɪtɪŋ ɪn ˈnɔːməl məʊd/",
    "tags": [
      "第1362句",
      "正常模式",
      "★★★★★"
    ],
    "when": "确认UPS处于正常供电状态，市电正常供电，系统运行稳定。",
    "words": [
      {
        "w": "normal mode",
        "ipa": "/ˈnɔːməl məʊd/",
        "pos": "n.",
        "cn": "正常模式",
        "memory": "normal（正常的）+ mode（模式）→ 设备在标准参数下运行的状态",
        "phonics": "normal /ˈnɔːməl/，重音在第一音节",
        "collocations": [
          [
            "in normal mode",
            "在正常模式下"
          ],
          [
            "return to normal mode",
            "返回正常模式"
          ],
          [
            "normal operation",
            "正常运行"
          ]
        ],
        "examples": [
          [
            "The system is back in normal mode.",
            "系统已恢复到正常模式。"
          ],
          [
            "All equipment is in normal mode.",
            "所有设备都处于正常模式。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "operating in normal mode",
        "ipa": "",
        "cn": "运行在正常模式",
        "why": "Both UPS units are operating in normal mode."
      }
    ],
    "grammar": [
      {
        "q": "'is operating'是什么时态？",
        "a": "现在进行时（Present Continuous），表示当前正在进行的动作或状态。用于描述设备此刻的运行状态，强调'当前正在'。"
      }
    ],
    "pattern": "The + 设备 + is operating in + 模式",
    "patternExamples": [
      { en: "The generator is operating in standby mode.", cn: "发电机运行在待机模式。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "mode", ipa: "/moʊd/", cn: "模式", phonics: "mode 读 /moʊd/" }] },
      { en: "The cooling unit is operating in energy-saving mode.", cn: "冷却机组运行在节能模式。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "mode", ipa: "/moʊd/", cn: "模式", phonics: "mode 读 /moʊd/" }] }
    ],
    "thinking": "正常模式是UPS最理想的工作状态，意味着市电供电正常，UPS对负载提供持续的保护和稳压。交接时听到'normal mode'是最放心的消息，说明供电系统健康。",
    "pronunciation": "normal的or发长音/ɔː/，不要读成/ɒ/。mode的o发长音/əʊ/。",
    "quiz": [
      {
        "q": "UPS在正常模式下由什么供电？",
        "a": "市电（mains power）。正常模式下UPS由市电供电，同时对负载提供保护。"
      }
    ]
  },
  {
    "id": 1363,
    "en": "The UPS is operating in battery mode.",
    "cn": "UPS目前运行在电池模式。",
    "ipa": "/ðə juː piː ɛs ɪz ˈɒpəreɪtɪŋ ɪn ˈbætəri məʊd/",
    "tags": [
      "第1363句",
      "电池模式",
      "★★★★☆"
    ],
    "when": "市电中断时UPS自动切换到电池供电模式，需要立即关注并查明原因。",
    "words": [
      {
        "w": "battery mode",
        "ipa": "/ˈbætəri məʊd/",
        "pos": "n.",
        "cn": "电池模式",
        "memory": "battery（电池）+ mode（模式）→ 由蓄电池供电的工作状态",
        "phonics": "battery /ˈbætəri/，重音在第一音节",
        "collocations": [
          [
            "switch to battery mode",
            "切换到电池模式"
          ],
          [
            "battery backup time",
            "电池备用时间"
          ],
          [
            "battery discharge",
            "电池放电"
          ]
        ],
        "examples": [
          [
            "The UPS switched to battery mode at 2:15 AM.",
            "UPS在凌晨2:15切换到电池模式。"
          ],
          [
            "How long can it run in battery mode?",
            "在电池模式下能运行多久？"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "operating in battery mode",
        "ipa": "",
        "cn": "运行在电池模式",
        "why": "The UPS has been operating in battery mode for 10 minutes."
      }
    ],
    "grammar": [
      {
        "q": "电池模式下需要注意什么？",
        "a": "电池模式是应急状态，需要：1）确认市电是否中断 2）查看电池剩余容量 3）预估备用时间 4）启动发电机或等待市电恢复 5）通知相关人员。"
      }
    ],
    "pattern": "The UPS switched to battery mode at + 时间",
    "patternExamples": [
      { en: "The UPS switched to battery mode at 3:30 PM.", cn: "UPS在下午3:30切换到电池模式。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "switched", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "battery", ipa: "/ˈbætəri/", cn: "电池", phonics: "bat 读 /bæt/，tery 读 /təri/" }] },
      { en: "UPS 2 switched to battery mode 5 minutes ago.", cn: "UPS 2在5分钟前切换到电池模式。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "switched", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "battery", ipa: "/ˈbætəri/", cn: "电池", phonics: "bat 读 /bæt/，tery 读 /təri/" }] }
    ],
    "thinking": "电池模式意味着市电已中断，UPS正在消耗蓄电池能量维持供电。这是紧急情况，需要立即查明市电故障原因、启动备用发电机、预估电池续航时间。电池模式持续时间取决于负载和电池容量。",
    "pronunciation": "battery读作/ˈbætəri/，三个音节，重音在第一音节。",
    "quiz": [
      {
        "q": "UPS进入电池模式通常意味着什么？",
        "a": "市电中断。电池模式是UPS在市电故障时的应急供电状态。"
      }
    ]
  },
  {
    "id": 1364,
    "en": "The UPS is operating in bypass mode.",
    "cn": "UPS目前运行在旁路模式。",
    "ipa": "/ðə juː piː ɛs ɪz ˈɒpəreɪtɪŋ ɪn ˈbaɪpɑːs məʊd/",
    "tags": [
      "第1364句",
      "旁路模式",
      "★★★★☆"
    ],
    "when": "UPS因故障或过载自动切换到旁路模式，市电直接供电，无UPS保护。",
    "words": [
      {
        "w": "bypass mode",
        "ipa": "/ˈbaɪpɑːs məʊd/",
        "pos": "n.",
        "cn": "旁路模式",
        "memory": "bypass（旁路、绕过）+ mode（模式）→ 绕过UPS保护，市电直接供电",
        "phonics": "bypass /ˈbaɪpɑːs/，两个音节，重音在第一音节",
        "collocations": [
          [
            "static bypass",
            "静态旁路"
          ],
          [
            "automatic bypass",
            "自动旁路"
          ],
          [
            "bypass switch",
            "旁路开关"
          ]
        ],
        "examples": [
          [
            "The UPS went into bypass mode due to overload.",
            "UPS因过载进入旁路模式。"
          ],
          [
            "Bypass mode means no UPS protection.",
            "旁路模式意味着没有UPS保护。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "operating in bypass mode",
        "ipa": "",
        "cn": "运行在旁路模式",
        "why": "Warning: The UPS is in bypass mode."
      }
    ],
    "grammar": [
      {
        "q": "旁路模式有什么风险？",
        "a": "旁路模式下市电直接供电给负载，没有UPS的稳压、滤波和保护功能。如果此时市电出现波动或中断，负载会直接断电，存在数据丢失和设备损坏的风险。"
      }
    ],
    "pattern": "The UPS went into bypass mode due to + 原因",
    "patternExamples": [
      { en: "The UPS went into bypass mode due to internal fault.", cn: "UPS因内部故障进入旁路模式。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "mode", ipa: "/moʊd/", cn: "模式", phonics: "mode 读 /moʊd/" }, { w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }] },
      { en: "UPS 1 entered bypass mode due to high temperature.", cn: "UPS 1因高温进入旁路模式。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "mode", ipa: "/moʊd/", cn: "模式", phonics: "mode 读 /moʊd/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] }
    ],
    "thinking": "旁路模式是UPS的自我保护机制，通常在过载、内部故障或温度过高时自动触发。虽然负载仍有电，但失去了UPS的保护，这是一个需要立即处理的异常状态。",
    "pronunciation": "bypass读作/ˈbaɪpɑːs/，by发/ai/音，pass发/pɑːs/。",
    "quiz": [
      {
        "q": "旁路模式下负载是否有UPS保护？",
        "a": "没有保护。旁路模式下市电直接供电，绕过了UPS的所有保护功能。"
      }
    ]
  },
  {
    "id": 1365,
    "en": "The UPS is operating in maintenance bypass mode.",
    "cn": "UPS目前运行在维护旁路模式。",
    "ipa": "/ðə juː piː ɛs ɪz ˈɒpəreɪtɪŋ ɪn ˈmeɪntənəns ˈbaɪpɑːs məʊd/",
    "tags": [
      "第1365句",
      "维护旁路",
      "★★★★☆"
    ],
    "when": "计划性维护时手动切换到维护旁路模式，使UPS可以离线维护而负载不断电。",
    "words": [
      {
        "w": "maintenance bypass",
        "ipa": "/ˈmeɪntənəns ˈbaɪpɑːs/",
        "pos": "n.",
        "cn": "维护旁路",
        "memory": "maintenance（维护）+ bypass（旁路）→ 为维护目的设置的旁路通道",
        "phonics": "maintenance /ˈmeɪntənəns/，四个音节，重音在第一音节",
        "collocations": [
          [
            "maintenance bypass switch",
            "维护旁路开关"
          ],
          [
            "manual bypass",
            "手动旁路"
          ],
          [
            "wrap-around bypass",
            "环绕旁路"
          ]
        ],
        "examples": [
          [
            "Switch to maintenance bypass before servicing.",
            "维护前切换到维护旁路。"
          ],
          [
            "Maintenance bypass allows UPS offline work.",
            "维护旁路允许UPS离线工作。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "maintenance bypass mode",
        "ipa": "",
        "cn": "维护旁路模式",
        "why": "The UPS is in maintenance bypass mode for annual service."
      }
    ],
    "grammar": [
      {
        "q": "维护旁路与静态旁路有什么区别？",
        "a": "静态旁路（static bypass）是UPS自动切换的应急旁路；维护旁路（maintenance bypass）是手动切换的计划性旁路，用于让UPS完全离线进行维护，通常通过外部旁路柜实现。"
      }
    ],
    "pattern": "Switch to maintenance bypass mode for + 维护活动",
    "patternExamples": [
      { en: "Switch to maintenance bypass mode for battery replacement.", cn: "切换到维护旁路模式更换电池。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }, { w: "mode", ipa: "/moʊd/", cn: "模式", phonics: "mode 读 /moʊd/" }] },
      { en: "We use maintenance bypass for firmware updates.", cn: "我们使用维护旁路进行固件更新。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }, { w: "updates", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }] }
    ],
    "thinking": "维护旁路是计划性维护的必要步骤，让UPS可以完全断电进行检修，而负载由市电通过旁路持续供电。这是主动的、可控的操作，与故障导致的静态旁路不同。切换前必须确认旁路电源正常。",
    "pronunciation": "maintenance读作/ˈmeɪntənəns/，注意中间的/ə/音不要省略。",
    "quiz": [
      {
        "q": "维护旁路模式是自动切换还是手动切换？",
        "a": "手动切换。维护旁路是计划性操作，需要人工切换到旁路后再对UPS进行维护。"
      }
    ]
  },
  {
    "id": 1366,
    "en": "Please check the UPS load percentage.",
    "cn": "请检查UPS负载率。",
    "ipa": "/pliːz tʃɛk ðə juː piː ɛs ləʊd pəˈsɛntɪdʒ/",
    "tags": [
      "第1366句",
      "负载检查",
      "★★★★★"
    ],
    "when": "交接时检查UPS当前负载占总容量的百分比，评估系统余量和健康状况。",
    "words": [
      {
        "w": "load percentage",
        "ipa": "/ləʊd pəˈsɛntɪdʒ/",
        "pos": "n.",
        "cn": "负载率，负载百分比",
        "memory": "load（负载）+ percentage（百分比）→ 当前负载占总容量的比例",
        "phonics": "load /ləʊd/，percentage /pəˈsɛntɪdʒ/，重音在第二音节",
        "collocations": [
          [
            "current load",
            "当前负载"
          ],
          [
            "load capacity",
            "负载容量"
          ],
          [
            "load balance",
            "负载平衡"
          ]
        ],
        "examples": [
          [
            "The load percentage is 70%.",
            "负载率是70%。"
          ],
          [
            "High load percentage reduces efficiency.",
            "高负载率降低效率。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "check the load percentage",
        "ipa": "",
        "cn": "检查负载率",
        "why": "Please check the load percentage on both UPS units."
      }
    ],
    "grammar": [
      {
        "q": "UPS负载率多少是健康的？",
        "a": "通常建议UPS负载率保持在40%-80%之间。低于40%效率较低，高于80%余量不足。数据中心设计时通常按N+1冗余配置，单台UPS负载不超过50%以确保冗余。"
      }
    ],
    "pattern": "Please check the + 参数 + on + 设备",
    "patternExamples": [
      { en: "Please check the temperature on CRAC unit 3.", cn: "请检查3号精密空调的温度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
      { en: "Please check the voltage on PDU 2.", cn: "请检查2号配电单元的电压。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }, { w: "pdu", ipa: "/ˌpiːˈdiːˈjuː/", cn: "配电单元", phonics: "P-D-U 逐字母读" }] }
    ],
    "thinking": "负载率是UPS运行状态的关键指标。过低的负载率意味着设备利用率不足，过高的负载率则缺乏冗余余量。交接时记录负载率可以追踪负载增长趋势，为容量规划提供数据。",
    "pronunciation": "percentage读作/pəˈsɛntɪdʒ/，注意重音在第二音节/ˈsɛn/。",
    "quiz": [
      {
        "q": "数据中心UPS的建议负载率范围是？",
        "a": "40%-80%。这个范围既保证效率又有足够余量。"
      }
    ]
  },
  {
    "id": 1367,
    "en": "The current UPS load is sixty-five percent.",
    "cn": "当前UPS负载率为65%。",
    "ipa": "/ðə ˈkʌrənt juː piː ɛs ləʊd ɪz ˈsɪksti faɪv pəˈsɛnt/",
    "tags": [
      "第1367句",
      "负载数值",
      "★★★★★"
    ],
    "when": "报告UPS当前具体负载数值，65%属于健康的中等负载水平。",
    "words": [
      {
        "w": "current",
        "ipa": "/ˈkʌrənt/",
        "pos": "adj.",
        "cn": "当前的，现在的",
        "memory": "current作为形容词表示'当前的'，强调此时此刻的状态",
        "phonics": "/ˈkʌrənt/，两个音节，重音在第一音节",
        "collocations": [
          [
            "current status",
            "当前状态"
          ],
          [
            "current value",
            "当前值"
          ],
          [
            "current reading",
            "当前读数"
          ]
        ],
        "examples": [
          [
            "The current temperature is 22°C.",
            "当前温度是22°C。"
          ],
          [
            "What is the current pressure?",
            "当前压力是多少？"
          ]
        ]
      },
      {
        "w": "percent",
        "ipa": "/pəˈsɛnt/",
        "pos": "n.",
        "cn": "百分比",
        "memory": "per（每）+ cent（百）→ 每百，即百分比",
        "phonics": "/pəˈsɛnt/，重音在第二音节",
        "collocations": [
          [
            "percent of",
            "...的百分比"
          ],
          [
            "by percent",
            "按百分比"
          ],
          [
            "100 percent",
            "百分之百"
          ]
        ],
        "examples": [
          [
            "Load is at 75 percent.",
            "负载在75%。"
          ],
          [
            "Increase by 10 percent.",
            "增加10%。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "the current load is + 数值 + percent",
        "ipa": "",
        "cn": "当前负载是...%",
        "why": "The current load is 50 percent."
      }
    ],
    "grammar": [
      {
        "q": "为什么用'current'而不是'now'？",
        "a": "current是形容词，修饰名词load，表示'当前的负载'；now是副词，通常放在句末或句首。'The current load'比'The load now'更正式、更专业。"
      }
    ],
    "pattern": "The current + 参数 + is + 数值 + percent",
    "patternExamples": [
      { en: "The current humidity is 45 percent.", cn: "当前湿度是45%。", words: [{ w: "humidity", ipa: "/hjuːˈmɪdɪti/", cn: "湿度", phonics: "hu 读 /hjuː/，midity 读 /mɪdɪti/" }] },
      { en: "The current efficiency is 92 percent.", cn: "当前效率是92%。", words: [{ w: "efficiency", ipa: "/ɪˈfɪʃənsi/", cn: "效率", phonics: "ef 读 /ɪ/，ficiency 读 /fɪʃənsi/" }] }
    ],
    "thinking": "65%的负载率是一个理想的数值——既不过低浪费容量，也不过高缺乏余量。交接时报告具体数值比说'正常'更有价值，因为可以追踪趋势和进行容量规划。",
    "pronunciation": "sixty-five读作/ˈsɪksti faɪv/，注意sixty的/s/音。",
    "quiz": [
      {
        "q": "65%的负载率属于什么水平？",
        "a": "健康的中等负载。65%在40%-80%的建议范围内。"
      }
    ]
  },
  {
    "id": 1368,
    "en": "Please check the UPS input voltage.",
    "cn": "请检查UPS输入电压。",
    "ipa": "/pliːz tʃɛk ðə juː piː ɛs ˈɪnpʊt ˈvəʊltɪdʒ/",
    "tags": [
      "第1368句",
      "输入电压",
      "★★★★☆"
    ],
    "when": "检查UPS从市电接收的输入电压是否在正常范围内。",
    "words": [
      {
        "w": "input voltage",
        "ipa": "/ˈɪnpʊt ˈvəʊltɪdʒ/",
        "pos": "n.",
        "cn": "输入电压",
        "memory": "input（输入）+ voltage（电压）→ UPS从电源接收的电压",
        "phonics": "input /ˈɪnpʊt/，voltage /ˈvəʊltɪdʒ/",
        "collocations": [
          [
            "input voltage range",
            "输入电压范围"
          ],
          [
            "input voltage fluctuation",
            "输入电压波动"
          ],
          [
            "nominal input voltage",
            "额定输入电压"
          ]
        ],
        "examples": [
          [
            "Input voltage is 380V.",
            "输入电压是380伏。"
          ],
          [
            "Check input voltage stability.",
            "检查输入电压稳定性。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "check the input voltage",
        "ipa": "",
        "cn": "检查输入电压",
        "why": "Please check the input voltage on the main panel."
      }
    ],
    "grammar": [
      {
        "q": "UPS输入电压的正常范围是多少？",
        "a": "取决于UPS规格和地区标准。三相UPS通常额定输入电压为380V或400V，允许波动范围一般为±10%或±15%。超出范围时UPS可能切换到电池模式。"
      }
    ],
    "pattern": "Please check the + 电气参数 + on + 位置",
    "patternExamples": [
      { en: "Please check the output current on phase A.", cn: "请检查A相的输出电流。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the frequency on the generator.", cn: "请检查发电机的频率。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] }
    ],
    "thinking": "输入电压是UPS正常工作的基础。电压过高或过低都会影响UPS性能，甚至触发保护机制切换到电池模式。交接时检查输入电压可以及早发现市电质量问题。",
    "pronunciation": "voltage读作/ˈvəʊltɪdʒ/，vol发/vəʊ/音，不是/vɒ/。",
    "quiz": [
      {
        "q": "三相UPS的典型输入电压是多少？",
        "a": "380V或400V。数据中心三相UPS通常使用这个电压等级。"
      }
    ]
  },
  {
    "id": 1369,
    "en": "Please check the UPS output voltage.",
    "cn": "请检查UPS输出电压。",
    "ipa": "/pliːz tʃɛk ðə juː piː ɛs ˈaʊtpʊt ˈvəʊltɪdʒ/",
    "tags": [
      "第1369句",
      "输出电压",
      "★★★★☆"
    ],
    "when": "检查UPS向负载提供的输出电压是否稳定在额定值。",
    "words": [
      {
        "w": "output voltage",
        "ipa": "/ˈaʊtpʊt ˈvəʊltɪdʒ/",
        "pos": "n.",
        "cn": "输出电压",
        "memory": "output（输出）+ voltage（电压）→ UPS向负载提供的电压",
        "phonics": "output /ˈaʊtpʊt/，重音在第一音节",
        "collocations": [
          [
            "output voltage regulation",
            "输出电压调节"
          ],
          [
            "output voltage stability",
            "输出电压稳定性"
          ],
          [
            "rated output voltage",
            "额定输出电压"
          ]
        ],
        "examples": [
          [
            "Output voltage is stable at 230V.",
            "输出电压稳定在230伏。"
          ],
          [
            "The output voltage is within tolerance.",
            "输出电压在容差范围内。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "check the output voltage",
        "ipa": "",
        "cn": "检查输出电压",
        "why": "Please check the output voltage on all three phases."
      }
    ],
    "grammar": [
      {
        "q": "输出电压和输入电压哪个更重要？",
        "a": "两者都重要，但输出电压对负载设备更关键。UPS的核心功能就是提供稳定、干净的输出电压，即使输入电压波动，输出电压也应保持恒定。输出电压异常会直接影响IT设备。"
      }
    ],
    "pattern": "The output voltage is + 状态",
    "patternExamples": [
      { en: "The output voltage is stable.", cn: "输出电压稳定。", words: [{ w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }, { w: "stable", ipa: "/ˈsteɪbl/", cn: "稳定", phonics: "sta 读 /steɪ/，ble 读 /bl/" }] },
      { en: "The output voltage is within spec.", cn: "输出电压在规格范围内。", words: [{ w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }, { w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }] }
    ],
    "thinking": "输出电压是UPS保护效果的直接体现。UPS通过内部电路将可能波动的输入电压转换为稳定的输出电压，确保IT设备不受市电质量影响。交接时确认输出电压正常是验证UPS功能的关键。",
    "pronunciation": "output读作/ˈaʊtpʊt/，out发/aʊ/音。",
    "quiz": [
      {
        "q": "UPS的主要功能之一是稳定什么？",
        "a": "输出电压。UPS确保向负载提供稳定、干净的电源。"
      }
    ]
  },
  {
    "id": 1370,
    "en": "Please check the UPS output frequency.",
    "cn": "请检查UPS输出频率。",
    "ipa": "/pliːz tʃɛk ðə juː piː ɛs ˈaʊtpʊt ˈfriːkwənsi/",
    "tags": [
      "第1370句",
      "输出频率",
      "★★★★☆"
    ],
    "when": "检查UPS输出频率是否稳定在50Hz或60Hz（取决于地区标准）。",
    "words": [
      {
        "w": "frequency",
        "ipa": "/ˈfriːkwənsi/",
        "pos": "n.",
        "cn": "频率",
        "memory": "frequency（频率）→ 交流电每秒变化的次数，单位为Hz（赫兹）",
        "phonics": "/ˈfriːkwənsi/，三个音节，重音在第一音节",
        "collocations": [
          [
            "output frequency",
            "输出频率"
          ],
          [
            "frequency stability",
            "频率稳定性"
          ],
          [
            "rated frequency",
            "额定频率"
          ]
        ],
        "examples": [
          [
            "Output frequency is 50Hz.",
            "输出频率是50赫兹。"
          ],
          [
            "Frequency must be stable.",
            "频率必须稳定。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "check the output frequency",
        "ipa": "",
        "cn": "检查输出频率",
        "why": "Please check the output frequency on the UPS display."
      }
    ],
    "grammar": [
      {
        "q": "马来西亚的电网频率标准是多少？",
        "a": "马来西亚电网频率标准是50Hz。数据中心UPS的输出频率也应保持在50Hz，允许偏差通常为±0.5Hz或更小。频率不稳定会影响某些敏感设备。"
      }
    ],
    "pattern": "Please check the + 参数 + on + 设备/位置",
    "patternExamples": [
      { en: "Please check the frequency on the generator output.", cn: "请检查发电机输出的频率。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "Please check the power factor on the UPS.", cn: "请检查UPS的功率因数。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }] }
    ],
    "thinking": "输出频率是UPS性能的另一个关键指标。虽然大多数现代IT设备对频率不太敏感（因为使用开关电源），但某些精密设备和电机对频率稳定性要求很高。UPS在正常模式下会同步市电频率，在电池模式下则产生自己的频率。",
    "pronunciation": "frequency读作/ˈfriːkwənsi/，注意中间的/kw/音。",
    "quiz": [
      {
        "q": "马来西亚电网的标准频率是？",
        "a": "50Hz。马来西亚和大多数亚洲、欧洲国家使用50Hz标准。"
      }
    ]
  },
  {
    "id": 1371,
    "en": "Please synchronize UPS 1 with UPS 2.",
    "cn": "请将UPS1与UPS2同步。",
    "ipa": "/pliːz ˈsɪŋkrənaɪz juː piː ɛs wʌn wɪð juː piː ɛs tuː/",
    "tags": [
      "第1371句",
      "同步操作",
      "★★★★★"
    ],
    "when": "需要将两台UPS并联运行或进行负载转移时，先进行同步操作。",
    "words": [
      {
        "w": "synchronize",
        "ipa": "/ˈsɪŋkrənaɪz/",
        "pos": "v.",
        "cn": "同步",
        "memory": "syn-（共同）+ chron（时间）+ -ize（使...）→ 使在时间上一致",
        "phonics": "/ˈsɪŋkrənaɪz/，四个音节，重音在第一音节",
        "collocations": [
          [
            "synchronize with",
            "与...同步"
          ],
          [
            "frequency synchronization",
            "频率同步"
          ],
          [
            "phase synchronization",
            "相位同步"
          ]
        ],
        "examples": [
          [
            "Synchronize the generators before paralleling.",
            "并联前先同步发电机。"
          ],
          [
            "The UPS systems are synchronized.",
            "UPS系统已同步。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "synchronize A with B",
        "ipa": "",
        "cn": "将A与B同步",
        "why": "Please synchronize UPS A with the mains supply."
      }
    ],
    "grammar": [
      {
        "q": "UPS同步需要满足哪些条件？",
        "a": "UPS同步需要：1）电压幅值相同或接近 2）频率相同 3）相位一致 4）相序相同。只有满足这些条件才能安全并联或进行负载转移。"
      }
    ],
    "pattern": "Please synchronize + 设备A + with + 设备B",
    "patternExamples": [
      { en: "Please synchronize generator 1 with the grid.", cn: "请将1号发电机与电网同步。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "Please synchronize the two cooling systems.", cn: "请同步两个冷却系统。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "systems", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] }
    ],
    "thinking": "UPS同步是并联运行或负载转移的前提。两台UPS必须在电压、频率、相位上完全一致才能并联，否则会产生环流甚至设备损坏。同步操作通常在UPS控制面板上执行，系统会自动检查同步条件。",
    "pronunciation": "synchronize读作/ˈsɪŋkrənaɪz/，注意/ŋ/音和/k/音的连读。",
    "quiz": [
      {
        "q": "UPS同步需要哪些参数一致？",
        "a": "电压、频率、相位。这三个参数都必须在容差范围内才能安全同步。"
      }
    ]
  },
  {
    "id": 1372,
    "en": "The synchronization has been completed successfully.",
    "cn": "同步已经成功完成。",
    "ipa": "/ðə ˌsɪŋkrənaɪˈzeɪʃən hæz biːn kəmˈpliːtɪd səkˈsɛsfʊli/",
    "tags": [
      "第1372句",
      "同步完成",
      "★★★★★"
    ],
    "when": "确认同步操作已成功执行，两台UPS现在可以并联运行或进行负载转移。",
    "words": [
      {
        "w": "synchronization",
        "ipa": "/ˌsɪŋkrənaɪˈzeɪʃən/",
        "pos": "n.",
        "cn": "同步（名词形式）",
        "memory": "synchronize的名词形式，表示同步这个过程或状态",
        "phonics": "/ˌsɪŋkrənaɪˈzeɪʃən/，六个音节，主重音在第五音节",
        "collocations": [
          [
            "synchronization complete",
            "同步完成"
          ],
          [
            "synchronization failed",
            "同步失败"
          ],
          [
            "synchronization status",
            "同步状态"
          ]
        ],
        "examples": [
          [
            "Synchronization took 30 seconds.",
            "同步花了30秒。"
          ],
          [
            "Check synchronization before proceeding.",
            "继续前检查同步状态。"
          ]
        ]
      },
      {
        "w": "successfully",
        "ipa": "/səkˈsɛsfʊli/",
        "pos": "adv.",
        "cn": "成功地",
        "memory": "success（成功）+ -ful（充满）+ -ly（副词后缀）→ 成功地",
        "phonics": "/səkˈsɛsfʊli/，四个音节，重音在第二音节",
        "collocations": [
          [
            "completed successfully",
            "成功完成"
          ],
          [
            "successfully transferred",
            "成功转移"
          ],
          [
            "successfully tested",
            "成功测试"
          ]
        ],
        "examples": [
          [
            "The test was completed successfully.",
            "测试成功完成。"
          ],
          [
            "Load transfer was successful.",
            "负载转移成功。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "has been completed successfully",
        "ipa": "",
        "cn": "已成功完成",
        "why": "The maintenance has been completed successfully."
      }
    ],
    "grammar": [
      {
        "q": "'has been completed'是什么时态和语态？",
        "a": "现在完成时的被动语态。'has been'是现在完成时的助动词，'completed'是过去分词，表示动作已完成且主语是动作的承受者（同步被完成）。"
      }
    ],
    "pattern": "The + 操作 + has been completed successfully",
    "patternExamples": [
      { en: "The calibration has been completed successfully.", cn: "校准已成功完成。", words: [] },
      { en: "The firmware update has been completed successfully.", cn: "固件更新已成功完成。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }] }
    ],
    "thinking": "同步成功的确认是后续操作（如并联、负载转移）的前提。确认时应检查UPS面板上的同步指示灯或状态显示，确保系统显示'synchronized'或类似信息。",
    "pronunciation": "synchronization较长，可以分成syn-chro-ni-za-tion来练习。successfully的/s/音要清晰。",
    "quiz": [
      {
        "q": "'has been completed'表示什么？",
        "a": "动作已完成。现在完成时表示过去发生的动作对现在有影响。"
      }
    ]
  },
  {
    "id": 1373,
    "en": "Please verify the synchronization status.",
    "cn": "请确认同步状态。",
    "ipa": "/pliːz ˈvɛrɪfaɪ ðə ˌsɪŋkrənaɪˈzeɪʃən ˈstætəs/",
    "tags": [
      "第1373句",
      "状态确认",
      "★★★★★"
    ],
    "when": "同步操作后需要再次确认状态，确保系统确实处于同步状态。",
    "words": [
      {
        "w": "verify",
        "ipa": "/ˈvɛrɪfaɪ/",
        "pos": "v.",
        "cn": "确认，验证",
        "memory": "veri-（真实）+ -fy（使...）→ 使确认真实，即验证",
        "phonics": "/ˈvɛrɪfaɪ/，三个音节，重音在第一音节",
        "collocations": [
          [
            "verify the status",
            "确认状态"
          ],
          [
            "verify the result",
            "验证结果"
          ],
          [
            "verify before proceeding",
            "继续前确认"
          ]
        ],
        "examples": [
          [
            "Please verify the settings.",
            "请确认设置。"
          ],
          [
            "Verify that all alarms are cleared.",
            "确认所有告警已清除。"
          ]
        ]
      },
      {
        "w": "status",
        "ipa": "/ˈstætəs/",
        "pos": "n.",
        "cn": "状态",
        "memory": "status（状态、状况）→ 系统或设备的当前情况",
        "phonics": "/ˈstætəs/，两个音节，重音在第一音节",
        "collocations": [
          [
            "current status",
            "当前状态"
          ],
          [
            "operational status",
            "运行状态"
          ],
          [
            "alarm status",
            "告警状态"
          ]
        ],
        "examples": [
          [
            "What is the system status?",
            "系统状态是什么？"
          ],
          [
            "Status is normal.",
            "状态正常。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "verify the synchronization status",
        "ipa": "",
        "cn": "确认同步状态",
        "why": "Please verify the synchronization status on both panels."
      }
    ],
    "grammar": [
      {
        "q": "'verify'和'check'有什么区别？",
        "a": "verify更强调'验证、确认正确性'，通常涉及对比或确认某个结果；check更通用，表示'检查、查看'。verify更正式，常用于关键操作的确认。"
      }
    ],
    "pattern": "Please verify the + 参数/状态",
    "patternExamples": [
      { en: "Please verify the voltage readings.", cn: "请确认电压读数。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }, { w: "readings", ipa: "/ˈriːdɪŋ/", cn: "读数", phonics: "read 读 /riːd/，ing 读 /ɪŋ/" }] },
      { en: "Please verify the connection status.", cn: "请确认连接状态。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] }
    ],
    "thinking": "同步后的状态确认是双重保险。即使系统显示同步成功，操作人员也应通过面板指示、测量数据等方式再次确认，确保万无一失。这是关键操作的标准做法。",
    "pronunciation": "verify读作/ˈvɛrɪfaɪ/，注意ver发/vɛr/音。status读作/ˈstætəs/，不是/ˈsteɪtəs/。",
    "quiz": [
      {
        "q": "verify比check更强调什么？",
        "a": "验证正确性。verify更正式，强调确认某个结果或状态是正确的。"
      }
    ]
  },
  {
    "id": 1374,
    "en": "Both UPS systems are synchronized now.",
    "cn": "两台UPS已经完成同步。",
    "ipa": "/bəʊθ juː piː ɛs ˈsɪstəmz ɑː ˈsɪŋkrənaɪzd naʊ/",
    "tags": [
      "第1374句",
      "同步确认",
      "★★★★★"
    ],
    "when": "确认两台UPS系统现在处于同步状态，可以进行下一步操作。",
    "words": [
      {
        "w": "both",
        "ipa": "/bəʊθ/",
        "pos": "det.",
        "cn": "两个都",
        "memory": "both表示'两者都'，用于指代两个事物",
        "phonics": "/bəʊθ/，注意/θ/音要清晰",
        "collocations": [
          [
            "both systems",
            "两个系统都"
          ],
          [
            "both units",
            "两台设备都"
          ],
          [
            "both sides",
            "两侧都"
          ]
        ],
        "examples": [
          [
            "Both generators are running.",
            "两台发电机都在运行。"
          ],
          [
            "Check both UPS units.",
            "检查两台UPS。"
          ]
        ]
      },
      {
        "w": "synchronized",
        "ipa": "/ˈsɪŋkrənaɪzd/",
        "pos": "adj.",
        "cn": "已同步的",
        "memory": "synchronize的过去分词形式，用作形容词表示'已同步的状态'",
        "phonics": "/ˈsɪŋkrənaɪzd/，注意末尾的/zd/音",
        "collocations": [
          [
            "fully synchronized",
            "完全同步"
          ],
          [
            "synchronized operation",
            "同步运行"
          ],
          [
            "synchronized mode",
            "同步模式"
          ]
        ],
        "examples": [
          [
            "The systems are now synchronized.",
            "系统现在已同步。"
          ],
          [
            "Both units are synchronized.",
            "两台设备已同步。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "both systems are synchronized",
        "ipa": "",
        "cn": "两个系统已同步",
        "why": "Both cooling systems are synchronized and ready."
      }
    ],
    "grammar": [
      {
        "q": "'are synchronized'是被动语态还是系表结构？",
        "a": "这里是系表结构。'are'是系动词，'synchronized'是形容词化的过去分词，表示状态而非动作。如果是被动语态，会强调'被同步'这个动作。"
      }
    ],
    "pattern": "Both + 设备 + are + 状态形容词 + now",
    "patternExamples": [
      { en: "Both generators are online now.", cn: "两台发电机现在都在线。", words: [{ w: "generators", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "Both systems are ready now.", cn: "两个系统现在都准备好了。", words: [{ w: "systems", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] }
    ],
    "thinking": "使用'both'明确表示两台设备都处于相同状态，避免歧义。'now'强调当前时刻的状态，暗示之前可能不同步，现在已经完成同步。",
    "pronunciation": "both的/θ/音要清晰，不要读成/bəʊs/。synchronized末尾是/zd/音。",
    "quiz": [
      {
        "q": "'both'用于指代几个事物？",
        "a": "两个。both专门用于指代两个事物。三个或以上用'all'。"
      }
    ]
  },
  {
    "id": 1375,
    "en": "Please desynchronize UPS 1.",
    "cn": "请将UPS1解同步。",
    "ipa": "/pliːz diːˈsɪŋkrənaɪz juː piː ɛs wʌn/",
    "tags": [
      "第1375句",
      "解同步",
      "★★★★☆"
    ],
    "when": "需要将UPS从并联状态分离，或进行单台维护时，执行解同步操作。",
    "words": [
      {
        "w": "desynchronize",
        "ipa": "/diːˈsɪŋkrənaɪz/",
        "pos": "v.",
        "cn": "解同步，解除同步",
        "memory": "de-（去除、相反）+ synchronize（同步）→ 解除同步状态",
        "phonics": "/diːˈsɪŋkrənaɪz/，de-发/diː/音，重音在第二音节",
        "collocations": [
          [
            "desynchronize the systems",
            "解同步系统"
          ],
          [
            "desynchronize before maintenance",
            "维护前解同步"
          ],
          [
            "manual desynchronization",
            "手动解同步"
          ]
        ],
        "examples": [
          [
            "Desynchronize UPS 2 for maintenance.",
            "解同步UPS 2进行维护。"
          ],
          [
            "Please desynchronize before shutting down.",
            "关机前请先解同步。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "desynchronize UPS",
        "ipa": "",
        "cn": "解同步UPS",
        "why": "Please desynchronize UPS 1 from the parallel system."
      }
    ],
    "grammar": [
      {
        "q": "解同步前需要做什么准备？",
        "a": "解同步前应：1）确认剩余UPS容量足够承担全部负载 2）检查负载是否在安全范围内 3）通知相关人员 4）准备好应急预案。确保解同步后系统仍能正常运行。"
      }
    ],
    "pattern": "Please desynchronize + 设备 + for + 目的",
    "patternExamples": [
      { en: "Please desynchronize generator 1 for inspection.", cn: "请解同步1号发电机进行检查。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "Desynchronize the unit for testing.", cn: "解同步该设备进行测试。", words: [{ w: "testing", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] }
    ],
    "thinking": "解同步是同步的逆操作，将并联运行的UPS分离为独立运行。这个操作需要谨慎，因为解同步后剩余设备必须能够承担全部负载。通常在需要单台维护或系统重新配置时执行。",
    "pronunciation": "desynchronize的de-发长音/diː/，不是/dɪ/。",
    "quiz": [
      {
        "q": "解同步前最重要的检查是什么？",
        "a": "剩余容量是否足够。确保解同步后剩余设备能承担全部负载。"
      }
    ]
  },
  {
    "id": 1376,
    "en": "UPS 1 has been successfully desynchronized.",
    "cn": "UPS1已经成功解同步。",
    "ipa": "/juː piː ɛs wʌn hæz biːn səkˈsɛsfʊli diːˈsɪŋkrənaɪzd/",
    "tags": [
      "第1376句",
      "解同步完成",
      "★★★★☆"
    ],
    "when": "确认UPS1已成功从并联系统中分离，现在独立运行。",
    "words": [
      {
        "w": "desynchronized",
        "ipa": "/diːˈsɪŋkrənaɪzd/",
        "pos": "adj.",
        "cn": "已解同步的",
        "memory": "desynchronize的过去分词，用作形容词表示'已解除同步的状态'",
        "phonics": "/diːˈsɪŋkrənaɪzd/，注意末尾的/zd/音",
        "collocations": [
          [
            "successfully desynchronized",
            "成功解同步"
          ],
          [
            "fully desynchronized",
            "完全解同步"
          ],
          [
            "desynchronized state",
            "解同步状态"
          ]
        ],
        "examples": [
          [
            "UPS 1 is now desynchronized.",
            "UPS 1现在已解同步。"
          ],
          [
            "The unit has been desynchronized.",
            "该设备已解同步。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "has been successfully desynchronized",
        "ipa": "",
        "cn": "已成功解同步",
        "why": "Generator 2 has been successfully desynchronized."
      }
    ],
    "grammar": [
      {
        "q": "解同步后UPS1处于什么状态？",
        "a": "解同步后UPS1处于独立运行状态，不再与其他UPS并联。它仍然为所连接的负载供电，但不再与其他UPS共享负载。可以安全地进行维护或关机操作。"
      }
    ],
    "pattern": "+ 设备 + has been successfully + 操作过去分词",
    "patternExamples": [
      { en: "The transfer has been successfully completed.", cn: "转移已成功完成。", words: [] },
      { en: "The switch has been successfully tested.", cn: "开关已成功测试。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "tested", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] }
    ],
    "thinking": "确认解同步成功是进行后续维护操作的前提。应检查UPS面板显示已退出并联模式，确认负载已完全转移到其他UPS，然后才能安全地对UPS1进行操作。",
    "pronunciation": "desynchronized较长，可以分为de-syn-chro-nized来练习。",
    "quiz": [
      {
        "q": "解同步后UPS可以安全进行什么操作？",
        "a": "维护或关机。解同步后UPS独立运行，可以安全地进行维护。"
      }
    ]
  },
  {
    "id": 1377,
    "en": "Please verify that both systems are operating independently.",
    "cn": "请确认两套系统已经独立运行。",
    "ipa": "/pliːz ˈvɛrɪfaɪ ðæt bəʊθ ˈsɪstəmz ɑː ˈɒpəreɪtɪŋ ˌɪndɪˈpɛndəntli/",
    "tags": [
      "第1377句",
      "独立运行",
      "★★★★☆"
    ],
    "when": "解同步后确认两台UPS确实处于独立运行状态，互不影响。",
    "words": [
      {
        "w": "independently",
        "ipa": "/ˌɪndɪˈpɛndəntli/",
        "pos": "adv.",
        "cn": "独立地",
        "memory": "in-（不）+ dependent（依赖的）+ -ly（副词后缀）→ 不依赖地，独立地",
        "phonics": "/ˌɪndɪˈpɛndəntli/，五个音节，主重音在第三音节",
        "collocations": [
          [
            "operate independently",
            "独立运行"
          ],
          [
            "run independently",
            "独立运转"
          ],
          [
            "work independently",
            "独立工作"
          ]
        ],
        "examples": [
          [
            "Both units are running independently.",
            "两台设备独立运行。"
          ],
          [
            "The systems operate independently.",
            "系统独立运行。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "operating independently",
        "ipa": "",
        "cn": "独立运行",
        "why": "After desynchronization, both UPS are operating independently."
      }
    ],
    "grammar": [
      {
        "q": "独立运行和并联运行有什么区别？",
        "a": "独立运行时每台UPS单独为各自的负载供电，互不影响；并联运行时多台UPS共同承担负载，提供冗余。独立运行简单但无冗余保护，并联运行复杂但可靠性更高。"
      }
    ],
    "pattern": "Please verify that + 完整句子",
    "patternExamples": [
      { en: "Please verify that all connections are secure.", cn: "请确认所有连接都牢固。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
      { en: "Please verify that the alarms are cleared.", cn: "请确认告警已清除。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] }
    ],
    "thinking": "确认独立运行状态是解同步后的必要验证。应检查两台UPS的面板显示，确认没有并联或同步的指示，各自显示独立的运行参数。这确保了解同步操作的完整性。",
    "pronunciation": "independently较长，可以分为in-de-pen-dent-ly来练习，重音在pen上。",
    "quiz": [
      {
        "q": "独立运行和并联运行哪个提供冗余保护？",
        "a": "并联运行。并联时多台UPS共享负载，一台故障时其他可以继续供电。"
      }
    ]
  },
  {
    "id": 1378,
    "en": "No synchronization alarms have been reported.",
    "cn": "没有同步告警。",
    "ipa": "/nəʊ ˌsɪŋkrənaɪˈzeɪʃən ˈɑːməz hæv biːn rɪˈpɔːtɪd/",
    "tags": [
      "第1378句",
      "无告警",
      "★★★★★"
    ],
    "when": "确认同步或解同步操作过程中没有出现任何告警，操作顺利。",
    "words": [
      {
        "w": "no",
        "ipa": "/nəʊ/",
        "pos": "det.",
        "cn": "没有",
        "memory": "no表示否定，修饰名词表示'没有任何'",
        "phonics": "/nəʊ/，长元音",
        "collocations": [
          [
            "no alarms",
            "没有告警"
          ],
          [
            "no issues",
            "没有问题"
          ],
          [
            "no errors",
            "没有错误"
          ]
        ],
        "examples": [
          [
            "No problems detected.",
            "未检测到问题。"
          ],
          [
            "No action required.",
            "无需操作。"
          ]
        ]
      },
      {
        "w": "reported",
        "ipa": "/rɪˈpɔːtɪd/",
        "pos": "v.",
        "cn": "报告的（过去分词）",
        "memory": "report（报告）的过去分词，用于被动语态",
        "phonics": "/rɪˈpɔːtɪd/，重音在第二音节",
        "collocations": [
          [
            "alarms reported",
            "报告的告警"
          ],
          [
            "issues reported",
            "报告的问题"
          ],
          [
            "as reported",
            "如所报告"
          ]
        ],
        "examples": [
          [
            "No faults were reported.",
            "未报告故障。"
          ],
          [
            "The issue was reported yesterday.",
            "问题昨天已报告。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "no alarms have been reported",
        "ipa": "",
        "cn": "没有报告告警",
        "why": "No critical alarms have been reported today."
      }
    ],
    "grammar": [
      {
        "q": "为什么用'have been reported'而不是'are reported'？",
        "a": "'have been reported'是现在完成时的被动语态，强调从过去到现在的时间段内没有发生；'are reported'是一般现在时，只表示当前状态。完成时更适合表示'到目前为止'没有告警。"
      }
    ],
    "pattern": "No + 名词 + have/has been + 过去分词",
    "patternExamples": [
      { en: "No issues have been detected.", cn: "未检测到问题。", words: [{ w: "issues", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
      { en: "No errors have been found.", cn: "未发现错误。", words: [] }
    ],
    "thinking": "确认无告警是操作成功的重要标志。同步/解同步过程中如果出现告警（如同步失败、相位不匹配等），说明操作可能有问题。无告警表明操作顺利进行，系统状态正常。",
    "pronunciation": "no读作/nəʊ/，长元音。reported的re发/rɪ/音。",
    "quiz": [
      {
        "q": "'have been reported'强调什么时间段？",
        "a": "从过去到现在。现在完成时表示过去发生的动作对现在的影响。"
      }
    ]
  },
  {
    "id": 1379,
    "en": "Please record the synchronization time.",
    "cn": "请记录同步时间。",
    "ipa": "/pliːz rɪˈkɔːd ðə ˌsɪŋkrənaɪˈzeɪʃən taɪm/",
    "tags": [
      "第1379句",
      "记录时间",
      "★★★★☆"
    ],
    "when": "同步操作完成后记录具体时间，用于维护日志和后续追踪。",
    "words": [
      {
        "w": "record",
        "ipa": "/rɪˈkɔːd/",
        "pos": "v.",
        "cn": "记录",
        "memory": "re-（再次）+ cord（心）→ 再次放在心上，即记录",
        "phonics": "作为动词读/rɪˈkɔːd/，重音在第二音节；作为名词读/ˈrekɔːd/，重音在第一音节",
        "collocations": [
          [
            "record the time",
            "记录时间"
          ],
          [
            "record the data",
            "记录数据"
          ],
          [
            "record the event",
            "记录事件"
          ]
        ],
        "examples": [
          [
            "Please record the reading.",
            "请记录读数。"
          ],
          [
            "Record all maintenance activities.",
            "记录所有维护活动。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "record the time",
        "ipa": "",
        "cn": "记录时间",
        "why": "Please record the exact time of the switch operation."
      }
    ],
    "grammar": [
      {
        "q": "为什么要记录操作时间？",
        "a": "记录时间是为了：1）建立完整的操作历史 2）便于故障追溯和分析 3）计算操作间隔和维护周期 4）满足审计和合规要求 5）为未来的操作提供参考。"
      }
    ],
    "pattern": "Please record the + 信息",
    "patternExamples": [
      { en: "Please record the temperature readings.", cn: "请记录温度读数。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "readings", ipa: "/ˈriːdɪŋ/", cn: "读数", phonics: "read 读 /riːd/，ing 读 /ɪŋ/" }] },
      { en: "Please record the operator's name.", cn: "请记录操作人员姓名。", words: [] }
    ],
    "thinking": "时间记录是数据中心运维的基本要求。每次关键操作（如UPS同步）都应记录准确的时间戳，这是维护日志的重要组成部分，也是故障分析和容量规划的基础数据。",
    "pronunciation": "record作为动词时重音在第二音节/rɪˈkɔːd/，注意与名词/ˈrekɔːd/区分。",
    "quiz": [
      {
        "q": "record作为动词时重音在哪？",
        "a": "第二音节。动词record读/rɪˈkɔːd/，名词record读/ˈrekɔːd/。"
      }
    ]
  },
  {
    "id": 1380,
    "en": "Please update the maintenance log.",
    "cn": "请更新维护日志。",
    "ipa": "/pliːz ˌʌpˈdeɪt ðə ˈmeɪntənəns lɒɡ/",
    "tags": [
      "第1380句",
      "更新日志",
      "★★★★★"
    ],
    "when": "完成同步操作后更新维护日志，记录操作内容和结果。",
    "words": [
      {
        "w": "update",
        "ipa": "/ˌʌpˈdeɪt/",
        "pos": "v.",
        "cn": "更新",
        "memory": "up-（向上）+ date（日期）→ 使日期更新到最新，即更新",
        "phonics": "/ˌʌpˈdeɪt/，重音在第二音节",
        "collocations": [
          [
            "update the log",
            "更新日志"
          ],
          [
            "update the record",
            "更新记录"
          ],
          [
            "update the system",
            "更新系统"
          ]
        ],
        "examples": [
          [
            "Please update the status.",
            "请更新状态。"
          ],
          [
            "Update the maintenance schedule.",
            "更新维护计划。"
          ]
        ]
      },
      {
        "w": "maintenance log",
        "ipa": "/ˈmeɪntənəns lɒɡ/",
        "pos": "n.",
        "cn": "维护日志",
        "memory": "maintenance（维护）+ log（日志）→ 记录维护活动的日志",
        "phonics": "maintenance /ˈmeɪntənəns/，log /lɒɡ/",
        "collocations": [
          [
            "update the log",
            "更新日志"
          ],
          [
            "check the log",
            "查看日志"
          ],
          [
            "log entry",
            "日志条目"
          ]
        ],
        "examples": [
          [
            "Enter the details in the maintenance log.",
            "在维护日志中输入详细信息。"
          ],
          [
            "The log shows previous repairs.",
            "日志显示之前的维修记录。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "update the maintenance log",
        "ipa": "",
        "cn": "更新维护日志",
        "why": "Please update the maintenance log after each service."
      }
    ],
    "grammar": [
      {
        "q": "维护日志应该包含哪些信息？",
        "a": "维护日志应包含：1）操作日期和时间 2）操作人员 3）操作类型和内容 4）设备标识 5）操作前后的状态 6）任何异常或问题 7）后续建议。完整准确的日志是设备管理的基础。"
      }
    ],
    "pattern": "Please update the + 文档/记录",
    "patternExamples": [
      { en: "Please update the equipment list.", cn: "请更新设备清单。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }] },
      { en: "Please update the contact information.", cn: "请更新联系信息。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "contact", ipa: "/ˈkɒntækt/", cn: "联系", phonics: "con 读 /kɒn/，tact 读 /tækt/" }] }
    ],
    "thinking": "维护日志是数据中心运维的核心文档，记录了设备的全部维护历史。每次操作后及时更新日志是专业运维的基本要求，这不仅是为了合规，更是为了建立完整的设备生命周期档案，为未来的维护决策提供依据。",
    "pronunciation": "update读作/ˌʌpˈdeɪt/，重音在date上。log读作/lɒɡ/，短元音。",
    "quiz": [
      {
        "q": "维护日志最重要的用途是什么？",
        "a": "建立设备维护历史。完整的日志为设备管理和未来维护决策提供重要依据。"
      }
    ]
  }
];

// EXPORTS: MOCK_SENTENCES_PART18B

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART18B: ISentence[] = [
  {
    "id": 1381,
    "en": "Please check the battery status.",
    "cn": "请检查电池状态。",
    "ipa": "/pliːz tʃɛk ðə ˈbæt.ər.i ˈstæt.əs/",
    "tags": [
      "第1381句",
      "UPS电池管理",
      "★★★★★"
    ],
    "when": "UPS日常巡检中，电池状态是最关键的检查项之一。电池是UPS的最后一道防线，电池故障可能导致停电时无备份电源。",
    "words": [
      {
        "w": "battery",
        "ipa": "/ˈbæt.ər.i/",
        "pos": "名词",
        "cn": "电池",
        "memory": "① battery = 电池（储能装置）。\n数据中心UPS电池通常为铅酸电池（VRLA）或锂电池（Li-ion）。\n电池组（battery string）由多节电池串联组成。",
        "phonics": "bat 读 /bæt/，tery 读 /tər.i/，重音在第一音节。",
        "collocations": [
          [
            "battery status",
            "电池状态"
          ],
          [
            "battery string",
            "电池组"
          ],
          [
            "battery backup time",
            "电池后备时间"
          ]
        ],
        "examples": [
          [
            "Check the battery voltage.",
            "检查电池电压。"
          ],
          [
            "The battery needs replacement.",
            "电池需要更换。"
          ]
        ]
      },
      {
        "w": "status",
        "ipa": "/ˈstæt.əs/",
        "pos": "名词",
        "cn": "状态",
        "memory": "① status = 状态/状况。\n电池状态包括：normal（正常）/ charging（充电中）/ discharging（放电中）/ fault（故障）。",
        "phonics": "stat 读 /stæt/，us 读 /əs/，重音在第一音节。",
        "collocations": [
          [
            "battery status",
            "电池状态"
          ],
          [
            "operating status",
            "运行状态"
          ],
          [
            "check status",
            "检查状态"
          ]
        ],
        "examples": [
          [
            "What is the current status?",
            "当前状态是什么？"
          ],
          [
            "Please update the status.",
            "请更新状态。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "battery status",
        "ipa": "/ˈbæt.ər.i ˈstæt.əs/",
        "cn": "电池状态",
        "why": "battery + status = 电池状态。UPS电池状态是日常巡检的核心检查项，直接影响停电时的后备保障能力。"
      }
    ],
    "grammar": [
      {
        "q": "check 和 inspect 有什么区别？",
        "a": "check = 检查（查看某项指标或状态，快速确认）\ninspect = 检查/巡检（更详细、更全面的检查）\n✅ Please check the battery status.（请检查电池状态 → 快速确认）\n✅ Please inspect the battery room.（请巡检电池室 → 详细检查）\n日常操作用 check，定期维护用 inspect。"
      }
    ],
    "pattern": "Please check the + 检查项",
    "patternExamples": [
      { en: "Please check the load percentage.", cn: "请检查负载百分比。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
      { en: "Please check the temperature reading.", cn: "请检查温度读数。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "reading", ipa: "/ˈriːdɪŋ/", cn: "读数", phonics: "read 读 /riːd/，ing 读 /ɪŋ/" }] },
      { en: "Please check the alarm panel.", cn: "请检查告警面板。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "panel", ipa: "/ˈpænl/", cn: "面板", phonics: "pan 读 /pæn/，el 读 /l/" }] }
    ],
    "thinking": "UPS电池状态检查是运维工程师的日常必做项目。\n检查内容：① 电池电压 → ② 电池温度 → ③ 充电电流 → ④ 外观（漏液/膨胀/腐蚀）。\n电池状态异常可能导致：停电时UPS无法切换到电池模式，负载失去保护。",
    "pronunciation": "battery 的 a 读短音 /æ/：/ˈbæt.ər.i/。\nstatus 的 a 读短音 /æ/：/ˈstæt.əs/。\n节奏：Please CHECK ｜ the BAT-ter-y STA-tus.",
    "quiz": [
      {
        "q": "请检查电池室温度，怎么说？",
        "a": "Please check the battery room temperature."
      },
      {
        "q": "电池状态异常有哪些表现？",
        "a": "电池状态异常包括：① 电压偏低（低于标称值）② 温度过高（超过30°C）③ 充电电流异常（过大或为零）④ 外观异常（漏液/膨胀/端子腐蚀）。发现异常应立即记录并通知值班经理。"
      }
    ]
  },
  {
    "id": 1382,
    "en": "All battery strings are operating normally.",
    "cn": "所有电池组运行正常。",
    "ipa": "/ɔːl ˈbæt.ər.i strɪŋz ɑːr ˈɒp.ər.eɪ.tɪŋ ˈnɔːr.mə.li/",
    "tags": [
      "第1382句",
      "电池正常",
      "★★★★★"
    ],
    "when": "检查完电池状态后，汇报结果：所有电池组运行正常。这是交接中最常见的正面结论。",
    "words": [
      {
        "w": "string",
        "ipa": "/strɪŋ/",
        "pos": "名词",
        "cn": "电池组；串",
        "memory": "① string = 绳子/串（原义）；② battery string = 电池组（由多节电池串联组成的一串）。\n数据中心UPS通常有2-4组电池（strings），互为冗余。",
        "phonics": "str 读 /str/，ing 读 /ɪŋ/。",
        "collocations": [
          [
            "battery string",
            "电池组"
          ],
          [
            "string voltage",
            "组电压"
          ],
          [
            "parallel strings",
            "并联电池组"
          ]
        ],
        "examples": [
          [
            "Check each battery string.",
            "检查每个电池组。"
          ],
          [
            "String 2 shows abnormal voltage.",
            "第2组电池电压异常。"
          ]
        ]
      },
      {
        "w": "operating normally",
        "ipa": "/ˈɒp.ər.eɪ.tɪŋ ˈnɔːr.mə.li/",
        "pos": "动词短语",
        "cn": "运行正常",
        "memory": "operating = 运行中（现在分词）+ normally = 正常地。\noperating normally = 正在正常运行。交接汇报中最常用的正面状态描述。",
        "phonics": "op 读 /ɒp/，er 读 /ər/，ating 读 /eɪ.tɪŋ/。",
        "collocations": [
          [
            "operating normally",
            "运行正常"
          ],
          [
            "all systems normal",
            "所有系统正常"
          ],
          [
            "running normally",
            "运行正常"
          ]
        ],
        "examples": [
          [
            "All systems are operating normally.",
            "所有系统运行正常。"
          ],
          [
            "The generator is operating normally.",
            "发电机运行正常。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "battery strings",
        "ipa": "/ˈbæt.ər.i strɪŋz/",
        "cn": "电池组（多组）",
        "why": "battery + strings = 多组电池。数据中心UPS通常配置多组电池并联运行，提高冗余度。单组电池故障不影响整体后备能力。"
      }
    ],
    "grammar": [
      {
        "q": "all ... are 和 all ... is 哪个正确？",
        "a": "all + 复数名词 → are（复数动词）\nall + 不可数名词 → is（单数动词）\n✅ All battery strings are operating normally.（所有电池组运行正常 → strings 是复数）\n✅ All equipment is operating normally.（所有设备运行正常 → equipment 是不可数）\n关键看名词是可数还是不可数。"
      }
    ],
    "pattern": "All + 对象 + are operating normally",
    "patternExamples": [
      { en: "All cooling units are operating normally.", cn: "所有冷却设备运行正常。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "All generators are operating normally.", cn: "所有发电机运行正常。", words: [{ w: "generators", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "All fire panels are operating normally.", cn: "所有消防面板运行正常。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "panels", ipa: "/ˈpænl/", cn: "面板", phonics: "pan 读 /pæn/，el 读 /l/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] }
    ],
    "thinking": "电池组运行正常是交接中最理想的汇报结果。\n正常标准：① 浮充电压在标称范围内（如13.5-13.8V/节）② 电池温度在20-25°C ③ 无漏液/膨胀/腐蚀。\n发现异常应记录电池组编号、异常值，并评估后备时间是否受影响。",
    "pronunciation": "strings 的 str 读 /str/，不要读成 /s-tr/。\nnormally 的 or 读 /ɔːr/：/ˈnɔːr.mə.li/。\n节奏：All BAT-ter-y STRINGS ｜ are OP-er-a-ting NOR-mal-ly.",
    "quiz": [
      {
        "q": "所有发电机运行正常，怎么说？",
        "a": "All generators are operating normally."
      },
      {
        "q": "battery string 是什么意思？",
        "a": "battery string = 电池组，由多节电池串联组成的一串。数据中心UPS通常有2-4组电池并联运行（parallel strings），提供冗余保护。单组故障时其他组仍可支撑负载。"
      }
    ]
  },
  {
    "id": 1383,
    "en": "Please check the battery temperature.",
    "cn": "请检查电池温度。",
    "ipa": "/pliːz tʃɛk ðə ˈbæt.ər.i ˈtɛm.prə.tʃər/",
    "tags": [
      "第1383句",
      "电池温度检查",
      "★★★★★"
    ],
    "when": "电池温度是判断电池健康状态的重要指标。温度过高会加速电池老化，温度过低会降低电池容量。",
    "words": [
      {
        "w": "temperature",
        "ipa": "/ˈtɛm.prə.tʃər/",
        "pos": "名词",
        "cn": "温度",
        "memory": "① temper = 调节/缓和（拉丁语 temperare）；② -ature = 名词后缀。\ntemperature = 温度。\n电池最佳运行温度：20-25°C。每升高10°C，电池寿命减半。",
        "phonics": "tem 读 /tɛm/，per 读 /pər/，a 读 /ə/，ture 读 /tʃər/。",
        "collocations": [
          [
            "battery temperature",
            "电池温度"
          ],
          [
            "room temperature",
            "室温"
          ],
          [
            "temperature alarm",
            "温度告警"
          ]
        ],
        "examples": [
          [
            "The temperature is too high.",
            "温度太高了。"
          ],
          [
            "Check the ambient temperature.",
            "检查环境温度。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "battery temperature",
        "ipa": "/ˈbæt.ər.i ˈtɛm.prə.tʃər/",
        "cn": "电池温度",
        "why": "battery + temperature = 电池温度。电池温度是电池健康的关键指标，直接影响电池寿命和后备时间。"
      }
    ],
    "grammar": [
      {
        "q": "temperature 和 heat 有什么区别？",
        "a": "temperature = 温度（可测量的数值，有高低）\nheat = 热量/热度（能量概念，不可测量具体数值）\n✅ Check the battery temperature.（检查电池温度 → 读数是多少度）\n✅ The battery generates heat.（电池产生热量 → 能量概念）\n运维中用 temperature，因为需要具体数值判断是否正常。"
      }
    ],
    "pattern": "Please check the + 设备 + temperature",
    "patternExamples": [
      { en: "Please check the room temperature.", cn: "请检查房间温度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "room", ipa: "/ruːm/", cn: "房间", phonics: "room 读 /ruːm/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
      { en: "Please check the transformer temperature.", cn: "请检查变压器温度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "transformer", ipa: "/trænsˈfɔːrmər/", cn: "变压器", phonics: "trans 读 /træns/，former 读 /fɔːrmər/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
      { en: "Please check the server inlet temperature.", cn: "请检查服务器进风温度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "server", ipa: "/ˈsɜːrvər/", cn: "服务器", phonics: "serv 读 /sɜːrv/，er 读 /ər/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] }
    ],
    "thinking": "电池温度管理是UPS维护的重要环节。\n温度标准：① 最佳范围 20-25°C ② 警告阈值 30°C ③ 危险阈值 35°C。\n温度过高的原因：① 空调故障 ② 电池室通风不良 ③ 电池内阻增大（老化）。\n温度过高 → 加速电池老化 → 缩短后备时间 → 停电风险增大。",
    "pronunciation": "temperature 的 per 读 /pər/，a 读弱音 /ə/，ture 读 /tʃər/。\n节奏：Please CHECK ｜ the BAT-ter-y TEM-per-a-ture.",
    "quiz": [
      {
        "q": "请检查变压器温度，怎么说？",
        "a": "Please check the transformer temperature."
      },
      {
        "q": "电池最佳运行温度是多少？",
        "a": "电池最佳运行温度为20-25°C。温度每升高10°C，电池寿命减半（Arrhenius定律）。因此电池室空调必须保持恒温，通常设定在22-24°C。"
      }
    ]
  },
  {
    "id": 1384,
    "en": "Please check the battery voltage.",
    "cn": "请检查电池电压。",
    "ipa": "/pliːz tʃɛk ðə ˈbæt.ər.i ˈvoʊl.tɪdʒ/",
    "tags": [
      "第1384句",
      "电池电压检查",
      "★★★★★"
    ],
    "when": "电池电压是判断电池是否正常的最直接指标。电压偏低可能表示电池老化或充电不足。",
    "words": [
      {
        "w": "voltage",
        "ipa": "/ˈvoʊl.tɪdʒ/",
        "pos": "名词",
        "cn": "电压",
        "memory": "① volt = 伏特（电压单位，以物理学家Volta命名）；② -age = 名词后缀。\nvoltage = 电压。\n常见电池电压：单节12V铅酸电池浮充电压约13.5-13.8V。",
        "phonics": "volt 读 /voʊlt/，age 读 /ɪdʒ/。",
        "collocations": [
          [
            "battery voltage",
            "电池电压"
          ],
          [
            "input voltage",
            "输入电压"
          ],
          [
            "voltage drop",
            "电压降"
          ]
        ],
        "examples": [
          [
            "The voltage is within normal range.",
            "电压在正常范围内。"
          ],
          [
            "Check the voltage at the terminals.",
            "检查端子处的电压。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "battery voltage",
        "ipa": "/ˈbæt.ər.i ˈvoʊl.tɪdʒ/",
        "cn": "电池电压",
        "why": "battery + voltage = 电池电压。浮充电压（float voltage）是电池在正常充电状态下的电压，是判断电池健康的重要指标。"
      }
    ],
    "grammar": [
      {
        "q": "voltage 和 current 有什么区别？",
        "a": "voltage = 电压（电位差，推动电流流动的'压力'，单位V）\ncurrent = 电流（电子流动的速率，单位A）\n✅ Check the battery voltage.（检查电池电压 → 看电位差是否正常）\n✅ Check the charging current.（检查充电电流 → 看充电速率是否正常）\n两者都是电池健康的关键参数。"
      }
    ],
    "pattern": "Please check the + 设备/部位 + voltage",
    "patternExamples": [
      { en: "Please check the output voltage.", cn: "请检查输出电压。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }] },
      { en: "Please check the bus voltage.", cn: "请检查母线电压。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }] },
      { en: "Please check the DC voltage.", cn: "请检查直流电压。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }] }
    ],
    "thinking": "电池电压检查需要使用万用表（multimeter）在电池端子上测量。\n正常标准（12V铅酸电池）：① 浮充电压 13.5-13.8V ② 均充电压 14.4-14.7V ③ 放电终止电压 10.5V。\n电压异常处理：① 偏低 → 检查充电器/电池内阻 ② 偏高 → 检查浮充电压设定 ③ 差异大 → 电池可能老化需更换。",
    "pronunciation": "voltage 的 o 读长音 /oʊ/：/ˈvoʊl.tɪdʒ/。\n节奏：Please CHECK ｜ the BAT-ter-y VOL-tage.",
    "quiz": [
      {
        "q": "请检查母线电压，怎么说？",
        "a": "Please check the bus voltage."
      },
      {
        "q": "12V铅酸电池正常浮充电压是多少？",
        "a": "12V铅酸电池正常浮充电压约13.5-13.8V。均充电压约14.4-14.7V。如果浮充电压低于13.2V或高于14.0V，需要检查充电器设定或电池状态。"
      }
    ]
  },
  {
    "id": 1385,
    "en": "Please check the battery charging current.",
    "cn": "请检查电池充电电流。",
    "ipa": "/pliːz tʃɛk ðə ˈbæt.ər.i ˈtʃɑːr.dʒɪŋ ˈkʌr.ənt/",
    "tags": [
      "第1385句",
      "充电电流检查",
      "★★★★"
    ],
    "when": "充电电流反映电池充电状态是否正常。充电电流过大可能损坏电池，为零则表示未充电。",
    "words": [
      {
        "w": "charging",
        "ipa": "/ˈtʃɑːr.dʒɪŋ/",
        "pos": "动词（现在分词/形容词）",
        "cn": "充电的",
        "memory": "① charge = 充电（动词）；② charging = 正在充电的（形容词/现在分词）。\ncharging current = 充电电流，即UPS向电池输送的电流。",
        "phonics": "charg 读 /tʃɑːr.dʒ/，ing 读 /ɪŋ/。",
        "collocations": [
          [
            "charging current",
            "充电电流"
          ],
          [
            "charging voltage",
            "充电电压"
          ],
          [
            "fast charging",
            "快速充电"
          ]
        ],
        "examples": [
          [
            "The charging current is normal.",
            "充电电流正常。"
          ],
          [
            "Check the charging status.",
            "检查充电状态。"
          ]
        ]
      },
      {
        "w": "current",
        "ipa": "/ˈkʌr.ənt/",
        "pos": "名词",
        "cn": "电流",
        "memory": "① current = 电流（电子流动速率，单位安培A）。\n注意：current 也可以做形容词表示'当前的'，但这里做名词。",
        "phonics": "cur 读 /kʌr/，rent 读 /rənt/，重音在第一音节。",
        "collocations": [
          [
            "charging current",
            "充电电流"
          ],
          [
            "load current",
            "负载电流"
          ],
          [
            "current rating",
            "额定电流"
          ]
        ],
        "examples": [
          [
            "The current is within limits.",
            "电流在限值范围内。"
          ],
          [
            "Measure the current with a clamp meter.",
            "用钳形表测量电流。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "charging current",
        "ipa": "/ˈtʃɑːr.dʒɪŋ ˈkʌr.ənt/",
        "cn": "充电电流",
        "why": "charging + current = 充电电流。正常浮充状态下充电电流很小（接近0），大电流充电表示电池刚经历放电正在恢复。"
      }
    ],
    "grammar": [
      {
        "q": "current 做名词和做形容词怎么区分？",
        "a": "current 做名词 = 电流（电子流动，可测量）\ncurrent 做形容词 = 当前的/现行的\n✅ Check the charging current.（检查充电电流 → 名词）\n✅ Check the current status.（检查当前状态 → 形容词）\n根据上下文判断：跟在形容词后面通常是名词，放在名词前面通常是形容词。"
      }
    ],
    "pattern": "Please check the + 对象 + current",
    "patternExamples": [
      { en: "Please check the load current.", cn: "请检查负载电流。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
      { en: "Please check the neutral current.", cn: "请检查中性线电流。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the ground current.", cn: "请检查接地电流。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] }
    ],
    "thinking": "充电电流是判断电池充电状态的关键参数。\n正常状态：① 浮充时电流很小（<1A）② 放电后恢复充电时电流较大（可达10-20A）③ 充满后电流逐渐减小。\n异常状态：① 电流为0 → 充电器故障或电池断路 ② 电流持续很大 → 电池可能短路 ③ 电流波动 → 充电器不稳定。",
    "pronunciation": "charging 的 ch 读 /tʃ/，ar 读 /ɑːr/。\ncurrent 的 u 读短音 /ʌ/。\n节奏：Please CHECK ｜ the BAT-ter-y CHAR-ging CUR-rent.",
    "quiz": [
      {
        "q": "请检查负载电流，怎么说？",
        "a": "Please check the load current."
      },
      {
        "q": "浮充状态下充电电流应该是多少？",
        "a": "浮充状态下充电电流应该很小，通常小于1A。如果浮充时电流很大，可能是电池刚经历放电正在恢复，或者电池内阻增大（老化）。如果电流为0，说明充电器故障或电池断路。"
      }
    ]
  },
  {
    "id": 1386,
    "en": "Please perform an online battery discharge test.",
    "cn": "请执行在线电池放电测试。",
    "ipa": "/pliːz pərˈfɔːrm æn ˈɒn.laɪn ˈbæt.ər.i dɪsˈtʃɑːrdʒ tɛst/",
    "tags": [
      "第1386句",
      "放电测试",
      "★★★★★"
    ],
    "when": "电池放电测试是验证电池实际后备能力的重要测试。在线测试（online）指不中断供电的情况下进行，通过UPS控制电池放电到设定深度。",
    "words": [
      {
        "w": "perform",
        "ipa": "/pərˈfɔːrm/",
        "pos": "动词",
        "cn": "执行；进行",
        "memory": "① per- = 完全/彻底；② form = 形成/做。\nperform = 执行/完成（正式用语，比 do 更专业）。\nperform a test = 执行测试（标准操作用语）。",
        "phonics": "per 读 /pər/，form 读 /fɔːrm/，重音在第二音节。",
        "collocations": [
          [
            "perform a test",
            "执行测试"
          ],
          [
            "perform maintenance",
            "执行维护"
          ],
          [
            "perform inspection",
            "执行检查"
          ]
        ],
        "examples": [
          [
            "Please perform the battery test.",
            "请执行电池测试。"
          ],
          [
            "The test was performed successfully.",
            "测试已成功执行。"
          ]
        ]
      },
      {
        "w": "discharge",
        "ipa": "/dɪsˈtʃɑːrdʒ/",
        "pos": "名词/动词",
        "cn": "放电",
        "memory": "① dis- = 去除/释放；② charge = 充电。\ndischarge = 放电（释放存储的电能）。\n电池放电测试 = battery discharge test。",
        "phonics": "dis 读 /dɪs/，charge 读 /tʃɑːrdʒ/，重音在第二音节。",
        "collocations": [
          [
            "discharge test",
            "放电测试"
          ],
          [
            "discharge rate",
            "放电速率"
          ],
          [
            "deep discharge",
            "深度放电"
          ]
        ],
        "examples": [
          [
            "The discharge test is in progress.",
            "放电测试正在进行。"
          ],
          [
            "Please monitor the discharge process.",
            "请监控放电过程。"
          ]
        ]
      },
      {
        "w": "online",
        "ipa": "/ˈɒn.laɪn/",
        "pos": "形容词",
        "cn": "在线的",
        "memory": "① on = 在…上；② line = 线路。\nonline = 在线的（不中断供电）。\nonline test = 在线测试，不需要切换负载到旁路，UPS仍在保护模式下运行。",
        "phonics": "on 读 /ɒn/，line 读 /laɪn/。",
        "collocations": [
          [
            "online test",
            "在线测试"
          ],
          [
            "online UPS",
            "在线式UPS"
          ],
          [
            "online monitoring",
            "在线监控"
          ]
        ],
        "examples": [
          [
            "Run an online battery test.",
            "执行在线电池测试。"
          ],
          [
            "The UPS is an online type.",
            "这台UPS是在线式的。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "online battery discharge test",
        "ipa": "/ˈɒn.laɪn ˈbæt.ər.i dɪsˈtʃɑːrdʒ tɛst/",
        "cn": "在线电池放电测试",
        "why": "online + battery + discharge + test = 在线电池放电测试。在线测试的优势是不中断对客户负载的供电保护，通过UPS内部控制让电池放电到设定百分比。"
      }
    ],
    "grammar": [
      {
        "q": "perform 和 do 有什么区别？",
        "a": "perform = 执行（正式、专业，用于标准操作流程）\ndo = 做（口语化，日常用语）\n✅ Please perform the battery test.（请执行电池测试 → 正式操作指令）\n✅ Please do a quick check.（请快速检查一下 → 口语化）\n操作手册和正式场合用 perform。"
      }
    ],
    "pattern": "Please perform a/an + 测试/操作类型",
    "patternExamples": [
      { en: "Please perform a generator load test.", cn: "请执行发电机负载测试。", words: [{ w: "perform", ipa: "/pərˈfɔːrm/", cn: "执行", phonics: "per 读 /pər/，form 读 /fɔːrm/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
      { en: "Please perform an ATS transfer test.", cn: "请执行ATS切换测试。", words: [{ w: "perform", ipa: "/pərˈfɔːrm/", cn: "执行", phonics: "per 读 /pər/，form 读 /fɔːrm/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "Please perform a fire drill.", cn: "请执行消防演练。", words: [{ w: "perform", ipa: "/pərˈfɔːrm/", cn: "执行", phonics: "per 读 /pər/，form 读 /fɔːrm/" }, { w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }] }
    ],
    "thinking": "电池放电测试是UPS定期维护的重要项目。\n测试类型：① 在线测试（online）→ 不中断供电 ② 离线测试（offline）→ 需要切换到旁路。\n在线测试流程：① 设定放电深度（如30%）→ ② UPS控制电池放电 → ③ 监控放电电压/电流 → ④ 达到设定值后自动停止 → ⑤ 电池恢复充电。\n测试目的：验证电池实际容量是否满足设计后备时间要求。",
    "pronunciation": "perform 的 er 读 /ər/，form 读 /fɔːrm/。\ndischarge 的 dis 读 /dɪs/，charge 读 /tʃɑːrdʒ/。\n节奏：Please per-FORM ｜ an ON-line ｜ BAT-ter-y ｜ dis-CHARGE TEST.",
    "quiz": [
      {
        "q": "请执行发电机负载测试，怎么说？",
        "a": "Please perform a generator load test."
      },
      {
        "q": "在线测试和离线测试有什么区别？",
        "a": "在线测试（online）：不中断供电，UPS仍在保护模式下运行，电池放电到设定深度后自动恢复充电。离线测试（offline）：需要将负载切换到旁路或市电直供，电池完全脱离系统进行深度放电。在线测试更安全，离线测试更彻底。"
      }
    ]
  },
  {
    "id": 1387,
    "en": "The battery discharge test has started.",
    "cn": "电池放电测试已经开始。",
    "ipa": "/ðə ˈbæt.ər.i dɪsˈtʃɑːrdʒ tɛst hæz ˈstɑːr.tɪd/",
    "tags": [
      "第1387句",
      "测试开始",
      "★★★★"
    ],
    "when": "启动放电测试后，确认测试已经开始运行。此时需要密切监控电池电压和放电进度。",
    "words": [
      {
        "w": "started",
        "ipa": "/ˈstɑːr.tɪd/",
        "pos": "动词（过去分词）",
        "cn": "已开始",
        "memory": "① start = 开始；② started = 已经开始（过去分词）。\nhas started = 已经开始（现在完成时，表示从过去到现在已完成的动作）。",
        "phonics": "start 读 /stɑːrt/，ed 读 /ɪd/。",
        "collocations": [
          [
            "test has started",
            "测试已开始"
          ],
          [
            "process has started",
            "流程已开始"
          ],
          [
            "charging has started",
            "充电已开始"
          ]
        ],
        "examples": [
          [
            "The test has started successfully.",
            "测试已成功开始。"
          ],
          [
            "The process has started.",
            "流程已开始。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "has started",
        "ipa": "/hæz ˈstɑːr.tɪd/",
        "cn": "已经开始",
        "why": "has + started = 已经开始（现在完成时）。强调测试已经启动，当前处于运行状态。交接中常用现在完成时汇报'某事已经做了'。"
      }
    ],
    "grammar": [
      {
        "q": "has started 和 is starting 有什么区别？",
        "a": "has started = 已经开始（现在完成时，动作已完成，测试已在运行）\nis starting = 正在开始（现在进行时，动作正在进行中）\n✅ The test has started.（测试已经开始 → 已在运行中）\n✅ The test is starting now.（测试正在开始 → 刚刚启动的过程）\n交接中用 has started，因为关注的是'测试是否已启动'的结果。"
      }
    ],
    "pattern": "The + 操作/测试 + has started",
    "patternExamples": [
      { en: "The generator test has started.", cn: "发电机测试已经开始。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }, { w: "started", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "The maintenance has started.", cn: "维护已经开始。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }, { w: "started", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "The transfer process has started.", cn: "切换流程已经开始。", words: [{ w: "started", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] }
    ],
    "thinking": "放电测试开始后，需要密切监控：\n① 电池电压是否平稳下降（不应急剧下降）\n② 放电电流是否稳定\n③ 电池温度是否升高\n④ 放电百分比进度\n如果发现电压急剧下降或温度异常升高，应立即终止测试。",
    "pronunciation": "started 的 ar 读 /ɑːr/，ed 读 /ɪd/。\n节奏：The BAT-ter-y dis-CHARGE TEST ｜ has STAR-ted.",
    "quiz": [
      {
        "q": "发电机测试已经开始，怎么说？",
        "a": "The generator test has started."
      },
      {
        "q": "放电测试开始后需要监控哪些参数？",
        "a": "放电测试开始后需要监控：① 电池电压（应平稳下降）② 放电电流（应保持稳定）③ 电池温度（不应异常升高）④ 放电百分比进度。发现异常应立即终止测试并检查电池。"
      }
    ]
  },
  {
    "id": 1388,
    "en": "The battery discharge test has been completed successfully.",
    "cn": "电池放电测试已经顺利完成。",
    "ipa": "/ðə ˈbæt.ər.i dɪsˈtʃɑːrdʒ tɛst hæz biːn kəmˈpliː.tɪd səkˈsɛs.fəl.i/",
    "tags": [
      "第1388句",
      "测试完成",
      "★★★★★"
    ],
    "when": "放电测试完成后，确认测试结果。顺利完成意味着电池容量满足要求，后备时间达标。",
    "words": [
      {
        "w": "completed",
        "ipa": "/kəmˈpliː.tɪd/",
        "pos": "动词（过去分词）",
        "cn": "已完成",
        "memory": "① com- = 完全/一起；② plete = 充满（拉丁语 plere）。\ncompleted = 已完成的（过去分词）。\nhas been completed = 已经被完成（现在完成时被动语态）。",
        "phonics": "com 读 /kəm/，plet 读 /pliːt/，ed 读 /ɪd/。",
        "collocations": [
          [
            "successfully completed",
            "顺利完成"
          ],
          [
            "completed on time",
            "按时完成"
          ],
          [
            "task completed",
            "任务完成"
          ]
        ],
        "examples": [
          [
            "The test has been completed.",
            "测试已完成。"
          ],
          [
            "The maintenance was completed successfully.",
            "维护已顺利完成。"
          ]
        ]
      },
      {
        "w": "successfully",
        "ipa": "/səkˈsɛs.fəl.i/",
        "pos": "副词",
        "cn": "成功地；顺利地",
        "memory": "① success = 成功；② -ful = 充满的；③ -ly = 副词后缀。\nsuccessfully = 成功地/顺利地。\ncompleted successfully = 顺利完成（强调结果正面）。",
        "phonics": "suc 读 /sək/，cess 读 /sɛs/，ful 读 /fəl/，ly 读 /li/。",
        "collocations": [
          [
            "completed successfully",
            "顺利完成"
          ],
          [
            "operating successfully",
            "成功运行"
          ],
          [
            "restored successfully",
            "成功恢复"
          ]
        ],
        "examples": [
          [
            "The operation was completed successfully.",
            "操作顺利完成。"
          ],
          [
            "The system has been restored successfully.",
            "系统已成功恢复。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "has been completed successfully",
        "ipa": "/hæz biːn kəmˈpliː.tɪd səkˈsɛs.fəl.i/",
        "cn": "已经顺利完成",
        "why": "has been + completed + successfully = 已经被顺利完成。现在完成时被动语态 + 副词修饰，是交接汇报中标准的正面结论格式。"
      }
    ],
    "grammar": [
      {
        "q": "has been completed 和 has completed 有什么区别？",
        "a": "has been completed = 已经被完成（被动语态，强调操作的结果）\nhas completed = 已经完成了（主动语态，主语是执行者）\n✅ The test has been completed.（测试已被完成 → 被动，关注结果）\n✅ The engineer has completed the test.（工程师已完成测试 → 主动，关注执行者）\n交接中多用被动语态，因为关注的是'事情做没做'，不是'谁做的'。"
      }
    ],
    "pattern": "The + 操作/测试 + has been completed successfully",
    "patternExamples": [
      { en: "The generator test has been completed successfully.", cn: "发电机测试已顺利完成。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "The switching operation has been completed successfully.", cn: "倒闸操作已顺利完成。", words: [{ w: "switching", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "operation", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }] },
      { en: "The maintenance work has been completed successfully.", cn: "维护工作已顺利完成。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] }
    ],
    "thinking": "放电测试顺利完成后的工作：\n① 记录测试结果（放电深度、持续时间、最终电压）\n② 确认电池自动恢复充电\n③ 评估电池容量是否满足后备时间要求\n④ 更新维护记录\n如果测试未通过（电压下降过快），需要安排电池更换。",
    "pronunciation": "completed 的 o 读弱音 /ə/，ple 读 /pliː/。\nsuccessfully 的 uc 读 /ək/，cess 读 /sɛs/。\n节奏：The BAT-ter-y dis-CHARGE TEST ｜ has been com-PLE-ted ｜ suc-CESS-ful-ly.",
    "quiz": [
      {
        "q": "倒闸操作已顺利完成，怎么说？",
        "a": "The switching operation has been completed successfully."
      },
      {
        "q": "放电测试完成后需要记录哪些信息？",
        "a": "放电测试完成后需要记录：① 放电深度（如30%/50%）② 持续时间 ③ 最终电池电压 ④ 放电过程中最低电压 ⑤ 电池温度变化 ⑥ 测试结论（通过/未通过）。这些信息用于评估电池健康状况和预测更换时间。"
      }
    ]
  },
  {
    "id": 1389,
    "en": "Please reconnect the battery system.",
    "cn": "请重新接入电池系统。",
    "ipa": "/pliːz ˌriː.kəˈnɛkt ðə ˈbæt.ər.i ˈsɪs.təm/",
    "tags": [
      "第1389句",
      "重新接入",
      "★★★★"
    ],
    "when": "放电测试完成或维护完成后，需要将电池系统重新接入UPS，恢复正常充电和保护功能。",
    "words": [
      {
        "w": "reconnect",
        "ipa": "/ˌriː.kəˈnɛkt/",
        "pos": "动词",
        "cn": "重新连接；重新接入",
        "memory": "① re- = 再次/重新；② connect = 连接。\nreconnect = 重新连接/重新接入。\n电池断开维护后需要重新接入UPS系统。",
        "phonics": "re 读 /riː/，con 读 /kə/，nect 读 /nɛkt/。",
        "collocations": [
          [
            "reconnect the battery",
            "重新接入电池"
          ],
          [
            "reconnect the power",
            "重新接入电源"
          ],
          [
            "reconnect the circuit",
            "重新接入电路"
          ]
        ],
        "examples": [
          [
            "Please reconnect the battery after testing.",
            "测试后请重新接入电池。"
          ],
          [
            "The circuit has been reconnected.",
            "电路已重新接入。"
          ]
        ]
      },
      {
        "w": "system",
        "ipa": "/ˈsɪs.təm/",
        "pos": "名词",
        "cn": "系统",
        "memory": "① system = 系统（由多个部件组成的整体）。\nbattery system = 电池系统（包含电池组、断路器、连接线等）。",
        "phonics": "sys 读 /sɪs/，tem 读 /təm/。",
        "collocations": [
          [
            "battery system",
            "电池系统"
          ],
          [
            "power system",
            "电力系统"
          ],
          [
            "cooling system",
            "冷却系统"
          ]
        ],
        "examples": [
          [
            "The battery system is online.",
            "电池系统已上线。"
          ],
          [
            "Check the cooling system.",
            "检查冷却系统。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "reconnect the battery system",
        "ipa": "/ˌriː.kəˈnɛkt ðə ˈbæt.ər.i ˈsɪs.təm/",
        "cn": "重新接入电池系统",
        "why": "reconnect + battery + system = 重新接入电池系统。电池断开后必须重新接入，UPS才能恢复电池后备保护功能。"
      }
    ],
    "grammar": [
      {
        "q": "reconnect 和 connect 有什么区别？",
        "a": "connect = 连接（首次连接）\nreconnect = 重新连接（之前断开过，现在恢复）\n✅ Please connect the new battery.（请连接新电池 → 首次连接）\n✅ Please reconnect the battery system.（请重新接入电池系统 → 之前断开维护，现在恢复）\n维护后用 reconnect，因为电池之前是连接过的。"
      }
    ],
    "pattern": "Please reconnect the + 系统/设备",
    "patternExamples": [
      { en: "Please reconnect the UPS to the load.", cn: "请将UPS重新接入负载。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
      { en: "Please reconnect the generator.", cn: "请重新接入发电机。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "Please reconnect the cooling system.", cn: "请重新接入冷却系统。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] }
    ],
    "thinking": "重新接入电池系统的注意事项：\n① 确认所有维护工作已完成\n② 确认电池断路器和连接已恢复\n③ 合上电池断路器（先合总开关，再合各组开关）\n④ 确认UPS识别到电池并开始充电\n⑤ 检查充电电流和电压是否正常\n重新接入后，电池系统恢复到可保护状态。",
    "pronunciation": "reconnect 的 re 读长音 /riː/，con 读弱音 /kə/。\nsystem 的 y 读短音 /ɪ/。\n节奏：Please RE-con-NECT ｜ the BAT-ter-y SYS-tem.",
    "quiz": [
      {
        "q": "请重新接入发电机，怎么说？",
        "a": "Please reconnect the generator."
      },
      {
        "q": "重新接入电池系统后需要确认什么？",
        "a": "重新接入电池系统后需要确认：① 电池断路器已合上 ② UPS已识别到电池 ③ 充电电流和电压正常 ④ UPS面板显示电池状态正常 ⑤ 无电池相关告警。确认无误后，电池后备保护功能恢复。"
      }
    ]
  },
  {
    "id": 1390,
    "en": "Please verify the battery charging status.",
    "cn": "请确认电池充电状态。",
    "ipa": "/pliːz ˈvɛr.ɪ.faɪ ðə ˈbæt.ər.i ˈtʃɑːr.dʒɪŋ ˈstæt.əs/",
    "tags": [
      "第1390句",
      "充电状态确认",
      "★★★★"
    ],
    "when": "电池重新接入后，需要确认充电状态是否恢复正常。充电正常意味着电池正在补充电能，后备能力在恢复中。",
    "words": [
      {
        "w": "verify",
        "ipa": "/ˈvɛr.ɪ.faɪ/",
        "pos": "动词",
        "cn": "确认；核实",
        "memory": "① ver- = 真实（拉丁语 verus）；② -ify = 使成为。\nverify = 使真实 → 确认/核实（通过检查确保正确）。\nverify 比 check 更正式，强调'确认正确性'。",
        "phonics": "ver 读 /vɛr/，i 读 /ɪ/，fy 读 /faɪ/。",
        "collocations": [
          [
            "verify the status",
            "确认状态"
          ],
          [
            "verify the result",
            "确认结果"
          ],
          [
            "verify the connection",
            "确认连接"
          ]
        ],
        "examples": [
          [
            "Please verify the alarm has cleared.",
            "请确认告警已恢复。"
          ],
          [
            "Verify all parameters are normal.",
            "确认所有参数正常。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "charging status",
        "ipa": "/ˈtʃɑːr.dʒɪŋ ˈstæt.əs/",
        "cn": "充电状态",
        "why": "charging + status = 充电状态。包括：charging（充电中）/ fully charged（充满）/ not charging（未充电）/ fault（故障）。"
      }
    ],
    "grammar": [
      {
        "q": "verify 和 confirm 有什么区别？",
        "a": "verify = 核实（通过检查/测量来确认，强调验证过程）\nconfirm = 确认（口头/书面确认，强调表态）\n✅ Please verify the battery is charging.（请核实电池在充电 → 需要实际检查）\n✅ I confirm the battery is charging.（我确认电池在充电 → 表态/汇报）\n操作中用 verify（需要实际检查），汇报中用 confirm（表态确认）。"
      }
    ],
    "pattern": "Please verify the + 检查项 + status",
    "patternExamples": [
      { en: "Please verify the UPS operating status.", cn: "请确认UPS运行状态。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "Please verify the alarm status.", cn: "请确认告警状态。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Please verify the isolation status.", cn: "请确认隔离状态。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] }
    ],
    "thinking": "电池充电状态确认是电池管理闭环的最后一步。\n正常充电状态：① 充电电流在正常范围内 ② 充电电压稳定 ③ UPS面板显示'Charging' ④ 无充电相关告警。\n如果充电异常：① 检查充电器是否正常工作 ② 检查电池断路器是否合上 ③ 检查电池连接线是否正常。\n充电状态确认后，电池管理环节全部完成。",
    "pronunciation": "verify 的 ver 读 /vɛr/，i 读 /ɪ/，fy 读 /faɪ/。\n节奏：Please VER-i-fy ｜ the BAT-ter-y CHAR-ging STA-tus.",
    "quiz": [
      {
        "q": "请确认UPS运行状态，怎么说？",
        "a": "Please verify the UPS operating status."
      },
      {
        "q": "正常充电状态应该满足哪些条件？",
        "a": "正常充电状态应满足：① 充电电流在正常范围内（浮充时<1A，恢复充电时根据电池容量而定）② 充电电压稳定在设定值 ③ UPS面板显示'Charging'状态 ④ 无充电相关告警 ⑤ 电池温度正常（20-25°C）。"
      }
    ]
  },
  {
    "id": 1391,
    "en": "A UPS warning alarm has been detected.",
    "cn": "检测到UPS警告告警。",
    "ipa": "/ə juː.piː.ɛs ˈwɔːr.nɪŋ əˈlɑːrm hæz biːn dɪˈtɛk.tɪd/",
    "tags": [
      "第1391句",
      "UPS警告告警",
      "★★★★★"
    ],
    "when": "BMS或UPS面板检测到警告级别告警。Warning 表示需要关注但不立即影响运行，应尽快排查原因。",
    "words": [
      {
        "w": "warning",
        "ipa": "/ˈwɔːr.nɪŋ/",
        "pos": "形容词/名词",
        "cn": "警告的；警告",
        "memory": "① warn = 警告；② warning = 警告（名词/形容词）。\nUPS告警级别：Info（信息）< Warning（警告）< Critical（严重）。\nWarning 级别需要关注但不立即影响运行。",
        "phonics": "warn 读 /wɔːrn/，ing 读 /ɪŋ/。",
        "collocations": [
          [
            "warning alarm",
            "警告告警"
          ],
          [
            "warning light",
            "警告灯"
          ],
          [
            "early warning",
            "预警"
          ]
        ],
        "examples": [
          [
            "A warning alarm appeared on the panel.",
            "面板上出现了警告告警。"
          ],
          [
            "Check the warning message.",
            "检查警告信息。"
          ]
        ]
      },
      {
        "w": "detected",
        "ipa": "/dɪˈtɛk.tɪd/",
        "pos": "动词（过去分词）",
        "cn": "检测到",
        "memory": "① de- = 去除/向下；② tect = 覆盖（拉丁语 tegere）。\ndetect = 去除覆盖 → 发现/检测到。\nhas been detected = 已经被检测到（被动语态）。",
        "phonics": "de 读 /dɪ/，tect 读 /tɛkt/，ed 读 /ɪd/。",
        "collocations": [
          [
            "alarm detected",
            "告警检测到"
          ],
          [
            "fault detected",
            "故障检测到"
          ],
          [
            "smoke detected",
            "烟雾检测到"
          ]
        ],
        "examples": [
          [
            "An alarm has been detected.",
            "检测到一条告警。"
          ],
          [
            "A fault was detected in the UPS.",
            "UPS中检测到故障。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "has been detected",
        "ipa": "/hæz biːn dɪˈtɛk.tɪd/",
        "cn": "已经被检测到",
        "why": "has been + detected = 已经被检测到（现在完成时被动语态）。表示系统自动发现了告警，运维人员需要响应处理。"
      }
    ],
    "grammar": [
      {
        "q": "warning alarm 和 critical alarm 有什么区别？",
        "a": "warning alarm = 警告告警（需要关注，但不立即影响运行）\ncritical alarm = 严重告警（可能影响运行，需要立即处理）\n✅ A UPS warning alarm has been detected.（检测到UPS警告告警 → 关注但不紧急）\n✅ A UPS critical alarm has been detected.（检测到UPS严重告警 → 需要立即处理）\n处理方式不同：warning 可安排排查，critical 必须立即响应。"
      }
    ],
    "pattern": "A + 设备 + warning/critical alarm has been detected",
    "patternExamples": [
      { en: "A cooling warning alarm has been detected.", cn: "检测到冷却警告告警。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "warning", ipa: "/ˈwɔːrnɪŋ/", cn: "警告", phonics: "warn 读 /wɔːrn/，ing 读 /ɪŋ/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A generator critical alarm has been detected.", cn: "检测到发电机严重告警。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "critical", ipa: "/ˈkrɪtɪkəl/", cn: "严重", phonics: "crit 读 /krɪt/，ical 读 /ɪkəl/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A fire warning alarm has been detected.", cn: "检测到消防警告告警。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "warning", ipa: "/ˈwɔːrnɪŋ/", cn: "警告", phonics: "warn 读 /wɔːrn/，ing 读 /ɪŋ/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] }
    ],
    "thinking": "UPS警告告警常见原因：\n① 电池电压偏低 ② 电池温度偏高 ③ 负载率偏高 ④ 风扇故障 ⑤ 通讯中断。\nWarning 告警处理流程：① 确认告警内容 → ② 评估影响 → ③ 安排排查 → ④ 记录并汇报。\n虽然不紧急，但不应长时间忽略，否则可能升级为 Critical。",
    "pronunciation": "warning 的 ar 读 /ɔːr/。\ndetected 的 de 读 /dɪ/，tect 读 /tɛkt/。\n节奏：A UPS WARN-ing A-larm ｜ has been de-TEC-ted.",
    "quiz": [
      {
        "q": "检测到发电机严重告警，怎么说？",
        "a": "A generator critical alarm has been detected."
      },
      {
        "q": "Warning 和 Critical 告警的处理优先级有什么区别？",
        "a": "Warning（警告）：需要关注但不立即影响运行，可安排排查（如电池电压偏低、温度偏高）。Critical（严重）：可能影响运行或已影响负载，必须立即响应处理（如UPS故障、输出中断）。Critical 优先级高于 Warning，应优先处理。"
      }
    ]
  },
  {
    "id": 1392,
    "en": "A UPS critical alarm has been detected.",
    "cn": "检测到UPS严重告警。",
    "ipa": "/ə juː.piː.ɛs ˈkrɪt.ɪ.kəl əˈlɑːrm hæz biːn dɪˈtɛk.tɪd/",
    "tags": [
      "第1392句",
      "UPS严重告警",
      "★★★★★"
    ],
    "when": "BMS或UPS面板检测到严重级别告警。Critical 表示可能影响UPS运行或负载供电，需要立即响应处理。",
    "words": [
      {
        "w": "critical",
        "ipa": "/ˈkrɪt.ɪ.kəl/",
        "pos": "形容词",
        "cn": "严重的；关键的",
        "memory": "① crit- = 判断（希腊语 krinein）；② -ical = 形容词后缀。\ncritical = 关键的/严重的（需要立即判断和处理的）。\nUPS Critical alarm = UPS严重告警，最高级别告警。",
        "phonics": "crit 读 /krɪt/，i 读 /ɪ/，cal 读 /kəl/。",
        "collocations": [
          [
            "critical alarm",
            "严重告警"
          ],
          [
            "critical load",
            "关键负载"
          ],
          [
            "critical system",
            "关键系统"
          ]
        ],
        "examples": [
          [
            "This is a critical issue.",
            "这是一个严重问题。"
          ],
          [
            "Protect the critical load.",
            "保护关键负载。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "critical alarm",
        "ipa": "/ˈkrɪt.ɪ.kəl əˈlɑːrm/",
        "cn": "严重告警",
        "why": "critical + alarm = 严重告警。这是最高级别的告警，表示UPS运行可能受到严重影响，需要立即响应。"
      }
    ],
    "grammar": [
      {
        "q": "critical 在不同场景中有什么含义？",
        "a": "critical 在运维场景中有两层含义：\n① 严重的（告警级别）：critical alarm = 严重告警\n② 关键的（设备分类）：critical load = 关键负载（不能断电的设备）\n✅ A critical alarm has been detected.（检测到严重告警 → 告警级别）\n✅ Protect the critical load.（保护关键负载 → 设备分类）\n根据上下文判断具体含义。"
      }
    ],
    "pattern": "A + 设备 + critical alarm has been detected",
    "patternExamples": [
      { en: "A generator critical alarm has been detected.", cn: "检测到发电机严重告警。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "critical", ipa: "/ˈkrɪtɪkəl/", cn: "严重", phonics: "crit 读 /krɪt/，ical 读 /ɪkəl/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A cooling critical alarm has been detected.", cn: "检测到冷却严重告警。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "critical", ipa: "/ˈkrɪtɪkəl/", cn: "严重", phonics: "crit 读 /krɪt/，ical 读 /ɪkəl/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A power critical alarm has been detected.", cn: "检测到供电严重告警。", words: [{ w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }, { w: "critical", ipa: "/ˈkrɪtɪkəl/", cn: "严重", phonics: "crit 读 /krɪt/，ical 读 /ɪkəl/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] }
    ],
    "thinking": "UPS严重告警常见原因：\n① UPS内部故障（整流器/逆变器/静态开关）② 输出中断 ③ 电池故障 ④ 过载 ⑤ 温度过高。\nCritical 告警处理流程：① 立即确认告警内容 → ② 评估对负载的影响 → ③ 通知值班经理 → ④ 联系供应商 → ⑤ 启动应急预案（如需要）→ ⑥ 通知客户。\nCritical 告警不能等待，必须立即响应。",
    "pronunciation": "critical 的 i 读短音 /ɪ/：/ˈkrɪt.ɪ.kəl/。\n节奏：A UPS CRIT-i-cal A-larm ｜ has been de-TEC-ted.",
    "quiz": [
      {
        "q": "检测到冷却严重告警，怎么说？",
        "a": "A cooling critical alarm has been detected."
      },
      {
        "q": "UPS严重告警的应急处理流程是什么？",
        "a": "UPS严重告警应急处理：① 立即确认告警内容和影响范围 ② 评估负载供电是否受影响 ③ 通知值班经理 ④ 联系设备供应商 ⑤ 如负载受影响，启动应急预案（切换备用UPS/发电机）⑥ 通知客户 ⑦ 记录事件并编写报告。"
      }
    ]
  },
  {
    "id": 1393,
    "en": "Please acknowledge the alarm.",
    "cn": "请确认告警。",
    "ipa": "/pliːz əkˈnɒl.ɪdʒ ðə əˈlɑːrm/",
    "tags": [
      "第1393句",
      "确认告警",
      "★★★★★"
    ],
    "when": "检测到告警后，第一步是在BMS或UPS面板上确认（acknowledge）告警，表示运维人员已知晓并开始处理。",
    "words": [
      {
        "w": "acknowledge",
        "ipa": "/əkˈnɒl.ɪdʒ/",
        "pos": "动词",
        "cn": "确认；承认",
        "memory": "① ac- = 朝向（加强）；② knowledge = 知识/知晓。\nacknowledge = 使知晓 → 确认/承认（表示已经知道并接收）。\n在BMS中，acknowledge alarm = 确认告警（按确认键，停止蜂鸣器）。",
        "phonics": "ac 读 /ək/，know 读 /nɒl/，ledge 读 /ɪdʒ/。",
        "collocations": [
          [
            "acknowledge the alarm",
            "确认告警"
          ],
          [
            "acknowledge receipt",
            "确认收到"
          ],
          [
            "acknowledge the issue",
            "确认问题"
          ]
        ],
        "examples": [
          [
            "Please acknowledge all active alarms.",
            "请确认所有活动告警。"
          ],
          [
            "The alarm has been acknowledged.",
            "告警已确认。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "acknowledge the alarm",
        "ipa": "/əkˈnɒl.ɪdʒ ðə əˈlɑːrm/",
        "cn": "确认告警",
        "why": "acknowledge + alarm = 确认告警。在BMS/DCIM系统中，确认告警是标准操作流程的第一步，表示'我已知晓并开始处理'。"
      }
    ],
    "grammar": [
      {
        "q": "acknowledge 和 confirm 在告警场景中有什么区别？",
        "a": "acknowledge = 确认告警（在系统上按确认键，表示'我已知晓'）\nconfirm = 确认事实（核实某事是否属实）\n✅ Please acknowledge the alarm.（请确认告警 → 在BMS上按确认键）\n✅ Please confirm the alarm has cleared.（请确认告警已恢复 → 核实状态）\nacknowledge 是对告警的操作动作，confirm 是对状态的核实。"
      }
    ],
    "pattern": "Please acknowledge the + 对象",
    "patternExamples": [
      { en: "Please acknowledge all new alarms.", cn: "请确认所有新告警。", words: [{ w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Please acknowledge the notification.", cn: "请确认通知。", words: [] },
      { en: "Please acknowledge the handover items.", cn: "请确认交接项目。", words: [{ w: "handover", ipa: "/ˈhændoʊvər/", cn: "交接", phonics: "hand 读 /hænd/，over 读 /oʊvər/" }] }
    ],
    "thinking": "确认告警（acknowledge）是告警处理流程的第一步：\n① acknowledge（确认）→ 表示已知晓，停止蜂鸣器\n② investigate（调查）→ 排查告警原因\n③ resolve（解决）→ 处理告警根因\n④ clear（清除）→ 告警自动或手动清除\n确认告警不等于解决问题，只是表示'我知道了，开始处理'。",
    "pronunciation": "acknowledge 的 ac 读弱音 /ək/，know 读 /nɒl/。\n节奏：Please ac-KNOW-ledge ｜ the a-LARM.",
    "quiz": [
      {
        "q": "请确认所有新告警，怎么说？",
        "a": "Please acknowledge all new alarms."
      },
      {
        "q": "确认告警（acknowledge）和解决告警（resolve）有什么区别？",
        "a": "acknowledge = 确认告警（在系统上操作，表示'我已知晓并开始处理'，不等于问题解决）。resolve = 解决告警（处理了告警的根因，告警条件消除）。流程：先 acknowledge → 再 investigate → 再 resolve → 最后 clear。"
      }
    ]
  },
  {
    "id": 1394,
    "en": "Please investigate the alarm immediately.",
    "cn": "请立即调查告警原因。",
    "ipa": "/pliːz ɪnˈvɛs.tɪ.ɡeɪt ðə əˈlɑːrm ɪˈmiː.di.ət.li/",
    "tags": [
      "第1394句",
      "调查告警",
      "★★★★★"
    ],
    "when": "确认告警后，下一步是立即调查告警原因。investigate 是比 check 更深入、更系统的排查过程。",
    "words": [
      {
        "w": "investigate",
        "ipa": "/ɪnˈvɛs.tɪ.ɡeɪt/",
        "pos": "动词",
        "cn": "调查；排查",
        "memory": "① in- = 进入；② vestig = 追踪（拉丁语 vestigium = 足迹）；③ -ate = 动词后缀。\ninvestigate = 追踪足迹 → 调查/排查。\ninvestigate the alarm = 调查告警原因（系统性排查）。",
        "phonics": "in 读 /ɪn/，ves 读 /vɛs/，ti 读 /tɪ/，gate 读 /ɡeɪt/。",
        "collocations": [
          [
            "investigate the alarm",
            "调查告警"
          ],
          [
            "investigate the cause",
            "调查原因"
          ],
          [
            "investigate the issue",
            "排查问题"
          ]
        ],
        "examples": [
          [
            "Please investigate the root cause.",
            "请调查根本原因。"
          ],
          [
            "We are investigating the issue.",
            "我们正在排查问题。"
          ]
        ]
      },
      {
        "w": "immediately",
        "ipa": "/ɪˈmiː.di.ət.li/",
        "pos": "副词",
        "cn": "立即；马上",
        "memory": "① im- = 不（否定）；② mediate = 中间/中介。\nimmediately = 没有中间环节 → 立即/马上。\n强调紧迫性，不能拖延。",
        "phonics": "im 读 /ɪm/，me 读 /miː/，di 读 /di/，ate 读 /ət/，ly 读 /li/。",
        "collocations": [
          [
            "immediately",
            "立即"
          ],
          [
            "respond immediately",
            "立即响应"
          ],
          [
            "report immediately",
            "立即报告"
          ]
        ],
        "examples": [
          [
            "Please respond immediately.",
            "请立即响应。"
          ],
          [
            "Stop the operation immediately.",
            "立即停止操作。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "investigate the alarm",
        "ipa": "/ɪnˈvɛs.tɪ.ɡeɪt ðə əˈlɑːrm/",
        "cn": "调查告警原因",
        "why": "investigate + alarm = 调查告警。包括：查看告警详情、检查相关设备、分析告警原因、评估影响范围。"
      }
    ],
    "grammar": [
      {
        "q": "investigate 和 check 有什么区别？",
        "a": "investigate = 调查/排查（系统性、深入的排查，找根因）\ncheck = 检查（快速查看某项指标或状态）\n✅ Please investigate the alarm.（请调查告警 → 深入排查原因）\n✅ Please check the alarm panel.（请查看告警面板 → 快速看一下）\ninvestigate 更深入、更系统，用于需要找根因的场景。"
      }
    ],
    "pattern": "Please investigate the + 对象 + immediately",
    "patternExamples": [
      { en: "Please investigate the fault immediately.", cn: "请立即排查故障。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Please investigate the abnormality immediately.", cn: "请立即排查异常。", words: [{ w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Please investigate the outage immediately.", cn: "请立即排查中断原因。", words: [{ w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] }
    ],
    "thinking": "告警调查的标准流程：\n① 查看告警详情（时间/来源/描述）\n② 检查相关设备现场状态\n③ 查看历史告警记录（是否反复出现）\n④ 分析可能原因\n⑤ 评估影响范围和风险等级\n⑥ 制定处理方案\n调查结果需要记录在交接日志中，确保下一班了解情况。",
    "pronunciation": "investigate 的 in 读 /ɪn/，ves 读 /vɛs/，gate 读 /ɡeɪt/。\nimmediately 的 im 读 /ɪm/，me 读 /miː/。\n节奏：Please in-VES-ti-gate ｜ the a-LARM ｜ im-ME-di-ate-ly.",
    "quiz": [
      {
        "q": "请立即排查故障，怎么说？",
        "a": "Please investigate the fault immediately."
      },
      {
        "q": "告警调查的标准流程包括哪些步骤？",
        "a": "告警调查标准流程：① 查看告警详情（时间/来源/描述）② 检查相关设备现场状态 ③ 查看历史告警记录（是否反复出现）④ 分析可能原因 ⑤ 评估影响范围和风险等级 ⑥ 制定处理方案 ⑦ 记录调查结果。"
      }
    ]
  },
  {
    "id": 1395,
    "en": "The UPS has returned to normal operation.",
    "cn": "UPS已经恢复正常运行。",
    "ipa": "/ðə juː.piː.ɛs hæz rɪˈtɜːrnd tuː ˈnɔːr.məl ˌɒp.əˈreɪ.ʃən/",
    "tags": [
      "第1395句",
      "恢复正常运行",
      "★★★★★"
    ],
    "when": "告警处理完成或异常消除后，UPS恢复到正常运行模式。这是交接中最正面的状态汇报之一。",
    "words": [
      {
        "w": "returned",
        "ipa": "/rɪˈtɜːrnd/",
        "pos": "动词（过去分词）",
        "cn": "恢复到；返回",
        "memory": "① re- = 再次/回；② turn = 转。\nreturn = 转回来 → 恢复/返回。\nhas returned to = 已经恢复到（正常状态）。",
        "phonics": "re 读 /rɪ/，turn 读 /tɜːrn/，ed 读 /d/。",
        "collocations": [
          [
            "returned to normal",
            "恢复正常"
          ],
          [
            "returned to service",
            "恢复服务"
          ],
          [
            "returned to operation",
            "恢复运行"
          ]
        ],
        "examples": [
          [
            "The system has returned to normal.",
            "系统已恢复正常。"
          ],
          [
            "The UPS returned to online mode.",
            "UPS恢复到在线模式。"
          ]
        ]
      },
      {
        "w": "normal operation",
        "ipa": "/ˈnɔːr.məl ˌɒp.əˈreɪ.ʃən/",
        "pos": "名词短语",
        "cn": "正常运行",
        "memory": "① normal = 正常的；② operation = 运行/操作。\nnormal operation = 正常运行（设备按照设计参数稳定运行）。",
        "phonics": "nor 读 /nɔːr/，mal 读 /məl/。",
        "collocations": [
          [
            "normal operation",
            "正常运行"
          ],
          [
            "resume normal operation",
            "恢复正常运行"
          ],
          [
            "back to normal",
            "恢复正常"
          ]
        ],
        "examples": [
          [
            "The system is in normal operation.",
            "系统处于正常运行状态。"
          ],
          [
            "Resume normal operation.",
            "恢复正常运行。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "returned to normal operation",
        "ipa": "/rɪˈtɜːrnd tuː ˈnɔːr.məl ˌɒp.əˈreɪ.ʃən/",
        "cn": "恢复正常运行",
        "why": "returned + to + normal operation = 恢复到正常运行。这是交接汇报中的关键正面结论，表示问题已解决，系统恢复稳定。"
      }
    ],
    "grammar": [
      {
        "q": "has returned to 和 is back to 有什么区别？",
        "a": "has returned to = 已经恢复到（正式、专业，现在完成时）\nis back to = 回到（口语化）\n✅ The UPS has returned to normal operation.（UPS已恢复正常运行 → 正式汇报）\n✅ The UPS is back to normal.（UPS恢复正常了 → 口语表达）\n交接汇报和正式记录用 has returned to。"
      }
    ],
    "pattern": "The + 设备 + has returned to normal operation",
    "patternExamples": [
      { en: "The generator has returned to normal operation.", cn: "发电机已恢复正常运行。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }, { w: "operation", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }] },
      { en: "The cooling system has returned to normal operation.", cn: "冷却系统已恢复正常运行。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The power system has returned to normal operation.", cn: "供电系统已恢复正常运行。", words: [{ w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] }
    ],
    "thinking": "UPS恢复正常运行后的确认工作：\n① 确认UPS运行模式为正常（online）\n② 确认输入/输出电压/频率正常\n③ 确认负载率正常\n④ 确认所有告警已清除\n⑤ 确认电池在充电状态\n⑥ 记录恢复时间和处理过程\n确认后可以向客户和值班经理汇报'已恢复正常'。",
    "pronunciation": "returned 的 re 读 /rɪ/，turn 读 /tɜːrn/。\noperation 的 o 读弱音 /ɒ/。\n节奏：The UPS ｜ has re-TURNED ｜ to NOR-mal ｜ op-e-RA-tion.",
    "quiz": [
      {
        "q": "发电机已恢复正常运行，怎么说？",
        "a": "The generator has returned to normal operation."
      },
      {
        "q": "UPS恢复正常运行后需要确认哪些参数？",
        "a": "UPS恢复正常运行后需确认：① 运行模式为online ② 输入/输出电压正常 ③ 输出频率50Hz ④ 负载率在正常范围 ⑤ 所有告警已清除 ⑥ 电池处于充电状态 ⑦ 面板无异常显示。全部确认后方可汇报'已恢复正常'。"
      }
    ]
  },
  {
    "id": 1396,
    "en": "All UPS alarms have been cleared.",
    "cn": "所有UPS告警已经恢复。",
    "ipa": "/ɔːl juː.piː.ɛs əˈlɑːrmz hæv biːn klɪrd/",
    "tags": [
      "第1396句",
      "告警全部恢复",
      "★★★★★"
    ],
    "when": "告警处理完成后，确认所有告警已经清除（cleared）。这是交接中确认问题完全解决的标准表述。",
    "words": [
      {
        "w": "cleared",
        "ipa": "/klɪrd/",
        "pos": "动词（过去分词）",
        "cn": "已清除；已恢复",
        "memory": "① clear = 清除/清理；② cleared = 已清除（过去分词）。\n在告警管理中，cleared = 告警已恢复/已清除（告警条件不再满足）。\n告警可以自动清除（条件恢复）或手动清除。",
        "phonics": "clear 读 /klɪr/，ed 读 /d/。",
        "collocations": [
          [
            "alarms cleared",
            "告警已恢复"
          ],
          [
            "alarm cleared automatically",
            "告警自动恢复"
          ],
          [
            "clear the alarm",
            "清除告警"
          ]
        ],
        "examples": [
          [
            "All alarms have been cleared.",
            "所有告警已恢复。"
          ],
          [
            "The alarm cleared at 14:30.",
            "告警在14:30恢复。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "have been cleared",
        "ipa": "/hæv biːn klɪrd/",
        "cn": "已经被清除/恢复",
        "why": "have been + cleared = 已经被清除（现在完成时被动语态）。表示所有告警条件已不再满足，系统状态恢复正常。"
      }
    ],
    "grammar": [
      {
        "q": "cleared 和 resolved 在告警场景中有什么区别？",
        "a": "cleared = 已清除/已恢复（告警条件不再满足，告警从活动列表中消失）\nresolved = 已解决（根本原因已处理，不会再复发）\n✅ All alarms have been cleared.（所有告警已恢复 → 告警条件消除）\n✅ The root cause has been resolved.（根本原因已解决 → 不会再复发）\ncleared 是表面状态，resolved 是根本解决。告警 cleared 不等于问题 resolved。"
      }
    ],
    "pattern": "All + 设备 + alarms have been cleared",
    "patternExamples": [
      { en: "All generator alarms have been cleared.", cn: "所有发电机告警已恢复。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
      { en: "All cooling alarms have been cleared.", cn: "所有冷却告警已恢复。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
      { en: "All fire alarms have been cleared.", cn: "所有消防告警已恢复。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] }
    ],
    "thinking": "告警清除（cleared）后的确认工作：\n① 确认BMS/DCIM面板上无活动告警\n② 确认UPS面板无告警指示灯\n③ 确认告警蜂鸣器已停止\n④ 记录告警清除时间\n⑤ 评估是否需要继续监控\n注意：告警清除不等于问题根本解决，需要区分 cleared（表面恢复）和 resolved（根因解决）。",
    "pronunciation": "cleared 的 ear 读 /ɪr/。\n节奏：All UPS A-larms ｜ have been CLEARED.",
    "quiz": [
      {
        "q": "所有冷却告警已恢复，怎么说？",
        "a": "All cooling alarms have been cleared."
      },
      {
        "q": "告警 cleared 和 resolved 有什么区别？",
        "a": "cleared = 告警已清除/恢复（告警条件不再满足，从活动列表消失，但根因可能未处理）。resolved = 问题已解决（根本原因已处理，不会再复发）。例如：温度告警因空调恢复而 cleared，但空调故障根因未 resolved，可能再次触发。"
      }
    ]
  },
  {
    "id": 1397,
    "en": "Please continue monitoring the UPS for the next thirty minutes.",
    "cn": "请继续监控UPS三十分钟。",
    "ipa": "/pliːz kənˈtɪn.juː ˈmɒn.ɪ.tər.ɪŋ ðə juː.piː.ɛs fɔːr ðə nɛkst ˈθɜːr.ti ˈmɪn.ɪts/",
    "tags": [
      "第1397句",
      "持续监控",
      "★★★★★"
    ],
    "when": "告警恢复后，需要持续监控一段时间，确认问题不会复发。30分钟是常见的监控窗口期。",
    "words": [
      {
        "w": "continue",
        "ipa": "/kənˈtɪn.juː/",
        "pos": "动词",
        "cn": "继续",
        "memory": "① con- = 一起/加强；② tinue = 持有（拉丁语 tenere）。\ncontinue = 继续持有 → 继续。\ncontinue monitoring = 继续监控（保持当前的监控状态）。",
        "phonics": "con 读 /kən/，tin 读 /tɪn/，ue 读 /juː/。",
        "collocations": [
          [
            "continue monitoring",
            "继续监控"
          ],
          [
            "continue the work",
            "继续工作"
          ],
          [
            "continue the test",
            "继续测试"
          ]
        ],
        "examples": [
          [
            "Please continue monitoring the system.",
            "请继续监控系统。"
          ],
          [
            "Continue the maintenance work.",
            "继续维护工作。"
          ]
        ]
      },
      {
        "w": "monitoring",
        "ipa": "/ˈmɒn.ɪ.tər.ɪŋ/",
        "pos": "动词（现在分词）",
        "cn": "监控",
        "memory": "① monitor = 监控/监视；② monitoring = 正在监控。\ncontinue monitoring = 继续监控（持续观察设备状态）。",
        "phonics": "mon 读 /mɒn/，i 读 /ɪ/，tor 读 /tər/，ing 读 /ɪŋ/。",
        "collocations": [
          [
            "continue monitoring",
            "继续监控"
          ],
          [
            "remote monitoring",
            "远程监控"
          ],
          [
            "24/7 monitoring",
            "全天候监控"
          ]
        ],
        "examples": [
          [
            "We are monitoring the system closely.",
            "我们正在密切监控系统。"
          ],
          [
            "Continue monitoring for changes.",
            "继续监控是否有变化。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "for the next thirty minutes",
        "ipa": "/fɔːr ðə nɛkst ˈθɜːr.ti ˈmɪn.ɪts/",
        "cn": "在接下来的三十分钟内",
        "why": "for + the next + 时间 = 在接下来的…内。指定监控的时间窗口，确保在足够长的时间内观察设备稳定性。"
      }
    ],
    "grammar": [
      {
        "q": "continue monitoring 和 continue to monitor 有什么区别？",
        "a": "continue monitoring = 继续监控（continue + 动名词，强调延续当前动作）\ncontinue to monitor = 继续去监控（continue + 不定式，强调继续做某事）\n两者意思几乎相同，都正确。\n✅ Please continue monitoring the UPS.（请继续监控UPS）\n✅ Please continue to monitor the UPS.（请继续监控UPS）\n口语中 continue + 动名词更常见。"
      }
    ],
    "pattern": "Please continue monitoring the + 设备 + for the next + 时间",
    "patternExamples": [
      { en: "Please continue monitoring the generator for the next hour.", cn: "请继续监控发电机一小时。", words: [{ w: "continue", ipa: "/kənˈtɪnjuː/", cn: "继续", phonics: "con 读 /kən/，tinue 读 /tɪnjuː/" }, { w: "monitoring", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "Please continue monitoring the cooling system for the next two hours.", cn: "请继续监控冷却系统两小时。", words: [{ w: "continue", ipa: "/kənˈtɪnjuː/", cn: "继续", phonics: "con 读 /kən/，tinue 读 /tɪnjuː/" }, { w: "monitoring", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }] },
      { en: "Please continue monitoring the load for the rest of the shift.", cn: "请在剩余值班时间内继续监控负载。", words: [{ w: "continue", ipa: "/kənˈtɪnjuː/", cn: "继续", phonics: "con 读 /kən/，tinue 读 /tɪnjuː/" }, { w: "monitoring", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] }
    ],
    "thinking": "告警恢复后的持续监控是防止问题复发的重要措施。\n监控要点：① 观察是否有新的告警出现 ② 检查关键参数是否稳定 ③ 关注设备声音/温度是否有异常变化。\n监控时间建议：① Warning 告警 → 15-30分钟 ② Critical 告警 → 30-60分钟 ③ 反复出现的告警 → 延长至下一班交接。\n监控期间如发现告警复发，需要重新评估并可能升级处理。",
    "pronunciation": "continue 的 con 读弱音 /kən/，tinue 读 /tɪn.juː/。\nmonitoring 的 mon 读 /mɒn/。\n节奏：Please con-TIN-ue MON-i-tor-ing ｜ the UPS ｜ for the NEXT ｜ THIR-ty MIN-utes.",
    "quiz": [
      {
        "q": "请继续监控发电机一小时，怎么说？",
        "a": "Please continue monitoring the generator for the next hour."
      },
      {
        "q": "告警恢复后需要持续监控多长时间？",
        "a": "告警恢复后持续监控时间建议：① Warning 告警 → 15-30分钟 ② Critical 告警 → 30-60分钟 ③ 反复出现的告警 → 延长至下一班交接。如果监控期间无复发，可以正常交接。如果告警复发，需要重新评估处理。"
      }
    ]
  },
  {
    "id": 1398,
    "en": "Please inform the customer that the UPS maintenance has been completed.",
    "cn": "请通知客户UPS维护已经完成。",
    "ipa": "/pliːz ɪnˈfɔːrm ðə ˈkʌs.tə.mər ðæt ðə juː.piː.ɛs ˈmeɪn.tən.əns hæz biːn kəmˈpliː.tɪd/",
    "tags": [
      "第1398句",
      "通知客户",
      "★★★★★"
    ],
    "when": "UPS维护完成后，需要及时通知客户。客户有权了解影响其业务的操作已完成，这是服务透明度的体现。",
    "words": [
      {
        "w": "inform",
        "ipa": "/ɪnˈfɔːrm/",
        "pos": "动词",
        "cn": "通知；告知",
        "memory": "① in- = 进入；② form = 形成/告知。\ninform = 使知道 → 通知/告知。\ninform sb that ... = 通知某人…（正式通知用语）。",
        "phonics": "in 读 /ɪn/，form 读 /fɔːrm/，重音在第二音节。",
        "collocations": [
          [
            "inform the customer",
            "通知客户"
          ],
          [
            "inform the team",
            "通知团队"
          ],
          [
            "inform immediately",
            "立即通知"
          ]
        ],
        "examples": [
          [
            "Please inform the duty manager.",
            "请通知值班经理。"
          ],
          [
            "We will inform you of any changes.",
            "我们会通知您任何变化。"
          ]
        ]
      },
      {
        "w": "maintenance",
        "ipa": "/ˈmeɪn.tən.əns/",
        "pos": "名词",
        "cn": "维护；保养",
        "memory": "① main = 主要/保持；② -tenance = 持有（拉丁语 tenere）。\nmaintenance = 保持 → 维护/保养。\nUPS maintenance = UPS维护（包括预防性维护和纠正性维护）。",
        "phonics": "main 读 /meɪn/，ten 读 /tən/，ance 读 /əns/。",
        "collocations": [
          [
            "UPS maintenance",
            "UPS维护"
          ],
          [
            "preventive maintenance",
            "预防性维护"
          ],
          [
            "maintenance schedule",
            "维护计划"
          ]
        ],
        "examples": [
          [
            "The maintenance is scheduled for tomorrow.",
            "维护计划安排在明天。"
          ],
          [
            "Complete the maintenance report.",
            "完成维护报告。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "inform the customer that ...",
        "ipa": "/ɪnˈfɔːrm ðə ˈkʌs.tə.mər ðæt/",
        "cn": "通知客户…",
        "why": "inform + 对象 + that + 内容 = 通知某人某事。这是正式通知客户的标准句式，确保信息传递准确完整。"
      }
    ],
    "grammar": [
      {
        "q": "inform 和 notify 有什么区别？",
        "a": "inform = 通知/告知（正式但较温和，强调让对方了解情况）\nnotify = 通知（更正式、更书面化，常用于法律/合同场景）\n✅ Please inform the customer.（请通知客户 → 正式告知）\n✅ Please notify the vendor.（请通知供应商 → 正式书面通知）\n日常运维用 inform，合同/法律场景用 notify。"
      }
    ],
    "pattern": "Please inform the customer that + 完成事项",
    "patternExamples": [
      { en: "Please inform the customer that the switching has been completed.", cn: "请通知客户倒闸操作已完成。", words: [{ w: "switching", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "Please inform the customer that the alarm has been resolved.", cn: "请通知客户告警已解决。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Please inform the customer that the system has been restored.", cn: "请通知客户系统已恢复。", words: [{ w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] }
    ],
    "thinking": "通知客户是维护流程的最后一步，体现服务的专业性和透明度。\n通知内容应包括：① 维护项目（做了什么）② 完成情况（是否顺利）③ 当前状态（系统正常）④ 是否需要客户配合（如确认邮件）。\n通知方式：① 电话/bridge call（紧急/重要）② 邮件（正式记录）③ 工单系统更新（标准流程）。\n及时通知客户有助于建立信任，避免客户因信息不对称而产生不满。",
    "pronunciation": "inform 的 in 读 /ɪn/，form 读 /fɔːrm/。\nmaintenance 的 main 读 /meɪn/，ten 读 /tən/。\n节奏：Please in-FORM ｜ the CUS-to-mer ｜ that the UPS MAIN-te-nance ｜ has been com-PLE-ted.",
    "quiz": [
      {
        "q": "请通知客户告警已解决，怎么说？",
        "a": "Please inform the customer that the alarm has been resolved."
      },
      {
        "q": "通知客户维护完成时应包含哪些信息？",
        "a": "通知客户维护完成时应包含：① 维护项目名称（如UPS电池放电测试）② 完成情况（顺利完成/遇到问题）③ 当前系统状态（正常运行）④ 是否需要客户确认或配合 ⑤ 下次维护计划（如适用）。信息要简洁准确，避免技术细节过多。"
      }
    ]
  },
  {
    "id": 1399,
    "en": "Please update the maintenance report.",
    "cn": "请更新维护报告。",
    "ipa": "/pliːz ˈʌp.deɪt ðə ˈmeɪn.tən.əns rɪˈpɔːrt/",
    "tags": [
      "第1399句",
      "更新维护报告",
      "★★★★"
    ],
    "when": "维护完成后，需要更新维护报告，记录本次维护的内容、结果和发现的问题。维护报告是设备历史档案的重要组成部分。",
    "words": [
      {
        "w": "update",
        "ipa": "/ˈʌp.deɪt/",
        "pos": "动词",
        "cn": "更新",
        "memory": "① up = 向上/最新；② date = 日期。\nupdate = 更新到最新（动词/名词都可以）。\nupdate the report = 更新报告（将最新信息写入报告）。",
        "phonics": "up 读 /ʌp/，date 读 /deɪt/，重音在第一音节。",
        "collocations": [
          [
            "update the report",
            "更新报告"
          ],
          [
            "update the log",
            "更新日志"
          ],
          [
            "update the status",
            "更新状态"
          ]
        ],
        "examples": [
          [
            "Please update the maintenance log.",
            "请更新维护日志。"
          ],
          [
            "Update the alarm status.",
            "更新告警状态。"
          ]
        ]
      },
      {
        "w": "report",
        "ipa": "/rɪˈpɔːrt/",
        "pos": "名词",
        "cn": "报告",
        "memory": "① re- = 再次/回；② port = 带（拉丁语 portare）。\nreport = 带回来 → 报告/汇报。\nmaintenance report = 维护报告（记录维护内容和结果的正式文件）。",
        "phonics": "re 读 /rɪ/，port 读 /pɔːrt/，重音在第二音节。",
        "collocations": [
          [
            "maintenance report",
            "维护报告"
          ],
          [
            "incident report",
            "事件报告"
          ],
          [
            "daily report",
            "日报"
          ]
        ],
        "examples": [
          [
            "Submit the maintenance report.",
            "提交维护报告。"
          ],
          [
            "Read the incident report.",
            "阅读事件报告。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "maintenance report",
        "ipa": "/ˈmeɪn.tən.əns rɪˈpɔːrt/",
        "cn": "维护报告",
        "why": "maintenance + report = 维护报告。记录维护项目、时间、操作人员、结果和发现的问题，是设备历史档案的重要组成部分。"
      }
    ],
    "grammar": [
      {
        "q": "update 和 write 有什么区别？",
        "a": "update = 更新（在已有内容基础上添加最新信息）\nwrite = 写（从零开始创建内容）\n✅ Please update the maintenance report.（请更新维护报告 → 报告已有部分内容，需要补充）\n✅ Please write the incident report.（请编写事件报告 → 从头创建报告）\n维护报告通常是 update（在模板基础上填写），事件报告通常是 write（从头编写）。"
      }
    ],
    "pattern": "Please update the + 文档类型",
    "patternExamples": [
      { en: "Please update the operation log.", cn: "请更新操作日志。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "operation", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }] },
      { en: "Please update the handover checklist.", cn: "请更新交接清单。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "handover", ipa: "/ˈhændoʊvər/", cn: "交接", phonics: "hand 读 /hænd/，over 读 /oʊvər/" }] },
      { en: "Please update the equipment record.", cn: "请更新设备记录。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }] }
    ],
    "thinking": "维护报告是设备管理的重要文档，需要包含以下内容：\n① 维护项目（做了什么）② 维护时间（开始/结束）③ 操作人员 ④ 维护结果（正常/异常）⑤ 发现的问题 ⑥ 采取的措施 ⑦ 下次维护建议。\n维护报告的作用：① 设备历史追溯 ② 问题趋势分析 ③ 维护计划优化 ④ 合规审计依据。\n每完成一次维护都应更新报告，不要遗漏。",
    "pronunciation": "update 的 up 读短音 /ʌp/。\nreport 的 re 读 /rɪ/，port 读 /pɔːrt/。\n节奏：Please UP-date ｜ the MAIN-te-nance ｜ re-PORT.",
    "quiz": [
      {
        "q": "请更新操作日志，怎么说？",
        "a": "Please update the operation log."
      },
      {
        "q": "维护报告应包含哪些内容？",
        "a": "维护报告应包含：① 维护项目名称 ② 维护时间（开始/结束）③ 操作人员 ④ 维护结果（正常/异常）⑤ 发现的问题及描述 ⑥ 采取的措施 ⑦ 更换的备件（如有）⑧ 下次维护建议 ⑨ 相关照片/数据（如有）。"
      }
    ]
  },
  {
    "id": 1400,
    "en": "The UPS system is ready for normal operation.",
    "cn": "UPS系统已经恢复正常运行。",
    "ipa": "/ðə juː.piː.ɛs ˈsɪs.təm ɪz ˈrɛd.i fɔːr ˈnɔːr.məl ˌɒp.əˈreɪ.ʃən/",
    "tags": [
      "第1400句",
      "系统就绪",
      "★★★★★"
    ],
    "when": "所有维护、测试和告警处理工作完成后，最终确认UPS系统已准备就绪，可以投入正常运行。这是UPS维护流程的结束标志。",
    "words": [
      {
        "w": "ready",
        "ipa": "/ˈrɛd.i/",
        "pos": "形容词",
        "cn": "准备好的；就绪的",
        "memory": "① ready = 准备好的/就绪的。\nis ready for = 已准备好做某事/已就绪。\nready for normal operation = 已准备好正常运行（所有条件满足）。",
        "phonics": "read 读 /rɛd/，y 读 /i/。",
        "collocations": [
          [
            "ready for operation",
            "准备就绪运行"
          ],
          [
            "system ready",
            "系统就绪"
          ],
          [
            "ready to proceed",
            "准备继续"
          ]
        ],
        "examples": [
          [
            "The system is ready.",
            "系统已就绪。"
          ],
          [
            "Are we ready to start?",
            "我们准备好开始了吗？"
          ]
        ]
      },
      {
        "w": "for",
        "ipa": "/fɔːr/",
        "pos": "介词",
        "cn": "为了；用于",
        "memory": "① for = 为了/用于（表示目的或用途）。\nready for normal operation = 准备好用于正常运行（所有条件满足，可以投入运行）。",
        "phonics": "for 读 /fɔːr/。",
        "collocations": [
          [
            "ready for use",
            "准备使用"
          ],
          [
            "ready for service",
            "准备投入服务"
          ],
          [
            "ready for inspection",
            "准备检查"
          ]
        ],
        "examples": [
          [
            "The equipment is ready for use.",
            "设备已准备使用。"
          ],
          [
            "The room is ready for inspection.",
            "房间已准备好接受检查。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "ready for normal operation",
        "ipa": "/ˈrɛd.i fɔːr ˈnɔːr.məl ˌɒp.əˈreɪ.ʃən/",
        "cn": "准备好正常运行",
        "why": "ready + for + normal operation = 准备好正常运行。这是UPS维护流程的最终确认，表示所有条件满足，系统可以投入正常运行。"
      }
    ],
    "grammar": [
      {
        "q": "is ready for 和 has returned to 有什么区别？",
        "a": "is ready for = 已准备好（强调就绪状态，可以投入运行）\nhas returned to = 已经恢复到（强调从异常恢复到正常）\n✅ The UPS is ready for normal operation.（UPS已准备好正常运行 → 强调就绪）\n✅ The UPS has returned to normal operation.（UPS已恢复正常运行 → 强调恢复）\n两者都正确，ready for 更强调'准备好了可以用了'，returned to 更强调'从异常恢复到正常了'。"
      }
    ],
    "pattern": "The + 设备 + system is ready for normal operation",
    "patternExamples": [
      { en: "The generator system is ready for normal operation.", cn: "发电机系统已准备好正常运行。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The cooling system is ready for normal operation.", cn: "冷却系统已准备好正常运行。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The power distribution system is ready for normal operation.", cn: "配电系统已准备好正常运行。", words: [{ w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] }
    ],
    "thinking": "UPS系统就绪确认是维护流程的最后一个环节：\n确认清单：① UPS运行模式正常（online）② 输入/输出电压/频率正常 ③ 负载率在正常范围 ④ 电池状态正常（充电中）⑤ 所有告警已清除 ⑥ 维护报告已更新 ⑦ 客户已通知。\n全部确认后，UPS维护流程正式结束，系统恢复到可保护负载的正常状态。\n这句话标志着UPS运行与维护章节（1361-1400）的圆满完成。",
    "pronunciation": "ready 的 ea 读短音 /ɛ/：/ˈrɛd.i/。\noperation 的 o 读弱音 /ɒ/。\n节奏：The UPS SYS-tem ｜ is READ-y ｜ for NOR-mal ｜ op-e-RA-tion.",
    "quiz": [
      {
        "q": "发电机系统已准备好正常运行，怎么说？",
        "a": "The generator system is ready for normal operation."
      },
      {
        "q": "UPS系统就绪确认需要满足哪些条件？",
        "a": "UPS系统就绪确认需满足：① 运行模式为online ② 输入/输出电压/频率正常 ③ 负载率在正常范围（通常<80%）④ 电池状态正常且正在充电 ⑤ 所有告警已清除 ⑥ 维护报告已更新 ⑦ 客户已通知。全部确认后方可宣布系统就绪。"
      }
    ]
  }
];

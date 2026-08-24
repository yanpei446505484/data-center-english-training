// EXPORTS: MOCK_SENTENCES_PART19B

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART19B: ISentence[] = [
  {
    "id": 1421,
    "en": "Please start the online battery discharge test.",
    "cn": "请开始在线电池放电测试。",
    "ipa": "/pliːz stɑːrt ði ˈɒnlaɪn ˈbætəri dɪsˈtʃɑːrdʒ tɛst/",
    "tags": [
      "电池放电",
      "在线测试",
      "★★★★★"
    ],
    "when": "进行锂电池系统的在线放电测试，验证电池实际容量和性能。这是定期维护的重要环节，需要在系统运行状态下进行，不影响供电。",
    "words": [
      {
        "w": "online",
        "ipa": "/ˈɒnlaɪn/",
        "pos": "adj.",
        "cn": "在线的；在线状态下的",
        "memory": "on（在）+ line（线路）→ 在线的。在数据中心语境中，online test 指系统不停机、不断电的状态下进行的测试，与 offline test（离线测试）相对。",
        "phonics": "on 读 /ɒn/，line 读 /laɪn/",
        "collocations": [
          [
            "online test",
            "在线测试"
          ],
          [
            "online monitoring",
            "在线监控"
          ],
          [
            "online maintenance",
            "在线维护"
          ]
        ],
        "examples": [
          [
            "We perform online battery tests quarterly.",
            "我们每季度进行一次电池在线测试。"
          ],
          [
            "The UPS is online and protecting the load.",
            "UPS在线并保护负载。"
          ]
        ]
      },
      {
        "w": "discharge",
        "ipa": "/dɪsˈtʃɑːrdʒ/",
        "pos": "n.",
        "cn": "放电",
        "memory": "dis-（去除）+ charge（充电）→ 放电。电池放电是指电池向外释放电能的过程。放电测试用于验证电池的实际容量。",
        "phonics": "dis 读 /dɪs/，charge 读 /tʃɑːrdʒ/",
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
            "discharge capacity",
            "放电容量"
          ]
        ],
        "examples": [
          [
            "The battery discharge test takes 4 hours.",
            "电池放电测试需要4小时。"
          ],
          [
            "Monitor the discharge voltage carefully.",
            "仔细监测放电电压。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "online battery discharge test",
        "ipa": "/ˈɒnlaɪn ˈbætəri dɪsˈtʃɑːrdʒ tɛst/",
        "cn": "在线电池放电测试",
        "why": "强调测试在系统运行状态下进行，不断电、不影响业务。这是数据中心电池维护的标准做法。"
      }
    ],
    "grammar": [
      {
        "q": "start 和 begin 有什么区别？",
        "a": "两者都表示'开始'，在大多数情况下可以互换。start 更口语化，begin 更正式。在指令性语句中，start 更常用。例如：'Please start the test' 比 'Please begin the test' 更直接。"
      }
    ],
    "pattern": "Please start the + 测试类型",
    "patternExamples": [
      { en: "Please start the generator load test.", cn: "请开始发电机负载测试。", words: [{ w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
      { en: "Please start the UPS efficiency test.", cn: "请开始UPS效率测试。", words: [{ w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "efficiency", ipa: "/ɪˈfɪʃənsi/", cn: "效率", phonics: "ef 读 /ɪ/，ficiency 读 /fɪʃənsi/" }] },
      { en: "Please start the cooling system performance test.", cn: "请开始冷却系统性能测试。", words: [{ w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }, { w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] }
    ],
    "thinking": "在线放电测试是电池维护的关键环节。与离线测试不同，在线测试不需要将电池从系统中隔离，测试过程中电池仍然可以为负载提供备用电源。这确保了业务连续性，同时验证了电池的实际性能。",
    "pronunciation": "online 的 on 读 /ɒn/，不要读成 /ɑːn/。discharge 的 dis 读 /dɪs/，charge 读 /tʃɑːrdʒ/。",
    "quiz": [
      {
        "q": "在线测试和离线测试的主要区别是什么？",
        "a": "是否影响系统运行。在线测试（online test）在系统运行状态下进行，不断电、不影响业务；离线测试（offline test）需要将设备从系统中隔离，会影响系统运行。"
      }
    ]
  },
  {
    "id": 1422,
    "en": "The battery discharge test has started successfully.",
    "cn": "电池放电测试已经成功开始。",
    "ipa": "/ðə ˈbætəri dɪsˈtʃɑːrdʒ tɛst hæz ˈstɑːrtɪd səkˈsɛsfəli/",
    "tags": [
      "电池放电",
      "测试开始",
      "★★★★★"
    ],
    "when": "确认放电测试已成功启动，系统开始按照预设参数进行放电。这是测试流程的第一个关键节点。",
    "words": [
      {
        "w": "successfully",
        "ipa": "/səkˈsɛsfəli/",
        "pos": "adv.",
        "cn": "成功地",
        "memory": "success（成功）+ -ful（充满的）+ -ly（副词后缀）→ 成功地。在技术文档中，successfully 用于确认操作或流程按预期完成。",
        "phonics": "suc 读 /sək/，cess 读 /sɛs/，ful 读 /fəl/，ly 读 /li/",
        "collocations": [
          [
            "started successfully",
            "成功开始"
          ],
          [
            "completed successfully",
            "成功完成"
          ],
          [
            "connected successfully",
            "成功连接"
          ]
        ],
        "examples": [
          [
            "The system has started successfully.",
            "系统已成功启动。"
          ],
          [
            "The connection was established successfully.",
            "连接已成功建立。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "has started successfully",
        "ipa": "/hæz ˈstɑːrtɪd səkˈsɛsfəli/",
        "cn": "已经成功开始",
        "why": "现在完成时 + successfully，强调动作已经完成且结果符合预期。这是确认操作成功的标准表达。"
      }
    ],
    "grammar": [
      {
        "q": "has started 和 started 有什么区别？",
        "a": "has started 是现在完成时，强调动作对现在的影响（测试已经开始，正在进行中）；started 是一般过去时，只说明过去发生了这个动作。例如：'The test has started' 意味着测试现在开始并持续进行；'The test started at 9 AM' 只说明测试在上午9点开始。"
      }
    ],
    "pattern": "The + 操作 + has started successfully",
    "patternExamples": [
      { en: "The backup process has started successfully.", cn: "备份过程已成功开始。", words: [{ w: "backup", ipa: "/ˈbækʌp/", cn: "备份", phonics: "back 读 /bæk/，up 读 /ʌp/" }, { w: "started", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "The system upgrade has started successfully.", cn: "系统升级已成功开始。", words: [{ w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "started", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "The data migration has started successfully.", cn: "数据迁移已成功开始。", words: [{ w: "data", ipa: "/ˈdeɪtə/", cn: "数据", phonics: "da 读 /deɪ/，ta 读 /tə/" }, { w: "started", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] }
    ],
    "thinking": "确认测试成功开始是整个流程的第一步。这里的 successfully 很重要，它表示系统没有报错，测试按照预设参数正常启动。如果测试未能成功开始，需要立即排查原因。",
    "pronunciation": "successfully 的重音在第二音节 /səkˈsɛsfəli/。started 的 ed 读 /t/。",
    "quiz": [
      {
        "q": "如何表达'测试已经开始'？",
        "a": "The test has started（现在完成时）或 The test started（一般过去时）。两者都正确，但 has started 更强调对现在的影响（测试正在进行中）。"
      }
    ]
  },
  {
    "id": 1423,
    "en": "Please monitor the battery voltage during the test.",
    "cn": "请在测试过程中监测电池电压。",
    "ipa": "/pliːz ˈmɒnɪtər ðə ˈbætəri ˈvɒltɪdʒ ˈdjʊərɪŋ ðə tɛst/",
    "tags": [
      "电池放电",
      "监测电压",
      "★★★★★"
    ],
    "when": "放电测试过程中需要持续监测电池电压，确保电压在安全范围内。电压异常可能表明电池存在问题。",
    "words": [
      {
        "w": "monitor",
        "ipa": "/ˈmɒnɪtər/",
        "pos": "v.",
        "cn": "监测；监控",
        "memory": "monitor 源自拉丁语 monere（警告）。在数据中心语境中，monitor 指持续观察和记录系统参数，以便及时发现异常。",
        "phonics": "mon 读 /mɒn/，i 读 /ɪ/，tor 读 /tər/",
        "collocations": [
          [
            "monitor voltage",
            "监测电压"
          ],
          [
            "monitor temperature",
            "监测温度"
          ],
          [
            "monitor performance",
            "监测性能"
          ]
        ],
        "examples": [
          [
            "Please monitor the system 24/7.",
            "请24小时监控系统。"
          ],
          [
            "We monitor all critical parameters.",
            "我们监控所有关键参数。"
          ]
        ]
      },
      {
        "w": "voltage",
        "ipa": "/ˈvɒltɪdʒ/",
        "pos": "n.",
        "cn": "电压",
        "memory": "volt（伏特，电压单位）+ -age（名词后缀）→ 电压。电压是电池性能的关键指标之一。",
        "phonics": "volt 读 /vɒlt/，age 读 /ɪdʒ/",
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
            "output voltage",
            "输出电压"
          ]
        ],
        "examples": [
          [
            "The battery voltage is 48V.",
            "电池电压是48伏。"
          ],
          [
            "Check the voltage level.",
            "检查电压水平。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "during the test",
        "ipa": "/ˈdjʊərɪŋ ðə tɛst/",
        "cn": "在测试过程中",
        "why": "during 表示在某个时间段内。这里强调监测动作需要在整个测试过程中持续进行，而不是只在某个时间点。"
      }
    ],
    "grammar": [
      {
        "q": "monitor 和 check 有什么区别？",
        "a": "monitor 强调持续、长期的观察和记录；check 强调单次、具体的检查。例如：'Monitor the voltage during the test' 意味着在整个测试过程中持续观察电压变化；'Check the voltage now' 意味着现在立即查看一次电压值。"
      }
    ],
    "pattern": "Please monitor the + 参数 + during + 时间段",
    "patternExamples": [
      { en: "Please monitor the temperature during operation.", cn: "请在运行过程中监测温度。", words: [{ w: "monitor", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "operation", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }] },
      { en: "Please monitor the current during charging.", cn: "请在充电过程中监测电流。", words: [{ w: "monitor", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }] },
      { en: "Please monitor the load during the switch.", cn: "请在切换过程中监测负载。", words: [{ w: "monitor", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }, { w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] }
    ],
    "thinking": "放电测试过程中的电压监测至关重要。正常情况下，电池电压会随着放电逐渐下降，但下降速率应该平稳。如果电压突然大幅下降或波动剧烈，可能表明电池存在问题，需要立即停止测试。",
    "pronunciation": "monitor 的重音在第一音节 /ˈmɒnɪtər/。voltage 的 vol 读 /vɒl/，不要读成 /voʊl/。",
    "quiz": [
      {
        "q": "放电测试中监测电压的目的是什么？",
        "a": "以上都是。监测电压可以：1）确保电压在安全范围内，防止过放；2）记录电压变化数据，用于分析电池性能；3）通过电压变化计算电池实际容量。"
      }
    ]
  },
  {
    "id": 1424,
    "en": "Please monitor the battery current during the test.",
    "cn": "请在测试过程中监测电池电流。",
    "ipa": "/pliːz ˈmɒnɪtər ðə ˈbætəri ˈkɜːrənt ˈdjʊərɪŋ ðə tɛst/",
    "tags": [
      "电池放电",
      "监测电流",
      "★★★★★"
    ],
    "when": "放电测试过程中需要监测电池电流，确保放电电流在安全范围内。电流过大可能导致电池过热或损坏。",
    "words": [
      {
        "w": "current",
        "ipa": "/ˈkɜːrənt/",
        "pos": "n.",
        "cn": "电流",
        "memory": "current 作为名词表示'电流'，源自拉丁语 currere（流动）。电流是电池放电的重要参数，表示单位时间内流过电路的电荷量。",
        "phonics": "cur 读 /kɜːr/，rent 读 /rənt/",
        "collocations": [
          [
            "battery current",
            "电池电流"
          ],
          [
            "charging current",
            "充电电流"
          ],
          [
            "discharge current",
            "放电电流"
          ]
        ],
        "examples": [
          [
            "The charging current is 10A.",
            "充电电流是10安培。"
          ],
          [
            "Monitor the current carefully.",
            "仔细监测电流。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "battery current",
        "ipa": "/ˈbætəri ˈkɜːrənt/",
        "cn": "电池电流",
        "why": "电池电流包括充电电流和放电电流。放电测试中监测的是放电电流，需要确保不超过电池的最大放电速率。"
      }
    ],
    "grammar": [
      {
        "q": "current 作为名词和形容词有什么区别？",
        "a": "current 作为名词表示'电流'或'水流'；作为形容词表示'当前的、现在的'。例如：'battery current'（电池电流）中 current 是名词；'current status'（当前状态）中 current 是形容词。"
      }
    ],
    "pattern": "Please monitor the + 参数 + during the test",
    "patternExamples": [
      { en: "Please monitor the frequency during the test.", cn: "请在测试过程中监测频率。", words: [{ w: "monitor", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "Please monitor the power during the test.", cn: "请在测试过程中监测功率。", words: [{ w: "monitor", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "Please monitor the efficiency during the test.", cn: "请在测试过程中监测效率。", words: [{ w: "monitor", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "efficiency", ipa: "/ɪˈfɪʃənsi/", cn: "效率", phonics: "ef 读 /ɪ/，ficiency 读 /fɪʃənsi/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] }
    ],
    "thinking": "放电电流是评估电池性能的关键参数。通过监测放电电流，可以：1）确保电流不超过电池的最大放电速率（C-rate）；2）计算电池的实际放电容量（容量 = 电流 × 时间）；3）发现电流异常波动，及时识别电池问题。",
    "pronunciation": "current 的重音在第一音节 /ˈkɜːrənt/，不要读成 /ˈkʌrənt/。",
    "quiz": [
      {
        "q": "电池放电电流过大会导致什么问题？",
        "a": "以上都是。放电电流过大会导致：1）电池内部发热严重，温度升高；2）电池实际可用容量下降（Peukert效应）；3）加速电池老化，缩短使用寿命。"
      }
    ]
  },
  {
    "id": 1425,
    "en": "Please monitor the battery temperature continuously.",
    "cn": "请持续监测电池温度。",
    "ipa": "/pliːz ˈmɒnɪtər ðə ˈbætəri ˈtɛmpərətʃər kənˈtɪnjuəsli/",
    "tags": [
      "电池放电",
      "监测温度",
      "★★★★★"
    ],
    "when": "电池温度是安全监测的重要参数。放电过程中电池会发热，需要持续监测温度，防止过热引发安全问题。",
    "words": [
      {
        "w": "continuously",
        "ipa": "/kənˈtɪnjuəsli/",
        "pos": "adv.",
        "cn": "持续地；连续地",
        "memory": "continue（继续）+ -ous（形容词后缀）+ -ly（副词后缀）→ 持续地。强调不间断地进行某个动作。",
        "phonics": "con 读 /kən/，tin 读 /tɪn/，u 读 /ju/，ous 读 /əs/，ly 读 /li/",
        "collocations": [
          [
            "monitor continuously",
            "持续监测"
          ],
          [
            "operate continuously",
            "持续运行"
          ],
          [
            "charge continuously",
            "持续充电"
          ]
        ],
        "examples": [
          [
            "The system runs continuously 24/7.",
            "系统24小时持续运行。"
          ],
          [
            "Monitor the temperature continuously.",
            "持续监测温度。"
          ]
        ]
      },
      {
        "w": "temperature",
        "ipa": "/ˈtɛmpərətʃər/",
        "pos": "n.",
        "cn": "温度",
        "memory": "temper（调节）+ -ature（名词后缀）→ 温度。电池温度是影响性能和寿命的关键因素。",
        "phonics": "tem 读 /tɛm/，per 读 /pər/，a 读 /ə/，ture 读 /tʃər/",
        "collocations": [
          [
            "battery temperature",
            "电池温度"
          ],
          [
            "ambient temperature",
            "环境温度"
          ],
          [
            "operating temperature",
            "运行温度"
          ]
        ],
        "examples": [
          [
            "The battery temperature is 25°C.",
            "电池温度是25摄氏度。"
          ],
          [
            "High temperature reduces battery life.",
            "高温会缩短电池寿命。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "monitor continuously",
        "ipa": "/ˈmɒnɪtər kənˈtɪnjuəsli/",
        "cn": "持续监测",
        "why": "continuously 强调不间断地进行监测，与 periodically（定期监测）相对。对于关键安全参数，需要持续监测。"
      }
    ],
    "grammar": [
      {
        "q": "continuously 和 continually 有什么区别？",
        "a": "continuously 表示不间断地、持续地进行；continually 表示频繁地、反复地进行，但中间可能有短暂中断。例如：'Monitor continuously' 意味着一直不停地监测；'Check continually' 意味着频繁检查，但每次检查之间可能有间隔。"
      }
    ],
    "pattern": "Please monitor the + 参数 + continuously",
    "patternExamples": [
      { en: "Please monitor the pressure continuously.", cn: "请持续监测压力。", words: [{ w: "monitor", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }] },
      { en: "Please monitor the humidity continuously.", cn: "请持续监测湿度。", words: [{ w: "monitor", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "humidity", ipa: "/hjuːˈmɪdɪti/", cn: "湿度", phonics: "hu 读 /hjuː/，midity 读 /mɪdɪti/" }] },
      { en: "Please monitor the load continuously.", cn: "请持续监测负载。", words: [{ w: "monitor", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] }
    ],
    "thinking": "锂电池对温度非常敏感。放电过程中，电池内部化学反应会产生热量，导致温度升高。如果温度过高（通常超过45°C），可能引发热失控，导致电池损坏甚至起火。因此，放电测试中必须持续监测温度，一旦发现异常立即停止测试。",
    "pronunciation": "continuously 的重音在第二音节 /kənˈtɪnjuəsli/。temperature 的 tem 读 /tɛm/，不要读成 /tɪm/。",
    "quiz": [
      {
        "q": "锂电池的安全工作温度范围通常是多少？",
        "a": "15°C - 45°C。锂电池的最佳工作温度是20°C - 25°C，安全工作范围通常是15°C - 45°C。超过45°C可能引发热失控风险。"
      }
    ]
  },
  {
    "id": 1426,
    "en": "The battery performance is normal.",
    "cn": "电池性能正常。",
    "ipa": "/ðə ˈbætəri pərˈfɔːrməns ɪz ˈnɔːrməl/",
    "tags": [
      "电池放电",
      "性能正常",
      "★★★★★"
    ],
    "when": "放电测试过程中确认电池性能正常，各项指标符合预期。这是对测试结果的中期评估。",
    "words": [
      {
        "w": "performance",
        "ipa": "/pərˈfɔːrməns/",
        "pos": "n.",
        "cn": "性能；表现",
        "memory": "perform（执行、表现）+ -ance（名词后缀）→ 性能。在电池语境中，performance 指电池的综合表现，包括容量、效率、稳定性等。",
        "phonics": "per 读 /pər/，form 读 /fɔːrm/，ance 读 /əns/",
        "collocations": [
          [
            "battery performance",
            "电池性能"
          ],
          [
            "system performance",
            "系统性能"
          ],
          [
            "performance test",
            "性能测试"
          ]
        ],
        "examples": [
          [
            "The battery performance meets the specification.",
            "电池性能符合规格要求。"
          ],
          [
            "Performance degrades over time.",
            "性能会随时间下降。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "battery performance",
        "ipa": "/ˈbætəri pərˈfɔːrməns/",
        "cn": "电池性能",
        "why": "电池性能是综合指标，包括：容量（capacity）、效率（efficiency）、内阻（internal resistance）、循环寿命（cycle life）等。"
      }
    ],
    "grammar": [
      {
        "q": "performance 和 efficiency 有什么区别？",
        "a": "performance 是综合性能指标，包括多个方面；efficiency 专指效率，即输出与输入的比率。例如：电池 performance 包括容量、效率、稳定性等；电池 efficiency 专指充放电效率（输出能量/输入能量）。"
      }
    ],
    "pattern": "The + 设备/系统 + performance is + 状态",
    "patternExamples": [
      { en: "The UPS performance is excellent.", cn: "UPS性能优秀。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }] },
      { en: "The cooling system performance is stable.", cn: "冷却系统性能稳定。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "stable", ipa: "/ˈsteɪbl/", cn: "稳定", phonics: "sta 读 /steɪ/，ble 读 /bl/" }] },
      { en: "The generator performance is degraded.", cn: "发电机性能下降。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] }
    ],
    "thinking": "确认电池性能正常是放电测试的重要环节。性能正常意味着：1）放电曲线平稳，没有异常波动；2）电压下降速率符合预期；3）温度在安全范围内；4）没有异常噪音或气味。如果性能异常，需要进一步排查原因。",
    "pronunciation": "performance 的重音在第二音节 /pərˈfɔːrməns/。normal 的 nor 读 /nɔːr/，不要读成 /nɒr/。",
    "quiz": [
      {
        "q": "电池性能正常包括哪些方面？",
        "a": "以上都是。电池性能正常意味着：1）实际容量达到额定容量的一定比例（通常>80%）；2）充放电效率正常；3）温度在安全范围内且稳定；4）没有异常现象。"
      }
    ]
  },
  {
    "id": 1427,
    "en": "The battery capacity meets the requirement.",
    "cn": "电池容量符合要求。",
    "ipa": "/ðə ˈbætəri kəˈpæsɪti miːts ðə rɪˈkwaɪərmənt/",
    "tags": [
      "电池放电",
      "容量符合",
      "★★★★★"
    ],
    "when": "放电测试完成后，确认电池实际容量符合使用要求。这是判断电池是否可以继续使用的关键指标。",
    "words": [
      {
        "w": "capacity",
        "ipa": "/kəˈpæsɪti/",
        "pos": "n.",
        "cn": "容量",
        "memory": "cap（容纳）+ -acity（名词后缀）→ 容量。电池容量指电池能够存储和释放的电量，通常以安时（Ah）或千瓦时（kWh）表示。",
        "phonics": "ca 读 /kə/，pac 读 /pæs/，i 读 /ɪ/，ty 读 /ti/",
        "collocations": [
          [
            "battery capacity",
            "电池容量"
          ],
          [
            "rated capacity",
            "额定容量"
          ],
          [
            "actual capacity",
            "实际容量"
          ]
        ],
        "examples": [
          [
            "The battery capacity is 100Ah.",
            "电池容量是100安时。"
          ],
          [
            "Capacity decreases over time.",
            "容量会随时间下降。"
          ]
        ]
      },
      {
        "w": "requirement",
        "ipa": "/rɪˈkwaɪərmənt/",
        "pos": "n.",
        "cn": "要求；需求",
        "memory": "require（需要、要求）+ -ment（名词后缀）→ 要求。在技术规范中，requirement 指必须满足的标准或条件。",
        "phonics": "re 读 /rɪ/，quire 读 /kwaɪər/，ment 读 /mənt/",
        "collocations": [
          [
            "meet the requirement",
            "符合要求"
          ],
          [
            "technical requirement",
            "技术要求"
          ],
          [
            "safety requirement",
            "安全要求"
          ]
        ],
        "examples": [
          [
            "The system meets all requirements.",
            "系统符合所有要求。"
          ],
          [
            "Check the technical requirements.",
            "检查技术要求。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "meets the requirement",
        "ipa": "/miːts ðə rɪˈkwaɪərmənt/",
        "cn": "符合要求",
        "why": "meet 在这里表示'满足、达到'。meets the requirement 是确认测试结果符合预设标准的标准表达。"
      }
    ],
    "grammar": [
      {
        "q": "meet 和 satisfy 有什么区别？",
        "a": "两者都表示'满足'，但 meet 更强调达到某个标准或要求；satisfy 更强调使某人或某事物满意。例如：'The battery meets the requirement' 强调电池达到了技术要求；'The result satisfies the engineer' 强调结果让工程师满意。"
      }
    ],
    "pattern": "The + 指标 + meets the requirement",
    "patternExamples": [
      { en: "The voltage meets the requirement.", cn: "电压符合要求。", words: [{ w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }] },
      { en: "The efficiency meets the requirement.", cn: "效率符合要求。", words: [{ w: "efficiency", ipa: "/ɪˈfɪʃənsi/", cn: "效率", phonics: "ef 读 /ɪ/，ficiency 读 /fɪʃənsi/" }] },
      { en: "The response time meets the requirement.", cn: "响应时间符合要求。", words: [] }
    ],
    "thinking": "电池容量是判断电池是否可以继续使用的关键指标。通常，当电池实际容量下降到额定容量的80%以下时，需要考虑更换。放电测试的目的就是验证电池的实际容量是否仍然符合要求。",
    "pronunciation": "capacity 的重音在第二音节 /kəˈpæsɪti/。requirement 的重音在第二音节 /rɪˈkwaɪərmənt/。",
    "quiz": [
      {
        "q": "电池容量下降到额定容量的多少以下需要考虑更换？",
        "a": "80%。行业标准通常认为，当电池实际容量下降到额定容量的80%以下时，电池的性能已经明显下降，需要考虑更换。"
      }
    ]
  },
  {
    "id": 1428,
    "en": "The discharge test has been completed successfully.",
    "cn": "放电测试已经顺利完成。",
    "ipa": "/ðə dɪsˈtʃɑːrdʒ tɛst hæz biːn kəmˈpliːtɪd səkˈsɛsfəli/",
    "tags": [
      "电池放电",
      "测试完成",
      "★★★★★"
    ],
    "when": "放电测试完成，确认测试过程顺利，没有异常。这是测试流程的结束确认。",
    "words": [
      {
        "w": "completed",
        "ipa": "/kəmˈpliːtɪd/",
        "pos": "v.",
        "cn": "完成",
        "memory": "complete（完成）的过去分词。在被动语态中，has been completed 表示'已经被完成'。",
        "phonics": "com 读 /kəm/，plete 读 /pliːt/，ed 读 /ɪd/",
        "collocations": [
          [
            "completed successfully",
            "成功完成"
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
            "The maintenance has been completed.",
            "维护已经完成。"
          ],
          [
            "The inspection was completed yesterday.",
            "检查昨天完成了。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "has been completed successfully",
        "ipa": "/hæz biːn kəmˈpliːtɪd səkˈsɛsfəli/",
        "cn": "已经成功完成",
        "why": "现在完成时的被动语态 + successfully，强调动作已经完成且结果符合预期。这是确认操作成功的标准表达。"
      }
    ],
    "grammar": [
      {
        "q": "has been completed 和 is completed 有什么区别？",
        "a": "has been completed 是现在完成时的被动语态，强调动作在过去某个时间完成，对现在有影响；is completed 是一般现在时的被动语态，强调当前状态。例如：'The test has been completed' 强调测试已经完成这个事实；'The test is completed' 强调测试现在处于完成状态。"
      }
    ],
    "pattern": "The + 操作 + has been completed successfully",
    "patternExamples": [
      { en: "The upgrade has been completed successfully.", cn: "升级已成功完成。", words: [] },
      { en: "The migration has been completed successfully.", cn: "迁移已成功完成。", words: [] },
      { en: "The backup has been completed successfully.", cn: "备份已成功完成。", words: [{ w: "backup", ipa: "/ˈbækʌp/", cn: "备份", phonics: "back 读 /bæk/，up 读 /ʌp/" }] }
    ],
    "thinking": "确认测试成功完成是整个流程的关键节点。这里的 successfully 表示：1）测试按照预设参数完成；2）过程中没有异常或中断；3）所有数据都已正确记录。如果测试未能成功完成，需要分析原因并重新测试。",
    "pronunciation": "completed 的 ed 读 /ɪd/，不要读成 /t/。successfully 的重音在第二音节。",
    "quiz": [
      {
        "q": "如何表达'测试已经完成'？",
        "a": "The test has been completed（现在完成时被动语态）或 The test completed（一般过去时）。has been completed 更正式，强调被动（测试被完成）。"
      }
    ]
  },
  {
    "id": 1429,
    "en": "Please stop the discharge test.",
    "cn": "请停止放电测试。",
    "ipa": "/pliːz stɒp ðə dɪsˈtʃɑːrdʒ tɛst/",
    "tags": [
      "电池放电",
      "停止测试",
      "★★★★★"
    ],
    "when": "放电测试完成或发现异常时，需要停止测试。这是测试流程的控制指令。",
    "words": [
      {
        "w": "stop",
        "ipa": "/stɒp/",
        "pos": "v.",
        "cn": "停止",
        "memory": "stop 表示使某个动作或过程终止。在操作指令中，stop 用于立即终止正在进行的测试或操作。",
        "phonics": "st 读 /st/，op 读 /ɒp/",
        "collocations": [
          [
            "stop the test",
            "停止测试"
          ],
          [
            "stop the operation",
            "停止操作"
          ],
          [
            "emergency stop",
            "紧急停止"
          ]
        ],
        "examples": [
          [
            "Please stop the generator immediately.",
            "请立即停止发电机。"
          ],
          [
            "Stop the system if there is an alarm.",
            "如果有告警，停止系统。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "stop the discharge test",
        "ipa": "/stɒp ðə dɪsˈtʃɑːrdʒ tɛst/",
        "cn": "停止放电测试",
        "why": "stop 是直接的指令动词，用于立即终止测试。与 pause（暂停）不同，stop 表示完全终止，不会继续。"
      }
    ],
    "grammar": [
      {
        "q": "stop 和 pause 有什么区别？",
        "a": "stop 表示完全终止，不会继续；pause 表示暂时停止，之后会继续。例如：'Stop the test' 意味着测试结束，不会再继续；'Pause the test' 意味着测试暂时停止，稍后会继续。"
      }
    ],
    "pattern": "Please stop the + 操作",
    "patternExamples": [
      { en: "Please stop the charging process.", cn: "请停止充电过程。", words: [{ w: "stop", ipa: "/stɒp/", cn: "停止", phonics: "stop 读 /stɒp/" }] },
      { en: "Please stop the cooling system.", cn: "请停止冷却系统。", words: [{ w: "stop", ipa: "/stɒp/", cn: "停止", phonics: "stop 读 /stɒp/" }, { w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please stop the data collection.", cn: "请停止数据采集。", words: [{ w: "stop", ipa: "/stɒp/", cn: "停止", phonics: "stop 读 /stɒp/" }, { w: "data", ipa: "/ˈdeɪtə/", cn: "数据", phonics: "da 读 /deɪ/，ta 读 /tə/" }] }
    ],
    "thinking": "停止放电测试可能发生在两种情况：1）测试正常完成，需要停止并保存数据；2）测试过程中发现异常（如温度过高、电压异常），需要立即停止以确保安全。在任何情况下，停止测试后都需要检查电池状态，确认安全。",
    "pronunciation": "stop 的 o 读 /ɒ/，不要读成 /ɑː/。discharge 的 dis 读 /dɪs/。",
    "quiz": [
      {
        "q": "在什么情况下需要立即停止放电测试？",
        "a": "以上都是。需要立即停止放电测试的情况包括：1）电池温度超过安全范围（通常>45°C）；2）电压异常下降或波动；3）发现异常气味、烟雾或噪音；4）其他任何安全隐患。"
      }
    ]
  },
  {
    "id": 1430,
    "en": "Please restore the battery charging mode.",
    "cn": "请恢复电池充电模式。",
    "ipa": "/pliːz rɪˈstɔːr ðə ˈbætəri ˈtʃɑːrdʒɪŋ məʊd/",
    "tags": [
      "电池放电",
      "恢复充电",
      "★★★★★"
    ],
    "when": "放电测试完成后，需要将电池恢复到充电模式，为电池补充电量，确保备用电源系统随时可用。",
    "words": [
      {
        "w": "restore",
        "ipa": "/rɪˈstɔːr/",
        "pos": "v.",
        "cn": "恢复",
        "memory": "re-（再次）+ store（存储）→ 恢复到原来的状态。在技术语境中，restore 表示将系统或设备恢复到之前的正常工作状态。",
        "phonics": "re 读 /rɪ/，store 读 /stɔːr/",
        "collocations": [
          [
            "restore mode",
            "恢复模式"
          ],
          [
            "restore operation",
            "恢复运行"
          ],
          [
            "restore to normal",
            "恢复正常"
          ]
        ],
        "examples": [
          [
            "Please restore the system to normal operation.",
            "请将系统恢复到正常运行。"
          ],
          [
            "The power has been restored.",
            "电力已经恢复。"
          ]
        ]
      },
      {
        "w": "charging",
        "ipa": "/ˈtʃɑːrdʒɪŋ/",
        "pos": "n.",
        "cn": "充电",
        "memory": "charge（充电）的动名词形式。charging mode 表示充电模式，是电池从外部电源接收电能的过程。",
        "phonics": "char 读 /tʃɑːr/，ging 读 /dʒɪŋ/",
        "collocations": [
          [
            "charging mode",
            "充电模式"
          ],
          [
            "charging current",
            "充电电流"
          ],
          [
            "charging time",
            "充电时间"
          ]
        ],
        "examples": [
          [
            "The battery is in charging mode.",
            "电池处于充电模式。"
          ],
          [
            "Charging takes about 8 hours.",
            "充电大约需要8小时。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "restore the battery charging mode",
        "ipa": "/rɪˈstɔːr ðə ˈbætəri ˈtʃɑːrdʒɪŋ məʊd/",
        "cn": "恢复电池充电模式",
        "why": "放电测试后，电池需要充电以补充电量。restore charging mode 表示将系统从放电模式切换回充电模式。"
      }
    ],
    "grammar": [
      {
        "q": "restore 和 recover 有什么区别？",
        "a": "restore 强调恢复到之前的正常状态或配置；recover 强调从故障或损失中恢复。例如：'Restore the charging mode' 表示恢复到充电模式（之前就是这个模式）；'Recover from the failure' 表示从故障中恢复。"
      }
    ],
    "pattern": "Please restore the + 系统/设备 + to + 状态",
    "patternExamples": [
      { en: "Please restore the UPS to normal mode.", cn: "请将UPS恢复到正常模式。", words: [{ w: "restore", ipa: "/rɪˈstɔːr/", cn: "恢复", phonics: "re 读 /rɪ/，store 读 /stɔːr/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "Please restore the system to the previous configuration.", cn: "请将系统恢复到之前的配置。", words: [{ w: "restore", ipa: "/rɪˈstɔːr/", cn: "恢复", phonics: "re 读 /rɪ/，store 读 /stɔːr/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please restore the cooling system to full capacity.", cn: "请将冷却系统恢复到满容量。", words: [{ w: "restore", ipa: "/rɪˈstɔːr/", cn: "恢复", phonics: "re 读 /rɪ/，store 读 /stɔːr/" }, { w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] }
    ],
    "thinking": "放电测试完成后，必须及时恢复电池充电模式。这是因为：1）电池需要补充电量，确保备用电源系统随时可用；2）长时间处于放电状态会损害电池；3）充电模式是电池的正常工作状态。恢复充电后，需要监测充电电流和电压，确保充电过程正常。",
    "pronunciation": "restore 的重音在第二音节 /rɪˈstɔːr/。charging 的 char 读 /tʃɑːr/，不要读成 /tʃær/。",
    "quiz": [
      {
        "q": "放电测试完成后为什么要恢复充电模式？",
        "a": "以上都是。恢复充电模式的目的：1）为电池补充电量；2）避免电池长时间处于低电量状态，保护电池寿命；3）确保备用电源系统随时可用，满足应急需求。"
      }
    ]
  },
  {
    "id": 1431,
    "en": "A battery communication alarm has been detected.",
    "cn": "检测到电池通信告警。",
    "ipa": "/ə ˈbætəri kəˌmjuːnɪˈkeɪʃən ˈælɑːrm hæz biːn dɪˈtɛktɪd/",
    "tags": [
      "电池告警",
      "通信告警",
      "★★★★★"
    ],
    "when": "电池管理系统（BMS）与监控系统之间的通信出现异常。通信告警可能导致无法获取电池的实时状态信息。",
    "words": [
      {
        "w": "communication",
        "ipa": "/kəˌmjuːnɪˈkeɪʃən/",
        "pos": "n.",
        "cn": "通信；通讯",
        "memory": "communicate（通信）+ -ion（名词后缀）→ 通信。在电池系统中，communication 指BMS与监控系统之间的数据传输。",
        "phonics": "com 读 /kə/，mu 读 /mjuː/，ni 读 /nɪ/，ca 读 /keɪ/，tion 读 /ʃən/",
        "collocations": [
          [
            "communication alarm",
            "通信告警"
          ],
          [
            "communication link",
            "通信链路"
          ],
          [
            "communication protocol",
            "通信协议"
          ]
        ],
        "examples": [
          [
            "Check the communication link.",
            "检查通信链路。"
          ],
          [
            "Communication has been restored.",
            "通信已恢复。"
          ]
        ]
      },
      {
        "w": "detected",
        "ipa": "/dɪˈtɛktɪd/",
        "pos": "v.",
        "cn": "检测到",
        "memory": "detect（检测）+ -ed（过去分词）→ 检测到。在告警系统中，detected 表示系统检测到了异常情况。",
        "phonics": "de 读 /dɪ/，tect 读 /tɛkt/，ed 读 /ɪd/",
        "collocations": [
          [
            "alarm detected",
            "检测到告警"
          ],
          [
            "fault detected",
            "检测到故障"
          ],
          [
            "anomaly detected",
            "检测到异常"
          ]
        ],
        "examples": [
          [
            "A fault has been detected.",
            "检测到一个故障。"
          ],
          [
            "No anomalies were detected.",
            "未检测到异常。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "has been detected",
        "ipa": "/hæz biːn dɪˈtɛktɪd/",
        "cn": "已经被检测到",
        "why": "现在完成时的被动语态，强调告警已经被系统检测到，需要立即关注和处理。"
      }
    ],
    "grammar": [
      {
        "q": "has been detected 和 is detected 有什么区别？",
        "a": "has been detected 是现在完成时，强调动作在过去某个时间发生，对现在有影响（告警已经检测到，现在需要处理）；is detected 是一般现在时，强调当前状态或习惯性动作。例如：'An alarm has been detected' 强调告警刚刚被检测到；'Alarms are detected automatically' 强调告警是自动检测的（一般性描述）。"
      }
    ],
    "pattern": "A + 告警类型 + has been detected",
    "patternExamples": [
      { en: "A temperature alarm has been detected.", cn: "检测到温度告警。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A voltage alarm has been detected.", cn: "检测到电压告警。", words: [{ w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A current alarm has been detected.", cn: "检测到电流告警。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] }
    ],
    "thinking": "电池通信告警是一个重要的系统级告警。通信故障可能导致：1）无法获取电池的实时状态（电压、电流、温度等）；2）无法远程控制电池；3）无法及时发现其他电池问题。因此，通信告警需要立即处理，恢复通信链路。",
    "pronunciation": "communication 的重音在第四音节 /kəˌmjuːnɪˈkeɪʃən/。detected 的 de 读 /dɪ/，不要读成 /diː/。",
    "quiz": [
      {
        "q": "电池通信告警可能导致什么问题？",
        "a": "以上都是。电池通信告警意味着BMS与监控系统之间的通信中断，可能导致：1）无法获取电池的实时状态数据；2）无法远程控制电池（如切入/切出）；3）无法及时发现和处理其他电池问题。"
      }
    ]
  },
  {
    "id": 1432,
    "en": "A battery temperature alarm has been detected.",
    "cn": "检测到电池温度告警。",
    "ipa": "/ə ˈbætəri ˈtɛmpərətʃər ˈælɑːrm hæz biːn dɪˈtɛktɪd/",
    "tags": [
      "电池告警",
      "温度告警",
      "★★★★★"
    ],
    "when": "电池温度超出安全范围，触发温度告警。这是一个严重的安全告警，需要立即处理。",
    "words": [
      {
        "w": "temperature",
        "ipa": "/ˈtɛmpərətʃər/",
        "pos": "n.",
        "cn": "温度",
        "memory": "temper（调节）+ -ature（名词后缀）→ 温度。电池温度是影响性能和安全的关键参数。",
        "phonics": "tem 读 /tɛm/，per 读 /pər/，a 读 /ə/，ture 读 /tʃər/",
        "collocations": [
          [
            "temperature alarm",
            "温度告警"
          ],
          [
            "temperature sensor",
            "温度传感器"
          ],
          [
            "temperature range",
            "温度范围"
          ]
        ],
        "examples": [
          [
            "The temperature is too high.",
            "温度太高。"
          ],
          [
            "Check the temperature sensor.",
            "检查温度传感器。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "battery temperature alarm",
        "ipa": "/ˈbætəri ˈtɛmpərətʃər ˈælɑːrm/",
        "cn": "电池温度告警",
        "why": "电池温度告警通常分为两级：高温告警（high temperature alarm）和低温告警（low temperature alarm）。高温告警更为严重，可能引发热失控。"
      }
    ],
    "grammar": [
      {
        "q": "alarm 和 warning 有什么区别？",
        "a": "alarm 通常指需要立即处理的严重告警；warning 指需要注意但不一定需要立即处理的警告。例如：'temperature alarm' 表示温度已经超出安全范围，需要立即处理；'temperature warning' 表示温度接近安全范围上限，需要注意但还不需要立即处理。"
      }
    ],
    "pattern": "A + 参数 + alarm has been detected",
    "patternExamples": [
      { en: "A pressure alarm has been detected.", cn: "检测到压力告警。", words: [{ w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A humidity alarm has been detected.", cn: "检测到湿度告警。", words: [{ w: "humidity", ipa: "/hjuːˈmɪdɪti/", cn: "湿度", phonics: "hu 读 /hjuː/，midity 读 /mɪdɪti/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A frequency alarm has been detected.", cn: "检测到频率告警。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] }
    ],
    "thinking": "电池温度告警是一个严重的安全告警。锂电池对温度非常敏感，温度过高可能导致：1）电池性能下降；2）电池寿命缩短；3）热失控，甚至起火。因此，温度告警需要立即处理：1）检查冷却系统；2）降低负载；3）必要时隔离问题电池。",
    "pronunciation": "temperature 的 tem 读 /tɛm/，不要读成 /tɪm/。alarm 的重音在第二音节 /əˈlɑːrm/。",
    "quiz": [
      {
        "q": "电池温度告警应该如何处理？",
        "a": "以上都是。处理电池温度告警的步骤：1）检查冷却系统是否正常工作；2）降低电池负载，减少发热；3）如果温度持续升高，必要时隔离问题电池，防止影响其他电池。"
      }
    ]
  },
  {
    "id": 1433,
    "en": "A battery voltage alarm has been detected.",
    "cn": "检测到电池电压告警。",
    "ipa": "/ə ˈbætəri ˈvɒltɪdʒ ˈælɑːrm hæz biːn dɪˈtɛktɪd/",
    "tags": [
      "电池告警",
      "电压告警",
      "★★★★★"
    ],
    "when": "电池电压超出安全范围，触发电压告警。电压过高或过低都会影响电池性能和安全。",
    "words": [
      {
        "w": "voltage",
        "ipa": "/ˈvɒltɪdʒ/",
        "pos": "n.",
        "cn": "电压",
        "memory": "volt（伏特）+ -age（名词后缀）→ 电压。电池电压是电池性能的关键指标。",
        "phonics": "volt 读 /vɒlt/，age 读 /ɪdʒ/",
        "collocations": [
          [
            "voltage alarm",
            "电压告警"
          ],
          [
            "voltage level",
            "电压水平"
          ],
          [
            "voltage range",
            "电压范围"
          ]
        ],
        "examples": [
          [
            "The voltage is too low.",
            "电压太低。"
          ],
          [
            "Check the voltage level.",
            "检查电压水平。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "battery voltage alarm",
        "ipa": "/ˈbætəri ˈvɒltɪdʒ ˈælɑːrm/",
        "cn": "电池电压告警",
        "why": "电池电压告警包括过压告警（overvoltage alarm）和欠压告警（undervoltage alarm）。过压可能损坏电池，欠压可能导致电池过放。"
      }
    ],
    "grammar": [
      {
        "q": "overvoltage 和 undervoltage 有什么区别？",
        "a": "overvoltage 指电压过高，超过安全上限；undervoltage 指电压过低，低于安全下限。两者都会影响电池性能和安全。例如：锂电池过压可能导致电池损坏甚至起火；欠压可能导致电池过放，损坏电池。"
      }
    ],
    "pattern": "A + 电气参数 + alarm has been detected",
    "patternExamples": [
      { en: "A current alarm has been detected.", cn: "检测到电流告警。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A power alarm has been detected.", cn: "检测到功率告警。", words: [{ w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A frequency alarm has been detected.", cn: "检测到频率告警。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] }
    ],
    "thinking": "电池电压告警需要区分是过压还是欠压：1）过压（overvoltage）：可能是充电电流过大或充电器故障，需要立即停止充电；2）欠压（undervoltage）：可能是放电过度或负载过大，需要立即停止放电并充电。无论哪种情况，都需要立即处理，防止电池损坏。",
    "pronunciation": "voltage 的 vol 读 /vɒl/，不要读成 /voʊl/。alarm 的 a 读 /ə/，larm 读 /lɑːrm/。",
    "quiz": [
      {
        "q": "电池电压过低（欠压）可能导致什么问题？",
        "a": "以上都是。电池电压过低可能导致：1）电池过放，损害电池化学结构；2）电池永久性损坏，无法再充电；3）系统无法从电池获取足够的电力，无法启动。"
      }
    ]
  },
  {
    "id": 1434,
    "en": "Please acknowledge the battery alarm.",
    "cn": "请确认电池告警。",
    "ipa": "/pliːz əkˈnɒlɪdʒ ðə ˈbætəri ˈælɑːrm/",
    "tags": [
      "电池告警",
      "确认告警",
      "★★★★★"
    ],
    "when": "收到电池告警后，需要确认告警，表示已经注意到告警信息，准备进行处理。",
    "words": [
      {
        "w": "acknowledge",
        "ipa": "/əkˈnɒlɪdʒ/",
        "pos": "v.",
        "cn": "确认；承认",
        "memory": "ac-（加强）+ knowledge（知识）→ 确认。在告警系统中，acknowledge 表示确认已收到告警信息，准备处理。",
        "phonics": "ac 读 /ək/，know 读 /nɒ/，ledge 读 /lɪdʒ/",
        "collocations": [
          [
            "acknowledge alarm",
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
            "Please acknowledge the alarm immediately.",
            "请立即确认告警。"
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
        "ipa": "/əkˈnɒlɪdʒ ðə ˈælɑːrm/",
        "cn": "确认告警",
        "why": "acknowledge 在告警系统中是一个重要操作，表示操作人员已经注意到告警，准备处理。确认后，告警状态会从'未确认'变为'已确认'。"
      }
    ],
    "grammar": [
      {
        "q": "acknowledge 和 confirm 有什么区别？",
        "a": "acknowledge 表示确认已收到或注意到某个信息；confirm 表示确认某个事实或状态是正确的。例如：'Acknowledge the alarm' 表示确认已收到告警信息；'Confirm the alarm is cleared' 表示确认告警已经清除。"
      }
    ],
    "pattern": "Please acknowledge the + 告警/消息",
    "patternExamples": [
      { en: "Please acknowledge the system alarm.", cn: "请确认系统告警。", words: [{ w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Please acknowledge the notification.", cn: "请确认通知。", words: [] },
      { en: "Please acknowledge the message.", cn: "请确认消息。", words: [] }
    ],
    "thinking": "确认告警是告警处理流程的第一步。确认告警的作用：1）告知系统操作人员已经注意到告警；2）停止告警的声光提示（但告警本身仍然存在）；3）记录告警确认时间和操作人员。确认告警后，需要立即开始调查和处理。",
    "pronunciation": "acknowledge 的重音在第二音节 /əkˈnɒlɪdʒ/。acknowledge 的 k 不发音。",
    "quiz": [
      {
        "q": "确认告警（acknowledge）后，告警会怎样？",
        "a": "告警状态变为'已确认'，但告警仍然存在。确认告警只是表示操作人员已经注意到告警，告警本身并没有被解决，需要进一步调查和处理。"
      }
    ]
  },
  {
    "id": 1435,
    "en": "Please investigate the battery alarm immediately.",
    "cn": "请立即调查电池告警原因。",
    "ipa": "/pliːz ɪnˈvɛstɪɡeɪt ðə ˈbætəri ˈælɑːrm ɪˈmiːdiətli/",
    "tags": [
      "电池告警",
      "调查原因",
      "★★★★★"
    ],
    "when": "确认告警后，需要立即调查告警原因，找出问题的根本原因，以便采取正确的处理措施。",
    "words": [
      {
        "w": "investigate",
        "ipa": "/ɪnˈvɛstɪɡeɪt/",
        "pos": "v.",
        "cn": "调查；研究",
        "memory": "in-（进入）+ vestigate（追踪）→ 调查。investigate 指系统地调查某个问题，找出根本原因。",
        "phonics": "in 读 /ɪn/，ves 读 /vɛs/，ti 读 /tɪ/，gate 读 /ɡeɪt/",
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
            "调查问题"
          ]
        ],
        "examples": [
          [
            "We need to investigate the root cause.",
            "我们需要调查根本原因。"
          ],
          [
            "The engineer is investigating the fault.",
            "工程师正在调查故障。"
          ]
        ]
      },
      {
        "w": "immediately",
        "ipa": "/ɪˈmiːdiətli/",
        "pos": "adv.",
        "cn": "立即；马上",
        "memory": "immediate（立即的）+ -ly（副词后缀）→ 立即。强调需要马上行动，不能延迟。",
        "phonics": "im 读 /ɪm/，me 读 /miː/，di 读 /dɪ/，ate 读 /ət/，ly 读 /li/",
        "collocations": [
          [
            "investigate immediately",
            "立即调查"
          ],
          [
            "respond immediately",
            "立即响应"
          ],
          [
            "take action immediately",
            "立即采取行动"
          ]
        ],
        "examples": [
          [
            "Please respond immediately.",
            "请立即响应。"
          ],
          [
            "The issue needs to be fixed immediately.",
            "这个问题需要立即修复。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "investigate immediately",
        "ipa": "/ɪnˈvɛstɪɡeɪt ɪˈmiːdiətli/",
        "cn": "立即调查",
        "why": "immediately 强调紧迫性，表示不能延迟，需要马上开始调查。对于严重告警，立即调查是必要的。"
      }
    ],
    "grammar": [
      {
        "q": "investigate 和 check 有什么区别？",
        "a": "investigate 指系统地、深入地调查问题，找出根本原因；check 指简单地检查或核实某个事实。例如：'Investigate the alarm' 表示深入调查告警原因；'Check the alarm status' 表示简单检查告警状态。"
      }
    ],
    "pattern": "Please investigate the + 问题 + immediately",
    "patternExamples": [
      { en: "Please investigate the fault immediately.", cn: "请立即调查故障。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Please investigate the anomaly immediately.", cn: "请立即调查异常。", words: [{ w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Please investigate the issue immediately.", cn: "请立即调查问题。", words: [{ w: "issue", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] }
    ],
    "thinking": "立即调查告警原因是告警处理的关键步骤。调查的目的是找出告警的根本原因（root cause），而不仅仅是处理表面现象。调查方法包括：1）查看告警详情和历史记录；2）检查相关设备和系统；3）分析数据和趋势；4）必要时进行现场检查。",
    "pronunciation": "investigate 的重音在第二音节 /ɪnˈvɛstɪɡeɪt/。immediately 的重音在第二音节 /ɪˈmiːdiətli/。",
    "quiz": [
      {
        "q": "调查告警的目的是什么？",
        "a": "找出根本原因。调查告警的目的是找出导致告警的根本原因（root cause），而不仅仅是处理表面现象。只有找出根本原因，才能采取正确的处理措施，防止问题再次发生。"
      }
    ]
  },
  {
    "id": 1436,
    "en": "The battery alarm has been cleared.",
    "cn": "电池告警已经恢复。",
    "ipa": "/ðə ˈbætəri ˈælɑːrm hæz biːn klɪərd/",
    "tags": [
      "电池告警",
      "告警恢复",
      "★★★★★"
    ],
    "when": "告警问题已经解决，告警状态从'活动'变为'已清除'。这是告警处理流程的结束确认。",
    "words": [
      {
        "w": "cleared",
        "ipa": "/klɪərd/",
        "pos": "v.",
        "cn": "清除；恢复",
        "memory": "clear（清除）的过去分词。在告警系统中，cleared 表示告警已经清除，问题已经解决。",
        "phonics": "clear 读 /klɪər/，ed 读 /d/",
        "collocations": [
          [
            "alarm cleared",
            "告警清除"
          ],
          [
            "fault cleared",
            "故障清除"
          ],
          [
            "error cleared",
            "错误清除"
          ]
        ],
        "examples": [
          [
            "All alarms have been cleared.",
            "所有告警已清除。"
          ],
          [
            "The fault was cleared automatically.",
            "故障自动清除了。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "has been cleared",
        "ipa": "/hæz biːn klɪərd/",
        "cn": "已经被清除",
        "why": "现在完成时的被动语态，强调告警已经被清除，问题已经解决。这是确认告警处理完成的标准表达。"
      }
    ],
    "grammar": [
      {
        "q": "cleared 和 resolved 有什么区别？",
        "a": "cleared 强调告警状态从'活动'变为'已清除'；resolved 强调问题已经被解决。例如：'The alarm has been cleared' 表示告警已经清除（可能自动恢复或手动清除）；'The issue has been resolved' 表示问题已经被解决（采取了措施）。"
      }
    ],
    "pattern": "The + 告警/故障 + has been cleared",
    "patternExamples": [
      { en: "The system alarm has been cleared.", cn: "系统告警已清除。", words: [{ w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
      { en: "The temperature alarm has been cleared.", cn: "温度告警已清除。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
      { en: "The communication fault has been cleared.", cn: "通信故障已清除。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] }
    ],
    "thinking": "告警清除意味着问题已经解决，系统恢复到正常状态。告警清除的方式包括：1）自动清除：问题自动恢复（如温度下降）；2）手动清除：操作人员确认问题已解决后手动清除。无论哪种方式，都需要确认问题确实已经解决，而不是简单地清除告警。",
    "pronunciation": "cleared 的 ed 读 /d/，不要读成 /ɪd/。alarm 的重音在第二音节。",
    "quiz": [
      {
        "q": "告警清除（cleared）意味着什么？",
        "a": "问题已经解决。告警清除意味着导致告警的问题已经解决，系统恢复到正常状态。这与告警确认（acknowledged）不同，确认只是表示注意到告警，问题仍然存在。"
      }
    ]
  },
  {
    "id": 1437,
    "en": "The battery system has returned to normal operation.",
    "cn": "电池系统已经恢复正常运行。",
    "ipa": "/ðə ˈbætəri ˈsɪstəm hæz rɪˈtɜːrnd tuː ˈnɔːrməl ˌɒpəˈreɪʃən/",
    "tags": [
      "电池告警",
      "系统恢复",
      "★★★★★"
    ],
    "when": "告警问题解决后，电池系统恢复到正常运行状态。这是确认系统安全的最终步骤。",
    "words": [
      {
        "w": "returned",
        "ipa": "/rɪˈtɜːrnd/",
        "pos": "v.",
        "cn": "恢复；返回",
        "memory": "return（返回）的过去分词。在系统状态描述中，returned to normal 表示系统从异常状态恢复到正常状态。",
        "phonics": "re 读 /rɪ/，turn 读 /tɜːrn/，ed 读 /d/",
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
            "Power has returned to normal levels.",
            "电力已恢复正常水平。"
          ]
        ]
      },
      {
        "w": "operation",
        "ipa": "/ˌɒpəˈreɪʃən/",
        "pos": "n.",
        "cn": "运行；操作",
        "memory": "operate（运行）+ -ion（名词后缀）→ 运行。normal operation 表示系统正常运行的状态。",
        "phonics": "op 读 /ɒp/，er 读 /ər/，a 读 /eɪ/，tion 读 /ʃən/",
        "collocations": [
          [
            "normal operation",
            "正常运行"
          ],
          [
            "safe operation",
            "安全运行"
          ],
          [
            "continuous operation",
            "连续运行"
          ]
        ],
        "examples": [
          [
            "The system is in normal operation.",
            "系统处于正常运行状态。"
          ],
          [
            "Operation has been suspended.",
            "运行已暂停。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "returned to normal operation",
        "ipa": "/rɪˈtɜːrnd tuː ˈnɔːrməl ˌɒpəˈreɪʃən/",
        "cn": "恢复正常运行",
        "why": "returned to normal operation 是确认系统从异常状态恢复到正常状态的标准表达。这是告警处理完成后的最终确认。"
      }
    ],
    "grammar": [
      {
        "q": "has returned 和 is back 有什么区别？",
        "a": "has returned 更正式，强调动作已经完成；is back 更口语化，强调当前状态。例如：'The system has returned to normal' 更正式；'The system is back to normal' 更口语化。两者意思相同。"
      }
    ],
    "pattern": "The + 系统/设备 + has returned to normal operation",
    "patternExamples": [
      { en: "The UPS has returned to normal operation.", cn: "UPS已恢复正常运行。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }, { w: "operation", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }] },
      { en: "The cooling system has returned to normal operation.", cn: "冷却系统已恢复正常运行。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The generator has returned to normal operation.", cn: "发电机已恢复正常运行。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }, { w: "operation", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }] }
    ],
    "thinking": "确认系统恢复正常运行是告警处理流程的最后一步。这表示：1）告警问题已经彻底解决；2）系统所有参数都在正常范围内；3）系统可以正常提供服务。在确认系统恢复后，需要继续监测一段时间，确保系统稳定。",
    "pronunciation": "returned 的 ed 读 /d/，不要读成 /ɪd/。operation 的重音在第三音节 /ˌɒpəˈreɪʃən/。",
    "quiz": [
      {
        "q": "系统恢复正常运行后还需要做什么？",
        "a": "以上都是。系统恢复正常运行后还需要：1）继续监测一段时间，确保系统稳定；2）记录告警处理过程，形成完整的处理记录；3）分析告警的根本原因，采取措施防止再次发生。"
      }
    ]
  },
  {
    "id": 1438,
    "en": "Please continue monitoring the battery system.",
    "cn": "请继续监控电池系统。",
    "ipa": "/pliːz kənˈtɪnjuː ˈmɒnɪtərɪŋ ðə ˈbætəri ˈsɪstəm/",
    "tags": [
      "电池告警",
      "继续监控",
      "★★★★★"
    ],
    "when": "告警解决后，需要继续监控电池系统一段时间，确保系统稳定，问题不会再次发生。",
    "words": [
      {
        "w": "continue",
        "ipa": "/kənˈtɪnjuː/",
        "pos": "v.",
        "cn": "继续",
        "memory": "con-（加强）+ tinue（持有）→ 继续。continue 表示持续进行某个动作，不中断。",
        "phonics": "con 读 /kən/，tin 读 /tɪn/，ue 读 /juː/",
        "collocations": [
          [
            "continue monitoring",
            "继续监控"
          ],
          [
            "continue operation",
            "继续运行"
          ],
          [
            "continue testing",
            "继续测试"
          ]
        ],
        "examples": [
          [
            "Please continue monitoring the system.",
            "请继续监控系统。"
          ],
          [
            "We will continue the test tomorrow.",
            "我们明天继续测试。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "continue monitoring",
        "ipa": "/kənˈtɪnjuː ˈmɒnɪtərɪŋ/",
        "cn": "继续监控",
        "why": "continue + 动名词（monitoring）表示继续做某事。这是告警处理后的重要步骤，确保系统稳定。"
      }
    ],
    "grammar": [
      {
        "q": "continue monitoring 和 continue to monitor 有什么区别？",
        "a": "两者意思基本相同，都可以使用。continue + 动名词（continue monitoring）更强调动作的持续性；continue + 不定式（continue to monitor）更强调目的。在实际使用中，两者可以互换。"
      }
    ],
    "pattern": "Please continue monitoring the + 系统/设备",
    "patternExamples": [
      { en: "Please continue monitoring the UPS.", cn: "请继续监控UPS。", words: [{ w: "continue", ipa: "/kənˈtɪnjuː/", cn: "继续", phonics: "con 读 /kən/，tinue 读 /tɪnjuː/" }, { w: "monitoring", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }] },
      { en: "Please continue monitoring the cooling system.", cn: "请继续监控冷却系统。", words: [{ w: "continue", ipa: "/kənˈtɪnjuː/", cn: "继续", phonics: "con 读 /kən/，tinue 读 /tɪnjuː/" }, { w: "monitoring", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }] },
      { en: "Please continue monitoring the generator.", cn: "请继续监控发电机。", words: [{ w: "continue", ipa: "/kənˈtɪnjuː/", cn: "继续", phonics: "con 读 /kən/，tinue 读 /tɪnjuː/" }, { w: "monitoring", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] }
    ],
    "thinking": "告警解决后继续监控是必要的预防措施。继续监控的目的：1）确保问题确实已经解决，不会再次发生；2）观察系统是否稳定，各项参数是否正常；3）及时发现任何新的异常。通常建议继续监控至少30分钟到1小时。",
    "pronunciation": "continue 的重音在第二音节 /kənˈtɪnjuː/。monitoring 的重音在第一音节 /ˈmɒnɪtərɪŋ/。",
    "quiz": [
      {
        "q": "告警解决后为什么要继续监控？",
        "a": "以上都是。告警解决后继续监控的目的：1）确保问题确实已经解决，不会再次发生；2）观察系统是否稳定，各项参数是否正常；3）及时发现任何新的异常，防止问题扩大。"
      }
    ]
  },
  {
    "id": 1439,
    "en": "Please update the battery maintenance record.",
    "cn": "请更新电池维护记录。",
    "ipa": "/pliːz ˌʌpˈdeɪt ðə ˈbætəri ˈmeɪntənəns ˈrekɔːrd/",
    "tags": [
      "电池告警",
      "更新记录",
      "★★★★★"
    ],
    "when": "告警处理完成后，需要更新维护记录，记录告警信息、处理过程和结果。这是维护管理的重要环节。",
    "words": [
      {
        "w": "update",
        "ipa": "/ˌʌpˈdeɪt/",
        "pos": "v.",
        "cn": "更新",
        "memory": "up-（向上）+ date（日期）→ 更新到最新。update 表示将信息更新到最新状态。",
        "phonics": "up 读 /ʌp/，date 读 /deɪt/",
        "collocations": [
          [
            "update record",
            "更新记录"
          ],
          [
            "update log",
            "更新日志"
          ],
          [
            "update status",
            "更新状态"
          ]
        ],
        "examples": [
          [
            "Please update the maintenance log.",
            "请更新维护日志。"
          ],
          [
            "The record has been updated.",
            "记录已更新。"
          ]
        ]
      },
      {
        "w": "record",
        "ipa": "/ˈrekɔːrd/",
        "pos": "n.",
        "cn": "记录",
        "memory": "re-（再次）+ cord（心）→ 再次记住 → 记录。record 作为名词表示记录的信息；作为动词表示记录的动作。",
        "phonics": "re 读 /re/，cord 读 /kɔːrd/",
        "collocations": [
          [
            "maintenance record",
            "维护记录"
          ],
          [
            "alarm record",
            "告警记录"
          ],
          [
            "operation record",
            "运行记录"
          ]
        ],
        "examples": [
          [
            "Check the maintenance record.",
            "检查维护记录。"
          ],
          [
            "Keep a detailed record.",
            "保持详细记录。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "battery maintenance record",
        "ipa": "/ˈbætəri ˈmeɪntənəns ˈrekɔːrd/",
        "cn": "电池维护记录",
        "why": "电池维护记录包括：维护时间、维护内容、发现的问题、处理措施、测试结果等。这是电池管理的重要文档。"
      }
    ],
    "grammar": [
      {
        "q": "record 作为名词和动词有什么区别？",
        "a": "record 作为名词读 /ˈrekɔːrd/，表示记录的信息；作为动词读 /rɪˈkɔːrd/，表示记录的动作。例如：'Update the record'（更新记录）中 record 是名词；'Record the data'（记录数据）中 record 是动词。"
      }
    ],
    "pattern": "Please update the + 记录类型",
    "patternExamples": [
      { en: "Please update the maintenance log.", cn: "请更新维护日志。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "Please update the operation record.", cn: "请更新运行记录。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "operation", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }] },
      { en: "Please update the alarm history.", cn: "请更新告警历史。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] }
    ],
    "thinking": "更新维护记录是维护管理的重要环节。维护记录的作用：1）记录电池的历史状态和维护情况；2）为后续维护提供参考；3）分析电池的性能趋势和寿命；4）满足合规性要求。维护记录应该详细、准确、及时。",
    "pronunciation": "update 的重音在第二音节 /ˌʌpˈdeɪt/。record 作为名词重音在第一音节 /ˈrekɔːrd/。",
    "quiz": [
      {
        "q": "电池维护记录应该包括哪些内容？",
        "a": "以上都是。完整的电池维护记录应该包括：1）维护时间、维护人员；2）维护内容和操作；3）发现的问题和处理措施；4）测试结果和数据；5）其他相关信息。"
      }
    ]
  },
  {
    "id": 1440,
    "en": "The lithium battery system is operating normally.",
    "cn": "锂电池系统运行正常。",
    "ipa": "/ðə ˈlɪθiəm ˈbætəri ˈsɪstəm ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    "tags": [
      "电池告警",
      "系统正常",
      "★★★★★"
    ],
    "when": "确认锂电池系统当前运行正常，所有参数都在正常范围内。这是对系统状态的最终确认。",
    "words": [
      {
        "w": "lithium",
        "ipa": "/ˈlɪθiəm/",
        "pos": "n.",
        "cn": "锂",
        "memory": "lithium 是化学元素锂的英文名称，源自希腊语 lithos（石头）。锂电池是目前数据中心最常用的储能电池类型。",
        "phonics": "li 读 /lɪ/，thi 读 /θi/，um 读 /əm/",
        "collocations": [
          [
            "lithium battery",
            "锂电池"
          ],
          [
            "lithium-ion battery",
            "锂离子电池"
          ],
          [
            "lithium iron phosphate",
            "磷酸铁锂"
          ]
        ],
        "examples": [
          [
            "Lithium batteries have high energy density.",
            "锂电池具有高能量密度。"
          ],
          [
            "The data center uses lithium battery systems.",
            "数据中心使用锂电池系统。"
          ]
        ]
      },
      {
        "w": "normally",
        "ipa": "/ˈnɔːrməli/",
        "pos": "adv.",
        "cn": "正常地",
        "memory": "normal（正常的）+ -ly（副词后缀）→ 正常地。normally 表示按照预期的方式运行。",
        "phonics": "nor 读 /nɔːr/，mal 读 /məl/，ly 读 /li/",
        "collocations": [
          [
            "operating normally",
            "正常运行"
          ],
          [
            "functioning normally",
            "正常工作"
          ],
          [
            "behaving normally",
            "表现正常"
          ]
        ],
        "examples": [
          [
            "The system is operating normally.",
            "系统正常运行。"
          ],
          [
            "All parameters are normal.",
            "所有参数正常。"
          ]
        ]
      }
    ],
    "phrases": [
      {
        "p": "lithium battery system",
        "ipa": "/ˈlɪθiəm ˈbætəri ˈsɪstəm/",
        "cn": "锂电池系统",
        "why": "锂电池系统包括：电池组、电池管理系统（BMS）、充放电设备、监控系统等。是现代数据中心的重要储能系统。"
      }
    ],
    "grammar": [
      {
        "q": "is operating 和 operates 有什么区别？",
        "a": "is operating 是现在进行时，强调当前正在运行的状态；operates 是一般现在时，强调一般性的事实或习惯。例如：'The system is operating normally' 强调系统现在正在正常运行；'The system operates 24/7' 强调系统24小时运行（一般性事实）。"
      }
    ],
    "pattern": "The + 系统名称 + is operating normally",
    "patternExamples": [
      { en: "The UPS system is operating normally.", cn: "UPS系统运行正常。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "The cooling system is operating normally.", cn: "冷却系统运行正常。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "The generator system is operating normally.", cn: "发电机系统运行正常。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] }
    ],
    "thinking": "确认锂电池系统运行正常是整个维护流程的最终确认。这表示：1）所有告警都已解决；2）所有参数都在正常范围内；3）系统可以正常提供服务。锂电池系统的正常运行对于数据中心的备用电源系统至关重要。",
    "pronunciation": "lithium 的重音在第一音节 /ˈlɪθiəm/。normally 的重音在第一音节 /ˈnɔːrməli/。",
    "quiz": [
      {
        "q": "锂电池系统正常运行需要满足哪些条件？",
        "a": "以上都是。锂电池系统正常运行需要满足：1）所有参数（电压、电流、温度等）在正常范围内；2）没有活动告警；3）BMS通信正常，可以监控和控制电池；4）系统处于正确的运行模式。"
      }
    ]
  }
];

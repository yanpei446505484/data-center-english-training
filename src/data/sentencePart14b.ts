// EXPORTS: MOCK_SENTENCES_PART14B

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART14B: ISentence[] = [
  {
    id: 476,
    en: "Prepare for load transfer.",
    cn: "准备负载切换。",
    ipa: "/prɪˈpeər fɔːr loʊd ˈtræns.fər/",
    tags: ["第476句", "负载切换", "★★★★★"],
    when: "在通知完值班经理和客户后，立即开始准备负载切换。这是恢复供电的关键操作，将负载从故障源切换到备用电源。",
    words: [
      { w: "load", ipa: "/loʊd/", pos: "名词", cn: "负载；负荷", memory: "① load = 负载/负荷（电气系统中消耗电力的设备总称）。\n② 数据中心负载 = IT设备（服务器+存储+网络）+ 制冷设备 + 照明。\nload transfer = 把负载从一路电源切换到另一路。", phonics: "l 读 /l/，oa 读 /oʊ/，d 读 /d/。注意 load 和 road 押韵。", collocations: [["load transfer", "负载切换"], ["load shedding", "甩负荷"], ["full load", "满载"]], examples: [["The load is 80% of capacity.", "负载是容量的80%。"], ["Prepare for load transfer.", "准备负载切换。"]] },
      { w: "transfer", ipa: "/ˈtræns.fər/", pos: "名词/动词", cn: "切换；转移", memory: "① trans- = 跨越/转移；② fer = 搬运（拉丁语 ferre）。\ntransfer = 从一个地方搬到另一个地方 → 切换/转移。\n电气语境中 load transfer = 把负载从A路电源切换到B路。", phonics: "trans 读 /træns/，fer 读 /fər/，重音在第一音节。", collocations: [["load transfer", "负载切换"], ["automatic transfer", "自动切换"], ["transfer switch", "转换开关"]], examples: [["The load transfer was successful.", "负载切换成功。"], ["Activate the transfer switch.", "启动转换开关。"]] },
    ],
    phrases: [
      { p: "prepare for", ipa: "/prɪˈpeər fɔːr/", cn: "为…做准备", why: "prepare for + 名词 = 为某事做准备。应急操作中先说 prepare for，再说具体操作，给团队预警时间。" },
    ],
    grammar: [
      { q: "prepare for 和 prepare to 有什么区别？", a: "prepare for + 名词 = 为某事做准备\nprepare to + 动词 = 准备做某事\n✅ Prepare for load transfer.（准备负载切换 → for + 名词）\n✅ Prepare to transfer the load.（准备切换负载 → to + 动词）\n两种说法都正确，交接中 prepare for 更简洁。" },
    ],
    pattern: "Prepare for + 操作名称",
    patternExamples: [
      { en: "Prepare for generator start.", cn: "准备启动发电机。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "Prepare for system shutdown.", cn: "准备系统关机。", words: [{ w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Prepare for emergency shutdown.", cn: "准备紧急关机。", words: [{ w: "emergency", ipa: "/ɪˈmɜːrdʒənsi/", cn: "紧急", phonics: "e 读 /ɪ/，mergency 读 /mɜːrdʒənsi/" }] },
    ],
    thinking: "负载切换是应急恢复的核心操作。\n操作顺序：① prepare for（预警）→ ② transfer（执行切换）→ ③ confirm（确认成功）。\n切换前必须确认备用电源可用，否则切换后负载无电源 = 二次故障。",
    pronunciation: "prepare 的 e 读短音 /ɪ/：/prɪˈpeər/。\nload 的 oa 读长音 /oʊ/：/loʊd/。\n节奏：pre-PARE ｜ for LOAD ｜ TRANS-fer.",
    quiz: [
      { q: "准备系统关机，怎么说？", a: "Prepare for system shutdown." },
      { q: "prepare for 和 prepare to 怎么区分？", a: "prepare for + 名词（prepare for load transfer）；prepare to + 动词（prepare to transfer the load）。应急交接中 prepare for 更简洁常用。" },
    ],
  },
  {
    id: 477,
    en: "Transfer the load to UPS B.",
    cn: "切换到B路UPS。",
    ipa: "/ˈtræns.fər ðə loʊd tuː ˌjuː.piːˈɛs ˌbiː/",
    tags: ["第477句", "UPS切换", "★★★★★"],
    when: "准备好后，执行负载切换指令。将负载从故障的A路UPS切换到正常的B路UPS，确保IT设备不断电。",
    words: [
      { w: "UPS B", ipa: "/ˌjuː.piːˈɛs ˌbiː/", pos: "名词", cn: "B路UPS", memory: "① UPS = Uninterruptible Power Supply（不间断电源）。\n② 数据中心通常采用双路UPS冗余：UPS A + UPS B。\n当A路故障时，切换到B路，确保负载不断电。", phonics: "UPS 逐字母读 /ˌjuː.piːˈɛs/，B 读字母音 /biː/。", collocations: [["UPS A", "A路UPS"], ["UPS B", "B路UPS"], ["dual UPS", "双路UPS"]], examples: [["UPS A has failed.", "A路UPS故障。"], ["Transfer to UPS B.", "切换到B路UPS。"]] },
    ],
    phrases: [
      { p: "transfer the load to", ipa: "/ˈtræns.fər ðə loʊd tuː/", cn: "将负载切换到", why: "transfer + the load + to + 目标 = 把负载切换到目标电源。这是应急操作中最关键的指令之一。" },
    ],
    grammar: [
      { q: "为什么要说 the load 而不是 load？", a: "the load = 特指当前正在供电的负载（已知的、具体的）\nload = 泛指负载（抽象概念）\n✅ Transfer the load to UPS B.（把当前这些负载切换到B路 → 特指）\n✅ This UPS can handle more load.（这台UPS能承受更多负载 → 泛指）\n应急操作用 the load，因为指的是当前正在运行的具体设备。" },
    ],
    pattern: "Transfer the load to + 目标电源",
    patternExamples: [
      { en: "Transfer the load to the generator.", cn: "将负载切换到发电机。", words: [{ w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "Transfer the load to the bypass.", cn: "将负载切换到旁路。", words: [{ w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
      { en: "Transfer the load to Bus B.", cn: "将负载切换到B母线。", words: [{ w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
    ],
    thinking: "负载切换的目标可以是：\n① UPS B（B路UPS）\n② generator（发电机）\n③ bypass（旁路）\n④ Bus B（B母线）\n切换前必须确认目标电源正常且容量足够，否则切换后目标电源过载 = 二次故障。",
    pronunciation: "transfer 重音在第一音节：/ˈtræns.fər/。\nUPS 逐字母读：/ˌjuː.piːˈɛs/。\n节奏：TRANS-fer ｜ the LOAD ｜ to U-P-S B.",
    quiz: [
      { q: "将负载切换到发电机，怎么说？", a: "Transfer the load to the generator." },
      { q: "数据中心为什么要双路UPS？", a: "双路UPS（A+B）提供冗余：当A路故障时，负载可以切换到B路，确保IT设备不断电。这就是 N+1 或 2N 冗余设计的核心。" },
    ],
  },
  {
    id: 478,
    en: "Start Generator No.2.",
    cn: "启动2号柴油发电机。",
    ipa: "/stɑːrt ˈdʒɛn.ə.reɪ.tər ˌnʌm.bər tuː/",
    tags: ["第478句", "发电机启动", "★★★★★"],
    when: "UPS只能支撑短时间供电（通常10-15分钟），必须尽快启动柴油发电机提供长时间备用电源。",
    words: [
      { w: "start", ipa: "/stɑːrt/", pos: "动词", cn: "启动；开始", memory: "① start = 启动/开始（使机器开始运转）。\n② 发电机启动 = 从静止状态启动到运行状态。\n对比：stop = 停止；shut down = 关机。", phonics: "st 读 /st/，ar 读 /ɑːr/，t 读 /t/。", collocations: [["start the generator", "启动发电机"], ["start the engine", "启动引擎"], ["auto-start", "自动启动"]], examples: [["The generator started automatically.", "发电机自动启动了。"], ["Please start Generator No.1.", "请启动1号发电机。"]] },
      { w: "No.2", ipa: "/ˌnʌm.bər tuː/", pos: "缩写", cn: "2号", memory: "① No. = Number 的缩写（来自拉丁语 numero）。\n② No.2 = 第二号/2号。\n设备编号通常用 No. + 数字：No.1, No.2, No.3。", phonics: "No. 读 /ˈnʌm.bər/，数字读完整单词。", collocations: [["Generator No.1", "1号发电机"], ["Transformer No.2", "2号变压器"], ["Unit No.3", "3号机组"]], examples: [["Generator No.2 is online.", "2号发电机已上线。"], ["Check Transformer No.1.", "检查1号变压器。"]] },
    ],
    phrases: [
      { p: "Start Generator No.2", ipa: "/stɑːrt ˈdʒɛn.ə.reɪ.tər ˌnʌm.bər tuː/", cn: "启动2号柴油发电机", why: "start + 设备名 + 编号 = 启动某号设备。应急指令要简洁明确，直接说设备名和编号。" },
    ],
    grammar: [
      { q: "发电机自动启动和手动启动怎么说？", a: "自动启动：The generator started automatically.（发电机已自动启动）\n手动启动：Please start the generator manually.（请手动启动发电机）\n正常情况发电机设为自动模式（auto mode），市电中断时自动启动。如果自动启动失败，需要手动启动。" },
    ],
    pattern: "Start + 设备名 + 编号",
    patternExamples: [
      { en: "Start Generator No.1.", cn: "启动1号发电机。", words: [{ w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "Start the backup pump.", cn: "启动备用泵。", words: [{ w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }, { w: "backup", ipa: "/ˈbækʌp/", cn: "备份", phonics: "back 读 /bæk/，up 读 /ʌp/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }] },
      { en: "Start the cooling system.", cn: "启动冷却系统。", words: [{ w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }, { w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
    ],
    thinking: "发电机启动失败是严重应急事件（句453）。\n正常流程：市电中断 → 发电机自动启动（10秒内）→ 带载 → 负载切换。\n如果自动启动失败 → 手动启动 → 如果仍然失败 → 通知管理层 + 联系供应商。\n发电机燃油通常支撑8-24小时运行。",
    pronunciation: "start 的 ar 读 /ɑːr/，不要读成 /æ/。\ngenerator 重音在第一音节：/ˈdʒɛn.ə.reɪ.tər/。\n节奏：START ｜ GEN-er-a-tor ｜ NUM-ber TWO.",
    quiz: [
      { q: "启动1号发电机，怎么说？", a: "Start Generator No.1." },
      { q: "发电机自动启动失败怎么办？", a: "① 先尝试手动启动（start manually）；② 如果仍然失败，立即通知管理层（notify management）；③ 联系发电机供应商（contact vendor）；④ 同时确认UPS剩余时间，评估是否需要有序关机。" },
    ],
  },
  {
    id: 479,
    en: "Confirm power restoration.",
    cn: "确认恢复供电。",
    ipa: "/kənˈfɜːrm ˈpaʊ.ər ˌrɛs.təˈreɪ.ʃən/",
    tags: ["第479句", "供电恢复", "★★★★★"],
    when: "发电机启动并带载后，必须确认供电已经恢复正常。这是应急响应的关键验证步骤。",
    words: [
      { w: "restoration", ipa: "/ˌrɛs.təˈreɪ.ʃən/", pos: "名词", cn: "恢复；复原", memory: "① restore = 恢复/修复；② restoration = 恢复（名词）。\npower restoration = 供电恢复，是应急响应的最终目标。\n词根 re- = 重新，staurare = 建立 → 重新建立 = 恢复。", phonics: "res 读 /rɛs/，to 读 /tə/，ra 读 /reɪ/，tion 读 /ʃən/，重音在第三音节。", collocations: [["power restoration", "供电恢复"], ["service restoration", "服务恢复"], ["full restoration", "完全恢复"]], examples: [["Power restoration took 15 minutes.", "供电恢复花了15分钟。"], ["Confirm service restoration.", "确认服务恢复。"]] },
    ],
    phrases: [
      { p: "power restoration", ipa: "/ˈpaʊ.ər ˌrɛs.təˈreɪ.ʃən/", cn: "供电恢复", why: "power + restoration = 供电恢复。应急响应中，power restoration 是最终目标，确认后应急状态才能降级。" },
    ],
    grammar: [
      { q: "confirm 后面可以接什么？", a: "confirm + 名词：Confirm power restoration.（确认供电恢复）\nconfirm + that 从句：Confirm that power has been restored.（确认供电已经恢复）\nconfirm + 名词 + is + 形容词：Confirm the power is stable.（确认供电稳定）\n应急指令用 confirm + 名词 最简洁。" },
    ],
    pattern: "Confirm + 恢复项目",
    patternExamples: [
      { en: "Confirm system restoration.", cn: "确认系统恢复。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Confirm service restoration.", cn: "确认服务恢复。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }] },
      { en: "Confirm normal operation.", cn: "确认正常运行。", words: [{ w: "confirm", ipa: "/kənˈfɜːrm/", cn: "确认", phonics: "con 读 /kən/，firm 读 /fɜːrm/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }, { w: "operation", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }] },
    ],
    thinking: "供电恢复确认清单：\n① 电压正常（voltage normal）\n② 频率正常（frequency normal = 50Hz）\n③ 所有设备重新上电（all equipment powered on）\n④ 无新告警（no new alarms）\n确认后应急状态降级，进入事后处理阶段。",
    pronunciation: "confirm 的 con 读 /kən/，firm 读 /fɜːrm/。\nrestoration 重音在第三音节：/ˌrɛs.təˈreɪ.ʃən/。\n节奏：con-FIRM ｜ POW-er ｜ res-to-RA-tion.",
    quiz: [
      { q: "确认系统恢复，怎么说？", a: "Confirm system restoration." },
      { q: "供电恢复后还需要做什么？", a: "供电恢复后需要：① 确认所有设备重新上电并正常运行；② 检查无新告警；③ 应急状态降级；④ 开始事后处理（事件报告 + 根因分析 + 纠正/预防措施）。" },
    ],
  },
  {
    id: 480,
    en: "Check the emergency lighting system.",
    cn: "检查应急照明系统。",
    ipa: "/tʃɛk ði ɪˈmɜːr.dʒən.si ˈlaɪ.tɪŋ ˈsɪs.təm/",
    tags: ["第480句", "应急照明", "★★★★"],
    when: "停电后应急照明自动启动。确认应急照明系统正常工作，确保人员安全疏散和操作照明。",
    words: [
      { w: "emergency lighting", ipa: "/ɪˈmɜːr.dʒən.si ˈlaɪ.tɪŋ/", pos: "名词", cn: "应急照明", memory: "① emergency = 紧急情况；② lighting = 照明系统。\nemergency lighting = 应急照明（停电时自动启动的备用照明）。\n通常由电池供电，可持续1-3小时。", phonics: "emergency 重音在第二音节；lighting 读 /ˈlaɪ.tɪŋ/，注意和 lightning（闪电）区分。", collocations: [["emergency lighting", "应急照明"], ["emergency light", "应急灯"], ["emergency exit light", "应急出口灯"]], examples: [["The emergency lighting is on.", "应急照明已启动。"], ["Check all emergency lights.", "检查所有应急灯。"]] },
    ],
    phrases: [
      { p: "emergency lighting system", ipa: "/ɪˈmɜːr.dʒən.si ˈlaɪ.tɪŋ ˈsɪs.təm/", cn: "应急照明系统", why: "emergency + lighting + system = 应急照明系统。停电后自动切换，确保机房和疏散通道有基本照明。" },
    ],
    grammar: [
      { q: "lighting 和 lightning 怎么区分？", a: "lighting = 照明（light + ing，照明系统）读 /ˈlaɪ.tɪŋ/\nlightning = 闪电（light + ning）读 /ˈlaɪt.nɪŋ/\n✅ Check the emergency lighting.（检查应急照明 → 照明系统）\n✅ Lightning struck the building.（闪电击中了大楼 → 自然现象）\n数据中心语境用 lighting（照明），不用 lightning（闪电）。" },
    ],
    pattern: "Check the + 应急系统",
    patternExamples: [
      { en: "Check the emergency power system.", cn: "检查应急供电系统。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "emergency", ipa: "/ɪˈmɜːrdʒənsi/", cn: "紧急", phonics: "e 读 /ɪ/，mergency 读 /mɜːrdʒənsi/" }, { w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }] },
      { en: "Check the fire suppression system.", cn: "检查消防灭火系统。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Check the evacuation alarm.", cn: "检查疏散警报。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "应急照明是安全基础设施：\n① 停电时自动启动（battery powered）\n② 持续时间通常1-3小时\n③ 覆盖区域：机房、走廊、楼梯、出口\n④ 定期检查：每月测试一次\n应急照明不正常 = 人员安全风险，必须立即修复。",
    pronunciation: "emergency 重音在第二音节：/ɪˈmɜːr.dʒən.si/。\nlighting 读 /ˈlaɪ.tɪŋ/，不是 /ˈlaɪt.nɪŋ/（那是 lightning 闪电）。\n节奏：CHECK ｜ the e-MER-gen-cy ｜ LIGHT-ing ｜ SYS-tem.",
    quiz: [
      { q: "检查消防灭火系统，怎么说？", a: "Check the fire suppression system." },
      { q: "lighting 和 lightning 怎么区分？", a: "lighting = 照明（/ˈlaɪ.tɪŋ/，照明系统）；lightning = 闪电（/ˈlaɪt.nɪŋ/，自然现象）。数据中心语境用 lighting。" },
    ],
  },
  {
    id: 481,
    en: "Activate the fire suppression system.",
    cn: "启动消防灭火系统。",
    ipa: "/ˈæk.tɪ.veɪt ðə faɪər səˈprɛʃ.ən ˈsɪs.təm/",
    tags: ["第481句", "消防灭火", "★★★★★"],
    when: "发现火灾或烟雾时，需要启动消防灭火系统。数据中心通常使用气体灭火（如FM-200或Novec 1230），不使用水喷淋，避免损坏IT设备。",
    words: [
      { w: "activate", ipa: "/ˈæk.tɪ.veɪt/", pos: "动词", cn: "启动；激活", memory: "① active = 活跃的/活动的；② activate = 使激活/启动。\nactivate 比 start 更正式，常用于系统/设备的启动。\n对比：start = 启动（通用）；activate = 激活/启动（正式）。", phonics: "ac 读 /æk/，ti 读 /tɪ/，vate 读 /veɪt/，重音在第一音节。", collocations: [["activate the system", "启动系统"], ["activate the alarm", "启动警报"], ["manually activate", "手动启动"]], examples: [["Activate the suppression system.", "启动灭火系统。"], ["The alarm was activated automatically.", "警报自动启动了。"]] },
      { w: "suppression", ipa: "/səˈprɛʃ.ən/", pos: "名词", cn: "灭火；抑制", memory: "① suppress = 压制/抑制；② suppression = 灭火/抑制（名词）。\nfire suppression = 消防灭火（数据中心专用术语）。\n数据中心的 fire suppression 通常指气体灭火系统，不是水喷淋。", phonics: "sup 读 /sə/，pres 读 /prɛʃ/，sion 读 /ən/，重音在第二音节。", collocations: [["fire suppression", "消防灭火"], ["gas suppression", "气体灭火"], ["suppression system", "灭火系统"]], examples: [["The fire suppression system activated.", "灭火系统启动了。"], ["Check the suppression agent level.", "检查灭火剂液位。"]] },
    ],
    phrases: [
      { p: "fire suppression system", ipa: "/faɪər səˈprɛʃ.ən ˈsɪs.təm/", cn: "消防灭火系统", why: "fire + suppression + system = 消防灭火系统。数据中心使用气体灭火（FM-200/Novec 1230/Inergen），不使用水，避免损坏IT设备。" },
    ],
    grammar: [
      { q: "activate 和 start 在消防系统语境中有什么区别？", a: "activate = 激活/启动（正式用语，常用于消防/安全系统）\nstart = 启动（通用，常用于发电机/泵等机械设备）\n✅ Activate the fire suppression system.（启动消防灭火系统 → 正式）\n✅ Start the fire pump.（启动消防泵 → 机械设备）\n消防系统用 activate，机械设备用 start。" },
    ],
    pattern: "Activate the + 安全系统",
    patternExamples: [
      { en: "Activate the evacuation alarm.", cn: "启动疏散警报。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Activate the emergency shutdown.", cn: "启动紧急关机。", words: [{ w: "emergency", ipa: "/ɪˈmɜːrdʒənsi/", cn: "紧急", phonics: "e 读 /ɪ/，mergency 读 /mɜːrdʒənsi/" }] },
      { en: "Activate the smoke extraction system.", cn: "启动排烟系统。", words: [{ w: "smoke", ipa: "/smoʊk/", cn: "烟雾", phonics: "smoke 读 /smoʊk/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
    ],
    thinking: "数据中心消防灭火系统：\n① 探测：烟感（smoke detector）+ 温感（heat detector）\n② 预警：报警 → 人员疏散 → 延时30秒\n③ 释放：气体灭火剂释放 → 灭火\n④ 事后：通风排烟 → 检查设备 → 恢复运行\n⚠️ 气体释放前必须确认人员已全部疏散！\n⚠️ 气体灭火剂对人体有害，释放时严禁人员在现场。",
    pronunciation: "activate 重音在第一音节：/ˈæk.tɪ.veɪt/。\nsuppression 重音在第二音节：/səˈprɛʃ.ən/。\n节奏：AC-ti-vate ｜ the FIRE ｜ sup-PRES-sion ｜ SYS-tem.",
    quiz: [
      { q: "启动疏散警报，怎么说？", a: "Activate the evacuation alarm." },
      { q: "数据中心为什么不用水喷淋灭火？", a: "水会损坏IT设备（服务器、存储、网络设备），导致二次损失。数据中心使用气体灭火（FM-200/Novec 1230/Inergen），灭火后无残留，不损坏设备。" },
    ],
  },
  {
    id: 482,
    en: "Evacuate the building immediately.",
    cn: "立即疏散大楼。",
    ipa: "/ɪˈvæk.ju.eɪt ðə ˈbɪl.dɪŋ ɪˈmiː.di.ət.li/",
    tags: ["第482句", "疏散", "★★★★★"],
    when: "火灾确认后，必须立即疏散所有人员。人员安全永远是第一优先级，高于设备和数据。",
    words: [
      { w: "evacuate", ipa: "/ɪˈvæk.ju.eɪt/", pos: "动词", cn: "疏散；撤离", memory: "① e- = 出/离开；② vacu = 空（拉丁语 vacuus）。\nevacuate = 使变空 → 疏散人员/撤离。\n名词形式：evacuation（疏散）。\n⚠️ 人员安全 > 设备安全 > 数据安全。", phonics: "e 读 /ɪ/，vac 读 /væk/，u 读 /ju/，ate 读 /eɪt/，重音在第二音节。", collocations: [["evacuate the building", "疏散大楼"], ["evacuate immediately", "立即疏散"], ["evacuation route", "疏散路线"]], examples: [["Evacuate the data hall now.", "立即疏散机房。"], ["The building has been evacuated.", "大楼已疏散。"]] },
    ],
    phrases: [
      { p: "evacuate the building", ipa: "/ɪˈvæk.ju.eɪt ðə ˈbɪl.dɪŋ/", cn: "疏散大楼", why: "evacuate + 地点 = 疏散某处。火灾/气体泄漏时，疏散是最高优先级指令。" },
    ],
    grammar: [
      { q: "evacuate 后面接什么？", a: "evacuate + 地点：Evacuate the building.（疏散大楼）\nevacuate + 人员：Evacuate all personnel.（疏散所有人员）\n名词形式：Begin evacuation.（开始疏散）\n✅ Evacuate the building immediately.（立即疏散大楼 → 最简洁直接）" },
    ],
    pattern: "Evacuate + 地点 + immediately",
    patternExamples: [
      { en: "Evacuate the data hall immediately.", cn: "立即疏散机房。", words: [{ w: "data", ipa: "/ˈdeɪtə/", cn: "数据", phonics: "da 读 /deɪ/，ta 读 /tə/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Evacuate the floor immediately.", cn: "立即疏散本层。", words: [{ w: "floor", ipa: "/flɔːr/", cn: "楼层", phonics: "floor 读 /flɔːr/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Evacuate the area now.", cn: "立即疏散该区域。", words: [{ w: "area", ipa: "/ˈeəriə/", cn: "区域", phonics: "a 读 /eə/，rea 读 /riə/" }] },
    ],
    thinking: "疏散优先原则：\n① 人员安全 > 设备安全 > 数据安全\n② 听到消防警报 → 立即疏散，不要收拾个人物品\n③ 沿疏散路线（evacuation route）走到集合点（assembly point）\n④ 在集合点点名（roll call），确认无人滞留\n⑤ 严禁在疏散时乘坐电梯\n⑥ 气体灭火释放前30秒预警，人员必须在此之前撤离",
    pronunciation: "evacuate 重音在第二音节：/ɪˈvæk.ju.eɪt/。\nimmediately 重音在第二音节：/ɪˈmiː.di.ət.li/。\n节奏：e-VAC-u-ate ｜ the BUILD-ing ｜ im-ME-di-ate-ly.",
    quiz: [
      { q: "立即疏散机房，怎么说？", a: "Evacuate the data hall immediately." },
      { q: "疏散时最重要的原则是什么？", a: "人员安全第一。① 不要收拾个人物品；② 沿疏散路线走到集合点；③ 不要乘坐电梯；④ 在集合点点名确认无人滞留。设备和数据可以恢复，生命不能。" },
    ],
  },
  {
    id: 483,
    en: "Call the fire department.",
    cn: "联系消防队。",
    ipa: "/kɔːl ðə ˈfaɪər dɪˈpɑːrt.mənt/",
    tags: ["第483句", "消防联络", "★★★★★"],
    when: "火灾确认后，除了启动内部消防系统，还必须立即联系外部消防队。马来西亚火警电话是999或994。",
    words: [
      { w: "fire department", ipa: "/ˈfaɪər dɪˈpɑːrt.mənt/", pos: "名词", cn: "消防队；消防局", memory: "① fire = 火/火灾；② department = 部门/局。\nfire department = 消防队/消防局（美国用法）。\n英式英语用 fire brigade /ˈfaɪər brɪˈɡeɪd/。\n马来西亚通常两种说法都用。", phonics: "fire 读 /faɪər/，department 重音在第二音节。", collocations: [["fire department", "消防队"], ["fire station", "消防站"], ["fire engine", "消防车"]], examples: [["Call the fire department now.", "立即联系消防队。"], ["The fire department arrived in 10 minutes.", "消防队10分钟到达。"]] },
    ],
    phrases: [
      { p: "call the fire department", ipa: "/kɔːl ðə ˈfaɪər dɪˈpɑːrt.mənt/", cn: "联系消防队", why: "call + the fire department = 联系消防队。火灾发生时必须同时做两件事：① 内部灭火/疏散 ② 外部报警。" },
    ],
    grammar: [
      { q: "马来西亚火警电话是多少？", a: "马来西亚火警电话：\n999 = 综合紧急电话（警察+消防+救护车）\n994 = 消防专线\n数据中心通常同时拨打两个号码，并在大门口安排人员引导消防车进入。" },
    ],
    pattern: "Call the + 应急部门",
    patternExamples: [
      { en: "Call the ambulance.", cn: "叫救护车。", words: [] },
      { en: "Call the police.", cn: "报警。", words: [] },
      { en: "Call the incident commander.", cn: "联系事故指挥官。", words: [] },
    ],
    thinking: "联系消防队的同时需要做的：\n① 告知具体地址（building name + street + city）\n② 告知火灾情况（楼层、面积、是否有人员被困）\n③ 告知是否有危险物质（电池、化学品）\n④ 在大门口安排人员引导消防车\n⑤ 提供建筑平面图和消防设施分布图",
    pronunciation: "call 的 a 读 /ɔː/：/kɔːl/。\ndepartment 重音在第二音节：/dɪˈpɑːrt.mənt/。\n节奏：CALL ｜ the FIRE ｜ de-PART-ment.",
    quiz: [
      { q: "叫救护车，怎么说？", a: "Call the ambulance." },
      { q: "马来西亚火警电话是多少？", a: "999（综合紧急电话）或994（消防专线）。拨打时需要告知具体地址、火灾情况、是否有人员被困和危险物质。" },
    ],
  },
  {
    id: 484,
    en: "All personnel must assemble at the assembly point.",
    cn: "所有人员必须到集合点集合。",
    ipa: "/ɔːl ˌpɜːr.səˈnɛl mʌst əˈsɛm.bəl æt ði əˈsɛm.bli pɔɪnt/",
    tags: ["第484句", "集合点名", "★★★★★"],
    when: "疏散到大楼外后，所有人员必须到指定集合点集合，进行点名确认无人滞留。",
    words: [
      { w: "personnel", ipa: "/ˌpɜːr.səˈnɛl/", pos: "名词", cn: "人员；全体职员", memory: "① personnel = 全体人员/职员（源自法语）。\n② 比 people / staff 更正式，常用于安全/军事语境。\n注意拼写：两个 n，一个 l → personnel。", phonics: "per 读 /pɜːr/，so 读 /sə/，nel 读 /nɛl/，重音在末音节。", collocations: [["all personnel", "所有人员"], ["key personnel", "关键人员"], ["personnel count", "人员清点"]], examples: [["All personnel must evacuate.", "所有人员必须疏散。"], ["Personnel count is complete.", "人员清点完成。"]] },
      { w: "assembly point", ipa: "/əˈsɛm.bli pɔɪnt/", pos: "名词", cn: "集合点", memory: "① assembly = 集合/集会；② point = 点/地点。\nassembly point = 集合点（疏散后的指定集合地点）。\n通常在建筑外空旷处，距建筑至少50米。", phonics: "assembly 重音在第二音节；point 读 /pɔɪnt/。", collocations: [["assembly point", "集合点"], ["mustering point", "集合点（同义）"], ["evacuation assembly", "疏散集合"]], examples: [["Proceed to the assembly point.", "前往集合点。"], ["The assembly point is in the car park.", "集合点在停车场。"]] },
    ],
    phrases: [
      { p: "assemble at the assembly point", ipa: "/əˈsɛm.bəl æt ði əˈsɛm.bli pɔɪnt/", cn: "到集合点集合", why: "assemble = 集合（动词），assembly point = 集合点（名词）。疏散后到集合点点名，确认所有人员安全撤出。" },
    ],
    grammar: [
      { q: "must 和 should 在安全指令中有什么区别？", a: "must = 必须（强制性，不遵守会有严重后果）\nshould = 应该（建议性，不遵守不会立即危险）\n✅ All personnel must assemble.（所有人员必须集合 → 强制，为了确认无人滞留）\n✅ You should bring your ID card.（你应该带上工牌 → 建议）\n安全疏散指令一律用 must，因为是强制性的。" },
    ],
    pattern: "All personnel must + 安全动作",
    patternExamples: [
      { en: "All personnel must evacuate immediately.", cn: "所有人员必须立即疏散。", words: [{ w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "All personnel must wear PPE.", cn: "所有人员必须穿戴个人防护用品。", words: [] },
      { en: "All personnel must report to the supervisor.", cn: "所有人员必须向主管报到。", words: [{ w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
    ],
    thinking: "疏散集合后的流程：\n① 所有人员到集合点集合\n② 各部门负责人点名（roll call）\n③ 确认人数与当班记录一致\n④ 如有人员缺失 → 立即通知消防队搜救\n⑤ 未经确认安全，任何人不得返回建筑",
    pronunciation: "personnel 重音在末音节：/ˌpɜːr.səˈnɛl/。\nassemble 和 assembly 重音都在第二音节。\n节奏：ALL ｜ per-so-NEL ｜ must as-SEM-ble ｜ at the as-SEM-bly POINT.",
    quiz: [
      { q: "所有人员必须穿戴个人防护用品，怎么说？", a: "All personnel must wear PPE." },
      { q: "疏散集合后为什么要点名？", a: "点名（roll call）是为了确认所有人员已安全撤出，无人滞留在建筑内。如果有人缺失，必须立即通知消防队进行搜救。" },
    ],
  },
  {
    id: 485,
    en: "Begin the incident report.",
    cn: "开始编写事件报告。",
    ipa: "/bɪˈɡɪn ði ˈɪn.sɪ.dənt rɪˈpɔːrt/",
    tags: ["第485句", "事件报告", "★★★★★"],
    when: "应急状态解除后，进入事后处理阶段。第一步是编写事件报告（Incident Report），记录事件全过程。",
    words: [
      { w: "incident report", ipa: "/ˈɪn.sɪ.dənt rɪˈpɔːrt/", pos: "名词", cn: "事件报告", memory: "① incident = 事件/事故；② report = 报告。\nincident report = 事件报告（记录应急事件的全过程、影响和处理措施）。\n通常要求事件发生后24小时内完成初稿。", phonics: "incident 重音在第一音节；report 重音在第二音节。", collocations: [["incident report", "事件报告"], ["write a report", "写报告"], ["submit a report", "提交报告"]], examples: [["The incident report is due tomorrow.", "事件报告明天截止。"], ["Please review the incident report.", "请审核事件报告。"]] },
    ],
    phrases: [
      { p: "begin the incident report", ipa: "/bɪˈɡɪn ði ˈɪn.sɪ.dənt rɪˈpɔːrt/", cn: "开始编写事件报告", why: "begin + the + 报告 = 开始编写报告。事后处理的第一步是记录事件全过程，为后续根因分析提供依据。" },
    ],
    grammar: [
      { q: "事件报告需要包含哪些内容？", a: "事件报告标准内容：\n① 事件概述（时间、地点、类型）\n② 时间线（从发现到恢复的全过程）\n③ 影响范围（受影响设备/服务/客户）\n④ 应急响应措施（做了什么、效果如何）\n⑤ 根因分析（后续单独章节）\n⑥ 纠正和预防措施\n⑦ 经验教训" },
    ],
    pattern: "Begin the + 文档名称",
    patternExamples: [
      { en: "Begin the root cause analysis.", cn: "开始根因分析。", words: [{ w: "begin", ipa: "/bɪˈɡɪn/", cn: "开始", phonics: "be 读 /bɪ/，gin 读 /ɡɪn/" }, { w: "root", ipa: "/ruːt/", cn: "根因", phonics: "root 读 /ruːt/" }, { w: "cause", ipa: "/kɔːz/", cn: "原因", phonics: "cause 读 /kɔːz/" }] },
      { en: "Begin the post-incident review.", cn: "开始事后回顾。", words: [{ w: "begin", ipa: "/bɪˈɡɪn/", cn: "开始", phonics: "be 读 /bɪ/，gin 读 /ɡɪn/" }, { w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
      { en: "Begin the corrective action plan.", cn: "开始编写纠正措施计划。", words: [{ w: "begin", ipa: "/bɪˈɡɪn/", cn: "开始", phonics: "be 读 /bɪ/，gin 读 /ɡɪn/" }] },
    ],
    thinking: "事后处理流程（应急响应结束后）：\n① 事件报告（Incident Report）→ 记录全过程\n② 根因分析（Root Cause Analysis / RCA）→ 找根本原因\n③ 纠正措施（Corrective Actions）→ 解决当前问题\n④ 预防措施（Preventive Actions）→ 防止再次发生\n⑤ 经验教训（Lessons Learned）→ 团队学习改进\n这5步形成闭环，确保每次事件都能推动系统改进。",
    pronunciation: "incident 重音在第一音节：/ˈɪn.sɪ.dənt/。\nreport 重音在第二音节：/rɪˈpɔːrt/。\n节奏：be-GIN ｜ the IN-ci-dent ｜ re-PORT.",
    quiz: [
      { q: "开始根因分析，怎么说？", a: "Begin the root cause analysis." },
      { q: "事后处理的标准流程是什么？", a: "5步闭环：① 事件报告 → ② 根因分析（RCA）→ ③ 纠正措施 → ④ 预防措施 → ⑤ 经验教训。每一步都要有负责人和截止日期。" },
    ],
  },
  {
    id: 486,
    en: "Record the exact time of the incident.",
    cn: "记录事件发生的准确时间。",
    ipa: "/rɪˈkɔːrd ði ɪɡˈzækt taɪm əv ði ˈɪn.sɪ.dənt/",
    tags: ["第486句", "事件记录", "★★★★"],
    when: "事件报告的第一个要素是准确时间。精确到分钟的时间记录是后续分析和责任追溯的基础。",
    words: [
      { w: "exact", ipa: "/ɪɡˈzækt/", pos: "形容词", cn: "准确的；精确的", memory: "① ex- = 出/完全；② act = 做/行动。\nexact = 完全做到 → 精确的/准确的。\n事件报告要求 exact time，不是 approximate time（大约时间）。", phonics: "ex 读 /ɪɡ/，act 读 /zækt/，重音在第二音节。", collocations: [["exact time", "准确时间"], ["exact location", "准确位置"], ["exact cause", "确切原因"]], examples: [["What was the exact time of the failure?", "故障的准确时间是什么？"], ["Record the exact temperature.", "记录准确的温度。"]] },
    ],
    phrases: [
      { p: "exact time of the incident", ipa: "/ɪɡˈzækt taɪm əv ði ˈɪn.sɪ.dənt/", cn: "事件发生的准确时间", why: "exact time + of the incident = 事件的准确时间。BMS/DCIM系统的日志可以提供精确到秒的时间戳。" },
    ],
    grammar: [
      { q: "exact 和 accurate 有什么区别？", a: "exact = 精确的（完全正确，无偏差）\naccurate = 准确的（接近真实值，允许微小偏差）\n✅ exact time = 精确时间（如 14:32:07）\n✅ accurate reading = 准确读数（如 23.5°C，误差±0.1°C）\n事件报告要求 exact time，因为需要精确追溯。" },
    ],
    pattern: "Record the exact + 数据项",
    patternExamples: [
      { en: "Record the exact temperature.", cn: "记录准确的温度。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
      { en: "Record the exact voltage.", cn: "记录准确的电压。", words: [{ w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }] },
      { en: "Record the exact sequence of events.", cn: "记录准确的事件顺序。", words: [] },
    ],
    thinking: "事件时间线需要记录的关键时间点：\n① 发现时间（detection time）\n② 响应时间（response time）\n③ 处置时间（action time）\n④ 恢复时间（recovery time）\n⑤ 通知时间（notification time）\n所有时间从BMS/DCIM系统日志获取，确保准确。",
    pronunciation: "exact 重音在第二音节：/ɪɡˈzækt/。\nincident 重音在第一音节。\n节奏：re-CORD ｜ the ex-ACT TIME ｜ of the IN-ci-dent.",
    quiz: [
      { q: "记录准确的温度，怎么说？", a: "Record the exact temperature." },
      { q: "事件时间线需要记录哪些时间点？", a: "5个关键时间点：① 发现时间 ② 响应时间 ③ 处置时间 ④ 恢复时间 ⑤ 通知时间。所有时间从BMS/DCIM系统日志获取，确保精确。" },
    ],
  },
  {
    id: 487,
    en: "Conduct a root cause analysis.",
    cn: "进行根因分析。",
    ipa: "/ˈkɒn.dʌkt ə ruːt kɔːz əˈnæl.ə.sɪs/",
    tags: ["第487句", "根因分析", "★★★★★"],
    when: "事件报告完成后，进入根因分析（RCA）阶段。RCA的目的是找到事件的根本原因，而不仅仅是表面现象。",
    words: [
      { w: "root cause", ipa: "/ruːt kɔːz/", pos: "名词", cn: "根本原因", memory: "① root = 根/根本；② cause = 原因。\nroot cause = 根本原因（导致事件发生的最底层原因）。\nRCA = Root Cause Analysis（根因分析），是事后处理的核心步骤。\n常用方法：5 Whys（连续问5个为什么）。", phonics: "root 读 /ruːt/，cause 读 /kɔːz/。", collocations: [["root cause", "根本原因"], ["root cause analysis", "根因分析"], ["identify the root cause", "找到根本原因"]], examples: [["What is the root cause?", "根本原因是什么？"], ["The root cause was a failed capacitor.", "根本原因是电容器故障。"]] },
      { w: "conduct", ipa: "/ˈkɒn.dʌkt/", pos: "动词", cn: "进行；执行", memory: "① con- = 共同；② duct = 引导（拉丁语 ducere）。\nconduct = 引导/执行（正式用语）。\nconduct = 进行（调查/分析/审查）比 do / make 更正式。", phonics: "con 读 /kɒn/，duct 读 /dʌkt/，重音在第一音节。", collocations: [["conduct an analysis", "进行分析"], ["conduct an investigation", "进行调查"], ["conduct a review", "进行审查"]], examples: [["Conduct a safety inspection.", "进行安全检查。"], ["We need to conduct an RCA.", "我们需要进行根因分析。"]] },
    ],
    phrases: [
      { p: "root cause analysis", ipa: "/ruːt kɔːz əˈnæl.ə.sɪs/", cn: "根因分析（RCA）", why: "root cause + analysis = 根因分析。RCA是数据中心事件管理的标准流程，目的是防止同类事件再次发生。" },
    ],
    grammar: [
      { q: "conduct 和 do 在正式报告中有什么区别？", a: "conduct = 进行/执行（正式用语，用于报告/会议/审查）\ndo = 做（口语化，不用于正式文档）\n✅ Conduct a root cause analysis.（进行根因分析 → 正式）\n❌ Do a root cause analysis.（做一个根因分析 → 口语化，报告中避免）\n事件报告和正式文档中一律用 conduct。" },
    ],
    pattern: "Conduct a + 分析/审查名称",
    patternExamples: [
      { en: "Conduct a failure analysis.", cn: "进行故障分析。", words: [] },
      { en: "Conduct a safety review.", cn: "进行安全审查。", words: [{ w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }, { w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
      { en: "Conduct a post-incident review.", cn: "进行事后回顾。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
    ],
    thinking: "RCA 根因分析常用方法：\n① 5 Whys：连续问5个'为什么'，直到找到根本原因\n② 鱼骨图（Fishbone Diagram）：按人/机/料/法/环分类分析\n③ 时间线分析（Timeline Analysis）：按时间顺序还原事件\n④ FTA（故障树分析）：自上而下分析故障路径\nRCA 通常在事件发生后48-72小时内完成。",
    pronunciation: "conduct 重音在第一音节：/ˈkɒn.dʌkt/。\nroot cause 两个词都重读。\n节奏：CON-duct ｜ a ROOT CAUSE ｜ a-NAL-y-sis.",
    quiz: [
      { q: "进行安全审查，怎么说？", a: "Conduct a safety review." },
      { q: "RCA常用的5 Whys方法是什么？", a: "5 Whys = 连续问5个'为什么'，逐层深挖原因：\nWhy did the power fail? → UPS failed.\nWhy did the UPS fail? → Capacitor degraded.\nWhy was it degraded? → Exceeded service life.\nWhy wasn't it replaced? → PM schedule missed.\nWhy was it missed? → No tracking system.\n根本原因：缺少维护跟踪系统。" },
    ],
  },
  {
    id: 488,
    en: "Identify the direct cause and the root cause.",
    cn: "确认直接原因和根本原因。",
    ipa: "/aɪˈdɛn.tɪ.faɪ ðə dɪˈrɛkt kɔːz ænd ðə ruːt kɔːz/",
    tags: ["第488句", "原因分析", "★★★★★"],
    when: "RCA过程中，需要区分直接原因（表面现象）和根本原因（深层问题）。两者都必须在报告中明确记录。",
    words: [
      { w: "direct cause", ipa: "/dɪˈrɛkt kɔːz/", pos: "名词", cn: "直接原因", memory: "① direct = 直接的；② cause = 原因。\ndirect cause = 直接原因（直接导致事件发生的因素）。\n对比：root cause = 根本原因（导致直接原因出现的深层问题）。", phonics: "direct 重音在第二音节：/dɪˈrɛkt/。", collocations: [["direct cause", "直接原因"], ["immediate cause", "直接原因（同义）"], ["proximate cause", "近因"]], examples: [["The direct cause was a short circuit.", "直接原因是短路。"], ["Identify the direct cause first.", "先确认直接原因。"]] },
      { w: "identify", ipa: "/aɪˈdɛn.tɪ.faɪ/", pos: "动词", cn: "确认；识别", memory: "① identity = 身份；② identify = 确认身份/识别。\nidentify = 找出/确认（问题的原因、故障的设备等）。", phonics: "i 读 /aɪ/，den 读 /dɛn/，ti 读 /tɪ/，fy 读 /faɪ/，重音在第二音节。", collocations: [["identify the cause", "确认原因"], ["identify the problem", "识别问题"], ["identify the risk", "识别风险"]], examples: [["We identified the root cause.", "我们找到了根本原因。"], ["Identify all affected systems.", "确认所有受影响的系统。"]] },
    ],
    phrases: [
      { p: "direct cause and root cause", ipa: "/dɪˈrɛkt kɔːz ænd ruːt kɔːz/", cn: "直接原因和根本原因", why: "direct cause（直接原因）+ root cause（根本原因）= 完整的原因分析。直接原因是表象，根本原因是深层问题，两者都需要记录。" },
    ],
    grammar: [
      { q: "直接原因和根本原因的区别是什么？", a: "直接原因 = 直接触发事件的因素（如：电容器老化导致UPS故障）\n根本原因 = 导致直接原因出现的系统性问题（如：维护计划未覆盖该电容器的更换周期）\n✅ 直接原因回答'发生了什么'\n✅ 根本原因回答'为什么会发生'\n修复直接原因 = 治标；解决根本原因 = 治本。" },
    ],
    pattern: "Identify the + 分析对象",
    patternExamples: [
      { en: "Identify the failure mode.", cn: "确认故障模式。", words: [{ w: "mode", ipa: "/moʊd/", cn: "模式", phonics: "mode 读 /moʊd/" }] },
      { en: "Identify all contributing factors.", cn: "确认所有促成因素。", words: [] },
      { en: "Identify the weak point.", cn: "确认薄弱环节。", words: [] },
    ],
    thinking: "原因分析层级：\n① 直接原因（Direct Cause）→ 什么坏了？→ 电容器老化\n② 促成因素（Contributing Factor）→ 什么加剧了？→ 高温环境\n③ 根本原因（Root Cause）→ 为什么没预防？→ 维护计划缺失\n解决根本原因才能真正防止事件再次发生。",
    pronunciation: "identify 重音在第二音节：/aɪˈdɛn.tɪ.faɪ/。\ndirect 重音在第二音节：/dɪˈrɛkt/。\n节奏：i-DEN-ti-fy ｜ the di-RECT CAUSE ｜ and the ROOT CAUSE.",
    quiz: [
      { q: "确认所有促成因素，怎么说？", a: "Identify all contributing factors." },
      { q: "为什么要区分直接原因和根本原因？", a: "直接原因 = 治标（修好当前故障）；根本原因 = 治本（防止再次发生）。如果只修直接原因不解决根本原因，同类事件会反复发生。" },
    ],
  },
  {
    id: 489,
    en: "Implement corrective actions immediately.",
    cn: "立即执行纠正措施。",
    ipa: "/ˈɪm.plɪ.mɛnt kəˈrɛk.tɪv ˈæk.ʃənz ɪˈmiː.di.ət.li/",
    tags: ["第489句", "纠正措施", "★★★★★"],
    when: "根因分析完成后，首先执行纠正措施（Corrective Actions），解决当前存在的问题。",
    words: [
      { w: "corrective action", ipa: "/kəˈrɛk.tɪv ˈæk.ʃən/", pos: "名词", cn: "纠正措施", memory: "① correct = 纠正/改正；② corrective = 纠正性的。\ncorrective action = 纠正措施（解决当前已发现的问题）。\n对比：preventive action = 预防措施（防止未来可能出现的问题）。", phonics: "corrective 重音在第二音节；action 重音在第一音节。", collocations: [["corrective action", "纠正措施"], ["corrective maintenance", "纠正性维修"], ["take corrective action", "采取纠正措施"]], examples: [["Implement the corrective actions.", "执行纠正措施。"], ["The corrective action was effective.", "纠正措施有效。"]] },
      { w: "implement", ipa: "/ˈɪm.plɪ.mɛnt/", pos: "动词", cn: "执行；实施", memory: "① im- = 进入；② ple = 填充（拉丁语 plere）。\nimplement = 填充进去 → 执行/实施（计划/措施/方案）。\nimplement 比 do / carry out 更正式，常用于报告和流程文档。", phonics: "im 读 /ɪm/，ple 读 /plɪ/，ment 读 /mɛnt/，重音在第一音节。", collocations: [["implement a plan", "实施计划"], ["implement changes", "实施变更"], ["implement a solution", "实施方案"]], examples: [["Implement the solution immediately.", "立即实施方案。"], ["We implemented all recommendations.", "我们执行了所有建议。"]] },
    ],
    phrases: [
      { p: "corrective actions", ipa: "/kəˈrɛk.tɪv ˈæk.ʃənz/", cn: "纠正措施", why: "corrective + actions = 纠正措施（复数）。一个事件通常需要多个纠正措施，每个措施都有负责人和截止日期。" },
    ],
    grammar: [
      { q: "implement 和 do 在正式语境中怎么选择？", a: "implement = 执行/实施（正式用语，用于措施/计划/方案）\ndo = 做（口语化）\ncarry out = 执行（中性，介于两者之间）\n✅ Implement corrective actions.（执行纠正措施 → 正式报告用语）\n✅ Carry out the repairs.（执行维修 → 日常用语）\n事件报告和CAPA文档中用 implement。" },
    ],
    pattern: "Implement + 措施类型 + immediately",
    patternExamples: [
      { en: "Implement preventive actions.", cn: "执行预防措施。", words: [{ w: "preventive", ipa: "/prɪˈvɛntɪv/", cn: "预防性", phonics: "pre 读 /prɪ/，ventive 读 /vɛntɪv/" }] },
      { en: "Implement the emergency plan.", cn: "执行应急预案。", words: [{ w: "emergency", ipa: "/ɪˈmɜːrdʒənsi/", cn: "紧急", phonics: "e 读 /ɪ/，mergency 读 /mɜːrdʒənsi/" }] },
      { en: "Implement all recommendations.", cn: "执行所有建议。", words: [] },
    ],
    thinking: "纠正措施 vs 预防措施：\n纠正措施（Corrective Action）= 解决已发生的问题\n→ 例：更换故障的电容器\n预防措施（Preventive Action）= 防止未来发生\n→ 例：建立电容器定期更换计划\n两者合称 CAPA（Corrective and Preventive Actions）。\n每个 CAPA 都需要：负责人 + 截止日期 + 验证方法。",
    pronunciation: "implement 重音在第一音节：/ˈɪm.plɪ.mɛnt/。\ncorrective 重音在第二音节：/kəˈrɛk.tɪv/。\n节奏：IM-ple-ment ｜ cor-REC-tive ｜ AC-tions ｜ im-ME-di-ate-ly.",
    quiz: [
      { q: "执行预防措施，怎么说？", a: "Implement preventive actions." },
      { q: "纠正措施和预防措施有什么区别？", a: "纠正措施 = 解决已发生的问题（如更换故障电容器）；预防措施 = 防止未来发生（如建立定期更换计划）。两者合称 CAPA，每个都需要负责人+截止日期+验证方法。" },
    ],
  },
  {
    id: 490,
    en: "Develop preventive actions to avoid recurrence.",
    cn: "制定预防措施以避免再次发生。",
    ipa: "/dɪˈvɛl.əp prɪˈvɛn.tɪv ˈæk.ʃənz tuː əˈvɔɪd ˌriː.kəˈrɛns/",
    tags: ["第490句", "预防措施", "★★★★★"],
    when: "纠正措施解决当前问题后，还需要制定预防措施，从系统层面防止同类事件再次发生。",
    words: [
      { w: "preventive", ipa: "/prɪˈvɛn.tɪv/", pos: "形容词", cn: "预防性的", memory: "① prevent = 预防/防止；② preventive = 预防性的。\npreventive action = 预防措施（防止未来发生）。\n对比：corrective = 纠正性的（解决已发生的）。", phonics: "pre 读 /prɪ/，ven 读 /vɛn/，tive 读 /tɪv/，重音在第二音节。", collocations: [["preventive action", "预防措施"], ["preventive maintenance", "预防性维护"], ["preventive measure", "预防措施"]], examples: [["Develop preventive actions.", "制定预防措施。"], ["Preventive maintenance is scheduled monthly.", "预防性维护每月一次。"]] },
      { w: "recurrence", ipa: "/rɪˈkɜːr.əns/", pos: "名词", cn: "再次发生；复发", memory: "① re- = 再次；② cur = 跑/发生（拉丁语 currere）。\nrecurrence = 再次发生/复发。\navoid recurrence = 避免再次发生（预防措施的最终目标）。", phonics: "re 读 /rɪ/，cur 读 /kɜːr/，rence 读 /əns/，重音在第二音节。", collocations: [["avoid recurrence", "避免再次发生"], ["prevent recurrence", "防止复发"], ["recurrence rate", "复发率"]], examples: [["The goal is to avoid recurrence.", "目标是避免再次发生。"], ["The recurrence rate is low.", "复发率很低。"]] },
    ],
    phrases: [
      { p: "avoid recurrence", ipa: "/əˈvɔɪd ˌriː.kəˈrɛns/", cn: "避免再次发生", why: "avoid + recurrence = 避免再次发生。预防措施的最终目标就是 prevent/avoid recurrence。" },
    ],
    grammar: [
      { q: "develop 和 implement 在CAPA流程中怎么区分？", a: "develop = 制定/开发（设计措施方案）\nimplement = 执行/实施（把方案落地）\n✅ Develop preventive actions.（制定预防措施 → 设计阶段）\n✅ Implement preventive actions.（执行预防措施 → 落地阶段）\n先 develop（制定），再 implement（执行），最后 verify（验证）。" },
    ],
    pattern: "Develop + 措施 + to avoid + 目标",
    patternExamples: [
      { en: "Develop a plan to avoid downtime.", cn: "制定计划以避免停机。", words: [] },
      { en: "Develop procedures to prevent errors.", cn: "制定程序以防止错误。", words: [{ w: "procedures", ipa: "/prəˈsiːdʒər/", cn: "流程", phonics: "pro 读 /prə/，cedure 读 /siːdʒər/" }] },
      { en: "Develop training to improve skills.", cn: "制定培训以提升技能。", words: [] },
    ],
    thinking: "CAPA 完整流程：\n① 纠正措施（Corrective）→ 解决当前问题\n② 预防措施（Preventive）→ 防止再次发生\n③ 验证（Verify）→ 确认措施有效\n④ 关闭（Close）→ CAPA完成\n每个CAPA项需要：\n- 描述（Description）\n- 负责人（Owner）\n- 截止日期（Due Date）\n- 验证方法（Verification Method）\n- 状态（Open / In Progress / Closed）",
    pronunciation: "preventive 重音在第二音节：/prɪˈvɛn.tɪv/。\nrecurrence 重音在第二音节：/rɪˈkɜːr.əns/。\n节奏：de-VEL-op ｜ pre-VEN-tive ｜ AC-tions ｜ to a-VOID ｜ re-CUR-rence.",
    quiz: [
      { q: "制定程序以防止错误，怎么说？", a: "Develop procedures to prevent errors." },
      { q: "CAPA的完整流程是什么？", a: "4步：① 纠正措施 → ② 预防措施 → ③ 验证（确认有效）→ ④ 关闭（CAPA完成）。每项需要描述+负责人+截止日期+验证方法+状态。" },
    ],
  },
  {
    id: 491,
    en: "Schedule a post-incident review meeting.",
    cn: "安排事后回顾会议。",
    ipa: "/ˈʃɛd.juːl ə ˈpoʊst ˈɪn.sɪ.dənt rɪˈvjuː ˈmiː.tɪŋ/",
    tags: ["第491句", "事后回顾", "★★★★"],
    when: "RCA和CAPA完成后，需要召开事后回顾会议（Post-Incident Review），让团队总结经验教训。",
    words: [
      { w: "post-incident", ipa: "/ˈpoʊst ˈɪn.sɪ.dənt/", pos: "形容词", cn: "事后的", memory: "① post- = 之后（拉丁语前缀）；② incident = 事件。\npost-incident = 事件之后的/事后的。\npost-incident review = 事后回顾（事件结束后的总结会议）。", phonics: "post 读 /poʊst/，incident 重音在第一音节。", collocations: [["post-incident review", "事后回顾"], ["post-incident report", "事后报告"], ["post-incident analysis", "事后分析"]], examples: [["Schedule the post-incident review.", "安排事后回顾。"], ["The post-incident report is ready.", "事后报告已完成。"]] },
      { w: "schedule", ipa: "/ˈʃɛd.juːl/", pos: "动词", cn: "安排；排定", memory: "① schedule = 时间表/日程安排（名词）；② schedule = 安排/排定（动词）。\nschedule a meeting = 安排会议（确定时间和参与者）。", phonics: "sched 读 /ʃɛd/，ule 读 /juːl/，重音在第一音节。美式读 /ˈskɛd.juːl/。", collocations: [["schedule a meeting", "安排会议"], ["schedule a review", "安排审查"], ["on schedule", "按计划"]], examples: [["Schedule the review for Friday.", "把审查安排在周五。"], ["The meeting is scheduled for 2 PM.", "会议安排在下午2点。"]] },
    ],
    phrases: [
      { p: "post-incident review meeting", ipa: "/ˈpoʊst ˈɪn.sɪ.dənt rɪˈvjuː ˈmiː.tɪŋ/", cn: "事后回顾会议", why: "post-incident + review + meeting = 事后回顾会议。通常在事件发生后一周内召开，参与者包括运维、管理、相关供应商。" },
    ],
    grammar: [
      { q: "post- 前缀还有哪些常见用法？", a: "post- = 之后（拉丁语前缀）：\npost-incident = 事后\npost-mortem = 事后分析（IT行业常用）\npost-maintenance = 维护后\npost-handover = 交接后\n✅ post-incident review = 事后回顾\n✅ post-maintenance test = 维护后测试" },
    ],
    pattern: "Schedule a + 会议类型",
    patternExamples: [
      { en: "Schedule a safety review meeting.", cn: "安排安全审查会议。", words: [{ w: "schedule", ipa: "/ˈʃɛdjuːl/", cn: "安排", phonics: "sched 读 /ʃɛd/，ule 读 /juːl/" }, { w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }, { w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
      { en: "Schedule a training session.", cn: "安排培训课程。", words: [{ w: "schedule", ipa: "/ˈʃɛdjuːl/", cn: "安排", phonics: "sched 读 /ʃɛd/，ule 读 /juːl/" }] },
      { en: "Schedule a follow-up meeting.", cn: "安排后续跟进会议。", words: [{ w: "schedule", ipa: "/ˈʃɛdjuːl/", cn: "安排", phonics: "sched 读 /ʃɛd/，ule 读 /juːl/" }, { w: "meeting", ipa: "/ˈmiːtɪŋ/", cn: "会议", phonics: "meet 读 /miːt/，ing 读 /ɪŋ/" }] },
    ],
    thinking: "事后回顾会议议程：\n① 事件概述（5分钟）\n② 时间线回顾（10分钟）\n③ 根因分析结果（15分钟）\n④ 纠正/预防措施讨论（20分钟）\n⑤ 经验教训总结（10分钟）\n⑥ 行动项分配（10分钟）\n参与者：运维团队 + 管理层 + 相关供应商（如适用）\n会议记录需要在3天内分发给所有参与者。",
    pronunciation: "schedule 读 /ˈʃɛd.juːl/（英式）或 /ˈskɛd.juːl/（美式）。\npost-incident 的 post 读 /poʊst/。\n节奏：SCHED-ule ｜ a POST ｜ IN-ci-dent ｜ re-VIEW ｜ MEET-ing.",
    quiz: [
      { q: "安排后续跟进会议，怎么说？", a: "Schedule a follow-up meeting." },
      { q: "事后回顾会议通常包含哪些议程？", a: "6项：① 事件概述 ② 时间线回顾 ③ 根因分析结果 ④ 纠正/预防措施讨论 ⑤ 经验教训总结 ⑥ 行动项分配。会议记录3天内分发。" },
    ],
  },
  {
    id: 492,
    en: "Document all lessons learned.",
    cn: "记录所有经验教训。",
    ipa: "/ˈdɒk.ju.mɛnt ɔːl ˈlɛs.ənz lɜːrnd/",
    tags: ["第492句", "经验教训", "★★★★"],
    when: "事后回顾会议的重要产出是经验教训（Lessons Learned），需要记录并归档，供未来参考。",
    words: [
      { w: "lessons learned", ipa: "/ˈlɛs.ənz lɜːrnd/", pos: "名词短语", cn: "经验教训", memory: "① lesson = 课/教训；② learned = 学到的。\nlessons learned = 经验教训（从事件中总结的改进点）。\n是项目管理知识体系（PMBOK）的标准术语。", phonics: "lessons 读 /ˈlɛs.ənz/，learned 读 /lɜːrnd/。", collocations: [["lessons learned", "经验教训"], ["document lessons", "记录教训"], ["share lessons", "分享教训"]], examples: [["Document the lessons learned.", "记录经验教训。"], ["Share the lessons with the team.", "与团队分享经验教训。"]] },
      { w: "document", ipa: "/ˈdɒk.ju.mɛnt/", pos: "动词", cn: "记录；归档", memory: "① document = 文件（名词）；② document = 记录/归档（动词）。\ndocument = 用文字记录下来，形成可追溯的文档。\n动词重音在第一音节，名词也在第一音节。", phonics: "doc 读 /dɒk/，u 读 /ju/，ment 读 /mɛnt/，重音在第一音节。", collocations: [["document the process", "记录过程"], ["document the findings", "记录发现"], ["well-documented", "记录完善的"]], examples: [["Document all findings.", "记录所有发现。"], ["The procedure is well-documented.", "该程序记录完善。"]] },
    ],
    phrases: [
      { p: "lessons learned", ipa: "/ˈlɛs.ənz lɜːrnd/", cn: "经验教训", why: "lessons + learned = 经验教训。每次事件都是一次学习机会，记录下来的经验教训可以防止团队重蹈覆辙。" },
    ],
    grammar: [
      { q: "document 作动词和名词时发音一样吗？", a: "动词和名词重音都在第一音节：/ˈdɒk.ju.mɛnt/。\n但在句子中语境不同：\n✅ Please document the findings.（请记录发现 → 动词）\n✅ Please update the document.（请更新文件 → 名词）\n数据中心语境中 document 作动词用得更多（记录操作/事件）。" },
    ],
    pattern: "Document all + 记录对象",
    patternExamples: [
      { en: "Document all actions taken.", cn: "记录所有采取的措施。", words: [] },
      { en: "Document all system changes.", cn: "记录所有系统变更。", words: [{ w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Document all test results.", cn: "记录所有测试结果。", words: [{ w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
    ],
    thinking: "经验教训管理：\n① 记录（Document）→ 写成文档\n② 分类（Categorize）→ 按类型归档（电气/暖通/消防/流程）\n③ 分享（Share）→ 团队培训时引用\n④ 应用（Apply）→ 更新SOP/EOP/MOP\n⑤ 回顾（Review）→ 季度回顾会检查\n经验教训数据库是运维团队最宝贵的知识资产。",
    pronunciation: "document 重音在第一音节：/ˈdɒk.ju.mɛnt/。\nlessons learned 两个词都重读。\n节奏：DOC-u-ment ｜ ALL ｜ LES-sons ｜ LEARNED.",
    quiz: [
      { q: "记录所有系统变更，怎么说？", a: "Document all system changes." },
      { q: "经验教训管理包含哪些步骤？", a: "5步：① 记录 → ② 分类归档 → ③ 团队分享 → ④ 应用到SOP/EOP → ⑤ 季度回顾。经验教训数据库是团队最宝贵的知识资产。" },
    ],
  },
  {
    id: 493,
    en: "Update the emergency operating procedure.",
    cn: "更新应急操作程序。",
    ipa: "/ˌʌpˈdeɪt ði ɪˈmɜːr.dʒən.si ˈɑː.pə.reɪ.tɪŋ ˈproʊ.sɪ.dʒər/",
    tags: ["第493句", "程序更新", "★★★★"],
    when: "根据事后回顾的经验教训，需要更新EOP（应急操作程序），使下次应急响应更加高效。",
    words: [
      { w: "update", ipa: "/ˌʌpˈdeɪt/", pos: "动词", cn: "更新", memory: "① up = 向上/更新；② date = 日期。\nupdate = 更新到最新状态。\n事件后更新文档是持续改进（Continuous Improvement）的核心。", phonics: "up 读 /ʌp/，date 读 /deɪt/，重音在第二音节。", collocations: [["update the procedure", "更新程序"], ["update the plan", "更新计划"], ["update the document", "更新文档"]], examples: [["Update the EOP after the incident.", "事件后更新EOP。"], ["The SOP needs to be updated.", "SOP需要更新。"]] },
    ],
    phrases: [
      { p: "emergency operating procedure", ipa: "/ɪˈmɜːr.dʒən.si ˈɑː.pə.reɪ.tɪŋ ˈproʊ.sɪ.dʒər/", cn: "应急操作程序（EOP）", why: "emergency + operating + procedure = 应急操作程序。EOP是标准化应急响应流程，每次事件后都应该根据经验教训进行更新。" },
    ],
    grammar: [
      { q: "EOP/SOP/MOP 分别是什么？", a: "EOP = Emergency Operating Procedure（应急操作程序）\n→ 紧急情况下的标准化操作流程\nSOP = Standard Operating Procedure（标准操作程序）\n→ 日常操作的标准化流程\nMOP = Method of Procedure（维护操作方案）\n→ 特定维护任务的详细操作步骤\n三者都需要定期更新，事件后尤其需要更新EOP。" },
    ],
    pattern: "Update the + 文档类型",
    patternExamples: [
      { en: "Update the SOP.", cn: "更新标准操作程序。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }] },
      { en: "Update the MOP.", cn: "更新维护操作方案。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }] },
      { en: "Update the training manual.", cn: "更新培训手册。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }] },
    ],
    thinking: "持续改进循环（PDCA）：\n① Plan（计划）→ 制定EOP/SOP/MOP\n② Do（执行）→ 按程序操作\n③ Check（检查）→ 事件后回顾\n④ Act（改进）→ 更新程序\n每次应急事件都是一次'Check'，发现的问题通过更新程序来'Act'。\n这就是为什么事件后要 update the EOP。",
    pronunciation: "update 重音在第二音节：/ˌʌpˈdeɪt/。\nprocedure 重音在第二音节：/ˈproʊ.sɪ.dʒər/。\n节奏：up-DATE ｜ the e-MER-gen-cy ｜ OP-er-a-ting ｜ PRO-ce-dure.",
    quiz: [
      { q: "更新标准操作程序，怎么说？", a: "Update the SOP." },
      { q: "EOP、SOP、MOP分别是什么？", a: "EOP = 应急操作程序（紧急情况用）；SOP = 标准操作程序（日常操作用）；MOP = 维护操作方案（特定维护任务用）。三者都需要定期更新。" },
    ],
  },
  {
    id: 494,
    en: "Verify that all systems have returned to normal.",
    cn: "确认所有系统已恢复正常运行。",
    ipa: "/ˈvɛr.ɪ.faɪ ðæt ɔːl ˈsɪs.təmz hæv rɪˈtɜːrnd tuː ˈnɔːr.məl/",
    tags: ["第494句", "系统恢复确认", "★★★★★"],
    when: "应急处理结束后，需要全面确认所有系统已恢复正常运行，才能正式关闭应急状态。",
    words: [
      { w: "verify", ipa: "/ˈvɛr.ɪ.faɪ/", pos: "动词", cn: "确认；验证", memory: "① veri = 真实（拉丁语 verus）；② fy = 使…。\nverify = 使确认真实 → 验证/确认。\nverify 比 check 更正式，强调通过证据确认。", phonics: "ver 读 /vɛr/，i 读 /ɪ/，fy 读 /faɪ/，重音在第一音节。", collocations: [["verify the result", "确认结果"], ["verify the status", "确认状态"], ["verify and confirm", "验证并确认"]], examples: [["Verify all systems are normal.", "确认所有系统正常。"], ["Please verify the repair.", "请确认维修结果。"]] },
    ],
    phrases: [
      { p: "returned to normal", ipa: "/rɪˈtɜːrnd tuː ˈnɔːr.məl/", cn: "恢复正常", why: "return to + normal = 恢复正常。应急响应结束后，所有系统必须恢复到正常运行状态。" },
    ],
    grammar: [
      { q: "verify 和 check 有什么区别？", a: "verify = 验证/确认（通过证据或测试确认，更正式）\ncheck = 检查（快速查看状态，更日常）\n✅ Verify that all systems are normal.（确认所有系统正常 → 需要逐项验证）\n✅ Check the UPS status.（检查UPS状态 → 快速看一下）\n应急结束确认用 verify，因为需要逐项验证。" },
    ],
    pattern: "Verify that + 恢复状态",
    patternExamples: [
      { en: "Verify that power is stable.", cn: "确认供电稳定。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }, { w: "stable", ipa: "/ˈsteɪbl/", cn: "稳定", phonics: "sta 读 /steɪ/，ble 读 /bl/" }] },
      { en: "Verify that all alarms are cleared.", cn: "确认所有告警已恢复。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
      { en: "Verify that the temperature is normal.", cn: "确认温度正常。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "系统恢复确认清单：\n① 供电系统：电压/频率/负载正常\n② UPS系统：运行正常，电池充电中\n③ 发电机：已停止，回到自动模式\n④ 制冷系统：温度/湿度正常\n⑤ 消防系统：恢复正常监控\n⑥ BMS/DCIM：无活动告警\n全部确认后才能关闭应急状态。",
    pronunciation: "verify 重音在第一音节：/ˈvɛr.ɪ.faɪ/。\nreturned 的 ed 读 /d/：/rɪˈtɜːrnd/。\n节奏：VER-i-fy ｜ that ALL SYS-tems ｜ have re-TURNED ｜ to NOR-mal.",
    quiz: [
      { q: "确认所有告警已恢复，怎么说？", a: "Verify that all alarms are cleared." },
      { q: "系统恢复确认需要检查哪些系统？", a: "6大系统：① 供电（电压/频率/负载）② UPS（运行/充电）③ 发电机（停止/自动）④ 制冷（温度/湿度）⑤ 消防（正常监控）⑥ BMS/DCIM（无告警）。全部确认后才能关闭应急状态。" },
    ],
  },
  {
    id: 495,
    en: "Close the incident ticket.",
    cn: "关闭事件工单。",
    ipa: "/kloʊz ði ˈɪn.sɪ.dənt ˈtɪk.ɪt/",
    tags: ["第495句", "工单关闭", "★★★★"],
    when: "所有系统恢复正常、事件报告完成、CAPA制定后，可以关闭事件工单。关闭工单标志着应急事件正式结束。",
    words: [
      { w: "close", ipa: "/kloʊz/", pos: "动词", cn: "关闭", memory: "① close = 关闭（动词）/ 近的（形容词）。\n② close a ticket = 关闭工单（标记为已完成）。\n工单生命周期：创建 → 处理 → 验证 → 关闭。", phonics: "close 作动词读 /kloʊz/，作形容词读 /kloʊs/。", collocations: [["close the ticket", "关闭工单"], ["close the incident", "关闭事件"], ["ticket closed", "工单已关闭"]], examples: [["Please close the incident ticket.", "请关闭事件工单。"], ["The ticket was closed yesterday.", "工单昨天关闭了。"]] },
    ],
    phrases: [
      { p: "incident ticket", ipa: "/ˈɪn.sɪ.dənt ˈtɪk.ɪt/", cn: "事件工单", why: "incident + ticket = 事件工单。关闭工单前必须确认：① 问题已解决 ② 客户已确认 ③ 报告和CAPA已完成。" },
    ],
    grammar: [
      { q: "工单关闭前需要确认什么？", a: "关闭前确认清单：\n① 问题已完全解决（not just workaround）\n② 系统恢复正常运行\n③ 客户已确认满意\n④ 事件报告已完成\n⑤ CAPA已制定（纠正+预防措施）\n⑥ 所有相关方已通知\n全部满足后才能 close the ticket。" },
    ],
    pattern: "Close the + 工单类型",
    patternExamples: [
      { en: "Close the fault ticket.", cn: "关闭故障工单。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "Close the service request.", cn: "关闭服务请求。", words: [] },
      { en: "Close the change request.", cn: "关闭变更请求。", words: [] },
    ],
    thinking: "工单生命周期：\n① Created（创建）→ 记录问题\n② Assigned（分配）→ 分配给处理团队\n③ In Progress（处理中）→ 排查和修复\n④ Resolved（已解决）→ 修复完成\n⑤ Verified（已验证）→ 确认修复有效\n⑥ Closed（已关闭）→ 正式结束\n只有经过 Verified 才能 Closed，不能跳过验证。",
    pronunciation: "close 作动词读 /kloʊz/，注意和 close（形容词 /kloʊs/）区分。\n节奏：CLOSE ｜ the IN-ci-dent ｜ TICK-et.",
    quiz: [
      { q: "关闭故障工单，怎么说？", a: "Close the fault ticket." },
      { q: "工单关闭前需要满足哪些条件？", a: "6项：① 问题已解决 ② 系统正常 ③ 客户确认 ④ 报告完成 ⑤ CAPA制定 ⑥ 相关方通知。必须经过验证（Verified）才能关闭（Closed）。" },
    ],
  },
  {
    id: 496,
    en: "Notify all stakeholders that the incident is resolved.",
    cn: "通知所有相关方事件已解决。",
    ipa: "/ˈnoʊ.tɪ.faɪ ɔːl ˈsteɪk.hoʊl.dərz ðæt ði ˈɪn.sɪ.dənt ɪz rɪˈzɒlvd/",
    tags: ["第496句", "通知相关方", "★★★★"],
    when: "事件解决后，需要通知所有相关方（stakeholders），包括客户、管理层、运维团队和供应商。",
    words: [
      { w: "stakeholder", ipa: "/ˈsteɪk.hoʊl.dər/", pos: "名词", cn: "相关方；利益攸关者", memory: "① stake = 利害关系/股份；② holder = 持有者。\nstakeholder = 利益攸关者（与事件结果有利害关系的人）。\n数据中心事件的stakeholders：客户、管理层、运维、供应商。", phonics: "stake 读 /steɪk/，holder 读 /hoʊl.dər/，重音在第一音节。", collocations: [["all stakeholders", "所有相关方"], ["key stakeholders", "关键相关方"], ["stakeholder communication", "相关方沟通"]], examples: [["Notify all stakeholders.", "通知所有相关方。"], ["Update the key stakeholders.", "更新关键相关方。"]] },
    ],
    phrases: [
      { p: "the incident is resolved", ipa: "/ði ˈɪn.sɪ.dənt ɪz rɪˈzɒlvd/", cn: "事件已解决", why: "incident + is resolved = 事件已解决。resolved 是被动语态，表示事件已经被解决。通知相关方时使用这个标准表述。" },
    ],
    grammar: [
      { q: "resolved 和 closed 在工单语境中有什么区别？", a: "resolved = 已解决（技术层面问题修好了）\nclosed = 已关闭（行政层面工单结束了）\n✅ The incident is resolved.（事件已解决 → 问题修好了）\n✅ The ticket is closed.（工单已关闭 → 行政流程结束）\n先 resolved（解决），再 verified（验证），最后 closed（关闭）。" },
    ],
    pattern: "Notify + 对象 + that + 状态",
    patternExamples: [
      { en: "Notify the customer that power is restored.", cn: "通知客户供电已恢复。", words: [{ w: "notify", ipa: "/ˈnoʊtɪfaɪ/", cn: "通知", phonics: "not 读 /noʊt/，ify 读 /ɪfaɪ/" }, { w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }] },
      { en: "Notify the manager that the issue is fixed.", cn: "通知经理问题已修复。", words: [{ w: "notify", ipa: "/ˈnoʊtɪfaɪ/", cn: "通知", phonics: "not 读 /noʊt/，ify 读 /ɪfaɪ/" }, { w: "issue", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
      { en: "Notify the team that the alarm is cleared.", cn: "通知团队告警已恢复。", words: [{ w: "notify", ipa: "/ˈnoʊtɪfaɪ/", cn: "通知", phonics: "not 读 /noʊt/，ify 读 /ɪfaɪ/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
    ],
    thinking: "事件通知相关方的时机：\n① 发现时 → 通知运维团队和值班经理\n② 处理中 → 定期更新客户和管理层\n③ 解决时 → 通知所有相关方（本句）\n④ 关闭时 → 发送最终报告给所有相关方\n沟通频率：Critical 每30分钟更新，Warning 每2小时更新。",
    pronunciation: "stakeholder 重音在第一音节：/ˈsteɪk.hoʊl.dər/。\nresolved 的 ed 读 /d/：/rɪˈzɒlvd/。\n节奏：NO-ti-fy ｜ all STAKE-hold-ers ｜ that the IN-ci-dent ｜ is re-SOLVED.",
    quiz: [
      { q: "通知客户供电已恢复，怎么说？", a: "Notify the customer that power is restored." },
      { q: "resolved 和 closed 在工单中怎么区分？", a: "resolved = 已解决（技术问题修好了）；closed = 已关闭（行政流程结束）。先 resolved → verified → closed。通知相关方用 resolved，因为技术层面已经解决。" },
    ],
  },
  {
    id: 497,
    en: "File the incident report and all supporting documents.",
    cn: "归档事件报告和所有支撑文档。",
    ipa: "/faɪl ði ˈɪn.sɪ.dənt rɪˈpɔːrt ænd ɔːl səˈpɔːr.tɪŋ ˈdɒk.jə.mənts/",
    tags: ["第497句", "文档归档", "★★★★"],
    when: "事件处理完毕后，所有相关文档需要归档保存，供未来审计和参考。",
    words: [
      { w: "file", ipa: "/faɪl/", pos: "动词", cn: "归档；存档", memory: "① file = 文件（名词）；② file = 归档/存档（动词）。\nfile = 把文档放入档案系统保存。\nfile 也可以表示'提交'：file a report = 提交报告。", phonics: "f 读 /f/，i 读 /aɪ/，le 读 /l/。", collocations: [["file a report", "归档报告"], ["file the documents", "归档文档"], ["on file", "存档中"]], examples: [["File the report for audit.", "归档报告以供审计。"], ["All records are on file.", "所有记录都已存档。"]] },
      { w: "supporting documents", ipa: "/səˈpɔːr.tɪŋ ˈdɒk.jə.mənts/", pos: "名词短语", cn: "支撑文档", memory: "① supporting = 支撑的/辅助的；② documents = 文档。\nsupporting documents = 支撑文档（事件报告附件：BMS日志截图、设备照片、供应商报告等）。", phonics: "supporting 重音在第二音节；documents 重音在第一音节。", collocations: [["supporting documents", "支撑文档"], ["supporting evidence", "支撑证据"], ["supporting data", "支撑数据"]], examples: [["Attach all supporting documents.", "附上所有支撑文档。"], ["The supporting evidence is clear.", "支撑证据清晰。"]] },
    ],
    phrases: [
      { p: "file the incident report", ipa: "/faɪl ði ˈɪn.sɪ.dənt rɪˈpɔːrt/", cn: "归档事件报告", why: "file + the report = 归档报告。事件报告归档是事件管理流程的最后一步，确保文档可追溯。" },
    ],
    grammar: [
      { q: "file 作动词有哪些含义？", a: "file 作动词有两个常用含义：\n① 归档/存档：File the documents.（归档文档 → 保存起来）\n② 提交/递交：File a report.（提交报告 → 交给上级/系统）\n✅ File the incident report.（可以理解为归档，也可以理解为提交）\n上下文决定具体含义。" },
    ],
    pattern: "File the + 文档 + and + 附件",
    patternExamples: [
      { en: "File the audit report and findings.", cn: "归档审计报告和发现。", words: [{ w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
      { en: "File the maintenance record and photos.", cn: "归档维护记录和照片。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "File the CAPA and verification results.", cn: "归档CAPA和验证结果。", words: [] },
    ],
    thinking: "事件归档文档清单：\n① 事件报告（Incident Report）\n② RCA报告（Root Cause Analysis）\n③ CAPA记录（Corrective/Preventive Actions）\n④ BMS/DCIM日志截图\n⑤ 现场照片/视频\n⑥ 供应商报告（如适用）\n⑦ 会议纪要（Post-Incident Review）\n⑧ 经验教训记录\n归档保存期限：至少3年（或按合同要求）。",
    pronunciation: "file 读 /faɪl/，注意和 fill（填充 /fɪl/）区分。\nsupporting 重音在第二音节。\n节奏：FILE ｜ the IN-ci-dent ｜ re-PORT ｜ and ALL ｜ sup-POR-ting ｜ DOC-u-ments.",
    quiz: [
      { q: "归档维护记录和照片，怎么说？", a: "File the maintenance record and photos." },
      { q: "事件归档需要包含哪些文档？", a: "8类：① 事件报告 ② RCA报告 ③ CAPA记录 ④ BMS/DCIM日志截图 ⑤ 现场照片/视频 ⑥ 供应商报告 ⑦ 会议纪要 ⑧ 经验教训。保存期限至少3年。" },
    ],
  },
  {
    id: 498,
    en: "The emergency response is now complete.",
    cn: "本次应急响应结束。",
    ipa: "/ði ɪˈmɜːr.dʒən.si rɪˈspɒns ɪz naʊ kəmˈpliːt/",
    tags: ["第498句", "应急结束", "★★★★★"],
    when: "所有系统恢复、文档归档、相关方通知完成后，正式宣布应急响应结束。这句话标志着从应急状态回到正常运行状态。",
    words: [
      { w: "response", ipa: "/rɪˈspɒns/", pos: "名词", cn: "响应；应对", memory: "① re- = 回应；② sponse = 承诺（拉丁语 spondere）。\nresponse = 响应/应对（对事件的反应和处理）。\nemergency response = 应急响应（对紧急情况的处理）。", phonics: "re 读 /rɪ/，sponse 读 /spɒns/，重音在第二音节。", collocations: [["emergency response", "应急响应"], ["response time", "响应时间"], ["response team", "响应团队"]], examples: [["The response was fast.", "响应很快。"], ["What was the response time?", "响应时间是多少？"]] },
    ],
    phrases: [
      { p: "is now complete", ipa: "/ɪz naʊ kəmˈpliːt/", cn: "现在结束", why: "is now complete = 现在已经完成/结束。now 强调'从此刻起'，标志着状态转换（应急→正常）。" },
    ],
    grammar: [
      { q: "complete 和 finish 有什么区别？", a: "complete = 完成/结束（更正式，强调完整性）\nfinish = 完成/结束（更日常）\n✅ The emergency response is complete.（应急响应结束 → 正式宣告）\n✅ I finished the report.（我写完了报告 → 日常用语）\n正式宣告应急结束用 complete，不用 finish。" },
    ],
    pattern: "The + 流程 + is now complete",
    patternExamples: [
      { en: "The maintenance is now complete.", cn: "维护工作结束。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "The inspection is now complete.", cn: "检查结束。", words: [] },
      { en: "The handover is now complete.", cn: "交接结束。", words: [{ w: "handover", ipa: "/ˈhændoʊvər/", cn: "交接", phonics: "hand 读 /hænd/，over 读 /oʊvər/" }] },
    ],
    thinking: "应急响应结束的标志：\n① 所有系统恢复正常运行\n② 所有告警已清除\n③ 事件工单已关闭\n④ 所有相关方已通知\n⑤ 文档已归档\n⑥ 值班经理正式宣布\n宣布结束后，运维团队回到正常值班状态。",
    pronunciation: "response 重音在第二音节：/rɪˈspɒns/。\ncomplete 重音在第二音节：/kəmˈpliːt/。\n节奏：The e-MER-gen-cy ｜ re-SPONSE ｜ is NOW ｜ com-PLETE.",
    quiz: [
      { q: "维护工作结束，怎么说？", a: "The maintenance is now complete." },
      { q: "应急响应结束需要满足哪些条件？", a: "6项：① 系统正常 ② 告警清除 ③ 工单关闭 ④ 相关方通知 ⑤ 文档归档 ⑥ 值班经理宣布。全部满足后才能正式结束。" },
    ],
  },
  {
    id: 499,
    en: "Thank you all for your quick response.",
    cn: "感谢大家的快速响应。",
    ipa: "/θæŋk juː ɔːl fɔːr jɔːr kwɪk rɪˈspɒns/",
    tags: ["第499句", "感谢团队", "★★★★"],
    when: "应急响应结束后，值班经理向团队表示感谢。肯定团队的努力和快速响应，是良好的管理习惯。",
    words: [
      { w: "quick response", ipa: "/kwɪk rɪˈspɒns/", pos: "名词短语", cn: "快速响应", memory: "① quick = 快速的；② response = 响应。\nquick response = 快速响应（从发现到行动的时间短）。\n响应时间是应急能力的关键指标（KPI）。", phonics: "quick 读 /kwɪk/，response 重音在第二音节。", collocations: [["quick response", "快速响应"], ["rapid response", "快速响应（同义）"], ["response time", "响应时间"]], examples: [["Thank you for your quick response.", "感谢你的快速响应。"], ["The response time was excellent.", "响应时间很优秀。"]] },
    ],
    phrases: [
      { p: "thank you all for", ipa: "/θæŋk juː ɔːl fɔːr/", cn: "感谢大家的", why: "thank you all for + 名词/动名词 = 感谢大家做了某事。应急结束后的团队致谢是标准管理实践。" },
    ],
    grammar: [
      { q: "thank you for 后面接什么？", a: "thank you for + 名词：Thank you for your support.（感谢你的支持）\nthank you for + 动名词：Thank you for responding quickly.（感谢快速响应）\n✅ Thank you all for your quick response.（感谢大家的快速响应 → for + 名词）\n✅ Thank you all for working overtime.（感谢大家加班 → for + 动名词）" },
    ],
    pattern: "Thank you all for + 团队贡献",
    patternExamples: [
      { en: "Thank you all for your hard work.", cn: "感谢大家的辛勤工作。", words: [{ w: "thank", ipa: "/θæŋk/", cn: "感谢", phonics: "th 读 /θ/，ank 读 /æŋk/" }] },
      { en: "Thank you all for staying calm.", cn: "感谢大家保持冷静。", words: [{ w: "thank", ipa: "/θæŋk/", cn: "感谢", phonics: "th 读 /θ/，ank 读 /æŋk/" }] },
      { en: "Thank you all for your teamwork.", cn: "感谢大家的团队协作。", words: [{ w: "thank", ipa: "/θæŋk/", cn: "感谢", phonics: "th 读 /θ/，ank 读 /æŋk/" }] },
    ],
    thinking: "应急结束后的团队管理：\n① 感谢团队（本句）→ 肯定努力\n② 简短总结 → 哪里做得好\n③ 提出改进点 → 哪里可以更好\n④ 安排休息 → 应急响应消耗大，需要恢复\n良好的团队管理能提高下次应急响应的效率。",
    pronunciation: "thank 的 th 咬舌尖：/θæŋk/。\nquick 的 qu 读 /kw/：/kwɪk/。\n节奏：THANK you ALL ｜ for your QUICK ｜ re-SPONSE.",
    quiz: [
      { q: "感谢大家的团队协作，怎么说？", a: "Thank you all for your teamwork." },
      { q: "应急结束后团队管理需要做什么？", a: "4项：① 感谢团队（肯定努力）② 简短总结（做得好的地方）③ 提出改进点（可以更好的地方）④ 安排休息（恢复精力）。良好的团队管理能提高下次应急响应效率。" },
    ],
  },
  {
    id: 500,
    en: "Let's stay vigilant and keep the data center safe.",
    cn: "让我们保持警惕，守护数据中心安全。",
    ipa: "/lɛts steɪ ˈvɪdʒ.ɪ.lənt ænd kiːp ðə ˈdeɪ.tə ˈsɛn.tər seɪf/",
    tags: ["第500句", "场景结束", "★★★★★"],
    when: "这是场景001的最后一句话。值班经理用这句话结束整个交接班过程，提醒团队时刻保持警惕，确保数据中心安全运行。",
    words: [
      { w: "vigilant", ipa: "/ˈvɪdʒ.ɪ.lənt/", pos: "形容词", cn: "警惕的；警觉的", memory: "① vigil = 守夜/警戒（拉丁语 vigilia）；② vigilant = 警惕的/警觉的。\nvigilant = 保持警惕，随时准备应对突发情况。\n名词形式：vigilance（警惕性）。", phonics: "vig 读 /vɪdʒ/，i 读 /ɪ/，lant 读 /lənt/，重音在第一音节。", collocations: [["stay vigilant", "保持警惕"], ["remain vigilant", "保持警觉"], ["vigilant monitoring", "警惕性监控"]], examples: [["Stay vigilant at all times.", "时刻保持警惕。"], ["We must remain vigilant.", "我们必须保持警觉。"]] },
      { w: "safe", ipa: "/seɪf/", pos: "形容词", cn: "安全的", memory: "① safe = 安全的（无危险/无风险）。\n② keep + 宾语 + safe = 保持…安全。\n数据中心安全包括：设备安全 + 人员安全 + 数据安全。", phonics: "s 读 /s/，a 读 /eɪ/，fe 读 /f/。", collocations: [["keep safe", "保持安全"], ["safe operation", "安全运行"], ["safety first", "安全第一"]], examples: [["Keep the data center safe.", "守护数据中心安全。"], ["Safety is our top priority.", "安全是我们的首要任务。"]] },
    ],
    phrases: [
      { p: "stay vigilant", ipa: "/steɪ ˈvɪdʒ.ɪ.lənt/", cn: "保持警惕", why: "stay + vigilant = 保持警惕。数据中心运维的核心态度：时刻保持警惕，不放过任何异常信号。" },
    ],
    grammar: [
      { q: "Let's 后面接什么？", a: "Let's = Let us = 让我们（提议/号召）\nLet's + 动词原形：\n✅ Let's stay vigilant.（让我们保持警惕）\n✅ Let's review the alarms.（让我们检查告警）\n✅ Let's keep the data center safe.（让我们守护数据中心安全）\nLet's 用于提议和号召，语气友好而坚定。" },
    ],
    pattern: "Let's + 行动 + and + 行动",
    patternExamples: [
      { en: "Let's stay focused and work together.", cn: "让我们保持专注，协同工作。", words: [] },
      { en: "Let's monitor closely and report any issues.", cn: "让我们密切监控，报告任何问题。", words: [{ w: "monitor", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }, { w: "issues", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
      { en: "Let's follow the procedure and stay safe.", cn: "让我们遵守程序，保持安全。", words: [{ w: "follow", ipa: "/ˈfɒloʊ/", cn: "跟踪", phonics: "fol 读 /fɒl/，low 读 /loʊ/" }, { w: "procedure", ipa: "/prəˈsiːdʒər/", cn: "流程", phonics: "pro 读 /prə/，cedure 读 /siːdʒər/" }] },
    ],
    thinking: "这句话总结了数据中心运维工程师的核心职责：\n① stay vigilant = 保持警惕（不放过异常）\n② keep safe = 守护安全（设备+人员+数据）\n交接班不仅是信息传递，更是责任传递。\n从第1句到第500句，覆盖了完整的交接班流程：\n开始交班 → 告警 → DCIM → 事件单 → 故障单 → SLA → 施工 → 供应商 → 人员 → 天气 → 电气暖通 → BMS操作 → DCIM定位 → MOP执行 → EOP应急 → 结束。\n恭喜完成全部500句学习！",
    pronunciation: "vigilant 重音在第一音节：/ˈvɪdʒ.ɪ.lənt/。\nvigilant 的 g 读软音 /dʒ/，不是硬音 /g/。\n节奏：Let's STAY ｜ VIG-i-lant ｜ and KEEP ｜ the DA-ta CEN-ter ｜ SAFE.",
    quiz: [
      { q: "让我们密切监控并报告问题，怎么说？", a: "Let's monitor closely and report any issues." },
      { q: "场景001覆盖了哪些交接班环节？", a: "完整15个环节：开始交班 → 告警状态 → BMS操作 → DCIM交接 → 事件单 → 故障单 → SLA/施工 → 供应商/随工 → 人员/培训 → 天气/巡检 → 电气/暖通 → BMS高级操作 → DCIM定位 → MOP执行 → EOP应急 → 结束。共500句。" },
    ],
  },
];

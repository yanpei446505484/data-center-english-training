// EXPORTS: MOCK_SENTENCES_PART22B
// Part 22B: 柴油发电机后半段 (1541-1560)

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART22B: ISentence[] = [
  {
    id: 1541,
    en: "Please start the generator manually.",
    cn: "请手动启动柴油发电机。",
    ipa: "/pliːz stɑːrt ðə ˈdʒɛnəreɪtər ˈmænjuəli/",
    tags: ["第1541句", "启动测试", "★★★★★"],
    when: "需要手动启动柴油发电机进行测试或应急操作。手动启动通常在自动启动失败或定期测试时使用。",
    words: [
      { w: "start", ipa: "/stɑːrt/", pos: "动词", cn: "启动；开始", memory: "start = 启动/开始。\n在电气工程中：\nstart the generator = 启动发电机\nstart the engine = 启动发动机\n与 stop（停止）相反。", phonics: "start 读 /stɑːrt/，ar 读 /ɑːr/。", collocations: [["start manually", "手动启动"], ["start automatically", "自动启动"], ["start the engine", "启动发动机"]], examples: [["Please start the generator.", "请启动发电机。"], ["The engine started successfully.", "发动机启动成功。"]] },
      { w: "manually", ipa: "/ˈmænjuəli/", pos: "副词", cn: "手动地", memory: "manual = 手动的；-ly = 副词后缀。\nmanually = 手动地/人工操作。\n与 automatically（自动地）相反。", phonics: "man 读 /mæn/，ually 读 /juəli/。", collocations: [["operate manually", "手动操作"], ["switch manually", "手动切换"], ["control manually", "手动控制"]], examples: [["Please operate the switch manually.", "请手动操作开关。"], ["The valve can be controlled manually.", "阀门可以手动控制。"]] },
    ],
    phrases: [
      { p: "start manually", ipa: "/stɑːrt ˈmænjuəli/", cn: "手动启动", why: "start + manually = 手动启动。指通过人工操作而非自动控制系统来启动设备。" },
    ],
    grammar: [
      { q: "manually 和 automatically 有什么区别？", a: "manually = 手动地（人工操作）\nautomatically = 自动地（系统控制）\n✅ Please start the generator manually.（请手动启动发电机 → 人工操作控制面板）\n✅ The generator starts automatically.（发电机自动启动 → 系统检测到市电中断后自动启动）\n手动启动通常用于测试或自动启动失败时的应急操作。" },
    ],
    pattern: "Please start the + 设备 + manually",
    patternExamples: [
      { en: "Please start the pump manually.", cn: "请手动启动水泵。", words: [{ w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }] },
      { en: "Please start the compressor manually.", cn: "请手动启动压缩机。", words: [{ w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }, { w: "compressor", ipa: "/kəmˈprɛsər/", cn: "压缩机", phonics: "com 读 /kəm/，pressor 读 /prɛsər/" }] },
      { en: "Please start the cooling fan manually.", cn: "请手动启动冷却风机。", words: [{ w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }, { w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }] },
    ],
    thinking: "柴油发电机启动方式：\n① 自动启动（Auto）：市电中断时，ATS 自动切换，发电机自动启动\n② 手动启动（Manual）：通过控制面板上的启动按钮人工启动\n③ 远程启动（Remote）：通过 BMS 或 SCADA 系统远程启动\n\n手动启动步骤：\n1. 确认发电机处于 Manual 模式\n2. 按下 Start 按钮\n3. 观察启动过程（通常 10-15 秒内完成）\n4. 确认发电机运行参数正常",
    pronunciation: "generator 的 gen 读 /ˈdʒɛn/，不要读成 /ˈdʒiːn/。\nmanually 的 man 读 /mæn/，不要读成 /meɪn/。",
    quiz: [
      { q: "请自动启动发电机，怎么说？", a: "Please start the generator automatically." },
      { q: "手动启动和自动启动有什么区别？", a: "手动启动（manual start）需要人工按下启动按钮；自动启动（auto start）由 ATS（自动转换开关）检测到市电中断后，自动发出启动信号，发电机在 10-15 秒内自动启动并带载。" },
    ],
  },
  {
    id: 1542,
    en: "The generator started successfully.",
    cn: "柴油发电机启动成功。",
    ipa: "/ðə ˈdʒɛnəreɪtər ˈstɑːrtɪd səkˈsɛsfəli/",
    tags: ["第1542句", "启动测试", "★★★★★"],
    when: "确认柴油发电机已经成功启动，发动机运转正常，各项参数在正常范围内。",
    words: [
      { w: "successfully", ipa: "/səkˈsɛsfəli/", pos: "副词", cn: "成功地", memory: "success = 成功；-ful = 形容词后缀；-ly = 副词后缀。\nsuccessfully = 成功地/顺利完成。\nstarted successfully = 启动成功。", phonics: "suc 读 /sək/，cess 读 /sɛs/，fully 读 /fəli/。", collocations: [["started successfully", "启动成功"], ["completed successfully", "完成成功"], ["tested successfully", "测试成功"]], examples: [["The engine started successfully.", "发动机启动成功。"], ["The test was completed successfully.", "测试成功完成。"]] },
    ],
    phrases: [
      { p: "started successfully", ipa: "/ˈstɑːrtɪd səkˈsɛsfəli/", cn: "启动成功", why: "started + successfully = 启动成功。确认设备已按预期完成启动过程，无故障告警。" },
    ],
    grammar: [
      { q: "started 和 has started 有什么区别？", a: "started = 启动了（一般过去时，描述已完成的动作）\nhas started = 已经启动了（现在完成时，强调对当前的影响）\n✅ The generator started successfully.（发电机启动成功了 → 报告启动结果）\n✅ The generator has started.（发电机已经启动了 → 强调当前状态是运行中）\n交接时用 started，因为关注的是'启动是否成功'这个结果。" },
    ],
    pattern: "The + 设备 + started successfully",
    patternExamples: [
      { en: "The pump started successfully.", cn: "水泵启动成功。", words: [{ w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "started", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "The compressor started successfully.", cn: "压缩机启动成功。", words: [{ w: "compressor", ipa: "/kəmˈprɛsər/", cn: "压缩机", phonics: "com 读 /kəm/，pressor 读 /prɛsər/" }, { w: "started", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "The cooling system started successfully.", cn: "冷却系统启动成功。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "started", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
    ],
    thinking: "发电机启动成功的判断标准：\n① 发动机在 10-15 秒内启动（cranking time < 15s）\n② 转速达到额定值（1500 RPM / 50Hz 或 1800 RPM / 60Hz）\n③ 电压和频率稳定在额定范围内\n④ 无告警信号\n⑤ 机油压力正常（> 2 bar）\n⑥ 冷却液温度正常（< 95°C）",
    pronunciation: "successfully 重音在第二音节 /səkˈsɛsfəli/，不要读成 /ˈsʌksɛsfəli/。",
    quiz: [
      { q: "水泵启动成功，怎么说？", a: "The pump started successfully." },
    ],
  },
  {
    id: 1543,
    en: "Please switch the generator to automatic mode.",
    cn: "请将柴油发电机切换到自动模式。",
    ipa: "/pliːz swɪtʃ ðə ˈdʒɛnəreɪtər tuː ˌɔːtəˈmætɪk moʊd/",
    tags: ["第1543句", "启动测试", "★★★★★"],
    when: "测试完成后，将发电机从手动模式切换回自动模式，确保市电中断时能自动启动。",
    words: [
      { w: "switch", ipa: "/swɪtʃ/", pos: "动词", cn: "切换；转换", memory: "switch = 切换/转换/开关。\nswitch to = 切换到。\nswitch the mode = 切换模式。\n在电气工程中，switch 也指开关设备。", phonics: "switch 读 /swɪtʃ/，sw 读 /sw/。", collocations: [["switch to auto", "切换到自动"], ["switch to manual", "切换到手动"], ["switch mode", "切换模式"]], examples: [["Please switch to automatic mode.", "请切换到自动模式。"], ["Switch the controller to remote.", "将控制器切换到远程模式。"]] },
      { w: "automatic", ipa: "/ˌɔːtəˈmætɪk/", pos: "形容词", cn: "自动的", memory: "auto = 自动；-matic = 形容词后缀。\nautomatic = 自动的/自动化的。\nautomatic mode = 自动模式。\n与 manual（手动的）相反。", phonics: "au 读 /ɔː/，to 读 /tə/，matic 读 /mætɪk/。", collocations: [["automatic mode", "自动模式"], ["automatic start", "自动启动"], ["automatic transfer switch", "自动转换开关"]], examples: [["The generator is in automatic mode.", "发电机处于自动模式。"], ["The ATS switches automatically.", "ATS 自动切换。"]] },
    ],
    phrases: [
      { p: "switch to automatic mode", ipa: "/swɪtʃ tuː ˌɔːtəˈmætɪk moʊd/", cn: "切换到自动模式", why: "switch + to + automatic + mode = 切换到自动模式。将设备控制方式从手动改为自动，由系统自动管理。" },
    ],
    grammar: [
      { q: "switch 和 change 有什么区别？", a: "switch = 切换（在几个预设选项之间转换）\nchange = 改变（更广泛的改变）\n✅ Switch to automatic mode.（切换到自动模式 → 在 Manual/Auto/Remote 之间切换）\n✅ Change the settings.（改变设置 → 修改参数值）\n模式切换用 switch，参数修改用 change。" },
    ],
    pattern: "Please switch the + 设备 + to + 模式",
    patternExamples: [
      { en: "Please switch the UPS to bypass mode.", cn: "请将UPS切换到旁路模式。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "mode", ipa: "/moʊd/", cn: "模式", phonics: "mode 读 /moʊd/" }] },
      { en: "Please switch the controller to remote.", cn: "请将控制器切换到远程模式。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "Please switch the chiller to standby.", cn: "请将冷水机组切换到备用状态。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }] },
    ],
    thinking: "发电机控制模式：\n① Manual（手动）：人工控制启动/停止\n② Auto（自动）：ATS 检测到市电中断后自动启动\n③ Remote（远程）：通过 BMS/SCADA 远程控制\n④ Off（关闭）：禁止启动\n\n正常运行时发电机应处于 Auto 模式，确保应急供电可靠性。\n测试时切换到 Manual，测试完成后必须切回 Auto。",
    pronunciation: "automatic 重音在第三音节 /ˌɔːtəˈmætɪk/，不要读成 /ˈɔːtəmætɪk/。",
    quiz: [
      { q: "请将发电机切换到手动模式，怎么说？", a: "Please switch the generator to manual mode." },
    ],
  },
  {
    id: 1544,
    en: "Please perform an automatic start test.",
    cn: "请执行自动启动测试。",
    ipa: "/pliːz pərˈfɔːrm ən ˌɔːtəˈmætɪk stɑːrt tɛst/",
    tags: ["第1544句", "启动测试", "★★★★★"],
    when: "定期执行自动启动测试，验证发电机在市电中断时能否按预期自动启动并带载。这是数据中心运维的强制性定期测试项目。",
    words: [
      { w: "perform", ipa: "/pərˈfɔːrm/", pos: "动词", cn: "执行；进行", memory: "perform = 执行/进行/实施。\nperform a test = 执行测试。\nperform an inspection = 执行检查。\n与 conduct、carry out 同义。", phonics: "per 读 /pər/，form 读 /fɔːrm/。", collocations: [["perform a test", "执行测试"], ["perform maintenance", "执行维护"], ["perform inspection", "执行检查"]], examples: [["Please perform the weekly test.", "请执行每周测试。"], ["We performed a load test yesterday.", "我们昨天执行了带载测试。"]] },
      { w: "test", ipa: "/tɛst/", pos: "名词", cn: "测试；试验", memory: "test = 测试/试验。\nstart test = 启动测试。\nload test = 带载测试。\nno-load test = 空载测试。", phonics: "test 读 /tɛst/，e 读 /ɛ/。", collocations: [["start test", "启动测试"], ["load test", "带载测试"], ["no-load test", "空载测试"], ["functional test", "功能测试"]], examples: [["The start test was successful.", "启动测试成功。"], ["We need to perform a load test.", "我们需要执行带载测试。"]] },
    ],
    phrases: [
      { p: "automatic start test", ipa: "/ˌɔːtəˈmætɪk stɑːrt tɛst/", cn: "自动启动测试", why: "automatic + start + test = 自动启动测试。模拟市电中断场景，验证发电机能否自动启动并带载。" },
    ],
    grammar: [
      { q: "perform 和 do 有什么区别？", a: "perform = 执行（正式用语，强调按规程操作）\ndo = 做（口语化，泛指动作）\n✅ Please perform an automatic start test.（请执行自动启动测试 → 按标准操作规程执行）\n✅ What are you doing?（你在做什么？→ 日常对话）\n工程文档和正式场合用 perform/conduct。" },
    ],
    pattern: "Please perform a/an + 测试类型 + test",
    patternExamples: [
      { en: "Please perform a no-load test.", cn: "请执行空载测试。", words: [{ w: "perform", ipa: "/pərˈfɔːrm/", cn: "执行", phonics: "per 读 /pər/，form 读 /fɔːrm/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "Please perform a load test.", cn: "请执行带载测试。", words: [{ w: "perform", ipa: "/pərˈfɔːrm/", cn: "执行", phonics: "per 读 /pər/，form 读 /fɔːrm/" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "Please perform a functional test.", cn: "请执行功能测试。", words: [{ w: "perform", ipa: "/pərˈfɔːrm/", cn: "执行", phonics: "per 读 /pər/，form 读 /fɔːrm/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
    ],
    thinking: "自动启动测试流程：\n1. 确认发电机处于 Auto 模式\n2. 模拟市电中断（断开 ATS 市电侧或发出测试信号）\n3. 观察发电机是否在设定时间内自动启动（通常 10-15 秒）\n4. 确认发电机自动带载\n5. 运行 15-30 分钟观察参数\n6. 恢复市电供电\n7. 记录测试结果\n\n测试频率：每周一次空载测试，每月一次带载测试。",
    pronunciation: "perform 的 per 读 /pər/，不要读成 /pɜːr/。",
    quiz: [
      { q: "请执行带载测试，怎么说？", a: "Please perform a load test." },
    ],
  },
  {
    id: 1545,
    en: "The automatic start test was successful.",
    cn: "自动启动测试成功。",
    ipa: "/ði ˌɔːtəˈmætɪk stɑːrt tɛst wɒz səkˈsɛsfəl/",
    tags: ["第1545句", "启动测试", "★★★★★"],
    when: "自动启动测试顺利完成，发电机在规定时间内自动启动并带载，各项参数正常。",
    words: [
      { w: "successful", ipa: "/səkˈsɛsfəl/", pos: "形容词", cn: "成功的", memory: "success = 成功；-ful = 形容词后缀。\nsuccessful = 成功的/达到预期目标的。\n与 unsuccessful（不成功的）相反。", phonics: "suc 读 /sək/，cess 读 /sɛs/，ful 读 /fəl/。", collocations: [["test was successful", "测试成功"], ["operation successful", "操作成功"], ["inspection successful", "检查成功"]], examples: [["The test was successful.", "测试成功。"], ["The operation was successful.", "操作成功。"]] },
    ],
    phrases: [
      { p: "was successful", ipa: "/wɒz səkˈsɛsfəl/", cn: "是成功的", why: "was + successful = 是成功的（过去时）。用于报告已完成的测试或操作结果。" },
    ],
    grammar: [
      { q: "was successful 和 succeeded 有什么区别？", a: "was successful = 是成功的（系表结构，描述状态/结果）\nsucceeded = 成功了（动词过去式，强调动作）\n✅ The test was successful.（测试是成功的 → 描述测试结果）\n✅ The generator succeeded in starting.（发电机成功启动了 → 强调启动动作成功）\n报告中常用 was successful。" },
    ],
    pattern: "The + 测试名称 + was successful",
    patternExamples: [
      { en: "The load test was successful.", cn: "带载测试成功。", words: [{ w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "The no-load test was successful.", cn: "空载测试成功。", words: [{ w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "The functional test was successful.", cn: "功能测试成功。", words: [{ w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
    ],
    thinking: "自动启动测试成功的判断标准：\n① 发电机在 10-15 秒内自动启动\n② 启动次数 ≤ 3 次（通常第 1 次即成功）\n③ 电压和频率在 30 秒内稳定\n④ 自动带载成功\n⑤ 运行参数全部正常\n⑥ 无告警信号\n\n测试失败时记录失败原因并通知供应商。",
    pronunciation: "successful 重音在第二音节 /səkˈsɛsfəl/。",
    quiz: [
      { q: "带载测试成功，怎么说？", a: "The load test was successful." },
    ],
  },
  {
    id: 1546,
    en: "Please perform a no-load test.",
    cn: "请执行空载测试。",
    ipa: "/pliːz pərˈfɔːrm ə noʊ-loʊd tɛst/",
    tags: ["第1546句", "启动测试", "★★★★★"],
    when: "执行空载测试，验证发电机在不带负载的情况下能否正常启动和运行。空载测试是每周例行的基本测试项目。",
    words: [
      { w: "no-load", ipa: "/noʊ-loʊd/", pos: "形容词", cn: "空载的；无负载的", memory: "no = 无/没有；load = 负载/负荷。\nno-load = 空载的/不带负载的。\nno-load test = 空载测试。\n与 full-load（满载）相反。", phonics: "no 读 /noʊ/，load 读 /loʊd/。", collocations: [["no-load test", "空载测试"], ["no-load current", "空载电流"], ["no-load voltage", "空载电压"]], examples: [["Please perform a no-load test.", "请执行空载测试。"], ["The no-load voltage is 400V.", "空载电压为400V。"]] },
    ],
    phrases: [
      { p: "no-load test", ipa: "/noʊ-loʊd tɛst/", cn: "空载测试", why: "no-load + test = 空载测试。发电机启动后不带任何负载运行，验证基本启动功能和运行参数。" },
    ],
    grammar: [
      { q: "no-load 和 full-load 有什么区别？", a: "no-load = 空载（不带负载）\nfull-load = 满载（带额定负载）\n✅ No-load test（空载测试 → 发电机运行但不带负载）\n✅ Full-load test（满载测试 → 发电机带 100% 额定负载运行）\n空载测试验证基本功能，满载测试验证带载能力。" },
    ],
    pattern: "Please perform a + 负载类型 + test",
    patternExamples: [
      { en: "Please perform a full-load test.", cn: "请执行满载测试。", words: [{ w: "perform", ipa: "/pərˈfɔːrm/", cn: "执行", phonics: "per 读 /pər/，form 读 /fɔːrm/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "Please perform a half-load test.", cn: "请执行半载测试。", words: [{ w: "perform", ipa: "/pərˈfɔːrm/", cn: "执行", phonics: "per 读 /pər/，form 读 /fɔːrm/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "Please perform a load bank test.", cn: "请执行负载箱测试。", words: [{ w: "perform", ipa: "/pərˈfɔːrm/", cn: "执行", phonics: "per 读 /pər/，form 读 /fɔːrm/" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
    ],
    thinking: "空载测试 vs 带载测试：\n\n空载测试（No-load test）：\n- 频率：每周一次\n- 时长：15-30 分钟\n- 目的：验证启动功能和基本运行参数\n- 方法：发电机启动后不接通负载\n\n带载测试（Load test）：\n- 频率：每月一次\n- 时长：1-4 小时\n- 目的：验证带载能力和长期运行稳定性\n- 方法：使用负载箱或实际负载，逐步加载至 80-100%",
    pronunciation: "no-load 的 no 读 /noʊ/，不要读成 /nɒ/。",
    quiz: [
      { q: "请执行满载测试，怎么说？", a: "Please perform a full-load test." },
    ],
  },
  {
    id: 1547,
    en: "Please perform a load test.",
    cn: "请执行带载测试。",
    ipa: "/pliːz pərˈfɔːrm ə loʊd tɛst/",
    tags: ["第1547句", "启动测试", "★★★★★"],
    when: "执行带载测试，验证发电机在实际负载下的运行性能和带载能力。带载测试是每月例行的强制性测试项目。",
    words: [
      { w: "load", ipa: "/loʊd/", pos: "名词", cn: "负载；负荷", memory: "load = 负载/负荷/装载。\n在电气工程中：\nload = 电力负载（消耗电能的设备）\nfull load = 满载\nno load = 空载\nload test = 带载测试。", phonics: "load 读 /loʊd/，oa 读 /oʊ/。", collocations: [["load test", "带载测试"], ["full load", "满载"], ["load capacity", "负载能力"], ["load bank", "负载箱"]], examples: [["The generator load is 500kW.", "发电机负载为500kW。"], ["Please check the load percentage.", "请检查负载百分比。"]] },
    ],
    phrases: [
      { p: "load test", ipa: "/loʊd tɛst/", cn: "带载测试", why: "load + test = 带载测试。发电机在实际负载下运行，验证带载能力和运行稳定性。" },
    ],
    grammar: [
      { q: "load test 和 no-load test 的区别是什么？", a: "load test = 带载测试（发电机带负载运行）\nno-load test = 空载测试（发电机不带负载运行）\n✅ Load test（带载测试 → 验证带载能力，使用负载箱或实际负载）\n✅ No-load test（空载测试 → 验证基本功能，发电机空转）\n带载测试更能反映发电机在实际工况下的性能。" },
    ],
    pattern: "Please perform a + 测试类型",
    patternExamples: [
      { en: "Please perform a load bank test.", cn: "请执行负载箱测试。", words: [{ w: "perform", ipa: "/pərˈfɔːrm/", cn: "执行", phonics: "per 读 /pər/，form 读 /fɔːrm/" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "Please perform a transfer test.", cn: "请执行切换测试。", words: [{ w: "perform", ipa: "/pərˈfɔːrm/", cn: "执行", phonics: "per 读 /pər/，form 读 /fɔːrm/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "Please perform a black start test.", cn: "请执行黑启动测试。", words: [{ w: "perform", ipa: "/pərˈfɔːrm/", cn: "执行", phonics: "per 读 /pər/，form 读 /fɔːrm/" }, { w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
    ],
    thinking: "带载测试方法：\n\n1. 负载箱测试（Load bank test）：\n   - 使用专用负载箱模拟负载\n   - 可精确控制负载比例（25%/50%/75%/100%）\n   - 不影响正常供电\n\n2. 实际负载测试（Real load test）：\n   - 将部分或全部实际负载切换到发电机供电\n   - 更接近真实工况\n   - 需要周密的切换计划\n\n测试步骤：\n1. 启动发电机\n2. 逐步加载（25% → 50% → 75% → 100%）\n3. 每个阶段运行 15-30 分钟\n4. 记录电压、频率、温度等参数\n5. 逐步卸载\n6. 停机并记录结果",
    pronunciation: "load 读 /loʊd/，不要读成 /lɒd/。",
    quiz: [
      { q: "请执行负载箱测试，怎么说？", a: "Please perform a load bank test." },
    ],
  },
  {
    id: 1548,
    en: "The generator accepted the load successfully.",
    cn: "柴油发电机成功带载。",
    ipa: "/ðə ˈdʒɛnəreɪtər əkˈsɛptɪd ðə loʊd səkˈsɛsfəli/",
    tags: ["第1548句", "启动测试", "★★★★★"],
    when: "确认柴油发电机已经成功接受负载，从空载状态平稳过渡到带载状态，电压和频率保持稳定。",
    words: [
      { w: "accept", ipa: "/əkˈsɛpt/", pos: "动词", cn: "接受；承受", memory: "accept = 接受/承受/认可。\naccept the load = 接受负载/带载。\n在电气工程中，发电机 accept the load 指发电机成功承担电力负载。", phonics: "ac 读 /ək/，cept 读 /sɛpt/。", collocations: [["accept the load", "接受负载/带载"], ["accept load changes", "接受负载变化"], ["accept full load", "接受满载"]], examples: [["The generator accepted the load.", "发电机接受了负载。"], ["The UPS accepted the load successfully.", "UPS成功带载。"]] },
    ],
    phrases: [
      { p: "accepted the load", ipa: "/əkˈsɛptɪd ðə loʊd/", cn: "接受了负载", why: "accepted + the + load = 接受了负载。发电机成功从空载过渡到带载状态，电压和频率保持稳定。" },
    ],
    grammar: [
      { q: "accept the load 和 take the load 有什么区别？", a: "accept the load = 接受负载（专业用语，强调发电机能够承受）\ntake the load = 承担负载（口语化）\n✅ The generator accepted the load successfully.（发电机成功带载 → 专业表述）\n✅ The generator took the load.（发电机承担了负载 → 口语表述）\n工程文档和正式报告用 accept the load。" },
    ],
    pattern: "The + 设备 + accepted the load + 状态",
    patternExamples: [
      { en: "The UPS accepted the load successfully.", cn: "UPS成功带载。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
      { en: "The generator accepted full load.", cn: "发电机接受了满载。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
      { en: "The system accepted the load transfer.", cn: "系统接受了负载切换。", words: [{ w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
    ],
    thinking: "发电机带载过程：\n1. 发电机启动并达到额定转速\n2. 电压和频率稳定（约 30 秒）\n3. ATS 切换至发电机供电\n4. 发电机接受负载（accept the load）\n5. 观察电压、频率是否稳定\n6. 记录带载后的运行参数\n\n带载成功标志：\n- 电压波动 < ±5%\n- 频率波动 < ±0.5Hz\n- 无异常声音或振动",
    pronunciation: "accepted 的 ac 读 /ək/，不要读成 /æk/。",
    quiz: [
      { q: "UPS成功带载，怎么说？", a: "The UPS accepted the load successfully." },
    ],
  },
  {
    id: 1549,
    en: "The generator load is stable.",
    cn: "柴油发电机负载稳定。",
    ipa: "/ðə ˈdʒɛnəreɪtər loʊd ɪz ˈsteɪbəl/",
    tags: ["第1549句", "启动测试", "★★★★★"],
    when: "确认柴油发电机带载后负载稳定，没有大幅波动，电压和频率保持在正常范围内。",
    words: [
      { w: "stable", ipa: "/ˈsteɪbəl/", pos: "形容词", cn: "稳定的；平稳的", memory: "stable = 稳定的/平稳的/不变的。\nload is stable = 负载稳定。\nvoltage is stable = 电压稳定。\n与 unstable（不稳定的）相反。", phonics: "sta 读 /steɪ/，ble 读 /bəl/。", collocations: [["load stable", "负载稳定"], ["voltage stable", "电压稳定"], ["frequency stable", "频率稳定"], ["stable operation", "稳定运行"]], examples: [["The load is stable at 500kW.", "负载稳定在500kW。"], ["The voltage is stable.", "电压稳定。"]] },
    ],
    phrases: [
      { p: "load is stable", ipa: "/loʊd ɪz ˈsteɪbəl/", cn: "负载稳定", why: "load + is + stable = 负载稳定。发电机带载后负载没有大幅波动，运行平稳。" },
    ],
    grammar: [
      { q: "stable 和 steady 有什么区别？", a: "stable = 稳定的（强调不波动、不变化的状态）\nsteady = 平稳的（强调持续、均匀的状态）\n✅ The load is stable.（负载稳定 → 负载值不波动）\n✅ The generator runs steadily.（发电机平稳运行 → 运行过程均匀持续）\n描述数值用 stable，描述过程用 steady。" },
    ],
    pattern: "The + 参数 + is stable",
    patternExamples: [
      { en: "The voltage is stable.", cn: "电压稳定。", words: [{ w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }, { w: "stable", ipa: "/ˈsteɪbl/", cn: "稳定", phonics: "sta 读 /steɪ/，ble 读 /bl/" }] },
      { en: "The frequency is stable.", cn: "频率稳定。", words: [{ w: "stable", ipa: "/ˈsteɪbl/", cn: "稳定", phonics: "sta 读 /steɪ/，ble 读 /bl/" }] },
      { en: "The temperature is stable.", cn: "温度稳定。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "stable", ipa: "/ˈsteɪbl/", cn: "稳定", phonics: "sta 读 /steɪ/，ble 读 /bl/" }] },
    ],
    thinking: "负载稳定性的判断标准：\n① 负载波动 < ±5%（额定值）\n② 电压波动 < ±5%\n③ 频率波动 < ±0.5Hz\n④ 无明显周期性波动\n⑤ 功率因数稳定\n\n负载不稳定的可能原因：\n- 负载侧设备频繁启停\n- 发电机调速器故障\n- AVR（自动电压调节器）故障\n- 燃油供应不稳定",
    pronunciation: "stable 读 /ˈsteɪbəl/，不要读成 /ˈstæbəl/。",
    quiz: [
      { q: "电压稳定，怎么说？", a: "The voltage is stable." },
    ],
  },
  {
    id: 1550,
    en: "Please monitor the generator during the test.",
    cn: "请在测试期间持续监控柴油发电机。",
    ipa: "/pliːz ˈmɒnɪtər ðə ˈdʒɛnəreɪtər ˈdjʊərɪŋ ðə tɛst/",
    tags: ["第1550句", "启动测试", "★★★★★"],
    when: "要求在测试过程中持续监控发电机运行参数，及时发现异常情况并采取措施。",
    words: [
      { w: "monitor", ipa: "/ˈmɒnɪtər/", pos: "动词", cn: "监控；监测", memory: "monitor = 监控/监测/监视。\nmonitor the generator = 监控发电机。\nmonitor the parameters = 监控参数。\n在运维中，monitor 强调持续观察和记录。", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/。", collocations: [["monitor continuously", "持续监控"], ["monitor parameters", "监控参数"], ["monitor performance", "监控性能"]], examples: [["Please monitor the temperature.", "请监控温度。"], ["We monitor the generators 24/7.", "我们24小时监控发电机。"]] },
      { w: "during", ipa: "/ˈdjʊərɪŋ/", pos: "介词", cn: "在...期间", memory: "during = 在...期间/在...过程中。\nduring the test = 在测试期间。\nduring operation = 在运行期间。\n表示在某个时间段内持续发生。", phonics: "dur 读 /djʊər/，ing 读 /ɪŋ/。", collocations: [["during the test", "在测试期间"], ["during operation", "在运行期间"], ["during maintenance", "在维护期间"]], examples: [["Monitor the load during the test.", "在测试期间监控负载。"], ["Check the oil level during maintenance.", "在维护期间检查机油液位。"]] },
    ],
    phrases: [
      { p: "monitor during the test", ipa: "/ˈmɒnɪtər ˈdjʊərɪŋ ðə tɛst/", cn: "在测试期间监控", why: "monitor + during + the + test = 在测试期间监控。强调在整个测试过程中持续观察运行参数。" },
    ],
    grammar: [
      { q: "during 和 while 有什么区别？", a: "during = 在...期间（介词，后接名词）\nwhile = 当...时（连词，后接从句）\n✅ Monitor the generator during the test.（在测试期间监控发电机 → during + 名词）\n✅ Monitor the generator while it is running.（当发电机运行时监控它 → while + 从句）\nduring 更简洁，while 更具体。" },
    ],
    pattern: "Please monitor + 对象 + during + 时间段",
    patternExamples: [
      { en: "Please monitor the temperature during the test.", cn: "请在测试期间监控温度。", words: [{ w: "monitor", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "Please monitor the load during operation.", cn: "请在运行期间监控负载。", words: [{ w: "monitor", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }, { w: "operation", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }] },
      { en: "Please monitor the voltage during startup.", cn: "请在启动期间监控电压。", words: [{ w: "monitor", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }] },
    ],
    thinking: "测试期间的监控要点：\n\n1. 电气参数：\n   - 电压（V）：额定值 ±5%\n   - 电流（A）：不超过额定值\n   - 频率（Hz）：额定值 ±0.5Hz\n   - 功率因数（cos φ）：0.8-1.0\n\n2. 机械参数：\n   - 转速（RPM）：1500/1800\n   - 机油压力（bar）：> 2.0\n   - 冷却液温度（°C）：< 95\n   - 排气温度（°C）：< 500\n\n3. 异常观察：\n   - 异常声音\n   - 异常振动\n   - 漏油/漏水\n   - 排烟颜色异常",
    pronunciation: "monitor 读 /ˈmɒnɪtər/，重音在第一音节。",
    quiz: [
      { q: "请在运行期间监控温度，怎么说？", a: "Please monitor the temperature during operation." },
    ],
  },
  {
    id: 1551,
    en: "A generator warning alarm has been detected.",
    cn: "检测到柴油发电机警告告警。",
    ipa: "/ə ˈdʒɛnəreɪtər ˈwɔːrnɪŋ ˈælɑːrm hæz biːn dɪˈtɛktɪd/",
    tags: ["第1551句", "告警与恢复", "★★★★★"],
    when: "BMS 系统检测到柴油发电机发出警告级别告警，需要关注但通常不影响立即运行。警告告警提示潜在问题，需要计划性处理。",
    words: [
      { w: "warning", ipa: "/ˈwɔːrnɪŋ/", pos: "名词/形容词", cn: "警告；预警", memory: "warn = 警告；-ing = 名词/形容词后缀。\nwarning = 警告/预警。\nwarning alarm = 警告告警。\n在告警等级中，warning 介于 info 和 critical 之间。", phonics: "warn 读 /wɔːrn/，ing 读 /ɪŋ/。", collocations: [["warning alarm", "警告告警"], ["warning light", "警告灯"], ["warning message", "警告消息"]], examples: [["A warning alarm has been detected.", "检测到警告告警。"], ["The warning light is on.", "警告灯亮了。"]] },
      { w: "detected", ipa: "/dɪˈtɛktɪd/", pos: "动词过去分词", cn: "检测到；发现", memory: "detect = 检测/发现；-ed = 过去分词。\ndetected = 被检测到/被发现。\nhas been detected = 已经被检测到（现在完成时被动语态）。", phonics: "de 读 /dɪ/，tect 读 /tɛkt/，ed 读 /ɪd/。", collocations: [["alarm detected", "告警检测到"], ["fault detected", "故障检测到"], ["anomaly detected", "异常检测到"]], examples: [["A fault has been detected.", "检测到故障。"], ["An anomaly was detected.", "检测到异常。"]] },
    ],
    phrases: [
      { p: "warning alarm", ipa: "/ˈwɔːrnɪŋ ˈælɑːrm/", cn: "警告告警", why: "warning + alarm = 警告告警。表示设备发出警告级别的通知，需要关注但不一定需要立即处理。" },
    ],
    grammar: [
      { q: "has been detected 和 was detected 有什么区别？", a: "has been detected = 已经被检测到（现在完成时被动语态，强调对当前的影响）\nwas detected = 被检测到了（一般过去时被动语态，描述过去的事件）\n✅ A warning alarm has been detected.（检测到警告告警 → 告警刚刚发生，需要现在处理）\n✅ A warning alarm was detected yesterday.（昨天检测到警告告警 → 描述过去的事件）\n实时告警用 has been detected。" },
    ],
    pattern: "A + 设备 + 告警类型 + alarm has been detected",
    patternExamples: [
      { en: "A UPS warning alarm has been detected.", cn: "检测到UPS警告告警。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "warning", ipa: "/ˈwɔːrnɪŋ/", cn: "警告", phonics: "warn 读 /wɔːrn/，ing 读 /ɪŋ/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A cooling system warning alarm has been detected.", cn: "检测到冷却系统警告告警。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "warning", ipa: "/ˈwɔːrnɪŋ/", cn: "警告", phonics: "warn 读 /wɔːrn/，ing 读 /ɪŋ/" }] },
      { en: "A fire alarm has been detected.", cn: "检测到火灾告警。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "发电机警告告警（Warning alarm）常见类型：\n① 高水温预警（High coolant temperature warning）\n② 低油压预警（Low oil pressure warning）\n③ 高排气温度预警（High exhaust temperature warning）\n④ 电池电压低预警（Low battery voltage warning）\n⑤ 燃油液位低预警（Low fuel level warning）\n⑥ 运行时间到预警（Running hours due for service）\n\n警告告警处理流程：\n1. 确认告警内容\n2. 评估严重程度\n3. 计划处理时间\n4. 通知相关人员\n5. 记录并跟踪",
    pronunciation: "warning 读 /ˈwɔːrnɪŋ/，不要读成 /ˈwɑːrnɪŋ/。",
    quiz: [
      { q: "检测到UPS警告告警，怎么说？", a: "A UPS warning alarm has been detected." },
    ],
  },
  {
    id: 1552,
    en: "A generator failure alarm has been detected.",
    cn: "检测到柴油发电机故障告警。",
    ipa: "/ə ˈdʒɛnəreɪtər ˈfeɪljər ˈælɑːrm hæz biːn dɪˈtɛktɪd/",
    tags: ["第1552句", "告警与恢复", "★★★★★"],
    when: "BMS 系统检测到柴油发电机发出故障级别告警，需要立即处理。故障告警通常表示设备已经停止运行或即将停止运行。",
    words: [
      { w: "failure", ipa: "/ˈfeɪljər/", pos: "名词", cn: "故障；失败", memory: "fail = 失败/故障；-ure = 名词后缀。\nfailure = 故障/失败。\nfailure alarm = 故障告警。\nstarting failure = 启动失败。", phonics: "fail 读 /feɪl/，ure 读 /jər/。", collocations: [["failure alarm", "故障告警"], ["starting failure", "启动失败"], ["power failure", "电源故障"], ["equipment failure", "设备故障"]], examples: [["A failure alarm has been detected.", "检测到故障告警。"], ["The starting failure needs investigation.", "启动失败需要调查。"]] },
    ],
    phrases: [
      { p: "failure alarm", ipa: "/ˈfeɪljər ˈælɑːrm/", cn: "故障告警", why: "failure + alarm = 故障告警。表示设备发生故障，需要立即处理，可能影响正常运行。" },
    ],
    grammar: [
      { q: "failure alarm 和 warning alarm 有什么区别？", a: "failure alarm = 故障告警（设备已故障，需要立即处理）\nwarning alarm = 警告告警（潜在问题，可以计划处理）\n✅ A failure alarm has been detected.（检测到故障告警 → 设备已故障，立即处理）\n✅ A warning alarm has been detected.（检测到警告告警 → 潜在问题，计划处理）\nfailure 比 warning 严重一个等级。" },
    ],
    pattern: "A + 设备 + failure alarm has been detected",
    patternExamples: [
      { en: "A UPS failure alarm has been detected.", cn: "检测到UPS故障告警。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A chiller failure alarm has been detected.", cn: "检测到冷水机组故障告警。", words: [{ w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A pump failure alarm has been detected.", cn: "检测到水泵故障告警。", words: [{ w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "发电机故障告警（Failure alarm）常见类型：\n① 启动失败（Starting failure）\n② 超速停机（Overspeed shutdown）\n③ 低油压停机（Low oil pressure shutdown）\n④ 高水温停机（High coolant temperature shutdown）\n⑤ 紧急停机（Emergency stop）\n⑥ 发电机过载（Generator overload）\n\n故障告警处理流程：\n1. 立即确认告警内容\n2. 评估对供电的影响\n3. 启动备用发电机（如有）\n4. 通知供应商紧急处理\n5. 记录故障详情\n6. 跟踪修复进度",
    pronunciation: "failure 读 /ˈfeɪljər/，不要读成 /ˈfæljər/。",
    quiz: [
      { q: "检测到冷水机组故障告警，怎么说？", a: "A chiller failure alarm has been detected." },
    ],
  },
  {
    id: 1553,
    en: "The generator failed to start automatically.",
    cn: "柴油发电机自动启动失败。",
    ipa: "/ðə ˈdʒɛnəreɪtər feɪld tuː stɑːrt ˌɔːtəˈmætɪkli/",
    tags: ["第1553句", "告警与恢复", "★★★★★"],
    when: "柴油发电机在市电中断时未能自动启动，这是严重的供电故障，需要立即排查原因并启动应急预案。",
    words: [
      { w: "failed", ipa: "/feɪld/", pos: "动词过去式", cn: "失败；未能", memory: "fail = 失败/未能做到；-ed = 过去式。\nfailed to start = 未能启动/启动失败。\nfailed to respond = 未能响应。\n表示尝试做某事但未成功。", phonics: "fail 读 /feɪl/，ed 读 /d/。", collocations: [["failed to start", "启动失败"], ["failed to respond", "未能响应"], ["failed to operate", "未能运行"]], examples: [["The generator failed to start.", "发电机启动失败。"], ["The pump failed to respond.", "水泵未能响应。"]] },
      { w: "automatically", ipa: "/ˌɔːtəˈmætɪkli/", pos: "副词", cn: "自动地", memory: "automatic = 自动的；-ally = 副词后缀。\nautomatically = 自动地/无需人工干预。\nstart automatically = 自动启动。", phonics: "au 读 /ɔː/，to 读 /tə/，matic 读 /mætɪk/，ally 读 /li/。", collocations: [["start automatically", "自动启动"], ["switch automatically", "自动切换"], ["shut down automatically", "自动停机"]], examples: [["The generator starts automatically.", "发电机自动启动。"], ["The ATS switches automatically.", "ATS自动切换。"]] },
    ],
    phrases: [
      { p: "failed to start", ipa: "/feɪld tuː stɑːrt/", cn: "启动失败", why: "failed + to + start = 未能启动/启动失败。发电机收到启动信号但未能成功启动。" },
    ],
    grammar: [
      { q: "failed to start 和 didn't start 有什么区别？", a: "failed to start = 启动失败（强调尝试了但未成功）\ndidn't start = 没有启动（只是陈述事实，可能没有尝试）\n✅ The generator failed to start automatically.（发电机自动启动失败 → 收到了启动信号但未能启动）\n✅ The generator didn't start.（发电机没有启动 → 可能没有发出启动信号）\nfailed to 更精确，表示有尝试但失败。" },
    ],
    pattern: "The + 设备 + failed to + 动作",
    patternExamples: [
      { en: "The UPS failed to switch to battery.", cn: "UPS未能切换到电池。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "battery", ipa: "/ˈbætəri/", cn: "电池", phonics: "bat 读 /bæt/，tery 读 /təri/" }] },
      { en: "The pump failed to start.", cn: "水泵启动失败。", words: [{ w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "The ATS failed to transfer.", cn: "ATS未能切换。", words: [] },
    ],
    thinking: "发电机自动启动失败的常见原因：\n\n1. 电气原因：\n   - 启动电池电压不足\n   - 启动电机故障\n   - 控制电路故障\n   - 启动信号未送达\n\n2. 机械原因：\n   - 燃油供应不足\n   - 空气滤清器堵塞\n   - 发动机卡死\n   - 调速器故障\n\n3. 控制原因：\n   - 控制器故障\n   - 模式不在 Auto\n   - 紧急停机按钮被按下\n   - 联锁条件未满足\n\n应急处理：\n1. 尝试手动启动\n2. 启动备用发电机\n3. 通知供应商紧急处理",
    pronunciation: "automatically 重音在第三音节 /ˌɔːtəˈmætɪkli/。",
    quiz: [
      { q: "水泵启动失败，怎么说？", a: "The pump failed to start." },
    ],
  },
  {
    id: 1554,
    en: "Please investigate the starting failure.",
    cn: "请调查启动失败原因。",
    ipa: "/pliːz ɪnˈvɛstɪɡeɪt ðə ˈstɑːrtɪŋ ˈfeɪljər/",
    tags: ["第1554句", "告警与恢复", "★★★★★"],
    when: "发电机启动失败后，需要立即调查失败原因，找出根本问题并采取措施防止再次发生。",
    words: [
      { w: "investigate", ipa: "/ɪnˈvɛstɪɡeɪt/", pos: "动词", cn: "调查；排查", memory: "investigate = 调查/排查/研究。\ninvestigate the failure = 调查失败原因。\ninvestigate the cause = 调查原因。\n与 examine、analyze 同义。", phonics: "in 读 /ɪn/，ves 读 /vɛs/，ti 读 /tɪ/，gate 读 /ɡeɪt/。", collocations: [["investigate failure", "调查失败"], ["investigate cause", "调查原因"], ["investigate issue", "调查问题"]], examples: [["Please investigate the starting failure.", "请调查启动失败原因。"], ["We need to investigate the root cause.", "我们需要调查根本原因。"]] },
      { w: "starting", ipa: "/ˈstɑːrtɪŋ/", pos: "形容词/动词现在分词", cn: "启动的", memory: "start = 启动；-ing = 形容词后缀。\nstarting failure = 启动失败。\nstarting battery = 启动电池。\nstarting motor = 启动电机。", phonics: "start 读 /stɑːrt/，ing 读 /ɪŋ/。", collocations: [["starting failure", "启动失败"], ["starting battery", "启动电池"], ["starting motor", "启动电机"]], examples: [["Check the starting battery.", "检查启动电池。"], ["The starting motor is faulty.", "启动电机故障。"]] },
    ],
    phrases: [
      { p: "starting failure", ipa: "/ˈstɑːrtɪŋ ˈfeɪljər/", cn: "启动失败", why: "starting + failure = 启动失败。发电机未能成功启动的故障。" },
    ],
    grammar: [
      { q: "investigate 和 check 有什么区别？", a: "investigate = 调查（深入分析，找出根本原因）\ncheck = 检查（快速确认状态）\n✅ Please investigate the starting failure.（请调查启动失败原因 → 深入分析为什么失败）\n✅ Please check the starting battery.（请检查启动电池 → 快速确认电池状态）\ninvestigate 更深入，check 更快速。" },
    ],
    pattern: "Please investigate the + 故障类型",
    patternExamples: [
      { en: "Please investigate the shutdown cause.", cn: "请调查停机原因。", words: [{ w: "cause", ipa: "/kɔːz/", cn: "原因", phonics: "cause 读 /kɔːz/" }] },
      { en: "Please investigate the alarm trigger.", cn: "请调查告警触发原因。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Please investigate the power loss.", cn: "请调查断电原因。", words: [{ w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }] },
    ],
    thinking: "启动失败调查步骤：\n\n1. 收集信息：\n   - 查看控制器事件记录\n   - 确认启动信号是否送达\n   - 记录失败时的参数\n\n2. 检查启动系统：\n   - 启动电池电压（> 24V）\n   - 启动电机状态\n   - 启动电路连接\n\n3. 检查燃油系统：\n   - 燃油液位\n   - 燃油管路\n   - 燃油滤清器\n\n4. 检查控制系统：\n   - 控制器状态\n   - 模式设置（Auto/Manual）\n   - 联锁条件\n\n5. 检查发动机：\n   - 机油液位\n   - 冷却液液位\n   - 是否有卡死现象",
    pronunciation: "investigate 重音在第二音节 /ɪnˈvɛstɪɡeɪt/。",
    quiz: [
      { q: "请调查停机原因，怎么说？", a: "Please investigate the shutdown cause." },
    ],
  },
  {
    id: 1555,
    en: "Please notify the generator vendor immediately.",
    cn: "请立即通知柴油发电机供应商。",
    ipa: "/pliːz ˈnoʊtɪfaɪ ðə ˈdʒɛnəreɪtər ˈvɛndər ɪˈmiːdiətli/",
    tags: ["第1555句", "告警与恢复", "★★★★★"],
    when: "发电机发生严重故障，需要立即联系供应商进行专业维修。这是应急处理流程中的关键步骤。",
    words: [
      { w: "notify", ipa: "/ˈnoʊtɪfaɪ/", pos: "动词", cn: "通知；告知", memory: "notify = 通知/告知/通报。\nnotify the vendor = 通知供应商。\nnotify immediately = 立即通知。\n与 inform、alert 同义。", phonics: "no 读 /noʊ/，ti 读 /tɪ/，fy 读 /faɪ/。", collocations: [["notify vendor", "通知供应商"], ["notify immediately", "立即通知"], ["notify management", "通知管理层"]], examples: [["Please notify the vendor.", "请通知供应商。"], ["We notified the management immediately.", "我们立即通知了管理层。"]] },
      { w: "vendor", ipa: "/ˈvɛndər/", pos: "名词", cn: "供应商；厂商", memory: "vendor = 供应商/厂商/卖方。\ngenerator vendor = 发电机供应商。\nequipment vendor = 设备供应商。\n与 supplier、manufacturer 同义。", phonics: "ven 读 /vɛn/，dor 读 /dər/。", collocations: [["generator vendor", "发电机供应商"], ["equipment vendor", "设备供应商"], ["vendor support", "供应商支持"]], examples: [["Contact the generator vendor.", "联系发电机供应商。"], ["The vendor will arrive tomorrow.", "供应商明天到达。"]] },
      { w: "immediately", ipa: "/ɪˈmiːdiətli/", pos: "副词", cn: "立即；马上", memory: "immediate = 立即的；-ly = 副词后缀。\nimmediately = 立即/马上/即刻。\n强调时间紧迫，需要立刻行动。", phonics: "im 读 /ɪm/，me 读 /miː/，di 读 /dɪ/，ately 读 /ətli/。", collocations: [["notify immediately", "立即通知"], ["respond immediately", "立即响应"], ["take action immediately", "立即采取行动"]], examples: [["Please respond immediately.", "请立即响应。"], ["Take action immediately.", "立即采取行动。"]] },
    ],
    phrases: [
      { p: "notify immediately", ipa: "/ˈnoʊtɪfaɪ ɪˈmiːdiətli/", cn: "立即通知", why: "notify + immediately = 立即通知。强调时间紧迫，需要马上联系相关人员。" },
    ],
    grammar: [
      { q: "notify 和 inform 有什么区别？", a: "notify = 通知（正式用语，强调正式告知）\ninform = 告知（一般用语，强调提供信息）\n✅ Please notify the vendor immediately.（请立即通知供应商 → 正式通知，有行动要求）\n✅ Please inform the team about the issue.（请告知团队这个问题 → 提供信息，不一定有行动要求）\n紧急情况下用 notify。" },
    ],
    pattern: "Please notify + 对象 + immediately",
    patternExamples: [
      { en: "Please notify the UPS vendor immediately.", cn: "请立即通知UPS供应商。", words: [{ w: "notify", ipa: "/ˈnoʊtɪfaɪ/", cn: "通知", phonics: "not 读 /noʊt/，ify 读 /ɪfaɪ/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }] },
      { en: "Please notify the facility manager immediately.", cn: "请立即通知设施经理。", words: [{ w: "notify", ipa: "/ˈnoʊtɪfaɪ/", cn: "通知", phonics: "not 读 /noʊt/，ify 读 /ɪfaɪ/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Please notify the emergency team immediately.", cn: "请立即通知应急团队。", words: [{ w: "notify", ipa: "/ˈnoʊtɪfaɪ/", cn: "通知", phonics: "not 读 /noʊt/，ify 读 /ɪfaɪ/" }, { w: "emergency", ipa: "/ɪˈmɜːrdʒənsi/", cn: "紧急", phonics: "e 读 /ɪ/，mergency 读 /mɜːrdʒənsi/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
    ],
    thinking: "通知供应商的时机：\n\n需要立即通知供应商的情况：\n① 发电机启动失败\n② 发电机运行中突然停机\n③ 严重告警（如超速、低油压停机）\n④ 自动启动测试失败\n⑤ 异常声音或振动\n\n通知内容应包括：\n1. 设备型号和序列号\n2. 故障发生时间\n3. 故障现象描述\n4. 控制器事件记录\n5. 已采取的应急措施\n\n供应商响应时间：\n- 紧急故障：4 小时内到场\n- 一般故障：24 小时内到场\n- 计划维护：按约定时间",
    pronunciation: "immediately 重音在第二音节 /ɪˈmiːdiətli/，不要读成 /ˈɪmɪdiətli/。",
    quiz: [
      { q: "请立即通知设施经理，怎么说？", a: "Please notify the facility manager immediately." },
    ],
  },
  {
    id: 1556,
    en: "The generator has returned to normal operation.",
    cn: "柴油发电机已经恢复正常运行。",
    ipa: "/ðə ˈdʒɛnəreɪtər hæz rɪˈtɜːrnd tuː ˈnɔːrməl ˌɒpəˈreɪʃən/",
    tags: ["第1556句", "告警与恢复", "★★★★★"],
    when: "发电机故障已经修复，设备已经恢复正常运行状态，各项参数在正常范围内。",
    words: [
      { w: "returned", ipa: "/rɪˈtɜːrnd/", pos: "动词过去分词", cn: "恢复；返回", memory: "return = 恢复/返回/归还。\nreturned to = 恢复到/返回到。\nhas returned to normal = 已经恢复正常。\n表示从异常状态回到正常状态。", phonics: "re 读 /rɪ/，turn 读 /tɜːrn/，ed 读 /d/。", collocations: [["returned to normal", "恢复正常"], ["returned to service", "恢复运行"], ["returned to standby", "恢复备用"]], examples: [["The system has returned to normal.", "系统已恢复正常。"], ["The generator returned to standby.", "发电机恢复到备用状态。"]] },
      { w: "operation", ipa: "/ˌɒpəˈreɪʃən/", pos: "名词", cn: "运行；操作", memory: "operate = 运行；-ion = 名词后缀。\noperation = 运行/操作/运作。\nnormal operation = 正常运行。\nreturn to operation = 恢复运行。", phonics: "op 读 /ɒp/，er 读 /ə/，a 读 /eɪ/，tion 读 /ʃən/。", collocations: [["normal operation", "正常运行"], ["safe operation", "安全运行"], ["continuous operation", "连续运行"]], examples: [["The system is in normal operation.", "系统处于正常运行。"], ["Resume normal operation.", "恢复正常运行。"]] },
    ],
    phrases: [
      { p: "returned to normal operation", ipa: "/rɪˈtɜːrnd tuː ˈnɔːrməl ˌɒpəˈreɪʃən/", cn: "恢复正常运行", why: "returned + to + normal + operation = 恢复正常运行。设备从故障或异常状态回到正常运行状态。" },
    ],
    grammar: [
      { q: "has returned 和 returned 有什么区别？", a: "has returned = 已经恢复（现在完成时，强调对当前的影响）\nreturned = 恢复了（一般过去时，描述过去的动作）\n✅ The generator has returned to normal operation.（发电机已经恢复正常运行 → 强调现在处于正常状态）\n✅ The generator returned to normal at 10:00.（发电机在10点恢复正常 → 描述过去的时间点）\n报告当前状态用 has returned。" },
    ],
    pattern: "The + 设备 + has returned to normal operation",
    patternExamples: [
      { en: "The UPS has returned to normal operation.", cn: "UPS已经恢复正常运行。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }, { w: "operation", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }] },
      { en: "The cooling system has returned to normal operation.", cn: "冷却系统已经恢复正常运行。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The power supply has returned to normal.", cn: "电源已恢复正常。", words: [{ w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "发电机恢复正常运行的确认标准：\n\n1. 故障已修复：\n   - 故障原因已查明\n   - 修复措施已实施\n   - 更换部件已安装\n\n2. 测试验证：\n   - 手动启动测试通过\n   - 自动启动测试通过\n   - 带载测试通过\n\n3. 参数正常：\n   - 电压正常\n   - 频率正常\n   - 温度正常\n   - 无告警\n\n4. 恢复步骤：\n   - 将发电机切回 Auto 模式\n   - 确认 ATS 正常\n   - 更新维护记录\n   - 通知相关人员",
    pronunciation: "operation 重音在第三音节 /ˌɒpəˈreɪʃən/。",
    quiz: [
      { q: "UPS已经恢复正常运行，怎么说？", a: "The UPS has returned to normal operation." },
    ],
  },
  {
    id: 1557,
    en: "All generator alarms have been cleared.",
    cn: "所有柴油发电机告警已经恢复。",
    ipa: "/ɔːl ˈdʒɛnəreɪtər ˈælɑːrmz hæv biːn klɪərd/",
    tags: ["第1557句", "告警与恢复", "★★★★★"],
    when: "确认所有发电机相关的告警都已经清除/恢复，BMS 系统显示无活动告警。",
    words: [
      { w: "cleared", ipa: "/klɪərd/", pos: "动词过去分词", cn: "清除；恢复", memory: "clear = 清除/恢复/清除；-ed = 过去分词。\ncleared = 已清除/已恢复。\nalarms cleared = 告警已恢复。\n在告警管理中，cleared 表示告警条件已消除。", phonics: "clear 读 /klɪər/，ed 读 /d/。", collocations: [["alarms cleared", "告警恢复"], ["fault cleared", "故障清除"], ["alarm cleared", "告警清除"]], examples: [["All alarms have been cleared.", "所有告警已恢复。"], ["The fault has been cleared.", "故障已清除。"]] },
    ],
    phrases: [
      { p: "alarms have been cleared", ipa: "/ˈælɑːrmz hæv biːn klɪərd/", cn: "告警已经恢复", why: "alarms + have + been + cleared = 告警已经恢复（被动语态现在完成时）。表示所有告警条件已消除。" },
    ],
    grammar: [
      { q: "cleared 和 resolved 有什么区别？", a: "cleared = 清除/恢复（告警条件消除，自动或手动清除）\nresolved = 解决（问题已处理完毕）\n✅ All alarms have been cleared.（所有告警已恢复 → 告警条件消除）\n✅ The issue has been resolved.（问题已解决 → 处理完毕）\ncleared 侧重告警状态，resolved 侧重问题处理。" },
    ],
    pattern: "All + 设备 + alarms have been cleared",
    patternExamples: [
      { en: "All UPS alarms have been cleared.", cn: "所有UPS告警已恢复。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
      { en: "All cooling system alarms have been cleared.", cn: "所有冷却系统告警已恢复。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "All fire alarms have been cleared.", cn: "所有火灾告警已恢复。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
    ],
    thinking: "告警清除（Cleared）的含义：\n\n1. 告警条件消除：\n   - 温度回到正常范围\n   - 压力回到正常范围\n   - 电压回到正常范围\n\n2. 告警清除方式：\n   - 自动清除：条件消除后自动清除\n   - 手动清除：需要人工确认清除\n   - 确认后清除：需要先确认再清除\n\n3. 清除不等于解决：\n   - Cleared = 告警条件消除\n   - Resolved = 问题已处理\n   - Acknowledged = 已确认\n\n4. 清除后需要：\n   - 记录清除时间\n   - 记录处理措施\n   - 更新工单状态",
    pronunciation: "cleared 读 /klɪərd/，不要读成 /kliːrd/。",
    quiz: [
      { q: "所有UPS告警已恢复，怎么说？", a: "All UPS alarms have been cleared." },
    ],
  },
  {
    id: 1558,
    en: "Please update the generator maintenance record.",
    cn: "请更新柴油发电机维护记录。",
    ipa: "/pliːz ˈʌpdeɪt ðə ˈdʒɛnəreɪtər ˈmeɪntənəns ˈrɛkərd/",
    tags: ["第1558句", "告警与恢复", "★★★★★"],
    when: "维护或故障处理完成后，需要更新维护记录，记录故障详情、处理措施和更换部件等信息。",
    words: [
      { w: "update", ipa: "/ˈʌpdeɪt/", pos: "动词", cn: "更新；升级", memory: "up = 向上；date = 日期/更新。\nupdate = 更新/升级。\nupdate the record = 更新记录。\nupdate the system = 更新系统。", phonics: "up 读 /ʌp/，date 读 /deɪt/。", collocations: [["update record", "更新记录"], ["update log", "更新日志"], ["update status", "更新状态"]], examples: [["Please update the maintenance record.", "请更新维护记录。"], ["Update the system status.", "更新系统状态。"]] },
      { w: "record", ipa: "/ˈrɛkərd/", pos: "名词", cn: "记录；档案", memory: "record = 记录/档案/纪录。\nmaintenance record = 维护记录。\nevent record = 事件记录。\ninspection record = 检查记录。", phonics: "re 读 /rɛ/，cord 读 /kərd/。", collocations: [["maintenance record", "维护记录"], ["event record", "事件记录"], ["inspection record", "检查记录"]], examples: [["Check the maintenance record.", "检查维护记录。"], ["Update the event record.", "更新事件记录。"]] },
    ],
    phrases: [
      { p: "maintenance record", ipa: "/ˈmeɪntənəns ˈrɛkərd/", cn: "维护记录", why: "maintenance + record = 维护记录。记录设备维护历史、故障处理、部件更换等信息的文档。" },
    ],
    grammar: [
      { q: "record 作为名词和动词的发音有什么区别？", a: "record（名词）= /ˈrɛkərd/（重音在第一音节）\nrecord（动词）= /rɪˈkɔːrd/（重音在第二音节）\n✅ Update the maintenance record.（更新维护记录 → record 是名词）\n✅ Please record the event.（请记录这个事件 → record 是动词）\n名词重音在前，动词重音在后。" },
    ],
    pattern: "Please update the + 设备 + maintenance record",
    patternExamples: [
      { en: "Please update the UPS maintenance record.", cn: "请更新UPS维护记录。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "Please update the chiller maintenance record.", cn: "请更新冷水机组维护记录。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "Please update the fire system maintenance record.", cn: "请更新消防系统维护记录。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
    ],
    thinking: "维护记录应包含的内容：\n\n1. 基本信息：\n   - 设备名称和编号\n   - 维护日期和时间\n   - 维护人员\n\n2. 故障信息：\n   - 故障发生时间\n   - 故障现象描述\n   - 故障原因分析\n\n3. 处理措施：\n   - 采取的处理步骤\n   - 更换的部件清单\n   - 测试验证结果\n\n4. 后续跟踪：\n   - 是否需要进一步处理\n   - 下次维护计划\n   - 备件补充需求\n\n维护记录的重要性：\n- 追踪设备健康状态\n- 分析故障趋势\n- 优化维护计划\n- 满足合规要求",
    pronunciation: "record 作为名词读 /ˈrɛkərd/，重音在第一音节。",
    quiz: [
      { q: "请更新UPS维护记录，怎么说？", a: "Please update the UPS maintenance record." },
    ],
  },
  {
    id: 1559,
    en: "The generator maintenance has been completed successfully.",
    cn: "柴油发电机维护已经顺利完成。",
    ipa: "/ðə ˈdʒɛnəreɪtər ˈmeɪntənəns hæz biːn kəmˈpliːtɪd səkˈsɛsfəli/",
    tags: ["第1559句", "告警与恢复", "★★★★★"],
    when: "确认柴油发电机的维护工作已经全部完成，包括故障修复、测试验证和记录更新。",
    words: [
      { w: "completed", ipa: "/kəmˈpliːtɪd/", pos: "动词过去分词", cn: "完成；结束", memory: "complete = 完成；-ed = 过去分词。\ncompleted = 已完成/已结束。\nhas been completed = 已经被完成（现在完成时被动语态）。", phonics: "com 读 /kəm/，plete 读 /pliːt/，ed 读 /ɪd/。", collocations: [["maintenance completed", "维护完成"], ["task completed", "任务完成"], ["inspection completed", "检查完成"]], examples: [["The maintenance has been completed.", "维护已完成。"], ["The inspection was completed successfully.", "检查成功完成。"]] },
    ],
    phrases: [
      { p: "completed successfully", ipa: "/kəmˈpliːtɪd səkˈsɛsfəli/", cn: "顺利完成", why: "completed + successfully = 顺利完成。强调工作不仅完成，而且达到了预期目标。" },
    ],
    grammar: [
      { q: "has been completed 和 is completed 有什么区别？", a: "has been completed = 已经被完成（现在完成时被动语态，强调动作已完成）\nis completed = 是完成的（系表结构，描述状态）\n✅ The maintenance has been completed successfully.（维护已经顺利完成 → 强调刚完成的动作）\n✅ The maintenance is completed.（维护是完成状态 → 描述当前状态）\n报告完成用 has been completed。" },
    ],
    pattern: "The + 设备 + maintenance has been completed successfully",
    patternExamples: [
      { en: "The UPS maintenance has been completed successfully.", cn: "UPS维护已经顺利完成。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "The chiller maintenance has been completed successfully.", cn: "冷水机组维护已经顺利完成。", words: [{ w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "The fire system maintenance has been completed successfully.", cn: "消防系统维护已经顺利完成。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
    ],
    thinking: "维护完成的确认清单：\n\n1. 故障修复确认：\n   □ 故障原因已查明\n   □ 修复措施已实施\n   □ 更换部件已安装\n\n2. 测试验证确认：\n   □ 手动启动测试通过\n   □ 自动启动测试通过\n   □ 带载测试通过\n   □ 参数全部正常\n\n3. 文档记录确认：\n   □ 维护记录已更新\n   □ 工单已关闭\n   □ 备件已补充\n\n4. 状态恢复确认：\n   □ 发电机切回 Auto 模式\n   □ 所有告警已清除\n   □ ATS 正常工作\n   □ 相关人员已通知",
    pronunciation: "completed 重音在第二音节 /kəmˈpliːtɪd/。",
    quiz: [
      { q: "UPS维护已经顺利完成，怎么说？", a: "The UPS maintenance has been completed successfully." },
    ],
  },
  {
    id: 1560,
    en: "The generator system is ready for normal operation.",
    cn: "柴油发电机系统已经恢复正常运行。",
    ipa: "/ðə ˈdʒɛnəreɪtər ˈsɪstəm ɪz ˈrɛdi fɔːr ˈnɔːrməl ˌɒpəˈreɪʃən/",
    tags: ["第1560句", "告警与恢复", "★★★★★"],
    when: "确认柴油发电机系统已经完全准备好正常运行，可以作为应急电源随时投入使用。这是交接完成时的最终确认。",
    words: [
      { w: "ready", ipa: "/ˈrɛdi/", pos: "形容词", cn: "准备好的；就绪的", memory: "ready = 准备好的/就绪的/可以的。\nready for = 为...准备好。\nready for operation = 准备好运行。\nready for service = 准备好投入使用。", phonics: "read 读 /rɛd/，y 读 /i/。", collocations: [["ready for operation", "准备好运行"], ["ready for service", "准备好服务"], ["ready for use", "准备好使用"]], examples: [["The system is ready for operation.", "系统准备好运行。"], ["The generator is ready for service.", "发电机准备好投入使用。"]] },
      { w: "system", ipa: "/ˈsɪstəm/", pos: "名词", cn: "系统；体系", memory: "system = 系统/体系/制度。\ngenerator system = 发电机系统。\ncooling system = 冷却系统。\npower system = 电力系统。", phonics: "sys 读 /sɪs/，tem 读 /təm/。", collocations: [["generator system", "发电机系统"], ["power system", "电力系统"], ["control system", "控制系统"]], examples: [["The generator system is stable.", "发电机系统稳定。"], ["Check the control system.", "检查控制系统。"]] },
    ],
    phrases: [
      { p: "ready for normal operation", ipa: "/ˈrɛdi fɔːr ˈnɔːrməl ˌɒpəˈreɪʃən/", cn: "准备好正常运行", why: "ready + for + normal + operation = 准备好正常运行。系统已完全恢复到可以正常运行的状态。" },
    ],
    grammar: [
      { q: "is ready for 和 can 有什么区别？", a: "is ready for = 准备好（强调状态就绪，可以开始）\ncan = 能够（强调能力）\n✅ The system is ready for normal operation.（系统准备好正常运行 → 状态就绪）\n✅ The system can operate normally.（系统能够正常运行 → 有能力运行）\nis ready for 更强调准备就绪的状态。" },
    ],
    pattern: "The + 系统 + is ready for normal operation",
    patternExamples: [
      { en: "The UPS system is ready for normal operation.", cn: "UPS系统准备好正常运行。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The cooling system is ready for normal operation.", cn: "冷却系统准备好正常运行。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The power system is ready for normal operation.", cn: "电力系统准备好正常运行。", words: [{ w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "发电机系统准备好正常运行的最终确认：\n\n1. 设备状态：\n   □ 发电机运行正常\n   □ 控制器正常\n   □ ATS 正常\n   □ 燃油系统正常\n\n2. 参数状态：\n   □ 电压正常\n   □ 频率正常\n   □ 温度正常\n   □ 油压正常\n\n3. 告警状态：\n   □ 无活动告警\n   □ 所有告警已清除\n   □ 监控系统正常\n\n4. 控制状态：\n   □ Auto 模式\n   □ 远程监控启用\n   □ 联锁正常\n\n交接完成时的标准结束语：\n'Generator system is ready for normal operation.'",
    pronunciation: "ready 读 /ˈrɛdi/，不要读成 /ˈriːdi/。",
    quiz: [
      { q: "UPS系统准备好正常运行，怎么说？", a: "The UPS system is ready for normal operation." },
    ],
  },
];

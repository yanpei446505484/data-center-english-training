// EXPORTS: MOCK_SENTENCES_PART26B

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART26B: ISentence[] = [
  // ── 场景001：消防系统 - 气体灭火 (1701-1704) ──
  {
    id: 1701,
    en: "Please check the cylinder pressure.",
    cn: "请检查钢瓶压力。",
    ipa: "/pliːz tʃɛk ðə ˈsɪlɪndər ˈprɛʃər/",
    tags: ["第1701句", "钢瓶压力", "★★★★★"],
    when: "气体灭火系统的钢瓶必须保持正常压力，确保灭火时能有效释放灭火剂。交接时检查所有钢瓶的压力表读数。",
    words: [
      { w: "cylinder", ipa: "/ˈsɪlɪndər/", pos: "名词", cn: "钢瓶；气瓶", memory: "cylinder = 圆柱体/气瓶。\n在消防系统中，cylinder 指储存灭火剂的钢瓶。\nclean agent cylinders = 气体灭火钢瓶\nCO2 cylinders = 二氧化碳钢瓶", phonics: "cyl 读 /ˈsɪl/，in 读 /ɪn/，der 读 /dər/。", collocations: [["cylinder pressure", "钢瓶压力"], ["gas cylinder", "气瓶"], ["cylinder inspection", "钢瓶检查"]], examples: [["Check the cylinder pressure.", "检查钢瓶压力。"], ["The cylinder is fully charged.", "钢瓶已充满。"]] },
      { w: "pressure", ipa: "/ˈprɛʃər/", pos: "名词", cn: "压力", memory: "pressure = 压力/压强。\n在消防系统中，pressure 指钢瓶内的气体压力。\n正常压力 = normal pressure\n压力过低 = low pressure", phonics: "press 读 /prɛs/，ure 读 /ər/，重音在第一音节。", collocations: [["cylinder pressure", "钢瓶压力"], ["normal pressure", "正常压力"], ["pressure gauge", "压力表"]], examples: [["The pressure is normal.", "压力正常。"], ["Check the pressure gauge.", "检查压力表。"]] },
      { w: "check", ipa: "/tʃɛk/", pos: "动词", cn: "检查；查看", memory: "check = 检查/查看（快速确认状态）。\n在交接场景中，check 是最常用的动作动词。\n与 inspect（详细物理检查）不同，check 侧重查看仪表读数。", phonics: "ch 读 /tʃ/，eck 读 /ɛk/。", collocations: [["check pressure", "检查压力"], ["check the gauge", "检查仪表"], ["check the reading", "检查读数"]], examples: [["Please check the pressure.", "请检查压力。"], ["Check the gauge reading.", "检查仪表读数。"]] },
    ],
    phrases: [
      { p: "cylinder pressure", ipa: "/ˈsɪlɪndər ˈprɛʃər/", cn: "钢瓶压力", why: "cylinder + pressure = 钢瓶压力。气体灭火钢瓶的压力是判断系统是否正常的关键指标，压力过低说明钢瓶泄漏或未充满。" },
    ],
    grammar: [
      { q: "check 和 verify 有什么区别？", a: "check = 检查/查看（确认当前状态）\nverify = 核实/验证（确认是否符合标准）\n✅ Please check the cylinder pressure.（请检查钢瓶压力 → 查看压力表读数）\n✅ Please verify the cylinder is fully charged.（请核实钢瓶是否已充满 → 确认是否符合要求）\n交接时用 check，因为需要查看具体的压力数值。" },
    ],
    pattern: "Please check the + 设备/部件 + pressure",
    patternExamples: [
      { en: "Please check the boiler pressure.", cn: "请检查锅炉压力。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "boiler", ipa: "/ˈbɔɪlər/", cn: "锅炉", phonics: "boil 读 /bɔɪl/，er 读 /ər/" }, { w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }] },
      { en: "Please check the pump pressure.", cn: "请检查水泵压力。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }] },
      { en: "Please check the pipe pressure.", cn: "请检查管道压力。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "pipe", ipa: "/paɪp/", cn: "管道", phonics: "pipe 读 /paɪp/" }, { w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }] },
    ],
    thinking: "气体灭火钢瓶的压力检查要点：\n① 查看压力表读数是否在绿色区域（正常范围）。\n② 检查压力表指针是否稳定，无抖动。\n③ 记录每个钢瓶的压力值。\n④ 如发现压力异常，立即通知消防维保人员。\n数据中心通常使用 FM-200 或 Novec 1230 等洁净气体灭火剂，工作压力约 25-42 bar。",
    pronunciation: "cylinder 的 cyl 读 /ˈsɪl/，不是 /saɪl/。\npressure 的 press 读 /prɛs/，重音在第一音节。",
    quiz: [
      { q: "请检查锅炉压力，怎么说？", a: "Please check the boiler pressure." },
      { q: "气体灭火钢瓶的正常压力范围是多少？", a: "数据中心常用的洁净气体灭火系统（如 FM-200、Novec 1230）的钢瓶正常工作压力通常在 25-42 bar 之间，具体数值取决于系统设计。压力表上有绿色（正常）、红色（异常）区域标识。" },
    ],
  },
  {
    id: 1702,
    en: "The cylinder pressure is within the normal range.",
    cn: "钢瓶压力正常。",
    ipa: "/ðə ˈsɪlɪndər ˈprɛʃər ɪz wɪˈðɪn ðə ˈnɔːrməl reɪndʒ/",
    tags: ["第1702句", "钢瓶压力正常", "★★★★★"],
    when: "确认钢瓶压力读数在正常范围内。within the normal range 表示压力值符合设计标准，系统可以正常工作。",
    words: [
      { w: "within", ipa: "/wɪˈðɪn/", pos: "介词", cn: "在…范围内", memory: "within = 在…之内/在…范围内。\nwithin the normal range = 在正常范围内\nwithin limits = 在限制范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/，重音在第二音节。", collocations: [["within range", "在范围内"], ["within limits", "在限制内"], ["within specification", "在规格内"]], examples: [["The temperature is within range.", "温度在范围内。"], ["Keep within the speed limit.", "保持在限速内。"]] },
      { w: "range", ipa: "/reɪndʒ/", pos: "名词", cn: "范围", memory: "range = 范围/区间。\nnormal range = 正常范围\noperating range = 工作范围\npressure range = 压力范围", phonics: "range 读 /reɪndʒ/，a 读 /eɪ/。", collocations: [["normal range", "正常范围"], ["operating range", "工作范围"], ["pressure range", "压力范围"]], examples: [["The value is within the normal range.", "该值在正常范围内。"], ["What is the operating range?", "工作范围是多少？"]] },
    ],
    phrases: [
      { p: "within the normal range", ipa: "/wɪˈðɪn ðə ˈnɔːrməl reɪndʒ/", cn: "在正常范围内", why: "within + the + normal + range = 在正常范围内。这是描述设备参数正常的专业用语，比简单说 normal 更精确。" },
    ],
    grammar: [
      { q: "is within the normal range 和 is normal 有什么区别？", a: "is within the normal range = 在正常范围内（更精确，暗示有具体数值范围）\nis normal = 正常（更笼统）\n✅ The cylinder pressure is within the normal range.（钢瓶压力在正常范围内 → 具体数值在标准区间内）\n✅ The system is normal.（系统正常 → 整体状态正常）\n技术文档中用 within the normal range 更专业。" },
    ],
    pattern: "参数 + is within the normal range",
    patternExamples: [
      { en: "The temperature is within the normal range.", cn: "温度在正常范围内。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The voltage is within the normal range.", cn: "电压在正常范围内。", words: [{ w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }, { w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The flow rate is within the normal range.", cn: "流量在正常范围内。", words: [{ w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }, { w: "range", ipa: "/reɪndʒ/", cn: "范围", phonics: "range 读 /reɪndʒ/" }] },
    ],
    thinking: "汇报钢瓶压力正常的完整表述：\n① The cylinder pressure is within the normal range.（压力在正常范围内）\n② The cylinder is fully charged.（钢瓶已充满）\n③ The pressure reading is 25 bar.（压力读数为 25 bar）\n交接时既要确认正常，也要记录具体数值以便对比历史数据。",
    pronunciation: "within 的 with 读 /wɪð/，重音在第二音节 with-in。\nrange 的 a 读 /eɪ/，不是 /æ/。",
    quiz: [
      { q: "电压在正常范围内，怎么说？", a: "The voltage is within the normal range." },
    ],
  },
  {
    id: 1703,
    en: "Please verify the discharge panel.",
    cn: "请检查灭火控制盘。",
    ipa: "/pliːz ˈvɛrɪfaɪ ðə dɪsˈtʃɑːrdʒ ˈpænəl/",
    tags: ["第1703句", "灭火控制盘", "★★★★★"],
    when: "灭火控制盘（Discharge Panel）是气体灭火系统的控制中枢，负责监控探测器信号并控制灭火剂释放。交接时检查控制盘状态。",
    words: [
      { w: "discharge panel", ipa: "/dɪsˈtʃɑːrdʒ ˈpænəl/", pos: "名词短语", cn: "灭火控制盘", memory: "discharge = 释放/排放；panel = 面板/控制盘。\ndischarge panel = 灭火控制盘，负责控制灭火剂的释放。\n当探测器检测到火灾时，控制盘会发出警报并启动灭火程序。", phonics: "dis 读 /dɪs/，charge 读 /tʃɑːrdʒ/，panel 读 /ˈpænəl/。", collocations: [["discharge panel", "灭火控制盘"], ["control panel", "控制盘"], ["discharge button", "释放按钮"]], examples: [["Check the discharge panel.", "检查灭火控制盘。"], ["The panel shows normal status.", "控制盘显示正常状态。"]] },
      { w: "verify", ipa: "/ˈvɛrɪfaɪ/", pos: "动词", cn: "核实；验证", memory: "verify = 核实/验证（确认是否符合标准）。\nverify the system = 核实系统\nverify the setting = 核实设置\nverify the status = 核实状态", phonics: "ver 读 /vɛr/，i 读 /ɪ/，fy 读 /faɪ/，重音在第一音节。", collocations: [["verify the status", "核实状态"], ["verify the setting", "核实设置"], ["verify the operation", "核实运行"]], examples: [["Please verify the system status.", "请核实系统状态。"], ["Verify all settings are correct.", "核实所有设置正确。"]] },
    ],
    phrases: [
      { p: "discharge panel", ipa: "/dɪsˈtʃɑːrdʒ ˈpænəl/", cn: "灭火控制盘", why: "discharge + panel = 灭火控制盘。这是气体灭火系统的核心控制设备，负责接收探测器信号并控制灭火剂释放，交接时必须检查其工作状态。" },
    ],
    grammar: [
      { q: "verify 和 check 有什么区别？", a: "verify = 核实/验证（确认是否符合标准或要求）\ncheck = 检查/查看（确认当前状态）\n✅ Please verify the discharge panel.（请核实灭火控制盘 → 确认设置和状态符合要求）\n✅ Please check the discharge panel.（请检查灭火控制盘 → 查看当前状态）\n交接时两者都可用，verify 更强调'确认符合要求'。" },
    ],
    pattern: "Please verify the + 设备/系统",
    patternExamples: [
      { en: "Please verify the fire alarm panel.", cn: "请核实火灾报警控制器。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Please verify the emergency lighting.", cn: "请核实应急照明。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "emergency", ipa: "/ɪˈmɜːrdʒənsi/", cn: "紧急", phonics: "e 读 /ɪ/，mergency 读 /mɜːrdʒənsi/" }] },
      { en: "Please verify the evacuation route.", cn: "请核实疏散路线。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
    ],
    thinking: "灭火控制盘的检查要点：\n① 确认控制盘显示正常状态（无故障灯、无告警灯）。\n② 检查手动/自动模式设置是否正确。\n③ 确认延时设置（通常 30 秒）是否合适。\n④ 检查紧急停止按钮是否可用。\n⑤ 确认控制盘与探测器的通信是否正常。\n控制盘是气体灭火系统的'大脑'，必须确保其正常工作。",
    pronunciation: "discharge 的 dis 读 /dɪs/，charge 读 /tʃɑːrdʒ/，重音在第二音节。\nverify 的 ver 读 /vɛr/，重音在第一音节。",
    quiz: [
      { q: "请核实应急照明，怎么说？", a: "Please verify the emergency lighting." },
      { q: "灭火控制盘的主要功能是什么？", a: "灭火控制盘的主要功能：① 接收烟感/温感探测器的报警信号 ② 启动声光报警（预报警）③ 倒计时延时（通常 30 秒）④ 控制电磁阀释放灭火剂 ⑤ 反馈释放状态 ⑥ 提供紧急停止功能。" },
    ],
  },
  {
    id: 1704,
    en: "The discharge panel is operating normally.",
    cn: "灭火控制盘运行正常。",
    ipa: "/ðə dɪsˈtʃɑːrdʒ ˈpænəl ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1704句", "控制盘正常", "★★★★★"],
    when: "确认灭火控制盘运行状态正常。operating normally 表示控制盘所有功能正常，可以正确响应火灾信号。",
    words: [
      { w: "discharge panel", ipa: "/dɪsˈtʃɑːrdʒ ˈpænəl/", pos: "名词短语", cn: "灭火控制盘", memory: "discharge = 释放/排放；panel = 面板/控制盘。\ndischarge panel = 灭火控制盘，负责控制灭火剂的释放。\n当探测器检测到火灾时，控制盘会发出警报并启动灭火程序。", phonics: "dis 读 /dɪs/，charge 读 /tʃɑːrdʒ/，panel 读 /ˈpænəl/。", collocations: [["discharge panel", "灭火控制盘"], ["control panel", "控制盘"], ["panel status", "控制盘状态"]], examples: [["Check the discharge panel.", "检查灭火控制盘。"], ["The panel shows normal status.", "控制盘显示正常状态。"]] },
      { w: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", pos: "动词短语", cn: "运行正常", memory: "operating = 运行中；normally = 正常地。\noperating normally = 正常运行，所有功能正常。\noperating abnormally = 运行异常\noperating in manual mode = 手动模式运行", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/，normally 读 /ˈnɔːrməli/。", collocations: [["operating normally", "运行正常"], ["functioning normally", "正常运作"], ["working normally", "正常工作"]], examples: [["The system is operating normally.", "系统运行正常。"], ["All panels are operating normally.", "所有控制盘运行正常。"]] },
    ],
    phrases: [
      { p: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "运行正常", why: "operating + normally = 正常运行。这是汇报设备状态的标准用语，表明设备所有功能正常，可以正常工作。" },
    ],
    grammar: [
      { q: "is operating normally 和 operates normally 有什么区别？", a: "is operating normally = 正在正常运行（现在进行时，强调当前状态）\noperates normally = 正常运行（一般现在时，描述常态）\n✅ The discharge panel is operating normally.（灭火控制盘正在正常运行 → 汇报当前状态）\n✅ The panel operates normally in auto mode.（控制盘在自动模式下正常运行 → 描述常态）\n交接用进行时，关注'此刻的运行状态'。" },
    ],
    pattern: "设备 + is operating normally",
    patternExamples: [
      { en: "The fire alarm panel is operating normally.", cn: "火灾报警控制器运行正常。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "panel", ipa: "/ˈpænl/", cn: "面板", phonics: "pan 读 /pæn/，el 读 /l/" }] },
      { en: "The emergency generator is operating normally.", cn: "应急发电机运行正常。", words: [{ w: "emergency", ipa: "/ɪˈmɜːrdʒənsi/", cn: "紧急", phonics: "e 读 /ɪ/，mergency 读 /mɜːrdʒənsi/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "The ventilation system is operating normally.", cn: "通风系统运行正常。", words: [{ w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "灭火控制盘正常状态的判断标准：\n① 所有指示灯显示正常（绿色常亮）。\n② 无故障告警（无红色/黄色指示灯）。\n③ 控制模式设置为自动（Auto）。\n④ 延时设置正确（通常 30 秒）。\n⑤ 与探测器的通信正常（无通信故障）。\n⑥ 紧急停止功能可用。\n只有所有条件都满足，才能说 operating normally。",
    pronunciation: "discharge 的 dis 读 /dɪs/，重音在第二音节 dis-charge。\noperating 的 o 读 /ɒ/，重音在 op 上。",
    quiz: [
      { q: "应急发电机运行正常，怎么说？", a: "The emergency generator is operating normally." },
    ],
  },
  // ── 场景001：消防系统 - 消防泵 (1705-1708) ──
  {
    id: 1705,
    en: "Please check the fire pump.",
    cn: "请检查消防泵。",
    ipa: "/pliːz tʃɛk ðə ˈfaɪər pʌmp/",
    tags: ["第1705句", "消防泵", "★★★★★"],
    when: "消防泵是消防供水系统的核心设备，为喷淋系统和消火栓提供水压。交接时检查消防泵的运行状态。",
    words: [
      { w: "fire pump", ipa: "/ˈfaɪər pʌmp/", pos: "名词短语", cn: "消防泵", memory: "fire = 火灾；pump = 泵。\nfire pump = 消防泵，为消防系统提供水压。\nfire main pump = 消防主泵\njockey pump = 稳压泵（维持管网压力）", phonics: "fire 读 /ˈfaɪər/，pump 读 /pʌmp/。", collocations: [["fire pump", "消防泵"], ["fire main pump", "消防主泵"], ["pump room", "泵房"]], examples: [["Check the fire pump status.", "检查消防泵状态。"], ["The fire pump is in auto mode.", "消防泵处于自动模式。"]] },
      { w: "check", ipa: "/tʃɛk/", pos: "动词", cn: "检查；查看", memory: "check = 检查/查看（快速确认状态）。\n在交接场景中，check 是最常用的动作动词。\n与 inspect（详细物理检查）不同，check 侧重远程查看。", phonics: "ch 读 /tʃ/，eck 读 /ɛk/。", collocations: [["check the pump", "检查泵"], ["check the status", "检查状态"], ["check the pressure", "检查压力"]], examples: [["Please check the pump.", "请检查水泵。"], ["Check the alarm status.", "检查告警状态。"]] },
    ],
    phrases: [
      { p: "fire pump", ipa: "/ˈfaɪər pʌmp/", cn: "消防泵", why: "fire + pump = 消防泵。消防泵是消防供水系统的动力核心，为喷淋系统和消火栓提供足够的水压和流量。" },
    ],
    grammar: [
      { q: "fire pump 和 jockey pump 有什么区别？", a: "fire pump = 消防主泵（火灾时启动，提供大流量高压水）\njockey pump = 稳压泵（平时运行，维持管网压力）\n✅ The fire pump starts when there is a fire.（消防泵在火灾时启动）\n✅ The jockey pump maintains system pressure.（稳压泵维持系统压力）\n消防泵功率大但平时不运行，稳压泵功率小但经常运行。" },
    ],
    pattern: "Please check the + 泵/设备",
    patternExamples: [
      { en: "Please check the jockey pump.", cn: "请检查稳压泵。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }] },
      { en: "Please check the water pump.", cn: "请检查水泵。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }] },
      { en: "Please check the booster pump.", cn: "请检查增压泵。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }] },
    ],
    thinking: "消防泵的检查要点：\n① 确认消防泵处于自动模式（Auto）。\n② 检查消防泵控制柜无故障指示。\n③ 确认消防泵进出口阀门处于开启状态。\n④ 检查泵房无漏水、无异常声音。\n⑤ 记录消防泵的运行参数（压力、电流等）。\n消防泵是消防系统的'心脏'，必须确保随时可用。",
    pronunciation: "fire 的 ire 读 /aɪər/，pump 的 u 读 /ʌ/。",
    quiz: [
      { q: "请检查稳压泵，怎么说？", a: "Please check the jockey pump." },
      { q: "消防泵和稳压泵有什么区别？", a: "消防泵（Fire Pump）是消防主泵，功率大、流量大，只在火灾时启动，为喷淋系统和消火栓提供高压水；稳压泵（Jockey Pump）功率小、流量小，平时持续运行，维持消防管网的正常压力，防止因微小泄漏导致压力下降。" },
    ],
  },
  {
    id: 1706,
    en: "The fire pump is in automatic mode.",
    cn: "消防泵处于自动模式。",
    ipa: "/ðə ˈfaɪər pʌmp ɪz ɪn ˌɔːtəˈmætɪk moʊd/",
    tags: ["第1706句", "消防泵模式", "★★★★★"],
    when: "确认消防泵处于自动模式，可以在火灾时自动启动。automatic mode 是消防泵的正常工作模式。",
    words: [
      { w: "fire pump", ipa: "/ˈfaɪər pʌmp/", pos: "名词短语", cn: "消防泵", memory: "fire = 火灾；pump = 泵。\nfire pump = 消防泵，为消防系统提供水压。\nfire main pump = 消防主泵\njockey pump = 稳压泵（维持管网压力）", phonics: "fire 读 /ˈfaɪər/，pump 读 /pʌmp/。", collocations: [["fire pump", "消防泵"], ["pump room", "泵房"], ["pump status", "泵状态"]], examples: [["Check the fire pump.", "检查消防泵。"], ["The fire pump is running.", "消防泵正在运行。"]] },
      { w: "automatic mode", ipa: "/ˌɔːtəˈmætɪk moʊd/", pos: "名词短语", cn: "自动模式", memory: "automatic = 自动的；mode = 模式。\nautomatic mode = 自动模式，设备可以自动响应控制信号。\n消防泵必须处于自动模式，确保火灾时能自动启动。", phonics: "auto 读 /ˌɔːtə/，matic 读 /ˈmætɪk/，mode 读 /moʊd/。", collocations: [["in automatic mode", "处于自动模式"], ["switch to automatic", "切换到自动"], ["automatic start", "自动启动"]], examples: [["The pump is in automatic mode.", "水泵处于自动模式。"], ["Switch to automatic mode.", "切换到自动模式。"]] },
    ],
    phrases: [
      { p: "in automatic mode", ipa: "/ɪn ˌɔːtəˈmætɪk moʊd/", cn: "处于自动模式", why: "in + automatic + mode = 处于自动模式。消防泵必须处于自动模式，确保火灾时能自动启动供水，这是消防系统可靠性的关键。" },
    ],
    grammar: [
      { q: "is in automatic mode 和 operates automatically 有什么区别？", a: "is in automatic mode = 处于自动模式（描述当前设置状态）\noperates automatically = 自动运行（描述运行方式）\n✅ The fire pump is in automatic mode.（消防泵处于自动模式 → 当前设置）\n✅ The pump operates automatically when pressure drops.（水泵在压力下降时自动运行 → 运行方式）\n交接时关注'当前的模式设置'。" },
    ],
    pattern: "设备 + is in automatic mode",
    patternExamples: [
      { en: "The sprinkler system is in automatic mode.", cn: "喷淋系统处于自动模式。", words: [{ w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "mode", ipa: "/moʊd/", cn: "模式", phonics: "mode 读 /moʊd/" }] },
      { en: "The ventilation fan is in automatic mode.", cn: "通风风机处于自动模式。", words: [{ w: "mode", ipa: "/moʊd/", cn: "模式", phonics: "mode 读 /moʊd/" }] },
      { en: "The emergency lighting is in automatic mode.", cn: "应急照明处于自动模式。", words: [{ w: "emergency", ipa: "/ɪˈmɜːrdʒənsi/", cn: "紧急", phonics: "e 读 /ɪ/，mergency 读 /mɜːrdʒənsi/" }, { w: "mode", ipa: "/moʊd/", cn: "模式", phonics: "mode 读 /moʊd/" }] },
    ],
    thinking: "消防泵的工作模式：\n① Automatic（自动）：正常模式，火灾时自动启动。\n② Manual（手动）：维护模式，需要人工启动。\n③ Off（关闭）：检修模式，禁止在正常运行时使用。\n消防泵必须始终处于自动模式，确保火灾时能立即启动。如果发现被切换到手动模式，必须立即恢复为自动模式并调查原因。",
    pronunciation: "automatic 的 auto 读 /ˌɔːtə/，matic 读 /ˈmætɪk/，重音在 mat 上。\nmode 的 o 读 /oʊ/。",
    quiz: [
      { q: "喷淋系统处于自动模式，怎么说？", a: "The sprinkler system is in automatic mode." },
    ],
  },
  {
    id: 1707,
    en: "Please check the jockey pump.",
    cn: "请检查稳压泵。",
    ipa: "/pliːz tʃɛk ðə ˈdʒɒki pʌmp/",
    tags: ["第1707句", "稳压泵", "★★★★★"],
    when: "稳压泵（Jockey Pump）用于维持消防管网的正常压力，防止因微小泄漏导致压力下降。交接时检查稳压泵的运行状态。",
    words: [
      { w: "jockey pump", ipa: "/ˈdʒɒki pʌmp/", pos: "名词短语", cn: "稳压泵", memory: "jockey = 骑师/辅助；pump = 泵。\njockey pump = 稳压泵，用于维持消防管网压力。\n稳压泵功率小、流量小，平时持续运行，防止压力下降。\n当压力下降到设定值时，消防主泵会自动启动。", phonics: "jockey 读 /ˈdʒɒki/，pump 读 /pʌmp/。", collocations: [["jockey pump", "稳压泵"], ["pressure maintenance pump", "压力维持泵"], ["pump status", "泵状态"]], examples: [["Check the jockey pump.", "检查稳压泵。"], ["The jockey pump is running.", "稳压泵正在运行。"]] },
      { w: "check", ipa: "/tʃɛk/", pos: "动词", cn: "检查；查看", memory: "check = 检查/查看（快速确认状态）。\n在交接场景中，check 是最常用的动作动词。", phonics: "ch 读 /tʃ/，eck 读 /ɛk/。", collocations: [["check the pump", "检查泵"], ["check the pressure", "检查压力"], ["check the status", "检查状态"]], examples: [["Please check the pump.", "请检查水泵。"], ["Check the pressure gauge.", "检查压力表。"]] },
    ],
    phrases: [
      { p: "jockey pump", ipa: "/ˈdʒɒki pʌmp/", cn: "稳压泵", why: "jockey + pump = 稳压泵。稳压泵是消防供水系统的辅助设备，用于维持管网的正常压力，防止因微小泄漏导致压力下降，避免消防主泵频繁启动。" },
    ],
    grammar: [
      { q: "jockey pump 为什么叫 jockey？", a: "jockey = 骑师/辅助人员。\njockey pump 被称为'骑师泵'，因为它像骑师辅助赛马一样，辅助消防主泵工作。\n✅ Jockey pump = 稳压泵（维持压力）\n✅ Pressure maintenance pump = 压力维持泵（同义词）\n✅ Booster pump = 增压泵（增加压力）\n不同地区可能使用不同的术语。" },
    ],
    pattern: "Please check the + 泵/设备",
    patternExamples: [
      { en: "Please check the booster pump.", cn: "请检查增压泵。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }] },
      { en: "Please check the circulation pump.", cn: "请检查循环泵。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }] },
      { en: "Please check the drain pump.", cn: "请检查排水泵。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }] },
    ],
    thinking: "稳压泵的检查要点：\n① 确认稳压泵正在运行（或处于自动待机状态）。\n② 检查稳压泵控制柜无故障指示。\n③ 确认消防管网压力在正常范围（通常 6-8 bar）。\n④ 检查稳压泵启停频率是否正常（频繁启停可能有泄漏）。\n⑤ 记录稳压泵的运行参数。\n稳压泵的正常运行是消防系统可靠性的基础。",
    pronunciation: "jockey 的 jock 读 /ˈdʒɒk/，ey 读 /i/，重音在第一音节。\npump 的 u 读 /ʌ/。",
    quiz: [
      { q: "请检查增压泵，怎么说？", a: "Please check the booster pump." },
      { q: "稳压泵频繁启停可能是什么原因？", a: "稳压泵频繁启停的可能原因：① 消防管网有泄漏 ② 压力开关设置不当（启停压差过小）③ 稳压泵本身故障（如止回阀失效）④ 系统用水量波动大。应检查管网是否有泄漏，并调整压力开关设置。" },
    ],
  },
  {
    id: 1708,
    en: "The jockey pump is operating normally.",
    cn: "稳压泵运行正常。",
    ipa: "/ðə ˈdʒɒki pʌmp ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1708句", "稳压泵正常", "★★★★★"],
    when: "确认稳压泵运行状态正常。operating normally 表示稳压泵能够正常维持消防管网压力。",
    words: [
      { w: "jockey pump", ipa: "/ˈdʒɒki pʌmp/", pos: "名词短语", cn: "稳压泵", memory: "jockey = 骑师/辅助；pump = 泵。\njockey pump = 稳压泵，用于维持消防管网压力。\n稳压泵功率小、流量小，平时持续运行，防止压力下降。", phonics: "jockey 读 /ˈdʒɒki/，pump 读 /pʌmp/。", collocations: [["jockey pump", "稳压泵"], ["pump pressure", "泵压力"], ["pump status", "泵状态"]], examples: [["The jockey pump is running.", "稳压泵正在运行。"], ["Check the jockey pump.", "检查稳压泵。"]] },
      { w: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", pos: "动词短语", cn: "运行正常", memory: "operating = 运行中；normally = 正常地。\noperating normally = 正常运行，所有功能正常。\noperating abnormally = 运行异常", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/，normally 读 /ˈnɔːrməli/。", collocations: [["operating normally", "运行正常"], ["functioning normally", "正常运作"], ["running normally", "正常运行"]], examples: [["The pump is operating normally.", "水泵运行正常。"], ["All systems are operating normally.", "所有系统运行正常。"]] },
    ],
    phrases: [
      { p: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "运行正常", why: "operating + normally = 正常运行。这是汇报设备状态的标准用语，表明稳压泵能够正常维持消防管网压力。" },
    ],
    grammar: [
      { q: "is operating normally 和 runs normally 有什么区别？", a: "is operating normally = 正在正常运行（现在进行时，强调当前状态）\nruns normally = 正常运行（一般现在时，描述常态）\n✅ The jockey pump is operating normally.（稳压泵正在正常运行 → 汇报当前状态）\n✅ The pump runs normally at 6 bar.（水泵在 6 bar 时正常运行 → 描述常态）\n交接用进行时，关注'此刻的运行状态'。" },
    ],
    pattern: "设备 + is operating normally",
    patternExamples: [
      { en: "The fire pump is operating normally.", cn: "消防泵运行正常。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "The water pump is operating normally.", cn: "水泵运行正常。", words: [{ w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "The cooling pump is operating normally.", cn: "冷却泵运行正常。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
    ],
    thinking: "稳压泵正常状态的判断标准：\n① 稳压泵能够自动启停，维持管网压力在设定范围。\n② 启停频率正常（通常每小时 1-3 次）。\n③ 运行时无异常声音或振动。\n④ 控制柜无故障指示。\n⑤ 消防管网压力稳定在正常范围。\n只有所有条件都满足，才能说 operating normally。",
    pronunciation: "jockey 的 jock 读 /ˈdʒɒk/，重音在第一音节。\noperating 的 o 读 /ɒ/，重音在 op 上。",
    quiz: [
      { q: "消防泵运行正常，怎么说？", a: "The fire pump is operating normally." },
    ],
  },
  // ── 场景001：消防系统 - 告警 (1709-1715) ──
  {
    id: 1709,
    en: "A fire alarm has been detected.",
    cn: "检测到火灾报警。",
    ipa: "/ə ˈfaɪər əˈlɑːrm hæz biːn dɪˈtɛktɪd/",
    tags: ["第1709句", "火灾报警", "★★★★★"],
    when: "消防系统检测到火灾报警信号。这是紧急情况，需要立即确认是否为真实火警。",
    words: [
      { w: "fire alarm", ipa: "/ˈfaɪər əˈlɑːrm/", pos: "名词短语", cn: "火灾报警", memory: "fire = 火灾；alarm = 报警/警报。\nfire alarm = 火灾报警，指火灾探测系统发出的警报信号。\nfire alarm system = 火灾报警系统\nfire alarm panel = 火灾报警控制器", phonics: "fire 读 /ˈfaɪər/，alarm 读 /əˈlɑːrm/。", collocations: [["fire alarm", "火灾报警"], ["fire alarm system", "火灾报警系统"], ["alarm activated", "报警激活"]], examples: [["A fire alarm was triggered.", "火灾报警被触发。"], ["Check the fire alarm panel.", "检查火灾报警控制器。"]] },
      { w: "detected", ipa: "/dɪˈtɛktɪd/", pos: "动词过去分词", cn: "检测到", memory: "detect = 检测/发现；-ed = 过去分词。\ndetected = 被检测到/被发现。\nhas been detected = 已被检测到\nsmoke detected = 检测到烟雾", phonics: "de 读 /dɪ/，tect 读 /tɛkt/，ed 读 /ɪd/。", collocations: [["alarm detected", "报警被检测到"], ["smoke detected", "检测到烟雾"], ["heat detected", "检测到热量"]], examples: [["Smoke was detected.", "检测到烟雾。"], ["An alarm has been detected.", "检测到报警。"]] },
    ],
    phrases: [
      { p: "fire alarm has been detected", ipa: "/ˈfaɪər əˈlɑːrm hæz biːn dɪˈtɛktɪd/", cn: "检测到火灾报警", why: "fire alarm + has been detected = 火灾报警已被检测到。这是紧急情况的标准报告用语，表示系统已检测到火灾信号，需要立即响应。" },
    ],
    grammar: [
      { q: "has been detected 和 was detected 有什么区别？", a: "has been detected = 已被检测到（现在完成时，强调对现在的影响）\nwas detected = 被检测到（一般过去时，描述过去事件）\n✅ A fire alarm has been detected.（检测到火灾报警 → 刚刚发生，需要立即响应）\n✅ A fire alarm was detected at 10:00.（10:00 检测到火灾报警 → 描述过去事件）\n紧急情况用现在完成时，强调'刚刚发生，需要立即处理'。" },
    ],
    pattern: "告警类型 + has been detected",
    patternExamples: [
      { en: "A smoke alarm has been detected.", cn: "检测到烟雾报警。", words: [{ w: "smoke", ipa: "/smoʊk/", cn: "烟雾", phonics: "smoke 读 /smoʊk/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A heat alarm has been detected.", cn: "检测到温度报警。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A gas leak has been detected.", cn: "检测到气体泄漏。", words: [{ w: "gas", ipa: "/ɡæs/", cn: "气体", phonics: "gas 读 /ɡæs/" }] },
    ],
    thinking: "火灾报警的应急响应流程：\n① 确认报警位置（查看火灾报警控制器）。\n② 派遣人员到现场确认（2 分钟内）。\n③ 判断是真火警还是误报。\n④ 如果是真火警：启动应急预案，疏散人员，通知消防部门。\n⑤ 如果是误报：记录原因，复位报警，检查探测器。\n数据中心火灾报警必须立即响应，不能延误。",
    pronunciation: "fire 的 ire 读 /aɪər/，alarm 的 larm 读 /lɑːrm/。\ndetected 的 de 读 /dɪ/，tect 读 /tɛkt/。",
    quiz: [
      { q: "检测到烟雾报警，怎么说？", a: "A smoke alarm has been detected." },
      { q: "火灾报警的应急响应流程是什么？", a: "火灾报警应急响应流程：① 确认报警位置 ② 派遣人员到现场确认（2分钟内）③ 判断真火警还是误报 ④ 真火警：启动应急预案、疏散人员、通知消防部门 ⑤ 误报：记录原因、复位报警、检查探测器。" },
    ],
  },
  {
    id: 1710,
    en: "Please verify whether it is a real fire or a false alarm.",
    cn: "请确认是真火警还是误报警。",
    ipa: "/pliːz ˈvɛrɪfaɪ ˈwɛðər ɪt ɪz ə riːəl ˈfaɪər ɔːr ə fɔːls əˈlɑːrm/",
    tags: ["第1710句", "确认真假火警", "★★★★★"],
    when: "火灾报警后，必须立即派人到现场确认是真火警还是误报警。这是应急响应的关键步骤。",
    words: [
      { w: "verify", ipa: "/ˈvɛrɪfaɪ/", pos: "动词", cn: "核实；确认", memory: "verify = 核实/验证（确认是否符合事实）。\nverify the alarm = 核实报警\nverify the situation = 核实情况\nverify the cause = 核实原因", phonics: "ver 读 /vɛr/，i 读 /ɪ/，fy 读 /faɪ/，重音在第一音节。", collocations: [["verify the alarm", "核实报警"], ["verify the situation", "核实情况"], ["verify the cause", "核实原因"]], examples: [["Please verify the alarm.", "请核实报警。"], ["Verify the fire status.", "核实火警状态。"]] },
      { w: "false alarm", ipa: "/fɔːls əˈlɑːrm/", pos: "名词短语", cn: "误报警", memory: "false = 错误的/假的；alarm = 报警。\nfalse alarm = 误报警，指没有真实火情的报警。\nreal fire = 真火警\n误报警原因：探测器故障、维护施工、灰尘、蒸汽等。", phonics: "false 读 /fɔːls/，alarm 读 /əˈlɑːrm/。", collocations: [["false alarm", "误报警"], ["real fire", "真火警"], ["alarm verification", "报警核实"]], examples: [["It was a false alarm.", "是误报警。"], ["Verify if it is a real fire.", "核实是否为真火警。"]] },
    ],
    phrases: [
      { p: "real fire or false alarm", ipa: "/riːəl ˈfaɪər ɔːr fɔːls əˈlɑːrm/", cn: "真火警还是误报警", why: "real fire + or + false alarm = 真火警还是误报警。火灾报警后必须立即确认，这决定了后续的应急响应级别。" },
    ],
    grammar: [
      { q: "whether...or... 的用法是什么？", a: "whether...or... = 是否…还是…（表示选择）\n✅ Please verify whether it is a real fire or a false alarm.（请确认是真火警还是误报警）\n✅ Check whether the alarm is active or cleared.（检查报警是活动还是已恢复）\n✅ Confirm whether the system is in auto or manual mode.（确认系统是自动还是手动模式）\nwhether...or... 用于表示两种可能性的选择。" },
    ],
    pattern: "Please verify whether + 选择1 + or + 选择2",
    patternExamples: [
      { en: "Please verify whether the system is online or offline.", cn: "请确认系统是在线还是离线。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Please verify whether the valve is open or closed.", cn: "请确认阀门是开启还是关闭。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "valve", ipa: "/vælv/", cn: "阀门", phonics: "valve 读 /vælv/" }] },
      { en: "Please verify whether the power is on or off.", cn: "请确认电源是开启还是关闭。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }] },
    ],
    thinking: "火灾报警核实要点：\n① 查看火灾报警控制器，确认报警位置。\n② 派遣 2 名人员到现场确认（携带对讲机和灭火器）。\n③ 观察是否有烟雾、火焰、异味。\n④ 检查是否有维护施工（焊接、切割等可能触发报警）。\n⑤ 确认后立即向控制中心报告结果。\n⑥ 如果是真火警，立即启动应急预案。\n核实必须在 2 分钟内完成，不能延误。",
    pronunciation: "verify 的 ver 读 /vɛr/，重音在第一音节。\nwhether 的 whe 读 /wɛ/，ther 读 /ðər/。\nfalse 的 al 读 /ɔːl/。",
    quiz: [
      { q: "请确认阀门是开启还是关闭，怎么说？", a: "Please verify whether the valve is open or closed." },
      { q: "火灾报警核实的时限要求是多少？", a: "火灾报警核实必须在 2 分钟内完成。数据中心消防规范要求：火灾报警后，必须在 2 分钟内派遣人员到现场确认，判断是真火警还是误报警，并立即向控制中心报告结果。" },
    ],
  },
  {
    id: 1711,
    en: "Please dispatch an engineer to investigate immediately.",
    cn: "请立即派工程师到现场检查。",
    ipa: "/pliːz dɪsˈpætʃ æn ˌɛndʒɪˈnɪr tuː ɪnˈvɛstɪɡeɪt ɪˈmiːdiətli/",
    tags: ["第1711句", "派遣工程师", "★★★★★"],
    when: "火灾报警后，必须立即派遣工程师到现场调查原因。dispatch 表示派遣，investigate 表示调查。",
    words: [
      { w: "dispatch", ipa: "/dɪsˈpætʃ/", pos: "动词", cn: "派遣；派出", memory: "dispatch = 派遣/派出（快速发送人员或物资）。\ndispatch an engineer = 派遣工程师\ndispatch a team = 派遣团队\ndispatch immediately = 立即派遣", phonics: "dis 读 /dɪs/，patch 读 /pætʃ/，重音在第二音节。", collocations: [["dispatch an engineer", "派遣工程师"], ["dispatch immediately", "立即派遣"], ["dispatch a team", "派遣团队"]], examples: [["Dispatch an engineer to the site.", "派遣工程师到现场。"], ["Please dispatch immediately.", "请立即派遣。"]] },
      { w: "investigate", ipa: "/ɪnˈvɛstɪɡeɪt/", pos: "动词", cn: "调查；检查", memory: "investigate = 调查/检查（详细查明原因）。\ninvestigate the alarm = 调查报警\ninvestigate the cause = 调查原因\ninvestigate the problem = 调查问题", phonics: "in 读 /ɪn/，ves 读 /vɛs/，ti 读 /tɪ/，gate 读 /ɡeɪt/，重音在第二音节。", collocations: [["investigate the alarm", "调查报警"], ["investigate the cause", "调查原因"], ["investigate the problem", "调查问题"]], examples: [["Investigate the alarm cause.", "调查报警原因。"], ["Please investigate immediately.", "请立即调查。"]] },
    ],
    phrases: [
      { p: "dispatch an engineer", ipa: "/dɪsˈpætʃ æn ˌɛndʒɪˈnɪr/", cn: "派遣工程师", why: "dispatch + an + engineer = 派遣工程师。火灾报警后必须立即派遣工程师到现场核实，这是应急响应的关键步骤。" },
    ],
    grammar: [
      { q: "dispatch 和 send 有什么区别？", a: "dispatch = 派遣/派出（正式用语，强调快速和专业）\nsend = 发送/派（通用用语）\n✅ Please dispatch an engineer immediately.（请立即派遣工程师 → 正式、紧急）\n✅ Please send someone to check.（请派人检查 → 通用、非正式）\n应急响应用 dispatch 更专业。" },
    ],
    pattern: "Please dispatch + 人员 + to + 动作",
    patternExamples: [
      { en: "Please dispatch a technician to repair.", cn: "请派遣技术员维修。", words: [{ w: "repair", ipa: "/rɪˈpeər/", cn: "维修", phonics: "re 读 /rɪ/，pair 读 /peər/" }] },
      { en: "Please dispatch a team to inspect.", cn: "请派遣团队检查。", words: [{ w: "inspect", ipa: "/ɪnˈspɛkt/", cn: "检查；巡检", phonics: "in 读 /ɪn/，spect 读 /spɛkt/" }] },
      { en: "Please dispatch security to investigate.", cn: "请派遣保安调查。", words: [{ w: "security", ipa: "/sɪˈkjʊrɪti/", cn: "安防", phonics: "se 读 /sɪ/，curity 读 /kjʊrɪti/" }] },
    ],
    thinking: "火灾报警派遣要求：\n① 立即派遣至少 2 名工程师到现场。\n② 携带对讲机、灭火器、手电筒。\n③ 必须在 2 分钟内到达报警位置。\n④ 观察是否有烟雾、火焰、异味。\n⑤ 确认后立即向控制中心报告。\n⑥ 如果是真火警，立即启动应急预案。\n派遣必须迅速，不能延误。",
    pronunciation: "dispatch 的 dis 读 /dɪs/，patch 读 /pætʃ/，重音在第二音节。\ninvestigate 的 in 读 /ɪn/，ves 读 /vɛs/，重音在第二音节。\nimmediately 的 im 读 /ɪ/，me 读 /miː/，di 读 /di/，ate 读 /ətli/。",
    quiz: [
      { q: "请派遣技术员维修，怎么说？", a: "Please dispatch a technician to repair." },
      { q: "火灾报警派遣工程师的时限要求是多少？", a: "火灾报警后，必须在 2 分钟内派遣工程师到现场。数据中心消防规范要求：火灾报警后，控制中心必须立即派遣至少 2 名工程师到现场核实，携带对讲机和灭火器，在 2 分钟内到达报警位置。" },
    ],
  },
  {
    id: 1712,
    en: "No signs of fire have been found.",
    cn: "现场未发现火情。",
    ipa: "/noʊ saɪnz əv ˈfaɪər hæv biːn faʊnd/",
    tags: ["第1712句", "未发现火情", "★★★★★"],
    when: "工程师到现场检查后，确认没有发现火灾迹象。这是判断为误报警的重要依据。",
    words: [
      { w: "signs", ipa: "/saɪnz/", pos: "名词复数", cn: "迹象；征兆", memory: "sign = 迹象/征兆；-s = 复数。\nsigns of fire = 火灾迹象（烟雾、火焰、异味、高温等）\nno signs = 没有迹象\nsigns of damage = 损坏迹象", phonics: "sign 读 /saɪn/，s 读 /z/。", collocations: [["signs of fire", "火灾迹象"], ["no signs", "没有迹象"], ["signs of damage", "损坏迹象"]], examples: [["No signs of fire were found.", "未发现火灾迹象。"], ["Check for signs of leakage.", "检查是否有泄漏迹象。"]] },
      { w: "found", ipa: "/faʊnd/", pos: "动词过去分词", cn: "发现", memory: "find = 发现；found = 过去分词。\nfound = 被发现/被找到。\nhas been found = 已被发现\nno signs found = 未发现迹象", phonics: "found 读 /faʊnd/，ou 读 /aʊ/。", collocations: [["no signs found", "未发现迹象"], ["problem found", "发现问题"], ["cause found", "发现原因"]], examples: [["No problems were found.", "未发现问题。"], ["The cause was found.", "原因已发现。"]] },
    ],
    phrases: [
      { p: "no signs of fire", ipa: "/noʊ saɪnz əv ˈfaɪər/", cn: "未发现火情", why: "no + signs + of + fire = 没有火灾迹象。这是判断为误报警的关键依据，表示现场检查未发现烟雾、火焰、异味等火灾特征。" },
    ],
    grammar: [
      { q: "have been found 和 were found 有什么区别？", a: "have been found = 已被发现（现在完成时，强调对现在的影响）\nwere found = 被发现（一般过去时，描述过去事件）\n✅ No signs of fire have been found.（未发现火情 → 刚刚检查完毕，现在确认没有火情）\n✅ No signs of fire were found at 10:00.（10:00 未发现火情 → 描述过去事件）\n现场报告用现在完成时，强调'刚刚确认的结果'。" },
    ],
    pattern: "No + 问题 + have been found",
    patternExamples: [
      { en: "No signs of leakage have been found.", cn: "未发现泄漏迹象。", words: [{ w: "signs", ipa: "/saɪn/", cn: "签字", phonics: "sign 读 /saɪn/" }] },
      { en: "No abnormalities have been found.", cn: "未发现异常。", words: [] },
      { en: "No defects have been found.", cn: "未发现缺陷。", words: [] },
    ],
    thinking: "现场确认未发现火情的报告内容：\n① 报告位置：XX 楼层 XX 区域。\n② 报告结果：未发现烟雾、火焰、异味、高温等火灾迹象。\n③ 可能原因：维护施工、探测器故障、灰尘、蒸汽等。\n④ 建议：复位报警，检查探测器，记录事件。\n⑤ 后续：继续监控该区域，确保无异常。\n确认无火情后，可以复位报警，恢复正常监控。",
    pronunciation: "signs 的 sign 读 /saɪn/，s 读 /z/。\nfound 的 ou 读 /aʊ/。",
    quiz: [
      { q: "未发现泄漏迹象，怎么说？", a: "No signs of leakage have been found." },
    ],
  },
  {
    id: 1713,
    en: "The alarm was caused by maintenance work.",
    cn: "该报警由维护施工引起。",
    ipa: "/ði əˈlɑːrm wɒz kɔːzd baɪ ˈmeɪntənəns wɜːrk/",
    tags: ["第1713句", "维护施工引起", "★★★★★"],
    when: "确认报警原因是维护施工（如焊接、切割、灰尘等）引起的误报警。这是常见的误报原因之一。",
    words: [
      { w: "caused by", ipa: "/kɔːzd baɪ/", pos: "动词短语", cn: "由…引起", memory: "cause = 引起/导致；-ed = 过去分词；by = 由。\ncaused by = 由…引起/由…导致。\ncaused by maintenance = 由维护引起\ncaused by dust = 由灰尘引起", phonics: "cause 读 /kɔːz/，ed 读 /d/，by 读 /baɪ/。", collocations: [["caused by maintenance", "由维护引起"], ["caused by dust", "由灰尘引起"], ["caused by smoke", "由烟雾引起"]], examples: [["The alarm was caused by dust.", "报警由灰尘引起。"], ["The problem was caused by a fault.", "问题由故障引起。"]] },
      { w: "maintenance work", ipa: "/ˈmeɪntənəns wɜːrk/", pos: "名词短语", cn: "维护施工", memory: "maintenance = 维护；work = 工作/施工。\nmaintenance work = 维护施工/维护工作。\nmaintenance activities = 维护活动\npreventive maintenance = 预防性维护", phonics: "main 读 /meɪn/，te 读 /tə/，nance 读 /nəns/，work 读 /wɜːrk/。", collocations: [["maintenance work", "维护施工"], ["maintenance activities", "维护活动"], ["preventive maintenance", "预防性维护"]], examples: [["Maintenance work is in progress.", "维护施工正在进行。"], ["Schedule maintenance work.", "安排维护施工。"]] },
    ],
    phrases: [
      { p: "caused by maintenance work", ipa: "/kɔːzd baɪ ˈmeɪntənəns wɜːrk/", cn: "由维护施工引起", why: "caused by + maintenance work = 由维护施工引起。维护施工（焊接、切割、打磨等）产生的烟雾、灰尘、热量可能触发探测器报警，是常见的误报原因。" },
    ],
    grammar: [
      { q: "was caused by 和 is caused by 有什么区别？", a: "was caused by = 由…引起（一般过去时，描述过去事件的原因）\nis caused by = 由…引起（一般现在时，描述常态或规律）\n✅ The alarm was caused by maintenance work.（报警由维护施工引起 → 这次报警的原因）\n✅ Alarms are often caused by dust.（报警通常由灰尘引起 → 一般规律）\n报告具体事件用 was caused by。" },
    ],
    pattern: "事件 + was caused by + 原因",
    patternExamples: [
      { en: "The fault was caused by a power surge.", cn: "故障由电源浪涌引起。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }] },
      { en: "The alarm was caused by steam.", cn: "报警由蒸汽引起。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "The outage was caused by a short circuit.", cn: "停电由短路引起。", words: [{ w: "circuit", ipa: "/ˈsɜːrkɪt/", cn: "电路", phonics: "cir 读 /sɜːr/，cuit 读 /kɪt/" }] },
    ],
    thinking: "维护施工引起误报警的预防措施：\n① 施工前通知消防控制中心。\n② 将施工区域的探测器临时隔离（需审批）。\n③ 施工时使用防尘罩覆盖探测器。\n④ 施工完毕后恢复探测器，确认正常。\n⑤ 记录施工期间的报警事件。\n维护施工必须遵守消防安全管理规定，避免误报警。",
    pronunciation: "caused 的 cause 读 /kɔːz/，ed 读 /d/。\nmaintenance 的 main 读 /meɪn/，te 读 /tə/，nance 读 /nəns/。\nwork 的 or 读 /ɜːr/。",
    quiz: [
      { q: "故障由电源浪涌引起，怎么说？", a: "The fault was caused by a power surge." },
      { q: "如何预防维护施工引起的误报警？", a: "预防维护施工引起误报警的措施：① 施工前通知消防控制中心 ② 将施工区域的探测器临时隔离（需审批）③ 施工时使用防尘罩覆盖探测器 ④ 施工完毕后恢复探测器并确认正常 ⑤ 记录施工期间的报警事件。" },
    ],
  },
  {
    id: 1714,
    en: "The fire alarm has been reset successfully.",
    cn: "火灾报警已经成功复位。",
    ipa: "/ðə ˈfaɪər əˈlɑːrm hæz biːn ˌriːˈsɛt səkˈsɛsfəli/",
    tags: ["第1714句", "报警复位", "★★★★★"],
    when: "确认为误报警后，将火灾报警系统复位。reset 表示复位/重置，successfully 表示成功。",
    words: [
      { w: "reset", ipa: "/ˌriːˈsɛt/", pos: "动词", cn: "复位；重置", memory: "re = 重新；set = 设置。\nreset = 复位/重置（恢复到初始状态）。\nreset the alarm = 复位报警\nreset the system = 复位系统\nreset the controller = 复位控制器", phonics: "re 读 /riː/，set 读 /sɛt/，重音在第二音节。", collocations: [["reset the alarm", "复位报警"], ["reset the system", "复位系统"], ["reset the controller", "复位控制器"]], examples: [["Reset the fire alarm.", "复位火灾报警。"], ["The system has been reset.", "系统已复位。"]] },
      { w: "successfully", ipa: "/səkˈsɛsfəli/", pos: "副词", cn: "成功地", memory: "success = 成功；-ful = 形容词后缀；-ly = 副词后缀。\nsuccessfully = 成功地/顺利完成。\ncompleted successfully = 成功完成\nreset successfully = 成功复位", phonics: "suc 读 /sək/，cess 读 /sɛs/，ful 读 /fəl/，ly 读 /li/，重音在第二音节。", collocations: [["completed successfully", "成功完成"], ["reset successfully", "成功复位"], ["installed successfully", "成功安装"]], examples: [["The task was completed successfully.", "任务成功完成。"], ["The system was reset successfully.", "系统成功复位。"]] },
    ],
    phrases: [
      { p: "fire alarm has been reset", ipa: "/ˈfaɪər əˈlɑːrm hæz biːn ˌriːˈsɛt/", cn: "火灾报警已复位", why: "fire alarm + has been reset = 火灾报警已复位。确认为误报警后，必须将报警系统复位，恢复正常监控状态。" },
    ],
    grammar: [
      { q: "has been reset 和 was reset 有什么区别？", a: "has been reset = 已复位（现在完成时，强调对现在的影响）\nwas reset = 被复位（一般过去时，描述过去事件）\n✅ The fire alarm has been reset successfully.（火灾报警已成功复位 → 现在已恢复正常）\n✅ The alarm was reset at 10:30.（报警在 10:30 被复位 → 描述过去事件）\n报告结果用现在完成时，强调'现在已恢复正常'。" },
    ],
    pattern: "系统/设备 + has been reset successfully",
    patternExamples: [
      { en: "The control panel has been reset successfully.", cn: "控制盘已成功复位。", words: [{ w: "control", ipa: "/kənˈtroʊl/", cn: "控制", phonics: "con 读 /kən/，trol 读 /troʊl/" }, { w: "panel", ipa: "/ˈpænl/", cn: "面板", phonics: "pan 读 /pæn/，el 读 /l/" }, { w: "reset", ipa: "/riːˈsɛt/", cn: "重置", phonics: "re 读 /riː/，set 读 /sɛt/" }] },
      { en: "The detector has been reset successfully.", cn: "探测器已成功复位。", words: [{ w: "reset", ipa: "/riːˈsɛt/", cn: "重置", phonics: "re 读 /riː/，set 读 /sɛt/" }] },
      { en: "The system has been reset successfully.", cn: "系统已成功复位。", words: [{ w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "reset", ipa: "/riːˈsɛt/", cn: "重置", phonics: "re 读 /riː/，set 读 /sɛt/" }] },
    ],
    thinking: "火灾报警复位的条件：\n① 已确认是误报警（无真实火情）。\n② 已查明误报原因（维护施工、探测器故障等）。\n③ 已排除误报原因（施工完毕、探测器清洁等）。\n④ 已获得授权人员批准。\n⑤ 复位后确认系统正常（无故障指示）。\n⑥ 记录复位时间和原因。\n复位必须谨慎，不能盲目复位。",
    pronunciation: "reset 的 re 读 /riː/，set 读 /sɛt/，重音在第二音节。\nsuccessfully 的 suc 读 /sək/，cess 读 /sɛs/，重音在第二音节。",
    quiz: [
      { q: "控制盘已成功复位，怎么说？", a: "The control panel has been reset successfully." },
      { q: "火灾报警复位的条件是什么？", a: "火灾报警复位的条件：① 已确认是误报警（无真实火情）② 已查明误报原因 ③ 已排除误报原因 ④ 已获得授权人员批准 ⑤ 复位后确认系统正常 ⑥ 记录复位时间和原因。" },
    ],
  },
  {
    id: 1715,
    en: "All fire alarms have been cleared.",
    cn: "所有消防告警已经恢复。",
    ipa: "/ɔːl ˈfaɪər əˈlɑːrmz hæv biːn klɪərd/",
    tags: ["第1715句", "告警恢复", "★★★★★"],
    when: "所有消防告警已经清除，系统恢复正常监控状态。cleared 表示清除/恢复。",
    words: [
      { w: "fire alarms", ipa: "/ˈfaɪər əˈlɑːrmz/", pos: "名词短语", cn: "消防告警", memory: "fire = 火灾/消防；alarms = 告警/警报（复数）。\nfire alarms = 消防告警，包括烟感、温感、手动报警等所有类型的告警。\nall fire alarms = 所有消防告警", phonics: "fire 读 /ˈfaɪər/，alarms 读 /əˈlɑːrmz/。", collocations: [["fire alarms", "消防告警"], ["active alarms", "活动告警"], ["alarm history", "告警历史"]], examples: [["All fire alarms are cleared.", "所有消防告警已恢复。"], ["Check the fire alarms.", "检查消防告警。"]] },
      { w: "cleared", ipa: "/klɪərd/", pos: "动词过去分词", cn: "清除；恢复", memory: "clear = 清除/清除；-ed = 过去分词。\ncleared = 已清除/已恢复。\nalarms cleared = 告警已恢复\nfault cleared = 故障已清除", phonics: "clear 读 /klɪər/，ed 读 /d/。", collocations: [["alarms cleared", "告警已恢复"], ["fault cleared", "故障已清除"], ["all cleared", "全部清除"]], examples: [["All alarms have been cleared.", "所有告警已恢复。"], ["The fault has been cleared.", "故障已清除。"]] },
    ],
    phrases: [
      { p: "all fire alarms have been cleared", ipa: "/ɔːl ˈfaɪər əˈlɑːrmz hæv biːn klɪərd/", cn: "所有消防告警已恢复", why: "all + fire alarms + have been cleared = 所有消防告警已恢复。这表示所有告警事件已处理完毕，系统恢复正常监控状态。" },
    ],
    grammar: [
      { q: "have been cleared 和 are cleared 有什么区别？", a: "have been cleared = 已清除（现在完成时，强调动作已完成）\nare cleared = 已清除（一般现在时，描述当前状态）\n✅ All fire alarms have been cleared.（所有消防告警已恢复 → 强调动作已完成）\n✅ All alarms are cleared.（所有告警已清除 → 描述当前状态）\n交接时用现在完成时，强调'已经处理完毕'。" },
    ],
    pattern: "All + 告警/故障 + have been cleared",
    patternExamples: [
      { en: "All system alarms have been cleared.", cn: "所有系统告警已恢复。", words: [{ w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
      { en: "All faults have been cleared.", cn: "所有故障已清除。", words: [{ w: "faults", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
      { en: "All warnings have been cleared.", cn: "所有警告已清除。", words: [{ w: "warnings", ipa: "/ˈwɔːrnɪŋ/", cn: "警告", phonics: "warn 读 /wɔːrn/，ing 读 /ɪŋ/" }, { w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
    ],
    thinking: "消防告警恢复的确认要点：\n① 确认所有告警已处理完毕（无活动告警）。\n② 确认火灾报警控制器显示正常（无告警指示灯）。\n③ 确认所有探测器工作正常（无故障指示）。\n④ 确认灭火系统处于正常状态（钢瓶压力正常、控制盘正常）。\n⑤ 记录告警恢复时间和处理过程。\n只有所有条件都满足，才能说 all alarms cleared。",
    pronunciation: "cleared 的 clear 读 /klɪər/，ed 读 /d/。\nalarms 的 arm 读 /ɑːrm/，s 读 /z/。",
    quiz: [
      { q: "所有系统告警已恢复，怎么说？", a: "All system alarms have been cleared." },
    ],
  },
  // ── 场景001：消防系统 - 巡检与交接 (1716-1720) ──
  {
    id: 1716,
    en: "Please record the inspection results.",
    cn: "请记录巡检结果。",
    ipa: "/pliːz ˈrɛkɔːrd ðɪ ɪnˈspɛkʃən rɪˈzʌlts/",
    tags: ["第1716句", "记录巡检", "★★★★★"],
    when: "消防系统巡检完成后，必须详细记录巡检结果，包括检查项目、发现的问题、处理措施等。",
    words: [
      { w: "record", ipa: "/ˈrɛkɔːrd/", pos: "动词", cn: "记录", memory: "record = 记录/记载（动词时重音在第二音节）。\nrecord the results = 记录结果\nrecord the inspection = 记录巡检\nrecord the findings = 记录发现", phonics: "re 读 /rɪ/，cord 读 /kɔːrd/，重音在第二音节（动词）。", collocations: [["record the results", "记录结果"], ["record the inspection", "记录巡检"], ["record the findings", "记录发现"]], examples: [["Record the inspection results.", "记录巡检结果。"], ["Please record all findings.", "请记录所有发现。"]] },
      { w: "inspection results", ipa: "/ɪnˈspɛkʃən rɪˈzʌlts/", pos: "名词短语", cn: "巡检结果", memory: "inspection = 巡检/检查；results = 结果。\ninspection results = 巡检结果，包括检查项目、发现的问题、处理措施等。\ntest results = 测试结果\ninspection report = 巡检报告", phonics: "in 读 /ɪn/，spec 读 /spɛk/，tion 读 /ʃən/，results 读 /rɪˈzʌlts/。", collocations: [["inspection results", "巡检结果"], ["test results", "测试结果"], ["inspection report", "巡检报告"]], examples: [["Record the inspection results.", "记录巡检结果。"], ["Review the test results.", "查看测试结果。"]] },
    ],
    phrases: [
      { p: "record the inspection results", ipa: "/ˈrɛkɔːrd ðɪ ɪnˈspɛkʃən rɪˈzʌlts/", cn: "记录巡检结果", why: "record + the + inspection results = 记录巡检结果。消防系统巡检完成后，必须详细记录所有检查结果，这是交接班的重要文件。" },
    ],
    grammar: [
      { q: "record 作为动词和名词的发音有什么区别？", a: "record 作为动词 = /rɪˈkɔːrd/（重音在第二音节）\nrecord 作为名词 = /ˈrɛkərd/（重音在第一音节）\n✅ Please record the results.（请记录结果 → 动词，重音在 cord）\n✅ Check the maintenance records.（查看维护记录 → 名词，重音在 re）\n英语中很多动词和名词同形但重音不同。" },
    ],
    pattern: "Please record the + 检查/测试 + results",
    patternExamples: [
      { en: "Please record the test results.", cn: "请记录测试结果。", words: [{ w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "Please record the measurement results.", cn: "请记录测量结果。", words: [] },
      { en: "Please record the inspection findings.", cn: "请记录巡检发现。", words: [] },
    ],
    thinking: "消防系统巡检记录的内容：\n① 巡检时间和人员。\n② 检查项目清单（火灾报警控制器、探测器、灭火系统等）。\n③ 每个项目的检查结果（正常/异常）。\n④ 发现的问题及处理措施。\n⑤ 设备参数记录（钢瓶压力、管网压力等）。\n⑥ 巡检结论和建议。\n巡检记录是消防安全管理的重要文件，必须详细、准确。",
    pronunciation: "record 作为动词时，重音在第二音节 re-cord /rɪˈkɔːrd/。\ninspection 的 in 读 /ɪn/，spec 读 /spɛk/，重音在第二音节。\nresults 的 re 读 /rɪ/，sults 读 /zʌlts/。",
    quiz: [
      { q: "请记录测试结果，怎么说？", a: "Please record the test results." },
      { q: "消防系统巡检记录应包含哪些内容？", a: "消防系统巡检记录应包含：① 巡检时间和人员 ② 检查项目清单 ③ 每个项目的检查结果 ④ 发现的问题及处理措施 ⑤ 设备参数记录 ⑥ 巡检结论和建议。" },
    ],
  },
  {
    id: 1717,
    en: "Please update the fire system maintenance records.",
    cn: "请更新消防系统维护记录。",
    ipa: "/pliːz ˈʌpdeɪt ðə ˈfaɪər ˈsɪstəm ˈmeɪntənəns ˈrɛkərdz/",
    tags: ["第1717句", "更新维护记录", "★★★★★"],
    when: "消防系统维护工作完成后，必须及时更新维护记录，包括维护内容、更换部件、测试结果等。",
    words: [
      { w: "update", ipa: "/ˈʌpdeɪt/", pos: "动词", cn: "更新", memory: "up = 向上；date = 日期。\nupdate = 更新（使信息保持最新）。\nupdate the records = 更新记录\nupdate the system = 更新系统\nupdate the status = 更新状态", phonics: "up 读 /ʌp/，date 读 /deɪt/，重音在第一音节。", collocations: [["update the records", "更新记录"], ["update the system", "更新系统"], ["update the status", "更新状态"]], examples: [["Update the maintenance records.", "更新维护记录。"], ["Please update the status.", "请更新状态。"]] },
      { w: "maintenance records", ipa: "/ˈmeɪntənəns ˈrɛkərdz/", pos: "名词短语", cn: "维护记录", memory: "maintenance = 维护；records = 记录（名词时重音在第一音节）。\nmaintenance records = 维护记录，包括维护时间、内容、更换部件等。\nservice records = 服务记录\ninspection records = 巡检记录", phonics: "main 读 /meɪn/，te 读 /tə/，nance 读 /nəns/，records 读 /ˈrɛkərdz/。", collocations: [["maintenance records", "维护记录"], ["service records", "服务记录"], ["inspection records", "巡检记录"]], examples: [["Update the maintenance records.", "更新维护记录。"], ["Review the service records.", "查看服务记录。"]] },
    ],
    phrases: [
      { p: "update the maintenance records", ipa: "/ˈʌpdeɪt ðə ˈmeɪntənəns ˈrɛkərdz/", cn: "更新维护记录", why: "update + the + maintenance records = 更新维护记录。消防系统维护后必须及时更新记录，这是消防安全管理的重要环节。" },
    ],
    grammar: [
      { q: "update 和 record 有什么区别？", a: "update = 更新（使已有信息保持最新）\nrecord = 记录（创建新的记录）\n✅ Please update the maintenance records.（请更新维护记录 → 在已有记录中添加新信息）\n✅ Please record the inspection results.（请记录巡检结果 → 创建新的记录）\n维护后更新记录，巡检后记录结果。" },
    ],
    pattern: "Please update the + 系统/设备 + maintenance records",
    patternExamples: [
      { en: "Please update the HVAC maintenance records.", cn: "请更新暖通维护记录。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "hvac", ipa: "/ˌeɪtʃˈviːˈeɪˈsiː/", cn: "暖通", phonics: "H-V-A-C 逐字母读" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "Please update the generator maintenance records.", cn: "请更新发电机维护记录。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "Please update the UPS maintenance records.", cn: "请更新UPS维护记录。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
    ],
    thinking: "消防系统维护记录更新的内容：\n① 维护时间和人员。\n② 维护内容（检查、清洁、更换部件等）。\n③ 更换的部件（探测器、钢瓶、阀门等）。\n④ 测试结果（功能测试、压力测试等）。\n⑤ 发现的问题及处理措施。\n⑥ 下次维护计划。\n维护记录是消防安全管理的重要文件，必须及时更新。",
    pronunciation: "update 的 up 读 /ʌp/，date 读 /deɪt/，重音在第一音节。\nmaintenance 的 main 读 /meɪn/，te 读 /tə/，nance 读 /nəns/。\nrecords 作为名词时，重音在第一音节 /ˈrɛkərdz/。",
    quiz: [
      { q: "请更新暖通维护记录，怎么说？", a: "Please update the HVAC maintenance records." },
    ],
  },
  {
    id: 1718,
    en: "The fire protection inspection has been completed successfully.",
    cn: "消防巡检已经顺利完成。",
    ipa: "/ðə ˈfaɪər prəˈtɛkʃən ɪnˈspɛkʃən hæz biːn kəmˈpliːtɪd səkˈsɛsfəli/",
    tags: ["第1718句", "巡检完成", "★★★★★"],
    when: "消防系统巡检工作已经全部完成，包括所有检查项目、问题处理、结果记录等。",
    words: [
      { w: "fire protection inspection", ipa: "/ˈfaɪər prəˈtɛkʃən ɪnˈspɛkʃən/", pos: "名词短语", cn: "消防巡检", memory: "fire protection = 消防/防火；inspection = 巡检。\nfire protection inspection = 消防巡检，对消防系统进行全面检查。\nfire protection system = 消防系统\nfire safety inspection = 消防安全检查", phonics: "fire 读 /ˈfaɪər/，pro 读 /prə/，tec 读 /tɛk/，tion 读 /ʃən/，in 读 /ɪn/，spec 读 /spɛk/，tion 读 /ʃən/。", collocations: [["fire protection inspection", "消防巡检"], ["fire safety inspection", "消防安全检查"], ["system inspection", "系统巡检"]], examples: [["The inspection is complete.", "巡检已完成。"], ["Schedule a fire inspection.", "安排消防巡检。"]] },
      { w: "completed successfully", ipa: "/kəmˈpliːtɪd səkˈsɛsfəli/", pos: "动词短语", cn: "顺利完成", memory: "complete = 完成；-ed = 过去分词；successfully = 成功地。\ncompleted successfully = 顺利完成/成功完成。\ntask completed = 任务完成\ninspection completed = 巡检完成", phonics: "com 读 /kəm/，plete 读 /pliːt/，suc 读 /sək/，cess 读 /sɛs/，ful 读 /fəl/，ly 读 /li/。", collocations: [["completed successfully", "顺利完成"], ["task completed", "任务完成"], ["inspection completed", "巡检完成"]], examples: [["The task was completed successfully.", "任务顺利完成。"], ["The inspection has been completed.", "巡检已完成。"]] },
    ],
    phrases: [
      { p: "fire protection inspection has been completed", ipa: "/ˈfaɪər prəˈtɛkʃən ɪnˈspɛkʃən hæz biːn kəmˈpliːtɪd/", cn: "消防巡检已完成", why: "fire protection inspection + has been completed = 消防巡检已完成。这表示所有巡检项目已检查完毕，结果已记录，可以交接。" },
    ],
    grammar: [
      { q: "has been completed 和 is completed 有什么区别？", a: "has been completed = 已完成（现在完成时，强调动作已完成）\nis completed = 已完成（一般现在时，描述当前状态）\n✅ The inspection has been completed successfully.（巡检已顺利完成 → 强调动作已完成）\n✅ The inspection is completed.（巡检已完成 → 描述当前状态）\n交接时用现在完成时，强调'已经完成'。" },
    ],
    pattern: "巡检/任务 + has been completed successfully",
    patternExamples: [
      { en: "The system inspection has been completed successfully.", cn: "系统巡检已顺利完成。", words: [{ w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "The maintenance task has been completed successfully.", cn: "维护任务已顺利完成。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "The safety check has been completed successfully.", cn: "安全检查已顺利完成。", words: [{ w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }, { w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "消防巡检完成的确认要点：\n① 所有检查项目已完成（火灾报警、探测器、灭火系统、消防泵等）。\n② 发现的问题已处理或记录。\n③ 巡检结果已详细记录。\n④ 维护记录已更新。\n⑤ 系统状态已确认正常。\n⑥ 可以向下一班次交接。\n巡检完成是交接班的前提条件。",
    pronunciation: "fire protection 的 fire 读 /ˈfaɪər/，pro 读 /prə/，tec 读 /tɛk/。\ninspection 的 in 读 /ɪn/，spec 读 /spɛk/，重音在第二音节。\ncompleted 的 com 读 /kəm/，plete 读 /pliːt/，重音在第二音节。",
    quiz: [
      { q: "系统巡检已顺利完成，怎么说？", a: "The system inspection has been completed successfully." },
    ],
  },
  {
    id: 1719,
    en: "The fire protection system is ready for normal operation.",
    cn: "消防系统已经恢复正常运行。",
    ipa: "/ðə ˈfaɪər prəˈtɛkʃən ˈsɪstəm ɪz ˈrɛdi fɔːr ˈnɔːrməl ˌɒpəˈreɪʃən/",
    tags: ["第1719句", "系统恢复正常", "★★★★★"],
    when: "消防系统巡检和维护完成后，系统已经恢复到正常运行状态，可以正常工作。",
    words: [
      { w: "ready for", ipa: "/ˈrɛdi fɔːr/", pos: "形容词短语", cn: "准备好；可以", memory: "ready = 准备好的；for = 为了。\nready for = 准备好/可以。\nready for operation = 可以运行\nready for use = 可以使用", phonics: "ready 读 /ˈrɛdi/，for 读 /fɔːr/。", collocations: [["ready for operation", "可以运行"], ["ready for use", "可以使用"], ["ready for service", "可以服务"]], examples: [["The system is ready for operation.", "系统可以运行。"], ["The equipment is ready for use.", "设备可以使用。"]] },
      { w: "normal operation", ipa: "/ˈnɔːrməl ˌɒpəˈreɪʃən/", pos: "名词短语", cn: "正常运行", memory: "normal = 正常的；operation = 运行/操作。\nnormal operation = 正常运行/正常操作。\nresume normal operation = 恢复正常运行\nreturn to normal operation = 恢复正常运行", phonics: "nor 读 /nɔːr/，mal 读 /məl/，op 读 /ɒp/，er 读 /ə/，a 读 /eɪ/，tion 读 /ʃən/。", collocations: [["normal operation", "正常运行"], ["resume normal operation", "恢复正常运行"], ["return to normal operation", "恢复正常运行"]], examples: [["Resume normal operation.", "恢复正常运行。"], ["The system is in normal operation.", "系统处于正常运行状态。"]] },
    ],
    phrases: [
      { p: "ready for normal operation", ipa: "/ˈrɛdi fɔːr ˈnɔːrməl ˌɒpəˈreɪʃən/", cn: "可以正常运行", why: "ready + for + normal operation = 可以正常运行。这表示消防系统已经恢复到正常状态，所有功能正常，可以正常工作。" },
    ],
    grammar: [
      { q: "is ready for 和 can 有什么区别？", a: "is ready for = 准备好/可以（强调已经准备好）\ncan = 能够/可以（强调有能力）\n✅ The system is ready for normal operation.（系统可以正常运行 → 已经准备好）\n✅ The system can operate normally.（系统能够正常运行 → 有能力）\n交接时用 is ready for，强调'已经准备好，可以交接'。" },
    ],
    pattern: "系统/设备 + is ready for normal operation",
    patternExamples: [
      { en: "The HVAC system is ready for normal operation.", cn: "暖通系统可以正常运行。", words: [{ w: "hvac", ipa: "/ˌeɪtʃˈviːˈeɪˈsiː/", cn: "暖通", phonics: "H-V-A-C 逐字母读" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The generator is ready for normal operation.", cn: "发电机可以正常运行。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }, { w: "operation", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }] },
      { en: "The cooling system is ready for normal operation.", cn: "冷却系统可以正常运行。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "消防系统恢复正常运行的确认要点：\n① 所有巡检项目已完成。\n② 所有维护工作已完成。\n③ 所有告警已恢复。\n④ 所有设备参数正常。\n⑤ 系统处于自动模式。\n⑥ 可以向下一班次交接。\n只有所有条件都满足，才能说 ready for normal operation。",
    pronunciation: "ready 的 read 读 /rɛd/，y 读 /i/。\noperation 的 op 读 /ɒp/，er 读 /ə/，a 读 /eɪ/，tion 读 /ʃən/，重音在 a 上。",
    quiz: [
      { q: "暖通系统可以正常运行，怎么说？", a: "The HVAC system is ready for normal operation." },
    ],
  },
  {
    id: 1720,
    en: "There are no outstanding fire protection issues.",
    cn: "目前没有未解决的消防问题。",
    ipa: "/ðɛr ɑːr noʊ aʊtˈstændɪŋ ˈfaɪər prəˈtɛkʃən ˈɪʃuːz/",
    tags: ["第1720句", "无未解决问题", "★★★★★"],
    when: "交接班时确认目前没有未解决的消防问题，所有问题已处理完毕，可以安全交接。",
    words: [
      { w: "outstanding", ipa: "/aʊtˈstændɪŋ/", pos: "形容词", cn: "未解决的；待处理的", memory: "out = 外；stand = 站；-ing = 形容词后缀。\noutstanding = 未解决的/待处理的（问题悬而未决）。\noutstanding issues = 未解决的问题\noutstanding tasks = 待处理的任务", phonics: "out 读 /aʊt/，stand 读 /stænd/，ing 读 /ɪŋ/，重音在第二音节。", collocations: [["outstanding issues", "未解决的问题"], ["outstanding tasks", "待处理的任务"], ["outstanding problems", "未解决的问题"]], examples: [["No outstanding issues.", "无未解决的问题。"], ["Check for outstanding tasks.", "检查待处理的任务。"]] },
      { w: "issues", ipa: "/ˈɪʃuːz/", pos: "名词复数", cn: "问题；事项", memory: "issue = 问题/事项；-s = 复数。\nissues = 问题/事项。\nfire protection issues = 消防问题\ntechnical issues = 技术问题\nsafety issues = 安全问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/，s 读 /z/。", collocations: [["fire protection issues", "消防问题"], ["technical issues", "技术问题"], ["safety issues", "安全问题"]], examples: [["No outstanding issues.", "无未解决的问题。"], ["Resolve all issues.", "解决所有问题。"]] },
    ],
    phrases: [
      { p: "no outstanding fire protection issues", ipa: "/noʊ aʊtˈstændɪŋ ˈfaɪər prəˈtɛkʃən ˈɪʃuːz/", cn: "无未解决的消防问题", why: "no + outstanding + fire protection issues = 无未解决的消防问题。这是交接班时的重要确认，表示所有消防问题已处理完毕，可以安全交接。" },
    ],
    grammar: [
      { q: "There are no 和 We have no 有什么区别？", a: "There are no = 没有（客观描述，强调不存在）\nWe have no = 我们没有（主观描述，强调我们没有）\n✅ There are no outstanding issues.（没有未解决的问题 → 客观描述）\n✅ We have no outstanding issues.（我们没有未解决的问题 → 主观描述）\n交接时用 There are no 更客观。" },
    ],
    pattern: "There are no outstanding + 问题类型",
    patternExamples: [
      { en: "There are no outstanding technical issues.", cn: "没有未解决的技术问题。", words: [{ w: "issues", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
      { en: "There are no outstanding safety issues.", cn: "没有未解决的安全问题。", words: [{ w: "safety", ipa: "/ˈseɪfti/", cn: "安全", phonics: "safe 读 /seɪf/，ty 读 /ti/" }, { w: "issues", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
      { en: "There are no outstanding maintenance tasks.", cn: "没有待处理的维护任务。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
    ],
    thinking: "交接班时确认无未解决问题的要点：\n① 所有消防告警已恢复。\n② 所有巡检项目已完成。\n③ 所有维护工作已完成。\n④ 所有发现的问题已处理或记录。\n⑤ 所有设备状态正常。\n⑥ 所有记录已更新。\n只有所有条件都满足，才能说 no outstanding issues，可以安全交接。",
    pronunciation: "outstanding 的 out 读 /aʊt/，stand 读 /stænd/，重音在第二音节。\nissues 的 is 读 /ɪ/，sue 读 /ʃuː/，s 读 /z/。",
    quiz: [
      { q: "没有未解决的技术问题，怎么说？", a: "There are no outstanding technical issues." },
      { q: "交接班时确认无未解决问题的要点有哪些？", a: "交接班时确认无未解决问题的要点：① 所有消防告警已恢复 ② 所有巡检项目已完成 ③ 所有维护工作已完成 ④ 所有发现的问题已处理或记录 ⑤ 所有设备状态正常 ⑥ 所有记录已更新。" },
    ],
  },
];

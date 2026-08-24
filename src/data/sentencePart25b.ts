// EXPORTS: MOCK_SENTENCES_PART25B

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART25B: ISentence[] = [
  // ── 场景001：冷冻水泵、冷却水泵 - 切换 (1661-1670) ──
  {
    id: 1661,
    en: "Please start the standby chilled water pump.",
    cn: "请启动备用冷冻水泵。",
    ipa: "/pliːz stɑːrt ðə ˈstændbaɪ tʃɪld ˈwɔːtər pʌmp/",
    tags: ["第1661句", "启动备用泵", "★★★★★"],
    when: "水泵切换操作的第一步：启动备用冷冻水泵。standby pump 是处于备用状态的设备，随时可以投入运行。",
    words: [
      { w: "start", ipa: "/stɑːrt/", pos: "动词", cn: "启动；开始", memory: "start = 启动/开始。\nstart the pump = 启动水泵\nstart the generator = 启动发电机\nstart the engine = 启动引擎", phonics: "start 读 /stɑːrt/，ar 发 /ɑːr/ 音。", collocations: [["start the pump", "启动水泵"], ["start the generator", "启动发电机"], ["start operation", "开始操作"]], examples: [["Please start Pump No.2.", "请启动2号水泵。"], ["The generator started automatically.", "发电机自动启动了。"]] },
      { w: "standby", ipa: "/ˈstændbaɪ/", pos: "形容词/名词", cn: "备用的；备用状态", memory: "stand = 站立；by = 旁边。\nstandby = 备用/待命，指随时可以投入运行的设备。\non standby = 处于备用状态\nstandby mode = 备用模式", phonics: "stand 读 /stænd/，by 读 /baɪ/，重音在第一音节。", collocations: [["standby pump", "备用水泵"], ["standby generator", "备用发电机"], ["on standby", "处于备用状态"]], examples: [["The standby unit is ready.", "备用设备已就绪。"], ["Switch to standby mode.", "切换到备用模式。"]] },
    ],
    phrases: [
      { p: "standby chilled water pump", ipa: "/ˈstændbaɪ tʃɪld ˈwɔːtər pʌmp/", cn: "备用冷冻水泵", why: "standby + chilled + water + pump = 备用冷冻水泵。备用泵在主泵故障或维护时投入运行，确保冷冻水系统持续供应。" },
    ],
    grammar: [
      { q: "start 和 turn on 有什么区别？", a: "start = 启动（使设备开始运转，强调从停止到运行的过程）\nturn on = 打开（接通电源或开关，强调通电）\n✅ Please start the standby pump.（请启动备用水泵 → 使水泵开始运转）\n✅ Please turn on the light.（请打开灯 → 接通电源）\n水泵用 start，因为需要启动电机驱动叶轮旋转。" },
    ],
    pattern: "Please start the standby + 设备",
    patternExamples: [
      { en: "Please start the standby generator.", cn: "请启动备用发电机。", words: [{ w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "Please start the standby cooling tower.", cn: "请启动备用冷却塔。", words: [{ w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }, { w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }] },
      { en: "Please start the standby chiller.", cn: "请启动备用冷水机组。", words: [{ w: "start", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }, { w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }] },
    ],
    thinking: "启动备用水泵是切换操作的第一步。切换流程：\n① 启动备用泵（本句）→ ② 确认备用泵运行正常 → ③ 停止主泵 → ④ 转移负载 → ⑤ 确认系统稳定\n启动备用泵前需确认：电源正常、阀门位置正确、入口水位正常。",
    pronunciation: "standby 重音在 stand /ˈstænd/ 上，不是 by。\nchilled 的 ch 读 /tʃ/，不是 /k/。",
    quiz: [
      { q: "请启动备用发电机，怎么说？", a: "Please start the standby generator." },
      { q: "启动备用水泵前需要检查什么？", a: "启动前需确认：① 电源供应正常 ② 入口阀门开启 ③ 出口阀门位置正确 ④ 水泵灌泵完成 ⑤ 控制系统无告警 ⑥ 轴承润滑油充足。" },
    ],
  },
  {
    id: 1662,
    en: "The standby pump has started successfully.",
    cn: "备用水泵启动成功。",
    ipa: "/ðə ˈstændbaɪ pʌmp hæz ˈstɑːrtɪd səkˈsɛsfəli/",
    tags: ["第1662句", "启动成功", "★★★★★"],
    when: "确认备用水泵已经成功启动并运行正常。这是切换操作的关键确认点。",
    words: [
      { w: "successfully", ipa: "/səkˈsɛsfəli/", pos: "副词", cn: "成功地", memory: "success = 成功；-ful = 形容词后缀；-ly = 副词后缀。\nsuccessfully = 成功地。\nhas started successfully = 已成功启动", phonics: "suc 读 /sək/，cess 读 /sɛs/，ful 读 /fəl/，ly 读 /li/。重音在 cess。", collocations: [["started successfully", "启动成功"], ["completed successfully", "顺利完成"], ["operating successfully", "成功运行"]], examples: [["The test was completed successfully.", "测试已成功完成。"], ["The system is running successfully.", "系统正在成功运行。"]] },
    ],
    phrases: [
      { p: "has started successfully", ipa: "/hæz ˈstɑːrtɪd səkˈsɛsfəli/", cn: "已经成功启动", why: "has + started + successfully = 已经成功启动。现在完成时表示启动动作已经完成，successfully 强调启动过程顺利无误。" },
    ],
    grammar: [
      { q: "has started 和 started 有什么区别？", a: "has started = 已经启动（现在完成时，强调动作已完成且结果持续）\nstarted = 启动了（一般过去时，描述过去发生的动作）\n✅ The pump has started successfully.（水泵已经成功启动 → 现在处于运行状态）\n✅ The pump started at 10:00.（水泵在10点启动了 → 描述过去的时间点）\n交接时用 has started，强调'当前的运行状态'。" },
    ],
    pattern: "The + 设备 + has started successfully",
    patternExamples: [
      { en: "The standby generator has started successfully.", cn: "备用发电机已成功启动。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "started", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "The cooling tower has started successfully.", cn: "冷却塔已成功启动。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "started", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "The chiller has started successfully.", cn: "冷水机组已成功启动。", words: [{ w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }, { w: "started", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
    ],
    thinking: "备用泵启动成功后的确认要点：\n① 电机运行声音正常\n② 出口压力建立\n③ 水流量开始流动\n④ 无异常振动或噪音\n⑤ 控制柜指示正常\n确认启动成功后，才能进行下一步停止主泵。",
    pronunciation: "successfully 的重音在第二个音节 cess /sɛs/ 上。\n不要读成 suc-CESS-ful-ly。",
    quiz: [
      { q: "备用发电机启动成功，怎么说？", a: "The standby generator has started successfully." },
    ],
  },
  {
    id: 1663,
    en: "Please stop Pump No.1.",
    cn: "请停止1号水泵。",
    ipa: "/pliːz stɒp pʌmp ˌnʌmˈwʌn/",
    tags: ["第1663句", "停止水泵", "★★★★★"],
    when: "水泵切换操作的第三步：停止原运行的1号水泵。必须在确认备用泵已启动并带载后才能停止主泵。",
    words: [
      { w: "stop", ipa: "/stɒp/", pos: "动词", cn: "停止", memory: "stop = 停止/停下。\nstop the pump = 停止水泵\nstop the generator = 停止发电机\nstop operation = 停止操作", phonics: "stop 读 /stɒp/，o 发 /ɒ/ 音。", collocations: [["stop the pump", "停止水泵"], ["emergency stop", "紧急停止"], ["stop operation", "停止操作"]], examples: [["Please stop the running pump.", "请停止运行中的水泵。"], ["Emergency stop button is pressed.", "紧急停止按钮已按下。"]] },
    ],
    phrases: [
      { p: "stop Pump No.1", ipa: "/stɒp pʌmp ˌnʌmˈwʌn/", cn: "停止1号水泵", why: "stop + Pump + No.1 = 停止1号水泵。这是切换操作的标准指令，明确指定要停止的设备编号。" },
    ],
    grammar: [
      { q: "stop 和 shut down 有什么区别？", a: "stop = 停止（使设备停止运转，可以是正常停止或紧急停止）\nshut down = 关闭/停机（按程序有序停止设备）\n✅ Please stop Pump No.1.（请停止1号水泵 → 正常停止）\n✅ Please shut down the chiller.（请关闭冷水机组 → 按程序停机）\n水泵切换用 stop，因为操作简单直接。" },
    ],
    pattern: "Please stop + 设备编号",
    patternExamples: [
      { en: "Please stop Generator No.2.", cn: "请停止2号发电机。", words: [{ w: "stop", ipa: "/stɒp/", cn: "停止", phonics: "stop 读 /stɒp/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "Please stop Chiller No.1.", cn: "请停止1号冷水机组。", words: [{ w: "stop", ipa: "/stɒp/", cn: "停止", phonics: "stop 读 /stɒp/" }, { w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }] },
      { en: "Please stop Cooling Tower No.2.", cn: "请停止2号冷却塔。", words: [{ w: "stop", ipa: "/stɒp/", cn: "停止", phonics: "stop 读 /stɒp/" }, { w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }] },
    ],
    thinking: "停止主泵的前提条件：\n① 备用泵已启动并运行正常\n② 备用泵已建立出口压力\n③ 系统水流量稳定\n④ 无活动告警\n停止主泵后需立即检查：系统压力是否稳定、流量是否正常、是否有告警。",
    pronunciation: "stop 的 o 读 /ɒ/，不是 /oʊ/。\nPump No.1 读作 pump number one。",
    quiz: [
      { q: "请停止2号发电机，怎么说？", a: "Please stop Generator No.2." },
      { q: "停止主泵前必须确认什么？", a: "停止主泵前必须确认：① 备用泵已启动并运行正常 ② 备用泵已建立出口压力 ③ 系统水流量稳定 ④ 无活动告警 ⑤ 控制系统正常。" },
    ],
  },
  {
    id: 1664,
    en: "Pump No.1 has stopped successfully.",
    cn: "1号水泵已经成功停止。",
    ipa: "/pʌmp ˌnʌmˈwʌn hæz stɒpt səkˈsɛsfəli/",
    tags: ["第1664句", "停止成功", "★★★★★"],
    when: "确认1号水泵已经成功停止。这是切换操作的重要确认点，确保原主泵已完全停机。",
    words: [
      { w: "stopped", ipa: "/stɒpt/", pos: "动词过去分词", cn: "已停止", memory: "stop = 停止；-ed = 过去分词后缀。\nstopped = 已停止。\nhas stopped = 已经停止\nstop 的过去分词需要双写 p 再加 ed。", phonics: "stop 读 /stɒp/，ped 读 /pt/。", collocations: [["has stopped", "已经停止"], ["stopped successfully", "成功停止"], ["motor stopped", "电机已停止"]], examples: [["The motor has stopped.", "电机已经停止。"], ["Pump No.2 stopped at 14:00.", "2号水泵在14点停止了。"]] },
    ],
    phrases: [
      { p: "has stopped successfully", ipa: "/hæz stɒpt səkˈsɛsfəli/", cn: "已经成功停止", why: "has + stopped + successfully = 已经成功停止。现在完成时表示停止动作已经完成，successfully 强调停止过程正常无误。" },
    ],
    grammar: [
      { q: "has stopped 和 is stopped 有什么区别？", a: "has stopped = 已经停止（现在完成时，强调动作已完成）\nis stopped = 处于停止状态（被动语态，描述当前状态）\n✅ Pump No.1 has stopped successfully.（1号水泵已经成功停止 → 停止动作完成）\n✅ Pump No.1 is stopped.（1号水泵处于停止状态 → 描述当前状态）\n交接时用 has stopped，强调'停止动作已完成'。" },
    ],
    pattern: "设备 + No.X + has stopped successfully",
    patternExamples: [
      { en: "Generator No.1 has stopped successfully.", cn: "1号发电机已成功停止。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "Chiller No.2 has stopped successfully.", cn: "2号冷水机组已成功停止。", words: [{ w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }] },
      { en: "Cooling Tower No.1 has stopped successfully.", cn: "1号冷却塔已成功停止。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }] },
    ],
    thinking: "主泵停止后的确认要点：\n① 电机完全停止转动\n② 出口压力降为零\n③ 控制柜指示停止状态\n④ 无异常声音\n⑤ 备用泵继续正常运行\n确认主泵停止后，系统应完全由备用泵承担负载。",
    pronunciation: "stopped 的 ed 读 /t/，不是 /ɪd/。\nsuccessfully 的重音在 cess /sɛs/ 上。",
    quiz: [
      { q: "1号发电机已成功停止，怎么说？", a: "Generator No.1 has stopped successfully." },
    ],
  },
  {
    id: 1665,
    en: "Please transfer the load to Pump No.2.",
    cn: "请将负载切换到2号水泵。",
    ipa: "/pliːz trænsˈfɜːr ðə loʊd tuː pʌmp ˌnʌmˈtuː/",
    tags: ["第1665句", "负载切换", "★★★★★"],
    when: "水泵切换操作的关键步骤：将系统负载从原主泵转移到备用泵。transfer 指将负载从一个设备转移到另一个设备。",
    words: [
      { w: "transfer", ipa: "/trænsˈfɜːr/", pos: "动词", cn: "转移；切换", memory: "trans = 跨越/转移；fer = 携带。\ntransfer = 转移/切换，指将一个东西从一个地方移到另一个地方。\ntransfer the load = 切换负载\ntransfer control = 转移控制权", phonics: "trans 读 /træns/，fer 读 /fɜːr/，重音在 fer。", collocations: [["transfer the load", "切换负载"], ["load transfer", "负载切换"], ["automatic transfer", "自动切换"]], examples: [["Please transfer the load to the standby unit.", "请将负载切换到备用设备。"], ["The load transfer is complete.", "负载切换已完成。"]] },
      { w: "load", ipa: "/loʊd/", pos: "名词", cn: "负载；负荷", memory: "load = 负载/负荷，指设备承担的工作量。\n水泵的负载 = 水流量 × 扬程\n发电机的负载 = 输出功率\n变压器的负载 = 电流 × 电压", phonics: "load 读 /loʊd/，oa 发 /oʊ/ 音。", collocations: [["transfer the load", "切换负载"], ["load capacity", "负载能力"], ["full load", "满载"]], examples: [["The pump is at full load.", "水泵处于满载状态。"], ["Check the load capacity.", "检查负载能力。"]] },
    ],
    phrases: [
      { p: "transfer the load to", ipa: "/trænsˈfɜːr ðə loʊd tuː/", cn: "将负载切换到", why: "transfer + the + load + to = 将负载切换到。这是切换操作的核心指令，明确负载的转移方向。" },
    ],
    grammar: [
      { q: "transfer 和 switch 有什么区别？", a: "transfer = 转移（将一个东西从一个地方移到另一个地方）\nswitch = 切换（在两个选项之间转换）\n✅ Please transfer the load to Pump No.2.（请将负载切换到2号水泵 → 负载从1号转移到2号）\n✅ Please switch to the standby pump.（请切换到备用水泵 → 从主泵切换到备用泵）\ntransfer 强调'转移过程'，switch 强调'切换动作'。" },
    ],
    pattern: "Please transfer the load to + 设备",
    patternExamples: [
      { en: "Please transfer the load to Generator No.2.", cn: "请将负载切换到2号发电机。", words: [{ w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "Please transfer the load to the UPS.", cn: "请将负载切换到UPS。", words: [{ w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }] },
      { en: "Please transfer the load to the standby chiller.", cn: "请将负载切换到备用冷水机组。", words: [{ w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }, { w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }] },
    ],
    thinking: "负载切换是切换操作的核心。切换方式：\n① 手动切换：操作人员手动操作阀门和控制按钮\n② 自动切换：控制系统自动完成负载转移\n数据中心通常采用自动切换，确保切换过程快速无缝，不影响系统运行。",
    pronunciation: "transfer 的重音在第二音节 fer /fɜːr/ 上。\nload 的 oa 读 /oʊ/，不是 /ɒ/。",
    quiz: [
      { q: "请将负载切换到2号发电机，怎么说？", a: "Please transfer the load to Generator No.2." },
      { q: "数据中心为什么采用自动负载切换？", a: "自动负载切换的优势：① 切换速度快（毫秒级）② 无缝切换，不影响系统运行 ③ 减少人为操作失误 ④ 可预设切换逻辑 ⑤ 提高系统可靠性。" },
    ],
  },
  {
    id: 1666,
    en: "The load transfer has been completed successfully.",
    cn: "负载切换已经成功完成。",
    ipa: "/ðə loʊd trænsˈfɜːr hæz biːn kəmˈpliːtɪd səkˈsɛsfəli/",
    tags: ["第1666句", "切换完成", "★★★★★"],
    when: "确认负载切换已经成功完成。这是切换操作的重要里程碑，表明系统已完全由备用设备承担负载。",
    words: [
      { w: "completed", ipa: "/kəmˈpliːtɪd/", pos: "动词过去分词", cn: "已完成", memory: "complete = 完成；-ed = 过去分词后缀。\ncompleted = 已完成。\nhas been completed = 已经完成（被动语态）", phonics: "com 读 /kəm/，plete 读 /pliːt/，d 读 /ɪd/。重音在 plete。", collocations: [["completed successfully", "顺利完成"], ["task completed", "任务完成"], ["operation completed", "操作完成"]], examples: [["The maintenance is completed.", "维护已完成。"], ["The test has been completed.", "测试已经完成。"]] },
    ],
    phrases: [
      { p: "load transfer has been completed", ipa: "/loʊd trænsˈfɜːr hæz biːn kəmˈpliːtɪd/", cn: "负载切换已经完成", why: "load + transfer + has + been + completed = 负载切换已经完成。现在完成时被动语态，强调切换动作已经完成且结果持续。" },
    ],
    grammar: [
      { q: "has been completed 和 has completed 有什么区别？", a: "has been completed = 已经被完成（现在完成时被动语态，强调动作被完成）\nhas completed = 已经完成（现在完成时主动语态，主语是执行者）\n✅ The load transfer has been completed.（负载切换已经完成 → 切换被完成）\n✅ The operator has completed the transfer.（操作员已经完成了切换 → 操作员执行了切换）\n交接时用被动语态，关注'切换动作已完成'这个结果。" },
    ],
    pattern: "The + 操作 + has been completed successfully",
    patternExamples: [
      { en: "The pump switching has been completed successfully.", cn: "水泵切换已成功完成。", words: [{ w: "pump", ipa: "/pʌmp/", cn: "泵", phonics: "pump 读 /pʌmp/" }, { w: "switching", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "The maintenance has been completed successfully.", cn: "维护已成功完成。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "The inspection has been completed successfully.", cn: "巡检已成功完成。", words: [] },
    ],
    thinking: "负载切换完成后的确认要点：\n① 备用泵承担全部负载\n② 系统压力稳定\n③ 水流量正常\n④ 无异常振动或噪音\n⑤ 控制系统指示正常\n⑥ 无活动告警\n负载切换完成标志着切换操作的核心步骤已完成。",
    pronunciation: "completed 的重音在 plete /pliːt/ 上。\nsuccessfully 的重音在 cess /sɛs/ 上。",
    quiz: [
      { q: "水泵切换已成功完成，怎么说？", a: "The pump switching has been completed successfully." },
    ],
  },
  {
    id: 1667,
    en: "Please verify that the standby pump is carrying the load.",
    cn: "请确认备用水泵已经带载运行。",
    ipa: "/pliːz ˈvɛrɪfaɪ ðæt ðə ˈstændbaɪ pʌmp ɪz ˈkæriɪŋ ðə loʊd/",
    tags: ["第1667句", "确认带载", "★★★★★"],
    when: "确认备用水泵已经承担系统负载。verify 强调通过检查或测试来确认某个状态。",
    words: [
      { w: "verify", ipa: "/ˈvɛrɪfaɪ/", pos: "动词", cn: "确认；核实", memory: "veri = 真实；-fy = 使成为。\nverify = 确认/核实，通过检查或测试来确认某个事实。\nverify the status = 确认状态\nverify the operation = 确认操作", phonics: "ver 读 /vɛr/，i 读 /ɪ/，fy 读 /faɪ/。重音在 ver。", collocations: [["verify the status", "确认状态"], ["verify the operation", "确认操作"], ["verify the result", "核实结果"]], examples: [["Please verify the pump status.", "请确认水泵状态。"], ["Verify that the valve is open.", "确认阀门已打开。"]] },
      { w: "carrying", ipa: "/ˈkæriɪŋ/", pos: "动词现在分词", cn: "承担；携带", memory: "carry = 承担/携带；-ing = 现在分词后缀。\ncarrying the load = 承担负载\n水泵承担负载 = 水泵正在推动水流", phonics: "car 读 /kær/，ry 读 /ri/，ing 读 /ɪŋ/。重音在 car。", collocations: [["carrying the load", "承担负载"], ["carrying capacity", "承载能力"], ["load carrying", "负载承担"]], examples: [["The pump is carrying full load.", "水泵正在承担满载。"], ["Check the carrying capacity.", "检查承载能力。"]] },
    ],
    phrases: [
      { p: "verify that the standby pump is carrying the load", ipa: "/ˈvɛrɪfaɪ ðæt ðə ˈstændbaɪ pʌmp ɪz ˈkæriɪŋ ðə loʊd/", cn: "确认备用水泵已经带载运行", why: "verify + that + the + standby + pump + is + carrying + the + load = 确认备用水泵已经带载运行。这是切换操作的关键确认点。" },
    ],
    grammar: [
      { q: "verify 和 confirm 有什么区别？", a: "verify = 确认/核实（通过检查或测试来确认事实）\nconfirm = 确认（通过信息或证据来确认事实）\n✅ Please verify that the pump is carrying the load.（请确认水泵已经带载 → 通过检查确认）\n✅ Please confirm the switching is complete.（请确认切换已完成 → 通过信息确认）\nverify 更强调'实地检查'，confirm 更强调'信息确认'。" },
    ],
    pattern: "Please verify that + 设备 + is + 状态",
    patternExamples: [
      { en: "Please verify that the generator is running.", cn: "请确认发电机正在运行。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }] },
      { en: "Please verify that the valve is open.", cn: "请确认阀门已打开。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "valve", ipa: "/vælv/", cn: "阀门", phonics: "valve 读 /vælv/" }] },
      { en: "Please verify that the alarm is cleared.", cn: "请确认告警已恢复。", words: [{ w: "verify", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
    ],
    thinking: "确认备用泵带载运行的检查要点：\n① 出口压力稳定在正常范围\n② 水流量达到设计要求\n③ 电机电流正常\n④ 无异常振动或噪音\n⑤ 控制系统显示正常\n确认带载运行是切换操作完成前的最后验证。",
    pronunciation: "verify 的重音在 ver /vɛr/ 上。\ncarrying 的 ar 读 /ær/，不是 /ɑːr/。",
    quiz: [
      { q: "请确认发电机正在运行，怎么说？", a: "Please verify that the generator is running." },
      { q: "确认备用泵带载运行需要检查哪些参数？", a: "需要检查：① 出口压力 ② 水流量 ③ 电机电流 ④ 电机温度 ⑤ 振动情况 ⑥ 噪音水平 ⑦ 控制系统指示。所有参数正常才能确认带载运行。" },
    ],
  },
  {
    id: 1668,
    en: "The pump switching operation has been completed successfully.",
    cn: "水泵切换操作已经顺利完成。",
    ipa: "/ðə pʌmp ˈswɪtʃɪŋ ˌɒpəˈreɪʃən hæz biːn kəmˈpliːtɪd səkˈsɛsfəli/",
    tags: ["第1668句", "切换操作完成", "★★★★★"],
    when: "宣布水泵切换操作已经顺利完成。这是切换操作的总结性陈述，标志着整个切换流程的结束。",
    words: [
      { w: "switching", ipa: "/ˈswɪtʃɪŋ/", pos: "名词/动名词", cn: "切换", memory: "switch = 切换；-ing = 动名词后缀。\nswitching = 切换操作。\npump switching = 水泵切换\nload switching = 负载切换", phonics: "switch 读 /swɪtʃ/，ing 读 /ɪŋ/。", collocations: [["pump switching", "水泵切换"], ["switching operation", "切换操作"], ["automatic switching", "自动切换"]], examples: [["The switching is complete.", "切换已完成。"], ["Start the switching operation.", "开始切换操作。"]] },
      { w: "operation", ipa: "/ˌɒpəˈreɪʃən/", pos: "名词", cn: "操作；运行", memory: "operate = 操作/运行；-ion = 名词后缀。\noperation = 操作/运行。\nswitching operation = 切换操作\nnormal operation = 正常运行", phonics: "op 读 /ɒp/，er 读 /ə/，a 读 /eɪ/，tion 读 /ʃən/。重音在 ra。", collocations: [["switching operation", "切换操作"], ["normal operation", "正常运行"], ["operation manual", "操作手册"]], examples: [["The operation is complete.", "操作已完成。"], ["Check the operation status.", "检查运行状态。"]] },
    ],
    phrases: [
      { p: "pump switching operation", ipa: "/pʌmp ˈswɪtʃɪŋ ˌɒpəˈreɪʃən/", cn: "水泵切换操作", why: "pump + switching + operation = 水泵切换操作。这是指将水泵从主泵切换到备用泵的完整操作流程。" },
    ],
    grammar: [
      { q: "operation 和 procedure 有什么区别？", a: "operation = 操作（具体的执行动作或运行状态）\nprocedure = 程序（标准化的操作步骤）\n✅ The switching operation is complete.（切换操作已完成 → 具体的操作）\n✅ Follow the switching procedure.（按照切换程序执行 → 标准化的步骤）\noperation 指'具体的操作'，procedure 指'标准的程序'。" },
    ],
    pattern: "The + 操作类型 + operation has been completed successfully",
    patternExamples: [
      { en: "The maintenance operation has been completed successfully.", cn: "维护操作已顺利完成。", words: [{ w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }, { w: "operation", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }] },
      { en: "The inspection operation has been completed successfully.", cn: "巡检操作已顺利完成。", words: [{ w: "operation", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }] },
      { en: "The testing operation has been completed successfully.", cn: "测试操作已顺利完成。", words: [{ w: "testing", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }, { w: "operation", ipa: "/ˌɒpəˈreɪʃən/", cn: "运行", phonics: "op 读 /ɒp/，eration 读 /əˈreɪʃən/" }] },
    ],
    thinking: "水泵切换操作完成后的总结：\n① 备用泵已启动并运行正常\n② 主泵已停止\n③ 负载已成功转移\n④ 系统压力流量稳定\n⑤ 无活动告警\n⑥ 操作记录已更新\n切换操作完成标志着系统已稳定运行在新的配置下。",
    pronunciation: "switching 的 sw 读 /sw/，不是 /s/ + /w/ 分开。\noperation 的重音在 ra /reɪ/ 上。",
    quiz: [
      { q: "维护操作已顺利完成，怎么说？", a: "The maintenance operation has been completed successfully." },
    ],
  },
  {
    id: 1669,
    en: "Please monitor the pump after switching.",
    cn: "请在切换后持续监控水泵。",
    ipa: "/pliːz ˈmɒnɪtər ðə pʌmp ˈɑːftər ˈswɪtʃɪŋ/",
    tags: ["第1669句", "切换后监控", "★★★★★"],
    when: "切换操作完成后，需要持续监控水泵运行状态，确保系统稳定。monitor 强调持续观察和记录。",
    words: [
      { w: "monitor", ipa: "/ˈmɒnɪtər/", pos: "动词", cn: "监控；监测", memory: "monitor = 监控/监测，持续观察设备运行状态。\nmonitor the pump = 监控水泵\nmonitor the temperature = 监控温度\nmonitor the system = 监控系统", phonics: "mon 读 /mɒn/，i 读 /ɪ/，tor 读 /tər/。重音在 mon。", collocations: [["monitor the pump", "监控水泵"], ["continuous monitoring", "持续监控"], ["remote monitoring", "远程监控"]], examples: [["Please monitor the system closely.", "请密切监控系统。"], ["The BMS is monitoring all equipment.", "BMS正在监控所有设备。"]] },
    ],
    phrases: [
      { p: "monitor the pump after switching", ipa: "/ˈmɒnɪtər ðə pʌmp ˈɑːftər ˈswɪtʃɪŋ/", cn: "切换后监控水泵", why: "monitor + the + pump + after + switching = 切换后监控水泵。切换后需要持续观察水泵运行状态，确保系统稳定。" },
    ],
    grammar: [
      { q: "monitor 和 watch 有什么区别？", a: "monitor = 监控（持续观察并记录数据）\nwatch = 观察（用眼睛看）\n✅ Please monitor the pump after switching.（请切换后监控水泵 → 持续观察数据）\n✅ Please watch for any abnormal noise.（请注意观察是否有异常噪音 → 用耳朵听）\nmonitor 更强调'数据监控'，watch 更强调'感官观察'。" },
    ],
    pattern: "Please monitor the + 设备 + after + 操作",
    patternExamples: [
      { en: "Please monitor the generator after starting.", cn: "请在启动后监控发电机。", words: [{ w: "monitor", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "starting", ipa: "/stɑːrt/", cn: "开始", phonics: "start 读 /stɑːrt/" }] },
      { en: "Please monitor the chiller after maintenance.", cn: "请在维护后监控冷水机组。", words: [{ w: "monitor", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "Please monitor the system after switching.", cn: "请在切换后监控系统。", words: [{ w: "monitor", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "switching", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
    ],
    thinking: "切换后监控要点：\n① 出口压力是否稳定\n② 水流量是否正常\n③ 电机电流是否在正常范围\n④ 电机温度是否正常\n⑤ 是否有异常振动或噪音\n⑥ 是否有活动告警\n建议切换后至少监控30分钟，确认系统稳定。",
    pronunciation: "monitor 的重音在 mon /mɒn/ 上。\nafter 的 af 读 /ɑːf/，不是 /æf/。",
    quiz: [
      { q: "请在启动后监控发电机，怎么说？", a: "Please monitor the generator after starting." },
      { q: "切换后需要监控多长时间？", a: "建议切换后至少监控30分钟，确认系统稳定。监控要点：① 出口压力稳定 ② 水流量正常 ③ 电机电流正常 ④ 电机温度正常 ⑤ 无异常振动 ⑥ 无活动告警。" },
    ],
  },
  {
    id: 1670,
    en: "The pump system is operating normally.",
    cn: "水泵系统运行正常。",
    ipa: "/ðə pʌmp ˈsɪstəm ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1670句", "系统正常", "★★★★★"],
    when: "确认水泵系统整体运行正常。这是切换操作的最终确认，表明系统已完全稳定。",
    words: [
      { w: "pump system", ipa: "/pʌmp ˈsɪstəm/", pos: "名词短语", cn: "水泵系统", memory: "pump = 水泵；system = 系统。\npump system = 水泵系统，包括水泵、电机、管道、阀门等。\n是数据中心制冷系统的重要组成部分。", phonics: "pump 读 /pʌmp/，system 读 /ˈsɪstəm/。", collocations: [["pump system", "水泵系统"], ["chilled water pump system", "冷冻水泵系统"], ["condenser water pump system", "冷却水泵系统"]], examples: [["The pump system is running.", "水泵系统正在运行。"], ["Check the pump system status.", "检查水泵系统状态。"]] },
    ],
    phrases: [
      { p: "pump system is operating normally", ipa: "/pʌmp ˈsɪstəm ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "水泵系统运行正常", why: "pump + system + is + operating + normally = 水泵系统运行正常。这是切换操作的总结性确认，表明系统已完全稳定。" },
    ],
    grammar: [
      { q: "is operating 和 operates 有什么区别？", a: "is operating = 正在运行（现在进行时，强调当前状态）\noperates = 运行（一般现在时，描述常态）\n✅ The pump system is operating normally.（水泵系统正在正常运行 → 当前状态）\n✅ The pump system operates 24/7.（水泵系统24小时运行 → 常态）\n交接时用 is operating，强调'此刻的运行状态'。" },
    ],
    pattern: "The + 系统 + is operating normally",
    patternExamples: [
      { en: "The cooling system is operating normally.", cn: "冷却系统运行正常。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "The electrical system is operating normally.", cn: "电气系统运行正常。", words: [{ w: "electrical", ipa: "/ɪˈlɛktrɪkəl/", cn: "电气", phonics: "e 读 /ɪ/，lectrical 读 /lɛktrɪkəl/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "The HVAC system is operating normally.", cn: "暖通系统运行正常。", words: [{ w: "hvac", ipa: "/ˌeɪtʃˈviːˈeɪˈsiː/", cn: "暖通", phonics: "H-V-A-C 逐字母读" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
    ],
    thinking: "水泵系统正常运行标准：\n① 所有水泵运行正常（主泵或备用泵）\n② 出口压力稳定在正常范围\n③ 水流量达到设计要求\n④ 电机电流温度正常\n⑤ 无异常振动或噪音\n⑥ 无活动告警\n⑦ 控制系统正常\n水泵系统正常运行是数据中心制冷保障的基础。",
    pronunciation: "system 的 sys 读 /sɪs/，不是 /saɪs/。\nnormally 的 r 在美式英语中发音，英式中不发音。",
    quiz: [
      { q: "冷却系统运行正常，怎么说？", a: "The cooling system is operating normally." },
      { q: "水泵系统正常运行需要满足哪些条件？", a: "需要满足：① 水泵运行正常 ② 出口压力稳定 ③ 水流量正常 ④ 电机电流温度正常 ⑤ 无异常振动 ⑥ 无活动告警 ⑦ 控制系统正常。所有条件满足才能确认系统正常运行。" },
    ],
  },
  // ── 场景001：冷冻水泵、冷却水泵 - 告警 (1671-1680) ──
  {
    id: 1671,
    en: "A pump failure alarm has been detected.",
    cn: "检测到水泵故障告警。",
    ipa: "/ə pʌmp ˈfeɪljər əˈlɑːrm hæz biːn dɪˈtɛktɪd/",
    tags: ["第1671句", "水泵故障告警", "★★★★★"],
    when: "检测到水泵故障告警，表明水泵出现异常情况需要立即处理。failure alarm 是指示设备故障的告警。",
    words: [
      { w: "failure", ipa: "/ˈfeɪljər/", pos: "名词", cn: "故障；失败", memory: "fail = 失败/故障；-ure = 名词后缀。\nfailure = 故障/失败。\npump failure = 水泵故障\nmotor failure = 电机故障", phonics: "fail 读 /feɪl/，ure 读 /jər/。重音在 fail。", collocations: [["pump failure", "水泵故障"], ["motor failure", "电机故障"], ["failure alarm", "故障告警"]], examples: [["A pump failure has occurred.", "发生了水泵故障。"], ["Investigate the motor failure.", "调查电机故障原因。"]] },
      { w: "detected", ipa: "/dɪˈtɛktɪd/", pos: "动词过去分词", cn: "检测到", memory: "detect = 检测/发现；-ed = 过去分词后缀。\ndetected = 被检测到。\nhas been detected = 已经被检测到", phonics: "de 读 /dɪ/，tect 读 /tɛkt/，ed 读 /ɪd/。重音在 tect。", collocations: [["alarm detected", "告警检测"], ["fault detected", "故障检测"], ["leak detected", "泄漏检测"]], examples: [["A fault has been detected.", "已检测到故障。"], ["Smoke was detected.", "检测到烟雾。"]] },
    ],
    phrases: [
      { p: "pump failure alarm", ipa: "/pʌmp ˈfeɪljər əˈlɑːrm/", cn: "水泵故障告警", why: "pump + failure + alarm = 水泵故障告警。这是指示水泵出现故障的告警，需要立即处理。" },
    ],
    grammar: [
      { q: "has been detected 和 was detected 有什么区别？", a: "has been detected = 已经被检测到（现在完成时被动语态，强调告警刚被检测到且仍然有效）\nwas detected = 被检测到（一般过去时被动语态，描述过去的事件）\n✅ A pump failure alarm has been detected.（检测到水泵故障告警 → 告警刚发生且仍然有效）\n✅ The alarm was detected at 10:00.（告警在10点被检测到 → 描述过去的时间点）\n交接时用 has been detected，强调'告警刚发生'。" },
    ],
    pattern: "A + 告警类型 + alarm has been detected",
    patternExamples: [
      { en: "A high temperature alarm has been detected.", cn: "检测到高温告警。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A low pressure alarm has been detected.", cn: "检测到低压力告警。", words: [{ w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A water leakage alarm has been detected.", cn: "检测到漏水告警。", words: [{ w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "水泵故障告警可能原因：\n① 电机过载\n② 电机过热\n③ 轴承故障\n④ 机械密封泄漏\n⑤ 叶轮损坏\n⑥ 电源故障\n处理流程：立即调查原因 → 切换到备用泵 → 安排维修。",
    pronunciation: "failure 的 ai 读 /eɪ/，不是 /æ/。\ndetected 的重音在 tect /tɛkt/ 上。",
    quiz: [
      { q: "检测到高温告警，怎么说？", a: "A high temperature alarm has been detected." },
      { q: "水泵故障告警的可能原因有哪些？", a: "可能原因：① 电机过载 ② 电机过热 ③ 轴承故障 ④ 机械密封泄漏 ⑤ 叶轮损坏 ⑥ 电源故障 ⑦ 控制系统故障。需要立即调查具体原因。" },
    ],
  },
  {
    id: 1672,
    en: "A low water flow alarm has been detected.",
    cn: "检测到低流量告警。",
    ipa: "/ə loʊ ˈwɔːtər floʊ əˈlɑːrm hæz biːn dɪˈtɛktɪd/",
    tags: ["第1672句", "低流量告警", "★★★★★"],
    when: "检测到低流量告警，表明水流量低于正常范围，可能影响制冷效果。",
    words: [
      { w: "low water flow", ipa: "/loʊ ˈwɔːtər floʊ/", pos: "名词短语", cn: "低水流量", memory: "low = 低的；water = 水；flow = 流量。\nlow water flow = 低水流量，指水流量低于正常范围。\n可能导致制冷效果下降。", phonics: "low 读 /loʊ/，water 读 /ˈwɔːtər/，flow 读 /floʊ/。", collocations: [["low water flow", "低水流量"], ["low flow alarm", "低流量告警"], ["flow rate", "流量"]], examples: [["Low water flow detected.", "检测到低水流量。"], ["Check the flow rate.", "检查流量。"]] },
    ],
    phrases: [
      { p: "low water flow alarm", ipa: "/loʊ ˈwɔːtər floʊ əˈlɑːrm/", cn: "低流量告警", why: "low + water + flow + alarm = 低流量告警。这是指示水流量低于正常范围的告警，需要立即处理。" },
    ],
    grammar: [
      { q: "low 和 insufficient 有什么区别？", a: "low = 低的（描述数值低于正常）\ninsufficient = 不足的（描述数量不够）\n✅ A low water flow alarm has been detected.（检测到低流量告警 → 流量低于设定值）\n✅ The water supply is insufficient.（供水不足 → 水量不够需求）\nlow 强调'低于标准'，insufficient 强调'不够用'。" },
    ],
    pattern: "A low + 参数 + alarm has been detected",
    patternExamples: [
      { en: "A low pressure alarm has been detected.", cn: "检测到低压力告警。", words: [{ w: "pressure", ipa: "/ˈprɛʃər/", cn: "压力", phonics: "press 读 /prɛs/，ure 读 /ər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A low temperature alarm has been detected.", cn: "检测到低温告警。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A low voltage alarm has been detected.", cn: "检测到低电压告警。", words: [{ w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "低流量告警可能原因：\n① 水泵故障\n② 管道堵塞\n③ 阀门未完全开启\n④ 空气进入系统\n⑤ 过滤器堵塞\n⑥ 水位过低\n处理流程：检查水泵运行 → 检查阀门位置 → 检查过滤器 → 排气 → 切换到备用泵。",
    pronunciation: "low 的 ow 读 /oʊ/，不是 /aʊ/。\nflow 的 ow 读 /oʊ/，与 low 相同。",
    quiz: [
      { q: "检测到低压力告警，怎么说？", a: "A low pressure alarm has been detected." },
      { q: "低流量告警的可能原因有哪些？", a: "可能原因：① 水泵故障 ② 管道堵塞 ③ 阀门未完全开启 ④ 空气进入系统 ⑤ 过滤器堵塞 ⑥ 水位过低 ⑦ 叶轮损坏。需要逐项排查。" },
    ],
  },
  {
    id: 1673,
    en: "A high pressure alarm has been detected.",
    cn: "检测到高压力告警。",
    ipa: "/ə haɪ ˈprɛʃər əˈlɑːrm hæz biːn dɪˈtɛktɪd/",
    tags: ["第1673句", "高压力告警", "★★★★★"],
    when: "检测到高压力告警，表明系统压力高于正常范围，可能导致设备损坏。",
    words: [
      { w: "high pressure", ipa: "/haɪ ˈprɛʃər/", pos: "名词短语", cn: "高压力", memory: "high = 高的；pressure = 压力。\nhigh pressure = 高压力，指压力高于正常范围。\n可能导致管道破裂或设备损坏。", phonics: "high 读 /haɪ/，pressure 读 /ˈprɛʃər/。", collocations: [["high pressure", "高压力"], ["high pressure alarm", "高压力告警"], ["pressure relief", "压力释放"]], examples: [["High pressure detected.", "检测到高压力。"], ["Check the pressure relief valve.", "检查安全阀。"]] },
    ],
    phrases: [
      { p: "high pressure alarm", ipa: "/haɪ ˈprɛʃər əˈlɑːrm/", cn: "高压力告警", why: "high + pressure + alarm = 高压力告警。这是指示系统压力高于正常范围的告警，需要立即处理以防止设备损坏。" },
    ],
    grammar: [
      { q: "high 和 excessive 有什么区别？", a: "high = 高的（描述数值高于正常）\nexcessive = 过度的（描述超出合理范围）\n✅ A high pressure alarm has been detected.（检测到高压力告警 → 压力高于设定值）\n✅ The pressure is excessive.（压力过高 → 压力超出安全范围）\nhigh 是'高于标准'，excessive 是'超出安全'，程度更严重。" },
    ],
    pattern: "A high + 参数 + alarm has been detected",
    patternExamples: [
      { en: "A high temperature alarm has been detected.", cn: "检测到高温告警。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A high humidity alarm has been detected.", cn: "检测到高湿度告警。", words: [{ w: "humidity", ipa: "/hjuːˈmɪdɪti/", cn: "湿度", phonics: "hu 读 /hjuː/，midity 读 /mɪdɪti/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A high voltage alarm has been detected.", cn: "检测到高电压告警。", words: [{ w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "高压力告警可能原因：\n① 出口阀门关闭或部分关闭\n② 管道堵塞\n③ 水泵转速过高\n④ 系统中有空气\n⑤ 压力表故障\n处理流程：检查阀门位置 → 检查管道 → 排气 → 降低泵速 → 必要时停泵。",
    pronunciation: "high 的 igh 读 /aɪ/，不是 /ɪ/。\npressure 的 pre 读 /prɛ/，不是 /priː/。",
    quiz: [
      { q: "检测到高温告警，怎么说？", a: "A high temperature alarm has been detected." },
      { q: "高压力告警的可能原因有哪些？", a: "可能原因：① 出口阀门关闭 ② 管道堵塞 ③ 水泵转速过高 ④ 系统中有空气 ⑤ 压力表故障 ⑥ 冷却器堵塞。需要立即排查并处理。" },
    ],
  },
  {
    id: 1674,
    en: "A low pressure alarm has been detected.",
    cn: "检测到低压力告警。",
    ipa: "/ə loʊ ˈprɛʃər əˈlɑːrm hæz biːn dɪˈtɛktɪd/",
    tags: ["第1674句", "低压力告警", "★★★★★"],
    when: "检测到低压力告警，表明系统压力低于正常范围，可能导致流量不足。",
    words: [
      { w: "low pressure", ipa: "/loʊ ˈprɛʃər/", pos: "名词短语", cn: "低压力", memory: "low = 低的；pressure = 压力。\nlow pressure = 低压力，指压力低于正常范围。\n可能导致水流量不足，影响制冷效果。", phonics: "low 读 /loʊ/，pressure 读 /ˈprɛʃər/。", collocations: [["low pressure", "低压力"], ["low pressure alarm", "低压力告警"], ["pressure drop", "压力下降"]], examples: [["Low pressure detected.", "检测到低压力。"], ["Check for pressure drop.", "检查压力下降。"]] },
    ],
    phrases: [
      { p: "low pressure alarm", ipa: "/loʊ ˈprɛʃər əˈlɑːrm/", cn: "低压力告警", why: "low + pressure + alarm = 低压力告警。这是指示系统压力低于正常范围的告警，需要立即处理以确保系统正常运行。" },
    ],
    grammar: [
      { q: "low pressure 和 pressure drop 有什么区别？", a: "low pressure = 低压力（压力持续低于正常）\npressure drop = 压力下降（压力从高变低的过程）\n✅ A low pressure alarm has been detected.（检测到低压力告警 → 压力持续低）\n✅ There is a pressure drop.（有压力下降 → 压力正在降低）\nlow pressure 是'状态'，pressure drop 是'变化'。" },
    ],
    pattern: "A low + 参数 + alarm has been detected",
    patternExamples: [
      { en: "A low water level alarm has been detected.", cn: "检测到低水位告警。", words: [{ w: "water", ipa: "/ˈwɔːtər/", cn: "水", phonics: "wa 读 /wɔː/，ter 读 /tər/" }, { w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A low voltage alarm has been detected.", cn: "检测到低电压告警。", words: [{ w: "voltage", ipa: "/ˈvoʊltɪdʒ/", cn: "电压", phonics: "volt 读 /voʊlt/，age 读 /ɪdʒ/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A low flow alarm has been detected.", cn: "检测到低流量告警。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "低压力告警可能原因：\n① 水泵故障或效率下降\n② 入口过滤器堵塞\n③ 管道泄漏\n④ 水位过低\n⑤ 阀门未完全开启\n⑥ 空气进入系统\n处理流程：检查水泵运行 → 检查过滤器 → 检查管道 → 补水 → 排气 → 切换到备用泵。",
    pronunciation: "low 的 ow 读 /oʊ/，与 flow 相同。\npressure 的重音在 pre /prɛ/ 上。",
    quiz: [
      { q: "检测到低水位告警，怎么说？", a: "A low water level alarm has been detected." },
      { q: "低压力告警的可能原因有哪些？", a: "可能原因：① 水泵故障 ② 入口过滤器堵塞 ③ 管道泄漏 ④ 水位过低 ⑤ 阀门未完全开启 ⑥ 空气进入系统 ⑦ 叶轮磨损。需要逐项排查。" },
    ],
  },
  {
    id: 1675,
    en: "Please investigate the alarm immediately.",
    cn: "请立即调查告警原因。",
    ipa: "/pliːz ɪnˈvɛstɪɡeɪt ðə əˈlɑːrm ɪˈmiːdiətli/",
    tags: ["第1675句", "立即调查", "★★★★★"],
    when: "检测到告警后，需要立即调查告警原因。investigate 强调系统地调查和分析。",
    words: [
      { w: "investigate", ipa: "/ɪnˈvɛstɪɡeɪt/", pos: "动词", cn: "调查；研究", memory: "in = 进入；vestigate = 追踪。\ninvestigate = 调查/研究，系统地查找原因。\ninvestigate the alarm = 调查告警原因\ninvestigate the failure = 调查故障原因", phonics: "in 读 /ɪn/，ves 读 /vɛs/，ti 读 /tɪ/，gate 读 /ɡeɪt/。重音在 ves。", collocations: [["investigate the alarm", "调查告警"], ["investigate the cause", "调查原因"], ["investigate the failure", "调查故障"]], examples: [["Please investigate the root cause.", "请调查根本原因。"], ["The team is investigating the incident.", "团队正在调查事件。"]] },
      { w: "immediately", ipa: "/ɪˈmiːdiətli/", pos: "副词", cn: "立即；马上", memory: "immediate = 立即的；-ly = 副词后缀。\nimmediately = 立即/马上。\nact immediately = 立即行动\nrespond immediately = 立即响应", phonics: "im 读 /ɪm/，me 读 /miː/，di 读 /dɪ/，ate 读 /ət/，ly 读 /li/。重音在 me。", collocations: [["immediately investigate", "立即调查"], ["respond immediately", "立即响应"], ["act immediately", "立即行动"]], examples: [["Please respond immediately.", "请立即响应。"], ["Take action immediately.", "立即采取行动。"]] },
    ],
    phrases: [
      { p: "investigate the alarm immediately", ipa: "/ɪnˈvɛstɪɡeɪt ðə əˈlɑːrm ɪˈmiːdiətli/", cn: "立即调查告警原因", why: "investigate + the + alarm + immediately = 立即调查告警原因。这是告警处理的第一步，需要快速确定告警的根本原因。" },
    ],
    grammar: [
      { q: "investigate 和 check 有什么区别？", a: "investigate = 调查（系统地查找原因，深入分析）\ncheck = 检查（快速确认状态）\n✅ Please investigate the alarm.（请调查告警 → 深入分析原因）\n✅ Please check the pump status.（请检查水泵状态 → 快速确认）\ninvestigate 更深入，check 更快速。" },
    ],
    pattern: "Please investigate the + 问题 + immediately",
    patternExamples: [
      { en: "Please investigate the failure immediately.", cn: "请立即调查故障。", words: [{ w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Please investigate the abnormal noise immediately.", cn: "请立即调查异常噪音。", words: [{ w: "abnormal", ipa: "/æbˈnɔːrməl/", cn: "异常", phonics: "ab 读 /æb/，normal 读 /nɔːrməl/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Please investigate the temperature rise immediately.", cn: "请立即调查温度上升。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
    ],
    thinking: "告警调查流程：\n① 确认告警类型和级别\n② 检查相关设备状态\n③ 查看历史数据和趋势\n④ 现场检查设备\n⑤ 分析可能原因\n⑥ 确定根本原因\n⑦ 制定处理方案\n调查要快速准确，确保及时处理告警。",
    pronunciation: "investigate 的重音在 ves /vɛs/ 上。\nimmediately 的重音在 me /miː/ 上。",
    quiz: [
      { q: "请立即调查故障，怎么说？", a: "Please investigate the failure immediately." },
      { q: "告警调查的主要步骤有哪些？", a: "主要步骤：① 确认告警类型 ② 检查设备状态 ③ 查看历史数据 ④ 现场检查 ⑤ 分析原因 ⑥ 确定根因 ⑦ 制定方案 ⑧ 执行处理 ⑨ 验证效果。" },
    ],
  },
  {
    id: 1676,
    en: "Please switch to the standby pump immediately.",
    cn: "请立即切换到备用水泵。",
    ipa: "/pliːz swɪtʃ tuː ðə ˈstændbaɪ pʌmp ɪˈmiːdiətli/",
    tags: ["第1676句", "立即切换", "★★★★★"],
    when: "告警处理的关键步骤：立即切换到备用水泵，确保系统继续运行。",
    words: [
      { w: "switch to", ipa: "/swɪtʃ tuː/", pos: "动词短语", cn: "切换到", memory: "switch = 切换；to = 到。\nswitch to = 切换到，从一个设备切换到另一个设备。\nswitch to standby = 切换到备用\nswitch to manual = 切换到手动", phonics: "switch 读 /swɪtʃ/，to 读 /tuː/。", collocations: [["switch to standby", "切换到备用"], ["switch to manual", "切换到手动"], ["switch to automatic", "切换到自动"]], examples: [["Please switch to the standby unit.", "请切换到备用设备。"], ["Switch to manual mode.", "切换到手动模式。"]] },
    ],
    phrases: [
      { p: "switch to the standby pump", ipa: "/swɪtʃ tuː ðə ˈstændbaɪ pʌmp/", cn: "切换到备用水泵", why: "switch + to + the + standby + pump = 切换到备用水泵。这是告警处理的关键步骤，确保系统继续运行。" },
    ],
    grammar: [
      { q: "switch to 和 change to 有什么区别？", a: "switch to = 切换到（快速转换）\nchange to = 更改为（可能需要调整）\n✅ Please switch to the standby pump.（请切换到备用水泵 → 快速切换）\n✅ Please change to manual mode.（请更改为手动模式 → 需要调整设置）\nswitch 更强调'快速切换'，change 更强调'更改设置'。" },
    ],
    pattern: "Please switch to the standby + 设备 + immediately",
    patternExamples: [
      { en: "Please switch to the standby generator immediately.", cn: "请立即切换到备用发电机。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Please switch to the standby chiller immediately.", cn: "请立即切换到备用冷水机组。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Please switch to the standby cooling tower immediately.", cn: "请立即切换到备用冷却塔。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }, { w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
    ],
    thinking: "立即切换到备用泵的前提：\n① 备用泵处于可用状态\n② 备用泵电源正常\n③ 备用泵阀门位置正确\n④ 控制系统正常\n切换要快速准确，确保系统不中断运行。",
    pronunciation: "switch 的 sw 读 /sw/，不是 /s/ + /w/ 分开。\nimmediately 的重音在 me /miː/ 上。",
    quiz: [
      { q: "请立即切换到备用发电机，怎么说？", a: "Please switch to the standby generator immediately." },
      { q: "切换到备用泵前需要确认什么？", a: "需要确认：① 备用泵可用 ② 电源正常 ③ 阀门位置正确 ④ 控制系统正常 ⑤ 入口水位正常 ⑥ 无其他告警。确认后快速切换。" },
    ],
  },
  {
    id: 1677,
    en: "The alarm has been cleared successfully.",
    cn: "告警已经恢复。",
    ipa: "/ðə əˈlɑːrm hæz biːn klɪərd səkˈsɛsfəli/",
    tags: ["第1677句", "告警恢复", "★★★★★"],
    when: "确认告警已经成功恢复。cleared 表示告警已经消除，系统恢复正常。",
    words: [
      { w: "cleared", ipa: "/klɪərd/", pos: "动词过去分词", cn: "已恢复；已清除", memory: "clear = 清除/恢复；-ed = 过去分词后缀。\ncleared = 已恢复/已清除。\nalarm cleared = 告警已恢复\nfault cleared = 故障已清除", phonics: "clear 读 /klɪər/，ed 读 /d/。", collocations: [["alarm cleared", "告警恢复"], ["fault cleared", "故障清除"], ["error cleared", "错误清除"]], examples: [["The alarm has been cleared.", "告警已恢复。"], ["All faults are cleared.", "所有故障已清除。"]] },
    ],
    phrases: [
      { p: "alarm has been cleared", ipa: "/əˈlɑːrm hæz biːn klɪərd/", cn: "告警已经恢复", why: "alarm + has + been + cleared = 告警已经恢复。现在完成时被动语态，表示告警已经被清除，系统恢复正常。" },
    ],
    grammar: [
      { q: "cleared 和 resolved 有什么区别？", a: "cleared = 已恢复/已清除（告警从系统中消失）\nresolved = 已解决（问题被处理完成）\n✅ The alarm has been cleared.（告警已恢复 → 告警从系统中消失）\n✅ The issue has been resolved.（问题已解决 → 问题被处理完成）\ncleared 强调'告警消失'，resolved 强调'问题解决'。" },
    ],
    pattern: "The alarm has been cleared successfully",
    patternExamples: [
      { en: "All alarms have been cleared successfully.", cn: "所有告警已成功恢复。", words: [{ w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
      { en: "The fault has been cleared successfully.", cn: "故障已成功清除。", words: [{ w: "fault", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }, { w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
      { en: "The error has been cleared successfully.", cn: "错误已成功清除。", words: [{ w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
    ],
    thinking: "告警恢复后的确认：\n① 告警从BMS系统中消失\n② 相关设备运行正常\n③ 系统参数恢复正常\n④ 无其他活动告警\n⑤ 记录告警处理过程\n告警恢复标志着问题已处理完成。",
    pronunciation: "cleared 的 ear 读 /ɪər/，不是 /ɛər/。\nsuccessfully 的重音在 cess /sɛs/ 上。",
    quiz: [
      { q: "所有告警已成功恢复，怎么说？", a: "All alarms have been cleared successfully." },
      { q: "告警恢复后需要做什么？", a: "告警恢复后需要：① 确认告警从系统中消失 ② 检查设备运行正常 ③ 确认系统参数正常 ④ 记录告警处理过程 ⑤ 更新维护记录 ⑥ 分析告警原因 ⑦ 制定预防措施。" },
    ],
  },
  {
    id: 1678,
    en: "Please update the pump maintenance record.",
    cn: "请更新水泵维护记录。",
    ipa: "/pliːz ˈʌpdeɪt ðə pʌmp ˈmeɪntənəns ˈrɛkərd/",
    tags: ["第1678句", "更新维护记录", "★★★★★"],
    when: "告警处理完成后，需要更新水泵维护记录，记录本次告警处理过程。",
    words: [
      { w: "update", ipa: "/ˈʌpdeɪt/", pos: "动词", cn: "更新", memory: "up = 向上；date = 日期。\nupdate = 更新，使信息保持最新。\nupdate the record = 更新记录\nupdate the system = 更新系统", phonics: "up 读 /ʌp/，date 读 /deɪt/。重音在 up。", collocations: [["update the record", "更新记录"], ["update the log", "更新日志"], ["update the system", "更新系统"]], examples: [["Please update the maintenance log.", "请更新维护日志。"], ["The system has been updated.", "系统已更新。"]] },
      { w: "maintenance record", ipa: "/ˈmeɪntənəns ˈrɛkərd/", pos: "名词短语", cn: "维护记录", memory: "maintenance = 维护；record = 记录。\nmaintenance record = 维护记录，记录设备维护历史。\n是设备管理的重要文档。", phonics: "maintenance 读 /ˈmeɪntənəns/，record 读 /ˈrɛkərd/。", collocations: [["maintenance record", "维护记录"], ["maintenance log", "维护日志"], ["maintenance history", "维护历史"]], examples: [["Check the maintenance record.", "检查维护记录。"], ["Update the maintenance log.", "更新维护日志。"]] },
    ],
    phrases: [
      { p: "pump maintenance record", ipa: "/pʌmp ˈmeɪntənəns ˈrɛkərd/", cn: "水泵维护记录", why: "pump + maintenance + record = 水泵维护记录。记录水泵的维护历史，包括维护时间、内容、结果等。" },
    ],
    grammar: [
      { q: "update 和 record 有什么区别？", a: "update = 更新（使信息保持最新）\nrecord = 记录（将信息保存下来）\n✅ Please update the maintenance record.（请更新维护记录 → 添加新的记录）\n✅ Please record the inspection results.（请记录巡检结果 → 保存结果）\nupdate 强调'更新已有信息'，record 强调'保存新信息'。" },
    ],
    pattern: "Please update the + 设备 + maintenance record",
    patternExamples: [
      { en: "Please update the generator maintenance record.", cn: "请更新发电机维护记录。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "Please update the chiller maintenance record.", cn: "请更新冷水机组维护记录。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "Please update the UPS maintenance record.", cn: "请更新UPS维护记录。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
    ],
    thinking: "维护记录应包含：\n① 维护日期和时间\n② 维护类型（日常/故障/预防）\n③ 维护内容\n④ 使用的备件\n⑤ 维护人员\n⑥ 维护结果\n⑦ 下次维护计划\n完整的维护记录有助于设备管理和故障分析。",
    pronunciation: "update 的重音在 up /ʌp/ 上。\nmaintenance 的重音在 main /meɪn/ 上。",
    quiz: [
      { q: "请更新发电机维护记录，怎么说？", a: "Please update the generator maintenance record." },
      { q: "维护记录应该包含哪些内容？", a: "应包含：① 维护日期时间 ② 维护类型 ③ 维护内容 ④ 使用备件 ⑤ 维护人员 ⑥ 维护结果 ⑦ 下次计划 ⑧ 备注说明。完整记录有助于设备管理。" },
    ],
  },
  {
    id: 1679,
    en: "The pump maintenance has been completed successfully.",
    cn: "水泵维护已经顺利完成。",
    ipa: "/ðə pʌmp ˈmeɪntənəns hæz biːn kəmˈpliːtɪd səkˈsɛsfəli/",
    tags: ["第1679句", "维护完成", "★★★★★"],
    when: "确认水泵维护已经顺利完成。这是维护工作的总结性陈述。",
    words: [
      { w: "pump maintenance", ipa: "/pʌmp ˈmeɪntənəns/", pos: "名词短语", cn: "水泵维护", memory: "pump = 水泵；maintenance = 维护。\npump maintenance = 水泵维护，包括日常检查、故障维修、预防性维护等。\n是确保水泵正常运行的重要工作。", phonics: "pump 读 /pʌmp/，maintenance 读 /ˈmeɪntənəns/。", collocations: [["pump maintenance", "水泵维护"], ["preventive maintenance", "预防性维护"], ["corrective maintenance", "纠正性维护"]], examples: [["Schedule the pump maintenance.", "安排水泵维护。"], ["The maintenance is complete.", "维护已完成。"]] },
    ],
    phrases: [
      { p: "pump maintenance has been completed", ipa: "/pʌmp ˈmeɪntənəns hæz biːn kəmˈpliːtɪd/", cn: "水泵维护已经完成", why: "pump + maintenance + has + been + completed = 水泵维护已经完成。现在完成时被动语态，表示维护工作已经完成。" },
    ],
    grammar: [
      { q: "maintenance 和 repair 有什么区别？", a: "maintenance = 维护（定期的保养和检查）\nrepair = 修理（修复故障设备）\n✅ The pump maintenance has been completed.（水泵维护已完成 → 定期保养）\n✅ The pump repair has been completed.（水泵修理已完成 → 修复故障）\nmaintenance 是'预防性'，repair 是'修复性'。" },
    ],
    pattern: "The + 设备 + maintenance has been completed successfully",
    patternExamples: [
      { en: "The generator maintenance has been completed successfully.", cn: "发电机维护已顺利完成。", words: [{ w: "generator", ipa: "/ˈdʒɛnəreɪtər/", cn: "发电机", phonics: "gen 读 /dʒɛn/，erator 读 /əreɪtər/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "The chiller maintenance has been completed successfully.", cn: "冷水机组维护已顺利完成。", words: [{ w: "chiller", ipa: "/ˈtʃɪlər/", cn: "冷水机", phonics: "chill 读 /tʃɪl/，er 读 /ər/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "The UPS maintenance has been completed successfully.", cn: "UPS维护已顺利完成。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
    ],
    thinking: "水泵维护完成后的确认：\n① 维护工作已全部完成\n② 设备已恢复正常运行\n③ 维护记录已更新\n④ 备件已补充\n⑤ 工具已归还\n⑥ 现场已清理\n维护完成标志着设备已恢复正常运行状态。",
    pronunciation: "maintenance 的重音在 main /meɪn/ 上。\ncompleted 的重音在 plete /pliːt/ 上。",
    quiz: [
      { q: "发电机维护已顺利完成，怎么说？", a: "The generator maintenance has been completed successfully." },
      { q: "维护完成后需要做什么？", a: "维护完成后需要：① 确认设备运行正常 ② 更新维护记录 ③ 补充备件 ④ 归还工具 ⑤ 清理现场 ⑥ 通知相关人员 ⑦ 安排下次维护。" },
    ],
  },
  {
    id: 1680,
    en: "The chilled water system is operating safely and normally.",
    cn: "冷冻水系统安全、正常运行。",
    ipa: "/ðə tʃɪld ˈwɔːtər ˈsɪstəm ɪz ˈɒpəreɪtɪŋ ˈseɪfli ænd ˈnɔːrməli/",
    tags: ["第1680句", "系统安全正常", "★★★★★"],
    when: "冷冻水系统的最终确认，表明整个系统已安全、正常运行。这是本部分的总结句。",
    words: [
      { w: "chilled water system", ipa: "/tʃɪld ˈwɔːtər ˈsɪstəm/", pos: "名词短语", cn: "冷冻水系统", memory: "chilled = 冷冻的；water = 水；system = 系统。\nchilled water system = 冷冻水系统，包括冷水机组、冷冻水泵、管道、阀门等。\n是数据中心制冷系统的核心部分。", phonics: "chilled 读 /tʃɪld/，water 读 /ˈwɔːtər/，system 读 /ˈsɪstəm/。", collocations: [["chilled water system", "冷冻水系统"], ["chilled water pump", "冷冻水泵"], ["chilled water temperature", "冷冻水温度"]], examples: [["The chilled water system is running.", "冷冻水系统正在运行。"], ["Check the chilled water temperature.", "检查冷冻水温度。"]] },
      { w: "safely", ipa: "/ˈseɪfli/", pos: "副词", cn: "安全地", memory: "safe = 安全的；-ly = 副词后缀。\nsafely = 安全地。\noperating safely = 安全运行\nsafely and normally = 安全、正常地", phonics: "safe 读 /seɪf/，ly 读 /li/。", collocations: [["operating safely", "安全运行"], ["safely shutdown", "安全停机"], ["safely and normally", "安全正常"]], examples: [["The system is operating safely.", "系统正在安全运行。"], ["Shutdown safely.", "安全停机。"]] },
    ],
    phrases: [
      { p: "operating safely and normally", ipa: "/ˈɒpəreɪtɪŋ ˈseɪfli ænd ˈnɔːrməli/", cn: "安全、正常运行", why: "operating + safely + and + normally = 安全、正常运行。这是系统运行的最高标准，既安全又正常。" },
    ],
    grammar: [
      { q: "safely and normally 和 normally 有什么区别？", a: "safely and normally = 安全、正常地（强调安全性和正常性）\nnormally = 正常地（只强调正常性）\n✅ The system is operating safely and normally.（系统安全、正常运行 → 既安全又正常）\n✅ The system is operating normally.（系统正常运行 → 只强调正常）\nsafely and normally 更全面，强调'安全'和'正常'两个方面。" },
    ],
    pattern: "The + 系统 + is operating safely and normally",
    patternExamples: [
      { en: "The electrical system is operating safely and normally.", cn: "电气系统安全、正常运行。", words: [{ w: "electrical", ipa: "/ɪˈlɛktrɪkəl/", cn: "电气", phonics: "e 读 /ɪ/，lectrical 读 /lɛktrɪkəl/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
      { en: "The fire protection system is operating safely and normally.", cn: "消防系统安全、正常运行。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "protection", ipa: "/prəˈtɛkʃən/", cn: "保护", phonics: "pro 读 /prə/，tection 读 /tɛkʃən/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "The HVAC system is operating safely and normally.", cn: "暖通系统安全、正常运行。", words: [{ w: "hvac", ipa: "/ˌeɪtʃˈviːˈeɪˈsiː/", cn: "暖通", phonics: "H-V-A-C 逐字母读" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }] },
    ],
    thinking: "冷冻水系统安全正常运行的标准：\n① 冷水机组运行正常\n② 冷冻水泵运行正常\n③ 冷却水泵运行正常\n④ 冷却塔运行正常\n⑤ 水温压力流量正常\n⑥ 水质参数正常\n⑦ 无活动告警\n⑧ 控制系统正常\n冷冻水系统安全正常运行是数据中心制冷保障的最终目标。",
    pronunciation: "safely 的 a 读 /eɪ/，与 safe 相同。\nnormally 的 r 在美式英语中发音，英式中不发音。",
    quiz: [
      { q: "电气系统安全、正常运行，怎么说？", a: "The electrical system is operating safely and normally." },
      { q: "冷冻水系统安全正常运行需要满足哪些条件？", a: "需要满足：① 冷水机组正常 ② 冷冻水泵正常 ③ 冷却水泵正常 ④ 冷却塔正常 ⑤ 温度压力流量正常 ⑥ 水质正常 ⑦ 无告警 ⑧ 控制系统正常。所有条件满足才能确认系统安全正常运行。" },
    ],
  },
];

export default MOCK_SENTENCES_PART25B;

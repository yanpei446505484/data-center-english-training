// EXPORTS: MOCK_SENTENCES_PART15B

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART15B: ISentence[] = [
  {
    id: 1216,
    en: "No additional risks have been identified.",
    cn: "目前没有发现新的风险。",
    ipa: "/noʊ əˈdɪʃ.ən.əl rɪsks hæv biːn aɪˈdɛn.tɪ.faɪd/",
    tags: ["第1216句", "电话会议", "★★★★★"],
    when: "系统稳定后，确认没有衍生风险，让客户放心。additional risks 指因本次事件可能引发的后续隐患。",
    words: [
      { w: "additional", ipa: "/əˈdɪʃ.ən.əl/", pos: "形容词", cn: "额外的；附加的", memory: "① addition = 添加/增加；② additional = 额外的/附加的。\nadditional risks = 除已知问题外的额外风险。交接和电话会议中用来排除隐患。", phonics: "ad 读 /ə/，di 读 /dɪʃ/，tion 读 /ən/，al 读 /əl/，重音在第二音节。", collocations: [["additional risks", "额外风险"], ["additional cost", "额外费用"], ["additional measures", "附加措施"]], examples: [["No additional issues were found.", "没有发现额外问题。"], ["We need additional resources.", "我们需要额外资源。"]] },
      { w: "identified", ipa: "/aɪˈdɛn.tɪ.faɪd/", pos: "动词(过去分词)", cn: "被识别；被发现", memory: "① identify = 识别/确认；② identified = 已被识别的。\nhave been identified = 现在完成被动，表示'已经被确认'。", phonics: "i 读 /aɪ/，den 读 /dɛn/，ti 读 /tɪ/，fied 读 /faɪd/，重音在第二音节。", collocations: [["risks identified", "已识别风险"], ["issues identified", "已发现问题"], ["root cause identified", "根因已确认"]], examples: [["Two risks have been identified.", "已识别两个风险。"], ["The problem was identified quickly.", "问题很快被发现了。"]] },
    ],
    phrases: [
      { p: "no additional risks", ipa: "/noʊ əˈdɪʃ.ən.əl rɪsks/", cn: "没有额外风险", why: "no + 形容词 + 名词 = 没有…的…。电话会议中用来安抚客户，表示已全面排查。" },
    ],
    grammar: [
      { q: "为什么用 have been identified？", a: "have been identified = 现在完成被动语态（have + been + 过去分词）\n表示'到目前为止已经被确认'，强调结果。\n✅ No additional risks have been identified.（目前没有发现额外风险 → 强调排查结果）\n✅ We did not identify any additional risks.（我们没有发现额外风险 → 一般过去时，强调动作）\n电话会议中用现在完成被动，因为关心的是'到目前为止的状态'。" },
    ],
    pattern: "No additional + 名词 + have been identified",
    patternExamples: [
      { en: "No additional issues have been identified.", cn: "没有发现额外问题。", words: [{ w: "issues", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
      { en: "No additional damage has been identified.", cn: "没有发现额外损坏。", words: [] },
      { en: "No additional impact has been identified.", cn: "没有发现额外影响。", words: [] },
    ],
    thinking: "电话会议中风险排查的标准话术：\n① No additional risks have been identified.（没有新风险 → 安抚客户）\n② All known risks have been mitigated.（已知风险已缓解 → 增强信心）\n③ We will continue to monitor for any new risks.（继续监控新风险 → 表态）",
    pronunciation: "additional 重音在第二音节：/əˈdɪʃ.ən.əl/。\nidentified 的 i 读长音 /aɪ/。\n节奏：No ad-DI-tion-al RISKS ｜ have been i-DEN-ti-fied.",
    quiz: [
      { q: "没有发现额外问题，怎么说？", a: "No additional issues have been identified." },
      { q: "have been identified 是什么语态？", a: "现在完成被动语态（have + been + 过去分词）。表示'到目前为止已经被确认/发现'。电话会议中用这个语态强调排查结果。" },
    ],
  },
  {
    id: 1217,
    en: "We do not expect this issue to happen again.",
    cn: "预计该问题不会再次发生。",
    ipa: "/wi duː nɑːt ɪkˈspɛkt ðɪs ˈɪʃ.uː tuː ˈhæp.ən əˈɡɛn/",
    tags: ["第1217句", "电话会议", "★★★★★"],
    when: "确认根因并采取纠正措施后，向客户保证问题不会复发。这是客户最关心的承诺之一。",
    words: [
      { w: "expect", ipa: "/ɪkˈspɛkt/", pos: "动词", cn: "预计；期望", memory: "① ex- = 向外；② spect = 看（拉丁语 spectare）。\nexpect = 向外看 → 预见/期望。\ndo not expect = 预计不会（否定预期）。", phonics: "ex 读 /ɪk/，pect 读 /spɛkt/，重音在第二音节。", collocations: [["expect to happen", "预计会发生"], ["do not expect", "预计不会"], ["as expected", "如预期"]], examples: [["We do not expect any downtime.", "预计不会有任何停机。"], ["The issue is expected to be resolved soon.", "预计问题很快解决。"]] },
      { w: "happen again", ipa: "/ˈhæp.ən əˈɡɛn/", pos: "动词短语", cn: "再次发生", memory: "① happen = 发生；② again = 再次。\nhappen again = 复发/再次发生。否定形式 do not happen again = 不再发生。", phonics: "happen 读 /ˈhæp.ən/，again 读 /əˈɡɛn/。", collocations: [["happen again", "再次发生"], ["prevent from happening again", "防止再次发生"], ["unlikely to happen again", "不太可能再次发生"]], examples: [["We hope this won't happen again.", "我们希望这不会再次发生。"], ["What caused it to happen again?", "什么原因导致它再次发生？"]] },
    ],
    phrases: [
      { p: "do not expect … to happen again", ipa: "/duː nɑːt ɪkˈspɛkt … tuː ˈhæp.ən əˈɡɛn/", cn: "预计…不会再次发生", why: "expect + 宾语 + to + 动词 = 预计某事会…。否定形式表示'预计不会'。电话会议中用来给客户信心。" },
    ],
    grammar: [
      { q: "expect 和 predict 有什么区别？", a: "expect = 预计/期望（基于经验和判断的主观预期）\npredict = 预测（基于数据和分析的客观预测）\n✅ We do not expect this issue to happen again.（我们预计不会复发 → 基于已采取的措施）\n✅ We predict the system will be stable.（我们预测系统会稳定 → 基于数据分析）\n电话会议中用 expect，因为是专业判断而非数据分析。" },
    ],
    pattern: "We do not expect + 问题 + to happen again",
    patternExamples: [
      { en: "We do not expect this failure to happen again.", cn: "预计此故障不会再次发生。", words: [] },
      { en: "We do not expect the same issue to happen again.", cn: "预计同样的问题不会再次发生。", words: [{ w: "issue", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
      { en: "We do not expect any recurrence.", cn: "预计不会有任何复发。", words: [] },
    ],
    thinking: "向客户保证不复发的话术层级：\n① We do not expect this issue to happen again.（预计不会复发 → 标准承诺）\n② We are confident this will not recur.（我们有信心不会复发 → 更强承诺）\n③ Corrective actions have been implemented to prevent recurrence.（已实施纠正措施防止复发 → 最强承诺，附措施说明）",
    pronunciation: "expect 重音在第二音节：/ɪkˈspɛkt/。\nagain 读 /əˈɡɛn/，重音在第二音节。\n节奏：We do NOT ex-PECT ｜ this IS-sue ｜ to HAP-pen a-GAIN.",
    quiz: [
      { q: "预计同样的问题不会再次发生，怎么说？", a: "We do not expect the same issue to happen again." },
      { q: "expect 和 predict 怎么区分？", a: "expect = 基于经验的主观预期（We do not expect…）；predict = 基于数据的客观预测（We predict…）。电话会议中用 expect，因为是基于已采取措施的专业判断。" },
    ],
  },
  {
    id: 1218,
    en: "We will continue monitoring the situation.",
    cn: "我们将继续监控情况。",
    ipa: "/wi wɪl kənˈtɪn.juː ˈmɑː.nɪ.tər.ɪŋ ðə ˌsɪtʃ.uˈeɪ.ʃən/",
    tags: ["第1218句", "电话会议", "★★★★★"],
    when: "承诺持续监控，让客户知道团队没有松懈。这是电话会议中的标准结束语之一。",
    words: [
      { w: "continue", ipa: "/kənˈtɪn.juː/", pos: "动词", cn: "继续", memory: "① con- = 一起/加强；② tinue = 持有（拉丁语 tenere）。\ncontinue = 持续持有 → 继续。\ncontinue + V-ing = 继续做某事。", phonics: "con 读 /kən/，tin 读 /tɪn/，ue 读 /juː/，重音在第二音节。", collocations: [["continue monitoring", "继续监控"], ["continue to work", "继续工作"], ["continue as planned", "按计划继续"]], examples: [["We will continue monitoring overnight.", "我们将通宵持续监控。"], ["Please continue with the next step.", "请继续下一步。"]] },
      { w: "situation", ipa: "/ˌsɪtʃ.uˈeɪ.ʃən/", pos: "名词", cn: "情况；局面", memory: "① situ = 位置（拉丁语 situs）；② situation = 当前的状态/局面。\nthe situation = 当前的整体情况（比 the problem 更宽泛）。", phonics: "sit 读 /sɪtʃ/，u 读 /u/，a 读 /eɪ/，tion 读 /ʃən/，重音在第三音节。", collocations: [["current situation", "当前情况"], ["monitor the situation", "监控情况"], ["situation update", "情况更新"]], examples: [["The situation is under control.", "情况在控制中。"], ["Please update us on the situation.", "请更新情况。"]] },
    ],
    phrases: [
      { p: "continue monitoring", ipa: "/kənˈtɪn.juː ˈmɑː.nɪ.tər.ɪŋ/", cn: "继续监控", why: "continue + V-ing = 继续做某事。monitoring 用动名词形式，因为 continue 后可接 V-ing。" },
    ],
    grammar: [
      { q: "continue monitoring 和 continue to monitor 有什么区别？", a: "continue + V-ing = 继续做（正在做的事）\ncontinue + to V = 继续做（可以是新动作）\n✅ We will continue monitoring the situation.（继续监控 → 已经在监控，继续做）\n✅ We will continue to monitor the situation.（继续监控 → 也正确，略有'继续去做'的意味）\n两种都可以，口语中 V-ing 更自然。" },
    ],
    pattern: "We will continue + V-ing + 对象",
    patternExamples: [
      { en: "We will continue monitoring the system.", cn: "我们将继续监控系统。", words: [{ w: "continue", ipa: "/kənˈtɪnjuː/", cn: "继续", phonics: "con 读 /kən/，tinue 读 /tɪnjuː/" }, { w: "monitoring", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "We will continue investigating the root cause.", cn: "我们将继续调查根因。", words: [{ w: "continue", ipa: "/kənˈtɪnjuː/", cn: "继续", phonics: "con 读 /kən/，tinue 读 /tɪnjuː/" }, { w: "root", ipa: "/ruːt/", cn: "根因", phonics: "root 读 /ruːt/" }, { w: "cause", ipa: "/kɔːz/", cn: "原因", phonics: "cause 读 /kɔːz/" }] },
      { en: "We will continue working on the fix.", cn: "我们将继续修复工作。", words: [{ w: "continue", ipa: "/kənˈtɪnjuː/", cn: "继续", phonics: "con 读 /kən/，tinue 读 /tɪnjuː/" }] },
    ],
    thinking: "电话会议中'继续监控'是必说项，传达三个信息：\n① 团队没有松懈\n② 有专人负责\n③ 如有变化会及时通知\n后续可补充频率：every 30 minutes / hourly / until further notice。",
    pronunciation: "continue 重音在第二音节：/kənˈtɪn.juː/。\nsituation 重音在第三音节：/ˌsɪtʃ.uˈeɪ.ʃən/。\n节奏：We will con-TIN-ue ｜ MON-i-tor-ing ｜ the sit-u-A-tion.",
    quiz: [
      { q: "我们将继续调查根因，怎么说？", a: "We will continue investigating the root cause." },
      { q: "continue monitoring 和 continue to monitor 哪个更自然？", a: "两种都正确。continue + V-ing 更口语自然（继续正在做的事）；continue + to V 略正式（继续去做某事）。电话会议中两种都可以。" },
    ],
  },
  {
    id: 1219,
    en: "We will provide updates every thirty minutes.",
    cn: "我们每三十分钟更新一次进展。",
    ipa: "/wi wɪl prəˈvaɪd ˈʌp.deɪts ˈɛv.ri ˈθɜːr.ti ˈmɪn.ɪts/",
    tags: ["第1219句", "电话会议", "★★★★★"],
    when: "承诺定期更新频率，让客户知道何时能收到下一次进展报告。30分钟是数据中心事件管理的标准更新间隔。",
    words: [
      { w: "provide updates", ipa: "/prəˈvaɪd ˈʌp.deɪts/", pos: "动词短语", cn: "提供更新", memory: "① provide = 提供；② updates = 更新/进展。\nprovide updates = 提供最新情况/进展报告。数据中心事件管理中，定期更新是标准流程。", phonics: "provide 读 /prəˈvaɪd/，updates 读 /ˈʌp.deɪts/。", collocations: [["provide updates", "提供更新"], ["regular updates", "定期更新"], ["status update", "状态更新"]], examples: [["We will provide updates hourly.", "我们每小时更新一次。"], ["Please provide an update on the incident.", "请提供事件进展。"]] },
      { w: "every thirty minutes", ipa: "/ˈɛv.ri ˈθɜːr.ti ˈmɪn.ɪts/", pos: "时间短语", cn: "每三十分钟", memory: "① every = 每；② thirty = 三十；③ minutes = 分钟。\nevery thirty minutes = 每30分钟一次。也可以用 every half hour（每半小时）。", phonics: "every 读 /ˈɛv.ri/，thirty 的 th 读 /θ/（咬舌尖），minutes 读 /ˈmɪn.ɪts/。", collocations: [["every thirty minutes", "每30分钟"], ["every hour", "每小时"], ["every two hours", "每两小时"]], examples: [["We update every thirty minutes.", "我们每30分钟更新一次。"], ["Check every hour.", "每小时检查一次。"]] },
    ],
    phrases: [
      { p: "provide updates every", ipa: "/prəˈvaɪd ˈʌp.deɪts ˈɛv.ri/", cn: "每隔…提供更新", why: "provide + updates + every + 时间间隔 = 定期提供进展报告。这是事件管理中的标准承诺。" },
    ],
    grammar: [
      { q: "every thirty minutes 和 every half hour 一样吗？", a: "意思完全一样，都是'每30分钟'。\n✅ We will provide updates every thirty minutes.\n✅ We will provide updates every half hour.\n口语中 every half hour 更简洁；正式文件中 every thirty minutes 更精确。" },
    ],
    pattern: "We will provide updates every + 时间间隔",
    patternExamples: [
      { en: "We will provide updates every hour.", cn: "我们每小时更新一次。", words: [{ w: "updates", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }] },
      { en: "We will provide updates every fifteen minutes.", cn: "我们每15分钟更新一次。", words: [{ w: "updates", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }] },
      { en: "We will provide updates as soon as there are changes.", cn: "一有变化我们就更新。", words: [{ w: "updates", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }] },
    ],
    thinking: "更新频率是电话会议中客户最关心的承诺之一。\n常见频率：\n① every 15 minutes（紧急事件初期）\n② every 30 minutes（标准事件管理）\n③ every hour（事件稳定后）\n④ as needed（按需，不推荐，客户觉得不可控）\n承诺的频率必须兑现，否则客户信任度下降。",
    pronunciation: "provide 重音在第二音节：/prəˈvaɪd/。\nthirty 的 th 读 /θ/（咬舌尖）：/ˈθɜːr.ti/。\n节奏：We will pro-VIDE ｜ UP-dates ｜ EV-ery THIR-ty MIN-utes.",
    quiz: [
      { q: "我们每小时更新一次，怎么说？", a: "We will provide updates every hour." },
      { q: "every thirty minutes 和 every half hour 有什么区别？", a: "意思完全一样。every thirty minutes 更精确正式；every half hour 更口语简洁。电话会议中两种都可以。" },
    ],
  },
  {
    id: 1220,
    en: "Please let us know if you have any questions.",
    cn: "如果您有任何问题，请告诉我们。",
    ipa: "/pliːz lɛt ʌs noʊ ɪf juː hæv ˈɛn.i ˈkwɛs.tʃənz/",
    tags: ["第1220句", "电话会议", "★★★★★"],
    when: "状态汇报结束后，主动邀请客户提问。这是电话会议中的标准互动环节，表示尊重和开放。",
    words: [
      { w: "let us know", ipa: "/lɛt ʌs noʊ/", pos: "动词短语", cn: "告诉我们；让我们知道", memory: "① let = 让/允许；② us = 我们；③ know = 知道。\nlet us know = 让我们知道 → 告诉我们。\n这是商务英语中最常用的礼貌表达之一。", phonics: "let 读 /lɛt/，us 读 /ʌs/，know 读 /noʊ/。", collocations: [["let us know", "告诉我们"], ["let me know", "让我知道"], ["please let us know", "请告诉我们"]], examples: [["Please let us know your decision.", "请告诉我们您的决定。"], ["Let me know if you need help.", "如果需要帮助请告诉我。"]] },
      { w: "any questions", ipa: "/ˈɛn.i ˈkwɛs.tʃənz/", pos: "名词短语", cn: "任何问题", memory: "① any = 任何（用于疑问和否定句）；② questions = 问题。\nany questions = 任何问题。在肯定句中表示'如果有的话'。", phonics: "any 读 /ˈɛn.i/，questions 读 /ˈkwɛs.tʃənz/。", collocations: [["any questions", "任何问题"], ["any concerns", "任何顾虑"], ["any comments", "任何意见"]], examples: [["Do you have any questions?", "您有任何问题吗？"], ["If you have any concerns, please tell us.", "如有任何顾虑请告诉我们。"]] },
    ],
    phrases: [
      { p: "let us know if", ipa: "/lɛt ʌs noʊ ɪf/", cn: "如果…请告诉我们", why: "let us know + if 条件句 = 如果发生某事请告诉我们。这是邀请对方互动的标准句式。" },
    ],
    grammar: [
      { q: "为什么用 any 而不是 some？", a: "any = 任何（用于疑问句、否定句和条件句）\nsome = 一些（用于肯定句）\n✅ If you have any questions, please let us know.（如果有任何问题 → 条件句用 any）\n✅ I have some questions.（我有一些问题 → 肯定句用 some）\n条件句（if 引导）中用 any，表示'不管有多少'。" },
    ],
    pattern: "Please let us know if you have any + 名词",
    patternExamples: [
      { en: "Please let us know if you have any concerns.", cn: "如果您有任何顾虑，请告诉我们。", words: [] },
      { en: "Please let us know if you need any assistance.", cn: "如果您需要任何协助，请告诉我们。", words: [] },
      { en: "Please let us know if there are any changes.", cn: "如果有任何变化，请告诉我们。", words: [] },
    ],
    thinking: "电话会议中邀请提问的话术：\n① Please let us know if you have any questions.（标准邀请）\n② Are there any questions?（直接询问）\n③ We welcome any questions or feedback.（更开放）\n主动邀请提问表示专业和透明，避免客户有疑虑但不敢问。",
    pronunciation: "let 读 /lɛt/，不是 /liːt/。\nquestions 的 t 和 ch 连读 /tʃ/。\n节奏：Please LET us KNOW ｜ if you HAVE ｜ an-y QUES-tions.",
    quiz: [
      { q: "如果您有任何顾虑请告诉我们，怎么说？", a: "Please let us know if you have any concerns." },
      { q: "条件句中为什么用 any 不用 some？", a: "if 引导的条件句中用 any，表示'不管有多少/任何'。some 用于肯定句。这是英语语法的基本规则。" },
    ],
  },
  {
    id: 1221,
    en: "We apologize for the inconvenience.",
    cn: "对于给您带来的不便，我们深表歉意。",
    ipa: "/wi əˈpɑː.lə.dʒaɪz fɔːr ði ˌɪn.kənˈviː.ni.əns/",
    tags: ["第1221句", "电话会议", "★★★★★"],
    when: "事件影响客户业务时，必须正式道歉。这是电话会议中不可或缺的礼仪环节，即使问题已解决。",
    words: [
      { w: "apologize", ipa: "/əˈpɑː.lə.dʒaɪz/", pos: "动词", cn: "道歉", memory: "① apo- = 远离/辩解（希腊语）；② log = 话语（希腊语 logos）。\napologize = 为自己的行为辩解 → 道歉。\n注意拼写：美式 apologize，英式 apologise。", phonics: "a 读 /ə/，pol 读 /pɑː/，o 读 /ə/，gize 读 /dʒaɪz/，重音在第二音节。", collocations: [["apologize for", "为…道歉"], ["sincerely apologize", "真诚道歉"], ["apologize to", "向…道歉"]], examples: [["We sincerely apologize for the delay.", "我们对延误深表歉意。"], ["I apologize for the confusion.", "我为造成的困惑道歉。"]] },
      { w: "inconvenience", ipa: "/ˌɪn.kənˈviː.ni.əns/", pos: "名词", cn: "不便；麻烦", memory: "① in- = 不；② con- = 一起；③ ven = 来（拉丁语 venire）；④ -ience = 名词后缀。\ninconvenience = 不方便一起来 → 不便/麻烦。\napologize for the inconvenience = 为不便道歉（商务标准用语）。", phonics: "in 读 /ɪn/，con 读 /kən/，ve 读 /viː/，nience 读 /ni.əns/，重音在第三音节。", collocations: [["for the inconvenience", "为不便"], ["cause inconvenience", "造成不便"], ["any inconvenience", "任何不便"]], examples: [["We apologize for any inconvenience caused.", "我们对造成的任何不便表示歉意。"], ["Sorry for the inconvenience.", "抱歉给您带来不便。"]] },
    ],
    phrases: [
      { p: "apologize for the inconvenience", ipa: "/əˈpɑː.lə.dʒaɪz fɔːr ði ˌɪn.kənˈviː.ni.əns/", cn: "为不便道歉", why: "这是商务英语中最标准的道歉句式之一。for + the + inconvenience = 因为带来的不便。" },
    ],
    grammar: [
      { q: "apologize for 后面接什么？", a: "apologize for + 名词/动名词\n✅ We apologize for the inconvenience.（为不便道歉 → for + 名词）\n✅ We apologize for causing the issue.（为造成问题道歉 → for + 动名词）\n❌ We apologize the inconvenience.（错误，缺少 for）\nfor 不能省略。" },
    ],
    pattern: "We apologize for + 名词/动名词",
    patternExamples: [
      { en: "We apologize for the delay.", cn: "我们对延误表示歉意。", words: [] },
      { en: "We apologize for any disruption to your services.", cn: "我们对您业务的任何中断表示歉意。", words: [] },
      { en: "We apologize for not informing you sooner.", cn: "我们对没有更早通知您表示歉意。", words: [] },
    ],
    thinking: "数据中心电话会议中的道歉层级：\n① We apologize for the inconvenience.（标准道歉 → 适用于大多数情况）\n② We sincerely apologize for the impact on your business.（真诚道歉 → 影响较大时）\n③ We deeply regret the service disruption and take full responsibility.（深切遗憾并承担责任 → 重大事故时）\n道歉必须真诚，不要推卸责任。",
    pronunciation: "apologize 重音在第二音节：/əˈpɑː.lə.dʒaɪz/。\ninconvenience 重音在第三音节：/ˌɪn.kənˈviː.ni.əns/。\n节奏：We a-POL-o-gize ｜ for the ｜ in-con-VE-ni-ence.",
    quiz: [
      { q: "我们对延误表示歉意，怎么说？", a: "We apologize for the delay." },
      { q: "apologize 后面一定要加 for 吗？", a: "是的。apologize for + 名词/动名词 是固定搭配。不能说 We apologize the inconvenience（缺少 for），必须说 We apologize for the inconvenience。" },
    ],
  },
  {
    id: 1222,
    en: "Thank you for your patience.",
    cn: "感谢您的耐心等待。",
    ipa: "/θæŋk juː fɔːr jʊr ˈpeɪ.ʃəns/",
    tags: ["第1222句", "电话会议", "★★★★★"],
    when: "道歉之后感谢客户的耐心，这是标准的商务礼仪组合：道歉 + 感谢。让客户感受到被尊重。",
    words: [
      { w: "patience", ipa: "/ˈpeɪ.ʃəns/", pos: "名词", cn: "耐心；忍耐", memory: "① patient = 耐心的（形容词）/ 病人（名词）；② patience = 耐心（名词）。\nthank you for your patience = 感谢您的耐心（等待期间的礼貌用语）。", phonics: "pa 读 /peɪ/，tience 读 /ʃəns/。注意 t 在这里发 /ʃ/ 音。", collocations: [["for your patience", "感谢您的耐心"], ["with patience", "耐心地"], ["lose patience", "失去耐心"]], examples: [["Thank you for your patience during the outage.", "感谢您在停机期间的耐心等待。"], ["We appreciate your patience.", "我们感谢您的耐心。"]] },
    ],
    phrases: [
      { p: "thank you for your patience", ipa: "/θæŋk juː fɔːr jʊr ˈpeɪ.ʃəns/", cn: "感谢您的耐心", why: "thank you for + 名词 = 感谢某事/某物。your patience = 您的耐心等待。这是事件处理中最常用的感谢语。" },
    ],
    grammar: [
      { q: "patience 和 patient 怎么区分？", a: "patience = 耐心（名词）\npatient = 耐心的（形容词）/ 病人（名词）\n✅ Thank you for your patience.（感谢您的耐心 → 名词）\n✅ Please be patient.（请耐心等待 → 形容词）\n✅ The patient is waiting.（病人在等 → 名词，另一个意思）\nthank you for 后面接名词 patience。" },
    ],
    pattern: "Thank you for your + 名词",
    patternExamples: [
      { en: "Thank you for your understanding.", cn: "感谢您的理解。", words: [{ w: "thank", ipa: "/θæŋk/", cn: "感谢", phonics: "th 读 /θ/，ank 读 /æŋk/" }] },
      { en: "Thank you for your cooperation.", cn: "感谢您的配合。", words: [{ w: "thank", ipa: "/θæŋk/", cn: "感谢", phonics: "th 读 /θ/，ank 读 /æŋk/" }] },
      { en: "Thank you for your support.", cn: "感谢您的支持。", words: [{ w: "thank", ipa: "/θæŋk/", cn: "感谢", phonics: "th 读 /θ/，ank 读 /æŋk/" }, { w: "support", ipa: "/səˈpɔːrt/", cn: "支持", phonics: "sup 读 /sə/，port 读 /pɔːrt/" }] },
    ],
    thinking: "电话会议中道歉+感谢的标准组合：\n① We apologize for the inconvenience. Thank you for your patience.（道歉+感谢耐心 → 最常用）\n② Sorry for the disruption. We appreciate your understanding.（道歉+感谢理解）\n③ We regret the impact. Thank you for your continued support.（遗憾+感谢支持）\n道歉和感谢必须配对，不能只道歉不感谢。",
    pronunciation: "patience 的 t 发 /ʃ/ 音：/ˈpeɪ.ʃəns/，不要读成 /ˈpeɪ.ti.əns/。\n节奏：THANK you ｜ for your PA-tience.",
    quiz: [
      { q: "感谢您的理解，怎么说？", a: "Thank you for your understanding." },
      { q: "patience 和 patient 怎么区分？", a: "patience = 耐心（名词），用在 thank you for your patience；patient = 耐心的（形容词），用在 please be patient；patient 还可以是'病人'（名词）。" },
    ],
  },
  {
    id: 1223,
    en: "We appreciate your understanding.",
    cn: "感谢您的理解。",
    ipa: "/wi əˈpriː.ʃi.eɪt jʊr ˌʌn.dərˈstæn.dɪŋ/",
    tags: ["第1223句", "电话会议", "★★★★★"],
    when: "进一步感谢客户的理解和包容。appreciate 比 thank you 更正式，表达更深的感激。",
    words: [
      { w: "appreciate", ipa: "/əˈpriː.ʃi.eɪt/", pos: "动词", cn: "感激；欣赏", memory: "① ap- = 朝向（拉丁语 ad-）；② preci = 价值（拉丁语 pretium）。\nappreciate = 认识到价值 → 感激/欣赏。\n比 thank you 更正式，表达更深的感激之情。", phonics: "ap 读 /ə/，pre 读 /priː/，ci 读 /ʃi/，ate 读 /eɪt/，重音在第二音节。", collocations: [["appreciate your understanding", "感激您的理解"], ["greatly appreciate", "非常感激"], ["appreciate your help", "感激您的帮助"]], examples: [["We appreciate your cooperation.", "我们感激您的配合。"], ["I greatly appreciate your support.", "我非常感激您的支持。"]] },
      { w: "understanding", ipa: "/ˌʌn.dərˈstæn.dɪŋ/", pos: "名词", cn: "理解；体谅", memory: "① under- = 在…之间；② stand = 站立。\nunderstanding = 站在对方立场 → 理解/体谅。\nyour understanding = 您的理解和包容。", phonics: "un 读 /ʌn/，der 读 /dər/，stand 读 /stæn/，ing 读 /dɪŋ/，重音在第三音节。", collocations: [["your understanding", "您的理解"], ["mutual understanding", "相互理解"], ["thank you for your understanding", "感谢您的理解"]], examples: [["We appreciate your understanding during this time.", "我们感激您在此期间的理解。"], ["Thank you for your understanding and patience.", "感谢您的理解和耐心。"]] },
    ],
    phrases: [
      { p: "appreciate your understanding", ipa: "/əˈpriː.ʃi.eɪt jʊr ˌʌn.dərˈstæn.dɪŋ/", cn: "感激您的理解", why: "appreciate + 名词 = 感激某事。your understanding = 您的理解/体谅。比 thank you for 更正式。" },
    ],
    grammar: [
      { q: "appreciate 和 thank you 有什么区别？", a: "appreciate = 感激（更正式，表达更深的感激）\nthank you = 感谢（更通用，日常使用）\n✅ We appreciate your understanding.（我们感激您的理解 → 正式、深情）\n✅ Thank you for your understanding.（感谢您的理解 → 标准、通用）\n电话会议中两种都可以，appreciate 显得更真诚。" },
    ],
    pattern: "We appreciate your + 名词",
    patternExamples: [
      { en: "We appreciate your cooperation.", cn: "我们感激您的配合。", words: [] },
      { en: "We appreciate your continued support.", cn: "我们感激您的持续支持。", words: [{ w: "support", ipa: "/səˈpɔːrt/", cn: "支持", phonics: "sup 读 /sə/，port 读 /pɔːrt/" }] },
      { en: "We appreciate your flexibility.", cn: "我们感激您的灵活配合。", words: [] },
    ],
    thinking: "感谢的层级（从弱到强）：\n① Thank you for your patience.（感谢耐心 → 标准）\n② We appreciate your understanding.（感激理解 → 更正式）\n③ We are deeply grateful for your continued trust.（深切感激持续信任 → 最强）\n根据事件严重程度选择合适层级。",
    pronunciation: "appreciate 重音在第二音节：/əˈpriː.ʃi.eɪt/。\nunderstanding 重音在第三音节：/ˌʌn.dərˈstæn.dɪŋ/。\n节奏：We ap-PRE-ci-ate ｜ your un-der-STAND-ing.",
    quiz: [
      { q: "我们感激您的配合，怎么说？", a: "We appreciate your cooperation." },
      { q: "appreciate 和 thank you 哪个更正式？", a: "appreciate 更正式，表达更深的感激之情。thank you 更通用日常。电话会议中两种都可以，appreciate 显得更真诚和专业。" },
    ],
  },
  {
    id: 1224,
    en: "The incident report will be sent today.",
    cn: "今天会发送事件报告。",
    ipa: "/ði ˈɪn.sɪ.dənt rɪˈpɔːrt wɪl biː sɛnt təˈdeɪ/",
    tags: ["第1224句", "电话会议", "★★★★★"],
    when: "承诺事件报告的发送时间。incident report 是事件发生后的初步报告，包含时间线、影响范围、初步原因。",
    words: [
      { w: "incident report", ipa: "/ˈɪn.sɪ.dənt rɪˈpɔːrt/", pos: "名词", cn: "事件报告", memory: "① incident = 事件/事故；② report = 报告。\nincident report = 事件报告（初步报告，事件发生后24小时内发出）。\n区别于 RCA report（根因分析报告，更深入，通常5个工作日内发出）。", phonics: "incident 重音在第一音节：/ˈɪn.sɪ.dənt/。report 重音在第二音节：/rɪˈpɔːrt/。", collocations: [["incident report", "事件报告"], ["preliminary report", "初步报告"], ["final report", "最终报告"]], examples: [["The incident report is ready.", "事件报告已准备好。"], ["Please review the incident report.", "请审核事件报告。"]] },
      { w: "sent", ipa: "/sɛnt/", pos: "动词(过去分词)", cn: "发送", memory: "① send = 发送；② sent = send 的过去式和过去分词。\nwill be sent = 将被发送（将来被动语态）。", phonics: "sent 读 /sɛnt/，e 读短音 /ɛ/。", collocations: [["will be sent", "将被发送"], ["sent by email", "通过邮件发送"], ["sent to", "发送给"]], examples: [["The report will be sent by email.", "报告将通过邮件发送。"], ["It was sent yesterday.", "昨天已经发送了。"]] },
    ],
    phrases: [
      { p: "will be sent today", ipa: "/wɪl biː sɛnt təˈdeɪ/", cn: "今天将发送", why: "will be + 过去分词 = 将来被动语态，表示'将被…'。today 限定发送时间。" },
    ],
    grammar: [
      { q: "will be sent 和 will send 有什么区别？", a: "will be sent = 将被发送（被动语态，主语是报告）\nwill send = 将发送（主动语态，主语是人）\n✅ The incident report will be sent today.（报告将被发送 → 被动，强调报告）\n✅ We will send the incident report today.（我们将发送报告 → 主动，强调我们）\n两种都正确，被动语态更正式，常用于承诺时间。" },
    ],
    pattern: "The + 报告类型 + will be sent + 时间",
    patternExamples: [
      { en: "The RCA report will be sent within 5 business days.", cn: "根因分析报告将在5个工作日内发送。", words: [{ w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }, { w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }] },
      { en: "The preliminary report will be sent tomorrow.", cn: "初步报告将在明天发送。", words: [{ w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
      { en: "The final report will be sent next week.", cn: "最终报告将在下周发送。", words: [{ w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
    ],
    thinking: "数据中心事件报告体系：\n① Incident Report（事件报告）→ 24小时内，初步时间线和影响\n② RCA Report（根因分析报告）→ 5个工作日内，深度分析和纠正措施\n③ Final Report（最终报告）→ 10个工作日内，完整总结和预防措施\n电话会议中必须明确承诺发送时间。",
    pronunciation: "incident 重音在第一音节：/ˈɪn.sɪ.dənt/。\nreport 重音在第二音节：/rɪˈpɔːrt/。\n节奏：The IN-ci-dent re-PORT ｜ will be SENT ｜ to-DAY.",
    quiz: [
      { q: "根因分析报告将在5个工作日内发送，怎么说？", a: "The RCA report will be sent within 5 business days." },
      { q: "will be sent 和 will send 怎么区分？", a: "will be sent = 被动语态（报告将被发送）；will send = 主动语态（我们将发送报告）。两种都正确，被动更正式。" },
    ],
  },
  {
    id: 1225,
    en: "The RCA report will be completed within twenty-four hours.",
    cn: "根因分析报告将在24小时内完成。",
    ipa: "/ði ˌɑːr.siːˈeɪ rɪˈpɔːrt wɪl biː kəmˈpliː.tɪd wɪˈðɪn ˈtwɛn.ti fɔːr aʊərz/",
    tags: ["第1225句", "电话会议", "★★★★★"],
    when: "承诺RCA报告的完成时间。RCA = Root Cause Analysis（根因分析），是事件管理中最深入的报告。",
    words: [
      { w: "RCA", ipa: "/ˌɑːr.siːˈeɪ/", pos: "名词", cn: "根因分析", memory: "RCA = Root Cause Analysis（根因分析）。\nRCA report = 根因分析报告，包含：事件时间线、根本原因、影响分析、纠正措施、预防措施。\n通常由高级工程师编写，管理层审批。", phonics: "逐字母读 R-C-A：/ˌɑːr.siːˈeɪ/。不要读成单词。", collocations: [["RCA report", "根因分析报告"], ["conduct RCA", "进行根因分析"], ["RCA findings", "根因分析结果"]], examples: [["The RCA is in progress.", "根因分析正在进行中。"], ["Please review the RCA report.", "请审核根因分析报告。"]] },
      { w: "completed", ipa: "/kəmˈpliː.tɪd/", pos: "动词(过去分词)", cn: "完成", memory: "① complete = 完成（强调做完所有部分）；② completed = 已完成的。\nwill be completed = 将被完成（将来被动语态）。", phonics: "com 读 /kəm/，plet 读 /pliː/，ed 读 /tɪd/，重音在第二音节。", collocations: [["will be completed", "将被完成"], ["completed on time", "按时完成"], ["successfully completed", "成功完成"]], examples: [["The work will be completed by Friday.", "工作将在周五前完成。"], ["The RCA has been completed.", "根因分析已完成。"]] },
      { w: "within", ipa: "/wɪˈðɪn/", pos: "介词", cn: "在…之内", memory: "① with = 与/在；② in = 在…里面。\nwithin = 在…时间范围内（不超过）。\nwithin 24 hours = 24小时内（不超过24小时）。", phonics: "with 读 /wɪð/，in 读 /ɪn/。th 读 /ð/（浊音，不是 /θ/）。", collocations: [["within 24 hours", "24小时内"], ["within a week", "一周内"], ["within the deadline", "在截止日期内"]], examples: [["Please respond within 4 hours.", "请在4小时内回复。"], ["The fix will be deployed within 48 hours.", "修复将在48小时内部署。"]] },
    ],
    phrases: [
      { p: "within twenty-four hours", ipa: "/wɪˈðɪn ˈtwɛn.ti fɔːr aʊərz/", cn: "24小时内", why: "within + 时间 = 在…时间范围内。twenty-four hours = 24小时。也可以用 within one day。" },
    ],
    grammar: [
      { q: "within 和 in 表示时间有什么区别？", a: "within = 在…之内（不超过，强调上限）\nin = 在…之后（经过…时间后）\n✅ The report will be completed within 24 hours.（24小时内完成 → 不超过24小时）\n✅ The report will be completed in 24 hours.（24小时后完成 → 大约24小时）\n承诺时间用 within，因为表示'最迟不超过'。" },
    ],
    pattern: "The + 报告 + will be completed within + 时间",
    patternExamples: [
      { en: "The investigation will be completed within 48 hours.", cn: "调查将在48小时内完成。", words: [{ w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }] },
      { en: "The corrective actions will be completed within one week.", cn: "纠正措施将在一周内完成。", words: [{ w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }] },
      { en: "The review will be completed within 3 business days.", cn: "审核将在3个工作日内完成。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "within", ipa: "/wɪˈðɪn/", cn: "范围内", phonics: "with 读 /wɪð/，in 读 /ɪn/" }] },
    ],
    thinking: "RCA 报告是数据中心事件管理的核心交付物：\n① 事件时间线（精确到分钟）\n② 根本原因（5 Whys / Fishbone / Fault Tree）\n③ 影响范围（哪些客户/设备受影响）\n④ 纠正措施（已做的修复）\n⑤ 预防措施（防止复发的长期措施）\n⑥ 经验教训（组织学习）",
    pronunciation: "RCA 逐字母读：/ˌɑːr.siːˈeɪ/。\nwithin 的 th 读浊音 /ð/：/wɪˈðɪn/。\n节奏：The R-C-A re-PORT ｜ will be com-PLET-ed ｜ with-in TWEN-ty-FOUR HOURS.",
    quiz: [
      { q: "调查将在48小时内完成，怎么说？", a: "The investigation will be completed within 48 hours." },
      { q: "within 和 in 表示时间有什么区别？", a: "within = 在…之内，不超过（The report will be completed within 24 hours = 最迟24小时）；in = 大约…时间后（in 24 hours = 大约24小时后）。承诺时间用 within。" },
    ],
  },
  {
    id: 1226,
    en: "Corrective actions have been completed.",
    cn: "纠正措施已经完成。",
    ipa: "/kəˈrɛk.tɪv ˈæk.ʃənz hæv biːn kəmˈpliː.tɪd/",
    tags: ["第1226句", "电话会议", "★★★★★"],
    when: "向客户汇报纠正措施已完成。corrective actions = 针对根因的修复措施，区别于 preventive actions（预防措施）。",
    words: [
      { w: "corrective", ipa: "/kəˈrɛk.tɪv/", pos: "形容词", cn: "纠正的；矫正的", memory: "① correct = 正确的/纠正；② corrective = 纠正性的。\ncorrective actions = 纠正措施（针对已发生问题的修复）。\n对比：preventive actions = 预防措施（防止问题发生）。", phonics: "cor 读 /kə/，rec 读 /rɛk/，tive 读 /tɪv/，重音在第二音节。", collocations: [["corrective actions", "纠正措施"], ["corrective measures", "纠正措施"], ["corrective action plan", "纠正措施计划"]], examples: [["Corrective actions have been implemented.", "纠正措施已实施。"], ["We need a corrective action plan.", "我们需要纠正措施计划。"]] },
      { w: "actions", ipa: "/ˈæk.ʃənz/", pos: "名词", cn: "措施；行动", memory: "① action = 行动/措施；② actions = 多个措施。\n在事件管理中，actions 指具体的修复步骤。", phonics: "ac 读 /æk/，tions 读 /ʃənz/。", collocations: [["take action", "采取措施"], ["action items", "行动项"], ["action plan", "行动计划"]], examples: [["Immediate actions have been taken.", "已采取紧急措施。"], ["Please list all action items.", "请列出所有行动项。"]] },
    ],
    phrases: [
      { p: "corrective actions", ipa: "/kəˈrɛk.tɪv ˈæk.ʃənz/", cn: "纠正措施", why: "corrective + actions = 纠正措施。这是事件管理中的标准术语，区别于 preventive actions（预防措施）。" },
    ],
    grammar: [
      { q: "corrective actions 和 preventive actions 有什么区别？", a: "corrective actions = 纠正措施（修复已发生的问题）\npreventive actions = 预防措施（防止问题再次发生）\n✅ Corrective actions: replace the failed component.（纠正：更换故障组件）\n✅ Preventive actions: add redundancy to prevent future failures.（预防：增加冗余防止未来故障）\n两者通常一起出现在 RCA 报告中。" },
    ],
    pattern: "Corrective actions have been + 过去分词",
    patternExamples: [
      { en: "Corrective actions have been implemented.", cn: "纠正措施已实施。", words: [] },
      { en: "Corrective actions have been verified.", cn: "纠正措施已验证。", words: [{ w: "verified", ipa: "/ˈvɛrɪfaɪ/", cn: "核实", phonics: "ver 读 /vɛr/，ify 读 /aɪfaɪ/" }] },
      { en: "Corrective actions are in progress.", cn: "纠正措施正在进行中。", words: [] },
    ],
    thinking: "CAPA 体系（Corrective And Preventive Actions）：\n① Corrective Actions（纠正措施）→ 修复当前问题\n② Preventive Actions（预防措施）→ 防止问题复发\n③ Both are tracked in the CAPA register\nRCA 报告中必须同时包含两类措施。",
    pronunciation: "corrective 重音在第二音节：/kəˈrɛk.tɪv/。\nactions 的 c 读 /k/：/ˈæk.ʃənz/。\n节奏：cor-REC-tive AC-tions ｜ have been com-PLET-ed.",
    quiz: [
      { q: "纠正措施已实施，怎么说？", a: "Corrective actions have been implemented." },
      { q: "corrective actions 和 preventive actions 怎么区分？", a: "corrective actions = 纠正措施（修复已发生的问题，如更换故障部件）；preventive actions = 预防措施（防止问题再次发生，如增加冗余）。RCA 报告中两者都要有。" },
    ],
  },
  {
    id: 1227,
    en: "Preventive actions are in progress.",
    cn: "预防措施正在进行中。",
    ipa: "/prɪˈvɛn.tɪv ˈæk.ʃənz ɑːr ɪn ˈprɑː.ɡrɛs/",
    tags: ["第1227句", "电话会议", "★★★★★"],
    when: "告知客户预防措施还在进行中。预防措施通常需要更长时间（如增加冗余、修改架构），所以用 in progress。",
    words: [
      { w: "preventive", ipa: "/prɪˈvɛn.tɪv/", pos: "形容词", cn: "预防的；防止的", memory: "① prevent = 预防/防止；② preventive = 预防性的。\npreventive actions = 预防措施（防止问题再次发生的长期措施）。\n对比：corrective actions = 纠正措施（修复已发生的问题）。", phonics: "pre 读 /prɪ/，ven 读 /vɛn/，tive 读 /tɪv/，重音在第二音节。", collocations: [["preventive actions", "预防措施"], ["preventive maintenance", "预防性维护"], ["preventive measures", "预防措施"]], examples: [["Preventive maintenance is scheduled for next month.", "预防性维护安排在下个月。"], ["We implemented preventive measures.", "我们实施了预防措施。"]] },
      { w: "in progress", ipa: "/ɪn ˈprɑː.ɡrɛs/", pos: "介词短语", cn: "进行中", memory: "① in = 在…中；② progress = 进展/进步。\nin progress = 正在进行中。\n表示某事已经开始但尚未完成。", phonics: "in 读 /ɪn/，progress 重音在第二音节：/ˈprɑː.ɡrɛs/。", collocations: [["in progress", "进行中"], ["work in progress", "进行中的工作"], ["currently in progress", "目前正在进行"]], examples: [["The investigation is in progress.", "调查正在进行中。"], ["Repairs are in progress.", "修复正在进行中。"]] },
    ],
    phrases: [
      { p: "are in progress", ipa: "/ɑːr ɪn ˈprɑː.ɡrɛs/", cn: "正在进行中", why: "be + in progress = 正在进行中。比 are being done 更简洁正式。" },
    ],
    grammar: [
      { q: "in progress 和 ongoing 有什么区别？", a: "in progress = 进行中（强调动作正在发生）\nongoing = 持续的/进行中的（形容词，强调状态）\n✅ Preventive actions are in progress.（预防措施正在进行中 → 强调动作）\n✅ Preventive actions are ongoing.（预防措施持续进行中 → 强调状态）\n两种都正确，in progress 更常用。" },
    ],
    pattern: "Preventive actions are + 状态",
    patternExamples: [
      { en: "Preventive actions are in progress.", cn: "预防措施正在进行中。", words: [{ w: "preventive", ipa: "/prɪˈvɛntɪv/", cn: "预防性", phonics: "pre 读 /prɪ/，ventive 读 /vɛntɪv/" }] },
      { en: "Preventive actions have been completed.", cn: "预防措施已完成。", words: [{ w: "preventive", ipa: "/prɪˈvɛntɪv/", cn: "预防性", phonics: "pre 读 /prɪ/，ventive 读 /vɛntɪv/" }] },
      { en: "Preventive actions are scheduled for next quarter.", cn: "预防措施安排在下个季度。", words: [{ w: "preventive", ipa: "/prɪˈvɛntɪv/", cn: "预防性", phonics: "pre 读 /prɪ/，ventive 读 /vɛntɪv/" }] },
    ],
    thinking: "预防措施通常需要更长时间，因为涉及：\n① 架构变更（增加冗余）\n② 流程修改（更新SOP）\n③ 设备采购（更换老旧设备）\n④ 人员培训（提升技能）\n电话会议中用 in progress 表示'已启动但未完成'，比 not yet done 更积极。",
    pronunciation: "preventive 重音在第二音节：/prɪˈvɛn.tɪv/。\nprogress 重音在第二音节：/ˈprɑː.ɡrɛs/。\n节奏：pre-VEN-tive AC-tions ｜ are in PRO-gress.",
    quiz: [
      { q: "预防措施已完成，怎么说？", a: "Preventive actions have been completed." },
      { q: "in progress 和 ongoing 怎么区分？", a: "in progress = 正在进行中（强调动作）；ongoing = 持续的（形容词，强调状态）。两种都正确，in progress 更常用。" },
    ],
  },
  {
    id: 1228,
    en: "We will keep you informed of any changes.",
    cn: "如有任何变化，我们会及时通知您。",
    ipa: "/wi wɪl kiːp juː ɪnˈfɔːrmd ɒv ˈɛn.i ˈtʃeɪn.dʒɪz/",
    tags: ["第1228句", "电话会议", "★★★★★"],
    when: "承诺持续沟通，让客户知道如有新情况会第一时间通知。keep someone informed = 让某人持续了解情况。",
    words: [
      { w: "keep informed", ipa: "/kiːp ɪnˈfɔːrmd/", pos: "动词短语", cn: "保持通知；持续告知", memory: "① keep = 保持；② informed = 被通知的/了解情况的。\nkeep someone informed = 让某人持续了解情况。\n这是商务沟通中的标准承诺。", phonics: "keep 读 /kiːp/，informed 读 /ɪnˈfɔːrmd/。", collocations: [["keep you informed", "让您了解"], ["keep us informed", "让我们了解"], ["keep everyone informed", "让所有人了解"]], examples: [["We will keep you informed of the progress.", "我们会让您了解进展。"], ["Please keep us informed of any changes.", "如有变化请通知我们。"]] },
      { w: "changes", ipa: "/ˈtʃeɪn.dʒɪz/", pos: "名词", cn: "变化；变更", memory: "① change = 变化/变更；② changes = 多个变化。\nany changes = 任何变化。在事件管理中，变化可能包括：状态变化、新发现、进展等。", phonics: "chang 读 /tʃeɪn/，es 读 /dʒɪz/。", collocations: [["any changes", "任何变化"], ["status changes", "状态变化"], ["schedule changes", "计划变更"]], examples: [["Notify us of any changes.", "有任何变化通知我们。"], ["There are no changes at this time.", "目前没有变化。"]] },
    ],
    phrases: [
      { p: "keep you informed of", ipa: "/kiːp juː ɪnˈfɔːrmd ɒv/", cn: "让您了解…", why: "keep + 某人 + informed + of + 事项 = 让某人持续了解某事。of 后面接具体事项。" },
    ],
    grammar: [
      { q: "keep informed 和 update 有什么区别？", a: "keep informed = 持续通知（强调连续性，保持对方了解）\nupdate = 更新（强调每次提供新信息）\n✅ We will keep you informed of any changes.（持续通知变化 → 强调不间断）\n✅ We will update you every 30 minutes.（每30分钟更新 → 强调频率）\n两种可以配合使用。" },
    ],
    pattern: "We will keep you informed of + 事项",
    patternExamples: [
      { en: "We will keep you informed of the progress.", cn: "我们会让您了解进展。", words: [] },
      { en: "We will keep you informed of any developments.", cn: "我们会让您了解任何发展。", words: [] },
      { en: "We will keep you informed as the situation evolves.", cn: "随着情况发展我们会持续通知您。", words: [] },
    ],
    thinking: "电话会议中的沟通承诺组合：\n① We will provide updates every 30 minutes.（定期更新 → 有频率）\n② We will keep you informed of any changes.（变化通知 → 有事件触发）\n③ Please contact us if you have questions.（开放通道 → 随时可问）\n三者配合确保沟通无死角。",
    pronunciation: "keep 读 /kiːp/，长音 /iː/。\ninformed 重音在第二音节：/ɪnˈfɔːrmd/。\n节奏：We will KEEP you ｜ in-FORMED ｜ of an-y CHANG-es.",
    quiz: [
      { q: "我们会让您了解进展，怎么说？", a: "We will keep you informed of the progress." },
      { q: "keep informed 和 update 怎么区分？", a: "keep informed = 持续通知（强调不间断）；update = 更新（强调每次提供新信息，有频率）。电话会议中两者配合使用。" },
    ],
  },
  {
    id: 1229,
    en: "Thank you for attending today's meeting.",
    cn: "感谢大家参加今天的会议。",
    ipa: "/θæŋk juː fɔːr əˈtɛn.dɪŋ təˈdeɪz ˈmiː.tɪŋ/",
    tags: ["第1229句", "电话会议", "★★★★★"],
    when: "会议结束前感谢所有参会者。attending = 出席/参加，比 joining 更正式。",
    words: [
      { w: "attending", ipa: "/əˈtɛn.dɪŋ/", pos: "动词(动名词)", cn: "参加；出席", memory: "① attend = 出席/参加（正式用语）；② attending = 正在参加。\nattend 比 join 更正式，常用于正式会议、活动。\n注意：attend to = 处理/照料（另一个意思）。", phonics: "at 读 /ə/，tend 读 /tɛn/，ing 读 /dɪŋ/，重音在第二音节。", collocations: [["attend a meeting", "参加会议"], ["attend training", "参加培训"], ["attend the ceremony", "出席仪式"]], examples: [["Thank you for attending.", "感谢出席。"], ["All engineers must attend the safety briefing.", "所有工程师必须参加安全简报。"]] },
      { w: "today's", ipa: "/təˈdeɪz/", pos: "名词(所有格)", cn: "今天的", memory: "① today = 今天；② today's = 今天的（所有格）。\ntoday's meeting = 今天的会议。", phonics: "today 读 /təˈdeɪ/，加 's 读 /z/。", collocations: [["today's meeting", "今天的会议"], ["today's agenda", "今天的议程"], ["today's report", "今天的报告"]], examples: [["Let's review today's agenda.", "让我们看看今天的议程。"], ["Today's incident was resolved quickly.", "今天的事件很快解决了。"]] },
    ],
    phrases: [
      { p: "thank you for attending", ipa: "/θæŋk juː fɔːr əˈtɛn.dɪŋ/", cn: "感谢参加", why: "thank you for + V-ing = 感谢做某事。attending = 参加（动名词）。这是会议结束时的标准感谢语。" },
    ],
    grammar: [
      { q: "attend 和 join 有什么区别？", a: "attend = 出席/参加（正式用语，强调到场）\njoin = 加入/参加（更口语化，强调参与）\n✅ Thank you for attending today's meeting.（感谢出席 → 正式）\n✅ Thank you for joining today's call.（感谢加入 → 更口语）\n正式会议用 attend，电话会议两种都可以。" },
    ],
    pattern: "Thank you for attending + 活动",
    patternExamples: [
      { en: "Thank you for attending the review meeting.", cn: "感谢参加审核会议。", words: [{ w: "thank", ipa: "/θæŋk/", cn: "感谢", phonics: "th 读 /θ/，ank 读 /æŋk/" }, { w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "meeting", ipa: "/ˈmiːtɪŋ/", cn: "会议", phonics: "meet 读 /miːt/，ing 读 /ɪŋ/" }] },
      { en: "Thank you for attending the training session.", cn: "感谢参加培训。", words: [{ w: "thank", ipa: "/θæŋk/", cn: "感谢", phonics: "th 读 /θ/，ank 读 /æŋk/" }] },
      { en: "Thank you for attending on short notice.", cn: "感谢临时通知还能参加。", words: [{ w: "thank", ipa: "/θæŋk/", cn: "感谢", phonics: "th 读 /θ/，ank 读 /æŋk/" }] },
    ],
    thinking: "会议结束时的感谢语：\n① Thank you for attending today's meeting.（感谢参加 → 标准）\n② Thank you for your time and attention.（感谢时间和关注 → 更礼貌）\n③ Thank you all for your valuable input.（感谢大家的宝贵意见 → 有互动时）\n根据会议性质选择合适的感谢语。",
    pronunciation: "attending 重音在第二音节：/əˈtɛn.dɪŋ/。\ntoday's 加 's 读 /z/：/təˈdeɪz/。\n节奏：THANK you ｜ for at-TEND-ing ｜ to-DAY's MEET-ing.",
    quiz: [
      { q: "感谢参加培训，怎么说？", a: "Thank you for attending the training session." },
      { q: "attend 和 join 怎么区分？", a: "attend = 出席/参加（正式用语）；join = 加入/参加（口语化）。正式会议用 attend，电话会议两种都可以。" },
    ],
  },
  {
    id: 1230,
    en: "This meeting is now concluded.",
    cn: "本次会议到此结束。",
    ipa: "/ðɪs ˈmiː.tɪŋ ɪz naʊ kənˈkluː.dɪd/",
    tags: ["第1230句", "电话会议", "★★★★★"],
    when: "正式宣布会议结束。concluded = 结束的/完结的，比 finished 更正式。这是电话会议的最后一句话。",
    words: [
      { w: "concluded", ipa: "/kənˈkluː.dɪd/", pos: "动词(过去分词)", cn: "结束；完结", memory: "① con- = 完全；② clude = 关闭（拉丁语 claudere）。\nconclude = 完全关闭 → 结束/完结。\nconcluded 比 finished 更正式，常用于正式会议、调查、报告等。", phonics: "con 读 /kən/，clud 读 /kluː/，ed 读 /dɪd/，重音在第二音节。", collocations: [["meeting concluded", "会议结束"], ["investigation concluded", "调查结束"], ["successfully concluded", "圆满结束"]], examples: [["The meeting is now concluded.", "会议到此结束。"], ["The investigation has been concluded.", "调查已结束。"]] },
      { w: "now", ipa: "/naʊ/", pos: "副词", cn: "现在；此刻", memory: "① now = 现在/此刻。\nis now concluded = 现在正式结束。now 强调'从此刻起'，有仪式感。", phonics: "now 读 /naʊ/，ow 读 /aʊ/。", collocations: [["is now", "现在"], ["now concluded", "现已结束"], ["from now on", "从现在起"]], examples: [["The system is now operational.", "系统现在已运行。"], ["We are now ready.", "我们现在准备好了。"]] },
    ],
    phrases: [
      { p: "is now concluded", ipa: "/ɪz naʊ kənˈkluː.dɪd/", cn: "现已结束", why: "is + now + concluded = 现在正式结束。now 增加仪式感，concluded 比 finished 更正式。" },
    ],
    grammar: [
      { q: "concluded 和 finished 有什么区别？", a: "concluded = 结束/完结（正式用语，有仪式感）\nfinished = 完成/结束（通用用语，更口语化）\n✅ This meeting is now concluded.（会议正式结束 → 正式）\n✅ The meeting is finished.（会议结束了 → 口语化）\n正式会议用 concluded，日常对话用 finished。" },
    ],
    pattern: "This + 活动 + is now concluded",
    patternExamples: [
      { en: "This review is now concluded.", cn: "本次审核到此结束。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
      { en: "This training session is now concluded.", cn: "本次培训到此结束。", words: [] },
      { en: "The handover is now concluded.", cn: "交接班到此结束。", words: [{ w: "handover", ipa: "/ˈhændoʊvər/", cn: "交接", phonics: "hand 读 /hænd/，over 读 /oʊvər/" }] },
    ],
    thinking: "会议结束的完整流程：\n① 总结要点（Summary of key points）\n② 确认后续行动（Confirm action items）\n③ 感谢参会者（Thank attendees）\n④ 正式宣布结束（This meeting is now concluded）\n⑤ 道别（Goodbye / Have a good day）",
    pronunciation: "concluded 重音在第二音节：/kənˈkluː.dɪd/。\nnow 读 /naʊ/，不要读成 /noʊ/。\n节奏：This MEET-ing ｜ is NOW ｜ con-CLUD-ed.",
    quiz: [
      { q: "交接班到此结束，怎么说？", a: "The handover is now concluded." },
      { q: "concluded 和 finished 怎么区分？", a: "concluded = 正式结束（有仪式感，用于正式会议/调查）；finished = 完成/结束（通用口语）。正式场合用 concluded。" },
    ],
  },
];

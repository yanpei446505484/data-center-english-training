// EXPORTS: MOCK_SENTENCES_HANDOVER37

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_HANDOVER37: ISentence[] = [
  {
    id: 2121,
    speaker: 'Engineer',
    en: 'Has the handover report been completed?',
    cn: '交班报告完成了吗？',
    ipa: '/hæz ðə ˈhændˌoʊvər rɪˈpɔːrt bɪn kəmˈpliːtɪd/',
    tags: ['第2121句', '交接班核心句型', '★★★★★'],
    when: '数据中心交接班时，值班经理或接班工程师确认交班报告是否已完成，是每日交接流程中的关键问句。',
    words: [
      {
        w: 'completed',
        ipa: '/kəmˈpliːtɪd/',
        pos: '动词（过去分词）/ 形容词',
        cn: '已完成的；完成（complete 的过去式/过去分词）',
        memory: 'complete（原形，完成）+ d → completed。拆分记忆：com(共同)+plete(满)→共同填满→完成。',
        phonics: 'com 读 /kəm/，plete 读 /ˈpliːt/，重音在第二音节。ed 读 /ɪd/（因为 t 结尾）。',
        collocations: [
          ['completed task', '已完成任务'],
          ['fully completed', '全部完成'],
          ['successfully completed', '顺利完成'],
        ],
        examples: [
          ['Is the shift report completed?', '交班报告完成了吗？'],
          ['The work is completed.', '工作已经做完了。'],
        ],
      },
      {
        w: 'handover',
        ipa: '/ˈhændˌoʊvər/',
        pos: '名词',
        cn: '交接；交班',
        memory: 'hand(手)+over(交出)→把手上的东西交出去→交接。',
        phonics: 'hand 读 /hænd/，over 读 /ˌoʊvər/，重音在第一音节。',
        collocations: [
          ['handover meeting', '交接班会议'],
          ['handover checklist', '交接清单'],
          ['handover notes', '交接记录'],
          ['shift handover', '交接班'],
        ],
        examples: [
          ['Please prepare the handover report.', '请准备交班报告。'],
          ['The handover meeting starts at 8 AM.', '交接班会议早上8点开始。'],
        ],
      },
      {
        w: 'report',
        ipa: '/rɪˈpɔːrt/',
        pos: '名词',
        cn: '报告',
        memory: 're(再次)+port(携带)→再次带回来的信息→报告。',
        phonics: 're 读 /rɪ/，port 读 /pɔːrt/，重音在第二音节。',
        collocations: [
          ['shift report', '交班报告'],
          ['incident report', '事件报告'],
          ['daily report', '日报'],
          ['inspection report', '巡检报告'],
        ],
        examples: [
          ['Please submit the report before leaving.', '请在下班前提交报告。'],
          ['The incident report is ready.', '事件报告已经准备好了。'],
        ],
      },
    ],
    phrases: [
      {
        p: 'the handover report',
        ipa: '/ðə ˈhændˌoʊvər rɪˈpɔːrt/',
        cn: '交班报告',
        why: 'the 表示双方都知道的那份报告，handover 修饰 report 说明报告类型。',
      },
      {
        p: 'been completed',
        ipa: '/bɪn kəmˈpliːtɪd/',
        cn: '已经被完成',
        why: 'been + 过去分词 = 被动语态的完成形式。报告不是自己完成的，而是被人完成的，所以用被动。',
      },
      {
        p: 'Has...been completed',
        ipa: '/hæz...bɪn kəmˈpliːtɪd/',
        cn: '……已经完成了吗？',
        why: 'Has + 主语 + been + 过去分词 是现在完成时被动语态的疑问句结构，是工作中非常重要的万能句型。',
      },
    ],
    grammar: [
      {
        q: '为什么用 Has...been completed 而不是 Is...completed？',
        a: 'Has...been completed 是现在完成时被动语态，强调「到现在为止是否已经完成」，关注过程结果。\nIs...completed 是一般现在时被动语态，强调「当前状态是否已完成」，关注当下状态。\n✅ Has the handover report been completed?（交班报告到现在完成了吗？）—— 强调过程\n✅ Is the handover report completed?（交班报告完成了吗？）—— 强调状态\n交接班场景中更常用 Has...been completed，因为关心的是「到交接时刻为止」的完成情况。',
      },
      {
        q: '为什么用 been completed 而不是 completed？',
        a: '这里用的是被动语态：报告不是自己完成的，而是「被（某人）完成的」。\nbeen completed = 已经被完成（被动语态的完成形式）。\n如果只说 completed，就变成了主动语态，主语需要是执行者。\n✅ Has the report been completed?（报告被完成了吗？）—— 被动\n✅ Has he completed the report?（他完成报告了吗？）—— 主动',
      },
    ],
    pattern: 'Has + 主语 + been + 过去分词?',
    patternExamples: [
      { en: 'Has the maintenance been completed?', cn: '维修完成了吗？', words: [] },
      { en: 'Has the inspection been completed?', cn: '巡检完成了吗？', words: [] },
      { en: 'Has the testing been completed?', cn: '测试完成了吗？', words: [] },
      { en: 'Has the PTW been completed?', cn: 'PTW（作业许可证）办完了吗？', words: [] },
      { en: 'Has the generator test been completed?', cn: '柴发测试完成了吗？', words: [] },
      { en: 'Has the incident report been completed?', cn: '事件报告完成了吗？', words: [] },
      { en: 'Has the work order been completed?', cn: '工单完成了吗？', words: [] },
      { en: 'Has the PM been completed?', cn: '预防性维护完成了吗？', words: [] },
      { en: 'Has the MOP been completed?', cn: 'MOP执行完成了吗？', words: [] },
      { en: 'Has the SOP been followed?', cn: 'SOP执行了吗？', words: [] },
      { en: 'Has the form been completed?', cn: '这份表格填好了吗？', words: [] },
    ],
    thinking: '这句话是数据中心交接班中最常用的确认句型。\n核心结构：Has + 主语 + been + 过去分词? = ……已经完成了吗？\n这个句型在工作中是万能的，只需要替换主语即可：\n- Has the maintenance been completed?（维修完成了吗？）\n- Has the inspection been completed?（巡检完成了吗？）\n- Has the testing been completed?（测试完成了吗？）\n\n中文说「……完成了吗？」，英语用 Has...been completed 对应。\n被动语态体现专业性——关注事情本身是否完成，而非谁完成的。',
    pronunciation: 'Has 在句中弱读为 /həz/，不重读。\nthe 弱读为 /ðə/。\nhandover 重音在第一音节：HAND-over。\nreport 重音在第二音节：re-PORT。\nbeen 弱读为 /bɪn/。\ncompleted 重音在第二音节：com-PLE-ted。\n\n连读节奏：\nHas-the｜handover report｜been completed?\n\n完整音标：/həz ðə ˈhændˌoʊvər rɪˈpɔːrt bɪn kəmˈpliːtɪd/',
    quiz: [
      {
        q: '把「交班报告完成了吗？」用英语说出来。',
        a: 'Has the handover report been completed?',
      },
      {
        q: '把「维修完成了吗？」用英语说出来。',
        a: 'Has the maintenance been completed?',
      },
      {
        q: '把「巡检完成了吗？」用英语说出来。',
        a: 'Has the inspection been completed?',
      },
      {
        q: '「Has + 主语 + been + 过去分词?」这个句型表示什么意思？',
        a: '……已经完成了吗？（现在完成时被动语态的疑问句）',
      },
      {
        q: '「交班报告」用英语怎么说？',
        a: 'the handover report (/ˈhændˌoʊvər rɪˈpɔːrt/)',
      },
    ],
  },
];

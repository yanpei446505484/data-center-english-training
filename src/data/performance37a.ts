// EXPORTS: MOCK_SENTENCES_PERFORMANCE37A

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PERFORMANCE37A: ISentence[] = [
  {
    id: 2121,
    speaker: 'Manager',
    en: 'Thank you for meeting with me today.',
    cn: '感谢你今天来参加绩效沟通。',
    ipa: '/θæŋk juː fər ˈmiːtɪŋ wɪð miː təˈdeɪ/',
    tags: ['第2121句', '一对一沟通', '★★★★★'],
    when: '绩效考核一对一沟通的开场白，经理感谢员工抽出时间参加面谈。',
    words: [
      { w: 'meeting', ipa: '/ˈmiːtɪŋ/', pos: '名词/动名词', cn: '会面；会议', memory: 'meet(见面)+ing(名词后缀)→见面的行为或场合。', phonics: 'meet 读 /miːt/，ing 读 /ɪŋ/，重音在第一音节。', collocations: [['meeting with someone', '与某人会面'], ['schedule a meeting', '安排会议'], ['performance meeting', '绩效面谈']], examples: [['Thank you for meeting with me.', '感谢你和我会面。'], ['We have a meeting at 3 PM.', '我们下午3点有个会议。']] },
      { w: 'today', ipa: '/təˈdeɪ/', pos: '副词/名词', cn: '今天', memory: 'to(这个)+day(天)→这一天。', phonics: 'to 读 /tə/，day 读 /deɪ/，重音在第二音节。', collocations: [['today\'s meeting', '今天的会议'], ['later today', '今天晚些时候'], ['earlier today', '今天早些时候']], examples: [['Let\'s review today\'s agenda.', '我们看看今天的议程。'], ['I\'m available today.', '我今天有空。']] },
    ],
    phrases: [
      { p: 'Thank you for meeting with me', ipa: '/θæŋk juː fər ˈmiːtɪŋ wɪð miː/', cn: '感谢你和我会面', why: 'Thank you for + 动名词，表达对对方行为的感谢。meeting with me 强调双向交流。' },
    ],
    grammar: [
      { q: '为什么用 for meeting 而不是 for meet？', a: 'for 是介词，后面必须接动名词（-ing 形式）或名词，不能接动词原形。\n✅ Thank you for meeting with me.（感谢你和我会面。）\n❌ Thank you for meet with me.（语法错误。）' },
    ],
    pattern: 'Thank you for + 动名词 + 时间',
    patternExamples: [
      { en: 'Thank you for coming to the review.', cn: '感谢你来参加评审。', words: [] },
      { en: 'Thank you for joining this discussion.', cn: '感谢你参加这次讨论。', words: [] },
      { en: 'Thank you for taking the time today.', cn: '感谢你今天抽出时间。', words: [] },
    ],
    thinking: '绩效面谈开场需要表达感谢，营造轻松但正式的氛围。\nThank you for meeting with me 是标准开场，体现对员工时间的尊重。\n中文说「感谢你今天来…」，英语结构完全一致。',
    pronunciation: 'meeting 重音在第一音节：MEET-ing。\ntoday 重音在第二音节：to-DAY。\n节奏：THANK you ｜ for MEET-ing ｜ with ME ｜ to-DAY.',
    quiz: [
      { q: '把「感谢你今天来参加绩效沟通。」用英语说出来。', a: 'Thank you for meeting with me today.' },
      { q: '「会面」用英语怎么说？', a: 'meeting (/ˈmiːtɪŋ/)' },
    ],
  },
  {
    id: 2122,
    speaker: 'Manager',
    en: 'Let\'s review your performance over the past month.',
    cn: '我们来回顾一下你过去一个月的工作表现。',
    ipa: '/lɛts rɪˈvjuː jɔːr pərˈfɔːrməns ˈoʊvər ðə pæst mʌnθ/',
    tags: ['第2122句', '一对一沟通', '★★★★★'],
    when: '绩效面谈中，经理引导员工进入工作表现回顾环节。',
    words: [
      { w: 'performance', ipa: '/pərˈfɔːrməns/', pos: '名词', cn: '表现；绩效', memory: 'perform(执行)+ance(名词后缀)→执行的结果→表现。', phonics: 'per 读 /pər/，for 读 /fɔːr/，mance 读 /məns/，重音在第二音节。', collocations: [['performance review', '绩效评审'], ['performance improvement', '绩效提升'], ['high performance', '高绩效']], examples: [['Let\'s review your performance.', '我们来回顾你的表现。'], ['Your performance has improved.', '你的表现有所提升。']] },
      { w: 'review', ipa: '/rɪˈvjuː/', pos: '动词', cn: '回顾；审查', memory: 're(再次)+view(看)→再次查看→回顾审查。', phonics: 're 读 /rɪ/，view 读 /vjuː/，重音在第二音节。', collocations: [['review performance', '回顾表现'], ['review progress', '回顾进展'], ['review results', '审查结果']], examples: [['Let\'s review last month\'s results.', '我们回顾上月的结果。'], ['Please review this report.', '请审查这份报告。']] },
    ],
    phrases: [
      { p: 'over the past month', ipa: '/ˈoʊvər ðə pæst mʌnθ/', cn: '过去一个月', why: 'over 表示时间跨度，past month 指刚过去的一个月，是绩效考核的标准回顾周期。' },
      { p: 'your performance', ipa: '/jɔːr pərˈfɔːrməns/', cn: '你的表现', why: '直接指向员工个人的工作表现，明确面谈主题。' },
    ],
    grammar: [
      { q: '为什么用 Let\'s review 而不是 Please review？', a: 'Let\'s review 包含说话人自己，表示「我们一起回顾」，营造合作氛围。\nPlease review 是对对方发出指令，语气上像「你来审查」。\n✅ Let\'s review your performance.（我们一起回顾你的表现。）—— 合作\n❌ Please review your performance.（你来回顾你的表现。）—— 指令式' },
    ],
    pattern: 'Let\'s review + 对象 + over the past + 时间段',
    patternExamples: [
      { en: 'Let\'s review your progress over the past quarter.', cn: '我们回顾你过去一个季度的进展。', words: [] },
      { en: 'Let\'s review the team\'s performance over the past week.', cn: '我们回顾团队过去一周的表现。', words: [] },
      { en: 'Let\'s review the project status over the past two weeks.', cn: '我们回顾过去两周的项目状态。', words: [] },
    ],
    thinking: '绩效面谈需要明确回顾的时间范围。\nLet\'s review 建立合作氛围，over the past month 界定回顾周期。\n中文说「我们来回顾…」，英语结构完全一致。',
    pronunciation: 'performance 重音在第二音节：per-FOR-mance。\nreview 重音在第二音节：re-VIEW。\n节奏：LET\'S re-VIEW ｜ your per-FOR-mance ｜ O-ver the ｜ PAST MONTH.',
    quiz: [
      { q: '把「我们来回顾一下你过去一个月的工作表现。」用英语说出来。', a: 'Let\'s review your performance over the past month.' },
      { q: '「绩效」用英语怎么说？', a: 'performance (/pərˈfɔːrməns/)' },
    ],
  },
  {
    id: 2123,
    speaker: 'Manager',
    en: 'Overall, you have done a good job.',
    cn: '总体来说，你做得不错。',
    ipa: '/ˌoʊvərˈɔːl juː hæv dʌn ə ɡʊd dʒɑːb/',
    tags: ['第2123句', '一对一沟通', '★★★★★'],
    when: '经理对员工整体表现给出正面评价，建立积极的面谈基调。',
    words: [
      { w: 'overall', ipa: '/ˌoʊvərˈɔːl/', pos: '副词', cn: '总的来说；整体上', memory: 'over(覆盖)+all(全部)→涵盖所有方面→总的来说。', phonics: 'o 读 /oʊ/，ver 读 /vər/，all 读 /ɔːl/，重音在第三音节。', collocations: [['overall performance', '整体表现'], ['overall result', '总体结果'], ['overall assessment', '整体评估']], examples: [['Overall, the work is satisfactory.', '总体来说，工作令人满意。'], ['The overall performance was good.', '整体表现不错。']] },
      { w: 'done', ipa: '/dʌn/', pos: '动词（过去分词）', cn: '做了；完成', memory: 'do(做)的过去分词形式，用于完成时态。', phonics: 'd 读 /d/，one 读 /ʌn/，单音节。', collocations: [['done a good job', '做得不错'], ['well done', '做得好'], ['done correctly', '正确完成']], examples: [['You have done well.', '你做得很好。'], ['The task is done.', '任务已完成。']] },
    ],
    phrases: [
      { p: 'done a good job', ipa: '/dʌn ə ɡʊd dʒɑːb/', cn: '做得不错', why: 'do a good job 是英语中最常用的正面评价短语，done 是过去分词形式用于完成时。' },
      { p: 'Overall', ipa: '/ˌoʊvərˈɔːl/', cn: '总的来说', why: '放在句首做总结性评价，先给出整体印象再展开细节。' },
    ],
    grammar: [
      { q: '为什么用 have done 而不是 did？', a: 'have done 是现在完成时，强调过去的行为对现在的影响，适合绩效回顾。\ndid 是一般过去时，只描述过去发生的事，不强调与现在的关联。\n✅ You have done a good job.（你做得不错。）—— 强调到现在为止的表现\n✅ You did a good job yesterday.（你昨天做得不错。）—— 只描述昨天' },
    ],
    pattern: 'Overall, + 主语 + have/has + 过去分词 + 评价',
    patternExamples: [
      { en: 'Overall, the team has performed well.', cn: '总体来说，团队表现良好。', words: [] },
      { en: 'Overall, you have made great progress.', cn: '总体来说，你取得了很大进步。', words: [] },
      { en: 'Overall, the project has been successful.', cn: '总体来说，项目是成功的。', words: [] },
    ],
    thinking: '绩效面谈先给整体正面评价，让员工放松并建立信心。\nOverall 做总结，have done a good job 给出肯定判断。\n中文说「总体来说，你做得不错」，英语结构完全一致。',
    pronunciation: 'overall 重音在第三音节：o-ver-ALL。\ndone 读 /dʌn/，单音节。\n节奏：O-ver-ALL ｜ you have ｜ DONE a ｜ GOOD JOB.',
    quiz: [
      { q: '把「总体来说，你做得不错。」用英语说出来。', a: 'Overall, you have done a good job.' },
      { q: '「总的来说」用英语怎么说？', a: 'overall (/ˌoʊvərˈɔːl/)' },
    ],
  },
  {
    id: 2124,
    speaker: 'Manager',
    en: 'Thank you for your hard work and dedication.',
    cn: '感谢你的辛勤工作和付出。',
    ipa: '/θæŋk juː fər jɔːr hɑːrd wɜːrk ənd ˌdɛdɪˈkeɪʃən/',
    tags: ['第2124句', '一对一沟通', '★★★★★'],
    when: '经理对员工的辛勤工作和敬业精神表达感谢，强化正面行为。',
    words: [
      { w: 'hard work', ipa: '/hɑːrd wɜːrk/', pos: '名词短语', cn: '辛勤工作', memory: 'hard(辛苦的)+work(工作)→付出努力的工作。', phonics: 'hard 读 /hɑːrd/，work 读 /wɜːrk/，两个单音节词。', collocations: [['hard work', '辛勤工作'], ['hardworking', '勤奋的'], ['through hard work', '通过努力工作']], examples: [['Your hard work is appreciated.', '你的辛勤工作受到赞赏。'], ['Success comes from hard work.', '成功来自努力工作。']] },
      { w: 'dedication', ipa: '/ˌdɛdɪˈkeɪʃən/', pos: '名词', cn: '奉献；投入；敬业精神', memory: 'dedicate(奉献)+ion(名词后缀)→奉献的精神。', phonics: 'ded 读 /dɛd/，i 读 /ɪ/，ca 读 /keɪ/，tion 读 /ʃən/，重音在第三音节。', collocations: [['dedication to work', '对工作的投入'], ['show dedication', '展现敬业精神'], ['professional dedication', '职业奉献']], examples: [['I appreciate your dedication.', '我欣赏你的敬业精神。'], ['Her dedication is impressive.', '她的投入令人印象深刻。']] },
    ],
    phrases: [
      { p: 'hard work and dedication', ipa: '/hɑːrd wɜːrk ənd ˌdɛdɪˈkeɪʃən/', cn: '辛勤工作和付出', why: '两个并列名词短语，hard work 强调体力/时间投入，dedication 强调精神/态度投入。' },
    ],
    grammar: [
      { q: '为什么用 dedication 而不是 commitment？', a: 'dedication 强调「奉献、全身心投入」，带有情感色彩。\ncommitment 强调「承诺、责任感」，更偏向理性。\n✅ Thank you for your dedication.（感谢你的奉献。）—— 感性赞赏\n✅ Thank you for your commitment.（感谢你的承诺。）—— 理性认可\n绩效面谈中两者都常用，dedication 更温暖。' },
    ],
    pattern: 'Thank you for your + 品质/行为',
    patternExamples: [
      { en: 'Thank you for your patience.', cn: '感谢你的耐心。', words: [] },
      { en: 'Thank you for your teamwork.', cn: '感谢你的团队合作。', words: [] },
      { en: 'Thank you for your professionalism.', cn: '感谢你的专业精神。', words: [] },
    ],
    thinking: '绩效面谈中对员工的付出表达感谢是基本礼仪。\nhard work 和 dedication 分别从行动和态度两个维度肯定员工。\n中文说「感谢你的辛勤工作和付出」，英语结构完全一致。',
    pronunciation: 'hard work 两个词都重读。\ndedication 重音在第三音节：ded-i-CA-tion。\n节奏：THANK you ｜ for your ｜ HARD WORK ｜ and ded-i-CA-tion.',
    quiz: [
      { q: '把「感谢你的辛勤工作和付出。」用英语说出来。', a: 'Thank you for your hard work and dedication.' },
      { q: '「敬业精神」用英语怎么说？', a: 'dedication (/ˌdɛdɪˈkeɪʃən/)' },
    ],
  },
  {
    id: 2125,
    speaker: 'Manager',
    en: 'I appreciate your positive attitude.',
    cn: '我很欣赏你积极的工作态度。',
    ipa: '/aɪ əˈpriːʃieɪt jɔːr ˈpɑːzətɪv ˈætɪtjuːd/',
    tags: ['第2125句', '一对一沟通', '★★★★★'],
    when: '经理赞赏员工积极的工作态度，强化正向行为。',
    words: [
      { w: 'appreciate', ipa: '/əˈpriːʃieɪt/', pos: '动词', cn: '欣赏；感激', memory: 'ap(加强)+preci(价值)+ate(动词后缀)→重视其价值→欣赏感激。', phonics: 'ap 读 /ə/，pre 读 /priː/，ci 读 /ʃi/，ate 读 /eɪt/，重音在第二音节。', collocations: [['appreciate your effort', '感激你的努力'], ['greatly appreciate', '非常感激'], ['sincerely appreciate', '真诚感激']], examples: [['I appreciate your help.', '我感激你的帮助。'], ['We appreciate your feedback.', '我们感谢你的反馈。']] },
      { w: 'attitude', ipa: '/ˈætɪtjuːd/', pos: '名词', cn: '态度', memory: 'attitude 源自拉丁语 aptitudo（适合性），现指对事物的看法和行为倾向。', phonics: 'at 读 /æ/，ti 读 /tɪ/，tude 读 /tjuːd/，重音在第一音节。', collocations: [['positive attitude', '积极态度'], ['work attitude', '工作态度'], ['attitude towards work', '对工作的态度']], examples: [['Your attitude is excellent.', '你的态度非常好。'], ['Attitude determines everything.', '态度决定一切。']] },
    ],
    phrases: [
      { p: 'positive attitude', ipa: '/ˈpɑːzətɪv ˈætɪtjuːd/', cn: '积极的态度', why: 'positive 修饰 attitude，强调乐观、主动的工作心态。' },
      { p: 'I appreciate', ipa: '/aɪ əˈpriːʃieɪt/', cn: '我很欣赏', why: 'I appreciate 比 I like 更正式、更有分量，适合管理者对下属的正式认可。' },
    ],
    grammar: [
      { q: '为什么用 I appreciate 而不是 I like？', a: 'I appreciate 表达「重视、感激」，带有认可和尊重的含义。\nI like 只是「喜欢」，过于随意，不适合正式绩效面谈。\n✅ I appreciate your positive attitude.（我很欣赏你积极的态度。）—— 正式认可\n✅ I like your attitude.（我喜欢你的态度。）—— 随意表达' },
    ],
    pattern: 'I appreciate your + 品质/行为',
    patternExamples: [
      { en: 'I appreciate your honesty.', cn: '我很欣赏你的诚实。', words: [] },
      { en: 'I appreciate your initiative.', cn: '我很欣赏你的主动性。', words: [] },
      { en: 'I appreciate your flexibility.', cn: '我很欣赏你的灵活性。', words: [] },
    ],
    thinking: '赞赏员工的态度是绩效面谈的重要环节。\nI appreciate 表达正式的认可，positive attitude 是数据中心运维中最看重的软素质之一。\n中文说「我很欣赏你积极的态度」，英语结构完全一致。',
    pronunciation: 'appreciate 重音在第二音节：ap-PRE-ci-ate。\nattitude 重音在第一音节：AT-ti-tude。\n节奏：I ap-PRE-ci-ate ｜ your POS-i-tive ｜ AT-ti-tude.',
    quiz: [
      { q: '把「我很欣赏你积极的工作态度。」用英语说出来。', a: 'I appreciate your positive attitude.' },
      { q: '「态度」用英语怎么说？', a: 'attitude (/ˈætɪtjuːd/)' },
    ],
  },
  {
    id: 2126,
    speaker: 'Manager',
    en: 'Your performance has improved significantly.',
    cn: '你的工作表现有了明显提升。',
    ipa: '/jɔːr pərˈfɔːrməns hæz ɪmˈpruːvd sɪɡˈnɪfɪkəntli/',
    tags: ['第2126句', '一对一沟通', '★★★★★'],
    when: '经理指出员工的绩效有显著进步，给予正向反馈。',
    words: [
      { w: 'improved', ipa: '/ɪmˈpruːvd/', pos: '动词（过去分词）', cn: '改善了；提升了', memory: 'im(进入)+prove(证明好的)→变得更好→改善。', phonics: 'im 读 /ɪm/，prove 读 /pruːv/，重音在第二音节。ed 读 /d/。', collocations: [['improved performance', '提升的表现'], ['significantly improved', '显著提升'], ['greatly improved', '大幅改善']], examples: [['Your skills have improved.', '你的技能有所提升。'], ['The system has improved.', '系统有所改善。']] },
      { w: 'significantly', ipa: '/sɪɡˈnɪfɪkəntli/', pos: '副词', cn: '显著地；明显地', memory: 'sign(标记)+ificant(有意义的)+ly(副词后缀)→有重大意义地→显著地。', phonics: 'sig 读 /sɪɡ/，nif 读 /nɪf/，i 读 /ɪ/，cant 读 /kənt/，ly 读 /li/，重音在第二音节。', collocations: [['significantly improved', '显著提升'], ['significantly reduced', '显著降低'], ['significantly better', '明显更好']], examples: [['Performance has improved significantly.', '表现有了显著提升。'], ['Costs have reduced significantly.', '成本显著降低。']] },
    ],
    phrases: [
      { p: 'has improved significantly', ipa: '/hæz ɪmˈpruːvd sɪɡˈnɪfɪkəntli/', cn: '有了明显提升', why: 'has improved 现在完成时强调从过去到现在的变化，significantly 强调变化幅度大。' },
    ],
    grammar: [
      { q: '为什么用 has improved 而不是 improved？', a: 'has improved 是现在完成时，强调「到现在为止的提升」，适合绩效回顾。\nimproved 是一般过去时，只描述过去某个时间点的变化。\n✅ Your performance has improved significantly.（你的表现有了显著提升。）—— 强调持续到现在\n✅ Your performance improved last month.（你的表现上月有提升。）—— 只描述上月' },
    ],
    pattern: '主语 + has/have + improved + 程度副词',
    patternExamples: [
      { en: 'Your response time has improved greatly.', cn: '你的响应时间有了很大改善。', words: [] },
      { en: 'The team\'s efficiency has improved remarkably.', cn: '团队的效率有了显著提升。', words: [] },
      { en: 'Your technical skills have improved noticeably.', cn: '你的技术能力有了明显进步。', words: [] },
    ],
    thinking: '指出具体的进步是正向反馈的核心。\nhas improved 强调持续的提升，significantly 强调幅度。\n中文说「有了明显提升」，英语结构完全一致。',
    pronunciation: 'improved 重音在第二音节：im-PROVED。\nsignificantly 重音在第二音节：sig-NIF-i-cant-ly。\n节奏：Your per-FOR-mance ｜ has im-PROVED ｜ sig-NIF-i-cant-ly.',
    quiz: [
      { q: '把「你的工作表现有了明显提升。」用英语说出来。', a: 'Your performance has improved significantly.' },
      { q: '「显著地」用英语怎么说？', a: 'significantly (/sɪɡˈnɪfɪkəntli/)' },
    ],
  },
  {
    id: 2127,
    speaker: 'Manager',
    en: 'You handled several critical incidents very well.',
    cn: '你很好地处理了几次重大事件。',
    ipa: '/juː ˈhændəld ˈsɛvrəl ˈkrɪtɪkəl ˈɪnsɪdənts ˈvɛri wɛl/',
    tags: ['第2127句', '一对一沟通', '★★★★★'],
    when: '经理具体肯定员工在处理重大事件中的出色表现。',
    words: [
      { w: 'handled', ipa: '/ˈhændəld/', pos: '动词（过去式）', cn: '处理了；应对了', memory: 'handle(处理)的过去式，源自 hand(手)→用手处理→应对。', phonics: 'han 读 /hæn/，dle 读 /dəl/，重音在第一音节。ed 读 /d/。', collocations: [['handle an incident', '处理事件'], ['handle a situation', '应对情况'], ['handle pressure', '承受压力']], examples: [['You handled it well.', '你处理得很好。'], ['She handled the emergency calmly.', '她冷静地处理了紧急情况。']] },
      { w: 'critical incidents', ipa: '/ˈkrɪtɪkəl ˈɪnsɪdənts/', pos: '名词短语', cn: '重大事件；关键事件', memory: 'critical(关键的)+incidents(事件)→需要重点关注的事件。', phonics: 'crit 读 /krɪt/，i 读 /ɪ/，cal 读 /kəl/；in 读 /ɪn/，ci 读 /sɪ/，dents 读 /dənts/。', collocations: [['critical incident', '重大事件'], ['incident response', '事件响应'], ['incident report', '事件报告']], examples: [['We had two critical incidents last week.', '上周我们有两次重大事件。'], ['The critical incident was resolved quickly.', '重大事件很快得到解决。']] },
    ],
    phrases: [
      { p: 'handled ... very well', ipa: '/ˈhændəld ˈvɛri wɛl/', cn: '处理得非常好', why: 'handle + 宾语 + very well 是评价某人处理某事能力的标准结构。' },
      { p: 'several critical incidents', ipa: '/ˈsɛvrəl ˈkrɪtɪkəl ˈɪnsɪdənts/', cn: '几次重大事件', why: 'several 表示多次，说明不是一次偶然，而是持续的能力体现。' },
    ],
    grammar: [
      { q: '为什么用 handled 而不是 dealt with？', a: 'handled 更强调「掌控、妥善处理」，暗示能力强。\ndealt with 更中性，只表示「处理了」，不一定处理得好。\n✅ You handled the incident very well.（你很好地处理了事件。）—— 强调能力强\n✅ You dealt with the incident.（你处理了事件。）—— 中性描述' },
    ],
    pattern: 'You handled + 事件 + very well',
    patternExamples: [
      { en: 'You handled the power outage very well.', cn: '你很好地处理了停电事件。', words: [] },
      { en: 'You handled the customer complaint very well.', cn: '你很好地处理了客户投诉。', words: [] },
      { en: 'You handled the emergency response very well.', cn: '你很好地处理了应急响应。', words: [] },
    ],
    thinking: '具体指出员工做得好的事例，比泛泛表扬更有说服力。\nhandled 强调掌控力，several critical incidents 说明能力的持续性。\n中文说「你很好地处理了几次重大事件」，英语结构完全一致。',
    pronunciation: 'handled 重音在第一音节：HAN-dled。\ncritical 重音在第一音节：CRIT-i-cal。\nincidents 重音在第一音节：IN-ci-dents。\n节奏：You HAN-dled ｜ SEV-er-al ｜ CRIT-i-cal ｜ IN-ci-dents ｜ VER-y WELL.',
    quiz: [
      { q: '把「你很好地处理了几次重大事件。」用英语说出来。', a: 'You handled several critical incidents very well.' },
      { q: '「重大事件」用英语怎么说？', a: 'critical incidents (/ˈkrɪtɪkəl ˈɪnsɪdənts/)' },
    ],
  },
  {
    id: 2128,
    speaker: 'Manager',
    en: 'Your shift handover reports are clear and detailed.',
    cn: '你的交接班报告清晰、详细。',
    ipa: '/jɔːr ʃɪft ˈhændˌoʊvər rɪˈpɔːrts ɑːr klɪr ənd dɪˈteɪld/',
    tags: ['第2128句', '一对一沟通', '★★★★★'],
    when: '经理具体肯定员工交接班报告的质量。',
    words: [
      { w: 'shift handover', ipa: '/ʃɪft ˈhændˌoʊvər/', pos: '名词短语', cn: '交接班', memory: 'shift(班次)+handover(交接)→班次之间的交接。', phonics: 'shift 读 /ʃɪft/，handover 读 /ˈhændˌoʊvər/。', collocations: [['shift handover report', '交接班报告'], ['shift handover meeting', '交接班会议'], ['shift handover checklist', '交接班清单']], examples: [['Please prepare the shift handover.', '请准备交接班。'], ['The shift handover is at 8 AM.', '交接班在早上8点。']] },
      { w: 'detailed', ipa: '/dɪˈteɪld/', pos: '形容词', cn: '详细的', memory: 'detail(细节)+ed(形容词后缀)→包含很多细节的。', phonics: 'de 读 /dɪ/，tail 读 /teɪl/，ed 读 /d/，重音在第二音节。', collocations: [['detailed report', '详细报告'], ['detailed analysis', '详细分析'], ['detailed records', '详细记录']], examples: [['Your report is very detailed.', '你的报告非常详细。'], ['Please provide detailed information.', '请提供详细信息。']] },
    ],
    phrases: [
      { p: 'clear and detailed', ipa: '/klɪr ənd dɪˈteɪld/', cn: '清晰且详细', why: '两个形容词并列，clear 强调易读性，detailed 强调信息完整性。' },
      { p: 'shift handover reports', ipa: '/ʃɪft ˈhændˌoʊvər rɪˈpɔːrts/', cn: '交接班报告', why: '数据中心运维中最核心的日常文档之一。' },
    ],
    grammar: [
      { q: '为什么用 are clear and detailed 而不是 are clearly written？', a: 'are clear and detailed 直接描述报告的特征，简洁直接。\nare clearly written 强调「写的方式」，结构更复杂。\n✅ Your reports are clear and detailed.（你的报告清晰详细。）—— 直接评价\n✅ Your reports are clearly written.（你的报告写得很清楚。）—— 评价写法\n绩效面谈中直接评价更高效。' },
    ],
    pattern: 'Your + 工作成果 + are + 形容词 + and + 形容词',
    patternExamples: [
      { en: 'Your maintenance records are accurate and complete.', cn: '你的维护记录准确且完整。', words: [] },
      { en: 'Your incident reports are thorough and timely.', cn: '你的事件报告全面且及时。', words: [] },
      { en: 'Your documentation is organized and accessible.', cn: '你的文档整理有序且易于查阅。', words: [] },
    ],
    thinking: '具体指出员工某项工作成果的质量，比泛泛表扬更有针对性。\nclear and detailed 是交接班报告最重要的两个质量标准。\n中文说「清晰、详细」，英语结构完全一致。',
    pronunciation: 'handover 重音在第一音节：HAND-over。\ndetailed 重音在第二音节：de-TAILED。\n节奏：Your SHIFT ｜ HAND-o-ver re-PORTS ｜ are CLEAR ｜ and de-TAILED.',
    quiz: [
      { q: '把「你的交接班报告清晰、详细。」用英语说出来。', a: 'Your shift handover reports are clear and detailed.' },
      { q: '「详细的」用英语怎么说？', a: 'detailed (/dɪˈteɪld/)' },
    ],
  },
  {
    id: 2129,
    speaker: 'Manager',
    en: 'Your documentation is well organized.',
    cn: '你的文档整理得很好。',
    ipa: '/jɔːr ˌdɑːkjəmɛnˈteɪʃən ɪz wɛl ˈɔːrɡənaɪzd/',
    tags: ['第2129句', '一对一沟通', '★★★★★'],
    when: '经理肯定员工在文档管理方面的良好表现。',
    words: [
      { w: 'documentation', ipa: '/ˌdɑːkjəmɛnˈteɪʃən/', pos: '名词', cn: '文档；文件记录', memory: 'document(文件)+ation(名词后缀)→文件的集合→文档。', phonics: 'doc 读 /dɑːk/，u 读 /jə/，men 读 /mɛn/，ta 读 /teɪ/，tion 读 /ʃən/，重音在第四音节。', collocations: [['technical documentation', '技术文档'], ['complete documentation', '完整文档'], ['update documentation', '更新文档']], examples: [['Please keep the documentation updated.', '请保持文档更新。'], ['The documentation is incomplete.', '文档不完整。']] },
      { w: 'organized', ipa: '/ˈɔːrɡənaɪzd/', pos: '形容词', cn: '有条理的；整理好的', memory: 'organize(组织)+ed(形容词后缀)→有组织性的→有条理的。', phonics: 'or 读 /ɔːr/，gan 读 /ɡə/，ized 读 /naɪzd/，重音在第一音节。', collocations: [['well organized', '整理得很好'], ['organized files', '有序的文件'], ['organized system', '有序的系统']], examples: [['The files are well organized.', '文件整理得很好。'], ['She is very organized.', '她很有条理。']] },
    ],
    phrases: [
      { p: 'well organized', ipa: '/wɛl ˈɔːrɡənaɪzd/', cn: '整理得很好', why: 'well 修饰 organized，强调组织的程度高。' },
    ],
    grammar: [
      { q: '为什么用 is well organized 而不是 is organized well？', a: 'is well organized 中 well organized 作为复合形容词，直接描述状态。\nis organized well 中 well 修饰 organized 的动作方式。\n✅ Your documentation is well organized.（你的文档整理得很好。）—— 描述状态\n✅ You organized the documentation well.（你把文档整理得很好。）—— 描述动作\n绩效面谈中评价状态更常用。' },
    ],
    pattern: 'Your + 工作成果 + is well + 过去分词',
    patternExamples: [
      { en: 'Your workspace is well maintained.', cn: '你的工作区域维护得很好。', words: [] },
      { en: 'Your schedule is well planned.', cn: '你的日程安排得很好。', words: [] },
      { en: 'Your records are well kept.', cn: '你的记录保存得很好。', words: [] },
    ],
    thinking: '文档管理是数据中心运维的重要环节，肯定员工在这方面的表现很有价值。\nwell organized 是文档管理的核心标准。\n中文说「整理得很好」，英语结构完全一致。',
    pronunciation: 'documentation 重音在第四音节：doc-u-men-TA-tion。\norganized 重音在第一音节：OR-gan-ized。\n节奏：Your doc-u-men-TA-tion ｜ is WELL ｜ OR-gan-ized.',
    quiz: [
      { q: '把「你的文档整理得很好。」用英语说出来。', a: 'Your documentation is well organized.' },
      { q: '「文档」用英语怎么说？', a: 'documentation (/ˌdɑːkjəmɛnˈteɪʃən/)' },
    ],
  },
  {
    id: 2130,
    speaker: 'Manager',
    en: 'Your communication with customers has been professional.',
    cn: '你与客户的沟通非常专业。',
    ipa: '/jɔːr kəˌmjuːnɪˈkeɪʃən wɪð ˈkʌstəmɜːrz hæz bɪn prəˈfɛʃənəl/',
    tags: ['第2130句', '一对一沟通', '★★★★★'],
    when: '经理肯定员工在客户沟通方面的专业表现。',
    words: [
      { w: 'communication', ipa: '/kəˌmjuːnɪˈkeɪʃən/', pos: '名词', cn: '沟通；交流', memory: 'communicate(沟通)+ion(名词后缀)→沟通的行为或过程。', phonics: 'com 读 /kə/，mu 读 /mjuː/，ni 读 /nɪ/，ca 读 /keɪ/，tion 读 /ʃən/，重音在第四音节。', collocations: [['customer communication', '客户沟通'], ['effective communication', '有效沟通'], ['communication skills', '沟通技巧']], examples: [['Your communication is clear.', '你的沟通很清晰。'], ['Good communication is essential.', '良好的沟通至关重要。']] },
      { w: 'professional', ipa: '/prəˈfɛʃənəl/', pos: '形容词', cn: '专业的；职业的', memory: 'profession(职业)+al(形容词后缀)→具有职业水准的。', phonics: 'pro 读 /prə/，fes 读 /fɛʃ/，sion 读 /ən/，al 读 /əl/，重音在第二音节。', collocations: [['professional behavior', '专业行为'], ['professional attitude', '专业态度'], ['professional standards', '专业标准']], examples: [['Your approach is very professional.', '你的方式非常专业。'], ['She maintains a professional demeanor.', '她保持专业的举止。']] },
    ],
    phrases: [
      { p: 'communication with customers', ipa: '/kəˌmjuːnɪˈkeɪʃən wɪð ˈkʌstəmɜːrz/', cn: '与客户的沟通', why: 'with customers 限定 communication 的对象，明确是客户沟通。' },
      { p: 'has been professional', ipa: '/hæz bɪn prəˈfɛʃənəl/', cn: '一直非常专业', why: 'has been 现在完成时表示从过去到现在持续的专业状态。' },
    ],
    grammar: [
      { q: '为什么用 has been professional 而不是 is professional？', a: 'has been professional 是现在完成时，强调「一直以来的专业性」，适合绩效回顾。\nis professional 是一般现在时，只描述当前状态。\n✅ Your communication has been professional.（你的沟通一直很专业。）—— 强调持续\n✅ Your communication is professional.（你的沟通很专业。）—— 描述现在\n绩效面谈中用 has been 更全面。' },
    ],
    pattern: 'Your + 行为 + with + 对象 + has been + 形容词',
    patternExamples: [
      { en: 'Your interaction with vendors has been effective.', cn: '你与供应商的互动一直很有效。', words: [] },
      { en: 'Your coordination with the team has been excellent.', cn: '你与团队的协调一直很出色。', words: [] },
      { en: 'Your response to alarms has been timely.', cn: '你对告警的响应一直很及时。', words: [] },
    ],
    thinking: '客户沟通能力是数据中心运维工程师的重要素质。\nhas been professional 强调持续的专业水准。\n中文说「非常专业」，英语用 professional 对应。',
    pronunciation: 'communication 重音在第四音节：com-mu-ni-CA-tion。\nprofessional 重音在第二音节：pro-FES-sion-al。\n节奏：Your com-mu-ni-CA-tion ｜ with CUS-tom-ers ｜ has BEEN ｜ pro-FES-sion-al.',
    quiz: [
      { q: '把「你与客户的沟通非常专业。」用英语说出来。', a: 'Your communication with customers has been professional.' },
      { q: '「专业的」用英语怎么说？', a: 'professional (/prəˈfɛʃənəl/)' },
    ],
  },
  {
    id: 2131,
    speaker: 'Manager',
    en: 'You always follow the standard operating procedures.',
    cn: '你始终遵守标准操作流程。',
    ipa: '/juː ˈɔːlweɪz ˈfɑːloʊ ðə ˈstændərd ˈɑːpəreɪtɪŋ prəˈsiːdʒərz/',
    tags: ['第2131句', '优点', '★★★★★'],
    when: '经理肯定员工严格遵守SOP的行为，这是数据中心运维的基本要求。',
    words: [
      { w: 'always', ipa: '/ˈɔːlweɪz/', pos: '副词', cn: '总是；始终', memory: 'all(全部)+ways(方式)→在所有情况下→总是。', phonics: 'al 读 /ɔːl/，ways 读 /weɪz/，重音在第一音节。', collocations: [['always follow', '始终遵守'], ['always check', '总是检查'], ['always on time', '总是准时']], examples: [['You always arrive on time.', '你总是准时到达。'], ['She always double-checks.', '她总是再次确认。']] },
      { w: 'standard operating procedures', ipa: '/ˈstændərd ˈɑːpəreɪtɪŋ prəˈsiːdʒərz/', pos: '名词短语', cn: '标准操作流程（SOP）', memory: 'standard(标准的)+operating(操作的)+procedures(程序)→标准化的操作步骤。', phonics: 'stand 读 /stæn/，ard 读 /ərd/；op 读 /ɑːp/，er 读 /ər/，ating 读 /eɪtɪŋ/；pro 读 /prə/，ce 读 /siː/，dures 读 /dʒərz/。', collocations: [['follow SOP', '遵守SOP'], ['SOP compliance', 'SOP合规'], ['update SOP', '更新SOP']], examples: [['Please follow the SOP.', '请遵守标准操作流程。'], ['The SOP needs to be updated.', 'SOP需要更新。']] },
    ],
    phrases: [
      { p: 'follow the standard operating procedures', ipa: '/ˈfɑːloʊ ðə ˈstændərd ˈɑːpəreɪtɪŋ prəˈsiːdʒərz/', cn: '遵守标准操作流程', why: 'follow 表示「遵循、遵守」，standard operating procedures 是数据中心运维的核心规范。' },
    ],
    grammar: [
      { q: '为什么用 always follow 而不是 usually follow？', a: 'always 表示「100%每次都」，强调一致性和可靠性。\nusually 表示「通常」，暗示有例外。\n✅ You always follow the SOP.（你始终遵守SOP。）—— 100%合规\n✅ You usually follow the SOP.（你通常遵守SOP。）—— 有例外\n绩效面谈中用 always 是高度肯定。' },
    ],
    pattern: 'You always + 动词 + 规范/标准',
    patternExamples: [
      { en: 'You always follow the safety rules.', cn: '你始终遵守安全规则。', words: [] },
      { en: 'You always complete the checklist.', cn: '你总是完成检查清单。', words: [] },
      { en: 'You always wear your PPE.', cn: '你总是穿戴个人防护装备。', words: [] },
    ],
    thinking: '遵守SOP是数据中心运维的基本底线，always follow 是最高级别的肯定。\n中文说「始终遵守」，英语用 always follow 对应。',
    pronunciation: 'standard 重音在第一音节：STAN-dard。\noperating 重音在第一音节：OP-er-ating。\nprocedures 重音在第二音节：pro-CE-dures。\n节奏：You AL-ways ｜ FOL-low the ｜ STAN-dard ｜ OP-er-a-ting ｜ pro-CE-dures.',
    quiz: [
      { q: '把「你始终遵守标准操作流程。」用英语说出来。', a: 'You always follow the standard operating procedures.' },
      { q: '「标准操作流程」的英文缩写是什么？', a: 'SOP (Standard Operating Procedures)' },
    ],
  },
  {
    id: 2132,
    speaker: 'Manager',
    en: 'Your safety awareness is excellent.',
    cn: '你的安全意识非常好。',
    ipa: '/jɔːr ˈseɪfti əˈwɛrnəs ɪz ˈɛksələnt/',
    tags: ['第2132句', '优点', '★★★★★'],
    when: '经理肯定员工的安全意识，这是数据中心运维中最重要的素质之一。',
    words: [
      { w: 'safety awareness', ipa: '/ˈseɪfti əˈwɛrnəs/', pos: '名词短语', cn: '安全意识', memory: 'safety(安全)+awareness(意识)→对安全的警觉和认知。', phonics: 'safe 读 /seɪf/，ty 读 /ti/；a 读 /ə/，ware 读 /wɛr/，ness 读 /nəs/。', collocations: [['safety awareness training', '安全意识培训'], ['improve safety awareness', '提高安全意识'], ['high safety awareness', '高安全意识']], examples: [['Safety awareness is critical.', '安全意识至关重要。'], ['We need to improve safety awareness.', '我们需要提高安全意识。']] },
      { w: 'excellent', ipa: '/ˈɛksələnt/', pos: '形容词', cn: '优秀的；出色的', memory: 'excel(超越)+lent(形容词后缀)→超出一般的→优秀的。', phonics: 'ex 读 /ɛks/，cel 读 /sə/，lent 读 /lənt/，重音在第一音节。', collocations: [['excellent performance', '优秀表现'], ['excellent work', '出色工作'], ['excellent results', '优秀结果']], examples: [['Your work is excellent.', '你的工作非常出色。'], ['The results are excellent.', '结果非常好。']] },
    ],
    phrases: [
      { p: 'safety awareness', ipa: '/ˈseɪfti əˈwɛrnəs/', cn: '安全意识', why: '数据中心运维中最核心的素质，比技术能力更基础。' },
      { p: 'is excellent', ipa: '/ɪz ˈɛksələnt/', cn: '非常好', why: 'excellent 是最高级别的正面评价词之一。' },
    ],
    grammar: [
      { q: '为什么用 excellent 而不是 very good？', a: 'excellent 比 very good 更正式、更有分量，适合绩效面谈的正式评价。\nvery good 更日常、更口语化。\n✅ Your safety awareness is excellent.（你的安全意识非常出色。）—— 正式高度肯定\n✅ Your safety awareness is very good.（你的安全意识很好。）—— 日常肯定' },
    ],
    pattern: 'Your + 素质/能力 + is excellent',
    patternExamples: [
      { en: 'Your attention to detail is excellent.', cn: '你对细节的关注非常出色。', words: [] },
      { en: 'Your problem-solving ability is excellent.', cn: '你的问题解决能力非常出色。', words: [] },
      { en: 'Your time management is excellent.', cn: '你的时间管理非常出色。', words: [] },
    ],
    thinking: '安全意识是数据中心运维的第一要素，肯定员工的安全意识非常重要。\nexcellent 表达最高级别的认可。\n中文说「非常好」，英语用 excellent 对应。',
    pronunciation: 'safety 重音在第一音节：SAFE-ty。\nawareness 重音在第二音节：a-WARE-ness。\nexcellent 重音在第一音节：EX-cel-lent。\n节奏：Your SAFE-ty ｜ a-WARE-ness ｜ is EX-cel-lent.',
    quiz: [
      { q: '把「你的安全意识非常好。」用英语说出来。', a: 'Your safety awareness is excellent.' },
      { q: '「安全意识」用英语怎么说？', a: 'safety awareness (/ˈseɪfti əˈwɛrnəs/)' },
    ],
  },
  {
    id: 2133,
    speaker: 'Manager',
    en: 'You respond to alarms quickly.',
    cn: '你处理告警非常及时。',
    ipa: '/juː rɪˈspɑːnd tuː əˈlɑːrmz ˈkwɪkli/',
    tags: ['第2133句', '优点', '★★★★★'],
    when: '经理肯定员工对告警的快速响应能力。',
    words: [
      { w: 'respond', ipa: '/rɪˈspɑːnd/', pos: '动词', cn: '响应；回应', memory: 're(回)+spond(承诺)→回应承诺→响应。', phonics: 're 读 /rɪ/，spond 读 /spɑːnd/，重音在第二音节。', collocations: [['respond to alarms', '响应告警'], ['respond quickly', '快速响应'], ['respond immediately', '立即响应']], examples: [['Please respond to the alarm.', '请响应这个告警。'], ['He responded within 5 minutes.', '他在5分钟内响应了。']] },
      { w: 'quickly', ipa: '/ˈkwɪkli/', pos: '副词', cn: '快速地；及时地', memory: 'quick(快的)+ly(副词后缀)→以快速的方式。', phonics: 'quick 读 /kwɪk/，ly 读 /li/，重音在第一音节。', collocations: [['respond quickly', '快速响应'], ['act quickly', '迅速行动'], ['resolve quickly', '快速解决']], examples: [['You responded quickly.', '你响应很快。'], ['We need to act quickly.', '我们需要迅速行动。']] },
    ],
    phrases: [
      { p: 'respond to alarms', ipa: '/rɪˈspɑːnd tuː əˈlɑːrmz/', cn: '响应告警', why: 'respond to 表示对某事做出反应，alarms 是数据中心最常见的响应对象。' },
    ],
    grammar: [
      { q: '为什么用 respond to 而不是 react to？', a: 'respond to 强调「有目的、有方法的响应」，包含思考和行动。\nreact to 强调「本能反应」，可能缺乏思考。\n✅ You respond to alarms quickly.（你快速响应告警。）—— 有方法的响应\n✅ You react to alarms quickly.（你快速对告警做出反应。）—— 本能反应\n运维中用 respond 更专业。' },
    ],
    pattern: 'You + 动词 + to + 对象 + 副词',
    patternExamples: [
      { en: 'You respond to incidents promptly.', cn: '你及时响应事件。', words: [] },
      { en: 'You react to changes effectively.', cn: '你有效应对变化。', words: [] },
      { en: 'You adapt to new situations quickly.', cn: '你快速适应新情况。', words: [] },
    ],
    thinking: '快速响应告警是数据中心运维工程师的核心能力之一。\nrespond to 比 react to 更专业，quickly 强调速度。\n中文说「处理告警非常及时」，英语用 respond to alarms quickly 对应。',
    pronunciation: 'respond 重音在第二音节：re-SPOND。\nalarms 重音在第二音节：a-LARMS。\nquickly 重音在第一音节：QUICK-ly。\n节奏：You re-SPOND ｜ to a-LARMS ｜ QUICK-ly.',
    quiz: [
      { q: '把「你处理告警非常及时。」用英语说出来。', a: 'You respond to alarms quickly.' },
      { q: '「响应」用英语怎么说？', a: 'respond (/rɪˈspɑːnd/)' },
    ],
  },
  {
    id: 2134,
    speaker: 'Manager',
    en: 'You work well under pressure.',
    cn: '你能够在压力下保持良好的工作状态。',
    ipa: '/juː wɜːrk wɛl ˈʌndər ˈprɛʃər/',
    tags: ['第2134句', '优点', '★★★★★'],
    when: '经理肯定员工在高压环境下的稳定表现。',
    words: [
      { w: 'under pressure', ipa: '/ˈʌndər ˈprɛʃər/', pos: '介词短语', cn: '在压力下', memory: 'under(在…之下)+pressure(压力)→承受压力的状态。', phonics: 'un 读 /ʌn/，der 读 /dər/；pres 读 /prɛ/，sure 读 /ʃər/。', collocations: [['work under pressure', '在压力下工作'], ['perform under pressure', '在压力下表现'], ['remain calm under pressure', '在压力下保持冷静']], examples: [['She works well under pressure.', '她在压力下工作得很好。'], ['Can you handle working under pressure?', '你能承受在压力下工作吗？']] },
    ],
    phrases: [
      { p: 'work well under pressure', ipa: '/wɜːrk wɛl ˈʌndər ˈprɛʃər/', cn: '在压力下工作得好', why: 'well 修饰 work 的质量，under pressure 描述工作条件。' },
    ],
    grammar: [
      { q: '为什么用 under pressure 而不是 in pressure？', a: 'under pressure 是固定搭配，表示「承受压力」。\nin pressure 不是标准英语表达。\n✅ You work well under pressure.（你在压力下工作得好。）\n❌ You work well in pressure.（语法错误。）' },
    ],
    pattern: 'You + 动词 + well + under + 条件',
    patternExamples: [
      { en: 'You perform well under stress.', cn: '你在压力下表现良好。', words: [] },
      { en: 'You think clearly under pressure.', cn: '你在压力下思路清晰。', words: [] },
      { en: 'You stay calm under difficult conditions.', cn: '你在困难条件下保持冷静。', words: [] },
    ],
    thinking: '数据中心运维经常面临紧急事件，能在压力下保持稳定表现是非常重要的能力。\nunder pressure 是描述这种能力的标准表达。\n中文说「在压力下保持良好的工作状态」，英语简化为 work well under pressure。',
    pronunciation: 'work 读 /wɜːrk/，单音节。\nunder 重音在第一音节：UN-der。\npressure 重音在第一音节：PRES-sure。\n节奏：You WORK WELL ｜ UN-der ｜ PRES-sure.',
    quiz: [
      { q: '把「你能够在压力下保持良好的工作状态。」用英语说出来。', a: 'You work well under pressure.' },
      { q: '「在压力下」用英语怎么说？', a: 'under pressure (/ˈʌndər ˈprɛʃər/)' },
    ],
  },
  {
    id: 2135,
    speaker: 'Manager',
    en: 'You are a reliable team member.',
    cn: '你是一名值得信赖的团队成员。',
    ipa: '/juː ɑːr ə rɪˈlaɪəbəl tiːm ˈmɛmbər/',
    tags: ['第2135句', '优点', '★★★★★'],
    when: '经理肯定员工作为团队成员的可靠性。',
    words: [
      { w: 'reliable', ipa: '/rɪˈlaɪəbəl/', pos: '形容词', cn: '可靠的；值得信赖的', memory: 'rely(依赖)+able(能够的)→能够被依赖的→可靠的。', phonics: 're 读 /rɪ/，li 读 /laɪ/，a 读 /ə/，ble 读 /bəl/，重音在第二音节。', collocations: [['reliable person', '可靠的人'], ['reliable performance', '可靠的表现'], ['reliable equipment', '可靠的设备']], examples: [['You are very reliable.', '你非常可靠。'], ['The system is reliable.', '系统是可靠的。']] },
      { w: 'team member', ipa: '/tiːm ˈmɛmbər/', pos: '名词短语', cn: '团队成员', memory: 'team(团队)+member(成员)→团队中的一员。', phonics: 'team 读 /tiːm/，member 读 /ˈmɛmbər/。', collocations: [['valuable team member', '有价值的团队成员'], ['active team member', '积极的团队成员'], ['team member performance', '团队成员表现']], examples: [['You are a great team member.', '你是一名很棒的团队成员。'], ['Every team member contributes.', '每个团队成员都有贡献。']] },
    ],
    phrases: [
      { p: 'a reliable team member', ipa: '/ə rɪˈlaɪəbəl tiːm ˈmɛmbər/', cn: '一名值得信赖的团队成员', why: 'reliable 修饰 team member，强调可依赖性和稳定性。' },
    ],
    grammar: [
      { q: '为什么用 reliable 而不是 trustworthy？', a: 'reliable 强调「可靠性、稳定性」，侧重行为和结果的一致性。\ntrustworthy 强调「值得信任」，侧重品格和诚信。\n✅ You are a reliable team member.（你是一名可靠的团队成员。）—— 强调稳定\n✅ You are a trustworthy colleague.（你是一名值得信任的同事。）—— 强调品格\n绩效面谈中 reliable 更常用。' },
    ],
    pattern: 'You are a/an + 形容词 + team member',
    patternExamples: [
      { en: 'You are a valuable team member.', cn: '你是一名有价值的团队成员。', words: [] },
      { en: 'You are a dedicated team member.', cn: '你是一名敬业的团队成员。', words: [] },
      { en: 'You are an outstanding team member.', cn: '你是一名出色的团队成员。', words: [] },
    ],
    thinking: '可靠性是团队协作的基础，肯定员工的可靠性是对人格和能力的双重认可。\nreliable 强调行为的一致性，team member 强调团队归属。\n中文说「值得信赖的团队成员」，英语用 reliable team member 对应。',
    pronunciation: 'reliable 重音在第二音节：re-LI-a-ble。\nteam member 两个词都重读。\n节奏：You ARE ｜ a re-LI-a-ble ｜ TEAM MEM-ber.',
    quiz: [
      { q: '把「你是一名值得信赖的团队成员。」用英语说出来。', a: 'You are a reliable team member.' },
      { q: '「可靠的」用英语怎么说？', a: 'reliable (/rɪˈlaɪəbəl/)' },
    ],
  },
  {
    id: 2136,
    speaker: 'Manager',
    en: 'Your troubleshooting skills are improving.',
    cn: '你的故障排查能力正在不断提高。',
    ipa: '/jɔːr ˈtrʌbləʃuːtɪŋ skɪlz ɑːr ɪmˈpruːvɪŋ/',
    tags: ['第2136句', '优点', '★★★★★'],
    when: '经理肯定员工在故障排查技能方面的持续进步。',
    words: [
      { w: 'troubleshooting', ipa: '/ˈtrʌbləʃuːtɪŋ/', pos: '名词/形容词', cn: '故障排查；故障排除', memory: 'trouble(故障)+shoot(射击)+ing→射击故障→排查故障。', phonics: 'trou 读 /trʌ/，ble 读 /bəl/，shoot 读 /ʃuːt/，ing 读 /ɪŋ/，重音在第一音节。', collocations: [['troubleshooting skills', '故障排查技能'], ['troubleshooting guide', '故障排查指南'], ['troubleshooting steps', '故障排查步骤']], examples: [['Your troubleshooting is effective.', '你的故障排查很有效。'], ['Please follow the troubleshooting guide.', '请按照故障排查指南操作。']] },
      { w: 'skills', ipa: '/skɪlz/', pos: '名词（复数）', cn: '技能；能力', memory: 'skill(技能)的复数形式，表示多种能力。', phonics: 'skill 读 /skɪl/，s 读 /z/，单音节加复数。', collocations: [['technical skills', '技术技能'], ['soft skills', '软技能'], ['improve skills', '提升技能']], examples: [['Your skills are improving.', '你的技能在提升。'], ['We need to develop new skills.', '我们需要发展新技能。']] },
    ],
    phrases: [
      { p: 'troubleshooting skills', ipa: '/ˈtrʌbləʃuːtɪŋ skɪlz/', cn: '故障排查技能', why: '数据中心运维工程师最核心的技术能力之一。' },
      { p: 'are improving', ipa: '/ɑːr ɪmˈpruːvɪŋ/', cn: '正在提升', why: '现在进行时强调正在发生的变化，说明进步是持续的。' },
    ],
    grammar: [
      { q: '为什么用 are improving 而不是 have improved？', a: 'are improving 是现在进行时，强调「正在持续提升」，过程仍在进行。\nhave improved 是现在完成时，强调「已经提升了」，侧重结果。\n✅ Your skills are improving.（你的技能正在提升。）—— 强调过程\n✅ Your skills have improved.（你的技能已经提升了。）—— 强调结果\n两者都可用于绩效面谈，are improving 更鼓励持续学习。' },
    ],
    pattern: 'Your + 技能 + are/is + improving',
    patternExamples: [
      { en: 'Your communication skills are improving.', cn: '你的沟通技能正在提升。', words: [] },
      { en: 'Your leadership ability is improving.', cn: '你的领导能力正在提升。', words: [] },
      { en: 'Your technical knowledge is improving.', cn: '你的技术知识正在提升。', words: [] },
    ],
    thinking: '故障排查是数据中心运维的核心技能，肯定其持续进步鼓励员工继续学习。\nare improving 强调正在进行的过程。\n中文说「正在不断提高」，英语用 are improving 对应。',
    pronunciation: 'troubleshooting 重音在第一音节：TROU-ble-shooting。\nskills 读 /skɪlz/，单音节。\nimproving 重音在第二音节：im-PROV-ing。\n节奏：Your TROU-ble-shooting ｜ SKILLS ｜ are im-PROV-ing.',
    quiz: [
      { q: '把「你的故障排查能力正在不断提高。」用英语说出来。', a: 'Your troubleshooting skills are improving.' },
      { q: '「故障排查」用英语怎么说？', a: 'troubleshooting (/ˈtrʌbləʃuːtɪŋ/)' },
    ],
  },
  {
    id: 2137,
    speaker: 'Manager',
    en: 'You always complete your assigned tasks on time.',
    cn: '你总能按时完成分配的任务。',
    ipa: '/juː ˈɔːlweɪz kəmˈpliːt jɔːr əˈsaɪnd tæsks ɑːn taɪm/',
    tags: ['第2137句', '优点', '★★★★★'],
    when: '经理肯定员工的任务执行力和时间管理能力。',
    words: [
      { w: 'assigned', ipa: '/əˈsaɪnd/', pos: '形容词/过去分词', cn: '分配的；指派的', memory: 'assign(分配)+ed(过去分词)→被分配的。', phonics: 'as 读 /ə/，signed 读 /saɪnd/，重音在第二音节。', collocations: [['assigned tasks', '分配的任务'], ['assigned duties', '分配的职责'], ['assigned area', '分配的区域']], examples: [['Please complete your assigned tasks.', '请完成你分配的任务。'], ['The assigned work is due today.', '分配的工作今天到期。']] },
      { w: 'on time', ipa: '/ɑːn taɪm/', pos: '介词短语', cn: '按时；准时', memory: 'on(在)+time(时间)→在规定的时间内。', phonics: 'on 读 /ɑːn/，time 读 /taɪm/。', collocations: [['on time', '按时'], ['ahead of time', '提前'], ['behind schedule', '落后于计划']], examples: [['The task was completed on time.', '任务按时完成。'], ['Please arrive on time.', '请准时到达。']] },
    ],
    phrases: [
      { p: 'assigned tasks', ipa: '/əˈsaɪnd tæsks/', cn: '分配的任务', why: 'assigned 修饰 tasks，明确是被分配的工作而非自选的。' },
      { p: 'on time', ipa: '/ɑːn taɪm/', cn: '按时', why: '强调在规定时间内完成，体现时间管理能力。' },
    ],
    grammar: [
      { q: '为什么用 on time 而不是 in time？', a: 'on time 表示「准时、按规定时间」，强调不迟到。\nin time 表示「及时」，强调在截止前完成。\n✅ You complete tasks on time.（你按时完成任务。）—— 按规定时间\n✅ You finished in time.（你及时完成了。）—— 在最后期限前\n绩效面谈中 on time 更常用。' },
    ],
    pattern: 'You always complete + 任务 + on time',
    patternExamples: [
      { en: 'You always submit reports on time.', cn: '你总是按时提交报告。', words: [] },
      { en: 'You always finish maintenance on schedule.', cn: '你总是按计划完成维护。', words: [] },
      { en: 'You always meet deadlines.', cn: '你总是按时完成。', words: [] },
    ],
    thinking: '按时完成任务是执行力的体现，always 强调一致性。\non time 是时间管理的核心标准。\n中文说「按时完成」，英语用 complete on time 对应。',
    pronunciation: 'assigned 重音在第二音节：as-SIGNED。\ntasks 读 /tæsks/，单音节。\non time 两个词都重读。\n节奏：You AL-ways ｜ com-PLETE ｜ your as-SIGNED ｜ TASKS ｜ on TIME.',
    quiz: [
      { q: '把「你总能按时完成分配的任务。」用英语说出来。', a: 'You always complete your assigned tasks on time.' },
      { q: '「按时」用英语怎么说？', a: 'on time (/ɑːn taɪm/)' },
    ],
  },
  {
    id: 2138,
    speaker: 'Manager',
    en: 'You are willing to help other team members.',
    cn: '你愿意帮助其他团队成员。',
    ipa: '/juː ɑːr ˈwɪlɪŋ tuː hɛlp ˈʌðər tiːm ˈmɛmbərz/',
    tags: ['第2138句', '优点', '★★★★★'],
    when: '经理肯定员工的团队协作精神和乐于助人的态度。',
    words: [
      { w: 'willing', ipa: '/ˈwɪlɪŋ/', pos: '形容词', cn: '愿意的；乐意的', memory: 'will(意愿)+ing(形容词后缀)→有意愿的→愿意的。', phonics: 'will 读 /wɪl/，ing 读 /ɪŋ/，重音在第一音节。', collocations: [['willing to help', '愿意帮助'], ['willing to learn', '愿意学习'], ['willing to take on', '愿意承担']], examples: [['She is always willing to help.', '她总是愿意帮助。'], ['Are you willing to work overtime?', '你愿意加班吗？']] },
    ],
    phrases: [
      { p: 'willing to help', ipa: '/ˈwɪlɪŋ tuː hɛlp/', cn: '愿意帮助', why: 'be willing to + 动词，表示主观意愿，强调主动性。' },
      { p: 'other team members', ipa: '/ˈʌðər tiːm ˈmɛmbərz/', cn: '其他团队成员', why: 'other 明确帮助的对象是同事，体现团队精神。' },
    ],
    grammar: [
      { q: '为什么用 are willing to 而不是 always help？', a: 'are willing to help 强调「意愿和态度」，即使没有被要求也愿意。\nalways help 强调「行为频率」，每次都帮。\n✅ You are willing to help others.（你愿意帮助别人。）—— 强调态度\n✅ You always help others.（你总是帮助别人。）—— 强调行为\n绩效面谈中肯定态度更深层。' },
    ],
    pattern: 'You are willing to + 动词 + 对象',
    patternExamples: [
      { en: 'You are willing to take on extra work.', cn: '你愿意承担额外工作。', words: [] },
      { en: 'You are willing to share your knowledge.', cn: '你愿意分享你的知识。', words: [] },
      { en: 'You are willing to support new colleagues.', cn: '你愿意支持新同事。', words: [] },
    ],
    thinking: '乐于助人是团队协作的重要品质，willing to help 强调主动意愿。\n中文说「愿意帮助」，英语用 willing to help 对应。',
    pronunciation: 'willing 重音在第一音节：WILL-ing。\nother 重音在第一音节：OTH-er。\n节奏：You ARE ｜ WILL-ing to ｜ HELP ｜ OTH-er ｜ TEAM MEM-bers.',
    quiz: [
      { q: '把「你愿意帮助其他团队成员。」用英语说出来。', a: 'You are willing to help other team members.' },
      { q: '「愿意的」用英语怎么说？', a: 'willing (/ˈwɪlɪŋ/)' },
    ],
  },
  {
    id: 2139,
    speaker: 'Manager',
    en: 'Your learning attitude is excellent.',
    cn: '你的学习态度很好。',
    ipa: '/jɔːr ˈlɜːrnɪŋ ˈætɪtjuːd ɪz ˈɛksələnt/',
    tags: ['第2139句', '优点', '★★★★★'],
    when: '经理肯定员工积极的学习态度，鼓励持续成长。',
    words: [
      { w: 'learning attitude', ipa: '/ˈlɜːrnɪŋ ˈætɪtjuːd/', pos: '名词短语', cn: '学习态度', memory: 'learning(学习)+attitude(态度)→对待学习的心态。', phonics: 'learn 读 /lɜːrn/，ing 读 /ɪŋ/；at 读 /æ/，ti 读 /tɪ/，tude 读 /tjuːd/。', collocations: [['learning attitude', '学习态度'], ['positive learning attitude', '积极的学习态度'], ['eager to learn', '渴望学习']], examples: [['Your learning attitude is commendable.', '你的学习态度值得赞扬。'], ['A good learning attitude is important.', '良好的学习态度很重要。']] },
    ],
    phrases: [
      { p: 'learning attitude', ipa: '/ˈlɜːrnɪŋ ˈætɪtjuːd/', cn: '学习态度', why: 'learning 修饰 attitude，明确是对待学习的心态。' },
      { p: 'is excellent', ipa: '/ɪz ˈɛksələnt/', cn: '非常出色', why: 'excellent 是最高级别的正面评价。' },
    ],
    grammar: [
      { q: '为什么用 learning attitude 而不是 attitude towards learning？', a: 'learning attitude 更简洁，作为复合名词直接使用。\nattitude towards learning 更完整，但更长。\n✅ Your learning attitude is excellent.（你的学习态度很好。）—— 简洁\n✅ Your attitude towards learning is excellent.（你对待学习的态度很好。）—— 完整\n日常交流中简洁表达更常用。' },
    ],
    pattern: 'Your + 名词 + attitude + is + 形容词',
    patternExamples: [
      { en: 'Your work attitude is positive.', cn: '你的工作态度积极。', words: [] },
      { en: 'Your safety attitude is outstanding.', cn: '你的安全态度非常出色。', words: [] },
      { en: 'Your professional attitude is impressive.', cn: '你的职业态度令人印象深刻。', words: [] },
    ],
    thinking: '学习态度决定了员工的成长潜力，肯定学习态度鼓励持续学习。\nexcellent 表达最高认可。\n中文说「学习态度很好」，英语用 learning attitude is excellent 对应。',
    pronunciation: 'learning 重音在第一音节：LEARN-ing。\nattitude 重音在第一音节：AT-ti-tude。\nexcellent 重音在第一音节：EX-cel-lent。\n节奏：Your LEARN-ing ｜ AT-ti-tude ｜ is EX-cel-lent.',
    quiz: [
      { q: '把「你的学习态度很好。」用英语说出来。', a: 'Your learning attitude is excellent.' },
      { q: '「学习态度」用英语怎么说？', a: 'learning attitude (/ˈlɜːrnɪŋ ˈætɪtjuːd/)' },
    ],
  },
  {
    id: 2140,
    speaker: 'Manager',
    en: 'Please continue your excellent work.',
    cn: '请继续保持优秀的工作表现。',
    ipa: '/pliːz kənˈtɪnjuː jɔːr ˈɛksələnt wɜːrk/',
    tags: ['第2140句', '优点', '★★★★★'],
    when: '经理鼓励员工继续保持优秀表现，作为优点总结的结束语。',
    words: [
      { w: 'continue', ipa: '/kənˈtɪnjuː/', pos: '动词', cn: '继续；保持', memory: 'con(共同)+tinue(延伸)→一起延伸→继续。', phonics: 'con 读 /kən/，tin 读 /tɪn/，ue 读 /juː/，重音在第二音节。', collocations: [['continue working', '继续工作'], ['continue to improve', '继续提升'], ['continue the good work', '继续保持好工作']], examples: [['Please continue your good work.', '请继续保持好工作。'], ['Let\'s continue the discussion.', '让我们继续讨论。']] },
      { w: 'excellent work', ipa: '/ˈɛksələnt wɜːrk/', pos: '名词短语', cn: '优秀的工作表现', memory: 'excellent(优秀的)+work(工作)→高质量的工作成果。', phonics: 'ex 读 /ɛks/，cel 读 /sə/，lent 读 /lənt/；work 读 /wɜːrk/。', collocations: [['excellent work', '优秀工作'], ['keep up the excellent work', '继续保持优秀工作'], ['recognize excellent work', '认可优秀工作']], examples: [['Your excellent work is appreciated.', '你的优秀工作受到赞赏。'], ['Keep up the excellent work.', '继续保持优秀工作。']] },
    ],
    phrases: [
      { p: 'continue your excellent work', ipa: '/kənˈtɪnjuː jɔːr ˈɛksələnt wɜːrk/', cn: '继续保持优秀的工作表现', why: 'continue 表示持续，excellent work 是对其工作质量的评价。' },
    ],
    grammar: [
      { q: '为什么用 Please continue 而不是 Keep up？', a: 'Please continue 更正式、更直接，适合绩效面谈的正式场合。\nKeep up 更口语化、更轻松。\n✅ Please continue your excellent work.（请继续保持优秀工作。）—— 正式\n✅ Keep up the great work.（继续保持好工作。）—— 口语\n两者都正确，正式场合用 continue。' },
    ],
    pattern: 'Please continue + 形容词 + 名词',
    patternExamples: [
      { en: 'Please continue your professional development.', cn: '请继续你的专业发展。', words: [] },
      { en: 'Please continue your proactive approach.', cn: '请继续保持你积极的方法。', words: [] },
      { en: 'Please continue your high standards.', cn: '请继续保持你的高标准。', words: [] },
    ],
    thinking: '作为优点总结的结束语，鼓励员工保持现有优秀表现。\nPlease continue 是正式的鼓励，excellent work 是对其工作的总体评价。\n中文说「继续保持优秀的工作表现」，英语结构完全一致。',
    pronunciation: 'continue 重音在第二音节：con-TIN-ue。\nexcellent 重音在第一音节：EX-cel-lent。\n节奏：Please con-TIN-ue ｜ your EX-cel-lent ｜ WORK.',
    quiz: [
      { q: '把「请继续保持优秀的工作表现。」用英语说出来。', a: 'Please continue your excellent work.' },
      { q: '「继续」用英语怎么说？', a: 'continue (/kənˈtɪnjuː/)' },
    ],
  },
];

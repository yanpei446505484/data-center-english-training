// EXPORTS: MOCK_SENTENCES_MEETINGROOM47A

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_MEETINGROOM47A: ISentence[] = [
  {
    id: 2521,
    speaker: 'Engineer',
    en: 'Could you project your screen onto the main display?',
    cn: '请把你的屏幕投到主显示屏上。',
    ipa: '/kʊd juː prəˈdʒɛkt jɔːr skriːn ˈɒntə ðə meɪn dɪˈspleɪ/',
    tags: ['第2521句', '投屏与演示', '★★★★'],
    when: '会议开始前，主持人请演讲者将电脑画面投到会议室主屏幕上。',
    words: [
      { w: 'project', ipa: '/prəˈdʒɛkt/', pos: '动词', cn: '投射；投屏', memory: 'pro(向前)+ject(投)→向前投射→投屏。', phonics: 'pro 读 /prə/，ject 读 /dʒɛkt/，重音在第二音节。', collocations: [['project screen', '投屏'], ['project onto', '投射到'], ['project presentation', '投射演示文稿']], examples: [['Please project your screen.', '请投屏。'], ['The image is projected on the wall.', '图像投射在墙上。']] },
      { w: 'display', ipa: '/dɪˈspleɪ/', pos: '名词', cn: '显示屏；显示器', memory: 'dis(展开)+play(展示)→展开来展示→显示屏。', phonics: 'dis 读 /dɪ/，play 读 /pleɪ/，重音在第二音节。', collocations: [['main display', '主显示屏'], ['display screen', '显示屏幕'], ['LED display', 'LED显示屏']], examples: [['The display is not working.', '显示屏不工作了。'], ['Connect to the display.', '连接到显示屏。']] },
    ],
    phrases: [
      { p: 'project your screen', ipa: '/prəˈdʒɛkt jɔːr skriːn/', cn: '投屏', why: 'project + screen 是投屏的标准表达，将电脑画面投射到大屏幕上。' },
      { p: 'onto the main display', ipa: '/ˈɒntə ðə meɪn dɪˈspleɪ/', cn: '到主显示屏上', why: 'onto 表示方向，main display 指会议室的主屏幕。' },
    ],
    grammar: [
      { q: 'Could you project 和 Please project 有什么区别？', a: 'Could you project 更礼貌委婉，以询问的方式提出请求。\nPlease project 更直接，是指令式的表达。\n在会议场合，Could you 更常用，体现对演讲者的尊重。' },
    ],
    pattern: 'Could you project + 内容 + onto + 目标?',
    patternExamples: [
      { en: 'Could you project the dashboard onto the screen?', cn: '你能把仪表盘投到屏幕上吗？', words: [] },
      { en: 'Could you project the BMS page onto the wall?', cn: '你能把BMS页面投到墙上吗？', words: [] },
      { en: 'Could you project the report onto the main display?', cn: '你能把报告投到主显示屏上吗？', words: [] },
    ],
    thinking: '会议室投屏是视频会议和演示的基础操作。\nproject your screen onto the main display 是投屏的完整表达。\n中文说「把屏幕投到大屏上」，英语用 project your screen onto the main display。',
    pronunciation: 'project 作动词时重音在第二音节：pro-JECT。\ndisplay 重音在第二音节：dis-PLAY。\n节奏：COULD you ｜ pro-JECT your SCREEN ｜ ON-to the MAIN dis-PLAY?',
    quiz: [
      { q: '把「请把你的屏幕投到主显示屏上。」用英语说出来。', a: 'Could you project your screen onto the main display?' },
      { q: '「投屏」用英语怎么说？', a: 'project your screen (/prəˈdʒɛkt jɔːr skriːn/)' },
    ],
  },
  {
    id: 2522,
    speaker: 'Engineer',
    en: 'Please switch to full-screen mode.',
    cn: '请切换到全屏模式。',
    ipa: '/pliːz swɪtʃ tuː fʊl skriːn məʊd/',
    tags: ['第2522句', '投屏与演示', '★★★★'],
    when: '演示时希望内容占满整个屏幕，便于后排同事看清。',
    words: [
      { w: 'switch', ipa: '/swɪtʃ/', pos: '动词', cn: '切换；转换', memory: 'switch 本义是开关，作动词表示切换状态。', phonics: 'sw 读 /sw/，itch 读 /ɪtʃ/，单音节。', collocations: [['switch to', '切换到'], ['switch modes', '切换模式'], ['switch screens', '切换屏幕']], examples: [['Please switch to the next tab.', '请切换到下一个标签页。'], ['Switch to dark mode.', '切换到暗色模式。']] },
      { w: 'full-screen', ipa: '/fʊl skriːn/', pos: '形容词', cn: '全屏的', memory: 'full(满的)+screen(屏幕)→占满整个屏幕。', phonics: 'full 读 /fʊl/，screen 读 /skriːn/。', collocations: [['full-screen mode', '全屏模式'], ['go full-screen', '进入全屏']], examples: [['Press F11 for full-screen.', '按F11进入全屏。'], ['Exit full-screen mode.', '退出全屏模式。']] },
    ],
    phrases: [
      { p: 'switch to', ipa: '/swɪtʃ tuː/', cn: '切换到', why: 'switch to + 目标状态，表示从一个状态转换到另一个状态。' },
      { p: 'full-screen mode', ipa: '/fʊl skriːn məʊd/', cn: '全屏模式', why: 'mode 表示模式/状态，full-screen mode 即全屏显示模式。' },
    ],
    grammar: [
      { q: 'switch to 和 change to 有什么区别？', a: 'switch to 强调快速切换，常用于电子设备/软件的模式切换。\nchange to 更通用，表示改变为某种状态。\n在电脑操作语境中，switch to 更自然。' },
    ],
    pattern: 'Please switch to + 模式/状态.',
    patternExamples: [
      { en: 'Please switch to presentation mode.', cn: '请切换到演示模式。', words: [] },
      { en: 'Please switch to the camera view.', cn: '请切换到摄像头画面。', words: [] },
      { en: 'Please switch to the spreadsheet.', cn: '请切换到电子表格。', words: [] },
    ],
    thinking: '全屏模式让演示内容更清晰可见。\nswitch to full-screen mode 是切换全屏的标准指令。\n中文说「切换到全屏模式」，英语用 switch to full-screen mode。',
    pronunciation: 'switch 读 /swɪtʃ/，单音节。\nfull-screen 重音在 full：FULL-screen。\n节奏：PLEASE SWITCH ｜ to FULL-SCREEN MODE.',
    quiz: [
      { q: '把「请切换到全屏模式。」用英语说出来。', a: 'Please switch to full-screen mode.' },
      { q: '「全屏模式」用英语怎么说？', a: 'full-screen mode (/fʊl skriːn məʊd/)' },
    ],
  },
  {
    id: 2523,
    speaker: 'Engineer',
    en: 'Please exit full-screen mode.',
    cn: '请退出全屏模式。',
    ipa: '/pliːz ˈɛksɪt fʊl skriːn məʊd/',
    tags: ['第2523句', '投屏与演示', '★★★★'],
    when: '演示结束后需要回到普通视图，或需要切换到其他应用程序。',
    words: [
      { w: 'exit', ipa: '/ˈɛksɪt/', pos: '动词', cn: '退出；离开', memory: 'ex(出)+it(走)→走出去→退出。', phonics: 'ex 读 /ɛks/，it 读 /ɪt/，重音在第一音节。', collocations: [['exit mode', '退出模式'], ['exit application', '退出应用程序'], ['exit meeting', '退出会议']], examples: [['Press Esc to exit.', '按Esc退出。'], ['Exit the program first.', '先退出程序。']] },
    ],
    phrases: [
      { p: 'exit full-screen mode', ipa: '/ˈɛksɪt fʊl skriːn məʊd/', cn: '退出全屏模式', why: 'exit + mode 表示退出某种显示或操作模式，回到默认状态。' },
    ],
    grammar: [
      { q: 'exit 和 close 有什么区别？', a: 'exit 强调退出某种模式/状态/程序。\nclose 强调关闭某个窗口/文件/标签页。\n退出全屏用 exit，关闭文件用 close。' },
    ],
    pattern: 'Please exit + 模式/状态.',
    patternExamples: [
      { en: 'Please exit presentation mode.', cn: '请退出演示模式。', words: [] },
      { en: 'Please exit the application.', cn: '请退出应用程序。', words: [] },
      { en: 'Please exit editing mode.', cn: '请退出编辑模式。', words: [] },
    ],
    thinking: '退出全屏是演示结束或切换内容时的常见操作。\nexit full-screen mode 直接对应中文的「退出全屏模式」。\n快捷键通常是 Esc 或 F11。',
    pronunciation: 'exit 重音在第一音节：EX-it。\n节奏：PLEASE EX-it ｜ FULL-SCREEN MODE.',
    quiz: [
      { q: '把「请退出全屏模式。」用英语说出来。', a: 'Please exit full-screen mode.' },
      { q: '「退出」用英语怎么说？', a: 'exit (/ˈɛksɪt/)' },
    ],
  },
  {
    id: 2524,
    speaker: 'Engineer',
    en: 'Could you move to the next slide?',
    cn: '请翻到下一页。',
    ipa: '/kʊd juː muːv tuː ðə nɛkst slaɪd/',
    tags: ['第2524句', '投屏与演示', '★★★★'],
    when: '会议中需要演讲者翻到下一页幻灯片继续讲解。',
    words: [
      { w: 'slide', ipa: '/slaɪd/', pos: '名词', cn: '幻灯片；页面', memory: 'slide 本义是滑动，在演示软件中指一页幻灯片。', phonics: 'sl 读 /sl/，ide 读 /aɪd/，单音节。', collocations: [['next slide', '下一页'], ['previous slide', '上一页'], ['slide show', '幻灯片放映']], examples: [['Go to the next slide.', '翻到下一页。'], ['This slide has the data.', '这页有数据。']] },
    ],
    phrases: [
      { p: 'move to the next slide', ipa: '/muːv tuː ðə nɛkst slaɪd/', cn: '翻到下一页', why: 'move to 表示移动到，next slide 指下一张幻灯片。' },
    ],
    grammar: [
      { q: 'move to 和 go to 在翻页场景下有什么区别？', a: '两者意思相同，都指翻到下一页。\nmove to 稍正式，go to 更口语化。\n会议中两种都可以用：Could you move to the next slide? / Could you go to the next slide?' },
    ],
    pattern: 'Could you move to the next/previous slide?',
    patternExamples: [
      { en: 'Could you move to the previous slide?', cn: '请翻回上一页。', words: [] },
      { en: 'Could you move to slide five?', cn: '请翻到第五页。', words: [] },
      { en: 'Could you move to the last slide?', cn: '请翻到最后一页。', words: [] },
    ],
    thinking: '翻页是会议演示中最频繁的操作之一。\nmove to the next slide 是礼貌的翻页请求。\n中文说「翻到下一页」，英语用 move to the next slide。',
    pronunciation: 'slide 读 /slaɪd/，单音节。\n节奏：COULD you ｜ MOVE to the NEXT SLIDE?',
    quiz: [
      { q: '把「请翻到下一页。」用英语说出来。', a: 'Could you move to the next slide?' },
      { q: '「幻灯片」用英语怎么说？', a: 'slide (/slaɪd/)' },
    ],
  },
  {
    id: 2525,
    speaker: 'Engineer',
    en: 'Could you go back one slide?',
    cn: '请返回上一页。',
    ipa: '/kʊd juː ɡəʊ bæk wʌn slaɪd/',
    tags: ['第2525句', '投屏与演示', '★★★★'],
    when: '需要回看上一页的内容，或上一页讲得太快需要再看一遍。',
    words: [
      { w: 'back', ipa: '/bæk/', pos: '副词', cn: '回；返回', memory: 'back 表示方向上的返回、回去。', phonics: 'b 读 /b/，ack 读 /æk/，单音节。', collocations: [['go back', '返回'], ['come back', '回来'], ['scroll back', '往回滚动']], examples: [['Go back to the previous page.', '返回上一页。'], ['Let me go back.', '让我回去看看。']] },
    ],
    phrases: [
      { p: 'go back one slide', ipa: '/ɡəʊ bæk wʌn slaɪd/', cn: '返回上一页幻灯片', why: 'go back + 数量 + slide，表示往回翻指定页数。' },
    ],
    grammar: [
      { q: 'go back one slide 和 go to the previous slide 有区别吗？', a: '意思相同，都是返回上一页。\ngo back one slide 更口语化、更简洁。\ngo to the previous slide 更正式、更明确。\n日常会议中两种都可以用。' },
    ],
    pattern: 'Could you go back + 数量 + slide(s)?',
    patternExamples: [
      { en: 'Could you go back two slides?', cn: '请返回两页。', words: [] },
      { en: 'Could you go back to the first slide?', cn: '请返回第一页。', words: [] },
      { en: 'Could you go back one page?', cn: '请返回一页。', words: [] },
    ],
    thinking: '回翻幻灯片在讨论和回顾时很常见。\ngo back one slide 是最简洁的回翻表达。\n中文说「返回上一页」，英语用 go back one slide。',
    pronunciation: 'back 读 /bæk/，单音节。\n节奏：COULD you ｜ GO BACK ｜ ONE SLIDE?',
    quiz: [
      { q: '把「请返回上一页。」用英语说出来。', a: 'Could you go back one slide?' },
      { q: '「返回」用英语怎么说？', a: 'go back (/ɡəʊ bæk/)' },
    ],
  },
  {
    id: 2526,
    speaker: 'Engineer',
    en: 'Could you scroll up a little?',
    cn: '请向上滚动一点。',
    ipa: '/kʊd juː skroʊl ʌp ə ˈlɪtl/',
    tags: ['第2526句', '投屏与演示', '★★★★'],
    when: '投屏展示文档或网页时，需要向上滚动查看上面的内容。',
    words: [
      { w: 'scroll', ipa: '/skroʊl/', pos: '动词', cn: '滚动；翻页', memory: 'scroll 本义是卷轴，在电脑语境中指滚动页面。', phonics: 'scr 读 /skr/，oll 读 /oʊl/，单音节。', collocations: [['scroll up', '向上滚动'], ['scroll down', '向下滚动'], ['scroll bar', '滚动条']], examples: [['Scroll down to see more.', '向下滚动看更多。'], ['Scroll up a bit.', '往上滚一点。']] },
    ],
    phrases: [
      { p: 'scroll up', ipa: '/skroʊl ʌp/', cn: '向上滚动', why: 'scroll + up 表示向上方向滚动页面内容。' },
      { p: 'a little', ipa: '/ə ˈlɪtl/', cn: '一点', why: 'a little 表示少量/轻微程度，让请求更温和。' },
    ],
    grammar: [
      { q: 'scroll up 是页面向上还是内容向上？', a: 'scroll up 指内容向上移动，即看到更上方的内容。\n相当于鼠标滚轮向上推，或拖动滚动条向上。\n中文说「往上翻一点」，英语用 scroll up a little。' },
    ],
    pattern: 'Could you scroll up/down + 程度?',
    patternExamples: [
      { en: 'Could you scroll up a bit more?', cn: '能再往上滚一点吗？', words: [] },
      { en: 'Could you scroll down slowly?', cn: '请慢慢往下滚。', words: [] },
      { en: 'Could you scroll up to the top?', cn: '请滚到最上面。', words: [] },
    ],
    thinking: '滚动操作在展示长文档或网页时必不可少。\nscroll up a little 是温和的滚动请求。\n中文说「向上滚一点」，英语用 scroll up a little。',
    pronunciation: 'scroll 读 /skroʊl/，单音节。\n节奏：COULD you ｜ SCROLL UP ｜ a LIT-tle?',
    quiz: [
      { q: '把「请向上滚动一点。」用英语说出来。', a: 'Could you scroll up a little?' },
      { q: '「滚动」用英语怎么说？', a: 'scroll (/skroʊl/)' },
    ],
  },
  {
    id: 2527,
    speaker: 'Engineer',
    en: 'Could you scroll down a little?',
    cn: '请向下滚动一点。',
    ipa: '/kʊd juː skroʊl daʊn ə ˈlɪtl/',
    tags: ['第2527句', '投屏与演示', '★★★★'],
    when: '投屏展示时需要向下滚动查看下方的数据或内容。',
    words: [
      { w: 'down', ipa: '/daʊn/', pos: '副词', cn: '向下', memory: 'down 表示向下方向。', phonics: 'd 读 /d/，own 读 /aʊn/，单音节。', collocations: [['scroll down', '向下滚动'], ['shut down', '关机'], ['write down', '记下来']], examples: [['Scroll down for more details.', '向下滚动看更多细节。'], ['Move down one row.', '往下移一行。']] },
    ],
    phrases: [
      { p: 'scroll down', ipa: '/skroʊl daʊn/', cn: '向下滚动', why: 'scroll + down 表示向下方向滚动页面内容，查看下方信息。' },
    ],
    grammar: [
      { q: 'a little 和 a bit 有区别吗？', a: '意思完全相同，都表示「一点/稍微」。\na little 稍正式，a bit 更口语化。\n会议中两种都可以：scroll down a little / scroll down a bit。' },
    ],
    pattern: 'Could you scroll down + 程度?',
    patternExamples: [
      { en: 'Could you scroll down a bit?', cn: '能往下滚一点吗？', words: [] },
      { en: 'Could you scroll down to the bottom?', cn: '请滚到最下面。', words: [] },
      { en: 'Could you scroll down slowly?', cn: '请慢慢往下滚。', words: [] },
    ],
    thinking: '向下滚动查看内容是最常见的投屏操作指令。\nscroll down a little 语气礼貌且明确。\n中文说「往下滚一点」，英语用 scroll down a little。',
    pronunciation: 'down 读 /daʊn/，单音节。\n节奏：COULD you ｜ SCROLL DOWN ｜ a LIT-tle?',
    quiz: [
      { q: '把「请向下滚动一点。」用英语说出来。', a: 'Could you scroll down a little?' },
      { q: '「向下滚动」用英语怎么说？', a: 'scroll down (/skroʊl daʊn/)' },
    ],
  },
  {
    id: 2528,
    speaker: 'Engineer',
    en: 'Please stop here for a moment.',
    cn: '请先停在这里。',
    ipa: '/pliːz stɒp hɪər fɔːr ə ˈməʊmənt/',
    tags: ['第2528句', '投屏与演示', '★★★★'],
    when: '演示者滚动太快，需要停下来让与会者看清当前内容。',
    words: [
      { w: 'stop', ipa: '/stɒp/', pos: '动词', cn: '停止；停下', memory: 'stop 表示停止当前动作。', phonics: 'st 读 /st/，op 读 /ɒp/，单音节。', collocations: [['stop here', '停在这里'], ['stop sharing', '停止共享'], ['stop for a moment', '暂停一下']], examples: [['Please stop the recording.', '请停止录制。'], ['Stop here, let me check.', '停在这里，让我看看。']] },
      { w: 'moment', ipa: '/ˈməʊmənt/', pos: '名词', cn: '片刻；一会儿', memory: 'moment 表示很短的时间段。', phonics: 'mo 读 /məʊ/，ment 读 /mənt/，重音在第一音节。', collocations: [['for a moment', '一会儿'], ['at the moment', '此刻'], ['wait a moment', '等一下']], examples: [['Give me a moment.', '给我一会儿时间。'], ['One moment, please.', '请稍等。']] },
    ],
    phrases: [
      { p: 'stop here', ipa: '/stɒp hɪər/', cn: '停在这里', why: 'stop + here 指定停在当前位置，不继续滚动或翻页。' },
      { p: 'for a moment', ipa: '/fɔːr ə ˈməʊmənt/', cn: '一会儿', why: 'for a moment 表示短暂暂停，不是永久停止。' },
    ],
    grammar: [
      { q: 'stop here 和 pause here 有什么区别？', a: 'stop 表示完全停下，pause 表示暂停（暗示会继续）。\n在投屏场景中，stop here 更常用，意思是「先别动了」。\npause here 更常用于视频/音频播放的暂停。' },
    ],
    pattern: 'Please stop here + 时间/原因.',
    patternExamples: [
      { en: 'Please stop here so we can read it.', cn: '请停在这里让我们看看。', words: [] },
      { en: 'Please stop here for a second.', cn: '请停一秒。', words: [] },
      { en: 'Please stop here, I have a question.', cn: '请停在这里，我有个问题。', words: [] },
    ],
    thinking: '演示时控制节奏很重要，需要适时停下来让与会者消化信息。\nstop here for a moment 是礼貌的暂停请求。\n中文说「先停在这里」，英语用 stop here for a moment。',
    pronunciation: 'stop 读 /stɒp/，单音节。\nmoment 重音在第一音节：MO-ment。\n节奏：PLEASE STOP HERE ｜ for a MO-ment.',
    quiz: [
      { q: '把「请先停在这里。」用英语说出来。', a: 'Please stop here for a moment.' },
      { q: '「一会儿」用英语怎么说？', a: 'a moment (/ə ˈməʊmənt/) 或 for a moment' },
    ],
  },
  {
    id: 2529,
    speaker: 'Engineer',
    en: 'Could you zoom in a little more?',
    cn: '请再放大一点。',
    ipa: '/kʊd juː zuːm ɪn ə ˈlɪtl mɔːr/',
    tags: ['第2529句', '投屏与演示', '★★★★'],
    when: '投屏内容字体太小，后排同事看不清，需要放大。',
    words: [
      { w: 'zoom', ipa: '/zuːm/', pos: '动词', cn: '缩放；放大/缩小', memory: 'zoom 模拟快速移动的嗡嗡声，在数字语境中指缩放视图。', phonics: 'z 读 /z/，oom 读 /uːm/，单音节。', collocations: [['zoom in', '放大'], ['zoom out', '缩小'], ['zoom level', '缩放级别']], examples: [['Zoom in on this chart.', '放大这张图表。'], ['Zoom out to see the full picture.', '缩小看全貌。']] },
    ],
    phrases: [
      { p: 'zoom in', ipa: '/zuːm ɪn/', cn: '放大', why: 'zoom in 表示放大视图，让内容更大更清晰。' },
      { p: 'a little more', ipa: '/ə ˈlɪtl mɔːr/', cn: '再多一点', why: 'more 表示在已有基础上再增加，说明之前已经放大过但还不够。' },
    ],
    grammar: [
      { q: 'zoom in 和 enlarge 有什么区别？', a: 'zoom in 指视图缩放（放大镜效果），内容本身不变。\nenlarge 指将内容/图片本身变大。\n在电脑/投屏操作中，zoom in 更常用。' },
    ],
    pattern: 'Could you zoom in + 程度?',
    patternExamples: [
      { en: 'Could you zoom in on the numbers?', cn: '请把数字放大看看。', words: [] },
      { en: 'Could you zoom in a bit more?', cn: '能再放大一点吗？', words: [] },
      { en: 'Could you zoom in on this section?', cn: '请放大这个区域。', words: [] },
    ],
    thinking: '放大视图是投屏演示中帮助与会者看清细节的重要操作。\nzoom in a little more 表示在现有基础上再放大一些。\n中文说「再放大一点」，英语用 zoom in a little more。',
    pronunciation: 'zoom 读 /zuːm/，单音节。\n节奏：COULD you ｜ ZOOM IN ｜ a LIT-tle MORE?',
    quiz: [
      { q: '把「请再放大一点。」用英语说出来。', a: 'Could you zoom in a little more?' },
      { q: '「放大」用英语怎么说？', a: 'zoom in (/zuːm ɪn/)' },
    ],
  },
  {
    id: 2530,
    speaker: 'Engineer',
    en: 'Could you zoom out slightly?',
    cn: '请稍微缩小一点。',
    ipa: '/kʊd juː zuːm aʊt ˈslaɪtli/',
    tags: ['第2530句', '投屏与演示', '★★★★'],
    when: '放大太多只看到局部，需要缩小一点看全貌。',
    words: [
      { w: 'slightly', ipa: '/ˈslaɪtli/', pos: '副词', cn: '稍微；轻微地', memory: 'slight(轻微的)+ly(副词后缀)→稍微地。', phonics: 'slight 读 /slaɪt/，ly 读 /li/，重音在第一音节。', collocations: [['slightly different', '稍有不同'], ['move slightly', '稍微移动']], examples: [['Zoom out slightly.', '稍微缩小一点。'], ['Move it slightly to the left.', '稍微往左移一点。']] },
    ],
    phrases: [
      { p: 'zoom out', ipa: '/zuːm aʊt/', cn: '缩小', why: 'zoom out 表示缩小视图，看到更大范围的内容。' },
      { p: 'slightly', ipa: '/ˈslaɪtli/', cn: '稍微', why: 'slightly 比 a little 更正式，表示轻微的调整。' },
    ],
    grammar: [
      { q: 'slightly 和 a little 在程度修饰上有什么区别？', a: '两者意思相同，都表示「稍微/一点」。\nslightly 更正式，常用于书面和专业语境。\na little 更口语化，日常对话中更常用。\n会议中两种都可以：zoom out slightly / zoom out a little。' },
    ],
    pattern: 'Could you zoom out + 程度?',
    patternExamples: [
      { en: 'Could you zoom out a bit?', cn: '能缩小一点吗？', words: [] },
      { en: 'Could you zoom out to show everything?', cn: '请缩小显示所有内容。', words: [] },
      { en: 'Could you zoom out a little more?', cn: '能再缩小一点吗？', words: [] },
    ],
    thinking: '缩小视图用于查看全局或完整内容。\nzoom out slightly 是精确的缩小请求。\n中文说「稍微缩小一点」，英语用 zoom out slightly。',
    pronunciation: 'slightly 重音在第一音节：SLIGHT-ly。\n节奏：COULD you ｜ ZOOM OUT ｜ SLIGHT-ly?',
    quiz: [
      { q: '把「请稍微缩小一点。」用英语说出来。', a: 'Could you zoom out slightly?' },
      { q: '「缩小」用英语怎么说？', a: 'zoom out (/zuːm aʊt/)' },
    ],
  },
  {
    id: 2531,
    speaker: 'Engineer',
    en: 'Can everyone see my screen?',
    cn: '大家都能看到我的屏幕吗？',
    ipa: '/kæn ˈɛvriwʌn siː maɪ skriːn/',
    tags: ['第2531句', '会议沟通', '★★★★★'],
    when: '开始投屏或共享屏幕后，确认所有与会者都能看到画面。',
    words: [
      { w: 'everyone', ipa: '/ˈɛvriwʌn/', pos: '代词', cn: '大家；每个人', memory: 'every(每个)+one(人)→每一个人。', phonics: 'ev 读 /ɛv/，ry 读 /ri/，one 读 /wʌn/。', collocations: [['everyone here', '在场的每个人'], ['can everyone', '大家都能…吗']], examples: [['Can everyone hear me?', '大家都能听到我吗？'], ['Is everyone ready?', '大家都准备好了吗？']] },
    ],
    phrases: [
      { p: 'Can everyone see', ipa: '/kæn ˈɛvriwʌn siː/', cn: '大家都能看到吗', why: 'Can everyone + 动词 是确认全体与会者状态的常用句式。' },
    ],
    grammar: [
      { q: '为什么用 Can everyone 而不是 Does everyone？', a: 'Can everyone see 询问的是能力（能不能看到）。\nDoes everyone see 询问的是事实（有没有在看）。\n投屏确认时关心的是「能不能看到」，所以用 Can。' },
    ],
    pattern: 'Can everyone + 动词 + 对象?',
    patternExamples: [
      { en: 'Can everyone hear me?', cn: '大家都能听到我吗？', words: [] },
      { en: 'Can everyone see the chart?', cn: '大家都能看到图表吗？', words: [] },
      { en: 'Can everyone access the file?', cn: '大家都能访问文件吗？', words: [] },
    ],
    thinking: '投屏后确认所有人能看到是最基本的会议沟通。\nCan everyone see my screen 是标准的确认句式。\n中文说「大家都能看到我的屏幕吗」，英语用 Can everyone see my screen。',
    pronunciation: 'everyone 重音在第一音节：EV-ry-one。\n节奏：CAN EV-ry-one ｜ SEE my SCREEN?',
    quiz: [
      { q: '把「大家都能看到我的屏幕吗？」用英语说出来。', a: 'Can everyone see my screen?' },
      { q: '「大家都能…吗」用英语怎么说？', a: 'Can everyone...?' },
    ],
  },
  {
    id: 2532,
    speaker: 'Engineer',
    en: 'Can everyone hear me clearly?',
    cn: '大家都能清楚听到我的声音吗？',
    ipa: '/kæn ˈɛvriwʌn hɪər miː ˈklɪərli/',
    tags: ['第2532句', '会议沟通', '★★★★★'],
    when: '视频会议开始时确认音频连接正常，所有人能听清发言。',
    words: [
      { w: 'clearly', ipa: '/ˈklɪərli/', pos: '副词', cn: '清楚地；清晰地', memory: 'clear(清楚的)+ly(副词后缀)→清楚地。', phonics: 'clear 读 /klɪər/，ly 读 /li/，重音在第一音节。', collocations: [['hear clearly', '听清楚'], ['speak clearly', '说清楚'], ['see clearly', '看清楚']], examples: [['Can you hear me clearly?', '你能听清我说话吗？'], ['Please speak clearly.', '请说清楚。']] },
    ],
    phrases: [
      { p: 'hear me clearly', ipa: '/hɪər miː ˈklɪərli/', cn: '清楚听到我的声音', why: 'clearly 修饰 hear，强调音频质量清晰可辨。' },
    ],
    grammar: [
      { q: 'clearly 放在句末和句中有什么区别？', a: 'Can everyone hear me clearly?（句末）—— 修饰 hear，强调听的效果。\nCan everyone clearly hear me?（句中）—— 同样修饰 hear，语感更强调「清楚」。\n两种位置都正确，句末更自然。' },
    ],
    pattern: 'Can everyone + 感官动词 + me + clearly?',
    patternExamples: [
      { en: 'Can everyone see me clearly?', cn: '大家都能清楚看到我吗？', words: [] },
      { en: 'Can you hear me clearly?', cn: '你能听清我说话吗？', words: [] },
      { en: 'Can everyone read this clearly?', cn: '大家都能看清这个吗？', words: [] },
    ],
    thinking: '视频会议中音频确认是开会前的必要步骤。\nCan everyone hear me clearly 是标准的音频确认句式。\n中文说「大家都能清楚听到吗」，英语用 Can everyone hear me clearly。',
    pronunciation: 'clearly 重音在第一音节：CLEAR-ly。\n节奏：CAN EV-ry-one ｜ HEAR me ｜ CLEAR-ly?',
    quiz: [
      { q: '把「大家都能清楚听到我的声音吗？」用英语说出来。', a: 'Can everyone hear me clearly?' },
      { q: '「清楚地」用英语怎么说？', a: 'clearly (/ˈklɪərli/)' },
    ],
  },
  {
    id: 2533,
    speaker: 'Engineer',
    en: 'Your microphone is muted.',
    cn: '你的麦克风处于静音状态。',
    ipa: '/jɔːr ˈmaɪkrəfəʊn ɪz ˈmjuːtɪd/',
    tags: ['第2533句', '会议沟通', '★★★★★'],
    when: '视频会议中发现同事的麦克风被静音，提醒对方。',
    words: [
      { w: 'microphone', ipa: '/ˈmaɪkrəfəʊn/', pos: '名词', cn: '麦克风；话筒', memory: 'micro(微小)+phone(声音)→捕捉微小声音的设备→麦克风。', phonics: 'mi 读 /maɪ/，cro 读 /krə/，phone 读 /fəʊn/，重音在第一音节。', collocations: [['turn on microphone', '打开麦克风'], ['mute microphone', '静音麦克风']], examples: [['Your microphone is off.', '你的麦克风没开。'], ['Check your microphone.', '检查一下麦克风。']] },
      { w: 'muted', ipa: '/ˈmjuːtɪd/', pos: '形容词（过去分词）', cn: '静音的', memory: 'mute(静音)+ed(形容词化)→被静音的。', phonics: 'mu 读 /mjuː/，ted 读 /tɪd/，重音在第一音节。', collocations: [['is muted', '处于静音'], ['you are muted', '你被静音了']], examples: [['You are muted.', '你被静音了。'], ['The audio is muted.', '音频被静音了。']] },
    ],
    phrases: [
      { p: 'is muted', ipa: '/ɪz ˈmjuːtɪd/', cn: '处于静音状态', why: 'is + muted 表示当前的静音状态，muted 作形容词用。' },
    ],
    grammar: [
      { q: 'is muted 和 has been muted 有什么区别？', a: 'is muted 描述当前状态（现在是静音的）。\nhas been muted 描述动作（已经被某人静音了）。\n提醒同事时用 is muted 更简洁直接。' },
    ],
    pattern: 'Your + 设备 + is + 状态.',
    patternExamples: [
      { en: 'Your camera is off.', cn: '你的摄像头没开。', words: [] },
      { en: 'Your screen is not sharing.', cn: '你的屏幕没有共享。', words: [] },
      { en: 'Your audio is not working.', cn: '你的音频不工作。', words: [] },
    ],
    thinking: '视频会议中麦克风静音是最常见的问题之一。\nYour microphone is muted 直接指出问题状态。\n中文说「你的麦克风静音了」，英语用 Your microphone is muted。',
    pronunciation: 'microphone 重音在第一音节：MI-cro-phone。\nmuted 重音在第一音节：MU-ted。\n节奏：Your MI-cro-phone ｜ is MU-ted.',
    quiz: [
      { q: '把「你的麦克风处于静音状态。」用英语说出来。', a: 'Your microphone is muted.' },
      { q: '「静音的」用英语怎么说？', a: 'muted (/ˈmjuːtɪd/)' },
    ],
  },
  {
    id: 2534,
    speaker: 'Engineer',
    en: 'Please unmute your microphone.',
    cn: '请打开你的麦克风。',
    ipa: '/pliːz ʌnˈmjuːt jɔːr ˈmaɪkrəfəʊn/',
    tags: ['第2534句', '会议沟通', '★★★★★'],
    when: '需要同事发言时，请对方解除麦克风静音。',
    words: [
      { w: 'unmute', ipa: '/ʌnˈmjuːt/', pos: '动词', cn: '解除静音；打开麦克风', memory: 'un(取消)+mute(静音)→取消静音→打开麦克风。', phonics: 'un 读 /ʌn/，mute 读 /mjuːt/，重音在第二音节。', collocations: [['unmute yourself', '解除自己的静音'], ['unmute microphone', '打开麦克风']], examples: [['Please unmute yourself.', '请解除静音。'], ['Can you unmute?', '你能打开麦克风吗？']] },
    ],
    phrases: [
      { p: 'unmute your microphone', ipa: '/ʌnˈmjuːt jɔːr ˈmaɪkrəfəʊn/', cn: '打开麦克风', why: 'unmute 是 mute 的反义词，表示解除静音状态。' },
    ],
    grammar: [
      { q: 'unmute 和 turn on 在麦克风语境下有什么区别？', a: 'unmute 专门指解除静音（之前是静音状态）。\nturn on 指打开设备（之前是关闭状态）。\n如果麦克风开着但被静音了，用 unmute；如果麦克风整个没开，用 turn on。' },
    ],
    pattern: 'Please unmute + 设备.',
    patternExamples: [
      { en: 'Please unmute yourself.', cn: '请解除你的静音。', words: [] },
      { en: 'Please unmute your audio.', cn: '请打开你的音频。', words: [] },
      { en: 'Could you unmute for a moment?', cn: '你能暂时解除静音吗？', words: [] },
    ],
    thinking: '解除静音是视频会议中最频繁的操作指令。\nunmute 是视频会议的专用术语。\n中文说「打开麦克风」，英语用 unmute your microphone。',
    pronunciation: 'unmute 重音在第二音节：un-MUTE。\n节奏：Please un-MUTE ｜ your MI-cro-phone.',
    quiz: [
      { q: '把「请打开你的麦克风。」用英语说出来。', a: 'Please unmute your microphone.' },
      { q: '「解除静音」用英语怎么说？', a: 'unmute (/ʌnˈmjuːt/)' },
    ],
  },
  {
    id: 2535,
    speaker: 'Engineer',
    en: 'Please mute your microphone when you are not speaking.',
    cn: '不发言时请将麦克风静音。',
    ipa: '/pliːz mjuːt jɔːr ˈmaɪkrəfəʊn wɛn juː ɑːr nɒt ˈspiːkɪŋ/',
    tags: ['第2535句', '会议沟通', '★★★★★'],
    when: '会议开始时提醒所有与会者在不发言时保持静音，减少背景噪音。',
    words: [
      { w: 'speaking', ipa: '/ˈspiːkɪŋ/', pos: '动词（现在分词）', cn: '说话；发言', memory: 'speak(说话)+ing(进行时)→正在说话。', phonics: 'speak 读 /spiːk/，ing 读 /ɪŋ/。', collocations: [['not speaking', '不发言'], ['speaking now', '正在发言']], examples: [['Are you speaking?', '你在说话吗？'], ['When I am speaking, please listen.', '我说话时请听。']] },
    ],
    phrases: [
      { p: 'mute your microphone', ipa: '/mjuːt jɔːr ˈmaɪkrəfəʊn/', cn: '将麦克风静音', why: 'mute 作动词，表示使设备静音。' },
      { p: 'when you are not speaking', ipa: '/wɛn juː ɑːr nɒt ˈspiːkɪŋ/', cn: '不发言时', why: 'when + 进行时从句，表示在某个条件/时间段内。' },
    ],
    grammar: [
      { q: 'when you are not speaking 可以用 if 替换吗？', a: '可以，但语感不同：\nwhen you are not speaking = 当你不发言的时候（时间条件，每次不发言时都要静音）\nif you are not speaking = 如果你不发言（假设条件，暗示可能不需要发言）\n会议规则中用 when 更合适。' },
    ],
    pattern: 'Please mute + 设备 + when + 条件.',
    patternExamples: [
      { en: 'Please mute when listening.', cn: '听的时候请静音。', words: [] },
      { en: 'Please mute your phone during the meeting.', cn: '会议中请将手机静音。', words: [] },
      { en: 'Please mute when someone else is presenting.', cn: '别人演示时请静音。', words: [] },
    ],
    thinking: '保持静音是视频会议的基本礼仪，能减少背景噪音干扰。\n这句话是会议主持人的标准开场提醒。\n中文说「不发言时请静音」，英语用 Please mute your microphone when you are not speaking。',
    pronunciation: 'mute 读 /mjuːt/，speaking 重音在第一音节：SPEAK-ing。\n节奏：Please MUTE your MI-cro-phone ｜ WHEN you are NOT SPEAK-ing.',
    quiz: [
      { q: '把「不发言时请将麦克风静音。」用英语说出来。', a: 'Please mute your microphone when you are not speaking.' },
      { q: '「将…静音」用英语怎么说？', a: 'mute (/mjuːt/)' },
    ],
  },
  {
    id: 2536,
    speaker: 'Engineer',
    en: 'Your camera is off.',
    cn: '你的摄像头没有打开。',
    ipa: '/jɔːr ˈkæmərə ɪz ɒf/',
    tags: ['第2536句', '会议沟通', '★★★★'],
    when: '视频会议中发现同事的摄像头没有打开，提醒对方。',
    words: [
      { w: 'camera', ipa: '/ˈkæmərə/', pos: '名词', cn: '摄像头；相机', memory: 'camera 源自拉丁语，意为「暗室」，现指摄像/照相设备。', phonics: 'cam 读 /kæm/，er 读 /ər/，a 读 /ə/，重音在第一音节。', collocations: [['turn on camera', '打开摄像头'], ['camera is off', '摄像头关闭'], ['web camera', '网络摄像头']], examples: [['Turn on your camera.', '打开摄像头。'], ['My camera is not working.', '我的摄像头不工作。']] },
    ],
    phrases: [
      { p: 'is off', ipa: '/ɪz ɒf/', cn: '处于关闭状态', why: 'is + off 表示设备当前处于关闭状态，与 is on（开着）相对。' },
    ],
    grammar: [
      { q: 'is off 和 is turned off 有什么区别？', a: 'is off 描述当前状态（现在是关的），更简洁。\nis turned off 强调被动动作（被人关掉了）。\n日常提醒用 is off 更自然。' },
    ],
    pattern: 'Your + 设备 + is off/on.',
    patternExamples: [
      { en: 'Your camera is on.', cn: '你的摄像头开着。', words: [] },
      { en: 'Your microphone is off.', cn: '你的麦克风关着。', words: [] },
      { en: 'Your screen share is off.', cn: '你的屏幕共享关着。', words: [] },
    ],
    thinking: '摄像头状态是视频会议中需要关注的设备状态之一。\nYour camera is off 直接指出设备状态。\n中文说「你的摄像头没开」，英语用 Your camera is off。',
    pronunciation: 'camera 重音在第一音节：CAM-er-a。\n节奏：Your CAM-er-a ｜ is OFF.',
    quiz: [
      { q: '把「你的摄像头没有打开。」用英语说出来。', a: 'Your camera is off.' },
      { q: '「摄像头」用英语怎么说？', a: 'camera (/ˈkæmərə/)' },
    ],
  },
  {
    id: 2537,
    speaker: 'Engineer',
    en: 'Please turn on your camera if possible.',
    cn: '如果方便的话，请打开摄像头。',
    ipa: '/pliːz tɜːrn ɒn jɔːr ˈkæmərə ɪf ˈpɒsɪbl/',
    tags: ['第2537句', '会议沟通', '★★★★'],
    when: '希望同事打开摄像头以增强沟通效果，但尊重对方的选择。',
    words: [
      { w: 'possible', ipa: '/ˈpɒsɪbl/', pos: '形容词', cn: '可能的；可行的', memory: 'poss(能够)+ible(形容词后缀)→能够做到的→可能的。', phonics: 'pos 读 /pɒs/，si 读 /sɪ/，ble 读 /bl/，重音在第一音节。', collocations: [['if possible', '如果可能的话'], ['as soon as possible', '尽快']], examples: [['Come early if possible.', '如果可以的话早点来。'], ['Is it possible?', '有可能吗？']] },
    ],
    phrases: [
      { p: 'turn on your camera', ipa: '/tɜːrn ɒn jɔːr ˈkæmərə/', cn: '打开摄像头', why: 'turn on 表示打开/启动设备。' },
      { p: 'if possible', ipa: '/ɪf ˈpɒsɪbl/', cn: '如果方便的话', why: 'if possible 是一种礼貌的限定，表示不强求，尊重对方。' },
    ],
    grammar: [
      { q: 'if possible 放在句首还是句末？', a: '通常放在句末，作为补充条件：Please turn on your camera if possible.\n放在句首也可以，但较少：If possible, please turn on your camera.\n句末更自然，先说主要请求再加条件。' },
    ],
    pattern: 'Please + 动作 + if possible.',
    patternExamples: [
      { en: 'Please join the call if possible.', cn: '如果可以的话请加入通话。', words: [] },
      { en: 'Please send it today if possible.', cn: '如果可以的话请今天发。', words: [] },
      { en: 'Please reply soon if possible.', cn: '如果可以的话请尽快回复。', words: [] },
    ],
    thinking: '打开摄像头有助于面对面沟通，但不是强制要求。\nif possible 体现了对同事的尊重。\n中文说「如果方便的话请打开摄像头」，英语用 Please turn on your camera if possible。',
    pronunciation: 'possible 重音在第一音节：POS-si-ble。\n节奏：Please TURN ON your CAM-er-a ｜ if POS-si-ble.',
    quiz: [
      { q: '把「如果方便的话，请打开摄像头。」用英语说出来。', a: 'Please turn on your camera if possible.' },
      { q: '「如果可能的话」用英语怎么说？', a: 'if possible (/ɪf ˈpɒsɪbl/)' },
    ],
  },
  {
    id: 2538,
    speaker: 'Engineer',
    en: 'The audio is breaking up.',
    cn: '声音断断续续。',
    ipa: '/ði ˈɔːdiəʊ ɪz ˈbreɪkɪŋ ʌp/',
    tags: ['第2538句', '会议沟通', '★★★★'],
    when: '视频会议中音频质量差，声音时断时续，需要告知对方。',
    words: [
      { w: 'audio', ipa: '/ˈɔːdiəʊ/', pos: '名词', cn: '音频；声音', memory: 'audio 源自拉丁语 audire(听)，指声音信号。', phonics: 'au 读 /ɔː/，di 读 /di/，o 读 /əʊ/，重音在第一音节。', collocations: [['audio quality', '音频质量'], ['audio settings', '音频设置'], ['audio problem', '音频问题']], examples: [['The audio is clear.', '音频清晰。'], ['Check the audio settings.', '检查音频设置。']] },
      { w: 'breaking up', ipa: '/ˈbreɪkɪŋ ʌp/', pos: '动词短语', cn: '断断续续；中断', memory: 'break(断开)+up(完全)→完全断开→信号中断。', phonics: 'break 读 /breɪk/，up 读 /ʌp/。', collocations: [['breaking up', '断断续续'], ['call is breaking up', '通话断断续续']], examples: [['You are breaking up.', '你的声音断断续续。'], ['The signal is breaking up.', '信号断了。']] },
    ],
    phrases: [
      { p: 'is breaking up', ipa: '/ɪz ˈbreɪkɪŋ ʌp/', cn: '断断续续', why: 'break up 在通信语境中指信号/声音时断时续，不连贯。' },
    ],
    grammar: [
      { q: 'breaking up 和 cutting out 有什么区别？', a: 'breaking up 指声音时断时续，还能听到一部分。\ncutting out 指声音完全消失一段时间后又恢复。\nbreaking up 程度较轻，cutting out 程度更重。' },
    ],
    pattern: 'The + 信号/设备 + is breaking up.',
    patternExamples: [
      { en: 'Your voice is breaking up.', cn: '你的声音断断续续。', words: [] },
      { en: 'The connection is breaking up.', cn: '连接断断续续。', words: [] },
      { en: 'The video is breaking up.', cn: '视频断断续续。', words: [] },
    ],
    thinking: '音频问题是视频会议的常见技术故障。\nbreaking up 是描述音频断续的标准表达。\n中文说「声音断断续续」，英语用 The audio is breaking up。',
    pronunciation: 'audio 重音在第一音节：AU-di-o。\nbreaking up 连读：break-ing-up。\n节奏：The AU-di-o ｜ is BREAK-ing UP.',
    quiz: [
      { q: '把「声音断断续续。」用英语说出来。', a: 'The audio is breaking up.' },
      { q: '「断断续续」用英语怎么说？', a: 'breaking up (/ˈbreɪkɪŋ ʌp/)' },
    ],
  },
  {
    id: 2539,
    speaker: 'Engineer',
    en: 'Your voice is echoing.',
    cn: '你的声音有回音。',
    ipa: '/jɔːr vɔɪs ɪz ˈɛkəʊɪŋ/',
    tags: ['第2539句', '会议沟通', '★★★★'],
    when: '视频会议中听到回声，需要告知对方处理。',
    words: [
      { w: 'echoing', ipa: '/ˈɛkəʊɪŋ/', pos: '动词（现在分词）', cn: '产生回声；有回音', memory: 'echo(回声)+ing(进行时)→正在产生回声。', phonics: 'ech 读 /ɛk/，o 读 /əʊ/，ing 读 /ɪŋ/，重音在第一音节。', collocations: [['is echoing', '有回音'], ['echo effect', '回声效果']], examples: [['There is an echo.', '有回音。'], ['Your voice has an echo.', '你的声音有回音。']] },
    ],
    phrases: [
      { p: 'is echoing', ipa: '/ɪz ˈɛkəʊɪŋ/', cn: '有回音', why: 'echo 作动词，is echoing 表示正在产生回声的状态。' },
    ],
    grammar: [
      { q: 'is echoing 和 has an echo 有什么区别？', a: 'is echoing 是动词形式，强调正在产生回声的动作。\nhas an echo 是名词形式，描述存在回声的状态。\n两种都正确：Your voice is echoing. / Your voice has an echo.' },
    ],
    pattern: 'Your + 声音/音频 + is echoing.',
    patternExamples: [
      { en: 'There is an echo in the call.', cn: '通话中有回音。', words: [] },
      { en: 'I can hear an echo.', cn: '我能听到回音。', words: [] },
      { en: 'The echo is very loud.', cn: '回音很大。', words: [] },
    ],
    thinking: '回声通常是因为扬声器声音被麦克风重新拾取造成的。\n提醒对方有回音可以帮助解决音频问题。\n中文说「你的声音有回音」，英语用 Your voice is echoing。',
    pronunciation: 'echoing 重音在第一音节：ECH-o-ing。\n节奏：Your VOICE ｜ is ECH-o-ing.',
    quiz: [
      { q: '把「你的声音有回音。」用英语说出来。', a: 'Your voice is echoing.' },
      { q: '「回音」用英语怎么说？', a: 'echo (/ˈɛkəʊ/)' },
    ],
  },
  {
    id: 2540,
    speaker: 'Engineer',
    en: 'I cannot hear you clearly.',
    cn: '我听不清你的声音。',
    ipa: '/aɪ ˈkænɒt hɪər juː ˈklɪərli/',
    tags: ['第2540句', '会议沟通', '★★★★★'],
    when: '对方声音不清楚，需要告知对方检查音频设备或网络。',
    words: [
      { w: 'cannot', ipa: '/ˈkænɒt/', pos: '情态动词（否定）', cn: '不能；无法', memory: 'can(能)+not(不)→不能。', phonics: 'can 读 /kæn/，not 读 /ɒt/，重音在第一音节。', collocations: [['cannot hear', '听不到'], ['cannot see', '看不到'], ['cannot connect', '无法连接']], examples: [['I cannot hear you.', '我听不到你说话。'], ['I cannot access the file.', '我无法访问文件。']] },
    ],
    phrases: [
      { p: 'cannot hear you clearly', ipa: '/ˈkænɒt hɪər juː ˈklɪərli/', cn: '听不清你的声音', why: 'cannot + hear + clearly 表示无法清楚地听到，是音频问题的常用表达。' },
    ],
    grammar: [
      { q: 'cannot 和 can\'t 有区别吗？', a: '意思完全相同，cannot 更正式，can\'t 更口语化。\n正式会议中用 cannot，日常沟通用 can\'t 都可以。\nI cannot hear you clearly. / I can\'t hear you clearly. 都对。' },
    ],
    pattern: 'I cannot + 感官动词 + 对象 + clearly.',
    patternExamples: [
      { en: 'I cannot see the screen clearly.', cn: '我看不清屏幕。', words: [] },
      { en: 'I cannot read the text clearly.', cn: '我看不清文字。', words: [] },
      { en: 'I cannot hear the presentation clearly.', cn: '我听不清演示。', words: [] },
    ],
    thinking: '听不清对方声音时需要及时反馈，以便对方调整设备。\nI cannot hear you clearly 是直接但礼貌的反馈。\n中文说「我听不清你的声音」，英语用 I cannot hear you clearly。',
    pronunciation: 'cannot 重音在第一音节：CAN-not。\nclearly 重音在第一音节：CLEAR-ly。\n节奏：I CAN-not ｜ HEAR you ｜ CLEAR-ly.',
    quiz: [
      { q: '把「我听不清你的声音。」用英语说出来。', a: 'I cannot hear you clearly.' },
      { q: '「听不清」用英语怎么说？', a: 'cannot hear clearly (/ˈkænɒt hɪər ˈklɪərli/)' },
    ],
  },
];

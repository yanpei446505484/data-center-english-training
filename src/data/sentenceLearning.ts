// EXPORTS: ISentence, ISentenceWord, ISentencePhrase, ISentenceGrammar, IPatternExample, IPatternExampleWord, SENTENCE_SECTIONS, MOCK_SENTENCES

import { MOCK_SENTENCES_PART1A } from './sentencePart1a';
import { MOCK_SENTENCES_PART1B } from './sentencePart1b';
import { MOCK_SENTENCES_PART3A } from './sentencePart3a';
import { MOCK_SENTENCES_PART3B } from './sentencePart3b';
import { MOCK_SENTENCES_PART4A } from './sentencePart4a';
import { MOCK_SENTENCES_PART4B } from './sentencePart4b';
import { MOCK_SENTENCES_PART5A } from './sentencePart5a';
import { MOCK_SENTENCES_PART5B } from './sentencePart5b';
import { MOCK_SENTENCES_PART6A } from './sentencePart6a';
import { MOCK_SENTENCES_PART6B } from './sentencePart6b';
import { MOCK_SENTENCES_PART7A } from './sentencePart7a';
import { MOCK_SENTENCES_PART7B } from './sentencePart7b';
import { MOCK_SENTENCES_PART8A } from './sentencePart8a';
import { MOCK_SENTENCES_PART8B } from './sentencePart8b';
import { MOCK_SENTENCES_PART9A } from './sentencePart9a';
import { MOCK_SENTENCES_PART9B } from './sentencePart9b';
import { MOCK_SENTENCES_PART10A } from './sentencePart10a';
import { MOCK_SENTENCES_PART10B } from './sentencePart10b';
import { MOCK_SENTENCES_PART11A } from './sentencePart11a';
import { MOCK_SENTENCES_PART11B } from './sentencePart11b';
import { MOCK_SENTENCES_PART12A } from './sentencePart12a';
import { MOCK_SENTENCES_PART12B } from './sentencePart12b';
import { MOCK_SENTENCES_PART13A } from './sentencePart13a';
import { MOCK_SENTENCES_PART13B } from './sentencePart13b';
import { MOCK_SENTENCES_PART14A } from './sentencePart14a';
import { MOCK_SENTENCES_PART14B } from './sentencePart14b';
import { MOCK_SENTENCES_PART15A } from './sentencePart15a';
import { MOCK_SENTENCES_PART15B } from './sentencePart15b';
import { MOCK_SENTENCES_PART15C } from './sentencePart15c';
import { MOCK_SENTENCES_PART15D } from './sentencePart15d';
import { MOCK_SENTENCES_PART16A } from './sentencePart16a';
import { MOCK_SENTENCES_PART16B } from './sentencePart16b';
import { MOCK_SENTENCES_PART16C } from './sentencePart16c';
import { MOCK_SENTENCES_PART16D } from './sentencePart16d';
import { MOCK_SENTENCES_PART17A } from './sentencePart17a';
import { MOCK_SENTENCES_PART17B } from './sentencePart17b';
import { MOCK_SENTENCES_PART18A } from './sentencePart18a';
import { MOCK_SENTENCES_PART18B } from './sentencePart18b';
import { MOCK_SENTENCES_PART19A } from './sentencePart19a';
import { MOCK_SENTENCES_PART19B } from './sentencePart19b';
import { MOCK_SENTENCES_PART20A } from './sentencePart20a';
import { MOCK_SENTENCES_PART20B } from './sentencePart20b';
import { MOCK_SENTENCES_PART21A } from './sentencePart21a';
import { MOCK_SENTENCES_PART21B } from './sentencePart21b';
import { MOCK_SENTENCES_PART22A } from './sentencePart22a';
import { MOCK_SENTENCES_PART22B } from './sentencePart22b';
import { MOCK_SENTENCES_PART23A } from './sentencePart23a';
import { MOCK_SENTENCES_PART23B } from './sentencePart23b';
import { MOCK_SENTENCES_PART24A } from './sentencePart24a';
import { MOCK_SENTENCES_PART24B } from './sentencePart24b';
import { MOCK_SENTENCES_PART25A } from './sentencePart25a';
import { MOCK_SENTENCES_PART25B } from './sentencePart25b';
import { MOCK_SENTENCES_PART26A } from './sentencePart26a';
import { MOCK_SENTENCES_PART26B } from './sentencePart26b';
import { MOCK_SENTENCES_PART27A } from './sentencePart27a';
import { MOCK_SENTENCES_PART27B } from './sentencePart27b';
import { MOCK_SENTENCES_PART28A } from './sentencePart28a';
import { MOCK_SENTENCES_PART28B } from './sentencePart28b';
import { MOCK_SENTENCES_DCIM200A } from './dcim200a';
import { MOCK_SENTENCES_DCIM200B } from './dcim200b';
import { MOCK_SENTENCES_DCIM200C } from './dcim200c';
import { MOCK_SENTENCES_DCIM200D } from './dcim200d';
import { MOCK_SENTENCES_DCIM200E } from './dcim200e';
import { MOCK_SENTENCES_DCIM400A } from './dcim400a';
import { MOCK_SENTENCES_DCIM400B } from './dcim400b';
import { MOCK_SENTENCES_DCIM400C } from './dcim400c';
import { MOCK_SENTENCES_DCIM400D } from './dcim400d';
import { MOCK_SENTENCES_DCIM400E } from './dcim400e';
import { MOCK_SENTENCES_BMS29A } from './bmsMonitor29a';
import { MOCK_SENTENCES_BMS29B } from './bmsMonitor29b';
import { MOCK_SENTENCES_HANDOVER30A } from './handoverSummary30a';
import { MOCK_SENTENCES_HANDOVER30B } from './handoverSummary30b';
import { MOCK_SENTENCES_FACILITY31A } from './facilityTour31a';
import { MOCK_SENTENCES_FACILITY31B } from './facilityTour31b';
import { MOCK_SENTENCES_AUDIT32A } from './customerAudit32a';
import { MOCK_SENTENCES_AUDIT32B } from './customerAudit32b';
import { MOCK_SENTENCES_OPSMEETING33A } from './opsMeeting33a';
import { MOCK_SENTENCES_OPS33B } from './opsMeeting33b';
import { MOCK_SENTENCES_DCMANAGER34A } from './dcManager34a';
import { MOCK_SENTENCES_DCMANAGER34B } from './dcManager34b';
import { MOCK_SENTENCES_MGMTREPORT35A } from './mgmtReport35a';
import { MOCK_SENTENCES_MGMTREPORT35B } from './mgmtReport35b';
import { MOCK_SENTENCES_RECRUITMENT36A } from './recruitment36a';
import { MOCK_SENTENCES_RECRUITMENT36B } from './recruitment36b';
import { MOCK_SENTENCES_PERFORMANCE37A } from './performance37a';
import { MOCK_SENTENCES_PERFORMANCE37B } from './performance37b';
import { MOCK_SENTENCES_CLIENTCOMM38A } from './clientComm38a';
import { MOCK_SENTENCES_CLIENTCOMM38B } from './clientComm38b';
import { MOCK_SENTENCES_RCACAPA39A } from './rcaCapa39a';
import { MOCK_SENTENCES_RCAPAPA39B } from './rcaCapa39b';
import { MOCK_SENTENCES_EMERGENCYCMD40A } from './emergencyCmd40a';
import { MOCK_SENTENCES_EMERGENCYCMD40B } from './emergencyCmd40b';
import { MOCK_SENTENCES_UTILITYPOWER41A } from './utilityPower41a';
import { MOCK_SENTENCES_UTILITYPOWER41B } from './utilityPower41b';
import { MOCK_SENTENCES_UPSFAULT42A } from './upsFault42a';
import { MOCK_SENTENCES_UPSFAULT42B } from './upsFault42b';
import { MOCK_SENTENCES_MORNINGGREET43A } from './morningGreet43a';
import { MOCK_SENTENCES_MORNINGGREET43B } from './morningGreet43b';
import { MOCK_SENTENCES_OFFICEPRINT44A } from './officePrint44a';
import { MOCK_SENTENCES_OFFICEPRINT44B } from './officePrint44b';
import { MOCK_SENTENCES_BORROWRETURN45A } from './borrowReturn45a';
import { MOCK_SENTENCES_BORROWRETURN45B } from './borrowReturn45b';
import { MOCK_SENTENCES_OFFICECOMMS46A } from './officeComms46a';
import { MOCK_SENTENCES_OFFICECOMMS46B } from './officeComms46b';
import { MOCK_SENTENCES_MEETINGROOM47A } from './meetingRoom47a';
import { MOCK_SENTENCES_MEETINGROOM47B } from './meetingRoom47b';
import { MOCK_SENTENCES_DAILYOFFICE48A } from './dailyOffice48a';
import { MOCK_SENTENCES_DAILYOFFICE48B } from './dailyOffice48b';
import { MOCK_SENTENCES_SMALLTALK49A } from './smallTalk49a';
import { MOCK_SENTENCES_SMALLTALK49B } from './smallTalk49b';
import { MOCK_SENTENCES_SMALLTALK50A } from './smallTalk50a';
import { MOCK_SENTENCES_SMALLTALK50B } from './smallTalk50b';
import { MOCK_SENTENCES_MALAYLIFE51A } from './malayLife51a';
import { MOCK_SENTENCES_MALAYLIFE51B } from './malayLife51b';
import { MOCK_SENTENCES_LEAVEATTENDANCE52A } from './leaveAttendance52a';
import { MOCK_SENTENCES_LEAVEATTENDANCE52B } from './leaveAttendance52b';
import { MOCK_SENTENCES_COMMMTOOLS53A } from './commTools53a';
import { MOCK_SENTENCES_COMMMTOOLS53B } from './commTools53b';
import { MOCK_SENTENCES_ONSITECOMM54A } from './onsiteComm54a';
import { MOCK_SENTENCES_ONSITECOMM54B } from './onsiteComm54b';
import { MOCK_SENTENCES_VENDORMGMT55A } from './vendorMgmt55a';
import { MOCK_SENTENCES_VENDORMGMT55B } from './vendorMgmt55b';
import { MOCK_SENTENCES_WAREHOUSESPARE56A } from './warehouseSpare56a';
import { MOCK_SENTENCES_WAREHOUSESPARE56B } from './warehouseSpare56b';

export interface ISentenceWord {
  w?: string;
  word?: string;
  ipa: string;
  pos?: string;
  cn: string;
  memory?: string;
  phonics?: string;
  collocations?: (string[] | [string, string])[];
  examples?: (string[] | [string, string] | { en: string; cn: string })[];
}

export interface ISentencePhrase {
  p?: string;
  phrase?: string;
  ipa: string;
  cn: string;
  why: string;
}

export interface ISentenceGrammar {
  q: string;
  a: string;
}

export interface IPatternExampleWord {
  w: string;
  ipa: string;
  cn: string;
  phonics: string;
}

export interface IPatternExample {
  en: string;
  cn: string;
  words: IPatternExampleWord[];
}

export interface ISentence {
  id: number;
  /** Original Miaoda display number before duplicate-ID repair. */
  sourceId?: number;
  speaker?: string;
  en: string;
  cn: string;
  ipa: string;
  tags: string[];
  when: string;
  words: ISentenceWord[];
  phrases: ISentencePhrase[];
  grammar?: ISentenceGrammar[];
  pattern?: string;
  patternExamples?: (IPatternExample | [string, string])[];
  thinking?: string;
  pronunciation?: string;
  quiz?: { q: string; a: string }[];
}

const RAW_SENTENCE_SECTIONS = [
  { label: '开始交班', range: [1, 30] as [number, number] },
  { label: '告警状态总览', range: [31, 34] as [number, number] },
  { label: '严重告警处理', range: [35, 40] as [number, number] },
  { label: 'BMS 操作指引', range: [41, 50] as [number, number] },
  { label: '告警历史与趋势', range: [51, 57] as [number, number] },
  { label: '升级与后续行动', range: [58, 60] as [number, number] },
  { label: 'DCIM 交接', range: [61, 90] as [number, number] },
  { label: '事件单交接', range: [91, 120] as [number, number] },
  { label: '故障单', range: [121, 150] as [number, number] },
  { label: 'SLA与施工计划', range: [151, 180] as [number, number] },
  { label: '供应商与随工监督', range: [181, 210] as [number, number] },
  { label: '人员与培训', range: [211, 240] as [number, number] },
  { label: '天气与雨天巡检', range: [241, 270] as [number, number] },
  { label: '电气暖通与结束交班', range: [271, 300] as [number, number] },
  { label: 'BMS高级操作', range: [301, 350] as [number, number] },
  { label: 'DCIM定位', range: [351, 400] as [number, number] },
  { label: 'MOP执行', range: [401, 450] as [number, number] },
  { label: 'EOP应急', range: [451, 500] as [number, number] },
  { label: '客户电话会议', range: [1201, 1260] as [number, number] },
  { label: '施工现场指挥', range: [1281, 1320] as [number, number] },
  { label: '电气倒闸操作', range: [1321, 1360] as [number, number] },
  { label: 'UPS运行与维护', range: [1361, 1400] as [number, number] },
  { label: '锂电池系统', range: [1401, 1440] as [number, number] },
  { label: '中压开关柜', range: [1441, 1480] as [number, number] },
  { label: '变压器', range: [1481, 1520] as [number, number] },
  { label: '柴油发电机', range: [1521, 1560] as [number, number] },
  { label: 'CRAC与冷冻水系统', range: [1561, 1600] as [number, number] },
  { label: '冷却塔', range: [1601, 1640] as [number, number] },
  { label: '冷冻水泵与冷却水泵', range: [1641, 1680] as [number, number] },
  { label: '消防系统', range: [1681, 1720] as [number, number] },
  { label: '安防系统', range: [1721, 1760] as [number, number] },
  { label: '网络与弱电系统', range: [1761, 1800] as [number, number] },
  { label: 'DCIM/BMS综合监控中心', range: [1801, 1840] as [number, number] },
  { label: '值班经理交接班总结', range: [1841, 1880] as [number, number] },
  { label: '客户接待与机房参观', range: [1881, 1920] as [number, number] },
  { label: '客户审计', range: [1921, 1960] as [number, number] },
  { label: '值班经理主持会议', range: [1961, 2000] as [number, number] },
  { label: '数据中心经理日常管理', range: [2001, 2040] as [number, number] },
  { label: '数据中心经理向老板汇报', range: [2041, 2080] as [number, number] },
  { label: '招聘与面试', range: [2081, 2120] as [number, number] },
  { label: '绩效考核', range: [2121, 2160] as [number, number] },
  { label: '客户商务沟通', range: [2161, 2200] as [number, number] },
  { label: 'RCA与CAPA', range: [2201, 2240] as [number, number] },
  { label: '重大故障应急指挥', range: [2241, 2280] as [number, number] },
  { label: '市电停电', range: [2281, 2320] as [number, number] },
  { label: 'UPS故障应急', range: [2321, 2360] as [number, number] },
  { label: '早晨问候与寒暄', range: [2361, 2400] as [number, number] },
  { label: '打印复印与办公用品', range: [2401, 2440] as [number, number] },
  { label: '借东西还东西与领料', range: [2441, 2480] as [number, number] },
  { label: '办公室日常沟通', range: [2481, 2520] as [number, number] },
  { label: '会议室与视频会议', range: [2521, 2560] as [number, number] },
  { label: '办公室日常高频英语', range: [2561, 2600] as [number, number] },
  { label: '同事闲聊', range: [2601, 2640] as [number, number] },
  { label: '同事闲聊（续）', range: [2641, 2680] as [number, number] },
  { label: '马来西亚办公室与生活', range: [2681, 2720] as [number, number] },
  { label: '请假调班加班考勤', range: [2721, 2760] as [number, number] },
  { label: '电话WhatsApp与Teams', range: [2761, 2800] as [number, number] },
  { label: '数据中心现场沟通', range: [2801, 2840] as [number, number] },
  { label: '供应商现场管理', range: [2841, 2880] as [number, number] },
  { label: '仓库采购与备件管理', range: [2881, 2920] as [number, number] },
  { label: 'DCIM登录与待办', range: [2001, 2014] as [number, number] },
  { label: '仪表盘与数据厅', range: [2015, 2030] as [number, number] },
  { label: '告警处理', range: [2031, 2040] as [number, number] },
  { label: '创建事件单', range: [2041, 2056] as [number, number] },
  { label: '现场核实', range: [2057, 2067] as [number, number] },
  { label: '故障单(DCIM)', range: [2068, 2077] as [number, number] },
  { label: '变更请求', range: [2078, 2100] as [number, number] },
  { label: 'PTW与供应商管理', range: [2101, 2125] as [number, number] },
  { label: 'UPS与发电机', range: [2126, 2160] as [number, number] },
  { label: '暖通与安防', range: [2161, 2180] as [number, number] },
  { label: '事件总结与交接', range: [2181, 2200] as [number, number] },
  { label: '风险管理', range: [2201, 2220] as [number, number] },
  { label: '维保单', range: [2221, 2242] as [number, number] },
  { label: '演练', range: [2243, 2260] as [number, number] },
  { label: 'EHS事件', range: [2261, 2276] as [number, number] },
  { label: '活动记录', range: [2277, 2288] as [number, number] },
  { label: 'DCIM服务与用户管理', range: [2289, 2312] as [number, number] },
  { label: '告警屏蔽与阈值配置', range: [2313, 2342] as [number, number] },
  { label: '访客管理与PTW', range: [2343, 2368] as [number, number] },
  { label: '门禁与监控', range: [2369, 2380] as [number, number] },
  { label: '物流与库存', range: [2381, 2400] as [number, number] },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// Deliberately loose at the aggregate boundary: legacy records use a few
// equivalent tuple/object shapes that pages normalize when rendering.
const RAW_MOCK_SENTENCES: any[] = [
  // ── 场景001：开始交班 (1-30) ──
  ...MOCK_SENTENCES_PART1A,
  ...MOCK_SENTENCES_PART1B,
  // ── Section 1: 告警状态总览 (31-34) ──
  {
    id: 31,
    en: "There are ten active alarms in the BMS.",
    cn: "BMS系统目前共有10条活动告警。",
    ipa: "/ðeər ɑːr tɛn ˈæk.tɪv əˈlɑːmz ɪn ðə ˌbiː.ɛmˈɛs/",
    tags: ["第31句", "告警状态", "★★★★★"],
    when: "交接班开始时，向接班人员汇报当前 BMS 系统的告警总况。这是 BMS 交接的第一句话，让对方快速了解系统整体状态。",
    words: [
      { w: "active", ipa: "/ˈæk.tɪv/", pos: "形容词", cn: "活动的；正在运行的", memory: "① act = 行动；② active = 正在行动的 → 告警还没消失，还在响。", phonics: "act 读 /ækt/，ive 读 /ɪv/，重音在第一音节。", collocations: [["active alarm", "活动告警"], ["active issue", "活动问题"], ["active ticket", "活动工单"]], examples: [["There are 5 active alarms.", "有5条活动告警。"], ["Is the alarm still active?", "这条告警还是活动状态吗？"]] },
      { w: "alarm", ipa: "/əˈlɑːm/", pos: "名词", cn: "告警；警报", memory: "① al（加强）+ arm（武器）→ 拿起武器警戒 → alarm = 警报。② fire alarm = 火警。", phonics: "a 读 /ə/，larm 读 /lɑːm/，重音在第二音节。", collocations: [["fire alarm", "火警"], ["critical alarm", "严重告警"], ["alarm list", "告警列表"], ["alarm history", "告警历史"]], examples: [["The alarm went off at 3 a.m.", "告警在凌晨3点触发。"], ["Please check the alarm list.", "请检查告警列表。"]] },
      { w: "BMS", ipa: "/ˌbiː.ɛmˈɛs/", pos: "缩写", cn: "楼宇管理系统 (Building Management System)", memory: "① B = Building（楼宇）；② M = Management（管理）；③ S = System（系统）。整体记忆：楼宇自动化的中枢系统。", phonics: "逐个字母读 B-M-S。", collocations: [["BMS alarm", "BMS告警"], ["BMS console", "BMS控制台"], ["BMS dashboard", "BMS仪表盘"]], examples: [["Check the BMS for alarms.", "检查BMS看有没有告警。"], ["The BMS shows normal status.", "BMS显示状态正常。"]] },
    ],
    phrases: [
      { p: "active alarms", ipa: "/ˈæk.tɪv əˈlɑːmz/", cn: "活动告警", why: "active 修饰 alarms，表示告警当前仍处于触发状态，尚未恢复。" },
      { p: "in the BMS", ipa: "/ɪn ðə ˌbiː.ɛmˈɛs/", cn: "在BMS系统中", why: "in 表示在某个系统内部，the 表示双方都知道的那个 BMS。" },
      { p: "There are + 数量 + 名词", ipa: "", cn: "有……个……", why: "There be 句型用来报告某处存在某物，交接时用于汇报数量。" },
    ],
    grammar: [
      { q: "为什么用 There are 而不是 We have？", a: "There are 强调「客观存在」，语气中立，适合汇报事实。We have 暗示「我们拥有」，在告警场景中不自然。\n✅ There are 10 active alarms.（客观报告）\n❌ We have 10 active alarms.（听起来像我们「拥有」告警）" },
      { q: "为什么 alarm 用复数 alarms？", a: "因为有 10 条，超过 1 就要用复数。alarm 是可数名词。\n✅ 1 alarm → 单数\n✅ 10 alarms → 复数\n❌ 10 alarm → 错" },
    ],
    pattern: "There are + 数量 + 形容词 + 名词 + in + 地点/系统",
    patternExamples: [
      { en: "There are five warning alarms in the DCIM.", cn: "DCIM中有5条警告告警。", words: [{ w: "warning", ipa: "/ˈwɔːrnɪŋ/", cn: "警告", phonics: "warn 读 /wɔːrn/，ing 读 /ɪŋ/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "There are three active tickets in the system.", cn: "系统中有3个活动工单。", words: [{ w: "active", ipa: "/ˈæktɪv/", cn: "活动", phonics: "act 读 /ækt/，ive 读 /ɪv/" }, { w: "tickets", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "There are two critical issues in Zone A.", cn: "A区有2个严重问题。", words: [{ w: "critical", ipa: "/ˈkrɪtɪkəl/", cn: "严重", phonics: "crit 读 /krɪt/，ical 读 /ɪkəl/" }, { w: "issues", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }, { w: "zone", ipa: "/zoʊn/", cn: "区域", phonics: "zone 读 /zoʊn/" }] },
      { en: "There are no active alarms in the EPMS.", cn: "EPMS中没有活动告警。", words: [{ w: "active", ipa: "/ˈæktɪv/", cn: "活动", phonics: "act 读 /ækt/，ive 读 /ɪv/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "英语思维顺序：存在 → 数量 → 状态 → 事物 → 位置。\n先说「有」（There are），再说「多少」（ten），再说「什么状态」（active），再说「什么东西」（alarms），最后说「在哪里」（in the BMS）。\n中国人常犯的错误是先说位置：BMS里面有10条活动告警。英语习惯把位置放最后。",
    pronunciation: "ten active 连读：te-nactive /tɛˈnæk.tɪv/。\nalarms 的 s 读 /z/，不是 /s/。\nBMS 逐字母读，不要读成一个单词。\n节奏：There are TEN ｜ AC-tive ALARMS ｜ in the BMS.",
    quiz: [
      { q: "BMS中有5条活动告警，怎么说？", a: "There are five active alarms in the BMS." },
      { q: "为什么用 There are 而不是 There is？", a: "因为 alarms 是复数（10条），所以用 are。There is 用于单数。" },
    ],
  },
  {
    id: 32,
    en: "Two of them are critical alarms.",
    cn: "其中2条是严重告警。",
    ipa: "/tuː ɒv ðɛm ɑːr ˈkrɪ.tɪ.kəl əˈlɑːmz/",
    tags: ["第32句", "严重级别", "★★★★★"],
    when: "紧接上一句，对告警按严重程度进行分类。Critical 是最高级别，需要优先处理。",
    words: [
      { w: "critical", ipa: "/ˈkrɪ.tɪ.kəl/", pos: "形容词", cn: "严重的；关键的", memory: "① critic = 批评者；② critical = 到了需要批评/关注的程度 → 严重的。\n在数据中心：critical alarm = 必须立即处理的告警。", phonics: "crit 读 /krɪt/，i 读 /ɪ/，cal 读 /kəl/，重音在第一音节。", collocations: [["critical alarm", "严重告警"], ["critical failure", "严重故障"], ["critical level", "严重级别"], ["critical issue", "严重问题"]], examples: [["This is a critical alarm.", "这是一条严重告警。"], ["The UPS failure is critical.", "UPS故障是严重级别的。"]] },
      { w: "of them", ipa: "/ɒv ðɛm/", pos: "介词短语", cn: "其中的", memory: "① of = 属于/之中；② them = 它们（指前面提到的告警）。\n整体记忆：of them = 在它们之中。", phonics: "of 读 /ɒv/，them 读 /ðɛm/。", collocations: [["two of them", "其中两个"], ["some of them", "其中一些"], ["all of them", "全部"]], examples: [["Three of them are warnings.", "其中3条是警告。"], ["None of them are critical.", "其中没有严重的。"]] },
    ],
    phrases: [
      { p: "Two of them", ipa: "/tuː ɒv ðɛm/", cn: "其中两条", why: "数字 + of them = 从已知集合中取出几个。前面说了 10 条告警，这里说其中 2 条。" },
      { p: "critical alarms", ipa: "/ˈkrɪ.tɪ.kəl əˈlɑːmz/", cn: "严重告警", why: "critical 是告警分级中的最高级别，比 warning 和 info 更严重。" },
    ],
    grammar: [
      { q: "X of them 结构怎么用？", a: "数字/量词 + of + 代词（them/us/you），表示「其中X个」。\n✅ Two of them are critical.（其中2条是严重的。）\n✅ Five of them are warnings.（其中5条是警告。）\n✅ All of them are active.（全部都是活动的。）\n❌ Two of they → 错，of 后面用宾格 them。" },
    ],
    pattern: "数字 + of them + are + 分类",
    patternExamples: [
      { en: "Three of them are warning alarms.", cn: "其中3条是警告告警。", words: [{ w: "warning", ipa: "/ˈwɔːrnɪŋ/", cn: "警告", phonics: "warn 读 /wɔːrn/，ing 读 /ɪŋ/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Five of them are info alerts.", cn: "其中5条是信息提示。", words: [] },
      { en: "Two of them are resolved.", cn: "其中2条已经解决。", words: [] },
      { en: "None of them are critical.", cn: "其中没有严重的。", words: [{ w: "critical", ipa: "/ˈkrɪtɪkəl/", cn: "严重", phonics: "crit 读 /krɪt/，ical 读 /ɪkəl/" }] },
    ],
    thinking: "英语思维：先说数量，再框定范围（of them），再说是什么。\n中文习惯说「严重的有2条」，把分类放前面。英语习惯把数量放前面：Two of them are critical.\n记住：英语先说「几个」，再说「是什么」。",
    pronunciation: "Two of them 连读：two-of /tuː.ɒv/。\ncritical 重音在第一音节：CRI-ti-cal。\n节奏：TWO of them ｜ are CRI-ti-cal ｜ ALARMS.",
    quiz: [
      { q: "其中5条是警告告警，怎么说？", a: "Five of them are warning alarms." },
      { q: "of them 中的 them 指什么？", a: "指前一句提到的 ten active alarms（10条活动告警）。" },
    ],
  },
  {
    id: 33,
    en: "Five of them are warning alarms.",
    cn: "其中5条是警告告警。",
    ipa: "/faɪv ɒv ðɛm ɑːr ˈwɔː.nɪŋ əˈlɑːmz/",
    tags: ["第33句", "警告级别", "★★★★"],
    when: "继续按严重程度分类，汇报 Warning 级别告警数量。Warning 低于 Critical，但仍需关注。",
    words: [
      { w: "warning", ipa: "/ˈwɔː.nɪŋ/", pos: "名词/形容词", cn: "警告；预警", memory: "① warn = 警告；② warn + ing = 正在警告的 → warning。\n在数据中心：warning alarm = 需要注意但非紧急的告警。", phonics: "war 读 /wɔː/，ning 读 /nɪŋ/，重音在第一音节。", collocations: [["warning alarm", "警告告警"], ["warning sign", "警告标志"], ["early warning", "预警"], ["warning level", "警告级别"]], examples: [["This is a warning, not critical.", "这是警告，不是严重告警。"], ["The temperature warning triggered.", "温度警告触发了。"]] },
    ],
    phrases: [
      { p: "warning alarms", ipa: "/ˈwɔː.nɪŋ əˈlɑːmz/", cn: "警告告警", why: "warning 作为形容词修饰 alarms，表示严重程度为「警告」级别的告警。" },
    ],
    grammar: [
      { q: "warning 和 warn 的区别？", a: "warn 是动词（警告某人），warning 是名词/形容词（警告/警告的）。\n✅ I warn you.（动词：我警告你。）\n✅ This is a warning.（名词：这是一个警告。）\n✅ warning alarm（形容词：警告级别的告警）" },
    ],
    pattern: "数字 + of them + are + 级别 + alarms",
    patternExamples: [
      { en: "Three of them are info alarms.", cn: "其中3条是信息告警。", words: [{ w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Two of them are critical alarms.", cn: "其中2条是严重告警。", words: [{ w: "critical", ipa: "/ˈkrɪtɪkəl/", cn: "严重", phonics: "crit 读 /krɪt/，ical 读 /ɪkəl/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Four of them are warning alarms.", cn: "其中4条是警告告警。", words: [{ w: "warning", ipa: "/ˈwɔːrnɪŋ/", cn: "警告", phonics: "warn 读 /wɔːrn/，ing 读 /ɪŋ/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "这句和上一句（32）结构完全一样：数字 + of them + are + 分类。\n掌握了这个句型，你可以快速报出任何分类的数量。这是交接班中最高频的句式之一。",
    pronunciation: "warning 重音在第一音节：WAR-ning。\nalarms 的 s 读 /z/。\n节奏：FIVE of them ｜ are WAR-ning ｜ ALARMS.",
    quiz: [
      { q: "其中8条是信息告警，怎么说？", a: "Eight of them are informational alarms." },
      { q: "warn 和 warning 分别是什么词性？", a: "warn 是动词（警告），warning 是名词或形容词（警告/警告的）。" },
    ],
  },
  {
    id: 34,
    en: "Three of them are informational alarms.",
    cn: "其中3条是信息提示告警。",
    ipa: "/θriː ɒv ðɛm ɑːr ˌɪn.fəˈmeɪ.ʃən.əl əˈlɑːmz/",
    tags: ["第34句", "信息级别", "★★★★"],
    when: "完成告警分类汇报的最后一条。Info 是最低级别，通常只是系统提示，不需要立即处理。",
    words: [
      { w: "informational", ipa: "/ˌɪn.fəˈmeɪ.ʃən.əl/", pos: "形容词", cn: "信息性的；提示性的", memory: "information 是名词；informational 是形容词。\ninformational alarm = 信息提示类告警。界面标签也常简写为 info alarm。", phonics: "in-for-MA-tion-al，重音在 MA。", collocations: [["informational alarm", "信息提示告警"], ["informational message", "提示信息"], ["informational notice", "提示性通知"]], examples: [["This is only an informational alarm.", "这只是一条信息提示告警。"], ["No action is required for this informational message.", "这条提示信息无需处理。"]] },
    ],
    phrases: [
      { p: "informational alarms", ipa: "/ˌɪn.fəˈmeɪ.ʃən.əl əˈlɑːmz/", cn: "信息提示告警", why: "informational 是形容词，用于说明告警属于信息提示级别；系统界面上也常写作 info alarms。" },
    ],
    grammar: [
      { q: "information 和 informational 有什么区别？", a: "information 是不可数名词，表示“信息”；informational 是形容词，表示“信息性的、提示性的”。\n✅ This is useful information.（这是有用的信息。）\n✅ This is an informational alarm.（这是一条信息提示告警。）" },
    ],
    pattern: "数字 + of them + are + 类型 + 名词",
    patternExamples: [
      { en: "Six of them are minor issues.", cn: "其中6个是小问题。", words: [{ w: "issues", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
      { en: "Two of them are hardware faults.", cn: "其中2个是硬件故障。", words: [{ w: "faults", ipa: "/fɔːlt/", cn: "故障", phonics: "fault 读 /fɔːlt/" }] },
      { en: "One of them is a network alert.", cn: "其中1个是网络告警。", words: [{ w: "network", ipa: "/ˈnɛtwɜːrk/", cn: "网络", phonics: "net 读 /nɛt/，work 读 /wɜːrk/" }] },
    ],
    thinking: "三句话（32、33、34）合在一起就是完整的告警分类汇报：\nCritical: 2 → Warning: 5 → Info: 3 → 总计 10。\n交接时按严重→警告→信息的顺序汇报，体现优先级思维。",
    pronunciation: "informational 有5个音节，重音在 MA：in-for-MA-tion-al。\nthree 的 th 读 /θ/，舌尖轻触上齿。\n节奏：THREE of them ｜ are in-for-MA-tion-al ｜ ALARMS.",
    quiz: [
      { q: "如何用英语完整汇报10条告警的分类？", a: "There are ten active alarms. Two of them are critical. Five of them are warning. Three of them are information." },
      { q: "为什么这里用 informational？", a: "因为 alarms 前需要形容词作定语。informational 表示“信息提示级别的”；系统界面上也常简写为 info。" },
    ],
  },
  // ── Section 2: 严重告警处理 (35-40) ──
  {
    id: 35,
    en: "One critical alarm has been cleared.",
    cn: "其中一条严重告警已经恢复。",
    ipa: "/wʌn ˈkrɪ.tɪ.kəl əˈlɑːm hæz biːn klɪəd/",
    tags: ["第35句", "告警恢复", "★★★★★"],
    when: "汇报严重告警的处理进展，告诉接班人员有一条 Critical 告警已经自动/手动恢复。",
    words: [
      { w: "cleared", ipa: "/klɪəd/", pos: "动词过去分词", cn: "已清除；已恢复", memory: "① clear = 清除/清空；② clear + ed = 已被清除。\n在告警语境中：alarm cleared = 告警已恢复/消失。", phonics: "clear 读 /klɪə/，ed 读 /d/。", collocations: [["alarm cleared", "告警已恢复"], ["cleared the issue", "已解决问题"], ["all clear", "全部正常"]], examples: [["The alarm has been cleared.", "告警已恢复。"], ["All alarms are cleared.", "所有告警已清除。"]] },
      { w: "has been", ipa: "/hæz biːn/", pos: "助动词", cn: "已经被（现在完成时被动）", memory: "① has = 已经；② been = 被。\nhas been + 过去分词 = 已经被……（到现在为止）。", phonics: "has 读 /hæz/，been 读 /biːn/。", collocations: [["has been cleared", "已被清除"], ["has been fixed", "已被修复"], ["has been notified", "已被通知"]], examples: [["The issue has been resolved.", "问题已解决。"], ["The vendor has been contacted.", "供应商已被联系。"]] },
    ],
    phrases: [
      { p: "has been cleared", ipa: "/hæz biːn klɪəd/", cn: "已被清除/恢复", why: "现在完成时被动语态，表示告警在某个时间点恢复，且当前状态是「已恢复」。" },
      { p: "one critical alarm", ipa: "/wʌn ˈkrɪ.tɪ.kəl əˈlɑːm/", cn: "一条严重告警", why: "one 表示单数，所以后面用 has（不是 have）。" },
    ],
    grammar: [
      { q: "has been cleared 是什么语法？", a: "现在完成时 + 被动语态：\n结构：has/have + been + 过去分词\n含义：某事在过去发生了，结果影响到现在。\n✅ The alarm has been cleared.（告警已恢复 → 现在不响了。）\n✅ The ticket has been closed.（工单已关闭 → 现在不在处理了。）\n❌ The alarm has cleared.（也可以，但少了「被」的含义。）" },
    ],
    pattern: "名词 + has/have been + 过去分词",
    patternExamples: [
      { en: "The alarm has been acknowledged.", cn: "告警已被确认。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "The vendor has been notified.", cn: "供应商已被通知。", words: [{ w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }, { w: "notified", ipa: "/ˈnoʊtɪfaɪ/", cn: "通知", phonics: "not 读 /noʊt/，ify 读 /ɪfaɪ/" }] },
      { en: "The issue has been resolved.", cn: "问题已被解决。", words: [{ w: "issue", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
      { en: "The ticket has been created.", cn: "工单已被创建。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
    ],
    thinking: "英语思维：先说「什么」（one critical alarm），再说「怎么了」（has been cleared）。\n现在完成时强调的是「对现在的影响」——告警之前响着，现在不响了。\n不用过去时（was cleared），因为过去时只说「过去发生了」，不强调现在的状态。",
    pronunciation: "has been 弱读：/həz bɪn/。\ncleared 读 /klɪəd/，不要读成 clear-red。\n节奏：ONE critical ALARM ｜ has been CLEARED.",
    quiz: [
      { q: "工单已经关闭了，怎么说？", a: "The ticket has been closed." },
      { q: "为什么用 has been 而不是 was？", a: "has been（现在完成时）强调对现在的影响——告警现在不响了。was（过去时）只说过去发生，不强调现在状态。" },
    ],
  },
  {
    id: 36,
    en: "The other critical alarm is still active.",
    cn: "另一条严重告警仍然存在。",
    ipa: "/ði ˈʌð.ər ˈkrɪ.tɪ.kəl əˈlɑːm ɪz stɪl ˈæk.tɪv/",
    tags: ["第36句", "告警持续", "★★★★★"],
    when: "紧接上一句，说明两条严重告警中，还有一条没有恢复，仍处于活动状态。",
    words: [
      { w: "other", ipa: "/ˈʌð.ər/", pos: "形容词", cn: "另一个；其他的", memory: "① other = 其他的/另一个。\nthe other = 两个中的另一个（特指剩余的那个）。", phonics: "oth 读 /ʌð/，er 读 /ər/。", collocations: [["the other one", "另一个"], ["each other", "互相"], ["other alarms", "其他告警"]], examples: [["The other alarm is cleared.", "另一条告警已恢复。"], ["Check the other UPS.", "检查另一台UPS。"]] },
      { w: "still", ipa: "/stɪl/", pos: "副词", cn: "仍然；还在", memory: "① still = 还在/仍然。\n放在 is/are 后面、形容词前面，表示状态持续。", phonics: "st 读 /st/，ill 读 /ɪl/。", collocations: [["still active", "仍然活动"], ["still working", "仍在工作"], ["still pending", "仍然待处理"]], examples: [["The alarm is still active.", "告警仍然存在。"], ["We are still investigating.", "我们仍在调查中。"]] },
    ],
    phrases: [
      { p: "the other", ipa: "/ði ˈʌð.ər/", cn: "另一个（特指）", why: "两条严重告警，一条已恢复，剩下的那一条就是 the other。the 表示「你知道我说的是哪个」。" },
      { p: "still active", ipa: "/stɪl ˈæk.tɪv/", cn: "仍然活动的", why: "still 强调状态的持续——告警从触发到现在一直没有消失。" },
    ],
    grammar: [
      { q: "the other 和 another 的区别？", a: "the other = 两个中的另一个（特指，只剩一个）。\nanother = 再来一个（泛指，不确定是哪个）。\n✅ 两条告警：one ... the other ...\n✅ 很多条告警：one ... another ...（任意另一条）" },
    ],
    pattern: "The other + 名词 + is still + 形容词",
    patternExamples: [
      { en: "The other UPS is still running.", cn: "另一台UPS仍在运行。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }] },
      { en: "The other ticket is still open.", cn: "另一个工单仍然未关闭。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "The other vendor is still working on it.", cn: "另一个供应商仍在处理。", words: [{ w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }] },
    ],
    thinking: "两句合在一起就是完整的对比：\nOne critical alarm has been cleared. The other critical alarm is still active.\n一条恢复了，另一条还在。\n这种 one ... the other ... 结构在交接中非常常用，用来对比两个事物的不同状态。",
    pronunciation: "the other 连读：thee-other /ðiˈʌð.ər/。\nstill active：still 的 l 和 active 的 a 不连读，稍作停顿。\n节奏：The OTHER critical ALARM ｜ is STILL ｜ AC-tive.",
    quiz: [
      { q: "另一台空调仍在运行，怎么说？", a: "The other CRAC unit is still running." },
      { q: "the other 和 another 什么时候用哪个？", a: "the other 用于两个中的另一个（特指）；another 用于多个中的再一个（泛指）。" },
    ],
  },
  {
    id: 37,
    en: "The root cause is still under investigation.",
    cn: "根本原因仍在调查中。",
    ipa: "/ðə ruːt kɔːz ɪz stɪl ˈʌn.dər ˌɪn.vɪs.tɪˈɡeɪ.ʃən/",
    tags: ["第37句", "根因调查", "★★★★★"],
    when: "向接班人员说明活跃告警的当前处理状态——还没有找到根本原因，仍在排查。",
    words: [
      { w: "root cause", ipa: "/ruːt kɔːz/", pos: "名词短语", cn: "根本原因", memory: "① root = 树根；② cause = 原因。\nroot cause = 问题的根源，像树根一样隐藏在地下的真正原因。", phonics: "root 读 /ruːt/，cause 读 /kɔːz/。", collocations: [["root cause analysis", "根因分析"], ["find the root cause", "找到根因"], ["root cause investigation", "根因调查"]], examples: [["We need to find the root cause.", "我们需要找到根本原因。"], ["The root cause is unknown.", "根因未知。"]] },
      { w: "investigation", ipa: "/ɪnˌvɛs.tɪˈɡeɪ.ʃən/", pos: "名词", cn: "调查；排查", memory: "① investigate = 调查（动词）；② investigation = 调查（名词）。\nin + vest（穿）+ ig + ation → 深入穿透 → 调查。", phonics: "in-ves-ti-GA-tion，重音在第四音节。", collocations: [["under investigation", "在调查中"], ["root cause investigation", "根因调查"], ["launch an investigation", "启动调查"]], examples: [["The issue is under investigation.", "问题在调查中。"], ["We launched an investigation.", "我们启动了调查。"]] },
    ],
    phrases: [
      { p: "under investigation", ipa: "/ˈʌn.dər ˌɪn.vɪs.tɪˈɡeɪ.ʃən/", cn: "在调查中", why: "under + 名词 = 正在被……的状态。under investigation = 正在被调查。类似：under repair（维修中）、under review（审核中）。" },
      { p: "root cause", ipa: "/ruːt kɔːz/", cn: "根本原因", why: "数据中心常用术语，区别于表面原因（symptom）。找到 root cause 才能彻底解决问题。" },
    ],
    grammar: [
      { q: "under + 名词 表示什么？", a: "under + 抽象名词 = 正在被……（被动进行态）。\n✅ under investigation = 正在被调查\n✅ under repair = 正在被维修\n✅ under review = 正在被审核\n✅ under control = 在控制之中\n❌ under investigate → 错，under 后面用名词不用动词。" },
    ],
    pattern: "The + 名词 + is under + 名词",
    patternExamples: [
      { en: "The issue is under investigation.", cn: "问题在调查中。", words: [{ w: "issue", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
      { en: "The UPS is under repair.", cn: "UPS在维修中。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "repair", ipa: "/rɪˈpeər/", cn: "维修", phonics: "re 读 /rɪ/，pair 读 /peər/" }] },
      { en: "The change is under review.", cn: "变更在审核中。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
      { en: "The situation is under control.", cn: "情况在控制中。", words: [{ w: "control", ipa: "/kənˈtroʊl/", cn: "控制", phonics: "con 读 /kən/，trol 读 /troʊl/" }] },
    ],
    thinking: "英语思维：主体（root cause）→ 状态（is still）→ 所处阶段（under investigation）。\nunder investigation 是一个状态标签，像贴在告警上的便签。不需要说「有人在调查」，under investigation 本身就包含了「有人在做」的意思。",
    pronunciation: "root cause 的 se 读 /z/。\ninvestigation 很长，重音在 GA：in-ves-ti-GA-tion。\nunder 弱读 /ˈʌn.dər/。\n节奏：The ROOT CAUSE ｜ is STILL ｜ un-der in-ves-ti-GA-tion.",
    quiz: [
      { q: "UPS正在维修中，怎么说？", a: "The UPS is under repair." },
      { q: "under investigation 中的 under 是什么意思？", a: "under 在这里表示「正在被……的状态」，under investigation = 正在被调查。" },
    ],
  },
  {
    id: 38,
    en: "The vendor has been notified.",
    cn: "供应商已经收到通知。",
    ipa: "/ðə ˈvɛn.dər hæz biːn ˈnəʊ.tɪ.faɪd/",
    tags: ["第38句", "供应商通知", "★★★★"],
    when: "汇报告警处理的下一步——已经联系了设备供应商，对方已知晓问题。",
    words: [
      { w: "vendor", ipa: "/ˈvɛn.dər/", pos: "名词", cn: "供应商；厂商", memory: "① vend = 售卖；② vendor = 卖东西的人/公司 → 供应商。\n数据中心常见：设备供应商、软件供应商。", phonics: "ven 读 /vɛn/，dor 读 /dər/，重音在第一音节。", collocations: [["vendor support", "供应商支持"], ["vendor ticket", "供应商工单"], ["contact the vendor", "联系供应商"]], examples: [["Please contact the vendor.", "请联系供应商。"], ["The vendor sent an engineer.", "供应商派了工程师。"]] },
      { w: "notified", ipa: "/ˈnəʊ.tɪ.faɪd/", pos: "动词过去分词", cn: "已通知", memory: "① notify = 通知；② notify + ed = 已被通知。\nno + ti + fy → 使知道 → 通知。", phonics: "no 读 /nəʊ/，ti 读 /tɪ/，fied 读 /faɪd/。", collocations: [["been notified", "已被通知"], ["notify the team", "通知团队"], ["notify immediately", "立即通知"]], examples: [["The team has been notified.", "团队已被通知。"], ["Please notify the manager.", "请通知经理。"]] },
    ],
    phrases: [
      { p: "has been notified", ipa: "/hæz biːn ˈnəʊ.tɪ.faɪd/", cn: "已被通知", why: "现在完成时被动语态，表示供应商在过去某个时间被通知了，当前状态是「已知晓」。" },
    ],
    grammar: [
      { q: "为什么用被动语态 has been notified？", a: "因为我们关注的是「供应商被通知了」这个结果，而不是「谁通知的」。\n主动：We notified the vendor.（我们通知了供应商。）\n被动：The vendor has been notified.（供应商已被通知。）\n交接中用被动更简洁，不需要说谁做的。" },
    ],
    pattern: "The + 人/机构 + has been + 过去分词",
    patternExamples: [
      { en: "The manager has been informed.", cn: "经理已被告知。", words: [] },
      { en: "The team has been alerted.", cn: "团队已被预警。", words: [] },
      { en: "The engineer has been dispatched.", cn: "工程师已被派遣。", words: [{ w: "engineer", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }] },
    ],
    thinking: "交接时用被动语态更专业——关注「事情做了没有」，而不是「谁做的」。\nThe vendor has been notified. = 供应商那边已经知道了。\n不需要说 We called the vendor and told them about the problem. 太啰嗦。",
    pronunciation: "vendor 重音在第一音节：VEN-dor。\nnotified 重音在第一音节：NO-ti-fied。\nhas been 弱读 /həz bɪn/。\n节奏：The VEN-dor ｜ has been NO-ti-fied.",
    quiz: [
      { q: "团队已被预警，怎么说？", a: "The team has been alerted." },
      { q: "交接时为什么常用被动语态？", a: "因为关注的是「事情做了没」，而不是「谁做的」。被动语态更简洁、更聚焦结果。" },
    ],
  },
  {
    id: 39,
    en: "The vendor is working on the issue now.",
    cn: "供应商正在处理这个问题。",
    ipa: "/ðə ˈvɛn.dər ɪz ˈwɜː.kɪŋ ɒn ði ˈɪʃ.uː naʊ/",
    tags: ["第39句", "供应商处理中", "★★★★"],
    when: "进一步说明供应商当前的行动——正在处理中，不是等待状态。",
    words: [
      { w: "working on", ipa: "/ˈwɜː.kɪŋ ɒn/", pos: "动词短语", cn: "正在处理；正在做", memory: "① work = 工作；② work on = 在某事上工作 → 正在处理某事。\n注意：work on 是固定搭配，on 不能省略。", phonics: "work 读 /wɜːk/，ing 读 /ɪŋ/，on 读 /ɒn/。", collocations: [["working on the issue", "在处理问题"], ["working on a fix", "在做修复"], ["working on it", "在处理"]], examples: [["We are working on it.", "我们正在处理。"], ["The engineer is working on the UPS.", "工程师在处理UPS问题。"]] },
      { w: "issue", ipa: "/ˈɪʃ.uː/", pos: "名词", cn: "问题；事项", memory: "① issue = 问题/事项。\n比 problem 更中性，不像 problem 那么负面。", phonics: "is 读 /ɪ/，sue 读 /ʃuː/，重音在第一音节。", collocations: [["the issue", "这个问题"], ["known issue", "已知问题"], ["resolve the issue", "解决问题"]], examples: [["What is the issue?", "问题是什么？"], ["The issue has been resolved.", "问题已解决。"]] },
    ],
    phrases: [
      { p: "working on the issue", ipa: "/ˈwɜː.kɪŋ ɒn ði ˈɪʃ.uː/", cn: "正在处理这个问题", why: "work on 是「在某事上投入精力」，the issue 是双方都知道的那个问题。" },
      { p: "now", ipa: "/naʊ/", cn: "现在", why: "强调当前时刻正在进行，让听者知道不需要等待。" },
    ],
    grammar: [
      { q: "is working 和 works 的区别？", a: "is working = 现在进行时，表示此刻正在做。\nworks = 一般现在时，表示经常做/习惯做。\n✅ The vendor is working on it now.（此刻在处理。）\n✅ The vendor works on site every Monday.（每周一 onsite。）\n交接中汇报当前状态，用进行时。" },
    ],
    pattern: "主语 + is/are working on + 名词 + now",
    patternExamples: [
      { en: "The engineer is working on the UPS now.", cn: "工程师正在处理UPS。", words: [{ w: "engineer", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }] },
      { en: "The team is working on a fix now.", cn: "团队正在做修复。", words: [] },
      { en: "We are working on the root cause now.", cn: "我们正在排查根因。", words: [{ w: "root", ipa: "/ruːt/", cn: "根因", phonics: "root 读 /ruːt/" }, { w: "cause", ipa: "/kɔːz/", cn: "原因", phonics: "cause 读 /kɔːz/" }] },
    ],
    thinking: "英语思维：谁（the vendor）→ 正在做什么（is working on）→ 什么事（the issue）→ 什么时间（now）。\n中文习惯说「供应商现在在处理这个问题」，把 now 放前面。英语把 now 放最后。\n记住：英语时间状语通常在句尾。",
    pronunciation: "working on 连读：workin-gon /ˈwɜː.kɪ.ŋɒn/。\nthe issue：the 在元音前读 /ði/。\n节奏：The VEN-dor ｜ is WORK-ing ｜ on the IS-sue ｜ NOW.",
    quiz: [
      { q: "工程师正在处理空调问题，怎么说？", a: "The engineer is working on the CRAC issue now." },
      { q: "is working 和 works 在交接中用哪个？", a: "用 is working（现在进行时），因为交接汇报的是当前正在进行的动作。" },
    ],
  },
  {
    id: 40,
    en: "We are waiting for the vendor's update.",
    cn: "我们正在等待供应商的最新反馈。",
    ipa: "/wiː ɑːr ˈweɪ.tɪŋ fɔːr ðə ˈvɛn.dərz ˈʌp.deɪt/",
    tags: ["第40句", "等待反馈", "★★★★"],
    when: "说明当前阻塞项——我们在等供应商给出下一步信息，暂时无法推进。",
    words: [
      { w: "waiting for", ipa: "/ˈweɪ.tɪŋ fɔːr/", pos: "动词短语", cn: "等待", memory: "① wait = 等；② wait for = 等待某个东西。\nfor 不能省略——wait 是不及物动词，需要 for 接宾语。", phonics: "wait 读 /weɪt/，ing 读 /ɪŋ/，for 读 /fɔːr/。", collocations: [["waiting for a reply", "等待回复"], ["waiting for approval", "等待审批"], ["waiting for the vendor", "等待供应商"]], examples: [["We are waiting for approval.", "我们在等审批。"], ["Please don't keep me waiting.", "请不要让我等。"]] },
      { w: "update", ipa: "/ˈʌp.deɪt/", pos: "名词", cn: "更新；最新反馈", memory: "① up = 向上/最新；② date = 日期。\nupdate = 把信息更新到最新 → 最新反馈。", phonics: "up 读 /ʌp/，date 读 /deɪt/，重音在第一音节。", collocations: [["vendor update", "供应商反馈"], ["status update", "状态更新"], ["give an update", "给一个更新"]], examples: [["Any update from the vendor?", "供应商有反馈吗？"], ["Please give me a status update.", "请给我一个状态更新。"]] },
    ],
    phrases: [
      { p: "waiting for", ipa: "/ˈweɪ.tɪŋ fɔːr/", cn: "等待", why: "wait 是不及物动词，必须加 for 才能接宾语。不能说 wait the update，必须说 wait for the update。" },
      { p: "vendor's update", ipa: "/ˈvɛn.dərz ˈʌp.deɪt/", cn: "供应商的最新反馈", why: "vendor's 是名词所有格，表示「供应商的」。update 在这里是名词，表示最新信息/反馈。" },
    ],
    grammar: [
      { q: "wait for 和 wait 的区别？", a: "wait 单独用 = 等一下（不及物，不接宾语）。\nwait for + 宾语 = 等待某个东西。\n✅ Please wait.（请等一等。）\n✅ We are waiting for the update.（我们在等更新。）\n❌ We are waiting the update. → 错，少了 for。" },
    ],
    pattern: "We are waiting for + 名词",
    patternExamples: [
      { en: "We are waiting for approval.", cn: "我们在等审批。", words: [] },
      { en: "We are waiting for the parts.", cn: "我们在等零件。", words: [] },
      { en: "We are waiting for the test result.", cn: "我们在等测试结果。", words: [{ w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "We are waiting for confirmation.", cn: "我们在等确认。", words: [] },
    ],
    thinking: "这句话在交接中的作用是说明「阻塞点」——当前无法推进，因为我们在等别人。\n英语思维：谁（We）→ 正在做什么（are waiting for）→ 等什么（the vendor's update）。\n这种句子在交接中很重要，它告诉接班人员：这件事不是没人在管，而是在等外部响应。",
    pronunciation: "waiting for 连读：waitin-for /weɪtɪŋfɔːr/。\nvendor's 的 s 读 /z/。\nupdate 重音在第一音节：UP-date。\n节奏：We are WAIT-ing ｜ for the VEN-dor's ｜ UP-date.",
    quiz: [
      { q: "我们在等审批，怎么说？", a: "We are waiting for approval." },
      { q: "wait 后面能直接加宾语吗？", a: "不能，wait 是不及物动词，必须加 for 才能接宾语。wait for the update ✅ / wait the update ❌" },
    ],
  },
  // ── Section 3: BMS 操作指引 (41-50) ──
  {
    id: 41,
    en: "Please open the active alarm list.",
    cn: "请打开活动告警列表。",
    ipa: "/pliːz ˈəʊ.pən ði ˈæk.tɪv əˈlɑːm lɪst/",
    tags: ["第41句", "操作指令", "★★★★★"],
    when: "交接时引导接班人员在 BMS 控制台上打开告警列表，开始逐项确认。",
    words: [
      { w: "open", ipa: "/ˈəʊ.pən/", pos: "动词", cn: "打开", memory: "① open = 打开（门、页面、列表）。\n在 BMS 操作中：open a page = 打开一个页面。", phonics: "o 读 /əʊ/，pen 读 /pən/。", collocations: [["open the list", "打开列表"], ["open the details", "打开详情"], ["open the console", "打开控制台"]], examples: [["Please open the alarm page.", "请打开告警页面。"], ["Open the BMS console.", "打开BMS控制台。"]] },
      { w: "list", ipa: "/lɪst/", pos: "名词", cn: "列表；清单", memory: "① list = 列表/清单。\nalarm list = 告警列表，交接中高频使用的界面元素。", phonics: "l 读 /l/，ist 读 /ɪst/。", collocations: [["alarm list", "告警列表"], ["checklist", "检查表"], ["to-do list", "待办清单"]], examples: [["Check the alarm list.", "检查告警列表。"], ["The list is empty.", "列表是空的。"]] },
    ],
    phrases: [
      { p: "active alarm list", ipa: "/ˈæk.tɪv əˈlɑːm lɪst/", cn: "活动告警列表", why: "三个名词/形容词叠加：active（活动的）+ alarm（告警）+ list（列表），从后往前理解。" },
      { p: "Please + 动词原形", ipa: "", cn: "请……", why: "礼貌的指令句型，交接中引导对方操作时使用。" },
    ],
    grammar: [
      { q: "Please 后面的动词用什么形式？", a: "Please + 动词原形（祈使句）。\n✅ Please open the list.（请打开列表。）\n✅ Please check the alarm.（请检查告警。）\n❌ Please opens the list. → 错\n❌ Please to open the list. → 错" },
    ],
    pattern: "Please + 动词原形 + 对象",
    patternExamples: [
      { en: "Please click on the alarm.", cn: "请点击这条告警。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Please check the status.", cn: "请检查状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Please scroll down.", cn: "请向下滚动。", words: [{ w: "scroll", ipa: "/skroʊl/", cn: "滚动", phonics: "scr 读 /skr/，oll 读 /oʊl/" }] },
      { en: "Please review the log.", cn: "请查看日志。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }] },
    ],
    thinking: "交接时引导对方操作，用 Please + 动词原形，语气礼貌但明确。\n英语思维：礼貌词（Please）→ 动作（open）→ 对象（the active alarm list）。\n中文习惯说「请把活动告警列表打开」，把对象放前面。英语把动作放前面。",
    pronunciation: "Please 的 s 读 /z/。\nopen 读 /ˈəʊ.pən/，不要读成 oh-pin。\nactive alarm list 中 alarm 的 s 读 /z/ 因为是复数。\n节奏：Please O-pen ｜ the AC-tive ｜ alarm LIST.",
    quiz: [
      { q: "请打开告警详情页，怎么说？", a: "Please open the alarm details page." },
      { q: "Please 后面动词用什么形式？", a: "动词原形。Please open ✅ / Please opens ❌ / Please to open ❌" },
    ],
  },
  {
    id: 42,
    en: "Please scroll down to the critical alarms.",
    cn: "请向下翻到严重告警部分。",
    ipa: "/pliːz skrəʊl daʊn tuː ðə ˈkrɪ.tɪ.kəl əˈlɑːmz/",
    tags: ["第42句", "界面操作", "★★★★"],
    when: "引导接班人员在告警列表中找到严重告警部分，通常严重告警排在列表顶部或需要滚动查看。",
    words: [
      { w: "scroll down", ipa: "/skrəʊl daʊn/", pos: "动词短语", cn: "向下滚动", memory: "① scroll = 卷轴/滚动；② down = 向下。\nscroll down = 页面往下翻。scroll up = 往上翻。", phonics: "scroll 读 /skrəʊl/，down 读 /daʊn/。", collocations: [["scroll down", "向下滚动"], ["scroll up", "向上滚动"], ["scroll to the bottom", "滚到底部"]], examples: [["Scroll down to see more.", "向下滚动看更多。"], ["Please scroll up.", "请向上滚动。"]] },
    ],
    phrases: [
      { p: "scroll down to", ipa: "/skrəʊl daʊn tuː/", cn: "向下滚动到", why: "scroll down 是动作方向，to 是目标位置。合在一起：向下滚到某个位置。" },
    ],
    grammar: [
      { q: "to 在这里是什么用法？", a: "to 表示方向/目标：滚动到哪里。\n✅ scroll down to the critical alarms（滚到严重告警那里）\n✅ go to the main page（去主页面）\n✅ navigate to the settings（导航到设置）" },
    ],
    pattern: "Please scroll down/up to + 位置",
    patternExamples: [
      { en: "Please scroll down to the warning section.", cn: "请向下滚到警告部分。", words: [{ w: "scroll", ipa: "/skroʊl/", cn: "滚动", phonics: "scr 读 /skr/，oll 读 /oʊl/" }, { w: "warning", ipa: "/ˈwɔːrnɪŋ/", cn: "警告", phonics: "warn 读 /wɔːrn/，ing 读 /ɪŋ/" }] },
      { en: "Scroll up to the top.", cn: "向上滚到顶部。", words: [{ w: "scroll", ipa: "/skroʊl/", cn: "滚动", phonics: "scr 读 /skr/，oll 读 /oʊl/" }] },
      { en: "Scroll down to the history section.", cn: "向下滚到历史部分。", words: [{ w: "scroll", ipa: "/skroʊl/", cn: "滚动", phonics: "scr 读 /skr/，oll 读 /oʊl/" }] },
    ],
    thinking: "英语指令的顺序：礼貌词（Please）→ 动作（scroll）→ 方向（down）→ 目标（to the critical alarms）。\n中文说「请翻到严重告警那里」，把目标放前面。英语把动作和方向放前面，目标放最后。",
    pronunciation: "scroll 的 ll 读 /l/。\ncritical 重音在第一音节：CRI-ti-cal。\n节奏：Please SCROLL DOWN ｜ to the CRI-ti-cal ｜ ALARMS.",
    quiz: [
      { q: "请向上滚到顶部，怎么说？", a: "Please scroll up to the top." },
      { q: "scroll down 和 scroll up 分别是什么意思？", a: "scroll down = 向下滚动；scroll up = 向上滚动。" },
    ],
  },
  {
    id: 43,
    en: "Please click on the first critical alarm.",
    cn: "请点击第一条严重告警。",
    ipa: "/pliːz klɪk ɒn ðə fɜːst ˈkrɪ.tɪ.kəl əˈlɑːm/",
    tags: ["第43句", "界面操作", "★★★★"],
    when: "引导接班人员在列表中选中第一条严重告警，准备查看详情。",
    words: [
      { w: "click on", ipa: "/klɪk ɒn/", pos: "动词短语", cn: "点击", memory: "① click = 点击/咔哒声；② click on = 点击某个东西。\non 在口语中有时可以省略：click the alarm = click on the alarm。", phonics: "click 读 /klɪk/，on 读 /ɒn/。", collocations: [["click on the link", "点击链接"], ["click on the alarm", "点击告警"], ["double-click", "双击"]], examples: [["Click on the alarm to see details.", "点击告警查看详情。"], ["Please click the button.", "请点按钮。"]] },
      { w: "first", ipa: "/fɜːst/", pos: "序数词", cn: "第一", memory: "① first = 第一（one 的序数词）。\nfirst / second / third / fourth / fifth……", phonics: "fir 读 /fɜː/，st 读 /st/。", collocations: [["first alarm", "第一条告警"], ["first step", "第一步"], ["first priority", "第一优先"]], examples: [["Click the first alarm.", "点击第一条告警。"], ["The first step is to check.", "第一步是检查。"]] },
    ],
    phrases: [
      { p: "click on the first", ipa: "/klɪk ɒn ðə fɜːst/", cn: "点击第一条", why: "click on 是动作，the first 是序数词限定「哪一条」。" },
    ],
    grammar: [
      { q: "序数词前面为什么要加 the？", a: "序数词（first / second / third）前面通常加 the，因为它是特指的——第一条只有一条。\n✅ the first alarm（第一条告警）\n✅ the second page（第二页）\n❌ first alarm → 不完整，缺少限定词" },
    ],
    pattern: "Please click on the + 序数词 + 名词",
    patternExamples: [
      { en: "Click on the second warning.", cn: "点击第二条警告。", words: [{ w: "warning", ipa: "/ˈwɔːrnɪŋ/", cn: "警告", phonics: "warn 读 /wɔːrn/，ing 读 /ɪŋ/" }] },
      { en: "Click on the last alarm.", cn: "点击最后一条告警。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Click on the third row.", cn: "点击第三行。", words: [] },
    ],
    thinking: "交接中引导对方操作，需要精确指出「哪一个」——用序数词（first / second / last）。\n英语思维：礼貌词 → 动作 → 精确定位 → 对象。",
    pronunciation: "click on 连读：cli-kon /klɪkɒn/。\nfirst 读 /fɜːst/，注意 r 不发音（英式）。\n节奏：Please CLICK ON ｜ the FIRST ｜ critical ALARM.",
    quiz: [
      { q: "请点击第二条警告，怎么说？", a: "Please click on the second warning alarm." },
      { q: "序数词前面为什么要加 the？", a: "因为序数词是特指的——first（第一）只有一个，所以用 the 限定。" },
    ],
  },
  {
    id: 44,
    en: "Please open the alarm details.",
    cn: "请打开告警详情。",
    ipa: "/pliːz ˈəʊ.pən ði əˈlɑːm dɪˈteɪlz/",
    tags: ["第44句", "查看详情", "★★★★"],
    when: "引导接班人员进入告警详情页面，查看具体信息。",
    words: [
      { w: "details", ipa: "/dɪˈteɪlz/", pos: "名词复数", cn: "详情；细节", memory: "① detail = 细节；② details = 详情（复数，因为详情包含多个细节）。\nalarm details = 告警的详细信息。", phonics: "de 读 /dɪ/，tails 读 /teɪlz/。", collocations: [["alarm details", "告警详情"], ["more details", "更多细节"], ["in detail", "详细地"]], examples: [["Open the details page.", "打开详情页面。"], ["Can you give me more details?", "能给我更多详情吗？"]] },
    ],
    phrases: [
      { p: "alarm details", ipa: "/əˈlɑːm dɪˈteɪlz/", cn: "告警详情", why: "alarm 修饰 details，表示告警相关的详细信息。details 用复数因为包含多个字段（时间、来源、设备等）。" },
    ],
    grammar: [
      { q: "为什么 details 用复数？", a: "因为告警详情包含多个信息字段（时间、来源、设备、状态等），所以用复数 details。\n✅ Open the alarm details.（打开告警详情——多个信息项。）\n✅ Tell me the details.（告诉我详情。）\n单数 detail 用于「一个细节」：This is an important detail." },
    ],
    pattern: "Please open the + 名词",
    patternExamples: [
      { en: "Please open the ticket.", cn: "请打开工单。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "Please open the log file.", cn: "请打开日志文件。", words: [] },
      { en: "Please open the monitoring page.", cn: "请打开监控页面。", words: [{ w: "monitoring", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }] },
    ],
    thinking: "这句和 41 句（Please open the active alarm list）结构一样。\nPlease + 动词原形 + 对象，是交接中最基本的操作指令句型。",
    pronunciation: "alarm 的 a 在元音前，the 读 /ði/。\ndetails 重音在第二音节：de-TAILS。\n节奏：Please O-pen ｜ the alarm de-TAILS.",
    quiz: [
      { q: "请打开监控页面，怎么说？", a: "Please open the monitoring page." },
      { q: "details 为什么用复数？", a: "因为详情包含多个信息字段（时间、来源、设备等），所以用复数。" },
    ],
  },
  {
    id: 45,
    en: "Please check the alarm time.",
    cn: "请查看告警发生时间。",
    ipa: "/pliːz tʃɛk ði əˈlɑːm taɪm/",
    tags: ["第45句", "信息确认", "★★★★"],
    when: "引导接班人员确认告警触发的具体时间，判断告警持续时长。",
    words: [
      { w: "check", ipa: "/tʃɛk/", pos: "动词", cn: "检查；查看；确认", memory: "① check = 检查/确认。\n在交接场景中：check = 看一眼确认信息。", phonics: "ch 读 /tʃ/，eck 读 /ɛk/。", collocations: [["check the time", "查看时间"], ["check the status", "检查状态"], ["check the log", "查看日志"], ["double-check", "再次确认"]], examples: [["Please check the alarm time.", "请查看告警时间。"], ["Let me check.", "让我查一下。"]] },
    ],
    phrases: [
      { p: "alarm time", ipa: "/əˈlɑːm taɪm/", cn: "告警时间", why: "告警触发的时间戳，是交接中必须确认的关键字段。" },
    ],
    grammar: [
      { q: "check 和 look at 的区别？", a: "check = 检查/确认（带有核实的目的）。\nlook at = 看一眼（只是看，不一定核实）。\n✅ Check the alarm time.（查看告警时间——需要确认具体时间。）\n✅ Look at the screen.（看屏幕——只是看。）" },
    ],
    pattern: "Please check the + 名词",
    patternExamples: [
      { en: "Please check the alarm source.", cn: "请查看告警来源。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "Please check the equipment status.", cn: "请查看设备状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "equipment", ipa: "/ɪˈkwɪpmənt/", cn: "设备", phonics: "e 读 /ɪ/，quipment 读 /kwɪpmənt/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Please check the error log.", cn: "请查看错误日志。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "check 是交接中最高频的动词之一，表示「查看并确认」。\n句 45-48 连续用 Please check the... 引导对方逐项确认告警信息。\n这种连续的 check 指令体现了交接的系统性——不遗漏任何关键字段。",
    pronunciation: "check 读 /tʃɛk/，不要读成 chek。\nalarm 的 a 在元音前，the 读 /ði/。\n节奏：Please CHECK ｜ the alarm TIME.",
    quiz: [
      { q: "请查看设备状态，怎么说？", a: "Please check the equipment status." },
      { q: "check 和 look at 有什么区别？", a: "check 带有「核实/确认」的目的；look at 只是「看」，不一定核实。" },
    ],
  },
  {
    id: 46,
    en: "Please check the alarm source.",
    cn: "请查看告警来源。",
    ipa: "/pliːz tʃɛk ði əˈlɑːm sɔːs/",
    tags: ["第46句", "信息确认", "★★★★"],
    when: "引导接班人员确认告警是从哪个设备/系统触发的，判断影响范围。",
    words: [
      { w: "source", ipa: "/sɔːs/", pos: "名词", cn: "来源；源头", memory: "① source = 来源/源头。\nalarm source = 告警是从哪里来的（哪台设备、哪个传感器）。", phonics: "s 读 /s/，ource 读 /ɔːs/。", collocations: [["alarm source", "告警来源"], ["data source", "数据来源"], ["power source", "电源"]], examples: [["What is the alarm source?", "告警来源是什么？"], ["The source is UPS-01.", "来源是UPS-01。"]] },
    ],
    phrases: [
      { p: "alarm source", ipa: "/əˈlɑːm sɔːs/", cn: "告警来源", why: "告警触发的设备或传感器，如 UPS-01、CRAC-03、PDU-A2 等。" },
    ],
    grammar: [
      { q: "source 和 origin 的区别？", a: "source = 来源（从哪来的，偏实用）。\norigin = 起源（最初产生的地方，偏学术）。\n在数据中心用 source 更常见：alarm source（告警来源）、power source（电源）。" },
    ],
    pattern: "Please check the + 字段名",
    patternExamples: [
      { en: "Please check the severity level.", cn: "请查看严重级别。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "level", ipa: "/ˈlɛvl/", cn: "级别", phonics: "lev 读 /lɛv/，el 读 /l/" }] },
      { en: "Please check the description.", cn: "请查看描述。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the timestamp.", cn: "请查看时间戳。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "交接中逐项 check 是标准化流程。alarm source 告诉你「哪台设备出了问题」。\n知道 source 才能判断影响范围和该联系哪个供应商。",
    pronunciation: "source 读 /sɔːs/，不要读成 source-ee。\n节奏：Please CHECK ｜ the alarm SOURCE.",
    quiz: [
      { q: "告警来源是什么？怎么问？", a: "What is the alarm source?" },
      { q: "source 在数据中心常用在哪些场景？", a: "alarm source（告警来源）、power source（电源）、data source（数据来源）。" },
    ],
  },
  {
    id: 47,
    en: "Please check the affected equipment.",
    cn: "请查看受影响的设备。",
    ipa: "/pliːz tʃɛk ði əˈfɛk.tɪd ɪˈkwɪp.mənt/",
    tags: ["第47句", "信息确认", "★★★★"],
    when: "引导接班人员确认告警影响了哪些物理设备，评估业务影响。",
    words: [
      { w: "affected", ipa: "/əˈfɛk.tɪd/", pos: "形容词/过去分词", cn: "受影响的", memory: "① affect = 影响（动词）；② affected = 被影响的。\naffected equipment = 被告警影响到的设备。", phonics: "af 读 /ə/，fect 读 /fɛkt/，ed 读 /ɪd/。", collocations: [["affected equipment", "受影响设备"], ["affected area", "受影响区域"], ["affected users", "受影响用户"]], examples: [["Which equipment is affected?", "哪些设备受影响？"], ["The affected zone is Zone A.", "受影响区域是A区。"]] },
      { w: "equipment", ipa: "/ɪˈkwɪp.mənt/", pos: "名词", cn: "设备；装备", memory: "① equip = 装备；② equipment = 设备总称。\n注意：equipment 是不可数名词，不加 s。", phonics: "e-quip-ment，重音在第二音节。", collocations: [["affected equipment", "受影响设备"], ["IT equipment", "IT设备"], ["electrical equipment", "电气设备"]], examples: [["The equipment is down.", "设备宕机了。"], ["Check the equipment status.", "检查设备状态。"]] },
    ],
    phrases: [
      { p: "affected equipment", ipa: "/əˈfɛk.tɪd ɪˈkwɪp.mənt/", cn: "受影响的设备", why: "affected 作形容词修饰 equipment，表示因告警而受到影响的设备。" },
    ],
    grammar: [
      { q: "equipment 可以加 s 吗？", a: "不可以，equipment 是不可数名词。\n✅ The equipment is affected.（设备受影响。）\n✅ We have new equipment.（我们有新设备。）\n❌ equipments → 错\n如果要数设备，用 devices 或 units。" },
    ],
    pattern: "Please check the + 形容词 + 名词",
    patternExamples: [
      { en: "Please check the affected zone.", cn: "请查看受影响的区域。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "zone", ipa: "/zoʊn/", cn: "区域", phonics: "zone 读 /zoʊn/" }] },
      { en: "Please check the current status.", cn: "请查看当前状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
      { en: "Please check the error message.", cn: "请查看错误信息。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "affected equipment 是告警排查的关键——知道哪台设备受影响，才能评估业务风险。\naffect（影响）是数据中心高频词汇，记住它的过去分词形式 affected 常作形容词用。",
    pronunciation: "affected 重音在第二音节：af-FEC-ted。\nequipment 重音在第二音节：e-QUIP-ment。\naffected equipment 连读时注意两个 d 和 e 之间不要吞音。\n节奏：Please CHECK ｜ the af-FEC-ted ｜ e-QUIP-ment.",
    quiz: [
      { q: "哪些设备受影响？怎么问？", a: "Which equipment is affected?" },
      { q: "equipment 能加 s 吗？", a: "不能，equipment 是不可数名词。数设备用 devices 或 units。" },
    ],
  },
  {
    id: 48,
    en: "Please check the current alarm status.",
    cn: "请查看当前告警状态。",
    ipa: "/pliːz tʃɛk ðə ˈkʌ.rənt əˈlɑːm ˈsteɪ.təs/",
    tags: ["第48句", "信息确认", "★★★★"],
    when: "引导接班人员确认告警目前是 active（活动）还是 cleared（已恢复），判断是否需要继续处理。",
    words: [
      { w: "current", ipa: "/ˈkʌ.rənt/", pos: "形容词", cn: "当前的；现在的", memory: "① current = 当前的/流动的。\n像水流一样，current 表示「此刻正在发生的」。", phonics: "cur 读 /kʌ/，rent 读 /rənt/，重音在第一音节。", collocations: [["current status", "当前状态"], ["current alarm", "当前告警"], ["current shift", "当前班次"]], examples: [["What is the current status?", "当前状态是什么？"], ["The current alarm is critical.", "当前告警是严重的。"]] },
      { w: "status", ipa: "/ˈsteɪ.təs/", pos: "名词", cn: "状态", memory: "① status = 状态/地位。\nalarm status = 告警的状态（active / cleared / acknowledged）。", phonics: "sta 读 /steɪ/，tus 读 /təs/。", collocations: [["alarm status", "告警状态"], ["system status", "系统状态"], ["current status", "当前状态"]], examples: [["Check the alarm status.", "检查告警状态。"], ["The status is active.", "状态是活动的。"]] },
    ],
    phrases: [
      { p: "current alarm status", ipa: "/ˈkʌ.rənt əˈlɑːm ˈsteɪ.təs/", cn: "当前告警状态", why: "三个词叠加：current（当前的）+ alarm（告警）+ status（状态），从后往前理解。" },
    ],
    grammar: [
      { q: "status 的复数是什么？", a: "status 的复数可以是 statuses（正式）或 status（不变）。\n在日常使用中，status 通常不加 s：\n✅ Check the status.（检查状态。）\n✅ Check all alarm statuses.（检查所有告警状态——复数。）" },
    ],
    pattern: "Please check the current + 名词",
    patternExamples: [
      { en: "Please check the current temperature.", cn: "请查看当前温度。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
      { en: "Please check the current load.", cn: "请查看当前负载。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
      { en: "Please check the current ticket status.", cn: "请查看当前工单状态。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }, { w: "status", ipa: "/ˈstætəs/", cn: "状态", phonics: "sta 读 /ˈstæ/，tus 读 /təs/" }] },
    ],
    thinking: "current status 是交接中的核心确认项——告警现在是什么状态决定了下一步行动。\n如果 active → 需要继续处理。如果 cleared → 需要确认是否复发。\n这句完成了「逐项 check」序列的第4项：time → source → equipment → status。",
    pronunciation: "current 重音在第一音节：CUR-rent。\nstatus 读 /ˈsteɪ.təs/，英式有时读 /ˈstæ.təs/。\n节奏：Please CHECK ｜ the CUR-rent ｜ alarm STA-tus.",
    quiz: [
      { q: "当前温度是多少？怎么问？", a: "What is the current temperature?" },
      { q: "current 和 now 的区别？", a: "current 是形容词（当前的），修饰名词。now 是副词（现在），修饰动词。current status ✅ / status now ✅（都可以，但位置不同）。" },
    ],
  },
  {
    id: 49,
    en: "Please check whether the alarm has recovered.",
    cn: "请确认告警是否已经恢复。",
    ipa: "/pliːz tʃɛk ˈwɛð.ər ði əˈlɑːm hæz rɪˈkʌ.vəd/",
    tags: ["第49句", "状态确认", "★★★★★"],
    when: "引导接班人员确认告警是否已恢复正常，这是交接中必须确认的关键项。",
    words: [
      { w: "whether", ipa: "/ˈwɛð.ər/", pos: "连词", cn: "是否", memory: "① whether = 是否（引导选择从句）。\nwhether ... or not = 是否……还是不……", phonics: "wheth 读 /wɛð/，er 读 /ər/。", collocations: [["check whether", "检查是否"], ["whether or not", "是否"], ["regardless of whether", "不管是否"]], examples: [["Check whether it is fixed.", "检查是否已修复。"], ["I don't know whether it works.", "我不知道是否有效。"]] },
      { w: "recovered", ipa: "/rɪˈkʌ.vəd/", pos: "动词过去分词", cn: "已恢复", memory: "① re = 再次；② cover = 覆盖；③ recover = 恢复原状。\nalarm recovered = 告警已恢复正常。", phonics: "re 读 /rɪ/，cov 读 /kʌv/，ered 读 /əd/。", collocations: [["alarm recovered", "告警已恢复"], ["system recovered", "系统已恢复"], ["fully recovered", "完全恢复"]], examples: [["Has the alarm recovered?", "告警恢复了吗？"], ["The system has fully recovered.", "系统完全恢复了。"]] },
    ],
    phrases: [
      { p: "whether ... has recovered", ipa: "/ˈwɛð.ər hæz rɪˈkʌ.vəd/", cn: "是否已经恢复", why: "whether 引导宾语从句，作为 check 的对象——检查的内容是「是否恢复了」。" },
    ],
    grammar: [
      { q: "whether 和 if 在 check 后面有区别吗？", a: "在 check 后面，whether 和 if 通常可以互换，但 whether 更正式。\n✅ Check whether the alarm has recovered.（正式）\n✅ Check if the alarm has recovered.（口语）\n在书面报告和正式交接中，推荐用 whether。" },
    ],
    pattern: "Please check whether + 从句",
    patternExamples: [
      { en: "Check whether the UPS is online.", cn: "检查UPS是否在线。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }] },
      { en: "Check whether the ticket is closed.", cn: "检查工单是否已关闭。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "Check whether the temperature is normal.", cn: "检查温度是否正常。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "whether 引导的是一个「是或否」的问题——告警恢复了还是没恢复。\ncheck whether 比 check that 更不确定——你不确定结果，所以要检查。\ncheck that = 确认某事是这样的（你已经认为是这样）。\ncheck whether = 检查是否是这样（你不确定）。",
    pronunciation: "whether 读 /ˈwɛð.ər/，th 读 /ð/。\nrecovered 重音在第二音节：re-COV-ered。\nhas 弱读 /həz/。\n节奏：Please CHECK ｜ WHE-ther ｜ the alarm ｜ has re-COV-ered.",
    quiz: [
      { q: "检查UPS是否在线，怎么说？", a: "Please check whether the UPS is online." },
      { q: "check whether 和 check that 的区别？", a: "check whether = 检查是否（不确定结果）；check that = 确认是（认为已经如此）。" },
    ],
  },
  {
    id: 50,
    en: "Please check whether the alarm has occurred before.",
    cn: "请确认这个告警以前是否发生过。",
    ipa: "/pliːz tʃɛk ˈwɛð.ər ði əˈlɑːm hæz əˈkɜːd bɪˈfɔːr/",
    tags: ["第50句", "历史确认", "★★★★★"],
    when: "引导接班人员查看告警历史，判断这是否是一个反复出现的问题。",
    words: [
      { w: "occurred", ipa: "/əˈkɜːd/", pos: "动词过去分词", cn: "发生过", memory: "① occur = 发生（正式用语）。\n② occur + red (双写r+ed) = 发生了。\n比 happen 更正式，常用于技术文档和报告。", phonics: "oc 读 /ə/，cur 读 /kɜː/，red 读 /d/。", collocations: [["alarm occurred", "告警发生了"], ["error occurred", "错误发生了"], ["has occurred before", "以前发生过"]], examples: [["When did the alarm occur?", "告警什么时候发生的？"], ["This error has occurred three times.", "这个错误发生了三次。"]] },
      { w: "before", ipa: "/bɪˈfɔːr/", pos: "副词", cn: "以前", memory: "① be = 在；② fore = 前面。\nbefore = 在之前/以前。放在句尾表示「在过去的某个时间」。", phonics: "be 读 /bɪ/，fore 读 /fɔːr/。", collocations: [["has occurred before", "以前发生过"], ["have seen before", "以前见过"], ["before the shift", "接班之前"]], examples: [["Has this happened before?", "这以前发生过吗？"], ["We fixed this before.", "我们以前修过这个。"]] },
    ],
    phrases: [
      { p: "has occurred before", ipa: "/hæz əˈkɜːd bɪˈfɔːr/", cn: "以前发生过", why: "现在完成时 + before = 在过去某个不确定时间发生过。before 放在句尾强调「过去有没有先例」。" },
    ],
    grammar: [
      { q: "occur 的过去式为什么双写 r？", a: "occur 的重音在第二音节（oc-CUR），以重读闭音节结尾的动词，过去式要双写末尾字母再加 ed。\n✅ occur → occurred（双写 r）\n✅ prefer → preferred（双写 r）\n❌ occured → 错（少了 r）" },
    ],
    pattern: "Please check whether + 主语 + has + 过去分词 + before",
    patternExamples: [
      { en: "Check whether this issue has happened before.", cn: "检查这个问题以前是否发生过。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "issue", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
      { en: "Check whether the vendor has been contacted before.", cn: "检查以前是否联系过供应商。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }, { w: "contacted", ipa: "/ˈkɒntækt/", cn: "联系", phonics: "con 读 /kɒn/，tact 读 /tækt/" }] },
      { en: "Check whether the UPS has failed before.", cn: "检查UPS以前是否故障过。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }] },
    ],
    thinking: "这句话在交接中非常重要——如果一个告警以前反复发生，说明可能是慢性问题，需要更高层级的关注。\nhas occurred before 用现在完成时，因为关注的是「到目前为止有没有先例」，而不是具体哪一次。",
    pronunciation: "occurred 重音在第二音节：oc-CURRED。\nbefore 读 /bɪˈfɔːr/。\nhas 弱读 /həz/。\n节奏：Please CHECK ｜ WHE-ther ｜ the alarm ｜ has oc-CURRED ｜ be-FORE.",
    quiz: [
      { q: "这个错误以前发生过吗？怎么问？", a: "Has this error occurred before?" },
      { q: "occur 的过去式为什么是 occurred 而不是 occured？", a: "因为 occur 重音在第二音节，以重读闭音节结尾，过去式要双写末尾字母 r 再加 ed。" },
    ],
  },
  // ── Section 4: 告警历史与趋势 (51-57) ──
  {
    id: 51,
    en: "Please open the alarm history.",
    cn: "请打开告警历史记录。",
    ipa: "/pliːz ˈəʊ.pən ði əˈlɑːm ˈhɪs.tər.i/",
    tags: ["第51句", "历史记录", "★★★★"],
    when: "引导接班人员在 BMS 中打开告警历史页面，查看过去的告警触发记录。",
    words: [
      { w: "history", ipa: "/ˈhɪs.tər.i/", pos: "名词", cn: "历史；记录", memory: "① history = 历史/过去的记录。\nalarm history = 告警的历史记录，包含所有过去的触发和恢复。", phonics: "his 读 /hɪs/，to 读 /tə/，ry 读 /ri/。", collocations: [["alarm history", "告警历史"], ["event history", "事件历史"], ["maintenance history", "维护历史"]], examples: [["Check the alarm history.", "查看告警历史。"], ["The history shows 3 occurrences.", "历史记录显示3次触发。"]] },
    ],
    phrases: [
      { p: "alarm history", ipa: "/əˈlɑːm ˈhɪs.tər.i/", cn: "告警历史", why: "记录某条告警过去所有的触发、恢复、持续时间，用于判断是否是反复问题。" },
    ],
    grammar: [
      { q: "history 可以数吗？", a: "history 既可数也不可数。\n不可数：study history（学习历史）。\n可数：a history of failures（一份故障历史）。\nalarm history 通常不可数，指整体记录。" },
    ],
    pattern: "Please open the + 名词",
    patternExamples: [
      { en: "Please open the event log.", cn: "请打开事件日志。", words: [] },
      { en: "Please open the trend chart.", cn: "请打开趋势图。", words: [] },
      { en: "Please open the report page.", cn: "请打开报告页面。", words: [{ w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
    ],
    thinking: "打开告警历史是排查反复问题的第一步。\nhistory 和 list 的区别：list 是当前活动的告警，history 是过去所有告警的记录（包括已恢复的）。",
    pronunciation: "history 三音节，重音在第一音节：HIS-to-ry。\nalarm 的 a 在元音前，the 读 /ði/。\n节奏：Please O-pen ｜ the alarm HIS-to-ry.",
    quiz: [
      { q: "请打开事件日志，怎么说？", a: "Please open the event log." },
      { q: "alarm list 和 alarm history 的区别？", a: "alarm list = 当前活动的告警列表；alarm history = 过去所有告警的历史记录（含已恢复的）。" },
    ],
  },
  {
    id: 52,
    en: "Please review the alarm trend.",
    cn: "请查看告警趋势。",
    ipa: "/pliːz rɪˈvjuː ði əˈlɑːm trɛnd/",
    tags: ["第52句", "趋势分析", "★★★★"],
    when: "引导接班人员查看告警的趋势图，判断告警频率是在增加、减少还是稳定。",
    words: [
      { w: "review", ipa: "/rɪˈvjuː/", pos: "动词", cn: "审查；回顾", memory: "① re = 再次；② view = 看。\nreview = 再看一遍 → 审查/回顾。比 check 更深入，带有分析目的。", phonics: "re 读 /rɪ/，view 读 /vjuː/。", collocations: [["review the trend", "查看趋势"], ["review the report", "审查报告"], ["review the log", "审查日志"]], examples: [["Let me review the data.", "让我审查数据。"], ["Please review the handover report.", "请审查交接报告。"]] },
      { w: "trend", ipa: "/trɛnd/", pos: "名词", cn: "趋势", memory: "① trend = 趋势/走向。\nalarm trend = 告警发生的频率变化方向（增加/减少/稳定）。", phonics: "tr 读 /tr/，end 读 /ɛnd/。", collocations: [["alarm trend", "告警趋势"], ["upward trend", "上升趋势"], ["downward trend", "下降趋势"]], examples: [["The trend is increasing.", "趋势在上升。"], ["Check the temperature trend.", "查看温度趋势。"]] },
    ],
    phrases: [
      { p: "alarm trend", ipa: "/əˈlɑːm trɛnd/", cn: "告警趋势", why: "告警触发频率的变化方向——是越来越多、越来越少还是保持不变。" },
    ],
    grammar: [
      { q: "review 和 check 的区别？", a: "check = 快速查看/确认（一个点）。\nreview = 仔细审查/回顾（一段内容/一段时间）。\n✅ Check the alarm status.（确认告警状态——一个点。）\n✅ Review the alarm trend.（审查告警趋势——一段时间的数据。）" },
    ],
    pattern: "Please review the + 名词",
    patternExamples: [
      { en: "Please review the handover notes.", cn: "请审查交接笔记。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "handover", ipa: "/ˈhændoʊvər/", cn: "交接", phonics: "hand 读 /hænd/，over 读 /oʊvər/" }] },
      { en: "Please review the maintenance log.", cn: "请审查维护日志。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "Please review the incident report.", cn: "请审查事故报告。", words: [{ w: "review", ipa: "/rɪˈvjuː/", cn: "审查", phonics: "re 读 /rɪ/，view 读 /vjuː/" }, { w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
    ],
    thinking: "review 比 check 更深入——check 是「看一眼确认」，review 是「仔细看并分析」。\n告警趋势是交接中需要分析的内容——不只是看一个数字，而是看一段时间内的变化方向。",
    pronunciation: "review 重音在第二音节：re-VIEW。\ntrend 读 /trɛnd/。\n节奏：Please re-VIEW ｜ the alarm TREND.",
    quiz: [
      { q: "请审查交接报告，怎么说？", a: "Please review the handover report." },
      { q: "review 和 check 哪个更深入？", a: "review 更深入。check 是快速确认一个点，review 是仔细审查一段时间的内容。" },
    ],
  },
  {
    id: 53,
    en: "The alarm has occurred three times today.",
    cn: "今天这个告警已经发生了三次。",
    ipa: "/ði əˈlɑːm hæz əˈkɜːd θriː taɪmz təˈdeɪ/",
    tags: ["第53句", "频率报告", "★★★★★"],
    when: "向接班人员报告告警今天已经触发的次数，强调问题的反复性。",
    words: [
      { w: "times", ipa: "/taɪmz/", pos: "名词复数", cn: "次；回", memory: "① time = 时间/次数。\n在这里 time 表示「次数」，不是「时间」。\nthree times = 三次。", phonics: "time 读 /taɪm/，s 读 /z/。", collocations: [["three times", "三次"], ["many times", "很多次"], ["first time", "第一次"], ["every time", "每次"]], examples: [["It happened five times today.", "今天发生了5次。"], ["This is the first time.", "这是第一次。"]] },
      { w: "today", ipa: "/təˈdeɪ/", pos: "副词", cn: "今天", memory: "① to = 这；② day = 天。\ntoday = 今天。放在句尾表示时间范围。", phonics: "to 读 /tə/，day 读 /deɪ/。", collocations: [["today's shift", "今天的班次"], ["earlier today", "今天早些时候"], ["later today", "今天晚些时候"]], examples: [["The alarm triggered three times today.", "告警今天触发了三次。"], ["We fixed it earlier today.", "我们今天早些时候修好了。"]] },
    ],
    phrases: [
      { p: "three times today", ipa: "/θriː taɪmz təˈdeɪ/", cn: "今天三次", why: "次数 + 时间范围，说明告警在今天内的触发频率。" },
    ],
    grammar: [
      { q: "has occurred three times 是什么时态？", a: "现在完成时（has + 过去分词），表示从今早到现在一共发生了三次。\n用现在完成时因为「今天」还没结束，还可能有第四次。\n✅ has occurred three times today（今天到目前为止3次）\n✅ occurred three times yesterday（昨天3次——用过去时因为昨天已结束）" },
    ],
    pattern: "主语 + has occurred + 次数 + 时间范围",
    patternExamples: [
      { en: "The error has occurred five times this week.", cn: "这个错误本周发生了5次。", words: [] },
      { en: "The UPS has failed twice this month.", cn: "UPS这个月故障了2次。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }] },
      { en: "The alarm has triggered four times today.", cn: "这个告警今天触发了4次。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "次数 + 时间范围 是交接中报告频率的标准方式。\nhas occurred（现在完成时）+ today（今天未结束）= 从今早到现在。\n如果超过3次，通常意味着问题是反复性的（recurring），需要特别关注。",
    pronunciation: "occurred 重音在第二音节：oc-CURRED。\ntimes 的 s 读 /z/。\ntoday 弱读 /təˈdeɪ/。\n节奏：The alarm ｜ has oc-CURRED ｜ THREE TIMES ｜ to-DAY.",
    quiz: [
      { q: "UPS这个月故障了2次，怎么说？", a: "The UPS has failed twice this month." },
      { q: "为什么用 has occurred 而不是 occurred？", a: "因为 today 还没结束，用现在完成时（has occurred）表示「到目前为止」。如果昨天已结束，用过去时 occurred。" },
    ],
  },
  {
    id: 54,
    en: "The alarm frequency is increasing.",
    cn: "这个告警发生的频率正在增加。",
    ipa: "/ði əˈlɑːm ˈfriː.kwən.si ɪz ɪnˈkriː.sɪŋ/",
    tags: ["第54句", "趋势判断", "★★★★★"],
    when: "向接班人员报告一个重要的趋势判断——告警发生越来越频繁，可能意味着问题在恶化。",
    words: [
      { w: "frequency", ipa: "/ˈfriː.kwən.si/", pos: "名词", cn: "频率", memory: "① frequent = 频繁的（形容词）；② frequency = 频率（名词）。\nalarm frequency = 告警发生的频繁程度。", phonics: "fre 读 /friː/，quen 读 /kwən/，cy 读 /si/。", collocations: [["alarm frequency", "告警频率"], ["high frequency", "高频率"], ["frequency analysis", "频率分析"]], examples: [["The frequency is increasing.", "频率在增加。"], ["Check the alarm frequency.", "检查告警频率。"]] },
      { w: "increasing", ipa: "/ɪnˈkriː.sɪŋ/", pos: "形容词/现在分词", cn: "正在增加的", memory: "① increase = 增加；② increasing = 正在增加的。\nis increasing = 正在增加（现在进行时）。", phonics: "in 读 /ɪn/，creas 读 /kriːs/，ing 读 /ɪŋ/。", collocations: [["is increasing", "正在增加"], ["increasing trend", "增长趋势"], ["increasingly frequent", "越来越频繁"]], examples: [["The load is increasing.", "负载在增加。"], ["Temperature is increasing.", "温度在上升。"]] },
    ],
    phrases: [
      { p: "alarm frequency", ipa: "/əˈlɑːm ˈfriː.kwən.si/", cn: "告警频率", why: "告警在一定时间内触发的次数——频率增加意味着问题在恶化。" },
      { p: "is increasing", ipa: "/ɪz ɪnˈkriː.sɪŋ/", cn: "正在增加", why: "现在进行时表示此刻正在发生的变化趋势。" },
    ],
    grammar: [
      { q: "is increasing 和 increases 的区别？", a: "is increasing = 现在正在增加（强调变化过程）。\nincreases = 一般性地增加（描述规律/事实）。\n✅ The frequency is increasing.（频率正在增加——此刻的趋势。）\n✅ The frequency increases at night.（频率在夜间增加——规律。）" },
    ],
    pattern: "主语 + is + 变化动词-ing",
    patternExamples: [
      { en: "The temperature is rising.", cn: "温度在上升。", words: [{ w: "temperature", ipa: "/ˈtɛmpərətʃər/", cn: "温度", phonics: "temp 读 /tɛmp/，erature 读 /ərətʃər/" }] },
      { en: "The load is decreasing.", cn: "负载在下降。", words: [{ w: "load", ipa: "/loʊd/", cn: "负载", phonics: "load 读 /loʊd/" }] },
      { en: "The humidity is dropping.", cn: "湿度在降低。", words: [{ w: "humidity", ipa: "/hjuːˈmɪdɪti/", cn: "湿度", phonics: "hu 读 /hjuː/，midity 读 /mɪdɪti/" }] },
      { en: "The error rate is growing.", cn: "错误率在增长。", words: [] },
    ],
    thinking: "频率增加是交接中的重要预警信号——告诉接班人员问题不是稳定的，而是在恶化。\n这句话之后通常要提出行动建议：升级、联系供应商、或安排现场检查。",
    pronunciation: "frequency 重音在第一音节：FRE-quen-cy。\nincreasing 重音在第二音节：in-CREAS-ing。\n节奏：The alarm FRE-quen-cy ｜ is in-CREAS-ing.",
    quiz: [
      { q: "温度在上升，怎么说？", a: "The temperature is rising." },
      { q: "is increasing 和 increases 什么时候用哪个？", a: "is increasing 强调此刻正在发生的变化；increases 描述一般规律。交接中报告趋势用 is increasing。" },
    ],
  },
  {
    id: 55,
    en: "The alarm cleared automatically.",
    cn: "这个告警自动恢复了。",
    ipa: "/ði əˈlɑːm klɪəd ˌɔː.təˈmæt.ɪk.li/",
    tags: ["第55句", "告警恢复", "★★★★"],
    when: "描述告警的恢复方式——没有人手动操作，告警自己消失了。",
    words: [
      { w: "cleared", ipa: "/klɪəd/", pos: "动词过去式", cn: "恢复了；清除了", memory: "在告警语境中，clear 表示触发条件消失、告警恢复。\nThe alarm cleared = 告警恢复了。", phonics: "clear 读 /klɪə/，过去式结尾读 /d/。", collocations: [["alarm cleared", "告警恢复"], ["cleared automatically", "自动恢复"], ["fault cleared", "故障消除"]], examples: [["The alarm cleared at 9 AM.", "告警在上午9点恢复。"], ["The fault cleared after the restart.", "重启后故障消除了。"]] },
      { w: "automatically", ipa: "/ˌɔː.təˈmæt.ɪk.li/", pos: "副词", cn: "自动地", memory: "① auto = 自动；② automatic = 自动的（形容词）；③ automatically = 自动地（副词）。", phonics: "au-to-MAT-i-cal-ly，重音在第三音节。", collocations: [["automatically recovered", "自动恢复了"], ["automatically cleared", "自动清除了"], ["restart automatically", "自动重启"]], examples: [["The system recovered automatically.", "系统自动恢复了。"], ["The alarm cleared automatically.", "告警自动清除了。"]] },
    ],
    phrases: [
      { p: "cleared automatically", ipa: "/klɪəd ˌɔː.təˈmæt.ɪk.li/", cn: "自动恢复", why: "clear 是告警场景中的专业动词；automatically 表示未经过人工操作，触发条件自行恢复正常。" },
    ],
    grammar: [
      { q: "The alarm cleared 和 was cleared 有什么区别？", a: "The alarm cleared 表示告警触发条件自行消失，强调状态恢复。The alarm was cleared 表示告警被人员或系统执行了清除操作。\n✅ The alarm cleared automatically.（告警自动恢复。）\n✅ The alarm was cleared by the operator.（告警由操作员清除。）" },
    ],
    pattern: "主语 + 动词过去式 + 副词",
    patternExamples: [
      { en: "The system recovered automatically.", cn: "系统自动恢复了。", words: [{ w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "The alarm cleared immediately.", cn: "告警立即清除了。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "The UPS switched automatically.", cn: "UPS自动切换了。", words: [{ w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }, { w: "switched", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
    ],
    thinking: "cleared automatically 表示告警触发条件自行恢复，没有人工干预。\n这在交接中是一个重要信号：告警虽然恢复，但根因可能仍然存在，因此仍要观察是否复发。",
    pronunciation: "cleared 读 /klɪəd/，结尾是 /d/，不要读成两个音节。\nautomatically 重音在 MAT：au-to-MAT-i-cal-ly。\n节奏：The ALARM ｜ CLEARED ｜ au-to-MAT-i-cal-ly.",
    quiz: [
      { q: "系统自动恢复了，怎么说？", a: "The system recovered automatically." },
      { q: "告警自动恢复，怎么说？", a: "The alarm cleared automatically." },
    ],
  },
  {
    id: 56,
    en: "The alarm came back.",
    cn: "这个告警又出现了。",
    ipa: "/ði əˈlɑːm keɪm bæk/",
    tags: ["第56句", "告警复发", "★★★★★"],
    when: "描述告警恢复后又重新触发，说明问题没有根本解决，是反复性问题。",
    words: [
      { w: "came back", ipa: "/keɪm bæk/", pos: "动词短语", cn: "又出现了；恢复后再次发生", memory: "come back 表示回来。用于告警或故障时，表示恢复后再次出现。came 是 come 的过去式。", phonics: "came 读 /keɪm/，back 读 /bæk/。", collocations: [["alarm came back", "告警又出现了"], ["problem came back", "问题又出现了"], ["came back after the reset", "复位后又出现了"]], examples: [["The alarm came back after 10 minutes.", "告警10分钟后又出现了。"], ["The issue came back after the restart.", "问题在重启后又出现了。"]] },
    ],
    phrases: [
      { p: "came back", ipa: "/keɪm bæk/", cn: "又出现了", why: "用于告警或问题时，came back 自身已经包含“恢复后再次出现”的意思，口语中自然简洁。" },
    ],
    grammar: [
      { q: "came back 和 recurred 有什么区别？", a: "came back 是自然口语，适合交接班对话；recurred 更正式，常用于事件报告或RCA。\n✅ The alarm came back.（告警又出现了。）\n✅ The alarm recurred at 2 PM.（告警在下午2点复发。）" },
    ],
    pattern: "主语 + came back + 时间",
    patternExamples: [
      { en: "The error came back after the restart.", cn: "重启后错误又出现了。", words: [{ w: "restart", ipa: "/riːˈstɑːrt/", cn: "重启", phonics: "re 读 /riː/，start 读 /stɑːrt/" }] },
      { en: "The alarm came back at 2 PM.", cn: "告警下午2点又出现了。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "The issue came back the next day.", cn: "问题第二天又出现了。", words: [{ w: "issue", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
    ],
    thinking: "告警恢复后又出现，是交接中非常关键的信息，说明根因可能没有消除。\n第55和56句连起来：The alarm cleared automatically. The alarm came back.\n自动恢复 → 再次出现 = 反复性问题 → 需要进一步排查。",
    pronunciation: "came 的 e 不发音，读 /keɪm/；back 读 /bæk/。\n节奏：The ALARM ｜ CAME BACK.",
    quiz: [
      { q: "问题重启后又出现了，怎么说？", a: "The issue came back after the restart." },
      { q: "正式报告中如何表达“告警复发”？", a: "The alarm recurred. 口头交接时可说 The alarm came back." },
    ],
  },
  {
    id: 57,
    en: "We need to continue monitoring this alarm.",
    cn: "我们需要继续监控这个告警。",
    ipa: "/wiː niːd tuː kənˈtɪn.juː ˈmɒn.ɪ.tər.ɪŋ ðɪs əˈlɑːm/",
    tags: ["第57句", "持续监控", "★★★★★"],
    when: "向接班人员提出行动要求——这个告警需要持续关注，不能忽略。",
    words: [
      { w: "continue", ipa: "/kənˈtɪn.juː/", pos: "动词", cn: "继续", memory: "① con = 共同/加强；② tinue = 持续。\ncontinue = 持续做某事，不中断。", phonics: "con 读 /kən/，tin 读 /tɪn/，ue 读 /juː/。", collocations: [["continue monitoring", "继续监控"], ["continue working", "继续工作"], ["continue investigation", "继续调查"]], examples: [["We need to continue monitoring.", "我们需要继续监控。"], ["Please continue the inspection.", "请继续巡检。"]] },
      { w: "monitoring", ipa: "/ˈmɒn.ɪ.tər.ɪŋ/", pos: "动名词", cn: "监控", memory: "① monitor = 监控（动词）/ 显示器（名词）；② monitoring = 监控（动名词）。\ncontinue monitoring = 继续做监控这件事。", phonics: "mon 读 /mɒn/，i 读 /ɪ/，tor 读 /tər/，ing 读 /ɪŋ/。", collocations: [["continue monitoring", "继续监控"], ["monitoring system", "监控系统"], ["real-time monitoring", "实时监控"]], examples: [["We are monitoring the situation.", "我们在监控情况。"], ["The monitoring system is active.", "监控系统是活动的。"]] },
    ],
    phrases: [
      { p: "continue monitoring", ipa: "/kənˈtɪn.juː ˈmɒn.ɪ.tər.ɪŋ/", cn: "继续监控", why: "continue + doing = 继续做某事。monitoring 是动名词形式。" },
      { p: "need to", ipa: "/niːd tuː/", cn: "需要", why: "need to + 动词原形 = 需要做某事，表示必要性。" },
    ],
    grammar: [
      { q: "continue monitoring 和 continue to monitor 有区别吗？", a: "两者都可以，意思基本一样：\n✅ continue monitoring（continue + doing）\n✅ continue to monitor（continue + to do）\n在日常使用中 continue + doing 更常见、更自然。" },
    ],
    pattern: "We need to continue + 动名词",
    patternExamples: [
      { en: "We need to continue investigating.", cn: "我们需要继续调查。", words: [{ w: "continue", ipa: "/kənˈtɪnjuː/", cn: "继续", phonics: "con 读 /kən/，tinue 读 /tɪnjuː/" }] },
      { en: "We need to continue testing.", cn: "我们需要继续测试。", words: [{ w: "continue", ipa: "/kənˈtɪnjuː/", cn: "继续", phonics: "con 读 /kən/，tinue 读 /tɪnjuː/" }, { w: "testing", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "We need to continue checking.", cn: "我们需要继续检查。", words: [{ w: "continue", ipa: "/kənˈtɪnjuː/", cn: "继续", phonics: "con 读 /kən/，tinue 读 /tɪnjuː/" }, { w: "checking", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "这句话在交接中是「行动移交」——告诉接班人员：这件事现在交给你了，你需要继续盯着。\nneed to continue 传达了一种责任感和紧迫性。",
    pronunciation: "continue 重音在第二音节：con-TIN-ue。\nmonitoring 重音在第一音节：MON-i-tor-ing。\n节奏：We NEED ｜ to con-TIN-ue ｜ MON-i-tor-ing ｜ this alarm.",
    quiz: [
      { q: "我们需要继续调查，怎么说？", a: "We need to continue investigating." },
      { q: "continue 后面用 doing 还是 to do？", a: "两者都可以。continue monitoring 和 continue to monitor 意思基本相同，doing 更常见。" },
    ],
  },
  // ── Section 5: 升级与后续行动 (58-60) ──
  {
    id: 58,
    en: "Please escalate this alarm to the next support level.",
    cn: "请把这个告警升级到下一层级支持。",
    ipa: "/pliːz ˈɛs.kə.leɪt ðɪs əˈlɑːm tuː ðə nɛkst səˈpɔːt ˈlɛv.əl/",
    tags: ["第58句", "告警升级", "★★★★★"],
    when: "当告警超出现有能力范围或反复出现时，指示将其升级到更高级别的支持团队。",
    words: [
      { w: "escalate", ipa: "/ˈɛs.kə.leɪt/", pos: "动词", cn: "升级；上报", memory: "① escalator = 自动扶梯；② escalate = 像坐扶梯一样往上升 → 升级/上报。\n在 IT 运维中：escalate = 把问题交给更高级别的人处理。", phonics: "es 读 /ɛs/，ca 读 /kə/，late 读 /leɪt/。", collocations: [["escalate the alarm", "升级告警"], ["escalate to L2", "升级到L2"], ["escalate to the vendor", "升级到供应商"]], examples: [["We need to escalate this.", "我们需要升级这个。"], ["Please escalate to L3.", "请升级到L3。"]] },
      { w: "support level", ipa: "/səˈpɔːt ˈlɛv.əl/", pos: "名词短语", cn: "支持层级", memory: "① support = 支持；② level = 层级。\nIT 支持通常分 L1（一线）→ L2（二线）→ L3（专家）→ Vendor（供应商）。", phonics: "support 读 /səˈpɔːt/，level 读 /ˈlɛv.əl/。", collocations: [["next support level", "下一个支持层级"], ["L1 support", "一线支持"], ["L2 support", "二线支持"]], examples: [["Escalate to the next level.", "升级到下一个层级。"], ["L2 support is handling it.", "二线支持在处理。"]] },
    ],
    phrases: [
      { p: "escalate to", ipa: "/ˈɛs.kə.leɪt tuː/", cn: "升级到", why: "escalate 是动作，to 是方向/目标。合在一起：升级到某个层级。" },
      { p: "the next support level", ipa: "/ðə nɛkst səˈpɔːt ˈlɛv.əl/", cn: "下一个支持层级", why: "next = 下一个，从当前层级往上走一级。如果现在是 L1，next 就是 L2。" },
    ],
    grammar: [
      { q: "escalate 和 upgrade 的区别？", a: "escalate = 升级处理层级（把问题交给更高级别的人）。\nupgrade = 升级设备/软件（更换到更好的版本）。\n✅ Escalate the alarm to L2.（升级告警到L2。）\n✅ Upgrade the firmware.（升级固件。）\n❌ Upgrade the alarm → 不自然。" },
    ],
    pattern: "Please escalate + 对象 + to + 目标层级",
    patternExamples: [
      { en: "Escalate this ticket to L3.", cn: "把这个工单升级到L3。", words: [{ w: "escalate", ipa: "/ˈɛskəleɪt/", cn: "升级", phonics: "es 读 /ɛs/，calate 读 /kəleɪt/" }, { w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }] },
      { en: "Escalate the issue to the vendor.", cn: "把问题升级到供应商。", words: [{ w: "escalate", ipa: "/ˈɛskəleɪt/", cn: "升级", phonics: "es 读 /ɛs/，calate 读 /kəleɪt/" }, { w: "issue", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }, { w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }] },
      { en: "Escalate the alarm to the manager.", cn: "把告警上报给经理。", words: [{ w: "escalate", ipa: "/ˈɛskəleɪt/", cn: "升级", phonics: "es 读 /ɛs/，calate 读 /kəleɪt/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "escalate 是运维中非常重要的动作——当一线处理不了时，及时升级到更高级别。\nescalate 不是「推卸责任」，而是「确保问题得到合适级别的处理」。\n交接时如果某个告警需要 escalate，一定要记录升级原因和目标层级。",
    pronunciation: "escalate 重音在第一音节：ES-ca-late。\nsupport 重音在第二音节：sup-PORT。\nlevel 读 /ˈlɛv.əl/。\n节奏：Please ES-ca-late ｜ this alarm ｜ to the NEXT ｜ support LEV-el.",
    quiz: [
      { q: "把这个问题升级到供应商，怎么说？", a: "Please escalate this issue to the vendor." },
      { q: "escalate 和 upgrade 有什么区别？", a: "escalate = 升级处理层级（问题交给更高级别的人）；upgrade = 升级设备/软件（换到更好版本）。" },
    ],
  },
  {
    id: 59,
    en: "Please create a fault ticket for this alarm.",
    cn: "请为这个告警创建故障单。",
    ipa: "/pliːz kriˈeɪt ə fɔːlt ˈtɪk.ɪt fɔːr ðɪs əˈlɑːm/",
    tags: ["第59句", "创建工单", "★★★★★"],
    when: "指示接班人员为当前告警创建正式的故障工单，用于跟踪处理进度。",
    words: [
      { w: "create", ipa: "/kriˈeɪt/", pos: "动词", cn: "创建；创造", memory: "① create = 创建/创造。\ncreate a ticket = 创建一个工单。", phonics: "cre 读 /kri/，ate 读 /eɪt/。", collocations: [["create a ticket", "创建工单"], ["create a report", "创建报告"], ["create an account", "创建账户"]], examples: [["Please create a ticket.", "请创建一个工单。"], ["I created the ticket already.", "我已经创建了工单。"]] },
      { w: "fault ticket", ipa: "/fɔːlt ˈtɪk.ɪt/", pos: "名词短语", cn: "故障工单", memory: "① fault = 故障/错误；② ticket = 工单/票据。\nfault ticket = 用于跟踪故障处理流程的工单。", phonics: "fault 读 /fɔːlt/，ticket 读 /ˈtɪk.ɪt/。", collocations: [["fault ticket", "故障工单"], ["create a ticket", "创建工单"], ["close a ticket", "关闭工单"], ["ticket number", "工单号"]], examples: [["Create a fault ticket.", "创建故障工单。"], ["What is the ticket number?", "工单号是多少？"]] },
    ],
    phrases: [
      { p: "fault ticket", ipa: "/fɔːlt ˈtɪk.ɪt/", cn: "故障工单", why: "fault 说明工单的类型是故障类的，ticket 是工单系统中的一个记录。" },
      { p: "for this alarm", ipa: "/fɔːr ðɪs əˈlɑːm/", cn: "为这个告警", why: "for 表示目的/对象——这个工单是为了跟踪这个告警。" },
    ],
    grammar: [
      { q: "ticket 在 IT 中是什么意思？", a: "ticket = 工单（不是「票」）。\nIT ticket = 一个服务请求或故障报告的正式记录。\n✅ create a ticket（创建工单）\n✅ close a ticket（关闭工单）\n✅ assign a ticket（分配工单）\n✅ ticket number / ticket ID（工单号）" },
    ],
    pattern: "Please create a + 名词 + for + 对象",
    patternExamples: [
      { en: "Create a change request for this upgrade.", cn: "为这次升级创建变更请求。", words: [] },
      { en: "Create a report for this incident.", cn: "为这个事故创建报告。", words: [{ w: "report", ipa: "/rɪˈpɔːrt/", cn: "报告", phonics: "re 读 /rɪ/，port 读 /pɔːrt/" }] },
      { en: "Create a ticket for the UPS failure.", cn: "为UPS故障创建工单。", words: [{ w: "ticket", ipa: "/ˈtɪkɪt/", cn: "工单", phonics: "tick 读 /tɪk/，et 读 /ɪt/" }, { w: "ups", ipa: "/ˌjuːˈpiːˈɛs/", cn: "不间断电源", phonics: "U-P-S 逐字母读" }] },
    ],
    thinking: "创建工单是告警处理流程中的重要步骤——有了工单，故障才有正式记录、有人负责、有截止时间。\n交接时如果有告警需要跟进，一定要确保已经 create a ticket。",
    pronunciation: "create 重音在第二音节：cre-ATE。\nfault 的 l 发音清晰：/fɔːlt/。\nticket 重音在第一音节：TICK-et。\n节奏：Please cre-ATE ｜ a FAULT TICK-et ｜ for this a-LARM.",
    quiz: [
      { q: "为UPS故障创建工单，怎么说？", a: "Please create a fault ticket for the UPS failure." },
      { q: "ticket 在 IT 中是什么意思？", a: "ticket = 工单（不是票），是服务请求或故障报告的正式记录。" },
    ],
  },
  {
    id: 60,
    en: "Let's move on to the DCIM alarms.",
    cn: "我们继续查看DCIM告警。",
    ipa: "/lɛts muːv ɒn tuː ðə ˌdiː.siː.aɪˈɛm əˈlɑːmz/",
    tags: ["第60句", "转场", "★★★★★"],
    when: "BMS 告警交接完毕，引导进入下一个系统的交接（DCIM）。这是转场句，标志一个阶段的结束。",
    words: [
      { w: "move on", ipa: "/muːv ɒn/", pos: "动词短语", cn: "继续；进入下一步", memory: "① move = 移动；② on = 继续。\nmove on = 移动到下一个事项 → 继续下一项。", phonics: "move 读 /muːv/，on 读 /ɒn/。", collocations: [["move on to", "继续到"], ["let's move on", "我们继续"], ["move on to the next item", "进入下一项"]], examples: [["Let's move on.", "我们继续吧。"], ["Move on to the next topic.", "进入下一个话题。"]] },
      { w: "DCIM", ipa: "/ˌdiː.siː.aɪˈɛm/", pos: "缩写", cn: "数据中心基础设施管理", memory: "① D = Data（数据）；② C = Center（中心）；③ I = Infrastructure（基础设施）；④ M = Management（管理）。\nDCIM = 管理数据中心物理基础设施的系统。", phonics: "逐字母读 D-C-I-M。", collocations: [["DCIM alarms", "DCIM告警"], ["DCIM dashboard", "DCIM仪表盘"], ["DCIM monitoring", "DCIM监控"]], examples: [["Check the DCIM for alarms.", "检查DCIM告警。"], ["The DCIM shows all green.", "DCIM显示全绿。"]] },
    ],
    phrases: [
      { p: "move on to", ipa: "/muːv ɒn tuː/", cn: "继续到……", why: "move on 是「继续前进」，to 是目标——继续到哪个事项。" },
      { p: "Let's move on", ipa: "/lɛts muːv ɒn/", cn: "我们继续", why: "Let's 发起共同动作，move on 表示从当前事项移到下一个。交接中的转场标准用语。" },
    ],
    grammar: [
      { q: "move on 和 continue 的区别？", a: "move on = 移到下一个事项（换了话题/对象）。\ncontinue = 继续做同一件事（不换话题）。\n✅ Let's move on to DCIM.（从BMS转到DCIM——换话题。）\n✅ Let's continue checking BMS.（继续检查BMS——同一话题。）" },
    ],
    pattern: "Let's move on to + 下一个事项",
    patternExamples: [
      { en: "Let's move on to the EPMS.", cn: "我们继续看EPMS。", words: [] },
      { en: "Let's move on to the fire system.", cn: "我们继续看消防系统。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "Let's move on to the next section.", cn: "我们进入下一部分。", words: [] },
      { en: "Let's move on to the action items.", cn: "我们进入行动项。", words: [] },
    ],
    thinking: "move on to 是交接中非常重要的转场句——标志一个系统交接完毕，开始下一个。\n交接的结构：BMS → DCIM → EPMS → Fire System → ...\n每个系统交接结束都用 Let's move on to the next... 来转场。",
    pronunciation: "move on 连读：mo-von /muːvɒn/。\nDCIM 逐字母读 D-C-I-M。\n节奏：Let's MOVE ON ｜ to the D-C-I-M ｜ a-LARMS.",
    quiz: [
      { q: "我们继续看消防系统，怎么说？", a: "Let's move on to the fire system." },
      { q: "move on 和 continue 有什么区别？", a: "move on = 移到下一个事项（换话题）；continue = 继续同一件事（不换话题）。" },
    ],
  },
  // ── 场景001：DCIM 交接 (61-90) ──
  ...MOCK_SENTENCES_PART3A,
  ...MOCK_SENTENCES_PART3B,
  // ── 场景001：事件单交接 (91-120) ──
  ...MOCK_SENTENCES_PART4A,
  ...MOCK_SENTENCES_PART4B,
  // ── 场景001：故障单 (121-150) ──
  ...MOCK_SENTENCES_PART5A,
  ...MOCK_SENTENCES_PART5B,
  // ── 场景001：SLA与施工计划 (151-180) ──
  ...MOCK_SENTENCES_PART6A,
  ...MOCK_SENTENCES_PART6B,
  // ── 场景001：供应商与随工监督 (181-210) ──
  ...MOCK_SENTENCES_PART7A,
  ...MOCK_SENTENCES_PART7B,
  // ── 场景001：人员与培训 (211-240) ──
  ...MOCK_SENTENCES_PART8A,
  ...MOCK_SENTENCES_PART8B,
  // ── 场景001：天气与雨天巡检 (241-270) ──
  ...MOCK_SENTENCES_PART9A,
  ...MOCK_SENTENCES_PART9B,
  // ── 场景001：电气暖通与结束交班 (271-300) ──
  ...MOCK_SENTENCES_PART10A,
  ...MOCK_SENTENCES_PART10B,
  // ── 场景001：BMS高级操作 (301-350) ──
  ...MOCK_SENTENCES_PART11A,
  ...MOCK_SENTENCES_PART11B,
  // ── 场景001：DCIM定位 (351-400) ──
  ...MOCK_SENTENCES_PART12A,
  ...MOCK_SENTENCES_PART12B,
  // ── 场景001：MOP执行 (401-450) ──
  ...MOCK_SENTENCES_PART13A,
  ...MOCK_SENTENCES_PART13B,
  // ── 场景001：EOP应急 (451-500) ──
  ...MOCK_SENTENCES_PART14A,
  ...MOCK_SENTENCES_PART14B,
  // ── 场景001：客户电话会议 (1201-1260) ──
  ...MOCK_SENTENCES_PART15A,
  ...MOCK_SENTENCES_PART15B,
  ...MOCK_SENTENCES_PART15C,
  ...MOCK_SENTENCES_PART15D,
  // ── 场景001：施工现场指挥 (1281-1320) ──
  ...MOCK_SENTENCES_PART16C,
  ...MOCK_SENTENCES_PART16D,
  // ── 场景001：电气倒闸操作 (1321-1360) ──
  ...MOCK_SENTENCES_PART17A,
  ...MOCK_SENTENCES_PART17B,
  // ── 场景001：UPS运行与维护 (1361-1400) ──
  ...MOCK_SENTENCES_PART18A,
  ...MOCK_SENTENCES_PART18B,
  // ── 场景001：锂电池系统 (1401-1440) ──
  ...MOCK_SENTENCES_PART19A,
  ...MOCK_SENTENCES_PART19B,
  // ── 场景001：中压开关柜 (1441-1480) ──
  ...MOCK_SENTENCES_PART20A,
  ...MOCK_SENTENCES_PART20B,
  // ── 场景001：变压器 (1481-1520) ──
  ...MOCK_SENTENCES_PART21A,
  ...MOCK_SENTENCES_PART21B,
  // ── 场景001：柴油发电机 (1521-1560) ──
  ...MOCK_SENTENCES_PART22A,
  ...MOCK_SENTENCES_PART22B,
  // ── 场景001：CRAC与冷冻水系统 (1561-1600) ──
  ...MOCK_SENTENCES_PART23A,
  ...MOCK_SENTENCES_PART23B,
  // ── 场景001：冷却塔 (1601-1640) ──
  ...MOCK_SENTENCES_PART24A,
  ...MOCK_SENTENCES_PART24B,
  // ── 场景001：冷冻水泵与冷却水泵 (1641-1680) ──
  ...MOCK_SENTENCES_PART25A,
  ...MOCK_SENTENCES_PART25B,
  // ── 场景001：消防系统 (1681-1720) ──
  ...MOCK_SENTENCES_PART26A,
  ...MOCK_SENTENCES_PART26B,
  // ── 场景001：安防系统 (1721-1760) ──
  ...MOCK_SENTENCES_PART27A,
  ...MOCK_SENTENCES_PART27B,
  // ── 场景001：网络与弱电系统 (1761-1800) ──
  ...MOCK_SENTENCES_PART28A,
  ...MOCK_SENTENCES_PART28B,
  // ── 第29部分：DCIM/BMS综合监控中心 (1801-1840) ──
  ...MOCK_SENTENCES_BMS29A,
  ...MOCK_SENTENCES_BMS29B,
  // ── 第30部分：值班经理交接班总结 (1841-1880) ──
  ...MOCK_SENTENCES_HANDOVER30A,
  ...MOCK_SENTENCES_HANDOVER30B,
  // ── 第31部分：客户接待与机房参观 (1881-1920) ──
  ...MOCK_SENTENCES_FACILITY31A,
  ...MOCK_SENTENCES_FACILITY31B,
  // ── 第32部分：客户审计 (1921-1960) ──
  ...MOCK_SENTENCES_AUDIT32A,
  ...MOCK_SENTENCES_AUDIT32B,
  // ── 第33部分：值班经理主持会议 (1961-2000) ──
  ...MOCK_SENTENCES_OPSMEETING33A,
  ...MOCK_SENTENCES_OPS33B,
  // ── 第34部分：数据中心经理日常管理 (2001-2040) ──
  ...MOCK_SENTENCES_DCMANAGER34A,
  ...MOCK_SENTENCES_DCMANAGER34B,
  // ── 第35部分：数据中心经理向老板汇报 (2041-2080) ──
  ...MOCK_SENTENCES_MGMTREPORT35A,
  ...MOCK_SENTENCES_MGMTREPORT35B,
  // ── 第36部分：招聘与面试 (2081-2120) ──
  ...MOCK_SENTENCES_RECRUITMENT36A,
  ...MOCK_SENTENCES_RECRUITMENT36B,
  // ── 第37部分：绩效考核 (2121-2160) ──
  ...MOCK_SENTENCES_PERFORMANCE37A,
  ...MOCK_SENTENCES_PERFORMANCE37B,
  // ── 第38部分：客户商务沟通 (2161-2200) ──
  ...MOCK_SENTENCES_CLIENTCOMM38A,
  ...MOCK_SENTENCES_CLIENTCOMM38B,
  // ── 第39部分：RCA与CAPA (2201-2240) ──
  ...MOCK_SENTENCES_RCACAPA39A,
  ...MOCK_SENTENCES_RCAPAPA39B,
  // ── 第40部分：重大故障应急指挥 (2241-2280) ──
  ...MOCK_SENTENCES_EMERGENCYCMD40A,
  ...MOCK_SENTENCES_EMERGENCYCMD40B,
  // ── 第41部分：市电停电 (2281-2320) ──
  ...MOCK_SENTENCES_UTILITYPOWER41A,
  ...MOCK_SENTENCES_UTILITYPOWER41B,
  // ── 第42部分：UPS故障应急 (2321-2360) ──
  ...MOCK_SENTENCES_UPSFAULT42A,
  ...MOCK_SENTENCES_UPSFAULT42B,
  // ── 第43部分：早晨问候与寒暄 (2361-2400) ──
  ...MOCK_SENTENCES_MORNINGGREET43A,
  ...MOCK_SENTENCES_MORNINGGREET43B,
  // ── 第44部分：打印复印与办公用品 (2401-2440) ──
  ...MOCK_SENTENCES_OFFICEPRINT44A,
  ...MOCK_SENTENCES_OFFICEPRINT44B,
  // ── 第45部分：借东西还东西与领料 (2441-2480) ──
  ...MOCK_SENTENCES_BORROWRETURN45A,
  ...MOCK_SENTENCES_BORROWRETURN45B,
  // ── 第46部分：办公室日常沟通 (2481-2520) ──
  ...MOCK_SENTENCES_OFFICECOMMS46A,
  ...MOCK_SENTENCES_OFFICECOMMS46B,
  // ── 第47部分：会议室与视频会议 (2521-2560) ──
  ...MOCK_SENTENCES_MEETINGROOM47A,
  ...MOCK_SENTENCES_MEETINGROOM47B,
  // ── 第48部分：办公室日常高频英语 (2561-2600) ──
  ...MOCK_SENTENCES_DAILYOFFICE48A,
  ...MOCK_SENTENCES_DAILYOFFICE48B,
  // ── 第49部分：同事闲聊 (2601-2640) ──
  ...MOCK_SENTENCES_SMALLTALK49A,
  ...MOCK_SENTENCES_SMALLTALK49B,
  // ── 第50部分：同事闲聊（续） (2641-2680) ──
  ...MOCK_SENTENCES_SMALLTALK50A,
  ...MOCK_SENTENCES_SMALLTALK50B,
  // ── 第51部分：马来西亚办公室与生活 (2681-2720) ──
  ...MOCK_SENTENCES_MALAYLIFE51A,
  ...MOCK_SENTENCES_MALAYLIFE51B,
  // ── 第52部分：请假调班加班考勤 (2721-2760) ──
  ...MOCK_SENTENCES_LEAVEATTENDANCE52A,
  ...MOCK_SENTENCES_LEAVEATTENDANCE52B,
  // ── 第53部分：电话WhatsApp与Teams (2761-2800) ──
  ...MOCK_SENTENCES_COMMMTOOLS53A,
  ...MOCK_SENTENCES_COMMMTOOLS53B,
  // ── 第54部分：数据中心现场沟通 (2801-2840) ──
  ...MOCK_SENTENCES_ONSITECOMM54A,
  ...MOCK_SENTENCES_ONSITECOMM54B,
  // ── 第55部分：供应商现场管理 (2841-2880) ──
  ...MOCK_SENTENCES_VENDORMGMT55A,
  ...MOCK_SENTENCES_VENDORMGMT55B,
  // ── 第56部分：仓库采购与备件管理 (2881-2920) ──
  ...MOCK_SENTENCES_WAREHOUSESPARE56A,
  ...MOCK_SENTENCES_WAREHOUSESPARE56B,
  // ── DCIM数据中心实战200句 (2001-2200) ──
  ...MOCK_SENTENCES_DCIM200A,
  ...MOCK_SENTENCES_DCIM200B,
  ...MOCK_SENTENCES_DCIM200C,
  ...MOCK_SENTENCES_DCIM200D,
  ...MOCK_SENTENCES_DCIM200E,
  // ── DCIM开单专项加强版200句 (2201-2400) ──
  ...MOCK_SENTENCES_DCIM400A,
  ...MOCK_SENTENCES_DCIM400B,
  ...MOCK_SENTENCES_DCIM400C,
  ...MOCK_SENTENCES_DCIM400D,
  ...MOCK_SENTENCES_DCIM400E,
];

/**
 * Miaoda reused IDs 2001-2400 for two different course groups. That made
 * progress, favourites, wrong-book entries and route lookups overwrite each
 * other. Keep the source number for traceability, but expose one unique,
 * sequential ID for all 2,600 records and rebuild the 81 section ranges from
 * their original lengths.
 */
let normalizedSectionStart = 1;
export const SENTENCE_SECTIONS = RAW_SENTENCE_SECTIONS.map(section => {
  const length = section.range[1] - section.range[0] + 1;
  const normalized = {
    label: section.label,
    range: [normalizedSectionStart, normalizedSectionStart + length - 1] as [number, number],
  };
  normalizedSectionStart += length;
  return normalized;
});

export const MOCK_SENTENCES: any[] = RAW_MOCK_SENTENCES.map((sentence, index) => ({
  ...sentence,
  sourceId: sentence.id,
  id: index + 1,
}));

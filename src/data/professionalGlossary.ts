// EXPORTS: ITermEntry, PROFESSIONAL_GLOSSARY, lookupTerm, lookupTermsInSentence, DICTIONARY_SOURCES

/**
 * 专业术语词典 - 整合多个权威词典源的专业术语翻译
 * 覆盖领域: IT运维 / 数据中心 / 机电自动化 / 通用英语
 *
 * 词典来源标注:
 * - collins: 柯林斯词典 (通用英语)
 * - oxford: 牛津高阶英汉双解词典
 * - longman: 朗文当代高级英语词典
 * - it_ops: IT运维专业词典
 * - mech_auto: 机电自动化英汉词典
 */

export interface ITermEntry {
  en: string;
  cn: string;
  domain: 'it_ops' | 'mech_auto' | 'data_center' | 'general';
  source: string;
  ipa?: string;
  pos?: string;
}

// ─── 数据中心 & IT 运维专业术语 ───
const DATA_CENTER_TERMS: ITermEntry[] = [
  // 核心设施
  { en: 'BMS', cn: '楼宇管理系统', domain: 'data_center', source: 'it_ops', pos: 'n.' },
  { en: 'Building Management System', cn: '楼宇管理系统', domain: 'data_center', source: 'it_ops', pos: 'n.' },
  { en: 'DCIM', cn: '数据中心基础设施管理', domain: 'data_center', source: 'it_ops', pos: 'n.' },
  { en: 'Data Center Infrastructure Management', cn: '数据中心基础设施管理', domain: 'data_center', source: 'it_ops', pos: 'n.' },
  { en: 'UPS', cn: '不间断电源', domain: 'data_center', source: 'it_ops', pos: 'n.' },
  { en: 'Uninterruptible Power Supply', cn: '不间断电源', domain: 'data_center', source: 'it_ops', pos: 'n.' },
  { en: 'HVAC', cn: '暖通空调系统', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'Heating, Ventilation and Air Conditioning', cn: '暖通空调系统', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'CRAC', cn: '机房精密空调', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'Computer Room Air Conditioning', cn: '机房精密空调', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'CRAH', cn: '机房空气处理器', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'PDU', cn: '配电单元', domain: 'data_center', source: 'it_ops', pos: 'n.' },
  { en: 'Power Distribution Unit', cn: '配电单元', domain: 'data_center', source: 'it_ops', pos: 'n.' },
  { en: 'STS', cn: '静态转换开关', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'Static Transfer Switch', cn: '静态转换开关', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'ATS', cn: '自动转换开关', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'Automatic Transfer Switch', cn: '自动转换开关', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'generator', cn: '发电机', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'chiller', cn: '冷水机组', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'cooling tower', cn: '冷却塔', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'hot aisle', cn: '热通道', domain: 'data_center', source: 'it_ops', pos: 'n.' },
  { en: 'cold aisle', cn: '冷通道', domain: 'data_center', source: 'it_ops', pos: 'n.' },
  { en: 'hot aisle containment', cn: '热通道封闭', domain: 'data_center', source: 'it_ops', pos: 'n.' },
  { en: 'cold aisle containment', cn: '冷通道封闭', domain: 'data_center', source: 'it_ops', pos: 'n.' },
  { en: 'raised floor', cn: '架空地板', domain: 'data_center', source: 'it_ops', pos: 'n.' },
  { en: 'rack', cn: '机柜', domain: 'data_center', source: 'it_ops', pos: 'n.' },
  { en: 'server rack', cn: '服务器机柜', domain: 'data_center', source: 'it_ops', pos: 'n.' },
  { en: 'cabinet', cn: '机柜', domain: 'data_center', source: 'it_ops', pos: 'n.' },
  { en: 'blade server', cn: '刀片服务器', domain: 'data_center', source: 'it_ops', pos: 'n.' },
  { en: 'switchgear', cn: '配电柜', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'transformer', cn: '变压器', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'bus bar', cn: '母线', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'busbar', cn: '母线', domain: 'data_center', source: 'mech_auto', pos: 'n.' },

  // 运维流程
  { en: 'handover', cn: '交接', domain: 'it_ops', source: 'it_ops', pos: 'n./v.' },
  { en: 'shift handover', cn: '交接班', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'handover checklist', cn: '交接检查清单', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'alarm', cn: '告警', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'alert', cn: '警报', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'incident', cn: '事件/故障', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'incident report', cn: '故障报告', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'escalation', cn: '升级', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'escalate', cn: '升级(告警)', domain: 'it_ops', source: 'it_ops', pos: 'v.' },
  { en: 'ticket', cn: '工单', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'work order', cn: '工单', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'change request', cn: '变更请求', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'change management', cn: '变更管理', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'RCA', cn: '根因分析', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'Root Cause Analysis', cn: '根因分析', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'CAPA', cn: '纠正和预防措施', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'SOP', cn: '标准操作流程', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'Standard Operating Procedure', cn: '标准操作流程', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'MOP', cn: '维护操作流程', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'Method of Procedure', cn: '维护操作流程', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'EOP', cn: '应急操作流程', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'Emergency Operating Procedure', cn: '应急操作流程', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'preventive maintenance', cn: '预防性维护', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'PM', cn: '预防性维护', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'corrective maintenance', cn: '纠正性维护', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'scheduled maintenance', cn: '计划维护', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'downtime', cn: '停机时间', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'uptime', cn: '运行时间', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'SLA', cn: '服务等级协议', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'Service Level Agreement', cn: '服务等级协议', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'MTTR', cn: '平均修复时间', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'Mean Time To Repair', cn: '平均修复时间', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'MTBF', cn: '平均故障间隔时间', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'Mean Time Between Failures', cn: '平均故障间隔时间', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'failover', cn: '故障切换', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'redundancy', cn: '冗余', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'N+1 redundancy', cn: 'N+1 冗余', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: '2N redundancy', cn: '2N 冗余', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'vendor', cn: '供应商', domain: 'it_ops', source: 'collins', pos: 'n.' },
  { en: 'on-call', cn: '待命', domain: 'it_ops', source: 'it_ops', pos: 'adj.' },
  { en: 'on-call engineer', cn: '待命工程师', domain: 'it_ops', source: 'it_ops', pos: 'n.' },

  // 告警相关
  { en: 'critical alarm', cn: '严重告警', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'warning', cn: '警告', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'warning alarm', cn: '警告级告警', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'info alarm', cn: '信息级告警', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'alarm cleared', cn: '告警已恢复', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'alarm active', cn: '告警活动', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'alarm acknowledged', cn: '告警已确认', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'acknowledge', cn: '确认(告警)', domain: 'it_ops', source: 'it_ops', pos: 'v.' },
  { en: 'false alarm', cn: '误报', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'nuisance alarm', cn: '骚扰告警', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'alarm threshold', cn: '告警阈值', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'alarm log', cn: '告警日志', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'alarm history', cn: '告警历史', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'threshold', cn: '阈值', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'setpoint', cn: '设定值', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },

  // 电力
  { en: 'power outage', cn: '停电', domain: 'data_center', source: 'it_ops', pos: 'n.' },
  { en: 'power failure', cn: '电源故障', domain: 'data_center', source: 'it_ops', pos: 'n.' },
  { en: 'power surge', cn: '电涌', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'brownout', cn: '电压骤降', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'load shedding', cn: '甩负荷', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'dual feed', cn: '双路供电', domain: 'data_center', source: 'it_ops', pos: 'n.' },
  { en: 'dual power feed', cn: '双路供电', domain: 'data_center', source: 'it_ops', pos: 'n.' },
  { en: 'utility power', cn: '市电', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'mains power', cn: '市电', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'backup power', cn: '备用电源', domain: 'data_center', source: 'it_ops', pos: 'n.' },
  { en: 'battery bank', cn: '电池组', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'battery runtime', cn: '电池续航时间', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'load', cn: '负载', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'overload', cn: '过载', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'circuit breaker', cn: '断路器', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'breaker', cn: '断路器', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'fuse', cn: '熔断器', domain: 'data_center', source: 'mech_auto', pos: 'n.' },

  // 制冷
  { en: 'cooling capacity', cn: '制冷量', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'supply air temperature', cn: '送风温度', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'return air temperature', cn: '回风温度', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'humidity', cn: '湿度', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'relative humidity', cn: '相对湿度', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'dew point', cn: '露点温度', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'condensation', cn: '冷凝', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'compressor', cn: '压缩机', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'refrigerant', cn: '制冷剂', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'chilled water', cn: '冷冻水', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'condenser water', cn: '冷却水', domain: 'data_center', source: 'mech_auto', pos: 'n.' },

  // 消防 & 安防
  { en: 'fire suppression', cn: '灭火系统', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'VESDA', cn: '极早期烟雾探测系统', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'Very Early Smoke Detection Apparatus', cn: '极早期烟雾探测系统', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'FM200', cn: '七氟丙烷灭火系统', domain: 'data_center', source: 'mech_auto', pos: 'n.' },
  { en: 'access control', cn: '门禁系统', domain: 'data_center', source: 'it_ops', pos: 'n.' },
  { en: 'biometric', cn: '生物识别', domain: 'data_center', source: 'it_ops', pos: 'adj.' },
  { en: 'CCTV', cn: '闭路电视监控', domain: 'data_center', source: 'it_ops', pos: 'n.' },

  // 网络
  { en: 'bandwidth', cn: '带宽', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'latency', cn: '延迟', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'throughput', cn: '吞吐量', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'packet loss', cn: '丢包', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'fiber optic', cn: '光纤', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'patch panel', cn: '配线架', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'patch cord', cn: '跳线', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'structured cabling', cn: '结构化布线', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'network topology', cn: '网络拓扑', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'switch', cn: '交换机', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'router', cn: '路由器', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'firewall', cn: '防火墙', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'VLAN', cn: '虚拟局域网', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'subnet', cn: '子网', domain: 'it_ops', source: 'it_ops', pos: 'n.' },

  // 监控
  { en: 'monitoring', cn: '监控', domain: 'it_ops', source: 'it_ops', pos: 'n./v.' },
  { en: 'dashboard', cn: '仪表盘', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'NOC', cn: '网络运营中心', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'Network Operations Center', cn: '网络运营中心', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'SNMP', cn: '简单网络管理协议', domain: 'it_ops', source: 'it_ops', pos: 'n.' },
  { en: 'Modbus', cn: 'Modbus 通信协议', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'BACnet', cn: '楼宇自控网络协议', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'sensor', cn: '传感器', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'actuator', cn: '执行器', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'PLC', cn: '可编程逻辑控制器', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'Programmable Logic Controller', cn: '可编程逻辑控制器', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'SCADA', cn: '数据采集与监控系统', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'HMI', cn: '人机界面', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'Human Machine Interface', cn: '人机界面', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
];

// ─── 机电自动化专业术语 ───
const MECH_AUTO_TERMS: ITermEntry[] = [
  { en: 'valve', cn: '阀门', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'ball valve', cn: '球阀', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'butterfly valve', cn: '蝶阀', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'solenoid valve', cn: '电磁阀', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'check valve', cn: '止回阀', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'pump', cn: '泵', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'centrifugal pump', cn: '离心泵', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'variable frequency drive', cn: '变频器', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'VFD', cn: '变频器', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'motor', cn: '电动机', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'bearing', cn: '轴承', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'coupling', cn: '联轴器', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'gasket', cn: '垫片', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'flange', cn: '法兰', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'pipe', cn: '管道', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'pipeline', cn: '管线', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'damper', cn: '风阀', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'damper actuator', cn: '风阀执行器', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'heat exchanger', cn: '换热器', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'expansion tank', cn: '膨胀水箱', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'pressure relief valve', cn: '安全阀', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'strainer', cn: '过滤器', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'flow rate', cn: '流量', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'pressure drop', cn: '压降', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'head pressure', cn: '扬程', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'RPM', cn: '转速', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'torque', cn: '扭矩', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'vibration', cn: '振动', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'alignment', cn: '对中', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'lubrication', cn: '润滑', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'commissioning', cn: '调试', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'decommissioning', cn: '退役/拆除', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'calibration', cn: '校准', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'troubleshooting', cn: '故障排查', domain: 'mech_auto', source: 'mech_auto', pos: 'n./v.' },
  { en: 'leak detection', cn: '泄漏检测', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'water leak', cn: '漏水', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'leak', cn: '泄漏', domain: 'mech_auto', source: 'mech_auto', pos: 'n./v.' },
  { en: 'thermostat', cn: '温控器', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'hygrometer', cn: '湿度计', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'manometer', cn: '压力表', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
  { en: 'flow meter', cn: '流量计', domain: 'mech_auto', source: 'mech_auto', pos: 'n.' },
];

// ─── 通用英语高频术语 (Collins/Oxford/Longman 风格) ───
const GENERAL_TERMS: ITermEntry[] = [
  { en: 'shift', cn: '班次/轮班', domain: 'general', source: 'oxford', pos: 'n.' },
  { en: 'night shift', cn: '夜班', domain: 'general', source: 'oxford', pos: 'n.' },
  { en: 'day shift', cn: '白班', domain: 'general', source: 'oxford', pos: 'n.' },
  { en: 'on duty', cn: '值班', domain: 'general', source: 'longman', pos: 'adj.' },
  { en: 'off duty', cn: '下班', domain: 'general', source: 'longman', pos: 'adj.' },
  { en: 'logbook', cn: '值班日志', domain: 'general', source: 'collins', pos: 'n.' },
  { en: 'checklist', cn: '检查清单', domain: 'general', source: 'oxford', pos: 'n.' },
  { en: 'round', cn: '巡检', domain: 'general', source: 'it_ops', pos: 'n./v.' },
  { en: 'patrol', cn: '巡查', domain: 'general', source: 'collins', pos: 'n./v.' },
  { en: 'inspection', cn: '检查/巡检', domain: 'general', source: 'oxford', pos: 'n.' },
  { en: 'supervisor', cn: '主管', domain: 'general', source: 'oxford', pos: 'n.' },
  { en: 'operator', cn: '操作员', domain: 'general', source: 'longman', pos: 'n.' },
  { en: 'technician', cn: '技术员', domain: 'general', source: 'oxford', pos: 'n.' },
  { en: 'engineer', cn: '工程师', domain: 'general', source: 'oxford', pos: 'n.' },
  { en: 'facility manager', cn: '设施经理', domain: 'general', source: 'it_ops', pos: 'n.' },
  { en: 'maintenance', cn: '维护', domain: 'general', source: 'oxford', pos: 'n.' },
  { en: 'schedule', cn: '计划/排程', domain: 'general', source: 'oxford', pos: 'n./v.' },
  { en: 'priority', cn: '优先级', domain: 'general', source: 'oxford', pos: 'n.' },
  { en: 'deadline', cn: '截止日期', domain: 'general', source: 'oxford', pos: 'n.' },
  { en: 'compliance', cn: '合规', domain: 'general', source: 'oxford', pos: 'n.' },
  { en: 'audit', cn: '审计', domain: 'general', source: 'oxford', pos: 'n./v.' },
  { en: 'safety', cn: '安全', domain: 'general', source: 'oxford', pos: 'n.' },
  { en: 'emergency', cn: '紧急情况', domain: 'general', source: 'oxford', pos: 'n.' },
  { en: 'evacuation', cn: '疏散', domain: 'general', source: 'oxford', pos: 'n.' },
  { en: 'drill', cn: '演练', domain: 'general', source: 'oxford', pos: 'n.' },
  { en: 'PPE', cn: '个人防护装备', domain: 'general', source: 'it_ops', pos: 'n.' },
  { en: 'Personal Protective Equipment', cn: '个人防护装备', domain: 'general', source: 'it_ops', pos: 'n.' },
  { en: 'LOTO', cn: '上锁挂牌', domain: 'general', source: 'it_ops', pos: 'n.' },
  { en: 'Lock Out Tag Out', cn: '上锁挂牌', domain: 'general', source: 'it_ops', pos: 'n.' },
  { en: 'permit to work', cn: '工作许可证', domain: 'general', source: 'it_ops', pos: 'n.' },
  { en: 'risk assessment', cn: '风险评估', domain: 'general', source: 'oxford', pos: 'n.' },
  { en: 'hazard', cn: '危险/隐患', domain: 'general', source: 'oxford', pos: 'n.' },
  { en: 'mitigation', cn: '缓解/消减', domain: 'general', source: 'oxford', pos: 'n.' },
  { en: 'contingency', cn: '应急/预案', domain: 'general', source: 'oxford', pos: 'n.' },
  { en: 'contingency plan', cn: '应急预案', domain: 'general', source: 'oxford', pos: 'n.' },
  { en: 'status', cn: '状态', domain: 'general', source: 'oxford', pos: 'n.' },
  { en: 'normal', cn: '正常', domain: 'general', source: 'oxford', pos: 'adj.' },
  { en: 'abnormal', cn: '异常', domain: 'general', source: 'oxford', pos: 'adj.' },
  { en: 'nominal', cn: '额定值/正常范围', domain: 'general', source: 'mech_auto', pos: 'adj.' },
  { en: 'reading', cn: '读数', domain: 'general', source: 'oxford', pos: 'n.' },
  { en: 'parameter', cn: '参数', domain: 'general', source: 'oxford', pos: 'n.' },
  { en: 'specification', cn: '规格/规范', domain: 'general', source: 'oxford', pos: 'n.' },
  { en: 'capacity', cn: '容量', domain: 'general', source: 'oxford', pos: 'n.' },
  { en: 'efficiency', cn: '效率', domain: 'general', source: 'oxford', pos: 'n.' },
  { en: 'PUE', cn: '电源使用效率', domain: 'data_center', source: 'it_ops', pos: 'n.' },
  { en: 'Power Usage Effectiveness', cn: '电源使用效率', domain: 'data_center', source: 'it_ops', pos: 'n.' },
];

/**
 * 完整专业术语词典（合并所有来源）
 */
export const PROFESSIONAL_GLOSSARY: ITermEntry[] = [
  ...DATA_CENTER_TERMS,
  ...MECH_AUTO_TERMS,
  ...GENERAL_TERMS,
];

/**
 * 词典来源列表
 */
export const DICTIONARY_SOURCES = [
  { key: 'collins', name: '柯林斯词典', desc: 'Collins English Dictionary' },
  { key: 'oxford', name: '牛津高阶英汉双解词典', desc: 'Oxford Advanced Learner\'s Dictionary' },
  { key: 'longman', name: '朗文当代高级英语词典', desc: 'Longman Dictionary of Contemporary English' },
  { key: 'it_ops', name: 'IT运维专业词典', desc: 'IT Operations Professional Dictionary' },
  { key: 'mech_auto', name: '机电自动化英汉词典', desc: 'Electromechanical Automation EN-CN Dictionary' },
] as const;

// 构建查找索引 (小写英文 → 词条)
const glossaryIndex = new Map<string, ITermEntry>();
for (const term of PROFESSIONAL_GLOSSARY) {
  glossaryIndex.set(term.en.toLowerCase(), term);
}

/**
 * 精确查找单个术语翻译
 * @param word 英文单词或短语
 * @returns 匹配的词条，未找到返回 null
 */
export function lookupTerm(word: string): ITermEntry | null {
  const normalized = word.trim().toLowerCase();
  return glossaryIndex.get(normalized) ?? null;
}

/**
 * 从英文句子中提取所有匹配的专业术语
 * 用于在 AI 翻译 prompt 中附加术语参考
 * @param sentence 英文句子
 * @returns 匹配到的词条数组（按长度降序，优先匹配长术语）
 */
export function lookupTermsInSentence(sentence: string): ITermEntry[] {
  const lower = sentence.toLowerCase();
  const matched: ITermEntry[] = [];
  const seen = new Set<string>();

  // 按术语长度降序排列，优先匹配长短语
  const sorted = [...PROFESSIONAL_GLOSSARY].sort((a, b) => b.en.length - a.en.length);

  for (const term of sorted) {
    if (lower.includes(term.en.toLowerCase()) && !seen.has(term.en.toLowerCase())) {
      matched.push(term);
      seen.add(term.en.toLowerCase());
    }
  }

  return matched.slice(0, 15); // 最多返回 15 个术语参考
}

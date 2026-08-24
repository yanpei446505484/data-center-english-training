/**
 * Data Center Professional Terms Dictionary
 * Auto-generated from DC_Terms_manual_seed_121_rows.csv
 * Priority: 100 (highest) — checked before all other sources
 */

// EXPORTS: IDC_DICTEntry, DC_TERMS_DICTIONARY

export interface IDC_DICTEntry {
  term: string; lemma: string; type: "word" | "phrase";
  source: string; priority: number;
  definition: string; workMeaning: string; example: string; scene: string;
}

export const DC_TERMS_DICTIONARY: IDC_DICTEntry[] = [
  { term: 'UPS', lemma: 'UPS', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '不间断电源', workMeaning: '在市电异常时保持关键负载连续供电的系统。', example: 'The UPS is supporting the critical load.', scene: 'electrical/UPS' },
  { term: 'bypass', lemma: 'bypass', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '旁路', workMeaning: '绕过 UPS 整流/逆变或某一设备的备用供电路径。', example: 'The UPS transferred to bypass mode.', scene: 'UPS' },
  { term: 'static bypass', lemma: 'static bypass', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '静态旁路', workMeaning: 'UPS 内部通过静态开关快速切换到旁路供电。', example: 'Check whether the UPS is on static bypass.', scene: 'UPS' },
  { term: 'maintenance bypass', lemma: 'maintenance bypass', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '维修旁路', workMeaning: '检修 UPS 时让负载绕过 UPS 继续由旁路供电。', example: 'Transfer the load to maintenance bypass before service.', scene: 'UPS' },
  { term: 'bypass mode', lemma: 'bypass mode', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '旁路模式', workMeaning: '负载由旁路供电，而不是由 UPS 逆变器供电。', example: 'The UPS is running in bypass mode.', scene: 'UPS' },
  { term: 'inverter', lemma: 'inverter', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '逆变器', workMeaning: '把直流电转换成交流电的 UPS 关键部件。', example: 'The inverter is carrying the load.', scene: 'UPS' },
  { term: 'rectifier', lemma: 'rectifier', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '整流器', workMeaning: '把交流电转换成直流电并给电池或直流母线供电的设备。', example: 'The rectifier input is normal.', scene: 'UPS' },
  { term: 'battery string', lemma: 'battery string', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '电池组串', workMeaning: '由多节电池串联组成的 UPS 电池支路。', example: 'Battery string 2 has a high internal resistance alarm.', scene: 'UPS/battery' },
  { term: 'battery cabinet', lemma: 'battery cabinet', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '电池柜', workMeaning: '集中安装 UPS 电池的柜体。', example: 'Inspect the battery cabinet temperature.', scene: 'UPS/battery' },
  { term: 'internal resistance', lemma: 'internal resistance', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '内阻', workMeaning: '反映电池健康状态的重要指标，异常升高可能代表老化。', example: 'The battery internal resistance is above the baseline.', scene: 'UPS/battery' },
  { term: 'discharge test', lemma: 'discharge test', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '放电测试', workMeaning: '通过受控放电验证电池容量和带载能力。', example: 'We will perform a short discharge test.', scene: 'UPS/battery' },
  { term: 'float charge', lemma: 'float charge', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '浮充', workMeaning: '电池长期保持满电状态的充电方式。', example: 'The battery is under float charge.', scene: 'UPS/battery' },
  { term: 'breaker', lemma: 'breaker', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '断路器', workMeaning: '用于接通、断开和保护电路的开关设备。', example: 'The breaker is closed.', scene: 'electrical' },
  { term: 'circuit breaker', lemma: 'circuit breaker', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '断路器', workMeaning: '用于电路保护和操作的开关设备。', example: 'The circuit breaker tripped during the test.', scene: 'electrical' },
  { term: 'breaker trip', lemma: 'breaker trip', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '断路器跳闸', workMeaning: '保护动作或故障导致断路器断开。', example: 'A breaker trip was recorded on BMS.', scene: 'electrical' },
  { term: 'tripped', lemma: 'trip', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '跳闸', workMeaning: '在电气现场常指断路器因保护或故障动作而断开。', example: 'The breaker tripped due to an earth fault.', scene: 'electrical' },
  { term: 'close the breaker', lemma: 'close the breaker', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '合闸', workMeaning: '使断路器接通电路。', example: 'Do not close the breaker without approval.', scene: 'electrical' },
  { term: 'open the breaker', lemma: 'open the breaker', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '分闸', workMeaning: '使断路器断开电路。', example: 'Open the breaker after confirming zero load.', scene: 'electrical' },
  { term: 'rack in', lemma: 'rack in', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '摇进', workMeaning: '将抽屉式断路器摇到工作位置。', example: 'Rack in the breaker slowly.', scene: 'electrical/switchgear' },
  { term: 'rack out', lemma: 'rack out', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '摇出', workMeaning: '将抽屉式断路器摇出到试验或隔离位置。', example: 'Rack out the breaker before maintenance.', scene: 'electrical/switchgear' },
  { term: 'switchgear', lemma: 'switchgear', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '开关柜', workMeaning: '用于配电、保护和控制的成套电气设备。', example: 'Inspect the MV switchgear room.', scene: 'electrical' },
  { term: 'MV switchgear', lemma: 'MV switchgear', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '中压开关柜', workMeaning: '中压系统中用于接收、分配和保护电能的开关柜。', example: 'The MV switchgear alarm must be checked immediately.', scene: 'electrical/MV' },
  { term: 'LV switchboard', lemma: 'LV switchboard', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '低压开关柜', workMeaning: '低压系统中用于配电和保护的成套设备。', example: 'The LV switchboard is under maintenance.', scene: 'electrical/LV' },
  { term: 'busbar', lemma: 'busbar', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '母线', workMeaning: '用于汇集和分配电能的导体。', example: 'Check the busbar temperature with a thermal camera.', scene: 'electrical' },
  { term: 'bus coupler', lemma: 'bus coupler', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '母联', workMeaning: '连接两段母线的断路器或开关。', example: 'The bus coupler is normally open.', scene: 'electrical' },
  { term: 'incoming feeder', lemma: 'incoming feeder', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '进线', workMeaning: '电源进入配电系统的回路。', example: 'Incoming feeder 1 is energized.', scene: 'electrical' },
  { term: 'outgoing feeder', lemma: 'outgoing feeder', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '馈线', workMeaning: '从配电柜向负载或下级设备供电的回路。', example: 'The outgoing feeder supplies B7.', scene: 'electrical' },
  { term: 'feeder', lemma: 'feeder', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '馈线', workMeaning: '向某个区域或设备供电的配电回路。', example: 'This feeder supplies the UPS input.', scene: 'electrical' },
  { term: 'energize', lemma: 'energize', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '送电', workMeaning: '使设备或线路带电。', example: 'Do not energize the feeder until the test is completed.', scene: 'electrical' },
  { term: 'de-energize', lemma: 'de-energize', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '断电', workMeaning: '使设备或线路不带电。', example: 'De-energize the circuit before maintenance.', scene: 'electrical' },
  { term: 'isolation', lemma: 'isolation', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '隔离', workMeaning: '通过断开、挂牌、闭锁等方式确保设备安全。', example: 'Verify electrical isolation before work starts.', scene: 'electrical/safety' },
  { term: 'LOTO', lemma: 'LOTO', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '上锁挂牌', workMeaning: 'Lockout Tagout，防止误送电的安全措施。', example: 'LOTO must be applied before maintenance.', scene: 'safety' },
  { term: 'interlock', lemma: 'interlock', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '联锁', workMeaning: '用于防止误操作的机械或电气逻辑限制。', example: 'The breaker cannot close because the interlock is active.', scene: 'electrical' },
  { term: 'earth fault', lemma: 'earth fault', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '接地故障', workMeaning: '带电导体与地之间发生异常连接。', example: 'An earth fault alarm appeared on the relay.', scene: 'protection' },
  { term: 'short circuit', lemma: 'short circuit', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '短路', workMeaning: '不同电位导体之间发生低阻抗异常连接。', example: 'The relay detected a short circuit.', scene: 'protection' },
  { term: 'overcurrent', lemma: 'overcurrent', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '过流', workMeaning: '电流超过设定值或设备允许值。', example: 'The overcurrent protection operated.', scene: 'protection' },
  { term: 'differential protection', lemma: 'differential protection', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '差动保护', workMeaning: '通过比较进出电流判断设备内部故障的保护。', example: 'Differential protection tripped the transformer feeder.', scene: 'protection' },
  { term: 'zero-sequence current', lemma: 'zero-sequence current', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '零序电流', workMeaning: '三相不平衡或接地故障时出现的电流分量。', example: 'Zero-sequence current was recorded by the relay.', scene: 'protection' },
  { term: 'relay', lemma: 'relay', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '继电保护装置', workMeaning: '检测故障并发出跳闸或告警命令的保护设备。', example: 'Check the relay event record.', scene: 'protection' },
  { term: 'protection setting', lemma: 'protection setting', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '保护定值', workMeaning: '继电保护动作阈值和时间等参数。', example: 'Do not change the protection setting without approval.', scene: 'protection' },
  { term: 'event record', lemma: 'event record', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '事件记录', workMeaning: '保护或监控系统记录的动作和告警日志。', example: 'Download the event record from the relay.', scene: 'protection' },
  { term: 'transformer', lemma: 'transformer', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '变压器', workMeaning: '改变交流电压等级的电气设备。', example: 'Transformer TM1 is in service.', scene: 'electrical' },
  { term: 'temperature controller', lemma: 'temperature controller', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '温控器', workMeaning: '用于监测和控制变压器或设备温度的装置。', example: 'Check the transformer temperature controller.', scene: 'electrical' },
  { term: 'generator', lemma: 'generator', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '发电机', workMeaning: '市电故障时为关键负载供电的柴油发电机。', example: 'The generator started automatically.', scene: 'generator' },
  { term: 'diesel generator', lemma: 'diesel generator', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '柴油发电机', workMeaning: '以柴油机驱动的应急电源设备。', example: 'The diesel generator is ready for load test.', scene: 'generator' },
  { term: 'fuel level', lemma: 'fuel level', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '油位', workMeaning: '柴油箱或日用油箱中的燃油液位。', example: 'Check the fuel level before the test.', scene: 'generator' },
  { term: 'load bank test', lemma: 'load bank test', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '负载箱测试', workMeaning: '用负载箱验证发电机或 UPS 带载能力的测试。', example: 'The load bank test is scheduled for Saturday.', scene: 'generator/testing' },
  { term: 'ATS', lemma: 'ATS', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '自动转换开关', workMeaning: '在常用电源和备用电源之间自动切换的设备。', example: 'The ATS transferred to generator supply.', scene: 'electrical' },
  { term: 'STP', lemma: 'STP', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '污水处理站', workMeaning: '污水处理相关系统或站点。', example: 'Check the STP alarm on BMS.', scene: 'water' },
  { term: 'BMS', lemma: 'BMS', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '楼宇管理系统', workMeaning: '监控机电设备状态和告警的平台。', example: 'There is an active BMS alarm.', scene: 'BMS' },
  { term: 'DCIM', lemma: 'DCIM', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '数据中心基础设施管理系统', workMeaning: '监控容量、能耗、机柜、环境和基础设施状态的平台。', example: 'Check the DCIM alarm list.', scene: 'DCIM' },
  { term: 'active alarm', lemma: 'active alarm', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '当前告警', workMeaning: '系统中仍然处于未恢复状态的告警。', example: 'How many active alarms are on BMS?', scene: 'BMS/DCIM' },
  { term: 'alarm cleared', lemma: 'alarm cleared', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '告警恢复', workMeaning: '告警条件消失，系统显示恢复。', example: 'The alarm cleared after the reset.', scene: 'BMS/DCIM' },
  { term: 'recurring alarm', lemma: 'recurring alarm', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '反复告警', workMeaning: '同一告警反复出现和恢复。', example: 'This is a recurring alarm and needs RCA.', scene: 'BMS/DCIM' },
  { term: 'false alarm', lemma: 'false alarm', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '误报警', workMeaning: '现场无真实故障但系统出现告警。', example: 'Confirm whether it is a false alarm.', scene: 'BMS/DCIM' },
  { term: 'threshold', lemma: 'threshold', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '阈值', workMeaning: '触发告警或动作的设定值。', example: 'The humidity threshold is too low.', scene: 'BMS' },
  { term: 'CRAC', lemma: 'CRAC', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '精密空调', workMeaning: 'Computer Room Air Conditioner，用于机房温湿度控制的空调设备。', example: 'CRAC 1 has a high pressure alarm.', scene: 'HVAC' },
  { term: 'CRAH', lemma: 'CRAH', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '冷冻水精密空调', workMeaning: 'Computer Room Air Handler，通常由冷冻水系统供冷。', example: 'Check the CRAH chilled water valve.', scene: 'HVAC' },
  { term: 'chiller', lemma: 'chiller', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '冷水机组', workMeaning: '生产冷冻水的制冷设备。', example: 'Chiller 2 is running at 60 percent load.', scene: 'HVAC' },
  { term: 'cooling tower', lemma: 'cooling tower', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '冷却塔', workMeaning: '通过蒸发散热冷却冷却水的设备。', example: 'Inspect the cooling tower fan and water level.', scene: 'HVAC' },
  { term: 'chilled water', lemma: 'chilled water', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '冷冻水', workMeaning: '用于空调系统供冷的低温水。', example: 'The chilled water supply temperature is high.', scene: 'HVAC' },
  { term: 'condenser water', lemma: 'condenser water', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '冷却水', workMeaning: '用于带走冷凝器热量的循环水。', example: 'The condenser water pump is running.', scene: 'HVAC' },
  { term: 'supply air', lemma: 'supply air', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '送风', workMeaning: '空调送入机房或房间的空气。', example: 'The supply air temperature is normal.', scene: 'HVAC' },
  { term: 'return air', lemma: 'return air', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '回风', workMeaning: '从房间返回空调设备的空气。', example: 'The return air humidity is high.', scene: 'HVAC' },
  { term: 'high pressure alarm', lemma: 'high pressure alarm', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '高压告警', workMeaning: '制冷系统冷凝压力过高触发的告警。', example: 'CRAC 3 has a high pressure alarm.', scene: 'HVAC' },
  { term: 'low pressure alarm', lemma: 'low pressure alarm', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '低压告警', workMeaning: '制冷系统压力过低触发的告警。', example: 'Check the refrigerant circuit for low pressure alarm.', scene: 'HVAC' },
  { term: 'compressor', lemma: 'compressor', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '压缩机', workMeaning: '制冷系统中压缩制冷剂的核心部件。', example: 'The compressor failed to start.', scene: 'HVAC' },
  { term: 'refrigerant', lemma: 'refrigerant', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '制冷剂', workMeaning: '制冷系统中循环吸热放热的工质。', example: 'Check the refrigerant pressure.', scene: 'HVAC' },
  { term: 'dehumidifier', lemma: 'dehumidifier', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '除湿机', workMeaning: '用于降低空气湿度的设备。', example: 'The dehumidifier is running continuously.', scene: 'HVAC' },
  { term: 'humidifier', lemma: 'humidifier', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '加湿器', workMeaning: '用于提高空气湿度的设备。', example: 'The humidifier needs maintenance.', scene: 'HVAC' },
  { term: 'humidity', lemma: 'humidity', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '湿度', workMeaning: '空气中水汽含量，数据中心常关注相对湿度。', example: 'The humidity is above the limit.', scene: 'HVAC' },
  { term: 'temperature', lemma: 'temperature', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '温度', workMeaning: '机房环境和设备运行的重要参数。', example: 'The temperature is stable.', scene: 'HVAC' },
  { term: 'setpoint', lemma: 'setpoint', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '设定值', workMeaning: '控制系统的目标值，如温度、湿度、压力。', example: 'Change the temperature setpoint to 24 degrees.', scene: 'HVAC/control' },
  { term: 'water leak', lemma: 'water leak', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '漏水', workMeaning: '水从管道、屋面或设备处异常泄漏。', example: 'A water leak was found near B7.', scene: 'facility' },
  { term: 'water leakage', lemma: 'water leakage', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '漏水', workMeaning: '漏水事件或隐患。', example: 'Check the ceiling for water leakage after rain.', scene: 'facility' },
  { term: 'sump pit', lemma: 'sump pit', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '集水井', workMeaning: '收集积水并通过泵排出的坑井。', example: 'Check whether there is water in the sump pit.', scene: 'facility' },
  { term: 'sump pump', lemma: 'sump pump', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '集水泵', workMeaning: '用于排出集水井积水的泵。', example: 'The sump pump failed to start.', scene: 'facility' },
  { term: 'drainage', lemma: 'drainage', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '排水', workMeaning: '排走雨水、冷凝水或废水的系统。', example: 'Check the drainage around the roof.', scene: 'facility' },
  { term: 'roof leak', lemma: 'roof leak', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '屋面漏水', workMeaning: '屋顶防水失效导致雨水进入建筑。', example: 'Report any roof leak during the rain inspection.', scene: 'facility' },
  { term: 'fire alarm', lemma: 'fire alarm', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '火警', workMeaning: '消防系统探测到烟雾、热量或手报动作。', example: 'A fire alarm was triggered in B5.', scene: 'fire' },
  { term: 'pre-action system', lemma: 'pre-action system', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '预作用系统', workMeaning: '需要探测和阀门动作后才充水的消防喷淋系统。', example: 'Check the pre-action system pressure.', scene: 'fire' },
  { term: 'sprinkler', lemma: 'sprinkler', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '喷淋头', workMeaning: '消防喷淋系统的出水部件。', example: 'Do not touch the sprinkler head.', scene: 'fire' },
  { term: 'FM200', lemma: 'FM200', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '七氟丙烷灭火系统', workMeaning: '常用于电气房或数据中心区域的气体灭火系统。', example: 'The FM200 panel shows a fault.', scene: 'fire' },
  { term: 'VESDA', lemma: 'VESDA', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '极早期烟雾探测系统', workMeaning: '通过吸气采样进行早期烟雾探测。', example: 'VESDA reported a pre-alarm.', scene: 'fire' },
  { term: 'pre-alarm', lemma: 'pre-alarm', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '预警', workMeaning: '尚未达到正式报警级别的早期告警。', example: 'VESDA pre-alarm requires immediate inspection.', scene: 'fire' },
  { term: 'incident ticket', lemma: 'incident ticket', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '事件单', workMeaning: '记录异常事件、告警和处理过程的工单。', example: 'Open an incident ticket for this alarm.', scene: 'operation' },
  { term: 'fault ticket', lemma: 'fault ticket', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '故障单', workMeaning: '用于记录需要维修或根因处理的故障。', example: 'Convert the incident ticket to a fault ticket.', scene: 'operation' },
  { term: 'SLA', lemma: 'SLA', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '服务等级协议', workMeaning: '规定响应、恢复和处理时限的服务要求。', example: 'The incident is close to exceeding the SLA.', scene: 'operation' },
  { term: 'exceed the SLA', lemma: 'exceed the SLA', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '超过 SLA 时限', workMeaning: '工单或事件处理超过规定时限。', example: 'The ticket has exceeded the SLA.', scene: 'operation' },
  { term: 'handover', lemma: 'handover', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '交接班', workMeaning: '把当班事件、告警、风险和未完成事项交给下一班。', example: 'Please prepare the shift handover.', scene: 'operation' },
  { term: 'handover report', lemma: 'handover report', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '交班报告', workMeaning: '记录当班情况、事件、告警和待办事项的报告。', example: 'Has the handover report been completed?', scene: 'operation' },
  { term: 'shift handover', lemma: 'shift handover', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '交接班', workMeaning: '不同班组之间的工作交接。', example: 'The shift handover starts at 8 a.m.', scene: 'operation' },
  { term: 'MOP', lemma: 'MOP', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '作业方法书', workMeaning: 'Method of Procedure，说明具体维护操作步骤和风险控制。', example: 'Review the MOP before execution.', scene: 'operation' },
  { term: 'SOP', lemma: 'SOP', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '标准操作程序', workMeaning: 'Standard Operating Procedure，规定常规操作方法。', example: 'Follow the SOP during routine operation.', scene: 'operation' },
  { term: 'EOP', lemma: 'EOP', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '应急操作程序', workMeaning: 'Emergency Operating Procedure，用于异常和紧急事件处理。', example: 'Use the EOP during power failure.', scene: 'operation' },
  { term: 'PTW', lemma: 'PTW', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '工作许可证', workMeaning: 'Permit to Work，供应商或工程师进场作业许可。', example: 'The PTW must be approved before work starts.', scene: 'operation/safety' },
  { term: 'RCA', lemma: 'RCA', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '根因分析', workMeaning: 'Root Cause Analysis，用于分析故障根本原因。', example: 'Prepare the RCA for the recurring alarm.', scene: 'operation' },
  { term: 'CAPA', lemma: 'CAPA', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '纠正和预防措施', workMeaning: 'Corrective and Preventive Action，用于避免问题再次发生。', example: 'Submit the CAPA after RCA.', scene: 'operation' },
  { term: 'escalate', lemma: 'escalate', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '升级', workMeaning: '把问题上报给更高层级或专业团队处理。', example: 'Escalate this issue to the duty manager.', scene: 'operation' },
  { term: 'notify', lemma: 'notify', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '通知', workMeaning: '把信息告知相关人员或团队。', example: 'Notify the customer if the SLA is at risk.', scene: 'operation' },
  { term: 'follow up', lemma: 'follow up', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '跟进', workMeaning: '继续追踪处理状态直到关闭。', example: 'Please follow up with the vendor.', scene: 'operation' },
  { term: 'pending item', lemma: 'pending item', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '待办事项', workMeaning: '尚未完成或需要下一班继续处理的事项。', example: 'List all pending items in the handover report.', scene: 'operation' },
  { term: 'vendor', lemma: 'vendor', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '供应商', workMeaning: '提供设备、服务或维修支持的外部单位。', example: 'The vendor will attend site at 10 a.m.', scene: 'operation' },
  { term: 'escort', lemma: 'escort', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '陪同', workMeaning: '在数据中心现场陪同供应商或访客。', example: 'Please escort the vendor to B7.', scene: 'security/operation' },
  { term: 'access card', lemma: 'access card', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '门禁卡', workMeaning: '进入受控区域使用的卡。', example: 'Return the access card after work.', scene: 'security' },
  { term: 'whitelist', lemma: 'whitelist', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '白名单', workMeaning: '允许访问或通行的授权名单。', example: 'Check whether the vendor is on the whitelist.', scene: 'security' },
  { term: 'super password', lemma: 'super password', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '超级密码', workMeaning: '特定系统或门禁使用的高权限密码。', example: 'Do not share the super password in the group chat.', scene: 'security' },
  { term: 'walkthrough', lemma: 'walkthrough', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '现场走查', workMeaning: '对现场进行逐项检查或讲解。', example: 'Conduct a walkthrough before the maintenance.', scene: 'operation' },
  { term: 'inspection', lemma: 'inspection', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '检查', workMeaning: '对设备、环境或作业状态进行查看确认。', example: 'Complete the daily inspection before handover.', scene: 'operation' },
  { term: 'patrol', lemma: 'patrol', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '巡检', workMeaning: '按路线定期检查设备和环境。', example: 'Patrol B5 and B7 after heavy rain.', scene: 'operation' },
  { term: 'rectify', lemma: 'rectify', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '整改', workMeaning: '修正不符合项或缺陷。', example: 'The vendor must rectify the issue today.', scene: 'operation' },
  { term: 'defect', lemma: 'defect', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '缺陷', workMeaning: '设备、施工或流程中的问题。', example: 'Record this defect in the punch list.', scene: 'construction/operation' },
  { term: 'punch list', lemma: 'punch list', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '缺陷清单', workMeaning: '施工或验收阶段需要整改的问题清单。', example: 'Update the punch list after the inspection.', scene: 'construction' },
  { term: 'commissioning', lemma: 'commissioning', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '调试', workMeaning: '系统正式投入运行前的测试和验证。', example: 'Commissioning will start next Monday.', scene: 'construction/testing' },
  { term: 'testing and commissioning', lemma: 'testing and commissioning', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '测试与调试', workMeaning: '对系统进行功能和性能验证的过程。', example: 'T&C must be completed before handover.', scene: 'construction/testing' },
  { term: 'as-built drawing', lemma: 'as-built drawing', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '竣工图', workMeaning: '反映最终施工完成状态的图纸。', example: 'Submit the as-built drawing after completion.', scene: 'construction' },
  { term: 'single line diagram', lemma: 'single line diagram', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '一次系统图', workMeaning: '用单线表示电气系统连接关系的图纸。', example: 'Check the single line diagram before switching.', scene: 'electrical/drawing' },
  { term: 'method statement', lemma: 'method statement', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '施工方案', workMeaning: '说明施工步骤、资源、安全和质量控制的方法文件。', example: 'Review the method statement before approval.', scene: 'construction' },
  { term: 'risk assessment', lemma: 'risk assessment', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '风险评估', workMeaning: '识别作业风险并制定控制措施。', example: 'The risk assessment is attached to the PTW.', scene: 'safety' },
  { term: 'hot work', lemma: 'hot work', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '动火作业', workMeaning: '产生火花、明火或高温的作业。', example: 'Hot work requires special approval.', scene: 'safety' },
  { term: 'confined space', lemma: 'confined space', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '受限空间', workMeaning: '出入口有限、通风不良或存在风险的空间。', example: 'Confined space work requires a permit.', scene: 'safety' },

  // ─── Power Distribution ───
  { term: 'PDU', lemma: 'PDU', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '配电单元', workMeaning: 'Power Distribution Unit，向机柜内 IT 设备分配电力的设备。', example: 'Check the PDU load on rack A12.', scene: 'electrical' },
  { term: 'STS', lemma: 'STS', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '静态转换开关', workMeaning: 'Static Transfer Switch，在两路电源之间无间断切换的设备。', example: 'The STS transferred to the alternate source.', scene: 'electrical' },
  { term: 'RPP', lemma: 'RPP', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '远端配电盘', workMeaning: 'Remote Power Panel，位于机房区域靠近负载的配电设备。', example: 'RPP-3 feeder breaker tripped.', scene: 'electrical' },
  { term: 'power quality', lemma: 'power quality', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '电能质量', workMeaning: '供电电压、频率、谐波等电气参数是否满足设备要求。', example: 'Perform a power quality survey after the generator test.', scene: 'electrical' },
  { term: 'voltage sag', lemma: 'voltage sag', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '电压暂降', workMeaning: '供电电压短时降低，可能导致敏感设备重启。', example: 'The voltage sag caused the server to reboot.', scene: 'electrical' },
  { term: 'harmonic distortion', lemma: 'harmonic distortion', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '谐波失真', workMeaning: '非线性负载产生的高次谐波导致电压或电流波形畸变。', example: 'Check the THD on the UPS output.', scene: 'electrical' },
  { term: 'THD', lemma: 'THD', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '总谐波失真', workMeaning: 'Total Harmonic Distortion，衡量电能质量的指标。', example: 'The THD reading is within the acceptable range.', scene: 'electrical' },
  { term: 'power factor', lemma: 'power factor', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '功率因数', workMeaning: '实际功率与视在功率之比，反映电能利用效率。', example: 'The power factor of the UPS load is 0.95.', scene: 'electrical' },
  { term: 'kVA', lemma: 'kVA', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '千伏安', workMeaning: '视在功率单位，常用于标注 UPS 和变压器容量。', example: 'The UPS is rated at 500 kVA.', scene: 'electrical' },
  { term: 'kW', lemma: 'kW', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '千瓦', workMeaning: '有功功率单位，反映实际用电量。', example: 'The IT load is drawing 200 kW.', scene: 'electrical' },
  { term: 'single phase', lemma: 'single phase', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '单相', workMeaning: '单相交流电供电，常见于小功率设备。', example: 'The PDU is fed from a single phase supply.', scene: 'electrical' },
  { term: 'three phase', lemma: 'three phase', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '三相', workMeaning: '三相交流电供电，用于大功率设备。', example: 'The chiller runs on a three phase supply.', scene: 'electrical' },
  { term: 'earthing', lemma: 'earthing', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '接地', workMeaning: '将设备金属外壳与大地连接以确保安全。', example: 'Check the earthing resistance before energizing.', scene: 'electrical/safety' },
  { term: 'grounding', lemma: 'grounding', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '接地', workMeaning: '同 earthing，美式用语。', example: 'Verify proper grounding of the server rack.', scene: 'electrical/safety' },

  // ─── Cooling & Environmental ───
  { term: 'PUE', lemma: 'PUE', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '电源使用效率', workMeaning: 'Power Usage Effectiveness，总能耗与 IT 能耗之比，越接近 1 越高效。', example: 'The current PUE is 1.45.', scene: 'HVAC/efficiency' },
  { term: 'free cooling', lemma: 'free cooling', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '自然冷却', workMeaning: '利用室外低温空气或水直接散热，无需开启压缩机。', example: 'Switch to free cooling mode during winter.', scene: 'HVAC' },
  { term: 'economizer', lemma: 'economizer', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '节能器', workMeaning: '利用室外空气进行自然冷却的装置。', example: 'The economizer damper is fully open.', scene: 'HVAC' },
  { term: 'CFM', lemma: 'CFM', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '立方英尺/分钟', workMeaning: 'Cubic Feet per Minute，衡量送风量的单位。', example: 'The CRAH is delivering 12000 CFM.', scene: 'HVAC' },
  { term: 'delta T', lemma: 'delta T', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '温差', workMeaning: '供回水或送回风之间的温度差。', example: 'The chilled water delta T is 5 degrees.', scene: 'HVAC' },
  { term: 'dew point', lemma: 'dew point', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '露点温度', workMeaning: '空气中水汽开始凝结的温度，湿度控制关键参数。', example: 'The dew point is too close to the supply air temperature.', scene: 'HVAC' },
  { term: 'ASHRAE', lemma: 'ASHRAE', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '美国暖通制冷空调工程师学会', workMeaning: '制定数据中心温湿度推荐标准的行业组织。', example: 'Follow the ASHRAE TC 9.9 recommended envelope.', scene: 'HVAC/standards' },
  { term: 'cooling capacity', lemma: 'cooling capacity', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '制冷量', workMeaning: '制冷设备能移除的热量，通常以 kW 或 BTU 表示。', example: 'The total cooling capacity is 800 kW.', scene: 'HVAC' },
  { term: 'thermal runaway', lemma: 'thermal runaway', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '热失控', workMeaning: '电池或设备温度持续升高无法控制的危险状态。', example: 'A lithium battery thermal runaway is an extreme risk.', scene: 'safety/battery' },
  { term: 'heat rejection', lemma: 'heat rejection', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '排热', workMeaning: '将设备产生的热量排放到环境中。', example: 'The condenser provides heat rejection to the atmosphere.', scene: 'HVAC' },
  { term: 'glycol', lemma: 'glycol', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '乙二醇', workMeaning: '添加到冷却水中防冻的化学物质。', example: 'Check the glycol concentration in the cooling loop.', scene: 'HVAC' },
  { term: 'water treatment', lemma: 'water treatment', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '水处理', workMeaning: '对冷却水或冷冻水进行化学处理防止腐蚀和结垢。', example: 'The water treatment system needs chemical refill.', scene: 'HVAC/water' },
  { term: 'AHU', lemma: 'AHU', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '空气处理机组', workMeaning: 'Air Handling Unit，集中处理空气温湿度和过滤的设备。', example: 'AHU-2 filter needs replacement.', scene: 'HVAC' },
  { term: 'FCU', lemma: 'FCU', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '风机盘管', workMeaning: 'Fan Coil Unit，末端小型空调设备。', example: 'The FCU in the control room is leaking.', scene: 'HVAC' },
  { term: 'VFD', lemma: 'VFD', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '变频器', workMeaning: 'Variable Frequency Drive，通过改变电机频率控制转速。', example: 'The chiller compressor VFD shows a fault.', scene: 'HVAC/electrical' },
  { term: 'in-row cooling', lemma: 'in-row cooling', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '列间空调', workMeaning: '安装在机柜列之间的制冷设备，靠近热源。', example: 'The in-row cooling unit fan speed is at 80 percent.', scene: 'HVAC' },

  // ─── Generator & Fuel ───
  { term: 'fuel day tank', lemma: 'fuel day tank', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '日用油箱', workMeaning: '为发电机提供当日运行所需燃油的小容量油箱。', example: 'Refill the fuel day tank before the load test.', scene: 'generator' },
  { term: 'bulk fuel tank', lemma: 'bulk fuel tank', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '储油罐', workMeaning: '大容量柴油储存设施。', example: 'The bulk fuel tank is at 85 percent capacity.', scene: 'generator' },
  { term: 'fuel polishing', lemma: 'fuel polishing', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '燃油净化', workMeaning: '过滤和清洁储存柴油以延长保质期。', example: 'Schedule fuel polishing for the bulk tank.', scene: 'generator/maintenance' },
  { term: 'load test', lemma: 'load test', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '带载测试', workMeaning: '在实际或模拟负载下验证设备性能。', example: 'The monthly generator load test is due tomorrow.', scene: 'testing' },
  { term: 'wet stacking', lemma: 'wet stacking', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '湿排气', workMeaning: '发电机长期低负载运行导致排气管积碳冒黑烟。', example: 'Avoid wet stacking by running the generator at minimum 30 percent load.', scene: 'generator' },
  { term: 'black start', lemma: 'black start', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '黑启动', workMeaning: '在完全失电情况下由发电机自主启动恢复供电。', example: 'The black start procedure requires two operators.', scene: 'generator/emergency' },

  // ─── Monitoring & SCADA ───
  { term: 'SCADA', lemma: 'SCADA', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '数据采集与监控系统', workMeaning: 'Supervisory Control and Data Acquisition，工业级远程监控平台。', example: 'Check the SCADA alarm summary.', scene: 'monitoring' },
  { term: 'NOC', lemma: 'NOC', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '网络运营中心', workMeaning: 'Network Operations Center，集中监控和调度的指挥中心。', example: 'Report the incident to the NOC immediately.', scene: 'monitoring' },
  { term: 'environmental sensor', lemma: 'environmental sensor', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '环境传感器', workMeaning: '监测温度、湿度、漏水等环境参数的传感器。', example: 'The environmental sensor near rack B4 shows high humidity.', scene: 'monitoring' },
  { term: 'CCTV', lemma: 'CCTV', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '闭路电视监控', workMeaning: 'Closed Circuit Television，用于安防监控的摄像系统。', example: 'Review the CCTV footage for the unauthorized access.', scene: 'security' },
  { term: 'power meter', lemma: 'power meter', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '电力仪表', workMeaning: '测量电压、电流、功率等电气参数的设备。', example: 'Read the power meter on the main switchboard.', scene: 'electrical/monitoring' },
  { term: 'trend log', lemma: 'trend log', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '趋势记录', workMeaning: 'BMS 系统中对参数随时间变化的记录。', example: 'Pull the temperature trend log for the past 24 hours.', scene: 'monitoring/BMS' },

  // ─── Networking & Connectivity ───
  { term: 'fiber patch', lemma: 'fiber patch', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '光纤跳线', workMeaning: '用于连接光纤设备之间的短距离光缆。', example: 'Replace the damaged fiber patch cord.', scene: 'network' },
  { term: 'meet-me room', lemma: 'meet-me room', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '接入间', workMeaning: '不同网络运营商互连的专用房间。', example: 'Escort the carrier to the meet-me room.', scene: 'network' },
  { term: 'cross-connect', lemma: 'cross-connect', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '交叉连接', workMeaning: '在配线架上建立不同线路之间的物理连接。', example: 'Install the cross-connect for the new tenant.', scene: 'network' },
  { term: 'structured cabling', lemma: 'structured cabling', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '结构化布线', workMeaning: '按照标准组织的建筑内通信线缆系统。', example: 'The structured cabling follows the TIA-942 standard.', scene: 'network' },
  { term: 'cable tray', lemma: 'cable tray', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '电缆桥架', workMeaning: '用于支撑和整理电缆的金属托盘或梯架。', example: 'Do not exceed the cable tray fill ratio.', scene: 'facility/network' },
  { term: 'redundancy', lemma: 'redundancy', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '冗余', workMeaning: '通过备份设备或路径确保系统可靠性的设计。', example: 'The power system has N+1 redundancy.', scene: 'design' },
  { term: 'N+1', lemma: 'N+1', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: 'N+1 冗余', workMeaning: '比实际需求多一台备用设备的冗余配置。', example: 'The UPS is configured as N+1.', scene: 'design' },
  { term: '2N', lemma: '2N', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '2N 冗余', workMeaning: '完全双路独立的冗余配置，最高可靠性。', example: 'The electrical system is designed for 2N redundancy.', scene: 'design' },
  { term: 'Tier', lemma: 'Tier', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '等级', workMeaning: 'Uptime Institute 数据中心分级标准，Tier I 最低 Tier IV 最高。', example: 'This facility is certified as Tier III.', scene: 'standards' },

  // ─── Building & Facility ───
  { term: 'loading bay', lemma: 'loading bay', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '卸货区', workMeaning: '设备和材料装卸的区域。', example: 'The vendor equipment is at the loading bay.', scene: 'facility' },
  { term: 'staging area', lemma: 'staging area', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '暂存区', workMeaning: '设备安装前的临时存放和检验区域。', example: 'Unpack and inspect the servers in the staging area.', scene: 'facility' },
  { term: 'mantrap', lemma: 'mantrap', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '安全气闸', workMeaning: '两道门互锁的通道，防止尾随进入。', example: 'Use your access card at the mantrap entrance.', scene: 'security' },
  { term: 'biometric', lemma: 'biometric', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '生物识别', workMeaning: '通过指纹、虹膜等生物特征进行身份验证。', example: 'Biometric access is required for the server hall.', scene: 'security' },
  { term: 'tailgating', lemma: 'tailgating', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '尾随进入', workMeaning: '未经授权人员跟随授权人员进入受控区域。', example: 'Report any tailgating incident to security.', scene: 'security' },
  { term: 'fire rated', lemma: 'fire rated', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '防火等级', workMeaning: '建筑材料或结构能耐火的时间等级。', example: 'The server room walls are fire rated for 2 hours.', scene: 'fire/construction' },
  { term: 'EPO', lemma: 'EPO', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '紧急断电按钮', workMeaning: 'Emergency Power Off，紧急情况下切断整个区域电源。', example: 'Do not press the EPO unless absolutely necessary.', scene: 'electrical/safety' },
  { term: 'knockout panel', lemma: 'knockout panel', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '预留开孔板', workMeaning: '配电柜或管道上可拆除以穿线的板。', example: 'Use the knockout panel for the new cable entry.', scene: 'electrical/construction' },

  // ─── Operations & Process ───
  { term: 'change advisory board', lemma: 'change advisory board', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '变更顾问委员会', workMeaning: 'CAB，审批变更请求的跨职能团队。', example: 'Submit the change request to CAB for approval.', scene: 'operation/change' },
  { term: 'CAB', lemma: 'CAB', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '变更顾问委员会', workMeaning: 'Change Advisory Board 缩写。', example: 'The CAB meeting is every Thursday.', scene: 'operation/change' },
  { term: 'maintenance window', lemma: 'maintenance window', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '维护窗口', workMeaning: '计划执行维护操作的指定时间段。', example: 'The maintenance window is Saturday 10 PM to Sunday 6 AM.', scene: 'operation' },
  { term: 'rollback plan', lemma: 'rollback plan', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '回退方案', workMeaning: '变更失败时恢复到原始状态的计划。', example: 'The MOP must include a rollback plan.', scene: 'operation/change' },
  { term: 'back-out plan', lemma: 'back-out plan', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '回退方案', workMeaning: '同 rollback plan，变更失败时的恢复措施。', example: 'Ensure the back-out plan is tested.', scene: 'operation/change' },
  { term: 'lesson learned', lemma: 'lesson learned', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '经验教训', workMeaning: '从事件或项目中总结的改进点。', example: 'Document the lesson learned from this incident.', scene: 'operation' },
  { term: 'drill', lemma: 'drill', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '演练', workMeaning: '模拟紧急情况的训练演习。', example: 'The fire drill is scheduled for next Friday.', scene: 'safety/training' },
  { term: 'tabletop exercise', lemma: 'tabletop exercise', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '桌面推演', workMeaning: '围绕假想场景进行讨论式应急演练。', example: 'Conduct a tabletop exercise for a total power loss scenario.', scene: 'safety/training' },
  { term: 'duty manager', lemma: 'duty manager', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '值班经理', workMeaning: '当班期间的最高决策人。', example: 'Escalate to the duty manager for approval.', scene: 'operation' },
  { term: 'shift log', lemma: 'shift log', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '值班日志', workMeaning: '记录当班期间所有事件和操作的日志。', example: 'Update the shift log before handover.', scene: 'operation' },
  { term: 'preventive maintenance', lemma: 'preventive maintenance', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '预防性维护', workMeaning: '按计划执行的设备保养以防止故障。', example: 'The UPS preventive maintenance is due next month.', scene: 'maintenance' },
  { term: 'corrective maintenance', lemma: 'corrective maintenance', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '纠正性维护', workMeaning: '故障发生后的修复作业。', example: 'The corrective maintenance was completed by the vendor.', scene: 'maintenance' },
  { term: 'spare part', lemma: 'spare part', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '备件', workMeaning: '为设备维修准备的备用零件。', example: 'Check the spare part inventory for the CRAC fan motor.', scene: 'maintenance' },
  { term: 'warranty', lemma: 'warranty', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '保修', workMeaning: '设备在保修期内的免费维修服务承诺。', example: 'The chiller is still under warranty.', scene: 'maintenance' },
  { term: 'asset tag', lemma: 'asset tag', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '资产标签', workMeaning: '贴在设备上的唯一标识标签用于资产管理。', example: 'Scan the asset tag to find the maintenance history.', scene: 'operation' },
  { term: 'as-built', lemma: 'as-built', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '竣工', workMeaning: '反映最终施工状态的图纸或文件。', example: 'Update the as-built drawing after the modification.', scene: 'construction' },
  { term: 'snag list', lemma: 'snag list', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '缺陷清单', workMeaning: '同 punch list，施工验收时需整改的问题列表。', example: 'Add the cable labelling issue to the snag list.', scene: 'construction' },
  // ─── PDU & Power Distribution ───
  { term: 'PDU', lemma: 'PDU', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '配电单元', workMeaning: 'Power Distribution Unit，向机柜内设备分配电力的单元。', example: 'Check the PDU load on rack A12.', scene: 'electrical/PDU' },
  { term: 'RPP', lemma: 'RPP', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '远程配电柜', workMeaning: 'Remote Power Panel，位于机房内为 PDU 或末端负载配电的柜体。', example: 'RPP 2 breaker tripped during the load test.', scene: 'electrical/PDU' },
  { term: 'dual feed', lemma: 'dual feed', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '双路供电', workMeaning: '设备同时由 A 路和 B 路两路独立电源供电。', example: 'This rack has dual feed from A and B bus.', scene: 'electrical/PDU' },
  { term: 'A feed', lemma: 'A feed', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: 'A 路供电', workMeaning: '双路供电系统中的第一路电源。', example: 'The A feed is normal; the B feed has an alarm.', scene: 'electrical/PDU' },
  { term: 'B feed', lemma: 'B feed', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: 'B 路供电', workMeaning: '双路供电系统中的第二路电源。', example: 'Verify the B feed voltage before energizing.', scene: 'electrical/PDU' },
  { term: 'STS', lemma: 'STS', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '静态转换开关', workMeaning: 'Static Transfer Switch，在两路电源之间毫秒级无间断切换。', example: 'The STS transferred to source B without interruption.', scene: 'electrical/STS' },
  { term: 'load shedding', lemma: 'load shedding', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '甩负荷', workMeaning: '在电源容量不足时按优先级切除非关键负载。', example: 'Load shedding is activated when generator capacity is exceeded.', scene: 'electrical/PDU' },
  { term: 'kW', lemma: 'kW', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '千瓦', workMeaning: '有功功率单位，数据中心常用衡量 IT 负载或制冷量。', example: 'The rack is drawing 8 kW.', scene: 'electrical/metering' },
  { term: 'kVA', lemma: 'kVA', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '千伏安', workMeaning: '视在功率单位，UPS 和变压器容量常用此单位。', example: 'The UPS is rated at 500 kVA.', scene: 'electrical/metering' },
  { term: 'power factor', lemma: 'power factor', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '功率因数', workMeaning: '有功功率与视在功率之比，反映电能利用效率。', example: 'The power factor of the UPS output is 0.95.', scene: 'electrical/metering' },
  { term: 'power meter', lemma: 'power meter', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '电力仪表', workMeaning: '测量电压、电流、功率等电气参数的仪表。', example: 'Read the power meter on the incoming feeder.', scene: 'electrical/metering' },
  { term: 'energy meter', lemma: 'energy meter', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '电能表', workMeaning: '计量累计用电量（kWh）的仪表。', example: 'Record the energy meter reading at shift start.', scene: 'electrical/metering' },
  // ─── Power Quality ───
  { term: 'voltage sag', lemma: 'voltage sag', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '电压暂降', workMeaning: '电压短暂下降到额定值的 90% 以下又恢复。', example: 'A voltage sag caused the UPS to transfer to battery.', scene: 'power_quality' },
  { term: 'voltage swell', lemma: 'voltage swell', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '电压暂升', workMeaning: '电压短暂上升到额定值的 110% 以上又恢复。', example: 'The voltage swell lasted for 200 milliseconds.', scene: 'power_quality' },
  { term: 'transient', lemma: 'transient', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '暂态/浪涌', workMeaning: '电压或电流的短暂尖峰或扰动。', example: 'The transient was captured by the power quality analyzer.', scene: 'power_quality' },
  { term: 'harmonic', lemma: 'harmonic', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '谐波', workMeaning: '基波频率整数倍的电流或电压分量，影响电能质量。', example: 'Check the THD level on the UPS output.', scene: 'power_quality' },
  { term: 'THD', lemma: 'THD', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '总谐波畸变率', workMeaning: 'Total Harmonic Distortion，衡量电能波形质量的指标。', example: 'The THD is within the 5 percent limit.', scene: 'power_quality' },
  { term: 'brownout', lemma: 'brownout', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '电压不足/降压', workMeaning: '电网电压持续低于正常值的供电异常状态。', example: 'The brownout lasted for several minutes.', scene: 'power_quality' },
  { term: 'blackout', lemma: 'blackout', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '停电', workMeaning: '电网完全失去供电。', example: 'The blackout triggered the generator start sequence.', scene: 'power_quality' },
  { term: 'power quality', lemma: 'power quality', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '电能质量', workMeaning: '供电电压、频率、波形等满足设备正常运行要求的程度。', example: 'Conduct a power quality survey after the incident.', scene: 'power_quality' },
  { term: 'surge', lemma: 'surge', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '浪涌', workMeaning: '电压或电流的瞬间大幅升高。', example: 'The lightning surge damaged the UPS input filter.', scene: 'power_quality' },
  { term: 'SPD', lemma: 'SPD', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '浪涌保护器', workMeaning: 'Surge Protective Device，限制暂态过电压并泄放浪涌电流。', example: 'Replace the SPD after a major lightning event.', scene: 'power_quality' },
  // ─── Cooling Operations ───
  { term: 'PUE', lemma: 'PUE', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '电源使用效率', workMeaning: 'Power Usage Effectiveness，总设施功率与 IT 功率之比。', example: 'Our PUE target is below 1.5.', scene: 'HVAC/efficiency' },
  { term: 'COP', lemma: 'COP', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '制冷系数', workMeaning: 'Coefficient of Performance，制冷量与输入功率之比。', example: 'The chiller COP is 5.2 at design conditions.', scene: 'HVAC/efficiency' },
  { term: 'free cooling', lemma: 'free cooling', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '自然冷却', workMeaning: '利用室外低温空气或冷水直接冷却，不启动压缩机。', example: 'Free cooling mode is active when outdoor temperature is below 15 degrees.', scene: 'HVAC/efficiency' },
  { term: 'economizer', lemma: 'economizer', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '节能器/经济器', workMeaning: '利用室外条件减少机械制冷的装置或模式。', example: 'The economizer is running during night hours.', scene: 'HVAC/efficiency' },
  { term: 'N+1 redundancy', lemma: 'N+1 redundancy', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: 'N+1 冗余', workMeaning: '系统容量在满足 N 台满载运行外多 1 台备用。', example: 'The chiller system is designed with N+1 redundancy.', scene: 'HVAC/design' },
  { term: '2N redundancy', lemma: '2N redundancy', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '2N 冗余', workMeaning: '系统有两套完全独立的冗余配置。', example: 'The UPS system has 2N redundancy for critical loads.', scene: 'electrical/design' },
  { term: 'concurrent maintainability', lemma: 'concurrent maintainability', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '可并行维护性', workMeaning: '任何一台设备停机维护时系统仍能正常运行。', example: 'The design must ensure concurrent maintainability.', scene: 'design/tier' },
  { term: 'blanking panel', lemma: 'blanking panel', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '盲板', workMeaning: '安装在机柜空 U 位上的挡板，防止冷热空气混合。', example: 'Install blanking panels on all unused rack spaces.', scene: 'HVAC/airflow' },
  { term: 'perforated tile', lemma: 'perforated tile', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '通风地板', workMeaning: '架空地板上的开孔砖，将冷通道下方冷空气送入机房。', example: 'Replace the perforated tile with a higher airflow model.', scene: 'HVAC/airflow' },
  { term: 'airflow management', lemma: 'airflow management', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '气流管理', workMeaning: '通过物理隔离和优化防止冷热空气混合的措施。', example: 'Improve airflow management to reduce hot spots.', scene: 'HVAC/airflow' },
  { term: 'hot spot', lemma: 'hot spot', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '热点', workMeaning: '机房中局部温度明显偏高的区域。', example: 'There is a hot spot near rack C5.', scene: 'HVAC/airflow' },
  { term: 'cooling capacity', lemma: 'cooling capacity', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '制冷量', workMeaning: '制冷设备在单位时间内能够带走的热量。', example: 'The total cooling capacity is 2 MW.', scene: 'HVAC/design' },
  { term: 'VFD', lemma: 'VFD', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '变频器', workMeaning: 'Variable Frequency Drive，通过改变电机频率调节转速和流量。', example: 'The pump VFD is running at 60 percent speed.', scene: 'HVAC/control' },
  { term: 'AHU', lemma: 'AHU', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '空气处理机组', workMeaning: 'Air Handling Unit，用于处理和分配空气的设备。', example: 'Check the AHU filter differential pressure.', scene: 'HVAC' },
  { term: 'damper', lemma: 'damper', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '风阀', workMeaning: '控制或调节风管中空气流量的阀门。', example: 'The outdoor air damper is fully open in economizer mode.', scene: 'HVAC/control' },
  // ─── Building Infrastructure ───
  { term: 'loading dock', lemma: 'loading dock', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '装卸平台', workMeaning: '供货车装卸设备和材料的区域。', example: 'The vendor delivery is at the loading dock.', scene: 'facility' },
  { term: 'mantrap', lemma: 'mantrap', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '安全闸机通道', workMeaning: '两道门互锁的通道，防止未授权尾随进入。', example: 'Use your access card at the mantrap.', scene: 'security' },
  { term: 'turnstile', lemma: 'turnstile', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '闸机', workMeaning: '出入口的旋转或翼闸式通行控制设备。', example: 'The turnstile at the main entrance is faulty.', scene: 'security' },
  { term: 'bollard', lemma: 'bollard', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '防撞柱', workMeaning: '防止车辆冲撞的固定或升降式立柱。', example: 'Check the retractable bollard at the gate.', scene: 'security' },
  { term: 'building envelope', lemma: 'building envelope', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '建筑围护结构', workMeaning: '建筑外墙、屋顶、地面等分隔室内外的构造。', example: 'Inspect the building envelope after the storm.', scene: 'facility' },
  { term: 'MEP', lemma: 'MEP', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '机电工程', workMeaning: 'Mechanical, Electrical and Plumbing，数据中心基础设施总称。', example: 'The MEP team will attend site tomorrow.', scene: 'facility' },
  { term: 'ELV', lemma: 'ELV', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '弱电系统', workMeaning: 'Extra Low Voltage，包括门禁、监控、网络等低电压系统。', example: 'The ELV contractor is installing new cameras.', scene: 'facility' },
  { term: 'genset', lemma: 'genset', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '发电机组', workMeaning: 'Generator set，柴油机与发电机的成套设备。', example: 'Genset 3 failed the monthly load test.', scene: 'generator' },
  { term: 'fuel day tank', lemma: 'fuel day tank', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '日用油箱', workMeaning: '为发电机提供当日运行燃油的中间储油罐。', example: 'Check the fuel day tank level every shift.', scene: 'generator' },
  { term: 'bulk fuel tank', lemma: 'bulk fuel tank', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '储油罐', workMeaning: '大量储存柴油的室外油罐。', example: 'The bulk fuel tank is 80 percent full.', scene: 'generator' },
  // ─── Networking & Cabling ───
  { term: 'structured cabling', lemma: 'structured cabling', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '综合布线', workMeaning: '标准化的建筑通信布线系统。', example: 'The structured cabling follows TIA-568 standards.', scene: 'networking' },
  { term: 'fiber patch', lemma: 'fiber patch', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '光纤跳线', workMeaning: '用于连接光纤设备或配线架的短光纤线缆。', example: 'Replace the damaged fiber patch cord.', scene: 'networking' },
  { term: 'cable tray', lemma: 'cable tray', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '电缆桥架', workMeaning: '用于支撑和布放电缆的金属或非金属托架。', example: 'Do not overload the cable tray above rack row D.', scene: 'networking' },
  { term: 'patch panel', lemma: 'patch panel', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '配线架', workMeaning: '用于集中管理和跳接网络或通信线缆的面板。', example: 'Label all ports on the patch panel.', scene: 'networking' },
  { term: 'MDF', lemma: 'MDF', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '主配线间', workMeaning: 'Main Distribution Frame，建筑内核心网络汇聚点。', example: 'The core switch is located in the MDF.', scene: 'networking' },
  { term: 'IDF', lemma: 'IDF', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '分配线间', workMeaning: 'Intermediate Distribution Frame，各楼层或区域的网络汇聚点。', example: 'Check the IDF on the third floor.', scene: 'networking' },
  { term: 'cross-connect', lemma: 'cross-connect', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '交叉连接', workMeaning: '在配线架上通过跳线实现线路之间的连接。', example: 'Install the cross-connect between panel A and panel B.', scene: 'networking' },
  // ─── Monitoring & Sensors ───
  { term: 'CCTV', lemma: 'CCTV', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '闭路电视监控', workMeaning: 'Closed Circuit Television，用于安全监控的视频系统。', example: 'Check the CCTV footage for the incident time.', scene: 'security/monitoring' },
  { term: 'door contact', lemma: 'door contact', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '门磁', workMeaning: '检测门开/关状态的传感器。', example: 'The door contact alarm shows the server room door is open.', scene: 'security/monitoring' },
  { term: 'leak detection', lemma: 'leak detection', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '漏水检测', workMeaning: '通过传感器或检测线缆监测水泄漏的系统。', example: 'The leak detection cable under the raised floor triggered an alarm.', scene: 'monitoring' },
  { term: 'thermal imaging', lemma: 'thermal imaging', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '热成像', workMeaning: '使用红外热像仪检测设备温度异常。', example: 'Conduct thermal imaging on all switchgear during patrol.', scene: 'monitoring' },
  { term: 'environmental sensor', lemma: 'environmental sensor', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '环境传感器', workMeaning: '监测温度、湿度、烟雾等环境参数的传感器。', example: 'The environmental sensor in B5 shows high humidity.', scene: 'monitoring' },
  { term: 'power quality analyzer', lemma: 'power quality analyzer', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '电能质量分析仪', workMeaning: '用于记录和分析电压、电流、谐波等电能质量参数的仪器。', example: 'Connect the power quality analyzer to the UPS input.', scene: 'monitoring' },
  // ─── Compliance & Standards ───
  { term: 'Tier III', lemma: 'Tier III', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: 'Tier III 级', workMeaning: 'Uptime Institute 定义的三级数据中心，支持可并行维护。', example: 'Our facility is certified as Tier III.', scene: 'compliance' },
  { term: 'Tier IV', lemma: 'Tier IV', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: 'Tier IV 级', workMeaning: 'Uptime Institute 定义的最高等级数据中心，具备容错能力。', example: 'The design meets Tier IV fault tolerance requirements.', scene: 'compliance' },
  { term: 'Uptime Institute', lemma: 'Uptime Institute', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: 'Uptime Institute', workMeaning: '全球数据中心分级认证和运维评估机构。', example: 'The Uptime Institute audit is scheduled for next quarter.', scene: 'compliance' },
  { term: 'TIA-942', lemma: 'TIA-942', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: 'TIA-942 标准', workMeaning: '数据中心通信基础设施标准。', example: 'The cabling design follows TIA-942.', scene: 'compliance' },
  { term: 'ASHRAE', lemma: 'ASHRAE', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '美国暖通制冷空调工程师学会', workMeaning: '制定数据中心温湿度推荐范围的行业标准组织。', example: 'Follow the ASHRAE TC9.9 recommended envelope.', scene: 'compliance' },
  { term: 'ISO 27001', lemma: 'ISO 27001', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '信息安全管理体系', workMeaning: '国际信息安全管理标准认证。', example: 'The site is ISO 27001 certified.', scene: 'compliance' },
  { term: 'PCI DSS', lemma: 'PCI DSS', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '支付卡行业数据安全标准', workMeaning: '处理信用卡数据的设施需要满足的安全标准。', example: 'The data hall must meet PCI DSS physical security requirements.', scene: 'compliance' },
  // ─── Site Operations & Maintenance ───
  { term: 'capacity planning', lemma: 'capacity planning', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '容量规划', workMeaning: '评估和预测电力、制冷、空间等资源的使用和增长需求。', example: 'Update the capacity planning report monthly.', scene: 'operation/capacity' },
  { term: 'rack density', lemma: 'rack density', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '机柜功率密度', workMeaning: '单个机柜消耗的电力（kW/机柜），影响制冷需求。', example: 'The average rack density is 6 kW.', scene: 'operation/capacity' },
  { term: 'kW per rack', lemma: 'kW per rack', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '每柜千瓦数', workMeaning: '每个机柜的平均用电功率。', example: 'The new deployment increases kW per rack to 10.', scene: 'operation/capacity' },
  { term: 'hot swap', lemma: 'hot swap', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '热插拔', workMeaning: '不中断系统运行即可更换组件。', example: 'The UPS module supports hot swap replacement.', scene: 'operation/maintenance' },
  { term: 'preventive maintenance', lemma: 'preventive maintenance', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '预防性维护', workMeaning: '按计划进行的维护，目的是防止设备故障。', example: 'The preventive maintenance schedule is posted in the control room.', scene: 'operation/maintenance' },
  { term: 'reactive maintenance', lemma: 'reactive maintenance', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '事后维修', workMeaning: '设备故障后才进行的维修。', example: 'We want to minimize reactive maintenance through better PM.', scene: 'operation/maintenance' },
  { term: 'spare parts', lemma: 'spare parts', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '备件', workMeaning: '为快速更换而储备的设备零部件。', example: 'Check whether we have spare parts for the CRAC compressor.', scene: 'operation/maintenance' },
  { term: 'critical spare', lemma: 'critical spare', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '关键备件', workMeaning: '必须现场储备的关键设备备件，缺失可能导致停机。', example: 'Keep a critical spare for each UPS module type.', scene: 'operation/maintenance' },
  { term: 'consumable', lemma: 'consumable', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '耗材', workMeaning: '定期更换或消耗的物资，如滤芯、电池等。', example: 'Order consumables for the next quarter.', scene: 'operation/maintenance' },
  { term: 'PPE', lemma: 'PPE', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '个人防护装备', workMeaning: 'Personal Protective Equipment，保护作业人员安全的装备。', example: 'Wear the required PPE before entering the switchgear room.', scene: 'safety' },
  { term: 'ear protection', lemma: 'ear protection', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '听力防护', workMeaning: '在高噪声区域（如发电机房）使用的耳塞或耳罩。', example: 'Ear protection is mandatory in the generator room.', scene: 'safety' },
  { term: 'working at height', lemma: 'working at height', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '高处作业', workMeaning: '在离地 2 米以上进行的作业，需要安全许可和防坠措施。', example: 'Working at height requires a harness and PTW.', scene: 'safety' },
  { term: 'safety harness', lemma: 'safety harness', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '安全带', workMeaning: '高处作业时防止人员坠落的全身式安全装备。', example: 'Inspect the safety harness before each use.', scene: 'safety' },
  { term: 'warranty', lemma: 'warranty', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '质保', workMeaning: '设备供应商承诺在一定期限内免费维修或更换的保障。', example: 'The chiller is still under warranty.', scene: 'operation/procurement' },
  { term: 'duty manager', lemma: 'duty manager', type: 'phrase', source: 'dc_terms_manual_seed', priority: 100, definition: '值班经理', workMeaning: '当班期间负责整体运营和决策的管理者。', example: 'Inform the duty manager immediately for any critical alarm.', scene: 'operation' },
  { term: 'logbook', lemma: 'logbook', type: 'word', source: 'dc_terms_manual_seed', priority: 100, definition: '值班日志', workMeaning: '记录当班期间所有事件、操作和告警的书面或电子日志。', example: 'Record all events in the logbook before shift end.', scene: 'operation' },
];

// ─── Backward-Compatible API ───

/** Dictionary source metadata (backward-compatible) */
export const DICTIONARY_SOURCES = [
  { key: 'dc_terms_manual_seed', name: '数据中心专业术语库', desc: 'Data Center Professional Terms Dictionary' },
] as const;

/** Build lookup index (lazy) */
let termIndex: Map<string, IDC_DICTEntry> | null = null;
function getTermIndex(): Map<string, IDC_DICTEntry> {
  if (termIndex) return termIndex;
  termIndex = new Map();
  for (const e of DC_TERMS_DICTIONARY) {
    termIndex.set(e.term.toLowerCase(), e);
    if (e.lemma.toLowerCase() !== e.term.toLowerCase()) {
      if (!termIndex.has(e.lemma.toLowerCase())) {
        termIndex.set(e.lemma.toLowerCase(), e);
      }
    }
  }
  return termIndex;
}

/** Lookup result shape compatible with old ITermEntry */
export interface ITermEntry {
  en: string;
  cn: string;
  ipa?: string;
  pos?: string;
  domain: string;
  example?: string;
  source: string;
}

/**
 * Exact lookup by English word/phrase.
 * Returns ITermEntry-compatible object or null.
 */
export function lookupTerm(word: string): ITermEntry | null {
  const normalized = word.trim().toLowerCase();
  const entry = getTermIndex().get(normalized);
  if (!entry) return null;
  return {
    en: entry.term,
    cn: entry.definition,
    pos: entry.type === 'phrase' ? 'phrase' : 'n',
    domain: entry.scene || 'data_center',
    example: entry.example || undefined,
    source: entry.source,
  };
}

/**
 * Find all DC terms that appear in a sentence.
 * Returns matched entries sorted by term length descending (phrases first).
 */
export function lookupTermsInSentence(sentence: string): ITermEntry[] {
  const lower = sentence.toLowerCase();
  const matched: ITermEntry[] = [];
  const seen = new Set<string>();

  // Sort by term length descending to match longer phrases first
  const sorted = [...DC_TERMS_DICTIONARY].sort((a, b) => b.term.length - a.term.length);

  for (const entry of sorted) {
    const termLower = entry.term.toLowerCase();
    if (lower.includes(termLower) && !seen.has(termLower)) {
      matched.push({
        en: entry.term,
        cn: entry.definition,
        pos: entry.type === 'phrase' ? 'phrase' : 'n',
        domain: entry.scene || 'data_center',
        example: entry.example || undefined,
        source: entry.source,
      });
      seen.add(termLower);
    }
  }

  return matched.slice(0, 15);
}

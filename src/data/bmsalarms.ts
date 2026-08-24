// EXPORTS: IBmsAlarm, MOCK_BMS_ALARMS
export interface IBmsAlarm {
  id: string
  severity: 'critical' | 'warning' | 'info'
  status: 'active' | 'cleared'
  source: string
  affectedEquipment: string
  occurredAt: string
  recoveredAt?: string
  vendorNotified: boolean
  vendorStatus: 'none' | 'notified' | 'working' | 'waiting_update'
  escalationLevel: 'L1' | 'L2' | 'L3' | 'Vendor'
  escalatedAt?: string
  escalateReason?: string
  linkedTicketId?: string
  isMonitored: boolean
  monitoredSince?: string
}

export const MOCK_BMS_ALARMS: IBmsAlarm[] = [
  {
    id: '1',
    severity: 'critical',
    status: 'active',
    source: 'UPS-01',
    affectedEquipment: 'A区主UPS',
    occurredAt: '2024-01-15 08:30:00',
    vendorNotified: true,
    vendorStatus: 'working',
    escalationLevel: 'L2',
    escalatedAt: '2024-01-15 09:00:00',
    escalateReason: '电池组电压异常下降',
    isMonitored: true,
    monitoredSince: '2024-01-15 09:05:00',
  },
  {
    id: '2',
    severity: 'critical',
    status: 'cleared',
    source: 'CRAC-03',
    affectedEquipment: 'B区精密空调',
    occurredAt: '2024-01-15 06:15:00',
    recoveredAt: '2024-01-15 07:45:00',
    vendorNotified: true,
    vendorStatus: 'waiting_update',
    escalationLevel: 'Vendor',
    escalatedAt: '2024-01-15 06:30:00',
    escalateReason: '压缩机高压保护触发',
    linkedTicketId: 'TK-2024011501',
    isMonitored: false,
  },
  {
    id: '3',
    severity: 'warning',
    status: 'active',
    source: 'PDU-A2',
    affectedEquipment: 'A2列机柜PDU',
    occurredAt: '2024-01-15 10:20:00',
    vendorNotified: false,
    vendorStatus: 'none',
    escalationLevel: 'L1',
    isMonitored: false,
  },
  {
    id: '4',
    severity: 'warning',
    status: 'active',
    source: 'CRAC-07',
    affectedEquipment: 'C区精密空调回风温度',
    occurredAt: '2024-01-15 09:45:00',
    vendorNotified: false,
    vendorStatus: 'none',
    escalationLevel: 'L1',
    isMonitored: false,
  },
  {
    id: '5',
    severity: 'warning',
    status: 'active',
    source: 'BMS-HUM-02',
    affectedEquipment: 'B区湿度传感器偏高',
    occurredAt: '2024-01-15 11:10:00',
    vendorNotified: false,
    vendorStatus: 'none',
    escalationLevel: 'L1',
    isMonitored: true,
    monitoredSince: '2024-01-15 11:30:00',
  },
  {
    id: '6',
    severity: 'warning',
    status: 'cleared',
    source: 'GEN-02',
    affectedEquipment: '2号柴油发电机',
    occurredAt: '2024-01-15 05:30:00',
    recoveredAt: '2024-01-15 06:00:00',
    vendorNotified: true,
    vendorStatus: 'notified',
    escalationLevel: 'L1',
    isMonitored: false,
  },
  {
    id: '7',
    severity: 'warning',
    status: 'active',
    source: 'FIRE-Z3',
    affectedEquipment: '3号防火分区烟感',
    occurredAt: '2024-01-15 13:20:00',
    vendorNotified: false,
    vendorStatus: 'none',
    escalationLevel: 'L1',
    isMonitored: false,
  },
  {
    id: '8',
    severity: 'info',
    status: 'active',
    source: 'DCIM-DOOR',
    affectedEquipment: 'A区机房门禁记录',
    occurredAt: '2024-01-15 12:00:00',
    vendorNotified: false,
    vendorStatus: 'none',
    escalationLevel: 'L1',
    isMonitored: false,
  },
  {
    id: '9',
    severity: 'info',
    status: 'cleared',
    source: 'BMS-TEMP',
    affectedEquipment: 'D区环境温度记录',
    occurredAt: '2024-01-15 07:00:00',
    recoveredAt: '2024-01-15 07:30:00',
    vendorNotified: false,
    vendorStatus: 'none',
    escalationLevel: 'L1',
    isMonitored: false,
  },
  {
    id: '10',
    severity: 'info',
    status: 'active',
    source: 'UPS-02',
    affectedEquipment: 'B区备用UPS自检',
    occurredAt: '2024-01-15 14:15:00',
    vendorNotified: false,
    vendorStatus: 'none',
    escalationLevel: 'L1',
    isMonitored: false,
  },
]

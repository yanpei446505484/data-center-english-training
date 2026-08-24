// EXPORTS: IAlarmHistory, MOCK_ALARM_HISTORIES
export interface IAlarmHistory {
  id: string
  alarmId: string
  occurredAt: string
  recoveredAt?: string
  duration: string
  triggerType: 'auto' | 'manual' | 'recurring'
}

export const MOCK_ALARM_HISTORIES: IAlarmHistory[] = [
  {
    id: '1',
    alarmId: '1',
    occurredAt: '2024-01-15 06:32',
    recoveredAt: '2024-01-15 07:15',
    duration: '43分钟',
    triggerType: 'recurring',
  },
  {
    id: '2',
    alarmId: '1',
    occurredAt: '2024-01-15 07:50',
    recoveredAt: '2024-01-15 08:10',
    duration: '20分钟',
    triggerType: 'auto',
  },
  {
    id: '3',
    alarmId: '1',
    occurredAt: '2024-01-15 08:30',
    duration: '持续中',
    triggerType: 'recurring',
  },
  {
    id: '4',
    alarmId: '2',
    occurredAt: '2024-01-15 05:10',
    recoveredAt: '2024-01-15 05:45',
    duration: '35分钟',
    triggerType: 'auto',
  },
  {
    id: '5',
    alarmId: '2',
    occurredAt: '2024-01-15 06:15',
    recoveredAt: '2024-01-15 07:45',
    duration: '1小时30分钟',
    triggerType: 'recurring',
  },
  {
    id: '6',
    alarmId: '4',
    occurredAt: '2024-01-15 08:20',
    recoveredAt: '2024-01-15 08:55',
    duration: '35分钟',
    triggerType: 'auto',
  },
  {
    id: '7',
    alarmId: '4',
    occurredAt: '2024-01-15 09:45',
    duration: '持续中',
    triggerType: 'recurring',
  },
  {
    id: '8',
    alarmId: '7',
    occurredAt: '2024-01-15 12:05',
    recoveredAt: '2024-01-15 12:30',
    duration: '25分钟',
    triggerType: 'manual',
  },
  {
    id: '9',
    alarmId: '7',
    occurredAt: '2024-01-15 13:20',
    duration: '持续中',
    triggerType: 'recurring',
  },
]

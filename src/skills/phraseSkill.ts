/**
 * Phrase Detection Skill
 * Identifies DC-specific multi-word phrases and fixed collocations
 */

// ─── Types ───

export interface IPhraseEntry {
  phrase: string;
  chinese: string;
  source: 'professional' | 'basic';
  domain?: 'data_center' | 'it_ops' | 'mech_auto' | 'general';
  positions: Array<{ start: number; end: number }>;
  frequency: number;
}

// ─── DC Professional Phrases (High Priority) ───

const DC_PHRASES: Array<{ phrase: string; cn: string; domain: 'data_center' | 'it_ops' | 'mech_auto' }> = [
  // Core DC operations
  { phrase: 'handover report', cn: '交接报告', domain: 'it_ops' },
  { phrase: 'shift handover', cn: '交接班', domain: 'it_ops' },
  { phrase: 'handover checklist', cn: '交接检查清单', domain: 'it_ops' },
  { phrase: 'handover notes', cn: '交接记录', domain: 'it_ops' },

  // Power systems
  { phrase: 'power supply', cn: '电源供应', domain: 'data_center' },
  { phrase: 'power failure', cn: '电源故障', domain: 'data_center' },
  { phrase: 'power outage', cn: '停电', domain: 'data_center' },
  { phrase: 'power distribution', cn: '配电', domain: 'data_center' },
  { phrase: 'backup power', cn: '备用电源', domain: 'data_center' },
  { phrase: 'redundant power', cn: '冗余电源', domain: 'data_center' },
  { phrase: 'dual power', cn: '双电源', domain: 'data_center' },

  // UPS specific
  { phrase: 'bypass mode', cn: '旁路模式', domain: 'data_center' },
  { phrase: 'maintenance bypass', cn: '维护旁路', domain: 'data_center' },
  { phrase: 'static bypass', cn: '静态旁路', domain: 'data_center' },
  { phrase: 'battery fault', cn: '电池故障', domain: 'data_center' },
  { phrase: 'battery replacement', cn: '电池更换', domain: 'data_center' },

  // Cooling systems
  { phrase: 'air conditioning', cn: '空调系统', domain: 'mech_auto' },
  { phrase: 'cooling system', cn: '冷却系统', domain: 'mech_auto' },
  { phrase: 'cooling tower', cn: '冷却塔', domain: 'mech_auto' },
  { phrase: 'hot aisle', cn: '热通道', domain: 'data_center' },
  { phrase: 'cold aisle', cn: '冷通道', domain: 'data_center' },
  { phrase: 'hot aisle containment', cn: '热通道封闭', domain: 'data_center' },
  { phrase: 'cold aisle containment', cn: '冷通道封闭', domain: 'data_center' },

  // Monitoring & alarms
  { phrase: 'fire alarm', cn: '火灾告警', domain: 'data_center' },
  { phrase: 'fire suppression', cn: '消防灭火', domain: 'data_center' },
  { phrase: 'smoke detector', cn: '烟雾探测器', domain: 'data_center' },
  { phrase: 'temperature monitoring', cn: '温度监控', domain: 'data_center' },
  { phrase: 'humidity control', cn: '湿度控制', domain: 'data_center' },
  { phrase: 'environmental monitoring', cn: '环境监控', domain: 'data_center' },

  // Maintenance & procedures
  { phrase: 'preventive maintenance', cn: '预防性维护', domain: 'it_ops' },
  { phrase: 'corrective maintenance', cn: '纠正性维护', domain: 'it_ops' },
  { phrase: 'routine maintenance', cn: '常规维护', domain: 'it_ops' },
  { phrase: 'scheduled maintenance', cn: '计划维护', domain: 'it_ops' },
  { phrase: 'maintenance procedure', cn: '维护流程', domain: 'it_ops' },

  // Incident management
  { phrase: 'incident ticket', cn: '故障工单', domain: 'it_ops' },
  { phrase: 'fault ticket', cn: '故障工单', domain: 'it_ops' },
  { phrase: 'work order', cn: '工单', domain: 'it_ops' },
  { phrase: 'change request', cn: '变更请求', domain: 'it_ops' },
  { phrase: 'change management', cn: '变更管理', domain: 'it_ops' },
  { phrase: 'incident report', cn: '故障报告', domain: 'it_ops' },
  { phrase: 'root cause', cn: '根本原因', domain: 'it_ops' },
  { phrase: 'corrective action', cn: '纠正措施', domain: 'it_ops' },
  { phrase: 'preventive action', cn: '预防措施', domain: 'it_ops' },

  // SLA & compliance
  { phrase: 'exceed the SLA', cn: '超出服务等级协议', domain: 'it_ops' },
  { phrase: 'service level', cn: '服务等级', domain: 'it_ops' },
  { phrase: 'service level agreement', cn: '服务等级协议', domain: 'it_ops' },
  { phrase: 'mean time', cn: '平均时间', domain: 'it_ops' },
  { phrase: 'key performance indicator', cn: '关键绩效指标', domain: 'it_ops' },
  { phrase: 'standard operating procedure', cn: '标准操作流程', domain: 'it_ops' },

  // Network & infrastructure
  { phrase: 'network switch', cn: '网络交换机', domain: 'data_center' },
  { phrase: 'fiber optic', cn: '光纤', domain: 'data_center' },
  { phrase: 'patch panel', cn: '配线架', domain: 'data_center' },
  { phrase: 'cable management', cn: '线缆管理', domain: 'data_center' },
  { phrase: 'server rack', cn: '服务器机柜', domain: 'data_center' },
  { phrase: 'blade server', cn: '刀片服务器', domain: 'data_center' },

  // Operations
  { phrase: 'load balancing', cn: '负载均衡', domain: 'it_ops' },
  { phrase: 'failover test', cn: '故障切换测试', domain: 'it_ops' },
  { phrase: 'disaster recovery', cn: '灾难恢复', domain: 'it_ops' },
  { phrase: 'business continuity', cn: '业务连续性', domain: 'it_ops' },
  { phrase: 'capacity planning', cn: '容量规划', domain: 'it_ops' },
  { phrase: 'asset management', cn: '资产管理', domain: 'it_ops' },
  { phrase: 'emergency response', cn: '应急响应', domain: 'it_ops' },
  { phrase: 'incident management', cn: '事件管理', domain: 'it_ops' },

  // Security & access
  { phrase: 'access control', cn: '门禁控制', domain: 'data_center' },
  { phrase: 'security camera', cn: '安防摄像头', domain: 'data_center' },
  { phrase: 'cctv system', cn: '闭路电视系统', domain: 'data_center' },
  { phrase: 'intrusion detection', cn: '入侵检测', domain: 'data_center' },

  // Electrical
  { phrase: 'breaker trip', cn: '断路器跳闸', domain: 'mech_auto' },
  { phrase: 'circuit breaker', cn: '断路器', domain: 'mech_auto' },
  { phrase: 'bus bar', cn: '母线', domain: 'mech_auto' },
  { phrase: 'switchgear', cn: '配电柜', domain: 'mech_auto' },
  { phrase: 'static transfer switch', cn: '静态转换开关', domain: 'mech_auto' },
  { phrase: 'automatic transfer switch', cn: '自动转换开关', domain: 'mech_auto' },
];

// ─── Basic Common Phrases ───

const BASIC_PHRASES: Array<{ phrase: string; cn: string }> = [
  // Verb phrases
  { phrase: 'scroll up', cn: '向上滚动' },
  { phrase: 'scroll down', cn: '向下滚动' },
  { phrase: 'log in', cn: '登录' },
  { phrase: 'log out', cn: '登出' },
  { phrase: 'turn on', cn: '开启' },
  { phrase: 'turn off', cn: '关闭' },
  { phrase: 'shut down', cn: '关停' },
  { phrase: 'start up', cn: '启动' },
  { phrase: 'be completed', cn: '已完成' },
  { phrase: 'be notified', cn: '已通知' },
  { phrase: 'be resolved', cn: '已解决' },
  { phrase: 'be escalated', cn: '已升级' },
  { phrase: 'be confirmed', cn: '已确认' },
  { phrase: 'be verified', cn: '已验证' },
  { phrase: 'be replaced', cn: '已更换' },
  { phrase: 'be installed', cn: '已安装' },
  { phrase: 'be configured', cn: '已配置' },

  // Prepositional phrases
  { phrase: 'due to', cn: '由于' },
  { phrase: 'according to', cn: '根据' },
  { phrase: 'in order to', cn: '为了' },
  { phrase: 'as well as', cn: '以及' },
  { phrase: 'in case of', cn: '万一' },
  { phrase: 'instead of', cn: '而不是' },
  { phrase: 'prior to', cn: '在...之前' },
  { phrase: 'subsequent to', cn: '在...之后' },

  // Common collocations
  { phrase: 'take action', cn: '采取行动' },
  { phrase: 'make sure', cn: '确保' },
  { phrase: 'carry out', cn: '执行' },
  { phrase: 'set up', cn: '设置' },
  { phrase: 'check out', cn: '检查' },
  { phrase: 'look into', cn: '调查' },
  { phrase: 'deal with', cn: '处理' },
  { phrase: 'refer to', cn: '参考' },
  { phrase: 'comply with', cn: '遵守' },
  { phrase: 'result in', cn: '导致' },
];

// ─── Detection Function ───

interface TokenInfo {
  token: string;
  start: number;
  end: number;
}

function tokenizeWithPositions(text: string): TokenInfo[] {
  const tokens: TokenInfo[] = [];
  const regex = /\S+/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    tokens.push({
      token: match[0],
      start: match.index,
      end: match.index + match[0].length,
    });
  }

  return tokens;
}

function matchPhrase(
  tokens: TokenInfo[],
  phraseWords: string[],
  startIndex: number,
): { start: number; end: number } | null {
  if (startIndex + phraseWords.length > tokens.length) {
    return null;
  }

  for (let i = 0; i < phraseWords.length; i++) {
    const tokenLower = tokens[startIndex + i].token.toLowerCase().replace(/[.,;:!?'"()-]/g, '');
    if (tokenLower !== phraseWords[i]) {
      return null;
    }
  }

  return {
    start: tokens[startIndex].start,
    end: tokens[startIndex + phraseWords.length - 1].end,
  };
}

/**
 * Detect multi-word phrases in text
 * Priority: DC professional phrases > Basic common phrases
 */
export function detectPhrases(text: string): IPhraseEntry[] {
  const tokens = tokenizeWithPositions(text);
  const results: Map<string, IPhraseEntry> = new Map();

  // Check DC phrases first (higher priority)
  for (const { phrase, cn, domain } of DC_PHRASES) {
    const phraseWords = phrase.toLowerCase().split(/\s+/);
    const positions: Array<{ start: number; end: number }> = [];

    for (let i = 0; i <= tokens.length - phraseWords.length; i++) {
      const match = matchPhrase(tokens, phraseWords, i);
      if (match) {
        positions.push(match);
        // Skip ahead to avoid overlapping matches
        i += phraseWords.length - 1;
      }
    }

    if (positions.length > 0) {
      results.set(phrase, {
        phrase,
        chinese: cn,
        source: 'professional',
        domain,
        positions,
        frequency: positions.length,
      });
    }
  }

  // Check basic phrases (lower priority, skip if already found as DC phrase)
  for (const { phrase, cn } of BASIC_PHRASES) {
    if (results.has(phrase)) continue;

    const phraseWords = phrase.toLowerCase().split(/\s+/);
    const positions: Array<{ start: number; end: number }> = [];

    for (let i = 0; i <= tokens.length - phraseWords.length; i++) {
      const match = matchPhrase(tokens, phraseWords, i);
      if (match) {
        positions.push(match);
        i += phraseWords.length - 1;
      }
    }

    if (positions.length > 0) {
      results.set(phrase, {
        phrase,
        chinese: cn,
        source: 'basic',
        domain: 'general',
        positions,
        frequency: positions.length,
      });
    }
  }

  // Sort by phrase length (longer phrases first) then by frequency
  return Array.from(results.values()).sort((a, b) => {
    const lenDiff = b.phrase.length - a.phrase.length;
    if (lenDiff !== 0) return lenDiff;
    return b.frequency - a.frequency;
  });
}

/**
 * Get phrase lookup map for quick access
 */
export function buildPhraseIndex(phrases: IPhraseEntry[]): Map<string, IPhraseEntry> {
  const index = new Map<string, IPhraseEntry>();
  for (const entry of phrases) {
    index.set(entry.phrase.toLowerCase(), entry);
  }
  return index;
}

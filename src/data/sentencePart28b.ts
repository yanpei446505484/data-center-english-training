// EXPORTS: MOCK_SENTENCES_PART28B

import type { ISentence } from './sentenceLearning';

export const MOCK_SENTENCES_PART28B: ISentence[] = [
  // ── 场景001：网络与弱电系统 - 网络测试 (1781-1788) ──
  {
    id: 1781,
    en: "Please perform a ping test.",
    cn: "请执行 Ping 测试。",
    ipa: "/pliːz pərˈfɔːrm ə pɪŋ tɛst/",
    tags: ["第1781句", "网络测试", "★★★★★"],
    when: "Ping 是最基本的网络连通性测试工具，通过发送 ICMP 回显请求包检测目标主机是否可达。交接时执行 Ping 测试验证关键网络设备的连通性。",
    words: [
      { w: "perform", ipa: "/pərˈfɔːrm/", pos: "动词", cn: "执行/进行", memory: "perform = 执行/进行/表演。\nperform a test = 执行测试。\nperform maintenance = 执行维护。", phonics: "per 读 /pər/，form 读 /fɔːrm/。", collocations: [["perform a test", "执行测试"], ["perform maintenance", "执行维护"], ["perform an inspection", "执行检查"]], examples: [["Please perform a network test.", "请执行网络测试。"], ["We need to perform a ping test.", "我们需要执行 Ping 测试。"]] },
      { w: "ping test", ipa: "/pɪŋ tɛst/", pos: "名词短语", cn: "Ping 测试", memory: "ping = 网络连通性测试（ICMP Echo Request）；test = 测试。\nping test = Ping 测试，验证目标主机是否可达。\nPing 来源于 sonar 术语（声纳脉冲），表示发送探测信号。", phonics: "ping 读 /pɪŋ/，test 读 /tɛst/。", collocations: [["ping test", "Ping 测试"], ["ping a host", "Ping 主机"], ["ping response", "Ping 响应"]], examples: [["Run a ping test to the gateway.", "对网关执行 Ping 测试。"], ["The ping test shows 0% packet loss.", "Ping 测试显示 0% 丢包率。"]] },
    ],
    phrases: [
      { p: "perform a ping test", ipa: "/pərˈfɔːrm ə pɪŋ tɛst/", cn: "执行 Ping 测试", why: "perform + a + ping test = 执行 Ping 测试。Ping 测试是网络排障的第一步，验证设备连通性。" },
    ],
    grammar: [
      { q: "perform 和 run 有什么区别？", a: "perform = 执行（正式用语，强调操作过程）\nrun = 运行/执行（更口语化，常用于命令执行）\n✅ Please perform a ping test.（请执行 Ping 测试 → 正式交接用语）\n✅ Run a ping test to the server.（对服务器跑一下 Ping 测试 → 工程师日常用语）\n交接文档用 perform，口头交流用 run。" },
    ],
    pattern: "Please perform a + 测试类型 + test",
    patternExamples: [
      { en: "Please perform a traceroute test.", cn: "请执行 Traceroute 测试。", words: [{ w: "perform", ipa: "/pərˈfɔːrm/", cn: "执行", phonics: "per 读 /pər/，form 读 /fɔːrm/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "Please perform a bandwidth test.", cn: "请执行带宽测试。", words: [{ w: "perform", ipa: "/pərˈfɔːrm/", cn: "执行", phonics: "per 读 /pər/，form 读 /fɔːrm/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "Please perform a connectivity test.", cn: "请执行连通性测试。", words: [{ w: "perform", ipa: "/pərˈfɔːrm/", cn: "执行", phonics: "per 读 /pər/，form 读 /fɔːrm/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
    ],
    thinking: "Ping 测试是网络排障的基础工具，通过 ICMP 协议检测目标主机可达性。关键参数：\n① Reply from / Request timed out → 是否可达\n② Time=Xms → 往返延迟\n③ TTL (Time To Live) → 数据包存活跳数\n④ Packet loss → 丢包率\n数据中心交接时通常 Ping 核心交换机、防火墙、DNS 服务器等关键节点。",
    pronunciation: "perform 的 per 读 /pər/，不是 /peə/。\nping 的 i 读 /ɪ/，不是 /aɪ/。",
    quiz: [
      { q: "请执行带宽测试，怎么说？", a: "Please perform a bandwidth test." },
      { q: "Ping 测试的主要参数有哪些？", a: "Ping 测试的主要参数包括：① Reply from / Request timed out（是否可达）② Time=Xms（往返延迟）③ TTL（Time To Live，数据包存活跳数）④ Packet loss（丢包率）。这些参数帮助判断网络连通性和质量。" },
    ],
  },
  {
    id: 1782,
    en: "The ping test was successful.",
    cn: "Ping 测试成功。",
    ipa: "/ðə pɪŋ tɛst wəz səkˈsɛsfəl/",
    tags: ["第1782句", "测试结果", "★★★★★"],
    when: "汇报 Ping 测试结果成功，目标主机可达且无丢包。",
    words: [
      { w: "ping test", ipa: "/pɪŋ tɛst/", pos: "名词短语", cn: "Ping 测试", memory: "ping = 网络连通性测试；test = 测试。\nping test = Ping 测试，验证目标主机是否可达。\n成功 = 收到 Reply from 且丢包率为 0。", phonics: "ping 读 /pɪŋ/，test 读 /tɛst/。", collocations: [["ping test", "Ping 测试"], ["ping result", "Ping 结果"], ["ping response", "Ping 响应"]], examples: [["The ping test passed.", "Ping 测试通过。"], ["Run a ping test first.", "先执行 Ping 测试。"]] },
      { w: "successful", ipa: "/səkˈsɛsfəl/", pos: "形容词", cn: "成功的", memory: "success = 成功；-ful = 形容词后缀。\nsuccessful = 成功的/顺利完成。\nPing test successful = Ping 测试通过，目标可达。", phonics: "suc 读 /sək/，cessful 读 /ˈsɛsfəl/，重音在 cess 上。", collocations: [["successful test", "测试成功"], ["successful connection", "连接成功"], ["successful deployment", "部署成功"]], examples: [["The test was successful.", "测试成功了。"], ["The connection was successful.", "连接成功。"]] },
    ],
    phrases: [
      { p: "ping test was successful", ipa: "/pɪŋ tɛst wəz səkˈsɛsfəl/", cn: "Ping 测试成功", why: "ping test + was successful = Ping 测试成功。表示目标主机可达，网络连通正常。" },
    ],
    grammar: [
      { q: "was successful 和 succeeded 有什么区别？", a: "was successful = 是成功的（形容词，描述状态）\nsucceeded = 成功了（动词过去式，强调动作）\n✅ The ping test was successful.（Ping 测试是成功的 → 描述结果）\n✅ The ping test succeeded.（Ping 测试成功了 → 强调动作完成）\n交接汇报常用 was successful，更正式。" },
    ],
    pattern: "The + 测试 + was successful",
    patternExamples: [
      { en: "The traceroute test was successful.", cn: "Traceroute 测试成功。", words: [{ w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "The bandwidth test was successful.", cn: "带宽测试成功。", words: [{ w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "The connectivity test was successful.", cn: "连通性测试成功。", words: [{ w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
    ],
    thinking: "Ping 测试成功的判定标准：\n① 收到 Reply from 响应（非 Request timed out）\n② 丢包率 0%（所有包都收到回复）\n③ 延迟在可接受范围内（局域网通常 <10ms，广域网 <100ms）\n如果 Ping 失败，需要进一步排查：网线/光纤连接、IP 配置、路由表、防火墙规则等。",
    pronunciation: "successful 的 uc 读 /ək/，不是 /ʌk/。\nwas 读 /wəz/，不是 /wɒz/。",
    quiz: [
      { q: "连通性测试成功了，怎么说？", a: "The connectivity test was successful." },
      { q: "Ping 测试成功的判定标准是什么？", a: "Ping 测试成功的判定标准：① 收到 Reply from 响应（非 Request timed out）② 丢包率 0%（所有包都收到回复）③ 延迟在可接受范围内（局域网通常 <10ms，广域网 <100ms）。" },
    ],
  },
  {
    id: 1783,
    en: "Please perform a traceroute test.",
    cn: "请执行 Traceroute 路由跟踪测试。",
    ipa: "/pliːz pərˈfɔːrm ə ˌtreɪsˈruːt tɛst/",
    tags: ["第1783句", "路由测试", "★★★★"],
    when: "Traceroute 用于追踪数据包从源到目标经过的每一跳路由器，帮助定位网络延迟或故障点。",
    words: [
      { w: "perform", ipa: "/pərˈfɔːrm/", pos: "动词", cn: "执行/进行", memory: "perform = 执行/进行。\nperform a traceroute test = 执行路由跟踪测试。\n交接场景常用 perform 表示正式操作。", phonics: "per 读 /pər/，form 读 /fɔːrm/。", collocations: [["perform a test", "执行测试"], ["perform a check", "执行检查"], ["perform diagnostics", "执行诊断"]], examples: [["Please perform a traceroute.", "请执行路由跟踪。"], ["We need to perform diagnostics.", "我们需要执行诊断。"]] },
      { w: "traceroute", ipa: "/ˌtreɪsˈruːt/", pos: "名词", cn: "路由跟踪", memory: "trace = 追踪；route = 路由/路径。\ntraceroute = 路由跟踪工具，显示数据包经过的每一跳。\nWindows 系统用 tracert 命令，Linux/Unix 用 traceroute。", phonics: "trace 读 /treɪs/，route 读 /ruːt/。", collocations: [["traceroute test", "路由跟踪测试"], ["run traceroute", "运行路由跟踪"], ["traceroute output", "路由跟踪输出"]], examples: [["Run a traceroute to the server.", "对服务器执行路由跟踪。"], ["The traceroute shows 12 hops.", "路由跟踪显示 12 跳。"]] },
    ],
    phrases: [
      { p: "traceroute test", ipa: "/ˌtreɪsˈruːt tɛst/", cn: "路由跟踪测试", why: "traceroute + test = 路由跟踪测试。Traceroute 比 Ping 更详细，能看到数据包经过的每一跳路由器及其延迟。" },
    ],
    grammar: [
      { q: "traceroute 和 ping 有什么区别？", a: "ping = 连通性测试（只告诉你目标是否可达，以及总延迟）\ntraceroute = 路由跟踪（显示数据包经过的每一跳路由器及每跳延迟）\n✅ Ping tells you IF the target is reachable.\n✅ Traceroute shows you HOW packets get there.\n当 Ping 延迟高或丢包时，用 traceroute 定位具体哪一跳出了问题。" },
    ],
    pattern: "Please perform a + 测试类型",
    patternExamples: [
      { en: "Please perform a traceroute to the gateway.", cn: "请对网关执行路由跟踪。", words: [{ w: "perform", ipa: "/pərˈfɔːrm/", cn: "执行", phonics: "per 读 /pər/，form 读 /fɔːrm/" }] },
      { en: "Please perform a DNS lookup test.", cn: "请执行 DNS 查询测试。", words: [{ w: "perform", ipa: "/pərˈfɔːrm/", cn: "执行", phonics: "per 读 /pər/，form 读 /fɔːrm/" }, { w: "test", ipa: "/tɛst/", cn: "测试", phonics: "test 读 /tɛst/" }] },
      { en: "Please perform a port scan.", cn: "请执行端口扫描。", words: [{ w: "perform", ipa: "/pərˈfɔːrm/", cn: "执行", phonics: "per 读 /pər/，form 读 /fɔːrm/" }] },
    ],
    thinking: "Traceroute 输出分析：\n① 每一行显示一跳路由器：跳数 + 路由器 IP/名称 + 三次延迟测量\n② * * * 表示该跳无响应（可能防火墙屏蔽 ICMP 或设备故障）\n③ 延迟突然跳升的那一跳通常是瓶颈或故障点\n数据中心交接时 traceroute 用于排查跨网段延迟或路由异常。",
    pronunciation: "traceroute 的 trace 读 /treɪs/，不是 /træs/。\nroute 读 /ruːt/，英式也读 /raʊt/。",
    quiz: [
      { q: "请对网关执行路由跟踪，怎么说？", a: "Please perform a traceroute to the gateway." },
      { q: "Traceroute 输出中 * * * 表示什么？", a: "Traceroute 输出中 * * * 表示该跳路由器无响应。可能原因：① 防火墙屏蔽了 ICMP 请求 ② 设备故障或关机 ③ 该路由器配置为不响应 traceroute。连续多跳出现 * * * 通常表示路径中断。" },
    ],
  },
  {
    id: 1784,
    en: "The network latency is normal.",
    cn: "网络延迟正常。",
    ipa: "/ðə ˈnɛtwɜːrk ˈleɪtənsi ɪz ˈnɔːrməl/",
    tags: ["第1784句", "网络性能", "★★★★★"],
    when: "确认网络延迟在正常范围内。数据中心内部网络延迟通常应低于 1ms，跨机房延迟应低于 10ms。",
    words: [
      { w: "network", ipa: "/ˈnɛtwɜːrk/", pos: "名词/形容词", cn: "网络", memory: "network = 网络/联网。\nnetwork latency = 网络延迟。\n网络是数据中心的核心基础设施。", phonics: "net 读 /nɛt/，work 读 /wɜːrk/。", collocations: [["network latency", "网络延迟"], ["network performance", "网络性能"], ["network topology", "网络拓扑"]], examples: [["Check the network status.", "检查网络状态。"], ["The network is stable.", "网络稳定。"]] },
      { w: "latency", ipa: "/ˈleɪtənsi/", pos: "名词", cn: "延迟/时延", memory: "latency = 延迟/潜伏期（源自 Latin latere = 隐藏）。\nnetwork latency = 网络延迟，数据包从源到目标所需时间。\n低延迟 = low latency，高延迟 = high latency。", phonics: "la 读 /ˈleɪ/，tency 读 /tənsi/，重音在第一音节。", collocations: [["network latency", "网络延迟"], ["low latency", "低延迟"], ["high latency", "高延迟"], ["latency test", "延迟测试"]], examples: [["The latency is 2ms.", "延迟为 2 毫秒。"], ["High latency affects performance.", "高延迟影响性能。"]] },
      { w: "normal", ipa: "/ˈnɔːrməl/", pos: "形容词", cn: "正常的", memory: "normal = 正常的/标准的。\nis normal = 在正常范围内。\n交接汇报常用 normal 表示参数正常。", phonics: "nor 读 /nɔːr/，mal 读 /məl/。", collocations: [["within normal range", "在正常范围内"], ["normal operation", "正常运行"], ["back to normal", "恢复正常"]], examples: [["Everything is normal.", "一切正常。"], ["The readings are normal.", "读数正常。"]] },
    ],
    phrases: [
      { p: "network latency is normal", ipa: "/ˈnɛtwɜːrk ˈleɪtənsi ɪz ˈnɔːrməl/", cn: "网络延迟正常", why: "network latency + is normal = 网络延迟正常。延迟是衡量网络质量的关键指标。" },
    ],
    grammar: [
      { q: "latency 和 delay 有什么区别？", a: "latency = 延迟/时延（技术术语，通常指单向或往返传输时间）\ndelay = 延迟（通用词，可指各种原因导致的延迟）\n✅ Network latency is 5ms.（网络延迟为 5ms → 技术指标）\n✅ There is a delay in the response.（响应有延迟 → 通用描述）\n网络工程中用 latency 更专业。" },
    ],
    pattern: "The + 指标 + is normal",
    patternExamples: [
      { en: "The bandwidth is normal.", cn: "带宽正常。", words: [{ w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The packet loss is normal.", cn: "丢包率正常。", words: [{ w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The throughput is normal.", cn: "吞吐量正常。", words: [{ w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "网络延迟标准（数据中心环境）：\n① 同机房内：<1ms（交换机到交换机）\n② 跨机房（同园区）：<5ms\n③ 跨城市/国家：<50ms\n④ 跨洲：<200ms\n延迟异常时的排查方向：① 检查链路拥塞（带宽利用率）② 检查设备 CPU/内存 ③ 检查路由路径是否最优 ④ 检查是否有环路。",
    pronunciation: "latency 的 la 读 /ˈleɪ/，不是 /læ/。\nis 在正常语流中弱读为 /ɪz/。",
    quiz: [
      { q: "带宽正常，怎么说？", a: "The bandwidth is normal." },
      { q: "数据中心内部网络的延迟标准是多少？", a: "数据中心内部网络的延迟标准：① 同机房内 <1ms（交换机到交换机）② 跨机房（同园区）<5ms。如果延迟超过这些阈值，需要排查链路拥塞、设备负载、路由路径等问题。" },
    ],
  },
  {
    id: 1785,
    en: "Please check the DNS service.",
    cn: "请检查 DNS 服务。",
    ipa: "/pliːz tʃɛk ðə ˌdiː ɛn ˈɛs ˈsɜːrvɪs/",
    tags: ["第1785句", "DNS 服务", "★★★★"],
    when: "DNS（Domain Name System）负责域名到 IP 地址的解析。DNS 故障会导致所有依赖域名的服务无法访问。",
    words: [
      { w: "DNS", ipa: "/ˌdiː ɛn ˈɛs/", pos: "名词", cn: "域名系统", memory: "DNS = Domain Name System = 域名系统。\nDNS 将域名（如 google.com）解析为 IP 地址（如 8.8.8.8）。\nDNS 故障 = 所有域名访问失败，但 IP 直连仍可用。", phonics: "D 读 /diː/，N 读 /ɛn/，S 读 /ɛs/。", collocations: [["DNS service", "DNS 服务"], ["DNS server", "DNS 服务器"], ["DNS resolution", "DNS 解析"], ["DNS query", "DNS 查询"]], examples: [["The DNS server is down.", "DNS 服务器宕机。"], ["Check DNS resolution.", "检查 DNS 解析。"]] },
      { w: "service", ipa: "/ˈsɜːrvɪs/", pos: "名词", cn: "服务", memory: "service = 服务/业务。\nDNS service = DNS 服务。\n数据中心运行多种网络服务（DNS/DHCP/NTP 等）。", phonics: "ser 读 /sɜːr/，vice 读 /vɪs/。", collocations: [["network service", "网络服务"], ["service status", "服务状态"], ["service outage", "服务中断"]], examples: [["Check all services.", "检查所有服务。"], ["The service is running.", "服务正在运行。"]] },
    ],
    phrases: [
      { p: "DNS service", ipa: "/ˌdiː ɛn ˈɛs ˈsɜːrvɪs/", cn: "DNS 服务", why: "DNS + service = DNS 服务。DNS 是互联网基础设施，将人类可读的域名转换为机器可读的 IP 地址。" },
    ],
    grammar: [
      { q: "DNS 解析失败怎么排查？", a: "DNS 解析失败排查步骤：\n① Ping DNS 服务器 IP → 确认 DNS 服务器可达\n② nslookup / dig 命令 → 手动查询域名解析\n③ 检查 /etc/resolv.conf（Linux）或 ipconfig /all（Windows）→ 确认 DNS 配置\n④ 尝试备用 DNS 服务器 → 排除单点故障\n⑤ 检查防火墙是否放行 UDP 53 端口。" },
    ],
    pattern: "Please check the + 服务名 + service",
    patternExamples: [
      { en: "Please check the DHCP service.", cn: "请检查 DHCP 服务。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the NTP service.", cn: "请检查 NTP 服务。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the SNMP service.", cn: "请检查 SNMP 服务。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "DNS 在数据中心的重要性：\n① 所有依赖域名的服务（Web、API、邮件）都依赖 DNS\n② DNS 故障时 IP 直连仍可用，但用户无法通过域名访问\n③ 数据中心通常部署主备 DNS 服务器确保高可用\n交接时检查 DNS 服务状态、解析响应时间、主备切换状态。",
    pronunciation: "DNS 三个字母分别读 /diː ɛn ɛs/，不要读成一个词。\nservice 的 ser 读 /sɜːr/，不是 /sɛr/。",
    quiz: [
      { q: "请检查 DHCP 服务，怎么说？", a: "Please check the DHCP service." },
      { q: "DNS 解析失败怎么排查？", a: "DNS 解析失败排查步骤：① Ping DNS 服务器 IP 确认可达 ② 用 nslookup/dig 手动查询 ③ 检查 DNS 配置文件 ④ 尝试备用 DNS 服务器 ⑤ 检查防火墙是否放行 UDP 53 端口。" },
    ],
  },
  {
    id: 1786,
    en: "The DNS service is operating normally.",
    cn: "DNS 服务运行正常。",
    ipa: "/ðə ˌdiː ɛn ˈɛs ˈsɜːrvɪs ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/",
    tags: ["第1786句", "DNS 状态", "★★★★"],
    when: "确认 DNS 服务运行正常，域名解析功能工作正常。",
    words: [
      { w: "DNS service", ipa: "/ˌdiː ɛn ˈɛs ˈsɜːrvɪs/", pos: "名词短语", cn: "DNS 服务", memory: "DNS = 域名系统；service = 服务。\nDNS service = DNS 服务，负责域名解析。\nDNS 服务正常 = 域名能正确解析为 IP 地址。", phonics: "DNS 读 /diː ɛn ɛs/，service 读 /ˈsɜːrvɪs/。", collocations: [["DNS service", "DNS 服务"], ["DNS server", "DNS 服务器"], ["DNS resolution", "DNS 解析"]], examples: [["The DNS service is healthy.", "DNS 服务健康。"], ["Check DNS service status.", "检查 DNS 服务状态。"]] },
      { w: "operating normally", ipa: "/ˈɒpəreɪtɪŋ ˈnɔːrməli/", pos: "动词短语", cn: "运行正常", memory: "operating = 运行中；normally = 正常地。\noperating normally = 正常运行。\n适用于所有系统/服务的状态汇报。", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/，normally 读 /ˈnɔːrməli/。", collocations: [["operating normally", "正常运行"], ["functioning normally", "正常运作"], ["running normally", "正常运转"]], examples: [["The DNS is operating normally.", "DNS 正常运行。"], ["All services are operating normally.", "所有服务正常运行。"]] },
    ],
    phrases: [
      { p: "DNS service is operating normally", ipa: "/ˌdiː ɛn ˈɛs ˈsɜːrvɪs ɪz ˈɒpəreɪtɪŋ ˈnɔːrməli/", cn: "DNS 服务运行正常", why: "DNS service + is operating normally = DNS 服务运行正常。确认 DNS 解析功能正常是交接必查项。" },
    ],
    grammar: [
      { q: "怎么验证 DNS 服务是否正常？", a: "验证 DNS 服务的方法：\n① nslookup google.com → 能返回 IP 地址\n② dig google.com → 查看详细解析信息\n③ 对比主备 DNS 响应 → 两者结果一致\n④ 检查解析响应时间 → 应 <50ms\n⑤ 查看 DNS 服务日志 → 无异常报错。" },
    ],
    pattern: "The + 服务 + is operating normally",
    patternExamples: [
      { en: "The DHCP service is operating normally.", cn: "DHCP 服务运行正常。", words: [{ w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The NTP service is operating normally.", cn: "NTP 服务运行正常。", words: [{ w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The email service is operating normally.", cn: "邮件服务运行正常。", words: [{ w: "operating", ipa: "/ˈɒpəreɪtɪŋ/", cn: "运行中", phonics: "op 读 /ɒp/，erating 读 /əreɪtɪŋ/" }, { w: "normally", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "DNS 服务正常运行的判定标准：\n① DNS 服务进程运行中\n② 域名解析请求能正确返回 IP\n③ 解析响应时间 <50ms\n④ 主备 DNS 同步正常\n⑤ 无大量解析失败日志\n交接时通常用 nslookup 测试几个关键域名的解析来验证。",
    pronunciation: "DNS 三个字母分开读 /diː ɛn ɛs/。\noperating 的 o 读 /ɒ/，不是 /oʊ/。",
    quiz: [
      { q: "DHCP 服务运行正常，怎么说？", a: "The DHCP service is operating normally." },
      { q: "怎么验证 DNS 服务是否正常？", a: "验证 DNS 服务：① nslookup 测试域名解析 ② dig 查看详细解析信息 ③ 对比主备 DNS 响应一致性 ④ 检查解析响应时间 <50ms ⑤ 查看 DNS 日志无异常。" },
    ],
  },
  {
    id: 1787,
    en: "Please check the NTP synchronization.",
    cn: "请检查 NTP 时间同步。",
    ipa: "/pliːz tʃɛk ðə ˌɛn tiː ˈpiː ˌsɪŋkrənaɪˈzeɪʃən/",
    tags: ["第1787句", "时间同步", "★★★★★"],
    when: "NTP（Network Time Protocol）确保所有设备时间一致。数据中心对时间精度要求极高，时间不同步会导致日志关联困难、安全证书验证失败等问题。",
    words: [
      { w: "NTP", ipa: "/ˌɛn tiː ˈpiː/", pos: "名词", cn: "网络时间协议", memory: "NTP = Network Time Protocol = 网络时间协议。\nNTP 通过 UDP 123 端口同步网络设备的时间。\n数据中心所有设备必须时间同步，否则日志无法关联分析。", phonics: "N 读 /ɛn/，T 读 /tiː/，P 读 /piː/。", collocations: [["NTP synchronization", "NTP 同步"], ["NTP server", "NTP 服务器"], ["NTP client", "NTP 客户端"], ["NTP stratum", "NTP 层级"]], examples: [["Check NTP sync status.", "检查 NTP 同步状态。"], ["The NTP server is unreachable.", "NTP 服务器不可达。"]] },
      { w: "synchronization", ipa: "/ˌsɪŋkrənaɪˈzeɪʃən/", pos: "名词", cn: "同步", memory: "synchronize = 同步（动词）；-ation = 名词后缀。\nsynchronization = 同步过程/状态。\ntime synchronization = 时间同步。", phonics: "syn 读 /sɪŋ/，chro 读 /krə/，ni 读 /naɪ/，zation 读 /ˈzeɪʃən/。", collocations: [["time synchronization", "时间同步"], ["data synchronization", "数据同步"], ["clock synchronization", "时钟同步"]], examples: [["Time sync is critical.", "时间同步至关重要。"], ["Check synchronization status.", "检查同步状态。"]] },
    ],
    phrases: [
      { p: "NTP synchronization", ipa: "/ˌɛn tiː ˈpiː ˌsɪŋkrənaɪˈzeɪʃən/", cn: "NTP 时间同步", why: "NTP + synchronization = NTP 时间同步。数据中心所有设备必须保持时间一致，否则日志时间戳无法关联，安全事件无法追溯。" },
    ],
    grammar: [
      { q: "为什么数据中心需要 NTP 时间同步？", a: "数据中心需要 NTP 的原因：\n① 日志关联分析 → 不同设备日志时间戳必须一致才能关联\n② 安全证书验证 → SSL/TLS 证书依赖时间验证\n③ 交易时间戳 → 金融数据中心对时间精度要求微秒级\n④ 故障排查 → 事件时间线需要精确对齐\n⑤ 合规要求 → 审计要求所有设备时间同步。" },
    ],
    pattern: "Please check the + 协议/服务 + synchronization",
    patternExamples: [
      { en: "Please check the database synchronization.", cn: "请检查数据库同步。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the file synchronization.", cn: "请检查文件同步。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
      { en: "Please check the configuration synchronization.", cn: "请检查配置同步。", words: [{ w: "check", ipa: "/tʃɛk/", cn: "检查", phonics: "ch 读 /tʃ/，eck 读 /ɛk/" }] },
    ],
    thinking: "NTP 同步检查要点：\n① NTP 服务是否运行\n② 是否连接到上级 NTP 服务器（stratum 层级）\n③ 时间偏差是否在允许范围内（通常 <100ms）\n④ 是否有 NTP peer 通信异常\n数据中心通常采用分层 NTP 架构：Stratum 1（原子钟/GPS）→ Stratum 2 → Stratum 3（设备）。",
    pronunciation: "NTP 三个字母分别读 /ɛn tiː piː/。\nsynchronization 重音在 za 上 /ˈzeɪʃən/。",
    quiz: [
      { q: "请检查数据库同步，怎么说？", a: "Please check the database synchronization." },
      { q: "为什么数据中心需要 NTP 时间同步？", a: "数据中心需要 NTP 的原因：① 日志关联分析需要时间戳一致 ② 安全证书验证依赖时间 ③ 交易时间戳精度要求 ④ 故障排查需要精确时间线 ⑤ 审计合规要求时间同步。" },
    ],
  },
  {
    id: 1788,
    en: "The system time is synchronized correctly.",
    cn: "系统时间同步正常。",
    ipa: "/ðə ˈsɪstəm taɪm ɪz ˈsɪŋkrənaɪzd kəˈrɛktli/",
    tags: ["第1788句", "时间同步状态", "★★★★★"],
    when: "确认系统时间已正确同步，时间偏差在允许范围内。",
    words: [
      { w: "system time", ipa: "/ˈsɪstəm taɪm/", pos: "名词短语", cn: "系统时间", memory: "system = 系统；time = 时间。\nsystem time = 系统时间，设备当前的时钟时间。\n数据中心所有设备的 system time 必须一致。", phonics: "system 读 /ˈsɪstəm/，time 读 /taɪm/。", collocations: [["system time", "系统时间"], ["system clock", "系统时钟"], ["time sync", "时间同步"]], examples: [["Check the system time.", "检查系统时间。"], ["The system time is off by 2 seconds.", "系统时间偏差 2 秒。"]] },
      { w: "synchronized", ipa: "/ˈsɪŋkrənaɪzd/", pos: "动词过去分词", cn: "已同步", memory: "synchronize = 同步（动词）；-d = 过去分词。\nsynchronized = 已同步的。\ntime is synchronized = 时间已同步。", phonics: "syn 读 /sɪŋ/，chro 读 /krə/，nized 读 /naɪzd/。", collocations: [["time synchronized", "时间已同步"], ["clock synchronized", "时钟已同步"], ["data synchronized", "数据已同步"]], examples: [["All clocks are synchronized.", "所有时钟已同步。"], ["The time is synced.", "时间已同步。"]] },
      { w: "correctly", ipa: "/kəˈrɛktli/", pos: "副词", cn: "正确地", memory: "correct = 正确的；-ly = 副词后缀。\ncorrectly = 正确地/准确地。\nsynchronized correctly = 正确同步。", phonics: "cor 读 /kə/，rectly 读 /ˈrɛktli/。", collocations: [["working correctly", "工作正常"], ["configured correctly", "配置正确"], ["synchronized correctly", "正确同步"]], examples: [["The system is working correctly.", "系统工作正常。"], ["The time is set correctly.", "时间设置正确。"]] },
    ],
    phrases: [
      { p: "system time is synchronized correctly", ipa: "/ˈsɪstəm taɪm ɪz ˈsɪŋkrənaɪzd kəˈrɛktli/", cn: "系统时间同步正常", why: "system time + is synchronized + correctly = 系统时间正确同步。确认时间同步是交接检查的重要环节。" },
    ],
    grammar: [
      { q: "synchronized 和 syncing 有什么区别？", a: "synchronized = 已同步（过去分词，表示状态已完成）\nsyncing = 正在同步（现在分词，表示动作进行中）\n✅ The time is synchronized.（时间已同步 → 状态完成）\n✅ The time is syncing.（时间正在同步 → 动作进行中）\n交接汇报用 synchronized，表示已经同步好了。" },
    ],
    pattern: "The + 系统 + is + 过去分词 + correctly",
    patternExamples: [
      { en: "The configuration is applied correctly.", cn: "配置已正确应用。", words: [] },
      { en: "The backup is completed correctly.", cn: "备份已正确完成。", words: [{ w: "backup", ipa: "/ˈbækʌp/", cn: "备份", phonics: "back 读 /bæk/，up 读 /ʌp/" }] },
      { en: "The firewall is configured correctly.", cn: "防火墙已正确配置。", words: [] },
    ],
    thinking: "时间同步正常的判定标准：\n① NTP 服务状态 = synced（非 unsynced）\n② 时间偏差 <100ms（金融场景可能要求 <1ms）\n③ NTP peer 状态正常（reachability = 377）\n④ 无频繁的 time step 调整（表示一直在微调，没有大跳变）\nLinux 用 ntpstat 或 chronyc tracking 检查，Windows 用 w32tm /query /status。",
    pronunciation: "synchronized 的 syn 读 /sɪŋ/，不是 /saɪn/。\ncorrectly 的 cor 弱读为 /kə/。",
    quiz: [
      { q: "防火墙已正确配置，怎么说？", a: "The firewall is configured correctly." },
      { q: "时间同步正常的判定标准是什么？", a: "时间同步正常的判定标准：① NTP 状态 = synced ② 时间偏差 <100ms ③ NTP peer 状态正常 ④ 无频繁 time step 调整。Linux 用 ntpstat 检查，Windows 用 w32tm /query /status。" },
    ],
  },
  // ── 场景001：网络与弱电系统 - 网络告警 (1789-1800) ──
  {
    id: 1789,
    en: "A network device is offline.",
    cn: "一台网络设备离线。",
    ipa: "/ə ˈnɛtwɜːrk dɪˈvaɪs ɪz ˌɒfˈlaɪn/",
    tags: ["第1789句", "设备离线", "★★★★★"],
    when: "网络监控检测到某台网络设备（交换机/路由器/防火墙）失去连接，可能是设备故障、电源问题或上行链路中断。",
    words: [
      { w: "network device", ipa: "/ˈnɛtwɜːrk dɪˈvaɪs/", pos: "名词短语", cn: "网络设备", memory: "network = 网络；device = 设备。\nnetwork device = 网络设备，包括交换机、路由器、防火墙等。\n设备离线 = 无法通过网络管理该设备。", phonics: "network 读 /ˈnɛtwɜːrk/，device 的 vi 读 /vaɪ/。", collocations: [["network device", "网络设备"], ["device status", "设备状态"], ["device management", "设备管理"]], examples: [["Check the network device.", "检查网络设备。"], ["The device is unreachable.", "设备不可达。"]] },
      { w: "offline", ipa: "/ˌɒfˈlaɪn/", pos: "形容词/副词", cn: "离线的/脱机", memory: "off = 关闭；line = 线路/在线。\noffline = 离线/脱机，设备不可达。\nonline = 在线/联机，设备正常连接。\n设备 offline 是网络告警的常见触发条件。", phonics: "off 读 /ɒf/，line 读 /laɪn/。", collocations: [["device offline", "设备离线"], ["go offline", "变为离线"], ["server offline", "服务器离线"]], examples: [["The switch is offline.", "交换机离线。"], ["The server went offline at 3 AM.", "服务器凌晨 3 点离线。"]] },
    ],
    phrases: [
      { p: "network device is offline", ipa: "/ˈnɛtwɜːrk dɪˈvaɪs ɪz ˌɒfˈlaɪn/", cn: "网络设备离线", why: "network device + is offline = 网络设备离线。设备离线意味着无法通过网络管理该设备，需要立即排查。" },
    ],
    grammar: [
      { q: "offline 和 down 有什么区别？", a: "offline = 离线（设备不可达，可能是设备本身问题或链路问题）\ndown = 宕机/故障（设备已停止运行）\n✅ The device is offline.（设备离线 → 不可达，但不确定是否宕机）\n✅ The device is down.（设备宕机 → 确认设备已停止）\noffline 范围更广，down 更具体。先报 offline，确认后报 down。" },
    ],
    pattern: "A + 设备类型 + is offline",
    patternExamples: [
      { en: "A switch is offline.", cn: "一台交换机离线。", words: [{ w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "A router is offline.", cn: "一台路由器离线。", words: [] },
      { en: "A server is offline.", cn: "一台服务器离线。", words: [{ w: "server", ipa: "/ˈsɜːrvər/", cn: "服务器", phonics: "serv 读 /sɜːrv/，er 读 /ər/" }] },
    ],
    thinking: "设备离线排查步骤：\n① Ping 设备管理 IP → 确认是否真的不可达\n② 检查上行链路设备 → 可能是上行交换机/链路故障\n③ 检查电源/PDU → 设备可能断电\n④ 尝试 Console 连接 → 本地确认设备状态\n⑤ 检查 SNMP/管理协议 → 可能只是管理通道故障\n数据中心设备离线可能影响大面积业务，需优先处理。",
    pronunciation: "offline 的 off 读 /ɒf/，不是 /ɔːf/。\ndevice 的 vi 读 /vaɪ/，不是 /vɪ/。",
    quiz: [
      { q: "一台服务器离线了，怎么说？", a: "A server is offline." },
      { q: "设备离线时怎么排查？", a: "设备离线排查步骤：① Ping 设备管理 IP 确认可达性 ② 检查上行链路设备 ③ 检查电源/PDU ④ 尝试 Console 本地连接 ⑤ 检查 SNMP/管理协议。" },
    ],
  },
  {
    id: 1790,
    en: "A fiber link has been disconnected.",
    cn: "一条光纤链路已断开。",
    ipa: "/ə ˈfaɪbər lɪŋk hæz biːn ˌdɪskəˈnɛktɪd/",
    tags: ["第1790句", "链路断开", "★★★★★"],
    when: "光纤链路断开是严重网络故障，可能导致设备间通信完全中断。常见原因包括光纤弯折过度、接头松动、光模块故障等。",
    words: [
      { w: "fiber link", ipa: "/ˈfaɪbər lɪŋk/", pos: "名词短语", cn: "光纤链路", memory: "fiber = 光纤（fiber optic 的简称）；link = 链路/连接。\nfiber link = 光纤链路，设备间的高速光连接。\n光纤链路断开 = 物理层通信中断。", phonics: "fiber 读 /ˈfaɪbər/，link 读 /lɪŋk/。", collocations: [["fiber link", "光纤链路"], ["fiber optic", "光纤"], ["fiber cable", "光缆"], ["link down", "链路断开"]], examples: [["The fiber link is down.", "光纤链路断开。"], ["Check the fiber connection.", "检查光纤连接。"]] },
      { w: "disconnected", ipa: "/ˌdɪskəˈnɛktɪd/", pos: "动词过去分词", cn: "已断开", memory: "dis- = 否定前缀；connect = 连接；-ed = 过去分词。\ndisconnected = 已断开/已断开连接。\nhas been disconnected = 已经被断开（现在完成时被动语态）。", phonics: "dis 读 /dɪs/，con 读 /kə/，nected 读 /ˈnɛktɪd/。", collocations: [["link disconnected", "链路断开"], ["cable disconnected", "线缆断开"], ["session disconnected", "会话断开"]], examples: [["The cable was disconnected.", "线缆被断开。"], ["The link has been disconnected.", "链路已断开。"]] },
    ],
    phrases: [
      { p: "fiber link has been disconnected", ipa: "/ˈfaɪbər lɪŋk hæz biːn ˌdɪskəˈnɛktɪd/", cn: "光纤链路已断开", why: "fiber link + has been disconnected = 光纤链路已断开。光纤断开会导致设备间通信完全中断，是严重网络故障。" },
    ],
    grammar: [
      { q: "has been disconnected 和 was disconnected 有什么区别？", a: "has been disconnected = 已经断开（现在完成时，强调当前状态）\nwas disconnected = 被断开（一般过去时，强调过去动作）\n✅ The fiber link has been disconnected.（光纤链路已断开 → 现在仍然是断开状态）\n✅ The fiber link was disconnected at 3 AM.（光纤链路凌晨 3 点断开 → 描述过去事件）\n告警用 has been，强调'当前已断开'的状态。" },
    ],
    pattern: "A + 链路类型 + has been disconnected",
    patternExamples: [
      { en: "A copper link has been disconnected.", cn: "一条铜缆链路已断开。", words: [] },
      { en: "A WAN link has been disconnected.", cn: "一条广域网链路已断开。", words: [] },
      { en: "A trunk link has been disconnected.", cn: "一条主干链路已断开。", words: [] },
    ],
    thinking: "光纤链路断开排查：\n① 检查光模块状态 → 光模块可能故障\n② 检查光纤接头 → 接头可能松动或污染\n③ 使用 OTDR（光时域反射仪）→ 定位断点位置\n④ 检查光纤弯曲半径 → 过度弯折会导致断裂\n⑤ 切换到备用链路 → 优先恢复业务\n光纤链路断开时，如果有冗余链路，应立即切换。",
    pronunciation: "fiber 的 fi 读 /faɪ/，不是 /fiː/。\ndisconnected 的 dis 读 /dɪs/，重音在 nec 上。",
    quiz: [
      { q: "一条广域网链路已断开，怎么说？", a: "A WAN link has been disconnected." },
      { q: "光纤链路断开怎么排查？", a: "光纤链路断开排查：① 检查光模块状态 ② 检查光纤接头是否松动/污染 ③ 使用 OTDR 定位断点 ④ 检查光纤弯曲半径 ⑤ 切换到备用链路优先恢复业务。" },
    ],
  },
  {
    id: 1791,
    en: "A switch communication alarm has been detected.",
    cn: "检测到交换机通信告警。",
    ipa: "/ə swɪtʃ kəˌmjuːnɪˈkeɪʃən əˈlɑːrm hæz biːn dɪˈtɛktɪd/",
    tags: ["第1791句", "通信告警", "★★★★★"],
    when: "交换机通信告警表示网络管理系统无法正常与交换机通信，可能是 SNMP 超时、管理 VLAN 故障或交换机 CPU 过载。",
    words: [
      { w: "switch", ipa: "/swɪtʃ/", pos: "名词", cn: "交换机", memory: "switch = 交换机/开关。\n在网络语境中 switch = 网络交换机。\n交换机通信告警 = 网管系统无法正常轮询交换机状态。", phonics: "switch 读 /swɪtʃ/，sw 连读。", collocations: [["network switch", "网络交换机"], ["core switch", "核心交换机"], ["switch port", "交换机端口"]], examples: [["The switch is down.", "交换机宕机。"], ["Check the switch status.", "检查交换机状态。"]] },
      { w: "communication alarm", ipa: "/kəˌmjuːnɪˈkeɪʃən əˈlɑːrm/", pos: "名词短语", cn: "通信告警", memory: "communication = 通信/通讯；alarm = 告警。\ncommunication alarm = 通信告警，设备通信异常触发。\n交换机通信告警 = 网管系统无法正常轮询交换机状态。", phonics: "com 读 /kə/，mu 读 /mjuː/，ni 读 /nɪ/，cation 读 /ˈkeɪʃən/。", collocations: [["communication alarm", "通信告警"], ["communication failure", "通信故障"], ["communication loss", "通信丢失"]], examples: [["A communication alarm was triggered.", "触发了通信告警。"], ["Check communication status.", "检查通信状态。"]] },
      { w: "detected", ipa: "/dɪˈtɛktɪd/", pos: "动词过去分词", cn: "检测到", memory: "detect = 检测/发现；-ed = 过去分词。\ndetected = 被检测到。\nhas been detected = 已被检测到（现在完成时被动语态）。", phonics: "de 读 /dɪ/，tected 读 /ˈtɛktɪd/。", collocations: [["alarm detected", "告警检测到"], ["fault detected", "故障检测到"], ["anomaly detected", "异常检测到"]], examples: [["An alarm has been detected.", "检测到一个告警。"], ["No faults detected.", "未检测到故障。"]] },
    ],
    phrases: [
      { p: "switch communication alarm", ipa: "/swɪtʃ kəˌmjuːnɪˈkeɪʃən əˈlɑːrm/", cn: "交换机通信告警", why: "switch + communication + alarm = 交换机通信告警。通信告警可能是交换机本身故障，也可能是管理通道问题。" },
    ],
    grammar: [
      { q: "communication alarm 和 link alarm 有什么区别？", a: "communication alarm = 通信告警（管理通道异常，SNMP/SSH 等不可达）\nlink alarm = 链路告警（物理链路异常，端口 down、光衰过大等）\n✅ Communication alarm: can't talk TO the switch.（无法和交换机通信）\n✅ Link alarm: the switch reports a link problem.（交换机报告链路问题）\n通信告警可能包含链路告警，但范围更广。" },
    ],
    pattern: "A + 设备 + 告警类型 + has been detected",
    patternExamples: [
      { en: "A router communication alarm has been detected.", cn: "检测到路由器通信告警。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A firewall policy alarm has been detected.", cn: "检测到防火墙策略告警。", words: [{ w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
      { en: "A server hardware alarm has been detected.", cn: "检测到服务器硬件告警。", words: [{ w: "server", ipa: "/ˈsɜːrvər/", cn: "服务器", phonics: "serv 读 /sɜːrv/，er 读 /ər/" }, { w: "alarm", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }] },
    ],
    thinking: "交换机通信告警排查：\n① Ping 交换机管理 IP → 确认 IP 层可达性\n② 尝试 SSH/Telnet → 确认管理协议可用\n③ 检查交换机 CPU/内存 → 设备可能过载\n④ 检查管理 VLAN 配置 → VLAN 可能异常\n⑤ 检查 SNMP community string → 认证可能变更\n通信告警不一定是设备故障，也可能是管理配置变更导致。",
    pronunciation: "communication 重音在 ca 上 /ˈkeɪʃən/。\nalarm 的 a 读 /ə/，larm 读 /ˈlɑːrm/。",
    quiz: [
      { q: "检测到路由器通信告警，怎么说？", a: "A router communication alarm has been detected." },
      { q: "通信告警和链路告警有什么区别？", a: "通信告警 = 管理通道异常（SNMP/SSH 不可达），可能是设备过载或管理配置问题。链路告警 = 物理链路异常（端口 down、光衰过大），是交换机报告的底层问题。通信告警范围更广，可能包含链路告警。" },
    ],
  },
  {
    id: 1792,
    en: "Please restart the affected network device.",
    cn: "请重启受影响的网络设备。",
    ipa: "/pliːz ˌriːˈstɑːrt ðə əˈfɛktɪd ˈnɛtwɜːrk dɪˈvaɪs/",
    tags: ["第1792句", "设备重启", "★★★★"],
    when: "当网络设备出现软件故障或异常状态时，重启是常用的恢复手段。重启前应确认影响范围并获得授权。",
    words: [
      { w: "restart", ipa: "/ˌriːˈstɑːrt/", pos: "动词", cn: "重启", memory: "re- = 再次；start = 启动。\nrestart = 重启/重新启动。\n重启设备 = restart the device / reboot the device。", phonics: "re 读 /riː/，start 读 /stɑːrt/。", collocations: [["restart a device", "重启设备"], ["restart a service", "重启服务"], ["restart a server", "重启服务器"]], examples: [["Please restart the switch.", "请重启交换机。"], ["We need to restart the router.", "我们需要重启路由器。"]] },
      { w: "affected", ipa: "/əˈfɛktɪd/", pos: "形容词", cn: "受影响的", memory: "affect = 影响（动词）；-ed = 形容词化。\naffected = 受影响的/受到波及的。\nthe affected device = 受影响的设备。", phonics: "af 读 /ə/，fected 读 /ˈfɛktɪd/，重音在 fect 上。", collocations: [["affected device", "受影响的设备"], ["affected service", "受影响的服务"], ["affected area", "受影响的区域"]], examples: [["Restart the affected server.", "重启受影响的服务器。"], ["Check the affected ports.", "检查受影响的端口。"]] },
    ],
    phrases: [
      { p: "restart the affected network device", ipa: "/ˌriːˈstɑːrt ðə əˈfɛktɪd ˈnɛtwɜːrk dɪˈvaɪs/", cn: "重启受影响的网络设备", why: "restart + the affected + network device = 重启受影响的网络设备。重启前需评估影响范围，必要时切换到备用设备。" },
    ],
    grammar: [
      { q: "restart 和 reboot 有什么区别？", a: "restart = 重启（通用词，可用于设备/服务/进程）\nreboot = 重启（更偏向设备/系统的完整重启）\n✅ Please restart the service.（请重启服务 → 不能用 reboot）\n✅ Please reboot the server.（请重启服务器 → restart 也可以）\n对于网络设备，两者可互换使用。" },
    ],
    pattern: "Please restart the affected + 设备类型",
    patternExamples: [
      { en: "Please restart the affected server.", cn: "请重启受影响的服务器。", words: [{ w: "restart", ipa: "/riːˈstɑːrt/", cn: "重启", phonics: "re 读 /riː/，start 读 /stɑːrt/" }, { w: "server", ipa: "/ˈsɜːrvər/", cn: "服务器", phonics: "serv 读 /sɜːrv/，er 读 /ər/" }] },
      { en: "Please restart the affected switch.", cn: "请重启受影响的交换机。", words: [{ w: "restart", ipa: "/riːˈstɑːrt/", cn: "重启", phonics: "re 读 /riː/，start 读 /stɑːrt/" }, { w: "switch", ipa: "/swɪtʃ/", cn: "开关", phonics: "switch 读 /swɪtʃ/" }] },
      { en: "Please restart the affected router.", cn: "请重启受影响的路由器。", words: [{ w: "restart", ipa: "/riːˈstɑːrt/", cn: "重启", phonics: "re 读 /riː/，start 读 /stɑːrt/" }] },
    ],
    thinking: "重启网络设备注意事项：\n① 评估影响范围 → 该设备下联哪些业务\n② 确认冗余 → 是否有备用设备可切换\n③ 选择重启方式 → 优雅重启（graceful）还是强制重启（hard reset）\n④ 通知相关人员 → 重启期间的业务影响\n⑤ 重启后验证 → 确认设备恢复正常\n数据中心核心设备重启通常需要变更审批。",
    pronunciation: "restart 的 re 读 /riː/，不是 /rɪ/。\naffected 的 af 弱读为 /ə/。",
    quiz: [
      { q: "请重启受影响的服务器，怎么说？", a: "Please restart the affected server." },
      { q: "重启网络设备前需要注意什么？", a: "重启网络设备前需要：① 评估影响范围（下联业务）② 确认冗余（备用设备）③ 选择重启方式（优雅/强制）④ 通知相关人员 ⑤ 重启后验证恢复正常。核心设备重启通常需要变更审批。" },
    ],
  },
  {
    id: 1793,
    en: "Please notify the network engineer immediately.",
    cn: "请立即通知网络工程师。",
    ipa: "/pliːz ˈnoʊtɪfaɪ ðə ˈnɛtwɜːrk ˌɛndʒɪˈnɪr ɪˈmiːdiətli/",
    tags: ["第1793句", "通知工程师", "★★★★★"],
    when: "网络故障超出值班人员处理能力时，需要立即通知专业网络工程师介入处理。",
    words: [
      { w: "notify", ipa: "/ˈnoʊtɪfaɪ/", pos: "动词", cn: "通知", memory: "notify = 通知/告知（正式用语）。\nnotify someone = 通知某人。\nnetwork engineer = 网络工程师。", phonics: "no 读 /ˈnoʊ/，tify 读 /tɪfaɪ/。", collocations: [["notify the engineer", "通知工程师"], ["notify the team", "通知团队"], ["notify the supervisor", "通知主管"]], examples: [["Please notify the on-call engineer.", "请通知值班工程师。"], ["Notify the network team.", "通知网络团队。"]] },
      { w: "immediately", ipa: "/ɪˈmiːdiətli/", pos: "副词", cn: "立即/马上", memory: "immediate = 立即的；-ly = 副词后缀。\nimmediately = 立即/马上/即刻。\n在紧急告警场景中使用，强调时间紧迫。", phonics: "im 读 /ɪ/，me 读 /ˈmiː/，di 读 /di/，ately 读 /ətli/。", collocations: [["notify immediately", "立即通知"], ["respond immediately", "立即响应"], ["investigate immediately", "立即调查"]], examples: [["Please respond immediately.", "请立即响应。"], ["Call the engineer immediately.", "立即呼叫工程师。"]] },
    ],
    phrases: [
      { p: "notify the network engineer immediately", ipa: "/ˈnoʊtɪfaɪ ðə ˈnɛtwɜːrk ˌɛndʒɪˈnɪr ɪˈmiːdiətli/", cn: "立即通知网络工程师", why: "notify + the network engineer + immediately = 立即通知网络工程师。紧急网络故障需要专业人员快速介入。" },
    ],
    grammar: [
      { q: "notify 和 inform 有什么区别？", a: "notify = 通知（正式用语，常用于系统/流程通知）\ninform = 告知（通用词，传递信息）\n✅ Please notify the engineer immediately.（请立即通知工程师 → 正式流程）\n✅ I'll inform you of the progress.（我会告知你进展 → 信息传递）\n紧急告警场景用 notify，更正式。" },
    ],
    pattern: "Please notify the + 角色 + immediately",
    patternExamples: [
      { en: "Please notify the security engineer immediately.", cn: "请立即通知安全工程师。", words: [{ w: "notify", ipa: "/ˈnoʊtɪfaɪ/", cn: "通知", phonics: "not 读 /noʊt/，ify 读 /ɪfaɪ/" }, { w: "security", ipa: "/sɪˈkjʊrɪti/", cn: "安防", phonics: "se 读 /sɪ/，curity 读 /kjʊrɪti/" }, { w: "engineer", ipa: "/ˌɛndʒɪˈnɪər/", cn: "工程师", phonics: "en 读 /ɛn/，gineer 读 /dʒɪˈnɪər/" }] },
      { en: "Please notify the duty manager immediately.", cn: "请立即通知值班经理。", words: [{ w: "notify", ipa: "/ˈnoʊtɪfaɪ/", cn: "通知", phonics: "not 读 /noʊt/，ify 读 /ɪfaɪ/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
      { en: "Please notify the vendor immediately.", cn: "请立即通知供应商。", words: [{ w: "notify", ipa: "/ˈnoʊtɪfaɪ/", cn: "通知", phonics: "not 读 /noʊt/，ify 读 /ɪfaɪ/" }, { w: "vendor", ipa: "/ˈvɛndər/", cn: "供应商", phonics: "vend 读 /vɛnd/，or 读 /ər/" }, { w: "immediately", ipa: "/ɪˈmiːdiətli/", cn: "立即", phonics: "im 读 /ɪ/，mediately 读 /miːdiətli/" }] },
    ],
    thinking: "网络故障升级流程：\n① L1（值班人员）→ 初步排查、基本恢复操作\n② L2（网络工程师）→ 专业排障、配置变更\n③ L3（高级网络架构师）→ 复杂问题、设计变更\n④ Vendor（设备厂商）→ 硬件故障、固件 bug\n升级时需提供：故障时间、现象描述、已采取措施、影响范围。",
    pronunciation: "notify 的 no 读 /ˈnoʊ/，不是 /nɒ/。\nimmediately 重音在 me 上 /ˈmiː/。",
    quiz: [
      { q: "请立即通知供应商，怎么说？", a: "Please notify the vendor immediately." },
      { q: "网络故障升级有几个层级？", a: "网络故障升级通常有四个层级：① L1（值班人员）初步排查 ② L2（网络工程师）专业排障 ③ L3（高级架构师）复杂问题 ④ Vendor（设备厂商）硬件故障/固件 bug。升级时需提供故障时间、现象、已采取措施和影响范围。" },
    ],
  },
  {
    id: 1794,
    en: "The network service has been restored.",
    cn: "网络服务已经恢复。",
    ipa: "/ðə ˈnɛtwɜːrk ˈsɜːrvɪs hæz biːn rɪˈstɔːrd/",
    tags: ["第1794句", "服务恢复", "★★★★★"],
    when: "网络故障排除后，确认网络服务已恢复正常。这是故障处理的最终目标。",
    words: [
      { w: "network service", ipa: "/ˈnɛtwɜːrk ˈsɜːrvɪs/", pos: "名词短语", cn: "网络服务", memory: "network = 网络；service = 服务。\nnetwork service = 网络服务，包括连通性、DNS、DHCP 等。\n网络服务恢复 = 所有网络功能恢复正常。", phonics: "network 读 /ˈnɛtwɜːrk/，service 读 /ˈsɜːrvɪs/。", collocations: [["network service", "网络服务"], ["service outage", "服务中断"], ["service restoration", "服务恢复"]], examples: [["The network service is down.", "网络服务中断。"], ["Check network service status.", "检查网络服务状态。"]] },
      { w: "restored", ipa: "/rɪˈstɔːrd/", pos: "动词过去分词", cn: "已恢复", memory: "restore = 恢复/还原；-d = 过去分词。\nrestored = 已恢复的。\nservice has been restored = 服务已恢复。\n网络故障处理的最终目标就是 restore service。", phonics: "re 读 /rɪ/，stored 读 /stɔːrd/。", collocations: [["service restored", "服务已恢复"], ["power restored", "电力已恢复"], ["connection restored", "连接已恢复"]], examples: [["The network is restored.", "网络已恢复。"], ["Service has been restored.", "服务已恢复。"]] },
    ],
    phrases: [
      { p: "network service has been restored", ipa: "/ˈnɛtwɜːrk ˈsɜːrvɪs hæz biːn rɪˈstɔːrd/", cn: "网络服务已经恢复", why: "network service + has been restored = 网络服务已恢复。这是故障处理完成后的标准汇报用语。" },
    ],
    grammar: [
      { q: "has been restored 和 is back 有什么区别？", a: "has been restored = 已恢复（正式用语，强调恢复过程已完成）\nis back = 恢复了（口语化，简单直接）\n✅ The network service has been restored.（网络服务已恢复 → 正式交接汇报）\n✅ The network is back.（网络恢复了 → 口头交流）\n交接文档和正式汇报用 has been restored。" },
    ],
    pattern: "The + 服务/系统 + has been restored",
    patternExamples: [
      { en: "The power service has been restored.", cn: "电力服务已恢复。", words: [{ w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }] },
      { en: "The cooling system has been restored.", cn: "制冷系统已恢复。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
      { en: "The monitoring system has been restored.", cn: "监控系统已恢复。", words: [{ w: "monitoring", ipa: "/ˈmɒnɪtər/", cn: "监控", phonics: "mon 读 /mɒn/，itor 读 /ɪtər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }] },
    ],
    thinking: "网络服务恢复后的验证步骤：\n① Ping 测试 → 确认连通性恢复\n② 带宽测试 → 确认性能正常\n③ 业务验证 → 确认应用层服务正常\n④ 告警清除 → 确认监控系统不再报警\n⑤ 记录故障报告 → 包括故障时间、原因、处理过程、改进措施。",
    pronunciation: "restored 的 re 读 /rɪ/，不是 /riː/。\nservice 的 ser 读 /sɜːr/，不是 /sɛr/。",
    quiz: [
      { q: "监控系统已恢复，怎么说？", a: "The monitoring system has been restored." },
      { q: "网络服务恢复后需要做什么验证？", a: "网络服务恢复后验证：① Ping 测试确认连通性 ② 带宽测试确认性能 ③ 业务验证确认应用层正常 ④ 告警清除确认监控正常 ⑤ 记录故障报告（时间、原因、处理过程、改进措施）。" },
    ],
  },
  {
    id: 1795,
    en: "All network alarms have been cleared.",
    cn: "所有网络告警已经恢复。",
    ipa: "/ɔːl ˈnɛtwɜːrk əˈlɑːrmz hæv biːn klɪrd/",
    tags: ["第1795句", "告警恢复", "★★★★★"],
    when: "确认所有网络相关告警已全部清除，网络系统恢复正常运行状态。",
    words: [
      { w: "network alarms", ipa: "/ˈnɛtwɜːrk əˈlɑːrmz/", pos: "名词短语", cn: "网络告警", memory: "network = 网络；alarms = 告警（复数）。\nnetwork alarms = 网络告警，网络系统产生的所有告警。\n所有告警恢复 = 网络系统完全正常。", phonics: "network 读 /ˈnɛtwɜːrk/，alarms 读 /əˈlɑːrmz/。", collocations: [["network alarms", "网络告警"], ["active alarms", "活动告警"], ["alarm list", "告警列表"]], examples: [["Check network alarms.", "检查网络告警。"], ["No active alarms.", "无活动告警。"]] },
      { w: "cleared", ipa: "/klɪrd/", pos: "动词过去分词", cn: "已清除/已恢复", memory: "clear = 清除/清除；-ed = 过去分词。\ncleared = 已清除的/已恢复的。\nalarm cleared = 告警已恢复/已清除。\n在网络监控中，cleared 表示告警条件不再满足。", phonics: "cleared 读 /klɪrd/，clear 读 /klɪr/。", collocations: [["alarm cleared", "告警恢复"], ["fault cleared", "故障清除"], ["errors cleared", "错误已清除"]], examples: [["All alarms are cleared.", "所有告警已恢复。"], ["The fault has been cleared.", "故障已清除。"]] },
    ],
    phrases: [
      { p: "all network alarms have been cleared", ipa: "/ɔːl ˈnɛtwɜːrk əˈlɑːrmz hæv biːn klɪrd/", cn: "所有网络告警已经恢复", why: "all + network alarms + have been cleared = 所有网络告警已恢复。这是交接时最理想的汇报结果。" },
    ],
    grammar: [
      { q: "cleared 和 resolved 有什么区别？", a: "cleared = 已清除（告警条件不再满足，自动或手动清除）\nresolved = 已解决（问题根因已找到并修复）\n✅ The alarm has been cleared.（告警已恢复 → 告警消失了）\n✅ The issue has been resolved.（问题已解决 → 根因已修复）\n告警 cleared 不一定意味着问题 resolved（可能是临时恢复）。" },
    ],
    pattern: "All + 告警类型 + have been cleared",
    patternExamples: [
      { en: "All security alarms have been cleared.", cn: "所有安防告警已恢复。", words: [{ w: "security", ipa: "/sɪˈkjʊrɪti/", cn: "安防", phonics: "se 读 /sɪ/，curity 读 /kjʊrɪti/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
      { en: "All fire alarms have been cleared.", cn: "所有消防告警已恢复。", words: [{ w: "fire", ipa: "/faɪər/", cn: "消防", phonics: "fire 读 /faɪər/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
      { en: "All power alarms have been cleared.", cn: "所有电力告警已恢复。", words: [{ w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }, { w: "alarms", ipa: "/əˈlɑːrm/", cn: "告警", phonics: "a 读 /ə/，larm 读 /lɑːrm/" }, { w: "cleared", ipa: "/klɪər/", cn: "恢复", phonics: "clear 读 /klɪər/" }] },
    ],
    thinking: "告警恢复后的交接要点：\n① 确认所有告警确实清除（非暂时消失）\n② 检查是否还有相关 warning（降级但未清除）\n③ 确认根因已找到并处理（避免复发）\n④ 更新告警日志和处理记录\n⑤ 如有必要，设置持续监控观察一段时间。",
    pronunciation: "cleared 读 /klɪrd/，不是 /klɪərd/。\nalarms 的 s 读 /z/。",
    quiz: [
      { q: "所有消防告警已恢复，怎么说？", a: "All fire alarms have been cleared." },
      { q: "cleared 和 resolved 有什么区别？", a: "cleared = 告警已清除（告警条件不再满足），resolved = 问题已解决（根因已修复）。告警 cleared 不一定意味着问题 resolved，可能只是临时恢复。交接时两者都需要确认。" },
    ],
  },
  {
    id: 1796,
    en: "Please update the network maintenance records.",
    cn: "请更新网络维护记录。",
    ipa: "/pliːz ˌʌpˈdeɪt ðə ˈnɛtwɜːrk ˈmeɪntənəns ˈrɛkərdz/",
    tags: ["第1796句", "维护记录", "★★★★"],
    when: "每次网络故障处理或维护操作后，都需要更新维护记录，确保操作可追溯。",
    words: [
      { w: "update", ipa: "/ˌʌpˈdeɪt/", pos: "动词", cn: "更新", memory: "up = 向上；date = 日期。\nupdate = 更新/使保持最新。\nupdate records = 更新记录。\n维护记录必须及时更新。", phonics: "up 读 /ʌp/，date 读 /deɪt/。", collocations: [["update records", "更新记录"], ["update the log", "更新日志"], ["update the status", "更新状态"]], examples: [["Please update the records.", "请更新记录。"], ["Update the maintenance log.", "更新维护日志。"]] },
      { w: "maintenance records", ipa: "/ˈmeɪntənəns ˈrɛkərdz/", pos: "名词短语", cn: "维护记录", memory: "maintenance = 维护/保养；records = 记录。\nmaintenance records = 维护记录，记录所有维护操作和故障处理。\n数据中心要求所有操作都有记录，便于审计和追溯。", phonics: "main 读 /ˈmeɪn/，tenance 读 /tənəns/，records 读 /ˈrɛkərdz/。", collocations: [["maintenance records", "维护记录"], ["update records", "更新记录"], ["review records", "审查记录"]], examples: [["Update the maintenance log.", "更新维护日志。"], ["Check the maintenance history.", "检查维护历史。"]] },
    ],
    phrases: [
      { p: "update the network maintenance records", ipa: "/ˌʌpˈdeɪt ðə ˈnɛtwɜːrk ˈmeɪntənəns ˈrɛkərdz/", cn: "更新网络维护记录", why: "update + the network + maintenance records = 更新网络维护记录。维护记录是数据中心运维的重要文档，确保操作可追溯。" },
    ],
    grammar: [
      { q: "records 和 logs 有什么区别？", a: "records = 记录（正式文档，包括维护计划、操作报告等）\nlogs = 日志（系统自动生成的事件记录）\n✅ Update the maintenance records.（更新维护记录 → 人工记录的文档）\n✅ Check the system logs.（检查系统日志 → 自动生成的日志）\n维护记录是人工填写的，日志是系统生成的。" },
    ],
    pattern: "Please update the + 系统 + maintenance records",
    patternExamples: [
      { en: "Please update the power maintenance records.", cn: "请更新电力维护记录。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "Please update the cooling maintenance records.", cn: "请更新制冷维护记录。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
      { en: "Please update the security maintenance records.", cn: "请更新安防维护记录。", words: [{ w: "update", ipa: "/ʌpˈdeɪt/", cn: "更新", phonics: "up 读 /ʌp/，date 读 /deɪt/" }, { w: "security", ipa: "/sɪˈkjʊrɪti/", cn: "安防", phonics: "se 读 /sɪ/，curity 读 /kjʊrɪti/" }, { w: "maintenance", ipa: "/ˈmeɪntɪnəns/", cn: "维护", phonics: "main 读 /meɪn/，tenance 读 /tɪnəns/" }] },
    ],
    thinking: "维护记录应包含的内容：\n① 操作时间（精确到分钟）\n② 操作人员\n③ 操作类型（巡检/故障处理/预防维护/变更）\n④ 操作内容描述\n⑤ 处理结果\n⑥ 后续跟进事项\n数据中心审计时维护记录是必查文档。",
    pronunciation: "maintenance 的 main 读 /ˈmeɪn/，不是 /meɪnˈtɛ/。\nrecords 的 re 读 /rɛ/，不是 /rɪ/。",
    quiz: [
      { q: "请更新电力维护记录，怎么说？", a: "Please update the power maintenance records." },
      { q: "维护记录应包含哪些内容？", a: "维护记录应包含：① 操作时间（精确到分钟）② 操作人员 ③ 操作类型（巡检/故障处理/预防维护/变更）④ 操作内容描述 ⑤ 处理结果 ⑥ 后续跟进事项。这些是数据中心审计的必查文档。" },
    ],
  },
  {
    id: 1797,
    en: "The network inspection has been completed successfully.",
    cn: "网络巡检已经顺利完成。",
    ipa: "/ðə ˈnɛtwɜːrk ɪnˈspɛkʃən hæz biːn kəmˈpliːtɪd səkˈsɛsfəli/",
    tags: ["第1797句", "巡检完成", "★★★★★"],
    when: "确认网络系统巡检已全部完成，所有检查项目均已通过。",
    words: [
      { w: "network inspection", ipa: "/ˈnɛtwɜːrk ɪnˈspɛkʃən/", pos: "名词短语", cn: "网络巡检", memory: "network = 网络；inspection = 巡检/检查。\nnetwork inspection = 网络巡检，系统性检查网络设备状态。\n交接时必须完成网络巡检。", phonics: "network 读 /ˈnɛtwɜːrk/，inspection 读 /ɪnˈspɛkʃən/。", collocations: [["network inspection", "网络巡检"], ["daily inspection", "每日巡检"], ["inspection report", "巡检报告"]], examples: [["Complete the inspection.", "完成巡检。"], ["Submit the inspection report.", "提交巡检报告。"]] },
      { w: "completed successfully", ipa: "/kəmˈpliːtɪd səkˈsɛsfəli/", pos: "动词短语", cn: "顺利完成", memory: "completed = 已完成；successfully = 成功地。\ncompleted successfully = 顺利完成。\n巡检顺利完成 = 所有检查项均已通过。", phonics: "com 读 /kəm/，pleted 读 /ˈpliːtɪd/，successfully 读 /səkˈsɛsfəli/。", collocations: [["completed successfully", "顺利完成"], ["deployed successfully", "成功部署"], ["tested successfully", "成功测试"]], examples: [["The task was completed successfully.", "任务顺利完成。"], ["The deployment was successful.", "部署成功。"]] },
    ],
    phrases: [
      { p: "network inspection has been completed successfully", ipa: "/ˈnɛtwɜːrk ɪnˈspɛkʃən hæz biːn kəmˈpliːtɪd səkˈsɛsfəli/", cn: "网络巡检已经顺利完成", why: "network inspection + has been completed + successfully = 网络巡检顺利完成。这是交接巡检完成后的标准汇报。" },
    ],
    grammar: [
      { q: "has been completed 和 is complete 有什么区别？", a: "has been completed = 已完成（现在完成时被动语态，强调动作完成）\nis complete = 是完整的（形容词，描述状态）\n✅ The inspection has been completed.（巡检已完成 → 强调动作）\n✅ The inspection is complete.（巡检是完整的 → 描述状态）\n交接汇报两者都可以用，has been completed 更强调'刚刚完成'。" },
    ],
    pattern: "The + 巡检类型 + has been completed successfully",
    patternExamples: [
      { en: "The power inspection has been completed successfully.", cn: "电力巡检已顺利完成。", words: [{ w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }] },
      { en: "The cooling inspection has been completed successfully.", cn: "制冷巡检已顺利完成。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }] },
      { en: "The security inspection has been completed successfully.", cn: "安防巡检已顺利完成。", words: [{ w: "security", ipa: "/sɪˈkjʊrɪti/", cn: "安防", phonics: "se 读 /sɪ/，curity 读 /kjʊrɪti/" }] },
    ],
    thinking: "网络巡检完成后的交接确认：\n① 所有检查项已完成\n② 无异常发现（或异常已记录）\n③ 巡检报告已填写\n④ 需要关注的事项已告知\n⑤ 下一班次需注意的持续监控项已交代。",
    pronunciation: "inspection 的 in 读 /ɪn/，不是 /aɪn/。\nsuccessfully 重音在 cess 上 /sɛs/。",
    quiz: [
      { q: "电力巡检已顺利完成，怎么说？", a: "The power inspection has been completed successfully." },
      { q: "网络巡检完成后交接需要确认什么？", a: "网络巡检完成后交接确认：① 所有检查项已完成 ② 无异常发现（或已记录）③ 巡检报告已填写 ④ 需关注事项已告知 ⑤ 下一班次持续监控项已交代。" },
    ],
  },
  {
    id: 1798,
    en: "The network system is stable.",
    cn: "网络系统运行稳定。",
    ipa: "/ðə ˈnɛtwɜːrk ˈsɪstəm ɪz ˈsteɪbəl/",
    tags: ["第1798句", "系统稳定", "★★★★★"],
    when: "确认网络系统整体运行稳定，无频繁告警或性能波动。",
    words: [
      { w: "network system", ipa: "/ˈnɛtwɜːrk ˈsɪstəm/", pos: "名词短语", cn: "网络系统", memory: "network = 网络；system = 系统。\nnetwork system = 网络系统，包括交换机、路由器、防火墙等。\n网络系统稳定 = 所有网络设备正常运行。", phonics: "network 读 /ˈnɛtwɜːrk/，system 读 /ˈsɪstəm/。", collocations: [["network system", "网络系统"], ["system status", "系统状态"], ["system performance", "系统性能"]], examples: [["Check the network system.", "检查网络系统。"], ["The system is stable.", "系统稳定。"]] },
      { w: "stable", ipa: "/ˈsteɪbəl/", pos: "形容词", cn: "稳定的", memory: "stable = 稳定的/稳固的。\nnetwork is stable = 网络稳定。\nstable 比 normal 更强调'持续稳定、无波动'。", phonics: "sta 读 /steɪ/，ble 读 /bəl/。", collocations: [["system stable", "系统稳定"], ["network stable", "网络稳定"], ["stable connection", "稳定连接"]], examples: [["The system is stable.", "系统稳定。"], ["The connection is stable.", "连接稳定。"]] },
    ],
    phrases: [
      { p: "network system is stable", ipa: "/ˈnɛtwɜːrk ˈsɪstəm ɪz ˈsteɪbəl/", cn: "网络系统运行稳定", why: "network system + is stable = 网络系统稳定。stable 强调系统持续稳定运行，无异常波动。" },
    ],
    grammar: [
      { q: "stable 和 normal 有什么区别？", a: "stable = 稳定的（强调持续性，无波动无变化）\nnormal = 正常的（强调在标准范围内）\n✅ The network is stable.（网络稳定 → 持续运行无波动）\n✅ The network is normal.（网络正常 → 参数在正常范围）\nstable 比 normal 更正面，表示不仅正常，而且稳定。" },
    ],
    pattern: "The + 系统 + is stable",
    patternExamples: [
      { en: "The power system is stable.", cn: "电力系统稳定。", words: [{ w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "stable", ipa: "/ˈsteɪbl/", cn: "稳定", phonics: "sta 读 /steɪ/，ble 读 /bl/" }] },
      { en: "The cooling system is stable.", cn: "制冷系统稳定。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "stable", ipa: "/ˈsteɪbl/", cn: "稳定", phonics: "sta 读 /steɪ/，ble 读 /bl/" }] },
      { en: "The server cluster is stable.", cn: "服务器集群稳定。", words: [{ w: "server", ipa: "/ˈsɜːrvər/", cn: "服务器", phonics: "serv 读 /sɜːrv/，er 读 /ər/" }, { w: "stable", ipa: "/ˈsteɪbl/", cn: "稳定", phonics: "sta 读 /steɪ/，ble 读 /bl/" }] },
    ],
    thinking: "网络系统稳定的表现：\n① 无频繁告警（偶发可自动恢复的不算）\n② 带宽利用率平稳（无异常波动）\n③ 延迟稳定（无突增突降）\n④ 丢包率为 0\n⑤ 设备 CPU/内存使用率平稳\n交接时汇报'stable'意味着下一班次可以放心接手。",
    pronunciation: "stable 的 sta 读 /steɪ/，不是 /stæ/。\nsystem 的 sys 读 /sɪs/，不是 /saɪs/。",
    quiz: [
      { q: "电力系统稳定，怎么说？", a: "The power system is stable." },
      { q: "网络系统稳定有哪些表现？", a: "网络系统稳定的表现：① 无频繁告警 ② 带宽利用率平稳 ③ 延迟稳定无突增 ④ 丢包率为 0 ⑤ 设备 CPU/内存使用率平稳。汇报 stable 意味着下一班次可以放心接手。" },
    ],
  },
  {
    id: 1799,
    en: "There are no outstanding network issues.",
    cn: "目前没有未解决的网络问题。",
    ipa: "/ðɛr ɑːr noʊ aʊtˈstændɪŋ ˈnɛtwɜːrk ˈɪʃuːz/",
    tags: ["第1799句", "无遗留问题", "★★★★★"],
    when: "确认交接时没有未解决的网络问题，所有已知问题都已处理或关闭。",
    words: [
      { w: "outstanding", ipa: "/aʊtˈstændɪŋ/", pos: "形容词", cn: "未解决的/待处理的", memory: "out = 外；standing = 站立。\noutstanding = 未解决的/待处理的（原意：站在外面还没处理）。\n也可以表示'杰出的/优秀的'（outstanding performance）。\n这里取'未解决'的含义。", phonics: "out 读 /aʊt/，standing 读 /ˈstændɪŋ/。", collocations: [["outstanding issues", "未解决的问题"], ["outstanding tasks", "待处理任务"], ["outstanding alarms", "未恢复告警"]], examples: [["No outstanding issues.", "没有未解决的问题。"], ["Check outstanding tasks.", "检查待处理任务。"]] },
      { w: "network issues", ipa: "/ˈnɛtwɜːrk ˈɪʃuːz/", pos: "名词短语", cn: "网络问题", memory: "network = 网络；issues = 问题（复数）。\nnetwork issues = 网络问题，包括故障、告警、性能问题等。\nno outstanding issues = 没有未解决的问题。", phonics: "network 读 /ˈnɛtwɜːrk/，issues 读 /ˈɪʃuːz/。", collocations: [["network issues", "网络问题"], ["resolve issues", "解决问题"], ["report issues", "报告问题"]], examples: [["No network issues found.", "未发现网络问题。"], ["Report the issues to the team.", "向团队报告问题。"]] },
    ],
    phrases: [
      { p: "no outstanding network issues", ipa: "/noʊ aʊtˈstændɪŋ ˈnɛtwɜːrk ˈɪʃuːz/", cn: "没有未解决的网络问题", why: "no + outstanding + network issues = 没有未解决的网络问题。这是交接时最理想的汇报状态，表示一切就绪。" },
    ],
    grammar: [
      { q: "outstanding 在这里是什么意思？", a: "outstanding 有两个含义：\n① 未解决的/待处理的（这里用这个含义）\n② 杰出的/优秀的\n✅ There are no outstanding issues.（没有未解决的问题 → 含义①）\n✅ She did an outstanding job.（她做得非常出色 → 含义②）\n在交接场景，outstanding = 未解决的/待处理的。" },
    ],
    pattern: "There are no outstanding + 系统 + issues",
    patternExamples: [
      { en: "There are no outstanding power issues.", cn: "没有未解决的电力问题。", words: [{ w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }, { w: "issues", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
      { en: "There are no outstanding cooling issues.", cn: "没有未解决的制冷问题。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "issues", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
      { en: "There are no outstanding security issues.", cn: "没有未解决的安防问题。", words: [{ w: "security", ipa: "/sɪˈkjʊrɪti/", cn: "安防", phonics: "se 读 /sɪ/，curity 读 /kjʊrɪti/" }, { w: "issues", ipa: "/ˈɪʃuː/", cn: "问题", phonics: "is 读 /ɪ/，sue 读 /ʃuː/" }] },
    ],
    thinking: "交接时确认无遗留问题的重要性：\n① 下一班次可以专注于新事件，不用处理历史遗留\n② 表明本班次已妥善处理所有发现的问题\n③ 如有遗留问题，必须明确告知下一班次并记录在交接日志\n④ 交接签字 = 确认双方对当前状态达成一致。",
    pronunciation: "outstanding 的 out 读 /aʊt/，不是 /oʊt/。\nissues 的 is 读 /ɪ/，sues 读 /ʃuːz/。",
    quiz: [
      { q: "没有未解决的电力问题，怎么说？", a: "There are no outstanding power issues." },
      { q: "交接时为什么要确认无遗留问题？", a: "交接时确认无遗留问题的重要性：① 下一班次可专注新事件 ② 表明本班次已妥善处理所有问题 ③ 如有遗留必须明确告知并记录 ④ 交接签字 = 双方对当前状态达成一致。" },
    ],
  },
  {
    id: 1800,
    en: "The network system is ready for normal operation.",
    cn: "网络系统已经恢复正常运行。",
    ipa: "/ðə ˈnɛtwɜːrk ˈsɪstəm ɪz ˈrɛdi fər ˈnɔːrməl ˌɒpəˈreɪʃən/",
    tags: ["第1800句", "系统就绪", "★★★★★"],
    when: "确认网络系统已完全恢复，可以正常承载业务。这是网络交接的最终确认。",
    words: [
      { w: "ready for", ipa: "/ˈrɛdi fər/", pos: "介词短语", cn: "准备好/就绪", memory: "ready = 准备好的；for = 为了。\nready for = 为...做好准备。\nready for normal operation = 准备好正常运行。", phonics: "ready 读 /ˈrɛdi/，for 弱读为 /fər/。", collocations: [["ready for operation", "准备好运行"], ["ready for service", "准备好服务"], ["ready for deployment", "准备好部署"]], examples: [["The system is ready.", "系统就绪。"], ["We are ready for the test.", "我们准备好测试了。"]] },
      { w: "normal operation", ipa: "/ˈnɔːrməl ˌɒpəˈreɪʃən/", pos: "名词短语", cn: "正常运行", memory: "normal = 正常的；operation = 运行/操作。\nnormal operation = 正常运行/正常运作。\nready for normal operation = 可以正常运行。", phonics: "nor 读 /nɔːr/，mal 读 /məl/，op 读 /ɒp/，eration 读 /əˈreɪʃən/。", collocations: [["normal operation", "正常运行"], ["resume normal operation", "恢复正常运行"], ["during normal operation", "正常运行期间"]], examples: [["Resume normal operation.", "恢复正常运行。"], ["The system is in normal operation.", "系统正常运行中。"]] },
    ],
    phrases: [
      { p: "ready for normal operation", ipa: "/ˈrɛdi fər ˈnɔːrməl ˌɒpəˈreɪʃən/", cn: "恢复正常运行", why: "ready + for + normal operation = 准备好正常运行。这是交接的最终确认，表示系统已完全就绪。" },
    ],
    grammar: [
      { q: "is ready for 和 has resumed 有什么区别？", a: "is ready for = 已准备好（状态，可以开始）\nhas resumed = 已恢复（动作，已经开始）\n✅ The system is ready for normal operation.（系统已准备好正常运行 → 状态就绪）\n✅ The system has resumed normal operation.（系统已恢复正常运行 → 动作完成）\n交接汇报用 is ready for，表示'已就绪，可以交接'。" },
    ],
    pattern: "The + 系统 + is ready for normal operation",
    patternExamples: [
      { en: "The power system is ready for normal operation.", cn: "电力系统已恢复正常运行。", words: [{ w: "power", ipa: "/ˈpaʊər/", cn: "电力", phonics: "pow 读 /paʊ/，er 读 /ər/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The cooling system is ready for normal operation.", cn: "制冷系统已恢复正常运行。", words: [{ w: "cooling", ipa: "/ˈkuːlɪŋ/", cn: "冷却", phonics: "cool 读 /kuːl/，ing 读 /ɪŋ/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
      { en: "The security system is ready for normal operation.", cn: "安防系统已恢复正常运行。", words: [{ w: "security", ipa: "/sɪˈkjʊrɪti/", cn: "安防", phonics: "se 读 /sɪ/，curity 读 /kjʊrɪti/" }, { w: "system", ipa: "/ˈsɪstəm/", cn: "系统", phonics: "sys 读 /sɪs/，tem 读 /təm/" }, { w: "normal", ipa: "/ˈnɔːrməl/", cn: "正常", phonics: "nor 读 /nɔːr/，mal 读 /məl/" }] },
    ],
    thinking: "网络系统交接完成的标志：\n① 所有检查项完成\n② 无活动告警（或已记录）\n③ 无遗留问题（或已告知）\n④ 系统稳定运行\n⑤ 双方确认签字\n'ready for normal operation' 是交接的最终确认语，表示一切就绪，可以正式交接。",
    pronunciation: "ready 的 rea 读 /rɛ/，不是 /riː/。\noperation 的 o 读 /ɒ/，不是 /oʊ/。",
    quiz: [
      { q: "电力系统已恢复正常运行，怎么说？", a: "The power system is ready for normal operation." },
      { q: "网络系统交接完成的标志是什么？", a: "网络系统交接完成的标志：① 所有检查项完成 ② 无活动告警（或已记录）③ 无遗留问题（或已告知）④ 系统稳定运行 ⑤ 双方确认签字。'ready for normal operation' 是最终确认语。" },
    ],
  },
];

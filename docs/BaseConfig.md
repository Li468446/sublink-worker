# 自定义基础配置指南

## 概述

如果你不知道如何配置 SingBox 和 Clash 的配置格式，请不要使用此功能。

我们正试图让用户能够根据自己的需求修改 SingBox 和 Clash 的基础配置。这是一个实验性功能，主要面向高级用户。

如果需要使用此功能，请确保你了解 SingBox 和 Clash 的配置格式，并能够正确配置。

> 注意：此功能目前还在早期开发阶段，可能会出现各种预期之外的问题，请谨慎使用

## 默认配置

### SingBox 默认配置

```json
{
  "dns": {
    "servers": [
      {
        "tag": "dns_proxy",
        "address": "tcp://1.1.1.1",
        "address_resolver": "dns_resolver",
        "strategy": "ipv4_only",
        "detour": "🚀 节点选择"
      },
      {
        "tag": "dns_direct", 
        "address": "https://dns.alidns.com/dns-query",
        "address_resolver": "dns_resolver",
        "strategy": "ipv4_only",
        "detour": "DIRECT"
      },
      {
        "tag": "dns_resolver",
        "address": "223.5.5.5",
        "detour": "DIRECT"
      },
      {
        "tag": "dns_success",
        "address": "rcode://success"
      },
      {
        "tag": "dns_refused",
        "address": "rcode://refused"
      },
      {
        "tag": "dns_fakeip",
        "address": "fakeip"
      }
    ],
    "rules": [
      {
        "outbound": "any",
        "server": "dns_resolver"
      },
      {
        "rule_set": "geolocation-!cn",
        "query_type": [
          "A",
          "AAAA"
        ],
        "server": "dns_fakeip"
      },
      {
        "rule_set": "geolocation-!cn",
        "query_type": [
          "CNAME"
        ],
        "server": "dns_proxy"
      },
      {
        "query_type": [
          "A",
          "AAAA",
          "CNAME"
        ],
        "invert": true,
        "server": "dns_refused",
        "disable_cache": true
      }
    ],
    "final": "dns_direct",
    "independent_cache": true,
    "fakeip": {
      "enabled": true,
      "inet4_range": "198.18.0.0/15",
      "inet6_range": "fc00::/18"
    }
  },
  "ntp": {
    "enabled": true,
    "server": "time.apple.com",
    "server_port": 123,
    "interval": "30m"
  },
  "inbounds": [
    { "type": "mixed", "tag": "mixed-in", "listen": "0.0.0.0", "listen_port": 2080 },
    { "type": "tun", "tag": "tun-in", "address": "172.19.0.1/30", "auto_route": true, "strict_route": true, "stack": "mixed", "sniff": true },
    { "type": "socks", "listen": "127.0.0.1", "listen_port": 2081, "tag": "REJECT-in" }
  ],
  "outbounds": [
    { "type": "socks", "server": "127.0.0.1", "server_port": 2081, "tag": "REJECT" },
    { "type": "direct", "tag": "DIRECT" }
  ],
  "route": {
    "rule_set": [
      {
        "tag": "geosite-geolocation-!cn",
        "type": "local",
        "format": "binary",
        "path": "geosite-geolocation-!cn.srs"
      }
    ],
    "rules": [
      {
        "inbound": ["DIRECT-in"],
        "action": "direct"
      }
    ]
  },
  "experimental": {
    "cache_file": {
      "enabled": true,
      "store_fakeip": true
    },
    "clash_api": { 
      "external_controller": "127.0.0.1:9090", 
      "external_ui": "dashboard" 
    } 
  }
}
```

### Clash 默认配置

```yaml
port: 7890                      # HTTP 代理端口，一般用于浏览器或系统代理设置
socks-port: 7891               # SOCKS5 代理端口，常用于程序（如 Telegram、Steam 等）设置代理
allow-lan: false               # 是否允许局域网设备访问 Clash 的代理服务，false 表示不允许
mode: Rule                     # Clash 的工作模式，这里是规则模式（Rule），也可为 global（全局）或 direct（直连）
log-level: info                # 日志等级，可选：silent、error、warning、info、debug，info 表示输出一般信息

dns:                           # DNS 设置部分
  enable: true                 # 启用 Clash 内建 DNS 服务
  ipv6: true                   # 启用 IPv6 查询支持
  respect-rules: true          # 是否遵守 Clash 的路由规则来选择 DNS 查询的代理或直连
  enhanced-mode: fake-ip       # 启用增强模式为 fake-ip（将 DNS 响应伪装成假 IP，用于识别域名流量）
  nameserver:                  # 默认的本地 DNS 查询服务器（优先使用 DoH 格式）
    - https://120.53.53.53/dns-query     # 腾讯云 DNS-over-HTTPS 服务
    - https://223.5.5.5/dns-query        # 阿里云 DNS-over-HTTPS 服务

  proxy-server-nameserver:     # 当域名走代理时使用的上游 DNS 服务器
    - https://120.53.53.53/dns-query
    - https://223.5.5.5/dns-query

  nameserver-policy:           # 针对不同域名分类使用不同的 DNS 上游策略
    geosite:cn,private:        # 匹配 geosite 数据库中 cn 区域和私有域名
      "https://120.53.53.53/dns-query"   # 使用国内 DoH
      "https://264960-opwrt.alidns.com/dns-query"
    geosite:geolocation-!cn:   # 匹配非中国大陆的域名（即 geolocation-!cn）
      "https://dns.cloudflare.com/dns-query"  # 使用 Cloudflare 的 DoH
      "https://dns.google/dns-query"          # 使用 Google 的 DoH

```

## 注意事项

1. **格式要求**：
   - SingBox 配置必须是有效的 JSON 格式
   - Clash 配置必须是有效的 YAML 格式
   - 目前不支持跨客户端的配置，例如：使用 Clash 的配置文件将无法在 SingBox 中使用
   - 配置中的必要字段不能缺失

2. **保留字段**：
   - 目前程序**不会**自动添加、覆盖任何字段。例如，如果在sing-box配置文件中缺失了`block`, `direct`等字段，将导致程序无法按照预期工作
   - 建议主要修改 DNS、NTP等基础配置，或者在提供的配置基础上修改

3. **配置验证**：
   - 保存前会进行基本的格式验证
   - 建议在本地测试配置是否可用后再使用

4. **持久化存储**：
   - 配置会通过 URL 参数保存
   - 可以通过分享链接分享你的自定义配置

## 配置保存

### 功能说明

- 支持保存自定义的SingBox和Clash基础配置，会以唯一ID的形式存储在KV中，保存期限为30天。
- 点击保存按钮后会生成一个配置ID，使用该ID可以访问到保存的配置。
- 你也可以直接使用通过API进行保存，详见[API文档](./API-doc.md)

### 使用方法

1. 选择配置类型（SingBox或Clash）
2. 在配置编辑器中粘贴你的配置并保存
3. 系统会生成一个配置ID并更新URL，直接点击`Convert`按钮即可获取对应订阅链接
4. 可以直接使用带有configId参数的URL

### 贡献

如果你有任何建议或问题，请随时在[GitHub](https://github.com/7Sageer/sublink-worker)上提交issue。

也欢迎提交PR来完善此功能

import { t } from './i18n';

// 基础规则集URL配置
// 用于sing-box的域名规则集基础URL
export const SITE_RULE_SET_BASE_URL = 'https://gh-proxy.com/https://raw.githubusercontent.com/lyc8503/sing-box-rules/refs/heads/rule-set-geosite/';
// 用于sing-box的IP规则集基础URL
export const IP_RULE_SET_BASE_URL = 'https://gh-proxy.com/https://raw.githubusercontent.com/lyc8503/sing-box-rules/refs/heads/rule-set-geoip/';
// 用于Clash的域名规则集基础URL
export const CLASH_SITE_RULE_SET_BASE_URL = 'https://gh-proxy.com/https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/';
// 用于Clash的IP规则集基础URL
export const CLASH_IP_RULE_SET_BASE_URL = 'https://gh-proxy.com/https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geoip/';
// 用于Surge的域名规则集基础URL
export const SURGE_SITE_RULE_SET_BASEURL = 'https://gh-proxy.com/https://github.com/NSZA156/surge-geox-rules/raw/refs/heads/release/geo/geosite/'
// 用于Surge的IP规则集基础URL
export const SURGE_IP_RULE_SET_BASEURL = 'https://gh-proxy.com/https://github.com/NSZA156/surge-geox-rules/raw/refs/heads/release/geo/geoip/'
// Custom rules
export const CUSTOM_RULES = [];
// Unified rule structure
export const UNIFIED_RULES = [

	/**
 * 定义一组规则配置对象，每个对象表示一个网络流量分类规则。
 * 每个规则包含名称、出站方式、域名规则和IP规则。
 * 用于根据访问的目标网站或IP地址将流量路由到不同的代理或直连通道。
 */
	{
		// 规则配置对象，用于定义广告拦截规则
		// name: 规则名称，显示为'Ad Block'
		// outbound: 出站规则名称，通过t函数获取国际化文本
		// site_rules: 网站规则数组，包含广告分类规则'category-ads-all'
		// ip_rules: IP规则数组，当前为空数组表示不使用IP规则
		name: 'Ad Block',
		outbound: t('outboundNames.Ad Block'),
		site_rules: ['category-ads-all'],
		ip_rules: []
	},

	{
		// 服务配置对象，定义AI服务的相关规则
		name: 'AI Services',
		// outbound名称，使用国际化翻译函数获取显示名称
		outbound: t('outboundNames.AI Services'),
		// 站点规则数组，包含AI相关的分类规则，排除中国地区的AI服务
		site_rules: ['category-ai-!cn',],
		// IP规则数组，当前为空，可后续添加基于IP的过滤规则
		ip_rules: ['us', 'uk', 'ca', 'au', 'jp', 'sg', 'kr']
	},

	{
		// 规则配置对象，用于定义Bilibili网站的匹配规则
		// name: 规则名称，用于标识该规则对应的服务商
		// outbound: 出站配置名称，通过国际化函数t获取对应的显示名称
		// site_rules: 网站域名匹配规则数组，包含需要匹配的域名关键词
		// ip_rules: IP地址匹配规则数组，用于匹配特定IP段（当前为空）
		name: 'Bilibili',
		outbound: t('outboundNames.Bilibili'),
		site_rules: ['bilibili'],
		ip_rules: []
	},

	{
		// 规则配置对象，用于定义特定网站的访问规则
		// name: 规则名称，标识该规则对应的网站平台
		// outbound: 出站代理配置，通过国际化函数获取对应的出站名称
		// site_rules: 网站域名匹配规则数组，用于匹配目标网站
		// ip_rules: IP地址规则数组，指定适用的IP地址范围
		name: 'Youtube',
		outbound: t('outboundNames.Youtube'),
		site_rules:  ['youtube','grok'],
		ip_rules: ['hk']
	},


	{
		// 规则配置对象，用于定义特定网站的访问规则
		// name: 规则名称，用于标识该规则配置
		// outbound: 出站代理名称，通过国际化函数t获取对应的显示文本
		// site_rules: 网站规则匹配数组，包含需要匹配的网站域名或标识符
		// ip_rules: IP地址规则匹配数组，包含需要匹配的IP地址或标识符
		name: 'Google',
		outbound: t('outboundNames.Google'),
		site_rules: ['google'],
		ip_rules: ['hk']
	},

	{
		// 配置名称，用于标识该规则组的类型为私有网络
		name: 'Private',
		// 出站规则名称，通过国际化函数t获取对应的显示文本
		outbound: t('outboundNames.Private'),
		// 站点规则列表，当前为空数组表示不包含特定站点规则
		site_rules: [],
		// IP地址规则列表，包含'private'表示匹配私有网络地址范围
		ip_rules: ['private']
	},

	{
		// 规则配置对象，用于定义特定地理位置的网络规则
		// name: 规则名称标识，表示中国地理位置
		// outbound: 出站规则名称，通过国际化函数t获取对应的显示文本
		// site_rules: 站点规则数组，包含地理定位和国家代码标识
		// ip_rules: IP地址规则数组，指定国家代码匹配规则
		name: 'Location:CN',
		outbound: t('outboundNames.Location:CN'),
		site_rules: ['geolocation-cn','cn'],
		ip_rules: ['cn']
	},

	{
		// Telegram配置对象
		// name: 规则名称，用于标识这是Telegram相关的规则
		// outbound: 出站代理名称，通过t函数获取国际化文本
		// site_rules: 网站规则数组，当前为空数组表示没有特定的网站规则
		// ip_rules: IP规则数组，包含'telegram'表示使用预定义的Telegram IP规则
		name: 'Telegram',
		outbound: t('outboundNames.Telegram'),
		site_rules: [],
		ip_rules: ['telegram']
	},

	{
		// 平台名称，用于标识社交平台类型
		name: 'Github',
		// 平台的出站链接显示名称，通过国际化函数t获取对应语言的显示文本
		outbound: t('outboundNames.Github'),
		// 站点规则数组，包含该平台相关的域名或站点标识符
		site_rules: ['github', 'gitlab'],
		// IP地址规则数组，用于匹配该平台相关的IP地址段（当前为空）
		ip_rules: []
	},

	{
		// Microsoft服务规则配置
		// 定义Microsoft相关服务的流量路由规则
		name: 'Microsoft',
		// 出站规则名称，通过国际化函数获取显示名称
		outbound: t('outboundNames.Microsoft'),
		// 站点规则列表，包含Microsoft相关的域名匹配规则
		site_rules: ['microsoft'],
		// IP规则列表，当前为空表示不使用特定IP规则
		ip_rules: []
	},

	{
		// Apple服务规则配置对象
		// 用于定义Apple相关服务的网络流量路由规则
		name: 'Apple',
		// 出站规则名称，通过国际化函数t获取显示名称
		outbound: t('outboundNames.Apple'),
		// 站点规则列表，包含Apple相关的域名匹配规则
		site_rules: ['apple'],
		// IP地址规则列表，当前为空表示不使用特定IP规则
		ip_rules: []
	},

	{
		// 社交媒体服务规则配置对象
		// 定义社交媒体平台的网络流量路由规则
		name: 'Social Media',
		// 出站规则名称，通过国际化函数获取显示名称
		outbound: t('outboundNames.Social Media'),
		// 站点规则列表，包含主流社交媒体平台的域名匹配规则
		site_rules: ['facebook', 'instagram', 'x', 'linkedin'],
		// IP地址规则列表，指定匹配来自香港地区的IP地址
		ip_rules: ['hk']
	},

	{
		// 流媒体服务规则配置对象
		// 定义流媒体平台的网络流量路由规则
		name: 'Streaming',
		// 出站规则名称，通过国际化函数获取显示名称
		outbound: t('outboundNames.Streaming'),
		// 站点规则列表，包含主流流媒体平台的域名匹配规则
		site_rules: ['netflix', 'hulu', 'disney', 'hbo', 'amazon','bahamut'],
		// IP地址规则列表，当前为空表示不使用特定IP规则
		ip_rules: []
	},

	{
		// 游戏平台规则配置对象
		// 定义游戏相关服务的网络流量路由规则
		name: 'Gaming',
		// 出站规则名称，通过国际化函数获取显示名称
		outbound: t('outboundNames.Gaming'),
		// 站点规则列表，包含主流游戏平台和厂商的域名匹配规则
		site_rules: ['steam', 'epicgames', 'ea', 'ubisoft', 'blizzard'],
		// IP地址规则列表，当前为空表示不使用特定IP规则
		ip_rules: []
	},

	{
		// 教育平台规则配置对象
		// 定义教育相关服务的网络流量路由规则
		name: 'Education',
		// 出站规则名称，通过国际化函数获取显示名称
		outbound: t('outboundNames.Education'),
		// 站点规则列表，包含主流在线教育平台和学术资源的域名匹配规则
		// category-scholar-!cn 表示非中国的学术类网站分类
		site_rules: ['coursera', 'edx', 'udemy', 'khanacademy', 'category-scholar-!cn'],
		// IP地址规则列表，当前为空表示不使用特定IP规则
		ip_rules: []
	},

	{
		// 金融服务规则配置对象
		// 定义金融相关服务的网络流量路由规则
		name: 'Financial',
		// 出站规则名称，通过国际化函数获取显示名称
		outbound: t('outboundNames.Financial'),
		// 站点规则列表，包含主流金融支付平台和金融机构的域名匹配规则
		site_rules: ['paypal', 'visa', 'mastercard','stripe','wise'],
		// IP地址规则列表，当前为空表示不使用特定IP规则
		ip_rules: []
	},

	{
		// 云服务规则配置对象
		// 定义云服务平台的网络流量路由规则
		name: 'Cloud Services',
		// 出站规则名称，通过国际化函数获取显示名称
		outbound: t('outboundNames.Cloud Services'),
		// 站点规则列表，包含主流云服务提供商和云存储平台的域名匹配规则
		site_rules: ['aws', 'azure', 'digitalocean', 'heroku', 'dropbox'],
		// IP地址规则列表，当前为空表示不使用特定IP规则
		ip_rules: []
	},

	{
		// 非中国地区规则配置对象
		// 定义非中国地区网站的网络流量路由规则
		name: 'Non-China',
		// 出站规则名称，通过国际化函数获取显示名称
		outbound: t('outboundNames.Non-China'),
		// 站点规则列表，包含地理位置非中国的网站分类规则
		site_rules: ['geolocation-!cn'],
		// IP地址规则列表，当前为空表示不使用特定IP规则
		ip_rules: []
	}

];

// 预定义规则集配置对象
// 定义了三种不同级别的规则集组合，用于快速选择常用的规则组合
export const PREDEFINED_RULE_SETS = {
	// 最小规则集：仅包含基本的地理位置和私有网络规则
	minimal: ['Location:CN', 'Private', 'Non-China'],
	// 平衡规则集：在最小规则集基础上增加常用的代理规则
	balanced: ['Location:CN', 'Private', 'Non-China','Github', 'Google', 'Youtube', 'AI Services', 'Telegram'],
	// 全面规则集：包含所有可用规则的完整规则集
	comprehensive: UNIFIED_RULES.map(rule => rule.name)
  };

  


// 从统一规则中生成站点规则集映射
// 使用reduce函数遍历所有规则，为每个站点规则创建对应的文件名映射
export const SITE_RULE_SETS = UNIFIED_RULES.reduce((acc, rule) => {
	// 遍历当前规则的所有站点规则
	rule.site_rules.forEach(site_rule => {
		// 为每个站点规则创建映射，键为规则名，值为对应的.srs文件名
		acc[site_rule] = `geosite-${site_rule}.srs`;
	});
	return acc;
}, {});


// 从统一规则中生成IP规则集映射
// 使用reduce函数遍历所有规则，为每个IP规则创建对应的文件名映射
export const IP_RULE_SETS = UNIFIED_RULES.reduce((acc, rule) => {
	// 遍历当前规则的所有IP规则
	rule.ip_rules.forEach(ip_rule => {
		// 为每个IP规则创建映射，键为规则名，值为对应的.srs文件名
		acc[ip_rule] = `geoip-${ip_rule}.srs`;
	});
	return acc;
}, {});


// 为Clash生成站点规则集映射（.mrs格式）
// 使用reduce函数遍历所有规则，为每个站点规则创建对应的.mrs文件名映射
export const CLASH_SITE_RULE_SETS = UNIFIED_RULES.reduce((acc, rule) => {
	// 遍历当前规则的所有站点规则
	rule.site_rules.forEach(site_rule => {
		// 为每个站点规则创建映射，键为规则名，值为对应的.mrs文件名
		acc[site_rule] = `${site_rule}.mrs`;
	});
	return acc;
}, {});


// 为Clash生成IP规则集映射（.mrs格式）
// 使用reduce函数遍历所有规则，为每个IP规则创建对应的.mrs文件名映射
export const CLASH_IP_RULE_SETS = UNIFIED_RULES.reduce((acc, rule) => {
	// 遍历当前规则的所有IP规则
	rule.ip_rules.forEach(ip_rule => {
		// 为每个IP规则创建映射，键为规则名，值为对应的.mrs文件名
		acc[ip_rule] = `${ip_rule}.mrs`;
	});
	return acc;
}, {});


/**
 * 根据选定的规则名称获取对应的出站规则列表
 *
 * @param {Array} selectedRuleNames - 选定的规则名称数组
 * @returns {Array} 包含匹配规则名称的数组，如果输入无效则返回空数组
 */
// Helper function to get outbounds based on selected rule names
export function getOutbounds(selectedRuleNames) {
    // 检查输入参数是否有效
    if (!selectedRuleNames || !Array.isArray(selectedRuleNames)) {
        return [];
    }
    // 过滤出匹配的规则并返回规则名称列表
    return UNIFIED_RULES
      .filter(rule => selectedRuleNames.includes(rule.name))
      .map(rule => rule.name);
}


/**
 * 根据选定的规则名称生成规则配置
 *
 * @param {Array|string} selectedRules - 选定的规则名称数组或预定义规则集名称
 * @param {Array} customRules - 自定义规则数组
 * @returns {Array} 生成的规则配置数组
 */
// Helper function to generate rules based on selected rule names
export function generateRules(selectedRules = [], customRules = []) {
	// 如果传入的是预定义规则集名称，则获取对应的规则集
	if (typeof selectedRules === 'string' && PREDEFINED_RULE_SETS[selectedRules]) {
	  selectedRules = PREDEFINED_RULE_SETS[selectedRules];
	}

  
		// 如果没有选择规则集或规则集为空，则使用最小规则集
	if (!selectedRules || selectedRules.length === 0) {
	  selectedRules = PREDEFINED_RULE_SETS.minimal;
	}

  
		// 初始化规则数组
	const rules = [];

	// 遍历所有统一规则，筛选出选定的规则并添加到结果数组中
	UNIFIED_RULES.forEach(rule => {
	  // 检查当前规则是否在选定的规则列表中
	  if (selectedRules.includes(rule.name)) {
		// 将匹配的规则添加到结果数组中
		rules.push({
		  site_rules: rule.site_rules,
		  ip_rules: rule.ip_rules,
		  domain_suffix: rule?.domain_suffix,
		  ip_cidr: rule?.ip_cidr,
		  outbound: rule.name
		});
	  }
	});

  
		// 反转自定义规则数组顺序
	customRules.reverse();
	// 遍历自定义规则，将它们添加到规则数组的开头
	customRules.forEach((rule) => {
		// 将自定义规则添加到结果数组的开头
		rules.unshift({
			site_rules: rule.site.split(','),
			ip_rules: rule.ip.split(','),
			domain_suffix: rule.domain_suffix ? rule.domain_suffix.split(',') : [],
			domain_keyword: rule.domain_keyword ? rule.domain_keyword.split(',') : [],
			ip_cidr: rule.ip_cidr ? rule.ip_cidr.split(',') : [],
			protocol: rule.protocol ? rule.protocol.split(',') : [],
			outbound: rule.name
		});
		});

	// 返回生成的规则数组
	return rules;
  }



// 生成Singbox规则集
export function generateRuleSets(selectedRules = [], customRules = []) {
  // 如果传入的是预定义规则集名称，则获取对应的规则集
  if (typeof selectedRules === 'string' && PREDEFINED_RULE_SETS[selectedRules]) {
    selectedRules = PREDEFINED_RULE_SETS[selectedRules];
  }
  
  // 如果没有选择规则集，则使用最小规则集
  if (!selectedRules || selectedRules.length === 0) {
    selectedRules = PREDEFINED_RULE_SETS.minimal;
  }

  const selectedRulesSet = new Set(selectedRules);

  const siteRuleSets = new Set();   // 站点规则集合
  const ipRuleSets = new Set();     // IP规则集合

  const ruleSets = [];

  // 根据选中的规则集收集需要的站点和IP规则
  UNIFIED_RULES.forEach(rule => {
    if (selectedRulesSet.has(rule.name)) {
      rule.site_rules.forEach(siteRule => siteRuleSets.add(siteRule));
      rule.ip_rules.forEach(ipRule => ipRuleSets.add(ipRule));
    }
  });
  
  // 生成站点规则集配置
  const site_rule_sets = Array.from(siteRuleSets).map(rule => ({
    tag: rule,
    type: 'remote',
    format: 'binary',
    url: `${SITE_RULE_SET_BASE_URL}${SITE_RULE_SETS[rule]}`,
  }));

  // 生成IP规则集配置
  const ip_rule_sets = Array.from(ipRuleSets).map(rule => ({
    tag: `${rule}-ip`,
    type: 'remote',
    format: 'binary',
    url: `${IP_RULE_SET_BASE_URL}${IP_RULE_SETS[rule]}`,
  }));

  // 如果未选择Non-China规则，则额外添加该规则集
  if(!selectedRules.includes('Non-China')){
	site_rule_sets.push({
		tag: 'geolocation-!cn',
		type: 'remote',
		format: 'binary',
		url: `${SITE_RULE_SET_BASE_URL}geosite-geolocation-!cn.srs`,
	});
  }

  // 处理自定义规则
  if(customRules){
	customRules.forEach(rule => {
		if(rule.site!=''){
			rule.site.split(',').forEach(site => {
				site_rule_sets.push({
					tag: site.trim(),
					type: 'remote',
					format: 'binary',
					url: `${SITE_RULE_SET_BASE_URL}geosite-${site.trim()}.srs`,
				});
			});
		}
		if(rule.ip!=''){
			rule.ip.split(',').forEach(ip => {
				ip_rule_sets.push({
					tag: `${ip.trim()}-ip`,
					type: 'remote',
					format: 'binary',
					url: `${IP_RULE_SET_BASE_URL}geoip-${ip.trim()}.srs`,
				});
			});
		}
	});
	}

  ruleSets.push(...site_rule_sets, ...ip_rule_sets);

  return { site_rule_sets, ip_rule_sets };
}

// 生成Clash规则集（使用.mrs格式）
export function generateClashRuleSets(selectedRules = [], customRules = []) {
  // 如果传入的是预定义规则集名称，则获取对应的规则集
  if (typeof selectedRules === 'string' && PREDEFINED_RULE_SETS[selectedRules]) {
    selectedRules = PREDEFINED_RULE_SETS[selectedRules];
  }
  
  // 如果没有选择规则集，则使用最小规则集
  if (!selectedRules || selectedRules.length === 0) {
    selectedRules = PREDEFINED_RULE_SETS.minimal;
  }

  const selectedRulesSet = new Set(selectedRules);

  const siteRuleSets = new Set();   // 站点规则集合
  const ipRuleSets = new Set();     // IP规则集合

  // 根据选中的规则集收集需要的站点和IP规则
  UNIFIED_RULES.forEach(rule => {
    if (selectedRulesSet.has(rule.name)) {
      rule.site_rules.forEach(siteRule => siteRuleSets.add(siteRule));
      rule.ip_rules.forEach(ipRule => ipRuleSets.add(ipRule));
    }
  });

  // 初始化规则提供者对象
  const site_rule_providers = {};
  const ip_rule_providers = {};

  // 生成站点规则提供者配置
  Array.from(siteRuleSets).forEach(rule => {
    site_rule_providers[rule] = {
      type: 'http',
      format: 'mrs',
      behavior: 'domain',
      url: `${CLASH_SITE_RULE_SET_BASE_URL}${CLASH_SITE_RULE_SETS[rule]}`,
      path: `./ruleset/${CLASH_SITE_RULE_SETS[rule]}`,
      interval: 86400
    };
  });

  // 生成IP规则提供者配置
  Array.from(ipRuleSets).forEach(rule => {
    ip_rule_providers[rule] = {
      type: 'http',
      format: 'mrs',
      behavior: 'ipcidr',
      url: `${CLASH_IP_RULE_SET_BASE_URL}${CLASH_IP_RULE_SETS[rule]}`,
      path: `./ruleset/${CLASH_IP_RULE_SETS[rule]}`,
      interval: 86400
    };
  });

  // 如果未选择Non-China规则，则额外添加该规则集
  if(!selectedRules.includes('Non-China')){
    site_rule_providers['geolocation-!cn'] = {
      type: 'http',
      format: 'mrs',
      behavior: 'domain',
      url: `${CLASH_SITE_RULE_SET_BASE_URL}geolocation-!cn.mrs`,
      path: './ruleset/geolocation-!cn.mrs',
      interval: 86400
    };
  }

  // 添加自定义规则
  // 遍历所有自定义规则，为每个站点和IP创建对应的规则提供者配置
  if(customRules){
    customRules.forEach(rule => {
      // 处理站点规则
      if(rule.site!=''){
        rule.site.split(',').forEach(site => {
          const site_trimmed = site.trim();
          site_rule_providers[site_trimmed] = {
            type: 'http',
            format: 'mrs',
            behavior: 'domain',
            url: `${CLASH_SITE_RULE_SET_BASE_URL}${site_trimmed}.mrs`,
            path: `./ruleset/${site_trimmed}.mrs`,
            interval: 86400
          };
        });
      }
      // 处理IP规则
      if(rule.ip!=''){
        rule.ip.split(',').forEach(ip => {
          const ip_trimmed = ip.trim();
          ip_rule_providers[ip_trimmed] = {
            type: 'http',
            format: 'mrs',
            behavior: 'ipcidr',
            url: `${CLASH_IP_RULE_SET_BASE_URL}${ip_trimmed}.mrs`,
            path: `./ruleset/${ip_trimmed}.mrs`,
            interval: 86400
          };
        });
      }
    });
  }


/**
 * 返回规则提供者对象
 *
 * @returns {Object} 包含站点规则提供者和IP规则提供者的对象
 * @returns {Array} site_rule_providers - 站点规则提供者数组
 * @returns {Array} ip_rule_providers - IP规则提供者数组
 */
  return { site_rule_providers, ip_rule_providers };
}


// Singbox配置
export const SING_BOX_CONFIG = {
	/**
	 * DNS 配置部分
	 * 包含 DNS 服务器定义、解析规则、最终使用的 DNS 和 FakeIP 设置
	 */
	dns: {
		/**
		 * DNS 服务器列表
		 * 每个对象代表一个 DNS 服务器配置，包含标签、地址、解析策略等信息
		 */
		servers: [
			{
				tag: "dns_proxy",                 // 标签名称，用于标识该 DNS 服务器
				address: "tcp://1.1.1.1",         // 使用 TCP 协议连接的 DNS 地址
				address_resolver: "dns_resolver", // 解析 address 所需的 DNS 服务器标签
				strategy: "ipv4_only",            // 只使用 IPv4 进行解析
				detour: "🚀 节点选择"              // 流量出口标签，表示通过代理节点发送请求
			},
			{
				tag: "dns_direct",
				address: "https://dns.alidns.com/dns-query",
				address_resolver: "dns_resolver",
				strategy: "ipv4_only",
				detour: "DIRECT"                  // 直连方式发送 DNS 请求
			},
			{
				tag: "dns_resolver",
				address: "223.5.5.5",
				detour: "DIRECT"
			},
			{
				tag: "dns_success",
				address: "rcode://success"        // 返回成功响应码的虚拟 DNS
			},
			{
				tag: "dns_refused",
				address: "rcode://refused"        // 返回拒绝响应码的虚拟 DNS
			},
			{
				tag: "dns_fakeip",
				address: "fakeip"                 // 使用 FakeIP 模式进行解析
			}
		],
		/**
		 * DNS 解析规则列表
		 * 控制不同条件下的 DNS 查询应使用哪个服务器处理
		 */
		rules: [
			{
				outbound: "any",                  // 所有出站流量
				server: "dns_resolver"            // 使用 dns_resolver 服务器解析
			},
			{
				rule_set: "geolocation-!cn",      // 匹配非中国地区的规则集
				query_type: [
					"A",
					"AAAA"
				],
				server: "dns_fakeip"              // 对 A/AAAA 类型查询使用 FakeIP
			},
			{
				rule_set: "geolocation-!cn",
				query_type: [
					"CNAME"
				],
				server: "dns_proxy"               // 对 CNAME 查询使用代理 DNS
			},
			{
				query_type: [
					"A",
					"AAAA",
					"CNAME"
				],
				invert: true,                     // 反向匹配（即不匹配上述类型）
				server: "dns_refused",            // 返回拒绝响应
				disable_cache: true               // 禁用缓存
			}
		],
		final: "dns_direct",                    // 默认 DNS 服务器
		independent_cache: true,                // 启用独立缓存机制
		fakeip: {
			enabled: true,                        // 启用 FakeIP 功能
			inet4_range: "198.18.0.0/15",        // IPv4 FakeIP 分配范围
			inet6_range: "fc00::/18"             // IPv6 FakeIP 分配范围
		}
	},
	/**
	 * NTP 时间同步配置
	 * 用于校准本地时间，确保协议正常运行
	 */
	ntp: {
		enabled: true,                          // 启用 NTP
		server: 'time.apple.com',               // NTP 服务器地址
		server_port: 123,                       // NTP 端口
		interval: '30m'                         // 同步间隔为 30 分钟
	},
	/**
	 * 入站配置列表
	 * 定义接收外部流量的监听端口和协议类型
	 */
	inbounds: [
		{ type: 'mixed', tag: 'mixed-in', listen: '0.0.0.0', listen_port: 2080 },  // 混合协议入站
		{ type: 'tun', tag: 'tun-in', address: '172.19.0.1/30', auto_route: true, strict_route: true, stack: 'mixed', sniff: true }  // TUN 接口入站
	],
	/**
	 * 出站配置列表
	 * 定义流量的出口方式，如直连或阻止
	 */
	outbounds: [
		{ type: 'block', tag: 'REJECT' },       // 阻止流量
		{ type: "direct", tag: 'DIRECT' }       // 直接连接
	],
	/**
	 * 路由配置部分
	 * 包括规则集定义和路由规则列表
	 */
	route : {
		/**
		 * 规则集定义列表
		 * 指定本地规则文件的位置和格式
		 */
		"rule_set": [
            {
                "tag": "geosite-geolocation-!cn",      // 规则集标签
                "type": "local",                       // 类型为本地规则
                "format": "binary",                    // 文件格式为二进制
                "path": "geosite-geolocation-!cn.srs"  // 规则文件路径
            }
		],
		rules: []  // 路由规则列表（当前为空）
	},
	/**
	 * 实验性功能配置
	 * 包含一些尚未稳定的功能选项
	 */
	experimental: {
		cache_file: {
			enabled: true,                        // 启用缓存文件
			store_fakeip: true                    // 缓存 FakeIP 映射关系
		}
	}
};


// Clash配置
export const CLASH_CONFIG = {
    'port': 7890,                   // HTTP代理端口
    'socks-port': 7891,             // SOCKS代理端口
    'allow-lan': false,             // 是否允许局域网连接
    'mode': 'rule',                 // 代理工作模式：rule(规则模式)
    'log-level': 'silent',          // 日志级别：silent(静默模式，不记录日志)
    'geodata-mode': true,           // 是否启用地理数据模式
    'geo-auto-update': true,        // 是否自动更新地理数据
    'geodata-loader': 'standard',   // 地理数据加载器类型
    'geo-update-interval': 24,      // 地理数据更新间隔(小时)
    'geox-url': {                   // 地理数据文件下载地址配置
      'geoip': "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/geoip.dat",      // GeoIP数据库地址
      'geosite': "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/geosite.dat",  // GeoSite数据库地址
      'mmdb': "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/country.mmdb",    // 国家MMDB数据库地址
      'asn': "https://github.com/xishang0128/geoip/releases/download/latest/GeoLite2-ASN.mmdb"      // ASN数据库地址
    },
    'rule-providers': {
      // 将由代码自动生成
    },
    /**
     * DNS配置模块
     * 配置DNS解析相关参数，包括解析器设置、服务器地址和策略规则
     */
    'dns': {
        /**
         * DNS功能开关
         * 控制是否启用DNS解析功能
         */
        'enable': true,
        /**
         * IPv6支持开关
         * 控制是否启用IPv6地址解析
         */
        'ipv6': true,
        /**
         * 规则遵循开关
         * 控制DNS解析是否遵循代理规则
         */
        'respect-rules': true,
        /**
         * 增强模式设置
         * 配置DNS解析的增强模式类型，'fake-ip'为虚拟IP模式
         */
        'enhanced-mode': 'fake-ip',
        /**
         * 默认DNS服务器列表
         * 配置默认使用的DNS服务器地址，支持DoH(DNS over HTTPS)协议
         */
        'nameserver': [
            'https://120.53.53.53/dns-query',
            'https://264960-opwrt.alidns.com/dns-query'
        ],
        /**
         * 代理服务器DNS解析器
         * 配置用于代理服务器域名解析的DNS服务器列表
         */
        'proxy-server-nameserver': [
            'https://120.53.53.53/dns-query',
            'https://223.5.5.5/dns-query'
        ],
        /**
         * DNS服务器策略配置
         * 根据域名规则配置不同的DNS服务器解析策略
         */
        'nameserver-policy': {
            /**
             * 国内域名解析策略
             * 对于中国大陆域名和私有地址，使用国内DNS服务器解析
             */
            'geosite:cn,private': [
                'https://120.53.53.53/dns-query',
                'https://264960-opwrt.alidns.com/dns-query'
            ],
            /**
             * 国外域名解析策略
             * 对于非中国大陆的地理位置域名，使用国外公共DNS服务器解析
             */
            'geosite:geolocation-!cn': [
                'https://dns.cloudflare.com/dns-query',
                'https://dns.google/dns-query'
            ]
        }
    },
    /**
     * 代理服务器配置数组
     * 存储所有可用的代理服务器配置信息
     */
    'proxies': [],
    /**
     * 代理组配置数组
     * 存储代理服务器分组配置，用于负载均衡和故障转移
     */
    'proxy-groups': []
};


// Surge配置
export const SURGE_CONFIG = {
	'general': {
        'allow-wifi-access': false,
        'wifi-access-http-port': 6152,
        'wifi-access-socks5-port': 6153,
        'http-listen': '127.0.0.1:6152',
        'socks5-listen': '127.0.0.1:6153',
        'allow-hotspot-access': false,
        'skip-proxy': '127.0.0.1,192.168.0.0/16,10.0.0.0/8,172.16.0.0/12,100.64.0.0/10,17.0.0.0/8,localhost,*.local,*.crashlytics.com,seed-sequoia.siri.apple.com,sequoia.apple.com',
        'test-timeout': 5,
        'proxy-test-url': 'http://cp.cloudflare.com/generate_204',
        'internet-test-url': 'http://www.apple.com/library/test/success.html',
        'geoip-maxmind-url': 'https://raw.githubusercontent.com/Loyalsoldier/geoip/release/Country.mmdb',
        'ipv6': false,
        'show-error-page-for-reject': true,
        'dns-server': '119.29.29.29, 180.184.1.1, 223.5.5.5, system',
        'encrypted-dns-server': 'https://223.5.5.5/dns-query',
        'exclude-simple-hostnames': true,
        'read-etc-hosts': true,
        'always-real-ip': '*.msftconnecttest.com, *.msftncsi.com, *.srv.nintendo.net, *.stun.playstation.net, xbox.*.microsoft.com, *.xboxlive.com, *.logon.battlenet.com.cn, *.logon.battle.net, stun.l.google.com, easy-login.10099.com.cn,*-update.xoyocdn.com, *.prod.cloud.netflix.com, appboot.netflix.com, *-appboot.netflix.com',
        'hijack-dns': '*:53',
        'udp-policy-not-supported-behaviour': 'REJECT',
        'hide-vpn-icon': false,
    },
    'replica': {
        'hide-apple-request': true,
        'hide-crashlytics-request': true,
        'use-keyword-filter': false,
        'hide-udp': false
    }
};
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Factory, 
  Brain, 
  Cpu, 
  Zap, 
  Rocket, 
  Sparkles,
  TrendingUp,
  Handshake,
  Globe,
  Target
} from 'lucide-react';

export default function ServicesPage() {
  const serviceAreas = [
    {
      icon: Factory,
      title: '私募融资',
      description: '为企业提供专业的私募融资服务，连接优质投资机构，助力企业快速成长',
      details: [
        '融资策略制定与执行',
        '投资人对接与路演安排',
        '估值建模与交易谈判',
        '尽职调查协调与交割支持'
      ]
    },
    {
      icon: Handshake,
      title: '产业并购',
      description: '提供产业并购全流程服务，助力企业实现战略整合与价值提升',
      details: [
        '并购标的筛选与评估',
        '交易架构设计与谈判',
        '尽职调查与风险管控',
        '并购整合方案制定'
      ]
    },
    {
      icon: TrendingUp,
      title: '投资基金',
      description: '设立专项投资基金，直接投资优质科技创新企业，长期陪伴成长',
      details: [
        '行业研究与项目发掘',
        '投资决策与投后管理',
        '产业资源对接赋能',
        '退出策略规划与执行'
      ]
    },
    {
      icon: Rocket,
      title: '产业落地',
      description: '协助企业实现产业落地，促进地方产业升级与经济发展',
      details: [
        '产业规划与政策对接',
        '落地选址与资源协调',
        '政府关系与审批支持',
        '产业链配套对接'
      ]
    }
  ];

  const focusAreas = [
    { name: '高端制造', icon: Factory },
    { name: '人工智能', icon: Brain },
    { name: '机器人', icon: Cpu },
    { name: '半导体', icon: Zap },
    { name: '能源科技', icon: Sparkles },
    { name: '软件', icon: Globe },
    { name: '商业航天', icon: Rocket },
    { name: '新材料', icon: Target }
  ];

  const clientCases = {
    manufacturing: [
      '寄云科技', 'Polymaker', '英孚康', '崧智智能', 'EXD智协慧同',
      '智云天工', '熵智科技', '利氪科技', '埃睿迪', '宾通智能'
    ],
    ai: [
      'JBD', '壹悟科技', '奕目科技', '玻色量子', '西湖心辰',
      '易现先进科技', '循环智能', '潞晨科技', '格物钛', '共达地'
    ],
    robot: [
      '迅蚁科技', '未来机器人', '蔚建科技', '史河科技', '可以科技',
      '迦智科技', '光彩芯辰', '华经信息', 'Metag. AI 矩动量科技'
    ],
    semiconductor: [
      '云途半导体', '睿思科技', '益思芯科技', '奇异摩尔', '莒纳科技'
    ],
    energy: [
      '远信储能', '昇科能源', '埃克森新能源', '慕帆动力', '青能科技'
    ],
    software: [
      '易路', '鼎茂科技', '店匠科技', '牛客', '和创科技',
      '开源网安', '中创视讯', '标信智链', '嘉为蓝鲸', '量锐科技',
      '派拉软件', '弘玑Cyclone', '伙伴云', '富数', '创邻科技', '支流科技'
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#5C4025] via-[#7A5530] to-[#5C4025]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=600&fit=crop')] opacity-10 bg-cover bg-center" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              业务介绍
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              君正资本所能提供的贯穿新质生产力企业全生命周期的全栈服务，包括私募融资、产业并购、投资基金、产业落地等资本综合解决方案，同时提供产业资源连接、人才组织赋能、核心领域专业服务等高价值增值服务，促成生态伙伴互惠合作，真正助力中国新质生产力价值创造者，为中国产业科技化连接资源、创造价值。
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">全栈服务模式</h2>
            <p className="text-xl text-muted-foreground">贯穿企业全生命周期的专业服务</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="border-0 bg-slate-50 dark:bg-slate-800 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-[#866644] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <area.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{area.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{area.description}</p>
                  <ul className="space-y-2">
                    {area.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-[#866644] rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">聚焦新质生产力</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              君正资本全方位为先进制造、商业航天、低空经济、人工智能、新材料、新能源、AR/XR、机器人、半导体、软件等新质生产力领域的创新企业和产业龙头，提供专业定制的一体化全栈服务。
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {focusAreas.map((area, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-6 bg-white dark:bg-slate-900 rounded-xl hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4A574] to-[#996D3D] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-foreground font-semibold text-lg">{area.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Cases */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#996D3D]/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#996D3D] rounded-full" />
              <span className="text-[#996D3D] font-medium text-sm">服务案例</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">我们服务的优秀企业</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              已为众多新质生产力领域的创新企业和产业龙头提供专业服务
            </p>
          </div>

          <Tabs defaultValue="manufacturing" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-3 h-auto p-0 bg-transparent mb-10">
              {[
                { value: 'manufacturing', label: '高端制造', icon: Factory },
                { value: 'ai', label: '人工智能', icon: Brain },
                { value: 'robot', label: '机器人', icon: Cpu },
                { value: 'semiconductor', label: '半导体', icon: Zap },
                { value: 'energy', label: '能源科技', icon: Sparkles },
                { value: 'software', label: '软件', icon: Globe }
              ].map((tab) => (
                <TabsTrigger 
                  key={tab.value}
                  value={tab.value} 
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 data-[state=active]:bg-[#866644] data-[state=active]:text-white data-[state=active]:border-[#866644] transition-all duration-300 hover:border-[#996D3D]"
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(clientCases).map(([key, clients]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {clients.map((client, index) => (
                    <div 
                      key={index}
                      className="group relative bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 p-6 text-center hover:shadow-lg hover:border-[#996D3D]/30 transition-all duration-300 cursor-default"
                    >
                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#996D3D]/5 to-[#C4956A]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Content */}
                      <div className="relative">
                        <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-[#D4A574]/20 to-[#996D3D]/20 rounded-xl flex items-center justify-center">
                          <span className="text-[#996D3D] font-bold text-lg">
                            {client.charAt(0)}
                          </span>
                        </div>
                        <p className="text-foreground font-medium text-sm leading-tight">{client}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#996D3D] to-[#C4956A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">开启合作之旅</h2>
          <p className="text-xl text-[#D4B88A]/80 mb-8">
            无论您是寻求融资的创业者，还是寻找投资机会的机构，我们都期待与您交流
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-5 bg-white text-[#866644] font-semibold rounded-lg hover:bg-white hover:scale-105 hover:shadow-xl active:scale-95 shadow-lg text-lg transition-all duration-300"
            >
              联系我们
            </a>
            <a 
              href="/portfolio" 
              className="inline-flex items-center justify-center px-8 py-5 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#866644] hover:scale-105 hover:shadow-xl active:scale-95 text-lg transition-all duration-300 backdrop-blur-sm"
            >
              查看案例
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, TrendingUp, Users, Handshake, Factory, Brain, Rocket, Cpu, Sparkles, Zap } from 'lucide-react';
import Link from 'next/link';

export default function PortfolioPage() {
  const portfolioItems = [
    {
      name: '星辰智能',
      field: '人工智能',
      service: '私募融资',
      description: '领先的AI推理芯片解决方案提供商，产品广泛应用于自动驾驶、智能安防等领域',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      tags: ['芯片', '自动驾驶', '边缘计算'],
      status: '已退出',
      round: 'B轮'
    },
    {
      name: '天穹航天',
      field: '商业航天',
      service: '私募融资',
      description: '专注商业卫星研发与运营，已成功发射多颗卫星，服务于遥感、通信等领域',
      image: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=600&h=400&fit=crop',
      tags: ['卫星', '遥感', '通信'],
      status: '成长中',
      round: 'A轮'
    },
    {
      name: '凌空科技',
      field: '低空经济',
      service: '产业落地',
      description: 'eVTOL电动垂直起降飞行器制造商，致力于城市空中出行解决方案',
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop',
      tags: ['eVTOL', '城市出行', '新能源'],
      status: '成长中',
      round: 'A+轮'
    },
    {
      name: '智芯半导体',
      field: '半导体',
      service: '产业并购',
      description: '专注高端功率半导体器件研发，产品应用于新能源汽车、工业控制等领域',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      tags: ['功率器件', '新能源', '工业控制'],
      status: '已并购',
      round: 'C轮'
    },
    {
      name: '云图数据',
      field: '人工智能',
      service: '私募融资',
      description: '大数据智能分析平台，帮助企业实现数据驱动的业务决策',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['数据分析', 'BI', '企业服务'],
      status: '成长中',
      round: 'B轮'
    },
    {
      name: '未来材料',
      field: '新材料',
      service: '投资基金',
      description: '新型纳米材料研发商，产品应用于新能源电池、电子器件等领域',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop',
      tags: ['纳米材料', '新能源', '电子器件'],
      status: '成长中',
      round: 'A轮'
    },
    {
      name: '灵动机器人',
      field: '机器人',
      service: '产业落地',
      description: '工业协作机器人解决方案，融合AI视觉与力控技术，提升智能制造水平',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
      tags: ['协作机器人', '智能制造', 'AI视觉'],
      status: '成长中',
      round: 'A轮'
    },
    {
      name: '元视界',
      field: 'AR/XR',
      service: '私募融资',
      description: 'AR眼镜及解决方案提供商，服务于工业维修、医疗手术等场景',
      image: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=600&h=400&fit=crop',
      tags: ['AR眼镜', '工业应用', '医疗'],
      status: '成长中',
      round: 'Pre-A'
    }
  ];

  const serviceStats = [
    { 
      title: '私募融资', 
      count: '350+', 
      desc: '成功服务客户',
      icon: TrendingUp,
      color: 'from-[#996D3D] to-[#B8945F]'
    },
    { 
      title: '产业并购', 
      count: '10+', 
      desc: '完成并购交易',
      icon: Handshake,
      color: 'from-[#996D3D] to-[#B8945F]'
    },
    { 
      title: '投资基金', 
      count: '多支', 
      desc: '专项基金',
      icon: Rocket,
      color: 'from-[#996D3D] to-[#B8945F]'
    },
    { 
      title: '产业落地', 
      count: '40+', 
      desc: '落地案例',
      icon: Factory,
      color: 'from-[#996D3D] to-[#B8945F]'
    }
  ];

  const fieldStats = [
    { field: '人工智能', count: 60, icon: Brain },
    { field: '先进制造', count: 45, icon: Factory },
    { field: '半导体', count: 35, icon: Cpu },
    { field: '商业航天', count: 20, icon: Rocket },
    { field: '新材料', count: 25, icon: Sparkles },
    { field: '其他', count: 15, icon: Zap }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case '已退出':
        return 'bg-green-500';
      case '已并购':
        return 'bg-purple-500';
      default:
        return 'bg-[#866644]';
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#5C4025] via-[#7A5530] to-[#5C4025]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=600&fit=crop')] opacity-10 bg-cover bg-center" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              服务案例
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              超过350家科技创新企业，覆盖新质生产力全领域
            </p>
          </div>
        </div>
      </section>

      {/* Service Stats */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceStats.map((stat, index) => (
              <Card key={index} className="border-0 bg-slate-50 dark:bg-slate-800 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{stat.title}</h3>
                  <div className="text-3xl font-bold text-[#996D3D] mb-1">{stat.count}</div>
                  <div className="text-muted-foreground text-sm">{stat.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Field Stats */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">覆盖领域</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {fieldStats.map((stat, index) => (
              <Card key={index} className="border-0 bg-white dark:bg-slate-900">
                <CardContent className="p-6 text-center">
                  <stat.icon className="w-10 h-10 mx-auto mb-3 text-[#996D3D]" />
                  <div className="text-2xl font-bold text-foreground">{stat.count}</div>
                  <div className="text-muted-foreground text-sm">{stat.field}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">代表性案例</h2>
            <p className="text-xl text-muted-foreground">覆盖四大业务板块，服务新质生产力全领域</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="group overflow-hidden border-0 bg-slate-50 dark:bg-slate-800 hover:shadow-xl transition-all duration-300">
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 right-3 flex gap-2">
                    <Badge className={`${getStatusColor(item.status)} text-white border-0 text-xs`}>
                      {item.status}
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-block px-2 py-1 bg-[#866644]/80 text-white text-xs rounded-full mb-1">
                      {item.field}
                    </span>
                    <h3 className="text-lg font-bold text-white">{item.name}</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">{item.service}</Badge>
                    <Badge variant="secondary" className="text-xs">{item.round}</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{item.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {item.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Philosophy */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                全栈服务模式
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#866644] rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">私募融资</h3>
                    <p className="text-muted-foreground">
                      为企业提供专业的私募融资服务，连接优质投资机构，助力企业快速成长
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#866644] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Handshake className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">产业并购</h3>
                    <p className="text-muted-foreground">
                      提供产业并购全流程服务，助力企业实现战略整合与价值提升
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#866644] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">投资基金</h3>
                    <p className="text-muted-foreground">
                      设立专项投资基金，直接投资优质科技创新企业，长期陪伴成长
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#866644] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Factory className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">产业落地</h3>
                    <p className="text-muted-foreground">
                      推动产业协同项目落地，连接地方政府与优质企业，实现共赢发展
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop"
                alt="服务模式"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#996D3D] to-[#C4956A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">寻求专业服务？</h2>
          <p className="text-xl text-[#D4B88A]/80 mb-8">
            如果您的项目符合我们的服务领域，欢迎与我们联系
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#866644] hover:bg-white hover:scale-105 hover:shadow-xl active:scale-95 px-8 py-6 text-lg font-medium shadow-lg transition-all duration-300 rounded-lg">
                提交项目
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#866644] hover:scale-105 hover:shadow-xl active:scale-95 px-8 py-6 text-lg font-medium transition-all duration-300 rounded-lg backdrop-blur-sm">
                了解更多
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

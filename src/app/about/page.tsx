import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Users, TrendingUp, Rocket, Handshake, Factory, Target, Eye, Heart } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const values = [
    { title: '客户第一', description: '始终站在客户立场，创造真实价值' },
    { title: '专业立场', description: '深耕行业，建立专业壁垒' },
    { title: '长期导向', description: '着眼长远，陪伴企业成长' },
    { title: '集体作战', description: '团队协同，发挥最大效能' },
    { title: '主动担当', description: '勇于承担，积极作为' },
    { title: '立己达人', description: '成就客户，成就自我' }
  ];

  const allHonors = [
    {
      year: '2023',
      awards: [
        '中国股权投资年中榜单 高端装备制造领域财务顾问TOP10',
        '中国股权投资年中榜单 人工智能领域财务顾问TOP10',
        '中国股权投资年中榜单 中国最佳财务顾问活跃榜TOP10',
        '中国股权投资年中榜单 中国最佳财务顾问综合榜TOP10',
        '年H1先锋榜排名FA先锋TOP10',
        '年Q1最活跃机构综合榜 最活跃财务顾问机构TOP10'
      ]
    },
    {
      year: '2022',
      awards: [
        '年度中国投资机构 先进制造财务顾问机构TOP10',
        '年度中国投资机构 企业服务财务顾问机构TOP10',
        '年度中国投资机构 最活跃财务顾问机构TOP15',
        '年度中国投资机构 最佳财务顾问机构TOP15',
        '中国最具成长力新型投行',
        'Q3中国最活跃机构财务顾问机构TOP15'
      ]
    },
    {
      year: '2021',
      awards: [
        '中国股权投资年度榜单 中国最佳财务顾问企业服务榜TOP3',
        '中国最活跃机构系列榜单 先进制造领域最活跃财务顾问机构TOP4',
        '中国最活跃机构系列榜单 企业服务领域最活跃财务顾问机构TOP4',
        '中国股权投资年度榜单 中国最佳财务顾问人工智能榜TOP5',
        '年度最活跃财务顾问机构TOP6',
        '中国股权投资年度榜单 中国最佳财务顾问综合榜TOP7'
      ]
    },
    {
      year: '2020及之前',
      awards: [
        '最受关注新型投行',
        'Q1度最活跃机构榜单 财务顾问机构TOP7',
        '中国财务顾问机构 企业服务领域财务顾问机构TOP7',
        '中国财务顾问机构 新锐财务顾问机构TOP1'
      ]
    }
  ];

  const serviceNumbers = [
    { number: '300+', label: '服务客户', icon: Users },
    { number: '350+亿', label: '累计交易金额', icon: TrendingUp },
    { number: '10000+', label: '累计深度覆盖活跃投资机构', icon: Handshake },
    { number: '1000+', label: '生态合作伙伴', icon: Factory }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#5C4025] via-[#7A5530] to-[#5C4025]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=600&fit=crop')] opacity-10 bg-cover bg-center" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              关于君正资本
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              致力于成为中国新质生产力企业的生态枢纽
            </p>
          </div>
        </div>
      </section>

      {/* Company Philosophy */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#996D3D]/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#996D3D] rounded-full" />
              <span className="text-[#996D3D] font-medium text-sm">公司理念</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">公司理念</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 使命 */}
            <Card className="border-0 bg-gradient-to-br from-[#D4B88A]/20 to-[#C4956A]/10 dark:from-slate-800 dark:to-slate-800">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#D4A574] to-[#996D3D] rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">使命</h3>
                <p className="text-muted-foreground leading-relaxed">
                  为中国产业科技化连接资源、创造价值
                </p>
              </CardContent>
            </Card>

            {/* 愿景 */}
            <Card className="border-0 bg-gradient-to-br from-[#C4956A]/20 to-[#996D3D]/10 dark:from-slate-800 dark:to-slate-800">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#C4956A] to-[#866644] rounded-2xl flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">愿景</h3>
                <p className="text-muted-foreground leading-relaxed">
                  中国产业科技化的生态枢纽<br />
                  科技创新引领者的优选伙伴
                </p>
              </CardContent>
            </Card>

            {/* 文化与理念 */}
            <Card className="border-0 bg-gradient-to-br from-[#996D3D]/20 to-[#7A5530]/10 dark:from-slate-800 dark:to-slate-800">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#996D3D] to-[#5C4025] rounded-2xl flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">文化与理念</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-1 h-1 bg-[#866644] rounded-full" />
                    客户第一
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-1 h-1 bg-[#866644] rounded-full" />
                    专业立场
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-1 h-1 bg-[#866644] rounded-full" />
                    长期导向
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-1 h-1 bg-[#866644] rounded-full" />
                    集体作战
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-1 h-1 bg-[#866644] rounded-full" />
                    主动担当
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-1 h-1 bg-[#866644] rounded-full" />
                    立己达人
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                新质生产力企业的生态枢纽
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  君正资本所能提供的贯穿新质生产力企业全生命周期的全栈服务，包括私募融资、产业并购、投资基金、产业落地等资本综合解决方案，同时提供产业资源连接、人才组织赋能、核心领域专业服务等高价值增值服务，促成生态伙伴互惠合作，真正助力中国新质生产力价值创造者，为中国产业科技化连接资源、创造价值。
                </p>
                <p>
                  成立数年，君正资本已跻身多项权威榜单前列，累计深度覆盖活跃投资机构10000+家、生态合作伙伴1000+家。已成功服务客户300+家，累计交易金额350+亿元。
                </p>
                <p>
                  我们聚焦于新质生产力领域，全方位为先进制造、商业航天、低空经济、人工智能、新材料、新能源、
                  AR/XR、机器人、半导体、软件等领域的创新企业和产业龙头，提供专业定制的一体化全栈服务。
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {serviceNumbers.map((item, index) => (
                <Card key={index} className="border-0 bg-white dark:bg-slate-900">
                  <CardContent className="p-6 text-center">
                    <item.icon className="w-10 h-10 mx-auto mb-3 text-[#996D3D]" />
                    <div className="text-3xl font-bold text-foreground mb-1">{item.number}</div>
                    <div className="text-muted-foreground text-sm">{item.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">文化与理念</h2>
            <p className="text-xl text-muted-foreground">客户第一、专业立场、长期导向、集体作战、主动担当、立己达人</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 bg-slate-50 dark:bg-slate-800 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-[#866644] rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">专业团队</h2>
            <p className="text-xl text-muted-foreground">多元化背景，一流水准，高效协同</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 bg-white dark:bg-slate-900 shadow-lg">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    君正团队组成高度多元化，来自国内外知名高校。搭建了一支具备业内一流水准和复合经验的能够高效协同的核心团队，其经验横跨战略咨询、资本运作、产业运营、投资研究、财务管理、品牌传播等核心职能。
                  </p>
                  <div className="pt-4">
                    <h3 className="text-xl font-bold text-foreground mb-4">团队文化</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {[
                        '客户第一',
                        '集体作战',
                        '勇攀险峰',
                        '坦诚沟通',
                        '开放包容',
                        '令行禁止'
                      ].map((value, index) => (
                        <div key={index} className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                          <div className="w-2 h-2 bg-[#866644] rounded-full" />
                          <span className="text-foreground font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Honors Section */}
      <section className="py-20 bg-gradient-to-br from-[#5C4025] via-[#7A5530] to-[#5C4025]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">荣誉认可</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              君正资本秉持长远的价值取向，满怀信心与尊重，决心陪伴创业者共同成长
            </p>
          </div>

          <div className="space-y-8">
            {allHonors.map((yearGroup, index) => (
              <div key={index}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="px-4 py-2 bg-[#866644] text-white font-bold rounded-lg">
                    {yearGroup.year}
                  </div>
                  <div className="flex-1 h-px bg-white/20" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {yearGroup.awards.map((award, awardIndex) => (
                    <div key={awardIndex} className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                      <Award className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <span className="text-white text-sm">{award}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#996D3D] to-[#C4956A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">携手共创未来</h2>
          <p className="text-xl text-[#D4B88A]/80 mb-8">
            我们期待与优秀的创业者和投资伙伴携手合作，共创价值
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#866644] hover:bg-white hover:scale-105 hover:shadow-xl active:scale-95 px-8 py-6 text-lg font-medium shadow-lg transition-all duration-300 rounded-lg">
                联系我们
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#866644] hover:scale-105 hover:shadow-xl active:scale-95 px-8 py-6 text-lg font-medium transition-all duration-300 rounded-lg backdrop-blur-sm">
                查看案例
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

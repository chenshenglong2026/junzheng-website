'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  Users, 
  Award,
  Target,
  Heart,
  Trophy,
  ChevronRight,
  X
} from 'lucide-react';

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

  const teamCulture = [
    { title: '客户第一', description: '始终站在客户立场，创造真实价值' },
    { title: '集体作战', description: '团队协同，发挥最大效能' },
    { title: '勇攀险峰', description: '敢于挑战，追求卓越' },
    { title: '坦诚沟通', description: '开放透明，高效协作' },
    { title: '开放包容', description: '多元视角，创新思维' },
    { title: '令行禁止', description: '高效执行，使命必达' }
  ];

  const teamMembers = [
    {
      name: '张明远',
      nameEn: 'Michael Zhang',
      position: '创始合伙人 & CEO',
      avatar: '',
      avatarBg: 'from-[#996D3D] to-[#7A5530]',
      intro: '近15年科技产业化及产业科技化领域战略、投资、管理的复合经验，曾担任知名科技公司高管，主导完成超过100个投融资项目。',
      details: [
        '15年科技投资与管理经验',
        '主导完成超过100个投融资项目',
        '累计交易金额超过200亿元',
        '深耕先进制造、人工智能、半导体等领域'
      ],
      education: '清华大学 MBA',
      background: '曾任职于知名投资机构，担任合伙人。在科技投资领域积累了丰富的行业资源和投资经验，对新质生产力领域有深刻理解和前瞻性判断。'
    },
    {
      name: '李雅琴',
      nameEn: 'Wendy Li',
      position: '管理合伙人',
      avatar: '',
      avatarBg: 'from-[#C4956A] to-[#996D3D]',
      intro: '近10年TMT+行业经验，此前在知名投资机构负责科技领域投资，深耕人工智能、企业服务、商业航天等前沿领域。',
      details: [
        '10年投资行业经验',
        '专注人工智能、企业服务领域',
        '主导完成50+个融资项目',
        '多个成功退出案例'
      ],
      education: '清华大学计算机博士',
      background: '曾任知名科技公司战略投资部负责人，对科技产业发展趋势有深入研究，在项目发掘、尽职调查、投后管理等方面经验丰富。'
    },
    {
      name: '王建华',
      nameEn: 'James Wang',
      position: '投资合伙人',
      avatar: '',
      avatarBg: 'from-[#B8945F] to-[#866644]',
      intro: '超过10年投资行业经验，专注先进制造和人工智能领域，累计投资案例50+，多个成功退出。',
      details: [
        '10年投资行业经验',
        '专注先进制造、人工智能',
        '累计投资案例50+',
        '多个IPO及并购退出案例'
      ],
      education: '北京大学经济学硕士',
      background: '曾任职于知名VC机构，主导多个明星项目的投资，对制造业转型升级、人工智能产业化有深刻理解。'
    },
    {
      name: '陈思雨',
      nameEn: 'Cathy Chen',
      position: '合伙人',
      avatar: '',
      avatarBg: 'from-[#D4A574] to-[#996D3D]',
      intro: '半导体与新能源领域专家，曾在知名投资机构担任投资总监，深度参与多个重大项目。',
      details: [
        '8年投资行业经验',
        '专注半导体、新能源领域',
        '主导完成30+个融资项目',
        '深谙硬科技投资逻辑'
      ],
      education: '复旦大学金融学硕士',
      background: '对半导体产业链有深入研究，熟悉芯片设计、制造、封测等各个环节，在新能源领域也有丰富投资经验。'
    },
    {
      name: '刘志强',
      nameEn: 'Leo Liu',
      position: '合伙人',
      avatar: '',
      avatarBg: 'from-[#996D3D] to-[#5C4025]',
      intro: '近10年投融资、法律合规及投后管理经验，熟悉各类投融资交易架构设计和法律合规。',
      details: [
        '10年投融资经验',
        '精通交易架构设计',
        '丰富的法务合规经验',
        '擅长复杂项目管理'
      ],
      education: '中国政法大学法学硕士',
      background: '曾任职于知名律所和投资机构，参与多个大型并购交易和融资项目，在交易结构设计、风险控制方面经验丰富。'
    },
    {
      name: '赵晓婷',
      nameEn: 'Tina Zhao',
      position: '运营合伙人',
      avatar: '',
      avatarBg: 'from-[#C4956A] to-[#7A5530]',
      intro: '超过10年企业运营及人力资源管理经验，曾担任知名科技公司人力资源高管，擅长组织建设和人才发展。',
      details: [
        '10年企业运营经验',
        '精通人力资源管理',
        '擅长组织能力建设',
        '丰富的项目协调经验'
      ],
      education: '中国人民大学管理学硕士',
      background: '曾担任多家科技公司人力资源负责人，在人才招聘、组织发展、企业文化建设等方面有丰富经验，为被投企业提供全方位的人才和组织支持。'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#5C4025] via-[#7A5530] to-[#5C4025]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=600&fit=crop')] opacity-10 bg-cover bg-center" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              君正团队
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              高度多元化的专业团队，来自国内外知名高校，具备业内一流水准和复合经验
            </p>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#996D3D]/10 rounded-full mb-6">
                <GraduationCap className="w-4 h-4 text-[#996D3D]" />
                <span className="text-[#996D3D] font-medium text-sm">专业团队</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                多元背景 · 一流水准 · 高效协同
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                君正团队组成高度多元化，来自北京大学、清华大学、复旦大学、哈佛大学、麻省理工学院、伦敦政治经济学院等国内外知名高校。
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                搭建了一支具备业内一流水准和复合经验的能够高效协同的核心团队，其经验横跨战略咨询、资本运作、产业运营、投资研究、财务管理、品牌传播等核心职能。
              </p>
              
              {/* Team Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <div className="text-3xl font-bold text-[#866644] mb-1">15年+</div>
                  <div className="text-sm text-muted-foreground">平均经验</div>
                </div>
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <div className="text-3xl font-bold text-[#866644] mb-1">100+</div>
                  <div className="text-sm text-muted-foreground">名校背景</div>
                </div>
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <div className="text-3xl font-bold text-[#866644] mb-1">6大</div>
                  <div className="text-sm text-muted-foreground">专业职能</div>
                </div>
              </div>
            </div>

            {/* Team Photo */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="君正团队"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#996D3D]/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#C4956A]/30 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">团队文化</h2>
            <p className="text-xl text-muted-foreground">
              形成了客户第一、集体作战、勇攀险峰、坦诚沟通、开放包容、令行禁止的团队文化
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {teamCulture.map((item, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-700 hover:shadow-lg hover:border-[#996D3D]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-[#D4A574] to-[#996D3D] rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#996D3D]/10 rounded-full mb-6">
              <Users className="w-4 h-4 text-[#996D3D]" />
              <span className="text-[#996D3D] font-medium text-sm">核心团队</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">合伙人团队</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              汇聚行业精英，为新质生产力企业提供专业服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="border-0 bg-slate-50 dark:bg-slate-800 hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden">
                    <CardContent className="p-0">
                      {/* Avatar Section */}
                      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#996D3D] to-[#5C4025]">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${member.avatarBg} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                            <span className="text-white font-bold text-5xl">{member.name.charAt(0)}</span>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                          <p className="text-[#C4956A] text-sm">{member.nameEn}</p>
                        </div>
                      </div>
                      
                      {/* Info Section */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-foreground font-semibold">{member.position}</span>
                          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-[#996D3D] group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-muted-foreground text-sm line-clamp-2">{member.intro}</p>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-foreground">
                      {member.name}
                      <span className="text-[#996D3D] ml-2 text-lg">{member.nameEn}</span>
                    </DialogTitle>
                    <p className="text-muted-foreground">{member.position}</p>
                  </DialogHeader>
                  
                  <div className="mt-4">
                    <div className="w-full h-64 rounded-xl bg-gradient-to-br from-[#996D3D] to-[#5C4025] flex items-center justify-center mb-6">
                      <div className={`w-40 h-40 rounded-full bg-gradient-to-br ${member.avatarBg} flex items-center justify-center shadow-2xl`}>
                        <span className="text-white font-bold text-6xl">{member.name.charAt(0)}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">个人简介</h4>
                        <p className="text-muted-foreground">{member.background}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">核心优势</h4>
                        <ul className="space-y-2">
                          {member.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-[#866644] rounded-full" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center gap-2 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                        <GraduationCap className="w-5 h-5 text-[#996D3D]" />
                        <span className="text-sm text-muted-foreground">教育背景：</span>
                        <span className="text-foreground font-medium">{member.education}</span>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#996D3D] to-[#C4956A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">加入我们</h2>
          <p className="text-xl text-[#D4B88A]/80 mb-8">
            期待与优秀的你携手同行，共创未来
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-5 bg-white text-[#866644] font-semibold rounded-lg hover:bg-white hover:scale-105 hover:shadow-xl active:scale-95 shadow-lg text-lg transition-all duration-300"
          >
            联系我们
          </a>
        </div>
      </section>
    </div>
  );
}

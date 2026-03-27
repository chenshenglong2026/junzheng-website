import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
    TrendingUp,
    Users,
    Building2,
    Handshake,
    Factory,
    Brain,
    Rocket,
    Cpu,
    Sparkles,
    Zap,
    Globe,
    Target,
    Eye,
    Heart,
    Trophy,
    Play,
    ArrowRight,
    Quote,
} from "lucide-react";

import Link from "next/link";

export default function Home() {
    const stats = [{
        number: "300+",
        label: "服务客户"
    }, {
        number: "350+亿",
        label: "累计交易金额"
    }, {
        number: "10000+",
        label: "累计深度覆盖活跃投资机构"
    }, {
        number: "1000+",
        label: "生态合作伙伴"
    }];

    const investmentFields = [{
        name: "先进制造",
        icon: Factory
    }, {
        name: "商业航天",
        icon: Rocket
    }, {
        name: "低空经济",
        icon: Zap
    }, {
        name: "人工智能",
        icon: Brain
    }, {
        name: "新材料",
        icon: Sparkles
    }, {
        name: "新能源",
        icon: TrendingUp
    }, {
        name: "AR/XR",
        icon: Globe
    }, {
        name: "机器人",
        icon: Cpu
    }, {
        name: "半导体",
        icon: Cpu
    }, {
        name: "软件",
        icon: Target
    }];

    const services = [{
        icon: TrendingUp,
        title: "私募融资",
        description: "为企业提供专业的私募融资服务，连接优质投资机构，助力企业快速成长"
    }, {
        icon: Handshake,
        title: "产业并购",
        description: "提供产业并购全流程服务，助力企业实现战略整合与价值提升"
    }, {
        icon: Rocket,
        title: "投资基金",
        description: "设立专项投资基金，直接投资优质科技创新企业，长期陪伴成长"
    }, {
        icon: Factory,
        title: "产业落地",
        description: "推动产业协同项目落地，连接地方政府与优质企业，实现共赢发展"
    }];

    const clientLogos = [
        "星辰智能",
        "天穹航天",
        "凌空科技",
        "智芯半导体",
        "云图数据",
        "未来材料",
        "灵动机器人",
        "元视界",
        "安芯科技",
        "数智教育",
        "云图医疗",
        "灵犀机器人"
    ];

    const testimonials = [{
        company: "星辰智能",
        logo: "🚀",
        quote: "君正资本在整个融资过程中展现了高度的专业性，团队对行业的洞察及对资本市场的理解给我们留下了深刻的印象。我们非常高兴遇到了这样专业的合作伙伴。",
        author: "星辰智能创始人",
        authorName: "李明"
    }, {
        company: "智芯半导体",
        logo: "💡",
        quote: "君正资本在短时间内帮助我们连续完成两轮融资，团队极强的专业能力和精准对市场节奏的把握令我们印象深刻。君正是值得企业家长期信赖的资本市场合作伙伴。",
        author: "智芯半导体CEO",
        authorName: "王刚"
    }, {
        company: "云图数据",
        logo: "📊",
        quote: "非常高兴与君正资本合作，君正团队展现出对AI时代的超前认知、对资本市场及投资机构的熟悉、在融资流程的把控上表现出非常专业和认真的作风。",
        author: "云图数据CEO",
        authorName: "张伟"
    }];

    const newsItems = [{
        type: "君正交易",
        title: "打造全球领先车用PTC材料，清研皓隆获数千万A轮融资",
        date: "2024-07-15"
    }, {
        type: "君正交易",
        title: "专注全感知工业AI预测性维护，硕橙科技获数千万元C1轮融资",
        date: "2024-07-04"
    }, {
        type: "君正伙伴",
        title: "用AI缩短金属材料研发周期，创材深造拿下头部新能源车企订单",
        date: "2024-07-15"
    }, {
        type: "君正荣誉",
        title: "君正多家客户企业荣登「福布斯中国人工智能科技企业」榜单",
        date: "2024-05-08"
    }, {
        type: "君正研究院",
        title: "商业航天专题：低轨卫星星座\"争夺赛\"，民营企业竞速降本增效",
        date: "2024-06-27"
    }, {
        type: "君正研究院",
        title: "具身智能专题研究：开启智能通用机器人的奇点时刻",
        date: "2024-01-24"
    }];

    const values = [{
        title: "客户第一",
        description: "始终站在客户立场，创造真实价值"
    }, {
        title: "专业立场",
        description: "深耕行业，建立专业壁垒"
    }, {
        title: "长期导向",
        description: "着眼长远，陪伴企业成长"
    }, {
        title: "集体作战",
        description: "团队协同，发挥最大效能"
    }, {
        title: "主动担当",
        description: "勇于承担，积极作为"
    }, {
        title: "立己达人",
        description: "成就客户，成就自我"
    }];

    return (
        <div className="flex flex-col min-h-screen">
            {}
            <section
                className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-[#5C4025] to-slate-900">
                <div
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop')] opacity-10 bg-cover bg-center" />
                <div
                    className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
                    <div className="space-y-8">
                        {}
                        <div className="flex justify-center mb-8">
                            <div
                                className="relative w-28 h-28 bg-[#996D3D] rounded-2xl shadow-2xl flex items-center justify-center">
                                <span
                                    className="text-white font-bold text-5xl"
                                    style={{
                                        fontSize: "72px"
                                    }}>君</span>
                            </div>
                        </div>
                        {}
                        <h1
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">中国产业科技化的生态枢纽
                                                                                                                              <br />
                            <span className="text-[#D4A574]">科技创新引领者的优选伙伴</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-[#C4956A] font-light tracking-wide">The Sustainable Tech-driven Enterprise Influencers
                                                                                                                            </p>
                        {}
                        <div className="flex justify-center pt-8">
                            <a
                                href="#"
                                className="group flex items-center gap-4 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/20 hover:scale-105 hover:shadow-2xl active:scale-95 transition-all duration-300">
                                <div
                                    className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                                    <Play className="w-6 h-6 text-[#996D3D] ml-1" />
                                </div>
                                <div className="text-left">
                                    <div className="text-white font-semibold text-lg">陪 · 伴</div>
                                    <div className="text-[#C4956A]">君正资本创业心路</div>
                                </div>
                            </a>
                        </div>
                        {}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                            <div
                                className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center">
                                <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {}
            <section className="py-20 bg-white dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <p className="text-2xl text-foreground font-medium">为中国产业科技化连接资源、创造价值</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card
                            className="border-0 bg-gradient-to-br from-[#D4B88A]/20 to-[#C4956A]/10 dark:from-slate-800 dark:to-slate-800">
                            <CardContent className="p-8 text-center">
                                <h3 className="text-2xl font-bold text-foreground mb-4">使命</h3>
                                <p className="text-muted-foreground text-lg">为中国产业科技化连接资源、创造价值
                                                                                                                                                                </p>
                            </CardContent>
                        </Card>
                        <Card
                            className="border-0 bg-gradient-to-br from-[#C4956A]/20 to-[#996D3D]/10 dark:from-slate-800 dark:to-slate-800">
                            <CardContent className="p-8 text-center">
                                <h3 className="text-2xl font-bold text-foreground mb-4">愿景</h3>
                                <p className="text-muted-foreground text-lg">中国产业科技化的生态枢纽<br />科技创新引领者的优选伙伴
                                                                                                                                                                </p>
                            </CardContent>
                        </Card>
                        <Card
                            className="border-0 bg-gradient-to-br from-[#996D3D]/20 to-[#7A5530]/10 dark:from-slate-800 dark:to-slate-800">
                            <CardContent className="p-8 text-center">
                                <h3 className="text-2xl font-bold text-foreground mb-4">文化与理念</h3>
                                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                                    {values.map(
                                        (value, index) => <div key={index} className="text-center">{value.title}</div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
            {}
            <section className="py-16 bg-gradient-to-r from-[#996D3D] to-[#C4956A]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                        {stats.map((stat, index) => <div key={index} className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                            <div
                                className="text-[#C4956A] text-sm"
                                style={{
                                    color: "#B6BBCC",
                                    fontSize: "18px"
                                }}>{stat.label}</div>
                        </div>)}
                    </div>
                </div>
            </section>
            {}
            <section className="py-20 bg-slate-50 dark:bg-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-foreground mb-4">业务领域</h2>
                        <p className="text-lg text-muted-foreground max-w-4xl mx-auto">君正资本所能提供的贯穿新质生产力企业全生命周期的全栈服务，包括私募融资、产业并购、投资基金、产业落地等资本综合解决方案，同时提供产业资源连接、人才组织赋能、核心领域专业服务等高价值增值服务，促成生态伙伴互惠合作，真正助力中国新质生产力价值创造者，为中国产业科技化连接资源、创造价值。
                                                                                                                            </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
                        {investmentFields.map((field, index) => <div
                            key={index}
                            className="flex flex-col items-center p-4 bg-white dark:bg-slate-900 rounded-lg hover:shadow-lg hover:scale-105 hover:-translate-y-1 active:scale-95 transition-all duration-300 cursor-pointer">
                            <field.icon className="w-8 h-8 text-[#996D3D] mb-2" />
                            <span className="text-foreground font-medium">{field.name}</span>
                        </div>)}
                    </div>
                    {}
                    <div
                        className="border-t border-border pt-12"
                        style={{
                            backgroundColor: "transparent"
                        }}>
                        <h3
                            className="text-xl font-semibold text-foreground mb-8 text-center"
                            style={{
                                fontSize: "24px"
                            }}>服务客户</h3>
                        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                            {clientLogos.map((logo, index) => <div
                                key={index}
                                className="h-16 bg-white dark:bg-slate-900 rounded-lg flex items-center justify-center text-sm font-medium text-muted-foreground hover:text-foreground hover:shadow-lg hover:scale-105 hover:-translate-y-1 active:scale-95 transition-all duration-300 cursor-pointer">
                                {logo}
                            </div>)}
                        </div>
                        <div className="text-center mt-6">
                            <Link
                                href="/portfolio"
                                className="text-[#996D3D] hover:text-[#7A5530] font-medium inline-flex items-center gap-2">查看所有服务案例... <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {}
            <section className="py-20 bg-slate-50 dark:bg-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-foreground mb-4">君正服务</h2>
                        <p className="text-lg text-muted-foreground max-w-4xl mx-auto">贯穿新质生产力企业全生命周期的全栈服务，包括私募融资、产业并购、投资基金、产业落地等资本综合解决方案，同时提供产业资源连接、人才组织赋能、核心领域专业服务等高价值增值服务。
                                                                                                                            </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => <Card
                            key={index}
                            className="border-0 bg-white dark:bg-slate-900 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 cursor-pointer group">
                            <CardContent className="p-6">
                                <div
                                    className="w-12 h-12 bg-gradient-to-br from-[#996D3D] to-[#B8945F] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <service.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                                <p className="text-muted-foreground text-sm">{service.description}</p>
                            </CardContent>
                        </Card>)}
                    </div>
                </div>
            </section>
            {}
            <section className="py-20 bg-white dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-foreground mb-4">客户评价</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => <Card
                            key={index}
                            className="border-0 bg-slate-50 dark:bg-slate-800 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 cursor-pointer">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="text-3xl">{testimonial.logo}</div>
                                    <div className="font-semibold text-foreground">{testimonial.company}</div>
                                </div>
                                <Quote className="w-8 h-8 text-[#996D3D]/30 mb-2" />
                                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">"{testimonial.quote}"
                                                                                                                                                                  </p>
                                <div className="border-t border-border pt-4">
                                    <p className="text-sm font-medium text-foreground">{testimonial.author}</p>
                                    <p className="text-xs text-muted-foreground">{testimonial.authorName}</p>
                                </div>
                            </CardContent>
                        </Card>)}
                    </div>
                </div>
            </section>
            {}
            <section className="py-20 bg-slate-50 dark:bg-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-foreground mb-4">最新动态</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {newsItems.map((news, index) => <Card
                            key={index}
                            className="border-0 bg-white dark:bg-slate-900 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 cursor-pointer group">
                            <CardContent className="p-6">
                                <Badge variant="outline" className="mb-3 text-xs">{news.type}</Badge>
                                <h3
                                    className="font-semibold text-foreground mb-2 group-hover:text-[#996D3D] transition-colors line-clamp-2">
                                    {news.title}
                                </h3>
                                <p className="text-xs text-muted-foreground">{news.date}</p>
                            </CardContent>
                        </Card>)}
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 mt-8">
                        <Link
                            href="/portfolio"
                            className="text-[#996D3D] hover:text-[#7A5530] font-medium inline-flex items-center gap-2">君正交易 <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            href="/about"
                            className="text-[#996D3D] hover:text-[#7A5530] font-medium inline-flex items-center gap-2">君正伙伴 <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            href="/about"
                            className="text-[#996D3D] hover:text-[#7A5530] font-medium inline-flex items-center gap-2">君正研究院 <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
            {}
            <section
                className="py-20 bg-gradient-to-br from-[#5C4025] via-[#7A5530] to-[#5C4025]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">携手共创未来</h2>
                    <p className="text-xl text-slate-300 mb-8">我们期待与优秀的创业者和投资伙伴携手合作，共同探索新质生产力的无限可能
                                                                                                          </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <Button
                                size="lg"
                                className="bg-white text-[#996D3D] hover:bg-white hover:scale-105 hover:shadow-xl active:scale-95 px-8 py-6 text-lg font-medium shadow-lg transition-all duration-300 rounded-lg">联系我们
                                                                                                                                              </Button>
                        </Link>
                        <Link href="/portfolio">
                            <Button
                                size="lg"
                                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#996D3D] hover:scale-105 hover:shadow-xl active:scale-95 px-8 py-6 text-lg font-medium transition-all duration-300 rounded-lg backdrop-blur-sm">查看案例
                                                                                                                                              </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
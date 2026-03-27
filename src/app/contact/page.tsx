'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Send,
  MessageSquare,
  TrendingUp,
  Handshake,
  Rocket,
  Factory,
  Mail
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    type: 'financing',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // 在实际项目中，这里会发送到后端API
    alert('感谢您的留言！我们会尽快与您联系。');
  };

  const serviceTypes = [
    { value: 'financing', label: '私募融资', icon: TrendingUp },
    { value: 'ma', label: '产业并购', icon: Handshake },
    { value: 'fund', label: '投资基金', icon: Rocket },
    { value: 'landing', label: '产业落地', icon: Factory },
    { value: 'other', label: '其他合作', icon: MessageSquare }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#5C4025] via-[#7A5530] to-[#5C4025]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=600&fit=crop')] opacity-10 bg-cover bg-center" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              联系我们
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              期待与您交流，共同探讨新质生产力领域的投资与合作机遇
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#996D3D] to-[#B8945F] rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground">在线咨询</h2>
                  <p className="text-muted-foreground">我们会在24小时内回复您的留言</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">姓名 *</Label>
                    <Input
                      id="name"
                      placeholder="请输入您的姓名"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">邮箱 *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="请输入您的邮箱"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">公司名称</Label>
                    <Input
                      id="company"
                      placeholder="请输入公司名称"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">联系电话</Label>
                    <Input
                      id="phone"
                      placeholder="请输入联系电话"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>服务类型 *</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {serviceTypes.map((type) => (
                      <Button
                        key={type.value}
                        type="button"
                        variant={formData.type === type.value ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setFormData({...formData, type: type.value})}
                        className={formData.type === type.value ? 'bg-[#866644] hover:bg-[#7A5530]' : ''}
                      >
                        <type.icon className="w-4 h-4 mr-2" />
                        {type.label}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">留言内容 *</Label>
                  <Textarea
                    id="message"
                    placeholder="请详细描述您的需求或问题..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={6}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-[#996D3D] to-[#C4956A] hover:from-[#7A5530] hover:to-[#B8945F]"
                >
                  <Send className="w-4 h-4 mr-2" />
                  提交留言
                </Button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-6">
              <Card className="border-0 bg-white dark:bg-slate-900">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">提交商业计划书</h3>
                  <p className="text-muted-foreground mb-4">
                    如果您希望寻求融资支持，请将商业计划书发送至：
                  </p>
                  <div className="flex items-center gap-2 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <Mail className="w-5 h-5 text-[#996D3D]" />
                    <span className="text-foreground font-medium">bp@junzhengcap.com</span>
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <p>• 商业计划书请包含：项目介绍、团队背景、商业模式、财务预测等内容</p>
                    <p>• 我们会在收到BP后的5个工作日内给予回复</p>
                    <p>• 聚焦领域：先进制造、商业航天、低空经济、人工智能、新材料、新能源、AR/XR、机器人、半导体、软件</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-[#996D3D] to-[#B8945F] text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">合作洽谈</h3>
                  <p className="text-[#D4B88A]/80 mb-4">
                    欢迎投资机构、产业龙头、地方政府等合作伙伴与我们联系
                  </p>
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    <span className="font-medium">partner@junzhengcap.com</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '君正资本 | 新质生产力企业的生态枢纽',
    template: '%s | 君正资本',
  },
  description:
    '君正资本所能提供的贯穿新质生产力企业全生命周期的全栈服务，包括私募融资、产业并购、投资基金、产业落地等资本综合解决方案，同时提供产业资源连接、人才组织赋能、核心领域专业服务等高价值增值服务，促成生态伙伴互惠合作，真正助力中国新质生产力价值创造者，为中国产业科技化连接资源、创造价值。',
  keywords: [
    '领航资本',
    '科技投资',
    '风险投资',
    'VC投资',
    '科技创新',
    '创业投资',
    '私募股权',
    '投资管理',
  ],
  authors: [{ name: '领航资本' }],
  generator: 'Next.js',
  openGraph: {
    title: '领航资本 | 科技投资专家',
    description:
      '专注科技创新领域的专业投资机构，发现和培育具有变革力量的科技企业',
    siteName: '领航资本',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';

  return (
    <html lang="zh-CN">
      <body className={`antialiased`}>
        {isDev && <Inspector />}
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

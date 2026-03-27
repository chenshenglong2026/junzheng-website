import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-12 h-12 bg-[#996D3D] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">君</span>
              </div>
              <span className="text-xl font-bold text-white">君正资本</span>
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              君正资本所能提供的贯穿新质生产力企业全生命周期的全栈服务，包括私募融资、产业并购、投资基金、产业落地等资本综合解决方案，同时提供产业资源连接、人才组织赋能、核心领域专业服务等高价值增值服务，促成生态伙伴互惠合作，真正助力中国新质生产力价值创造者，为中国产业科技化连接资源、创造价值。
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-colors">
                <span className="text-sm">微</span>
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-colors">
                <span className="text-sm">领</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  投资案例
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">联系方式</h3>
            <ul className="space-y-2 text-slate-400">
              <li>电话: 0755-11258870</li>
              <li>邮箱: cooperation@JzCapital.com</li>
              <li>地址: 深圳市南山区软件产业基地</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500">
          <p>© 2024 君正资本. All rights reserved. 京ICP备xxxxxxxx号</p>
        </div>
      </div>
    </footer>
  );
}

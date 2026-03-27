'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/', label: '首页' },
    { href: '/about', label: '关于我们' },
    { href: '/services', label: '业务介绍' },
    { href: '/team', label: '君正团队' },
    { href: '/portfolio', label: '投资案例' },
    { href: '/contact', label: '联系我们' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12 bg-[#996D3D] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl">君</span>
            </div>
            <span className="text-xl font-bold text-foreground">君正资本</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-all duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#996D3D] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </Link>
            ))}
            <Button className="bg-gradient-to-r from-[#996D3D] to-[#C4956A] hover:from-[#7A5530] hover:to-[#B8945F] hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-300">
              投资咨询
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button className="w-full mt-4 bg-gradient-to-r from-[#996D3D] to-[#C4956A] hover:from-[#7A5530] hover:to-[#B8945F] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
              投资咨询
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}

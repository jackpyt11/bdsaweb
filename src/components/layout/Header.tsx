'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShieldCheck } from 'lucide-react';

export default function Header() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Notice', href: '#notice' },
    { name: 'Team', href: '#team' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-[#1E4069] text-white">
      <div className="container flex h-16 items-center justify-between mx-auto px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent bg-accent/10">
            <span className="text-sm font-bold text-accent font-headline">BDSA</span>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tighter font-headline leading-tight">BDSA</span>
            <span className="text-[8px] uppercase text-slate-300 tracking-widest font-bold">Authority Hub</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs font-medium text-slate-200 hover:text-accent transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button 
            size="sm"
            className="hidden sm:flex bg-primary hover:bg-primary/90 text-white font-bold border border-slate-400 h-8 px-3 text-[11px]"
          >
            <ShieldCheck className="w-3.5 h-3.5 mr-1.5" />
            Verify Certificate
          </Button>
        </div>
      </div>
    </header>
  );
}

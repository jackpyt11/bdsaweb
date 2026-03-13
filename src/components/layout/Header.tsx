
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
      <div className="container flex h-20 items-center justify-between mx-auto px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-accent/10">
            <span className="text-xl font-bold text-accent font-headline">BDSA</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tighter font-headline">BDSA</span>
            <span className="text-[10px] uppercase text-slate-300 tracking-widest font-bold">Authority Hub</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-200 hover:text-accent transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button 
            className="hidden sm:flex bg-primary hover:bg-primary/90 text-white font-bold border border-slate-400"
          >
            <ShieldCheck className="w-4 h-4 mr-2" />
            Verify Certificate/ID
          </Button>
        </div>
      </div>
    </header>
  );
}

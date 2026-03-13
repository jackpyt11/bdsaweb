
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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between mx-auto px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-primary/10">
            <span className="text-xl font-bold text-primary font-headline">BDSA</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tighter font-headline text-foreground">BDSA</span>
            <span className="text-[10px] uppercase text-muted-foreground tracking-widest font-bold">Authority Hub</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button 
            className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-[0_0_15px_rgba(230,172,46,0.3)]"
          >
            <ShieldCheck className="w-4 h-4 mr-2" />
            Verify Certificate/ID
          </Button>
          {/* Mobile menu could go here */}
        </div>
      </div>
    </header>
  );
}


'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ShieldCheck } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Header() {
  const logo = PlaceHolderImages.find(img => img.id === 'bdsa-logo');

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
        <Link href="/" className="flex items-center">
          {logo && (
            <div className="relative w-48 h-12">
              <Image
                src={logo.imageUrl}
                alt={logo.description}
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          )}
        </Link>

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
            className="hidden sm:flex bg-[#2A5A8F] hover:bg-[#1E4069] text-white font-bold border border-slate-400 h-8 px-3 text-[11px] rounded-full"
          >
            <ShieldCheck className="w-3.5 h-3.5 mr-1.5" />
            Verify Certificate
          </Button>
        </div>
      </div>
    </header>
  );
}

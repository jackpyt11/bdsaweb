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
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#1E4069] text-white">
      <div className="container flex h-16 sm:h-20 items-center justify-between mx-auto px-2 sm:px-4 gap-2 sm:gap-4 overflow-x-auto no-scrollbar">
        {/* Logo Section */}
        <Link href="/" className="flex-shrink-0">
          {logo && (
            <div className="relative w-24 h-6 sm:w-40 sm:h-10 transition-all">
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

        {/* Navigation - Always Visible in 1 Line */}
        <nav className="flex items-center gap-2 sm:gap-4 md:gap-6 flex-nowrap whitespace-nowrap overflow-x-auto no-scrollbar">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[10px] sm:text-[13px] font-medium text-slate-200 hover:text-accent transition-all"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Action Button - Always Visible */}
        <div className="flex-shrink-0">
          <Button 
            size="sm"
            className="bg-[#2A5A8F] hover:bg-[#2A5A8F]/80 text-white font-bold border border-white/20 h-7 sm:h-9 px-2 sm:px-4 text-[9px] sm:text-[11px] rounded-full shadow-lg transition-all active:scale-95 whitespace-nowrap flex items-center"
          >
            <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            <span className="inline">Verify</span>
          </Button>
        </div>
      </div>
    </header>
  );
}

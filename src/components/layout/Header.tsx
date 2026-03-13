'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ShieldCheck } from 'lucide-react';

export default function Header() {
  const navItems = [
    { name: 'হোম', href: '/' },
    { name: 'সম্পর্কে', href: '#about' },
    { name: 'সেবাসমূহ', href: '#services' },
    { name: 'নোটিশ', href: '#notice' },
    { name: 'যোগাযোগ', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-[#D4AF37] bg-[#1B365D] text-white shadow-md">
      <div className="container flex h-14 sm:h-16 items-center justify-between mx-auto px-2 sm:px-4 gap-2">
        {/* Logo Section */}
        <Link href="/" className="flex-shrink-0">
          <div className="relative w-24 h-10 sm:w-32 sm:h-12 transition-all">
            <Image
              src="https://res.cloudinary.com/dd3eekw7h/image/upload/v1773428346/Logo_-removebg-preview_qatfd0.png"
              alt="বিডিএসএ লোগো"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Navigation - 1 Line */}
        <nav className="flex items-center gap-3 sm:gap-6 flex-nowrap whitespace-nowrap overflow-x-auto no-scrollbar py-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[11px] sm:text-[13px] font-semibold text-slate-100 hover:text-[#D4AF37] transition-all border-b-2 border-transparent hover:border-[#D4AF37]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Action Button - Smaller and Modern */}
        <div className="flex-shrink-0">
          <Button 
            size="sm"
            className="bg-white text-[#1B365D] hover:bg-slate-100 font-bold h-7 sm:h-8 px-2 sm:px-4 text-[10px] sm:text-[11px] rounded-md shadow-sm transition-all active:scale-95 whitespace-nowrap flex items-center"
          >
            <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            <span>যাচাই করুন</span>
          </Button>
        </div>
      </div>
    </header>
  );
}

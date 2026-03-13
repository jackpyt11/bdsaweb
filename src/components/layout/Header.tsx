
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
      <div className="container flex h-14 sm:h-16 items-center mx-auto px-2 sm:px-4">
        {/* Logo Section */}
        <Link href="/" className="flex-shrink-0 mr-4">
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

        {/* Navigation - Filling the space and centering */}
        <nav className="flex-1 flex items-center justify-center gap-4 sm:gap-10 lg:gap-16 flex-nowrap whitespace-nowrap overflow-x-auto no-scrollbar py-1 px-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[12px] sm:text-[14px] lg:text-[16px] font-bold text-slate-100 hover:text-[#D4AF37] transition-all border-b-2 border-transparent hover:border-[#D4AF37] py-1"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Action Button Section */}
        <div className="flex-shrink-0 ml-4">
          <Button 
            size="sm"
            className="bg-white text-[#1B365D] hover:bg-slate-100 font-black h-8 sm:h-9 px-3 sm:px-5 text-[11px] sm:text-[12px] rounded-lg shadow-md transition-all active:scale-95 whitespace-nowrap flex items-center"
          >
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            <span>যাচাই করুন</span>
          </Button>
        </div>
      </div>
    </header>
  );
}

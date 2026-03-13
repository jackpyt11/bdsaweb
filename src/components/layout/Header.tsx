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
    <header className="sticky top-0 z-50 w-full border-b-2 border-[#D4AF37] bg-[#1B365D] shadow-xl">
      <div className="container flex h-16 sm:h-20 items-center mx-auto px-4">
        {/* Logo Section */}
        <Link href="/" className="flex-shrink-0 mr-8">
          <div className="relative w-32 h-12 sm:w-40 sm:h-16 transition-all">
            <Image
              src="https://res.cloudinary.com/dd3eekw7h/image/upload/v1773428346/Logo_-removebg-preview_qatfd0.png"
              alt="BDSA Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Navigation - Filling the space */}
        <nav className="flex-1 flex items-center justify-center gap-6 sm:gap-12 lg:gap-16 flex-nowrap whitespace-nowrap overflow-x-auto no-scrollbar py-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[14px] sm:text-[16px] font-bold text-white/90 hover:text-[#D4AF37] transition-all border-b-2 border-transparent hover:border-[#D4AF37] py-1"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="flex-shrink-0 ml-8">
          <Button 
            size="sm"
            className="bg-[#D4AF37] text-[#1B365D] hover:bg-[#D4AF37]/90 font-black h-9 sm:h-10 px-4 sm:px-6 text-[12px] sm:text-[13px] rounded-lg shadow-lg transition-all active:scale-95 whitespace-nowrap flex items-center border-none"
          >
            <ShieldCheck className="w-4 h-4 mr-2" />
            <span>যাচাই করুন</span>
          </Button>
        </div>
      </div>
    </header>
  );
}

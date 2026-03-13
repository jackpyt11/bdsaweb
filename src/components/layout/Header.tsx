'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ShieldCheck } from 'lucide-react';

export default function Header() {
  const navItems = [
    { name: 'হোম', href: '/' },
    { name: 'আমাদের সম্পর্কে', href: '#about' },
    { name: 'সেবাসমূহ', href: '#services' },
    { name: 'নোটিশ বোর্ড', href: '#notice' },
    { name: 'যোগাযোগ', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/30 bg-background/95 backdrop-blur-md shadow-2xl">
      <div className="container flex h-16 sm:h-20 items-center mx-auto px-4">
        {/* Logo Section */}
        <Link href="/" className="flex-shrink-0 mr-4 sm:mr-8">
          <div className="relative w-28 h-10 sm:w-40 sm:h-14 transition-all">
            <Image
              src="https://res.cloudinary.com/dd3eekw7h/image/upload/v1773428346/Logo_-removebg-preview_qatfd0.png"
              alt="BDSA Logo"
              fill
              className="object-contain object-left brightness-125"
              priority
            />
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex-1 flex items-center justify-center gap-4 sm:gap-10 lg:gap-16 flex-nowrap whitespace-nowrap overflow-x-auto no-scrollbar px-2 py-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[14px] sm:text-[16px] font-bold text-foreground/80 hover:text-primary transition-all py-1 border-b-2 border-transparent hover:border-primary hover:neon-glow"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="flex-shrink-0 ml-4 sm:ml-8">
          <Button 
            size="sm"
            className="bg-primary text-background hover:bg-primary/90 font-black h-8 sm:h-10 px-3 sm:px-6 text-[11px] sm:text-[13px] rounded-lg neon-button border-none"
          >
            <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            <span>যাচাই করুন</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
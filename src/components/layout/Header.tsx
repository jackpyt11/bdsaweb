'use client';

import { Button } from '@/components/ui/button';
import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Header() {
  const logo = PlaceHolderImages.find(img => img.id === 'bdsa-logo');

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl border-b border-primary/20">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="relative w-12 h-12 md:w-14 md:h-14">
            {logo && (
              <Image 
                src={logo.imageUrl} 
                alt="BDSA Logo" 
                fill 
                className="object-contain drop-shadow-[0_0_8px_rgba(0,229,255,0.4)]"
              />
            )}
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-black font-headline text-white leading-none tracking-tighter">BDSA</h1>
            <p className="text-[8px] text-primary font-bold uppercase tracking-[0.2em]">Authority</p>
          </div>
        </Link>

        {/* Navigation - Spaced out to fill gaps */}
        <nav className="flex-1 flex justify-center items-center gap-2 md:gap-8 overflow-x-auto no-scrollbar py-2">
          {['হোম', 'আমাদের সম্পর্কে', 'পরিষেবাসমূহ', 'নোটিশ বোর্ড', 'যোগাযোগ'].map((item) => (
            <Link 
              key={item} 
              href="#" 
              className="text-xs md:text-sm font-bold text-muted-foreground hover:text-primary transition-all whitespace-nowrap px-2"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="shrink-0">
          <Button 
            className="bg-primary hover:bg-primary/80 text-primary-foreground font-black text-[10px] md:text-xs rounded-lg px-3 md:px-6 shadow-[0_0_15px_rgba(0,229,255,0.2)]"
          >
            <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 mr-1.5" /> আইডি যাচাই
          </Button>
        </div>
      </div>
      {/* Bottom Glow Line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
    </header>
  );
}

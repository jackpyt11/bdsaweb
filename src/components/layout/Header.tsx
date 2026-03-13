'use client';

import { Button } from '@/components/ui/button';
import { ShieldCheck, Search, QrCode } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Header() {
  const logo = PlaceHolderImages.find(img => img.id === 'bdsa-logo');

  const scrollToVerify = () => {
    const section = document.getElementById('verify');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0A192F]/90 backdrop-blur-xl border-b border-primary/20">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="relative w-12 h-12 md:w-14 md:h-14">
            {logo && (
              <Image 
                src={logo.imageUrl} 
                alt="BDSA Logo" 
                fill 
                className="object-contain drop-shadow-[0_0_12px_rgba(0,255,255,0.4)]"
              />
            )}
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-black font-headline text-white leading-none tracking-tighter">BDSA</h1>
            <p className="text-[8px] text-primary font-bold uppercase tracking-[0.2em] drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]">Authority</p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex-1 flex justify-center items-center gap-4 md:gap-10 overflow-x-auto no-scrollbar py-2">
          {[
            { name: 'হোম', link: '/' },
            { name: 'আমাদের সম্পর্কে', link: '/about' },
            { name: 'পরিষেবাসমূহ', link: '/#services' },
            { name: 'নোটিশ বোর্ড', link: '/#notice' },
            { name: 'যোগাযোগ', link: '/#contact' }
          ].map((item) => (
            <Link 
              key={item.name} 
              href={item.link} 
              className="text-xs md:text-sm font-bold text-white/70 hover:text-primary transition-all whitespace-nowrap px-2 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full shadow-[0_0_8px_#00FFFF]"></span>
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="shrink-0">
          <Button 
            onClick={scrollToVerify}
            className="bg-primary hover:bg-primary/80 text-black font-black text-[10px] md:text-xs rounded-xl px-4 md:px-7 shadow-[0_0_15px_rgba(0,255,255,0.4)] hover:shadow-[0_0_25px_rgba(0,255,255,0.6)] transition-all border border-white/20"
          >
            <QrCode className="w-3 h-3 md:w-4 md:h-4 mr-1.5" /> আইডি যাচাই
          </Button>
        </div>
      </div>
      {/* Bottom Glow Line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
    </header>
  );
}


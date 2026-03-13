
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Menu } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

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
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#1E4069] text-white">
      <div className="container flex h-20 items-center justify-between mx-auto px-4 gap-4">
        {/* Logo Section */}
        <Link href="/" className="flex-shrink-0">
          {logo && (
            <div className="relative w-36 h-9 sm:w-48 sm:h-12">
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

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[13px] font-medium text-slate-200 hover:text-accent transition-all hover:translate-y-[-1px]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons & Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Button 
            size="sm"
            className="hidden sm:flex bg-[#2A5A8F] hover:bg-[#2A5A8F]/80 text-white font-bold border border-white/20 h-9 px-4 text-[11px] xl:text-[12px] rounded-full shadow-lg transition-transform active:scale-95"
          >
            <ShieldCheck className="w-4 h-4 mr-2" />
            Verify Certificate
          </Button>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-10 w-10">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#1E4069] border-white/10 text-white p-0">
                <SheetHeader className="p-6 border-b border-white/10">
                  <SheetTitle className="text-white text-left font-headline">BDSA Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col p-6 gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium hover:text-accent py-3 border-b border-white/5 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="mt-6">
                    <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold rounded-full h-12">
                      <ShieldCheck className="w-5 h-5 mr-2" />
                      Verify Certificate
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

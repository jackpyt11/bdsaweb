'use client';

import { ShieldCheck, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Footer() {
  const logo = PlaceHolderImages.find(img => img.id === 'bdsa-logo');

  return (
    <footer className="bg-background border-t border-primary/20 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                {logo && (
                  <Image 
                    src={logo.imageUrl} 
                    alt="BDSA Logo" 
                    fill 
                    className="object-contain drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]"
                  />
                )}
              </div>
              <div>
                <h3 className="text-xl font-black font-headline text-white leading-none">BDSA</h3>
                <p className="text-[8px] text-primary font-bold uppercase tracking-[0.2em]">বাংলাদেশ ডিজিটাল সিস্টেম অথরিটি</p>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              বাংলাদেশের ডিজিটাল পরিকাঠামো সুরক্ষায় এবং নাগরিকদের স্মার্ট সেবা নিশ্চিতকরণে বিডিএসএ নিরলসভাবে কাজ করে যাচ্ছে।
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold font-headline text-primary border-b border-primary/20 pb-2 w-fit">দ্রুত লিঙ্ক</h4>
            <ul className="space-y-3">
              {['হোম', 'আমাদের সম্পর্কে', 'পরিষেবাসমূহ', 'নোটিশ বোর্ড', 'যোগাযোগ'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors"></div>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold font-headline text-primary border-b border-primary/20 pb-2 w-fit">যোগাযোগ</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>ধানমন্ডি ২৭, ডিজিটাল ভিশন টাওয়ার, ঢাকা - ১২০৯</span>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>support@bdsa.gov.bd</span>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>হেল্পলাইন: ১৬১২২</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold font-headline text-primary border-b border-primary/20 pb-2 w-fit">অনুসরণ করুন</h4>
            <div className="flex gap-4">
              {[
                { icon: <Facebook className="w-5 h-5" />, label: 'Facebook' },
                { icon: <Twitter className="w-5 h-5" />, label: 'Twitter' },
                { icon: <Instagram className="w-5 h-5" />, label: 'Instagram' },
                { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' }
              ].map((social, idx) => (
                <Link 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 rounded-xl border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all duration-300 shadow-[0_0_10px_rgba(0,255,255,0.05)]"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
              <p className="text-[10px] font-bold text-primary uppercase tracking-widest text-center">নিরাপদ ও অথরাইজড ওয়েবসাইট</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-muted-foreground font-medium">
          <p>&copy; ২০২৪ বাংলাদেশ ডিজিটাল সিস্টেম অথরিটি (বিডিএসএ)। সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">প্রাইভেসি পলিসি</Link>
            <Link href="#" className="hover:text-primary transition-colors">টার্মস ও কন্ডিশন</Link>
            <Link href="#" className="hover:text-primary transition-colors">কপিরাইট গাইডলাইন</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

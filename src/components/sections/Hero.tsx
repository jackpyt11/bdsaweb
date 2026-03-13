'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, FileText, ArrowRight, User } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';

export default function Hero() {
  const heroBg = PlaceHolderImages.find(img => img.id === 'hero-bg');
  const [userName, setUserName] = useState('');

  const scrollToNotice = () => {
    const section = document.getElementById('notice');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20 pb-24">
      {/* Background with Cyber Effect */}
      <div className="absolute inset-0 z-0">
        {heroBg && (
          <Image
            src={heroBg.imageUrl}
            alt="Cyber Background"
            fill
            priority
            className="object-cover opacity-20 scale-110 animate-pulse"
            style={{ filter: 'hue-rotate(180deg)' }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.05)_0%,transparent_70%)]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        {/* Authority Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-[10px] font-bold text-primary mb-8 animate-in fade-in slide-in-from-top-4 duration-1000 uppercase tracking-widest">
          <div className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_#00E5FF]"></span>
          </div>
          গণপ্রজাতন্ত্রী বাংলাদেশ সরকার অনুমোদিত
        </div>

        {/* Headlines with Font Mixing and Neon Glow */}
        <div className="max-w-4xl mx-auto space-y-4 mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          <h1 className="text-4xl md:text-6xl font-medium font-headline text-white tracking-tight leading-tight">
            বাংলাদেশে ডিজিটাল
          </h1>
          <h2 className="text-5xl md:text-7xl font-black font-headline text-primary drop-shadow-[0_0_15px_rgba(0,229,255,0.5)] tracking-tighter leading-none">
            অবকাঠামোর ভবিষ্যৎ নির্মাণ
          </h2>
        </div>

        <p className="mx-auto max-w-2xl text-lg text-muted-foreground/80 mb-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500 leading-relaxed">
          বাংলাদেশ ডিজিটাল সিস্টেম অথরিটি (বিডিএসএ) নিশ্চিত করছে একটি সুরক্ষিত, স্বচ্ছ এবং আধুনিক জাতীয় পরিচয় যাচাইকরণ ফ্রেমওয়ার্ক।
        </p>

        {/* Cyber Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-700">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                size="lg" 
                className="min-w-[200px] h-14 bg-primary text-primary-foreground font-bold rounded-xl shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:scale-105 transition-all group"
              >
                <Sparkles className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" /> প্রোফাইল দেখুন
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-card border-primary/20 sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-primary font-headline flex items-center gap-2">
                  <User className="w-5 h-5" /> ব্যবহারকারীর প্রোফাইল তথ্য
                </DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">আপনার নাম বা আইডি প্রদান করুন:</p>
                  <Input
                    id="name"
                    placeholder="ব্যবহারকারীর নাম লিখুন..."
                    className="bg-background/50 border-primary/20 text-white"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                {userName && (
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 mt-2">
                    <p className="text-xs text-primary font-bold uppercase tracking-widest mb-1">বর্তমান প্রোফাইল</p>
                    <p className="text-xl font-bold text-white">{userName}</p>
                    <p className="text-[10px] text-muted-foreground mt-2">স্ট্যাটাস: সক্রিয় (Active)</p>
                  </div>
                )}
                <Button className="w-full bg-primary text-background font-bold">প্রবেশ করুন</Button>
              </div>
            </DialogContent>
          </Dialog>

          <Button 
            size="lg" 
            variant="outline" 
            className="min-w-[200px] h-14 border-primary/30 text-white hover:bg-primary/5 hover:border-primary rounded-xl transition-all group"
            onClick={scrollToNotice}
          >
            <FileText className="mr-2 w-5 h-5" /> সর্বশেষ নোটিশ <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Decorative Cyber Lines */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_10px_#00E5FF]"></div>
    </section>
  );
}

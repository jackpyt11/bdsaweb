'use client';

import { useState } from 'react';
import { Bell, QrCode, ArrowUpRight, Printer, X, ShieldCheck, Download } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const notices = [
  {
    id: "BDSA/NOT/2024/042",
    title: "২০২৪ অর্থ বছরের নতুন ই-আইডি নিবন্ধনের সময়সীমা বর্ধিত করা হয়েছে",
    date: "২৪ অক্টোবর, ২০২৪",
    isNew: true,
    hasDetail: true
  },
  {
    id: "BDSA/SEC/2024/015",
    title: "সিস্টেম ম্যানেজমেন্ট এপিআই এক্সেসের জন্য আপডেটেড সিকিউরিটি প্রোটোকল",
    date: "২০ অক্টোবর, ২০২৪",
    isNew: false,
    hasDetail: false
  },
  {
    id: "BDSA/PR/2024/088",
    title: "অফিশিয়াল পার্টনারশিপ ঘোষণা: বাংলাদেশ ব্যাংক ডিজিটাল ফ্রেমওয়ার্ক",
    date: "১৫ অক্টোবর, ২০২৪",
    isNew: false,
    hasDetail: false
  }
];

export default function NoticeBoard() {
  const [isOpen, setIsOpen] = useState(false);
  const logo = PlaceHolderImages.find(img => img.id === 'bdsa-logo');

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="notice" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-primary/10 rounded-2xl text-primary shadow-[0_0_15px_rgba(0,229,255,0.1)]">
              <Bell className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold font-headline text-white tracking-tight">অফিশিয়াল নোটিশ বোর্ড</h2>
              <p className="text-primary text-xs font-bold uppercase tracking-widest">স্বচ্ছতা ও তথ্যের সঠিক প্রচার</p>
            </div>
          </div>
          <button className="hidden sm:block text-primary font-bold hover:underline text-sm uppercase tracking-widest">সব নোটিশ দেখুন</button>
        </div>

        <div className="space-y-4">
          {notices.map((notice, idx) => (
            <Dialog key={idx} open={notice.hasDetail ? isOpen : false} onOpenChange={notice.hasDetail ? setIsOpen : undefined}>
              <DialogTrigger asChild>
                <div 
                  onClick={() => notice.hasDetail && setIsOpen(true)}
                  className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-2xl border border-primary/10 bg-card/50 hover:border-primary/40 hover:bg-primary/5 transition-all cursor-pointer shadow-lg"
                >
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors leading-tight">
                        {notice.title}
                      </h3>
                      {notice.isNew && (
                        <span className="text-[9px] font-black bg-destructive text-white px-2 py-0.5 rounded uppercase animate-pulse">
                          নতুন
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-[10px] text-muted-foreground font-bold">
                      <span className="bg-background px-2 py-1 rounded border border-border">সূত্র: {notice.id}</span>
                      <span>তারিখ: {notice.date}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 mt-4 md:mt-0">
                    <div className="flex flex-col items-center">
                      <div className="p-1 bg-white rounded-sm mb-1">
                        <QrCode className="w-8 h-8 text-black" />
                      </div>
                      <span className="text-[8px] text-muted-foreground font-bold uppercase">যাচাই করুন</span>
                    </div>
                    <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background transition-all">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </DialogTrigger>

              {notice.hasDetail && (
                <DialogContent className="max-w-4xl bg-[#0B1120] border-2 border-[#D4AF37] p-0 overflow-hidden print:bg-white print:border-0 print:p-0 print:m-0">
                  <DialogHeader className="p-4 border-b border-[#D4AF37]/20 flex flex-row items-center justify-between print:hidden">
                    <DialogTitle className="text-[#FFD700] font-headline">অফিশিয়াল নোটিশ প্রিভিউ</DialogTitle>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={handlePrint} className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black">
                        <Printer className="w-4 h-4 mr-2" /> প্রিন্ট / পিডিএফ
                      </Button>
                    </div>
                  </DialogHeader>

                  {/* A4 Format Container */}
                  <div id="notice-printable-area" className="relative bg-[#0B1120] p-8 md:p-16 min-h-[80vh] print:min-h-0 print:bg-white print:text-black print:p-10">
                    {/* Watermark Logo */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none print:opacity-[0.05]">
                      {logo && <Image src={logo.imageUrl} alt="BDSA Watermark" width={400} height={400} className="grayscale" />}
                    </div>

                    {/* 1. Top Header */}
                    <div className="relative z-10 flex flex-col items-center mb-12">
                      <div className="relative w-20 h-20 mb-4">
                        {logo && (
                          <Image 
                            src={logo.imageUrl} 
                            alt="BDSA Logo" 
                            fill 
                            className="object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.5)] print:drop-shadow-none"
                          />
                        )}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-black font-headline text-[#FFD700] mb-2 print:text-black">বাংলাদেশ ডিজিটাল সিস্টেম অথরিটি (BDSA)</h2>
                      <div className="w-full flex justify-between items-end border-b-2 border-[#D4AF37] pb-2 print:border-black">
                        <div className="text-[10px] text-[#D4AF37] font-bold print:text-black">রেফারেন্স নং: BDSA/AUDIT/2026/102</div>
                        <div className="p-1 bg-white rounded shadow-sm">
                          <QrCode className="w-12 h-12 text-black" />
                        </div>
                      </div>
                    </div>

                    {/* 2. Body Content */}
                    <div className="relative z-10 text-gray-100 print:text-black">
                      <div className="flex justify-end mb-8 text-sm font-bold">তারিখ: ১০ মার্চ, ২০২৬</div>
                      
                      <div className="text-center mb-10">
                        <h3 className="text-xl md:text-2xl font-bold font-headline text-[#FFD700] underline underline-offset-8 print:text-black">
                          বিজ্ঞপ্তি: বার্ষিক সিস্টেম অডিট ও লাইসেন্সিং ২০২৬
                        </h3>
                      </div>

                      <div className="space-y-6 text-base leading-relaxed">
                        <p>
                          এতদ্বারা বাংলাদেশ ডিজিটাল সিস্টেম অথরিটি (BDSA)-এর তালিকাভুক্ত সকল তথ্যপ্রযুক্তি ভিত্তিক প্রতিষ্ঠান এবং অংশীদারদের অবগতির জন্য জানানো যাচ্ছে যে, ২০২৬ অর্থবছরের জন্য 'জাতীয় সাইবার নিরাপত্তা ও সিস্টেম স্ট্যান্ডার্ড' যাচাইকরণ প্রক্রিয়া শুরু হয়েছে।
                        </p>

                        <div className="space-y-3">
                          <h4 className="font-bold text-[#FFD700] print:text-black">মূল উদ্দেশ্য:</h4>
                          <p>প্রতিষ্ঠানের ডিজিটাল অবকাঠামো যাচাই, ডেটা এনক্রিপশন প্রোটোকল নিশ্চিত করা এবং সাইবার ঝুঁকি কমিয়ে গ্রাহক নিরাপত্তা বৃদ্ধি করা।</p>
                        </div>

                        <div className="space-y-3">
                          <h4 className="font-bold text-[#FFD700] print:text-black">প্রয়োজনীয় নথিপত্রসমূহ:</h4>
                          <p>নিচে উল্লেখিত নথিপত্রসমূহ আগামী ৩০ এপ্রিল, ২০২৬-এর মধ্যে অনলাইন পোর্টালে জমা দিতে হবে:</p>
                          <ul className="list-decimal pl-6 space-y-2">
                            <li>হালনাগাদকৃত ডিজিটাল ট্রেড লাইসেন্স।</li>
                            <li>প্রতিষ্ঠানের দায়িত্বরত কারিগরি কর্মকর্তা ও সিকিউরিটি স্পেশালিস্টদের তালিকা।</li>
                            <li>পূর্ববর্তী বছরের সিস্টেম অডিট রিপোর্ট ও কমপ্লায়েন্স সার্টিফিকেট।</li>
                          </ul>
                        </div>

                        <div className="p-4 bg-[#D4AF37]/10 border-l-4 border-[#D4AF37] rounded print:bg-gray-100 print:border-black">
                          <h4 className="font-bold text-[#FFD700] mb-1 print:text-black">নির্দেশনা:</h4>
                          <p className="text-sm">নির্ধারিত সময়ের মধ্যে আবেদন করতে ব্যর্থ হলে সংশ্লিষ্ট প্রতিষ্ঠানের সিস্টেম অ্যাকসেস এবং ভেরিফিকেশন সার্ভিস সাময়িকভাবে স্থগিত করা হতে পারে।</p>
                        </div>
                      </div>
                    </div>

                    {/* 3. Footer */}
                    <div className="relative z-10 mt-16 pt-8 border-t border-[#D4AF37]/20 flex justify-between items-center print:border-black">
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 border border-[#D4AF37]/30 rounded-full flex items-center justify-center mb-2 opacity-50 print:opacity-100">
                          <ShieldCheck className="w-8 h-8 text-[#D4AF37] print:text-black" />
                        </div>
                        <span className="text-[10px] font-bold text-[#D4AF37]/60 print:text-black uppercase">অফিশিয়াল ই-সীল অনুমোদিত</span>
                      </div>

                      <div className="print:hidden">
                        <Button className="bg-[#D4AF37] text-black font-bold px-8 py-6 rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-105 transition-all">
                          এখনই আবেদন করুন
                        </Button>
                      </div>

                      <div className="text-right">
                        <div className="font-headline font-bold text-lg text-[#FFD700] print:text-black">কর্তৃপক্ষ</div>
                        <div className="font-black text-white print:text-black">BDSA</div>
                        <div className="text-[10px] text-muted-foreground print:text-black">গণপ্রজাতন্ত্রী বাংলাদেশ</div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              )}
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}

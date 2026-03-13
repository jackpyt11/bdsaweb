'use client';

import { useState } from 'react';
import { Bell, QrCode, ArrowUpRight, Printer, ShieldCheck, AlertTriangle } from 'lucide-react';
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
import { cn } from '@/lib/utils';

const notices = [
  {
    id: "BDSA/NOT/2024/042",
    title: "২০২৪ অর্থ বছরের নতুন ই-আইডি নিবন্ধনের সময়সীমা বর্ধিত করা হয়েছে",
    date: "২৪ অক্টোবর, ২০২৪",
    isNew: true,
    hasDetail: true,
    details: {
      refNo: "BDSA/AUDIT/2026/102",
      date: "১০ মার্চ, ২০২৬",
      contentTitle: "বিজ্ঞপ্তি: বার্ষিক সিস্টেম অডিট ও লাইসেন্সিং ২০২৬",
      summary: "এতদ্বারা বাংলাদেশ ডিজিটাল সিস্টেম অথরিটি (BDSA)-এর তালিকাভুক্ত সকল তথ্যপ্রযুক্তি ভিত্তিক প্রতিষ্ঠান এবং অংশীদারদের অবগতির জন্য জানানো যাচ্ছে যে, ২০২৬ অর্থবছরের জন্য 'জাতীয় সাইবার নিরাপত্তা ও সিস্টেম স্ট্যান্ডার্ড' যাচাইকরণ প্রক্রিয়া শুরু হয়েছে।",
      points: [
        { title: "মূল উদ্দেশ্য:", desc: "প্রতিষ্ঠানের ডিজিটাল অবকাঠামো যাচাই, ডেটা এনক্রিপশন প্রোটোকল নিশ্চিত করা এবং সাইবার ঝুঁকি কমিয়ে গ্রাহক নিরাপত্তা বৃদ্ধি করা।" },
        { title: "প্রয়োজনীয় নথিপত্রসমূহ:", desc: "নিচে উল্লেখিত নথিপত্রসমূহ আগামী ৩০ এপ্রিল, ২০২৬-এর মধ্যে অনলাইন পোর্টালে জমা দিতে হবে: ১. হালনাগাদকৃত ডিজিটাল ট্রেড লাইসেন্স। ২. প্রতিষ্ঠানের দায়িত্বরত কারিগরি কর্মকর্তা ও সিকিউরিটি স্পেশালিস্টদের তালিকা। ৩. পূর্ববর্তী বছরের সিস্টেম অডিট রিপোর্ট ও কমপ্লায়েন্স সার্টিফিকেট।" }
      ],
      instruction: "নির্ধারিত সময়ের মধ্যে আবেদন করতে ব্যর্থ হলে সংশ্লিষ্ট প্রতিষ্ঠানের সিস্টেম অ্যাকসেস এবং ভেরিফিকেশন সার্ভিস সাময়িকভাবে স্থগিত করা হতে পারে।",
      footerLeft: "অফিশিয়াল ই-সীল অনুমোদিত",
      footerRightRole: "কর্তৃপক্ষ, BDSA",
      buttonText: "এখনই আবেদন করুন"
    }
  },
  {
    id: "BDSA/SEC/2024/015",
    title: "সিস্টেম ম্যানেজমেন্ট এপিআই এক্সেসের জন্য আপডেটেড সিকিউরিটি প্রোটোকল",
    date: "২০ অক্টোবর, ২০২৪",
    isNew: false,
    hasDetail: true,
    details: {
      refNo: "BDSA/TECH/2026/085",
      date: "০৫ মার্চ, ২০২৬",
      subtitle: "গণপ্রজাতন্ত্রী বাংলাদেশ সরকার অনুমোদিত ডিজিটাল সিস্টেম অথরিটি",
      contentTitle: "বিজ্ঞপ্তি: API v3.0 গোল্ডেন ফ্রেমওয়ার্ক মাইগ্রেশন ও সিকিউরিটি আপডেট",
      summary: "BDSA-এর কেন্দ্রীয় ডাটাবেস এবং ভেরিফিকেশন সিস্টেমের নিরাপত্তা আরও শক্তিশালী করার লক্ষ্যে সকল পার্টনার এবং মেম্বার পোর্টালের জন্য API v3.0 (Golden Protocol) আপডেট বাধ্যতামূলক করা হয়েছে।",
      points: [
        { title: "১. উন্নত এনক্রিপশন:", desc: "পূর্বের প্রোটোকল পরিবর্তন করে এখন থেকে AES-256 বিট এনক্রিপশন কার্যকর হবে।" },
        { title: "২. স্মার্ট গেটওয়ে:", desc: "ডেটা আদান-প্রদান আরও দ্রুত করতে নতুন হাই-স্পিড গেটওয়ে নোড সংযুক্ত করা হয়েছে।" },
        { title: "৩. অথেন্টিকেশন:", desc: "প্রতিটি রিকোয়েস্টের জন্য এখন থেকে ওটিপি (OTP) ভিত্তিক টু-ফ্যাক্টর এপিআই কী ব্যবহার করতে হবে।" }
      ],
      instruction: "সকল সিস্টেম অ্যাডমিনিস্ট্রেটর এবং ডেভেলপারদের আগামী ২০ এপ্রিল, ২০২৬-এর মধ্যে তাদের বর্তমান সিস্টেমকে নতুন ভার্সনে মাইগ্রেট করার নির্দেশ দেওয়া যাচ্ছে। উক্ত সময়ের পর পুরোনো API v2.0 ভার্সনটি স্বয়ংক্রিয়ভাবে বন্ধ হয়ে যাবে।",
      footerLeft: "ডিজিটাল ভেরিফিকেশন কিউআর কোড",
      footerRightRole: "পরিচালক (সিস্টেম ও অপারেশনস), BDSA",
      buttonText: "টেকনিক্যাল ডকুমেন্টেশন দেখুন"
    }
  },
  {
    id: "BDSA/PR/2024/088",
    title: "অফিশিয়াল পার্টনারশিপ ঘোষণা: বাংলাদেশ ব্যাংক ডিজিটাল ফ্রেমওয়ার্ক",
    date: "১৫ অক্টোবর, ২০২৪",
    isNew: false,
    hasDetail: true,
    details: {
      refNo: "BDSA/PR/2026/047",
      date: "২৮ ফেব্রুয়ারি, ২০২৬",
      subtitle: "The Future of Digital Identity",
      contentTitle: "বিজ্ঞপ্তি: ব্লকচেইন ভিত্তিক ডিসেন্ট্রালাইজড আইডেন্টিটি (DID) পাইলট প্রকল্পের সূচনা",
      summary: "বাংলাদেশে প্রথমবার ব্লকচেইন (Blockchain) প্রযুক্তির মাধ্যমে নাগরিক পরিচয় যাচাইয়ের উচ্চ-নিরাপত্তাসম্পন্ন 'ডিসেন্ট্রালাইজড আইডেন্টিটি' (DID) প্রোটোকলের পরীক্ষামূলক বা পাইলট সংস্করণ চালু করা হয়েছে।",
      points: [
        { title: "১. ডেটা ওনারশিপ:", desc: "ব্যবহারকারী নিজেই তার ব্যক্তিগত তথ্যের মালিক থাকবেন, কোনো কেন্দ্রীয় সার্ভারে তথ্য হ্যাক হওয়ার ভয় থাকবে না।" },
        { title: "২. অপরিবর্তনযোগ্য রেকর্ড:", desc: "ব্লকচেইন লেজারে তথ্য সংরক্ষিত থাকায় তা পরিবর্তন বা জালিয়াতি করা অসম্ভব।" },
        { title: "৩. ইনস্ট্যান্ট ভেরিফিকেশন:", desc: "কিউআর কোড বা প্রাইভেট কী-এর মাধ্যমে কয়েক সেকেন্ডে গ্লোবাল স্ট্যান্ডার্ড ভেরিফিকেশন।" }
      ],
      instruction: "প্রাথমিক পর্যায়ে শুধুমাত্র ৫০০০ জন ভেরিফাইড ইউজারকে এই পাইলট প্রকল্পে অংশগ্রহণের সুযোগ দেওয়া হবে। আগ্রহীদের নিচের 'রেজিস্ট্রেশন' বাটনের মাধ্যমে আবেদন করতে অনুরোধ করা হচ্ছে। পাইলট প্রকল্পের সময়কাল: ১ মার্চ ২০২৬ থেকে ৩০ জুন ২০২৬ পর্যন্ত।",
      footerLeft: "Blockchain Verified Seal",
      footerRightRole: "প্রধান প্রযুক্তি কর্মকর্তা (CTO), BDSA",
      buttonText: "পাইলট প্রকল্পে নিবন্ধন করুন"
    }
  },
  {
    id: "BDSA/SEC/ALERT/009",
    title: "জরুরী সিকিউরিটি অ্যালার্ট - ফিশিং অ্যাটাক থেকে সতর্ক থাকুন",
    date: "২০ ফেব্রুয়ারি, ২০২৬",
    isNew: true,
    isAlert: true,
    details: {
      refNo: "BDSA/SEC/ALERT/009",
      date: "২০ ফেব্রুয়ারি, ২০২৬",
      contentTitle: "বিজ্ঞপ্তি: জরুরী সিকিউরিটি অ্যালার্ট - ফিশিং অ্যাটাক থেকে সতর্ক থাকুন",
      summary: "সম্প্রতি বিডিএসএ-র নাম ব্যবহার করে ভুয়া এসএমএস ও ইমেইল পাঠিয়ে নাগরিকদের ব্যক্তিগত তথ্য হাতিয়ে নেওয়ার চেষ্টা করা হচ্ছে।",
      points: [
        { title: "১. বিডিএসএ (BDSA) কখনোই আপনার পাসওয়ার্ড বা ওটিপি (OTP) ফোনে জানতে চায় না।", desc: "" },
        { title: "২. শুধুমাত্র আমাদের অফিসিয়াল ডোমেইন www.bdsa.gov.bd দেখে তথ্য আদান-প্রদান করুন।", desc: "" },
        { title: "৩. কোনো সন্দেহজনক লিংক বা আনভেরিফাইড থার্ড-পার্টি অ্যাপে আইডি নম্বর ইনপুট দেবেন না।", desc: "" }
      ],
      footerLeft: "Security Alert System",
      footerRightRole: "সাইবার নিরাপত্তা বিভাগ, BDSA",
      buttonText: "সন্দেহজনক লিংক রিপোর্ট করুন",
      buttonVariant: "destructive"
    }
  },
  {
    id: "BDSA/EVENT/2026/012",
    title: "জাতীয় ডিজিটাল সামিট ২০২৬-এর ডেলিগেট রেজিস্ট্রেশন",
    date: "১৫ ফেব্রুয়ারি, ২০২৬",
    isNew: false,
    details: {
      refNo: "BDSA/EVENT/2026/012",
      date: "১৫ ফেব্রুয়ারি, ২০২৬",
      contentTitle: "বিজ্ঞপ্তি: স্মার্ট বাংলাদেশ ডিজিটাল সামিট ২০২৬ - ডেলিগেট রেজিস্ট্রেশন",
      summary: "আগামী ১০-১২ মে, বঙ্গবন্ধু আন্তর্জাতিক সম্মেলন কেন্দ্রে অনুষ্ঠিতব্য জাতীয় ডিজিটাল সামিটে অংশগ্রহণের জন্য অনলাইন রেজিস্ট্রেশন উন্মুক্ত করা হয়েছে।",
      points: [
        { title: "১. এআই এবং ফিউচার টেকনোলজি প্যানেল।", desc: "" },
        { title: "২. সাইবার সিকিউরিটি ও সিস্টেম অডিটিং ওয়ার্কশপ।", desc: "" },
        { title: "৩. ডিজিটাল ইনফ্রাস্ট্রাকচার নেটওয়ার্কিং সেশন।", desc: "" }
      ],
      instruction: "ডেলিগেট হিসেবে অংশগ্রহণের জন্য নিবন্ধনের শেষ সময়: ১৫ এপ্রিল, ২০২৬। আসন সংখ্যা সীমিত।",
      footerLeft: "Event Management Wing",
      footerRightRole: "জনসংযোগ বিভাগ, BDSA",
      buttonText: "টিকিট বুক করুন"
    }
  },
  {
    id: "BDSA/MAINT/2026/033",
    title: "কেন্দ্রীয় ভেরিফিকেশন সিস্টেম (CVS) রক্ষণাবেক্ষণ বিজ্ঞপ্তি",
    date: "১২ মার্চ, ২০২৬",
    isNew: false,
    details: {
      refNo: "BDSA/MAINT/2026/033",
      date: "১২ মার্চ, ২০২৬",
      contentTitle: "বিজ্ঞপ্তি: সিস্টেম আপগ্রেড ও নিয়মিত রক্ষণাবেক্ষণ সংক্রান্ত বিজ্ঞপ্তি",
      summary: "সিস্টেমের গতি ও নিরাপত্তা আরও উন্নত করতে আগামী ১৫ মার্চ রাত ১২:০০ টা থেকে ভোর ৪:০০ টা পর্যন্ত কেন্দ্রীয় ভেরিফিকেশন সিস্টেমের (CVS) রক্ষণাবেক্ষণ কাজ চলবে।",
      points: [
        { title: "প্রভাব:", desc: "উক্ত সময়ে আইডি ভেরিফিকেশন পোর্টাল এবং অনলাইন ডাটাবেস সার্ভিস সাময়িকভাবে বন্ধ থাকবে। সাময়িক এই অসুবিধার জন্য আমরা আন্তরিকভাবে দুঃখিত।" }
      ],
      footerLeft: "Maintenance Status: Scheduled",
      footerRightRole: "সিস্টেম অ্যাডমিনিস্ট্রেটর, BDSA",
      buttonText: "আপডেট স্ট্যাটাস চেক করুন"
    }
  },
  {
    id: "BDSA/ID-CARD/2026/055",
    title: "ডিজিটাল আইডি কার্ডে 'স্মার্ট চিপ' প্রযুক্তি সংযোজন",
    date: "০৮ মার্চ, ২০২৬",
    isNew: false,
    details: {
      refNo: "BDSA/ID-CARD/2026/055",
      date: "০৮ মার্চ, ২০২৬",
      contentTitle: "বিজ্ঞপ্তি: ই-আইডি কার্ডে নতুন সিকিউরিটি ফিচার ও স্মার্ট চিপ প্রযুক্তি প্রবর্তন",
      summary: "উন্নত ডাটা প্রটেকশনের জন্য বিডিএসএ ইস্যুকৃত সকল ডিজিটাল আইডিতে এখন থেকে 'স্মার্ট চিপ' এবং 'হলোগ্রাফিক সিল' প্রযুক্তি ব্যবহার করা হবে।",
      points: [
        { title: "নির্দেশনা:", desc: "যাদের কাছে পুরোনো ভার্সনের ডিজিটাল আইডি রয়েছে, তারা আগামী ১ জুনের মধ্যে নিকটস্থ বিডিএসএ কেন্দ্র বা অনলাইন পোর্টাল থেকে আপনার আইডি কার্ডটি আপগ্রেড করার আবেদন করতে পারবেন।" }
      ],
      footerLeft: "Smart ID Initiative",
      footerRightRole: "কার্ড ইস্যুয়িং অথরিটি, BDSA",
      buttonText: "আইডি কার্ড আপগ্রেড আবেদন"
    }
  }
];

export default function NoticeBoard() {
  const [selectedNotice, setSelectedNotice] = useState<any>(null);
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
            <Dialog key={idx} onOpenChange={(open) => !open && setSelectedNotice(null)}>
              <DialogTrigger asChild>
                <div 
                  onClick={() => setSelectedNotice(notice)}
                  className={cn(
                    "group flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-2xl border transition-all cursor-pointer shadow-lg",
                    notice.isAlert 
                      ? "border-destructive/30 bg-destructive/5 hover:border-destructive/60 hover:bg-destructive/10" 
                      : "border-primary/10 bg-card/50 hover:border-primary/40 hover:bg-primary/5"
                  )}
                >
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      {notice.isAlert && <AlertTriangle className="w-5 h-5 text-destructive animate-pulse" />}
                      <h3 className={cn(
                        "text-lg font-bold transition-colors leading-tight",
                        notice.isAlert ? "text-destructive" : "group-hover:text-primary"
                      )}>
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
                    <div className={cn(
                      "p-2 rounded-full transition-all",
                      notice.isAlert 
                        ? "bg-destructive/10 text-destructive group-hover:bg-destructive group-hover:text-white" 
                        : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background"
                    )}>
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </DialogTrigger>

              {selectedNotice && (
                <DialogContent className="max-w-4xl bg-[#0B1120] border-2 border-[#D4AF37] p-0 overflow-hidden print:bg-white print:border-0 print:p-0 print:m-0">
                  <DialogHeader className="p-4 border-b border-[#D4AF37]/20 flex flex-row items-center justify-between print:hidden">
                    <DialogTitle className="text-[#FFD700] font-headline">অফিশিয়াল নোটিশ প্রিভিউ</DialogTitle>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={handlePrint} className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black">
                        <Printer className="w-4 h-4 mr-2" /> প্রিন্ট / পিডিএফ
                      </Button>
                    </div>
                  </DialogHeader>

                  <div id="notice-printable-area" className="relative bg-[#0B1120] p-8 md:p-16 min-h-[80vh] print:min-h-0 print:bg-white print:text-black print:p-10 overflow-y-auto max-h-[85vh] no-scrollbar">
                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none print:opacity-[0.05]">
                      {logo && <Image src={logo.imageUrl} alt="BDSA Watermark" width={400} height={400} className="grayscale" />}
                    </div>

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
                      <h2 className="text-2xl md:text-3xl font-black font-headline text-[#FFD700] mb-1 print:text-black text-center">{selectedNotice.details.subtitle || "বাংলাদেশ ডিজিটাল সিস্টেম অথরিটি (BDSA)"}</h2>
                      <div className="w-full flex justify-between items-end border-b-2 border-[#D4AF37] pb-2 print:border-black mt-4">
                        <div className="text-[10px] text-[#D4AF37] font-bold print:text-black uppercase">রেফারেন্স নং: {selectedNotice.details.refNo}</div>
                        <div className="p-1 bg-white rounded shadow-sm">
                          <QrCode className="w-12 h-12 text-black" />
                        </div>
                      </div>
                    </div>

                    <div className="relative z-10 text-gray-100 print:text-black">
                      <div className="flex justify-end mb-8 text-sm font-bold">তারিখ: {selectedNotice.details.date}</div>
                      
                      <div className="text-center mb-10">
                        <h3 className={cn(
                          "text-xl md:text-2xl font-bold font-headline underline underline-offset-8 print:text-black",
                          selectedNotice.isAlert ? "text-red-500" : "text-[#FFD700]"
                        )}>
                          {selectedNotice.details.contentTitle}
                        </h3>
                      </div>

                      <div className="space-y-6 text-base leading-relaxed">
                        <p>{selectedNotice.details.summary}</p>

                        {selectedNotice.details.points.map((point: any, pIdx: number) => (
                          <div key={pIdx} className="space-y-3">
                            <h4 className="font-bold text-[#FFD700] print:text-black">{point.title}</h4>
                            <p>{point.desc}</p>
                          </div>
                        ))}

                        {selectedNotice.details.instruction && (
                          <div className="p-4 bg-[#D4AF37]/10 border-l-4 border-[#D4AF37] rounded print:bg-gray-100 print:border-black">
                            <h4 className="font-bold text-[#FFD700] mb-1 print:text-black">নির্দেশনা:</h4>
                            <p className="text-sm">{selectedNotice.details.instruction}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="relative z-10 mt-16 pt-8 border-t border-[#D4AF37]/20 flex justify-between items-center print:border-black">
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 border border-[#D4AF37]/30 rounded-full flex items-center justify-center mb-2 opacity-50 print:opacity-100">
                          <ShieldCheck className="w-8 h-8 text-[#D4AF37] print:text-black" />
                        </div>
                        <span className="text-[10px] font-bold text-[#D4AF37]/60 print:text-black uppercase">{selectedNotice.details.footerLeft}</span>
                      </div>

                      <div className="print:hidden">
                        <Button 
                          variant={selectedNotice.details.buttonVariant === 'destructive' ? 'destructive' : 'default'}
                          className={cn(
                            "font-bold px-8 py-6 rounded-xl transition-all animate-pulse shadow-lg",
                            selectedNotice.details.buttonVariant !== 'destructive' && "bg-[#D4AF37] text-black hover:scale-105"
                          )}
                        >
                          {selectedNotice.details.buttonText}
                        </Button>
                      </div>

                      <div className="text-right">
                        <div className="font-headline font-bold text-lg text-[#FFD700] print:text-black">কর্তৃপক্ষ</div>
                        <div className="font-black text-white print:text-black">BDSA</div>
                        <div className="text-[10px] text-muted-foreground print:text-black">{selectedNotice.details.footerRightRole}</div>
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

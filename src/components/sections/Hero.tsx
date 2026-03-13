import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, User } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-40 bg-white">
      {/* Background Enhancements */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/tech/1920/1080"
          alt="প্রযুক্তি ব্যাকগ্রাউন্ড"
          fill
          priority
          className="object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-xs font-bold text-primary mb-8 uppercase tracking-widest animate-in fade-in duration-700">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
          </span>
          সরকারি অনুমোদিত সংস্থা
        </div>
        
        <h1 className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight font-headline text-[#1B365D] sm:text-5xl mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-both">
          বাংলাদেশে <span className="text-[#2A5A8F] italic underline decoration-slate-200 underline-offset-8">ডিজিটাল অবকাঠামোর</span> ভবিষ্যৎ নির্মাণ
        </h1>
        
        <p className="mx-auto max-w-2xl text-base sm:text-lg text-[#5E7D9A] mb-10 leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-10 delay-200 duration-1000 fill-mode-both">
          বাংলাদেশ ডিজিটাল সিস্টেম অথরিটি (BDSA) জাতীয় পরিচয় যাচাইকরণ এবং সিস্টেম ব্যবস্থাপনার জন্য একটি নিরাপদ, স্বচ্ছ এবং আধুনিক কাঠামো নিশ্চিত করে।
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-12 delay-500 duration-1000 fill-mode-both">
          <Button size="lg" className="bg-[#1B365D] hover:bg-[#1B365D]/90 text-white min-w-[160px] font-bold shadow-xl rounded-xl">
            <User className="mr-2 h-4 w-4" /> প্রোফাইল দেখুন
          </Button>
          <Button size="lg" variant="outline" className="border-[#1B365D]/20 text-[#1B365D] hover:bg-[#1B365D]/5 min-w-[160px] font-bold transition-all group rounded-xl">
            <FileText className="mr-2 h-4 w-4" /> সর্বশেষ নোটিশ
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}

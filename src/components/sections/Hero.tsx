import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, User } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-40 bg-background">
      {/* High-Tech Background Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(0,255,255,0.05)_1.5px,transparent_1.5px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary mb-8 neon-border">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
          </span>
          অফিশিয়াল অনুমোদিত সংস্থা
        </div>
        
        <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight font-headline sm:text-6xl mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-both leading-[1.2]">
          <span className="block font-light text-foreground mb-2">
            বাংলাদেশে ডিজিটাল
          </span>
          <span className="block font-black text-primary neon-glow">
            অবকাঠামোর ভবিষ্যৎ নির্মাণ
          </span>
        </h1>
        
        <p className="mx-auto max-w-2xl text-lg text-foreground/70 mb-10 animate-in fade-in slide-in-from-bottom-10 delay-200 duration-1000 fill-mode-both font-medium">
          বাংলাদেশ ডিজিটাল সিস্টেম অথরিটি (BDSA) জাতীয় পরিচয় যাচাইকরণ এবং সিস্টেম ব্যবস্থাপনার জন্য একটি নিরাপদ, স্বচ্ছ এবং আধুনিক ফ্রেমওয়ার্ক নিশ্চিত করে।
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-12 delay-500 duration-1000 fill-mode-both">
          <Button size="lg" className="min-w-[180px] font-bold bg-primary text-background hover:bg-primary/80 neon-button">
            <User className="mr-2 h-4 w-4" /> প্রোফাইল দেখুন
          </Button>
          <Button size="lg" variant="outline" className="min-w-[180px] border-primary/40 text-primary hover:bg-primary/10 transition-all group font-bold">
            <FileText className="mr-2 h-4 w-4" /> সর্বশেষ নোটিশ
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
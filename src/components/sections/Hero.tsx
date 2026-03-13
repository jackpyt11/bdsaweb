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
          alt="Technology background"
          fill
          priority
          className="object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-xs font-bold text-primary mb-8 uppercase tracking-widest">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
          </span>
          Government Authorized Entity
        </div>
        
        <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight font-headline text-[#1B365D] sm:text-7xl mb-6">
          Building the Future of <span className="text-[#2A5A8F] italic underline decoration-slate-200 underline-offset-8">Digital Infrastructure</span> in Bangladesh
        </h1>
        
        <p className="mx-auto max-w-2xl text-lg text-[#5E7D9A] mb-10 leading-relaxed font-medium">
          The Bangladesh Digital Systems Authority (BDSA) ensures a secure, transparent, and modernized framework for national identity verification and systems management.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-[#1B365D] hover:bg-[#1B365D]/90 text-white min-w-[160px] font-bold shadow-xl rounded-xl">
            <User className="mr-2 h-4 w-4" /> View Profile
          </Button>
          <Button size="lg" variant="outline" className="border-[#1B365D]/20 text-[#1B365D] hover:bg-[#1B365D]/5 min-w-[160px] font-bold transition-all group rounded-xl">
            <FileText className="mr-2 h-4 w-4" /> Latest Notice
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, User } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32 bg-white">
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 px-4 py-1.5 text-[10px] font-bold text-[#D4AF37] mb-8 uppercase tracking-wider">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D4AF37] opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D4AF37]"></span>
          </span>
          Government Authorized Entity
        </div>
        
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight font-headline text-[#1B365D] sm:text-6xl mb-6">
          Building the Future of <span className="text-[#D4AF37] italic">Digital Infrastructure</span> in Bangladesh
        </h1>
        
        <p className="mx-auto max-w-2xl text-base sm:text-lg text-slate-600 mb-10 leading-relaxed">
          The Bangladesh Digital Systems Authority (BDSA) ensures a secure, transparent, and modernized framework for national identity verification and systems management.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-white min-w-[160px] font-bold shadow-lg">
            <User className="mr-2 h-4 w-4" /> View Profile
          </Button>
          <Button size="lg" variant="outline" className="border-[#1B365D] text-[#1B365D] hover:bg-[#1B365D]/5 min-w-[160px] font-bold transition-all group">
            <FileText className="mr-2 h-4 w-4" /> Latest Notice
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}

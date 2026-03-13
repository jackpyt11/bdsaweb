import Image from 'next/image';
import { Phone, Globe } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="w-full bg-[#050d1f] border-b border-primary/10 py-2 px-4 flex items-center justify-between text-[11px] sm:text-xs font-medium tracking-wide text-foreground/60">
      <div className="flex items-center gap-3">
        <div className="relative w-6 h-4 overflow-hidden rounded-sm border border-primary/20">
          <Image
            src="https://picsum.photos/seed/bdflag/40/24"
            alt="Bangladesh Flag"
            fill
            className="object-cover"
          />
        </div>
        <span className="uppercase tracking-widest">গণপ্রজাতন্ত্রী বাংলাদেশ সরকার অনুমোদিত ডিজিটাল সিস্টেম অথরিটি</span>
      </div>
      
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="hidden sm:flex items-center gap-1.5 text-primary">
          <Phone className="w-3 h-3" />
          <span>হেল্পলাইন: ১৬১২২</span>
        </div>
        <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
          <Globe className="w-3 h-3" />
          <span>BN / EN</span>
        </button>
      </div>
    </div>
  );
}
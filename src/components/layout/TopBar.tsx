
import Image from 'next/image';
import { Phone, Globe } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function TopBar() {
  const flag = PlaceHolderImages.find(img => img.id === 'bd-flag');

  return (
    <div className="w-full bg-background/80 backdrop-blur-md border-b border-border py-2 px-4 flex items-center justify-between text-[11px] sm:text-xs font-medium tracking-wide">
      <div className="flex items-center gap-3">
        {flag && (
          <div className="relative w-6 h-4 overflow-hidden rounded-sm border border-white/10">
            <Image
              src={flag.imageUrl}
              alt={flag.description}
              fill
              className="object-cover"
            />
          </div>
        )}
        <span className="text-muted-foreground uppercase">গণপ্রজাতন্ত্রী বাংলাদেশ সরকার অনুমোদিত ডিজিটাল সিস্টেম অথরিটি</span>
      </div>
      
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="hidden sm:flex items-center gap-1.5 text-primary">
          <Phone className="w-3 h-3" />
          <span>Helpline: 16122</span>
        </div>
        <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
          <Globe className="w-3 h-3" />
          <span>BN / EN</span>
        </button>
      </div>
    </div>
  );
}

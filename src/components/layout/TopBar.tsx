import { Phone, Globe } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function TopBar() {
  const flag = PlaceHolderImages.find(img => img.id === 'bd-flag');

  return (
    <div className="w-full bg-background border-b border-border py-2 px-4 flex items-center justify-between text-[10px] md:text-xs font-bold tracking-widest">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-muted-foreground uppercase">
          <div className="relative w-5 h-3 overflow-hidden rounded-[1px] opacity-80">
            {flag && <Image src={flag.imageUrl} alt="BD Flag" fill className="object-cover" />}
          </div>
          <span>গভর্নমেন্ট সিস্টেম অথরিটি</span>
        </div>
      </div>
      
      <div className="flex items-center gap-6 text-primary">
        <div className="flex items-center gap-1.5">
          <Phone className="w-3 h-3" />
          <span>হেল্পলাইন: ১৬১২২</span>
        </div>
        <button className="flex items-center gap-1.5 hover:text-white transition-colors">
          <Globe className="w-3 h-3" />
          <span>BN / EN</span>
        </button>
      </div>
    </div>
  );
}

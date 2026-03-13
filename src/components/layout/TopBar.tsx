import { Phone, Globe } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function TopBar() {
  const favicon = PlaceHolderImages.find(img => img.id === 'bd-favicon');

  return (
    <div className="w-full bg-background border-b border-white/5 py-2 px-4 flex items-center justify-between text-[10px] md:text-xs font-bold tracking-widest relative z-50">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2.5 text-muted-foreground uppercase">
          {favicon && (
            <div className="relative w-5 h-5 overflow-hidden">
              <Image 
                src={favicon.imageUrl} 
                alt="Gov Icon" 
                fill 
                className="object-contain" 
              />
            </div>
          )}
          <span className="text-white/70">গভর্নমেন্ট সিস্টেম অথরিটি</span>
        </div>
      </div>
      
      <div className="flex items-center gap-6 text-primary">
        <div className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors">
          <Phone className="w-3 h-3 text-[#00FFFF]" />
          <span className="text-[#00FFFF]">হেল্পলাইন: ১৬১২২</span>
        </div>
        <button className="flex items-center gap-1.5 hover:text-white transition-colors text-[#00FFFF]">
          <Globe className="w-3 h-3" />
          <span>BN / EN</span>
        </button>
      </div>
    </div>
  );
}

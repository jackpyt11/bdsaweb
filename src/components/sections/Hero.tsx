
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, User } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const bg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-40">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        {bg && (
          <Image
            src={bg.imageUrl}
            alt="Technology background"
            fill
            priority
            className="object-cover opacity-20"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"></div>
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary mb-8 animate-pulse">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
          </span>
          Government Authorized Entity
        </div>
        
        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight font-headline text-foreground sm:text-7xl mb-6">
          Building the Future of <span className="text-primary italic">Digital Infrastructure</span> in Bangladesh
        </h1>
        
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-10">
          The Bangladesh Digital Systems Authority (BDSA) ensures a secure, transparent, and modernized framework for national identity verification and systems management.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="min-w-[160px] font-bold">
            <User className="mr-2 h-4 w-4" /> View Profile
          </Button>
          <Button size="lg" variant="outline" className="min-w-[160px] border-primary/20 hover:bg-primary/5 hover:text-primary transition-all group">
            <FileText className="mr-2 h-4 w-4" /> Latest Notice
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}

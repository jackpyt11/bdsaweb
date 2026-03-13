
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Award } from 'lucide-react';

const leaders = [
  {
    id: 'leader-ceo',
    name: "ড. আহমেদ রহমান",
    role: "প্রতিষ্ঠাতা পরিচালক ও সিইও",
    seal: "অফিশিয়াল ই-সীল অনুমোদিত"
  },
  {
    id: 'leader-security',
    name: "সারা চৌধুরী",
    role: "ডিজিটাল নিরাপত্তা প্রধান",
    seal: "বিভাগীয় সীল"
  },
  {
    id: 'leader-ops',
    name: "লেঃ কর্নেল এস. মাহমুদ",
    role: "অপারেশনাল স্ট্র্যাটেজিস্ট",
    seal: "ফ্রেমওয়ার্ক অথরিটি"
  }
];

export default function Leadership() {
  return (
    <section id="team" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-white">
            নেতৃত্বের <span className="text-primary drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">দল</span>
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full shadow-[0_0_10px_#00FFFF]"></div>
          <p className="text-muted-foreground mt-6">বাংলাদেশের ডিজিটাল শাসনের নেপথ্যের স্বপ্নদ্রষ্টারা।</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {leaders.map((leader, idx) => {
            const img = PlaceHolderImages.find(p => p.id === leader.id);
            return (
              <div key={idx} className="group flex flex-col items-center">
                <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-primary/20 bg-card/40 backdrop-blur-sm group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] transition-all duration-500 mb-6">
                  {img && (
                    <Image
                      src={img.imageUrl}
                      alt={leader.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
                  
                  {/* Status Seal */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                      <Award className="w-3.5 h-3.5" /> {leader.seal}
                    </div>
                  </div>
                </div>
                
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold font-headline text-white group-hover:text-primary transition-colors duration-300">
                    {leader.name}
                  </h3>
                  <div className="flex flex-col items-center">
                    <p className="text-primary font-bold uppercase text-[10px] tracking-[0.2em] mb-1">
                      {leader.role}
                    </p>
                    <div className="h-0.5 w-8 bg-primary/30 rounded-full group-hover:w-16 group-hover:bg-primary transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

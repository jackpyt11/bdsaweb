
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Award } from 'lucide-react';

const leaders = [
  {
    id: 'ceo-portrait',
    name: "Dr. Ahmed Rahman",
    role: "Founding Director & CEO",
    seal: "Official E-Seal Approved"
  },
  {
    id: 'leadership-2',
    name: "Sarah Chowdhury",
    role: "Head of Digital Security",
    seal: "Departmental Seal"
  },
  {
    id: 'leadership-3',
    name: "Lt. Col. S. Mahmud",
    role: "Operational Strategist",
    seal: "Framework Authority"
  }
];

export default function Leadership() {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-headline mb-4">Leadership Team</h2>
          <p className="text-muted-foreground">The visionaries behind Bangladesh's digital governance.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {leaders.map((leader, idx) => {
            const img = PlaceHolderImages.find(p => p.id === leader.id);
            return (
              <div key={idx} className="group flex flex-col items-center">
                <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border-2 border-border group-hover:border-primary transition-all duration-500 mb-6">
                  {img && (
                    <Image
                      src={img.imageUrl}
                      alt={leader.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center gap-2 bg-primary/90 text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                      <Award className="w-3 h-3" /> {leader.seal}
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold font-headline group-hover:text-primary transition-colors">{leader.name}</h3>
                <p className="text-muted-foreground font-medium uppercase text-xs tracking-widest">{leader.role}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

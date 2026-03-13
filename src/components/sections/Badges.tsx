
import { Award, FileCheck, ShieldCheck } from 'lucide-react';

const badges = [
  {
    icon: <FileCheck className="w-8 h-8" />,
    label: "Trade License",
    id: "TR-2024-8849-01",
    desc: "Ministry of Commerce Approved"
  },
  {
    icon: <Award className="w-8 h-8" />,
    label: "TIN Number",
    id: "TIN-589-223-XXXX",
    desc: "National Board of Revenue Registered"
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    label: "Govt. Reg. Status",
    id: "GR-BDSA-AUTH-001",
    desc: "Authority Certification"
  }
];

export default function Badges() {
  return (
    <section className="py-12 border-y border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full border-2 border-accent/30 flex items-center justify-center text-accent mb-4 bg-accent/5 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                {badge.icon}
              </div>
              <h3 className="text-xl font-headline font-bold mb-1 text-primary">{badge.label}</h3>
              <p className="text-sm font-code text-muted-foreground">{badge.id}</p>
              <p className="text-xs text-muted-foreground/60 mt-1">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

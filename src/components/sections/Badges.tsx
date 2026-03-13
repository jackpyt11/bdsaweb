import { Award, FileCheck, ShieldCheck } from 'lucide-react';

const badges = [
  {
    icon: <FileCheck className="w-8 h-8" />,
    label: "ট্রেড লাইসেন্স",
    id: "TR-2024-8849-01",
    desc: "বাণিজ্য মন্ত্রণালয় কর্তৃক অনুমোদিত"
  },
  {
    icon: <Award className="w-8 h-8" />,
    label: "টিআইএন নম্বর",
    id: "TIN-589-223-XXXX",
    desc: "জাতীয় রাজস্ব বোর্ড নিবন্ধিত"
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    label: "সরকারি নিবন্ধন স্থিতি",
    id: "GR-BDSA-AUTH-001",
    desc: "অথরিটি সার্টিফিকেশন"
  }
];

export default function Badges() {
  return (
    <section className="py-20 border-y border-primary/10 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-center">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group transition-all">
              <div className="w-20 h-20 rounded-2xl border border-primary/20 flex items-center justify-center text-primary mb-6 bg-card/40 backdrop-blur-sm shadow-[0_0_15px_rgba(0,255,255,0.05)] group-hover:bg-primary group-hover:text-background group-hover:border-primary group-hover:-translate-y-2 transition-all duration-500">
                {badge.icon}
              </div>
              <h3 className="text-xl font-headline font-bold mb-2 text-white">{badge.label}</h3>
              <p className="text-xs font-bold text-primary font-code mb-1 tracking-widest uppercase">{badge.id}</p>
              <p className="text-[11px] text-muted-foreground font-medium">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

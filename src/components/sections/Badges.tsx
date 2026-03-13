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
    <section className="py-16 border-y border-slate-100 bg-[#F8F9FA]/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-center">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group transition-all">
              <div className="w-20 h-20 rounded-3xl border-2 border-[#1B365D]/10 flex items-center justify-center text-[#1B365D] mb-6 bg-white shadow-sm group-hover:bg-[#1B365D] group-hover:text-white group-hover:border-[#1B365D] group-hover:rotate-3 transition-all duration-500">
                {badge.icon}
              </div>
              <h3 className="text-xl font-headline font-bold mb-2 text-[#1B365D]">{badge.label}</h3>
              <p className="text-xs font-bold text-[#5E7D9A] font-code mb-1 tracking-widest uppercase">{badge.id}</p>
              <p className="text-[11px] text-[#5E7D9A] opacity-70 font-medium">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
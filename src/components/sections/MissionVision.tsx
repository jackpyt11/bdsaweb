import { Target, Eye, ShieldCheck } from 'lucide-react';

const blocks = [
  {
    icon: <Target className="w-12 h-12" />,
    title: "Mission",
    desc: "To deliver seamless digital services to every citizen through robust system integration and official oversight."
  },
  {
    icon: <Eye className="w-12 h-12" />,
    title: "Vision",
    desc: "Leading the transformation into a Smart Bangladesh by 2041 with world-class digital infrastructure and security."
  },
  {
    icon: <ShieldCheck className="w-12 h-12" />,
    title: "Values",
    desc: "Operating with absolute transparency, security, and accountability as the cornerstone of our digital authority."
  }
];

export default function MissionVision() {
  return (
    <section id="about" className="py-32 bg-[#F8F9FA] border-b border-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {blocks.map((block, idx) => (
            <div key={idx} className="flex flex-col items-start space-y-6 group">
              <div className="text-[#1B365D] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:bg-[#1B365D] group-hover:text-white transition-all duration-500 group-hover:-translate-y-2">
                {block.icon}
              </div>
              <h3 className="text-3xl font-bold font-headline text-[#1B365D] border-b-2 border-[#1B365D]/10 pb-2 w-full">{block.title}</h3>
              <p className="text-[#5E7D9A] text-lg leading-relaxed font-medium">{block.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
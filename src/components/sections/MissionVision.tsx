
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
    <section id="about" className="py-24 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {blocks.map((block, idx) => (
            <div key={idx} className="flex flex-col items-start space-y-4">
              <div className="text-primary">{block.icon}</div>
              <h3 className="text-3xl font-bold font-headline">{block.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">{block.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

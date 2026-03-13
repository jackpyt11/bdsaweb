import { Target, Eye, ShieldCheck } from 'lucide-react';

const blocks = [
  {
    icon: <Target className="w-12 h-12" />,
    title: "লক্ষ্য (Mission)",
    desc: "শক্তিশালী সিস্টেম ইন্টিগ্রেশন এবং অফিশিয়াল তদারকির মাধ্যমে প্রতিটি নাগরিকের কাছে নির্বিঘ্ন ডিজিটাল পরিষেবা পৌঁছে দেওয়া।"
  },
  {
    icon: <Eye className="w-12 h-12" />,
    title: "ভিশন (Vision)",
    desc: "বিশ্বমানের ডিজিটাল অবকাঠামো এবং নিরাপত্তার মাধ্যমে ২০৪১ সালের মধ্যে স্মার্ট বাংলাদেশে রূপান্তরের নেতৃত্ব দেওয়া।"
  },
  {
    icon: <ShieldCheck className="w-12 h-12" />,
    title: "মূল্যবোধ (Values)",
    desc: "আমাদের ডিজিটাল অথরিটির ভিত্তি হিসেবে পূর্ণ স্বচ্ছতা, নিরাপত্তা এবং জবাবদিহিতার সাথে কাজ করা।"
  }
];

export default function MissionVision() {
  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Accent Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {blocks.map((block, idx) => (
            <div key={idx} className="flex flex-col items-start space-y-6 group p-8 rounded-3xl bg-card/20 border border-primary/10 hover:border-primary/30 transition-all duration-500">
              <div className="text-primary bg-primary/10 p-5 rounded-2xl border border-primary/20 group-hover:bg-primary group-hover:text-background transition-all duration-500">
                {block.icon}
              </div>
              <h3 className="text-3xl font-bold font-headline text-white border-b-2 border-primary/10 pb-2 w-full group-hover:border-primary/50 transition-colors">{block.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed font-medium">{block.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

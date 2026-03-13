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

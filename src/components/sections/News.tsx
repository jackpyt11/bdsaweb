import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock } from 'lucide-react';

const news = [
  {
    title: "সাইবার সিকিউরিটির জন্য বিডিএসএ-র আইএসও ২৭০০১ শংসাপত্র অর্জন",
    excerpt: "অথরিটি সফলভাবে তথ্য নিরাপত্তার জন্য কঠোর আন্তর্জাতিক মান সম্পন্ন করেছে...",
    date: "২৮ অক্টোবর, ২০২৪",
    readTime: "৫ মিনিট পাঠ",
    image: "https://picsum.photos/seed/news1/600/400"
  },
  {
    title: "বাংলাদেশ ব্যাংকের সঙ্গে ইন্টিগ্রেশন সম্পন্ন",
    excerpt: "নতুন ব্যাংকিং প্রোটোকল এখন সব উচ্চ-মূল্যের ডিজিটাল লেনদেনের জন্য বিডিএসএ যাচাইকরণ ব্যবহার করে...",
    date: "২৫ অক্টোবর, ২০২৪",
    readTime: "৩ মিনিট পাঠ",
    image: "https://picsum.photos/seed/news2/600/400"
  },
  {
    title: "জাতীয় ডিজিটাল সামিট ২০২৪-এর পর্যালোচনা",
    excerpt: "ঢাকায় সিস্টেম অ্যাডমিনিস্ট্রেটর এবং ডিজিটাল নীতি নির্ধারকদের বৃহত্তম সমাবেশের হাইলাইটস...",
    date: "২০ অক্টোবর, ২০২৪",
    readTime: "৮ মিনিট পাঠ",
    image: "https://picsum.photos/seed/news3/600/400"
  }
];

export default function News() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-bold font-headline mb-4">সর্বশেষ আপডেট</h2>
            <p className="text-muted-foreground max-w-xl">প্রযুক্তিগত আপডেট এবং সাংগঠনিক অর্জনের সাথে বক্ররেখা থেকে এগিয়ে থাকা।</p>
          </div>
          <button className="text-primary font-bold hover:underline">সব নিবন্ধ পড়ুন</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, idx) => (
            <Card key={idx} className="overflow-hidden border-border bg-card group cursor-pointer hover:border-primary/50 transition-all">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-[10px] text-muted-foreground uppercase font-bold tracking-widest mb-4">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {item.readTime}</span>
                </div>
                <h3 className="text-xl font-bold font-headline mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                  {item.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const newsItems = [
  {
    title: "সাইবার সিকিউরিটির জন্য বিডিএসএ-র আইএসও",
    excerpt: "অথরিটি সফলভাবে তথ্য নিরাপত্তার জন্য কঠোর আন্তর্জাতিক মান সম্পন্ন করেছে এবং সাইবার অবকাঠামো শক্তিশালী করেছে।",
    date: "২৮ অক্টোবর, ২০২৪",
    readTime: "৫ মিনিট পাঠ",
    imageId: "news-iso"
  },
  {
    title: "বাংলাদেশ ব্যাংকের সঙ্গে ইন্টিগ্রেশন সম্পন্ন",
    excerpt: "নতুন ব্যাংকিং প্রোটোকল এখন সব উচ্চ-মূল্যের ডিজিটাল লেনদেনের জন্য বিডিএসএ যাচাইকরণ ব্যবহার করে।",
    date: "২৫ অক্টোবর, ২০২৪",
    readTime: "৩ মিনিট পাঠ",
    imageId: "news-bank"
  },
  {
    title: "জাতীয় ডিজিটাল সামিট ২০২৪-এর পর্যালোচনা",
    excerpt: "ঢাকায় সিস্টেম অ্যাডমিনিস্ট্রেটর এবং ডিজিটাল নীতি নির্ধারকদের বৃহত্তম সমাবেশের গুরুত্বপূর্ণ হাইলাইটস।",
    date: "২০ অক্টোবর, ২০২৪",
    readTime: "৮ মিনিট পাঠ",
    imageId: "news-summit"
  }
];

export default function News() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold font-headline text-white">
              সর্বশেষ <span className="text-primary drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">আপডেট</span>
            </h2>
            <p className="text-muted-foreground max-w-xl">প্রযুক্তিগত আপডেট এবং সাংগঠনিক অর্জনের সাথে প্রযুক্তির অগ্রযাত্রায় এগিয়ে থাকা।</p>
          </div>
          <button className="text-primary font-bold hover:underline uppercase tracking-widest text-xs">সব নিবন্ধ পড়ুন</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, idx) => {
            const img = PlaceHolderImages.find(p => p.id === item.imageId);
            return (
              <Card key={idx} className="overflow-hidden border-primary/10 bg-card/40 backdrop-blur-sm group cursor-pointer hover:border-primary/40 transition-all duration-500 shadow-lg">
                <div className="relative h-56 overflow-hidden">
                  {img && (
                    <Image
                      src={img.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60"></div>
                </div>
                <CardContent className="p-6 relative">
                  <div className="flex items-center gap-4 text-[10px] text-primary uppercase font-bold tracking-widest mb-4">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {item.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {item.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold font-headline text-white mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed font-medium">
                    {item.excerpt}
                  </p>
                  <div className="mt-4 h-0.5 w-8 bg-primary/30 group-hover:w-full group-hover:bg-primary transition-all duration-500"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

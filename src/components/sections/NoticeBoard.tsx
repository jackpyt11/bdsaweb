import { Bell, QrCode, ArrowUpRight } from 'lucide-react';

const notices = [
  {
    id: "BDSA/NOT/2024/042",
    title: "২০২৪ অর্থ বছরের নতুন ই-আইডি নিবন্ধনের সময়সীমা বর্ধিত করা হয়েছে",
    date: "২৪ অক্টোবর, ২০২৪",
    isNew: true
  },
  {
    id: "BDSA/SEC/2024/015",
    title: "সিস্টেম ম্যানেজমেন্ট এপিআই এক্সেসের জন্য আপডেটেড সিকিউরিটি প্রোটোকল",
    date: "২০ অক্টোবর, ২০২৪",
    isNew: false
  },
  {
    id: "BDSA/PR/2024/088",
    title: "অফিশিয়াল পার্টনারশিপ ঘোষণা: বাংলাদেশ ব্যাংক ডিজিটাল ফ্রেমওয়ার্ক",
    date: "১৫ অক্টোবর, ২০২৪",
    isNew: false
  }
];

export default function NoticeBoard() {
  return (
    <section id="notice" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-primary/10 rounded-2xl text-primary shadow-[0_0_15px_rgba(0,229,255,0.1)]">
              <Bell className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold font-headline text-white tracking-tight">অফিশিয়াল নোটিশ বোর্ড</h2>
              <p className="text-primary text-xs font-bold uppercase tracking-widest">স্বচ্ছতা ও তথ্যের সঠিক প্রচার</p>
            </div>
          </div>
          <button className="hidden sm:block text-primary font-bold hover:underline text-sm uppercase tracking-widest">সব নোটিশ দেখুন</button>
        </div>

        <div className="space-y-4">
          {notices.map((notice, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-2xl border border-primary/10 bg-card/50 hover:border-primary/40 hover:bg-primary/5 transition-all cursor-pointer shadow-lg"
            >
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors leading-tight">
                    {notice.title}
                  </h3>
                  {notice.isNew && (
                    <span className="text-[9px] font-black bg-destructive text-white px-2 py-0.5 rounded uppercase animate-pulse">
                      নতুন
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4 text-[10px] text-muted-foreground font-bold">
                  <span className="bg-background px-2 py-1 rounded border border-border">সূত্র: {notice.id}</span>
                  <span>তারিখ: {notice.date}</span>
                </div>
              </div>

              <div className="flex items-center gap-6 mt-4 md:mt-0">
                <div className="flex flex-col items-center">
                  <div className="p-1 bg-white rounded-sm mb-1">
                    <QrCode className="w-8 h-8 text-black" />
                  </div>
                  <span className="text-[8px] text-muted-foreground font-bold uppercase">যাচাই করুন</span>
                </div>
                <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

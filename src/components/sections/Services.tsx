'use client';

import { Shield, Cpu, Cloud, Database, Fingerprint, Network } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: <Fingerprint className="w-10 h-10 text-primary" />,
    title: "ডিজিটাল আইডি ফ্রেমওয়ার্ক",
    desc: "উন্নত বায়োমেট্রিক এবং এনক্রিপশন প্রযুক্তির মাধ্যমে নিরাপদ জাতীয় পরিচয় নিশ্চিতকরণ।"
  },
  {
    icon: <Network className="w-10 h-10 text-primary" />,
    title: "সিস্টেম ইন্টিগ্রেশন",
    desc: "বিভিন্ন সরকারি ও বেসরকারি সংস্থাগুলোর মাঝে নিরবচ্ছিন্ন ডেটা আদান-প্রদান ব্যবস্থা।"
  },
  {
    icon: <Database className="w-10 h-10 text-primary" />,
    title: "সুরক্ষিত ডেটা ক্লাস্টার",
    desc: "মাল্টি-লেয়ার রিডান্ডেন্সি এবং হাই-স্পিড ডেটা স্টোরেজ সলিউশন।"
  },
  {
    icon: <Cpu className="w-10 h-10 text-primary" />,
    title: "স্মার্ট ইনফ্রাস্ট্রাকচার",
    desc: "ভবিষ্যতের স্মার্ট সিটি এবং আইওটি ইকোসিস্টেমের জন্য ডিজিটাল পরিকাঠামো নির্মাণ।"
  },
  {
    icon: <Cloud className="w-10 h-10 text-primary" />,
    title: "ই-গভর্নেন্স ক্লাউড",
    desc: "সব নাগরিক পরিষেবা এক জায়গায় নিয়ে আসার জন্য উচ্চ-ক্ষমতাসম্পন্ন ক্লাউড প্ল্যাটফর্ম।"
  },
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: "সাইবার সিকিউরিটি অডিট",
    desc: "জাতীয় পর্যায়ের ডিজিটাল সম্পদ সুরক্ষায় ২৪/৭ সিকিউরিটি মনিটরিং এবং থ্রেট অ্যানালাইসিস।"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-medium font-headline text-white mb-4">
            আমাদের <span className="font-black text-primary drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]">পরিষেবাসমূহ</span>
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full shadow-[0_0_10px_#00FFFF]"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            আধুনিক প্রযুক্তির সমন্বয়ে আমরা গড়ে তুলছি নিরাপদ এবং স্বচ্ছ ডিজিটাল ইকোসিস্টেম।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Card 
              key={idx} 
              className="group bg-card/40 border-primary/10 hover:border-primary/50 transition-all duration-500 rounded-2xl overflow-hidden backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-all"></div>
                  <div className="relative w-16 h-16 flex items-center justify-center bg-background rounded-xl border border-primary/20 shadow-[0_0_15px_rgba(0,229,255,0.1)] group-hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold font-headline text-white mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

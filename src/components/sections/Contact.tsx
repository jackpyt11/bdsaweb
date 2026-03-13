'use client';

import { MapPin, Mail, Phone, Globe, Facebook, Linkedin, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const contactCards = [
  {
    title: ["অফিস", "লোকেশন"],
    icon: <MapPin className="w-8 h-8 text-primary" />,
    details: [
      "লেভেল ১২, ডিজিটাল ভিশন টাওয়ার,",
      "ধানমন্ডি ২৭, ঢাকা-১২০৯, বাংলাদেশ।"
    ],
    isGlass: true
  },
  {
    title: ["২৪/৭", "সহায়তা কেন্দ্র"],
    icon: <Phone className="w-8 h-8 text-primary" />,
    details: [
      "হেল্পলাইন: ১৬১২২ (ভূমি ও সিস্টেম সেবা)",
      "অফিসিয়াল সাপোর্ট: +৮৮০ ১৭০০-৭৮৯৪৫২"
    ],
    highlight: true
  },
  {
    title: ["অনলাইন", "যোগাযোগ"],
    icon: <Mail className="w-8 h-8 text-primary group-hover:animate-pulse" />,
    details: [
      "সাধারণ তথ্য: info@bdsa.gov.bd",
      "কারিগরি সাপোর্ট: support@bdsa.gov.bd"
    ],
    isEmail: true
  },
  {
    title: ["ডিজিটাল", "প্ল্যাটফর্ম"],
    icon: <Globe className="w-8 h-8 text-primary" />,
    details: [
      "ফেসবুক: fb.com/bdsa.official",
      "লিঙ্কডইন: linkedin.com/company/bdsa",
      "প্রশাসনিক পোর্টাল: www.bdsa.gov.bd"
    ],
    isSocial: true
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden border-t border-primary/20">
      {/* Decorative Cyan Ambient Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black font-headline text-white mb-4">
            আমাদের সাথে <span className="text-primary drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]">যোগাযোগ</span>
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full shadow-[0_0_15px_#00FFFF]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactCards.map((card, idx) => (
              <div 
                key={idx} 
                className={cn(
                  "group p-8 rounded-3xl border border-primary/20 bg-card/20 backdrop-blur-md hover:border-primary/50 transition-all duration-500 flex flex-col items-center text-center",
                  card.isGlass && "bg-primary/5 shadow-xl"
                )}
              >
                <div className="mb-6 p-4 rounded-2xl bg-primary/10 border border-primary/20 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,255,255,0.1)]">
                  {card.icon}
                </div>
                
                {/* Two-Line Title */}
                <h3 className="text-2xl font-black font-headline text-primary mb-6 flex flex-col items-center leading-tight tracking-tight drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]">
                  {card.title.map((word, wIdx) => (
                    <span key={wIdx}>{word}</span>
                  ))}
                </h3>

                <div className="space-y-3 w-full">
                  {card.details.map((line, lIdx) => {
                    // Two-Color Logic for Details
                    if (line.includes(':')) {
                      const [label, value] = line.split(':');
                      return (
                        <p key={lIdx} className="text-sm font-medium leading-relaxed text-white">
                          <span className="opacity-80">{label}:</span> <span className="text-primary drop-shadow-[0_0_8px_rgba(0,255,255,0.6)] font-black">{value}</span>
                        </p>
                      );
                    }
                    return (
                      <p 
                        key={lIdx} 
                        className="text-sm font-medium leading-relaxed text-muted-foreground"
                      >
                        {line}
                      </p>
                    );
                  })}
                </div>
                
                {card.isSocial && (
                  <div className="mt-8 flex gap-3">
                    <button className="p-2.5 rounded-xl border border-primary/30 text-primary hover:bg-primary hover:text-black transition-all shadow-[0_0_10px_rgba(0,255,255,0.05)]">
                      <Facebook className="w-4 h-4" />
                    </button>
                    <button className="p-2.5 rounded-xl border border-primary/30 text-primary hover:bg-primary hover:text-black transition-all shadow-[0_0_10px_rgba(0,255,255,0.05)]">
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button className="p-2.5 rounded-xl border border-primary/30 text-primary hover:bg-primary hover:text-black transition-all shadow-[0_0_10px_rgba(0,255,255,0.05)]">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Ultra Dark Map with Cyan Accent */}
          <div className="relative h-full min-h-[500px] rounded-[40px] overflow-hidden border-2 border-primary/30 shadow-[0_0_30px_rgba(0,255,255,0.1)] group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902262967205!2d90.3713!3d23.7509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b90f467971%3A0x7d6c5d9e50438a3a!2sDhanmondi%2027!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ 
                border: 0, 
                filter: 'invert(90%) hue-rotate(180deg) brightness(0.7) contrast(1.2)' 
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BDSA Office Location"
            ></iframe>
            
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background via-transparent to-transparent opacity-40"></div>
            <div className="absolute inset-0 pointer-events-none border-[20px] border-background/50 rounded-[40px]"></div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="relative flex h-12 w-12 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-40"></span>
                <div className="relative bg-primary p-2 rounded-full shadow-[0_0_15px_#00FFFF]">
                   <MapPin className="w-6 h-6 text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

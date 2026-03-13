'use client';

import { MapPin, Mail, Phone, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0A192F] border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold font-headline mb-6 text-white">
                আমাদের <span className="text-primary drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">অবস্থান</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                অফিশিয়াল অথেন্টিকেশন সেবা এবং প্রশাসনিক অনুসন্ধানের জন্য আমাদের সদর দপ্তরে ভিজিট করুন।
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4 group">
                <div className="shrink-0 p-3 rounded-xl bg-primary/10 text-primary h-fit border border-primary/20 group-hover:bg-primary group-hover:text-background transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-white">সদর দপ্তরের ঠিকানা</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">লেভেল ১২, ডিজিটাল ভিশন টাওয়ার,<br />ধানমন্ডি ২৭, ঢাকা - ১২০৯</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="shrink-0 p-3 rounded-xl bg-primary/10 text-primary h-fit border border-primary/20 group-hover:bg-primary group-hover:text-background transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-white">ইমেইল সাপোর্ট</h4>
                  <p className="text-muted-foreground text-sm">support@bdsa.gov.bd<br />info@bdsa.gov.bd</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="shrink-0 p-3 rounded-xl bg-primary/10 text-primary h-fit border border-primary/20 group-hover:bg-primary group-hover:text-background transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-white">সরাসরি লাইন</h4>
                  <p className="text-muted-foreground text-sm">হেল্পলাইন: ১৬১২২<br />+৮৮০ ১৭০০-XXXXXX</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="shrink-0 p-3 rounded-xl bg-primary/10 text-primary h-fit border border-primary/20 group-hover:bg-primary group-hover:text-background transition-all">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-white">অফিস সময়</h4>
                  <p className="text-muted-foreground text-sm">রবিবার - বৃহস্পতিবার<br />সকাল ০৯:০০ - বিকাল ০৫:০০</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[450px] lg:h-full min-h-[450px] rounded-3xl overflow-hidden border border-primary/30 shadow-[0_0_30px_rgba(0,255,255,0.1)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902262967205!2d90.3713!3d23.7509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b90f467971%3A0x7d6c5d9e50438a3a!2sDhanmondi%2027!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.9)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BDSA Office Location"
            ></iframe>
            {/* Overlay Grid for Tech Look */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,25,47,0.2)_100%)]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

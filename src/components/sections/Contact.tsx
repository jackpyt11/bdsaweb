import { MapPin, Mail, Phone, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-card/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold font-headline mb-6">আমাদের অবস্থান</h2>
              <p className="text-muted-foreground text-lg">অফিশিয়াল অথেন্টিকেশন সেবা এবং প্রশাসনিক অনুসন্ধানের জন্য আমাদের সদর দপ্তরে ভিজিট করুন।</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="shrink-0 p-3 rounded-xl bg-primary/10 text-primary h-fit">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">সদর দপ্তরের ঠিকানা</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">লেভেল ১২, ডিজিটাল ভিশন টাওয়ার,<br />ধানমন্ডি ২৭, ঢাকা - ১২০৯</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 p-3 rounded-xl bg-primary/10 text-primary h-fit">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">ইমেইল সাপোর্ট</h4>
                  <p className="text-muted-foreground text-sm">support@bdsa.gov.bd<br />info@bdsa.gov.bd</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 p-3 rounded-xl bg-primary/10 text-primary h-fit">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">সরাসরি লাইন</h4>
                  <p className="text-muted-foreground text-sm">+৮৮০ ২ ৯১১-XXXX<br />+৮৮০ ১৭০০-XXXXXX</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 p-3 rounded-xl bg-primary/10 text-primary h-fit">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">অফিস সময়</h4>
                  <p className="text-muted-foreground text-sm">রবিবার - বৃহস্পতিবার<br />সকাল ০৯:০০ - বিকাল ০৫:০০</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden border border-border">
            {/* Map Placeholder with dark theme aesthetic */}
            <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
              <div className="text-center space-y-4 px-8">
                <MapPin className="w-12 h-12 text-primary mx-auto opacity-50" />
                <p className="text-muted-foreground font-code text-sm">ইন্টারেক্টিভ ম্যাপ লোড হচ্ছে...<br />[ ধানমন্ডি, ঢাকা ]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

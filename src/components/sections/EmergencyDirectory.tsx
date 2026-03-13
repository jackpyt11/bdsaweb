'use client';

import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  PhoneCall, 
  Info, 
  ShieldAlert, 
  MapPin, 
  IdCard, 
  Users, 
  ShieldCheck, 
  Plane, 
  Activity 
} from 'lucide-react';

const directories = [
  {
    name: "জাতীয় তথ্য বাতায়ন",
    number: "৩৩৩",
    type: "সরকারি সেবা, অভিযোগ ও সামাজিক সমস্যার সমাধান।",
    icon: <Info className="w-4 h-4 text-primary" />
  },
  {
    name: "জরুরী সেবা",
    number: "৯৯৯",
    type: "পুলিশ, ফায়ার সার্ভিস ও অ্যাম্বুলেন্স সহায়তা।",
    icon: <ShieldAlert className="w-4 h-4 text-rose-500" />
  },
  {
    name: "ভূমি সেবা (Land Service)",
    number: "১৬১২২",
    type: "ই-নামজারি, খাজনা ও খতিয়ান সংক্রান্ত তথ্য।",
    icon: <MapPin className="w-4 h-4 text-primary" />
  },
  {
    name: "জাতীয় পরিচয়পত্র (NID)",
    number: "১০৫",
    type: "স্মার্ট কার্ড ও এনআইডি সংশোধন সংক্রান্ত তথ্য।",
    icon: <IdCard className="w-4 h-4 text-primary" />
  },
  {
    name: "নারী ও শিশু নির্যাতন",
    number: "১০৯",
    type: "নির্যাতন প্রতিরোধ ও আইনি সহায়তা।",
    icon: <Users className="w-4 h-4 text-rose-400" />
  },
  {
    name: "সাইবার সিকিউরিটি (BGD e-GOV CIRT)",
    number: "০১৭৬৬৬৭৮৮৮৮",
    type: "সাইবার অপরাধ ও ডিজিটাল নিরাপত্তা সংক্রান্ত রিপোর্ট।",
    icon: <ShieldCheck className="w-4 h-4 text-primary" />
  },
  {
    name: "পাসপোর্ট সেবা",
    number: "১৬৪৪৫",
    type: "পাসপোর্ট স্ট্যাটাস ও আবেদন সংক্রান্ত তথ্য।",
    icon: <Plane className="w-4 h-4 text-primary" />
  },
  {
    name: "বিডিএসএ হেল্পডেস্ক (BDSA)",
    number: "১৬XXX",
    type: "ডিজিটাল আইডি ও সিস্টেম ভেরিফিকেশন সহায়তা।",
    icon: <Activity className="w-4 h-4 text-primary" />
  }
];

export default function EmergencyDirectory() {
  return (
    <section id="emergency" className="py-24 bg-[#0A192F] relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black font-headline mb-4 text-white">
            জরুরী হেল্পলাইন ও <span className="text-primary drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">ডিজিটাল সহায়তা কেন্দ্র</span>
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full shadow-[0_0_10px_#00FFFF] mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">নাগরিক সেবা এবং ডিজিটাল নিরাপত্তার জন্য গুরুত্বপূর্ণ কন্টাক্ট ডিরেক্টরি।</p>
        </div>

        <div className="rounded-2xl border border-primary/20 bg-card/40 backdrop-blur-xl overflow-hidden shadow-2xl">
          <Table>
            <TableHeader className="bg-primary/5">
              <TableRow className="border-primary/20 hover:bg-transparent">
                <TableHead className="text-primary font-bold uppercase tracking-wider h-14">সেবার নাম</TableHead>
                <TableHead className="text-primary font-bold uppercase tracking-wider h-14">হেল্পলাইন নম্বর</TableHead>
                <TableHead className="text-primary font-bold uppercase tracking-wider h-14">সেবার ধরণ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {directories.map((item, idx) => (
                <TableRow key={idx} className="border-primary/10 hover:bg-primary/5 transition-colors group">
                  <TableCell className="font-bold text-white py-4 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-background border border-primary/10 group-hover:border-primary/30 transition-all shadow-inner">
                      {item.icon}
                    </div>
                    {item.name}
                  </TableCell>
                  <TableCell className="py-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-black tracking-widest text-sm">
                      <PhoneCall className="w-3 h-3" />
                      {item.number}
                    </span>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm font-medium py-4">
                    {item.type}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10 text-center">
          <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] animate-blink">
            সিস্টেম ভেরিফিকেশন এবং আইটি সাপোর্টের জন্য আমাদের ২৪/৭ সাপোর্ট টিম প্রস্তুত আছে।
          </p>
        </div>
      </div>
    </section>
  );
}

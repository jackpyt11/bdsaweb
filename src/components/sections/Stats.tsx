'use client';

import { useEffect, useState } from 'react';
import { Users, Shield, Server, CheckCircle } from 'lucide-react';

const stats = [
  { label: "যাচাইকৃত সদস্য", value: 5000, suffix: "+", icon: <Users className="w-6 h-6" /> },
  { label: "সিস্টেম নিরাপত্তা", value: 99.9, suffix: "%", icon: <Shield className="w-6 h-6" /> },
  { label: "দৈনিক লেনদেন", value: 1500, suffix: "+", icon: <Server className="w-6 h-6" /> },
  { label: "সক্রিয় নোড", value: 45, suffix: "", icon: <CheckCircle className="w-6 h-6" /> },
];

export default function Stats() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCounts(stats.map(s => {
        const progress = Math.min(currentStep / steps, 1);
        return Math.floor(s.value * progress * 10) / 10;
      }));

      if (currentStep >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="relative p-8 rounded-2xl bg-white border-l-4 border-[#1B365D] shadow-[0_10px_40px_-15px_rgba(27,54,93,0.1)] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="mb-4 w-12 h-12 rounded-full bg-[#1B365D]/5 flex items-center justify-center text-[#1B365D] group-hover:bg-[#1B365D] group-hover:text-white transition-colors">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold font-headline text-[#1B365D] mb-1">
                {counts[idx].toLocaleString()}{stat.suffix}
              </div>
              <p className="text-xs font-bold text-[#5E7D9A] uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    <section className="py-24 bg-background border-y border-primary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="relative p-8 rounded-2xl bg-card border border-primary/20 shadow-2xl hover:border-primary/50 transition-all duration-300 group neon-border">
              <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold font-headline text-primary mb-1 neon-glow">
                {counts[idx].toLocaleString()}{stat.suffix}
              </div>
              <p className="text-xs font-bold text-foreground/60 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
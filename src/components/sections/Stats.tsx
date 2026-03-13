
'use client';

import { useEffect, useState } from 'react';
import { Users, Shield, Server, CheckCircle } from 'lucide-react';

const stats = [
  { label: "Verified Members", value: 5000, suffix: "+", icon: <Users className="w-6 h-6" /> },
  { label: "System Security", value: 99.9, suffix: "%", icon: <Shield className="w-6 h-6" /> },
  { label: "Daily Transactions", value: 1500, suffix: "+", icon: <Server className="w-6 h-6" /> },
  { label: "Active Nodes", value: 45, suffix: "", icon: <CheckCircle className="w-6 h-6" /> },
];

export default function Stats() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000; // 2 seconds
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
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="relative p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 group">
              <div className="absolute top-0 right-0 p-4 text-primary/10 transition-transform group-hover:scale-110">
                {stat.icon}
              </div>
              <div className="text-4xl sm:text-5xl font-bold font-headline text-primary mb-2">
                {counts[idx].toLocaleString()}{stat.suffix}
              </div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

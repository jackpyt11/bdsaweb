'use client';
import { useEffect, useState } from 'react';
import { Users, Shield, Server, CheckCircle } from 'lucide-react';

const stats = [
  { label: "নিবন্ধিত নাগরিক", value: 10, suffix: "M+", icon: <Users className="h-8 w-8" /> },
  { label: "দৈনিক লেনদেন", value: 2, suffix: "M+", icon: <Server className="h-8 w-8" /> },
  { label: "পরিষেবা প্রদানকারী", value: 150, suffix: "+", icon: <CheckCircle className="h-8 w-8" /> },
  { label: "সিস্টেম আপটাইম", value: 99.9, suffix: "%", icon: <Shield className="h-8 w-8" /> },
];

const CountUp = ({ end, duration }: { end: number; duration: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const endValue = end;
    const increment = endValue / (duration / 16); 

    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{end % 1 === 0 ? Math.floor(count).toLocaleString() : count.toFixed(1)}</span>;
};

export default function Stats() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="group p-8 rounded-2xl border border-primary/10 bg-card/30 text-center hover:border-primary/40 transition-all shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]">
              <div className="mb-6 text-primary flex justify-center group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-5xl font-black text-white font-headline tracking-tighter mb-2">
                <CountUp end={stat.value} duration={2000} />
                <span className="text-primary ml-1">{stat.suffix}</span>
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Server, UserCheck, ChartColumn, Shield } from 'lucide-react';

const services = [
  {
    icon: <Server className="w-10 h-10" />,
    title: "System Management",
    desc: "Comprehensive oversight of digital infrastructure to ensure 24/7 availability and resilience."
  },
  {
    icon: <ChartColumn className="w-10 h-10" />,
    title: "IT Consultancy",
    desc: "Strategic advisory for government and private entities to navigate digital transformation."
  },
  {
    icon: <UserCheck className="w-10 h-10" />,
    title: "Verification Service",
    desc: "Robust ID and certificate verification protocols utilizing cutting-edge blockchain technology."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold font-headline mb-4 text-[#1B365D]">Our Core Services</h2>
          <p className="text-[#5E7D9A] font-medium">Empowering Bangladesh's digital landscape with reliable, secure, and modern solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group relative p-10 rounded-2xl border border-slate-100 bg-white hover:border-[#1B365D]/20 transition-all duration-500 shadow-[0_10px_40px_-15px_rgba(27,54,93,0.08)] hover:shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#1B365D] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="mb-8 text-[#1B365D] w-16 h-16 rounded-2xl bg-[#1B365D]/5 flex items-center justify-center group-hover:bg-[#1B365D] group-hover:text-white transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold font-headline mb-4 text-[#1B365D]">
                {service.title}
              </h3>
              <p className="text-[#5E7D9A] leading-relaxed font-medium">
                {service.desc}
              </p>
              <div className="mt-8 pt-8 border-t border-slate-100 flex items-center gap-2 text-sm font-bold text-[#1B365D] opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <Shield className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

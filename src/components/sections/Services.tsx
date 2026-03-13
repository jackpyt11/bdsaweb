import { Server, UserCheck, BarChart3, Shield } from 'lucide-react';

const services = [
  {
    icon: <Server className="w-8 h-8" />,
    title: "System Management",
    desc: "Comprehensive oversight of digital infrastructure to ensure 24/7 availability and resilience."
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "IT Consultancy",
    desc: "Strategic advisory for government and private entities to navigate digital transformation."
  },
  {
    icon: <UserCheck className="w-8 h-8" />,
    title: "Verification Service",
    desc: "Robust ID and certificate verification protocols utilizing cutting-edge blockchain technology."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-headline text-[#1B365D] mb-4">Our Core Services</h2>
          <p className="text-slate-500">Empowering Bangladesh's digital landscape with reliable, secure, and modern solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-xl border border-slate-100 bg-[#F8F9FA] hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-6 text-[#D4AF37]">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold font-headline mb-3 text-[#1B365D]">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              <div className="pt-4 border-t border-slate-200 flex items-center gap-2 text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                Learn More <Shield className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

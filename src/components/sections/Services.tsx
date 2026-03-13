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
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold font-headline mb-4">Our Core Services</h2>
          <p className="text-muted-foreground">Empowering Bangladesh's digital landscape with reliable, secure, and modern solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group relative p-10 rounded-2xl border border-border bg-card hover:bg-gradient-to-br hover:from-primary/10 hover:to-transparent transition-all duration-500 overflow-hidden shadow-md"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors"></div>
              <div className="mb-8 text-primary group-hover:scale-110 transition-transform origin-left">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold font-headline mb-4 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
              <div className="mt-8 pt-8 border-t border-border flex items-center gap-2 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <Shield className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock } from 'lucide-react';

const news = [
  {
    title: "BDSA Achieves ISO 27001 Certification for Cybersecurity",
    excerpt: "The authority has successfully completed the rigorous international standard for information security...",
    date: "Oct 28, 2024",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/news1/600/400"
  },
  {
    title: "Integration with Bangladesh Bank Completed",
    excerpt: "New banking protocols now utilize BDSA verification for all high-value digital transactions...",
    date: "Oct 25, 2024",
    readTime: "3 min read",
    image: "https://picsum.photos/seed/news2/600/400"
  },
  {
    title: "National Digital Summit 2024 Recap",
    excerpt: "Highlights from the largest gathering of system administrators and digital policy makers in Dhaka...",
    date: "Oct 20, 2024",
    readTime: "8 min read",
    image: "https://picsum.photos/seed/news3/600/400"
  }
];

export default function News() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-bold font-headline mb-4">Latest Insights</h2>
            <p className="text-muted-foreground max-w-xl">Staying ahead of the curve with technological updates and organizational achievements.</p>
          </div>
          <button className="text-primary font-bold hover:underline">Read All Articles</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, idx) => (
            <Card key={idx} className="overflow-hidden border-border bg-card group cursor-pointer hover:border-primary/50 transition-all">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-[10px] text-muted-foreground uppercase font-bold tracking-widest mb-4">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {item.readTime}</span>
                </div>
                <h3 className="text-xl font-bold font-headline mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                  {item.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

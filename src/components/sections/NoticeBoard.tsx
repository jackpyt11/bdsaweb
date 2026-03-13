
import { Bell, QrCode, ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const notices = [
  {
    title: "New E-ID Registration Deadline Extended for Fiscal Year 2024",
    ref: "BDSA/NOT/2024/042",
    date: "Oct 24, 2024",
    isNew: true
  },
  {
    title: "Updated Security Protocol for System Management API Access",
    ref: "BDSA/SEC/2024/015",
    date: "Oct 20, 2024",
    isNew: false
  },
  {
    title: "Official Partnership Announcement: Bangladesh Bank Digital Framework",
    ref: "BDSA/PR/2024/088",
    date: "Oct 15, 2024",
    isNew: false
  }
];

export default function NoticeBoard() {
  return (
    <section id="notice" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <Bell className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold font-headline">Official Notice Board</h2>
              <p className="text-muted-foreground">Transparency through official dissemination</p>
            </div>
          </div>
          <button className="hidden sm:block text-primary font-bold hover:underline">View All Notices</button>
        </div>

        <div className="space-y-4">
          {notices.map((notice, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-xl border border-border bg-background hover:border-primary transition-all cursor-pointer"
            >
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{notice.title}</h3>
                  {notice.isNew && (
                    <span className="text-[10px] font-bold bg-destructive text-destructive-foreground px-2 py-0.5 rounded uppercase animate-blink">New</span>
                  )}
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="font-code">Ref: {notice.ref}</span>
                  <span>Date: {notice.date}</span>
                </div>
              </div>

              <div className="flex items-center gap-6 mt-4 md:mt-0">
                <div className="flex flex-col items-center">
                  <div className="p-1 bg-white rounded-sm mb-1">
                    <QrCode className="w-8 h-8 text-black" />
                  </div>
                  <span className="text-[8px] text-muted-foreground font-bold">VERIFY</span>
                </div>
                <div className="p-2 rounded-full bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

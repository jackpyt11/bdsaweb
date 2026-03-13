import { Bell, QrCode, ArrowUpRight } from 'lucide-react';

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
    <section id="notice" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-[#1B365D]/5 rounded-2xl text-[#1B365D]">
              <Bell className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold font-headline text-[#1B365D]">Official Notice Board</h2>
              <p className="text-[#5E7D9A] font-medium">Transparency through official dissemination</p>
            </div>
          </div>
          <button className="hidden sm:block text-[#1B365D] font-bold hover:underline decoration-2 underline-offset-4">View All Notices</button>
        </div>

        <div className="space-y-6">
          {notices.map((notice, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col md:flex-row items-start md:items-center justify-between p-8 rounded-2xl border border-slate-100 bg-white hover:border-[#1B365D]/30 transition-all cursor-pointer shadow-[0_4px_20px_-10px_rgba(27,54,93,0.1)] hover:shadow-xl"
            >
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-[#1B365D] group-hover:text-[#2A5A8F] transition-colors">{notice.title}</h3>
                  {notice.isNew && (
                    <span className="text-[10px] font-bold bg-[#E53E3E] text-white px-3 py-1 rounded-full uppercase animate-blink">New</span>
                  )}
                </div>
                <div className="flex items-center gap-6 text-xs text-[#5E7D9A] font-bold uppercase tracking-widest">
                  <span className="bg-slate-50 px-2 py-1 rounded">Ref: {notice.ref}</span>
                  <span>Date: {notice.date}</span>
                </div>
              </div>

              <div className="flex items-center gap-8 mt-6 md:mt-0">
                <div className="flex flex-col items-center">
                  <div className="p-2 bg-slate-50 rounded-lg mb-2 border border-slate-100 group-hover:bg-white transition-colors">
                    <QrCode className="w-8 h-8 text-[#1B365D]" />
                  </div>
                  <span className="text-[9px] text-[#5E7D9A] font-bold uppercase tracking-tighter">Verify Notice</span>
                </div>
                <div className="p-3 rounded-2xl bg-[#1B365D]/5 text-[#1B365D] group-hover:bg-[#1B365D] group-hover:text-white transition-all shadow-sm">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    <section id="notice" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#1B365D]/5 rounded-lg text-[#1B365D]">
              <Bell className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-headline text-[#1B365D]">Official Notice Board</h2>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Latest Communications</p>
            </div>
          </div>
          <button className="hidden sm:block text-[#D4AF37] text-sm font-bold hover:underline">View All Notices</button>
        </div>

        <div className="space-y-3">
          {notices.map((notice, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col md:flex-row items-start md:items-center justify-between p-5 rounded-lg border border-slate-100 bg-[#F8F9FA] hover:border-[#D4AF37] transition-all cursor-pointer"
            >
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-[#1B365D] group-hover:text-[#D4AF37] transition-colors">{notice.title}</h3>
                  {notice.isNew && (
                    <span className="text-[9px] font-bold bg-[#E53E3E] text-white px-1.5 py-0.5 rounded uppercase animate-blink">New</span>
                  )}
                </div>
                <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                  <span className="bg-slate-200 px-1.5 rounded text-slate-600">Ref: {notice.ref}</span>
                  <span>Date: {notice.date}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4 md:mt-0">
                <div className="flex flex-col items-center">
                  <div className="p-1 bg-white rounded-sm mb-1 border border-slate-200">
                    <QrCode className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-[8px] text-slate-400 font-bold uppercase">Verify</span>
                </div>
                <div className="p-2 rounded-md bg-[#D4AF37]/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

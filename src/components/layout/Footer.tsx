import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#1B365D] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <div className="relative w-40 h-16">
                <Image
                  src="https://res.cloudinary.com/dd3eekw7h/image/upload/v1773428346/Logo_-removebg-preview_qatfd0.png"
                  alt="বিডিএসএ লোগো"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              বাংলাদেশ ডিজিটাল সিস্টেম অথরিটি হলো জাতীয় ডিজিটাল ইকোসিস্টেমের তদারকি ও ব্যবস্থাপনার জন্য দায়ী সংবিধিবদ্ধ সংস্থা।
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">দ্রুত লিংক</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li><Link href="/" className="hover:text-[#D4AF37]">অফিশিয়াল নোটিশ</Link></li>
              <li><Link href="/" className="hover:text-[#D4AF37]">যাচাইকরণ পোর্টাল</Link></li>
              <li><Link href="/" className="hover:text-[#D4AF37]">সেবা ক্যাটালগ</Link></li>
              <li><Link href="/admin" className="hover:text-[#D4AF37]">অ্যাডমিন পোর্টাল</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">আইনি তথ্য</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li><Link href="/" className="hover:text-[#D4AF37]">গোপনীয়তা নীতি</Link></li>
              <li><Link href="/" className="hover:text-[#D4AF37]">ব্যবহারের শর্তাবলী</Link></li>
              <li><Link href="/" className="hover:text-[#D4AF37]">অ্যাক্সেসিবিলিটি</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400">
          <div>© ২০২৪ বিডিএসএ। সর্বস্বত্ব সংরক্ষিত।</div>
          <div className="text-[#D4AF37]">অফিশিয়াল সরকারি ডিজিটাল ফ্রেমওয়ার্ক অথরিটি</div>
          <div>WWW.BDSA.GOV.BD</div>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#050d1f] text-foreground border-t border-primary/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <div className="relative w-40 h-16">
                <Image
                  src="https://res.cloudinary.com/dd3eekw7h/image/upload/v1773428346/Logo_-removebg-preview_qatfd0.png"
                  alt="বিডিএসএ লোগো"
                  fill
                  className="object-contain object-left brightness-125"
                />
              </div>
            </Link>
            <p className="text-foreground/60 text-sm leading-relaxed max-w-sm">
              বাংলাদেশ ডিজিটাল সিস্টেম অথরিটি হলো জাতীয় ডিজিটাল ইকোসিস্টেমের তদারকি ও ব্যবস্থাপনার জন্য দায়ী সংবিধিবদ্ধ সংস্থা।
            </p>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6 uppercase tracking-wider text-sm neon-glow">দ্রুত লিংক</h4>
            <ul className="space-y-4 text-sm text-foreground/60">
              <li><Link href="/" className="hover:text-primary">অফিশিয়াল নোটিশ</Link></li>
              <li><Link href="/" className="hover:text-primary">যাচাইকরণ পোর্টাল</Link></li>
              <li><Link href="/" className="hover:text-primary">সেবা ক্যাটালগ</Link></li>
              <li><Link href="/admin" className="hover:text-primary">অ্যাডমিন পোর্টাল</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6 uppercase tracking-wider text-sm neon-glow">আইনি তথ্য</h4>
            <ul className="space-y-4 text-sm text-foreground/60">
              <li><Link href="/" className="hover:text-primary">গোপনীয়তা নীতি</Link></li>
              <li><Link href="/" className="hover:text-primary">ব্যবহারের শর্তাবলী</Link></li>
              <li><Link href="/" className="hover:text-primary">অ্যাক্সেসিবিলিটি</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-foreground/40">
          <div>© ২০২৪ বিডিএসএ। সর্বস্বত্ব সংরক্ষিত।</div>
          <div className="text-primary opacity-80">অফিশিয়াল সরকারি ডিজিটাল ফ্রেমওয়ার্ক অথরিটি</div>
          <div>WWW.BDSA.GOV.BD</div>
        </div>
      </div>
    </footer>
  );
}
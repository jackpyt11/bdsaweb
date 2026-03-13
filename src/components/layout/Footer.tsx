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
                  alt="BDSA Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              The Bangladesh Digital Systems Authority is the statutory body responsible for the oversight and management of national digital ecosystems.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li><Link href="/" className="hover:text-[#D4AF37]">Official Notices</Link></li>
              <li><Link href="/" className="hover:text-[#D4AF37]">Verification Portal</Link></li>
              <li><Link href="/" className="hover:text-[#D4AF37]">Service Catalog</Link></li>
              <li><Link href="/admin" className="hover:text-[#D4AF37]">Admin Portal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li><Link href="/" className="hover:text-[#D4AF37]">Privacy Policy</Link></li>
              <li><Link href="/" className="hover:text-[#D4AF37]">Terms of Service</Link></li>
              <li><Link href="/" className="hover:text-[#D4AF37]">Accessibility</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400">
          <div>© 2024 BDSA. ALL RIGHTS RESERVED.</div>
          <div className="text-[#D4AF37]">Official Govt. Digital Framework Authority</div>
          <div>WWW.BDSA.GOV.BD</div>
        </div>
      </div>
    </footer>
  );
}

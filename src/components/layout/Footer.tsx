
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border-2 border-primary rounded-full flex items-center justify-center">
                <span className="text-primary font-bold font-headline">B</span>
              </div>
              <h3 className="text-2xl font-bold font-headline">BDSA</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              The Bangladesh Digital Systems Authority is the statutory body responsible for the oversight and management of national digital ecosystems.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary">Official Notices</Link></li>
              <li><Link href="/" className="hover:text-primary">Verification Portal</Link></li>
              <li><Link href="/" className="hover:text-primary">Service Catalog</Link></li>
              <li><Link href="/" className="hover:text-primary">Annual Reports</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/" className="hover:text-primary">Terms of Service</Link></li>
              <li><Link href="/" className="hover:text-primary">Accessibility</Link></li>
              <li><Link href="/admin" className="hover:text-primary">Admin Login</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-muted-foreground">
          <div>© 2024 BDSA. ALL RIGHTS RESERVED.</div>
          <div className="text-primary">Managed by BDSA under Strategic IT Framework</div>
          <div>OFFICIAL URL: WWW.BDSA.GOV.BD</div>
        </div>
      </div>
    </footer>
  );
}

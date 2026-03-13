'use client';

import { useState } from 'react';
import { Search, Loader2, CheckCircle, XCircle, ShieldCheck } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function VerificationPortal() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleVerify = () => {
    if (!query) return;
    setStatus('loading');
    
    setTimeout(() => {
      if (query.length >= 8) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    }, 1500);
  };

  return (
    <section className="py-24 bg-[#F8F9FA] relative overflow-hidden border-y border-slate-200/60">
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-2xl mx-auto rounded-3xl bg-white p-8 md:p-12 shadow-[0_20px_50px_-20px_rgba(27,54,93,0.15)] border border-slate-100">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-[#1B365D]/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-8 h-8 text-[#1B365D]" />
            </div>
            <h2 className="text-3xl font-bold font-headline text-[#1B365D] mb-3">ID Verification Portal</h2>
            <p className="text-[#5E7D9A] text-sm max-w-sm mx-auto font-medium">Access the national database to verify professional identity cards and official certifications.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input 
                className="pl-11 h-12 bg-slate-50 border-slate-200 focus:bg-white focus:ring-[#1B365D] transition-all rounded-xl"
                placeholder="Enter 12-digit Verification ID..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <Button 
              className="h-12 px-8 font-bold bg-[#1B365D] hover:bg-[#1B365D]/90 text-white transition-all rounded-xl shadow-lg shadow-[#1B365D]/20"
              onClick={handleVerify}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Verify Now'}
            </Button>
          </div>

          {status === 'success' && (
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-800 animate-in fade-in slide-in-from-top-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold">Identity Verified</h4>
                <p className="text-xs font-medium opacity-80">Status: <strong>Active Official</strong> • Records match our registry.</p>
              </div>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-rose-50 border border-rose-100 text-rose-800 animate-in fade-in slide-in-from-top-4">
              <div className="w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center shrink-0">
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold">Record Not Found</h4>
                <p className="text-xs font-medium opacity-80">We couldn't find a record for the provided ID. Please check and try again.</p>
              </div>
            </div>
          )}

          <div className="mt-10 pt-8 border-t border-slate-100 text-center">
            <p className="text-[10px] text-[#5E7D9A] font-bold uppercase tracking-widest italic opacity-60">
              Note: Unauthorized access to the national database is strictly prohibited.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

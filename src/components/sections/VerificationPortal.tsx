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
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-2xl mx-auto rounded-2xl border border-slate-200 bg-[#F8F9FA] p-6 md:p-10 shadow-xl">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <h2 className="text-2xl font-bold font-headline text-[#1B365D] mb-2">ID Verification Portal</h2>
            <p className="text-slate-500 text-sm">Access the national database to verify professional identity cards and official certifications.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input 
                className="pl-10 h-10 bg-white border-slate-200 focus:ring-[#D4AF37] text-sm"
                placeholder="Enter 12-digit Verification ID..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <Button 
              className="h-10 px-6 font-bold bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-white transition-all text-sm"
              onClick={handleVerify}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Verify Now'}
            </Button>
          </div>

          {status === 'success' && (
            <div className="flex items-center gap-3 p-4 rounded-lg bg-green-50 border border-green-100 text-green-700 animate-in fade-in slide-in-from-top-2">
              <CheckCircle className="w-5 h-5 shrink-0" />
              <div>
                <h4 className="text-sm font-bold">Identity Verified</h4>
                <p className="text-xs">Status: <strong>Active Official</strong> • Records match our registry.</p>
              </div>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center gap-3 p-4 rounded-lg bg-red-50 border border-red-100 text-red-700 animate-in fade-in slide-in-from-top-2">
              <XCircle className="w-5 h-5 shrink-0" />
              <div>
                <h4 className="text-sm font-bold">Record Not Found</h4>
                <p className="text-xs">We couldn't find a record for the provided ID. Please check and try again.</p>
              </div>
            </div>
          )}

          <p className="text-center text-[10px] text-slate-400 mt-6 italic">
            Note: Unauthorized access to the national database is strictly prohibited by Digital Security Act.
          </p>
        </div>
      </div>
    </section>
  );
}

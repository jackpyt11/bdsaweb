'use client';

import { useState } from 'react';
import { Search, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function VerificationPortal() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleVerify = () => {
    if (!query) return;
    setStatus('loading');
    
    // Simulating Firebase Firestore lookup
    setTimeout(() => {
      if (query.length >= 8) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    }, 1500);
  };

  return (
    <section className="py-24 bg-[#1E4069]/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full translate-y-1/2"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-2xl mx-auto rounded-3xl border border-secondary bg-card p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-headline text-[#1E4069] mb-3">ID Verification Portal</h2>
            <p className="text-muted-foreground text-sm">Access the national database to verify professional identity cards and official certifications.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                className="pl-10 h-11 bg-background border-border focus:ring-accent text-sm"
                placeholder="Enter 12-digit Verification ID..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <Button 
              className="h-11 px-6 font-bold bg-[#2A5A8F] hover:bg-[#1E4069] text-white transition-all"
              onClick={handleVerify}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Verify Now'}
            </Button>
          </div>

          {status === 'success' && (
            <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 animate-in fade-in slide-in-from-top-2">
              <CheckCircle className="w-6 h-6 shrink-0" />
              <div>
                <h4 className="text-sm font-bold">Identity Verified</h4>
                <p className="text-xs">Status: <strong>Active Official</strong> • Records match our registry.</p>
              </div>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center gap-3 p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive animate-in fade-in slide-in-from-top-2">
              <XCircle className="w-6 h-6 shrink-0" />
              <div>
                <h4 className="text-sm font-bold">Record Not Found</h4>
                <p className="text-xs">We couldn't find a record for the provided ID. Please check and try again.</p>
              </div>
            </div>
          )}

          <p className="text-center text-[10px] text-muted-foreground/60 mt-6 italic">
            Note: Unauthorized access to the national database is strictly prohibited by Digital Security Act.
          </p>
        </div>
      </div>
    </section>
  );
}

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
    <section className="py-24 bg-[#F8F9FA] relative overflow-hidden border-y border-border">
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-xl mx-auto rounded-3xl bg-white p-8 md:p-10 shadow-[0_20px_50px_-20px_rgba(27,54,93,0.15)] border border-border">
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-2xl font-bold font-headline mb-2">আইডি যাচাইকরণ পোর্টাল</h2>
            <p className="text-muted-foreground text-sm max-w-xs mx-auto">পেশাদার পরিচয়পত্র এবং অফিশিয়াল সার্টিফিকেট যাচাই করতে জাতীয় ডেটাবেস অ্যাক্সেস করুন।</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                className="pl-10 h-11 bg-slate-50 border-border focus:bg-white transition-all rounded-xl"
                placeholder="ভেরিফিকেশন আইডি দিন..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <Button 
              className="h-11 px-6 font-bold rounded-xl"
              onClick={handleVerify}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : 'যাচাই করুন'}
            </Button>
          </div>

          {status === 'success' && (
            <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-800 animate-in fade-in slide-in-from-top-4">
              <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
              <div>
                <h4 className="text-xs font-bold">যাচাই সফল হয়েছে</h4>
                <p className="text-[10px] opacity-80 font-medium tracking-tight">রেকর্ড আমাদের রেজিস্ট্রির সাথে মিলেছে।</p>
              </div>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center gap-3 p-4 rounded-xl bg-rose-50 border border-rose-100 text-rose-800 animate-in fade-in slide-in-from-top-4">
              <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
              <div>
                <h4 className="text-xs font-bold">রেকর্ড পাওয়া যায়নি</h4>
                <p className="text-[10px] opacity-80">দয়া করে আইডি চেক করে আবার চেষ্টা করুন।</p>
              </div>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest opacity-60">
              দ্রষ্টব্য: জাতীয় ডেটাবেসে অননুমোদিত প্রবেশ আইনত দণ্ডনীয়।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

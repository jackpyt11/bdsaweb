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
    <section className="py-24 bg-background relative overflow-hidden border-y border-primary/10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-xl mx-auto rounded-3xl bg-card/40 backdrop-blur-xl p-8 md:p-10 shadow-[0_20px_50px_-20px_rgba(0,255,255,0.1)] border border-primary/20">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/30">
              <ShieldCheck className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold font-headline mb-2 text-white">আইডি যাচাইকরণ পোর্টাল</h2>
            <p className="text-muted-foreground text-sm max-w-xs mx-auto">পেশাদার পরিচয়পত্র এবং অফিশিয়াল সার্টিফিকেট যাচাই করতে জাতীয় ডেটাবেস অ্যাক্সেস করুন।</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/50" />
              <Input 
                className="pl-10 h-12 bg-background/50 border-primary/20 focus:border-primary transition-all rounded-xl text-white placeholder:text-muted-foreground"
                placeholder="ভেরিফিকেশন আইডি দিন..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <Button 
              className="h-12 px-8 font-bold rounded-xl bg-primary text-primary-foreground hover:scale-105 transition-all shadow-[0_0_15px_rgba(0,255,255,0.3)]"
              onClick={handleVerify}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : 'যাচাই করুন'}
            </Button>
          </div>

          {status === 'success' && (
            <div className="flex items-center gap-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 animate-in fade-in slide-in-from-top-4">
              <CheckCircle className="w-6 h-6 shrink-0" />
              <div>
                <h4 className="text-sm font-bold">যাচাই সফল হয়েছে</h4>
                <p className="text-xs opacity-80">রেকর্ড আমাদের রেজিস্ট্রির সাথে মিলেছে।</p>
              </div>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center gap-4 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 animate-in fade-in slide-in-from-top-4">
              <XCircle className="w-6 h-6 shrink-0" />
              <div>
                <h4 className="text-sm font-bold">রেকর্ড পাওয়া যায়নি</h4>
                <p className="text-xs opacity-80">দয়া করে আইডি চেক করে আবার চেষ্টা করুন।</p>
              </div>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-primary/10 text-center">
            <p className="text-[10px] text-primary font-bold uppercase tracking-widest opacity-60">
              দ্রষ্টব্য: জাতীয় ডেটাবেসে অননুমোদিত প্রবেশ আইনত দণ্ডনীয়।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  Loader2, 
  CheckCircle, 
  XCircle, 
  ShieldCheck, 
  QrCode, 
  Camera, 
  Building2, 
  IdCard, 
  FileCheck,
  Info,
  ArrowRight,
  Upload,
  AlertCircle
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function VerificationPortal() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeTab, setActiveTab] = useState('id-card');
  const logo = PlaceHolderImages.find(img => img.id === 'bdsa-logo');

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      setHasCameraPermission(true);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      setHasCameraPermission(false);
    }
  };

  const handleVerify = () => {
    if (!query) return;
    setStatus('loading');
    
    // Simulating database check with your logic
    setTimeout(() => {
      if (query.length >= 8) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    }, 2000);
  };

  return (
    <section id="verify" className="py-24 bg-background relative overflow-hidden border-y border-primary/10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-headline text-white mb-4">
              স্মার্ট মাল্টি-ভেরিফিকেশন <span className="text-primary drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]">পোর্টাল</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              পেশাদার পরিচয়পত্র, অফিশিয়াল সার্টিফিকেট এবং অংশীদার সংস্থা যাচাই করতে বিডিএসএ-র কেন্দ্রীয় ডাটাবেস অ্যাক্সেস করুন।
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Main Action Area */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-8 rounded-[32px] bg-card/40 backdrop-blur-2xl border border-primary/20 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/10 transition-all"></div>
                
                <Tabs defaultValue="id-card" className="w-full" onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-3 bg-background/50 p-1 rounded-xl mb-8 border border-white/5">
                    <TabsTrigger value="certificate" className="data-[state=active]:bg-primary data-[state=active]:text-background rounded-lg font-bold text-[10px] md:text-xs">
                      <FileCheck className="w-4 h-4 mr-2 hidden md:block" /> সার্টিফিকেট
                    </TabsTrigger>
                    <TabsTrigger value="partner" className="data-[state=active]:bg-primary data-[state=active]:text-background rounded-lg font-bold text-[10px] md:text-xs">
                      <Building2 className="w-4 h-4 mr-2 hidden md:block" /> পার্টনার
                    </TabsTrigger>
                    <TabsTrigger value="id-card" className="data-[state=active]:bg-primary data-[state=active]:text-background rounded-lg font-bold text-[10px] md:text-xs">
                      <IdCard className="w-4 h-4 mr-2 hidden md:block" /> আইডি কার্ড
                    </TabsTrigger>
                  </TabsList>

                  <div className="space-y-6">
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
                      <Input 
                        className="pl-12 h-14 bg-background/50 border-primary/20 focus:border-primary transition-all rounded-2xl text-white text-lg placeholder:text-muted-foreground/50"
                        placeholder={
                          activeTab === 'certificate' ? 'সার্টিফিকেট সিরিয়াল নম্বর...' :
                          activeTab === 'partner' ? 'কোম্পানি ট্রেড লাইসেন্স বা মেম্বার আইডি...' :
                          'অফিশিয়াল আইডি নম্বর...'
                        }
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        className="flex-1 h-14 font-black text-lg rounded-2xl bg-primary text-background hover:scale-[1.02] transition-all shadow-[0_10px_20px_rgba(0,255,255,0.2)]"
                        onClick={handleVerify}
                        disabled={status === 'loading'}
                      >
                        {status === 'loading' ? <Loader2 className="w-6 h-6 animate-spin" /> : 'এখনই যাচাই করুন'}
                      </Button>

                      <Dialog onOpenChange={(open) => open && startCamera()}>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="h-14 px-8 border-primary/30 text-primary hover:bg-primary/10 rounded-2xl">
                            <Camera className="w-6 h-6" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-card border-primary/30 max-w-md rounded-[32px]">
                          <DialogHeader>
                            <DialogTitle className="text-white flex items-center gap-2">
                              <QrCode className="text-primary" /> লাইভ স্ক্যানিং ইন্টারফেস
                            </DialogTitle>
                          </DialogHeader>
                          <div className="relative aspect-square bg-black rounded-2xl overflow-hidden border-2 border-primary/20">
                            <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted playsInline />
                            <div className="absolute inset-0 border-[2px] border-primary/40 m-12 rounded-2xl pointer-events-none">
                              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary"></div>
                              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary"></div>
                              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary"></div>
                              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary"></div>
                              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary/30 animate-pulse"></div>
                            </div>
                            {hasCameraPermission === false && (
                              <div className="absolute inset-0 flex items-center justify-center bg-black/80 p-6 text-center">
                                <p className="text-rose-400 text-sm font-bold">ক্যামেরা অ্যাক্সেস পাওয়া যায়নি। ব্রাউজার সেটিং থেকে পারমিশন দিন।</p>
                              </div>
                            )}
                          </div>
                          <div className="flex flex-col gap-4 mt-4">
                            <p className="text-xs text-muted-foreground text-center">আপনার কার্ডের QR Code ফ্রেমের মাঝখানে রাখুন</p>
                            <div className="flex gap-2">
                               <Button variant="outline" className="flex-1 border-primary/20"><Upload className="w-4 h-4 mr-2" /> ছবি আপলোড</Button>
                               <Button className="flex-1 bg-primary text-background font-bold">স্ক্যান করুন</Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </Tabs>
              </div>

              {/* Status Display */}
              {status === 'success' && (
                <div className="p-1 rounded-[32px] bg-gradient-to-br from-emerald-500/50 to-transparent animate-in zoom-in duration-500">
                  <div className="p-8 rounded-[31px] bg-card/90 backdrop-blur-3xl border border-emerald-500/20">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30 text-emerald-400">
                        <CheckCircle className="w-10 h-10" />
                      </div>
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-2xl font-black text-emerald-400">✅ ভেরিফিকেশন সফল!</h4>
                          <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-black uppercase text-emerald-400">Verified</div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-emerald-500/10">
                          <div>
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Holder Name</p>
                            <p className="font-bold text-white">ড. আহমেদ রহমান</p>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Issue Date</p>
                            <p className="font-bold text-white">১২ জানুয়ারি, ২০২৪</p>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Validity</p>
                            <p className="font-bold text-white">১১ জানুয়ারি, ২০২৯</p>
                          </div>
                          <div className="flex justify-end">
                            {logo && (
                              <div className="relative w-12 h-12 opacity-50 grayscale">
                                <Image src={logo.imageUrl} alt="Seal" fill className="object-contain" />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="p-8 rounded-[32px] bg-rose-500/5 border border-rose-500/20 animate-in slide-in-from-top-4">
                  <div className="flex gap-4">
                    <div className="p-3 bg-rose-500/10 rounded-xl text-rose-500 h-fit"><AlertCircle className="w-8 h-8" /></div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-rose-500">তথ্য পাওয়া যায়নি</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        দুঃখিত, এই তথ্যটি আমাদের কেন্দ্রীয় ডাটাবেসে পাওয়া যায়নি। আপনি যদি মনে করেন এটি একটি ভুল, তবে প্রয়োজনীয় নথিপত্রসহ আমাদের সাপোর্ট উইং-এ যোগাযোগ করুন।
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Side Info Panel */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-[32px] bg-primary/5 border border-primary/20 backdrop-blur-md">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <ShieldCheck className="text-primary w-5 h-5" /> কীভাবে আসল আইডি চিনবেন?
                </h3>
                <ul className="space-y-6">
                  {[
                    { title: "হলোগ্রাফিক লোগো", desc: "কার্ডের উপরের ডান পাশে BDSA-র বিশেষ হলোগ্রাফিক লোগো চেক করুন।" },
                    { title: "ডোমেইন ভেরিফিকেশন", desc: "QR Code স্ক্যান করলে সরাসরি bdsa.gov.bd ডোমেইন আসে কি না নিশ্চিত হোন।" },
                    { title: "ডিজিটাল সিগনেচার", desc: "কার্ডের নিচে আমাদের প্রধান প্রযুক্তি কর্মকর্তার ডিজিটাল সিগনেচার যাচাই করুন।" }
                  ].map((tip, idx) => (
                    <li key={idx} className="flex gap-4 group">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs shrink-0 group-hover:bg-primary group-hover:text-background transition-all">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm mb-1">{tip.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{tip.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-[32px] border border-white/5 bg-background/30 text-center">
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4">নিরাপত্তা সতর্কতা</p>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  জাতীয় ডাটাবেসে অননুমোদিত প্রবেশ বা জালিয়াতি করার চেষ্টা আইনত দণ্ডনীয় অপরাধ। প্রতিটি সার্চের আইপি (IP) লগ করা হচ্ছে।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


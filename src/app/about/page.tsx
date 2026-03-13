'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TopBar from '@/components/layout/TopBar';
import { ShieldCheck, Target, Eye, Scale, Cpu, Globe, CheckCircle2, Award, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0A192F]">
      <TopBar />
      <Header />
      
      {/* Hero Section for About */}
      <section className="relative py-20 overflow-hidden border-b border-primary/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05)_0%,transparent_70%)]"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black font-headline text-white mb-6 tracking-tighter">
            আমাদের <span className="text-primary drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]">পরিচিতি ও লক্ষ্য</span>
          </h1>
          <p className="text-primary/60 font-bold uppercase tracking-[0.3em] text-xs">About BDSA Authority</p>
        </div>
      </section>

      {/* 1. Executive Summary */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card/20 border border-primary/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm relative overflow-hidden group hover:border-primary/30 transition-all">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary shadow-[0_0_15px_#00FFFF]"></div>
            <h2 className="text-3xl font-bold font-headline text-white mb-6 flex items-center gap-3">
              <ShieldCheck className="text-primary w-8 h-8" />
              প্রতিষ্ঠানের সারসংক্ষেপ (Executive Summary)
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-medium">
              বাংলাদেশ ডিজিটাল সিস্টেম অথরিটি (BDSA) একটি স্বায়ত্তশাসিত প্রযুক্তিগত সংস্থা যা স্মার্ট বাংলাদেশের ডিজিটাল অবকাঠামো নির্মাণ, সিস্টেম ব্যবস্থাপনা এবং জাতীয় পর্যায়ের নিরাপত্তা নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ। আমরা আধুনিক প্রযুক্তির সমন্বয়ে একটি নিরাপদ ও বৈষম্যহীন ডিজিটাল ইকোসিস্টেম গড়ে তুলছি।
            </p>
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card/40 border-primary/20 rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all">
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/20 text-primary">
                  <Target className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-headline text-white mb-4">মিশন (Mission)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  সরকারি ও বেসরকারি প্রতিটি স্তরে ডিজিটাল সিস্টেমের স্বচ্ছতা নিশ্চিত করা এবং নাগরিকদের জন্য একটি কেন্দ্রীয় ভেরিফিকেশন প্ল্যাটফর্ম প্রদান করা।
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/40 border-primary/20 rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all">
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/20 text-primary">
                  <Eye className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-headline text-white mb-4">ভিশন (Vision)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  ২০৪১ সালের স্মার্ট বাংলাদেশ বিনির্মাণে প্রযুক্তিগত মেরুদণ্ড হিসেবে কাজ করা এবং আন্তর্জাতিক মানের ডেটা সিকিউরিটি নিশ্চিত করা।
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. Legal Authorization */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-headline text-center text-white mb-16">
            আইনি স্বীকৃতি ও <span className="text-primary">লিগ্যাল ব্যাজ</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <FileText className="w-10 h-10" />, 
                label: "ট্রেড লাইসেন্স", 
                desc: "বিডিএসএ-র অধীনে পরিচালিত সকল কার্যক্রম স্থানীয় সরকার এবং বাণিজ্যিক আইন অনুযায়ী বৈধ।" 
              },
              { 
                icon: <Award className="w-10 h-10" />, 
                label: "TIN & Tax", 
                desc: "রাষ্ট্রীয় আইন অনুযায়ী শতভাগ কর প্রদানকারী প্রতিষ্ঠান।" 
              },
              { 
                icon: <Scale className="w-10 h-10" />, 
                label: "Govt. Reg. Status", 
                desc: "ডিজিটাল নিরাপত্তা আইন ও সিস্টেম গাইডলাইন অনুযায়ী নিবন্ধিত।" 
              }
            ].map((badge, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-8 bg-card/20 border border-primary/10 rounded-3xl hover:border-primary/40 transition-all">
                <div className="text-primary mb-6 drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]">{badge.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3">{badge.label}</h4>
                <p className="text-muted-foreground text-sm">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What We Do */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-headline text-center text-white mb-16">আমাদের কাজের ক্ষেত্র (What We Do)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Cpu className="w-8 h-8" />, 
                title: "কেন্দ্রীয় ডাটাবেস ব্যবস্থাপনা", 
                desc: "জাতীয় ও প্রাতিষ্ঠানিক ডেটার নিরাপত্তা ও সংরক্ষণ।" 
              },
              { 
                icon: <CheckCircle2 className="w-8 h-8" />, 
                title: "ডিজিটাল ভেরিফিকেশন", 
                desc: "সার্টিফিকেট, আইডি কার্ড এবং গুরুত্বপূর্ণ নথির সত্যতা যাচাই।" 
              },
              { 
                icon: <Globe className="w-8 h-8" />, 
                title: "সিস্টেম অডিটিং", 
                desc: "বিভিন্ন সরকারি ও বেসরকারি প্রতিষ্ঠানের আইটি কাঠামোর মান নিয়ন্ত্রণ।" 
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 border-l-4 border-primary bg-card/30 rounded-r-2xl">
                <div className="text-primary mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-headline text-center text-white mb-16">আমাদের অঙ্গীকার (Core Values)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              { title: "নিরাপত্তা", desc: "প্রতিটি নাগরিকের ডেটা আমাদের কাছে আমানত।" },
              { title: "স্বচ্ছতা", desc: "প্রতিটি সিস্টেম ভেরিফিকেশন প্রসেস শতভাগ নিরপেক্ষ।" },
              { title: "উদ্ভাবন", desc: "সময়ের সাথে তাল মিলিয়ে লেটেস্ট এআই (AI) এবং ব্লকচেইন প্রযুক্তির ব্যবহার।" }
            ].map((val, idx) => (
              <div key={idx} className="text-center group">
                <div className="text-4xl font-black text-primary/20 group-hover:text-primary transition-colors mb-4">0{idx+1}</div>
                <h4 className="text-2xl font-bold text-white mb-3">{val.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

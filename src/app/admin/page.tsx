'use client';

import { useState } from 'react';
import { generateFaqAnswer } from '@/ai/flows/admin-faq-content-generator';
import { summarizeAnnouncement } from '@/ai/flows/admin-announcement-summarizer';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Sparkles, FileText, HelpCircle, Loader2 } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function AdminPortal() {
  const [faqInput, setFaqInput] = useState('');
  const [faqOutput, setFaqOutput] = useState('');
  const [isFaqLoading, setIsFaqLoading] = useState(false);

  const [sumInput, setSumInput] = useState('');
  const [sumOutput, setSumOutput] = useState('');
  const [isSumLoading, setIsSumLoading] = useState(false);

  const handleGenerateFaq = async () => {
    if (!faqInput) return;
    setIsFaqLoading(true);
    try {
      const result = await generateFaqAnswer({ question: faqInput });
      setFaqOutput(result.answer);
    } catch (error) {
      console.error(error);
    } finally {
      setIsFaqLoading(false);
    }
  };

  const handleSummarize = async () => {
    if (!sumInput) return;
    setIsSumLoading(true);
    try {
      const result = await summarizeAnnouncement({ text: sumInput });
      setSumOutput(result.summary);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSumLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold font-headline text-primary mb-2">প্রশাসনিক হাব (Admin Hub)</h1>
          <p className="text-muted-foreground">বিডিএসএ কন্টেন্ট ম্যানেজমেন্টের জন্য এআই-চালিত টুলস।</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* FAQ Tool */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-primary" />
                এফএকিউ কন্টেন্ট জেনারেটর
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input 
                placeholder="সাধারণ প্রশ্নটি লিখুন..."
                value={faqInput}
                onChange={(e) => setFaqInput(e.target.value)}
              />
              <Button 
                onClick={handleGenerateFaq} 
                disabled={isFaqLoading}
                className="w-full"
              >
                {isFaqLoading ? <Loader2 className="animate-spin" /> : <><Sparkles className="mr-2 w-4 h-4" /> উত্তর তৈরি করুন</>}
              </Button>
              {faqOutput && (
                <div className="p-4 bg-muted rounded-lg text-sm italic">
                  <strong>পরামর্শকৃত উত্তর:</strong> {faqOutput}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Summarizer Tool */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                নোটিশ সারসংক্ষেপ জেনারেটর
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea 
                placeholder="সম্পূর্ণ নোটিশ টেক্সট এখানে পেস্ট করুন..."
                className="min-h-[150px]"
                value={sumInput}
                onChange={(e) => setSumInput(e.target.value)}
              />
              <Button 
                onClick={handleSummarize} 
                disabled={isSumLoading}
                className="w-full"
              >
                {isSumLoading ? <Loader2 className="animate-spin" /> : <><Sparkles className="mr-2 w-4 h-4" /> নোটিশ বোর্ডের জন্য সারসংক্ষেপ করুন</>}
              </Button>
              {sumOutput && (
                <div className="p-4 bg-muted rounded-lg text-sm italic">
                  <strong>সারসংক্ষেপ:</strong> {sumOutput}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

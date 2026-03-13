'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "BDSA বা বাংলাদেশ ডিজিটাল সিস্টেম অথরিটি আসলে কী?",
    a: "BDSA হলো একটি অত্যাধুনিক ডিজিটাল অবকাঠামো এবং সিস্টেম অথরিটি, যা জাতীয় পর্যায়ের ডিজিটাল ডেটা সুরক্ষা, সিস্টেম ভেরিফিকেশন এবং স্মার্ট ইনফ্রাস্ট্রাকচার ব্যবস্থাপনায় কাজ করে। আমাদের মূল লক্ষ্য হলো একটি নিরাপদ এবং স্বচ্ছ ডিজিটাল বাংলাদেশ বিনির্মাণে প্রযুক্তিগত নেতৃত্ব প্রদান করা।"
  },
  {
    q: "BDSA ভেরিফিকেশন পোর্টাল কীভাবে কাজ করে?",
    a: "এটি একটি কেন্দ্রীয় যাচাইকরণ ব্যবস্থা। ব্যবহারকারী যখন তাদের আইডি বা সার্টিফিকেট নম্বর আমাদের পোর্টালে ইনপুট দেন, সিস্টেমটি আমাদের সুরক্ষিত ডেটা ক্লাস্টার থেকে তথ্য মিলিয়ে দেখে এবং কয়েক সেকেন্ডের মধ্যে একটি ভেরিফিকেশন ফলাফল প্রদর্শন করে।"
  },
  {
    q: "আমার ডেটা কি BDSA সিস্টেমে নিরাপদ?",
    a: "অবশ্যই। আমরা মাল্টি-লেয়ার এনক্রিপশন এবং কোয়ান্টাম-প্রতিরোধী সুরক্ষা প্রোটোরল ব্যবহার করি। প্রতিটি ডেটা আমাদের সুরক্ষিত ক্লাউড অবকাঠামোতে সংরক্ষিত থাকে, যা ২৪/৭ এআই-চালিত সিকিউরিটি মনিটরিংয়ের মাধ্যমে সুরক্ষিত।"
  },
  {
    q: "BDSA কি সরকারি কোনো সংস্থা?",
    a: "BDSA একটি স্বায়ত্তশাসিত ডিজিটাল সিস্টেম অথরিটি যা সরকার অনুমোদিত নির্দিষ্ট ফ্রেমওয়ার্ক এবং আইনি স্বীকৃতির (Trade License, TIN, Govt. Reg.) মাধ্যমে তাদের কার্যক্রম পরিচালনা করে। আমাদের মূল লক্ষ্য সরকারি ও বেসরকারি প্রতিষ্ঠানের মাঝে ডিজিটাল সেতুবন্ধন তৈরি করা।"
  },
  {
    q: "সিস্টেম ইন্টিগ্রেশনের সুবিধা কী কী?",
    a: "সিস্টেম ইন্টিগ্রেশনের মাধ্যমে বিভিন্ন সরকারি ও বেসরকারি সংস্থাগুলো একে অপরের সাথে নিরবচ্ছিন্নভাবে ডেটা আদান-প্রদান করতে পারে। এতে নাগরিক সেবাগুলো দ্রুততর হয় এবং কোনো প্রকার ম্যানুয়াল জটিলতা ছাড়াই এক প্ল্যাটফর্ম থেকে সব তথ্য পাওয়া সম্ভব হয়।"
  },
  {
    q: "কোনো বিজ্ঞপ্তি বা আইডি জাল কি না তা কীভাবে বুঝবো?",
    a: "আমাদের প্রতিটি অফিসিয়াল বিজ্ঞপ্তি এবং আইডির সাথে একটি ইউনিক QR Code এবং রেফারেন্স নম্বর থাকে। আপনি আমাদের 'Verify Certificate/ID' সেকশনে গিয়ে সেই নম্বরটি সার্চ করলেই সত্যতা নিশ্চিত করতে পারবেন।"
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-[#0A192F]">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black font-headline mb-4 text-white">
            সচরাচর জিজ্ঞাসিত <span className="text-primary drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">প্রশ্নাবলী (FAQ)</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full shadow-[0_0_10px_#00FFFF] mb-6"></div>
          <p className="text-muted-foreground">আমাদের সিস্টেম এবং পরিষেবা সম্পর্কে সাধারণ জিজ্ঞাসা।</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border border-primary/10 bg-card/20 rounded-2xl overflow-hidden px-4">
              <AccordionTrigger className="text-left font-bold text-lg text-white hover:text-primary py-6 transition-colors hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6 pt-2 border-t border-primary/5 mt-2">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

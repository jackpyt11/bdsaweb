'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "আমি কীভাবে আমার ডিজিটাল পরিচয়পত্র যাচাই করতে পারি?",
    a: "আপনি আমাদের হোমপেজে অফিশিয়াল আইডি যাচাইকরণ পোর্টাল ব্যবহার করতে পারেন। আপনার স্থিতি দেখতে কেবল আপনার কার্ডে দেওয়া ১২-সংখ্যার ভেরিফিকেশন আইডি দিন।"
  },
  {
    q: "বিডিএসএ শংসাপত্রগুলোর আইনি বৈধতা কী?",
    a: "বিডিএসএ একটি সরকারি অনুমোদিত সংস্থা। আমাদের দেওয়া সব শংসাপত্র আইসিটি মন্ত্রণালয় এবং সব জাতীয় ব্যাংক দ্বারা আইনত স্বীকৃত।"
  },
  {
    q: "আমি কীভাবে আমার নিবন্ধিত সিস্টেম তথ্য আপডেট করব?",
    a: "আপনার অফিশিয়াল শংসাপত্র নিয়ে আমাদের 'সার্ভিসেস' পোর্টালের মাধ্যমে বা ধানমন্ডিতে আমাদের আঞ্চলিক কার্যালয় পরিদর্শন করে সিস্টেম আপডেটের অনুরোধ করা যেতে পারে।"
  },
  {
    q: "ডেটা নিরাপত্তার জন্য কী কী ব্যবস্থা নেওয়া হয়েছে?",
    a: "জাতীয় ডেটা সুরক্ষার সর্বোচ্চ স্তর নিশ্চিত করতে আমরা আমাদের সার্ভার ক্লাস্টারগুলোতে ২৫৬-বিট এনক্রিপশন এবং মাল্টি-নোড রিডান্ডেন্সি নিয়োগ করি।"
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-card/50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-headline mb-4">সচরাচর জিজ্ঞাসিত প্রশ্নাবলী (FAQ)</h2>
          <p className="text-muted-foreground">আমাদের সিস্টেম এবং পরিষেবা সম্পর্কে সাধারণ জিজ্ঞাসা।</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border-border">
              <AccordionTrigger className="text-left font-bold text-lg hover:text-primary py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

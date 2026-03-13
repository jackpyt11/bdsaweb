
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How can I verify my Digital Identity Card?",
    a: "You can use the official ID Verification Portal on our homepage. Simply enter your 12-digit verification ID provided on your card to see your status."
  },
  {
    q: "What is the legal validity of BDSA certifications?",
    a: "BDSA is the official government-authorized entity. All certificates issued by us are legally recognized by the Ministry of ICT and all national banks."
  },
  {
    q: "How do I update my registered system information?",
    a: "System updates can be requested through the 'Services' portal or by visiting our regional office in Dhanmandi with your official credentials."
  },
  {
    q: "What measures are in place for data security?",
    a: "We employ 256-bit encryption and multi-node redundancy across our server clusters to ensure the highest level of national data protection."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-card/50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-headline mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">General inquiries about our systems and services.</p>
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

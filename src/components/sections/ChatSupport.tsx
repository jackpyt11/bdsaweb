'use client';

import { MessageSquare, X } from 'lucide-react';
import { useState } from 'react';

export default function ChatSupport() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 h-96 bg-card border border-primary/20 rounded-2xl shadow-2xl flex flex-col animate-in fade-in slide-in-from-bottom-4">
          <div className="p-4 bg-primary text-primary-foreground rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="font-bold font-headline">বিডিএসএ লাইভ সাপোর্ট</span>
            </div>
            <button onClick={() => setIsOpen(false)}><X className="w-5 h-5" /></button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            <div className="p-3 bg-muted rounded-xl text-xs max-w-[80%]">
              বিডিএসএ অফিশিয়াল সাপোর্টে স্বাগতম। আমরা আপনাকে কীভাবে সাহায্য করতে পারি?
            </div>
          </div>
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="আপনার বার্তা লিখুন..." 
                className="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-primary outline-none"
              />
              <button className="bg-primary text-primary-foreground p-2 rounded-lg"><MessageSquare className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(230,172,46,0.5)] hover:scale-110 transition-transform"
      >
        <MessageSquare className="w-7 h-7" />
      </button>
    </div>
  );
}

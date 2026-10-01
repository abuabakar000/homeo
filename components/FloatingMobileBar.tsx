'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingMobileBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 p-2.5 shadow-2xl">
      <div className="grid grid-cols-2 gap-2.5 max-w-sm mx-auto">
        
        {/* WhatsApp Call to Action */}
        <a
          href="https://wa.me/923236392323"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white py-2.5 px-2 rounded-xl font-bold text-xs shadow-sm active:scale-95 transition-transform font-english whitespace-nowrap"
          dir="ltr"
        >
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span className="whitespace-nowrap">WhatsApp</span>
        </a>

        {/* Direct Call Button */}
        <a
          href="tel:03236392323"
          className="flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white py-2.5 px-2 rounded-xl font-bold text-xs shadow-sm active:scale-95 transition-transform font-english whitespace-nowrap"
          dir="ltr"
        >
          <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="tracking-wide whitespace-nowrap font-bold" dir="ltr">0323-6392323</span>
        </a>

      </div>
    </div>
  );
}

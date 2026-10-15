'use client';

import { useState, useEffect } from 'react';
import { Phone, Calendar } from 'lucide-react';

export default function FloatingCall() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past 250px
      if (window.scrollY > 250) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 z-40 flex items-center justify-center gap-3">
      {/* Mobile Sticky Bar / Desktop floating badge */}
      <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700/80 p-2 sm:p-2.5 rounded-2xl shadow-2xl flex items-center gap-2">
        <a
          href="tel:0561400455"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm active:scale-95 transition-all shadow-md shadow-sky-600/30"
          aria-label="Appeler le garage Jo Auto"
        >
          <Phone className="w-4 h-4 animate-bounce" />
          <span>05 61 40 04 55</span>
        </a>

        <a
          href="#contact"
          className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm transition-colors"
        >
          <Calendar className="w-3.5 h-3.5 text-sky-400" />
          <span className="hidden xs:inline">Prendre</span> RDV
        </a>
      </div>
    </div>
  );
}

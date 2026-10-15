'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Calendar, Clock, MapPin, Menu, X, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Check if garage is currently open (Lun-Ven: 8h-12h, 14h-18h30)
    const checkOpenStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 is Sun, 6 is Sat
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const timeInMinutes = hours * 60 + minutes;

      const isWeekday = day >= 1 && day <= 5;
      const morningOpen = timeInMinutes >= 8 * 60 && timeInMinutes < 12 * 60;
      const afternoonOpen = timeInMinutes >= 14 * 60 && timeInMinutes < 18 * 60 + 30;

      setIsOpenNow(isWeekday && (morningOpen || afternoonOpen));
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Banner */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              4 Rue du Midi, 31270 Frouzins
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              Lun - Ven : 8h00-12h00 | 14h00-18h30
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-800 border border-slate-700">
              <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              {isOpenNow ? 'Atelier Ouvert' : 'Fermé (Réouverture 8h00)'}
            </span>
            <a
              href="tel:0561400455"
              className="flex items-center gap-1.5 text-sky-400 font-semibold hover:text-sky-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>05 61 40 04 55</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200/80'
            : 'bg-white py-3.5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-14 w-36 sm:h-16 sm:w-44 flex items-center">
              <Image
                src="/logo.png"
                alt="Logo Garage Jo'Auto Solutions Frouzins"
                fill
                priority
                className="object-contain object-left group-hover:scale-[1.02] transition-transform duration-200"
              />
            </div>
            <div className="hidden lg:block border-l border-slate-200 pl-3">
              <p className="text-[11px] font-semibold tracking-wider uppercase text-slate-500">Atelier Mécanique</p>
              <p className="text-xs font-bold text-slate-800">Frouzins • 31270</p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-7 text-[15px] font-medium text-slate-600">
            <Link href="#services" className="hover:text-sky-600 transition-colors">
              Prestations
            </Link>
            <Link href="#simulateur" className="hover:text-sky-600 transition-colors">
              Simulateur Devis
            </Link>
            <Link href="#pourquoi-nous" className="hover:text-sky-600 transition-colors">
              L&apos;Atelier
            </Link>
            <Link href="#avis" className="hover:text-sky-600 transition-colors">
              Avis Clients
            </Link>
            <Link href="#contact" className="hover:text-sky-600 transition-colors">
              Accès & Contact
            </Link>
          </div>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:0561400455"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-200"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              <span>05 61 40 04 55</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 active:scale-[0.98] transition-all shadow-sm shadow-sky-600/30"
            >
              <Calendar className="w-4 h-4" />
              <span>Prendre RDV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Menu de navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <div className="flex flex-col space-y-2 text-base font-medium text-slate-700">
              <Link
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-sky-600"
              >
                Nos Prestations
              </Link>
              <Link
                href="#simulateur"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-sky-600"
              >
                Simulateur de Devis
              </Link>
              <Link
                href="#pourquoi-nous"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-sky-600"
              >
                L&apos;Atelier & Engagements
              </Link>
              <Link
                href="#avis"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-sky-600"
              >
                Avis Clients
              </Link>
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-sky-600"
              >
                Accès & Horaires
              </Link>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="tel:0561400455"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Appeler : 05 61 40 04 55</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white bg-sky-600 hover:bg-sky-700 transition-colors shadow-md shadow-sky-600/20"
              >
                <Calendar className="w-4 h-4" />
                <span>Prendre Rendez-vous</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

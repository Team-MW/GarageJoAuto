'use client';

import Image from 'next/image';
import { ShieldCheck, Wrench, Award, Clock, ArrowRight, Phone, CheckCircle2, Sparkles, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Subtle decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-sky-500/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute -top-24 right-0 w-80 h-80 bg-blue-600/10 blur-3xl pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-slate-800/80 border border-slate-700/80 text-sky-300 shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
              <span>Garage Automobile Multimarque à Frouzins (31270)</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              L&apos;entretien mécanique <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-blue-500">
                précis, transparent
              </span>{' '}
              et de confiance.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Bienvenue chez <span className="font-semibold text-white">Garage Jo&apos;Auto Solutions</span>. 
              Diagnostic électronique, révision garantie constructeur préservée, freinage et mécanique générale. 
              Un travail soigné au juste prix, sans mauvaise surprise.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-base text-white bg-sky-600 hover:bg-sky-500 active:scale-[0.98] transition-all shadow-lg shadow-sky-600/25"
              >
                <span>Prendre Rendez-vous</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:0561400455"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-base text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>05 61 40 04 55</span>
              </a>

              <a
                href="#simulateur"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:underline transition-colors"
              >
                Simuler un devis
              </a>
            </div>

            {/* Quick bullet points */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Garantie constructeur</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Devis 100% gratuit</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Pièces certifiées</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Logo Card & Quick Info */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Card Container */}
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-900/90 border border-slate-700/80 p-6 sm:p-8 backdrop-blur shadow-2xl">
                
                {/* Logo Showcasing */}
                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-inner flex items-center justify-center mb-6">
                  <div className="relative w-full h-28 sm:h-32">
                    <Image
                      src="/logo.png"
                      alt="Jo'Auto Solutions Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                {/* Garage Highlights */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                    <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">Localisation facile</h3>
                      <p className="text-xs text-slate-400">4 Rue du Midi, ZAC de la Vache - 31270 Frouzins</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                    <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">Horaires atelier</h3>
                      <p className="text-xs text-slate-400">Du Lundi au Vendredi : 8h-12h et 14h-18h30</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                    <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">Toutes Marques Prises en Charge</h3>
                      <p className="text-xs text-slate-400">Véhicules récents, utilitaires et citadines</p>
                    </div>
                  </div>
                </div>

                {/* Direct quick call inside card */}
                <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between">
                  <div className="text-xs text-slate-400">
                    Conseil mécanique immédiat
                  </div>
                  <a
                    href="tel:0561400455"
                    className="text-sm font-bold text-sky-400 hover:text-sky-300 transition-colors flex items-center gap-1.5"
                  >
                    <span>05 61 40 04 55</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 4 Bottom Trust Stats */}
      <div className="mt-14 border-t border-slate-800/80 pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-sky-400">100%</div>
              <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">Transparence des prix</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Aucun frais caché</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-sky-400">Multi</div>
              <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">Toutes Marques</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Diagnostic informatisé</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-sky-400">Loi EU</div>
              <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">Garantie Constructeur</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Carnet d&apos;entretien respecté</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-sky-400">Rapide</div>
              <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">Prise en Charge</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Délais respectés</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { ShieldCheck, UserCheck, Wrench, Sparkles, Clock, CheckCircle } from 'lucide-react';

const REASONS = [
  {
    icon: UserCheck,
    title: 'Un interlocuteur dédié',
    desc: 'Chez Jo&apos;Auto Solutions, vous échangez directement avec les professionnels qui interviennent sur votre véhicule. Conseils honnêtes et explications claires.'
  },
  {
    icon: ShieldCheck,
    title: 'Garantie Constructeur Préservée',
    desc: 'Conformément à la réglementation européenne, vous pouvez faire entretenir votre véhicule récent chez nous dès le 1er jour en conservant l&apos;intégralité de sa garantie.'
  },
  {
    icon: Wrench,
    title: 'Pièces de Qualité Équipementier',
    desc: 'Nous montons exclusivement des pièces certifiées conformes aux spécifications d&apos;origine (Bosch, Valeo, Brembo, Purflux, SKF...).'
  },
  {
    icon: Sparkles,
    title: 'Zéro Mauvaise Surprise',
    desc: 'Devis clair et transparent avant tout démarrage. Aucun travail supplémentaire n&apos;est exécuté sans votre accord explicite préalable.'
  },
  {
    icon: Clock,
    title: 'Respect des Délais Annoncés',
    desc: 'Votre temps est précieux : nous nous engageons sur un horaire de restitution de votre véhicule dès votre prise en charge.'
  },
  {
    icon: CheckCircle,
    title: 'Diagnostic Informatisé Multimarque',
    desc: 'Équipés des dernières valises de diagnostic pour interroger précisément les calculateurs de toutes marques françaises et étrangères.'
  }
];

export default function WhyUs() {
  return (
    <section id="pourquoi-nous" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 mb-3">
            <span>Nos Engagements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pourquoi confier votre auto à Jo&apos;Auto Solutions ?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            L&apos;alliance de la rigueur technique et de la proximité d&apos;un garage de quartier à Frouzins.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 hover:bg-white hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600 transition-colors shadow-sm mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {reason.title}
                </h3>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust banner */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 rounded-2xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">Besoin d&apos;un avis ou d&apos;un contrôle rapide ?</h3>
            <p className="text-slate-300 text-sm">Passez directement à l&apos;atelier au 4 Rue du Midi à Frouzins ou appelez-nous.</p>
          </div>
          <a
            href="tel:0561400455"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-sky-500 hover:bg-sky-400 text-white transition-colors shadow-md shadow-sky-500/20"
          >
            <span>05 61 40 04 55</span>
          </a>
        </div>

      </div>
    </section>
  );
}

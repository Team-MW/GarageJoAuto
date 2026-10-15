'use client';

import { Star, CheckCircle, MessageSquareQuote } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Thomas D.',
    vehicle: 'Peugeot 308 HDI',
    service: 'Kit de distribution & pompe à eau',
    date: 'Il y a 3 semaines',
    rating: 5,
    comment: 'Excellent garage à Frouzins ! Jordan est très pro, arrangeant et le tarif était nettement plus raisonnable que chez le concessionnaire pour exactement le même travail. Devis respecté au centime près.'
  },
  {
    name: 'Sarah M.',
    vehicle: 'Renault Captur',
    service: 'Révision annuelle + plaquettes',
    date: 'Il y a 1 mois',
    rating: 5,
    comment: 'Très bonne expérience chez Jo&apos;Auto Solutions. Accueil chaleureux, explications claires de ce qui a été fait sur la voiture avec les pièces remplacées montrées. Je recommande les yeux fermés !'
  },
  {
    name: 'Michel B.',
    vehicle: 'Volkswagen Golf 7',
    service: 'Diagnostic électronique & vanne EGR',
    date: 'Il y a 2 mois',
    rating: 5,
    comment: 'Voyant moteur allumé que deux garages n&apos;arrivaient pas à diagnostiquer sans vouloir tout changer. Ici, la vraie cause a été trouvée rapidement grâce à la valise. Réparation efficace et rapide.'
  },
  {
    name: 'Corinne L.',
    vehicle: 'Citroën C3',
    service: 'Pré-contrôle et passage au contrôle technique',
    date: 'Il y a 2 mois',
    rating: 5,
    comment: 'Service clé en main parfait : j&apos;ai déposé ma voiture le matin, ils ont vérifié tous les points et l&apos;ont passée au contrôle technique directement. CT vierge et récupérée à 17h comme convenu.'
  }
];

export default function Reviews() {
  return (
    <section id="avis" className="py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 mb-3">
            <span>Satisfaction Client</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            La confiance de nos clients au quotidien
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Découvrez les retours des automobilistes de Frouzins, Muret, Cugnaux et des environs.
          </p>

          {/* Rating Badge */}
          <div className="mt-6 inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-sm font-bold text-slate-800">
              4.9 / 5 <span className="font-normal text-xs text-slate-500">• Avis Google vérifiés</span>
            </div>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div>
                {/* Header of review */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-bold text-sm flex items-center justify-center">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                        {review.name}
                        <CheckCircle className="w-3.5 h-3.5 text-sky-500" />
                      </h4>
                      <p className="text-xs text-slate-500">{review.vehicle}</p>
                    </div>
                  </div>

                  <div className="flex items-center text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Prestation tag */}
                <div className="inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 mb-3">
                  {review.service}
                </div>

                {/* Comment */}
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400">
                Avis déposé {review.date}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

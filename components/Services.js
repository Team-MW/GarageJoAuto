'use client';

import { useState } from 'react';
import { 
  Wrench, 
  Disc, 
  Cpu, 
  CircleDot, 
  GitCommit, 
  Flame, 
  Wind, 
  CheckSquare2, 
  ArrowRight, 
  Check, 
  Clock,
  Car
} from 'lucide-react';

const SERVICES_DATA = [
  {
    id: 'revision',
    title: 'Révision & Vidange Constructeur',
    category: 'entretien',
    icon: Wrench,
    badge: 'Recommandé annuel',
    desc: 'Vidange moteur avec huile homologuée constructeur, remplacement des filtres et vérification approfondie des points de sécurité.',
    highlights: [
      'Préservation de la garantie constructeur',
      'Huiles certifiées selon les normes constructeurs',
      'Remplacement filtre à huile & joint de bouchon',
      'Mise à niveau de tous les fluides techniques',
      'Diagnostic électronique & réinitialisation indicateur'
    ],
    priceNote: 'À partir de 89€'
  },
  {
    id: 'freinage',
    title: 'Système de Freinage & Sécurité',
    category: 'securite',
    icon: Disc,
    badge: 'Contrôle sécurité',
    desc: 'Diagnostic et remplacement de vos éléments de friction pour un freinage optimal et une distance d&apos;arrêt maîtrisée.',
    highlights: [
      'Remplacement plaquettes de frein avant/arrière',
      'Changement disques de frein haute qualité',
      'Purge et remplacement du liquide de frein DOT4',
      'Contrôle des étriers, flexibles et tambours',
      'Essai dynamique sur banc de freinage'
    ],
    priceNote: 'Plaquettes dès 79€'
  },
  {
    id: 'diagnostic',
    title: 'Diagnostic Électronique & Valise',
    category: 'mecanique',
    icon: Cpu,
    badge: 'Multi-marques',
    desc: 'Recherche de panne précise avec valises de diagnostic multimarques de dernière génération pour identifier tout voyant ou dysfonctionnement.',
    highlights: [
      'Lecture de tous les calculateurs (moteur, ABS, airbag...)',
      'Recherche et effacement des codes défauts',
      'Analyse des paramètres en temps réel',
      'Diagnostic injection, dépollution & allumage',
      'Rapport clair avec explication avant réparation'
    ],
    priceNote: 'Forfait diagnostic à 49€'
  },
  {
    id: 'pneumatiques',
    title: 'Pneumatiques & Géométrie',
    category: 'securite',
    icon: CircleDot,
    badge: 'Montage rapide',
    desc: 'Vente, montage, équilibrage dynamique et contrôle de géométrie pour une tenue de route irréprochable et une usure régulière.',
    highlights: [
      'Montage & équilibrage toutes dimensions',
      'Remplacement systématique des valves',
      'Réglage du parallélisme et de la géométrie',
      'Pneus été, hiver et 4 saisons toutes marques',
      'Recyclage écologique des anciens pneus'
    ],
    priceNote: 'Montage dès 15€/roue'
  },
  {
    id: 'distribution',
    title: 'Courroie de Distribution & Pompe à Eau',
    category: 'mecanique',
    icon: GitCommit,
    badge: 'Intervention clé',
    desc: 'Remplacement préventif du kit de distribution indispensable pour éviter la casse irréversible de votre moteur.',
    highlights: [
      'Remplacement kit complet (courroie + galets tendeurs)',
      'Changement de la pompe à eau',
      'Purge et remplacement du liquide de refroidissement',
      'Courroie d&apos;accessoires incluse',
      'Garantie pièces & main d&apos;œuvre'
    ],
    priceNote: 'Sur devis précis'
  },
  {
    id: 'embrayage',
    title: 'Embrayage & Boîte de Vitesses',
    category: 'mecanique',
    icon: Flame,
    badge: 'Haute technicité',
    desc: 'Remplacement des kits d&apos;embrayage, volant moteur bi-masse, butée hydraulique et vidange des boîtes manuelles.',
    highlights: [
      'Diagnostic d&apos;usure ou de patinage',
      'Remplacement mécanisme, disque et butée',
      'Contrôle ou changement du volant moteur bi-masse',
      'Vidange de boîte avec fluide adapté',
      'Essai routier rigoureux'
    ],
    priceNote: 'Sur devis personnalisé'
  },
  {
    id: 'climatisation',
    title: 'Climatisation & Habitacle',
    category: 'entretien',
    icon: Wind,
    badge: 'Confort & Santé',
    desc: 'Entretien du circuit de climatisation pour un air sain, désembuage rapide et fraîcheur l&apos;été.',
    highlights: [
      'Tirage au vide et test d&apos;étanchéité du circuit',
      'Recharge en gaz frigorigène R134a et R1234yf',
      'Remplacement filtre d&apos;habitacle anti-allergène',
      'Traitement antibactérien des conduits d&apos;aération',
      'Contrôle efficacité du compresseur et condenseur'
    ],
    priceNote: 'Forfait recharge dès 69€'
  },
  {
    id: 'controle-technique',
    title: 'Pré-Contrôle & Passage au CT',
    category: 'securite',
    icon: CheckSquare2,
    badge: '0 contre-visite',
    desc: 'Bilan complet de votre véhicule avant l&apos;échéance du contrôle technique et prise en charge du passage au centre agréé.',
    highlights: [
      'Examen minutieux de 40 points de contrôle obligatoires',
      'Vérification éclairage, pollution, trains roulants, freins',
      'Devis immédiat uniquement si une anomalie est détectée',
      'Prise en charge et présentation de votre auto au centre CT',
      'Gain de temps total et tranquillité d&apos;esprit'
    ],
    priceNote: 'Bilan + Présentation'
  }
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 mb-3">
            <span>Savoir-faire Mécanique</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Des prestations complètes pour tous véhicules
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            De la simple révision d&apos;entretien aux réparations mécaniques les plus exigeantes, 
            nous intervenons avec méthode, pièces d&apos;origine et outillage professionnel.
          </p>

          {/* Filter Categories */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Toutes les prestations ({SERVICES_DATA.length})
            </button>
            <button
              onClick={() => setActiveCategory('entretien')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeCategory === 'entretien'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Entretien & Révision
            </button>
            <button
              onClick={() => setActiveCategory('mecanique')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeCategory === 'mecanique'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Mécanique & Diagnostic
            </button>
            <button
              onClick={() => setActiveCategory('securite')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeCategory === 'securite'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Sécurité, Freins & Pneus
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-sky-500/50 hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 group"
              >
                <div>
                  {/* Top card header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Checklist */}
                  <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                    {service.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block">Tarification</span>
                    <span className="text-sm font-bold text-slate-800">{service.priceNote}</span>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 bg-sky-50 hover:bg-sky-100 px-3 py-2 rounded-lg transition-colors"
                  >
                    <span>Demander</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner inside Services */}
        <div className="mt-12 rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-sky-600 text-white shrink-0">
              <Car className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">Une réparation spécifique non listée ?</h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Amortisseurs, rotules, démarreur, alternateur, échappement, FAP... nous intervenons sur tous les organes mécaniques.
              </p>
            </div>
          </div>
          <a
            href="tel:0561400455"
            className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-white bg-slate-900 hover:bg-slate-800 transition-colors"
          >
            <span>Appeler le 05 61 40 04 55</span>
          </a>
        </div>

      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { Calculator, CheckCircle2, ArrowRight, ShieldCheck, HelpCircle, Send } from 'lucide-react';

const PRESTATIONS = [
  { id: 'vidange', name: 'Vidange & Filtre à Huile', baseMin: 79, baseMax: 110, desc: 'Huile homologuée + filtre + 20 points de contrôle' },
  { id: 'revision', name: 'Révision Complète Constructeur', baseMin: 149, baseMax: 220, desc: 'Tous filtres + vidange + diagnostic valise + 40 points' },
  { id: 'plaquettes', name: 'Plaquettes de Frein Avant', baseMin: 85, baseMax: 130, desc: 'Plaquettes qualité première monte + pose + contrôle' },
  { id: 'disques_plaquettes', name: 'Disques + Plaquettes Avant', baseMin: 180, baseMax: 280, desc: 'Jeu disques ventilés + plaquettes + main d&apos;œuvre' },
  { id: 'diagnostic', name: 'Diagnostic Électronique Valise', baseMin: 49, baseMax: 49, desc: 'Recherche de panne + lecture calculateurs + devis' },
  { id: 'clim', name: 'Recharge & Entretien Climatisation', baseMin: 69, baseMax: 120, desc: 'Tirage au vide + recharge fluide + test étanchéité' },
  { id: 'pneus', name: 'Montage & Équilibrage (2 Pneus)', baseMin: 35, baseMax: 45, desc: 'Démontage + valves neuves + équilibrage dynamique' }
];

const VEHICLE_TYPES = [
  { id: 'citadine', name: 'Citadine', coeff: 1.0, example: 'Clio, 208, Polo, C3...' },
  { id: 'compacte', name: 'Berline / Compacte', coeff: 1.15, example: 'Megane, Golf, 308, A3...' },
  { id: 'suv', name: 'SUV / Break / 4x4', coeff: 1.3, example: '3008, Qashqai, Tiguan, Duster...' },
  { id: 'utilitaire', name: 'Utilitaire Léger', coeff: 1.35, example: 'Kangoo, Berlingo, Trafic...' }
];

const MOTORISATIONS = [
  { id: 'essence', name: 'Essence', coeff: 1.0 },
  { id: 'diesel', name: 'Diesel', coeff: 1.1 },
  { id: 'hybride', name: 'Hybride / Électrique', coeff: 1.15 }
];

export default function QuoteCalculator() {
  const [selectedPrestation, setSelectedPrestation] = useState(PRESTATIONS[0].id);
  const [selectedVehicle, setSelectedVehicle] = useState(VEHICLE_TYPES[0].id);
  const [selectedMotor, setSelectedMotor] = useState(MOTORISATIONS[0].id);
  const [submitted, setSubmitted] = useState(false);
  
  // Client contact input states
  const [plate, setPlate] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  const currentPrestation = PRESTATIONS.find(p => p.id === selectedPrestation);
  const currentVehicle = VEHICLE_TYPES.find(v => v.id === selectedVehicle);
  const currentMotor = MOTORISATIONS.find(m => m.id === selectedMotor);

  const totalMin = Math.round(currentPrestation.baseMin * currentVehicle.coeff * (currentPrestation.id === 'diagnostic' ? 1 : currentMotor.coeff));
  const totalMax = Math.round(currentPrestation.baseMax * currentVehicle.coeff * (currentPrestation.id === 'diagnostic' ? 1 : currentMotor.coeff));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="simulateur" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-sky-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Simulateur en ligne sans engagement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Estimez votre tarif en quelques clics
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Parce que la confiance repose sur la transparence, calculez immédiatement une fourchette indicative pour votre véhicule.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-slate-800/80 rounded-2xl border border-slate-700/80 p-6 sm:p-8 backdrop-blur space-y-6">
            
            {/* 1. Prestation Selection */}
            <div>
              <label className="block text-sm font-semibold text-sky-400 mb-3 uppercase tracking-wider text-xs">
                1. Choisissez la prestation
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PRESTATIONS.map((prest) => (
                  <button
                    key={prest.id}
                    type="button"
                    onClick={() => setSelectedPrestation(prest.id)}
                    className={`text-left p-3 rounded-xl border text-xs sm:text-sm transition-all ${
                      selectedPrestation === prest.id
                        ? 'bg-sky-600 border-sky-400 text-white font-semibold shadow-md shadow-sky-600/30'
                        : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-600 hover:bg-slate-900'
                    }`}
                  >
                    <div>{prest.name}</div>
                    <div className="text-[11px] opacity-80 mt-1 line-clamp-1">{prest.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Vehicle Type Selection */}
            <div>
              <label className="block text-sm font-semibold text-sky-400 mb-3 uppercase tracking-wider text-xs">
                2. Type de carrosserie
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {VEHICLE_TYPES.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedVehicle(type.id)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      selectedVehicle === type.id
                        ? 'bg-sky-600 border-sky-400 text-white font-semibold'
                        : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-600 hover:bg-slate-900'
                    }`}
                  >
                    <div className="text-xs sm:text-sm">{type.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Motorisation */}
            <div>
              <label className="block text-sm font-semibold text-sky-400 mb-3 uppercase tracking-wider text-xs">
                3. Motorisation
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {MOTORISATIONS.map((motor) => (
                  <button
                    key={motor.id}
                    type="button"
                    onClick={() => setSelectedMotor(motor.id)}
                    className={`p-2.5 rounded-xl border text-center transition-all text-xs sm:text-sm ${
                      selectedMotor === motor.id
                        ? 'bg-sky-600 border-sky-400 text-white font-semibold'
                        : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-600 hover:bg-slate-900'
                    }`}
                  >
                    {motor.name}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Result & Validation Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl border border-sky-500/30 p-6 sm:p-8 shadow-2xl relative">
            
            {/* Top result header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-700">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Estimation indicative</span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold">
                Pièces & M.O. incluses
              </span>
            </div>

            {/* Big price display */}
            <div className="py-6 text-center">
              <div className="text-xs text-slate-400 mb-1">Fourchette estimée TTC</div>
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-300">
                {totalMin === totalMax ? `${totalMin} €` : `${totalMin} € - ${totalMax} €`}
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Tarif pour : <span className="text-white font-semibold">{currentPrestation.name}</span> ({currentVehicle.name} • {currentMotor.name})
              </p>
            </div>

            {/* Checklist of what's guaranteed */}
            <div className="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-700/60 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Pièces certifiées d&apos;origine équipementier</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Garantie constructeur préservée</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Devis définitif validé ensemble avant travaux</span>
              </div>
            </div>

            {/* Conversion form */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                <div className="text-xs font-semibold text-slate-300">
                  Bloquez cette estimation et recevez votre devis précis :
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Votre Nom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-950/70 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Téléphone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-950/70 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Immatriculation (ex: AA-123-BB, facultatif)"
                  value={plate}
                  onChange={(e) => setPlate(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-950/70 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                />

                <button
                  type="submit"
                  className="w-full mt-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-sky-600 hover:bg-sky-500 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-600/30"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirmer & demander un créneau</span>
                </button>
              </form>
            ) : (
              <div className="mt-6 p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-white text-sm">Demande bien reçue !</h4>
                <p className="text-xs text-slate-300">
                  Jordan ou l&apos;équipe Jo&apos;Auto vous rappelle très vite au <span className="font-semibold text-white">{phone}</span> pour finaliser votre devis et valider votre date.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-[11px] text-sky-400 underline pt-1"
                >
                  Faire une autre simulation
                </button>
              </div>
            )}

            {/* Note text */}
            <p className="text-[11px] text-slate-400 text-center mt-4">
              *Fourchette indicative. Le tarif exact dépend des spécificités techniques exactes du modèle.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

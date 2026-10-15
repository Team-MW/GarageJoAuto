'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin, Clock, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-3 rounded-xl inline-block">
              <div className="relative h-14 w-40">
                <Image
                  src="/logo.png"
                  alt="Garage Jo'Auto Solutions"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Garage mécanique indépendant à Frouzins (31270). Entretien automobile, révision avec garantie constructeur préservée, freinage et diagnostic électronique toutes marques.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Garantie constructeur préservée (Loi Européenne)</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Prestations clés</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="#services" className="hover:text-sky-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3 h-3 text-sky-500" />
                  Révision & Vidange constructeur
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-sky-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3 h-3 text-sky-500" />
                  Plaquettes & Disques de frein
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-sky-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3 h-3 text-sky-500" />
                  Diagnostic électronique & voyants
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-sky-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3 h-3 text-sky-500" />
                  Courroie de distribution & pompe à eau
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-sky-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3 h-3 text-sky-500" />
                  Pneumatiques, équilibrage & parallélisme
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-sky-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3 h-3 text-sky-500" />
                  Recharge & entretien climatisation
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Nos Prestations
                </Link>
              </li>
              <li>
                <Link href="#simulateur" className="hover:text-white transition-colors">
                  Simulateur de Devis
                </Link>
              </li>
              <li>
                <Link href="#pourquoi-nous" className="hover:text-white transition-colors">
                  Nos Engagements
                </Link>
              </li>
              <li>
                <Link href="#avis" className="hover:text-white transition-colors">
                  Témoignages Clients
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Accès & Plan
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact Direct</h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>4 Rue du Midi, ZAC de la Vache, 31270 Frouzins</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="tel:0561400455" className="text-white font-bold hover:text-sky-400 transition-colors">
                  05 61 40 04 55
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  Lundi au Vendredi :<br />
                  8h00 - 12h00 | 14h00 - 18h30
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom line */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Garage Jo&apos;Auto Solutions. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <span>Frouzins • Haute-Garonne (31)</span>
            <span>•</span>
            <span>Entretien & Réparation Automobile</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

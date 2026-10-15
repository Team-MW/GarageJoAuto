'use client';

import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, CheckCircle2, Send, Navigation, ExternalLink } from 'lucide-react';

export default function ContactLocation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    plate: '',
    service: 'revision',
    preferredDate: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(false);

  useEffect(() => {
    const checkOpen = () => {
      const now = new Date();
      const day = now.getDay();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const totalMin = hours * 60 + minutes;

      const isWeekday = day >= 1 && day <= 5;
      const isMorning = totalMin >= 8 * 60 && totalMin < 12 * 60;
      const isAfternoon = totalMin >= 14 * 60 && totalMin < 18 * 60 + 30;

      setIsOpenNow(isWeekday && (isMorning || isAfternoon));
    };

    checkOpen();
    const interval = setInterval(checkOpen, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 mb-3">
            <span>Accès & Rendez-vous</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Venir à l&apos;atelier ou réserver un créneau
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Nous vous accueillons à Frouzins dans la zone d&apos;activité de la Vache, à proximité immédiate de Muret et Cugnaux.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Coordinates, Hours, Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Info Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Coordonnées de l&apos;atelier</h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white text-sky-600 border border-slate-200 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800 block">Adresse</span>
                    <span className="text-slate-600">4 Rue du Midi, ZAC de la Vache</span>
                    <span className="text-slate-600 block">31270 Frouzins, France</span>
                    <div className="mt-2 flex gap-2">
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=4+Rue+du+Midi+31270+Frouzins"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 hover:text-sky-700 bg-sky-50 px-2.5 py-1 rounded-lg"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>Itinéraire Google Maps</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-2 border-t border-slate-200/60">
                  <div className="p-2.5 rounded-xl bg-white text-sky-600 border border-slate-200 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800 block">Téléphone direct</span>
                    <a
                      href="tel:0561400455"
                      className="text-base font-bold text-sky-600 hover:text-sky-700 transition-colors"
                    >
                      05 61 40 04 55
                    </a>
                    <span className="text-xs text-slate-500 block">Appel direct atelier pour toute question</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-sky-600" />
                  <span>Horaires d&apos;ouverture</span>
                </h3>
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                  isOpenNow 
                    ? 'bg-emerald-100 text-emerald-800' 
                    : 'bg-amber-100 text-amber-800'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                  {isOpenNow ? 'Ouvert maintenant' : 'Actuellement fermé'}
                </span>
              </div>

              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-200/60 font-medium">
                  <span className="text-slate-700">Lundi</span>
                  <span className="text-slate-900 font-semibold">8h00 - 12h00 & 14h00 - 18h30</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-200/60 font-medium">
                  <span className="text-slate-700">Mardi</span>
                  <span className="text-slate-900 font-semibold">8h00 - 12h00 & 14h00 - 18h30</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-200/60 font-medium">
                  <span className="text-slate-700">Mercredi</span>
                  <span className="text-slate-900 font-semibold">8h00 - 12h00 & 14h00 - 18h30</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-200/60 font-medium">
                  <span className="text-slate-700">Jeudi</span>
                  <span className="text-slate-900 font-semibold">8h00 - 12h00 & 14h00 - 18h30</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-200/60 font-medium">
                  <span className="text-slate-700">Vendredi</span>
                  <span className="text-slate-900 font-semibold">8h00 - 12h00 & 14h00 - 18h30</span>
                </div>
                <div className="flex items-center justify-between py-1.5 text-slate-400">
                  <span>Samedi & Dimanche</span>
                  <span>Fermé</span>
                </div>
              </div>
            </div>

            {/* Google Map View */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 h-64 relative shadow-sm">
              <iframe
                title="Carte Google Maps Jo'Auto Solutions Frouzins"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.3642358054044!2d1.320500!3d43.518600!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb6c98692631%3A0x6b6375086d758957!2s4%20Rue%20du%20Midi%2C%2031270%20Frouzins!5e0!3m2!1sfr!2sfr!4v1710000000000!5m2!1sfr!2sfr"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Right Column: Appointment Booking Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900">Demande de rendez-vous ou de devis</h3>
              <p className="text-sm text-slate-600 mt-1">
                Remplissez ce formulaire pour nous indiquer votre besoin. Nous vous confirmons votre disponibilité par téléphone ou email dans les meilleurs délais.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jean Dupont"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="06 12 34 56 78"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Adresse Email
                    </label>
                    <input
                      type="email"
                      placeholder="jean.dupont@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Immatriculation ou Modèle
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: AB-123-CD ou Peugeot 208"
                      value={formData.plate}
                      onChange={(e) => setFormData({ ...formData, plate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Prestation souhaitée *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    >
                      <option value="revision">Révision & Vidange constructeur</option>
                      <option value="freinage">Freinage (Plaquettes / Disques)</option>
                      <option value="diagnostic">Diagnostic panne / Voyant allumé</option>
                      <option value="pneus">Pneumatiques & Géométrie</option>
                      <option value="distribution">Courroie de distribution</option>
                      <option value="embrayage">Embrayage / Boîte de vitesse</option>
                      <option value="clim">Climatisation & Habitacle</option>
                      <option value="controle">Pré-contrôle technique</option>
                      <option value="autre">Autre réparation mécanique</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Date souhaitée (indicative)
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Précisions sur votre véhicule ou votre demande
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Bruit suspect, voyant spécifique, révision des 60 000 km..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-sky-600 hover:bg-sky-500 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-600/25"
                >
                  <Send className="w-5 h-5" />
                  <span>Envoyer ma demande de rendez-vous</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  Vos informations sont uniquement utilisées pour répondre à votre demande. Aucun démarchage commercial.
                </p>
              </form>
            ) : (
              <div className="py-12 px-6 rounded-xl bg-white border border-emerald-200 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Demande enregistrée avec succès !</h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Merci <span className="font-semibold text-slate-800">{formData.name}</span>. L&apos;équipe Jo&apos;Auto Solutions vous recontacte rapidement au <span className="font-semibold text-slate-800">{formData.phone}</span> pour confirmer le créneau et les détails.
                </p>
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

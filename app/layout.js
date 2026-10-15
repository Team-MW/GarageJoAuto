import './globals.css';

export const metadata = {
  title: "Garage Jo'Auto Solutions | Entretien & Réparation Automobile à Frouzins (31)",
  description: "Garage Jo'Auto Solutions à Frouzins (31270). Entretien, révision avec garantie constructeur, diagnostic électronique, freinage, distribution et pneus. Devis gratuit au 05 61 40 04 55.",
  keywords: "Garage Frouzins, Jo Auto Solutions, Garage Jo Auto, réparation automobile Frouzins, mécanique Frouzins 31270, entretien auto Toulouse sud, diagnostic valise, révision garantie constructeur",
  openGraph: {
    title: "Garage Jo'Auto Solutions | Atelier Mécanique à Frouzins",
    description: "Expertise mécanique toutes marques, révision constructeur, diagnostic électronique et accueil personnalisé à Frouzins.",
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}

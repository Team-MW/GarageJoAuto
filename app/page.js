import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import QuoteCalculator from '../components/QuoteCalculator';
import WhyUs from '../components/WhyUs';
import Reviews from '../components/Reviews';
import ContactLocation from '../components/ContactLocation';
import Footer from '../components/Footer';
import FloatingCall from '../components/FloatingCall';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <QuoteCalculator />
      <WhyUs />
      <Reviews />
      <ContactLocation />
      <Footer />
      <FloatingCall />
    </main>
  );
}

import { useState, useEffect, useRef } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Concept from './components/Concept';
import ProductShowcase from './components/ProductShowcase';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';
import WhatsAppPopup from './components/WhatsAppPopup';
import WhatsAppFAB from './components/WhatsAppFAB';
import SalesToast from './components/SalesToast';

export default function App() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const productRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToProduct = () => {
    productRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans bg-cream text-charcoal">
      <Nav scrolled={navScrolled} onOrderClick={() => setPopupOpen(true)} />
      <Hero onShopClick={scrollToProduct} />
      <Concept />
      <div ref={productRef}>
        <ProductShowcase onOrderClick={() => setPopupOpen(true)} />
      </div>
      <SocialProof />
      <Footer />
      <WhatsAppFAB onClick={() => setPopupOpen(true)} />
      {popupOpen && <WhatsAppPopup onClose={() => setPopupOpen(false)} />}
      <SalesToast />
    </div>
  );
}

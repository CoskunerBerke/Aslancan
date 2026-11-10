import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutWorkshop from './components/AboutWorkshop';
import Services from './components/Services';
import ReviewRiver from './components/ReviewRiver';
import WorkshopGallery from './components/WorkshopGallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileQuickBar from './components/MobileQuickBar';
import { Language } from './data/productsData';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('tr');
  const [selectedProduct, setSelectedProduct] = useState<string>('');

  const scrollToContact = () => {
    const el = document.getElementById('iletisim');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProductForContact = (productSummary: string) => {
    setSelectedProduct(productSummary);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 overflow-x-hidden">
      <Navbar lang={lang} onToggleLang={setLang} onGoToContact={scrollToContact} />
      <main>
        <Hero lang={lang} onGoToContact={scrollToContact} />
        <AboutWorkshop lang={lang} />
        <Services lang={lang} onSelectProductForContact={handleSelectProductForContact} />
        <ReviewRiver lang={lang} />
        <WorkshopGallery lang={lang} />
        <ContactSection lang={lang} selectedProduct={selectedProduct} />
      </main>
      <Footer lang={lang} />
      <MobileQuickBar lang={lang} onGoToContact={scrollToContact} />
    </div>
  );
};

export default App;

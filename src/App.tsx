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

const App: React.FC = () => {
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
      <Navbar onGoToContact={scrollToContact} />
      <main>
        <Hero onGoToContact={scrollToContact} />
        <AboutWorkshop />
        <Services onSelectProductForContact={handleSelectProductForContact} />
        <ReviewRiver />
        <WorkshopGallery />
        <ContactSection selectedProduct={selectedProduct} />
      </main>
      <Footer />
      <MobileQuickBar onGoToContact={scrollToContact} />
    </div>
  );
};

export default App;

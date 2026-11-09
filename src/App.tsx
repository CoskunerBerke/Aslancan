import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutWorkshop from './components/AboutWorkshop';
import Services, { CartItem } from './components/Services';
import ReviewRiver from './components/ReviewRiver';
import WorkshopGallery from './components/WorkshopGallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileQuickBar from './components/MobileQuickBar';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([
    {
      productId: 'otel-havlusu-grubu',
      productTitle: 'Otel Havlusu Grubu (50x90 • 70x140 • 90x150)',
      variantLabel: '50x90 cm Otel El & Yüz Havlusu',
      unitLabel: 'Adet',
      quantity: 20,
      unitPrice: 95,
      orderType: 'Toptan',
    },
  ]);

  const handleAddToCart = (newItem: CartItem) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.productId === newItem.productId &&
          item.variantLabel === newItem.variantLabel &&
          item.orderType === newItem.orderType
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + newItem.quantity,
        };
        return updated;
      }
      return [...prev, newItem];
    });
  };

  const handleRemoveFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const scrollToCheckout = () => {
    const el = document.getElementById('siparis');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 overflow-x-hidden">
      <Navbar cartCount={cart.length} onOpenCheckout={scrollToCheckout} />
      <main>
        <Hero onOpenCheckout={scrollToCheckout} />
        <AboutWorkshop />
        <Services
          cart={cart}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
          onClearCart={handleClearCart}
        />
        <ReviewRiver />
        <WorkshopGallery />
        <ContactSection />
      </main>
      <Footer />
      <MobileQuickBar cartCount={cart.length} onOpenCheckout={scrollToCheckout} />
    </div>
  );
};

export default App;

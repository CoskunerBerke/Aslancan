import React, { useState, useEffect } from 'react';
import { Phone, ShoppingBag, Menu, X } from 'lucide-react';
import AslancanLogo from './AslancanLogo';

interface NavbarProps {
  cartCount: number;
  onOpenCheckout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCheckout }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Hakkımızda', href: '#kurumsal' },
    { name: 'Ürünler', href: '#urunler' },
    { name: 'Sipariş', href: '#siparis' },
    { name: 'Yorumlar', href: '#yorumlar' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'İletişim', href: '#iletisim' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/95 backdrop-blur-xl border-b border-[#C5A47E]/25 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.45)]'
          : 'bg-zinc-950/80 backdrop-blur-md border-b border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Left: Real Logo & Brand Name (shrink-0 & whitespace-nowrap) */}
          <a href="#" className="flex items-center gap-3.5 shrink-0 group">
            <AslancanLogo className="w-11 h-11 shrink-0 transition-transform duration-300 group-hover:scale-105" />
            <div className="whitespace-nowrap">
              <span className="block font-brand text-white font-bold text-lg tracking-[0.14em] leading-none">
                ASLANCAN
              </span>
              <span className="block text-gold-metallic text-[10px] font-semibold tracking-[0.28em] uppercase mt-1">
                DENİZLİ TEKSTİL MAISON
              </span>
            </div>
          </a>

          {/* Center: Single-word Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-200 hover:text-[#E5C99B] transition-colors whitespace-nowrap tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: Phone + Cart/Order CTA (shrink-0 & whitespace-nowrap) */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="tel:+905358235885"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-white hover:bg-white/10 text-sm font-semibold transition-colors whitespace-nowrap shrink-0 border border-white/10"
            >
              <Phone className="w-4 h-4 text-[#D4AF7A] shrink-0" />
              <span>0535 823 58 85</span>
            </a>

            <button
              type="button"
              onClick={onOpenCheckout}
              className="luxury-shimmer inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gold-metallic text-zinc-950 text-sm font-bold transition-all whitespace-nowrap shrink-0 shadow-[0_8px_24px_rgba(212,175,122,0.28)]"
            >
              <ShoppingBag className="w-4 h-4 shrink-0" />
              <span>{cartCount > 0 ? `Sepet (${cartCount})` : 'Teklif Al'}</span>
            </button>
          </div>

          {/* Mobile Hamburger & Cart Trigger */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <button
              type="button"
              onClick={onOpenCheckout}
              className="luxury-shimmer inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gold-metallic text-zinc-950 text-xs font-bold whitespace-nowrap shrink-0"
            >
              <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
              <span>{cartCount > 0 ? `Sepet (${cartCount})` : 'Sipariş'}</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-200 hover:text-white hover:bg-white/10 shrink-0"
              aria-label="Menü"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-white/10 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-medium text-zinc-200 hover:text-[#E5C99B]"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 flex flex-col sm:flex-row gap-2.5">
              <a
                href="tel:+905358235885"
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/10 text-white text-sm font-semibold"
              >
                <Phone className="w-4 h-4 text-[#D4AF7A]" />
                <span>0535 823 58 85</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCheckout();
                }}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gold-metallic text-zinc-950 text-sm font-bold"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Online Sipariş & Teklif Sepeti ({cartCount})</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

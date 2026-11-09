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
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'bg-zinc-950/95 backdrop-blur-md border-b border-white/10 py-3.5'
          : 'bg-zinc-950/85 backdrop-blur-sm border-b border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Left: Real Logo & Brand Name (shrink-0 & whitespace-nowrap) */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <AslancanLogo className="w-10 h-10 shrink-0" />
            <div className="whitespace-nowrap">
              <span className="block text-white font-bold text-base tracking-tight leading-none">
                ASLANCAN TEKSTİL
              </span>
              <span className="block text-[#C5A47E] text-[11px] font-medium tracking-[0.2em] uppercase mt-1">
                DENİZLİ • OTEL & EV TEKSTİLİ
              </span>
            </div>
          </a>

          {/* Center: Single-word Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-white transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: Phone + Cart/Order CTA (shrink-0 & whitespace-nowrap) */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="tel:+905358235885"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-white hover:bg-white/10 text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
            >
              <Phone className="w-4 h-4 text-[#C5A47E] shrink-0" />
              <span>0535 823 58 85</span>
            </a>

            <button
              type="button"
              onClick={onOpenCheckout}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#9A7B56] hover:bg-[#866946] text-white text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
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
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#9A7B56] text-white text-xs font-semibold whitespace-nowrap shrink-0"
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
                className="block py-2 text-sm font-medium text-zinc-200 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 flex flex-col sm:flex-row gap-2.5">
              <a
                href="tel:+905358235885"
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/10 text-white text-sm font-semibold"
              >
                <Phone className="w-4 h-4 text-[#C5A47E]" />
                <span>0535 823 58 85</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCheckout();
                }}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white text-zinc-950 text-sm font-semibold"
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

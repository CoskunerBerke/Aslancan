import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Globe } from 'lucide-react';
import AslancanLogo from './AslancanLogo';
import { Language } from '../data/productsData';

interface NavbarProps {
  lang: Language;
  onToggleLang: (lang: Language) => void;
  onGoToContact: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onGoToContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks =
    lang === 'tr'
      ? [
          { name: 'Hakkımızda', href: '#kurumsal' },
          { name: 'Ürünler', href: '#urunler' },
          { name: 'Yorumlar', href: '#yorumlar' },
          { name: 'Galeri', href: '#galeri' },
          { name: 'İletişim', href: '#iletisim' },
        ]
      : [
          { name: 'About', href: '#kurumsal' },
          { name: 'Products', href: '#urunler' },
          { name: 'Reviews', href: '#yorumlar' },
          { name: 'Gallery', href: '#galeri' },
          { name: 'Contact', href: '#iletisim' },
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
          {/* Left: Real Logo & Pure Turkish/English Brand Name (shrink-0 & whitespace-nowrap) */}
          <a href="#" className="flex items-center gap-3.5 shrink-0 group">
            <AslancanLogo className="w-11 h-11 shrink-0 transition-transform duration-300 group-hover:scale-105" />
            <div className="whitespace-nowrap">
              <span className="block font-brand text-white font-bold text-lg tracking-[0.14em] leading-none">
                ASLANCAN
              </span>
              <span className="block text-gold-metallic text-[10px] font-semibold tracking-[0.26em] uppercase mt-1">
                {lang === 'tr' ? 'DENİZLİ TEKSTİL' : 'DENIZLI TEXTILE'}
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

          {/* Right: Language Switcher (TR | EN) + Phone + Bize Ulaşın CTA (shrink-0 & whitespace-nowrap) */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {/* TR / EN Language Switcher */}
            <div className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 p-0.5 shrink-0 whitespace-nowrap">
              <button
                type="button"
                onClick={() => onToggleLang('tr')}
                className={`px-2.5 py-1.5 rounded-md text-xs font-bold transition-all whitespace-nowrap ${
                  lang === 'tr'
                    ? 'bg-gold-metallic text-zinc-950 shadow-sm'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                TR
              </button>
              <button
                type="button"
                onClick={() => onToggleLang('en')}
                className={`px-2.5 py-1.5 rounded-md text-xs font-bold transition-all whitespace-nowrap ${
                  lang === 'en'
                    ? 'bg-gold-metallic text-zinc-950 shadow-sm'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            <a
              href="tel:+905350379074"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-white hover:bg-white/10 text-sm font-semibold transition-colors whitespace-nowrap shrink-0 border border-white/10"
            >
              <Phone className="w-4 h-4 text-[#D4AF7A] shrink-0" />
              <span>0535 037 90 74</span>
            </a>

            <button
              type="button"
              onClick={onGoToContact}
              className="luxury-shimmer inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gold-metallic text-zinc-950 text-sm font-bold transition-all whitespace-nowrap shrink-0 shadow-[0_8px_24px_rgba(212,175,122,0.28)]"
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span>{lang === 'tr' ? 'Bize Ulaşın' : 'Contact Us'}</span>
            </button>
          </div>

          {/* Mobile Language Toggle, Contact & Hamburger */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <button
              type="button"
              onClick={() => onToggleLang(lang === 'tr' ? 'en' : 'tr')}
              className="inline-flex items-center gap-1 px-2.5 py-2 rounded-lg border border-white/15 bg-white/5 text-white text-xs font-bold whitespace-nowrap shrink-0"
              aria-label="Dil Değiştir / Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#D4AF7A] shrink-0" />
              <span>{lang === 'tr' ? 'TR | EN' : 'EN | TR'}</span>
            </button>
            <button
              type="button"
              onClick={onGoToContact}
              className="luxury-shimmer inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gold-metallic text-zinc-950 text-xs font-bold whitespace-nowrap shrink-0"
            >
              <MessageSquare className="w-3.5 h-3.5 shrink-0" />
              <span>{lang === 'tr' ? 'Bize Ulaşın' : 'Contact'}</span>
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
                href="tel:+905350379074"
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/10 text-white text-sm font-semibold"
              >
                <Phone className="w-4 h-4 text-[#D4AF7A]" />
                <span>0535 037 90 74</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onGoToContact();
                }}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gold-metallic text-zinc-950 text-sm font-bold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{lang === 'tr' ? 'Bize Ulaşın & Fiyat Alın' : 'Contact Us & Get Quote'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

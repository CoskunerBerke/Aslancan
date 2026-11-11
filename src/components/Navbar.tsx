import React, { useState, useEffect, useRef } from 'react';
import { Phone, MessageSquare, Menu, X, Globe, ChevronDown, Check } from 'lucide-react';
import AslancanLogo from './AslancanLogo';
import { Language, LANGUAGE_OPTIONS, LocalizedText } from '../data/productsData';

interface NavbarProps {
  lang: Language;
  onToggleLang: (lang: Language) => void;
  onGoToContact: () => void;
}

const BRAND_SUBTITLE: LocalizedText = {
  tr: 'DENİZLİ TEKSTİL',
  en: 'DENIZLI TEXTILE',
  de: 'DENIZLI TEXTIL',
  bg: 'ДЕНИЗЛИ ТЕКСТИЛ',
};

const CONTACT_BTN_TEXT: LocalizedText = {
  tr: 'Bize Ulaşın',
  en: 'Contact Us',
  de: 'Kontakt',
  bg: 'Контакти',
};

const MOBILE_CTA_LONG: LocalizedText = {
  tr: 'Bize Ulaşın & Fiyat Alın',
  en: 'Contact Us & Get Quote',
  de: 'Kontakt & Preisangebot',
  bg: 'Свържете се с нас за оферта',
};

const LANG_CARD_HEADER: LocalizedText = {
  tr: 'DİL SEÇİMİ',
  en: 'SELECT LANGUAGE',
  de: 'SPRACHE WÄHLEN',
  bg: 'ИЗБОР НА ЕЗИК',
};

const NAV_ITEMS: { href: string; label: LocalizedText }[] = [
  {
    href: '#kurumsal',
    label: { tr: 'Hakkımızda', en: 'About', de: 'Über uns', bg: 'За нас' },
  },
  {
    href: '#urunler',
    label: { tr: 'Ürünler', en: 'Products', de: 'Produkte', bg: 'Продукти' },
  },
  {
    href: '#yorumlar',
    label: { tr: 'Yorumlar', en: 'Reviews', de: 'Bewertungen', bg: 'Отзиви' },
  },
  {
    href: '#galeri',
    label: { tr: 'Galeri', en: 'Gallery', de: 'Galerie', bg: 'Галерия' },
  },
  {
    href: '#iletisim',
    label: { tr: 'İletişim', en: 'Contact', de: 'Kontakt', bg: 'Контакти' },
  },
];

const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onGoToContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const currentLangObj =
    LANGUAGE_OPTIONS.find((item) => item.code === lang) || LANGUAGE_OPTIONS[0];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleSelectLanguage = (code: Language) => {
    onToggleLang(code);
    setLangDropdownOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/95 backdrop-blur-xl border-b border-[#C5A47E]/25 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.45)]'
          : 'bg-zinc-950/80 backdrop-blur-md border-b border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Left: Real AT Monogram Logo & Brand Name (shrink-0 & whitespace-nowrap) */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3.5 shrink-0 group">
            <AslancanLogo className="w-9 h-9 sm:w-11 sm:h-11 shrink-0 transition-transform duration-300 group-hover:scale-105" />
            <div className="whitespace-nowrap">
              <span className="block font-brand text-white font-bold text-base sm:text-lg tracking-[0.12em] sm:tracking-[0.14em] leading-none">
                ASLANCAN
              </span>
              <span className="block text-gold-metallic text-[9px] sm:text-[10px] font-semibold tracking-[0.18em] sm:tracking-[0.26em] uppercase mt-1">
                {BRAND_SUBTITLE[lang]}
              </span>
            </div>
          </a>

          {/* Center: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-zinc-200 hover:text-[#E5C99B] transition-colors whitespace-nowrap tracking-wide"
              >
                {item.label[lang]}
              </a>
            ))}
          </nav>

          {/* Right: Language Dropdown Card + Phone + Contact CTA */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Downward Language Dropdown Card Container */}
            <div ref={dropdownRef} className="relative shrink-0">
              <button
                type="button"
                onClick={() => setLangDropdownOpen((prev) => !prev)}
                aria-expanded={langDropdownOpen}
                aria-haspopup="listbox"
                className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-2 rounded-lg border border-[#C5A47E]/40 bg-zinc-900/90 hover:bg-zinc-800 text-white text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0"
              >
                <Globe className="w-4 h-4 text-[#D4AF7A] shrink-0" />
                <span className="font-bold text-[#E5C99B]">{currentLangObj.shortLabel}</span>
                <span className="hidden xl:inline text-zinc-200">{currentLangObj.nativeName}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#D4AF7A] transition-transform duration-200 shrink-0 ${
                    langDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Downward Language Card (Dil Kartı) */}
              {langDropdownOpen && (
                <div
                  role="listbox"
                  className="absolute right-0 top-full mt-2 w-56 rounded-xl bg-zinc-950 border border-[#C5A47E]/50 shadow-[0_24px_60px_rgba(0,0,0,0.85)] p-2 z-50"
                >
                  <div className="px-3 py-1.5 border-b border-white/10 mb-1 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#D4AF7A]">
                      {LANG_CARD_HEADER[lang]}
                    </span>
                    <span className="text-[10px] text-zinc-400">4 Dil</span>
                  </div>

                  <div className="flex flex-col gap-1">
                    {LANGUAGE_OPTIONS.map((option) => {
                      const isSelected = option.code === lang;
                      return (
                        <button
                          key={option.code}
                          type="button"
                          role="option"
                          aria-selected={isSelected}
                          onClick={() => handleSelectLanguage(option.code)}
                          className={`w-full px-3 py-2.5 rounded-lg text-left flex items-center justify-between transition-all ${
                            isSelected
                              ? 'bg-gold-metallic text-zinc-950 font-bold shadow-sm'
                              : 'text-zinc-200 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span
                              className={`inline-flex items-center justify-center w-7 h-6 rounded text-[11px] font-extrabold tracking-wider ${
                                isSelected
                                  ? 'bg-zinc-950 text-[#E5C99B]'
                                  : 'bg-zinc-800 text-[#D4AF7A] border border-white/10'
                              }`}
                            >
                              {option.shortLabel}
                            </span>
                            <div>
                              <span className="block text-xs sm:text-sm leading-tight">
                                {option.nativeName}
                              </span>
                              <span
                                className={`block text-[10px] leading-tight mt-0.5 ${
                                  isSelected ? 'text-zinc-800' : 'text-zinc-400'
                                }`}
                              >
                                {option.countryLabel}
                              </span>
                            </div>
                          </div>
                          {isSelected && <Check className="w-4 h-4 text-zinc-950 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <a
              href="tel:+905358235885"
              className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-white hover:bg-white/10 text-sm font-semibold transition-colors whitespace-nowrap shrink-0 border border-white/10"
            >
              <Phone className="w-4 h-4 text-[#D4AF7A] shrink-0" />
              <span>0535 823 58 85</span>
            </a>

            <button
              type="button"
              onClick={onGoToContact}
              className="luxury-shimmer hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg bg-gold-metallic text-zinc-950 text-xs sm:text-sm font-bold transition-all whitespace-nowrap shrink-0 shadow-[0_8px_24px_rgba(212,175,122,0.28)]"
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span>{CONTACT_BTN_TEXT[lang]}</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-zinc-200 hover:text-white hover:bg-white/10 shrink-0"
              aria-label="Menü"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-white/10 space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-medium text-zinc-200 hover:text-[#E5C99B]"
              >
                {item.label[lang]}
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
                  onGoToContact();
                }}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gold-metallic text-zinc-950 text-sm font-bold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{MOBILE_CTA_LONG[lang]}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

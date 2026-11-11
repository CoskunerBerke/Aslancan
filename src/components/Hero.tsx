import React, { useEffect, useRef } from 'react';
import { Phone, MessageSquare, Truck, Sparkles } from 'lucide-react';
import { Language, LocalizedText } from '../data/productsData';

interface HeroProps {
  lang: Language;
  onGoToContact: () => void;
}

const MARQUEE_BY_LANG: Record<Language, string[]> = {
  tr: [
    'TÜRKİYE GENELİ 81 İLDE TESLİMAT & AMBAR GÖNDERİMİ',
    'OTEL HAVLUSU (50x90 • 70x140 • 90x150)',
    'ÇİZGİLİ SATEN OTEL NEVRESİM TAKIMLARI',
    'AYAK İZLİ YUNAN BORDÜRLÜ BANYO PASPASI',
    'SIVI GEÇİRMEZ YATAK KORUYUCU ALEZ',
    'HER BEDEN BÜYÜK BORNOZ & ÇOCUK BORNOZU',
    'İHRACAT FAZLASI KİLOLUK STOK HAVLULAR',
  ],
  en: [
    'NATIONWIDE DELIVERY TO ALL 81 PROVINCES & EXPORT SHIPPING',
    'HOTEL TOWELS (50x90 • 70x140 • 90x150)',
    'STRIPED SATEEN HOTEL BEDDING SETS',
    'GREEK-BORDER FOOTPRINT HOTEL BATH MATS',
    'WATERPROOF MATTRESS PROTECTORS',
    'ADULT (S-XXL) & KIDS BATHROBE COLLECTION',
    'EXPORT-SURPLUS STOCK TOWELS BY WEIGHT (KG)',
  ],
  de: [
    'LIEFERUNG IN ALLE 81 PROVINZEN & EXPORTVERSAND',
    'HOTELHANDTÜCHER (50x90 • 70x140 • 90x150)',
    'STREIFENSATIN-HOTELBETTWÄSCHE-SETS',
    'HOTEL-BADEMATTEN MIT MÄANDER-BORDÜRE',
    'WASSERDICHTE MATRATZENSCHONER',
    'ERWACHSENEN- (S-XXL) & KINDERBADEMÄNTEL',
    'EXPORTÜBERSCHUSS-LAGERHANDTÜCHER NACH GEWICHT (KG)',
  ],
  bg: [
    'ДОСТАВКА ДО ВСИЧКИ 81 ОБЛАСТИ И ИЗНОСЕН ТРАНСПОРТ',
    'ХОТЕЛСКИ КЪРПИ (50x90 • 70x140 • 90x150)',
    'РАИРАНИ САТЕНЕНИ ХОТЕЛСКИ СПАЛНИ КОМПЛЕКТИ',
    'ХОТЕЛСКИ ПОСТЕЛКИ ЗА БАНЯ С ГРЪЦКИ БОРДЮР',
    'НЕПРОМОКАЕМИ ПРОТЕКТОРИ ЗА МАТРАЦИ',
    'ХАЛАТИ ЗА ВЪЗРАСТНИ (S-XXL) И ДЕТСКИ ХАЛАТИ',
    'СТОКОВИ КЪРПИ ОТ ИЗНОСЕН РЕЗЕРВ НА КИЛОГРАМ',
  ],
};

const HERO_BADGE: LocalizedText = {
  tr: 'ASLANCAN TEKSTİL • DENİZLİ OTEL & EV TEKSTİLİ',
  en: 'ASLANCAN TEXTILE • DENIZLI HOTEL & HOME TEXTILES',
  de: 'ASLANCAN TEXTIL • DENIZLI HOTEL- & HEIMTEXTILIEN',
  bg: 'АСЛАНДЖАН ТЕКСТИЛ • ДЕНИЗЛИ ХОТЕЛСКИ И ДОМАШЕН ТЕКСТИЛ',
};

const HERO_EXPLORE_BTN: LocalizedText = {
  tr: 'Ürünleri İncele',
  en: 'Explore Products',
  de: 'Produkte ansehen',
  bg: 'Разгледайте продуктите',
};

const HERO_CONTACT_BTN: LocalizedText = {
  tr: 'Bize Ulaşın',
  en: 'Contact Us',
  de: 'Kontakt',
  bg: 'Свържете се с нас',
};

const TRUST_1: LocalizedText = {
  tr: '81 İlde Teslimat & Ambar Gönderimi',
  en: 'Delivery Across All 81 Provinces',
  de: 'Lieferung in alle 81 Provinzen',
  bg: 'Доставка във всички 81 области',
};

const TRUST_2: LocalizedText = {
  tr: 'Toptan Satış & Sayıya Göre Perakende Desteği',
  en: 'Wholesale & Quantity-Based Retail Support',
  de: 'Großhandel & Einzelhandel nach Menge',
  bg: 'Търговия на едро и дребно според количеството',
};

const TRUST_3: LocalizedText = {
  tr: 'Çalışma Saatleri: 08:30 – 18:00',
  en: 'Working Hours: 08:30 – 18:00',
  de: 'Öffnungszeiten: 08:30 – 18:00',
  bg: 'Работно време: 08:30 – 18:00',
};

const Hero: React.FC<HeroProps> = ({ lang, onGoToContact }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const marqueeList = MARQUEE_BY_LANG[lang];

  useEffect(() => {
    const vid = videoRef.current;
    if (vid) {
      vid.muted = true;
      vid.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative min-h-[94vh] flex flex-col justify-between bg-zinc-950 pt-28 overflow-hidden">
      {/* Continuous Textile Weaving Loom Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/images/textile-poster.jpg"
          className="w-full h-full object-cover object-center scale-[1.03]"
        >
          <source src="/videos/textile-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/92 via-zinc-950/76 to-zinc-950/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/60" />
        <div className="pointer-events-none absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full bg-[#D4AF7A]/15 blur-[130px] animate-luxury-aura" />
        <div className="pointer-events-none absolute bottom-16 right-10 w-[440px] h-[440px] rounded-full bg-[#C5A47E]/15 blur-[120px] animate-luxury-aura" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8 sm:py-12">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
            <span className="w-7 sm:w-10 h-[2px] bg-gradient-to-r from-[#D4AF7A] to-[#FFF6E5] shrink-0" />
            <span className="text-[11px] sm:text-sm font-semibold uppercase tracking-[0.18em] sm:tracking-[0.26em] text-gold-metallic">
              {HERO_BADGE[lang]}
            </span>
          </div>

          {lang === 'tr' && (
            <h1 className="font-luxury text-3xl sm:text-5xl lg:text-[64px] font-bold text-white tracking-tight leading-[1.12] sm:leading-[1.08] mb-5 sm:mb-6 drop-shadow-sm">
              Saf Denizli Pamuğundan{' '}
              <span className="italic font-normal text-gold-metallic">Otel & Ev Tekstili</span>{' '}
              Zarafeti.
            </h1>
          )}
          {lang === 'en' && (
            <h1 className="font-luxury text-3xl sm:text-5xl lg:text-[64px] font-bold text-white tracking-tight leading-[1.12] sm:leading-[1.08] mb-5 sm:mb-6 drop-shadow-sm">
              Pure Denizli Cotton{' '}
              <span className="italic font-normal text-gold-metallic">Hotel & Home Textile</span>{' '}
              Excellence.
            </h1>
          )}
          {lang === 'de' && (
            <h1 className="font-luxury text-3xl sm:text-5xl lg:text-[62px] font-bold text-white tracking-tight leading-[1.12] sm:leading-[1.08] mb-5 sm:mb-6 drop-shadow-sm">
              Edle{' '}
              <span className="italic font-normal text-gold-metallic">Hotel- & Heimtextilien</span>{' '}
              aus Reiner Denizli-Baumwolle.
            </h1>
          )}
          {lang === 'bg' && (
            <h1 className="font-luxury text-3xl sm:text-5xl lg:text-[60px] font-bold text-white tracking-tight leading-[1.14] sm:leading-[1.1] mb-5 sm:mb-6 drop-shadow-sm">
              Изящен{' '}
              <span className="italic font-normal text-gold-metallic">
                хотелски и домашен текстил
              </span>{' '}
              от чист памук от Денизли.
            </h1>
          )}

          {lang === 'tr' && (
            <p className="text-sm sm:text-lg text-zinc-200 leading-relaxed mb-8 sm:mb-10 max-w-2xl font-normal">
              Denizli merkezli <strong className="text-white font-semibold">Aslancan Tekstil</strong> olarak;
              50x90, 70x140 ve 90x150 otel havluları, çizgili saten nevresim takımları, banyo paspası,
              sıvı geçirmez alez, yetişkin ve çocuk bornozları ile ihracat fazlası kiloluk havlularda
              81 ilde teslimat ve doğrudan tedarik sağlıyoruz.
            </p>
          )}
          {lang === 'en' && (
            <p className="text-sm sm:text-lg text-zinc-200 leading-relaxed mb-8 sm:mb-10 max-w-2xl font-normal">
              Based in Denizli, <strong className="text-white font-semibold">Aslancan Textile</strong> supplies
              50x90, 70x140, and 90x150 hotel towels, striped sateen duvet cover sets, bath mats,
              waterproof mattress protectors, adult & kids bathrobes, and export-surplus per-kilo towels
              with delivery across all 81 provinces.
            </p>
          )}
          {lang === 'de' && (
            <p className="text-sm sm:text-lg text-zinc-200 leading-relaxed mb-8 sm:mb-10 max-w-2xl font-normal">
              Mit Sitz in Denizli liefert <strong className="text-white font-semibold">Aslancan Textil</strong>{' '}
              50x90, 70x140 und 90x150 Hotelhandtücher, Streifensatin-Bettwäsche, Badematten,
              wasserdichte Matratzenschoner, Erwachsenen- und Kinderbademäntel sowie
              Exportüberschuss-Handtücher pro Kilogramm direkt ab Werk.
            </p>
          )}
          {lang === 'bg' && (
            <p className="text-sm sm:text-lg text-zinc-200 leading-relaxed mb-8 sm:mb-10 max-w-2xl font-normal">
              Базирана в Денизли, <strong className="text-white font-semibold">Асланджан Текстил</strong>{' '}
              доставя хотелски кърпи (50x90, 70x140, 90x150), раирани сатенени спални комплекти,
              постелки за баня, непромокаеми протектори, халати за възрастни и деца и стокови кърпи
              на килограм на едро и дребно.
            </p>
          )}

          {/* 3 Action Buttons: Full-Width Touch-Friendly on Mobile, Side-by-Side on Tablet/Desktop */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap items-stretch sm:items-center gap-3 sm:gap-3.5 mb-10 sm:mb-12">
            <a
              href="#urunler"
              className="luxury-shimmer inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 sm:py-4 rounded-lg bg-gold-metallic text-zinc-950 font-bold text-sm sm:text-base transition-all shadow-[0_14px_35px_rgba(212,175,122,0.32)] hover:scale-[1.02] whitespace-nowrap shrink-0"
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>{HERO_EXPLORE_BTN[lang]}</span>
            </a>

            <button
              type="button"
              onClick={onGoToContact}
              className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 sm:py-4 rounded-lg bg-white hover:bg-zinc-100 text-zinc-950 font-bold text-sm sm:text-base transition-all shadow-lg hover:scale-[1.02] whitespace-nowrap shrink-0"
            >
              <MessageSquare className="w-4 h-4 text-[#9A743E] shrink-0" />
              <span>{HERO_CONTACT_BTN[lang]}</span>
            </button>

            <a
              href="tel:+905358235885"
              className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 sm:py-4 rounded-lg bg-zinc-900/80 hover:bg-zinc-800/90 backdrop-blur-md text-white font-semibold text-sm sm:text-base border border-[#D4AF7A]/35 transition-all whitespace-nowrap shrink-0"
            >
              <Phone className="w-4 h-4 text-[#D4AF7A] shrink-0" />
              <span>0535 823 58 85</span>
            </a>
          </div>

          {/* 3 Trust Items: Clean Responsive Wrapping on Phones/iPads, Side-by-Side on Desktop */}
          <div className="border-t border-white/15 pt-5 flex flex-col lg:flex-row lg:flex-wrap xl:flex-nowrap lg:items-center gap-2.5 lg:gap-5 text-xs sm:text-sm text-zinc-200">
            <span className="inline-flex items-center gap-2 font-semibold text-white">
              <Truck className="w-4 h-4 text-[#D4AF7A] shrink-0" />
              <span>{TRUST_1[lang]}</span>
            </span>
            <span className="hidden lg:inline text-[#D4AF7A] shrink-0">✦</span>
            <span>{TRUST_2[lang]}</span>
            <span className="hidden lg:inline text-[#D4AF7A] shrink-0">✦</span>
            <span>{TRUST_3[lang]}</span>
          </div>
        </div>
      </div>

      {/* Bottom Brand Marquee Ribbon */}
      <div className="relative z-10 w-full bg-zinc-950/90 backdrop-blur-md border-t border-[#C5A47E]/25 py-3.5 overflow-hidden">
        <div className="flex items-center gap-10 animate-marquee-fast w-max px-4">
          {[...marqueeList, ...marqueeList].map((item, idx) => (
            <div key={idx} className="flex items-center gap-10 shrink-0">
              <span className="text-xs font-semibold tracking-[0.22em] text-zinc-200 uppercase whitespace-nowrap">
                {item}
              </span>
              <span className="text-[#D4AF7A] text-xs">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

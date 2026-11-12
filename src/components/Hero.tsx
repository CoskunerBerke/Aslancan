import React, { useEffect, useRef } from 'react';
import { Phone, MessageSquare, Truck, Sparkles } from 'lucide-react';
import { Language, LocalizedText } from '../data/productsData';

interface HeroProps {
  lang: Language;
  onGoToContact: () => void;
}

const MARQUEE_BY_LANG: Record<Language, string[]> = {
  tr: [
    '1. KALİTE • 2. KALİTE • 3. KALİTE HAVLU & BORNOZ ÇEŞİTLERİ',
    'TOPTAN & PERAKENDE HAVLU (50x90 • 70x140 • 90x150) & OTEL HAVLUSU',
    'YETİŞKİN BÜYÜK BORNOZ (S-XXL) & ÇOCUK BORNOZU',
    'ÇİZGİLİ SATEN & PAMUK RANFORCE NEVRESİM TAKIMLARI & ÇARŞAF',
    'AYAK İZLİ BANYO PASPASI & SIVI GEÇİRMEZ YATAK KORUYUCU ALEZ',
    'İHRACAT FAZLASI KİLOLUK STOK HAVLULAR • 81 İLDE TESLİMAT',
  ],
  en: [
    '1ST, 2ND & 3RD QUALITY TOWELS & BATHROBES IN STOCK',
    'WHOLESALE & RETAIL TOWELS (50x90 • 70x140 • 90x150) & HOTEL TOWELS',
    'ADULT BATHROBES (S-XXL) & KIDS BATHROBE COLLECTION',
    'STRIPED SATEEN & COTTON RANFORCE DUVET COVER SETS & SHEETS',
    'FOOTPRINT BATH MATS & WATERPROOF MATTRESS PROTECTORS',
    'EXPORT-SURPLUS PER-KILO STOCK TOWELS • 81-PROVINCE DELIVERY',
  ],
  de: [
    'HANDTÜCHER & BADEMÄNTEL IN 1., 2. & 3. QUALITÄT AB LAGER',
    'GROSS- & EINZELHANDEL HANDTÜCHER (50x90 • 70x140 • 90x150)',
    'ERWACHSENEN- (S-XXL) & KINDERBADEMÄNTEL',
    'STREIFENSATIN- & BAUMWOLL-RANFORCE-BETTWÄSCHE & BETTLAKEN',
    'BADEMATTEN MIT FUSSMOTIV & WASSERDICHTE MATRATZENSCHONER',
    'EXPORTÜBERSCHUSS-LAGERHANDTÜCHER PRO KG • LANDESWEITER VERSAND',
  ],
  bg: [
    'ХАВЛИЕНИ КЪРПИ И ХАЛАТИ В 1-ВО, 2-РО И 3-ТО КАЧЕСТВО',
    'КЪРПИ НА ЕДРО И ДРЕБНО (50x90 • 70x140 • 90x150) И ХОТЕЛСКИ КЪРПИ',
    'ХАЛАТИ ЗА ВЪЗРАСТНИ (S-XXL) И ДЕТСКИ ХАЛАТИ',
    'РАИРАНИ САТЕНЕНИ И ПАМУЧНИ РАНФОРС СПАЛНИ КОМПЛЕКТИ И ЧАРШАФИ',
    'ПОСТЕЛКИ ЗА БАНЯ И НЕПРОМОКАЕМИ ПРОТЕКТОРИ ЗА МАТРАЦИ',
    'СТОКОВИ КЪРПИ НА КИЛОГРАМ • ДОСТАВКА В 81 ОБЛАСТИ',
  ],
};

const HERO_BADGE: LocalizedText = {
  tr: 'ASLANCAN TEKSTİL DENİZLİ • 1. 2. 3. KALİTE TOPTAN & PERAKENDE TEKSTİL',
  en: 'ASLANCAN TEXTILE DENIZLI • 1ST, 2ND, 3RD QUALITY WHOLESALE & RETAIL',
  de: 'ASLANCAN TEXTIL DENIZLI • 1., 2. & 3. QUALITÄT GROSS- & EINZELHANDEL',
  bg: 'АСЛАНДЖАН ТЕКСТИЛ ДЕНИЗЛИ • 1-ВО, 2-РО И 3-ТО КАЧЕСТВО НА ЕДРО И ДРЕБНО',
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
  tr: '1. 2. 3. Kalite Toptan & Perakende Satış',
  en: '1st, 2nd, 3rd Quality Wholesale & Retail',
  de: '1., 2. & 3. Qualität Groß- & Einzelhandel',
  bg: '1-во, 2-ро и 3-то качество на едро и дребно',
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
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/92 via-zinc-950/78 to-zinc-950/48" />
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
            <h1 className="font-luxury text-3xl sm:text-5xl lg:text-[62px] font-bold text-white tracking-tight leading-[1.12] sm:leading-[1.08] mb-5 sm:mb-6 drop-shadow-sm">
              Denizli’den Toptan & Perakende{' '}
              <span className="italic font-normal text-gold-metallic">
                Havlu, Bornoz, Nevresim, Paspas ve Alez.
              </span>
            </h1>
          )}
          {lang === 'en' && (
            <h1 className="font-luxury text-3xl sm:text-5xl lg:text-[62px] font-bold text-white tracking-tight leading-[1.12] sm:leading-[1.08] mb-5 sm:mb-6 drop-shadow-sm">
              Wholesale & Retail{' '}
              <span className="italic font-normal text-gold-metallic">
                Towels, Bathrobes, Bedding, Bath Mats & Protectors.
              </span>
            </h1>
          )}
          {lang === 'de' && (
            <h1 className="font-luxury text-3xl sm:text-5xl lg:text-[60px] font-bold text-white tracking-tight leading-[1.12] sm:leading-[1.08] mb-5 sm:mb-6 drop-shadow-sm">
              Groß- & Einzelhandel für{' '}
              <span className="italic font-normal text-gold-metallic">
                Handtücher, Bademäntel, Bettwäsche, Matten & Schoner.
              </span>
            </h1>
          )}
          {lang === 'bg' && (
            <h1 className="font-luxury text-3xl sm:text-5xl lg:text-[58px] font-bold text-white tracking-tight leading-[1.14] sm:leading-[1.1] mb-5 sm:mb-6 drop-shadow-sm">
              Търговия на едро и дребно с{' '}
              <span className="italic font-normal text-gold-metallic">
                кърпи, халати, спално бельо, постелки и протектори.
              </span>
            </h1>
          )}

          {lang === 'tr' && (
            <p className="text-sm sm:text-lg text-zinc-200 leading-relaxed mb-8 sm:mb-10 max-w-3xl font-normal">
              Denizli merkezli <strong className="text-white font-semibold">Aslancan Tekstil</strong> olarak;
              havlu ve bornoz satan mağazalara, büyük ve küçük tüm işletmelere, yurtlara ve otellere{' '}
              <strong className="text-[#E5C99B] font-semibold">1. kalite, 2. kalite ve 3. kalite</strong>{' '}
              seçenekleriyle el/yüz ve banyo havlusu (50x90, 70x140, 90x150), otel havlusu, yetişkin ve
              çocuk bornozu, nevresim takımları, ayak izli banyo paspası, sıvı geçirmez yatak alezi ve
              ihracat fazlası kiloluk stok havlu tedariği sağlıyoruz.
            </p>
          )}
          {lang === 'en' && (
            <p className="text-sm sm:text-lg text-zinc-200 leading-relaxed mb-8 sm:mb-10 max-w-3xl font-normal">
              Based in Denizli, <strong className="text-white font-semibold">Aslancan Textile</strong> supplies
              towel & bathrobe retailers, large and small businesses, dormitories, and hotels with{' '}
              <strong className="text-[#E5C99B] font-semibold">1st, 2nd, and 3rd quality</strong> hand and
              bath towels (50x90, 70x140, 90x150), hotel towels, adult & kids bathrobes, duvet cover sets,
              bath mats, waterproof mattress protectors, and per-kilo stock towels across all 81 provinces.
            </p>
          )}
          {lang === 'de' && (
            <p className="text-sm sm:text-lg text-zinc-200 leading-relaxed mb-8 sm:mb-10 max-w-3xl font-normal">
              Mit Sitz in Denizli beliefert <strong className="text-white font-semibold">Aslancan Textil</strong>{' '}
              Handtuch- und Bademantelhändler, große und kleine Betriebe, Wohnheime und Hotels mit{' '}
              <strong className="text-[#E5C99B] font-semibold">1., 2. und 3. Qualität</strong> Handtüchern
              (50x90, 70x140, 90x150), Hotelhandtüchern, Bademänteln, Bettwäsche-Sets, Badematten,
              wasserdichten Matratzenschonern und Kiloware direkt ab Lager.
            </p>
          )}
          {lang === 'bg' && (
            <p className="text-sm sm:text-lg text-zinc-200 leading-relaxed mb-8 sm:mb-10 max-w-3xl font-normal">
              Базирана в Денизли, <strong className="text-white font-semibold">Асланджан Текстил</strong>{' '}
              снабдява магазини за кърпи и халати, големи и малки предприятия, общежития и хотели с{' '}
              <strong className="text-[#E5C99B] font-semibold">1-во, 2-ро и 3-то качество</strong> хавлиени
              кърпи (50x90, 70x140, 90x150), хотелски кърпи, халати за възрастни и деца, спални комплекти,
              постелки за баня, непромокаеми протектори и стокови кърпи на килограм.
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

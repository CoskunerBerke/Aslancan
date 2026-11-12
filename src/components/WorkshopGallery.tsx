import React from 'react';
import { Language, LocalizedText } from '../data/productsData';

interface WorkshopGalleryProps {
  lang: Language;
}

const GALLERY_BADGE: LocalizedText = {
  tr: 'ÜRÜN & DOKUMA GALERİSİ • 1. 2. 3. KALİTE SEÇENEKLERİ',
  en: 'PRODUCT & WEAVING GALLERY • 1ST, 2ND, 3RD QUALITY OPTIONS',
  de: 'PRODUKT- & WEBEREI-GALERIE • 1., 2. & 3. QUALITÄT',
  bg: 'ГАЛЕРИЯ ПРОДУКТИ И ТЪКАНИ • 1-ВО, 2-РО И 3-ТО КАЧЕСТВО',
};

const GALLERY_TITLE: LocalizedText = {
  tr: 'Havlu, Bornoz, Nevresim Takımı, Banyo Paspası ve Sıvı Geçirmez Alez Koleksiyonumuz',
  en: 'Our Towel, Bathrobe, Duvet Cover Set, Bath Mat & Waterproof Protector Collection',
  de: 'Unsere Kollektion: Handtücher, Bademäntel, Bettwäsche, Badematten & Matratzenschoner',
  bg: 'Нашата колекция: Кърпи, халати, спални комплекти, постелки за баня и непромокаеми протектори',
};

const GALLERY_PHOTOS: {
  src: string;
  title: LocalizedText;
  subtitle: LocalizedText;
}[] = [
  {
    src: '/images/otel-havlu.jpg',
    title: {
      tr: 'Havlu & Otel Havlusu Grubu (50x90 • 70x140 • 90x150 — 1. 2. 3. Kalite)',
      en: 'Towel Collection (50x90 • 70x140 • 90x150 — 1st, 2nd, 3rd Quality)',
      de: 'Handtuch-Kollektion (50x90 • 70x140 • 90x150 — 1., 2. & 3. Qualität)',
      bg: 'Колекция хавлиени кърпи (50x90 • 70x140 • 90x150 — 1, 2, 3 качество)',
    },
    subtitle: {
      tr: 'Havlu satan mağazalar, işletmeler ve toptancılar için %100 Denizli pamuğu 1. 2. 3. kalite çift dikişli el, yüz, banyo ve otel havluları',
      en: '100% Denizli cotton double-stitched 1st, 2nd, and 3rd quality hand, face, bath, and commercial towels for stores and businesses',
      de: 'Doppelt genähte Hand-, Gesichts- und Duschtücher aus 100 % Denizli-Baumwolle in 1., 2. und 3. Qualität für Händler und Betriebe',
      bg: 'Двойно подшити кърпи за ръце, лице и баня от 100% памук Денизли в 1-во, 2-ро и 3-то качество за магазини и фирми',
    },
  },
  {
    src: '/images/bornoz-grubu.jpg',
    title: {
      tr: 'Bornoz Grubu (Yetişkin S-XXL & Çocuk Bornozu — 1. 2. 3. Kalite)',
      en: 'Bathrobe Collection (Adult S-XXL & Kids Bathrobes — 1st, 2nd, 3rd Quality)',
      de: 'Bademantel-Kollektion (Erwachsene S-XXL & Kinder — 1., 2. & 3. Qualität)',
      bg: 'Колекция халати за баня (Възрастни S-XXL и детски — 1, 2, 3 качество)',
    },
    subtitle: {
      tr: 'Bornoz satan mağazalar, toptancılar ve işletmeler için şal yaka, kimono ve kapüşonlu %100 pamuk 1. 2. 3. kalite bornoz çeşitleri',
      en: 'Shawl-collar, kimono, and hooded 100% cotton bathrobes in 1st, 2nd, and 3rd quality grades for bathrobe retailers and wholesalers',
      de: 'Schalkragen-, Kimono- und Kapuzenbademäntel aus 100 % Baumwolle in 1., 2. und 3. Qualität für Fachhandel und Großhandel',
      bg: 'Халати с шал яка, кимоно и качулка от 100% памук в 1-во, 2-ро и 3-то качество за магазини и търговци на едро',
    },
  },
  {
    src: '/images/ev-tekstili.jpg',
    title: {
      tr: 'Nevresim Takımları, Çarşaf & Sıvı Geçirmez Yatak Koruyucu Alez',
      en: 'Duvet Cover Sets, Bed Sheets & Waterproof Mattress Protectors',
      de: 'Bettwäsche-Sets, Spannbettlaken & Wasserdichte Matratzenschoner',
      bg: 'Спални комплекти, чаршафи и непромокаеми протектори за матраци',
    },
    subtitle: {
      tr: 'Çizgili saten ve pamuk ranforce nevresim takımları, lastikli/düz çarşaflar ve kapitoneli/membranlı sıvı geçirmez yatak alezleri',
      en: 'Striped sateen and cotton ranforce duvet cover sets, fitted/flat sheets, and quilted membrane waterproof mattress protectors',
      de: 'Streifensatin- und Baumwoll-Ranforce-Bettwäsche, Spannbettlaken und gesteppte wasserdichte Membran-Matratzenschoner',
      bg: 'Раирани сатенени и памучни ранфорс спални комплекти, чаршафи с ластик и капитонирани непромокаеми протектори',
    },
  },
  {
    src: '/images/otel-paspas.jpg',
    title: {
      tr: 'Ayak İzli Banyo Paspası & 1. 2. 3. Kalite Kiloluk Stok Havlular',
      en: 'Footprint Bath Mats & 1st, 2nd, 3rd Quality Per-Kg Stock Towels',
      de: 'Fußmotiv-Badematten & 1., 2., 3. Qualität Lagerhandtücher pro Kg',
      bg: 'Постелки за баня и стокови кърпи на килограм (1, 2, 3 качество)',
    },
    subtitle: {
      tr: 'Ağır gramajlı Yunan bordürlü ayak izli banyo paspasları ve tartı bazlı ihracat fazlası kiloluk paketli stok havlular',
      en: 'Heavyweight Greek-border footprint bath mats and packaged export-surplus per-kilo stock towels shipped across 81 provinces',
      de: 'Schwere Badematten mit Mäander-Bordüre und verpackte Exportüberschuss-Handtücher nach Gewicht (pro Kg)',
      bg: 'Плътни постелки за баня с гръцки бордюр и пакетирани стокови кърпи на килограм с доставка в 81 области',
    },
  },
];

const WorkshopGallery: React.FC<WorkshopGalleryProps> = ({ lang }) => {
  return (
    <section id="galeri" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1.5px] bg-[#9A743E] shrink-0" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#9A743E]">
              {GALLERY_BADGE[lang]}
            </p>
          </div>
          <h2 className="font-luxury text-2xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight">
            {GALLERY_TITLE[lang]}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {GALLERY_PHOTOS.map((photo) => (
            <div
              key={photo.src}
              className="group rounded-xl overflow-hidden border border-zinc-200 hover:border-[#C5A47E] bg-zinc-950 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_55px_-15px_rgba(154,116,62,0.22)]"
            >
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title[lang]}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 bg-white border-t border-zinc-200">
                <h3 className="font-luxury text-xl font-bold text-zinc-900">
                  {photo.title[lang]}
                </h3>
                <p className="text-sm text-zinc-600 mt-1">{photo.subtitle[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopGallery;

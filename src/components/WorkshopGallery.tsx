import React from 'react';
import { Language, LocalizedText } from '../data/productsData';

interface WorkshopGalleryProps {
  lang: Language;
}

const GALLERY_BADGE: LocalizedText = {
  tr: 'ÜRÜN & DOKUMA GALERİSİ',
  en: 'PRODUCT & WEAVING GALLERY',
  de: 'PRODUKT- & WEBEREI-GALERIE',
  bg: 'ГАЛЕРИЯ ПРОДУКТИ И ТЪКАНИ',
};

const GALLERY_TITLE: LocalizedText = {
  tr: 'Otel, Ev Tekstili, Bornoz ve Stok Havlu Koleksiyonumuz',
  en: 'Our Hotel, Home Textile, Bathrobe & Stock Towel Collection',
  de: 'Unsere Hotel-, Heimtextil-, Bademantel- & Lagerhandtuch-Kollektion',
  bg: 'Нашата колекция хотелски, домашен текстил, халати и стокови кърпи',
};

const GALLERY_PHOTOS: {
  src: string;
  title: LocalizedText;
  subtitle: LocalizedText;
}[] = [
  {
    src: '/images/otel-havlu.jpg',
    title: {
      tr: 'Otel Havlusu Grubu (50x90 • 70x140 • 90x150)',
      en: 'Hotel Towel Collection (50x90 • 70x140 • 90x150)',
      de: 'Hotelhandtücher-Kollektion (50x90 • 70x140 • 90x150)',
      bg: 'Колекция хотелски кърпи (50x90 • 70x140 • 90x150)',
    },
    subtitle: {
      tr: 'Yüksek su emici %100 Denizli pamuğu çift dikişli kar beyazı otel ve spa havluları',
      en: 'High-absorbency 100% Denizli cotton double-stitched snow-white hotel and spa towels',
      de: 'Saugstarke, doppelt genähte schneeweiße Hotel- und Spa-Handtücher aus 100 % Denizli-Baumwolle',
      bg: 'Високопопиващи снежнобели хотелски и СПА кърпи с двоен шев от 100% памук от Денизли',
    },
  },
  {
    src: '/images/otel-nevresim.jpg',
    title: {
      tr: 'Çizgili Saten Otel Nevresim & Çarşaf Takımları',
      en: 'Striped Sateen Hotel Duvet & Bed Sheet Sets',
      de: 'Streifensatin-Hotelbettwäsche & Bettlaken-Sets',
      bg: 'Раирани сатенени хотелски спални комплекти и чаршафи',
    },
    subtitle: {
      tr: 'Otel, pansiyon ve yurtlara özel yollu saten ve pamuk ranforce yatak tekstili',
      en: 'Striped sateen and cotton ranforce bedding tailored for hotels, resorts, and dormitories',
      de: 'Streifensatin- und Baumwoll-Ranforce-Bettwäsche für Hotels, Pensionen und Wohnheime',
      bg: 'Раиран сатен и памучен ранфорс за хотели, къщи за гости и общежития',
    },
  },
  {
    src: '/images/otel-paspas.jpg',
    title: {
      tr: 'Ayak İzli Otel Paspası & Sıvı Geçirmez Alez',
      en: 'Footprint Hotel Bath Mats & Waterproof Protectors',
      de: 'Hotel-Badematten & Wasserdichte Matratzenschoner',
      bg: 'Хотелски постелки за баня и непромокаеми протектори',
    },
    subtitle: {
      tr: 'Ağır gramajlı Yunan bordürlü banyo paspasları ve membranlı yatak koruyucular',
      en: 'Heavyweight Greek-border bath mats and breathable membrane mattress protectors',
      de: 'Schwere Badematten mit Mäander-Bordüre und atmungsaktive Membran-Matratzenschoner',
      bg: 'Плътни постелки за баня с гръцки бордюр и дишащи протектори за матраци',
    },
  },
  {
    src: '/images/stok-havlu-1.jpg',
    title: {
      tr: 'İhracat Fazlası Kiloluk Stok Havlular & Bornoz Grubu',
      en: 'Export-Surplus Per-Kg Stock Towels & Bathrobe Group',
      de: 'Exportüberschuss-Lagerhandtücher (pro Kg) & Bademäntel',
      bg: 'Стокови кърпи на килограм за износ и група халати',
    },
    subtitle: {
      tr: 'Paketli ihracat fazlası kiloluk havlular ve her bedenden yetişkin/çocuk bornozlarında 81 ilde teslimat',
      en: 'Packaged export-surplus per-kilo towels and adult/kids bathrobes shipped across 81 provinces',
      de: 'Verpackte Exportüberschuss-Handtücher nach Gewicht und Bademäntel in allen Größen',
      bg: 'Пакетирани стокови кърпи на килограм и халати за възрастни и деца във всички размери',
    },
  },
];

const WorkshopGallery: React.FC<WorkshopGalleryProps> = ({ lang }) => {
  return (
    <section id="galeri" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1.5px] bg-[#9A743E]" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#9A743E]">
              {GALLERY_BADGE[lang]}
            </p>
          </div>
          <h2 className="font-luxury text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
            {GALLERY_TITLE[lang]}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

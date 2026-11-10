import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ZoomIn,
  X,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import {
  CATEGORY_TABS,
  productGroups,
  stokExpandedCards,
  ProductGroupItem,
  Language,
  LocalizedText,
} from '../data/productsData';

interface ServicesProps {
  lang: Language;
  onSelectProductForContact: (productSummary: string) => void;
}

const CATALOG_TAG: LocalizedText = {
  tr: 'ÜRÜN GRUPLARI & TOPTAN / PERAKENDE KATALOĞU',
  en: 'PRODUCT GROUPS & WHOLESALE / RETAIL CATALOG',
  de: 'PRODUKTGRUPPEN & GROSS- / EINZELHANDELSKATALOG',
  bg: 'ПРОДУКТОВИ ГРУПИ И КАТАЛОГ НА ЕДРО И ДРЕБНО',
};

const CATALOG_TITLE: LocalizedText = {
  tr: 'Otel Ürünleri, Ev Tekstili, Bornoz ve Kiloluk Stok Havlular',
  en: 'Hotel Textiles, Home Textiles, Bathrobes & Per-Kilo Stock Towels',
  de: 'Hoteltextilien, Heimtextilien, Bademäntel & Lagerhandtücher pro Kg',
  bg: 'Хотелски текстил, домашен текстил, халати и стокови кърпи на кг',
};

const CARD_BADGE: LocalizedText = {
  tr: 'DENİZLİ ÜRETİM & 81 İLDE TESLİMAT',
  en: 'DENIZLI PRODUCTION & 81-PROVINCE DELIVERY',
  de: 'HERSTELLUNG IN DENIZLI & LIEFERUNG IN 81 PROVINZEN',
  bg: 'ПРОИЗВОДСТВО ДЕНИЗЛИ И ДОСТАВКА В 81 ОБЛАСТИ',
};

const OPTIONS_HEADER: LocalizedText = {
  tr: 'ÜRÜN SEÇENEKLERİ & EBAT / BEDEN LİSTESİ:',
  en: 'PRODUCT OPTIONS & DIMENSIONS / SIZES:',
  de: 'PRODUKTOPTIONEN & GRÖSSEN / MASSE:',
  bg: 'ВАРИАНТИ НА ПРОДУКТА И РАЗМЕРИ:',
};

const CARD_CTA: LocalizedText = {
  tr: 'Bize Ulaşın & Bu Ürünü İsteyin',
  en: 'Contact Us & Request This Product',
  de: 'Kontakt & Produkt anfragen',
  bg: 'Свържете се с нас и поръчайте',
};

const ZOOM_SINGLE: LocalizedText = {
  tr: 'Büyüt',
  en: 'Zoom',
  de: 'Vergrößern',
  bg: 'Увеличи',
};

const ZOOM_MULTI: LocalizedText = {
  tr: '3 Görseli İncele',
  en: 'View 3 Photos',
  de: '3 Fotos ansehen',
  bg: 'Виж 3 снимки',
};

const MODAL_CTA: LocalizedText = {
  tr: 'Bize Ulaşın & Fiyat Alın',
  en: 'Contact Us & Get Quote',
  de: 'Kontakt & Preisangebot',
  bg: 'Поискайте ценова оферта',
};

const Services: React.FC<ServicesProps> = ({ lang, onSelectProductForContact }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedSubIdx, setSelectedSubIdx] = useState<Record<string, number>>({});
  const [cardImageIdx, setCardImageIdx] = useState<Record<string, number>>({});
  const [previewProduct, setPreviewProduct] = useState<ProductGroupItem | null>(null);
  const [previewImgIdx, setPreviewImgIdx] = useState<number>(0);

  const filteredGroups =
    activeCategory === 'all'
      ? productGroups
      : activeCategory === 'stok'
        ? stokExpandedCards
        : productGroups.filter((item) => item.categoryKey === activeCategory);

  const handleRequestProduct = (product: ProductGroupItem, subIndex?: number) => {
    const idx = subIndex ?? selectedSubIdx[product.id] ?? 0;
    const chosenSub = product.subItems[idx] || product.subItems[0];
    const summary = `${product.title[lang]} — ${chosenSub.label[lang]}`;
    onSelectProductForContact(summary);
  };

  const openLightbox = (product: ProductGroupItem, initialImgIdx = 0) => {
    setPreviewProduct(product);
    setPreviewImgIdx(initialImgIdx);
  };

  return (
    <section id="urunler" className="py-24 bg-[#F6F3EC] border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Single-Row Side-by-Side Category Filter */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1.5px] bg-[#9A743E]" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#9A743E]">
              {CATALOG_TAG[lang]}
            </p>
          </div>

          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6">
            <h2 className="font-luxury text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight leading-tight max-w-2xl">
              {CATALOG_TITLE[lang]}
            </h2>

            {/* All 5 Category Filter Buttons Strictly Side-by-Side (Yan Yana) on a Single Line */}
            <div className="flex items-center gap-2.5 overflow-x-auto pb-1 no-scrollbar flex-nowrap shrink-0">
              {CATEGORY_TABS.map((tab) => {
                const isActive = activeCategory === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveCategory(tab.key)}
                    className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg border transition-all whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-zinc-950 text-[#E5C99B] border-[#C5A47E] shadow-md'
                        : 'bg-white text-zinc-700 border-zinc-300 hover:border-[#C5A47E] hover:text-zinc-950'
                    }`}
                  >
                    {tab.label[lang]}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3-Column Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGroups.map((product) => {
            const currentIdx = selectedSubIdx[product.id] ?? 0;
            const gallery =
              product.images && product.images.length > 0 ? product.images : [product.image];
            const activeImgIdx = cardImageIdx[product.id] ?? 0;
            const currentImgSrc = gallery[activeImgIdx] || product.image;

            return (
              <div
                key={product.id}
                className="group bg-white rounded-xl border border-zinc-200/90 hover:border-[#C5A47E] overflow-hidden flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_65px_-15px_rgba(154,116,62,0.24)]"
              >
                <div>
                  {/* Real Product Photo (16:10) with Multi-Image Support for Stock Towels */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950 border-b border-zinc-200">
                    {product.id === 'stok-kiloluk-havlular' && gallery.length === 3 ? (
                      <div className="w-full h-full grid grid-cols-3 gap-1 bg-zinc-950">
                        {gallery.map((imgUrl, gIdx) => (
                          <div
                            key={imgUrl}
                            onClick={() => openLightbox(product, gIdx)}
                            className="relative w-full h-full overflow-hidden cursor-pointer group/tile"
                          >
                            <img
                              src={imgUrl}
                              alt={`${product.title[lang]} - ${gIdx + 1}`}
                              className="w-full h-full object-cover object-center group-hover/tile:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-2 left-2 bg-zinc-950/80 text-[#E5C99B] text-[10px] font-bold px-1.5 py-0.5 rounded border border-white/15">
                              {gIdx + 1}/3
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div
                        onClick={() => openLightbox(product, activeImgIdx)}
                        className="w-full h-full cursor-pointer"
                      >
                        <img
                          src={currentImgSrc}
                          alt={product.title[lang]}
                          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    )}

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/75 via-transparent to-transparent opacity-85 group-hover:opacity-65 transition-opacity" />

                    {gallery.length > 1 && product.id !== 'stok-kiloluk-havlular' && (
                      <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-zinc-950/80 backdrop-blur-sm p-1 rounded-lg border border-white/15">
                        {gallery.map((thumb, tIdx) => (
                          <button
                            key={thumb}
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setCardImageIdx((prev) => ({ ...prev, [product.id]: tIdx }));
                            }}
                            className={`w-7 h-7 rounded overflow-hidden border transition-all ${
                              activeImgIdx === tIdx
                                ? 'border-[#D4AF7A] scale-105'
                                : 'border-white/20 opacity-65 hover:opacity-100'
                            }`}
                          >
                            <img src={thumb} alt="" className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    )}

                    <div className="pointer-events-none absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                      <span className="text-xs font-bold tracking-widest uppercase text-[#E5C99B]">
                        {product.num} • {product.categoryName[lang]}
                      </span>
                      <button
                        type="button"
                        onClick={() => openLightbox(product, activeImgIdx)}
                        className="pointer-events-auto inline-flex items-center gap-1 text-[11px] font-medium bg-zinc-950/80 backdrop-blur-sm px-2.5 py-1 rounded border border-white/15 hover:border-[#D4AF7A]"
                      >
                        <ZoomIn className="w-3.5 h-3.5 text-[#D4AF7A]" />
                        <span>{gallery.length > 1 ? ZOOM_MULTI[lang] : ZOOM_SINGLE[lang]}</span>
                      </button>
                    </div>
                  </div>

                  <div className="p-6 pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#9A743E]">
                        {CARD_BADGE[lang]}
                      </span>
                    </div>

                    <h3 className="font-luxury text-xl font-bold text-zinc-900 mb-2.5 leading-snug">
                      {product.title[lang]}
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed mb-5">
                      {product.desc[lang]}
                    </p>

                    {/* Vertically Stacked (Alt Alta) Sub-Groups & Dimensions List */}
                    <div>
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-zinc-500 mb-2">
                        {OPTIONS_HEADER[lang]}
                      </span>
                      <div className="flex flex-col gap-2">
                        {product.subItems.map((sub, idx) => {
                          const isSelected = currentIdx === idx;
                          return (
                            <button
                              key={sub.label.tr}
                              type="button"
                              onClick={() =>
                                setSelectedSubIdx((prev) => ({
                                  ...prev,
                                  [product.id]: idx,
                                }))
                              }
                              className={`w-full px-3.5 py-2.5 rounded-lg border text-left transition-all flex items-center justify-between gap-2 ${
                                isSelected
                                  ? 'bg-zinc-950 text-white border-zinc-950 shadow-sm'
                                  : 'bg-[#FAF8F5] text-zinc-800 border-zinc-200 hover:border-[#C5A47E]'
                              }`}
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <CheckCircle2
                                  className={`w-4 h-4 shrink-0 ${
                                    isSelected ? 'text-[#D4AF7A]' : 'text-zinc-400'
                                  }`}
                                />
                                <span className="text-xs sm:text-[13px] font-semibold leading-snug">
                                  {sub.label[lang]}
                                </span>
                              </div>
                              <span
                                className={`text-[11px] shrink-0 font-medium ${
                                  isSelected ? 'text-[#E5C99B]' : 'text-zinc-500'
                                }`}
                              >
                                {sub.spec[lang]}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Direct Redirect to "Bize Ulaşın" (#iletisim) */}
                <div className="px-6 pb-6 pt-2">
                  <button
                    type="button"
                    onClick={() => handleRequestProduct(product)}
                    className="luxury-shimmer w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-lg bg-gold-metallic text-zinc-950 text-xs sm:text-sm font-bold transition-all shadow-[0_8px_20px_rgba(212,175,122,0.25)] hover:scale-[1.01]"
                  >
                    <MessageSquare className="w-4 h-4 shrink-0" />
                    <span>{CARD_CTA[lang]}</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Product Lightbox Modal */}
      {previewProduct && (
        <div
          onClick={() => setPreviewProduct(null)}
          className="fixed inset-0 z-50 bg-zinc-950/85 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-zinc-950 border border-[#C5A47E]/40 rounded-xl max-w-3xl w-full overflow-hidden shadow-2xl"
          >
            {(() => {
              const modalImages =
                previewProduct.images && previewProduct.images.length > 0
                  ? previewProduct.images
                  : [previewProduct.image];
              const activeModalSrc = modalImages[previewImgIdx] || previewProduct.image;

              return (
                <>
                  <div className="relative aspect-[16/10] w-full bg-zinc-900 flex items-center justify-center">
                    <img
                      src={activeModalSrc}
                      alt={previewProduct.title[lang]}
                      className="max-h-full max-w-full object-contain"
                    />
                    {modalImages.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={() =>
                            setPreviewImgIdx(
                              (prev) => (prev - 1 + modalImages.length) % modalImages.length
                            )
                          }
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-zinc-950/80 text-white hover:text-[#D4AF7A] border border-white/20"
                          aria-label="Previous"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setPreviewImgIdx((prev) => (prev + 1) % modalImages.length)
                          }
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-zinc-950/80 text-white hover:text-[#D4AF7A] border border-white/20"
                          aria-label="Next"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}
                    <button
                      type="button"
                      onClick={() => setPreviewProduct(null)}
                      className="absolute top-4 right-4 p-2 rounded-full bg-zinc-950/80 text-white hover:text-[#D4AF7A] border border-white/20"
                      aria-label="Close"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {modalImages.length > 1 && (
                    <div className="bg-zinc-900 px-6 py-3 flex items-center justify-center gap-3 border-t border-white/10">
                      {modalImages.map((mSrc, mIdx) => (
                        <button
                          key={mSrc}
                          type="button"
                          onClick={() => setPreviewImgIdx(mIdx)}
                          className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                            previewImgIdx === mIdx
                              ? 'border-[#D4AF7A] scale-105'
                              : 'border-white/20 opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img src={mSrc} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </>
              );
            })()}

            <div className="p-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10">
              <div>
                <span className="text-xs font-bold text-[#D4AF7A] uppercase tracking-wider">
                  {previewProduct.num} • {previewProduct.categoryName[lang]}
                </span>
                <h4 className="font-luxury text-2xl font-bold mt-1">
                  {previewProduct.title[lang]}
                </h4>
                <p className="text-xs text-zinc-300 mt-1">{previewProduct.desc[lang]}</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  const prod = previewProduct;
                  setPreviewProduct(null);
                  handleRequestProduct(prod, 0);
                }}
                className="px-5 py-3 rounded-lg bg-gold-metallic text-zinc-950 font-bold text-xs whitespace-nowrap shrink-0"
              >
                {MODAL_CTA[lang]}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;

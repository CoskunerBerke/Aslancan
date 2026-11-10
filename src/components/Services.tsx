import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ZoomIn, X, MessageSquare } from 'lucide-react';
import { CATEGORY_TABS, productGroups, ProductGroupItem } from '../data/productsData';

interface ServicesProps {
  onSelectProductForContact: (productSummary: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onSelectProductForContact }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedSubIdx, setSelectedSubIdx] = useState<Record<string, number>>({});
  const [previewProduct, setPreviewProduct] = useState<ProductGroupItem | null>(null);

  const filteredGroups =
    activeCategory === 'all'
      ? productGroups
      : productGroups.filter((item) => item.categoryKey === activeCategory);

  const handleRequestProduct = (product: ProductGroupItem, subIndex?: number) => {
    const idx = subIndex ?? selectedSubIdx[product.id] ?? 0;
    const chosenSub = product.subItems[idx] || product.subItems[0];
    const summary = `${product.title} — ${chosenSub.label}`;
    onSelectProductForContact(summary);
  };

  return (
    <section id="urunler" className="py-24 bg-[#F6F3EC] border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Single-Row Side-by-Side Category Filter */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1.5px] bg-[#9A743E]" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#9A743E]">
              KOLEKSİYON & ÜRÜN GRUPLARI KATALOĞU
            </p>
          </div>

          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6">
            <h2 className="font-luxury text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight leading-tight max-w-2xl">
              Otel Ürünleri, Ev Tekstili, Bornoz ve Kiloluk Stok Havlular
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
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 01 - 06 3-Column Luxury Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGroups.map((product) => {
            const currentIdx = selectedSubIdx[product.id] ?? 0;

            return (
              <div
                key={product.num}
                className="group bg-white rounded-xl border border-zinc-200/90 hover:border-[#C5A47E] overflow-hidden flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_65px_-15px_rgba(154,116,62,0.24)]"
              >
                <div>
                  {/* Real Product Photo (16:10) with Luxury Zoom Trigger */}
                  <div
                    onClick={() => setPreviewProduct(product)}
                    className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950 border-b border-zinc-200 cursor-pointer"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/65 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                      <span className="text-xs font-bold tracking-widest uppercase text-[#E5C99B]">
                        {product.num} • {product.categoryName}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-zinc-950/75 backdrop-blur-sm px-2.5 py-1 rounded border border-white/15">
                        <ZoomIn className="w-3.5 h-3.5 text-[#D4AF7A]" />
                        <span>Büyüt</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-6 pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#9A743E]">
                        DENİZLİ ÜRETİM & 81 İLDE TESLİMAT
                      </span>
                    </div>

                    <h3 className="font-luxury text-xl font-bold text-zinc-900 mb-2.5 leading-snug">
                      {product.title}
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed mb-5">
                      {product.desc}
                    </p>

                    {/* Vertically Stacked (Alt Alta) Sub-Groups & Dimensions List */}
                    <div>
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-zinc-500 mb-2">
                        ALT ÜRÜN GRUPLARI & EBAT / BEDEN SEÇENEKLERİ (ALT ALTA):
                      </span>
                      <div className="flex flex-col gap-2">
                        {product.subItems.map((sub, idx) => {
                          const isSelected = currentIdx === idx;
                          return (
                            <button
                              key={sub.label}
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
                                  {sub.label}
                                </span>
                              </div>
                              <span
                                className={`text-[11px] shrink-0 font-medium ${
                                  isSelected ? 'text-[#E5C99B]' : 'text-zinc-500'
                                }`}
                              >
                                {sub.spec}
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
                    <span>Bize Ulaşın & Bu Ürünü İsteyin</span>
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
            <div className="relative aspect-[16/10] w-full bg-black">
              <img
                src={previewProduct.image}
                alt={previewProduct.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setPreviewProduct(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-zinc-950/80 text-white hover:text-[#D4AF7A] border border-white/20"
                aria-label="Kapat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#D4AF7A] uppercase tracking-wider">
                  {previewProduct.num} • {previewProduct.categoryName}
                </span>
                <h4 className="font-luxury text-2xl font-bold mt-1">{previewProduct.title}</h4>
                <p className="text-xs text-zinc-300 mt-1">{previewProduct.desc}</p>
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
                Bize Ulaşın & Fiyat Alın
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;

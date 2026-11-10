import React, { useState } from 'react';
import {
  ShoppingBag,
  Plus,
  Check,
  CreditCard,
  Building2,
  Truck,
  Trash2,
  ZoomIn,
  X,
} from 'lucide-react';
import { CATEGORY_TABS, productGroups, ProductGroupItem } from '../data/productsData';

export interface CartItem {
  productId: string;
  productTitle: string;
  variantLabel: string;
  unitLabel: string;
  quantity: number;
  unitPrice: number;
  orderType: 'Toptan' | 'Perakende';
}

interface ServicesProps {
  cart: CartItem[];
  onAddToCart: (item: CartItem) => void;
  onRemoveFromCart: (index: number) => void;
  onClearCart: () => void;
}

const Services: React.FC<ServicesProps> = ({
  cart,
  onAddToCart,
  onRemoveFromCart,
  onClearCart,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedVariantIdx, setSelectedVariantIdx] = useState<Record<string, number>>({});
  const [selectedQty, setSelectedQty] = useState<Record<string, number>>({});
  const [selectedOrderType, setSelectedOrderType] = useState<
    Record<string, 'Toptan' | 'Perakende'>
  >({});
  const [addedFeedback, setAddedFeedback] = useState<string | null>(null);
  const [previewProduct, setPreviewProduct] = useState<ProductGroupItem | null>(null);

  // Checkout state
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'transfer'>('card');
  const [shippingMethod, setShippingMethod] = useState<'ambar' | 'kargo'>('ambar');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerCity, setCustomerCity] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [orderNotice, setOrderNotice] = useState<string | null>(null);

  const filteredGroups =
    activeCategory === 'all'
      ? productGroups
      : productGroups.filter((item) => item.categoryKey === activeCategory);

  const handleAdd = (product: ProductGroupItem) => {
    const vIdx = selectedVariantIdx[product.id] ?? 0;
    const variant = product.variants[vIdx] || product.variants[0];
    const orderType = selectedOrderType[product.id] ?? 'Toptan';
    const defaultQty = orderType === 'Toptan' ? variant.wholesaleMin : 2;
    const qty = selectedQty[product.id] ?? defaultQty;

    onAddToCart({
      productId: product.id,
      productTitle: product.title,
      variantLabel: variant.label,
      unitLabel: variant.unitLabel,
      quantity: Math.max(1, qty),
      unitPrice: variant.samplePrice,
      orderType,
    });

    setAddedFeedback(product.id);
    setTimeout(() => {
      setAddedFeedback((prev) => (prev === product.id ? null : prev));
    }, 1600);
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.quantity * item.unitPrice, 0);

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    const lines = cart.map(
      (c, i) =>
        `${i + 1}. ${c.productTitle} (${c.variantLabel}) - ${c.quantity} ${c.unitLabel} [${c.orderType}]`
    );

    const paymentText =
      paymentMethod === 'card'
        ? 'Online Kredi/Banka Kartı (3D Secure)'
        : 'Kurumsal Havale / EFT';
    const shippingText =
      shippingMethod === 'ambar'
        ? 'Şehirlerarası Ambar Gönderimi'
        : 'Anlaşmalı Kargo Gönderimi';

    const message = [
      `Merhaba Aslancan Tekstil (Yusuf Bey), web siteniz üzerinden sipariş / ödeme talebim var:`,
      ``,
      `Müşteri: ${customerName || 'Belirtilmedi'}`,
      `Telefon: ${customerPhone || 'Belirtilmedi'}`,
      `Teslimat İli / Adres: ${customerCity || 'Belirtilmedi'}`,
      `Sevkiyat Tercihi: ${shippingText}`,
      `Ödeme Yöntemi: ${paymentText}`,
      ``,
      `Sipariş Listesi:`,
      ...lines,
      ``,
      `Tahmini Ara Toplam: ${totalAmount.toLocaleString('tr-TR')} TL`,
    ].join('\n');

    setOrderNotice(
      'Sipariş özetiniz oluşturuldu. Online sanal POS (iyzico / PayTR) entegrasyonu canlı moda alındığında kart çekimi doğrudan bu ekrandan tamamlanacaktır. Şimdi siparişiniz onay için WhatsApp hattımıza yönlendiriliyor.'
    );

    window.open(
      `https://wa.me/905358235885?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="urunler" className="py-24 bg-[#F6F3EC] border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Category Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1.5px] bg-[#9A743E]" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#9A743E]">
                KOLEKSİYON & ONLINE SİPARİŞ KATALOĞU
              </p>
            </div>
            <h2 className="font-luxury text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight leading-tight">
              Otel Ürünleri, Ev Tekstili, Bornoz ve Kiloluk Stok Havlular
            </h2>
          </div>

          {/* Architectural Category Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {CATEGORY_TABS.map((tab) => {
              const isActive = activeCategory === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveCategory(tab.key)}
                  className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg border transition-all whitespace-nowrap ${
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

        {/* 01 - 06 3-Column Luxury Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGroups.map((product) => {
            const vIdx = selectedVariantIdx[product.id] ?? 0;
            const currentVariant = product.variants[vIdx] || product.variants[0];
            const currentOrderType = selectedOrderType[product.id] ?? 'Toptan';
            const defaultQty =
              currentOrderType === 'Toptan' ? currentVariant.wholesaleMin : 2;
            const currentQty = selectedQty[product.id] ?? defaultQty;
            const isAdded = addedFeedback === product.id;

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
                      <span className="font-mono text-xs font-bold tracking-widest uppercase text-[#E5C99B]">
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
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-[#9A743E]">
                        DENİZLİ ÜRETİM & STOK
                      </span>
                      <span className="text-xs font-mono font-bold text-zinc-900 bg-[#FAF8F5] px-2.5 py-1 rounded border border-zinc-200">
                        ~{currentVariant.samplePrice} TL / {currentVariant.unitLabel}
                      </span>
                    </div>

                    <h3 className="font-luxury text-xl font-bold text-zinc-900 mb-2.5 leading-snug">
                      {product.title}
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                      {product.desc}
                    </p>

                    <div className="py-2.5 border-y border-zinc-100 text-xs font-semibold text-zinc-600 mb-4">
                      {product.detail}
                    </div>

                    {/* Interactive Luxury Ebat / Variant Selector */}
                    <div className="space-y-3.5">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                          Ebat / Beden / Grup Seçimi
                        </label>
                        <div className="space-y-1.5">
                          {product.variants.map((v, idx) => {
                            const active = vIdx === idx;
                            return (
                              <button
                                key={v.label}
                                type="button"
                                onClick={() => {
                                  setSelectedVariantIdx((prev) => ({
                                    ...prev,
                                    [product.id]: idx,
                                  }));
                                  setSelectedQty((prev) => ({
                                    ...prev,
                                    [product.id]:
                                      currentOrderType === 'Toptan' ? v.wholesaleMin : 2,
                                  }));
                                }}
                                className={`w-full px-3 py-2 rounded-lg border text-left text-xs flex items-center justify-between transition-all ${
                                  active
                                    ? 'bg-zinc-950 text-white border-zinc-950 font-semibold shadow-sm'
                                    : 'bg-[#FAF8F5] text-zinc-700 border-zinc-200 hover:border-[#C5A47E]'
                                }`}
                              >
                                <span className="truncate pr-2">{v.label}</span>
                                <span
                                  className={`font-mono shrink-0 ${
                                    active ? 'text-[#E5C99B]' : 'text-zinc-500'
                                  }`}
                                >
                                  ~{v.samplePrice} TL/{v.unitLabel}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Order Type (Toptan / Perakende) & Quantity */}
                      <div className="grid grid-cols-2 gap-2.5 pt-1">
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-500 mb-1">
                            Alım Tipi
                          </label>
                          <div className="grid grid-cols-2 rounded-lg border border-zinc-300 overflow-hidden text-xs font-semibold">
                            <button
                              type="button"
                              onClick={() => {
                                setSelectedOrderType((prev) => ({
                                  ...prev,
                                  [product.id]: 'Toptan',
                                }));
                                setSelectedQty((prev) => ({
                                  ...prev,
                                  [product.id]: currentVariant.wholesaleMin,
                                }));
                              }}
                              className={`py-2 transition-colors ${
                                currentOrderType === 'Toptan'
                                  ? 'bg-zinc-950 text-[#E5C99B]'
                                  : 'bg-white text-zinc-600 hover:bg-zinc-100'
                              }`}
                            >
                              Toptan
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                setSelectedOrderType((prev) => ({
                                  ...prev,
                                  [product.id]: 'Perakende',
                                }));
                                setSelectedQty((prev) => ({
                                  ...prev,
                                  [product.id]: 2,
                                }));
                              }}
                              className={`py-2 transition-colors ${
                                currentOrderType === 'Perakende'
                                  ? 'bg-zinc-950 text-[#E5C99B]'
                                  : 'bg-white text-zinc-600 hover:bg-zinc-100'
                              }`}
                            >
                              Perakende
                            </button>
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-500 mb-1">
                            Miktar ({currentVariant.unitLabel})
                          </label>
                          <input
                            type="number"
                            min={1}
                            value={currentQty}
                            onChange={(e) =>
                              setSelectedQty((prev) => ({
                                ...prev,
                                [product.id]: Math.max(1, Number(e.target.value)),
                              }))
                            }
                            className="w-full px-3 py-1.5 rounded-lg border border-zinc-300 bg-white text-zinc-900 text-sm font-bold focus:outline-none focus:border-zinc-900"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 pb-6 pt-2 flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => handleAdd(product)}
                    className={`luxury-shimmer flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                      isAdded
                        ? 'bg-emerald-700 text-white'
                        : 'bg-gold-metallic text-zinc-950 shadow-[0_8px_20px_rgba(212,175,122,0.25)]'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Sepete Eklendi</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>Siparişe Ekle</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`https://wa.me/905358235885?text=${encodeURIComponent(
                      `Merhaba Yusuf Bey, ${product.title} (${currentVariant.label} - ${currentQty} ${currentVariant.unitLabel} ${currentOrderType}) için güncel fiyat ve ambar gönderim bilgisi almak istiyorum.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold transition-colors whitespace-nowrap"
                  >
                    Fiyat Sor
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Integrated E-Commerce Checkout & Payment Architecture Section (#siparis) */}
        <div
          id="siparis"
          className="mt-20 bg-white rounded-xl border border-[#C5A47E]/40 shadow-[0_25px_70px_-20px_rgba(0,0,0,0.12)] p-6 sm:p-10"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 border-b border-zinc-200">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#9A743E] mb-2">
                ONLINE SİPARİŞ & GÜVENLİ ÖDEME ALTYAPISI
              </p>
              <h3 className="font-luxury text-2xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
                Sipariş Sepeti ve Ödeme Yöntemi Seçimi
              </h3>
              <p className="text-sm text-zinc-600 mt-1">
                Toptan ambar sevkiyatı veya perakende siparişlerinizi kredi kartı (3D Secure) ya da
                havale/EFT seçeneğiyle oluşturabilirsiniz.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#E5C99B] bg-zinc-950 px-4 py-3 rounded-lg border border-[#C5A47E]/30">
              <span>256-Bit SSL</span>
              <span>•</span>
              <span>iyzico / PayTR Hazır</span>
              <span>•</span>
              <span>81 İle Ambar Teslim</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-8">
            {/* Left: Selected Items List */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-base font-bold text-zinc-900 flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-[#9A743E]" />
                    <span>Seçilen Ürünler ({cart.length})</span>
                  </h4>
                  {cart.length > 0 && (
                    <button
                      type="button"
                      onClick={onClearCart}
                      className="text-xs font-medium text-zinc-500 hover:text-zinc-900 underline"
                    >
                      Sepeti Temizle
                    </button>
                  )}
                </div>

                {cart.length === 0 ? (
                  <div className="rounded-lg border border-dashed border-zinc-300 bg-zinc-50 p-8 text-center">
                    <p className="text-sm font-semibold text-zinc-800 mb-1">
                      Sipariş sepetinizde henüz ürün bulunmuyor.
                    </p>
                    <p className="text-xs text-zinc-500">
                      Yukarıdaki 01–06 numaralı ürün kartlarından ebat/beden ve miktar seçerek
                      "Siparişe Ekle" butonuna tıklayabilirsiniz.
                    </p>
                  </div>
                ) : (
                  <div className="divide-y divide-zinc-200 border border-zinc-200 rounded-lg overflow-hidden">
                    {cart.map((item, idx) => (
                      <div
                        key={`${item.productId}-${item.variantLabel}-${idx}`}
                        className="p-4 bg-white flex items-center justify-between gap-4"
                      >
                        <div>
                          <span className="text-xs font-mono font-bold text-[#9A743E]">
                            {item.orderType} Sipariş
                          </span>
                          <h5 className="text-sm font-bold text-zinc-900">{item.productTitle}</h5>
                          <p className="text-xs text-zinc-600 mt-0.5">
                            {item.variantLabel} —{' '}
                            <strong className="text-zinc-900">
                              {item.quantity} {item.unitLabel}
                            </strong>
                          </p>
                        </div>

                        <div className="flex items-center gap-4 shrink-0">
                          <div className="text-right">
                            <span className="block text-sm font-bold text-zinc-900">
                              {(item.quantity * item.unitPrice).toLocaleString('tr-TR')} TL
                            </span>
                            <span className="block text-[11px] text-zinc-500">
                              {item.unitPrice} TL / {item.unitLabel}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => onRemoveFromCart(idx)}
                            className="p-1.5 text-zinc-400 hover:text-red-600 transition-colors"
                            aria-label="Kaldır"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Subtotal & Ambar Shipping Note */}
              <div className="mt-6 pt-5 border-t border-zinc-200 space-y-3">
                <div className="flex items-center justify-between text-sm text-zinc-600">
                  <span>Sevkiyat Şekli</span>
                  <span className="font-semibold text-zinc-900">
                    {shippingMethod === 'ambar'
                      ? 'Denizli Ambar Sevkiyatı (81 İl)'
                      : 'Anlaşmalı Kargo Gönderimi'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-lg font-bold text-zinc-900">
                  <span>Tahmini Sipariş Tutarı</span>
                  <span>{totalAmount.toLocaleString('tr-TR')} TL</span>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  * Toptan çuval/koli bazlı alımlarda ve ihracat fazlası kiloluk havlu siparişlerinde
                  miktar indirimi Yusuf Aslancan tarafından ayrıca uygulanmaktadır.
                </p>
              </div>
            </div>

            {/* Right: Payment Method & Shipping Form */}
            <div className="lg:col-span-6 border-t lg:border-t-0 lg:border-l border-zinc-200 lg:pl-10 pt-8 lg:pt-0">
              <form onSubmit={handleCompleteOrder} className="space-y-5">
                {/* Payment Method Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                    1. Ödeme Yöntemi Seçiniz
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-3.5 rounded-lg border text-left flex items-center gap-3 transition-colors ${
                        paymentMethod === 'card'
                          ? 'border-zinc-950 bg-zinc-950 text-white'
                          : 'border-zinc-300 bg-white text-zinc-800 hover:border-zinc-900'
                      }`}
                    >
                      <CreditCard className="w-5 h-5 shrink-0 text-[#D4AF7A]" />
                      <div>
                        <span className="block text-xs font-bold">Kredi / Banka Kartı</span>
                        <span
                          className={`block text-[11px] ${
                            paymentMethod === 'card' ? 'text-zinc-300' : 'text-zinc-500'
                          }`}
                        >
                          3D Secure Online Ödeme
                        </span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('transfer')}
                      className={`p-3.5 rounded-lg border text-left flex items-center gap-3 transition-colors ${
                        paymentMethod === 'transfer'
                          ? 'border-zinc-950 bg-zinc-950 text-white'
                          : 'border-zinc-300 bg-white text-zinc-800 hover:border-zinc-900'
                      }`}
                    >
                      <Building2 className="w-5 h-5 shrink-0 text-[#D4AF7A]" />
                      <div>
                        <span className="block text-xs font-bold">Havale / EFT & Toptan</span>
                        <span
                          className={`block text-[11px] ${
                            paymentMethod === 'transfer' ? 'text-zinc-300' : 'text-zinc-500'
                          }`}
                        >
                          Banka Hesabına Ödeme
                        </span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Shipping Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                    2. Gönderim & Teslimat Tercihi
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setShippingMethod('ambar')}
                      className={`py-2.5 px-3 rounded-lg border text-xs font-semibold flex items-center justify-center gap-2 transition-colors ${
                        shippingMethod === 'ambar'
                          ? 'border-zinc-900 bg-[#FAF8F5] text-zinc-900'
                          : 'border-zinc-300 bg-white text-zinc-600'
                      }`}
                    >
                      <Truck className="w-4 h-4 text-[#9A743E]" />
                      <span>Ambar ile Gönderim</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setShippingMethod('kargo')}
                      className={`py-2.5 px-3 rounded-lg border text-xs font-semibold flex items-center justify-center gap-2 transition-colors ${
                        shippingMethod === 'kargo'
                          ? 'border-zinc-900 bg-[#FAF8F5] text-zinc-900'
                          : 'border-zinc-300 bg-white text-zinc-600'
                      }`}
                    >
                      <Truck className="w-4 h-4 text-[#9A743E]" />
                      <span>Kargo (Perakende)</span>
                    </button>
                  </div>
                </div>

                {/* Customer Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                      Ad Soyad / Firma Adı
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Örn: Grand Otel / Ahmet Yılmaz"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 text-zinc-900 text-sm focus:outline-none focus:border-zinc-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                      Telefon Numaranız
                    </label>
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="05XX XXX XX XX"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 text-zinc-900 text-sm focus:outline-none focus:border-zinc-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                    Teslimat İli / İlçe (Ambar veya Kargo Noktası)
                  </label>
                  <input
                    type="text"
                    required
                    value={customerCity}
                    onChange={(e) => setCustomerCity(e.target.value)}
                    placeholder="Örn: Antalya / Muratpaşa veya İstanbul / Zeytinburnu Ambarlar"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 text-zinc-900 text-sm focus:outline-none focus:border-zinc-900"
                  />
                </div>

                {/* Conditional Payment Input Box (Card vs Bank Transfer) */}
                {paymentMethod === 'card' ? (
                  <div className="p-4 rounded-lg bg-[#FAF8F5] border border-zinc-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-zinc-800">
                        Kredi / Banka Kartı Bilgileri (Demo Modu)
                      </span>
                      <span className="text-[11px] font-mono text-zinc-500">
                        VISA • MASTERCARD • TROY
                      </span>
                    </div>

                    <div>
                      <input
                        type="text"
                        value={cardHolder}
                        onChange={(e) => setCardHolder(e.target.value)}
                        placeholder="Kart Üzerindeki İsim"
                        className="w-full px-3 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-900 text-xs sm:text-sm focus:outline-none focus:border-zinc-900"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        maxLength={19}
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="Kart Numarası (0000 0000 0000 0000)"
                        className="w-full px-3 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-900 text-xs sm:text-sm font-mono focus:outline-none focus:border-zinc-900"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        maxLength={5}
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        placeholder="AA / YY"
                        className="w-full px-3 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-900 text-xs sm:text-sm font-mono focus:outline-none focus:border-zinc-900"
                      />
                      <input
                        type="text"
                        maxLength={4}
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value)}
                        placeholder="CVC (000)"
                        className="w-full px-3 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-900 text-xs sm:text-sm font-mono focus:outline-none focus:border-zinc-900"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-lg bg-[#FAF8F5] border border-zinc-200 text-xs text-zinc-700 space-y-1.5">
                    <p className="font-bold text-zinc-900">
                      Aslancan Tekstil — Kurumsal Havale / EFT & Ambar Süreci
                    </p>
                    <p>
                      Siparişiniz onaylandığında stok ve güncel tartı/koli tutarı hesaplanarak
                      Yusuf Aslancan tarafından IBAN ve ambar teslim fişi paylaşılır.
                    </p>
                  </div>
                )}

                {orderNotice && (
                  <div className="p-3.5 rounded-lg bg-stone-100 border border-stone-300 text-xs text-zinc-800 leading-relaxed">
                    {orderNotice}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={cart.length === 0}
                  className={`luxury-shimmer w-full py-4 px-6 rounded-lg font-bold text-sm transition-all ${
                    cart.length === 0
                      ? 'bg-zinc-300 text-zinc-500 cursor-not-allowed'
                      : 'bg-gold-metallic text-zinc-950 shadow-[0_12px_30px_rgba(212,175,122,0.28)]'
                  }`}
                >
                  {paymentMethod === 'card'
                    ? `3D Secure ile Siparişi Tamamla (${totalAmount.toLocaleString('tr-TR')} TL)`
                    : `Siparişi & Proforma Talebini Gönder (${totalAmount.toLocaleString('tr-TR')} TL)`}
                </button>
              </form>
            </div>
          </div>
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
                <span className="text-xs font-mono text-[#D4AF7A] uppercase">
                  {previewProduct.num} • {previewProduct.categoryName}
                </span>
                <h4 className="font-luxury text-2xl font-bold mt-1">{previewProduct.title}</h4>
                <p className="text-xs text-zinc-300 mt-1">{previewProduct.detail}</p>
              </div>
              <a
                href={`https://wa.me/905358235885?text=${encodeURIComponent(
                  `Merhaba Yusuf Bey, ${previewProduct.title} grubunuz hakkında bilgi almak istiyorum.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-lg bg-gold-metallic text-zinc-950 font-bold text-xs whitespace-nowrap"
              >
                WhatsApp Fiyat Al
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;

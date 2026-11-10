import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import { Language } from '../data/productsData';

interface ContactSectionProps {
  lang: Language;
  selectedProduct?: string;
}

const QUICK_PRODUCTS_TR = [
  'Otel Havlusu Grubu (50x90 / 70x140 / 90x150)',
  'Otel Nevresim Takımları & Çarşaf',
  'Otel Paspası & Sıvı Geçirmez Alez',
  'Ev Tekstili (Nevresim, Çarşaf, Masa Örtüsü)',
  'Bornoz Grubu (Büyük Bornoz & Çocuk Bornozu)',
  'Stok Ürünler (İhracat Fazlası Kiloluk Havlu)',
];

const QUICK_PRODUCTS_EN = [
  'Hotel Towels (50x90 / 70x140 / 90x150)',
  'Hotel Duvet Cover Sets & Sheets',
  'Hotel Bath Mats & Waterproof Protectors',
  'Home Textiles (Bedding, Sheets, Tablecloths)',
  'Bathrobes (Adult S-XXL & Kids Bathrobes)',
  'Stock Towels (Export-Surplus Per Kg)',
];

const ContactSection: React.FC<ContactSectionProps> = ({ lang, selectedProduct }) => {
  const [fullName, setFullName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userCity, setUserCity] = useState('');
  const [requestedProduct, setRequestedProduct] = useState('');
  const [sentNotice, setSentNotice] = useState(false);

  const quickProducts = lang === 'tr' ? QUICK_PRODUCTS_TR : QUICK_PRODUCTS_EN;

  useEffect(() => {
    if (selectedProduct) {
      setRequestedProduct(selectedProduct);
    }
  }, [selectedProduct]);

  const buildDirectMessage = () => {
    return [
      `Merhaba Aslancan Tekstil, web sitenizden yeni bir ürün / iletişim talebi var:`,
      ``,
      `• İsim Soyisim: ${fullName.trim()}`,
      `• Telefon Numarası: ${userPhone.trim()}`,
      `• Bulunduğu Şehir: ${userCity.trim()}`,
      `• İstediği Ürün / Detay: ${requestedProduct.trim()}`,
    ].join('\n');
  };

  const handleSendToPhone = (e: React.FormEvent) => {
    e.preventDefault();
    const message = buildDirectMessage();
    setSentNotice(true);
    window.open(
      `https://wa.me/905350379074?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleSendMailAndPhone = () => {
    if (!fullName.trim() || !userPhone.trim() || !userCity.trim() || !requestedProduct.trim()) {
      const formEl = document.getElementById('bize-ulasin-form') as HTMLFormElement | null;
      if (formEl) formEl.reportValidity();
      return;
    }
    const message = buildDirectMessage();
    setSentNotice(true);
    window.open(
      `https://wa.me/905350379074?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="iletisim" className="py-24 bg-[#F6F3EC] border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1.5px] bg-[#9A743E]" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#9A743E]">
              {lang === 'tr'
                ? 'BİZE ULAŞIN • DOĞRUDAN SİPARİŞ & FİYAT TALEBİ'
                : 'CONTACT US • DIRECT ORDER & QUOTE REQUEST'}
            </p>
          </div>
          <h2 className="font-luxury text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
            {lang === 'tr'
              ? 'Bize Ulaşın — İstediğiniz Ürünü Doğrudan İletin'
              : 'Contact Us — Send Your Product Request Directly'}
          </h2>
          <p className="text-zinc-600 text-base mt-3">
            {lang === 'tr' ? (
              <>
                İsim soyisminizi, telefon numaranızı, bulunduğunuz şehri ve istediğiniz ürünü yazıp
                gönderdiğinizde talebiniz doğrudan{' '}
                <strong className="text-zinc-900">0535 037 90 74</strong> numaralı hattımıza düşer.
              </>
            ) : (
              <>
                Enter your full name, phone number, city, and requested product; your inquiry is
                delivered directly to our{' '}
                <strong className="text-zinc-900">0535 037 90 74</strong> line.
              </>
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          {/* Left: Clean Architectural Contact Details (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-xl p-7 sm:p-9 border border-[#C5A47E]/35 shadow-sm flex flex-col justify-between">
            <div className="divide-y divide-zinc-200">
              <div className="pb-5">
                <span className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                  {lang === 'tr' ? 'DOĞRUDAN SİPARİŞ & WHATSAPP HATTI' : 'DIRECT ORDER & WHATSAPP LINE'}
                </span>
                <p className="text-sm font-bold text-[#9A743E] mt-1">
                  Aslancan Tekstil — Yusuf Aslancan
                </p>
                <a
                  href="tel:+905350379074"
                  className="font-luxury text-3xl font-bold text-zinc-900 hover:text-[#9A743E] transition-colors mt-1.5 inline-flex items-center gap-2.5"
                >
                  <Phone className="w-6 h-6 text-[#9A743E] shrink-0" />
                  <span>0535 037 90 74</span>
                </a>
              </div>

              <div className="py-5">
                <span className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                  {lang === 'tr' ? 'ADRES & MERKEZ DEPO' : 'ADDRESS & HEADQUARTERS'}
                </span>
                <p className="text-sm sm:text-base font-bold text-zinc-900 mt-1.5 flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-[#9A743E] shrink-0 mt-0.5" />
                  <span>
                    Merkezefendi / Akçeşme Mah. 2612 Sokak No: 28/2 — Aslancan Tekstil, Denizli
                  </span>
                </p>
                <a
                  href="mailto:yaslancan027@gmail.com"
                  className="text-sm font-bold text-zinc-700 hover:text-[#9A743E] transition-colors mt-2.5 inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#9A743E] shrink-0" />
                  <span>yaslancan027@gmail.com</span>
                </a>
              </div>

              <div className="pt-5">
                <span className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                  {lang === 'tr' ? 'ÇALIŞMA SAATLERİ & SATIŞ MODELİ' : 'WORKING HOURS & SALES MODEL'}
                </span>
                <p className="text-base font-bold text-zinc-900 mt-1">
                  {lang === 'tr'
                    ? 'Pazartesi – Cumartesi: 08:30 – 18:00'
                    : 'Monday – Saturday: 08:30 – 18:00'}
                </p>
                <span className="text-sm text-zinc-600 block mt-1 leading-relaxed">
                  {lang === 'tr'
                    ? 'Toptan satış ağırlıklı olup sipariş adedine göre perakende alımlarda da doğrudan yardımcı olunmaktadır. Türkiye geneli 81 ilde teslimat ve ambar gönderimi sağlanır.'
                    : 'Primarily wholesale with direct support for quantity-based retail orders and freight shipping across all 81 provinces.'}
                </span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-200 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+905350379074"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white text-sm font-semibold transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#D4AF7A]" />
                <span>{lang === 'tr' ? '0535 037 90 74 Ara' : 'Call 0535 037 90 74'}</span>
              </a>
              <a
                href="https://wa.me/905350379074?text=Merhaba%20Aslancan%20Tekstil,%20ürünleriniz%20ve%20fiyatlarınız%20hakkında%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="luxury-shimmer flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-gold-metallic text-zinc-950 text-sm font-bold transition-all whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{lang === 'tr' ? 'WhatsApp Hattı' : 'WhatsApp Line'}</span>
              </a>
            </div>
          </div>

          {/* Right: 4-Field Direct Order & Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-xl p-7 sm:p-9 border border-[#C5A47E]/35 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 mb-6 border-b border-zinc-200">
              <div>
                <h3 className="font-luxury text-2xl font-bold text-zinc-900">
                  {lang === 'tr'
                    ? 'Bize Ulaşın & Ürün Talep Formu'
                    : 'Contact Us & Product Request Form'}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 mt-0.5">
                  {lang === 'tr' ? (
                    <>
                      Bilgilerinizi doldurduğunuzda talebiniz doğrudan{' '}
                      <strong className="text-zinc-900">0535 037 90 74</strong> numarasına iletilir.
                    </>
                  ) : (
                    <>
                      When submitted, your request is sent directly to{' '}
                      <strong className="text-zinc-900">0535 037 90 74</strong>.
                    </>
                  )}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-zinc-950 text-[#E5C99B] px-3.5 py-2 rounded-lg border border-[#C5A47E]/30 whitespace-nowrap self-start sm:self-auto">
                <Phone className="w-3.5 h-3.5 text-[#D4AF7A]" />
                <span>0535 037 90 74</span>
              </span>
            </div>

            <form id="bize-ulasin-form" onSubmit={handleSendToPhone} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 1. Kullanıcının İsim Soyismi */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    {lang === 'tr'
                      ? '1. İsim Soyisim / Firma Adı *'
                      : '1. Full Name / Company Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={
                      lang === 'tr'
                        ? 'Örn: Ahmet Yılmaz / Grand Otel'
                        : 'e.g., Ahmet Yilmaz / Grand Hotel'
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 text-zinc-900 text-sm focus:outline-none focus:border-zinc-950"
                  />
                </div>

                {/* 2. Kullanıcının Telefon Numarası */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    {lang === 'tr' ? '2. Telefon Numaranız *' : '2. Your Phone Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                    placeholder={lang === 'tr' ? 'Örn: 05XX XXX XX XX' : 'e.g., +90 5XX XXX XX XX'}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 text-zinc-900 text-sm focus:outline-none focus:border-zinc-950"
                  />
                </div>
              </div>

              {/* 3. Hangi Şehirde Olduğu */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                  {lang === 'tr'
                    ? '3. Bulunduğunuz Şehir (İl / İlçe) *'
                    : '3. Your City / Province *'}
                </label>
                <input
                  type="text"
                  required
                  value={userCity}
                  onChange={(e) => setUserCity(e.target.value)}
                  placeholder={
                    lang === 'tr'
                      ? 'Örn: İstanbul, Antalya, Ankara, İzmir, Denizli...'
                      : 'e.g., Istanbul, Antalya, Ankara, Izmir, Denizli...'
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 text-zinc-900 text-sm focus:outline-none focus:border-zinc-950"
                />
              </div>

              {/* 4. Hangi Ürünü / Ne İstediği */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                  {lang === 'tr'
                    ? '4. Hangi Ürünü İstiyorsunuz? (Ürün, Ebat ve Miktar) *'
                    : '4. Which Product Would You Like? (Product, Size & Quantity) *'}
                </label>

                {/* Quick Product Group Selector Chips */}
                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  {quickProducts.map((item) => {
                    const isSelected = requestedProduct.includes(item);
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() =>
                          setRequestedProduct((prev) =>
                            prev ? `${item} — ${prev}` : `${item} `
                          )
                        }
                        className={`text-[11px] font-semibold px-2.5 py-1 rounded border transition-colors ${
                          isSelected
                            ? 'bg-zinc-950 text-[#E5C99B] border-zinc-950'
                            : 'bg-[#FAF8F5] text-zinc-700 border-zinc-300 hover:border-[#C5A47E]'
                        }`}
                      >
                        + {item}
                      </button>
                    );
                  })}
                </div>

                <textarea
                  rows={3}
                  required
                  value={requestedProduct}
                  onChange={(e) => setRequestedProduct(e.target.value)}
                  placeholder={
                    lang === 'tr'
                      ? "Örn: 50x90 ve 70x140 otel havlusu 100'er adet, 20 adet L beden bornoz ve 50 kg ihracat fazlası kiloluk havlu fiyatı istiyorum..."
                      : 'e.g., 100 pcs of 50x90 and 70x140 hotel towels, 20 pcs size L bathrobes, and 50 kg export-surplus towels...'
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 text-zinc-900 text-sm focus:outline-none focus:border-zinc-950"
                />
              </div>

              {sentNotice && (
                <div className="p-3.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    {lang === 'tr' ? (
                      <>
                        Talebiniz (İsim Soyisim, Telefon, Şehir ve İstediğiniz Ürün){' '}
                        <strong>0535 037 90 74</strong> numarasına iletilmek üzere hazırlandı.
                      </>
                    ) : (
                      <>
                        Your request (Name, Phone, City, and Requested Product) has been prepared
                        for <strong>0535 037 90 74</strong>.
                      </>
                    )}
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <button
                  type="submit"
                  className="luxury-shimmer w-full py-4 px-5 rounded-lg bg-gold-metallic text-zinc-950 font-bold text-sm transition-all shadow-md inline-flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 shrink-0" />
                  <span>
                    {lang === 'tr'
                      ? '0535 037 90 74 Numarasına Gönder'
                      : 'Send to 0535 037 90 74'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handleSendMailAndPhone}
                  className="w-full py-4 px-5 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-sm transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#D4AF7A] shrink-0" />
                  <span>
                    {lang === 'tr'
                      ? 'Mesaj / Mail Talebi Olarak İlet'
                      : 'Send as Message / Mail Inquiry'}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Embedded Google Map (Merkezefendi / Akçeşme 2612 Sokak 28/2 Denizli) */}
        <div className="rounded-xl overflow-hidden border border-[#C5A47E]/35 bg-white h-[360px] shadow-sm">
          <iframe
            title="Aslancan Tekstil — Merkezefendi Akçeşme 2612 Sokak 28/2 Denizli"
            src="https://maps.google.com/maps?q=Ak%C3%A7e%C5%9Fme+Mahallesi+2612+Sokak+No+28+Merkezefendi+Denizli&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

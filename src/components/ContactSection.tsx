import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [productGroup, setProductGroup] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Merhaba Aslancan Tekstil (Yusuf Bey), ben ${
      name || 'Müşteriniz'
    }. İlgilendiğim Ürün Grubu: ${
      productGroup || 'Otel & Ev Tekstili'
    }. Talebim: ${note || 'Toptan / perakende fiyat ve ambar gönderim bilgisi almak istiyorum.'}`;
    window.open(
      `https://wa.me/905358235885?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="iletisim" className="py-24 bg-[#F6F3EC] border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1.5px] bg-[#9A743E]" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#9A743E]">
              İLETİŞİM, TOPTAN TEKLİF & AMBAR SEVKİYATI
            </p>
          </div>
          <h2 className="font-luxury text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
            Yusuf Aslancan ile Doğrudan İletişime Geçin
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Left: Clean Architectural Contact Details */}
          <div className="bg-white rounded-xl p-7 sm:p-9 border border-[#C5A47E]/35 shadow-sm flex flex-col justify-between">
            <div className="divide-y divide-zinc-200">
              <div className="pb-5">
                <span className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                  YETKİLİ & TELEFON / WHATSAPP
                </span>
                <p className="text-sm font-bold text-[#9A743E] mt-1">Yusuf Aslancan</p>
                <a
                  href="tel:+905358235885"
                  className="font-luxury text-3xl font-bold text-zinc-900 hover:text-[#9A743E] transition-colors mt-1 block"
                >
                  0535 823 58 85
                </a>
              </div>

              <div className="py-5">
                <span className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                  E-POSTA & KURUMSAL İLETİŞİM
                </span>
                <a
                  href="mailto:yaslancan027@gmail.com"
                  className="text-base font-bold text-zinc-900 hover:text-[#9A743E] transition-colors mt-1 block"
                >
                  yaslancan027@gmail.com
                </a>
                <span className="text-xs text-zinc-500 mt-1 block">
                  Merkez: Denizli • Türkiye Geneli 81 İle Ambar Gönderimi Sağlanır
                </span>
              </div>

              <div className="pt-5">
                <span className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                  ÇALIŞMA SAATLERİ & SATIŞ MODELİ
                </span>
                <p className="text-base font-bold text-zinc-900 mt-1">
                  Pazartesi – Cumartesi: 08:30 – 18:00
                </p>
                <span className="text-sm text-zinc-600 block mt-0.5">
                  Toptan satış ağırlıklı olup sipariş adedine göre perakende alımlarda da yardımcı olunmaktadır.
                </span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-200 flex flex-wrap gap-3">
              <a
                href="https://wa.me/905358235885?text=Merhaba%20Yusuf%20Bey,%20fiyat%20listesi%20ve%20ambar%20gönderimi%20hakkında%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="luxury-shimmer inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-gold-metallic text-zinc-950 text-sm font-bold transition-all"
              >
                WhatsApp ile Hızlı Fiyat Al
              </a>
              <a
                href="mailto:yaslancan027@gmail.com"
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white text-sm font-semibold transition-colors"
              >
                E-Posta Gönder
              </a>
            </div>
          </div>

          {/* Right: Clean 3-Field Form */}
          <div className="bg-white rounded-xl p-7 sm:p-9 border border-[#C5A47E]/35 shadow-sm">
            <h3 className="font-luxury text-2xl font-bold text-zinc-900 mb-1">
              Toptan & Perakende Fiyat Teklifi Formu
            </h3>
            <p className="text-sm text-zinc-600 mb-6">
              Formu doldurduğunuzda talebiniz doğrudan Yusuf Aslancan’ın WhatsApp hattına iletilir.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                  Adınız Soyadınız / İşletme Adı
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Adınız Soyadınız veya Otel/Firma Adı"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 text-zinc-900 text-sm focus:outline-none focus:border-zinc-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                  İlgilendiğiniz Kategori & Ebatlar
                </label>
                <input
                  type="text"
                  required
                  value={productGroup}
                  onChange={(e) => setProductGroup(e.target.value)}
                  placeholder="Örn: 50x90 & 70x140 Otel Havlusu, Nevresim, Kiloluk Havlu, Bornoz"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 text-zinc-900 text-sm focus:outline-none focus:border-zinc-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                  Sipariş Adedi / Kilo ve Gönderilecek İl
                </label>
                <textarea
                  rows={3}
                  required
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Adet veya kilo miktarını ve ambar/kargo gönderilecek ili yazınız..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 text-zinc-900 text-sm focus:outline-none focus:border-zinc-900"
                />
              </div>

              <button
                type="submit"
                className="luxury-shimmer w-full py-4 px-6 rounded-lg bg-gold-metallic text-zinc-950 font-bold text-sm transition-all shadow-md"
              >
                WhatsApp ile Teklif İste
              </button>
            </form>
          </div>
        </div>

        {/* Embedded Google Map (Denizli) */}
        <div className="rounded-xl overflow-hidden border border-[#C5A47E]/35 bg-white h-[360px] shadow-sm">
          <iframe
            title="Aslancan Tekstil Denizli Konumu"
            src="https://maps.google.com/maps?q=Denizli+Merkezefendi&t=&z=13&ie=UTF8&iwloc=&output=embed"
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

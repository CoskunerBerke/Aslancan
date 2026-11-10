import React from 'react';

const AboutWorkshop: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: '1. Sınıf Denizli Pamuk Dokuması',
      desc: 'Otel havlusu, bornoz, paspas ve saten nevresim koleksiyonlarımızda yüksek su emiciliğe ve yumuşak tuşeye sahip saf Denizli pamuk iplikleri kullanıyoruz.',
    },
    {
      num: '02',
      title: 'Toptan & Perakende Esnekliği',
      desc: 'Ana faaliyetimiz toptan tedarik olmakla birlikte, sipariş adedine ve ürün grubuna göre perakende alımlarda da müşterilerimize doğrudan yardımcı oluyoruz.',
    },
    {
      num: '03',
      title: '81 İle Ambar & Kargo Sevkiyatı',
      desc: 'Denizli merkez depomuzdan Türkiye’nin tüm illerindeki otel, yurt, spa, mağaza ve işletmelere anlaşmalı ambarlarla hızlı gönderim sağlıyoruz.',
    },
    {
      num: '04',
      title: 'İhracat Fazlası Kiloluk Stok Gücü',
      desc: 'Lüks otel ve ev serilerimizin yanı sıra ihracat fazlası her boyuttan kiloluk havlu stoklarımızla yüksek maliyet avantajı sunuyoruz.',
    },
  ];

  return (
    <section id="kurumsal" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1.5px] bg-[#9A743E]" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#9A743E]">
                ASLANCAN TEKSTİL MAISON • DENİZLİ
              </p>
            </div>

            <h2 className="font-luxury text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight leading-[1.15] mb-6">
              Denizli’den Seçkin Otellere ve Evlere Doğrudan Tekstil Tedariği
            </h2>

            <p className="text-zinc-600 text-base leading-relaxed mb-4">
              <strong className="text-zinc-900 font-semibold">Aslancan Tekstil</strong> (Yusuf Aslancan),
              Türkiye’nin tekstil başkenti Denizli’de 5 yıldızlı otel tekstili standartlarında kar beyazı
              havlu grupları, çizgili saten nevresim takımları, yetişkin ve çocuk bornozları ile ihracat
              fazlası kiloluk stok ürünlerin toptan ve adetli satışını gerçekleştirmektedir.
            </p>
            <p className="text-zinc-600 text-base leading-relaxed mb-8">
              Oteller, butik konaklama tesisleri, öğrenci yurtları, spa merkezleri ve çeyiz/ev tekstili
              müşterileri için aracı komisyonu olmadan doğrudan Denizli fiyatları sunuyor; tüm illere
              anlaşmalı ambarlarla sevkiyat yapıyoruz.
            </p>

            <div className="border-t border-zinc-200 pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <div className="border-l-2 border-[#C5A47E] pl-3">
                <span className="block font-bold text-zinc-900">Otel Ürünleri</span>
                <span className="text-zinc-500 text-xs">Havlu, Nevresim, Paspas, Alez</span>
              </div>
              <div className="border-l-2 border-[#C5A47E] pl-3">
                <span className="block font-bold text-zinc-900">Ev Tekstili</span>
                <span className="text-zinc-500 text-xs">Nevresim, Çarşaf, Masa Örtüsü</span>
              </div>
              <div className="border-l-2 border-[#C5A47E] pl-3">
                <span className="block font-bold text-zinc-900">Bornoz Grubu</span>
                <span className="text-zinc-500 text-xs">Büyük & Çocuk Her Beden</span>
              </div>
              <div className="border-l-2 border-[#C5A47E] pl-3">
                <span className="block font-bold text-zinc-900">Stok Ürünler</span>
                <span className="text-zinc-500 text-xs">İhracat Fazlası Kiloluk Havlu</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6">
            <div className="relative rounded-xl overflow-hidden border border-[#C5A47E]/35 bg-zinc-950 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] group">
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img
                  src="/images/textile-poster.jpg"
                  alt="Aslancan Tekstil Denizli Otel ve Ev Tekstili Koleksiyonu"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="bg-zinc-950 text-white px-6 py-4 flex items-center justify-between border-t border-[#C5A47E]/25">
                <div>
                  <span className="block font-brand text-xs tracking-[0.2em] text-gold-metallic uppercase">
                    ASLANCAN EXCLUSIVE
                  </span>
                  <span className="text-xs text-zinc-300">
                    Otel & Ev Tekstili Toptan ve Perakende Satış Merkezi
                  </span>
                </div>
                <span className="font-mono text-xs text-[#D4AF7A] font-semibold">
                  08:30 – 18:00
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 01 - 04 Architectural Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-12 border-t border-zinc-200">
          {pillars.map((item) => (
            <div
              key={item.num}
              className="group p-6 rounded-xl bg-[#FAF8F5] border border-zinc-200/80 hover:border-[#C5A47E] hover:bg-white hover:shadow-[0_18px_40px_-15px_rgba(197,164,126,0.22)] transition-all duration-300"
            >
              <span className="block text-sm font-mono font-bold text-[#9A743E] mb-2.5">
                {item.num}
              </span>
              <h3 className="text-base font-bold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutWorkshop;

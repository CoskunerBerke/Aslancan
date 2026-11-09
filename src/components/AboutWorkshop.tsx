import React from 'react';

const AboutWorkshop: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Denizli Dokuma & Pamuk Kalitesi',
      desc: 'Otel havlusu, bornoz, paspas ve nevresim gruplarımızda yüksek su emiciliğe sahip, yıkama mukavemeti yüksek Denizli pamuk iplikleri kullanıyoruz.',
    },
    {
      num: '02',
      title: 'Toptan & Perakende Esnekliği',
      desc: 'Ana faaliyetimiz toptan tedarik olmakla birlikte, sipariş adedine ve ürün grubuna göre perakende alımlarda da müşterilerimize doğrudan yardımcı oluyoruz.',
    },
    {
      num: '03',
      title: '81 İle Ambar & Kargo Sevkiyatı',
      desc: 'Denizli merkez depomuzdan Türkiye’nin tüm illerindeki otel, yurt, mağaza ve işletmelere anlaşmalı ambarlarla ekonomik ve hızlı gönderim sağlıyoruz.',
    },
    {
      num: '04',
      title: 'İhracat Fazlası Kiloluk Stok Gücü',
      desc: 'Birinci sınıf seri üretim ürünlerimizin yanı sıra ihracat fazlası her boyuttan kiloluk havlu stoklarımızla yüksek maliyet avantajı sunuyoruz.',
    },
  ];

  return (
    <section id="kurumsal" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9A7B56] mb-3">
              KURUMSAL TANITIM • DENİZLİ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight leading-tight mb-5">
              Denizli’den Türkiye Geneline Doğrudan Tekstil Tedariği
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed mb-4">
              <strong className="text-zinc-900 font-semibold">Aslancan Tekstil</strong> (Yusuf Aslancan),
              Türkiye’nin tekstil başkenti Denizli’de otel tekstili, ev tekstili, yetişkin ve çocuk bornoz
              grupları ile ihracat fazlası kiloluk stok ürünlerin toptan ve adetli satışını gerçekleştirmektedir.
            </p>
            <p className="text-zinc-600 text-base leading-relaxed mb-6">
              Oteller, pansiyonlar, öğrenci yurtları, hastaneler, tekstil mağazaları ve bireysel alıcılar
              için aracı komisyonu olmadan doğrudan Denizli fiyatları sunuyor; başka illere anlaşmalı
              ambar ve kargo ağımızla güvenle sevkiyat yapıyoruz.
            </p>

            <div className="border-t border-zinc-200 pt-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="block font-bold text-zinc-900">Otel Ürünleri</span>
                <span className="text-zinc-500 text-xs">Havlu, Nevresim, Paspas, Alez</span>
              </div>
              <div>
                <span className="block font-bold text-zinc-900">Ev Tekstili</span>
                <span className="text-zinc-500 text-xs">Nevresim, Çarşaf, Masa Örtüsü</span>
              </div>
              <div>
                <span className="block font-bold text-zinc-900">Bornoz Grubu</span>
                <span className="text-zinc-500 text-xs">Büyük & Çocuk Her Beden</span>
              </div>
              <div>
                <span className="block font-bold text-zinc-900">Stok Ürünler</span>
                <span className="text-zinc-500 text-xs">İhracat Fazlası Kiloluk Havlu</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6">
            <div className="aspect-[16/10] rounded-lg overflow-hidden border border-zinc-200 bg-zinc-100">
              <img
                src="/images/textile-poster.jpg"
                alt="Aslancan Tekstil Denizli Dokuma ve Üretim"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-zinc-500 px-1">
              <span>Aslancan Tekstil • Denizli Toptan & Perakende Satış Merkezi</span>
              <span className="font-mono text-zinc-700 font-semibold">08:30 – 18:00</span>
            </div>
          </div>
        </div>

        {/* 01 - 04 Architectural Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-12 border-t border-zinc-200">
          {pillars.map((item) => (
            <div key={item.num}>
              <span className="block text-xs font-mono font-bold text-[#9A7B56] mb-2">
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

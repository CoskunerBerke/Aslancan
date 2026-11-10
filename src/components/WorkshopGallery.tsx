import React from 'react';

const WorkshopGallery: React.FC = () => {
  const photos = [
    {
      src: '/images/otel-havlu.jpg',
      title: 'Otel Havlusu Grubu (50x90 • 70x140 • 90x150)',
      subtitle: 'Yüksek su emici %100 Denizli pamuğu çift dikişli kar beyazı otel ve spa havluları',
    },
    {
      src: '/images/otel-nevresim.jpg',
      title: 'Çizgili Saten Otel Nevresim & Çarşaf Takımları',
      subtitle: 'Otel, pansiyon ve yurtlara özel yollu saten ve pamuk ranforce yatak tekstili',
    },
    {
      src: '/images/otel-paspas.jpg',
      title: 'Ayak İzli Otel Paspası & Sıvı Geçirmez Alez',
      subtitle: 'Ağır gramajlı Yunan bordürlü banyo paspasları ve membranlı yatak koruyucular',
    },
    {
      src: '/images/bornoz-grubu.jpg',
      title: 'Yetişkin & Çocuk Bornozu + Kiloluk Stok Havlular',
      subtitle: 'Her bedenden büyük/çocuk bornozlar ve ihracat fazlası kiloluk havlularda 81 ile ambar sevkiyatı',
    },
  ];

  return (
    <section id="galeri" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1.5px] bg-[#9A743E]" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#9A743E]">
              SHOWROOM & KOLEKSİYON GALERİSİ
            </p>
          </div>
          <h2 className="font-luxury text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
            Otel, Ev Tekstili ve Bornoz Koleksiyonumuz
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {photos.map((photo) => (
            <div
              key={photo.title}
              className="group rounded-xl overflow-hidden border border-zinc-200 hover:border-[#C5A47E] bg-zinc-950 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_55px_-15px_rgba(154,116,62,0.22)]"
            >
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 bg-white border-t border-zinc-200">
                <h3 className="font-luxury text-xl font-bold text-zinc-900">{photo.title}</h3>
                <p className="text-sm text-zinc-600 mt-1">{photo.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopGallery;

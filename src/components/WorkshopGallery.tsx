import React from 'react';

const WorkshopGallery: React.FC = () => {
  const photos = [
    {
      src: '/images/otel-havlu.jpg',
      title: 'Otel Havlusu Grubu (50x90 • 70x140 • 90x150)',
      subtitle: 'Yüksek su emici %100 Denizli pamuğu çift dikişli otel ve spa havluları',
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
      src: '/images/kiloluk-stok-havlu.jpg',
      title: 'İhracat Fazlası Kiloluk Havlu & Bornoz Stoğu',
      subtitle: 'Her boyuttan kiloluk stok havlu ve yetişkin/çocuk bornoz gruplarında 81 ile ambar sevkiyatı',
    },
  ];

  return (
    <section id="galeri" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9A7B56] mb-3">
            ÜRÜN & KOLEKSİYON GALERİSİ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
            Otel, Ev Tekstili ve Stok Havlu Gruplarımızdan Kareler
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.title}
              className="rounded-lg overflow-hidden border border-zinc-200 bg-zinc-50"
            >
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 bg-white border-t border-zinc-200">
                <h3 className="text-base font-bold text-zinc-900">{photo.title}</h3>
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

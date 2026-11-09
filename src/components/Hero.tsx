import React, { useEffect, useRef } from 'react';
import { Phone, ShoppingBag, Truck } from 'lucide-react';

interface HeroProps {
  onOpenCheckout: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenCheckout }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (vid) {
      vid.muted = true;
      vid.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center bg-zinc-950 pt-28 pb-16 overflow-hidden">
      {/* Continuous Textile Weaving Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/images/textile-poster.jpg"
          className="w-full h-full object-cover object-center scale-[1.02]"
        >
          <source src="/videos/textile-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/80 to-zinc-950/65" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-[2px] bg-[#C5A47E]" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C5A47E]">
              DENİZLİ TEKSTİL MERKEZİ • 81 İLE AMBAR SEVKİYATI
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Otel Tekstili, Ev Tekstili, Bornoz ve Kiloluk Stok Havlu.
          </h1>

          <p className="text-base sm:text-lg text-zinc-200 leading-relaxed mb-9 max-w-2xl">
            Denizli merkezli <strong className="text-white font-semibold">Aslancan Tekstil</strong> olarak;
            50x90, 70x140 ve 90x150 otel havluları, çizgili saten nevresim takımları, banyo paspası,
            sıvı geçirmez alez, her bedenden yetişkin ve çocuk bornozu ile ihracat fazlası kiloluk
            havlularda toptan ve adede göre perakende tedarik sağlıyoruz.
          </p>

          <div className="flex flex-wrap items-center gap-3.5 mb-12">
            <a
              href="#urunler"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-white hover:bg-zinc-100 text-zinc-950 font-semibold text-sm sm:text-base transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Ürün Gruplarını İncele</span>
            </a>

            <button
              type="button"
              onClick={onOpenCheckout}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#9A7B56] hover:bg-[#866946] text-white font-semibold text-sm sm:text-base transition-colors"
            >
              <span>Online Sipariş & Ödeme</span>
            </button>

            <a
              href="tel:+905358235885"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-white font-medium text-sm sm:text-base border border-white/20 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C5A47E]" />
              <span>0535 823 58 85</span>
            </a>
          </div>

          <div className="border-t border-white/15 pt-5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-7 text-xs sm:text-sm text-zinc-300">
            <span className="inline-flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#C5A47E] shrink-0" />
              <span>Türkiye Geneli Tüm İllere Ambar ile Gönderim</span>
            </span>
            <span className="hidden sm:inline text-zinc-500">•</span>
            <span>Toptan Satış & Sayıya Göre Perakende Desteği</span>
            <span className="hidden sm:inline text-zinc-500">•</span>
            <span>Çalışma Saatleri: 08:30 – 18:00</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

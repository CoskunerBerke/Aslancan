import React, { useEffect, useRef } from 'react';
import { Phone, MessageSquare, Truck, Sparkles } from 'lucide-react';

interface HeroProps {
  onGoToContact: () => void;
}

const MARQUEE_ITEMS = [
  'TÜRKİYE GENELİ 81 İLDE TESLİMAT & AMBAR GÖNDERİMİ',
  'OTEL HAVLUSU (50x90 • 70x140 • 90x150)',
  'ÇİZGİLİ SATEN OTEL NEVRESİM TAKIMLARI',
  'AYAK İZLİ YUNAN BORDÜRLÜ BANYO PASPASI',
  'SIVI GEÇİRMEZ YATAK KORUYUCU ALEZ',
  'HER BEDEN BÜYÜK BORNOZ & ÇOCUK BORNOZU',
  'İHRACAT FAZLASI KİLOLUK STOK HAVLULAR',
];

const Hero: React.FC<HeroProps> = ({ onGoToContact }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (vid) {
      vid.muted = true;
      vid.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative min-h-[94vh] flex flex-col justify-between bg-zinc-950 pt-28 overflow-hidden">
      {/* Continuous Textile Weaving Loom Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/images/textile-poster.jpg"
          className="w-full h-full object-cover object-center scale-[1.03]"
        >
          <source src="/videos/textile-hero.mp4" type="video/mp4" />
        </video>
        {/* Multi-layered Couture & Perfume-House Contrast Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/92 via-zinc-950/76 to-zinc-950/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/60" />
        {/* Ambient Golden Champagne Aura */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full bg-[#D4AF7A]/15 blur-[130px] animate-luxury-aura" />
        <div className="pointer-events-none absolute bottom-16 right-10 w-[440px] h-[440px] rounded-full bg-[#C5A47E]/15 blur-[120px] animate-luxury-aura" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[2px] bg-gradient-to-r from-[#D4AF7A] to-[#FFF6E5]" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.28em] text-gold-metallic">
              ASLANCAN TEKSTİL • DENİZLİ EXCLUSIVE COLLECTION
            </span>
          </div>

          <h1 className="font-luxury text-4xl sm:text-6xl lg:text-[66px] font-bold text-white tracking-tight leading-[1.08] mb-6 drop-shadow-sm">
            Saf Denizli Pamuğundan{' '}
            <span className="italic font-normal text-gold-metallic">Otel & Ev Tekstili</span>{' '}
            Zarafeti.
          </h1>

          <p className="text-base sm:text-lg text-zinc-200 leading-relaxed mb-10 max-w-2xl font-normal">
            Denizli merkezli <strong className="text-white font-semibold">Aslancan Tekstil</strong> olarak;
            50x90, 70x140 ve 90x150 otel havluları, çizgili saten nevresim takımları, banyo paspası,
            sıvı geçirmez alez, yetişkin ve çocuk bornozları ile ihracat fazlası kiloluk havlularda
            81 ilde teslimat ve doğrudan tedarik sağlıyoruz.
          </p>

          {/* 3 Action Buttons Strictly Side-by-Side on Desktop */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3.5 mb-12">
            <a
              href="#urunler"
              className="luxury-shimmer inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-lg bg-gold-metallic text-zinc-950 font-bold text-sm sm:text-base transition-all shadow-[0_14px_35px_rgba(212,175,122,0.32)] hover:scale-[1.02] whitespace-nowrap shrink-0"
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Koleksiyonu İncele</span>
            </a>

            <button
              type="button"
              onClick={onGoToContact}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-lg bg-white hover:bg-zinc-100 text-zinc-950 font-bold text-sm sm:text-base transition-all shadow-lg hover:scale-[1.02] whitespace-nowrap shrink-0"
            >
              <MessageSquare className="w-4 h-4 text-[#9A743E] shrink-0" />
              <span>Bize Ulaşın</span>
            </button>

            <a
              href="tel:+905350379074"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-lg bg-zinc-900/80 hover:bg-zinc-800/90 backdrop-blur-md text-white font-semibold text-sm sm:text-base border border-[#D4AF7A]/35 transition-all whitespace-nowrap shrink-0"
            >
              <Phone className="w-4 h-4 text-[#D4AF7A] shrink-0" />
              <span>0535 037 90 74</span>
            </a>
          </div>

          {/* 3 Trust Items Strictly Side-by-Side on Desktop */}
          <div className="border-t border-white/15 pt-5 flex flex-col md:flex-row md:items-center gap-3 md:gap-6 text-xs sm:text-sm text-zinc-200">
            <span className="inline-flex items-center gap-2 font-semibold text-white whitespace-nowrap shrink-0">
              <Truck className="w-4 h-4 text-[#D4AF7A] shrink-0" />
              <span>81 İlde Teslimat & Ambar Gönderimi</span>
            </span>
            <span className="hidden md:inline text-[#D4AF7A] shrink-0">✦</span>
            <span className="whitespace-nowrap shrink-0">
              Toptan Satış & Sayıya Göre Perakende Desteği
            </span>
            <span className="hidden md:inline text-[#D4AF7A] shrink-0">✦</span>
            <span className="whitespace-nowrap shrink-0">Çalışma Saatleri: 08:30 – 18:00</span>
          </div>
        </div>
      </div>

      {/* Bottom Luxury Brand Marquee Ribbon */}
      <div className="relative z-10 w-full bg-zinc-950/90 backdrop-blur-md border-t border-[#C5A47E]/25 py-3.5 overflow-hidden">
        <div className="flex items-center gap-10 animate-marquee-fast w-max px-4">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <div key={idx} className="flex items-center gap-10 shrink-0">
              <span className="text-xs font-semibold tracking-[0.22em] text-zinc-200 uppercase whitespace-nowrap">
                {item}
              </span>
              <span className="text-[#D4AF7A] text-xs">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

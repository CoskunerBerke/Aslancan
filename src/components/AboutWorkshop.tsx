import React from 'react';
import { Language, LocalizedText } from '../data/productsData';

interface AboutWorkshopProps {
  lang: Language;
}

const SECTION_BADGE: LocalizedText = {
  tr: 'ASLANCAN TEKSTİL • DENİZLİ KURUMSAL',
  en: 'ASLANCAN TEXTILE • DENIZLI CORPORATE',
  de: 'ASLANCAN TEXTIL • DENIZLI UNTERNEHMEN',
  bg: 'АСЛАНДЖАН ТЕКСТИЛ • ДЕНИЗЛИ ЗА КОМПАНИЯТА',
};

const SECTION_HEADING: LocalizedText = {
  tr: 'Denizli’den Seçkin Otellere ve Evlere Doğrudan Tekstil Tedariği',
  en: 'Direct Textile Supply from Denizli to Hotels and Homes',
  de: 'Direkte Textillieferung aus Denizli für Hotels und Zuhause',
  bg: 'Директни доставки на текстил от Денизли за хотели и дома',
};

const IMAGE_BADGE_TITLE: LocalizedText = {
  tr: 'ASLANCAN TEKSTİL DENİZLİ',
  en: 'ASLANCAN TEXTILE DENIZLI',
  de: 'ASLANCAN TEXTIL DENIZLI',
  bg: 'АСЛАНДЖАН ТЕКСТИЛ ДЕНИЗЛИ',
};

const IMAGE_BADGE_SUB: LocalizedText = {
  tr: 'Otel & Ev Tekstili Toptan ve Perakende Satış Merkezi',
  en: 'Hotel & Home Textile Wholesale and Retail Center',
  de: 'Groß- und Einzelhandelszentrum für Hotel- & Heimtextilien',
  bg: 'Център за търговия на едро и дребно с хотелски и домашен текстил',
};

const MINI_GROUPS: { title: LocalizedText; sub: LocalizedText }[] = [
  {
    title: {
      tr: 'Otel Ürünleri',
      en: 'Hotel Textiles',
      de: 'Hoteltextilien',
      bg: 'Хотелски текстил',
    },
    sub: {
      tr: 'Havlu, Nevresim, Paspas, Alez',
      en: 'Towels, Bedding, Mats, Protectors',
      de: 'Handtücher, Bettwäsche, Matten, Schoner',
      bg: 'Кърпи, спално бельо, постелки, протектори',
    },
  },
  {
    title: {
      tr: 'Ev Tekstili',
      en: 'Home Textiles',
      de: 'Heimtextilien',
      bg: 'Домашен текстил',
    },
    sub: {
      tr: 'Nevresim, Çarşaf, Masa Örtüsü',
      en: 'Duvet Sets, Sheets, Tablecloths',
      de: 'Bettwäsche, Bettlaken, Tischdecken',
      bg: 'Спални комплекти, чаршафи, покривки',
    },
  },
  {
    title: {
      tr: 'Bornoz Grubu',
      en: 'Bathrobes',
      de: 'Bademäntel',
      bg: 'Халати за баня',
    },
    sub: {
      tr: 'Büyük & Çocuk Her Beden',
      en: 'Adult & Kids All Sizes',
      de: 'Erwachsene & Kinder Alle Größen',
      bg: 'За възрастни и деца всички размери',
    },
  },
  {
    title: {
      tr: 'Stok Ürünler',
      en: 'Stock Towels',
      de: 'Lagerware',
      bg: 'Стокови кърпи',
    },
    sub: {
      tr: 'İhracat Fazlası Kiloluk Havlu',
      en: 'Export-Surplus Per Kg',
      de: 'Exportüberschuss pro Kg',
      bg: 'Износни кърпи на килограм',
    },
  },
];

const STATS_RIBBON: { value: LocalizedText; label: LocalizedText }[] = [
  {
    value: { tr: '81 İl', en: '81 Provinces', de: '81 Provinzen', bg: '81 Области' },
    label: {
      tr: 'Türkiye Geneli Ambar & Kargo Teslimat',
      en: 'Nationwide Freight & Cargo Delivery',
      de: 'Landesweiter Speditions- & Paketversand',
      bg: 'Спедиция и карго доставка в цялата страна',
    },
  },
  {
    value: { tr: '%100', en: '100%', de: '100 %', bg: '100%' },
    label: {
      tr: 'Yüksek Emici Saf Denizli Pamuk Dokuması',
      en: 'High-Absorbency Pure Denizli Cotton',
      de: 'Saugstarke Reine Denizli-Baumwolle',
      bg: 'Високопопиващ чист памук от Денизли',
    },
  },
  {
    value: { tr: '06 Grup', en: '06 Groups', de: '06 Gruppen', bg: '06 Групи' },
    label: {
      tr: 'Otel, Ev, Bornoz & İhracat Fazlası Kiloluk Stok',
      en: 'Hotel, Home, Bathrobe & Per-Kg Stock Lines',
      de: 'Hotel-, Heim-, Bademantel- & Kg-Lagerware',
      bg: 'Хотелски, домашен текстил, халати и стока на кг',
    },
  },
  {
    value: { tr: '08:30–18:00', en: '08:30–18:00', de: '08:30–18:00', bg: '08:30–18:00' },
    label: {
      tr: 'Hızlı Teklif & Aynı Gün Ambar Sevkiyat Hazırlığı',
      en: 'Fast Quotes & Same-Day Freight Dispatch',
      de: 'Schnelles Angebot & Tägliche Verladung',
      bg: 'Бърза оферта и експедиция в същия ден',
    },
  },
];

const PILLARS: { num: string; title: LocalizedText; desc: LocalizedText }[] = [
  {
    num: '01',
    title: {
      tr: '1. Sınıf Denizli Pamuk Dokuması',
      en: '1st-Class Denizli Cotton Weaving',
      de: 'Erstklassige Denizli-Baumwollweberei',
      bg: 'Първокласна памучна тъкан от Денизли',
    },
    desc: {
      tr: 'Otel havlusu, bornoz, paspas ve saten nevresim koleksiyonlarımızda yüksek su emiciliğe ve yumuşak tuşeye sahip saf Denizli pamuk iplikleri kullanıyoruz.',
      en: 'We use pure Denizli cotton yarns with high water absorbency and soft touch across our hotel towel, bathrobe, bath mat, and sateen bedding lines.',
      de: 'Für unsere Hotelhandtücher, Bademäntel, Badematten und Satinbettwäsche verwenden wir reine Denizli-Baumwollgarne mit höchster Saugkraft.',
      bg: 'Използваме чисти памучни прежди от Денизли с висока попиваемост и мекота за нашите хотелски кърпи, халати, постелки и сатенено спално бельо.',
    },
  },
  {
    num: '02',
    title: {
      tr: 'Toptan & Perakende Esnekliği',
      en: 'Wholesale & Retail Flexibility',
      de: 'Groß- & Einzelhandelsflexibilität',
      bg: 'Гъвкавост на едро и дребно',
    },
    desc: {
      tr: 'Ana faaliyetimiz toptan tedarik olmakla birlikte, sipariş adedine ve ürün grubuna göre perakende alımlarda da müşterilerimize doğrudan yardımcı oluyoruz.',
      en: 'While our primary focus is wholesale supply, we also assist customers directly with quantity-based retail orders across our product groups.',
      de: 'Neben unserem Schwerpunkt im Großhandel unterstützen wir unsere Kunden je nach Bestellmenge auch direkt bei Einzelhandelsbestellungen.',
      bg: 'Основната ни дейност е търговията на едро, но съдействаме директно и при поръчки на дребно според количеството.',
    },
  },
  {
    num: '03',
    title: {
      tr: '81 İlde Teslimat & Ambar Sevkiyatı',
      en: 'Delivery Across All 81 Provinces',
      de: 'Lieferung in alle 81 Provinzen',
      bg: 'Доставка във всички 81 области',
    },
    desc: {
      tr: 'Denizli merkez depomuzdan Türkiye’nin tüm illerindeki otel, yurt, spa, mağaza ve işletmelere anlaşmalı ambarlarla hızlı gönderim sağlıyoruz.',
      en: 'From our central warehouse in Denizli, we provide fast freight and cargo shipping to hotels, dormitories, spas, and stores nationwide.',
      de: 'Von unserem Zentrallager in Denizli aus versenden wir schnell per Spedition an Hotels, Wohnheime, Spas und Geschäfte.',
      bg: 'От централния ни склад в Денизли осигуряваме бърза спедиция до хотели, общежития, СПА центрове и магазини.',
    },
  },
  {
    num: '04',
    title: {
      tr: 'İhracat Fazlası Kiloluk Stok Gücü',
      en: 'Export-Surplus Per-Kg Towel Stock',
      de: 'Exportüberschuss-Lagerbestand (pro Kg)',
      bg: 'Складова наличност на кърпи на килограм',
    },
    desc: {
      tr: 'Lüks otel ve ev serilerimizin yanı sıra ihracat fazlası her boyuttan kiloluk havlu stoklarımızla yüksek maliyet avantajı sunuyoruz.',
      en: 'Alongside our hotel and home collections, we offer strong cost advantages with export-surplus cotton towels in all sizes sold by weight.',
      de: 'Neben unseren Hotel- und Heimserien bieten wir hohe Preisvorteile durch Exportüberschuss-Handtücher in allen Größen nach Gewicht.',
      bg: 'Освен хотелските и домашните ни серии, предлагаме голямо ценово предимство със стокови износни кърпи във всички размери на килограм.',
    },
  },
];

const AboutWorkshop: React.FC<AboutWorkshopProps> = ({ lang }) => {
  return (
    <section id="kurumsal" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1.5px] bg-[#9A743E] shrink-0" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#9A743E]">
                {SECTION_BADGE[lang]}
              </p>
            </div>

            <h2 className="font-luxury text-2xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight leading-[1.16] mb-5 sm:mb-6">
              {SECTION_HEADING[lang]}
            </h2>

            {lang === 'tr' && (
              <>
                <p className="text-zinc-600 text-base leading-relaxed mb-4">
                  <strong className="text-zinc-900 font-semibold">Aslancan Tekstil</strong> (Yusuf Aslancan),
                  Türkiye’nin tekstil başkenti Denizli’de 5 yıldızlı otel tekstili standartlarında kar beyazı
                  havlu grupları, çizgili saten nevresim takımları, yetişkin ve çocuk bornozları ile ihracat
                  fazlası kiloluk stok ürünlerin toptan ve adetli satışını gerçekleştirmektedir.
                </p>
                <p className="text-zinc-600 text-base leading-relaxed mb-8">
                  Oteller, butik konaklama tesisleri, öğrenci yurtları, spa merkezleri ve çeyiz/ev tekstili
                  müşterileri için aracı komisyonu olmadan doğrudan Denizli fiyatları sunuyor; 81 ilde
                  teslimat ve anlaşmalı ambarlarla sevkiyat yapıyoruz.
                </p>
              </>
            )}

            {lang === 'en' && (
              <>
                <p className="text-zinc-600 text-base leading-relaxed mb-4">
                  <strong className="text-zinc-900 font-semibold">Aslancan Textile</strong> (Yusuf Aslancan),
                  located in Denizli—Turkey’s textile capital—supplies 5-star hotel standard snow-white
                  towel groups, striped sateen duvet cover sets, adult and children’s bathrobes, and
                  export-surplus per-kilo stock towels for wholesale and multi-piece retail orders.
                </p>
                <p className="text-zinc-600 text-base leading-relaxed mb-8">
                  We provide direct Denizli factory pricing without middlemen for hotels, boutique resorts,
                  student dormitories, spas, and home textile buyers, shipping to all 81 provinces via
                  partnered freight lines.
                </p>
              </>
            )}

            {lang === 'de' && (
              <>
                <p className="text-zinc-600 text-base leading-relaxed mb-4">
                  <strong className="text-zinc-900 font-semibold">Aslancan Textil</strong> (Yusuf Aslancan)
                  in Denizli — der Textilhauptstadt der Türkei — liefert schneeweiße Hotelhandtücher in
                  5-Sterne-Qualität, Streifensatin-Bettwäsche, Erwachsenen- und Kinderbademäntel sowie
                  Exportüberschuss-Lagerhandtücher nach Gewicht im Groß- und Einzelhandel.
                </p>
                <p className="text-zinc-600 text-base leading-relaxed mb-8">
                  Für Hotels, Pensionen, Studentenwohnheime, Spas und Heimtextilkunden bieten wir direkte
                  Herstellerpreise aus Denizli ohne Zwischenhändler und zuverlässigen Versand.
                </p>
              </>
            )}

            {lang === 'bg' && (
              <>
                <p className="text-zinc-600 text-base leading-relaxed mb-4">
                  <strong className="text-zinc-900 font-semibold">Асланджан Текстил</strong> (Юсуф Асланджан)
                  в текстилната столица Денизли предлага снежнобели хотелски кърпи по 5-звезден стандарт,
                  раирани сатенени спални комплекти, халати за възрастни и деца, както и износни стокови
                  кърпи на килограм на едро и дребно.
                </p>
                <p className="text-zinc-600 text-base leading-relaxed mb-8">
                  Осигуряваме директни цени от Денизли без посредници за хотели, къщи за гости,
                  общежития, СПА центрове и магазини за домашен текстил с бърза спедиция.
                </p>
              </>
            )}

            <div className="border-t border-zinc-200 pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              {MINI_GROUPS.map((g, i) => (
                <div key={i} className="border-l-2 border-[#C5A47E] pl-3">
                  <span className="block font-bold text-zinc-900">{g.title[lang]}</span>
                  <span className="text-zinc-500 text-xs">{g.sub[lang]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6">
            <div className="relative rounded-xl overflow-hidden border border-[#C5A47E]/35 bg-zinc-950 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] group">
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img
                  src="/images/textile-poster.jpg"
                  alt={IMAGE_BADGE_TITLE[lang]}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="bg-zinc-950 text-white px-4 sm:px-6 py-4 flex items-center justify-between gap-3 border-t border-[#C5A47E]/25">
                <div className="min-w-0">
                  <span className="block font-brand text-[11px] sm:text-xs tracking-[0.16em] sm:tracking-[0.2em] text-gold-metallic uppercase">
                    {IMAGE_BADGE_TITLE[lang]}
                  </span>
                  <span className="text-[11px] sm:text-xs text-zinc-300 block mt-0.5">
                    {IMAGE_BADGE_SUB[lang]}
                  </span>
                </div>
                <span className="text-xs text-[#D4AF7A] font-bold whitespace-nowrap shrink-0">
                  08:30 – 18:00
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* High-Contrast Luxury Editorial Metrics Ribbon */}
        <div className="mt-12 sm:mt-16 rounded-xl bg-zinc-950 border border-[#C5A47E]/35 p-5 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.25)]">
          {STATS_RIBBON.map((stat, idx) => (
            <div
              key={idx}
              className="border-l-2 border-[#D4AF7A] pl-4 flex flex-col justify-center"
            >
              <span className="font-luxury text-2xl xl:text-3xl font-bold text-gold-metallic leading-tight">
                {stat.value[lang]}
              </span>
              <span className="text-xs sm:text-sm text-zinc-300 mt-1 leading-snug">
                {stat.label[lang]}
              </span>
            </div>
          ))}
        </div>

        {/* 01 - 04 Architectural Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 pt-12 border-t border-zinc-200">
          {PILLARS.map((item) => (
            <div
              key={item.num}
              className="group p-6 rounded-xl bg-[#FAF8F5] border border-zinc-200/80 hover:border-[#C5A47E] hover:bg-white hover:shadow-[0_18px_40px_-15px_rgba(197,164,126,0.22)] transition-all duration-300"
            >
              <span className="block text-sm font-bold text-[#9A743E] mb-2.5">{item.num}</span>
              <h3 className="text-base font-bold text-zinc-900 mb-2">{item.title[lang]}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{item.desc[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutWorkshop;

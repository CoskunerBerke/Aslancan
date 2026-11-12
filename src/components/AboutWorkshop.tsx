import React from 'react';
import { Language, LocalizedText } from '../data/productsData';

interface AboutWorkshopProps {
  lang: Language;
}

const SECTION_BADGE: LocalizedText = {
  tr: 'ASLANCAN TEKSTİL DENİZLİ • 1. 2. 3. KALİTE ÜRETİM & TOPTAN MERKEZİ',
  en: 'ASLANCAN TEXTILE DENIZLI • 1ST, 2ND, 3RD QUALITY SUPPLY CENTER',
  de: 'ASLANCAN TEXTIL DENIZLI • 1., 2. & 3. QUALITÄT GROSSHANDELSZENTRUM',
  bg: 'АСЛАНДЖАН ТЕКСТИЛ ДЕНИЗЛИ • ЦЕНТЪР ЗА 1-ВО, 2-РО И 3-ТО КАЧЕСТВО',
};

const SECTION_HEADING: LocalizedText = {
  tr: 'Havlu, Bornoz, Nevresim Takımı, Paspas ve Sıvı Geçirmez Alezde 1. 2. 3. Kalite Doğrudan Tedarik',
  en: 'Direct Denizli Supply of 1st, 2nd & 3rd Quality Towels, Bathrobes, Bedding, Mats & Protectors',
  de: 'Direktlieferung aus Denizli: Handtücher, Bademäntel, Bettwäsche, Matten & Schoner in 1., 2. & 3. Qualität',
  bg: 'Директна доставка от Денизли: Кърпи, халати, спално бельо, постелки и протектори в 1, 2 и 3 качество',
};

const IMAGE_BADGE_TITLE: LocalizedText = {
  tr: 'HAVLU • BORNOZ • NEVRESİM • PASPAS • SIVI GEÇİRMEZ ALEZ',
  en: 'TOWELS • BATHROBES • BEDDING • BATH MATS • WATERPROOF PROTECTORS',
  de: 'HANDTÜCHER • BADEMÄNTEL • BETTWÄSCHE • BADEMATTEN • SCHONER',
  bg: 'КЪРПИ • ХАЛАТИ • СПАЛНО БЕЛЬО • ПОСТЕЛКИ • ПРОТЕКТОРИ',
};

const IMAGE_BADGE_SUB: LocalizedText = {
  tr: '1. Kalite, 2. Kalite ve 3. Kalite Toptan & Perakende Satış Merkezi',
  en: '1st, 2nd & 3rd Quality Wholesale and Retail Supply Center',
  de: 'Groß- und Einzelhandelszentrum für 1., 2. & 3. Qualität',
  bg: 'Център за търговия на едро и дребно с 1-во, 2-ро и 3-то качество',
};

const MINI_GROUPS: { title: LocalizedText; sub: LocalizedText }[] = [
  {
    title: {
      tr: 'Havlu & Otel Havlusu',
      en: 'Towels & Hotel Towels',
      de: 'Handtücher & Gewerbe',
      bg: 'Хавлиени и хотелски кърпи',
    },
    sub: {
      tr: '1. 2. 3. Kalite (50x90, 70x140, 90x150)',
      en: '1st, 2nd, 3rd Grade (50x90, 70x140, 90x150)',
      de: '1. 2. 3. Wahl (50x90, 70x140, 90x150)',
      bg: '1, 2, 3 качество (50x90, 70x140, 90x150)',
    },
  },
  {
    title: {
      tr: 'Bornoz Grubu',
      en: 'Bathrobe Group',
      de: 'Bademäntel',
      bg: 'Група халати',
    },
    sub: {
      tr: 'Yetişkin (S-XXL) & Çocuk 1. 2. 3. Kalite',
      en: 'Adult (S-XXL) & Kids 1st-3rd Grade',
      de: 'Erwachsene (S-XXL) & Kinder 1.-3. Wahl',
      bg: 'За възрастни и деца 1-3 качество',
    },
  },
  {
    title: {
      tr: 'Nevresim & Çarşaf',
      en: 'Bedding & Sheets',
      de: 'Bettwäsche & Laken',
      bg: 'Спално бельо и чаршафи',
    },
    sub: {
      tr: 'Çizgili Saten & Pamuk Ranforce',
      en: 'Striped Sateen & Cotton Ranforce',
      de: 'Streifensatin & Baumwoll-Ranforce',
      bg: 'Раиран сатен и памучен ранфорс',
    },
  },
  {
    title: {
      tr: 'Paspas, Alez & Stok',
      en: 'Mats, Protectors & Stock',
      de: 'Matten, Schoner & Kiloware',
      bg: 'Постелки, протектори и стока на кг',
    },
    sub: {
      tr: 'Banyo Paspası, Sıvı Geçirmez Alez, Kiloluk Havlu',
      en: 'Bath Mats, Waterproof Protectors, Per-Kg Towels',
      de: 'Badematten, Matratzenschoner, Kg-Handtücher',
      bg: 'Постелки, непромокаем протектор, кърпи на кг',
    },
  },
];

const STATS_RIBBON: { value: LocalizedText; label: LocalizedText }[] = [
  {
    value: { tr: '1. 2. 3. Kalite', en: '1st–3rd Grade', de: '1.–3. Qualität', bg: '1–3 Качество' },
    label: {
      tr: 'Her Bütçeye ve İşletmeye Uygun Havlu & Bornoz Seçeneği',
      en: 'Towel & Bathrobe Grades Tailored for Every Business Budget',
      de: 'Handtuch- & Bademantel-Qualitätsstufen für jedes Budget',
      bg: 'Класове кърпи и халати за всеки бизнес и бюджет',
    },
  },
  {
    value: { tr: '81 İl', en: '81 Provinces', de: '81 Provinzen', bg: '81 Области' },
    label: {
      tr: 'Büyük & Küçük Tüm İşletmelere Ambar ve Kargo Gönderimi',
      en: 'Nationwide Freight & Cargo Shipping to Large & Small Businesses',
      de: 'Landesweiter Speditions- & Paketversand für alle Betriebe',
      bg: 'Спедиция и карго доставка до големи и малки фирми',
    },
  },
  {
    value: { tr: '%100 Pamuk', en: '100% Cotton', de: '100 % Baumwolle', bg: '100% Памук' },
    label: {
      tr: 'Yüksek Su Emici Denizli Dokuması Havlu, Bornoz, Paspas & Nevresim',
      en: 'High-Absorbency Denizli Woven Towels, Bathrobes, Mats & Bedding',
      de: 'Saugstarke Denizli-Handtücher, Bademäntel, Badematten & Bettwäsche',
      bg: 'Високопопиващи кърпи, халати, постелки и спално бельо от Денизли',
    },
  },
  {
    value: { tr: '08:30–18:00', en: '08:30–18:00', de: '08:30–18:00', bg: '08:30–18:00' },
    label: {
      tr: 'Toptan & Perakende Hızlı Fiyat Teklifi ve Aynı Gün Sevkiyat',
      en: 'Fast Wholesale & Retail Quotes and Same-Day Dispatch',
      de: 'Schnelles Groß- & Einzelhandelsangebot & Täglicher Versand',
      bg: 'Бърза оферта на едро и дребно и експедиция в същия ден',
    },
  },
];

const PILLARS: { num: string; title: LocalizedText; desc: LocalizedText }[] = [
  {
    num: '01',
    title: {
      tr: '1. Kalite, 2. Kalite ve 3. Kalite Ürün Çeşitliliği',
      en: '1st, 2nd, and 3rd Quality Product Grades',
      de: '1., 2. und 3. Qualität im Sortiment',
      bg: 'Продукти в 1-во, 2-ро и 3-то качество',
    },
    desc: {
      tr: 'İster lüks vitrin ve tesisler için 1. sınıf kusursuz dokuma, ister uygun maliyet arayan işletme ve toptancılar için 2. kalite, 3. kalite ve kiloluk ihracat fazlası havlu & bornoz grupları sunuyoruz.',
      en: 'We stock flawless 1st-class weaving as well as cost-effective 2nd quality, 3rd quality, and per-kilo export-surplus towels and bathrobes for high-volume buyers.',
      de: 'Wir führen sowohl erstklassige 1. Wahl als auch preiswerte 2. und 3. Qualität sowie Exportüberschuss-Kiloware bei Handtüchern und Bademänteln.',
      bg: 'Предлагаме както първокласно 1-во качество, така и икономични 2-ро и 3-то качество и стокови кърпи и халати на килограм.',
    },
  },
  {
    num: '02',
    title: {
      tr: 'Havlu & Bornoz Satan Mağaza ve İşletmelere Tedarik',
      en: 'Supply for Towel & Bathrobe Retailers and Businesses',
      de: 'Belieferung von Handtuch- & Bademantelhändlern und Betrieben',
      bg: 'Доставка за магазини за кърпи и халати и предприятия',
    },
    desc: {
      tr: 'Havlu satan mağazalara, bornoz satan işletmelere, çeyiz/ev tekstili dükkanlarına, kuaför, spor salonu, spa, yurt ve otellere aracı komisyonu olmadan doğrudan Denizli çıkışı satış yapıyoruz.',
      en: 'Direct Denizli factory-gate pricing without middlemen for towel and bathrobe stores, home textile shops, salons, gyms, spas, dormitories, and hotels.',
      de: 'Direkte Herstellerpreise aus Denizli ohne Zwischenhändler für Handtuch- und Bademantelgeschäfte, Heimtextilshops, Salons, Spas, Wohnheime und Hotels.',
      bg: 'Директни цени от Денизли без посредници за магазини за кърпи и халати, салони, фитнеси, СПА центрове, общежития и хотели.',
    },
  },
  {
    num: '03',
    title: {
      tr: 'Nevresim Takımı, Banyo Paspası ve Sıvı Geçirmez Alez',
      en: 'Duvet Cover Sets, Bath Mats & Waterproof Protectors',
      de: 'Bettwäsche-Sets, Badematten & Wasserdichte Matratzenschoner',
      bg: 'Спални комплекти, постелки за баня и непромокаеми протектори',
    },
    desc: {
      tr: 'Havlu ve bornozun yanı sıra çizgili saten ve pamuk ranforce nevresim takımları, lastikli/düz çarşaflar, ayak izli Yunan bordürlü banyo paspasları ve sıvı geçirmez yatak alezlerini tek merkezden sağlıyoruz.',
      en: 'Alongside towels and bathrobes, we supply striped sateen and cotton ranforce duvet sets, fitted/flat sheets, footprint bath mats, and waterproof mattress protectors.',
      de: 'Neben Handtüchern und Bademänteln liefern wir Streifensatin- und Ranforce-Bettwäsche, Spannbettlaken, Fußmotiv-Badematten und wasserdichte Matratzenschoner.',
      bg: 'Освен кърпи и халати, доставяме раирани сатенени и памучни спални комплекти, чаршафи с ластик, постелки за баня и непромокаеми протектори.',
    },
  },
  {
    num: '04',
    title: {
      tr: 'Büyük ve Küçük Tüm İşletmelere 81 İlde Teslimat',
      en: 'Nationwide Delivery for Both Large & Small Businesses',
      de: 'Lieferung in alle 81 Provinzen für große & kleine Betriebe',
      bg: 'Доставка в 81 области за големи и малки клиенти',
    },
    desc: {
      tr: 'İster yüksek tonajlı toptan alım yapan büyük işletmelere, ister butik mağaza ve küçük işletmelere sipariş adedine göre perakende ve toptan esnekliğiyle 81 ile ambar/kargo sevkiyatı yapıyoruz.',
      en: 'Whether you are a high-volume wholesale buyer or a small business ordering in smaller quantities, we ship rapidly across all 81 provinces via freight and cargo.',
      de: 'Ob Großabnehmer oder kleinere Betriebe und Einzelbestellungen — wir versenden schnell und zuverlässig per Spedition und Paketdienst.',
      bg: 'Независимо дали сте голям търговец на едро или малък обект, изпращаме бързо чрез спедиторски и карго фирми.',
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
                  Denizli Merkezefendi Akçeşme’deki merkez deposundan Türkiye genelinde{' '}
                  <strong className="text-zinc-900">havlu satan mağazalara, bornoz satan işletmelere, büyük ve küçük ölçekli tüm ticari işletmelere, yurtlara ve otellere</strong>{' '}
                  doğrudan tekstil tedariği sağlamaktadır.
                </p>
                <p className="text-zinc-600 text-base leading-relaxed mb-8">
                  Stoklarımızda her ihtiyaca ve bütçeye uygun{' '}
                  <strong className="text-zinc-900">1. kalite, 2. kalite ve 3. kalite</strong> el/yüz ve banyo
                  havluları (50x90, 70x140, 90x150), otel havluları, yetişkin büyük bornoz ve çocuk bornozları,
                  çizgili saten ve pamuk ranforce nevresim takımları, ayak izli banyo paspasları, sıvı geçirmez
                  yatak koruyucu alezler ve ihracat fazlası kiloluk stok havlular yer almaktadır.
                </p>
              </>
            )}

            {lang === 'en' && (
              <>
                <p className="text-zinc-600 text-base leading-relaxed mb-4">
                  <strong className="text-zinc-900 font-semibold">Aslancan Textile</strong> (Yusuf Aslancan),
                  headquartered in Denizli, supplies{' '}
                  <strong className="text-zinc-900">towel retailers, bathrobe stores, wholesalers, large and small businesses, dormitories, and hotels</strong>{' '}
                  directly from our central warehouse.
                </p>
                <p className="text-zinc-600 text-base leading-relaxed mb-8">
                  Our inventory includes{' '}
                  <strong className="text-zinc-900">1st quality, 2nd quality, and 3rd quality</strong> hand and
                  bath towels (50x90, 70x140, 90x150), hotel towels, adult and kids bathrobes, striped sateen
                  and cotton ranforce duvet cover sets, footprint bath mats, waterproof mattress protectors,
                  and export-surplus per-kilo stock towels.
                </p>
              </>
            )}

            {lang === 'de' && (
              <>
                <p className="text-zinc-600 text-base leading-relaxed mb-4">
                  <strong className="text-zinc-900 font-semibold">Aslancan Textil</strong> (Yusuf Aslancan)
                  in Denizli beliefert{' '}
                  <strong className="text-zinc-900">Handtuch- und Bademantelhändler, Großhändler, große und kleine Betriebe, Wohnheime und Hotels</strong>{' '}
                  direkt ab Zentrallager.
                </p>
                <p className="text-zinc-600 text-base leading-relaxed mb-8">
                  Unser Sortiment umfasst{' '}
                  <strong className="text-zinc-900">1. Qualität, 2. Qualität und 3. Qualität</strong> bei
                  Hand- und Duschtüchern (50x90, 70x140, 90x150), Hotelhandtüchern, Erwachsenen- und
                  Kinderbademänteln, Streifensatin- und Ranforce-Bettwäsche, Badematten, wasserdichten
                  Matratzenschonern sowie Exportüberschuss-Handtüchern pro Kilogramm.
                </p>
              </>
            )}

            {lang === 'bg' && (
              <>
                <p className="text-zinc-600 text-base leading-relaxed mb-4">
                  <strong className="text-zinc-900 font-semibold">Асланджан Текстил</strong> (Юсуф Асланджан)
                  в Денизли снабдява директно{' '}
                  <strong className="text-zinc-900">магазини за кърпи и халати, търговци на едро, големи и малки фирми, общежития и хотели</strong>.
                </p>
                <p className="text-zinc-600 text-base leading-relaxed mb-8">
                  В нашия склад поддържаме наличности от{' '}
                  <strong className="text-zinc-900">1-во, 2-ро и 3-то качество</strong> хавлиени кърпи (50x90,
                  70x140, 90x150), хотелски кърпи, халати за възрастни и деца, раирани сатенени и памучни
                  спални комплекти, постелки за баня, непромокаеми протектори и стокови кърпи на килограм.
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

          {/* Right Column: Pure Textile Product Showcase (Towels, Bathrobes & Bath Mat) */}
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
                  <span className="block font-brand text-[11px] sm:text-xs tracking-[0.14em] sm:tracking-[0.18em] text-gold-metallic uppercase">
                    {IMAGE_BADGE_TITLE[lang]}
                  </span>
                  <span className="text-[11px] sm:text-xs text-zinc-300 block mt-0.5">
                    {IMAGE_BADGE_SUB[lang]}
                  </span>
                </div>
                <span className="text-xs text-[#D4AF7A] font-bold whitespace-nowrap shrink-0">
                  1. 2. 3. Kalite
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

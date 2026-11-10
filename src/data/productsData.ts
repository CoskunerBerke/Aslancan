export type Language = 'tr' | 'en' | 'de' | 'bg';

export interface LanguageOption {
  code: Language;
  shortLabel: string;
  nativeName: string;
  countryLabel: string;
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  {
    code: 'tr',
    shortLabel: 'TR',
    nativeName: 'Türkçe',
    countryLabel: 'Türkiye',
  },
  {
    code: 'en',
    shortLabel: 'EN',
    nativeName: 'English',
    countryLabel: 'International',
  },
  {
    code: 'de',
    shortLabel: 'DE',
    nativeName: 'Deutsch',
    countryLabel: 'Deutschland',
  },
  {
    code: 'bg',
    shortLabel: 'BG',
    nativeName: 'Български',
    countryLabel: 'България',
  },
];

export type LocalizedText = Record<Language, string>;

export interface ProductSubItem {
  label: LocalizedText;
  spec: LocalizedText;
}

export interface ProductGroupItem {
  num: string;
  id: string;
  categoryKey: 'otel' | 'ev' | 'bornoz' | 'stok';
  categoryName: LocalizedText;
  title: LocalizedText;
  desc: LocalizedText;
  image: string;
  images?: string[];
  subItems: ProductSubItem[];
}

export const CATEGORY_TABS: { key: string; label: LocalizedText }[] = [
  {
    key: 'all',
    label: {
      tr: 'Tüm Gruplar (06)',
      en: 'All Groups (06)',
      de: 'Alle Gruppen (06)',
      bg: 'Всички групи (06)',
    },
  },
  {
    key: 'otel',
    label: {
      tr: 'Otel Ürünleri',
      en: 'Hotel Textiles',
      de: 'Hoteltextilien',
      bg: 'Хотелски текстил',
    },
  },
  {
    key: 'ev',
    label: {
      tr: 'Ev Tekstili',
      en: 'Home Textiles',
      de: 'Heimtextilien',
      bg: 'Домашен текстил',
    },
  },
  {
    key: 'bornoz',
    label: {
      tr: 'Bornoz Grubu',
      en: 'Bathrobe Group',
      de: 'Bademäntel',
      bg: 'Халати за баня',
    },
  },
  {
    key: 'stok',
    label: {
      tr: 'Stok (Kiloluk) Ürünler',
      en: 'Stock (Per Kg) Towels',
      de: 'Lagerware (pro Kg)',
      bg: 'Стокови кърпи (на кг)',
    },
  },
];

export const productGroups: ProductGroupItem[] = [
  {
    num: '01',
    id: 'otel-havlusu-grubu',
    categoryKey: 'otel',
    categoryName: {
      tr: 'Otel Ürünleri',
      en: 'Hotel Textiles',
      de: 'Hoteltextilien',
      bg: 'Хотелски текстил',
    },
    title: {
      tr: 'Otel Havlusu Grubu',
      en: 'Hotel Towel Collection',
      de: 'Hotelhandtücher-Kollektion',
      bg: 'Колекция хотелски кърпи',
    },
    desc: {
      tr: 'Denizli dokuması %100 pamuk ipliğinden üretilen, endüstriyel yıkamaya dayanıklı çift dikişli kar beyazı otel, pansiyon, yurt ve spa havluları.',
      en: 'Woven in Denizli from 100% pure cotton yarn; double-stitched snow-white hotel, resort, dormitory, and spa towels built for industrial laundering.',
      de: 'In Denizli aus 100 % reinem Baumwollgarn gewebt; doppelt genähte, schneeweiße Hotel-, Pensions-, Wohnheim- und Spa-Handtücher für Industriewäsche.',
      bg: 'Изтъкани в Денизли от 100% чист памук; двойно подшити снежнобели кърпи за хотели, къщи за гости, общежития и СПА центрове, устойчиви на индустриално пране.',
    },
    image: '/images/otel-havlu.jpg',
    subItems: [
      {
        label: {
          tr: '50x90 cm Otel El & Yüz Havlusu',
          en: '50x90 cm Hotel Hand & Face Towel',
          de: '50x90 cm Hotel-Hand- & Gesichtstuch',
          bg: '50x90 см Хотелска кърпа за ръце и лице',
        },
        spec: {
          tr: '%100 Pamuk • Çift Dikişli',
          en: '100% Cotton • Double Stitched',
          de: '100 % Baumwolle • Doppuziernaht',
          bg: '100% Памук • Двоен шев',
        },
      },
      {
        label: {
          tr: '70x140 cm Otel Banyo Havlusu',
          en: '70x140 cm Hotel Bath Towel',
          de: '70x140 cm Hotel-Duschtuch',
          bg: '70x140 см Хотелска хавлиена кърпа за баня',
        },
        spec: {
          tr: '%100 Pamuk • Yüksek Emici',
          en: '100% Cotton • High Absorbency',
          de: '100 % Baumwolle • Hohe Saugkraft',
          bg: '100% Памук • Висока попиваемост',
        },
      },
      {
        label: {
          tr: '90x150 cm Otel Spa & Havuz Havlusu',
          en: '90x150 cm Hotel Spa & Pool Towel',
          de: '90x150 cm Hotel-Spa- & Pooltuch',
          bg: '90x150 см Хотелска кърпа за СПА и басейн',
        },
        spec: {
          tr: 'Battal Boy • Ağır Gramaj',
          en: 'Jumbo Size • Heavyweight',
          de: 'XXL-Format • Schwere Grammatur',
          bg: 'Голям размер • Висок грамаж',
        },
      },
      {
        label: {
          tr: '30x50 cm Otel Baş & Misafir Havlusu',
          en: '30x50 cm Hotel Guest Towel',
          de: '30x50 cm Hotel-Gästetuch',
          bg: '30x50 см Хотелска кърпа за гости',
        },
        spec: {
          tr: '%100 Pamuk • Otel Serisi',
          en: '100% Cotton • Hotel Series',
          de: '100 % Baumwolle • Hotelserie',
          bg: '100% Памук • Хотелска серия',
        },
      },
    ],
  },
  {
    num: '02',
    id: 'otel-nevresim-takimlari',
    categoryKey: 'otel',
    categoryName: {
      tr: 'Otel Ürünleri',
      en: 'Hotel Textiles',
      de: 'Hoteltextilien',
      bg: 'Хотелски текстил',
    },
    title: {
      tr: 'Otel Nevresim Takımları & Çarşaf Grubu',
      en: 'Hotel Duvet Cover Sets & Bed Sheets',
      de: 'Hotel-Bettwäsche-Sets & Bettlaken',
      bg: 'Хотелски спални комплекти и чаршафи',
    },
    desc: {
      tr: 'Oteller, butik konaklama tesisleri ve öğrenci yurtları için 83 tel ve 120 tel çizgili saten (yollu) ile düz pamuk ranforce nevresim takımları, çarşaf ve yastık kılıfları.',
      en: 'Striped sateen and plain cotton ranforce duvet cover sets, fitted/flat bed sheets, and pillowcases designed for hotels, boutique resorts, and dormitories.',
      de: 'Gestreifte Satin- und glatte Baumwoll-Ranforce-Bettwäschegarnituren, Spann-/Flachbettlaken und Kissenbezüge für Hotels, Pensionen und Wohnheime.',
      bg: 'Раирани сатенени и гладки памучни ранфорс спални комплекти, чаршафи с ластик/прави и калъфки за възглавници за хотели, къщи за гости и общежития.',
    },
    image: '/images/otel-nevresim.jpg',
    subItems: [
      {
        label: {
          tr: 'Tek Kişilik Çizgili Saten Otel Nevresim Takımı',
          en: 'Single Size Striped Sateen Hotel Bedding Set',
          de: 'Einzelbett-Streifensatin-Hotelbettwäsche',
          bg: 'Единичен раиран сатенен хотелски спален комплект',
        },
        spec: {
          tr: '83 / 120 Tel Yollu Saten',
          en: 'Striped Hotel Sateen',
          de: '83 / 120 Fäden Streifensatin',
          bg: '83 / 120 нишки раиран сатен',
        },
      },
      {
        label: {
          tr: 'Çift Kişilik Çizgili Saten Otel Nevresim Takımı',
          en: 'Double Size Striped Sateen Hotel Bedding Set',
          de: 'Doppelbett-Streifensatin-Hotelbettwäsche',
          bg: 'Двоен раиран сатенен хотелски спален комплект',
        },
        spec: {
          tr: '83 / 120 Tel Yollu Saten',
          en: 'Striped Hotel Sateen',
          de: '83 / 120 Fäden Streifensatin',
          bg: '83 / 120 нишки раиран сатен',
        },
      },
      {
        label: {
          tr: 'Düz Beyaz Pamuk Ranforce Otel Nevresim Seti',
          en: 'Plain White Cotton Ranforce Hotel Duvet Set',
          de: 'Reinweiße Baumwoll-Ranforce-Hotelbettwäsche',
          bg: 'Изчистен бял памучен ранфорс хотелски комплект',
        },
        spec: {
          tr: '%100 Pamuk Dokuma',
          en: '100% Woven Cotton',
          de: '100 % Baumwollgewebe',
          bg: '100% Тъкан памук',
        },
      },
      {
        label: {
          tr: 'Otel Tipi Düz / Lastikli Çarşaf & Yastık Kılıfı',
          en: 'Hotel Flat / Fitted Sheets & Pillowcases',
          de: 'Hotel-Flach-/Spannbettlaken & Kissenbezüge',
          bg: 'Хотелски прави чаршафи / с ластик и калъфки',
        },
        spec: {
          tr: 'Tüm Yatak Ölçüleri',
          en: 'All Mattress Sizes',
          de: 'Alle Matratzengrößen',
          bg: 'Всички размери матраци',
        },
      },
    ],
  },
  {
    num: '03',
    id: 'otel-paspas-ve-alez',
    categoryKey: 'otel',
    categoryName: {
      tr: 'Otel Ürünleri',
      en: 'Hotel Textiles',
      de: 'Hoteltextilien',
      bg: 'Хотелски текстил',
    },
    title: {
      tr: 'Otel Banyo Paspası & Sıvı Geçirmez Alez',
      en: 'Hotel Bath Mats & Waterproof Mattress Protectors',
      de: 'Hotel-Badematten & Wasserdichte Matratzenschoner',
      bg: 'Хотелски постелки за баня и непромокаеми протектори',
    },
    desc: {
      tr: 'Yüksek gramajlı ayak izi desenli Yunan bordürlü otel banyo paspasları ve yatak ömrünü koruyan nefes alabilen membran kaplamalı sıvı geçirmez yatak koruyucu alezler.',
      en: 'Heavyweight Greek-border footprint hotel bath mats and breathable membrane-coated waterproof mattress protectors that extend mattress life.',
      de: 'Schwere Hotel-Badematten mit Fußabdruck- und Mäander-Bordüre sowie atmungsaktive, membranbeschichtete wasserdichte Matratzenschoner.',
      bg: 'Плътни хотелски постелки за баня с гръцки бордюр и дишащи непромокаеми протектори за матраци със защитна мембрана.',
    },
    image: '/images/otel-paspas.jpg',
    subItems: [
      {
        label: {
          tr: '50x70 cm Ayak İzli Otel Banyo Paspası',
          en: '50x70 cm Footprint Hotel Bath Mat',
          de: '50x70 cm Hotel-Badematte mit Fußmotiv',
          bg: '50x70 см Хотелска постелка за баня със стъпки',
        },
        spec: {
          tr: 'Yunan Bordürlü • Ağır Gramaj',
          en: 'Greek Border • Heavyweight',
          de: 'Mäander-Bordüre • Schwer',
          bg: 'Гръцки бордюр • Висок грамаж',
        },
      },
      {
        label: {
          tr: 'Tek Kişilik Sıvı Geçirmez Yatak Alezi (90x200)',
          en: 'Single Waterproof Mattress Protector (90x200)',
          de: 'Einzelbett-Matratzenschoner Wasserdicht (90x200)',
          bg: 'Единичен непромокаем протектор за матрак (90x200)',
        },
        spec: {
          tr: 'Membranlı • Lastikli',
          en: 'Membrane • Fitted',
          de: 'Membran • Spannform',
          bg: 'С мембрана • С ластик',
        },
      },
      {
        label: {
          tr: 'Çift Kişilik Sıvı Geçirmez Yatak Alezi (160x200)',
          en: 'Double Waterproof Mattress Protector (160x200)',
          de: 'Doppelbett-Matratzenschoner Wasserdicht (160x200)',
          bg: 'Двоен непромокаем протектор за матрак (160x200)',
        },
        spec: {
          tr: 'Membranlı • Lastikli',
          en: 'Membrane • Fitted',
          de: 'Membran • Spannform',
          bg: 'С мембрана • С ластик',
        },
      },
      {
        label: {
          tr: 'Battal Boy Sıvı Geçirmez Yatak Alezi (180x200)',
          en: 'King Waterproof Mattress Protector (180x200)',
          de: 'King-Size-Matratzenschoner Wasserdicht (180x200)',
          bg: 'Голям непромокаем протектор за матрак (180x200)',
        },
        spec: {
          tr: 'Havlu / Mikrofiber Yüzey',
          en: 'Terry / Microfiber Top',
          de: 'Frottee- / Mikrofaser-Oberseite',
          bg: 'Хавлиена / Микрофибърна повърхност',
        },
      },
    ],
  },
  {
    num: '04',
    id: 'ev-tekstili-grubu',
    categoryKey: 'ev',
    categoryName: {
      tr: 'Ev Tekstili',
      en: 'Home Textiles',
      de: 'Heimtextilien',
      bg: 'Домашен текстил',
    },
    title: {
      tr: 'Ev Tekstili Grubu',
      en: 'Home Textile Collection',
      de: 'Heimtextilien-Kollektion',
      bg: 'Колекция домашен текстил',
    },
    desc: {
      tr: 'Mağazalar, çeyiz grupları ve bireysel ev kullanımı için %100 pamuk nevresim takımları, her ölçüye uygun lastikli/düz çarşaflar, yatak alezleri ve şık masa örtüleri.',
      en: '100% cotton duvet cover sets, fitted and flat sheets in all dimensions, mattress protectors, and woven tablecloths for retail stores and home use.',
      de: 'Bettwäschegarnituren aus 100 % Baumwolle, Spann- und Flachbettlaken in allen Größen, Matratzenschoner und gewebte Tischdecken für Handel und Zuhause.',
      bg: 'Спални комплекти от 100% памук, чаршафи с ластик и прави във всички размери, протектори за матраци и тъкани покривки за маса за магазини и дома.',
    },
    image: '/images/ev-tekstili.jpg',
    subItems: [
      {
        label: {
          tr: 'Ev Tipi Pamuk Nevresim Takımı',
          en: 'Home Cotton Duvet Cover Set',
          de: 'Heim-Baumwoll-Bettwäschegarnitur',
          bg: 'Домашен памучен спален комплект',
        },
        spec: {
          tr: 'Tek & Çift Kişilik',
          en: 'Single & Double Sizes',
          de: 'Einzel- & Doppelgröße',
          bg: 'Единични и двойни размери',
        },
      },
      {
        label: {
          tr: 'Penye & Pamuk Lastikli Çarşaf Takımı',
          en: 'Combed Cotton Fitted Bed Sheet Set',
          de: 'Kämmgarn- & Baumwoll-Spannbettlaken-Set',
          bg: 'Комплект пенирани и памучни чаршафи с ластик',
        },
        spec: {
          tr: 'Her Ölçü ve Renk',
          en: 'All Sizes & Colors',
          de: 'Alle Größen & Farben',
          bg: 'Всички размери и цветове',
        },
      },
      {
        label: {
          tr: 'Ev Tipi Kapitoneli & Sıvı Geçirmez Yatak Alezi',
          en: 'Quilted & Waterproof Home Mattress Protector',
          de: 'Gesteppter & Wasserdichter Matratzenschoner',
          bg: 'Капитониран и непромокаем протектор за матрак',
        },
        spec: {
          tr: 'Yatak Koruyucu',
          en: 'Mattress Guard',
          de: 'Matratzenschutz',
          bg: 'Защита за матрак',
        },
      },
      {
        label: {
          tr: 'Dokuma Leke Tutmaz Masa Örtüsü Grubu',
          en: 'Stain-Resistant Woven Tablecloth Group',
          de: 'Fleckabweisende Gewebte Tischdecken',
          bg: 'Тъкани петноустойчиви покривки за маса',
        },
        spec: {
          tr: 'Farklı Ebat Seçenekleri',
          en: 'Multiple Dimensions',
          de: 'Verschiedene Maße',
          bg: 'Различни размери',
        },
      },
    ],
  },
  {
    num: '05',
    id: 'bornoz-grubu',
    categoryKey: 'bornoz',
    categoryName: {
      tr: 'Bornoz Grubu',
      en: 'Bathrobe Group',
      de: 'Bademäntel',
      bg: 'Халати за баня',
    },
    title: {
      tr: 'Bornoz Grubu (Büyük & Çocuk Bornozu)',
      en: 'Bathrobe Group (Adult & Kids Bathrobes)',
      de: 'Bademantel-Gruppe (Erwachsenen- & Kinderbademäntel)',
      bg: 'Група халати (За възрастни и детски халати)',
    },
    desc: {
      tr: 'Yumuşak dokulu %100 Denizli pamuğundan üretilen her bedenden yetişkin büyük bornozlar ve tüm yaş aralıklarına uygun çocuk bornozları.',
      en: 'Soft-touch 100% Denizli cotton bathrobes in all adult sizes (S to XXL) and hooded/belted children’s bathrobes across all age groups.',
      de: 'Weiche Bademäntel aus 100 % Denizli-Baumwolle in allen Erwachsenengrößen (S bis XXL) sowie Kinderbademäntel mit Kapuze und Gürtel für alle Altersgruppen.',
      bg: 'Меки халати от 100% памук от Денизли във всички размери за възрастни (от S до XXL) и детски халати с качулка и колан за всички възрасти.',
    },
    image: '/images/bornoz-grubu.jpg',
    subItems: [
      {
        label: {
          tr: 'Yetişkin Büyük Bornoz — S / M Beden',
          en: 'Adult Bathrobe — S / M Sizes',
          de: 'Erwachsenen-Bademantel — Größe S / M',
          bg: 'Халат за възрастни — Размер S / M',
        },
        spec: {
          tr: '%100 Denizli Pamuğu',
          en: '100% Denizli Cotton',
          de: '100 % Denizli-Baumwolle',
          bg: '100% Памук Денизли',
        },
      },
      {
        label: {
          tr: 'Yetişkin Büyük Bornoz — L / XL Beden',
          en: 'Adult Bathrobe — L / XL Sizes',
          de: 'Erwachsenen-Bademantel — Größe L / XL',
          bg: 'Халат за възрастни — Размер L / XL',
        },
        spec: {
          tr: '%100 Denizli Pamuğu',
          en: '100% Denizli Cotton',
          de: '100 % Denizli-Baumwolle',
          bg: '100% Памук Денизли',
        },
      },
      {
        label: {
          tr: 'Yetişkin Büyük Bornoz — XXL Battal Beden',
          en: 'Adult Bathrobe — XXL Plus Size',
          de: 'Erwachsenen-Bademantel — Übergröße XXL',
          bg: 'Халат за възрастни — Голям размер XXL',
        },
        spec: {
          tr: 'Şal Yaka / Kimono',
          en: 'Shawl Collar / Kimono',
          de: 'Schalkragen / Kimono',
          bg: 'Шал яка / Кимоно',
        },
      },
      {
        label: {
          tr: 'Çocuk Bornozu — Tüm Yaş Grupları (2-12 Yaş)',
          en: 'Kids Bathrobe — All Age Groups (Ages 2-12)',
          de: 'Kinderbademantel — Alle Altersgruppen (2-12 Jahre)',
          bg: 'Детски халат — Всички възрасти (2-12 г.)',
        },
        spec: {
          tr: 'Kapüşonlu & Kemerli',
          en: 'Hooded & Belted',
          de: 'Mit Kapuze & Gürtel',
          bg: 'С качулка и колан',
        },
      },
    ],
  },
  {
    num: '06',
    id: 'stok-kiloluk-havlular',
    categoryKey: 'stok',
    categoryName: {
      tr: 'Stok Ürünleri (Kiloluk)',
      en: 'Stock Towels (Per Kg)',
      de: 'Lagerware (pro Kg)',
      bg: 'Стокови кърпи (на кг)',
    },
    title: {
      tr: 'Stok Ürünler: İhracat Fazlası Kiloluk Havlular',
      en: 'Stock Products: Export-Surplus Towels Sold by Weight (Kg)',
      de: 'Lagerware: Exportüberschuss-Handtücher nach Gewicht (Kg)',
      bg: 'Стокови продукти: Износни хавлиени кърпи на килограм',
    },
    desc: {
      tr: 'Denizli ihracat üretimlerinden ayrılan her boyuttan tartı / kilo bazlı yüksek fiyat avantajlı toptan ve perakende paketli stok havlu grupları.',
      en: 'High-value wholesale and retail export-surplus packaged cotton towels in all dimensions sold by weight (per kg) directly from Denizli.',
      de: 'Preisvorteilhafte Groß- und Einzelhandels-Exportüberschusshandtücher in allen Größen, verpackt und nach Gewicht (pro Kg) direkt aus Denizli.',
      bg: 'Изгодни на едро и дребно пакетирани памучни кърпи от износен резерв във всички размери, продавани на килограм директно от Денизли.',
    },
    image: '/images/stok-havlu-1.jpg',
    images: [
      '/images/stok-havlu-1.jpg',
      '/images/stok-havlu-2.jpg',
      '/images/stok-havlu-3.jpg',
    ],
    subItems: [
      {
        label: {
          tr: '50x90 cm İhracat Fazlası Kiloluk El & Yüz Havlusu',
          en: '50x90 cm Export-Surplus Hand Towels (Per Kg)',
          de: '50x90 cm Exportüberschuss-Handtücher (pro Kg)',
          bg: '50x90 см Износни кърпи за ръце и лице (на кг)',
        },
        spec: {
          tr: 'Tartı / Kilo Bazlı',
          en: 'Sold by Weight (Kg)',
          de: 'Verkauf nach Gewicht (Kg)',
          bg: 'Продажба на килограм',
        },
      },
      {
        label: {
          tr: '70x140 cm İhracat Fazlası Kiloluk Banyo Havlusu',
          en: '70x140 cm Export-Surplus Bath Towels (Per Kg)',
          de: '70x140 cm Exportüberschuss-Duschtücher (pro Kg)',
          bg: '70x140 см Износни кърпи за баня (на кг)',
        },
        spec: {
          tr: 'Tartı / Kilo Bazlı',
          en: 'Sold by Weight (Kg)',
          de: 'Verkauf nach Gewicht (Kg)',
          bg: 'Продажба на килограм',
        },
      },
      {
        label: {
          tr: '90x150 cm İhracat Fazlası Kiloluk Battal Havlu',
          en: '90x150 cm Export-Surplus Jumbo Towels (Per Kg)',
          de: '90x150 cm Exportüberschuss-Badetücher XXL (pro Kg)',
          bg: '90x150 см Износни големи кърпи (на кг)',
        },
        spec: {
          tr: 'Tartı / Kilo Bazlı',
          en: 'Sold by Weight (Kg)',
          de: 'Verkauf nach Gewicht (Kg)',
          bg: 'Продажба на килограм',
        },
      },
      {
        label: {
          tr: 'Karışık Renk & Bordürlü İhracat Fazlası Stok Havlu',
          en: 'Assorted Color & Bordered Export-Surplus Stock Towels',
          de: 'Gemischte Farben & Bordüren Export-Lagerhandtücher',
          bg: 'Микс цветове и бордюри стокови кърпи за износ',
        },
        spec: {
          tr: 'Çuval & Koli Toptan',
          en: 'Bale & Box Wholesale',
          de: 'Ballen- & Karton-Großhandel',
          bg: 'На едро в чували и кашони',
        },
      },
    ],
  },
];

export const stokExpandedCards: ProductGroupItem[] = [
  {
    num: '06-A',
    id: 'stok-kiloluk-havlu-paketli',
    categoryKey: 'stok',
    categoryName: {
      tr: 'Stok Ürünleri (Kiloluk)',
      en: 'Stock Towels (Per Kg)',
      de: 'Lagerware (pro Kg)',
      bg: 'Стокови кърпи (на кг)',
    },
    title: {
      tr: 'İhracat Fazlası Karışık Renk Paketli Stok Havlular',
      en: 'Export-Surplus Assorted Color Packaged Stock Towels',
      de: 'Verpackte Exportüberschuss-Handtücher in Mischfarben',
      bg: 'Пакетирани стокови кърпи микс цветове от износен резерв',
    },
    desc: {
      tr: 'Denizli ihracat üretimlerinden ayrılan, şeffaf ambalajlı, yüksek su emici gri, antrasit, turkuaz, krem ve mercan tonlarında kiloluk stok havlular.',
      en: 'Packaged export-surplus cotton towels in grey, anthracite, turquoise, cream, and coral tones sold by weight (per kg).',
      de: 'Einzeln verpackte, saugstarke Baumwollhandtücher in Grau, Anthrazit, Türkis, Creme und Koralle nach Gewicht (pro Kg).',
      bg: 'Прозрачно пакетирани високопопиващи памучни кърпи в сиво, антрацит, тюркоаз, кремаво и коралово, продавани на килограм.',
    },
    image: '/images/stok-havlu-1.jpg',
    images: ['/images/stok-havlu-1.jpg', '/images/stok-havlu-2.jpg', '/images/stok-havlu-3.jpg'],
    subItems: [
      {
        label: {
          tr: '50x90 cm Karışık Renk Paketli Stok Havlu',
          en: '50x90 cm Assorted Color Packaged Stock Towel',
          de: '50x90 cm Verpacktes Lagerhandtuch (Mischfarben)',
          bg: '50x90 см Пакетирана стокова кърпа (микс цветове)',
        },
        spec: {
          tr: 'Kiloluk / Adetli',
          en: 'Per Kg / Piece',
          de: 'Pro Kg / Stück',
          bg: 'На кг / На брой',
        },
      },
      {
        label: {
          tr: '70x140 cm Karışık Renk Banyo Boy Stok Havlu',
          en: '70x140 cm Assorted Color Bath Stock Towel',
          de: '70x140 cm Duschtuch Lagerware (Mischfarben)',
          bg: '70x140 см Хавлиена стокова кърпа за баня',
        },
        spec: {
          tr: 'Kiloluk / Adetli',
          en: 'Per Kg / Piece',
          de: 'Pro Kg / Stück',
          bg: 'На кг / На брой',
        },
      },
      {
        label: {
          tr: '90x150 cm Battal Boy Renkli Stok Havlu',
          en: '90x150 cm Jumbo Colored Stock Towel',
          de: '90x150 cm XXL Farb-Badetuch Lagerware',
          bg: '90x150 см Голяма цветна стокова кърпа',
        },
        spec: {
          tr: 'Tartı Bazlı Toptan',
          en: 'Wholesale by Weight',
          de: 'Großhandel nach Gewicht',
          bg: 'На едро на килограм',
        },
      },
    ],
  },
  {
    num: '06-B',
    id: 'stok-kiloluk-havlu-kabartmali',
    categoryKey: 'stok',
    categoryName: {
      tr: 'Stok Ürünleri (Kiloluk)',
      en: 'Stock Towels (Per Kg)',
      de: 'Lagerware (pro Kg)',
      bg: 'Стокови кърпи (на кг)',
    },
    title: {
      tr: 'İhracat Fazlası Kabartma & Nakışlı Lüks Stok Havlular',
      en: 'Export-Surplus Embossed & Embroidered Stock Towels',
      de: 'Geprägte & Bestickte Export-Luxushandtücher',
      bg: 'Релефни и бродирани луксозни стокови кърпи за износ',
    },
    desc: {
      tr: 'Avrupa ihracat serisi etiketli ve ambalajlı, yüksek gramajlı kadife/bukle dokulu kabartma desenli birinci sınıf kiloluk stok havlular.',
      en: 'European export-series tagged and packaged heavyweight embossed terry cotton stock towels sold by weight.',
      de: 'Für den europäischen Export etikettierte und verpackte, schwere Frottee-Handtücher mit Reliefprägung nach Gewicht.',
      bg: 'Етикетирани и пакетирани за европейски износ плътни хавлиени кърпи с релефна шарка, продавани на килограм.',
    },
    image: '/images/stok-havlu-2.jpg',
    images: ['/images/stok-havlu-2.jpg', '/images/stok-havlu-1.jpg', '/images/stok-havlu-3.jpg'],
    subItems: [
      {
        label: {
          tr: '70x140 cm İhracat Serisi Kabartma Desenli Banyo Havlusu',
          en: '70x140 cm Export-Series Embossed Bath Towel',
          de: '70x140 cm Exportserie Duschtuch mit Prägung',
          bg: '70x140 см Релефна кърпа за баня (износна серия)',
        },
        spec: {
          tr: 'Ağır Gramaj • Paketli',
          en: 'Heavyweight • Packaged',
          de: 'Schwere Qualität • Verpackt',
          bg: 'Висок грамаж • Пакетирана',
        },
      },
      {
        label: {
          tr: '50x90 cm İhracat Serisi Kabartma El & Yüz Havlusu',
          en: '50x90 cm Export-Series Embossed Hand Towel',
          de: '50x90 cm Exportserie Handtuch mit Prägung',
          bg: '50x90 см Релефна кърпа за ръце и лице',
        },
        spec: {
          tr: '%100 Pamuk • Paketli',
          en: '100% Cotton • Packaged',
          de: '100 % Baumwolle • Verpackt',
          bg: '100% Памук • Пакетирана',
        },
      },
      {
        label: {
          tr: 'Karışık Renk & Ebat İhracat Fazlası Koli/Çuval',
          en: 'Mixed Color & Size Export-Surplus Bale/Box',
          de: 'Gemischte Farben & Größen im Karton/Ballen',
          bg: 'Микс цветове и размери в кашон/чувал',
        },
        spec: {
          tr: 'Kiloluk Toptan Satış',
          en: 'Per-Kg Wholesale',
          de: 'Großhandel pro Kg',
          bg: 'Продажба на едро на кг',
        },
      },
    ],
  },
  {
    num: '06-C',
    id: 'stok-kiloluk-havlu-bordurlu',
    categoryKey: 'stok',
    categoryName: {
      tr: 'Stok Ürünleri (Kiloluk)',
      en: 'Stock Towels (Per Kg)',
      de: 'Lagerware (pro Kg)',
      bg: 'Стокови кърпи (на кг)',
    },
    title: {
      tr: 'İhracat Fazlası Jakar Bordürlü & Çizgili Stok Havlular',
      en: 'Export-Surplus Jacquard Bordered & Striped Stock Towels',
      de: 'Jacquard-Bordüren & Gestreifte Export-Lagerhandtücher',
      bg: 'Стокови кърпи с жакардов бордюр и райе за износ',
    },
    desc: {
      tr: 'Özel dokuma jakar bordürlü krem, yeşil, petrol mavisi ve füme renk seçenekleriyle mağaza ve toptan satışa hazır paketli kiloluk havlular.',
      en: 'Custom jacquard-bordered cream, green, teal, and charcoal packaged stock towels ready for retail stores and wholesale.',
      de: 'Verpackte Lagerhandtücher mit gewebter Jacquard-Bordüre in Creme, Grün, Petrol und Anthrazit für Einzel- und Großhandel.',
      bg: 'Пакетирани кърпи на килограм със специален жакардов бордюр в кремаво, зелено, петролено и опушено сиво за магазини и търговия на едро.',
    },
    image: '/images/stok-havlu-3.jpg',
    images: ['/images/stok-havlu-3.jpg', '/images/stok-havlu-1.jpg', '/images/stok-havlu-2.jpg'],
    subItems: [
      {
        label: {
          tr: '50x90 & 70x140 cm Jakar Bordürlü İhracat Fazlası Havlu',
          en: '50x90 & 70x140 cm Jacquard Bordered Export Towel',
          de: '50x90 & 70x140 cm Exporthandtuch mit Jacquard-Bordüre',
          bg: '50x90 и 70x140 см Износна кърпа с жакардов бордюр',
        },
        spec: {
          tr: 'Paketli • Kiloluk',
          en: 'Packaged • Per Kg',
          de: 'Verpackt • Pro Kg',
          bg: 'Пакетирана • На кг',
        },
      },
      {
        label: {
          tr: 'Beyaz & Krem Otel/Ev Tipi İhracat Fazlası Stok Havlu',
          en: 'White & Cream Hotel/Home Export Stock Towel',
          de: 'Weiß & Creme Hotel-/Heim-Exportlagerhandtuch',
          bg: 'Бели и кремави хотелски/домашни стокови кърпи',
        },
        spec: {
          tr: 'Yüksek Emici Pamuk',
          en: 'High-Absorbency Cotton',
          de: 'Saugstarke Baumwolle',
          bg: 'Високопопиващ памук',
        },
      },
      {
        label: {
          tr: 'Tüm Boyutlar Karışık Toptan Kiloluk Havlu Grubu',
          en: 'All Sizes Mixed Wholesale Per-Kg Towel Group',
          de: 'Alle Größen Gemischt Großhandel pro Kg',
          bg: 'Всички размери микс на едро на килограм',
        },
        spec: {
          tr: '81 İlde Ambar Teslim',
          en: '81-Province Freight',
          de: 'Speditionsversand in 81 Provinzen',
          bg: 'Доставка във всички 81 области',
        },
      },
    ],
  },
];

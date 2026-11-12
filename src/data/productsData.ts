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
  categoryKey: 'havlu' | 'bornoz' | 'nevresim' | 'stok';
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
      tr: 'Tüm Ürünler (06)',
      en: 'All Products (06)',
      de: 'Alle Produkte (06)',
      bg: 'Всички продукти (06)',
    },
  },
  {
    key: 'havlu',
    label: {
      tr: 'Havlu Grubu (1. 2. 3. Kalite)',
      en: 'Towels (1st, 2nd, 3rd Grade)',
      de: 'Handtücher (1. 2. 3. Wahl)',
      bg: 'Кърпи (1-во, 2-ро, 3-то качество)',
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
    key: 'nevresim',
    label: {
      tr: 'Nevresim, Paspas & Alez',
      en: 'Bedding, Mats & Protectors',
      de: 'Bettwäsche, Matten & Schoner',
      bg: 'Спално бельо, постелки и протектори',
    },
  },
  {
    key: 'stok',
    label: {
      tr: 'Stok (Kiloluk) Havlular',
      en: 'Stock (Per Kg) Towels',
      de: 'Lagerhandtücher (pro Kg)',
      bg: 'Стокови кърпи (на кг)',
    },
  },
];

export const productGroups: ProductGroupItem[] = [
  {
    num: '01',
    id: 'havlu-grubu',
    categoryKey: 'havlu',
    categoryName: {
      tr: 'Havlu Grubu • 1. 2. 3. Kalite',
      en: 'Towel Group • 1st, 2nd, 3rd Grade',
      de: 'Handtücher • 1. 2. 3. Qualität',
      bg: 'Група кърпи • 1, 2, 3 качество',
    },
    title: {
      tr: 'Havlu & Otel Havlusu Grubu (1. 2. 3. Kalite)',
      en: 'Towel & Commercial Towel Collection (1st, 2nd, 3rd Quality)',
      de: 'Handtuch- & Gewerbehandtuch-Kollektion (1. 2. 3. Qualität)',
      bg: 'Колекция хавлиени кърпи (1-во, 2-ро и 3-то качество)',
    },
    desc: {
      tr: 'Havlu satan mağazalar, toptancılar, büyük ve küçük işletmeler ile konaklama tesisleri için Denizli dokuması %100 pamuk 1. kalite, 2. kalite ve 3. kalite el, yüz, banyo ve otel havluları.',
      en: 'Woven in Denizli from 100% pure cotton; 1st, 2nd, and 3rd quality hand, face, bath, and commercial towels for towel retailers, wholesalers, businesses, and hospitality.',
      de: 'In Denizli aus 100 % Baumwolle gewebt; Hand-, Dusch- und Gewerbehandtücher in 1., 2. und 3. Qualität für Fachhändler, Großhändler sowie große und kleine Betriebe.',
      bg: 'Изтъкани в Денизли от 100% памук; хавлиени кърпи за ръце, лице и баня в 1-во, 2-ро и 3-то качество за магазини, търговци на едро, големи и малки обекти.',
    },
    image: '/images/otel-havlu.jpg',
    subItems: [
      {
        label: {
          tr: '50x90 cm El & Yüz Havlusu (1. / 2. / 3. Kalite)',
          en: '50x90 cm Hand & Face Towel (1st / 2nd / 3rd Quality)',
          de: '50x90 cm Hand- & Gesichtstuch (1. / 2. / 3. Qualität)',
          bg: '50x90 см Кърпа за ръце и лице (1 / 2 / 3 качество)',
        },
        spec: {
          tr: '%100 Pamuk • Çift Dikişli',
          en: '100% Cotton • Double Stitched',
          de: '100 % Baumwolle • Doppelnaht',
          bg: '100% Памук • Двоен шев',
        },
      },
      {
        label: {
          tr: '70x140 cm Banyo & Duş Havlusu (1. / 2. / 3. Kalite)',
          en: '70x140 cm Bath & Shower Towel (1st / 2nd / 3rd Quality)',
          de: '70x140 cm Dusch- & Badetuch (1. / 2. / 3. Qualität)',
          bg: '70x140 см Хавлиена кърпа за баня (1 / 2 / 3 качество)',
        },
        spec: {
          tr: '%100 Pamuk • Yüksek Su Emici',
          en: '100% Cotton • High Absorbency',
          de: '100 % Baumwolle • Saugstark',
          bg: '100% Памук • Висока попиваемост',
        },
      },
      {
        label: {
          tr: '90x150 cm Battal Boy Spa, Havuz & Otel Havlusu',
          en: '90x150 cm Jumbo Spa, Pool & Commercial Towel',
          de: '90x150 cm XXL-Spa-, Pool- & Gewerbehandtuch',
          bg: '90x150 см Голяма кърпа за СПА и басейн',
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
          tr: '30x50 cm Baş, Kuaför & Misafir Havlusu',
          en: '30x50 cm Guest & Salon Towel',
          de: '30x50 cm Gäste- & Salonhandtuch',
          bg: '30x50 см Кърпа за гости и салони',
        },
        spec: {
          tr: '1. 2. 3. Kalite • Toptan & Adetli',
          en: '1st, 2nd, 3rd Grade • Wholesale & Retail',
          de: '1. 2. 3. Wahl • Groß- & Einzelhandel',
          bg: '1, 2, 3 качество • На едро и дребно',
        },
      },
    ],
  },
  {
    num: '02',
    id: 'bornoz-grubu',
    categoryKey: 'bornoz',
    categoryName: {
      tr: 'Bornoz Grubu • 1. 2. 3. Kalite',
      en: 'Bathrobe Group • 1st, 2nd, 3rd Grade',
      de: 'Bademäntel • 1. 2. 3. Qualität',
      bg: 'Група халати • 1, 2, 3 качество',
    },
    title: {
      tr: 'Bornoz Grubu (Yetişkin & Çocuk • 1. 2. 3. Kalite)',
      en: 'Bathrobe Collection (Adult & Kids • 1st, 2nd, 3rd Quality)',
      de: 'Bademantel-Kollektion (Erwachsene & Kinder • 1. 2. 3. Qualität)',
      bg: 'Колекция халати за баня (Възрастни и деца • 1, 2, 3 качество)',
    },
    desc: {
      tr: 'Bornoz satan mağazalar, toptancılar, işletmeler, spa merkezleri ve oteller için %100 Denizli pamuğundan üretilen 1. kalite, 2. kalite ve 3. kalite yetişkin büyük bornozlar ve çocuk bornozları.',
      en: '100% Denizli cotton bathrobes in 1st, 2nd, and 3rd quality grades across all adult sizes (S to XXL) and children’s age groups for stores, wholesalers, and businesses.',
      de: 'Bademäntel aus 100 % Denizli-Baumwolle in 1., 2. und 3. Qualität in allen Erwachsenengrößen (S bis XXL) sowie Kinderbademäntel für Händler und Betriebe.',
      bg: 'Халати от 100% памук от Денизли в 1-во, 2-ро и 3-то качество във всички размери за възрастни (S до XXL) и детски халати за магазини и търговци.',
    },
    image: '/images/bornoz-grubu.jpg',
    subItems: [
      {
        label: {
          tr: 'Yetişkin Büyük Bornoz — S / M Beden (1. 2. 3. Kalite)',
          en: 'Adult Bathrobe — S / M Sizes (1st, 2nd, 3rd Quality)',
          de: 'Erwachsenen-Bademantel — S / M (1. 2. 3. Qualität)',
          bg: 'Халат за възрастни — S / M (1, 2, 3 качество)',
        },
        spec: {
          tr: '%100 Denizli Pamuğu • Bukle / Kadife',
          en: '100% Denizli Cotton • Terry / Velour',
          de: '100 % Denizli-Baumwolle • Frottee',
          bg: '100% Памук Денизли • Хавлия',
        },
      },
      {
        label: {
          tr: 'Yetişkin Büyük Bornoz — L / XL Beden (1. 2. 3. Kalite)',
          en: 'Adult Bathrobe — L / XL Sizes (1st, 2nd, 3rd Quality)',
          de: 'Erwachsenen-Bademantel — L / XL (1. 2. 3. Qualität)',
          bg: 'Халат за възрастни — L / XL (1, 2, 3 качество)',
        },
        spec: {
          tr: 'Şal Yaka & Kimono Seçenekli',
          en: 'Shawl Collar & Kimono Options',
          de: 'Schalkragen & Kimono',
          bg: 'Шал яка и кимоно',
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
          tr: 'Yüksek Emici • Ağır Gramaj',
          en: 'High Absorbency • Heavyweight',
          de: 'Hohe Saugkraft • Schwer',
          bg: 'Висока попиваемост • Плътен',
        },
      },
      {
        label: {
          tr: 'Çocuk Bornozu — Tüm Yaş Grupları (2–14 Yaş)',
          en: 'Kids Bathrobe — All Age Groups (Ages 2–14)',
          de: 'Kinderbademantel — Alle Altersgruppen (2–14 Jahre)',
          bg: 'Детски халат — Всички възрасти (2–14 г.)',
        },
        spec: {
          tr: 'Kapüşonlu & Kemerli • Renkli & Beyaz',
          en: 'Hooded & Belted • White & Colored',
          de: 'Mit Kapuze & Gürtel • Weiß & Farbig',
          bg: 'С качулка и колан • Бели и цветни',
        },
      },
    ],
  },
  {
    num: '03',
    id: 'nevresim-takimlari-grubu',
    categoryKey: 'nevresim',
    categoryName: {
      tr: 'Nevresim & Çarşaf • 1. 2. 3. Kalite',
      en: 'Bedding & Sheets • 1st, 2nd, 3rd Grade',
      de: 'Bettwäsche & Laken • 1. 2. 3. Qualität',
      bg: 'Спално бельо и чаршафи • 1, 2, 3 качество',
    },
    title: {
      tr: 'Nevresim Takımları & Lastikli / Düz Çarşaf Grubu',
      en: 'Duvet Cover Sets & Fitted / Flat Bed Sheets',
      de: 'Bettwäsche-Sets & Spann- / Flachbettlaken',
      bg: 'Спални комплекти и чаршафи с ластик / прави',
    },
    desc: {
      tr: 'Mağazalar, yurtlar, hastaneler, konaklama işletmeleri ve toptan alıcılar için 83 tel / 120 tel çizgili saten ve %100 pamuk ranforce 1. 2. 3. kalite nevresim takımları, çarşaf ve yastık kılıfları.',
      en: '83-thread and 120-thread striped sateen and 100% cotton ranforce duvet cover sets, fitted/flat bed sheets, and pillowcases in 1st, 2nd, and 3rd quality grades.',
      de: 'Streifensatin (83/120 Fäden) und 100 % Baumwoll-Ranforce-Bettwäschegarnituren, Spann-/Flachbettlaken und Kissenbezüge in 1., 2. und 3. Qualität.',
      bg: 'Раирани сатенени (83/120 нишки) и 100% памучни ранфорс спални комплекти, чаршафи с ластик/прави и калъфки в 1-во, 2-ро и 3-то качество.',
    },
    image: '/images/otel-nevresim.jpg',
    subItems: [
      {
        label: {
          tr: 'Tek Kişilik Çizgili Saten & Ranforce Nevresim Takımı',
          en: 'Single Size Striped Sateen & Ranforce Bedding Set',
          de: 'Einzelbett-Streifensatin- & Ranforce-Bettwäsche',
          bg: 'Единичен раиран сатенен и ранфорс спален комплект',
        },
        spec: {
          tr: '83 / 120 Tel Saten & Pamuk',
          en: '83 / 120 Thread Sateen & Cotton',
          de: '83 / 120 Fäden Satin & Baumwolle',
          bg: '83 / 120 нишки сатен и памук',
        },
      },
      {
        label: {
          tr: 'Çift Kişilik Çizgili Saten & Ranforce Nevresim Takımı',
          en: 'Double Size Striped Sateen & Ranforce Bedding Set',
          de: 'Doppelbett-Streifensatin- & Ranforce-Bettwäsche',
          bg: 'Двоен раиран сатенен и ранфорс спален комплект',
        },
        spec: {
          tr: '1. 2. 3. Kalite Seçenekli',
          en: '1st, 2nd, 3rd Quality Options',
          de: '1., 2. & 3. Qualität verfügbar',
          bg: '1-во, 2-ро и 3-то качество',
        },
      },
      {
        label: {
          tr: 'Lastikli & Düz Çarşaf Çeşitleri (Penye / Ranforce / Saten)',
          en: 'Fitted & Flat Bed Sheets (Combed Cotton / Ranforce / Sateen)',
          de: 'Spann- & Flachbettlaken (Jersey / Ranforce / Satin)',
          bg: 'Чаршафи с ластик и прави (Пениран памук / Ранфорс)',
        },
        spec: {
          tr: 'Tüm Yatak Ölçüleri',
          en: 'All Mattress Sizes',
          de: 'Alle Matratzengrößen',
          bg: 'Всички размери матраци',
        },
      },
      {
        label: {
          tr: 'Toptan & Perakende Yastık Kılıfı (50x70 cm)',
          en: 'Wholesale & Retail Pillowcases (50x70 cm)',
          de: 'Groß- & Einzelhandel Kissenbezüge (50x70 cm)',
          bg: 'Калъфки за възглавници на едро и дребно (50x70 см)',
        },
        spec: {
          tr: '%100 Pamuk Dokuma',
          en: '100% Woven Cotton',
          de: '100 % Baumwollgewebe',
          bg: '100% Тъкан памук',
        },
      },
    ],
  },
  {
    num: '04',
    id: 'paspas-ve-sivi-gecirmez-alez',
    categoryKey: 'nevresim',
    categoryName: {
      tr: 'Banyo Paspası & Sıvı Geçirmez Alez',
      en: 'Bath Mats & Waterproof Protectors',
      de: 'Badematten & Matratzenschoner',
      bg: 'Постелки за баня и непромокаеми протектори',
    },
    title: {
      tr: 'Ayak İzli Banyo Paspası & Sıvı Geçirmez Yatak Alezi',
      en: 'Footprint Bath Mats & Waterproof Mattress Protectors',
      de: 'Badematten mit Fußmotiv & Wasserdichte Matratzenschoner',
      bg: 'Постелки за баня и непромокаеми протектори за матраци',
    },
    desc: {
      tr: 'Yüksek gramajlı ayak izi desenli Yunan bordürlü %100 pamuk banyo paspasları ve nefes alabilen membran kaplamalı sıvı geçirmez yatak koruyucu alezlerde 1. 2. 3. kalite toptan/perakende satış.',
      en: 'Heavyweight Greek-border footprint cotton bath mats and breathable membrane-coated waterproof mattress protectors in 1st, 2nd, and 3rd quality grades.',
      de: 'Schwere Baumwoll-Badematten mit Fußabdruck- und Mäander-Bordüre sowie atmungsaktive, wasserdichte Membran-Matratzenschoner in 1., 2. und 3. Qualität.',
      bg: 'Плътни памучни постелки за баня с гръцки бордюр и дишащи непромокаеми протектори за матраци с мембрана в 1-во, 2-ро и 3-то качество.',
    },
    image: '/images/otel-paspas.jpg',
    subItems: [
      {
        label: {
          tr: '50x70 cm Ayak İzli Yunan Bordürlü Banyo Paspası',
          en: '50x70 cm Greek-Border Footprint Bath Mat',
          de: '50x70 cm Badematte mit Fußmotiv & Mäander-Bordüre',
          bg: '50x70 см Постелка за баня със стъпки и гръцки бордюр',
        },
        spec: {
          tr: '1. 2. 3. Kalite • Ağır Gramaj',
          en: '1st, 2nd, 3rd Grade • Heavyweight',
          de: '1. 2. 3. Wahl • Schwere Grammatur',
          bg: '1, 2, 3 качество • Висок грамаж',
        },
      },
      {
        label: {
          tr: 'Tek Kişilik Sıvı Geçirmez Yatak Alezi (90x200 / 100x200)',
          en: 'Single Waterproof Mattress Protector (90x200 / 100x200)',
          de: 'Einzelbett-Matratzenschoner Wasserdicht (90x200 / 100x200)',
          bg: 'Единичен непромокаем протектор за матрак (90x200 / 100x200)',
        },
        spec: {
          tr: 'Membranlı • Lastikli Köşe',
          en: 'Membrane • Fitted Corners',
          de: 'Membran • Eckgummis',
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
          tr: 'Havlu / Mikrofiber / Kapitone',
          en: 'Terry / Microfiber / Quilted',
          de: 'Frottee / Mikrofaser / Gesteppt',
          bg: 'Хавлия / Микрофибър / Капитониран',
        },
      },
      {
        label: {
          tr: 'Battal Boy Sıvı Geçirmez Yatak Alezi (180x200 / 200x200)',
          en: 'King Waterproof Mattress Protector (180x200 / 200x200)',
          de: 'King-Size-Matratzenschoner Wasserdicht (180x200 / 200x200)',
          bg: 'Голям непромокаем протектор за матрак (180x200 / 200x200)',
        },
        spec: {
          tr: 'Sıvı Geçirmez • Nefes Alır',
          en: '100% Waterproof • Breathable',
          de: 'Wasserdicht • Atmungsaktiv',
          bg: 'Непромокаем • Дишащ',
        },
      },
    ],
  },
  {
    num: '05',
    id: 'ev-tekstili-grubu',
    categoryKey: 'nevresim',
    categoryName: {
      tr: 'Ev Tekstili & Masa Örtüsü',
      en: 'Home Textiles & Tablecloths',
      de: 'Heimtextilien & Tischdecken',
      bg: 'Домашен текстил и покривки',
    },
    title: {
      tr: 'Ev Tekstili, Çeyizlik Nevresim & Masa Örtüsü Grubu',
      en: 'Home Textiles, Bedding Sets & Woven Tablecloths',
      de: 'Heimtextilien, Bettwäschegarnituren & Tischdecken',
      bg: 'Домашен текстил, спални комплекти и покривки за маса',
    },
    desc: {
      tr: 'Ev tekstili mağazaları, toptancılar ve perakende müşteriler için %100 pamuk nevresim takımları, kapitoneli alezler, her ölçüde lastikli çarşaflar ve dokuma masa örtüleri.',
      en: '100% cotton duvet cover sets, quilted mattress protectors, fitted sheets in all dimensions, and woven tablecloths for home textile retailers and individual buyers.',
      de: 'Bettwäschegarnituren aus 100 % Baumwolle, gesteppte Matratzenschoner, Spannbettlaken in allen Größen und gewebte Tischdecken für Fachhandel und Privatkunden.',
      bg: 'Спални комплекти от 100% памук, капитонирани протектори, чаршафи с ластик във всички размери и тъкани покривки за маса за магазини и дома.',
    },
    image: '/images/ev-tekstili.jpg',
    subItems: [
      {
        label: {
          tr: 'Ev & Mağaza Tipi Pamuk Nevresim Takımları',
          en: 'Home & Retail Cotton Duvet Cover Sets',
          de: 'Heim- & Fachhandels-Baumwollbettwäsche',
          bg: 'Памучни спални комплекти за дома и магазини',
        },
        spec: {
          tr: 'Tek & Çift Kişilik • 1. 2. 3. Kalite',
          en: 'Single & Double • 1st, 2nd, 3rd Grade',
          de: 'Einzel & Doppel • 1. 2. 3. Wahl',
          bg: 'Единични и двойни • 1, 2, 3 качество',
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
          tr: 'Her Ölçü ve Renk Seçeneği',
          en: 'All Sizes & Colors',
          de: 'Alle Größen & Farben',
          bg: 'Всички размери и цветове',
        },
      },
      {
        label: {
          tr: 'Kapitoneli Sıvı Geçirmez Yatak & Yastık Alezi',
          en: 'Quilted Waterproof Mattress & Pillow Protector',
          de: 'Gesteppter Wasserdichter Matratzen- & Kissenschoner',
          bg: 'Капитониран непромокаем протектор за матрак и възглавница',
        },
        spec: {
          tr: 'Koruyucu Membranlı',
          en: 'Protective Membrane',
          de: 'Mit Schutzmembran',
          bg: 'Със защитна мембрана',
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
    num: '06',
    id: 'stok-kiloluk-havlular',
    categoryKey: 'stok',
    categoryName: {
      tr: '1. 2. 3. Kalite • Kiloluk Stok Havlu',
      en: '1st, 2nd, 3rd Grade • Per-Kg Stock Towels',
      de: '1. 2. 3. Wahl • Lagerhandtücher pro Kg',
      bg: '1, 2, 3 качество • Стокови кърпи на кг',
    },
    title: {
      tr: '1. 2. 3. Kalite & İhracat Fazlası Kiloluk Stok Havlular',
      en: '1st, 2nd, 3rd Quality & Export-Surplus Towels Sold by Weight (Kg)',
      de: '1., 2., 3. Qualität & Exportüberschuss-Handtücher nach Gewicht (Kg)',
      bg: '1-во, 2-ро, 3-то качество и износни хавлиени кърпи на килограм',
    },
    desc: {
      tr: 'Havlu satan mağazalar, toptancılar ve işletmeler için Denizli ihracat üretimlerinden ayrılan 1. kalite, 2. kalite ve 3. kalite her boyuttan tartı / kilo bazlı yüksek fiyat avantajlı paketli stok havlu grupları.',
      en: 'High-value 1st, 2nd, and 3rd quality export-surplus packaged cotton towels in all dimensions sold by weight (per kg) directly from Denizli for stores and wholesalers.',
      de: 'Preisvorteilhafte 1., 2. und 3. Wahl Exportüberschusshandtücher in allen Größen, verpackt und nach Gewicht (pro Kg) direkt aus Denizli für Händler und Betriebe.',
      bg: 'Изгодни пакетирани памучни кърпи в 1-во, 2-ро и 3-то качество във всички размери, продавани на килограм директно от Денизли за магазини и търговци на едро.',
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
          tr: '50x90 cm 1. 2. 3. Kalite Kiloluk El & Yüz Havlusu',
          en: '50x90 cm 1st, 2nd, 3rd Grade Hand Towels (Per Kg)',
          de: '50x90 cm 1. 2. 3. Wahl Handtücher (pro Kg)',
          bg: '50x90 см 1, 2, 3 качество кърпи за ръце и лице (на кг)',
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
          tr: '70x140 cm 1. 2. 3. Kalite Kiloluk Banyo Havlusu',
          en: '70x140 cm 1st, 2nd, 3rd Grade Bath Towels (Per Kg)',
          de: '70x140 cm 1. 2. 3. Wahl Duschtücher (pro Kg)',
          bg: '70x140 см 1, 2, 3 качество кърпи за баня (на кг)',
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
          tr: 'Karışık Renk & Bordürlü Paketli Stok Havlu Grubu',
          en: 'Assorted Color & Bordered Packaged Stock Towels',
          de: 'Gemischte Farben & Bordüren Verpackte Lagerhandtücher',
          bg: 'Микс цветове и бордюри пакетирани стокови кърпи',
        },
        spec: {
          tr: 'Çuval, Koli & Adetli Toptan',
          en: 'Bale, Box & Piece Wholesale',
          de: 'Ballen-, Karton- & Stückverkauf',
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
      tr: '1. 2. 3. Kalite • Paketli Stok Havlu',
      en: '1st, 2nd, 3rd Grade • Packaged Stock Towels',
      de: '1. 2. 3. Wahl • Verpackte Lagerhandtücher',
      bg: '1, 2, 3 качество • Пакетирани стокови кърпи',
    },
    title: {
      tr: '1. 2. 3. Kalite Karışık Renk Paketli Stok Havlular',
      en: '1st, 2nd, 3rd Quality Assorted Color Packaged Stock Towels',
      de: 'Verpackte Lagerhandtücher in Mischfarben (1. 2. 3. Qualität)',
      bg: 'Пакетирани стокови кърпи микс цветове (1, 2, 3 качество)',
    },
    desc: {
      tr: 'Denizli ihracat üretimlerinden ayrılan, şeffaf ambalajlı, yüksek su emici gri, antrasit, turkuaz, krem ve mercan tonlarında 1. 2. 3. kalite kiloluk stok havlular.',
      en: 'Packaged 1st, 2nd, and 3rd quality cotton towels in grey, anthracite, turquoise, cream, and coral tones sold by weight (per kg).',
      de: 'Einzeln verpackte, saugstarke Baumwollhandtücher in 1., 2. und 3. Qualität in Grau, Anthrazit, Türkis, Creme und Koralle nach Gewicht (pro Kg).',
      bg: 'Прозрачно пакетирани високопопиващи памучни кърпи в 1-во, 2-ро и 3-то качество в сиво, антрацит, тюркоаз, кремаво и коралово на килограм.',
    },
    image: '/images/stok-havlu-1.jpg',
    images: ['/images/stok-havlu-1.jpg', '/images/stok-havlu-2.jpg', '/images/stok-havlu-3.jpg'],
    subItems: [
      {
        label: {
          tr: '50x90 cm Karışık Renk Paketli Stok Havlu (1. 2. 3. Kalite)',
          en: '50x90 cm Assorted Color Packaged Stock Towel (1st-3rd Grade)',
          de: '50x90 cm Verpacktes Lagerhandtuch (1. 2. 3. Wahl)',
          bg: '50x90 см Пакетирана стокова кърпа (1, 2, 3 качество)',
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
      tr: '1. 2. 3. Kalite • Kabartmalı Stok Havlu',
      en: '1st, 2nd, 3rd Grade • Embossed Stock Towels',
      de: '1. 2. 3. Wahl • Geprägte Lagerhandtücher',
      bg: '1, 2, 3 качество • Релефни стокови кърпи',
    },
    title: {
      tr: 'İhracat Fazlası Kabartma & Nakışlı Lüks Stok Havlular',
      en: 'Export-Surplus Embossed & Embroidered Stock Towels',
      de: 'Geprägte & Bestickte Export-Luxushandtücher',
      bg: 'Релефни и бродирани луксозни стокови кърпи за износ',
    },
    desc: {
      tr: 'Avrupa ihracat serisi etiketli ve ambalajlı, yüksek gramajlı kadife/bukle dokulu kabartma desenli 1. ve 2. kalite kiloluk stok havlular.',
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
          tr: '1. 2. 3. Kalite Karışık Renk & Ebat Koli / Çuval',
          en: '1st, 2nd, 3rd Quality Mixed Color & Size Bale / Box',
          de: '1. 2. 3. Wahl Gemischte Farben & Größen im Karton / Ballen',
          bg: '1, 2, 3 качество микс цветове и размери в кашон / чувал',
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
      tr: '1. 2. 3. Kalite • Jakar Bordürlü Havlu',
      en: '1st, 2nd, 3rd Grade • Jacquard Bordered Towels',
      de: '1. 2. 3. Wahl • Jacquard-Bordüre Handtücher',
      bg: '1, 2, 3 качество • Кърпи с жакардов бордюр',
    },
    title: {
      tr: 'İhracat Fazlası Jakar Bordürlü & Çizgili Stok Havlular',
      en: 'Export-Surplus Jacquard Bordered & Striped Stock Towels',
      de: 'Jacquard-Bordüren & Gestreifte Export-Lagerhandtücher',
      bg: 'Стокови кърпи с жакардов бордюр и райе за износ',
    },
    desc: {
      tr: 'Özel dokuma jakar bordürlü krem, yeşil, petrol mavisi ve füme renk seçenekleriyle mağaza ve toptan satışa hazır 1. 2. 3. kalite paketli kiloluk havlular.',
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
          tr: 'Beyaz & Krem 1. 2. 3. Kalite Stok Havlu Grubu',
          en: 'White & Cream 1st, 2nd, 3rd Quality Stock Towel Group',
          de: 'Weiß & Creme 1. 2. 3. Qualität Lagerhandtücher',
          bg: 'Бели и кремави стокови кърпи (1, 2, 3 качество)',
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
          bg: 'Всички размери смесени на едро на килограм',
        },
        spec: {
          tr: '81 İlde Teslimat',
          en: '81-Province Delivery',
          de: 'Versand in 81 Provinzen',
          bg: 'Доставка в 81 области',
        },
      },
    ],
  },
];

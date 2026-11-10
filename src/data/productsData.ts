export type Language = 'tr' | 'en';

export interface ProductSubItem {
  label: string;
  labelEn: string;
  spec: string;
  specEn: string;
}

export interface ProductGroupItem {
  num: string;
  id: string;
  categoryKey: 'otel' | 'ev' | 'bornoz' | 'stok';
  categoryName: string;
  categoryNameEn: string;
  title: string;
  titleEn: string;
  desc: string;
  descEn: string;
  image: string;
  images?: string[];
  subItems: ProductSubItem[];
}

export const CATEGORY_TABS = [
  { key: 'all', label: 'Tüm Gruplar (06)', labelEn: 'All Groups (06)' },
  { key: 'otel', label: 'Otel Ürünleri', labelEn: 'Hotel Textiles' },
  { key: 'ev', label: 'Ev Tekstili', labelEn: 'Home Textiles' },
  { key: 'bornoz', label: 'Bornoz Grubu', labelEn: 'Bathrobe Group' },
  { key: 'stok', label: 'Stok (Kiloluk) Ürünler', labelEn: 'Stock (Per Kg) Towels' },
] as const;

export const productGroups: ProductGroupItem[] = [
  {
    num: '01',
    id: 'otel-havlusu-grubu',
    categoryKey: 'otel',
    categoryName: 'Otel Ürünleri',
    categoryNameEn: 'Hotel Textiles',
    title: 'Otel Havlusu Grubu',
    titleEn: 'Hotel Towel Collection',
    desc: 'Denizli dokuması %100 pamuk ipliğinden üretilen, endüstriyel yıkamaya dayanıklı çift dikişli kar beyazı otel, pansiyon, yurt ve spa havluları.',
    descEn: 'Woven in Denizli from 100% pure cotton yarn; double-stitched snow-white hotel, resort, dormitory, and spa towels built for industrial laundering.',
    image: '/images/otel-havlu.jpg',
    subItems: [
      {
        label: '50x90 cm Otel El & Yüz Havlusu',
        labelEn: '50x90 cm Hotel Hand & Face Towel',
        spec: '%100 Pamuk • Çift Dikişli',
        specEn: '100% Cotton • Double Stitched',
      },
      {
        label: '70x140 cm Otel Banyo Havlusu',
        labelEn: '70x140 cm Hotel Bath Towel',
        spec: '%100 Pamuk • Yüksek Emici',
        specEn: '100% Cotton • High Absorbency',
      },
      {
        label: '90x150 cm Otel Spa & Havuz Havlusu',
        labelEn: '90x150 cm Hotel Spa & Pool Towel',
        spec: 'Battal Boy • Ağır Gramaj',
        specEn: 'Jumbo Size • Heavyweight',
      },
      {
        label: '30x50 cm Otel Baş & Misafir Havlusu',
        labelEn: '30x50 cm Hotel Guest Towel',
        spec: '%100 Pamuk • Otel Serisi',
        specEn: '100% Cotton • Hotel Series',
      },
    ],
  },
  {
    num: '02',
    id: 'otel-nevresim-takimlari',
    categoryKey: 'otel',
    categoryName: 'Otel Ürünleri',
    categoryNameEn: 'Hotel Textiles',
    title: 'Otel Nevresim Takımları & Çarşaf Grubu',
    titleEn: 'Hotel Duvet Cover Sets & Bed Sheets',
    desc: 'Oteller, butik konaklama tesisleri ve öğrenci yurtları için 83 tel ve 120 tel çizgili saten (yollu) ile düz pamuk ranforce nevresim takımları, çarşaf ve yastık kılıfları.',
    descEn: 'Striped sateen and plain cotton ranforce duvet cover sets, fitted/flat bed sheets, and pillowcases designed for hotels, boutique resorts, and dormitories.',
    image: '/images/otel-nevresim.jpg',
    subItems: [
      {
        label: 'Tek Kişilik Çizgili Saten Otel Nevresim Takımı',
        labelEn: 'Single Size Striped Sateen Hotel Bedding Set',
        spec: '83 / 120 Tel Yollu Saten',
        specEn: 'Striped Hotel Sateen',
      },
      {
        label: 'Çift Kişilik Çizgili Saten Otel Nevresim Takımı',
        labelEn: 'Double Size Striped Sateen Hotel Bedding Set',
        spec: '83 / 120 Tel Yollu Saten',
        specEn: 'Striped Hotel Sateen',
      },
      {
        label: 'Düz Beyaz Pamuk Ranforce Otel Nevresim Seti',
        labelEn: 'Plain White Cotton Ranforce Hotel Duvet Set',
        spec: '%100 Pamuk Dokuma',
        specEn: '100% Woven Cotton',
      },
      {
        label: 'Otel Tipi Düz / Lastikli Çarşaf & Yastık Kılıfı',
        labelEn: 'Hotel Flat / Fitted Sheets & Pillowcases',
        spec: 'Tüm Yatak Ölçüleri',
        specEn: 'All Mattress Sizes',
      },
    ],
  },
  {
    num: '03',
    id: 'otel-paspas-ve-alez',
    categoryKey: 'otel',
    categoryName: 'Otel Ürünleri',
    categoryNameEn: 'Hotel Textiles',
    title: 'Otel Banyo Paspası & Sıvı Geçirmez Alez',
    titleEn: 'Hotel Bath Mats & Waterproof Mattress Protectors',
    desc: 'Yüksek gramajlı ayak izi desenli Yunan bordürlü otel banyo paspasları ve yatak ömrünü koruyan nefes alabilen membran kaplamalı sıvı geçirmez yatak koruyucu alezler.',
    descEn: 'Heavyweight Greek-border footprint hotel bath mats and breathable membrane-coated waterproof mattress protectors that extend mattress life.',
    image: '/images/otel-paspas.jpg',
    subItems: [
      {
        label: '50x70 cm Ayak İzli Otel Banyo Paspası',
        labelEn: '50x70 cm Footprint Hotel Bath Mat',
        spec: 'Yunan Bordürlü • Ağır Gramaj',
        specEn: 'Greek Border • Heavyweight',
      },
      {
        label: 'Tek Kişilik Sıvı Geçirmez Yatak Alezi (90x200)',
        labelEn: 'Single Waterproof Mattress Protector (90x200)',
        spec: 'Membranlı • Lastikli',
        specEn: 'Membrane • Fitted',
      },
      {
        label: 'Çift Kişilik Sıvı Geçirmez Yatak Alezi (160x200)',
        labelEn: 'Double Waterproof Mattress Protector (160x200)',
        spec: 'Membranlı • Lastikli',
        specEn: 'Membrane • Fitted',
      },
      {
        label: 'Battal Boy Sıvı Geçirmez Yatak Alezi (180x200)',
        labelEn: 'King Waterproof Mattress Protector (180x200)',
        spec: 'Havlu / Mikrofiber Yüzey',
        specEn: 'Terry / Microfiber Top',
      },
    ],
  },
  {
    num: '04',
    id: 'ev-tekstili-grubu',
    categoryKey: 'ev',
    categoryName: 'Ev Tekstili',
    categoryNameEn: 'Home Textiles',
    title: 'Ev Tekstili Grubu',
    titleEn: 'Home Textile Collection',
    desc: 'Mağazalar, çeyiz grupları ve bireysel ev kullanımı için %100 pamuk nevresim takımları, her ölçüye uygun lastikli/düz çarşaflar, yatak alezleri ve şık masa örtüleri.',
    descEn: '100% cotton duvet cover sets, fitted and flat sheets in all dimensions, mattress protectors, and woven tablecloths for retail stores and home use.',
    image: '/images/ev-tekstili.jpg',
    subItems: [
      {
        label: 'Ev Tipi Pamuk Nevresim Takımı',
        labelEn: 'Home Cotton Duvet Cover Set',
        spec: 'Tek & Çift Kişilik',
        specEn: 'Single & Double Sizes',
      },
      {
        label: 'Penye & Pamuk Lastikli Çarşaf Takımı',
        labelEn: 'Combed Cotton Fitted Bed Sheet Set',
        spec: 'Her Ölçü ve Renk',
        specEn: 'All Sizes & Colors',
      },
      {
        label: 'Ev Tipi Kapitoneli & Sıvı Geçirmez Yatak Alezi',
        labelEn: 'Quilted & Waterproof Home Mattress Protector',
        spec: 'Yatak Koruyucu',
        specEn: 'Mattress Guard',
      },
      {
        label: 'Dokuma Leke Tutmaz Masa Örtüsü Grubu',
        labelEn: 'Stain-Resistant Woven Tablecloth Group',
        spec: 'Farklı Ebat Seçenekleri',
        specEn: 'Multiple Dimensions',
      },
    ],
  },
  {
    num: '05',
    id: 'bornoz-grubu',
    categoryKey: 'bornoz',
    categoryName: 'Bornoz Grubu',
    categoryNameEn: 'Bathrobe Group',
    title: 'Bornoz Grubu (Büyük & Çocuk Bornozu)',
    titleEn: 'Bathrobe Group (Adult & Kids Bathrobes)',
    desc: 'Yumuşak dokulu %100 Denizli pamuğundan üretilen her bedenden yetişkin büyük bornozlar ve tüm yaş aralıklarına uygun çocuk bornozları.',
    descEn: 'Soft-touch 100% Denizli cotton bathrobes in all adult sizes (S to XXL) and hooded/belted children’s bathrobes across all age groups.',
    image: '/images/bornoz-grubu.jpg',
    subItems: [
      {
        label: 'Yetişkin Büyük Bornoz — S / M Beden',
        labelEn: 'Adult Bathrobe — S / M Sizes',
        spec: '%100 Denizli Pamuğu',
        specEn: '100% Denizli Cotton',
      },
      {
        label: 'Yetişkin Büyük Bornoz — L / XL Beden',
        labelEn: 'Adult Bathrobe — L / XL Sizes',
        spec: '%100 Denizli Pamuğu',
        specEn: '100% Denizli Cotton',
      },
      {
        label: 'Yetişkin Büyük Bornoz — XXL Battal Beden',
        labelEn: 'Adult Bathrobe — XXL Plus Size',
        spec: 'Şal Yaka / Kimono',
        specEn: 'Shawl Collar / Kimono',
      },
      {
        label: 'Çocuk Bornozu — Tüm Yaş Grupları (2-12 Yaş)',
        labelEn: 'Kids Bathrobe — All Age Groups (Ages 2-12)',
        spec: 'Kapüşonlu & Kemerli',
        specEn: 'Hooded & Belted',
      },
    ],
  },
  {
    num: '06',
    id: 'stok-kiloluk-havlular',
    categoryKey: 'stok',
    categoryName: 'Stok Ürünleri (Kiloluk)',
    categoryNameEn: 'Stock Towels (Per Kg)',
    title: 'Stok Ürünler: İhracat Fazlası Kiloluk Havlular',
    titleEn: 'Stock Products: Export-Surplus Towels Sold by Weight (Kg)',
    desc: 'Denizli ihracat üretimlerinden ayrılan her boyuttan tartı / kilo bazlı yüksek fiyat avantajlı toptan ve perakende paketli stok havlu grupları.',
    descEn: 'High-value wholesale and retail export-surplus packaged cotton towels in all dimensions sold by weight (per kg) directly from Denizli.',
    image: '/images/stok-havlu-1.jpg',
    images: [
      '/images/stok-havlu-1.jpg',
      '/images/stok-havlu-2.jpg',
      '/images/stok-havlu-3.jpg',
    ],
    subItems: [
      {
        label: '50x90 cm İhracat Fazlası Kiloluk El & Yüz Havlusu',
        labelEn: '50x90 cm Export-Surplus Hand Towels (Per Kg)',
        spec: 'Tartı / Kilo Bazlı',
        specEn: 'Sold by Weight (Kg)',
      },
      {
        label: '70x140 cm İhracat Fazlası Kiloluk Banyo Havlusu',
        labelEn: '70x140 cm Export-Surplus Bath Towels (Per Kg)',
        spec: 'Tartı / Kilo Bazlı',
        specEn: 'Sold by Weight (Kg)',
      },
      {
        label: '90x150 cm İhracat Fazlası Kiloluk Battal Havlu',
        labelEn: '90x150 cm Export-Surplus Jumbo Towels (Per Kg)',
        spec: 'Tartı / Kilo Bazlı',
        specEn: 'Sold by Weight (Kg)',
      },
      {
        label: 'Karışık Renk & Bordürlü İhracat Fazlası Stok Havlu',
        labelEn: 'Assorted Color & Bordered Export-Surplus Stock Towels',
        spec: 'Çuval & Koli Toptan',
        specEn: 'Bale & Box Wholesale',
      },
    ],
  },
];

export const stokExpandedCards: ProductGroupItem[] = [
  {
    num: '06-A',
    id: 'stok-kiloluk-havlu-paketli',
    categoryKey: 'stok',
    categoryName: 'Stok Ürünleri (Kiloluk)',
    categoryNameEn: 'Stock Towels (Per Kg)',
    title: 'İhracat Fazlası Karışık Renk Paketli Stok Havlular',
    titleEn: 'Export-Surplus Assorted Color Packaged Stock Towels',
    desc: 'Denizli ihracat üretimlerinden ayrılan, şeffaf ambalajlı, yüksek su emici gri, antrasit, turkuaz, krem ve mercan tonlarında kiloluk stok havlular.',
    descEn: 'Packaged export-surplus cotton towels in grey, anthracite, turquoise, cream, and coral tones sold by weight (per kg).',
    image: '/images/stok-havlu-1.jpg',
    images: ['/images/stok-havlu-1.jpg', '/images/stok-havlu-2.jpg', '/images/stok-havlu-3.jpg'],
    subItems: [
      {
        label: '50x90 cm Karışık Renk Paketli Stok Havlu',
        labelEn: '50x90 cm Assorted Color Packaged Stock Towel',
        spec: 'Kiloluk / Adetli',
        specEn: 'Per Kg / Piece',
      },
      {
        label: '70x140 cm Karışık Renk Banyo Boy Stok Havlu',
        labelEn: '70x140 cm Assorted Color Bath Stock Towel',
        spec: 'Kiloluk / Adetli',
        specEn: 'Per Kg / Piece',
      },
      {
        label: '90x150 cm Battal Boy Renkli Stok Havlu',
        labelEn: '90x150 cm Jumbo Colored Stock Towel',
        spec: 'Tartı Bazlı Toptan',
        specEn: 'Wholesale by Weight',
      },
    ],
  },
  {
    num: '06-B',
    id: 'stok-kiloluk-havlu-kabartmali',
    categoryKey: 'stok',
    categoryName: 'Stok Ürünleri (Kiloluk)',
    categoryNameEn: 'Stock Towels (Per Kg)',
    title: 'İhracat Fazlası Kabartma & Nakışlı Lüks Stok Havlular',
    titleEn: 'Export-Surplus Embossed & Embroidered Stock Towels',
    desc: 'Avrupa ihracat serisi etiketli ve ambalajlı, yüksek gramajlı kadife/bukle dokulu kabartma desenli birinci sınıf kiloluk stok havlular.',
    descEn: 'European export-series tagged and packaged heavyweight embossed terry cotton stock towels sold by weight.',
    image: '/images/stok-havlu-2.jpg',
    images: ['/images/stok-havlu-2.jpg', '/images/stok-havlu-1.jpg', '/images/stok-havlu-3.jpg'],
    subItems: [
      {
        label: '70x140 cm İhracat Serisi Kabartma Desenli Banyo Havlusu',
        labelEn: '70x140 cm Export-Series Embossed Bath Towel',
        spec: 'Ağır Gramaj • Paketli',
        specEn: 'Heavyweight • Packaged',
      },
      {
        label: '50x90 cm İhracat Serisi Kabartma El & Yüz Havlusu',
        labelEn: '50x90 cm Export-Series Embossed Hand Towel',
        spec: '%100 Pamuk • Paketli',
        specEn: '100% Cotton • Packaged',
      },
      {
        label: 'Karışık Renk & Ebat İhracat Fazlası Koli/Çuval',
        labelEn: 'Mixed Color & Size Export-Surplus Bale/Box',
        spec: 'Kiloluk Toptan Satış',
        specEn: 'Per-Kg Wholesale',
      },
    ],
  },
  {
    num: '06-C',
    id: 'stok-kiloluk-havlu-bordurlu',
    categoryKey: 'stok',
    categoryName: 'Stok Ürünleri (Kiloluk)',
    categoryNameEn: 'Stock Towels (Per Kg)',
    title: 'İhracat Fazlası Jakar Bordürlü & Çizgili Stok Havlular',
    titleEn: 'Export-Surplus Jacquard Bordered & Striped Stock Towels',
    desc: 'Özel dokuma jakar bordürlü krem, yeşil, petrol mavisi ve füme renk seçenekleriyle mağaza ve toptan satışa hazır paketli kiloluk havlular.',
    descEn: 'Custom jacquard-bordered cream, green, teal, and charcoal packaged stock towels ready for retail stores and wholesale.',
    image: '/images/stok-havlu-3.jpg',
    images: ['/images/stok-havlu-3.jpg', '/images/stok-havlu-1.jpg', '/images/stok-havlu-2.jpg'],
    subItems: [
      {
        label: '50x90 & 70x140 cm Jakar Bordürlü İhracat Fazlası Havlu',
        labelEn: '50x90 & 70x140 cm Jacquard Bordered Export Towel',
        spec: 'Paketli • Kiloluk',
        specEn: 'Packaged • Per Kg',
      },
      {
        label: 'Beyaz & Krem Otel/Ev Tipi İhracat Fazlası Stok Havlu',
        labelEn: 'White & Cream Hotel/Home Export Stock Towel',
        spec: 'Yüksek Emici Pamuk',
        specEn: 'High-Absorbency Cotton',
      },
      {
        label: 'Tüm Boyutlar Karışık Toptan Kiloluk Havlu Grubu',
        labelEn: 'All Sizes Mixed Wholesale Per-Kg Towel Group',
        spec: '81 İlde Ambar Teslim',
        specEn: '81-Province Freight',
      },
    ],
  },
];

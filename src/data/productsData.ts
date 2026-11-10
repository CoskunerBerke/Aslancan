export interface ProductSubItem {
  label: string;
  spec: string;
}

export interface ProductGroupItem {
  num: string;
  id: string;
  categoryKey: 'otel' | 'ev' | 'bornoz' | 'stok';
  categoryName: string;
  title: string;
  desc: string;
  image: string;
  subItems: ProductSubItem[];
}

export const CATEGORY_TABS = [
  { key: 'all', label: 'Tüm Gruplar (06)' },
  { key: 'otel', label: 'Otel Ürünleri' },
  { key: 'ev', label: 'Ev Tekstili' },
  { key: 'bornoz', label: 'Bornoz Grubu' },
  { key: 'stok', label: 'Stok (Kiloluk) Ürünler' },
] as const;

export const productGroups: ProductGroupItem[] = [
  {
    num: '01',
    id: 'otel-havlusu-grubu',
    categoryKey: 'otel',
    categoryName: 'Otel Ürünleri',
    title: 'Otel Havlusu Grubu',
    desc: 'Denizli dokuması %100 pamuk ipliğinden üretilen, endüstriyel yıkamaya dayanıklı çift dikişli kar beyazı otel, pansiyon, yurt ve spa havluları.',
    image: '/images/otel-havlu.jpg',
    subItems: [
      { label: '50x90 cm Otel El & Yüz Havlusu', spec: '%100 Pamuk • Çift Dikişli' },
      { label: '70x140 cm Otel Banyo Havlusu', spec: '%100 Pamuk • Yüksek Emici' },
      { label: '90x150 cm Otel Spa & Havuz Havlusu', spec: 'Battal Boy • Ağır Gramaj' },
      { label: '30x50 cm Otel Baş & Misafir Havlusu', spec: '%100 Pamuk • Otel Serisi' },
    ],
  },
  {
    num: '02',
    id: 'otel-nevresim-takimlari',
    categoryKey: 'otel',
    categoryName: 'Otel Ürünleri',
    title: 'Otel Nevresim Takımları & Çarşaf Grubu',
    desc: 'Oteller, butik konaklama tesisleri ve öğrenci yurtları için 83 tel ve 120 tel çizgili saten (yollu) ile düz pamuk ranforce nevresim takımları, çarşaf ve yastık kılıfları.',
    image: '/images/otel-nevresim.jpg',
    subItems: [
      { label: 'Tek Kişilik Çizgili Saten Otel Nevresim Takımı', spec: '83 / 120 Tel Yollu Saten' },
      { label: 'Çift Kişilik Çizgili Saten Otel Nevresim Takımı', spec: '83 / 120 Tel Yollu Saten' },
      { label: 'Düz Beyaz Pamuk Ranforce Otel Nevresim Seti', spec: '%100 Pamuk Dokuma' },
      { label: 'Otel Tipi Düz / Lastikli Çarşaf & Yastık Kılıfı', spec: 'Tüm Yatak Ölçüleri' },
    ],
  },
  {
    num: '03',
    id: 'otel-paspas-ve-alez',
    categoryKey: 'otel',
    categoryName: 'Otel Ürünleri',
    title: 'Otel Banyo Paspası & Sıvı Geçirmez Alez',
    desc: 'Yüksek gramajlı ayak izi desenli Yunan bordürlü otel banyo paspasları ve yatak ömrünü koruyan nefes alabilen membran kaplamalı sıvı geçirmez yatak koruyucu alezler.',
    image: '/images/otel-paspas.jpg',
    subItems: [
      { label: '50x70 cm Ayak İzli Otel Banyo Paspası', spec: 'Yunan Bordürlü • Ağır Gramaj' },
      { label: 'Tek Kişilik Sıvı Geçirmez Yatak Alezi (90x200)', spec: 'Membranlı • Lastikli' },
      { label: 'Çift Kişilik Sıvı Geçirmez Yatak Alezi (160x200)', spec: 'Membranlı • Lastikli' },
      { label: 'Battal Boy Sıvı Geçirmez Yatak Alezi (180x200)', spec: 'Havlu / Mikrofiber Yüzey' },
    ],
  },
  {
    num: '04',
    id: 'ev-tekstili-grubu',
    categoryKey: 'ev',
    categoryName: 'Ev Tekstili',
    title: 'Ev Tekstili Grubu',
    desc: 'Mağazalar, çeyiz grupları ve bireysel ev kullanımı için %100 pamuk nevresim takımları, her ölçüye uygun lastikli/düz çarşaflar, yatak alezleri ve şık masa örtüleri.',
    image: '/images/ev-tekstili.jpg',
    subItems: [
      { label: 'Ev Tipi Pamuk Nevresim Takımı', spec: 'Tek & Çift Kişilik' },
      { label: 'Penye & Pamuk Lastikli Çarşaf Takımı', spec: 'Her Ölçü ve Renk' },
      { label: 'Ev Tipi Kapitoneli & Sıvı Geçirmez Yatak Alezi', spec: 'Yatak Koruyucu' },
      { label: 'Dokuma Leke Tutmaz Masa Örtüsü Grubu', spec: 'Farklı Ebat Seçenekleri' },
    ],
  },
  {
    num: '05',
    id: 'bornoz-grubu',
    categoryKey: 'bornoz',
    categoryName: 'Bornoz Grubu',
    title: 'Bornoz Grubu (Büyük & Çocuk Bornozu)',
    desc: 'Yumuşak dokulu %100 Denizli pamuğundan üretilen her bedenden yetişkin büyük bornozlar ve tüm yaş aralıklarına uygun çocuk bornozları.',
    image: '/images/bornoz-grubu.jpg',
    subItems: [
      { label: 'Yetişkin Büyük Bornoz — S / M Beden', spec: '%100 Denizli Pamuğu' },
      { label: 'Yetişkin Büyük Bornoz — L / XL Beden', spec: '%100 Denizli Pamuğu' },
      { label: 'Yetişkin Büyük Bornoz — XXL Battal Beden', spec: 'Şal Yaka / Kimono' },
      { label: 'Çocuk Bornozu — Tüm Yaş Grupları (2-12 Yaş)', spec: 'Kapüşonlu & Kemerli' },
    ],
  },
  {
    num: '06',
    id: 'stok-kiloluk-havlular',
    categoryKey: 'stok',
    categoryName: 'Stok Ürünleri (Kiloluk)',
    title: 'Stok Ürünler: İhracat Fazlası Kiloluk Havlular',
    desc: 'Denizli ihracat üretimlerinden ayrılan her boyuttan tartı / kilo bazlı yüksek fiyat avantajlı toptan ve perakende stok havlu grupları.',
    image: '/images/kiloluk-stok-havlu.jpg',
    subItems: [
      { label: '50x90 cm İhracat Fazlası Kiloluk El & Yüz Havlusu', spec: 'Tartı / Kilo Bazlı' },
      { label: '70x140 cm İhracat Fazlası Kiloluk Banyo Havlusu', spec: 'Tartı / Kilo Bazlı' },
      { label: '90x150 cm İhracat Fazlası Kiloluk Battal Havlu', spec: 'Tartı / Kilo Bazlı' },
      { label: 'Karışık Boy İhracat Fazlası Kiloluk Stok Havlu', spec: 'Çuval & Koli Toptan' },
    ],
  },
];

export interface ProductVariant {
  label: string;
  unitLabel: string;
  wholesaleMin: number;
  samplePrice: number;
}

export interface ProductGroupItem {
  num: string;
  id: string;
  categoryKey: 'otel' | 'ev' | 'bornoz' | 'stok';
  categoryName: string;
  title: string;
  desc: string;
  detail: string;
  image: string;
  variants: ProductVariant[];
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
    title: 'Otel Havlusu Grubu (50x90 • 70x140 • 90x150)',
    desc: 'Denizli dokuması %100 pamuk ipliğinden üretilen, endüstriyel yıkamaya ve yüksek sıcaklığa dayanıklı çift dikişli beyaz otel, pansiyon, yurt ve spa havluları.',
    detail: '50x90 cm El/Yüz • 70x140 cm Banyo • 90x150 cm Battal/Spa',
    image: '/images/otel-havlu.jpg',
    variants: [
      { label: '50x90 cm Otel El & Yüz Havlusu', unitLabel: 'Adet', wholesaleMin: 20, samplePrice: 95 },
      { label: '70x140 cm Otel Banyo Havlusu', unitLabel: 'Adet', wholesaleMin: 10, samplePrice: 215 },
      { label: '90x150 cm Otel Spa & Havuz Havlusu', unitLabel: 'Adet', wholesaleMin: 10, samplePrice: 285 },
    ],
  },
  {
    num: '02',
    id: 'otel-nevresim-takimlari',
    categoryKey: 'otel',
    categoryName: 'Otel Ürünleri',
    title: 'Otel Nevresim Takımları & Çarşaf Grubu',
    desc: 'Oteller, butik konaklama tesisleri ve öğrenci yurtları için 83 tel ve 120 tel çizgili saten (yollu) ile düz pamuk ranforce nevresim takımları, çarşaf ve yastık kılıfları.',
    detail: 'Çizgili Saten • Pamuk Ranforce • Tek & Çift Kişilik',
    image: '/images/otel-nevresim.jpg',
    variants: [
      { label: 'Tek Kişilik Çizgili Saten Otel Seti', unitLabel: 'Takım', wholesaleMin: 5, samplePrice: 640 },
      { label: 'Çift Kişilik Çizgili Saten Otel Seti', unitLabel: 'Takım', wholesaleMin: 5, samplePrice: 820 },
      { label: 'Otel Tipi Düz/Lastikli Çarşaf & Kılıf', unitLabel: 'Adet', wholesaleMin: 10, samplePrice: 260 },
    ],
  },
  {
    num: '03',
    id: 'otel-paspas-ve-alez',
    categoryKey: 'otel',
    categoryName: 'Otel Ürünleri',
    title: 'Otel Banyo Paspası & Sıvı Geçirmez Alez',
    desc: 'Yüksek gramajlı ayak izi desenli Yunan bordürlü otel banyo paspasları ve yatak ömrünü koruyan nefes alabilen membran kaplamalı sıvı geçirmez yatak koruyucu alezler.',
    detail: '50x70 Ayak İzli Paspas • Sıvı Geçirmez Mikrofiber/Havlu Alez',
    image: '/images/otel-paspas.jpg',
    variants: [
      { label: '50x70 cm Ayak İzli Otel Banyo Paspası', unitLabel: 'Adet', wholesaleMin: 20, samplePrice: 110 },
      { label: 'Tek Kişilik Sıvı Geçirmez Yatak Alezi (90x200)', unitLabel: 'Adet', wholesaleMin: 10, samplePrice: 195 },
      { label: 'Çift Kişilik Sıvı Geçirmez Yatak Alezi (160x200)', unitLabel: 'Adet', wholesaleMin: 10, samplePrice: 255 },
    ],
  },
  {
    num: '04',
    id: 'ev-tekstili-grubu',
    categoryKey: 'ev',
    categoryName: 'Ev Tekstili',
    title: 'Ev Tekstili: Nevresim Takımı, Çarşaf, Alez & Masa Örtüsü',
    desc: 'Mağazalar, çeyiz grupları ve bireysel ev kullanımı için %100 pamuk nevresim takımları, her ölçüye uygun lastikli/düz çarşaflar, yatak alezleri ve şık masa örtüleri.',
    detail: 'Nevresim Takımı • Lastikli Çarşaf • Yatak Alezi • Masa Örtüsü',
    image: '/images/ev-tekstili.jpg',
    variants: [
      { label: 'Çift Kişilik Ev Tipi Pamuk Nevresim Takımı', unitLabel: 'Takım', wholesaleMin: 3, samplePrice: 790 },
      { label: 'Penye / Pamuk Lastikli Çarşaf Takımı', unitLabel: 'Adet', wholesaleMin: 5, samplePrice: 230 },
      { label: 'Leke Tutmaz Dokuma Masa Örtüsü', unitLabel: 'Adet', wholesaleMin: 5, samplePrice: 290 },
    ],
  },
  {
    num: '05',
    id: 'bornoz-grubu',
    categoryKey: 'bornoz',
    categoryName: 'Bornoz Grubu',
    title: 'Bornoz Grubu: Büyük Bornoz & Çocuk Bornozu (Tüm Bedenler)',
    desc: 'Yumuşak dokulu %100 Denizli pamuğundan üretilen her bedenden yetişkin büyük bornozlar (S, M, L, XL, XXL) ve tüm yaş aralıklarına uygun çocuk bornozları.',
    detail: 'Yetişkin S - XXL Her Beden • Çocuk Bornozu Yaş Grupları',
    image: '/images/bornoz-grubu.jpg',
    variants: [
      { label: 'Yetişkin Büyük Bornoz (S / M / L / XL / XXL)', unitLabel: 'Adet', wholesaleMin: 5, samplePrice: 540 },
      { label: 'Çocuk Bornozu (2-4 / 5-6 / 7-8 / 9-10 / 11-12 Yaş)', unitLabel: 'Adet', wholesaleMin: 5, samplePrice: 360 },
      { label: 'Otel Tipi Şal Yaka Beyaz Bukle Bornoz', unitLabel: 'Adet', wholesaleMin: 10, samplePrice: 490 },
    ],
  },
  {
    num: '06',
    id: 'stok-kiloluk-havlular',
    categoryKey: 'stok',
    categoryName: 'Stok Ürünleri (Kiloluk)',
    title: 'Stok Ürünler: İhracat Fazlası Her Boyuttan Kiloluk Havlular',
    desc: 'Denizli ihracat üretimlerinden ayrılan 1. ve 2. kalite her boyuttan (30x50, 50x90, 70x140, 90x150) tartı / kilo bazlı yüksek avantajlı toptan ve perakende stok havlular.',
    detail: 'İhracat Fazlası • Her Boyut Havlu • Kiloluk Tartı Satışı',
    image: '/images/kiloluk-stok-havlu.jpg',
    variants: [
      { label: 'İhracat Fazlası Karışık Boy Kiloluk Havlu', unitLabel: 'Kg', wholesaleMin: 10, samplePrice: 245 },
      { label: 'İhracat Fazlası 50x90 & 70x140 Kiloluk Beyaz Havlu', unitLabel: 'Kg', wholesaleMin: 10, samplePrice: 265 },
      { label: 'İhracat Fazlası 90x150 Büyük Boy Kiloluk Havlu', unitLabel: 'Kg', wholesaleMin: 10, samplePrice: 275 },
    ],
  },
];

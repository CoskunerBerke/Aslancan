export interface ReviewItem {
  id: number;
  author: string;
  role: string;
  roleEn: string;
  productGroup: string;
  productGroupEn: string;
  rating: number;
  content: string;
  contentEn: string;
}

export const reviewsList: ReviewItem[] = [
  {
    id: 1,
    author: 'Murat K.',
    role: 'Butik Otel İşletmecisi • Antalya',
    roleEn: 'Boutique Hotel Manager • Antalya',
    productGroup: 'Otel Havlusu (50x90 & 70x140) & Paspas',
    productGroupEn: 'Hotel Towels (50x90 & 70x140) & Bath Mats',
    rating: 5,
    content:
      'Otelimizin sezon öncesi tüm 50x90, 70x140 havlu ve banyo paspası ihtiyacını Yusuf Bey’den temin ettik. Ambar ile Antalya’ya sorunsuz ulaştı, gramajı ve su emiciliği gerçekten çok iyi.',
    contentEn:
      'We sourced all our pre-season 50x90 and 70x140 hotel towels and bath mats from Mr. Yusuf. Delivered smoothly to Antalya via freight; the weight and water absorbency are outstanding.',
  },
  {
    id: 2,
    author: 'Hakan T.',
    role: 'Toptan Ev Tekstili Mağazası • İstanbul',
    roleEn: 'Wholesale Home Textile Store • Istanbul',
    productGroup: 'İhracat Fazlası Kiloluk Havlu & Bornoz',
    productGroupEn: 'Export-Surplus Per-Kg Towels & Bathrobes',
    rating: 5,
    content:
      'İhracat fazlası kiloluk havlu ve çocuk-büyük bornoz gruplarında fiyat/kalite oranı Denizli piyasasında bulabileceğiniz en dürüst esnaflardan biri. Düzenli ambar sevkiyatı çalışıyoruz.',
    contentEn:
      'One of the most reliable suppliers in Denizli for export-surplus per-kilo towels and adult/kids bathrobes. Excellent price-to-quality ratio with regular shipments.',
  },
  {
    id: 3,
    author: 'Seda A.',
    role: 'Öğrenci Yurdu Müdürü • Ankara',
    roleEn: 'Student Dormitory Director • Ankara',
    productGroup: 'Çizgili Saten Nevresim & Sıvı Geçirmez Alez',
    productGroupEn: 'Striped Sateen Bedding & Waterproof Protectors',
    rating: 5,
    content:
      '120 yataklı yurdumuz için sıvı geçirmez alez, lastikli çarşaf ve nevresim takımı aldık. Sayıya göre kırmayıp toptan fiyattan yardımcı oldular, zamanında teslim edildi.',
    contentEn:
      'We ordered waterproof mattress protectors, fitted sheets, and duvet sets for our 120-bed dormitory. They helped us with wholesale pricing and delivered right on time.',
  },
  {
    id: 4,
    author: 'İbrahim Ç.',
    role: 'Termal Otel Satınalma • Afyonkarahisar',
    roleEn: 'Thermal Hotel Purchasing • Afyonkarahisar',
    productGroup: '90x150 Spa Havlusu & Şal Yaka Bornoz',
    productGroupEn: '90x150 Spa Towels & Shawl Collar Bathrobes',
    rating: 5,
    content:
      'Termal bölümümüz için 90x150 battal boy havlu ve her bedenden büyük bornoz siparişi verdik. Endüstriyel yıkamada çekme veya sertleşme yapmadı, güvenle tavsiye ederim.',
    contentEn:
      'We ordered 90x150 jumbo spa towels and adult bathrobes in all sizes for our thermal spa. No shrinkage or hardening even after industrial washing.',
  },
  {
    id: 5,
    author: 'Zeliha D.',
    role: 'Perakende & Çeyiz Müşterisi • İzmir',
    roleEn: 'Retail Customer • Izmir',
    productGroup: 'Ev Tekstili, Masa Örtüsü & Nevresim',
    productGroupEn: 'Home Textiles, Tablecloths & Bedding',
    rating: 5,
    content:
      'Toptancı olmalarına rağmen adetli ev tekstili ve bornoz siparişimde de çok samimi şekilde yardımcı oldular. Kumaşların dokusu mağaza ürünlerinden çok daha kaliteli.',
    contentEn:
      'Even though they are primarily wholesalers, they kindly assisted with my multi-piece home textile and bathrobe order. The cotton texture is far superior to retail chain stores.',
  },
  {
    id: 6,
    author: 'Kemal Ö.',
    role: 'Pansiyon & Apart İşletmesi • Muğla',
    roleEn: 'Aparthotel Operator • Mugla',
    productGroup: 'Otel Nevresim Takımları & Alez Grubu',
    productGroupEn: 'Hotel Bedding Sets & Mattress Protectors',
    rating: 5,
    content:
      'Yusuf Aslancan’a ilgi ve alakasından dolayı teşekkür ederiz. Sabah sipariş verdik, aynı gün Denizli ambarına teslim ettiler. Tüm tekstil ihtiyaçlarımızda tek adresimiz.',
    contentEn:
      'Special thanks to Yusuf Aslancan for his attention. We placed our order in the morning and it was handed over to the Denizli freight terminal the same day.',
  },
];

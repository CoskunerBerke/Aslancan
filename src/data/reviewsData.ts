export interface ReviewItem {
  id: number;
  author: string;
  role: string;
  productGroup: string;
  rating: number;
  content: string;
}

export const reviewsList: ReviewItem[] = [
  {
    id: 1,
    author: 'Murat K.',
    role: 'Butik Otel İşletmecisi • Antalya',
    productGroup: 'Otel Havlusu (50x90 & 70x140) & Paspas',
    rating: 5,
    content:
      'Otelimizin sezon öncesi tüm 50x90, 70x140 havlu ve banyo paspası ihtiyacını Yusuf Bey’den temin ettik. Ambar ile Antalya’ya sorunsuz ulaştı, gramajı ve su emiciliği gerçekten çok iyi.',
  },
  {
    id: 2,
    author: 'Hakan T.',
    role: 'Toptan Ev Tekstili Mağazası • İstanbul',
    productGroup: 'İhracat Fazlası Kiloluk Havlu & Bornoz',
    rating: 5,
    content:
      'İhracat fazlası kiloluk havlu ve çocuk-büyük bornoz gruplarında fiyat/kalite oranı Denizli piyasasında bulabileceğiniz en dürüst esnaflardan biri. Düzenli ambar sevkiyatı çalışıyoruz.',
  },
  {
    id: 3,
    author: 'Seda A.',
    role: 'Öğrenci Yurdu Müdürü • Ankara',
    productGroup: 'Çizgili Saten Nevresim & Sıvı Geçirmez Alez',
    rating: 5,
    content:
      '120 yataklı yurdumuz için sıvı geçirmez alez, lastikli çarşaf ve nevresim takımı aldık. Sayıya göre kırmayıp toptan fiyattan yardımcı oldular, zamanında teslim edildi.',
  },
  {
    id: 4,
    author: 'İbrahim Ç.',
    role: 'Termal Otel Satınalma • Afyonkarahisar',
    productGroup: '90x150 Spa Havlusu & Şal Yaka Bornoz',
    rating: 5,
    content:
      'Termal bölümümüz için 90x150 battal boy havlu ve her bedenden büyük bornoz siparişi verdik. Endüstriyel yıkamada çekme veya sertleşme yapmadı, güvenle tavsiye ederim.',
  },
  {
    id: 5,
    author: 'Zeliha D.',
    role: 'Perakende & Çeyiz Müşterisi • İzmir',
    productGroup: 'Ev Tekstili, Masa Örtüsü & Nevresim',
    rating: 5,
    content:
      'Toptancı olmalarına rağmen adetli ev tekstili ve bornoz siparişimde de çok samimi şekilde yardımcı oldular. Kumaşların dokusu mağaza ürünlerinden çok daha kaliteli.',
  },
  {
    id: 6,
    author: 'Kemal Ö.',
    role: 'Pansiyon & Apart İşletmesi • Muğla',
    productGroup: 'Otel Nevresim Takımları & Alez Grubu',
    rating: 5,
    content:
      'Yusuf Aslancan’a ilgi ve alakasından dolayı teşekkür ederiz. Sabah sipariş verdik, aynı gün Denizli ambarına teslim ettiler. Tüm tekstil ihtiyaçlarımızda tek adresimiz.',
  },
];

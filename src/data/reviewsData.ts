import { LocalizedText } from './productsData';

export interface ReviewItem {
  id: number;
  author: string;
  role: LocalizedText;
  productGroup: LocalizedText;
  rating: number;
  content: LocalizedText;
}

export const reviewsList: ReviewItem[] = [
  {
    id: 1,
    author: 'Murat K.',
    role: {
      tr: 'Butik Otel İşletmecisi • Antalya',
      en: 'Boutique Hotel Manager • Antalya',
      de: 'Boutique-Hotelbetreiber • Antalya',
      bg: 'Управител на бутиков хотел • Анталия',
    },
    productGroup: {
      tr: 'Otel Havlusu (50x90 & 70x140) & Paspas',
      en: 'Hotel Towels (50x90 & 70x140) & Bath Mats',
      de: 'Hotelhandtücher (50x90 & 70x140) & Badematten',
      bg: 'Хотелски кърпи (50x90 и 70x140) и постелки',
    },
    rating: 5,
    content: {
      tr: 'Otelimizin sezon öncesi tüm 50x90, 70x140 havlu ve banyo paspası ihtiyacını Yusuf Bey’den temin ettik. Ambar ile Antalya’ya sorunsuz ulaştı, gramajı ve su emiciliği gerçekten çok iyi.',
      en: 'We sourced all our pre-season 50x90 and 70x140 hotel towels and bath mats from Mr. Yusuf. Delivered smoothly to Antalya via freight; the weight and water absorbency are outstanding.',
      de: 'Wir haben unseren gesamten Bedarf an 50x90 und 70x140 Hotelhandtüchern sowie Badematten vor Saisonbeginn bei Herrn Yusuf bestellt. Problemlose Lieferung nach Antalya, hervorragende Grammatur und Saugkraft.',
      bg: 'Заредихме всички наши хотелски кърпи 50x90 и 70x140 и постелки за баня преди сезона от г-н Юсуф. Доставката до Анталия беше безпроблемна, а плътността и попиваемостта са отлични.',
    },
  },
  {
    id: 2,
    author: 'Hakan T.',
    role: {
      tr: 'Toptan Ev Tekstili Mağazası • İstanbul',
      en: 'Wholesale Home Textile Store • Istanbul',
      de: 'Heimtextilien-Großhandlung • Istanbul',
      bg: 'Магазин за домашен текстил на едро • Истанбул',
    },
    productGroup: {
      tr: 'İhracat Fazlası Kiloluk Havlu & Bornoz',
      en: 'Export-Surplus Per-Kg Towels & Bathrobes',
      de: 'Exportüberschuss-Handtücher (pro Kg) & Bademäntel',
      bg: 'Износни кърпи на килограм и халати',
    },
    rating: 5,
    content: {
      tr: 'İhracat fazlası kiloluk havlu ve çocuk-büyük bornoz gruplarında fiyat/kalite oranı Denizli piyasasında bulabileceğiniz en dürüst esnaflardan biri. Düzenli ambar sevkiyatı çalışıyoruz.',
      en: 'One of the most reliable suppliers in Denizli for export-surplus per-kilo towels and adult/kids bathrobes. Excellent price-to-quality ratio with regular shipments.',
      de: 'Einer der zuverlässigsten Anbieter in Denizli für Exportüberschuss-Handtücher nach Gewicht sowie Erwachsenen- und Kinderbademäntel. Erstklassiges Preis-Leistungs-Verhältnis.',
      bg: 'Един от най-коректните производители в Денизли за износни кърпи на килограм и детски/дамски/мъжки халати. Отлично съотношение цена-качество и редовни доставки.',
    },
  },
  {
    id: 3,
    author: 'Seda A.',
    role: {
      tr: 'Öğrenci Yurdu Müdürü • Ankara',
      en: 'Student Dormitory Director • Ankara',
      de: 'Leiterin Studentenwohnheim • Ankara',
      bg: 'Директор на студентско общежитие • Анкара',
    },
    productGroup: {
      tr: 'Çizgili Saten Nevresim & Sıvı Geçirmez Alez',
      en: 'Striped Sateen Bedding & Waterproof Protectors',
      de: 'Streifensatin-Bettwäsche & Wasserdichte Matratzenschoner',
      bg: 'Раирани сатенени комплекти и непромокаеми протектори',
    },
    rating: 5,
    content: {
      tr: '120 yataklı yurdumuz için sıvı geçirmez alez, lastikli çarşaf ve nevresim takımı aldık. Sayıya göre kırmayıp toptan fiyattan yardımcı oldular, zamanında teslim edildi.',
      en: 'We ordered waterproof mattress protectors, fitted sheets, and duvet sets for our 120-bed dormitory. They helped us with wholesale pricing and delivered right on time.',
      de: 'Für unser Wohnheim mit 120 Betten haben wir wasserdichte Matratzenschoner, Spannbettlaken und Bettwäschesets bezogen. Sehr faire Großhandelspreise und pünktliche Lieferung.',
      bg: 'Поръчахме непромокаеми протектори, чаршафи с ластик и спални комплекти за нашето общежитие със 120 легла. Много коректни цени на едро и точна доставка.',
    },
  },
  {
    id: 4,
    author: 'İbrahim Ç.',
    role: {
      tr: 'Termal Otel Satınalma • Afyonkarahisar',
      en: 'Thermal Hotel Purchasing • Afyonkarahisar',
      de: 'Einkaufsleitung Thermalhotel • Afyonkarahisar',
      bg: 'Отдел снабдяване на СПА хотел • Афьонкарахисар',
    },
    productGroup: {
      tr: '90x150 Spa Havlusu & Şal Yaka Bornoz',
      en: '90x150 Spa Towels & Shawl Collar Bathrobes',
      de: '90x150 Spa-Handtücher & Schalkragen-Bademäntel',
      bg: '90x150 СПА кърпи и халати с шал яка',
    },
    rating: 5,
    content: {
      tr: 'Termal bölümümüz için 90x150 battal boy havlu ve her bedenden büyük bornoz siparişi verdik. Endüstriyel yıkamada çekme veya sertleşme yapmadı, güvenle tavsiye ederim.',
      en: 'We ordered 90x150 jumbo spa towels and adult bathrobes in all sizes for our thermal spa. No shrinkage or hardening even after industrial washing.',
      de: 'Für unseren Thermalbereich haben wir 90x150 XXL-Spa-Tücher und Bademäntel in allen Größen bestellt. Kein Einlaufen oder Verhärten bei Industriewäsche.',
      bg: 'За нашия термален СПА център поръчахме големи кърпи 90x150 и халати във всички размери. Няма свиване или втвърдяване при индустриално пране.',
    },
  },
  {
    id: 5,
    author: 'Zeliha D.',
    role: {
      tr: 'Perakende & Çeyiz Müşterisi • İzmir',
      en: 'Retail Customer • Izmir',
      de: 'Einzelhandelskundin • Izmir',
      bg: 'Клиент на дребно • Измир',
    },
    productGroup: {
      tr: 'Ev Tekstili, Masa Örtüsü & Nevresim',
      en: 'Home Textiles, Tablecloths & Bedding',
      de: 'Heimtextilien, Tischdecken & Bettwäsche',
      bg: 'Домашен текстил, покривки и спално бельо',
    },
    rating: 5,
    content: {
      tr: 'Toptancı olmalarına rağmen adetli ev tekstili ve bornoz siparişimde de çok samimi şekilde yardımcı oldular. Kumaşların dokusu mağaza ürünlerinden çok daha kaliteli.',
      en: 'Even though they are primarily wholesalers, they kindly assisted with my multi-piece home textile and bathrobe order. The cotton texture is far superior to retail chain stores.',
      de: 'Obwohl sie hauptsächlich im Großhandel tätig sind, wurde mir bei meiner Einzelbestellung für Heimtextilien und Bademäntel sehr freundlich geholfen. Höchste Baumwollqualität.',
      bg: 'Въпреки че работят основно на едро, ми помогнаха изключително любезно за поръчката ми на домашен текстил и халати. Материята е с много по-високо качество.',
    },
  },
  {
    id: 6,
    author: 'Kemal Ö.',
    role: {
      tr: 'Pansiyon & Apart İşletmesi • Muğla',
      en: 'Aparthotel Operator • Mugla',
      de: 'Pensions- & Aparthotelbetrieb • Mugla',
      bg: 'Къща за гости и апартхотел • Мугла',
    },
    productGroup: {
      tr: 'Otel Nevresim Takımları & Alez Grubu',
      en: 'Hotel Bedding Sets & Mattress Protectors',
      de: 'Hotel-Bettwäschesets & Matratzenschoner',
      bg: 'Хотелски спални комплекти и протектори',
    },
    rating: 5,
    content: {
      tr: 'Yusuf Aslancan’a ilgi ve alakasından dolayı teşekkür ederiz. Sabah sipariş verdik, aynı gün Denizli ambarına teslim ettiler. Tüm tekstil ihtiyaçlarımızda tek adresimiz.',
      en: 'Special thanks to Yusuf Aslancan for his attention. We placed our order in the morning and it was handed over to the Denizli freight terminal the same day.',
      de: 'Vielen Dank an Yusuf Aslancan für die schnelle Abwicklung. Morgens bestellt und noch am selben Tag an die Spedition in Denizli übergeben.',
      bg: 'Благодарим на Юсуф Асланждан за вниманието. Поръчахме сутринта и още същия ден стоката беше предадена за транспорт от Денизли.',
    },
  },
];

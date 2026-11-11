import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, CheckCircle2, ChevronDown } from 'lucide-react';
import { Language, LocalizedText } from '../data/productsData';

interface ContactSectionProps {
  lang: Language;
  selectedProduct?: string;
}

const QUICK_PRODUCTS_BY_LANG: Record<Language, string[]> = {
  tr: [
    'Otel Havlusu Grubu (50x90 / 70x140 / 90x150)',
    'Otel Nevresim Takımları & Çarşaf',
    'Otel Paspası & Sıvı Geçirmez Alez',
    'Ev Tekstili (Nevresim, Çarşaf, Masa Örtüsü)',
    'Bornoz Grubu (Büyük Bornoz & Çocuk Bornozu)',
    'Stok Ürünler (İhracat Fazlası Kiloluk Havlu)',
  ],
  en: [
    'Hotel Towels (50x90 / 70x140 / 90x150)',
    'Hotel Duvet Cover Sets & Sheets',
    'Hotel Bath Mats & Waterproof Protectors',
    'Home Textiles (Bedding, Sheets, Tablecloths)',
    'Bathrobes (Adult S-XXL & Kids Bathrobes)',
    'Stock Towels (Export-Surplus Per Kg)',
  ],
  de: [
    'Hotelhandtücher (50x90 / 70x140 / 90x150)',
    'Hotelbettwäsche & Bettlaken',
    'Hotel-Badematten & Matratzenschoner',
    'Heimtextilien (Bettwäsche, Laken, Tischdecken)',
    'Bademäntel (Erwachsene S-XXL & Kinder)',
    'Lagerhandtücher (Exportüberschuss pro Kg)',
  ],
  bg: [
    'Хотелски кърпи (50x90 / 70x140 / 90x150)',
    'Хотелски спални комплекти и чаршафи',
    'Хотелски постелки и непромокаеми протектори',
    'Домашен текстил (Спално бельо, чаршафи, покривки)',
    'Халати (За възрастни S-XXL и детски)',
    'Стокови кърпи на килограм (Износен резерв)',
  ],
};

const FAQ_ITEMS: { num: string; q: LocalizedText; a: LocalizedText }[] = [
  {
    num: '01',
    q: {
      tr: 'Türkiye’nin 81 iline ve yurt dışına sevkiyat yapıyor musunuz?',
      en: 'Do you ship across all 81 provinces of Turkey and internationally?',
      de: 'Liefern Sie in alle 81 Provinzen der Türkei sowie international?',
      bg: 'Извършвате ли доставки до всички 81 области в Турция и за чужбина?',
    },
    a: {
      tr: 'Evet. Denizli Merkezefendi Akçeşme 2612 Sokak No: 28/2 merkez depomuzdan Türkiye’nin 81 iline anlaşmalı ambar ve kargo firmalarıyla hızlı gönderim sağlıyoruz.',
      en: 'Yes. From our central warehouse in Denizli (Merkezefendi / Akcesme 2612 St. No: 28/2), we ship rapidly to all 81 provinces via partnered freight and cargo lines.',
      de: 'Ja. Von unserem Zentrallager in Denizli (Merkezefendi / Akcesme 2612 Str. Nr. 28/2) aus versenden wir schnell per Spedition und Fracht.',
      bg: 'Да. От централния ни склад в Денизли (Меркезефенди / кв. Акчешме, ул. 2612 № 28/2) изпращаме бързо чрез спедиторски и карго фирми.',
    },
  },
  {
    num: '02',
    q: {
      tr: 'Sadece toptan mı satış yapıyorsunuz, perakende alım mümkün mü?',
      en: 'Do you sell only wholesale, or are retail orders also possible?',
      de: 'Verkaufen Sie nur im Großhandel oder ist auch Einzelhandel möglich?',
      bg: 'Само на едро ли продавате или е възможна и покупка на дребно?',
    },
    a: {
      tr: 'Ana faaliyetimiz toptan satış olmakla birlikte, sipariş adedine ve ürün grubuna göre perakende alımlarda da müşterilerimize doğrudan yardımcı olmaktayız.',
      en: 'While our primary focus is wholesale, we also directly assist customers with quantity-based retail orders across our product groups.',
      de: 'Unser Schwerpunkt liegt im Großhandel, wir unterstützen unsere Kunden jedoch je nach Menge auch direkt bei Einzelhandelsbestellungen.',
      bg: 'Основната ни дейност е търговията на едро, но съдействаме директно и при поръчки на дребно според количеството.',
    },
  },
  {
    num: '03',
    q: {
      tr: 'İhracat fazlası kiloluk stok havlularda hangi ebatlar ve renkler mevcut?',
      en: 'Which sizes and colors are available in export-surplus per-kilo stock towels?',
      de: 'Welche Größen und Farben gibt es bei den Exportüberschuss-Handtüchern pro Kg?',
      bg: 'Какви размери и цветове има при стоковите кърпи на килограм?',
    },
    a: {
      tr: 'Stok havlu grubumuzda 50x90 cm el/yüz, 70x140 cm banyo ve 90x150 cm battal boylarda; beyaz, krem, gri, antrasit, turkuaz ve mercan tonlarında paketli ürünler tartı (kg) bazlı sunulmaktadır.',
      en: 'Our stock towel line includes 50x90 cm hand, 70x140 cm bath, and 90x150 cm jumbo towels in white, cream, grey, anthracite, turquoise, and coral—packaged and sold by weight (kg).',
      de: 'Unsere Lagerhandtücher umfassen 50x90 cm, 70x140 cm und 90x150 cm in Weiß, Creme, Grau, Anthrazit, Türkis und Koralle — verpackt und nach Gewicht (Kg) verkauft.',
      bg: 'Нашите стокови кърпи включват размери 50x90 см, 70x140 см и 90x150 см в бяло, кремаво, сиво, антрацит, тюркоаз и коралово — пакетирани и продавани на килограм.',
    },
  },
];

const TEXTS: Record<string, LocalizedText> = {
  badge: {
    tr: 'BİZE ULAŞIN • DOĞRUDAN SİPARİŞ & FİYAT TALEBİ',
    en: 'CONTACT US • DIRECT ORDER & QUOTE REQUEST',
    de: 'KONTAKT • DIREKTBESTELLUNG & PREISANFRAGE',
    bg: 'КОНТАКТИ • ДИРЕКТНА ПОРЪЧКА И ЗАПИТВАНЕ ЗА ЦЕНА',
  },
  title: {
    tr: 'Bize Ulaşın — İstediğiniz Ürünü Doğrudan İletin',
    en: 'Contact Us — Send Your Product Request Directly',
    de: 'Kontaktieren Sie uns — Senden Sie Ihre Produktanfrage direkt',
    bg: 'Свържете се с нас — Изпратете директно Вашето запитване',
  },
  subtitle: {
    tr: 'İsim soyisminizi, telefon numaranızı, bulunduğunuz şehri ve istediğiniz ürünü yazıp gönderdiğinizde talebiniz doğrudan 0535 823 58 85 numaralı hattımıza düşer.',
    en: 'Enter your full name, phone number, city, and requested product; your inquiry is delivered directly to our 0535 823 58 85 line.',
    de: 'Geben Sie Ihren Namen, Ihre Telefonnummer, Ihre Stadt und das gewünschte Produkt ein — Ihre Anfrage wird direkt an 0535 823 58 85 gesendet.',
    bg: 'Въведете Вашите имена, телефон, град и желания продукт — запитването Ви се изпраща директно на номер 0535 823 58 85.',
  },
  phoneHeader: {
    tr: 'DOĞRUDAN SİPARİŞ & WHATSAPP HATTI',
    en: 'DIRECT ORDER & WHATSAPP LINE',
    de: 'DIREKTBESTELLUNG & WHATSAPP-HOTLINE',
    bg: 'ДИРЕКТНА ПОРЪЧКА И WHATSAPP ЛИНИЯ',
  },
  addressHeader: {
    tr: 'ADRES & MERKEZ DEPO',
    en: 'ADDRESS & HEADQUARTERS',
    de: 'ADRESSE & ZENTRALLAGER',
    bg: 'АДРЕС И ЦЕНТРАЛЕН СКЛАД',
  },
  addressValue: {
    tr: 'Merkezefendi / Akçeşme Mah. 2612 Sokak No: 28/2 — Aslancan Tekstil, Denizli',
    en: 'Merkezefendi / Akcesme Mah. 2612 St. No: 28/2 — Aslancan Textile, Denizli',
    de: 'Merkezefendi / Akcesme Mah. 2612 Str. Nr. 28/2 — Aslancan Textil, Denizli',
    bg: 'Меркезефенди / кв. Акчешме, ул. 2612 № 28/2 — Асланджан Текстил, Денизли',
  },
  hoursHeader: {
    tr: 'ÇALIŞMA SAATLERİ & SATIŞ MODELİ',
    en: 'WORKING HOURS & SALES MODEL',
    de: 'ÖFFNUNGSZEITEN & VERTRIEBSMODELL',
    bg: 'РАБОТНО ВРЕМЕ И МОДЕЛ НА ПРОДАЖБИ',
  },
  hoursValue: {
    tr: 'Pazartesi – Cumartesi: 08:30 – 18:00',
    en: 'Monday – Saturday: 08:30 – 18:00',
    de: 'Montag – Samstag: 08:30 – 18:00 Uhr',
    bg: 'Понеделник – Събота: 08:30 – 18:00 ч.',
  },
  hoursDesc: {
    tr: 'Toptan satış ağırlıklı olup sipariş adedine göre perakende alımlarda da doğrudan yardımcı olunmaktadır. Türkiye geneli 81 ilde teslimat ve ambar gönderimi sağlanır.',
    en: 'Primarily wholesale with direct support for quantity-based retail orders and freight shipping across all 81 provinces.',
    de: 'Schwerpunkt Großhandel mit direkter Unterstützung bei mengenbasierten Einzelhandelsbestellungen sowie Speditionsversand in alle 81 Provinzen.',
    bg: 'Основно търговия на едро със съдействие и при поръчки на дребно според количеството. Доставка във всички 81 области.',
  },
  callBtn: {
    tr: '0535 823 58 85 Ara',
    en: 'Call 0535 823 58 85',
    de: '0535 823 58 85 Anrufen',
    bg: 'Обадете се: 0535 823 58 85',
  },
  waBtn: {
    tr: 'WhatsApp Hattı',
    en: 'WhatsApp Line',
    de: 'WhatsApp-Kontakt',
    bg: 'WhatsApp връзка',
  },
  formTitle: {
    tr: 'Bize Ulaşın & Ürün Talep Formu',
    en: 'Contact Us & Product Request Form',
    de: 'Kontakt- & Produktanfrageformular',
    bg: 'Форма за контакт и заявка на продукти',
  },
  formSub: {
    tr: 'Bilgilerinizi doldurduğunuzda talebiniz doğrudan 0535 823 58 85 numarasına iletilir.',
    en: 'When submitted, your request is sent directly to 0535 823 58 85.',
    de: 'Nach dem Absenden wird Ihre Anfrage direkt an 0535 823 58 85 übermittelt.',
    bg: 'След попълване Вашата заявка се изпраща директно на номер 0535 823 58 85.',
  },
  field1Label: {
    tr: '1. İsim Soyisim / Firma Adı *',
    en: '1. Full Name / Company Name *',
    de: '1. Vor- und Nachname / Firmenname *',
    bg: '1. Име и фамилия / Име на фирма *',
  },
  field1Placeholder: {
    tr: 'Örn: Ahmet Yılmaz / Grand Otel',
    en: 'e.g., Ahmet Yilmaz / Grand Hotel',
    de: 'z. B. Max Mustermann / Grand Hotel',
    bg: 'напр. Иван Иванов / Хотел Гранд',
  },
  field2Label: {
    tr: '2. Telefon Numaranız *',
    en: '2. Your Phone Number *',
    de: '2. Ihre Telefonnummer *',
    bg: '2. Вашият телефонен номер *',
  },
  field2Placeholder: {
    tr: 'Örn: 05XX XXX XX XX',
    en: 'e.g., +90 5XX XXX XX XX',
    de: 'z. B. +49 / +90 5XX XXX XX XX',
    bg: 'напр. +359 / +90 5XX XXX XX XX',
  },
  field3Label: {
    tr: '3. Bulunduğunuz Şehir (İl / Ülke) *',
    en: '3. Your City / Country *',
    de: '3. Ihre Stadt / Ihr Land *',
    bg: '3. Вашият град / държава *',
  },
  field3Placeholder: {
    tr: 'Örn: İstanbul, Antalya, Ankara, İzmir, Denizli...',
    en: 'e.g., Istanbul, Antalya, Berlin, Sofia, Denizli...',
    de: 'z. B. Berlin, München, Istanbul, Antalya, Denizli...',
    bg: 'напр. София, Пловдив, Варна, Истанбул, Денизли...',
  },
  field4Label: {
    tr: '4. Hangi Ürünü İstiyorsunuz? (Ürün, Ebat ve Miktar) *',
    en: '4. Which Product Would You Like? (Product, Size & Quantity) *',
    de: '4. Welches Produkt wünschen Sie? (Produkt, Größe & Menge) *',
    bg: '4. Какъв продукт желаете? (Продукт, размер и количество) *',
  },
  field4Placeholder: {
    tr: "Örn: 50x90 ve 70x140 otel havlusu 100'er adet, 20 adet L beden bornoz ve 50 kg ihracat fazlası kiloluk havlu fiyatı istiyorum...",
    en: 'e.g., 100 pcs of 50x90 and 70x140 hotel towels, 20 pcs size L bathrobes, and 50 kg export-surplus towels...',
    de: 'z. B. je 100 Stück 50x90 und 70x140 Hotelhandtücher, 20 Stück Bademäntel Größe L und 50 kg Exportüberschuss-Handtücher...',
    bg: 'напр. по 100 бр. хотелски кърпи 50x90 и 70x140, 20 бр. халати размер L и 50 кг стокови кърпи на килограм...',
  },
  sentNotice: {
    tr: 'Talebiniz (İsim Soyisim, Telefon, Şehir ve İstediğiniz Ürün) 0535 823 58 85 numarasına iletilmek üzere hazırlandı.',
    en: 'Your request (Name, Phone, City, and Requested Product) has been prepared for 0535 823 58 85.',
    de: 'Ihre Anfrage (Name, Telefon, Stadt und gewünschtes Produkt) wurde für 0535 823 58 85 vorbereitet.',
    bg: 'Вашата заявка (Име, телефон, град и желан продукт) е подготвена за изпращане към 0535 823 58 85.',
  },
  submitPrimary: {
    tr: '0535 823 58 85 Numarasına Gönder',
    en: 'Send to 0535 823 58 85',
    de: 'An 0535 823 58 85 senden',
    bg: 'Изпрати до 0535 823 58 85',
  },
  submitSecondary: {
    tr: 'Mesaj / Mail Talebi Olarak İlet',
    en: 'Send as Message / Mail Inquiry',
    de: 'Als Nachricht / E-Mail-Anfrage senden',
    bg: 'Изпрати като съобщение / имейл заявка',
  },
  faqHeading: {
    tr: 'Sıkça Sorulan Sorular (Toptan, Perakende & Sevkiyat)',
    en: 'Frequently Asked Questions (Wholesale, Retail & Shipping)',
    de: 'Häufig gestellte Fragen (Großhandel, Einzelhandel & Versand)',
    bg: 'Често задавани въпроси (На едро, на дребно и доставка)',
  },
};

function sanitizeInput(val: string): string {
  return val.replace(/[\u0000-\u001F\u007F<>]/g, '').trim();
}

const ContactSection: React.FC<ContactSectionProps> = ({ lang, selectedProduct }) => {
  const [fullName, setFullName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userCity, setUserCity] = useState('');
  const [requestedProduct, setRequestedProduct] = useState('');
  const [sentNotice, setSentNotice] = useState(false);
  const [openFaq, setOpenFaq] = useState<number>(0);

  const quickProducts = QUICK_PRODUCTS_BY_LANG[lang];

  useEffect(() => {
    if (selectedProduct) {
      setRequestedProduct(sanitizeInput(selectedProduct));
    }
  }, [selectedProduct]);

  const buildDirectMessage = () => {
    const cleanName = sanitizeInput(fullName);
    const cleanPhone = sanitizeInput(userPhone);
    const cleanCity = sanitizeInput(userCity);
    const cleanProduct = sanitizeInput(requestedProduct);

    return [
      `Merhaba Aslancan Tekstil, web sitenizden yeni bir ürün / iletişim talebi var:`,
      ``,
      `• İsim Soyisim: ${cleanName}`,
      `• Telefon Numarası: ${cleanPhone}`,
      `• Bulunduğu Şehir: ${cleanCity}`,
      `• İstediği Ürün / Detay: ${cleanProduct}`,
    ].join('\n');
  };

  const handleSendToPhone = (e: React.FormEvent) => {
    e.preventDefault();
    const message = buildDirectMessage();
    setSentNotice(true);
    window.open(
      `https://wa.me/905358235885?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleSendMailAndPhone = () => {
    if (!fullName.trim() || !userPhone.trim() || !userCity.trim() || !requestedProduct.trim()) {
      const formEl = document.getElementById('bize-ulasin-form') as HTMLFormElement | null;
      if (formEl) formEl.reportValidity();
      return;
    }
    const message = buildDirectMessage();
    setSentNotice(true);
    window.open(
      `https://wa.me/905358235885?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="iletisim" className="py-24 bg-[#F6F3EC] border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1.5px] bg-[#9A743E]" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#9A743E]">
              {TEXTS.badge[lang]}
            </p>
          </div>
          <h2 className="font-luxury text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
            {TEXTS.title[lang]}
          </h2>
          <p className="text-zinc-600 text-base mt-3">{TEXTS.subtitle[lang]}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left: Clean Architectural Contact Details (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-xl p-7 sm:p-9 border border-[#C5A47E]/35 shadow-sm flex flex-col justify-between">
            <div className="divide-y divide-zinc-200">
              <div className="pb-5">
                <span className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                  {TEXTS.phoneHeader[lang]}
                </span>
                <p className="text-sm font-bold text-[#9A743E] mt-1">
                  Aslancan Tekstil — Yusuf Aslancan
                </p>
                <a
                  href="tel:+905358235885"
                  className="font-luxury text-3xl font-bold text-zinc-900 hover:text-[#9A743E] transition-colors mt-1.5 inline-flex items-center gap-2.5"
                >
                  <Phone className="w-6 h-6 text-[#9A743E] shrink-0" />
                  <span>0535 823 58 85</span>
                </a>
              </div>

              <div className="py-5">
                <span className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                  {TEXTS.addressHeader[lang]}
                </span>
                <p className="text-sm sm:text-base font-bold text-zinc-900 mt-1.5 flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-[#9A743E] shrink-0 mt-0.5" />
                  <span>{TEXTS.addressValue[lang]}</span>
                </p>
                <a
                  href="mailto:yaslancan027@gmail.com"
                  className="text-sm font-bold text-zinc-700 hover:text-[#9A743E] transition-colors mt-2.5 inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#9A743E] shrink-0" />
                  <span>yaslancan027@gmail.com</span>
                </a>
              </div>

              <div className="pt-5">
                <span className="block text-xs font-bold uppercase tracking-wider text-zinc-400">
                  {TEXTS.hoursHeader[lang]}
                </span>
                <p className="text-base font-bold text-zinc-900 mt-1">{TEXTS.hoursValue[lang]}</p>
                <span className="text-sm text-zinc-600 block mt-1 leading-relaxed">
                  {TEXTS.hoursDesc[lang]}
                </span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-200 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+905358235885"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white text-sm font-semibold transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#D4AF7A]" />
                <span>{TEXTS.callBtn[lang]}</span>
              </a>
              <a
                href="https://wa.me/905358235885?text=Merhaba%20Aslancan%20Tekstil,%20ürünleriniz%20ve%20fiyatlarınız%20hakkında%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="luxury-shimmer flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-gold-metallic text-zinc-950 text-sm font-bold transition-all whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{TEXTS.waBtn[lang]}</span>
              </a>
            </div>
          </div>

          {/* Right: 4-Field Direct Order & Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-xl p-7 sm:p-9 border border-[#C5A47E]/35 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 mb-6 border-b border-zinc-200">
              <div>
                <h3 className="font-luxury text-2xl font-bold text-zinc-900">
                  {TEXTS.formTitle[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 mt-0.5">{TEXTS.formSub[lang]}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-zinc-950 text-[#E5C99B] px-3.5 py-2 rounded-lg border border-[#C5A47E]/30 whitespace-nowrap self-start sm:self-auto">
                <Phone className="w-3.5 h-3.5 text-[#D4AF7A]" />
                <span>0535 823 58 85</span>
              </span>
            </div>

            <form id="bize-ulasin-form" onSubmit={handleSendToPhone} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 1. Kullanıcının İsim Soyismi */}
                <div>
                  <label
                    htmlFor="contact-fullname"
                    className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5"
                  >
                    {TEXTS.field1Label[lang]}
                  </label>
                  <input
                    id="contact-fullname"
                    name="fullName"
                    type="text"
                    required
                    maxLength={100}
                    autoComplete="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={TEXTS.field1Placeholder[lang]}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 text-zinc-900 text-sm focus:outline-none focus:border-zinc-950"
                  />
                </div>

                {/* 2. Kullanıcının Telefon Numarası */}
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5"
                  >
                    {TEXTS.field2Label[lang]}
                  </label>
                  <input
                    id="contact-phone"
                    name="userPhone"
                    type="tel"
                    required
                    maxLength={30}
                    autoComplete="tel"
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                    placeholder={TEXTS.field2Placeholder[lang]}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 text-zinc-900 text-sm focus:outline-none focus:border-zinc-950"
                  />
                </div>
              </div>

              {/* 3. Hangi Şehirde Olduğu */}
              <div>
                <label
                  htmlFor="contact-city"
                  className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5"
                >
                  {TEXTS.field3Label[lang]}
                </label>
                <input
                  id="contact-city"
                  name="userCity"
                  type="text"
                  required
                  maxLength={100}
                  autoComplete="address-level2"
                  value={userCity}
                  onChange={(e) => setUserCity(e.target.value)}
                  placeholder={TEXTS.field3Placeholder[lang]}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 text-zinc-900 text-sm focus:outline-none focus:border-zinc-950"
                />
              </div>

              {/* 4. Hangi Ürünü / Ne İstediği */}
              <div>
                <label
                  htmlFor="contact-product"
                  className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5"
                >
                  {TEXTS.field4Label[lang]}
                </label>

                {/* Quick Product Group Selector Chips */}
                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  {quickProducts.map((item) => {
                    const isSelected = requestedProduct.includes(item);
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() =>
                          setRequestedProduct((prev) => (prev ? `${item} — ${prev}` : `${item} `))
                        }
                        className={`text-[11px] font-semibold px-2.5 py-1 rounded border transition-colors ${
                          isSelected
                            ? 'bg-zinc-950 text-[#E5C99B] border-zinc-950'
                            : 'bg-[#FAF8F5] text-zinc-700 border-zinc-300 hover:border-[#C5A47E]'
                        }`}
                      >
                        + {item}
                      </button>
                    );
                  })}
                </div>

                <textarea
                  id="contact-product"
                  name="requestedProduct"
                  rows={3}
                  required
                  maxLength={600}
                  value={requestedProduct}
                  onChange={(e) => setRequestedProduct(e.target.value)}
                  placeholder={TEXTS.field4Placeholder[lang]}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 text-zinc-900 text-sm focus:outline-none focus:border-zinc-950"
                />
              </div>

              {sentNotice && (
                <div className="p-3.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{TEXTS.sentNotice[lang]}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <button
                  type="submit"
                  className="luxury-shimmer w-full py-4 px-5 rounded-lg bg-gold-metallic text-zinc-950 font-bold text-sm transition-all shadow-md inline-flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 shrink-0" />
                  <span>{TEXTS.submitPrimary[lang]}</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendMailAndPhone}
                  className="w-full py-4 px-5 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-sm transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#D4AF7A] shrink-0" />
                  <span>{TEXTS.submitSecondary[lang]}</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* SEO-Rich Architectural FAQ Accordion (01 - 03) */}
        <div className="mb-12 bg-white rounded-xl border border-[#C5A47E]/35 p-6 sm:p-8 shadow-sm">
          <h3 className="font-luxury text-xl sm:text-2xl font-bold text-zinc-900 mb-5">
            {TEXTS.faqHeading[lang]}
          </h3>
          <div className="divide-y divide-zinc-200">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={item.num} className="py-3.5 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-[#9A743E]">{item.num}</span>
                      <span className="text-sm sm:text-base font-bold text-zinc-900">
                        {item.q[lang]}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-[#9A743E] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mt-2.5 pl-7">
                      {item.a[lang]}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Embedded Google Map (Merkezefendi / Akçeşme 2612 Sokak 28/2 Denizli) */}
        <div className="rounded-xl overflow-hidden border border-[#C5A47E]/35 bg-white h-[360px] shadow-sm">
          <iframe
            title="Aslancan Tekstil — Merkezefendi Akçeşme 2612 Sokak 28/2 Denizli"
            src="https://maps.google.com/maps?q=Ak%C3%A7e%C5%9Fme+Mahallesi+2612+Sokak+No+28+Merkezefendi+Denizli&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

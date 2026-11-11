import React from 'react';
import AslancanLogo from './AslancanLogo';
import { Language, LocalizedText } from '../data/productsData';

interface FooterProps {
  lang: Language;
}

const FOOTER_BRAND: LocalizedText = {
  tr: 'ASLANCAN TEKSTİL — DENİZLİ',
  en: 'ASLANCAN TEXTILE — DENIZLI',
  de: 'ASLANCAN TEXTIL — DENIZLI',
  bg: 'АСЛАНДЖАН ТЕКСТИЛ — ДЕНИЗЛИ',
};

const FOOTER_ADDR: LocalizedText = {
  tr: 'Merkezefendi / Akçeşme 2612 Sokak No: 28/2 Aslancan Tekstil • Denizli',
  en: 'Merkezefendi / Akcesme 2612 St. No: 28/2 Aslancan Textile • Denizli',
  de: 'Merkezefendi / Akcesme 2612 Str. Nr. 28/2 Aslancan Textil • Denizli',
  bg: 'Меркезефенди / кв. Акчешме, ул. 2612 № 28/2 Асланджан Текстил • Денизли',
};

const FOOTER_CONTACT_LABEL: LocalizedText = {
  tr: 'Yetkili:',
  en: 'Contact:',
  de: 'Ansprechpartner:',
  bg: 'Лице за контакт:',
};

const FOOTER_HOURS: LocalizedText = {
  tr: 'Çalışma Saatleri: 08:30 – 18:00 • Türkiye Geneli 81 İlde Teslimat & Ambar Gönderimi',
  en: 'Working Hours: 08:30 – 18:00 • Nationwide Delivery Across All 81 Provinces',
  de: 'Öffnungszeiten: 08:30 – 18:00 Uhr • Lieferung in alle 81 Provinzen & Export',
  bg: 'Работно време: 08:30 – 18:00 ч. • Доставка във всички 81 области',
};

const FOOTER_RIGHTS: LocalizedText = {
  tr: 'Aslancan Tekstil Denizli. Tüm hakları saklıdır.',
  en: 'Aslancan Textile Denizli. All rights reserved.',
  de: 'Aslancan Textil Denizli. Alle Rechte vorbehalten.',
  bg: 'Асланджан Текстил Денизли. Всички права запазени.',
};

const TAG_1: LocalizedText = {
  tr: 'DENİZLİ ÜRETİM',
  en: 'DENIZLI PRODUCTION',
  de: 'HERSTELLUNG IN DENIZLI',
  bg: 'ПРОИЗВОДСТВО ДЕНИЗЛИ',
};

const TAG_2: LocalizedText = {
  tr: 'TOPTAN & PERAKENDE',
  en: 'WHOLESALE & RETAIL',
  de: 'GROSS- & EINZELHANDEL',
  bg: 'НА ЕДРО И ДРЕБНО',
};

const TAG_3: LocalizedText = {
  tr: '81 İLDE TESLİMAT',
  en: '81-PROVINCE DELIVERY',
  de: 'VERSAND IN 81 PROVINZEN',
  bg: 'ДОСТАВКА В 81 ОБЛАСТИ',
};

const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 pb-24 sm:pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3.5">
            <AslancanLogo className="w-10 h-10 shrink-0" />
            <div>
              <span className="block text-white font-bold text-sm tracking-tight">
                {FOOTER_BRAND[lang]}
              </span>
              <span className="block text-xs text-zinc-400">{FOOTER_ADDR[lang]}</span>
            </div>
          </div>

          <div className="text-xs sm:text-sm text-zinc-300 space-y-1 md:text-right">
            <p>
              {FOOTER_CONTACT_LABEL[lang]} Yusuf Aslancan • Tel: 0535 823 58 85 •
              yaslancan027@gmail.com
            </p>
            <p className="text-zinc-400">{FOOTER_HOURS[lang]}</p>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>
            © {new Date().getFullYear()} {FOOTER_RIGHTS[lang]}
          </p>
          <div className="flex items-center gap-3 text-[11px] font-semibold text-zinc-400">
            <span>{TAG_1[lang]}</span>
            <span>•</span>
            <span>{TAG_2[lang]}</span>
            <span>•</span>
            <span>{TAG_3[lang]}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import AslancanLogo from './AslancanLogo';
import { Language } from '../data/productsData';

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 pb-24 sm:pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <AslancanLogo className="w-9 h-9 shrink-0" />
            <div>
              <span className="block text-white font-bold text-sm tracking-tight">
                {lang === 'tr' ? 'ASLANCAN TEKSTİL — DENİZLİ' : 'ASLANCAN TEXTILE — DENIZLI'}
              </span>
              <span className="block text-xs text-zinc-400">
                {lang === 'tr'
                  ? 'Otel Ürünleri • Ev Tekstili • Bornoz Grubu • İhracat Fazlası Kiloluk Havlular'
                  : 'Hotel Textiles • Home Textiles • Bathrobes • Export-Surplus Per-Kg Towels'}
              </span>
            </div>
          </div>

          <div className="text-xs sm:text-sm text-zinc-300 space-y-1 md:text-right">
            <p>
              {lang === 'tr' ? 'Yetkili:' : 'Contact:'} Yusuf Aslancan • Tel: 0535 037 90 74 •
              yaslancan027@gmail.com
            </p>
            <p className="text-zinc-400">
              {lang === 'tr'
                ? 'Çalışma Saatleri: 08:30 – 18:00 • Türkiye Geneli 81 İlde Teslimat & Ambar Gönderimi'
                : 'Working Hours: 08:30 – 18:00 • Nationwide Delivery Across All 81 Provinces'}
            </p>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>
            © {new Date().getFullYear()}{' '}
            {lang === 'tr'
              ? 'Aslancan Tekstil Denizli. Tüm hakları saklıdır.'
              : 'Aslancan Textile Denizli. All rights reserved.'}
          </p>
          <div className="flex items-center gap-3 text-[11px] font-semibold text-zinc-400">
            <span>{lang === 'tr' ? 'DENİZLİ ÜRETİM' : 'DENIZLI PRODUCTION'}</span>
            <span>•</span>
            <span>{lang === 'tr' ? 'TOPTAN & PERAKENDE' : 'WHOLESALE & RETAIL'}</span>
            <span>•</span>
            <span>{lang === 'tr' ? '81 İLDE TESLİMAT' : '81-PROVINCE DELIVERY'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

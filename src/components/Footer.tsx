import React from 'react';
import AslancanLogo from './AslancanLogo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 pb-24 sm:pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <AslancanLogo className="w-9 h-9 shrink-0" />
            <div>
              <span className="block text-white font-bold text-sm tracking-tight">
                ASLANCAN TEKSTİL — DENİZLİ
              </span>
              <span className="block text-xs text-zinc-400">
                Otel Ürünleri • Ev Tekstili • Bornoz Grubu • İhracat Fazlası Kiloluk Havlular
              </span>
            </div>
          </div>

          <div className="text-xs sm:text-sm text-zinc-300 space-y-1 md:text-right">
            <p>Yetkili: Yusuf Aslancan • Tel: 0535 823 58 85 • yaslancan027@gmail.com</p>
            <p className="text-zinc-400">
              Çalışma Saatleri: 08:30 – 18:00 • 81 İle Anlaşmalı Ambar ile Gönderim
            </p>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} Aslancan Tekstil Denizli. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-3 font-mono text-[11px] text-zinc-400">
            <span>VISA</span>
            <span>•</span>
            <span>MASTERCARD</span>
            <span>•</span>
            <span>TROY</span>
            <span>•</span>
            <span>HAVALE / EFT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

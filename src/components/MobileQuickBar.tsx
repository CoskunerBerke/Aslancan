import React from 'react';
import { Phone, MessageCircle, MessageSquare } from 'lucide-react';
import { Language } from '../data/productsData';

interface MobileQuickBarProps {
  lang: Language;
  onGoToContact: () => void;
}

const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ lang, onGoToContact }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-zinc-950 border-t border-white/15 px-3 py-2.5">
      <div className="grid grid-cols-3 gap-2">
        <a
          href="tel:+905350379074"
          className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-white text-zinc-950 font-semibold text-xs whitespace-nowrap"
        >
          <Phone className="w-3.5 h-3.5 shrink-0" />
          <span>{lang === 'tr' ? 'Hemen Ara' : 'Call Now'}</span>
        </a>
        <a
          href="https://wa.me/905350379074?text=Merhaba%20Aslancan%20Tekstil,%20fiyat%20ve%20ürün%20bilgisi%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-zinc-800 text-white font-semibold text-xs border border-white/15 whitespace-nowrap"
        >
          <MessageCircle className="w-3.5 h-3.5 shrink-0" />
          <span>WhatsApp</span>
        </a>
        <button
          type="button"
          onClick={onGoToContact}
          className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#9A7B56] text-white font-semibold text-xs whitespace-nowrap"
        >
          <MessageSquare className="w-3.5 h-3.5 shrink-0" />
          <span>{lang === 'tr' ? 'Bize Ulaşın' : 'Contact Us'}</span>
        </button>
      </div>
    </div>
  );
};

export default MobileQuickBar;

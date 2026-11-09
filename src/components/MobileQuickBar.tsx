import React from 'react';
import { Phone, MessageCircle, ShoppingBag } from 'lucide-react';

interface MobileQuickBarProps {
  cartCount: number;
  onOpenCheckout: () => void;
}

const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ cartCount, onOpenCheckout }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-zinc-950 border-t border-white/15 px-3 py-2.5">
      <div className="grid grid-cols-3 gap-2">
        <a
          href="tel:+905358235885"
          className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-white text-zinc-950 font-semibold text-xs whitespace-nowrap"
        >
          <Phone className="w-3.5 h-3.5 shrink-0" />
          <span>Hemen Ara</span>
        </a>
        <a
          href="https://wa.me/905358235885?text=Merhaba%20Aslancan%20Tekstil,%20fiyat%20ve%20sipariş%20bilgisi%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-zinc-800 text-white font-semibold text-xs border border-white/15 whitespace-nowrap"
        >
          <MessageCircle className="w-3.5 h-3.5 shrink-0" />
          <span>WhatsApp</span>
        </a>
        <button
          type="button"
          onClick={onOpenCheckout}
          className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#9A7B56] text-white font-semibold text-xs whitespace-nowrap"
        >
          <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
          <span>{cartCount > 0 ? `Sepet (${cartCount})` : 'Sipariş'}</span>
        </button>
      </div>
    </div>
  );
};

export default MobileQuickBar;

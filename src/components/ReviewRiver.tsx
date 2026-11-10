import React from 'react';
import { Star, MessageCircle } from 'lucide-react';
import { reviewsList } from '../data/reviewsData';

const ReviewRiver: React.FC = () => {
  const repeatedReviews = [...reviewsList, ...reviewsList];

  return (
    <section id="yorumlar" className="relative py-24 bg-zinc-950 text-white overflow-hidden">
      {/* Subtle Ambient Gold Glow */}
      <div className="pointer-events-none absolute top-0 left-1/3 w-[420px] h-[420px] rounded-full bg-[#D4AF7A]/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1.5px] bg-[#D4AF7A]" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-metallic">
                MÜŞTERİ & İŞLETME REFERANSLARI
              </p>
            </div>
            <h2 className="font-luxury text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Türkiye Genelinden Otel, Yurt ve Mağaza Yorumları
            </h2>
          </div>
          <a
            href="https://wa.me/905358235885?text=Merhaba%20Aslancan%20Tekstil,%20toptan%20ve%20perakende%20ürünleriniz%20hakkında%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-shimmer inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gold-metallic text-zinc-950 text-sm font-bold transition-all self-start sm:self-auto whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Sipariş Hattı</span>
          </a>
        </div>
      </div>

      <div className="relative z-10 w-full overflow-hidden">
        <div className="flex gap-6 animate-river-continuous w-max px-4">
          {repeatedReviews.map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              className="w-[340px] sm:w-[420px] shrink-0 rounded-xl bg-zinc-900/90 border border-[#C5A47E]/25 hover:border-[#D4AF7A] p-7 flex flex-col justify-between transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#D4AF7A]">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF7A]" />
                    ))}
                  </div>
                  <span className="text-xs text-zinc-400">{review.role}</span>
                </div>
                <p className="text-zinc-100 text-sm leading-relaxed mb-6 italic">
                  "{review.content}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="font-bold text-sm text-white">{review.author}</span>
                <span className="text-xs text-[#E5C99B] font-medium">{review.productGroup}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewRiver;

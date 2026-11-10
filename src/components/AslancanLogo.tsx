import React from 'react';

interface AslancanLogoProps {
  className?: string;
}

const AslancanLogo: React.FC<AslancanLogoProps> = ({ className = 'w-11 h-11' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 80"
      fill="none"
      className={className}
      role="img"
      aria-label="Aslancan Tekstil AT Monogram Logosu"
    >
      <defs>
        <linearGradient id="atGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5E6C8" />
          <stop offset="45%" stopColor="#D4AF7A" />
          <stop offset="75%" stopColor="#FFF5E1" />
          <stop offset="100%" stopColor="#9A743E" />
        </linearGradient>
        <linearGradient id="atIvoryGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E9E2D4" />
        </linearGradient>
      </defs>

      {/* Deep Obsidian Luxury Emblem Base */}
      <rect x="2" y="2" width="76" height="76" rx="14" fill="#0F0F0E" />

      {/* Outer Metallic Gold Crest Border */}
      <rect
        x="3.5"
        y="3.5"
        width="73"
        height="73"
        rx="12.5"
        stroke="url(#atGoldGrad)"
        strokeWidth="1.6"
      />

      {/* Inner Fine Filigree Frame */}
      <rect
        x="7.5"
        y="7.5"
        width="65"
        height="65"
        rx="9"
        stroke="url(#atGoldGrad)"
        strokeWidth="0.75"
        strokeOpacity="0.45"
      />

      {/* Corner Diamond Accents */}
      <path d="M40 5.2L41.8 7L40 8.8L38.2 7Z" fill="url(#atGoldGrad)" />
      <path d="M40 71.2L41.8 73L40 74.8L38.2 73Z" fill="url(#atGoldGrad)" />
      <path d="M5.2 40L7 38.2L8.8 40L7 41.8Z" fill="url(#atGoldGrad)" />
      <path d="M71.2 40L73 38.2L74.8 40L73 41.8Z" fill="url(#atGoldGrad)" />

      {/* Architectural "T" (Tekstil) — Golden Crown Bar & Central Pillar */}
      <path
        d="M17 17H63L61.2 24.5H59C58.2 21.6 56.5 20.6 52.5 20.6H43V57.5C43 60.2 44.2 61 47.2 61V63H32.8V61C35.8 61 37 60.2 37 57.5V20.6H27.5C23.5 20.6 21.8 21.6 21 24.5H18.8L17 17Z"
        fill="url(#atGoldGrad)"
      />

      {/* Interlocking Classical "A" (Aslancan) — Ivory Serif Monogram */}
      <path
        d="M40 21.5L21.5 60.5H18.5V63H29.5V60.5H26.4L30.4 51.5H49.6L53.6 60.5H50.5V63H61.5V60.5H58.5L40 21.5ZM32.2 47.2L40 29.8L47.8 47.2H32.2Z"
        fill="url(#atIvoryGrad)"
      />

      {/* Golden Woven Shuttle Crossbar Accent on the A-T Intersection */}
      <path
        d="M27.5 47.2H52.5"
        stroke="url(#atGoldGrad)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path d="M40 44.2L42.8 47.2L40 50.2L37.2 47.2Z" fill="url(#atGoldGrad)" />
    </svg>
  );
};

export default AslancanLogo;

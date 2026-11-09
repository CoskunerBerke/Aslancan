import React from 'react';

interface AslancanLogoProps {
  className?: string;
}

const AslancanLogo: React.FC<AslancanLogoProps> = ({ className = 'w-10 h-10' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-label="Aslancan Tekstil Denizli Logosu"
    >
      <rect width="64" height="64" rx="10" fill="#141413" />
      <rect
        x="4"
        y="4"
        width="56"
        height="56"
        rx="7"
        stroke="#C5A47E"
        strokeWidth="1.2"
        strokeOpacity="0.55"
      />
      {/* Woven Warp & Weft Loom Threads */}
      <path d="M16 14V50M48 14V50" stroke="#C5A47E" strokeWidth="1" strokeOpacity="0.28" />
      <path d="M14 20H50M14 44H50" stroke="#C5A47E" strokeWidth="1" strokeOpacity="0.28" />
      {/* Architectural A Monogram */}
      <path
        d="M32 14L17 50H23.5L27 41H37L40.5 50H47L32 14ZM29.2 35.5L32 28L34.8 35.5H29.2Z"
        fill="#FAF9F6"
      />
      {/* Golden Weft Shuttle Line */}
      <path d="M21 35.5H43" stroke="#C5A47E" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="32" cy="21" r="1.8" fill="#C5A47E" />
    </svg>
  );
};

export default AslancanLogo;

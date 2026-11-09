/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textile: {
          obsidian: '#111110',
          charcoal: '#1A1917',
          stone: '#F6F4F0',
          alabaster: '#FAF9F6',
          sand: '#E8E3DA',
          taupe: '#8C7A6B',
          bronze: '#9A7B56',
          bronzeDark: '#7D6242',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'river-scroll': 'riverScroll 48s linear infinite',
      },
      keyframes: {
        riverScroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      }
    },
  },
  plugins: [],
};

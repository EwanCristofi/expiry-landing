/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B2422',
          soft: '#2A4542',
          muted: '#5A736F',
        },
        mint: {
          50: '#F2F8F6',
          100: '#E4F1ED',
          200: '#C5E0D8',
          300: '#8FC4B6',
        },
        teal: {
          DEFAULT: '#0F6B61',
          dark: '#0A4F48',
          bright: '#1A8F82',
        },
        sand: {
          DEFAULT: '#F7F5F0',
          warm: '#EDE8DC',
        },
        alert: {
          DEFAULT: '#C45C26',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Outfit"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px -24px rgba(11, 36, 34, 0.28)',
        lift: '0 10px 30px -12px rgba(15, 107, 97, 0.35)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'soft-pulse': {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '0.9' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        float: 'float 6s ease-in-out infinite',
        'soft-pulse': 'soft-pulse 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

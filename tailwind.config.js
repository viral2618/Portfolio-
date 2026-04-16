/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'] },
      colors: {
        primary: '#7c3aed',
        secondary: '#a78bfa',
        accent: '#06b6d4',
        amber: '#f59e0b',
        dark: '#05050f',
        surface: '#0d0d1e',
        card: '#111128',
        border: '#1e1e3a',
      },
      animation: {
        'gradient-shift': 'gradient-shift 5s ease infinite',
        float: 'float 7s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'pulse-ring': 'pulse-ring 2.5s ease-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-24px) rotate(3deg)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(124,58,237,0.4)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 12px rgba(124,58,237,0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(124,58,237,0)' },
        },
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
        'tech': ['Orbitron', 'Rajdhani', 'system-ui', 'sans-serif'],
      },
      colors: {
        coral: {
          300: '#FFA07A',
          400: '#FF7F50',
          500: '#FF6347',
          600: '#FF4500',
        },
        electric: {
          400: '#00FFFF',
          500: '#00E5FF',
          600: '#00BCD4',
        },
        steel: {
          700: '#37474F',
          800: '#263238',
          900: '#1A1A1A',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'glitch': 'glitch 2s infinite',
        'scan': 'scan 3s linear infinite',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        scan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
      },
    },
  },
  plugins: [],
};

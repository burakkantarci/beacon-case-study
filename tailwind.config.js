/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111114',
        coal: '#1f2328',
        slate: '#2f3944',
        fog: '#f2eee9',
        sand: '#d8c8b6',
        rust: '#be5f3b',
        signal: '#f2a93b',
        harbor: '#2f5975',
        moss: '#466057',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'serif'],
        body: ['"Public Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        plate: '0 20px 45px -20px rgba(17, 17, 20, 0.45)',
      },
      backgroundImage: {
        grain:
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
}


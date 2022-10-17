/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    'index.html'
  ],
  fontFamily: {
    body: ['Poppins', 'sans-serif']
  },
  theme: {
    screens: {
      'sm': '300px',
      'md': '640px',
      '2md':'800px',
      'lg': '1024px',
      'xl': '1260px'
    },
    extend: {
      colors: {
        main: {
          50: '#F7F5FF',
         100: '#F1ECFF',
         300: '#A594E2',
         500: '#685F8C',
         700: "#4F4869"
        }
      },
      animation: {
        'descent': 'descent 2s forwards',
        'turningVisible': 'turningVisible 2s 6s forwards'
      },
      keyframes: {
        'descent': { 
         'from': { transform: 'translateY(-120px)', opacity: 0 },
         'to': {transform: 'translateY(0)', opacity: 1} 
        },
        'turningVisible': {
          'from': { opacity: 0 },
          'to': { opacity: 1 }
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

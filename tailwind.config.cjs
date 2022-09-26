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
      'lg': '1024px'
    },
    extend: {
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
  plugins: [],
}

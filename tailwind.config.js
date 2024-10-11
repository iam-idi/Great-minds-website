/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs': '400px',
      },
      animation:{
        'vertical-spin': 'verticalspin 40s linear infinite'
      },
      keyframes:{
        verticalspin: {
          'from': {transform: 'rotatey(360deg)'},
          'to': {transform: 'rotatey(0deg)'}
        }
      }
    },
  },
  plugins: [],
}

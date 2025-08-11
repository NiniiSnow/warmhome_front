/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        main:"rgb(220 182 92)",
        floral: {
          white: '#F3F3F3',
          powderBlue: '#A8C9F0',
          skyBlue: '#78AEEB',
          periwinkle: '#5C8ACF',
          blushPink: '#E6CDD6',
          lavender: '#C8C7E5',
          mist: '#D6DDEB',
        }
      }
    },
  },
  plugins: [],
}


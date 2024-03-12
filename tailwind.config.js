/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
      },
      fontFamily: {
        body: ['Montserrat'],
      },
      fontSize: {
        titleclamp: 'clamp(2rem, 3.5vw, 10rem)',
        subtitleclamp: 'clamp(1rem, 1.5vw, 5rem)',
      },
    },
  },
  plugins: [],
};


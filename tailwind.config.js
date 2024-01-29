const color1 = '#0d1b2a';
const color2 = '#1b263b';
const color3 = '#415a77';
const color4 = '#778da9';
const color5 = '#e0e1dd';


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: true,
  theme: {
    extend: {
      colors: {
        color1,
        color2,
        color3,
        color4,
        color5,
      },
    },
  },
  plugins: [],
}


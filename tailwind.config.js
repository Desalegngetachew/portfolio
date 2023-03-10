/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // darkMode: false, // or 'media' or 'class'
  darkMode: 'class',
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {},
  },
  // variants: {
  //   extend: {},
  // },
  plugins: [],
}
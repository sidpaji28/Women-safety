/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {fontFamily: {
      osake: ['Osake', 'cursive'], // Add fallback
    },},
  },
  plugins: [require("tailwind-scrollbar-hide")],
}


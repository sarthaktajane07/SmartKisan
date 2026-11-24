/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        farm: {
          dark: '#1B3B2F',
          forest: '#2E4635',
          emerald: '#23523B',
          light: '#F5F5DC',
          accent: '#66BB6A',
          gold: '#FBC02D',
          goldLight: '#FFD54F',
          beige: '#FAF7EE'
        }
      }
    },
  },
  plugins: [],
}

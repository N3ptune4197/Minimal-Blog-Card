/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {


      colors: {
        'tag-text': '#883AE1',
        'cactus-bg': '#E6D6FC',
        'shadow': '#E5EAF0',
        'general-bg': '#FAFAF9',
        'title-color': '#20293A',
        'paragraph': '#6C727F',
      },

      fontFamily: {
        'sara': ['"Sora"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


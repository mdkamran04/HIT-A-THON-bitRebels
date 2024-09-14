/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/bg.png')",
        'hero-pattern-dark' : "url('/img/bg-dark.png')"
      },
      colors: {
        'main-colour': '#076194',
        'other-colour' : '#BFD2F8',
        'main-w':'#076094a0',
        'text-colour' : '#0E6FA6'
      },
    },
  },
  plugins: [],
}
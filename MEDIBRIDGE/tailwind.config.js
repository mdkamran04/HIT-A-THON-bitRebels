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
      },
      colors: {
        'main-colour': '#076194',
      },
    },
  },
  plugins: [],
}
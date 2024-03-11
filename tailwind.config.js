/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  //tailwind docs refered me to add below line to toggle dark mode by my custom toggler
  darkMode: "selector",
  theme: {
    extend: {},
  },
  plugins: [],
}
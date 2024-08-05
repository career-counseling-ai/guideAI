/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#eff1f4'
      }
    },
  },
  plugins: [],
}
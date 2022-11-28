/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  important: '#app',
  theme: {
    extend: {
      spacing: {
        'header': '400px',
      },
      colors: {
        'header': '#f8f8f8',
        'header-hover': "#e7e9eb",
        "icon": "#abafb3",
        "tag-family": "#2e6dee",
        "tag-work": "#2fac2b",
        "tag-holidays": "#914ac6",
        "tag-events": "#ff5958"
      },
      screens: {
        md: { max: "1100px" }, 
        sm: { max: "600px"},
      },
    },
  },
  plugins: [],
}

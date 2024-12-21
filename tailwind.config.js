/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "24px",
      },
      colors: {
        "orange": "#E67E22",
        "light-dark": "#4D4D4D",
      },
      fontSize: {
        "custom-xl": "40px",
        "custom-2xl": "96px",
      },
      lineHeight: {
        110: "110%",
        120: "120%",
        125: "125%",
        130: "130%",
        140: "140%",
        150: "150%",
      },
    },
  },
  plugins: [],
}
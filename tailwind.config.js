/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: "media", // Enables media-based dark mode (prefers-color-scheme)
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandLighter: "#BAEBFF",
        brandLight: "#5DBEFB",
        brandDark: "#0B73DA",
        brandPrimary: "#2498F4",
        borderColor:"#c0c0c0",      
        borderColorDark:"#c0c0c0",
        stops:"#ffffff",
        middle:"#F7F7F7",
        bottom:"#F0F0F0",
        topDark:"#303030",
        middleDark:"#202020",
        bottomDark:"#101010",
        textColor:"#000",
        textColorDark:"#fff", 
},
      fontFamily: {
        sans: ["Tahoma", "Verdana", "Geneva", "sans-serif"],
      },
    },
  },
  plugins: [],
};

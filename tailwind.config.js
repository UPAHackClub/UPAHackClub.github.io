const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["polt"],
      },
    },
  },
  variants: {
    extend: { padding: ["hover"] },
  },
  plugins: [],
};

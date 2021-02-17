const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        grey: "2px solid #D5D5D5",
      },
      fontFamily: {
        sans: ["polt"],
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["focus", "active"],
    },
  },
  plugins: [],
};

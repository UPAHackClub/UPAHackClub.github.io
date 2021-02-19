const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      custom: ["Polt", "sans-serif"],
    },
    extend: {
      outline: {
        grey: "2px solid #D5D5D5",
      },
    },
    colors: {
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.lightBlue,
      purple: colors.purple,
      green: colors.green,
      white: colors.white,
      black: colors.black,
    },
  },
  variants: {
    extend: {
      borderColor: ["focus", "active"],
    },
  },
  plugins: [],
};

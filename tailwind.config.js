const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

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
    colors: {
      amber: colors.amber,
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.lightBlue,
      purple: colors.purple,
      green: colors.green,
      orange: colors.orange,
      yellow: colors.yellow,
      lime: colors.lime,
      white: colors.white,
      emerald: colors.emerald,
    },
  },
  variants: {
    extend: {
      borderColor: ["focus", "active"],
    },
  },
  plugins: [],
};

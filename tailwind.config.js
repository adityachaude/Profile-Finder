/** @type {import('tailwindcss').Config} */
module.exports = {
  parser: "postcss-scss",
  content: ["*/*.html", "*.html", "*/*/*.html", "*/*/*/*.html"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require('@tailwindcss/aspect-ratio'),],
};

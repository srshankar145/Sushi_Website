/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./public/**/*.html",
    "./public/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        mini: "400px",
      },
      fontFamily: {
        Afacad: ["Afacad", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "shadow-mdl1": "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        all4sdw: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        "custom-1": "rgba(0, 0, 0, 0.16) 0px 3px 6px",
        "custom-2": "rgba(0, 0, 0, 0.23) 0px 3px 6px",
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
};

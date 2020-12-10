// See https://tailwindcss.com/docs/configuration for details

module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    filter: {
      // defaults to {}

      none: "none",
      grayscale: "grayscale(1)",
      invert: "invert(1)",
      sepia: "sepia(1)",
    },
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      half_screen: "50vh",
      "screen/2/3": "calc(100vh / 1.5)",
    },
    extend: {
      fontFamily: {
        raleway: ["raleway", "sans-serif"],
      },

      height: (theme) => ({
        "screen/2": "50vh",
        "screen/2/3": "calc(100vh / 1.5)",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),

      colors: {
        "grc-navy": "#11204D",
        "grc-blue": "#234099",
        "grc-light-blue": "#4766C6",
        "grc-red": "#EE2029",
        "grc-green": "#2A9145",
        "grc-yellow": "#E1BB00",
      },
    },
  },
  variants: {
    filter: ["responsive"], // defaults to ['responsive']
    scrollSnapType: ["responsive"],
  },
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms", "tailwindcss-filters")],
  plugins: [require("tailwindcss-scroll-snap")],
};

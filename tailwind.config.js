/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
     
      black: {
        "50": "#191919",
        "100": "#000",
      },
      blue: {
        "25": "#3386FF",
        "50": "#0B0D21",
        "100": "#1B088C",
      },
      white: {
        "25": "#e5e5e5",
        "50": "#737373",
        "100": "#fff",
      },
      pink: {
        "50": "#FFDFD3",
        "100": "#957DAD",
        "200": "#C004DE",
      },
      red: {
        "50": "rgba(169, 37, 53, 0.69);",
        "100": "#8350DF",
      },
    },
    fontFamily: {
      'montserat': ["'Montserrat', sans-serif"],
      'poppins': ["'Poppins', sans-serif"]
    }
  },
  plugins: [],
}

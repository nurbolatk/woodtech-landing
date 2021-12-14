module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      raleway: ["Raleway", "system-ui", "sans-serif"],
      roboto: ["Roboto", "system-ui", "sans-serif"],
    },
    extend: {
      colors: {
        accent: "#f88500",
      },
      textColor: {
        black: "#333333",
        white: "#999999",
      },
    },
  },
  plugins: [],
};

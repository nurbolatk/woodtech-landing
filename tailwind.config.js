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
      },
      backgroundColor: {
        "see-through": "rgba(196, 196, 196, 0.2)",
        dark: "#202328",
        darker: "#171a1a",
      },
    },
  },
  plugins: [],
};

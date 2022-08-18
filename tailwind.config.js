/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "425px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "2x": "2560px",
    },
    colors: {
      primary: "#000000",
      secondary: "#dddddd",
      third: "#FF0080",
      trans: "#00000000",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    animation: {
      pulseR: "pulseR 3s linear infinite",
      pulseF: "pulseF 3s linear infinite",
    },
    width: {
      vw: "100vw",
      "vw/2": "50vw",
    },
    height: {
      vh: "100vh",
      "vh/2": "50vh",
    },
    extend: {
      spacing: {
        vw: "100vw",
        vh: "100vh",
        "vw/2": "50vw",
        "vh/2": "50vh",
      },
      keyframes: {
        pulseR: {
          "0%": { opacity: ".5" },
          "50%": { opacity: "1" },
          "100%": { opacity: ".5" },
        },
        pulseF: {
          "0%": { opacity: "1" },
          "50%": { opacity: ".5" },
          "100%": { opacity: "1" },
        },
      },
    },
    corePlugins: {
      preflight: false,
    },
  },
  plugins: [],
};

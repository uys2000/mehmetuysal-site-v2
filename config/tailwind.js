/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
  ],
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
      pulseC: "pulseC 1s linear infinite",
      pulseR: "pulseR 3s linear infinite",
      pulseF: "pulseF 3s linear infinite",
      openM: "openM 3s linear",
      openC: "openC 3s linear",
    },
    extend: {
      keyframes: {
        pulseC: {
          "0%": { "background-color": "black" },
          "50%": { "background-color": "black" },
          "51%": { "background-color": "white" },
          "100%": { "background-color": "white" },
        },
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
        openM: {
          "0%": { height: "0px" },
          "100%": { height: "400px" },
        },
        openC: {
          "0%": { height: "400px" },
          "100%": { height: "0px" },
        },
      },
      zIndex: {
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
      },
    },
    corePlugins: {
      preflight: false,
    },
  },
  plugins: [],
};

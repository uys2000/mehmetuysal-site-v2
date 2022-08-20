import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  tailwindcss: {
    configPath: "./config/tailwind.js",
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
  nitro: {
    preset: "node-server",
  },
});

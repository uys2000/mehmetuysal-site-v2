import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],
  buildModules: ["@pinia/nuxt"],
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY, // can be overridden by NUXT_API_SECRET environment variable
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY, // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    },
  },
  pinia:{
    autoImports: [
      // automatically imports `usePinia()`
      'defineStore',
    ],
  },
  tailwindcss: {
    configPath: "./config/tailwind.js",
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
  nitro: {
    preset: "aws-lambda",
    serveStatic: true,
  },
});

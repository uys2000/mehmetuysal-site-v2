import { defineStore } from "pinia";

export default defineStore("page", {
  state: () => ({
    direction: "rl", // rl : rightToLeft, lr, bt, tb
    // History of pages
    pages: {
      t: "t", // topPage
      l: "l", // leftPage
      c: "c", // centerPage
      r: "r", // rightPage
      b: "b", // bottomPage
    },
  }),
});

import { defineStore } from "pinia";

export default defineStore("page", {
  state: () => ({
    direction: "rl", // rl : rightToLeft, lr, bt, tb
    side: "",
    time: 1000,
    center: `left:100vw; top:100vh;`,
    pages: {
      t: "t",
      l: "l",
      c: "c",
      r: "r",
      b: "b",
    },
    positions: {
      t: `left:100vw; top:0vh;`,
      l: `left:0vh;   top:100vh;`,
      c: `left:100vw; top:100vh;`,
      r: `left:200vw; top:100vh;`,
      b: `left:100vw; top:200vh;`,
    },
    indexes: {
      t: "z-10",
      l: "z-10",
      c: "z-10",
      r: "z-10",
      b: "z-10",
    },
  }),
  actions: {
    setSide(value) {
      this.side = value;
    },
    updateIndexes() {
      this.indexes = {
        t: "z-10",
        l: "z-10",
        c: "z-10",
        r: "z-10",
        b: "z-10",
      };
    },
  },
});

import { defineStore } from "pinia";

export default defineStore("page", {
  state: () => ({
    direction: "rl", // rl : rightToLeft, lr, bt, tb
    side: "",
    time: 1000,
    center: `left:${window.innerWidth}px; top:${window.innerHeight}px;`,
    pages: {
      t: "t",
      l: "l",
      c: "c",
      r: "r",
      b: "b",
    },
    positions: {
      t: `left:${window.innerWidth}px; top:0px;`,
      l: `left:0px; top:${window.innerHeight}px;`,
      c: `left:${window.innerWidth}px; top:${window.innerHeight}px;`,
      r: `left:${window.innerWidth * 2}px; top:${window.innerHeight}px;`,
      b: `left:${window.innerWidth}px; top:${window.innerHeight * 2}px;`,
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
    updatePositons() {
      this.center = `left:${window.innerWidth}px; top:${window.innerHeight}px;`;
      this.positions = {
        t: `left:${window.innerWidth}px; top:0px;`,
        l: `left:0px; top:${window.innerHeight}px;`,
        c: `left:${window.innerWidth}px; top:${window.innerHeight}px;`,
        r: `left:${window.innerWidth * 2}px; top:${window.innerHeight}px;`,
        b: `left:${window.innerWidth}px; top:${window.innerHeight * 2}px;`,
      };
    },
  },
});

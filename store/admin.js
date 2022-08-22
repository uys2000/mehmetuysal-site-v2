import { defineStore } from "pinia";

export default defineStore("admin", {
  state: () => ({
    isLogged: false,
  }),
  actions: {
    setSide(value) {
      this.side = value;
    },
  },
});

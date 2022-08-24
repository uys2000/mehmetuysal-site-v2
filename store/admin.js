import { defineStore } from "pinia";

export default defineStore("admin", {
  state: () => ({
    isLogged: true,
    page: "Info",
    user: {},
  }),
  actions: {
    setPage(value) {
      this.page = value;
    },
  },
});

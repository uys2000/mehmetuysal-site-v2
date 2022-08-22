import { defineStore } from "pinia";

export default defineStore("terminal", {
  state: () => ({
    us: "[ -- - ] $",
    ul: "[guest@mehmetuysal.tech root] $",
    inputs: [],
    outputs: [],
    commands: {},
  }),
  actions: {
    addInput: function (value) {
      this.inputs.push(value);
    },
    addOutput: function (value) {
      this.outputs.push(value);
    },
    checkCommands: function (value) {
      return Object.keys(this.commands).some((item) => item == value);
    },
    getCommands: function () {
      getCollection("commands").then((res) => {
        this.commands = res;
      });
    },
  },
  getters: {
    getUserText: (state) => {
      return `<span class="md:hidden">${state.us}</span>
      <span class="hidden md:inline">${state.ul}</span>`;
    },
  },
});

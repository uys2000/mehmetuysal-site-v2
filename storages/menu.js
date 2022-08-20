import { defineStore } from "pinia";

export default defineStore("menu", {
  state: () => ({
    scene: `perspective: 500vw;`,
    container: `
    width: 300vw;
    height:300vh;
    left:-100vw ;
    top:-100vh ;
   `,
    trueMenuStyle: `
    transform: translateX(-25%)
    translateZ(-1000vw)
    translateY(-66%)
    rotateY(60deg);`,
    falseMenuStyle: "transform: translateX(0) translateZ(0) rotateY(0);",
    trueRightMenuStye: "transform:translateX(0) rotateY(0);",
    falseRightMenuStye: "transform:translateX(100%) rotateY(90deg);",
    isMenuOpen: false,
  }),
  actions: {
    setMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
  getters: {
    getMenuStyle: (state) =>
      state.isMenuOpen ? state.trueMenuStyle : state.falseMenuStyle,
    getRightMenuStyle: (state) =>
      state.isMenuOpen ? state.trueRightMenuStye : state.falseRightMenuStye,
  },
});

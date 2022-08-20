import { defineStore } from "pinia";

export default defineStore("menu", {
  state: () => ({
    scene: `perspective: ${window.innerWidth * 5}px;`,
    container: `
          width:${window.innerWidth * 3}px;
          height:${window.innerHeight * 3}px;
          left:-${window.innerWidth}px;
          top:-${window.innerHeight}px;
         `,
    trueMenuStyle: `
         transform: translateX(-25%)
         translateZ(-${window.innerWidth * 10}px)
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
    updatePositons() {
      this.scene = `perspective: ${window.innerWidth * 5}px;`;
      this.container = `
          width:${window.innerWidth * 3}px;
          height:${window.innerHeight * 3}px;
          left:-${window.innerWidth}px;
          top:-${window.innerHeight}px;
         `;
      this.trueMenuStyle = `
          transform: translateX(-25%)
          translateZ(-${window.innerWidth * 10}px)
          translateY(-66%)
          rotateY(60deg);`;
    },
  },
  getters: {
    getMenuStyle: (state) =>
      state.isMenuOpen ? state.trueMenuStyle : state.falseMenuStyle,
    getRightMenuStyle: (state) =>
      state.isMenuOpen ? state.trueRightMenuStye : state.falseRightMenuStye,
  },
});

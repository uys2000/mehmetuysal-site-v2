import { defineStore } from "pinia";

export const infoPage = defineStore("infoPage", {
  state: () => ({
    blobImg: null,
    newImg: "",
    oldImg: "",
    contTR:"",
    contEn:"",
    dateTR:"",
    dateEn:"",
  }),
  actions: {
    setText(value) {
      this.img = value;
    },
    setImg(value) {
      this.text = value;
    },
    clearImg() {
      this.blobImg = null;
      this.newImg = "";
    },
    setNewImg(value) {
      this.blobImg = value.target.files[0];
      const fr = new FileReader();
      fr.addEventListener("loadend", (file) => {
        this.newImg = file.target.result;
      });
      fr.readAsDataURL(this.blobImg);
    },
  },
  getters: {
    getMenuStyle: (state) =>
      state.isMenuOpen ? state.trueMenuStyle : state.falseMenuStyle,
  },
});

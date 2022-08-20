<template>
  <button
    class="absolute invisible md:visible px-6 py-2 active:text-third z-50"
    :style="style[side]"
    @click="clickEvent"
  >
    <slot />
  </button>
</template>
<script>
import pageStorage from "@/storages/pageStorage";
import { setPage, changePageListener } from "@/services/changePage";
export default {
  props: ["side"],
  data() {
    return {
      style: {
        t: "left:50%; top:20px; transform: translate(-50%, 0)",
        l: "left:5px; top:50%; transform: translate(0, -50%) rotate(90deg)",
        r: "right:5px; top:50%; transform: translate(0, -50%) rotate(-90deg)",
        b: "left:50%; bottom:20px; transform: translate(-50%, 0)",
      },
      counter: 0,
      pageStorage: pageStorage(),
    };
  },
  methods: {
    clickEvent: function () {
      const iCounter = () => this.counter++;
      const dCounter = () => this.counter--;
      setPage(this.side, this.pageStorage, iCounter, dCounter);
    },
  },
  watch: {
    counter(nVal, oVal) {
      const dCounter = () =>
        this.counter > 4 ? (this.counter = 4) : this.counter--;
      changePageListener(
        nVal,
        oVal,
        this.side,
        this.pageStorage,
        dCounter,
      );
    },
  },
};
</script>

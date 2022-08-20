<template>
  <div>
    <button @click="clickEvent(side)">
      <slot />
    </button>
  </div>
</template>
<script>
import { setPage, changePageListener } from "@/services/changePage";
import pageStorage from "@/storages/pageStorage";
export default {
  props: ["side"],
  data() {
    return {
      counter: 0,
      pageStorage: pageStorage(),
    };
  },
  methods: {
    clickEvent: function (side) {
      const iCounter = () => this.counter++;
      const dCounter = () => this.counter--;
      setPage(side, this.pageStorage, iCounter, dCounter, true);
    },
  },
  watch: {
    counter(nVal, oVal) {
      const dCounter = () =>
        this.counter > 2 ? (this.counter = 1) : this.counter--;
      changePageListener(
        nVal,
        oVal,
        this.side,
        this.pageStorage,
        dCounter,
        true
      );
    },
  },
};
</script>

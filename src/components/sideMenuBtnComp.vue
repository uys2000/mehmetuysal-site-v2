<template>
  <button
    class="absolute invisible md:visible px-6 py-2 active:text-third"
    :style="style[side]"
    @click="changePage(side)"
  >
    <slot />
  </button>
</template>
<script>
import pageStorage from "@/storages/pageStorage";
import { changePage } from "@/services/pageChangeAnimation";
export default {
  props: ["side"],
  data() {
    return {
      style: {
        t: "left:50%; top:20px; transform: translate(-50%, 0)",
        l: "left:5px; top:50%; transform: translate(0, -50%) rotate(90deg)",
        r:
          "right:5px; top:50%; transform: translate(0, -50%) rotate(-90deg)",
        b: "left:50%; bottom:20px; transform: translate(-50%, 0)",
      },
      pageStorage: pageStorage(),
    };
  },
  methods: {
    changePage: function (side) {
      changePage(side, this.pageStorage);
    },
  },
};
</script>

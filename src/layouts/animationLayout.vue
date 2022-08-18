<template>
  <div class="static overflow-hidden" :style="`${scene}`">
    <div
      class="relative grid grid-cols-3 transition-all duration-1000"
      :style="`${container} ${isTurned ? tT : tF}`"
    >
      <router-view />
    </div>
  </div>
  {{ isTurned ? tT : tF }}
  <div class="fixed top-1 left-1">
    <button @click="isTurned = !isTurned">open</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      scene: `perspective: ${window.innerWidth * 5}px;`,
      container: `
          width:${window.innerWidth * 3}px;
          height:${window.innerHeight * 3}px;
          left:-${window.innerWidth}px;
          top:-${window.innerHeight}px;
         `,
      tT: `
          transform: translateX(-25%)
          translateZ(-${window.innerWidth * 10}px)
          translateY(-66%)
          rotateY(60deg);`,
      tF: `transform: translateX(0) translateZ(0) rotateY(0);`,
      isTurned: false,
    };
  },
  methods: {
    onResize: function () {
      this.scene = `perspective: ${window.innerWidth * 5}px;`;
      this.container = `
          width:${window.innerWidth * 3}px;
          height:${window.innerHeight * 3}px;
          left:-${window.innerWidth}px;
          top:-${window.innerHeight}px;
         `;
      this.tT = `
          transform: translateX(-25%)
          translateZ(-${window.innerWidth * 10}px)
          translateY(-66%)
          rotateY(60deg);`;
    },
  },
  created() {
    window.addEventListener("resize", this.onResize);
  },
  unmounted() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>
,

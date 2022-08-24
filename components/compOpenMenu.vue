<template>
  <div class="t h-min">
    <div @click="isOpen = !isOpen">
      <button class="w-full h-full">
        <slot name="out" />
      </button>
    </div>
    <div class="o a" :class="isOpen ? ma : mi">
      <slot name="in" />
    </div>
  </div>
</template>
<script>
export default {
  props: ["min", "max"],
  data() {
    return {
      isOpen: false,
      mi: this.min ? this.min : "h-[0%]",
      ma: this.max ? this.max : "h-[100%]",
    };
  },
};
</script>
<style>
.o {
  overflow: hidden;
}
.t,
.t .a {
  transition: 1s;
}
</style>

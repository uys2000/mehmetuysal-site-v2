<template>
  <div class="t h-min divide-y-2">
    <div @click="isOpen = !isOpen">
      <button class="w-full h-full text-3xl">
        <slot name="out" />
      </button>
    </div>
    <div
      class="o a text-2xl"
      :class="isOpen ? `h-[140px]` : 'h-[0px]'"
    >
      <slot name="in" />
      <div v-for="button in buttons" :key="button">
        <button class="h-[35px]" @click="clickFunc(button)">
          {{ button }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["buttons", "clickFunc"],
  data() {
    return {
      isOpen: false,
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

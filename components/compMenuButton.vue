<template>
  <div class="fixed right-5 top-5">
    <button class="relative t" @click="clickEvent">
      <div
        class="w-10 h-1 border border-third border-solid rounded-lg"
        :class="{
          '-rotate-45': click,
          'translate-y-2': click,
        }"
      />
      <div class="w-10 h-3" />
      <div
        class="w-10 h-1 border border-third border-solid rounded-lg"
        :class="{
          'rotate-45': click,
          '-translate-y-2': click,
        }"
      />
    </button>
  </div>
</template>
<script>
export default {
  emits: ["click"],
  data() {
    return {
      click: false,
    };
  },
  methods: {
    clickEvent: function () {
      this.click = !this.click;
      this.$emit("click");
    },
  },
};
</script>
<style scoped>
.t * {
  transition: 0.5s linear;
}
</style>

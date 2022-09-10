<template>
  <div class="fixed right-5 top-5">
    <button class="relative t" @click="clickEvent">
      <div
        class="w-10 h-1 border border-third border-solid rounded-lg"
        :class="{
          '-rotate-45': menu.isMenuOpen,
          'translate-y-2': menu.isMenuOpen,
        }"
      />
      <div class="w-10 h-3" />
      <div
        class="w-10 h-1 border border-third border-solid rounded-lg"
        :class="{
          'rotate-45': menu.isMenuOpen,
          '-translate-y-2': menu.isMenuOpen,
        }"
      />
    </button>
  </div>
</template>
<script>
import menu from "~~/store/menu";
menu;
export default {
  emits: ["click"],
  data() {
    return {
      menu: menu(),
    };
  },
  methods: {
    clickEvent: function () {
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

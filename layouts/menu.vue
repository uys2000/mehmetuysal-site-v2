<template>
  <div class="static overflow-hidden" :style="`${menuStorage.scene}`">
    <div
      class="relative transition-all duration-1000"
      :style="`${menuStorage.container} ${menuStorage.getMenuStyle}`"
    >
      <slot />
    </div>
  </div>
  <div class="fixed right-0 top-0 t" :style="menuStorage.getRightMenuStyle">
    <comp-side-menu />
  </div>
  <comp-menu-button @click="menuStorage.setMenu" />
</template>
<script>
import page from "../store/page";
import menu from "../store/menu";
export default {
  layout: "menu",
  data() {
    return {
      pageStorage: page(),
      menuStorage: menu(),
    };
  },
};
</script>
<style scoped>
.t {
  transition: 0.5s;
}
</style>

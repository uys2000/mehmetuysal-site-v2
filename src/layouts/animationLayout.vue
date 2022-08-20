<template>
  <div class="static overflow-hidden" :style="`${menuStorage.scene}`">
    <div
      class="relative transition-all duration-1000"
      :style="`${menuStorage.container} ${menuStorage.getMenuStyle}`"
    >
      <router-view />
    </div>
  </div>
  <div class="fixed right-0 top-0 t" :style="menuStorage.getRightMenuStyle">
    <popup-menu-comp />
  </div>
  <popup-menu-btn-comp @click="menuStorage.setMenu" />
</template>
<script>
import pageStorage from "@/storages/pageStorage";
import menuStorage from "@/storages/menuStorage";
import popupMenuBtnComp from "@/components/popupMenuBtnComp.vue";
import popupMenuComp from "@/components/popupMenuComp.vue";
export default {
  components: { popupMenuBtnComp, popupMenuComp },
  data() {
    return {
      pageStorage: pageStorage(),
      menuStorage: menuStorage(),
    };
  },
  methods: {
    onResize: function () {
      this.pageStorage.updatePositons();
      this.menuStorage.updatePositons();
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
<style scoped>
.t {
  transition: 0.5s;
}
</style>

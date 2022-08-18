<template>
  <div class="relative flex w-full h-full overflow-hidden">
    <div
      id="page"
      class="absolute inset-5 md:inset-20 flex justify-center items-center overflow-hidden"
    >
      <router-view />
    </div>
    <side-menu-comp />
  </div>
</template>
<script>
import sideMenuComp from "@/components/sideMenuComp.vue";
export default {
  components: { sideMenuComp },
};
</script>

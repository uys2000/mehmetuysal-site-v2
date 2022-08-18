<template>
  <div id="sideMenuButtons">
    <side-menu-btn-comp side="left">Left</side-menu-btn-comp>
    <side-menu-btn-comp side="right">Right</side-menu-btn-comp>
    <side-menu-btn-comp side="bottom">Bottom</side-menu-btn-comp>
    <side-menu-btn-comp side="top">Top</side-menu-btn-comp>
  </div>
</template>
<script>
import sideMenuBtnComp from "@/components/sideMenuBtnComp.vue";
export default {
  components: { sideMenuBtnComp },
};
</script>

<template>
  <div id="sideMenuButtons">
    <side-menu-btn-comp key="" side="t">Top</side-menu-btn-comp>
    <side-menu-btn-comp key="" side="l">Left</side-menu-btn-comp>
    <side-menu-btn-comp key="" side="r">Right</side-menu-btn-comp>
    <side-menu-btn-comp key="" side="b">Bottom</side-menu-btn-comp>
  </div>
</template>
<script>
import sideMenuBtnComp from "@/components/sideMenuBtnComp.vue";
export default {
  components: { sideMenuBtnComp },
};
</script>

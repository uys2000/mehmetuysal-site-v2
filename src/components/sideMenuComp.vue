<template>
  <div id="MenuBtns" class="absolute w-screen h-screen" :style="position">
    <side-menu-btn-comp side="t">Top</side-menu-btn-comp>
    <side-menu-btn-comp side="l">Left</side-menu-btn-comp>
    <side-menu-btn-comp side="r">Right</side-menu-btn-comp>
    <side-menu-btn-comp side="b">Bottom</side-menu-btn-comp>
  </div>
</template>
<script>
import sideMenuBtnComp from "@/components/sideMenuBtnComp.vue";
export default {
  components: { sideMenuBtnComp },
  props: ["position"],
};
</script>

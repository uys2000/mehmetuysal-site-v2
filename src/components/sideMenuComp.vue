<template>
  <div id="MenuBtns" class="absolute w-screen h-screen" :style="position">
    <side-menu-btn-comp side="t">
      <img class="rotate-90" :src="require('@/assets/images/svgs/arrow.svg')" />
    </side-menu-btn-comp>
    <side-menu-btn-comp side="l">
      <img class="-rotate-90" :src="require('@/assets/images/svgs/arrow.svg')" />
    </side-menu-btn-comp>
    <side-menu-btn-comp side="r">
      <img class="-rotate-90" :src="require('@/assets/images/svgs/arrow.svg')" />
    </side-menu-btn-comp>
    <side-menu-btn-comp side="b">
      <img class="-rotate-90" :src="require('@/assets/images/svgs/arrow.svg')" />
    </side-menu-btn-comp>
  </div>
</template>
<script>
import sideMenuBtnComp from "@/components/sideMenuBtnComp.vue";
export default {
  components: { sideMenuBtnComp },
  props: ["position"],
};
</script>

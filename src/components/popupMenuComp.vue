<template>
  <div class="text-right h-screen align-middle table-cell pr-[10vw] text-2xl">
    <popup-menu-inner-btn-comp side="t">
      First Top Page
    </popup-menu-inner-btn-comp>
    <popup-menu-inner-btn-comp side="l">
      First Left Page
    </popup-menu-inner-btn-comp>
    <popup-menu-inner-btn-comp side="c">
      First Center Page
    </popup-menu-inner-btn-comp>
    <popup-menu-inner-btn-comp side="r">
      First Right Page
    </popup-menu-inner-btn-comp>
    <popup-menu-inner-btn-comp side="b">
      First Bottom Page
    </popup-menu-inner-btn-comp>
  </div>
</template>
<script>

import popupMenuInnerBtnComp from "@/components/popupMenuInnerBtnComp.vue";
export default {
  components: { popupMenuInnerBtnComp },
};
</script>

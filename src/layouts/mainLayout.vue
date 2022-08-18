<template>
  <div class="ring h-screen w-screen"></div>
  <animate-comp :p="pageStore.pages.t" />
  <div class="ring h-screen w-screen"></div>
  <animate-comp :p="pageStore.pages.l" />
  <animate-comp :p="pageStore.pages.c"><side-menu-comp /></animate-comp>
  <animate-comp :p="pageStore.pages.r" />
  <div class="ring h-screen w-screen"></div>
  <animate-comp :p="pageStore.pages.b" />
  <div class="ring h-screen w-screen"></div>
</template>
<script>
import animateComp from "@/components/animateComp.vue";
import pageStore from "@/storages/pageStorage";
import sideMenuComp from "@/components/sideMenuComp.vue";
export default {
  components: {
    animateComp,
    sideMenuComp,
  },
  data() {
    return {
      pageStore: pageStore(),
    };
  },
};
</script>

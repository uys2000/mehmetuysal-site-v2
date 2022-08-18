<template>
  <div></div>
  <page-choser-comp :p="p.t" />
  <div></div>
  <page-choser-comp :p="p.l" />
  <page-choser-comp :p="p.c" />
  <page-choser-comp :p="p.r" />
  <div></div>
  <page-choser-comp :p="p.b" />
  <div></div>
</template>
<script>
import pageChoserComp from "@/components/pageChoserComp.vue";
export default {
  components: {
    pageChoserComp,
  },
  data() {
    return {
      // History of pages
      p: {
        t: "t", // topPage
        l: "l", // leftPage
        c: "c", // centerPage
        r: "r", // rightPage
        b: "b", // bottomPage
      },
    };
  },
};
</script>

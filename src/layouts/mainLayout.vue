<template>
  <side-menu-comp :position="pageStorage.center" />
  <inner-page-comp
    :position="pageStorage.positions[pageStorage.pages.t]"
    :index="pageStorage.indexes[pageStorage.pages.t]"
    :name="pageStorage.pages.t"
  >
    <top-view />
  </inner-page-comp>
  <inner-page-comp
    :position="pageStorage.positions[pageStorage.pages.l]"
    :index="pageStorage.indexes[pageStorage.pages.l]"
    :name="pageStorage.pages.l"
  >
    <left-view />
  </inner-page-comp>
  <inner-page-comp
    :position="pageStorage.positions[pageStorage.pages.c]"
    :index="pageStorage.indexes[pageStorage.pages.c]"
    :name="pageStorage.pages.c"
  >
    <center-view />
  </inner-page-comp>
  <inner-page-comp
    :position="pageStorage.positions[pageStorage.pages.r]"
    :index="pageStorage.indexes[pageStorage.pages.r]"
    :name="pageStorage.pages.r"
  >
    <right-view />
  </inner-page-comp>
  <inner-page-comp
    :position="pageStorage.positions[pageStorage.pages.b]"
    :index="pageStorage.indexes[pageStorage.pages.b]"
    :name="pageStorage.pages.b"
  >
    <bottom-view />
  </inner-page-comp>
</template>
<script>
import innerPageComp from "@/components/innerPageComp.vue";
import pageStorage from "@/storages/pageStorage";
import topView from "@/views/topView.vue";
import leftView from "@/views/leftView.vue";
import centerView from "@/views/centerView.vue";
import rightView from "@/views/rightView.vue";
import bottomView from "@/views/bottomView.vue";
import sideMenuComp from "@/components/sideMenuComp.vue";
export default {
  components: {
    innerPageComp,
    topView,
    leftView,
    centerView,
    rightView,
    bottomView,
    sideMenuComp,
  },
  data() {
    return {
      pageStorage: pageStorage(),
    };
  },
};
</script>

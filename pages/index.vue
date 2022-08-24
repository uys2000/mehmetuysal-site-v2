<template>
  <NuxtLayout name="menu">
    <comp-edge-menu :position="pageStorage.center" />
    <comp-page-align
      :position="pageStorage.positions[pageStorage.pages.t]"
      :index="pageStorage.indexes[pageStorage.pages.t]"
      :name="pageStorage.pages.t"
    >
      <view-top />
    </comp-page-align>
    <comp-page-align
      :position="pageStorage.positions[pageStorage.pages.l]"
      :index="pageStorage.indexes[pageStorage.pages.l]"
      :name="pageStorage.pages.l"
    >
      <view-left />
    </comp-page-align>
    <comp-page-align
      :position="pageStorage.positions[pageStorage.pages.c]"
      :index="pageStorage.indexes[pageStorage.pages.c]"
      :name="pageStorage.pages.c"
    >
      <view-center />
    </comp-page-align>
    <comp-page-align
      :position="pageStorage.positions[pageStorage.pages.r]"
      :index="pageStorage.indexes[pageStorage.pages.r]"
      :name="pageStorage.pages.r"
    >
      <view-right />
    </comp-page-align>
    <comp-page-align
      :position="pageStorage.positions[pageStorage.pages.b]"
      :index="pageStorage.indexes[pageStorage.pages.b]"
      :name="pageStorage.pages.b"
    >
      <view-bottom />
    </comp-page-align>
  </NuxtLayout>
</template>
<script>
import page from "../store/page";
export default {
  data() {
    return {
      pageStorage: page(),
    };
  },
};
</script>

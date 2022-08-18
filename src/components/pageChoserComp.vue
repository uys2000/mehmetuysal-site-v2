<template>
  <div
    class="page relative w-full h-full flex flex-col justify-center content-center items-center"
  >
    <top-view v-if="p == 't'" />
    <left-view v-if="p == 'l'" />
    <center-view v-if="p == 'c'" />
    <right-view v-if="p == 'r'" />
    <bottom-view v-if="p == 'b'" />
    <slot />
  </div>
</template>
<script>
import topView from "@/views/topView.vue";
import leftView from "@/views/leftView.vue";
import centerView from "@/views/centerView.vue";
import rightView from "@/views/rightView.vue";
import bottomView from "@/views/bottomView.vue";
export default {
  components: {
    topView,
    leftView,
    centerView,
    rightView,
    bottomView,
  },
  props: ["p"],
};
</script>

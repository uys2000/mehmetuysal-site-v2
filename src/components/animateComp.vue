<template>
  <Transition :name="pageStore.direction">
    <div>
      <page-choser-comp :p="p">
        <slot />
      </page-choser-comp>
    </div>
  </Transition>
</template>

<script>
import pageChoserComp from "@/components/pageChoserComp.vue";
import pageStore from "@/storages/pageStorage";
export default {
  components: { pageChoserComp },
  props: ["p"],
  data() {
    return {
      pageStore: pageStore(),
    };
  },
};
</script>
<style scoped>
.rl-move, /* apply transition to moving elements */
.rl-enter-active,
.rl-leave-active {
  transition: all 3s ease;
}
.rl-enter-from,
.rl-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.rl-leave-active {
  position: absolute;
}

.lr-move,
.lr-enter-active,
.lr-leave-active {
  transition: all 3s ease;
}
.lr-enter-from,
.lr-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.lr-leave-active {
  position: absolute;
}

.bt-move,
.bt-enter-active,
.bt-leave-active {
  transition: all 3s ease;
}
.bt-enter-from,
.bt-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.bt-leave-active {
  position: absolute;
}

.tb-move,
.tb-enter-active,
.tb-leave-active {
  transition: all 3s ease;
}
.tb-enter-from,
.tb-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.tb-leave-active {
  position: absolute;
}
</style>

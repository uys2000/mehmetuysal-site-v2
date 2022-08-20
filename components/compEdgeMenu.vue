<template>
  <div id="MenuBtns" class="absolute w-screen h-screen" :style="position">
    <comp-edge-menu-button side="t">
      <img class="rotate-90" src="~/assets/images/svgs/arrow.svg" />
    </comp-edge-menu-button>
    <comp-edge-menu-button side="l">
      <img class="-rotate-90" src="~/assets/images/svgs/arrow.svg" />
    </comp-edge-menu-button>
    <comp-edge-menu-button side="r">
      <img class="-rotate-90" src="~/assets/images/svgs/arrow.svg" />
    </comp-edge-menu-button>
    <comp-edge-menu-button side="b">
      <img class="-rotate-90" src="~/assets/images/svgs/arrow.svg" />
    </comp-edge-menu-button>
  </div>
</template>
<script>
export default {
  props: ["position"],
};
</script>

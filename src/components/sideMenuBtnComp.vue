<template>
  <button
    class="absolute invisible md:visible px-6 py-2 active:text-third"
    :style="style[side]"
  >
    <slot />
  </button>
</template>
<script>
export default {
  props: ["side"],
  data() {
    return {
      style: {
        left: "left:5px; top:50%; transform: translate(0, -50%) rotate(90deg)",
        right:
          "right:5px; top:50%; transform: translate(0, -50%) rotate(-90deg)",
        bottom: "left:50%; top:20px; transform: translate(-50%, 0)",
        top: "left:50%; bottom:20px; transform: translate(-50%, 0)",
      },
    };
  },
};
</script>

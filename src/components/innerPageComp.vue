<template>
  <div class="absolute ring w-screen h-screen t" :style="position" :name="name">
    <div
      class="relative bg-primary w-screen h-screen flex flex-row justify-center items-center"
      :class="index"
    >
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  props: ["position", "index", "name"],
};
</script>
<style scoped>
.t {
  transition: 2s linear;
}
</style>

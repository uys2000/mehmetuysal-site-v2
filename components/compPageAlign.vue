<template>
  <div class="absolute w-screen h-screen t" :class="index" :style="position" :name="name">
    <div
      class="relative bg-primary w-screen h-screen flex flex-row justify-center items-center"
      
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
  transition: 1s linear;
}
</style>

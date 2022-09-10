<template>
  <div class="flex flex-row row-wrap justify-around w-[100vw] md:w-fit">
    <comp-open-menu :buttons="buttons" :click-func="admin.setPage">
      <template v-slot:out> Menu </template>
    </comp-open-menu>
  </div>
</template>
<script>
import admin from "~~/store/admin";
export default {
  data() {
    return {
      buttons: ["Info", "Contact", "Blog", "Terminal"],
      admin: admin(),
    };
  },
};
</script>

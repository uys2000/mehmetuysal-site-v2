<template>
  <div class="flex flex-row row-wrap justify-around w-[100vw] md:w-[20vw]">
    <comp-open-menu min="h-[0px]" max="h-[100px]">
      <template v-slot:out> Menu </template>
      <template v-slot:in>
        <div v-for="button in buttons" :key="button" class="h-[25px]">
          <button class="text-left w-full" @click="admin.setPage(button)">
            {{ button }}
          </button>
        </div>
      </template>
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

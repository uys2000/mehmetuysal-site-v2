<template>
  <div
    class="flex flex-row flex-wrap justify-around h-screen w-screen overflow-scroll"
  >
    <div class="md:fixed md:top-5 md:left-5"><comp-admin-menu /></div>
    <div class="md:fixed md:top-5 md:right-5">
      <button class="text-xl" @click="showRoom = !showRoom">ShowRoom</button>
    </div>
    <div><comp-admin-page :showRoom="showRoom" /></div>
  </div>
</template>
<script>
import admin from "~~/store/admin";
export default {
  data() {
    return {
      admin: admin(),
      showRoom: false,
    };
  },
  mounted() {
    console.log(this.admin.user);
  },
};
</script>

<template>
  <div class="flex flex-row flex-wrap justify-around">
    <div><comp-admin-menu /></div>
    <div><comp-admin-page /></div>
  </div>
</template>
<script>
import admin from "~~/store/admin";
export default {
  data() {
    return {
      admin: admin(),
    };
  },
  mounted() {
    console.log(this.admin.user);
  },
};
</script>

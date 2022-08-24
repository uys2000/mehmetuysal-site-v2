<template>
  <div class="w-[100vw] md:w-[80vw]">
    <template v-if="admin.page == 'Info'">
      <view-admin-info />
    </template>
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
};
</script>

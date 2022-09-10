<template>
  <div class="w-[100vw] md:w-[80vw]">
    <template v-if="admin.page == 'Info'">
      <view-admin-info-editor v-if="!showRoom" />
      <view-admin-info-show-room v-if="showRoom" />
    </template>
  </div>
</template>
<script>
import admin from "~~/store/admin";
export default {
  props:["showRoom"],
  data() {
    return {
      admin: admin(),
    };
  },
};
</script>

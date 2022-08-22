<template>
  <div
    class="text-secondary w-screen h-screen flex flex-row justify-center items-center"
  >
    <view-admin v-if="admin.isLogged" />
    <view-login v-else />
  </div>
</template>
<script>
import admin from "~~/store/admin";
export default {
  mounted() {
    const route = useRoute();
    route.meta.layout = "admin";
  },
  data() {
    return {
      admin: admin(),
    };
  },
};
</script>

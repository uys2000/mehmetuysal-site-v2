<template>
  <div class="flex flex-row-reverse flex-wrap justify-center p-10 ql-editor">
    <div v-html="infoPage.text['contTR']"></div>
  </div>
</template>
<script>
import { infoPage } from "~~/store/editors";
export default {
  data() {
    return {
      infoPage: infoPage(),
    };
  },
};
</script>

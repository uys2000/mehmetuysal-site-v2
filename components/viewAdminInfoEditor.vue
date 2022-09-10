<template>
  <input
    class="hidden"
    ref="fileImg"
    type="file"
    accept="image/*"
    @change="infoPage.setNewImg"
  />
  <div>
    <div class="flex flex-row-reverse flex-wrap justify-center p-10">
      <div class="w-full md:w-4/12 max-w-[300px]">
        <div class="col-span-1 text-center text-3xl">Header Image</div>
        <div>
          <img
            class="bg-secondary"
            :src="infoPage.newImg ? infoPage.newImg : infoPage.oldImg"
            alt=""
          />
          <div class="p-2">
            <button class="w-1/2" @click="$refs.fileImg.click()">
              Choose Image
            </button>
            <button class="w-1/2" @click="infoPage.clearImg">
              Remove Image
            </button>
          </div>
          <div class="flex flex-wrap justify-center mt-2">
            <label for="date" class="mr-2 border-none">Date</label>
            <input
              class="text-secondary bg-primary focus:outline-none"
              id="date"
              name="date"
              placeholder="DD/MM/YYYY"
              size="10"
              maxlength="10"
              v-model="infoPage.date"
            />
          </div>
        </div>
      </div>
      <div class="w-full md:w-8/12">
        <div class="col-span-2 text-3xl">"Who Am I" Page Editer</div>
        <div class="col-span-2">
          <comp-quill
            :value="infoPage.text['contTR']"
            :updateFunc="updateFunc"
          />
        </div>
      </div>
    </div>
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
  methods: {
    updateFunc: function (value) {
      this.infoPage.text["contTR"] = value;
    },
  },
  mounted() {
    getImageUrl("img/CV").then((res) => {
      this.infoPage.oldImg = res;
    });
    getDocument("onePage", "whoAmI").then((res) => {
      this.infoPage.text = res.data();
    });
  },
};
</script>

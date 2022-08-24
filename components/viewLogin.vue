<template>
  <div class="justify-center w-min p-2 -mt-5 rounded-xl border border-[#111]">
    <form onsubmit="return false">
      <div class="w-full">
        <img src="~assets/images/logo.jpg" alt="" />
      </div>
      <div class="p-1">
        <input
          class="p-1 h-10 rounded-xl border border-[#111] bg-primary"
          type="text"
          v-model="mail"
          placeholder="e-mail"
        />
      </div>
      <div class="p-1">
        <input
          class="p-1 rounded-xl border border-[#111] bg-primary"
          type="text"
          v-model="pass"
          placeholder="password"
        />
      </div>
      <div class="p-1">
        <button
          class="p-1 w-full rounded-xl border border-[#111] bg-primary"
          type="submit"
          @click="submit"
        >
          login
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import admin from "~~/store/admin";
export default {
  data() {
    return {
      admin: admin(),
      mail: "",
      pass: "",
    };
  },
  methods: {
    submit() {
      signFirebase(this.mail, this.pass).then((res) => {
        this.admin.isLogged = true;
        this.admin.user = res;
      });
    },
  },
};
</script>

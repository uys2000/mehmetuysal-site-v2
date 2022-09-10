<template>
  <QuillEditor toolbar="full" ref="quil" @textChange="updateValue" />
</template>

<script>
export default {
  props: ["value", "updateFunc"],
  data() {
    return {
      f: true,
    };
  },
  methods: {
    updateText: function () {
      if (this.value) {
        this.$refs.quil.setHTML(this.value);
        this.f = false;
      }
    },
    updateValue: function (val) {
      this.updateFunc(this.$refs.quil.getHTML());
    },
  },
  mounted() {
    this.updateText();
  },
  watch: {
    value() {
      if (this.value) if (this.f) this.updateText();
    },
  },
};
</script>

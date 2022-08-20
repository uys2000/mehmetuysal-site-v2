<template>
  <div
    id="terminal"
    class="relative w-8/12 h-5/6 border border-solid border-third"
    @click="$refs.input.focus()"
  >
    <div
      tabindex="0"
      class="focus:outline-none absolute top-0 max-h-full w-full overflow-auto flex flex-col-reverse justify-start s p-5"
      ref="input"
      @focus="focus = true"
      @blur="focus = false"
      @keydown="keydown"
    >
      <div class="p">
        <span class="md:hidden">{{ userShort }}</span>
        <span class="hidden md:inline">{{ userLong }}</span>
        <span>{{ " " + inputText }}</span>
        <span
          class="inline-block relative border bg-secondary w-2 h-4 top-1 p"
          :class="{ 'motion-safe:animate-pulseC': focus }"
        />
      </div>
      <div
        v-for="text in [...terminalTexts].reverse()"
        :key="text"
        class="whitespace-nowrap b w-full max-w-full p"
      >
        <span class="md:hidden">{{ userShort }}</span>
        <span class="hidden md:inline">{{ userLong }}</span>
        <pre class="inline p">
        {{ text }}
        </pre>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      focus: false,
      userShort: "[ -- - ] $",
      userLong: "[guest@mehmetuysal.tech root] $",
      terminalTexts: [],
      inputText: "",
      keys: [],
    };
  },
  methods: {
    setText: function (text) {
      this.inputText = text;
    },
    removeChar: function () {
      this.inputText = this.inputText.substring(0, this.inputText.length - 1);
    },
    pasteText: function () {
      navigator.clipboard.readText().then((text) => {
        this.inputText += text;
      });
    },
    executeCommand: function (command) {},
    runText: function () {
      const text = this.inputText;
      this.inputText = "";
      this.terminalTexts.push(text);
    },
    actionRouter: function (input) {
      if (input.shiftKey && input.ctrlKey && input.code == "KeyV")
        this.pasteText();
      else if (input.keyCode > 48 && input.keyCode < 91)
        this.setText(this.inputText + input.key);
      else if (input.keyCode == 32) this.setText(this.inputText + "_");
      else if (input.keyCode == 8) this.removeChar();
      else if (input.keyCode == 13) this.runText();
    },
    keydown: function (input) {
      const i = this.keys.indexOf(input.code);
      if (i != -1) this.keys = this.keys = this.keys.splice(i, 1);
      this.actionRouter(input);
      console.log(input);
    },
  },
};
</script>
<style scoped>
.s::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px #000;
  box-shadow: inset 0 0 6px #000;
  border-radius: 10px;
  background-color: #000;
}

.s::-webkit-scrollbar {
  width: 12px;
  background-color: #000;
}

.s::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px #000;
  box-shadow: inset 0 0 6px #000;
  background-color: #ff0080;
}
.p {
  margin: 0;
  white-space: normal;
  word-wrap: break-word; /* Internet Explorer 5.5+ */
  line-break: anywhere;
}
</style>

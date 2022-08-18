<template>
  <header class="motion-safe:animate-pulseR text-center">
    <span class="m-auto text-4xl hover:text-third transition duration-1000">
      Mehmet Uysal
    </span>
  </header>
  <div :class="pulse + line + line1" />
  <div :class="pulse + line + line2" />
  <div :class="pulse + line + line3" />
  <div :class="pulse + line + line4" />
  <div :class="pulse + line + line5" />
  <div :class="pulse + line + line6" />

  <div id="line7" :class="pulse + line + line7 + lineH + lineMD" />
  <div id="line8" :class="pulse + line + line8 + lineH + lineMD" />
  <div id="line9" :class="pulse + line + line9 + lineH + lineMD" />
  <div id="line10" :class="pulse + line + line10 + lineH + lineMD" />
  <div id="line11" :class="pulse + line + line11 + lineH + lineMD" />
  <div id="line12" :class="pulse + line + line12 + lineH + lineMD" />
  <div id="line13" :class="pulse + line + line13 + lineH + lineMD" />
  <div id="line14" :class="pulse + line + line14 + lineH + lineMD" />
  <div id="line15" :class="pulse + line + line15 + lineH + lineLG" />
  <div id="line16" :class="pulse + line + line16 + lineH + lineLG" />
  <div id="line17" :class="pulse + line + line17 + lineH + lineXL" />
  <div id="line18" :class="pulse + line + line18 + lineH + lineXL" />
  <div id="line19" :class="pulse + line + line19 + lineH + line2X" />
  <div id="line20" :class="pulse + line + line20 + lineH + line2X" />
</template>
<script>
export default {
  data() {
    return {
      pulse: "motion-safe:animate-pulseF",
      line: " absolute border-solid border-4 border-r-2 border-b-2 max-w-full",
      lineH: " invisible",
      lineMD: " md:visible",
      lineLG: " lg:visible",
      lineXL: " xl:visible",
      line2X: " 2x:visible",
      line1:
        " border-t-third border-r-third border-b-trans border-l-trans w-64 h-24 mb-4 ml-4",
      line2:
        " border-t-trans border-r-trans border-b-third border-l-third w-72 h-24 mt-4",
      line3:
        " border-t-third border-r-third border-b-trans border-l-third w-80 h-36 mb-4",
      line4:
        " border-t-trans border-r-trans border-b-third border-l-trans w-80 h-36 mt-4",
      line5:
        " border-t-third border-r-trans border-b-trans border-l-third w-96 h-40 mb-12",
      line6:
        " border-t-trans border-r-third border-b-third border-l-trans w-96 h-40 mt-12",
      line7:
        " border-t-third border-r-third border-b-trans border-l-trans w-11/12 h-5/6 mb-4",
      line8:
        " border-t-trans border-r-trans border-b-third border-l-third w-11/12 h-5/6 mt-4",
      line9:
        " border-t-third border-r-trans border-b-trans border-l-trans w-10/12 h-4/6 mb-4",
      line10:
        " border-t-trans border-r-third border-b-third border-l-third w-10/12 h-4/6 mt-4",
      line11:
        " border-t-third border-r-trans border-b-trans border-l-third w-9/12 h-3/6 mb-4",
      line12:
        " border-t-trans border-r-trans border-b-third border-l-trans w-9/12 h-3/6 mt-4",
      line13:
        " border-t-third border-r-trans border-b-trans border-l-trans w-8/12 h-2/6 mb-4",
      line14:
        " border-t-trans border-r-third border-b-third border-l-trans w-8/12 h-2/6 mt-4",
      line15:
        " border-t-trans border-r-third border-b-trans border-l-third w-7/12 h-1/6 mb-16",
      line16:
        " border-t-trans border-r-third border-b-trans border-l-third w-6/12 h-1/6 mt-16",
      line17:
        " border-t-trans border-r-third border-b-trans border-l-third w-5/12 h-1/6 mb-16",
      line18:
        " border-t-trans border-r-third border-b-trans border-l-third w-4/12 h-1/6 mt-16",
      line19:
        " border-t-trans border-r-third border-b-trans border-l-third w-3/12 h-1/6 mb-16",
      line20:
        " border-t-trans border-r-third border-b-trans border-l-third w-2/12 h-1/6 mt-16",
    };
  },
};
</script>

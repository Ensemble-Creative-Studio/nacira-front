<template>
  <transition name="fade">
    <img
      v-show="index === sliderIndex"
      draggable="false"
      class="slide-img"
      :src="serverUrl + slide.url"
    />
  </transition>
</template>

<script>
// Globals
import { SERVER_URL } from "../global";

export default {
  name: "HomeSlideItem",
  data() {
    return {
      serverUrl: "",
    };
  },
  props: {
    slide: Object,
    index: Number,
    sliderIndex: Number,
  },
  mounted() {
    this.serverUrl = SERVER_URL;
  },
};
</script>

<style>
.slide-img {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 150;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  opacity: 1;
  transition: opacity 0.5s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

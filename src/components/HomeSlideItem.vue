<template>
  <transition name="fade">
    <div v-if="index === sliderIndex">
      <img class="slide-img" :src="image" @load="isImgLoaded = true" />
      <p class="intro-text">
        Design + Naval Architecture <br class="not-visible" />
        + Creative Direction
      </p>
    </div>
  </transition>
</template>

<script>
export default {
  name: "HomeSlideItem",
  data() {
    return {
      isImgLoaded: false,
      image: this.slide.image.url,
    };
  },
  props: {
    slide: Object,
    index: Number,
    sliderIndex: Number,
  },
};
</script>

<style scoped>
div {
  overflow: hidden;
}

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
  /* transition: opacity 0.5s; */
  will-change: opacity;
}

.intro-text {
  position: absolute;
  z-index: 200;
  bottom: 60px;
  left: 40px;
  font-family: "Wremena", serif;
  font-size: 64px;
  font-weight: 300;
  color: white;
}

.fade-enter-active,
.fade-leave-active {
  -webkit-transition: opacity 1s ease;
  -moz-transition: opacity 1s ease;
  -o-transition: opacity 1s ease;
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 800px) {
  .not-visible {
    display: none;
  }
}
@media screen and (max-width: 500px) {
  .intro-text {
    font-size: 54px;
    left: 15px;
    bottom: 69px;
  }
}
</style>

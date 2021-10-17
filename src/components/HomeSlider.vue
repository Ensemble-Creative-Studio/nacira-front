<template>
  <div v-if="slides" class="slider-container">
    <div>
      <span class="left" @click="() => clickHandler(-1)"></span>
      <span class="right" @click="() => clickHandler(1)"></span>
      <div class="slider-wrapper">
        <HomeSlideItem
          :sliderIndex="sliderIndex"
          :slide="slide"
          :index="index"
          :key="slide.id"
          v-for="(slide, index) in slides"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { fetchSliderImages } from "../services";

//Components
import HomeSlideItem from "./HomeSlideItem.vue";

export default {
  name: "HomeSlider",
  components: {
    HomeSlideItem,
  },
  data() {
    return {
      slides: [],
      sliderIndex: 0,
      intervalId: 0,
    };
  },
  async mounted() {
    const { sliderData, sliderError } = await this.fetchSliderImages();
    if (sliderData.statusCode) console.error(sliderData);
    if (sliderError) console.error(sliderError);
    if (sliderData) this.slides = sliderData.slides;
    this.intervalFunction();
  },
  methods: {
    fetchSliderImages,
    clickHandler(direction) {
      clearInterval(this.intervalId);
      this.sliderHandler(direction);
      this.intervalFunction();
    },
    sliderHandler(direction) {
      const slideLength = this.slides.length;
      let nextIndex = (this.sliderIndex + direction) % slideLength;
      if (nextIndex < 0) nextIndex = slideLength - 1;
      this.sliderIndex = nextIndex;
    },
    intervalFunction() {
      this.intervalId = setInterval(() => {
        this.sliderHandler(1);
      }, 5000);
    },
  },
};
</script>

<style scoped>
.slider-container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slider-container > div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
}

span {
  position: absolute;
  top: 0;
  z-index: 150;
  width: 50vw;
  height: 100vh;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}

span.left {
  left: 0;
}

span.right {
  right: 0;
}

.slider-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  z-index: 100;
}
</style>

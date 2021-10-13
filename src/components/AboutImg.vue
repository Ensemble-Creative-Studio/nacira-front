<template>
  <div class="about-img-container">
    <div class="img-wrapper">
      <img v-if="photo" :src="photo" alt="" v-scrollanimation />
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutImg",
  props: {
    photo: String,
  },
};
</script>

<style scoped>
.about-img-container {
  width: 33%;
  margin-top: calc(147px - var(--nav-size));
}

.img-wrapper {
  max-height: 513px;
  width: 100%;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease;
}

img.before-enter {
  opacity: 0.5;
}

img.enter {
  opacity: 1;
}

@media screen and (max-width: 800px) {
  .about-img-container {
    order: -1;
    width: 100%;
    margin-top: 30px;
    height: 500px;
  }
  .img-wrapper {
    height: 100%;
  }
  img {
    height: auto;
    max-height: 100%;
    max-width: 100%;
    width: 100%;
    object-fit: contain;
  }
}

@media screen and (max-width: 500px) {
  .about-img-container {
    order: -1;
    width: 100%;
    margin-top: 30px;
    height: unser;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>

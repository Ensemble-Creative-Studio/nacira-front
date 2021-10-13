<template>
  <div
    v-show="isImageLoaded"
    :style="isVisibleOnLoad && delay"
    class="article-item"
    ref="item"
    v-scrollanimation
  >
    <div class="article-item-wrapper">
      <div class="img-wrapper">
        <img
          :src="serverUrl + article.cover.url"
          :alt="article.cover.alternativeText"
          @load="onImageLoad"
        />
      </div>
    </div>
    <div class="text-container article-item-wrapper">
      <h3 class="title">{{ article.title }}</h3>
      <div class="text-wrapper">
        <p class="description">{{ article.description }}</p>
        <a
          v-if="article.file.length"
          :href="serverUrl + article.file[0].url"
          :download="article.file.name"
          >Dowload</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { SERVER_URL } from "../global";

export default {
  name: "PressArticle",
  data() {
    return {
      serverUrl: "",
      isImageLoaded: false,
      isVisibleOnLoad: true,
    };
  },
  props: {
    article: Object,
    index: Number,
  },
  computed: {
    delay() {
      return `transition-delay: ${0.1 * this.index}s`;
    },
  },
  methods: {
    onImageLoad() {
      this.isImageLoaded = true;
    },
  },
  mounted() {
    this.serverUrl = SERVER_URL;
    setTimeout(() => {
      if (!this.$refs.item.classList.contains("enter")) {
        this.isVisibleOnLoad = false;
      }
    }, 500);
  },
};
</script>

<style scoped>
.article-item {
  flex-basis: 33.333333%;
  margin-top: 130px;
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.article-item-wrapper {
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.img-wrapper {
  width: 100%;
  height: 430px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  overflow: hidden;
}

.img-wrapper img {
  width: 100%;
  object-fit: cover;
  object-position: top;
}

.text-container {
  margin-top: 20px;
}

.title {
  font-family: "Wremena", sans-serif;
  font-size: 30px;
  font-weight: normal;
}

.text-wrapper {
  margin-top: 5px;
}

.description {
  font-family: "DM Sans", serif;
  font-weight: bold;
  font-size: 13px;
  /* margin-top: 5px; */
}

a {
  font-family: "DM Sans", serif;
  font-weight: bold;
  font-size: 13px;
  color: black;
}

.before-enter {
  transform: translateY(20px);
  opacity: 0.5;
}

.enter {
  transform: translateY(0);
  opacity: 1;
}

@media screen and (max-width: 800px) {
  .article-item {
    flex-basis: 50%;
    margin-top: 35px;
  }
  .article-item-wrapper {
    width: 90%;
  }

  .img-wrapper img {
    width: unset;
  }
  .text-container {
    margin-top: 15px;
  }
}
@media screen and (max-width: 500px) {
  .article-item {
    flex-basis: 100%;
  }
  .article-item-wrapper {
    width: 100%;
  }

  .title {
    font-size: 28px;
  }
}
</style>

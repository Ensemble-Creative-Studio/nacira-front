<template>
  <div v-if="article" class="article-item">
    <div class="article-item-wrapper">
      <div class="img-wrapper">
        <img
          :src="serverUrl + article.cover.url"
          :alt="article.cover.alternativeText"
        />
      </div>
    </div>
    <div class="text-container article-item-wrapper">
      <h3 class="title">{{ article.title }}</h3>
      <div class="text-wrapper">
        <p class="description">{{ article.description }}</p>
        <a :href="serverUrl + article.file[0].url" :download="article.file.name"
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
  props: {
    article: Object,
  },
  data() {
    return {
      serverUrl: "",
    };
  },
  mounted() {
    this.serverUrl = SERVER_URL;
  },
};
</script>

<style scoped>
.article-item {
  flex-basis: 33.333333%;
  height: 500px;
  margin-top: 130px;
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
  height: 400px;
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

@media screen and (max-width: 500px) {
  .article-item {
    flex-basis: 100%;
    margin-top: 35px;
  }
  .article-item-wrapper {
    width: 100%;
  }
  .img-wrapper img {
    width: unset;
  }
  .text-container {
    margin-top: 15px;
  }
}
</style>

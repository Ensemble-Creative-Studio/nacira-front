<template>
  <div id="press" class="container">
    <div class="press-wrapper">
      <PressArticle
        :article="article"
        :key="article.id"
        v-for="article in articles"
      />
    </div>
  </div>
</template>

<script>
import { fetchAllPress } from "../services";

//Components
import PressArticle from "../components/PressArticle";

export default {
  name: "Press",
  components: {
    PressArticle,
  },
  data() {
    return {
      articles: [],
    };
  },
  async mounted() {
    //API
    const { pressData, pressError } = await this.fetchAllPress();
    if (pressData.statusCode) console.error(pressData);
    if (pressError) console.error(pressError);
    if (pressData) {
      this.articles = pressData;
    }
  },
  methods: {
    fetchAllPress,
  },
};
</script>

<style>
#press {
  background: var(--secondary);
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
  min-height: unset;
  height: unset;
}

.press-wrapper {
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.article-item:nth-of-type(1),
.article-item:nth-of-type(2),
.article-item:nth-of-type(3) {
  margin-top: 0;
}

@media screen and (max-width: 500px) {
  #press {
    padding-left: 35px;
    padding-right: 35px;
    padding-bottom: 35px;
  }

  .press-wrapper {
    flex-direction: column;
    margin-top: 30px;
  }

  .article-item:nth-of-type(1) {
    margin-top: 0;
  }
  .article-item:nth-of-type(2),
  .article-item:nth-of-type(3) {
    margin-top: 35px;
  }
}
</style>

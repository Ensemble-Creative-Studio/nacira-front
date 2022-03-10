<template>
  <div id="press" class="container">
    <div class="press-wrapper">
      <PressArticle
        v-show="pressLoaded"
        :article="article"
        :key="article.id"
        :index="index"
        v-for="(article, index) in articles"
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
      pressLoaded: false,
    };
  },
  async mounted() {
    //API
    const { pressData, pressError, pressLoaded } = await this.fetchAllPress();
    if (pressData.statusCode) console.error(pressData);
    if (pressError) console.error(pressError);
    if (pressData) {
      this.articles = pressData.Article;
    }
    this.pressLoaded = pressLoaded;
  },
  methods: {
    fetchAllPress,
  },
};
</script>

<style>
#press {
  background: var(--secondary);
  width: 100vw;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
  min-height: 100vh;
  height: auto;
  overflow-x: hidden;
}

.press-wrapper {
  width: 100%;
  margin-top: 100px;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
}

.article-item:nth-of-type(1),
.article-item:nth-of-type(2),
.article-item:nth-of-type(3) {
  margin-top: 0;
}
.article-item:nth-of-type(3n + 1) .article-item-wrapper {
  margin-right: auto;
  margin-left: 0;
}

.article-item:nth-of-type(3n + 3) .article-item-wrapper {
  margin-left: auto;
  margin-right: 0;
}

@media screen and (max-width: 800px) {
  #press {
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 35px;
  }

  .press-wrapper {
    flex-direction: row;
    margin-top: 30px;
  }

  .article-item:nth-of-type(1),
  .article-item:nth-of-type(2) {
    margin-top: 0;
  }

  .article-item:nth-of-type(3) {
    margin-top: 35px;
  }

  .article-item:nth-of-type(3n + 1) .article-item-wrapper {
    margin-right: auto;
    margin-left: auto;
  }

  .article-item:nth-of-type(3n + 3) .article-item-wrapper {
    margin-left: auto;
    margin-right: auto;
  }
}
@media screen and (max-width: 500px) {
  .press-wrapper {
    flex-direction: column;
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

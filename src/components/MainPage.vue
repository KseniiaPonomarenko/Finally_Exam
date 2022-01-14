<template>
  <div class="main-page">
    <h1>BREAKING NEWS</h1>

    <label>
      <p>Search:</p>
      <input type="text" v-model="searchValue" class="search-inpt" />
      <button class="search-btn" v-on:click="serarchRequest()">
        <p>Search</p>
      </button>
    </label>
    <div>{{ searchValue }}</div>

    <div v-if="newsSearchResponse !== undefined" class="news-area">
      <NewsCards
        v-for="article in this.newsSearchResponse.articles"
        :key="article.publishedAt"
        :imgSrc="article.urlToImage"
        :content="article.content"
        :title="article.title"
        :url="article.url"
      />
    </div>
  </div>
</template>

<script>
import NewsCards from "../components/NewsCards.vue";

export default {
  name: "CataloguePage",
  components: {
    NewsCards,
  },

  data() {
    return {
      searchValue: "",
      newsSearchResponse: undefined,
      apiKey: "290bab75c53c49ea996d9956ed9fdbc1",
    };
  },
  computed: {
    forReturn() {
      return "SomeText";
    },
  },

  methods: {
    async serarchRequest() {
      this.newsSearchResponse = await (
        await fetch(
          //`https://newsapi.org/v2/everything?q=${this.searchValue}&apiKey=${this.apiKey}`
          `https://newsapi.org/v2/everything?q=${this.searchValue}&apiKey=${this.apiKey}&pageSize=100&page=1`
        )
      ).json();
      console.log(this.newsSearchResponse);
      // console.log(this.newsSearchResponse.articles[0].content)
    },
  },
};
</script>

<style>
.main-page {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: rgb(250, 188, 199);
}
.search-btn {
  background: #b0f5cc;
  width: 150px;
}
.search-inpt {
  width: 500px;
  padding: 15px 15px 15px 10px;
}
.news-area {
  display: flex;
}
</style>
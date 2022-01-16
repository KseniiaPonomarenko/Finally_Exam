<template>
  <div class="main-page">
    <div class="block-header">
      <h1 class="main-header">BREAKING NEWS</h1>
      <div class="main-options">
        <label>
          <input
            type="text"
            v-model="searchValue"
            class="search-inpt"
            placeholder="Search..."
          />
          <button class="search-btn standart-btn" v-on:click="serarchRequest()">
            <p>Search</p>
          </button>
        </label>
        <select v-model="category">
          <option value="">Choose a category</option>
          <option value="Business">Business</option>
          <option value="Entertainment">Entertainment</option>
          <option value="General">General</option>
          <option value="Health">Health</option>
          <option value="Science">Science</option>
          <option value="Sports">Sports</option>
          <option value="Technology">Technology</option>
        </select>
      </div>
      <div>Your search is {{ searchValue }}+ {{ category }}</div>
    </div>
    <div>
      <div v-if="newsSearchResponse !== undefined" class="news-area">
        <NewsCards
          v-for="(article, index) in this.newsSearchResponse.articles"
          :key="index"
          :imgSrc="article.urlToImage"
          :content="article.content"
          :description="article.description"
          :title="article.title"
          :link="article.url"
        />
      </div>
    </div>

    <div class="actions">
      <button
        class="actions-btn standart-btn"
        :disabled="page <= 1"
        @click="previous"
      >
        &lArr; Previous page
      </button>
      <button
        class="actions-btn standart-btn"
        :disabled="page >= 5"
        @click="next"
      >
        Next page &rArr;
      </button>
    </div>
  </div>
</template>

<script>
import NewsCards from "../components/NewsCards.vue";

export default {
  name: "MainPage",
  components: {
    NewsCards,
  },

  data() {
    return {
      searchValue: "",
      category: "",
      newsSearchResponse: undefined,
      apiKey: "290bab75c53c49ea996d9956ed9fdbc1",
      page: 1,
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
          `https://newsapi.org/v2/everything?q=${this.searchValue}&apiKey=${this.apiKey}&pageSize=20&page=${this.page}`
          //`https://newsapi.org/v2/everything?q=${this.searchValue}&top-headlines?category=${this.category}&apiKey=${this.apiKey}&pageSize=20&page=${this.page}`
          //`https://newsapi.org/v2/top-headlines?category=${this.category}&apiKey=${this.apiKey}&pageSize=20&page=${this.page}`
        )
      ).json();
    },

    previous() {
      this.page = this.page - 1;
      this.serarchRequest();
    },
    next() {
      this.page = this.page + 1;
      this.serarchRequest();
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
.main-page {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  background-color: rgb(241, 207, 214);
  position: relative;
}
.block-header {
  display: flex;
  flex-direction: column;
}

.standart-btn {
  background: #beebd0;
  width: 150px;
  border-color: #6cbd8c;
}
.search-btn {
  font-weight: bold;
}
.actions-btn {
  height: 30px;
  width: 120px;
  margin: 10px;
  border-radius: 50%;
}
.main-header {
  color: rgb(236, 65, 171);
}
.search-inpt {
  width: 500px;
  padding: 15px 15px 15px 10px;
}
.news-area {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
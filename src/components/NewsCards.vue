<template>
  <div class="new-card">
    <h1 class="article-title">{{ title }}</h1>

    <img :src="imgSrc" alt="" class="new-card__img" />
    <p class="article-description">
      <!--   Вывести длину описания +/- 200 символов -->
      <!-- {{ content.length(100) }} -->
      <!-- v-if="content.length()<=200 -->

      {{ content }}
    </p>
  </div>
</template>

<script>
export default {
  name: "NewsCards",
  data() {
    return {};
  },
  props: {
    title: String,
    content: String,
    imgSrc: String,
    url: String,
  },
};
</script>

<style>
.new-card {
  margin: 20px;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 600px;
  color: rgb(0, 0, 0);
  border: 1px rgb(0, 0, 0) solid;
  box-sizing: border-box;
}
.new-card__img {
  width: 400px;
  height: 250px;
}

.article-title {
  height: 120px;
  text-align: initial;
}

.article-description {
  padding-left: 5px;
  padding-right: 5px;
  text-align: initial;
}
</style>
<template>
  <div class="new-card" @click="openPopup">
    <Popup
      :is-open="isPopupOpen"
      @close="isPopupOpen = false"
      :title="title"
      :content="content"
      :link="link"
    />

    <h3 class="article-title">{{ title }}</h3>

    <img :src="imgSrc" alt="" class="new-card__img" />
    <div class="article-description" v-html="shortDescription"></div>
  </div>
</template>

<script>
import Popup from "./Popup.vue";
export default {
  name: "NewsCards",

  props: {
    title: String,
    content: String,
    description: String,
    imgSrc: String,
    link: String,
  },

  components: { Popup },

  data() {
    return { isPopupOpen: false, shortDescription: "" };
  },
  methods: {
    /* goToLink(link) {
      window.open(link, "_blank");
    }, */

    openPopup() {
      this.isPopupOpen = true;
    },

    popupConfirmed() {
      this.isPopupOpen = false;
    },
  },

  created() {
    this.shortDescription = this.description.slice(0, 99) + "...";
  },
};
</script>

<style>
.new-card {
  margin: 15px;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 460px;
  color: rgb(0, 0, 0);
  border: 1px rgb(0, 0, 0) solid;
  box-sizing: border-box;
}

.new-card:hover {
  background-color: #beebd0;
}
.new-card__img {
  width: 398px;
  height: 250px;
}

.article-title {
  height: 45px;
  text-align: initial;
  padding-left: 5px;
  padding-right: 5px;
}

.article-description {
  padding-left: 5px;
  padding-right: 5px;
  text-align: initial;
}
</style>
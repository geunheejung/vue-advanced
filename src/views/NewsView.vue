<template>
  <div>
    news
    <ul>
      <li v-for="news in newsList" :key="news.id">
        {{ news.id }}
        {{ news.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchNewsList } from "../api";

export default {
  name: "NewsView",
  data() {
    return {
      newsList: [],
    };
  },
  created() {
    const vm = this;

    fetchNewsList(1).then((news) => {
      vm.newsList = news;
    });
  },
};
</script>

<style></style>

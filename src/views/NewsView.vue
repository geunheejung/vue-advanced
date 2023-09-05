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
import { types } from "../store";
import { mapState } from "vuex";

export default {
  name: "NewsView",
  computed: {
    ...mapState(["newsList"]),
  },
  created() {
    this.$store.dispatch({ type: types.FETCH_NEWS_LIST, id: 1 });
  },
};
</script>

<style></style>

<template>
  <div>
    <p v-for="item in newsList" :key="item.id">
      <a :href="item.url">
        {{ item.title }}
      </a>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
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

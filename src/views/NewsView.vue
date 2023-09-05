<template>
  <PostList :list-data="newsList" />
</template>

<script>
import { mapState } from "vuex";
import { types } from "../store";
import PostList from "../components/PostList.vue";

export default {
  name: "NewsView",
  components: {
    PostList,
  },
  computed: {
    ...mapState(["newsList"]),
  },
  created() {
    this.$store.dispatch({ type: types.FETCH_NEWS_LIST, id: 1 });
  },
};
</script>

<style>
.news-list {
  display: grid;
  margin: 0;
  padding: 0;
}

.news-list .news-item {
  display: grid;
  grid-template-columns: 5rem 1fr;
  grid-template-rows: 3.75rem;
  align-items: center;
  border-bottom: 1px solid #eee;
  list-style: none;
}

.news-list .news-points {
  text-align: center;
  color: #42b883;
}

.news-list .news-title {
  margin: 0;
}
.news-list .link-text {
  color: #828282;
}
</style>

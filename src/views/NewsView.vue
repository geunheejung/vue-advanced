<template>
  <PostList :list-data="newsList" />
</template>

<script>
import { mapState } from "vuex";
import PostList from "../components/PostList.vue";

export default {
  name: "NewsView",
  components: {
    PostList,
  },
  data() {
    return {
      isShow: false,
    };
  },
  computed: {
    ...mapState(["newsList"]),
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

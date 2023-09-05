<template>
  <ul class="news-list">
    <li v-for="item in newsList" :key="item.id" class="news-item">
      <div class="news-points">
        {{ item.points }}
      </div>
      <div>
        <p class="news-title">
          <a :href="item.url">
            {{ item.title }}
          </a>
        </p>
        <small class="link-text">
          by
          <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
        </small>
      </div>
    </li>
  </ul>
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

<style scoped>
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

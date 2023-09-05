<template>
  <div>
    <UserProfile :item="item">
      <template #id>
        {{ item.user }}
      </template>
      <template #created>
        {{ item.time_ago }}
      </template>
    </UserProfile>
    <section class="post-container">
      <p class="title">{{ item.title }}</p>
      <p class="description">
        <span class="points">{{ item.points }} points </span>
        <span class="username">by {{ item.user }}</span>
        <span class="time">{{ item.time_age }}</span>
      </p>
      <p class="content" v-html="item.content" />
    </section>
    <section class="comment">
      <div
        v-for="comment in item.comments"
        :key="comment.id"
        class="comment-item"
      >
        <p>user : {{ comment.user }} | {{ comment.time_ago }}</p>
        <p v-html="comment.content" />
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { types } from "../store";
import UserProfile from "../components/UserProfile.vue";

export default {
  computed: {
    ...mapState(["item"]),
  },
  components: {
    UserProfile,
  },
  created() {
    const {
      $route: {
        query: { id },
      },
      $store: { dispatch },
    } = this;

    dispatch({ type: types.FETCH_INDIVIDUAL_ITEM, data: id });
  },
};
</script>

<style scoped>
.user-info {
  display: flex;
  gap: 0.5rem;
}
.post-container {
  display: grid;
  grid-template-rows: 1.5rem 2rem 1fr;
  margin-bottom: 1rem;
}

.title {
  font-size: 1.5rem;
}
.description {
  font-size: 1rem;
  color: gray;
}
</style>

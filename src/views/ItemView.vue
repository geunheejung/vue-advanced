<template>
  <div>
    <section>
      <!-- 질문 상세 정보 -->
      <div class="user-info">
        <div>User</div>
        <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
      </div>
      <h2>{{ item.title }}</h2>
      <div v-html="item.content" />
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div>사용자 프로필</div>
    </section>
  </div>
</template>

<script>
import { types } from "../store";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["item"]),
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
</style>

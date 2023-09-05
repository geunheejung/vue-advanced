<template>
  <PostList :list-data="askList" />
</template>

<script>
import { mapState } from "vuex";

import { types } from "../store";
import PostList from "../components/PostList.vue";

export default {
  components: {
    PostList,
  },
  computed: {
    ...mapState(["askList"]),
  },
  created() {
    this.$store.dispatch({ type: types.FETCH_ASK_LIST, id: 1 });
  },
};
</script>

<style></style>

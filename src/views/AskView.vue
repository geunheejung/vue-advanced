<template>
  <PostList :list-data="askList" />
</template>

<script>
import { mapState } from "vuex";

import PostList from "../components/PostList.vue";

export default {
  components: {
    PostList,
  },
  computed: {
    ...mapState(["askList"]),
  },
};
</script>

<style></style>

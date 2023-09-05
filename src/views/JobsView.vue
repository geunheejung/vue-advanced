<template>
  <PostList :list-data="jobsList" />
</template>

<script>
import { mapState } from "vuex";
import { fetchJobsList } from "../api";
import { types } from "../store";
import PostList from "../components/PostList.vue";

export default {
  components: {
    PostList,
  },
  computed: {
    ...mapState(["jobsList"]),
  },
  created() {
    this.$store.dispatch({ type: types.FETCH_JOBS_LIST, id: 1 });
  },
};
</script>

<style></style>

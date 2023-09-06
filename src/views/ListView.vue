<template>
  <div>
    <post-list :list-data="list" />
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import { mapState } from "vuex";

export default {
  components: {
    PostList,
  },
  computed: {
    ...mapState(["list"]),
  },
};
</script>

<style></style>

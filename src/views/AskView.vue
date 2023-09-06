<template>
  <PostList :list-data="list" />
</template>

<script>
import ListMixin from "../mixins/ListMixin";
import PostList from "../components/PostList.vue";

export default {
  mixins: [ListMixin],
};
</script>

<style></style>

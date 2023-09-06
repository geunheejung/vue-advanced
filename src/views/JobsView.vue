<template>
  <PostList :list-data="list" />
</template>

<script>
import ListMixin from "../mixins/ListMixin";

export default {
  mixins: [ListMixin],
};
</script>

<style></style>

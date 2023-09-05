<template>
  <ul class="list-container">
    <li v-for="item in listData" :key="item.id">
      <ListItem :item="item" />
    </li>
  </ul>
</template>

<script>
import ListItem from "./ListItem.vue";
export default {
  name: "PostList",
  components: {
    ListItem,
  },
  props: ["listData"],
};
</script>

<style scoped>
.list-container {
  display: grid;
  margin: 0;
  padding: 0;
}
</style>

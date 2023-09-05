<template>
  <div>
    <p v-for="item in askList" :key="item.id">
      <a :href="item.url">
        {{ item.title }}
      </a>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { types } from "../store";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["askList"]),
  },
  created() {
    this.$store.dispatch({ type: types.FETCH_ASK_LIST, id: 1 });
  },
};
</script>

<style></style>

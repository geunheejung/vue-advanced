<template>
  <div>
    ask
    <ul>
      <li v-for="ask in askList" :key="ask.id">
        {{ ask.id }}
        {{ ask.title }}
      </li>
    </ul>
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

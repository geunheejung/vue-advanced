<template>
  <div>
    <p v-for="item in jobsList" :key="item.id">
      <a :href="item.url">
        {{ item.title }}
      </a>
      <small>{{ item.domain }}</small>
    </p>
  </div>
</template>

<script>
import { fetchJobsList } from "../api";
import { types } from "../store";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["jobsList"]),
  },
  created() {
    this.$store.dispatch({ type: types.FETCH_JOBS_LIST, id: 1 });
  },
};
</script>

<style></style>

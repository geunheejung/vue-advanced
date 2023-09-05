<template>
  <div>
    jobs
    <ul>
      <li v-for="jobs in jobsList" :key="jobs.id">
        {{ jobs.id }}
        {{ jobs.title }}
      </li>
    </ul>
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

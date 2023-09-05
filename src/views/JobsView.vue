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
export default {
  data() {
    return {
      jobsList: [],
    };
  },
  created() {
    const vm = this;
    fetchJobsList(1).then((res) => (vm.jobsList = res));
  },
};
</script>

<style></style>

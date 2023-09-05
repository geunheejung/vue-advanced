<template>
  <div>news</div>
</template>

<script>
import axios from "axios";

export default {
  name: "NewsView",
  data() {
    return {
      users: [],
    };
  },
  created() {
    const vm = this;
    const url = `https://api.hnpwa.com/v0/news/1.json`;
    axios.get(url).then((res) => {
      vm.users = res.data;
    });
  },
};
</script>

<style></style>

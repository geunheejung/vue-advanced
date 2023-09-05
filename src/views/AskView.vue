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
import { fetchAskList } from "../api";
export default {
  data() {
    return {
      askList: [],
    };
  },
  created() {
    const vm = this;
    fetchAskList(1).then((res) => (vm.askList = res));
  },
};
</script>

<style></style>

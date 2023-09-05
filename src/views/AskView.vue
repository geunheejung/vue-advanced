<template>
  <PostList :list-data="askList" />
</template>

<script>
import { mapState } from "vuex";

import { types } from "../store";
import PostList from "../components/PostList.vue";
import bus from "../utils/bus";

export default {
  components: {
    PostList,
  },
  computed: {
    ...mapState(["askList"]),
  },
  created() {
    bus.$emit("spinner:start");
    setTimeout(() => {
      this.$store
        .dispatch({ type: types.FETCH_ASK_LIST, id: 1 })
        .then((res) => {
          console.log("[[ FETCHED ]]");
          bus.$emit("spinner:end");
        })
        .catch((error) => {
          console.log(error);
        });
    }, 3000);
  },
};
</script>

<style></style>

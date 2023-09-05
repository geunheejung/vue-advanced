<template>
  <div>
    {{ user.id }}
  </div>
</template>

<script>
import { types } from "../store";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user"]),
  },
  created() {
    const {
      $route: {
        params: { username },
      },
      $store: { dispatch },
    } = this;

    dispatch({ type: types.FETCH_USER_DATA, data: username });
  },
  mounted() {
    debugger;
  },
};
</script>

<style></style>

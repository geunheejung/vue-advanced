<template>
  <div>{{ item.id }}</div>
</template>

<script>
import { types } from "../store";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["item"]),
  },
  created() {
    const {
      $route: {
        params: { id },
      },
      $store: { dispatch },
    } = this;

    dispatch({ type: types.FETCH_INDIVIDUAL_ITEM, data: id });
  },
};
</script>

<style></style>

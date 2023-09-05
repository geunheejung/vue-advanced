<template>
  <UserProfile :item="user">
    <template #id>
      {{ user.id }}
    </template>

    <template #created>
      {{ user.created }}
    </template>

    <template #karma>
      {{ user.karma }}
    </template>
  </UserProfile>
</template>

<script>
import { mapState } from "vuex";
import { types } from "../store";
import UserProfile from "../components/UserProfile.vue";

export default {
  computed: {
    ...mapState(["user"]),
  },
  components: {
    UserProfile,
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
  mounted() {},
};
</script>

<style></style>

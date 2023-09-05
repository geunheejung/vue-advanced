<template>
  <div id="app">
    <tool-bar />
    <router-view />
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
import NewsView from "./views/NewsView.vue";

export default {
  name: "App",
  components: {
    ToolBar,
    NewsView,
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>

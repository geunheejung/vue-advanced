<template>
  <div id="app">
    <tool-bar />
    <transition name="page">
      <router-view />
    </transition>
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
@import "../reset.css";
body {
  padding: 0;
  margin: 0;
}

a {
  color: #34495e;
  text-decoration: none;
}

a.router-link-exact-active {
  text-decoration: underline;
}

a:hover {
  color: #42b883;
}

/* transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>

<template>
  <div id="app">
    <Checkbox />
    <tool-bar />
    <transition name="page">
      <router-view />
    </transition>
    <BaseSpinner :is-spinner="isSpinner" />
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
import NewsView from "./views/NewsView.vue";
import BaseSpinner from "./components/BaseSpinner.vue";
import ListView from "./views/ListView.vue";
import Checkbox from "@/containers/Checkbox.vue";
import bus from "./utils/bus";

export default {
  name: "App",
  components: {
    ToolBar,
    NewsView,
    BaseSpinner,
    ListView,
    Checkbox,
  },
  data() {
    return { isSpinner: false };
  },
  created() {
    bus.$on("spinner:start", this.startSpinner);
    bus.$on("spinner:end", this.endSpinner);
  },
  beforeUnmount() {
    bus.$off("spinner:start", this.startSpinner);
    bus.$off("spinner:end", this.endSpinner);
  },
  methods: {
    startSpinner() {
      this.isSpinner = true;
    },
    endSpinner() {
      this.isSpinner = false;
    },
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

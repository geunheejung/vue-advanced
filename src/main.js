import Vue, { ref, watchEffect } from "vue";
import router from "./routes";
import App from "./App.vue";
import store from "./store";
import reactivityInDepth from "../reactivity-in-depth";

Vue.config.productionTip = false;

reactivityInDepth();

const vue = new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");

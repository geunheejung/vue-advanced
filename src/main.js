import Vue, { ref, watchEffect } from "vue";
import router from "./routes";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

const vue = new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");

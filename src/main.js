import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import router from "./routes";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

// 애플리케이션의 구조를 파악할 수 있는 청사진 -> 구조도가 눈에 잘 보여야 함.
// Vue.use(VueRouter);

const vue = new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");

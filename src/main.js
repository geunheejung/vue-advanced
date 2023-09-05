import Vue from "vue";
import router from "./router";
import App from "./App.vue";
import VueRouter from "vue-router";

Vue.config.productionTip = false;

// 애플리케이션의 구조를 파악할 수 있는 청사진 -> 구조도가 눈에 잘 보여야 함.

Vue.use(VueRouter);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

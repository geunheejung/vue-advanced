import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import JobsView from "../views/JobsView.vue";
import AskView from "../views/AskView.vue";

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/news",
      component: NewsView,
    },
    {
      path: "/jobs",
      component: JobsView,
    },
    {
      path: "/ask",
      component: AskView,
    },
  ],
});

export default router;

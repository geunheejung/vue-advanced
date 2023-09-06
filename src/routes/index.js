import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import JobsView from "../views/JobsView.vue";
import AskView from "../views/AskView.vue";
import ItemView from "../views/ItemView.vue";
import UserView from "../views/UserView.vue";
import createListView from "../views/CreateListView";
import { url } from "@/api";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news",
      component: NewsView,
      children: [],
      name: url.news,
    },
    {
      path: "/ask",
      component: AskView,
      name: url.ask,
    },
    {
      path: "/jobs",
      component: JobsView,
      name: url.jobs,
    },
    {
      path: "/item",
      component: ItemView,
      name: url.individualItem,
    },
    {
      path: "/user/:username",
      component: UserView,
      name: url.user,
    },
  ],
});

export default router;

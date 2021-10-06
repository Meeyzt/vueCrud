import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/posts/:id",
    name: "posts",
    component: () => import("../components/Content/GetPost.vue"),
  },
  {
    path: "*",
    name: "all",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

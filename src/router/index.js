import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home/Home.vue";
import getPost from "../components/Content/GetPost.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/posts",
    name: "getPost",
    component: getPost,
  },
  {
    path: "/addPost",
    name: "addPost",
    component: () => import("../components/AddPost"),
  },
  {
    path: "/updatePost",
    name: "updatePost",
    component: () => import("../components/updatePost"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

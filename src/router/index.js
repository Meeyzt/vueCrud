import { createRouter, createWebHistory } from "vue-router";
import User from "../components/User";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/Home"),
  },
  {
    path: "/posts/:id",
    name: "getPost",
    component: () => import("../components/Content/GetPost"),
  },
  {
    path: "/addPost",
    name: "addPost",
    component: () => import("../components/AddPost"),
  },
  {
    path: "/updatePost/:id",
    name: "updatePost",
    component: () => import("../components/updatePost"),
  },
  {
    path: "/users/:id",
    name: "users",
    component: User,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

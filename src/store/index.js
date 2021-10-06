import axios from "axios";
import { createStore } from "vuex";
import router from "../router";

export default createStore({
  state: {
    posts: [],
    users: [],
  },
  mutations: {
    initPosts(state, posts) {
      state.posts = posts;
    },
    initUsers(state, users) {
      state.users = users;
    },
    addPost(state, post) {
      state.posts.push(post);
      router.push({ name: "Home" });
    },
    updatePost(state, post) {
      let index = state.posts.findIndex((c) => c.id == post.id);
      if (index > -1) {
        state.posts[index] = post;
        router.push({ name: "Home" });
      }
    },
    deletePost(state, postID) {
      let index = state.posts.findIndex((c) => c.id == postID);
      if (index > -1) {
        state.posts.splice(index, 1);
        router.push({ name: "Home" });
      }
    },
  },
  actions: {
    initApp(context) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          context.commit("initPosts", response.data);
        })
        .catch((e) => console.log(e));
    },
    initUsers(context) {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          context.commit("initUsers", response.data);
        })
        .catch((e) => console.log(e));
    },
    addPost(context, post) {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", post)
        .then((response) => {
          alert("Added", response.request.responseText);
          context.commit("addPost", post);
        });
    },
    updatePost(context, post) {
      axios
        .put("https://jsonplaceholder.typicode.com/posts/" + post.id, post)
        .then((response) => {
          alert("Updated", response.request.responseText);
          context.commit("updatePost", post);
        });
    },
    deletePost(context, postID) {
      axios
        .delete("https://jsonplaceholder.typicode.com/posts/" + postID)
        .then((response) => {
          alert("Deleted", response.request.responseText);
          context.commit("deletePost", postID);
        });
    },
  },
  getters: {
    getPosts(state) {
      return state.posts;
    },
    getUsers(state) {
      return state.users;
    },
  },
});

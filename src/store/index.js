import axios from "axios";
import { createStore } from "vuex";
import router from "../router";

export default createStore({
  state: {
    posts: [],
    post: {},
  },
  mutations: {
    initPosts(state, posts) {
      state.posts = posts;
    },
    addPost(state, post) {
      state.posts.push(post);
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
    addPost(context, post) {
      context.commit("addPost", post);
    },
    updatePost(context, post) {
      context.commit("updatePost", post);
    },
    deletePost(context, postID) {
      context.commit("deletePost", postID);
    },
  },
  getters: {
    getPosts(state) {
      return state.posts;
    },
  },
});

import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [],
  },
  mutations: {
    initPosts(state, posts) {
      state.posts = posts;
    },
    addPost(state, post) {
      state.posts.push(post);
    },
    // updatePost(state, post) {},
    // deletePost(state, postID) {},
  },
  actions: {
    initApp() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          for (let key in response.data) {
            this.state.posts.push(response.data[key]);
          }
        })
        .catch((e) => console.log(e));
    },
    // addPost(context, post) {},
    // updatePost(context, post) {},
    // deletePost(context, postID) {},
  },
  getters: {
    getPosts(state) {
      return state.posts;
    },
  },
});

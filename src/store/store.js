import Vuex from "vuex";

export const store = new Vuex.Store({
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
    // initApp(context) {},
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

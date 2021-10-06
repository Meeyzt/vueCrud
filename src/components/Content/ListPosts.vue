<template>
  <div class="row justify-content-md-center">
    <Post v-for="post in posts" :post="post" :key="post.id" />
  </div>
</template>

<script>
import Post from "./Post.vue";
export default {
  components: { Post },
  computed: {
    posts() {
      return this.$store.getters.getPosts;
    },
  },
};
</script>

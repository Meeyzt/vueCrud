<template>
  <div class="justify-content-md-center d-flex flex-row flex-wrap">
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

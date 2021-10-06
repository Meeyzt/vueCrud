<template>
  <div class="row justify-content-md-center">
    <Post v-for="post in posts" :post="post" :key="post.id" />
  </div>
</template>

<script>
import Post from "@/components/Content/Post";
import axios from "axios";
export default {
  components: { Post },
  data() {
    return { posts: [] };
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        for (let key in response.data) {
          this.posts.push(response.data[key]);
        }
      })
      .catch((e) => console.log(e));
  },
};
</script>

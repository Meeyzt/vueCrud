<template>
  <div class="home">
    <Posts />
  </div>
</template>

<script>
import Posts from "../Content/ListPosts.vue";
export default {
  name: "Home",
  components: { Posts },
};
</script>

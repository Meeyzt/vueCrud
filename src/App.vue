<template>
  <navBar />
  <router-view class="mt-4" />
</template>

<style>
body {
  background-color: #222;
}
</style>
<script>
import navBar from "./components/navBar";
export default {
  components: { navBar },
  created() {
    this.$store.dispatch("initApp");
    this.$store.dispatch("initUsers");
  },
};
</script>

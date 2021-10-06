<template>
  <navBar />
  <router-view />
</template>

<style>
body {
  background-color: rgb(23, 27, 27);
}
</style>
<script>
import navBar from "./components/navBar";
export default {
  components: { navBar },
  created() {
    this.$store.dispatch("initApp");
  },
};
</script>

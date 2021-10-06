<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand" tag="a">Vue CRUD </router-link>
    <div class="collapse navbar-collapse">
      <div class="navbar-nav">
        <router-link to="/" class="nav-item nav-link" tag="a">Home</router-link>
        <router-link to="/addPost" class="nav-item nav-link" tag="a"
          >Add Post</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

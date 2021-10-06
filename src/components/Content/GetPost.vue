<template>
  <div class="justify-content-center">
    <div class="col-md-6 offset-3 mt-5">
      <div class="card bg-dark text-light">
        <div class="card-body">
          <h5 class="card-title">
            {{ post.title }}
          </h5>
          <p class="card-text position-static">
            {{ post.body }}
          </p>
          <div class="float-right">
            <router-link
              :to="{ name: 'updatePost', params: { ...post } }"
              tag="button"
              class="btn btn-sm btn-outline-warning"
              >Update</router-link
            >
            <button
              @click="$store.dispatch('deletePost', post.id)"
              class="btn btn-sm btn-outline-danger ml-2 mr-2"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      post: {
        id: 0,
        body: "",
        title: "",
        userId: "",
      },
    };
  },
  created() {
    this.post = this.$route.params;
  },
};
</script>

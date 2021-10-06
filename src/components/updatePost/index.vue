<template>
  <div class="row">
    <div class="col-md-6 offset-3">
      <h3 class="text-center text-info mt-5">Update Post</h3>
      <form
        @submit.prevent="onSubmit"
        class="card bg-dark text-light mt-5 p-3 border border-dark shadow-lg rounded"
      >
        <div class="form-group">
          <label>Post header</label>
          <input
            v-model="post.title"
            type="text"
            class="form-control text-info bg-dark border border-info"
            placeholder="Write a header ur post"
          />
        </div>
        <div class="form-group">
          <label>Post body</label>
          <input
            v-model="post.body"
            type="text"
            class="form-control text-warning bg-dark border border-warning"
            placeholder="Write a body ur post"
          />
        </div>
        <button class="btn btn-outline-success">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        id: 0,
        body: "",
        title: "",
        userId: 116,
      },
    };
  },
  created() {
    this.post = this.$route.params;
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("updatePost", this.post);
    },
  },
};
</script>

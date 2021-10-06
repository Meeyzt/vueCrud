<template>
  <div class="col-md-6 offset-3 mt-5">
    <h3 class="text-center text-info mt-5 mb-4">Post Info</h3>
    <div class="card bg-dark text-light shadow-lg p-3">
      <div class="card-body">
        <h5 class="card-title">
          {{ post.title }}
        </h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ username }}</h6>
        <p class="card-text position-static">
          {{ post.body }}
        </p>
        <div class="float-right">
          <button @click="updatePost" class="btn btn-sm btn-outline-warning">
            Update
          </button>
          <button
            @click="deletePost"
            class="btn btn-sm btn-outline-danger ml-2 mr-2"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
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
      username: "",
    };
  },
  computed: {
    posts() {
      return this.$store.getters.getPosts;
    },
    users() {
      return this.$store.getters.getUsers;
    },
  },
  methods: {
    deletePost() {
      if (this.post.id != 0 && this.post.id != undefined) {
        this.$store.dispatch("deletePost", this.post.id);
      } else {
        alert("Please select a post");
        router.push({ name: "Home" });
      }
    },
    updatePost() {
      if (this.post.id != 0 && this.post.id != undefined) {
        router.push({ path: `/updatePost/${this.post.id}` });
      } else {
        alert("Please select a post");
        router.push({ name: "Home" });
      }
    },
  },
  created() {
    try {
      const postid = this.$route.params.id;
      this.post = this.posts.find(
        (item) => item.id.toString() === postid.toString()
      );
      const user = this.users.find(
        (item) => item.id.toString() === this.post.userId.toString()
      );
      if (user) {
        this.username = user.name;
      } else {
        this.username = "Mehmet";
      }
    } catch (error) {
      alert(error);
    }
  },
};
</script>
<style>
.margin-top100 {
  margin-top: 75px !important;
}
</style>

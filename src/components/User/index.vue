<template>
  <div class="container">
    <div class="justify-content-md-center d-flex flex-row flex-wrap">
      <div
        class="col-md-6 offset-md-2 mb-5 w-25 h-25 mt-5 mh-25 mw-25 d-inline"
      >
        <div class="card bg-dark text-light shadow-lg">
          <div class="card-body">
            <h5 class="card-title">
              {{ user.name }}
            </h5>
            <h6 class="text">Username: {{ user.username }}</h6>
            <h6 class="text">Mail Adress: {{ user.email }}</h6>
            <h6 class="text">Phone Number: {{ user.phone }}</h6>
            <h6 class="text">Company: {{ user.company.name }}</h6>
            <p class="card-text position-static">
              Web Site: {{ user.website }}
            </p>
            <p>
              Address:
              <span
                >{{ user.address.street }} St. {{ user.address.suite }},
                {{ user.address.zipcode }}
                <br />
                {{ user.address.city }}</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="justify-content-md-center d-flex flex-row flex-wrap">
      <Post v-for="post in posts" :post="post" :key="post.id" />
    </div>
  </div>
</template>

<script>
import Post from "../Content/Post.vue";
export default {
  components: { Post },
  computed: {
    users() {
      return this.$store.getters.getUsers;
    },
    getPosts() {
      return this.$store.getters.getPosts;
    },
  },
  data() {
    return { user: {}, posts: [] };
  },
  created() {
    const userId = this.$route.params.id.toString();
    this.user = this.users.find((item) => item.id.toString() === userId);
    this.posts = this.getPosts.filter(
      (item) => item.userId.toString() === userId
    );
  },
};
</script>

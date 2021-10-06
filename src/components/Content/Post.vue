<template>
  <div class="col-md-auto mb-5 w-25 h-25 mt-5 mh-25 mw-25 d-inline">
    <div class="card bg-dark text-light shadow-lg">
      <div class="card-body">
        <h5 class="card-title">
          {{ post.title }}
        </h5>
        <router-link
          :to="{ path: `/users/${post.userId}` }"
          class="card-subtitle mb-2 text-muted"
          >{{ username }}</router-link
        >
        <p class="card-text position-static">
          {{ post.body }}
        </p>
        <div class="float-right">
          <router-link :to="{ path: `/posts/${post.id}` }">View</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
  computed: {
    users() {
      return this.$store.getters.getUsers;
    },
    username() {
      const user = this.users.find((item) => item.id === this.post.userId);
      if (user) {
        return user.name;
      } else {
        return "Mehmet";
      }
    },
  },
};
</script>

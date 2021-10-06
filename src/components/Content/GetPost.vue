<template>
  <div class="col-md-auto pt-3">
    <div class="card">
      <div class="card-body" style="width:20rem">
        <h5 class="card-title">
          {{ post.title }}
        </h5>
        <p class="card-text">
          {{ post.body }}
        </p>
        <a :href="'/posts/' + post.id" class="card-link">View</a>
        <a :href="'/posts/' + post.id" class="card-link text-danger">Delete</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  components: {},
  created() {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/posts/" + this.$route.params.id
      )
      .then((response) => {
        this.post = response.data;
      })
      .catch((e) => console.log(e));
  },
  data() {
    return {
      post: {},
    };
  },
};
</script>
/* background-image: linear-gradient( to right top, #051937, #002436, #022b2d,
#293928, #32342d );*/

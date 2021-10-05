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
export default {
  props: ["post"],
};
</script>

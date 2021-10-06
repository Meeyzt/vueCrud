<template>
  <div class="col-md-auto mb-5 w-25 h-25 mt-5 mh-25 mw-25 d-inline">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">
          {{ post.title }}
        </h5>
        <p class="card-text position-static">
          {{ post.body }}
        </p>
        <div class="float-right">
          <router-link
            :to="{
              name: 'getPost',
              params: {
                ...post,
              },
            }"
            >View</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

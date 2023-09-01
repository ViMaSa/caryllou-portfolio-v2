<template>
    <div class="card">
      <router-link :to="'/caryllou-portfolio-v2/portfolio/' + titleURL">
        <div class="card-header">
          <h1 class="card-number">{{ number }}</h1>
          <div class="card-divider"></div>
          <h5 class="card-title">{{ title }}</h5>
        </div>
        <picture>
          <source :srcset="image.desktop" media="(min-width: 768px)" />
          <source :srcset="image.mobile" />
          <img :src="image.mobile" :alt="title" class="card-background">
        </picture>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    image: {
      type: Object,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    titleURL: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped>
.card {
  min-height: 397px;
  min-width: 173px;
  max-width: 346px;
  border: none;
  margin-bottom: 10px;
}

.card-divider {
  width: 50%;
  height: 2px;
  background-color: #a5b49d;
  margin: 0.5rem auto;
}

.card-header {
  background: none;
}

h5 {
  margin: 15px 0 5px 0;
}

a {
  text-decoration: none;
  color: #000;
}
</style>

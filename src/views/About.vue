<template>
  <div class="image-container">
    <div class="card">
      <img :src="currentImage" class="card-img-top img-fluid" alt="Caryllou Candid">
      <div class="card-body">
        <h5 class="card-title">hey, hi, hello!</h5>
        <p class="card-text">
          My name is Caryl Lou and I am a graphic designer. I love all things design, but have a
          strong interest in editorial and publication design. Currently, I am learning about UX/UI
          design. I am always eager for opportunities to learn more about design and to become a
          better designer.
        </p>
        <p class="card-text">
          When I am not designing, I like to watch movies, learn more about film photography, read,
          try a new recipe, play video games or take a road trip somewhere.
        </p>
        <p class="card-text"> Based in Las Vegas, NV.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  computed: {
    currentImage () {
      return window.innerWidth >= 856
        ? this.images.desktop
        : this.images.mobile;
    }
  },
  data() {
    return {
      images: {
        mobile: require('../assets/images/about-view/about.png'),
        desktop: require('../assets/images/about-view/about_2x.png')
      }
    }
  }
}
</script>

<style scoped>
.image-container {
  max-width: 320px;
  margin: 0 auto;
}

.card {
  padding: 1rem;
}

@media (min-width: 856px) {
  .image-container {
    max-width: 786px;
  }
}
</style>
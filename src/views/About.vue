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
        <div class="card-divider"></div>
      </div>
      <div class="card-footer bg-transparent">
        <p>Find me here:</p>
        <div class="icon-container d-flex flex-wrap justify-content-evenly">
          <a href="mailto: clpaayas@gmail.com">
            <font-awesome-icon :icon="['fas', 'envelope']" size="2x" class="icon icon-blue" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <font-awesome-icon :icon="['fab', 'instagram']" size="2x" class="icon icon-blue" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" class="icon icon-blue" />
          </a>
          <a href="https://www.behance.net/" target="_blank">
            <font-awesome-icon :icon="['fab', 'behance']" size="2x" class="icon icon-blue" />
          </a>
        </div>
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
        desktop: require('../assets/images/about-view/about_2x.png'),
      }
    }
  }
}
</script>

<style scoped>
.icon-blue {
  color: #1d5d86;
}

.image-container {
  max-width: 320px;
  margin: 0 auto;
}

.card {
  padding: 1rem;
}
.card-divider {
  width: 50%;
  height: 2px;
  background-color: #a5b49d;
  margin: 0.5rem auto;
}

.card-footer {
  border: none;
}

@media (min-width: 856px) {
  .icon-container {
    width: 50%;
    margin: 0 auto;
  }

  .image-container {
    max-width: 786px;
  }
}
</style>
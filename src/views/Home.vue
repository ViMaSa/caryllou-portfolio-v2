<template>
  <div class="home d-flex justify-content-center align-items-center">
    <div class="card card-center card-transparent text-center">
      <div class="card-body" @click="scrollToPortfolio">
        <h5 class="card-title">Caryl Lou Paayas</h5>
        <p class="card-text">[ka•reel loo pa•ah•yas]</p>
        <div class="bounce-arrow">
          <font-awesome-icon icon="chevron-down" size="lg"/>
        </div>
      </div>
    </div>
  </div>
  <Portfolio />
</template>

<script>
import Portfolio from './Portfolio.vue';

export default {
  name: 'HomePage',
  emits: ['vnode-unmounted'],
  components: {
    Portfolio,
  },
  methods: {
    scrollToPortfolio() {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const homeHeight = document.querySelector('.home').offsetHeight;
      window.scrollTo({
        top: homeHeight + navbarHeight,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style scoped>
.bounce-arrow {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: bounce 2s infinite;
  cursor: pointer;
}
.card {
  color: #fff3e8;
  margin-bottom: 56px;
}

.card-transparent {
  background-color: transparent;
  border: none;
}

.home {
  min-height: calc(100vh - 56px);
  max-width: 100vw;
}
</style>

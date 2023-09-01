<template>
  <div class="life-aquatic-container">
    <div class="card">
      <div class="card-body">
        <h2>04</h2>
        <div class="card-divider"/>
        <h5>Life Aquatic</h5>
        <div class="card-divider"/>
        <p class="card-text">
          <em>Student Project</em>
        </p>
        <p class="card-text">
          <strong>Brief: </strong>Choose from one of many of Las Vegas’ entertainment/venue and rebrand
          it, creating your own branding and identity for it.
        </p>
        <p class="card-text">
          <strong>Solution: </strong>Rebrand Mandalay Bay’s Shark Reef Aquarium into the LIFE AQUATIC.
          It brings to life Wes Anderson’s 2004 film, The Life Aquatic with Steve Zissou.
        </p>
      </div>
    </div>
    <div class="card">
      <h4 class="card-title">Branding & Identity</h4>
      <div v-for="(image) in images" :key="image.id">
        <div class="card-body">
          <picture>
            <source :srcset="image.desktop" media="(min-width: 750px)" />
            <source :srcset="image.mobile" />
            <img :src="image.mobile" :alt="image.mobile" />
          </picture>
        </div>
      </div>
    </div>
    <FooterNav
      :prevUrlLink="'/portfolio/trek-for-trees'"
      :prevLinkText="'03. Trek for Trees'"
      :nextUrlLink="'/portfolio/'"
      :nextLinkText="'Portfolio Spread'"
    />
  </div>
</template>

<script>
import FooterNav from '@/components/FooterNav.vue';

export default {
  name: 'LifeAquaticProject',
  components: {
    FooterNav,
  },
  data() {
    return {
      images: [
        {
          id: 1,
          mobile: require('@/assets/images/life-aquatic-view/LifeAquatic_LogoMock.png'),
          desktop: require('@/assets/images/life-aquatic-view/LifeAquatic_LogoMock2x.png'),
        },
        {
          id: 2,
          mobile: require('@/assets/images/life-aquatic-view/LifeAquatic_Stationery.png'),
          desktop: require('@/assets/images/life-aquatic-view/LifeAquatic_Stationery2x.png'),
        },
        {
          id: 3,
          mobile: require('@/assets/images/life-aquatic-view/LifeAquatic_Poster.png'),
          desktop: require('@/assets/images/life-aquatic-view/LifeAquatic_Poster2x.png'),
        },
      ],
    }
  },
}
</script>

<style scoped>
.card {
  margin: 20px 0;
}

.card-divider {
  width: 50%;
  height: 2px;
  background-color: #a5b49d;
  margin: 0.5rem auto;
}

.card-text {
  margin: 10px 20px;
}

.card-title {
  margin-top: 10px;
}

.life-aquatic-container {
  margin: 0 auto;
}

@media (min-width: 856px) {
  .life-aquatic-container {
    max-width: 750px;
  }
}
</style>

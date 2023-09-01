<template>
  <div class="digital-journal-container">
    <div class="card">
      <div class="card-body">
        <h2>01</h2>
        <div class="card-divider"/>
        <h5>Digital Journal</h5>
        <div class="card-divider"/>
        <p class="card-text">
          This is a passion project that documents 2021.
        </p>
        <p class="card-text">
          My goal was to design as much as possible in my free time and to explore design without any constraints you would normally face when working on a project for a client.
        </p>
        <p class="card-text">
          Photos used were taken with a point and shoot camera, as I also wanted to learn more about shooting with and developing film. Featured here a several spreads with varying layouts.
        </p>
      </div>
    </div>
    <div v-for="(card) in cards" :key="card.id">
      <div class="card">
        <picture>
          <source :srcset="card.desktopImage" media="(min-width: 750px)" />
          <source :srcset="card.mobileImage" />
          <img :src="card.mobileImage" :alt="card.mobileImage" />
        </picture>
      </div>
    </div>
    <FooterNav
      :prevUrlLink="'/portfolio'"
      :prevLinkText="'Portfolio Spread'"
      :nextUrlLink="'/portfolio/colliers'"
      :nextLinkText="'02. Colliers'"
    />
  </div>
</template>

<script>
import FooterNav from '@/components/FooterNav.vue';

export default {
  name: 'DigitalJournalProject',
  components: {
    FooterNav,
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          mobileImage: require('@/assets/images/digital-journal-view/cover.png'),
          desktopImage: require('@/assets/images/digital-journal-view/cover_2x.png'),
        },
        {
          id: 2,
          mobileImage: require('@/assets/images/digital-journal-view/Spread1.png'),
          desktopImage: require('@/assets/images/digital-journal-view/Spread1_2x.png'),
        },
        {
          id: 3,
          mobileImage: require('@/assets/images/digital-journal-view/Spread2.png'),
          desktopImage: require('@/assets/images/digital-journal-view/Spread2_2x.png'),
        },
        {
          id: 4,
          mobileImage: require('@/assets/images/digital-journal-view/Spread3.png'),
          desktopImage: require('@/assets/images/digital-journal-view/Spread3_2x.png'),
        },
        {
          id: 5,
          mobileImage: require('@/assets/images/digital-journal-view/Spread4.png'),
          desktopImage: require('@/assets/images/digital-journal-view/Spread4_2x.png'),
        },
        {
          id: 6,
          mobileImage: require('@/assets/images/digital-journal-view/Spread5.png'),
          desktopImage: require('@/assets/images/digital-journal-view/Spread5_2x.png'),
        },
        {
          id: 7,
          mobileImage: require('@/assets/images/digital-journal-view/Spread6.png'),
          desktopImage: require('@/assets/images/digital-journal-view/Spread6_2x.png'),
        },
        {
          id: 8,
          mobileImage: require('@/assets/images/digital-journal-view/Spread7.png'),
          desktopImage: require('@/assets/images/digital-journal-view/Spread7_2x.png'),
        },
      ]
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

.digital-journal-container {
  margin: 0 auto;
}

@media (min-width: 856px) {
  .digital-journal-container {
    max-width: 750px;
  }
}
</style>

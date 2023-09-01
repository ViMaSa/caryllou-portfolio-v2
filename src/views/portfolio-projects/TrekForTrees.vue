<template>
  <div class="trek-for-trees-container">
    <div class="card">
      <div class="card-body">
        <h2>03</h2>
        <div class="card-divider"/>
        <h5>Trek For Trees</h5>
        <div class="card-divider"/>
        <p class="card-text">
          <em>UNLV Graphic Design & Media Thesis</em>
        </p>
        <p class="card-text">
          <strong>Brief: </strong>Find a problem, in this case deforestation, and create a solution for it.
        </p>
        <p class="card-text">
          <strong>Solution: </strong>With a focus on branding and identity, create a non-profit organization that raises awareness for deforestation.
        </p>
      </div>
    </div>
    <div class="card">
      <h5 class="card-title">Logo Development</h5>
      <picture>
        <source :srcset="image1.desktop" media="(min-width: 750px)" />
        <source :srcset="image1.mobile" />
        <img :src="image1.mobile" :alt="image1.mobile" />
      </picture>
      <picture>
        <source :srcset="image2.desktop" media="(min-width: 750px)" />
        <source :srcset="image2.mobile" />
        <img :src="image2.mobile" :alt="image2.mobile" />
      </picture>
      <picture>
        <source :srcset="image3.desktop" media="(min-width: 750px)" />
        <source :srcset="image3.mobile" />
        <img :src="image3.mobile" :alt="image3.mobile" />
      </picture>
    </div>
    <div class="card">
      <h5 class="card-title">Postcard & Takeaway</h5>
      <div class="picture-row-container">
        <picture>
          <source :srcset="image4.desktop" media="(min-width: 750px)" />
          <source :srcset="image4.mobile" />
          <img :src="image4.mobile" :alt="image4.mobile" />
        </picture>
        <picture>
          <source :srcset="image5.desktop" media="(min-width: 750px)" />
          <source :srcset="image5.mobile" />
          <img :src="image5.mobile" :alt="image5.mobile" />
        </picture>
      </div>
      <p class="card-text">
        <strong>Left: </strong>Postcard that is mailed out inviting people to visit an immersive installation that shows the effects of deforestation.<br/>
        <strong>Right: </strong>A takeaway piece that shares a similar concept with the installation, but in a much smaller scale.<br/>
      </p>
    </div>
    <div class="card">
      <h5 class="card-title">App</h5>
      <picture>
        <source :srcset="image6.desktop" media="(min-width: 750px)" />
        <source :srcset="image6.mobile" />
        <img :src="image6.mobile" :alt="image6.mobile" />
      </picture>
      <p class="card-text">
        By using this app to track how many miles you’ve ran, hiked, or walked, you are helping plant trees in forests around the world.
        Trek for Trees works in partnership with other organizations to plant a tree for every 25 miles completed by an individual.
      </p>
    </div>
    <div class="card">
      <h5 class="card-title">Booklet</h5>
      <picture>
        <source :srcset="image7.desktop" media="(min-width: 750px)" />
        <source :srcset="image7.mobile" />
        <img :src="image7.mobile" :alt="image7.mobile" />
      </picture>
    </div>
    <FooterNav
      :prevUrlLink="'/portfolio/colliers'"
      :prevLinkText="'02. Colliers'"
      :nextUrlLink="'/portfolio/life-aquatic'"
      :nextLinkText="'04. Life Aquatic'"
    />
  </div>
</template>

<script>
import FooterNav from '@/components/FooterNav.vue';

export default {
  name: 'TrekForTreesProject',
  components: {
    FooterNav,
  },
  data() {
    return {
      image1: {
        mobile: require('@/assets/images/trek-for-trees-view/LogoDev1.png'),
        desktop: require('@/assets/images/trek-for-trees-view/LogoDev1_2x.png'),
      },
      image2: {
        mobile: require('@/assets/images/trek-for-trees-view/LogoDev2.png'),
        desktop: require('@/assets/images/trek-for-trees-view/LogoDev2_2x.png'),
      },
      image3: {
        mobile: require('@/assets/images/trek-for-trees-view/LogoDev3.png'),
        desktop: require('@/assets/images/trek-for-trees-view/LogoDev3_2x.png'),
      },
      image4: {
        mobile: require('@/assets/images/trek-for-trees-view/Postcard.png'),
        desktop: require('@/assets/images/trek-for-trees-view/Postcard_2x.png'),
      },
      image5: {
        mobile: require('@/assets/images/trek-for-trees-view/Takeaway.png'),
        desktop: require('@/assets/images/trek-for-trees-view/Takeaway_2x.png'),
      },
      image6: {
        mobile: require('@/assets/images/trek-for-trees-view/Trek_FullMockups.png'),
        desktop: require('@/assets/images/trek-for-trees-view/Trek_FullMockups_2x.png'),
      },
      image7: {
        mobile: require('@/assets/images/trek-for-trees-view/Book_FullMockup.png'),
        desktop: require('@/assets/images/trek-for-trees-view/Book_FullMockup_2x.png'),
      },
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

.picture-row-container {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
}

.trek-for-trees-container {
  margin: 0 auto;
}

img {
  margin: 5px;
}

@media (min-width: 856px) {
  .card-title {
    margin: 10px 0 5px 0;
  }
  .trek-for-trees-container {
    max-width: 750px;
  }

  img {
    margin: 10px;
  }
}
</style>

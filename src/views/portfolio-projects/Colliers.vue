<template>
  <div class="colliers-container">
    <div class="card">
      <div class="card-body">
        <h2>02</h2>
        <div class="card-divider"/>
        <h5>Colliers</h5>
        <div class="card-divider"/>
        <p class="card-text">
          Colliers is a commercial real estate company.
          As a graphic designer for them, I worked with the design manager and brokers to create materials such as brochures, email campaigns, social assets, and posters.
        </p>
      </div>
    </div>
    <div class="card">
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
      <div class="card-body">
        <h5 class="card-title">Colliers Branded Projects</h5>
        <p class="card-text">
          Most marketing materials adhere to branding guidelines.
          However, the layout of a page varies depending on the content provided.
        </p>
      </div>
    </div>
    <div class="card">
      <div class="top-images-set">
        <picture>
          <source :srcset="image3.desktop" media="(min-width: 750px)" />
          <source :srcset="image3.mobile" />
          <img :src="image3.mobile" :alt="image3.mobile" />
        </picture>
        <picture>
          <source :srcset="image4.desktop" media="(min-width: 750px)" />
          <source :srcset="image4.mobile" />
          <img :src="image4.mobile" :alt="image4.mobile" />
        </picture>
      </div>
      <picture>
        <source :srcset="image5.desktop" media="(min-width: 750px)" />
        <source :srcset="image5.mobile" />
        <img :src="image5.mobile" :alt="image5.mobile" />
      </picture>
      <div class="card-body">
        <h5 class="card-title">Custom Projects</h5>
        <p class="card-text">
          Properties receive custom marketing collaterals depending on factors such as price, building size, location, or who the client is.
        </p>
      </div>
    </div>
    <div class="card">
      <div class="top-half-images">
        <picture>
          <source :srcset="image6.desktop" media="(min-width: 750px)" />
          <source :srcset="image6.mobile" />
          <img :src="image6.mobile" :alt="image6.mobile" />
        </picture>
        <div class="right-half-images">
          <picture>
            <source :srcset="image7.desktop" media="(min-width: 750px)" />
            <source :srcset="image7.mobile" />
            <img :src="image7.mobile" :alt="image7.mobile" />
          </picture>
          <picture>
            <source :srcset="image8.desktop" media="(min-width: 750px)" />
            <source :srcset="image8.mobile" />
            <img :src="image8.mobile" :alt="image8.mobile" />
          </picture>
        </div>
      </div>
      <picture>
        <source :srcset="image9.desktop" media="(min-width: 750px)" />
        <source :srcset="image9.mobile" />
        <img :src="image9.mobile" :alt="image9.mobile" />
      </picture>
      <div class="card-body">
        <h5 class="card-title">In-House Projects</h5>
        <p class="card-text">
          In-house projects consisted of posters of events happening in the office.
          It also includes social assets created for different broker teams, such as holiday greetings.
        </p>
      </div>
    </div>
    <FooterNav
      :prevUrlLink="'/portfolio/digital-journal'"
      :prevLinkText="'01. Digital Journal'"
      :nextUrlLink="'/portfolio/trek-for-trees'"
      :nextLinkText="'03. Trek for Trees'"
    />
  </div>
</template>

<script>
import FooterNav from '@/components/FooterNav.vue';

export default {
  name: 'colliers-project',
  components: {
    FooterNav,
  },
  data() {
    return {
      image1: {
        mobile: require('@/assets/images/colliers-view/group1S1.png'),
        desktop: require('@/assets/images/colliers-view/group1S1_2x.png'),
      },
      image2: {
        mobile: require('@/assets/images/colliers-view/group1S2.png'),
        desktop: require('@/assets/images/colliers-view/group1S2_2x.png'),
      },
      image3: {
        mobile: require('@/assets/images/colliers-view/group2S1.png'),
        desktop: require('@/assets/images/colliers-view/group2S1_2x.png'),
      },
      image4: {
        mobile: require('@/assets/images/colliers-view/group2S2.png'),
        desktop: require('@/assets/images/colliers-view/group2S2_2x.png'),
      },
      image5: {
        mobile: require('@/assets/images/colliers-view/group2S3.png'),
        desktop: require('@/assets/images/colliers-view/group2S3_2x.png'),
      },
      image6: {
        mobile: require('@/assets/images/colliers-view/group3S1.png'),
        desktop: require('@/assets/images/colliers-view/group3S1_2x.png'),
      },
      image7: {
        mobile: require('@/assets/images/colliers-view/group3S2.png'),
        desktop: require('@/assets/images/colliers-view/group3S2_2x.png'),
      },
      image8: {
        mobile: require('@/assets/images/colliers-view/group3S3.png'),
        desktop: require('@/assets/images/colliers-view/group3S3_2x.png'),
      },
      image9: {
        mobile: require('@/assets/images/colliers-view/group3S4.png'),
        desktop: require('@/assets/images/colliers-view/group3S4_2x.png'),
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

.colliers-container {
  margin: 0 auto;
}

.right-half-images {
  display: flex;
  flex-direction: column;
}

.top-half-images {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
}

img {
  margin: 5px;
}

@media (min-width: 856px) {
  .colliers-container {
    max-width: 750px;
  }

  img {
    margin: 10px;
  }
}
</style>

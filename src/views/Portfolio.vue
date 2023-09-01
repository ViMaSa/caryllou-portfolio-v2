<template>
  <div class="portfolio-spread-container">
    <div class="card bg-transparent border-0 d-flex justify-content-around">
        <div
          v-for="(card, index) in cards"
          :key="card.id"
          :class="index % 2 === 0 ? 'slide-right' : 'slide-left'"
        >
          <ProjectCard
            :image="card.image"
            :number="card.number"
            :title="card.title"
            :titleURL="card.titleURL"
          />
      </div>
    </div>
    <FooterNav
      class="portfolio-spread-footer"
      :prevUrlLink="'/about'"
      :prevLinkText="'About'"
      :nextUrlLink="'/resume'"
      :nextLinkText="'Resume'"
    />
  </div>
</template>

<script>
import FooterNav from '@/components/FooterNav.vue';
import ProjectCard from '../components/ProjectCard.vue';

export default {
  name: 'PortfolioSpread',
  components: {
    FooterNav,
    ProjectCard,
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          image: {
            mobile: require('@/assets/images/portfolio-project-cards/DigitalJournal.png'),
            desktop: require('@/assets/images/portfolio-project-cards/DigitalJournal_2x.png')
          },
          number: "01",
          title: "Digital Journal",
          titleURL: 'digital-journal'
        },
        {
          id: 2,
          image: {
            mobile: require('@/assets/images/portfolio-project-cards/Colliers.png'),
            desktop: require('@/assets/images/portfolio-project-cards/Colliers_2x.png')
          },
          number: "02",
          title: "Colliers",
          titleURL: "colliers"
        },
        {
          id: 3,
          image: {
            mobile: require('@/assets/images/portfolio-project-cards/Trek.png'),
            desktop: require('@/assets/images/portfolio-project-cards/Trek_2x.png')
          },
          number: "03",
          title: "Trek for Trees",
          titleURL: "trek-for-trees"
        },
        {
          id: 4,
          image: {
            mobile: require('@/assets/images/portfolio-project-cards/LifeAquatic.png'),
            desktop: require('@/assets/images/portfolio-project-cards/LifeAquatic_2x.png')
          },
          number: "04",
          title: "Life Aquatic",
          titleURL: "life-aquatic"
        },
      ]
    }
  },
}
</script>

<style scoped>
.slide-left,
.slide-right {
  animation-duration: 1s;
  animation-fill-mode: both;
}

.slide-left {
  animation-name: slideLeft;
}

.slide-right {
  animation-name: slideRight;
}

.portfolio-spread-container {
  margin: 0 auto
}

.portfolio-spread-footer {
  margin: 0 10px 20px 10px;
}
</style>
import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Portfolio from '../views/Portfolio.vue';
import Resume from '../views/Resume.vue';
import PortfolioLayout from '../components/PortfolioLayout.vue';

import Colliers from '../views/portfolio-projects/Colliers.vue';
import DigitalJournal from '../views/portfolio-projects/DigitalJournal.vue';
import TrekForTrees from '../views/portfolio-projects/TrekForTrees.vue';
import LifeAquatic from '../views/portfolio-projects/LifeAquatic.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/resume', component: Resume },
  {
    path: '/portfolio',
    component: PortfolioLayout,
    children: [
      { path: '', component: Portfolio },
      { path: 'colliers', component: Colliers },
      { path: 'digital-journal', component: DigitalJournal },
      { path: 'trek-for-trees', component: TrekForTrees },
      { path: 'life-aquatic', component: LifeAquatic }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
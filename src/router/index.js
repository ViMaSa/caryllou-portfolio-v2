import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Portfolio from '../views/Portfolio.vue';
import Resume from '../views/Resume.vue';
import NotFound from '../views/NotFound.vue';
import PortfolioLayout from '../components/PortfolioLayout.vue';

import Colliers from '../views/portfolio-projects/Colliers.vue';
import DigitalJournal from '../views/portfolio-projects/DigitalJournal.vue';
import TrekForTrees from '../views/portfolio-projects/TrekForTrees.vue';
import LifeAquatic from '../views/portfolio-projects/LifeAquatic.vue';

const routes = [
  {
    path: '/',
    redirect: { name: 'Home' }
  },
  {
    path: '/caryllou-portfolio-v2/',
    name: 'Home',
    component: Home
  },
  { path: '/caryllou-portfolio-v2/about', component: About },
  { path: '/caryllou-portfolio-v2/resume', component: Resume },
  {
    path: '/caryllou-portfolio-v2/portfolio',
    component: PortfolioLayout,
    children: [
      { path: '', component: Portfolio },
      { path: 'colliers', component: Colliers },
      { path: 'digital-journal', component: DigitalJournal },
      { path: 'trek-for-trees', component: TrekForTrees },
      { path: 'life-aquatic', component: LifeAquatic }
    ]
  },
  { path: '/:catchAll(.*)', component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),
  base: process.env.NODE_ENV === 'production'
    ? '/caryllou-portfolio-v2/'
    : '/',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition ? savedPosition : { top: 0 }
  },
});

export default router;
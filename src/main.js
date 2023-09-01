import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faArrowRight, faChevronDown, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faBehance, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './assets/css/animations.css';

library.add(
  faChevronDown,
  faHome,
  faInstagram,
  faEnvelope,
  faLinkedin,
  faBehance,
  faArrowLeft,
  faArrowRight,
);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');

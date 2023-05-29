import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faBehance, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './assets/css/animations.css';

library.add(
  faChevronDown,
  faInstagram,
  faEnvelope,
  faLinkedin,
  faBehance,
);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');

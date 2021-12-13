import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import '@/assets/scss/all.scss';
import '@fortawesome/fontawesome-free/js/all.min';
import 'bootstrap';

createApp(App).use(router).mount('#app');

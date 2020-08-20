import { createApp } from 'vue';
import store from './store';
import router from './router';
import App from './App.vue';

createApp(App).use(store).use(router).mount('#app');

// eslint-disable-next-line no-console
console.info(process.env.BASE_URL);

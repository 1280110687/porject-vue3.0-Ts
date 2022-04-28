import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import './libs/rem.ts';

import 'normalize.css/normalize.css';

const app = createApp(App).use(store);
// app.config.globalProperties.$fnc = fnc;
app.mount('#app');

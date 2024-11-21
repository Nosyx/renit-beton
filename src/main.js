import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// Dočasne odstráňte fullpage.js

const app = createApp(App);

app.use(router);
app.mount('#app');
